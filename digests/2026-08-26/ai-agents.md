# OpenClaw 生态日报 2026-08-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-26 01:23 UTC

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

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，我为您呈上这份基于 OpenClaw 项目 GitHub 数据生成的 2026-08-26 项目动态日报。

---

### OpenClaw 项目动态日报 | 2026-08-26

#### 1. 今日速览

OpenClaw 项目今日活跃度极高，过去24小时内 Issue 与 PR 更新均达到系统上限（各500条），显示出庞大的社区参与度和维护压力。然而，**P0/P1 级别的严重 Bug 数量激增**，尤其集中在 SQLite 数据损坏、消息投递丢失和会话状态异常等稳定性核心领域，这与新版本迭代频繁的节奏形成鲜明对比，提示项目可能正处于一个“功能快速推进，稳定性有待巩固”的阵痛期。尽管今日无新版本发布，但有多个高优先级修复 PR 已被合并或处于待审状态，表明维护团队正在积极应对稳定性挑战。

#### 2. 版本发布

- 今日无新版本发布。项目当前最新版本为 `v2026.8.1-beta.3`，社区反馈持续追踪中。

#### 3. 项目进展

今日共有 238 个 PR 被合并或关闭，其中包含多个关键修复，显示了项目在解决历史遗留问题和改进系统健壮性方面的持续投入。

- **修复多频道消息投递可靠性**：PR #126424 `fix(gateway): keep conversation delivery within agent bindings` 已被合并。此前的设计中，多 Agent 操作者在使用对话工具时可能会将消息投递到错误的绑定关系之外，导致消息错乱。此修复确保了消息严格在 Agent 绑定范围内投递，是防止消息滥用和保证多租户场景隔离性的重要改进。
- **强化安装安全策略**：PR #120900 `feat(ui): review install policy warnings` 和 PR #116489 `feat(security): require acknowledgement for install policy warnings` 均已合并。这两项 PR 共同构建了完整的插件/技能安装警告审查流程。现在，当外部安全策略返回“警告”时，管理员可以在控制 UI 中查看具体原因，并在确认后继续安装，这为生态系统的安全扩展设置了更完善的护栏。
- **清理遗留技术债务**：PR #129698 `refactor(reef): remove obsolete JSONL protocol stores` 已合并。该 PR 删除了 Reef 节点过时的 JSONL 协议存储，转而全面使用标准的 SQLite 状态存储，简化了代码库并减少了维护成本，是项目架构向收敛和统一迈进的一步。
- **优化工具链**：PR #123975 `fix(scripts): clean up tsgo process trees on timeout or signal` 已合并。修复了 TypeScript 编译器 `tsgo` 包装器在超时或被信号中断时可能遗留卡死进程树的问题，提升了开发与 CI 流程的稳定性。

#### 4. 社区热点

今日讨论热度最高的议题集中于**数据持久性和系统稳定性**，这反映出用户在真实部署中对可靠性的深切关注。

- **Issue #125626: OpenClaw 2026.8.1 beta feedback** (评论: 19)
  这是关于 `v2026.8.1` 测试版的集中反馈贴，拥有今日最高评论数。该 Issue 作为收集用户反馈的集中地，往往承载了大量关于新版本功能体验和潜在问题的讨论，是维护团队了解 beta 版本质量的重要窗口。
  [链接](https://github.com/openclaw/openclaw/issues/125626)

- **Issue #80319: QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity** (评论: 17)
  社区对 QA 测试套件提出了质疑，认为其混淆了 Codex 原生工具与 OpenClaw 动态工具之间的差异。这体现了高级用户对项目测试严谨性的高要求，并主动帮助理清了问题边界。
  [链接](https://github.com/openclaw/openclaw/issues/80319)

- **Issue #67777: [Bug]: Subagent completion delivery can be lost on direct-announce timeout, drain, or orphan prune** (评论: 14)
  该问题指出了一个隐蔽的消息丢失场景：子代理完成消息在特定条件下（如超时、排空、孤儿清理）可能丢失，导致父会话无法得知子代理执行结果。这是一个典型的分布式系统竞态问题，备受关注。
  [链接](https://github.com/openclaw/openclaw/issues/67777)

#### 5. Bug 与稳定性

今日 Bug 报告数量多且严重度高，项目稳定性面临显著挑战。以下按严重程度排序：

- **P0 [数据损坏/崩溃]**：
  - **Issue #126821**: **SQLite corruption recurs on pristine rebuilt DBs within 15–24h (2026.8.1-beta.2, WSL2)**。这是最严重的问题。用户报告即使从全新重建的数据库开始，在运行15-24小时后仍会出现 SQLite 损坏（freelist miscount），甚至导致网关进入“瘫痪模式”。此问题在5天内发生了5次，强烈暗示核心存储层存在未被发现的严重缺陷。虽标记为“非发布阻断”，但其影响极大，必须优先调查。
  [链接](https://github.com/openclaw/openclaw/issues/126821)

- **P1 [消息丢失/数据丢失]**：
  - **Issue #127710**: **prepared-model-runtime fails closed on transient generation churn**。报告了在特定条件下（`message_tool` 模式），瞬时生成波动会导致网关永久卡死或静默丢失消息，是多Agent生产环境的严重可靠性问题。
  [链接](https://github.com/openclaw/openclaw/issues/127710)
  - **Issue #126246**: **[Bug]: Telegram durable outbound deliveries remain stuck in send_attempt_started and are lost on restart**。Telegram 消息卡在发送中状态且重启后丢失，直接影响用户核心通讯体验。目前无修复 PR。
  [链接](https://github.com/openclaw/openclaw/issues/126246)
  - **Issue #126900**: **maxActiveTranscriptBytes loops compaction forever**。当压缩后的文本仍然超过阈值时，会无限触发压缩，导致会话通道卡死，后续所有消息都会被阻塞。目前已有修复 PR (#126421) 关联。
  [链接](https://github.com/openclaw/openclaw/issues/126900)
  - **Issue #97616**: **[Bug]: OpenClaw leaks unreaped hook/tool child processes**。进程泄漏导致僵尸进程堆积，长期运行后引发资源耗尽和运行时性能下降。
  [链接](https://github.com/openclaw/openclaw/issues/97616)
  - **Issue #106704**: **[Bug]: sessions_yield on a subagent's first turn silently finalizes the run as ok**。子代理在特定情况下被错误地标记为成功结束，可能引发逻辑错误。
  [链接](https://github.com/openclaw/openclaw/issues/106704)

- **P1 [会话状态/认证]**：
  - **Issue #80178**: **resolveCliAuthEpoch invalidates every live CLI session**。本地凭据存储方式变更会导致所有活动 CLI 会话失效，造成不必要的用户认证中断。
  [链接](https://github.com/openclaw/openclaw/issues/80178)
  - **Issue #108379**: **[Bug]: Duplicate assistant generation attempts for Xiaomi MiMo**。特定模型提供方会导致重复生成，浪费计算资源并产生错误输出。
  [链接](https://github.com/openclaw/openclaw/issues/108379)

已合并的关键修复 PR（对上述问题的初步回应）：
- #126424 `fix(gateway): keep conversation delivery within agent bindings` (已合并)
- #120900, #116489 `Security install policy` (已合并)
- #129698 `refactor(reef): remove obsolete JSONL protocol stores` (已合并)

#### 6. 功能请求与路线图信号

社区提出的功能需求既体现了对易用性的追求，也反映了对更强大/更灵活能力的期待：

- **提高可观测性与透明度**：多个高热度 Issue (如 #51441, #9016) 要求将**实际解析的后端模型**和 **OpenRouter 使用成本**暴露给 Agent 运行时。这表明用户不满足于黑盒使用，希望获得更多信息以进行性能调优和成本控制。
- **简化配置与增强鲁棒性**：Issue #45758 (支持 YAML 配置) 和 Issue #71335 (`sync.watch` 在网关模式下默认关闭) 均获得了不少关注。前者旨在提升配置文件的易读性和生态兼容性；后者指出了默认配置导致资源泄漏的问题，并提出了合理的默认值更改建议。
- **深度的 Agent 行为控制**：Issue #67413 (Per-agent dreaming configuration) 和 #62615 (网关侧熔断器) 表明社区希望从全局控制转向更精细的、按 Agent 或按会话的控制，以提升资源利用率和故障隔离能力。
- **未来版本信号**：这些积压的 P2/P3 请求，特别是关于**配置格式简化**、**成本可见性**和**性能调优**的，很可能成为下一阶段的功能开发重点。它们与项目提升生产可用性的主题高度相关。

#### 7. 用户反馈摘要

- **核心痛点**：用户反馈最密集的领域集中在**消息丢失**和**数据损坏**上。例如，WhatsApp 群组回复空白气泡 (Issue #127948)，WebChat 新会话丢失上下文 (Issue #99925)，以及 P0 级别的 SQLite 数据库反复损坏 (Issue #126821)。这些反馈表明，对于高度依赖 Agent 进行关键沟通的用户来说，数据的可靠性和持久性是采纳此类工具的核心前提。
- **安全问题**：用户不仅关心功能，也担心安全问题。Issue #99925 在描述会话丢失时，特别强调了 AI “失忆”带来的潜在安全风险，显示出用户对 Agent 状态管理有更高的安全期待。
- **UI/UX 与可访问性**：正面反馈方面，用户感谢了使用量显示的改进 (Issue #95601)，感谢开发团队对可访问性的关注，并希望进一步优化 VoiceOver 对聊天记录的朗读体验。同时，用户也指出了 TUI 中 emoji 和特殊符号对屏幕阅读器不友好的问题 (Issue #9637)。负面反馈主要集中在 WebChat 历史记录管理混乱 (Issue #77819) 和 UI 动效导致的重绘问题 (Issue #128657)。

#### 8. 待处理积压

以下问题长期未获解决，可能影响用户信任度，建议维护者重点关注：

- **Issue #126821 (P0, SQLite 损坏)**: 这是当前最紧急的问题，虽在 beta 版本中发现，但可能暗示了核心架构的缺陷，必须优先处理，否则将严重影响用户对新版本的信心。
  [链接](https://github.com/openclaw/openclaw/issues/126821)

- **Issue #67777 (P1, 子代理完成消息丢失)**: 该问题在 2026-04-16 提出，至今已超过4个月，且影响消息可靠性，但始终未关闭。繁忙通道下的消息丢失是致命的可靠性缺陷，需要长期跟踪直至解决。
  [链接](https://github.com/openclaw/openclaw/issues/67777)

- **Issue #97616 (P1, 进程泄漏)**: 另一个长期未解决的 P1 问题，直接导致系统长期运行后的性能退化。此类问题通常在部署环境中才会暴露，但对生产系统的长期健康运行至关重要。
  [链接](https://github.com/openclaw/openclaw/issues/97616)

- **Issue #67413 (Per-agent dreaming configuration)**: 该功能请求发布于 4 月中旬，获得了 5 个 👍，是社区呼声较高的功能。它有助于解决资源争用问题，但至今仍处于等待产品决策的状态。
  [链接](https://github.com/openclaw/openclaw/issues/67413)

---

## 横向生态对比

# 个人 AI 助手开源生态横向分析报告

**报告日期：2026-08-26**


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**功能快速扩张与稳定性承压并行**的关键阶段。头部项目（OpenClaw）日活极高但面临数据损坏与消息丢失等 P0/P1 级稳定性挑战；腰部项目（NanoBot、Hermes Agent、ZeroClaw、CoPaw）则在渠道集成、会话管理、安全加固等方向密集迭代。值得关注的是，**安全与信任**已成为生态级核心议题——shell 注入漏洞（NanoClaw）、凭据缓存加固（ZeroClaw）、沙箱隔离需求（Moltis）同日浮现。与此同时，**边缘计算与分布式协同**（PicoClaw #3345、NullClaw #994、NanoClaw #3538、IronClaw #7889、ZeroClaw #10360）在多个项目中不约而同地出现，暗示生态正从“单机智能体”向“多设备协同”演进。


## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 健康度 | 迭代阶段 |
|------|:---:|:---:|:---:|:---:|------|
| **OpenClaw** | 500（上限） | 500（上限） | 无 | ⚠️ 高活跃/高压力 | 功能快速推进，稳定性承压 |
| **NanoBot** | 5 | 24（14合并） | 无 | ✅ 健康 | 快速迭代期，响应迅速 |
| **Hermes Agent** | 100 | — | 无 | ✅ 活跃 | 稳定性修复与功能优化并重 |
| **NanoClaw** | 5 | 50（16合并） | 无 | ⚠️ 响应滞后 | 架构清理与稳定性提升期 |
| **ZeroClaw** | 50 | 50（1合并） | 无 | ✅ 活跃 | 安全加固与工程收敛期 |
| **CoPaw** | — | — | **v2.1.1-beta.3** | ✅ 健康 | 稳定交付，性能优化中 |
| **IronClaw** | 37 | 24（10合并） | 无 | ✅ 良好 | CI 基建收敛 + WebUI 推进 |
| **Moltis** | 2 | 5（2合并） | 无 | 🟡 中等 | 工具链修复 + 沙箱生态扩展 |
| **PicoClaw** | 4 | 1 | 无 | 🟡 中等 | 稳定迭代期，Bug 积压待处理 |
| **LobsterAI** | 1 | 11（9合并） | **2 个（8.21/8.25）** | ✅ 健康 | 稳定交付，模块完善中 |
| **NullClaw** | 1 | 0 | 无 | ✅ 稳定 | 低频迭代期 |
| **TinyClaw** | 0 | 0 | 无 | — | 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | — | 无活动 |


## 3. OpenClaw 在生态中的定位

**生态地位：事实上的核心参照系。** 其余项目多定位为“OpenClaw 的轻量/垂直/替代实现”，从命名（NanoClaw、PicoClaw、ZeroClaw、IronClaw）即见分明。

**核心优势：**
- **社区规模断层领先**：Issue/PR 均达系统上限（500 条），远超第二名 Hermes Agent（100 条）和 ZeroClaw（50 条）；其单日合并 238 个 PR 的工作量超过绝大多数项目月度总量
- **功能完整度最高**：多 Agent 绑定、会话管理、Reef 节点等架构设计领先于生态
- **生态虹吸效应**：其他项目的高热度 Issue（如 IronClaw 的 Reborn 循环、CoPaw 的长会话性能）往往是 OpenClaw 已解决或正在解决的问题

**技术路线差异：**
- OpenClaw 采用**集中式健壮性优先**路线：强调 SQLite 持久化、频道绑定隔离、安装安全策略，但在边缘部署与轻量化方面探索不足
- 竞品多在**差异化切入**：NanoBot 侧重轻量与快速迭代，PicoClaw/NullClaw 锁定低资源边缘设备，CoPaw 深度整合 AgentScope/Qwen 生态

**核心挑战**：SQLite 反复损坏（#126821）和子代理消息丢失（#67777）若持续发酵，将损害生态核心的信誉度，为腰部项目提供“更稳定替代”的叙事空间。


## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|---------|---------|
| **边缘计算/多设备协同** | PicoClaw #3345、NullClaw #994、NanoClaw #3538、IronClaw #7889、ZeroClaw #10360 | 利用闲置硬件组成私有计算网格，强调数据主权与本地优先；多项目同日提出，信号强烈 |
| **沙箱隔离与安全边界** | Moltis #1118（K8s 沙箱）、NanoClaw #3543（shell 注入）、ZeroClaw #9947（cron 越权）、IronClaw #7889（远程 worker） | 执行不受信任的 LLM 生成代码需要强隔离；多 agent 间数据与权限隔离成为刚需 |
| **MCP 工具链稳定性** | PicoClaw #3269（MCP 挂起）、Hermes #94906（MCP 子进程退出）、NanoBot #5535（MCP 重试）、ZeroClaw #10346（MCP 注册缓存） | MCP 连接失败的优雅降级、重试机制与进程生命周期管理 |
| **长会话性能优化** | CoPaw #7285/#7129（渲染卡顿）、OpenClaw #126821（SQLite 损坏）、PicoClaw #3281（输入延迟） | 对话历史增长后的性能退化与内存管理 |
| **消息传递可靠性** | OpenClaw #126424/#67777、Hermes #90428、NanoBot #5529、Moltis #1243、ZeroClaw #8955 | 跨渠道消息不丢失、不乱序、不重复 |
| **搜索能力扩展** | NanoBot #5505（AnySearch）、#5234（MST）、ZeroClaw #10363（Git channel） | 多搜索提供商接入与工具 schema 规范化 |
| **Webhook/自动化集成** | CoPaw #338、Hermes #94859 | 与外部工作流集成，实现事件驱动自动化 |


## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 |
|------|---------|---------|-------------|
| **OpenClaw** | 全功能个人 AI 助手/智能体平台 | 开发者与高级用户 | 集中式架构，SQLite 持久化，多 Agent 绑定，频道隔离 |
| **NanoBot** | 轻量、快速迭代的智能体框架 | 偏好敏捷开发的个人开发者 | 高性能工具链，多渠道适配，快速合入外部贡献 |
| **Hermes Agent** | 桌面端优先的全能助手 | 桌面重度用户与多模型用户 | 强桌面集成，macOS 权限/密钥链管理，多模型提供商支持 |
| **NanoClaw** | 技能系统灵活可扩展的助手 | 深度定制需求的开发者 | 技能作用域/继承抽象，可编程 setup 协议，OpenCode/Codex 集成 |
| **ZeroClaw** | Rust 实现的安全优先智能体平台 | 对安全/性能有高要求的企业/开发者 | Rust/WASM，执行树预算，RFC 驱动的治理流程 |
| **CoPaw** | 面向 Qwen/AgentScope 生态的助手 | 中文用户 + 阿里云/通义系开发者 | 深度绑定 AgentScope 2.x，微信渠道，工作区 Skill 预加载 |
| **IronClaw** | 高可用、可观测性的智能体基础设施 | 生产环境部署者 | 持久化沙箱、扩展生态（Telegram 等）、通知中心、设计系统 |
| **Moltis** | 多平台渠道消息与工具编排 | 跨 WhatsApp/Telegram/Slack 的使用者 | 多沙箱后端（本地/Docker/远程），Cron 消息上下文保留，Brave 搜索 |
| **PicoClaw** | 低资源设备上的嵌入式智能体 | 极客/边缘设备用户 | 适配 RISC-V/ARM/MIPS，轻量级，Slack 集成 |
| **NullClaw** | 体积极小、可嵌入的智能体原语库 | 追求极简与嵌入式的开发者 | Zig 运行时，RuntimeAdapter 抽象，模块化设计 |
| **LobsterAI** | 面向商业场景的 AI 助手 | 企业用户 | 资料库无缝集成，商业转化归因分析，dsh 模块 |


## 6. 社区热度与成熟度分层

**第一梯队：核心头部（极高活跃 + 稳定性承压）**
- **OpenClaw**：日活天花板，但 P0 级 SQLite 损坏（#126821）反复出现，正处于“规模先行、质量跟进”的阵痛期

**第二梯队：快速迭代期（高活跃 + 高响应）**
- **NanoBot**：24h 内合入 14 个 PR，从报告到修复同日闭环，社区健康度最佳
- **Hermes Agent**：100 条更新，桌面端与集成层问题频发但修复积极
- **ZeroClaw**：50 条 Issue/PR，安全加固与治理流程并行，工程纪律性强
- **CoPaw**：双周双版本发布，商业导向明确，性能问题已有对应修复 PR 在途
- **IronClaw**：CI 基建收敛期，核心执行引擎（Reborn loop）仍在暴露问题

**第三梯队：稳定迭代期（中等活跃）**
- **Moltis**：工具链修复与沙箱生态扩展稳步推进，但#1118 积压 75 天无维护者回应
- **PicoClaw**：活跃度中等，#3269 MCP 挂起 37 天无修复，响应速度需提升
- **NanoClaw**：核心团队执行力强，但 5 个高质量 Issue 零回复，社区信任有流失风险
- **LobsterAI**：稳定交付（周 2 版本），但社区参与度有限，长期 PR 积压

**第四梯队：低活跃（沉寂期）**
- **NullClaw、TinyClaw、ZeptoClaw**：低频或无活动


## 7. 值得关注的趋势信号

**趋势一：从“单机智能体”到“边缘计算网格”的范式跃迁**
PicoClaw #3345、NullClaw #994、NanoClaw #3538、IronClaw #7889、ZeroClaw #10360 在 24 小时内**同日涌现**，这绝非偶然。用户正在将闲置 PC、树莓派、旧手机组成私有计算池，强调数据主权、硬件复用与离线可用。这对 AI 智能体开发者的启示是：**下一阶段的竞争焦点将从“模型能力”转向“分布式编排与可信计算”**。签名收据（signed receipts，NullClaw）与远程 worker 安全认证（IronClaw）将成为必备组件。

**趋势二：安全从“配置项”升级为“核心架构”**
NanoClaw 的 shell 注入漏洞（#3543）、ZeroClaw 的 cron 跨 agent 越权（#9947）、Moltis 对 K8s 沙箱的诉求（#1118）、Hermes 的非交互式日志泄露（#94911）指向同一方向：**用户不再接受“默认开放、事后补救”的安全模式**。Fail-closed（NanoBot #5536）、权威执行层（Hermes #95028）和沙箱隔离正在从“最佳实践”变为“默认要求”。

**趋势三：配置与部署的“可编程化”**
NanoClaw 的 setup 驱动协议系列 (#3482-#3488)、ZeroClaw 的 TypeScript 类型检查 CI (#10306)、Hermes 的“权威执行层”架构（#95028）共同指向：**AI 助手正在从“面向人类的交互工具”演进为“可被 CI/CD 编排的基础设施组件”**。这要求配置从 YAML 文本升级为结构化的、可编程的、可验证的接口。

**趋势四：模型的“身份”与“成本”透明化**
OpenClaw 社区要求暴露“实际解析的后端模型”和“OpenRouter 成本”（#51441、#9016），NanoClaw 关注 `opencode serve` 的工作目录继承问题（#3540）：用户不再接受黑盒调用。**可观测性（模型、成本、延迟、错误细节）正在成为用户的“默认权利”**。ZeroClaw #10357（工具失败仅返回“HTTP 400”）的修复方向即是这一趋势的注脚。

**趋势五：技能系统的生命周期管理成为新战场**
NanoClaw 的 4 个连续 Issue（作用域静态绑定、更新覆盖用户代码、安装脚本副作用、shell 拼接）揭示了技能系统从“安装”到“运行”到“更新”的全链路痛点。当 AI 助手从“单一模型对话”走向“多技能编排”，**技能的版本管理、作用域隔离、幂等安装和回滚能力**将决定用户体验的最终上限。


**结论**：当前生态正处于“规模扩张”与“质量巩固”的分水岭。OpenClaw 以绝对社区规模保持核心地位，但稳定性问题（SQLite 损坏、消息丢失）正为其敲响警钟。NanoBot、ZeroClaw 等腰部项目若能在“稳定可靠”与“持续创新”之间取得平衡，有望在 OpenClaw 的修复窗口期建立差异化心智。对于技术决策者，建议优先关注**边缘计算网格、沙箱隔离、可编程配置**三大方向，它们将定义下一代个人 AI 助手的竞争维度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-26

> 数据统计周期：2026-08-25 ~ 2026-08-26 | 数据来源：GitHub (HKUDS/nanobot)


## 1. 今日速览

NanoBot 项目过去 24 小时保持了**非常高的活跃度**：共产生 5 条 Issues（全部处于活跃状态，关闭 0 条）和 24 条 PR（待合并 10 条，已合并/关闭 14 条）。合并/关闭数量明显高于待合并数量，说明维护团队**合并速度较快、执行效率高**。此外，**两个 P1 级别（高优先级）的 PR**（#5533 find_files 性能修复、#5536 restricted shell 安全检查）在同一天被提出并处理，一个已合入一个待审中，凸显了项目对性能和安全的重视。整体来看，这是一个非常健康的开源项目：高吞吐、低积压、响应迅速，正处于**快速迭代期**，项目生态活跃度处于高位。


## 2. 版本发布

过去 24 小时无新版本发布。


## 3. 项目进展

今日合并/关闭了多个 PR 值得关注，以下是按影响面划分的重点合并内容：

### 核心稳定性
- **[#5541] fix(telegram): attribute group messages to senders** — 修复 Telegram 群聊消息归属问题，前缀发送者昵称，修复 #1091 长期 issue。
- **[#5540] fix(provider): stabilize Codex prompt cache routing** — 修复 Codex provider 中 prompt 缓存路由不稳定的问题。
- **[#5533] fix(tools): keep find_files scans responsive** — 修复大规模文件扫描导致的性能问题（P1），改用带预算的 os.scandir 遍历。关键性能修复，直接强化了工具调用的响应性。
- **[#5526] fix(agent): wait for exec sessions without polling** — agent 执行不再需要轮询等待，显著改善了工具调用体验。
- **[#5529] fix(agent): wait for background subagents only at turn exit** — 优化后台子 agent 的等待机制。
- **[#5525] feat: add demand-driven document retrieval** — `grep` 改为按需获取内容并支持 PDF/DOCX/XLSX/PPTX 增量搜索，大幅增强文档处理能力。

### 用户体验
- **[#5534] feat(tui): autocomplete skill references** — 新增 TUI 技能自动补全功能。
- **[#5538] refactor(tui): clarify active composer actions** — 优化 TUI 输入框的操作提示。
- **[#5530] style(tui): keep short transcripts and composer top-aligned** — 优化短对话时的 UI 对齐。

> 以上所有 PR 均已合并。这些改动集中在 **Chat 渠道（Telegram）、Provider 层、执行工具链和 TUI/WebUI 交互** 四个方向，整体补强了稳定性、性能与编辑体验。


## 4. 社区热点

### 讨论焦点：#5505 — AnySearch 搜索服务集成请求（3 条评论）
- [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505)
- 作者为 AnySearch 团队，主动提出为 NanoBot 添加新的 web search provider，提供 API/MCP/Skill 三种集成方式。
- 属于**第三方服务主动接入**，说明 NanoBot 的生态吸引力在增长，且 `web_search` 工具的扩展空间受到外部关注。

### 其他活跃讨论
- **[#5532] missing import of "mask_session_key" in autocompact.py** — 有 1 条评论，讨论了 autocompact 中缺失 import 导致的错误。
- **[#5516] Telegram rich messages never render when streaming is enabled** — 有 1 条评论，讨论了 streaming 与 rich messages 的冲突问题。

> 社区热点主要围绕**搜索服务集成、Telegram 消息渲染**两大主题，真实用户反馈居多，体现了对功能广度和消息体验的期待。


## 5. Bug 与稳定性

### 待修复

| 严重程度 | Issue | 描述 | 关联 PR |
|---------|-------|------|--------|
| **P2** | [#5532](https://github.com/HKUDS/nanobot/issues/5532) | `autocompact.py` 中缺少 `mask_session_key` 导入，触发错误 | 无 |
| **P2** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram streaming 下 rich messages 不渲染 | [#5531](https://github.com/HKUDS/nanobot/pull/5531)（待合并） |
| **P2** | [#5527](https://github.com/HKUDS/nanobot/issues/5527) | unifiedSession 下 WebUI 侧边栏标题一直显示 "Untitled" | [#5528](https://github.com/HKUDS/nanobot/pull/5528)（待合并） |

### 今日已合并修复

- **P1** [#5533](https://github.com/HKUDS/nanobot/pull/5533)：`find_files` 性能修复（路径排序导致的大目录扫描响应慢）。
- **P2** [#5541](https://github.com/HKUDS/nanobot/pull/5541)：Telegram 群聊消息归属错误（修复 #1091）。
- **P2** [#5540](https://github.com/HKUDS/nanobot/pull/5540)：Codex prompt 缓存路由不稳定。
- **P2** [#5529](https://github.com/HKUDS/nanobot/pull/5529)：后台等待子 agent 阻塞主循环问题。
- **P2** [#5538](https://github.com/HKUDS/nanobot/pull/5538)：TUI 活跃操作提示不清晰。

### 待审查重点

- **P1** [#5536](https://github.com/HKUDS/nanobot/pull/5536)：`restricted shell` 无沙箱时未 fail closed，存在安全隐患。

> 今天的 bug 重点是 **性能问题和渠道适配**。团队在修复侧表现积极，多个 Bug 在报告同一日内即有对应 PR 产出。待审查的安全修复 #5536 值得密切关注。


## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 当前状态 | 分析 |
|---------|------|---------|------|
| **AnySearch 搜索服务集成** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) | 待实现，计划提交 PR | 预计会进入 `web_search` 工具，扩大搜索覆盖面，可能进入下一版本路线图 |
| **WebUI 通知铃声** | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | 待评估 | 需求合理，实现成本低，有被纳入后续版本的可能 |
| **持久化 `focus` 会话上下文** | [#5537](https://github.com/HKUDS/nanobot/pull/5537) | 待合并 | 增强 agent 多轮任务的可控性，被合入可能性较大 |
| **MCP 就绪检查重试** | [#5535](https://github.com/HKUDS/nanobot/pull/5535) | 待合并 | 强化 MCP 工具链稳定性 |
| **metasearch 搜索提供商（MST）** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 待合并（有 conflict） | 长期开放的 PR，与 AnySearch 请求方向一致，说明 web_search 是大热方向 |
| **拖拽式会话组织** | [#5389](https://github.com/HKUDS/nanobot/pull/5389) | 已合并（比预期晚，期间有 conflict） | 已合入，WebUI 体验增强 |

> **路线图信号**：`web_search` 功能扩展是明显的路线图热点（来自 MST 搜索集成 PR、AnySearch 接入请求）。工具链稳定性（MCP 就绪重试、Fail-closed 修复）和 WebUI 交互优化（拖拽、标题填充、模型状态指示）也在同步推进。


## 7. 用户反馈摘要

- **AnysSearch 团队成员主动提议集成**（[#5505](https://github.com/HKUDS/nanobot/issues/5505)）：第三方服务方主动提出将 AnySearch 加入 `web_search` 工具，侧面反映 NanoBot 生态的吸引力，也说明开发者对**搜索工具的多样性**有明确需求。
- **中文用户报告明确场景**（[#5532](https://github.com/HKUDS/nanobot/issues/5532)）：用户在清理资源场景下触发报错（`mask_session_key` 缺失），说明**中文用户使用自动化清理类指令**场景存在，且对工具的容错性有较高要求。
- **"打开页面却不知道回复完了"的 WebUI 等待痛点**（[#5524](https://github.com/HKUDS/nanobot/issues/5524)）：用户等待长任务时缺少视觉/听觉提示，希望**主动通知机制**。
- **Telegram rich messages 与 streaming 不兼容**（[#5516](https://github.com/HKUDS/nanobot/issues/5516)）：用户明确表示 `rich_messages: true` 与默认的 `streaming: true` 互斥，产生行为不一致。
- **unifiedSession 名称不可见**（[#5527](https://github.com/HKUDS/nanobot/issues/5527)）：会话标题与侧边栏不同步，强迫用户依赖 "Untitled" 默认值，造成**多会话管理混乱**。

> 共同信号：在功能不断增加的同时，用户对**消息可见性、反馈时效、会话切换管理**的细节要求随之提升，值得团队在后续版本打磨。


## 8. 待处理积压

### 需要重点关注

| 内容 | 类型 | 时长 | 状态 | 说明 |
|------|------|------|------|------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR（MST 搜索集成） | 自 8 月 3 日开放（23 天） | **存在 conflict** | 持续 3 周以上，有冲突，需要维护者介入或要求作者 rebase。与新提的 AnySearch 需求形成竞争 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | PR（子 agent 部分完成标记） | 自 7 月 28 日开放（29 天） | 存在 conflict | 近一个月无动态，需要确认是否仍在推进 |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | PR（拖拽式会话组织） | 自 8 月 14 日开放（12 天） | 已合并 | 曾标记 conflict，最终合入。提示长周期 PR 需尽早处理 conflict |

### 主要关注点

- **P1 安全修复待审查**：`#5536`（restricted shell 无沙箱时 fail closed）当前是唯一处于待合并状态的 P1 PR，涉及安全边界，应尽快处理。
- **MCP 就绪重试、MST 集成**等 PR 均在等待设计/冲突解决，说明**新 provider 相关改动需要跨模块协同**，可能需要进一步拆解以降低冲突概率。
- **旧 PR 清理建议**：如果 `#5152` 不再计划推进，建议维护者显式关闭或标记为 stale，减少 review 负担。

---

> **总结**：NanoBot 正处于一个**高速迭代、充满活力**的阶段，同时在稳定性、用户体验、可扩展性方面均衡发展。维护团队响应速度快，社区参与度高，项目健康度良好。接下来值得关注的是 **P1 安全修复 #5536 的合入**、**搜索提供商生态的扩展**以及**统一会话模式的体验一致性**。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。以下是根据 Hermes Agent 在 2026 年 8 月 26 日的 GitHub 数据生成的每日项目动态日报。

---

### Hermes Agent 项目动态日报 (2026-08-26)

#### 1. 今日速览

Hermes Agent 项目今日活跃度极高，过去 24 小时内产生了 100 条 Issue 和 PR 更新，显示出强大的社区动力和开发效率。虽然今日无新版本发布，但代码合并与关闭的 PR 数量可观，标志着多项缺陷修复和功能优化已进入主干。值得关注的是，项目的议题集中在 **桌面端（Desktop）的稳定性**、**macOS 权限/密钥链兼容性** 以及 **MCP (Model Context Protocol) 工具链的可靠性** 上，这反映了用户对生产环境下的无缝体验有着很高的要求。此外，社区中关于`工具搜索（Tool Search）`与`Slack 适配器`的反馈也揭示了在多集成场景下的具体痛点。

#### 2. 版本发布

**无**。 在过去的 24 小时内，项目没有发布任何新的 Release 版本。

---

#### 3. 项目进展

今日合并/关闭的 PR 主要侧重于修复由社区报告的缺陷，特别是围绕会话状态管理和平台兼容性问题。关键进展包括：

- **修复桌面端 Bot 模式 Cron 回归**：PR #94516 和 #94483 被关闭，解决了在 Bot 模式下创建 Cron 任务时出现的 "Cronjobs are unavailable..." 硬编码占位符问题。这表明测试人员已修复并合并了相关代码。
- **修复 WebSocket 断开后消息静默丢失**：Issue #90428 被关闭，解决了桌面端在 WS 断开重连后，向旧会话发送消息被静默丢弃且无错误提示的问题。这有助于提升通信的可靠性。
- **增强 Slack 流式消息的健壮性**：Issue #93617 被关闭，修复了同一频道内并发对话导致流式消息互相覆盖、产生重复信息的问题。
- **启动新拉取请求（PR）以加固系统**：今日有多个高价值 PR 被提出，例如 PR #94911 (阻止非交互式上传暴露私人日志，安全问题) 和 PR #95115 (确保不可读文件不会禁用检查点功能)，但尚未合并。

总体而言，项目今日的重点在于**稳定性和缺陷修复**，尤其是围绕用户反馈强烈的桌面端体验和消息传递可靠性。

---

#### 4. 社区热点

今日最受关注的 Issue 揭示了用户在特定场景下遭遇的严重障碍：

- **Skill 索引过期问题 (Issue #66616)**：该 Issue 以 97 条评论遥遥领先，由自动化机器人报告，状态为 `degraded`。这虽非用户直接反馈，但涉及项目核心文档/Skill 分发机制的健康度，可能间接影响用户对 Skill 的获取和更新，因此引发了大量关注和讨论。
- **xAI 提供商与工具名称冲突 (Issue #95003)**：以 9 条评论和 8 个 👍 成为今日用户讨论的焦点。用户 `SOTO729` 报告使用 Grok 模型时，因`tool_search`函数名被保留而收到 API 400 错误。这直接导致 **Grok 提供商在启用工具搜索功能时完全不可用**，该问题具有较高的普遍性和阻塞性，反映了用户对多模型提供商支持的需求。
- **macOS 桌面应用权限丢失问题 (Issues #52010 & #91115)**：这两个 Issue 分别获得 21 和 9 条评论。它们共同指向一个长期存在的痛点：**每次更新后，macOS 的“完全磁盘访问”和“钥匙串”权限都会被撤销**，用户需要反复手动授权，严重影响了使用体验。

---

#### 5. Bug 与稳定性

今日报告的 Bug 主要围绕以下几个高影响领域，部分已有对应的修复 PR：

**高风险 (P1)**
- **MCP子进程退出 (Issue #94906)**：Windows 平台上，native stdio MCP 客户端发现工具但所有调用都立即失败，报错 `'subprocess has exited'`。这会完全阻断所有 MCP 工具在 Windows 上的使用。

**中高风险 (P2)**
- **xAI 提供程序完全不可用 (Issue #95003)**：如前所述，函数名冲突导致 Grok 模型请求被拒绝。**无直接关联的修复 PR**。
- **macOS 权限被撤销 (Issues #52010, #91115)**：桌面应用每次更新后均需重新授权，严重影响自动化流程。**无直接关联的修复 PR**。
- **桌面端“会话未找到” (Issue #93937)**：切换已注册网关时泄漏先前的运行时会话 ID，导致“会话未找到”错误。
- **“毒丸”用户态 cwd 问题 (Issue #95078)**：嵌套 Hermes 进程继承了陈旧的 `TERMINAL_CWD`，忽略了显式的子进程工作目录，可能导致模型在错误的位置执行操作。
- **网关重启后 MCP 间歇性故障 (Issue #94859)**：单个网关托管的多个 stdio MCP 服务器在重启后的前几分钟内会间歇性故障，原因不明。

**中风险 (P3)**
- **流式传输时的文本截断/损坏 (Issue #62774)**：桌面端在流式传输葡萄牙语等重音文本时出现严重截断，甚至吞掉非重音字符。
- **Slack 适配器流状态管理错误 (Issue #94435)**：适配器向已结束的流追加内容，导致消息重复和发送失败。

**已有 Fix PR 的亮点**：
- **PR #95144** 修复了 `_stdio_children_dead()` 中的逻辑反转问题（Inverted liveness check），该问题可能导致工具执行挂起（对应 Issue #94335）。
- **PR #95146** 修复了搜索工具将 `around_message_id=0` 误判为有效锚点的问题，避免模型生成的常见空值导致搜索硬失败。

---

#### 6. 功能请求与路线图信号

从今日的 Issue 和 PR 中可以看出，项目未来的发展可能聚焦于以下几个方向：

- **增强的桌面交互能力**：PR #94350 (`annotate_screen`) 提议允许 Agent 直接在用户屏幕上绘制指令标记（如圆圈、箭头），这表明了项目在 **“视觉交互”和“指导式操作”** 方向上的探索。
- **更持久的语音交互**：PR #95147 引入了实时语音提供者会话合约，旨在建立持久、双向的语音交互能力，是 #77111 提议的核心部分。
- **更可靠的授权与执行架构**：Issue #95028 提出“十二个问题，一个缺陷”的宏大架构，旨在通过“权威执行层”系统性解决各类边界问题。对应的 PR #95101 已经开始了第一阶段的实现（manifest schema + 编译器）。这是一个重要的路线图信号。
- **本地化支持的补齐**：Issue #40239 请求增加巴西葡萄牙语（pt-BR）的桌面端支持，但 Issue #26665 又指出语言设置无法持久化的问题。这表明 i18n 不仅需要增加语言，还需完善基础的状态保存机制。

---

#### 7. 用户反馈摘要

- **对“无感更新”的强烈渴望**：围绕 macOS 桌面端的多个 Issue 显示，用户对更新后权限丢失、密钥链重复提示等操作感到非常烦躁，这破坏了应用原本应带来的流畅体验。用户希望更新完全自动化且无需额外干预。
- **对多提供商/多平台集成的需求**：xAI 的失败案例饱受诟病（8个👍），凸显了用户对除 OpenAI/Anthropic 之外的模型提供商（如 Grok）的浓厚兴趣，以及对这些提供商与工具系统深度集成的期待。
- **并发与状态管理是关键**：Slack 频道中的并发消息问题反馈，表明用户在多任务并行、团队协作场景下对消息准确性的高要求。任何错乱或重复都可能造成业务干扰。
- **对自托管/本地模型 (Ollama) 的稳定性质疑**：关于 Ollama 流被取消和配置解析失败的多个 Issue，反映了本地模型（Local LLM）用户群的活跃度，以及他们对 `Hermes` 客户端与本地推理服务之间稳定集成的高标准和严要求。

---

#### 8. 待处理积压

以下是一些长期未解决、可能影响用户或阻碍项目发展的高价值 Issue/PR，值得维护者关注：

- **[Issue #52010] macOS 完全磁盘访问权限在更新后被撤销**：自 6 月 24 日报告以来已持续 2 个多月，评论数高达 21 条，属于高频痛点，但至今仍处于打开状态，且无关联修复 PR。这应被视为**高优先级**的积压问题。
- **[Issue #40239] 桌面端葡萄牙语 (pt-BR) 支持**：作为一个有明确用户诉求的功能请求，已开放近 3 个月。虽然属于 `needs-decision` 状态，但社区有贡献者（如 #26665 的举报者）在跟进，说明用户关注度较高。
- **[PR #45777] 为 memory 工具添加正则 'patch' 操作**：该 PR 旨在解决记忆存储文本漂移导致难以匹配的问题，自 6 月中旬开放以来已 2 个多月，且被标记为 `blast-massive`（影响面广）。然而，至今未见维护者明确表态或合并。这可能是一个提升 Agent 长期记忆能力的关键优化，需要尽快评估。

---
**结论**：Hermes Agent 项目活跃且社区参与度高，但近期重心明显偏向于**修复桌面端和集成层的稳定性问题**。其中，macOS 的权限持久化和 xAI 提供商的兼容性问题是最突出的用户痛点，建议项目组优先处理。同时，社区提出的“权威执行层”等新架构提议预示着项目在稳定性基础上对更深层架构重构的探索。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-26**  
**数据来源：github.com/sipeed/picoclaw**


## 1. 今日速览

过去24小时内，PicoClaw 项目共有4条 Issue 更新（全部为活跃状态，无新关闭）和1条 PR 更新（待合并）。项目未发布新版本。当前最值得关注的是两个持续发酵的 Bug 类 Issue（#3281 Web UI 输入延迟、#3269 MCP 连接失败导致 Agent 循环挂起），均已有社区成员参与讨论且评论数达到7条。与此同时，新增的 #3345 针对低资源边缘设备的 Worker 模式提案为该项目的应用边界拓展提供了新的可能性，值得关注。总体而言，项目处于**稳定迭代期**，社区活跃度中等，Bug 修复与功能扩展并行推进。


## 2. 版本发布

过去24小时内无新版本发布。当前最新版本为 v0.3.1（此前发布）。


## 3. 项目进展

今日无 PR 被合并或关闭，暂无项目进展更新。当前唯一的开放 PR 为 **#3340**：

- **[#3340] fix(slack): set FileSize on media upload params** — 由 `octavioturra` 提交，针对 Slack 媒体上传失败问题（对应 Issue #3338），在 `slack.UploadFileParameters` 中补充设置 FileSize 字段。该 PR 已开放8天，代码修复逻辑明确，待维护者审核合并。

**项目整体评估**：该 PR 是解决 Slack 媒体上传功能的重要修复，合并后将消除 Slack 集成中的一个功能性障碍，属于中等优先级修复。


## 4. 社区热点

**今日讨论最活跃的两个 Issue：**

1. **[#3281] Web UI chat input is very laggy when history has a little bit long**（7条评论，1👍）
   - 链接：https://github.com/sipeed/picoclaw/issues/3281
   - 用户 `xpader` 报告 Web UI 在对话历史稍长时输入框出现严重卡顿，影响日常使用体验。
   - **社区反应**：7条评论说明有多位用户遇到或关注此问题，背后诉求指向 Web 前端的渲染性能优化。

2. **[#3269] MCP server 连接失败导致 Agent 循环挂起，聊天界面停止回复**（7条评论，1👍）
   - 链接：https://github.com/sipeed/picoclaw/issues/3269
   - 用户 `ruiyigen` 报告当 MCP 服务器连接失败时，Agent 循环会挂起，导致整个聊天界面失去响应。
   - **社区反应**：该问题直接影响核心对话功能，讨论热度高，反映了 MCP 集成稳定性是当前用户关注的重点。

> 另外，今日新增 #3345 提案（Worker 模式）虽暂无评论，但作为新提交的功能性提案，后续值得关注。


## 5. Bug 与稳定性

### 🔴 高严重度 — 核心功能受影响

- **[#3269] MCP 服务器连接失败导致 Agent 循环挂起，对话完全停止**（OPEN）
  - 链接：https://github.com/sipeed/picoclaw/issues/3269
  - 创建于 2026-07-20，已存在37天，至今未关闭，**截至今日仍无关联修复 PR**。
  - 影响：任何使用 MCP 服务器的用户，在连接异常时都会遭遇聊天完全无响应，属于阻断性故障。

### 🟠 中严重度 — 功能可用性受损

- **[#3281] Web UI 对话历史稍长时输入框严重卡顿**（OPEN，标记 `[stale]`）
  - 链接：https://github.com/sipeed/picoclaw/issues/3281
  - 创建于 2026-07-21，已存在36天，被标记为 `[stale]`，**尚无修复方案提出**。
  - 影响：影响 Web 端日常交互体验，对话历史超过一定长度后输入响应明显变慢。

- **[#3338] Slack 无法附加上传图片媒体内容**（OPEN）
  - 链接：https://github.com/sipeed/picoclaw/issues/3338
  - 创建于 2026-08-17，已有对应修复 PR **#3340** 待合并。
  - 影响：Slack 集成中图片等媒体消息无法发送，已有明确修复方案但尚未合入。


## 6. 功能请求与路线图信号

- **[#3345] Proposal: lightweight PicoClaw worker mode for household edge compute（新）**
  - 链接：https://github.com/sipeed/picoclaw/issues/3345
  - 提出者 `kvnloo` 建议为低资源设备（RISC-V/ARM/MIPS 开发板、树莓派、旧 Android 手机等）开发轻量化 Worker 模式，使 PicoClaw 能够部署在家庭边缘计算场景中，与核心 PC 协同工作。
  - **评估**：该提案契合当前分布式 Agent 与边缘计算的发展趋势，且 PicoClaw 目标硬件恰好覆盖此类低功耗设备。结合当前已有 Slack 等外部集成功能来看，该提案若能落地，将大幅扩展 PicoClaw 的部署场景，**有较大概率被纳入后续路线图讨论**。建议维护团队评估技术可行性。


## 7. 用户反馈摘要

综合今日各 Issue 评论内容，提炼以下用户声音：

- **Web UI 性能是核心痛点**：多位用户在 #3281 中反馈 Web 界面在长时间使用后出现卡顿，说明 PicoClaw Web 前端在前端渲染和状态管理方面仍有优化空间，对话历史的增量渲染策略可能是关键。

- **MCP 集成的健壮性待提升**：#3269 展示了 MCP 服务异常时缺乏有效的错误处理和超时机制，用户期望的是**优雅降级**而非完全挂起，这涉及 Agent 循环中的错误恢复能力。

- **Slack 集成质量需跟进**：#3338 的问题虽已有修复 PR，但该 Bug 本身暴露了集成代码在边界情况（媒体文件处理）上的不足，说明已有外部渠道集成功能仍需打磨。

- **社区对低资源设备场景有真实需求**：虽然 #3345 尚无评论，但该提案的提出反映了部分用户将 PicoClaw 部署在低成本硬件上的现实需求，与其"在精确设备上运行"的定位相符。


## 8. 待处理积压

以下 Issue/PR 长期未获得维护者响应或解决方案，建议优先关注：

| 编号 | 标题 | 类型 | 持续时间 | 严重度 | 当前状态 |
|------|------|------|----------|--------|----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 Agent 循环挂起 | Bug | 37天 | 🔴 高 | 无修复 PR，被标记 `[stale]` |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 对话历史长时输入卡顿 | Bug | 36天 | 🟠 中 | 无修复方案 |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | fix(slack): 设置 FileSize 修复媒体上传 | PR | 9天 | 🟠 中 | 待维护者审核合并 |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 无法附加上传图片 | Bug | 9天 | 🟠 中 | 有修复 PR，等待合并 |

> **特别提醒**：#3269 属于阻断性 Bug 且已持续37天，仍未见修复动作，同时被标记为 `[stale]`，建议维护团队优先响应以免问题持续积累。


### 📊 项目健康度简评

| 维度 | 状态 | 说明 |
|------|------|------|
| 社区活跃度 | ⭐⭐⭐ | 24小时内4条 Issue 更新、1条 PR 更新，讨论热度中等 |
| 响应速度 | ⭐⭐ | #3269 和 #3281 存在30+天未获修复，#3340 PR 9天未审核 |
| 版本节奏 | ⭐⭐⭐ | 当前版本 v0.3.1，短期内无新版本发布 |
| 技术方向 | ⭐⭐⭐⭐ | 新增边缘计算提案，技术方向有前瞻性且贴合目标硬件定位 |

**核心建议**：优先处理 #3269 MCP 挂起问题和 #3340 PR 的审核合并；同时评估 #3281 Web UI 性能优化的优先级，避免关键问题长期积压导致社区信心下降。

---
*本报告基于 2026-08-26 数据自动生成，所有 Issue 和 PR 均附原始 GitHub 链接。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期**: 2026-08-26 | **数据窗口**: 2026-08-25 ~ 2026-08-26

---

## 1. 今日速览

NanoClaw 在 2026-08-26 迎来了一轮密集的社区反馈期：24 小时内新增/活跃 5 个 Issue，全部来自同一批高级用户（glifocat 连续提交 4 个针对技能系统缺陷的深度报告），反映出核心用户对技能生命周期管理（作用域、继承、更新）的体验存在系统性痛点。PR 侧活跃度极高（50 条更新），其中核心团队（core-team）主导的 commit 占据多数，标志着项目正进行一轮有计划的内部重构。值得关注的是，今日无新版本发布，但 16 个 PR 被合并/关闭，显示出代码合并节奏明显快于版本发布节奏。整体评估：项目处于高活跃度、健康推进状态，但用户侧对特定流程的负面体验需要及时回应。

---

## 2. 版本发布

**无新版本发布。** 上一版本信息暂缺。合并的 16 个 PR 尚未形成新的 release，预期将在近期版本中集中体现。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在以下几个核心方向，每个都代表了对既有架构的实质性改进：

### 3.1 代码协作与合并策略优化

| PR | 内容 | 意义 |
|---|---|---|
| [#3544](https://github.com/nanocoai/nanoclaw/pull/3544) [CLOSED] | Slack 房间显式交接（core-team） | 与 #3545 重复，关闭说明团队在并行开发中存在 PR 冗余，但合并策略在快速收敛 |
| [#3540](https://github.com/nanocoai/nanoclaw/pull/3540) [CLOSED] | 修复 OpenCode 代理在工作目录运行问题 | **重要修复**：`opencode serve` 继承 runner 的 cwd（`/workspace/group`）而非代理工作目录，导致项目文档无法被正确读取。该问题影响所有 OpenCode 用户 |
| [#3539](https://github.com/nanocoai/nanoclaw/pull/3539) [CLOSED] | 去除 Codex 重复的 composer（core-team） | 重构：两个 composer 已漂移，统一走 trunk 的共享 composer。**关键改进**：修复了 `cli_scope: disabled` 时错误传递 `ncl tasks` 手册的问题 |
| [#3537](https://github.com/nanocoai/nanoclaw/pull/3537) [CLOSED] | 同 #3539 的重复 PR（core-team） | 说明团队在此方向有 commits 收敛过程 |
| [#3536](https://github.com/nanocoai/nanoclaw/pull/3536) [CLOSED] | 将每条指令源内联到一个项目文档（core-team） | **重要修复**：`CLAUDE.md` 中的 `@` 导入指向 `/app` 的符号链接，Claude Code 更新后增加了安全门禁（导入解析到工作目录外需审批），导致指令加载中断。内联解决了这个阻塞 |
| [#2656](https://github.com/nanocoai/nanoclaw/pull/2656) [CLOSED] | mnemon setup 移入 `index.ts main()` | **重要修复**：entrypoint.sh 被 host 覆盖（`bash -c 'exec bun run /app/src/index.ts'`），导致 mnemon 的 hooks 从未注册。这是一个存在已久的静默失败 | 

### 3.2 项目整体推进判断

今日合并的 PR 集中在"让代理真正按预期工作"的修复层面——从 OpenCode 工作目录、CLAUDE.md 内联、mnemon 初始化到 Codex composer 去重，都指向让既有的代码执行路径更加可靠。项目在稳定性修复上投入明显高于新功能开发（新功能 PR 多为 OPEN 状态）。值得肯定的是，核心团队（amit-shafnir 和同事）在一天内清理了 3+ 个结构性债务，执行力较强。

---

## 4. 社区热点

今日评论数最多的 PR 集中在 `amit-shafnir` 的一系列 setup 相关改进（#3482-#3488），这是一个值得关注的现象：

| PR | 标题 | 核心诉求 |
|---|---|---|
| [#3485](https://github.com/nanocoai/nanoclaw/pull/3485) | 结构化 setup 驱动协议 (`nanoclaw.driver.v1`) | 让外部程序能编程化驱动安装向导，而非解析终端文本输出 |
| [#3484](https://github.com/nanocoai/nanoclaw/pull/3484) | 防止认证密钥进入 argv | **安全修复**：OAuth token/API key 直接放在命令行参数会被同机其他进程窥探 |
| [#3482](https://github.com/nanocoai/nanoclaw/pull/3482) | 暴露结构化主机健康状态 | 需要单一只读调用即可回答"安装是否正常、包含什么" |
| [#3487](https://github.com/nanocoai/nanoclaw/pull/3487) | setup 接受客户端时区预置 (`--tz`) | 自动化预配置需要跳过交互式时区询问 |
| [#3486](https://github.com/nanocoai/nanoclaw/pull/3486) | 暴露构建时预置目录 (`--catalog-preseeds`) | 让外部工具提前知道可配置项及其校验规则 |

**分析**：这一簇 PR 的共同主题是把 `setup` 从"面向终端的人类交互向导"改造为"可编程、可自动化、可安全调用的服务"。这暗示了 NanoClaw 的部署场景正在从个人开发者扩展到更自动化的环境（CI/CD、服务器批量部署、托管服务商）。社区（或核心团队自身）在推动 NanoClaw 成为可嵌入更大系统的基础设施组件。

---

## 5. Bug 与稳定性

按严重程度排列：

### 高危

| Issue | 问题描述 | 状态 |
|---|---|---|
| [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) [OPEN] | **Shell 注入漏洞**：`add-dial` 将 `{{owner_email}}` 未加引号拼入 bash 命令。邮箱中含单引号（如 `o'connor@x.com`）时破坏语法；含 shell 元字符可通过验证但执行任意命令。涉及 4 处（两个 skill 文件各 2 处）| **无对应 fix PR** |

### 中危

| Issue | 问题描述 | 状态 |
|---|---|---|
| [#3535](https://github.com/nanocoai/nanoclaw/issues/3535) [OPEN] | `add-vercel` 的每次会话拷贝技能文件会阻塞 spawn 时的符号链接同步，导致技能组固定在旧版本 | 无对应 fix PR |
| [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) [OPEN] | `add-*-tool` 的按代理作用域仅覆盖已存在分组，后续新建代理默认获得该工具（绕过 ACL）| 无对应 fix PR |
| [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) [OPEN] | `update-nanoclaw` 技能刷新误判渠道导入来源：自助适配器被误判为来自 skill 而验证失败或被覆盖，无 opt-out 选项 | 部分相关修复 PR [#3452](https://github.com/nanocoai/nanoclaw/pull/3452)（为更新命令提供真实输出缓冲）已待合并，但未直接解决此问题 |

### 低危 / 待确认

- [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) [OPEN] 修复定时任务错误路由到 operator（#3223），PR 已存在，未合并。

**判断**：`#3543` 的 shell 注入风险最需优先处理。该漏洞位于技能提示词中，直接影响了使用 `add-dial` 的用户的账户安全，且修复成本较低（加引号）+ 建议补充 shell 元字符验证。

---

## 6. 功能请求与路线图信号

| 请求/PR | 状态 | 预计方向 |
|---|---|---|
| [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) 将 NanoClaw 容器作为可选的边缘 worker（在家用闲置 PC/NAS 上运行）| OPEN，无评论 | 这是一个**架构级**请求。与现有集中式 Docker host 执行模型不同，可能需要较长的设计周期。但考虑到 NanoClaw 定位是个人/家庭 AI 助手，这个方向符合用户群特征，值得核心团队评估 |
| [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) 本地 Web 聊天界面（core-team, OPEN）| 待合并 | 这条 PR 已存在 9 天，若合并将大大降低新用户试用门槛（无需先行配置外部渠道账号）。是提升首次体验的关键功能 |
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) Slack 适配器条件式线程策略（DM 不用、频道用）| OPEN，已存在 3 个月 | 长期未合并，但功能明确且合理。核心团队可能考虑的是接口设计而非功能本身 |
| `amit-shafnir` 的 setup 驱动协议系列（#3482-#3488）| 均 OPEN，待合并 | 如果这些 PR 全部落地，NanoClaw 的部署将可被外部系统完全自动化编排，是进入托管/企业场景的前提 |

**路线图判断**：短期（下一版）大概率包含 #3536（CLAUDE.md 内联）、#2656（mnemon 修复）、#3540（OpenCode 工作目录）这些已合并的修复。中期将看到 setup 可编程化（#3485、#3486、#3487、#3488）和本地 Web 界面（#3298）——这些都在 OPEN 队列中且有 core-team 成员参与。

---

## 7. 用户反馈摘要

**用户画像**：今日反馈者均为深度用户，表明对 NanoClaw 的技能体系有实际使用经验。

### 痛点提炼

1. **技能作用域模型脆弱**（#3532）：所有 `add-*-tool` 系列按当前存在的分组做访问控制，新分组"自动获得"工具，这被 glifocat 明确指出是安全问题："a new group gets the tool by default"。深层次原因是：作用域绑定在创建时（静态），而非运行时动态判定。

2. **技能更新流程不透明不可控**（#3529）：自写适配器被误判为 skill、被覆盖、无 opt-out。用户对"`update-nanoclaw` 应该做什么、不该做什么"的权利边界存在期望落差。glifocat 明显对"更新破坏了我的自定义代码"感到不满。

3. **技能副作用影响运行时行为**（#3535）：`add-vercel` 的 rsync 操作阻塞了 spawn 时的 symlink 同步，这是一个典型的"安装脚本与运行架构耦合"的问题。用户需要的是幂等的、静态的技能安装，而不是每次会话都重新同步。

4. **Shell 拼接安全意识不足**（#3543）：glifocat 的发现表明核心团队在设计技能提示词时对输入验证→安全执行的链路不够严格。虽然只是 `add-dial` 一个 skill，但 `add-*` 系列模式相同，存在同类风险。

### 反馈调性

用户（以 glifocat 为代表）提交的 Issue 格式完整（含复现路径、代码位置、影响分析），明显是资深用户。但所有 5 个 Issue 评论数均为 0，**没有任何维护者回应**。这是一个需要警惕的信号：用户花时间写了高质量报告，但 24 小时内没有得到回复，可能导致用户倦怠或流失。

---

## 8. 待处理积压

### 长期未响应的关键 PR

| PR | 创建时间 | 待关注天数 | 重要度 |
|---|---|---|---|
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) Slack 线程条件策略 | 2026-05-12 | 106 天 | 功能完整、明确需求，长期停留 OPEN，需决定合并/关闭/变更设计 |
| [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) 本地 Web 聊天 | 2026-08-17 | 9 天 | core-team 成员提交，但未见评论或 review，建议尽快处理 |
| [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) 定时任务错误路由 | 2026-08-18 | 8 天 | 对应 issue #3223 的 bug fix，补丁已存在，等待 review |

### 今日新增的待处理

| Issue | 严重度 | 建议 |
|---|---|---|
| [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) Shell 注入 | 高 | **今日内应至少回复**。此问题可直接关闭 `add-dial` 相关能力或要求用户禁用，直至补丁合入 |
| [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) 更新覆盖用户代码 | 中高 | 优先评论，表明已知晓、已计划。用户的问题切中更新流程设计缺陷 |
| [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) 边缘 worker | 低 | 如果没有计划，应明确告知用户。此用户（kvnloo）提出了合理的使用场景（闲置硬件利用），值得官方回应 |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐⭐⭐⭐ | 50 条 PR 更新、16 个合并/关闭，核心团队高产出 |
| 用户参与度 | ⭐⭐⭐⭐ | 高质量 Issue 持续输入，反馈有深度 |
| 维护响应度 | ⭐⭐ | 5 个新 Issue 无一回复，存在响应滞后风险 |
| 发布节奏 | ⭐⭐⭐ | 无新版本，但合并了关键修复，预计下一版有显著变化 |
| 安全态势 | ⭐⭐⭐ | 发现 1 个 shell 注入漏洞（#3543），说明安全审查需加强 |

**总结**：NanoClaw 正处于架构清理与稳定性提升的加速期，核心团队 focus 明确。但需注意：高质量用户反馈的堆积可能消耗社区信任，建议今日内至少回复 #3543 和 #3529，以维持"提交-回应"正向循环。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

NullClaw 今日活动水平较低但信号集中：过去24小时内仅有 1 条新 Issue（#994）提交，无 PR 活动，无新版本发布。唯一的新 Issue 质量较高，提出将 NullClaw 现有的 RuntimeAdapter、硬件发现、隧道等原语组合为"家庭边缘网格"的具体方案，说明社区正在将项目能力向实际部署场景延伸。整体而言，项目处于正常的低频迭代期，无回归或紧急问题报告，健康度良好，值得关注的是该新 Issue 的路线图参考价值。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并或关闭，核心代码库无增量推进。项目进展主要体现在新 Issue 的设计提案层面（详见下节），尚无代码层面的功能推进。

---

## 4. 社区热点

[Issue #994 — Household edge mesh using RuntimeAdapter workers and signed receipts](https://github.com/nullclaw/nullclaw/issues/994)（作者: kvnloo | 评论: 0 | 👍: 0）

该 Issue 是今日唯一活跃讨论项，虽无评论互动，但内容极为充实。作者详细论证了 NullClaw 已具备构建家庭边缘网格所需的"异常好的原语"——包括轻量 Zig 运行时、`RuntimeAdapter` 与 `Peripheral` 虚表抽象、Docker/WASM 适配器、硬件自动发现、隧道机制、通道、工具系统以及严格的体积/内存目标。提出利用这些组件将用户家中闲置的 PC、笔记本组成一个私有计算网格。

**诉求分析：** 这反映了社区中一种真实的使用场景——用户希望将 NullClaw 从单机智能体框架扩展为多设备协同的私有计算平台，强调数据主权与硬件复用，而非依赖云端。该提案与此前硬件的严格体积目标一脉相承，说明用户重视边缘部署的可行性。

---

## 5. Bug 与稳定性

今日无 Bug 报告，无崩溃或回归问题。项目稳定性良好。

---

## 6. 功能请求与路线图信号

今日唯一的 Issue #994 实质是一个功能请求，且提案成熟度高。它建议构建以下能力：
- 基于 `RuntimeAdapter` 的 Worker 节点管理
- 使用签名收据（signed receipts）进行工作验证与结算
- 在 Docker/WASM 适配器之上运行隔离工作负载

**路线图判断：** 该项目提案与 NullClaw 现有的模块高度吻合，实现路径清晰（组合而非新建原语），很可能被维护者纳入下一阶段版本规划。若采纳，将在现有单机能力之上增加多机协同维度，显著扩展项目的适用边界。

---

## 7. 用户反馈摘要

今日无新增用户评论。从 Issue #994 的提案中可提取用户侧信号：
- **使用场景：** 用户拥有多台经常闲置的 PC/笔记本，希望将它们转化为私有、自主可控的计算资源池
- **满意度：** 用户对 NullClaw 的模块化设计和体积控制表示认可（"unusually good primitives for a household edge mesh"），信任其作为底层基础设施
- **期待方向：** 在现有单机智能体之上增加分布式协同能力，并强调收据验证机制（暗示对去中心化信任的重视）

---

## 8. 待处理积压

今日无新增长期未响应项。当前唯一的 Issue #994 创建时间为 2026-08-25，尚处于新提交状态，期待维护者或社区成员做出初步回应以推动讨论。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

IronClaw 项目在过去 24 小时内保持较高活跃度，共产生 37 条 Issue 更新（其中新开/活跃 33 条，关闭 4 条）和 24 条 PR 更新（待合并 14 条，已合并/关闭 10 条），无新版本发布。核心开发方向集中在三个层面：**CI/CD 基础设施收敛**（nextest 流水线、preflight 规范化、PR/队列检查对齐）、**WebUI 设计系统推进**（Design System Phase 3a 基础落地、组件库统一迁移）、以及**通知中心与扩展生态韧性**（持久化通知收件箱推广、扩展认证与工具结果可视性修复）。值得关注的是，今日涌现了多起与 **Reborn 智能体循环** 相关的性能与稳定性问题（#7891、#7892），表明核心执行引擎仍处于快速迭代和问题暴露期。整体项目健康度**良好**，贡献者梯队（core/experienced/regular/new）均有活跃交互动。

## 2. 版本发布

无新版本发布。相关 PR 中提及 v1.4.0 roadmap 仍在推进（#7732、#7781、#7687），建议关注后续 release 计划。

## 3. 项目进展

今日合并/关闭的 PR 反映了项目的几个重要推进方向：

**CI/CD 基础设施收敛（T2–T4 系列）**
- [#7817](https://github.com/nearai/ironclaw/pull/7817)（合并）：nextest 测试流水线落地，实现全失败信号上报与 PR 解限流（关闭 #7799）
- [#7809](https://github.com/nearai/ironclaw/pull/7809)（合并）：canonical preflight 门禁归一化，统一 gate 列表 + worktree-safe hooks + 自打印 REPRO
- [#7819](https://github.com/nearai/ironclaw/pull/7819)（合并）：PR/队列检查收敛，消除三类"仅队列失败"问题（关闭 #7800）
- [#7820](https://github.com/nearai/ironclaw/pull/7820)（合并）：scope 隔离套件整合探针，为 T2 后续测量提供数据
- [#7894](https://github.com/nearai/ironclaw/pull/7894)（合并）：CI 降低必需 scope checkout 传输量

**通知中心持久化**
- [#7846](https://github.com/nearai/ironclaw/pull/7846)（合并）：正式移除 legacy approval fallback 兼容层，持久化通知收件箱成为唯一通知来源（配合 #7687/#7706 关闭）

**扩展生态修复**
- [#7861](https://github.com/nearai/ironclaw/pull/7861)（合并）：修复设备链接指引（install/activate 路径），恢复 Telegram 个人账号配对引导

**WebUI 设计系统**
- [#7816](https://github.com/nearai/ironclaw/pull/7816)（合并）：OOBE 建议抽屉增加刷新与连接入口（前端部分）

**Docs**
- [#7859](https://github.com/nearai/ironclaw/pull/7859) 已关闭（内容相关）

**子代理背景模式**
- [#7818](https://github.com/nearai/ironclaw/pull/7818)（合并）：background mode 的 slices 2b+2c 落地，增加回执生成、逐子代理投递与激活、健康修复扫描（注意：含有部署门禁，需关注后续状态）

## 4. 社区热点

**#7732 — Epic: Persistent per-user sandbox with iron-proxy（9 评论）**
[链接](https://github.com/nearai/ironclaw/issues/7732)

当前评论数最高的 Issue，核心诉求是将 `builtin.shell` 从"每次命令创建/销毁容器"的模式升级为**持久化用户沙箱**，并计划引入 `iron-proxy` 组件同时推延 loop executors。讨论关注点预计集中在 Docker 生命周期管理、`/workspace` 持久化语义（per `(tenant, user)`）以及安全隔离策略上。作为 v1.4.0 roadmap 的 epic，牵动多个后续子任务。

**#7799 — CI expedite T2（4 评论，已关闭）**
[链接](https://github.com/nearai/ironclaw/issues/7799)

虽已关闭（对应 #7817 合并），但其讨论体现了社区对 **CI 反馈效率**的高度关注——从顺序 `cargo test` 到 nextest 并行流水线的转换，以及对"一次运行报出所有失败"能力的期待。

**#7862 — Telegram 设备链接失败（3 评论）**
[链接](https://github.com/nearai/ironclaw/issues/7862)

用户通过 Railway 实例实测发现，当 `telegram_api_id/api_hash` 未配置时，错误提示为笼统的 "Something went wrong"，**缺少可操作的配置指引**。该 Issue 与 #7887（扩展查找路径即兴生成设备链接指引）联动，反映出 **Telegram 接入流程在配置缺失时的错误处理体验**是当前关注点。

## 5. Bug 与稳定性

| 严重程度 | Issue | 问题描述 | 状态 |
|---|---|---|---|
| **高（性能/阻塞）** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | 未投影能力载荷 + 盲目 24 KiB 截取导致单轮 19.7s 推理（其中 19.2s 为模型推理），两次邮件读取实际仅需 ~280ms | 开放，已有修复 PR [#7896](https://github.com/nearai/ironclaw/pull/7896)（有界结构化预览路径） |
| **高（循环挂起）** | [#7892](https://github.com/nearai/ironclaw/issues/7892) | 延迟工具被 15 次查找但从未调用，123s 运行中 31 次能力调用仅 4 个不同 `(capability, arguments)` 对，无终止守卫 | 开放，待关注跟进 PR |
| **中（功能不可用）** | [#7862](https://github.com/nearai/ironclaw/issues/7862) | Telegram 设备链接失败，错误提示无指导性（api_id/api_hash 未配置时） | 开放，关联 #7861 已修复部分路径 |
| **中（挂起）** | [#7888](https://github.com/nearai/ironclaw/issues/7888) | 获取日志无限挂起，已在两个实例上确认复现 | 开放 |
| **低（卡死风险）** | [#7884](https://github.com/nearai/ironclaw/pull/7884)（PR） | 通过 10 分钟 wall-clock 占用上限 + 诚实的 queued-busy 文案来解除卡死线程 | 开放，待合并 |

## 6. 功能请求与路线图信号

**明确纳入 roadmap / epic 的信号：**
- **Persistent per-user sandbox**（#7732，v1.4.0 epic）: 持久化 `/workspace` + `iron-proxy` 架构，将从根本上改变自动化执行环境模型
- **Design System 三线并行**（#7038 已关闭、#7781、#7782）: 设计系统已拆分为三个 epic 并行推进，今日 Phase 3a 基础（PR #7831 的 Chromatic lane + token 轴）正在开发中
- **Slack channel-routed agents**（#4625，roadmap epic）: 今日新增强化信号 #7871（Slack-to-console bridge + 富交互 UX）
- **通知中心扩展**（#7872–#7876 系列）: 从"仅审批通知"扩展到预运行失败、资源/策略阻塞、扩展认证失效等场景的持久化通知

**值得关注的下一版本候选：**
- **Voice-to-text 输入**（#7867）：WebUI composer 语音输入功能请求，指出 Slack/Telegram 均已支持语音而 Web 端缺失
- **自动化运行经验持久化**（#7893）：per-automation lessons 文件，使定时运行能继承上次学到的操作经验（如"此扩展安装在第 3 步失败，需绕过"）
- **远程边缘 Worker**（#7889 RFC）：将 worker 池从单主机扩展到用户自有的空闲机器，属架构级扩展提案

## 7. 用户反馈摘要

**负面反馈：**
- **设置人格（personality）困难**（#7895）：用户直接反映 "me trying to set up personality with ironclaw"，建议在 Settings 中增加专门的 agent.md 编辑区——暴露了 **配置发现性差** 的问题
- **错误提示缺乏可操作性**（#7862）：Telegram 设备链接失败提示过于笼统，用户无法判断是配置问题还是系统故障
- **日志获取挂起**（#7888）：在独立实例上被多次确认，影响用户对自动化运行透明度（可观测性）的信心

**正面信号：**
- 多用户快速确认同一 Bug（#7888 被"another user confirmed"），说明**用户群体活跃且愿意参与质量管理**
- #7887 的复现过程非常详细（真实 bot + 真实配对的 Telegram 账号 + 真实模型轮次），体现了用户/贡献者层面的**专业反馈质量**

## 8. 待处理积压

**长期未关闭的核心 roadmap Items：**
- [#4625](https://github.com/nearai/ironclaw/issues/4625)（6 月创建，Slack channel-routed agents）: 作为 roadmap epic 已存在 2.5 个月，长期盘踞 backlog，今日仅获得 1 条评论，推动力可能不足
- [#7732](https://github.com/nearai/ironclaw/issues/7732)（8 月 18 日创建，Persistent sandbox）: epic 状态，需要拆解子任务和对应 PR 才能推进

**需要维护者回应的新提案：**
- [#7889](https://github.com/nearai/ironclaw/issues/7889)（RFC：远程边缘 Worker）: 架构级提案，需要官方明确是否纳入 roadmap 或指导设计方向
- [#7885](https://github.com/nearai/ironclaw/issues/7885)（OpenSSF Scorecard）: 低风险、高社区价值的安全合规建议，已有对应 PR #7886，建议尽快评估合并（新贡献者提交）

**值得关注的开放大型 PR：**
- [#7491](https://github.com/nearai/ironclaw/pull/7491)（size: XL, open since 8/11）: 编码工具核心契约重构（omp core-tool contract），涉及 API 更名和工具面收敛，需要密切跟进合并进度，注意潜在破坏性变更
- [#7831](https://github.com/nearai/ironclaw/pull/7831)（open since 8/23）: Design System Phase 3a 基础，等待审查

---

*本日报基于 GitHub 公开数据自动生成，时间为 2026-08-26。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-26

## 今日速览

LobsterAI 今日保持高活跃度，24小时内共产生 14 条动态（11 条 PR、1 条 Issue、2 个版本发布），PR 合并/关闭率达 82%（9/11），整体迭代节奏持续推进。核心聚焦于**资料库（Library/Artifacts）模块的功能完善与体验优化**，涉及后台刷新机制修复、预览类型区分、埋点与转化归因等多项变更。两个新版本（2026.8.21、2026.8.25）均在本周期内发布，入库效率较高，项目整体处于稳定交付轨道。

---

## 版本发布

### LobsterAI 2026.8.25（8月25日发布）

**主要变更：**

- **feat(library)**：新增本地资料库能力（PR #2513）
- **feat(library)**：增强跨平台缩略图与本地产物生命周期管理（PR #2524）
- **feat(library)**：优化本地产物预览与操作体验（PR #2525）

> 本次发布主要聚焦本地产物能力的引入与体验打磨，属于增量功能迭代，**未发现破坏性变更**。升级用户建议关注本地产物生命周期管理相关配置项，并在多平台环境下验证缩略图表现。

### LobsterAI 2026.8.21（8月21日发布）

**主要变更：**

- **feat(dsh)**：新增 enable toggle 与 workbench 打开的使用分析（PR #2515）
- **feat(dsh)**：升级 dsh 至 0.1.1-rc.1（PR #2516）
- **refactor(dsh)**：重构使用分析相关逻辑

> 本版本聚焦 dsh 模块的使用分析能力，属于基础能力补全，**无破坏性变更**。

---

## 项目进展

> 以下为今日合并/关闭的主要 PR，按功能领域分类：

### 资料库（Library/Artifacts）— 重点推进

- **[PR #2531] fix(library): 修复本地产物后台刷新闪烁** — 拆分首次加载/后台刷新/分页追加状态，新增按资料 ID 批量查询接口，删除任务时同步回退分组或隐藏无关联产物。**这是今日最重要的体验修复**，解决了后台刷新导致整页骨架屏回退的问题。
- **[PR #2533] fix(artifacts): 区分网页与本地服务的预览展示** — 将 HTML 网页与本地服务拆分为独立展示类型，各配专属图标与文案（“网页” vs “本地服务”），并补充 HTM 文件图标映射。
- **[PR #2529] feat(analytics): 完善资料库埋点与发布转化归因** — 新增曝光、筛选、搜索、预览、收藏、刷新等行为埋点，串联资料库页面到付费订阅转化的“七天末次触点归因”，支持失败重试；同时移除独立网站入口，统一收口至资料库。

### 设置与模型目录

- **[PR #2530] feat(settings): add plan model catalog** — 在自定义模型设置上方新增套餐模型目录页签，支持加载文本/图片/视频模型的定价目录，以分类卡片形式展示，并附带轻量诊断能力。

### 其他

- **[PR #2532] fix(sidebar): fade out login promo tip** — 登录推广提示 5 秒后淡出，并在 auth 状态变化时清理定时器。
- **[PR #2534] Release/2026.8.20** — 版本发布合并。
- **[PR #1275][PR #1276]** — 关闭两个 stale 的 CI 依赖升级 PR（actions/stale、actions/first-interaction）。

**整体评估**：项目在本周期内完成了从“基础能力建设”（dsh 分析、模型目录）到“体验打磨与修复”（刷新闪烁、预览区分、提示淡出）以及“商业转化链路”（归因分析）的完整闭环，前进幅度明显。

---

## 社区热点

今日社区讨论整体趋于平静，共 1 条新 Issue 活跃：

### Issue #2536：微信群已满人
- **作者**：MurrayHubert | **创建**：2026-08-25 | **评论**：1 | **👍**：0
- [链接](https://github.com/netease-youdao/LobsterAI/issues/2536)

**分析**：用户反馈微信群已满，期待官方开设新群。该 Issue 虽标记为 OPEN，但实际是社区运营层面的诉求，说明项目用户群体在持续增长、现有社区承载能力接近上限。建议维护者关注用户规模增长与社区渠道扩容的匹配度，可尽快开设新群或引导至其他渠道（如 Discord/Telegram）。

---

## Bug 与稳定性

今日共修复 2 个功能性 Bug，按影响范围排列：

| 严重程度 | 问题描述 | 修复 PR | 状态 |
|---------|---------|--------|------|
| **中**（影响体验） | 资料库后台刷新时页面闪烁，已有内容退回整页骨架屏 | [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) | ✅ 已合并 |
| **低**（视觉细节） | 登录推广提示常驻侧边栏，打扰用户 | [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | ✅ 已合并 |

**未发现新的崩溃或回归类问题。**

---

## 功能请求与路线图信号

今日无来自用户的新功能请求，但从已合并的 PR 中可以识别以下**路线图信号**：

1. **商业转化链路建设**（PR #2529）：引入“7 天末次触点归因”分析，表明项目正在构建从免费用户到付费订阅的转化追踪体系，商业化路径逐渐清晰。
2. **定价目录展示**（PR #2530）：新增 plan model catalog 页签，进一步验证了商业化方向，下一版本可能围绕套餐展示与付费引导做更多优化。
3. **本地产物能力持续深化**（PR #2513、#2524、#2531、#2533）：近 4 个 PR 连续聚焦本地产物（Library）的体验与生命周期管理，可预期该模块在后续版本中会有更多功能扩展（如批量操作、跨设备同步等）。

---

## 用户反馈摘要

- **社区渠道诉求**：Issue #2536 反映微信群已满，用户希望官方提供新的社区入口。这侧面说明项目用户活跃度在提升，社区承载需扩容。
- **无关于产品功能的具体使用痛点反馈**：今日无负面功能反馈或使用障碍报告，未发现满意度/不满意度的明确信号。

---

## 待处理积压

> 以下为长期未合入或可能被忽视的 PR，建议维护者关注：

| PR | 描述 | 创建时间 | 状态 | 积压时长 | 建议 |
|----|------|---------|------|---------|------|
| [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) | **feat(cowork): add session fork（会话分支）** — 用户可从会话详情页操作菜单创建分支会话，便于实验不同方向的后续对话 | 2026-03-31 | OPEN | **近 5 个月** | 该功能由 vdorchan 提交，具备一定的产品价值（会话实验、多路线探索），建议维护者评估是否纳入路线图或关闭并说明原因 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | **chore(deps-dev): bump electron 40.2.1 → 43.4.1 + electron-builder**（dependabot） | 2026-04-02 | OPEN | **近 5 个月** | 依赖升级跨度较大（跨 3 个主版本），可能存在兼容性顾虑，但长期不更新会积累安全风险，建议安排专门验证 |

**总体项目健康度评估**：✅ 健康 — 迭代节奏稳定（2 版本/周），核心模块持续打磨，商业方向逐渐明确；唯一需关注的是社区渠道扩容与长期未处理的积压 PR。

---

*本报告基于 GitHub 公开数据自动生成，统计周期为 2026-08-25 至 2026-08-26。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-26

## 1. 今日速览

Moltis 项目过去 24 小时整体活跃度中等偏上：共 2 条 Issue 更新（1 开 1 关）、5 条 PR 更新（3 待合并、2 已关闭），无新版本发布。值得关注的是 **#1245（Brave 搜索参数验证）和 #1243（Cron 定时消息上下文保留）已合入主干**，此外有两个新功能 PR（#1244 Fastmail OAuth 修复、#1199 Coder 远程工作区支持）尚在等待合并。社区讨论热度集中在 #1118 的 Kubernetes 沙箱后端功能请求（2 条评论、1 个 👍）上，说明用户对隔离执行环境有真实需求。项目整体保持稳定的迭代节奏，无安全或稳定性回归信号。

---

## 2. 版本发布

**无新版本发布。** 最近一次发布仍需查看仓库 Releases 页面确认。

---

## 3. 项目进展

过去 24 小时合并/关闭了 2 个 PR，均已完成合入：

- **[#1245][已合并] fix(tools): validate Brave search parameters**（作者: rubenssoto）  
  → 针对 Brave 搜索工具的 schema 做了收窄处理：仅当激活搜索提供商为 Brave 时才暴露本地化参数，并统一了国家、搜索语言、UI 语言及 freshness 值的归一化逻辑，不支持的市场会安全回退到 `ALL`。此项修复提升了工具 schema 的准确性和跨提供商兼容性，是工具链质量的重要打磨。

- **[#1243][已合并] fix(cron): preserve delivered channel context**（作者: rubenssoto）  
  → 修复了 Cron 定时消息在 WhatsApp 等渠道投递后，其后续追问丢失上下文的问题。现在 Cron 执行保持隔离，但最终投递的文本会作为助手消息追加到目标会话中，并按精确 channel 解析历史。这对生产环境中的定时任务可靠性是实质性提升。

**待合并的 3 个 PR 也值得关注：**

- **[#1232][待合并] fix(tools): make object schemas OpenAI-safe**（作者: IlyaBizyaev）  
  → 解决 OpenAI 严格工具 schema 下 `additionalProperties=false` 导致 Codex 发送空值/null 的问题。将 webhook patch 字段显式化、MCP 环境变量重写为固定 name/value 条目。如果合入，将显著改善 Codex 与 Moltis 工具的集成体验。

- **[#1244][待合并] Fix Fastmail MCP OAuth scope registration**（作者: penso）  
  → 修复 MCP OAuth 发现时优先使用受保护资源 scope 而非授权服务器更宽泛的 scope 目录，并在 RFC 7591 动态客户端注册中包含选定 scope。附带 Fastmail 回归测试。

- **[#1199][待合并] Add Coder remote workspace sandbox support**（作者: penso）  
  → 新增 Coder 沙箱后端，通过 REST API 创建临时工作区，并通过 reconnecting PTY WebSocket 执行命令。支持模板 ID/名称、presets、rich parameters、TTL、环境别名及自动后端选择。

**整体判断：** 项目正在同时推进工具 schema 规范化（#1245/#1232）、通信渠道可靠性（#1243/#1244）和多后端沙箱生态（#1199），覆盖了稳定性修复和功能扩展两条主线。

---

## 4. 社区热点

**#1118（OPEN）[Feature] Add Kubernetes-native sandbox backend with runtimeClassName support** — 评论 2 条，👍 1  
链接: https://github.com/moltis-org/moltis/issues/1118

这是当前讨论最活跃的 Issue。用户提出为 Moltis agents 增加 `kubernetes` 沙箱后端，通过临时 Pod 执行命令，并支持 `runtimeClassName` 以启用 Kata Containers、gVisor 等 OCI 兼容运行时来实现 VM 级隔离。其核心诉求是**在不信任的 LLM 生成代码执行场景下获得更强的安全边界**。此 Issue 自 6 月 12 日提出至今已有 2 个月，持续获得关注，且与 #1199 Coder 远程工作区 PR 方向一致 — 表明多沙箱后端策略是社区明确期望的演进方向。

---

## 5. Bug 与稳定性

过去 24 小时仅 1 条 Bug 报告，已关闭：

- **[#1224][已关闭] [Bug] Tools stop working in shared Slack channels**（作者: affanshahid）  
  链接: https://github.com/moltis-org/moltis/issues/1224  
  严重程度：中（影响共享 Slack 渠道中的工具可用性）  
  状态：已关闭，未标注修复 PR。建议维护者确认关闭原因（是否已在其他 PR 中修复，或为重复报告）。

无崩溃、数据丢失或安全漏洞类问题报告，整体稳定性良好。

---

## 6. 功能请求与路线图信号

**新增功能请求：**

- **[#1118][OPEN] Kubernetes-native sandbox backend** — 请求通过 Pod + `runtimeClassName` 实现 VM 级隔离的执行环境。目前无对应实现 PR，但结合 #1199 的 Coder 后端，**沙箱后端多样化**已是明确路线图信号。

**可能被纳入下一版本的功能：**

- **#1199 Coder 远程工作区支持** — 已有完整实现 PR 等待合并，若通过将作为第三个沙箱后端（与 Docker、本地/远程等并列）上线。
- **#1244 Fastmail MCP OAuth 修复** — 修复性 PR 通常合并优先级较高，预计近期合入。
- **#1232 OpenAI-safe 工具 schema** — 若 #1245 的 schema 规范化方向被确认，该 PR 有望一并合入，改善与 OpenAI 生态的互操作性。

---

## 7. 用户反馈摘要

从今日活跃的 Issue/PR 中可提炼以下关键用户声音：

- **对沙箱隔离的刚性需求**（#1118）：用户明确表示 Moltis agents 执行不受信任的 LLM 生成代码，需要 Kubernetes 级别的工作负载隔离，且希望支持 Kata/gVisor 等运行时 — 说明当前沙箱方案在安全信心上仍有缺口。
- **共享渠道工具失效的痛点**（#1224）：在共享 Slack 渠道中工具停止工作，影响团队协作场景的稳定性。该 Issue 已关闭但未见明确修复 PR，建议确认是否有遗留问题。
- **开发者的正向贡献**：rubenssoto（#1243/#1245）和 penso（#1199/#1244）两位贡献者持续活跃，提交质量高，说明项目的外部贡献者生态正在形成。

---

## 8. 待处理积压

以下 Issue/PR 长期未获响应或合并，提请维护者关注：

- **[#1118][OPEN] Kubernetes-native sandbox backend**（创建于 2026-06-12，距今 75 天）  
  链接: https://github.com/moltis-org/moltis/issues/1118  
  有 2 条评论、1 个 👍，是社区感兴趣的功能方向，但无维护者回应标记，也无关联 PR。建议至少回应社区并给出初步评审结论。

- **[#1199][OPEN] Coder remote workspace sandbox support**（创建于 2026-08-15，已 11 天）  
  链接: https://github.com/moltis-org/moltis/pull/1199  
  功能已完整实现（CRUD、TTL、PTY WebSocket、自动后端选择），但尚未被 review。若项目有意推进多沙箱战略，此 PR 应是优先级最高的候选。

- **[#1232][OPEN] fix(tools): make object schemas OpenAI-safe**（创建于 2026-08-22，已 4 天）  
  链接: https://github.com/moltis-org/moltis/pull/1232  
  修复 OpenAI 严格 schema 兼容问题，影响 Codex 集成体验，建议尽快评审。

---

**项目健康度评估：**

| 维度 | 状态 | 说明 |
|------|------|------|
| 贡献活跃度 | 🟢 健康 | 24h 内 7 条 Issue/PR 更新，5 位独立贡献者 |
| 代码质量 | 🟢 健康 | 合并的 2 个 PR 均为针对性修复，无回归信号 |
| 生态扩展 | 🟡 关注 | 多沙箱后端请求持续升温，但合入速度需加快 |
| 社区响应 | 🟡 一般 | #1118 积压 75 天无维护者回应 |
| 稳定性 | 🟢 良好 | 无崩溃、安全类问题报告 |

**总结：** Moltis 正在从单点工具向多后端、多渠道的成熟 AI Agent 平台演进，当前处于 "修复期 + 架构扩展期" 并行的阶段。建议维护者优先处理 #1199 和 #1232 的评审，并对 #1118 给出路线图回应，以保持社区信任度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。以下是 CoPaw 项目（github.com/agentscope-ai/CoPaw）在 2026 年 8 月 26 日的项目动态日报。

---

# CoPaw 项目动态日报 - 2026-08-26

## 1. 今日速览

CoPaw 项目今日活跃度极高，社区参与热情高涨。过去24小时内，Issue 和 PR 的更新量均处于高位（共83条），显示出项目正处于密集的开发与迭代周期。值得关注的是，项目今日发布了补丁版本 `v2.1.1-beta.3`，主要涉及前端依赖锁定和文档修正，表明团队在快速响应社区反馈并稳定主线。同时，围绕 **长会话性能、内存泄漏、渠道集成（如微信）** 的 Bug 报告和功能讨论成为今日社区焦点，反映出用户对桌面端和 Web 端体验的稳定性有较高期待。

## 2. 版本发布

*   **v2.1.1-beta.3** ([Release Link](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3))
    *   **更新内容**：这是一个补丁版本，主要包含两项变更：
        1.  `chore(console)`: 将前端依赖 `@agentscope-ai/chat` 锁定到 `1.1.72` 版本，以确保前端构建的稳定性。
        2.  `docs(loop-engineering)`: 修复了文档中 `PluginAPI` 的大小写错误（改为 `PluginApi`）。
    *   **破坏性变更**：无。
    *   **迁移注意事项**：无特殊操作，常规更新即可。

## 3. 项目进展

今日虽然有大量 PR 被合并或关闭，但多数为历史遗留或依赖更新。对项目有明确推进作用的主要包括：

*   **依赖与服务升级**
    *   `chore(deps): bumping version of agentscope to 2.0.7` ([PR #7276](https://github.com/agentscope-ai/QwenPaw/pull/7276))：将核心依赖 AgentScope 升级至 2.0.7，可能包含重要的底层修复或性能改进，是项目跟进上游的关键一步。
*   **开源合规与清理**
    *   多个历史遗留 PR（如 [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773), [#5414](https://github.com/agentscope-ai/QwenPaw/pull/5414), [#1552](https://github.com/agentscope-ai/QwenPaw/pull/1552) 等）被关闭。这些 PR 大多源自外部贡献者，关闭原因可能是长时间未更新或与当前架构冲突，但这有助于维护仓库整洁，但也向社区传递了“外部贡献需要及时跟进维护”的信号。

## 4. 社区热点

今日讨论最活跃的议题集中在功能建议和用户体验上，反映了用户对深度定制和效率工具的渴望。

*   **#338 [Feature]: 建议添加webhook功能** ([Issue Link](https://github.com/agentscope-ai/QwenPaw/issues/338))
    *   **热度**：评论 9 | 👍 1
    *   **诉求**：这是创建于 3 月的旧 Issue，今日仍有更新，说明社区需求持续存在。用户希望 CoPaw 能提供 Webhook 能力，以便与其他软件（如自建系统）集成，实现异步消息通知与任务触发。
*   **#7258 [Bug]: 微信频道的不“显示思考过程”设置无效** ([Issue Link](https://github.com/agentscope-ai/QwenPaw/issues/7258))
    *   **热度**：评论 6
    *   **诉求**：这是一个高频问题。用户在 Web 端设置了“不显示思考过程”，但在微信渠道中该设置未生效，仍会输出推理内容。这反映了不同渠道间的配置同步与逻辑一致性问题，对用户体验影响较大。

## 5. Bug 与稳定性

今日报告的 Bug 中，性能和稳定性问题尤为突出，但多数已有对应讨论或修复 PR。

*   **高严重度**
    *   **内存泄漏与性能降级**：
        *   `#5720 [Bug]: Qwen Paw v1.1.12.post2 内存泄漏反馈` ([Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720))：详细的根因分析指出异步任务和 HTTP 会话未正确清理导致内存持续增长直至进程被杀。该 Issue 于 7 月创建，今日仍被更新，说明问题可能仍未完全解决。
        *   `#7285 [Bug]: 长对话性能降级严重，导致电脑卡顿异常` ([Issue #7285](https://github.com/agentscope-ai/QwenPaw/issues/7285))：新报告，在长对话流式输出时导致整个电脑卡顿，指向前端渲染性能瓶颈。
        *   `#7129 [Bug]: Console 长会话 + 流式输出时浏览器渲染掉帧` ([Issue #7129](https://github.com/agentscope-ai/QwenPaw/issues/7129))：用户已通过内核追踪定位到是浏览器渲染主线程被阻塞，与 #7285 高度相关。
*   **中严重度**
    *   **配置与设置失效**：`#7258` 微信渠道思考过程设置无效。
    *   **文件路径错误**：`#7266 [Bug]: 目标文件夹进行subAgent，找错文件夹` ([Issue #7266](https://github.com/agentscope-ai/QwenPaw/issues/7266))：SubAgent 任务未在指定项目文件夹中查找资料。
*   **低严重度**
    *   **UI/UX 问题**：`#7228` 应用市场已安装应用仍显示“安装”按钮；`#7282` Console Markdown 列表间距过大。
*   **相关修复 PR**
    *   针对 Console 性能和卡顿问题，PR [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) 和 [#7294](https://github.com/agentscope-ai/QwenPaw/pull/7294) 尝试通过拒绝冲突的聊天负载和引入图像像素限制来缓解压力，但尚未合并。

## 6. 功能请求与路线图信号

用户对 CoPaw 的功能期望正从“能用”向“好用、便捷”转变，出现了较多关于用户界面交互和工程化效率的需求。

*   **UI/UX 交互增强**：
    *   `#7279 [Feature]: 模型返回多个选项时，用弹窗点选替代输入`：该请求在高票 Issue #338 的讨论背景下，显得尤为突出，用户希望减少操作步骤。
    *   `#7280 [Feature]: 希望执行完成的后台任务可以自动清除`：用户希望后台任务栏保持整洁。
    *   `#7196 [Feature]: 一直显示推理过程是严重的视觉干扰，希望可以设置默认是否折叠`：该需求可能是 #7258（微信设置无效）的根源之一，用户希望有全局默认折叠推理过程的选项。
*   **平台与集成能力**：
    *   `#7182 [Feature]: Add workspace-scoped Skill preload policy`：用户希望能在工作区级别定义某些 Skill 为“预加载”状态，以减少模型在新会话中的重复发现和调用开销，提升效率。
*   **路线图信号**：
    *   结合 PR [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163)（细化会话思考模式）和 [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279)（交互方式改进），暗示项目团队正在对会话交互和模型行为配置进行深度优化。这些功能极有可能在后续的 beta 版本中与用户见面。

## 7. 用户反馈摘要

*   **Webhook 集成的强烈诉求**：用户 `xiaobai08888` 在 #338 中提出的 Webhook 需求，代表了希望将 CoPaw 更好地融入现有自动化工作流的呼声，而不仅是作为一个独立应用存在。
*   **对性能问题的敏锐感知**：用户 `MCQSJ` (#7285) 和 `ErickCharles` (#7129) 不仅报告了卡顿现象，更通过任务管理器甚至 WPR 内核追踪提供了详尽的性能分析数据。这表明 CoPaw 的部分用户具有较高的技术水平，他们的反馈对定位问题极具价值。
*   **对小细节的在意**：用户 `rerbin` 在 #7228 和 #7256 中连续报告了 UI 文案和状态显示的小问题，如“应用”改名为“市场”不合理、已安装应用悬停状态不对等，这些反馈体现了用户对产品细节的打磨要求很高。

## 8. 待处理积压

以下 Issue 和 PR 长期未得到解决或明确回复，建议维护团队关注，以提升社区健康度。

*   **长期未关闭的 Feature Request**：
    *   `#338 [Feature]: 建议添加webhook功能` ([Issue #338](https://github.com/agentscope-ai/QwenPaw/issues/338))：创建于 3 月，讨论热度一直持续，说明需求真实且强烈，建议官方给予明确回应（如是否纳入路线图）。
*   **关键 Bugs 的修复进展**：
    *   `#5720 [Bug]: Qwen Paw v1.1.12.post2 内存泄漏反馈` ([Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720))：虽然是旧版本问题，但根据用户详细的根因分析，该问题可能在当前版本依然存在，且直接影响服务稳定性，建议重新评估并验证修复状态。
*   **等待合并的重要外部 PR**：
    *   `#7119 fix(security): create the master key file with owner-only permissions` ([PR #7119](https://github.com/agentscope-ai/QwenPaw/pull/7119))：这是一个安全加固的 PR，创建于 8 月中旬，至今仍为待合并状态。安全问题优先级应最高，建议尽快审查并合并。

---
**总结**：CoPaw 项目正处在功能快速迭代与稳定性优化的关键阶段。社区反馈活跃，但**性能瓶颈（尤其是内存管理和长会话渲染）** 是当前最突出的用户痛点，亟需解决。同时，用户对 UI/UX 细节和自动化集成的需求，为项目的下一阶段发展提供了清晰的方向指引。建议维护团队在推进新功能的同时，优先调配资源处理已定位的高优性能问题，并积极回应社区关注度高的功能请求。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

ZeroClaw 过去 24 小时维持高活跃度：共 50 条 Issue 更新（新开/活跃 38 条，关闭 12 条）和 50 条 PR 更新（49 条待合并，1 条已合并/关闭）。今日无新版本发布，但出现了一批集中在安全加固（credentials 缓存、symlink 竞争、HTTP egress 约束）、执行树迭代预算落地和 CI 可移植性修复的 PR，显示项目正在系统性地收口安全面和工程稳定性。多个长期跟踪的 RFC（#6808、#8692）仍在持续推进中，治理层面运行平稳。

*数据来源：[Issues](https://github.com/zeroclaw-labs/zeroclaw/issues) / [PRs](https://github.com/zeroclaw-labs/zeroclaw/pulls)*


## 2. 版本发布

过去 24 小时无新版本发布。

当前版本追踪：v0.8.x 系列处于 0.8.4 阶段，v0.9.0 的 auth/security/gateway 破坏性变更队列正在 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 中协调。


## 3. 项目进展

今日 PR 合并数量有限（1 条），但多项关键 PR 处于活跃推进状态，项目整体健康度向好：

- **执行树迭代预算内核落地**（[#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)）：对应问题 [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) 提出的 `ToolLoop.shared_budget` 长期悬空问题，PR 引入 `runtime_profiles.<name>.max_execution_tree_iterations` 所有权机制，统一约束前台执行树的总迭代次数，阻断代理人递归失控风险。
- **技能系统安全加固系列**：今日 3 个 PR 覆盖 skill 安装路径（symlink race，[#10367](https://github.com/zeroclaw-labs/zeroclaw/pull/10367)）、skill HTTP egress 绑定（[#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369)）以及 Git channel 纳入官方制品（[#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363)），最后一项直接回应 [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) 的社区诉求。
- **Copilot 凭据缓存加固**（[#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370)）：移除基于用户名推导的临时回退路径，拒绝 symlink 或非普通文件缓存条目，提升凭据安全性。
- **Windows 测试 CI 测量**（[#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350)）：以 advisory 模式（不进入 CI Required Gate）先行测量 Windows 测试的选择、耗时和缓存证据，为后续 [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) 的平台矩阵接入做准备。


## 4. 社区热点

- **[#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**（24 评论，Rev. 26）：项目治理层面的核心 RFC，已进入 Ratified/rollout 阶段，持续收到维护者同步和社区反馈。该 RFC 定义了工作路由、看板自动化与标签清理的长期治理框架，是目前项目协同方式的基石。
- **[#8692 Maintainer decision queue for RFCs](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（14 评论）：RFC/设计问题需要维护者决策的活跃队列，反映了项目对 governance 透明度的重视，也是社区观察项目决策节奏的窗口。
- **[#9103 RFC: 分离权威记忆存储与可选增强连接器](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)**（14 评论）：存储/增强架构边界的讨论持续升温，维护者已接管修订。社区对 memory 架构的拆分有较强诉求，核心痛点是当前 `memory.backend` 承担了过多耦合责任。

*其他高讨论条目：*[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)（wire protocol 一等公民，12 评论）、[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)（并行运行时测试夹具加固，9 评论）、[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)（Rust/WASM web UI 评估，9 评论）。社区整体关注点集中在架构边界治理和运行时安全。


## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| S0 | [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) | cron 工具未按属主 agent 隔离，任何 agent 可读写/触发/删除他人任务 | 已接受，in-progress，暂无 fix PR |
| S0 | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | agent cron 间歇性将 workspace_dir 解析为 `/`（**已关闭**） | 已关闭，修复已完成 |
| S1 | [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) | 工具执行失败仅返回 "HTTP 400" 等裸状态码，agent 无法获得详细错误体（新报告） | 新开，已接受，暂无 fix PR |
| S1 | [#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042) | CI MSRV 系统依赖安装可耗尽 20 分钟超时（**已关闭**） | 已关闭，修复已完成 |
| S2 | [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | bounded delegate 将文件系统解析到委托方 workspace | 已接受，无 fix PR |
| S2 | [#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) | cron update --command 在 agent 任务上写未使用列（**已关闭**） | 已关闭 |
| S2 | [#10271](https://github.com/zeroclaw-labs/zeroclaw/issues/10271) | 合并 crate 本地 floor_char_boundary 副本至 std（**已关闭**） | 已关闭 |

**今日新增 bug**：#10357（工具错误细节丢失，S1）；#10362（cron workspace 断言可移植性，已提 fix PR）；#10368（本地 IPC 清理测试不稳定，已提 fix PR）。

**值得警惕**：#9947 无 fix PR 在途，属于跨 agent 越权的安全风险，建议优先介入。


## 6. 功能请求与路线图信号

- **[#10340 有界遥测实验跟踪器](https://github.com/zeroclaw-labs/zeroclaw/issues/10340)**（今日新开）：协调 #9621 接受的 Windows shell-host 研究试点实施。信号：维护者已将遥测试点从 RFC 讨论转入执行阶段，与此前 "bound telemetry" 的治理方向一脉相承。
- **[#10346 RFC: Gateway 和 channels 共享 MCP 注册缓存模式](https://github.com/zeroclaw-labs/zeroclaw/issues/10346)**（今日新开）：单 daemon 进程下，每个 stdio MCP server 在每次启动时被连接三次。该 RFC 提出复用心跳 worker 的 MCP-registry-caching 模式，减少重复 spawn 子进程，属于优化型增强。
- **[#10360 RFC: 面向家庭的可选边缘网格（pull workers + 签名回执）](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)**（今日新开）：跨主机聚合闲置算力。local-first + 安全优先的设计原则与当前路线图高度吻合，但风险等级高（p3），短期内进入主线可能性低。
- **[#10306 TypeScript 类型检查纳入必要 CI](https://github.com/zeroclaw-labs/zeroclaw/issues/10306)**：修复 `web/` 下裸 `tsc -b` 打印 75 条误导性错误的问题。属于工程体验修复，有望随 CI 治理批次合入。
- **[#10297 结构性配置变更后刷新 agent 工具注册表](https://github.com/zeroclaw-labs/zeroclaw/issues/10297)**：避免启用/禁用内置工具需要重启 daemon。与 ZeroCode 体验直接相关，社区反馈较多。

**下一版本可能纳入**：#10351（执行树预算）与 #10369（skill HTTP egress）均以 PR 形式在途且对应问题已 accepted，大概率进入 0.8.x 或 0.9.0 批次；#10363（Git channel 纳入 dist）直接响应社区诉求，合入概率高。


## 7. 用户反馈摘要

- **Git channel 缺失**（[#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138)）：用户 ofotache 报告 Docker 镜像中 Git Channel 未编译，CLI 显示 "Discord ❌ not configured" 等。已有对应 PR [#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363) 修复，反馈得到快速响应。
- **多会话诉求**（[#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)）：网关 Web Chat UI 单会话体验受限，用户 NiuBlibing 提出会话侧边栏（新建/切换/重命名/删除）的完整需求。该 issue 已 in-progress，但没有直接关联 PR，需关注推进节奏。
- **迭代预算悬空**（[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)）：用户 IftekharUddin 点出 `ToolLoop.shared_budget` 在生产环境中全部为 `None`，即限制机制形同虚设。该反馈已获维护者接受，并有 PR #10351 在途闭环。
- **小型本地模型体验受损**（[#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)，已关闭）：ZeroCode Chat 使用 Ollama + llama3.2 时，用户问候语被解读为协议/日志数据。问题已标记 closed 但原因值得后续复盘，社区对本地小模型场景的关注度较高。
- **跨 agent 数据隔离担忧**（[#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947)）：cron 工具未按 agent 授权，多 agent 环境下存在越权风险，用户 wromansky 标记为 S0。


## 8. 待处理积压

| 类别 | 条目 | 持续时间 | 备注 |
|------|------|----------|------|
| PR 长期未合并 | [#8955 fix(telegram): batch media group attachments](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) | 7 月 10 日创建，47 天 | 标记 needs-author-action，XL 规模 |
| PR 长期未合并 | [#9002 fix(gateway): keep agent turns alive after viewer disconnect](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 7 月 11 日创建，46 天 | needs-author-action，XL 规模 |
| PR 长期未合并 | [#9229 fix(runtime): make interactive Ctrl+C state-aware](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) | 7 月 21 日创建，36 天 | needs-author-action，L 规模 |
| PR 长期未合并 | [#9527 ci(rust): bump toolchains to 1.98.0](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) | 7 月 29 日创建，28 天 | needs-author-action，principal contributor 提交 |
| RFC 待决策 | [#8396 RFC: Make wire protocol first-class in provider construction](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 6 月 27 日创建 | 12 条评论，needs-maintainer-review，risk: high |
| Issue 待响应 | [#8132 Evaluate Rust/WASM web UI prototype before React/Vite migration](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | 6 月 22 日创建 | 9 条评论，needs-author-action，跨月未推进 |

**维护者提醒**：多条标记 `needs-author-action` 的 PR（#8955、#9002、#9229）已停滞超过一个月，若作者持续无响应，建议统一执行超时关闭或由维护者接手；[#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（Hailo-Ollama 原生支持）带有 `do-not-merge` 标记且 40 天未动，如无明确合入计划，建议同步状态到 issue tracker 以避免社区误判。


*本日报由自动化分析生成，数据截至 2026-08-26。链接均可直接访问获取最新状态。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*