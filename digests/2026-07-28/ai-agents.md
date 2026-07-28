# OpenClaw 生态日报 2026-07-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-28 02:39 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 OpenClaw 项目数据，我为您生成了 2026 年 7 月 28 日的项目动态日报。

---

## OpenClaw 项目动态日报 | 2026-07-28

### 1. 今日速览

今日 OpenClaw 项目社区活跃度极高。过去 24 小时内，Issues 和 PR 的更新总量均达到 500 条，显示开发与用户反馈均进入高峰期。虽然无新版本发布，但在核心性能修复（内存泄漏、会话状态）、安全增强（密钥遮蔽、文件沙箱）以及平台扩展（Linux/Windows 桌面应用）方面有大量讨论和代码变更。项目当前处于高强度迭代期，社区关注的稳定性问题与长期功能期待并存。

### 2. 版本发布

无。

### 3. 项目进展

过去 24 小时，有 **214 个 Pull Requests** 被合并或关闭，项目在多个核心领域取得了实质性进展。以下为几个关键合并/关闭的 PR 及其影响：

- **会话系统重构**：#113233 [已关闭] 合并了移除文件时代转录运行时的 PR。这是一个大型重构，标志着 OpenClaw 的会话存储彻底从 JSONL 文件转向 SQLite，简化了架构，并可能解决许多与状态一致性相关的问题。
- **稳定性修复**：#114668 [已关闭] 修复了 Microsoft Foundry 提供商中 GPT 部署模型限制错误的问题，防止了因错误上下文窗口限制而导致的过早压缩。
- **清理与维护**：#110065 [已关闭] 修复了 `compaction.enabled` 字段被代码读取但被配置架构拒绝的 Bug，解决了配置验证的漏洞。
- **安全扫描**：#113927 [已关闭] 由 Dependabot 发起的依赖更新 PR，集中更新了 GitHub Actions 相关依赖，以修复潜在的安全漏洞。

### 4. 社区热点

今日社区讨论热度高度集中在**性能、安全与跨平台**三个维度，反映出用户对生产级部署的诉求愈发强烈。

- **🔴 关键性能与稳定性讨论**:
    - **Issue #91588** (评论 21, 👍 1) - **Critical: Gateway Memory Leak**: 这个 P0 级别的 Issue 描述了 Gateway 进程存在严重的、可稳定复现的内存泄漏问题，导致 RSS 从 350MB 增长至 15.5GB 并引发 OOM 崩溃。这是影响生产部署的头号问题，社区关注度极高。
    - **Issue #87109** (评论 9, 👍 1) - **Gateway heap grows**: 另一份关于 macOS 环境下 Gateway 内存持续增长的报告，并指出在内存压力下，Cron 任务会“静默失败”，这加剧了用户对 Gateway 稳定性担忧。

- **🛡️ 安全与信任机制**:
    - **Issue #10659** (评论 15, 👍 4) - **Feature: Masked Secrets**: 用户社区强烈希望增加“蒙版密钥”系统，防止 Agent 直接访问原始 API 密钥，以防范提示注入攻击和意外泄露。这已成为一个共识性需求。
    - **Issue #7722** (评论 10, 👍 4) - **Feature: Filesystem Sandboxing**: 用户提出通过配置文件限制 Agent 的文件系统访问权限，与 #10659 共同构成了构建 Agent 信任边界的两大核心请求。

- **🖥️ 平台覆盖**:
    - **Issue #75** (评论 115, 👍 80) - **Linux/Windows Clawdbot Apps**: 这个自 2026 年 1 月起就备受关注的需求，以绝对的优势（115 条评论，80 个赞）成为社区最渴望的功能之一。用户明确表达了在 Linux 和 Windows 上获得与 macOS 同等桌面端体验的强烈愿望。

### 5. Bug 与稳定性

| 严重程度 | Issue # | 标题 | 状态 | Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | #91588 | Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days | OPEN | 无 |
| **P1** | #113434 | Codex sessions.reset reuses retired session ID; catalog/file scans can exhaust Gateway RAM | OPEN | 无 |
| **P1** | #87109 | Gateway heap grows to 1073MB+ at idle on macOS, cron jobs fail silently | OPEN | 无 |
| **P1** | #102020 | Second message in a session fails with "reply session initialization conflicted" | CLOSED | 已关闭，修复方式需查看PR |
| **P1** | #86519 | Agent repeats identical replies 2-10x on Telegram after 5.20 update | OPEN | 无 |
| **P1** | #113323 | LLM idle timeout aborts agent runs during reasoning-token streaming | OPEN | 无 |
| **P2** | #94846 | Cron isolated session false positive: tool-level error marks run as failed | OPEN | 无 |

- **核心风险**：内存泄漏问题（#91588 和 #87109）是当前最严重的稳定性威胁，它们直接导致 Gateway 进程崩溃或关键任务（Cron）静默失败，亟需修复。
- **回归问题**：Telegram 渠道的回复重复问题 (#86519) 是一个未解决的回归，严重影响用户体验。

### 6. 功能请求与路线图信号

从今日的 Issues 和 PR 来看，以下功能请求正在获得社区和核心维护者的双重关注，有望被纳入下一版本：

- **Agent 信任与安全**:
    - **Masked Secrets (#10659)**: 多个 PR（如 #113330 日志脱敏）表明安全性是当前核心关注点，此特性极有可能被优先处理。
    - **Filesystem Sandboxing (#7722)**: 与 #10659 形成安全体系，是构建可信 Agent 环境的基础需求。
    - **Skill Permission Manifest (#12219)**: 为第三方技能引入权限声明机制，符合“安全第一”的趋势。

- **功能完善与拓展**:
    - **Memory Trust Tagging by Source (#7707)**：通过来源标记内存条目的信任级别，与 #10659 共同组成“防记忆投毒”方案。
    - **Denylist for exec-approvals (#6615)**：补充现有的允许列表，提供更灵活的命令控制策略，需求明确且实用。
    - **Linux/Windows Desktop Apps (#75)**：虽然长期被视为“愿望清单”，但评论数持续增长，若社区贡献或核心团队投入，将是意义重大的里程碑。

### 7. 用户反馈摘要

- **严重痛点**:
    - “Gateway 内存泄漏导致 Cron 任务**静默失败**，没有输出、没有推送、没有错误报告。” (#87109) - 用户最难以接受的是未知的失败。
    - “更新后 Agent 在 Telegram 上重复回复 2-10 次，虽然降级后有所缓解，但**仍未完全修复**。” (#86519) - 稳定性和用户体验受到显著影响。
- **功能期望**:
    - “希望 Agent 能**用** API 密钥，但**不能看到**它，以防止意外泄露。” (#10659) - 对安全性的精细化控制需求迫切。
    - “75 号 Issue 的关注度说明了我们多么渴望在 Linux 和 Windows 上获得原生应用体验。” - 用户对跨平台支持的呼声高涨。
- **使用场景**:
    - “在 Telegram 论坛中，后续消息会过早进入激活运行状态，导致确认/反应/打字状态混乱。” (#101327 PR) - 用户在复杂会话场景下（如论坛、群组）面临着严峻的并发处理问题。

### 8. 待处理积压

以下为长期未响应或处于瓶颈状态的重要 Issue 和 PR，需要维护者重点关注：

- **#75 Linux/Windows Clawdbot Apps** (OPEN, 115 评论): 社区期望最高的功能，至今无明确路线图或负责人。建议核心团队给出官方回应或公开优先级。
- **#113434 Codex sessions.reset 导致 Gateway RAM 耗尽** (OPEN, P1): 对 Beta 版本用户影响严重，且是 Windows 平台的特定问题，需优先排查。
- **#114688 feat(agents): report per-run stats** (OPEN, 等待响应): 一个很有价值的功能，旨在提供更详细的运行报告。虽已提交 PR，但状态不明，需要维护者评估是否合并。
- **#82572 feat(queue): persist followup queues across gateway restarts** (OPEN, 等待作者): 解决一个重要的稳定性问题（队列在重启后丢失），但其状态长期处于“等待作者”，需要跟进。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域开源项目资深技术分析师，以下是根据您提供的2026-07-28各项目动态所生成的横向对比分析报告。

---

## 开源个人AI助手生态横向分析报告 | 2026-07-28

### 1. 生态全景

今日，个人AI助手与自主智能体开源生态呈现出 **“大版本重构后的整合阵痛”与“安全与平台化的集体觉醒”** 并存的态势。一方面，头部项目如OpenClaw、IronClaw正经历高强度迭代，社区在内存泄露、数据一致性等生产级稳定性问题上的讨论异常激烈；另一方面，以ZeroClaw为代表的安全审计风暴和多个项目共同涌现的“沙箱化”、“密钥遮蔽”等需求，标志着整个生态正从“功能竞赛”转向“信任基座”建设。跨平台（特别是Linux/Windows桌面端）支持和Agent互操作性（如MCP协议、ACP服务端）成为社区共识性呼声，生态正从单一工具向平台化演进。

### 2. 各项目活跃度对比

| 项目名称 | 新Issues | 新PRs | 合并/关闭PRs | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+¹ | 500+¹ | 214 | 无 | 高度活跃，迭代密集，P0级内存泄漏需优先解决 |
| **NanoBot** | - | - | 高频 | 无 | 稳定期，大量历史Bug清理，核心架构重构推进中 |
| **Hermes Agent** | 50 | 50 | 20+ | 无 | 高度活跃，受重大Windows启动Bug影响，社区讨论激烈 |
| **PicoClaw** | 5 | 4 | 0 | 无 | 社区贡献活跃但维护者合并滞后，贡献意愿有衰减风险 |
| **NanoClaw** | 0 | 10 | 1 | 无 | 中等活跃，修复与功能开发并行，但PR积压问题严重 |
| **NullClaw** | 0 | 0 | 0 | 无 | **低活跃**，唯一PR(Alpine升级)超40天未合并，接近停滞 |
| **IronClaw** | 38 | 50 | 19 | **v1.0.0** | **极高活跃**，重构发布后关键整合期，线上Bug反馈密集 |
| **LobsterAI** | 9 | 9 | 6 | 无 | 较高活跃，聚焦Bug修复与社区反馈响应迅速 |
| **TinyClaw** | 0 | 0 | 0 | 无 | **无活动** |
| **Moltis** | 0 | 5 | 0 | 无 | 功能开发密集，PR积压，安全加固信号明显 |
| **CoPaw** | - | - | 14 | 无 | **高度活跃**，大量Bug修复与重大功能PR (统一浏览器、第三方Agent) 待合并 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | **无活动** |
| **ZeroClaw** | 50 | 50 | 8 | 无 | **高度活跃但危机中**，面临大规模安全审计风暴与CI瘫痪 |

> ¹ 表示24小时内更新总量，非单纯新增。

### 3. OpenClaw 在生态中的定位

- **优势与定位**: OpenClaw 是功能最全面、社区最成熟的**核心参照系统**之一。其会话系统转向SQLite、微调优化等里程碑式重构，显示了其走在技术前沿的引领地位。社区规模庞大，问题反馈和PR数量远超其他项目。
- **与同类对比**:
    - **vs. IronClaw**: IronClaw 通过彻底重构（v1.0.0 Reborn）实现技术路线的跳跃式革新，旨在解决旧架构的遗留问题，但短期内带来了严重的线上稳定性问题。OpenClaw 则更偏向于渐进式改进，在庞大用户基数下保证可用性。
    - **vs. NanoBot / CoPaw**: NanoBot 和 CoPaw 更侧重于**个人效率助手**和**泛化Agent应用**，生态更偏向于插件/技能市场（如CoPaw的QwenPaw Creator）。OpenClaw则在底层Agent通信协议和运行时可靠性上表现更扎实，适合对稳定性有高要求的开发者。
- **技术路线差异**: OpenClaw 强调**健壮的核心架构**（如严格的会话管理、内存和性能监控），而 IronClaw 和 ZeroClaw 则更侧重于**安全隔离**（如沙箱、WASM插件）和**开放协议**（如ACP、MCP）。
- **社区规模**: OpenClaw、IronClaw 和 CoPaw 属于第一梯队，社区活跃度和问题反馈量级显著。OpenClaw 的长期稳健使其在严肃/企业级用户中拥有更好口碑。

### 4. 共同关注的技术方向

多项目在同一时期涌现了高度相似的需求，以下是几个核心方向：

- **安全与信任 (Sandboxing & Secret Management)**:
    - 涉及项目: **OpenClaw, ZeroClaw, IronClaw, CoPaw, LobsterAI**
    - 具体诉求: 文件系统沙箱（#7722, #8973）、密钥遮蔽（#10659）、执行命令权限清单（#6615, #1170）、日志脱敏（#9386, #9443）。整个生态达成共识：Agent的“不可信假设”必须内建到架构中。
- **跨平台与桌面化 (Linux/Windows Desktop Apps)**:
    - 涉及项目: **OpenClaw, Hermes Agent, CoPaw**
    - 具体诉求: 提供与macOS同等的原生桌面体验（#75, #71226），或特别强调对Windows平台的沙箱与Shell支持（#9182, #6462）。用户对“生产力工具”的跨平台一致性要求极高。
- **协议互通与扩展性 (MCP/ACP)**:
    - 涉及项目: **Moltis, IronClaw, CoPaw, PicoClaw**
    - 具体诉求: 支持Agent Communication Protocol (ACP) 服务端（#1169）、支持自定义MCP服务器（#6727）、支持非标准API协议（#5609）。生态正在构建一套通用的Agent相互发现和调用标准。
- **模型灵活性与成本控制 (Custom Model & Fallback)**:
    - 涉及项目: **NanoBot, LobsterAI, OpenClaw, PicoClaw**
    - 具体诉求: 支持多自定义模型自由切换（#1991）、可配置降级链（#3200）、模型Token受限后的自动切换（#1240）。用户期望在性能和成本之间自由调配AI资源。

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 生产级稳定性、核心Agent性能 | 严肃开发者、企业团队 | 会话存储SQLite化，注重状态一致性与长期运行 |
| **IronClaw** | 彻底重构、安全与用户旅程 | 前沿开发者、重构迁移者 | 全栈重写（v1.0），统一`FailureKind`错误模型，强沙箱 |
| **NanoBot** | 个人效率、轻量化、易上手 | 个人用户、轻度使用者 | 核心架构简化与重构，注重WebUI体验与快速迭代 |
| **CoPaw** | 全能助手、Agent生态、多模态 | 广泛用户、插件开发者 | 统一的Agent动作框架、第三方Agent集成、应用市场 |
| **ZeroClaw** | 安全优先、WASM扩展 | 安全敏感用户、高级开发者 | 基于WASM的内存和工具插件、极致的权限与沙箱模型 |
| **Hermes** | 会话AI、多Profile管理 | 专业用户、多Profile场景 | 关注子进程环境隔离、TUI多Profile管理 |
| **PicoClaw** | 边缘/轻量部署、国际化 | IoT、中国市场、服务端 | 关注systemd托管、TTS集成、国际化，部署场景偏服务化 |
| **LobsterAI** | 本地化、中文生态 | 中文用户、网易生态 | 强化飞书/钉钉等中国IM集成，关注Windows中文路径兼容 |

### 6. 社区热度与成熟度

- **第一梯队 (快速迭代/高风险期)**:
    - **IronClaw**: 重构发布日，Bug反馈峰值，热度最高，但风险也最高。
    - **ZeroClaw**: 安全风暴，社区讨论最激烈，进入危机治理模式。
- **第二梯队 (高强度迭代/功能丰富期)**:
    - **OpenClaw**: 持续的高强度迭代，用户规模稳定，功能完善度高，但需解决P0级Bug。
    - **CoPaw**: 功能急剧扩张中，大量重大PR待合并，下一个大版本潜力巨大。
- **第三梯队 (稳定演进/质量巩固期)**:
    - **NanoBot, Hermes, LobsterAI**: 有明确的修复和功能推进，活跃度中等，项目在高质量修复和稳定迭代中。
- **第四梯队 (潜伏期/寻求模式)**:
    - **PicoClaw, NanoClaw, Moltis**: 社区贡献活跃，但维护者合并效率低，项目发展依赖于维护者的响应速度和决策。
- **停滞/风险项目**:
    - **NullClaw, TinyClaw, ZeptoClaw**: 连续24h/数日无活动，社区贡献动力不足，已基本处于“冻僵”状态，对潜在用户和贡献者吸引力很低。

### 7. 值得关注的趋势信号

1.  **“安全左移”成为共识**: 不再仅停留在API Key加密，而是深入到**权限清单、流程隔离、日志脱敏、运行时沙箱**等每一个环节。对AI Agent开发者的启示是：信任边界应从“信任模型”转向“信任代码”。
2.  **从“聊天机器”到“自律主机”**: Agent的自检、自愈能力（如Error Recoverability）和“文档驱动”的自我配置能力被推向前台 (IronClaw #6284, #6734)。未来的Agent应能感知自身状态和能力边界。
3.  **MCP/ACP协议大战初步成型**: 多个项目开始支持/成为ACP服务端或MCP服务器，这预示着**Agent网络**已从概念走向实践。开发者应开始关注协议兼容性，才能利用更大生态。
4.  **“性能可观测性”成为硬需求**: OpenClaw、ZeroClaw等项目的用户开始主动报告内存泄漏、请求延迟等。**Agent监控和可调试性**的诉求正在快速增长，将成为未来框架的必备能力。
5.  **垂直生态兴起**: 以**CoPaw**为代表的项目开始构建自有的“技能市场”和“应用”，而**OpenClaw**、**IronClaw**则更依赖MCP等开放协议。这反映了平台化和垂直化两条不同的生态建设路径。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的NanoBot GitHub数据生成的2026-07-28项目动态日报。

---

## NanoBot 项目动态日报 | 2026-07-28

### 1. 今日速览

今日项目状态**高度活跃**，主要由**大量历史Issue的清理**和**持续的核心功能重构**驱动。
- **显著清理**：过去24小时内关闭了**63个**历史Issue，表明维护团队正在进行一次大规模的积压问题处理，有效降低了项目维护负债。
- **核心重构**：合并了多个P1优先级的Fix PR（如gitstore hex-of-hex修复、Dream输入完整性保护）及核心代码重构，版本稳定性和内部架构质量得到提升。
- **新功能推进**：WebUI体验优化（模型切换、Dream运行可视化）、LINE渠道支持及扩展平台等新功能正在开发中，项目边界持续拓宽。
- **活跃度评估**：⭐⭐⭐⭐ (4/5) - 社区反馈活跃，核心维护者投入高，项目正从“功能快速迭代”转向“稳定性+平台化”的成熟阶段。

### 2. 版本发布

**无** - 过去24小时无新版本发布。当前最新版本为v0.1.4.post3。

### 3. 项目进展

过去24小时项目在**稳定性修复**、**WebUI体验优化**和**核心架构重构**上取得了明确进展。

- **核心修复与重构**：
    - [PR #5124 (已合并)](https://github.com/HKUDS/nanobot/pull/5124)：修复了`gitstore`中Git对象ID被二次编码的重大回归问题（“hex-of-hex”），保障了内存和存储系统的数据完整性。
    - [PR #5114 (已合并)](https://github.com/HKUDS/nanobot/pull/5114)：修复了Dream功能在组装提示词时可能丢弃对话历史条目的问题，并限定了Dream对文件系统的写入范围，提升了Dream的稳定性与安全性。
    - [PR #5121 (已合并)](https://github.com/HKUDS/nanobot/pull/5121)：修复了WebUI撰写框在输入时因自动滚动导致的屏幕抖动问题，提升了用户交互体验。
    - [PR #5127 (开放)](https://github.com/HKUDS/nanobot/pull/5127)：核心维护者发起了一个重大的核心代码重构PR，旨在移除冗余的运行时脚手架、简化提示词构建逻辑并优化任务追踪，是提升长期可维护性的关键步骤。

- **WebUI与渠道增强**：
    - [PR #5116 (开放)](https://github.com/HKUDS/nanobot/pull/5116)：为WebUI增加了`skills.sh`技能市场浏览和技能管理功能，有望解决用户“安装复杂技能”的痛点。
    - [PR #5115 (开放)](https://github.com/HKUDS/nanobot/pull/5115)：新增了对LINE Messaging API渠道的支持，拓展了项目的用户触达范围。
    - [PR #5077 (已合并)](https://github.com/HKUDS/nanobot/pull/5077)：允许用户在WebUI撰写器中直接切换模型预设，提升了操作便捷性。

### 4. 社区热点

今日社区讨论的热点主要集中在**多自定义模型支持**、**定时任务消息**的交互问题以及**本地模型兼容性**上。

1.  **[#1991] 多自定义模型支持 (9条评论)**：
    - **链接**: [Issue #1991](https://github.com/HKUDS/nanobot/issues/1991)
    - **诉求**: 用户希望NanoBot能够支持多个自定义模型，并能够自由切换，而不仅限于一个“custom”配置。这是一个高频的用户需求，表明用户群体对模型多样性和灵活性的强烈渴望。

2.  **[#3123] 定时任务消息后无法继续对话 (8条评论)**：
    - **链接**: [Issue #3123](https://github.com/HKUDS/nanobot/issues/3123)
    - **诉求**: 用户反馈通过Cron定时任务发送的消息，在发送后无法让用户对消息内容进行后续提问或修正。这暴露了Cron会话与用户对话会话之间的割裂问题，影响了任务的闭环交互体验。

3.  **[#2570] 本地Ollama配置遇到404错误 (7条评论)**：
    - **链接**: [Issue #2570](https://github.com/HKUDS/nanobot/issues/2570)
    - **诉求**: 用户在使用本地Ollama (qwen2.5:0.5b) 时，遇到“404 Page Not Found”错误，且Gateway未能在预期端口监听。反映了本地模型部署时，配置流程、兼容性及文档指引仍存在提升空间。

### 5. Bug 与稳定性

今日报告的Bug修复活动非常密集，以下按严重程度排列：

| 严重程度 | Bug描述 | 状态 | 关联PR |
| :--- | :--- | :--- | :--- |
| **P1 (严重)** | **[#4792] /stop命令导致消息永久丢失**: `cmd_stop`清空待处理队列但未重新发布消息，导致未处理的消息丢失。 | **已关闭** | 无 |
| **P1 (严重)** | **[#4805] suppress(Exception)吞噬工具验证错误**: 工具调用前的验证错误被静默吞掉，导致调试困难。 | **已关闭** | 无 |
| **P1 (严重)** | **`gitstore` 对象ID二次编码**: 已通过PR #5124修复。 | **已合并** | [PR #5124](https://github.com/HKUDS/nanobot/pull/5124) |
| **P1 (回归)** | **[#2549] 跨渠道并发时 `_sent_in_turn` 变量被覆盖**: 一个已知Bug的回滚。 | **已关闭** | 无 |
| **P1 (Bug)** | **[#5120] 会话合并丢弃媒体路径**: 上传文件的路径在会话合并时丢失。 | **开放中** | [PR #5120](https://github.com/HKUDS/nanobot/pull/5120) |
| **P1 (Bug)** | **[#5117] 无效的闲时压缩时间戳**: 持久化的时间戳格式不兼容导致会话压缩异常。 | **开放中** | [PR #5117](https://github.com/HKUDS/nanobot/pull/5117) |

**总结**: 项目核心的存储、会话管理及工具调用链在过去24小时内得到了一次重要的稳定性“体检”，多个关键Bug已被修复或在修复流程中。

### 6. 功能请求与路线图信号

用户提出的新功能请求与当前正在开发的PR有很高的契合度：

- **多自定义模型支持**：用户请求 (#1991) 呼声很高。当前[PR #5077](https://github.com/HKUDS/nanobot/pull/5077)实现了WebUI中“切换预设”，这是更复杂的“多自定义模型”支持的前置步骤或简化版。预计该功能会在后续版本中继续完善。
- **关闭/自定义Memory和Tool**：用户(#1881)提出为低质量模型关闭内存更新或引入Plugin机制。这指向了模型的“轻量化使用”场景。虽然尚无对应PR，但[PR #5098](https://github.com/HKUDS/nanobot/pull/5098)提出的统一扩展平台为该需求提供了技术基础。
- **技能共享与市场**：用户(#1328)抱怨Agent和Gateway间技能不共享。这一痛点正被[PR #5116](https://github.com/HKUDS/nanobot/pull/5116)（WebUI技能市场）和[PR #5098](https://github.com/HKUDS/nanobot/pull/5098)（扩展平台）直接解决，是下一版本的重点功能。
- **LINE渠道支持**：用户(#1672)对WhatsApp渠道有疑问，同时[PR #5115](https://github.com/HKUDS/nanobot/pull/5115)新增了LINE渠道，表明团队在积极对标主流IM平台，扩大渠道生态。

### 7. 用户反馈摘要

- **痛点**：
    - **配置与兼容性**：本地模型（如Ollama, LM Studio）的集成配置仍是主要障碍，尤其是API Key和模型名称的自动映射问题（#2570, #1947, #1478）。
    - **功能限制**：无法自由切换多个模型（#1991）；频道渠道（飞书、Discord）功能不完善，如进度通知缺失（#3166）、斜杠命令冲突（#1315）。
    - **稳定性**：在涉及Cron任务、多并发、通用工具（如Doc转换）时，系统行为不符合预期，导致消息丢失或异常错误（#3123, #2373, #1487, #4792）。

- **满意之处**：
    - 用户对NanoBot的**能力和愿景**持积极态度（#1672“Thanks for this project!”）。
    - 活跃的社区支持，部分用户自发**总结出解决方案**（#1590列出了Ollama连接的三大问题与解决配置）。
    - 项目对**反馈响应迅速**，上述大量Bug在24小时内被处理或有关联PR。

### 8. 待处理积压

以下为今日未关闭的重要Issue/PR，提醒维护者关注：

1.  **[#3166] Feishu channel doesn't show progress notifications** (功能请求)
    - **链接**: [Issue #3166](https://github.com/HKUDS/nanobot/issues/3166)
    - **最后更新**: 2026-04-15
    - **原因**: 该Issue明确指出了飞书渠道（中国用户的重要渠道）功能缺失，已长期未得到直接解决，可能影响该渠道的用户留存。

2.  **[#3559] WebSocket cannot replace webhooks for proactive message delivery** (架构讨论)
    - **链接**: [Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)
    - **最后更新**: 2026-04-30
    - **原因**: 这是一个关于多租户环境下消息投递架构的深度讨论，涉及WebSocket与Webhook的取舍。如果项目计划支持多租户，此Issue的决策结果至关重要。

3.  **[#1315] Slash commands not supported for Discord** (Bug)
    - **链接**: [Issue #1315](https://github.com/HKUDS/nanobot/issues/1315)
    - **最后更新**: 2026-07-27
    - **原因**: 该Issue在今日被关闭，但原始问题(Discord原生斜杠命令冲突)可能未在代码层面完全解决。建议确认关闭理由是否为“暂时不处理”或“无法复现”，并关闭状态是否合理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，这是为您生成的 Hermes Agent 项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-07-28

## 1. 今日速览

今日项目活跃度极高，24小时内产生了50条Issue和50条PR，社区互动频繁。Windows桌面端启动失败 (`#71226`) 是当天最受关注的阻塞性Bug，引发了社区热烈讨论。同时，针对多用户隔离、配置参数可配置性、以及流式体验优化等长期诉求的讨论仍在持续升温。项目维护者也在积极处理PR，提交了多项关键修复，包括子进程环境隔离和多类会话状态与安全边界问题的修补。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

尽管没有新版本发布，但今日有14个PR被合并或关闭，推动了多项重要改进。以下是今日合入的关键PR：

- **`#73053` [已关闭]** 撤销了一项关于集成 NeMo Relay 运行时和共享指标的实验性功能。这是一次“回滚”操作，表明该功能可能遇到了未预见到的问题或需要进行重新设计。
- **`#73045` [已关闭]** 修复了 TUI 输入框的一个问题，现在 `@/foo` 和 `@foo` 在搜索时效果一致。这修复了用户在命令前习惯性添加“/”导致搜索失败的问题，提升了用户体验。

此外，多个处于开放状态且获得积极更新的 PR（如 `#73051`、`#73052`）表明维护者正在积极解决关键的会话状态和消息投递问题。

## 4. 社区热点

本周最受关注的议题聚焦于核心可用性和用户配置体验，反映出社区对基础稳定性与个性化需求的高度重视。

1.  **Windows 桌面端启动循环 (#71226)**
    - **链接**: [NousResearch/hermes-agent Issue #71226](https://github.com/NousResearch/hermes-agent/issues/71226)
    - **热度**: 10条评论，1个点赞。
    - **诉求**: 用户 `mysoul12138` 报告在Windows 11上，更新后桌面应用陷入“WebSocket连接-客户端断开-重置”的死循环，导致无法使用。这是当天最严重的影响使用的Bug，社区用户急切等待解决方案。

2.  **可配置推理温度参数 (#17565)**
    - **链接**: [NousResearch/hermes-agent Issue #17565](https://github.com/NousResearch/hermes-agent/issues/17565)
    - **热度**: 7条评论，12个点赞。
    - **诉求**: 这是社区呼声最高的功能请求之一，希望通过用户配置来控制模型推理的 `temperature` 参数，以解决硬编码导致的幻觉问题。12个赞反映了这是广泛用户的普遍痛点。

## 5. Bug 与稳定性

今日提交的Bug覆盖了从客户端崩溃到服务端配置错误的各个层面。按严重程度排列如下：

- **严重 (Critical)**:
    - **Windows 客户端启动循环 (`#71226`)**: 新Bug，最严重影响，已引发广泛讨论，当前无关联的修复PR。
    - **子进程环境隔离问题 (`#73051`)**: 已有关联 `fix PR`。此PR旨在修复Kanban工作线程继承错误的 `TERMINAL_*` 配置问题（`#66541`），直接影响多Profile部署的稳定性和安全边界。

- **中高 (High / Medium)**:
    - **Honcho依赖安装失败 (`#72981`)**: 在Managed Cloud环境中，安装Honcho内存提供者时出现权限拒绝问题。
    - **HTTP MCP工具在Cron会话中缺失 (`#65889`)**: 将影响依赖于HTTP协议MCP服务器的自动化任务。
    - **`context-usage` 状态栏项显示死锁 (`#73042`)**: 已关闭。该状态栏项因默认隐藏且无法通过菜单恢复，导致用户无法查看用量信息。

- **低 (Low / Minor)**:
    - **`hermes-agent --version` 启动 Agent 执行 (`#54648`)**: Windows打包脚本问题，导致获取版本信息时误启动Agent。
    - **TUI中IME中文输入错误 (`#39195`, `#40146`)**: 影响CJK用户在TUI和桌面端的输入体验。

## 6. 功能请求与路线图信号

- **高优先级呼声**: 可配置 `temperature` (`#17565`) 和多用户 `USER.md` 隔离 (`#27182`) 的呼声最高。鉴于已有相关功能请求，这些很可能被纳入下一版本的考虑范围。
- **版本信号**: 与 `config.yaml` 直接相关的配置项（如 `#64298` PR 旨在直接从配置读取 `max_iterations`）有多个PR推进，表明项目可能正在向更强大的yaml配置系统迁移。
- **风险信号**: 基于今日被回滚的 `NeMo Relay` 集成 (`#67607`)，该功能可能暂时不会出现在后续版本中，除非有重大设计变更。

## 7. 用户反馈摘要

- **痛点**: 用户在Windows平台上的体验问题最为突出，包括应用启动失败 (`#71226`) 和命令行工具行为异常 (`#54648`)。CJK用户对TUI中的IME支持表示强烈不满 (`#39195`)，认为这会严重影响其工作流。
- **使用场景**: 用户尝试使用`delegate_task`进行子代理协作，但其成本未能持久化到数据库 (`#32220`)，导致审计和计费不准，这对企业级用户是严重痛点。
- **功能缺失**: 社区渴望更细粒度的控制，如模型参数 (`#17565`)、推理过程面板的显示行为 (`#53617`)，以及对多用户、多平台部署的更好支持（如WSL与Win之间的Profile导入 `#51364`）。

## 8. 待处理积压

以下为一些关键但尚未得到充分回应的Issue，提醒维护者关注：

- **`#14061` [WeCom] 超时导致重复消息**: 已开放超过3个月，涉及消息投递的可靠性，对使用WeCom的用户体验影响较大。
    - **链接**: [NousResearch/hermes-agent Issue #14061](https://github.com/NousResearch/hermes-agent/issues/14061)
- **`#2045` 延迟加载技能**: 长期存在的性能改进请求。随着技能数量的增加，此问题对启动速度和token消耗的影响将愈发明显。
    - **链接**: [NousResearch/hermes-agent Issue #2045](https://github.com/NousResearch/hermes-agent/issues/2045)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-07-28

## 1. 今日速览

- **总览**: 过去24小时内，项目共有5条新Issue和4条新PR，均为活跃状态，无任何新增关闭/合并项，也无新版本发布。
- **活跃度评估**: 社区提案热情较高（5个新Issue、4个新PR），但维护侧响应和合并节奏明显偏慢（0合并/关闭）。多数组件（WebUI、MCP连接、TTS、本地化）均有社区贡献者提交代码，但整体推进受阻于合并队列积压。项目处于“社区贡献密集、维护侧审核滞后”的状态。

## 2. 版本发布

**无新版本发布。**

## 3. 项目进展

**今日无任何PR被合并或关闭。**

所有PR仍处于待合并状态，包括：
- **#3273**: 添加日语本地化（已发布8天）
- **#3271**: 更新9家AI提供商的默认模型列表（已发布8天）
- **#3270**: 添加DashScope TTS及微信音频发送（已发布8天）
- **#3200**: 可配置默认模型降级链（已发布27天）

**当前状态**: 项目向前推进速度为0，核心维护者需尽快审核并合并上述25天以上的“老化”PR，否则社区贡献意愿可能衰减。

## 4. 社区热点

今日无讨论特别活跃或高评论热度的Issue/PR。所有新增的Issue/PR均仅有1条初始评论，无明显争论或广泛参与。以下为值得关注的提案：

- **#3276 (Feature)**: 针对systemd托管环境，提出Launcher不应强占Gateway生命周期。背后诉求是专业运维场景（VM部署、自启守护）下的可管理性，表明PicoClaw正在从个人桌面场景向生产级/服务端部署演进。  
  [链接](https://github.com/sipeed/picoclaw/issues/3276)

## 5. Bug 与稳定性

| 严重程度 | Issue 编号 | 描述 | 是否有 fix PR |
|----------|------------|------|---------------|
| 🔴 严重 | #3269 | **MCP 服务器连接失败导致 Agent 循环挂起，Chat 界面完全停止响应** — 直接影响用户体验，恢复手段无 | 无 |
| 🟡 中等 | #3268 | `exec` 工具 `action` 参数不应为必填项，AI Agent 调用时若 LLM 缺失该参数将直接失败 | 无 |
| 🟡 中等 | #3281 | Web UI 在会话历史较长时，输入框严重卡顿（卡顿延迟随历史长度增加） | 无 |

**分析**: 三大Bug均涉及核心交互路径（Agent执行、Chat UI、MCP通信）。其中 #3269 和 #3281 属于影响广泛的“中断性”Bug，若无修复PR，应尽快标注为P0/P1级别。

## 6. 功能请求与路线图信号

- **本地化扩展**: #3272（日语）+ #3273（日语翻译PR）。表明社区对国际化有强烈需求，可能纳入0.4.x版本。
- **server/headless部署优化**: #3276（systemd支持）。迹象显示项目正在向“服务器端部署”演进，可能与内部路线图一致。
- **模型降级链可配置**: #3200（已开放27天）。这是一个高价值的企业级功能（AI fallback），若合并将显著提升稳定性。
- **TTS/音频集成**: #3270（DashScope TTS + 微信音频发送）。适配中国市场与语音交互场景，可能与Agent语音接口路线图相关。

**结论**: 未来几个版本可能重点提升**国际化+生产部署+AI fallback+语音能力**。所有相关PR均未合入，需催促进度。

## 7. 用户反馈摘要

| Issue | 用户痛点 | 使用场景 |
|-------|----------|----------|
| #3276 | Launcher 不允许外部管理Gateway，导致 systemd 管理下冲突 | 头端无GUI的Ubuntu VM，用户期望全自动守护启动 |
| #3269 | MCP 断连后整个Chat入口无反应，只能重开 | 接入第三方MCP工具时网络不稳定的高频场景 |
| #3281 | 对话轮数较多时输入卡顿 | 大模型多轮对话深度使用场景，严重影响写作和编辑体验 |
| #3268 | LLM调用Exec工具时因缺少默认`action`导致随机失败 | AI Agent编写脚本/执行命令的自动化流程 |

**总体情绪**: 用户对`exec`默认值、MCP恢复策略、WebUI性能长尾问题普遍反映“影响日常使用”，期待快速修复；但对新功能（日语本地化、TTS）持欢迎态度。

## 8. 待处理积压

以下为长期未合并/未响应的关键 Issue 或 PR，需维护者重点跟进：

- **PR #3200** — 可配置默认模型降级链（创建: 2026-07-01，已27天未合并）  
  [链接](https://github.com/sipeed/picoclaw/pull/3200)

- **PR #3271** — 更新9家AI提供商默认模型列表（8天，无review）  
  [链接](https://github.com/sipeed/picoclaw/pull/3271)

- **PR #3273** — 日语WebUI本地化（8天，无review）  
  [链接](https://github.com/sipeed/picoclaw/pull/3273)

- **Issue #3269** — MCP断连导致Chat挂起（8天，无fix PR）  
  [链接](https://github.com/sipeed/picoclaw/issues/3269)

**提醒**: 超过1周的PR/Issue若继续停滞，可能导致社区贡献者转向其它项目。建议维护者本周内安排Code Review轮次。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 GitHub 数据生成的 NanoClaw 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-07-28

## 1. 今日速览

今日项目整体活跃度**中等偏上**。虽然无新 Issues 产生，但 Pull Requests (PR) 活跃度较高，共有 10 条更新。其中，信号 (Signal) 通道的 Bug 修复（#3142）和 Webhook 可配置化的新功能（#3144）是今日的亮点。此外，积压的 9 个待合并 PR 表明社区贡献正在稳定积累，但合并效率有待提升。核心团队在修复系统一致性和控制面暴露（#3137）上也有重要进展，显示出项目在稳定性和可扩展性方面的持续投入。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日仅有 1 个 PR 被合并/关闭，其余 9 个仍处于开放状态。具体进展如下：

-   **已关闭：**
    -   [#2598 [已关闭] [PR: Fix] fix: load per-group CLAUDE.local.md by adding 'local' to settingSources](https://github.com/nanocoai/nanoclaw/pull/2598)：该 PR 修复了按组加载 `CLAUDE.local.md` 配置的问题，通过将 `'local'` 添加到 `settingSources` 实现。经过两个多月的开发，该修复最终被合并，解决了多租户/多团队配置隔离的一个重要痛点。

-   **待合并（关键条目）：**
    -   **[#3137 [开放] [core-team] Fix engagement consistency and expose self-serve wiring controls](https://github.com/nanocoai/nanoclaw/pull/3137)**：这是一个重要的核心团队 PR，旨在修复代理交互一致性，并允许群组级代理检查和管理其“wiring”配置。这表明项目正朝着更灵活、更可控的代理自服务方向迈进。
    -   **[#3144 [开放] feat(webhook): configurable bind address via WEBHOOK_HOST](https://github.com/nanocoai/nanoclaw/pull/3144)**：新增 `WEBHOOK_HOST` 环境变量，使 Webhook 服务器可绑定到特定地址而非所有接口（`0.0.0.0`），增强了部署安全和灵活性。
    -   **[#3143 [开放] [PR: Fix, core-team] Preserve resolved approval card content](https://github.com/nanocoai/nanoclaw/pull/3143)**：核心团队修复了一个 UI/UX 问题，确保已解决的审批卡片内容（标题、详情、决策者）得以保留，提升了审批流程的审计和回溯能力。

**总结：** 项目今日在“修复系统一致性”、“提升部署安全性”和“改善用户审批体验”三个维度上均有实际代码产出，整体推进平稳。

## 4. 社区热点

今日无单一 PR/Issue 引发大量讨论（评论数均为 `undefined`），但以下 PR 代表了社区的主要关注方向：

-   **通道兼容性与修复：** 两个关于 **Signal** 通道的 PR 获得关注：
    -   [#3142 fix(signal): forward image/file attachments...](https://github.com/nanocoai/nanoclaw/pull/3142) 修复了文件附件路径错误，导致代理无法读取的问题。
    -   [#2685 docs(signal): group typing, outbound reactions...](https://github.com/nanocoai/nanoclaw/pull/2685) 更新了 Signal 通道的文档，描述了群组打字指示器、外发反应等功能。

**诉求分析：** 社区对**多通道的健壮性和功能完整性**有较高需求。Signal 通道作为关键通信渠道，其附件处理 bug 是阻碍用户实际使用的硬伤，因此修复 PR 受到密切关注。文档更新也反映了用户希望全面了解和掌握通道能力的渴望。

## 5. Bug 与稳定性

今日报告的 Bug 修复集中于以下几个方面，按严重程度排列如下：

-   **严重：**
    -   **[Signal 通道附件路径错误]** 由 PR [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) 修复：Signal 附件路径未挂载到代理容器，导致代理无法读取图片、PDF 等非文本附件。这将导致对附加文件内容的分析完全失效。**有修复 PR，待合并。**

-   **中等：**
    -   **[审批卡片内容丢失]** 由 PR [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) 修复：已解决的审批卡片会丢失原始请求详情和决策者信息，影响审计链路。**有修复 PR，待合并。**
    -   **[Slash 命令误解析]** 由 PR [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) 修复：未知的 `/` 命令被错误地归类为 `passthrough`，导致响应被静默丢弃。这是一个存在已久的逻辑错误。**有修复 PR，待合并。**

-   **轻微：**
    -   **[配置加载错误]** 由已关闭的 PR [#2598](https://github.com/nanocoai/nanoclaw/pull/2598) 解决：修复了各组未能正确加载其特定的 `CLAUDE.local.md` 配置的问题。**已于今日合并。**

## 6. 功能请求与路线图信号

PR 是功能请求最直接的实现形式。以下 PR 揭示了可能被纳入下个版本的新功能/特性：

-   **更高**：
    -   **[Webhook 绑定地址可配置] (PR #3144)：** 这是一个呼声很高且实现成本较低的部署优化，预计会很快合并到下一版本。
    -   **[增加 Dial 通道支持] (PR #3050)：** 这是一项较大的功能开发，为项目增加了新的聊天集成通道。若被接受，将是重要的版本亮点。
    -   **[改善代理自服务] (PR #3137)：** 允许群组代理自检和管理配置，是赋予用户更大自主权的关键路线图信号，可能成为 v0.x 的核心特性。

-   **中等**：
    -   **[支持 NCC 工具用于主机运维] (PR #2971)：** 增加一个独立的运维 CLI 工具，提升管理员用户体验。
    -   **[容器技能选择兼容性] (PR #3141)：** 修复了 `container.json` 中技能选择对 `CLAUDE.md` 片段的影响，属于一项关键的兼容性修复和内部逻辑改进。

## 7. 用户反馈摘要

由于今日无新 Issue 和 PR 评论数据，反馈分析主要基于 PR 内容本身：

-   **用户痛点：** 部署配置僵化（Webhook 只能绑定 0.0.0.0）、通道附件不可用（Signal 附件无法被读取）、审批流程信息丢失。这些“硬伤”是用户在实际使用中最直接、最痛苦的反馈。
-   **使用场景：** 用户正在将 NanoClaw 部署到生产环境，并使用 Signal 通道进行文件协作（如团队聊天中的 PDF 文档分享）、多团队管理下的配置隔离。
-   **满意点：** 核心团队针对审批流程（#3143）和群组配置（#2598）的快速响应，体现了对用户体验的重视。社区贡献者（如 jonnychesthair-crypto）的持续活跃，说明其贡献流程和开发者体验对开发者是有吸引力的。

## 8. 待处理积压

以下重要 PR 长期未合并，建议维护者关注：

-   **严重积压（超过30天）**：
    -   [#2346 fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346)（创建于 2026-05-08，已积压 81 天）：修复用户输入被静默丢弃的严重逻辑错误。
    -   [#2685 docs(signal): group typing, outbound reactions, quote-reply fix](https://github.com/nanocoai/nanoclaw/pull/2685)（创建于 2026-06-04，已积压 54 天）：为 Signal 通道增加关键功能文档，影响用户对新功能的采纳。
    -   [#2598 [已关闭] fix: load per-group CLAUDE.local.md...](https://github.com/nanocoai/nanoclaw/pull/2598) 虽于今日合并，但其从 5 月 23 日创建到合并，历时 66 天，暴露了 PR 积压问题。

-   **中等积压（超过14天）**：
    -   [#2971 Add ncc utility skill: host operational and health CLI](https://github.com/nanocoai/nanoclaw/pull/2971)（创建于 2026-07-07，已积压 21 天）：一个对运维很有帮助的独立工具。
    -   [#3050 feat(setup): add Dial to the channel picker...](https://github.com/nanocoai/nanoclaw/pull/3050)（创建于 2026-07-14，已积压 14 天）：一项较大的新通道集成功能。

**建议：** 对已积压超过 30 日的 Bug 修复 PR（如 #2346），应优先评估、测试并合并，以避免社区贡献者因长期等待而产生挫败感。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，这是为您生成的 NullClaw 项目 2026年7月28日 日报。

---

# NullClaw 项目动态日报 | 2026-07-28

## 1. 今日速览

- **活跃度评估：低**。在过去24小时内，项目未产生任何新的 Issues 或 PR，也未有新版本发布。唯一的公开活动是一项由自动化工具发起的依赖升级 PR。
- 项目维护活动几乎陷入停滞状态，社区互动极少。当前唯一的活跃 PR #956 已存在超过一个月仍未合并，表明维护者可能未进行日常审阅。
- 尽管长期来看项目处于静默期，但自动化依赖管理工具（Dependabot）仍在运行，提示项目具备基本的运维自动化能力。
- 对于潜在贡献者或用户而言，当前是一个观察期，需关注项目维护者是否会处理积压的 PR。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日没有已合并或已关闭的 PR。项目整体进度处于相对停滞状态。

## 4. 社区热点

由于过去24小时内无新增议题或评论，当前社区关注的焦点是唯一的活跃 PR。

- **PR #956: [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**
  - **链接:** [nullclaw/nullclaw PR #956](nullclaw/nullclaw%20PR%20#956)
  - **状态:** 打开（自2026-06-15起），待合并。
  - **分析:** 该 PR 由 Dependabot 发起，旨在将 Docker 镜像中的基础系统 Alpine Linux 从版本 3.23 升级至 3.24。这通常是为了修复安全漏洞或获取新功能。该 PR 已滞留超过40天未处理，这可能是社区唯一关注的事项，因为它关系到项目基础镜像的安全性与合规性。

## 5. Bug 与稳定性

今日无新增 Bug 报告。项目稳定性动态暂无变化。

## 6. 功能请求与路线图信号

今日无新增功能请求。从现有数据来看，没有明确的迹象表明有新的功能正在被规划或即将被纳入下一版本。

## 7. 用户反馈摘要

今日无用户反馈。从PR #956的长期未处理状态可以推断，社区可能对项目维护的时效性存在潜在的不满或担忧。

## 8. 待处理积压

- **PR #956: [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**
  - **链接:** [nullclaw/nullclaw PR #956](nullclaw/nullclaw%20PR%20#956)
  - **现状:** 打开超过1个月，无人审核。
  - **优先级:** 高。
  - **提醒:** 作为唯一的活跃 PR，且涉及基础镜像的安全更新，建议维护者尽快审阅并合并。如果存在冲突或测试问题，请及时回复并关闭或处理该 PR，以避免增加后续升级的难度和安全风险。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 IronClaw 项目数据，为您生成 2026 年 7 月 28 日的项目动态日报。

---

## IronClaw 项目动态日报 — 2026-07-28

### 1. 今日速览

项目今日活跃度极高，标志着 **v1.0.0 (Reborn) 重构版** 正式发布后的关键整合期。过去 24 小时内，共有 38 个 Issue 和 50 个 PR 被更新，核心贡献者与社区成员围绕稳定性、迁移路径和新架构进行了大量密集的协作工作。一方面，v1.0.0 版本发布带来了一次全栈重构，另一方面，针对新版本的 bug 反馈和功能补全正在快速进行。整体来看，项目正处于从“大版本发布”到“生产级稳定性”过渡的活跃状态，但新开 Issue 与 PR 数量均高于合并/关闭数量，意味着维护者的审查和合并压力较大。

### 2. 版本发布

- **`ironclaw-v1.0.0` (1.0.0)**
  - **发布日期**: 2026-07-27
  - **摘要**: 这是 IronClaw 架构重构后的首个稳定版本，并非基于 0.29.x 系列的增量更新，而是对 Agent 运行时、存储、扩展宿主和 Web UI 的 **彻底重写**。
  - **关键变化**:
    - **新二进制**: `ironclaw` CLI 现在是重构后的新架构入口。
    - **旧版支持**: 早期的单体架构构建为 `ironclaw-legacy` 二进制提供。
  - **破坏性变更 & 迁移注意事项**: 该版本是“从零重建”，因此任何基于旧版 (0.29.x 及之前) 的配置、插件或工作流都可能不兼容。用户需要参考新的 `ironclaw-legacy` 二进制或迁移指南进行平滑过渡。具体迁移路径由 **Issue #6725** 追踪。

### 3. 项目进展

今日合并/关闭的 PR (19 个) 主要集中在 **v1.0.0 发布后的修复、文档清理和核心架构收尾** 上。

- **文档与安全修复**:
  - **PR #6692** (已合并/关闭): 核心贡献者 `thisisjoshford` 重构了文档站点，修正了内部工程文档被公开提供的问题 (33 个内部路径可访问)，并进行了安全审计。
- **核心架构重构**:
  - **PR #6684** (已合并/关闭): 核心贡献者 `serrrfirat` 将五个重叠的失败种类枚举统一为单一的 `FailureKind`，这是迈向“100% 错误恢复”目标（#6284）的关键一步，同时修复了 6 个回归错误。
  - **PR #6723** (已合并/关闭): `henrypark133` 为沙箱凭证防火墙添加了基础组件（证书颁发机构+义务暂存），为未来更安全的插件执行环境奠定基础。
- **依赖更新**: 多个依赖更新 PR 被合并，确保项目跟上生态安全与稳定性要求。

这些进展表明项目正在快速清理 v1.0.0 发布后的技术债务，并夯实核心架构。

### 4. 社区热点

- **[Issue #6284] [EPIC] error-recoverability endgame** (14 条评论)
  - **链接**: [Issue #6284](https://github.com/nearai/ironclaw/issues/6284)
  - **热度分析**: 这是社区对项目**可靠性**的终极期待。该 Issue 提出了一个极其严格的错误恢复契约，要求 100% 的运行中错误都能被模型感知并有机会处理。它获得了 14 条评论，是所有讨论中最高的，反映了社区对 Agent 在生产环境中自主运行、避免因意外错误而崩溃的核心诉求。该 Issue 也是 PR #6684 和 #6697 的直接目标，显示了维护者正在积极回应此诉求。

- **[Issue #6524] [Epic] 封闭能力和旅程测试平台**
  - **链接**: [Issue #6524](https://github.com/nearai/ironclaw/issues/6524)
  - **热度分析**: 社区对**测试质量和测试确定性**的呼声很高。这个 Epic 提出了一个经典问题：“是否每个受支持的能力和关键用户旅程都有确定性且有意义的覆盖？” 这反映了随着 Agent 功能日益复杂，社区对回归测试、冒烟测试和端到端测试体系完善的迫切需求。该 Issue 是多个子任务（如 #6525, #6728）的父级，表明测试是 v1.0.0 之后团队工作的重点方向之一。

### 5. Bug 与稳定性

**高优先级 Bug** (bug_bash_P1):
- **[Issue #6720] 任务无限运行且停止按钮失效** (P1)
  - **链接**: [Issue #6720](https://github.com/nearai/ironclaw/issues/6720)
  - **描述**: 在 Railway 测试实例上，任务运行超过 15 分钟无法结束，UI 上的停止按钮失效。这是一个严重的稳定性问题，直接导致用户无法控制 Agent。
  - **状态**: 无关联 PR。

**v1-launch-checklist 线上稳定性 Bug**:
- **[Issue #6581] 429 Too Many Requests 导致 WebChat 断连**：
  - **链接**: [Issue #6581](https://github.com/nearai/ironclaw/issues/6581)
  - **描述**: 在多线程使用下，WebChat v2 的实时更新通道返回 429 错误，导致用户频繁卡在“断连/重连”状态。
- **[Issue #6719] 后端错误后对话历史加载失败**：
  - **链接**: [Issue #6719](https://github.com/nearai/ironclaw/issues/6719)
  - **描述**: 在 503 错误和 CSP 违规后，对话历史无法加载，UI 陷入部分损坏状态。
- **[Issue #6718] 流式传输仅能在切换页面后恢复**：
  - **链接**: [Issue #6718](https://github.com/nearai/ironclaw/issues/6718)
  - **描述**: 当连接状态卡在“Reconnecting”时，Agent 的实时更新（流式输出）无法工作，直到用户手动切换页面。

**已知 Bug 修复**:
- **[Issue #4548] DeepSeek API 重复 model 字段导致 400 错误** (已关闭)
  - **链接**: [Issue #4548](https://github.com/nearai/ironclaw/issues/4548)
  - **状态**: 此问题已在 v1.0.0 版本中被解决。
- **[Issue #6060] Routine 消息投递目标全局泄露** (已关闭)
  - **链接**: [Issue #6060](https://github.com/nearai/ironclaw/issues/6060)
  - **状态**: 此问题已在 v1.0.0 版本中被解决。

**总结**: 新版本发布后，线上环境的 WebUI 和流式传输稳定性是当前最紧急的问题。同时，核心的 Agent 运行时控制（停止任务）也存在重大缺陷。

### 6. 功能请求与路线图信号

根据今日的 Issues 和 PR 分析，以下功能请求已明确被提上日程：

- **Agent 自主配置**:
  - **[Issue #6734] 让 Agent 能访问自身文档**: 要求 Agent 能够读取官方文档，从而引导用户配置工具和渠道，而不是“胡诌”。这表明社区希望 Agent 能成为自己的“管理员”。
  - **逻辑判断**: 结合 **[Issue #6522] 缺少 Telegram 本地设置指引** 和 **[Issue #6717]**、**[#6716] Agent 在 Telegram/Slack 集成上给出错误反馈**，这三个 Issue 共同指向一个核心问题：Agent 的自我认知和能力边界不清晰，无法准确地向用户解释自身功能。围绕 Agent 的 **“文档驱动”** 或 **“自省”** 能力将成为下阶段用户体验优化的关键。

- **平台化和生态化**:
  - **[Issue #6731] 集成 IronHub (工具市场)**: 将 Agent 的工具集从固定的、编译时的列表变为可扩展的运行时市场，这是走向平台化的关键一步。
  - **[Issue #6727] 支持连接自定义 MCP 服务器**: 允许用户接入任意外部 MCP 服务器，极大地提升了项目的灵活性和生态兼容性。这显示了项目向开放生态发展的野心。
  - **逻辑判断**: 这两个 Epic 都创建于 2026-07-27，紧跟着 v1.0.0 的发布，表明核心团队在稳定核心后，立即将目光投向了外部生态的扩展。

### 7. 用户反馈摘要

从近期 Issue 评论和描述中，我们可以提炼出几个核心的用户感受：

- **痛点**: “Agent 对自己的能力不清楚。”
  - **场景**: 用户配置 Telegram 后，Agent 仍在提示他去“寻找一个面板并连接”，证明 Agent 无法感知状态的变更。
  - **直接引用**: “The model incorrectly states that Slack is unavailable, not installed...” (Issue #6716)
  - **不满意点**: Agent 在无法确定时，不是承认不确定性，而是“幻想”一个错误的答案，这降低了用户的信任感。

- **痛点**: “WebUI 太脆弱了。”
  - **场景**: 正常的多线程聊天会触发 429 限流并导致断连；后端服务稍有波动就无法加载历史记录；流式输出时断时续。
  - **不满意点**: 对于个人助手，持续稳定的实时交互是基础。当前的 WebUI 稳定性严重影响了用户体验。

- **需求**: “我们想要一个可靠、自给自足的 Agent。”
  - **场景**: 用户希望 Agent 能够从所有错误场景中恢复 (#6284)，能够自主查找文档来回答问题 (#6734)，并且在扩展功能时不需要自己退出应用去反馈问题 (#6743)。
  - **深层诉求**: 用户希望 IronClaw 是一个可以信赖的长期运行的自主系统，而不是一个需要时刻监控和手动辅助的程序。

### 8. 待处理积压

以下 Issue 和 PR 长期未得到有效响应或处于停滞状态，可能成为项目健康度的隐患：

- **[Issue #6575] `systemd` 服务启动失败 (Ubuntu)**
  - **链接**: [Issue #6575](https://github.com/nearai/ironclaw/issues/6575)
  - **状态**: 已关闭。虽然是 bug 报告，但关闭可能意味着已在特定版本修复或非重现。需关注是否有后续同类问题出现。
- **[Issue #5598] chore: release PR**
  - **链接**: [PR #5598](https://github.com/nearai/ironclaw/pull/5598)
  - **状态**: 仍为 OPEN。这是一个由 CI 触发的发布 PR，旨在更新多个 crate 的版本（`ironclaw_common`, `ironclaw_safety`, `ironclaw_skills`）。该 PR 已打开超过 3 周且包含破坏性变更，需要维护者审查并决定是否合并，以推动这些 crate 的版本更新。这种长期挂起的版本发布 PR 可能会阻塞其他依赖这些 crate 的开发工作。

**总结**: 项目正处在一个关键的“从重构发布到稳定可靠”的过渡期。社区对 v1.0.0 的宏大架构重构表示认可，但同时对新版本的线上稳定性、Agent 的智能程度和用户体验提出了直接而强烈的批评。维护者们需要优先解决 **WebUI 稳定性 (6581, 6719, 6718)** 和 **Agent 自身认知能力 (6716, 6717)** 这两个最突出的问题，以巩固新版本的用户基础。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 LobsterAI 项目数据生成的 2026-07-28 项目动态日报。

---

# LobsterAI 项目日报 | 2026-07-28

## 1. 今日速览

今日 LobsterAI 项目活跃度较高，社区反馈和修复工作同步推进。日增 **9 条 Issue** 和 **9 条 PR**，其中 **6 个 PR 已被合并或关闭**，显示了项目组对社区问题的快速响应。焦点集中在 **Windows 平台兼容性问题**（如 Shell 调用、路径编码）和**数据完整性 Bug** 上，同时有两个长期悬而未决的 **“stale” Issue 和 PR** 被重新激活，可能预示着新一轮版本迭代的重点。

## 2. 版本发布

- **无**。过去24小时内没有新的 Release 发布。

## 3. 项目进展

今日项目推进主要聚焦于 **Bug 修复** 和 **功能完善**，社区贡献和官方修复均有体现：

- **修复 Agent 引擎无进展循环**: **PR #2386** (`fix(agentEngine)`) 被合并。该修复在 Token 预算耗尽前提前终止无进展的工具调用循环，有助于提升任务执行效率和资源利用率，避免无效计算。
- **增强 Artifact 分享与部署功能**: **PR #2388** (`feat(artifacts)`) 被合并。新增了预览工具栏的分享与部署入口，并优化了相关逻辑与样式，为内容交付提供了更便捷的路径。
- **修复邮件技能路径遍历漏洞**: **PR #2389** (`fix(email)`) 被合并。该 PR 对邮件附件进行了路径清理和边界校验，提升了邮件技能的安全性。
- **修复 Cowork 错误分类**: **PR #1323** (`fix(cowork)`) 被关闭。此 PR 修复了 Cowork 模式下错误分类不准确的问题，避免了因 `max_tokens` 参数导致的不明“输入过长”提示。

这些合并表明项目正积极修复已知问题并优化用户体验。

## 4. 社区热点

今日社区讨论热点主要集中在 **Windows 平台的兼容性问题**，具体表现为两个紧密相关的案例：

1.  **#2390: [OPEN] LobsterAI 问题报告：exec 工具默认 Shell 及中文路径编码问题**
    - 该 Issue 详细报告了在中文用户名（如“M幸福”）环境下，`exec` 工具硬编码调用 `powershell.exe`（5.1版本）而非 `pwsh.exe`，导致命令执行失败或出现字符编码错误。
2.  **#2396: [OPEN] [Bug] exec 工具的默认 shell wrapper = Windows PowerShell 5.1，导致 Linux 命令 / 含特殊字符的内联脚本静默失败**
    - 与 #2390 高度相关，进一步指出默认 Shell 为 PowerShell 5.1 导致的跨平台兼容性问题，如调用 `grep`、`node -e` 等命令时静默失败。

**诉求分析**：这两个 Issue 揭示了用户对 **跨平台（特别是 Linux 与 Windows）命令执行一致性** 的强烈需求。用户期望 `exec` 工具能智能识别或允许手动配置目标操作系统与 Shell 类型，而不是硬编码为老旧 Windows Shell。这反映了 LobsterAI 在 Agent 能力扩展时的关键痛点。

- [LobsterAI Issue #2390](https://github.com/netease-youdao/LobsterAI/issues/2390)
- [LobsterAI Issue #2396](https://github.com/netease-youdao/LobsterAI/issues/2396)

## 5. Bug 与稳定性

今日报告的 Bug 严重等级较高，均与数据完整性和功能正常执行相关：

- **🔴 严重: 数据静默损坏 (#2393)**: LobsterAI 加速器在字符串处理时，会将字面 `\f` 替换为控制字符 `\x0C`（form feed），导致写入本地文件的文本（如 PowerShell 脚本路径、JSON 转义）被静默损坏。**影响范围广，破坏性强**。目前**尚无关联的 Fix PR**。
- **🔴 严重: exec 工具默认 Shell 问题 (#2390, #2396)**: 使用错误的 Shell 版本，导致命令静默失败或执行异常，特别是在含有中文字符路径或需要调用 Linux 工具的场景下。如不修复，将严重影响 Windows 用户的 Agent 脚本执行能力。目前**尚无关联的 Fix PR**。
- **🟡 中等: 安装失败 (#2395)**: 用户报告因无法备份 “user skills” 导致更新失败。这可能与文件权限或安装目录被占用有关。
- **🟡 中等: 大模型受限后无法切换 (#1240)**: 一个历史 Issue 被重新激活。当某个 API Key 因配额用完受限后，Agent 无法自动或手动切换到其他未受限的模型，导致整个功能瘫痪。此问题影响用户对不同模型资源的自主调度。

- [LobsterAI Issue #2393](https://github.com/netease-youdao/LobsterAI/issues/2393)
- [LobsterAI Issue #2390](https://github.com/netease-youdao/LobsterAI/issues/2390)
- [LobsterAI Issue #2396](https://github.com/netease-youdao/LobsterAI/issues/2396)
- [LobsterAI Issue #2395](https://github.com/netease-youdao/LobsterAI/issues/2395)
- [LobsterAI Issue #1240](https://github.com/netease-youdao/LobsterAI/issues/1240)

## 6. 功能请求与路线图信号

用户今日提出了几项明确的功能请求：

- **技能重命名 (#2391)**: 用户请求为“技能（Skill）”增加重命名功能。这是一个基本的文件/对象管理需求，实现成本低，但能显著提升用户体验。**可能被纳入下一个版本**。
- **定时任务增强 (#2392)**: 用户指出定时任务应能选择执行的具体 Agent 和 Skill。这显示用户的 Agent 使用场景正在从单一对话向复杂自动化工作流进化。
- **Settings 弹窗未保存提示 (#1237)**: 一个历史 Issue 被关联的 PR **#1241** 解决。该 PR 为 Settings 弹窗增加了“脏检测”逻辑，在用户未保存修改而关闭弹窗时发出确认提示。此 PR 虽是3个月前提出，但今天（7月27日）刚被更新，极有可能在近期被合并。

- [LobsterAI Issue #2391](https://github.com/netease-youdao/LobsterAI/issues/2391)
- [LobsterAI Issue #2392](https://github.com/netease-youdao/LobsterAI/issues/2392)
- [LobsterAI Issue #1237](https://github.com/netease-youdao/LobsterAI/issues/1237)
- [LobsterAI PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241)

## 7. 用户反馈摘要

从今日 Issues 的评论中，可以提炼出以下用户痛点：

- **“技能备份”是更新/重装的关键痛点**：Issue #2395 用户因“无法备份技能”导致整个更新过程失败。这表明“技能”的导入/导出/备份机制对用户至关重要，但当前实现存在可靠性问题。
- **Agent “锁定”后的糟糕体验**：Issue #1240 用户描述了当 API 受限时，整个 LobsterAI 程序变得不可用，即使切换模型也无济于事。这种“一损俱损”的状态极大地影响了用户体验，用户期望有更强的模型切换和故障隔离能力。
- **“时间超时”的困惑**：Issue #2062 用户对超过最大时长的任务状态感到困惑，不确定任务是否在后台继续运行。这表明任务生命周期的透明度和用户通知机制有待加强。

## 8. 待处理积压

以下为长期未响应或已“stale”但仍有影响的重要 Issue 和 PR，建议维护团队优先关注：

- **Issues**:
    - **#1234 ~ #1240 系列**: 这批标记为 `[stale]` 的 Issue（如大模型受限、任务最大时长、未保存提示等）都是在 4月1日 创建的，至今已有近4个月。它们揭示了核心体验问题，今日仍被更新评论，说明这些痛点依然存在。
- **PRs**:
    - **#1239 [stale] feat(main): AI 任务完成时闪烁任务栏/Dock 图标提醒用户**: 与 Issue #2062 的“任务超时”困惑高度相关。这个功能可以解决任务状态不透明的问题，但已 4 个月未合并。
    - **#1241 [stale] feat(settings): Settings 关闭无确认，API Key 等配置静默丢失**: 直接对应 Issue #1237，且有代码实现。从更新记录看，该 PR 今日刚被更新，可能正在重新审视合并。

- [LobsterAI Issue #1237](https://github.com/netease-youdao/LobsterAI/issues/1237)
- [LobsterAI Issue #1240](https://github.com/netease-youdao/LobsterAI/issues/1240)
- [LobsterAI Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062)
- [LobsterAI PR #1239](https://github.com/netease-youdao/LobsterAI/pull/1239)
- [LobsterAI PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，这是根据您提供的 Moltis 项目 GitHub 数据生成的 2026-07-28 项目动态日报。

---

## Moltis 项目动态日报 | 2026-07-28

### 1. 今日速览

过去24小时内，项目未产生新的 Issue 讨论或代码合并，但活跃度依然显著，集中体现在 **5 个待合并的 Pull Request** 上。这些 PR 涵盖了从核心架构（如 ACP 服务端支持）到关键功能增强（如向量数据库内存后端）以及安全修复（`/sh` 命令权限控制）等多个维度。总体来看，项目正处于功能密集开发和关键安全加固阶段，社区贡献活跃，但维护者合并决策压力较大。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日未有 PR 被合并或关闭。但以下 5 个已提交的 PR 代表了项目下一步的重要发展方向，体现了在**新后端、新协议支持、安全性和可观测性**四个方面的显著推进：

- **`#1158` (feat: 记忆后端)**：新增基于 `Zvec` 和 `redb` 的向量数据库内存后端。该 PR 为实验性功能，作为现有记忆机制的替代方案，其实现依赖独立的 `llama-cpp` 嵌入式模型服务器，表明项目正在探索更灵活、自托管的记忆解决方案。
- **`#1169` (feat: ACP 服务端)**：使 Moltis 自身能够作为 ACP (Agent Communication Protocol) 代理提供服务。此前 Moltis 仅是 ACP 客户端，此 PR 将其角色翻转，意味着其他 ACP 框架（如 Zed、buzz-acp）可以直接将 Moltis 作为智能体调用，极大扩展了项目的集成范围和生态可能性。
- **`#1170` (fix: `/sh` 命令权限)**：修复了 `/sh` 等特权工具在群组频道中可被任意有权限用户执行的严重安全问题。通过引入基于账户的操作员列表，将命令执行限制在特定授权用户，是本次更新中最重要的安全改进。
- **`#1174` (feat: 仪表与反馈)**：引入了可插拔后端
的智能体仪表监测和用户反馈收集基础设施。这是项目迈向生产级应用的重要一步，未来可支持性能分析、行为追踪和用户体验优化。
- **`#1173` (feat: PWA 推送通知)**：修复了 PWA 通知静默替换的 bug，通过添加 `renotify` 标志和会话跟踪，确保新消息能触达用户，提升了 Web 端用户体验的可靠性。

### 4. 社区热点

今日无 Issue 更新，所有讨论热度均集中在待处理的 PR 上。值得关注的是：

- **`#1170` (fix: `/sh` 权限)** 和 **`#1174` (feat: 仪表监测)** 均来自项目核心维护者 `penso`，反映了维护团队当前的工作重点：在快速添加功能的同时，深刻关注系统安全与可观测性。
- **`#1158` (feat: Zvec 记忆后端)** 来自外部贡献者 `demyanrogozhin`，作为一项实验性尝试，体现了社区对更高效、更可控的记忆后端的探索兴趣。该 PR 的讨论和最终决策将是观察项目在核心架构上开放程度的风向标。

### 5. Bug 与稳定性

- **严重 - `/sh` 命令权限缺失 (`#1170`)**：这是一个严重的安全漏洞。在群组聊天中，任何通过频道访问控制的成员均可执行主机命令。对应的修复 PR (`#1170`) 已经提交，等待审查合并。
- **中等 - PWA 通知静默替换 (`#1173`)**：这是一个影响用户体验的 Bug，当同一会话收到新消息时，旧通知会被无提示地覆盖。对应的修复 PR (`#1173`) 已提交。

### 6. 功能请求与路线图信号

- **新功能类型: 自托管记忆系统** (`#1158`)：新增的 `Zvec` + `redb` 后端暗示了项目对 `自托管`、`无外部依赖`的记忆解决方案的需求。这可能源于用户对数据隐私、离线使用或定制化嵌入模型的需求。
- **新协议: 成为 ACP 服务端** (`#1169`)：此功能标志着项目从单一的“智能体使用者”向“智能体提供者”的转变。这可能是为了满足用户希望在现有 ACP 工作流（如使用 `Zed` 编辑器）中直接集成 Moltis 的需求，属于生态扩展的关键功能。
- **运营需求: 用户反馈收集** (`#1174`)：引入用户反馈系统表明项目进入关注“用户驱动迭代”的阶段，未来版本规划可能会更依赖实际使用数据。

### 7. 用户反馈摘要

今日无直接的用户反馈（Issues 评论）。但从 PR 描述中可以推断出用户的潜在痛点：

- **权限安全担忧**：`#1170` 描述的场景（私有实例无碍，但群组中任意成员可执行 `/sh`）明确指出了**多用户场景下的安全风险**，这是社群用户对安全性的核心诉求。
- **用户体验不满**：`#1173` 描述的 PWA 通知“静默替换”问题，反映了**用户对消息通知可靠性和非侵入性的基础要求被破坏**，属于典型的负面使用体验。

### 8. 待处理积压

当前无长期未响应的 Issue。但以下 PR 已停留数日，建议维护者关注并推动决策：

- **`#1158` (feat: Zvec 记忆后端)**：创建于 7 月 17 日，已超过 10 天。作为一项重要的架构扩展，其设计选型将影响未来记忆功能的路线图。需要核心团队给出明确反馈或指导。
- **`#1169` (feat: ACP 服务端)**：创建于 7 月 26 日，是一个标志性的功能。审查和合并此 PR 将解锁 Moltis 在 Agent 生态中的新角色，建议优先处理。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的CoPaw项目GitHub数据，生成了以下项目动态日报。

---

# CoPaw 项目动态日报 | 2026年7月28日

**项目状态：活跃 | 健康度：良好**

---

## 1. 今日速览

过去24小时，CoPaw项目呈现高度活跃状态，社区反馈和开发工作都在快速推进。尽管没有新版本发布，但社区在Bug反馈和功能讨论上非常积极，尤其围绕飞书、钉钉等渠道的集成体验问题。开发方面，项目有大量待合并的PR（36个，占比72%），且有多个重大新功能即将落地，如**统一浏览器自动化架构**、**第三方Agent集成框架**和**QwenPaw Creator创作应用**。这表明项目正处于一个功能密集开发期，下一个版本更新值得期待。短期内，高积压的待合并PR可能会给维护团队带来压力，需关注合并效率。

## 2. 版本发布

**无**

在过去24小时内，CoPaw没有发布任何新版本。

## 3. 项目进展

今日有14个PR被合并/关闭，展示了项目在多个关键领域的进展：

*   **桌面端App修复与兼容性 (PR #6491, #6462):**
    *   **`fix(desktop): bundle PawApp SDK modules`**：合并了一个关键修复，解决了从桌面App的应用中心安装插件（如Agent Kanban）时，因缺少`qwenpaw.pawapp`模块而导致的安装失败问题。这直接修复了用户报告的Issue #6473。
    *   **`docs(sandbox): clarify native Windows sandbox support`**：更新了文档，澄清了QwenPaw在Windows系统上提供原生沙箱支持，纠正了旧文档中关于“WSL2是Windows沙箱必备条件”的错误描述，降低了用户部署门槛。

*   **稳定性与缺陷修复:**
    *   多个遗留Bug在今日得到关闭（详见“Bug与稳定性”部分），涉及的子系统包括飞书通道的长消息分发、内存泄露、上下文压缩、模型API兼容性等，表明针对2.0版本的稳定性补丁正在持续交付。

**项目向前迈进：** 本次合并/关闭的PR主要集中在**Bug修复**和**文档优化**，特别是解决了阻碍用户体验的关键插件安装问题，这对提升QwenPaw Desktop 2.0.1的用户满意度至关重要。

## 4. 社区热点

过去24小时讨论最为热烈的是以下Issue，反映了社区对核心体验和功能集成的高关注度：

1.  **Agent Kanban插件安装失败 (Issue #6473)**
    *   **链接**: [Issue #6473](https://github.com/agentscope-ai/QwenPaw/issues/6473)
    *   **热度**: 评论数: 3 (在短时间内快速被关注)
    *   **分析**: 此问题在24小时内被提出并迅速被标记为已关闭，同时存在相关联的修复PR (#6491)。这反映了社区对QwenPaw桌面端官方插件的强烈需求，开发团队响应迅速。

2.  **飞书/钉钉等企业IM渠道的集成问题 (Issues #5757, #5561, #5708, #5603)**
    *   **热度**: 这些Issue在过去24小时集体被关闭或更新，每个都有3-14条评论。
    *   **分析**: 飞书无法回复长消息、无法解析交互式卡片、钉钉流式输出过慢等问题，是社区用户，尤其是企业用户的核心痛点。大量此类问题的关闭表明开发团队正在系统性地解决渠道集成的稳定性和体验问题。用户对这类功能的稳定性有极高期待。

3.  **浏览器卡顿问题 (Issue #5725)**
    *   **热度**: 评论数: 6
    *   **分析**: 用户对比了DeepSeek，发现QwenPaw Console在流式输出时会导致浏览器卡顿。这是一个影响所有Web用户的核心体验问题，诉求清晰，复现路径明确，是目前需要优先关注的性能问题。

## 5. Bug 与稳定性

在过去24小时，多个Bug被解决，也有新发现的严重问题。

**严重/高危（已有关联修复PR或已关闭）**：

| Issue ID | 标题 | 严重程度 | 状态 | 修复PR |
| :--- | :--- | :--- | :--- | :--- |
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | 飞书信息不回复情况 (docker) | **严重** | **已关闭** | - |
| [#5561](https://github.com/agentscope-ai/QwenPaw/issues/5561) | 飞书长信息需通过文件发送 | **严重** | **已关闭** | - |
| [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773) | 记忆搜索导致OpenCode渠道报错 | **严重** | **已关闭** | - |
| [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | Agent Kanban插件安装失败 | **严重** | **已关闭** | [#6491](https://github.com/agentscope-ai/QwenPaw/pull/6491) |
| [#5708](https://github.com/agentscope-ai/QwenPaw/issues/5708) | 飞书交互式卡片消息不解析 | **严重** | **已关闭** | - |

**中/低危（新增/持续活跃）**：

| Issue ID | 标题 | 严重程度 | 状态 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | openai模型最大输出token不生效 | **高** | **开启** | 影响模型输出长度的控制，需尽快修复。 |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | 首页/会话在Edge+Wayland下高CPU占用 | **高** | **开启** | 潜在的性能回归问题，可能由WebSocket推送或渲染机制引发。 |
| [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | 大模型响应被截断 | **高** | **开启** | 影响MiniMax-M3等特定模型，用户期待解决。 |
| [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | 任务模式下历史记录过多对话 | **中** | **开启** | 可能是任务隔离机制的设计或Bug，需要评估是否属于预期行为。 |

## 6. 功能请求与路线图信号

社区持续提出新功能需求，结合现有PR，可以看出项目下一版本的重点方向：

1.  **更强的模型和Provider支持**：
    *   **PR #6515**: 提议将火山引擎推理计划和小米MiMo标准API作为内置Provider。
    *   **Issue #5427**: 请求支持Kimi K2编程模型的Anthropic兼容接口。
    *   **Issue #5609**: 希望支持非标准的/chat/completions API协议，以便使用更多免费模型。
    *   **信号**: 用户渴望连接更多样化的模型，特别是国产模型和特殊API。PR #6515已经在路上，其他诉求很可能在下个版本中得到响应。

2.  **更丰富、更深度的Agent能力**：
    *   **PR #6284**: `feat(apps): add qwenpaw-creator app` 正在审查中，这将带来脚本、素材、分镜到视频的创作工作流。
    *   **PR #6397**: `feat(third-party agents): integrate Codex, Qoder, Skills, and MCP` 准备集成Codex、Qoder等第三方智能体，构建开放生态。
    *   **PR #6424**: `feat(computer-use): native desktop GUI automation` 正在开发，将赋予Agent操作Windows和macOS桌面的能力。
    *   **信号**: 项目正从“对话助手”向“通用自动化平台”演进，Agent的“行动”边界正被大幅拓宽。

## 7. 用户反馈摘要

从过去24小时的讨论中，可以识别出以下核心用户声音：

*   **痛点**:
    *   **企业IM集成体验不稳定**：飞书无法正常回复长消息、钉钉流式输出卡顿，是企业用户最直接的抱怨，影响了日常工作流。
    *   **模型兼容性问题**：使用非主流或特殊接口的模型（如Kimi、OpenCode、转发的API）时，经常遭遇配置困难或请求失败，配置体验不够友好。
    *   **性能问题**：Web Console在流式输出时卡顿，Windows下向量索引无法持久化，这些性能瓶颈影响了用户体验的“丝滑”程度。
*   **使用场景**:
    *   **企业知识问答与工作流**：大量用户将CoPaw接入飞书/钉钉群聊，用于信息咨询、数据报告、工作总结等场景。
    *   **开发与代码辅助**：用户尝试使用编程模型（如Kimi K2 Code）进行任务。
    *   **自动化操作**：用户期望Agent能完成文件删除、数据库操作等更复杂的任务，但安全防护机制需要更完善。
*   **满意点/期望**:
    *   社区对插件生态抱有很高期望，`agent-kanban` 插件的安装失败问题迅速引起了共鸣。
    *   用户对模型的“成本”和“选择多样性”非常敏感，期望通过支持更多免费或国产模型来降低使用成本。

## 8. 待处理积压

以下为长期未更新或关键待处理的Issue/PR，提醒维护者关注：

*   **[Bug] #5090: 工具防护绕过**
    *   **链接**: [Issue #5090](https://github.com/agentscope-ai/QwenPaw/issues/5090)
    *   **状态**: **已关闭** (但问题本质未完全解决)
    *   **重要性**: **极高**。用户发现虽然`rm`命令被拦截，但Agent可通过`python`脚本绕过限制。此问题虽在24小时内被关闭，但并未显示有代码层面的修复，这可能导致安全防护形同虚设。**建议重新评估此Issue的关闭原因，或建立新的Issue追踪安全模块的鲁棒性。**
*   **[PR] #6151: 后台工具调用卸载机制重构**
    *   **链接**: [PR #6151](https://github.com/agentscope-ai/QwenPaw/pull/6151)
    *   **状态**: **开启 (已超过12天)**
    *   **重要性**: **高**。此PR旨在修复三个关于后台工具调用的Bug，对Agent可靠运行至关重要。PR状态为OPEN，建议维护者评估是否可合并或需要更多审查。
*   **[Bug] #5725: Console流式输出浏览器卡顿**
    *   **链接**: [Issue #5725](https://github.com/agentscope-ai/QwenPaw/issues/5725)
    *   **状态**: **已关闭**
    *   **重要性**: **高**。虽然已关闭，但未看到对应的修复PR链接。若此问题未得到根本解决，可能是一个用户体验的长期隐患。**建议维护者确认关闭此Issue的修复方案。**

---

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于ZeroClaw (zeroclaw-labs/zeroclaw) 项目2026-07-28日数据生成的动态日报。

---

# ZeroClaw 项目动态日报 (2026-07-28)

## 1. 今日速览

ZeroClaw 项目在2026年7月28日呈现出高强度的开发与安全审计状态。过去24小时内，Issue 和 PR 的更新数量均达到50条左右，社区活跃度极高。项目当前面临**严重的安全审查风暴**，大量由安全研究员 `belumume` 提交的高危安全问题集中爆发，覆盖了通道（Bluesky, Reddit, LINE, WhatsApp）、网关（Pairing/Lockout）、紧急停止（E-stop）等多个核心模块，可能存在严重的安全架构缺陷。同时，CI 系统的可靠性问题仍在持续，一个核心运行时测试在 `master` 分支上有高达 95% 的失败率，严重阻碍了开发流程。尽管没有新版本发布，但今天有7个用于修改Bug与测试的 PR 获得了合并，表明维护团队正在积极应对当前危机。

## 2. 版本发布

- **无。** 过去24小时内未发布新版本。

## 3. 项目进展

今日共有8个 PR 被合并或关闭（其中合并/关闭数为8），主要集中在Bug修复与测试改进：

- **安全审计与防御：**
    - **PR #9443** (fix(parser): omit malformed tool payloads from logs): 修复了日志中可能泄露恶意工具负载（payload）的问题，防止敏感信息或攻击向量被记录。
    - **PR #9445** (fix(config): keep unknown-property sentinel matching typed): 修复了配置解析中，因通用错误匹配导致的路由混乱问题，增强了配置解析的健壮性。
    - **PR #9446** (fix(macros): report invalid integration status fields): 在宏（macro）层面增加了对无效集成状态字段的编译期错误报告，提升了开发者体验和代码健壮性。
- **测试与CI稳定性：**
    - **PR #9439** (fix(tests): keep channel regression within Windows stack): 修复了Windows平台下因线程栈较小导致的通道回归测试崩溃问题。
    - **PR #9412** (fix(observability): pair display markers in order): 修复了OpenTelemetry（OTel）追踪中，因内容顺序错乱导致的分析器崩溃问题。
- **文档与治理：**
    - **PR #9388** (docs(governance): retire the CONTRIBUTORS.md record): 清理了过时的项目治理文档，将维护者角色定义归档到正式规范中。

**项目推进评估：** 维护团队正在弥合高危安全漏洞（通过日志防御和配置解析），并解决阻碍CI运转的关键测试问题。然而，面对今日涌现的大量安全危机，这些合并动作更像是一次前置的“防弹衣”升级，而非针对核心漏洞的最终修复。

## 4. 社区热点

今日社区讨论的焦点完全集中在由 `belumume` 开启的一系列**高危安全审计**上。该研究员在短时间内（7月26日至27日）提交了超过5个高严重性的Issue，内容覆盖了从API密钥泄露到认证绕过等核心安全问题，引发了社区的广泛关注。

1. **[Bug]: a Gemini API key in the request URL survives sanitize_api_error...** (#9386)
    - **评论数：4**
    - **摘要：** 报告了Google Gemini API密钥在请求失败时，会通过 `sanitize_api_error` 中的格式化错误暴露在用户聊天会话中。这是一个直接的信息泄露问题。
    - **链接：** [Issue #9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)
2. **[Bug]: Bluesky and Reddit have no sender authorization...** (#9393)
    - **评论数：3**
    - **摘要：** 指出Bluesky和Reddit通道缺少发送方授权机制，攻击者可能冒充用户或利用这些通道进行未授权操作。这是一个严重的安全架构缺陷。
    - **链接：** [Issue #9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393)
3. **[Bug]: LINE group messages skip the allowlist...** (#9392)
    - **评论数：2**
    - **摘要：** 报告了LINE群组消息完全绕过了安全白名单和配对握手协议，任何群成员的消息都可能被代理自动处理，存在巨大安全隐患。
    - **链接：** [Issue #9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)
4. **[Bug]: emergency stop is a CLI-only state file that no runtime path reads** (#9390)
    - **评论数：2**
    - **摘要：** 揭示了项目的“紧急停止（E-stop）”功能是一个仅对CLI生效的状态文件，而负责实际运行的runtime守护进程根本无法读取它，这意味着E-stop在运行时是无效的。
    - **链接：** [Issue #9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390)
5. **[Bug]: unauthenticated POST /api/pair keys its lockout on an attacker-supplied header** (#9389)
    - **评论数：2**
    - **摘要：** 报告了配对API端点 `/api/pair` 的锁定机制（rate limiting）依赖于攻击者可以控制的HTTP头。攻击者可以通过修改头信息来绕过锁定，持续发起暴力破解。
    - **链接：** [Issue #9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389)

**分析：** 社区的热点议题表明，`belumume` 正在对ZeroClaw进行深入、系统性的安全审计。用户和贡献者关注点已从单纯的功能性Bug转移到了项目的**安全基座**是否稳固。这些发现暴露了项目在通道身份验证、数据脱敏、关键安全机制（如E-stop）和API端点保护方面存在严重缺陷。

## 5. Bug 与稳定性

**S0 - 数据丢失/安全风险：**
- **[Bug]: delegate bypasses parent's tool allowlist** (#8279): 代理（delegate）工具可以绕过父进程的允许列表，子代理可以调用父策略禁止的工具。**无关联Fix PR**。(链接: [Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279))

**S1 - 工作流阻塞：**
- **[Bug]: Running SOP jobs have no operator cancellation path** (#9425): Web仪表板无法取消正在运行的SOP作业。**无关联Fix PR**。(链接: [Issue #9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425))
- **[Bug]: Incomplete terminal responses can be reported as successful** (#9421): 不完整的AI响应可能被错误报告为成功，导致下游工作流出现问题。**关联PR #9424 待合并**。(链接: [Issue #9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421))

**S2 - 退化行为 (高影响力)：**
- **[Bug]: cargo test -p zeroclaw-runtime --lib fails on master...** (#9357): `zeroclaw-runtime` 核心库测试在master分支上有95%的失败率，且会污染全局互斥锁，影响后续所有测试。**无关联Fix PR**。(链接: [Issue #9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357))
- **[Bug]: Landlock blocks shell access to required system files on Fedora** (#8973): Landlock沙箱阻止了Shell工具访问`/dev/null`等必需系统文件。**无关联Fix PR**。(链接: [Issue #8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973))

**其他重要Bug：**
- **[Bug]: CLI-created cron jobs cannot deliver output** (#9340): CLI创建的所有定时任务输出被硬编码为“无”，导致任务运行结果被丢弃。**无关联Fix PR**。(链接: [Issue #9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340))
- **[Bug]: a vendored wit/v0 that drifts fails only at registration...** (#9380): 插件自带的WIT定义漂移，导致插件在注册阶段才失败，且无任何前期预警，调试困难。**无关联Fix PR**。(链接: [Issue #9380](https://github.com/zeroclaw-labs/zeroclaw/issues/9380))

**稳定性总结：** 项目的**稳定性正面临严峻挑战**。CI核心测试的严重不稳定（#9357）是当前开发流程的“路障”。同时，安全审计揭示了一大批“S2级别但风险高”的逻辑性Bug，它们虽然不直接导致崩溃，但会严重破坏用户信任和系统的行为预期。

## 6. 功能请求与路线图信号

- **RFC: AI-assisted PR pre-review and re-review** (#9330): 用户提议利用CI结果触发AI辅助代码审查。如果采纳，将极大提升大型项目的代码审查效率。
    - 链接: [Issue #9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)
- **[Feature]: Wire WASM memory plugins into runtime backend selection** (#9463): 社区请求将WASM内存插件集成到运行时后端选择逻辑中，但目前仅Tool WASM插件在生产环境可用。
    - 链接: [Issue #9463](https://github.com/zeroclaw-labs/zeroclaw/issues/9463)
- **RFC: Anthropic stored-profile OAuth alias contract** (#9464): 为Anthropic AI提供商定义OAuth认证的契约，是朝着更安全的凭证管理迈出的重要一步。
    - 链接: [Issue #9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464)

**路线图信号：** 项目的功能演进开始向**AI辅助开发**（CI集成AI审查）和**增强运行时扩展性**（WASM插件全链路支持）倾斜。OAuth的支持也表明项目在适配更广泛的商业服务和安全最佳实践。

## 7. 用户反馈摘要

- **痛点：**
    - **安全焦虑（核心）：** 用户（`belumume`）通过大量Issue揭示了项目在多模块、多通道中存在严重的安全漏洞，如API密钥泄露、认证绕过、关键安全机制失效等，这正在引发社区对项目安全性的严重担忧。
    - **配置体验差：** 用户（`Audacity88`）重复提到配置的多语言问题（#9363）：元数据仍是英文；配置初始化失败（#9436）：新初始化的配置文件因格式问题被严格加载器拒绝；CLI命令无反馈（#7808已关闭）：输入密钥时无任何视觉反馈，造成困惑。
    - **功能虚假可用：** 用户（`AngryPacifist`）指出CLI创建的Cron任务从不交付结果（#9340），但系统显示为“成功”，这是一个欺骗性很强的体验。
- **使用场景：**
    - **跨企业/组织使用：** 围绕配置本地化（#9363）和OAuth认证（#9464）的请求表明用户希望将ZeroClaw部署到需要多语言界面和严格企业级认证的环境中。
    - **多Agent协作：** 提案“分类作用域的内存读取”（#8983）反映了用户在处理复杂多Agent工作流时，希望实现更精细、更安全的权限控制。

## 8. 待处理积压

以下为长期未响应或关键状态为 `needs-author-action` 的重要Issue/PR，需要维护团队重点关注。

- **关键安全事件：**
    - **所有 `belumume` 于7月26-27日提交的Issue** (#9386, #9389, #9390, #9392, #9393, #9417, #9422): 这些是本次安全风暴的核心，需要最高优先级的响应和修复。其中 #9417 (WhatsApp token leak) 和 #9422 (Windows编译失败) 状态为 `needs-author-action`，可能缺少关键信息。
- **长期梗塞的路障：**
    - **[Bug]: delegate bypasses parent's tool allowlist** (#8279): **S0级**安全风险，创建近一个月，至今无修复PR。
    - **[Bug]: cargo test -p zeroclaw-runtime --lib fails on master...** (#9357): 核心CI严重不稳定，是项目开发的重大阻碍。
- **重大功能的待决PR（状态: needs-author-action）：**
    - **feat(agent): carry live provider identity...** (#8966): 涉及多Provider身份标识和上下文窗口解析的重大功能增强，作者（`eugeneb50`）需要回应修改意见。
    - **feat(runtime): support PowerShell as the native shell on Windows** (#9182): Windows平台的关键功能支持，作者（`NiuBlibing`）需回应修改意见。

**总体评估：** ZeroClaw项目目前正处于一个 **“安全为先，稳定为重”** 的关键调整期。今日的活跃度数据表明团队和社区都在积极应对，但大量高风险的积压Issue预示着项目在安全架构和CI稳定性上有较大的技术债务需要偿还。维护者需要迅速响应安全审计报告，并优先修复CI的门控问题，以恢复正常开发节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*