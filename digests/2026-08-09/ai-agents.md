# OpenClaw 生态日报 2026-08-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-09 01:51 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据您提供的 OpenClaw GitHub 数据生成的 2026-08-09 项目动态日报。

---

# OpenClaw 项目动态日报 — 2026-08-09

## 1. 今日速览

OpenClaw 项目今日活跃度极高，24小时内 Issue 与 PR 更新均达到 500 条上限，显示出庞大的社区用户基础和极高的反馈频率。项目发布了两个新版本（v2026.6.34 和 v2026.6.33），重点在于加固浏览器与网络边界安全，以及修复流式响应和密钥泄露问题。然而，社区热点和 Bug 报告高度集中在**消息丢失、会话状态损坏、内存泄漏**等稳定性与可靠性问题上，多个 P0/P1 级严重 Bug 长期悬而未决，特别是关于 Gateway 内存泄漏和消息静默失败的问题，已成为影响用户体验的核心痛点。

## 2. 版本发布

今日发布了两个补丁版本，均侧重于安全性和稳定性修复：

- **v2026.6.34**
  - **核心亮点**：进一步加强安全边界。
  - **主要更新**：
    - **更安全的浏览器与网络边界**：沙箱浏览器路由、可信 DNS 目标、自定义浏览器源和回环提供商端点现在会拒绝不安全的访问路径。 (#97958, #38290, #103075, #110693)
    - **致谢**：感谢 @eleqtrizit, @brunowowk, @mosidevv, @pgondhi987 等贡献者。
- **v2026.6.33**
  - **核心亮点**：强化网络与密钥安全。
  - **主要更新**：
    - **限制恶意响应大小**：针对提供商流、Discord REST 响应、浏览器抓取、OAuth 路径和日志，现在会限制恶意响应大小，防止资源耗尽。
    - **保护 Telegram 凭证**：确保 Telegram 凭证不会出现在诊断信息中。 (#96989, #95412, #99428)
  - **致谢**：感谢 @wangmiao0668000666, @Alix-007 等贡献者。

**迁移注意事项**：本次更新为补丁版本，无破坏性变更或特殊迁移步骤。建议所有用户尽快升级以获取最新的安全修复。

## 3. 项目进展

今日没有 PR 被合并，但多个关键 PR 处于 "ready for maintainer look" 状态，预示着近期将有重要功能落地：

- **[#120804] feat(gateway,ui): quiet Where picker, placement chip, and projects read model**：一个大型功能，旨在重构 “Where” 选择器，将 Gateway、执行节点和云配置文件统一管理，并引入项目读取模型。这预示着 Runner 功能将迎来重大更新。
- **[#120664] feat(cli): openclaw resume attaches the TUI to a recent session**：为 CLI 增加 `openclaw resume` 命令，允许用户在任何地方（Web、Channel、云 Worker）启动会话后，通过 CLI 便捷地重新附着，极大提升用户体验。
- **[#120715] fix(cloud-workers): preserve cleanup across fallback disconnects**：一项重要的稳定性修复，确保云 Worker 会话在 SSH 故障转移后仍能正确进行清理，避免遗留过期状态。

这些 PR 主要围绕 **CLI 体验、运行器管理和云 Worker 稳定性** 展开，表明项目在持续优化高级用户和开发者的使用流程。

## 4. 社区热点

今日讨论热度最高的 Issue/PR 反映了用户对**数据可靠性**的强烈关注：

- **[#116277] [CLOSED] DeepSeek v4 Flash silent reply failure** (179条评论)
  - **链接**：[openclaw/openclaw Issue #116277](https://github.com/openclaw/openclaw/issues/116277)
  - **分析**：这个已关闭的 Issue 获得了惊人的 179 条评论，说明大量用户遭遇了模型静默回复失败的问题，即模型不生成任何内容，系统仅给出通用的 “No reply was generated” 回退消息。这直接导致用户体验断崖式下跌，是影响面极广的严重问题。
- **[#7707] [OPEN] Feature Request: Memory Trust Tagging by Source** (31条评论)
  - **链接**：[openclaw/openclaw Issue #7707](https://github.com/openclaw/openclaw/issues/7707)
  - **分析**：社区对 AI 安全非常敏感。该请求希望为记忆条目添加来源信任标签，以防止“记忆投毒”攻击。这反映出用户对 AI Agent 长期记忆安全性有很高的期望和需求。
- **[#44925] [OPEN] Subagent completion silently lost** (24条评论)
  - **链接**：[openclaw/openclaw Issue #44925](https://github.com/openclaw/openclaw/issues/44925)
  - **分析**：另一个“静默失败”案例，这次发生在子代理（Subagent）任务中。任务完成后结果丢失，既无重试也无通知，让用户感觉系统极不可靠，尤其是在处理复杂多步骤任务时。

这些热点共同指向一个核心诉求：**OpenClaw 需要更可靠的执行保障和更清晰的状态反馈机制**，任何“静默失败”都是对用户信任的巨大打击。

## 5. Bug 与稳定性

今日 Bug 报告数量多且严重，主要集中在内存、会话和消息丢失方面：

**P0 级（严重）**
- **[#91588] Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days, causing repeated OOM crashes**
  - **链接**：[openclaw/openclaw Issue #91588](https://github.com/openclaw/openclaw/issues/91588)
  - **状态**：开启。无明确修复 PR。内存泄漏是长期存在的顽疾，导致 Gateway 数天即崩溃一次，严重威胁服务稳定性。
- **[#108435] [Bug]: update to openclaw 2026.7.1: gateway fails to start w/ error**
  - **链接**：[openclaw/openclaw Issue #108435](https://github.com/openclaw/openclaw/issues/108435)
  - **状态**：开启。这是一个版本升级回归问题，导致 Gateway 无法启动，直接阻断用户使用。

**P1 级（高）**
- **[#116277] DeepSeek v4 Flash silent reply failure** (179条评论)
  - **链接**：[openclaw/openclaw Issue #116277](https://github.com/openclaw/openclaw/issues/116277)
  - **状态**：已关闭，但根因未明，影响巨大。
- **[#44925] Subagent completion silently lost — no retry, no notification, no auto-restart on timeout**
  - **链接**：[openclaw/openclaw Issue #44925](https://github.com/openclaw/openclaw/issues/44925)
  - **状态**：开启。影响子任务可靠性的核心问题。
- **[#96834] WhatsApp 1:1: inbound image wedges main lane ~3min before processing**
  - **链接**：[openclaw/openclaw Issue #96834](https://github.com/openclaw/openclaw/issues/96834)
  - **状态**：开启。多媒体输入处理存在严重性能瓶颈和状态卡死问题。

**P2 级（中）**
- **[#74586] AM embedded run aborts memory_search tool calls; classifies as timeout despite model completion**
  - **链接**：[openclaw/openclaw Issue #74586](https://github.com/openclaw/openclaw/issues/74586)
  - **状态**：开启。插件工具调用被错误中断，影响功能有效性。
- **[#38327] [Bug] "Cannot convert undefined or null to object" in 2026.3.2**
  - **链接**：[openclaw/openclaw Issue #38327](https://github.com/openclaw/openclaw/issues/38327)
  - **状态**：开启。老问题仍未解决，影响特定模型提供商的使用。

**趋势分析**：大量 Bug 指向**消息传递管线（Message Delivery Pipeline）** 和 **会话状态管理（Session State Management）**。问题复杂、复现路径多样，需要维护者进行系统性梳理和重构，而非零散修补。

## 6. 功能请求与路线图信号

多个功能请求获得了较高关注，预示着项目未来演进方向：

- **记忆安全** (Issue #7707)：为记忆条目添加来源信任标签，防止记忆投毒攻击。
  - **信号**：此需求与当前 AI 安全热点紧密相关，结合社区高讨论度，有望被纳入近期路线图。
- **动态模型发现** (Issue #10687)：自动发现 OpenRouter 等提供商的新模型，避免静态目录的限制。
  - **信号**：这是一个高频需求，能极大提升用户体验。相关的 `models.json` 覆盖机制已存在，实现全动态发现是自然演进方向。
- **任务状态持久化** (Issue #52640)：为长时间运行的任务提供一个持久化的状态面板，让用户随时了解任务进度。
  - **信号**：与 [#44925] 等“静默失败”问题呼应，说明社区对“可观测性”的需求越来越强烈，是提升产品专业度的关键。

## 7. 用户反馈摘要

从今日的 Issues 评论中可以提炼出用户的真实心声：

- **痛点：对“静默失败”零容忍**。无论是主代理、子代理还是 Any 通道回复，只要出现“无响应”且无明确提示，用户都会表现出极大的挫败感，认为系统不可靠。
- **使用场景：重度依赖自动化与多任务并行**。许多用户（家庭/商业助理）依赖 cron 任务、子代理编排来处理日常工作，任何环节的丢失都可能导致业务中断。
- **满意点：产品愿景与功能强大**。在 [#73537] 中，用户表达了“感谢你创造了 OpenClaw，它已成为我们日常工作中不可或缺的一部分”的积极反馈，体现了产品在核心功能上的强大吸引力和应用价值。
- **不满点：稳定性成为最大瓶颈**。用户清楚地意识到功能很强大，但频繁的崩溃、内存泄漏和升级回归（如 #108435）消耗了他们对产品的信任。

## 8. 待处理积压

以下问题长期未得到有效解决，需要维护者重点关注：

- **[#91588] Critical: Gateway Memory Leak** (自 6 月 9 日以来持续开启，23条评论)
  - **链接**：[openclaw/openclaw Issue #91588](https://github.com/openclaw/openclaw/issues/91588)
  - **警示**：这是一个 P0 级问题，导致服务周期性崩溃，却已持续两个月无人修复，严重拉低项目健康度评分。
- **[#38327] "Cannot convert undefined or null to object"** (自 3 月 6 日开启至今，13条评论)
  - **链接**：[openclaw/openclaw Issue #38327](https://github.com/openclaw/openclaw/issues/38327)
  - **警示**：一个影响特定模型提供商的回归问题，挂了 5 个月仍未解决，可能说明维护者对非主流配置的优先级较低，或问题定位困难。
- **[#44925] Subagent completion silently lost** (自 3 月 13 日开启，24条评论)
  - **链接**：[openclaw/openclaw Issue #44925](https://github.com/openclaw/openclaw/issues/44925)
  - **警示**：该问题与用户核心痛点“静默失败”直接相关，评论数高，但至今没有明确的修复 PR 或 roadmap 计划。
- **[#10687] 动态模型发现** (自 2 月 6 日开启，10条评论)
  - **链接**：[openclaw/openclaw Issue #10687](https://github.com/openclaw/openclaw/issues/10687)
  - **警示**：这是一个呼声很高的功能需求，长期处于 “needs-product-decision” 状态，决策流程可能过于缓慢。

---

**结论**：OpenClaw 项目目前处于 **“功能领先，稳定性欠债”** 的状态。新版本的安全加固值得肯定，但社区最迫切的需求是解决**内存泄漏、消息丢失、会话损坏**等核心稳定性问题。项目活跃度极高，但维护者需要将更多精力从新功能开发转移到“还债”上，优先修复 P0/P1 级 Bug，并针对“可观测性”和“可靠性保障”进行架构层面的优化，以挽回用户信任，提升项目健康度。

---

## 横向生态对比

好的，这是基于您提供的各项目动态摘要生成的横向对比分析报告。

---

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-08-09)

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于 **“功能军备竞赛”与“稳定性欠债”并存** 的爆发期。一方面，以 OpenClaw、IronClaw 为代表的项目在快速迭代新功能（如 Web Push、远程 MCP 支持、统一的上下文协议），并向产品化、平台化方向演进；另一方面，几乎所有主流项目都面临**内存泄漏、消息静默丢失、会话状态损坏、更新回归**等严重的可靠性问题，这些已成为用户抱怨的核心焦点和阻碍项目健康度的最大瓶颈。此外，**安全性**（密钥泄露、记忆投毒、工具注入）与**可观测性**（Token 消耗、任务状态追踪）正在从“加分项”转变为“必选项”，成为决定项目能否从“可用”迈向“可信”的关键门槛。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 核心健康度信号 | 综合评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (达上限) | 500 (达上限) | 2 个补丁 | 活跃度极高，但 P0 级内存泄漏 (#91588) 和多个“静默失败”问题长期未决 | **功能领先，稳定性欠债**，处于高速迭代与信任危机并存的阶段。 |
| **IronClaw** | 50 (达上限) | 50 (达上限) | 无 | 合并/关闭量大，团队执行力强；但 PR 积压严重，且有安全流程空洞 (#7391) 和核心 Token 计数错误 (#6989) | **快速交付期**，测试与重构力度大，但需警惕规模增长带来的质量风险。 |
| **ZeroClaw** | 50 | 50 | 无 | 治理纪律性强（RFC/Tracker），核心维护者正推动大型重构（SOP 修复、crate 清理） | **健康的迭代节奏**，架构清理与功能推进并行，社区治理相对规范。 |
| **CoPaw** | 19 | 50 | 无 | 新 Bug 集中于 `2.1.0b2`，PR 合并率极低（3/50），存在流程瓶颈 | **发布前密集修稳阶段**，待审查 PR 大量积压是主要风险。 |
| **NanoBot** | 5 | 9 | 无 | 社区响应快（Token 消耗诉求已形成 PR 闭环），但新报告的高严重度 MCP 崩溃问题 (#5300) 尚无修复 | **活跃且响应迅速**，可观测性建设领先，对 MCP 生态的健壮性需加强。 |
| **NanoClaw** | 8 | 6 | 无 | 出现技术债信号（附件路径校验、类型缺口），有一项关键修复 (Discord 审批) 待合并 | **中等活跃度**，处于功能扩展后的技术债清理阶段。 |
| **Hermes Agent** | 50 (达上限) | 50 (达上限) | 无 | 维护者（teknium1）异常活跃，积极修复安全（密钥泄露、Skill 注入）和更新机制问题 | **密集的缺陷修复与安全加固期**，社区略显焦虑（“更新恐惧症”），但项目响应迅速。 |
| **PicoClaw** | 3 | 4 | 无 | 有高价值修复 PR（WhatsApp 405, 前缀缓存），但合并节奏慢，多个 PR/Issue 挂 `stale` | **维护活跃但PR合并积压**，需警惕社区信心流失。 |
| **Moltis** | 2 | 1 | 无 | 关键 Docker 工具问题闭环修复，新增 Apple Container 状态误判问题 | **平稳维护期**，问题响应与修复周期较长（Docker问题历时2月）。 |
| **LobsterAI** | 1 | 3 | 无 | 活跃度进入低位，存量 PR/Issue 被标记 `stale`，社区互动频率下降 | **低活跃度/平稳维护期**，需增加维护者互动以避免贡献者流失。 |
| **NullClaw** | 0 | 0 | 无 | 无活动 | **无活动** |
| **TinyClaw** | 0 | 0 | 无 | 无活动 | **无活动** |
| **ZeptoClaw** | 0 | 0 | 无 | 无活动 | **无活动** |

## 3. OpenClaw 在生态中的定位

OpenClaw 凭借其**惊人的社区活跃度**（24小时 500+ 互动）和**频繁的版本迭代**（2 个补丁/日），稳居生态的**核心参照物和事实标准**地位。其优势在于：
- **社区规模与影响力**：Issue #116277 单一问题获得 179 条评论，足见其用户基数之庞大，这是其他项目难以企及的。
- **功能广度**：版本更新覆盖浏览器沙箱、DNS 安全、多提供商支持等，技术栈布局最全。
- **生态中心**：NanoClaw、PicoClaw 等项目命名和功能上均有其影子，且 IronClaw 开发了从 Hermes/OpenClaw 迁移的工具（#6939），表明其是生态的“中心枢纽”。

然而，其**技术路线采用的“大而全”集成策略**也带来了副作用：内存泄漏、消息丢失等**核心架构层面的稳定性问题**因系统复杂度高而长期难以根治（P0 问题持续数月）。相比之下，IronClaw 和 ZeroClaw 更注重架构的**纪律性与安全性**，在稳定性上更具后发优势，对 OpenClaw 的统治地位构成潜在挑战。

## 4. 共同关注的技术方向

| 技术方向 | 具体诉求 | 涉及项目 |
| :--- | :--- | :--- |
| **可靠性保障** | 修复**消息/子任务静默失败**、**内存泄漏**、**会话状态损坏** | **OpenClaw** (#44925, #91588), **CoPaw** (#6822), **NanoBot** (#5300) |
| **AI 安全边界** | **密钥泄露**防护、**记忆投毒**防御、**工具/技能注入**扫描、审批流程强化 | **Hermes** (#81012, #80966, #78515), **OpenClaw** (#7707), **ZeroClaw** (#9815, #9387), **CoPaw** (#6832) |
| **可观测性与成本控制** | 细粒度 **Token 消耗追踪**、任务状态持久化、成本核算透明 | **NanoBot** (#5266), **OpenClaw** (#52640), **ZeroClaw** (#9816), **IronClaw** (#6989) |
| **MCP 生态深化** | 支持 **OAuth 认证**、增强**错误隔离与稳定性**、优化 Schema 上下文预算 | **NanoBot** (#5297, #5300), **NanoClaw** (#2776), **PicoClaw** (#3302), **CoPaw** (#6822) |
| **更新/部署体验** | 解决**升级回归**问题、降低 **Docker 部署**门槛、提升跨平台（Win/macOS/Linux）一致性 | **Hermes** (#81969), **OpenClaw** (#108435), **NanoBot** (#5295), **Moltis** (#1096) |
| **上下文管理** | 优化**上下文压缩**策略避免数据丢失、提升前缀缓存命中率 | **Hermes** (#70846), **PicoClaw** (#3321), **CoPaw** (#6779) |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全功能平台**：多通道、子代理、记忆、技能 | 技术爱好者、希望一站式搭建个人助理的高级用户 | 大而全的集成架构，功能丰富但模块间耦合度高。 |
| **IronClaw** | **工程化与测试**：Web Inspector、压力测试、权限模型 | 开发者、追求稳定性和可观测性的用户 | 架构纪律性强，重视测试覆盖和模块边界，有 “Reborn” 重构。 |
| **Hermes Agent** | **安全与快速修复**：主动修补漏洞，维护者活跃 | 对安全高度敏感的用户、社区贡献者 | 快速响应社区反馈，修复主导的开发节奏。 |
| **ZeroClaw** | **治理与架构清理**：RFC 驱动决策，大型重构 | 开发者、关注项目长期方向与治理的社区 | 严谨的 RFC/Tracker 流程，重大改动有规划地进行。 |
| **NanoBot / NanoClaw** | **特定生态集成**：作为 OpenClaw 的轻量级/衍生替代 | 寻求特定功能（如临时聊天、远程MCP）或更简部署的用户 | 架构相对清晰，社区力量集中，但与OpenClaw功能有重叠。 |
| **CoPaw** | **以 AgentScope 为中心**：强调与 AgentScope 生命周期对齐 | 深度使用 AgentScope 生态的开发者 | 与特定框架绑定深，受上游框架演进影响大。 |
| **Moltis** | **多沙箱运行时**：专注 Docker、Apple Container 等环境的兼容性 | 在不同容器/沙箱环境中部署的用户 | 以运行时兼容层为核心差异化。 |
| **PicoClaw** | **嵌入式/边缘设备**：基于 Sipeed 硬件，强调低资源占用 | 嵌入式开发者、硬件爱好者 | 针对特定硬件优化，社区规模较小。 |
| **LobsterAI** | **企业级网关集成**：如 LiteLLM 作为统一入口 | 企业用户、IT 管理者 | 关注企业内部基础设施集成，非个人助手定位。 |

## 6. 社区热度与成熟度

- **快速迭代期（高活跃，稳定性是短板）**：**OpenClaw**、**IronClaw**、**Hermes Agent**。这三个项目拥有庞大的用户基础和维护者团队，功能迭代迅速，但 Bug 报告和用户抱怨同样呈爆炸式增长。它们正处于“跑马圈地”阶段，用功能吸引用户，但也需要用稳定性来留住用户。
- **质量巩固期（中高活跃，聚焦修复与治理）**：**ZeroClaw**、**CoPaw**、**NanoBot**。这些项目活跃度也很高，但焦点更多地从新功能转向了架构重构、Bug 修复和技术债清理。它们正在为下一阶段的稳定发展打基础，治理流程更规范。
- **稳定维护期（中低活跃，按需更新）**：**NanoClaw**、**PicoClaw**、**Moltis**、**LobsterAI**。这些项目有明确但较为狭窄的定位，社区规模有限，更新频率和响应速度相对较慢，但能维持基本运转。
- **休眠/停滞期（无活动）**：**NullClaw**、**TinyClaw**、**ZeptoClaw**。在过去 24 小时内无任何动态，或已进入事实上的停滞状态。

## 7. 值得关注的趋势信号

1.  **“稳定性”与“安全”成为硬通货**：从 OpenClaw 的“静默失败”到 Hermes 的“密钥泄露”，再到 ZeroClaw 的“审批绕过”，**用户对可靠性、安全性的关注度已全面超越对单一新功能的兴趣**。能够率先解决基础架构稳定性问题的项目，将在下一轮竞争中占据先机。
2.  **可观测性从“加分项”变为“必需品”**：NanoBot 对 Token 消耗的快速闭环响应，以及 OpenClaw 社区对任务状态持久化的强烈呼吁，表明**用户不再接受一个“黑盒”式的智能体**。提供调用级日志、成本追踪和任务状态面板，是构建用户信任的基石。
3.  **AI 安全攻击面正在快速扩大**：从传统的 API 密钥泄露，到针对 AI Agent 的**记忆投毒（OpenClaw #7707）**和**技能注入（Hermes #78515）**，攻击者正在利用 Agent 的自主性和长时记忆发起新型攻击。**防御性编程和架构级安全设计**（如权限隔离、沙箱强化）将成为优秀 Agent 项目的核心竞争力。
4.  **“开发者体验”与“产品体验”出现分野**：IronClaw 在测试（压力测试、Inspector）和开发者工具上的投入，与 CoPaw 用户对前端 UI 流畅度的抱怨形成鲜明对比。生态正在分化出**面向开发者**（强调 API、可扩展性、可测试性）和**面向终端用户**（强调 UI 交互、消息反馈、傻瓜式部署）的两类不同产品定位。
5.  **MCP 协议成为生态“兵家必争之地”**：从 NanoBot 的 MCP 崩溃到 NanoClaw 的远程 MCP 支持，再到 CoPaw 的 MCP 连接阻塞，**MCP 已被公认为 Agent 连接外部世界的核心标准**。对 MCP 支持的成熟度（稳定性、认证、Schema 优化）将直接决定一个项目能接入的工具生态广度，从而影响其最终能力上限。

---

**结论**：个人 AI 助手开源生态正处于“百舸争流”的战国时代。技术实力（如 IronClaw 的工程化）、社区规模（如 OpenClaw）和治理能力（如 ZeroClaw）是当前胜出的关键。然而，所有项目都站在同一个关键转折点上：**谁先能提供兼具强大功能、稳定可靠、安全可信的“生产级”体验，谁就能从激烈的竞争中脱颖而出，真正赢得主流用户的信任。** 对于技术决策者和开发者而言，选择哪个项目作为基础，除了关注功能活跃度，更应着重考察其社区对稳定性与安全问题的响应速度和修复记录。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-09

## 今日速览

NanoBot 在过去 24 小时内保持了较高的社区活跃度：共新增/更新 5 条 Issue，其中 3 条为 Bug 报告、2 条为功能增强请求；PR 方面共 9 条更新，其中 4 条已合并/关闭、5 条尚待处理。值得关注的是，**Token 消耗诊断与可视化**成为今日社区最聚焦的议题，其相关 Issue（#5266）获得了 13 条评论，并直接推动了两条 PR（#5293、#5299）的产出。此外，MCP 相关的稳定性问题（#5300）和功能需求（#5297）也引发了讨论。整体来看，项目在**可观测性**和 **MCP 生态健壮性**两个维度上正处于活跃迭代期，无新版本发布，项目健康度良好。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日共合并/关闭 4 条 PR，展示了项目在多条技术线上的稳步推进：

| PR | 类型 | 说明 |
|---|---|---|
| [#5293](https://github.com/HKUDS/nanobot/pull/5293) | `feature` | **按迭代记录 Token 消耗诊断数据**。解决了 #5266 中用户反馈"无法定位 Token 消耗来源"的问题，在不改变 Provider 接口的前提下，为每个 agent 执行迭代记录 token 使用明细，便于开发者定位异常消耗。 |
| [#5294](https://github.com/HKUDS/nanobot/pull/5294) | `fix` | **修复 WebUI 图片悬停裁剪问题**。移除悬停缩放与光圈效果，保留缩放光标、静态边框和键盘焦点环，并补充了针对移除/保留交互的回归测试。 |
| [#5296](https://github.com/HKUDS/nanobot/pull/5296) | `refactor` | **清除已确认的死代码**。移除 19 个仓库内部死代码单元及其前端依赖，删除 11 个仅测试用的 seam，保留 6 个需兼容性决策的 API 敏感单元。有助于降低维护成本。 |
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) | `feature` | **WebUI 新增临时聊天模式**。在新建主题入口处支持创建临时会话（首条消息后才生成），支持多个临时会话并行，且不落盘（无 session/history 文件），适合短期探索性问答场景。 |

**综合来看**：项目在今日完成了从"Token 消耗数据采集"到"WebUI 展示层"的闭环搭建（PR #5293 + #5299），同时改善了前端交互细节、清理了技术债，并引入了"临时聊天"这一新交互范式，在**可观测性与用户体验**两个方向上均有所推进。

---

## 社区热点

**🔥 最热议题：Token 消耗追踪（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）**

- **活跃度**：13 条评论，持续讨论中
- **核心诉求**：用户反馈 NanoBot 在无明显使用的情况下，2 小时内消耗了上百万 Token；缺乏细粒度的日志来确认具体是哪个调用、哪个环节产生了消耗。
- **社区响应**：该诉求已快速转化为实际行动 —— PR #5293 已合入（按迭代记录消耗），PR #5299 在 WebUI 展示消耗明细。**社区热点的诉求与项目进展形成了精准的闭环**，体现了维护者对用户声音的积极响应。

**🌐 次热议题：MCP 相关讨论（#5297、#5300）**

- [#5297](https://github.com/HKUDS/nanobot/issues/5297)（2 条评论）：请求为 MCP 增加 OAuth 网页授权能力，以满足 XMind 等需要远程网页授权的 MCP 服务接入。
- [#5300](https://github.com/HKUDS/nanobot/issues/5300)（0 评论，新开）：远程 MCP 返回 HTTP 530 时，客户端异常处理路径触发 `RuntimeError: Attempted to exit cancel scope in a different task`，导致网关崩溃/卡死、CPU 飙升、任务泄漏。
- **分析**：两条 Issue 分别指向 MCP 的**接入能力扩展**与**错误隔离健壮性**。结合此前已有多条 MCP 生态相关 PR，说明**MCP 正在成为 NanoBot 的核心扩展场景，但稳定性仍需加固**。

---

## Bug 与稳定性

| 严重程度 | Issue | 说明 | Fix PR 状态 |
|---|---|---|---|
| 🔴 **高** | [#5300](https://github.com/HKUDS/nanobot/issues/5300) | **MCP 连接失败未隔离，anyio cancel scope 跨任务崩溃**。远程 MCP 返回 HTTP 530 时触发 `RuntimeError`，导致网关进程崩溃/卡死、任务泄漏、CPU 飙升至异常高度。 | ❌ 无对应 PR |
| 🟡 **中** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | **Docker Compose 部署报错**：`/usr/local/bin/entrypoint.sh: Permission denied`，导致容器以 exit code 2 退出。 | ❌ 无对应 PR |
| 🟡 **中** | [#5271](https://github.com/HKUDS/nanobot/pull/5271)（PR） | **后台任务竞态**：`maybe_generate_webui_title` 持有的 `Session` 引用在 `await provider.chat_with_retry` 期间若用户执行 `/new`，旧任务保存可能覆盖新会话数据。 | ⏳ 待合并（标记 `priority: p0`、存在冲突） |
| 🟢 **低** | [#5206](https://github.com/HKUDS/nanobot/pull/5206)（PR） | **流式响应重复日志**：`TurnDelivery._publish_stream_end` 与 `AgentLoop._assemble_outbound` 均记录一次，导致每条流式消息出现两条 'Response to' 日志。 | ⏳ 待合并（标记 `priority: p2`、存在冲突） |
| 🟢 **低** | [#5294](https://github.com/HKUDS/nanobot/pull/5294) | **WebUI 图片悬停裁剪**（已修复） | ✅ 已合并 |

**⚠️ 关注重点**：`#5300` 的 MCP 崩溃问题影响面较大（进程崩溃 + CPU 飙升），目前尚无对应修复 PR，建议维护者优先评估。`#5271` 的会话数据竞态问题虽为 PR 形式，但标记为 P0 且尚未合并，存在数据覆盖风险，建议尽快解决合并冲突。

---

## 功能请求与路线图信号

| 功能请求 | 来源 Issue | 对应 PR / 状态 | 信号强度 |
|---|---|---|---|
| **Token 消耗细粒度日志** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | **#5293（已合并，按迭代记录）+ #5299（待合并，WebUI 展示）** | 🟢 高 —— 已进入实现阶段 |
| **MCP 的 OAuth 网页授权** | [#5297](https://github.com/HKUDS/nanobot/issues/5297) | 无 | 🟡 中 —— 属于 MCP 生态能力扩展，需评估架构改动 |
| **大工具集下 MCP Schema 预算** | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | 无 | 🟡 中 —— 关注上下文成本优化，与 #5266 相关但更聚焦于 tool schema 层面的裁剪 |
| **模型无关的计算机使用能力（computer_use + browser）** | — | **#4276（待合并）** | 🟢 高 —— 长时间开发中的大特性，合并后将显著扩展 NanoBot 的自动化边界 |

**趋势判断**：**Token 可观测性**已成为确定性需求，预计随 #5299 合入后形成完整闭环；**MCP 相关能力**（授权、稳定性、schema 优化）正在形成第二条主线，若社区持续反馈，有望成为下一版本的重点方向。

---

## 用户反馈摘要

- **Token 消耗焦虑**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）：用户明确表达了成本担忧——"消耗了巨量 Token，但用户没有任何可见活动"。强调了**调用级透明日志**对于排查的必要性，属于"看不见的成本"痛点。
- **MCP 生态接入门槛**（[#5297](https://github.com/HKUDS/nanobot/issues/5297)）：用户以 XMind MCP 为例，指出当前无法支持需要 OAuth 网页授权的 MCP——**"配置需要网页授权的 MCP 目前项目无法完成"**，反映了真实业务接入中的场景需求。
- **部署实践受阻**（[#5295](https://github.com/HKUDS/nanobot/issues/5295)）：用户按官方 `deployment.md` 操作 Docker Compose 部署即遇到入口脚本权限报错，属于 **"开箱即用"体验的短板**。
- **MCP 故障恢复能力不足**（[#5300](https://github.com/HKUDS/nanobot/issues/5300)）：单个远端 MCP 故障即可级联拖垮整个网关进程，并伴随 CPU 异常空转，说明**错误隔离与熔断机制**是用户实际运行环境中的关键期待。

---

## 待处理积压

| 项目 | 类型 | 期限 | 备注 |
|---|---|---|---|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) `feat(tools): model-agnostic computer use` | PR | 等待 2 个月（6/10 创建） | 大型特性 PR，覆盖 computer_use + browser 工具，若能合入将显著扩展工具边界，需维护者评估与排期 |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) `fix(session): prevent stale background task saves` | PR | 等待 3 天，存在冲突 | P0 级数据安全修复，需尽快解决冲突并合入 |
| [#5206](https://github.com/HKUDS/nanobot/pull/5206) `fix(delivery): log streamed responses exactly once` | PR | 等待 8 天，存在冲突 | P2 级日志去重修复，低风险，但已停留较久，建议维护者顺手处理 |
| [#5300](https://github.com/HKUDS/nanobot/issues/5300) `MCP连接失败未隔离` | Issue | 新开（今日） | 严重程度高，尚无 PR，建议尽快指派开发人员响应 |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) `docker compose entrypoint.sh Permission denied` | Issue | 新开（今日） | 阻断用户部署流程，建议排查镜像入口脚本权限设置 |

---

**总结**：NanoBot 在 2026-08-09 展现出健康的社区活跃度与响应速度，Token 可观测性建设已见成效。接下来需要重点关注 MCP 稳定性加固（#5300）、P0 会话竞态修复（#5271）以及部署体验优化（#5295）。长期来看，computer_use 大型特性（#4276）的推进节奏值得关注。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。这是基于 Hermes Agent 仓库 2026-08-09 日数据生成的项目动态日报。

---

### Hermes Agent 项目动态日报 (2026-08-09)

#### 1. 今日速览

今日 Hermes Agent 项目活跃度极高，Issue 和 PR 更新均达到 50 条的上限。虽无新版本发布，但维护者（尤其是 teknium1）非常活跃，提交了多个关键的 Bug 修复 PR，并积极“抢救”（salvage）社区贡献的补丁。社区反馈强烈，其中对**更新机制稳定性**和**安全边界（Skills 注入、密钥泄露）**的担忧成为讨论焦点。尽管存在一些用户挫败感的情绪，但整体上项目正处于密集的缺陷修复和安全加固阶段，向前推进的势头明显。

#### 2. 版本发布

今日没有新的 Release 发布。

---

#### 3. 项目进展

今日没有 PR 被合并的记录（已合并/关闭: 4），但维护者提交了大量待合并的修复 PR，显示出项目正处于积极的修复周期。主要进展体现在对**安全**、**稳定性**和**兼容性**问题的快速响应上：

- **安全加固与修复**：
  - **密钥作用域隔离**：PR #82151 修复了多配置文件（multiplexed profiles）下模型切换时凭据读取未隔离的问题，防止一个 Profile 看到或采用另一个 Profile 的 API 密钥。这一安全问题也出现在 #80966 等 Issue 中，正在被系统性地解决。
  - **凭据轮换修复**：PR #82149 修复了速率限制轮换时，因凭据池条目 ID 过期而“误伤”健康备用密钥的问题。
  - **技能（Skill）安全扫描**：Issue #78515 提出 Agent 创建的技能默认绕过安全检查并注入所有会话的系统提示词，这是一个重要的防御缺陷。维护者已快速响应（PR #82146），为后台审查（background review）增加配置化工具支持，并维持默认安全策略。
- **稳定性与兼容性修复**：
  - **FTS5 搜索修复**：PR #82152 修复了搜索时因未转义特殊字符导致 `it's`、`50%` 等常见查询返回空结果的问题。
  - **更新机制修复**：PR #82158 修复了 Windows 桌面版更新因 venv 扫描截断的 cmdline 导致的误判（认为有进程占用）而中止的问题。
  - **模型切换修复**：PR #67571 修复了模型别名排序问题，避免选择到旧的、日期戳更大的模型版本。

---

#### 4. 社区热点

今日最吸引注意力的几个议题反映了用户对**核心体验**和**安全**的强烈关注：

- **更新恐惧症 (Issue #81969)**： “scared to update because every other update bricks everything!” 这个 Issue 获得了 6 条评论，代表了部分用户对更新稳定性的强烈不满。这通常与 #75778 (Mac 桌面更新重复进程) 和 #62171 (Linux npm 12 兼容性) 等具体故障相关。用户的挫败感源于反复进行的重新配置和数据丢失。这不仅是 Bug，更是信任危机。

- **Skills 注入安全风险 (Issue #78515)**： 这也是今日热议的话题。Agent 生成的技能默认不进行安全扫描并被注入到每个会话的提示词中，这被视为一个严重的安全隐患。社区用户 `EvolveAegis` 以防御性深度（defense-in-depth）的视角提出了这个问题，表明用户非常关注 AI  Agent 在自动化过程中可能引入的恶意代码或提示词注入风险。

- **上下文压缩的数据丢失 (Issue #70846)**： 用户 `jhmonroe` 报告称，为 Agent 上下文做的压缩（Compaction）也导致人类可读的历史消息消失。这直接影响了用户的使用场景（比如事后撰写文档），是一个影响核心体验的高频痛点，相关讨论已经有 5 条。

---

#### 5. Bug 与稳定性

**高严重度（P1）**：

- **[Bug] 更新恐惧症 (Issue #81969)**：这是用户对近期多个更新问题的集中反馈，虽然不是技术性 Bug，但严重影响了产品信心。相关修复 PR (#82158) 已提交。

**中高严重度（P2，影响核心功能或数据）**：

- **[Bug] 更新/安装问题**：
  - **Desktop update handoff duplicate** (#75778): macOS 桌面更新时产生两个进程，导致错误失败提示。
  - **_tui_need_npm_install 每次启动都触发安装** (#66978): TUI 每次启动都运行 npm install，影响启动体验。
  - **Agent flush 压缩后丢失** (#82001): 长对话压缩后，Agent 继续输出时出现会话身份交接错误，并给出误导性的“磁盘已满”提示。
  - **state.db FTS 索引损坏** (#63386): 影响会话搜索和交接状态。
  - **Fork 会话双重编码** (#57240): Fork 出的会话会丢失推理过程回放。
- **[Bug] 功能问题**：
  - **Compaction 导致历史消息消失** (#70846): 压缩后人类可读的历史消失。
  - **ACP 挂起** (#39245): 当 usage_update 不返回时，ACP 的 prompt 调用可能永远挂起。
  - **lifecycle_guard 嵌入空字节错误** (#81322): 执行指向 ELF 二进制的路径（如 venv python）时被错误拒绝。
  - **MCP 冷启动挂起** (#81995): 被闲置杀死的 MCP server 重新拉起失败时，工具调用会挂起整整 300 秒没有快速失败。
- **[安全] 漏洞**：
  - **ANSI 转义绕过掩码** (#81012): 用 ANSI 颜色代码包裹的密钥会完整泄露。
  - **无关键词的密钥泄露** (#80966): `SPOTIFY_CLIENT_ID` 这类不含 `KEY`/`SECRET` 关键词的密钥会完整泄露。
  - **Skills Guard 默认关闭** (#78515): 见上文热点分析。

**中低严重度（P3）**：

- **FTS 搜索无声返回零结果** (PR #82152): 该问题已被修复。
- **npm/GitHub 生态兼容性**：#43997 (npm 11 warnings), #62171 (npm 12 桌面版问题)。

**今日 Bug 亮点**： 社区对安全问题的关注度显著上升，特别是关于密钥和内容注入的绕过技术 (#81012, #80966)。同时，上下文压缩导致的数据丢失问题 (#70846, #82001) 也成为了一个明显的稳定性隐患。

---

#### 6. 功能请求与路线图信号

以下功能请求获得了社区的关注，并可能被纳入未来版本的考量：

- **统一内容搜索 (Issue #49103)**：用户希望在 Cmd+K 命令面板中集成文件、会话历史和技能的全局搜索。这符合高级用户追求效率的需求，且与现有搜索模块（PR #82152）有协同效应。
- **内置记忆的生命周期管理 (Issue #78307)**：用户 `CrayonDing0909` 提出了对 `MEMORY.md` 和 `USER.md` 这类内置记忆的检查、去重、整合和清理等管理功能。这与当前对 Agent 长期记忆和上下文管理的优化方向（压缩、清理等）一致。
- **ToolCallStormBreaker (Issue #35573)**：通过一种机制来抑制模型重复调用同一工具的循环，这能显著减少 token 浪费和用户挫败感。从 PR #81704 可以看出，已有相关机制来处理“合成提示”（synthetic nudges），这是一个积极的信号。
- **Cron 任务多重交付 (Issue #72337)**：用户希望 Cron 任务的结果可以同时本地保存并推送至聊天，该功能已实现并关闭。

---

#### 7. 用户反馈摘要

- **主要痛点**：
  - **更新体验极差**：用户 `secretgspot` 的抱怨非常尖锐，“every other update breaks everything and I keep losing everything”，这反映了更新流程的脆弱性已严重影响用户信任。
  - **数据丢失/不可见**：用户 `jhmonroe` 对压缩导致历史消息丢失感到困扰，称“makes it impossible to go back and read what you did”，这阻碍了关键的工作流（如后期文档化）。
  - **误导性错误提示**：多个 Issue (#82001, #75778) 提到在磁盘健康、更新进程未冲突的情况下，软件却给出了“磁盘已满”或“更新失败”的错误提示，极大地增加了排查问题的难度。
- **使用场景**：
  - 用户依赖记忆和技能系统来扩展 Agent 能力，因此对相关的安全漏洞（#78515）和权限边界（如 PR #82157）非常关注。
  - 跨平台使用（Windows, macOS, Linux）是常态，任何一个平台的更新或功能故障都会被迅速放大。
- **正面反馈**： 尽管有情绪化抱怨，但社区中出现了大量高质量的 Bug 报告（包括安全研究员提交的详细攻击面分析），例如 `kshitijk4poor` 提交的多个安全问题。这体现了社区的专业性，也说明用户对项目的长期健康度仍然关注。

---

#### 8. 待处理积压

以下 Issue 或 PR 长期未获得维护者响应或状态更新，值得关注：

- **[OPEN] [RFC] ToolCallStormBreaker** (#35573) (更新时间 2026-08-09)：这个关于抑制工具调用循环的 RFC 已讨论数月，需要维护者决策。虽然已有相关的修复（PR #81704），但对于一个更通用的解决方案仍未表态。
- **[OPEN] 生命周期管理请求** (#78307) 与 **[OPEN] Feature: Unified content search** (#49103)：这些功能请求已开放数周且评论活跃，考虑到维护者的活跃度，这可能是由于它们被标记为 P3（低优先级）或仍在内部讨论中。
- **大量安全相关 PR 待合并**：今日有多个关键的、由维护者 `teknium1` 提交的安全修复 PR（如 #82151, #82149）仍处于待合并状态。虽然它们是在今日提交的，但鉴于其安全性质，应优先考虑合并节奏，避免修复时间过长。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-09** | **数据来源：github.com/sipeed/picoclaw**


## 1. 今日速览

PicoClaw 项目过去24小时活跃度中等偏低。共产生 3 条 Issue 更新（2 条活跃、1 条关闭）和 4 条 PR 更新（全部待合并，无已合并项），无新版本发布。值得关注的是，今日有两项针对通道功能的高价值 PR 正在等待合并：一是修复 WhatsApp 通道因客户端版本过期导致的 "Client outdated (405)" 连接中断问题，二是通过调整动态上下文位置优化前缀缓存（prefix caching）命中率。另外有一条已存在较长时间的 IRC 长消息支持 Issue 和一条 DeltaChat 通道重构 PR 持续挂着 `stale` 标签，社区关注度在缓慢积聚。整体来看，项目维护活跃、方向明确，但 PR 合并节奏偏慢，需警惕积压风险。


## 2. 版本发布

过去24小时无新版本发布。


## 3. 项目进展

过去24小时无 PR 被合并，但有 4 个 PR 有新动态，其中 2 个值得重点关注：

- **[#3321] fix(agent): move dynamic context after history to preserve prefix caching**（作者: grrowl，2026-08-07 创建）— 该 PR 将 `## Current Time`、`## Runtime` 等动态上下文块从系统消息中移至对话历史之后，以适配前缀缓存的位置敏感性，可显著提升长对话场景下的推理缓存命中率和响应速度。属性能优化类改动，风险较低。
  - 链接：https://github.com/sipeed/picoclaw/pull/3321

- **[#3320] fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"**（作者: grrowl，2026-08-07 创建）— 修复 WhatsApp 原生通道因依赖库版本过旧、被服务器拒绝连接并报 `Client outdated (405)` 的问题。升级后 WhatsApp 通道可恢复稳定连接。属高价值修复。
  - 链接：https://github.com/sipeed/picoclaw/pull/3320

> 另有 2 个 PR（#3222 DeltaChat 重构、#3193 Simplex 通道）仍处于长时间待合并状态，详见第 8 节。


## 4. 社区热点

今日热度最高的讨论集中在两个方向：

**① IRC 长消息支持（Issue #3287，4 条评论）**
- 链接：https://github.com/sipeed/picoclaw/issues/3287
- 用户 `superuser-does` 提出 IRCv3 协议中长消息（超过 512 字节）被自动拆分为多条的问题，希望 PicoClaw 能将拆分后的片段识别为一条完整消息。该 Issue 已挂 `stale` 标签，但评论数仍在增长，说明用户对该场景有实际需求。评论区目前无维护者明确表态。

**② OAuth 2.1 支持（Issue #3302，2 条评论）**
- 链接：https://github.com/sipeed/picoclaw/issues/3302
- 用户请求为 MCP 服务器支持 OAuth 2.1 认证（对标 #2546）。该请求目前被标记为 "Nice-to-Have / Enhancement"，暂无 Roadmap 对齐，属远期增强需求。

> 两个热点均处于"有需求、无响应"状态，建议维护者尽快回应，避免社区产生"提了没人理"的印象。


## 5. Bug 与稳定性

过去24小时报告 1 条 Bug，相关修复已有 PR 在途：

| 严重程度 | 问题描述 | Issue/PR 链接 | 状态 |
|---------|---------|--------------|------|
| 中 | **WhatsApp 通道连接后约 5 秒被断开**，日志显示 `Client outdated (405)`，无自动重连。根因是依赖库 `go.mau.fi/whatsmeow` 版本过旧 | Issue 见 PR #3320 | 修复 PR #3320 待合并（bump 依赖） |

另有 1 条 Bug 于今日关闭：

- **[#3292] [BUG] 聊天界面输入框在选中时 CPU 占用过高**（作者: Acdfmwaopuio）— 在 Firefox 中聚焦输入框时 CPU 飙高，影响体验。该 Issue 今日被关闭，但关闭原因未知（可能已修复或判定为外部因素）。
  - 链接：https://github.com/sipeed/picoclaw/issues/3292

> 无崩溃级或数据安全类 Bug 报告。项目整体稳定性良好。


## 6. 功能请求与路线图信号

今日活跃的功能请求按优先级建议排序如下：

| 优先级建议 | 功能请求 | Issue/PR 链接 | 信号强度 |
|-----------|---------|--------------|---------|
| 中 | **IRC 长消息合并识别**：自动合并 IRCv3 中被拆分的超长消息为单条完整消息 | Issue #3287 | 中：4 条评论、有真实使用场景描述 |
| 中 | **Simplex 通道类型支持**：新增 Simplex 协议通道 | PR #3193 | 高：代码已实现，等待合并 |
| 低 | **OAuth 2.1 for MCP 服务器**：对标 #2546 的安全增强 | Issue #3302 | 低：标记为 Nice-to-Have，无 Roadmap 对齐 |
| 低 | **DeltaChat 通道重构**：清理代码、移除旧特性、更新文档（-200 LOC） | PR #3222 | 高：代码已完成，等待合并 |

**纳入下一版本的可能性判断：**
- **Simplex 通道（#3193）和 DeltaChat 重构（#3222）**：代码均已就绪，随时可合入，大概率进入下一版本。
- **IRC 长消息（#3287）**：有明确场景，但无 PR 对应，短期内落地可能性不大，建议维护者标记 "help wanted"。
- **OAuth 2.1（#3302）**：远期增强，优先级低，短期内不会进入开发队列。


## 7. 用户反馈摘要

- **WhatsApp 通道不可用（来自 PR #3320 提交信息）**：用户反馈 WhatsApp 通道目前完全不可用（连接即断、不重连），影响实际使用。该问题在 PR 中给出了明确的根因和修复方案，用户积极贡献修复代码，说明社区自愈能力较强。
  - 链接：https://github.com/sipeed/picoclaw/pull/3320

- **IRC 长消息场景需求明确（来自 Issue #3287）**：用户描述 "IRC is limited to 512 bytes by default, and newlines indicate a new message. If a message is over 512 bytes, it is automatically split by IRC clients." 期望 PicoClaw 能理解这些拆分后的片段属于同一条消息。该场景在 IRC 群组运维、机器人通知等场景中较为常见。
  - 链接：https://github.com/sipeed/picoclaw/issues/3287

- **输入框 CPU 占用问题（来自 Issue #3292）**：用户报告在 Firefox 中聚焦聊天输入框时 CPU 占用异常高，但 Issue 今日关闭，未明确关闭原因。若用户未收到合理解释，可能引发不满。
  - 链接：https://github.com/sipeed/picoclaw/issues/3292

> 总体而言，用户反馈集中在通道功能的稳定性和可用性上。社区对技术细节的关注度较高，倾向于直接给出修复方案（如 #3320、#3222），整体协作氛围良好。


## 8. 待处理积压

以下 Issue/PR 长期未获维护者响应，建议优先处理：

| 类型 | 编号 | 标题 | 等待时长 | 状态 | 建议 |
|------|------|------|---------|------|------|
| PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation (-200LOC) | 37 天 | stale，待合并 | 代码已完成、改动明确（-200 LOC + 文档更新），建议尽快 review 并合入，避免分支过期 |
| PR | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | 43 天 | stale，待合并 | 新通道功能，长期挂起会打击贡献者积极性。建议尽快安排 review 或明确拒绝 |
| Issue | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | [Feature] Better support long messages in IRC | 18 天 | stale，4 条评论 | 有真实场景，建议维护者回复可行性或标记 "help wanted" |
| Issue | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Support OAuth 2.1 for MCP servers | 10 天 | 无维护者回应 | 虽为 Nice-to-Have，建议至少给出 Roadmap 上的预期时间或明确暂不支持的说明 |

> **⚠️ 重点关注**：PR #3193（Simplex 通道）和 PR #3222（DeltaChat 重构）均已等待超过一个月且挂着 `stale` 标签。长期不合并不仅浪费已有代码成果，还可能因代码冲突导致 "stale" 逐渐失效，最终需贡献者重写。建议维护者在本周内安排 Review。


## 📊 项目健康度总结

| 维度 | 评价 |
|------|------|
| 活跃度 | ★★☆☆☆（24h 内无 PR 合并、无新版本，主要依赖存量贡献者在推进） |
| 代码质量 | ★★★★☆（#3321 的前缀缓存优化体现对性能细节的把控，#3222 重构减码 200 行体现技术债清理意识） |
| 社区参与 | ★★★☆☆（用户主动提交高质量修复（#3320），但对维护者响应速度有所不满） |
| 响应速度 | ★★☆☆☆（多个 PR/Issue 长期无维护者回复，最长达 43 天） |
| 稳定性 | ★★★★☆（仅 1 个 WhatsApp 通道 Bug，且有现成修复方案，无崩溃级问题） |

**建议维护者今日动作：** ① 优先合并 PR #3320（WhatsApp 修复，阻断性问题）；② 安排时间 review PR #3321（前缀缓存优化）；③ 对 #3193 和 #3222 至少给出明确的时间预期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-09

---

## 1. 今日速览

NanoClaw 在过去 24 小时内保持中等活跃度：共收到 8 条 Issue 更新（5 新开/活跃、3 关闭）和 6 条 PR 更新（3 待合并、3 已合并/关闭），无新版本发布。值得关注的是，**Discord 审批按钮失效**（#3201）已关闭并伴随修复 PR #3185 待合并，这是一个直接影响用户操作的关键修复；同时 Mattermost 频道集成出现**两条并存 PR**（#3199 已关闭、#3202 新开），显示集成方案仍在迭代演进。此外，新增的 3 条开放性 Issue 直指代码库内部一致性问题（附件路径校验、Dockerfile 技能文档过时、ProviderEvent 类型缺口），暗示近期重构存在**遗留的技术债**。整体来看，项目处于功能扩展与稳定性修补并行的阶段，社区贡献活跃但部分方案的收敛仍需维护者介入。

---

## 3. 项目进展

今日合并/关闭的 3 条 PR 主要涉及**技能扩展**与**架构兼容性调整**：

- **#2776 [已关闭] feat: support remote HTTP/SSE MCP servers** — 将 `McpServerConfig` 扩展为联合类型，新增 `McpServerRemoteConfig` 以支持远程 HTTP/SSE MCP 服务器，同时为 `ncl groups config add-mcp-server` 增加 `--type`、`--url`、`--header` 等参数。这是对 MCP 支持模型的**架构级增强**，为后续远程工具集成铺平了道路。 *参见 [PR #2776](https://github.com/nanocoai/nanoclaw/pull/2776)*
- **#2777 [已关闭] feat: add /add-strava skill for official Strava MCP** — 新增 `/add-strava` 技能，通过 HTTP 传输接入官方 Strava MCP 端点，并附带宿主侧 OAuth 流程（`scripts/strava-oauth.ts`）与令牌自动刷新模块。该技能依赖 #2776 的远程 MCP 支持，两者同日合并，**形成了完整的功能闭环**。 *参见 [PR #2777](https://github.com/nanocoai/nanoclaw/pull/2777)*
- **#3199 [已关闭] Add Mattermost channel integration (v2 ChannelAdapter)** — 基于当前 `ChannelAdapter`/`channel-registry.ts` 契约重新实现的 Mattermost 集成，替代了过时的 pre-v2 架构 PR #546。但该 PR 已关闭，**由 #3202 取代**继续推进（见下节），合并状态仍悬而未决。 *参见 [PR #3199](https://github.com/nanocoai/nanoclaw/pull/3199)*

**项目整体向前推进了两个完整的技能/集成模块（远程 MCP 支持 + Strava 技能）**，尤其是远程 MCP 能力对多智能体/多方工具接入的场景意义重大。Mattermost 集成处于迭代中，尚未落地。

---

## 4. 社区热点

今日讨论热度最高的条目均集中在 **Discord 审批流程** 相关问题上：

- **Issue #3201 [已关闭] Discord approval button clicks not registering** — 获 2 条评论，是今日唯一有实质性讨论的 Issue。用户报告 Discord 审批卡片上的 Approve 按钮点击后仍显示 "0 by [user]"，审批请求最终被拒绝。该问题直指 **`ask_question`/审批卡片交互路径**，影响管理员审批配置更新的核心使用场景。 *参见 [Issue #3201](https://github.com/nanocoai/nanoclaw/issues/3201)*

- **PR #3185 [待合并] fix(discord): strip \n delimiter in webhook interaction custom_id** — 虽评论数为 undefined，但该 PR 直接关联 #3201 的修复：在 webhook 交互路径中移除 `custom_id` 中的 `\n` 分隔符，使审批选项可被正确解析。与 #3201 同日更新，**形成问题-修复的完整闭环**。 *参见 [PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185)*

**用户核心诉求**：Discord 审批按钮作为 NanoClaw 中管理员审批配置变更的关键交互入口，其失效会导致**整个审批链路不可用**。修复 PR 已就绪，社区希望尽快合并。

---

## 5. Bug 与稳定性

今日报告 4 条 Bug Issue，按严重程度排列如下：

**🔴 高 — 审批功能完全失效（已修复，待合并）**
- **#3201 [已关闭] Discord 审批按钮点击无响应** — 点击 Approve 后投票未记录，请求被错误拒绝。阻断管理员审批流程。**修复 PR #3185 已提交待合并**。 *参见 [Issue #3201](https://github.com/nanocoai/nanoclaw/issues/3201) · [PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185)*

**🟠 中 — 附件静默丢失（未修复）**
- **#3206 [开放] 消息 ID 含路径分隔符（如 Google Chat）时附件被静默丢弃** — `extractAttachmentFiles` 依赖 `isSafeAttachmentName(messageId)` 检查，凡含 `/` 或 `\` 的 ID 均被拒绝，导致附件 staging 阶段即丢失，且无任何日志提示。 *参见 [Issue #3206](https://github.com/nanocoai/nanoclaw/issues/3206)*

**🟠 中 — 会话数据库锁竞争（已修复并关闭）**
- **#3177 [已关闭] Docker 跨挂载文件系统上会话数据库锁竞争** — 根因是 SQLite DELETE journal 模式在 Docker 挂载（如 VirtioFS）上无法传播，导致 29,000+ readonly 错误和间歇性投递失败。该问题于 8 月 2 日报告，**8 月 8 日关闭，说明已有修复合并**。 *参见 [Issue #3177](https://github.com/nanocoai/nanoclaw/issues/3177)*

**🟡 低 — 历史遗留问题（观察中）**
- **#2528 [开放] Signal 频道图片/PDF 附件在容器内不可达** — 5 月 18 日报告，至今无评论响应。附件到达宿主机但 agent 容器内无法打开，涉及信号频道的路径映射/权限问题。 *参见 [Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)*

**⚠️ 特别说明 — 类型/架构不一致（新增信号）**
- **#3203 [开放] codex provider 发出未声明的 `file` ProviderEvent** — 当前 `main` 分支上 `/add-codex` 会导致容器 typecheck 失败，且生成图片无人消费。该问题指向**代码生成路径的架构缺口**，当前处于不可用状态。 *参见 [Issue #3203](https://github.com/nanocoai/nanoclaw/issues/3203)*

---

## 6. 功能请求与路线图信号

今日社区提出了 2 项明确的功能需求：

- **#3205 [开放] 支持持久的 group-scoped OneCLI secret 分配** — 用户 chiptoe-svg 指出当前 spawn-time secret 分配存在 **两个互相矛盾的设计方向**，且缺乏 per-group 持久化模型。这是一个**部署运维侧的重要能力缺口**，在用户数较多或多群组场景下尤为关键。 *参见 [Issue #3205](https://github.com/nanocoai/nanoclaw/issues/3205)*
- **#3204 [开放] `add-opencode` 技能文档与代码库现状脱节** — 文档仍指示编辑已将不再包含按 CLI 安装块的 Dockerfile，且守卫测试断言的是旧结构。该问题更像 **技术债清理**而非新功能，但若不修复，新用户按文档操作将直接失败。 *参见 [Issue #3204](https://github.com/nanocoai/nanoclaw/issues/3204)*

**路线图信号**：
- **Mattermost 集成** — PR #3202 正在推进，基于社区包 `chat-adapter-mattermost` 封装，遵循与 `slack.ts` 相同的模式。此项已完成初步实现，极可能纳入下一版本。 *参见 [PR #3202](https://github.com/nanocoai/nanoclaw/pull/3202)*
- **Telegram 原生富文本渲染** — PR #2877 已开放一个多月，提出基于 Bot API 10.1 `sendRichMessage` 实现原生富文本渲染。若纳入，将**显著提升 Telegram 频道的消息呈现能力**。 *参见 [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)*

---

## 7. 用户反馈摘要

- **Discord 审批按钮失效对管理员协作流程冲击明显**，用户在 #3201 中描述的复现步骤和预期行为清晰，显示该功能是被高频使用的核心路径。关闭状态意味着已有修复（#3185），但用户尚未验证。
- **SQLite 锁竞争问题**（#3177）在 Docker 部署场景下引发 29,000+ readonly 错误，说明多容器/多挂载场景下的**数据库稳定性**是用户痛点之一。该问题关闭，值得通过 Release Note 重点告知。
- **Signal 频道附件问题**（#2528）两个月来零评论，既说明该路径可能使用率低，也可能反映维护者对非主流渠道关注不足。
- **#3205 OneCLI secret 分配** 的发起者以“There's an unresolved design fork”开篇，语气专业且克制，反映了对项目多用户架构的深入理解，但也暗示**设计方向的分歧暴露给社区可能引发困惑**。

---

## 8. 待处理积压

以下条目长期未获响应或推进，需要维护者关注：

| 条目 | 类型 | 提出时间 | 最后更新 | 说明 |
|------|------|---------|---------|------|
| [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Issue | 2026-05-18 | 2026-08-08 | Signal 频道图片/PDF 附件在容器内不可达，**81 天无维护者响应** |
| [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) | PR | 2026-06-28 | 2026-08-08 | Telegram 原生产富文本渲染方案，**41 天未获评审或合并**，功能完整但停滞 |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | PR（优先） | 2026-08-04 | 2026-08-08 | **Discord 审批修复**，对应 #3201 已关闭，需尽快合并并发布 |
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | Issue | 2026-08-08 | 2026-08-08 | codex provider 类型缺口，**`/add-codex` 当前不可用**，建议优先安排修复 |

**维护建议**：
1. **优先处理 #3185 合并与发布**，关闭 #3201 需用户验证修复；
2. 对 #2528 和 #2877 明确表态（接受/拒绝/延后），避免 PR 与 Issue 长期悬置损耗社区信心；
3. #3203 与 #3204 均指向近期重构的**文档/契约同步**问题，建议指派专人统一核对，避免同类问题蔓延。

---

*日报生成时间：2026-08-09 · 数据来源：github.com/nanocoai/nanoclaw · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 —— 2026-08-09

## 1. 今日速览

IronClaw 项目在过去 24 小时内保持了非常活跃的节奏，这延续了项目在 8 月初以来的持续高投入。特别是值得关注的是，合并/关闭的 PR 与 Issues 数量很大，表明维护者正在强力清理积压工作。但是有一个信号值得高度关注：50 条 PR 中待合并的高达 18 条，积压 PR 不仅没被消化，还有堆积的趋势。这种**大量合并 + 大量新开**的状态说明项目正处于快速交付期，团队在执行力上显然很强，但仍需警惕规模的增长正逼近团队的消化极限。

核心动作上，合并动作集中在解决回归/缺陷和增加测试覆盖，尤其是围绕**Inspector 工具栏、outbound 送达链路、技能管理**这几个模块。另有一个新的重要功能——**浏览器 Web Push 推送通知**已经开始浮出水面，预示着 IronClaw 正开始走向一个（可选地）具备完整推送能力的前台应用形态，这是一个重要的产品化信号。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展（近 24 小时合并/关闭的 PR 亮点）

本日关闭/合并的 PR 中，最有价值的进展集中在 **Inspector 完整化、送达链路修复、技能入选机制（model choice）** 三大块：

| PR | 标题 | 核心价值 |
|---|---|---|
| [#7280](https://github.com/nearai/ironclaw/pull/7280) | test(inspector): add browser, security, and operator coverage | 极大的夯实了 Web Debug Inspector 的浏览器、安全、运营边界测试，配合 [#7226](https://github.com/nearai/ironclaw/issues/7226)（对应 Issue）的关闭，标志着这一模块已趋于成熟，即将成为正式可用的「运营工具常驻能力」。 |
| [#7382](https://github.com/nearai/ironclaw/pull/7382) | feat(stress): scripted tool-call workload with durable write read-back | 实现 #7360 的第一阶段，让 API 负载测试能够确定性驱动工具调用序列并验证持久化写回读，将测试覆盖率提升到了过去 mock 模型无法触达的「内置能力写路径」。 |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | fix(skills): the model chooses the skill, not a keyword scorer | 这是技能模块一个重要的架构级修正。PR 明确表示：**宿主（host）不再自己做技能选择，模型决定调用哪个技能**。彻底删除了关键词打分器的路径（该路径留下了不少不可追溯的疑难杂症），是 #6941 epic 里的关键落子。 |
| [#7377](https://github.com/nearai/ironclaw/pull/7377) | feat!: a run acts as its invoker — remove shared-route subject binding | 一个「breaking change」级别的 PR，将「一次 run 由谁发起，就以谁的身份行动」这个决策统一到了三条路径上，并完成了 2026-08-08 审计的加固。这个 PR 直接影响权限模型的正确性，需要关注它给下游带来的连锁反应（多 PR 里**已多次提到**需在其合并后进行剥皮/重定基）。 |
| [#7393](https://github.com/nearai/ironclaw/pull/7393) | test(disclosure): measure the Core delivery pair in the wide-catalog benchmark | 紧跟 #7390 之后的性能基准补充，确保 Core-tier 相关的两个工具路径有定量的性能基线覆盖。 |

| [#7389](https://github.com/nearai/ironclaw/pull/7389) | fix(live-qa): verify triggered Slack delivery through the two-lane contract | 修复了由于 #7157 合并导致的 **live-qa 管道持续红** 的问题（该管道自 #7157 合并起就跑一次挂一次），现在测试会去核对新的 two-lane 契约。 |

**总体判断**：项目整体向前迈进了 **0.5 ~ 1 个 sprint**，方向是「补齐关键链路的测试正确性」+「修复回归」，确实在为未来版本的稳定性打地基。

---

## 4. 社区热点（高活跃度/高评论）

本次数据中，50 个 PR 都没有显示评论数据（实际评论数据被截断了），但从 Issues 的评论数与主题来看，当前最「热」的两个话题是：

### 话题 1：Reborn 重构迁移（大量半年前的 Issue 全被关闭）

历史 Issues #3280、#3286、#3287、#3288、#3285、#3577、#3582、#3484 等大量 **5、6 月创建** 的史诗级迁移 Issue 在本日被集中关闭。

- **典型代表 1**：[#3280 — Add ProductWorkflow and InboundTurnService facade](https://github.com/nearai/ironclaw/issues/3280)（评论 7，👍 0）
- **典型代表 2**：[#3288 — production/scoped capability lifecycle admin parity](https://github.com/nearai/ironclaw/issues/3288)（评论 2）

**背后诉求**：这绝对不是「完成了」而是**大规模收尾**，意味着 Reborn 主流程（产品工作流、循环/回合驱动、CLI/TUI、Webhook 迁移）已经达到 V1 的「可用态」，团队正在清理旧架构债务。这也解释了为什么近期合并的 PR 中会频繁出现 `fix!(...)` 这样带有 breaking change 的提交——**老架构正在被拔掉**。

### 话题 2：Web Push 与通知能力

[PR #7398 — feat(web-push): browser push notifications + PWA](https://github.com/nearai/ironclaw/pull/7398) 打出了「size: XL」的标签，是一个要把 Web 应用变为**one-first-party 通知渠道**的 PR，与 Slack/Telegram 达成同等地位。

**背后诉求**：产品团队显然意识到了仅靠 Slack/Telegram 无法覆盖「个人桌面端」的场景，Web Push 能补齐「无需安装 App 也能收到 agent 响应」的关键短板，是在为**个人 AI 助手在家用环境落地**做铺垫。

---

## 5. Bug 与稳定性（按严重程度排序）

### 🔴 高严重度——生产路径真实安全/一致性 bug

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 高 | [#6989](https://github.com/nearai/ironclaw/issues/6989) | **Token 记账错误**：`ModelWorkRequest` 估算输入 token 时，实际计算的是 `content.ref` 这个**引用字符串的长度**，而不是**被引用内容的长度**。这会导致用户在实际使用时 token 用量被**严重低估或高估**，直接影响计费与上下文管理。 | 暂无明确 PR，标记为 P1，正在处理中 |
| 🔴 高 | [#7395](https://github.com/nearai/ironclaw/pull/7395) | **TOCTOU 竞态 + Sending-row claim 丢失**。[#7395](https://github.com/nearai/ironclaw/pull/7395) 对 [outbound_state_store.rs](https://github.com/nearai/ironclaw/blob/feature-branch/crates/domains/ironclaw_outbound/src/outbound_state_store.rs) 中的 `claim_delivery_attempt_for_send` 做了修复，声称 **claim 败者可以重开失败行**，消除了「明明失败却标记成功」的隐患。另 [#7028](https://github.com/nearai/ironclaw/pull/7028) 确保恢复期间**保留终态**不被重启覆盖。 | **已提交修复**（#7395、#7028 均在待合并队列中，且相互依赖） |
| 🟠 中 | [#7391](https://github.com/nearai/ironclaw/issues/7391) | **死代码警报**：`SafetyLayer::validate_input` 与 `scan_inbound_for_secrets` 在**真实的 Reborn 实时回合主路径上没有任何调用方**，而官方安全文档却宣称有一套「Validate, Sanitize, Detect Leaks」流程。用户输入有可能根本没有过安全检测就直接进入了 LLM。 | 暂无修复 PR，Issue 刚开 |
| 🟠 中 | [#7171](https://github.com/nearai/ironclaw/pull/7171) | **技能安装后直接消失**：刚装好的技能既不出现在 Settings 里，也无法激活。作者声称 Root cause 是「DB 挂了但文件系统目录是空的」，并已改成**多个 skill mount 共享一棵 DB 树**。（对应 Issue #7168） | **已提交修复**（#6938 中已合并，此 PR 是收尾） |

### 🟡 低/回归类

| 严重程度 | PR/Issue | 描述 |
|---|---|---|
| 🟡 低 | [#7394](https://github.com/nearai/ironclaw/pull/7394) | CI 脚本 `SANDBOX_DOCKER_EXACT_PATHS` 硬编码 crate 前缀，在 crate 结构变动后会导致错误的沙箱路径，有待修复的动态化方案。 |
| 🟡 低 | [#7389](https://github.com/nearai/ironclaw/pull/7389) | live-qa 管道因 #7157 的合并连续红了 7 天（每天失败），原因是它还在等一个已被移除的推送记录（triggered-run-delivery outcome）。已合并修复。 |

---

## 6. 功能请求与路线图信号

### 值得关注的新增能力（可能入选 v1.1.0 / v1.2.0）

| 功能 | 线索 | 可能性评估 |
|---|---|---|
| 📬 **Web Push 通知/PWA** | 大 PR [#7398](https://github.com/nearai/ironclaw/pull/7398) 已提交，W3C Web Push 全协议栈，含 VAPID 与加密 | **高**：XL 规模的 PR + core contributor + 全新 channel category，公司显然把它当作产品力的一部分在推 |
| 📊 **Web Debug Inspector 收尾** | 多 PR（#7291 #7280 #7225 #7226）密集合并，UI 统计、本地化、测试完备 | **极高**：功能已进入「完成态」，大概率随 v1.1.0 发布 |
| 🧰 **Pinned omp tool surface** | Issue [#7392](https://github.com/nearai/ironclaw/issues/7392)：用 `can1357/oh-my-pi` 的契约替换自有编码工具 | **中**：策略性动作，涉及技术栈替换，可能需要数个 sprint |
| 🛠️ **数据迁移工具** | Issue [#6939](https://github.com/nearai/ironclaw/issues/6939)：为 Hermes/Openclaw 用户提供迁移工具 | **中**：p2 优先级，开发者已给出明确场景 |
| 👥 **Presence-based 共享对话** | PR [#7397](https://github.com/nearai/ironclaw/pull/7397) 正在开发，Slack/Telegram 将支持 owner≠actor 的共享会话 | **高**：直接承接 #7377 的 breaking change，作为核心能力补全 |

### 路线图风险
- [epic #7218](https://github.com/nearai/ironclaw/issues/7218)（Web Debug Inspector）已于 8 月 5 日开启，且对应 PR 已接近合并——**v1.1.0 极有可能在 8 月中旬锁定发布候选**。
- [#6939](https://github.com/nearai/ironclaw/issues/6939)（迁移工具）连续获得用户诉求，但当前没有任何对应 PR，是下一批 feature 的候选。

---

## 7. 用户反馈摘要

- **「先安装后消失」的挫败感最强**（来自 #7168 → PR #7171）：用户在前端看到了 `{"installed": true}`，但随后技能在 UI 中**彻底不可见**。评论 2 条表述为「装了就等于没装」，这是个会直接拉低新用户留存率的体验问题，好在已提交修复。
- **「MCP 技能点击装不了」**（[#6989](https://github.com/nearai/ironclaw/issues/6989)）：token 估算 bug 会直接影响用户怎么设置上下文窗口，低估会导致截断，高估会导致成本不可控，是用户最直观能感知的「怪行为」。
- **「换平台成本太高」**（[#6939](https://github.com/nearai/ironclaw/issues/6939)）：有用户明确说「不想从零再来一遍」，点名 Hermes/Openclaw 的老用户需要**迁移工具**才能安心切换。这条反馈对开源项目「抢用户」的参考意义很大。
- **「文档声称的安全流程实际没有跑」**（[#7391](https://github.com/nearai/ironclaw/issues/7391)）：用户 0xkurious 直言文档和数据流图描述的 Validate stage 在真实 Reborn 路径上**根本找不到调用**，是非常专业且尖锐的发现，风险等级应该设为 **P0/P1**（输入未经验证直达 LLM）。

---

## 8. 待处理积压（需维护者关注）

以下 PR 在队列中已停留较长，且形成连锁依赖，需尽快安排合入顺序：

| 优先级 | PR | 摘要 | 阻塞原因 |
|---|---|---|---|
| ⚠️ 高 | [#7029](https://github.com/nearai/ironclaw/pull/7029) + [#7028](https://github.com/nearai/ironclaw/pull/7028) | 恢复 durable delivery claim；使其变成 `Prepared→Sending` CAS 的唯一授权方 | **两者互相依赖**，同时 [#7395](https://github.com/nearai/ironclaw/pull/7395) 也依赖它们。这条战线已经拖了一周（8/3 提交），且 [#7028](https://github.com/nearai/ironclaw/pull/7028) 是专门修「恢复期间终态丢失」的，放库里越久越危险 |
| ⚠️ 高 | [#7048](https://github.com/nearai/ironclaw/pull/7048) | 在 tracing 前先清理 WASM 客体的输出，否则日志会被污染 | 依赖 [#7063](https://github.com/nearai/ironclaw/pull/7063) 的绿色状态，需要先合并 7063 再做 rebase。累计已经 6 天了。 |
| 🟡 中 | [#7171](https://github.com/nearai/ironclaw/pull/7171) | 技能 DB 树修复 | 属于「用户感知最强的 bug」修复，本身已准备好了，但还未被安排进合并队列。 |
| 🟡 中 | [#7373](https://github.com/nearai/ironclaw/pull/7373) | Gate 与 Ratchet 审计 + 5 个 fail-open 修复 | 没有外部阻塞，直接可以进 CI 验证；建议尽早合入以降低安全风险敞口。 |
| 🟠 低 | [#7343](https://github.com/nearai/ironclaw/pull/7343) | LLM 设置重置为默认值（bot 提交，未被人工 review） | 建议 maintainer 明确是否要验证 `ironloopai[bot]` 的提交质量再放行，避免机械 bot 提交引入错误。 |

---

**健康度总结（0-10 分制）**：
- **活跃度**：9/10 —— 合并与关闭数量极大，项目处于高速运转期。
- **稳定性**：6/10 —— 合并的 breaking change（#7377）与多个回归并存，且 [#7391](https://github.com/nearai/ironclaw/issues/7391) 暴露出安全流程的空洞，值得立刻补位。
- **可交付性**：7.5/10 —— Inspector 模块已收敛，v1.1.0 的候选功能已基本成型；但在 release 前需要先把 [#6989 token 计数](https://github.com/nearai/ironclaw/issues/6989) 与 outbound 队列的积压 PR 消化干净。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-09

## 1. 今日速览

今日项目活跃度处于**低位**。过去24小时内仅有1条新Issue和3条PR更新，且无一为当日新创建——所有条目均属存量项目的例行状态刷新，新版本发布为0。值得关注的是，今日唯一的Issue及两条PR均被系统标记为`[stale]`，表明社区讨论热度有所下降，维护者可能需要增加互动频率以避免贡献者流失。项目整体处于平稳维护期，无重大功能推进或紧急修复。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅1条PR被关闭（合并至主分支）：

- **PR #2193 — feat: add LiteLLM as AI gateway provider** `[CLOSED]`  
  [netease-youdao/LobsterAI PR #2193](https://github.com/netease-youdao/LobsterAI/pull/2193)  
  该PR为LobsterAI新增了LiteLLM作为AI网关提供方，用户可通过配置Base URL指向LiteLLM代理，以OpenAI兼容端点访问100+ LLM提供商。实现复用了现有`chatWithOpenAICompatible`处理器，**无新增依赖**，是低成本、高兼容性的功能扩展。此项合并拓宽了模型接入生态，对偏好统一网关管理的用户将带来便利。

整体而言，今日项目仅实现1项功能增强，进度推进较为有限。

## 4. 社区热点

今日讨论热度最高的为唯一活跃Issue：

- **Issue #1192 — 自定义已有工具的默认配置** `[OPEN]` `[stale]` `👍 0` `💬 1`  
  [netease-youdao/LobsterAI Issue #1192](https://github.com/netease-youdao/LobsterAI/issues/1192)  
  用户反馈已有工具（如browser）无法快速固定默认配置，希望提供“写死”配置的能力，而非依赖大模型的指令跟随。该诉求反映了**工具可配置性与大模型指令跟随不可靠性之间的核心矛盾**，在Agent类项目中具有普遍代表性。尽管评论数不多，但其背后需求值得维护者重视。

## 5. Bug 与稳定性

今日无新报告的Bug、崩溃或回归问题，项目整体稳定性表现良好。

## 6. 功能请求与路线图信号

- **默认工具配置固化**（Issue #1192）：用户希望为内置工具（如browser）提供直写默认配置的机制，例如以无头模式启动浏览器。结合已有PR #2193（LiteLLM网关）合并的方向，项目正朝着**更灵活、更可控的运行时配置**演进。建议后续版本可考虑增加“工具级默认参数配置面板”或“配置文件直写通道”，预计会获得较好的社区反馈。

- **SQLite写入性能优化**（PR #1193）：提出的防抖+批量事务方案，旨在消除每次行变更触发全量`db.export()` + `fs.writeFileSync()`的写入放大问题。若被采纳合并，将显著改善本地数据库场景下的性能与磁盘寿命。

## 7. 用户反馈摘要

- **核心痛点**：大模型指令跟随的不稳定性导致工具行为不可控（如无法可靠地以无头模式启动浏览器）。用户明确表达：“我加入了记忆让他以无头模式启动，但是大模型的指令跟随经常不好。”——这提示项目组，**对确定性行为的支持并不应完全依赖LLM推理**，而应提供声明式配置兜底。
- **使用场景**：涉及本地Agent运行时的无打扰需求（不弹出浏览器窗口），也涉及多提供商模型统一接入的场景（LiteLLM合并）。

## 8. 待处理积压

以下为长期未获回应或未合并的存量条目，提醒维护者关注活跃生态的维护：

- **Issue #1192 — 自定义已有工具的默认配置**（已开放超4个月，被标记`[stale]`）  
  [netease-youdao/LobsterAI Issue #1192](https://github.com/netease-youdao/LobsterAI/issues/1192)  
  虽仅1条评论，但在工具配置与LLM可靠性的交叉领域具备较高代表性，建议尽快给予方案回复或标注计划排期。

- **PR #1193 — perf(sqlite): 消除写入放大（防抖+批量事务）**（已开放超4个月，被标记`[stale]`）  
  [netease-youdao/LobsterAI PR #1193](https://github.com/netease-youdao/LobsterAI/pull/1193)  
  性能优化类PR，具备实际价值，建议维护者评估后决定是否合入或给出技术反馈。

- **PR #2294 — docs: 添加TakoAPI目录徽章**（已开放超1个月，被标记`[stale]`）  
  [netease-youdao/LobsterAI PR #2294](https://github.com/netease-youdao/LobsterAI/pull/2294)  
  低风险文档类改动，用于在开源目录中增加项目曝光，建议快速处理以免挫伤贡献者积极性。

---

**项目健康度总结**：功能稳步演进、无严重Bug，但**社区互动频率偏低**、存量积压存在早期信号。建议维护者在下一迭代中优先回应Issue #1192并合并PR #1193、#2294，以保持项目生态活跃度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-09

## 1. 今日速览

过去 24 小时内，Moltis 项目处于**中等活跃度**状态：共产生 2 条 Issue 更新（1 新开、1 关闭）和 1 条 PR 关闭。值得关注的是，**问题 #1096（Docker 环境中 Read/Write/Edit 工具失效）已正式关闭**，对应修复 PR #1105 也已完成合并——这标志着围绕 Docker 沙箱文件系统兼容性的一个关键问题闭环。同一天新报告的 **Issue #1185（Apple Container 1.x 沙箱状态误判）** 尚未有评论或修复 PR，是一个需要关注的新问题。本周无新版本发布。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 关键 PR 合并：Docker 沙箱文件系统工具修复

- **[#1105 [CLOSED] Fix Docker sandbox filesystem tool fallback](https://github.com/moltis-org/moltis/pull/1105)**（作者：penso，创建于 2026-06-05，关闭于 2026-08-08）

**内容摘要：**
- 为沙箱环境中的 Read/Write/Edit/MultiEdit 工具在 `/home/sandbox` 和 `workspace/data` 路径上新增回归测试覆盖
- 当 gateway 进程无法访问宿主机挂载点时，增加从「翻译后的 Docker 宿主路径」到「容器内操作」的回退机制
- 保留 direct-host missing-list 语义的同时提升容器环境兼容性

**影响评估：** 该 PR 完成了一个为期两月余的修复闭环——从 #1096 的问题报告（6月3日）到修复合入（8月8日）。此举将显著提升 Moltis 在 Docker 部署场景下核心文件工具的可靠性，对使用容器化 AI 助手环境的用户具有实质性收益。同时，新增的回归测试保障了该修复不会在未来版本中回退。

---

## 4. 社区热点

今日社区讨论热度较低，但有一个值得关注的**关联事件闭环**：

- **[#1096 [CLOSED] [Bug] `Read`/`Write`/`Edit` 工具在 Docker 中不工作](https://github.com/moltis-org/moltis/issues/1096)**（作者：IlyaBizyaev，创建于 2026-06-03，关闭于 2026-08-08）

该 Issue 从 6 月初报告至 8 月初关闭，期间历时两个多月，最终由 PR #1105 修复解决。**虽然该问题在关闭当天没有新增评论，但其最终关闭本身便是社区的重要信号**——表明维护者正在清理 Docker 沙箱相关的历史遗留问题。

此外，新开的 **[Issue #1185：Apple Container 1.x 沙箱已启动但被 Moltis 误判为未运行](https://github.com/moltis-org/moltis/issues/1185)**（作者：mikz）虽然目前零评论，但因其涉及 Apple 生态支持，可能吸引 macOS 用户的关注。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排序）

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 中 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | **Apple Container 1.x 沙箱启动状态误判**：沙箱实际已正常运行，但 Moltis 将其识别为未运行状态，可能导致后续操作被错误阻止 | 🟡 无评论，无修复 PR |
| 低 | ~~[#1096](https://github.com/moltis-org/moltis/issues/1096)~~ | ~~Docker 中 Read/Write/Edit 工具失效~~ | ✅ 已关闭，PR #1105 已修复 |

### 稳定性评估

- 今日无崩溃类或数据丢失类报告
- Docker 相关的高影响问题已得到修复，项目稳定性较前日有所改善
- Apple Container 1.x 的误判问题可能属于平台兼容层的逻辑缺陷，建议优先排查沙箱状态检测逻辑

---

## 6. 功能请求与路线图信号

### 当前无直接的功能请求提交

今日所有 Issue 均为 Bug 报告，无新功能请求。但可以从近期合并的 PR 中识别路线图信号：

### 路线图信号：**容器/沙箱环境兼容性深化**

PR #1105 引入了「宿主路径 → 容器路径」的回退机制，这暗示 Moltis 的**多沙箱运行时支持**（Docker、Apple Container 等）正在逐步完善。结合 #1185 的报告，可以判断：

- **下一版本的潜在重点**可能包括对 Apple Container 的深度适配
- 沙箱状态检测逻辑（识别「实际运行 vs 被感知为运行」）值得投入改进
- 平台特定测试（Docker 回归测试已加入，Apple Container 测试可能也应补充）

---

## 7. 用户反馈摘要

> 数据来源：今日更新 Issue/PR 的评论。由于今日两条 Issue 和一条 PR 均无新增评论，以下基于其正文内容进行提炼。

- **Docker 用户痛点（#1096 正文）：** 用户报告在 Docker 环境下三个核心文件操作工具（Read/Write/Edit）完全失效，这意味着容器化部署的 Moltis 基本无法处理文件系统的读写需求——对依赖文件交互的 Agent 工作流是致命阻断。该问题已通过 PR #1105 解决。

- **Apple 用户痛点（#1185 正文）：** 用户反馈的前提是已经按照预检清单确认「已搜索过既有问题」且「使用的是最新版本」，表明该问题在最新版本中仍然可复现。沙箱状态误判可能会导致 Moltis 尝试重启已运行的沙箱，或拒绝执行需要沙箱环境的操作，造成不必要的资源浪费和体验中断。

- **积极信号：** 两个问题报告的撰写均规范完整（包含预检清单确认），说明用户对项目的 issue 提交流程有良好遵循，社区规范度较高。

---

## 8. 待处理积压

### 需维护者关注的历史遗留

| 项目 | 详情 | 关注原因 |
|------|------|---------|
| **[Issue #1185](https://github.com/moltis-org/moltis/issues/1185)** | Apple Container 1.x 沙箱状态误判（8月8日新开，0 评论，0 赞同） | 新问题，尚无任何响应。若维护者确认可复现，建议尽快标记 `bug` 标签并纳入冲刺计划 |
| **PR #1105 的回归测试覆盖** | 新增 Docker 环境测试（`/home/sandbox`、`workspace/data` 路径） | 建议确认 CI 已实际运行这些测试，避免测试仅存在于代码中而未被执行 |

### 长期未响应的观察项

当前积压问题量不大，且 #1096 的闭环说明维护者的清理节奏良好。建议维护者关注 **Apple Container 相关问题的响应速度**，避免重蹈 Docker 问题两个多月才修复的覆辙——尤其是考虑到 Apple 生态用户对 AI 助手工具需求增长的趋势。

---

*本报告由 AI 分析师自动生成，数据来源：Moltis GitHub 仓库实时数据。如需人工复核或深入分析，请联系项目维护团队。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。以下是根据 CoPaw (github.com/agentscope-ai/CoPaw) 2026-08-09 的 GitHub 数据生成的日报。

---

# CoPaw 项目动态日报 | 2026-08-09

## 1. 今日速览

CoPaw 项目今日活跃度极高，社区与开发协同并进。过去24小时内，Issue 处理量达19条，但新提交的 Bug 报告占大多数，其中 `2.1.0b2` 版本的稳定性和体验问题（如前端渲染、MCP 连接、模型兼容性）成为焦点。PR 方面提交了50条，但合并率极低（仅3条），大量 PR 处于待审查状态，可能造成开发流程瓶颈。尽管没有新版本发布，但针对 `2.1.0b2` 的修复合集已初具规模，预示着下一个补丁版本即将到来。

## 2. 版本发布

**无新版本发布。** 当前最新版本仍为 `2.1.0b2`。不过，今日提交的众多 Bug 修复 PR 很可能指向一个 imminent 的 `2.1.0b3` 或 `2.1.0rc1` 版本。

## 3. 项目进展

今日合并/关闭的 PR 数量较少，但仍有几个关键 PR 进入待审查状态，标志着项目在核心架构稳定性上的持续推进：

- **架构重构推进**：[PR #6779 - refactor(context): align Scroll and memory with AgentScope lifecycle](https://github.com/agentscope-ai/CoPaw/pull/6779) 这是一个重要的架构收敛 PR。它旨在将 Scroll 确立为唯一的上下文协议，并使其与 AgentScope 2.0 的 Agent 基类设计范式（state, toolkit, middleware）对齐。这有望从根本上解决状态恢复、自动记忆和手动压缩之间的一致性风险，是项目长期健康发展的关键一步。
- **关键 Bug 修复已提交**：针对用户报告的严重问题，如 [Issue #6782 插件市场不可用] 和 [Issue #6822 MCP 连接失败永久阻塞] 等，已有多位贡献者提交了修复 PR，尽管它们仍在审查中，但表明项目对稳定性的重视。
- **性能优化持续进行**：[PR #6381 - perf(drivers): avoid blocking on stale capabilities](https://github.com/agentscope-ai/CoPaw/pull/6381) 和 [PR #6238 - perf(drivers): initialize handlers concurrently](https://github.com/agentscope-ai/CoPaw/pull/6238) 旨在优化 MCP Driver 的初始化和能力发现过程，减少用户等待时间，尤其利好配置了多 MCP 服务的用户。

**整体来看，项目正处于** `2.1.0` **系列发版前的密集修稳阶段，核心架构在向更规范、更统一的方向演进。**

## 4. 社区热点

今日讨论热度最高的 Issue 主要集中在 `2.1.0b2` 和 `2.0.1` 版本的用户体验和功能性 Bug 上：

- **[Issue #6782: [Bug]: 2.0.1 docker版本，插件市场、应用市场始终提示维护中，无法使用](https://github.com/agentscope-ai/CoPaw/issues/6782)** (评论: 9)
  - 该问题获得了最多的讨论。Docker 用户无法使用内置市场，这会严重阻碍生态扩展，直接影响用户获取插件和应用。
- **[Issue #6811: [Bug]: OpenAI Responses continuation summary ignores disable_thinking and misreports 60-second cancellation as malformed output](https://github.com/agentscope-ai/CoPaw/issues/6811)** (评论: 5)
  - 这是一个非常具体的模型交互 Bug。它会导致对话上下文压缩时阻塞主对话，并把正常的超时误报为输出错误，影响用户对模型状态的判断，尤其对依赖 OpenAI 推理模型的用户影响较大。
- **[Issue #6820: [Bug]: 前端UI界面未显示模型的输出，工具调用，思考过程，全部完成了才显示出](https://github.com/agentscope-ai/CoPaw/issues/6820)** (评论: 4)
  - 这是一个破坏体验的问题，用户希望看到模型的实时思考过程，但 UI 在完成前是空白状态，用户反馈“体验不佳”。

**社区诉求分析：** 用户对桌面端和 Docker 部署后的**端到端体验**（UI 响应、应用市场、模型流式输出）有较高期待，任何环节的卡顿或不可用都会引发大量反馈。

## 5. Bug 与稳定性

今日报告的 Bug 集中在 `2.1.0b2` 版本，按严重程度排列如下：

**严重（核心功能不可用/崩溃）：**
- **[Issue #6822: A transient streamable HTTP MCP connection failure permanently blocks the active conversation after automatic reconnect](https://github.com/agentscope-ai/CoPaw/issues/6822)**：MCP 网络抖动导致对话永久阻塞。这是 P0 级别的稳定性问题，已影响 Agent 与外部工具的正常交互。目前有相关修复 PR 在审查中。
- **[Issue #6814: SIGBUS (FS pagein 22) in sqlite3WalFindFrame while opening Scroll history.db (WAL) on macOS](https://github.com/agentscope-ai/CoPaw/issues/6814)**：macOS 上读取历史数据库直接崩溃，属严重稳定性问题。

**中等（特定功能/场景受影响）：**
- **[Issue #6811: OpenAI Responses continuation summary...](https://github.com/agentscope-ai/CoPaw/issues/6811)**：上下文压缩功能与特定模型配合异常。
- **[Issue #6812: Model 'unknown' execution failed. In Google API](https://github.com/agentscope-ai/CoPaw/issues/6812)**：Gemini 提供商因 schema 问题无法使用工具。
- **[Issue #6821: reasoning_content relay fails for thinking-mode models → 400 BadRequestError](https://github.com/agentscope-ai/CoPaw/issues/6821)**：DeepSeek 等思考模式模型多轮对话失败。
- **[Issue #6828: Console frontend at idle keeps repainting (~20% CPU)...](https://github.com/agentscope-ai/CoPaw/issues/6828)**：前端空转导致高 CPU 占用。

**低（体验/兼容性问题）：**
- **[Issue #6831: Desktop (macOS) local Whisper shows "ffmpeg: disabled"...](https://github.com/agentscope-ai/CoPaw/issues/6831)**：语音转文字功能因 PATH 问题不可用。
- **[Issue #6826: 对话中助手消息结束时间显示异常](https://github.com/agentscope-ai/CoPaw/issues/6826)**：时间显示错误，信息误导。
- **[Issue #6813: consume_model_response raises KeyError: '__aiter__'...](https://github.com/agentscope-ai/CoPaw/issues/6813)**：自动生成本功能持续失败。

## 6. 功能请求与路线图信号

社区在积极反馈新需求，以下功能点是未来版本完善的重要方向信号：

- **审批流程增强：[Issue #6832: AI要求审批时加入对于审批项目的描述](https://github.com/agentscope-ai/CoPaw/issues/6832)**：用户希望 AI 在申请权限时附带一句自然语言描述，提升审批过程的安全性与用户体验。这是一个很高价值的功能点，有望被快速纳入。
- **数据清理能力：[Issue #6827: 删除对话时可选清理该对话产生的任意临时文件](https://github.com/agentscope-ai/CoPaw/issues/6827)**：用户需要一个选项来清理会话产生的孤立临时文件，避免工作区混乱。这符合对 Agent 生命周期管理更精细化的需求。
- **新 Provider 支持：[Issue #6490: Add Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers](https://github.com/agentscope-ai/CoPaw/issues/6490)**：社区对新模型的接入保持高度热情。
- **架构改进：[PR #6779 - refactor(context): align Scroll and memory with AgentScope lifecycle](https://github.com/agentscope-ai/CoPaw/pull/6779)**：这是一个内部信号，表明维护者正在推动上下文管理的规范化。

## 7. 用户反馈摘要

- **痛点集中**：用户对**前端 UI 的响应速度和反馈机制**（Issue #6820, #6828）以及 **MCP 连接稳定性**（Issue #6822）表现出较高的不满情绪。
- **Docker 环境关注**：Docker 版本的用户遇到的特殊问题（Issue #6810, #6782）需要维护者关注，这可能影响特定部署场景的用户留存。
- **对改进的期待**：用户对审批描述（#6832）、文件清理（#6827）等能够提升日常使用效率和透明度的功能表现出浓厚兴趣，期待项目方尽快跟进。
- **积极作用**：大量 `first-time-contributor` 提交 PR（如 #6041, #6688, #6750, #6808 等），说明项目具有良好的社区参与度和贡献文化。

## 8. 待处理积压

- **重要 PR 等待审查**：今日共有 47 条 PR 处于待合并状态，远超合并数量。以下几条对项目健康度影响较大，建议维护者优先安排审查：
  - [#6767 - fix(config): harden agent persistence on shared filesystems](https://github.com/agentscope-ai/CoPaw/pull/6767)
  - [#6636 - fix(chats): add pagination to chat history and enable GZip compression](https://github.com/agentscope-ai/CoPaw/pull/6636)
  - [#6652 - fix(mission): enforce max_iterations server-side in MissionGate](https://github.com/agentscope-ai/CoPaw/pull/6652)
- **长期未决 Issue**：
  - **[Issue #6490: Add Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers](https://github.com/agentscope-ai/CoPaw/issues/6490)**（创建于 2026-07-27）：已存在近两周，仍有5条评论，表明社区对新模型支持的需求持续攀升，希望维护者能给出明确加入时间表。
- **回顾**：Issue #4558 关于长文本输出 CPU 占用高的问题在今日被标记为已关闭（#4558），但同日出现了新的类似问题（#6828），建议维护者确认 #6828 是否是旧问题的回归或未完全修复的案例。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为您的 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据 ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 2026-08-09 的 GitHub 数据生成的每日项目动态日报。

---

# ZeroClaw 项目动态日报 - 2026-08-09

## 1. 今日速览

ZeroClaw 项目在 2026-08-09 显示出**高活跃度**与**健康的维护节奏**。过去 24 小时内，项目处理了大量的 Issues (50条) 和 PRs (50条)，虽然大部分处于待处理或进行中状态 (待合并: 48条)，但核心维护者（如 `JordanTheJet`）正在积极推动大型重构和修复。今日焦点集中在 **SOP (标准操作程序) 运行时修复**、**CRUD 式工具链重构**以及**安全边界加固**上。尽管存在大量待办积压，但项目治理（通过 RFC 和 Tracker）和代码合并/交接流程（如 #9494 -> #9841）表现出良好的纪律性，整体项目健康度**良好**，正处于功能迭代与架构清理并行的阶段。

## 2. 版本发布

- 无新版本发布。

## 3. 项目进展

今日虽无新版本发布，但关键 PR 的推进和关闭标志着项目核心架构的实质性进展。

- **SOP 功能完成关键交接与修复**：
    - **PR #9494 [已关闭]** 由 `Lusitaniae` 提交的关于修复 cron 启动的无头 SOP 运行问题的 PR 已被超集 PR 取代。
    - **PR #9841 [开放]** 由 `JordanTheJet` 创建的 `fix(sop): drive headless SOP runs, and close the five defects found reviewing #9494` 是该功能的**正统延续**。它不仅承接了 #9494 的代码，还修复了**四个**阻断性 review 发现和一个额外缺陷。这直接解决了长期存在的“SOP 在 auto 模式下无法执行”的严重问题（对应 Issue #9805），是项目功能完整性上的一大步。
- **老旧/冗余代码清理**：
    - **PR #9853 [开放]** 由 `JordanTheJet` 提交，旨在从工作区中彻底删除 `aardvark-sys` 和 `zeroclaw-robot-kit` 这两个独立 crate。此举将解决 crates.io 发布阻塞，并简化代码库，与 RFC #8043 和 #9803 的决策保持一致。
- **基础设施与依赖维护**：
    - **PR #9856 [开放]** 由 `Audacity88` 提交，用于将 GitHub Action `actions/attest` 升级到 v4.2.2，确保供应链安全。
- **新功能探索**：
    - **PR #9828 [开放]** 由 `JordanTheJet` 提交，旨在为代理提供一个**经过验证且操作员批准**的配置作者路径，避免代理直接 `echo > config.toml`。这是对代理能力和安全边界的重大增强。

## 4. 社区热点

今日讨论热度最高的几个问题都集中在**架构决策**与**安全边界**的冲突上，反映了社区对 Agent 能力和安全可控之间平衡的深度关注。

- **Issue #8692 [开放]**：`[Tracker]: Maintainer decision queue for RFCs and design issues` (评论: 11)
    - **链接**: [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)
    - **分析**: 作为维护者决策队列的 Tracker，持续的高评论数表明这是一个关键节点。它旨在整理需要维护者解决的问题，如 #9346 (统一目录契约 RFC) 和 #9496 (精简 RFC 流程)。高关注度反映社区对**项目治理效率**和**决策透明度**的迫切需求。
- **Issue #8043 [已关闭]**：`RFC: Retire the standalone aardvark-sys crate` (评论: 11)
    - **链接**: [Issue #8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)
    - **分析**: 该 RFC 已关闭并进入执行阶段（见 PR #9853）。它讨论的是纯粹的架构清理，但高评论数表明社区对**精简依赖**和**降低贡献门槛**的支持。
- **Issue #8424 [开放]**：`RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore` (评论: 11)
    - **链接**: [Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)
    - **分析**: 这是关于安全策略的讨论，并衍生了 Issue #9815 (forbidden_paths 漏洞)。用户希望更精细地控制 Agent 对 **工作区内敏感文件** （如 `.env`、config 文件）的访问。这反映了 Agent 在真实开发场景中应用的核心痛点。
- **Issue #8054 [开放]**：`System prompt tool-availability should match per-turn effective tools across all entry points` (评论: 10)
    - **链接**: [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)
    - **分析**: 这是一个状态为 `in-progress` 的高风险 (p1) Bug。用户报告系统提示词与实际可用的工具不一致，导致推理模型表现异常。社区对此关注度极高，正在跟进该问题在所有入口（网关、WebSocket等）的修复情况。

## 5. Bug 与稳定性

今日报告的 Bug 主要围绕**工作流阻断 (S1)** 和 **数据/安全风险 (S0)**，且大部分已有修复 PR 或处于进行中状态。

- **S0 - 数据丢失/安全风险**：
    - **Issue #9855 [开放]** (1评论): `[Bug]: Matrix channel fails to resolve homeserver via delegation`。严重性极高，但今日新开，处理优先级待定。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9855)
- **S1 - 工作流阻断**：
    - **Issue #8559 [开放]** (4评论): `[Bug]: Agents stop their work when exiting the chat window`。用户核心痛点，导致无法后台执行任务。状态 `in-progress`。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)
    - **Issue #9815 [开放]** (2评论): `security: forbidden_paths is unreachable for any path under allowed_roots or the workspace`。安全问题，导致路径封禁失效，已被接受 (accepted)。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)
    - **Issue #9340 [开放]** (3评论): `[Bug]: CLI-created cron jobs cannot deliver output`。功能缺失，CLI 创建的计划任务输出被丢弃。状态 `in-progress`。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)
    - **Issue #9035 [开放]** (3评论): `[Bug]: Docker Compose gateway can remain loopback-bound`。部署问题，端口无法访问。状态 `in-progress`。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)
- **S2 - 性能/行为降级**：
    - **Issue #8731 [开放]** (2评论): `[Bug]: Stdio-based MCP servers accumulating as zombie processes`。长期存在的性能问题，导致资源泄漏。状态 `in-progress`。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)
    - **Issue #9573 [开放]** (2评论): `[Bug]: cost pricing lookup fails for multiple aliases`。成本统计错误，影响预算管理。已接受 (accepted)。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9573)
    - **Issue #9816 [开放]** (2评论): `cost: anthropic provider reports $0.00 spend`。成本显示为零，导致预算上限失效。已接受 (accepted)。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)

## 6. 功能请求与路线图信号

社区对功能的需求已从单纯的聊天转向更深度的 **Agent 自主性** 和 **企业级集成**。

- **Agent 配置能力**：PR #9828 (agent-facing config authoring) 是对社区长期呼声（如 #8424 关于配置文件保护）的积极回应。这表明路线图正朝着让 Agent 更安全地进行自我配置演进。
- **OpenAI 兼容性**：Issue #8550 `[Feature]: Add OpenAI-compatible chat completions endpoint` (6评论) 表明用户希望将 ZeroClaw 无缝接入现有的 OpenAI 生态工具 (如 Open WebUI)。此需求**极有可能被纳入下一版本**。
- **精细化控制**：多个 Telegram 相关的 PR 和 Issue (如 #9822, #9823, #5514, #8445) 表明社区希望获得对**交互和显示细节**的更多控制，包括按 Agent turn 发送消息、暂停打字指示器等。
- **架构现代化**：PR #9580 和 #9744 等大型重构 PR 表明项目正在为 **插件化网络策略** 和 **更安全的 Webhook 入口** 铺路，这是 Agent 走向准生产环境的关键一步。

## 7. 用户反馈摘要

从今日的 Issues 和 PR 评论中，可以提炼出用户的真实反馈：

- **痛点：任务中断导致工作流受阻**。用户 (susyabashti) 对“退出聊天窗口导致 Agent 停止工作”表达了困扰，这严重影响了后台自动化任务的正常执行。
- **痛点：敏感数据保护不可用**。用户 (bitsbyritik) 报告了 `forbidden_paths` 无法保护工作区内文件的问题，这表明用户非常信任 Agent 并希望让其访问文件系统，但对特定敏感文件的访问控制有刚性需求。
- **困惑：成本数据不透明**。用户 (bitsbyritik) 对 Anthropic 提供商报告 $0.00 花费感到困惑，这直接破坏了预算的可观测性和控制能力。
- **满意：SOP 功能交接顺利**。PR #9494 的关闭和 #9841 的快速接手，虽然主要涉及核心贡献者，但评论中体现出的协作流畅性和对问题的快速响应（修复了 5 个缺陷）是社区的积极信号。
- **诉求：与现有生态集成**。Issue #8550 和 #8692 的高评论数表明用户不满足于 ZeroClaw 的封闭生态，希望它能与 OpenAI 兼容客户端、以及更庞大的 Web3/其他工具链进行互操作。

## 8. 待处理积压

有几个长期未决的高风险 (risk:high) 或高优先级 (p1) 问题值得维护者特别关注：

- **Issue #9390 [开放]** (3评论)：`[Bug]: emergency stop is a CLI-only state file that no runtime path reads`。创建于 2026-07-26 的 S1 级安全问题，尚未有 PR 关联。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9390)
- **Issue #9387 [开放]** (2评论)：`[Bug]: interactive approval responses are accepted from any chat member`。创建于 2026-07-26 的 S1 级安全漏洞，影响多个渠道。已标记 `in-progress`，但暂无关联 PR。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)
- **PR #8337 [开放]**：`feat(observability): herdr agent reporting integration`。自 2026-06-26 起就一直处于开放状态，且无后续更新记录。考虑到项目对观察性的重视，这个 PR 要么需要尽快推进或关闭，要么需要明确其优先级。 [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)
- **PR #9824 / Issue #9824 [开放]**：`[Feature]: Simplify the default web-tool surface`。这是一个由核心贡献者 JordanTheJet 提出的大型重构，涉及安全问题（简化默认攻击面），但目前状态是 `in-progress`，需要跟踪其具体 PR 进展。 [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*