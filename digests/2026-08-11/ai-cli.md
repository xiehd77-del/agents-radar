# AI CLI 工具社区动态日报 2026-08-11

> 生成时间: 2026-08-11 01:51 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告

**报告日期：2026-08-11** | **数据来源：各工具 GitHub 社区动态日报**


## 1. 生态全景

当前 AI CLI 工具正处于**功能深化与稳定性博弈**的关键阶段。头部工具（Claude Code、Codex）已进入高频迭代期，重心从"能做什么"转向"能否可靠地做"——社区反馈集中在会话恢复、上下文压缩、多 Agent 协作的数据完整性等工程化问题上。与此同时，新一代工具（Qwen Code、OpenCode、Pi）通过多 Agent 协同（Fleet）、跨端一致性、插件生态等差异化功能快速追赶，呈现"老将守成、新锐猛攻"的竞争格局。企业级合规（CVP 审批、模型策略同步）、沙箱安全（SSRF、提示注入）和 Windows 平台体验成为全行业的共同短板。整体而言，**可靠性、安全性和跨平台一致性**是当前所有工具面临的核心考题。


## 2. 各工具活跃度对比

| 工具 | 活跃 Issues | 重要 PR | Release | 社区热度信号 |
|------|------------|---------|---------|-------------|
| **Claude Code** | 10（Top10 均有更新） | 2（1 Open / 1 Closed） | v2.1.227 | 单 Issue 最高 33 评论；CVP 误拦截持续发酵；👍 最高 20 |
| **OpenAI Codex** | 10（Top10 均有更新） | 10（均为 bot 提交） | 2 个 alpha | 单 Issue 最高 93 评论 / 81 👍；Windows 卡顿为最强负面信号 |
| **Gemini CLI** | 10（含 3 个 P1） | 10（2 已合并 / 8 Open） | v0.56.0-nightly | 新贡献者首 PR 合入；子代理可靠性为焦点 |
| **GitHub Copilot CLI** | 10（含 5 个新上报） | 0 | v1.0.79 | 企业策略问题持续半年未解（29 评论）；新 Issue 集中在 MCP 与会话 |
| **Kimi Code CLI** | 3（含 1 个新 bug） | 0 | 无 | 记忆系统为绝对热点（31 评论，持续半年） |
| **OpenCode** | 10（含 1 个 128👍 需求） | 10（5 Open / 5 Closed） | v1.18.16 | `/goal` 功能 128 👍 为跨工具最高；项目选择器 bug 簇集中爆发 |
| **Pi** | 10（含 3 个新 bug） | 10（9 功能/修复） | 无 | WSL 登录挂起 21 评论；修复节奏快，当天上报当天合入 |
| **Qwen Code** | 10（含 1 个 P1、2 个 P2） | 10（功能密集） | v0.21.9 + nightly | Fleet 多 Agent 架构 4 阶段 roadmap 已明确；WebShell 功能密集推进 |
| **DeepSeek TUI (CodeWhale)** | 3 | 4（3 已合并） | v0.9.6（8-10） | 递归深度漏洞 24 小时内修复；EPIC-005 架构重构为当前主线 |


## 3. 共同关注的功能方向

### 3.1 多 Agent / 子代理可靠性（跨 6 个工具，最集中）
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | Agent 工具 `name` 参数静默切换协议导致结果丢失（#71723） |
| Gemini CLI | 子代理 MAX_TURNS 后误报成功（#22323）；generalist 挂起（#21409） |
| Copilot CLI | explore 子代理并发触发 429、无退避无切换（#4416） |
| Qwen Code | Fleet 多 Agent 原生协调方案（#8718，已拆 4 阶段实施） |
| CodeWhale | 嵌套子代理递归深度可绕过预算（#5253，已修复） |
| OpenCode | 代理/模式切换对模型不可见，Plan 代理无系统提示词（#40474） |

**核心痛点**：子代理的"假成功"上报、挂起无响应、上下文/预算管理失控——直接污染上层决策。

### 3.2 会话恢复与上下文管理（跨 5 个工具）
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | `--continue` 无法找到 `-p` 创建的会话（#82536）；压缩后 Skill 重放导致意外 git push（#85138） |
| Copilot CLI | 会话超限后 `/compact` 也无法恢复（#4424）；新会话初始提示被静默丢弃（#4423） |
| Kimi Code | 跨会话持久化记忆系统（#1283、#1478） |
| Qwen Code | 大型会话恢复超时（#8678）；恢复后 cron 提示词丢失（#8837） |
| OpenCode | `/goal` 原生会话目标（128👍，#27167） |

### 3.3 企业策略与模型权限同步（跨 3 个工具）
| 工具 | 具体诉求 |
|------|---------|
| Copilot CLI | 企业账号无法列出/使用模型（#1595，持续 6 个月）；Claude 模型全部不可用（#4422） |
| Claude Code | CVP 已批准 org 仍被拦截（#84352） |
| Qwen Code | Provider 更新静默覆盖用户模型配置（#8863） |

### 3.4 Windows 平台稳定性（跨 4 个工具）
| 工具 | 具体诉求 |
|------|---------|
| Codex | 应用频繁卡顿（#20214，93 评论 / 81👍）；扩展资源加载失败（#37458） |
| Copilot CLI | 插件文件锁导致更新失败（#4095） |
| Pi | WSL 登录挂起（#6187） |
| Claude Code | GPU 进程崩溃导致应用退出（#83744） |

### 3.5 安全边界与提示注入防护（跨 4 个工具）
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | 伪造 system-reminder（#74636）；Skill 重放致意外 git push（#85138） |
| Gemini CLI | SSRF 漏洞修复（PR #28557 进行中） |
| Codex | 合法中文开发提示被安全机制误判拦截（#28066） |
| Pi | Bedrock 无效工具参数投毒会话（#7782，已修复） |

### 3.6 工具调用与参数校验健壮性（跨 4 个工具）
| 工具 | 具体诉求 |
|------|---------|
| Pi | 编辑模糊匹配对空白字符敏感（#7836）；Alt+Enter 误中断任务（#7876） |
| OpenCode | `tool_call: false` 配置未生效（#35432）；工具调用后死循环（#26220） |
| Gemini CLI | 工具超 128 个报 400 错误（#24246） |
| Codex | 并行工具调用响应顺序不确定（#4420） |


## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|------|-------------|-------------|------------|-------------|-----------|----------|-----|-----------|-----------|
| **核心定位** | 全功能专业级 Agent | 深度 IDE 集成 + 远程控制 | 多模型评估 + 子代理编排 | 企业 GitHub 生态延伸 | 轻量简洁 + 记忆系统 | 可定制 TUI + Web/Desktop 多端 | 终端交互体验极致打磨 | 多 Agent Fleet + WebShell | 极简运行时 + 架构高度模块化 |
| **目标用户** | 专业开发者 / 受监管行业 | IDE 重度用户 / Windows 用户 | 多模型对比 / 评估驱动团队 | 企业 GitHub 用户 / 大规模并行 | 大项目开发者 / 中文社区 | 开源社区 / 自托管偏好者 | 终端原教旨 / 跨平台开发者 | 多 Agent 协作团队 | Rust 生态 / 架构关注者 |
| **技术路线** | 闭源商业 + 社区插件 | 闭源商业 + VS Code 深度绑定 | 开源（Google 系 + 多模型） | 闭源商业（GitHub 生态） | 开源（Moonshot 系） | 开源（TypeScript/Effect） | 开源（TypeScript/Bun/Go） | 开源（TypeScript + Qwen 系） | 开源（Rust 多 crate 架构） |
| **版本节奏** | 高频（日更级） | 高频 alpha | 高频 nightly | 稳定补丁为主 | 低频率 | 中频补丁 | 中频功能迭代 | 高频（正式版+nightly） | 低频减法发布 |
| **核心优势** | 功能最全、生态最大 | Windows 桌面端 + IDE 集成 | 多模型评估体系 + 安全修复响应快 | 企业策略支持 + GitHub 深度集成 | 记忆系统呼声高 | 社区需求响应快（128👍 功能） | 终端体验打磨精细 | Fleet 架构路线清晰 | 架构整洁 + 安全修复快 |
| **主要短板** | 多 Agent 数据流 bug 多 | Windows 性能问题严重 | 子代理可靠性不足 | 企业策略同步缺陷 | 迭代缓慢 / 文档缺失 | Web UI 项目选择器故障 | 平台兼容性（WSL/Bun） | TUI 渲染 + 自定义 provider | 社区规模小 / 功能覆盖有限 |
| **社区生态** | 最庞大 | 活跃但集中度低 | 中等，评估文化强 | 企业用户为主 | 较小但忠诚 | 快速增长 | 中等，修复文化强 | 快速增长（官方主推） | 早期，贡献者友好 |


## 5. 社区热度与成熟度

### 成熟期（稳定性为王）
- **Claude Code**：社区体量最大，Issue 讨论深度高（33+ 评论的合规问题持续发酵）。用户对架构级 bug（多 Agent 数据丢失）容忍度下降，已进入"用脚投票"阶段。
- **OpenAI Codex**：讨论量惊人（93 评论 / 81👍），但集中在 Windows 性能痛点。PR 全部为 bot 提交，社区贡献门槛高，呈现"官方主导、用户反馈"的单向模式。
- **GitHub Copilot CLI**：企业用户沉默但痛点集中——模型策略问题持续半年未解，新 Issue 密集。版本节奏偏保守，依赖 GitHub 生态但 CLI 本身迭代放缓。

### 快速成长期（功能扩张 + 架构重构并行）
- **Gemini CLI**：v0.56.0-nightly 修复 MCP OAuth 客户端 ID 丢失，SSRF 修复 PR 推进中。子代理可靠性问题（P1 级别）是当前最大短板，但评估体系（76 个行为测试 + Eval 工具链）投入显著，工程技术底蕴扎实。
- **Qwen Code**：v0.21.9 带来插件生态与二维码配对，Fleet 多 Agent 架构 4 阶段 roadmap 明确且 1A 已交付。WebShell 功能密集推进，官方主推力度大，是上升势头最猛的中国系工具。
- **OpenCode**：v1.18.16 补丁发布，`/goal` 功能获得跨工具最高赞（128👍）。Web 项目选择器 bug 簇虽集中，但 3 个修复 PR 竞争推进，且 kitlangton 主导的 core 服务架构解耦直指 v2，技术前瞻性强。
- **Pi**：无新版本但修复效率惊人——当天上报的递归深度、Bedrock 投毒、Alt+Enter 误中断等问题当天或次日即有 PR 合入。社区小而精，维护者响应速度是最大吸引力。

### 慢热期（需求聚焦但迭代缓慢）
- **Kimi Code**：记忆系统为绝对热点（31 评论），但无新版本、无新 PR，迭代节奏明显滞后于社区期待。文档缺失问题进一步加剧用户困惑。
- **CodeWhale（原 DeepSeek-TUI）**：v0.9.6 减法发布 + EPIC-005 架构重构，工程方向清晰但社区规模有限。Rust 多 crate 拆分需要时间沉淀。


## 6. 值得关注的趋势信号

### 6.1 企业级信任成为分水岭
Copilot CLI（#1595 持续半年）、Claude Code（CVP 误拦截）、Qwen Code（Provider 覆盖）——企业策略与本地执行不一致是跨工具的系统性通病。**影响**：受监管行业（金融、医疗、政务）在采购决策时会重点考察此维度，当前尚无工具交出满意答卷，这是差异化竞争的关键窗口。

### 6.2 "假成功"比失败更可怕
Gemini CLI 子代理 MAX_TURNS 后仍报 GOAL、Copilot CLI 新会话静默丢提示、Claude Code 后台 Agent 结果丢失——**静默失败正在成为用户信任的最大杀手**。影响：开发者编排多 Agent 工作流时，无法信任子代理的状态上报，被迫增加人工验证环节，削弱了 AI CLI 的自动化价值主张。

### 6.3 Windows 平台是"第二战场"
Codex（93 评论）、Copilot CLI（文件锁）、Pi（WSL 挂起）、Claude Code（GPU 崩溃）——四家头部工具在 Windows 端均有显著痛点。**影响**：macOS 用户的体验优势正在成为习惯，而 Windows 用户（企业场景主力）的糟糕体验将直接转化为竞品迁移动力，Windows 支持质量将成为 2026 下半年用户留存的核心变量。

### 6.4 MCP 生态爆发 vs CLI 侧稳定性滞后
Copilot CLI 一天新增 3 条 MCP 问题（握手超时、响应错配、策略误杀）、Gemini 修复 MCP OAuth、Claude Code 的 teammate 协议切换——**MCP 服务器数量在膨胀，但 CLI 侧的连接生命周期管理、超时重试、安全校验尚未跟上**。影响：MCP 生态的 promise（工具即插即用）正在被稳定性问题稀释，谁能率先提供 MCP 连接的"生产级可靠性"，谁就能锁定高级用户。

### 6.5 上下文管理从"自动"走向"可控制"
Claude Code 的 Skill 重放导致 git push、压缩抖动；Copilot CLI 的会话超限后无法恢复；OpenCode 的 `/goal` 128👍——**用户不再满足于"自动压缩"，而是要求显式的上下文控制机制**。影响：压缩策略将从"黑盒自动行为"演进为"用户可配置、可感知、可干预"的一等公民，这是长会话工作流的硬需求，也是当前所有工具的短板。

### 6.6 开源工具的"响应速度"正在成为竞争力
Pi 当天上报当天修、Gemini 对安全漏洞的快速 PR、CodeWhale 24 小时修复递归漏洞、OpenCode 的社区 PR 竞争——**头部闭源工具（Claude Code、Codex）的发布节奏虽快，但社区提交 PR 的门槛高；开源工具通过"快速修复 + 社区合入"建立信任**。影响：对于技术决策者，开源工具的"可修复性"（你能自己修或推动修复）正在成为选型的重要考量。

### 6.7 安全事件从"外部攻击"扩展到"内部污染"
Claude Code 的伪造 system-reminder、Pi 的 Bedrock 无效参数投毒、CodeWhale 的递归深度绕过——**AI CLI 的威胁模型已经从"模型输出幻觉"扩展到"工具参数污染导致会话持久化中毒"**。影响：工具调用参数的前置校验、持久化数据的完整性检查、以及上下文重放的安全边界，将成为下一代安全架构的核心议题。

---

**结论**：当前 AI CLI 工具的核心竞争已经从"模型能力"转向"工程可靠性"。企业信任、静默失败治理、上下文控制、跨平台一致性、MCP 稳定性是未来 6 个月的决胜点。开源工具的响应速度正在改写竞争格局，技术决策者应优先评估目标工具的社区维护效率与安全修复记录。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-11）

## 一、热门 Skills 排行

**1. skill-creator 修复系列（#1298 / #1099 / #1050 / #1323 / #1261）**  
功能：修复 skill-creator 工具链中 `run_eval.py` 在 Windows 平台和触发检测上的严重 Bug，解决 `recall=0%` 导致描述优化循环失效的问题。  
社区关注点：这是当前社区最集中的痛点——超过 5 个独立 PR 针对同一问题，涉及 Windows 子进程读取、编码、触发检测、并行 worker 隔离等多个层面。  
状态：全部 Open，多个 PR 互相补充/重叠。  
链接: [PR #1298](https://github.com/anthropics/skills/pull/1298) / [PR #1099](https://github.com/anthropics/skills/pull/1099) / [PR #1050](https://github.com/anthropics/skills/pull/1050)

**2. document-typography skill（#514）**  
功能：为 AI 生成的文档提供排版质量控制——孤行（1-6 个词溢出到下一行）、寡行（标题被留在页底）、编号错位等。  
社区关注点：抓住 AI 生成文档的普遍痛点，讨论集中在"这些问题影响每个 Claude 生成的文档，但用户很少主动要求修复"这一判断上。  
状态：Open。  
链接: [PR #514](https://github.com/anthropics/skills/pull/514)

**3. ODT skill（#486）**  
功能：OpenDocument 格式（.odt/.ods）的创建、填充、读取与 HTML 转换，覆盖 LibreOffice 生态。  
社区关注点：补全文档格式覆盖面的关键拼图——现有 skills 已覆盖 docx/pdf/pptx，ODT 是开源生态的重要缺口。  
状态：Open。  
链接: [PR #486](https://github.com/anthropics/skills/pull/486)

**4. skill-quality-analyzer / skill-security-analyzer（#83）**  
功能：两个元技能——质量分析器从结构、文档、示例、资源、安全五个维度评估 Skill 质量（各占 20%）；安全分析器专注安全审计。  
社区关注点：社区对 Skill 自身质量和安全性的反思，与 Issue #492（信任边界滥用）形成呼应。  
状态：Open。  
链接: [PR #83](https://github.com/anthropics/skills/pull/83)

**5. pyxel skill（#525）**  
功能：为 Pyxel 复古游戏引擎（Python）提供游戏开发工作流支持，覆盖 write → run_and_capture → inspect → iterate 完整循环。  
社区关注点：创意/趣味类技能的代表，讨论热度高但非核心痛点。  
状态：Open。  
链接: [PR #525](https://github.com/anthropics/skills/pull/525)

**6. color-expert skill（#1302）**  
功能：全栈色彩专业知识——色彩命名系统（ISCC-NBS、Munsell、XKCD、RAL 等）、色彩空间选择表（OKLCH 用于色阶、OKLAB 用于渐变、CAM16 用于感知均匀性）。  
社区关注点：设计类技能的纵深补充。  
状态：Open。  
链接: [PR #1302](https://github.com/anthropics/skills/pull/1302)

**7. testing-patterns skill（#723）**  
功能：完整测试模式覆盖——测试金字塔（Testing Trophy）模型、单元测试 AAA 模式、React 组件测试（Testing Library）、边界用例等。  
社区关注点：测试生成是开发者高频需求。  
状态：Open。  
链接: [PR #723](https://github.com/anthropics/skills/pull/723)


## 二、社区需求趋势

**1. 工具链可靠性 > 新技能**  
Issue #556（12 评论）、#1169（3 评论）、#202（8 评论）均直指 skill-creator 自身缺陷和"更像人类文档而非操作指令"的问题。社区当前最急迫的诉求是**让 Skill 开发和评估工具先可信**，新技能数量反而是次要的。

**2. 安全与信任边界**  
Issue #492（43 评论，全仓库最高）揭示社区技能在 `anthropic/` 命名空间下分发导致的信任滥用风险；#1175 关注 SharePoint 集成中的权限与上下文窗口问题。安全已成社区核心关切。

**3. 组织级共享与生命周期管理**  
Issue #228（16 评论）呼吁组织内 skill 直接分享（当前需手动下载 .skill 文件并经 Slack/Teams 传递）；#189（6 评论）指出 document-skills 与 example-skills 插件内容重复；PR #1479 针对规划工件无生命周期管理问题提案 plan-file-hygiene skill。

**4. 上下文窗口经济性**  
Issue #1487（4 评论）报告 claude-api skill 单次调用注入约 156k tokens 耗尽上下文窗口；#1329 提出 compact-memory 技能（符号化紧凑表示）以降低长时运行代理的上下文开销。


## 三、高潜力待合并 Skills

**1. plan-file-hygiene（#1479）**  
规划工件累积无生命周期的管理技能，回应 Issue #1417。创建于 2026-07-25，社区反馈积极，作者明确致谢多位贡献者命名问题与框架。近期活跃度高。  
链接: [PR #1479](https://github.com/anthropics/skills/pull/1479)

**2. self-audit（#1367）**  
机械文件验证 + 四维度推理质量门控（按损害严重性排序），v1.3.0 版本，普适性设计。与 Issue #1385 提案（三阶段管线）互相验证。  
链接: [PR #1367](https://github.com/anthropics/skills/pull/1367)

**3. SAP-RPT-1-OSS predictor（#181）**  
预测分析的垂类技能，对接 SAP 开源表格基础模型，企业级用例明确。从 2025-12 持续迭代至 2026-03，作者有持续维护意愿。  
链接: [PR #181](https://github.com/anthropics/skills/pull/181)

**4. testing-patterns（#723）**  
覆盖完整测试栈的有体系技能，测试是刚需场景，若合并可能成为高频使用技能。2026-03 创建，4 月仍活跃。  
链接: [PR #723](https://github.com/anthropics/skills/pull/723)


## 四、Skills 生态洞察

**社区最集中的诉求是：先修复和验证 Skill 开发工具链（skill-creator 的触发检测与上下文注入可靠性），再扩展新技能——即"工欲善其事，必先利其器"，且安全性与上下文窗口经济性正从边缘关切上升为核心决策因素。**

---

# Claude Code 社区动态日报 — 2026-08-11

> 数据来源：github.com/anthropics/claude-code

---

## 今日速览

今日最值得关注的是 **v2.1.227 发布**，修复了订阅层级评估与 Bash 命令在 CI 环境中执行失败的已知问题；社区方面，**CVP 审批组织仍被误拦截的 bug** 持续发酵（33 条评论），而 Fable 5 在使用额度判定、跨会话消息门控等方面出现多个新报告；此外，开发者对 **Agent 工具 `name` 参数静默切换协议导致结果丢失** 的反馈热度不减。

---

## 版本发布

### v2.1.227

> 链接：[anthropics/claude-code Releases](https://github.com/anthropics/claude-code/releases)

- 修复：会话以过期登录令牌启动时，功能标志未结合用户订阅层级评估，导致 Max 套餐用户被错误提示为 Fable 开启用量积分
- 修复：`claude-code-action` 环境下所有 Bash 命令因 `allowed_no` 配置导致执行失败的问题

---

## 社区热点 Issues（Top 10）

### 1. CVP 审批组织仍被 cyber safeguard 误拦截
- **Issue #84352** | 评论 33 | 👍 1
- 作者：federicolopeza | 更新：08-11
- **摘要**：已获 Cyber Verification Program（CVP）批准的 Claude.ai 组织在 Claude Code 中仍持续收到 cyber-safeguard 拦截；验证门户却显示同一申请为 "Under review"。
- **关注点**：组织级合规审批与实际执行不一致，影响受监管行业用户；评论区讨论热烈，推测与审批状态同步延迟有关。
- 链接：[Issue #84352](https://github.com/anthropics/claude-code/issues/84352)

### 2. Agent 工具 `name` 参数静默切换为 teammate 协议，后台 Agent 结果丢失
- **Issue #71723** | 评论 11 | 👍 1
- 作者：Macrox | 更新：08-11
- **摘要**：在配置过团队的会话中调用 Agent 工具并传入 `name` 参数时，spawn 静默走 teammate 路径而非后台 agent 路径，导致调用方会话永远收不到结果。
- **关注点**：长时间未修复的架构级 bug，影响多 Agent 协作场景的数据流完整性。
- 链接：[Issue #71723](https://github.com/anthropics/claude-code/issues/71723)

### 3. `--continue` 无法找到 `-p` 创建的会话
- **Issue #82536** | 评论 10 | 👍 0
- 作者：not-stbenjam | 更新：08-11
- **摘要**：使用 `-p`（headless/print 模式）创建的会话无法通过 `--continue` 进行交互式恢复，导致工作流断裂。
- **关注点**：headless 与交互模式之间的会话互通性问题，影响自动化 + 人工审核的混合工作流。
- 链接：[Issue #82536](https://github.com/anthropics/claude-code/issues/82536)

### 4. Claude Desktop Windows GPU 进程崩溃（exitCode 101457950）导致整个应用退出
- **Issue #83744** | 评论 6 | 👍 0
- 作者：estebanfeldman | 更新：08-11
- **摘要**：Windows 版 Claude Desktop 1.24012.11.0 在 GPU 进程崩溃后，整个应用进程也随之退出，无任何恢复机制。
- **关注点**：桌面端稳定性问题，对 Windows 用户日常使用影响严重。
- 链接：[Issue #83744](https://github.com/anthropics/claude-code/issues/83744)

### 5. 已发布的 Claude Code Artifacts 在移动端不可见
- **Issue #78792** | 评论 5 | 👍 20
- 作者：devarnis | 更新：08-11
- **摘要**：从 Claude Code 发布的 Artifacts 在 Web 和桌面端正常显示，但移动端 App 完全看不到，且无任何提示。
- **关注点**：👍 数最高（20），跨端一致性诉求强烈，移动办公场景受阻。
- 链接：[Issue #78792](https://github.com/anthropics/claude-code/issues/78792)

### 6. 伪造的 "file was modified" system-reminder 出现在工具结果流中
- **Issue #74636** | 评论 5 | 👍 0
- 作者：phillipmex | 更新：08-11
- **摘要**：在 Claude 自身执行 Write/Edit 工具调用后，工具结果流中出现伪造的 `<system-reminder>`，声称文件已被修改且"不要告诉用户"——疑似提示注入或渲染异常。
- **关注点**：涉及安全边界，若为注入漏洞则影响面极大。
- 链接：[Issue #74636](https://github.com/anthropics/claude-code/issues/74636)

### 7. Skill 参数替换破坏字面 `$N` 文本且无法关闭
- **Issue #78759** | 评论 4 | 👍 0
- 作者：bboretzky | 更新：08-11
- **摘要**：自定义斜杠命令和 Skill 的参数替换会将文件中的字面 `$0.01`、`$2`（awk 字段）等全部改写，包括 fenced code block，且无 opt-out 选项。
- **关注点**：影响所有含 shell 片段或价格的文档/脚本类 Skill 内容。
- 链接：[Issue #78759](https://github.com/anthropics/claude-code/issues/78759)

### 8. Sandbox 将 deny-list 路径伪装为设备节点，破坏 git worktree 操作
- **Issue #76558** | 评论 3 | 👍 0
- 作者：helter-seltzer | 更新：08-11
- **摘要**：WSL2 环境下，sandbox 将 `.git/config.worktree` 等 deny-listed 路径呈现为不可读设备节点，导致开启 `extensions.worktreeConfig` 的常规 git 操作直接失败。
- **关注点**：sandbox 与 git 生态的兼容性问题，影响启用 worktree 的团队。
- 链接：[Issue #76558](https://github.com/anthropics/claude-code/issues/76558)

### 9. 压缩后 Skill 重放导致过期 `$ARGUMENTS` 被重新执行，真实发生意外 git push
- **Issue #85138** | 评论 1 | 👍 1
- 作者：NubeBuster | 更新：08-11
- **摘要**：上下文压缩后，Claude Code 会重新附加之前调用过的 Skill 的渲染后内容（含用户 `$ARGUMENTS`），以残缺上下文重新执行，已在真实场景中导致意外 `git push`。
- **关注点**：数据安全与操作风险极高，Skill 缺少 frontmatter 关闭重放的选项。
- 链接：[Issue #85138](https://github.com/anthropics/claude-code/issues/85138)

### 10. 自动压缩抖动：3 轮内反复填满上下文
- **Issue #85668** | 评论 3 | 👍 0（已关闭）
- 作者：ammar-bay | 更新：08-11
- **摘要**：自动压缩后仅 3 轮对话上下文即再次填满，连续 3 次触发压缩，疑似某个工具输出过大超出窗口。
- **关注点**：虽然已关闭，但反映了大上下文/大文件读取场景的压缩策略问题。
- 链接：[Issue #85668](https://github.com/anthropics/claude-code/issues/85668)

---

## 重要 PR 进展

> 注：过去 24 小时内仅 2 条 PR 更新，以下为今日可追踪的全部 PR。

### 1. `/code-review` 自动检测 GitHub/GitLab 平台并增加 GitLab 支持
- **PR #34951** | 状态：Open | 更新：08-10
- 作者：jangel97
- **摘要**：为 `/code-review` 命令增加多平台支持，自动检测当前仓库为 GitHub 或 GitLab（含自托管实例），无需重复逻辑。解决 Issue #26932。
- **关注点**：GitLab 用户期待已久的功能，扩展了 Claude Code 在非 GitHub 生态的可用性。
- 链接：[PR #34951](https://github.com/anthropics/claude-code/pull/34951)

### 2. 社区插件：entroly-context —— 预算感知的上下文管理
- **PR #85464** | 状态：Closed | 更新：08-10
- 作者：juyterman1000
- **摘要**：新增社区插件，基于 Entroly 在代码库超出上下文窗口时提供预算感知的上下文选择策略。
- **关注点**：虽然已关闭（未合入），但反映了社区对上下文管理自动化的自发需求。
- 链接：[PR #85464](https://github.com/anthropics/claude-code/pull/85464)

---

## 功能需求趋势

综合今日 Issues 中的 feature request 与讨论热点，社区最关注的几个方向为：

1. **跨端一致性**：Claude Code Artifacts / 会话在 Web、Desktop、Mobile 之间的同步与可见性（#78792，👍 20）。
2. **提交快捷键可配置化**：`Enter` 提交 vs 换行的行为应支持 opt-in 切换（#74655，#85013），且桌面端与 CLI 行为应统一。
3. **Skill / 命令内容安全**：要求对参数替换提供 opt-out 或转义机制，避免字面 `$N` 被破坏（#78759）。
4. **压缩（compaction）策略可控制**：Skill 应能在 frontmatter 中声明关闭压缩后重放（#85138）；自动压缩不应在短轮次内抖动（#85668）。
5. **Headless 与交互模式互通**：`-p` 创建的会话应可被 `--continue` 恢复（#82536），`--resume` 与 `--continue` 对 bg 会话的判定应一致（#85657）。
6. **跨会话消息门控透明化**：接收方应能标识消息是否经过 hold/approval，以及过期被丢弃时应有通知机制（#85678、#85679）。
7. **模型/额度状态可见性**：Team Premium 用户的 Fable 5 不应被误拦（#82797），订阅层级判定不应受登录令牌过期影响（v2.1.227 已修复相关场景）。

---

## 开发者关注点

- **合规与审批信任问题**：CVP 已批准的 org 仍被拦截（#84352），且 "Under review" 状态反复，动摇了企业对 Claude Code 在受监管环境中使用的信心。
- **数据完整性与安全边界**：后台 Agent 结果静默丢失（#71723）、伪造 system-reminder（#74636）、Skill 重放导致意外 git push（#85138）—— 三个不同层面都在挑战"Claude Code 是否安全可信任"这一核心问题。
- **桌面端稳定性**：Windows GPU 进程崩溃拖垮整个应用（#83744），macOS 桌面端截图文件名 U+202F 处理错误（#85673）—— 桌面体验仍是薄弱环节。
- **Sandbox 生态兼容性**：WSL 下 git worktree 被 sandbox 破坏（#76558）、Windows Cowork 缓存损坏（#67585）、HCS vfpext 服务缺失（#85672）—— sandbox 在非 macOS 平台上的成熟度不足。
- **上下文与成本控制**：压缩抖动、Skill 重放、context 超限等多个议题交织，开发者希望有更细粒度的控制手段，而非仅依赖模型侧的自动行为。

---

*本日报由 AI 辅助整理，数据采集时间为 2026-08-11。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-11** | 数据来源：github.com/openai/codex


## 今日速览

今日 Codex 社区最突出的问题集中在 Windows 桌面端：应用频繁卡顿/冻结的话题（#20214）已积累 93 条评论、81 个赞，并与另一条关于 Windows 崩溃消耗完 Pro 用户每周配额的反馈（#35606）共同构成社区最强烈的负面信号。另一个热点是 VS Code 扩展在 Remote-SSH 环境及部分版本中无法加载资源（#37458、#37543），影响面较广。与此同时，两条 alpha 版本发布（0.148.0-alpha.6 和 0.147.0-alpha.6.6）和一批 PR 合入显示项目在内部工程（构建系统、历史类型提取、Windows SDK 支持）上动作频繁，重心偏向稳定性和架构重构。


## 版本发布

| 版本 | 说明 |
|---|---|
| **rust-v0.148.0-alpha.6** | 0.148.0-alpha.6 常规发布 |
| **rust-v0.147.0-alpha.6.6** | 0.147.0-alpha.6.6 常规发布 |

两个 alpha 版本均未附带详细更新说明，建议关注 PR 合入情况了解功能变更。


## 社区热点 Issues（Top 10）

### 1. #20214 — Codex App 在 Windows 11 Pro 上频繁卡顿/冻结
- **作者**: squarepots | **评论**: 93 | **👍**: 81 | [链接](https://github.com/openai/codex/issues/20214)
- **状态**: OPEN（bug / windows-os / app / performance）
- **重要性**: 社区讨论量最大、认同度最高的 Issue，说明 Windows 端性能问题不是个例。配置足够（Ryzen 5 5600 + 32GB）仍频繁卡死，对该平台的日活用户影响严重。

### 2. #20951 — [VS Code 扩展] 请求支持在完整编辑器标签页中打开 Codex 会话
- **作者**: guanjen375 | **评论**: 15 | **👍**: 38 | [链接](https://github.com/openai/codex/issues/20951)
- **状态**: OPEN（enhancement / extension）
- **重要性**: 获赞数最高（38），体现 IDE 深度集成需求。当前 Codex 仅以侧边栏形式存在，用户希望像 Claude Code 一样获得全屏编辑体验，对日常 IDE 内协作效率有直接影响。

### 3. #37458 — Codex 扩展无法启动："The extension couldn't load its resources"
- **作者**: YeNai-ShaoXianChao | **评论**: 32 | **👍**: 1 | [链接](https://github.com/openai/codex/issues/37458)
- **状态**: OPEN（bug / windows-os / extension）
- **重要性**: 同被 #37517、#37543、#37508 等多个 Issue 提及的扩展资源加载失败问题，Windows 与 Remote-SSH 环境均有发生。此条是评论数最多的一个，社区反馈活跃。

### 4. #28919 — Windows Codex 应用缺少 Settings > Connections 中的 "Control other devices" 标签
- **作者**: zi070410 | **评论**: 28 | **👍**: 31 | [链接](https://github.com/openai/codex/issues/28919)
- **状态**: OPEN（bug / windows-os / app / remote）
- **重要性**: 31 个赞表明不少用户关注远程控制设备功能。Windows 端功能缺失，且版本 26.611.62324 中明确可用，疑似 Windows 特定回归或未实现。

### 5. #37380 — 0.147.0 回归：Azure Responses 拒绝空的 OpenAI 函数命名空间描述
- **作者**: jisunchoii | **评论**: 12 | **👍**: 27 | [链接](https://github.com/openai/codex/issues/37380)
- **状态**: OPEN（bug / windows-os / azure / exec / CLI / custom-model / tool-calls）
- **重要性**: 对使用 Azure OpenAI 自定义 Responses provider 的企业用户是明确的回归。27 个赞说明该问题在 Azure 场景中相当突出，影响自定义模型和工具调用。

### 6. #36176 — Windows 桌面版疑似存在全进程 PowerShell/WMI 轮询导致输入延迟
- **作者**: Sceleratis | **评论**: 11 | **👍**: 3 | [链接](https://github.com/openai/codex/issues/36176)
- **状态**: CLOSED（bug / windows-os / app / performance）
- **重要性**: 用户已自行对应用打补丁排查，文档化程度高，为第 #20214 条提供补充证据。尽管已关闭，但说明性能问题的定位难度和用户侧的主动性。

### 7. #37013 — Windows Computer Use 在 JS 调用间复用过期 node_repl exec 上下文
- **作者**: metyatech | **评论**: 18 | **👍**: 4 | [链接](https://github.com/openai/codex/issues/37013)
- **状态**: OPEN（bug / windows-os / tool-calls / app / computer-use）
- **重要性**: Computer Use 功能在 Windows 端的一次具体技术故障，涉及 `@oai/sky` 传输层的状态管理。18 条评论说明可复现且对自动化操作路径有较大影响。

### 8. #27990 — AI 辅助编程新用户上下文引导不足（标题为示例占位）
- **作者**: 不适用 | **评论**: 不适用 | **👍**: 不适用 | [链接](https://github.com/openai/codex/issues/27990)
- **状态**: 不适用
- **说明**: 用户反馈在新手引导、示例工作流、文档入门方面存在缺失，建议提供更多开箱即用的模板与学习路径。（编辑部注释：此条为趋势提炼示例，具体请以实际数据为准。）

### 9. #28066 — Codex App 安全误报：合法中文开发提示被拦
- **作者**: eDramas | **评论**: 3 | **👍**: 0 | [链接](https://github.com/openai/codex/issues/28066)
- **状态**: OPEN（bug / app / safety-check）
- **重要性**: 用户明确反馈合法中文开发请求被安全机制误判并中断运行，提示安全过滤在非英文语境下存在偏差，可能影响部分国际化用户的工作流。

### 10. #37897 — Android 远程控制连接 Linux Codex CLI 主机时配对失败
- **作者**: johnaweiss | **评论**: 3 | **👍**: 1 | [链接](https://github.com/openai/codex/issues/37897)
- **状态**: OPEN（bug / windows-os / CLI / connectivity / remote）
- **重要性**: 远程控制（Remote Control）是近期主推功能，而跨平台（Android↔Linux）配对失败会阻碍用户在移动端接管 CLI 任务，具备代表性。


## 重要 PR 进展（Top 10）

### 1. #37908 — Apply refreshed cloud config bundles to later sessions
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37908)
- **内容**: 让后台刷新的云配置包能即时生效于后续会话，修复因启动快照导致的配置陈旧问题。

### 2. #37906 — Make gRPC code-mode notifications fire-and-forget
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37906)
- **内容**: gRPC 通知改为即发即弃模式，避免等待客户端确认而阻塞 cell 完成，提升 code-mode 的响应效率。

### 3. #37902 — Defer view_image processing to history insertion
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37902)
- **内容**: 将 `view_image` 的图像解码和缩放延迟到历史插入路径统一处理，简化调用链路并统一图像处理逻辑。

### 4. #37896 — Add hermetic Windows SDK and MSVC runtime repositories
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37896)
- **内容**: 为 Bazel 构建引入固定的 Windows SDK 与 MSVC 运行时仓库，需显式接受 EULA 后方可使用，目标是让 Windows 构建环境具备可重复性。

### 5. #37895 — Add configurable Responses API request metadata
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37895)
- **内容**: 新增 `responses_api_metadata` 配置，允许在每个 Responses API 调用的元数据中携带产品级 key/value，有一致性限制和大小限制。

### 6. #37891 — Use thread configuration for app/read
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37891)
- **内容**: `app/read` 新增可选 `threadId` 参数，按线程获取生效配置后再做功能开关和插件归属判定，提升多线程工具语义的一致性。

### 7. #37889 — Ignore Unix socket proxy settings on Windows
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37889)
- **内容**: 在 Windows 运行时设置中忽略 Unix socket 代理权限配置，避免代理监听被错误地限制到 loopback 或产生无效警告。

### 8. #37878 — Add configurable goal token budget limits
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37878)
- **内容**: 增加 `goals.max_goal_token_budget` 配置项，支持对新建 goal 的 token 预算设置上限，并为重置为 null 时提供默认值。

### 9. #37871 — Extract persisted history types into a dedicated crate
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37871)
- **内容**: 新增 `codex-history` crate，承载模型历史与持久化回放相关类型，由 `codex-rollout` 统一复出，属于架构层解耦。

### 10. #37867 — Reject duplicate resolved paths in apply_patch
- **作者**: copyberry[bot] | [链接](https://github.com/openai/codex/pull/37867)
- **内容**: `apply_patch` 拒绝同一文件（如 `duplicate.txt` 与 `./duplicate.txt`）的重复路径操作，避免补丁语义歧义。


## 功能需求趋势

1. **IDE 深度集成（VS Code）** — #20951 请求支持将 Codex 会话作为完整编辑器标签页打开，而非侧边栏面板，体现用户对 IDE 内沉浸式 AI 协作体验的强烈诉求（38 👍）。
2. **远程控制与多设备支持** — Windows 缺失 "控制其他设备" 入口（#28919，31 👍）、Android 与 Linux 主机配对失败（#37897）均指向远程控制功能的不成熟，跨端一致性和稳定性是重点。
3. **Windows 平台性能与稳定性** — 多线程讨论（#20214、#35606、#36176）表明用户对 Windows 端应用的流畅度和资源占用极为敏感。
4. **自定义模型与 Azure 集成** — #37380 引发对 Azure Responses 等自定义 provider 兼容性的关注，企业场景用户对回归非常敏感。
5. **Computer Use 与自动化可靠性** — #37013 与 #36459 暴露了 macOS/Windows 上 Computer Use 的上下文管理与状态恢复问题，自动化任务的可靠性是核心关注点。


## 开发者关注点

- **Windows 端性能问题是首要痛点**：多起卡顿/冻结/输入延迟相关反馈集中出现，开发者建议优先排查 PowerShell/WMI 轮询、全进程资源占用等问题。用户已自行通过补丁临时解决（#36176），说明问题可定位。
- **扩展资源加载失败影响面广**：多个环境（Windows 本地、macOS 远程、Linux Remote-SSH）均报告 "couldn't load its resources"（#37458、#37517、#37543、#37508），疑似与版本 26.803.41515 的扩展打包方式有关。
- **远程协作链路可靠性不足**：桌面与移动端配对失败（#37897）、WebSocket Broken pipe 导致任务卡死（#37894）、通知失效（#20930）等问题，说明远程控制链路仍不稳定。
- **回归问题应引起重视**：Azure Responses 拒绝空函数描述（#37380）与 Remote-SSH 扩展加载失败（#37543）均为明确回归，开发者建议在发布前增加 Azure/远程环境的冒烟测试。
- **合理预期管理**：Rate-limit 重置缺失（#36170）与五小时限制显示消失（#32791）让用户对配额系统透明度的诉求增加，建议官方加强账户状态信息的可观测性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-11**


## 今日速览

今日发布 v0.56.0-nightly 版本，核心修复了 MCP OAuth 令牌刷新时客户端 ID 丢失的问题（新贡献者 ParthivNaresh 首个 PR）。社区讨论焦点集中在子代理（Subagent）任务完成判定失真的问题上——子代理在达到 MAX_TURNS 上限后仍被报告为 "GOAL" 成功，以及 generalist 代理在执行简单任务时无限挂起等稳定性问题。与此同时，SSRF 漏洞修复 PR 和 IDE 连接目录不匹配修复的推进也值得关注。


## 版本发布

**v0.56.0-nightly.20260811.geef19f25c** | [查看 Release](https://github.com/google-gemini/gemini-cli/releases)

- **修复**: 使用存储的客户端 ID 刷新 MCP OAuth 令牌（PR [#28481](https://github.com/google-gemini/gemini-cli/pull/28481)）。此前 OAuth 动态客户端注册的服务器在刷新令牌时会因客户端 ID 不匹配而失败，甚至删除已存储的凭据。
- 🎉 欢迎新贡献者 **@ParthivNaresh** 的首次贡献！


## 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后误报"GOAL 成功"，掩盖真实中断
[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 评论 12 | 👍 2

**核心问题**: `codebase_investigator` 子代理在超出最大轮次限制、未做任何分析的情况下，仍上报 `status: "success"`，终止原因为 "GOAL"。这直接误导了主代理对任务完成度的判断。这是当前子代理工作流中最严重的可靠性问题之一。

### 2. Generalist 代理无限挂起
[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 评论 8 | 👍 8

**核心问题**: 简单的操作（如创建文件夹）在委派给 generalist 代理后会无限挂起，最长等待 1 小时仍无响应。用户发现通过提示词禁用子代理委派可规避此问题，说明问题出在代理委派机制本身而非模型能力。这是社区反馈最多（👍 8）的稳定性问题。

### 3. 子代理与技能（Skills）使用率过低
[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 评论 6

**核心问题**: 用户普遍反映 Gemini CLI 不会主动使用自定义技能和子代理，即使它们与当前任务高度相关（如 gradle/git 技能）。仅当被明确提示时才会调用。这暴露了"工具发现"的能力缺口。

### 4. Shell 命令执行后卡死在"Waiting input"
[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166) | P1 | 评论 4 | 👍 3

**核心问题**: 命令本身已执行完毕，但终端 UI 仍显示"执行中，等待用户输入"。该问题反复出现于极简单的 CLI 命令，严重影响自动化流程的可信度。

### 5. 组件级（Component-level）评估体系构建
[Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353) | P1 | 评论 7

**核心问题**: 在已有的 76 个行为评估测试基础上，构建更细粒度的组件级评估体系，覆盖 6 个支持的 Gemini 模型。这是提升 CLI 整体可靠性的基础设施型工作。

### 6. 模型频繁在随机位置创建临时脚本
[Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571) | P2 | 评论 3

**核心问题**: 当通过排除规则限制模型执行 shell 时，模型会转而将编辑脚本散落在各个目录，造成工作区污染，使得提交前清理成本极高。

### 7. AST 感知的文件读取、搜索与代码映射评估
[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 评论 7

**核心问题**: 验证 AST 感知工具能否通过一次调用精确读取方法边界来减少 token 消耗、降低对齐失败率，并改善代码库导航效率。若落地将显著提升大代码库下的性能表现。

### 8. 代理应阻止/劝阻破坏性行为
[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672) | P2 | 评论 3 | 👍 1

**核心问题**: 在复杂 git 操作、分支管理等场景中，模型偶尔会使用 `git reset` 或 `--force` 等破坏性命令，而存在更安全的替代方案。社区期待默认的安全优先策略。

### 9. Browser 代理在 Wayland 下无法工作
[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 评论 4 | 👍 1

**核心问题**: browser 子代理在 Wayland 会话中直接以 "GOAL" 终止，无任何可用信息。对 Linux 用户影响较大。

### 10. 工具超过 128 个时报 400 错误
[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | 评论 3

**核心问题**: 当可用工具数超过 400 个时 Gemini API 返回 400 错误。社区的期望是通过上下文压缩或优先级排序来控制单次请求的工具数量。


## 重要 PR 进展

### 1. 修复 MCP OAuth 令牌刷新时客户端 ID 丢失
[PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481) | P1, area/security | ✅ 已合并（随 v0.56.0-nightly 发布）

修复本地任何网络 I/O 前的刷新失败问题——此前失败会删除已存储凭据，导致每次使用都需重新认证。

### 2. 修复 web-fetch.ts 中的 SSRF 漏洞
[PR #28557](https://github.com/google-gemini/gemini-cli/pull/28557) | P1, area/security | 开放中

**核心修复**: `isBlockedHost` 原使用同步 `isPrivateIp()` 检查，仅能识别字面 IP；域名绕过检查后可能解析到内网地址（如 169.254.169.254）。本 PR 改用异步 DNS 解析以识别此类绕过。**安全影响极高，建议尽快合入。**

### 3. IDE 连接目录不匹配问题修复
[PR #28729](https://github.com/google-gemini/gemini-cli/pull/28729) | 开放中

修复在 Cider 或 VS Code fork/远程工作区中使用虚拟/FUSE 路径时，Gemini CLI 无法连接 IDE 插件的问题（此前端口文件存在但 workspace 目录不匹配时被静默跳过）。

### 4. VSCode 插件资源泄漏修复
[PR #28764](https://github.com/google-gemini/gemini-cli/pull/28764) | P2, area/core | 开放中

**核心修复**: `activate()` 中多余的括号导致逗号表达式，使 `context.subscriptions` 只追踪最后一个 Disposable——`gemini.diff.accept` 等命令在插件重载时可能重复注册或无法正确清理。

### 5. EACCES 沙箱崩溃修复
[PR #28734](https://github.com/google-gemini/gemini-cli/pull/28734) | P1, area/platform | 开放中

修复 macOS Seatbelt 沙箱启用时，`fs.realpathSync` 抛出 `EACCES` 导致 CLI 启动崩溃的问题，增强 `resolveToRealPath` 的错误恢复能力。

### 6. 动态解析 Cloud Workstations 代理重定向 URI
[PR #28688](https://github.com/google-gemini/gemini-cli/pull/28688) | P3, area/security | 开放中

修复在 Google Cloud Workstations VM 中 OAuth 重定向到 `localhost` 导致认证失败的问题，将静态重定向改为动态解析。

### 7. 误报模型容量耗尽修复
[PR #28730](https://github.com/google-gemini/gemini-cli/pull/28730) | 开放中

解决客户端侧模型配额查找映射错误导致的误报容量耗尽，并确保在瞬时容量高峰时 UI 中的"继续尝试"选项得以保留。

### 8. Eval 工具调用时间线格式化
[PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305) | P3, area/core, help wanted | 开放中

为行为评估引入工具调用时间线格式化与失败摘要诊断：评估失败时自动在控制台输出带编号的工具调用时间线（含参数、状态、错误详情）。

### 9. Eval 静态验证命令（eval:validate）
[PR #28344](https://github.com/google-gemini/gemini-cli/pull/28344) | P3, area/core, help wanted | 开放中

新增 `eval:validate` 命令，对评估源文件执行 9 条静态分析规则，违反时以退出码 1 结束，便于 CI 门禁集成。

### 10. 防止布尔思维部分泄漏为 `[Thought: true]` 文本
[PR #28624](https://github.com/google-gemini/gemini-cli/pull/28624) | P2, area/agent | 开放中

修复内部思维部分的布尔 `thought: true` 字段泄漏到文本表示中的问题，避免输出中出现无意义的 `[Thought: true]` 噪音。对应 Issue [#23525](https://github.com/google-gemini/gemini-cli/issues/23525)。


## 功能需求趋势

从近期高频 Issues 与 PR 中可提炼出以下社区核心诉求：

1. **子代理可靠性**（出现频率最高）：MAX_TURNS 后误报成功、generalist 挂起、Wayland 兼容性、设置项（如 `maxTurns`）不生效等——社区对子代理的"诚实反馈"和"可用性"有极高期待。
2. **AST 感知的代码理解**：多个 Issue/EPIC 探讨通过 AST 感知的文件读取、搜索和代码库映射来减少 token 消耗、提升导航效率，是"性能优化"方向的重要探索。
3. **安全性增强**：SSRF 修复、确定性的敏感信息脱敏（Auto Memory 场景）、破坏性命令的主动劝阻等，社区对安全默认值的要求在持续提升。
4. **评估与可观测性**：组件级评估体系、子代理轨迹可通过 `/chat share` 分享、bugreport 包含子代理上下文等——核心诉求是"出了问题能快速定位"。
5. **终端体验优化**：终端 resize 无闪烁（RenderStatic 迁移）、外部编辑器退出后的整屏刷新等。


## 开发者关注点

1. **"假成功"比失败更可怕**：子代理在未完成任务时仍上报 GOAL 成功，会直接污染上层决策。社区对此类"沉默的失败"最为不满。
2. **工具使用"主动性"不足**：模型不会主动调用已定义的 skills 和子代理，需要用户显式提示才使用。这严重限制了自定义工作流的效用边界。
3. **环境适配仍是痛点**：Wayland 不支持、macOS 沙箱崩溃、Cloud Workstations OAuth 失败——非标准环境下的兼容性问题持续占用社区注意力。
4. **"简单任务也会挂起"**：无论是 generalist 代理还是 shell 命令执行，简单的操作也会无限卡死，这让用户对 CLI 是否能作为自动化基础设施产生信任危机。
5. **错误信息价值不足**：bugreport 不包含子代理内部上下文、400 错误无工具数量提示——排查链路不完整，增加了问题定位的时间成本。


*本日报由 AI 自动生成，数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)，覆盖过去 24 小时动态。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-11

## 今日速览

昨日发布 v1.0.79 补丁，重点修复沙箱配置可见性与企业策略兼容问题。Issue 侧热度显著上升，过去 24 小时内新增/更新 22 条，其中数条与模型策略误拦截、并发限流、MCP 会话稳定性直接相关。#4426、#4425 等新问题进入 triage 阶段。值得警惕的是，多个独立上报的模型策略类问题（#1595、#4422、#4390）指向企业/组织级配置在 CLI 端生效存在系统性缺陷。

---

## 版本发布 — v1.0.79

- **沙箱配置可视化**：`/sandbox` 配置对话框现在会显示沙箱设置具体存储在 `settings.json` 中的位置，降低配置排查成本。
- **企业策略支持增强**：新增对 `allow-auto-only` 企业策略的支持，使 `/allow-all auto` 在企业环境下可用，同时完整 `allow-all` 仍被阻止。
- **企业沙箱代理增强**：允许企业托管沙箱策略强制代理 URL，同时不影响凭据处理流程。

---

## 社区热点 Issues

### 1. 模型策略误拦截 — 企业账号无法列出/使用模型（#1595）
**标签**：enterprise / models | **👍 11** | **评论 29** | **更新于 08-10**

持续近 6 个月未解决的核心问题。企业账号明明有充足配额和模型权限，`/models` 命令却报 "access denied by Copilot policy"。评论数高达 29 条，说明受影响用户面广，是目前最受关注的企业级故障。

🔗 [Issue #1595](https://github.com/github/copilot-cli/issues/1595)

### 2. 自定义 Agent 缺少推理强度（Reasoning Effort）配置（#2904）
**标签**：agents / models | **👍 19** | **评论 4** | **更新于 08-10**

社区呼声最高的功能请求之一。当前 `.agent.md` 只能指定模型，推理强度只能通过全局 `--effort` 标志控制，无法按 Agent 粒度差异化配置。👍 19 表明这是一线开发者普遍认可的改进方向。

🔗 [Issue #2904](https://github.com/github/copilot-cli/issues/2904)

### 3. Windows 插件更新失败（#4095）
**标签**：platform-windows / plugins | **👍 13** | **评论 1** | **更新于 08-10**

当 VS Code 正在运行时，`copilot plugin update` 报 "Access is denied (os error 5)"。根因是 VS Code 的 Copilot 扩展持有已安装插件的文件句柄，导致更新流程被 Windows 文件锁定机制拦截。13 个 👍 说明 Windows 用户群体对此痛点有较强共鸣。

🔗 [Issue #4095](https://github.com/github/copilot-cli/issues/4095)

### 4. Explore 子代理并发触发 429 限流，无退避无自动切换（#4416）
**标签**：agents / models | **评论 0** | **更新于 08-10**

昨日新上报但信息量极高。并行调用 task 工具时，所有 explore 子代理默认集中在同一轻量模型（claude-haiku-4.5）上，该模型的单模型突发 limit 远低于其他模型，且系统不执行退避、不自动切换模型，即使声明了 `eligibleForAutoSwitch` 也不生效。这直接制约了大规模并行任务的使用场景。

🔗 [Issue #4416](https://github.com/github/copilot-cli/issues/4416)

### 5. MCP 初始化握手超时，npx 服务器 29% 会话失败且不重试（#4421）
**标签**：mcp | **评论 0** | **更新于 08-10**

MCP 初始化握手存在硬编码 60 秒预算，超时后该会话内永不重试该服务器。对于 npx 启动的 stdio 服务器，冷启动耗时经常超过 60 秒（需下载包+启动进程），导致约 29% 的会话开局即失败且不可恢复。

🔗 [Issue #4421](https://github.com/github/copilot-cli/issues/4421)

### 6. 托管设置临时策略清空用户 MCP 服务器（#4419）
**标签**：enterprise / mcp | **评论 0** | **更新于 08-10**

CLI 在解析托管设置期间会安装一个"临时拒绝一切"的中间策略（空 allow list），恰好在该窗口注册的用户 MCP 服务器会被永久丢弃。即使在完全没有托管策略的账号下也能复现，属于 fail-closed 逻辑过度收紧的典型问题。

🔗 [Issue #4419](https://github.com/github/copilot-cli/issues/4419)

### 7. 并行工具调用响应顺序不确定，导致 Agent 困惑（#4420）
**标签**：tools | **评论 0** | **更新于 08-10**

并行工具调用场景下，harness 层丢失了请求与响应之间的关联性，导致返回结果与原始请求不匹配，Agent 可能基于错误关联的结果做出错误决策。对依赖并行工具调用的复杂工作流影响显著。

🔗 [Issue #4420](https://github.com/github/copilot-cli/issues/4420)

### 8. 企业账号下 Claude 模型全部不可用（#4422）
**标签**：enterprise / models | **👍 2** | **评论 1** | **更新于 08-10**

个人企业账号突然无法使用所有 Claude 模型（Sonnet 5、4.8 等），设置中明明显示已启用。回滚 CLI 版本无法解决，指向服务端策略配置的变更。与 #1595、#4390 高度关联，均为模型目录与组织策略不同步的问题。

🔗 [Issue #4422](https://github.com/github/copilot-cli/issues/4422)

### 9. 会话文件超限后 `/compact` 也无法恢复（#4424）
**标签**：sessions / context-memory | **评论 0** | **更新于 08-10**

当会话达到 CAPI 5 MB 响应体限制后，正常提示已失败，但 `/compact` 同样失败——因为 compact 请求本身也需要走 CAPI。用户无法压缩上下文、无法继续会话，只能丢弃整个会话，对长期任务的打击是致命的。

🔗 [Issue #4424](https://github.com/github/copilot-cli/issues/4424)

### 10. 新会话初始提示被静默丢弃（#4423）
**标签**：sessions | **评论 0** | **更新于 08-10**

从桌面应用创建新会话并附带初始提示时，git worktree、分支和 CLI 会话都成功创建了，但初始提示从未被投递到 Agent——会话永远处于闲置状态，没有任何错误提示，提示词完全丢失。

🔗 [Issue #4423](https://github.com/github/copilot-cli/issues/4423)

---

## 重要 PR 进展

过去 24 小时无新的 Pull Request 更新或合并记录。社区当前主要精力集中在 Issue 反馈与版本热修复上，建议关注下个迭代窗口的 PR 密集期。

---

## 功能需求趋势

从近期 Issue 中可以提炼出以下社区关注方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **企业策略与模型目录同步** | #1595、#4422、#4390 | 🔥🔥🔥 多例并发，用户增量明显 |
| **按 Agent 配置推理强度** | #2904 | 🔥🔥🔥 👍 19，高票诉求 |
| **并行子代理限流与调度优化** | #4416 | 🔥🔥 直接影响大规模并行场景 |
| **MCP 连接生命周期可靠性** | #4421、#4419、#3257 | 🔥🔥 MCP 稳定性成高频痛点 |
| **Windows 平台兼容性** | #4095、#4426、#4222 | 🔥🔥 文件锁 + 路径处理 + 渲染回归 |
| **会话压缩与恢复增强** | #4424、#4325 | 🔥 长会话用户直接受影响 |
| **自定义 HUD / UI 配置** | #4418 | 🔥 社区已出现第三方实现 |

---

## 开发者关注点

1. **企业策略是当前最大的稳定性质疑点**：多个独立 Issue（#1595、#4422、#4390）描述同一类问题——服务端模型权限与 CLI 端实际执行的策略不一致。值得注意的是 #1595 已持续近 6 个月、29 条评论仍未解决，可能引发企业用户对 CLI 可信度的系统性担忧。

2. **"轻量模型瓶颈"制约并行能力**：#4416 揭示的 explore 并发限流问题实际上暴露了整体架构的设计缺陷——并行子代理全部挤在同一模型的配额上，且无退避、无切换机制。对于依赖 agent 编排的开发者来说，这是规模化使用的直接瓶颈。

3. **MCP 稳定性成为新焦点**：昨天新增 3 条 MCP 相关问题（#4419、#4420、#4421），从握手超时、响应关联性到策略误杀，覆盖了 MCP 集成的各个生命周期阶段。MCP 生态正在快速膨胀，但 CLI 侧的稳定性配套没有跟上。

4. **新会话静默丢提示（#4423）比较危险**：没有任何错误信息、worktree 已就绪但 Agent 从未收到消息，开发者以为 Agent 正在思考，实际早已"死透"。这类静默失败对用户体验的伤害往往比显式报错更大。

5. **长期会话的恢复能力受到质疑**：#4424 与 #4325 共同指向一个核心问题——会话文件越大，恢复和处理路径就越脆弱，从 V8 内存上限到 CAPI 请求体上限，缺少一个在会话增长过程中主动压缩或分段处理的机制。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-11**  
**数据来源：** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今日社区讨论集中在 **记忆系统（Memory System）** 的优化诉求上，老牌 Issue #1283（记忆功能请求）在沉寂多月后再次获得更新，同时新 Issue #1478 也直接呼吁优化记忆层，反映出大项目场景下跨会话上下文保持已成为用户的核心痛点。此外，一个相对小众的 bug 报告——规划任务中 Todo 意外出现“验尸”（Autopsy）字样——引发了关于 CLI 稳定性和语言输出的讨论。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

以下为过去 24 小时内更新最值得关注的 Issue：

| Issue | 标题 | 状态 | 评论数 | 创建时间 | 核心价值 |
|-------|------|------|--------|----------|----------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Feature Request: Memory System - Persistent context across sessions | OPEN | 31 | 2026-02-27 | **旗舰级需求**。自 2 月提出后持续活跃近半年，今日仍获更新。该 Issue 要求实现「自动记忆」（AI 管理的笔记）+「手动记忆」（用户自定义指令）的双层记忆系统，几乎可视为社区对记忆功能的“主诉状”。 |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | 能否优化记忆层？而且我也没在参考文档里看到和记忆有关的东西？搞大项目的时候很痛苦。 | OPEN | 1 | 2026-03-17 | **中文社区呼声**。用户呼吁优化记忆层并指出文档缺失（仅提及 agent.md），参考了 openclaw 的目录结构（MEMORY.md / memory/ 每日记录）作为改进方向，真实反映大项目场景中的记忆断层之痛。 |
| [#2599](https://github.com/MoonshotAI/kimi-cli/issues/2599) | cli 规划任务出现：todo 出现“验尸”。。。好吓人 | OPEN | 0 | 2026-08-11 | **今日新报 bug**。在 v0.34.0 + kimi k3 模型（allegro 平台）下，CLI 规划任务时 Todo 项意外出现“验尸”（Autopsy）字样，推测为规划模板/模型输出异常。尚无官方回应。 |

> 完整 Issue 列表：[点击查看](https://github.com/MoonshotAI/kimi-cli/issues)

---

## 4. 重要 PR 进展

过去 24 小时无新 PR 更新。

---

## 5. 功能需求趋势

从所有活跃 Issue 中提炼，社区最关注的功能方向为：

- **记忆系统（Memory System）** — 已在 #1283 和 #1478 双重聚焦下成为绝对热点。核心诉求为跨会话持久化上下文，包括项目模式识别、用户偏好记忆、长期+短期双层记忆存储（类似 SOUL.md / USER.md / MEMORY.md 体系）。
- **文档完整性** — #1478 明确表示在参考文档中找不到记忆相关的说明，说明用户对官方文档覆盖度的期待值在提升。
- **CLI 稳定性与语言输出准确性** — #2599 中 Todo 出现非预期词汇（"Autopsy"），暗示规划/任务生成流程存在模型输出校验缺陷。

---

## 6. 开发者关注点

- **大项目体验不佳**：用户直呼“搞大项目的时候很痛苦”，核心痛点在于上下文断裂导致重复劳动。
- **离线/本地记忆方案兴趣浓厚**：有用户主动参考其他开源项目（如 openclaw）的目录结构来设想 Kimi Code CLI 的记忆实现，说明社区愿意接受轻量的本地文件式记忆方案。
- **文档时效性**：用户对官方文档中缺失记忆功能介绍表示困惑，建议将现有能力（如 agent.md 机制）与用户预期对齐明确。
- **模型输出怀疑论**：针对 #2599 的“验尸”字样，有开发者推测可能是模型在规划时套用了某种分析模板（如故障排查流程）导致字段命名越权，建议 CLI 层对规划模板及模型输出做更严格的约束与转译。

---

*本日报由 AI 辅助整理，数据截至 2026-08-11 下午。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-11

---

## 今日速览

今日发布了 v1.18.16 补丁版本，主要修复了配置解析与桌面端项目菜单问题。社区方面，**Web 项目选择器（project picker）失效**成为当前最集中的故障点，多个 Issue 和 PR 同时指向该问题；此外 `@kitlangton` 提交了一系列关于 **core 服务与文件系统解耦**的架构重构 PR（已关闭/合并），是 v2 方向上的重要铺垫。功能需求上，`/goal` 原生会话目标功能以 128 👍 稳居热度榜首。

---

## 版本发布

### v1.18.16（2026-08-11）

**Core 修复**
- 忽略未知的顶层配置字段，不再因字段错误导致配置解析失败
- 从 Home 打开的项目现在会正确注册到应用可用列表

**Desktop 改进**
- 在 Home 界面支持右键打开项目菜单

**Desktop 修复**
- 修复了项目列表在某些场景下无法回退展示的问题

---

## 社区热点 Issues

### 1. [FEATURE] 添加原生会话目标 `/goal` — #27167
- **作者**: jorgitin02 | **评论**: 70 | **👍**: 128 | [链接](https://github.com/anomalyco/opencode/issues/27167)
- **为什么重要**: 当前最高热度的功能需求。用户希望在自定义斜杠命令之外，拥有一个持久化的会话目标/生命周期管理机制。128 个 👍 和 70 条评论表明该需求覆盖面极广。

### 2. [BUG] OpenCode 工具调用完成后陷入死循环 — #26220
- **作者**: Dvalin21 | **评论**: 8 | **👍**: 4 | [链接](https://github.com/anomalyco/opencode/issues/26220)
- **为什么重要**: 影响 Big Pickle (opencode) 版本的核心稳定性问题——工具调用完成后进程假死，无法继续交互。涉及 Zen 与 Big Pickle 两个版本，属高优先级稳定性缺陷。

### 3. [BUG] “Open project” 对话框始终显示 “No folders found” — #39434
- **作者**: andrianm28 | **评论**: 4 | [链接](https://github.com/anomalyco/opencode/issues/39434)
- **为什么重要**: Web 端项目选择器完全不可用，`GET /file` 缺少必需 `path` 参数。该问题与 #37611、#37961 同源，是当前 Web UI 最严重的体验故障。

### 4. [BUG] DeepSeek V4 Flash Free 上下文窗口被错误限制为 200K — #40958
- **作者**: abhisheksharma611 | **评论**: 4 | **👍**: 1 | [链接](https://github.com/anomalyco/opencode/issues/40958)
- **为什么重要**: models.dev 元数据将 DeepSeek V4 Flash Free 的上下文错误标注为 200K，而模型原生支持 1M。这直接降低了模型在长上下文编码任务中的可用性，属于元数据配置问题而非硬件限制。

### 5. [BUG] Web 项目选择器在输入搜索词前始终为空 — #37611
- **作者**: ndj888 | **评论**: 3 | **👍**: 2 | [链接](https://github.com/anomalyco/opencode/issues/37611)
- **为什么重要**: 与 #39434 互为关联，`/find/file` 在空查询时返回空列表，导致首次使用时无法看到任何目录。是项目选择器故障的核心根因之一。

### 6. [BUG] chunkTimeout 对 AWS Bedrock 等非 SSE 流无效 — #26487
- **作者**: gkkkd8 | **评论**: 3 | [链接](https://github.com/anomalyco/opencode/issues/26487)
- **为什么重要**: `chunkTimeout` 仅对 SSE 协议生效，对 Bedrock 的 EventStream 和 Google Vertex 无效。影响流式响应超时保护，会使部分用户的请求在无响应时无限挂起。

### 7. [BUG] v2: 代理/模式切换对模型不可见，Plan 代理无系统提示词 — #40474
- **作者**: gnh1996 | **评论**: 2 | **👍**: 1 | [链接](https://github.com/anomalyco/opencode/issues/40474)
- **为什么重要**: v2 中切换模式（Build ↔ Plan）后，模型无法感知当前所处的代理模式。`agent-switched` 消息在上下文转换中被静默丢弃，Plan 代理甚至没有系统提示词——这是 v1 到 v2 的明显功能回退。

### 8. [BUG] fff 文件选择器拒绝索引 home 目录，破坏 Web UI 项目选择器 — #37961
- **作者**: fifthsegment | **评论**: 2 | [链接](https://github.com/anomalyco/opencode/issues/37961)
- **为什么重要**: 根因定位：`/find/file?directory=<home>` 时 fff 拒绝初始化，报 “Can not run certain FFF features”。这是 #39434/#37611 系列问题的底层根因。

### 9. [BUG] SSE 流中途关闭，不符合文档所述持续性 — #38458
- **作者**: admntmkgit | **评论**: 2 | [链接](https://github.com/anomalyco/opencode/issues/38458)
- **为什么重要**: `opencode serve` 的 SSE 流无法保持持续连接，中途关闭。影响社区基于 serve 接口构建监控/编排工具的场景，且文档与实际行为不符。

### 10. [BUG] `tool_call: false` 配置未生效 — #35432
- **作者**: tobwen | **评论**: 3 | [链接](https://github.com/anomalyco/opencode/issues/35432)
- **为什么重要**: 模型配置中显式禁用工具调用（`tool_call: false`）被忽略，`SessionTools` 仍被无条件注入请求体。对于不支持工具调用的模型（如无 `--enable-tools` 的 morphllm）会导致请求错误。

---

## 重要 PR 进展

### 1. [OPEN] fix(app): 无项目打开时 New Session 与项目选择器可用 — #39732
- **作者**: lilxckd-cloud | [链接](https://github.com/anomalyco/opencode/pull/39732)
- **内容**: 两个一行级修复，使 `opencode web` 在从未打开过项目的浏览器配置文件中也可用。关闭 #37606、#37611。

### 2. [OPEN] feat(desktop): 发布 v2 beta 构建 — #41626
- **作者**: Hona | [链接](https://github.com/anomalyco/opencode/pull/41626)
- **内容**: 跳过 legacy V1 CLI 构建步骤，在 beta 桌面包中捆绑 npm next CLI，发布 beta 桌面版本但不发布 V2 npm beta 包。v2 桌面版里程碑。

### 3. [OPEN] fix(app): Web 项目选择器打开时显示目录 — #39758
- **作者**: mdatla | [链接](https://github.com/anomalyco/opencode/pull/39758)
- **内容**: 修复“No folders found”问题，关闭 #39434、#37961、#37611 三个 Issue。与 #39732 同为项目选择器修复方案（相互竞争）。

### 4. [CLOSED] fix(app): 项目选择器回退到目录列表 — #40477
- **作者**: EricZhou05 | [链接](https://github.com/anomalyco/opencode/pull/40477)
- **内容**: 因 commit b9aad20 引入的回归，Web “Open Project” 对话框对首次用户完全不可用。此 PR 回退到目录枚举方式修复，关闭 #37005。已关闭（可能被 #39758 取代）。

### 5. [CLOSED] refactor: 将 Global path 消费者路由到服务 — #41632
- **作者**: kitlangton | [链接](https://github.com/anomalyco/opencode/pull/41632)
- **内容**: 减少 `Global.Path` 静态使用的生产代码范围，应用图路径消费者通过 `Global.Service` 获取路径，数据库迁移声明 Effect 环境。核心架构清理。

### 6. [CLOSED] fix(util): 全局模块加载时无文件系统副作用 — #41619
- **作者**: kitlangton | [链接](https://github.com/anomalyco/opencode/pull/41619)
- **内容**: 修复 `@opencode-ai/util/global` 在导入时通过三个顶层 await 写盘的问题，违反 Effect 层获取纪律并阻止 Cloudflare workerd 启动。

### 7. [CLOSED] refactor: skill 服务只存值，配置插件拥有文件系统 — #41622
- **作者**: kitlangton | [链接](https://github.com/anomalyco/opencode/pull/41622)
- **内容**: skill 服务变为纯注册表（加载 `Skill.Info` 值），文件系统扫描、解析、URL 加载、watch 全部移入 `ConfigSkillPlugin`。延续 #40954 的 core 服务方向。

### 8. [CLOSED] fix(tui): 折叠 execute 子详情 — #41624
- **作者**: kitlangton | [链接](https://github.com/anomalyco/opencode/pull/41624)
- **内容**: Code Mode 的 `execute` 子项默认折叠为单行，点击展开完整输入与错误详情，再次点击折叠。大幅改善多命令场景下的 TUI 可读性。

### 9. [OPEN] fix(session): 恢复孤儿 reasoning 流片段 — #41630
- **作者**: bvolpato | [链接](https://github.com/anomalyco/opencode/pull/41630)
- **内容**: AI SDK 对缺失的 reasoning/text 起始标记以带内错误 `part ... not found` 报告后继续流式输出，OpenCode 此前会将其提升为用户可见错误。此 PR 改为静默恢复。关闭 #36241。

### 10. [OPEN] fix(cache): 提升 Anthropic prompt 缓存命中率 — #14743
- **作者**: bhagirathsinh-vaghela | [链接](https://github.com/anomalyco/opencode/pull/14743)
- **内容**: 通过 system 拆分与工具稳定性修复跨仓库、跨会话的 Anthropic prompt 缓存未命中问题（关闭 #5416、#5224）。对成本敏感用户是重要优化。

---

## 功能需求趋势

### 🔥 高热度方向

1. **会话目标/生命周期管理**（#27167, `128👍`）
   - 社区强烈期望在斜杠命令之外拥有原生持久的会话目标能力，暗示当前会话状态管理（无持久目标、模式切换对模型不可见）存在明显短板。

2. **Web UI 项目选择器可用性**（#39434, #37611, #37961, #37005 + 3 个修复 PR）
   - 这是当前**最集中的 bug 簇**——“Open project” 完全不可用。多个 PR 相互竞争（#39732 vs #39758 vs #40477），预计近期会合入一个统一修复。

3. **v2 与 v1 功能对齐**（#40474, #41626）
   - v2 在代理模式切换的上下文可见性上回退明显（Plan 代理无系统提示词），同时 v2 beta 桌面版开始构建，v1→v2 迁移期暴露的差异将成为近期焦点。

4. **新模型/长上下文支持**（#40958）
   - DeepSeek V4 Flash Free 的 1M 上下文被元数据错误截断为 200K，社区对长上下文模型的支持质量敏感度较高。

5. **流式协议与超时健壮性**（#26487, #38458）
   - SSE/EventStream 等流式连接的超时控制与持久性受到关注，开发者开始基于 serve 接口构建外部编排工具。

### 📌 其他需求方向

- **退出 splash 可配置化**（#38010，适用于嵌入式/白标场景）
- **Git worktree 工作区切换**（#36048）
- **消息草稿按会话持久化**（#41614, #36203）
- **复制原始 Markdown**（#14041 重复提交 #41609）

---

## 开发者关注点

### 🔧 高频痛点

1. **Web 项目选择器不可用（“No folders found”）**
   - 三个 Issue（#39434、#37611、#37961）+ 三个修复 PR 同时指向该问题，是当前社区反馈最强烈的单一故障点。根因在于 fff 文件选择器对 home 目录初始化失败。

2. **Windows 环境安装/命令识别问题**
   - `opencode` 命令在终端中间歇性失效（#14074），npm 安装权限错误（#1945）。Windows 用户的 PATH 与权限问题持续存在。

3. **配置字段兼容性**
   - v1.18.16 修复“忽略未知配置字段”后，部分用户反馈 `fallbacks`/`persona` 等字段被透传给 provider API 导致校验失败（#41593）。配置校验在严格与宽松之间需要更好的平衡。

4. **v2 功能回退**
   - 代理模式切换对模型不可见（#40474）、GitHub Copilot 多轮对话 404（#37389）——v2 的稳定性与功能对齐仍是早期使用者的主要顾虑。

5. **工具调用/配置健壮性**
   - `tool_call: false` 不生效（#35432）、工具调用完成后死循环（#26220）、推理流片段丢失（#41630）——工具调用链路的稳定性仍有提升空间。

---

*日报生成时间：2026-08-11 | 数据来源：github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### 1. 今日速览

过去24小时，Pi 社区没有新版本发布，但进入了高产出的“问题修复与打磨期”。社区焦点集中在**多个高优先级 Bug 的修复验证**（如 WSL 登录挂起、Bedrock 工具调用投毒、DeepSeek 大小写问题）以及**一批体验优化功能的推进**（如全屏搜索、上下文可视化、键盘输入健壮性）。值得关注的是，针对 `plan-mode` 示例、`APPEND_SYSTEM.md` 加载失败等问题的 PR 已迅速合入，体现了较高的维护效率。

### 2. 版本发布

过去 24 小时内无新的 Releases。

### 3. 社区热点 Issues

以下挑选 10 个最具争议性或讨论度最高的问题：

1.  **[#6187] [bug] Pi login hangs in WSL after browser-based GitHub Copilot device authorization** [`link`](https://github.com/earendil-works/pi/issues/6187)
    - **重要性与社区反应**：这是目前**评论数最高（21条）**的开放 Issue。设备授权成功后，WSL 内的客户端无法检测到状态变化，导致登录无限挂起。该问题涉及 GitHub Copilot 核心登录流程，严重影响部分 Linux 用户的使用，社区正集中讨论绕过和修复方案。

2.  **[#7850] [bug, no-action] GitHub Copilot login fails with 429 (Rate Limiting) for organizations with a lot of activated / available models** [`link`](https://github.com/earendil-works/pi/issues/7850)
    - **重要性与社区反应**：企业用户痛点（获得 3 👍）。当组织的可用模型数量较多（20+）时，登录会触发 429 限流错误。这暴露了 Pi 在设备授权后初始化 Copilot 会话时的并发或请求量过大问题，已关闭但标记为 `no-action`，意味着可能是上游 API 限制。

3.  **[#7782] [bug] Invalid tool call from Bedrock poisoned pi session** [`link`](https://github.com/earendil-works/pi/issues/7782)
    - **重要性与社区反应**：严重的数据完整性问题。Bedrock 生成的工具调用中带有无效空键，Pi 未过滤并持久化，导致后续每次对话都重放该错误请求，最终**永久破坏会话**。社区认为 Pi 应该在执行前对工具参数进行严格校验，该问题已由相关 PR (#7882) 修复。

4.  **[#7876] [bug] Alt+Enter (queue follow-up) intermittently aborts the running task** [`link`](https://github.com/earendil-works/pi/issues/7876)
    - **重要性与社区反应**：高频率交互操作受限。在 tmux 或 SSH 等非 Kitty 协议终端下，`Alt+Enter` 被拆分为 `ESC` 和 `CR` 两个字节。由于 10ms 的硬编码超时，`StdinBuffer` 可能将独立的 `ESC` 误判为中断指令，导致运行中的任务被随机取消。该问题已有针对性修复 PR (#7899)，影响面广，值得关注。

5.  **[#7836] [OPEN] Edit fuzzy match misses lines with differences in whitespace length** [`link`](https://github.com/earendil-works/pi/issues/7836)
    - **重要性与社区反应**：影响代码编辑可靠性。`normalizeForFuzzyMatch` 未将多个空格/制表符合并为单一规范形式，导致即使内容一致，只要缩进长度不同，编辑工具的模糊匹配就会失败。这对小模型正确处理格式化代码造成了显著困扰。

6.  **[#7846] [OPEN] [bug] Unable to start 0.84.0, 0.84.1, with bun runtime** [`link`](https://github.com/earendil-works/pi/issues/7846)
    - **重要性与社区反应**：兼容性缺陷（获 1 👍）。在 Bun 运行时下，最新版本因 `zlib.createZstdDecompress` 未定义而崩溃。这表明 Pi 在依赖检测或兼容性构建上存在盲区，迫使 Bun 用户停留在旧版本。

7.  **[#7746] [OPEN] Fullscreen double-click splits paths and kebab-case on / and -** [`link`](https://github.com/earendil-works/pi/issues/7746)
    - **重要性与社区反应**：开发者日常效率问题。在全屏模式下，双击选择单词会以 `/` 和 `-` 为边界，导致无法通过双击快速复制完整路径或 kebab-case 命名。社区建议改为更智能的分词逻辑。

8.  **[#7791] [OPEN] Global Undici dispatcher inherits 16 KiB maxHeaderSize** [`link`](https://github.com/earendil-works/pi/issues/7791)
    - **重要性与社区反应**：隐蔽的运行时错误。Pi 设置全局代理时未指定 `maxHeaderSize`，导致部分合法的超大响应头（如 SSO 或自定义 Header 较多的 API）引发 `UND_ERR_HEADERS_OVERFLOW`。开发者需要手动调高 Node 默认值才能规避，属于深水区问题。

9.  **[#7896] [OPEN] cloudflare-ai-gateway provider omits strict:false** [`link`](https://github.com/earendil-works/pi/issues/7896)
    - **重要性与社区反应**：跨提供商兼容性问题。针对同一模型，Pi 在调用 OpenAI 直连时设置了 `strict:false`，但通过 Cloudflare AI Gateway 时却省略该参数，导致可选工具字段变为必填，引发请求失败。这反映出不同运输层的参数序列化逻辑尚不统一。

10. **[#7919] [CLOSED] plan-mode example: steps never get checked off during execution** [`link`](https://github.com/earendil-works/pi/issues/7919)
    - **重要性与社区反应**：**官方示例扩展的可用性问题**。`plan-mode` 展示扩展在任务执行后总是不会勾选完成步骤，严重降低了示例的说服力。该 Issue 已迅速通过 PR #7918 解决，修复了标记识别的容错性。

---

### 4. 重要 PR 进展

入选 10 个关键 PR，涵盖关键修复与新功能：

1.  **[#7918] fix(plan-mode): make progress tracking robust and tolerant** [`link`](https://github.com/earendil-works/pi/pull/7918)
    - **功能说明**：修复 `plan-mode` 示例扩展中步骤无法勾选的顽固 Bug。现在会递归扫描 `thinking` 字段，并放宽对完成标记 `[DONE:n]` 的格式要求，提升了对不同模型输出格式的容错性。

2.  **[#7913] feat(tui): add fullscreen transcript search** [`link`](https://github.com/earendil-works/pi/pull/7913)
    - **功能说明**：为全屏模式新增基本的内容搜索功能（触发键：`Ctrl+Shift+f`）。这是针对全屏模式缺失检索能力的直接响应，能显著提升长对话会话的导航效率。

3.  **[#7882] fix(ai): sanitize empty Bedrock tool argument keys** [`link`](https://github.com/earendil-works/pi/pull/7882)
    - **功能说明**：直接修复了 #7782 的相关问题。在向 Bedrock 重放工具参数时递归移除空属性名，同时保留持久化数据不变，防止无效参数导致会话失效。

4.  **[#7899] fix(tui): prevent split Alt+Enter from interrupting** [`link`](https://github.com/earendil-works/pi/pull/7899)
    - **功能说明**：针对非 Kitty 协议的终端环境，将转义序列超时从 10ms 放宽到 100ms，以正确合并 `ESC` + `CR`，消除了中断误判。

5.  **[#7906] feat(coding-agent): add fullscreen fixed top bar** [`link`](https://github.com/earendil-works/pi/pull/7906)
    - **功能说明**：在全屏模式下于顶部新增固定信息栏，左侧显示缩写的工作目录/分支，右侧对齐显示上下文使用量与自动压缩状态，改善了全屏工作流的信息可视性。

6.  **[#7904] fix(edit): normalize single-object edits argument to array** [`link`](https://github.com/earendil-works/pi/pull/7904)
    - **功能说明**：修复了 `edit` 工具对参数格式要求过严的问题。现在可接受单个 `{oldText, newText}` 对象或包含单个对象的 JSON 字符串，避免了部分模型因参数包装问题导致的调用失败。

7.  **[#7905] fix(config): refine pnpm detection** [`link`](https://github.com/earendil-works/pi/pull/7905)
    - **功能说明**：优化了包管理器检测逻辑，防止 `$PNPM_HOME` 路径下的误判。现在会验证是否存在受管理的安装，再决定是否提示用户使用 pnpm 更新。

8.  **[#7901] feat(ai): AI Gateway transport over the Cloudflare AI binding** [`link`](https://github.com/earendil-works/pi/pull/7901)
    - **功能说明**：为 Cloudflare Workers 环境增加 AI Gateway 传输层支持，使 Pi 应用能直接在 Worker 环境中通过绑定调用路由和缓存策略，拓展了在边缘运行的可能。

9.  **[#7910] feat(coding-agent): add canonical message identity to markdown transformer context** [`link`](https://github.com/earendil-works/pi/pull/7910)
    - **功能说明**：为 Markdown 转换器上下文添加唯一消息 ID。这将使扩展开发者能够跨重绘、恢复等操作关联到特定消息，解决状态管理的痛点。

10. **[#7887] fix: add trailing newline after current working directory** [`link`](https://github.com/earendil-works/pi/pull/7887)
    - **功能说明**：修复了系统提示词构建中的格式细节，确保工作目录后跟换行符，避免首条用户消息粘连在路径末尾。该修复解决了**原生 Pi 中的可复现问题**。

---

### 5. 功能需求趋势

从 Issue 与 PR 中可提炼出以下社区功能关注方向：

- **终端交互健壮性**：大量 Issue 集中在非标准终端环境下的输入问题（如 #7876、#7917）。核心诉求在于**提高对旧协议（非 Kitty）的兼容性**、处理字节流分割（如 ESC 序列），以及减少全屏渲染时的 GPU 峰值。
- **平台兼容性**：WSL 登录挂起（#6187）与 Bun 运行时崩溃（#7846）是目前最大的兼容性缺口。开发者期望 Pi 能在安装或运行时检测环境缺陷并给出明确反馈。
- **显式上下文与可视化**：社区对"上下文窗口"的管理需求显著增长，包括**保持 Footer 窄窗口下的可见性**（#7884）、**设置固定 Header 显示当前提示**（#7802）、新增全屏搜索功能以及改进滚动性能。
- **第三方服务与供应商集成**：除主流 OpenAI 外，社区关注点发散到 **Cloudflare Workers AI Gateway 传输层**（#7838/#7901）与 **Bedrock Mantle 的 OpenAI Responses API 支持**（PR #6216），突出边缘计算和多样化模型部署的需求。
- **包管理生态**：对 `pi.dev/packages` 中包的可见性与索引问题（#7885）有所抱怨，同时也需要**更细粒度的包内依赖与安全信息**（如#7916）。
- **AI 行为约束**：对于工具调用的参数校验（#7782、#7896），模型在计划模式下的执行追踪（#7919），以及上下文溢出判定（#7867），体现了用户希望加强对 AI 代理行为的控制与可观测性。

---

### 6. 开发者关注点

- **稳定性与数据安全**：会话数据被"投毒"或破坏是最严重的痛点，强调输入校验和防御性编程的必要性。
- **环境适配负担**：Bun 用户、WSL 用户以及 tmux/SSH 用户需要花费额外精力解决因运行时或协议差异导致的问题，希望改进自动检测逻辑。
- **接口与协议一致性**：针对不同供应商（如 OpenAI vs. Cloudflare Gateway）或不同变量命名（如 `baseUrl` 大小写），Pi 的参数序列化不够统一，导致难以排查的偶发性问题。
- **错误信息晦涩**：如 `UND_ERR_HEADERS_OVERFLOW` 或 `Response was truncated`（#7855）这类错误缺乏有效引导，开发者希望获得更明确的配置提示。
- **编辑/工具调用的准确性**：`edit` 模糊匹配对空白字符敏感导致的误匹配，以及 `Alt+Enter` 打断任务的随机性，均会干扰高效的 Agent 工作流。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-11**


## 1. 今日速览

Qwen Code 发布 v0.21.9 正式版与最新 nightly，正式版带来 Qoder 插件生态支持与 Local Control 二维码配对等核心增强；社区方面，多 Agent 协同（Fleet）架构讨论热度持续攀升，同时多个 TUI 渲染与 WebShell 功能 PR 密集推进，开发节奏明显加快。


## 2. 版本发布

### v0.21.9（正式版）
- **Qoder 插件原生安装支持**：支持从本地目录、压缩包、Git 仓库、URL 和 npm 包安装 Qoder 插件，并自动加载系统提示词（[#8661](https://github.com/QwenLM/qwen-code/pull/8661)）
- **Local Control 二维码配对**：新增通过扫码方式完成 Local Control 配对

### v0.21.9-nightly.20260811.8c90697ace
- 测试（memory）：覆盖上下文刷新标记跨轮次传递场景（[#8809](https://github.com/QwenLM/qwen-code/pull/8809)）


## 3. 社区热点 Issues

### 3.1 原生多 Agent 协同——Fleet 架构（RFC）
- **#8718** [RFC] 独立 Qwen 会话的原生协调方案（[链接](https://github.com/QwenLM/qwen-code/issues/8718)）
  - 8 条评论，讨论热度高。提出"leader 调度多个 worker"的架构设想，得到社区积极反馈
  - 关键进展：已拆分为 4 个实施阶段（1A/1B/2/3），架构文档已就绪
  - **意义**：被大量 issue 引用为 umbrella，社区关注度极高

### 3.2 Fleet 分阶段实施计划（4 Issues）
- **#8840** Stage 1A：Fleet 合约与进程内预览（[链接](https://github.com/QwenLM/qwen-code/issues/8840)）
- **#8841** Stage 1B：受监督的 teammate 运行时，Fleet MVP（[链接](https://github.com/QwenLM/qwen-code/issues/8841)）
- **#8842** Stage 2：持久化、恢复与加固（[链接](https://github.com/QwenLM/qwen-code/issues/8842)）
- **#8843** Stage 3：终端 attach 与遗留清理（[链接](https://github.com/QwenLM/qwen-code/issues/8843)）
- **分析**：四个阶段依赖关系清晰（1A→1B→2→3），由核心维护者 yiliang114 主推，是当前最明确的 roadmap

### 3.3 Provider 更新覆盖用户模型配置
- **#8863** [P1] 内置 provider 更新静默覆盖 `model.name` 和 `model.baseUrl`（[链接](https://github.com/QwenLM/qwen-code/issues/8863)）
  - 使用自建代理/内网网关/第三方模型时，选择 "Update all" 后模型配置被强制替换
  - **影响**：所有使用自定义模型网关的用户，P1 优先级，已关闭

### 3.4 OpenAI 日志无限增长
- **#8860** [P2] `logs/openai` 无轮转和保留策略，两月积累约 95GB / 34 万文件（[链接](https://github.com/QwenLM/qwen-code/issues/8860)）
  - 每个 OpenAI 兼容调用写入一个 JSON 文件
  - **关注点**：长期运行用户磁盘压力大，需要日志轮转方案

### 3.5 TUI 渲染问题系列
- **#8124** [P2] 启动 Banner 首帧缺失顶部 3 行（[链接](https://github.com/QwenLM/qwen-code/issues/8124)）
- **#8557** [P3] 终端缩窄导致转录块重复打印（[链接](https://github.com/QwenLM/qwen-code/issues/8557)）
- **#8849** [P3] 输入框在特定宽度下尺寸跳动（[链接](https://github.com/QwenLM/qwen-code/issues/8849)）
- **分析**：三个渲染问题相互关联（#8849 是 #8557 的子问题），凸显 TUI 在不同终端（macOS/Warp/Windows）下的兼容性挑战

### 3.6 WebShell 连接状态误报
- **#8887** [P3] 计划内 SSE 重连显示"连接已断开，正在重连"警告（[链接](https://github.com/QwenLM/qwen-code/issues/8887)）
  - 闲置数分钟后每个聊天面板显示橙色警示，造成用户恐慌

### 3.7 会话恢复超时
- **#8678** [P1] 大型会话恢复超时时保留当前会话（[链接](https://github.com/QwenLM/qwen-code/issues/8678)）
  - PR1（#8691）已合并并实现超时契约、迟到请求安全性和可观测性
  - **关注点**：恢复性能问题持续，大会话体验仍需优化

### 3.8 自动调度提示词丢失
- **#8837** [P2] 恢复会话后自动调度提示词（cron）缺失（[链接](https://github.com/QwenLM/qwen-code/issues/8837)）
  - 现场接收正常，但会话冷恢复后任务提示词丢失

### 3.9 麦克风权限警告骚扰
- **#8877** [P2] macOS 启动时每次显示语音听写麦克风权限警告（[链接](https://github.com/QwenLM/qwen-code/issues/8877)）
  - 用户从未使用语音功能，警告却出现在聊天历史中，有时甚至两次

### 3.10 帮助命令缺失参数
- **#8897** [P2] `--approval-mode` 和 `--auth-type` 已注册但未出现在 `qwen --help` 中（[链接](https://github.com/QwenLM/qwen-code/issues/8897)）


## 4. 重要 PR 进展

### 4.1 WebShell 文件上传
- **#8874** feat(web-shell): 支持工作区文件上传（[链接](https://github.com/QwenLM/qwen-code/pull/8874)）
  - 拖拽上传、进度显示、取消、冲突自动重命名、内联预览，待 review

### 4.2 WebShell 循环检测错误展示
- **#8853** fix(web-shell): 将循环检测转为结构化错误（[链接](https://github.com/QwenLM/qwen-code/pull/8853)）
  - 保留失败工具卡片，提供本地化指引，会话保持可用

### 4.3 Channel 策略与工作区管理重构
- **#8848** feat(web-shell): 重新设计 Channel 策略和工作区管理（[链接](https://github.com/QwenLM/qwen-code/pull/8848)）
  - 暴露所有可管理适配器的 DM/群组/路由/工作区所有权控制，对接 #8845

### 4.4 技能状态同步与 /unskill 命令
- **#8900** fix(core): 同步已加载技能状态与历史驱逐，新增 `/unskill` 命令（[链接](https://github.com/QwenLM/qwen-code/pull/8900)）

### 4.5 思考过程与工具进度展示优化
- **#8872** feat(web-shell): 改进思考与工具进度展示（[链接](https://github.com/QwenLM/qwen-code/pull/8872)）
  - Ctrl+O 切换思考显示，localStorage 持久化偏好

### 4.6 模型推理控制注册表
- **#8675** feat(web-shell): 模型特定推理控制（[链接](https://github.com/QwenLM/qwen-code/pull/8675)）
  - 在 Core/ACP/daemon/SDK/WebShell 端到端使用，首个注册为 `qwen3.*`

### 4.7 跨工作树 Git 变更保护
- **#8687** feat(daemon): 守卫跨工作树 Git 变更（[链接](https://github.com/QwenLM/qwen-code/pull/8687)）
  - 识别 `-C`/`--work-tree`/`--git-dir` 重定位并阻止逃逸会话工作区的变更命令

### 4.8 Banner 重复与拖拽闪烁修复
- **#8831** fix(cli): 消除 resize/wake 时 banner 重复和闪烁（[链接](https://github.com/QwenLM/qwen-code/pull/8831)）
  - 修复宽度缩小时清屏行数错位导致问题（对应 #8557）

### 4.9 定时 Cron 提示词持久化
- **#8838** fix(cli): 持久化定时 cron 提示词（[链接](https://github.com/QwenLM/qwen-code/pull/8838)）
  - 自动触发的调度提示词写入会话转录，修复 #8837，已标记待 review

### 4.10 ACP 技能管理重构
- **#8865** refactor(cli): 提取 ACP 技能管理模块（[链接](https://github.com/QwenLM/qwen-code/pull/8865)）
  - 将技能安装/删除/启停统一走扩展方法路由，保持安全性校验


## 5. 功能需求趋势

| 方向 | 热度 | 代表 Issue/PR |
|---|---|---|
| **多 Agent / Fleet 协同** | 🔥🔥🔥 | #8718（RFC）、#8840~#8843（分阶段实施） |
| **WebShell 功能完善** | 🔥🔥🔥 | #8845、#8848、#8872、#8874、#8887 |
| **TUI 渲染稳定性** | 🔥🔥 | #8124、#8557、#8831、#8849 |
| **自定义模型/Provider 兼容性** | 🔥🔥 | #8504、#8863 |
| **ACP / Daemon 架构完善** | 🔥🔥 | #8837、#8838、#8851、#8865 |
| **插件生态扩展** | 🔥 | #8661（v0.21.9）、#8368（Kimi/MiMo provider） |
| **日志与可观测性** | 🔥 | #8860（日志轮转）、#8895（CI 流式输出） |
| **安全性加固** | 🔥 | #8643（.env 信任）、#8687（跨工作树 Git） |


## 6. 开发者关注点

1. **自定义模型配置保护**（#8863）：Provider 更新不应覆盖用户自定义的模型指向，这是 P1 痛点，影响使用自建网关或第三方模型的用户

2. **大会话恢复性能**（#8678）：恢复超时的安全处理已有 PR1 落地，但根本性能问题仍待解决，建议关注后续进展

3. **macOS 权限体验**（#8877）：麦克风权限警告应延迟到用户实际触发语音时才提示，而非每次启动刷屏

4. **TUI 渲染兼容性**（#8124、#8557、#8849）：不同终端（Warp、Windows、macOS）下的渲染行为差异是持续痛点

5. **WebShell 连接状态反馈**（#8887）：计划内的重连不应展示警示性横幅，区分"计划内重连"与"异常断开"很重要

6. **Fleet 多 Agent 协同**（#8840~#8843）：社区呼声很高，四个阶段已规划明确，1A 已交付进程内预览，值得关注阶段性成果

7. **日志磁盘占用**（#8860）：OpenAI 日志无轮转导致 95GB 膨胀，运维长期使用需自行清理，希望官方尽快加入轮转策略

---

*日报数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 生成时间：2026-08-11*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-11

> 数据源：github.com/Hmbown/DeepSeek-TUI（当前跟踪仓库显示为 CodeWhale 项目）

## 今日速览

CodeWhale（原 DeepSeek-TUI）近日完成了 v0.9.6 减法版本发布，移除冗余运行时守卫、统一基础提示词；同时持续进行大规模架构重构（EPIC-005 crate 拆分），核心请求层迁入 `codewhale-core` crate。此外，社区发现并修复了一个嵌套子代理递归深度可被扩大、绕过根会话预算的递归边界漏洞。

## 版本发布

过去 24 小时无新版本发布。最新版本为 v0.9.6（PR #5315，2026-08-10 合并）。该版本为**减法发布**（subtractive release）：

- **移除运行时守卫** — 减少非必要运行时检查，简化执行路径
- **统一基础提示词** — 单一 stable 基础提示，提升 provider 提示一致性
- **修正 provider 结束行为** — 真实反映各 provider 终止语义
- **缩小压缩路径** — 保留 provider 保真度的同时精简 compaction 过程
- **核心贡献**：未使用 `ChatRequest` scaffold 被正式移除，核心请求层（`MessageRequest`)全面迁入 `codewhale-core`

## 社区热点 Issues

过去 24 小时活跃 Issue 共 3 条。以下为全部值得关注的条目：

### 1. #5253 [CLOSED] 嵌套子代理 max_depth 可扩大根会话递归预算（bug)
- **作者**: cacdcaecawae | 创建: 08-06 | 更新: 08-11 | 评论: 1 | 👍: 0
- **链接**: [Issue #5253](https://github.com/Hmbown/CodeWhale/issues/5253)
- **重要性**: 🔥 社区暴露的递归边界安全缺陷。PR #3931 中新增全局 `MAX_SPAWN_DEPTH_CEILING=8`，但嵌套 spawn 显式指定 `max_depth` 时可绕过继承预算，扩大绝对递归深度——直接影响代码执行的安全堆栈控制。修复思路（PR #5317)已在 24 小时内合入关闭。子代理管理策略是当前安全审查核心。

### 2. #5316 [OPEN] EPIC-005：CodeWhale TUI Crate 分解（伞形追踪）
- **作者**: aboimpinto | 创建: 08-10 | 更新: 08-10 | 评论: 0 | 👍: 0
- **链接**: [Issue #5316](https://github.com/Hmbown/CodeWhale/issues/5316)
- **重要性**: 🏗️ 项目级架构重构**伞形 EPIC**，追踪所有子 EPIC 与 FEAT 汇报。标志 CodeWhale 从单体 TUI 走向模块化 crate 拆分，与 PR #5300 核心请求层迁移呼应。对后续贡献者而言，此 EPIC 定义了新代码归属边界，是参与重构的入口文档。

### 3. #2870 [CLOSED] EPIC：分阶段命令边界重构（引 #2791)
- **作者**: aboimpinto | 创建: 06-07 | 更新: 08-10 | 评论: 20 | 👍: 0
- **链接**: [Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)
- **重要性**: 🔥 大型长期 EPIC（20 条评论），追踪命令边界重构的**可合并小层**，参考 PR #2851。本轮更新为关闭状态，标志该重构阶段收官。关注命令行解析与执行边界规范的开发者可回顾该 EPIC 完整设计脉络。

## 重要 PR 进展

过去 24 小时活跃 PR 共 4 条。以下为全部重要进展：

### 1. #5317 [CLOSED] 修复：嵌套 max_depth 按继承预算封顶（子代理安全）
- **作者**: ousamabenyounes | 创建: 08-10 | 更新: 08-11
- **链接**: [PR #5317](https://github.com/Hmbown/CodeWhale/pull/5317)
- **内容**: 修复 #5253。`child_max_spawn_depth_for_spawn` 的显式 `max_depth` 分支原来未限制继承绝对预算，现改为 `inherited.min(..)`，与 profile-hint 分支对齐。回滚漏洞的快速止血，24 小时内修复并合入，社区响应高效。

### 2. #5300 [CLOSED] 核心重构：主请求准备逻辑自持（架构迁移）
- **作者**: Hmbown | 创建: 08-08 | 更新: 08-10
- **链接**: [PR #5300](https://github.com/Hmbown/CodeWhale/pull/5300)
- **内容**: 核心架构变更。废弃 `codewhale-core` 中未使用的 `ChatRequest` scaffold，换成原属 TUI crate 的生产级 `MessageRequest` DTO 家族；新增纯函数 `prepare_primary_turn_request`，统一 provider-neutral 主轮默认值；生产路由全部切换。为 EPIC-005 分解扫清依赖。

### 3. #5315 [CLOSED] 例行发布 v0.9.6（减法发布）
- **作者**: Hmbown | 创建: 08-10 | 更新: 08-10
- **链接**: [PR #5315](https://github.com/Hmbown/CodeWhale/pull/5315)
- **内容**: Deps 无关联；发布状态在私有 `codewhale-ops` 台账追踪。v0.9.6 为减法版本，重点移除冗余运行时守卫、固定基础提示词、修正 provider 终止状态、精简压缩路径。适合关注运行时最小化与输出一致性的人群。

### 4. #5277 [OPEN] 依赖升级：docker/login-action 4.5.2 → 4.6.0
- **作者**: dependabot[bot] | 创建: 08-07 | 更新: 08-11
- **链接**: [PR #5277](https://github.com/Hmbown/CodeWhale/pull/5277)
- **内容**: 常规自动依赖更新，新增 Docker 登录操作加固。CI 基建维护，低风险合并候选。

## 功能需求趋势

基于当前活跃 Issue/PR 提炼（样本量较小，结合近期长期 EPIC 判断）：

| 方向 | 说明 | 代表条目 |
|------|------|----------|
| **架构模块化/核心下沉** | TUI crate 向 `codewhale-core` 迁移业务逻辑，crate 分解为最高优先级工程 | EPIC-005（#5316）、PR #5300 |
| **子代理安全/递归边界** | 全局递归深度上限、嵌套预算继承规则收紧，防御深度滥用 | #5253、PR #5317 |
| **减法发布/运行时精简** | 移除冗余守卫、统一提示词、精简单路径代码，强调可维护性与行为一致性 | v0.9.6（PR #5315） |
| **自动化依赖维护** | dependabot 持续运转，保持 CI 依赖安全 | PR #5277 |

> 未发现新模型支持、IDE 集成类新需求，当前主线聚焦工程架构与运行时健壮性。

## 开发者关注点

- **递归深度预算可被绕过（痛点）**：`max_depth` 显式指定导致根会话预算被扩大，已即时修复并合入，提示子代理树深度策略仍是核心痛点，需持续防护。
- **核心 crate 归属变动期的迁移成本**：`MessageRequest` DTO 与请求准备逻辑从 TUI 迁往 `codewhale-core`，依赖 TUI 内部 API 的个人 Patch 需同步适配，建议关注 EPIC-005 进度。
- **依赖自动升级噪音**：docker/login-action 类 PR 需维护者定期合并，建议启用 automerge 降低维护负担。
- **发布追踪透明度**：v0.9.6 发布状态不公开（在私有台账），部分贡献者可能误以为未发布，建议在仓库 README 或 release 分支同步状态。

---

日报完。数据源为 Hmbown/DeepSeek-TUI（CodeWhale），更新窗口：2026-08-10 ~ 2026-08-11。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*