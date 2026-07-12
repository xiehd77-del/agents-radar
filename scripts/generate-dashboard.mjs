import fs from "node:fs";
import path from "node:path";

const token = process.env.GITHUB_TOKEN;
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
    const match = line.match(/^- (?:\*\*)?\[([^\]]+)\]\((https:\/\/github\.com\/([^\s)]+))\)(?:\*\*)?\s+⭐([\d,]+)(?:\s+\(\+([\d,]+) today\))?\s+-\s+(.+)$/);
    if (!match) continue;
    const repo = match[3];
    if (projects.some((p) => p.repo.toLowerCase() === repo.toLowerCase())) continue;
    projects.push({ name: match[1].split("/").at(-1), repo, url: match[2], category, reportedStars: Number(match[4].replaceAll(",", "")), reportedDaily: Number((match[5] ?? "0").replaceAll(",", "")), analysis: match[6].trim() });
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
    const [repoRes, commitsRes, contributorsRes, issuesRes, releasesRes] = await Promise.all([
      api(`/repos/${encoded}`),
      api(`/repos/${encoded}/commits?since=${encodeURIComponent(since30)}&per_page=1`),
      api(`/repos/${encoded}/contributors?anon=1&per_page=1`),
      api(`/repos/${encoded}/issues?state=closed&since=${encodeURIComponent(since30)}&per_page=100`),
      api(`/repos/${encoded}/releases?per_page=10`),
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
    return { ...project, description: r.description || project.analysis.split("。")[0] + "。", stars, dailyGrowth, acceleration, ageDays: Math.round(ageDays), language: r.language, forks: r.forks_count, openIssues: r.open_issues_count, commits30d, contributors, closedIssues30d, releases90d, license: r.license?.spdx_id ?? null, externalMentions, health, potential, healthScore, potentialScore, score, risks };
  } catch (error) {
    console.warn(`[dashboard] ${project.repo}: ${error.message}`);
    return { ...project, description: project.analysis.split("。")[0] + "。", stars: project.reportedStars, dailyGrowth: project.reportedDaily, score: 50, healthScore: 50, potentialScore: 50, health: {}, potential: {}, risks: ["部分健康度数据暂未取得"] };
  }
}

const parsed = parseReport(report);
const projects = [];
for (let i = 0; i < parsed.length; i += 6) projects.push(...await Promise.all(parsed.slice(i, i + 6).map(enrich)));
projects.sort((a, b) => b.score - a.score || b.dailyGrowth - a.dailyGrowth);
const payload = { generated: new Date().toISOString(), date, methodology: "health-v1/potential-v1", projects };
fs.writeFileSync(path.join(digestsDir, date, "projects.json"), JSON.stringify(payload, null, 2) + "\n");
fs.writeFileSync(historyPath, JSON.stringify(history, null, 2) + "\n");
console.log(`[dashboard] ${projects.length} projects written for ${date}`);
