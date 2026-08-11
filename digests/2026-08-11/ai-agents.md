# OpenClaw 生态日报 2026-08-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-11 01:51 UTC

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

# OpenClaw 项目动态日报 — 2026-08-11

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持了极高的社区活跃度，共计 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 413 条、待合并 PR 332 条。项目当前无新版本发布，开发重心集中在稳定性修复与架构重构上。值得关注的是，**消息重复发送**（Telegram/Discord/Feishu 多通道）和 **OAuth 认证刷新**（Codex/OpenAI/Claude CLI）仍是社区反馈最集中的两大痛点，且多个相关修复 PR 处于待合并状态，表明维护者正在系统性地处理这些回归问题。此外，`steipete` 主导的一系列大型重构 PR（如 #114388、#121715、#121768）显示了项目在推进多代理所有权模型、内部架构整洁化方面的明确决心。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共 168 条，主要集中在 Bug 修复和小型功能改进。值得注意的进展包括：

- **原生 Codex 钩子中继的配置开关**（PR #121668）：`nvtoroy` 提交了为原生 Codex 钩子中继添加 kill-switch 的配置项，该 PR 取代了经过三周评审的旧 PR #111205，以更干净的单提交形式等待合并。这将为之前报告的"分离子代理丢失钩子中继"问题（Issue #111010）提供缓解手段。

- **安全修复：集中化 provider 诊断信息脱敏**（PR #121599）：`steipete` 提交的 PR 修复了 provider/transport 终端失败后诊断信息可能保留未绑定或敏感数据的问题，涉及凭据、二进制/媒体载荷的保留风险，属于安全边界加固。

- **多代理所有权模型显式化（H2-1 核心）**（PR #114388）：`steipete` 的 XL 级重构 PR 移除了持久化的 `default: true` 代理标记，使选择逻辑确定性化——单代理可隐式选中，而多代理场景必须显式指定所有者。这为多代理团队的可靠性奠定了基础。

- **模型注册表崩溃修复**（PR #116116 已关闭）：生成的 Anthropic catalog.json 违反自身 schema 导致 `openclaw models` 所有 CLI 命令崩溃的问题已通过关闭 PR 解决，修复了成本叠加（cost overlay）和未防护的解引用路径。

- **内存多模态索引范围收窄**（PR #121627）：修复了多模态图像/音频嵌入从预期的 `memory.search.extraPaths` 范围意外扩散到默认 `memory/` 目录扫描的问题。

---

## 4. 社区热点

### 最热 Issue：#121058 — 静默回复失败持续复发（48 评论）
**链接**: https://github.com/openclaw/openclaw/issues/121058

该 Issue 是今日讨论度最高的话题。#116277 被关闭后，监控 cron 仍持续记录到静默回复失败的新发生案例。社区成员对该问题"关闭后仍在发生"的现状表达了明显不满，反映用户对问题跟踪透明度和修复有效性的关注。这可能是维护者需要重新打开或深入调查的信号。

### 次热 Issue：#7707 — 内存信任标签功能请求（34 评论）
**链接**: https://github.com/openclaw/openclaw/issues/7707

自 2026-02-03 创建以来持续获得关注，用户要求按来源（用户命令、网页抓取、第三方技能）为代理内存条目标记信任级别，以防止通过不可信内容进行内存投毒攻击。该 Issue 已带 `needs-product-decision` 标签，属于安全相关的基础能力，值得产品团队优先评估。

### 高活跃 PR 趋势
多个大型重构 PR（#114388、#121715、#121768、#121536）均由 `steipete` 提交，集中在内部架构整洁化——包括多代理所有权、gateway 内部调用迁移到类型化门面、消除导出名称冲突、移除 Sqlite 命名遗留。这些重构虽不直接面向用户，但体现了项目在规模化过程中对代码质量的持续投入。

---

## 5. Bug 与稳定性

### P1 级（严重）

| Issue | 问题描述 | 状态 |
|-------|---------|------|
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | **5.20 更新后 Telegram 代理重复回复 2-10 次**（回归），5.22 部分缓解但仍未完全修复 | 已关闭 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | **会话记录投影在持续写入下可能活锁**，阻塞主线程导致所有通道传输停滞 | 开启，有源码复现 |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | **iOS/WebChat 消息写入记录但不触发助理回复**，`--deliver` 无法投递 | 开启，有源码复现 |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | **多条独立路径导致 Telegram 重复消息**，涉及至少三条确认路径 | 已关闭 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | **Codex OAuth 刷新成功但 cron/heartbeat 因 10 秒超时失败**，regression | 开启 |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | **Gateway 冷启动回归约 2.5 倍**（2026.7.1-beta.1 → 2026.7.2-beta.7） | 开启 |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | **Claude CLI OAuth 刷新仍卡死主通道**，#73682 修复未生效 | 开启 |
| [#111010](https://github.com/openclaw/openclaw/issues/111010) | **分离的原生 Codex 子代理在父回合释放后丢失钩子中继** | 开启，已有对应 PR #121668 |

### P2 级（中等）

- [#97616](https://github.com/openclaw/openclaw/issues/97616)：hook/tool 子进程泄漏导致僵尸进程积累、运行时性能下降
- [#120735](https://github.com/openclaw/openclaw/issues/120735)：Telegram 贴纸作为裸文件引用到达，无描述且未暂存到磁盘
- [#114690](https://github.com/openclaw/openclaw/issues/114690)（已关闭）：Discord 来源回复在原生 Codex 压缩后同一回合可被再次发送
- [#119796](https://github.com/openclaw/openclaw/issues/119796)：Windows 上 vitest teardown 因 agent 状态数据库句柄未释放而 EBUSY 失败
- [#114020](https://github.com/openclaw/openclaw/issues/114020)：2026.7.2-beta.4 后所有 Feishu 通道分发失败，`runChannelInboundEvent requires runDispatchLifecycle`

### 趋势分析

**消息重复发送**已成为跨通道的系统性问题（Telegram #86519、#96242；Discord #114690；Feishu #49381），且多个相关 Issue 被标记为"已关闭"后仍复发（如 #121058）。这表明底层投递机制可能仍存在根本性设计缺陷，而非简单的通道适配问题。值得注意是 PR #121369 中提到的 `message-delivery` 合并风险标记，以及 PR #121601 对 PTY 终端与 gateway 更新冲突的修复，均显示维护者正在相关领域投入修复。

此外，**OAuth 刷新问题**持续困扰 Codex、OpenAI 和 Claude CLI 用户（#89278、#83598、#98702、#118793），且 PR #112932 尝试解决 Codex 重新登录后仍重试死亡本地授权的问题——该 PR 已标记 `needs proof`。

---

## 6. 功能请求与路线图信号

### 高潜力候选（已有对应 PR 或产品决策标签）

| Issue | 功能需求 | 信号 |
|-------|---------|------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **内存信任标签**：按来源为代理内存条目标记信任级别，防投毒 | `needs-product-decision`，34 评论 |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | **子代理完成通知的 `announceTarget` 路由选项**，支持主代理编排多步工作流 | `linked-pr-open`，👍 5 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | **Gateway 级每代理成本预算执行**（日/月上限） | `linked-pr-open`，14 评论 |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) | **每个子代理的工具使用限制**，用于 DMZ 隔离的防注入管道 | `needs-security-review` |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | **备份 CLI 的 .gitignore 风格排除模式** | `linked-pr-open` |
| [#33413](https://github.com/openclaw/openclaw/issues/33413) | **Slack 线程状态显示工具级进度**而非静态"typing" | 👍 3 |
| [#38568](https://github.com/openclaw/openclaw/issues/38568) | **系统提示中注入上下文窗口使用百分比** | 👍 2 |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | **上下文长度超限时触发模型回退** | 持续关注，👍 0 但涉及核心能力 |

### 线路图信号

- **内存授权架构**：PR #121421（多人内存设计文档）和 PR #121423（影子模式检查所选内存后端的授权表面）表明内存安全与多代理隔离是当前的重点方向。
- **浏览器/管理访问**：PR #121459 允许受限浏览器请求管理访问，配合 #121381，显示管理面安全正在加强。
- **Gateway 内部架构整洁化**：`steipete` 主导的大型重构（#121715、#121768、#121536、#121779）持续降低内部耦合，为后续功能迭代铺路。

---

## 7. 用户反馈摘要

### 主要痛点

1. **"修复未生效"的挫败感**：#121058 用户指出 #116277 关闭后问题仍持续发生，监控 cron 仍在记录新案例——反映了用户对问题修复有效性和关闭标准的不信任。

2. **消息重复回复严重干扰使用**：#86519 用户报告 Telegram 上代理对单条消息重复回复 2-10 次，升级到 5.22 后仍重复 2-3 次。这类问题直接影响用户对代理可靠性的信心。

3. **静默失败无可见性**：#113181（cron delivery.mode="none" → 状态 ok 但未投递，无错误抛出）和 #90789（Claude CLI 合成 "No response requested." 占位符导致 Telegram 完全静默）均属"无声失败"类问题。用户在 Issue 中表达了希望这类情况至少能产生可观察的告警。

4. **配置复杂度与文档缺失**：多个用户请求配置项以控制已有行为——如 #119401 请求强制可见回复的开关、#39406 请求抑制瞬态工具错误警告的选项。这表明默认行为未能满足多样化的用户场景（如小型/本地模型需要可见回复）。

5. **安全边界意识增强**：#7707 的内存投毒防护请求和 #15032 的子代理工具限制请求显示，用户对 LLM 安全威胁（提示注入、不可信内容影响代理行为）的认知正在提升，并主动寻求平台级防护。

### 用户使用场景亮点

- [#119401](https://github.com/openclaw/openclaw/issues/119401)：用户使用**小型/本地模型**，需要可见回复来调试和验证输出，但被无条件剥离 NO_REPLY 的策略所阻。
- [#28300](https://github.com/openclaw/openclaw/issues/28300)：用户请求 Control UI 主题定制系统（6 个预设主题 + 自定义主题工作室），点赞 👍 5，显示对界面个性化的需求。
- [#121421](https://github.com/openclaw/openclaw/pull/121421) 配套的多人内存设计：多代理团队场景中，不同代理需要保持私有、会话、角色和共享内存的隔离。

---

## 8. 待处理积压

### 长期未响应的关键 Issue

| Issue | 创建时间 | 标签 | 说明 |
|-------|---------|------|------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | `needs-product-decision` | **内存信任标签**功能请求，已积压超 6 个月，34 评论，安全相关，建议产品团队尽快决策 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 2026-03-08 | `needs-product-decision` | **write 工具缺少追加模式**导致隔离 cron 会话覆盖共享文件，12 评论，涉及数据丢失风险 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | 2026-03-13 | `needs-live-repro` | **Cron 任务在 LLM API 持续故障时静默超时**而非快速失败，9 评论 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 2026-05-16 | `needs-product-decision` | **隔离 cron agentTurn 设置超时**，所有备用模型均失败，7 评论 👍 2 |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | 2026-07-26 | `not-repro-on-main` | **bundle-mcp 工具通过策略检查但代理会话永不捆绑**，7 评论，可能需要维护者在最新 main 上复现 |

### 需关注的 PR 阻塞

- **PR #121668**（Codex 钩子中继 kill-switch）：已标记 `waiting on author`，等待作者响应维护者评审意见。
- **PR #114388**（多代理所有权显式化）：XL 级 PR，已标记 `waiting on author`，作为 H2-1 核心拆分，可能被更大的路线图阻塞。
- **PR #121327**（冻结已安装工具配置文件权限）：XL 级安全相关 PR，已标记 `waiting on author`，与 RFC #48 关联。
- **PR #121459**（限制浏览器请求管理访问）：XL 级，已标记 `waiting on author`。
- **PR #112932**（Codex 重新登录后仅重新播种 tombstoned OAuth 目标）：自 7-23 创建以来已超两周，仍标记 `needs proof`，涉及 OAuth 核心路径，建议加速评审。

---

*本日报基于 2026-08-11 OpenClaw GitHub 仓库公开数据自动生成，链接均指向原始 Issue/PR 页面。*

---

## 横向生态对比

好的，作为您的资深技术分析师，基于您提供的 2026-08-11 各项目动态日报，我为您生成以下横向对比分析报告。

---

### 1. 生态全景

2026年8月中旬，个人 AI 助手与自主智能体开源生态呈现出**高基数、高活跃、深水区攻坚**的态势。头部项目（如 OpenClaw）日处理 Issue/PR 数量已超千条，显示出极强的社区吸引力和迭代速度，但同时也暴露出**消息可靠性**、**OAuth 认证**等共性基础问题的反复。与此同时，生态内部已出现明显的**分化**：一方面，以 OpenClaw、ZeroClaw 为代表的项目正进行大规模架构重构（如多代理所有权模型、安全审计），向企业级和复杂编排演进；另一方面，以 NanoBot、CoPaw 为代表的项目则聚焦于**WebUI 体验、插件生态和功能易用性**，争夺大众用户市场。**安全与隐私**（内存投毒、密钥隔离、供应链）正从边缘话题演变为社区最核心的诉求之一。

---

### 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本 | 核心动态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (413 活跃) | 500 (332 待合并) | 无 | 架构重构、消息重复/OAuth痛点修复、多代理所有权模型 | ★★★★☆ (高活跃，稳定与可靠性问题待解) |
| **NanoBot** | 4 (3 关闭) | 24 (14 待合并) | 无 | WebUI安全、MCP OAuth支持、修复token无限消耗bug | ★★★★☆ (迭代快，但有PR积压和冲突) |
| **Hermes Agent** | 100 (43 活跃) | 100 (44 待合并) | 无 | Windows平台回归、子进程凭据安全、SQLite fd泄漏 | ★★★★☆ (响应快，但平台稳定性和安全问题突出) |
| **PicoClaw** | 4 | 9 | 无 | 安全边界加固、Telegram富文本、整体活跃度下降 | ★★★☆☆ (中等活跃，维护者响应放缓，有stale标记) |
| **NanoClaw** | 3 | 20 (10 待合并) | 无 | 消息静默丢失、Telegram配对码安全、远程MCP支持 | ★★★★☆ (活跃，核心痛点聚焦消息可靠性) |
| **NullClaw** | 1 (1 关闭) | 1 | 无 | A2A客户端能力收尾、Docker基础镜像升级 | ★★★☆☆ (较低活跃，进入平稳期，有技术债) |
| **IronClaw** | 50 | 50 | **v1.1.1-rc.1** | 渠道统一模型、Agent断言修复、紧急补丁候选版 | ★★★★☆ (高活跃，架构重构与技术债清理并进) |
| **LobsterAI** | 1 (1 关闭) | 34 (14 待合并) | 无 | 网关稳定性、Cowork协作体验、依赖大版本升级 | ★★★★☆ (内部开发效率高，但社区互动低) |
| **TinyClaw** | N/A | N/A | N/A | 无活动 | 不适用 |
| **Moltis** | 3 | 2 | 无 | Apple Container后端回归、会话管理PR待合并 | ★★★☆☆ (中等活跃，后端模块需关注) |
| **CoPaw** | 39 (34 活跃) | 50 (33 待合并) | **v2.1.0b2** | v2.1.0发布冲刺、大量UI/UX修复、中文输入法崩溃 | ★★★★☆ (高活跃，但存在Beta期引入的兼容性问题) |
| **ZeptoClaw** | N/A | N/A | N/A | 无活动 | 不适用 |
| **ZeroClaw** | 50 | 50 (49 待合并) | 无 | S0/S1级安全审计、RFC流程优化、PR积压严重 | ★★★☆☆ (高讨论度，但合并率极低，安全风险暴露窗口长) |

---

### 3. OpenClaw 在生态中的定位

OpenClaw 在生态中处于**绝对的核心与领导者地位**。

- **规模优势**：其单日 500+ 的 Issue/PR 流量远超其他任何项目（如 Hermes Agent、CoPaw 的 100/50 条），社区体量和问题反馈量级不在一个维度，这既是其影响力的证明，也是其面临挑战的根源。
- **技术路线**：OpenClaw 正通过 `steipete` 主导的一系列 XL 级重构，建立一个**更健壮、更清晰的核心架构**，特别是**多代理所有权模型**和**Gateway 内部整洁化**。这标志着项目正从“能跑”向“在企业级场景下可靠地跑”演进，是其他项目尚未触及的深度。
- **问题焦点**：其面临的核心挑战（消息重复、OAuth刷新）也映射了整个生态的“**最后一公里**”难题——即代理与应用户之间交互的可靠性和身份认证的稳定性，这是所有发展到一定规模的项目都将面临的问题。
- **对比**：相比 Hermes Agent 的深度用户定制、ZeroClaw 的激进安全审计，OpenClaw 更像是一个**稳健的巨轮**，通过大规模重构来系统性解决问题，为整个生态的成熟度定下基调。

---

### 4. 共同关注的技术方向

多个项目不约而同地在以下方向发力，表明这些是当前 AI 智能体落地的共性痛点：

1.  **消息投递的可靠性与确定性**
    - **涉及项目**：OpenClaw、NanoClaw、IronClaw、LobsterAI。
    - **具体诉求**：解决消息重复发送、静默丢弃、错误路由等问题。例如，OpenClaw 的 #121058 和 NanoClaw 的 #3226 都指向用户“被无视”的糟糕体验。IronClaw 的 #7336 和 LobsterAI 的 #2454 则是在修复因工具循环或重复消费导致的异常。这表明**“送达”比“生成”更关键**。

2.  **安全边界的构建与加固**
    - **涉及项目**：OpenClaw、Hermes Agent、ZeroClaw、PicoClaw、NanoClaw。
    - **具体诉求**：从 OpenClaw 的记忆信任标签（#7707），到 Hermes Agent 的子进程凭据泄漏（#82936），再到 ZeroClaw 的系统性安全审计（#9389系列），都指向对**提示注入、数据越权、供应链攻击**的防御。这已成为所有严肃项目的“必修课”。

3.  **Gateway 与多通道（渠道）管理的复杂性**
    - **涉及项目**：OpenClaw、IronClaw、LobsterAI。
    - **具体诉求**：将 Telegram、Discord、Slack 等不同渠道抽象为统一模型（IronClaw #7477），并解决网关稳定性问题（LobsterAI #2454）。这反映了智能体从“单点连接”向“多平台分发中枢”演进的趋势。

4.  **配置与权限系统的灵活性**
    - **涉及项目**：PicoClaw、CoPaw、ZeroClaw。
    - **具体诉求**：用户不再满足于内置默认值，而是要求细粒度的控制，如 PicoClaw 的 `customAllowPatterns` 修复（#3314），CoPaw 的单会话模型覆盖（#5992），以及 ZeroClaw 的 per-model 配置（#7100）。**“可配置性”正成为用户选择框架的关键考量**。

---

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全功能、多代理、企业级编排 | 高级开发者、希望构建复杂自动化团队的用户 | Rust 核心，强调架构清晰度、多代理所有权、大规模重构 |
| **Hermes Agent** | 深度定制、多租户、桌面端体验 | 开发者、需要高度集成和自定义工作流的用户 | 基于 Python，关注与本地环境深度集成（如子进程、桌面应用） |
| **NanoBot / NanoClaw** | 轻量、易用、WebUI、MCP 生态 | 个人开发者、快速原型验证、注重开箱即用体验的用户 | 脚本语言优先（Python/TS），聚焦 WebSocket/WebUI 的现代交互 |
| **ZeroClaw** | 安全优先、防御纵深、审计 | 对安全有极致要求的企业或组织 | Rust 实现，正在进行大规模外部安全审计，强调默认安全 |
| **IronClaw** | 渠道整合、统一模型、生态集成 | 需要统一管理多个通信渠道的用户 | 强调渠道抽象，与 Near AI 生态深度绑定 |
| **CoPaw** | 桌面应用、Creator 插件、跨平台 | 非程序员、创意工作者、希望有成熟 GUI 用户体验的用户 | 插件化架构，注重 Windows/macOS 原生集成和发布节奏 |
| **PicoClaw / Moltis / NullClaw** | 特定场景或轻量部署 | 嵌入式（树莓派）、后端沙箱、A2A 协议探索者 | 更聚焦，体量较小，在特定技术点（如 A2A、容器化）上深耕 |

---

### 6. 社区热度与成熟度

- **第一梯队：快速迭代与规模化重构期**：**OpenClaw**、**Hermes Agent**、**ZeroClaw**、**IronClaw**。这些项目日活极高，讨论深入，正在处理由规模带来的架构、安全和稳定性的根本性问题。它们处于行业定义的领先地位，但“成长的烦恼”也最多。
- **第二梯队：功能迭代与生态建设期**：**CoPaw**、**NanoBot**、**NanoClaw**、**LobsterAI**。这些项目开发活跃，功能更新频繁，更注重用户体验和插件生态，处于快速上升期，正在巩固自己的细分市场。
- **第三梯队：平稳发展与维护期**：**PicoClaw**、**Moltis**、**NullClaw**。这些项目活跃度中等或偏低，核心维护者响应放缓（如 PicoClaw 的 `[stale]` 标记），但仍保持对关键贡献的合入，处于维护和渐进式发展状态。
- **不活跃**：**TinyClaw**、**ZeptoClaw** 在报告窗口内无任何活动。

---

### 7. 值得关注的趋势信号

1.  **从“模型能力”到“工程可靠性”的范式转移**：社区最热门、最尖锐的议题已不再是模型效果，而是 `消息重复`、`静默失败`、`OAuth 失效`、`资源泄漏` 等工程问题。这标志着 AI 智能体正在从“玩具”走向“生产工具”，开发者需要将更多精力投入到 **可观测性、容错机制和资源治理** 上。

2.  **“默认安全”成为硬性要求**：ZeroClaw 的系列 S0 级漏洞和 Hermes Agent 的凭据泄漏问题表明，安全不再是可选项。对于智能体这种能自主行动、访问外部世界的软件，**严格的沙箱、权限隔离和审计日志**将逐渐成为标配。开发者在设计之初就应考虑威胁模型，而非事后补救。

3.  **Token 经济性成为新的战场**：NanoBot 的 #5324（10M+ token 消耗）和 ZeroClaw 的 token 用量记录 API（#5299）表明，随着智能体自主执行复杂任务，**token 消耗的失控风险**正促使开发者关注成本治理和用量限制，这将成为未来框架的核心竞争力之一。

4.  **多代理（Multi-Agent）协作走向深水区**：OpenClaw 的“多代理所有权模型”和“子代理通知路由”表明，多代理已从概念演变为需要解决**确定性、数据隔离和任务编排**等具体工程问题的阶段。对于希望构建复杂 Agent 网络的开发者，理解并利用这些架构特性将至关重要。

5.  **A2A 等互操作协议开始落地**：NullClaw 的 `a2a_call` 工具合入主线和 IronClaw 的架构演进，预示着不同智能体实例之间、智能体与外部系统之间的**标准化通信**将成为一个重要的探索方向，旨在打破信息孤岛，构建更广泛的 Agent 网络。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-11

*数据周期：2026-08-10 ~ 2026-08-11（基于 GitHub 公开数据）*


## 1. 今日速览

过去 24 小时项目保持高强度迭代节奏：共 4 条 Issue 更新（3 条已关闭）、24 条 PR 动态（其中 7 条已合并/关闭、14 条待合并）。**今日最大亮点**在于两件事：其一，`chengyongru` 集中提交并合入了一批 WebUI 安全与稳定性重构（#5315-#5323），涉及认证迁移、空状态 UX 恢复、设置服务域拆分等；其二，社区用户报告的 **Dream 记忆整理无限循环 bug（#5324）已获修复 PR（#5325）并被快速关闭**，但该事件引发了关于 token 消耗上限的潜在讨论。项目当前处于多发 PR 待评审状态（14 条 OPEN），其中 5 条标注了 `conflict`，需要维护者优先处理合入冲突。整体健康度良好，未见 P0 级崩溃事故遗留。


## 2. 版本发布

无新版本发布。


## 3. 项目进展

今日共合入/关闭 **10 条 PR**，集中推进了以下四个方向：

| 方向 | PR | 说明 |
|------|-----|------|
| **WebUI 安全加固（P1）** | [#5317 fix(webui): move mutations to authenticated WebSocket requests](https://github.com/HKUDS/nanobot/pull/5317) | 将所有状态变更操作从 GET/query-string/custom-header 迁移到经过认证的 WebSocket 请求帧，封堵潜在 CSRF/参数注入面 |
| **WebUI 体验修复** | [#5315 fix(webui): improve UX recovery and empty states](https://github.com/HKUDS/nanobot/pull/5315) | 聊天创建失败时的首条 prompt 保留、键盘焦点恢复、空状态与紧凑设计改进 |
| **MCP OAuth 支持** | [#5316 feat(mcp): add browser OAuth for remote servers](https://github.com/HKUDS/nanobot/pull/5316) | 为远程 Streamable HTTP/SSE MCP 服务器增加浏览器 OAuth 授权，内置 Xmind、Notion、Linear 预设——该 PR 同时直接回应了 #5297 的需求 |
| **代理层重构与可用性修复** | 多个 | [#5319](https://github.com/HKUDS/nanobot/pull/5319) 移除 `MyTool` 反射式运行时状态访问、[#5318](https://github.com/HKUDS/nanobot/pull/5318) 抽取确定性事件投影工具、[#5321](https://github.com/HKUDS/nanobot/pull/5321) 网关持有 WebUI 设置服务、[#5325](https://github.com/HKUDS/nanobot/pull/5325) 拒绝 `edit_file` 无意义编辑、[#5310](https://github.com/HKUDS/nanobot/pull/5310) 微信强制二维码登录 |

**特别值得关注**：#5316（OAuth 功能）与 #5325（拒绝 no-op 编辑）均已给出对应 Issue 的解决方案并被合入——其中 #5325 对 #5324 提供修复的同时，也意味着 **Dream 整理功能不再接受"空转"编辑**，直接堵住了 token 无限消耗的路径。


## 4. 社区热点

**今日最热议题：#5324 Dream 记忆整理无限循环（[Issue #5324](https://github.com/HKUDS/nanobot/issues/5324)）**

报告用户 `jermeyhu` 描述了一次 23 分钟、消耗超过 10M token（约半个月用量）的异常运行。虽然 Issue 已关闭（修复 PR #5325 已合入），但该事件暴露了一个实质问题：**长效记忆任务缺少 token 预算/时间上限的防护机制**。讨论中对该问题的归因（根因为 edit_file 接受 old_text == new_text 的无意义调用）和修复方式已达共识，但更长远的资源治理方案（如 per-task token budget）尚未提出。

其他值得关注的动态：
- [#5297 MCP OAuth 需求](https://github.com/HKUDS/nanobot/issues/5297)（已关闭）：用户需要 `app.xmind.com/api/mcp` 这类需要网页授权的 MCP 服务，合入的 #5316 正好补上了这个缺口——从提出到落地仅 3 天，响应迅速。
- [#5327 推理过程重复消息（OPEN）](https://github.com/HKUDS/nanobot/issues/5327)：用户报告推理过程中**随机**重复同一句话，目前仅 1 条评论，尚无明确归因，可能需要更多样本。


## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue | 状态 | 说明 |
|--------|-------|------|------|
| **P0（资源失控）** | [#5324 Dream 记忆整理无限循环，23 分钟消耗 10M+ token](https://github.com/HKUDS/nanobot/issues/5324) | 已关闭，[修复 PR #5325](https://github.com/HKUDS/nanobot/pull/5325) 已合入 | 修复方案：`edit_file` 遇到 old_text == new_text 时返回错误而非报告成功 |
| **P1（进程崩溃）** | [#5300 MCP 连接失败未隔离，anyio cancel scope 跨任务崩溃，网关进程崩溃/CPU 飙升](https://github.com/HKUDS/nanobot/issues/5300) | 已关闭 | 该 Issue 涉及 mcp SDK 1.29.0 与 anyio 的任务泄漏问题，需确认修复是否已合入（已关闭，但未见对应 fix PR 记录） |
| **P2（行为异常）** | [#5327 推理过程随机重复消息](https://github.com/HKUDS/nanobot/issues/5327) | OPEN | 暂无归因，需更多复现信息 |

**稳定性相关 PR 待合并：**
- [#5271 fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)（标记 priority: p0）——后台任务（如 `maybe_generate_webui_title`）在 `/new` 后可能用旧 session 引用覆写新 session 数据。已 OPEN 5 天，**建议优先评审**。
- [#5320 fix(docker): restore capabilities for privilege drop](https://github.com/HKUDS/nanobot/pull/5320)（标记 priority: p1）——Docker 入口点因 `cap_drop: ALL` 导致特权降级路径失效。


## 6. 功能请求与路线图信号

已明确信号：

| 需求 | 来源 | 状态研判 |
|------|------|----------|
| **MCP OAuth 网页授权** | [#5297](https://github.com/HKUDS/nanobot/issues/5297) → [#5316](https://github.com/HKUDS/nanobot/pull/5316) 已合入 | 确认进入近期版本发布范围 |
| **OrcaRouter 作为网关 Provider** | [#5328](https://github.com/HKUDS/nanobot/pull/5328)（OPEN，feature + new-provider） | 一个支持 150+ 模型的路由网关，代码就绪、待评审，大概率进入下一版本 |
| **Agent Plugins 与 CLI Apps 集成** | [#5288](https://github.com/HKUDS/nanobot/pull/5288)（OPEN） | 推进中，涉及 vendor-neutral 包边界，生态化方向的重要一步 |
| **结构化 token 用量记录 API** | [#5299](https://github.com/HKUDS/nanobot/pull/5299)（OPEN） | `GET /api/settings/usage/records?day=YYYY-MM-DD`，支持 token 审计——与 #5324 的教训形成呼应，建议推进 |
| **MCP SDK v2 迁移** | [#5179](https://github.com/HKUDS/nanobot/pull/5179)（OPEN，12 天，含 conflict）| 大工程，涉及 transport 层重写且兼容旧接口，长期任务 |


## 7. 用户反馈摘要

- **正面反馈**：#5324 中用户在描述中特意使用了"Session log analysis reveal..."的表述，并详细记录了时间线和 token 消耗，说明用户具备较高的技术素养，且对 bug 报告模板执行力强。该项目对 token 成本敏感，**用户明确提到了"约半个月用量"**，反映个人 AI 助手场景下 token 经济性是核心关切。
- **痛点确认**：#5297 用户提到"配置需要网页授权的 MCP 目前项目无法完成"，说明**小众生态（如 Xmind MCP）的接入能力直接影响用户的使用深度**。该需求从提出到合入仅 3 天，体现了团队对这类痛点的重视。
- **体验反馈**：#5327 用户以"randomly"描述消息重复问题，这类不确定性 bug 会让用户对系统稳定性产生不信任感，但当前讨论热度较低（1 条评论），建议维护者主动联系提供复现样本。


## 8. 待处理积压

需维护者优先关注的长期未决项：

| 类型 | 编号 | 标题 | 静默时间 | 备注 |
|------|------|------|----------|------|
| **PR（p0）** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | fix(session): prevent stale background task saves from overwriting session data | 5 天 | session 数据覆写风险，涉及用户对话数据安全，建议尽快评审合入 |
| **PR（conflict）** | [#5179](https://github.com/HKUDS/nanobot/pull/5179) | Migrate MCP integration to SDK v2 | 12 天 | 大规模重构，conflict 状态已持续多日；MCP 生态迁移阻塞后续依赖此 PR 的功能，建议抽出专人负责推进 |
| **PR（conflict）** | [#5299](https://github.com/HKUDS/nanobot/pull/5299) | feat(api): expose structured token usage records | 3 天 | conflict 需解决；此功能与 #5324 暴露的资源治理问题直接相关 |
| **Issue（OPEN）** | [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Nanobot repeats multiple times the same message while reasoning | 1 天 | 尚无归因，需更多数据；建议在 Issue 中引导用户提供日志或复现步骤 |
| **PR（conflict）** | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | fix(agent): bound sustained-goal continuation when the turn goes idle | 6 天 | 与 #5324 同属资源白白消耗的问题域（goal 持续注入无限循环），建议与 #5271 一并处理 |
| **PR（conflict）** | [#5292](https://github.com/HKUDS/nanobot/pull/5292) | fix(matrix): reply to the room-level user event that started the turn | 3 天 | Matrix 适配层的消息关联问题，影响该渠道的基本可用性 |


**项目健康度综合评估：**

- **活跃度**：★★★★☆（24 条 PR 日常流量，多个方向并行推进）
- **响应速度**：★★★★★（#5297 → #5316 三天闭环；#5324 → #5325 当日修复）
- **质量风险**：★★★☆☆（14 条 OPEN PR，5 条有冲突、2 条 p0/p1 等待评审 → 合入 pipeline 有堵塞迹象）
- **资源治理盲区**：★★★☆☆（#5324 虽已修复，但 token 预算上限、Agent 持续目标无边界等系统性治理仍在议程中）

**建议维护者本周重点关注**：#5271（session 覆盖风险）、#5320（Docker 权限回归）两条高优 PR 的评审与合入，以及清理 5 条带 conflict 标记的 PR 的冲突。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-11

---

## 1. 今日速览

项目今日维持高位活跃：过去 24 小时共产生 100 条 Issue/PR 更新，其中新开/活跃 Issue 43 条、待合并 PR 44 条，整体呈"大量涌入、快速流动"态势。**当日最核心议题集中在三大方向**：一是 Windows 平台 Desktop 更新后无法启动、后端退出码为 0 的高频回归问题（#83548、#83555、#83562 等多条 Issue 集中爆发，且已有针对性修复 PR 提交）；二是子进程凭据继承/密钥泄露的安全漏洞集群（#83565 战役 EPIC 出现，锚定 #77027 系列）；三是 SQLite 文件描述符泄漏问题引发多线程修复竞赛（#75269、#81547、#78872、#83397、#83490 多条 Issue/PR 相互关联）。**项目健康度评估：⭑⭑⭑⭑☆** — 提交活跃、问题响应迅速，但 Windows 平台稳定性和安全边界问题仍为当前最突出短板。

---

## 2. 版本发布

无新版本发布。当前最新版本为 **v0.20.0 (2026.8.3)**，该版本的 Windows Desktop 更新问题正成为今日多条 Issue 的争议焦点。

---

## 3. 项目进展

> ⚠️ 数据说明：今日无 PR 被合并（6 条关闭的 PR 中 5 条为主动关闭或重复提交），以下为已提交且针对关键问题的修复 PR，反映项目正在进行的推进方向。

### 已关闭/撤回的 PR

| PR | 内容 | 状态 | 说明 |
|---|---|---|---|
| [#83570](https://github.com/NousResearch/hermes-agent/pull/83570) | 实验性改动 | 已关闭 | 提交者主动放弃 |
| [#83397](https://github.com/NousResearch/hermes-agent/pull/83397) | SQLite 文件描述符泄漏修复 | 已关闭（标记重复） | 与 #75269/#83490 重叠 |
| [#83011](https://github.com/NousResearch/hermes-agent/pull/83011) | 原生 clarify 期间保留散文 | 已关闭 | 方案未获采纳 |

### 待合并的关键修复 PR（需重点关注）

| PR | 解决的问题 | 优先级 |
|---|---|---|
| [#83600](https://github.com/NousResearch/hermes-agent/pull/83600) | DeepSeek 空 `tool_calls:[]` 致会话永久卡死（#83312），在传输边界剥离空数组 | P1 |
| [#83590](https://github.com/NousResearch/hermes-agent/pull/83590) | Windows 更新器自锁 `cryptography._rust.pyd`（#83569），检测更新器自锁 + 修复 uv 管理 venv | P1 |
| [#83595](https://github.com/NousResearch/hermes-agent/pull/83595) | `hermes update` 未重启 `hermes-serve*` systemd 单元（#83438），补全更新后单元重启 | P2 |
| [#83490](https://github.com/NousResearch/hermes-agent/pull/83490) | SQLite 每线程 WAL 读者连接导致 fd 耗尽（#75269/#81547），改为固定四连接租借池 | P2 |

**值得关注的长期未合并 PR**（均挂起超两周）：

- [#67934](https://github.com/NousResearch/hermes-agent/pull/67934)（Ollama 本地模型发现改用原生 tags）— 状态 MERGEABLE / BLOCKED，无检查报告、无评审
- [#59827](https://github.com/NousResearch/hermes-agent/pull/59827)（supermemory 忘记混合结果按背书文档定位）— 已开放 36 天

**项目整体评估**：今日核心推进集中在 Windows 平台回归修复、DeepSeek 兼容性、数据库连接池重构、子进程密钥隔离四方面。虽然无合入动作，但大量 PR 精准对应昨日/前日报告的 Bug，修复-反馈循环运转良好。跨项目多次出现"同一问题多人独立提交修复"的现象（#83397 vs #83490；#83548 vs #83555/#83562），说明 issue triage 和 PR 冲突协调存在优化空间。

---

## 4. 社区热点

### 讨论热度最高：Epic：全仓库"神文件"分片

**Issue [#78647](https://github.com/NousResearch/hermes-agent/issues/78647)**（66 条评论）— 提出将全仓库 20 个超过 7000 行的"神文件"（god-file）进行模块化拆分。该议题与 #78640-#78643 系列（`hermes_cli/gateway.py` 7461 行、`agent/conversation_loop.py` 7306 行、`tools/mcp_tool.py` 7230 行、`gateway/platforms/api_server.py` 7188 行）形成"分片倡议"集群。这是社区对代码可维护性的集体诉求，也呼应了项目 2026-08 月确立的"所有神文件必须被分片，不可回退"的治理政策。

### 高赞诉求：多租户 Hermes 支持

**Issue [#34352](https://github.com/NousResearch/hermes-agent/issues/34352)**（21 条评论，2 👍）— 第三方开发者报告内存操作完全绕过 hook 系统，多租户隔离在不 fork 核心的前提下不可能实现。该用户已在生产环境运行自行修复方案数月。这是来自深度用户的架构级反馈，传递的信息是"多租户是刚需，当前架构无法支持，需要官方响应"。

### 关注度攀升中：Windows 更新后 Desktop 无法启动

**Issue [#83548](https://github.com/NousResearch/hermes-agent/issues/83548)**（刚创建即获 2 评论）— v0.20.0 (2026.8.3) 更新后 Desktop 崩溃，TUI 正常工作。该 Issue 的同主题变体在今日集中出现（#83555、#83562、#83569），说明**这是一个对 Windows 用户影响面较广的回归**。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 🔴 P1 — 严重

| Issue | 问题描述 | Fix PR | 状态 |
|---|---|---|---|
| [#83312](https://github.com/NousResearch/hermes-agent/issues/83312) | DeepSeek：助手消息含空 `tool_calls:[]` 时，后续所有消息永久 400 | [#83600](https://github.com/NousResearch/hermes-agent/pull/83600) | 有修复待合并 |
| [#75269](https://github.com/NousResearch/hermes-agent/issues/75269) | SessionDB 保留所有已完成工作线程的 WAL 读者连接，耗尽 `RLIMIT_NOFILE` | [#83490](https://github.com/NousResearch/hermes-agent/pull/83490) | 已关闭（问题解决） |
| [#77276](https://github.com/NousResearch/hermes-agent/issues/77276) | Desktop 重启残留孤儿 gateway（app 管理路径未被 #75936 覆盖） | — | 已关闭 |

### 🟠 P2 — 重要

| Issue | 问题描述 | Fix PR | 状态 |
|---|---|---|---|
| [#83548](https://github.com/NousResearch/hermes-agent/issues/83548) | Windows Desktop 更新后崩溃（React #310），TUI 正常 | — | **待响应** |
| [#83555](https://github.com/NousResearch/hermes-agent/issues/83555) | Windows：serve 父进程死亡看门狗在 uv trampoline venv 上立即自退出 | — | **待响应** |
| [#83562](https://github.com/NousResearch/hermes-agent/issues/83562) | Windows Desktop 更新后后端手动可启动，但 Desktop 报"backend exited (0)" | — | **待响应** |
| [#83569](https://github.com/NousResearch/hermes-agent/issues/83569) | Windows `hermes update` 自锁 `cryptography._rust.pyd`，cryptography 升级 100% 失败 | [#83590](https://github.com/NousResearch/hermes-agent/pull/83590) | 有修复待合并 |
| [#82936](https://github.com/NousResearch/hermes-agent/issues/82936) | `gateway.multiplex_profiles` 下默认 profile 的密钥泄漏入次级 profile 的 terminal/kanban 子进程 | — | **待响应** |
| [#81547](https://github.com/NousResearch/hermes-agent/issues/81547) | macOS 上 dashboard 运行数天后 fd 耗尽（LaunchAgent 场景） | — | 已关闭 |
| [#78872](https://github.com/NousResearch/hermes-agent/issues/78872) | Desktop 孤儿 serve 后端堆积 → EMFILE → 空白页 | — | 已关闭 |
| [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) | Windows 上任何 desktop 插件加载导致 React #310 崩溃 | — | 已关闭 |
| [#68367](https://github.com/NousResearch/hermes-agent/issues/68367) | Desktop 子进程继承默认 profile 的 Tlon 凭据，连入用户已禁用的平台 → 同一 Urbit moon 上重复响应 | — | **待响应** |
| [#81518](https://github.com/NousResearch/hermes-agent/issues/81518) | 透明代理（OpenClash）后半死连接池积累，cron API 调用 TTFB 20-219s | — | **待响应** |
| [#83455](https://github.com/NousResearch/hermes-agent/issues/83455) | `/refine` 拒绝已完成但内存中无 agent 缓存的 Desktop 会话 | — | **待响应** |

### 🟡 P3 — 一般

| Issue | 问题描述 | Fix PR |
|---|---|---|
| [#77463](https://github.com/NousResearch/hermes-agent/issues/77463) | 子进程环境变量擦除存在多个绕过点（TUI host post-scrub 重新注入、LSP 全量环境、docker forward-env） — **标记 CRITICAL** | — |
| [#77164](https://github.com/NousResearch/hermes-agent/issues/77164) | 子进程 env 擦除仅按名称形状启发式判断，非凭据形状的应用层密钥会泄漏 | 关联 #83565 系列 |

---

## 6. 功能请求与路线图信号

### 高潜力候选（已出现对应实现 PR）

| 功能请求 | 对应 PR | 说明 |
|---|---|---|
| [#83522](https://github.com/NousResearch/hermes-agent/issues/83522) 内置 gateway 自愈（SIGTERM 干净重启 + 死 WebSocket 检测） | — | Discord WebSocket 静默死亡（进程存活、bot 在线但不收消息）是社区真实痛点 |
| [#83479](https://github.com/NousResearch/hermes-agent/issues/83479) Desktop Home 缺少新建会话入口 | — | UI 层面的小改进，已关闭 |
| — | [#83597](https://github.com/NousResearch/hermes-agent/pull/83597) skills 安装锁定 GitHub commit | 供应链安全方向，语义化版本锁定 |

### 已被 PR 覆盖的新功能

- **[#83597](https://github.com/NousResearch/hermes-agent/pull/83597)** — `curator adopt` 新增 `--ref`/`--pr` 解析到不可变 SHA，支持完整技能目录获取 + 锁来源 + fail-closed fork/短 SHA 处理（188 测试通过）
- **[#83589](https://github.com/NousResearch/hermes-agent/pull/83589)** — 修复 Node 托管运行时目录不可读时仍被加到 PATH 的问题

---

## 7. 用户反馈摘要

### 满足点

- **DeepSeek 兼容性修复获认可**：用户报告空 `tool_calls` 卡死问题后，24 小时内即有对应 PR 提交，响应速度快
- **SQLite fd 泄漏问题获得全面关注**：多个独立团队针对同一问题提交修复（#83397、#83490），说明社区对该稳定性痛点高度一致

### 痛点与不满

- **Windows 更新反复出问题（最集中的不满）**：上述多个 Windows 问题可归因于 v0.20.0 (2026.8.3) 的更新过程——多个用户报告"更新后 Desktop 崩溃""后端 exited (0)"但"手动启动正常"。用户 nushret 反馈"Repair install 流程无法解决问题，多次尝试仍失败"。
- **凭据隔离（安全问题）**：多个 Issue（#68367、#82936、#77164、#77463）指出 `multiplex_profiles` 下的密钥泄漏，"少权限 profile 的终端工具仍能看到默认 profile 的密钥"——安全敏感场景下这是关键缺陷。
- **Desktop 体验问题**：`/refine` 无法处理已完成但无内存缓存的会话；Home 列表缺少新建会话按钮。这些细节影响日常使用流畅度。
- **工具链可靠性**：`curator adopt --dry-run` 对已托管的技能仍报"would adopt"，误导用户操作（#83573）。

---

## 8. 待处理积压

### 需维护者关注的长期未响应 Issue

| Issue | 创建时间 | 评论数 | 说明 |
|---|---|---|---|
| [#5908](https://github.com/NousResearch/hermes-agent/issues/5908) | 2026-04-07（126 天） | 2 👍 | kimi-coding 凭据池 `base_url` 未在加载时从 key 前缀重新解析。旧版本创建的条目在无 `KIMI_API_KEY` 环境时静态值失效。**P2 但长期无人处理** |
| [#38079](https://github.com/NousResearch/hermes-agent/issues/38079) | 2026-06-03（69 天） | 2 | WhatsApp 网桥子进程未擦除操作员环境变量。CVSS v4.0 评分 **8.2（高危）**，长期未获响应 |
| [#60961](https://github.com/NousResearch/hermes-agent/issues/60961) | 2026-07-08（34 天） | 3 | Langfuse SDK 插件占位符 API key 静默失败，无任何报错 |

### 长期未合并的 PR

| PR | 创建时间 | 状态 | 说明 |
|---|---|---|---|
| [#67934](https://github.com/NousResearch/hermes-agent/pull/67934) | 2026-07-20（22 天） | MERGEABLE / BLOCKED | Ollama 本地模型发现修复，无检查、无评审、无合入 |
| [#59827](https://github.com/NousResearch/hermes-agent/pull/59827) | 2026-07-06（36 天） | OPEN | supermemory 忘记混合检索结果，按背书文档 ID 定位 |
| [#70505](https://github.com/NousResearch/hermes-agent/pull/70505) | 2026-07-24（18 天） | OPEN | Desktop 新会话标题栏显示目标项目名 — 持续被 rebase 但仍未合并 |

---

## 维护者行动建议

1. **优先响应 Windows Desktop 更新回归集群**（#83548/#83555/#83562/#83569）— 这是当前覆盖率最高的用户投诉，且部分已有理论修复（#83590），应尽快验证并合并
2. **协调 SQLite fd 泄漏修复方案的重复提交问题**（#83397 vs #83490），避免社区精力分散
3. **对 #38079（CVSS 8.2）和 #77463（CRITICAL）等安全类 Issue 给出明确回应**，即使不能立即修复，也应确认优先级和时间线
4. **关注 #34352 多租户请求的长期规划** — 这是来自深度用户的核心架构诉求，且对方已具备生产级修复方案，"自己 fork 维护"意味着流失高价值贡献者的风险
5. **处理 #67934 这类 BLOCKED 状态且无评审的 PR** — 需明确是主动搁置还是流程遗漏

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-11

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度**中等**，共产生 4 条 Issue 更新和 9 条 PR 更新，但**没有新的版本发布**。值得关注的是，**今日所有动态均带有 `[stale]` 标记**（8 个条目全部命中自动过期标记），这提示项目已进入一段**低活跃或维护者响应放缓**的时期——最新一条新 Issue 创建于 8 月 2 日（#3311），至今已 9 天未获维护者正式回应。不过，PR 侧仍有积极信号：昨日提交的 Telegram 表格富文本渲染（#3327）和 pnpm lock 文件修复（#3326）均已在今日被合并，说明核心维护者仍在处理近期高质量贡献，只是对社区反馈的响应节奏有所放缓。

---

## 2. 版本发布

**无新版本发布。**

上一版本停留在 v0.3.1（`2cf030d`），当前 `main` 分支的净变化量（自 8 月 9 日 PR #3326/#3327 合入后）尚不足以触发一次版本 bump。预计下一里程碑版本将包含：
- 远程 prompt/exec 安全边界加固（#3297，已合并）
- 模型级 `max_tokens` 配置覆盖（#2132，已合并）
- 多通道表格富文本支持（#3327，已合并）
- 工具失败静默循环修复（#3312，待合并）

---

## 3. 项目进展

今日合并/关闭的 7 个 PR 中，**3 个为实质性功能/修复合入**，是近期合并质量较高的一批：

| PR | 标题 | 类型 | 项目意义 |
|----|------|------|----------|
| [#3327](https://github.com/sipeed/picoclaw/pull/3327) | Telegram 原生富文本表格渲染 | 功能增强 | 彻底改变 Telegram 表格展示体验：告别 monospace 代码块，利用 Bot API 富文本原生渲染 GFM/HTML 表格，支持发送、回复/主题、编辑三类操作。对 Telegram 重度用户的可用性有质的提升。 |
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | 移除 pnpm lock 重复条目 | 构建修复 | 消除 `pnpm install --frozen-lockfile` 的 `ERR_PNPM_BROKEN_LOCKFILE` 错误，修复 web 前端 CI/部署流水线阻塞。 |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | 远程 prompt/exec 安全边界加固 | 安全里程碑 | **核心安全补丁**：将远程发送者元数据从 provider system instructions 移入标准化 user-role envelope，避免 prompt 注入面扩大；远程 exec 默认禁用，需每次调用独立审批 + 执行时强制校验 origin policy；迁移配置至 schema v4。这是项目安全架构的一次重要收紧。 |
| [#2132](https://github.com/sipeed/picoclaw/pull/2132) | 模型级 `max_tokens` 配置支持 | 配置增强 | 解决 `gateway.go` 将 `Defaults.ModelName` 覆盖为 provider modelID 导致 `GetModelConfig()` 查错的问题，并支持 `max_tokens` 按模型粒度覆盖。 |

**短期"技术债清理"特征明显**：PR #1547（合并 #1466/#1465 两个未合入 PR 的补丁）属于老 PR 合并；#3295 修复了 `SplitMessage` 在 oversized fence header 上的挂死问题；#3296 完成捷克语 code wrap 标签翻译。整体而言，项目在**稳定性与安全加固**方向上迈出了实质一步，但缺少面向用户的新功能亮点。

---

## 4. 社区热点

今日最受关注（评论数最多）的讨论话题：

**Issue #3301 — dispatch rules 路由到非默认 agent 时 /clear 与会话自动压缩失效（3 条评论）**
> 链接：[sipeed/picoclaw Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)

用户 j-v 在 Raspberry Pi + Discord/Telegram 双通道环境下，配置了 dispatch rules 将聊天路由到非默认 agent，发现 `/clear` 命令和会话自动压缩功能在此场景下均不生效。评论集中在排查方向讨论（是否与 agent 会话存储 key 绑定逻辑相关）。**该问题的关联 PR #3314**（修复 `customAllowPatterns` 优先级）已提交但尚未合并，两者同属"dispatch/配置路由"模块，值得合并后回归验证。

**Issue #3311 — 工具反复失败静默循环至 max_tool_iterations（1 条评论）**
> 链接：[sipeed/picoclaw Issue #3311](https://github.com/sipeed/picoclaw/issues/3311)

生产环境 Telegram 中，agent 执行 `git` 命令因凭据缺失反复失败，用户等待数分钟始终无响应。核心痛点是**"静默失败"**——没有中间态提示、没有错误反馈、没有超时中断的可观测性。该 issue 同时配套有 PR #3312 提供修复方案。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🔴 高 | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | 工具反复失败时静默循环至 `max_tool_iterations`，用户完全得不到答复 | **已有 fix PR #3312**（待合并）。PR 实现"相同错误连续出现即提前终止 turn"机制。 |
| 🟠 中 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | dispatch rules 路由至非默认 agent 时，`/clear` 和会话自动压缩不生效 | 待诊断，无直接 fix PR。关联 PR #3314 修复同一配置模块下 `customAllowPatterns` 失效问题。 |
| 🟡 低 | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | Telegram 中 `/list models` 只显示当前模型而非全部已配置模型 | 已关闭（stale 自动关闭）。无法确认是否为已知行为还是待修 Bug。 |

**稳定性趋势判断**：今日无注册表级别（crash/panic）或数据丢失类严重 Bug 报告。最紧迫的 #3311 已有 PR #3312 待合并，修复逻辑合理（检测相同错误连续 N 次即终止），但需关注边界情况——例如 LLM 温度随机性导致错误信息措辞略有差异时能否正确判重。

---

## 6. 功能请求与路线图信号

| 状态 | 请求/PR | 分析 |
|------|---------|------|
| 已关闭（stale） | [#3298](https://github.com/sipeed/picoclaw/issues/3298) — 请求将 AI Router 作为 OpenAI-compatible provider 预设加入 | 作者为 AI Router 维护者（自曝关联）。该需求本质上是**低成本接入**——用户可通过 `api_base` 指向 `https://api.ai-router.dev/v1` 实现，仅缺一个命名预设。若项目优先保障核心功能稳定（当前状态）、暂不加新 provider 预设，stale 关闭可以理解。 |
| 待合并 | [#3314](https://github.com/sipeed/picoclaw/pull/3314) — 修复 `customAllowPatterns` 不生效 | 默认 deny 模式始终优先于用户自定义 allow 模式，导致 `git push` 等命令被误拦截。这是**配置系统信任边界的 bug**，可能纳入下个 patch 版本。 |
| 待合并 | [#3312](https://github.com/sipeed/picoclaw/pull/3312) — 工具失败提前终止机制 | 对应 Issue #3311，直接提升生产环境的故障可观测性和响应速度，属于稳定性增强。 |
| 已合并 | [#3327](https://github.com/sipeed/picoclaw/pull/3327) — Telegram 表格原生富文本渲染 | 已在 8 月 10 日合入，下个版本将直接受益。 |

**路线图信号**：从今日 PR 合入分布看，项目当前核心关注点为（1）安全边界加固（#3297）、（2）构建 CI 稳定性（#3326）、（3）Telegram 用户体验（#3327）。未见到面向新功能（如多模型路由、Agent 编排）的 PR 合入，短期路线可能仍以稳定性和安全为主。

---

## 7. 用户反馈摘要

**😠 痛点一：失败反馈缺失（Issue #3311 评论区）**
> 用户 lucapette 在生产环境（Telegram）经历"agent 运行 `git` 命令后数分钟无任何回复"，原因是工具调用因凭据问题反复失败，但循环在后台静默进行。本质诉求：**中间态可观测性**——失败时用户需要及时收到"正在重试/出错了"的反馈，而非无尽等待。

**😠 痛点二：配置系统信任边界不清晰（Issue #3301 + PR #3314）**
> 用户在 Raspberry Pi 上部署，按文档配置了 `customAllowPatterns` 期望放开 `git push` 的执行权限，但运行时仍被默认 deny 规则拦截。说明：**用户自定义配置的优先级语义存在歧义**，"allow 列表扩展默认规则"的预期与实现不符，文档需同步澄清。

**😊 积极信号：构建修复被合入获得认可**
> PR #3326（pnpm lock 修复）解决了 `pnpm install --frozen-lockfile` 在 web 前端的失败问题，虽是纯内部构建修复，但对依赖 CI 的贡献者具有直接价值。

**总体情绪**：用户积极反馈集中在**错误处理与可配置性**两处，整体满意度中等。无强烈负面情绪（如"项目停止维护"等），但 `[stale]` 标记的普遍存在可能影响部分外部贡献者的信心——需要维护者对长期开放 issue 进行一次清理性 triage。

---

## 8. 待处理积压

以下为长时间未响应/未合并但影响面较大的条目，**建议维护者重点关注**：

| 类型 | 条目 | 关键信息 |
|------|------|----------|
| Issue 待闭环 | [#3311](https://github.com/sipeed/picoclaw/issues/3311) — 工具失败静默循环 | 🕒 9 天未获维护者评论，已有配套 PR #3312，建议尽快 review 并给出公开进度。 |
| PR 待 review | [#3314](https://github.com/sipeed/picoclaw/pull/3314) — `customAllowPatterns` 修复 | 🕒 8 天未获 review。修复逻辑直接对应真实用户 bug（#3301），建议优先处理。 |
| PR 待 review | [#3312](https://github.com/sipeed/picoclaw/pull/3312) — 工具失败提前终止 | 🕒 9 天未获 review。与 Issue #3311 配对，修复严重 UX 问题。 |
| PR 长期搁置 | [#2132](https://github.com/sipeed/picoclaw/pull/2132) — 模型级 max_tokens 配置 | ✅ **已于今日合并（2026-08-10）**，从积压清单中移除。 |
| Issue 过期中 | [#3298](https://github.com/sipeed/picoclaw/issues/3298) — AI Router provider 预设 | 已 stale 关闭，但功能仍有价值（低成本接入），可考虑下个 minor 版本是否纳入。 |

**风险提示**：当前 7 个待处理条目中 5 个命中 `[stale]` 自动标记，若维护者再未在 30 天内响应，auto-close 机制可能误关仍有价值的 issue/PR（编辑摘要）。建议安排一次集中 backlog triage，逐一确认各条目的"留/关/合并"决策。

---

> **报告生成时间**：2026-08-11 | **数据窗口**：2026-08-10 ~ 2026-08-11 | **数据来源**：sipeed/picoclaw GitHub 仓库公开数据

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：** 2026-08-11  
**数据窗口：** 2026-08-10 至 2026-08-11（24小时）  
**数据来源：** [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)


## 1. 今日速览

NanoClaw 在过去 24 小时保持较高活跃度：共产生 20 条 PR 动态（10 条合并/关闭，10 条待合并）和 3 条 Issue 更新（全部处于开放状态）。核心开发团队（core-team 标签）持续推动多项架构级重构，包括宿主文件访问策略、Agent 模板迁移至 Agent Plugins 1.0.0、以及远程 Streamable HTTP MCP 服务器支持等。值得关注的信号是，今日集中出现了 **3 个与消息丢失/静默丢弃相关的 Bug 报告和修复 PR**，表明消息可靠性是当前社区关注的核心痛点。此外，Telegram 配对码安全加固（CSPRNG）也同时出现在 #3229 和 #3225 两个 PR 中，存在功能重叠，需注意协调。总体项目健康度良好，修复节奏明显快于问题报告速度。


## 2. 版本发布

**无新版本发布。**

过去 24 小时内无新 Release 或版本标签产生。当前最新版本仍为 2026-06-06 的 v2（commit `2d9375531`）。考虑到社区对消息丢失（#3075、#3226）和 Telegram 安全（#3225、#3229）的关注，建议维护者在近期考虑发布补丁版本。


## 3. 项目进展

今日合并/关闭了 10 个 PR，主要集中在**代码结构重构**与**日志安全**两个方向：

| PR | 标题 | 类型 | 要点 |
|---|---|---|---|
| [#3212](https://github.com/nanocoai/nanoclaw/pull/3212) | refactor(db): add module migration registry | 重构 | 为各模块数据库迁移建立统一注册机制 |
| [#3213](https://github.com/nanocoai/nanoclaw/pull/3213) | refactor(channels): register question renderers | 重构 | 将各渠道的问题渲染器改为注册制 |
| [#3214](https://github.com/nanocoai/nanoclaw/pull/3214) | refactor(host): unify module lifecycle hooks | 重构 | 统一宿主模块生命周期钩子 |
| [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) | fix(permissions): redact DM resolution logs | 修复 | 对 DM 解析日志进行脱敏（隐私修复） |
| [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) | docs(hardened-image): note install_packages scope | 文档 | 明确 hardened-image 中 install_packages 仅限 apt/npm |
| [#3219](https://github.com/nanocoai/nanoclaw/pull/3219) | Telegram and container env | 修复 | Telegram 与容器环境相关问题 |
| [#3222](https://github.com/nanocoai/nanoclaw/pull/3222) | feat(permissions): add opt-in privacy-safe DM logs | 新功能 | 可选的隐私安全 DM 日志开关 |
| [#3228](https://github.com/nanocoai/nanoclaw/pull/3228) | fix: deduplicate turn-scoped chat delivery | 修复 | 修复聊天消息投递重复问题 |
| [#3211](https://github.com/nanocoai/nanoclaw/pull/3211) | docs(skills): define single-responsibility integration rule | 文档 | 定义技能集成单一职责规则 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | refactor: add host seams for skill-owned capabilities | 重构 | 为技能自有能力添加宿主接缝 |

**评估：** 今日合入的 PR 大多来自 `zvi-fried`，呈现连续提交模式，是团队在隐私安全和架构重构方向上的集中发力。特别是 #3215（DM 日志脱敏）和 #3222（隐私安全日志开关）构成了完整的隐私保护方案。这些重构为后续功能迭代打下了基础，表明项目正在从功能快速扩张期过渡到架构规范化阶段。


## 4. 社区热点

### 热点一：消息静默丢失 — Issue #3226

[#3226 Inbound messages silently dropped when a platform reuses a message id](https://github.com/nanocoai/nanoclaw/issues/3226)  
**作者：** dweekly | **创建：** 2026-08-10 | **状态：** OPEN | **评论：** 0

同一作者在报出 Issue 的当天就提交了修复 PR [#3224](https://github.com/nanocoai/nanoclaw/pull/3224)，提出在会话数据库中保留跨平台 ID 重用的入站消息。该问题影响所有使用长生命周期会话且平台可能重用消息 ID 的场景，用户侧表现为"agent 忽略了我"，极具迷惑性。**同类问题已在 #3075 中报告过**（旧 Issue，更新于昨日），说明该问题在多个渠道都有复现。

### 热点二：Telegram 配对码安全 — PR #3229 与 #3225 重叠

[#3229 fix(telegram): generate pairing codes with a CSPRNG](https://github.com/nanocoai/nanoclaw/pull/3229)（chiptoe-svg）  
[#3225 fix(telegram): harden pairing code generation and store permissions](https://github.com/nanocoai/nanoclaw/pull/3225)（dweekly）  

两个 PR 几乎同时提交（均基于 2026-08-10），都针对 Telegram 配对码使用 `Math.random()` 的可预测性问题提出修复。**区别在于**：#3229 专注于将随机数生成器替换为 CSPRNG 并扩大编码空间（4→更大范围）；#3225 在此基础上还增加了文件权限收紧（owner-only）。建议维护者在合并前协调两者，或将 #3225 作为 #3229 的超集直接合并。

### 热点三：远程 MCP 服务器支持 — PR #3092 与 #3221

[#3092 feat: support remote Streamable HTTP MCP servers](https://github.com/nanocoai/nanoclaw/pull/3092)（7月19日，持续更新中）  
[#3221 feat(providers): remote Streamable HTTP MCP servers for codex and opencode](https://github.com/nanocoai/nanoclaw/pull/3221)（8月10日新增）

#3092 已在 PR 队列中停留三周，#3221 是它的补充，将支持扩展到 codex 和 opencode 两个 provider。这表明项目正在向"远程 MCP 服务器"方向迈进，社区对此有持续需求。两个 PR 均为 core-team 标签，归属 `amit-shafnir`。


## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) | 长时间运行后日志静默丢失 + 入站消息重复插入错误（WSL2 + Docker + Matrix 环境，v2 2026-06-06 版本） | **无 PR 关联**，已 24 天未解决 |
| 🔴 高 | [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) | 平台复用消息 ID 时入站消息静默丢弃 | 已有修复 PR [#3224](https://github.com/nanocoai/nanoclaw/pull/3224)（OPEN） |
| 🟠 中 | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | 定时任务触发 agent turn 出错时错误消息不可路由被静默丢弃，运维无法得知任务失败 | 暂无 PR 关联 |
| 🟡 低 | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) / [#3225](https://github.com/nanocoai/nanoclaw/pull/3225) | Telegram 配对码使用 Math.random() 可预测（安全问题） | 两个 PR 待合并，需协调 |

**分析：** 三个问题（#3075、#3226、#3223）的共同主题是消息在入站或错误路径上被"静默丢弃"，用户无感知。这已成为当前项目最突出的稳定性风险。建议维护者组织一次针对**消息生命周期与错误路由**的专项审查。


## 6. 功能请求与路线图信号

### 短期信号（已有对应 PR 在队列中）

| 功能 | 相关 PR | 状态 | 备注 |
|---|---|---|---|
| 远程 Streamable HTTP MCP 服务器支持 | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) + [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | OPEN（3周+） | 扩展至 codex/opencode，距离合入已接近 |
| Agent 模板迁移为 Agent Plugins 1.0.0 | [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) | OPEN（今日新开） | 引擎级变更，格式迁移 |
| CLI 接受有界 JSON stdin 输入 | [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | OPEN（8月9日） | 新增 `--stdin-json` 通用模式 |
| 隐私安全 DM 日志 | [#3222](https://github.com/nanocoai/nanoclaw/pull/3222) | ✅ 已合并 | 新增 `privacySafeLogs` 选项 |

### 中长期路线图观察

| 信号来源 | 方向 |
|---|---|
| PR #2909（7月2日提交，持续活跃） | 设置向导中集成模板设置流 + 首 agent 印章（Agent templates part 2） |
| PR #3220（今日新开） | Agent 模板 → Agent Plugins 1.0.0 目录格式迁移 |
| PR #3227（今日新开） | 宿主文件访问的"单写者"表面声明（架构加固） |
| #3223 Issue | 定时任务错误消息需要可路由、可观测（运维可观测性） |

**趋势判断：** Agent 模板正在演变为更正式化的 "Agent Plugins" 体系（目录结构和格式迁移），这将是 v2 之后的重大架构调整。`amit-shafnir` 的持续贡献表明这是团队当前的工作重心之一。


## 7. 用户反馈摘要

### 用户痛点

1. **"Agent 忽略了我"的误导性体验**（[#3226](https://github.com/nanocoai/nanoclaw/issues/3226)）：用户无法区分消息被静默丢弃与 agent 故意不回复，严重损害使用体验。这种"无反馈即失败"的模式是最糟糕的错误处理方式。

2. **定时任务故障不可见**（[#3223](https://github.com/nanocoai/nanoclaw/issues/3223)）：用户依赖定时任务但无法得知任务是否成功执行，运维层面缺乏可观测性。

3. **长时间运行后的资源泄漏**（[#3075](https://github.com/nanocoai/nanoclaw/issues/3075)）：WSL2 + Docker Desktop 环境下运行 NanoClaw v2 的用户报告，长时间运行后出现日志静默丢失和消息重复插入错误。该问题已存在 24 天，用户可能在等待修复。

### 用户积极反馈

- PR #3216（install_packages 范围文档）和 #3211（单一职责规则文档）的合并表明团队重视文档质量，降低用户困惑。
- #3222 和 #3215 的隐私安全日志改进表明项目正在认真对待用户数据隐私。

### 用户建议

- 定时任务失败的错误消息应注入可路由字段（如默认传给 agent 或通知运维渠道），而非静默丢弃（#3223 隐含诉求）。


## 8. 待处理积压

### 高优先级（需维护者关注）

| 项目 | 创建时间 | 持续时间 | 说明 |
|---|---|---|---|
| [#3075](https://github.com/nanocoai/nanoclaw/issues/3075)（Silent log loss + duplicate-insert errors） | 2026-07-17 | **24天** | 无 PR 关联，用户长期等待修复。同一主题在 #3226 中被再次报告，说明影响范围可能更广。建议尽快确认是否与 #3224 的修复相关或需要独立调查 |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909)（模板设置流） | 2026-07-02 | **39天** | 功能 PR 已在队列中超过一个月，持续更新但仍未合并。若其依赖项 #2890 已合入则需考虑为何仍未落地 |

### 需要协调/决策

| 项目 | 类型 | 建议 |
|---|---|---|
| [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) vs [#3225](https://github.com/nanocoai/nanoclaw/pull/3225) | PR 重叠 | 两个 Telegram 安全修复 PR 在同一问题上重叠，建议维护者选择功能超集（#3225）合并或以 #3229 → #3225 的方向协调合并 |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) + [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) 系列 | 远程 MCP 支持 | 三个相关 PR 路径依赖明显（#3092 是主 PR，其他两个是分支集成 PR），建议评估是否能以 stack 方式连续合并，避免分支分叉过久产生冲突 |

### 观察列表

| 项目 | 状态 | 备注 |
|---|---|---|
| [#3193](https://github.com/nanocoai/nanoclaw/pull/3193)（Telegram Chat SDK 富消息） | OPEN（5天） | 可能涉及较大 SDK 更新，需观察 |
| [#3218](https://github.com/nanocoai/nanoclaw/pull/3218)（CLI stdin JSON） | OPEN（2天） | 新功能，设计良好，等待 review |



**报告完。** 总体评价：NanoClaw 社区活跃度良好，核心团队响应迅速（Issue 当天即出修复 PR），但消息可靠性问题和文档细节（如单写者文件声明）仍是需要持续投入的方向。建议下一版本优先解决消息静默丢弃类问题（#3075、#3223、#3226），并考虑在设置向导中集成模板功能以完善 Agent Plugins 1.0.0 体验。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-11

> NullClaw 是一个支持 A2A 协议的个人 AI 助手框架，实现了与远程代理的标准化通信。目前项目处于相对平稳推进期，日均活跃度中等偏低，社区活动集中于外部贡献的合并与依赖更新。


## 1. 今日速览

过去 24 小时内，NullClaw 项目整体活跃度偏低。唯一一条 Issue 动态为 **#700 关闭**（该 Issue 自 3 月提出，历经近 5 个月后于今日正式关闭，属积累性收尾而非新讨论）；唯一一条 PR 动态为 **#956 依赖升级**（Dependabot 自动提交，仍在等待合并）。项目 **近两周核心关注点** 集中在 A2A 客户端能力的补全与 Docker 基础镜像的现代化升级。从长期趋势看，**A2A 协议的完整双向实现**（服务端 + 客户端）是最关键的进展信号，相关代码已合入主线，整体推进符合预期。


## 3. 项目进展

今日虽无重大合并事件，但 #700 的关闭标志着此前合入的 `a2a_call` 客户端工具相关里程碑的正式收束。该工具使 NullClaw 完成了 **A2A 协议的双向打通**——既能作为服务端被远程调用，也能主动向其他代理发起消息请求。这一能力补全为多实例分布式中枢场景（如隔离内外网的代理网络）扫清了基础障碍。

| 关键演进 | 状态 | 说明 |
|---------|------|------|
| A2A 客户端能力 | 已收尾 | `a2a_call` 工具允许代理发送 `message/send` JSON-RPC 请求至远程代理，支持多实例互调场景 |
| Docker 镜像基础 | 待合并 | Alpine 3.23 → 3.24 升级（#956），涉及所有使用 docker-images 组的镜像构建 |


## 4. 社区热点

### 今日最热 Issue：#700 — A2A 客户端提议（已关闭）
- **链接:** [nullclaw/nullclaw #700](https://github.com/nullclaw/nullclaw/issues/700)
- **作者:** georgeglarson | **评论:** 1 | **👍:** 1 | **状态:** 已关闭（2026-08-10）
- **详情:** 该 Issue 提交于 3 月 23 日，提出“服务端完整但缺少客户端实现”的缺口，并直接附带了可用的 `a2a_call` 工具实现。 用户同时描述了具体的双实例场景（公共入口 + 私有个人代理），**从提出到关闭历时约 5 个月**，期间积累了一定的社区认同。背后的核心诉求是 **让 NullClaw 在 A2A 生态中具备完整的双向通信能力**，而不仅是作为被动服务的接受方。这种“服务端先行、客户端跟进”的演进路径，在个人 AI 助手类框架中较具代表性，**最终实现被合入主线**，达成闭环。


## 5. Bug 与稳定性

今日 **无新增 Bug、崩溃或回归问题上报**。项目处于稳定状态。

唯一与稳定性相关的变更为 #956 的 **Docker 基础镜像升级**（Alpine 3.23 → 3.24），该升级当前仍处于待合并状态。鉴于 Alpine 3.23 已于 2025-11-01 停止维护（EOL），**建议维护者尽快合并此 PR**，以消除潜在的安全漏洞风险。


## 6. 功能请求与路线图信号

### 值得关注的长期信号

| 信号 | 来源 | 状态 | 可能性评估 |
|------|------|------|-----------|
| **A2A 协议客户端能力** | Issue #700 及合入代码 | 已合并收尾 | 已合入主线，标志着协议完整双向支持落地 |
| **Docker 镜像依赖升级** | PR #956 | 待合并（约 2 个月） | 依赖升级类 PR 通常无功能争议，近期需人工确认后合并 |

**路线图参考信号：** 从 #700 的背景信息来看，**多实例分布式部署** 已出现真实用户案例（“公有入口 + 私有代理”的组合），用户对“公有/私有”代理网络隔离场景存在实际需求。后续版本可能会重点关注 A2A 协议的 **多实例发现机制**、**身份认证** 与 **权限控制**，这类功能目前尚未有公开实现，值得关注。


## 7. 用户反馈摘要

**来自 #700 的真实使用场景：**
- **部署方式**: 用户运行两个独立 NullClaw 实例——一个作为公共入口暴露服务，另一个作为私有个人代理。此场景反映了 **内网/外网隔离与代理间通信** 的混合部署需求。
- **核心建议**: 用户直接提供 `a2a_call` 客户端实现，而非仅反馈需求，体现出 **高参与度的用户群体** 特征。
- **隐含痛点为**: 个人助手领域目前缺少成熟的开源 A2A 客户端实现，用户需要自行填补该生态缺口。**该实现已被合入主线**，意味着后续所有用户均可直接受益，无需自行维护。


## 8. 待处理积压

### ⚠️ 需关注：PR #956 — Docker 镜像基础版本升级（长期待处理）
- **链接:** [nullclaw/nullclaw PR #956](https://github.com/nullclaw/nullclaw/pull/956)
- **提交时间:** 2026-06-15 | **最后更新:** 2026-08-10（已等待 56 天）
- **风险:** Alpine 3.23 已 EOL，升级可消除潜在安全漏洞，但长时间未合并可能导致镜像基于已停止维护的基础系统运行。
- **建议:** 此 PR 为自动化依赖更新且无破坏性变更风险，建议维护者尽快确认并合入，重开构建流程后即可完成镜像验证发布。


> **项目健康度评估：** 功能开发稳步推进，A2A 双向支持已能力闭环；Issue 响应速度快，但从合并到关闭耗时约 5 个月，说明过程中存在一定周期。社区讨论活跃度中等，暂无严重 Bug 积压。**唯一需要关注的是 Docker 镜像版本的长期未更新风险**，其次是 A2A 认证与发现机制的探索。整体来看，项目处于稳健成长期，对外部贡献的吸收能力较强，协作流程健康。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，我是 IronClaw 项目的 AI 智能体分析师。基于您提供的 GitHub 数据，以下是 2026 年 8 月 11 日的项目动态日报。

---

# IronClaw 项目动态日报 — 2026-08-11

## 1. 今日速览

IronClaw 项目在过去 24 小时内保持高活跃度， Issues 与 PR 更新均为 50 条，显示出稳定的开发与维护节奏。核心团队（BenKurrek、serrrfirat）与外部贡献者（theredspoon）并行推进多个大型特性（XL 级 PR）与紧急修复。项目发布了一个紧急补丁候选版本 `v1.1.1-rc.1`，主要针对渠道投递与配对问题。值得注意的是，今日有大量由 `BenKurrek` 提交的、基于昨日（8/10）架构审计的 Issue 被批量关闭（共 25 条关闭），这表明项目正在进行系统性的架构清理与技术债务偿还，整体健康度良好。

## 2. 版本发布

- **ironclaw-v1.1.1-rc.1** (2026-08-10)
  - **核心内容**：这是针对 1.1 产品线的紧急补丁候选版本。集中修复了渠道投递和配对问题、IronHub/自定义 MCP 兼容性、WebUI 流式传输稳定性、持久化检索以及从两个受支持的稳定前序版本的安全升级。
  - **迁移注意事项**：对于从 1.0.0 升级的用户，官方明确要求**停止所有写入操作**。此次升级涉及底层存储或消息处理逻辑的变更，需确保在无写入状态下进行迁移，以防止数据不一致或丢失。

## 3. 项目进展

今日虽然关闭的 PR 较少（17 条合并/关闭），但合并的关键 PR 对项目稳定性至关重要，同时多个大型特性 PR 已就绪待合并。

- **稳定性修复合并**：
  - **[#7336](https://github.com/nearai/ironclaw/pull/7336) fix(loop-host): dedup consumed steering replays**：由 `serrrfirat` 提交，修复了循环宿主中重复消费转向消息的问题，防止产生重复的助手回复，增强了系统的确定性。
- **待合并的重大特性 (核心贡献者已提交，处于待合并状态)**：
  - **[#7477](https://github.com/nearai/ironclaw/pull/7477) feat(channels): unified channel model**：这是一个 XL 级 PR，旨在将 Web、Slack、Telegram 等多种渠道抽象为统一的 `ChannelAdapter`，是渠道架构的一次重大重构。
  - **[#7464](https://github.com/nearai/ironclaw/pull/7464) feat(telegram): linked-device**：为 Telegram 渠道增加 MTProto 链接设备支持，允许用户通过个人账户安全授权。
  - **[#7456](https://github.com/nearai/ironclaw/pull/7456) fix(reborn): make durable storage profile-agnostic**：解决部署档案切换导致数据不可见问题，是存储层的关键增强。
  - **[#7474](https://github.com/nearai/ironclaw/pull/7474) fix(qa): stop the agent asserting unverified state**：一次性修复三个 QA 问题，防止 Agent 在未验证状态下断言不实信息，对提升系统可信度至关重要。

项目正在经历由 Issue 驱动的架构重构（如统一渠道模型、存储去档案化），并有一批直接的 PR 进行落地，推进速度较快。

## 4. 社区热点

- **[#7137](https://github.com/nearai/ironclaw/issues/7137) [OPEN] live-canary: shard artifacts are 700MB-1.5GB** (12条评论)
  - **诉求**：这是今日讨论度最高的话题。开发和 QA 人员抱怨持续集成（CI）产生的构建产物过大（单次超过 5GB），这不仅拖慢了下载和测试速度，也大量消耗 GitHub Actions 的存储配额。
  - **分析**：这反映了开发者在面对大型单体仓库时的共同痛点：CI 基础设施的成本和效率。解决该问题有助于显著提升开发体验和迭代速度。已有关联 PR [#7466](https://github.com/nearai/ironclaw/pull/7466) 尝试解决此问题。

## 5. Bug 与稳定性

- **高严重性**：
  - **Agent 断言未验证状态**：由 PR [#7474](https://github.com/nearai/ironclaw/pull/7474) 批量修复了外部 QA（Railway-QA）发现的三个相关问题：[#7246](https://github.com/nearai/ironclaw/issues/7246)、[#7247](https://github.com/nearai/ironclaw/issues/7247)、[#7294](https://github.com/nearai/ironclaw/issues/7294)，涉及自动化状态检查、调用者身份验证和记忆召回。**已有修复 PR**。
- **中严重性**：
  - **[#7473](https://github.com/nearai/ironclaw/issues/7473) [OPEN] 重复连接引导通知**：`post_notice` 逻辑将“已投递但无供应商引用”和“未投递”两种情况混为一谈，可能导致用户收到重复的“请连接”通知。**已有修复 PR [#7475](https://github.com/nearai/ironclaw/pull/7475)**。
  - **[#7476](https://github.com/nearai/ironclaw/issues/7476) [OPEN] 模型投递失败信息丢失**：`classify_delivery_outcome` 函数在处理失败时忽略了 `vendor_message_refs`，导致模型无法看到部分发送成功的证据。与 #7475 是同类问题。**已有修复 PR [#7475](https://github.com/nearai/ironclaw/pull/7475)**。
- **低严重性**：
  - **CI 脚本死代码**：PR [#7472](https://github.com/nearai/ironclaw/pull/7472) 清理了无任何消费者的 `has_reborn_tests` 输出，属于代码卫生范畴。

## 6. 功能请求与路线图信号

- **配置入口的 AI 化**：Issue [#7046](https://github.com/nearai/ironclaw/issues/7046) 提出，希望通过 AI 聊天直接完成所有工具、渠道和扩展的配置，而非在 WebUI 中手动操作。这与项目当前“Agent-first”的定位高度契合，未来可能会在管理 AI 管家中加入更多系统配置功能。
- **系统状态透明化**：Issue [#7317](https://github.com/nearai/ironclaw/issues/7317) 要求建立文档-事实核验管线。这项诉求表明用户对版本间破坏性变更导致的文档失效问题非常敏感，希望项目能通过自动化手段保证文档的实时性和准确性。
- **更智能的技能系统**：Issue [#6941](https://github.com/nearai/ironclaw/issues/6941) 提出了一个关于“模型能自我创建、发现、选择和使用的技能”的全新史诗，这被视为通往更自主 Agent 的关键路径，有可能是 1.2 或 2.0 版本的重要特性。

## 7. 用户反馈摘要

- **核心开发者的架构担忧**：从 `BenKurrek` 提交的多个 Issue（如 [#7149](https://github.com/nearai/ironclaw/issues/7149)、[#7151](https://github.com/nearai/ironclaw/issues/7151)）可以看出，核心团队对系统架构的演进有着清醒的认识，主动发现了“通过层耦合无默认守卫”、“基于份额的预算被膨胀分母污染”等深层次问题，并及时进行问题拆解和修正。
- **外部贡献者的参与**：`theredspoon` 提交了若干高价值修复（如 #7475、#7472），问题定位准确，PR 描述详实。说明项目对于新贡献者有很好的指导和支持（如 [#7442](https://github.com/nearai/ironclaw/pull/7442) 中核心成员接盘新人的初始实现并完善），这种“老带新”的模式有助于社区的健康成长。
- **特定的用户痛点**：PDF 发送错误 ([#6257](https://github.com/nearai/ironclaw/issues/6257)) 和 Slack 重复连接后认证流卡死 ([#5882](https://github.com/nearai/ironclaw/issues/5882)) 是用户遇到的直接影响使用的稳定性问题，虽然已关闭，但需要权衡是否作为回归测试用例加入测试套件。

## 8. 待处理积压

- **[#5101](https://github.com/nearai/ironclaw/pull/5101) [OPEN] ci: reuse cargo-component installer in live canary** (创建于 2026-06-20)
  - 这是一个开放了近两个月的 CI 增强 PR，旨在统一 CI 中 `cargo-component` 的安装方式。尽管长期开放，但更新于 8/10，说明仍在活跃处理中。这有助于解决 CI 环境不一致的问题，建议维护者关注其进展。
- **[#3762](https://github.com/nearai/ironclaw/issues/3762) [OPEN] Editing AGENTS.md in the web UI does not update the system prompt** (创建于 2026-05-18)
  - 这是一个持续了近三个月的问题。编辑 `AGENTS.md` 不影响当前或未来对话的系统提示词，这直接影响了用户通过文档定制 Agent 行为的工作流。该 Issue 标记为 P1（高优先级），但长期未修复，可能会积累用户负面反馈。

---
**数据来源**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-08-11

*数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) 过去24小时事件流*

---

## 今日速览

过去24小时 LobsterAI 处于高活跃状态，核心维护者 `fisherdaddy` 在 cowork 协作功能、OpenClaw 网关稳定性、Python 运行时维护三个方向进行了集中性修复，共关闭/合并 20 条 PR、新开 14 条待合并 PR。**今日无新版本发布**，但存在一批值得关注的依赖安全更新（vite 8.x、react-dom 19.x、mermaid 11.x）已接近合并状态，预示项目正在为下一个版本做基础设施升级准备。Issues 侧仅有一条已关闭的 stale Bug（#1243），无新问题报告，说明近期代码改动未引入明显回归。

---

## 项目进展

今日合并/关闭的 PR 集中在以下几大模块，每个方向都体现了明确的工程投入：

### 1. OpenClaw 网关稳定性（3 个修复）

- **PR #2454** `fix(openclaw): stop tool-loop guard from killing legitimate polling` — 修复工具循环保护机制误杀合法轮询请求的问题，直接影响网关的可靠性。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2454)
- **PR #2470** `fix(openclaw): surface provider runtime failures on late chat error` — 修复延迟聊天错误被"陈旧工具失败"吞没的问题，使得真实的 provider/LLM 运行时故障（如空闲超时接管失败）能够正确暴露给用户。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2470)
- **PR #2466** `Fix/renderer init ipc stall retry` — 修复渲染进程初始化 IPC 卡死时的重试机制。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2466)

### 2. Cowork 协作功能体验升级（4 个合并）

- **PR #2472** `feat: cowork activity group collapse` — 协作活动分组折叠能力。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2472)
- **PR #2471** `feat(cowork): render submitted file attachments as clickable cards` — 提交的非图片附件现在以文件卡片形式展示（图标+文件名+类型），替代原先的纯文本路径行，对齐图片附件的富预览体验。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2471)
- **PR #2469** `feat(cowork): add collapse-agent-tasks shortcut and allow modifier shortcuts while typing` — 新增折叠代理任务快捷键，并允许在输入时使用修饰键快捷键。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2469)
- **PR #2468** `refactor(cowork): unify streaming loading indicators` — 统一流式加载指示器为单一组件，减少重复代码。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2468)

### 3. Windows 平台稳定性

- **PR #2467** `fix(python-runtime): repair stale pip shims on Windows runtime upgrade` — 修复 Windows 运行时升级后过期的 pip shim 文件导致运行时同步失败的问题。健康检查之前只验证文件存在性，现在会收敛到模板并主动修复损坏的 shim。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2467)

### 4. 新功能扩展

- **PR #2473**（待合并）`feat(cowork): add right-click context menu for local file links` — 新增文件链接右键菜单，支持"打开方式/另存为/复制路径/复制内容/复制图像/在文件夹中显示"等操作。同时在 `dialog:saveFileCopy` 层增加 IPC 桥接。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2473)

### 5. 依赖大版本升级（14 条待合并依赖 PR）

Dependabot 集中推送了一批重要依赖升级：vite 5→8.2.1、react-dom 18→19.2.8、@vitejs/plugin-react 4→6.0.5、mermaid 10→11.16.1、eslint-plugin-react-hooks 5→7.1.1、rimraf 5→6.1.3、@nodesecure/js-x-ray 14→16.0.0。其中 5 条旧批次 PR（#1766/#1764/#1763 等）已关闭，对应的新批次（#2465/#2464/#2463 等）已开启并指向更新的版本。

> 值得注意的是：vite 从 5.x 直接跨到 8.x 属于大版本跳跃，虽然依赖 PR 本身是常规操作，但主版本跨度过大可能意味着 LobsterAI 正在为构建链的现代化做铺垫。

---

## 社区热点

今日社区讨论热度偏低，**无高评论数的 PR 或 Issue**，绝大多数合并和待合并 PR 的评论数为 0，说明这些改动由组织内部开发者（`fisherdaddy`、`ump45nose`）直接推进，尚未引起社区广泛讨论。

当前**最值得关注的讨论焦点**是已关闭的 **Issue #1243**（`qwen-portal-auth` 插件配置循环写入导致网关频繁重启），虽然今日被标记为 stale 关闭，但从其生命周期来看（创建于 2026-04-01，直到 2026-08-10 才被关闭，存活 4 个多月），这是过去一段时间用户报告的最严重的使用体验问题：

> 🐛 用户报告网关每 5-20 分钟自动重启一次，伴随"AI 引擎正在启动网关..."弹窗，且**配置任意模型（包括非 Qwen 模型）** 均会触发。[查看 Issue](https://github.com/netease-youdao/LobsterAI/issues/1243)

该 Issue 被关闭的原因大概率是 PR #2454 和 #2470 本周的修复从根源上解决了网关层面的问题，但**关闭时未标注关联 PR**，社区用户若仍遇到问题将无法跟踪。

---

## Bug 与稳定性

| 严重程度 | Issue/PR | 现象 | 状态 |
|---------|----------|------|------|
| 🔴 高 | [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | `qwen-portal-auth` 插件配置循环写入导致网关每 5-20 分钟重启一次 | 已 stale 关闭；疑似由 #2454/#2470 间接修复，但未建立关联 |
| 🟡 中 | [PR #2467](https://github.com/netease-youdao/LobsterAI/pull/2467) | Windows 上 pip shim 过期后健康检查无法检测到问题，运行时同步被破坏 | 已合并，修复完成 |
| 🟡 中 | [PR #2470](https://github.com/netease-youdao/LobsterAI/pull/2470) | 延迟聊天错误被误判为"陈旧工具失败"而吞没，真实 provider 故障（如空闲超时接管）不报错 | 已合并，修复完成 |
| 🟡 中 | [PR #2454](https://github.com/netease-youdao/LobsterAI/pull/2454) | 工具循环保护误杀合法轮询，导致网关不必要重启 | 已合并，修复完成 |

**趋势判断**：今日无新 Bug 报告，且三个网关/运行时层面的修复均已合并，项目稳定性正在回升。如果 #1243 的修复闭环被确认（用户未再回报），则网关重启问题大概率已彻底解决。

---

## 功能请求与路线图信号

今日无新增功能请求 Issue，但可以从 PR 趋势中看到产品方向信号：

1. **Cowork 协作体验是当前最核心的迭代对象** — 连续 5 个 PR（#2473/#2472/#2471/#2469/#2468）都在丰富协作功能：文件卡片展示、分组折叠、右键菜单、快捷键体系。说明项目团队正在将"AI 协作工作区"从基础可用推向精耕细作阶段。

2. **文件处理能力是下一个战场** — PR #2473 引入了完整的本地文件上下文菜单（打开方式/另存为/复制路径/在文件夹中显示），并缓存 shell app 查询以优化性能。这暗示后续可能有桌面端深度集成（如外部编辑器联动、批量文件操作）。

3. **模型 ID 与 provider 映射的正确性是持续关注点** — 待合并的 PR #2452 修复了带 `/` 的模型 ID（如 `deepseek-ai/DeepSeek-V4-Flash`）在 session 存储时丢失 provider 前缀的问题。这类边界条件修复往往为用户自定义模型铺路。[查看 PR](https://github.com/netease-youdao/LobsterAI/pull/2452)

4. **依赖现代化正在酝酿** — 一批主版本跳跃的依赖 PR 集中在同一天推送，大概率是团队在准备一次重要的构建链/运行时升级，下一版本可能伴随 vite 8 + react 19 的全面落地。

---

## 用户反馈摘要

由于今日 Issue 活动极少（仅 1 条 stale 关闭），我们从 #1243 的生命周期以及关闭前的讨论中提炼用户的真实诉求：

**痛点 1：** 网关频繁重启＋弹窗打扰是过去 4 个月里最尖锐的使用体验问题，且 **不受模型选择影响** — 用户配置非 Qwen 模型同样触发，说明问题出在插件机制的通用路径上，而非特定模型兼容性。[Issue 链接](https://github.com/netease-youdao/LobsterAI/issues/1243)

**痛点 2：** 该 Issue 存活 4 个月后才被关闭（且今天是以 stale 形式关闭而非固定修复），反映了**项目对社区 Bug 报告响应的滞后**。虽然内部 PR 修复可能已覆盖问题，但从用户视角看缺乏透明的修复跟踪状态。

**值得肯定的是**：PR #2471 的改进（将 `输入文件: /path` 纯文本渲染为可点击的文件卡片）实际上是用户长期抱怨的体验问题——此前非图片附件的发送后展示非常简陋，现在已补齐。

---

## 待处理积压

| 项目 | 类型 | 存活时长 | 状态 | 建议 |
|------|------|---------|------|------|
| [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452)：修复带 `/` 模型 ID 的 provider 保持问题 | PR | 4 天 | 待合并 | 代码量小且属正确性修复，建议尽快合并 |
| [PR #2473](https://github.com/netease-youdao/LobsterAI/pull/2473)：本地文件链接右键菜单 | PR | 1 天 | 待合并 | 功能完整（含 IPC 桥接与性能优化），建议纳入下一版本 |
| [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243)：网关频繁重启 | Issue | 4 个月（已关闭） | 需确认关闭原因 | 若由 #2454/#2470 修复，请在关闭评论中注明关联 commit，避免用户困惑 |
| 依赖升级大版本（vite 8 / react 19 / mermaid 11） | 14 条 PR | 1 天 | 待合并 | 建议安排专人评估破坏性变更，规划专门的升级 PR 而非直接合并 Dependabot 批次 |

---

## 项目健康度综合评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 34 条 PR 活动，集中于功能迭代与平台稳定性双线并进 |
| 代码进库节奏 | ⭐⭐⭐⭐⭐ | 20 条已合并/关闭（含 14 条功能/修复 + 5 条依赖清理），节奏紧凑 |
| Bug 修复响应 | ⭐⭐⭐⭐ | 今日集中修复 3 个网关/运行时问题，但历史 Issue 响应仍偏慢 |
| 社区互动 | ⭐⭐ | PR/Issue 评论几乎为零，多为内部开发直接推进，社区参与度低 |
| 版本推进 | ⭐⭐⭐ | 无新版本发布，但依赖大版本升级暗示 vNext 正在筹备 |

**一句话总结**：LobsterAI 正处于一次"平台稳定性加固 + 协作体验精修"的快速迭代窗口，内部开发效率极高，但社区参与与反馈闭环仍有改善空间。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-11

## 今日速览

过去24小时项目活跃度处于**中等偏上水平**：3条新Bug报告全部集中于Apple Container后端，且2条由同一用户（holgzn）提交，显示该后端近期改动可能引入回归；2条PR保持待合并状态，其中#1182（会话管理修复）已进入第10天等待期；无新版本发布。项目整体处于**"稳定期中的小高峰"**——无合并事件但Issue涌入密集，需重点关注Apple Container相关的回归风险。

---

## 版本发布

**无新版本发布**。最新版本仍是上一周期的Release，建议关注master分支的PR积累情况（当前2条待合并），预计下一个版本将在PR #1182合并后择机发布。

---

## 项目进展

**今日无合并/关闭事件**。两条待合并PR代表了两个重要改进方向：

- **[PR #1182](https://github.com/moltis-org/moltis/pull/1182)**: fix(sessions) — 删除和归档主会话功能，解决#1132中不能删除main会话的痛点。该PR已**等待10天**，代码改动涉及session管理和归档逻辑，预计将在近期合并。
- **[PR #531](https://github.com/moltis-org/moltis/pull/531)**: feat(browser) — 基于CDP的交互式浏览器观看UI，支持鼠标/键盘/滚动操作和会话历史回放。这是**超长周期PR**（自3月31日起已132天），属于重大功能但长期悬而未决，可能涉及复杂技术评审。

**整体评估**：项目在会话管理和浏览器交互两个方向上有明确的代码产出，但合并节奏较慢，功能落地存在延迟。

---

## 社区热点

- **[Issue #1185](https://github.com/moltis-org/moltis/issues/1185)**: Apple Container 1.x sandbox启动但Moltis误判为未运行 — **3条评论**，是该时段热度最高的问题。评论数表明可能涉及多个用户验证和排查过程。
- **[Issue #1189](https://github.com/moltis-org/moltis/issues/1189)**: Sandbox构建因gogcli的GitHub URL错误失败 — 新提交，尚无评论。
- **[Issue #1188](https://github.com/moltis-org/moltis/issues/1188)**: Apple Container资源限制未生效 — 新提交，尚无评论。

**背后诉求**：社区对**Apple Container 1.x后端**的工程质量表示关切——从运行状态检测到资源限制再到构建依赖，三个独立问题在同一后端暴露，指向该模块的集成测试覆盖不足。

---

## Bug 与稳定性

| 严重程度 | Issue | 摘要 | 修复状态 |
|---------|-------|------|---------|
| 🔴 高 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container沙箱在后台实际运行但Moltis显示未运行，可能导致用户在运行中容器上重复创建会话，浪费资源并引发冲突 | 尚无对应PR |
| 🟡 中 | [#1188](https://github.com/moltis-org/moltis/issues/1188) | Apple Container后端未执行CPU/内存资源限制，多租户或密集场景下可能出现资源抢占 | 尚无对应PR |
| 🟢 低 | [#1189](https://github.com/moltis-org/moltis/issues/1189) | Sandbox构建时下载gogcli使用了错误的GitHub URL，阻断CI/本地构建流程 | 尚无对应PR，但修复成本低（一行URL调整） |

**风险提示**：三个Bug均集中在Apple Container后端，且无一个已有修复PR跟进，建议维护者优先分配该模块的维护人力。

---

## 功能请求与路线图信号

- **会话删除/归档能力**（[PR #1182](https://github.com/moltis-org/moltis/pull/1182)解决#1132）展现了用户对会话生命周期管理的强烈需求。结合已有issue背景，这一改进很可能被纳入下一版本。
- **浏览器实时预览与交互**（[PR #531](https://github.com/moltis-org/moltis/pull/531)）是长线方向，但长期未合并，建议维护者给出**明确状态更新**以回应用户期待。
- 今日三条Bug均属于**稳定性修复类**，而非新功能需求，反映近期社区更关注"存量功能的可靠性"而非"新功能探索"。

---

## 用户反馈摘要

- 来自[#1185](https://github.com/moltis-org/moltis/issues/1185)的评论互动（3条评论）暗示用户可能尝试了多种排查方案（如手动管道检测、重启沙箱等），但问题持续存在，用户体验可能受挫。
- [PR #1182](https://github.com/moltis-org/moltis/pull/1182)能存活10天未被合并也侧面反映维护者对其改动持审慎态度，可能正在权衡对现有工作流的影响。
- 整体来看，用户对Moltis的使用**趋于深度化**——开始挖掘后端细节（如Apple Container的资源限流与运行状态），这既说明用户信任其在生产环境的能力，也意味着他们开始遇到更底层的问题。

---

## 待处理积压

- **[PR #531](https://github.com/moltis-org/moltis/pull/531)（浏览器UI，132天未合并）**：⚡**最需关注**。超长等待期可能让贡献者（penso）感到挫败。建议维护者明确说明阻塞原因或指派评审人。
- **[Issue #1185](https://github.com/moltis-org/moltis/issues/1185)（Apple Container误判运行状态）**：3条评论说明关注度高，但24小时内无维护者响应，建议尽快修复或至少给出临时规避方案。
- **[PR #1182](https://github.com/moltis-org/moltis/pull/1182)（等待10天且无评论）**：需要一位维护者确认或给出修改意见，避免贡献者等待过久。

---

*本日报由 AI 助手基于 GitHub 数据自动生成，仅供参考，不构成对具体事件的官方判断。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期**: 2026-08-11  
**数据窗口**: 过去 24 小时（截至 2026-08-11）  
**数据来源**: github.com/agentscope-ai/CoPaw

---

## 1. 今日速览

CoPaw 项目在过去 24 小时内保持高度活跃，共产生 **39 条 Issue 更新**（34 条活跃，5 条关闭）和 **50 条 PR 更新**（33 条待合并，17 条已合并/关闭）。当前 2.1.0 系列处于 **beta 测试关键期**（v2.1.0b2），社区反馈集中在 **OpenAI 兼容性协议、MCP 工具调用可靠性、中文 IME 输入、以及 ReMe 记忆系统** 等方向。值得注意的是，**PR #6875 已提交 v2.1.0 正式版发布说明**，暗示 2.1.0 正式版即将发布。社区贡献者活跃度高，多条 first-time-contributor PR 正在推进。整体项目健康度良好，但存在 **大量与 2.1.0b2 升级相关的新引入 Bug**，建议维护者加快 beta 期问题收敛节奏。

---

## 3. 项目进展

### 今日关键 PR 动态

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#6875](https://github.com/agentscope-ai/CoPaw/pull/6875) | chore: update release notes for v2.1.0 | 待合并 | **v2.1.0 正式版发布准备**：已添加中英文发布说明、README 更新及 News 条目，暗示 RC 版本临近 |
| [#6870](https://github.com/agentscope-ai/CoPaw/pull/6870) | feat(creator): settings center, agent skills, mm-plugins compose orchestration, async media generation, cross-platform hardening | 待合并 | Creator 插件大型集成 PR：新增设置中心、Agent 技能编排、异步媒体生成及跨平台加固，核心功能补齐 |
| [#6880](https://github.com/agentscope-ai/CoPaw/pull/6880) | feat(console): unify apps, plugins, and skills in the marketplace | 待合并 | Console 市场统一为 `/market` 路由（apps/plugins/skills 三个 Tab），改善插件市场可用性 |
| [#6845](https://github.com/agentscope-ai/CoPaw/pull/6845) | fix(chats): preserve assistant completion time | 待合并（ready-for-human-review） | 修复对话中助手消息完成时间丢失的问题（对应 Issue #6826），已在 review 阶段 |
| [#6889](https://github.com/agentscope-ai/CoPaw/pull/6889) | fix(console): preserve textarea target for IME events | 待合并 | **修复中文输入法崩溃**（对应 Issue #6885），当天提交、当天响应，速度很快 |
| [#6884](https://github.com/agentscope-ai/CoPaw/pull/6884) | fix: make Auto-Dream integration resilient | 待合并（first-time-contributor） | 修复 Auto-Dream 单个单元失败导致整个任务报错的问题（对应 Issue #6841），提升了容错性 |
| [#6398](https://github.com/agentscope-ai/CoPaw/pull/6398) | feat: add reranker support for ReMe memory search (backend) | 已关闭 | ReMe 记忆搜索的 Reranker 后端支持已合并，配合 [#6399](https://github.com/agentscope-ai/CoPaw/pull/6399)（UI 配置面板，仍待合并）形成完整功能 |
| [#6615](https://github.com/agentscope-ai/CoPaw/pull/6615) | fix(config): handle corrupted agent config and invalid JSON in load_agent_config | 已关闭（first-time-contributor） | 损坏的 agent.json 配置不再导致崩溃，提升了健壮性 |
| [#6878](https://github.com/agentscope-ai/CoPaw/pull/6878) | feat(console): add hidden-folders toggle to project directory picker | 已关闭 | 项目目录选择器增加"显示隐藏文件夹"开关 |
| [#6809](https://github.com/agentscope-ai/CoPaw/pull/6809) | fix(providers): sanitize Chat Completions content for strict providers | 已关闭 | 修复 OpenAI 兼容 Chat Completions 请求携带内部字段的问题（对应 Issue #6803） |

**总结**：今日主线为 **v2.1.0 发布准备 + 大量 UI/UX 修复 + ReMe 记忆系统功能收尾**。发布流程已启动，预计未来数日内 RC/正式版将落地。

---

## 4. 社区热点

### 🔥 最热 Issue 排行

| # | Issue | 评论数 | 核心诉求 |
|---|---|---|---|
| 1 | [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) 2.0.1 docker版插件/应用市场始终提示"维护中" | 9 | **Docker 部署用户无法使用插件和应用市场**。持续 4 天无维护者回应，需优先排查服务端问题 |
| 2 | [#6803](https://github.com/agentscope-ai/CoPaw/issues/6803) OpenAI 兼容请求携带 Responses-API 字段，被严格 Provider 拒绝 | 6 | StepFun 等严格 Provider 返回 400。**已有关闭的 PR #6809 修复此问题**，但 Issue 仍标记 OPEN，需确认修复是否已并入 2.1.0 |
| 3 | [#6811](https://github.com/agentscope-ai/CoPaw/issues/6811) OpenAI Responses 续写摘要忽略 `disable_thinking` + 60 秒取消误报 | 5 | 对话压缩（Scroll evict）时摘要生成阻塞主对话，且取消被误报为格式错误 |
| 4 | [#6826](https://github.com/agentscope-ai/CoPaw/issues/6826) 对话中助手消息结束时间显示异常 | 5 | 实际耗时 2 分钟，界面显示仅几秒。**PR #6845 已修复，待合并** |
| 5 | [#4237](https://github.com/agentscope-ai/CoPaw/issues/4237) 对话内查看/终止/延长 shell 命令（运行中命令面板） | 4 | 自 5 月提出至今未实现，用户对长时间运行命令的可见性和控制权有强烈需求 |

**分析**：社区热点集中在 **Docker 环境可用性**（#6782）和 **2.0.1 → 2.1.0b2 升级后引入的回归问题**（#6803、#6811、#6826、#6885）。用户对项目的反馈整体积极，但期待更快的迭代节奏和更好的兼容性。

### 🔥 最热 PR 讨论

| PR | 标题 | 备注 |
|---|---|---|
| [#6890](https://github.com/agentscope-ai/CoPaw/pull/6890) | fix(console): preserve long multiline tool output | 今日提交，修复长多行工具输出渲染问题（对应 Issue #6852） |
| [#6399](https://github.com/agentscope-ai/CoPaw/pull/6399) | feat: add reranker UI config panel to ReMeLightMemoryCard | ReMe Reranker 的 UI 配置面板，配合后端已合并，等待 review |
| [#6870](https://github.com/agentscope-ai/CoPaw/pull/6870) | feat(creator): 大型聚合 PR | Creator 插件多组件升级，影响面广，需仔细 review |

---

## 5. Bug 与稳定性

### 严重程度：🔴 高（核心功能不可用/崩溃）

| Issue | 问题描述 | 状态 | Fix PR |
|---|---|---|---|
| [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) | **Docker 2.0.1 插件市场/应用市场始终提示"维护中"**，无法使用。创建 4 天，9 条评论，无维护者回应 | OPEN | 无 |
| [#6885](https://github.com/agentscope-ai/CoPaw/issues/6885) | **v2.1.0b2 中文输入法组合输入时 Console UI 崩溃**（compositionEnd 事件），消息队列完全不可用 | OPEN | ✅ [#6889](https://github.com/agentscope-ai/CoPaw/pull/6889) 已提交待合并 |
| [#6814](https://github.com/agentscope-ai/CoPaw/issues/6814) | **macOS 上 SQLite WAL 模式打开 history.db 触发 SIGBUS 崩溃**（sqlite3WalFindFrame），影响 Scroll 历史记录加载 | OPEN | 无 |
| [#6811](https://github.com/agentscope-ai/CoPaw/issues/6811) | OpenAI Responses 续写摘要阻塞主对话，取消被误报为格式错误 | OPEN | 无 |

### 严重程度：🟡 中（功能异常/兼容性问题）

| Issue | 问题描述 | 状态 | Fix PR |
|---|---|---|---|
| [#6803](https://github.com/agentscope-ai/CoPaw/issues/6803) | OpenAI 兼容请求携带 Responses-API 内部字段（`input_text`、raw streaming），StepFun 等严格 Provider 返回 400 | OPEN（Issue 未关闭） | ✅ [#6809](https://github.com/agentscope-ai/CoPaw/pull/6809) 已合并，需确认是否已通知用户 |
| [#6821](https://github.com/agentscope-ai/CoPaw/issues/6821) | thinking-mode 模型（DeepSeek V4）多轮对话，`reasoning_content` 未回传导致 400 | OPEN | 无 |
| [#6812](https://github.com/agentscope-ai/CoPaw/issues/6812) | Gemini Provider 发送包含 `$schema` 字段的 tool schema，被 Google API 拒绝 | CLOSED | 已解决（Issue 已关闭） |
| [#6845](https://github.com/agentscope-ai/CoPaw/pull/6845) | 助手消息完成时间显示异常（实际 2 分钟，显示几秒） | OPEN | ✅ [#6845](https://github.com/agentscope-ai/CoPaw/pull/6845) 已提交待合并 |
| [#6780](https://github.com/agentscope-ai/CoPaw/issues/6780) | 2.0.1 空闲几十分钟后卡死，需重启进程 | OPEN | 无 |

### 严重程度：🟢 低（UI/体验问题）

| Issue | 问题描述 | 状态 |
|---|---|---|
| [#6820](https://github.com/agentscope-ai/CoPaw/issues/6820) | 前端 UI 不在流式输出时实时显示模型输出/工具调用/思考过程，全部完成后才一次性显示 | OPEN |
| [#6828](https://github.com/agentscope-ai/CoPaw/issues/6828) | Console 空闲时因无限 CSS 动画持续重绘（CPU ~20%），导致 UI 卡顿 | OPEN |
| [#6813](https://github.com/agentscope-ai/CoPaw/issues/6813) | OpenAI 兼容 ChatResponse 触发 `KeyError: '__aiter__'`，聊天自动标题生成失败 | OPEN |
| [#6810](https://github.com/agentscope-ai/CoPaw/issues/6810) | Windows 安装/更新在覆盖文件前未终止锁定进程（浏览器扩展 NM host 锁文件），导致 NSIS 报错 | OPEN |
| [#6867](https://github.com/agentscope-ai/CoPaw/issues/6867) | Gemini 压缩（compaction）错误：Function call 缺少 `thought_signature` | OPEN |

---

## 6. 功能请求与路线图信号

### 可能被纳入 v2.1.0 正式版的功能（已有对应 PR 在推进）

| 功能 | Issue / PR 参考 | 状态 | 判断依据 |
|---|---|---|---|
| **ReMe 记忆搜索 Reranker** | [#6398](https://github.com/agentscope-ai/CoPaw/pull/6398)（后端已合并）、[#6399](https://github.com/agentscope-ai/CoPaw/pull/6399)（UI 待合并） | 后端已合入，UI 待合并 | 用户 [MCQSJ] 在 [#6840](https://github.com/agentscope-ai/CoPaw/issues/6840) 询问 ReMe4 完整 roadmap（Auto-Link、tri-modal search、4-category digest weights），该项目组正在逐步推进 |
| **Per-session 模型覆盖** | [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | 待合并（已提交 1 个月） | 允许单智能体在不同会话中使用不同 LLM，对多场景用户有实用价值 |
| **MCP 工具调用超时配置** | [#6724](https://github.com/agentscope-ai/CoPaw/issues/6724) | OPEN | MCP 会话无超时上限，慢/挂起 MCP server 会无限阻塞。用户有强烈需求 |
| **Auto-Dream 容错** | [#6884](https://github.com/agentscope-ai/CoPaw/pull/6884)（first-time-contributor） | 待合并 | 单个单元集成失败不应使整个任务标记为 error。对应 Issue [#6841](https://github.com/agentscope-ai/CoPaw/issues/6841) |

### 需求旺盛但尚无对应 PR 的功能

| 功能 | Issue | 提出时间 | 备注 |
|---|---|---|---|
| **对话内运行 Shell 命令面板**（查看/终止/延长超时） | [#4237](https://github.com/agentscope-ai/CoPaw/issues/4237) | 2026-05-12 | 3 个月未实现，用户对命令的可见性和控制有强烈需求 |
| **后台任务面板默认折叠/收纳** | [#6876](https://github.com/agentscope-ai/CoPaw/issues/6876) | 2026-08-10（已关闭） | 用户反馈任务卡片占满聊天窗口，建议默认折叠。Issue 已关闭但需求真实 |
| **窗口大小/位置记忆** | [#4634](https://github.com/agentscope-ai/CoPaw/issues/4634) | 2026-05-22 | 3 个月未实现，Desktop 每次启动重置为 1280×800 |
| **"接收字符数"动态提示开关** | [#6585](https://github.com/agentscope-ai/CoPaw/issues/6585) | 2026-07-30 | 用户认为动态数字闪动干扰注意力，希望有开关 |
| **会话标题自动刷新** | [#6881](https://github.com/agentscope-ai/CoPaw/issues/6881) | 2026-08-10 | 记忆更新后自动刷新会话标题以反映当前主题 |

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **Docker 部署体验不佳**（#6782）：用户反馈插件/应用市场在 Docker 版 2.0.1 中完全无法使用，持续提示"维护中"。9 条评论无人回应，**Docker 用户是重要使用群体，此问题需优先解决**。

2. **MCP 工具不可用/调用失败**：
   - [#6405](https://github.com/agentscope-ai/CoPaw/issues/6405)：升级 2.0 后 MCP 工具始终提示 "Tool not found"，4 条评论，创建 19 天仍然未解决。
   - [#6839](https://github.com/agentscope-ai/CoPaw/issues/6839)：MCP 工具传参时数字字符串被转成数字格式导致调用失败（例如 API key "0.5" 被转成 0.5）。

3. **杀软误报/拦截**（#6847）：执行任务时经常被杀软拦截甚至强制关停进程，影响任务稳定性。

4. **Workspace 目录被自生成文件塞满**（#6866）：agent 运行时在工作区生成大量 .py/.sh 文件，用户询问是否有办法限制。

5. **2.0.1 空闲卡死**（#6780）：不使用时几十分钟后进程卡死，只能重启。此问题影响面较大，已有多名用户遇到。

6. **前端输出不实时**（#6820）：UI 未在流式输出时显示模型输出/工具调用/思考过程，全部完成后才一次性显示——这与用户对"实时响应"的预期严重不符。

### 积极反馈

- 用户对项目整体给予正面评价（"非常不错的项目"，#6585）。
- 社区贡献者活跃：多条 first-time-contributor PR 正在推进（#6884、#6854、#6808、#6615、#5992），外部贡献生态健康。

---

## 8. 待处理积压

### ⚠️ 需要维护者关注的长期未响应 Issue

| Issue | 创建时间 | 天数 | 问题 | 建议 |
|---|---|---|---|---|
| [#6782](https://github.com/agentscope-ai/CoPaw/issues/6782) Docker 插件市场"维护中" | 2026-08-07 | **4 天** | 9 条评论，无维护者回应 | **优先排查** Docker 环境下插件市场服务端问题 |
| [#6405](https://github.com/agentscope-ai/CoPaw/issues/6405) MCP 工具提示 "Tool not found" | 2026-07-23 | **19 天** | 升级 2.0 后持续出现，无维护者回应 | 建议安排排查 MCP 工具注册机制在 2.0 中的回归 |
| [#4237](https://github.com/agentscope-ai/CoPaw/issues/4237) 运行中 Shell 命令面板 | 2026-05-12 | **91 天** | 长期未被采纳，4 条评论 | 建议列入路线图评估，或回应用户期望 |
| [#4634](https://github.com/agentscope-ai/CoPaw/issues/4634) 窗口大小/位置记忆 | 2026-05-22 | **81 天** | 3 个月未实现 | 低优先级但实现简单，建议纳入后续版本 |

### ⚠️ 长期未合并的重要 PR

| PR | 提交时间 | 天数 | 说明 |
|---|---|---|---|
| [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) Per-session model overrides | 2026-07-12 | **30 天** | 功能完整（默认关闭，opt-in），建议尽快 review 决定是否纳入 2.1.0 |
| [#6399](https://github.com/agentscope-ai/CoPaw/pull/6399) ReMe Reranker UI 面板 | 2026-07-23 | **19 天** | 后端已合并，UI 部分待 review，建议补齐 |

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 24h 内 39 Issue + 50 PR，社区互动频繁 |
| **响应速度** | ⭐⭐⭐ | 新问题响应积极（如 #6885 当天修复），但历史问题（#6782、#6405、#4237）长期积压 |
| **发布节奏** | ⭐⭐⭐⭐ | 2.1.0b2 已发布，RC 发布说明已准备（PR #6875），预计很快进入正式版 |
| **代码质量** | ⭐⭐⭐⭐ | CI/测试门禁在推进（PR #6764），社区贡献 PR 质量整体不错 |
| **兼容性** | ⭐⭐ | 2.1.0b2 在中文输入法、macOS、Docker 等环境出现多个兼容性问题，需加强多平台回归测试 |

**结论**：CoPaw 项目处于 **v2.1.0 发布前的冲刺阶段**，功能迭代积极，社区生态健康。建议维护者在正式版发布前集中处理以下优先级项：
1. **Docker 插件市场不可用**（#6782）— 影响面大
2. **中文 IME 崩溃**（#6885）— 已修复待合并，需尽快合入
3. **macOS SIGBUS 崩溃**（#6814）— 严重稳定性问题
4. **MCP 工具 not found**（#6405）— 19 天无人响应，2.0 核心功能回归

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-11

> 客观专业，数据驱动，突出项目健康度


## 1. 今日速览

ZeroClaw 在过去 24 小时内保持**高热度和高吞吐**的社区活跃度：新增/活跃 Issue 50 条（全部为活跃讨论状态，无关闭），PR 更新 50 条（49 条待合并，1 条关闭）。**安全审计类 Issue 成为当前主导议题**——由外部贡献者 belumume 和 metalmon 连续报告的 S0/S1 级安全缺陷（知识图谱跨代理越权、git 写操作绕过风险分类器、WhatsApp 空白名单默认放行等）说明项目正处于安全硬化的集中阶段，同时暴露了沙箱、配对握手、审计日志等关键链路的防护缺口。PR 队列中 49 条等待合并（多条带有 `needs-author-action` 标签），可能存在**贡献者响应瓶颈**，建议维护者集中推进一轮 PR 审核与合入。今日无新版本发布。

- **Issue 活跃度**：50 条更新/新增，峰值讨论集中在安全审计（#9389–#9397 系列）和 RFC 治理流程（#6808、#9496）
- **PR 活跃度**：50 条更新，但仅 1 条关闭（#8301，测试补充），无新合并——**项目今日无功能性代码进入 master**
- **核心信号**：安全缺陷报告密集且严重度高，但对应的修复 PR 多处于 `needs-author-action` 状态，风险暴露窗口较长
- **风险提示**：最严重的问题（#9647 知识图谱无归属、#9855 Matrix 绕过 .well-known 发现、#9627 git 写操作绕过风险分类）均无对应修复 PR


## 2. 版本发布

本日无新版本发布。


## 3. 项目进展

今日**仅 1 个 PR 被关闭**（#8301，测试补充），无功能性代码合入 master。但 PR 队列中有多个关键修复已完成提交并等待合入，值得关注：

| PR | 优先级 | 内容 | 状态 |
|----|--------|------|------|
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | P1 | cron 代理任务增加墙钟超时，防止 hung run 永久持锁 | 待合并，`needs-author-action` |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | P1 | 仪表盘 WebSocket 断开不再取消运行中的代理 turn | 待合并，`needs-author-action` |
| [#9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) | P2 | 新增 `dag_plan_execute` 工具，支持 DAG 顺序/并行任务规划 | 待合并 |
| [#9583](https://github.com/zeroclaw-labs/zeroclaw/pull/9583) | P2 | rustdoc 警告纳入 CI 严格门禁（对应 #9545） | 待合并 |
| [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) | 安全 | Lark 验证令牌改用 `constant_time_eq` 防时序攻击 | 待合并，`needs-author-action` |
| [#9523](https://github.com/zeroclaw-labs/zeroclaw/pull/9523) | P2 | 邮件通道完整实现 RFC 5322 References 链路并遵从 Reply-To | 待合并 |

整体来看，项目在 **cron 稳定性、网关连接语义、邮件互操作性和 CI 质量门禁** 四个方向已有实质性的代码产出，但由于 49 条 PR 积压待合入，项目实际落地进度滞后于社区产出。


## 4. 社区热点

### 🔥 热点一：RFC 治理流程的路径依赖与自我修正（#6808，23 条评论）
[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) 作为一项跨越多版本的治理型 RFC（从 0.8.0-beta-1 推进至 0.8.3，第 24 次修订），持续获得最高关注。其讨论的"工作泳道 + 看板自动化 + 标签清理"是维持项目在 50 Issues/50 PRs 日吞吐下可持续协作的基础设施。衍生需求：

- [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)（7 条评论）——精简 RFC 流程，将强制七天讨论期和广泛一致同意改为更轻量的决策模型
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（12 条评论）——维护者决策队列 Tracker，集中追踪待决 RFC/设计问题

**诉求分析**：社区正在**主动降低自身的协作摩擦**。在 Issue/PR 双双达到日更 50 条的量级后，原有的重流程决策机制成为瓶颈——这标志着 ZeroClaw 已从创业期进入规模化协作阶段。

### 🔥 热点二：安全审计系列 Issue（#9389–#9397，单条最高 12 条评论）
由 belumume 在 7 月 26 日集中提交的安全审计系列（#9389 未认证配对锁定绕过、#9391 审计日志空写、#9392 LINE 群组绕过白名单、#9393 Bluesky/Reddit 无发送者鉴权、#9395 WASI 出口无目标策略、#9397 WhatsApp 空白名单默认放行）持续保持高热度。贡献者 metalmon 后续跟进（#9647 知识图谱越权、#9627 git 写操作绕过分类器）。

**诉求分析**：ZeroClaw 的威胁模型正在从功能完整性向安全纵深防御演进。社区明确要求：
- **默认安全**——如 #9397 要求空 `allowed_groups` 应视为拒绝全部，而非默认放行
- **一致的鉴权覆盖**——#9393 指出多个通道完全没有发送者鉴权，且无中央闸门统一兜底
- **可观测的安全行为**——#9391 指审计日志默认开启但实际不写入，造成"安全假象"


## 5. Bug 与稳定性

### S0 级（数据丢失/安全风险）

| Issue | 问题 | 状态 |
|-------|------|------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | 知识图谱无 per-agent 归属，任意代理可读写其他代理知识 | 无对应修复 PR |
| [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | Matrix 通道绕过 `.well-known/matrix/client` 发现，直连配置主机 | 无对应修复 PR |
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | `git` 写操作可通过 `-C` / `--git-dir` 全局选项绕过风险分类器和审批门 | 无对应修复 PR |

### S1 级（工作流阻断）

| Issue | 问题 | 对应修复 PR |
|-------|------|-------------|
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | `web_fetch` 对 gzip/brotli/deflate 压缩响应返回乱码，代理无法解析 | 无 |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | 运行中的 SOP 作业无 Stop/Cancel 操作路径 | 无 |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Docker Compose 网关在发布端口后仍可能绑定 loopback，外部无法访问 | 无 |
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `sops_dir` 文档化默认值未被 daemon 尊重，SOP 静默不加载 | 无 |
| [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) | Codex CLI `extra_args` 可削弱沙箱/策略边界但无告警 | 无 |

### S2 级（行为降级）

| Issue | 问题 |
|-------|------|
| [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | daemon 重载未绑定 SIGUSR1，且降级安全警告建议发送的信号会杀死 daemon |
| [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) | ZeroCode 流式用户回合被小型本地模型（llama3.2）误判为日志/API 载荷 |
| [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) | WebChat 流式期间自动滚动覆盖手动滚动，无法阅读历史 |
| [#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) | cron 父级帮助文本仍打印无效的 add-at/add-every/once 示例 |

### 值得注意
**今日有修复 PR 对应的 Bug 仅 2 个**（#9545 → #9583，rustdoc 门禁；#9771 → 对应 clippy 修复仍在推进中）。其余 S0/S1 级问题均无对应的修复 PR 在队列中——**安全风险暴露窗口较长**，需要维护者优先分配资源。


## 6. 功能请求与路线图信号

### 可能纳入下一版本（已有对应 PR）

| 功能 | 对应 PR | 信号强度 |
|------|---------|----------|
| OpenAI Chat Completions 兼容端点（#8486） | [PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | 高——PR 已 XL 规模，关联 #8550 关闭项，社区明确需要 OpenAI SDK/Continue.dev 等工具链接入 |
| DAG 任务规划工具（#9554） | [PR #9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) | 高——并行/顺序混合规划是 agent 任务编排的核心能力 |
| 远程 MCP 服务器自定义 CA 信任（#9339） | 无 PR | 中——企业内网私有 CA 场景的刚需 |
| PowerShell 作为 Windows 原生 shell（#9182） | [PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | 中——Windows 用户的基础体验改善 |
| Telegram/Matrix 多消息流式模式（#8561 / #8443） | [PR #8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)、[PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | 中——对齐 Discord/Matrix 已有的流式体验 |

### 路线图级信号

- **RFC #7100**（13 条评论）——Per-model 能力与上下文窗口配置，涉及视觉模型支持、上下文预算与 UI 展示的一致性。若获通过，将影响配置 schema、网关路由和前端展示三层。
- **RFC #9530**（7 条评论）——测试变更在高风险路径中的风险优先级定义，是治理细节的补全。
- **#9345**（2 条评论）——PR 风险/大小标签的自动化重算，配合 #6808 的 Board Automation 方向。


## 7. 用户反馈摘要

### 安全审计者的反馈（belumume，集中提交 6 条安全 Issue）
> "Found while auditing the host this project builds against. Every cited line was opened and every quote checked against HEAD before filing."

用户以白帽审计的方式逐行核验源码后报告缺陷，属于高信任度的专业反馈。涉及的问题均给出精确定位（文件:行号），修复成本可评估。

### 知识图谱隔离诉求（metalmon，#9647）
> "Any agent can read and mutate another agent's captured knowledge."

多代理场景下的数据隔离是用户明确表达的核心痛点——这不仅是安全问题，也关乎多代理协作的正确性。

### Matrix 部署者的痛点（lugu，#9855）
> "Bypasses standard Matrix client-server discovery (/.well-known/matrix/client)"

用户强调其部署环境依赖标准的 Matrix 发现机制，直连配置在联邦网络中不可用。

### 小型模型用户的体验反馈（Audacity88，#8999）
> "A simple greeting is interpreted as protocol or log data instead of ordinary conversation."

ZeroCode 对使用本地小型模型（llama3.2）的用户存在**协议污染问题**——流式用户消息被拼接了过多元数据，导致小模型混淆。这对"本地优先"用户群是关键体验缺陷。

### 贡献者体验
多条 `needs-author-action` PR 长期未更新（如 #8486 已 43 天、#8713 已 38 天），说明贡献者在等待维护者反馈后未能及时跟进，或者维护者的评审意见未被及时传达。


## 8. 待处理积压

### 紧急关注（超过 30 天未合入的关键 PR）

| PR | 内容 | 优先级 | 等待天数 | 阻塞原因 |
|----|------|--------|----------|----------|
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | OpenAI Chat Completions 端点 | P1 相关 | 43 天 | `needs-author-action` |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | file_download SSRF 门禁 | 安全 S0 相关 | 38 天 | `needs-author-action` |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | cron 墙钟超时释放锁 | P1 | 19 天 | `needs-author-action` |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 网关断连不取消 agent turn | P1 | 31 天 | `needs-author-action` |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | Telegram 多消息流式 | P2 | 42 天 | `needs-author-action` |
| [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | Windows PowerShell 原生支持 | P2 | 22 天 | 待合入 |

### 长期未响应的安全 Issue（无对应 PR）

| Issue | 严重度 | 等待天数 |
|-------|--------|----------|
| [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)（Codex CLI 沙箱削弱告警） | 安全 | 116 天 |
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627)（git 写操作绕过风险分类） | S0 | 10 天 |
| [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855)（Matrix 绕过发现机制） | S0 | 2 天 |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)（知识图谱跨代理越权） | S0 | 10 天 |

### 维护者行动建议

1. **优先处理 3 个 S0 级安全 Issue**（#9647、#9855、#9627），分配核心维护者确认修复方案
2. **集中处理 `needs-author-action` 标签的 PR**——联系作者要求补充修改，或由维护者直接接手完成
3. **推动 #6808 RFC 的决策落地**——社区已在等待工作流自动化的实际实施
4. **考虑开启一轮安全专项**——belumume 和 metalmon 的审计模式效率很高，可给予引导和激励以持续覆盖更多代码路径


> 报告生成时间：2026-08-11 | 数据来源：[ZeroClaw GitHub](https://github.com/zeroclaw-labs/zeroclaw) | 下次更新：2026-08-12

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*