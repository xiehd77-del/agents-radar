import fs from "node:fs";
import path from "node:path";

const token = process.env.GITHUB_TOKEN;
const deepseekKey = process.env.DEEPSEEK_API_KEY;
if (!token) throw new Error("GITHUB_TOKEN is required");

const root = process.cwd();
const digestsDir = path.join(root, "digests");
const date = fs.readdirSync(digestsDir).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && fs.existsSync(path.join(digestsDir, d, "ai-trending.md"))).sort().at(-1);
if (!date) throw new Error("No ai-trending report found");

const reportPath = path.join(digestsDir, date, "ai-trending.md");
const report = fs.readFileSync(reportPath, "utf8");
const historyPath = path.join(digestsDir, "project-history.json");
const history = fs.existsSync(historyPath) ? JSON.parse(fs.readFileSync(historyPath, "utf8")) : {};
const categoryMap = [["AI 基础工具", "基础工具"], ["AI 智能体", "智能体"], ["AI 应用", "应用"], ["大模型", "模型"], ["RAG/知识库", "知识库"]];

function parseReport(md) {
  let category = "其他";
  const projects = [];
  for (const line of md.split("\n")) {
    if (/^#####/.test(line)) category = categoryMap.find(([label]) => line.includes(label))?.[1] ?? "其他";
    if (!line.trimStart().startsWith("-")) continue;
    const link = line.match(/\[([^\]]+)\]\((https:\/\/github\.com\/([^\s)]+))\)/);
    const stars = line.match(/⭐\s*([\d,]+)/);
    if (!link || !stars) continue;
    const repo = link[3];
    if (projects.some((p) => p.repo.toLowerCase() === repo.toLowerCase())) continue;
    const daily = line.match(/\(\+([\d,]+)\s+today\)/i);
    const analysis = line.split(/\s+-\s+/).slice(1).join(" - ").trim() || "今日趋势项目，详细信息请查阅 README。";
    projects.push({ name: link[1].split("/").at(-1), repo, url: link[2], category, reportedStars: Number(stars[1].replaceAll(",", "")), reportedDaily: Number((daily?.[1] ?? "0").replaceAll(",", "")), analysis });
  }
  return projects;
}

const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
async function api(url) {
  const response = await fetch(`https://api.github.com${url}`, { headers });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return { data: await response.json(), link: response.headers.get("link") ?? "" };
}
function linkCount(link, fallback) {
  const last = link.match(/[?&]page=(\d+)[^>]*>; rel="last"/);
  return last ? Number(last[1]) : fallback;
}
const clamp = (n) => Math.max(0, Math.min(100, Math.round(n)));
const daysAgo = (iso) => Math.max(1, (Date.now() - new Date(iso).getTime()) / 86400000);
const since30 = new Date(Date.now() - 30 * 86400000).toISOString();
const since90 = Date.now() - 90 * 86400000;
const context = ["ai-hn.md", "ai-community.md"].map((f) => { try { return fs.readFileSync(path.join(digestsDir, date, f), "utf8").toLowerCase(); } catch { return ""; } }).join("\n");

async function enrich(project) {
  try {
    const encoded = project.repo.split("/").map(encodeURIComponent).join("/");
    const [repoRes, commitsRes, contributorsRes, issuesRes, releasesRes, readmeRes] = await Promise.all([
      api(`/repos/${encoded}`),
      api(`/repos/${encoded}/commits?since=${encodeURIComponent(since30)}&per_page=1`),
      api(`/repos/${encoded}/contributors?anon=1&per_page=1`),
      api(`/repos/${encoded}/issues?state=closed&since=${encodeURIComponent(since30)}&per_page=100`),
      api(`/repos/${encoded}/releases?per_page=10`),
      api(`/repos/${encoded}/readme`).catch(() => ({ data: {} })),
    ]);
    const r = repoRes.data;
    const commits30d = linkCount(commitsRes.link, commitsRes.data.length);
    const contributors = linkCount(contributorsRes.link, contributorsRes.data.length);
    const closedIssues30d = issuesRes.data.filter((i) => !i.pull_request).length;
    const releases90d = releasesRes.data.filter((release) => new Date(release.published_at).getTime() >= since90).length;
    const ageDays = daysAgo(r.created_at);
    const pushedDays = daysAgo(r.pushed_at);
    const previous = history[project.repo]?.at(-1);
    const stars = r.stargazers_count;
    const dailyGrowth = previous ? Math.max(0, stars - previous.stars) : project.reportedDaily;
    const previousGrowth = previous?.growth ?? dailyGrowth;
    const acceleration = dailyGrowth - previousGrowth;
    const repoNeedle = project.repo.split("/").at(-1).toLowerCase();
    const externalMentions = context.split(repoNeedle).length - 1;
    const health = {
      commitFrequency: clamp(Math.log10(commits30d + 1) * 38),
      contributorStrength: clamp(Math.log10(contributors + 1) * 31),
      issueResponse: clamp(35 + closedIssues30d * 4 - Math.log10(r.open_issues_count + 1) * 12),
      releaseCadence: clamp(releases90d * 22 + (releasesRes.data.length ? 18 : 0)),
      license: r.license?.spdx_id && r.license.spdx_id !== "NOASSERTION" ? 100 : 25,
    };
    const potential = {
      starVelocity: clamp(30 + Math.log10(dailyGrowth + 1) * 26),
      acceleration: clamp(50 + acceleration * 2),
      projectAge: clamp(ageDays < 365 ? 88 : ageDays < 1095 ? 72 : 58),
      communityActivity: clamp((health.commitFrequency + health.contributorStrength + health.issueResponse) / 3),
      externalHeat: clamp(25 + externalMentions * 18),
    };
    const healthScore = clamp(Object.values(health).reduce((a, b) => a + b, 0) / 5);
    const potentialScore = clamp(Object.values(potential).reduce((a, b) => a + b, 0) / 5);
    const score = clamp(potentialScore * .58 + healthScore * .42);
    const risks = [];
    if (!r.license) risks.push("未检测到明确许可证");
    if (pushedDays > 45) risks.push("近期维护活跃度偏低");
    if (r.open_issues_count > closedIssues30d * 8 + 50) risks.push("Issue 积压较多");
    if (contributors < 3) risks.push("贡献者集中度较高");
    history[project.repo] = [...(history[project.repo] ?? []).filter((x) => x.date !== date), { date, stars, growth: dailyGrowth }].slice(-30);
    const readme = Buffer.from(readmeRes.data.content ?? "", "base64").toString("utf8").slice(0, 7000);
    return { ...project, description: r.description || project.analysis.split("。")[0] + "。", stars, dailyGrowth, acceleration, ageDays: Math.round(ageDays), language: r.language, homepage: r.homepage || null, topics: r.topics ?? [], forks: r.forks_count, openIssues: r.open_issues_count, commits30d, contributors, closedIssues30d, releases90d, license: r.license?.spdx_id ?? null, externalMentions, health, potential, healthScore, potentialScore, score, risks, _readme: readme };
  } catch (error) {
    console.warn(`[dashboard] ${project.repo}: ${error.message}`);
    return { ...project, description: project.analysis.split("。")[0] + "。", stars: project.reportedStars, dailyGrowth: project.reportedDaily, score: 50, healthScore: 50, potentialScore: 50, health: {}, potential: {}, risks: ["部分健康度数据暂未取得"], _readme: "" };
  }
}

const deploymentSystemPrompt = `你是资深开源项目部署顾问。根据项目 README、GitHub 元数据和今日趋势解读，为晨间读者生成“1 分钟部署决策报告”。所有面向用户阅读的内容必须使用自然、简洁的简体中文，不得直接复制英文 README 句子；Docker、Python、Node.js、CUDA、API、CLI、SDK、RAG、LLM 等技术名词和产品名保留英文，但必须用中文解释其作用。只输出 JSON，不要 Markdown。每项严格包含：repo、purpose（项目作用，45-90字简体中文）、productType（网站/Web服务/桌面应用/CLI/SDK或库/模型/数据基础设施/其他之一）、deploymentConditions（数组，2-5条简体中文具体条件）、difficulty（1-5整数）、estimatedTime（如“15–30分钟”）、suitableFor（25-60字简体中文）、deploymentSteps（数组，3-5条简体中文步骤）、risks（数组，1-4条简体中文风险）、confidence（high/medium/low）。不得猜测 README 未支持的云服务、端口或硬件；信息不足时明确写“需查阅 README”，并降低 confidence。难度标准：1=下载即用；2=单运行时/单命令；3=环境变量或容器；4=数据库/GPU/多服务；5=分布式生产部署。输出前逐项检查：除 repo、技术名词和 confidence 外，不得出现完整英文句子。`;

async function addDeploymentBriefs(items) {
  if (!deepseekKey) {
    console.warn("[dashboard] DEEPSEEK_API_KEY missing; deployment briefs will use frontend fallback");
    return;
  }
  for (let i = 0; i < items.length; i += 6) {
    const batch = items.slice(i, i + 6);
    const input = batch.map((p) => ({ repo: p.repo, category: p.category, description: p.description, language: p.language, homepage: p.homepage, topics: p.topics, license: p.license, analysis: p.analysis, readmeExcerpt: p._readme }));
    try {
      const response = await fetch("https://api.deepseek.com/chat/completions", { method: "POST", headers: { Authorization: `Bearer ${deepseekKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ model: process.env.DEEPSEEK_MODEL ?? "deepseek-chat", temperature: 0.15, max_tokens: 5000, response_format: { type: "json_object" }, messages: [{ role: "system", content: deploymentSystemPrompt }, { role: "user", content: `分析以下项目并返回 {"projects":[...]}：\n${JSON.stringify(input)}` }] }) });
      if (!response.ok) throw new Error(`DeepSeek ${response.status}`);
      const body = await response.json();
      const parsed = JSON.parse(body.choices?.[0]?.message?.content ?? "{}");
      const briefs = Array.isArray(parsed) ? parsed : parsed.projects;
      if (!Array.isArray(briefs)) throw new Error("invalid JSON shape");
      for (const project of batch) {
        const brief = briefs.find((x) => x.repo?.toLowerCase() === project.repo.toLowerCase());
        if (brief) project.deploymentBrief = brief;
      }
    } catch (error) {
      console.warn(`[dashboard] deployment brief batch failed: ${error.message}`);
    }
  }
}

const parsed = parseReport(report);
const projects = [];
for (let i = 0; i < parsed.length; i += 6) projects.push(...await Promise.all(parsed.slice(i, i + 6).map(enrich)));
await addDeploymentBriefs(projects);
projects.sort((a, b) => b.score - a.score || b.dailyGrowth - a.dailyGrowth);
for (const project of projects) delete project._readme;
const payload = { generated: new Date().toISOString(), date, methodology: "health-v1/potential-v1", projects };
fs.writeFileSync(path.join(digestsDir, date, "projects.json"), JSON.stringify(payload, null, 2) + "\n");
fs.writeFileSync(historyPath, JSON.stringify(history, null, 2) + "\n");
console.log(`[dashboard] ${projects.length} projects written for ${date}`);
