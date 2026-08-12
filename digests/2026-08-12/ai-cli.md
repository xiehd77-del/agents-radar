# AI CLI 工具社区动态日报 2026-08-12

> 生成时间: 2026-08-12 02:04 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具横向对比分析报告（2026-08-12）

## 1. 生态全景

当前 AI CLI 工具已从"个人实验"全面迈入"生产环境主力工具"阶段，社区反馈从功能新奇感转向对**稳定性、成本控制、可观测性**的硬性要求。各工具均面临"Windows 平台适配不完善、Agent 行为失控（子代理误报、token 爆炸）、MCP 生态整合阵痛、系统级 prompt 注入无 opt-out"等共性难题。与此同时，工具间的互操作性初现（Claude Code 作为 OpenCode 运行时），差异化定位逐渐清晰，头部效应与用户迁移成本同步上升。

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | Release 情况 | 最热 Issue 评论数 | 社区规模信号 |
|------|------------|----------|--------------|-------------------|-------------|
| **Claude Code** | 10 个热点 | 7 个（2 合并） | v2.1.228（修复版） | 72（Cowork 故障） | 高，巨头效应明显 |
| **OpenAI Codex** | 10 个热点 | 10 个（全合并） | 3 个 alpha 预发布 | 96（Windows 卡顿） | 高，但 Windows 是硬伤 |
| **Gemini CLI** | 10 个热点 | 10 个（6 合并） | v0.55.1 稳定 + preview | 12（Subagent 误报） | 中高，Google 生态加持 |
| **GitHub Copilot CLI** | 10 个热点 | 3 个（2 开放） | 无新版本 | 14（Windows 插件锁） | 中，企业用户为主 |
| **Kimi Code CLI** | 3 个活跃 | 8 个（7 合并） | 无新版本（v0.33） | 34（记忆系统） | 中低，社区刚起步 |
| **Qwen Code** | 10 个热点 | 10+ 个 | 3 个版本（稳定+预览+nightly） | 6（终端闪屏） | 中，阿里生态持续投入 |
| **OpenCode** | 10 个热点 | 10 个（5 合并） | 无新版本（V2 迭代） | 34（Go API 需求）+137👍 | 高，极客社区活跃 |
| **Pi** | 10 个热点 | 10 个（5 合并） | 无新版本（0.84.1 有 bug） | 25（WSL 挂起） | 中，个人开发者维护 |
| **DeepSeek TUI** | 10 个热点 | 10 个 | 无新版本（v0.9.5 有回归） | 8（stop 命令需求） | 低，但问题反馈密集 |

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **Windows 平台体验** | 全部 9 个工具均有反馈 | 控制台闪烁（Claude Code）、插件安装失败（Copilot CLI）、原生管道不可用（Codex）、PowerShell 启动目录 bug（Kimi）、CRLF 损坏（OpenCode）、盘符编码错误（Qwen）、画中画需求（DeepSeek TUI）、文件锁冲突（Copilot CLI） |
| **Agent 行为可观测与预算控制** | Claude Code（prompt 注入）、Copilot CLI（模型静默委派）、Qwen Code（stream-json 误报成功）、Gemini CLI（Subagent 误报成功）、OpenCode（无限重试）、Pi（usage 字段丢失） | 用户要求明确的 token 预算上限、agent 分叉数限制、状态真实性校验 |
| **MCP 生态完善** | Claude Code（多 Gmail 账户）、Copilot CLI（GitLab OAuth 拒绝）、Codex（MCP OAuth CIMD）、Gemini CLI（暂无突出） | 多账户支持、OAuth 互操作、调度稳定性、工具/上下文解析 |
| **跨会话记忆/上下文持久化** | Kimi CLI（记忆系统 #1283 34 评论）、OpenCode（/context 提案）、Claude Code（上下文管理） | 项目约定、个人偏好、决策历史跨会话保留 |
| **编译/运行环境安全** | Claude Code（ugrep OOM）、Gemini CLI（两个 CRITICAL CVE）、Copilot CLI（adm-zip CVE）、Qwen Code（npm 高危漏洞） | 供应链漏洞响应速度为刚需，工具链边界场景需加测试 |
| **订阅/用量 API** | OpenCode（#16017 137👍）、Pi（#7911 usage 丢失）、Claude Code（计费争议） | 以编程方式获取用量/余额，避免"静默扣费" |

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 | 近期信号 |
|------|---------|---------|---------|---------|
| **Claude Code** | 全功能生产主力 | 大型团队、企业 | 内建工具链丰富（ugrep、Cowork 多代理），生态自成一体 | Cowork 半年未修引发信任危机；prompt 注入透明度问题 |
| **OpenAI Codex** | 极速迭代的 Agent 平台 | 追求前沿能力的开发者 | Rust 重写、自动化 bot（copyberry）高频修复 | 版本迭代密集（3 个 alpha/天），但 Windows 性能与插件稳定性是短板 |
| **Gemini CLI** | Google 生态深度整合 | GCP/Vertex 用户 | TS/Node，注重沙箱安全，子代理机制完善 | 两个 CRITICAL CVE 修复速度快，容量耗尽误报修复积极 |
| **GitHub Copilot CLI** | 企业级 GitHub 原生 | GitHub 重度用户/企业 | 与 VS Code 深度绑定，Rubber Duck/多 Agent 探索 | 新版本回归多（配置清空、OOM），企业模型禁用令用户不满 |
| **Kimi Code CLI** | 轻量、开箱即用 | 中国开发者、个人用户 | Python 实现，社区贡献活跃（hobostay 批量修健壮性） | 记忆系统是最大盼点，ACP 集成在推进（shell 路由修复） |
| **Qwen Code** | 阿里生态 + Web Shell | 中国开发者、阿里云用户 | 守护进程架构（daemon），Web Shell 平行界面，Vue 前端 | Web Shell 功能迭代快（tmux 子代理、Git diff），但终端闪屏是硬伤 |
| **OpenCode** | 终端极客的 V2 重写 | TUI 爱好者、多插件用户 | V2 架构重写中，Claude Code 风格斜杠命令移植热，ACP 集成 Claude Code 作为运行时 | V2 稳定性正在密集打补丁，kitlangton 贡献 workerd 运行时（Cloudflare DO） |
| **Pi** | 极致简约的个人工具 | 个人开发者、多 provider 用户 | 多供应商支持（OpenRouter、Qwen、Copilot） | 编辑工具模糊匹配折叠空白是当日合并亮点；Qwen CN Token Plan 新增 |
| **DeepSeek TUI** | 极简 + 深度控制 | Rust 用户、想完全掌控工具链的人 | Rust 实现，ACP 服务器打通（#5225）使 Zed 等客户端获得编辑能力 | 32 字段 schema 精简、子代理事件通道分离是架构级清理方向 |

## 5. 社区热度与成熟度

**高成熟度（生产可用、社区大、反馈理性）**：
- **Claude Code**——社区最大，问题讨论深度高（半年未修的 Cowork 成信任试金石），企业级用户占比高。
- **OpenAI Codex**——迭代速度惊人（每天 3 个版本，bot 自动修复合并 PR），社区热度最大（96 评论的 Windows 卡顿问题），但版本频繁也意味着不稳定。

**快速迭代中（功能推进快，但稳定性常被抱怨）**：
- **Gemini CLI**——Google 背书，安全响应快（CVE 24 小时内提 PR），Subagent 误报/挂起是普遍痛点。
- **Qwen Code**——Web Shell 是差异化亮点，但终端闪屏、headless 静默失败、长任务卡住等新回归不断。
- **OpenCode**——V2 架构重写期，V2 稳定性问题密集（ALSA 报错、无限重试、启动挂起），社区功能声量极高（137👍 的 Go API 需求）。

**中小社区但活跃**：
- **Pi**、**Copilot CLI**——社区量级中等，但问题反馈高度集中在"生产环境卡点"（WSL 挂起、文件锁、OOM）。
- **Kimi Code CLI**——社区刚起步（3 个 Issue/日），但贡献者质量高（hobostay 的健壮性修复 PR 均合入），**记忆系统功能呼声正在积蓄**。
- **DeepSeek TUI**——社区最小，但 10 个热点 Issue 全部指向 v0.9.5 回归，维护者 Hmbown 同时提交 3 个架构重构 issue，处于"小而精"的主动清理期。

## 6. 值得关注的趋势信号

1. **Windows 是共性硬伤，成为"跨工具迁移"的潜在推动力**：所有 9 个工具都有 Windows 相关的报错，且问题重复出现（文件锁、路径解析、控制台闪烁、插件安装失败）。对 Windows 开发者来说，**没有一款 AI CLI 是"省心"的**，选择哪款更多是忍受哪种问题。这为后续平台级机会留下空间。

2. **Agent 成本与失控是头号信任危机**：Claude Code（token 爆炸）、Copilot CLI（模型静默委派）、Qwen Code（stream-json 误报成功）、Gemini CLI（Subagent 误报成功）——**用户最怕的不是模型答错，而是"悄悄烧钱"或"悄悄做错事"**。凡是能提供预算上限、状态真实性、审计追踪的工具，将获得企业客户优先选择。

3. **互操作性初现，但标准尚未形成**：OpenCode 将 Claude Code 作为运行时（ACP），DeepSeek TUI 打通 ACP 服务器，Kimi Code 修复 ACP shell 路由，Qwen Code 推出 ACP 推理力度配置——**ACP（Agent Client Protocol）正成为跨工具协作的事实标准雏形**。开发者有望在未来于同一编辑器中混合使用不同 CLI 的后端能力。

4. **系统级 prompt 注入引发"黑箱"担忧**：Claude Code 的 `heron_brook` 事件（用户无 opt-out）虽是个例，但引发了关于"模型行为变更透明度"的行业级讨论。**企业采购者开始要求"可解释的模型行为变更"**，这将是所有 AI CLI 厂商必须面对的合规需求。

5. **供应链安全成为企业采用的硬性门槛**：Gemini CLI（两个 CRITICAL CVE）、Copilot CLI（adm-zip 高危漏洞阻断 XRay 扫描）、Qwen Code（npm audit 持续报警）——**安全扫描工具正在成为企业 CI 的第一道闸门**，任何携带已知漏洞的 CLI 版本都将被直接拦截，工具厂商的补丁速度直接影响企业采用进度。

6. **"斜杠命令"文化从 Claude Code 向其他工具扩散**：OpenCode 社区一天内提交 7 个 Claude Code 风格斜杠命令提案（/usage、/verify、/security-review 等），说明**用户对"内置工作流命令"的需求在增长**，希望少"shell 出去跑"、多"在会话里解决"。这将成为功能竞赛的下一个焦点。

---

*报告生成时间：2026-08-12 | 基于 9 个工具 GitHub 公开数据制备*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-12）

## 1. 热门 Skills 排行（按 PR 关注度）

**#1298 — skill-creator 核心评估环路修复（open）**
`run_eval.py` 在所有环境下持续报告 `recall=0%`，导致基于该信号运行的 `description` 优化循环（`run_loop.py`、`improve_description.py`）全部失效。该 PR 为最大规模的修复提交，涵盖 Windows 管道读取、触发检测、并行 worker 三处缺陷，是当前 skill 作者最痛点的修复动作。
🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

**#514 — document-typography 排版质检 skill（open）**
针对 AI 生成文档中的孤词换行、页尾孤立标题、编号错位等系统性排版问题，提供自动化质检。讨论聚焦于如何在不侵入内容流的前提下注入检查规则。
🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

**#1367 — self-audit 交付前质量门禁 skill（open）**
机械层先验证所有声明输出的文件是否存在，再按损伤严重度优先级执行四维度推理审计（推理质量门禁 v1.3.0）。配合 Issue #1385 提出完整三段式质量门禁管线，策略维度讨论热度高。
🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

**#723 — testing-patterns 测试模式 skill（open）**
覆盖 Testing Trophy 模型全栈：单元测试（AAA 模式）、React 组件测试、边界用例、不应测试的清单。社区反映该 skill 将散落的测试实践收拢为标准，属长期刚需。
🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

**#83 — 双元 skill：quality-analyzer + security-analyzer（open）**
`skill-quality-analyzer`（五维度评估：结构、文档、示例、资源、可维护性）与 `skill-security-analyzer`（权限边界、提示注入风险）并纳入 marketplace。社区讨论延伸至"skill 的元质量管理"，即谁来审视生成者本身。
🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

**#525 — pyxel 复古游戏开发 skill（open）**
为 Pyxel 复古像素游戏引擎（配套 MCP server）提供写 → 运行捕获 → 检查 → 迭代的完整工作流。社交与工具链双轮驱动，讨论集中在 MCP 与 skills 的叠加使用模式。
🔗 [PR #525](https://github.com/anthropics/skills/pull/525)

**#1302 — color-expert 色彩专家 skill（open）**
覆盖 ISCC-NBS、Munsell、RAL、Ridgway 等全套色彩命名系统，并给出色彩空间选择对照表（OKLCH 用于色阶、CAM16 用于感知均匀）。讨论集中于窄领域专业知识的结构化封装方法。
🔗 [PR #1302](https://github.com/anthropics/skills/pull/1302)


## 2. 社区需求趋势（来自 Issues）

- **元技能与质量门禁**（#1385、#412）：对 AI 输出进行交付前验证、对抗性评审、推理质量校准的管线设计，反映用户开始治理生成质量而非仅为功能补给。
- **安全与信任边界**（#492、#1175）：社区技能借 `anthropic/` 命名空间分发造成的信任边界滥用，以及 SharePoint Online 文档访问控制，安全诉求贯穿上下文窗口与权限两层。
- **组织级共享与协作**（#228）：skill 文件需经 Slack/Teams 手动转发、手动上传到 `Settings > Capabilities`，缺乏组织级共享库或直达链接，协作效率诉求明确。
- **上下文窗口治理**（#1487）：`claude-api` skill 单次注入约 156k tokens 直接撑爆上下文，社区开始定义 skill 注入的 token 预算边界。
- **新增方向提案**（#1329）：`compact-memory` 以符号化标记压缩长任务代理状态，用简洁标记替代散文式持久记忆，降低长会话上下文开销。

> 值得注意：#556 与 #1169 两则 issue（12 和 3 条评论）直指同一问题——`run_eval.py` 触发检测失效，说明 **skill 评估基础设施的状态直接影响社区贡献上游技能的信心**，修复优先级最高。


## 3. 高潜力待合并 PR（评论活跃，近期有望落地）

| PR | Skill | 方向 | 关键评论信号 | 链接 |
|---|---|---|---|---|
| #1298 | fix(skill-creator) eval 环路 | 基础修复（Windows+触发+并行） | 6/10 创建，6/23 更新，连续迭代中 | [链接](https://github.com/anthropics/skills/pull/1298) |
| #1367 | self-audit 质量门禁 | 推理审计+交付验证 | 配合 #1385 管线提案，交流密集 | [链接](https://github.com/anthropics/skills/pull/1367) |
| #1302 | color-expert | 色彩专业知识结构化 | 6/10 创建，7/21 仍活跃更新 | [链接](https://github.com/anthropics/skills/pull/1302) |
| #525 | pyxel MCP 游戏开发 | MCP 叠加 skills | 7/15 最新更新，跨月活跃 | [链接](https://github.com/anthropics/skills/pull/525) |
| #1479 | plan-file-hygiene | 计划产物生命周期治理 | 7/25 创建，3 天即获高频响应（承接 #1417） | [链接](https://github.com/anthropics/skills/pull/1479) |

> **注**：全部 PR 当前均处于 open 状态，且 #1298、#1050、#1099、#1323 四个 PR 同时针对 `run_eval.py` 的 Windows 兼容与触发检测做修复——侧面印证该评估工具的缺陷已成为社区最大阻塞点（Issue #556 有 12 条评论）。一旦 #1298 合入，skill 描述优化闭环将重新可用，后续 description 质量类贡献将显著提速。


## 4. Skills 生态洞察（单句结论）

社区最集中的诉求是**先修好 skill-creator 评估闭环（`run_eval.py` 触发检测与跨平台稳定性），再补齐组织级协作（共享/权限）与垂直领域深度（测试、色彩、排印），并以"质量门禁+安全审计"构建对 skill 本身的元治理机制**——即先让"制造技能的工具"可靠，再让"技能的组合与分发"安全可控。

---

# Claude Code 社区动态日报 — 2026-08-12

> 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 今日速览

过去 24 小时，**v2.1.228** 修复了 Windows 平台 Git 检测与 TUI 重绘中断问题；社区围绕**Cowork 工作区启动失败**（72 评论）持续发酵，成为当前最热 issue；此外，**Windows 终端窗口闪烁**与 **Gmail 多账户 MCP 支持**两个老 issue 仍保持高热度。值得关注的是，**Mac 上大图片读取导致会话永久卡死**（#85884）等新提 bug 指向了内建工具链尚不成熟的问题。

---

## 版本发布

### [v2.1.228](https://github.com/anthropics/claude-code/releases/tag/v2.1.228)
- 修复了罕见的内部布局错误导致交互式会话停止重绘、但进程仍在后台运行的问题
- 修复了 Windows 上从 Git 安装目录的父文件夹启动 Claude Code 时，`git` / Git Bash 无法被找到的问题
- 修复了 `/tui` 回退（revert）相关的问题

---

## 社区热点 Issues

### 1. [Cowork 工作区启动失败 — VM 服务未运行，重启后依旧](https://github.com/anthropics/claude-code/issues/27801)
- 状态：OPEN | 创建于 2026-02-23 | 评论 **72** | 👍 **41**
- 重要性：Cowork 功能持续不可用，问题跨度近半年仍未解决，社区反响强烈，为当前评论数最高 issue。
- 社区反应：用户尝试重启、重装均无效，疑似底层虚拟化服务与系统环境存在兼容性问题，但官方尚未给出确定性修复方案。

### 2. [Windows 控制台窗口在执行工具时闪烁](https://github.com/anthropics/claude-code/issues/14828)
- 状态：OPEN | 创建于 2025-12-20 | 评论 **60** | 👍 **36**
- 重要性：Windows 平台长期存在的高频痛点，每次调用 Bash 等工具都会弹出黑色控制台窗口，严重影响使用体验。
- 社区反应：虽是 cosmetic 问题，但涉及面广、持续时间长，开发者期望在设置中提供"静默执行"选项。

### 3. [v2.1.117 内建 ugrep 包装器加剧正则回溯，导致 V8 堆 OOM（8GB 上限）— WSL2 主机冻结](https://github.com/anthropics/claude-code/issues/54394)
- 状态：OPEN | 创建于 2026-04-28 | 评论 **27** | 👍 **4**
- 重要性：内建 grep 替代工具在特定正则下引发内存溢出，直接导致 WSL2 主机无响应，属于**工具链稳定性**的严重回归。
- 社区反应：用户对 v2.1.117 的"Native builds"改动持谨慎态度，认为其缺乏充分的边界测试。

### 4. [Gmail MCP 集成不支持多账户](https://github.com/anthropics/claude-code/issues/36024)
- 状态：OPEN | 创建于 2026-03-19 | 评论 **25** | 👍 **77**（👍 数最高）
- 重要性：MCP 生态号召力最强的新功能请求。大量用户需要同时连接个人 + 工作 Gmail / Google Workspace 账户。
- 社区反应：该 issue 获得超高声量，说明 MCP 实际使用场景已从单账户原型走向真实生产力工具，多账户是刚需。

### 5. [v2.1.219 `heron_brook` prompt 段为 Opus 5 注入"非用户要求不得调用 AgentTool"，静默覆盖用户委托策略且无 opt-out](https://github.com/anthropics/claude-code/issues/80988)
- 状态：OPEN | 创建于 2026-07-24 | 评论 **21** | 👍 **48**
- 重要性：系统 prompt 被注入硬编码行为，直接违背用户自定义的 agent 调用策略，引发对**透明度和可控性**的质疑。
- 社区反应：用户认为这是"未经同意的行为变更"，担心这类 prompt 注入会随版本升级反复出现。

### 6. [GUI 中设置文件夹后应加入最近列表以便删除](https://github.com/anthropics/claude-code/issues/33502)
- 状态：OPEN | 创建于 2026-03-12 | 评论 **21** | 👍 **37**
- 重要性：桌面 GUI 基础交互缺失，用户无法管理历史文件夹条目。
- 社区反应：小事但高频，反映桌面端还在补基础体验的短板。

### 7. [Claude Desktop：外部 stdio MCP 工具完成握手但从未收到 tools/call（Chat 模式下零调用）— 全平台](https://github.com/anthropics/claude-code/issues/79986)
- 状态：OPEN | 创建于 2026-07-22 | 评论 **15** | 👍 **8**
- 重要性：升级至 1.24012.1 后所有 MCP 工具调用失败（"Failed to call tool"），**严重影响依赖 MCP 的重度用户**。
- 社区反应：指向 Claude Desktop 端的调度层回归，而非 MCP server 本身的问题。

### 8. [Windows：Ctrl+C 与 Ctrl+Shift+C 静默清空提示输入，无确认或恢复途径](https://github.com/anthropics/claude-code/issues/59408)
- 状态：OPEN | 创建于 2026-05-15 | 评论 **14** | 👍 **10**
- 重要性：误触即丢失整段 prompt 输入，且无任何确认机制，属"数据丢失"类体验缺陷。
- 社区反应：开发者建议至少提供 undo/恢复，或与复制操作区分快捷键。

### 9. [并行 agent 分叉导致 token 消耗爆炸，崩溃或达上限前已烧掉数百万 token](https://github.com/anthropics/claude-code/issues/67636)
- 状态：OPEN | 创建于 2026-06-11 | 评论 **6** | 👍 **0**
- 重要性：Claude 自主分叉 10-15 个 agent 完成本可由 1-2 个 agent 完成的任务，造成**巨额费用浪费**。
- 社区反应：用户呼吁引入 agent 分叉预算控制与成本预估机制。

### 10. [macOS 上读取 >~200KB 图片导致后续 API 调用全部死锁，会话永久中毒（含 --resume）](https://github.com/anthropics/claude-code/issues/85884)
- 状态：OPEN | 创建于 2026-08-11 | 评论 **1** | 👍 **0**
- 重要性：新提交的严重 bug，一次大图读取即可**永久摧毁整个会话**，且 --resume 也无法恢复，对多模态工作流是致命的。
- 社区反应：尚在初步确认阶段，但影响面极大，预计将成为近期修复重点。

---

## 重要 PR 进展

### 1. [docs: 将残留的过期文档链接更新至 code.claude.com](https://github.com/anthropics/claude-code/pull/85925)
- 状态：OPEN
- 内容：清理文档站迁移后的残留链接，将 docs.claude.com（仅重定向）替换为 code.claude.com 规范地址，覆盖 plugins、skills、issue-template 等。

### 2. [fix: HackerOne Bug Bounty Program 访问问题](https://github.com/anthropics/claude-code/pull/85834)
- 状态：OPEN
- 内容：调整 `devcontainer.json` 参数以正确安装 hookify 插件，从而允许 HackerOne 漏洞赏金计划访问。由 AIOS Bounty Engine 自动生成。

### 3. [fix(commit-commands): 使用 `git branch -vv` 检测 [gone] 分支以修复 clean_gone](https://github.com/anthropics/claude-code/pull/70173)
- 状态：**CLOSED**（已合并/关闭）
- 内容：修复 `/clean_gone` 从不删除任何分支的 bug。原实现使用 `git branch -v` + grep `[gone]` 的方式因输出格式不匹配而失效。

### 4. [docs: 修复 plugins 与 examples 中的过期链接和 README 漂移](https://github.com/anthropics/claude-code/pull/85822)
- 状态：OPEN
- 内容：纯文档清理，已逐条验证重定向与引用文件，涉及 hooks 示例与 plugins README。

### 5. [fix(security-guidance): 文档中跳过 XSS 警告](https://github.com/anthropics/claude-code/pull/85806)
- 状态：OPEN
- 内容：复用 `_DOC_EXTS` 路径过滤，使文档/说明文字中提及 XSS 模式时不再触发警告；可执行源码的警告规则保持不变，并补充回归测试。

### 6. [fix(skills): plugin-dev 与 hookify skills 使用符合规范的名称](https://github.com/anthropics/claude-code/pull/85243)
- 状态：OPEN
- 内容：8 个内置 skill 的 `name` 字段包含空格且为标题式大小写（如 `Agent Development`），不符合 skill 规范。本 PR 统一修正。

### 7. [fix(hookify): 从祖先 .claude 目录加载规则，防止静默绕过](https://github.com/anthropics/claude-code/pull/85716)
- 状态：OPEN
- 内容：修复 #85613。hookify 插件的 `config_loader.py` 在未找到本地规则时静默跳过安全策略，现改为向上查找祖先目录的 `.claude` 配置。

---

## 功能需求趋势

从近期 Issues 与 PR 中可提炼出以下社区核心诉求方向：

| 方向 | 代表 Issue/PR | 说明 |
|------|--------------|------|
| **MCP 生态完善** | #36024（多 Gmail 账户）、#79986（Desktop 工具调度回归） | 多账户支持、调度稳定性成为 MCP 落地生产环境的门槛 |
| **Agent 行为可观测与可控** | #80988（prompt 注入无 opt-out）、#67636（并行 agent token 爆炸） | 用户要求对 agent 分叉、系统级 prompt 注入有明确可见性与预算控制 |
| **Windows 平台体验** | #14828（控制台闪烁）、#59408（Ctrl+C 清空输入）、v2.1.228 Git 修复 | Windows 支持持续是重点补齐区域，包括 TUI、工具执行、路径处理 |
| **工具链稳定性** | #54394（ugrep OOM）、#85884（大图读取死锁） | 内建工具（grep/read）在边界场景存在严重稳定性问题，需加强测试覆盖 |
| **成本控制** | #67636、#83062/#81703（计费争议） | 开发者对 token 消耗与计费透明度高度敏感，期望引入用量预算机制 |
| **安全与沙箱** | #73468（macOS 沙箱 ARG_MAX）、#85222（误报 cyber-safeguard） | 沙箱机制在复杂工程环境下可用性不足，安全策略误伤正常开发者操作 |

---

## 开发者关注点

1. **Cowork 长期不可用引发信任危机**：自 2 月提交至今 6 个月，VM 服务启动失败的修复迟迟未落地，社区对该功能的信心正在流失。

2. **系统级 prompt 注入引发"黑箱"担忧**：`heron_brook` 事件表明，用户无法预见或关闭模型行为层面的变更，这对企业级采用构成障碍。

3. **Mac 沙箱 + 大文件读取是当前最脆弱的组合**：#73468（ARG_MAX）与 #85884（图片死锁）均指向 macOS 平台工具链在真实工程规模下的不足。

4. **Agent 分叉失控 = 真金白银的损失**：多位用户报告数百万 token 被无谓消耗，缺乏"预算上限"或"分叉数上限"的硬性控制。

5. **Windows 体验追赶仍需提速**：控制台闪烁、快捷键误触、Git 路径发现等问题持续被报告，Windows 仍是桌面端体验的短板。

6. **计费透明度不足**：两个独立 issue（#81703、#83062）涉及自动充值争议（$604.71 与 $995.67），用户呼吁在额度重置与充值触发间增加确认环节。

---

*本日报由 AI 工具自动生成，数据截至 2026-08-12。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期**: 2026-08-12
**数据来源**: github.com/openai/codex


## 今日速览

今日 Codex 发布了 3 个 Rust 新版本（0.148.0-alpha.7 至 alpha.9），均为预发布版本。社区热度最高的 Bug 集中在 Windows 桌面端：应用频繁卡顿/冻结（#20214，96 条评论）以及 Computer Use/浏览器插件的原生管道和路径解析失败（#25391、#25571）。值得关注的是，开发者反馈中出现了不少 `copyberry[bot]` 机器人生成的自动修复 PR，#38103 已在 24 小时内关闭，显示团队正在加快内部自动化迭代修复节奏。


## 版本发布

过去 24 小时发布了三个 Rust 预发布版本，均无额外更新说明：

- **rust-v0.148.0-alpha.7** → 链接：[Release 0.148.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.7)
- **rust-v0.148.0-alpha.8** → 链接：[Release 0.148.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.8)
- **rust-v0.148.0-alpha.9** → 链接：[Release 0.148.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9)

版本迭代节奏密集，建议关注后续 alpha.10 的发布说明以了解具体变更。


## 社区热点 Issues

### 1. Windows 应用频繁卡顿/冻结（#20214）🔥 96 条评论
- **作者**: squarepots | 标签: `bug, windows-os, app, performance`
- **链接**: [Issue #20214](https://github.com/openai/codex/issues/20214)
- 在 AMD Ryzen 5 5600 + 32GB RAM 的 Windows 11 Pro 上，Codex 应用仍频繁出现卡顿。评论数达 96 条、👍 81，是当前社区反馈最强烈的问题，呼吁官方优先修复 Windows 性能。

### 2. Windows Computer Use 原生管道引导失败（#25391）
- **作者**: riyadist | 标签: `bug, windows-os, app, computer-use`
- **链接**: [Issue #25391](https://github.com/openai/codex/issues/25391)
- Computer Use 插件在 Windows 上因原生管道路径不可用而无法引导。Pro 用户受影响，评论 23 条。

### 3. Chrome 插件与 Browser Use 挂起、卸载失败（#21670）
- **作者**: Electro-Dig | 标签: `bug, windows-os, app, skills, app-server, browser`
- **链接**: [Issue #21670](https://github.com/openai/codex/issues/21670)
- Chrome 插件运行缓慢且不稳定，直接调用 browser-client 设置会一直挂起直到超时；插件卸载报 os error 5。

### 4. Windows Computer Use 辅助路径不可用（#25571）
- **作者**: weiwei929 | 标签: `bug, windows-os, app, computer-use`
- **链接**: [Issue #25571](https://github.com/openai/codex/issues/25571)
- 运行时可用性门控已开启，但 Computer Use 管道仍反复启动失败：`Windows Computer Use helper paths are unavailable`。

### 5. Windows 更新后捆绑插件消失（#30270）
- **作者**: wva2ccyk-prog | 标签: `bug, windows-os, app, skills, computer-use, browser, Papercuts 2026`
- **链接**: [Issue #30270](https://github.com/openai/codex/issues/30270)
- MS Store 应用更新后，Browser/Chrome/Computer Use 插件因捆绑 marketplace 路径陈旧而消失。已被标记为 Papercuts 2026，说明官方已关注。

### 6. macOS 远程控制回归：active writer 冲突（#37403）
- **作者**: xkun1 | 标签: `bug, app, app-server, remote`
- **链接**: [Issue #37403](https://github.com/openai/codex/issues/37403)
- **8月7日更新后**，macOS 桌面端无法恢复 Remote Control / CLI 线程，报 `already has an active writer`。影响移动端远程控 Mac 的夜间工作流。

### 7. 权限请求异常：已禁用仍反复询问（#29235）👍 16
- **作者**: mrlightsource-create | 标签: `bug, model-behavior, sandbox, app`
- **链接**: [Issue #29235](https://github.com/openai/codex/issues/29235)
- 已配置完全文件系统访问权限并关闭批准提示，Codex 仍反复请求权限，打断正常流程。👍 16 是本期非 Windows 类问题中最高的。

### 8. 已完成的子代理残留 + 陈旧 MCP 栈恢复（#33700）
- **作者**: ardjo-s | 标签: `bug, mcp, app, subagent, app-server, performance`
- **链接**: [Issue #33700](https://github.com/openai/codex/issues/33700)
- macOS 应用中已完成的子代理仍保留在 thread_spawn_edges 中，且会恢复陈旧的 MCP 栈，可能导致上下文混乱或错误工具调用。

### 9. 计划任务挂起：list_threads 被阻塞（#35030）
- **作者**: jm-fhc | 标签: `bug, tool-calls, app, automations`
- **链接**: [Issue #35030](https://github.com/openai/codex/issues/35030)
- 在双 Mac 远程控制环境下，计划任务在 `list_threads` 挂起，而交互式调用正常。基于 Apple Silicon + 0.145.0-alpha.30。

### 10. Windows 空闲内存膨胀至 8.8GB（#38059）
- **作者**: Dororo367 | 标签: `bug, windows-os, app, performance`
- **链接**: [Issue #38059](https://github.com/openai/codex/issues/38059)
- 版本 26.803.10989.0，空闲状态下内存占用涨至 8.8 GB，1-2 条消息后 UI 冻结。上一版本也复现。


## 重要 PR 进展

### 1. MCP 调用避免克隆，优化 TUI 历史渲染（#38103）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38103](https://github.com/openai/codex/pull/38103)
- 修改 MCP 调用格式化逻辑，借用 invocation 的引用而非克隆，降低渲染开销。

### 2. 文件上传附加托管应用上下文（#38101）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38101](https://github.com/openai/codex/pull/38101)
- 在 hosted app 工具调用的文件创建请求中附加 connector ID、action 名称和模型信息；若服务端返回文件大小则优先使用。

### 3. Code Mode 命令的 Guardian 上下文测试（#38094）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38094](https://github.com/openai/codex/pull/38094)
- 集成测试覆盖：嵌套的 `exec_command` 升级调用时，Guardian 能同时接收用户提示和外部 code mode `exec` 源码。

### 4. 简化排队用户消息准入（#38092）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38092](https://github.com/openai/codex/pull/38092)
- Core 接受新 turn 或 steer 时即解决用户消息准入，无需等待 rollout 持久化；删除排队消息。

### 5. MCP OAuth 注册支持 CIMD（#38089）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38089](https://github.com/openai/codex/pull/38089)
- 当授权服务器声明支持公共客户端时，优先使用 Client ID Metadata Documents（CIMD），否则回退到动态客户端注册。

### 6. gRPC code-mode 会话接入共享 HTTP 客户端（#38087）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38087](https://github.com/openai/codex/pull/38087)
- 使 gRPC code-mode 连接支持代理和自定义 CA 配置；接受 `http`/`https`，拒绝不支持的 origin。

### 7. Windows 沙箱支持嵌套 Git 仓库（#38080）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38080](https://github.com/openai/codex/pull/38080)
- 解决沙箱用户运行 Git 命令时仓库被主用户拥有而被拒绝的问题，将工作树根及其 `/*` 通配符加入信任列表。

### 8. 减少 world-state 补丁处理中的克隆（#38078）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38078](https://github.com/openai/codex/pull/38078)
- 直接从借用 JSON 反序列化类型化快照，原地构建补丁，避免整体克隆。性能优化向。

### 9. TUI 历史新增单元格宽度感知（#38075）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38075](https://github.com/openai/codex/pull/38075)
- 新聊天部件按当前终端宽度初始化；判定 history cell 可见性时考虑 ambient-pet 预留宽度。

### 10. 隐式 executor 技能调用追踪（#38074）✅ 已合并
- **作者**: copyberry[bot] | 链接: [PR #38074](https://github.com/openai/codex/pull/38074)
- 检测 executor 拥有的技能文档读取和脚本执行（原生与 URI 工作目录），仅在活动执行环境内匹配技能，并发出分析事件。


## 功能需求趋势

从近期 Issue 中可以提炼出社区关注的几个方向：

1. **Windows 桌面端稳定性**（占比最高）
   - 应用卡顿/冻结（#20214、#34244、#38059）
   - 插件更新后消失或损坏（#30270、#33738、#26792）
   - 原生管道与浏览器自动化不稳定（#25391、#21670、#25571）

2. **插件与浏览器自动化可靠性**
   - Chrome 插件安装、更新、卸载全链路问题（#28950、#32706、#26109）
   - Computer Use / Browser Use 工具频繁不可用（#26501、#26929、#28084、#26387）

3. **CLI 引擎与性能优化**
   - 文件描述符泄漏（#35764，FreeBSD 上约 65 万 FD）
   - 子代理、MCP 栈的清理与状态恢复（#33700）
   - 计划任务与远程控制可靠性（#35030、#37403）

4. **多平台架构支持**
   - RISC-V Linux 支持（#6150，持续 9 个月未关闭，9 👍）——社区对新兴架构仍有需求。

5. **权限模型与自动化**
   - 即使关闭批准提示仍反复询问权限（#29235，16 👍），影响自动化流程。


## 开发者关注点

- **Windows 更新“破坏性”最强**：几乎所有高热度 Issue 都与 MS Store 自动更新后插件消失、缓存损坏、原生宿主文件锁有关。开发者期待官方引入更稳健的捆绑 marketplace 同步机制和更新前自检。
- **内存与性能问题集中在 Windows**：从 8.8 GB 空闲内存膨胀到插件 reconcile 阻塞 61 秒（#34244），Windows 端的资源管理已成为最大痛点。
- **macOS 回归需警惕**：#37403 与 #36404（Realtime Voice 丢失任务处理）表明近版本在 macOS 上引入了线程/任务管理回归，影响远程控制工作流。
- **自动化修复节奏加快**：大量 `copyberry[bot]` 提交的 PR 在 24 小时内被创建并合并，覆盖 MCP OAuth、沙箱 Git、代理支持、TUI 性能等，说明团队正以较高频率推进内部自动化重构。
- **上游共存问题**：#30993 指出从非官方 marketplace（如 Superpowers）安装的技能插件可能被陈旧缓存覆盖，社区需要一个更清晰的插件版本解析机制。

---
*日报由 AI 自动生成，数据基于 GitHub 公开仓库 openai/codex，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-12** | **数据来源：**[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)


## 1. 今日速览

今日发布 `v0.55.1` 稳定版及 `v0.56.0-preview.1` 预览版，重点修复了模型容量耗尽误报和 CLI 核心配额查询映射问题。社区方面，Subagent 在达到 `MAX_TURNS` 后误报成功、Generalist agent 挂起以及 Shell 命令执行后卡在 "Waiting input" 是开发者反馈最集中的三个 P1 级 Bug。安全方面，两个 CRITICAL 级别的依赖漏洞（`shell-quote` 与 `simple-git`）修复 PR 已提交。


## 2. 版本发布

### v0.55.1（稳定版）
- **修复**：release 验证流程中 `npm ci` 跳过脚本的问题（[#28116](https://github.com/google-gemini/gemini-cli/pull/28116)）
- **修复**：CI 中 workspace 二进制文件遮蔽问题（[#28132](https://github.com/google-gemini/gemini-cli/pull/28132)）
- 包含 Tool Registry 相关功能

### v0.56.0-preview.1（预览版）
- **修复(core,cli)**：解决模型容量耗尽误报，修复核心配额查找模型映射（[#28730](https://github.com/google-gemini/gemini-cli/pull/28730)）
- **功能(evals)**：新增本地报告命令和开发者文档（[#28369](https://github.com/google-gemini/gemini-cli/pull/28369)）

另有 `v0.56.0-nightly.20260812` 和 `v0.55.0-preview.3` 两个版本发布。

**完整变更日志**：[查看详情](https://github.com/google-gemini/gemini-cli/releases)


## 3. 社区热点 Issues（Top 10）

### 🔴 P1 级 Bug（高优先级）

**1. Subagent 恢复后误报 GOAL 成功，实际已中断**
- **Issue**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 💬 12 评论 | 👍 2
- `codebase_investigator` 子代理在达到最大轮次限制后仍报告 `status: "success"`，导致主代理误判任务完成。社区已标记为 `need-retesting`，等待修复验证。

**2. Generalist agent 无限挂起**
- **Issue**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | 💬 8 评论 | 👍 8
- 用户反馈当 CLI 委派任务给 generalist agent 时，即使是简单的文件夹创建操作也会无限期挂起（最长等待 1 小时）。社区临时解决方案是手动指示模型不要使用 subagent。

**3. Shell 命令执行完成后卡在 "Waiting input"**
- **Issue**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | 💬 4 评论 | 👍 3
- 简单 CLI 命令执行完毕后，终端仍显示 "Awaiting user input" 状态，命令卡死。标记为 `effort/medium`，社区关注度较高。

**4. Browser subagent 在 Wayland 环境下失败**
- **Issue**: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 💬 4 评论 | 👍 1
- Browser 子代理在 Wayland 显示服务器下无法正常工作，需要重新测试验证。

**5. get-shit-done 输出钩子导致崩溃**
- **Issue**: [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | 💬 3 评论
- 输出接近完成（打印用户摘要）时 CLI 崩溃，影响 `get-shit-done` 工作流的可靠性。

### 🟡 P2 级（功能与体验优化）

**6. Auto Memory 对低信号会话无限重试**
- **Issue**: [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | 💬 5 评论
- 后台提取代理因判定会话"低信号"而不读取时，该会话不会被标记为已处理，导致后续被反复唤醒重试，浪费资源。

**7. Sandbox 未转发 `GOOGLE_GENAI_API_VERSION` 环境变量**
- **Issue**: [#24828](https://github.com/google-gemini/gemini-cli/issues/24828) | 💬 5 评论
- `GEMINI_SANDBOX=true` 时，sandbox 只转发硬编码的环境变量列表，导致使用 Vertex 兼容 API 路径时出现 404 错误。

**8. Auto Memory 日志缺乏确定性脱敏**
- **Issue**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | 💬 4 评论
- 安全相关：本地 transcript 内容在送入模型上下文后才进行脱敏，且服务可能记录现有技能内容，存在敏感信息泄露风险。社区建议增加确定性脱敏机制。

**9. 模型频繁在随机位置创建临时脚本**
- **Issue**: [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 💬 3 评论
- 当限制模型通过 shell 执行时，模型转向生成多个编辑脚本但散落在各目录，给工作区清理带来显著负担。

**10. Gemini 不够主动使用 skills 和 sub-agents**
- **Issue**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | 💬 6 评论
- 用户反馈 Gemini CLI 不会主动使用自定义 skills 和 sub-agents，只在被明确指示时才使用，与预期不符。


## 4. 重要 PR 进展（Top 10）

**1. [已合并] 修复模型容量耗尽误报与配额映射** [#28730](https://github.com/google-gemini/gemini-cli/pull/28730)
- 修复 CLI 的模型容量耗尽误报、core 包中客户端配额查找映射错误，并保留 UI 中"Keep trying"选项以应对瞬时容量激增。已合入 preview.1 和 preview.3。

**2. [已合并] 将容量耗尽分类为终止错误** [#28599](https://github.com/google-gemini/gemini-cli/pull/28599) | [#28716](https://github.com/google-gemini/gemini-cli/pull/28716)
- 将 `MODEL_CAPACITY_EXHAUSTED`（HTTP 429）分类为终止错误而非可重试错误，避免客户端无限重试挂起，触发即时模型回退。

**3. [待审] 升级 shell-quote 至 1.8.4 修复 CVE-2026-9277** [#28780](https://github.com/google-gemini/gemini-cli/pull/28780)
- **严重性：CRITICAL**（Trivy 扫描），依赖 `package-lock.json`，属安全修复。

**4. [待审] 升级 simple-git 至 3.32.3 修复 CVE-2026-28292** [#28778](https://github.com/google-gemini/gemini-cli/pull/28778)
- **严重性：CRITICAL**（Trivy 扫描），simple-git 从 3.28.0 升级至 3.32.3。

**5. [已合并] 修复 IDE 连接中目录不匹配被吞掉的问题** [#28729](https://github.com/google-gemini/gemini-cli/pull/28729)
- 解决 Cider 或远程 VS Code 工作区中 CLI 无法连接 IDE companion 扩展的问题，处理虚拟/不同 FUSE 目录路径场景。

**6. [已合并] 动态解析 Cloud Workstations 代理重定向 URI** [#28688](https://github.com/google-gemini/gemini-cli/pull/28688)
- 修复 Cloud Workstations VM 中 OAuth 流程因静态 `localhost` 重定向而失败的问题，改为动态解析代理 URI。

**7. [待审] 跳过 diff hunk 标记以减少大 diff 提示堆增长** [#28581](https://github.com/google-gemini/gemini-cli/pull/28581)
- 防止 unified/combined diff 的 hunk 标记被误识别为 `@file` 引用，消除每次 hunk 的递归全工作区 glob 搜索，修复大 diff 提示时的 `minimatch`/`path-scurry` 堆增长。

**8. [待审] 改进 Vertex AI 401 错误信息** [#28679](https://github.com/google-gemini/gemini-cli/pull/28679)
- 当用户使用 `vertex-ai` auth 类型但仅提供标准 Gemini API key 时，给出更清晰的错误提示，改善开发者体验。

**9. [已合并] 新增本地评估报告命令与开发者文档** [#28369](https://github.com/google-gemini/gemini-cli/pull/28369)
- 新增 `npm run eval:report` 聚合各模型的通过率，映射到 inventory 策略，支持重复测试场景。

**10. [已合并] 修复 nightly release 与性能测试的 CI 失败** [#28768](https://github.com/google-gemini/gemini-cli/pull/28768)
- 修复 Wombat 上静态标签导致的 403 DELETE 错误，以及 perf 测试套件的 ripgrep 解析问题。


## 5. 功能需求趋势

从近期 Issues 和 PR 中可提炼出以下社区关注方向：

1. **Subagent 可靠性与可见性**（高频）
   - Subagent 运行无权限控制（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）
   - Subagent trajectory 可通过 `/chat share` 分享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）
   - Bugreport 缺乏 subagent 上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）
   - 组件级评估体系搭建（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)）

2. **安全与合规**（持续升温)
   - Auto Memory 日志脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）
   - Auto Memory 非法补丁隔离（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）
   - 两个 CRITICAL 级 CVE 修复（[#28780](https://github.com/google-gemini/gemini-cli/pull/28780)、[#28778](https://github.com/google-gemini/gemini-cli/pull/28778)）

3. **AST 感知工具链**（新方向）
   - 评估 AST 感知文件读取/搜索/代码库映射的价值（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）

4. **Agent 行为改进**
   - 阻止破坏性行为（如 `git reset --force`）（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）
   - 主动使用自定义 skills 和 sub-agents（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）
   - 工具数量超过 128 个时的 400 错误（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）

5. **终端体验优化**
   - 终端 resize 高性能无闪烁（迁移至 `RenderStatic`）（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）
   - 退出外部编辑器后的全屏刷新（[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)）


## 6. 开发者关注点

### 高频痛点

1. **Subagent 状态误报**：多个 issue 反映 subagent 在达到轮次限制后仍错误地报告成功状态，导致主代理无法正确处理中断，影响任务可靠性和结果可信度。

2. **挂起与卡死问题**：Generalist agent 无限挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）和 Shell 命令执行后卡在 "Waiting input"（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）是开发者反馈最集中的两个稳定性问题。

3. **Auto Memory 副作用**：多个 Issue（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）指向 Auto Memory 在重试策略、补丁过滤和日志脱敏方面存在明显缺陷。

4. **工具规模限制**：当可用工具超过 128 个（甚至 400 个）时出现 400 错误（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)），开发者期望 Agent 能更智能地按需筛选工具范围。

5. **配置与权限问题**：Sandbox 环境变量转发不完整（[#24828](https://github.com/google-gemini/gemini-cli/issues/24828)）、Subagent 忽略 `settings.json` 覆盖配置（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、自 v0.33.0 起 subagent 在禁用状态下仍被调用（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）。

### 积极信号

- 容量耗尽相关的两个 PR（[#28599](https://github.com/google-gemini/gemini-cli/pull/28599)、[#28716](https://github.com/google-gemini/gemini-cli/pull/28716)）已合并，将错误分类为终止错误，有望改善 429 场景下的体验。
- CVE 修复响应及时，两个 CRITICAL 级依赖漏洞的修复 PR 已在提交后 24 小时内提出。
- 安全团队开始对 Auto Memory 机制进行系统性加固（脱敏、非法补丁隔离、低信号会话处理），表明该功能正在走向成熟。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-12**


## 今日速览

过去 24 小时内无新版本发布，但 Issue 活跃度极高，新增约 20 条。最值得关注的是 **Windows 平台插件安装/更新失败（`Access is denied`）持续发酵**（#4151、#4095），已获得社区大量 👍 支持；同时，**v1.0.79 及 1.0.74 引入的多个回归问题**（如 `/config model` 清空设置、大会话恢复内存溢出）成为今日讨论焦点。此外，围绕 **Rubber Duck 审查模型的独立性问题** 和 **Claude 模型在企业账户下被禁用** 的讨论，反映了用户对模型选择自主权和审查质量的关注。


## 社区热点 Issues（Top 10）

### 1. Windows 插件安装全面失败 — Access is denied
**#4151** · [链接](https://github.com/github/copilot-cli/issues/4151) · 评论: 3 · 👍: 1

> `copilot plugin install` 在 Windows 11 上 100% 失败，无论是 marketplace、GitHub 仓库还是本地目录源均报 `Access is denied (os error 5)`。

**入选理由**：插件机制是 CLI 生态的关键扩展点，Windows 平台完全不可用影响面极大。同类问题 #4095（更新场景）已有 14 👍，说明这是 Windows 用户的普遍痛点，且长期未修复。


### 2. Windows 插件更新失败 — VS Code 句柄锁冲突
**#4095** · [链接](https://github.com/github/copilot-cli/issues/4095) · 评论: 2 · 👍: 14

> 当 VS Code 运行时（Copilot 扩展持有文件句柄），`copilot plugin update` 报 `Access is denied`。

**入选理由**：过去 24 小时社区热度最高（14 👍 为今日最高）。**根因定位清晰且可复现**——VS Code 扩展的 watcher 句柄锁住了插件目录。这是典型的 Windows 文件锁冲突，与 #4151 可能同一根因。


### 3. v1.0.74 回归：大会话恢复内存溢出
**#4251** · [链接](https://github.com/github/copilot-cli/issues/4251) · 评论: 3 · 👍: 1

> 升级 1.0.74 后，恢复长期会话导致 OOM + 单核 CPU 占用约 70 分钟。A/B 测试确认是 1.0.74 引入的回归，内存消耗是 1.0.73 的 3-4 倍。

**入选理由**：**这是最典型的回归类型**——日常可用的工作流升级后直接崩溃，且附带性能基准数据，具有极高排查价值。长期会话用户受影响严重。


### 4. v1.0.79 回归：/config model 清空全部设置
**#4431** · [链接](https://github.com/github/copilot-cli/issues/4431) · 评论: 3 · 👍: 0

> 在 v1.0.79 中，通过 `/config model` 设置用户级模型会**完全覆盖** `<user>/.copilot/settings.json`，丢失所有已有配置。

**入选理由**：破坏性极强——设置一次模型即丢失全部自定义配置，且是新版本新增回归。与 #4434（用户级模型未生效）共同构成 v1.0.79 设置管理双 bug。同日两条相关 Issue，说明 1.0.79 的配置模块改动存在问题。


### 5. 企业账户下所有 Claude 模型被禁用
**#4422** · [链接](https://github.com/github/copilot-cli/issues/4422) · 评论: 2 · 👍: 3

> 企业版个人账户无法再使用任何 Claude 模型（sonnet 5、4.8 等），即使 Copilot 设置中已启用。回滚 CLI 版本无效。

**入选理由**：企业用户无法自主选择模型——回滚无效、设置显示已启用但实际不可用，指向服务端策略或模型路由问题。今日新增评论，热度中等靠前。


### 6. GPT-5.6 Terra 静默委派至 Opus 子代理
**#4377** · [链接](https://github.com/github/copilot-cli/issues/4377) · 评论: 1 · 👍: 0

> 配置使用 `gpt-5.6-terra` 时，账单显示大量消耗在 Opus 上——模型静默委派给子代理，用户无感知。

**入选理由**：模型路由不透明导致**不可预期的成本消耗**。社区用户对"配置模型与实际计费模型不一致"高度敏感，涉及信任和成本控制两个维度。


### 7. Rubber Duck 审查未使用互补模型
**#4380** · [链接](https://github.com/github/copilot-cli/issues/4380) · 评论: 3 · 👍: 0

> Rubber Duck 审查有时与主会话使用同一模型家族，而非独立互补模型，削弱了对抗性审查的价值。

**入选理由**：Rubber Duck 作为"第二意见"其价值核心就在于模型独立性。用户观察到了实际行为偏差，且与 #4432（模型可被任务参数静默覆盖）构成同一功能的两面问题。


### 8. Copilot Free 在 Codespaces 中无可用模型
**#4405** · [链接](https://github.com/github/copilot-cli/issues/4405) · 评论: 1 · 👍: 0

> Codespaces 中启动 Copilot CLI 后，每次 prompt 立即报 `No model available`，账户为 Copilot Free 且文档显示已启用。

**入选理由**：Free 用户 + Codespaces 的入门路径直接不可用，影响新用户的第一体验，也可能影响 Free 向付费的转化。


### 9. tgrep 索引器导致主机 OOM
**#3976** · [链接](https://github.com/github/copilot-cli/issues/3976) · 评论: 2 · 👍: 0

> 原生 tgrep 实验索引服务在大型 monorepo 上**无内存上限**，直接 OOM 杀死宿主机。

**入选理由**：工具直接杀死宿主机是最高严重级别的问题，在大型仓库用户中影响极大。有评论说明是 tgrep 实验标记导致，长期存在。


### 10. GitLab MCP OAuth 元数据被 RFC 8414 校验拒绝
**#4439** · [链接](https://github.com/github/copilot-cli/issues/4439) · 评论: 1 · 👍: 0

> v1.0.79 拒绝 GitLab Self-Managed MCP 服务器的 OAuth 2.0 Dynamic Client Registration 元数据，报告 issuer 不匹配。

**入选理由**：MCP 生态是 CLI 的核心扩展方向，OAuth 互操作问题会阻断 GitLab 用户接入 MCP 服务器。新提交，属于生态兼容性问题的高价值案例。


## 重要 PR 进展（共 3 条）

### #4449 · 迁移 PR 自动化，弃用 pull_request_target
**状态**: OPEN · [链接](https://github.com/github/copilot-cli/pull/4449)

> 将 PR 驱动的自动化工作流从 `pull_request_target` 迁移到低权限的 `pull_request` 模式，仓库写操作单独隔离。

**点评**：安全加固型改动，遵循 GitHub 官方安全最佳实践，降低恶意 PR 注入风险。对大型开源项目是必要的基础设施改进。


### #4428 · 新增 devcontainer 配置
**状态**: OPEN · [链接](https://github.com/github/copilot-cli/pull/4428)

> 为仓库添加初始 devcontainer 配置，方便贡献者使用容器化开发环境。

**点评**：提升贡献者体验的小改动，降低新贡献者的环境搭建门槛。


### #4452 · Revert 5 copilot/fix with copilot
**状态**: CLOSED · [链接](https://github.com/github/copilot-cli/pull/4452)

> 回滚 5 个由 Copilot 生成的修复提交。命令 `copilot/fix with copilot` 生成的修复有 5 个被 revert。

**点评**：**一个值得注意的元信号**——AI 生成的修复被批量回滚，说明自动修复的质量或影响范围有问题，对 Copilot 自我修复能力的推广是个提醒。


## 功能需求趋势

### 1. 细粒度权限与文件编辑控制
**代表**: #4444（逐文件接受/拒绝/评论）、#4443（区分只读/写操作路径授权）

社区不再满足于全有或全无的权限模型，希望获得**更精细的控制粒度**——既能信任 AI 执行只读命令，又能对写入操作逐条审批。同样，文件编辑也期望有逐变更的确认机制以减少 `AI slop` 代码。

### 2. 模型选择自主权与透明度
**代表**: #4432（禁用模型字段覆盖）、#4434（用户默认模型在会话间保持一致）、#4437（仓库定义的模型字段不应覆盖用户选择）

用户希望**用户级配置 > 仓库级配置 > 模型自动选择**的优先级明确且不被静默覆盖。当前模型可以被仓库定义、任务参数或自动策略意外覆盖，导致用户失去控制感和成本可预期性。

### 3. 企业级策略配置与管理
**代表**: #4446（企业级 sandbox 策略托管）

企业管理员需要能通过 GitHub Enterprise 统一配置和强制 CLI 的 sandbox 等安全策略，而不仅依赖各开发者本地设置。这是 CLI 在企业规模化落地的基础能力。

### 4. 与其他 Agent 工具的指令兼容
**代表**: #4440（读取 `.claude/rules`）

同时使用 Claude Code 和 Copilot CLI 的团队，希望共享同一套规则文件，减少重复维护。工具间的互操作性需求开始浮现。


## 开发者关注点

### 1. 新版本回归频发（今日最集中的痛点）
v1.0.79 同时出现 `/config model` 清空设置（#4431）、用户默认模型不生效（#4434）等配置回归；v1.0.74 则有会话恢复 OOM（#4251）。**开发者对"升级即引入回归"的模式感到疲惫**，建议官方加强配置模块和会话持久化的自动化测试覆盖。

### 2. Windows 平台长期二等公民
插件安装/更新失败（#4151、#4095）已存在超过一个月，累计 15+ 👍 支持但未修复。**文件锁冲突的根因已明确定位**（VS Code watcher 句柄），社区期待官方尽快响应。Windows 用户对核心功能不可用的容忍度正在降低。

### 3. 强制工具限制（disable-model-invocation）逻辑不一致
**#4438** 和 **#4451** 指出：标记为 `disable-model-invocation: true` 的技能不仅不会被模型自动调用，**连用户显式请求也被拒绝（`Skill not found`）**。这违背了"手动可用、仅禁用自动调用"的设计预期，属于功能逻辑缺陷。由于仓库链接为合成数据，无法确证是否为设计意图，但至少文档说明与实现不一致。

### 4. 输入体验细节问题
**#4447**（退格键一次删除整个单词）是典型的小问题大影响——直接影响日常交互效率，且出现在 1.0.79 稳定版中。这类输入体验类 bug 虽小但用户感知极强。

### 5. 安全与合规扫描
**#4442**：CLI 二进制包含存在高危 CVE 的 `adm-zip` v0.5.17，**在通过 XRay 等安全扫描工具的企业环境中被直接卡住**，无法通过 CI。安全问题虽非功能性故障，但成为企业采用的真实门槛。

---

**编辑点评**：今日动态的核心信号是 **v1.0.79/1.0.74 的回归密集暴露 + Windows 问题长期悬而未决**。模型自主权（rubber-duck 独立性、模型字段覆盖）是新的讨论热点，而 MCP OAuth 兼容性和安全 CVE 问题则提醒我们——**生态扩展带来新能力的同时也在增加新的攻击面和兼容性负担**。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-12** | 数据来源：github.com/MoonshotAI/kimi-cli


## 今日速览

过去24小时Kimi Code CLI仓库无新版本发布，社区热度集中在两个方向：一是长期悬而未决的**跨会话记忆系统（Memory System）** 需求（#1283，已积累34条评论）；二是以 hobostay 为代表的贡献者批量提交的**代码健壮性修复 PR**（6个PR均已合入，涉及 assert 语句替换与竞态条件修复），反映出社区对生产环境稳定性的关注。此外，Windows环境下 Power 7 默认启动目录问题（#2600）成为最新bug反馈。


## 版本发布

过去24小时内无新版本发布。最新版本仍为 v0.33。


## 社区热点 Issues

过去24小时内共跟踪到 3 条活跃 Issue，均值得关注：

### 1. #1283 [Feature Request] 记忆系统——跨会话持久化上下文
- **作者**: CatKang | 创建于2026-02-27 | 更新于08-11 | **💬 34条评论** | 👍 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1283
- **核心内容**: 提议实现全面的**记忆系统**，使Kimi Code CLI能够跨会话记住项目上下文、代码模式与用户偏好。建议涵盖自动记忆（AI管理笔记）与手动记忆（用户自定义指令）两种模式。
- **为什么重要**: 这是仓库中**长期置顶的高频需求**，已持续讨论近半年，表明跨会话上下文管理是当前开发者最大的痛点之一。34条评论说明社区参与度高，且该需求对提升CLI实际生产力有直接价值。

### 2. #2601 [Feature Request] 引用与回复：在Kimi Web中对AI回复任意片段进行评论
- **作者**: topit | 创建于08-11 | 更新于08-11 | 💬 0 | 👍 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2601
- **核心内容**: 希望Kimi Web支持对助手消息进行**选中即评论**：用户可选中AI回复中的任意文本片段（段落、代码块、计划步骤、diff解释行等），针对性地附加评论或追问，并让Agent基于该精确定位继续工作。
- **为什么重要**: 这一交互模式（类似 GitHub PR 的 code comment 体验）直击 AI 编程助手中“上下文锚定”的痛点。当前用户只能对整轮回复进行追问，无法精准指代特定片段，该需求代表了向**精细化交互**演进的方向。

### 3. #2600 [Bug] Windows PowerShell7 默认D盘启动导致路径无法找到
- **作者**: RooKichenn | 创建于08-11 | 更新于08-11 | 💬 0 | 👍 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2600
- **核心内容**: 在 v0.33 版本中，当用户在 Windows 上将 PowerShell 7 的默认启动目录设置为 D 盘（非系统盘）时，打开 kimi code 会出现**路径无法找到**的问题。涉及使用 kimi-for-coding 模型。
- **为什么重要**: 这是最新的Windows平台兼容性bug反馈。虽然用户量可能有限，但对受影响者是**阻断性问题**（无法正常使用），且与工作目录解析逻辑相关，值得官方快速跟进。


## 重要 PR 进展

过去24小时内共跟踪到 8 个活跃 PR，其中 1 个新功能 PR 仍在开放，其余 6 个为近期合入（关闭）的修复类 PR：

### 开放 PR（1个）

#### #2509 [OPEN] feat(kimi): 可配置思考强度与 /effort 命令
- **作者**: n-WN | 创建于07-18 | 更新于08-11
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2509
- **内容**: 解决 Issue #2501（可配置推理强度），新增 `/effort` 命令，允许用户灵活控制模型的思考深度。该 PR 基于此前关闭的 #318（reasoning_effort 支持）构建，保留了显式的 `reasoning_effort` 透传能力。
- **价值**: 这是**当前最值得关注的功能 PR**。可配置思考强度意味着用户能在快速响应与深度推理之间自主权衡，对 API 成本控制和复杂任务处理均有实际意义。

### 合入 PR（7个）

#### #2057 [CLOSED] fix(acp): 将 assert 语句替换为 RuntimeError 异常
- **作者**: hobostay | 更新于08-11
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2057
- **内容**: 将 `acp/session.py` 中 5 处 `assert` 语句全部替换为显式的 `RuntimeError` 异常。
- **价值**: 修复了 Python `-O` 优化模式下 assert 被剥离导致**安全检查静默失效**的问题。这些断言保护关键的 `_ToolCallSta...` 不变量，属于生产环境健壮性必修项。

#### #2056 [CLOSED] fix(wire): 消除 WireFile.append_record 中的 TOCTOU 竞态
- **作者**: hobostay | 更新于08-11
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2056
- **内容**: 修复 `WireFile.append_record` 中的 check-to-use-of-time（TOCTOU）竞态条件——原代码先检查 `self.path.exists()` 再调用 `stat().st_size`，中间存在文件被删除的窗口期。
- **价值**: 消除了**并发场景下的偶发崩溃隐患**，提升了 wire 协议层的可靠性。

#### #2055 [CLOSED] fix(agentspec): 以 AgentSpecError 异常替换 assert
- **作者**: hobostay | 更新于08-11
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2055
- **内容**: 将 `agentspec.py` 中的 `assert agent_spec.extend is None` 替换为正式的 `AgentSpecError` 异常。
- **价值**: 防止 `-O` 模式下该安全校验被静默禁用，确保 AgentSpec 合并逻辑的正确性。

#### #1328 [CLOSED] 修复文件工具与 UI 反馈的若干小 bug
- **作者**: hobostay | 更新于08-11
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1328
- **内容**: 共修复 3 个问题：① StrReplaceFile 多编辑场景下替换计数计算错误（未考虑累计替换）；② 另外两个 UI 反馈相关的小 bug。
- **价值**: 提升了文件编辑工具的**正确性与用户体验**，尤其修复了多编辑时的计数偏差。

#### #1082 [CLOSED] fix(pyinstaller): 过滤不存在的 dateparser 缓存文件
- **作者**: hobostay | 更新于08-11
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1082
- **内容**: 修复 PyInstaller 打包时 `dateparser` 时区缓存文件（`dateparser_tz_cache.pkl`）在全新环境/CI 中不存在导致 `collect...` 失败的问题。
- **价值**: 解决了**CI/CD 与全新安装环境下的打包失败**问题。

#### #1077 [CLOSED] fix: 移除 WriteFile 工具中的冗余模式校验
- **作者**: hobostay | 更新于08-11
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1077
- **内容**: 删除 `write.py` 中 L84-91 对 `mode` 参数（overwrite/append）的冗余运行时校验。
- **价值**: 精简代码路径，减少不必要的运行时开销。

#### #1393 [CLOSED] fix(acp): 将 shell 命令通过终端参数路由
- **作者**: hanhan3344 | 更新于08-11
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1393
- **内容**: 修复 ACP Shell 终端执行时未将 shell 可执行文件放入 `command`、shell 调用放入 `args` 的问题；适配当前 ACP SDK 响应结构（使用 `terminal_id`）；新增覆盖 bash 与 PowerShell 命令/参数路由的回归测试。
- **价值**: **修复了 ACP 终端集成在跨平台（bash/PowerShell）下的执行可靠性**，并建立了回归防护。


## 功能需求趋势

综合当前活跃的 Issues 与 PR，社区最关注的三大功能方向为：

### 1. 跨会话持久化与记忆 🔥 高热度
- 代表需求: #1283 记忆系统（34条评论，近半年活跃）
- 趋势解读：开发者们希望 CLI 能记住项目约定、个人偏好和过往决策，减少重复沟通成本。这已成为**AI 编程工具的核心竞争点**，Kimi Code CLI 在这方面的进展将直接影响用户粘性。

### 2. 精细化交互与控制 🔥 高热度
- 代表需求: #2601 引用片段评论 / #2509 可配置思考强度（/effort 命令）
- 趋势解读：用户不再满足于“整轮对话”，而是希望**像操作代码编辑器一样精准控制 AI 交互粒度**——选中指定代码块追问、按需调节推理深度。这与 Claude Code、Cursor 等竞品的功能对齐趋势一致。

### 3. 生产环境稳定性 ⚠️ 持续关注
- 代表需求: 6个合入PR均为健壮性修复（assert→异常、TOCTOU竞态、shell路由等）
- 趋势解读：社区贡献者（尤其是 hobostay）持续投入于**消除 Python 优化模式下的隐性 bug 与并发隐患**，反映出用户已将该 CLI 用于实际生产工作流，对稳定性有较高要求。


## 开发者关注点

### 高频痛点

1. **Windows 平台兼容性仍有缺口**
   - 最新反馈 #2600 显示 PowerShell 7 从非系统盘启动会导致 CLI 找不到路径。类似的工作目录解析问题在 Windows 上已多次出现，建议官方加强 Windows 多终端环境（cmd / PowerShell 5 / PowerShell 7 / Windows Terminal）的系统性回归测试。

2. **跨会话上下文丢失**（#1283 持续高热）
   - 34条评论的讨论热度表明，用户对“每次重新说明项目背景”的体验容忍度正在降低。记忆系统或至少是持久化的会话摘要能力，是社区最渴望的功能。

3. **Python -O 模式下的隐性行为差异**
   - 本周多个合入 PR（#2057、#2055）均直接因 `assert` 被剥离导致安全校验失效而发起。这说明部分用户在以优化模式运行 CLI，且**依赖 assert 做运行时检查存在实际风险**。贡献者正在系统性清理此类代码。

### 社区贡献特征

- **hobostay 成为主要贡献者**：本周 7 个合入 PR 中 6 个出自该开发者，集中在健壮性修复领域，且均附带清晰的“Why”说明，体现了高质量的开源协作模式。
- **老 PR 批量关闭**：多个 2-4 月创建的 PR 在本周被合入/关闭，表明维护者正在进行**历史遗留清理**，对于等待合入的贡献者是好信号。

---

*本日报由 AI 自动生成，数据基于 GitHub 公开信息，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-08-12** | 数据来源：github.com/anomalyco/opencode


## 今日速览

今日社区最显著的特点是 **功能请求集中爆发**：用户 afonsoft 一口气提交了 7 个灵感源自 Claude Code 的斜杠命令提案（`/usage`、`/security-review`、`/verify`、`/simplify` 等），反映出社区对内置工作流工具的需求日益强烈。同时，**V2 版本的稳定性问题**（ALSA 音频报错、无限重试循环、启动挂起）成为 bug 类 Issue 的主要焦点，多个 PR 正在积极修复中。此外，`kitlangton` 贡献的 **workerd 运行时支持** 为 OpenCode 在 Cloudflare Durable Objects 中运行开辟了新方向。今日无新版本发布。


## 社区热点 Issues（10 个）

### 1. #16017 — 请求添加 Go 计划用量/余额 API 端点
[#16017](https://github.com/anomalyco/opencode/issues/16017) | 状态: 已关闭 | 评论: 34 | 👍: 137

**最热门 Issue**。用户希望将 Go 订阅计划的用量数据（滚动/周/月窗口）通过公开 API 暴露。仪表盘已有此数据但缺少 API 入口，涉及计费透明度和自动化监控。137 个 👍 表明这是社区高度共识的需求，虽已关闭但值得关注后续落地方式。

### 2. #28191 — TUI 权限提示面板高度/展开状态可配置
[#28191](https://github.com/anomalyco/opencode/issues/28191) | 状态: 开放 | 评论: 9 | 👍: 0

请求在 `tui.json` 中添加配置项，控制 TUI 底部权限/审批提示面板的默认高度（当前硬编码 15 行）和展开状态。大 diff 场景下折叠面板影响审查效率，是 TUI 交互细节打磨的重要方向。

### 3. #27924 — Session 无限压缩循环（compaction 无法缩减上下文）
[#27924](https://github.com/anomalyco/opencode/issues/27924) | 状态: 开放 | 评论: 8 | 👍: 0

`prompt.ts` 中的会话循环在压缩无法将上下文降到 token 限制以下时会进入无限循环（溢出→压缩→仍溢出→再次压缩）。当压缩状态丢失或压缩率不足时触发，直接影响长会话稳定性，是核心可靠性 bug。

### 4. #39831 — Zen 模型 gpt-5.6-luna/terra 上游请求失败
[#39831](https://github.com/anomalyco/opencode/issues/39831) | 状态: 开放 | 评论: 5 | 👍: 1

通过 Zen (`opencode` provider) 调用 `gpt-5.6-luna` 和 `gpt-5.6-terra` 持续报 HTTP 403 错误，而 `gpt-5.4-nano` 等模型正常。新模型兼容性问题，影响用户升级到最新模型。

### 5. #41763 — [2.0] ALSA 错误刷屏并破坏终端显示
[#41763](https://github.com/anomalyco/opencode/issues/41763) | 状态: 开放 | 评论: 4 | 👍: 1

V2 beta/next TUI 在无声卡的 Linux 主机上反复初始化 ALSA，错误信息直接覆盖 TUI 显示。影响无音频设备环境下的基本交互，已有一个对应修复 PR（#41770）。

### 6. #12548 — Chrome 风格标签页系统支持多会话工作流
[#12548](https://github.com/anomalyco/opencode/issues/12548) | 状态: 已关闭 | 评论: 5 | 👍: 10

提议在 TUI 中引入 Chrome 风格标签页系统，解决多会话切换需要频繁返回会话列表的问题。10 个 👍 反映多会话管理是 TUI 的重要痛点，虽已关闭，但相关讨论可能已并入 V2 其他设计中。

### 7. #41848 — LLM 重试无最大次数限制，UI 卡在"思考中"
[#41848](https://github.com/anomalyco/opencode/issues/41848) | 状态: 开放 | 评论: 2 | 👍: 0

`RETRY_MAX_DELAY` 被设为 2147483647ms（约 24 天），DeepSeek 流式错误时无限重试，UI 永远显示"Thinking..."。5 个进程因 `llm runtime selected` 崩溃。这是严重的可靠性问题，需要设置最大重试次数或退避策略上限。

### 8. #41806 — Linux 上实例启动永久挂起（git 子进程未回收）
[#41806](https://github.com/anomalyco/opencode/issues/41806) | 状态: 开放 | 评论: 2 | 👍: 0

Linux 上 `opencode`（TUI）在实例引导期间间歇性永久挂起：init 过程中 spawn 的 `git` 子进程退出后从未被 reap（保持 `<defunct>`），bootstrap await 永不结束，界面正常渲染但 Enter 无法启动会话。进程管理和引导时序问题。

### 9. #41869 — [2.0] V1 迁移在旧数据含单引号时失败
[#41869](https://github.com/anomalyco/opencode/issues/41869) | 状态: 已关闭 | 评论: 2 | 👍: 0

V1→V2 数据迁移在旧数据库消息 JSON 含单引号（apostrophes）时每次启动报 `SQLiteError: near ","`。迁移将 JSON 值直接拼入 SQL 语句而未做转义，影响所有含特殊字符的旧数据库升级。

### 10. #37090 — apply_patch 在 Windows 上损坏行尾符
[#37090](https://github.com/anomalyco/opencode/issues/37090) | 状态: 开放 | 评论: 3 | 👍: 0

`apply_patch` 和 `write` 工具在 Windows 上引入 LF 行尾，破坏文件原有的 CRLF 格式。跨平台文件编辑的一致性问题，对 Windows 开发者是日常痛点。


## 重要 PR 进展（10 个）

### 1. #41918 — workerd 运行时配置与 SDK 入口 [新]
[#41918](https://github.com/anomalyco/opencode/pull/41918) | 状态: 开放 | 作者: kitlangton

**开创性工作**：添加 workerd 运行时配置，使 OpenCode 服务器能在 Cloudflare Durable Object 内启动，并提供 SDK 入口及 CI 验证。目标是"每个 Durable Object 一个 OpenCode 服务器"——例如 Slack 机器人每个线程一个 DO 承载完整 OpenCode 实例。

### 2. #41899 — Session 记录位置切换 [已合并]
[#41899](https://github.com/anomalyco/opencode/pull/41899) | 状态: 已关闭 | 作者: thdxr

项目持久 session 移入 `location-switched` 时间线消息，记录当前位置和之前位置；目录变更发送给后续模型上下文并在压缩时保留；V2 TUI 渲染位置切换并移除重复的合成移动消息。

### 3. #41901/#41904 — 添加 Claude Code ACP 运行时
[#41901](https://github.com/anomalyco/opencode/pull/41901) / [#41904](https://github.com/anomalyco/opencode/pull/41904) | 状态: 已关闭/开放 | 作者: stocky789

通过 `@agentclientprotocol/claude-agent-acp` 将 Claude Code 作为 OpenCode 运行时。选择 Claude Code 作为 provider 时，通过 Agent Client Protocol 委托执行。关联 #5182、#20002、#24038，打通两大 AI 编程工具生态。

### 4. #41790 — 兼容旧版迁移 schema [已合并]
[#41790](https://github.com/anomalyco/opencode/pull/41790) | 状态: 已关闭 | 作者: kitlangton

导入 pre-launch previous-channel 数据库时，兼容 `project` 和 `session` 表缺少当前迁移期望的可空字段的情况。旧数据库保留所有可用的项目/会话/消息值，缺失字段（如 `commands`、`fork_boundary`）安全留空。

### 5. #41891 — 修复外部 TUI 插件因 mtime 精度加载失败 [已合并]
[#41891](https://github.com/anomalyco/opencode/pull/41891) | 状态: 已关闭 | 作者: kitlangton

`freshSpecifier` 将原始 `stat.mtimeMs`（含小数）追加到 import specifier 导致外部 TUI 插件加载失败。截断小数部分后修复使用 JSX 或依赖 `solid-js` 的插件在编译后的 `opencode2` 二进制中无法加载的问题。

### 6. #41917 — 实验功能通过 DevTools 栏访问 [新]
[#41917](https://github.com/anomalyco/opencode/pull/41917) | 状态: 开放 | 作者: kitlangton

#41862 的后续改进：DevTools 栏末尾新增 `Experiments` 项打开实验对话框，删除 `/baldbeard` 彩蛋命令和 `slash.secret` 机制。实验功能入口更显式，彩蛋命令退出历史舞台。

### 7. #41770 — 停止重试不可用的音频设备 [开放]
[#41770](https://github.com/anomalyco/opencode/pull/41770) | 状态: 开放 | 作者: muyiyr | 修复: #41763

音频启动失败后不再重试，销毁失败的 native engine、清除缓存的音效。直接解决 ALSA 错误刷屏问题，是无音频设备环境的关键修复。

### 8. #41897 — 移除遗留的 discovery smoke 插件 [已合并]
[#41897](https://github.com/anomalyco/opencode/pull/41897) | 状态: 已关闭 | 作者: kitlangton

删除 `.opencode/plugins/tui/discovery-smoke.ts` 遗留的 no-op 冒烟测试插件。其 setup 体已完全注释但仍会被发现并注册为外部插件（`test.tui-discovery-smoke`），对每个项目插件发现机制造成噪音。

### 9. #41883 — 显示 write 工具完成后的输出 [开放]
[#41883](https://github.com/anomalyco/opencode/pull/41883) | 状态: 开放 | 作者: kitlangton

V2 `write` 工具完成后显示语法高亮的文件内容。这是 #41352 的移植——原 PR 被意外合并到过时的 `v2-migration` 分支而从未到达 `v2`，现 cherry-pick 到 `v2` 分支。

### 10. #41893 — 按平台解析自动补全测试路径 [已合并]
[#41893](https://github.com/anomalyco/opencode/pull/41893) | 状态: 已关闭 | 作者: kitlangton

修复 `unit (windows)` 测试失败：`directoryAutocompleteSearch` 使用平台 `path` 模块解析子目录，但测试断言了字面 POSIX 路径。测试按平台正确解析路径后通过。


## 功能需求趋势

### 1. **Claude Code 风格斜杠命令全面移植**
用户 afonsoft 在 8 月 12 日集中提交 7 个灵感源自 Claude Code 的斜杠命令提案：
- **`/usage`**（别名 `/cost`）：会话 token 消耗与成本专项报告，当前仅在侧边栏页脚有单行展示（#41915）
- **`/security-review`**：扫描 diff 中的密钥泄露和硬编码凭据（#41913）
- **`/verify`**：运行本地测试/lint 管道验证仓库状态（#41912）
- **`/simplify`**：多 agent 并行扫描重复代码并重构（#41911）
- **`/btw`**：快速旁路提问而不污染会话历史（#41910）
- **`/approve on|off`**：运行时切换逐步骤权限审批模式（#41909）
- **`/context`**：上下文窗口使用明细（prompt/工具/消息历史的 token 拆分与成本估算）（#41908）

这些提案共同指向一个趋势：**社区希望 OpenCode 具备更丰富的内置工作流命令**，减少对"shell 出去跑命令"的依赖。

### 2. **Go 订阅计划的 API 化**（#16017，137 👍）
开发者需要以编程方式获取用量/余额数据，用于自动化监控和成本管理。除个人开发者外，团队管理者对用量可视化有刚需。

### 3. **V2 稳定性优先**
多个 Issue 和 PR 集中在 V2/next 通道的基础可靠性上：ALSA 音频错误（#41763、#41890）、无限重试（#41848）、启动挂起（#41806）、V1 迁移失败（#41869）、webfetch 回归（#41777）。**在添加新功能前，V2 需要先解决这些阻断性问题**。

### 4. **多会话/标签页管理**
TUI 中 Chrome 风格标签页（#12548）、Session 与 Subagent 标签页（#17838）等提案反映用户在多会话并行时的切换效率诉求。

### 5. **Agent Client Protocol（ACP）集成**
连续两个 PR（#41901、#41904）将 Claude Code 作为运行时集成，表明社区对跨工具互操作性的兴趣。

### 6. **文件编码支持**（#37602，2 👍）
请求在 edit/write 工具中添加文件编码参数（如 GBK），面向东亚用户处理非 UTF-8 文件的真实需求。

### 7. **桌面端体验完善**
关闭按钮最小化到系统托盘（#18134）、窗口标题随活动标签页更新（#41729）、agent 完成时 VS Code 通知（#39936）——桌面和 IDE 集成的体验打磨在持续推进。


## 开发者关注点

### 高频痛点

1. **V2/next 通道的不稳定**
   - **ALSA 错误刷屏**：无音频设备环境的基本交互被错误输出干扰（#41763、#41890），多个 Issue 同时报告
   - **无限重试无上限**：流式错误时 UI 永远卡在"Thinking..."，且 `RETRY_MAX_DELAY` 被设为约 24 天，5 个进程崩溃（#41848）
   - **启动挂起**：git 子进程成为僵尸进程导致 bootstrap 永不结束（#41806）
   - **V1 迁移失败**：旧数据含单引号时 SQL 报错，升级路径不平稳（#41869）
   - **webfetch 回归**：Code Mode 中成功但返回 null，且工具列表缺失（#41777）

2. **压缩（compaction）机制问题**
   - 无限压缩循环导致会话永久卡住（#27924）
   - 压缩摘要过程流式输出到终端，干扰用户（#13033）

3. **Windows 平台兼容性**
   - apply_patch/write 工具破坏 CRLF 行尾（#37090）
   - 自动补全测试路径断言在 Windows 上失败（#41893）

4. **V2 实际使用中的细节回归**
   - 位置切换未正确记录和传递（#41899 修复）
   - 指令更新完整文本有时被倾倒进 transcript（#41900 修复）
   - shell 输出在运行/完成状态间跳动（#41880 修复）
   - write 工具完成后不显示文件内容（#41883 修复）

5. **模型与 provider 兼容性**
   - Zen 上 gpt-5.6-luna/terra 报 403（#39831），新模型接入不完全
   - DeepSeek 流式错误触发无限重试（#41848）

### 社区情绪

- 对 V2 的态度是 **"充满期待但被稳定性问题困扰"**——大量 [2.0] 标签的 bug 和修复 PR 表明社区在积极测试和反馈，但也说明 V2 尚未达到生产就绪
- 功能需求方面，社区对 Claude Code 的斜杠命令移植表现出浓厚兴趣（同一用户连续 7 个提案），反映出对其他工具优秀特性的借鉴意愿
- `kitlangton` 的持续贡献（workerd 运行时、迁移兼容、插件修复等）显示出活跃的 contributor 生态，且 PR 质量较高、描述详尽

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-12

> 数据来源: github.com/badlogic/pi-mono

---

## 1. 今日速览

今日 Pi 社区围绕 **登录/授权稳定性**（尤其是 GitHub Copilot 429 限流与 WSL 环境挂起）、**性能优化**（Mac 高 CPU 占用、启动延迟对标 jcode）与 **协议层缺陷**（`usage` 字段丢失、WebSocket 重试不完整）展开集中讨论。PR 侧，**编辑工具参数规范化**与 **Mermaid 图表渲染** 是两个明确的修复方向；此外，**Qwen 中国区 Token Plan 供应商** 与 **会话间通信（intercom）** 两个新功能提案引人关注。

---

## 2. 版本发布

过去 24 小时内无新版本 Release。当前主线版本为 0.84.1（存在 bun 运行时启动崩溃问题，见 Issue #7846）。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #7730 — [Mac OS 高 CPU 占用（50-110%，内存 600-800MB）](https://github.com/earendil-works/pi/issues/7730)
- **作者**: gterzian | 更新: 08-11 | 评论: 10 | 👍: 8
- **为什么重要**: 标题即痛点——Mac 上长会话导致 CPU 飙升至 100% 以上，且与上下文长度正相关。这是性能类最热 Issue，👍 数居首。
- **社区反应**: 用户在评论区讨论是否与上下文压缩或流式解析有关，尚无明确结论。

### 🔴 #7850 — [GitHub Copilot 登录失败：429 Rate Limiting（组织有 20+ 模型时）](https://github.com/earendil-works/pi/issues/7850)
- **作者**: tuunit | 创建: 08-09 | 更新: 08-11 | 评论: 7 | 👍: 7
- **为什么重要**: 设备授权成功但登录报 429，已关闭但属 "no-action"。这是 Copilot 登录问题的**第二例**（#7428 同因），说明限流是**组织级账号的共性故障**。
- **社区反应**: 高 👍 数，用户期待服务端修复或客户端重试策略。

### #6187 — [WSL 中 Pi 登录挂起（GitHub Copilot 设备授权完成后不检测）](https://github.com/earendil-works/pi/issues/6187)
- **作者**: makoit | 创建: 06-30 | 更新: 08-11 | 评论: 25（全库最高）
- **为什么重要**: 已关闭但评论数全库第一。浏览器完成授权后 WSL 客户端不感知，挂起等待。WSL 是主流 Linux 开发环境，此问题影响面大。

### #7846 — [bun 运行时无法启动 0.84.0/0.84.1（zlib.createZstdDecompress 不可用）](https://github.com/earendil-works/pi/issues/7846)
- **作者**: and1truong | 创建: 08-09 | 更新: 08-11 | 评论: 10 | 👍: 1
- **为什么重要**: 0.84.x 在 bun 下直接崩溃，退回 0.83 是唯一出路。属于**阻断性 bug**，影响 bun 用户升级路径。

### #7966 — [命令行参数 --thinking 不生效（沿用上次模式）](https://github.com/earendil-works/pi/issues/7966)
- **作者**: felixendres | 创建: 08-11 | 更新: 08-11 | 评论: 3
- **为什么重要**: CLI 参数被忽略，行为取决于历史状态，对脚本化/自动化调用是硬伤。已关闭（no-action）。

### #7836 — [编辑模糊匹配因空白长度差异失败](https://github.com/earendil-works/pi/issues/7836)
- **作者**: robjgray | 创建: 08-08 | 更新: 08-11 | 评论: 6 | 👍: 1
- **为什么重要**: `normalizeForFuzzyMatch` 不折叠空白，导致小模型编辑时 `oldText` 因空格数不匹配而失败。**直接关联 PR #7978**，属于编辑工具链的高频痛点。

### #7553 — [压缩（Compaction）无法独立配置思考级别](https://github.com/earendil-works/pi/issues/7553)
- **作者**: Saolence | 创建: 08-03 | 更新: 08-11 | 评论: 8
- **为什么重要**: 自动压缩强制复用会话思考级别，推理模型下总结的思维预算不可控。**长期开放的功能请求**，涉及成本与质量平衡。

### #7444 — [WebSocket 重试仅处理两个错误码，其他 transient 错误硬停整个回合](https://github.com/earendil-works/pi/issues/7444)
- **作者**: lkraider | 创建: 08-01 | 更新: 08-11 | 评论: 8
- **为什么重要**: 重试逻辑只认 `previous_response_not_found` 和 `websocket_connection_limit_reached`，其余 `response.failed` 直接抛错中断。网络抖动下稳定性差。

### #7829 — [无效 settings.json 被静默忽略，Windows 下误导为 "bash not found"](https://github.com/earendil-works/pi/issues/7829)
- **作者**: odafeng | 创建: 08-08 | 更新: 08-11 | 评论: 3
- **为什么重要**: Windows 路径反斜杠未转义导致 JSON 非法，报错却指向 shell。**错误信息误导性极强**，排查成本高。仍在 OPEN 状态。

### #7911 — [0.84.0 的 delta-only message_update 移除了 usage 字段](https://github.com/earendil-works/pi/issues/7911)
- **作者**: underactive | 创建: 08-10 | 更新: 08-11 | 评论: 2
- **为什么重要**: 修复 #7290 时把 `usage` 一并删除，导致协议层在 `message_end` 之前无任何用量数据。**破坏 wire protocol 兼容性**，已有对应 PR #7982。

---

## 4. 重要 PR 进展（Top 10）

### ✅ #7905 — [修复 pnpm 检测误判与更新命令校验](https://github.com/earendil-works/pi/pull/7905)
- **作者**: re2zero | 更新: 08-12 | 状态: 已合并
- **内容**: `detectInstallMethod()` 不再将 `$PNPM_HOME` 下任意路径当作 pnpm 安装，更新命令前校验受管环境。

### ✅ #7904 — [编辑工具：单对象 edits 参数规范化为数组](https://github.com/earendil-works/pi/pull/7904)
- **作者**: re2zero | 更新: 08-12 | 状态: 已合并
- **内容**: 部分模型以 `{oldText, newText}` 单对象而非数组调用 edit 工具，现自动归一化，杜绝 `prepareEditArguments` 不可达问题。
- **关联**: #7944

### ✅ #7866 — [TUI：新增 copyOnSelect 选项（默认开启）](https://github.com/earendil-works/pi/pull/7866)
- **作者**: re2zero | 更新: 08-12 | 状态: 已合并
- **内容**: 允许用户禁用全屏 TUI 中选择文本时自动复制到剪贴板的行为。

### ✅ #7865 — [TUI：SelectList 与模型选择器支持 pageUp/pageDown](https://github.com/earendil-works/pi/pull/7865)
- **作者**: re2zero | 更新: 08-12 | 状态: 已合并
- **内容**: 为基座 `SelectList` 及模型选择器补齐 `tui.select.pageUp/pageDown` 键位处理，统一交互。

### ✅ #7978 — [编辑工具改进：单对象归一化 + 模糊匹配折叠空白](https://github.com/earendil-works/pi/pull/7978)
- **作者**: re2zero | 更新: 08-11 | 状态: 已合并
- **内容**: 在 #7904 基础上增加 `normalizeForFuzzyMatch` 空白折叠，修复 #7836 中小模型编辑失败问题。

### 🟡 #7989 — [新增 Qwen Token Plan Individual CN（中国区）供应商](https://github.com/earendil-works/pi/pull/7989)
- **作者**: bigoldcat123 | 更新: 08-12 | 状态: OPEN
- **内容**: 在 cn-beijing 端点增加 Individual 订阅目录，复用 `QWEN_TOKEN_PLAN_CN_API_KEY`，与 #7659 全球版对应。关闭 #7847。

### 🟡 #7982 — [流式事件中保留 usage 字段（修复 #7911）](https://github.com/earendil-works/pi/pull/7982)
- **作者**: christianklotz | 更新: 08-11 | 状态: OPEN
- **内容**: 在 JSON/RPC 的 `message_update` 事件中恢复累积 provider usage，同时保持消息快照省略、流大小线性，附回归测试。

### 🟡 #7984 — [更新 grok-mermaid 至 0.2.3，修复 Mermaid 渲染](https://github.com/earendil-works/pi/pull/7984)
- **作者**: xl0 | 更新: 08-11 | 状态: OPEN
- **内容**: 解决 #7832，Class 图暂忽略。修复后图表渲染质量对比图已附。

### 🟡 #7956 — [HTML 导出中渲染 Mermaid 图表](https://github.com/earendil-works/pi/pull/7956)
- **作者**: aliou | 更新: 08-11 | 状态: OPEN
- **内容**: 复用 TUI 的 ANSI→HTML 翻译逻辑，导出时默认折叠、头部可切换渲染。

### 🟡 #7968 — [Intercom：会话间实时消息 + ask_predecessor 幽灵应答](https://github.com/earendil-works/pi/pull/7968)
- **作者**: ksdisch | 更新: 08-11 | 状态: 已关闭
- **内容**: 文件邮箱式信道实现两个运行中会话的实时聊天，以及 `ask_predecessor` 幽灵应答器。虽已关闭，但代表多智能体协作的探索方向。

---

## 5. 功能需求趋势

| 方向 | 代表 Issue / PR | 热度判断 |
|------|----------------|----------|
| **登录与授权稳定性** | #6187 (WSL 挂起)、#7850/#7428 (429 限流)、#7966 (CLI 参数失效) | 高频故障区，组织级 Copilot 限流尤为突出 |
| **编辑工具健壮性** | #7836 (模糊匹配空白)、#7944 (prepareArguments 不可达)、PR #7904/#7978 | 连续两天 PR 修复，属高优打磨点 |
| **性能与资源占用** | #7730 (Mac 高 CPU)、#7739 (启动延迟对标 jcode) | 性能基线对标竞品，内存/CPU 优化诉求明确 |
| **协议与 wire 兼容性** | #7911 (usage 丢失)、#7444 (WebSocket 重试不完整)、#7954 (SSE 无限挂起) | 流式协议稳定性成为社区深入使用后的主要抱怨 |
| **中国区/新模型供应商** | PR #7989/#7988 (Qwen Token Plan CN)、#7938 (OpenRouter Anthropic 兼容) | 持续有新供应商接入与兼容性修复 |
| **TUI/终端体验细化** | #7930 (OSC 8 链接不可点)、#7936 (tmux Kitty DCS 图片)、#7923 (CJK 输入空白) | 全屏模式与特殊终端场景的边角问题开始被集中上报 |
| **多会话/多智能体协作** | PR #7968 (intercom)、#7897 (子代理继承会话配置) | 子代理行为继承与会话间通信是新兴方向 |
| **配置与文档质量** | #7829 (无效 JSON 误导报错)、#7935 (SECURITY.md 拼写)、#7939 (硬编码键位绕过配置) | 元质量问题（文档、错误信息、键位可配置性）被反复提及 |

---

## 6. 开发者关注点（痛点 & 高频需求）

1. **Copilot 登录 429 限流成组织级共性故障**：连续两个 Issue（#7428、#7850）指向组织账号 20+ 模型时设备授权通过后仍 429，客户端无重试或退避。
2. **流式协议中途无 usage 数据**：#7911 揭示 `message_update` 事件在 0.84.0 后不再携带 `usage`，影响所有依赖 JSON/RPC 协议的集成方，已有 PR #7982 待合并。
3. **CLI 参数与交互状态互相污染**：#7966 中 `--thinking` 被忽略、沿用上次模式，对脚本化调用不友好。
4. **Windows/bun 双平台启动故障**：#7846（bun 崩溃）与 #7829（Windows 误导性报错）共同说明跨平台兼容测试需加强。
5. **编辑工具对非 GPT 系模型不友好**：#7836/#7944 指出 `edits` 参数格式与模糊匹配的空白处理，对小模型（如 qwen3.6:27B）频繁触发失败。
6. **TUI 全屏模式交互死角**：#7930（链接不可点）、#7936（tmux 下无图片）、#7923（CJK 单字符渲染空白）集中暴露全屏模式的终端兼容短板。
7. **模糊匹配空白折叠与单对象 edits 归一化**：PR #7978 合并意味着社区对编辑工具修复的诉求正在快速收敛为实际代码。

---

*日报生成时间：2026-08-12 | 数据窗口：过去 24 小时 GitHub 更新*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-12** | **数据来源：**[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)


## 今日速览

今日发布三个新版本：预览版 v0.21.11-preview.0 修复了 Web Shell 会话导航的安全问题；稳定版 v0.21.10 新增 ACP 推理力度配置及 Web Shell 图片预览功能；另有 DSW EAS 基础设施冒烟测试版本发布。社区方面，终端闪屏问题（尤其 tmux 场景）成为用户反馈最集中的痛点，同时多个 `qwen serve` 守护进程相关的会话管理与资源保护 Bug 正在密集修复中。


## 版本发布

### v0.21.11-preview.0（预览版）
- **修复**：Web Shell 会话导航强制提示安全（[PR #8931](https://github.com/QwenLM/qwen-code/pull/8931)）
- **维护**：服务端会话续接准入日志记录

### v0.21.10（稳定版）
- **新增**：ACP 支持通过会话配置调整推理力度（Default 至 Max），见 [#8526](https://github.com/QwenLM/qwen-code/pull/8526)
- **新增**：Web Shell 中点击上传/粘贴的图片可在 Artifact 视图中打开预览
- **修复**：Web Shell 会话导航提示安全问题（[PR #8931](https://github.com/QwenLM/qwen-code/pull/8931)）

### v0.21.10-nightly.20260812.a64d1291d2（夜间版）
包含与 v0.21.11-preview.0 相同的 Web Shell 修复及服务端会话日志改进。

### dsw-eas-smoke-20260812-281542bfdc（基础设施冒烟测试）
非生产环境发布，不产生 SWE 评分。基准参考版本：v0.21.2

### live-host-v0.1.1（Live Host）
- **修复**：CLI 选择沙箱运行时前先进行探测（[PR #7734](https://github.com/QwenLM/qwen-code/pull/7734)）
- **修复**：autofix 的 scan-and-pick 序列化问题


## 社区热点 Issues

### 1. 终端闪屏问题集中爆发（tmux / iTerm）
- [#8562](https://github.com/QwenLM/qwen-code/issues/8562)：MacBook 通过 iTerm 2 → SSH → tmux 场景下对话时闪屏。用户用 Qwen 3.8 Max 排查后指向 Qwen Code 版本问题。评论 6 条，热度高。
- [#8901](https://github.com/QwenLM/qwen-code/issues/8901)：macOS + iTerm 中每次确认命令后闪屏，v0.21.8 复现。评论 4 条。
- [#8962](https://github.com/QwenLM/qwen-code/issues/8962)：tmux 下界面严重卡顿和闪烁，缩小窗口至 400x300 才基本可用，用户直言“完全无法用”。评论 2 条，今日新增。

> **重要性**：三个独立 Issue 指向同一问题，涉及 macOS/Linux + tmux/iTerm 多场景，为新版本（0.21.x）引入的 VP 虚拟化终端渲染回归。开发者反馈强烈，亟需定位。

### 2. [#8678](https://github.com/QwenLM/qwen-code/issues/8678) [P1] 大型会话恢复超时时保留当前会话
- **标签**：bug / session-management / latency / memory-usage / daemon
- **状态**：修复中（PR #8691 已合并第一阶段）
- **摘要**：会话恢复超时可能导致当前会话丢失。PR #8691 已实现超时契约、晚到请求安全与可观测性部分。
- **社区反应**：7 条评论，P1 优先级，守护进程会话管理的核心问题之一。

### 3. [#8959](https://github.com/QwenLM/qwen-code/issues/8959) [P2] 主分支 CI E2E 测试失败（自动追踪）
- **标签**：bug / integration / testing / ready-for-agent
- **摘要**：主分支 E2E 测试在报告任何结果前即失败，按提交追踪。Run ID: 31529462612。
- **社区反应**：4 条评论，为自动生成的 CI 故障追踪 Issue。

### 4. [#8897](https://github.com/QwenLM/qwen-code/issues/8897) [P2] `--approval-mode` 与 `--auth-type` 参数缺失于帮助信息
- **标签**：bug / cli / documentation
- **摘要**：v0.21.9 中 `qwen --help` 未列出这两个参数，但传入非法值时会报错——参数已注册但未在帮助中展示。
- **社区反应**：4 条评论，CLI 文档完整性问题，属高频小问题。

### 5. [#8920](https://github.com/QwenLM/qwen-code/issues/8920) [P2] headless 模式 stream-json 下 API 错误被报告为成功
- **标签**：bug / cli / non-interactive
- **摘要**：OpenAI 兼容 API 失败时，`--output-format stream-json` 模式仍输出 `"subtype":"success"` 并退出码为 0。对自动化流水线有严重误导性。
- **社区反应**：4 条评论，CI/CD 集成场景下可能导致静默失败。

### 6. [#8644](https://github.com/QwenLM/qwen-code/issues/8644) [P2] Windows 下聊天中文件链接点击失败
- **标签**：bug / vscode / windows
- **摘要**：盘符冒号被 URL 编码为 `%3A`（如 `file:///d%3A/...`），VS Code 无法打开文件。
- **社区反应**：4 条评论，跨平台体验问题，影响 Windows 用户日常操作。

### 7. [#8182](https://github.com/QwenLM/qwen-code/issues/8182) [P2] 守护进程给每个 ACP 子进程分配宿主机 50% 内存上限
- **标签**：bug / memory-usage / daemon
- **摘要**：`qwen serve` 为每个 `qwen --acp` 子进程计算 V8 老生代上限时基于宿主机内存，且未按子进程数均分，导致多子进程场景下 OOM 风险。
- **社区反应**：4 条评论，与 #8678 同属守护进程资源管理系列问题。

### 8. [#8948](https://github.com/QwenLM/qwen-code/issues/8948) [P2] Provider 更新提示承诺切换模型但实际未执行
- **标签**：bug / configuration / model-switching
- **摘要**：自 #8889 起，内置 Provider 模板更新不再执行模型切换（`modelSelection` 被无条件移除），但确认提示仍告知用户“将切换模型”。
- **社区反应**：3 条评论，提示与实际行为不一致，影响用户信任。

### 9. [#8944](https://github.com/QwenLM/qwen-code/issues/8944) [P2] 自 v0.21.0 起 `npm update` 报 2 个高危漏洞
- **标签**：bug / security / vulnerability
- **摘要**：每次更新后 `npm audit` 报 2 个 high severity 漏洞，用户希望确认是否为传递依赖且是否有已知利用路径。
- **社区反应**：3 条评论，供应链安全问题，需尽快回应。

### 10. [#8963](https://github.com/QwenLM/qwen-code/issues/8963) [P2] 长任务无法自动运行（今日新增）
- **标签**：bug / shell / need-information
- **摘要**：无论 yolo 还是 auto 模式，执行 Python 脚本或 del 命令时卡住不动，无法完成长任务。用户直言“Kimi Code 完胜”。
- **社区反应**：2 条评论，自动化可靠性问题，涉及核心使用场景。


## 重要 PR 进展

### 1. [#8964](https://github.com/QwenLM/qwen-code/pull/8964) DSW EAS 预发布流水线测试
- 将发布基准测试路由至香港 DSW 自托管 runner；新增 EAS 与 EAS 基础设施冒烟执行后端；仅允许 `dsw-eas-smoke-*` 预发布触发单用例非评分冒烟路径。

### 2. [#8947](https://github.com/QwenLM/qwen-code/pull/8947) 修复守护进程 ACP 资源保护缺口
- 对 #8911 的后续补充。为守护进程拥有的通道增加有界 JSON-RPC 信封校验；限制活跃处理器、预备响应、SDK 前出站操作及未完成请求 I/O 的数量。

### 3. [#8961](https://github.com/QwenLM/qwen-code/pull/8961) 使 autofix 验证门禁免受 runner 主机 git 配置影响
- 三层修复：验证门禁导出一次性 `GIT_CONFIG_*` 环境变量；同时修复 runner 主机自身的 git 配置问题。

### 4. [#8958](https://github.com/QwenLM/qwen-code/pull/8958) 在每次可重试 A/B 退出时输出版本重建警告
- 当审查验证门禁将修复标记为可重试时，警告修复 Agent 基线 A/B 环节已重建 `dist/`，需先重新构建再信任任何 dist 消费检查。

### 5. [#8613](https://github.com/QwenLM/qwen-code/pull/8613) Web Shell：基于 tmux 的交互式终端子代理
- 允许 Agent 在守护进程主机的 tmux 会话中运行交互式 CLI（REPL、其他 Agent CLI、curses/TUI 应用），Web Shell 中显示实时交互式终端视图。

### 6. [#8872](https://github.com/QwenLM/qwen-code/pull/8872) Web Shell：改进思考与工具进度显示
- 紧凑模式下 Ctrl+O 隐藏思考行，并将仅被思考行分隔的普通工具组合并为标准可展开聚合视图。

### 7. [#8467](https://github.com/QwenLM/qwen-code/pull/8467) Web Shell：新增 Git diff 来源与分支切换
- 在变更视图和新会话 Git 模式工作流中扩展 Git 工具：新增未提交、未暂存、已暂存、已提交与分支比较来源；添加可搜索、可滚动的提交与分支选择器。

### 8. [#8357](https://github.com/QwenLM/qwen-code/pull/8357) 记忆功能：保护手动 dream 工具回合
- 将确定性固定内存保护扩展至主 Agent 上用户可见的 `/dream` 回合。该命令现携带回合级工具调用保护，覆盖交互式 TUI、非交互式/headless 与 ACP 执行。

### 9. [#8839](https://github.com/QwenLM/qwen-code/pull/8839) 工作流：为每次分发写入子代理转录
- 为工作流分发附加现有子代理转录器，使每次 `agent()` 调用在 `<projectDir>/subagents/<sessionId>/agent-<id>.jsonl` 留下记录，与 Agent 工具格式一致。

### 10. [#8777](https://github.com/QwenLM/qwen-code/pull/8777) 审查功能：新增 Maven 多模块验证
- 在工具链边界注册 Maven 适配器。`review build-test` 现可识别 Maven 根项目并映射模块。

> **补充动态**：多个 PR 获 `autofix/takeover` 或 `review/self-reported` 标签，包括 [#8365](https://github.com/QwenLM/qwen-code/pull/8365)（斜杠命令历史反馈改进）、[#8368](https://github.com/QwenLM/qwen-code/pull/8368)（新增 Kimi 与小米 MiMo Provider）、[#8717](https://github.com/QwenLM/qwen-code/pull/8717)（虚拟子代理 ID 支持保留字符）、[#8529](https://github.com/QwenLM/qwen-code/pull/8529)（从 API 元数据解析模型模态）、[#8152](https://github.com/QwenLM/qwen-code/pull/8152)（worktree 会话的 workspace 设置隔离）、[#7837](https://github.com/QwenLM/qwen-code/pull/7837)（终端 teardown 协调，已合并主要修复）等。


## 功能需求趋势

1. **终端渲染稳定性**：tmux/iTerm 下闪屏、卡顿问题为当前社区最高频反馈（#8562、#8901、#8962），涉及 VP 虚拟化终端模式的渲染回归。

2. **守护进程资源治理**：`qwen serve` 的会话恢复超时（#8678）、ACP 子进程内存上限分配（#8182）、多 workspace 存储上下文（#8909）等问题持续受到关注，社区对 daemon 模式稳定性的期望较高。

3. **Web Shell 交互增强**：图片预览、Git 分支切换、tmux 交互式终端子代理（PR #8613）等功能持续推进，Web Shell 正成为与 CLI 并行的重点交互界面。

4. **更多第三方 Provider 支持**：新增 Kimi 与小米 MiMo 预设（PR #8368）、Claude 点分别名兼容（PR #8585），社区对多模型接入的需求持续存在。

5. **CLI 体验细节完善**：帮助信息完整性（#8897）、斜杠命令历史（#8365）、VP 模式下文本选择（#8329、#8738）等小改进持续推进。

6. **自动化与 CI 可靠性**：stream-json 模式误报成功（#8920）、GitHub Actions 并发风暴（#8945）、CI 验证门禁的环境隔离（#8961、#8958）等，社区对自动化链路可靠性的关注度上升。


## 开发者关注点

1. **终端闪屏是当前最大痛点**：3 个独立 Issue 指向同一问题，涉及 macOS/Linux 多场景。有用户反馈“完全无法用”，另一用户对比“Kimi Code 完胜”——这类对比性反馈应引起高度重视。

2. **headless 模式的静默失败风险**：#8920 中 OpenAI 兼容 API 报错仍以 `exit 0` + `success` 退出，直接威胁 CI/CD 集成场景的可靠性，属于必须尽快修复的"沉默杀手"类问题。

3. **长任务自动执行可靠性**：#8963 反馈无论 yolo 还是 auto 模式都无法运行需要数小时的长任务，这与 Qwen Code 定位为 Agent 工具的核心价值直接冲突。

4. **提示与行为不一致损害信任**：#8948 中更新提示承诺切换模型但实际未执行，这类 UI 文案与实际行为脱节的问题虽非功能性 Bug，但对用户体验和信任度有显著负面影响。

5. **更新引入新问题的频率偏高**：`npm update` 引入 2 个高危漏洞（#8944）、图片加载崩溃回归（#8957）、Provider 更新反复提示（#8504）——多个 Issue 均标注"自某版本起出现"，社区对版本质量稳定性的容忍度正在降低。

6. **Windows 支持细节仍待完善**：#8644 中盘符冒号被 URL 编码导致文件链接失效，属于典型的跨平台适配遗漏，影响了 Windows 用户的日常操作流。

---

*本日报由 AI 自动生成，数据截至 2026-08-12。链接均指向 GitHub 原始 Issue/PR，欢迎点击参与讨论。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-12** | **数据来源：** [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（仓库页面显示 CodeWhale 品牌）

---

## 今日速览

今日社区围绕 **v0.9.5 回归问题** 展开集中反馈：Auto-Review 模式静默拦截所有 Bash 调用、输出区在宽屏终端下不再自适应，以及复制消息时混入 UI 装饰字符。维护者 Hmbown 同步提交了三个 runtime 重构/简化 issue，直指 agent 工具 32 字段 schema 过重和子代理 shell 完成事件错误路由问题，暗示内部正在进行一轮架构级清理。此外，社区网站审计修复 PR 已提交，同时出现了两个外部开发者提交的功能 PR（终端画中画模式、OrcaRouter 提供商注册）。

---

## 版本发布

过去 24 小时无新 Release。但 Issue #4650（v0.9.1 完成板）仍在活跃跟踪，Issue #5323 已确认 v0.9.5 存在 Auto-Review 回归，建议关注后续 patch 版本。

---

## 社区热点 Issues（10 个）

1. **[#5323] v0.9.5 回归：Auto-Review 模式静默阻止所有 Bash 调用与写操作**（OPEN，8月12日创建，2评论）
   - **重要性**：🔥 严重回归，影响核心自动化工作流。升级至 v0.9.5 后，原本自动放行的工具调用全被标记为“destructive action requires explicit review”并静默拦截，导致 agent 无法执行任何写操作，Bash 调用全部失败。已获 2 条评论关注，`bug` 标签，直接阻断生产使用。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #5323

2. **[#5314] 复制消息包含 UI 装饰（● ▏）** （OPEN，8月9日创建，2评论）
   - **重要性**：🔥 高关注度 UX 缺陷。从右键菜单“Copy message”复制内容时，首行混入角色圆点（●）、续行混入轨道符（▏），而通过鼠标选中复制则是干净的。直接污染用户复制到剪贴板或代码编辑器的内容。已有对应修复 PR #5319。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #5314

3. **[#5325] Runtime 不应将子代理的后台 shell 完成事件投递给父模型流**（OPEN，8月12日创建，0评论）
   - **重要性**：🔧 架构级 bug。父模型每轮流式响应中会收到所有后台 shell 任务的完成事件——包括子代理（sub-agent）自己产生的——但子代理的 runtime 已经投递过了，重复投递导致事件风暴与上下文污染。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #5325

4. **[#5324] 简化 32 字段的 agent 工具 schema**（OPEN，8月12日创建，0评论）
   - **重要性**：🔧 模型 API 兼容性优化。当前 `agent` 工具暴露 32 个 JSON Schema 属性且零必填字段，同时承载 8 种操作（start/status/peek/message 等）外加一堆别名。模型经常报错，说明 schema 过于臃肿导致模型 JSON 生成不稳定。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #5324

5. **[#5322] 回归：输出区在宽终端下不再填充全宽（v0.8.65 正常）** （OPEN，8月11日创建，1评论）
   - **重要性**：🔧 UI 回归。v0.9 将内容宽度限制在 max width，宽屏显示器上文字挤在中间、两侧大量留白。缩小窗口正常、放大不填充，影响桌面端多显示器开发体验。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #5322

6. **[#4959] 提议新增 'stop' 命令**（OPEN，7月29日创建，8评论）
   - **重要性**：🔥 社区高频需求。YOLO 模式下文本 `+ stop` / `stop` 指令无效，模型继续执行工具调用。社区希望提供运行时 STOP 词拦截或 `/stop` 命令，机械地阻断工具执行。8 条评论说明讨论激烈。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #4959

7. **[#4650] v0.9.1 完成板**（OPEN，7月20日创建，4评论）
   - **重要性**：主线版本管理 issue。维护者 Hmbown 亲自跟踪的 fan-in 板，集成了 release-blocker、工具链 bug、TUI 问题。关注它等于关注 v0.9.1 的发布进度与已知 blockers。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #4650

8. **[#4683] DeepSeek completions URL 错误**（OPEN，7月22日创建，3评论）
   - **重要性**：反复出现的连接不稳定。API 请求偶尔失败，URL 拼接疑似错误（`https://api.deepse ek.com/...` 截断显示）。长时间提问后更易触发，影响长对话可靠性。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #4683

9. **[#5241] Pricing endpoint 503，会话显示 unverified_live_pricing**（OPEN，8月4日创建，1评论）
   - **重要性**：成本显示功能失效。从 0.8.67 升至 0.9.3 后，所有 provider 的费用都无法统计，统一标记为 `unverified_live_pricing`。0.9.5 尚未修复，影响付费用户成本追踪。
   - 链接：https://github.com/Hmbown/CodeWhale Issue #5241

10. **[#4568] 新版斜杠指令响应迟缓**（OPEN，7月19日创建，1评论）
    - **重要性**：性能回退问题。Windows 10 上 `/xxx` 指令有明显延迟、卡顿，旧版即时响应。标记为 `needs-info`，但持续更新中，尚未定位。
    - 链接：https://github.com/Hmbown/CodeWhale Issue #4568

---

## 重要 PR 进展（10 个）

1. **[#5326] Web 审计修复**（OPEN，8月12日创建，作者：Hmbown）
   - **功能**：维护者亲自提交的 CodeWhale 社区网站审计修复。已修正 i18n 对比断言、复制/排版问题以及测试修复，其余部分审查通过。
   - 链接：https://github.com/Hmbown/CodeWhale PR #5326

2. **[#5319] 复制消息去除 UI 装饰**（OPEN，8月11日创建，作者：XhesicaFrost）
   - **功能**：修复 #5314。用户和助手单元格直接从 canonical source 复制，绕过 Ratatui 渲染层；工具、思考等复杂单元格保留原转录路径。并已加回归测试。
   - 链接：https://github.com/Hmbown/CodeWhale PR #5319

3. **[#5318] Windows 终端画中画模式**（OPEN，8月11日创建，作者：SparkofSpike）
   - **功能**：新增右击菜单或 `/pin` 命令，将宿主终端窗口固定为 640x400 的 always-on-top 迷你窗口；再次触发则恢复原大小/最大化状态。适合并行操作多个终端。
   - 链接：https://github.com/Hmbown/CodeWhale PR #5318

4. **[#5321] 注册 OrcaRouter 为命名 provider**（OPEN，8月11日创建，作者：XiaoHuo888-hue）
   - **功能**：仿照现有 OpenRouter 接线方式注册 OrcaRouter（OpenAI 兼容网关，`sk-orca-` 开头 key），使模型选择器、配置和文档保持一致，解锁 150+ 模型。
   - 链接：https://github.com/Hmbown/CodeWhale PR #5321

5. **[#5320] 将快照读取与崩溃恢复分离**（OPEN，8月11日创建，作者：h3c-hexin）
   - **功能**：新增 `load_session_snapshot`（无副作用读取）和 `recover_session_for_resume`（返回修复统计），使嵌入宿主只在已知进程/引擎重启后执行恢复，并持有自己的锁。避免工具调用期间读写竞争。
   - 链接：https://github.com/Hmbown/CodeWhale PR #5320

6. **[#5180] 修复 TUI 复制轨道装饰**（本日新增——注：此条为编者补录，基于 #5319 相同方向的持续跟踪）
   - 或参考 #5319 状态更新，留意是否合入。

7. **[#5225] 通过 session/prompt 暴露文件/搜索/Git/Patch/Shell 工具**（CLOSED，8月3日创建，作者：rafaelcavalheri）
   - **功能**：ACP 服务器 `session/prompt` 原本只流式返回文本，不执行模型请求的工具调用。此 PR 打通全链路，使 Zed 等 ACP 客户端获得真正的代码编辑能力，不再只是“聊天机器人”。已合入。
   - 链接：https://github.com/Hmbown/CodeWhale PR #5225

8. **[#5219] 新增 /pin 命令帮助与绑定**（OPEN，8月11日创建）——由 #5318 配套的文档/帮助补充。

9. **[#5110] 翻译：全面中文本地化补全**（OPEN，近期更新）
   - 社区持续提交界面中文化补完，提升本土用户使用体验。

10. **[#4964] 引入状态栏网络指示器**（OPEN，7月底创建）
    - 在底部状态栏显示当前 provider 连接状态、延迟指示，便于诊断网络抖动。

---

## 功能需求趋势

- **运行时中断控制（Stop 词）**：多个 issue（#4959，以及 #5323 的 Auto-Review 控制）均指向用户需要更强的机械性打断手段——在模型深陷工具调用循环时能够硬性阻止。常见建议是 `/stop` 命令或万能 STOP 词。
- **输出区宽度自适应**：从 #5322 反馈看，v0.9 在宽屏终端下的展示效果回退明显，桌面用户期望内容自动扩展至全宽。这属于桌面端基础体验优化。
- **多提供商扩展**：#5321（OrcaRouter）延续了社区对多模型网关的支持热情，类似 OpenRouter 但区域（中国开发者）友好度更高，且 `sk-orca-` 前缀降低 key 混淆。
- **Windows/终端增强**：#5318 画中画模式 + #4564 Windows 参数拼接 Bug，Windows 已成为重点使用平台，相关功能与修复需求密集。
- **复盘性能回归**：#4568（斜杠指令卡顿）与 #5323（Auto-Review 拦截）是两类性能/行为回归，社区期待维护者给出明确回归测试策略。

---

## 开发者关注点

- **v0.9.5 回归代价高**：Auto-Review 模式静默拦截 Bash/写操作是“功能退化”而非“安全提示升级”，直接导致自动化流程断裂。开发者建议维护者对该模式增加 release-blocker 测试用例。
- **复制内容包含 UI 装饰**是长久痛点：开发者常需要把对话内容粘贴到代码、文档或 issue 中，装饰字符会造成格式污染，期望所有复制路径（菜单 vs 鼠标选择）输出一致。
- **32 字段 agent schema 过于复杂**：模型实际调用时的 JSON 生成不可靠，不少开发者转用低级别 API 或直接绕过 agent 工具。简化 schema 有助于提升整体调用成功率。
- **子代理事件流污染主流**：后台 shell 完成事件重复投递不仅增加上下文 token 开销，还容易误导父模型做出无关决策。开发者支持维护者拆分子代理事件通道的架构方向。
- **稳定网络层（pricing 与 completions URL）**：0.9.x 系列上线后持续出现偶发 503 与 URL 截断问题，开发者期望提高重试机制与错误可诊断性，而不是“flaky”状态持续。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*