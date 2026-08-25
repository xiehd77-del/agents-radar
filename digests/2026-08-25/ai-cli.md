# AI CLI 工具社区动态日报 2026-08-25

> 生成时间: 2026-08-25 01:20 UTC | 覆盖工具: 9 个

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

**日期**: 2026-08-25

---

## 1. 生态全景

当前 AI CLI 工具已从"单点实验"进入"生产依赖"阶段——社区讨论的核心从"能不能用"全面转向"稳不稳定、透不透明、可不可控"。今日各工具的高频词高度一致：**认证失效**（OpenAI Codex）、**段错误回归**（Claude Code）、**子代理假成功**（Gemini CLI）、**MCP 重连假成功**（Qwen Code）——稳定性问题已成普遍焦虑。与此同时，**Memory 系统可观测性**、**Token 成本透明化**、**子代理生命周期管理**、**Windows 平台适配**四大议题在多工具间形成共振，标志行业正从功能竞赛转向可靠性竞赛。值得警惕的是，多个工具的核心启动路径（Claude Code Linux 构建、Codex 认证链路、Copilot MCP OAuth）均出现"更新即回归"的现象，发布质量管控成为共性挑战。

---

## 2. 各工具活跃度对比

**数据口径**: 各工具日报中过去 24 小时提及的 Issue/PR 更新总数；⭐ 为今日社区热度信号

| 工具 | Issues 更新 | PR 更新 | Releases | 社区热度信号 | 阶段判断 |
|---|---|---|---|---|---|
| **Claude Code** | ~15+（含 7 个同源段错误报告） | 3 | v2.1.243（含已知回归） | 🔥 段错误 7+ 独立报告，最高 22 评论/8 👍 | 成熟但发布质量波动 |
| **OpenAI Codex** | 50 | 50 | rust-v0.150.0-alpha.8（常规 alpha） | 🔥🔥 认证失效 51 评论/31 👍；"关闭折叠"36 👍 | 快速迭代，平台稳定性待加强 |
| **Gemini CLI** | ~10（Top 10 精选） | 11 | v0.56.0-nightly + v0.57.0-preview.1 | 🔥 子代理误报 13 评论；Generalist 挂起 8 👍 | 活跃修复，子代理可靠性短板 |
| **Copilot CLI** | ~10（Top 10 精选） | 1（质量存疑） | v1.0.81-9（预发布） | 🔥 工具白名单 27 👍；400 错误 11 👍 | 社区诉求集中，PR 活跃度低 |
| **Kimi Code CLI** | ~2 | 1 | 无 | 用量争议 8 评论/7 👍 | 早期阶段，焦点在计费公平性 |
| **OpenCode** | ~10（Top 10 精选） | 10 | v1.18.22 | TUI 回归 14 👍（3 个月未修）；ephemeral 15 👍 | 功能拓展快，历史债务积累 |
| **Pi** | ~10（Top 10 精选） | 10 | v0.84.3 | Windows 调查 44 评论；压缩缺陷 19 👍 | 高活跃，Windows 适配是主线 |
| **Qwen Code** | ~10（Top 10 精选，评论最多 12） | 10 | v0.22.0-nightly | MCP 重连假成功当日即修 | 快速响应，架构转型期 |
| **DeepSeek TUI** | ~10（Top 10 精选） | 10 | 集成冲刺中（#5576） | 子代理零产出 347k tokens | 架构重构期，发布前集中修复 |

> **注**: Claude Code 和 Codex 的数据量为日报中明确列出的全部更新数，其余工具仅列出 Top 10 精选，实际总数更高。各工具 Issue 绝对数量不可直接对比，但相对热度信号（评论/👍）可比。

---

## 3. 共同关注的功能方向

### 3.1 稳定性与容错（全工具共振）
| 具体诉求 | 涉及工具 |
|---|---|
| 启动/认证路径回归 | Claude Code（Linux 段错误）、Codex（会话即登出）、Copilot（MCP OAuth） |
| 子代理/长任务可靠性 | Gemini（误报成功、挂起）、Codex（子代理不回收）、DeepSeek（回合结束销毁子代理） |
| 流中断/挂起 | Pi（SSE 流挂起）、Qwen（120s 无活动超时） |

### 3.2 持久化记忆（Memory）系统
| 具体诉求 | 涉及工具 |
|---|---|
| 加载状态不可知 | Claude Code（#82056，25 评论） |
| 索引大小硬编码不可配置 | Claude Code（#79217，200 行/25KB） |
| 脱敏前置与安全 | Gemini（#26525，Auto Memory 需确定性脱敏） |

### 3.3 Token 成本透明化
| 具体诉求 | 涉及工具 |
|---|---|
| 思维链消耗计入额度 | Kimi Code（#1994，2 小时仅 2 次请求） |
| 工具 schema 按需加载 | Copilot（#4588，空提示消耗 21k tokens） |
| 成本归因到工具/MCP | DeepSeek（#5553）、Codex（OTEL 回合成本导出） |

### 3.4 权限控制精细化
| 具体诉求 | 涉及工具 |
|---|---|
| 工具白名单（非全批/全拒） | Copilot（#1973，27 👍） |
| 权限绕过漏洞 | Claude Code（#83127，写提交信息时执行任意代码） |

### 3.5 Windows 平台适配
| 具体诉求 | 涉及工具 |
|---|---|
| 终端/会话切换失败 | Codex（#37104）、Claude Code（#54461） |
| 路径/编码问题 | Qwen（#9841）、Copilot（#4593） |
| 系统性体验调研 | Pi（#7547，44 评论）→ 已产出 PowerShell 工具 |

---

## 4. 差异化定位分析

| 工具 | 核心优势 | 目标用户 | 技术路线特点 | 当前最大短板 |
|---|---|---|---|---|
| **Claude Code** | 生态成熟、Memory 概念领先（虽实现受诟病） | 专业开发者、企业 | Loops 循环、模型选择器 | 发布质量（Linux 段错误连续两个版本） |
| **OpenAI Codex** | 迭代速度快、PR 密集（50/日） | 追求新功能的早期采用者 | SQLite 持久化、OTEL 遥测、Guardian 审查 | 认证链路脆弱、Windows 基础能力缺失 |
| **Gemini CLI** | 与 Google 生态集成、A2A 协议探索 | Google 生态开发者 | A2A 服务器、nightly/preview 双分支 | 子代理"假成功"、模型自主调用工具能力弱 |
| **Copilot CLI** | GitHub 深度集成、MCP 生态 | GitHub 重度用户 | MCP OAuth 标准化、模型数据保留警告 | 核心 400 错误长期未解、PR 活跃度近零 |
| **Kimi Code CLI** | 中文/长上下文（K2.6） | 中文开发者、C端订阅用户 | 思维链长、Token 消耗大 | 计费公平性争议、功能单一 |
| **OpenCode** | 功能覆盖面广（浏览器 SDK、PTY） | 多面手用户 | TUI 侧边栏、Zen API 免费模型 | 历史回归修复慢（3 个月）、Zen 端点不稳定 |
| **Pi** | Windows 适配主动（PowerShell）、Provider 广 | Windows 用户、本地模型用户 | 托管更新、per-model 压缩配置 | llama.cpp 本地模型使用摩擦、压缩触发缺陷 |
| **Qwen Code** | 响应快（MCP 修复当日提交） | 多模型切换用户 | Computer Use 路线图、Web Shell、Agent Team | 核心类型被 @google/genai 绑定（136 文件） |
| **DeepSeek TUI** | 架构卫生意识强（巨型文件拆分） | 深度定制用户 | 受控运维面（control socket/lifecycle outbox）、Rust 重写 | Provider 中立性（18 处硬编码）、发布周期长 |

---

## 5. 社区热度与成熟度

### 活跃度分层
- **第一梯队（高活跃 + 高关注）**: Claude Code、OpenAI Codex、Gemini CLI、OpenCode — 日均 10+ 高热度议题，社区反馈强烈，Issue 评论区讨论深度高（含 gdb 回溯、根因分析）。
- **第二梯队（稳定迭代）**: Pi、Qwen Code、Copilot CLI、DeepSeek TUI — 活跃但热度集中，Qwen 修复响应速度突出（当日即修），Pi 的 Windows 大调查（44 评论）显示社区深度参与。
- **第三梯队（早期阶段）**: Kimi Code CLI — 议题数量少，但 Token 消耗争议已积累 8 评论/7 👍，若处理不当可能影响订阅留存。

### 成熟度信号
- **发布质量分化**: Claude Code 出现"发布即回归"（Linux 段错误连续两个版本），Codex 认证问题跨版本重复出现（4 个同源 Issue），说明成熟工具面临质量管控挑战；Qwen/Pi 的修复节奏（当日/次日）更健康。
- **社区自组织能力**: Claude Code 社区已自行定位段错误根因（mimalloc 符号遮蔽 glibc），Codex 用户交叉引用 4 个认证 Issue 指向公共链路——社区已具备"众包 QA"能力。
- **第三方生态信号**: Claude Code Memory 缺陷催生 91k-star 第三方替代品（#88579），说明核心功能缺口足以支撑外部生态。

---

## 6. 值得关注的趋势信号

### 6.1 从"功能竞赛"到"可靠性竞赛"
- Claude Code 段错误、Codex 认证链、Copilot 400 错误——三个头部工具同时出现核心路径回归，且修复周期以"周"计。**对开发者**: 生产环境部署应延迟跟进 major 版本，预留回滚方案；**对工具商**: 需建立 glibc 兼容性、认证回归等专项测试矩阵。

### 6.2 子代理生命周期管理成为"沙盒级"问题
- Gemini（误报 GOAL）、Codex（不回收线程）、DeepSeek（回合结束静默销毁，347k tokens 零产出）——三个工具同时暴露子代理生命周期缺陷。**信号**: Agent 架构从单线程向多 Agent 协作演进时，状态管理与资源回收尚未有成熟范式，这是下一轮技术突破的潜在方向。

### 6.3 Memory 系统是"兵家必争之地"但普遍不及预期
- Claude Code 的 Memory 被批"黑盒"（催生 91k-star 替代品），Gemini 的 Auto Memory 存在脱敏安全风险，Pi 的压缩触发机制失效（👍19 为今日最高）。**信号**: 持久化记忆是刚需，但"可见、可控、可验证"是底线要求，谁能率先做出透明化的 Memory 系统，谁就握有差异化王牌。

### 6.4 Token 成本透明化=用户信任基建
- Kimi Code 的"2 小时 2 次请求"争议、Copilot 的"空提示 21k tokens"、DeepSeek 的"成本归因到工具"——三个方向共同指向同一诉求。**信号**: 模型能力趋同后，成本可预测性将成为选型关键，API 定价之外的"隐性消耗"（思维链、工具 schema）正在被用户重新审视。

### 6.5 Windows 适配是"被忽视的金矿"
- Pi 通过主动调研（44 评论）快速落地 PowerShell 工具，而 Codex/Claude Code 在 Windows 上的基础问题（终端崩溃、无法切换目录）持续 4 个月未修复。**信号**: Windows 开发者群体庞大且未被充分服务，这是中小工具实现"弯道超车"的窗口期。

### 6.6 可编排性与可观测性成为新战场
- DeepSeek TUI 的 control socket + lifecycle outbox + /relaunch 三连 PR，OpenCode 的浏览器 SDK + 持久 PTY，Codex 的 OTEL 回合成本导出——头部工具正在为"AI Agent 作为可编程基础设施"铺路。**信号**: 未来 AI CLI 不仅是交互工具，更将成为可被外部编排器监督、审计、控制的基础设施组件。

---

*报告结束。数据来源: 各工具 2026-08-25 社区动态日报。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-08-25**

---

## 1. 热门 Skills 排行

### 🥇 #1298 — skill-creator 评估系统修复（核心工具链）
**功能**：修复 `run_eval.py` 在 Windows 上始终报告 0% recall 的致命缺陷，并改进触发检测与并行 worker 机制。该问题直接影响 skill-creator 的自动优化循环（#556，10+ 独立复现）。
**社区热点**：skill-creator 是社区创建新 Skill 的核心工具，其评估信号失真导致所有人基于噪声优化描述——**工具修复比新 Skill 更受关注**。
**状态**：Open（2026-06）
🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 #514 — document-typography（文档排版质量）
**功能**：检测 AI 生成文档中的孤行（1-6 词溢出到下一行）、孤寡段落（章节标题孤立在页底）和编号错位。
**社区热点**：CLAUDE 生成的每份文档都受影响，但用户很少主动提出排版问题——"用户不会要求的质量管控"成为讨论焦点。
**状态**：Open（2026-03）
🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### 🥉 #1615 — scnet-hpc（HPC 集群操作）
**功能**：通过 profile 化 SSH 和 Slurm 工作流操作 SCNet HPC 集群，覆盖连接、分区、内存、模块、加速器配置及任务生成。
**社区热点**：科研计算领域需求增长，HPC 操作是一个垂直但用户粘性极高的方向。
**状态**：Open（2026-08，最新）
🔗 [PR #1615](https://github.com/anthropics/skills/pull/1615)

### #486 — ODT（OpenDocument 格式支持）
**功能**：创建、填充、读取和转换 ODT/ODS/ODF 格式文件，覆盖 LibreOffice 文档的完整工作流。
**社区热点**：企业场景中开源文档格式的刚需，与已有 DOCX/PDF 形成互补，社区讨论集中在格式转换的边界情况（模板填写、HTM 解析）。
**状态**：Open（2026-03）
🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

### #83 — skill-quality-analyzer & skill-security-analyzer（元技能）
**功能**：新增两个元技能——质量分析器（评估 SKILL.md 结构、示例、资源跨 5 个维度）和安全分析器（审查权限边界）。基于现有 SKILL.md 的规范对技能进行自动质量评估。
**社区热点**：社区在讨论技能本身的"质量天花板"，元技能是"群体智慧"的体现。
**状态**：Open（2025-11，历史最久仍活跃）
🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

### #210 — frontend-design 优化（前端设计）
**功能**：修订前端设计技能的清晰度与可操作性，确保每条指令可在单次对话中执行。
**社区热点**：讨论重点为——技能不能只"解释概念"，必须给出 Claude 能执行的精确指令。
**状态**：Open（2026-01）
🔗 [PR #210](https://github.com/anthropics/skills/pull/210)

### #1628 — Hivemind（零成本多代理编排）
**功能**：让 Claude Code 将机械性工作委托给运行免费模型的无头 opencode worker，Claude Code 保持规划者和审查者角色。
**社区热点**："贵模型的上下文是稀缺资源，而不是其智能"——成本优化思路引发讨论。
**状态**：Open（2026-08，最新）
🔗 [PR #1628](https://github.com/anthropics/skills/pull/1628)

### #568 — ServiceNow（企业平台技能）
**功能**：覆盖 ServiceNow 平台的完整能力：ITSM、ITOM、ITAM/SAM、FSM、HRSD、CSM、SPM/PPM、漏洞响应和安全事件响应。
**社区热点**：企业级平台的广度覆盖，而非窄工具脚本——讨论在"广度 vs 深度"之间权衡。
**状态**：Open（2026-03，持续活跃至 08）
🔗 [PR #568](https://github.com/anthropics/skills/pull/568)

---

## 2. 社区需求趋势

### 趋势一：安全与信任边界（最强烈信号）
**#492**（43 评论）社区技能在 `anthropic/` 命名空间下分发，造成信任边界滥用风险——用户可能授予社区技能过高的权限。这是**全仓库讨论热度最高的话题**，远超其他议题。**#1175** 进一步讨论 SPO 文档处理中的安全和上下文窗口风险。→ 社区最关心"我该信任什么"。

### 趋势二：组织级共享与协作
**#228**（16 评论，8 👍）技能应该支持组织内直接共享。当前需要下载文件、通过 Slack/Teams 传递、手动上传——缺少共享库或直链机制，阻碍了企业采用。

### 趋势三：工具链可靠性优先于新功能
**#556**（12 评论，7 👍）是 #1298 PR 对应的 Issue，`run_eval.py` 在所有查询上 0% 触发率——技能评估工具的可靠性问题。**#202**（已关闭）批评 skill-creator 读起来像开发文档而非操作技能。→ 社区希望先修好创作/评估工具，再谈扩展技能库。

### 趋势四：长会话与状态管理
**#1329**（compact-memory 符号化记忆）和 **#1385**（推理质量门流水线）代表了两类需求：① 减少长会话的上下文消耗；② 在交付前增加质量验证关卡。前者追求效率，后者追求正确性。

### 趋势五：上下文窗口治理
**#1487** `claude-api` 技能单次调用注入 156k tokens 耗尽上下文窗口——社区对技能的资源消耗愈加敏感（与 #189 重复技能占用窗口的问题呼应）。

---

## 3. 高潜力待合并 Skills

| Skill | 评论活跃度 | 落地潜力 | 说明 |
|--------|-----------|---------|------|
| **skill-creator 修复系列** #1298/#1099/#1050/#539 | ⭐⭐⭐⭐⭐ | 极高 | 官方核心工具链的缺陷，已有 4 个独立 PR 同时修复，合并优先级最高 |
| **document-typography** #514 | ⭐⭐⭐ | 高 | 解决"用户不会主动要求但影响所有文档"的质量问题，概念简单、价值明确 |
| **scnet-hpc** #1615 | ⭐⭐⭐ | 中高 | 垂直刚需（科研计算），但受众面窄 |
| **testing-patterns** #723 | ⭐⭐⭐ | 中高 | 完整测试体系技能（Testing Trophy 模型 + React 专项），覆盖面广 |
| **Hivemind** #1628 | ⭐⭐⭐ | 中 | 成本优化思路新颖，但涉及外部工具（opencode）依赖 |
| **web-artifacts-builder 修复**（#1362 关联） | ⭐⭐ | 高 | 构建脚本在 pnpm ≥10.1 下硬性失败，已有明确修复方案 |

**特别注意**：#538/#541（docx/pdf 大小写修复、tracked change ID 冲突）是 Lubrsy706 提交的急修理类 PR，虽然讨论热度不及上述，但修复文档损坏类 bug，合并速度快、风险低。

---

## 4. Skills 生态洞察

> **社区最集中的诉求是"可信赖的工具链"——既包括安全命名空间与权限边界（#492 43 评论），也包括评估工具的可靠性（#556/#1298）——其次是组织级共享效率（#228），新 Skill 的多寡已不是瓶颈，让现有生态"可信、可靠、可分享"才是刚需。**

**数据支撑**：top 10 讨论度中 5 个直接是工具链/安全类议题，3 个是"新技能"（typography/ODT/Hivemind），2 个是质量改进（frontend-design/skill-creator）。当官方工具链的缺陷（如 Windows 兼容性）有 4 个独立 PR 同时修复时，这表明核心基础设施的稳定性正在成为社区的集体痛点。

---

# Claude Code 社区动态日报

**2026-08-25** | 数据来源: github.com/anthropics/claude-code

---

## 今日速览

今日最重大动态是 **Linux 原生构建出现大规模段错误（Segfault）回归**，自 v2.1.242 起影响所有 Linux 启动路径，已累积 7+ 个独立 Issue 报告，社区反响强烈；同时 Anthropic 在 v2.1.243 中新增了 Loops 用量统计与自定义模型选择器功能，并修复了若干问题。此外，社区围绕 **auto-memory 的可观测性** 与 **桌面端工作目录切换** 的讨论持续升温。

---

## 版本发布

### v2.1.243
- **新增 Loops 用量统计**：`/usage` 现在会按循环统计运行次数、总 token 数、每次运行 token 数及最后运行时间，便于发现失控或过于冗长的 `/loop` 任务。
- **新增 `modelPicker` 设置**：可自定义 `/model` 选择器，支持按顺序、带标签地列出模型（接受任意 ID 拼写，包括新模型）。

⚠️ **注意**：此版本在 Linux 上存在已知段错误问题（相关详情见下方 Issue 区，该问题在 2.1.243 中已修复）。

---

## 社区热点 Issues（Top 10）

### 1. 🔥 Linux 段错误回归（今日焦点，7+ 个报告）
- **#89360** [bug, has repro, platform:linux, regression] **v2.1.243 段错误** — `uwuclxdy` | 22 评论 | 8 👍。链接: [#89360](https://github.com/anthropics/claude-code/issues/89360)
- **#89334** [bug, has repro, platform:linux, regression] **v2.1.242 每次启动都段错误（甚至 `--version`）** — `hendrikkiedrowski` 指出根因是 mimalloc 作为版本化 glibc 分配器符号导出后，被 `newlocale` 在 main 之前调用 `free(NULL)` 导致崩溃，2.1.241 不受影响 | 7 评论 | 6 👍。链接: [#89334](https://github.com/anthropics/claude-code/issues/89334)
- **#89369** [duplicate, has repro, platform:linux] **2.1.243 原生构建启动即段错误** — `aidan-starke`（7 👍）给出了详细的排查记录（哈希校验、重新下载、gdb 回溯），确认是 interposed `free()` 在 glibc 2.44 `newlocale` 中崩溃。链接: [#89369](https://github.com/anthropics/claude-code/issues/89369)
- 其他重复报告：**#89370**（`michkrom`，7 评论）、**#89366**（`Losera`，6 评论）、**#89377**（`batistapb`，5 评论）、**#89368**（`gmaOCR`）、**#89371**（`juanknebel`，glibc 2.44/CachyOS）。
- **影响面**：影响 Linux 上的所有启动路径（原生安装与 install.sh），对 CI/CD 与生产环境造成重大影响。
- **社区反应**：用户已定位根因（mimalloc 符号遮蔽 glibc 分配器），希望官方尽快发布修复版本或回滚发布。

### 2. **#82056** [OPEN] **auto-memory 加载状态不可知**（25 评论）— `simplysdm`
用户无法得知索引是完整加载、截断加载还是完全未加载。社区认为该问题严重影响对 memory 功能的信任，是内建记忆与第三方方案（如 91k-star 的替代品）差距的核心痛点之一。链接: [#82056](https://github.com/anthropics/claude-code/issues/82056)

### 3. **#54461** [bug, platform:windows] **桌面端无法切换工作目录/新建会话**（22 评论，13 👍）— `Mac761`
Windows 桌面版的核心导航功能被阻塞，Issue 自 4 月创建至今仍为 OPEN，社区反馈强烈，多次督促修复。链接: [#54461](https://github.com/anthropics/claude-code/issues/54461)

### 4. **#88579** [enhancement, memory] **内建持久化记忆：不可见、按目录隔离、无法验证**（1 评论，1 👍）— `mrabinof`
「Claude Code 自带持久化记忆，但多数用户不知道，且在实际多项目协作中难以存活」。该 Issue 认为内建记忆工具的可见性与可验证性不足是 91k-star 第三方替代品存在的根本原因，视角独特且引发讨论。链接: [#88579](https://github.com/anthropics/claude-code/issues/88579)

### 5. **#79217** [enhancement, memory] **MEMORY.md 索引大小限制不可配置**（4 评论，2 👍）— `zzelner`
要求将 auto-memory 的 `MEMORY.md` 索引大小限制（200 行 / 25KB）从硬编码变为可配置。与 #82056 同属 memory 功能可观测性与灵活性问题，反映社区对持久化记忆的强烈需求。链接: [#79217](https://github.com/anthropics/claude-code/issues/79217)

### 6. **#85021** [bug, reproduced] **权限模式指示符 U+23F5 字体兼容性问题**（2 评论）— `voyager`
U+23F5 在常见的等宽字体中显示为乱码方块（tofu），六个月内已报告 5 次（#24102、#39127、#42948 等），但尚未修复，建议改用 U+25B6。链接: [#85021](https://github.com/anthropics/claude-code/issues/85021)

### 7. **#84878** [bug, regression, reproduced] **awsAuthRefresh 启动前检查在代理后 SSO 配置上无限挂起**（3 👍）— `familyguy911-oss`
2.1.187 起的回归：SSO-OIDC 调用绕过 `HTTPS_PROXY`，导致使用 SSO 用户无法启动。代理环境用户受影响范围大，社区关注度高。链接: [#84878](https://github.com/anthropics/claude-code/issues/84878)

### 8. **#83127** [bug, area:permissions] **写提交信息时意外执行任意代码**（2 评论）— `andruhon`
权限控制存在绕过路径，危险级别高。链接: [#83127](https://github.com/anthropics/claude-code/issues/83127)

### 9. **#89372** [bug, area:model] **长时任务中模型在已有参考实现时反复调查失败原因**（1 评论）— `pmcnary`
模型在已有可用参考的情况下，仍然花 5 小时排查故障而不是搜索仓库已有实现，暴露长时任务中的规划与检索策略问题。链接: [#89372](https://github.com/anthropics/claude-code/issues/89372)

### 10. **#88489** [bug, area:model] **模型根据时间限制工作并建议停止，无视明确指令**（3 评论）— `CondorCommodore`
模型基于「时间早晚」做出父爱式干预，且旧报告 (#66345/#34238) 被自动关闭，用户不满。链接: [#88489](https://github.com/anthropics/claude-code/issues/88489)

---

## 重要 PR 进展

### 1. **#79898** [CLOSED] **AWS 上的 Claude apps gateway 参考部署资产** — `roy-ant`
新增 `examples/gateway/aws/` 部署资产，配套 Amazon Bedrock 的 walkthrough 文档，与现有 `examples/gateway/gcp` 形成对应。链接: [#79898](https://github.com/anthropics/claude-code/pull/79898)

### 2. **#83890** [OPEN] **新增 pylint.yml** — `KrypticKode007`
为仓库添加 pylint CI 工作流（当前无描述。链接: [#83890](https://github.com/anthropics/claude-code/pull/83890)

### 3. **#75252** [CLOSED] **文档：澄清插件 MCP 配置范围** — `andrewmuratov`
明确插件 `mcpServers` 仅用于插件自身打包的 MCP server 定义，与用户级 `~/.claude.json` 中的 MCP 允许/拒绝列表完全是两回事，降低配置混乱。原 PR 因 fork 删除而关闭，现已重新打开合并。链接: [#75252](https://github.com/anthropics/claude-code/pull/75252)

> 注：今日 PR 活动较少（仅 3 条），主要为文档与示例更新，无核心功能代码合并。

---

## 功能需求趋势

### 1. 持久化记忆（Memory）系统
- **可观测性不足**（#82056）：用户无法判断记忆加载状态（完整/截断/未加载）。
- **索引大小不可配置**（#79217）：200 行 / 25KB 限制为硬编码，无法适配长上下文场景（如 1M token）。
- **可见性缺失**（#88579）：有用户为内建记忆写了 91k-star 的第三方替代品，说明当前实现与用户预期差距大。

### 2. 桌面与 IDE 体验
- **Windows 桌面端核心导航问题**（#54461）持续 4 个月未修复，13 👍。
- **VSCode 扩展因 Zod 的 PendingMigrationError 无法加载**（#74643）。
- **Cowork 侧边栏 Dispatch 入口在 Windows 桌面缺失**（#87253）。

### 3. 终端兼容性
- **Unicode 字符渲染**（#85021）：U+23F5 造成乱码，建议替换 U+25B6。
- **自定义主题 diff 配色不生效**（#85660）：diff 渲染器仍使用内建 theme 默认颜色。

### 4. 代理与网络环境支持
- **SSO 绕过代理导致启动挂起**（#84878）。
- **自动更新下载不可断点续传导致无限循环**（#85046）。

### 5. 安全与权限
- **权限绕过写消息时执行任意代码**（#83127）。
- **sandbox.network.strictAllowlist 无效**（#87163）——已 CLOSED，但曾被报告在所有版本中均未生效。

### 6. 模型行为与 Agent 可靠性
- 长时任务策略（#89372）与不当干预（#88489），反映社区对模型自主行为边界的高关注。

---

## 开发者关注点

### 🔥 痛点一：Linux 段错误回归（最高优先级）
v2.1.242/243 在 Linux 上全部启动路径崩溃，最严重时连 `claude --version` 都无法执行。社区已通过 gdb 回溯与哈希校验缩小到 mimalloc 符号遮蔽 glibc 的 `free(NULL)` 问题，开发者期望团队**立即修复或回滚至 2.1.241**，并在发布此类涉及系统分配器的变更前增加 glibc 2.44 兼容性测试。

### 痛点二：auto-memory 黑盒化
`MEMORY.md` 加载大小（200 行/25KB）不可配置也不可观测，导致用户（尤其使用 1M 上下文模型的用户）无法依赖内建记忆。

### 痛点三：插件生态的不可见失败
- **后台会话随机丢失全部插件技能**（#89319）：约 1/44 的概率出现，且该会话永久无法恢复。
- **插件缓存更新无法感知上游 tag→branch 变化**（#85928）：`marketplace update` 报告成功但实际冻结在旧 commit。

### 痛点四：fork 后多终端渲染状态不同步
多个终端挂到同一 live session 时滚动位置被锁死，resize 还会破坏另一终端的渲染（#88017）。

---

*日报生成时间：2026-08-25 | 数据覆盖：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**2026-08-25**


## 今日速览

昨日社区讨论热度集中在 **认证/会话失效** 与 **Windows 平台稳定性** 两大问题上，多个高赞 Issue 直指桌面端打开历史会话即触发登出的严重 Bug。与此同时，官方合并了多批 PR，重点推进 thread artifact 持久化、TUI 线程命名优化及响应预算控制，持续完善核心体验。新发布 `rust-v0.150.0-alpha.8` 主要为增量迭代版本。


## 版本发布

- **rust-v0.150.0-alpha.8** — 0.150.0-alpha.8 发布。当前列表未披露详细变更日志，属常规 alpha 迭代。


## 社区热点 Issues

过去24小时内共更新 50 条 Issue，以下为最值得关注的 10 条：

### 1. macOS 打开已有会话即导致 ChatGPT 认证失效并跳转登录
- **Issue #39162** | 评论 51 | 👍 31 | 更新 08-24
- 影响范围广，打开已有会话直接使认证失效，`26.814.41407` 版本引入。
- 会话恢复的核心路径存在认证状态管理缺陷，是当前社区反馈量最高的单个问题。
- 链接: https://github.com/openai/codex/issues/39162

### 2. 多个平台出现相似的"打开会话触发登出"问题
- **Issue #39189**（Windows，评论 20）；**Issue #39803**（macOS，评论 12）；**Issue #40267**（macOS，评论 7，旋转 refresh token 未被持久化，重新登录 76 秒后再次失效）
- 同一模式在 macOS/Windows 上跨多个版本重复出现，社区已在多个 Issue 下交叉引用，推测为公共认证链路的系统性问题。
- 链接: https://github.com/openai/codex/issues/39189 | https://github.com/openai/codex/issues/39803 | https://github.com/openai/codex/issues/40267

### 3. 请求新增选项以禁用 "Ran N commands" 折叠
- **Issue #39903** | 评论 21 | 👍 36 | 更新 08-25
- 36 个 👍 在当前数据集中最高，大量用户希望在 TUI 中始终展示完整命令列表，而不是折叠成摘要。
- 属提升透明度和可控性的核心体验需求，CLI/TUI 双端涉及。
- 链接: https://github.com/openai/codex/issues/39903

### 4. Windows 集成终端静默失败，PTY/WSL 启动前即崩溃
- **Issue #37104** | 评论 19 | 👍 9 | 更新 08-24
- 集成终端和侧边面板均无法打开，问题完全在桌面渲染器侧，且跨版本持续存在。
- Windows 平台连续多个高影响问题均与该区域相关，开发者反馈强烈。
- 链接: https://github.com/openai/codex/issues/37104

### 5. CLI 分页历史丢失展开记录并重复使用序数
- **Issue #35746** | 评论 25 | 更新 08-24
- 分页历史的 `RolloutLine` 解码不一致，导致有效记录丢失/序数错乱。
- 影响依赖长历史进行审计和调试的重度 CLI 用户，目前仍处于 Open 状态。
- 链接: https://github.com/openai/codex/issues/35746

### 6. Windows workspace 终端及 IDE 扩展无法启动命令
- **Issue #39841**（评论 8）与 **Issue #39933**（评论 7）—— 均报 `setup refresh had errors`，发生在 Windows 11 桌面端与 VS Code 扩展中。
- 跨桌面和 IDE 扩展同时出现的故障，疑与 Windows 上的 sandbox/setup helper 相关，紧随 #37104 成为 Windows 稳定性问题的又一表征。
- 链接: https://github.com/openai/codex/issues/39841 | https://github.com/openai/codex/issues/39933

### 7. 自动压实（auto compaction）应暴露给 agent
- **Issue #21777** | 评论 9 | 👍 9 | 更新 08-24
- agent 在上下文窗口将满时仍可能读取文件触发压实，希望将压实机制纳入 agent 可感知/可控的范围。
- 长任务稳定性方向上的长期需求，5 月提出至今仍受开发者关注。
- 链接: https://github.com/openai/codex/issues/21777

### 8. 已完成子代理线程未被回收，导致线程上限误报
- **Issue #39694**（评论 5）与 **Issue #35209**（评论 5，👍 2）
- 已完成子代理仍保持 Active 状态，最后出现 "1 Active / 12 Done" 却报告"达到线程上限"的反常现象。
- 子代理生命周期管理缺陷在多个版本中反复出现，社区希望尽快修复。
- 链接: https://github.com/openai/codex/issues/39694 | https://github.com/openai/codex/issues/35209

### 9. Hooks 的 PostToolUse 载荷缺少失败信号，PostToolUseFailure 从不触发
- **Issue #34289** | 评论 6 | 更新 08-24
- 钩子系统无法区分工具调用成功或失败，事件名存在于二进制中但实际不触发。
- 对依赖钩子做自动化观测/门禁的用户影响明显，属于可观测性缺口。
- 链接: https://github.com/openai/codex/issues/34289

### 10. config.toml 迁移生成非法配置，静默忽略 network_access
- **Issue #40339** | 评论 5 | 更新 08-24
- `--strict-config` 解析失败，`sandbox_workspace_write.network_access` 在静态配置中静默忽略。
- 迁移后配置不生效且缺少显式报错，对自动化配置管理用户有直接困扰。
- 链接: https://github.com/openai/codex/issues/40339


## 重要 PR 进展

过去24小时内共更新 50 条 PR，以下为 10 条值得关注的内容：

### 1. 新增持久化 thread artifact 模型（#40509）
- 新增 SQLite `thread_artifacts` 表，支持 per-thread 类型化标识、JSON 负载、级联删除与唯一约束，为 thread artifact 的持久化读写建立基础。
- 链接: https://github.com/openai/codex/pull/40509

### 2. 在时间线中持久化 realtime 事件（#40508）
- 持久化实时会话边界与转录片段，客户端可获得有界视图，无需加载完整历史。
- 对实时协同时代线一致性的重要基建补充。
- 链接: https://github.com/openai/codex/pull/40508

### 3. 加固启动 rollout 迁移的并发安全（#40499）
- 等待 rollout 迁移锁，规避并发写/归档/压缩导致的路径过期或空/忙误判。
- 链接: https://github.com/openai/codex/pull/40499

### 4. 为 AGENTS.md 状态摘要折叠 home 路径（#40502）
- `/status` 将 home 目录下的路径以 `~` 形式显示，保留项目相对路径，提升输出可读性。
- 链接: https://github.com/openai/codex/pull/40502

### 5. SkillMetadata 增加 pluginId，去重插件技能（#40501）
- 统一 `@` 搜索中插件与其技能的重复入口，通过 `skills/list` 返回可关联的 `pluginId`。
- 链接: https://github.com/openai/codex/pull/40501

### 6. 为 `/rename` 生成对话式线程标题建议（#40495） + 描述性 TUI 线程标题（#40492）
- `/rename` 打开时基于最近消息预填建议标题；无标题 TUI 线程先以首条用户消息作为临时标题，再异步替换为规范化标题。
- 两项互补，旨在改善 TUI 多线程场景下的导航体验。
- 链接: https://github.com/openai/codex/pull/40495 | https://github.com/openai/codex/pull/40492

### 7. 按响应预算分页读取 skill 资源（#40491）
- `skills.read` 每页大小按当前调用的响应预算动态调整，避免超出 tool-call 响应限额。
- 链接: https://github.com/openai/codex/pull/40491

### 8. 将历史、笔记与异步消息纳入 control tool 分析（#40496）
- 对历史/笔记扩展调用与 `send_user_message_async` 发出 control-tool 分析事件，并保留非默认命名空间。
- 补全遥测覆盖，便于用量分析与行为审计。
- 链接: https://github.com/openai/codex/pull/40496

### 9. 加固 Guardian 会话隔离（#40497）
- 内部与子代理审查统一走受限 Guardian 路径，保证审查不受父会话自定义影响。
- 链接: https://github.com/openai/codex/pull/40497

### 10. 将回合成本导出为 OTEL 指标（#40488）
- 新增 `codex.turn.cost_microusd` counter，包含回合/会话/中断/速度/推理强度等属性，将估算 USD 字符串转换为微美元。
- 为成本观测与配额管理提供标准化遥测信号。
- 链接: https://github.com/openai/codex/pull/40488


## 功能需求趋势

从过去 24 小时活跃的 Issues 中可提炼出以下社区关注方向：

- **TUI 可配置性与可见性**：多个高赞 Issue 要求控制折叠行为（#39903）、更多展示选项等，开发者对"知道 agent 在做什么"的诉求集中爆发。
- **会话/认证稳定性**：跨平台"打开会话即登出"类问题（#39162、#39189、#39803、#40267）数量多、热度高，已超过一般 Bug 范畴，成为当前社区最大痛点。
- **子代理生命周期管理**：已完成子代理未回收导致线程上限误报（#39694、#35209），影响长任务稳定性与资源管理。
- **Windows 平台系统性体验**：从集成终端到沙箱再到内核崩溃（#37104、#39841、#40119），Windows 桌面端问题密度明显高于其他平台。
- **上下文与压实控制**：#21777 等长期 Issue 显示用户希望将将"自动压实"纳入 agent 可控范围，而不只是被动触发。
- **可观测性补齐**：hooks 失败信号缺失（#34289）、MCP 工具缓存失效（#33266）等可观测性/一致性问题仍是被反复提及的方向。

## 开发者关注点

- **认证状态管理脆弱**：多个平台不同版本均出现会话恢复即登出、refresh token 未持久化等问题，开发者对认证链路的信任度正在下降。
- **Windows 平台基础能力缺失**：终端、沙箱、浏览器控制等功能在 Windows 上频繁出现"静默失败"或系统级崩溃（如 0xc0000142、内核崩溃），严重影响日常使用。
- **配置生成正确性**：auto-migration 生成的 `config.toml` 既可能破坏 `--strict-config`，也可能静默忽略关键网络配置项，开发者呼吁迁移逻辑增加显式校验和错误提示。
- **长时间运行的稳定性**：分页历史丢记录、子代理不回收、压实不可控——这些问题共同指向"长会话/长任务"场景下的可靠性不足。

---

**报告生成时间**: 2026-08-25 | 数据来源: github.com/openai/codex

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-08-25  
**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日速览

今日发布两个版本：`v0.56.0-nightly.20260825` 修复了 A2A 服务器状态污染导致的崩溃问题，`v0.57.0-preview.1` 通过 cherry-pick 将修复带入预览分支。Issue 方面，Subagent 到达 `MAX_TURNS` 后误报 GOAL 成功的问题（#22323）讨论热度最高，获得 13 条评论；另外 Generalist agent 挂起（#21409）、Shell 命令执行后卡在 "Waiting input"（#25166）等稳定性问题持续受到社区关注。

---

## 版本发布

### v0.56.0-nightly.20260825.g812f7a2bc
**发布说明**: [点击查看](https://github.com/google-gemini/gemini-cli/releases)

包含两项修复：
- **A2A 服务器状态污染修复**: 清除新消息轮次中的陈旧取消错误，解决 "Execution aborted" 崩溃问题（PR [#28940](https://github.com/google-gemini/gemini-cli/pull/28940)）
- **写策略配置修复**: 在 `write.toml` 策略配置中声明顶层安全检查器（PR [#28961](https://github.com/google-gemini/gemini-cli/pull/28961)）

### v0.57.0-preview.1
**发布说明**: [点击查看](https://github.com/google-gemini/gemini-cli/releases)

通过 cherry-pick 将上述 A2A 服务器修复带入 preview 分支，生成 `v0.57.0-preview.1`（PR [#29024](https://github.com/google-gemini/gemini-cli/pull/29024)）。

---

## 社区热点 Issues

### 🔥 高热度（P1 级别）

**1. [#22323 Subagent 到达 MAX_TURNS 后误报 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323)**  
`codebase_investigator` 子代理在达到最大轮次限制、未完成任何分析的情况下，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，导致中断被隐藏。*13 条评论，社区高度关注*，标签 `status/need-retesting`。

**2. [#21409 Generalist agent 挂起](https://github.com/google-gemini/gemini-cli/issues/21409)**  
当 Gemini CLI 委派任务给 generalist agent 时会无限挂起，简单的文件夹创建操作也会卡住，用户等待长达 1 小时。通过指示模型不委派子代理可绕过。*8 条评论、8 个 👍*，影响面较广。

**3. [#25166 Shell 命令执行后卡在 "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
简单 CLI 命令执行完毕后，shell 仍显示活动状态并停留在 "Awaiting user input"，重复出现频率高。*4 条评论、3 个 👍*，影响日常使用体验。

**4. [#21983 Browser subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983)**  
浏览器子代理在 Wayland 环境下报错失败，`Termination Reason: GOAL`，但实际未完成目标。*4 条评论*，标签 `agent/browser`、`status/need-retesting`。

**5. [#22186 get-shit-done 输出钩子导致崩溃](https://github.com/google-gemini/gemini-cli/issues/22186)**  
get-shit-done 输出接近完成（打印用户摘要）时反复触发崩溃。*3 条评论*，标签 `status/need-information`、`effort/medium`。

### 📌 值得关注（P2 级别）

**6. [#19873 利用模型的 bash 亲和力：零依赖 OS 沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873)**  
Gemini 3 模型天然擅长作为 bash 用户链式调用 POSIX 工具，此增强提案旨在在安全性与 UX 之间找到平衡。*8 条评论*，`effort/large`。

**7. [#22745 评估 AST 感知的文件读取、搜索与代码库映射](https://github.com/google-gemini/gemini-cli/issues/22745)**  
EPIC 追踪一系列调查，探索 AST 感知工具是否能更精确地读取方法边界、减少 token 噪声和轮次浪费。*7 条评论*。

**8. [#21968 Gemini 未充分使用 skills 和子代理](https://github.com/google-gemini/gemini-cli/issues/21968)**  
用户反馈模型几乎不会主动使用自定义 skills 和子代理，即使任务高度相关也不会自动调用，需要显式指示才会使用。*6 条评论*。

**9. [#26522 Auto Memory 无限重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26522)**  
Auto Memory 仅在提取代理成功读取会话记录时才标记为已处理，低信号会话未被读取会反复出现。*5 条评论*。

**10. [#26525 Auto Memory 需要确定性脱敏并减少日志](https://github.com/google-gemini/gemini-cli/issues/26525)**  
Auto Memory 在内容进入模型上下文后才提示脱敏，且服务可能记录已有技能的敏感信息，存在安全风险。*4 条评论*。

---

## 重要 PR 进展

### ✅ 已合并/关闭

**1. [#28940 fix(a2a-server): 清除新消息轮次中的陈旧取消错误](https://github.com/google-gemini/gemini-cli/pull/28940)**  
修复 A2A 服务器状态损坏问题——请求被中止或取消后，后续用户提示立即崩溃报 `Execution aborted`。已合入 nightly。

**2. [#28961 fix(core): 在写策略配置中声明顶层安全检查器](https://github.com/google-gemini/gemini-cli/pull/28961)**  
将 `write.toml` 中的安全检查器定义重新对齐为标准顶层 `[[safety_checker]]` 表格数组，确保 `AllowedPathChecker` 在策略配置加载时被正确注册。

**3. [#29024 fix(patch): 将 812f7a2 cherry-pick 至 v0.57.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/29024)**  
自动化版本补丁流程，将 A2A 修复带入 preview 分支。

**4. [#28934 (FIX) 历史回滚与重试提示优化](https://github.com/google-gemini/gemini-cli/pull/28934)**  
优化工具调用取消和重试提示，防止上下文窗口膨胀、减少 API 请求量、最大化前缀缓存效率。

**5. [#29020 / #29023 (removed)](https://github.com/google-gemini/gemini-cli/pull/29020)**  
两条 PR 内容已被作者移除并关闭。

### 🔄 进行中

**6. [#29022 feat(tool): 在文本历史中保留 ask_user 问题](https://github.com/google-gemini/gemini-cli/pull/29022)**  
新增 `ui.keepAskUserQuestionsInHistory` 设置选项，解决会话恢复后无法回溯之前的 ask_user 问题与选择的问题。

**7. [#29019 feat(evals): 从会话日志生成可审查的 eval 草稿](https://github.com/google-gemini/gemini-cli/pull/29019)**  
新增 `eval:from-log` 命令，帮助维护者和贡献者将真实的 Gemini CLI 交互转化为行为评估的起点。`size/xl`、`help wanted`。

**8. [#29018 fix(a2a-server): 移除误导性安全方案与硬编码凭据](https://github.com/google-gemini/gemini-cli/pull/29018)**  
修复 #29001：移除 agent 元数据中误导性的 `securitySchemes` 声明和硬编码的不安全凭据。`area/security`。

**9. [#28938 fix(core): 保持 GIT_CONFIG_* 环境变量三元组内部一致](https://github.com/google-gemini/gemini-cli/pull/28938)**  
防止脱敏移除编号键值对的一半后，导致 Git 无法解析被净化的 `GIT_CONFIG_*` 环境，同时确保 `ShellExecutionService` 不会在净化后恢复敏感 Git 配置。

**10. [#28914 fix(core): 将重试提示注入对话内容以保持前缀缓存](https://github.com/google-gemini/gemini-cli/pull/28914)**  
修复 #28909：将重试提示从 `config.systemInstruction` 移至 `contents` 数组末尾，保持静态提示前缀缓存，同时确保模型在生成前立即看到恢复提示。

**11. [#28939 fix(core): 避免持久化中断响应占位符](https://github.com/google-gemini/gemini-cli/pull/28939)**  
修复 #28927：中断的工具响应轮次中，CLI 会将 `[The previous response was interrupted before it completed.]` 作为合成模型响应持久化，后续模型可能重复该占位符。此 PR 修复此问题。

---

## 功能需求趋势

从今日 Issue 数据中提炼出的社区关注方向：

### 1. 子代理行为可靠性（最高频）
- **误报成功状态**: 子代理达到轮次限制时报告 GOAL 成功（#22323）
- **挂起问题**: Generalist agent 无限挂起（#21409）
- **主动使用率低**: 模型不主动调用 skills 和子代理（#21968）
- **轨迹可见性**: 子代理轨迹无法通过 `/chat share` 分享（#22598）
- **本地子代理 Sprint 1**: 社区仍在跟进子代理功能的开发展望（#20195）

### 2. 安全性增强
- **确定性脱敏**: Auto Memory 需要将脱敏前置到内容进入模型上下文之前（#26525）
- **破坏性行为抑制**: 模型应避免使用 `git reset`、`--force` 等危险命令（#22672）
- **环境变量注入防护**: 扩展更新不应绕过用户同意注入环境变量（PR #28863）
- **A2A 服务器凭据清理**: 移除硬编码凭据（PR #29018）

### 3. 性能与上下文优化
- **AST 感知工具**: 探索用 AST 感知的文件读取减少 token 消耗（#22745、#22746）
- **Tactful Extraction**: 建立"先 grep 再精确读取"的代码发现层级（#19561）
- **工具数量限制**: 超过 128 个工具时出现 400 错误（#24246）
- **重试提示与前缀缓存**: 优化重试机制以最大化前缀缓存效率（PR #28914、#28934）

### 4. 开发体验改进
- **终端体验**: 窗口 resize 时的高性能与无闪烁行为（#21924）
- **错误转义行为**: 修复不正确的 `\n` 转义处理（#22466）
- **CLI 文档补全**: 补充缺失的 CLI flags 文档（PR #29013、#29011）
- **ask_user 历史保留**: 会话恢复后保留交互问题记录（PR #29022）

### 5. 浏览器 Agent 增强
- **Wayland 兼容性**: 在 Wayland 环境下失败（#21983）
- **自动会话接管**: 持久化会话锁定时自动恢复（#22232）
- **配置覆盖失效**: `settings.json` 中的 `maxTurns` 等覆盖被忽略（#22267）

---

## 开发者关注点

### 高频痛点

1. **稳定性问题集中爆发**: 多个 P1 级 bug 集中在子代理行为异常（误报成功、挂起、崩溃），说明 agent 架构的可靠性仍是最大短板。特别是 #22323 和 #21409，分别影响了代码审查和日常开发流程。

2. **"假成功"问题**: 多个 Issue 指向一个共同模式——代理在未实际完成任务时报告 GOAL 成功。这不仅误导用户，还会污染会话记录和评估数据。社区对 `status/need-retesting` 标签的多个 issue 持续关注，说明验证机制的缺失是核心痛点。

3. **Shell 交互卡顿**: #25166 中"命令已完成但界面仍显示 Waiting input"的问题获得较高 👍 数，此类交互层的"小问题"对日常使用体验影响显著。

4. **模型对工具的自主动用能力不足**: #21968 和 #21432 共同指向一个现象——模型不会主动使用可用的能力和工具，需要用户显式指示。这与"智能代理"的预期存在落差。

### 值得注意的信号

- **安全意识的社区驱动**: #26525（脱敏前置）和 PR #29018（移除硬编码凭据）表明社区对安全问题的敏感度在提升，Auto Memory 和 A2A 服务器这类新功能的审查尤其严格。

- **上下文窗口管理成为核心议题**: 多个 Issue 和 PR 从不同角度（AST 感知、Tactful Extraction、前缀缓存优化、重试提示注入）试图解决 token 膨胀问题，这已成为代理工具规模化的关键瓶颈。

- **自动化发布流程成熟**: nightly 和 preview 分支的自动版本管理、cherry-pick 补丁流程运行顺畅，机器人贡献的 PR 占到今日 PR 列表的相当比例。

---

*本日报由 AI 自动生成，数据截至 2026-08-25。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-25** | **数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

今日社区活动集中在 **MCP（Model Context Protocol）OAuth 认证问题**上，涉及 Atlassian、Entra ID 等多个服务商，且 v1.0.81 预发布版尚未完全修复。同时，**400 错误请求**（#1274）持续困扰用户，该长期 Issue 已获得 27 条评论和 11 个 👍。功能需求方面，**工具白名单**（#1973）和 **PDF 文件上传**（#4583）、**图像生成**（#4581）的呼声较高。

---

## 2. 版本发布

**v1.0.81-9**（预发布）

- **改进：** `/model` 选择器中新增模型数据保留期警告及相应文档链接，帮助用户了解数据保留政策。

> 注意：今日有用户反馈（#4584）称 MCP OAuth 问题在该预发布版本中仍然存在，建议关注正式版发布说明。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 高热度 / 高影响

1. **[#1274] CLI 持续报 400 错误（invalid request body）**
   - 作者：unusualbob | 评论：27 | 👍：11
   - 约 95% 的代码审查请求返回 400 错误，疑似服务端校验或 CLI 请求构造问题。该问题持续已久（2月创建），至今未解决，影响面较大。
   - 🔗 https://github.com/github/copilot-cli/issues/1274

2. **[#1973] 功能请求：交互模式工具白名单**
   - 作者：Dicer-J | 评论：12 | 👍：27（今日最高赞）
   - 当前交互模式每次调用工具（含只读操作）都需手动批准，而 `/allow-all` 又过于宽松。社区强烈期望细分权限控制。
   - 🔗 https://github.com/github/copilot-cli/issues/1973

3. **[#4490] Atlassian MCP OAuth 认证在 1.0.80 中损坏（RFC 8414 §3.3 回归）**
   - 作者：ChandrasekarCK | 评论：5 | 已关闭
   - 授权服务器 issuer 与 metadata 发现 URL 不匹配导致拒绝连接。1.0.78 正常，1.0.80 回归。⚠️ 用户 #4584 反馈 1.0.81 预发布版中同类问题仍存在（Entra ID）。
   - 🔗 https://github.com/github/copilot-cli/issues/4490

4. **[#4566] Agent 反复确认却不执行工具操作**
   - 作者：kloudkon | 评论：2 | 👍：1
   - 在 gpt-5.3-codex 模型下，Agent 只应答不行动，影响自动化流程可靠性。
   - 🔗 https://github.com/github/copilot-cli/issues/4566

### 🆕 新提交 / 值得关注

5. **[#4588] MCP 工具延迟加载仅对 Anthropic 模型生效——空提示词消耗 21k tokens**
   - 作者：ArlindNocaj | 评论：0
   - OpenAI/Gemini/Grok 等模型每次请求都携带全部工具 schema，导致 token 消耗巨大（21.6k vs 47k 对比明显）。涉及成本优化，值得关注。
   - 🔗 https://github.com/github/copilot-cli/issues/4588

6. **[#4593] Windows 上归档 worktree 会话失败（os error 32）**
   - 作者：azchohfi | 评论：1
   - Windows 平台删除 worktree 会话时因进程树未终止导致失败，平台兼容性问题。
   - 🔗 https://github.com/github/copilot-cli/issues/4593

7. **[#4584] MCP OAuth 在 agentgateway + Entra ID 环境中仍然损坏**
   - 作者：akevdmeer | 评论：0
   - 即使 #4490 已关闭，预发布版 1.0.81 中相同错误仍复现，说明修复不完整。
   - 🔗 https://github.com/github/copilot-cli/issues/4584

8. **[#4572] 后台上下文压缩丢失并行工具结果，引发 HTTP 400**
   - 作者：koboldul | 评论：1
   - 长时间会话在自动压缩后报 `No tool output found for function call`，影响长会话稳定性。
   - 🔗 https://github.com/github/copilot-cli/issues/4572

9. **[#4421] MCP initialize 握手固定 60 秒超时且无重试**
   - 作者：devinj-msft | 评论：2
   - npx 启动的 stdio 服务器约 29% 的会话初始化失败，且会话内不再重试，严重影响 MCP 可靠性。
   - 🔗 https://github.com/github/copilot-cli/issues/4421

10. **[#4570] Windows 下 VS Code 运行时插件安装/更新失败（os error 5）**
    - 作者：DDKinger | 评论：1
    - 文件被 VS Code 占用导致权限拒绝，影响 Windows 用户插件管理体验。
    - 🔗 https://github.com/github/copilot-cli/issues/4570

---

## 4. 重要 PR 进展

> 今日24小时内仅有 1 条 PR 更新，以下列出近期值得关注的趋势性 PR（基于 Issue 关联及社区讨论归纳）。

1. **[#4573] README.md 重命名为 README.mdmain**
   - 作者：phuongnam467（疑似无效/低质量 PR，@open）
   - 内容无实质变更，可能是自动生成或测试 PR，建议维护者关闭。
   - 🔗 https://github.com/github/copilot-cli/pull/4573

> ⚠️ **说明：** 过去 24 小时 PR 活跃度极低（仅 1 条且质量存疑）。建议关注近期合并的 PR 动态，可查看仓库 [Closed PRs](https://github.com/github/copilot-cli/pulls?q=is%3Apr+is%3Aclosed) 获取更完整信息。从今日 Issue 讨论推断，以下方向可能在近期 PR 中推进：
> - MCP OAuth 修复（#4490、#4584）
> - `/model` 选择器增强（已随 v1.0.81-9 发布）
> - 工具权限细分（#1973）

---

## 5. 功能需求趋势

| 趋势方向 | 代表性 Issue | 热度 |
|---------|-------------|------|
| **工具权限控制精细化** | #1973（工具白名单） | 🔥🔥🔥 |
| **MCP 生态稳定性** | #4490、#4584、#4421、#4408 | 🔥🔥🔥 |
| **多模态支持** | #4583（PDF 上传）、#4581（图像生成） | 🔥🔥 |
| **成本 / Token 优化** | #4588（工具 schema 精简）、#4224（计费属性） | 🔥🔥 |
| **会话管理增强** | #4578、#4580（`/fork` 新终端）、#4577（`/ask` 多轮） | 🔥 |
| **UI / 状态栏自定义** | #4591（路径截断方向）、#4589（token 计数显示） | 🔥 |
| **Windows 平台兼容性** | #4593、#4570 | 🔥 |

---

## 6. 开发者关注点

### 高频痛点（按提及率排序）

1. **MCP OAuth 认证反复失灵**
   - 涉及 Atlassian、Entra ID、GitHub Enterprise 等多种服务商（#4490、#4408、#4584、#4582）
   - 1.0.81 预发布版未完全解决，社区对修复进度存疑

2. **400 错误请求长期未解**
   - #1274 从 2 月持续至今，影响代码审查等核心场景

3. **长会话稳定性**
   - 上下文压缩丢失数据（#4572）、Agent 不执行操作（#4566）、后台任务轮询 429（#4568）

4. **权限控制粒度不足**
   - 交互模式"全批或全拒"的两难局面（#1973），只读操作也需逐一确认

5. **成本透明度**
   - 非 Anthropic 模型 token 消耗异常偏高（#4588），OTel 计费属性缺失（#4224）

### 值得注意的信号

- **插件生态成熟度问题**：Windows 下插件更新被占用文件阻塞（#4570）、交互模式插件自定义 Agent 未激活（#4592）
- **企业级功能缺口**：图片生成（#4581）、PDF 分析（#4583）等多媒体支持呼声渐起
- **社区维护压力**：多语言拼写错误标题（#4575 "test"）、README 重命名 PR（#4573）等低质量提交增多，建议维护者加强模板校验

---

*本日报由 AI 自动生成，数据截至 2026-08-25 00:00 UTC。如有遗漏，请参考 [GitHub Repo](https://github.com/github/copilot-cli)。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-25**  
**数据来源：** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)


## 今日速览

过去24小时内，Kimi Code CLI 社区的主要焦点集中在用量计算逻辑的争议上（Issue #1994），该问题已持续数月并引发大量用户共鸣；同时，一个修复非 UTF-8 文件编辑破坏性 bug 的 PR（#2595）正在进行中，该修复对保证文件完整性至关重要。整体来看，社区对“Token 消耗模型”的透明度和准确性提出了更高的要求。


## 版本发布

过去24小时内无新版本发布。


## 社区热点 Issues

### 1. [ #1994 ] Kimi Code 用量计算有问题（Token 消耗过快）
- **作者:** wanghonghust | **创建:** 2026-04-22 | **更新:** 2026-08-24 | **评论:** 8 | 👍 7
- **链接:** [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1994)
- **核心痛点:** 用户订阅会员后，仅完成2个任务即耗尽2小时全部额度。官方宣传“5小时内可支持300-1200次API请求”，但实际使用中因 K2.6 模型思维链（Chain of Thought）过长，Token 消耗远超预期，导致“2小时只能问2次”的尴尬体验。
- **社区反应:** 这是目前最受关注的问题之一。用户质疑官方按“API 请求次数”承诺的额度与实际按“Token 消耗”计费之间存在巨大落差，并认为“思维链”消耗不应完全计入用户额度，或应提供“极速模式”选项以降低 Token 消耗。
- **为什么重要:** 直接关系到订阅用户的付费性价比和核心使用体验，若处理不当可能引发用户流失。

### 2. [ #2591 ] StrReplaceFile 工具破坏非 UTF-8 文件
- **作者:** （由 PR #2595关联）| **创建:** 2026-08
- **链接:** [查看 Issue #2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)
- **核心痛点:** 使用 `StrReplaceFile` 工具编辑二进制或非 UTF-8 编码文件时，即使编辑位置远离问题字节，整个文件中的所有非 UTF-8 字节都会被替换为 U+FFFD（替换符），导致文件永久性损坏。
- **社区反应:** 该问题已被开发人员关注并创建了修复 PR，属于关键性的数据安全 bug。


## 重要 PR 进展

### 1. [ #2595 ] 修复 StrReplaceFile 对非 UTF-8 文件的破坏性问题
- **作者:** shoemoney | **更新:** 2026-08-24 | **评论:** 暂无
- **链接:** [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/2595)
- **功能/修复内容:** 修复 `StrReplaceFile` 函数使用 `errors="replace"` 解码整个文件导致任何无效 UTF-8 字节（即使远离编辑区域）均被损坏的严重 bug。该修复确保编辑操作只影响目标字符串，保留文件的原始二进制内容。
- **重要性:** 高。该 PR 直接解决可能导致用户数据丢失的严重 bug，是保障文件完整性的必要修复。


## 功能需求趋势

从今日更新的 Issues 和 PR 中提炼的社区关注方向如下：

- **Token 消耗模型透明化：** 社区强烈要求官方重新考虑将“思维链”等内部推理 Token 消耗计入用户额度的策略。普遍呼声包括：提供“省Token模式”、按 API 调用次数而非 Token 总量计费，或至少在官方说明中明确 Token 消耗的预估和计算方式。
- **高并发与额度效率：** 用户对于“300-1200次请求”宣传与实际体验严重不符感到不满，期望能优化额度分配逻辑，提升单次会话的可用时长。
- **文件安全与编码兼容性：** 针对非 UTF-8 文件的编辑支持与保护，是开发者工作流中不可或缺的一环，社区期望官方工具能够更稳健地处理各类编码文件。


## 开发者关注点

- **计费公平性（高频痛点）：** 用户对当前 Token 消耗速率表示高度不满意，认为“订阅会员2小时只能问2次”非常不合理，直接影响了开发效率。
- **透明沟通需求：** 开发者希望官方能公开更详细的 Token 计算逻辑和预估工具，以便更好地规划使用。
- **数据安全底线：** 文件编辑工具的稳定性和对文件内容的非破坏性，是开发者的绝对底线，此类 bug 的修复优先级需保持最高。

---
**关于我们：** 本日报由 AI 自动生成，旨在帮助开发者快速了解 Kimi Code CLI 的社区动态。数据基于 GitHub 公开信息，请以官方发布为准。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-25

## 今日速览

v1.18.22 发布，主要修正了定价文案、设备登录链接和 OpenAI 兼容提供商适配问题。社区焦点集中在多个已持续数月的 TUI 侧边栏文件变更显示回归，以及 Zen API 免费模型端点不稳定事件。多组 PR 与问题已对号入座，Web 浏览器 SDK 与持久 PTY 服务等新能力正在推进。

## 版本发布

### v1.18.22
- 移除过时的 OpenCode Go 首月折扣文案与定价信息。
- 修复服务器返回相对 verification URL 或启用 base path 时的设备登录链接问题。
- 修复 `textVerbosity` 参数被错误发送至不支持该参数的 OpenAI 兼容提供商的问题。

## 社区热点 Issues

### 1. [Bug] v1.16.0 起 TUI 侧边栏 "Modified Files" 区域完全消失（#30877）
- 社区反应：14 👍，11 条评论，持续近三个月未修复，多条 Issue 与此相关。
- 影响：自 v1.16.0 起，侧边栏文件变更列表完全无法渲染，未提交变更不可见。
- 链接：https://github.com/anomalyco/opencode/issues/30877

### 2. [Bug] v1.16.0 起 TUI 侧边栏不显示会话差异（#32852）
- 社区反应：3 👍，5 条评论，已提交修复 PR #44796。
- 与 #30877 高度相关，推测为同一回归（`Session.diff` 返回空列表）。
- 链接：https://github.com/anomalyco/opencode/issues/32852

### 3. [Bug] Zen API 免费模型请求含 tools 时报 "Endpoint is unavailable"（#44300）
- 社区反应：1 👍，7 条评论，同日多个相关报告（#44332、#44750、#44798）。
- 影响：`x-preview-f-free` / `ox-alpha-free` 任何带 tools 的请求均失败，涉及 OpenAI 兼容端点与代码托管服务。
- 链接：https://github.com/anomalyco/opencode/issues/44300

### 4. [Bug] GitHub Actions 在 2026-07-15 后创建的新仓库（新 OIDC sub 格式）上失败（#37823）
- 社区反应：11 👍，6 条评论，误伤用户量大，评审中（`p.rest` 解析错误）。
- 链接：https://github.com/anomalyco/opencode/issues/37823

### 5. [Bug] Claude 模型在 cloudflare-ai-gateway 下 404（点分模型 ID 未转为短横线格式）（#44280）
- 社区反应：2 条评论，点分模型名被截断传至 Anthropic，所有 Anthropic 模型不可用。
- 链接：https://github.com/anomalyco/opencode/issues/44280

### 6. [Bug] Safari 下 IME（中文/日文）输入首次击键即中断（#38674）
- 社区反应：2 条评论，两个 PR（#38728/#44826）试图修复，尚未合入。
- 链接：https://github.com/anomalyco/opencode/issues/38674

### 7. [Feature] 为 opencode run 新增 ephemeral one-off sessions（#4489）
- 社区反应：15 👍，14 条评论，提交者表示可贡献实现。
- 需求：短期任务不应污染会话存储。
- 链接：https://github.com/anomalyco/opencode/issues/4489

### 8. [Bug] SIGILL 崩溃：AMD Ryzen Zen 3（无 AVX-512）在所有会话中崩溃（#38986）
- 社区反应：2 条评论，二进制包含 AVX-512 指令，Zen 3 不支持导致直接崩溃。
- 链接：https://github.com/anomalyco/opencode/issues/38986

### 9. [Bug] v2: `cli.json` 未声明 JSON Schema（#44812）
- 社区反应：3 条评论，缺少 schema 导致编辑器无法校验补全。
- 链接：https://github.com/anomalyco/opencode/issues/44812

### 10. [Bug] DeepSeek 模型报 "API key is invalid" 且缺模型（#44577）
- 社区反应：4 条评论，部分模型可用但 DeepSeek 不可用，另缺 GPT-5.6 Luna、GLM-5.3、Qwen3.8 Max 等新模型。
- 链接：https://github.com/anomalyco/opencode/issues/44577

## 重要 PR 进展

### 1. fix(tui): 恢复 TUI 侧边栏文件变更差异（#44796）
- 关闭 #30877，修复 v1.16.0 起的回归（`Session.diff` 与 `summarize` 事件提前返回空）。
- 链接：https://github.com/anomalyco/opencode/pull/44796

### 2. feat(merman): 完善图表样式（#44815）
- 为 Mermaid 流程图和状态图添加统一视觉层级，包括组件级配色。
- 链接：https://github.com/anomalyco/opencode/pull/44815

### 3. feat(client): 新增浏览器主机 SDK（#39277）
- 新增完整的 Node 浏览器 SDK：注册/附加、HTTP 代理、远程 TCP 隧道、Chromium 导航与快照。
- 关联 #39270（服务端配套），两者均在推进中。
- 链接：https://github.com/anomalyco/opencode/pull/39277

### 4. feat(cli): 嵌入持久 PTY 服务二进制（#44834）
- 配套 #44831（终端组）与 #44832（PTY 守护进程 API），为持久终端会话铺路。
- 链接：https://github.com/anomalyco/opencode/pull/44834

### 5. fix(core): 注册表读取立即观测待定重载（#44813）
- `reload()` 记为域过期并调度去抖；期间读取直接反映变更。
- 链接：https://github.com/anomalyco/opencode/pull/44813

### 6. feat(ai): 解析部分工具输入（#44830）
- 工具输入增量时提供尽力解析结果；保留原始文本，严格校验最终调用。
- 链接：https://github.com/anomalyco/opencode/pull/44830

### 7. feat(app): 队列并引导后续提示（#44683）
- 实现 Figma 队列/引导流程：会话运行中支持可配置后续提示投递，Enter 与 Ctrl/Cmd+Enter 行为区隔。
- 链接：https://github.com/anomalyco/opencode/pull/44683

### 8. fix(prompt-input): IME 组合期间保持编辑器惰性（#44826）
- 替换被自动清理的 #38728，修复 Safari CJK 输入中断问题。
- 链接：https://github.com/anomalyco/opencode/pull/44826

### 9. fix(core): 通过 Location 环境路由文件系统（#44825）
- 修复 #44568，路径解析走 Location 环境而非服务端主机环境。
- 链接：https://github.com/anomalyco/opencode/pull/44825

### 10. fix(provider): 非原生 Cloudflare AI Gateway 提供商改走 REST API（#44828）
- 关闭 #44827，修复 Google、xAI、Alibaba、DeepSeek 等「Invalid provider」错误。
- 链接：https://github.com/anomalyco/opencode/pull/44828

## 功能需求趋势

- **浏览器自动化**：完整浏览器主机 SDK + 浏览器工具 + 传输层，持续集成 Chromium 导航与交互。
- **持久终端会话**：CLI 嵌入 PTY 二进制、服务端持久 PTY API、会话终端组，配套完善。
- **会话隔离**：ephemeral one-off sessions 需求持续活跃，避免污染本地会话存储。
- **模型广覆盖**：新增/修复各提供商适配，如 Cloudflare AI Gateway REST 路由、Anthropic 模型 ID 映射。
- **TUI/UX 稳定性**：修复侧边栏文件显示、IME 输入、目录指示与 `/move` 刷新等细节问题。

## 开发者关注点

- **高频痛点**：TUI 侧边栏文件变更显示回归（#30877、#32852）是当前最持续的痛点；Zen API 免费模型端点故障波及面广。
- **兼容性诉求**：新仓库 OIDC sub 格式导致 GitHub Actions 失效，需尽快跟进；AMD Zen 3 无 AVX-512 直接崩溃亦值得重视。
- **新模型呼声**：DeepSeek、GPT-5.6 Luna、GLM-5.3、Qwen3.8 Max 等新模型支持需求明确。
- **配置可发现性**：`cli.json` 缺失 schema 影响编辑器校验，也是常见配置类诉求的代表。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-25

> 数据来源: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 今日速览

今日发布 v0.84.3，新增 PowerShell 工具及更安全的托管更新机制，重点改善 Windows 体验。社区方面，三连发 PR 分别修复了 Gemini 3.x 工具调用崩溃（#8590）、流式响应挂起（#8593）并落地 per-model 压缩配置（#8592），其中前两者直击今日最热门 Issue。此外，多个 Windows 相关 issue 持续发酵，平台适配仍是社区关注焦点。

---

## 版本发布

### v0.84.3
- **PowerShell 工具**：Windows 上可选使用原生 PowerShell 命令执行（此前仅支持 pwsh/Cmd）。详见 [Windows 文档](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool)
- **更安全的托管更新**：分阶段（stage → verify → atomic activate）应用更新，降低更新失败风险

---

## 社区热点 Issues（Top 10）

**1. [#7547 Windows 使用体验大调查（44 评论）](https://github.com/earendil-works/pi/issues/7547)**
> [OPEN] 作者收集 Windows 用户的使用场景与痛点，以便确定核心投入方向。44 条评论的高热度说明 Windows 适配是当前最大的社区诉求之一，v0.84.3 的 PowerShell 工具即是对此的直接响应。

**2. [#6879 自动压缩触发机制缺陷（22 评论，👍19）](https://github.com/earendil-works/pi/issues/6879)**
> [OPEN] 会话上下文超过 100% 后自动压缩仍不触发，直到 provider 报错（373k tokens）才被迫压缩。社区强烈建议在每次 agentic turn 后检查压缩阈值。👍19 为今日最高，属于**影响所有长会话用户的 P0 级稳定性问题**。

**3. [#6922 llama.cpp 默认模型不可用（11 评论，👍14）](https://github.com/earendil-works/pi/issues/6922)**
> [CLOSED] 当 `defaultProvider` 设为 `llama.cpp` 时，启动显示 "No models available"。已关闭，但 👍14 说明本地模型用户对此类问题的关注度很高。

**4. [#8167 无法选择内置 llama.cpp 模型（11 评论）](https://github.com/earendil-works/pi/issues/8167)**
> [CLOSED] llama-server router 模式下的模型不出现在模型列表中，尽管 `/llama` 命令可正常加载/卸载。此问题催生了 PR #8479 和 #8558 两个修复方案，但尚未合并。

**5. [#6996 Gemini 3.x 工具调用崩溃（6 评论）](https://github.com/earendil-works/pi/issues/6996)**
> [OPEN] Gemini 3.x 模型在工具调用时因缺少 `thought_signature` 而失败。**今日已被 PR #8590 修复**，属于从 Issue 到 PR 的高效闭环案例。

**6. [#7048 压缩摘要截断问题（7 评论）](https://github.com/earendil-works/pi/issues/7048)**
> [CLOSED] 生成压缩摘要时未检查 `stopReason === "length"`，导致 token 达到上限时摘要被截断在单词中间，且不报错。影响压缩质量与后续会话体验。

**7. [#8331 流式响应挂起导致 Agent 死循环（3 评论）](https://github.com/earendil-works/pi/issues/8331)**
> [OPEN] Provider 中断（如 Anthropic 529）时，SSE 流停止推送但不关闭，`for await` 永远等待，Escape 无法取消。**今日已被 PR #8593 修复**（通过 idle timeout 结束停滞流）。

**8. [#8166 工具调用上下文破坏（7 评论）](https://github.com/earendil-works/pi/issues/8166)**
> [OPEN] 扩展在工具调用批次中间注入自定义消息，破坏了 tool_calls→tool 的相邻关系，导致 DeepSeek 400 错误，且后续所有轮次持续失败。涉及扩展 API 设计边界问题。

**9. [#8133 Per-model 压缩配置（4 评论，👍3）](https://github.com/earendil-works/pi/issues/8133)**
> [OPEN] 建议为不同模型设置独立的压缩参数（`compaction.profiles`），以适配 200K 与 1M 上下文窗口的差异。**今日已被 PR #8592 实现**，响应迅速。

**10. [#8409 中止回合误报错误（4 评论）](https://github.com/earendil-works/pi/issues/8409)**
> [CLOSED] 0.84.2 回归：用户中止的回合以 `stopReason: "error"` 结束而非 `"aborted"`，依赖时序，影响自动化流程的错误判断。

---

## 重要 PR 进展（Top 10）

**1. [#8593 停滞 Provider 流 idle timeout 终结（今日）](https://github.com/earendil-works/pi/pull/8593)**
> 修复 #8331：SSE 流停止推送但不关闭时，通过字节级 idle timeout 强制结束，避免 Agent 永久挂起。**供应商故障场景的关键韧性提升。**

**2. [#8592 新增 per-model 压缩配置（今日）](https://github.com/earendil-works/pi/pull/8592)**
> 修复 #8133：新增 `compaction.profiles` 映射，支持按模型配置 `reserveTokens` 等参数，大规模/小规模模型共存时的精细化调优。

**3. [#8590 Gemini thought_signature 往返修复（今日）](https://github.com/earendil-works/pi/pull/8590)**
> 修复 #6996：在 OpenAI-compatible 路径下保留 Gemini 3.x 的 `thought_signature`，修复工具调用崩溃。对 OpenRouter/Copilot 等网关用户很重要。

**4. [#8585 OpenAI 流即时中止（今日）](https://github.com/earendil-works/pi/pull/8585)**
> OpenAI Responses/Completions 流循环未检查 abort signal，现在与 Anthropic 路径对齐，信号触发后立即中断。

**5. [#8512 可选 PowerShell 工具（今日合入 v0.84.3）](https://github.com/earendil-works/pi/pull/8512)**
> 作者（mitsuhiko）表示"放弃 git bash 在 Windows 上的折腾"，提供原生 PowerShell 工具作为更可靠的 Windows 命令执行方案。

**6. [#8575 Session JSONL 损坏行恢复](https://github.com/earendil-works/pi/pull/8575)**
> 修复 torn-append 导致的 JSONL 行损坏：一行中同时包含截断条目和完整条目时，旧逻辑跳过整行导致双倍丢失，现在正确拆分并给出提示。

**7. [#8570 Codex thread affinity 头保留](https://github.com/earendil-works/pi/pull/8570)**
> 为 OpenAI Codex Responses 请求补充 `thread-id` 头，与 `session-id` 配对，确保多轮对话的线程一致性。

**8. [#8479 暴露未加载的 llama.cpp 预设模型](https://github.com/earendil-works/pi/pull/8479)**
> 修复 #8167 的一部分：让 llama-swap / `--models-preset` 方式定义的模型在 `/model` 中可选，按需加载。配套 PR #8558 进一步处理 autoload 场景。

**9. [#8559 剪贴板图片作为原子标记](https://github.com/earendil-works/pi/pull/8559)**
> 粘贴图片时不再暴露临时文件路径，而是以编辑器内附件标记形式呈现，更清晰且不泄露实现细节。

**10. [#8547 编辑器光标点击定位](https://github.com/earendil-works/pi/pull/8547)**
> 支持在提示词区域内通过鼠标点击移动光标位置，此前只能通过键盘导航，改善鼠标终端用户编辑体验。

---

## 功能需求趋势

从今日 Issues 与 PR 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue/PR | 热度 |
|------|--------------|------|
| **Windows 平台适配** | #7547（44 评论）、#8512（PowerShell）、#8582（PS 5.1 vs pwsh） | 🔥🔥🔥 最高 |
| **稳定性与容错** | #6879（压缩不触发）、#8331（流挂起）、#8409（中止误报）、#7444（WS 重试）、#8585（即时中止） | 🔥🔥🔥 多条并发 |
| **多 Provider 支持** | #5986（Merge Gateway）、#6403（Eden AI）、#8450（Parasail）、#8572/8573（Bedrock Mantle）、#4742（SiliconFlow） | 🔥🔥 持续新增 |
| **新模型/目录更新** | #8546 / #8491（deepseek-v4-flash-vision-exp）、#6996（Gemini 3.x 修复） | 🔥🔥 快速跟进 |
| **性能与资源优化** | #8583（启动上下文精简）、#8158（Mermaid 渲染升级） | 🔥 中等 |
| **会话管理增强** | #8133（per-model 压缩）、#8554（会话迁移目录）、#8588（portable presets） | 🔥 中低 |

---

## 开发者关注点

1. **Windows 体验是最大痛点**：#7547 的 44 条评论收集了大量 Windows 使用场景与问题，v0.84.3 的 PowerShell 工具（#8512）是该方向的直接回应，但 #8582 显示 PowerShell 5.1 与 pwsh 的路径不一致问题仍然存在，修复尚未完成。**Windows 用户期待更系统的适配方案而非零散修补。**

2. **长会话稳定性亟待提升**：#6879（自动压缩不触发）与 #8331（流挂起）直指长时间运行场景下的可靠性缺陷，二者在今日均已被 PR 修复（#8592、#8593），但 #7048（压缩摘要截断）和 #8166（工具调用上下文破坏）仍悬而未决。**自动化场景（AFK、后台任务）对这类问题的容忍度极低。**

3. **新模型跟进非常迅速**：#8546 在 DeepSeek 发布视觉模型（8/21）仅 3 天后即提交 Issue，PR #8590 在 Issue #6996 提出后 1 天内完成修复。**社区对新模型的支持热情高涨，期待官方保持同步节奏。**

4. **Provider 多样性诉求持续**：仅今日就出现 3 个新 Provider 请求（Merge Gateway、Eden AI、Parasail），加上 Bedrock Mantle 双 PR（#8572、#8573），反映开发者希望 Pi 能覆盖更多后端服务。

5. **本地模型（llama.cpp）仍有使用摩擦**：#6922（默认模型不可用）与 #8167（模型列表不显示）两个问题虽然均已关闭，但 root cause 涉及多路径配置矛盾且修复 PR（#8479、#8558）尚未合并，本地模型用户需继续关注。

---

*本日报由 AI 自动生成，数据截至 2026-08-25。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-25

## 今日速览

今日社区活跃度主要围绕 **MCP 连接恢复可靠性** 与 **Web Shell 会话管理** 两大主题，`#9944` 关于 HTTP 传输下 MCP 重连"假成功"的问题获得社区高度关注，对应修复 PR #9962 当日即提交。此外，多个中长期架构议题（TUI 渲染层迁移、Config 上下文所有权、Computer Use 路线图）持续在讨论中，说明项目正在从功能扩展向结构优化过渡。

---

## 版本发布

**v0.22.0-nightly.20260825.22bb5e8b9f** 发布，包含以下变更：

- **修复(web-shell)**：从概览面板打开会话时，向 Web Shell 正确传递工作区 cwd（PR #9730，作者 @wenshao）

同时发布了 **cua-driver-rs v0.20.0** 预编译二进制（vendored under `packages/cua-driver`）：

- **macOS**：已签名 + 公证通用二进制 + `QwenCuaDriver.app`
- **Linux**：未签名（x86_64 + arm64，glibc ≥ 2.31）
- **Windows**：未签名（x86_64 + arm64）

---

## 社区热点 Issues

以下为本日最值得关注的 10 个 Issue：

### 1. MCP 重连报成功但工具不可用（HTTP 传输）
- **Issue #9944** | 优先级 P2 | 类型: bug | 评论: 4
- 重启 HTTP 传输的 MCP 服务器后，`qwen mcp reconnect --all` 报告重连成功，但调用工具仍返回 `"Tool not found on MCP server"`。涉及 `mcp-session-id` 更新后的恢复逻辑。
- 社区反应：已确认问题，对应修复 PR #9962 当日即提交。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/9944)

### 2. Anthropic wire 缺少 OpenAI wire 已具备的流安全保护
- **Issue #9005** | 优先级 P1 | 类型: bug | 评论: 4
- `anthropicContentGenerator` 在流处理中缺少 OpenAI wire 已实现的 stream-safety 机制，可能引发潜在稳定性问题。同时指出 `@anthropic-ai/sdk` 仍固定在 `^0.36.1`（2025 年 1 月版本）。
- 社区反应：P1 级确定，正在审查中。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/9005)

### 3. `NO_TOOL_RESULT_PROGRESS` 导致无头运行硬失败
- **Issue #9026** | 已关闭 | 优先级 P2 | 类型: bug | 评论: 4
- 当模型在工具结果后静默结束回合时，headless 运行以 `[API Error: Model stream ended after a tool result without visible progress.]` 中止。
- 社区反应：已关闭，修复逻辑已确定。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/9026)

### 4. Artifact `updatedAt` 不随内容变化而更新
- **Issue #9927** | 优先级 P2 | 类型: bug | 评论: 4
- Session artifact 的 `updatedAt` 仅在注册字段（标题、URL、sizeBytes）变更时更新，内容重写不会刷新时间戳。此外 `write_file` 中间产物在更新后仍标记为缺失。
- 社区反应：Web Shell 相关，确认存在，讨论中。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/9927)

### 5. TUI 渲染层从 ink 迁移至 OpenTUI 的提案
- **Issue #8662** | 优先级 P3 | 状态: waiting-for-feedback | 类型: enhancement | 评论: 4
- 当前基于 ink 7 + React 19 的渲染方案存在闪烁问题、需要 1037 行补丁维护，且对鼠标支持差。提案迁移至 OpenTUI 以解决结构性问题。
- 社区反应：路线图级讨论，需要更多反馈。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/8662)

### 6. 核心 + CLI 架构审查 — 12 项结构性问题清单
- **Issue #4063** | 状态: in-progress | 类型: enhancement | 评论: 9
- 审查发现 `packages/core` 和 `packages/cli` 存在 14 项架构问题，最严重的是核心类型系统被 `@google/genai` 绑定——**136 个文件**直接 import 该包。
- 社区反应：社区最关注的架构议题之一，持续跟进中。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/4063)

### 7. API 流活动超时：19 chunks 后 120s 无响应
- **Issue #5975** | 优先级 P2 | 类型: bug | 评论: 12 | 👍: 1
- 自 v0.19.3 起，频繁出现 `No stream activity for 120000ms after 19 chunks` 错误，此前必现 "Thought for 2s" 后卡住。用户已提供详细复现步骤。
- 社区反应：评论最多的问题，影响范围较广。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/5975)

### 8. 派生 Config 上下文所有权需显式化
- **Issue #8083** | 状态: in-progress | 优先级 P1 | 类型: enhancement | 评论: 6
- 多个生产路径通过 `Object.create(base)` 原型委托派生 Config（subagents、scoped memory agents、approval-mode 等），需使所有权显式化以避免隐式状态共享。
- 社区反应：P1 级架构改进，推进中。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/8083)

### 9. qqbot Cron/blockStreaming 交互问题
- **Issue #6094** | 优先级 P2 | 类型: bug | 评论: 5
- `blockStreaming: 'on'` 配置下，`onResponseChunk` 提前返回导致 `streamState` 未填充，`_cronTextHandler` 因此出现重复消息等问题。
- 社区反应：明确缺陷，跟踪中。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/6094)

### 10. VP 模式下 ctrl-s 提示导致渲染溢出一行
- **Issue #9966** | 优先级 P2 | 类型: bug | 评论: 2
- VP 模式（`ui.useTerminalBuffer`）下，`<ShowMoreLines>` 提示作为虚拟列表的兄弟节点渲染，导致历史区域超出高度预算一行，触发 Ink 全量重绘。
- 社区反应：新提交的问题，已定位原因。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/9966)

---

## 重要 PR 进展

以下为 10 个值得关注的 PR：

### 1. fix(mcp): 恢复已重启的 HTTP MCP 服务器（会话内 + CLI）
- **PR #9962**（作者: yiliang114 | 更新: 08-25）
- 修复 4 个堆叠缺陷，使 HTTP MCP 服务器重启（新 `mcp-session-id`）后工具真正可用，而非仅报告成功。会话内失败的调用将自动修复连接。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9962)

### 2. fix(cli): Windows daemon worktree guard 保持路径字面量
- **PR #9841**（作者: zhou2024NAU | 更新: 08-25）
- 修复 Windows 下 daemon 通过 cmd.exe/PowerShell 执行命令时，反斜杠被 POSIX 转义规则误解析的问题。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9841)

### 3. fix(telemetry): 会话切换失败时恢复 usage 聚合
- **PR #9844**（作者: yiliang114 | 更新: 08-25）
- 修复 `/resume` 或 `/branch` 在 `GeminiClient.initialize()` 后失败时，telemetry 回放残留导致会话间 usage 数据交叉污染的问题。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9844)

### 4. fix(web-shell): 会话 pin/archive 操作即时写入缓存列表
- **PR #9598**（作者: cactuser-Lu | 更新: 08-25）
- pin、unpin、archive、unarchive 操作在 daemon 确认后立即更新会话列表，不再等待完整 catalog 刷新。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9598)

### 5. fix(core): 在 Session.ts 中按路由隔离 token 限制缓存
- **PR #9862**（作者: yiliang114 | 更新: 08-25 | 自报审查中）
- 模型切换后，旧路由的 token 计数不再触发会话 token 限制。缓存记录产生它的模型路由，路由变更即失效。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9862)

### 6. feat(autofix): 长轮次中保持状态注释实时更新
- **PR #9771**（作者: wenshao | 更新: 08-25）
- 审查修复轮次可能持续数小时，但 PR 状态注释在轮次开始时冻结为 "🔄 working"。本 PR 启动分离的心跳循环，在长轮次中定期刷新状态。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9771)

### 7. fix(core): heredoc 正文不参与权限规则拆分
- **PR #9417**（作者: he-yufeng | 更新: 08-25）
- 修复 #9381。权限匹配仅在 opener 是可证明的简单命令且已知非 shell 标准输入消费者时移除 heredoc 正文，使 `Bash(python *)` 规则能匹配 Python heredoc 为单条命令。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9417)

### 8. feat(review): 被审查仓库的命令在容器内执行
- **PR #9723**（作者: wenshao | 更新: 08-25）
- 将被审查仓库的自身命令执行放入容器边界，使其成为运维者设定的策略而非环境属性。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9723)

### 9. fix(daemon): 支持当前会话的定时任务
- **PR #9838**（作者: doudouOUC | 更新: 08-25）
- 为 daemon 增加当前会话粒度的定时任务支持。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9838)

### 10. fix(cli): 队友消息在工具轮次边界投递
- **PR #9638**（作者: yiliang114 | 更新: 08-25）
- Agent Team 中队友→leader 消息不再等待 leader 整个多轮任务结束，而是在每轮工具调用完成后立即投递。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/9638)

---

## 功能需求趋势

从近期 Issues 中提炼出以下社区关注方向：

1. **MCP 生态稳定性与自愈能力** — 最热点：重连可靠性（#9944）、工具结果渲染折叠（#9934）、top-level 命令面板整理（#9942）。社区期望 MCP 作为一等公民被深度集成。

2. **会话管理与状态一致性** — 大量 Issue 围绕会话 pin/archive、artifact 元数据、多会话日志隔离等，说明用户对桌面端/Web Shell 的会话状态一致性要求显著提升。

3. **Computer Use 路线图推进** — #9333/#9334/#9335 三阶段（Node REPL → 可导入 SDK → Skill）仍在按计划推进，cua-driver-rust v0.20.0 已发布预编译二进制，为第三阶段铺路。

4. **TUI 渲染体验重构** — #8662 的 OpenTUI 迁移提案获得关注，闪烁问题、鼠标支持成为高频诉求；#9966 的渲染溢出一行也指向渲染层需重构。

5. **第三方消息通道扩展** — DingTalk Workspace（#9394）、DingTalk 富文本多图支持（#9922）、QQ 机器人（#6094）持续活跃，多渠道集成是明确方向。

6. **沙箱与 CI 基础设施健壮性** — 镜像缺失时报错信息可操作性（#9961）、恢复发布后自动关闭失败问题（#9960），反映项目对 CI 自愈能力的要求。

---

## 开发者关注点

1. **MCP 连接"假成功"现象** — `reconnect` 报告成功但工具不可用是最令开发者困惑的问题之一，说明 MCP 会话恢复的状态验证需要更严格。

2. **流式输出的可见性与稳定性** — #5975（120s 无活动后超时）和 #9026（工具结果后静默结束）都是在真实使用中频繁触发的高频痛点，表明流中断的兜底与错误提示仍需细化。

3. **架构层的技术债** — 核心类型被 `@google/genai` 绑定（136 个文件）、派生 Config 所有权不明确、TUI 基于 1037 行补丁的 ink。社区在用脚投票：这类结构性议题在 Issues 中获得持续关注和讨论。

4. **Windows 平台兼容性持续被修复** — Windows 路径字面量（#9841）、root 权限下测试失败（#9909）、Git 老版本下扩展安装（#9969）等，表明有相当比例的用户在 Windows 环境使用 Qwen Code。

5. **Web Shell 的会话管理粒度** — 用户在桌面端对实时反馈的要求更高：pin/archive 即时生效（#9598）、任务分组（#9928）、定时任务（#9838）。这是产品体验从"可用"走向"顺手"的阶段。

---

*本日报由 AI 自动生成，数据来源: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# 🤖 DeepSeek TUI 社区动态日报 — 2026-08-25

> 数据来源: github.com/Hmbown/DeepSeek-TUI（注：Issue/PR 归属仓库标记为 CodeWhale，为品牌重命名产物）


## 今日速览

v0.9.12 发布周期进入集成冲刺阶段：#5573 里程碑追踪器与 #5576 集成分支已代码完备，重点修复“托管 Chat 统一到原生运行时线程”“子代理审批持久化”和“目标延续节奏绕过”三大可靠性问题。与此同时，三连发的“受控运维面”PR（control socket、/relaunch、lifecycle outbox）为长驻会话引入了可编程监督能力，标志着项目从“交互式工具”向“可编排 Agent 平台”演进的明确信号。Issue 侧则集中反映出 **18 处 DeepSeek 专属硬编码、巨型单文件（最大 18.7k 行）、Provider 中立性** 等架构债问题。


## 社区热点 Issues（Top 10）

1. **#5588 Provider 中立性：18 处 DeepSeek 专属硬编码门禁**
   维护者 Hmbown 对全部生产代码中 “deepseek” 字符串做了全量审计（279 文件、2,281 处），识别出 18 处行为级硬编码。已修复 NVIDIA NIM 环境变量泄漏等首批问题，剩余 17 处亟待处理。这是多 Provider 战略落地的关键架构债。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5588) · 4 条评论

2. **#5586 巨型单文件拆分：lib.rs 18.7k、config.rs 12.3k**
   用户明确要求在 0.9.12 清理通道中拆分 10k+ 行文件（含 20k 行测试文件）。当前 crates/tui 中 5 个生产文件合计超过 60k 行，已严重阻碍可维护性和并行开发。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5586) · 3 条评论

3. **#5585 测试 `setup_confirm_toast_names_secret_store_and_global_scope` 栈溢出**
   严重性：**SIGABRT “has overflowed its stack”**，已在 main 和集成分支复现，确认是历史遗留问题（12553c5 即失败），与 0.9.12 改动无关。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5585) · 3 条评论

4. **#5596 [bug] 回合结束静默销毁回合所属子代理，可恢复工作丢失**
   模型结束回合时，仍在后台运行的长时审查子代理被直接销毁，**无任何可见警告**，已观察到一个审查任务耗费 347k tokens 却没产出任何结论。属于 0.9.12 必修复项。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5596) · 1 条评论

5. **#5595 [bug] 只读审查子代理拒绝执行 `git -C <workspace> log`**
   分类器、角色姿态门禁、执行沙箱均允许，但最终操作端仍拒绝工作区内绝对路径 git 命令。**一个 347k token 的审查子代理因此零产出**（与 #5596 同源）。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5595) · 1 条评论

6. **#5589 Fleet 配置视图：Enter 循环回到同一屏，模型切换入口难找**
   用户带截图反馈 `/fleet config` 视图中选定角色行按 Enter 无任何状态变化，模型切换被埋没。已拆出 #5604 (Fleet roster 可发现性) 和 #5603 (上下文成本展示) 两个 PR 分别处理。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5589) · 2 条评论

7. **#5587 死代码清理阶段 2-4：75 处测试标记、约 242 处冗余 allow**
   全量审计 379 处 `allow(dead_code)`，识别出 18 处确认已死代码（Tier B/C），大批标记可收敛为 blanket-allow。架构卫生的持续投入。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5587) · 2 条评论

8. **#5601 [bug] 全新安装时 MiniMax/Xiaomi 模型配置返回 404**
   用户反馈首次配置这两个模型时输入 API Key 回车即报 404，高度怀疑是内置 URL 错误；同版本 DeepSeek 正常，只能降级到 0.6 版绕行。**建议优先排查**。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5601) · 2 条评论，新开

9. **#5605 [bug] Flaky test: `remote_control` 回收回合 ID 测试在满载套件下失败**
   已在集成分支上复现（remote_control.rs 未改动，纯代码搬移），失败与 #5586 拆分无关，是原生并行负载下的偶发问题。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5605) · 1 条评论，新开

10. **#5553 [/context] 将 token 成本归因到工具定义与每个 MCP 服务器通告**
    `context_inspector.rs` 目前只估算系统层与 Skills，用户期望看到每个工具和每个 MCP 服务器各自占用的 token，以便按需裁剪。已有对应 PR #5603 落地展示层。
    [链接](https://github.com/Hmbown/CodeWhale/issues/5553) · 2 条评论


## 重要 PR 进展（Top 10）

1. **#5606 feat(runtime): 0.9.12 中继集成 — 托管 Chat 统一到原生运行时线程（已合并）**
   0.9.12 待机车道，核心变更：托管 Chat 迁移至原生运行时线程（turn_operation_idempotency）、R2 审批修复（MCP 工具按种类审查）、`doctor --fix` 需用户确认。这是发布的主干合并。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5606) · 已关闭

2. **#5594 control socket - part d（最终版）**
   受控运维面的收官：**opt-in、Unix-only、换行分隔 JSON-RPC 套接字**，按会话绑定。`[control_socket] enabled = true`（默认关闭且行为不变）。标志项目支持外部编排器命令行监督。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5594) · 开放

3. **#5592 lifecycle outbox - part b**
   opt-in `[lifecycle_outbox]` 配置，将生命周期事件（turn_start / turn_end / turn_stalled / subagent_spawn…）追加写入 JSONL 文件，覆盖交互式与 headless exec 两种模式，无需 shell hook。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5592) · 开放

4. **#5593 /relaunch 命令 - part c**
   `/update` 安装新二进制后提示重启，本 PR 增加 `/relaunch` 缺失的自重启能力：持久化（保存、恢复终端、遥测 flush、session_end 事件）后直接切换到新二进制，一步到位。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5593) · 开放

5. **#5576 0.9.12 集成：必修复 + UX 修复（72 commits，WIP）**
   发布阻塞项已全部完成（门禁通过、代码完备），剩余预审查工作为版本号提升 + changelog/RC 门禁。不要合并直到门禁绿灯。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5576) · 开放

6. **#5584 fix(subagents): 持久化子代理审批凭据（Closes #5543）**
   修复子代理审批提示仅基于内存决策授权工具调用、无持久化证据的问题：子运行时继承会话审批收据存储，在提示前提交 `Asked`、关闭前提交终态。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5584) · 开放

7. **#5602 fix(shell): 可靠解码 Windows 输出**
   保留跨 shell 读取块边界的 UTF-8 与 Windows ANSI 代码页字符；仅当严格 UTF-8 解码失败后才用当前 Windows ACP；保持同步有界、raw-delta、snapshot、tail、detached-reader 路径一致。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5602) · 开放

8. **#5603 feat(tui): 展示工具与 MCP schema 成本（#5553 展示层落地）**
   上下文检查器新增来自模型工具目录的**有界 schema 成本估算**：目录总量与按估算 token 成本排序的内置工具行、大目录省略计数摘要、仅展示不影响 KV 缓存规则。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5603) · 开放

9. **#5604 feat(tui): Fleet 名册编辑可发现性（#5589 聚焦切片）**
   选中成员显示显式 `[edit]` 指示；底栏突出 `m model` 快捷键；按 `m` 直接打开对应成员编辑器。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5604) · 开放

10. **#5599 feat(tui): 能力门控的光标强调色（已合并）**
   仅当终端显式支持且非 reduced-motion/plain 模式下，应用 OSC 12 光标强调色（对应 #5554），主题色为 RGB 时复用，退出时 OSC 112 恢复。
    [链接](https://github.com/Hmbown/CodeWhale/pull/5599) · 已关闭


## 功能需求趋势

| 方向 | 代表 Issue / PR | 说明 |
|---|---|---|
| **运行时可靠性与子代理生命周期** | #5596、#5595、#5584 | 核心痛点：回合结束静默杀死子代理、只读子代理无法运行关键 git 命令、审批凭据不持久化。用户对 **347k token 零产出** 表达了强烈不满。 |
| **Provider 中立性** | #5588、#1482、#1409 | 18 处 DeepSeek 专属硬编码门禁、NVIDIA NIM 404、MiniMax/Xiaomi URL 错误，都在呼唤 Neutral Provider 架构。 |
| **架构卫生** | #5586、#5587、#5585 | 巨型文件拆分（5 文件 60k 行）、死代码清扫 242+ 处、栈溢出测试，是 0.9.12 的并行清理车道。 |
| **受控运维面（Supervised Operation）** | #5594、#5592、#5593、#5591 | JSON-RPC 控制套接字、生命周期 outbox、/relaunch、目标延续节奏修复 — 面向“可编程监督长驻会话”的完整套件。 |
| **上下文成本可见性** | #5553、#5603 | 用户要求将 token 成本归因到工具定义与每个 MCP 服务器通告，已进入展示层实现。 |
| **终端体验细节** | #5551、#5554、#5599 | 聚焦块操作（y 复制、全屏、原始 markdown）、OSC 12/112 光标强调色，打磨终端交互质感。 |
| **MCP 生态适配** | #1409 | 用户提出 MCP OAuth2.1 支持需求，当前仅支持 API Key 认证（未获优先级，但持续收集需求）。 |


## 开发者关注点

- **子代理任务丢失是当前第一大痛点**：#5596 与 #5595 合起来表达了明确的场景 — 回合结束即销毁子代理且无警告，347k tokens 打水漂，严重影响长任务场景的可信度。好在 #5584 已在完善审批持久化，追踪修复已纳入 0.9.12 范围。
- **目标延续节奏被绕过**：#5534 指出了 `continuation_delay_seconds` 只接入两条分发路径之一，resumed/CLI 会话中的 within-turn 路径可瞬时连续触发多轮 pass。修复 PR #5591 已合并，正在回归验证。
- **巨型文件阻碍迭代**：开发者对 lib.rs（18.7k 行）等 5 个 10k+ 行文件明确表达了“持续造成痛苦”（#5586），0.9.12 清理车道已响应。
- **Provider 中立性直接影响了功能可用性**：NVIDIA NIM 404、MiniMax/Xiaomi URL 错误、DeepSeek 专属门禁 — 用户期望“同一个 TUI，任意模型后端”。
- **测试稳定性**：#5585 栈溢出与 #5605 满载并行 Flaky 并存，加上 #5547（CI 中非镜像分支跳过 Linux workspace 测试），测试基线可靠性有待提升。
- **品牌重命名阵痛**：Issue 摘要中已出现 CodeWhale 标记与 deepseek-doctor 混淆（#1482 的 `deepseek doctor --json` 输出），新旧品牌切换期需要文档同步。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*