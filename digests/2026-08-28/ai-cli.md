# AI CLI 工具社区动态日报 2026-08-28

> 生成时间: 2026-08-28 10:08 UTC | 覆盖工具: 9 个

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

**报告日期：2026-08-28**

---

## 1. 生态全景

当前 AI CLI 工具已全面进入"多代理协作 + 企业级安全"的纵深竞争阶段。头部产品（Claude Code、OpenAI Codex、Gemini CLI）在快速迭代核心 Agent 能力的同时，正将重心转向沙箱隔离、权限管控、会话数据安全等企业级刚需。与此同时，二线工具（OpenCode、Qwen Code、Kimi CLI）凭借差异化定位（如计费透明度、IDE集成、本土化生态）加速追赶。社区反馈呈现显著分化：Windows 桌面端稳定性成为多工具共同的技术短板，而 TUI 可定制性、MCP 兼容性、子代理行为可控性是跨工具的高频诉求。值得警惕的是，GPT-5.6 与 Gemini 3 等新模型的工具调用集成问题正在成为新的跨平台摩擦点。

---

## 2. 各工具活跃度对比

| 工具 | 今日活跃 Issues | 今日 PR 进展 | Release 情况 | 迭代节奏 |
|------|:---:|:---:|:---:|------|
| **Claude Code** | 10 个热点（最高 29 评论） | 1 个（CLOSED） | v2.1.250 + v2.1.248（`--restricted` 沙箱模式） | 高频，周更为主 |
| **OpenAI Codex** | 10 个热点（最高 67 评论） | 10 个（全 CLOSED，bot 主导） | 3 个 alpha（0.151.0-alpha.6/7/8） | 极高，日更 alpha |
| **Gemini CLI** | 10 个热点（最高 13 评论） | 10 个（8 OPEN + 1 CLOSED） | nightly 滚动 | 极高，夜间构建 |
| **GitHub Copilot CLI** | 10 个热点（含 4 个新提交） | 未单列（随主版本发布） | v1.0.81 正式 + v1.0.82-0 预发布 | 中频，月度正式版 |
| **Kimi Code** | 6 个（含 2 个新提交） | 3 个（全 OPEN） | 无新版本 | 中低频 |
| **OpenCode** | 10 个热点（含 5 个计费相关） | 10 个（全 OPEN，社区贡献者密集） | v1.18.24 + v1.18.25 | 中高频 |
| **Pi (pi-mono)** | 10 个热点（多已 CLOSED） | 10 个（7 CLOSED + 3 OPEN） | 未在今日窗口内发布 | 高频，合入迅速 |
| **Qwen Code** | 10 个热点（含 4 个新提交） | 10 个（覆盖 UI/架构/CI） | v0.22.2-nightly | 高频，夜间构建 |
| **DeepSeek TUI** | 10 个热点（含 1 个新提交） | 10 个（4 个新提交 + 1 已合并） | 无独立版本（仓库已并入 CodeWhale） | 中频，以 PR 推动为主 |

> 注：Issues/PR 数均为各日报中精选的"热点"条目，不代表仓库全量数据。

---

## 3. 共同关注的功能方向

### 3.1 沙箱安全与企业级权限管控
- **Claude Code**：v2.1.248 新增 `--restricted` 受限模式（移除执行工具、限制文件范围）
- **Gemini CLI**：PR #29099 强制 fail-closed 工作区信任；#19873 零依赖 OS 沙箱提案；扩展环境变量注入防护（#28863）
- **OpenCode**：PR #45898 glob 越界访问审批
- **OpenAI Codex**：Guardian 分数复用安全修复（PR #41309）
- **Kimi CLI**：asyncssh 安全漏洞修复（PR #2622）

### 3.2 Windows 平台稳定性（多工具集中失守）
- **Claude Code**：桌面端崩溃无法恢复（#53247，29 评论）、更新失败（#49655）
- **OpenAI Codex**：认证失效循环（#40761）、无窗口启动（#41179）、GPT-5.6 握手失败（#41255）、信任验证失败（#39855）
- **Gemini CLI**：Windows longpaths 配置补丁（PR #28926）
- **OpenCode**：Windows ARM64 原生构建失败（#45875）
- **Pi (pi-mono)**：Windows 下 `!` 命令 shellPath 修复（PR #8764）

### 3.3 上下文管理与 Token 效率
- **Gemini CLI**：AST 感知代码检索（#22745）、Tactful Extraction（#19561）
- **OpenAI Codex**：分页历史丢失有效记录（#35746）
- **Copilot CLI**：Compaction 低占用误触发（#4643）、上下文窗口计算错误（#4638）
- **Pi (pi-mono)**：`--resume` 选择器全量解析卡顿（#8762）
- **Qwen Code**：自动压缩在 HTTP 413 时无法恢复（#10380）
- **DeepSeek TUI**：上下文压力警告是瞬态的，agent 不响应（#5620）

### 3.4 TUI 可定制性与显示控制
- **OpenAI Codex**：禁用命令折叠（#39903，60 👍）、隐藏工具调用输出（#18396）、`/add-dir` 命令（#11747）
- **Pi (pi-mono)**：软换行语义修复（#8674）、剪贴板可配置（#8731）
- **DeepSeek TUI**：`/copy` 命令（#5668）、MCP/插件启动可见性（#5677）
- **Qwen Code**：ink → OpenTUI 迁移（#8662）
- **OpenCode**：GNU Screen/tmux 兼容性（#32985、#45871）

### 3.5 子代理可靠性
- **Gemini CLI**：MAX_TURNS 误报 GOAL 成功（#22323）、通用代理无限挂起（#21409）
- **OpenAI Codex**：子代理服务层级继承（PR #41308）
- **Copilot CLI**：并行子代理 TUI 冻结（#4533）、`--resume` 后 Hooks 丢失（#4629）
- **Claude Code**：`/fork` 权限模式静默降级（#89911）
- **Qwen Code**：hooks 触发事件增强（#10348，已关闭但方向已记录）

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|---------|---------|-------------|
| **Claude Code** | 企业级安全 + 严谨审计 | 企业团队、高合规场景 | `--restricted` 受限模式；rules 治理诊断需求萌芽 |
| **OpenAI Codex** | 高频迭代 + 深度集成 | 多模型使用者、桌面端用户 | Rust 全栈；Guardian 自动审查机制；app-server v2 协议统一 |
| **Gemini CLI** | 多代理协作 + 上下文效率 | Google 生态开发者、长期会话用户 | AST 感知代码库映射（EPIC 追踪）；零依赖 OS 沙箱提案；Auto Memory 系统 |
| **Copilot CLI** | GitHub 生态整合 + 插件系统 | GitHub 重度用户、企业 GHEC | 插件仪表盘（v1.0.81）；企业数据驻留适配；MCP 2026-07-28 规范同步 |
| **Kimi Code** | 模型 API 兼容 + 轻量集成 | Moonshot 生态、API 开发者 | 多协议兼容（openai_legacy 等）；ACP 协议 IDE 集成持续修复 |
| **OpenCode** | 商业化订阅 + 多模型支持 | 追求性价比的独立开发者 | Go 套餐计费体系（当前信任危机）；V2 工具链快速迭代；Azure Entra ID 认证 |
| **Pi (pi-mono)** | 本地优先 + 多端点兼容 | 注重隐私、自建模型的开发者 | XDG Base Directory 合规；本地 llama.cpp 支持；深度多端点适配（Bedrock/DeepSeek/OpenRouter） |
| **Qwen Code** | IDE 深度整合 + 中文生态 | 阿里云/钉钉生态开发者 | Web Shell 全面重构；钉钉频道集成深度适配；OpenTUI 渐进式迁移 |
| **DeepSeek TUI** | 多提供商中立 + 原生搜索 | 多模型切换的 Rust 爱好者 | Provider-native 搜索（覆盖 5 家厂商）；gix/gitoxide 内部化；单体 crate 拆分进行中 |

---

## 5. 社区热度与成熟度

### 第一梯队：社区规模大，讨论热度高，但面临"成长的烦恼"

- **OpenAI Codex**：热度最高（单 Issue 达 67 条评论）。高频迭代（日更 alpha），但 Windows 问题集中爆发正侵蚀用户信任。PR 由 `copyberry[bot]` 自动提交为主，人工审查节奏待观察。
- **Claude Code**：讨论深度最强（多围绕安全与权限）。`--restricted` 是近期最受认可的功能。Windows 崩溃问题（29 评论）为当前口碑最大风险点。

### 第二梯队：快速迭代，社区活跃度上升期

- **Gemini CLI**：社区专业度极高（AST 感知、沙箱设计等前瞻性讨论）。夜间构建节奏快，但子代理误报问题（P1）严重影响多代理场景的可信度。
- **Copilot CLI**：正式版 v1.0.81 带来插件时代，但新版本的 MCP 兼容性破坏（chroma-mcp 断开）及多条稳定性 Bug（13GB 日志膨胀、事件导出 OOM）表明其正在经历"功能扩张→稳定性补课"阶段。
- **Pi (pi-mono)**：合并速度极高（7/10 PR 已 CLOSED），修复效率突出。但 TUI 渲染回归在 v0.84.x 中集中暴露，需警惕快速迭代带来的回归风险。

### 第三梯队：差异化深耕，社区规模相对较小

- **Qwen Code**：Web Shell 大重构拉动大量衍生问题（4 个独立跟踪），说明架构变动期集中。钉钉集成深度是其独特壁垒。
- **OpenCode**：今日 Issue 高度集中于 Go 套餐计费（7/10 条），社区信任面临商业化验证的关键考验。
- **DeepSeek TUI**：已并入 CodeWhale 项目运作。Provider 中立化（消除 18 处 DeepSeek 专属门控）是当前主线，方向清晰但社区规模有限。
- **Kimi Code**：社区活跃度偏低（今日仅 6 个 Issue），但 API 兼容性问题的情绪化表达（"吃 **** 的"）反映出用户对基础体验的敏感。

---

## 6. 值得关注的趋势信号

### 信号一："沙箱化"成为企业级标配，但落地路径各异

`--restricted` 模式加入 Claude Code、Gemini CLI 强制 fail-closed 工作区信任、OpenCode glob 越界修复——三家不约而同收紧安全边界。**参考价值**：企业选型时，应将"沙箱细粒度"（能否区分文件/命令/网络/环境变量）作为核心评估维度，而非仅看模型能力。同时，沙箱与 MCP 服务器、hooks 的兼容性将是下一个必争点。

### 信号二：Windows 桌面端是当前最大的生态薄弱环节

五个工具在同一天出现 Windows 相关问题（认证循环、无头启动、更新失败、ARM64 构建、路径超限）。**参考价值**：Windows 开发者应优先关注 CLI（非桌面端）版本，并在版本升级前查阅 changelog 中的 Windows 专项修复；工具厂商需要将 Windows 稳定性从"修复"提升到"系统性测试"层面。

### 信号三：子代理的"可观测性"与"行为可控性"成为多代理协作的硬门槛

Gemini CLI 子代理误报成功、Copilot CLI 并行子代理 UI 冻结、Claude Code `/fork` 静默降级、Kimi CLI Plan 模式死循环——**四个工具同时撞上同一堵墙**：外层无法感知内层 Agent 的真实状态。**参考价值**：采用多代理工作流时，务必验证子代理的轨迹透明性（能否追踪每一步决策）、失败上报准确性（中断 ≠ 成功）、以及权限继承的显式提示。缺乏"可审计性"的多代理系统在生产环境中风险极高。

### 信号四：新模型发布正在制造新的集成摩擦

GPT-5.6 code-mode 握手失败（Windows/macOS 双平台）、Gemini 3 子代理挂起——新模型能力的快速迭代与 CLI 工具链的适配之间存在时间差。**参考价值**：开发者在使用新模型时，周期性地关注模型与 CLI 工具的兼容性公告，在关键生产环境（CI/CD 流水线）保留已验证的稳定模型版本作为降级预案。

### 信号五：上下文管理从"压缩"走向"精准读取"

Gemini CLI 的 AST 感知代码检索（EPIC 级追踪）与 Copilot CLI 的上下文窗口计算 Bug 形成鲜明对照：前者代表"外科手术式"读取的未来方向，后者暴露"粗放式"拼接的现状风险。**参考价值**：选择工具时，关注其上下文管理体系是"被动压缩"还是"主动节流"——后者在长时间运行的 Agent 任务中直接决定 Token 成本上限与稳定性。

### 信号六：商业化的"信任危机"开始显性化

OpenCode 今日 7 个计费相关 Issue（配额计算错误、付费未激活、限流误伤）、Copilot CLI 对企业数据驻留切换的认证断裂——当 AI CLI 从开发者工具走向商业服务，计费准确性、配额透明度、订阅生命周期管理将成为留存用户的关键指标。**参考价值**：评估商业化工具的长期使用风险时，不仅看功能，更要观察其计费/配额系统的稳健性——这一维度在今日的多个仓库中已成为社区信任的分水岭。

---

*本报告基于 2026-08-28 各工具社区动态摘要自动生成，数据截至当日抓取时间。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，这是基于 anthropics/skills 仓库数据生成的 Claude Code Skills 社区热点报告。

---

## Claude Code Skills 社区热点报告（截至 2026-08-28）

### 1. 热门 Skills 排行（Top 5）

**#1 skill-creator 修复与优化（PR #1298）**
- **功能**：修复 `run_eval.py` 评估脚本的核心缺陷，包括恶意检测、Windows 兼容性及并行处理问题。
- **讨论热点**：这是当前社区最关注的 PR。它试图解决 `run_eval.py` 在所有报告场景下准确率均为 0% 的严重问题（与 Issue #556 相关），因为该损耗直接导致技能描述优化循环失效。
- **状态**：**Open**，更新频繁，是优先处理的热点。

**#2 document-typography 技能（PR #514）**
- **功能**：新增排版质量检查技能，解决 AI 生成文档中的孤字、孤行（寡行）和编号错位等排版问题。
- **讨论热点**：解决所有 AI 生成文档的通用痛点，实用性极高。讨论集中在将“排版规范”转化为 Claude 可执行的指令上。
- **状态**：**Open**，讨论活跃度一般，但需求明确。

**#3 self-audit 技能（PR #1367）**
- **功能**：新增技能，要求 Claude 在交付前先进行机械性文件验证，再执行四维推理审计（按损失严重性排序），旨在提升输出质量。
- **讨论热点**：这是社区对“质量门禁”和“自我审查”方向的一次探索。讨论热度高，表明用户渴望能自动化验证 AI 输出的技能。
- **状态**：**Open**，讨论日期集中在近期（6月底-7月初），热度保持。

**#4 skill-quality-analyzer / skill-security-analyzer（PR #83）**
- **功能**：为市场新增两个元技能，一个评估其他技能的质量（结构、文档等），另一个分析其安全性，构建了一套技能自检生态。
- **讨论热点**：讨论集中于如何确立技能规范与安全边界，反映了社区对技能生态健康度管理的兴趣。
- **状态**：**Open**，虽然创建时间较早，但持续存在讨论。

**#5 testing-patterns 技能（PR #723）**
- **功能**：提供全面的测试模式技能，涵盖测试哲学、单元测试、React 组件测试等完整测试栈。
- **讨论热点**：社区对将测试方法论沉淀为可复用技能有明确兴趣，该 PR 讨论热度上升，说明关注度在增加。
- **状态**：**Open**。

### 2. 社区需求趋势

- **可靠性修复优先**：当前最急迫的需求不是创建新技能，而是修复官方工具链（如 `skill-creator`、`docx` 等）中的稳定性、跨平台兼容性和正确性问题，其中 Windows 兼容性是重灾区。
- **安全与信任边界（重要议题）**：社区高度关注在 `anthropic/` 命名空间下分发社区技能带来的**信任边界滥用**问题，以及技能对敏感数据（如 SharePoint）处理的安全设计。这已成为影响生态信任基础的关键议题（Issue #492）。
- **上下文窗口管理**：多个 Issue 和 PR 指向技能大小与上下文窗口的冲突，特别是大型技能（如 `claude-api`）被要求优化以减少 token 消耗，并提倡更紧凑、高效的设计。
- **企业级功能**：社区要求支持**组织级技能共享**，反映了 Skills 机制从个人工具向企业级平台演进的诉求（Issue #228）。
- **系统化与自动化**：用户不再满足于单点技能，而是追求将技能用于**评估、审计、编排**其它 AI 代理或技能，体现了“深度工程化”趋势（如 PR #1367、#83、#1628）。

### 3. 高潜力待合并 Skills（近期可能落地的 PR）

- **Hivemind（PR #1628）**：一个零成本的多代理编排技能，允许 Claude Code 将机械工作外包给免费模型，优化昂贵模型的使用效率。该方向契合社区对成本与性能优化的诉求，项目创建时间极新，讨论集中且活跃。
- **scnet-hpc（PR #1615）**：面向科研计算集群（HPC）的技能，通过 SSH/Slurm 管理任务。目标用户明确，功能细分，具备落地价值。

### 4. Skills 生态洞察

当前社区在 Skills 层面最集中的诉求是**“构建可信赖的工程化体系”**，即优先解决技能开发、维护、评估和分发过程中的稳定性与安全性问题，并从“分享更多有用的技能”转向“更严格地管理和优化技能生命周期”。

---

# 🤖 Claude Code 社区动态日报 — 2026-08-28

> 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) GitHub 仓库

---

## 1. 今日速览

昨日发布 v2.1.250 与 v2.1.248 两个版本，其中后者引入全新的 `--restricted` 受限模式，移除了执行命令/代码的内置工具，是近期最值得关注的沙箱安全增强。社区侧，Windows 桌面端崩溃后无法恢复（#53247）与 Claude.ai 登录邮件延迟（#82049）仍是讨论热度最高的两个问题，分别获 29 和 19 条评论。功能需求方面，用户对数据分析与 IDE 工作流自动化的呼声显著上升。

---

## 2. 版本发布

### 📦 v2.1.250
- **内容**：Bug 修复与可靠性改进。
- **链接**：[Release v2.1.250](https://github.com/anthropics/claude-code/releases)

### 📦 v2.1.248 — ⭐ 本期重点
- **新增 `--restricted` 受限模式**（可通过环境变量 `CLAUDE_CODE_RESTRICTED=1` 启用）：
  - 移除所有执行命令/代码的内置工具，以及 `WebFetch`（除非在 `--tools` 中显式指定）
  - 文件工具限制在工作目录内
  - 拒绝 `bypassPermissions`
  - 忽略用户、项目及本地配置文件
- **适用场景**：高风险环境（生产服务器、共享机器）或需要严格审计粒度的团队。
- **链接**：[Release v2.1.248](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #1 — [BUG] Claude Desktop 崩溃后无法启动（Windows）
- **Issue**：[#53247](https://github.com/anthropics/claude-code/issues/53247)
- **状态**：OPEN | 评论 29 | 👍 18
- **要点**：应用崩溃后，`Silo / Job Object` 进程未清理，导致后续启动直接失败（HRESULT 0x80070020），只能注销或重启系统。影响面大，用户在 4 月提交后持续关注，官方未给出明确修复时间线。

### 🔥 #2 — [BUG] Claude.ai 登录邮件延迟 2-5 分钟
- **Issue**：[#82049](https://github.com/anthropics/claude-code/issues/82049)
- **状态**：OPEN | 评论 19 | 👍 36
- **要点**：7 月中旬起，所有 magic link 邮件延迟 2-5 分钟，会话过期后重新登录等待时间过长，严重影响 CLI 使用体验。属服务端问题，社区呼声极高但需 Anthropic 侧修复。

### 🔥 #3 — [BUG] Claude Desktop 更新失败（Windows）
- **Issue**：[#49655](https://github.com/anthropics/claude-code/issues/49655)
- **状态**：CLOSED | 评论 23 | 👍 10
- **要点**：`CoworkVMService` 运行时，桌面应用更新报错 0x80073CF6。虽已关闭，但评论区的讨论持续到 8 月 28 日，说明该问题在特定环境中可能仍未彻底解决。

### 🔥 #4 — [BUG] `/fork` 会话权限模式丢失（Linux）
- **Issue**：[#89911](https://github.com/anthropics/claude-code/issues/89911)
- **状态**：OPEN | 评论 3 | 👍 0
- **要点**：父会话使用 `bypassPermissions` 时，`/fork` 出的子会话会退回 auto 模式且无任何提示，导致任务中途工具调用被拒。属于权限穿透的静默降级，易造成任务失败且难以排查。

### 🔥 #5 — [BUG] `.devcontainer/init-firewall.sh` DNS 解析失败导致容器启动中断
- **Issue**：[#55623](https://github.com/anthropics/claude-code/issues/55623)
- **状态**：OPEN | 评论 7 | 👍 17
- **要点**：`statsig.anthropic.com` 无公共 DNS 记录，但脚本将其设为 fatal（`exit 1`），导致 devcontainer 的 `postStartCommand` 失败。VS Code 远程开发场景下阻断性强，获 17 👍 表明受影响人群较大。

### 🔥 #6 — [BUG] `.claude/rules/` 软链接不生效
- **Issue**：[#88405](https://github.com/anthropics/claude-code/issues/88405)
- **状态**：OPEN | 评论 6 | 👍 4
- **要点**：官方文档声明支持 symlink，但实际加载时软链接文件被忽略，与文档矛盾。影响跨项目共享 rules 的团队，提交于 8 月 20 日，更新至 28 日，社区关注度持续上升。

### 🔥 #7 — [BUG] C# 语法高亮短暂显示后消失（macOS）
- **Issue**：[#66440](https://github.com/anthropics/claude-code/issues/66440)
- **状态**：OPEN | 评论 8 | 👍 10
- **要点**：文本编辑器在渲染后语法高亮消失，带 repro，属 UI 渲染层面的回归问题。影响 C# 开发者的日常编辑体验。

### 🔥 #8 — [BUG] 登录状态每天失效（Linux Desktop + Cowork）
- **Issue**：[#89812](https://github.com/anthropics/claude-code/issues/89812)
- **状态**：OPEN | 评论 4 | 👍 1
- **要点**：`session_stale_relogin (elevated_auth)` 导致每天要求重新登录，且 Cowork 文件夹授权过程中出现两次登录请求。8 月 26 日提交，讨论仍在进行。

### 🔥 #9 — [BUG] Managed settings 中 OTEL env 变量不生效（macOS）
- **Issue**：[#67657](https://github.com/anthropics/claude-code/issues/67657)
- **状态**：OPEN | 评论 7 | 👍 2
- **要点**：`managed-settings.json` 的 `env` 块因初始化顺序问题，无法将 OTEL 环境变量注入进程，导致遥测数据缺失。对依赖可观测性的团队影响较大。

### 🔥 #10 — [FEATURE] 请求规则治理诊断（instruction-budget 警告与冲突检测）
- **Issue**：[#85477](https://github.com/anthropics/claude-code/issues/85477)
- **状态**：OPEN | 评论 3 | 👍 1
- **要点**：建议为 `CLAUDE.md` / `.claude/rules/` 增加诊断能力：预算超限告警、重复规则检测、冲突检测。CLAUDE.md 承载内容越来越多，治理需求正在萌芽。

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时内仅有 1 个 PR 更新。

### #69226 — Update frontend-design skill
- **作者**：williamqian12
- **状态**：CLOSED（未合并）
- **链接**：[PR #69226](https://github.com/anthropics/claude-code/pull/69226)
- **内容**：改进 frontend-design 技能，插件版本提升至 1.1.0 以便已安装副本自动更新。
- **分析**：6 月创建的 PR 在 8 月 27 日关闭，推测被 superseded 或主动撤回。短期来看社区贡献合并节奏放缓，建议关注官方后续版本是否自带相关改进。

> 📌 若需了解更长期的 PR 合并趋势，建议搭配 [pulls](https://github.com/anthropics/claude-code/pulls) 页面查阅最近一周的合并记录。

---

## 5. 功能需求趋势

### 📊 数据与可观测性
| 方向 | 代表 Issue | 热度（👍） |
|------|-----------|-----------|
| OTEL 环境变量正确注入 | #67657 | 2 |
| 会话上下文自动管理（与代码执行解耦） | #86263 | — |

### 🛠️ IDE / 编辑器集成
| 方向 | 代表 Issue | 热度（👍） |
|------|-----------|-----------|
| 从 IDE 扩展面板访问 IDE 诊断工具（`mcp__ide__getDiagnostics`） | #40766 | 7 |
| VS Code 会话删除可恢复（确认+还原+从磁盘核对） | #75957 | 1 |
| Chrome 扩展在无 Default profile 时无法检测 | #90306 | — |

### 🔐 安全与权限
| 方向 | 代表 Issue | 热度（👍） |
|------|-----------|-----------|
| **`--restricted` 受限模式（已发布 v2.1.248）** | 版本发布 | — |
| 验证 `setup-token` 的作用域（无法确认 token 绑定到哪个 org） | #90298 | — |
| 恢复 Write 工具严格先读后覆盖选项（自 v2.1.228 起的数据丢失隐患） | #88518 | — |

### 🧠 知识管理
| 方向 | 代表 Issue | 热度（👍） |
|------|-----------|-----------|
| 允许 Claude Code 访问 Claude Projects 知识库 | #87528 | — |
| Rules 治理诊断（指令预算、重复、冲突检测） | #85477 | 1 |

### 🤝 多智能体与协作
| 方向 | 代表 Issue | 热度（👍） |
|------|-----------|-----------|
| 多智能体会话中后台任务孤儿化、跨会话消息挂起、子代理漂移 | #90264 | — |
| `/fork` 会话继承父级权限模式 | #89911 | — |

---

## 6. 开发者关注点

### 高频痛点

1. **会话数据安全与可恢复性**（多期叠加）
   - 默认 `cleanupPeriodDays` 静默删除了 58/69 个会话转录（#86730）
   - 重命名项目根目录后，会话注册表不重新校验 `cwd`，产生死路径（#83146）
   - 桌面端侧边栏不显示会话历史，尽管 `~/.claude/projects` 数据完好（#87710）
   - **结论**：会话生命周期管理（清理、恢复、路径变更）是目前最大的信任危机来源。

2. **Windows 桌面端稳定性持续承压**
   - 崩溃后无法重启（#53247，29 评论）
   - 更新失败（#49655，23 评论）
   - **结论**：Windows 用户面临“不更新会出问题，更新也可能出问题”的两难。

3. **权限模式静默降级**
   - `/fork` 从 bypass 静默退回 auto（#89911）
   - **结论**：权限模式变化应当显式提示，否则任务失败难以归因。

4. **跨平台行为不一致**
   - 桌面端对 CLI 创建的会话“文件夹未信任”误报（macOS：#89578 / Windows：#60341）
   - 文件系统 MCP 服务器在 Windows 上因 schema 方言问题全部工具调用失败（#88988）

5. **CLI 基础命令稳健性**
   - `claude install` / `claude doctor` 在特定虚拟化环境（Proxmox/QEMU）下 CPU 100% 挂起（#89627）
   - **结论**：安装与诊断链路需要更强的超时/降级机制。

---

## 总结

- **版本层面**：`--restricted` 模式的加入表明 Anthropic 正在认真对待“沙箱化运行”这一企业级需求，后续可关注其对 MCP 服务器与 hooks 的兼容性补全。
- **社区层面**：会话数据安全与 Windows 桌面端稳定性是目前口碑最大的两个风险点，建议 Anthropic 优先投入。
- **需求层面**：IDE 联动工具的深化（诊断数据面打通）、规则治理的可观测性，以及多智能体会话的权限/状态一致性，是未来 2-3 个版本值得期待的方向。

---

*本日报由 AI 自动生成，数据截至 2026-08-28。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-28** | 数据来源：github.com/openai/codex

---

## 今日速览

今日 Codex 仓库持续高频迭代，共发布 3 个 Rust 版本（均为 0.151.0-alpha 系列）。社区讨论热度集中在两大方向：一是 **Windows 平台桌面端稳定性问题**集中爆发（认证失效循环、无窗口启动、静默退出等）；二是 **GPT-5.6 系列模型在 code-mode 下握手失败**的跨平台问题持续发酵。值得关注的是，今日合并的 PR 全部由 `copyberry[bot]` 自动提交，涉及 Guardian 审查机制优化、子代理服务层级继承、PowerShell 兼容性等多个内部架构改进。

---

## 版本发布

过去 24 小时内发布了 3 个 Rust 版本：

- **rust-v0.151.0-alpha.8** — 最新增量版本
- **rust-v0.151.0-alpha.7** — 增量版本
- **rust-v0.151.0-alpha.6** — 增量版本

> 三个版本均未附带详细的变更说明，从版本号节奏来看属于高频迭代期，主要面向内部验证和 bug 修复。建议 CLI 用户关注 `codex-cli` 的 npm 发布日志以获取完整变更。

---

## 社区热点 Issues（Top 10）

### 1. 🚨 macOS 打开已有对话导致 ChatGPT 认证失效并重定向至登录页
**Issue #39162** | `[bug, auth, app]` | 👍 40 | 💬 67

> 打开一个已存在的对话会使 ChatGPT 认证失效，应用被重定向至登录界面。66 条评论表明大量用户受影响，是当前社区最热门的未解决问题。

**链接**: https://github.com/openai/codex/issues/39162

---

### 2. 🚨 GPT-5.6 模型 code-mode 握手失败（Windows）
**Issue #41255** | `[bug, windows-os, tool-calls, app]` | 👍 0 | 💬 4

> 昨天刚创建的新 Issue，报告 Codex Desktop 中 `gpt-5.6-sol`、`gpt-5.6-terra`、`gpt-5.6-luna` 均无法执行 exec 工具，报错 "code-mode host exited during handshake"。与 #41049 和 #32759 高度关联，说明 5.6 模型在 Windows 上存在系统性问题。

**链接**: https://github.com/openai/codex/issues/41255

---

### 3. 💡 新增选项：禁用 "Ran N commands" 折叠，始终显示执行命令
**Issue #39903** | `[bug, enhancement, TUI, CLI, config]` | 👍 60 | 💬 33

> 社区强烈呼吁（60 个 👍）在 TUI 中增加选项，让用户选择不折叠已执行的命令，始终展开显示。TUI 可定制性需求持续走高，该项目以 60 个赞位居今日最受关注的功能需求。

**链接**: https://github.com/openai/codex/issues/39903

---

### 4. 🐛 Windows 上 code-mode 握手失败（中文报告）
**Issue #41049** | `[bug, windows-os, tool-calls, app]` | 👍 1 | 💬 32

> Windows 用户报告在 26.820.71523 版本中本地命令执行通道初始化失败，握手阶段异常退出。32 条评论表明该问题不是个例，可能影响了大量 Windows 用户。

**链接**: https://github.com/openai/codex/issues/41049

---

### 5. 🐛 分页历史丢失有效的rollout记录并重用序号
**Issue #35746** | `[bug, CLI, session]` | 👍 1 | 💬 31

> 分页历史记录解码不一致，部分有效记录丢失、序号被复用。这是一个深层次的 CLI 会话数据一致性问题，31 条评论说明用户在长期会话中遇到了实际困扰。

**链接**: https://github.com/openai/codex/issues/35746

---

### 6. 💡 新增 `/add-dir` 斜杠命令，支持会话中添加目录
**Issue #11747** | `[enhancement, TUI]` | 👍 45 | 💬 14

> 用户希望在活跃会话中通过 `/add-dir` 命令添加工作目录，无需重启。45 个 👍 + 14 条评论，这是一个已经讨论了半年的功能需求，开发者们对 TUI 的灵活操作有着持续的期待。

**链接**: https://github.com/openai/codex/issues/11747

---

### 7. 💡 TUI 中隐藏工具调用/输出的选项
**Issue #18396** | `[enhancement, TUI]` | 👍 28 | 💬 10

> 用户希望能在 TUI 界面中隐藏工具调用的详细输出（如文件写入、命令执行等中间步骤），以减少终端噪音。28 个 👍，与 #39903 共同反映了用户对 TUI 显示控制的高度关注。

**链接**: https://github.com/openai/codex/issues/18396

---

### 8. 🔥 Windows Remote：无项目聊天无法通过信任验证，路径格式错误
**Issue #39855** | `[bug, windows-os, app, safety-check, remote]` | 👍 4 | 💬 12

> Windows Remote 下每个新建的无项目聊天在信任验证阶段失败。与此同时 #39678 报告了 Android 到 macOS Remote 也出现同样的信任错误。Remote 功能的跨平台问题在集中爆发。

**链接**: https://github.com/openai/codex/issues/39855

---

### 9. 🚨 Windows 桌面版升级后无头启动，无渲染器/窗口
**Issue #41179** | `[bug, windows-os, app]` | 👍 0 | 💬 11

> 从 Classic 升级到 26.820.9563.0 后应用无头启动，不创建任何窗口。昨日创建的 Issue 已有 11 条评论。与此同时 #41056 报告同一版本挂起约 8 分钟才能创建窗口，#40576 报告 26.818.5229 版本静默退出。**Windows 桌面版启动问题呈现连锁爆发态势。**

**链接**: https://github.com/openai/codex/issues/41179

---

### 10. 🔥 Windows 登录成功后被 401 踢出，陷入重新认证循环
**Issue #40761** | `[bug, windows-os, auth, app]` | 👍 0 | 💬 6

> Windows 用户登录成功后，`/accounts/{id}/settings` 返回 401，导致 `auth_token_missing` 错误并陷入认证循环。#41136 报告了同样的问题。**Windows 认证稳定性已是社区最紧迫的痛点之一。**

**链接**: https://github.com/openai/codex/issues/40761

---

## 重要 PR 进展（Top 10）

### 1. 🔐 Guardian 分数复用需满足必需审查要求
**PR #41309** | `[CLOSED]` | copyberry[bot]

> 修复一个安全漏洞：当线程切换到需要自动审查的模型时，标准范围的审批可能复用缓存的低风险分数，从而绕过完整审查。修复后复用的 Guardian 分数将必须先满足审查要求。

**链接**: https://github.com/openai/codex/pull/41309

---

### 2. 🧩 子代理遵循根服务层级
**PR #41308** | `[CLOSED]` | copyberry[bot]

> 将根线程的当前服务层级（service tier）共享到整个代理树，并应用到各子代理请求（包括远程压缩请求）。当子模型支持时，服务层级的更新会被传播到现有子代理。

**链接**: https://github.com/openai/codex/pull/41308

---

### 3. 🖼️ 将历史记录笔记中的图片转发给模型
**PR #41292** | `[CLOSED]` | copyberry[bot]

> 将历史后端中的 `images` 转换为 `input_image` 函数调用输出项。同时确保图片数据不进入日志输出和 post-tool-use hook 响应，并拒绝格式错误的图片附件。

**链接**: https://github.com/openai/codex/pull/41292

---

### 4. ⌨️ 键位冲突检查由动作注册表驱动
**PR #41285** | `[CLOSED]` | copyberry[bot]

> 从共享的运行时动作注册表构建每个上下文的键位冲突检查，替代原先单独维护的动作列表。保留原有上下文验证顺序和错误提示，并新增回归测试。

**链接**: https://github.com/openai/codex/pull/41285

---

### 5. 📊 历史后端强制执行工具输出预算
**PR #41260** | `[CLOSED]` | copyberry[bot]

> 历史和笔记结果已由后端按请求的输出预算限制后再加密，因此客户端不再需要额外限制。此 PR 移除了可能拒绝或截断已有界响应的客户端侧限制。

**链接**: https://github.com/openai/codex/pull/41260

---

### 6. 📡 实时连接元数据中包含线程来源
**PR #41250** | `[CLOSED]` | copyberry[bot]

> 在启动实时 WebSocket 时，向 `x-codex-turn-metadata` 添加 `thread_source` 字段，用于识别实时语音调用的来源。

**链接**: https://github.com/openai/codex/pull/41250

---

### 7. 😴 sleep 工具新增可配置门控
**PR #41243** | `[CLOSED]` | copyberry[bot]

> 新增 `sleep_tool` 特性，可独立于 clock 工具控制 sleep 工具的注册。支持 `model_driven` 和 `always_on` 两种结构化配置模式。

**链接**: https://github.com/openai/codex/pull/41243

---

### 8. 🔄 TUI 迁移至 app-server v2 协议
**PR #10192** | `[CLOSED]` | bolinfest

> 一个持续了 7 个月的大型 PR，将 TUI 从内部 harness 协议迁移到 app-server 协议。`spawn_in_memory_typed()` 函数在 `codex-rs/app-server` 中被引入。该 PR 推动 TUI 架构走向统一。

**链接**: https://github.com/openai/codex/pull/10192

---

### 9. 🔐 模型提供商认证恢复进度透明化
**PR #41239** | `[CLOSED]` | copyberry[bot]

> 当模型提供商刷新过期凭证时，发出 turn 级的认证恢复开始/完成事件。新增 `modelProvider/authRecoveryStarted` 和 `modelProvider/authRecoveryCompleted` 稳定 app-server 事件。

**链接**: https://github.com/openai/codex/pull/41239

---

### 10. 🪟 提升 Windows 沙箱命令的 PowerShell 兼容性
**PR #41227** | `[CLOSED]` | copyberry[bot]

> 修复 Microsoft Store PowerShell 可执行文件对提升权限的沙箱账户不可访问的问题。当本地提权命令的目标是 Store PowerShell 时，会优先选择第一个兼容的副本（如系统 PowerShell）。

**链接**: https://github.com/openai/codex/pull/41227

---

## 功能需求趋势

从近期 Issues 中可提炼出以下社区核心诉求：

**1. TUI 显示控制与可定制性（持续上升）**
- 隐藏工具调用/输出（#18396，28 👍）
- 禁用命令折叠，始终显示（#39903，60 👍）
- 会话中添加目录 `/add-dir`（#11747，45 👍）

**趋势解读**：用户在使用 TUI 深度工作时，希望获得更精细的显示控制权和更灵活的操作方式。TUI 正在从"可用"走向"好用"阶段。

**2. Windows 平台稳定性（爆发式增长）**
- 认证失效循环（#40761、#41136）
- 无头启动、启动挂起（#41179、#41056）
- 沙箱权限问题（#36087、#38425、#38898）
- 静默退出（#40576）

**趋势解读**：Windows 已成为问题重灾区，涉及认证、启动、沙箱、网络等多个子系统。多个问题在 26.8xx 版本中集中爆发，开发者对 Windows 版本的稳定性信心正在下降。

**3. 安全与信任验证（Remote 场景）**
- Windows Remote 信任验证失败（#39855）
- Android→macOS Remote 信任错误（#39678）
- GrapheneOS 被 Remote Control 阻止（#38128）

**趋势解读**：Remote 功能的安全机制在跨平台场景下缺乏足够的兼容性测试，尤其是无项目（projectless）环境下的信任验证逻辑。

**4. GPT-5.6 模型工具调用集成**
- code-mode 握手失败（#32759、#41049、#41255）

**趋势解读**：GPT-5.6 系列模型在 Windows 和 macOS 上均存在 code-mode 集成问题，影响了 exec 工具的正常使用。该问题的解决将直接关系到 5.6 模型的用户体验。

---

## 开发者关注点

**1. 🔴 高频痛点：Windows 认证失效循环**
> "登录成功后 /accounts/{id}/settings 返回 401，然后应用不断重新认证。" — #40761、#41136

**影响面**：Windows 用户登录稳定性最核心的阻塞问题，直接导致应用不可用。涉及 AppServer 通信、Token 管理和 auth 状态同步，多版本反复出现。

**2. 🔴 高频痛点：GPT-5.6 模型 code-mode 握手失败**
> "5.6 模型在 Windows 上无法执行任何命令。" — #41255、#41049、#32759

**影响面**：跨越 Windows/macOS 双平台，影响所有 5.6 系列模型（sol/terra/luna），是当前用户体验最大的技术障碍。

**3. 🟡 中频痛点：桌面端启动异常**
> "打开现有对话时认证被重置。" — #39162 (67 评论)

**影响面**：macOS 打开旧对话丢失认证 + Windows 无窗口启动/挂起/静默退出，构成桌面端"启动-认证"体验的双重负面印象。

**4. 🟡 中频痛点：Remote 信任验证在无项目环境失败**
> "每个新的无项目聊天都会在信任验证阶段失败。" — #39855、#39678

**影响面**：跨设备（Windows、Android）Remote 用户无法在无项目情况下开始新会话。

**5. 🟢 长期诉求：TUI 显示灵活性与会话管理**
> "我想在活跃会话中添加目录，而不是退出重启。" — #11747

**影响面**：TUI 重度用户的日常操作效率，该类需求已持续数月仍然未获正式支持。

---

> **编辑注**：今日的社区动态呈现出明显的"内忧外患"态势——内忧是 Windows 平台系列稳定性问题集中爆发（认证、启动、沙箱），外患是 GPT-5.6 模型工具调用集成在多个平台上受阻。与此同时，PR 侧高频的内部架构迭代表明 OpenAI 正在快速修复问题、加固系统。建议 Windows 用户密切关注 26.820.x 及后续版本的修复进展，如有条件可暂时依赖 CLI（非桌面版）进行日常工作。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-28

## 今日速览

今日发布 `v0.59.0-nightly.20260828` 夜间版本，核心变动集中在 Agent 子代理的稳定性与状态上报机制上。社区讨论热度最高的两个 Bug 均与子代理执行行为相关：一是子代理在达到 `MAX_TURNS` 上限后仍被误报为 `GOAL` 成功，掩盖了实际中断；二是通用代理（generalist agent）在部分场景下无限挂起。此外，社区多个功能性 PR 已进入待合并阶段，涵盖 Git 配置安全修复、扩展环境变量权限控制等主题。

---

## 版本发布

**v0.59.0-nightly.20260828.g3c311beac**

- 常规夜间自动构建版本，包含自昨日以来的累积 Bug 修复与功能改进。
- 完整变更日志：[Compare v0.59.0-nightly.20260827...v0.59.0-nightly.20260828](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260827.g3c311beac...v0.59.0-nightly.20260828.g3c311beac)

---

## 社区热点 Issues（Top 10）

**1. Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption**（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）
- 热议度：13 条评论 | 优先级 P1 | 状态：待重新测试
- 核心问题：子代理（如 `codebase_investigator`）在尚未开始分析前即因达到 `MAX_TURNS` 被终止，却向上层报告 `status: "success"` 与 `Termination Reason: "GOAL"`，导致主代理无法感知实际中断。该问题直接影响了多代理协作的任务可靠性。

**2. Generalist agent hangs**（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）
- 热议度：8 条评论 | 👍 8 | 优先级 P1 | 状态：待重新测试
- 核心问题：`gemini-cli` 一旦委派任务给通用代理便无限挂起，就连创建文件夹这类简单操作也会卡死，用户最长等待达 1 小时。社区给出的临时绕行方案是强制模型不使用子代理。

**3. Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）
- 热议度：8 条评论 | 优先级 P2 | 状态：Bot 已分流
- 核心内容：提案充分利用 Gemini 3 模型天然偏好 POSIX 工具链的特性，建议引入零依赖的 OS 沙箱机制，在保证安全性的前提下最大化模型原生 Bash 操作能力，包含执行后意图路由设计。

**4. Assess the impact of AST-aware file reads, search, and mapping**（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)）
- 热议度：7 条评论 | 优先级 P2 | 状态：Bot 已分流
- 核心内容：EPIC 级别追踪，评估引入 AST 感知的文件读取、检索与代码库映射能力。目标是将方法边界识别收敛为单次工具调用，减少因读取错位导致的 Token 浪费。

**5. Gemini does not use skills and sub-agents enough**（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）
- 热议度：6 条评论 | 优先级 P2 | 状态：待重新测试
- 核心问题：用户反馈 Gemini CLI 几乎不会主动调用自定义 Skills 和子代理，仅在显式指令下才使用。即便存在高度相关的 gradle/git 技能，模型仍倾向从零开始执行。

**6. Stop Auto Memory from retrying low-signal sessions indefinitely**（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）
- 热议度：5 条评论 | 优先级 P2 | 状态：Bot 已分流
- 核心问题：Auto Memory 后台提取代理遇到低价值会话时选择跳过，但这些会话在索引中不会标记为“已处理”，导致同一批低价值会话被反复重试，浪费后台资源。

**7. Add deterministic redaction and reduce Auto Memory logging**（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）
- 热议度：4 条评论 | 优先级 P2 | 领域：安全
- 核心问题：Auto Memory 在读取本地会话转录时，会将内容发送给提取模型后才执行脱敏指令，存在敏感信息已进入模型上下文的安全风险。同时系统日志可能记录已有技能定义，建议增加确定性脱敏并减少日志输出。

**8. Shell command execution gets stuck with "Waiting input" after command completes**（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）
- 热议度：4 条评论 | 👍 3 | 优先级 P1 | 状态：Bot 已分流
- 核心问题：极简的 CLI 命令执行完成后，Gemini CLI 仍显示命令处于活动状态并停留在“等待用户输入”，导致整体流程卡死。该问题可稳定复现，对日常开发效率影响较大。

**9. browser subagent fails in wayland**（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）
- 热议度：4 条评论 | 优先级 P1 | 领域：浏览器代理
- 核心问题：在 Wayland 显示协议环境下，`browser_agent` 直接失败退出，终止原因为 `GOAL`，但实际并未完成任何任务。该问题影响 Linux 用户在 Wayland 下的正常使用。

**10. Enhance browser_agent resilience: Automatic session takeover and lock recovery**（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）
- 热议度：4 条评论 | 优先级 P3 | 状态：Bot 已分流
- 核心内容：建议提升 `browser_agent` 的容错能力。当前 `BrowserManager.ts` 在遇到锁定的浏览器配置档案时采用“快速失败”策略，建议改为自动接管会话或恢复孤儿进程锁。

---

## 重要 PR 进展（Top 10）

**1. fix(core): drop unsafe `diff.external` override**（[#28930](https://github.com/google-gemini/gemini-cli/pull/28930)）
- 优先级 P1 | 状态：OPEN
- 修复内容：移除 `defaultGitOverrides` 中不安全的 `diff.external` 空值配置。Git 不会将空值解析为“禁用外部 diff”，该覆盖可能导致意外行为，修复后回归安全默认。

**2. fix(core): keep GIT_CONFIG_* environment triplets internally consistent**（[#28938](https://github.com/google-gemini/gemini-cli/pull/28938)）
- 优先级 P1 | 状态：OPEN
- 修复内容：防止经脱敏处理的 `GIT_CONFIG_*` 环境变量因编号对不完整而无法被 Git 解析，同时确保 `ShellExecutionService` 不会在脱敏后恢复敏感 Git 配置值。

**3. fix(core): avoid persisting interrupted response placeholder**（[#28939](https://github.com/google-gemini/gemini-cli/pull/28939)）
- 优先级 P1 | 状态：OPEN
- 修复内容：修复因工具响应轮次中断后，系统将“[The previous response was interrupted before it completed.]”作为合成模型响应持久化的问题，避免模型后续重复该占位符导致会话污染。

**4. fix(core): route read_file content through FileSystemService**（[#29110](https://github.com/google-gemini/gemini-cli/pull/29110)）
- 领域：Agent | 状态：OPEN
- 修复内容：`read_file` 此前绕过 `FileSystemService` 直接从本地磁盘读取，与 `write_file`、`replace` 不一致。修复后统一走注入文件系统服务，确保 ACP 客户端（如远程文件系统）正常工作。

**5. fix(core): enforce fail-closed workspace trust and filter mcpServers in restricted mode**（[#29099](https://github.com/google-gemini/gemini-cli/pull/29099)）
- 状态：OPEN
- 修复内容：在 `@google/gemini-cli-a2a-server` 的不可信或受限环境中，强制采用“默认拒绝”的工作区信任解析，并过滤掉仓库自定义的 `mcpServers`，避免服务启动时发生非预期进程执行。

**6. Feat/evals tools expansion**（[#28804](https://github.com/google-gemini/gemini-cli/pull/28804)）
- 状态：CLOSED
- 功能内容：为 `read_many_files`、`get_internal_docs`、`list_mcp_resources` 和 `read_mcp_resource` 新增行为评估（behavioral evals），扩充工具行为验证覆盖面。

**7. fix(extensions): prompt for consent on environment changes and sanitize runtime-altering environment variables**（[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)）
- 状态：OPEN
- 修复内容：修复扩展更新可绕过用户同意检查并向 MCP 服务器进程注入未授权环境变量的问题，将服务器环境配置纳入同意字符串生成逻辑，并对自定义环境变量进行净化。

**8. fix(cli): use strict boolean parsing for DEBUG env var in sandbox launcher**（[#28942](https://github.com/google-gemini/gemini-cli/pull/28942)）
- 状态：OPEN
- 修复内容：沙箱启动器原先用 JavaScript 字符串真值判断处理 `DEBUG` 环境变量，导致 `DEBUG=false`、`DEBUG=0` 被误判为开启调试。改为严格布尔解析，修复相关三处可观测 Bug。

**9. docs: add Windows longpaths setup instructions to CONTRIBUTING.md**（[#28926](https://github.com/google-gemini/gemini-cli/pull/28926)）
- 状态：OPEN
- 功能内容：为 Windows 开发者补充 `core.longpaths=true` 配置说明，解决因快照文件嵌套过深超过 `MAX_PATH` 限制导致的克隆失败问题（约产生 3000 个脏暂存文件）。

**10. feat(cli): add [Skill] tag to slash command autocomplete suggestions and help**（[#29104](https://github.com/google-gemini/gemini-cli/pull/29104)）
- 优先级 P2 | 状态：OPEN | 标注 `help wanted`
- 功能内容：在 `/` 自动补全菜单和 `/help` 输出中为技能型斜杠命令添加 `[Skill]` 标签，与现有 `[MCP]`、`[Agent]` 视觉标识保持一致，帮助用户快速区分命令来源。

---

## 功能需求趋势

从近 24 小时更新的 Issue 与 PR 中可以提炼出以下社区最关注的功能方向：

**1. 子代理（Subagent）行为可靠性与可观测性**
- 核心 Bug 集中在子代理状态误报（#22323）、无限挂起（#21409）、技能调用主动性不足（#21968）。
- 用户期望子代理轨迹可通过 `/chat share` 对外分享，便于评估与调试（#22598）。
- 方向：提升多代理协作的透明度与容错能力。

**2. 上下文管理与 Token 效率优化**
- “Tactful Extraction” 逻辑（#19561）与 AST 感知代码库映射（#22745、#22746）均指向同一目标：减少大文件读取造成的 Token 洪泛，实现“外科手术式”精准读取。
- 方向：建立 grep → 精确读取 → 方法级提取的分层发现机制。

**3. 沙箱安全与权限管控**
- 安全类提案涵盖零依赖 OS 沙箱（#19873）、工作区信任强制收敛（#29099）、Git 配置环境一致性（#28938）、扩展环境变量注入防护（#28863）。
- 方向：在模型原生 Bash 能力与用户安全之间寻求平衡。

**4. Auto Memory 质量与隐私改进**
- 多篇 Issue 聚焦 Auto Memory 系统的重试风暴（#26522）、静默跳过无效补丁（#26523）、脱敏滞后（#26525）等问题。
- 方向：提升自动记忆提取的可靠性、安全性与可观测性。

**5. 浏览器代理（Browser Agent）稳定性**
- Wayland 环境失败（#21983）、配置覆盖失效（#22267）、会话锁死（#22232）构成一组完整的浏览器代理易用性短板。
- 方向：跨平台适配与会话生命周期管理。

---

## 开发者关注点

**高频痛点：**

- **子代理误报成功**：`MAX_TURNS` 被打断却上报 `GOAL` 成功，直接导致外层任务错误判定完成状态，严重削弱多代理架构的可信度。
- **无限挂起**：通用代理与部分 Shell 命令（#25166）在无用户交互场景下偶发永久阻塞，用户被迫手动取消，影响自动化流水线。
- **工具与技能利用率不足**：模型默认不主动调用自定义 Skills，需反复显式指令才能触发，社区强烈期望提升模型对既有工具资产的主动调度能力。
- **Windows/Wayland 等环境适配缺口**：`MAX_PATH` 限制、Wayland 显示协议兼容等平台问题持续消耗开发者时间。

**高频需求：**

- 子代理执行轨迹可视化与可分享（`/chat share` 集成）
- AST 感知代码检索与读取
- 确定性脱敏与敏感信息保护
- 严格的布尔环境变量解析与 Git 配置一致性
- 技能类斜杠命令的显式标识与可发现性

---
*日报数据抓取时间：2026-08-28，数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-28**


## 今日速览

v1.0.81 于昨日正式发布，为所有用户带来了插件仪表盘（Plugins Dashboard），并同步了 MCP 2026-07-28 规范支持；与此同时，v1.0.82-0 已进入预发布通道。社区反馈方面，Issue 数量在近24小时内显著上升，多个 Triage 状态的新问题集中爆发，核心痛点集中在：**多模型支持场景下的兼容性 Bug（如 Grok/GLM）**、**Session 恢复（--resume）时的功能缺失**、以及**长期运行后的资源耗尽与 UI 冻结**问题。


## 版本发布

### v1.0.81（正式版，2026-08-27）
- **插件仪表盘全面开放**：所有用户均可使用 `/plugin`、`/mcp`、`/skills` 命令；可通过环境变量 `PLUGINS_DASHBOARD=false` 选择退出。
- **MCP 规范同步**：CLI、SDK、IDE 及内存客户端全面支持 MCP 2026-07-28 版本。
- **可观测性增强**：Hooks 现在可以接收当前的 OpenTelemetry 上下文。

### v1.0.82-0（预发布）
- 仅标注 "Fixes and changes"，具体内容待社区验证。


## 社区热点 Issues（Top 10）

### 1. 企业数据驻留（GHEC）下 `-p` 模式认证失败 ️
**#4527** | 👍 3 | 评论 2 | 更新 08-28
[链接](https://github.com/github/copilot-cli/issues/4527)

**要点：** 自 v1.0.81-1 起，非交互式模式（`copilot -p`）在启用了数据驻留的企业租户上启动时直接报 401 认证失败，而交互式模式却完全正常。

**重要性：** 严重阻碍了依赖 `-p` 模式进行脚本化/CI 调用的企业用户。根因指向模型目录获取时错误地请求了 `api.githubcopilot.com` 而非租户专属端点。

### 2. `store_memory` 功能在 1.0.81 预发布版中完全失效
**#4535** | 评论 7 | 更新 08-28
[链接](https://github.com/github/copilot-cli/issues/4535)

**要点：** 原生内存写入器在调用时未携带必需的 Instance ID，导致 `store_memory` 在 1.0.81 的预发布版中持续报错。

**重要性：** 上下文记忆是 Agent 核心能力之一。该问题影响所有使用预发布版的开发者，且已持续 8 天，社区关注度较高。

### 3. 并行子代理导致终端 UI 完全冻结
**#4533** | 评论 4 | 更新 08-28
[链接](https://github.com/github/copilot-cli/issues/4533)

**要点：** 当一次 Turn 启动并行子代理时，终端 UI 停止消费运行时事件，输入和滚动均失效。但 Rust 运行时不受影响，子代理仍会在后台继续运行并消耗 Tokens。

**重要性：** 这是一个极其影响体验的 Bug——看起来像"卡死"，实际却在后台持续消耗配额，容易造成用户困惑和资源浪费。

### 4. 文件监视（FileWatch）事件风暴导致日志膨胀至 13GB
**#4612** | 👍 1 | 评论 6 | 更新 08-27
[链接](https://github.com/github/copilot-cli/issues/4612)

**要点：** 长时间运行/恢复的会话可能陷入死循环，持续输出 `No connection accepted a host event {"kind":"FileWatch"}` 调试日志，最终导致调试日志膨胀至 13GB 并冻结 TUI。

**重要性：** 磁盘空间耗尽风险极高，且触发条件似乎是随机性的，对长期运行的开发者极不友好。

### 5. 输入框背景变黑、文字几乎不可见
**#4648** | 评论 1 | 更新 08-28
[链接](https://github.com/github/copilot-cli/issues/4648) （新）

**要点：** 会话中途，命令输入框背景异常变为纯黑色，导致文字对比度极低。终端 reset 无法修复。

**重要性：** 今日新增的渲染层 Bug，影响可读性，推测与 TUI 主题/状态管理有关。

### 6. v1.0.81 破坏 chroma-mcp 兼容性
**#4647** | 评论 1 | 更新 08-28
[链接](https://github.com/github/copilot-cli/issues/4647) （新）

**要点：** 从 v1.0.80 升级到 v1.0.81 后，与 `chroma-mcp` 的集成完全断开。

**重要性：** 暗示 v1.0.81 中 MCP 协议实现可能存在破坏性变更，需要关注升级兼容性。

### 7. 事件存储耗尽后触发无限重试风暴，导致 Node OOM
**#4639** | 评论 1 | 更新 08-27
[链接](https://github.com/github/copilot-cli/issues/4639)

**要点：** 远端事件存储耗尽后，导出器进入无限重试循环（每次尝试刷新 500 个事件），进程持续报内存压力，频繁触发 GC/紧急压缩，最终 Node 进程 OOM。

**重要性：** 揭示了事件导出机制在背压/错误处理上的缺陷，可能导致长时间运行任务中途崩溃、所有工作丢失。

### 8. 模型上下文窗口计算错误：显示值虚高
**#4638** | 更新 08-27
[链接](https://github.com/github/copilot-cli/issues/4638) （新）

**要点：** 模型详情页将 `max_prompt_tokens` 与 `max_output_tokens` 直接相加来估算总上下文窗口，但这两者是独立的，总和可能远超实际的 `max_context_window_tokens`。

**重要性：** 误导用户对模型能力的判断，可能导致上下文超限失败，属信息展示正确性问题。

### 9. Compaction 在低上下文占用（如 20%）时错误触发
**#4643** | 更新 08-27
[链接](https://github.com/github/copilot-cli/issues/4643) （新）

**要点：** `gpt-5.6-sol` 模型在上下文使用率仅为 20% 时就被 Compaction，且系统提示"已添加检查点"，但 `/session checkpoints` 查询却显示无任何检查点。

**重要性：** 逻辑矛盾，既浪费 Tokens 又造成困惑，用户无法验证 Compaction 是否真实发生。

### 10. 恢复会话时插件 Hooks 全部丢失
**#4629** | 评论 1 | 更新 08-27
[链接](https://github.com/github/copilot-cli/issues/4629)

**要点：** 使用 `--resume` 恢复会话时，插件提供的 Hooks 完全未加载（新会话正常，同一目录、同一 session id 下恢复则全部丢失）。

**重要性：** 严重影响依赖 Hooks 注入工作流（如自动添加审查者）的开发者，恢复会话后行为与预期不一致。


## 功能需求趋势

- **插件系统深化**：围绕插件/Hooks/Marketplace 的 Issue 增多（#4629、#4640），社区对插件机制的完整性和一致性要求越来越高，包括 Hook 触发时机、会话恢复加载等。
- **MCP 兼容性**：MCP 相关 Bug 持续高频（#4647、#3576、#1385），v1.0.81 的 MCP 更新可能引入新的破坏性变更，社区对 MCP 的可靠性、规范遵循度（如分页、参数模板）有强烈关注。
- **会话生命周期管理**：`--name` 创建或恢复会话（#4642）、`session.resume` 模型参数覆盖（#4645）等需求显现，说明社区希望获得更顺畅的会话切换与恢复体验。
- **可观测性与排查能力**：官方 JSON Schema 发布（#4641）、会话检查点审计（#4621）、Hook 触发记录等，反映开发者对"可审计、可追溯"的强烈需求。


## 开发者关注点

- **稳定性压倒一切**：大量 Issue 集中指向"长时间运行后资源耗尽"（#4639、#4612）、"UI 冻结"（#4533、#4612）等问题。开发者的共同痛点是：CLI 在高负载或长时间场景下缺乏自我保护机制，一旦出问题极易导致工作丢失或机器资源被耗尽。
- **模型支持广度与深度不足**：自定义模型（GLM via OpenRouter）出现 Compaction 失败（#4646）；Grok/Gemini 的 Tool Search 标记异常（#4649）。开发者在尝试多模型时，对模型兼容性和差异化管理（如上下文窗口、工具调用约束）的诉求非常明确。
- **配置与环境的"隐形"坑**：GHEC 数据驻留切换导致认证失效（#4527）、企业策略禁用 MCP 服务器信息不透明（#4650）、插件路径静默认证失败（#4556）——这些"配置时正常、部署时失败"的问题严重消耗开发者排障精力。
- **高频痛点词云**：`store_memory` 失败、`FileWatch` 事件循环、`Compaction` 失效、`--resume` Hook 丢失、`-p` 模式认证失败。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-28

> 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 统计周期：过去24小时

---

## 今日速览

今日社区聚焦于 **Plan 模式下 Agent 死循环调工具** 这一新上报的严重 Bug（#2623），以及 **API content 字段往返校验失败** 的尖锐吐槽（#2621，获 👍）。PR 方面，`asyncssh` 安全漏洞修复（#2622）与 `StrReplaceFile` 对非 UTF-8 文件的保护（#2595）值得关注。无新版本发布。

---

## 社区热点 Issues

> 以下从今日更新的 6 个 Issue 中选取 **全部** 进行展示（不足 10 个以实际为准）。

### 1. [#2623] Plan mode: agent loops indefinitely on Bash echo / ReadFile instead of writing plan
- **状态**: OPEN | **作者**: zheng001001001 | **更新**: 2026-08-28 | **评论**: 1 | 👍 0
- **版本/模型**: v0.38.0 / K3 / Linux
- **链接**: [Issue #2623](https://github.com/MoonshotAI/kimi-cli/issues/2623)

**摘要**：Plan 模式下，模型在探索完成后不执行 `ExitPlanMode` 写计划，而是死循环地调用 `Bash echo` 和 `ReadFile` 等工具。

**分析**：这是典型的 **Agent 工具循环失控** 问题。模型在 `Plan` 阶段陷入“探索→再探索”的循环而无法收敛到 `ExitPlanMode`，直接导致用户无法生成计划。K3 模型在复杂文件树下的工具调用策略可能存在缺陷（如缺少最大迭代次数或探索完成后的强制收敛逻辑）。社区目前仅有 1 条评论，但该问题若复现率高，将严重影响 Plan 模式可用性。

---

### 2. [#2621] 开发 Kimi API 都是吃 **** 的吗？（API content 为空导致 400 错误）
- **状态**: OPEN | **作者**: Valen-akm | **更新**: 2026-08-27 | **评论**: 0 | 👍 1
- **链接**: [Issue #2621](https://github.com/MoonshotAI/kimi-cli/issues/2621)

**摘要**：开发者强烈吐槽：模型调用工具时返回的 `content` 为空，当把该消息原样传回 API 时收到 `400: text content is empty`。

**分析**：这是一个 **API 往返兼容性** 问题。模型返回的 Tool Call 消息 `content` 为空是合法的，但 API 在接收时却拒绝空 `content` 的 Tool Call 消息，前后端校验不一致。开发者被迫自行编写逻辑删除空的 `content` 字段才能绕开。社区情绪较为强烈（措辞激烈），反映出该问题已造成实际开发阻碍，且 **kimi-cli 自身也通过补丁绕过了此问题**，意味着 CLI 与 API 之间存在已知的兼容性补丁，但未彻底在 API 侧修复。

---

### 3. [#1211] [Bug] Notion Remote MCP creds are not stored beyond active session
- **状态**: CLOSED | **作者**: ghost | **创建**: 2026-02-23 | **更新**: 2026-08-28 | **评论**: 3
- **版本**: v1.12.0 | **平台**: macOS (MacBook Air M4)
- **链接**: [Issue #1211](https://github.com/MoonshotAI/kimi-cli/issues/1211)

**摘要**：Notion Remote MCP 的凭证仅在当前会话有效，未持久化存储，重启后需要重新认证。

**分析**：老 Issue 于今日关闭，说明 **MCP 凭证持久化问题** 在近期版本中已得到解决。该问题困扰用户近 6 个月，关闭意味着修复方案已合入主分支。

---

### 4. [#1272] [Enhancement] JetBrains AI Assistant 中使用 ACP 调用 Kimi 不能识别拖动文件
- **状态**: CLOSED | **作者**: yuweni99 | **创建**: 2026-02-27 | **更新**: 2026-08-28
- **链接**: [Issue #1272](https://github.com/MoonshotAI/kimi-cli/issues/1272)

**摘要**：在 JetBrains AI Assistant 中，将文件拖入输入框后，Kimi 无法识别该文件，必须手动在提示词中给出完整文件路径才能处理。

**分析**：这是 **IDE 集成（ACP 协议）** 层面的文件上下文传递缺陷。该 Issue 已于今日关闭，表明 ACP 通道的文件携带功能已修复或已支持通过显式路径方式处理。JetBrains 用户的工作流顺畅度将得到提升。

---

### 5. [#1279] [Enhancement] Feature Request: Native git-ai integration for AI code attribution
- **状态**: CLOSED | **作者**: deshes | **创建**: 2026-02-27 | **更新**: 2026-08-28
- **链接**: [Issue #1279](https://github.com/MoonshotAI/kimi-cli/issues/1279)

**摘要**：请求原生支持 [git-ai](https://git-ai.com) 标准，让开发者通过 `git blame` 区分 AI 生成代码与人工编辑代码。

**分析**：AI 代码溯源/标注是重要方向。该 Issue 已关闭，虽然未明确关闭原因（可能被移动到 roadmap 或已实现），但反映出社区对 **AI 代码可追溯性** 的需求已进入官方视野。

---

### 6. [#2624] docs: openai_legacy hosted /v1 example (not openai_responses, not /login)
- **状态**: OPEN | **作者**: cursor[bot] | **创建**: 2026-08-28 | **更新**: 2026-08-28 | 评论: 0
- **链接**: [Issue #2624](https://github.com/MoonshotAI/kimi-cli/issues/2624)

**摘要**：文档改进请求。`openai_legacy`（Chat Completions 协议）的接入示例不够清晰，特别是 `type` 字段必须设为 `openai_legacy`，而非 `openai_responses`，且路径为 `/v1` 而非 `/login`。

**分析**：这是 **第三方协议兼容性** 文档的易错点。对于自建网关/代理用户，`openai_legacy` vs `openai_responses` 容易混淆，文档补充示例有助于降低接入门槛。

---

## 重要 PR 进展

> 以下为今日更新的 3 个 PR（全部展示）。

### 1. [#2622] deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f)
- **状态**: OPEN | **作者**: katsugtgz | **更新**: 2026-08-28
- **链接**: [PR #2622](https://github.com/MoonshotAI/kimi-cli/pull/2622)

**摘要**：将 `pykaos` 工作区中的 `asyncssh` 依赖从 2.21.1 升级至 2.23.1，以修复 GHSA-2wxc-x7rj-hg8f 和 GHSA-qr67-gv47-xwwh 两个安全漏洞。

**分析**：**安全修复类 PR**。`asyncssh` 是 `pykaos` 包（Kaos 工作区）的 SSH 库，两个漏洞均与 SSH 协议实现相关，建议尽快合入并发布新版本，否则使用 `pykaos` 组件的用户将暴露于已知安全风险中。

---

### 2. [#2176] fix(hooks): extract text from ContentPart for UserPromptSubmit hook
- **状态**: OPEN | **作者**: tears-mysthrala | **创建**: 2026-05-07 | **更新**: 2026-08-27
- **链接**: [PR #2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)

**摘要**：修复 `UserPromptSubmit` 钩子在 `user_input` 为 `list[ContentPart]`（所有消息的默认类型）时，`prompt` 和 `matcher_value` 为空字符串的问题。

**分析**：**Hook 系统缺陷修复**。`UserPromptSubmit` 钩子原本只处理 `str` 类型的输入，对 `ContentPart` 列表会退化为空字符串，导致基于正则匹配的钩子全部失效。该 PR 修复了 `ContentPart` 的文本提取逻辑，对依赖自定义钩子的高级用户很重要。

---

### 3. [#2595] fix(StrReplaceFile): refuse to edit files that are not valid UTF-8
- **状态**: OPEN | **作者**: shoemoney | **创建**: 2026-08-06 | **更新**: 2026-08-27
- **链接**: [PR #2595](https://github.com/MoonshotAI/kimi-cli/pull/2595)

**摘要**：`StrReplaceFile` 工具在编辑文件时使用 `errors="replace"` 解码，导致非 UTF-8 字节被替换为 U+FFFD（�），写回后损坏原文件。该 PR 改为**拒绝编辑非 UTF-8 文件**。

**分析**：**数据安全修复**。原实现会将文件中的任意非 UTF-8 字节（即使不位于编辑位置）替换为 U+FFFD，造成不可逆损坏。修复后直接报错，避免静默破坏二进制/非 UTF-8 文件。对处理多字节编码（如 GBK）或混合编码文件的用户至关重要。

---

## 功能需求趋势

结合今日及近期 Issues，社区关注的功能方向如下：

| 方向 | 相关 Issues | 趋势信号 |
|------|------------|----------|
| **IDE 集成与协议兼容** | #1272（JetBrains/ACP 文件识别）、#2624（openai_legacy 文档） | JetBrains 集成问题已闭环；协议文档持续完善中 |
| **MCP（Model Context Protocol）** | #1211（Notion Remote MCP 凭证持久化） | 凭证持久化问题已解决，MCP 存储可靠性提升 |
| **AI 代码溯源与归因** | #1279（git-ai 集成） | 虽已关闭，但该功能需求长期存在，社区希望追踪 AI 代码占比 |
| **Plan 模式可靠性** | #2623（Plan 模式死循环） | **新增严重 Bug**，Agent 工具循环收敛是当前重点关注方向 |
| **API 往返一致性** | #2621（空 content 400 错误） | 表示 API 层校验与模型输出存在矛盾，开发者需要额外兼容代码 |

---

## 开发者关注点

1. **Agent 工具循环不可控（最高优先级）**：Plan 模式下模型死循环调用 `Bash echo` / `ReadFile` 而不写计划，直接阻碍 Plan 功能核心流程。开发者需要官方在工具调用次数上限或收敛策略上进行改进。

2. **API 前后端校验不一致**：模型返回的合法消息（如 Tool Call 的空 `content`）被 API 拒绝（400），开发者被迫编写额外兼容逻辑。这类问题会显著增加集成成本。

3. **文件编辑存在数据损坏风险**：`StrReplaceFile` 对非 UTF-8 文件的静默破坏（U+FFFD 替换）虽然已有 PR 修复，但反映了 CLI 工具在文件 I/O 处理上对编码边界情况的考虑不足。

4. **安全依赖升级滞后**：`asyncssh` 的 GHSA 漏洞修复 PR（#2622）尚未合入，使用 `pykaos` 组件的用户需关注版本发布节奏，及时跟进安全更新。

---

> 今日数据 | TIPS：关注 #2623（Plan 死循环）的后续评论，该问题可能影响 0.38.0 版本用户的 Plan Mode 核心体验；同时留意 #2622（asyncssh 安全修复）的合入情况，涉及安全风险。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-28

## 今日速览

今日 OpenCode 发布 v1.18.24/v1.18.25 两个补丁版本，修复了 Azure 认证（现已支持通过 Azure CLI 使用 Microsoft Entra ID 登录）及 Bedrock 推理响应缓存问题。社区讨论焦点集中在 Go 套餐计费/配额显示不一致（多个 issue 指向同一问题）以及 TUI 在 GNU Screen/tmux 等终端下的兼容性缺陷。bug 修复方面，社区贡献者 skyzhao1223 集中提交了多个针对 V2 核心工具（glob/edit/webfetch/grep）的修复 PR。

## 版本发布

**v1.18.25**（最新）
- 修复 Azure 认证：Azure CLI 登录不再需要 Bun

**v1.18.24**
- 修复 Bedrock 推理响应被错误缓存为不可重放空消息的问题
- Azure 提供方现可通过 Azure CLI 使用 Microsoft Entra ID 登录，无需 API key
- V1 开始读取支持的 V2 配置字段，兼容新版配置文件

---

## 社区热点 Issues（10 个）

### 1. Go 套餐计费/配额显示异常（多个 issue 集中爆发）
- [#38255 Discrepancy between different opencode go usage dashboard](https://github.com/anomalyco/opencode/issues/38255) — 月限额显示 100% 但明细仅 $10，数据矛盾（10 评论）
- [#41206 OpenCode Go weekly/monthly quota does not match usage history](https://github.com/anomalyco/opencode/issues/41206) — 配额与用量历史不一致（4 评论）
- [#45858 Go 套餐用量明细页百分比显示错误](https://github.com/anomalyco/opencode/issues/45858) — 用量 $17.87/$30 应显示 59.6% 却显示 54.1%（3 评论）
- [#45897 涉嫌虚假宣传，一周 30 刀实际只有 7.5 刀](https://github.com/anomalyco/opencode/issues/45897) — 用户对配额宣传与实际不符表达不满（2 评论）
- [#45899 opencode go 套餐额度有误](https://github.com/anomalyco/opencode/issues/45899) — 9.47/60 应为 15.79% 却显示 45.5%（1 评论）

**为什么重要**：Go 套餐是 OpenCode 商业化核心产品，多个用户报告配额计算和显示存在系统性偏差，涉及计费信任问题。且上述 issue 今日均有更新，说明官方正在关注。另有 [#45907 付费成功但订阅未激活](https://github.com/anomalyco/opencode/issues/45907) 和 [#45893 订阅后仍被限流](https://github.com/anomalyco/opencode/issues/45893) 等支付链路问题。

### 2. [#785 Is there a way to disable streaming mode?](https://github.com/anomalyco/opencode/issues/785)
- **评论 33 | 👍 38 | 状态 OPEN**
- 创建于 2025-07-08，至今仍开放，今日有更新。用户代理不支持流式响应，希望提供关闭 streaming 的选项。
- **重要性**：历史最久且讨论最多的 issue 之一，影响代理/网关类用户，属长期未解决需求。

### 3. [#6536 [FEATURE]: Mobile App](https://github.com/anomalyco/opencode/issues/6536)
- **评论 16 | 👍 49 | 状态 CLOSED**
- 用户希望有移动端 App 而非依赖浏览器，获得 49 个 👍，表明需求强烈。虽已关闭，今日仍有更新，可能是官方给出结论或转至其他跟踪渠道。

### 4. [#21658 [FEATURE]: Azure AI Foundry Microsoft Entra (OAuth) authentication](https://github.com/anomalyco/opencode/issues/21658)
- **评论 4 | 👍 10 | 状态 OPEN**
- 与今日 v1.18.24 的 Azure CLI/Entra ID 登录支持直接相关。该 issue 提出于 4 月，今日更新说明社区在验证新版本是否满足需求。

### 5. [#32985 opencode does not work well inside GNU Screen](https://github.com/anomalyco/opencode/issues/32985)
- **评论 4 | 👍 3 | 状态 OPEN**
- GNU Screen 下无真彩色、复制粘贴异常、鼠标不支持。终端兼容性类问题持续积累（另有 [#45871 tmux from ConnectBot 滚动失效](https://github.com/anomalyco/opencode/issues/45871)）。

### 6. [#45867 Muse Spark 1.2 intermittent prompt cache miss on Zen Go](https://github.com/anomalyco/opencode/issues/45867)
- **评论 5 | 状态 OPEN**
- 今日新建，报告 Zen Go Responses API 上 muse-spark-1.2 模型间歇性 prompt cache miss，附有时间戳和 session 信息。

### 7. [#33940 Undo in one session reverts all sessions](https://github.com/anomalyco/opencode/issues/33940)
- **评论 4 | 👍 2 | 状态 OPEN**
- 多会话并行工作时，对单个会话执行 /undo 会回滚所有会话的变更。多会话隔离问题再次被提及（今日另有 [#45874 跨会话 diff 卡片泄漏](https://github.com/anomalyco/opencode/issues/45874)）。

### 8. [#38550 [FEATURE]: Manual todo management](https://github.com/anomalyco/opencode/issues/38550)
- **评论 4 | 👍 2 | 状态 OPEN**
- 用户希望手动管理 todo 列表，当前只能由 agent 修改。涉及 agent 行为可控性的核心需求。

### 9. [#45875 Windows ARM64 native builds fail](https://github.com/anomalyco/opencode/issues/45875)
- **评论 2 | 状态 OPEN**
- 今日新建，Windows ARM64 原生构建失败：bun:ffi 在稳定版 Bun 不可用、bun-pty 仅提供 x64 DLL。与 PR #45878/#45877（Bun 1.4.0 bump 和 windows-arm64 安装支持）直接对应。

### 10. [#45910 glob (V2) drops the truncation flag](https://github.com/anomalyco/opencode/issues/45910)
- **评论 1 | 状态 OPEN**
- V2 glob 工具丢失截断标记，模型无法知道结果是否被 limit 截断。同作者今日连续提交多个 glob/edit/webfetch 相关 bug（[#45911 glob 不匹配隐藏文件](https://github.com/anomalyco/opencode/issues/45911)、[#45912 apply_patch 强制添加尾随换行](https://github.com/anomalyco/opencode/issues/45912)等），说明 V2 工具链仍有较多边缘 case 待修。

---

## 重要 PR 进展（10 个）

### 1. [#45898 fix(core): require external_directory approval when glob searches outside the Location](https://github.com/anomalyco/opencode/pull/45898)
- **作者**：skyzhao1223 | **状态**：OPEN
- V2 glob 工具缺少目录包含检查，绝对路径或 `..` 可越界访问。此 PR 增加外部目录权限审批。**安全相关，优先级高**。

### 2. [#45894 fix(edit): write newString literally instead of expanding $ replacement patterns](https://github.com/anomalyco/opencode/pull/45894)
- **作者**：skyzhao1223 | **状态**：OPEN
- edit 工具将 newString 直接传给 `String.replace()`，导致 `$\&`、`$'` 等被解释为替换模式。修复为字面写入。

### 3. [#45888 fix(core): match LF regions of mixed-ending files in edit](https://github.com/anomalyco/opencode/pull/45888)
- **作者**：skyzhao1223 | **状态**：OPEN
- 修复混合行尾文件中 edit 无法匹配的问题。read 工具剥离 `\r` 但 edit 工具将整个文件判定为 CRLF，导致模型看到的内容无法匹配。

### 4. [#45903 fix(webfetch): decode responses using the declared charset](https://github.com/anomalyco/opencode/pull/45903)
- **作者**：skyzhao1223 | **状态**：OPEN
- webfetch 始终按 UTF-8 解码，忽略 Content-Type 的 charset 和 HTML meta charset，GBK 等页面出现乱码。关闭 #45902。

### 5. [#45906 fix(webfetch): convert application/xhtml+xml responses](https://github.com/anomalyco/opencode/pull/45906)
- **作者**：skyzhao1223 | **状态**：OPEN
- webfetch 接受 `application/xhtml+xml` 但 convert 只处理 `text/html`，XHTML 页面返回原始 XML。关闭 #45905。

### 6. [#45886 fix(core): keep captured output in bash timeout settlement](https://github.com/anomalyco/opencode/pull/45886)
- **作者**：skyzhao1223 | **状态**：OPEN
- 命令超时时仅返回静态提示，超时前已捕获的部分输出丢失。修复后保留部分输出。

### 7. [#45882 fix(core): strip trailing newlines from grep line previews](https://github.com/anomalyco/opencode/pull/45882)
- **作者**：skyzhao1223 | **状态**：OPEN
- ripgrep JSON 输出中行文本包含尾随换行（CRLF 文件为 `\r\n`），导致 grep 工具输出中每个匹配行都多出空白行。

### 8. [#45883 fix(core): normalize unprefixed AI SDK packages in provider config](https://github.com/anomalyco/opencode/pull/45883)
- **作者**：nitishagar | **状态**：OPEN
- V2 provider 配置中 AI SDK npm 包缺少 `aisdk:` 前缀时，仅在发送提示时才报错。应尽早给出明确错误。

### 9. [#45887 perf(tui): make session switching independent of transcript length](https://github.com/anomalyco/opencode/pull/45887)
- **作者**：nitishagar | **状态**：OPEN
- 优化 TUI 会话切换性能，使其与转录长度解耦。V2 当前已同步最新页并限制 20 条，此 PR 进一步改进。

### 10. [#44946 chore: bump embedded Bun to 1.4.0](https://github.com/anomalyco/opencode/pull/44946)
- **作者**：AlexanderWillner | **状态**：OPEN
- 将 Bun 从 1.3.14 升级到 1.4.0。Bun 1.3.14 在 windows-aarch64 上编译掉了 `bun:ffi`，导致 Windows ARM64 原生构建失败（对应 issue #45875）。

---

## 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **计费与配额透明度** | #38255、#41206、#45858、#45897、#45899、#45907、#45893 | 🔥🔥🔥 今日最热，多个用户集中反馈 |
| **终端兼容性** | #32985（GNU Screen）、#45871（tmux/ConnectBot）、#45875（Windows ARM64） | 🔥🔥 跨平台终端适配问题持续积累 |
| **认证方式扩展** | #21658（Azure Entra ID，已部分落地）、#785（关闭 streaming 模式） | 🔥 企业级认证需求 |
| **移动端支持** | #6536（Mobile App，49 👍 已关闭待跟踪） | 🔥 用户呼声高但官方可能暂缓 |
| **多会话隔离与状态管理** | #33940（undo 影响所有会话）、#45874（跨会话 diff 泄漏）、#38550（手动 todo） | 🔥 agent 行为可控性需求 |
| **V2 工具链完善** | #45910、#45911、#45912（glob/edit/apply_patch 系列 bug） | 🔥 社区贡献者集中修复 V2 工具边缘 case |

---

## 开发者关注点

1. **计费数据可信度告急**：仅今日就有 7 个 issue 与 Go 套餐计费/配额/支付相关。用量计算不一致、百分比错误、付费后未激活、订阅后仍被限流——这些问题直接动摇用户对商业服务的信任，建议官方优先核查并统一回复。

2. **V2 工具链边缘 case 密集暴露**：skyzhao1223 一人今日提交 6 个 PR 修复 glob/edit/webfetch/grep 的边界问题（行尾、编码、权限、截断标记、$ 转义等），说明 V2 工具在生产环境使用中仍有较多细节待打磨。社区贡献者已在主动补位，官方应加快 review 和合入。

3. **终端兼容性是 TUI 长期短板**：GNU Screen 颜色问题（#32985）6 月提出至今未解决，今日又有 tmux 在 Android SSH 客户端下滚动失效（#45871）。TUI 在非标准终端环境下的表现是影响用户体验的重要因素。

4. **Azure 认证修复获积极回应**：v1.18.24 加入 Azure CLI/Entra ID 登录后，#21658 今日有更新，社区正在验证。对使用 Azure 的企业用户是重要利好。

5. **Windows ARM64 支持推进中**：Bun 1.4.0 bump（#44946）和 windows-arm64 安装脚本修复（#45877，已关闭）显示官方在推进 ARM64 Windows 原生支持，但底层 bun:ffi 限制（#45875）仍需解决。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-28

## 今日速览

今日 Pi 社区的核心焦点集中在 **TUI 渲染质量回归**（多起与文本逐词换行、软换行硬渲染相关的问题被集中报告）以及 **XDG Base Directory 规范落地**（高赞 issue #2870 已关闭，但社区贡献热度不减）。与此同时，**DeepSeek 与 OpenAI Responses 模型在上下文压缩与回放场景下的兼容性缺陷**成为阻断性 bug 的高发区，多个修复 PR 已在今日完成合入或提交。此外，桌面端（macOS Terminal.app）崩溃与代理库兼容问题也获得了官方修复。

---

## 社区热点 Issues

精选 10 个值得关注的问题：

1. **[#2870] [bug] Follow XDG Base Directory**（👍 52，已关闭）  
   高赞问题，要求应用遵循 `$XDG_CONFIG_HOME`/`$XDG_STATE_HOME`，避免在 Linux 家目录直接落盘。已在 5 个月前关闭，但连续获得 20 条评论，说明社区对 Linux 桌面规范化的诉求长期存在。  
   https://github.com/earendil-works/pi/issues/2870

2. **[#8584] [OPEN] TUI 行渲染损坏：长工具输出后助手文本逐词换行**（👍 6，14 评论）  
   高频复现问题：在工具输出较长的行（例如 `sed -n 515,545p` 打印宽源文件）后，助手流式文本被以极窄宽度切断，每行仅显示一个单词。与 #8675、#8621 高度关联，疑似为同一渲染管线缺陷，社区已多次重复上报。  
   https://github.com/earendil-works/pi/issues/8584

3. **[#6922] [CLOSED] 默认模型不可为 llama.cpp 模型：启动显示 "No models available"**（👍 14，已关闭）  
   当 `defaultProvider` 为 `"llama.cpp"` 时，启动即报错且无法进入非交互模式。暴露了本地推理后端与默认模型加载逻辑的兼容性缺口。  
   https://github.com/earendil-works/pi/issues/6922

4. **[#8774] [CLOSED] 上下文压缩在 OpenAI Responses 模型上失败：tool_choice 未携带 tools（400）**  
   所有触发压缩的路径（手动 `/compact`、阈值、溢出恢复）在 **OpenAI Responses API** 通道上均失败，错误为 `tool_choice` 被发送但工具列表为空。影响所有使用该通道的长期任务。  
   https://github.com/earendil-works/pi/issues/8774

5. **[#8779] [CLOSED] DeepSeek 思考模型在工具轮次禁用思考后回放报错：400001 'reasoning_content must be passed back'**  
   长时间会话在工具调用轮次若 Pi 禁用 thinking，则后续回放会因缺少 `reasoning_content` 被网关拒绝。官方已在 #8732 PR 中修复跨模型回放场景。  
   https://github.com/earendil-works/pi/issues/8779

6. **[#8711] [CLOSED] TUI 在流式 OpenRouter thinking（GLM-5.3-flash）时 CPU 100% 与冻结**  
   OpenRouter 的 reasoning 流被逐 token 存储为独立对象，导致本地 CPU 占用率飙升且交互完全卡死。这是性能类高影响 bug。  
   https://github.com/earendil-works/pi/issues/8711

7. **[#8762] [CLOSED] `--resume` 选择器全量解析每个会话文件，仅为了显示名称导致卡顿**  
   会话文件大时选择器严重卡顿。`buildSessionInfo` 流式解析整个 JSONL 文件（收集 `allMessagesText` 等），但选择器仅需名称/元数据 —— 性能优化空间明确。  
   https://github.com/earendil-works/pi/issues/8762

8. **[#8757] [CLOSED] 工具参数校验器缺少“对象/数组转字符串”方向转换，导致 write/edit 失败**  
   校验器已修复字符串→结构化类型（#7856、#5697/5698），但反向方向缺失：当模型返回对象/数组给字符串类型参数时，报 `must be string` 错误。  
   https://github.com/earendil-works/pi/issues/8757

9. **[#8752] [CLOSED] bedrock-converse 的 usage.input 跨模型族未归一化：缓存未命中误报与输入成本翻倍**  
   Anthropic 族模型 `usage.input` 为净缓存值，而 OpenAI 族为毛值（已含 cacheRead/cacheWrite），但 `bedrock-converse` 直接拷贝 `inputTokens`，导致成本统计错误与误导性缓存提示。  
   https://github.com/earendil-works/pi/issues/8752

10. **[#8771] [CLOSED] macOS Terminal.app 在运行 Pi TUI 时崩溃**  
    环境：macOS 26.5.2 + Terminal.app 2.15 + Node v26.3.1，交互时 `Working...` 状态直接崩溃，疑似 TUI 与 Apple 终端兼容问题。  
    https://github.com/earendil-works/pi/issues/8771

---

## 重要 PR 进展

精选 10 个核心 PR（含合并/关闭状态）：

1. **[#8674] [CLOSED] fix(tui): 将 Markdown 软换行渲染为空格而非硬换行**  
   修复 thinking 块与段落显示为参差不齐的逐行块的问题（#8673），从 `marked` 层保留软换行语义，在 TUI 渲染时合入段落。  
   https://github.com/earendil-works/pi/pull/8674

2. **[#6848] [CLOSED] fix: 为上下文压缩摘要增加重试机制（指数退避）**  
   解决压缩过程中偶发 socket 中断导致整个压缩失败的问题（#6647）。给 `completeSummarization()` 增加有界重试。  
   https://github.com/earendil-works/pi/pull/6848

3. **[#8723] [CLOSED] fix(coding-agent): 暴露 https-proxy-agent 具名导出**  
   修复 v0.84.3 中代码分割导致 `HttpsProxyAgent is not a constructor` 的问题（#8610），为 bundling 脚本添加插件支持。  
   https://github.com/earendil-works/pi/pull/8723

4. **[#8732] [CLOSED] fix(ai): 跨模型回放到 DeepSeek 系端点时保留 reasoning_content**  
   当助手消息原本带有 reasoning 内容，但回放时未携带该字段，DeepSeek 网关拒绝请求（#8568/#8742）。此 PR 在回放时自动补齐。  
   https://github.com/earendil-works/pi/pull/8732

5. **[#8731] [CLOSED] feat(tui): 支持全屏模式禁用“选中即复制”，Ctrl+X 复制选区**  
   解决用户选中文本即覆盖剪贴板的问题（#7720）。新增 `copyOnSelect` 设置项（默认开启），关闭后可启用 Ctrl+X 显式复制。  
   https://github.com/earendil-works/pi/pull/8731

6. **[#8764] [CLOSED] fix(coding-agent): 修正 `settings.shellPath` 对 `!` 命令解析的生效**  
   在 Windows 上 `!` 前缀（从命令行解析 API 密钥）未正确使用 `shellPath` 配置。修复 `resolve-config-value.ts` 中调用 `getShellConfig()` 不带参数的问题。  
   https://github.com/earendil-works/pi/pull/8764

7. **[#8766] [OPEN] feat(coding-agent): write/edit 输出更易扫描（带行号预览等）**  
   优化如 `Write(path)` 的展示：添加行号、统一编辑格式，让开发者更快定位实际改动。  
   https://github.com/earendil-works/pi/pull/8766

8. **[#8734] [OPEN] feat(ai): 为 OpenAI Responses 兼容提供商支持顶层 instructions**  
   新增 `systemPromptFormat` 兼容选项（默认 `input`），配置后可将动态系统提示移动至顶级 `instructions` 字段，避免重复注入。关闭 #8388。  
   https://github.com/earendil-works/pi/pull/8734

9. **[#8743] [OPEN] fix(coding-agent): 忽略过期的 Kitty 图像转换**  
   将图像转换缓存条目绑定到源图，并忽略位置已变更的迟到转换，避免竞争条件下渲染陈旧的 tool 图像。  
   https://github.com/earendil-works/pi/pull/8743

10. **[#7602] [OPEN] feat(coding-agent): 可配置的摘要模型与思维等级**  
    为压缩与分支摘要独立配置模型/思考级别，并处理提供方上下文窗口限制（关闭 #7553）。  
    https://github.com/earendil-works/pi/pull/7602

---

## 功能需求趋势

综合全部 Issue 与 PR，社区关注方向高度集中：

- **终端渲染与交互精细化**：软换行语义、逐词换行、剪贴板可配置、表格列选择、鼠标选择覆盖 —— 终端作为主战场，但对“复制正确内容”的体验要求极高。
- **多模型/端点兼容性**：OpenAI Responses（tool_choice 无 tools、instructions 顶层化）、DeepSeek 系（reasoning_content 回放）、Bedrock（usage 归一化、NO_PROXY 子域匹配） —— 跨提供商的一致性成为硬需求。
- **本地配置标准化**：XDG Base Directory、全局 `~/.agents/AGENTS.md` 指令文件，以及 README 安装说明 —— 开源软件“开箱即用”的门面工程被反复提及。
- **性能与资源占用**：`--resume` 选择器全量解析、TUI 100% CPU 峰值、代理环境变量解析 —— 大规模会话与高频交互下的响应性亟待优化。

---

## 开发者关注点

从本周提交与评论中的高频关键词提炼：

- **TUI 渲染回归问题最刺眼**：`#8584`、`#8673`、`#8675`、`#8624` 等多个独立 issue 都指向文本流式渲染与键盘序列处理的回归，且均在 v0.84.x 中出现。开发者需要及时跟进 #8674 等修复是否随下个补丁版本发布。
- **代理与环境变量兼容仍是隐性坑**：`HttpsProxyAgent` 构造器、`NO_PROXY` 解析逻辑、`https_proxy` 环境变量在 bundle 分割后的丢失 —— 网络受限的企业用户是此类 bug 的首批受害者。
- **压缩/回放时上下文完整性是“一票否决”级问题**：无论是 OpenAI Responses 的 `tool_choice` 还是 DeepSeek 的 `reasoning_content`，一旦压缩失败整个会话即不可继续。两个阻断性缺陷均在今日被标记关闭，但社区期待更好的自动回归测试。
- **性能优化诉求从“可用”转向“顺滑”**：不仅是“不卡死”，而是对选择器、大文件解析、流式 thinking 渲染的持续性能预警。`#8762` 的反模式（全量解析仅显示名称）是典型反面教材。
- **新模型接入热情高**：如 `#8709`（Qwen3.8-flash Token 计划申请）与 `#8199`（Cortecs Provider PR），但都受制于上游 provider API 的细节（如 tool_choice、usage 语义） —— 说明模型兼容层的不统一正在拖慢新模型引入速度。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-28** | 数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 今日速览

今日社区围绕 **Web Shell UI 大重构（PR #9811）** 展开密集评审与问题拆分，多个衍生 bug 被独立跟踪修复；**OpenTUI 迁移** 进入第三批次（live-session 与输入层），并新增设计文档 PR；同时 CI 稳定性问题频发（5 起 E2E 失败），社区对 **DingTalk 频道配置**、**Anthropic 流安全**、**自动压缩容错** 等问题的关注度持续升温。

---

## 版本发布

**v0.22.2-nightly.20260828.7357136dd1**

- `fix(web-shell)`：恢复已保存会话的 diff 显示（[PR #10093](https://github.com/QwenLM/qwen-code/pull/10093)）
- `fix(channels)`：修复钉钉富文本多行内容处理

---

## 社区热点 Issues

### 1. [TUI 渲染层迁移：从 ink 到 OpenTUI（#8662）](https://github.com/QwenLM/qwen-code/issues/8662)
**11 条评论** | P3 · 持续跟踪中

> 迁移跟踪 issue。ink 7 + React 19 的深度补丁方案（~1037 行 patch）在生产中暴露出闪烁等结构性难题，社区正分批次替换，今日第三批 PR 已提交（见下文 PR #10368）。

### 2. [core + cli 架构 Review — 12 项结构性问题清单（#4063）](https://github.com/QwenLM/qwen-code/issues/4063)
**11 条评论** | 进行中

> 核心类型系统被 `@google/genai` 绑架——136 个文件直接 import 该包，P0 级架构问题。社区讨论热度持续，是长期架构演进的重要参考。

### 3. [Anthropic wire 缺少 OpenAI wire 已有的流安全保护（#9005）](https://github.com/QwenLM/qwen-code/issues/9005)
**8 条评论** | P1 · 进行中

> `@anthropic-ai/sdk` 仍锁定在 `^0.36.1`（2025 年 1 月），且缺失 OpenAI 通道已具备的流式安全机制。P1 优先级，建议尽快处理。

### 4. [自定义模型供应商无法对话（#10227）](https://github.com/QwenLM/qwen-code/issues/10227)
**7 条评论** | P2 · 待补充信息

> 错误指向 moonshot flavored JSON schema 校验失败——`properties must be an object`。影响自定义模型接入，社区正在协助排查。

### 5. [MCP Apps 内联 UI 在 Web Shell 中不渲染（#10369）](https://github.com/QwenLM/qwen-code/issues/10369)
**3 条评论** | P2 · 新提交

> v0.22.2 Web Shell 中，MCP App 的 `ui://` 资源已送达、渲染器已注册，但 UI 始终不显示，且无错误提示。与今日 Web Shell 大重构（#9811）相关，需追踪定位。

### 6. [hooks 触发事件增强（#10348）](https://github.com/QwenLM/qwen-code/issues/10348)
**4 条评论** | P3 · 已关闭

> 社区希望 hooks 支持“智能体发起提问”事件，用于后台任务推送（飞书/桌面通知）。已关闭，功能方向已记录。

### 7. [自动压缩在 HTTP 413 时无法恢复（#10380）](https://github.com/QwenLM/qwen-code/issues/10380)
**2 条评论** | P2 · 新提交

> 当 OpenAI 兼容网关经反向代理（请求体限制低于模型上下文窗口）返回 413 时，长会话永久不可用。影响生产环境稳定性，建议优先关注。

### 8. [钉钉频道 approvalMode 对非 webhook 会话不生效（#10387）](https://github.com/QwenLM/qwen-code/issues/10387)
**2 条评论** | P1 · 新提交

> 频道级 `approvalMode` 仅在同时存在 `webhooks` 配置时才生效，普通交互频道（如钉钉）无法使用。P1 且已有修复 PR 在途。

### 9. [DingTalk 状态卡片网络中断后无法恢复（#10354）](https://github.com/QwenLM/qwen-code/issues/10354)
**2 条评论** | P2 · 新提交

> 任一方网络中断后，钉钉状态卡片停更且无法自动恢复。频道稳定性问题，已有修复方向。

### 10. [Web Shell 消息编辑时窗口索引误传为会话全局索引（#10385）](https://github.com/QwenLM/qwen-code/issues/10385)
**2 条评论** | P1 · 新提交

> 编辑用户消息时，窗口级 turn index 被传给会话级 rewind 快照，导致回滚错位。P1 严重度，已定位到 `MessageList.tsx:2894`。

---

## 重要 PR 进展

### 1. [refactor(vscode-ide-companion)：完成 WebShell UI 切换（#9811）](https://github.com/QwenLM/qwen-code/pull/9811)
> 核心 UI 重构 PR——将 VS Code 伴生扩展从旧 WebUI 切换到 Web Shell，挂载 `WebShellWithProviders` 并连接 workspace 级 `qwen serve` daemon。因超 1500 行评审上限，多个衍生 bug 被拆分为独立 issue（#10385、#10372、#10373、#10378），评审进行中。

### 2. [feat(cli)：OpenTUI 迁移第三批——live-session 与输入层（#10368）](https://github.com/QwenLM/qwen-code/pull/10368)
> 新增 live-session 流折叠、流式 markdown 渲染、渐进式 MCP 展示及输入层。同日配套设计文档 PR #10343，迁移计划（#8662）稳步推进中。

### 3. [docs(design)：OpenTUI 迁移设计与架构说明（#10343）](https://github.com/QwenLM/qwen-code/pull/10343)
> 包含迁移动机与实测数据、依赖方向不变量及 CI 强制方案、分层计划。OpenTUI 迁移的权威参考文档。

### 4. [feat(web-shell)：持久化 reasoning effort（#10011）](https://github.com/QwenLM/qwen-code/pull/10011)
> WebShell 推理强度选择即时更新会话，并持久化为全局默认值。

### 5. [fix(core)：将 permissions.allow 与工具注册解耦（#10098）](https://github.com/QwenLM/qwen-code/pull/10098)
> 将 #9829 以来 `permissions.allow` 混做的两件事拆分：恢复其纯自动批准语义，不删除/降级/隐藏工具。对应 issue #10075，社区关注度高。

### 6. [feat(web-shell)：通过托管服务分享 HTML 产物（#10024）](https://github.com/QwenLM/qwen-code/pull/10024)
> Web Shell 中为 HTML 产物新增公共分享能力，支持 Cloudflare/Vercel/Netlify 三平台，统一流程引导。

### 7. [feat(daemon)：支持作用域 workspace 内存任务（#9895）](https://github.com/QwenLM/qwen-code/pull/9895)
> 为 sessionless 的 remember/forget 任务增加 `project`/`user` 目标选项，覆盖 REST、ACP 扩展方法及 TS daemon SDK。

### 8. [feat(review)：Step 4 验证升级为执行级（#9740）](https://github.com/QwenLM/qwen-code/pull/9740)
> 新增 `qwen review ab-drive` 子命令：同一脚本在 PR worktree 与 base-tree 两棵树上运行，输出配对结果。评审工作流的重要增强。

### 9. [fix(ci)：release 流水线 Linux 任务路由至 ECS runner 池（#10036）](https://github.com/QwenLM/qwen-code/pull/10036)
> 将 release 流水线中 4 个非发布 Linux 任务切换到条件 ECS runner 选择。CI 基础设施稳定性改进。

### 10. [fix(ci)：在 checkout 前恢复受保护的 .qwen 残留（#10214）](https://github.com/QwenLM/qwen-code/pull/10214)
> 修复 `/verify` 容器任务使 `.qwen` 目录变为 root 所有且只读，异常终止时现有恢复逻辑无法执行的问题。

---

## 功能需求趋势

| 方向 | 代表 Issue/PR | 热度 |
|------|--------------|------|
| **Web Shell / IDE 集成** | #9811（UI 切换）、#10369（MCP UI 不渲染）、#9984（交互式浏览器终端）、#10024（HTML 分享）、#10011（reasoning 持久化） | 🔥🔥🔥 |
| **TUI 架构现代化** | #8662（ink → OpenTUI）、#10368（第三批）、#10343（设计文档） | 🔥🔥🔥 |
| **频道/IM 集成** | #10387（钉钉 approvalMode）、#10354（状态卡片恢复）、#10388（原生交互卡片权限请求） | 🔥🔥 |
| **CI/自动化基础设施** | #10356/#10375 等 E2E 失败、#10036（ECS runner）、#10214（.qwen 恢复）、#10129/#10123（评审工作流修复） | 🔥🔥 |
| **架构解耦/重构** | #4063（core+cli 架构清单）、#10098（permissions 解耦）、#9150（slash-command 与 UI 解耦）、#8083（Config 所有权明确化） | 🔥🔥 |
| **钩子/事件系统增强** | #10348（hooks 提问触发）、#10386（surviving-hook 加固） | 🔥 |
| **服务端能力分层** | #4542（DaemonWorkspaceService 提案）、#10061（ACP 路径统一 + SDK 1.x） | 🔥 |
| **高级工具调用模式** | #10377（CodeModeOnly 程序化工具调用） | 🔥 |
| **附件/存储可配置** | #10066（会话附件存储可迁移） | 🔥 |
| **多语言文档** | #8551（韩语文档） | 🔥 |

---

## 开发者关注点

1. **Web Shell 稳定性问题集中爆发**：MCP UI 不渲染（#10369）、消息编辑索引错位（#10385）、diff 路径解析不一致（#10372）、HTML lang 硬编码（#10373）、daemon 误报崩溃（#10378）——均来自 #9811 大重构的拆分问题，说明 UI 切换影响面广，需要系统性回归验证。

2. **CI 可靠性持续承压**：今日新增 5 起 E2E 失败 issue（#10356、#10370、#10375 等），社区在 CI 基础设施上投入大量 PR（runner 路由、受保护目录恢复、评审工作流防腐化），可见自动化质量保障是当前开发重点。

3. **Anthropic 通道安全滞后**：#9005 指出 Anthropic wire 缺少 OpenAI 已有的流安全保护，SDK 版本落后，P1 优先级下社区关注度较高。

4. **自动压缩容错不足**：#10380 中 HTTP 413 导致会话永久不可用，对长会话生产环境是实际痛点，建议优先修复。

5. **钉钉频道能力补全**：approvalMode 配置失效（#10387）、状态卡片网络恢复（#10354）、交互卡片权限请求（#10388）——钉钉集成正在快速迭代完善中。

6. **OpenTUI 迁移引发架构讨论**：#8662 的 ink 补丁方案（1037 行）在生产中的问题验证了迁移必要性，社区期待新架构带来更稳定的 TUI 体验。

---

> **日报说明**：本期数据基于 2026-08-28 当天 GitHub 动态。Issue/PR 评论数截至数据抓取时点，部分数据可能随时间变化。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-28** | 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

> 注：当前仓库数据已迁移至 CodeWhale 项目（相关 Issues/PRs 已重定向），以下日报基于实际项目数据生成。


## 今日速览

1. **多模型原生联网搜索集中落地**：h3c-hexin 连续提交 6 个 PR，为 DeepSeek、Qwen、Moonshot/Kimi、Z.AI/BigModel、小米 MiMo 等五家厂商添加 provider-native 联网搜索支持，并配套 #5681 追踪 Issue——这是今日最集中的功能推进方向。
2. **web 前端依赖集中升级**：Next.js 15→16、TypeScript 5→7、tailwindcss 3→4 连续三项重大版本跳升，预示 /web 子项目将进入新的技术栈基线。
3. **TUI 聚焦块快捷键与启动可见性修复**：多个 TUI 交互增强（#5551、#5668）和 MCP/插件启动状态展示（#5658、#5677）持续推进，聚焦用户体验细节。


## 社区热点 Issues（Top 10）

1. **[#5681] 将 provider-native 原生搜索扩展到 DeepSeek、Qwen、Kimi、Z.AI/BigModel、MiMo**
   - 作者：h3c-hexin | 创建：08-28 | 评论：0
   - 该 Issue 是今日搜索适配 PR 集群（#5682-#5687）的追踪项。目前 OpenAI、Anthropic、xAI 已支持原生搜索，本次扩展将让五家国产/国际模型厂商的一手路由获得同等能力，避免用户额外配置搜索后端。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/5681

2. **[#5620] [bug] 上下文压力警告是瞬态的，agent 不会主动响应它**
   - 作者：ronohara | 创建：08-26 | 更新：08-28 | 评论：9
   - 中等级别缺陷：上下文压力信号仅闪烁显示，agent 不据此调整行为，导致静默的上下文质量劣化。安全信号形同虚设，社区讨论热度较高。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/5620

3. **[#5588] [v0.9.12] Provider 中立性：18 处 DeepSeek 专属门控应改为 provider 无关**
   - 作者：Hmbown | 创建：08-23 | 更新：08-27 | 评论：6
   - 深入审计发现 2,281 行代码中 18 处行为级 DeepSeek 门控（如 NVIDIA NIM 环境变量泄漏已修复），这些逻辑本应适用于所有 provider。体现项目向"多模型中立"演进的方向。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/5588

4. **[#5668] v0.9.12：新增 /copy 命令复制最近一次完成的模型输出**
   - 作者：Hmbown | 创建：08-27 | 更新：08-28 | 评论：2
   - 用户痛点直接：长对话后手动选中终端文本复制体验差。新增 `/copy` 命令可一键复制最近完成的模型输出。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/5668

5. **[#5249] Epic：v0.9.5 构建时间优化——打破单体 crate 税**
   - 作者：Hmbown | 创建：08-04 | 更新：08-27 | 评论：2
   - 核心痛点：`codewhale-tui` 单 crate 682,959 行、620 文件，占工作区 86%，每次编辑/提交/测试/发布全量重编译。该 Epic 对此系统性优化，是长期性能改善的关键。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/5249

6. **[#5625] 增强：非阻塞"待处理用户输入"peek 工具，用于中途引导**
   - 作者：ronohara | 创建：08-26 | 更新：08-27 | 评论：2
   - 提议在 agent 运行中提供轻量非阻塞工具，让 agent"窥视"是否有用户新输入（如补充指令），无需等待回合结束，改善人机协作流畅度。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/5625

7. **[#5618] 增强：用 gix（gitoxide）替换内部 git CLI 读取**
   - 作者：LmeSzinc | 创建：08-25 | 更新：08-27 | 评论：2
   - 继 #5617 修复 git 锁问题后，#5618 进一步推进：消除进程派生开销、提升性能，并彻底消除 `.git/index.lock` 冲突隐患。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/5618

8. **[#4402] v0.9.2 注意力 UX：聚焦感知通知、动作要求标题状态与返回摘要**
   - 作者：Hmbown | 创建：07-16 | 更新：08-28 | 评论：2
   - 跨版本长期追踪：完成通知基于耗时而非终端聚焦状态、标题 busy/completed 未区分"等待用户"与"后台运行"、缺少回合结束总结。一个持续近两个月的 UX 基线提升项。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/4402

9. **[#5579] 插件 UX 与 Claude Code 对齐：主动推荐、重载可发现性、热重载**
   - 作者：Hmbown | 创建：08-23 | 更新：08-27 | 评论：3
   - 用户直接对标 Claude Code 的插件体验：reload 命令、推荐机制、热重载。0.9.12 周期内已审计现有插件能力，讨论如何补齐差距。
   - 链接：https://github.com/Hmbown/CodeWhale/issues/5579

10. **[#5587] 死代码清理阶段 2-4：75 个测试专用标记、~242 个陈旧 allow、blanket-allow 转换**
    - 作者：Hmbown | 创建：08-23 | 更新：08-27 | 评论：4
    - 系统性清理 `allow(dead_code)` 站点（共 379 处）：将测试专用 helper 转为 `#[cfg(test)]`、移除陈旧 allow、修复"事实漂移"契约。代码卫生的持续投入。
    - 链接：https://github.com/Hmbown/CodeWhale/issues/5587


## 重要 PR 进展（Top 10）

1. **[#5683] feat(web): 新增 DeepSeek 原生搜索适配器**
   - 作者：h3c-hexin | 创建：08-28
   - 为 DeepSeek V4 一手路由启用 provider-native 搜索，沿用现有 provider 专属 Responses 端点；兼容自定义端点保持 fail-closed（默认关闭）。配合 #5681 追踪。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5683

2. **[#5684] feat(web): 新增 Qwen 原生搜索适配器**
   - 作者：h3c-hexin | 创建：08-28
   - 为 ModelStudio Token Plan 的 `qwen3.8-max`、`qwen3.7-plus`、`qwen3.7-max` 启用 `web_search` 工具（`tool_choice: "required"`），保持预览态与 Coding Plan 路线不受影响。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5684

3. **[#5687] feat(web): 新增小米 MiMo 原生搜索**
   - 作者：h3c-hexin | 创建：08-28
   - 为 `mimo-v2.5-pro` 和 `mimo-v2.5` 官方路由启用 `web_search` Chat Completions 插件；强制有界搜索、保留结构化注释元数据、要求可验证引用。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5687

4. **[#5686] feat(web): 新增 Moonshot 和 Kimi 原生搜索**
   - 作者：h3c-hexin | 创建：08-28
   - 覆盖 Moonshot/Kimi 三条产品路径：K3 Formula 工具、旧版 K2.6 `$web_search`、Kimi Code 会员 `/search`；限制 4 轮、8 次工具调用上限，仅恢复可信来源引用。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5686

5. **[#5682] fix(web): 在回退前强制执行原生搜索约束**
   - 作者：h3c-hexin | 创建：08-28
   - 修复核心逻辑：域名约束在判定"结果可用"之前生效；原生搜索变为空结果时，显式携带 `no_usable_results` 和回退收据后再走配置的后端，避免静默降级。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5682

6. **[#5685] feat(web): 新增 Z.AI 和 BigModel 原生搜索**
   - 作者：h3c-hexin | 创建：08-28
   - 面向 Z.AI 全球和智谱中国 API：`api.z.ai` 选择 `search-prime`，`open.bigmodel.cn` 选择 `search_std`；Coding Plan 及相邻路径保持 fail-closed。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5685

7. **[#5677] feat(tui): 抢救 MCP 与插件会话启动**
   - 作者：Hmbown | 创建：08-28
   - 在最新 main 上重放 #5658 的四个原始提交：插件发现和已启用 MCP 服务器以 session 级启动状态展示；首个会话帧显示正在连接的服务器名称；失败状态不再仅靠 toast 提示。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5677

8. **[#5679] fix(chat): 保持工具结果批次连续性**
   - 作者：Hmbown | 创建：08-28（已合并）
   - 修复会话一致性：每个 assistant 工具调用批次后紧跟一个完整连续的 tool-result 运行；用户/系统内容打断批次时丢弃延迟媒体；拒绝重复工具调用 ID，剥离不完整/孤立结果。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5679

9. **[#5671] chore(deps-dev): TypeScript 5.9.3 → 7.0.2（/web）**
   - 作者：dependabot[bot] | 创建：08-28
   - 跨代跳升。TypeScript 7 基于 Go 原生编译（Project Corsa），编译速度预计极大提升，但对项目代码可能有破坏性变更，需要重点验证。
   - 链接：https://github.com/Hmbown/CodeWhale/pull/5671

10. **[#5673] chore(deps): Next.js 15.5.21 → 16.3.2（/web）**
    - 作者：dependabot[bot] | 创建：08-28
    - Next.js 16 为包含 backport 修复的版本，功能持续演进；与 TypeScript 7、tailwindcss 4 组合将构成 /web 子项目的新技术基线。
    - 链接：https://github.com/Hmbown/CodeWhale/pull/5673


## 功能需求趋势

- **多 provider 中立化**：从"DeepSeek 专属"走向完全 provider 中立（#5588），支持 DeepSeek、Qwen、Kimi、Z.AI、MiMo、OpenAI、Anthropic、xAI 等多厂商原生能力对接（#5681），这是当前最明确的架构方向。
- **Provider 原生联网搜索**：每个模型厂商的一手路由都应支持其原生 web_search 能力，避免用户走通用搜索后端；同时强制有界搜索与可验证引用（#5682-#5687）。
- **构建性能优化**：单 crate 占工作区 86% 的"单体税"持续困扰开发循环（#5249），社区关注编译/测试/发布速度。
- **Git 操作安全与性能**：内部 git 读取不再使用真实 CLI（#5617、#5618），转向 gix（gitoxide）以消除 index.lock 冲突和进程开销。
- **TUI 交互体验精细化**：聚焦感知通知（#4402）、块级快捷键（#5551）、`/copy` 命令（#5668）、MCP/插件启动可见性（#5658、#5677），终端 UX 的"最后一公里"打磨。

## 开发者关注点

- **上下文压力信号不可忽略**：#5620 暴露出信号只是"显示"而 agent 不响应的机制缺陷。开发者希望安全信号真正参与决策，而非仅做展示。
- **MCP 与插件启动黑盒感强**：首个 turn 长时间停在"working"而看不到 MCP/插件在做什么（#5658），启动过程需要可视化、可排查。
- **构建/提交速度直接破坏开发流**：单 crate 模型让编辑-编译、提交-测试循环都付出全量编译代价（#5249），已成为高频痛点。
- **git 锁竞争影响日常开发**：codewhale 内部 git 探测与用户手动 `git commit` 竞争 `.git/index.lock`（#5617），需彻底消除——gix 迁移是社区认可的长期方案。
- **`/copy` 看似小事、实际高频**：#5668 复杂度低但直接提升长轮次对话的终端使用效率，反映社区对日常操作流畅度的高度敏感。

---
*本日报基于 GitHub 公开数据自动生成，选取评论数最多或语义权重最高的条目。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*