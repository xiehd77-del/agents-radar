# AI CLI 工具社区动态日报 2026-08-05

> 生成时间: 2026-08-05 02:39 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告

**分析日期：** 2026-08-05 | **覆盖工具：** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI (CodeWhale)

---

## 1. 生态全景

当前 AI CLI 工具已从"单点代码补全"演进为**具备完整 Agent 能力的开发基础设施**，各主流工具均在围绕**会话管理、上下文工程、工具生态（MCP）、多模型路由**四大核心能力展开激烈竞争。社区反馈显示，稳定性与资源消耗（内存泄漏、进程失控、高 CPU 轮询）已成为跨工具共性的最大信任危机，而非功能缺失。与此同时，**Windows/WSL2 平台的体验短板**在多数工具中集中爆发，成为制约开发者采纳的关键瓶颈。整体而言，该赛道已进入"功能趋同、体验决胜"的深水区，企业级特性（多账户、组织级分发、安全审计）与个性化需求（自定义主题、BYOK）正在分化出明确的用户分层。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issue 数 | 活跃 PR 数 | Release 情况 | 高赞 Issue 峰值 |
|------|-------------|-----------|-------------|----------------|
| **Claude Code** | 10 (Top) | 10 (Top) | ✅ v2.1.222（安全补丁） | #27302 · 335👍 |
| **OpenAI Codex** | 10 (Top) | 10 (Top，均已合并) | ✅ 4 个 Rust alpha 版 | #11023 · 917👍 |
| **Gemini CLI** | 10 (Top) | 10 (Top) | ❌ 无 | #12657 · 20👍 |
| **GitHub Copilot CLI** | 10 (Top) | 2（仅 24h 内） | ✅ v1.0.79-1 | #1697 · 25👍 |
| **Kimi Code CLI** | 5+ | 3 | ❌ 无 | #1282 · 24👍 |
| **OpenCode** | 10 (Top) | 10 (Top) | ✅ v1.18.13 | #16017 · 126👍 |
| **Pi** | 10 (Top) | 10 (Top) | ❌ 无（发布列车进行中） | #6768 · 18👍 |
| **Qwen Code** | 10 (Top) | 10 (Top) | ✅ 2 个版本（preview + nightly） | #8102 · 17💬 |
| **DeepSeek TUI (CodeWhale)** | 10 (精选) | 10 (精选) | 🔄 v0.9.4 发布列车（77 commits） | #4978 · 6💬 |

**数据说明：** Issues/PR 数为日报精选数，非当日总量。Codex 与 Copilot 的 PR 活动集中在机器人驱动的基础设施层面。

---

## 3. 共同关注的功能方向

### 3.1 Windows / WSL2 平台体验（跨 6 个工具）
- **Claude Code：** Bash 工具报 `unexpected EOF`、MSIX GPU 崩溃、WebGPU 冲突
- **Codex：** PowerShell/WMI 轮询致系统输入延迟、进程泄漏（taskkill/conhost 数百个）
- **Gemini CLI：** WSL2 执行 Windows 二进制死锁、PTY 回归
- **Copilot CLI：** Ctrl+H 误判、原生运行时反复崩溃
- **Kimi Code：** Thai/IME 字符重复、普通会话异常退出
- **Pi：** `find` 工具路径模式失效、SQLite 模块缺失、路径分隔符问题
- **Qwen Code：** tmux 闪屏

### 3.2 会话管理与恢复能力（跨 5 个工具）
- **Claude Code：** `--continue` 无法衔接 `-p` 会话、项目标签不可配置
- **Codex：** CLI 回归致会话恢复失败（#31754）、`/undo` 功能强烈要求回归（372👍）
- **Copilot CLI：** 会话分叉（25👍）、云端同步、删除会话命令
- **Kimi Code：** 远程控制本地会话（24👍）
- **Pi：** /tree 恢复失败回合、上下文压缩后会话重载错误

### 3.3 子 Agent / 子任务精细化控制（跨 4 个工具）
- **Claude Code：** 子 Agent 忽略 `effort` 前注、Workflow 内部 agent 不受钩子约束
- **Codex：** 子代理无视模型与推理设置（用户强烈不满）
- **Copilot CLI：** 组织级 Agent 分发不生效
- **DeepSeek TUI：** 子代理从检查点恢复（已修复，PR #5242）

### 3.4 MCP 生态稳定性（跨 5 个工具）
- **Claude Code：** Microsoft 365 Connector 拒绝个人账户
- **Codex：** MCP 服务器进程泄漏（9+GB）、工具发现但无法调用
- **Copilot CLI：** `server/discover` 导致 FastMCP 初始化失败
- **Qwen Code：** `mcp list` 在 SSE 服务器上无限挂起
- **DeepSeek TUI：** MCP Registry 发现 + Registry-first 工具选择

### 3.5 上下文压缩与内存管理（跨 4 个工具）
- **Claude Code：** 压缩后技能重新注入成本高（#82144）、内存泄漏 15GB
- **Pi：** Compaction 在 Copilot Enterprise 下 421 错误、压缩时无法独立配置思考级别
- **Qwen Code：** 守护进程内存管理、长会话页面向后翻页内存溢出
- **Kimi Code：** ~500K token 时 Agent 行为退化（循环动作、指令漂移）

### 3.6 多账户 / 多身份管理（跨 3 个工具）
- **Claude Code：** 多 Connector 账户支持成为最强诉求（335👍）
- **DeepSeek TUI：** 仅能保存一个 API Key，切换 Provider 困难
- **OpenCode：** Go 订阅用量/余额 API（126👍）

### 3.7 自定义模型 / BYOK（跨 4 个工具）
- **Codex：** 记忆写入器向第三方模型发送硬编码请求（新发）
- **Gemini CLI：** 新增 SGLang 及本地 OpenAI 兼容端点支持
- **Copilot CLI：** BYOK LLM、流式 reasoning_content
- **Pi：** LLM Gateway、Cortecs、Qwen Token Plan 等新服务商接入

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 / 架构特征 | 当前最突出短板 |
|------|---------|---------|-------------------|---------------|
| **Claude Code** | 全功能 Agent 开发平台 | 企业级 + 专业开发者 | Node.js 单仓库，MCP Connector 生态，Hook 机制（PreToolUse 等） | 高上下文内存泄漏、文档滞后 |
| **OpenAI Codex** | 桌面优先的 AI IDE | 桌面端重度用户 + 订阅用户 | Rust 核心，app-server + Desktop 双架构，ACP 协议支持 | Windows/macOS 桌面资源失控 |
| **Gemini CLI** | Google 生态的原生 CLI | Google 订阅用户 + 跨平台开发者 | TypeScript (Bun)，PTY 交互，VS Code 扩展 | 限流策略不透明、粘贴输入卡死 |
| **Copilot CLI** | GitHub 生态的企业级助手 | 企业用户 + GitHub 深度用户 | 沙箱机制（权限可配置），与 GitHub Models/Agent 深度绑定 | MCP 兼容性回归、WSL2 体验 |
| **Kimi Code** | 轻量级跨端 Agent CLI | 移动端 + 跨设备开发者 | 基于 ACP 协议构建，支持移动客户端（Happy Coder）驱动 | 高上下文稳定性、Windows 兼容性 |
| **OpenCode** | 开源可自托管的多模型网关 | 开源社区 + 成本敏感团队 | 多 Provider 路由（OpenCode Go 订阅），V2 配置体系，Flatpak 分发 | DeepSeek 模型路由异常、SSE 流不完整 |
| **Pi** | 高性能终端 UI 专家 | 终端极客 + 多服务商用户 | 独立 TUI 渲染引擎，JSON 模式，多服务商路由（OpenRouter 等） | 企业版 Compaction 故障、Windows 路径兼容 |
| **Qwen Code** | 阿里云生态的 Agent 工具链 | 国内开发者 + 阿里云用户 | 多工作区守护进程架构，autofix 自动化修复流水线，Hook 信任边界 | 取消操作副作用、守护进程资源失控 |
| **DeepSeek TUI (CodeWhale)** | 高性能 Rust 原生 TUI | 性能敏感用户 + 多 Provider 用户 | 68 万行单体 crate，沙箱（Seatbelt）隔离，Runtime HTTP API | 编译等待时间长、工具契约可信度 |

---

## 5. 社区热度与成熟度

### 第一梯队：高热度 + 高成熟度
- **Claude Code：** 获 335👍 的 Issue 持续数月仍高居榜首，社区讨论深度高（数据丢失、安全边界类）。版本迭代稳定（v2.1.x），安全响应迅速（当日修复 worktree 漏洞）。**社区最成熟、企业用户占比最高。**
- **OpenAI Codex：** Linux 桌面版诉求获 917👍，为今日全行业最高。但 Windows 性能问题形成"Issue 集群"（7+ 个互相关联），反映官方在跨平台稳定性上欠账较多；PR 密集但多为机器人驱动，**属高关注度、口碑两极分化型。**

### 第二梯队：快速迭代 + 社区增长
- **Qwen Code：** 大量 PR 带 `autofix/takeover` 标签，显示已建立**自动化修复流水线**，维护效率高。issue 聚焦架构级议题（可信 Agent 运行时、资源边界），社区专业度高。
- **OpenCode：** 单 Issue 获 126👍（Go 用量 API），社区诉求集中且明确。v1.18.x 被社区标记为"回归版本"，用户粘性未受损，**处于用户增长与稳定性博弈期。**
- **DeepSeek TUI (CodeWhale)：** 核心维护者 Hmbown 亲自提交构建性能优化系列 Issue，将"编译时间"作为一等公民对待。发布列车 77 commits 待合并，**项目正处于功能大爆发前的攻坚期。**

### 第三梯队：企业存量为主 / 迭代节奏平稳
- **Copilot CLI：** Issue 点赞数偏低（峰值 25👍），PR 不活跃（24h 仅 2 条）。依赖 GitHub 生态自然流量，**社区自驱力较弱，迭代动力主要来自企业客户反馈。**
- **Gemini CLI：** 多数 Issue 已关闭（10 条中 8 条 CLOSED），PR 密集但描述简略。社区讨论以 Bug 修复为主，功能提案较少，**维护效率高但社区想象力有限。**
- **Kimi Code：** Issue 数量少（Top 10 中仅 5 条），点赞普遍偏低（峰值 24👍）。**社区规模尚小、处于早期采用阶段。** 但 ACP 协议相关 PR（权限切换、模型发现）显示其技术路线清晰。

---

## 6. 值得关注的趋势信号

### 信号一：Windows 不再是"二等公民"——而是"头号战场"
7/9 的工具存在 Windows/WSL2 专项问题反馈。Codex 在 Windows 上已出现"WMI 风暴→DWM 退化→系统输入延迟"的恶性循环，Gemini CLI 和 Qwen Code 则分别在 PTY 和 tmux 上踩坑。**对开发者的启示：** 选择工具时，Windows 原生支持质量应作为第一筛查条件，而非仅看功能清单。

### 信号二："安全信任边界"正从功能特性升级为架构原则
Claude Code 当日紧急修复 worktree 隔离漏洞；Qwen Code 提出"确定性工具执行边界"（#8102）、修复 Hook 四个信任边界漏洞；Gemini CLI 同步推进 SSRF 修复与变量扩展绕过补丁；DeepSeek TUI 面临"工具假报成功"的契约可信度危机。**对开发者的启示：** 将 Agent 用于生产环境前，必须审计其工具调用的可观测性与回滚机制，不能默认信任工具返回值。

### 信号三：构建性能/编译时间成为社区贡献的"高阶摩擦点"
DeepSeek TUI 维护者用 5 个 Issue 系统性地拆解单体 crate 的编译瓶颈；Claude Code 社区则通过插件开发工具链的脚本修复表达对开发体验的不满。**对开发者的启示：** 若计划深度定制或贡献插件，请优先评估目标工具的二次开发成本——单体架构与模块化架构的长期维护体验将快速分化。

### 信号四：上下文窗口的"隐性截断"引发信任危机
Kimi Code 在 ~500K token 时出现 Agent 行为退化；DeepSeek TUI 确认 1M 上下文被静默回退至 128K 且无提示；Codex 记忆写入器向第三方模型发送硬编码请求。**对开发者的启示：** 长会话场景下应主动监控上下文消耗，并在关键任务前显式验证上下文完整性，而非依赖工具的"宣称值"。

### 信号五：MCP 生态进入"兼容性阵痛期"
5/9 的工具存在 MCP 初始化、进程管理、工具发现相关缺陷（FastMCP 握手失败、进程泄漏 9GB、SSE 挂起）。MCP 正从"创新特性"变为"标配能力"，但其协议层实现标准尚未统一。**对开发者的启示：** 评估 Connector 生态时，应重点验证目标 MCP 服务器与实际运行环境的兼容性，而非仅看市场宣传的支持矩阵。

### 信号六：自动化维护（autofix）成为开源项目的新基建
Qwen Code 大量 PR 由 `autofix/takeover` 标签驱动，Codex 的 `copyberry[bot]` 批量合并基础设施 PR，Copilot CLI 接入安全合规流水线。**对开发者的启示：** AI CLI 项目自身正在用 AI 优化维护流程，这一模式将逐步外溢至开发者自己的工作流——"AI 维护 AI"将成为常态。

---

*本报告基于各工具 2026-08-05 社区动态整理，数据来源于各项目 GitHub 公开仓库。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，我基于您提供的 `anthropics/skills` 仓库数据，为您生成这份社区热点报告。

---

### 1. 热门 Skills 排行
以下是评论数或关注度最高的 5 个新 Skill PR，代表了社区近期讨论的焦点。

- **#1298 `fix(skill-creator): run_eval.py always reports 0% recall...`** ([链接](https://github.com/anthropics/skills/pull/1298))
  - **功能**：修复 `skill-creator` 中评估脚本 `run_eval.py` 的严重缺陷。该缺陷导致其评估结果恒定为 0% 召回率，使 `skill-creator` 基于“噪声”进行自我优化。
  - **社区热点**：这是社区反馈最集中的 bug（关联 Issue #556），直接导致 `skill-creator` 的优化循环失效。该 PR 包含多个修复点（Windows 兼容性、触发检测、并行处理），是提升核心工具可靠性的关键。
  - **状态**：`[OPEN]`

- **#514 `Add document-typography skill`** ([链接](https://github.com/anthropics/skills/pull/514))
  - **功能**：新增文档排版技能，专门解决 AI 生成文档中的孤行、寡行（段落标题孤立在页底）和编号错位等专业排版问题。
  - **社区热点**：讨论聚焦于 AI 生成文档的质量控制，此类细节问题容易被忽略但影响专业度，该技能旨在弥补这一空白。
  - **状态**：`[OPEN]`

- **#486 `Add ODT skill`** ([链接](https://github.com/anthropics/skills/pull/486))
  - **功能**：为 OpenDocument 格式（.odt, .ods）提供全面的创建、填充、读取和转换能力，填补了官方文档技能在开源格式上的空缺。
  - **社区热点**：讨论关注于对 LibreOffice 和 ISO 标准格式的支持，体现了社区对开源办公生态的重视。
  - **状态**：`[OPEN]`

- **#1367 `feat(skills): add self-audit — ... reasoning quality gate`** ([链接](https://github.com/anthropics/skills/pull/1367))
  - **功能**：提出一个通用的“自我审计”技能。在执行任何交付前，先进行机械性的文件验证，再进行按严重程度排序的四维度推理质量审计。
  - **社区热点**：讨论聚焦于 AI 输出质量保证，这是从“生成”到“交付”环节的关键一步，强调了对 AI 输出进行系统性验证的必要性。
  - **状态**：`[OPEN]`

- **#1302 `Add color-expert skill`** ([链接](https://github.com/anthropics/skills/pull/1302))
  - **功能**：一个全面的色彩专业知识技能，涵盖从色彩命名体系（ISCC-NBS, Munsell）到色彩空间选择（OKLCH/OKLAB）的完整知识图谱。
  - **社区热点**：讨论集中于为设计师和开发者提供专业的色彩决策支持，是一个高度垂直化、深度专业的知识型技能。
  - **状态**：`[OPEN]`

- **#210 `Improve frontend-design skill clarity and actionability`** ([链接](https://github.com/anthropics/skills/pull/210))
  - **功能**：这是一个改进类 PR，旨在重写 `frontend-design` 技能，使其指令更清晰、更可操作，确保 Claude 能在单次对话中遵循执行。
  - **社区热点**：社区对现有技能的**质量和实用性**提出了更高要求，希望技能不仅是知识堆砌，而是可执行的行动指南。
  - **状态**：`[OPEN]`

---

### 2. 社区需求趋势
从 Issues 中可以看出，社区对 Claude Skills 的诉求已从“添加更多功能”转向“**提升现有工具的可靠性与安全性**”以及“**构建更完善的生态基础设施**”。

- **安全与信任** (Issue #492)：社区最强烈的呼声之一。Issue #492 指出社区技能被分发在 `anthropic/` 命名空间下，存在**信任边界滥用**的风险，用户可能误以为它们是官方技能而授予过高权限。社区对安全性的关注度极高。
- **核心工具链修复** (Issue #556, #1061, #1169)：多个高赞 Issue 集中反馈 `skill-creator` 的评估脚本在 Windows 上和特定场景下失效（0% 触发率）。社区对 `skill-creator` 这一官方工具链的稳定性、跨平台兼容性和功能性有**迫切需求**。
- **功能与体验改进** (Issue #228)：社区希望能在组织内**直接共享技能**，简化当前的下载-发送-手动导入流程，这反映了企业级协作的明确需求。
- **生态治理** (Issue #189)：`document-skills` 和 `example-skills` 插件包含相同内容，导致安装后技能重复。社区关注**技能仓库的组织与去重**问题，希望有更清晰的边界和治理规则。

---

### 3. 高潜力待合并 Skills
以下 PR 评论活跃，且目前仍处于 `[OPEN]` 状态，预示着它们可能在未来一段时间内被合并或产生重要影响。

- **#1298 fix(skill-creator)** ([链接](https://github.com/anthropics/skills/pull/1298)) — **潜力极高**。它直接修复了 `skill-creator` 的核心 bug，是社区最关心的痛点问题。它的合并将显著提升官方工具的可信度。
- **#514 document-typography** ([链接](https://github.com/anthropics/skills/pull/514)) — **潜力较高**。它瞄准了 AI 生成文档的顽疾（排版问题），且该问题是跨场景的通用需求，对提升文档交付质量有立竿见影的效果。
- **#1367 self-audit** ([链接](https://github.com/anthropics/skills/pull/1367)) — **潜力较高**。它引入了一种机制化的“质量门”概念，符合社区对 AI 输出可靠性日益增长的需求，可能成为一种新的最佳实践。
- **#83 skill-quality-analyzer / skill-security-analyzer** ([链接](https://github.com/anthropics/skills/pull/83)) — **潜力较高**。它直接回应了社区关于技能质量和安全性的担忧。这个 PR 若被采纳，将为技能生态提供官方的质量评估和安全审查工具，极大提升生态的良性发展。
- **#486 odt** ([链接](https://github.com/anthropics/skills/pull/486)) — **潜力中等**。这是一个明确的功能补齐，需求真实存在，但相对小众，热度不如修复类 PR。

---

### 4. Skills 生态洞察

当前社区在 Skills 层面最集中的诉求是**对核心工具链的稳定性和安全性的“信任修复”**，同时希望构建一个**可治理、高质量、面向工程化交付**的生态体系。

---

# Claude Code 社区动态日报

**日期：2026-08-05** | 数据来源：github.com/anthropics/claude-code


## 今日速览

今日发布 v2.1.222 补丁，重点修复了 worktree 隔离会话的安全漏洞及后台 Agent 任务中 PreToolUse 钩子被绕过的问题。社区层面，高票 Issue #27302（多 Connector 账户支持，335 👍 / 226 评论）热度持续攀升，围绕图片处理错误、PDF 依赖缺失和内存泄漏的讨论依然活跃，同时涌现出一批针对插件开发工具链的脚本修复 PR。


## 版本发布

### v2.1.222
- **安全修复：** 修复了 worktree 隔离会话及其子 Agent 能够对主检出目录执行破坏性 git 命令的问题；隔离机制现统一适用于所有会话类型中的文件编辑和 Bash 操作。
- **修复：** 修复了后台 Agent 任务中 PreToolUse auto-allow 钩子绕过工具限制的问题。


## 社区热点 Issues（Top 10）

### 1. 多 Connector 账户支持成为最强诉求
[#27302](https://github.com/anthropics/claude-code/issues/27302) | [enhancement] | 👍 335 · 💬 226
> 用户希望在同一 Connector 类型下配置多个不同账户（例如多个 Google Drive 账户）。作为当前评论数和点赞数最高的 Issue，反映了企业级用户对多身份管理的强烈需求，热度持续数月不减。

### 2. 图片处理错误持续消耗用户额度
[#62466](https://github.com/anthropics/claude-code/issues/62466) | [bug] | 👍 20 · 💬 30
> 反复出现 “Image couldn't be processed” API 错误，且持续占用用量配额。该问题持续近三个月仍未解决，严重影响依赖图像输入的工作流。

### 3. 高严重度：Assistant 文本块静默丢失
[#74260](https://github.com/anthropics/claude-code/issues/74260) | [bug, data-loss] | 👍 15 · 💬 24
> 同一回合中，位于两个 thinking 块之间的 assistant 文本块被静默丢弃——既不在 TUI 中渲染，也不出现在 transcript JSONL 中。涉及数据丢失，Cross-platform 可复现（macOS/Linux），且已确认在子会话中同样存在。

### 4. Read 工具 PDF 支持依赖未文档化
[#23704](https://github.com/anthropics/claude-code/issues/23704) | [bug, documentation] | 👍 19 · 💬 15
> Read 工具声称支持 PDF，但实际依赖 poppler-utils（pdftoppm），该依赖在常见开发环境中默认缺失且无文档说明、安装后也无检测提示。已持续数月，影响面广。

### 5. 2 空格缩进与 80 字符换行影响复制粘贴
[#13378](https://github.com/anthropics/claude-code/issues/13378) | [bug] | 👍 72 · 💬 15
> 输出强制使用 2 空格缩进并在 80 字符处硬换行，破坏复制粘贴体验。获 72 个 👍，成为长期悬而未决的高赞体验类问题，用户呼吁提供配置项。

### 6. 启动时未经指令即访问 git origin 服务器
[#21108](https://github.com/anthropics/claude-code/issues/21108) | [bug, security] | 👍 15 · 💬 13
> Claude Code 在用户发出任何命令之前即访问 git origin 服务器。涉及隐私/安全问题，用户在离线或内网环境下可能存在信息泄露风险。

### 7. 高严重度：内存泄漏导致 15GB 内存耗尽
[#21378](https://github.com/anthropics/claude-code/issues/21378) | [bug, perf:memory] | 👍 12 · 💬 8
> 运行 20+ 分钟后进程冻结，内存消耗高达 15GB（WSL2 环境，报告时版本 2.1.21）。长期存在的性能问题，对长时间会话影响严重。

### 8. Microsoft 365 Connector 拒绝个人账户
[#53408](https://github.com/anthropics/claude-code/issues/53408) | [bug, mcp] | 👍 19 · 💬 7
> 内置的 Microsoft 365 MCP Connector 无法使用个人账户（@hotmail.com / @outlook.com / @live.com）登录，OAuth 流程在登录页被阻断。这限制了个人开发者的使用场景。

### 9. 子 Agent 忽略 effort 前注配置
[#64706](https://github.com/anthropics/claude-code/issues/64706) | [bug, agents] | 👍 5 · 💬 5
> Agent 工具生成子 Agent 时，`.md` 文件中声明的 `effort:` 前注被忽略，所有子 Agent 继承了全局 effortLevel。这削弱了子 Agent 的精细化控制能力。

### 10. `--continue` 无法找到 `-p` 创建的会话
[#82536](https://github.com/anthropics/claude-code/issues/82536) | [bug] | 👍 0 · 💬 7
> 非交互模式（`-p`）创建的会话无法通过 `--continue` 在交互模式下恢复。影响脚本与交互工作流的衔接体验，为近期新上报问题。


## 重要 PR 进展（Top 10）

### 1. [插件开发工具链] 限制 frontmatter 解析
[#84004](https://github.com/anthropics/claude-code/pull/84004) | 修复
> 仅解析开头 YAML frontmatter 块，拒绝无开头/结尾标记的文件。修复了基于 `sed` 的范围提取在 Markdown 正文包含 `---` 水平线时解析错误的问题。

### 2. [脚本] 传播顶层失败状态
[#84003](https://github.com/anthropics/claude-code/pull/84003) | 修复
> 使重复维护脚本在顶层拒绝时返回失败状态，避免仅靠 `.catch(console.error)` 记录错误却因进程退出码为 0 导致 CI 误判为成功。

### 3. [脚本] 校验 gh 标志值
[#83999](https://github.com/anthropics/claude-code/pull/83999) | 修复
> 拒绝缺失值的取值型标志，避免 `gh issue list --limit` 这类不完整命令被透传、绕过包装器的参数校验。

### 4. [脚本] 校验标签选项值
[#83995](https://github.com/anthropics/claude-code/pull/83995) | 修复
> 为 `--add-label` 和 `--remove-label` 增加取值校验，修复 `set -u` 环境下参数缺失时报出内部 `unbound variable` 错误，并避免将后续选项误吞为标签值的问题。

### 5. [脚本] 拒绝自引用重复
[#83993](https://github.com/anthropics/claude-code/pull/83993) | 修复
> 阻止 `comment-on-duplicates.sh` 将触发 Issue 自身标记为重复并发表自引用评论，避免自动化流程形成错误闭环。

### 6. [插件开发] 断言预期钩子决策
[#83992](https://github.com/anthropics/claude-code/pull/83992) | 修复
> 修复 #83800。`test-hook.sh` 新增 `--expect allow|deny|ask` 选项，用于验证钩子产生预期的决策，而非仅验证钩子被执行，从而捕捉“应拒绝却放行”的逻辑错误。

### 7. [插件开发] 报告 jq 依赖缺失
[#83990](https://github.com/anthropics/claude-code/pull/83990) | 修复
> 修复 #83802。在 jq 未安装时给出明确的依赖缺失提示，而非将有效输入误报为 JSON 格式错误。

### 8. [文档] 补充 MessageDisplay 流式语义
[#83374](https://github.com/anthropics/claude-code/pull/83374) | 文档
> 为内置 Hook 开发技能补充 `MessageDisplay` 事件的触发描述、事件指南及速查表，完善插件开发文档。

### 9. [修复] 符号链接路径展开
[#83738](https://github.com/anthropics/claude-code/pull/83738) | 修复
> 修复 #83484。确保 `claude install` 创建的符号链接目标基于展开后的 home 路径，而非字面量 `%h` 占位符，修复部分 Linux 环境下产生失效链接的问题。

### 10. [CI] 新增 pylint 工作流
[#83890](https://github.com/anthropics/claude-code/pull/83890) | CI 集成
> 为仓库添加 pylint 静态检查工作流。描述信息较少，属 CI 基础设施类改进。


## 功能需求趋势

从近期 Issue 和 PR 中提炼的功能方向如下：

- **多身份/多账户管理支持**（#27302）成为第一诉求。用户需要在同一 Connector 下配置多个账户，或在多个克隆仓库中区分会话项目标签（#81628），指向工作流复杂度的上升。
- **会话管理能力补全**：`--continue` 与 `-p` 创建的会话互不兼容（#82536），加之 Desktop 端项目标签不可配置（#81628），说明会话生命周期管理有待完善。
- **MCP/连接器体验优化**：Microsoft 365 个人账户登录被拒（#53408）、Chrome 多配置文件无法区分（#74902），反映出第三方集成在个人开发者场景下的可用性短板。
- **子 Agent 精细化控制**：`effort` 前注被忽略（#64706）、Workflow 内部 agent 调用不受钩子约束（#79953），社区对子 Agent 的配置粒度提出了更高要求。
- **上下文/内存效率优化**：压缩后技能重新注入成本高（#82144）与内存泄漏（#21378）相关讨论持续，长会话场景中的资源管理仍是刚需。
- **插件开发工具链可靠性**：社区贡献者集中提交了一批针对插件开发脚本（hook 测试、重复管理、参数校验）的修复 PR，反映出插件生态正在扩大、对开发者工具本身的质量要求在提升。


## 开发者关注点

- **数据安全与隐私**：多个高热度 Issue 指向安全边界——worktree 隔离不足（已在新版本修复）、启动时意外访问 git origin（#21108）、跨机器浏览器驱动缺乏设备标识（#77605）。开发者对会话隔离和网络行为透明度十分敏感。
- **稳定性与资源消耗**：内存泄漏（#21378，15GB）、图片处理反复出错且消耗配额（#62466）、Windows 上 Bash 工具报 `unexpected EOF`（#83243）等稳定性问题持续消耗用户信任。Windows 平台问题呈上升趋势（MSIX GPU 崩溃 #81275、WebGPU Code Integrity 冲突 #83130）。
- **文档与可发现性缺失**：PDF 依赖未文档化（#23704）、Skills 前后置 schema 不一致（#83981）等问题反映文档滞后于功能开发，增加了用户排查成本。
- **体验细节成为长期痛点**：2 空格缩进/80 字符换行影响复制（#13378，👍 72）这类体验细节长期未被解决，虽非功能性缺陷，却在日常使用中高频触发用户不适。
- **钩子与自动化边界**：后台任务绕过 PreToolUse 限制（已修复）、Workflow 内部 agent 不受钩子约束（#79953）等问题，说明钩子机制在复杂代理场景下的覆盖存在盲区。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-05** | 数据来源：github.com/openai/codex


## 今日速览

今日 Codex 仓库密集合并了一批由 `copyberry[bot]` 驱动的后台基础设施 PR，覆盖技能缓存、工具搜索、MCP 认证等领域。与此同时，社区讨论热度仍然集中在 **Windows 桌面的性能问题**（尤其 PowerShell/WMI 轮询导致的高 CPU 与系统输入延迟），以及 **Linux 桌面版** 的强烈呼声。值得注意的是，今日新增的 Issue #37009 揭示了自定义模型提供商在使用记忆写入功能时会收到硬编码的 `gpt-5.6-luna`/`gpt-5.6-terra` 请求，这可能是近期值得关注的兼容性隐患。


## 版本发布

近期发布了 4 个 Rust 版本，均为 alpha 迭代（`rust-v0.147.0-alpha.7`、`rust-v0.147.0-alpha.6.4`、`rust-v0.147.0-alpha.6.3`、`rust-v0.147.0-alpha.6.1`）。项目未附带详细变更日志，建议关注后续说明或相关 PR 动态。


## 社区热点 Issues

### 1. Linux 桌面版呼声持续高涨
**#11023** [OPEN] - Codex desktop app for Linux
- 作者：Suhaibinator | 更新：08-05 | 评论：199 | 👍：917
- 核心诉求：因 macOS 上存在严重影响体验的问题（#10432），用户希望在 Linux 桌面端使用 Codex，以获得更可控的功耗与稳定性。
- 重要性：这是当前点赞数最高的 Issue 之一，代表大量 Linux 用户的迫切需求，值得关注其后续规划。
- 链接：https://github.com/openai/codex/issues/11023

### 2. macOS 桌面版系统资源失控
**#25719** [OPEN] - Codex Desktop for macOS repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway
- 作者：energissimo-mg | 更新：08-05 | 评论：80 | 👍：387
- 核心问题：Codex Desktop 在 macOS 上反复触发 `syspolicyd` 与 `trustd` 进程的 CPU 和内存异常飙升，Plus 用户受影响明显。
- 重要性：资源失控直接导致系统卡顿，已获得大量认同；结合 #11023，可见桌面端性能问题已严重影响多平台用户体验。
- 链接：https://github.com/openai/codex/issues/25719

### 3. 社区强烈要求恢复 `/undo` 功能
**#9203** [OPEN] - Please make "/undo" back
- 作者：SunRunAway | 更新：08-05 | 评论：68 | 👍：372
- 核心诉求：TUI 中 `/undo` 曾被移除，但用户面临 Codex 误删未被 Git 跟踪文件、或误改未提交内容时无法回退的痛点。
- 重要性：372 个 👍 直接反映了该功能回归的强烈诉求。
- 链接：https://github.com/openai/codex/issues/9203

### 4. Windows 端 WMI/PowerShell 轮询引发的性能危机
**#36176** [OPEN] - [Windows Desktop] Full-process PowerShell/WMI polling remains in 26.721.4979.0 and contributes to system-wide input lag
- 作者：Sceleratis | 更新：08-05 | 评论：7
- 核心问题：尽管历经多版本，桌面版在 Windows 上仍持续执行全量进程轮询，导致系统级输入延迟，作者已在本地修补验证解决方案。
- 重要性：这是多个相关 Issues 的汇总帖（参见 #36025、#34158、#25453、#29499），说明该问题已成 Windows 用户的普遍痛点。
- 链接：https://github.com/openai/codex/issues/36176

### 5. Windows 端高并发进程泄漏
**#33776** [OPEN] - ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe processes, causing WMI storms and DWM degradation
- 作者：AnitaHailey0306 | 更新：08-05 | 评论：29 | 👍：26
- 核心问题：Codex Desktop 在 Windows 上导致 `taskkill.exe` 与 `conhost.exe` 进程数量暴涨（单次会话高达 287 个），引发 WMI 故障风暴与 DWM 性能退化。
- 重要性：进程泄漏问题与 WMI 轮询相互叠加，构成了 Windows 桌面端最严重的恶性循环之一。
- 链接：https://github.com/openai/codex/issues/33776

### 6. MCP 服务器进程泄漏
**#30408** [OPEN] - MCP server processes leak: per-thread processes never cleaned up (9+ GB RSS)
- 作者：kkkayye | 更新：08-04 | 评论：22
- 核心问题：app-server 为每个新线程生成一套全局 MCP 服务器进程，但线程归档/关闭后从不清理，导致内存无限增长（实测超过 9GB）。
- 重要性：MCP 作为 Codex 的重要扩展机制，其资源泄漏会直接影响长期运行场景的稳定性。
- 链接：https://github.com/openai/codex/issues/30408

### 7. MCP 工具发现但无法调用
**#19425** [OPEN] - Custom stdio MCP server discovered by /mcp but tools not exposed to Desktop threads
- 作者：arbenl | 更新：08-05 | 评论：28
- 核心问题：Desktop 能正常发现自定义 stdio MCP 服务器及其工具，但工具并未暴露给 Desktop 线程或 `tool_search`，疑似 app-server `0.124.0-alpha.2` 的回归。
- 重要性：MCP 生态的可用性是开发者关注焦点，此问题影响自定义服务器集成。
- 链接：https://github.com/openai/codex/issues/19425

### 8. 子代理无视模型与推理设置
**#28719** [OPEN] - Codex Desktop subagents ignore model and reasoning settings. CAN YOU FIX THIS AT LAST?
- 作者：Nickonomic | 更新：08-05 | 评论：5 | 👍：6
- 核心问题：Desktop 的子代理（subagent）不遵循用户指定的模型和推理设置，而是继承父线程配置。
- 重要性：标题已透露出用户的强烈不满，该问题直接影响多代理协作的实际效果。
- 链接：https://github.com/openai/codex/issues/28719

### 9. CLI 回归：会话恢复失败
**#31754** [OPEN] - Regression in codex-cli 0.143.0: Existing conversation fails with Unknown parameter: input[...].namespace
- 作者：1930609129 | 更新：08-05 | 评论：14 | 👍：8
- 核心问题：codex-cli 0.143.0 在恢复既有会话时抛出 `Unknown parameter: input[...].namespace` 错误，0.142.0 则正常。
- 重要性：版本回归影响日常使用效率，属于典型的“破坏性变更”。
- 链接：https://github.com/openai/codex/issues/31754

### 10. 记忆写入器向第三方模型发送硬编码请求
**#37009** [OPEN] - Memory writer sends hardcoded gpt-5.6-luna and gpt-5.6-terra requests to non-OpenAI model providers
- 作者：asdf8675309 | 创建：08-05 | 更新：08-05 | 评论：2
- 核心问题：codex-cli 0.145.0 在通过自定义 `model_provider`（非 OpenAI）调用时，记忆写入器仍会发送硬编码的 `gpt-5.6-luna` 与 `gpt-5.6-terra` 请求。
- 重要性：这是今日新增 Issue，可能影响众多依赖自定义模型网关的用户。
- 链接：https://github.com/openai/codex/issues/37009


## 重要 PR 进展

### 1. 工具搜索支持延迟加载的自定义工具
**#36998** [CLOSED] - Support deferred custom tools in tool search
- 功能：将顶层自由形式工具纳入工具搜索索引，并标记为延迟加载；搜索到的工具序列化为 Responses API `custom` 工具，发现后转换回可执行规格。
- 意义：显著增强工具搜索的灵活性与扩展性。
- 链接：https://github.com/openai/codex/pull/36998

### 2. 新增并发请求分发
**#36987** [CLOSED] - Add opt-in concurrent exec-server request dispatch
- 功能：新增 `--concurrent-requests <COUNT>` 参数，支持本地/远程 exec-server 并发处理请求，避免长任务阻塞健康检查。
- 意义：提升 exec-server 整体吞吐与稳定性。
- 链接：https://github.com/openai/codex/pull/36987

### 3. 支持分页线程的 `includeTurns` 读取
**#36993** [CLOSED] - Support `includeTurns` reads for paginated threads
- 功能：当线程历史以分页形式存储时，`thread/read` 的 `includeTurns: true` 可重建完整历史视图。
- 意义：保证分页存储场景下的 API 兼容性和功能完整性。
- 链接：https://github.com/openai/codex/pull/36993

### 4. 启用 Amazon Bedrock 远程压缩
**#36981** [CLOSED] - Enable remote compaction for Amazon Bedrock
- 功能：为 Bedrock 增加 v1-only 的远程压缩能力，手动/自动压缩均走 `/v1/responses/compact`。
- 意义：为 Bedrock 用户提供跨提供商的上下文压缩一致性。
- 链接：https://github.com/openai/codex/pull/36981

### 5. 插件安装时跳过符号链接
**#36967** [CLOSED] - Skip symlinks when installing plugins
- 功能：插件安装不再因符号链接而失败，改为忽略非文件/目录条目（包括符号链接的技能文件与可执行文件）。
- 意义：提升插件安装的健壮性与成功率。
- 链接：https://github.com/openai/codex/pull/36967

### 6. 保留外部会话导入时的工作目录
**#36964** [CLOSED] - Preserve working directories when importing external sessions
- 功能：修复 Cursor `empty-window` 项目导入时工作目录元数据缺失的问题，回退到 Cursor 项目父目录。
- 意义：改善从其他工具迁移会话的体验。
- 链接：https://github.com/openai/codex/pull/36964

### 7. 跳过共享捆绑技能缓存清理
**#36989** [CLOSED] - Preserve shared bundled skill caches
- 功能：禁用捆绑技能的服务不再删除共享缓存文件，避免影响其他进程。
- 意义：防止多进程环境下缓存互相破坏。
- 链接：https://github.com/openai/codex/pull/36989

### 8. 可配置 Token 预算上下文标识
**#36970** [CLOSED] - Make token budget context identity configurable
- 功能：新增 `features.token_budget.mode` 设置（`thread` 与 `name`），默认使用线程 ID，同时保留使用代理名称的兼容性。
- 意义：为不同场景提供更精准的上下文窗口管理。
- 链接：https://github.com/openai/codex/pull/36970

### 9. 支持禁用内置图片查看器
**#36966** [CLOSED] - Allow disabling the built-in image viewer
- 功能：新增 `features.view_image` 标志（默认开启），关闭后不再暴露原生 `view_image` 工具。
- 意义：为不需要图片查看功能的用户提供精简选项。
- 链接：https://github.com/openai/codex/pull/36966

### 10. 引入可注入的模型目录缓存
**#36992** [CLOSED] - Allow injecting model catalog caches
- 功能：新增异步 `ModelsCache` 契约，模型提供商与 `OpenAiModelsManager` 支持调用方注入缓存实现，默认保留文件缓存。
- 意义：为自定义模型提供商与性能优化提供扩展点。
- 链接：https://github.com/openai/codex/pull/36992


## 功能需求趋势

- **Linux 桌面版**：成为当前社区最强烈的功能诉求（#11023，👍 917），用户因 macOS 端性能和硬件问题而迫切希望官方支持 Linux。
- **`/undo` 功能回归**：用户强烈要求恢复 TUI 中的 `/undo` 命令（#9203，👍 372），以便在文件被误删或误改时快速回滚。
- **CLI 与 Desktop 会话打通**：希望 CLI 会话可作为一等公民出现在 Desktop 历史中，或提供明确的导入入口（#21079）。
- **Projects 侧栏排序**：提议为 Projects 侧栏增加按名称排序的选项（#27753），以提升项目多时的管理效率。
- **子代理设置继承修复**：要求子代理能独立设置模型与推理参数，而非继承父线程（#28719）。


## 开发者关注点

- **Windows 桌面性能问题成为最大痛点**：高频 PowerShell/WMI 进程轮询导致的高 CPU、输入延迟、WMI Provider Host 饱和等问题形成了多个高讨论度 Issues（#36176、#33776、#36025、#34158、#25453、#29499、#22912、#32562），Windows 用户反馈尤为密集，亟需官方优先处理。
- **macOS 资源失控**：`syspolicyd`/`trustd` 进程的 CPU 与内存异常（#25719）在 macOS 端影响显著，与 Windows 端问题共同构成了桌面版的“性能双煞”。
- **MCP 生态稳定性**：进程泄漏（#30408）、工具暴露失败（#19425）、线程生命周期管理等问题集中出现，表明 MCP 功能虽在快速迭代，但稳定性仍是短板。
- **自定义模型提供商兼容性**：自 0.145.0 起记忆写入器向非 OpenAI 服务发送硬编码模型请求（#37009），引发对多提供商支持策略的担忧。
- **版本回归与质量把控**：codex-cli 0.143.0 会话恢复失败（#31754）、0.145.0 Windows 沙箱测试确定性超时（#34889）等问题频现，开发者在版本升级上趋于谨慎。
- **CLI 会话恢复与稳定性**：`Unknown parameter` 回归（#31754）与现有会话失败问题直接影响日常体验，修复优先级应提高。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-05**


## 今日速览

今日无新版本发布，社区动态主要集中在存量 Issue 与 PR 的讨论与推进上。值得关注的是，安全修复成为当前 PR 的核心焦点，包括一项标记为 **P1 优先级**的 SSRF 漏洞修复和一项针对 GHSA 公告的变量扩展绕过补丁。此外，社区近期持续反馈的**粘贴大文本导致 UI 卡死**、**WSL2 环境下执行 Windows 二进制文件挂起**以及 **429 限流导致 Agent 静默挂起**等问题，今日仍保持较高讨论热度，是影响用户体验的主要痛点。


## 社区热点 Issues

### 1. 环境兼容性与稳定性问题集中爆发
- **#12657** [CLOSED] [P1] [Breaking Change] VS Code 扩展 v2.56 → v2.57 因 glibc 版本导致无法连接服务，影响面较大（👍20，评论75）。 https://github.com/google-gemini/gemini-cli/issues/12657
- **#25805** [CLOSED] [P1] [回归] WSL2 环境中通过 PTY 执行 Windows 二进制文件（如 pwsh.exe）导致死锁/挂起，为 #15233 的回归。 https://github.com/google-gemini/gemini-cli/issues/25805
- **#27355** [CLOSED] [P2] WSL 环境下执行 Windows 可执行文件时，Shell 执行挂起或丢失输出。 https://github.com/google-gemini/gemini-cli/issues/27355
- **#26331** [CLOSED] 在 Termux (Android) 上验证 Pro 账户时提示 `Unsupported platform: android`。 https://github.com/google-gemini/gemini-cli/issues/26331

### 2. 输入交互缺陷频发
- **#20293** [CLOSED] 粘贴长文本/多行提示时，输入被提前拆分执行（v0.30.0）。 https://github.com/google-gemini/gemini-cli/issues/20293
- **#25998** [CLOSED] [P1] 粘贴约 5KiB 文本导致 UI 挂起，根因定位在 `KeypressContext.tsx` 的逐字符处理。 https://github.com/google-gemini/gemini-cli/issues/25998
- **#26114** [CLOSED] [P1] [Windows/WSL2] 大文本粘贴导致在按 Enter 前提前执行换行（v0.39.1）。 https://github.com/google-gemini/gemini-cli/issues/26114

### 3. 订阅用户遭遇限流与性能困境
- **#23362** [CLOSED] Google Pro 账户频繁触发 429 `MODEL_CAPACITY_EXHAUSTED`，而 API Key 登录则无此问题（👍6）。 https://github.com/google-gemini/gemini-cli/issues/23362
- **#24216** [CLOSED] Ultra 订阅用户（$200/月）连续 5 天无法使用 CLI，质疑限流策略（👍11）。 https://github.com/google-gemini/gemini-cli/issues/24216
- **#25736** [CLOSED] [P1] 严重：Agent 在遇到 429 限流时进入长达 1 小时的静默“Thinking”状态，无任何错误提示或退避逻辑。 https://github.com/google-gemini/gemini-cli/issues/25736


## 重要 PR 进展

### 1. 安全修复（当前最高优先级）
- **#28557** [OPEN] [P1] 修复 `web-fetch.ts` 中的 SSRF 漏洞：使用异步 DNS 解析替代同步检查，拦截解析到内网地址（如 169.254.169.254）的主机名。 https://github.com/google-gemini/gemini-cli/pull/28557
- **#28691** [OPEN] [P1] 修复 GHSA-wpqr-6v78-jr5g 中 `$VAR` 与 `${VAR}` 变量扩展绕过检测的问题，并强化相关 CI 工作流。 https://github.com/google-gemini/gemini-cli/pull/28691

### 2. 稳定性与健壮性改进
- **#28689** [OPEN] 增强 `gaxios` 流式请求的错误处理，支持从嵌套的 `error.cause.message` 中解析结构化的速率限制或容量耗尽错误。 https://github.com/google-gemini/gemini-cli/pull/28689
- **#28639** [OPEN] [P1] 修复 `formatTruncatedToolOutput` 在 `maxChars` 非正数时的行为，避免因 `slice` 负索引导致输出异常膨胀。 https://github.com/google-gemini/gemini-cli/pull/28639
- **#28672** [OPEN] 修复两个独立缺陷：`/compress` 命令失败及会话重载错误；以及命中配额限制后导致工具响应丢失的问题。 https://github.com/google-gemini/gemini-cli/pull/28672
- **#28671** [OPEN] 解决上下文损坏问题：当工具执行被中断（例如遭遇配额回退）时，模型“自动补全”前缀行为异常。 https://github.com/google-gemini/gemini-cli/pull/28671

### 3. 功能增强与平台扩展
- **#28681** [OPEN] [P1] 新增对 SGLang 及其他本地 OpenAI 兼容端点的支持，扩展本地模型接入能力。 https://github.com/google-gemini/gemini-cli/pull/28681
- **#28566** [CLOSED] 将 `InvalidStreamError` 的详细信息（类型与消息）从核心层传递至 UI，以便在遇到空响应时提供更具体的处理建议（如引导用户使用 `/compress`）。 https://github.com/google-gemini/gemini-cli/pull/28566

### 4. 工具链与配置优化
- **#28641** [OPEN] [P2] 修复 `InputPrompt.tsx` 中在窄终端宽度（如 CJK/emoji 宽字符）下 `getGhostTextLines` 可能出现的无限循环问题。 https://github.com/google-gemini/gemini-cli/pull/28641
- **#28597** [OPEN] 修复设置加载阶段的竞态条件：确保在解析设置占位符之前加载环境变量。 https://github.com/google-gemini/gemini-cli/pull/28597


## 功能需求趋势

1. **WSL2 与跨平台兼容性**：WSL2 作为 Windows 下主要 Linux 环境，其 PTY 与进程执行问题已成为高频 P1 缺陷，社区对跨 OS 二进制互操作的需求强烈。
2. **本地与第三方模型支持**：社区对非 Google 模型（如 SGLang）和本地 OpenAI 兼容端点的接入呼声渐高，反映开发者对模型选择灵活性的需求。
3. **IDE 集成稳定性**：VS Code 扩展的兼容性问题（如 glibc 依赖）引发广泛讨论，集成环境的稳定性备受关注。
4. **遥测与可观测性增强**：有 PR 提议为工具调用遥测添加技能名称维度，表明社区对 fine-grained 监控的需求。
5. **自动化工作流**：Caretaker Agent 的 triage 评估框架与 issue 评论处理工作流持续演进，自动化仓库维护仍是热点方向。


## 开发者关注点

- **粘贴输入体验糟糕**：长文本粘贴导致的卡顿、提前执行问题反馈集中，涉及多个版本，输入处理机制亟需重构。
- **限流策略不透明**：付费订阅用户（Ultra）遭遇长时间不可用，错误提示不明确，退避逻辑缺失，严重损害用户体验与信任。
- **WSL2 执行 Windows 程序挂起**：这是一个长期痛点，且存在回归问题，影响混合环境下的自动化流程。
- **内存/上下文管理**：”会话压缩失败”与”配额回退导致上下文损坏”等问题持续出现，开发者对智能上下文管理与恢复机制的稳定性与可靠性需求迫切。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-05**


## 今日速览

- Copilot CLI 发布 v1.0.79-1 补丁版本，将 `allowDevToolCaches` 沙箱设置重命名为 `allowDevToolAccess`，并扩大其授权范围至开发工具配置与注册表。
- 社区对自定义主题（#1504）和组织级 Agent 支持（#1285）的讨论持续升温，二者为当前人气最高的开放议题。
- 昨日新增多起 `triage` 级问题与安全修复 PR，其中 MCP 初始化兼容性（#4370）与 `server/discover` 方法处理引发关注。


## 版本发布

### v1.0.79-1（2026-08-04）
- **破坏性变更**：沙箱设置 `allowDevToolCaches` 更名为 `allowDevToolAccess`。新设置除缓存外，同时授予开发工具配置与注册表的访问权限。
- **迁移须知**：旧键名不再被读取且被静默忽略。若您此前显式设置为 `false`（选择退出），升级后将恢复为默认值（启用），需手动重命名为新键名。


## 社区热点 Issues（Top 10）

1. **[#1504] 自定义主题支持**（👍 23 · 评论 8 · 开放中）
   用户希望能通过 `/theme` 创建并分享自定义主题（如 JSON 文件），当前仅支持内置基础主题。该需求已持续近半年，社区诉求明确。
   https://github.com/github/copilot-cli/issues/1504

2. **[#1697] 会话分叉：将对话分支为并行会话并共享上下文**（👍 25 · 评论 3 · 开放中）
   多步骤任务中常出现两个独立子问题，用户希望在不丢失上下文前提下分叉会话并行处理。获得高赞，显示复杂工作流需求强烈。
   https://github.com/github/copilot-cli/issues/1697

3. **[#1285] 组织级 Agent 不显示**（👍 9 · 评论 7 · 开放中）
   用户将 Agent 放入 `{org}/.github-private` 仓库后，CLI 与 VS Code 均无法识别。影响企业用户的自定义 Agent 分发。
   https://github.com/github/copilot-cli/issues/1285

4. **[#4328] WSL2 下 Ctrl+H 被误判为 Ctrl+Backspace**（评论 5 · 开放中）
   由于 Windows Terminal 的 `WT_SESSION` 环境变量泄漏，WSL2 中 `Ctrl+H` 会删除整个单词而非前一个字符。新近上报，影响 WSL2 用户日常编辑。
   https://github.com/github/copilot-cli/issues/4328

5. **[#2692] Web Search 工具 MCP 错误**（评论 6 · 已关闭）
   `github-mcp-server` 在执行 Web Search 时出现 Streamable HTTP 错误，社区已提供复现路径。虽已关闭，但搜索类 MCP 工具稳定性值得留意。
   https://github.com/github/copilot-cli/issues/2692

6. **[#4370] v1.0.79-1 MCP 初始化失败（`server/discover` 返回 `-32602`）**（新上报 · 开放中）
   CLI 在 MCP 初始化阶段发送 `server/discover` 请求，FastMCP 等框架未实现该方法而返回参数错误，被 CLI 视为致命错误。影响 FastMCP 用户升级。
   https://github.com/github/copilot-cli/issues/4370

7. **[#4005] 无法保存 Memories：提示 "billing entity isn't selected"**（评论 4 · 开放中）
   企业版用户反馈无法保存记忆，其余功能正常，此前可正常使用。企业环境配置兼容性问题。
   https://github.com/github/copilot-cli/issues/4005

8. **[#4202] 内置 `view` 工具报 "Path does not exist"**（评论 4 · 开放中）
   v1.0.73 中 `view` 工具对已存在文件误报路径不存在，v1.0.71 正常。确定为 v1.0.72 引入的回归问题。
   https://github.com/github/copilot-cli/issues/4202

9. **[#1947] 云端同步会话：跨设备连续性**（👍 6 · 评论 4 · 已关闭）
   会话仅存储本地 `~/.copilot/`，缺乏多设备同步。该需求已关闭但代表了一批用户的长期诉求。
   https://github.com/github/copilot-cli/issues/1947

10. **[#2019] 删除会话的命令**（👍 13 · 评论 2 · 已关闭）
    用户希望提供命令清理 `/resume` 历史中不需要的会话记录，涉及磁盘数据管理。
    https://github.com/github/copilot-cli/issues/2019


## 重要 PR 进展

说明：过去 24 小时内活跃 PR 共 2 条，以下为全部条目。另列出近期相关 PR 供参考。

1. **[#4366] [安全] copilot-cli 基础安全发现修复**（开放中）
   由 Vault ChatOps 机器人创建，要求解决 `ci, production` 环境中的 Fundamentals 安全发现。需人工审核并替换 `<UPDATE_ME>` 占位值后合并。
   https://github.com/github/copilot-cli/pull/4366

2. **[#4355] Merge**（开放中）
   提交信息为空，暂无法判断内容。
   https://github.com/github/copilot-cli/pull/4355


## 功能需求趋势

从近 24 小时活跃的 Issues 中可提炼出以下社区核心诉求：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **自定义主题/UI 可访问性** | #1504（自定义主题）、#3898（OSC 11 黑字深底） | 持续发酵 |
| **会话管理增强** | #1697（会话分叉）、#1947（云端同步）、#2019（删除会话） | 多 Issue 共振 |
| **企业/组织级支持** | #1285（组织级 Agent）、#4005（企业 billing 实体） | 企业用户痛点 |
| **MCP 兼容性与稳定性** | #4370（FastMCP 初始化失败）、#2692（搜索工具报错）、#4349（MCP 策略误判） | 新版本引入回归 |
| **BYOK / 自定义模型** | #4139（BYOK LLM）、#4196（BYOK 流式 reasoning_content） | 持续高关注 |
| **终端兼容性** | #4328（WSL2 Ctrl+H）、#4352（禁用 OSC 9;4 进度条） | Windows/终端细分场景 |


## 开发者关注点

- **Windows / WSL2 体验是重灾区**：除 #4328 的按键误判外，#4267（zellij 下输入框预填 DA1 转义序列）与 #4026（Windows 原生运行时反复崩溃，自 5 月未解决）均在活跃讨论中。终端兼容性是 Windows 用户的核心痛点。
- **版本升级的破坏性变更需更清晰提示**：v1.0.79-1 对沙箱设置的重命名是静默的——旧键被忽略且不告警，已有 `false` 退出选项的用户会在不知情下恢复默认。社区期望更友好的迁移指引。
- **MCP 生态兼容性是当前最大风险点**：`server/discover` 方法并非所有 MCP 框架的标配，CLI 将其视为必需握手会导致 FastMCP 等服务器直接不可用。建议考虑容错降级策略。
- **内置工具回归（#4202）影响自动化工作流**：`view` 工具对已有文件误报不存在的回归问题，对依赖非交互模式（`--non-interactive`）的自动化场景有实际影响，值得优先修复。
- **安全合规自动化信号**：#4366 安全 PR 由机器人自动创建并标记 "ACTION REQUIRED"，这表明项目已接入 Secrets 扫描与合规流水线，对大型企业用户是积极信号。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-05

## 今日速览

今日社区动态聚焦于**长会话可靠性**与**跨设备协作**两大痛点：有用户在 ~500K token 上下文填充时观测到 Agent 行为退化（循环动作、指令漂移），引发对高负载场景稳定性讨论；同时，点赞量最高的远程控制功能请求（👍24）和记忆系统提案（Memory System）周五仍在发酵。此外，ACP（Agent Client Protocol）相关的能力增强（模型发现、权限模式切换）也有实质性 PR 在推进，值得关注。

---

## 社区热点 Issues（Top 10）

### 1. [feature] 远程控制 — 从任意设备继续本地会话（适合跨端工作流）
- **#1282** | 作者：CatKang | 👍 24 | 💬 12 | 更新：08-04
- 用户希望能在手机/平板上远程接管本地已开启的 Kimi CLI 会话，实现无缝的跨设备代码审查与指令续写。
- 📌 这是目前社区热度最高的功能请求，讨论活跃，说明开发者对“远程办公/跨设备衔接”需求强烈。
- **链接**：[#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

---

### 2. [enhancement] 记忆系统 — 跨会话持久化上下文
- **#1283** | 作者：CatKang | 👍 0 | 💬 17 | 更新：08-04
- 提议实现“自动记忆+手动记忆”双层机制，让 CLI 能记住项目模式、用户偏好，并在新会话中自动加载，减少重复指令。
- 📌 讨论量高，值得关注——社区对“个性化长期记忆”的渴望明显，但方案可行性仍在热议中。
- **链接**：[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

---

### 3. [bug] 高上下文填充（~500K token）时 Agent 可靠性急剧下降
- **#2586** | 作者：GrokBuildMJW | 👍 0 | 💬 1 | 状态：已关闭 | 更新：08-05
- 用户在多步骤长会话中发现，当 context fill 超过约 500K tokens（非官方限制）后，Agent 陷入重复动作循环、失去升级机制、指令理解漂移。
- 📌 这是今天最值得警惕的稳定性反馈，虽已关闭，但可能暗示官方需要重新审视高负载下的调度策略。
- **链接**：[#2586](https://github.com/MoonshotAI/kimi-cli/issues/2586)

---

### 4. [bug] Windows 下 Thai/IME 字符输入重复
- **#2584** | 作者：mgprona | 👍 0 | 💬 0 | 更新：08-04
- 在 Windows 11 上使用泰文输入法（IME）时，提示符中字符被重复显示，影响非英语用户输入体验。
- 📌 国际键盘适配问题反馈，虽冷门但影响特定地区用户日常使用。
- **链接**：[#2584](https://github.com/MoonshotAI/kimi-cli/issues/2584)

---

### 5. [feature] ACP 模型发现与中途切换支持
- **#2583** | 作者：tizerluo | 👍 0 | 💬 0 | 更新：08-04
- 当通过 ACP 客户端（如 Happy Coder 移动端、Zed）驱动 `kimi acp` 时，无法查看可用模型列表，也无法中途切换模型。
- 📌 移动端 ACP 使用场景的关键补强，有助于提升跨平台体验。
- **链接**：[#2583](https://github.com/MoonshotAI/kimi-cli/issues/2583)

---

### 6. [bug] 正常推进会话时 Kimi CLI 异常退出
- **#2587** | 作者：Sdongmaker | 👍 0 | 💬 0 | 更新：08-05
- 在 Windows 上使用 K3 High 模型时，普通会话推进过程中程序无故退出（v0.29.2）。
- 📌 稳定性 Bug，影响 Windows 用户日常开发，期待官方尽快排查。
- **链接**：[#2587](https://github.com/MoonshotAI/kimi-cli/issues/2587)

---

### 7. [PR] 长命令超时自适应优化
- **#2200** | 作者：he-yufeng | 👍 0 | 💬 0（评论数未显示） | 更新：08-04
- 为 git submodule、clone、fetch、包安装、构建等耗时命令自动扩展 shell 超时（默认 60s），同时保留调用方设定的更大超时值。
- 📌 针对大仓操作经常超时的问题，提升长任务稳定性。
- **链接**：[#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)

---

### 8. [PR] 为子进程设置 `AI_AGENT=kimi` 环境变量
- **#2585** | 作者：complynx | 👍 0 | 💬 0（评论数未显示） | 更新：08-04
- 从 pip/uv 或独立二进制入口启动的子进程将统一暴露 `AI_AGENT=kimi` 标记，便于包装器/编排器识别调用来源。
- 📌 统一环境变量标记，利于集成场景下外部工具识别与行为适配。
- **链接**：[#2585](https://github.com/MoonshotAI/kimi-cli/pull/2585)

---

### 9. [PR] ACP 权限模式切换支持
- **#2364** | 作者：huntharo | 👍 0 | 💬 0（评论数未显示） | 更新：08-04
- 在 ACP 协议层新增权限模式切换功能，并会广告 `default` 等模式选项，方便客户端按需授权。
- 📌 推进 ACP 标准化互操作能力，增强外部客户端的可控性。
- **链接**：[#2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)

---

### 10. [bug] 会话高并发下的性能瓶颈
- **#1283（关联）** — 尽管是 Feature，但其讨论中涉及大量性能与记忆优化的方案论证，可视为社区对长期运行场景的综合关注。
- 📌 反映用户对 CLI 在复杂项目中的稳定性和记忆能力的双重期待。

---

## 重要 PR 进展（Top 3）

| PR | 说明 | 状态 | 更新 |
|----|------|------|------|
| [#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) — `fix(shell): adapt timeouts for long commands` | 为慢命令自动扩展超时，避免 git/package 安装等操作超时失败 | OPEN | 08-04 |
| [#2585](https://github.com/MoonshotAI/kimi-cli/pull/2585) — `feat(cli): set AI_AGENT for subprocesses` | 统一子进程环境变量标记，便于外部编排器识别 | OPEN | 08-04 |
| [#2364](https://github.com/MoonshotAI/kimi-cli/pull/2364) — `feat(acp): support permission mode switching` | ACP 协议层新增权限模式切换，支持客户端动态授权 | OPEN | 08-04 |

---

## 功能需求趋势

1. **持久化上下文与记忆系统** — #1283 记忆系统提案获得 17 条讨论，说明用户希望 CLI 能记住项目习惯，减少重复指令。
2. **跨设备远程控制** — #1282 是目前点赞最多的功能请求（24👍），远程衔接本地会话的需求旺盛。
3. **ACP 生态扩展** — 模型发现、权限切换、AI_AGENT 标记等 PR/Issue 集中出现，表明社区正积极推动 ACP 标准化，以适配移动端及第三方客户端。
4. **长会话稳定性与超时优化** — 高 context fill 下的退化问题，以及超时自适应修复，指向大型仓库/长任务场景的可靠性已成为明显痛点。

---

## 开发者关注点

- **高上下文压力下的行为稳定性**：~500K token 时的循环动作与指令漂移，是今天最尖锐的反馈，可能影响复杂任务的可信度。
- **Windows 平台兼容性**：IME 输入重复、异常退出等 Windows 专属问题反复出现，建议开发者反馈时附带完整环境信息。
- **可插拔/标准化接口**：ACP 相关能力增强（模型发现、权限切换、环境变量标记）反映社区对“可集成、可编排”的诉求，是未来扩展的重要方向。

---

> 本文档生成于 2026-08-05，基于 GitHub 公开数据整理。个别评论数/点赞数缺失时以“未显示”标注。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-05

## 今日速览

今日发布 v1.18.13 补丁版本，主要修复 TUI 的 GitHub PR 评论上下文缺失问题及 Desktop 端 RTL（从右到左）布局缺陷。社区最热议题集中在 DeepSeek V4 Flash 模型在 OpenCode Go 订阅中的可用性异常（403/挂起/模型版本不匹配），以及 OpenAI Go 服务 SSE 流不完整、客户端挂起等稳定性问题。此外，`run --format json` 事件缺少模型归属信息、生成式 AI 输出管线不完整等工程化请求热度上升。

## 版本发布

### v1.18.13
- **TUI 修复**：GitHub pull request 评论现包含 PR 编号和 URL 上下文。
- **Desktop 修复**：修复标签页、抽屉、缩放及标题栏交互中的多处 RTL 布局问题；统一修复共享 RTL UI 行为（如方向性图标）。

## 社区热点 Issues

1. **[FEATURE]: Add Go plan usage/balance API endpoint** (👍126, 💬29) — [链接](https://github.com/anomalyco/opencode/issues/16017)
   呼声最高的功能请求：公开 Go 订阅计划的用量/余额 API（滚动/周/月窗口）。Dashboard 已有该数据但无 API 可编程访问，对构建自动化工具和成本监控的开发者至关重要。

2. **[OPEN] DeepSeek V4 Flash suddenly requires "Enable models hosted in China"** (👍22, 💬15) — [链接](https://github.com/anomalyco/opencode/issues/39845)
   会话中途突然停止工作，提示需打开“托管在中国模型”的显式开关。对 Go 订阅用户造成直接破坏性体验，且出现在无任何插件、标准配置的场景。

3. **[FEATURE]: Respect disable-model-invocation: true in SKILL.md frontmatter** (👍48, 💬9) — [链接](https://github.com/anomalyco/opencode/issues/34498)
   支持在 SKILL.md frontmatter 中声明禁用模型调用。Claude Code 和 Cursor 已支持此字段，用于控制技能文件是否触发新模型回合，影响技能封装能力和成本控制。

4. **[FEATURE]: automatically use different models based on task type** (👍44, 💬10) — [链接](https://github.com/anomalyco/opencode/issues/8456)
   期望按任务类型自动路由模型（如编码、重构、文档）。主流 agentic 工具已支持可配置模型选择，该请求持续获得大量支持。

5. **[BUG] deepseek-v4-flash via opencode-go returns 403/hangs** (👍6, 💬6) — [链接](https://github.com/anomalyco/opencode/issues/40485)
   Windows 11 上，deepseek-v4-flash 通过 opencode-go 返回 403 或卡死，而同 key 下 deepseek-v4-pro 和 minimax-m3 正常。指向模型路由层面的问题，影响面较大。

6. **[BUG] deepseek-v4-flash is NOT serving DeepSeek V4 Flash 0731** (💬5) — [链接](https://github.com/anomalyco/opencode/issues/40409)
   实测返回的是 V3.2（知识截止 2025-05），而非 V4 Flash 0731 版本。涉及计费与模型质量不匹配的髙危问题。

7. **[BUG] Go service /v1/responses emits incomplete SSE event stream** (👍2, 💬4) — [链接](https://github.com/anomalyco/opencode/issues/40171)
   非流式请求正常，但流式响应缺失 `response.output_item.added` 和 `response.content_part.added` 事件，破坏 Codex 风格客户端兼容性。

8. **[BUG] Context Awareness in VSCode doesn't take effect** (👍7, 💬12) — [链接](https://github.com/anomalyco/opencode/issues/22235)
   VSCode 中“上下文感知”功能（选中文本/文件自动附加）从未生效。使用者普遍困惑于是否需要额外配置。

9. **[BUG] opencode run intermittently hangs during init** (👍1, 💬4) — [链接](https://github.com/anomalyco/opencode/issues/38723)
   初始化阶段间歇性挂起，不创建会话、无输出、无报错，观测到约 56% 失败率。只能靠外部超时中断，对 CI/CD 场景影响严重。

10. **[BUG] Web interface does not auto-refresh conversations in real-time** (💬4) — [链接](https://github.com/anomalyco/opencode/issues/40502)
    Web 界面新消息不实时刷新，必须手动刷新页面才能看到。

## 重要 PR 进展

1. **[OPEN] feat(session): support Gemini image generation** — [链接](https://github.com/anomalyco/opencode/pull/40126)
   支持 Gemini 生成图像的内联数据输出，补全多模态能力。

2. **[CLOSED] fix(opencode): include cache writes in ACP usage** — [链接](https://github.com/anomalyco/opencode/pull/40450)
   在 ACP 上下文用量中加入缓存写入 token 统计，统一两条服务路径的计算逻辑并添加回归测试。

3. **[CLOSED] fix(llm): parse cache_creation_tokens from OpenAI-compat usage** — [链接](https://github.com/anomalyco/opencode/pull/40541)
   修复 OpenAI 兼容协议下 `cache_creation_tokens` 未被解析、`cacheWriteInputTokens` 恒为 0 的问题，对 LiteLLM 等代理场景很重要。

4. **[CLOSED] fix(opencode): make xAI OAuth device-only** — [链接](https://github.com/anomalyco/opencode/pull/40537)
   xAI OAuth 改为 RFC 8628 设备流，移除 loopback 服务器、PKCE、CORS 和回调代码，同时支持本地和远程环境并保留 `referrer=opencode` 归属。

5. **[OPEN] fix(core): unify patch path resolution** — [链接](https://github.com/anomalyco/opencode/pull/40558)
   统一 patch 路径解析与 edit/write 行为，采用同一 `LocationMutation` 契约，涵盖 Location-relative 边界、symlink 和缺失祖先目录等场景。

6. **[OPEN] fix(opencode): add model attribution to run --format json step events** — [链接](https://github.com/anomalyco/opencode/pull/40545)
   修复 `run --format json` 的 step 事件不携带模型信息的缺陷，使 headless 消费者能够归属 token 与成本。

7. **[CLOSED] fix(app): prevent Solid cleanNode crash on session switch** — [链接](https://github.com/anomalyco/opencode/pull/37832)
   修复 Desktop 应用切换会话时的崩溃/冻结问题（`Cannot read properties of undefined`）。

8. **[OPEN] fix(core): retire legacy provider aliases** — [链接](https://github.com/anomalyco/opencode/pull/40487)
   移除 Azure Cognitive Services 和 Google Vertex Anthropic 的独立注册，迁移遗留 provider ID 至 V2 配置体系，防止原生 V2 provider 重新创建废弃别名。

9. **[OPEN] fix(core): avoid eager directory snapshots** — [链接](https://github.com/anomalyco/opencode/pull/40552)
   避免 ripgrep 索引期间重复重建目录快照，大仓库仅在需要目录/混合文件搜索时才承担物化成本，显著提升性能。

10. **[CLOSED] fix(ai): restore Responses tool input semantics** — [链接](https://github.com/anomalyco/opencode/pull/40553)
    恢复 malformed Responses 函数调用作为 `tool-calls` 完成边界，保留 `tool-input-error` 作为非可执行结果，移除了错误的解析器级错误分类。

## 功能需求趋势

- **用量/余额 API 暴露**：Go 订阅用户强烈要求公开 usage/balance API，支持滚动/周/月窗口的编程访问。
- **模型按需路由**：按任务类型自动选择不同模型，用户希望更精细的模型管理。
- **生成式 AI 输出完整性**：图像生成、内联数据等输出管线的完整支持（Gemini、多模态模型）。
- **成本与归属透明度**：`run --format json` 等编程接口需要模型归属、缓存 token 统计等可审计数据。
- **模型可用性策略**：SKILL.md frontmatter 支持 `disable-model-invocation`，为技能封装增加控制力。
- **xAI/模型提供商 OAuth 优化**：设备流认证适配远程环境，移除本地回调依赖。
- **桌面端稳定性**：RTL 布局、会话切换崩溃、provider/model 加载失败（v1.18.5–v1.18.13 回归）等问题修复。
- **Web 实时性**：Web 界面消息推送、自动刷新能力。

## 开发者关注点

- **DeepSeek V4 Flash 稳定性**：10 个热点 Issue 中有 4 个与 DeepSeek V4 Flash 相关（403、挂起、模型版本不匹配、中国区托管警告），是当前最集中的痛点。
- **SSE/流式协议兼容性**：Go 服务 `/v1/responses` 流不完整影响 Codex 客户端，流式事件契约需要严格遵循 OpenAI 规范。
- **初始化挂起无诊断**：`opencode run` 偶发卡死无日志无报错，开发者需要更好的可观测性和超时机制。
- **VSCode 集成上下文感知**：选中文本自动附加功能在 VSCode 中始终无效，削弱 IDE 深度集成体验。
- **多语言/地区反馈涌入**：西语、葡语、中文使用者集中报告“聊天无响应/挂起”类问题，可能指向免费模型端点的容量或限流问题。
- **版本回归敏感**：v1.18.5–v1.18.13 在 Desktop provider/model/MCP 加载失败问题上被评为回归版本，用户多停留在 v1.18.4。
- **Flatpak/发行方式适配**：Flatpak 打包后的自动更新机制需适配 FLATPAK_ID 和 UpdateMonitor portal 等平台约定。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-05

## 今日速览

昨日社区焦点集中在 **Copilot Enterprise 环境下的 Compaction 功能故障**，多个 Issue 和 PR 围绕此问题展开，疑似与 baseUrl 解析和认证请求头处理有关。此外，**Windows 平台适配**（路径分隔符、技能加载、SQLite 模块缺失）和 **TUI 交互细节**（滚动跳变、快捷键冲突）也是高频反馈点。值得关注的是，**Mermaid 图表渲染**、**可配置压缩模型**等新功能提案获得了积极跟进，相关 PR 已提交。

---

## 社区热点 Issues（Top 10）

**1. Compaction 在 Copilot Enterprise 下失败，报 421 错误**
[#6768](https://github.com/earendil-works/pi/issues/6768) — `[CLOSED]`
作者：MojangPlsFix | 评论 19 | 👍 18
社区反馈最强烈的问题：使用 Copilot Enterprise 许可证执行上下文压缩时，OpenAI 和 Anthropic 模型均报 `421 Misdirected Request`。多个用户确认复现，且 [#7579](https://github.com/earendil-works/pi/issues/7579) 进一步指出根因可能在于压缩流程丢了解析后的 baseUrl。属于企业级用户的阻塞性问题。

**2. Windows 平台使用问题收集帖**
[#7547](https://github.com/earendil-works/pi/issues/7547) — `[OPEN]`（置顶）
作者：petrroll | 评论 13
维护者主动发起的讨论帖，旨在收集 Windows 上各种运行方式（WSL、原生、MSYS2 等）遇到的问题。评论反映了 Windows 生态碎片化带来的支持成本，是社区维护方向的信号。

**3. Anthropic 消息路径未发送客户端请求 ID**
[#7161](https://github.com/earendil-works/pi/issues/7161) — `[CLOSED]`
作者：mteam88 | 评论 10
技术深度较高的 bug：`anthropic-messages` 路径未发送 `x-client-request-id`，导致网关无法将会话关联到同一后端（如 CliProxyAPI 轮询多个 Claude 账号时，会话亲和性失效，模型上下文断裂）。对使用中间网关的开发者有实际影响。

**4. 终端无故滚动到顶部**
[#5023](https://github.com/earendil-works/pi/issues/5023) — `[CLOSED]`
作者：markokocic | 评论 11
老问题久未解决，用户反馈模型输出过程中终端会随机跳转并快速滚动。涉及渲染层与增量更新逻辑，使用 TUI 模式的用户受影响明显。

**5. iTerm2 内联图片缺少 size 参数，导致 xterm.js 渲染失败**
[#7465](https://github.com/earendil-works/pi/issues/7465) — `[OPEN]`
作者：Trolann | 评论 7
`encodeITerm2()` 输出的 OSC 1337 序列缺少 `size=<字节数>` 参数，导致 `@xterm/addon-image@0.9.0` 静默拒绝渲染图片。已有关联 PR [#7612](https://github.com/earendil-works/pi/pull/7612) 修复，值得关注合入进度。

**6. 压缩时无法独立配置思考级别**
[#7553](https://github.com/earendil-works/pi/issues/7553) — `[OPEN]`
作者：Saolence | 评论 6
压缩（自动/手动）强制复用当前会话的思考级别，推理模型下自动压缩会消耗大量思考预算。已有 PR [#7602](https://github.com/earendil-works/pi/pull/7602) 提出支持可配置模型与思考级别。

**7. `find` 工具在 Windows 下无法处理路径模式**
[#6817](https://github.com/earendil-works/pi/issues/6817) — `[OPEN]`
作者：Hotragn | 评论 5
含路径分隔符的模式（如 `src/**/*.ts`）在 Windows 上返回空结果，纯文件名模式正常。问题定位到 `find.ts` 未对 Windows 路径做归一化。开发者迁移到 Windows 后的高频踩坑点。

**8. OAuth Token 刷新无超时，卡死会话约 5 分钟**
[#7508](https://github.com/earendil-works/pi/issues/7508) — `[CLOSED]`
作者：alexzhu0 | 评论 5
网络不稳定时，GitHub Copilot / Codex 的 Token 刷新无请求超时，且在跨进程凭据锁下串行执行，最终导致整个会话冻结约 5 分钟。对弱网用户影响严重，根因在生产依赖上。

**9. JSON 模式下累积输出呈平方级增长**
[#7395](https://github.com/earendil-works/pi/issues/7395) — `[OPEN]`
作者：notanobject | 评论 3
性能问题：JSON 模式每次增量更新都序列化完整累积消息，导致输出随对话长度呈平方级膨胀，输出管道堵塞明显。对自动化调用和长会话影响较大。

**10. 发布包中缺少 `node:sqlite` 内置模块**
[#7594](https://github.com/earendil-works/pi/issues/7594) — `[CLOSED]`
作者：icedream | 评论 4
使用 `node:sqlite` 的插件（如 `pi-total-recall`）在发布二进制中加载失败。发布构建与本地开发环境的 Node 版本行为不一致，属打包配置缺陷。

---

## 重要 PR 进展（Top 10）

**1. 添加可配置压缩/摘要模型与思考级别**
[#7602](https://github.com/earendil-works/pi/pull/7602) — `[OPEN]`
作者：haoqixu
实现压缩和分支摘要的独立模型与思考级别配置，并处理压缩时上下文窗口限制的报错。直接修复 #7553，解决推理模型压缩成本过高问题。

**2. 修复 iTerm2 图片编码缺少 size 参数**
[#7612](https://github.com/earendil-works/pi/pull/7612) — `[OPEN]`
作者：rwachtler
在 OSC 1337 序列中补充 `size` 参数，兼容 `@xterm/addon-image@0.9.0` 的校验逻辑。修复 #7465，解决 xterm.js 下图片不显示问题。

**3. 支持 Mermaid 图表渲染**
[#7624](https://github.com/earendil-works/pi/pull/7624) — `[OPEN]`
作者：xl0
在 Markdown 渲染中支持 Mermaid 图表，使用 grok-mermaid 库，关闭 #7623。提升技术文档与对话的可视化能力。

**4. 修复全屏模式下长 Diff 无法滚动**
[#7597](https://github.com/earendil-works/pi/pull/7597) — `[OPEN]`
作者：Snail-Turbo
将 Diff 标题放入 ScrollView，支持鼠标滚轮，并固定 yes/no 操作按钮，解决大文件审查时操作按钮被顶出屏幕的问题。

**5. 增加 LLM Gateway 与新 DevPass 服务商**
[#7610](https://github.com/earendil-works/pi/pull/7610) — `[OPEN]`
作者：RATCHAW
新增 OpenRouter 风格路由器 LLM Gateway 内置支持，以及其 DevPass 订阅变体，完善第三方服务生态。

**6. 新增 Cortecs 欧洲 AI 路由服务商**
[#7571](https://github.com/earendil-works/pi/pull/7571) — `[CLOSED]`
作者：Henrik-3
将欧洲 AI 路由器 Cortecs（类似 OpenRouter）接入，基于 models.dev 自动管理模型列表，拓展欧洲市场支持。

**7. 管理类 HTTP 请求增加重试机制**
[#7632](https://github.com/earendil-works/pi/pull/7632) — `[OPEN]`
作者：petrroll
对幂等的管理请求（pi.dev、GitHub Releases、tools）添加重试机制，修复 #6675 并可能覆盖其他不稳定网络问题。未限制单次超时以避免引入新问题。

**8. 暴露 RPC 参数补全能力**
[#7621](https://github.com/earendil-works/pi/pull/7621) — `[CLOSED]`
作者：fan92rus
新增 `get_argument_completions` RPC 命令，让嵌入式客户端（如 Web UI）复用 TUI 的斜杠命令子命令补全能力，为第三方 UI 铺路。

**9. 在 /tree 中支持恢复失败回合**
[#7619](https://github.com/earendil-works/pi/pull/7619) — `[OPEN]`
作者：arajkumar
选择历史中失败的 assistant 条目将触发重试，错误条目保留在历史记录中，重试结果追加其后。修复 #7609。

**10. 保留非严格 Anthropic schema 中的 $defs 定义**
[#7604](https://github.com/earendil-works/pi/pull/7604) — `[CLOSED]`
作者：addoxyz
非严格模式下重建工具 schema 时会丢弃 `$defs`，导致 `$ref` 悬空引用，Anthropic API 报错。此修复确保 zod 派生 schema 的引用完整性。

---

## 功能需求趋势

- **企业级支持完善**：GitHub Copilot Enterprise/GHE、Codex 相关的认证、Compaction、模型列表问题是当前最集中的痛点，表明企业用户占比提升。
- **上下文压缩精细化控制**：希望独立配置压缩所用模型与思考预算（#7553、#7602），使推理模型下使用成本更可控。
- **Windows 平台体验提升**：路径分隔符、技能递归加载、SQLite 内置模块、安装/运行方式多样等问题持续出现，社区呼吁更系统的 Windows 适配策略。
- **可观测性与诊断工具**：多个 Issue 建议在 `version` 命令中暴露 Node/Bun 运行时信息（#7244），帮助问题定位；JSON 模式输出性能问题也引发关注（#7395）。
- **AI Provider 生态扩展**：Cortecs、LLM Gateway、Qwen Token Plan Individual（#7631）等新服务商接入，社区对更多模型路由选择有稳定需求。

---

## 开发者关注点

- **Compaction 企业级用户受阻**：421 错误在 Copilot Enterprise 席位持续出现，且 baseUrl 丢失疑似根因，是当日最热门的话题，影响正常使用。
- **TUI 细节影响日常体验**：全屏模式快捷键冲突、滚动跳变、错误行残留等问题反馈频率高，虽非致命但直接影响长时间使用的舒适度。
- **发布包质量**：`node:sqlite` 缺失、shrinkwrap 固定了含漏洞的 `undici` 与 `brace-expansion` 版本（#7628），提示发布流水线需增加依赖审计与一致性检查。
- **token 刷新阻塞**：约 5 分钟的无响应冻结引起关注，尤其对使用代理或弱网环境的开发者影响明显。
- **安全与隐私**：OAuth 错误消息包含 token 响应体的问题已由 PR #7605 修复，社区对认证信息安全保持敏感。

---
*日报基于 GitHub 公开数据自动生成，仅供技术交流参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-05** | **数据来源：** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)


## 1. 今日速览

今日发布 `v0.21.6-preview.0` 与 `v0.21.5-nightly.20260805` 两个版本，均为常规迭代。社区最热议题聚焦于 **Agent 运行时可信边界构建**（#8102）、**tmux 闪屏问题**（#8519）以及 **ACP 协议生态对齐**（多个 JetBrains 集成相关 Issue）。值得关注的是，**多工作区守护进程内存管理**和**取消操作后工具仍可修改文件**等 bug 类议题持续发酵，成为社区稳定性的关注焦点。

## 2. 版本发布

- **[v0.21.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0)**：为浏览器扩展添加 alpha 就绪诊断功能；文档补充 headless Goal 工作流说明。
- **[v0.21.5-nightly.20260805.32e274157](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157)**：夜间构建版本，内容同 v0.21.6-preview.0（浏览器扩展诊断 + 文档更新）。


## 3. 社区热点 Issues（Top 10）

### 1. [proposal(core): deterministic tool-execution boundaries for a trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102) ⭐ 评论 17
- **类型**：功能建议 | **优先级**：P3 | **状态**：OPEN
- **关注点**：提出“可信 Agent 运行时”方向——将 LLM 置于信任边界之外，由运行时对模型产生的动作进行确定性约束、授权、观测与评估。旨在构建可审计、可控的 Agent 执行环境。
- **社区反应**：讨论活跃（17 条），属于架构层面的长期演进议题。

### 2. [qwen code在tmux中闪屏严重](https://github.com/QwenLM/qwen-code/issues/8519) ⭐ 评论 11
- **类型**：Bug（UI/渲染） | **优先级**：P2 | **状态**：CLOSED
- **问题描述**：在 tmux 中使用 Qwen Code，几乎每秒闪屏一两次，严重影响交互体验。
- **社区反应**：反馈集中（11 条评论），问题已关闭，修复方案可关注关联 PR。

### 3. [tracking(serve): Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051) ⭐ 评论 9
- **类型**：功能建议 | **优先级**：P2 | **状态**：OPEN
- **关注点**：要求对生产环境 `qwen serve` 多工作区守护进程进行资源限制。当前仅按工作区数量限制，无法约束请求体、WebSocket 消息等占用的字节数，存在内存失控风险。
- **社区反应**：9 条评论，持续讨论中，与 #8182 内存分配问题相关。

### 4. [Provider warning sanitizer truncates messages containing a port, and leaks a password containing `@`](https://github.com/QwenLM/qwen-code/issues/8136) ⭐ 评论 6
- **类型**：Bug（安全） | **优先级**：P2 | **状态**：OPEN
- **问题描述**：`sanitizeProviderWarning` 函数在处理 URL 凭据时存在两个 bug：截断含端口的消息、以及当密码含 `@` 时泄露密码。

### 5. [CI logs make mocked disk-full test errors look like runner ENOSPC](https://github.com/QwenLM/qwen-code/issues/8532) ⭐ 评论 5
- **类型**：Bug（CI/CD） | **优先级**：P3 | **状态**：OPEN
- **问题描述**：CI 日志中，单元测试模拟的 `disk full` 错误与真实磁盘空间不足难以区分。

### 6. [Bug: after APIUserAbortError, subsequent turns are not written to the local session transcript](https://github.com/QwenLM/qwen-code/issues/8356) ⭐ 评论 5
- **类型**：Bug | **优先级**：P2 | **状态**：OPEN
- **问题描述**：用户中止 API 请求后，后续对话轮次无法写入本地会话记录。

### 7. [bug(core): cancelled file tools can still mutate files](https://github.com/QwenLM/qwen-code/issues/8493) ⭐ 评论 5
- **类型**：Bug（文件操作） | **优先级**：P2 | **状态**：OPEN
- **问题描述**：`write_file` 和 `edit` 工具在取消后仍可能修改文件系统，异步准备阶段未正确响应中止信号。

### 8. [qwen mcp list hangs indefinitely on an SSE server that never sends 'endpoint'](https://github.com/QwenLM/qwen-code/issues/8550) ⭐ 评论 4
- **类型**：Bug（MCP） | **优先级**：P2 | **状态**：OPEN
- **问题描述**：`qwen mcp list` 在 SSE 服务器不发送 `endpoint` 事件时会无限挂起。

### 9. [Foundational problem: Content[]/Part[] cannot safely encode per-provider reasoning-replay contracts](https://github.com/QwenLM/qwen-code/issues/8533) ⭐ 评论 4
- **类型**：Bug / 架构问题 | **优先级**：P2 | **状态**：OPEN
- **关注点**：深入探讨 `Content[]/Part[]` 数据模型无法安全编码各厂商不同的推理回放协议，属于数据模型层面基础问题。

### 10. [Add Korean (ko) to the docs site and the README language bar](https://github.com/QwenLM/qwen-code/issues/8551) ⭐ 评论 3
- **类型**：功能建议（文档） | **优先级**：P3 | **状态**：OPEN
- **建议内容**：在 README 语言栏与文档站点中新增韩语支持。


## 4. 重要 PR 进展（Top 10）

### 1. [feat(review): a cost ledger from the records already on disk](https://github.com/QwenLM/qwen-code/pull/8471) | wenshao
- **状态**：CLOSED | **标签**：autofix/takeover
- **内容**：为 review 流程增加成本账本，基于已有磁盘记录追踪成本。背景是 0.21.4 版本 review 变慢的问题，排查耗费数小时。
- **意义**：提高 review 成本的可观测性，避免同类问题再次出现。

### 2. [feat(review): add declarative repository-context manifest](https://github.com/QwenLM/qwen-code/pull/8401) | wenshao
- **状态**：OPEN | **标签**：autofix/takeover
- **内容**：为 review 流程添加声明式仓库上下文清单（`.qwen/review-context.json`），使 review 管线无需了解特定仓库即可感知仓库结构。

### 3. [fix: add onCompromised handlers to proper-lockfile calls to prevent daemon crash](https://github.com/QwenLM/qwen-code/pull/8442) | wenshao
- **状态**：OPEN | **标签**：autofix/takeover
- **内容**：为四个 `proper-lockfile` 调用补充 `onCompromised` 处理器，锁丢失时记录警告而非让守护进程崩溃。

### 4. [fix(autofix): serialize scan-and-pick issue runs in one concurrency group](https://github.com/QwenLM/qwen-code/pull/8435) | wenshao
- **状态**：OPEN | **标签**：autofix/takeover
- **内容**：修复 autofix 工作流中并发组互斥漏洞，确保扫描和拾取 Issue 的任务在同一并发组中串行执行。

### 5. [feat(cli): add audio bridge for attachments](https://github.com/QwenLM/qwen-code/pull/8332) | DragonnZhang
- **状态**：OPEN | **标签**：autofix/takeover
- **内容**：为主要模型不支持音频时增加音频桥，通过批量语音模型转录用户附件，并明确标记为“不可信机器转录”。

### 6. [fix(core): resolve Qwen 3.8 reasoning budget conflicts](https://github.com/QwenLM/qwen-code/pull/8525) | DragonnZhang
- **状态**：OPEN
- **内容**：修复 DashScope Qwen 3.8 请求同时携带 `reasoning_effort` 和 `thinking_budget` 时的冲突问题。

### 7. [fix(core): bound backward transcript pages in long single-turn sessions](https://github.com/QwenLM/qwen-code/pull/8553) | wenshao
- **状态**：OPEN | **标签**：autofix/takeover
- **内容**：限制向后翻页时页面对齐的扩展范围，最多不超过一页窗口，防止长会话中内存溢出。

### 8. [perf(review): retire dry chunks and pipeline verification in the reverse audit](https://github.com/QwenLM/qwen-code/pull/8498) | wenshao
- **状态**：OPEN | **标签**：autofix/takeover
- **内容**：移除反向审计中的 `dry chunks` 步骤并流水线化验证流程。数据表明，大型 PR 的 review 时间主要消耗在反向审计循环中。

### 9. [fix(hooks): close four trust-boundary holes in hook execution](https://github.com/QwenLM/qwen-code/pull/8396) | wenshao
- **状态**：OPEN | **标签**：autofix/takeover
- **内容**：修复 Hook 系统的四个信任边界漏洞，包括 HTTP hook 不再跟随重定向、增加 DNS 级 SSRF 检查等。

### 10. [feat(serve): observe daemon and child memory against real denominators](https://github.com/QwenLM/qwen-code/pull/8423) | doudouOUC
- **状态**：OPEN
- **内容**：将守护进程与子进程内存观测的“分母”从假设计改为真实值，并建立子进程堆分区模型。与此前 #8245 工作相关联。


## 5. 功能需求趋势

- **ACP 协议对齐**：本期出现多个与 Agent Client Protocol 相关的需求，集中于 **JetBrains AI Assistant** 集成体验提升，具体包括任务列表渲染、上下文用量展示、`session_info_update` 帧和推理强度档位暴露（`low/medium/high/xhigh/max`）。趋势指向 **ACP 已成为重要的 IDE 集成标准**，Qwen Code 需持续完善协议兼容性。
- **守护进程资源管理**：多个 Issue 围绕 `qwen serve` 多工作区守护进程的资源边界设计展开，包括内存上限分配、每子进程内存计算、请求体/WebSocket 字节数限制等。**资源可观测性**与**确定性限制**是核心诉求。
- **可信 Agent 运行时**：#8102 提出将 LLM 置于信任边界外、由运行时确定性约束模型动作的架构方向。反映出社区对 **Agent 安全性、可审计性**的深层关注。
- **多语言文档支持**：韩语文档需求出现，社区覆盖面持续扩大。


## 6. 开发者关注点

- **取消操作一致性**：#8493（取消后文件仍被修改）、#8356（中止后会话记录丢失）等 Issue 表明，**操作取消时的副作用清理**是高频痛点。
- **性能与资源占用**：#8051/#8182（守护进程内存）、#8532（CI 日志误导）、#8452（prompt cache 反复失效）等表明，**长会话中的性能退化**和**资源边界模糊**问题较为突出。
- **CLI 稳定性**：tmux 闪屏（#8519）、`qwen mcp list` 无限挂起（#8550）、Provider 更新提示循环（#8504）等，指向**交互式终端体验的稳定性**仍需打磨。
- **安全与信任**：Hook 执行信任边界、Provider 警告信息泄露、MCP 自动重连与重放语义等议题，反映出社区对 **安全细节**和**确定性语义**的高要求。
- **自动修复（autofix）机制**：大量 PR 带有 `autofix/takeover` 标签，表明项目已具备自动化修复流程，覆盖 CI 对齐、review 性能、锁处理等多个方面，有效降低了维护成本。

---

*本日报由 AI 自动生成，仅供参考。如有问题，欢迎在 [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) 参与讨论。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-05**
**数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/CodeWhale)（数据实际指向 CodeWhale 仓库）**


## 今日速览

今日社区焦点从功能开发转向了**工程质量与开发者体验**：核心维护者 Hmbown 连续提交了 5 个构建性能优化 Issue（#5245-#5249），直指 68 万行 TUI 单体 crate 带来的编译瓶颈；同时 0.9.4 版本发布列车（#5135）持续推进，已累积 77 个提交。此外，OpenModel 兼容层的 Anthropic API 参数校验错误（#4978）成为最热门的 bug 讨论。

> 注：当前仓库已更名为 CodeWhale，但作为 DeepSeek 生态的 TUI 客户端持续迭代。


## 社区热点 Issues（10 条精选）

### 🐛 高频 Bug

**1. [#4978] OpenModel 兼容层频繁报 Anthropic API 400 错误**
- 作者：w1w218 | 评论：6 | 更新：08-04
- **现象**：使用 `providers.openmodel`（兼容 Anthropic Messages API）时反复出现 `'type' must be in ["enabled", "disabled", "auto"]` 错误，重试偶发成功。
- **重要性**：直接影响第三方模型接入的核心路径，已持续 6 天未解决。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4978)

**2. [#5209] File 工具 edit 模式静默接受错误参数并假报成功**
- 作者：yekern | 评论：3 | 更新：08-04
- **现象**：使用 `new_str` 而非正确的 `replace` 参数时，工具不报错而是返回 "Replaced" 假成功，导致每处需 3-5 次重复编辑。
- **严重性**：Agent 自动化场景下会产生连锁错误，属于工具契约可信度问题。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5209)

**3. [#5241] 定价接口 503 — 所有会话显示 unverified_live_pricing**
- 作者：alitvak69 | 评论：1 | 更新：08-04
- **现象**：0.8.67 → 0.9.3 升级后，所有会话成本显示失效，三个不同 provider 均受影响。
- **影响**：费用追踪功能整体回退，企业用户关注度高。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5241)

**4. [#5239] 支持 1M 上下文的模型却在 128K 时触发压缩**
- 作者：hardy922 | 评论：1 | 更新：08-04
- **摘要**：模型声称支持 1M 上下文，但工具在 128K 即触发压缩。Hmbown 在 #5244 中确认为残留 bug——未知模型 ID 静默回退到 128K 旧默认值。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5239) | [关联 #5244](https://github.com/Hmbown/CodeWhale/issues/5244)

### ✨ 功能增强

**5. [#4955] 请求零沙箱 / --no-sandbox 本地开发模式**
- 作者：eugenicum | 评论：4 | 👍：1 | 更新：08-04
- **核心诉求**：Seatbelt 内核沙箱每日破坏基础 shell 命令，需要完全绕过沙箱的选项。
- **社区反应**：4 条评论讨论沙箱分层（内部/外部）的绕过方案。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4955)

**6. [#5250] 仅能保存一个 API Key，多 Provider 切换困难**
- 作者：ffyuhf | 评论：1 | 创建：08-05
- **诉求**：切换 DeepSeek 和 GLM 时需反复获取新 key，希望分开保存而非覆盖。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5250)

**7. [#5005] 沙箱支持文件系统路径白名单**
- 作者：WillHouMoe | 评论：2 | [已关闭]
- **场景**：xcodebuild 构建产物位于 workspace 外的 `~/Library/.../DerivedData`，`workspace-write` 沙箱模式无法访问。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5005)

### 🏗️ 工程效能（维护者系列）

**8. [#5249] Epic：v0.9.5 构建时优化 — 消除单体税**
- 作者：Hmbown | 创建：08-04
- **痛点**：682,959 行 / 620 文件的 `codewhale-tui` crate 占 workspace 86%，每次 edit-commit-test 循环全量重编。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5249)

**9. [#5248] 依赖图瘦身：708 个包 → 去重、减特性、砍冗余栈**
- 作者：Hmbown | 创建：08-04
- **现状**：95 个 build-script 包 + 52 个 proc-macro 包串行编译；至少 10 个依赖存在双版本/三版本共存。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5248)

**10. [#5243] OAuth 登录后未采用新生成的 token**
- 作者：Hmbown | 创建：08-04
- **场景（dogfood）**：xAI 设备登录成功后会话仍无有效凭据，需回到 provider 选择界面手动按 `e`。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5243)


## 重要 PR 进展（10 条精选）

### 🚀 版本发布

**1. [#5135] release: Codewhale v0.9.4 发布列车**
- 作者：Hmbown | 更新：08-04
- **状态**：77 commits ahead of main，包含 18 个列车提交 + 2026-08-01 全部源码候选，已超越 #5044。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5135)

### 🆕 新功能

**2. [#5242] TUI 子代理：从检查点恢复被中断的子任务**
- 作者：SparkofSpike | 更新：08-04
- **摘要**：此前 `interrupted_continuable` 子任务虽保存了 checkpoint 和 continuation_handle，但实际无法恢复执行；现在可通过 `agents/followup` 真正续跑。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5242)

**3. [#5240] Shell 工具内容显示真实等待耗时**
- 作者：SparkofSpike | 更新：08-04
- **问题**：`duration_ms` 仅在元数据中，模型不可见，导致模型误判任务刚启动而忙轮询。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5240)

**4. [#5238] MCP Registry 发现 + Registry-first 工具选择**
- 作者：bistack | 更新：08-04
- **核心**：模型优先从公共 MCP Registry 寻找匹配的零环境 stdio 服务器，而非直接调用 `exec_shell`。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5238)

**5. [#5225] ACP 协议暴露 file/search/git/patch/shell 工具**
- 作者：rafaelcavalheri | 更新：08-04
- **摘要**：此前 `session/prompt` 仅流式输出文本，工具调用不执行；现在 Zed 等 ACP 客户端可获得完整代码编辑能力。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5225)

### 🔧 Runtime API 系列（Copilot 批量贡献）

**6. [#5133] 暴露持久化 goal-loop 状态与完成控制**
- 作者：Copilot | 更新：08-04
- **新增**：`GET /v1/threads/{id}/goal` 读取状态 + 生命周期过渡控制。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5133)

**7. [#5130] MCP 服务器配置与生命周期管理（写操作）**
- 作者：Copilot | 更新：08-04
- **新增**：`POST /v1/apps/mcp/servers` 创建 / 更新 / 删除，此前仅只读。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5130)

**8. [#5129] Skill 生命周期端点：安装/更新/卸载/信任/审计**
- 作者：Copilot | 更新：08-04
- **补全**：此前仅支持发现和启停，现在完整覆盖 TUI 的全部生命周期操作。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5129)

**9. [#5132] 暴露验证器回执与证据（超越聚合计数器）**
- 作者：Copilot | 更新：08-04
- **新增**：`/v1/fleet/runs/{run_id}/receipts` 等三个只读端点，定位失败任务及原因。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5132)

### 🐛 修复

**10. [#5234] 修复鼠标捕获时滚动失效问题（#5223）**
- 作者：SparkofSpike | 更新：08-04
- **根因**：`recover_terminal_modes()` 同时启用了鼠标准捕获和 xterm alternate-scroll，导致滚轮误触输入历史。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5234)


## 功能需求趋势

| 方向 | 代表 Issue/PR | 热度 |
|------|--------------|------|
| **构建性能 / 编译时间优化** | #5249, #5248, #5245, #5247, #5246, #4991 | 🔥 极高（维护者主导） |
| **沙箱灵活性与可配置性** | #4955（no-sandbox）, #5005（路径白名单） | 高 |
| **多 Provider / 多 API Key 管理** | #5250 | 中 |
| **上下文窗口正确识别** | #5239, #5244 | 高（影响模型能力发挥） |
| **OAuth 流程完整性** | #5243 | 中 |
| **MCP 生态集成深度** | #5238, #5130 | 中 |
| **Runtime HTTP API 覆盖度** | #5133, #5130, #5129, #5132, #5131 | 中（AI 批量贡献） |
| **子代理/长任务恢复** | #5242 | 低 |
| **国际化文档（zh-CN）** | #5229 | 低 |

**值得注意**：构建性能优化已成为当前最高优先级——5 个 Issue 全部由核心维护者 Hmbown 在 08-04 当天集中创建，指向 v0.9.5 的开发主线。


## 开发者关注点

1. **工具契约可信度危机（最尖锐）**：File 工具 `action=edit` 静默接受错误参数并假报成功（#5209），意味着 Agent 无法信任工具返回值，必须人工复核——这动摇了 TUI 作为 Agent 前端的基本可靠性。

2. **上下文窗口配置不透明**：1M 上下文被静默截断到 128K（#5239/#5244），且无任何提示告知用户正在使用 fallback 值。社区认为"不知道被截断"比"被截断"本身更危险。

3. **沙箱与本地开发的矛盾持续加剧**：内核级 Seatbelt 沙箱daily破坏基本 shell 命令（#4955），xcodebuild 等构建工具产物在 workspace 外无法访问（#5005），开发者希望沙箱"默认安全但可完全关闭"。

4. **API Key 管理的多 Provider 困境**：仅支持单 key 存储，DeepSeek 与 GLM 切换成本高（#5250），缺乏类似 `~/.codehale/credentials.json` 的多账户方案。

5. **外部模型接入的兼容层稳定性**：Anthropic 兼容层参数校验错误（#4978）已持续 6 天，且重试成功无规律，严重影响依赖 OpenModel 的用户。

6. **编译等待已成为开发迭代的最大摩擦力**：一个 68 万行的 TUI crate 让每位贡献者和 agent 每次提交都付出全量链接的代价（#5245-#5249），25 个集成测试二进制更放大了问题——这不仅是体验问题，正在拖慢整个项目的开发速度。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*