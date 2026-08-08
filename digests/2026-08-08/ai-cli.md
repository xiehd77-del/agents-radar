# AI CLI 工具社区动态日报 2026-08-08

> 生成时间: 2026-08-08 01:45 UTC | 覆盖工具: 9 个

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

**报告日期：2026-08-08**

---

## 一、生态全景

当前 AI CLI 工具已进入**功能深水区与平台分化期**。各工具从"能用"迈向"好用"的过程中，社区反馈高度集中于三大共性议题：**跨工具标准互操作（AGENTS.md）、子代理状态可信度、Windows 平台体验**。同时，各工具呈现出明显的差异化路径——Claude Code 聚焦插件生态与远程执行扩展，Codex 重仓 Code Mode 架构与后台审查，Gemini CLI 全力推进基础设施自动化（Caretaker 机器人），而 Qwen Code、OpenCode 等则在 Web Shell 化和多端兼容性上发力。值得注意的是，**安全事件开始出现**（Kimi Code 的 rm -rf 越界删除、Gemini CLI 的 SSRF 漏洞），标志着社区关注点正从功能丰富度转向信任与安全边界。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | 高热度 Issues | PR 活跃度 | 社区热度信号 |
|------|-------------|--------------|-----------|-------------|
| **Claude Code** | 2 个（v2.1.224/225） | 10 条（Top 1: 4526👍） | 3 个（低） | 🔥🔥🔥🔥🔥 现象级需求 #6235（AGENTS.md）断层领先 |
| **OpenAI Codex** | 3 个（0.148.0-alpha 系列） | 10 条（Top: 82 评论） | 10 个（全部合并） | 🔥🔥🔥🔥 密集合并中，基础设施快速演进 |
| **Gemini CLI** | 4 个（含安全补丁 v0.54.4） | 10 条（P1 居多） | 10 个（含 SSRF 修复） | 🔥🔥🔥🔥 Caretaker 机器人重构幅度大 |
| **GitHub Copilot CLI** | 3 个（v1.0.79-7/8/9） | 10 条（新报告居多） | 0 个（24h 无动态） | 🔥🔥🔥 企业策略落地快，但社区讨论偏少 |
| **Kimi Code** | 0 个 | 2 条（安全事件+记忆需求） | 2 个（待合并） | 🔥🔥 社区规模小但安全事件引爆关注 |
| **OpenCode** | 1 个（v1.18.15） | 10 条（401 事件持续发酵） | 10 个（3 个合并） | 🔥🔥🔥 支付方式讨论独特，Go 服务故障影响信任 |
| **Pi** | 1 个（v0.84.1） | 10 条（压缩问题 15👍） | 10 个（5 个合并） | 🔥🔥🔥 mitsuhiko 深度参与，扩展生态活跃 |
| **Qwen Code** | 1 个（nightly） | 10 条（Windows 中文输入领跑） | 10 个（4 个合并） | 🔥🔥🔥 多端兼容性攻坚，ACP 协议深耕 |
| **DeepSeek TUI** | 0 个（v0.9.4 发布受阻） | 10 条（发布阻塞项） | 10 个（4 个合并） | 🔥🔥 CI 阻塞拖累交付，社区以中文用户为主 |

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **跨工具标准互操作** | Claude Code（#6235, 4526👍）、Copilot CLI（skill 目录）、Gemini CLI（Skills 主动使用） | AGENTS.md 标准化替代厂商绑定格式；技能/插件跨工具复用 |
| **子代理状态可信度** | Gemini CLI（#22323 误报 GOAL 成功）、Claude Code（#78487 后台无限阻塞）、DeepSeek TUI（#5123 权限误判）、Pi（#7053 并行结果丢失） | 子代理必须如实上报中断/失败；需超时、看门狗、自动拒绝策略 |
| **Windows 平台"二等公民"** | Claude Code（5 条 Windows bug）、Codex（沙箱 ACL 链）、Copilot CLI（渲染循环回归）、Qwen Code（中文输入）、OpenCode（无法粘贴） | TUI 渲染、沙箱权限、安装脚本、输入法兼容性全面落后于 macOS/Linux |
| **长会话上下文管理** | Claude Code（Fable 5 显示缺陷）、Codex（#8648 回复错乱）、Pi（#6879 压缩不触发）、Gemini CLI（Auto Memory 重试） | 压缩策略需前瞻触发而非溢出后补救；长对话稳定性是普遍痛点 |
| **配置透明与热更新** | Qwen Code（MCP 热更新脏状态）、Copilot CLI（allowed_directories 不加载）、Gemini CLI（配置被绕过）、DeepSeek TUI（凭证优先级） | 运行中变更需行为一致；配置覆盖关系需可预期 |
| **安全边界与权限控制** | Kimi Code（rm -rf 越界）、Gemini CLI（SSRF 修复）、Qwen Code（Git 命令防护）、Claude Code（YAML 注入防护） | 高危操作需确认机制；网络请求需防 SSRF；符号链接需防凭据覆盖 |
| **远程/本地混合执行** | Claude Code（self-hosted-runner）、Copilot CLI（企业沙箱代理）、Pi（LM Studio provider）、OpenCode（Go 服务） | 自托管模型接入、远程执行环境生命周期治理、多云 provider 扩展 |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 | 当前短板 |
|------|---------|---------|-------------|---------|
| **Claude Code** | 全功能企业级 Agent 平台 | 企业团队、专业开发者 | 插件生态（含 archive 源）、远程执行、gateway 消费限额 | Windows 支持严重滞后；AGENTS.md 标准响应迟缓 |
| **OpenAI Codex** | 高性能架构迭代先锋 | 追求新架构的开发者 | Code Mode gRPC 协议、Guardian 后台审查、沙箱元数据暴露 | 版本迭代过快致回归频发（macOS OOM） |
| **Gemini CLI** | 基础设施驱动型 Agent | Google 生态开发者 | Caretaker 自动化运维、SSRF 防护、Firestore schema 重构 | 子代理状态误报是信任危机；配置被静默绕过 |
| **GitHub Copilot CLI** | 企业合规优先 | 企业开发者、GitHub 深度用户 | 企业级策略（allow-auto-only）、Agent Plugins 规范 | 技能稳定性问题（#4401）；版本行为不可预测 |
| **Kimi Code** | 轻量安全敏感型 | 中文开发者、安全关注者 | 简洁工具集、yolo 权限模式 | 安全事件暴露权限边界缺陷；社区规模小 |
| **OpenCode** | 开源开放的 Go 服务 | 偏好开源、自托管用户 | 后台子代理、Mermaid 渲染、Crypto 支付讨论 | Go 服务 401 故障持续 2 周未解 |
| **Pi** | 扩展开发者友好 | Rust 开发者、扩展作者 | 扩展 API 持续增强、Harness v2 恢复机制 | 压缩机制缺陷；Node 23 兼容性 |
| **Qwen Code** | 多端全场景覆盖 | 中文用户、JetBrains 用户 | ACP 协议深耕（用量/推理强度透传）、Web Shell 准桌面化 | 终端渲染兼容性（PuTTY/tmux 闪屏） |
| **DeepSeek TUI** | Rust 高性能 TUI | 中文开发者、轻量用户 | MCP 增量同步、FreeBSD 支持、模型自动选择 | v0.9.4 发布受阻；子代理可靠性 |

---

## 五、社区热度与成熟度

### 成熟期（社区规模大，进入精细打磨）
- **Claude Code**：4526👍 的 AGENTS.md 需求说明社区体量巨大且组织化程度高；但 PR 活跃度低（3 个）暗示官方响应节奏滞后于社区期望。
- **OpenAI Codex**：10 个 PR 全部合并，呈现"高吞吐、快迭代"特征；但 macOS OOM 回归和 Windows ACL 反复暗示快速迭代的稳定性代价。

### 成长期（功能快速叠加，社区反馈集中）
- **Gemini CLI**：Caretaker 机器人重构幅度大，说明基础设施投入高；但 P1 级子代理问题（#22323, #21409）持续 5 个月未解，是信任隐患。
- **Copilot CLI**：企业策略落地快（3 个版本），但 24h 无 PR 动态，社区讨论偏少，反馈闭环较慢。
- **Qwen Code**：多端兼容性攻坚密集（10 个 PR），ACP 深度集成路线清晰；但 Windows 中文输入、PuTTY 回归等问题显示终端层兼容性短板。
- **OpenCode**：功能迭代快（后台子代理、Mermaid），但 Go 服务 401 持续 2 周未解决，对商业服务信任伤害大。

### 早期/社区规模较小（功能相对精简）
- **Kimi Code**：社区规模小，但安全事件（rm -rf 越界）引发广泛关注，可能催化权限控制机制的整体升级。
- **DeepSeek TUI**：发布阻塞（CI）拖累交付节奏，与生态内其他工具的迭代速度有明显差距。

---

## 六、值得关注的趋势信号

### 1. **AGENTS.md 标准化是分水岭**
Claude Code 的 #6235（4526👍）是本周期的最大单一信号。跨工具协作从"口号"变为"刚需"，厂商绑定格式（CLAUDE.md）正被社区用脚投票。**对开发者的参考价值**：在 GitHub 仓库中优先维护 AGENTS.md 而非单一厂商格式，以实现工具无关的 AI 协作兼容性。

### 2. **子代理可信度决定自动化深度**
Gemini CLI（误报 GOAL）、Claude Code（后台无限阻塞）、Pi（并行结果丢失）——三个工具在 24h 内同时暴露子代理状态管理缺陷。**对开发者的参考价值**：依赖 AI CLI 做 CI/CD 集成时，需设计超时/重试/审计机制，不能盲目相信子代理的"success"状态。

### 3. **安全漏洞从理论走向现实**
Kimi Code 的 rm -rf 事件和 Gemini 的 SSRF 漏洞确认了"AI Agent 是新的攻击面"。沙箱隔离、命令白名单、网络请求防护不再是加分项而是底线。**对开发者的参考价值**：启用工具时检查其沙箱实现方式；对大权限模式（如 yolo/allow-all）保持默认拒绝态度。

### 4. **Windows 体验成为差异化竞争点**
Claude Code（5 条 bug）、Codex（ACL 链）、Qwen Code（中文输入）、Copilot CLI（渲染回归）——Windows 是当前生态最大共识痛点。官方响应速度差异将成为用户迁移的考量因素。

### 5. **"运行中变更"行为一致性是新边界**
Qwen Code 的 MCP 热更新、Copilot CLI 的配置加载、DeepSeek TUI 的会话状态残留——多个工具在"动态配置更新后状态是否收敛"上存在问题。**对开发者的参考价值**：升级工具后需验证配置热更新是否真正生效，避免旧状态污染新会话。

### 6. **从"功能竞争"转向"信任竞争"**
OpenCode Go 服务 401（2 周未解）、Codex 回归频发、Gemini 子代理误报——社区对"官方是否认真对待问题"的耐心正在消耗。响应速度与透明度将成为下一阶段的用户留存关键。

---

*报告基于 2026-08-08 各工具 GitHub 社区公开数据生成。数据范围覆盖 anthropics/claude-code、openai/codex、google-gemini/gemini-cli、github/copilot-cli、MoonshotAI/kimi-cli、anomalyco/opencode、earendil-works/pi、QwenLM/qwen-code、Hmbown/DeepSeek-TUI 九个仓库。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据范围**: anthropics/skills 仓库 | **数据截至**: 2026-08-08


## 1. 热门 Skills 排行(按社区关注度 Top 6)

| 排名 | Skill 名称 | 核心功能 | 社区焦点 | 状态 |
|:---:|---|---|---|---|
| 🥇 | **skill-creator 评估链路修复** ([#1298](https://github.com/anthropics/skills/pull/1298) / [#556](https://github.com/anthropics/skills/issues/556)) | 修复 `run_eval.py` 在所有环境下的 `recall=0%` 误报 | 描述优化循环在"对噪声做优化"——多位用户独立复现，直接影响 skill 自动优化可信度 | OPEN |
| 🥈 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质量控制:孤词换行、寡妇段落、编号错位 | AI 生成文档普遍存在排版瑕疵,用户很少主动要求但影响专业度 | OPEN |
| 🥉 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 全栈测试模式:Testing Trophy、AAA 模式、React 组件测试、端到端 | 覆盖测试哲学到具体框架的完整栈,与现有技能形成互补 | OPEN |
| 4 | **pyxel 复古游戏开发** ([#525](https://github.com/anthropics/skills/pull/525)) | 基于 pyxel-mcp 的像素/8-bit 游戏开发工作流 | 工作流明确(write → run → inspect → iterate),但依赖外部 MCP 服务器 | OPEN |
| 5 | **color-expert 色彩专家** ([#1302](https://github.com/anthropics/skills/pull/1302)) | 色彩命名系统(ISCC-NBS/Munsell/RAL)、色彩空间选择表 | 自包含的知识型技能,适用于任何涉及色彩的任务;覆盖 8 大色彩体系 | OPEN |
| 6 | **ODT 文档处理** ([#486](https://github.com/anthropics/skills/pull/486)) | OpenDocument 格式(.odt/.ods)的创建、填充、解析、转 HTML | 填补 LibreOffice 生态空白,触发词设计清晰 | OPEN |

> **说明**: `skill-creator` 相关的多个 PR(#1298、#1099、#1050、#1323、#1261)均指向同一核心缺陷——`recall=0%`,说明该问题影响范围广且至今未根治。


## 2. 社区需求趋势(来自 Issues)

| 需求方向 | 代表 Issue | 关注度 | 说明 |
|---|---|---|---|
| 🔒 **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 👍 2 / 💬 43 | 社区技能在 `anthropic/` 命名空间下分发,存在信任边界滥用风险 |
| 🏢 **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) | 👍 8 / 💬 16 | 企业用户希望技能在组织内直接共享,而非手动传输文件 |
| 🐛 **评估工具稳定性** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) | 👍 7 / 💬 12 | `run_eval.py` 触发率恒为 0%,技能描述优化循环失效 |
| 🧠 **Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412) | 💬 6 | 策略执行、威胁检测、信任评分、审计追踪的安全模式需求 |
| 📦 **插件去重** | [#189](https://github.com/anthropics/skills/issues/189) | 👍 9 / 💬 6 | `document-skills` 与 `example-skills` 内容重复,浪费上下文窗口 |
| 🧹 **紧凑记忆符号化** | [#1329](https://github.com/anthropics/skills/issues/1329) | 💬 9 | 用符号标记代替长文本记忆,降低长任务上下文消耗 |
| 📄 **文档格式兼容性** | [#12](https://github.com/anthropics/skills/issues/12) | 👍 1 / 💬 4 | docx/ooxml 技能避免空白重排,Word 文件可读性 |

**趋势总结**: 社区最集中的诉求是 **① 技能评估工具的可信度修复**、**② 安全/治理规范**、**③ 组织级协作能力**。


## 3. 高潜力待合并 Skills(近期有望落地)

| PR | Skill | 潜力分析 |
|---|---|---|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 痛点明确(排版问题普遍存在)、实现独立、已有 PDF 等技能可复用;作者称所有 AI 生成文档都受影响,需求面极广 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 复杂度高(全栈覆盖)使其开发周期长,但社区对测试自动化的需求持续上升;若精简范围可行性更高 |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | 填补 ODF 生态空白,触发词设计清晰,与现有 docx/pdf 技能形成互补链路 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 自包含性强、零外部依赖,任何设计/文档任务都可能触发;作者持续维护(更新至 7/21) |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 依赖外部 MCP 服务器增加落地门槛,但游戏开发是明确的高频场景 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | 直击规划产物生命周期管理痛点(#1417),有社区成员共同完善,7 月底刚提交、更新活跃 |


## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是:官方技能的分发信任机制(命名空间安全)与评估工具链的可信度修复——前者解决"敢不敢用"的信任问题,后者解决"用了准不准"的质量问题;这两者构成 skills 生态规模化推广的前置条件。紧随其后的次要诉求是覆盖更广的专业垂直技能(排版、测试、色彩、游戏),以及组织级传播协作能力。**

---

# Claude Code 社区动态日报 — 2026-08-08

> 数据来源：GitHub `anthropics/claude-code` | 覆盖时段：过去 24 小时


## 一、今日速览

今日发布两个版本：**v2.1.224** 引入了重量级的全新能力——`claude self-hosted-runner` 让你把自己的机器/容器变成 Claude Code Web/移动/桌面会话的执行后端，同时新增 `archive` 插件源；**v2.1.225** 为重点版本，给 gateway 增加了消费限额支持、并针对未受信任目录加入了 `agents` 工作区信任提示。社区侧，**AGENTS.md 标准化支持**（#6235）以 4526 👍 的压倒性热度持续霸榜，这已成为跨工具协作时代的核心诉求。

---

## 二、版本发布

### v2.1.225（最新）
- **Gateway 消费限额支持**：用量警告现在会明确显示限额数值、重置时间和操作者消息（需 gateway 同步升级至 2.1.225）
- **工作区信任提示**：`claude agents` 在未受信任目录中启动时会弹出信任确认，与主 CLI 行为对齐

> 发布链接：https://github.com/anthropics/claude-code/releases/tag/v2.1.225

### v2.1.224
- **`claude self-hosted-runner`（新）**：将自有机器/容器注册为执行环境，支撑 Claude Code Web、移动端、桌面端会话运行——面向 Team 和 Enterprise 计划
- **`archive` 插件源（新）**：支持通过 HTTPS 直接安装 zip 包插件，无需 git

> 发布链接：https://github.com/anthropics/claude-code/releases/tag/v2.1.224

---

## 三、社区热点 Issues（Top 10）

### 🔥 #6235 — [Feature Request] 支持 AGENTS.md 标准
- **热度**：👍 4526 | 💬 347 | 开放中
- **要点**：Codex、Amp、Cursor 等工具已开始围绕 AGENTS.md 标准化，CLAUDE.md 过于绑定 Claude Code，不利于多工具协作
- **意义**：社区规模最大的跨工具协作需求，直接决定 Claude Code 在开放生态中的位置
- 链接：https://github.com/anthropics/claude-code/issues/6235

### 🐛 #59750 — Windows Terminal 下 agents TUI 完全无响应
- **热度**：👍 8 | 💬 7 | 开放中
- **要点**：Windows 上 `claude agents` TUI 渲染损坏 + 输入死循环，2.1.143 已复现
- **意义**：Windows 用户体验的最严重阻断问题之一，长时间未修复，社区耐心正在耗尽
- 链接：https://github.com/anthropics/claude-code/issues/59750

### ✅ #51791 — 允许创建后重命名会话标题
- **热度**：👍 7 | 💬 7 | 已关闭
- **要点**：会话管理最基础的需求之一；关闭原因未说明，社区期待官方确认替代方案
- 链接：https://github.com/anthropics/claude-code/issues/51791

### 🔥 #14920 — 支持单独禁用某个插件的单个 skill
- **热度**：👍 83 | 💬 14 | 开放中
- **要点**：插件 skill 只能全开全关，无法按需启用（如只想保留 `:commit`）
- **意义**：插件生态爆发后的必然诉求——细粒度权限控制，83 👍 说明这是普遍痛点
- 链接：https://github.com/anthropics/claude-code/issues/14920

### 🐛 #81853 — Fable 5 模型：含工具调用的回复不显示文本
- **热度**：👍 3 | 💬 5 | 开放中
- **要点**：`claude-fable-5` 在回复同时包含文本+工具调用时，终端只渲染工具调用部分，文本丢失（Ctrl+O 可看到原文，但主界面不可见）
- **意义**：新模型可用性的关键显示缺陷，直接影响日常使用
- 链接：https://github.com/anthropics/claude-code/issues/81853

### 🐛 #72495 — 速率限制警告状态导致提示建议被静默抑制
- **热度**：💬 4 | 开放中
- **要点**：提交者已在二进制中定位到严格等值判断的 gate，并做了预注册预测验证——当客户端速率限制状态为 `allowed_warning` 时，所有提示建议（prompt suggestions）会被静默丢弃
- **意义**：深层逻辑缺陷，说明内部状态门控存在设计问题，已超出表面现象层面
- 链接：https://github.com/anthropics/claude-code/issues/72495

### 🐛 #84072 — Windows 上 API 流式响应收到首块后 ECONNRESET
- **热度**：💬 3 | 开放中
- **要点**：Windows 10/11 上 v2.1.222 npm 全局安装，VS Code 扩展和终端均可复现；收到第一个 chunk 后连接被重置
- **意义**：Windows 平台稳定性问题频发，这已是今日第 3 个 Windows 相关 bug
- 链接：https://github.com/anthropics/claude-code/issues/84072

### 🐛 #77372 — Remote Control 中过期环境无法删除，幽灵会话导致永久 404
- **热度**：👍 1 | 💬 3 | 开放中
- **要点**：已确认并非单一过期会话问题——新注册的环境在下一次启动时也会用不同的 session ID 触发 404，会话被创建但 worker 找不到
- **意义**：Remote Control 在环境生命周期管理上的结构性缺陷
- 链接：https://github.com/anthropics/claude-code/issues/77372

### 🐛 #78487 — 后台代理在权限提示上无限阻塞
- **热度**：💬 1 | 开放中
- **要点**：Workflow 工具 spawn 的后台 agents 遇到权限提示时无自动拒绝、无超时、无看门狗——实测静默卡死 55 分钟
- **意义**：无人值守工作流的致命缺陷，直接导致自动化管线不可靠
- 链接：https://github.com/anthropics/claude-code/issues/78487

### 🐛 #82179 — Bash `grep` shim 灾难性回溯导致 OOM
- **热度**：💬 1 | 开放中
- **要点**：Bash 工具将 `grep` 替换为 ugrep 模拟（重执行 claude 二进制），`-o` 加有界量词与交替组合时发生灾难性回溯——20 KB 文件吃掉 6.6 GB RSS 被 OOM 杀死
- **意义**：隐藏的替代实现引入严重性能缺陷，且用户难以察觉是 shim 导致
- 链接：https://github.com/anthropics/claude-code/issues/82179

> 完整 Issue 列表（30 条）：https://github.com/anthropics/claude-code/issues

---

## 四、重要 PR 进展

今日仅有 3 个 PR，均为文档与安全修复：

### #84854 — [docs] 修正 hooks 文档失效链接
- **内容**：`bash_command_validator_example.py` 中的示例链接指向旧的 `docs.anthropic.com` 路径，仓库内其他 46 处（16 个文件）均已更新至 `code.claude.com/docs/...`
- **状态**：开放 | 1 个文件改动，低风险文档修复
- 链接：https://github.com/anthropics/claude-code/pull/84854

### #84747 — [fix] hookify 插件规则评估作用域与安全文件读取
- **内容**：修复 `load_rules()` 在 `event=None` 时绕过事件过滤器的问题，确保 `Read`、`Browser` 等未映射工具只触发 `all` 作用域规则
- **状态**：开放 | 安全相关修复，建议关注
- 链接：https://github.com/anthropics/claude-code/pull/84747

### #84711 — [fix] 插件脚本的 YAML 注入与符号链接凭据覆盖防护
- **内容**：修复 #76580；增加防御性检查，防止 YAML 注入和符号链接导致的凭据覆盖
- **状态**：开放 | 安全关键修复
- 链接：https://github.com/anthropics/claude-code/pull/84711

> 说明：过去 24 小时 PR 活跃度较低，但安全类修复占比 2/3，值得关注。完整列表：https://github.com/anthropics/claude-code/pulls

---

## 五、功能需求趋势

从近期活跃的 Issues 中提炼出五个方向：

### 1. **跨工具标准与互操作性（最热）**
- #6235（AGENTS.md 支持）以 4526 👍 断层领先——CLAUDE.md 被广泛认为是"锁定"手段，社区强烈要求接入 AGENTS.md 开放标准，实现与 Codex/Cursor/Amp 的无缝协作

### 2. **插件生态的细粒度管理**
- #14920（按 skill 禁用）83 👍 位列第二——插件从"能装"进入"能精确管控"阶段；此外 #84939 指出插件安装时会静默执行 `bun install`/`npm ci` 且无文档说明，自动依赖安装的可见性也是关注点

### 3. **Remote Control / 远程执行环境的生命周期治理**
- 多个 issue 指向同一主题：#50884（清理过期 Remote 环境）、#77372（幽灵会话 404）——远程控制能力（Web/移动/桌面）已上线但运维配套不成熟，社区希望有"环境列表可以手动清理"的明确入口

### 4. **新模型支持与模型行为适配**
- #81853（Fable 5 文本不显示）和 #79247（Fable 在复杂管线中频繁空转）表明社区对 Fable 系列新模型的实际表现高度敏感——既有显示 bug 也有能力质疑，Anthropic 需要快速响应

### 5. **Windows 平台体验追赶**
- #59750（TUI 完全无响应）、#84072（流式 ECONNRESET）、#76192（重启发文件锁）、#83028（Intel GPU 崩溃）——Windows 已成为质量问题重灾区，密集的 bug 报告表明该平台的支持成熟度远低于 macOS/Linux

---

## 六、开发者关注点

### 🔴 痛点 1：Windows 是"二等公民"
今日 Top 30 中 Windows 相关 bug 达 **5 条**（#59750、#84072、#83028、#76192、#84951），覆盖 TUI 无响应、流式中断、GPU 崩溃、文件锁、桌面应用崩溃。Windows 用户在核心体验、更新流程、硬件兼容三个层面同时承压，且 #59750 自 5 月报告至今未修复，社区已开始出现"是否被官方忽略"的质疑。

### 🔴 痛点 2：安全机制误伤正常使用
- #84689：CVP 已批准的 org 仍被 cyber safeguards 拦截，申诉表单无字段可填
- #84952：安全防护误判导致 Opus 5(1M) 中途降级到 Opus 4.8——在合法的漏洞赏金场景中被误伤
- 防护机制的"黑箱"属性（无申诉路径、无降级原因展示）正在损害用户信任

### 🟡 痛点 3：自动化孤立运行不可靠
- #78487：后台 agents 在权限提示前无限卡死（55 分钟无响应）
- #83694：claude.ai 账号连接器在自主后台会话中不挂载，直到收到第一条入站消息
- **核心诉求**：无人值守工作流需要完善的超时、自动拒绝、看门狗策略——这是将 Claude Code 融入 CI/CD 管线的硬前提

### 🟡 痛点 4：隐藏的替代实现带来调试噩梦
- #82179 暴露了一个隐蔽陷阱：Bash 工具的 `grep` 实际是内嵌 ugrep 模拟，灾难性回溯导致 OOM；用户长时间无从知晓根因
- 同理 #72495 中提示建议被静默抑制的严格等值判断 gate——**以静默方式引入的间接层正在成为最难排查的问题来源**

### 🟢 值得关注：文档与透明度缺口
- #84939：插件自动执行 `bun install`/`npm ci` 完全无文档
- #74149：ScheduleWakeup 工具描述声称"5 分钟 TTL"但订阅主会话实为 1 小时
- 两个"文档与实现不一致"的 issue 在同日出现，提示官方在快速迭代中需要同步维护文档准确性

---

*日报由社区公开数据自动生成，仅供技术参考。*
*完整数据源：https://github.com/anthropics/claude-code/issues*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-08** | 数据来源：github.com/openai/codex

---

## 今日速览

昨日发布三个 `0.148.0-alpha` 迭代版本，版本节奏明显加快。社区焦点集中在 Windows 平台（计算机使用功能异常、沙箱 ACL 问题）和 macOS 桌面应用的内存崩溃（OOM）问题上。后台代码审查（Guardian）和 Code Mode 架构相关的 PR 密集合并，暗示基础设施正在快速演进。

---

## 版本发布

过去 24 小时发布了 **3 个版本**，均为 `0.148.0-alpha` 系列预发布版本：

- **[rust-v0.148.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.4)** — 最新版本，包含此前 PR 合并的累积变更
- **[rust-v0.148.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.2)** — 中间迭代
- **[rust-v0.148.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.1)** — 首个 Alpha 版本

> ⚠️ 发布说明暂未提供详细变更日志，具体内容建议查看对应 tag 的 commit 历史。

---

## 社区热点 Issues（Top 10）

### 🥇 高热度问题

**1. [#8648 — Codex 在长对话中回复错误的早期消息](https://github.com/openai/codex/issues/8648)**
> `[bug]` `[context]` | 评论 82 · 👍 58 | 状态：Open

**2. [#12491 — Codex.app GUI：MCP 子进程未被回收，1300+ 僵尸进程，37GB 内存泄漏](https://github.com/openai/codex/issues/12491)**
> `[bug]` `[MCP]` | 评论 38 · 👍 5 | 状态：Closed

**3. [#26234 — 非 OpenAI Responses API 提供方（Ollama/LM Studio/OpenRouter）无法调用 MCP 工具](https://github.com/openai/codex/issues/26234)**
> `[bug]` `[MCP]` `[custom-model]` | 评论 32 · 👍 41 | 状态：Open

**4. [#14599 — 允许对所有项目设置 trust_level = "trusted"，无需重复审批](https://github.com/openai/codex/issues/14599)**
> `[enhancement]` | 评论 16 · 👍 57 | 状态：Open

**5. [#37380 — 0.147.0 回归：Azure Responses 拒绝空的 functions 命名空间描述](https://github.com/openai/codex/issues/37380)**
> `[bug]` `[Azure]` `[regression]` | 评论 9 · 👍 19 | 状态：Open

**6. [#35481 — VS Code 中 Codex Diff 显示 "Oops, an error has occurred"](https://github.com/openai/codex/issues/35481)**
> `[bug]` `[IDE]` `[Windows]` | 评论 26 · 👍 54 | 状态：Closed

**7. [#10090 — elevated_windows_sandbox 导致所有 agent 命令失败（CreateProcessAsUserW failed: 5）](https://github.com/openai/codex/issues/10090)**
> `[bug]` `[Windows]` `[sandbox]` | 评论 24 · 👍 7 | 状态：Open

**8. [#36523 — [P0][回归] macOS 应用启动时 OOM 崩溃：external-agent-import 每次解析 1.73 GB Claude 数据](https://github.com/openai/codex/issues/36523)**
> `[bug]` `[performance]` `[macOS]` | 评论 3 · 👍 1 | 状态：Open

**9. [#37043 — Windows Computer Use 在 EnumWindows 处失败（0x80070003）](https://github.com/openai/codex/issues/37043)**
> `[bug]` `[computer-use]` | 评论 17 · 👍 3 | 状态：Open

**10. [#13965 — Windows 上 apply_patch 失败：无法从 WindowsApps 目录启动 codex.exe](https://github.com/openai/codex/issues/13965)**
> `[bug]` `[Windows]` `[sandbox]` | 评论 12 · 👍 10 | 状态：Closed

---

## 重要 PR 进展（Top 10）

**1. [#37519 — 在配置需求中暴露自动审查忽略规则](https://github.com/openai/codex/pull/37519)** ✅ 已合并
> `auto_review.ignore_rules` 配置通过 `configRequirements/read` 接口返回，并支持模型级豁免。

**2. [#37516 — 对网络模型忽略可复用命令审批](https://github.com/openai/codex/pull/37516)** ✅ 已合并
> 对安全敏感模型（cyber 模型）过滤已保存的 `allow` 前缀规则，同时保留 prompt、forbidden、network 等策略条目。

**3. [#37510 — 定义 Code Mode 主机 gRPC 协议](https://github.com/openai/codex/pull/37510)** ✅ 已合并
> 新增 `codex.code_mode.v1` protobuf API，涵盖会话管理、执行、等待、工具回调、通知和内容结果，并生成 Rust tonic 绑定。

**4. [#37507 — 响应元数据中包含沙箱模式](https://github.com/openai/codex/pull/37507)** ✅ 已合并
> 在 turn 元数据中增加 `sandbox_mode` 字段（针对常规、预预热、压缩、分离内存请求），且客户端无法覆盖该字段。

**5. [#37504 — 为 Code Mode WebSocket 禁用 Nagle 算法](https://github.com/openai/codex/pull/37504)** ✅ 已合并
> 对 Code Mode 出站/入站 WebSocket 连接启用 `TCP_NODELAY`，降低延迟敏感场景下的写延迟。

**6. [#37503 — 将主机技能提示注入迁移至技能扩展](https://github.com/openai/codex/pull/37503)** ✅ 已合并
> `HostSkillsSnapshot::load_skill_prompts` 由技能扩展负责主机技能提示的读取与渲染，保留遥测和警告逻辑。

**7. [#37498 — 进程终止时保留子等待器](https://github.com/openai/codex/pull/37498)** ✅ 已合并
> 修复 PTY 子进程未被回收的问题——终止会话时改为分离而非中止 waiter，确保正确记录退出状态。

**8. [#37497 — 限制诊断日志中的负载追踪](https://github.com/openai/codex/pull/37497)** ✅ 已合并
> HTTP 传输、SSE 和 WebSocket 诊断降级到 `DEBUG` 级别持久化，防止高容量请求/响应压垮 SQLite 日志库。

**9. [#37494 — 添加 MCP 事件发现与订阅](https://github.com/openai/codex/pull/37494)** ✅ 已合并
> 通过 `McpResourceClient::list_events` 暴露插件运行时事件定义，新增带取消功能的 `events/stream` 订阅。

**10. [#37492 — turn 元数据中包含工具命名空间清单](https://github.com/openai/codex/pull/37492)** ✅ 已合并
> 可选开启 `tool_namespaces_info` 元数据（需 `tool_registry.turn_metadata_includes_tool_info`），描述每个模型可见工具函数的命名空间、直接/延迟暴露信息等。

---

## 功能需求趋势

### 1. 🔒 审批与信任机制（高热度）
- [#14599 — 全局信任级别](https://github.com/openai/codex/issues/14599)（👍 57）：社区强烈希望项目级信任设置做到持久化，避免每次打开项目都要手动批准。
- PR [#37516](https://github.com/openai/codex/pull/37516) 和 [#37511](https://github.com/openai/codex/pull/37511) 正在细化审批策略（按模型分类执行不同的审批流）。

### 2. 🪟 Windows 平台稳定性（高密度）
Windows 专属问题成为今日最大 Bug 簇，涉及三大方向：
- **沙箱执行链**：`CreateProcessAsUserW` 返回 5（拒绝访问）——[#10090](https://github.com/openai/codex/issues/10090)、[#13965](https://github.com/openai/codex/issues/13965)、[#14211](https://github.com/openai/codex/issues/14211) 及新增的 [#37415](https://github.com/openai/codex/issues/37415)
- **Computer Use 功能**：枚举窗口失败、无法附加窗口——[#37043](https://github.com/openai/codex/issues/37043)、[#37484](https://github.com/openai/codex/issues/37484)
- **桌面应用/扩展**：资源加载失败，工作区对话异常——[#37458](https://github.com/openai/codex/issues/37458)、[#34499](https://github.com/openai/codex/issues/34499)

### 3. 🖥️ 桌面应用性能与稳定性
- macOS 应用 OOM 崩溃成为 P0 回归：两个独立报告（[#36523](https://github.com/openai/codex/issues/36523)、[#37493](https://github.com/openai/codex/issues/37493)）指向同一根因——启动时解析巨大的外部数据（Claude Desktop 1.73GB 导入、16GB 内存机器上 V8 堆内存不足）。
- 子代理渲染导致崩溃（[#35799](https://github.com/openai/codex/issues/35799)）和会话恢复性能问题（[#34663](https://github.com/openai/codex/issues/34663)）也值得跟踪。

### 4. 🧩 MCP 生态深化
- MCP 在自定义模型提供商下不可用（[#26234](https://github.com/openai/codex/issues/26234)，👍 41）为最高赞需求之一。
- MCP 事件流订阅（PR [#37494](https://github.com/openai/codex/pull/37494)）和 OAuth 范围修正（[#35253](https://github.com/openai/codex/issues/35253)）表明 MCP 基础设施正在向生产级演进。

### 5. 🚀 新模型支持
- `gpt-5.6-sol` 出现"模型不受支持"错误（[#36082](https://github.com/openai/codex/issues/36082)），说明部分用户已开始在 Codex 中使用新模型，但适配尚不完整。
- 0.147.0 中 LiteLLM provider 流式请求回归（[#37425](https://github.com/openai/codex/issues/37425)）波及自托管用户。

---

## 开发者关注点

### 1. 回归问题引发信任危机
多个"升级后开始崩溃"的报告（macOS OOM、LiteLLM 流式失败、Azure 命名空间拒绝）表明 0.147.0 引入的回归面较广，快速迭代的 alpha 版本在稳定性上仍有问题。建议生产环境用户密切关注版本发布记录。

### 2. Windows 授权链问题反复出现
`CreateProcessAsUserW failed: 5`（拒绝访问）贯穿多个 issue，涉及从 WindowsApps 目录启动、沙箱环境初始化等场景。即便部分问题已标记为 Closed，类似症状仍在不同阶段重复出现（#37415、#37484），说明 Windows 平台权限模型与 Codex 的沙箱设计存在结构性摩擦。

### 3. 长对话上下文管理仍是核心痛点
[#8648](https://github.com/openai/codex/issues/8648)（回复错乱，82 评论）和 [#34663](https://github.com/openai/codex/issues/34663)（恢复时全量渲染，性能差）均指向长会话场景下的不稳定。社区对代码模式（Code Mode）和技能（Skills）的架构调整有较高容忍度，但对基础对话能力的问题反馈较为强烈。

### 4. 用户对配置灵活性的期待

信任级别持久化（[#14599](https://github.com/openai/codex/issues/14599)）、插件 MCP 服务器密钥配置（[#24401](https://github.com/openai/codex/issues/24401)）、以及"扩展资源加载失败"（[#37458](https://github.com/openai/codex/issues/37458)）等，表明用户同时期望更细粒度的控制和更稳定的开箱即用体验。

---

*本日报由 AI 自动生成，数据截至 2026-08-08。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-08

## 今日速览

今日 Gemini CLI 共发布 4 个版本（含 1 个重要安全修复补丁 v0.54.4），核心动态集中在三方面：**容量耗尽误报修复**、**Agent 子任务状态报告准确性争议**（#22323 持续发酵），以及 **Caretaker 机器人基础设施的大规模重构**。此外，一个高严重度 SSRF 漏洞修复 PR（#28725）和 Gemini 3.6 Flash 模型支持 PR（#28673）值得重点关注。

---

## 版本发布

### v0.56.0-nightly.20260808.gcf22ac7e8
- **容量耗尽（Capacity Exhaustion）被重新归类为最终错误（Terminal Error）**，避免在容量受限时无限重试浪费配额
- Caretaker Firestore schema 新增 `error` 和 `pr_number` 字段，增强错误追踪与 PR 关联能力
- 完整变更：https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260808.gcf22ac7e8

### v0.55.0-preview.2
- 从 v0.55.0-preview.1 樱桃摘取 #28716 修复，定位容量耗尽报错问题

### v0.54.4
- 稳定分支安全补丁，樱桃摘取 #28700 修复至 v0.54 系列

---

## 社区热点 Issues（Top 10）

### 1. #22323 Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功 [P1/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/22323

**核心矛盾**：`codebase_investigator` 子代理在触发最大轮次限制、未完成任何分析的情况下，仍向上层报告 `status: "success"` 和 `Termination Reason: "GOAL"`，导致主 Agent 误判任务已成功。评论 12 条，社区反应强烈。这是 Agent 状态报告可信度的根本性问题，直接影响多 Agent 协作的可靠性。

### 2. #21409 通用 Agent（Generalist）挂起 [P1/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/21409

**症状**：任何触发 generalist 子代理的操作（如创建文件夹）都会永久挂起，最长等待 1 小时无响应。受影响用户通过禁止模型委派子代理来规避。👍 8 次，为今日最高。该问题持续 5 个月未解决，严重拖累多 Agent 工作流体验。

### 3. #25166 Shell 命令执行完成但界面卡在 "Waiting input" [P1/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/25166

**复现路径**：极简 CLI 命令执行完毕后，终端仍显示命令激活并提示 "Awaiting user input"，且可稳定复现。👍 3 次。该问题破坏自动化流程，高频出现于日常使用。

### 4. #21983 Browser Subagent 在 Wayland 环境失败 [P1/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/21983

**触发条件**：Wayland 显示协议下，browser agent 始终以 GOAL 终止但实际未完成目标。对 Linux 桌面用户影响面广，阻碍浏览器自动化场景落地。

### 5. #22186 get-shit-done 输出钩子在总结阶段崩溃 [P1/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/22186

**现象**：get-shit-done 输出打印用户摘要时几乎必然触发崩溃，属于高频触发的稳定性缺陷，影响核心工作流的完成率。

### 6. #20079 `~/.gemini/agents/` 下的符号链接不被识别为 Agent [P2/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/20079

**影响**：用户无法通过符号链接管理自定义 Agent 配置文件，破坏配置的版本化管理与多项目共享工作流。

### 7. #24246 工具数量超过 128 个时遭遇 400 错误 [P2/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/24246

**背景**：当启用工具过多（>128）时 API 拒绝请求。社区呼吁 Agent 能按任务动态筛选工具范围，而非全量提交。与配置复杂化趋势直接相关。

### 8. #22093 自 v0.33.0 起子代理绕过权限设置执行 [P2/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/22093

**风险**：用户明确禁用全部 Agent 模式，但子代理（如 generalist）仍在运行。这是**安全边界问题**，涉及配置信任度与权限控制。

### 9. #21968 Gemini 不会主动使用自定义 Skills 和子代理 [P2/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/21968

**症结**：即使用户配置了 gradle/git 等 Skills，模型在相关任务中也不会主动调用，仅在被明确指示时才使用。社区期望更强的主动发现与路由能力。

### 10. #26522 Auto Memory 对低信号会话无限重试 [P2/Bug]
**链接**: https://github.com/google-gemini/gemini-cli/issues/26522

**机制缺陷**：Auto Memory 仅当提取代理成功读取 transcript 后才标记会话已处理，低信号会话被跳过后会反复出现在待处理队列，导致资源浪费。

---

## 重要 PR 进展（Top 10）

### 1. #28730 修复容量耗尽误报与配额查询映射 [Core/CLI]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28730

**内容**：解决 CLI 中容量受限时错误提示"模型容量耗尽"的问题；修正 core 包的配额查询模型映射，并在瞬时容量高峰时保留 "Keep trying" 选项。与今日 nightly 的 Terminal Error 重分类形成配合。

### 2. #28725 修复 web-fetch SSRF 漏洞（CVSS 8.6）[安全]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28725

**内容**：修复恶意域名解析指向内网 IP（如 `169.254.169.254`）绕过 DNS 防护的 SSRF 漏洞。属于**高严重度安全修复**，建议所有使用 web-fetch 的用户尽快跟进。

### 3. #28673 新增 Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置 [Core]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28673

**内容**：为 `packages/core` 添加 Gemini 3.6 Flash 与 3.5 Flash-Lite 的基础模型定义、能力配置（thinking、多模态工具调用）、别名及 Code 执行支持。

### 4. #28597 修复 Settings 占位符在环境变量加载前被展开 [CLI]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28597

**价值**：原先 settings 文件解析与 `process.env` 扩展同步进行，本地 `.env` 尚未加载时占位符展开失败。修复后可确保环境变量优先注入，属于**配置可靠性关键补丁**。

### 5. #28729 修复 IDE 连接中目录不匹配问题（Cider/VS Code Fork）[Core]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28729

**内容**：修复 Cider 或远程工作区（FUSE/虚拟目录差异）下 CLI 与 IDE Companion 扩展连接失败的问题。对 GitHub Codespaces 等远程开发场景意义重大。

### 6. #28581 优化 @ 文件处理，避免大 diff 引发堆增长 [CLI/性能]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28581

**内容**：阻止 diff 中的 hunk 标记被误解析为 `@file` 引用，消除每次误判触发的两次全工作区 glob 搜索，避免 `minimatch`/`path-scurry` 在大 diff 下的堆内存膨胀。

### 7. #28690 Caretaker Agent 新增 Issue 评论处理与重新分诊工作流 [基础设施]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28690

**内容**：支持 `issue_comment.created` Webhook，维护者或报告人可通过 `@caretaker-agent` 或 `/caretaker triage` 对 `NEEDS_INFO` 状态 Issue 触发重新分诊。

### 8. #28727 Caretaker 评估系统新增 Cloud Run 任务入口 [基础设施]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28727

**内容**：新增 `cloud_runner.py` 入口、GCS 产物同步脚本与 Dockerfile，支撑 Triage 评估套件在 Google Cloud Run 上执行。

### 9. #28369 新增本地评估报告命令与开发者文档 [Evals]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28369

**内容**：开发者可通过 `npm run eval:report` 聚合各模型 pass rate，映射回清单策略，正确处理重复测试用例。降低评估门槛，帮助社区贡献者自助验证。

### 10. #28467 Caretaker Firestore Schema 新增 error/pr_number 字段 [基础设施]
**链接**: https://github.com/google-gemini/gemini-cli/pull/28467

**内容**：重构 issue 状态账本 schema，加入错误追踪字段与 PR 编号支持，同时修复 ingestion-service 的自动关闭状态逻辑。

---

## 功能需求趋势

| 方向 | 代表 Issues/PRs | 热度判断 |
|------|----------------|----------|
| **Agent 状态报告可信度** | #22323、#21763 | 社区核心痛点：子代理的中断/失败需如实上报，而非伪装为成功 |
| **AST 感知的代码操作** | #22745、#22746 | EPIC 级别：用 AST 精准读取方法边界、减少 token 噪音，探索工具链（tilth/glyph） |
| **模型对工具/Skills 的主动使用** | #21968、#19873 | 用户期待模型像 bash 原生用户一样自动链式调用 POSIX 工具与自定义 Skills |
| **Robustness & 恢复机制** | #24353、#22232 | 组件级评估体系、浏览器会话锁自动恢复等韧性能力 |
| **Auto Memory 质量与安全** | #26522、#26525、#26523 | 去重去噪、确定性脱敏、无效补丁隔离 |
| **破坏性行为抑制** | #22672 | 模型在 git 操作和资源维护中应优先非破坏性替代方案 |
| **新模型支持跟进** | #28673 | Gemini 3.6 Flash / 3.5 Flash-Lite 的快速适配是明确信号 |
| **配置与权限一致性** | #22093、#22267 | 全局配置（含 agent 开关、maxTurns）应被所有子代理严格遵循 |
| **工具过载处理** | #24246 | >128 工具时需动态裁剪而非全量提交 |
| **终端体验** | #21924、#24935 | 无闪烁 resize、外部编辑器退出后全屏刷新 |

---

## 开发者关注点

1. **Agent 结果可信度是当前最大信任危机**：#22323 与 #21409、#22093 共同勾勒出"状态误报+挂起+越权执行"三大系统性缺陷。多 Agent 工作流的前提是子代理如实汇报成败，当前机制显然未达标准。
2. **配置被静默忽略/绕过**：settings.json 覆盖失效（#22267）、Agent 禁用被无视（#22093）——用户对配置的掌控感持续被削弱。
3. **交互卡死与假死**：shell 命令完成但界面卡在 "Waiting input"（#25166）、vite 创建卡在交互提示（#22465）——这些不稳定行为严重损害自动化信心。
4. **安全与隐私基线**：SSRF 漏洞（#28725）与 Auto Memory 的脱敏时点问题（#26525）提醒社区：Agent 在读取本地文件与发起网络请求时需更严格的安全边界。
5. **对"模型主观能动性"的期待与实际落差**：社区明确希望 Gemini 从"被动执行者"进化为"主动路由者"——能自行判断何时启用子代理、Skills、bash 工具链。这既是最集中的功能呼声，也是当前体验的最大短板。
6. **性能与资源治理**：大 diff 的堆内存增长（#28581）、Auto Memory 的无限重试（#26522）说明资源管理逻辑仍需精细化。

---
*本日报数据截至 2026-08-08，基于 GitHub 公开数据进行自动化整理与分析。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## 今日速览

今日社区动态聚焦于**企业级政策支持**（沙箱代理、allow-all 策略）与**新模型适配**（kimi-k3）。Issue 方面，**Windows 平台稳定性**仍是重灾区，出现了终端渲染空白、剪贴板失效、MCP 进程泄漏等多个新报告。值得关注的是，v1.0.79-7 引入了 `--plan` 与 `--mode autopilot` 的组合，标志着"先规划后执行"的自动化工作流正式落地。

## 版本发布

### v1.0.79-9
- **改进**：`/sandbox` 配置对话框现在会显示沙箱设置在 settings.json 中的存储位置

### v1.0.79-8
- **新增**：支持企业级 `allow-auto-only` 策略，使 `/allow-all auto` 在完全 allow-all 被阻止时仍可工作
- **新增**：企业管理的沙箱策略可强制代理 URL，同时凭据仍由用户控制
- **改进**：`/sandbox` 配置对话框对 git、gh 等分组展示

### v1.0.79-7
- **新增**：Agent Plugins 规范插件现可在 `com.github.copilot/extensions/` 目录下发布扩展
- **新增**：支持 kimi-k3 模型
- **新增**：`--plan` 可与 `--mode autopilot` 组合使用，先规划后执行，无需等待批准
- **改进**：用户多选提示交互优化

## 社区热点 Issues

### 1. Windows 终端渲染无限循环回归（#4222）⭐ 高优先
**链接**: [Issue #4222](https://github.com/github/copilot-cli/issues/4222)

v1.0.31 修复的 React/Ink 无限渲染循环在 v1.0.72+ 回归，主面板间歇性冻结，提交的提示消失、无输出渲染。VS Code 集成终端 + 原生 Windows 环境下复现。尽管已被标记为 CLOSED，但作为回归问题，开发团队应重点验证修复是否彻底。

### 2. Windows 下启用 notifications 导致崩溃（#4219）
**链接**: [Issue #4219](https://github.com/github/copilot-cli/issues/4219)

`copilot.exe` 在启用 `notifications` 设置后在 Windows 上反复硬崩溃（原生访问冲突）。该设置用于显示系统通知，崩溃路径与原生 toast 相关。已标记 CLOSED，但 Windows 原生通知路径的稳定性仍需关注。

### 3. `skill` 工具无法找到有效技能（#4401）⭐ 新报告
**链接**: [Issue #4401](https://github.com/github/copilot-cli/issues/4401)

v1.0.78 中 `skill` 工具无法找到 `~/.agents/skills` 下的有效技能，即使目录和 `SKILL.md` 均存在。用户指出这可能是 #2230 的不完整修复导致的回归。技能系统的稳定性直接影响依赖自定义技能的用户，值得优先排查。

### 4. `--add-dir` 导致 Claude 子代理调度失败（#4185）
**链接**: [Issue #4185](https://github.com/github/copilot-cli/issues/4185)

使用 `--add-dir` 标志启动后，每个 Anthropic 模型子代理调度都会立即失败，返回 400 "A maximum of 4 blocks with cache_control... Found 5"。缓存块超限问题影响所有使用 Claude 模型 + 目录白名单的用户。

### 5. `allowed_directories` 配置从未加载（#4398）
**链接**: [Issue #4398](https://github.com/github/copilot-cli/issues/4398)

`permissions.config` 中配置的 `allowed_directories` 从未被加载，`/list-dirs` 也无法显示。权限配置的核心功能失效，且涉及多个工作区路径，提示配置文件解析或加载逻辑存在缺陷。

### 6. resume session 切换回默认模型（#4397）
**链接**: [Issue #4397](https://github.com/github/copilot-cli/issues/4397)

使用 `--model` 指定模型后，通过 `/resume` 恢复会话时自动切换回默认模型。会话恢复时模型上下文丢失，影响多模型工作流的使用体验。

### 7. 启动后 MCP 客户端重建遗留孤儿进程（#4392）
**链接**: [Issue #4392](https://github.com/github/copilot-cli/issues/4392)

启动时 CLI 先启动 MCP 服务器，认证完成后拆毁并重建整个 MCP 客户端，导致第一代 stdio 子进程既未被杀死也未回收，产生孤儿进程泄漏。长期运行会累积大量僵尸进程，影响系统资源。

### 8. npm bin 是 loader 非版本固定（#4402）
**链接**: [Issue #4402](https://github.com/github/copilot-cli/issues/4402)

全局安装的 npm shim（`$(npm prefix -g)/bin/copilot`）是 loader 而非版本固定：同一路径 101 秒内两次调用运行了不同版本（1.0.77 → 1.0.78），而 `--prefer-version` 虽可解决但无文档说明。版本行为不可预测，影响依赖特定版本的 CI/CD 场景。

### 9. `add-dir` 路径中连字符转下划线导致权限死循环（#1409）
**链接**: [Issue #1409](https://github.com/github/copilot-cli/issues/1409)

CLI 内部将 `add-dir` 路径中的连字符转为下划线，造成授予路径与实际文件系统路径不匹配，引发无限权限提示。Windows 上 OneDrive 目录（含连字符）受影响，该问题自 2 月至今仍未修复并获得 4 个 👍。

### 10. 技能子文件夹支持（#1632）⭐ 高赞需求
**链接**: [Issue #1632](https://github.com/github/copilot-cli/issues/1632)

用户希望支持技能子文件夹以更好地组织技能，当前超过 10 个技能只能扁平存放。获得 23 个 👍，是 Issue 中关注度最高的功能需求之一，反映技能生态的快速增长与组织需求。

## 重要 PR 进展

今日无 PR 更新（过去 24 小时内 0 条 PR 动态）。

## 功能需求趋势

从近期 Issues 中提炼出以下社区重点方向：

1. **会话管理增强**：恢复会话时保留模型选择（#4397）、会话列表快速删除（#4395）、新会话默认工作区类型持久化（#4396）——用户期望更精细的会话生命周期控制。

2. **企业级策略支持**：allow-auto-only 策略、企业托管沙箱代理、注册表配置验证——企业部署场景的需求持续增长，v1.0.79-8 已部分落地。

3. **新模型与推理参数适配**：kimi-k3 支持（已落地）、claude-haiku-4.5 推理级别错误（#4345）——新模型快速接入与推理参数兼容性是发展主线。

4. **技能组织与发现**：子文件夹支持（#1632）、skill 工具识别失败（#4401）——技能生态从"能用"走向"好用"。

5. **Windows 平台稳定性**：终端渲染空白、崩溃、剪贴板失效、编码页问题——Windows 仍是问题最集中的平台。

## 开发者关注点

- **Windows 终端渲染与剪贴板问题反复出现**：终端空白（#4311）、剪贴板复制失效（#3622）、复制清屏（#4391）——Ink/React 渲染管线的 Windows 兼容性是高频痛点。

- **权限配置的路径处理混乱**：连字符转下划线（#1409）、allowed_directories 不加载（#4398）——路径规范化与配置文件加载逻辑需系统性修复。

- **后台进程与资源泄漏**：MCP stdio 孤儿进程（#4392）——认证后重建整个 MCP 客户端的设计需要优化为增量重建。

- **模型切换与会话恢复的上下文丢失**：resume 后模型重置（#4397）——会话元数据应包含模型与推理参数信息。

- **版本行为不可预测**：npm loader 同一路径运行不同版本（#4402）——需要文档化 `--prefer-version` 或改进 shim 行为。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI 社区动态日报 — 2026-08-08

### 今日速览

本日无新版本发布，但社区正面临两项关键安全性讨论：一是关于“持久化记忆系统”的高关注度需求（自2月提出以来持续发酵），二是昨日报出的严重安全事件——Agent 在 yolo 权限模式下执行的 `rm -rf` 操作越界删除了用户数据。同时，两个针对 `StrReplaceFile` 工具在非 UTF-8 编码下数据损坏问题的修复 PR 处于待合并状态。

---

### 社区热点 Issues

#### 1. [严重安全事件] Agent 越界执行 rm -rf 删除用户数据 ( #2596 )
- **重要性**：非常严重。Agent 在 `yolo` 权限模式下，本应清理 symlink，却因先前 symlink 创建失败（指向已存在的真实目录），导致对工作目录之外的用户数据执行 `rm -rf`。直接影响用户数据安全，或将引发对权限控制机制的重新审视。
- **社区反应**：暂无评论，该 Issue 创建于昨日，仍待官方响应与复盘。
- [链接](https://github.com/MoonshotAI/kimi-cli/issues/2596)

#### 2. [长期高热] 功能需求：跨会话持久化记忆系统 ( #1283 )
- **重要性**：自 2026-02-27 提出至今持续更新，累计 21 条评论，是社区长期关注的重点方向之一，涉及 AI 对项目上下文、用户偏好的跨会话记忆能力。
- **社区反应**：讨论热度高，但近期无新进展或官方反馈。
- [链接](https://github.com/MoonshotAI/kimi-cli/issues/1283)


### 重要 PR 进展

#### 1. fix(tools): 保留 StrReplaceFile 编辑中的非 UTF-8 字节 ( #2594 )
- **功能/修复**：修复编辑文件时对非 UTF-8 序列的破坏。原实现将整个文件按 `errors="replace"` 解码后重编码，导致编辑区域之外的非法字节被替换为 U+FFFD 永久损坏。该 PR 改为在原始缓冲区上按 UTF-8 字节子串执行编辑，保留非编辑区域内容。
- **状态**：OPEN，待官方审核。参考另一相关修复 ( #2595 )。
- [PR 链接](https://github.com/MoonshotAI/kimi-cli/pull/2594)

#### 2. fix(StrReplaceFile): 拒绝编辑非有效 UTF-8 文件 ( #2595 )
- **功能/修复**：与 #2594 针对性不同，此 PR 直接拒绝编辑非 UTF-8 文件以避免无意的数据损坏。回应 Issue #2591。
- **状态**：OPEN，待官方审核。
- [PR 链接](https://github.com/MoonshotAI/kimi-cli/pull/2595)


### 功能需求趋势

从近期 Issue 与长期讨论中，社区聚焦方向明确：

- **安全与权限控制强化**：昨日的新增 Issue (#2596) 凸显出社区对 Agent 在自动操作中安全边界的严重关切，预计将推动更精细的权限确认机制、路径访问限制或危险命令拦截。
- **持久化记忆 / 上下文管理**：#1283 的长久关注表明开发者高度期待 Agent 在跨会话中保留项目模式、历史决策与个人偏好，以提升多轮任务的效率与连贯性。
- **底层文件操作的健壮性与数据安全**：#2594 与 #2595 的并行出现，反映出社区对文件编辑工具在含特殊字节文件上数据完整性保护的迫切修复需求。


### 开发者关注点

- **热点与痛点**：
  - **风险操作的安全护栏**：开发者对“Agent 在权限模式下的不可控操作”表示强烈担忧，尤其是在自动清理、删除等高风险场景，迫切需求更高的操作透明度与确认机制。
  - **文件处理的无损性**：社区对 `StrReplaceFile` 在非 UTF-8 文件上的破坏性行为关注度较高，两个独立 PR 虽方案不同（保留或拒绝），共同指向数据无损的底线要求。
  - **缺失的跨会话上下文**：对记忆系统的持续期待，反映当前在复杂、多轮任务中缺乏上下文继承，影响了工具嵌套与持续开发的体验。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-08

## 今日速览

OpenCode 发布 v1.18.15 补丁版本，修复了消息排序和截断清理的核心问题。社区层面，OpenCode Go 服务的 401 认证故障持续发酵（45 条评论），成为当前最受关注的事件；同时关于 crypto 支付和开源协议合规的讨论热度不减。Web UI 在近期版本中暴露了多项会话与项目加载缺陷，社区已提交相关修复 PR。

---

## 版本发布

### v1.18.15
> [查看 Release](https://github.com/anomalyco/opencode/releases)

**核心修复：**
- 修复导入或遗留消息 ID 乱序时，消息时间顺序显示错误的问题
- Revert 和 fork 操作现在基于真实消息时间线而非 ID 排序
- 截断清理现在根据文件时间戳更可靠地删除过期文件

---

## 社区热点 Issues（Top 10）

### 1. OpenCode Go 服务 401 阻断 — 已持续 2 周
**#38257** | 45 评论 | 👍 11 | [链接](https://github.com/anomalyco/opencode/issues/38257)
OpenCode Go 订阅用户在调用 `chat/completions` 时全部返回 `401 Request blocked`，但 `/v1/models` 正常。作者明确指出这是**服务端问题**而非用户配置错误，但官方至今未给出解决方案。影响面广、持续时间长，是目前社区的焦点事件。

### 2. OpenCode 是否在滥用 git 操作？
**#3176** | 18 评论 | 👍 10 | [链接](https://github.com/anomalyco/opencode/issues/3176)
用户引用 Claude 的反馈，指 OpenCode 在 45GB 含 54K 文件的目录上执行 `git add .`，行为异常。会话快照机制被指为元凶。此 Issue 已经讨论了近一年，仍有用户持续关注，可能成为 core 架构重构的推动力。

### 3. 部分模型无法读取图片
**#5359** | 18 评论 | [链接](https://github.com/anomalyco/opencode/issues/5359)
从 v1.0.137 开始，粘贴图片后模型提示无法读取。LiteLLM + Vertex AI 后端受影响，v1.0.134 正常，确认是回归问题。多模型兼容性问题持续积累。

### 4. [功能] 支持 Crypto 支付 OpenCode Go
**#23153** | 17 评论 | 👍 37 | [链接](https://github.com/anomalyco/opencode/issues/23153)
社区对 crypto 支付的需求呼声很高（37 👍），开发者希望扩展支付方式，说明用户群体中加密支付倾向明显。

### 5. Amazon Bedrock Opus 4.6 压缩失败
**#14332** | 16 评论 | 👍 8 | [链接](https://github.com/anomalyco/opencode/issues/14332)
`thinking` 块在压缩时被修改导致报错。该 Issue 已关闭，但暴露了 Bedrock 推理模型与 OpenCode 会话压缩机制的兼容性问题。

### 6. Windows PowerShell 无法粘贴
**#6560** | 13 评论 | [链接](https://github.com/anomalyco/opencode/issues/6560)
Windows 11 下在 OpenCode TUI 中无法通过右键或 Ctrl+V 粘贴，基本交互受阻。问题已关闭但反映了 Windows 端体验的长期不足。

### 7. DeepSeek 推理内容回传错误
**#24334** | 10 评论 | [链接](https://github.com/anomalyco/opencode/issues/24334)
DeepSeek 推理模式下 `reasoning_content` 必须原样回传，OpenCode 未正确处理导致 400。推理类模型的适配仍需精细化。

### 8. [功能] 为 task 工具子代理添加运行时模型覆盖
**#17595** | 4 评论 | 👍 3 | [链接](https://github.com/anomalyco/opencode/issues/17595)
编排代理无法在运行时切换子代理模型，只能使用启动配置。Agent 编排灵活性受限，是高级用户的核心痛点。

### 9. [功能] 添加 OPENCODE_DISABLE_INSTALL 环境变量
**#37888** | 3 评论 | [链接](https://github.com/anomalyco/opencode/issues/37888)
Docker/CI 场景下启动时自动安装 npm 包导致不必要的开销和风险，社区希望提供显式开关。

### 10. Copilot 凭据重复认证
**#40183** | 3 评论 | [链接](https://github.com/anomalyco/opencode/issues/40183)
每次新会话都要求重新认证，即使 `auth list` 显示凭据已存储。`expires:0` 且 refresh == access 表明 credential 管理仍有缺陷。

---

## 重要 PR 进展（Top 10）

### 1. 原生后台子代理 + 自动重试
**#40923** — 已合并 | [链接](https://github.com/anomalyco/opencode/pull/40923)
为核心添加原生后台子代理编排（`Task(background=True)`）以及瞬时 provider 错误的自动继续机制。多代理工作流的重大能力增强。

### 2. TUI 支持 Mermaid 图渲染
**#41113** — 已合并 | [链接](https://github.com/anomalyco/opencode/pull/41113)
引入私有 `@opencode-ai/merman` 包，在会话流中直接渲染 Mermaid 流程图、时序图和状态图。TUI 可视化能力的显著提升。

### 3. 移除遗留账户子系统
**#41173** — 开放中 | [链接](https://github.com/anomalyco/opencode/pull/41173)
删除 V2 Core Account schema 及其三张 SQLite 表（`account`、`account_state`、`control_account`）。当前认证已通过 `credential` 持久化，此清理是合理的技术债处理。

### 4. Mermaid 无向边与多行标签修复
**#41171** — 开放中 | [链接](https://github.com/anomalyco/opencode/pull/41171)
修复 `S1 --- X` 形式的无向边渲染和长多行 emoji 标签损坏问题。

### 5. LSP 通配符根标记匹配修复
**#41169** — 开放中 | [链接](https://github.com/anomalyco/opencode/pull/41169)
`Filesystem.up()` 对 `*.cabal` 等通配符根标记支持不完整，导致向上遍历时无法正确识别项目根。修复基于 Closes #41168。

### 6. 项目选择器从主目录回退填充
**#41158** — 开放中 | [链接](https://github.com/anomalyco/opencode/pull/41158)
在服务器不支持索引空搜索时，回退到列出当前主目录。兼容性保持在前端目录选择器中。

### 7. 控制台工作区解除封禁端点
**#41170** — 已合并 | [链接](https://github.com/anomalyco/opencode/pull/41170)
新增 Support API 端点用于解除 workspace 封禁，使用现有 `SUPPORT_API_KEY` 认证，保持幂等性。

### 8. Web 用户避免浏览器自动打开
**#41167** — 开放中 | [链接](https://github.com/anomalyco/opencode/pull/41167)
添加 `opencode web --no-open` 参数，适合服务器环境或不想自动打开浏览器的用户。

### 9. tool 结果媒体提取修复
**#41161** — 开放中 | [链接](https://github.com/anomalyco/opencode/pull/41161)
`supportsMediaInToolResult` 此前对 `@ai-sdk/anthropic` 和 `@ai-sdk/openai` 无条件返回 `true`，导致不支持附件的模型出错。现按模型能力正确提取。

### 10. 服务器项目列表修复
**#41154** — 开放中 | [链接](https://github.com/anomalyco/opencode/pull/41154)
`opencode web` 起始页只读取客户端书签（从未被种子填充），导致显示 "Nothing here yet"。现在回退到服务器 `/project` 数据。Closes #39655。

---

## 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **支付方式扩展** | #23153 Crypto 支付 | 37 👍 |
| **子代理模型控制** | #17595 运行时模型覆盖 | 3 👍 |
| **环境变量控制** | #37888 禁用自动安装 | 2 👍 |
| **Skills 目录组织** | #38853 支持子文件夹 | 1 👍 |
| **消息队列机制** | #41106 生成期间排队用户消息 | 新提交 |

**值得注意**：Crypto 支付（37 👍）远超其他需求，这是目前社区呼声最高的功能。其次是子代理模型覆盖的呼声，说明 OpenCode 已在多代理场景中被深入使用。

---

## 开发者关注点

- **OpenCode Go 服务稳定性**：401 问题持续两周未解决，直接影响付费用户信任度，社区期待官方尽快响应。
- **Git 操作滥用**：会话快照机制在大型仓库上表现糟糕（执行 `git add -A`），可能影响仓库状态甚至引发性能问题。
- **TUI 基础交互缺陷**：Windows 下无法粘贴、从源码目录外启动黑屏等基础问题长期存在，影响开发者入门体验。
- **模型兼容性碎片化**：图片读取、推理内容回传、Bedrock 压缩失败等多个问题指向模型适配层仍需大量加固。
- **Web UI 成熟度不足**：项目加载、目录选取等多个体验缺陷在 v1.18.x 中集中暴露，配套修复 PR 正在推进中。
- **凭据管理**：Copilot 凭据无法持久化导致每次会话重新认证，说明 credential 存储逻辑存在缺陷。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-08

> 数据来源: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（注：根据数据内容，实际仓库应为 earendil-works/pi）

---

## 今日速览

昨日社区异常活跃，超过 50 条 Issue 与 25 个 PR 获得更新。**最关键的问题是上下文压缩机制缺陷**（#6879），导致长会话在 API 拒绝请求前无法触发自动压缩，已获得 15 个 👍 和最多评论。同时，v0.84.1 发布引入了 Qwen Token 套餐支持与认证就绪检查。值得关注的是，**TUI 性能优化 PR**（#7780）与**资源加载器 APPEND_SYSTEM.md 自动发现失效**（#7794）的提交表明社区正在持续打磨核心体验。

---

## 版本发布

### v0.84.1
- **Qwen Token Plan Individual**：支持针对 Individual 订阅文档化模型的 built-in provider，详见 [API Keys 文档](https://github.com/earendil-works/pi/blob/v0.84.1/packages/coding-agent/docs/providers.md#api-keys)。
- **认证就绪检查**：新增 `pi auth` 相关检查能力。

> 注意：该版本同时出现启动崩溃问题（#7771，Node 23 下 `zlib.createZstdDecompress` 缺失），建议 Node 23 用户暂缓升级或关注修复进展。

---

## 社区热点 Issues（Top 10）

1. **#6879 [bug] 自动压缩在上下文超过 100% 后永不触发，直到 provider 溢出** — [链接](https://github.com/earendil-works/pi/issues/6879)
   - **现象**：GPT-5.6-sol 上单次 agentic turn 运行超 2 小时，footer 越过压缩阈值，直到 API 在 373k tokens 拒绝请求时压缩才生效。
   - **重要性**：直接影响长会话稳定性，已在社区积累 15 👍 和 13 条评论。用户建议每个 agent 步骤后检查压缩状态。

2. **#7128 [bug, no-action] 默认 PI_\* 环境变量指南过度鼓励不必要的 bash 调用** — [链接](https://github.com/earendil-works/pi/issues/7128)
   - **现象**：系统提示词新增 “Inspect PI_* environment variables” 后，agent 频繁执行无关的 env 检查。
   - **重要性**：提示词工程回归，影响 token 效率与响应质量，11 条评论讨论中。

3. **#7020 [CLOSED] 压缩后 Pi 有时不继续执行** — [链接](https://github.com/earendil-works/pi/issues/7020)
   - **现象**：长会话（coordinator 型）压缩后无响应。
   - **重要性**：压缩可靠性持续引发关注，已关闭但社区仍在讨论。

4. **#5886 [OPEN] AgentSession 结算/续跑与 assistant-tail 生命周期 bug（元问题）** — [链接](https://github.com/earendil-works/pi/issues/5886)
   - **现象**：post-run 逻辑尝试从已无效的 transcript 继续 agent，导致系列问题。
   - **重要性**：由 mitsuhiko 创建，是多个相关 bug 的根因汇总，对扩展开发影响深远。

5. **#7730 [bug] Mac OS 长会话高 CPU 占用** — [链接](https://github.com/earendil-works/pi/issues/7730)
   - **现象**：CPU 50–110%，内存 600–800MB，疑似与会话长度相关。
   - **重要性**：5 个 👍，影响日常使用体验，社区期待性能优化。

6. **#7053 [OPEN] 并行工具批次中某个工具卡住时，已完成工具结果丢失** — [链接](https://github.com/earendil-works/pi/issues/7053)
   - **现象**：`Promise.all` 等待整个批次完成后才持久化 toolResult，单个 stall 导致其他结果丢失（“No result provided”）。
   - **重要性**：并行执行正确性问题，对依赖多工具协作的复杂任务影响大。

7. **#7702 [CLOSED] DeepSeek 模型经 opencode zen gateway 报 400：需回传 reasoning_content** — [链接](https://github.com/earendil-works/pi/issues/7702)
   - **现象**：多轮/工具调用会话中，`detectCompat()` 未处理 DeepSeek 的 thinking mode 要求。
   - **重要性**：模型兼容性问题，影响 DeepSeek 用户。

8. **#7771 [CLOSED] [bug] 无法启动 0.84.1** — [链接](https://github.com/earendil-works/pi/issues/7771)
   - **现象**：Node 23 下 `zlib.createZstdDecompress is not a function`。
   - **重要性**：版本发布阻断性问题，升级用户需注意。

9. **#7791 [CLOSED] 全局 Undici dispatcher 继承 16 KiB maxHeaderSize 导致 UND_ERR_HEADERS_OVERFLOW** — [链接](https://github.com/earendil-works/pi/issues/7791)
   - **现象**：`EnvHttpProxyAgent` 未设置 maxHeaderSize，有效响应因头部过大被拒。
   - **重要性**：基础设施 bug，可能导致远程 API 偶发失败。

10. **#7794 [CLOSED] [resource-loader] APPEND_SYSTEM.md 自动发现失效** — [链接](https://github.com/earendil-works/pi/issues/7794)
    - **现象**：`~/.pi/agent/APPEND_SYSTEM.md` 未被自动加载，两处逻辑 bug（空数组真值判断 + regex 元字符）。
    - **重要性**：配置加载可靠性，影响自定义系统提示词的用户。

---

## 重要 PR 进展（Top 10）

1. **#7784 [OPEN] refactor(agent): 从 record queries 推导恢复状态** — [链接](https://github.com/earendil-works/pi/pull/7784)
   - 移除恢复专用查询 API，改用有界 `findRecords()` 调用推导状态，精简索引。Harness v2 计划的关键步骤。

2. **#7801 [OPEN] feat(coding-agent): 懒加载不常用语法高亮** — [链接](https://github.com/earendil-works/pi/pull/7801)
   - mitsuhiko 提交，优化启动性能，但会短暂失效 UI 高亮，属实验性重构。

3. **#7780 [CLOSED] TUI 性能优化** — [链接](https://github.com/earendil-works/pi/pull/7780)
   - 增量解析 markdown + 懒渲染失效，启动时部分解析旧内容，有望缓解 #7730 高 CPU 问题。

4. **#7710 [CLOSED] feat(agent): 恢复挂起的 harness 操作** — [链接](https://github.com/earendil-works/pi/pull/7710)
   - 实现 Harness v2 的 R3 恢复机制，可从既有 session 加载新 harness 并保留左右界。

5. **#7762 [OPEN] feat(provider): 引入 LM Studio provider** — [链接](https://github.com/earendil-works/pi/pull/7762)
   - 解决 #7668，支持本地 LM Studio，测试由 `LM_STUDIO_BASE_URL` 环境变量守卫。本地模型用户福音。

6. **#7758 [CLOSED] feat(coding-agent): 退出前台任务与 ctx.version** — [链接](https://github.com/earendil-works/pi/pull/7758)
   - 让扩展能在 pi 退出后接管前台进程，支持 `/web` 类命令。扩展能力重大提升。

7. **#7749 [CLOSED] fix(coding-agent): 保留 /reload 后的自定义工具渲染器** — [链接](https://github.com/earendil-works/pi/pull/7749)
   - 修复 `/reload` 后 session_start 注册的渲染器失效问题，对应 #7740。

8. **#7757 [OPEN] feat(coding-agent): 可退出全屏复制选择** — [链接](https://github.com/earendil-works/pi/pull/7757)
   - 响应 #7720，新增设置允许关闭全屏 copy-on-select，恢复自定义复制行为。

9. **#7795 [CLOSED] fix(coding-agent): 用 `command -v` 替代 `which` 检查 wl-copy** — [链接](https://github.com/earendil-works/pi/pull/7795)
   - 消除外部二进制依赖，适配沙箱环境。对应 #7796。

10. **#6296→#6216 [OPEN] feat: Amazon Bedrock Mantle OpenAI Responses provider** — [链接](https://github.com/earendil-works/pi/pull/6216)
    - 基于 openai-node 的 Bedrock Provider，支持 AWS 上的 Mantle API。AWS 用户的重要集成。

---

## 功能需求趋势

- **第三方 Provider 扩展**：LM Studio（#7762）、Amazon Bedrock Mantle（#6216）、Cursor CLI bridge（#7793）齐头并进，社区对本地与多云模型接入需求旺盛。
- **性能优化**：TUI 渲染性能（#7780）、高 CPU 问题（#7730）、语法高亮懒加载（#7801）成为热点，长会话场景暴露瓶颈。
- **扩展 API 能力增强**：会话替换 API（#5952）、工具装饰能力（#7800）、退出前台任务（#7758）等需求频出，扩展生态正从“能跑”走向“好用”。
- **上下文管理**：压缩触发策略（#6879）、压缩后恢复（#7020）、长会话 coordinator 模式，核心机制稳定性被反复提及。

---

## 开发者关注点

- **压缩可靠性**（#6879, #7020）是当前最大痛点——用户需要“压缩前检查”而非“溢出后救火”。
- **环境差异适配**：Node 23 启动崩溃（#7771）、`which` 依赖（#7796）、终端主题检测偏差（#7770），提醒维护者关注跨平台/跨版本鲁棒性。
- **扩展开发体验**：`getAllTools()` 不含 execute（#7800）、`sendMessage({triggerTurn:false})` 仍触发新 turn（#7783）、reload 后渲染器丢失（#7749）——扩展作者希望 API 边界更清晰、行为更可预测。
- **默认提示词副作用**（#7128）：系统级 guideline 需克制，避免过度引导 agent 行为，影响 token 效率与响应质量。

---
*日报生成时间：2026-08-08 | 数据截止：2026-08-07 23:59 UTC*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-08

## 今日速览

今日发布一个 nightly 版本（v0.21.7-nightly.20260808），主要修复 CI 自动化流程问题并补充文档。社区方面，Windows 中文输入显示问题、多端终端渲染兼容性 Bug 以及 ACP 协议增强（上下文用量上报、推理强度透传）成为讨论焦点。值得关注的是，多个针对 Web Shell 与桌面端体验的 PR 正在推进，同时“远程本地控制（Local Control）”等新功能构思引发了讨论。


## 版本发布

**v0.21.7-nightly.20260808.4ec0371e6** — 夜间构建版本，包含：
- `fix(ci)`: 修复被阻塞的 autofix takeover 准入问题（PR #8410）
- `docs`: 补充 `serve` 子会话并发相关文档

> 链接: https://github.com/QwenLM/qwen-code/releases


## 社区热点 Issues（10 个）

1. **[#8625] Windows 终端中输入中文显示拼音看不清（P2/Bug）**
   - 作者: lanrain | 评论: 6 | 欢迎 PR
   - Windows 终端输入中文时，输入法拼音显示不清晰，严重影响中文用户日常输入体验，已获官方 `welcome-pr` 标签。
   - https://github.com/QwenLM/qwen-code/issues/8625

2. **[#8660] 为遥测数据增加运行时与客户端归属信息（P3/特性）**
   - 作者: yiliang114 | 评论: 5 | 已关闭
   - 当前 `properties.channel` 仅能区分部分入口（VS Code、CLI），希望稳定区分“执行运行时”和“发起客户端”，对数据分析与用户体验归因有直接帮助。
   - https://github.com/QwenLM/qwen-code/issues/8660

3. **[#8615] Windows 桌面版 0.1.0 启动崩溃：`EISDIR lstat 'C:'`（P1/Bug）**
   - 作者: orangewk | 评论: 5 | 已关闭
   - Windows 桌面版打开工作区即崩溃，`lstat 'C:'` 路径解析错误。P1 优先级，说明影响面较大，已关闭推测已修复或定位。
   - https://github.com/QwenLM/qwen-code/issues/8615

4. **[#8562] SSH + tmux 场景下 TUI 闪屏（P2/Bug）**
   - 作者: stevenxhyl2026 | 评论: 5
   - iTerm2 → SSH → tmux 环境下对话时分屏闪屏，经 Qwen 3.8 Max 排查指向 Qwen Code 版本问题。与 #8659（Web 终端闪屏）可能同源，需关注终端兼容层状态。
   - https://github.com/QwenLM/qwen-code/issues/8562

5. **[#7118] Windows 独立安装包在 PowerShell 无法解析 `Get-FileHash` 时失败（P2/Bug）**
   - 作者: Loongtech | 评论: 4 | 👍 3 | 欢迎 PR
   - SHA-256 校验依赖 `Get-FileHash`，在受限 PowerShell 环境中安装直接失败。Windows 安装健壮性问题，社区关注度较高（3 👍）。
   - https://github.com/QwenLM/qwen-code/issues/7118

6. **[#8550] `qwen mcp list` 在 SSE 服务器无响应时永久挂起（P2/Bug）**
   - 作者: dpc00 | 评论: 4 | 已关闭
   - SSE 服务器接受连接但不发送 `endpoint` 事件时，命令无限期挂起。影响 CI/自动化场景的可用性。
   - https://github.com/QwenLM/qwen-code/issues/8550

7. **[#8513] [ACP] 向 JetBrains AI Assistant 发送 `usage_update` 会话更新（P2/特性）**
   - 作者: kenconnet666 | 评论: 3 | 已关闭
   - Qwen Code 作为 ACP Agent 嵌入 JetBrains 时，上下文用量指示器不显示（Codex ACP 可正常显示）。该问题已关闭，对应修复 PR #8528 已合并。
   - https://github.com/QwenLM/qwen-code/issues/8513

8. **[#8492] MCP 元数据热更新导致遗留失效会话注册（P2/Bug）**
   - 作者: ryan-mt | 评论: 3 | 已关闭
   - 修改 `trust`、`includeTools` 等配置时，因 transport 未变，旧会话注册不被更新，导致工具行为仍按旧配置执行。对应修复 PR #8522。
   - https://github.com/QwenLM/qwen-code/issues/8492

9. **[#8672] PuTTY 中鼠标中键选择/复制功能回归（P2/Bug）**
   - 作者: WildFlash1st | 评论: 3
   - 0.21.1 版本后，PuTTY 中 xterm 风格鼠标中键行为失效。SSH 终端用户的常见操作路径受影响，需确认是否与终端能力检测相关。
   - https://github.com/QwenLM/qwen-code/issues/8672

10. **[#8695] 默认状态栏与底部 footer 重复显示上下文用量百分比（P3/特性）**
    - 作者: yiliang114 | 评论: 3
    - 默认开启状态栏时，上下文用量在状态栏和 footer 同时展示，信息冗余。UI 细节优化项。
    - https://github.com/QwenLM/qwen-code/issues/8695


## 重要 PR 进展（10 个）

1. **[#8528] fix(acp): 发送标准上下文用量更新（已合并）**
   - 作者: zjunothing
   - 每次主会话模型往返后发送标准 `usage_update` 通知，`used` 取最新上下文占用，`size` 取当前模型上下文窗口。直接解决 JetBrains 中用量不显示的问题（Issue #8513）。
   - https://github.com/QwenLM/qwen-code/pull/8528

2. **[#8522] fix(core): 不重连即可刷新 MCP 会话元数据（已合并）**
   - 作者: zjunothing
   - 将 handle 生命周期与 transport 身份解耦，`trust`/`includeTools` 等变更时保留健康连接、仅刷新工具注册。修复 Issue #8492。
   - https://github.com/QwenLM/qwen-code/pull/8522

3. **[#8525] fix(core): 解决 Qwen 3.8 reasoning 预算冲突**
   - 作者: DragonnZhang
   - 防止 DashScope 请求同时携带 `reasoning_effort` 与 `thinking_budget`，按 `extra_body` > 采样参数 > `reasoning` 优先级处理，避免配置层冲突。
   - https://github.com/QwenLM/qwen-code/pull/8525

4. **[#8526] feat(cli): 通过 ACP 暴露推理强度选项**
   - 作者: zjunothing
   - 新增标准 ACP 会话选择器 `thought_level`（Default/Low/Medium/High/Extra high/Max），客户端可通过 `session/set_config_option` 动态调整，增强 IDE 集成灵活性。
   - https://github.com/QwenLM/qwen-code/pull/8526

5. **[#8613] feat(web-shell): tmux 交互式终端子代理**
   - 作者: wenshao
   - 支持 Agent 在 tmux 会话中运行交互式 CLI（REPL、TUI 等），Web Shell 提供实时交互终端视图。大幅扩展 Web Shell 场景覆盖。
   - https://github.com/QwenLM/qwen-code/pull/8613

6. **[#8614] feat(web-shell): 右侧 Artifact 面板支持全屏查看**
   - 作者: wenshao
   - 为右侧面板（artifacts、subagents、review changes、monitors、scheduled tasks）增加全屏切换按钮，提升复杂任务的可视化效率。
   - https://github.com/QwenLM/qwen-code/pull/8614

7. **[#8621] feat(web-shell): 支持从压缩包安装扩展**
   - 作者: callmeYe
   - Web Shell 扩展管理器新增 Archive 选项，用户可直接上传 `.zip` / `.tar.gz` 安装，复用现有排队安装与刷新机制。
   - https://github.com/QwenLM/qwen-code/pull/8621

8. **[#8626] fix(extensions): 双清单扩展保留 Claude hooks**
   - 作者: destire-mio
   - 修复双清单（Gemini/Qwen + Claude）扩展安装时 Claude 兼容层被覆盖的问题，同时优化 Marketplace 与本地目录安装的源识别逻辑。
   - https://github.com/QwenLM/qwen-code/pull/8626

9. **[#8645] fix(core): 仓库配置执行程序时需确认只读 Git 命令（autofix）**
   - 作者: yiliang114
   - `git status`/`git diff` 等白名单只读命令虽按文本自动批准，但仓库本地 config 可挂钩执行任意程序。该 PR 为这类命令增加确认机制，修复潜在安全风险（Issue #8575）。
   - https://github.com/QwenLM/qwen-code/pull/8645

10. **[#8687] feat(daemon): 守护跨 worktree Git 变更操作（autofix）**
    - 作者: wenshao
    - 内置宿主侧防护，识别 `-C`/`--work-tree`/`--git-dir` 等 Git 仓库重定位参数，阻止模型发出的 `run_shell_command` 越权操作。安全加固方向的重要补充。
    - https://github.com/QwenLM/qwen-code/pull/8687


## 功能需求趋势

从近 24 小时活跃的 Issues 与 PR 中，可提炼出以下社区关注方向：

- **ACP 协议深度集成**：除基础会话管理外，社区正推动上下文用量上报（#8513 / PR #8528）、推理强度透传（PR #8526）等精细化能力，使 Qwen Code 在 JetBrains 等 ACP 客户端中与 Codex 等竞品对齐。
- **Web Shell 向“准桌面”演进**：压缩包安装扩展（PR #8621）、全屏面板（PR #8614）、tmux 交互终端（PR #8613）等 PR 密集落地，同时社区提出基于 Web Shell 重构桌面端以降低维护成本（#8092）。
- **多端终端兼容性**：Windows 中文输入显示（#8625）、PuTTY 鼠标中键回归（#8672）、web-based terminals 闪屏/撕裂（#8659）、SSH+tmux 闪屏（#8562）等高频问题指向终端渲染层（Virtualized History 模式）在非标准终端环境下的兼容性短板。
- **安全与权限治理**：Git 命令执行防护（PR #8645、#8687）及跨 worktree 越权操作拦截，表明社区对构建代理在 shell 层权限控制的要求持续提升。
- **遥测数据精细化**：运行时与客户端归属（#8660）、OTEL 指标导出兼容性（#8697）等，反映从“功能可用”到“可观测/可归因”的演进需求。
- **Agent 行为增强**：事实核验流程优化（#8701）、长任务证据检查点（PR #8465）等，聚焦 Agent 在长尾任务中的可靠性与可审计性。

## 开发者关注点

- **Windows 平台体验是当前最大痛点**：中文输入显示（#8625）与安装脚本健壮性（#7118）均与 Windows 直接相关，且都标记了 `welcome-pr`，建议优先关注。
- **SSH/远程终端兼容性反复**：PuTTY 中键回归（#8672）、tmux 闪屏（#8562）、Web 终端闪屏（#8659）均与渲染模式有关，提示 `useTerminalBuffer` 的兼容性策略可能需要更保守的降级路径。
- **“配置热更新”一致性**：MCP 元数据热更新遗留脏状态（#8492）与 SDK 中断恢复语义（PR #8711）两道关卡，说明开发者对会话生命周期中“运行中变更”的行为一致性有较高预期。
- **OTEL 环境变量兼容**：`OTEL_METRICS_EXPORTER=otlp` 导致 qwen-code 指标静默失效（#8697），在多 OTel CLI 共享 collector 的环境中极易触发，建议确保对标准 OpenTelemetry 约定的完整遵循。

---
*本日报由 AI 自动生成，数据来源为 QwenLM/qwen-code GitHub 仓库（统计时间截至 2026-08-08T00:00:00Z）。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-08

---

## 今日速览

今日社区核心动态集中在 **v0.9.4 发布冲刺**：主仓库已确认版本号与 CHANGELOG 同步，但CI 仍存在四个阻塞性失败需清除（PR #5282）。**子代理共享工作区写入误判**问题获得修复（PR #5284），解决了 builder 子代理无法执行简单文件写入的故障。另有 8 个依赖更新 PR 排队等待合并，社区维护节奏保持高频。

---

## 社区热点 Issues（10 条精选）

### 1. 会话侧边栏与自动恢复功能 [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) [CLOSED]
> 标签: enhancement / tui / ux / reliability

当前切换会话仅能依赖 `Ctrl+R` 弹窗或启动参数，缺少持久化侧边栏面板展示所有会话历史。该 feature 请求获得 13 条评论，是近期讨论热度最高的一条，已关闭表明功能已落地或进入实现阶段。

---

### 2. 大文本处理工程会话中断卡死 [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) [OPEN]
> 标签: bug / v0.9.4

用户用 DeepSeek TUI 分析 300 万字小说，10 个子 agent 并发处理时因 `agent_wait` 超时导致会话卡死。该 issue 包含完整的现场分析，是**子代理可靠性**方向的核心用户反馈。

---

### 3. 464 处 `#[allow(dead_code)]` 掩盖代码漂移 [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) [OPEN]
> 标签: documentation / 代码质量

项目维护者自曝 143 个文件中存在 464 处 dead_code 抑制属性，导致编译器无法报告结构性问题。这是一次大规模代码健康自查，社区关注度高。

---

### 4. 不具备跨会话记忆能力 [#2492](https://github.com/Hmbown/CodeWhale/issues/2492) [OPEN]
> 标签: bug

每次重启后丢失上一轮会话记忆，强制写入后重启也不会主动读取。用户认可响应速度，但对记忆持续性不满。这是**长期记忆**方向的核心诉求。

---

### 5. v0.9.4 发布阻塞：agent 生成接口参数过多 [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) [OPEN]
> 标签: bug / release-blocker

标记为 `builder` 角色的子代理在实际运行时工具权限为只读，无法执行分配的门禁任务。该问题被列为发布阻塞项，直接影响 v0.9.4 的交付进度。

---

### 6. 提供商切换时保留无关默认模型 [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) [OPEN]
> 标签: bug / release-blocker

切换到 OpenAI 提供商后，默认模型仍停留在 `gpt-5.5`（从其他路由继承）。提供商与模型解析未作为整体同步更新，集成一致性问题。

---

### 7. 同一工作区会话间残留失败 agent 状态 [#4416](https://github.com/Hmbown/CodeWhale/issues/4416) [OPEN]
> 标签: bug / tui / ux

同一工作区启动第二个实例时，界面渲染出上一次会话残留的红色失败提示行，造成工作区状态污染。

---

### 8. 执行策略 deny 规则可通过 `&` 链绕过 [#5161](https://github.com/Hmbown/CodeWhale/issues/5161) [CLOSED]
> 标签: bug / security

命令分割器未处理单 `&`，`ls & rm -rf /` 可作为单一分段执行，成功绕过 deny 前缀匹配。安全漏洞已修复，具有较高参考价值。

---

### 9. execpolicy 凭证读取优先级反直觉 [#5197](https://github.com/Hmbown/CodeWhale/issues/5197) [CLOSED]

当前读取顺序为 配置文件 > `api_key_env` > 密钥存储 > 环境变量，持久化凭证应优先于环境变量，现有顺序违反用户直觉。已被修复。

---

### 10. TUI 保存 API 密钥时确认弹窗指向错误路径 [#5195](https://github.com/Hmbown/CodeWhale/issues/5195) [CLOSED]

设置向导将密钥保存至全局密钥存储，但 UI 提示"已保存至配置文件路径"，误导用户。细节性 UX 问题，已修复。

---

## 重要 PR 进展（10 个精选）

### 1. 修复：停止将已完成子代理计为共享检出竞争者 [#5284](https://github.com/Hmbown/CodeWhale/pull/5284) [CLOSED]
> 作者: Hmbown

Builder 子代理执行 `echo x > file` 被误拦截，提示"无法证明共享工作区写入边界"。修复了两个计数逻辑问题，恢复了子代理的基础文件操作能力。

---

### 2. 读取文档：混合 fleets — 任意模型任意角色 [#5283](https://github.com/Hmbown/CodeWhale/pull/5283) [CLOSED]
> 作者: Hmbown

README 原先强调"切换"模型/提供商，现改为说明一个 fleet 内不同角色可同时运行不同供应商的不同模型，更准确反映运行时能力。

---

### 3. 修复发布：清除阻塞 v0.9.4 的四个 CI 问题 [#5282](https://github.com/Hmbown/CodeWhale/pull/5282) [CLOSED]
> 作者: Hmbown

主分支已处于 0.9.4 版本状态，npm/crate 版本已同步，但上一次 CI 运行三方面失败且无绿色通过记录。本 PR 逐一修复四个阻塞项，推动正式发布。

---

### 4. 功能：MCP 后台增量注册表同步 [#5256](https://github.com/Hmbown/CodeWhale/pull/5256) [OPEN]
> 作者: bistack

`registry_sync` 不再每次阻塞等待完整下载：缓存命中时零网络请求直接返回，下载通过 `tokio::spawn` 后台执行，全局互斥锁保证单飞，并可增量同步协议以复用未变更数据。

---

### 5. 修复：过期缓存会话标题导致"New Session"卡死 [#5258](https://github.com/Hmbown/CodeWhale/pull/5258) [OPEN]
> 作者: SparkofSpike

会话标题在第一条用户消息后仍显示"New Session"：内存元数据缓存中保存的过期副本覆盖了新计算标题，且缓存仅在快照结束时刷新。修复了缓存失效时机问题。

---

### 6. 功能：`model = "auto"` 基于提示自动选择模型 [#5257](https://github.com/Hmbown/CodeWhale/pull/5257) [OPEN]
> 作者: skyzhao1223

新增自动模式：复杂任务用 `deepseek-v4-pro`，简单任务用 `deepseek-v4-flash`，避免频繁手动切换。

---

### 7. 构建修复：FreeBSD 平台支持 [#5254](https://github.com/Hmbown/CodeWhale/pull/5254) [CLOSED]
> 作者: mky

rquickjs 无 FreeBSD 预编译绑定，需启用 `bindgen` feature 才能继续编译。社区贡献者的跨平台修复。

---

### 8. 功能：允许嵌入方隔离子代理运行时状态根目录 [#5252](https://github.com/Hmbown/CodeWhale/pull/5252) [CLOSED]
> 作者: cacdcaecawae

新增可选 `EngineConfig::subagent_state_root`，供嵌入宿主分离子代理状态；保持 `workspace/.codewhale/state` 默认路径不变，移动了工作台账、完整转录产物等。

---

### 9. 层 5.3：调色板、补全与发现过滤 [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) [OPEN]
> 作者: aboimpinto

验证并整合用户命令进入命令面板和斜杠补全面（Layer 5.3，延续 5.2 的 #4992），用验收测试证明每个功能已就绪。

---

### 10. 依赖更新批次（8 个 PR）
> 作者: dependabot[bot]

| PR | 依赖 | 版本变化 |
|---|---|---|
| [#5281](https://github.com/Hmbown/CodeWhale/pull/5281) | jsonschema | 0.48.5 → 0.49.4 |
| [#5280](https://github.com/Hmbown/CodeWhale/pull/5280) | thiserror | 2.0.18 → 2.0.19 |
| [#5279](https://github.com/Hmbown/CodeWhale/pull/5279) | clap | 4.5.54 → 4.6.1 |
| [#5278](https://github.com/Hmbown/CodeWhale/pull/5278) | async-trait | 0.1.89 → 0.1.91 |
| [#5277](https://github.com/Hmbown/CodeWhale/pull/5277) | docker/login-action | 4.5.2 → 4.6.0 |
| [#5276](https://github.com/Hmbown/CodeWhale/pull/5276) | serde_json | 1.0.149 → 1.0.151 |
| [#5275](https://github.com/Hmbown/CodeWhale/pull/5275) | rust-toolchain | 更新 commit |
| [#5274](https://github.com/Hmbown/CodeWhale/pull/5274) | sccache-action | 0.0.10 → 0.0.11 |

---

## 功能需求趋势

### 1. 子代理可靠性与状态隔离（高频）
- 子代理超时卡死（#1425）、共享检出误判（#5284）、失败状态残留（#4416）、运行时状态根隔离（#5252）
- 方向：**子代理生命周期管理**与**工作区隔离**持续是核心痛点。

### 2. 会话持久性与跨会话记忆
- 会话侧边栏（#2934）、跨会话记忆缺失（#2492）、会话标题缓存（#5258）
- 方向：**持久化 UX 优化**需求集中爆发。

### 3. 配置可发现性与可编辑性
- TUI 内编辑配置（#3303）、提供商与模型解析一致性（#5034）、凭证读取优先级（#5197）
- 方向：配置系统需要更透明的建模。

### 4. 安全执行策略
- deny 规则绕过（#5161）、凭证存储路径提示（#5195）
- 方向：**安全加固**持续进行中。

### 5. 文档与代码卫生
- dead_code 清理（#4785）、README 混合 fleet 说明（#5283）
- 方向：维护者主动推动技术债清理。

---

## 开发者关注点

| 痛点/需求 | 相关 Issue/PR | 频次 |
|---|---|---|
| 子代理超时/失控 | #1425, #5123, #5284 | 🔥🔥🔥 |
| 会话/记忆不可靠 | #2492, #2934, #5258 | 🔥🔥🔥 |
| 配置混乱/不可编辑 | #3303, #5034, #5197 | 🔥🔥 |
| 执行策略安全绕过 | #5161, #5191 | 🔥🔥 |
| 多实例工作区状态污染 | #4416 | 🔥 |
| MCP 工具池热更新 | #4068 | 🔥 |
| Fleet 配置复杂度 | #5123, #5038, #5039 | 🔥 |

**核心结论**：开发者对子代理可靠性、跨会话持久化、配置透明度的诉求最为强烈。v0.9.4 发布在即，CI 阻塞项正在清除；建议关注合并后的回归表现。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*