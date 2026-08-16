# OpenClaw 生态日报 2026-08-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-16 01:23 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。以下是根据 OpenClaw 项目在 2026-08-16 的 GitHub 数据生成的每日动态日报。

---

# OpenClaw 项目动态日报 - 2026-08-16

## 1. 今日速览

OpenClaw 项目今日活跃度极高，过去24小时内产生了 500 条 Issue 更新和 500 条 PR 更新，同时发布了 1 个新测试版本 **v2026.8.1-beta.2**。社区讨论热度持续高涨，但同时也暴露出项目在稳定性和消息可靠性方面的严峻挑战。**"消息丢失" (message-loss)**、**"会话状态管理" (session-state)** 和 **"子代理 (Subagent) 完成机制"** 成为今日最受关注的三大主题，相关 PR 和 Issue 占据了讨论榜的大部分席位。尽管待合并的 PR 数量庞大（449 条），但大部分集中在 UI 细节优化上，而核心运行时的稳定性问题解决进度相对缓慢，建议维护者重点关注高优 Bug 的修复进展。

## 2. 版本发布

**v2026.8.1-beta.2** 于今日发布。此版本主要包含以下亮点：

- **Secret egress host binding（机密出口主机绑定）**：这是一个重要的安全增强。它将每个共享存储的机密（secret）绑定到确切的 HTTPS 目标主机上，贯穿 CLI、Gateway RPC 和 Control UI。这样，当未绑定的哨兵替换（sentinel substitution）发生时，系统会在明文出口前安全失败（fail closed），从而防止机密泄露。感谢社区贡献者 @shakkernerd。
- **GPT-5.6 Ultra 和运行时切换**：该版本增加了对 GPT-5.6 Ultra 模型的支持，并优化了运行时切换逻辑。

**暂无明确的破坏性变更或迁移注意事项发布。**

## 3. 项目进展

今日合并/关闭的 PR 数量为 51 条。从最活跃的 PR 来看，项目当前的主要精力集中在 **Control UI (Web UI) 的体验重构** 上。虽然这些 PR 大多仍处于开放状态，但它们清晰地展示了项目的前进方向：

- **UI/UX 全面重构**：贡献者 `vyctorbrzezowski` 和 `Patrick-Erichsen` 提交了一系列高数量的 PR，旨在统一和优化侧边栏（Sidebar）的交互、排版、图标和会话管理逻辑。这包括：
    - `#124070` [improve(ui): move sidebar controls into its header](https://github.com/openclaw/openclaw/pull/124070)
    - `#123853` [fix(ui): keep the open session's incognito identity through a Gateway disconnect](https://github.com/openclaw/openclaw/pull/123853)
    - `#123666` [feat(ui): make sidebar customization transactional](https://github.com/openclaw/openclaw/pull/123666)
    - `#123594` [feat(ui): add consistent session information cards](https://github.com/openclaw/openclaw/pull/123594)

    这一系列 PR 表明，项目正在从功能堆砌转向精细化的用户体验打磨，旨在为多会话、多项目的重度用户提供更清晰、高效的管理界面。特别是 `#123594` 引入的会话信息卡片，直击用户无法快速了解会话状态（分支、操作者、工作区状态）的痛点。

- **核心稳定性修复**：少量非 UI 的 PR 也获得了关注，如：
    - `#124329` [fix(gateway): omit internal class names from RPC failures](https://github.com/openclaw/openclaw/pull/124329) 旨在改善错误信息的可读性，避免向用户暴露内部类名。
    - `#123975` [fix(scripts): typecheck hangs forever when tsgo wedges instead of failing](https://github.com/openclaw/openclaw/pull/123975) 致力于解决开发工具的卡死问题。

整体来看，项目在用户体验层面推进明显，但在修复社区反馈强烈的高优稳定性 Bug 方面，进展似乎不够迅速。

## 4. 社区热点

今日讨论度最高的 Issue 集中反映了用户对**消息可靠性和状态一致性的强烈担忧**。

- **#121058 [CLOSED] Silent reply failures still recurring**（96 评论）：这是今日讨论度最高的话题。用户 `sloptop-the-terrible` 报告了在 #116277 被关闭后，静默回复失败的问题依然存在。这引发了社区对修复有效性的质疑，是当前最尖锐的信任危机点。链接：https://github.com/openclaw/openclaw/issues/121058
- **#116201 Realtime voice work can retain unbounded provider and consult state**（66 评论）：一个关于实时语音会话状态无限增长的高优问题，被标记为 `P1` 和 `diamond lobster` 等级，说明其严重性和复现确定性都很高。链接：https://github.com/openclaw/openclaw/issues/116201
- **#7707 Feature Request: Memory Trust Tagging by Source**（53 评论）：这是一个非常受欢迎的功能请求，社区热切希望为记忆条目增加信任层级，以抵御通过网页或第三方技能进行的记忆投毒攻击。标签 `off-meta tidepool` 表明这是一个长期存在但未获得明确产品决策的议题。链接：https://github.com/openclaw/openclaw/issues/7707

**分析**：这些热点背后，是用户对 OpenClaw 作为生产力工具的"可靠性"和"安全性"的核心诉求。聊天界面再美观，也无法弥补消息丢失带来的信任损害。

## 5. Bug 与稳定性

今日报告的 Bug 数量众多，且高严重度问题（P1, P2）占比很高。以下是按严重程度排列的重点问题：

**严重（P1 & 数据/消息丢失）**

- **#121058** Silent reply failures still recurring（[链接](https://github.com/openclaw/openclaw/issues/121058)）: **P1, 消息丢失**。高优问题修复后复现，信任危机。
- **#25592** Text between tool calls leaks to messaging channels（[链接](https://github.com/openclaw/openclaw/issues/25592)）: **P1, 信息安全**。代理内部处理文本被错误发送到消息渠道，存在隐私泄露风险。
- **#44925** Subagent completion silently lost（[链接](https://github.com/openclaw/openclaw/issues/44925)）: **P1, 数据丢失**。子代理任务完成状态丢失，导致任务状态不可靠。已有大量用户`👍`。

**回归 & 性能**

- **#119087** Gateway cold start regressed ~2.5x（[链接](https://github.com/openclaw/openclaw/issues/119087)）: **P1, 性能回归**。新版本启动时间显著变慢。
- **#86684** sessions_yield subagent wake can compact parent branch（[链接](https://github.com/openclaw/openclaw/issues/86684)）: **P1, 会话状态损坏**。子代理唤醒可能导致父会话被意外压缩。
- **#90711** launchd plist StandardErrorPath hardcoded to /dev/null（[链接](https://github.com/openclaw/openclaw/issues/90711)）: **P2, 可观测性**。macOS 上所有 Gateway 错误日志被丢弃，严重影响问题诊断。
- **#74378** OpenClaw CLI commands remain alive as node.exe on Windows（[链接](https://github.com/openclaw/openclaw/issues/74378)）: **P2, 平台缺陷**。Windows 上 CLI 进程无法退出。

**其他值得关注的 Bug**

- **#82662** Isolated cron agentTurn fails with 'setup timed out before runner start'（[链接](https://github.com/openclaw/openclaw/issues/82662)）: **P2**。Cron 任务在执行前就失败，且所有备用模型（fallback）均无效。
- **#43374** All LLM API calls time out simultaneously（[链接](https://github.com/openclaw/openclaw/issues/43374)）: **P1**。多代理并发时，内部超时机制疑似存在死锁或阻塞。

**已有 Fix PR 关联的 Bug**：部分 P1 问题（如 #41744、#90098、#90944、#94939、#120735 等）已有关联的开放 PR，但这些 PR 大多状态为"waiting on author"，修复尚未落地。

## 6. 功能请求与路线图信号

社区的功能需求呈现出**从基础功能向高级治理能力演进**的趋势：

- **记忆安全与信任**：Issue #7707（[Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)）获得 53 条评论和极高的关注度，标志着用户开始关注长期记忆被污染的威胁。这很可能成为下一阶段 `memory-core` 插件的重点演进方向。
- **系统可观测性与运维**：Issue #6599（[Add /models test-fallback command](https://github.com/openclaw/openclaw/issues/6599)）和 Issue #45758（[Support YAML as config file format](https://github.com/openclaw/openclaw/issues/45758)）反映了用户对更好运维体验的诉求。YAML 配置的呼声一直很高。
- **更细粒度的交互控制**：Issue #44309（[Add one-way dispatch mode for A2A handoffs](https://github.com/openclaw/openclaw/issues/44309)）和 Issue #66252（[Per-Agent TTS/STT Configuration Overrides](https://github.com/openclaw/openclaw/issues/66252)）体现了用户在特定场景（如自动化和多语言环境）下对精细化控制的需求。
- **外部集成**：Issue #26037（[Ali bailian coding plan support](https://github.com/openclaw/openclaw/issues/26037)）等，反映了用户对更多国内云服务商集成的渴望。

**路线图信号**：当前合并/活跃的 PR 主要集中在 UI 层面，这是一个强信号，表明下一版本的重点是**提升用户交互体验**。而上述功能请求大多是 `needs-product-decision` 状态，说明它们尚在评估阶段，可能不会在短期内实现。

## 7. 用户反馈摘要

- **核心痛点集中**：从今日的 Issues 中可以明显看出，用户最大的不满集中在**消息静默丢失**（#121058）、**子代理状态不可靠**（#44925)和**会话状态混乱**（#86684）这三个问题上。有用户在 #121058 中表达了对修复有效性的怀疑，这种情绪的积累对项目口碑有负面影响。
- **对透明度和可控性的需求**：Issue #90711 关于 stderr 日志被丢弃的反馈，体现了高级用户希望拥有更强大的排错能力。Issue #123799 请求为受影响的生产环境提供回滚或修复指导，也反映了用户对官方运维支持的急切需求。
- **积极反馈**：虽然 Bug 居多，但像 #7707 这样的功能请求能获得大量正面响应，说明用户对项目的发展方向是认可且有很高期待的。UI 系列 PR 的大量涌现也侧面说明用户对当前界面的改进有较高呼声。

## 8. 待处理积压

以下事项长期未获得关键性进展，提醒维护者关注：

- **安全/稳定性高危问题**：
    - **#25592** [Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592) (P1, 安全) - 已开放近6个月。
    - **#90944** [sessions_yield resume reply recorded but not delivered](https://github.com/openclaw/openclaw/issues/90944) (P1, 消息丢失) - 已有 PR 但处于等待作者状态。
    - **#43374** [All LLM API calls time out simultaneously](https://github.com/openclaw/openclaw/issues/43374) (P1) - 长期未解决。
    - **#82662** [Isolated cron agentTurn fails with 'setup timed out'](https://github.com/openclaw/openclaw/issues/82662) (P2) - 已开放3个月。
- **长期未决的功能请求**：
    - **#7707** [Feature Request: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) (P2) - 社区呼声高，无明确行动项。
    - **#26037** [Ali bailian coding plan support](https://github.com/openclaw/openclaw/issues/26037) (P2) - 长期需求，受众多。

---

**总结**：OpenClaw 项目今日的社区活跃度极高，但热度主要由 Bug 讨论驱动。项目在 UI 体验层面的投入有目共睹，但**核心运行时稳定性和数据可靠性问题正在成为影响用户信任的关键短板**。建议项目维护者在推进 UI 重构的同时，优先调配资源解决 `P1` 级别的消息丢失、状态损坏和严重回归问题，并回应用户对于沟通和修复透明度的期待。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-16**
**数据范围：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、Moltis、CoPaw、ZeroClaw 等 11 个项目**


## 1. 生态全景

个人 AI 助手开源生态正处于**从"对话工具"向"自主工作系统"转型的关键阶段**——头部项目（OpenClaw、ZeroClaw、Hermes）不再比拼基础对话能力，而是围绕**消息可靠性、多代理协作、记忆持久化/安全、渠道（IM/Web/桌面端）适配、以及与主流 AI 生态（OpenAI/Anthropic）的兼容层**展开深度竞争。高性能项目日 PR 更新量达 50 条以上，且普遍面临"功能迭代速度 vs 核心运行时稳定性"的矛盾——消息静默丢失、子代理状态不可靠、日志可观测性差等问题在 OpenClaw、Hermes、LobsterAI 等多项目间同时出现。与此同时，一批小型项目（Moltis、CoPaw、NanoClaw）在安全加固、连接器接入、多渠道管理中展现出清晰的差异化路径。


## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 PR | Release | 健康度评估 | 阶段判断 |
|------|-----------|---------|------------|---------|-----------|----------|
| **OpenClaw** | 500 | 500 | 51 | v2026.8.1-beta.2 | ⭐⭐⭐☆ | 快速迭代但稳定性承压 |
| **ZeroClaw** | 50 | 50 | 6 | 无 | ⭐⭐⭐ | 高速开发、吞吐瓶颈 |
| **Hermes Agent** | 50 | 50 | 多（具体未计） | 无 | ⭐⭐⭐⭐ | 稳定修复+体验增强 |
| **IronClaw** | 27 | 12 | 5 | 无 | ⭐⭐⭐⭐ | 性能优化周期 |
| **NanoClaw** | 0 | 22 | 3 | 无 | ⭐⭐⭐⭐ | 功能加速扩展 |
| **Moltis** | 2 | 16 | 14 | 无 | ⭐⭐⭐⭐⭐ | 高产出、安全加固 |
| **NanoBot** | 3 | 16 | 7 | 无 | ⭐⭐⭐⭐ | 质量巩固+功能迭代 |
| **LobsterAI** | 18 | 6 | 2 | 无 | ⭐⭐☆ | 维护活跃度下降 |
| **CoPaw** | 8 | 11 | 0 | 无 | ⭐⭐⭐☆ | 社区活跃、合入延迟 |
| **PicoClaw** | 0 | 2（stale） | 0 | 无 | ⭐⭐☆ | 轻度维护 |
| **NullClaw** | 1 | 1 | 0 | 无 | ⭐⭐⭐ | 稳定低速迭代 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | 无 | 不适用 | 无活动 |

> 注：Hermes Agent 合并/关闭 PR 数未明确统计，但从文本描述判断超过 10 条，含 computer_use 批量修复与 CLI 功能 PR。


## 3. OpenClaw 在生态中的定位

**生态"中心参照物"**——多数项目（LobsterAI、NanoBot 频道设计、PicoClaw/NanoClaw/NullClaw 命名逻辑）均明确或隐式以 OpenClaw 架构为参考。

**相对优势：**
- **体量与社区规模断层第一**：日 500 条 Issue/PR 更新，为第二名（50 条）的 10 倍；UI 重构 PR 数量冠绝生态
- **渠道适配广度领先**：已覆盖消息网关、Gateway RPC、Control UI 三端，并持续增强 CLI（secret egress host binding 等安全机制）
- **生态衍生力强**：直接催生了 PicoClaw/NanoClaw/NullClaw/ZeptoClaw 等命名系项目及 LobsterAI 等 GUI 封装

**技术路线差异：**
- OpenClaw 采用**"厚重运行时 + 全方位渠道接入"**路线，功能包罗万象，但随之而来的是消息丢失（#121058）、会话状态混乱（#86684）等稳定性短板
- **ZeroClaw** 同样体量大，但更倾向于**架构标准化先行**（RFC 驱动的设计，已覆盖 Chat Completions 兼容层、会话边界、安全框架），相较之下"设计规范性"更强
- **Hermes** 则走**"桌面/CLI 优先"**的路线，不强调多渠道 IM，但将终端体验打磨得非常精细（#87346 终端感知 continue、#87345 跨工具会话导入）

**社区对比：**
- 体量：OpenClaw（500条/日）≫ ZeroClaw（50条/日）≈ Hermes（50条/日）> Moltis（16条/日）
- 用户情绪：OpenClaw 用户对消息丢失的"信任危机"最严重（#121058 的 96 条评论），而 Hermes 用户对 `computer_use` 桌面控制功能关注度最高

**定位总结：** OpenClaw 是生态的**"默认选择"**——功能最全、社区最大，但"大而全"也使其在核心稳定性上面临最大挑战。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **消息/状态可靠性** | OpenClaw（#121058 静默回复失败）、LobsterAI（#1849 无限 NO_REPLY）、NanoBot（#5377 consolidation 丢历史）、CoPaw（#8623 ACP 通知竞态） | 消息静默丢失、任务完成状态丢失、状态同步不一致是跨项目最尖锐的共性问题 |
| **多代理协作可靠性** | OpenClaw（#44925 子代理完成丢失）、LobsterAI（#2234 cron 子代理 finalization）、ZeroClaw（#9487 Runtime-owned sessions） | 子代理/subagent 的生命周期管理和状态回传机制成为高优痛点 |
| **记忆持久化与安全** | OpenClaw（#7707 记忆信任标记）、NanoBot（#5402 token 估算偏差致记忆永不合并）、LobsterAI（#2046 记忆体系）、ZeroClaw（#9103 记忆存储与 enrichment 分离） | 用户开始关注"长时间记忆"的可靠性（是否真的在存）、安全性（投毒/越权）与可控性（合并触发是否合理） |
| **LLM 推理成本与缓存** | PicoClaw（#3321 前缀缓存优化）、NullClaw（#987 prompt 缓存+工具输出压缩）、IronClaw（#7628 心跳开销削减） | 降低长会话/高频交互场景的 token 消耗，前缀缓存命中率成为热点 |
| **可观测性与可诊断性** | OpenClaw（#90711 stderr 被丢到 /dev/null）、Hermes（#83683 重启后网关状态不可诊）、ZeroClaw（#9470 fallback 用量归因错误）、NanoBot（#5376 Cron 调度器静默死掉） | 用户希望"看到系统内部发生了什么"，而不仅是"能对话" |
| **安全加固** | Moltis（#1180 zip 路径穿越防护、#1179 配对签名验证）、ZeroClaw（#8713 SSRF 防护）、OpenClaw（#25592 内部文本泄漏）、NanoBot（#5369 插件缓存越权） | 恶意文件、SSRF、权限绕过是当前安全报告的 Top 类型，且已有多个修复落地 |
| **生态兼容层** | ZeroClaw（#8603 Chat Completions 兼容 profile）、Hermes（#87345 导入 Claude Code/Codex 会话） | "能否与主流 AI 工具链无痛互通"正在成为新用户的隐性前提 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|------|----------|----------|--------------|
| **OpenClaw** | 全能型个人 AI 助手（多渠道、多会话、插件化） | 大众/重度技术用户 | 大而全的运行时；Gateway RPC 中枢；积极重构 Control UI |
| **Hermes Agent** | 桌面端（macOS/Windows）优先的代码助手 | 开发者/技术写作者 | CLI 深度优化（终端感知、会话导入）；`computer_use` 桌面控制强；cua-driver |
| **IronClaw** | 进程级 agent 运行时（Rust 实现） | 高性能/嵌入式场景 | 性能极致优化（心跳、touch、索引写入均有量化目标）；消息队列 |
| **ZeroClaw** | 面向未来的 Agent 框架 | 架构敏感型开发者 | RFC 驱动标准化；OpenAI 生态兼容层；安全/凭据边界顶层设计 |
| **NanoBot** | 轻量级多渠道助手 | 个人开发者 | WebUI 协作（by-mentions、拖拽分组）、provider 扩展（DashScope、OrcaRouter） |
| **Moltis** | 安全优先的自我托管助手 | 注重隐私的个体/小团队 | 安全加固（zip/配对签名）；远程沙箱（Coder）；持久化日历/邮件连接器 |
| **CoPaw** | 数据分析/工作流导向的 AI 助手 | 数据从业者 | DataPaw 数据分析工作区；Matrix 渠道 e2e；OAuth2 MCP 集成 |
| **NanoClaw** | 多渠道个人助手（Telegram 优先） | 轻量级用户 | 消息队列/插件化；跨会话上下文；可插拔钩子机制 |
| **LobsterAI** | OpenClaw 的 GUI 桌面封装 | 网易生态用户/非 CLI 用户 | 桌面端 + 网易模型集成；依赖上游 OpenClaw 核心 |
| **PicoClaw / NullClaw / ZeptoClaw / TinyClaw** | OpenClaw 微型变体/学习型实现 | 低功耗设备/教学用途 | 轻量级实现；关注依赖升级与基础优化 |


## 6. 社区热度与成熟度分层

**Tier 1 — 极高速迭代（日 PR/Issue ≥ 50）**
- **OpenClaw**：社区讨论量生态第一，但负面情绪（稳定性信任）与正面期待并存
- **ZeroClaw**：技术讨论深度极高（RFC 驱动），但 PR 合并吞吐不足（44 条滞留）
- **Hermes Agent**：活跃且稳定，批量修复的合并效率高，社区质量高

**Tier 2 — 中速质量巩固（日 PR/Issue 10–30）**
- **IronClaw**：系统性地推进性能优化，Bug 闭环率高
- **NanoBot**：Bug 修复和新增功能并重，质量管控良好
- **NanoClaw**：核心团队高活跃度，功能加速扩展中
- **Moltis**：项目整体健康度最高（14/16 PR 合并率），安全加固成效显著
- **LobsterAI**：社区仍有反馈但维护响应明显放缓（多数 Issue 被 stale 关闭）

**Tier 3 — 低速/轻度维护（日 PR/Issue < 10）**
- **PicoClaw**：轻度维护期，有重要 PR 积压（*WhatsApp 通道停摆*未修复）
- **NullClaw**：稳定低速，聚焦长任务优化
- **TinyClaw / ZeptoClaw**：无活动


## 7. 值得关注的趋势信号

**① "静默失败"是当前生态最大的信任杀手**
消息丢失、子代理完成丢失、`view_video` 静默失败、CRON 静默死掉——OpenClaw、LobsterAI、CoPaw、NanoBot 等同时出现同类问题。**对 AI Agent 开发者而言，未来 3-6 个月，谁能优先建立"全链路可观测 + fail-loud（失败时明确报错，而非静默吞掉）"机制，谁就能赢得用户信任**。

**② 记忆体系进入"深水区"——从"能记住"走向"会安全地记住"**
OpenClaw（#7707 记忆信任标记）和 NanoBot（#5402 token 估算失效、#5377 合并丢历史）同时面临记忆可靠性问题。用户的诉求已从"Agent 是否记得我"升级为"记忆是否被正确管理、能否防投毒、能否在合并时不丢数据"。

**③ "Prefix Cache 友好"成低成本 LLM 应用的设计原则**
PicoClaw（#3321）与 NullClaw（#987）同一天提交"动态上下文后移/拆分"方案，IronClaw 也在做心跳写入削减。**这标志着开源 Agent 项目已开始将 LLM 推理成本（缓存命中、token 优化）纳入架构设计的第一性原理**，而非事后优化。

**④ 安全不再是"加分项"，而是"硬门槛"**
Moltis 贡献者明确表示"我想用 Moltis，但我需要先解决几个安全问题"——这种态度代表了主流用户对自我托管 Agent 的期待。SSRF、zip 路径穿越、文件写入、OAuth 凭证轮换（CoPaw #7053）成为多个项目同时修补的高危安全面。

**⑤ 跨工具/生态互操作成为新兴需求**
ZeroClaw 的 Chat Completions 兼容层（#8603）、Hermes 的 Claude Code/Codex 会话导入（#87345）——**用户不希望被锁定在单一工具链**，与主流 AI 生态的无痛互通正在成为新项目的"隐形入场券"。

**⑥ Channel 适配从"连通"走向"打磨"**
Hermes `computer_use` 批量修复、CoPaw Matrix e2e、Moltis Slack 原生任务卡片、NanoClaw Telegram 集成——只做到 "消息能通" 已不够，**用户开始期待渠道原生的交互形态**（富卡片、加密、端到端体验一致）。

---

*报告基于 2026-08-16 GitHub 公开数据生成，供技术决策者与开发者参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-16

## 今日速览

过去24小时内 NanoBot 项目保持高活跃度：共产生 16 条 PR 动态和 3 条 Issue 更新，其中 7 个 PR 已合并/关闭，2 个新 Bug 被提交（#5402 为关键 token 估算问题）。WebUI 体验优化与 provider 扩展是当前双主线：Mentions 协作、拖拽整理、临时侧边会话等新功能相继提交，DashScope 原生协议与 OrcaRouter 网关持续丰富 provider 生态。Bug 修复集中在会话数据一致性、插件缓存失效和 Cron 调度器健壮性等稳定性方向。整体来看，项目正处于功能加速迭代与稳定性加固并行的健康轨道上。

---

## 版本发布

过去24小时内无新版本发布。

---

## 项目进展

### 已合并/关闭 PR 摘要

**WebUI 交互体验修复**

- **[#5371 [CLOSED] fix(webui): hide assistant actions until turn end](https://github.com/HKUDS/nanobot/pull/5371)** — 修复 Agent turn 尚未结束时，复制/分叉按钮提前出现的完成信号冲突问题。由 Issue #5368 驱动，已闭环。
- **[#5397 [CLOSED] fix(webui): preserve range selection and turn timing](https://github.com/HKUDS/nanobot/pull/5397)** — 侧边栏批量删除支持 macOS 风格 Shift 范围选择；保持进行中 Agent turn 的时间线与身份一致性。
- **[#5399 [CLOSED] fix(webui): clarify model preset display names](https://github.com/HKUDS/nanobot/pull/5399)** — 区分 model preset 的展示名与稳定 `/model` 命令名，编辑时明确展示。

**稳定性和安全性**

- **[#5369 [CLOSED] fix(plugins): revalidate cached skill roots after package changes](https://github.com/HKUDS/nanobot/pull/5369)** — 修复插件包原地更新后，受限项目仍可读取旧缓存 skill 目录的安全漏洞。
- **[#5370 [CLOSED] fix(agent): bound per-session file state lifecycle](https://github.com/HKUDS/nanobot/pull/5370)** — 修复 `FileStateStore` 在 API/临时会话高基数场景下无界增长的内存泄漏；并处理 `/new` 后旧状态残留问题。
- **[#5376 [CLOSED] fix(cron): keep scheduler alive when job-store persistence fails](https://github.com/HKUDS/nanobot/pull/5376)** — 修复 `_save_store()` 异常会静默杀死整个 Cron 调度器的严重稳定性 bug。

**新增 Provider**

- **[#5328 [CLOSED] feat(providers): add OrcaRouter as a named gateway provider](https://github.com/HKUDS/nanobot/pull/5328)** — 新增 OrcaRouter 网关 Provider，单端点接入 150+ 模型（OpenAI、Anthropic、Google、DeepSeek、Qwen 等）。

**小结：** 今日合并的 7 个 PR 中，4 个为 Bug/稳定性修复，2 个为 WebUI 交互优化，1 个为新 Provider 接入。项目的文件状态生命周期管理、Cron 调度器健壮性、插件缓存安全均获得实质加固。

---

## 社区热点

### 讨论热度最高

- **[#5377 [OPEN] Bug: consolidation truncates archive input but advances past the full message batch](https://github.com/HKUDS/nanobot/issues/5377)** — 2 条评论
  - **诉求分析：** 该 Bug 指向记忆合并逻辑的核心矛盾：截断后的存档与实际推进的游标不一致，导致对话历史静默丢失。社区对该问题的关注直接催生了 PR #5379（无损分块合并方案），属于记忆系统方向的深水区问题。

### 值得关注的新提交

- **[#5402 [OPEN] [bug] Token consolidation never triggers — tiktoken estimation consistently underestimates actual API token count](https://github.com/HKUDS/nanobot/issues/5402)** — 今日新提交
  - 该 Issue 直指 token 估算与 API 实际统计的系统性偏差，可能导致记忆合并完全失效。若确认，影响面较大（所有依赖 token 阈值的触发机制），是今日最值得跟踪的动态。

---

## Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| **高** | [#5402](https://github.com/HKUDS/nanobot/issues/5402) | tiktoken 估算系统性低估实际 API token 数，导致 consolidation 永不触发 | 新提交，**无 fix PR** |
| **高** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | Consolidator 截断输入但推进游标越过全量批次，造成历史静默丢失 | 有修复 PR：[#5379](https://github.com/HKUDS/nanobot/pull/5379) |
| **中** | [#5368](https://github.com/HKUDS/nanobot/issues/5368)（已关闭） | WebUI 在 Agent turn 运行中提前显示 copy/fork 操作 | 已修复：[#5371](https://github.com/HKUDS/nanobot/pull/5371) |
| **中** | [#5376](https://github.com/HKUDS/nanobot/pull/5376)（已合并） | 单个持久化错误导致 Cron 调度器永久停止 | 已修复 |

**重点关注：** #5402（token 估算偏差）目前没有对应修复 PR，且其影响可能波及整个记忆合并机制，建议维护者优先评估。

---

## 功能请求与路线图信号

**待合并 PR 中的新功能指向：**

- **[#5358 feat(webui): add session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358)** — 为 WebUI 会话引入稳定的 `@name` 体系，支持跨会话 Mention 协作。这是向多会话协同工作流迈出的重要一步，未来可能演变为团队共享/协作功能的基础设施。
- **[#5364 feat(webui): add temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)** — `/side` 临时侧边会话，支持多标签隔离、独立草稿/流式状态、与主会话并行发送。
- **[#5389 feat(webui): add drag-and-drop session organization](https://github.com/HKUDS/nanobot/pull/5389)** — 拖拽式会话排序与分组（拖拽一个会话到另一个上创建分组）。
- **[#5398 feat(providers): add DashScope (Bailian) native protocol support](https://github.com/HKUDS/nanobot/pull/5398)** — 阿里云百炼原生协议支持，解锁思考模式等兼容模式不可用的完整参数面。
- **[#5400 refactor(models): unify preset names](https://github.com/HKUDS/nanobot/pull/5400)** — model preset 统一规范命名，为用户重命名提供内联反馈与持久化迁移。

**路线图信号：** 三个 WebUI 功能 PR（#5358、#5364、#5389）共同描绘了会话管理从"平铺列表"走向"组织化、可协作、可并行"的演进方向。结合之前的 WebUI 大版本迭代（#5364 标注 conflict，与 #5389 存在合并冲突），推测 v0.4 之后的版本将重点打磨会话工作台体验。

---

## 用户反馈摘要

- **记忆合并静默丢历史（#5377）：** 用户 dajiaohuang 反馈即使启用合并，被截断的消息后缀也会从对话中消失且无法恢复。该反馈直接推动了 #5379 的"无损分块 + 失败时保留原始回退"方案设计，体现了用户对数据完整性的强烈诉求。
- **token 估算偏差（#5402）：** 用户 Xcc313r4n7 报告在长对话场景中，API 实际用量远超本地估算，合并从未触发，导致上下文无限膨胀。这类问题在高频长会话用户中影响明显。
- **插件更新残留风险（#5369）：** yu-xin-c 修复了插件原地升级后旧文件仍可被读取的权限绕过问题。该修复回应了安全敏感用户对项目隔离边界的关注。

---

## 待处理积压

**长期未响应的重要 PR：**

- **[#5291 [OPEN] fix(agent): persist subagent conversation transcripts](https://github.com/HKUDS/nanobot/pull/5291)** — 创建于 08-07，已 9 天无合并进展。子代理完整会话转录（工具调用、推理步骤）持久化的能力，对调试和审计工作流有较高价值。
- **[#5271 [OPEN] fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)** — 创建于 08-06，已 10 天待合并。该 PR 修复 `/new` 生命周期替换后陈旧后台任务覆盖会话数据的问题，涉及数据安全，建议优先审查。

**待关注冲突：**

- **[#5364](https://github.com/HKUDS/nanobot/pull/5364) 与 [#5389](https://github.com/HKUDS/nanobot/pull/5389)** 同时标注 `conflict`，两者均涉及 WebUI 会话管理，合并时需协调冲突，避免功能重叠或相互覆盖。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我为您呈上 Hermes Agent 项目在 2026-08-16 的项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-08-16

## 1. 今日速览

今日 Hermes Agent 项目活跃度极高，呈显著上升态势。过去 24 小时内，Issue 与 PR 更新均达到 50 条，其中有 41 条新开/活跃 Issue，35 个 PR 待合并，说明社区参与度和项目开发节奏都非常快。值得关注的是，多个长期悬而未决的 `computer_use` / `cua-driver` 相关问题（如 macOS `display_count=0`、占位符 `pid=0` 等）在今日被集中修复或关闭，同时有多个针对 CLI 体验（`--continue`、会话导入、Picker 增强）的 PR 被合并，项目整体在稳定性和易用性上均有明显迈进。此外，P1 级别的回归 Bug（如桌面端重启后网关不拉起）也已关闭，表明维护团队响应迅速、修复高效。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 主要聚焦于 **`computer_use` 工具链的稳定性** 和 **CLI 交互体验的增强**。

- **`computer_use` 修复集大成**：PR #87333 的合并是今日最重要的进展，它一次性解决了两个已知的顽固 Bug：
    - **占位符 ID 问题 (salvage #81340)**：修复了模型输出 `pid=0/window_id=0` 等占位符导致所有应用级截图（capture）静默失败的问题，并将 #81333 关闭。
    - **macOS 零显示 (salvage #52949, #67259)**：为 macOS 上 ScreenCaptureKit `display_count=0`（常见于合盖或休眠的 Mac mini）提供了诊断与可操作报错，而非静默返回 0x0 图片，并将 #67165 关闭。
    - 相关合并还包含 PR #39262、#52142、#63537 等，共同构成了对 `computer_use` 子系统的一次全面巩固。
    - 链接：[PR #87333](https://github.com/NousResearch/hermes-agent/pull/87333), [PR #81340](https://github.com/NousResearch/hermes-agent/pull/81340), [PR #52949](https://github.com/NousResearch/hermes-agent/pull/52949), [PR #67259](https://github.com/NousResearch/hermes-agent/pull/67259)

- **CLI 会话管理增强**：`teknium1` 贡献了多个提升开发体验的 PR：
    - **`--continue` 支持终端感知 (PR #87346)**：`hermes -c` 现在会恢复当前终端（tty/tmux pane）专属的会话，而不是全局最近的会话，使得多窗格并行工作成为可能。
    - **导入外部会话 (PR #87345)**：新增 `hermes sessions import`，可直接导入 Claude Code 或 Codex CLI 的会话记录，降低用户迁移成本。
    - **会话 Picker 升级 (PR #87352)**：为交互式会话选择器增加了生命周期状态、消息数显示和删除功能。
    - 链接：[PR #87346](https://github.com/NousResearch/hermes-agent/pull/87346), [PR #87345](https://github.com/NousResearch/hermes-agent/pull/87345), [PR #87352](https://github.com/NousResearch/hermes-agent/pull/87352)

- **修复测试 flake (PR #87337)**：修复了 `test_sequential_tool_timeout` 由于线程调度竞争导致的随机失败，维护了 CI 的稳定性。
    - 链接：[PR #87337](https://github.com/NousResearch/hermes-agent/pull/87337)

## 4. 社区热点

- **Issue #78647 (已关闭)**：这是一个关于大型文件分解的长达 20 个任务的 Epic，共获得 79 条评论。它反映了社区对代码库健康的强烈关注，以及对 "god-file" 重构的坚定共识。该问题的关闭标志着该项重构工作圆满完成。
    - 链接：[Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647)

- **Bug 修复的高讨论度 (Issue #83683 等)**：桌面端重启导致网关被杀且不重启的 P1 级回归 (#83683) 获得 33 条评论，说明该问题影响范围广且严重。该问题今日已关闭，但相关讨论和后续验证仍值得关注。类似的，Windows 平台 `hermes update` 因 `_rust.pyd` 文件锁而失败的问题（#83569、#77394）也持续获得关注，是 *nix 与 Windows 平台差异带来的典型痛点。

- **长期吐槽点 (Issue #8457)**：关于持久化会话记忆和跨会话搜索的功能请求已开放长达 4 个月，并持续获得 21 条评论。这表明用户对“有状态”Agent 的呼声很高，是未来产品规划中不容忽视的方向。
    - 链接：[Issue #8457](https://github.com/NousResearch/hermes-agent/issues/8457)

## 5. Bug 与稳定性

今日 Bug 清单呈现“两头热”的局面：既有来自维护团队的批量修复，也有用户报告的新问题。

- **已修复/关闭（P1/P2）**：
    - [关闭] [P1] 桌面端重启导致网关失效 (#83683) - 已关闭，修复有效。
    - [关闭] [P1] Windows 更新因 `cryptography._rust.pyd` 自锁失败 (#83569)。
    - [关闭] [P1] Agent flush 后不持续会话，并误报“磁盘已满” (#82001)。
    - [关闭] [P2] macOS `computer_use` 静默失败 (#67165) - 修复已合并。
    - [关闭] [P2] `computer_use` 误判占位符 ID (#81333) - 修复已合并。

- **新报告（P1/P2）**：
    - **P2**：安全相关的超时误判问题（#81048）——审批超时被系统误判为用户拒绝，这是 Tier 1 级安全关键的决策归属 Bug，需要尽快修复。
    - **P2**：OAuth MCP 服务器（如 Honeycomb）在会话中掉线并挂起 120 秒（#49543），该问题已存在近两个月，今日又有更新，表明其复现路径较为复杂。
    - **P1 (由#83569衍生)**：#77394 指出 `hermes update` 在暂停网关后依然失败，因为修复未涵盖重新生成的网关进程。

- **Bug 修复 PR 列表**：
    - [已合并] fix(computer-use): placeholder-id targeting + macOS zero-display diagnosis (#87333)
    - [待审查] fix(discord): honor rate limits when auto-creating threads (#87358)
    - [待审查] fix(cron): fail-open the executions ledger on conscious interruption (#87351)
    - [待审查] fix(webhook): authenticate Linear deliveries via linear-signature HMAC (#87355)

## 6. 功能请求与路线图信号

今日没有新的重量级 Feature Request 提出，但以往的功能请求正在通过 PR 逐步落地，揭示了清晰的路线图信号：

- **多平台会话互操作**：PR #87345 (导入 Claude Code / Codex 会话) 的合并，表明项目有意降低从其他工具迁移的门槛，打造更开放的生态。
- **精细化的终端/窗口级状态管理**：PR #87346 (`--continue` 支持终端感知) 显示项目在向“多任务并行”和“复杂工作流”场景深入发展。
- **后台审查预算可配置**：PR #87353 (background-review 预算可调) 直接响应用户对资源控制的需求，此类小而精的优化在近期 PR 中屡见不鲜。
- **桌面端持续完善**：PR #87349、#63598 为嵌入式浏览器添加了 URL 工具栏和导航控件，表明桌面端体验被持续打磨，并可能成为未来重点发展的方向。

## 7. 用户反馈摘要

- **对 Windows 用户体验不佳**：多条 Windows 平台问题（#83569, #77394, #87329, #51327）累积了负面反馈。核心集中在更新流程（文件锁）、桌面端启动（sandbox 权限）和 OAuth 回调端口冲突上。用户对“安装/更新”环节的稳定性要求很高，这些问题的高频出现（尤其 #83569 与 #77394 为同类问题）表明 Windows 平台的兼容性需要更多投入。
- **对 `computer_use` 稳定性的高需求**：`computer_use` / `cua-driver` 相关的多个问题（#67165, #81333）得到大量用户与维护者的互动和修复，说明该功能（作为 Agent 操作外部世界的能力）是社区高度关注的核心功能，用户对它的期望值很高。
- **对“持续工作流”的向往**：Issue #8457 (跨会话持久记忆) 和 PR #87346 (#continue 支持终端感知) 表明，用户渴望 Agent 能够扮演更持久、更连贯的战略角色，而不仅仅是简单的对话工具。

## 8. 待处理积压

以下问题持续未解决，建议维护者关注：

- **P1 (安全)**：[Issue #81048](https://github.com/NousResearch/hermes-agent/issues/81048): Approval timeout misattributed as explicit user denial。安全问题优先级最高，需尽快决定处理方案。
- **P1**：[Issue #77394](https://github.com/NousResearch/hermes-agent/issues/77394): Windows: hermes update still fails on main (pause gateway doesn't release `_rust.pyd`)。修复不彻底，已列入待办。
- **P2 (高关注)**：[Issue #49543](https://github.com/NousResearch/hermes-agent/issues/49543): OAuth MCP servers drop from toolset mid-session (RuntimeError + hang)。长时间未修复，影响生产环境下的 Agent 可靠性，今日有用户更新反馈，应引起重视。
- **P2**：[Issue #87329](https://github.com/NousResearch/hermes-agent/issues/87329): `hermes mcp login` OAuth callback port collision。这是 v0.20.1 的回归，影响 headless 主机上的集成体验。已标记为与 #5344 相关，需快速定位回归原因。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-16**  
**数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度偏低，过去24小时内无新 Issues 产生，无版本发布，仅有2条待合并的 PR（编号 #3320 和 #3321），且均处于 stale 状态。两条 PR 都集中在通道适配性与性能优化上——一条解决 WhatsApp 客户端版本过期导致的连接掉线问题（#3320），另一条优化系统提示词上下文排序以提升前缀缓存命中率（#3321）。项目目前处于轻度维护期，核心维护者可能将精力集中在积压 PR 的评审与合并上。整体健康度稳定，但社区互动量有所下降，建议关注 stale 标记的 PR 以避免被自动关闭。

---

## 3. 项目进展

今日无 PR 被合并或关闭，但存在两条待合并 PR，均标记为 stale（搁置中），值得维护者优先处理：

| PR | 内容 | 状态 | 影响 |
|----|------|------|------|
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | **fix(agent): 动态上下文后移以保留前缀缓存** — 将`## Current Time`、`## Runtime`等动态上下文块从系统提示词前部移至对话历史之后，避免因动态令牌变更导致前缀缓存全部失效 | 待合并，stalel | 直接关系到 LLM 推理成本和响应延迟，对高频交互场景有显著性能价值 |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | **fix(deps): 升级 whatsmeow 依赖以解除 WhatsApp "Client outdated (405)" 错误** — 当前固定的 whatsmeow 版本被 WhatsApp 官方拒绝，导致本地 WhatsApp 通道持续掉线 | 待合并，stale | 影响 WhatsApp 渠道的可用性，属于功能性修复 |

上述两条 PR 分别代表了架构级优化（缓存策略）与保障类修复（通道稳定性），若合并将为项目带来实质性的质量提升。

---

## 4. 社区热点

今日活跃度为零，无新讨论热点产生。两条 stale PR 虽更新时间在昨日（08-15），但评论数均为 0，说明社区关注度不足，或维护者评审进度缓慢。建议维护者主动在 PR 评论区更新评审状态，以提升社区信心。

---

## 5. Bug 与稳定性

**【高严重度】WhatsApp 通道完全不可用**  
- **现象**：WhatsApp 服务端拒绝 PicoClaw 当前所广告的客户端版本，Socket 连接后约5秒内被断开，错误码 `405 (Client outdated)`，且不会自动重连，导致 WhatsApp 原生通道持续失效  
- **关联 PR**：[#3320](https://github.com/sipeed/picoclaw/pull/3320) 已提交修复（升级 whatsmeow 依赖），但处于 stale 状态，未合并  
- **影响范围**：所有使用 WhatsApp 通道的用户  
- **缓解措施**：升级已现成，等待维护者合并或手动指定新依赖版本

未发现其他崩溃或回归类问题。

---

## 6. 功能请求与路线图信号

今日无新的功能请求 Issue 产生。但 #3321 中涉及的动态上下文位置调整方案，反映了项目对 **LLM 前缀缓存优化**的重视——这可能是后续版本性能优化的核心方向。该 PR 若合并，将作为基础设施层面的改进，为未来更复杂的多会话交互场景铺路。结合项目当前的 PR 集中度，推测下一版本或重点包含以下内容：  
- 通道适配层稳定性修复（WhatsApp）  
- LLM 上下文管理与缓存策略优化

---

## 7. 用户反馈摘要

由于今日无新 Issue 及评论，无法提炼新的用户反馈。但从现有两条 PR 的提交目的可侧面推知：  
- **用户痛点**：WhatsApp 用户正因通道不可用而受影响，期望快速修复；  
- **性能诉求**：存在对更快速响应的期待，推动开发者关注缓存优化。

---

## 8. 待处理积压

以下两条 PR 均已标记为 **stale**，存在被自动关闭的风险，请维护者重点跟进：

| 编号 | 标题 | 创建时间 | 最后更新 | 搁置天数 | 优先级建议 |
|------|------|----------|----------|----------|------------|
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | fix(deps): bump whatsmeow to unblock WhatsApp 405 错误 | 2026-08-07 | 2026-08-15 | 9天 | 🔴 **高** — 通道停摆属于紧急问题，请尽快评审 |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | fix(agent): move dynamic context after history | 2026-08-07 | 2026-08-15 | 9天 | 🟡 **中** — 性能优化，不影响可用性但价值明显 |

若手动操作不便，建议至少针对 #3320 进行快速合并或由维护者提出替代方案，避免 WhatsApp 通道长时间失效。

---

*本日报由 AI 自动生成，数据基于 GitHub 公共信息，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，我是你的 AI 智能体与个人 AI 助手领域开源项目分析师。以下是根据 NanoClaw  GitHub 仓库数据生成的 2026-08-16 项目动态日报。

---

### NanoClaw 项目动态日报 (2026-08-16)

**1. 今日速览**

今日 NanoClaw 项目活跃度较高，核心焦点集中在代码合并与功能开发上。虽然过去 24 小时没有新 Issue 或版本发布，但 Pull Request 提交量达到了 22 条，其中包含 3 条已合并/关闭的 PR，显示出项目团队正在进行密集的功能迭代与打磨。大部分新 PR 来自于核心团队，覆盖了渠道集成、权限系统、跨会话上下文、容器稳定性等多个关键领域，项目整体处于快速演进状态。

**2. 版本发布**

无新版本发布。

**3. 项目进展**

今日有 3 个 PR 被合并或关闭，对项目稳定性有积极影响。

- **修复轮询循环资源泄漏** ([PR #3268](https://github.com/nanocoai/nanoclaw/pull/3268))：核心团队修复了停止轮询循环时，其活动查询的后续轮询器未被清理的问题。这避免了潜在的资源泄漏，提升了长时间运行的服务稳定性。
- **项目更名与渠道切换** ([PR #37](https://github.com/nanocoai/nanoclaw/pull/37))：尽管创建已久，但最终在此日期关闭。该 PR 涉及将项目命名为 `dotclaw` 并将消息集成从 WhatsApp 切换到 Telegram。此举虽未最终落地，但其关闭明确了项目当前的演进方向，聚焦于 Telegram 集成，而非回退到 WhatsApp。
- **废弃 Telegram 旧版 Markdown 清理器** ([PR #3250](https://github.com/nanocoai/nanoclaw/pull/3250))：合并后移除了一个会导致 Telegram 上粗体文本显示为斜体的兼容性补丁，解决了由旧版转换器引起的一个显示 Bug。

**4. 社区热点**

今日社区讨论主要围绕新增功能展开。尽管 PR 的评论数未明确给出，但以下几项由核心团队提交的功能 PR 值得关注，因为它们代表着项目下一步的能力方向：

- **Telegram 渠道集成** ([PR #3269](https://github.com/nanocoai/nanoclaw/pull/3269))：引入了官方 Telegram 渠道适配器，包括配对流程、Markdown 清理器，并在 `src/channels/index.ts` 中注册了自注册导入。这表明社区对将 NanoClaw 用作个人 AI 助手连接到 Telegram 有明确的需求。
- **聊天 SDK 桥接的 DM 表面增强** ([PR #3262](https://github.com/nanocoai/nanoclaw/pull/3262))：为不同平台的 DM 会话提供了更加丰富的客户端上下文捕获、线程规范化以及 `dm-opened` 钩子。这显示出社区对更精细、更智能的对话管理需求。
- **跨会话上下文模块** ([PR #3257](https://github.com/nanocoai/nanoclaw/pull/3257))：为拥有多个并发会话的代理组增加了跨会话上下文支持，包括消息扇出、DM 回填和回显修剪。这指向了更复杂的多会话场景和代理组团协作的使用趋势。

这些 PR 合在一起，揭示了社区对“多渠道、多会话 Agent 管理”的强烈诉求。

**5. Bug 与稳定性**

今日有若干个修复类 PR 被提出，主要围绕稳定性与健壮性：

- **高严重度**
    - **空闲容器被无限豁免于绝对上限杀死** ([PR #3252](https://github.com/nanocoai/nanoclaw/pull/3252))：修复了没有心跳文件的空闲容器永远不会被绝对时间上限终止的问题，该问题可能导致资源耗尽。已有修复 PR。
    - **心跳机制在限流期间停滞** ([PR #3251](https://github.com/nanocoai/nanoclaw/pull/3251))：修复了 Claude API 限流时，心跳文件停止更新，导致容器被误杀的问题。已有修复 PR。
    - **入站批处理中的上下文行挤掉任务行** ([PR #3254](https://github.com/nanocoai/nanoclaw/pull/3254))：修复了上下文行（trigger=0）数量过多时，可能导致真正的任务行无法进入处理批次的问题。已有修复 PR。

- **中严重度**
    - **出站投递解析到错误的通道行** ([PR #3255](https://github.com/nanocoai/nanoclaw/pull/3255))：修复了多个机器人身份在同一频道时，出站消息可能投递到错误的实例的问题。已有修复 PR。
    - **Discord 附件无法被 Agent 读取** ([PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752))：修复了 Discord 的文本/图片附件在桥接后只暴露 URL 而无法被 Agent 读取的问题。已有修复 PR。

- **低严重度**
    - **Telegram 粗体显示为斜体**：已被 [PR #3250](https://github.com/nanocoai/nanoclaw/pull/3250) 合并修复。

**6. 功能请求与路线图信号**

虽然没有新 Issue 提交，但从核心团队提交的大量 PR 可以看出项目未来的迭代方向非常明确：

- **渠道能力扩展与形态抽象** ([PR #3261](https://github.com/nanocoai/nanoclaw/pull/3261))：为适配器引入可选的 `setTyping` 状态行等能力，体现项目在适配不同平台能力差异的同时，正在抽象更统一的会话呈现层。
- **更精细的权限控制策略** ([PR #3260](https://github.com/nanocoai/nanoclaw/pull/3260))：新增 `decline_notify` 策略，为处理未知发件人提供了新的选择，表明项目正在构建更灵活、更细致的交互权限模型。
- **可插拔的审批流与生命周期钩子** ([PR #3266](https://github.com/nanocoai/nanoclaw/pull/3266)、[PR #3265](https://github.com/nanocoai/nanoclaw/pull/3265)、[PR #3264](https://github.com/nanocoai/nanoclaw/pull/3264)、[PR #3263](https://github.com/nanocoai/nanoclaw/pull/3263)）：这一系列 PR 为注册卡片审批、Agent 创建通知、未投递批次预览和通道适配器热启动提供了通用的拦截/钩子机制，标志着项目正朝着高度模块化和可扩展的架构演进。
- **会话生命周期管理深化** ([PR #3256](https://github.com/nanocoai/nanoclaw/pull/3256)）：新增 `detached_at` 字段来标记对话与平台的解绑状态，显示出对会话数据保留和生命周期管理的重视。

**7. 用户反馈摘要**

由于没有新的 Issue，相关反馈主要从 PR 的提交内容中推断：

- **用户痛点**：从多个 Fix PR（[#3251](https://github.com/nanocoai/nanoclaw/pull/3251)、[#3254](https://github.com/nanocoai/nanoclaw/pull/3254)、[#2752](https://github.com/nanocoai/nanoclaw/pull/2752)）来看，用户在使用过程中遇到过 API 限流导致的误杀、消息处理遗漏、以及特定渠道（如 Discord）附件不可用等稳定性问题，这些修复直接提升了部署的可靠性。
- **使用场景**：新增的 Telegram 集成（[#3269](https://github.com/nanocoai/nanoclaw/pull/3269)）和跨会话上下文（[#3257](https://github.com/nanocoai/nanoclaw/pull/3257)）等功能，展示出用户正在探索将 NanoClaw 作为个人生活与工作的全能助手，并通过不同 IM 工具进行管理。
- **满意点**：项目核心团队的高活跃度，以及在 24 小时内对补丁的快速响应（例如 [PR #3268](https://github.com/nanocoai/nanoclaw/pull/3268)），说明项目维护良好，对社区反馈的处理是积极的。

**8. 待处理积压**

目前没有发现长期未响应的重要 Issue。需要注意的是，PR [#37](https://github.com/nanocoai/nanoclaw/pull/37)（项目更名）在创建近 6 个月后才于今日关闭，这可能提示项目方向上曾有过较长时间的摇摆，但其最终关闭明确了延续当前 `nanoclaw` 名称与 Telegram 路线的决定。另外，PR [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) 已存在两个月，虽然不是核心功能，但其涉及 Discord 附件不可用的实际体验问题，建议维护者尽快评估并合并其修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-16

## 1. 今日速览

过去 24 小时内，NullClaw 项目处于**轻度活跃**状态：新增 1 个功能增强型 Issue（#988，代理支持）和 1 个代码优化型 PR（#987，长任务循环卫生），均保持开放状态，无版本发布、无合并事件。值得关注的是，#987 针对本地工具密集型长任务的 prompt 缓存优化和重复调用防护，体现了项目在**实用性、工程健壮性**方向的持续投入。整体来看，社区讨论热度一般，但提交质量有上升趋势，未见 Bug 报告或回归信号，项目健康度**良好**。


## 3. 项目进展

**今日暂无 PR 被合并或关闭**，但开放中的 #987 值得重点关注：

- **[#987 [OPEN] feat(agent): loop hygiene for long local tool-heavy runs](https://github.com/nullclaw/nullclaw/pull/987)** — 作者：vernonstinebaker
  该 PR 针对长耗时、本地工具密集型的 Agent 运行场景，提出三项改进：
  1. **System Prompt 拆分**：将提示词拆分为稳定的缓存友好前缀 + 可变的日期时间尾部，配合 `stablePrefixHash` 提升缓存命中率；
  2. **工具输出压缩**：在注入历史前通过 `result_compress.zig` 压缩工具输出，同时保留 observer 日志的完整输出；
  3. **重复调用防护**：增加逐轮相同调用的检测逻辑，防止循环陷阱。

  若该 PR 被合并，将显著降低长任务场景下的 token 消耗，并提升 Agent 在长时间运行中的稳定性，属于**性能与可靠性双提升**的重要改动。


## 4. 社区热点

- **[#988 [OPEN] [enhancement] proxy support](https://github.com/nullclaw/nullclaw/issues/988)** — 作者：anpic
  该 Issue 请求为 providers 增加 HTTP(s) 和 SOCKS(5h) 代理支持。虽然目前暂无评论和点赞，但这是企业级用户和网络受限环境下用户的**常见刚需**。结合此前项目在本地工具链上的持续优化（#987），可推断 NullClaw 正逐步进入**高级用户和企业场景**的视野。


## 5. Bug 与稳定性

**今日无新增 Bug、崩溃或回归问题报告。** 项目当前主分支保持稳定，无紧急修复需求。


## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 分析 |
|---------|------|------|
| **代理支持（HTTP/SOCKS5）** | [#988](https://github.com/nullclaw/nullclaw/issues/988) | 网络受限环境（企业内网、跨国网络）下的基本需求。当前无相关 PR 对应，但实现复杂度可控，且对扩展企业用户群有明显价值，**有一定概率纳入下一迭代**。 |


## 7. 用户反馈摘要

今日无新增评论或深度讨论，暂无更多可提炼的用户反馈。


## 8. 待处理积压

当前无长期未响应的重要 Issue 或 PR 积压。社区互动整体响应及时，项目健康度良好。

---

*本报告由 AI 分析师自动生成，数据截至 2026-08-16。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-16

## 今日速览

过去24小时IronClaw项目保持了较高的活跃度（中等偏上）：共产生27条Issue更新（6条新增/活跃、21条关闭）、12条PR更新（7条待合并、5条已合并/关闭），无新版本发布。值得注意的是，今日高频词是"性能优化"——多张Tier 1/Tier 2性能调优Issue（#7593、#7595、#7596、#7597）已全部关闭，且对应修复PR（#7628、#7629、#7676、#7677）均已提交，显示项目正在系统性地清理运行时浪费。此外，由#7634审阅衍生出的5个新Issue（#7671-#7675）集中暴露了架构测试、类型安全、预算记账等深层技术债，表明团队在功能合并的同时也在同步推进工程质量。

---

## 版本发布

**无** — 过去24小时无新版本发布。

---

## 项目进展

今日合并/关闭的PR合计5条，其中实质性合并2条，均聚焦性能优化：

- **[#7628] perf(processes): remove heartbeat journal churn**（已合并，size: M） — 实现#7591中保守且独立安全的心跳子集：停止为每次进程心跳追加永久性journal行（对应#7593），保留lease时间戳作为权威，并将turn-runner心跳间隔调整为15秒。预计减少每turn约18行写入，以及对长驻进程约2,880行/天的永久journal积压。
- **[#7629] perf: reduce trigger and outbound state writes**（已合并，size: M） — 将trigger run-history保留期的清理从每次Running行更新移至首次fire claim时执行（对应#7595），同时保留恢复路径上的完成时清理以保证严格的保留语义。
- **[#7676] perf(threads): coalesce thread index touches**（已关闭，size: L） — 将突发性线程活动touch合并为有界的线程索引写入，并在间隔后冲刷最新待定时间戳以维持侧栏优先级排序（对应#7596）。通过单调CAS更新保证多worker正确性。
- **[#7670] chore(agents): refresh codebase knowledge graph**（已关闭，XS） — 自动化例行代码库知识图谱刷新。

**宏观判断：** 项目当前正处于明确的"性能优化周期"——#7591史诗项下的多条技术债已完成清理，同时#7634（unbound-turns模型切换）作为核心功能变更已合并，其审阅衍生出的新Issue正被系统性跟踪。整体推进方向是"功能完备性已达标，现在在打磨运行时效率与工程质量"。

---

## 社区热点

### 讨论最活跃（评论最多的Issue）

| Issue | 标题 | 评论数 | 热度分析 |
|---|---|---|---|
| [#467](https://github.com/nearai/ironclaw/issues/467) | Trajectory benchmark system for agent quality evaluation | 4 | 3月创建的老issue，持续获得讨论。核心诉求是构建一个通过真实用户场景跑agent、并用双层标准（硬断言+LLM-as-judge）评估轨迹质量的基准系统。该项目目前测试体系庞大（e2e、live canary、hermetic等），但缺乏统一的"质量评估"基准层，评论者可能来自QA团队。 |
| [#3236](https://github.com/nearai/ironclaw/issues/3236) | [Reborn] Define same-thread follow-up and steering policy | 3 | 5月创建，已关闭。围绕Reborn的同线程后续消息与转向（/btw）语义，包括队列可见性、排序、提升、取消交互等。该issue关闭说明已形成明确策略。 |
| 多Issue并列 | #6821, #7595, #6835, #6829, #6726, #5672等 | 各1 | 大量已关闭Issue均含1条审阅/确认评论，属正常流程闭环，非社区活跃。 |

### 值得关注的PR

- **[#7634](https://github.com/nearai/ironclaw/pull/7634) feat(unbound-turns): complete the switchover to prepared-context turns**（已合并，size: XL）— 这是今日审阅衍生新Issue最多的单一PR（衍生出#7671-#7675共5个问题），说明该变更虽然合并，但其架构影响深远，后续会持续有跟进工作。

---

## Bug 与稳定性

### 严重度：中高（影响CI/CD可靠性）

- **[#7675](https://github.com/nearai/ironclaw/issues/7675) E2E: qa_6c gmail-to-sheet flake cascades across the whole provider-contracts session**（新增，活跃）
  两个独立问题：① Live Gmail/emulate段的间歇性资源类能力失败；② 单用例flaky导致整个provider-contracts会话级联失败。修复方向：需要隔离资源类能力检查与业务断言，并让flaky用例不污染同会话的后续用例。
  
  关联PR：**[#7679](https://github.com/nearai/ironclaw/pull/7679) fix(live-qa): stop harness bugs reddening green canary runs**（待合并，XL） — 该PR专门修复Live Canary 30/30全红的三个harness缺陷（其中`qa_10h_slack_email_hallucination_guard`失败率100%），并已说明#7675中"失败非由该PR导致"。

### 严重度：中（影响运行效率，已有修复）→ 全部已闭环

以下为#7591 Epic下的Tier 1/2性能缺陷，今日已全部关闭：

- [#7593](https://github.com/nearai/ironclaw/issues/7593) — 每次进程心跳追加journal行（约2,880行/天/进程永久积压）→ 已由PR #7628修复
- [#7595](https://github.com/nearai/ironclaw/issues/7595) — prune_run_history在每次run-history写入时执行（每次触发器fire约2-3次无条件相关子查询DELETE）→ 已由PR #7629修复
- [#7596](https://github.com/nearai/ironclaw/issues/7596) — touch_thread_index_updated_at全行CAS重写，每次turn最多7次→ 已由PR #7676修复
- [#7597](https://github.com/nearai/ironclaw/issues/7597) — advance_subscription_cursor零生产调用者的死API → 已修复
- [#7599](https://github.com/nearai/ironclaw/issues/7599) — 心跳间隔5s vs 90s lease TTL，背景心跳负载−67%空间 → 已部分由PR #7628（15s）覆盖

### 严重度：低（偶发）

- [#6726](https://github.com/nearai/ironclaw/issues/6726) — register_generic_channel_outbound_targets可替换为空操作而所有测试仍通过（唯一存活突变体）→ 已关闭，需确认是否已加测试或确认死代码
- [#6835](https://github.com/nearai/ironclaw/issues/6835) — MCP auth失败被分类为Client而非AuthRequired，导致不触发重新认证闸门 → 已关闭
- [#5237](https://github.com/nearai/ironclaw/issues/5237) — Reborn主机调试日志在设置IRONCLAW_REBORN_LOG=debug时，Cranelift/Wasmtime编译器目标刷屏Railway → 已关闭

---

## 功能请求与路线图信号

### 新Issue中的功能信号（来自#7634审阅衍生）

| Issue | 功能/改进 | 分析 |
|---|---|---|
| [#7672](https://github.com/nearai/ironclaw/issues/7672) | 引入类型化ToolChoice，替代各provider编码器中对"auto"/"required"/"none"字符串的匹配 | 这是典型的"类型安全重构"信号——当前5个provider编码器各自维护字符串匹配逻辑，存在不一致风险。预计会作为下一个"Tier 1/2"级别重构纳入路线图，但优先级可能为P2（不紧急但值得做）。 |
| [#7673](https://github.com/nearai/ironclaw/issues/7673) | BudgetLedger记账改进：截断启动窗口的重复计费与charge持久性 | 这属于预算/配额系统的正确性修正，虽"偏保守"（宁可多计），但会在多turn场景下累积偏差。建议在下一迭代中修复。 |
| [#7674](https://github.com/nearai/ironclaw/issues/7674) | 符号级allowlist锁定openai-compat → threads依赖边 | 这是架构治理信号——当前依赖边界测试只检查crate级边，不限制具体导入了哪些symbol。属于CI加固，可能以"低优先"方式处理，但值得关注因为它是防止未来意外依赖蔓延的护栏。 |
| [#7671](https://github.com/nearai/ironclaw/issues/7671) | 内核沙箱路径的调用栈压力（LoopCapabilityPort装饰器链导致测试线程栈溢出） | 提示系统有性能/稳定性隐患，当前通过chain-boxing缓解。如不根治，未来新增装饰器可能再次踩到栈限制。 |

### 可能是下一版本（0.x）候选的功能

- **IronHub agent link的WebUI运维界面** — PR [#7516](https://github.com/nearai/ironclaw/pull/7516)（待合并，XL，新贡献者neo-sky）— 目前运维人员只能通过CLI获取注册URL和安装共享密钥，该PR将完整界面搬到WebUI的Extensions页。

---

## 用户反馈摘要

- **对Live Canary质量的强烈关注**：PR #7679中明确提到"已排定的Live Canary在最近30/30次运行中全部变红"，其中9次抽样显示`qa_10h_slack_email_hallucination_guard`用例100%失败。虽然根因是harness缺陷而非产品缺陷，但团队在描述中透露出对"绿跑红跑"可信度的高度重视——这反映内部QA团队对CI信号可靠性有很高的期望值。
- **性能浪费的系统性不满**：#7591 Epic下的多张issue（心跳journal、touch重写、prune时机）均用"pure waste"（纯粹浪费）措辞描述，且预估了精确的字面节省（行数/语句数/百分比），说明开发者对系统运行时开销有量化意识，追求"零浪费"。

---

## 待处理积压

### 需关注的老Issue

- **[#467](https://github.com/nearai/ironclaw/issues/467) Trajectory benchmark system**（3月创建，活跃，4条评论）— 这可能是第一个waiting-for-owner的长期issue。距今已5个多月，如果考虑将质量评估标准化，该issue值得排入路线图。
- **[#5672](https://github.com/nearai/ironclaw/issues/5672) [performance] perf(webui_v2): replace SSE stream_events drain-and-poll with a real subscription API**（7月创建，1条评论）— 当前浏览器轮询间隔1-3秒、每次轮询都从投影存储全量drain的方案，在Postgres部署上浪费严重。虽然已添加`[performance]`标签但未见对应PR，值得持续关注。

### 待合并PR优先级观察

| PR | 大小/风险 | 关键性 |
|---|---|---|
| [#7679](https://github.com/nearai/ironclaw/pull/7679) fix(live-qa) | XL/低 | 高 — 直接解决CI可靠性30/30全红问题 |
| [#7651](https://github.com/nearai/ironclaw/pull/7651) feat(automations): deterministic no-result suppression | XL/低 | 中 — 自动化通知行为可预测化 |
| [#7678](https://github.com/nearai/ironclaw/pull/7678) perf(capabilities): persist invocation state at gate and terminal edges | XL/低 | 中 — 减少journal写入并保持租约隔离的恢复能力 |
| [#7677](https://github.com/nearai/ironclaw/pull/7677) perf(threads): fold message lookup indexes into message rows | XL/低 | 中 — 减少每条消息1-3个兄弟条目行 |

### 无新增blocker

所有新Issue均处于"审阅/讨论"或"可立即动手"状态，无阻塞性未决问题。整体项目健康度良好。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-16

## 今日速览

过去24小时内，LobsterAI 项目活跃度呈下降趋势。共处理 18 条 Issues（其中 16 条关闭，2 条仍开放），6 条 PR（4 条待合并，2 条已关闭/合并）。值得关注的是，今日大量自动关闭的 Issue 均为 **stale 标记**（因长时间无活动被机器人自动关闭），而非主动修复后关闭，说明维护者的响应速度正在放缓。PR 方面，除一条手动合并的修复外，其余均为 dependabot 自动依赖升级。无新版本发布。项目活跃度评估为 **中低** — 社区的讨论热情仍在，但维护者的介入频率需要关注。

---


## 项目进展

今日合并/关闭的 PR 有两条，其中一条为主要功能修复：

- **[#2234] fix(openclaw): cron yield descendant finalization** （[链接](https://github.com/netease-youdao/LobsterAI/pull/2234)）— 由 btc69m979y-dotcom 提交并已合并。该 PR 修复了 `sessions_yield` 后子 agent 完成事件无法驱动父 agent 继续执行的问题，并覆盖了普通会话并行子 agent、cron 并行子 agent、cron 串行子 agent 三种场景。这是一条具备实质功能的合并，提升了 cron 场景下 agent 协作的可靠性。
- **[#1879] fix: preserve manually-added plugin load paths on config sync** （[链接](https://github.com/netease-youdao/LobsterAI/pull/1879)）— 已关闭。修复了 `OpenClawConfigSync.sync()` 写入 `openclaw.json` 时覆盖用户手动添加的插件加载路径的问题，此前会导致社区插件的路径被静默丢弃。

两条合并 PR 分别推进了 **OpenClaw 配置同步的插件路径保留** 和 **cron 任务中子 agent 完成事件的链路闭合**，属于稳定性与配置体验层面的增量改进，整体推进幅度有限。


## 社区热点

今日最活跃的讨论集中在以下两个 Issue（虽均已被 stale 关闭，但评论仍在持续）：

1. **[#1903] 会员登录频繁失败** （[链接](https://github.com/netease-youdao/LobsterAI/issues/1903)）— 3条评论，开放状态。用户反馈会员登录频繁失败，且明确指出 **"会员登录不进去，无法使用网易付费的模型"**。该问题直接影响到付费用户的核心价值兑现，虽然标记为 stale，但并未被关闭，需要重点关注。

2. **[#1849] 追问时会出现无限NO_REPLY或者输出几个文字就直接不输出了** （[链接](https://github.com/netease-youdao/LobsterAI/issues/1849)）— 4条评论，已关闭。用户详细描述了任务被提前标记为 complete 但模型仍在输出的情况，造成页面无数据响应。虽然已关闭（stale），但该问题涉及核心交互流程的可靠性，存在复现风险。

3. **[#2040] OpenClaw 的五大薄弱点** （[链接](https://github.com/netease-youdao/LobsterAI/issues/2040)）— 2条评论，已关闭。用户 woxinsj 发布了一篇深度分析，系统梳理了 OpenClaw 在记忆缺失、安全漏洞、Token 成本、部署配置、自定义能力五个维度的短板。虽然该 Issue 已关闭，但内容的深度值得维护者阅读。


## Bug 与稳定性

今日报告的 Bug 主要集中在以下几条（按严重程度排列）：

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 🔴 高 | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | 会员登录频繁失败，无法使用付费模型 | OPEN，无 fix PR |
| 🔴 高 | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时无限 NO_REPLY，任务提前 complete 但模型仍输出，页面无数据响应 | 已关闭（stale），无 fix 迹象 |
| 🟡 中 | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) | 桌面端 AI engine 连接丢失，IM Bot 连接稳定 | 已关闭（stale） |
| 🟡 中 | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | 会话页面超长元素（如 Mermaid）导致虚拟滚动异常，无法向上滚动 | 已关闭（stale） |
| 🟡 中 | [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) | 本地运行无法登录、无法建任务，提示未检测到内置 OpenClaw runtime | 已关闭（stale） |
| 🟡 中 | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | 更新后阿里百炼 qwen3.6-plus 模型被强制替换为网易自带，修改配置无效 | 已关闭（stale） |
| 🔴 高 | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | 邮箱 Skill 路径穿越安全漏洞（[Security]） | 已关闭（stale） |

**注意**：多条 Bug 虽已关闭，均因 stale 自动关闭而非修复后关闭。其中 [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) 为安全类漏洞（路径穿越），虽然已关闭但建议维护者主动核实修复状态。


## 功能请求与路线图信号

1. **[#1880] 希望增加 Hermes Agent 功能** （[链接](https://github.com/netease-youdao/LobsterAI/issues/1880)）— 用户期望参照 Open WebUI 集成 Hermes Agent 和 OpenClaw，作为 Agent 介入 LobsterAI。已关闭（stale），但反映了用户对多 Agent 协作的期待。

2. **[#2016] 建议增加 openhuman 引擎功能** （[链接](https://github.com/netease-youdao/LobsterAI/issues/2016)）— 建议增加 openhuman 引擎。已关闭（stale）。

3. **[#2046] Agent 记忆体系产品建议** （[链接](https://github.com/netease-youdao/LobsterAI/issues/2046)）— 用户详细梳理了 Agent 记忆问题，建议将 Session 标题/元数据持久化到文件系统，并给出了高/中/低优先级排序。目前仍开放（虽标记 stale），是功能性较强的产品建议。

4. **[#1920] Cowork 初始化空白加载状态改进** （[链接](https://github.com/netease-youdao/LobsterAI/issues/1920)）— 用户建议将静态 Loading 文本替换为骨架屏，与其他页面风格统一。已关闭（stale），属于 UI 细节优化。

5. **[#1921] Skills Manager / TaskRunHistory 空状态缺少图标和描述** （[链接](https://github.com/netease-youdao/LobsterAI/issues/1921)）— UI 一致性优化建议。已关闭（stale）。

以上功能请求尚无关联 PR 被创建，无法判断是否会被纳入下一版本。但从近期维护节奏来看，UI 细节优化（如 [#1920](https://github.com/netease-youdao/LobsterAI/issues/1920) 和 [#1921](https://github.com/netease-youdao/LobsterAI/issues/1921)）的落地难度较低，有较大概率被后续采纳。


## 用户反馈摘要

从今日活跃的 Issues 评论中可以提炼出以下用户声音：

- **付费体验受阻**：用户 zhahongan-ctrl 在 [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) 中明确指出"会员登录不进去，无法使用网易付费的模型"，并附带了截图。付费用户无法兑现服务价值，是当前最严重的用户痛点。

- **模型路由困惑**：用户 nee207 在 [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) 中反馈："更新后 qwen3.6-plus 模型会强制调用网易自带的并提示没有额度" — 即使用户修改配置文件也无济于事，系统会强制改回错误配置。这种"配置被无视"的体验会让用户对项目的可控性产生质疑。

- **长会话稳定性问题**：用户 atdow 在 [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) 中汇报了追问时无限 NO_REPLY 的问题，并在 [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) 中报告了虚拟滚动异常。这两个问题都出现在长会话/复杂内容的场景下，说明极端场景的健壮性仍有提升空间。

- **社区驱动的深度反馈**：用户 woxinsj 在 [#2040](https://github.com/netease-youdao/LobsterAI/issues/2040) 中发布了《OpenClaw 的五大薄弱点》分析文章文章，并在 [#2041](https://github.com/netease-youdao/LobsterAI/issues/2041) 中进一步讨论了记忆系统的瓶颈。这些内容体现了社区对项目架构层面的深度关切，值得维护者认真阅读。

- **UI 体验的持续抱怨**：用户 wansi-web 在 [#1836](https://github.com/netease-youdao/LobsterAI/issues/1836) 中直言"相比起其他竞品过于丑了，用起来不太舒服"。虽然这条 Issue 已关闭（stale），但 UI 体验问题在 [1920](https://github.com/netease-youdao/LobsterAI/issues/1920) 和 [1921](https://github.com/netease-youdao/LobsterAI/issues/1921) 中仍被持续提及。


## 待处理积压

以下为长期未响应或仍开放的重要 Issue，建议维护者优先关注：

1. **[#1903] 会员登录频繁失败** （[链接](https://github.com/netease-youdao/LobsterAI/issues/1903)）— **开放中**，创建于 2026-05-07，已超过 3 个月。直接影响付费用户体验，无任何维护者回复记录。

2. **[#2046] Agent 记忆体系产品建议** （[链接](https://github.com/netease-youdao/LobsterAI/issues/2046)）— **开放中**，创建于 2026-05-25，包含高优先级的具体建议（Session 元数据持久化），但至今无维护者回应。

3. **[#2164/2165/2166/2167] 四个 dependabot 依赖升级 PR 已等待 2 个月** （如 [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164)）— 均为 build 工具的日常升级，长时间未合并，其中 trufflehog 升级跨度较大（3.88→3.95），建议尽早处理以减少 CI 技术债。

4. **已关闭但未验证修复状态的 Issue**：特别是 [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885)（安全漏洞），虽已被 stale 自动关闭，但维护者应确认该路径穿越漏洞是否已在代码中修复，避免安全隐患遗留。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-16

## 1. 今日速览

Moltis 项目在 2026-08-16 迎来了一个高活跃、高产出的一天。过去 24 小时内共有 16 条 PR 更新，其中 14 条已合并或关闭，2 条仍处于待合并状态；同期 2 个 Bug Issue 均被关闭。合并的 PR 涵盖安全加固（zip/模型路径防护、节点配对签名验证）、核心功能增强（新增 Coder 远程沙箱后端、Slack 原生任务卡片、日历/邮件连接器）、以及多项修复（main 会话删除、gogcli/wacrawl URL 迁移、macOS 脚本兼容性等）。项目在安全性、可扩展性和用户体验三个维度上均有实质性推进，整体健康度优秀。


## 3. 项目进展

### 核心功能推进

- **安全加固（重要）**：PR #1180 修复了两类可导致任意文件写入的漏洞——恶意 zip 或 HuggingFace 仓库可覆盖用户信任的配置文件、凭据和脚本，进而获得代码执行能力。该修复加固了 `clawhub.rs` 中的 Zip 提取路径防护。另 PR #1179 将 `node.pair.verify` 绑定到服务器签发的待处理请求，阻止调用方自供密钥或挑战值。两项修复均由外部安全关注者 tsauvajon 提交，显著提升了项目的安全基线。
- **新增 Coder 远程沙箱后端**：PR #1199（待合并）为沙箱系统新增 Coder 后端，支持通过 REST API 创建临时工作区，并通过重连 PTY WebSocket 执行命令。支持模板 ID/名称、预设、富参数、TTL、环境别名和自动后端选择。该 PR 若合并将拓宽沙箱的部署形态。
- **Slack 原生实时任务卡片**：PR #1195 已合并，新增频道中立的工具生命周期更新，并将其渲染为 Slack 原生计划/任务卡片，嵌入现有响应流中。通过不透明的每运行 ID 和仅注册的规范工具名保护卡片隐私，并包含失败流上的终端错误清理。
- **持久化日历/邮件/频道连接器**：PR #1190 已合并，新增供应商中立的连接器持久化、原子快照、调度、投影和有界本地全文搜索。包含只读 CalDAV、Gmail、Himalaya v2 及可复用的频道历史数据集，供应商自有 schema，不复制凭据。
- **OpenAI 推理工具调用路由**：PR #1198 已合并，将通过内置 OpenAI 请求中结合函数工具与 `reasoning_effort` 的调用路由至 Responses API；无工具或推理时保留 Chat Completions 行为，适用于 OpenAI 兼容供应商。

### 修复类

- **main 会话可删除/归档**：PR #1182 修复了 Issue #1132——main 会话现在可以像其他会话一样被删除和归档。实现方式为移除 `delete_impl` 和 `is_archivable_entry` 中的 main 守卫，并保留当前活跃频道会话的归档限制。
- **gogcli/wacrawl URL 迁移修复**：PR #1191 和 #1192 分别修复了两个因仓库迁移至 `openclaw` 组织而导致的安装失败问题。此前每次 `moltis sandbox build` 都会因 GitHub 重定向报错而失败。
- **macOS bash 3.2 兼容性**：PR #1194 修复了 `just local-validate-full` 在 macOS 上因 `set -euo pipefail` 下空数组展开而立即退出的问题。
- **ClawHub 技能搜索超时修复**：PR #1196 停止了逐结果元数据请求，改为直接消费搜索元数据并携带 owner 限定引用，解决了 RPC 超时问题。
- **vault 助记词规范化修复**：PR #1186 (待合并) 修复了恢复密钥派生中助记词存储 hash 与校验时规范化不一致的问题，使 vault 解封接受小写或带横线输入的助记词。


## 4. 社区热点

- PR #1180（安全加固）和 PR #1179（节点配对签名验证）值得关注——社区成员 tsauvajon 连续提交了两个安全修复，且均成功合并。这表明社区对 Moltis 的信任和主动贡献意愿较强。两个 PR 的动机是"我想使用 Moltis，但需要先解决几个安全问题"，清晰地传递出安全是用户采纳的硬性前提。
- PR #1158 是社区开发者 demyanrogozhin 以"vibe-coding"方式实验性地开发了 Zvec + redb 的向量数据库内存后端，虽已被关闭（可能基于架构决策），但其存在本身说明社区对本地优先的嵌入模型和内存替代方案有真实需求。
- PR #1190（持久化连接器）覆盖日历、邮件、频道三类高频生产场景，符合 AI 助手向深度工作流整合发展的趋势。
- Issue #1132（main 会话不可删除/归档）是用户直接遇到的可用性痛点，持续近两个月才得到修复，期间社区用户付出了等待成本。


## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| **高（安全）** | PR #1180 | 恶意 zip 或 HuggingFace 仓库可覆盖用户信任文件，导致任意代码执行 | 已修复并合并 |
| **高（安全）** | PR #1179 | 节点配对签名验证缺失，调用方可自供密钥或挑战值 | 已修复并合并 |
| **中** | Issue #1189 / PR #1191 | Sandbox 构建因 gogcli URL 变更导致每次构建失败 | 已关闭，PR 已合并 |
| **中** | PR #1192 | wacrawl 技能因 URL 迁移导致安装失败 | 已修复并合并 |
| **中** | PR #1196 | ClawHub 技能搜索因逐个元数据请求导致 RPC 超时 | 已修复并合并 |
| **低** | PR #1194 | macOS bash 3.2 下 `just local-validate-full` 空数组展开崩溃 | 已修复并合并 |
| **低** | Issue #1132 / PR #1182 | main 会话无法删除或归档 | 已关闭，PR 已合并 |
| **低** | PR #1186 | vault 恢复助记词 hash 与校验规范化不一致 | 修复 PR 待合并 |

所有已知 Bug 均已提供修复方案，无未解决的回归或崩溃问题。


## 6. 功能请求与路线图信号

- **Zvec 向量数据库内存后端（PR #1158）**：社区开发者实验性地实现了基于 Zvec 和 redb 的内存替代后端，并已在实际工作流中配合独立 llama-cpp server 使用。这说明社区对"本地优先、模型自主托管"的内存方案存在明确需求。虽然该 PR 被关闭，但项目维护者可考虑将其作为 `zvec` cargo feature 正式纳入路线图评估。
- **Coder 远程沙箱支持（PR #1199）**：该 PR 处于待合并状态，若合并将显著拓展 Moltis 在远程开发环境中的适用性。考虑到当前沙箱系统持续演进（见 gogcli/wacrawl 修复），沙箱生态扩展是明确的路线图方向。
- **持久化日历/邮件/频道连接器（PR #1190）**：这一合并表明项目正从纯聊天助手向集成工作流平台演进。"供应商无关的持久化 + 原子快照 + 调度" 奠定了通用连接器框架的基础。
- **命令面板快速发起对话（PR #1197）**：提升了对键盘流用户的体验，也表明项目重视日常工具的易用性打磨。

结合上述信号，下一版本可能包含 Coder 后端（若 PR #1199 完成）、vault 助记词修复（PR #1186）、社区贡献的 Zvec 后端评估，以及更多的连接器接入。


## 7. 用户反馈摘要

- **安全是硬门槛**：tsauvajon 在 PR #1179/#1180 中明确提出"我想使用 Moltis，但需要先解决几个安全问题"，代表了一批关注自我托管 AI 工具安全性的用户群体。这两项修复的合入有助于打消潜在用户的顾虑。
- **原生 agent 模式的可用性痛点**：Issue #1132 用户在长期使用中遇到 main 会话无法删除或归档的限制，这直接影响了会话管理的灵活性。虽然该修复耗时两个月，但最终提供了合理的语义（保留当前活跃频道会话限制、`sessions.clear_all` 仍保留 main）以避免误操作导致的意外删除，体现了平衡可用性与安全性的考量。
- **本地模型优先的使用模式**：PR #1158 的作者（demyanrogozhin）表示其实际部署为"嵌入模型运行在独立安装的 llama-cpp server 上"，展示了社区中本地优先、组件化部署的典型场景。
- **镜像构建失败影响面大**：Issue #1189（gogcli URL 迁移导致 sandbox build 失败）虽仅报告一周，但影响所有使用预构建镜像的用户——每次 `moltis sandbox build` 都会失败。修复后社区反馈应明显改善。


## 8. 待处理积压

- **PR #1186**: vault 恢复助记词规范化修复——修复已在 8 月 9 日完成，等待维护者 review 和合并。涉及安全关键路径（KEK 派生），建议优先处理。
- **PR #1199**: Coder 远程沙箱后端——核心功能扩展，已于 8 月 15 日提交，需维护者评估并与现行沙箱架构对接。若获准合并，将成为重要的部署形态补充。
- **PR #1158**: Zvec 内存后端——虽被关闭，但鉴于社区复现了真实工作流需求，建议维护者考虑是否将其作为 feature-gated 的候选后端正式纳入评审，或以 issue 形式寻求后续贡献者跟进。

---

**报告生成时间**：2026-08-16 | **数据来源**: [Moltis GitHub](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-16

## 1. 今日速览

今日 CoPaw 项目活跃度较高：过去24小时内新增/活跃 Issue 8条、关闭1条，新增 PR 11条且全部处于待合并状态，其中6条来自首次贡献者（占比55%），显示社区参与度持续提升。值得关注的是，视频处理路径（`view_video`）连续出现3个相关 Bug 报告（#7059、#7060）及对应修复 PR（#7061），是当前社区反馈最集中的模块。此外，Matrix 端到端加密问题（#6476）在搁置三周后今日关闭，但同一渠道又出现了新的会话隔离 PR（#7001），说明 Matrix 集成仍是活跃改进方向。项目整体呈现"高提交、高反馈、高首次贡献"的健康社区生态，但尚无新版本发布。

---

## 2. 版本发布

**无新版本发布。** 当前最新版本仍为 v2.1.0（pip 安装版），社区反馈均基于该版本。

---

## 3. 项目进展

今日无 PR 被合并或关闭（0/11），但以下待合并 PR 值得重点关注，它们反映了项目下一步的技术方向：

| PR | 核心内容 | 意义 |
|---|---|---|
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 新增 DataPaw 原生应用运行时与持久化分析工作区 | 首次贡献者提交，规模较大，若合入将开辟数据分析产品线 |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 统一 Provider 发现、模型元数据、路由与 Agent 模型控制 | 架构级重构，已持续3周未合入，建议维护者关注 |
| [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | 动态技能加载 + 自动卸载 + frontmatter 修复 | 补齐技能生命周期管理，是运行时技能管理的基础设施 |
| [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) | 修复 OpenAI Responses API 下视频帧丢失问题 | 直接对应今日最热 Bug 报告，修复路径明确 |

此外，[#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)（ACP 通知竞态导致文本丢失）已进入 "Under Review" 状态，修复方案明确，合入可能性较大。

---

## 4. 社区热点

**热点 Issue：#6476 — Matrix 端到端加密不可用（已关闭）**

- 链接：[Issue #6476](https://github.com/agentscope-ai/QwenPaw/issues/6476)
- 3条评论，关闭前持续活跃三周。用户 MCQSJ 详细记录了 `apt install libolm-dev` 成功但 `uv pip install matrix-nio[e2e]` 安装 vodozemac 后仍无法解密的完整排查过程。
- **诉求分析**：Matrix 渠道的 E2E 加密是安全敏感型用户的核心需求，当前依赖链（matrix-nio + olm/vodozemac）存在兼容性障碍。该 Issue 虽已关闭，但解决方式（是修复还是绕过）未见明确的 PR 关联。

**热点 PR：#6940 — DataPaw 原生应用运行时**

- 链接：[PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)
- 带截图展示了新的 UI 形态，并在描述中关联了 infra repo。虽无直接评论数据，但作为 tagged `ready-for-human-review` 且规模较大的首次贡献 PR，其"数据分析工作区"的产品方向可能引发社区讨论。

**其他活跃讨论**：#7051（图片附件刷新后丢失，3条评论）、#3915（虚拟滚动，3条评论但已持续近4个月）。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) | `view_video` 视频帧静默丢失（OpenAI Responses API / Volcengine Ark），模型完全收不到视频数据 | ✅ 已有修复 [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) |
| 🔴 高 | [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | OAuth2 refresh 不轮换 refresh_token 且无主动续期，远程 MCP 永久降级为手动重新认证 | ❌ 无修复 PR |
| 🟠 中 | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | `view_video` 内联媒体硬编码限 2MB，Provider 的 `max_inline_media_bytes` 设置不生效 | ❌ 无修复 PR，但提出暴露可配置上限的方案 |
| 🟠 中 | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | Console 中图片附件在会话重新打开后丢失（后端返回 data URL 但前端显示损坏缩略图） | ❌ 无修复 PR |
| 🟡 低 | [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) | `cron update --text` 静默失败（返回 rc=0 但实际未生效） | ✅ 已有修复 PR 且关联 Issue #7048 |

**趋势判断**：视频处理路径出现3个相互关联的 Bug（#7059、#7060 及隐藏的 #6495 回归），提示该模块最近的改动缺乏测试覆盖，建议维护者补充视频通路的集成测试。

---

## 6. 功能请求与路线图信号

| 功能请求 | 链接 | 信号强度 |
|---|---|---|
| 后台任务完成回调/通知机制 | [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | 🟢 强 — 用户明确说明了轮询现状（`check_agent_task`）的不足，属于工作流自动化的基础能力 |
| Console WebUI 引入虚拟滚动 | [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) | 🟢 强 — 已持续近4个月，长对话性能是高频痛点；已有 pagination PR（[#7049](https://github.com/agentscope-ai/QwenPaw/pull/7049)）可作为铺垫 |
| 恢复 native context strategy UI 选项 | [#7058](https://github.com/agentscope-ai/QwenPaw/issues/7058) | 🟡 中 — v2.1.0 移除 UI 入口但后端仍支持，属于回归型功能请求 |
| 插件 API 增加 `system_prompt` 权限 | [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | 🟡 中 — 企业场景的提示词保护需求，可归入插件权限体系扩展 |
| 视频/图片文件大小上限可配置 + Files API | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) 内嵌提案 | 🟡 中 — 可与 #7059 的修复 PR 一并考虑 |

**路线图信号**：Matrix 渠道的会话/内存隔离（[#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)）和 Chrome 扩展支持远程桥接（[#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054)）是两个明确的产品化方向，分别解决多人共享场景和局域网部署场景。

---

## 7. 用户反馈摘要

**满意点：**
- 无显式正面反馈，但有用户（xiaoka76）在提交视频 Bug 的同时直接附上了修复 PR（#7061），说明代码库对贡献者友好、模块边界清晰。

**核心痛点：**

1. **视频多模态路径不可靠**（#7059、#7060）：用户 xiaoka76 明确表示 `view_video` "appears to succeed but silently fails"，这种静默失败比报错更令人困扰，因为开发者难以定位问题。

2. **OAuth2 MCP 连接退化**（#7053）：用户 sunboy0523 指出远程 MCP 服务器（以 XMind 为例）在 refresh_token 轮换后，"permanently degrades to manual re-auth"，影响的是日常使用而非一次性配置。

3. **企业用户的安全边界需求**（#7052）：用户 xiaohushi512 的诉求很直接——"不想提交会话后在 qwenpaw 的会话界面被用户看到"，这反映了插件生态中企业提示词作为知识产权的保护需求。

4. **UI 功能回退**（#7058、#7051）：v2.1.0 在 Console 中移除 context-strategy 选择器被用户 manjieqi 指出，图片附件刷新丢失被 big-bunny-ball 报告，这两类"回归型"问题在用户感知上比重度新 Bug 更影响信任。

---

## 8. 待处理积压

| 项目 | 类型 | 等待时长 | 状态 | 紧迫度 |
|---|---|---|---|---|
| [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) — Console WebUI 虚拟滚动 | 功能请求 | 3个月+ | 无维护者回复记录 | ⚠️ 高 — 涉及核心 UI 性能 |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — 统一 Provider 模型系统 | 架构 PR | 26天 | 无合并/冲突标记；首个 Issue #7048 的关联 PR #7055 已提交 | ⚠️ 高 — 架构级 PR 搁置过久会增加合入成本 |
| [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) — Matrix E2E 加密（今日关闭） | Bug | 21天 | 已关闭但未见关联修复 PR | 💡 低 — 建议在关闭说明中补充解决方式 |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) — ACP 通知竞态 | 修复 PR | 15天 | Under Review 中 | 💡 中 — 已有明确修复方案，建议加速评审 |

**维护者行动建议：**

1. 优先合并 [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061)（视频修复）并关联关闭 #7059/#7060，同时补一条视频通路的集成测试。
2. 对 [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 给出明确的合入时间表或拒绝理由，避免社区贡献者长期悬置。
3. 关注 [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053)（OAuth2 轮换）——涉及远程 MCP 的日常可用性，且修复方案较为独立，适合标记为 `good first issue` 或由维护者直接修复。

---

**项目健康度评估**：★★★★☆（4/5）
- 社区活跃度高（新 Issue/PR 数量稳定），首次贡献者占比可观；
- 但已有 PR 合入延迟明显（今日0合并），架构级 PR（#6302）悬置超三周，长期看会影响贡献者积极性。建议在下一版本发布前集中处理一批积压 PR。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-16

## 今日速览

ZeroClaw 项目在 2026-08-16 保持高强度迭代状态，过去 24 小时共有 50 条 Issue 更新和 50 条 PR 更新。目前有 **大量 RFC 处于活跃讨论阶段**（Chat Completions 兼容层、运行时级会话控制、统一附件架构等），标志着项目正从核心功能开发转向架构标准化与生态兼容性建设。值得关注的是，**4 个 Anthropic refusal/fallback 系列 PR 今日合并关闭**，为可靠性与可观测性补上了关键一环；但与此同时，**待合并 PR 数量高达 44 条**，大量高价值改动（如 SSRF 防护、cron 超时修复）仍滞留于 `needs-author-action` 状态，吞吐瓶颈值得关注。此外，cron 测试的 ETXTBSY 竞态问题仍在影响无关 PR 的 CI 通过率，需优先介入。

---

## 版本发布

今日无新版本发布。


## 项目进展

今日共 6 条 PR 被合并/关闭，其中最值得关注的是由 @IftekharUddin 提交的 **Anthropic refusal/fallback 处理四连击**（#9262 → #9263 → #9265 → #9266 → #9268，其中 #9272 为汇总 PR），该系列已全部关闭。这组 PR 构建了完整的服务端+客户端降级链路：

- **#9262** — 将 Anthropic 原生 `stop_reason: "refusal"` 响应从"空成功"转变为类型化错误（`AnthropicRefusalError`），保留请求用量信息，拒绝分类仅用于内部路由。
- **#9263** — 使客户端可靠性层识别并路由拒绝到 fallback 条目，`is_non_retryable` 现在可正确分类拒绝错误。
- **#9265** — 新增 Anthropic-only 配置项 `server_fallback_models`，实现服务端降级请求的客户端启停控制。
- **#9266** — 读取原生响应信号（`NativeChatResponse.model` 实际服务模型、`AnthropicUsage.iterations`），完成服务端 fallback 的观测闭环。
- **#9268** — 在 channel orchestrator 的 post-loop 区域表面 safeguard 通知，将降级信息呈现给最终用户。

**意义判断**：该系列结束了"Anthropic 拒绝时静默返回空响应"的长期问题，系统性改善了 fallback 链路的准确性与可观测性，对依赖 Anthropic 的生产用户价值显著。

此外，在开放式 PR 中推进较快的信号包括：
- **#10003**（8/15 新开）— Reliable 提供商 rejected 尝试的精确计数，直接响应 #9470 的 telemetry 归因缺陷。
- **#10021**（8/16 新开）— 将 target runtime 的 thinking 策略应用到独立 delegate agent。
- **#9867** — PR size 标签自动化（CI 流程改进）。


## 社区热点

今日讨论热度集中于三大 RFC，均为 `risk:high`，反映了社区对**架构级标准化**的强烈关注：

**1. #8603 RFC: ZeroClaw Chat Completions profile（评论 21 条）**
链接: https://github.com/zeroclaw-labs/zeroclaw/issues/8603
当前 ZeroClaw 仅通过 WebSocket、ACP 和 per-channel webhooks 暴露能力，无法对接 OpenAI 生态客户端（Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等）。该 RFC 讨论热度居首，表明**生态互操作**是社区最迫切的需求。值得注意：该项目此前已默认使用 OpenAI 兼容协议，此 RFC 若能落地将大幅降低集成门槛。

**2. #9487 RFC: Runtime-owned conversation sessions（评论 17 条）**
链接: https://github.com/zeroclaw-labs/zeroclaw/issues/9487
涉及运行时对话会话的归属权与传输层适配器，配合 #9488（统一附件架构）讨论，显示社区正在为**更丰富的前端交互形态**（多模态、富文本、流式）铺路。两份 RFC 均出自 @NiuBlibing，已更新至 Rev 2/3，进入实质性设计阶段。

**3. #6954 RFC: Provenance, conversation binding, and reply contract（评论 13 条）**
链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6954
围绕内部发起的 agent 轮次（cron、hook 等）如何绑定会话与回复契约，修订版已按维护者意见完成边界澄清。该议题直接关联 cron 功能的成熟度。

**热评诉求分析**：上述 RFC 的共同信号是——社区不满足于 ZeroClaw 作为"单机 agent 框架"，而是希望其成为**可嵌入多种前端、支持丰富交互协议的中间层**。同时，cron 文档缺失（#7762）与特定模型运行需求被反复提及，说明已有用户在真实生产环境中使用定时任务。


## Bug 与稳定性

今日报告的 Bug 按严重程度排列：

**高优先级（P1）：**

1. **#9965 [Task] cron custom-shell 测试 ETXTBSY 竞态导致无关 PR CI 失败** — 该任务已标记 `status:accepted`，问题在于 `Parallel Runtime Test` gate 下测试命中文件占用竞态，导致无关 PR 出现红色必检失败。已有明确解决方向，但目前**尚未提出对应 fix PR**。影响面较大，建议优先处理。
   链接: https://github.com/zeroclaw-labs/zeroclaw/issues/9965

**中优先级（P2）：**

2. **#9470 Reliable fallback telemetry 归因错误** — 已接受，由 #10003 在 8/15 开出修复 PR，目前待合并。影响为：fallback 用量归因到错误 provider/model，且用户可见的 fallback 通知描述与实际采纳的响应不一致。
   链接: https://github.com/zeroclaw-labs/zeroclaw/issues/9470

3. **#7870 agent 运行时选项可能从首个配置的 provider 泄漏** — 已接受，长期未关，指向配置解析顺序问题。
   链接: https://github.com/zeroclaw-labs/zeroclaw/issues/7870


## 功能请求与路线图信号

**1. 生态兼容层大爆发**
- **#8603 Chat Completions 兼容 profile**（21 评论）：对接 Open WebUI / LobeChat 等主流客户端，是当前呼声最高的功能。工程上已有可参考的同类实现，落地概率较高。
- **#9810 Agent Plugins 1.0.0 标准支持**：加载 `plugin.json` + `skills/` + `mcp.json` 格式的社区插件，若落地将打开插件生态。
- **#8780 Gemini Live 实时语音通道**（Rev 2 重写为 broker 契约）：语音交互是差异化竞争点。

**2. 安全与治理深化**
- **#6971 安全态势、凭据边界与通用入口策略**（13 评论）：作为安全领域顶层 RFC，为后续安全特性的决策提供框架。
- **#9621 分阶段产品遥测**：希望获取功能使用数据以指导维护决策，反映 maintainer 对"没有数据支撑的维护"的焦虑。
- **#9598 SOP 能力权限契约**：为 SOP 能力建立权威权限模型。

**3. 开发者体验相关**
- **#9330 AI 辅助 PR 预审**：利用已有 CI 结果触发 AI 初审，保留人工终审。
- **#9345 每次更新重算 PR 风险/大小标签**：减少手动维护成本。

**纳入下一版本可能性判断**：**#8603** 讨论热度与生态价值兼备，很可能进入 v0.9 路线图；**#9810** 与 **#8780** 为差异化特性，节奏稍缓；**#9330** 与 **#9345** 已进入 `accepted` 状态，大概率在 CI 改进批次落地。


## 用户反馈摘要

- **集成诉求明确且强烈**：#8603 的大量评论来自希望接入 OpenAI 生态工具的用户，说明 **"能接 Open WebUI / Aider / LangChain" 已成为部署 ZeroClaw 的隐性前提之一**。
- **生产环境使用暴露了实证痛点**：#7762 用户真实反馈 cron 文档缺失且无法指定模型运行（"有些小任务想用最便宜的模型跑"）；#7527 用户报告 macOS 桌面应用重启后空白窗口，反映打包/权限处理尚有缺口。
- **安全默认值的权衡问题**：#9825 提出外部泄漏检测器将公开区块链地址误判为高熵机密，导致支付链接无法发送——这是一个"检测器正确但策略错误"的典型用户体验问题，用户对此类 false positive 表现出了理解（"这是 false positive 而非 bug"），但也说明默认策略需要更细粒度。
- **认可方向**：#7130（`forbid(unsafe_code)` 全工作区恢复）被接受且社区保持活跃，用户普遍认可"窄而审慎的 unsafe 边界"这一安全取向。


## 待处理积压

以下为长期未获维护者响应或处于停滞状态的高风险项，建议优先关注：

1. **#9103 RFC: 分离权威内存存储与可选 enrichment 连接器**（12 评论，`needs-author-action`，risk:high） — 自 7/16 创建已一个月，区分权威存储（Qdrant）与 enrichment（Lucid）的架构调整对存储层演进至关重要，目前仍等待作者修订，且 **#9621 中提到需要真实使用数据来辅助该决策**。
   链接: https://github.com/zeroclaw-labs/zeroclaw/issues/9103

2. **#7108 CI 缓存与关键路径优化**（`accepted`，risk:high） — PR CI 15-20 分钟的问题已接受 2 个多月，待合并 PR 持续堆积，此改进与 #9965、#9512、#9345 构成 CI 改进系列，建议整体推进。
   链接: https://github.com/zeroclaw-labs/zeroclaw/issues/7108

3. **#6909 RFC: 桌面屏幕交互与输入控制（computer-use）**（9 评论，`needs-author-action`，risk:high） — 5/25 创建至今近 3 个月，长期搁置。作为 agent 能力的重要扩展方向，需明确是否纳入路线图。
   链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6909

4. **#8713 PR: file_download SSRF 防护**（8/16 更新，`needs-author-action`，risk:high，size:XL） — 修复 SSRF 漏洞（未验证的 `file_download.url` 可路由到内网），已开放 6 周。安全相关 PR 滞留时间过长存在风险敞口。
   链接: https://github.com/zeroclaw-labs/zeroclaw/pull/8713

5. **高危 RFC 数量与实际落地的错配** — 截至今日，标签组合中含 `risk:high` 且状态为 `needs-maintainer-review` 或 `needs-author-action` 的 RFC 约 15 份。RFC 讨论持续升温但落地节奏有限，建议维护者审视 "RFC 队列"（#8692 跟踪器）并按优先级分批推进。
   链接: https://github.com/zeroclaw-labs/zeroclaw/issues/8692


**项目健康度总评**：社区活跃度高、讨论质量深、安全与可靠性意识强（SSRF、refusal 处理、unsafe 边界），架构演进方向明确（Chat Completions 兼容层、运行时会话边界、安全框架化）。主要风险在于 **PR 合并吞吐不足（44 条滞留）** 与 **RFC 队列持续膨胀**，这可能导致社区贡献意愿下降。建议优先关注 CI 关键路径优化（#7108）、合并待审 PR（尤其是安全类 #8713）并给 RFC 队列设定明确的决策节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*