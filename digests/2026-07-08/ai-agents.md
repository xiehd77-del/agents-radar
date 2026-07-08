# OpenClaw 生态日报 2026-07-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-08 02:51 UTC

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

好的，我是您的专属 AI 智能体与个人 AI 助手领域开源项目分析师。根据 OpenClaw 项目在 GitHub 上的实时数据，我已为您生成了以下项目动态日报。

---

# OpenClaw 项目动态日报 | 2026-07-08

## 1. 今日速览
今日 OpenClaw 项目保持极其活跃的状态。社区在 24 小时内提交了 500 条 Issue 和 500 个 PR，体现出极高的参与度。然而，大量的新开活跃项（376条Issue 待处理）与相对较低的合并/关闭率（约28%），表明项目维护者面临显著的积压压力。安全、会话状态和消息丢失是今日讨论的核心痛点，而多智能体编排和性能回归问题是用户反映的主要“雷区”。总体来看，项目正处于快速迭代和社区反馈高发期，急需对关键 Bug 和积压 PR 进行集中清理。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日有多项重要的修复和功能开发正在合并进程中，主要集中在以下几个方面：

*   **安全与合规:** PR #97888 对 Android 应用进行了关键修复，要求在分享已安装应用列表前获得用户明确同意，以符合 Google Play 的规定，这对项目在移动端的发布至关重要。
*   **核心稳定性修复:**
    *   PR #101928 修复了一个 **P1 级别**的 Bug，解决了嵌入式代理在触发溢出恢复压缩时因无法重入写锁导致死锁的问题，直接针对 Issue #97747。
    *   PR #101715 修复了**模型切换**时的逻辑错误——当用户在 AI 正在回复时切换模型，系统会报错而非重试，现在已修正，提升了会话体验的鲁棒性。
    *   PR #101512 对齐了 Codex 扩展的看门狗（watchdog）防御逻辑，并增加了耗时时长上限，防止出现无限等待。
*   **渠道与用户界面:**
    *   PR #99905 为几乎所有支持的渠道（如 Discord, Slack, Telegram 等）修复了读取目标策略不一致的问题，确保了消息操作（读、写、反应等）能正确遵循账户和对话目标策略。
    *   PR #101832 修复了 Gemini 模型在特定情况下无法禁用思考模式的问题。
    *   PR #101911 为 Android 应用新增了 “技能工坊（Skill Workshop）”设置面板，使用户可以在移动端管理技能建议。

**总结**: 项目今日在修复多智能体相关的死锁与切换问题、提升跨渠道操作一致性和加强移动端功能开发方面取得了实质性进展，正在逐步提升系统运行的稳定性和用户体验。

## 4. 社区热点
今日未出现评论数特别突出的议题，但以下问题因其严重性和影响范围成为社区关注的焦点：

*   **管道内文本泄露 (Issue #25592)**: 智能体在工具调用之间产生的文本（如错误处理日志）被错误地路由到用户可见的消息频道（Slack, iMessage等），这是一个严重的用户体验问题，被评为 **“🦞 diamond lobster”** 级别。**背后的诉求**是用户希望看到一个更“干净”的 AI 交互界面，不希望内部处理细节干扰对话。
*   **子代理任务静默丢失 (Issue #44925)**: 多个故障模式下（如超时、通知失败），子代理的完成结果和错误会被**静默地丢失**，没有重试、通知或自动重启。这一 **P1** 级别问题直击多智能体框架的可靠性核心，是社区对企业级应用稳定性的强烈需求。
*   **安全路线图：保护 API Key (Issue #11829)**: 尽管评论数稳定，但这是一个长期存在的关键安全需求。用户要求对API密钥进行分层保护，防止泄露给 LLM 或在聊天中暴露。这反映了社区对**数据主权和机密性**的高度关注。

## 5. Bug 与稳定性
今日报告的Bug依然聚焦于稳定性、数据完整性和安全领域，以下是按严重程度排列的关键问题：

*   **P0 级别 Bug:**
    *   **未解析环境变量占位符 (PR #101399)**: 当从 GUI 启动时，环境变量占位符（如 `${OPENCLAW_GATEWAY_TOKEN}`）未被解析，导致认证直接使用字符串字面量，形成严重安全漏洞。
*   **P1 级别 Bug (关键):**
    *   **子代理完成静默丢失 (Issue #44925)**: 子代理任务结果丢失且无通知。**尚无关联 Fix PR**。
    *   **管道内文本泄露 (Issue #25592)**: 内部文本泄露至用户消息频道。**有相关的开放PR**。
    *   **Agent 目录引导文件被忽略 (Issue #29387)**: 只有共享工作区的文件会被注入系统提示，导致个性化配置失效。**已有开放PR**。
    *   **`exec` 工具不继承环境变量 (Issue #31583)**: 技能中配置的 `env` 变量无法传递给子进程，导致密钥注入失败，列为一个回归问题。**已有开放PR**。
    *   **信号守护进程 `stop()` 竞态条件 (Issue #22676)**: 重启时导致孤儿进程和发送失败。**有开放PR但状态更新到今日**。
    *   **多智能体编排不稳定 (Issue #43367)**: 同时添加/配置覆盖、会话锁失败和子任务脱离问题依然存在。**有开放PR**。
    *   **工具输出渲染为图片占位符 (Issue #99241)**: 在长时间运行的 ANSI 工作流中，工具输出变成 AI 无法读取的图片占位符，导致 AI “失明”。**尚无关联 Fix PR**。
*   **P2 级别 Bug (重要):**
    *   **Templates: `docstrings` – 严重的性能回归 (Issue #85333)**: `openclaw doctor --fix` 在特定版本上慢了4-5倍，原因是会话快照遍历瓶颈。**尚无修复PR**。
    *   **内存管理混乱 (Issue #43747)**: 不同用户的记忆管理行为不一致，有的用 SQLite，有的用 JSON，结果不同。**尚无修复PR**。
    *   **Sanbox 工作空间只读 (Issue #37634)**: 当启用 `workspaceAccess: none` 时，隔离的工作空间被挂载为只读，导致工具无法正常写入。**已有开放PR**。
    *   **`write` 工具缺少追加模式 (Issue #40001)**: 隔离的 Cron 任务会覆盖共享文件，导致静默数据丢失。**已有开放PR**。

## 6. 功能请求与路线图信号
社区不仅报告问题，也对项目发展提出了前瞻性建议：

*   **强烈信号：多智能体与可观测性**
    *   **Post-subagent 扩展钩子 (Issue #22358)**: 要求在子代理完成任务后触发钩子，用于自动化生成轨迹报告等。这表明用户希望构建更复杂的、可审计的多智能体工作流。
    *   **子代理完成路由选项 (Issue #27445)**: 用户希望子代理的完成通知可以作为触发消息发送给父代理，而非直接发送到频道，以进行更精细的步骤编排。这与上面提到的“管道内文本泄露”问题形成了对比，显示了从“不要泄露”到“选择性路由”的进阶需求。
    *   **生命周期钩子 (Issue #43454)** 和**分布式运行时 (Issue #42026)**: 这两个RFC/TF均指向项目需要进行架构性升级，以支持更复杂的监控、解耦和扩展场景。
*   **新功能需求:**
    *   **私有网络访问控制 (Issue #39604)**: 用户请求一个名为 `tools.web.fetch.allowPrivateNetwork` 的配置开关，以允许 `web_fetch` 工具访问局域网/内网设备，**获赞11次**，呼声很高。
    *   **LaTeX 数学公式支持 (Issue #42840)**: 在控制台UI中显示数学公式的需求，**获赞9次**，表明学术或工程用户在增长。
    *   **Telegram Business Bot 支持 (Issue #20786)**: 用户希望接入 Telegram 的企业聊天，**获赞6次**，显示了对企业级沟通渠道的需求。

**路线图信号**: 社区强烈认为当前的多智能体系统缺乏足够的可观测性、生命周期管理和控制能力。`网关生命周期钩子`和`分布式运行时`提案表明，下一阶段的重大版本可能着力于将单体架构拆分为更灵活、可管理的控制平面与执行平面。

## 7. 用户反馈摘要
从今日的 Issue 和 PR 评论中，可以提炼出如下用户反馈：

*   **“可靠性是第一位的”**: 用户对子代理任务静默丢失、多智能体编排不稳定等“幽灵”Bug 感到非常不满。这类问题严重破坏了用户对系统完成复杂任务的信心。例如，在 Issue #44925 中，用户描述了“结果丢失时没有人知道发生了什么”的场景。
*   **“希望 AI 更‘安静’和‘专注’”: 一个反复出现的痛点**是 AI 的“噪音”。无论是 Issue #25592 提到的内部文本泄露，还是 Issue #39406 提到的工具错误警告，用户都希望 AI 的交流更简洁、更专注于最终产出，而不是展示详细的“思考”或“调试”过程。
*   **“配置应该按预期工作”**: 一些回归问题，如 Issue #31583 的 `env` 变量丢失和 Issue #38439 的 Webchat 头像404问题，让用户感到沮丧。他们希望配置的一致性和可预测性得到保证，特别是对于改进/升级后的新版本。
*   **性能回归不可接受**: Issue #85333 (`doctor --fix` 慢 4-5倍) 被明确的标记为性能回归。用户对于版本升级带来的性能下降非常敏感，这直接影响了日常的开发体验和运维效率。

## 8. 待处理积压
以下是一些长期存在、亟待维护者关注的重要开放问题：

*   **安全路线图: 保护 API Key (Issue #11829)**: 从 2 月份创建至今，虽有关注但未有实质性的 PR 合并。这是项目的基石安全问题，长期悬而未决将增加风险敞口。
*   **性能回归: `openclaw doctor --fix` 4-5x 慢 (Issue #85333)**: 从 5 月标记到现在已超过一个月，状态为 `stale`。一个核心诊断功能降级严重影响用户排障，应优先处理。
*   **核心稳定性: 子代理完成静默丢失 (Issue #44925) 和 管道内文本泄露 (Issue #25592)**: 这两个 P1、钻石评级的问题涉及到 AI 行为的根本正确性与用户体验，是用户信任的基石，应尽快纳入修复计划。
*   **长期功能请求: 分布式Agent运行时 (Issue #42026)**: 这是一个重大的架构变更RFC，需要维护者给出明确的反馈和路线图规划，否则长期开放会挫伤社区贡献者的积极性。

---

---

## 横向生态对比

好的，作为您的专属AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的各项目动态日报，完成了这份横向对比分析报告。

---

## 个人 AI 智能体开源生态全景分析报告 (2026-07-08)

### 1. 生态全景

当前，个人 AI 助手与自主智能体开源生态正处于 **“密集迭代与安全觉醒”** 的并进阶段。各项目普遍展现出极高的社区活跃度，功能迭代速度惊人，但随之而来的是由社区安全研究员集中披露的**严重安全漏洞**，这成为今日全生态最强烈的信号。多智能体编排、跨平台集成和细粒度控制是社区的核心诉求，而性能回归和配置一致性则是普遍存在的痛点。生态呈现出典型的 **“大者恒大”与“长尾创新”** 并存格局：以 OpenClaw 为代表的头部项目面临巨大的社区反馈积压压力，而 NanoBot 等项目则在特定领域（如安全加固与渠道修复）快速精进。

### 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 发布版本 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新开) / 376 (待处理) | 500 / 约28%合并率 | 无 | 高活跃，但社区反馈积压严重，维护者承压。 |
| **NanoBot** | 5+ (新/活跃) | 11 (合并) | 无 | 高活跃，社区与开发者响应迅速，安全修复效率高。 |
| **Hermes Agent** | 50 (处理) / 16 (关闭) | 50 / 16 (关闭) | v0.18.1 | 高活跃，处于发布后稳定期，Bug修复与中小企业安全性是重点。 |
| **PicoClaw** | 5 (新/活跃) / 2 (关闭) | 3 (待合并) / 1 (合并) | 无 | 中等活跃，功能迭代与稳定性问题并存，需加快Bug响应。 |
| **NanoClaw** | 4 (新/活跃) | 23 (处理) / 9 (合并) | 无 | 高活跃，以文档清理和CLI修复为主，社区贡献积极。 |
| **IronClaw** | 32 (更新) / 10 (关闭) | 50 (更新) / 10 (合并) | 无 | 高活跃，Slack集成大重构完成，但关键外部集成故障待解。 |
| **LobsterAI** | 9 (新/安全相关) | 15 (合并) | v2026.7.7 | 高活跃，版本迭代快，但同日披露多个严重安全漏洞是主要风险。 |
| **TinyClaw** | **9** (全部为安全) | 0 | 无 | **低健康度**，核心API无认证，存在架构级安全缺陷。 |
| **CoPaw** | 12 (新+活跃) | 15 (合并) | v2.0.0-beta.3 | 高活跃，Beta阶段社区反馈活跃，前端稳定性和沙箱安全是焦点。 |
| **ZeroClaw** | 高 (未精确统计) | 高 (未精确统计) | 无 | 高活跃，密集进行Bug修复与安全加固，响应快速。 |
| **NullClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | 低活跃，项目可能处于休眠或维护静默期。 |

### 3. OpenClaw 在生态中的定位

- **生态位**: OpenClaw 是当前生态中 **社区规模最大、功能最全面、讨论最活跃** 的头部项目，扮演着“操作系统级”平台的角色。它的功能边界最宽，几乎覆盖了所有主流渠道、模型和Agent能力。
- **优势**: 巨大的社区基数和海量的 Issue/PR 数量是其最显著的优势，这带来了丰富的功能、广泛的兼容性和强大的问题发现能力。其多智能体编排和Agent能力是社区关注的核心。
- **技术路线差异**: 相比 NanoBot 和 Hermes Agent 的“小而精”或“敏捷迭代”风格，OpenClaw 更像一个 **“重型旗舰”**，其代码库规模和功能复杂度远高于其他项目。这种路径使其在功能广度上无人能及，但也导致了维护压力的巨大和Bug修复的相对滞后（约28%的合并率）。
- **社区规模对比**: OpenClaw 单日500+级别的Issue/PR量级，是 NanoBot (十几个)、Hermes Agent (几十个) 等项目的 **10-50倍**，这清晰地反映了其社区规模的压倒性优势。

### 4. 共同关注的技术方向

1.  **安全与认证 (普遍性最高)**:
    - **涉及项目**: **TinyClaw**, **NanoBot**, **NanoClaw**, **LobsterAI**, **ZeroClaw**, **Hermes Agent**。
    - **具体诉求**: 几乎所有项目都收到了来自社区安全研究员的漏洞报告，集中在 **API认证缺失、本地Webhook未授权访问、路径遍历、SSRF、Token泄露**等根本性安全架构问题上。这已成为当前生态最强烈的行业共识：**功能扩容的前提是安全基线的建立**。

2.  **多智能体/多Agent编排与可靠性**:
    - **涉及项目**: **OpenClaw** (子代理任务丢失、编排不稳定), **LobsterAI** (委托子Agent协作功能合并), **Hermes Agent** (后台任务静默退化), **OpenClaw** (子代理完成路由)。
    - **具体诉求**: 用户不再满足于单Agent对话，而是要求构建**可观测、可控制、高可靠**的多Agent工作流。具体表现为对子代理完成结果的通知、失败重试、生命周期钩子和精细路由的强烈需求。

3.  **细粒度权限与配置控制**:
    - **涉及项目**: **CoPaw** (弹窗开关), **ZeroClaw** (shell命令三级策略), **OpenClaw** (私有网络访问控制), **PicoClaw** (企业集成支持)。
    - **具体诉求**: 用户要求工具调用、UI行为（如弹窗、最小化到托盘）、网络访问等行为不再“一刀切”，而是提供可配置的、按需的开关或策略。这反映了用户从“能用”到“用得舒心”的体验升级需求。

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全功能Agent平台 | 高级开发者、需要复杂工作流的团队 | 重型、全栈式、多智能体编排是其核心。 |
| **Hermes Agent** | 生产级Agent部署 | 企业开发者、寻求稳定托管方案的用户 | 强调生产化安全加固（Dockerfile, Bearer令牌），发布版本稳定。 |
| **NanoBot** | 极速迭代与渠道整合 | 活跃社区贡献者、快速体验新功能的用户 | 开发流程敏捷，Bug修复响应快，安全修复效率高。 |
| **IronClaw** | Slack为核心的企业协作 | 深度使用Slack的团队 | Slack集成是核心亮点，OAuth重构是其标志性事件。 |
| **PicoClaw** | 轻量化、边缘设备集成 | 嵌入式开发者、NanoKVM硬件用户 | 聚焦与特定硬件（如KVM）的结合，拓展AI Agent到物理世界。 |
| **LobsterAI** | Agent协作与桌面GUI | 需要Agent协同工作和桌面自动化的用户 | 强调Agent间的Cowork能力，以及Windows桌面GUI自动化(UIA)是其独特优势。 |
| **TinyClaw** | 极度轻量，可能为实验项目 | 对安全性要求极低的探索性开发者 | 架构极简，但安全基线几乎为零，风险极高。 |

### 6. 社区热度与成熟度

- **第一梯队 (高速迭代，社区过热)**:
    - **OpenClaw**: 海量Issue涌入，Bug修复速度跟不上社区反馈，处于“边修边建”的过热状态，项目健康依赖维护者的强力组织。
- **第二梯队 (快速迭代，质量巩固)**:
    - **NanoBot, Hermes Agent, IronClaw, LobsterAI, CoPaw**: 这些项目在快速发布新功能和版本的同时，Bug修复和安全响应也较为及时，社区反馈能得到有效闭环。它们是生态中 **创新与稳定平衡较好** 的代表。
- **第三梯队 (局部热点，稳步推进)**:
    - **PicoClaw, NanoClaw, ZeroClaw**: 活跃度适中，专注于自身特定领域（如设备控制、文档维护、核心Bug修复），是生态有益的补充。
- **第四梯队 (低活跃/休眠)**:
    - **TinyClaw, NullClaw, Moltis, ZeptoClaw**: 开发活动极少或停滞。TinyClaw 因其严重安全缺陷，在任何正式场景下都不推荐使用。

### 7. 值得关注的趋势信号

1.  **“安全左移”成为行业基线**: 社区安全研究员的集中出击，标志着AI智能体开源生态已进入 **“安全为默认属性”** 的阶段。任何忽视基础安全架构（如认证、授权、输入校验）的项目，将很快面临社区信任危机。对开发者而言，**在功能开发前，必须优先设计和实现最小权限原则和防御性安全措施**。

2.  **Agent 交互正在“从对话到工作流”进化**: 多智能体编排、生命周期钩子、子代理路由等需求的涌现，表明用户不再满足于一问一答，而是要求AI Agent能 **自主管理、协调和执行复杂的多步任务流**。这意味着未来的技术方向将从优化单个Agent的对话能力，转向构建 **可靠、可观测、可恢复的Agent工作流系统**。

3.  **“静默失败”是用户体验杀手**: 无论是子代理任务丢失、配置修改不生效，还是工具调用静默退化，这些 “静默失败” 模式在多个项目的用户反馈中被反复提及。**透明度、反馈及时性和错误提示的可操作性**，将成为衡量AI Agent成熟度的关键指标。对于开发者来说，构建完善的日志、监控和用户通知系统，其重要性不亚于核心功能本身。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据您提供的 NanoBot 项目数据，生成 2026-07-08 的项目动态日报。

---

## NanoBot 项目动态日报
**日期**: 2026-07-08

### 1. 今日速览

今日项目活跃度极高，社区贡献与反馈非常踊跃。核心开发团队正在并行处理多个关键领域的修复与功能迭代，包括 WhatsApp 群组回归、WebUI 安全漏洞以及 MCP 连接稳定性问题。值得注意的是，社区安全研究人员本周集中提交了有关 WebUI token 发放机制的多个严重安全漏洞，已引起项目维护者的高度关注，并有望迅速得到修复。总体来看，项目正处于一个高频迭代、快速响应社区反馈的积极状态。

### 3. 项目进展

今日有 **11 个** PR 被合并或关闭，项目在功能完善和稳定性提升上取得了显著进展。

- **provider-hosted 网络搜索功能合并**: `#3743` 已被合并。这是一个重要的新功能，允许代理利用 Azure OpenAI 等提供商原生的网络搜索工具，同时保留了本地回退机制，显著提升了搜索能力与兼容性。
- **微信通道稳定性修复**: `#3517` 已被合并。修复了定时任务或网关重启后，由于 `context_token` 过期导致微信消息被静默丢弃的问题，提升了自动化任务的可靠性。
- **飞书 (Feishu) 会话管理优化**: `#4763` 已被合并。新增了在飞书中通过 `/new` 命令创建新会话时的分割线功能，改善了用户体验。
- **长期目标特性 (PR#4844) 接替**: 新的 PR `#4844` 已打开，接替了之前关闭的 `#4833`。这表明团队正在积极迭代“长期目标”这一核心特性，将其从始终可见的工具重构为仅在特定运行时模式下激活，以优化模型表现。

### 4. 社区热点

今日讨论热度较高的议题主要集中在以下方面：

1.  **WebUI 安全漏洞 (Issues #4825, #4826, #4827)**: 社区用户 `YLChen-007` 连续提交了 3 个高风险的 WebUI 安全漏洞（相关 PR `#4836` 也涉及 UI 状态问题）。它们均指向同一个核心问题：当 WebUI 绑定在 `localhost` 且未配置 `tokenIssueSecret` 时，任何本地进程都可以无认证地获取到具备 API 完全访问权限的 Bearer Token。这是今日最受关注的议题，引发了开发者的广泛讨论。
    - [Issue #4825](https://github.com/HKUDS/nanobot/issues/4825)
    - [Issue #4826](https://github.com/HKUDS/nanobot/issues/4826)
    - [Issue #4827](https://github.com/HKUDS/nanobot/issues/4827)

2.  **WhatsApp 群组功能回归 (Issue #4823)**: `mxnbf` 报告了自 `0.2.2` 版本后，WhatsApp 群组白名单功能 (`allowFrom`) 失效，导致机器人在所有群组中响应。用户对“可以预见其走向”的功能退化表达了担忧。幸运的是，已有修复 PR `#4834` 被迅速提交。
    - [Issue #4823](https://github.com/HKUDS/nanobot/issues/4823)

### 5. Bug 与稳定性

今日报告的 Bug 和安全问题较多，按严重程度排列如下：

- **严重 - 安全漏洞**:
    - **WebUI Token 泄露** (`#4825`, `#4826`, `#4827`): 本地进程无需认证即可获取 API 令牌。**尚无 fix PR**，但受影响的是受限的本地环境。
    - **DNS 重绑定 TOCTOU 漏洞** (`#4611` - 昨日关闭): 此安全漏洞已于昨日被关闭，表明修复已合并，值得关注。

- **高 - 功能回归/Bug**:
    - **WhatsApp 群组响应** (`#4823`): 群组白名单功能失效。**已有 fix PR `#4834`**。
    - **多模态消息导致崩溃** (`#4800`): 对 `msg.content` 错误地使用 `.strip()` 导致处理多模态消息时崩溃。**已有 fix PR `#4837`**。
    - **Tool Prepare 异常被静默吞噬** (`#4805`): `suppress(Exception)` 导致工具验证错误被忽略，引发不可预测行为。**已有 fix PR `#4837`**。

- **中 - 稳定性/兼容性**:
    - **Stream 超时 90 秒** (`#4013` - 已关闭): 一个较旧的错误，已于今日关闭，可能已修复或回退。
    - **Slack 依赖缺失** (`#4829`): 构建 Slack 版本时缺少 `aiohttp` 依赖。**尚无人认领**。
    - **Matrix 设备信任** (`#4841`): 启用 E2EE 后，Bot 设备在 Element 客户端显示为“未受信任”。**尚无人认领**。
    - **Shell Zombie 进程** (`#4840`): 子进程退出路径未正确回收僵尸进程。**已有 fix PR `#4840`**。

### 6. 功能请求与路线图信号

- **Provider-hosted 网络搜索** (`#3741` - 已关闭): 该功能请求已随 PR `#3743` 的合并而实现，这是一个明确的路线图信号，表明项目正朝着更深度的 LLM 提供商能力集成迈进。
- **摄像头捕捉工具** (`#3378` - 已关闭): 一个添加直接摄像头拍照功能的 PR 被合并，扩展了 AI Agent 与物理世界的交互能力。
- **MCP Server 空闲超时自动销毁** (`#4506`): 这是一个待合并的增强功能，旨在自动回收空闲 MCP Server 进程以释放内存。它的存在表明项目正在持续优化资源管理，很可能被纳入下一个版本。

### 7. 用户反馈摘要

- **正面反馈**: 用户在报告 Bug `#4013` 时提到，“之前的 `0.1.5post2` 版本非常好用”，表达了对早期版本的认可。
- **痛点反馈**:
    - **版本升级体验**: 用户 `mxnbf` 表达了从旧版本升级到 `0.2.0` 后遭遇 “stream stalled” 错误的沮丧感 (“renders any real work useless”)，说明版本升级带来的回归问题对核心用户的使用体验影响巨大。
    - **功能退化担忧**: 对于 WhatsApp 群组功能的回归，用户表现出一种“我预料到会这样”的无奈。
    - **DevOps 部署**: 用户 `luojiaaoo` 提交了一个 PR `#4845`，专门解决在红帽系 Linux 系统上部署时遇到的证书错误，反映了实际部署环境的差异性。

### 8. 待处理积压

以下问题虽非今日新增，但值得维护团队持续关注：

- **MCP 重连导致的网关崩溃** (`#4764`, `#4843`): 这是一个棘手的并发稳定性问题，已有多个 PR 尝试修复。`#4764` 标注为 `conflict`，`#4843` 是今日提交的新方案，表明此问题正在被积极攻关。
- **WebUI 文件编辑差异视图** (`#4828`): 一个提升 WebUI 编辑体验的 P2 功能 PR，目前处于开放状态。
- **QQ 通道重连退避** (`#4838`): 为 QQ 通道添加指数退避重连机制的 P2 功能 PR。
- **Telegram HTML 流式溢出** (`#4839`): 修复直播流溢出块时 HTML 解析模式问题的 P1 优先级 PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的Hermes Agent GitHub数据生成的2026-07-08项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026年7月8日

## 1. 今日速览

项目今日活跃度极高，凸显出大型开源社区在密集迭代后的典型状态。过去24小时内，共处理了50条Issue和50个PR，其中合并/关闭的PR和Issue数量（含Bug修复）合计为16个，表明团队在积极消化积压工作。核心关注点集中在部署安全强化、关键平台（Discord/QQ/WhatsApp）的适配器修复，以及多个高优先级Bug（如`write_file()`数据损坏、同步信号冲突）的修复。新发布的v0.18.1补丁版本整合了超过660个PR，为下游用户提供了稳定的基线。

## 2. 版本发布

**Hermes Agent v0.18.1 (v2026.7.7)**

- **发布内容**：这是一个补丁版本，主要整合了自v0.18.0 (7月1日) 以来合并的约660个PR，涵盖了广泛的Bug修复、稳定性加固以及部分进行中的功能工作。
- **影响**：为Docker镜像、托管部署、PyPI安装等下游使用者提供了一个稳定的发布版本。
- **迁移注意事项**：从v0.18.0升级时，请务必参考完整的Changelog（未在数据中提供），确认是否有配置变更或废弃特性。鉴于补丁版本通常不包含破坏性变更，建议平滑升级。

## 3. 项目进展

今日有多项关键修复得到合并或关闭，项目在稳定性和功能性上均有推进：

- **WhatsApp集成大幅优化**：PR #60643 (closed) 将WhatsApp桥接依赖从git提交切换为npm发布版本，将新安装时间从约3分钟缩短至仅约3秒，显著提升了开发者体验和部署效率。
- **桌面端/TUI命令修复**：PR #60644 (open) 修复了桌面应用无法使用`/compress`命令的问题，弥合了TUI网关与桌面UI间的功能鸿沟。
- **Provider兼容性修复**：PR #60645 (open) 修复了`max_tokens`参数在非Anthropic/NIM provider上被静默丢弃的问题，确保MoA (Mixture of Agents) 功能在所有主流LLM提供商上正常工作。
- **安全边界加固**：PR #60636 (open) 为生产部署增加了多项安全措施，包括Bearer令牌吊销、可选的Cookie认证与CSRF防护，以及提供Dockerfile等部署工件，标志着项目向企业级生产环境迈出重要一步。

## 4. 社区热点

今日社区讨论活跃度较高的Issue和PR体现了用户对**部署安全**和**自定义界面**的强烈偏好：

- **[Feature] dashboard: add --allowed-hosts flag for reverse-proxy and Tailscale access** (#34390, 11条评论)
  - **链接**: [Issue #34390](https://github.com/NousResearch/hermes-agent/issues/34390)
  - **分析**: 该Issue是今日最热门的话题，用户强烈呼吁增加`--allowed-hosts`标志以支持反向代理（如Tailscale Serve、Nginx）。这表明越来越多的用户将Hermes Agent用于自托管和小团队协作，对安全性和灵活的网络配置有刚需。
- **[Feature] Make non-core bundled skills optional and keep the default install minimal** (#19986, 9条评论)
  - **链接**: [Issue #19986](https://github.com/NousResearch/hermes-agent/issues/19986)
  - **分析**: 这是另一个长期受关注的功能请求。用户希望默认安装最小化，将非核心技能包设为可选，以减少安装体积、更新负担以及不必要的系统调用。这反映出高级用户对项目“瘦身”的期待。

## 5. Bug 与稳定性

今日报告的Bug数量较多，大部分已有对应的修复PR，项目响应迅速。按严重程度排列如下：

- **P1 (严重)**:
  - `write_file()` commits to disk before its own JSON/YAML/TOML syntax check runs (#60525, open)：这是一个严重的数据安全性问题。文件写入工具在内容检查之前即提交到磁盘，即使内容无效，也会写入成功。已有社区报告，暂无直接fix PR。
- **P2 (高)**:
  - Delegation `background=true`参数被静默丢弃 (#46944, #46960)：影响了异步任务委托的核心功能，导致后台任务退化为同步执行。尚未有Fix PR关联。
  - `delegate.base_url`配置运行时被忽略 (#50199, closed) & 配置修改后因缓存失效无法生效 (#18946, closed): 这一系列关于`delegate`工具配置Bug已得到解决，关联Issue已关闭。感谢社区反馈，该问题的修复改善了多节点协作的可靠性。
  - 多个Discord和QQ平台的Bug (已修复或有关联修复PR)：
    - **Discord**: `allowed_channels`配置失效 (#32263, closed)、已知线程参与限制无法禁用 (#16725, closed)。这些长期存在的平台配置Bug已经修复。
    - **QQ Bot**: `QQAdapter.connect()` 缺少 `is_reconnect` 参数导致重连时崩溃 (#60635, open)。已有重复PR (#60641, open) 提出修复方案。
  - **竞态条件**: `/steer` 命令在特定时序下丢失 (#60543, open)：会话状态管理的一个关键竞态条件，可能导致多轮对话中的控制信号丢失。
- **P3 (中)**:
  - Hermes Desktop上`/compress`命令不可用 (#60603, open)：已有fix PR #60644。
  - Cli中 `hermes -z` (oneshot) 在特定内存provider (Honcho) 下崩溃 (#60616, open)。
  - Discord在Windows上未自动发现ffmpeg (#60624, open)。
  - Git状态报告、配置文件隔离等一系列回归或体验问题。

## 6. 功能请求与路线图信号

- **UI/UX 增强**: `feat(dashboard): add Aurora theme` (PR #57051) 和 `feat(desktop): add Italian locale` (PR #60640) 展示了社区对界面美化和本地化的持续贡献。`feat(desktop): contribution-driven shell` (PR #60638) 则是一个更激进的提案，旨在用一个基于“贡献的平台”模型替换现有的硬编码Shell，如果被采纳，将极大改变桌面端的可扩展性。
- **代码/内存工具增强**: `Enhancement: Pending skill/memory IDs should be sequential` (Issue #60446) 获得了同名的修复PR (#60642)，说明社区对开发工具细节的关注度很高。
- **安全与合规**: `fix: redact sensitive MCP URL query values` (PR #24302, 长期开放) 和 `fix(gateway/cron): make shutdown drain visible to in-flight cron work` (PR #60631) 表明项目正在系统性地加强安全性和任务管理的健壮性，这将是未来几个版本的重点方向。
- **部署可靠性**: `feat(Yuanbao) optimizes media resource processing speed: parallel download` (PR #47303) 和 `Harden Hermes for production deployment` (PR #60636) 都关注于提升性能和生产化能力。

## 7. 用户反馈摘要

从今日的Issue评论中，可以提炼出以下几点真实用户反馈：

- **配置一致性是痛点**：一位用户抱怨 `hermes config set` 对正在运行的进程“静默无效”，这反映了配置热加载机制的不完善，是用户在日常使用中最直接的摩擦点。
- **多Profile下的行为异常**：“Profile隔离”问题出现频率较高，例如桌面应用Shell的`CWD`在切换Profile时不跟随（#54990），以及Discord配置在不同Profile间互相污染（#50404）。这表明多Profile的沙箱化隔离做得不够彻底。
- **对高级功能的信任度不足**：用户报告 `delegate_task(background=true)` 功能和 `/compress` 命令不起作用，并且是“静默退化”（不报错，但功能未生效）。这种静默失败比直接报错更影响用户对AI Agent功能的信任。
- **迁移与部署的摩擦**：从一个provider（OpenClaw）切换到Hermes时，用户遇到了连接问题，这反映出项目在引导用户迁移不同LLM后端方面仍有优化空间。

## 8. 待处理积压

以下为长期未得到维护团队响应的重要Issue或PR，可能被淹没在海量新Issue中，提醒维护者关注：

- **长期开放的PR**: `fix: redact sensitive MCP URL query values` (PR #24302, 创建于2026-05-12)。这是一个涉及安全的重要PR，但已近两个月未被合并或评论。
- **高票功能请求仍未分配**: `Feature: Make non-core bundled skills optional...` (Issue #19986, 创建于2026-05-05，获3个👍)。这是社区呼声很高的优化项，直接关系到项目的基础体验。
- **`Feature: Durable Feedback Routing...`** (Issue #3506, 2026-03-28)。尽管不是今日最热，但描述了一个非常核心的“从反馈中学习”的架构功能，是长期路线图的关键组件，目前讨论较少，可能因为复杂度较高。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 PicoClaw 项目 (github.com/sipeed/picoclaw) 2026年7月7日至7月8日的 GitHub 数据生成的每日项目动态日报。

---

## PicoClaw 项目动态日报 (2026-07-08)

### 1. 今日速览

项目当前处于活跃维护状态，但社区反馈的稳定性问题开始增多。过去24小时内，有5个新/活跃的Issues被提出或讨论，涉及 Bug 和功能请求，同时有2个长期未解决的 Issues 被清理关闭。Pull Requests 方面，有3个待合并的 PR 正在进行代码评审，重点关注功能重构和 Bug 修复。总体而言，项目在稳步推进（特别是 DeltaChat 模块的重构），但涌现的 Bug（尤其是关于工具调用和配置问题）需要维护团队快速响应，以避免影响用户体验。

### 2. 版本发布

(无)

### 3. 项目进展

今日合并/关闭了1个重要的 PR，并在持续推动多个改进：

- **#3157 [已关闭] feat: add Android ADB remote operations tool** ([链接](https://github.com/sipeed/picoclaw/pull/3157))
    - **内容**: 该 PR 为 PicoClaw 增加了实验性的 Android ADB 远程操作工具。它提供了设备列表、状态检查、截屏、UI 层级获取、点击、滑动、输入等基础操作原语，并特地避免暴露任意 shell 执行权限。
    - **分析**: 该功能是 PicoClaw 向实际设备控制和自动化方向的有力尝试，拓宽了其在移动端测试或远程协助等应用场景的潜力。虽然是实验性功能，但设计上对安全性的考量（不暴露 shell）值得肯定。

- 此外，社区活跃的贡献仍在继续：
    - **#3222 [开放]** refactor(deltachat): cleanup implementation, documentation -320LOC ([链接](https://github.com/sipeed/picoclaw/pull/3222)) – 此 PR 对 DeltaChat 模块进行了大量重构，清理了320行代码，并改进了文档，表明项目正致力于提升代码质量和模块化水平。
    - **#3226 [开放]** fix(tools): stop write_file from coaching destructive overwrite (#3150) ([链接](https://github.com/sipeed/picoclaw/pull/3226)) – 这是一个对用户体验至关重要的 Bug 修复，旨在防止 `write_file` 工具在覆盖文件时“指导”模型进行破坏性操作。

**评估**: 项目在功能拓展和内部重构上均取得进展，整体向前迈进了积极的一步。

### 4. 社区热点

过去24小时内，社区讨论焦点主要集中在 **功能请求** 和 **模型兼容性 Bug** 上。

- **#3093 [已关闭] [Feature] I need SimpleX or tox** ([链接](https://github.com/sipeed/picoclaw/issues/3093))
    - **分析**: 该 Issue 虽已被关闭（标记为 Stale），但它反映了用户对去中心化通信协议（如 SimpleX、Tox）集成的强烈需求。这是一个重要的社区信号，表明部分用户希望 PicoClaw 能更深入地支持隐私优先的通信方式。
- **#3195 [开放] [BUG] OpenAI GPT does not work on NanoKVM with default config** ([链接](https://github.com/sipeed/picoclaw/issues/3195))
    - **分析**: 该问题报告了 PicoClaw 在 NanoKVM （一款流行的 KVM over IP 硬件）上配置 OpenAI GPT 模型时失败的情况。这暴露了 PicoClaw 在新硬件平台（NanoKVM v2.4.0）上的兼容性问题，并暗示其默认配置可能在某些环境下不适用。用户对此感到困扰，因为这是他设置 PicoClaw 的核心目标。

### 5. Bug 与稳定性

今日报告的 Bug 主要集中在配置和模型调用方面，按严重程度排列如下：

1.  **高严重性**: **模型工具调用泄漏**
    - **Issue #3153 [开放] [BUG] Volcengine Doubao Seed tool calls occasionally leak as text** ([链接](https://github.com/sipeed/picoclaw/issues/3153))
    - **问题**: 使用火山引擎的 `doubao-seed-2.0-pro` 模型时，工具调用结果会以原始文本 `<seed:tool_call>` 形式返回给用户，而非正常执行。
    - **影响**: 直接导致核心功能（工具使用）失效，影响与该模型配合的所有自动化任务。
    - **状态**: 尚无已知的修复 PR。

2.  **中严重性**: **速率限制（Rate Limiting）失效**
    - **Issue #3232 [开放] [BUG] Rate limiting doesn't work if no fallback models is configured** ([链接](https://github.com/sipeed/picoclaw/issues/3232))
    - **问题**: 当用户仅配置了主模型（`agents.defaults.model_name`）而未设置备用模型时，模型的 RPM（每分钟请求数）限制不生效。
    - **影响**: 可能导致用户意外触发 API 速率限制，增加使用成本或被服务商暂时封禁。
    - **状态**: 该问题为新创建，尚无回复。

3.  **中严重性**: **平台兼容性问题**
    - **Issue #3195 [开放] [BUG] OpenAI GPT does not work on NanoKVM with default config** ([链接](https://github.com/sipeed/picoclaw/issues/3195))
    - **问题**: 在特定的 NanoKVM 硬件和固件上，PicoClaw 无法正常连接 OpenAI。
    - **影响**: 新硬件平台用户入门体验受阻。

4.  **低严重性**: **OAuth 登录失败 & 任务重复**
    - **Issues #3196, #3197 [开放] [BUG]** ([链接](https://github.com/sipeed/picoclaw/issues/3196), [链接](https://github.com/sipeed/picoclaw/issues/3197)): 报告了 Codex 和 Antygravity 平台的 OAuth 登录功能无法工作。
    - **Issue #3159 [已关闭] [BUG] 经常重复任务** ([链接](https://github.com/sipeed/picoclaw/issues/3159)): 记录了模型在多轮对话中错误地重复执行上一个任务的问题。此问题已被关闭，可能已有内部修复或被视为与特定模型相关。

### 6. 功能请求与路线图信号

- **去中心化通信集成**: Issue #3093 （已关闭）提出的对 SimpleX 或 Tox 的支持需求，结合 **PR #3222**（DeltaChat 模块重构），释放出明确信号：项目正在积极优化其去中心化通信（DeltaChat）能力。尽管 SimpleX/Tox 未在 PR 中出现，但清理和改进 DeltaChat 是迈向更广泛去中心化生态的第一步。未来版本可能会看到对更多去中心化协议的原生支持。
- **Android 设备控制**: 已合并的 **PR #3157**（Android ADB 工具）是一个重要的功能请求信号。这暗示了下游社区对“AI 代理控制移动设备”的需求真实存在，并且项目组对此持开放和推进态度。

### 7. 用户反馈摘要

从 Issues 评论和报告内容中，可以提炼出以下用户痛点和使用场景：

- **配置复杂性与失败**: 用户 @rtadams89 在尝试将 PicoClaw 与新硬件 NanoKVM 集成时遇到困难，反映了默认配置或新平台配置文档的引导性不足，可能导致新用户流失。
- **模型兼容性担忧**: 用户 @ms8great 反映了火山引擎模型工具调用泄漏的问题，这表明 PicoClaw 对非主流或较新模型提供商的支持仍有待加强。用户期望“开箱即用”的体验。
- **对破坏性操作的警惕**: **PR #3226** 的提交者 ACMYuechen 的修改，正回应了社区对于 AI 模型可能因工具提示不当而误执行破坏性操作（如覆盖重要文件）的潜在担忧。这是一个深化的安全性考量。
- **频繁的任务重复**: 用户 @oKatTjC 报告的“经常重复任务”问题（尽管已关闭），指出了模型在多轮对话中容易出现的逻辑混乱，这严重影响了使用 AI 进行复杂工作流的效率。

### 8. 待处理积压

以下为长期未响应或处于停滞状态的重要 Issue/PR，建议维护团队重点关注：

1.  **Issue #3195 [开放] [BUG] OpenAI GPT does not work on NanoKVM** ([链接](https://github.com/sipeed/picoclaw/issues/3195))
    - **提醒**: 此问题已开放超过一周，且涉及一个热门硬件平台，可能影响部分用户使用，建议优先排查。
2.  **PR #3222 [开放] refactor(deltachat): cleanup implementation, documentation** ([链接](https://github.com/sipeed/picoclaw/pull/3222))
    - **提醒**: 这是一个代码量级较大、涉及重构的重要 PR，且已开放数日。持续的积压可能会与主分支产生冲突，建议尽快安排评审。
3.  **Issue #3153 [开放] [BUG] Volcengine Doubao Seed tool calls leak** ([链接](https://github.com/sipeed/picoclaw/issues/3153))
    - **提醒**: 这是严重影响特定模型用户的功能性问题，持续悬而未决会损害用户对项目稳定性的信任。

---

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，这是根据您提供的 NanoClaw 项目 GitHub 数据生成的 2026-07-08 项目动态日报。

---

# **NanoClaw 项目动态日报 - 2026-07-08**

## 1. 今日速览

今日项目活跃度显著提升，主要由大规模文档维护和社区贡献驱动。过去 24 小时内共处理了 23 个 PR（其中 9 个已合并/关闭，14 个待合并），修复和优化工作集中在 **安全漏洞**、**CLI 稳定性** 和 **文档同步** 三大领域。此外，一个中等严重性的安全漏洞报告（#2970）和一个新的实用技能贡献（`ncc`）为项目带来了新的关注点。整体来看，项目正处于积极的维护和功能完善阶段。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去 24 小时内，项目在代码质量和文档维护方面取得了实质性进展，共合并/关闭了 9 个 PR。以下是关键合并项：

- **文档大规模更新（#2961, #2962, #2963, #2964）**：贡献者 `glifocat` 完成了一次全面的文档陈旧度清理。更新了 `README`、`CONTRIBUTING`、`architecture.md`、`SDK_DEEP_DIVE.md` 以及数据库实体文档，使其与当前代码（基于 SDK 0.3.197 和迁移 010-018）保持一致。这显著降低了新贡献者和开发者的理解门槛。

- **CLI 关键修复（#2804）**：修复了 `ncl messaging-groups create` 命令因 `NOT NULL constraint failed` 错误导致完全失效的 Bug。该修复由 `sturdy4days` 提交并已合并，恢复了这一核心 API 编排功能。

- **Discord 集成增强（#2922）**：修复了 Discord 频道集成中，无法将转发消息的快照内容正确传递给 Agent 的问题，提升了 Agent 在 Discord 群组中的信息感知能力。

- **Agent Runner 修复（#2965, #2966）**：
    - 修复与最新 `@anthropic-ai/claude-agent-sdk` 的兼容性问题，正确识别速率限制事件。
    - （待确认）修复了 Agent Runner 在 Provider 出错时错误标记任务为“已完成”的问题，改进了任务状态追踪的准确性。

## 4. 社区热点

今日社区讨论高度集中于 **质量保障** 和 **新功能贡献**。以下为最值得关注的 PR：

- **#2974 [OPEN] fix(approvals): claim pending approvals before running the handler**
  - **作者**: sturdy4days | **链接**: [PR #2974](https://github.com/nanocoai/nanoclaw/pull/2974)
  - **分析**: 此修复引入了原子性的“认领”操作（`claimPendingApproval`）来解决审批路径中的并发问题。这表明社区开发者正在深入系统核心，排查并解决在并发场景下可能出现的竞争条件和数据一致性问题，对提升系统可靠性有重要意义。

- **#2971 [OPEN] [PR: Skill, follows-guidelines] Add ncc utility skill: host operational and health CLI**
  - **作者**: zivisaiah | **链接**: [PR #2971](https://github.com/nanocoai/nanoclaw/pull/2971)
  - **分析**: 这是一个新的**实用技能**贡献，旨在添加一个名为 `ncc` 的主机运维与健康状态 CLI 工具。这表明社区在积极为平台构建独立、可复用的工具，扩展 NanoClaw 的运维能力，反应了用户对便捷主机管理的需求。

- **#2970 [OPEN] [Security] Local action forgery via unauthenticated forwarded gateway loopback webhook**
  - **作者**: YLChen-007 | **链接**: [Issue #2970](https://github.com/nanocoai/nanoclaw/issues/2970)
  - **分析**: 这是 **今日社区关注的核心**。报告者发现项目的本地回环 Webhook 缺乏身份验证，存在“本地操作伪造”风险。该漏洞的严重性不容忽视，攻击者可能利用此漏洞在受害者本地环境中执行任意操作。目前该 Issue 尚无评论和 fix PR，需要维护团队优先响应。

## 5. Bug 与稳定性

今日报告的 Bug 和修复主要围绕安全、并发和功能正确性。

- **严重**：
  - **#2970 [OPEN] 本地操作伪造漏洞**：本地 webhook 未认证，存在严重安全风险。**（无 fix PR）**

- **中/高**：
  - **#2973 [OPEN] 供应链配置修复**：`pnpm-workspace.yaml` 中的 `minimumReleaseAge` 配置因被错误地放在 `pnpm:` 键下导致失效，可能使项目依赖存在风险的旧版本包。**（已有 fix PR #2973）**
  - **#2804 [CLOSED] CLI 创建命令崩溃**：已修复并合并的 Bug，原问题导致 `ncl messaging-groups create` 命令无法使用。

- **低**：
  - **#2966 [OPEN] Agent Runner 错误状态追踪**：修复 Provider 错误未被正确标记的问题，提升了监控的准确性。**（已有 fix PR #2966）**

## 6. 功能请求与路线图信号

- **Agent 模板与设置向导（#2909）**：该 PR 引入了模板设置向导和首个 Agent 的快速创建功能，这表明项目正在优化新用户的上手体验，使创建和配置 Agent 的过程更简单、标准化。该 PR 已在 #2890 基础上完成第二部分。
- **频道技能持续丰富**：
  - **#2958 [OPEN] Teams 频道技能重构**：将 Microsoft Teams 技能重构为结构化技能格式（SSF），简化配置流程。
  - **#2972 [OPEN] Slack Socket 模式修复 + 向导 UX 增强**：修复了 Slack 的 Socket 模式路径，并提升了从向导发起技能时的用户体验。
- **外部存储支持（#1598 [OPEN]）**：一个历史悠久的 PR，旨在通过 rclone 和 systemd 提供 WebDAV/S3 远程存储挂载技能。这仍是项目生态扩展的重要方向。

## 7. 用户反馈摘要

今日 Issue 和 PR 评论中反映出的用户痛点与诉求：

- **安全焦虑**：Issue #2970 的报告明确指出本地 webhook 存在未认证的严重安全问题，反映了用户对本地安全审计和高安全性预期的关切。
- **开发者体验**：CLI 命令 `ncl messaging-groups create` 完全崩溃（#2804）是严重的可用性问题，直接阻碍了用户通过 CLI 进行群组管理。
- **功能完整性**：Discord 转发消息未被解析（#2922）和 Telegram 技能文档与实际步骤不符（#2729）等问题，体现了用户对频道技能端到端功能完整性和文档准确性的高要求。
- **易用性**：新 PR（#2971, #2909, #2972）的提交表明，社区开发者正通过贡献新技能和优化设置向导，来主动提升项目的易用性和可操作性。

## 8. 待处理积压

- **#1598 [OPEN] feat: add-remote-storage skill**：该 PR 创建于 2026-04-02，已开放超过 3 个月，是一个重要的基础功能扩展。虽然无最新评论，但其庞大的体量和长期未合并状态值得维护者评估其优先级，决定是推进还是搁置/拒绝。
  - **链接**: [PR #1598](https://github.com/nanocoai/nanoclaw/pull/1598)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-07-08

## 1. 今日速览

项目今日保持较高活跃度，**Issues 更新32条**（新开/活跃22条，关闭10条），**PR 更新50条**（待合并40条，已合并/关闭10条）。核心开发者 `ilblackdragon` 发起了一组批量 PR（#5798-#5809），旨在为 Reborn 组件引入默认构建器模式，提升测试 fixture 的可维护性。**Slack OAuth 大重构**（#5643-#5646、#5668、#5773）系列 PR 全部完成合并，标志着 Slack 集成从配对码模式正式迁移至个人 OAuth 流程。Bug bash 持续产出中，P2/P3 级 UI 和稳定性问题仍占主流。

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### **今日合并/关闭的重要 PR**

| PR | 标题 | 类型 | 影响 |
|---|---|---|---|
| #5280 | [CLOSED] Trace Commons: instance-wide enrollment, per-user profiles, and trace inspection | 功能 | 引入全局 Trace Commons 注册、用户档案和提交追踪检查，配套 DB 迁移 |
| #5643-#5646 | Slack OAuth 栈 1/4 ~ 4/4 (全部合并) | 重构 | 覆盖 CI 扩展、OAuth 基础、配对码→OAuth 替换、遗留字段拒绝，**Slack 集成彻底转型** |
| #5668 | Slack model-B remodel — bot channel + installable tools extension (stack 5/7) | 设计重构 | 机器人频道替代 companion 机制，用户令牌工具可安装 |
| #5773 | Fix Slack OAuth live canary setup | 修复 | 修复 OAuth 直播金丝雀设置的 CI 配置 |
| #5694 | clientActionId() throws on insecure origins | 修复 | 修复非 HTTPS 自部署环境所有变更请求被阻断的问题 |
| #5696 | Hide unsupported operator-config fields from WebUI v2 Inference settings | 修复 | 隐藏不支持的推理设置字段，避免无效请求 |
| #5698 | Surface tool permission save failures in WebUI v2 Settings Tools tab | 修复 | 工具权限保存失败时在 UI 中提示用户 |
| #5554 | Mobile chat layout breaks with horizontal overflow | 修复 | 修复移动端聊天布局水平溢出 |

**项目前进方向**：  
- ✅ **Slack 集成全面 OAuth 化**：从配对码到个人 OAuth，机器人频道成为入口，向后兼容已通过。  
- ✅ **测试基础设施优化**：`ilblackdragon` 的默认构建器系列（#5791 为基栈）覆盖 wasm、MCP、调度器、授权等模块，降低新增字段时的测试维护成本。  
- ✅ **UI 修复持续交付**：移动端溢出、错误提示、推理设置隐藏等问题已修复。

---

## 4. 社区热点

### 🔥 今日评论最多的 Issues

| Issue | 标题 | 评论数 | 热度原因 |
|---|---|---|---|
| #5702 | [bug_bash_P2] GitHub issue search and create capabilities fail with HTTP 403 | 4 | 核心集成故障：GitHub 能力完全不可用，涉及 agents 与外部平台的互操作性 |
| #5705 | Terminal icon in chat UI has no disable option | 2 | 用户界面细节：终端图标无法隐藏，影响不使用的用户 |
| #5557 | Logs deep link requires opening twice to load selected conversation | 2 | 用户体验：深层链接需点击两次，干扰工作流 |
| #5747 | No way to unpair Slack on built-in host-beta mount | 2 | 配对后无法解绑，Slack 集成完善度问题 |

### 🔥 分析：核心诉求

1. **集成稳定性**（#5702）：GitHub 集成返回 403 是严重问题，可能影响依赖 Issue 管理的自动化工作流，属于 bug bash P2 级别。  
2. **用户自主控制权**（#5705、#5747）：UI 元素缺少隐藏选项、配对后无法解除，暴露出可配置性不足。  
3. **导航延迟感知**（#5557）：深层链接的双击问题在 7月2日 已报告，至今未修复，用户等待时间已超一周。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重级别 | Issue | 标题 | 状态 | 关联 PR |
|---|---|---|---|---|
| **P2 (高)** | #5702 | GitHub issue search and create fail with HTTP 403 | 开放，无 PR | — |
| **P2 (高)** | #5776 | Long-output prompt causes repeated model timeouts → generic "invalid result" error | 开放 | — |
| **P2 (高)** | #5701 | Activity panel hides tool details during active run | 开放 | — |
| **P2 (高)** | #5553 | Approval notifications disappear instead of remaining in history | 开放 | — |
| **P2 (高)** | #5708 | Error banners displayed outside chat message stream | 开放 | — |
| **P3 (中)** | #5705 | Terminal icon in chat UI has no disable option | 开放 | — |
| **P3 (中)** | #5557 | Logs deep link requires opening twice | 开放 | — |
| **P3 (中)** | #5704 | Image preview becomes transparent while chat is active | 开放 | — |
| **P3 (中)** | #5706 | Sidebar shows raw thread ID when instance is lagging | 开放 | — |
| **P3 (中)** | #5419 | No option to rename an automation | 开放 | — |
| — | #5787 | Flaky: slack_pairing_redeem_rejects_expired_code (tokio vs chrono TTL race) | 开放 | — |
| — | #3083 | [CLOSED] Duplicate user creation due to missing loading state | 已关闭 | — |

**新增 Bug 发现**  
- #5776：长输出 prompt 导致重复模型超时 → 退化为迷惑性错误，严重影响开发调试体验  
- #5787：Slack 配对测试因定时器与墙钟竞争出现间歇性失败，属于 CI 稳定性隐患

**今日修复的 Bug**  
- #5694、#5696、#5698、#5554 已合并关闭，涉及安全上下文、推理设置、权限保存、移动端溢出等。

**未修复的关键 Bug**  
- **#5702 (GitHub 403)**：外部集成完全失效，无关联 PR，需优先处理  
- **#5553 (批准通知丢失)**：自动化流程关键 UX，无 PR，影响生产使用

---

## 6. 功能请求与路线图信号

| Issue | 功能请求 | 信号强度 | 可能纳入版本 |
|---|---|---|---|
| #5770 | Improve Reborn tool permission selects with a custom dropdown | 中 | 下一轮 UI v2 改进 |
| #5768 | Reborn Projects page has incomplete i18n coverage | 中 | 多语言完善计划 |
| #5786 | Expose OpenRouter upstream provider on ToolCompletionResponse | 中 | 可能随 LLM 后端增强纳入 |
| #5747 | Unpair Slack on built-in host-beta mount | 高 | Slack OAuth 重构后自然需求 |

**趋势判断**：  
- **Slack 生态完善**：OAuth 合并后，解绑、配置等周边功能将跟随进入路线图。  
- **i18n 覆盖提升**：#5768 表明开发者正系统性扫描硬编码字符串，中文本地化用户已受影响。  
- **OpenRouter provider 暴露**：#5786 是 LLM 透明度需求，适合随下一轮后端优化纳入。

---

## 7. 用户反馈摘要

从 Issues 评论中提取的真实用户痛点：

**😟 满意方面**  
- 无明确正面评价记录，但 Slack OAuth 大重构获得多次设计评审认可。  

**😟 不满与痛点**  
1. **GitHub 集成不可用**（#5702）：“the agent cannot interact with GitHub issues despite the integration being configured”。  
2. **错误提示混乱**（#5776）：“degraded into generic 'invalid result' error, hiding the actual root cause”。  
3. **通知不可靠**（#5553）：“notification may flash once and disappear when clicked, or never appear at all”。  
4. **UI 缺乏控制**（#5705、#5747）：“no setting or toggle to hide or disable” / “no user-facing way to undo it”。  
5. **自动化命名不可编辑**（#5419）：“agent auto-generates a name that can be too long, unclear, or truncated”。  

**📌 典型使用场景**  
- 开发者使用 GitHub 集成管理 Issue。  
- 用户通过自动化（Automation）进行邮件/通知处理。  
- Slack 实时频道与 AI Agent 协作。  

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 标题 | 创建时间 | 更新 | 优先级 | 建议 |
|---|---|---|---|---|---|
| #3535 | UI Timestamps are incorrect for conversations | 2026-05-12 | 2026-07-07 | P1 (原标记) | 至今 57 天未关闭，考虑分配 |
| #3081 | Portfolio extension shows misleading "Configure" button | 2026-04-29 | 2026-07-07 | P2 (原标记) | 70+ 天积压，误导用户操作 |
| #4338 | Disconnected state shows misleading execution driver error | 2026-06-02 | 2026-07-07 | P2 (原标记) | 35+ 天未修复 |
| #4108 | Nightly E2E failed | 2026-05-27 | 2026-07-07 | — | CI 持续失败，影响发布质量 |

### 长期未合并的重要 PR

| PR | 标题 | 创建 | 持续 | 风险 | 阻碍因素 |
|---|---|---|---|---|---|
| #5550 | chore(deps): bump everything-else group | 2026-07-02 | 6天 | 低 | Dependabot 自动 rebase，不阻塞但需关注兼容性 |
| #5643 | run all webui_v2 JS tests in CI | 2026-07-04 | 4天 | 中等 | 测试范围扩大，CI 可能变慢，等待最后审核 |

---

**总结**：IronClaw 项目今日在 Slack 集成重构方面取得里程碑式进展，但 **GitHub 集成 403（#5702）** 和 **长输出超时退化错误（#5776）** 是值得立即关注的生产问题。UI 细节改进（隐藏终端图标、深层链接双击）虽为 P3，但累积影响用户满意度。建议下阶段优先处理外部集成稳定性（GitHub）、UX 通知可靠性（批准通知），并清理长期积压的 P1/P2 Issue。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 LobsterAI 项目数据，我已为您生成了 2026-07-08 的项目动态日报。

---

# LobsterAI 项目动态日报
**日期**: 2026-07-08
**数据来源**: GitHub (netease-youdao/LobsterAI)

## 1. 今日速览

今日项目整体活跃度**极高**，主要体现在大量的 PR 合并（15条）及新版本发布上，显示出团队正在快速推进功能迭代和稳定性修复。社区方面，有用户报告了多个严重级别较高的**安全漏洞**（Issues #2286, #2287, #2288），这是今日需要重点关注的风险点。此外，关于**多个 Agent 配置联动**的问题（Issue #2293）也引发了用户的困惑，体现了协作场景下的新痛点。

## 2. 版本发布

- **发布版本**: [LobsterAI 2026.7.7](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.7)
- **发布日期**: 2026-07-07
- **主要更新内容**:
    - **功能增强**:
        - 重新设计了定时任务列表卡片，加入了状态标签、开关、搜索和乐观 UI 反馈。
        - 新增了 xAI (Grok) 的 OAuth 登录支持。
    - **破坏性变更**: 无明确标识。
    - **迁移注意事项**: 若您使用了自定义的 xAI 服务，请注意新版本集成了官方 OAuth 流程，原有配置可能需要调整。建议用户在升级后重新检查并测试其第三方 AI 提供商的连接设置。

## 3. 项目进展

今日核心进展集中于 Agent 协作能力、CRON 任务稳定性及邮件技能优化，项目整体朝着更复杂的协同工作场景迈进。

- **Agent 协作与对话管理**:
    - **功能**: [PR #2285](https://github.com/netease-youdao/LobsterAI/pull/2285) 合并，实现了**委托子Agent协作**功能。允许为 Agent 配置可被委托的协作伙伴，并在 Cowork 会话中创建子会话以实现更持续的协作对话。
    - **稳定性**: [PR #2292](https://github.com/netease-youdao/LobsterAI/pull/2292) 修复了 Cowork 场景下的“steer follow-up routing”问题，并[PR #2289](https://github.com/netease-youdao/LobsterAI/pull/2289) 修复了上下文压缩（compaction）重试时可能产生的状态卡死问题。
- **邮件技能升级**: [PR #2275](https://github.com/netease-youdao/LobsterAI/pull/2275) 为内置的 `imap-smtp-email` skill 增加了**多账户支持**，并提供了完整的账户管理设置界面。
- **安全与性能修复**:
    - [PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407) 为 OpenClaw Token Proxy 的请求体添加了大小限制（10MB），防止内存耗尽攻击。
    - [PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410) 通过防抖批量写入优化了 SQLite 存储的写入性能，以减轻高频率场景下的磁盘I/O阻塞。
    - [PR #1421](https://github.com/netease-youdao/LobsterAI/pull/1421) 引入了缓存机制，优化了 `buildUserMemoriesXml()` 函数，避免了每次构建 prompt 时的全量数据库查询。

## 4. 社区热点

今日社区讨论的热点主要集中在由同一安全研究员 `YLChen-007` 提交的**三个安全漏洞**上：

- **[Security] Unauthenticated local token proxy ...** ([#2286](https://github.com/netease-youdao/LobsterAI/issues/2286))
- **[Security] NIM outbound media flow allows arbitrary host-local file exfiltration ...** ([#2287](https://github.com/netease-youdao/LobsterAI/issues/2287))
- **[Security] HTML preview server follows in-root symlinks ...** ([#2288](https://github.com/netease-youdao/LobsterAI/issues/2288))

**分析**：
1.  **问题性质**：这三个问题均属于**严重性较高**的安全漏洞，涉及本地 token 代理未授权访问、本地文件泄露以及任意文件读取。这揭示了项目在本地服务安全隔离、路径处理及外部资源信任模型上可能存在系统性风险。
2.  **背后诉求**：提交者 `YLChen-007` 显然是一位专业的安全研究人员。其诉求不仅是报告 Bug，更是希望 LobsterAI 项目方能**正视并快速修复这些潜在攻击面**，以提升产品的安全基线。项目方应对此给予最高优先级的关注。

## 5. Bug 与稳定性

今日报告的 Bug 中，安全漏洞占主体，但也存在一些影响用户体验的长期遗留问题。

**严重级别：高**

1.  **多个安全漏洞**：如上所述，`#2286`、`#2287`、`#2288` 三个安全漏洞直接影响用户数据和系统安全。**目前尚无关联的 fix PR**，需要立即响应。
2.  **Agent配置联动** (`#2293`)：用户发现修改一个 Agent 的“关于你”设定会导致所有 Agent 同步变更，这严重破坏了为不同 Agent 设定不同人格/需求的场景。**目前尚无关联的 fix PR**。

**严重级别：中**

3.  **长期遗留 Bug**：今日关闭了数个 4 月报告的陈旧 Issue，包括：
    - 定时任务不生成历史记录 (`#1409`)
    - 概览页时间筛选器无响应 (`#1411`)
    - 概览页“总会话数”显示为0 (`#1414`)
    - 概览页英文 UI 布局错乱 (`#1416`)
    - 技能过多时页面显示异常 (`#1413`)

这些 Bug 的关闭表明项目团队正在清理历史债务，提升核心页面的数据准确性和 UI 适配性。

## 6. 功能请求与路线图信号

- **新功能信号：多 Agent 个性化配置**
    - **Issue**: [#2293 - 多个 Agent 的“关于你”内容联动](https://github.com/netease-youdao/LobsterAI/issues/2293)
    - **与路线图关联性：高**。今日合并的 [PR #2285](https://github.com/netease-youdao/LobsterAI/pull/2285) 正好引入了“代理子Agent协作”功能。这表明 Agent 之间的交互与独立配置是当前开发的重点。用户反馈的“配置联动”问题很可能是该功能初期实现的一个副作用或设计缺陷。**可以预见，下一版本很可能会修复此 Bug，并可能引入更细粒度的 Agent 配置隔离机制**。

- **待观察信号：邮件技能多账户管理**
    - **PR**: [#2275 - 优化邮件技能](https://github.com/netease-youdao/LobsterAI/pull/2275)
    - **说明**：该 PR 目前已合并，为内置邮件技能带来了多账户支持。这表明项目正致力于让实体的通信功能（如邮件）更加健壮，以满足更复杂的个人或团队工作流需求。

## 7. 用户反馈摘要

- **痛点与困惑**:
    - **Agent 配置隔离失败**：用户 `yepcn` 在 `#2293` 中表达了困惑：“我建立了多个agent...没法对不同agent建立不同的需求。” 这表明用户对 Agent 角色的**个性化与独立性**有明确且刚性的需求，当前联动行为无法满足。
- **使用场景**:
    - 用户 `STUPIDDDD0` 通过细致的 Bug 描述（`#1411`, `#1414`, `#1416`），展示了用户正在**深度使用概览页进行数据分析和计划管理**。他们对数据的准确性（总会话数为0）和 UI 的完整性（英文布局错乱）非常敏感。

## 8. 待处理积压

- **[Chore] 依赖更新 PR** ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277))：由 `dependabot` 发起的 Electron 依赖更新 PR，至今已开放**超过3个月**，其中包含从 v40.x 到 v43.0.0 的大版本跳跃。这是典型的**技术债务信号**，建议尽早合并或评估其影响，以避免后续因版本差距过大导致的升级困难。
- **三个新报告的安全漏洞** (`#2286`, `#2287`, `#2288`)：如前所述，这是**最高优先级的待处理事项**。虽然报告不“老”，但性质严重，项目维护者应尽快复现、评估并分配资源进行修复。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

好的，这是根据您提供的 TinyClaw (github.com/TinyAGI/tinyagi) GitHub 数据生成的 2026-07-08 项目动态日报。

---

## TinyClaw (TinyAGI) 项目动态日报 | 2026-07-08

### 1. 今日速览

今日项目遭遇了 **重大安全事件**。过去24小时内，项目共收到 **9 个新 Issue**，且全部为安全相关并由同一提交者 (YLChen-007) 提交。这9个 Issue 涵盖了从**未授权API访问、路径遍历、提示词篡改、文件泄露到命令行逃逸**等一系列严重安全漏洞。当前没有新的Pull Request提交或合并，也无新版本发布。项目活跃度因这些集中的安全问题报告而显著上升，但主要指向**安全审计和紧急修复**，而非功能迭代。

### 2. 版本发布

无

### 3. 项目进展

**今日无任何Pull Request被合并或关闭。** 这表明项目在功能开发或Bug修复方面没有取得可见的前进。所有的关注点都集中在应对新报告的9个安全问题上。

### 4. 社区热点

今日社区最集中的热点就是 **YLChen-007 提交的一系列安全漏洞报告**。这9个Issue均具有极高的讨论价值，因为它们揭示了项目在根本安全架构上的严重缺陷。主要诉求是：

- **身份验证缺失**：多个报告（如 #292, #286）指出控制平面和API端点（如 `/api/message`, `/api/settings`）完全缺乏身份验证。
- **核心操作被滥用**：黑客可直接利用这些漏洞来覆盖系统提示词 (#294, #292)、重启守护进程 (#294)、执行文件路径遍历 (#293) 以及启动危险工具 (#291)。
- **攻击面广泛**：问题涵盖了从本地控制平面到远程API，从配置修改到数据泄露。

**最值得关注的链接：**
- **#294** (未授权控制平面导致提示词覆盖和重启): [TinyAGI/tinyagi Issue #294](https://github.com/TinyAGI/tinyagi/issues/294)
- **#293** (未授权Agent ID路径遍历): [TinyAGI/tinyagi Issue #293](https://github.com/TinyAGI/tinyagi/issues/293)
- **#289** (未授权文件泄露): [TinyAGI/tinyagi Issue #289](https://github.com/TinyAGI/tinyagi/issues/289)

### 5. Bug 与稳定性

今日报告的 **9 个 Issue 全部被列为 [Security] 级别的严重Bug**。核心问题在于API安全设计的缺失，而非普通的代码缺陷。按照严重程度排列如下：

1.  **关键 (Critical) - 远程代码执行/数据泄露**:
    -   #294: 未授权控制面板导致系统提示词覆盖和守护进程重启。
    -   #293: 通过Agent ID 进行路径遍历，逃出工作区。
    -   #289: 未授权API调用者可读取并发送任意本地文件。
    -   #291: 调用Claude工具时，无条件跳过危险工具确认。
    -   #290: 终端逃逸注入，可伪造操作日志。

2.  **高危 (High) - 配置/权限篡改**:
    -   #292: 未授权管理API修改持久化设置和提示词。
    -   #286: 未授权本地控制API允许设置变更和事件流访问。

3.  **中危 (Medium) - 信息泄露/逻辑缺陷**:
    -   #287: 未授权配对管理API允许任意批准待处理发送者。
    -   #288: 未授权本地控制平面泄露事件和允许设置修改。

**修复状态**：所有9个Issue均无关联的Fix PR，目前均处于 `[OPEN]` 状态，尚无定论的修复计划。

### 6. 功能请求与路线图信号

今日无新的功能请求。所有议题均为安全漏洞。这强烈地传递了一个**路线图信号：项目在推进任何新功能之前，必须优先进行安全审计和架构加固**。当前版本在网络安全方面存在根本性的缺陷。

### 7. 用户反馈摘要

今日无来自普通用户的反馈评论。所有的9个Issue均来自安全研究员 (YLChen-007) 的详细漏洞披露。这表明项目目前尚未进入广泛用户的真实使用场景反馈阶段，而是处于**外部安全测试**阶段。这些报告本身就是最强烈的用户反馈：**项目在投入生产环境前，安全性严重不足**。

### 8. 待处理积压

今日无长期未响应的历史Issue或PR。当前项目最大的“积压”就是今日集中报告的 **9个 [Security] 级别的问题**，它们共同构成了一个巨大的技术债务和风险点。维护团队应立即优先处理：
-   为所有控制平面和API端点引入身份验证和授权机制。
-   审查和修复 `POST /api/message` 等核心端点的输入过滤和权限控制。
-   评估和修正外部工具调用（如Anthropic CLI）的安全参数。

**提醒：** 在解决这些问题并发布一个小版本（`0.1.x` 或补丁版本）之前，不建议任何生产级环境部署。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，这是为您生成的 CoPaw 项目2026年7月8日动态日报。

---

## CoPaw 项目动态日报 | 2026年7月8日

### 1. 今日速览

今日项目活跃度极高，**Issues** 更新16条（新开+活跃12条），**PR** 更新38条（待合并23条），标志着 v2.0.0-beta.3 发布后社区反馈和代码贡献进入高峰期。**“前端性能”** 与 **“沙箱安全”** 是今日 Bug 报告的两大焦点；同时，**“定时任务弹窗”** 与 **“系统托盘行为”** 等用户体验优化诉求热度不减。社区贡献者活跃，提交了多项 bug 修复和功能增强 PR，项目整体呈高速迭代态势。

---

### 2. 版本发布

**v2.0.0-beta.3** 于2026年7月7日发布。

- **主要更新内容：**
    - **修复(CI)：** 修复了在 macOS 上 Bash 3.2 环境下 `extra_flags` 空值展开时的兼容性问题。(PR #5743)
    - **特性(身份验证)：** 增强了速率限制功能，实现了多维防护。(PR #5738)
- **破坏性变更：** 未明确提及。
- **迁移注意事项：** 从 v1.x 升级的用户需注意，v2.x 在核心架构上可能引入重大更改，建议先在测试环境进行验证。

**相关链接:** [v2.0.0-beta.3 Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.3)

---

### 3. 项目进展

今日合并/关闭了15个PR，多个重要修复和功能特性被合并进主线。

- **插件生态增强：** 合并了一个大型 PR (#4693)，引入了基于插件的自定义频道注册系统，替代了旧的基于目录的扩展机制。这为未来集成更多第三方消息通道（如 Slack、Telegram 等）提供了标准化的架构。
- **桌面端重大功能：** 功能分支 PR (#5187) “Windows 桌面 GUI 自动化 (UIA + Tauri control mode)” 仍在积极开发中，今日有更新。该功能将允许Agent在Windows桌面上执行鼠标点击、键盘输入等自动化操作，是 Computer Use 能力的关键一步。
- **内存系统优化：** PR (#5820) 已合并，为内存搜索添加了使用量感知（usage-aware）的自动搜索功能，并支持后端特定的嵌入配置，提升了内存模块的智能化水平和灵活性。
- **稳定性修复：** PR (#5786) 合并了三个 Bug 修复，包括控制台中跨 provider 模型匹配问题、飞书(Lark/Feishu)消息中图片渲染问题以及一个记忆相关的崩溃问题。

---

### 4. 社区热点

今日最受关注的议题主要为性能与用户体验。

- **前端性能崩溃 (Issue #5401, #5479):** 这两个问题引发了大量讨论。核心矛盾在于，当前端尝试渲染包含大量工具调用历史或文件体积超过500KB的会话时，会直接白屏/崩溃。社区用户普遍认为，作为核心UI，应对大负载数据有更好的容错和渐进式加载能力。
- **定时任务弹窗开关 (Issue #5797):** 该议题获得广泛共鸣。用户要求将“定时任务弹窗提醒”的决定权交还给用户，而不是开发者替用户做选择（关闭或开启）。他们希望能够在创建定时任务时，精细控制是否弹窗以及弹窗时长。

**相关链接:**
- Issue #5401: [Console: session with large tool-use history fails to render](https://github.com/agentscope-ai/QwenPaw/issues/5401)
- Issue #5479: [大会话文件（>500KB）打开报错](https://github.com/agentscope-ai/QwenPaw/issues/5479)
- Issue #5797: [定时任务结果弹窗提醒应加开关](https://github.com/agentscope-ai/QwenPaw/issues/5797)

---

### 5. Bug 与稳定性

以下是根据严重程度排列的今日新增 Bug 报告：

| 严重程度 | Issue | 问题摘要 | 状态 | 相关PR |
| :--- | :--- | :--- | :--- | :--- |
| **严重 (Crash)** | #5842 | `file_guard` 漏洞：`find -delete` 命令可以绕过“工作区外文件删除”的安全检查。 | OPEN | PR #5843 (已提交修复) |
| **严重 (Crash)** | #5829 | Windows AppContainer 沙箱因 `icacls` 添加的 ACE 继承导致 Hermes Desktop 等 Chromium 应用 GPU 进程崩溃。 | OPEN | 无 |
| **高 (功能失效)** | #5835 | `/stop` 命令在钉钉私聊场景下缺乏用户隔离，导致一个用户发送 `/stop` 会错误地取消另一个用户的任务。 | OPEN | 无 |
| **高 (功能失效)** | #5789 | 上下文压缩（Context Compression）时，模型生成的结构化输出超过JSON Schema限制，导致崩溃。 | OPEN | 无 |
| **中 (性能)** | #5759 | 智能体计划模式下同一文件被反复读取，造成不必要的I/O开销和耗时。 | OPEN | 无 |

**亮点：** 针对严重的安全绕过问题 #5842，社区贡献者 `manjieqi` 已在短短几小时内提交了修复PR (#5843)，体现了社区的快速响应能力。

---

### 6. 功能请求与路线图信号

- **用户体验：** 
    - **桌面端系统托盘 (Issue #5312):** 要求关闭按钮最小化到托盘，而非退出。该请求获得较多关注，符合常驻后台应用的典型使用模式。
    - **配置化文件显示 (PR #5840, #5834):** 首次贡献者为 `grep_search` 工具提出了增强功能，包括 `show_file` 参数控制文件路径显示，以及支持 `|` 分隔的多关键词搜索。这些是提升开发者日常使用体验的良好信号。
- **Agent能力：**
    - **媒体处理精细化 (Issue #5821):** 提出将 `rejects_media` 能力从“全有或全无”改为“按媒体类型控制”，这样当Agent拒绝处理视频时，不会连带拒绝图片。这反映了社区对Agent决策透明度和灵活性的更高要求。
- **集成与扩展：**
    - **渠道消息流 (PR #5585):** 为 Matrix 频道添加了类似 Discord 的流式（Streaming）模式，提升对话实时感。

**路线图预估：** 用户对 **“自定义行为开关”**（如弹窗、最小化到托盘）的呼声很高，很可能被纳入 v2.0.0 正式版或下一个小版本的 UI 改进计划中。同时，**工具链的易用性优化**（如 grep 增强）也值得后续版本关注。

---

### 7. 用户反馈摘要

- **满意点：**
    - 用户对 v2.0.0 预发布版本的 Bug 跟踪机制 (#5273) 表示认可，认为集中式跟踪有助于避免碎片化报告。
- **核心痛点：**
    1.  **前端稳定性：** 大会话文件崩溃是最强烈的负面反馈，严重影响了重度用户的日常使用。
    2.  **“一刀切”式决策：** 用户对开发者代用户决策（如直接关闭弹窗）感到不满，希望获得更多控制权。
    3.  **安全感知：** 沙箱 ACE 污染系统目录的问题，让用户对Windows环境下的安全性产生担忧。
    4.  **跨会话干扰：** 钉钉私聊中 `/stop` 命令的用户隔离问题，暴露了多租户场景下的设计缺陷，对协作办公场景影响较大。

---

### 8. 待处理积压

以下为长期未结或今日需特别关注的事项：

- **关键安全/稳定性Issue：**
    - **#5829**: Windows AppContainer 沙箱污染系统目录。该问题影响系统级应用稳定性，目前尚无修复PR，**建议项目维护者优先响应**。
    - **#5842**: `file_guard` 安全绕过。虽有修复PR，但需尽快合并并发布补丁，防止被恶意利用。
- **需要决策的功能请求：**
    - **#5312**: QwenPaw Desktop 系统托盘。该功能开发量不大但用户呼声高，建议明确是否加入路线图。
    - **#5797**: 定时任务弹窗开关。社区意见对立，需要维护团队做出设计决策。

**相关链接:**
- Issue #5829: [Windows AppContainer 沙箱ACE污染系统目录](https://github.com/agentscope-ai/QwenPaw/issues/5829)
- Issue #5312: [QwenPaw Desktop 点击关闭按钮最小化到系统托盘](https://github.com/agentscope-ai/QwenPaw/issues/5312)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，请看这份由我为您生成的 ZeroClaw 项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-07-08

**分析师:** AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源:** ZeroClaw GitHub 仓库 (github.com/zeroclaw-labs/zeroclaw)
**报告周期:** 2026-07-07 ~ 2026-07-08

## 1. 今日速览

ZeroClaw 项目在过去 24 小时内展现出极高的活跃度，尤其是在 Bug 修复和安全性加固方面。尽管有新 Issue 涌入，但社区和核心贡献者的响应速度极快，当日即有多个重要 PR 被提出，覆盖了从安全漏洞（如 SSRF、常量时间比较）到内存泄漏和功能缺失（如技能创建）等多个关键领域。项目目前处于一个密集的“清理与加固”周期，为下一个功能发布版本做准备。**项目健康度：** 高，但需关注大量待处理的 P1/P2 高优先级 Issue。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日项目在修复关键 Bug 和推进核心功能重构方面取得了显著进展，多個高优先级 PR 被创建或完成。

- **安全加固：**
    - **[PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)**：为 `image_gen` 工具添加了 SSRF (服务器端请求伪造) 防护，防止因恶意图片 URL 导致的内部网络攻击。
    - **[PR #8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824)**：修复了 WebSocket nodes 端点认证中存在的时序攻击漏洞，改用 `constant_time_eq` 进行比较。
    - **[PR #8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)**：为 `/model --agent` 命令增加了基于发送者的授权检查，防止未授权的 agent 操作。

- **重大 Bug 修复（工具系统与内存）：**
    - **[PR #8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817)**：针对 Issue [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) 中报告的 MCP 工具 schema 克隆导致 RSS 内存无限增长的问题，通过 `Arc` 共享 schema 来消除每次循环的克隆开销，是解决 OOM 问题的关键一步。
    - **[PR #8805](https://github.com/zeroclaw-labs/zeroclaw/pull/8805)** & **[PR #8788](https://github.com/zeroclaw-labs/zeroclaw/pull/8788)**：修复了技能 (`skills`) 系统中的两个重要 Bug：1) 技能提示词广告的可调用工具集与实际注册的不匹配；2) 技能注册的工具完全绕过了 `excluded_tools` 黑名单过滤。这两个 PR 共同修正了技能工具的权限控制逻辑。

- **核心特性开发分支：**
    - **[PR #8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784)**：作为 Issue [#7846](https://github.com/zeroclaw-labs/zeroclaw/issues/7846) 重构工作的第一部分，开始重新设计 Agent 入口点的“分裂-历史”循环合约，旨在为未来引入 `before_llm_call` hook 铺平道路。

## 4. 社区热点

今日社区讨论集中在几项核心功能的严谨性问题上，反映出用户对项目安全性和可用性的高要求。

- **#1 热点: [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) - `tool_filter_groups` 对真实 MCP 工具无效**
    - **分析:** 9 条评论。此 Issue 揭示了 `tool_filter_groups` 配置功能在 MCP 工具上完全失效的两大 Bug（前缀检查不匹配、与 `deferred_loading` 无集成），这直接影响用户对 MCP 工具访问控制策略的配置。社区对此高度关注，因为它触及了安全与功能的核心。

- **#2 热点: [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) - 为高风险 shell 命令增加确认层级**
    - **分析:** 6 条评论。此 RFC 提议提供“允许/询问/拒绝”三级 shell 命令执行策略，这是对当前仅有“允许/拒绝”二选一的重要补充。社区讨论热烈，表明用户期望更精细、更安全的操作控制，尤其在自动化场景下。

- **#3 热点: [Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) - 发布全渠道的预编译资产**
    - **分析:** 5 条评论。用户对当前仅提供默认预编译包感到困惑，因为当配置了未包含的渠道时无法运行。此 Issue 代表了一个典型的“打包与发布”痛点，社区希望官方能提供更全面的分发选择。

## 5. Bug 与稳定性

今日报告的 Bug 数量和严重级别都较高，但所幸大部分已有对应的修复 PR。

**严重 Bug (高风险/关键路径):**
- **S1 - 工作流阻塞:**
    - **[Issue #8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794)**：在 Web Dashboard 中中途停止 agent 会擦除其上下文和思考过程，导致后续对话无法理解已发生的事实。**暂无对应修复 PR。**
- **S2 - 功能退化:**
    - **[Issue #8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800)**：Windows 平台下，强制杀死 ZeroClaw 进程会导致端口被僵尸进程占用，新守护进程无法启动。**暂无对应修复 PR。**
    - **[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)**：MCP 工具 schema 克隆驱动无界 RSS 增长，是导致 OOM 的原因之一。 **已有修复 PR [#8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817)**。
    - **[Issue #8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)** (已关闭): SOP 引擎中的 `advance_step` 缺少运行状态守卫，允许驱动绕过审批门。 **已通过[PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8678)修复。**
    - **[Issue #8804](https://github.com/zeroclaw-labs/zeroclaw/issues/8804)**：技能系统提示中宣传的可调用工具集与实际注册不匹配。 **已有修复 PR [#8805](https://github.com/zeroclaw-labs/zeroclaw/pull/8805)**。
    - **[Issue #8787](https://github.com/zeroclaw-labs/zeroclaw/issues/8787)**：技能注册的工具绕过了 `allowed_tools/excluded_tools` 过滤。 **已有修复 PR [#8788](https://github.com/zeroclaw-labs/zeroclaw/pull/8788)**。
- **S3 - 次要问题:**
    - **[Issue #8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797)**：`bind-telegram` 设置的错误信息指向了一个未知的配置属性。 **已有修复 PR [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823)**。
    - **[Issue #8791](https://github.com/zeroclaw-labs/zeroclaw/issues/8791)**：Web Dashboard 左侧边栏宽度错误导致出现水平滚动条。 **暂无对应修复 PR。**

## 6. 功能请求与路线图信号

- **高概率纳入下一版本的功能：**
    - **[Issue #8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) - 日志持久化与轮换配置热重载:** 已有非常具体的修复 PR [#8816](https://github.com/zeroclaw-labs/zeroclaw/pull/8816)，预计将很快合并。
    - **[Issue #8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) - Agent 创建新技能:** 社区和开发者 (maksyms) 均认为这是关键能力。目前尚无对应的 PR，但 Issue 讨论表明这是一个高优先级的增强功能。
    - **[Issue #8803](https://github.com/zeroclaw-labs/zeroclaw/issues/8803) - 折叠已完成的中间步骤:** 来自社区成员的UI/UX改进建议，直接提升了 Web Dashboard 的可读性。目前尚无对应的 PR。

- **长期路线图信号：**
    - **[Issue #8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) - 统一 /ws/chat 和 /acp 协议:** 这是一个深入的架构 RFC，提议将两个并行的 WebSocket 通道合并为一个统一的线路协议。这表明社区开始关注长期架构的简化和标准化，是 v0.9 或更高版本的潜在方向。

## 7. 用户反馈摘要

从今日的 Issue 评论中，我们可以提炼出以下用户痛点和诉求：

- **配置与体验不一致：** 用户 (Moulde) 指出 Telegram 设置指引与 CLI 行为不匹配，直接导致设置失败，这是新手遇到的典型挫折。
- **对“Slop”的批评：** 用户 (cr3a7ure) 在 [Issue #8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) 中直言“文档错误”，并批评“如果实现不正确，slop 仍然是 slop”，表达了对文档质量和功能实现严谨性的不满。
- **寻求更精细的控制：** 用户 (NiuBlibing) 在 [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) 中提出“ask/allow/deny”三级策略，反映了高级用户希望在自动化和安全性之间找到更好平衡点的需求。
- **关键工作流中断：** 用户 (susyabashti) 在 [Issue #8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) 中报告“停止 agent 会擦除上下文”，这是一个严重的 S1 工作流阻塞 Bug，直接影响用户体验。

## 8. 待处理积压

以下 Issue 及 PR 较长时间未获得维护者响应或更新，建议关注。

- **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) - `tool_filter_groups` 对 MCP 工具无效（最后更新：2026-07-07）**
    - **风险:** 高。这是一个存在近两个月的 P1 (优先级最高) Bug，直接破坏了 MCP 工具的核心配置功能。虽已有详细的分析和复现步骤，但尚未有关联的修复 PR。考虑到其风险等级和影响范围，应优先处理。

- **[Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) - 发布全渠道预编译资产（最后更新：2026-07-07）**
    - **风险:** 中。该 Issue 被标记为 `blocked` 且 `needs-maintainer-review`。近三周无维护者回复，社区讨论活跃（5条评论），但进展停滞，可能阻塞用户升级或尝试新渠道。

- **[PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) - 集中化延迟 MCP 访问策略（最后更新：2026-07-08）**
    - **重要性:** 高。此 PR 旨在修复 Issue #6699 和 #8642 相关的问题，是解决 MCP 工具权限和内存问题的核心。该 PR 自 6 月 29 日创建以来，经历了10天的审查周期，且标签包含 `risk:high`，需尽快决定是否合并或要求修改，以避免代码冲突和后续开发依赖。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*