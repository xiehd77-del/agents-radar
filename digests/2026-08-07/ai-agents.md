# OpenClaw 生态日报 2026-08-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-07 02:44 UTC

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

好的，这是 2026 年 8 月 7 日的 OpenClaw 项目动态日报。

---

## OpenClaw 项目日报 — 2026-08-07

### 1. 今日速览

OpenClaw 项目在 2026 年 8 月 7 日保持着极高的社区活跃度，过去 24 小时内 Issues 和 PR 更新均达到 500 条，呈现“高提交、高讨论、高积压”的三高态势。数据显示，社区反馈的热点集中在**消息丢失与投递可靠性**（多条 P0/P1 Bug）、**会话状态管理与上下文压缩（Compaction）缺陷**以及**安全与权限控制**三个方面。虽然今日无新版本发布，但多条标记为 `clawsweeper:fix-shape-clear` 和 `queueable-fix` 的 Issue 表明维护者正在积极筛选并准备修复队列。项目整体处于功能迭代密集期，但稳定性问题（尤其是多个 P0 回归）是需要优先关注的健康度风险。

### 3. 项目进展

今日虽无新版本发布，但通过对合并/关闭的 PR 分析，项目在以下方面取得了实质性推进：

- **自动化与质量保障**:
    - [PR #120096](https://github.com/openclaw/openclaw/pull/120096) (已合并) 修复了 oxlint 分片选择器缺失时静默运行的问题，避免了 CI 流程中的假阳性结果，提升了代码检查的可靠性。
    - [PR #120095](https://github.com/openclaw/openclaw/pull/120095) 修复了更新重启失败日志被裁剪的问题，确保 `update-restart-auth` 测试通道能够保留关键的守护进程证据，便于定位启动失败原因。
- **跨平台与协议支持**:
    - [PR #120084](https://github.com/openclaw/openclaw/pull/120084) 对齐了 Fish Audio 语音插件的目录结构，解决了仓库布局与包身份不匹配的问题，是插件生态规范化的一小步。
- **核心逻辑修复与性能**:
    - [PR #120020](https://github.com/openclaw/openclaw/pull/120020) 修复了非 Anthropic 模型（如 Qwen）通过 Agent Core 交接时推理开关（`thinkingLevel: "off"`）被重置的问题，确保了用户配置的严格执行。
    - [PR #120106](https://github.com/openclaw/openclaw/pull/120106) 修复了 OpenClawKit 在 WebSocket 测试中因双帧同时到达而导致响应丢失的竞态问题。

这些合并且的PR表明项目在**维护工程化基础设施**和**修复跨模型兼容性细节**方面正在稳步前进。

### 4. 社区热点

今日社区讨论的焦点集中在几个高关注度、高回复的 Issue 上，反映了用户的真实痛点：

- **[Issue #75](https://github.com/openclaw/openclaw/issues/75) (已关闭, 评论: 116, 👍: 80): Linux/Windows Clawdbot Apps** — 这是社区呼声最高的功能请求。大量用户希望官方提供 Linux 和 Windows 平台的桌面应用，反映出OpenClaw用户群体已不局限于macOS/iOS生态。该 Issue 虽已关闭，但高赞数据表明这是一个强烈的产品路线图信号。
- **[Issue #116277](https://github.com/openclaw/openclaw/issues/116277) (已关闭, 评论: 114): DeepSeek v4 Flash silent reply failure** — 这是一个严重的可靠性问题。模型静默失败且不生成回复，仅返回通用兜底消息。高讨论量说明此问题影响范围广，社区迫切希望了解根因和修复方案。
- **[Issue #7707](https://github.com/openclaw/openclaw/issues/7707) (评论: 28): Memory Trust Tagging by Source** — 这是一个关于AI安全的深度讨论。用户提议对记忆条目标记信任等级，以防止通过网页、第三方技能等不可信来源进行“记忆投毒”攻击。体现了社区对智能体安全性的前瞻性思考。

### 5. Bug 与稳定性
. 今日报告的 Bug 数量众多，按严重程度排列如下：

**P0 级 (严重，需立即关注):**

- **[Issue #119263](https://github.com/openclaw/openclaw/issues/119263): Agent DB v14->v15迁移失败导致Gateway无法启动** — `openclaw doctor --fix` 在迁移数据库时失败（`no such column: entry_valid`），导致升级后服务完全不可用。这是严重的升级阻断问题。
- **[Issue #118772](https://github.com/openclaw/openclaw/issues/118772): `sessionEntry.totalTokens` 膨胀导致过早压缩和上下文丢失** — 这是一个回归 Bug，导致会话在仅使用 4-8% 上下文窗口时就被强制压缩，存在数据丢失风险。

**P1 级 (高优先级):**

- **[Issue #92186](https://github.com/openclaw/openclaw/issues/92186): 前台回复围栏取消较早并发群组消息的投递** — 在多用户 @提及的群聊场景中，仅有最后一条回复被送达，其他完成回复虽在 Dashboard 可见但未送达 WhatsApp。
- **[Issue #115700](https://github.com/openclaw/openclaw/issues/115700): `chat.send` 因“线程切换分支”被拒绝** — 模型完成后，由于 `expectedLeafEntryId` 过期，导致后续消息发送失败，需刷新状态。
- **[Issue #119087](https://github.com/openclaw/openclaw/issues/119087): Gateway 冷启动性能回归** — 从 2026.7.1-beta.1 到 2026.7.2-beta.7，在 1-vCPU 容器上启动时间慢了约 2.5 倍。
- **[Issue #95553](https://github.com/openclaw/openclaw/issues/95553): 预压缩（预算触发）硬编码约60秒超时** — 该 Bug 导致预算触发的压缩无法在大型会话中完成，并忽略 `compaction.timeoutSeconds` 配置。

**修复状态：** 今日报告中的多个高严重性 Bug (如 #119263, #118772, #115700) 均有 `clawsweeper:linked-pr-open` 标签，表明自动修复机器人或社区贡献者已提交相关PR，但尚未合并。例如 [PR #118879](https://github.com/openclaw/openclaw/pull/118879) 旨在解决 #118873 的会话卡死问题，[PR #118488](https://github.com/openclaw/openclaw/pull/118488) 旨在修复心跳通知导致的死信问题。

### 6. 功能请求与路线图信号

今日涌现的功能请求揭示了未来版本的潜在方向：

- **Agent 安全与权限管理** (高优先级): 多个相关请求被提出，包括 [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) (记忆信任标签) 和 [Issue #15032](https://github.com/openclaw/openclaw/issues/15032) (子代理工具限制)。**已有相关PR**: [PR #78441](https://github.com/openclaw/openclaw/pull/78441) (feat(subagents): add durable per-spawn tool policies) 已开放数月，可能是回应此需求。这强烈暗示下一版本将加强安全边界控制。
- **可观测性与运维** (中优先级): [Issue #45565](https://github.com/openclaw/openclaw/issues/45565) 建议将网关生命周期警告路由到专用频道；[Issue #6599](https://github.com/openclaw/openclaw/issues/6599) 建议在验证回退链时添加 `/models test-fallback` 命令。这些需求表明用户希望更精细地控制日志噪音并主动验证配置。
- **跨平台客户端** (长期需求): [Issue #75](https://github.com/openclaw/openclaw/issues/75) 虽已关闭，但 80 个 👍 和 116 条评论无疑使其成为重要的路线图信号。官方若提供 Linux/Windows 客户端，将极大扩展用户基础。
- **新协议支持**: [PR #120115](https://github.com/openclaw/openclaw/pull/120115) (feat(plugins): support the Agent Plugins bundle format) 表明项目正积极跟进 OpenAI、Vercel 等公司发布的 [Agent Plugins 1.0.0](https://agent-plugins.org) 开放标准。这一举措将显著提升 OpenClaw 的生态兼容性和互操作性。

### 7. 用户反馈摘要

- **稳定性是核心痛点**: 大量高赞 Issue 集中在消息丢失（#116277）、回复不投递（#92186）、会话卡死（#118772）、服务启动失败（#119263）等可靠性问题上。用户在 [Issue #116277](https://github.com/openclaw/openclaw/issues/116277) 中对“静默失败”表达了强烈不满，认为这严重影响了日常使用的信任感。
- **高级用户占比高，需求复杂**: 用户不仅仅在使用基础聊天功能，还在构建复杂的多智能体工作流（#27445）、DMZ 网络安全搜索（#15032）和家庭自动化（#73537）。这些用户提出的需求（如 A2A 单向调度模式 #44309、感知速率的限流 #45771）更偏向于平台能力，而非简单的功能追加。
- **配置复杂度和透明度问题**: 用户对配置的“魔法”行为表示困惑，如 [Issue #102755](https://github.com/openclaw/openclaw/issues/102755) 中提到的 Windows/WSL 构建挂起，以及 [Issue #76492](https://github.com/openclaw/openclaw/issues/76492) (已关闭) 中提到的 CLI 静默降级问题。用户希望系统能提供更清晰的反馈和诊断信息，而非静默失败或降级。

### 8. 待处理积压

以下 Issue/PR 已开放较长时间，且持续获得维护者和社区关注，但尚未有明确的解决路径：

- **[Issue #7707](https://github.com/openclaw/openclaw/issues/7707) (自2026-02-03): 记忆信任标签** — 该高讨论度安全请求目前已贴上 `clawsweeper:needs-product-decision` 和 `needs-maintainer-review` 标签，等待产品决策。
- **[Issue #15032](https://github.com/openclaw/openclaw/issues/15032) (自2026-02-12): 子代理工具限制** — 该需求已有关联PR ([#78441](https://github.com/openclaw/openclaw/pull/78441))，但 PR 可能需要更多证明或审查。此需求与安全密切相关，在 AI 安全日益重要的今天，立项优先级应被提高。
- **[Issue #6599](https://github.com/openclaw/openclaw/issues/6599) (自2026-02-01): `/models test-fallback` 命令** — 一个实用的调试工具请求，目前处于 `needs-product-decision` 状态，缺乏主要维护者的明确反馈。

**给维护者的提醒：** 多个 P0/P1 级 Bug（特别是 #119263 数据库迁移失败和 #118772 令牌膨胀）已直接影响用户升级和正常使用，且已有PR在等待合并。强烈建议优先审查并合入这些关键修复，以遏制社区负面反馈的扩散，维护项目健康度。此外，应在下个版本中明确回应对安全相关功能（#7707, #15032）的产品决策。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告

**报告日期：2026-08-07**
**覆盖项目：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、IronClaw、LobsterAI 等**


## 1. 生态全景

当前的个人 AI 助手/自主智能体开源生态正处于**高强度的功能迭代与稳定性拉锯期**。头部项目（OpenClaw、Hermes Agent、IronClaw）日 PR/Issue 更新量均达 50 条量级，展现了大体量项目在核心功能（消息可靠性、会话管理、上下文压缩）上的攻坚态势；腰部项目（NanoBot、NanoClaw）则以更灵活的节奏聚焦安全加固与渠道体验闭环；与此同时，一批小体量项目（PicoClaw、LobsterAI）通过精准的场景切入（QQ 渠道多媒体、Windows 安装体验）维持差异化竞争力。整体来看，生态已从"验证概念"阶段进入"生产环境可用性打磨"阶段——**稳定性与安全性已取代新奇功能成为社区最强烈的诉求**。


## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 | 新版本 | 健康度评估 |
|------|-------------|---------|-----------|--------|-----------|
| **OpenClaw** | ~500 | ~500 | 未明确（多条合并） | 无 | 🟡 **高活跃/高风险** — "三高"态势（高提交/高讨论/高积压），多个 P0 Bug（DB 迁移失败、token 膨胀）且有 PR 待合，需警惕回复反馈扩散 |
| **Hermes Agent** | 50 | 50 | 11 合并 | 无 | 🟡 **高活跃/中风险** — 桌面端修复加速（同日 3 PR 合并），但 Feishu 审批按钮问题持续近 4 个月未修，社区信任度承压 |
| **NanoBot** | 10 | 17 | 6 合并 | 无 | 🟢 **健康迭代** — P0/P1 安全问题均当日获得修复 PR，响应速度优秀，合并节奏合理 |
| **IronClaw** | 50 | 50 | 17 合并 | **v1.1.0** | 🟢 **健康迭代** — 首个稳定版发布，Inspector 新功能集群推进有力，但 Slack 集成系列问题仍待解决 |
| **NanoClaw** | 少量 | 14 | 8 合并 | 无 | 🟢 **活跃向好** — 核心团队清理技术债（技能体系、调度模块），更新机制安全性问题已获修复 PR |
| **PicoClaw** | 0 | 2 | 1 合并 | 无 | 🟢 **存量消化** — 合并了积压 5 个月的 QQ 多媒体 PR，但整体活跃度偏低 |
| **LobsterAI** | 6 | 4 | 0 | 无 | 🟡 **平稳/需关注** — 无合并动作，模型 ID 含斜杠无法选择的 Bug 覆盖所有 OpenAI 兼容服务商 |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ **休眠或极低活跃** |
| **CoPaw / ZeroClaw** | — | — | — | — | ⚠️ 数据抓取失败 |


## 3. OpenClaw 在生态中的定位

**生态位：事实上的头部基准项目。** 其日更新量（~500 条 Issues + PRs）远超其他所有项目之和，社区规模与讨论深度均处于第一梯队。与同类核心差异如下：

| 维度 | OpenClaw | 对比说明 |
|------|----------|---------|
| **技术路线** | 全平台覆盖（macOS/iOS 为主，Linux/Windows 呼声极高）、统一 Agent Core 交接机制 | Hermes Agent 侧重桌面端 + 多平台 IM（含 Feishu）集成；NanoBot 定位 WebUI 优先 + Matrix/Telegram 渠道 |
| **核心瓶颈** | 消息投递可靠性（P0/P1 集中区）、上下文压缩（Compaction）缺陷 | 已投入 `clawsweeper` 自动修复机器人筛选队列，具备更成熟的工程化质量保障体系（oxlint CI 等） |
| **社区诉求分层** | 覆盖从普通用户（Linux/Windows 客户端 #75，80👍）到高级开发者（记忆信任标签 #7707、A2A 调度）的全谱系需求 | Hermes Agent 的用户诉求更偏向组织级协作（Feishu 审批流、子代理权限）；NanoClaw 用户则更关注自托管部署的可靠性 |

OpenClaw 的**核心竞争壁垒**在于其庞大的插件生态（Agent Plugins bundle 标准跟进）、跨模型推理兼容性修复深度（如 Qwen 交接时的 `thinkingLevel` 重置修复），以及社区自愈能力（高 severity Bug 多数已有关联 PR）。但这也使其面临**"功能迭代速度与稳定性平衡"**的典型挑战。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **消息投递与可靠性** | OpenClaw（多 P0/P1）、NanoBot（PR #5271 会话覆盖）、Hermes Agent（Feishu 静默失败）、IronClaw（Slack 错投 #5877） | 消息丢失、错投、静默失败是最普遍的用户痛点；多项目均出现"配置了但没生效"的隐蔽失败模式 |
| **会话生命周期管理** | OpenClaw（#118772 token 膨胀）、Hermes Agent（#80724 token_count 未写入）、NanoBot（#5273 保留裁剪丢消息）、IronClaw（Routine "No thread attached"） | 会话压缩时机、token 成本计算、线程附着与归档策略是多项目共同的技术债 |
| **安全边界与凭据管理** | NanoBot（PR #5270 密钥泄漏子进程、#5269 全局 env 覆盖）、Hermes Agent（#77484 脱敏间隙）、OpenClaw（#7707 记忆信任标签）、IronClaw（MCP 驱动不可用） | AI Agent 的凭据泄漏面、记忆投毒防御、子代理工具权限控制成为安全焦点 |
| **跨渠道/多平台体验** | IronClaw（Slack 集成系列）、Hermes Agent（Feishu 审批）、NanoBot（Matrix 语义）、PicoClaw（QQ 附件）、NanoClaw（Telegram 富消息） | 渠道层从"能收发消息"走向"原生交互语义完整"（回复线程、富媒体、审批交互） |
| **可观测性与诊断** | OpenClaw（#6599 /models test-fallback）、Hermes Agent（Inspector 集群）、LobsterAI（#2447 无输出无错误）、NanoBot（#5266 token 用量追踪） | 多项目用户均表达对"黑盒运行"的不满，要求更透明的中间态反馈、用量统计和日志噪音控制 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|-----------------|
| **OpenClaw** | 通用个人 AI 助手，全渠道、插件生态、多模型支持 | 从普通用户到高级开发者的全谱系 | 统一 Agent Core 交接机制；强调跨模型推理开关一致性；工程化 CI（oxlint）保障 |
| **Hermes Agent** | 桌面端优先 + 企业IM（Feishu）深度集成 | 组织级用户、桌面重度用户 | 多 Profile 网关架构；桌面 SSH 模式；多设备协同仍是短板（单设备观看限制 #80723） |
| **NanoBot** | WebUI 优先的轻量部署 | 自托管用户、个人开发者 | WebUI 静态资源预生成 gzip；cron + subagent 调度；Dream 长期记忆归档系统 |
| **IronClaw** | 平台级 Agent 编排（NEAR 生态） | 开发者/运维团队 | MCP 服务器扩展注册；Routine 调度 + 租约机制；Inspector 运维面板；沙箱隔离（Docker/Railway 独立 profile） |
| **NanoClaw** | 技能生态 + 渠道适配的轻量 Agent | 社区用户、Telegram/QQ 场景 | 技能系统（pre-flight 与凭据解耦）；事务性自更新机制；用户 ID 按渠道类型前缀命名空间 |
| **PicoClaw** | 极简 Agent，中文社交渠道（QQ）优先 | 中文用户、入门开发者 | 轻量架构，聚焦 QQ 频道多媒体双向链路；Web UI 模型回退链配置 |
| **LobsterAI** | 个人 AI 助手（OpenClaw 衍生） | 中文用户、Windows 部署 | 与 OpenClaw 配置兼容；Windows 安装器专项优化 |

**关键观察：**
- **OpenClaw 与 Hermes Agent 的竞争最直接**——均试图覆盖"全渠道 + 多模型 + 桌面/移动端"的通用场景，但 Hermes 在 Feishu 等中国企业级渠道上具备先发优势，OpenClaw 则以更庞大的插件生态和社区规模取胜。
- **IronClaw 走出了平台化路线**（MCP 注册、Routine 调度、沙箱隔离），更接近"Agent 基础设施"而非终端产品。
- **NanoBot/NanoClaw/PicoClaw 构成了"轻量自托管"梯度**，分别以 WebUI/Telegram/QQ 为第一渠道锚点，避免与头部正面竞争。其中 NanoClaw 在清理捆绑技能干扰、包管理体验上着力，指向对开箱即用体验的重视；PicoClaw 则通过 QQ 渠道和回退链配置，明确聚焦中文社区的真实业务场景。


## 6. 社区热度与成熟度

```
快速迭代期（功能叠加 + 修复并行）
├── OpenClaw     — 极高热度，但 P0 积压是健康度隐患
├── Hermes Agent — 桌面端修复加速，Feishu 问题拖累信任
└── IronClaw     — v1.1.0 发布后进入功能拓展期（Inspector 集群）

质量巩固期（安全加固 + 技术债清理）
├── NanoBot      — 安全修复响应速度优秀（P0/P1 均当日有 PR）
└── NanoClaw     — 核心团队主导的技能体系清理 + 调度修复

存量消化期（低频迭代 / 针对性补强）
├── PicoClaw     — 合并积压 PR，但整体活跃度偏低
└── LobsterAI    — 稳定迭代中，需关注 4 月 stale 条目处置

休眠/停滞
├── NullClaw / TinyClaw / Moltis / ZeptoClaw
└── CoPaw / ZeroClaw（数据抓取失败，疑似维护异常）
```


## 7. 值得关注的趋势信号

1. **"生产可用性"取代"功能新奇"成为第一诉求。** 用户对消息丢失（OpenClaw #116277）、静默失败（Hermes Agent #79339）、配置未生效（众多 "看起来设置了但没反应" 类 Issue）的容忍度正在快速下降。**对开发者的参考价值：** 优先投入可靠性工程（错误可观测性、配置回显与验证、优雅降级），而非堆叠新功能。

2. **Agent 安全正从"外围防护"走向"内在机制"。** OpenClaw 的"记忆信任标签"（#7707，防记忆投毒）、NanoBot 的"API 密钥泄漏到子进程"（PR #5270）、Hermes Agent 的输出脱敏间隙（#77484）——安全不再只是网关层的认证授权，而是深入记忆系统、子代理权限、工具结果出口的**全链路数据治理**。**对开发者的参考价值：** 在设计 Agent 架构时，应默认将工具子进程、外部技能、记忆存储视为不可信组件。

3. **"幻觉式成功"（配置了但没生效）是最隐蔽的信任杀手。** 多项目出现"功能已部署但代码路径从未被调用"的问题——Hermes Agent 的 `sync_turn()` 从未被调用（#79339）、NanoClaw 的 `nativeCredentialsEnabled()` 仅读 `process.env`（PR #2705）、Hermes 的 `agent_context` 硬编码（#80646）。**对开发者的参考价值：** 构建关键通路的健康检查与自检机制（如 `/models test-fallback` 之类主动验证命令），并谨慎处理环境差异下的"默认降级"。

4. **插件生态正经历"从数量到质量"的洗牌。** NanoClaw 主动清理捆绑的 Qodo/Google MCP skills（因依赖未配置的 SaaS 并拦截用户请求），OpenClaw 跟进 Agent Plugins 1.0.0 标准（PR #120115），Hermes Agent 新增插件安全扫描（PR #80728）。**对开发者的参考价值：** 插件/技能的默认安全审查、依赖声明、以及与宿主环境（凭据、网络策略）的隔离将决定生态的长期健康度。同时，轻量 vs. 重量级插件框架的取舍（如 PicoClaw 与 NanoClaw 各自的小步快速合并 vs. Hermes 未合并 PR 积压）正在形成分化，提示社区对评审流程的反馈速度已成为贡献者留存的关键变量。

5. **跨渠道一致性成为深水区。** 各项目在 Matrix（NanoBot #5274）、Feishu（Hermes #7675）、Telegram（NanoClaw #2644）、Slack（IronClaw #5834）、QQ（PicoClaw #1349）上均遇到"渠道原生交互语义"适配难题——按钮点击、回复线程、富媒体消息、入房行为，每个渠道都是独立战场。**对开发者的参考价值：** 渠道适配层的抽象能力（统一事件模型 + 渠道适配器）将比单纯增加新渠道更具长期价值。

6. **平台级 Agent 基础设施开始成形（IronClaw 模式）。** Inspector 运维面板、Routine 调度租约、沙箱隔离 profile、Nostr WASM 签名——IronClaw 正在将 Agent 从"聊天机器人"升级为"可运维的分布式计算平台"。**对开发者的参考价值：** 若你的 Agent 将用于生产级多租户场景，需提前考虑：多租户隔离、租约与心跳机制、受限运行时的签名与验证协议，以及面向运维人员的运行时快照与诊断 API。

---

*报告基于 2026-08-07 各项目公开 GitHub 数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报 — 2026-08-07

> 数据统计周期：2026-08-06 ~ 2026-08-07 | 数据来源：HKUDS/nanobot GitHub 仓库

---

## 1. 今日速览

过去24小时项目活跃度处于**高位**，共产生 10 条 Issue 更新与 17 条 PR 更新，其中 6 个 PR 已完成合并/关闭，11 个 PR 处于待合并状态。值得关注的是，**安全类修复**成为今日主线——涉及 API 密钥泄漏到子进程（PR #5270）、密钥写入进程环境变量（PR #5269）以及工作区会话隔离安全边界（Issue #5278）等问题，且均已获得对应 fix PR。同时，**会话生命周期管理**与 **Matrix/WebUI 渠道体验**是社区讨论最密集的方向，前者至少有 3 个关联 PR 在处理同一类隐患。项目整体呈现"快速迭代 + 安全加固"双轮驱动的健康态势，无版本发布窗口。

---

## 2. 版本发布

**无新版本发布。** 项目处于功能叠加与修复密集的窗口期，建议关注后续合并节奏。

---

## 3. 项目进展

今日合入或关闭 6 个 PR，按影响力排序：

- **[CLOSED] PR #5262 — perf(webui): reduce cold-start payload**  
  通过为 WebUI 静态资源预生成 gzip 压缩副本并在网关层协商交付，同时将 React 共享运行时从懒加载的 Markdown/语法高亮/KaTeX chunk 中剥离，显著降低了 WebUI 冷启动首屏负载。这是对前端体验的一次重要性能优化。

- **[CLOSED] PR #5259 — fix(webui): enforce memory-only temporary sessions**  
  严格约定"临时聊天"仅驻留于进程内存、不写入 session 历史/WebUI 转录/自动记忆，为临时对话模式（PR #5252）奠定语义完整性基础。

- **[CLOSED] PR #5248 — fix(matrix): send non-empty POST body on room join**  
  修复 Continuwuity 对空 POST body 返回 M_BAD_JSON 导致机器人无法自动入房的问题，代码评审后已合入并关闭对应 Issue #5247。

- **[CLOSED] PR #5261 — feat(webui): drag sidebar sessions**  
  实现了会话列表拖拽到输入框生成结构化提及、以及拖拽排序持久化的能力，Codex 风格插入线的引入值得关注。

- **[CLOSED] PR #5267 — fix(webui): tighten interactive motion**  
  统一 WebUI 过渡动画时长（220ms），并尊重系统"减少动态效果"设置，属于体验细节打磨。

- **[CLOSED] PR #5231 — feat(memory): archive idle sessions for Dream**  
  为 Dream（长期记忆/归档系统）补齐了短会话因未超出 `retain_recent_legal_suffix` 保护窗口而永远不产生 `history.jsonl` 的空白。

> 核心信号：**WebUI 交互层、会话生命周期、Matrix 兼容性**三条线均在今日有实质合并，且每一条都有后续 PR 持续跟进，说明项目处于"功能→打磨→修复"的良性循环中。

---

## 4. 社区热点

今日讨论热度最高的条目：

- **Issue #5198 — "Not possible to change models in a specific session unless reconfiguring the entire instance"**（3 条评论，上期遗留热点）  
  用户 whisperity 指出：点击聊天输入框附近的模型标识无任何切换效果（不同于云端 SaaS AI 的 UI 交互），`/model` 命令传入其他模型 ID 也无法生效——会话级模型切换能力缺失已成为高频反馈的核心体验诉求。该 Issue 创建于 7/31，已持续活跃一周，说明开发者与维护者之间尚未达成一致方案。

- **Issue #4290 — "cronjob ends early when there's a subagent spawned"**（2 条评论，运行已 58 天）  
  定时任务的经典缺陷：子代理完成后主代理未获得回复机会，导致后续工作流失败，日志已在 Issue 中标明。这是后台自动化场景中 **影响面最广的 Bug 之一**，至今未被修复。

- **PR #5252 — feat(webui): add temporary chat mode**（关联 PR #5259 已合入，本 PR 待合）  
  临时对话模式（类似 ChatGPT 的 incognito）牵动多个前端任务。PR #5259 的合入为其铺路，但 PR #5252 标有 `conflict` 标记，合并尚需协调。

> 社区情绪判断：用户对"会话级能力控制（模型切换、隔离等）"的需求高度一致，且愿意等待较长时间（#5198 持续 7 天、#4290 持续 58 天）——说明这是刚需但非紧急阻断型诉求，维护者已感知并有 PR 在途。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|----------|------|------|
| **P0（数据安全）** | PR #5271 | 后台任务（如 `maybe_generate_webui_title`）持有 Session 引用跨 await 调用，用户 `/new` 后旧 Session 被 `invalidate()`，后台保存可能覆盖新会话数据 | 有待合并 PR |
| **P0（凭据泄漏）** | PR #5270 | `CliAppService.run` 以 `os.environ.copy()` 启动 CLI 子进程，**API 密钥全量泄漏给不受信任的子进程** | 有待合并 PR（含测试） |
| **P1（凭据管理）** | PR #5269 | `OpenAICompatProvider._setup_env()` 将 API 密钥写入进程全局 `os.environ`，多 provider 场景互相覆盖/泄漏 | 有待合并 PR（含测试） |
| **P1（敏感边界）** | Issue #5278 | 会话历史被移入工作区目录（PR #713 引入）后，会话文件与其他工作区文件同权存放，存在被工具链误读/泄漏风险 | 新开，待讨论 |
| **P2（数据完整性）** | Issue #5273 / PR #5272 | 会话保留裁剪（`retain_recent_legal_suffix` / `enforce_file_cap`）会丢弃 `_channel_delivery` 主动投递消息（cron 通知等），已有对应修复 PR | 有成对 PR |
| **P2（数据丢失）** | Issue #5264 / PR #5268 | `GET /api/sessions/{key}/messages` 对非媒体根目录附件不返回 `media_urls`，前端刷新后附件失效；已有 staging 修复方案 | 有成对 PR |
| **P2（参数校验）** | PR #5265 | 工具参数允许 `"NaN"` / `"Infinity"` 通过 `float()` 转换后传入，导致非有限数值参与工具调用 | 有待合并 PR |
| **P2（渠道兼容）** | Issue #5247 / PR #5248 | Matrix 入房空 POST body 被 Continuwuity 拒绝 | ✅ 已关闭 |

> 健康度评估：P0/P1 级问题全部已有对应修复 PR，且附带了隔离测试。项目对安全性问题的响应速度值得肯定（#5270/#5269 创建于 8/6，当日即有完整修复方案）。

---

## 6. 功能请求与路线图信号

- **会话级模型切换**（Issue #5198）：用户明确期望"像 ChatGPT 一样点击模型名称即可切换"。当前 `/model` 仅作为备用模型通道，与主流 AI 产品交互范式脱节。**路线图预判**：高优先级体验项，预计下一版本重点解决。

- **会话级临时文件隔离**（Issue #5276）：`~/.nanobot/workspace` 为所有会话共享，`restrictToWorkspace` 无法区分多租户/多会话临时文件读写。属于多用户部署/沙盒隔离的前置需求，已有安全维度讨论。

- **Matrix 回复/线程语义完善**（Issue #5274、#5275）：用户使用 Matrix 原生 "reply" 和 "reply in thread" 功能时，机器人无法正确处理消息上下文。这是渠道层"原生交互习惯匹配"需求，对深度 Matrix 用户是刚需。

- **Token 用量可观测性**（Issue #5266）：用户反馈两小时消耗百万级 token 而界面无感知。该需求的落地介质大概率是日志结构化 + 用量统计端点，**极有可能是下一轮可观测性增强的方向**。

- **元搜索供应商（MST）**（PR #5234）：将 mst-python 作为聚合搜索源集成，采用 RRF 合并多个引擎结果。这是**功能生态扩展**信号，方向为提升搜索覆盖率，当前待审。

- **共享交互式终端**（PR #5253）：为 WebUI 与 agent 提供项目级共享 PTY，基于 xterm.js 实现。该 PR 标有 `conflict`，说明实现方式还需进一步对齐。

---

## 7. 用户反馈摘要

- **矩阵通道用户 whisperity**（提交 #5198、#5274、#5275、#5276）：高度关注 Session 模型绑定的灵活性、文件隔离边界、以及 Matrix 原生回复/线程语义的对接质量。整体体现出**专业用户对 channel 语义完整性的期待**，情绪中性偏积极，讨论聚焦于设计而非指责。

- **后台自动化用户 tjc0726**（提交 #4290）：cronjob 与子代理组合场景存在**功能完整性缺口**，该 Issue 已存活 58 天未修复，反馈带有明显的**等待焦虑**情绪——每一条日志都贴在 Issue 里，期待维护者给出明确意见。

- **Token 消耗敏感用户 knoppix2**（提交 #5266）：对"无感知的高 token 消耗"表达了**明显的成本担忧**，希望获得按调用维度的用量追踪。这类反馈在自托管/自付费用户中较为普遍，值得产品侧认真对待。

---

## 8. 待处理积压

以下为长期未获回应的关键条目，提醒维护者关注：

- **[Issue #4290] cronjob ends early when there's a subagent spawned — 已存活 58 天，2 条评论**  
  链接：https://github.com/HKUDS/nanobot/issues/4290  
  影响范围：所有依赖 cronjob + subagent 的自动化工作流。其修复可能需要调度器层面的并发协调，期望矩阵中给出明确的时间预估或处理方案。

- **[PR #5252] feat(webui): add temporary chat mode — 已待合并 2 天，标有 `conflict` 标记**  
  链接：https://github.com/HKUDS/nanobot/pull/5252  
  作为临时对话功能的骨架 PR，其与 #5259（memory-only 约束）存在堆叠关系。建议尽早解决冲突与会话语义边界，避免后续 PR 持续踩坑。

- **[PR #5234] feat(agent): integrate mst-python as a metasearch provider — 已待审 4 天，无评论**  
  链接：https://github.com/HKUDS/nanobot/pull/5234  
  新供应商扩展的典型等待案例。MST 对多引擎聚合的实际效果需要维护者给出架构评估意见（尤其与现有搜索工具的取舍关系），避免长期搁置导致社区贡献意愿下降。

- **[Issue #5278] Session history should not live inside the agent workspace — 新开，0 评论**  
  链接：https://github.com/HKUDS/nanobot/issues/5278  
  安全边界的合理质疑，涉及 PR #713 的既有设计决策。建议尽快标记 `security` 标签并组织讨论，明确 session 目录的归属原则。

---

> **一句话总结**：项目处于高活跃迭代期，安全加固和 WebUI 体验是当前两条主线，会话生命周期管理是隐性集中痛点，建议维护者优先处理 #4290 与 #5252 的时间窗口问题。

*报告生成时间：2026-08-07 | 数据截至：2026-08-07 当日快照*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-07

## 1. 今日速览

Hermes Agent 在过去 24 小时内保持了极高的社区活跃度：共产生 50 条 Issue 更新与 50 条 PR 更新，其中新开/活跃 Issue 47 条、待合并 PR 39 条，反映出贡献者 pipeline 充实。值得关注的是，今日有 11 条 PR 被合并或关闭（含 3 条由维护者合并的桌面端修复），但新版本发布为 0，意味着这些修复尚未形成用户可感知的 release。社区讨论热度集中在上周启动的 **god-file 大规模重构 Epic（#78647，53 条评论）** 以及 **Feishu 平台命令审批按钮长期未修复的系列 Bug**。三个桌面端 PR（#80711、#80718、#80719）在同日合并，表明桌面客户端的稳定性修复正在加速推进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 中，桌面端修复占据了主要比重，标志着 **v0.20.0 桌面端回归问题进入集中修复期**：

- **[#80711 — Pin as many sessions as you want, and they stay where you put them](https://github.com/NousResearch/hermes-agent/pull/80711)**（已合并）：修复侧边栏会话 pin/unpin 无法持久化的问题。此前 `PATCH /api/sessions/{id}` 拒绝 `pinned` 字段（对应 Issue #75468），该 PR 修复了 pin 状态在后端不持久、侧边栏重排、pin 顺序丢失等多重问题，直接回应用户对会话管理的核心诉求。
- **[#80718 — Show earlier messages no longer hides most of a session](https://github.com/NousResearch/hermes-agent/pull/80718)**（已合并）：修复“Show earlier messages”出现在距底部仅两三轮的位置、导致长会话几乎不可见的问题；根因是同一权重函数同时供两个预算使用，DOM 预算重复计费。
- **[#80719 — Keep elapsed status text from overlapping](https://github.com/NousResearch/hermes-agent/pull/80719)**（已合并）：修复运行状态标签与计时器文本重叠的 UI 缺陷，将二者拆分到独立的 flex 槽位。

**其他值得注意的进展：**
- **[#80724 — fix(session-db): persist per-message token_count from response usage](https://github.com/NousResearch/hermes-agent/pull/80724)**（待合并）：`messages.token_count` 列在表结构中存在但从未有代码路径写入（20,930 条消息全部为 NULL），导致上下文压缩决策无法基于真实 token 成本计算。该 PR 补齐了这一关键数据通路，对上下文管理有直接改进。
- **[#79221 — fix(agent): scope tool_call_id dedup to current turn, not whole session](https://github.com/NousResearch/hermes-agent/pull/79221)**（待合并）：修复 `sanitize_api_messages()` 中 tool_call_id 去重范围过大的问题——此前对整个 session 全局去重，导致跨轮次的合法重复 call_id 被误删。
- **[#80725](https://github.com/NousResearch/hermes-agent/pull/80725)**（已自动合并）：`npm run fix` 自动格式化 PR，由 bot 维护。

## 4. 社区热点

### #78647 — Epic: Shard all 20 god files（53 条评论）
**[链接](https://github.com/NousResearch/hermes-agent/issues/78647)**

这是当前社区最受关注的议题。2026-08 月起仓库确立了 **"all god files are sharded, never reverted"** 的硬性政策，该 Epic 统筹全仓库 20 个 god-file 的拆分工作。同一作者（andrexibiza）还提交了近 10 个针对单文件的拆分 Issue（如 #78645、#78637、#78635、#78632），每个文件动辄 6,000–10,000+ 行。社区讨论的焦点在于拆分策略（按 cluster 切分、model-first 评审）以及如何保持测试全绿。**这是目前项目架构演进的核心主线。**

### Feishu 命令审批按钮错误（多 Issue 累积讨论）

- [#7675](https://github.com/NousResearch/hermes-agent/issues/7675)（8 条评论）— Feishu 卡片交互被当作 `/card` 命令处理、审批按钮无法点击、流式卡片回复缺失
- [#13924](https://github.com/NousResearch/hermes-agent/issues/13924)（6 条评论）— 审批按钮返回错误 `code: 220340`
- [#25886](https://github.com/NousResearch/hermes-agent/issues/25886)（4 条评论）— 授权卡片按钮静默失败或返回错误 `200343`
- [#38305](https://github.com/NousResearch/hermes-agent/issues/38305)（3 条评论）— 明确指认 PR #10256 提供了正确修复但未合并
- [#10073](https://github.com/NousResearch/hermes-agent/issues/10073)（3 条评论）— 移动端同样报错

**这组 Issue 从 4 月延续至今尚未修复，且横跨多个版本（0.8.0 → 0.15.2），社区已开始出现重复报告（duplicate 标签）和指向修复 PR 未合并的抱怨。** 这是当前社区信任度方面最需要关注的问题。

## 5. Bug 与稳定性

### 高优先级（P2）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | **v0.20.0 回归：桌面端底部操作面板完全消失**，应用退化为仅查看模式。含 Command Center、Gateway 控制、子代理状态等关键入口 | OPEN，8 条评论，标记为 duplicate |
| [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) | **v0.20.0 回归：Memory provider 的 `sync_turn()` 从未被调用**，外部记忆后端静默停止接收完成的对话轮次，无错误提示 | OPEN，5 条评论 |
| [#79628](https://github.com/NousResearch/hermes-agent/issues/79628) | `use_gateway: true` 在 Tool Gateway 未认证时**丢弃有效的直接凭据**，错误提示让用户设置他们已配置的凭据 | OPEN，3 条评论 |
| [#80646](https://github.com/NousResearch/hermes-agent/issues/80646) | `agent_context` 硬编码为 `"primary"`，导致 provider 的 context-skip 逻辑（cron/flush/subagent）成为死代码 | OPEN，2 条评论 |
| [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) | MCP stdio bridge 在 config 中 `args` 为 null 时崩溃（`TypeError: Value after * must be an iterable, not NoneType`），服务器陷入 connecting→parked 死循环 | OPEN，2 条评论 |
| [#74411](https://github.com/NousResearch/hermes-agent/issues/74411) | 桌面 SSH 模式版本检查命令参数顺序错误，误报远程环境不支持关键参数 | OPEN，2 条评论 |
| [#80259](https://github.com/NousResearch/hermes-agent/issues/80259) | 远程桌面会话中消息反应被错误地禁用（`HERMES_DESKTOP` 仅在本地设置） | OPEN，2 条评论 |
| [#80710](https://github.com/NousResearch/hermes-agent/issues/80710) | **Windows 桌面端自更新可能损坏现有 Python 运行时**，比普通更新失败更严重 | OPEN，1 条评论，标记为 duplicate |

### 中优先级（P3）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#80596](https://github.com/NousResearch/hermes-agent/issues/80596) | 学习图将外部安装的技能错误标记为"已学习"（use_count 虚增） | OPEN，2 条评论 |
| [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) | 安全：工具结果 → provider 出口路径缺少精确值密钥脱敏 | OPEN，2 条评论 |
| [#77484](https://github.com/NousResearch/hermes-agent/issues/77484) | 安全：`process(list)` 返回未脱敏的原始命令与输出，`*_KEY` 正则遗漏，控制字符拆分等发射间隙 | OPEN，3 条评论 |
| [#77286](https://github.com/NousResearch/hermes-agent/issues/77286) | Windows 更新程序错误提交（需复现） | OPEN，2 条评论 |

**今日修复的 Bug：**
- [#75468](https://github.com/NousResearch/hermes-agent/issues/75468)（已关闭）— 桌面端 pin/unpin 不持久化，**由 PR #80711 修复**

## 6. 功能请求与路线图信号

### 可能被纳入下一版本的功能（已有 PR 支撑）

- **[PR #80728 — Plugin install/update security scanning](https://github.com/NousResearch/hermes-agent/pull/80728)**（teknium1）：安装/更新插件前进行安全扫描，可疑插件需明确确认，恶意插件直接阻断。灵感来自 Claude Cowork 的安全机制。与 #64182 插件接口扩展追踪 Issue 形成呼应，**是插件生态安全基线的关键补充**。
- **[PR #80721 — Announce date changes to long-running sessions](https://github.com/NousResearch/hermes-agent/pull/80721)**（teknium1）：跨午夜会话自动注入日期变更提示，且不触碰 prompt-cache 不变量（从 kimi-code 移植）。
- **[PR #80727 — Dyad integration optional skill](https://github.com/NousResearch/hermes-agent/pull/80727)**：连接 Dyad（本地开源 AI 应用构建器，21k★），通过 SQLite 和 `AI_RULES.md` 实现集成。
- **[PR #80681 — fix(config): recognize `agent.system_prompt` and `agent.personalities` in schema validation](https://github.com/NousResearch/hermes-agent/pull/80681)**：消除 `hermes config set agent.system_prompt` 的误报警告。
- **[PR #80724 — Persist per-message token_count](https://github.com/NousResearch/hermes-agent/pull/80724)**：若合并，将为上下文压缩决策提供真实 token 成本数据。

### 新功能请求（尚待实现）

- **[#80723 — One live session can only be watched by one device](https://github.com/NousResearch/hermes-agent/issues/80723)**：WS 事件路由只有单一传输槽位，一个会话同时只能被一个设备观看。用户期望"合上笔记本，回合继续，然后在另一台设备上继续观看"。**这可能是多设备协同体验的关键缺口。**
- **[#80720 — Kanban attachment rows should open, preview, Quick Look and reveal files](https://github.com/NousResearch/hermes-agent/issues/80720)**：让看板任务附件在桌面端可操作（打开、预览、Quick Look、在 Finder 中显示）。
- **[#66622 — Convert very long pasted text into a file attachment in Desktop composer](https://github.com/NousResearch/hermes-agent/issues/66622)**：长文本粘贴自动转为文件附件，避免输入区被淹没。
- **[#70849 — Per-job `deliver_profile` for multiplexed gateway cron delivery](https://github.com/NousResearch/hermes-agent/issues/70849)**：多配置文件网关下，cron 任务可指定投递配置文件。

## 7. 用户反馈摘要

- **feishu 平台用户**（#7675、#13924、#25886、#38305、#10073）：命令审批卡片按钮从 4 月至今无法正常使用，**用户明确提到 PR #10256 提供了正确修复但迟迟未合并**（#38305），社区已出现重复报告。这是当前用户满意度中最大的负面信号。
- **v0.20.0 升级用户**（#79407、#79339）：升级后遭遇桌面端功能丢失（底部操作面板消失）和外部记忆后端静默失效，**后者尤其令人不安——"无错误提示"意味着用户可能长时间未察觉数据通路已断**。
- **Windows 用户**（#80710）：自更新可能损坏现有 Python 运行时，**这不是普通失败——是让原本工作的环境变坏**。
- **会话管理用户**（#75468、#80723）：pin 不持久化（已修复）和单设备观看限制并存，前者反应了侧边栏"自己重新排列、pin 不保留"的挫败感；后者被用户描述为"关闭笔记本电脑、让回合继续、在另一台设备上继续观看"之间的最后障碍。
- **桌面 SSH 模式用户**（#74411）：版本检查逻辑缺陷导致误报，**用户被错误地阻止使用 SSH 模式**。

## 8. 待处理积压

### 长期未修复的重要 Issue

| Issue | 创建时间 | 持续时间 | 备注 |
|-------|---------|---------|------|
| [#7675](https://github.com/NousResearch/hermes-agent/issues/7675) — Feishu 三合一 Bug | 2026-04-11 | **近 4 个月** | 卡片交互、审批按钮、流式回复；社区已出现多个重复报告 |
| [#13924](https://github.com/NousResearch/hermes-agent/issues/13924) — Feishu 审批按钮 220340 | 2026-04-22 | **3.5 个月** | 标记为 duplicate，但问题仍在 |
| [#10073](https://github.com/NousResearch/hermes-agent/issues/10073) — Feishu 移动端审批 200340 | 2026-04-15 | **3.5 个月** | 同上 |
| [#38305](https://github.com/NousResearch/hermes-agent/issues/38305) — 明确指向未合并的修复 PR #10256 | 2026-06-03 | 2 个月 | **用户已经定位到修复方案** |
| [#41331](https://github.com/NousResearch/hermes-agent/issues/41331) — email 登录用户硬编码为 `EMAIL_ADDRESS` | 2026-06-07 | 2 个月 | 自定义域名邮箱用户受影响 |

### 长期未合并的 PR

| PR | 创建时间 | 状态 |
|----|---------|------|
| [#67934](https://github.com/NousResearch/hermes-agent/pull/67934) — 使用原生 Ollama tags 发现本地模型 | 2026-07-20 | MERGEABLE / BLOCKED，无检查报告、无评审 |
| [#70667](https://github.com/NousResearch/hermes-agent/pull/70667) — kanban 委托 CLI 拒绝退出状态测试 | 2026-07-24 | MERGEABLE / BLOCKED |
| [#72671](https://github.com/NousResearch/hermes-agent/pull/72671) — gateway 后台清理 fixture 修复 | 2026-07-27 | MERGEABLE / BLOCKED |
| [#75028](https://github.com/NousResearch/hermes-agent/pull/75028) — 新增 neon-genie 可选技能 | 2026-07-30 | OPEN |

**维护者关注建议：**
1. **Feishu 审批按钮问题已持续近 4 个月**，用户已定位到修复 PR（#10256），亟需处理合并或给出明确回应；
2. 三个 `MERGEABLE / BLOCKED` 状态的 PR 已停留 2-3 周，无检查、无评审，可能需要人工介入或明确关闭；
3. god-file 拆分 Epic（#78647）是当前架构演进的主线，但**大量重构 Issue 积压可能分散贡献者对 Bug 修复的注意力**，建议在社区中明确优先级排序。

---

*本日报基于 Hermes Agent 公开 GitHub 数据生成，数据截至 2026-08-07。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-07

## 1. 今日速览

PicoClaw 项目今日整体活跃度中等偏低。过去 24 小时内无新 Issue 提交或关闭，Issue 线程完全静止；PR 侧有 2 条动态，其中 1 条合并关闭（#1349），1 条待合并（#3200）。值得关注的是，这两条 PR 均已有较长历史（创建于 3 月和 7 月），今日的更新表明维护者正在推进积压工作的收尾。项目当前无新版本发布，整体处于**温和的存量消化阶段**，而非高强度的开发冲刺期。

---

## 3. 项目进展

**今日完成 1 项功能合并，1 项待合并，均与真实用户场景直接相关。**

| PR | 状态 | 内容摘要 | 意义 |
|---|---|---|---|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | ✅ 已合并 | 支持解析和回复 QQ 频道更多附件类型（表情、语音、图片、视频、文件），并优先使用 Markdown 消息回复 | 完善 QQ 渠道的多模态交互能力，打通"接收+回复"双向链路，对中文用户群的 QQ 场景是实质性补强 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | ⏳ 待合并 | 为 Web UI 中的模型增加可配置的默认回退链（fallback chain），支持设置默认模型、添加备用模型、排序并持久化到后端 API | 解决多模型场景下单一模型失败导致的服务中断问题，提升系统可用性和运维灵活性 |

> **项目向前迈进的判断**：两项 PR 分别覆盖 *渠道能力扩展* 与 *模型调度健壮性* 两个方向，且均为社区提交的功能增强。项目正在从"能对话"走向"对话更稳、渠道更全"的阶段。积压 5 个月的 #1349 今日合并，说明维护者正在清理长期挂起的合理贡献。

---

## 4. 社区热点

今天没有新 Issue 触发大规模讨论，热点集中在以下两个有实质技术关注度的 PR 上：

- **[#3200 – 可配置默认回退链](https://github.com/sipeed/picoclaw/pull/3200)**（创建于 7 月 1 日，今日仍有更新）：该 PR 触及了多模型部署场景下的痛点——当首选模型不可用时如何优雅降级。用户对"回退链的可视化配置"和"持久化"有明确诉求，建议维护者优先审阅并给出反馈，避免长时间悬置打击贡献者积极性。

- **[#1349 – QQ 附件多类型支持](https://github.com/sipeed/picoclaw/pull/1349)**（已合并）：背后反映的是 QQ 频道场景下用户对富媒体交互（语音、图片、文件）的真实需求，尤其在国内办公/社交环境中，文字回复已不满足使用预期。

> **诉求分析**：社区关注点集中在"生产可用性"——包括多渠道媒体支持、模型故障时的自动降级，而非新奇的实验特性。这指向项目正在被用于真实业务场景。

---

## 5. Bug 与稳定性

今日 **无新 Bug 报告、无崩溃回退、无回归问题**。结合近期动态，未发现稳定性风险信号。项目当前稳定性状态良好。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue，但两条活跃 PR 给出了清晰的路线图信号：

| 信号 | 来源 | 判断 |
|---|---|---|
| **渠道层多模态能力** | [#1349](https://github.com/sipeed/picoclaw/pull/1349) | 已合并，预计随下一个版本发布，QQ 渠道将支持完整的多媒体收发 |
| **模型回退链配置** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 已实现且尚未合并，若完成审查，将进入 Web UI 和 API 层，可能成为 v 下一个 Minor 版本的核心特性 |

> **判断**：#3200 有较大概率被纳入下一版本——它修改了 Web UI 和后端 API，属于面向用户的功能特性，且当前已有一个月以上的社区讨论基础。若维护者近期计划发版，该 PR 建议优先处理。

---

## 7. 用户反馈摘要

由于今日无新 Issue 评论，以下反馈信号来自 PR 讨论及历史 Issue 的间接信息：

- **对 QQ 渠道多媒体的明确需求**（来自 #1349 的发起动机）：用户希望在 QQ 频道中收发语音、图片、视频和文件，而不只是文本。该 PR 的提交与合并说明这类需求在真实用户群中确实存在。
- **对模型可用性的担忧**（来自 #3200 的发起动机）：用户在多模型切换场景下，遇到首选模型不可用时的体验断裂问题，希望有系统级方案而不仅是手动切换。
- **对贡献流程的隐性期待**：#1349 从 3 月提交到 8 月合并，跨度 5 个月，侧面反映 PR 审阅周期较长，社区贡献者可能需要更明确的进度反馈。

> 建议：维护者可在 #3200 上给出明确审阅时间表，避免再次出现近半年的等待周期。

---

## 8. 待处理积压

以下为需维护者重点关注的长期未合并 PR：

### 🔴 高优先级

- **[#3200 – feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)**（l 创建于 2026-07-01，距今 37 天）：功能完整、有真实用户场景支撑、无冲突迹象。悬置时间接近一个月，建议尽快安排代码审查、CI 验证及合并，否则有贡献者流失风险。

### 🟡 中优先级 — 需维护者评估是否继续推进

- **[#1349 相关后续工作](https://github.com/sipeed/picoclaw/pull/1349)**：虽已合并，但 PR 摘要末尾被截断（"...if that fails, de..."），可能存在未完成的降级逻辑或已知边界。建议维护者在发版前确认该 PR 的完整实现，特别是 Markdown 回退失败后的处理路径。

---

**日报生成时间**：2026-08-07 | **数据窗口**：2026-08-06 至 2026-08-07 | **数据来源**：PicoClaw GitHub

---

*本报告由 AI 分析师自动生成，仅供参考。建议维护者结合内部路线图与社区反馈综合判断优先级。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-07** | **数据窗口：2026-08-06 ~ 2026-08-07**


## 1. 今日速览

过去24小时 NanoClaw 项目活跃度较高，PR 流动显著（14条更新，其中8条已合并/关闭），修复密度和合并效率均处于健康水平。核心维护团队（`core-team` 标签）在更新机制（事务性升级）和技能清理两个方向上集中发力，释放了项目长期积累的技术债。与此同时，社区贡献者在 Telegram 富消息支持、Tavily MCP 工具等领域持续提交新功能，项目"修复+扩展"双轨并进。值得关注的是，`/update-nanoclaw` 事务性更新 PR（#3195）直接关联昨日新开 Issue #3194，形成"发现问题→立即修复"的快速闭环，反映出项目维护响应机制运转良好。


## 2. 版本发布

**无新版本发布。** 最近一次 Release 暂无更新数据。考虑到过去24小时有8个 PR 被合并，下一次版本发布预计将包含多项修复，值得期待。


## 3. 项目进展

过去24小时共有 **8 个 PR 合并/关闭**，是近期合并量较大的一天，主要集中以下方向：

**技能体系清理与重构（当日最大动作）**

- [#3172 [已合并] chore(skills): remove stale qodo and Google MCP skills](https://github.com/nanocoai/nanoclaw/pull/3172) — 由核心维护者 glifocat 提交，删除了过时的 qodo 和 Google MCP skills。该 PR 直接回应了 Issue #3171 指出的"qodo skills 依赖未配置的 SaaS 集成并拦截正常编码请求"的问题，进一步清理技能生态。
- [#2873 [已合并] fix(skills): split pre-flight from credentials so /update-skills can refresh code](https://github.com/nanocoai/nanoclaw/pull/2873) — 核心维护者 glifocat（6月27日创建，历时约6周合并）。将技能预检与凭据检查解耦，使得 `/update-skills` 命令可以独立刷新技能代码而不受凭据状态阻塞。这项修复打通了技能更新的关键路径，是技能管理体验的重要改进。

**调度模块修复（3 个 PR 同日合并，均为 yairixStudio 贡献）**

- [#2678 [已合并] fix(scheduling): re-arm recurrence when a run fails permanently](https://github.com/nanocoai/nanoclaw/pull/2678) — 修复了计划任务永久失败后不再触发后续循环的问题。此前 `handleRecurrence` 仅从 `completed` 状态的行中派发下次执行，失败后整个循环链断裂；现在失败行也会正确派发下次执行。
- [#2679 [已合并] fix(scheduling): surface permanently-failed scheduled tasks to the user](https://github.com/nanocoai/nanoclaw/pull/2679) — 新增 `notifyFailedTasks` 调度钩子，将永久失败的计划任务以通知形式送达用户，而非仅写入日志。
- [#2643 [已合并] fix: engage pattern/mention wirings on direct address](https://github.com/nanocoai/nanoclaw/pull/2643) — 修复了路由器 `evaluateEngage` 中关键字触发模式忽略 @提及/DM/回复机器人等直接对话方式的问题。

**其他重要合并**

- [#2591 [已合并] fix: namespace user IDs by channel-type prefix, not bare colon](https://github.com/nanocoai/nanoclaw/pull/2591) — 修复了用户 ID 命名空间问题，改用渠道类型前缀而非裸冒号分隔，预计解决了跨渠道用户身份冲突的隐患。
- [#2644 [已合并] fix: detect reply-to-bot in Telegram extractReplyContext](https://github.com/nanocoai/nanoclaw/pull/2644) — 修复 Telegram 回复上下文提取，使"回复机器人自己的消息"能被正确识别为 `isReplyToBot`。
- [#2213 [已合并] fix: accept media-only messages (photo/video/file without caption)](https://github.com/nanocoai/nanoclaw/pull/2213) — 这是一个从5月3日延续至今的 PR（3个月+，3天后合并），修复了 Telegram 及其他 Chat SDK 平台上"无文字说明的纯媒体消息（图片/视频/文件）被静默丢弃"的问题。

**综合评估：** 一天之内合并8个 PR，覆盖技能管理、调度、消息路由、用户身份、媒体消息等多个模块，对项目稳定性和体验提升是显著向前迈进的一步。特别是调度模块的三连修复和技能体系的重构，是对用户痛点的高密度回应。


## 4. 社区热点

当前社区讨论热度整体偏低，绝大多数 Issues/PRs 评论数为 0，暂无形成大规模讨论的话题。值得关注的动态集中在以下两个方面：

**热点一：NanoClaw 自更新机制的安全性与事务性**

- 新开 Issue [#3194: `/update-nanoclaw` 可在无恢复性切换的情况下标记成功](https://github.com/nanocoai/nanoclaw/issues/3194)（作者 glifocat，核心维护者）
- 几乎同步提交的修复 PR [#3195: make NanoClaw upgrades transactional](https://github.com/nanocoai/nanoclaw/pull/3195)（核心维护者，带 `core-team` 标签）

虽然目前两者均无公开评论，但"核心维护者当天报 Bug、当天提交修复"的模式本身就构成了一种社区信号：

> **背后诉求分析：** 用户（尤其是生产环境部署者）对自更新功能的信任度至关重要。当前 `/update-nanoclaw` 的"假成功"问题意味着用户可能误以为更新成功，却在重启后面对数据库不匹配或配置丢失的窘境。事务性升级（保证更新要么完全成功、要么完全回滚）是生产级工具的必备能力，其被快速响应也侧面印证了维护团队对部署安全性的重视程度。

**热点二：Qodo Skills 依赖问题引发的技能生态清理**

- Issue [#3171](https://github.com/nanocoai/nanoclaw/issues/3171)（已关闭）指出两个捆绑技能依赖外部 SaaS 账号导致拦截正常编码请求，该 issue 被 [#3172 的合并](https://github.com/nanocoai/nanoclaw/pull/3172)直接解决。该闭环得到了快速处理，未引发进一步讨论。


## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|---------|----------|------|---------|
| 🔴 高 | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) | `/update-nanoclaw` 在更新未通过验证前就切换了运行中的 checkout。回滚点仅保护 Git，但**不保护 SQLite 数据库、gitignored 配置和外部组件**。存在四个故障窗口 | ✅ 已有修复 PR [#3195](https://github.com/nanocoai/nanoclaw/pull/3195)（待合并） |
| 🟡 中 | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | 两个捆绑技能（`get-qodo-rules`、`qodo-pr-resolver`）依赖仓库中未配置的 Qodo SaaS 账号，且拦截正常编码请求 | ✅ 已修复（PR #3172 已合并） |

**已合并修复的 Bug（过去24小时）：**

- 纯媒体消息（无文字说明）被静默丢弃 — PR [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) ✅
- 回复机器人自己的消息无法被正确识别 — PR [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) ✅
- 永久失败的计划任务不再触发后续循环 — PR [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) ✅
- 计划任务永久失败仅写日志、用户无感知 — PR [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) ✅
- 关键字触发模式忽略直接 @提及/DM — PR [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) ✅
- 用户 ID 命名空间使用裸冒号导致潜在冲突 — PR [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) ✅

**结论：** 当前最主要的稳定性风险点集中在 #3194（更新机制），已有修复方案待合并，建议维护者优先处理。其余已发现 Bug 均已合入修复，项目整体稳定性呈上升趋势。


## 6. 功能请求与路线图信号

过去24小时内暂无新功能请求 Issue，但通过 PR 可以观察到以下路线图信号：

**可能在下一版本中纳入的功能：**

1. **Tavily MCP 工具技能** — PR [#3190](https://github.com/nanocoai/nanoclaw/pull/3190)（待合并，8月5日创建）：新增 Tavily MCP（Model Context Protocol）工具技能，来自社区贡献者 manisrinivasan2k1。如果被合入，将为用户提供网络搜索能力的标准化接入方式。

2. **Telegram 富消息支持升级** — PR [#3193](https://github.com/nanocoai/nanoclaw/pull/3193)（待合并，8月6日创建）：由 ump45nose 提交，更新 Chat SDK 以支持 Telegram 富消息格式，配合已合并的 #2213（媒体消息接收），正在补齐 Telegram 渠道的多媒体能力闭环。

3. **技能宿主扩展（host seams）** — PR [#3186](https://github.com/nanocoai/nanoclaw/pull/3186)（待合并，8月4日创建）：由 zvi-fried 提交的重构，为技能自有能力添加宿主扩展点，可能为后续更多第三方工具接入铺路。

4. **原生凭据代理网关绕过** — PR [#2705](https://github.com/nanocoai/nanoclaw/pull/2705)（待合并，6月7日创建，已近2个月）：`use-native-credential-proxy` 技能实际绕过 OneCLI 网关而非静默回退。此 PR 已开放较久，建议维护者评估是否纳入下版。

5. **groups config 挂载 `--rw` 标志** — PR [#3149](https://github.com/nanocoai/nanoclaw/pull/3149)（待合并，7月29日创建）：为 CLI 的 groups config add-mount 命令添加读写挂载支持。


## 7. 用户反馈摘要

由于当前 Issues 和 PRs 的评论区活跃度较低，以下信息主要从 Issue/PR 描述中提炼用户痛点：

**来自 Issue #3194（glifocat，核心维护者视角）：**
> "回滚点保护了 Git，但没保护 SQLite 数据库、gitignored 配置和外部组件。更新过程中存在四个失败窗口。" — 这表明即使用户使用官方更新路径，仍然可能遭遇更新"假成功"后配置丢失或数据库损坏的问题，对生产部署者而言是必须解决的关键隐患。

**来自 PR #2705（premald）：**
> "在真实的 launchd/systemd 安装中，`nativeCredentialsEnabled()` 仅读取 `process.env`，导致技能在原生凭据代理模式下静默回退到 OneCLI 网关。" — 这反映了在非容器化/非开发环境部署中，环境变量传递方式不同导致的配置读取失效问题。对使用 launchd/systemd 等系统服务管理器的用户，这是一个"配置了但没生效"的隐蔽痛点。

**来自 Issue #3171（glifocat）：**
> "两个捆绑技能依赖一个仓库里根本没人配置的 Qodo SaaS 集成，并且会拦截正常的编码请求。" — 这暴露了"预装技能可能干扰用户正常工作流"的问题，尤其是当技能依赖外部 SaaS 但项目内没有任何初始化配置时，用户会感到困惑和受阻。该反馈的快速处理（24小时内关联 PR，7天内合入修复）也体现了维护团队对默认体验质量的重视。


## 8. 待处理积压

以下为长期未响应或存在一定积压风险的条目，建议维护者关注：

**🔴 高优先级：**

- [#2705 fix(use-native-credential-proxy)](https://github.com/nanocoai/nanoclaw/pull/2705) — 开放 **61 天**（6月7日创建），无评论。修复原生凭据代理绕过 OneCLI 网关的问题。长时间未处理可能意味着该功能被搁置，但对特定部署场景用户较为关键。建议维护者明确回复处理计划或关闭原因。

**🟡 中优先级：**

- [#3195 fix(update): make NanoClaw upgrades transactional](https://github.com/nanocoai/nanoclaw/pull/3195) — 虽为当日新提交，但关联 Issue #3194 属于高危稳定性缺陷，且当前合并队列中还有多个 PR 待处理。建议优先审阅并合入。
- [#3190 feat: add Tavily MCP tool skill](https://github.com/nanocoai/nanoclaw/pull/3190) — 新功能 PR，建议快速审阅以避免长期积压（参考 #2705 的教训）。

**🟢 其他待合并 PR（5个）：**
- [#3149 fix(cli): add --rw flag to groups config add-mount](https://github.com/nanocoai/nanoclaw/pull/3149) — 开放 9 天
- [#3186 refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186) — 开放 3 天
- [#3193 fix(telegram): update Chat SDK for rich messages](https://github.com/nanocoai/nanoclaw/pull/3193) — 开放 1 天

**整体评估：** 待合并 PR 数量合理（6个），多为近期提交，无大量陈年积压。唯一显著异常是 #2705 开放时长已达 61 天，建议维护者尽快处理。


## 项目健康度总结

| 维度 | 状态 | 说明 |
|------|------|------|
| 合并效率 | ✅ 优 | 24小时合并8个 PR，平均每个 PR 从提交到合并的周期较短（部分为当日提交当日合并） |
| Bug 修复响应 | ✅ 优 | 新报告 Bug 均在24小时内获得修复 PR 或直接合入 |
| 社区参与 | 🟡 中 | 非核心贡献者有新提交（Tavily、Telegram 富消息、--rw 标志等），但讨论活跃度偏低 |
| 长期积压 | 🟡 中 | 1个PR超60天未处理，需关注 |
| 技术债清理 | ✅ 优 | 技能体系清理（qodo/Google MCP 删除）展示维护者对默认体验质量的重视 |

**核心风险：** 更新机制的安全性问题（#3194/#3195）是本日最值得关注的稳定性议题，若该问题在真实用户环境中触发，可能导致数据丢失或配置损坏，建议优先合入修复 PR 并纳入下个版本发布。

---

*日报生成时间：2026-08-07 | 数据来源：[github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-07

> 数据周期：2026-08-06 ~ 2026-08-07 | 数据来源：GitHub (github.com/nearai/ironclaw)

---

## 1. 今日速览

项目保持高强度迭代节奏，过去 24 小时共有 50 条 Issue 更新（27 条活跃/新开，23 条关闭）和 50 条 PR 更新（33 条待合并，17 条已合并/关闭）。今日发布 **v1.1.0 稳定版**，是自 1.0.0 以来的第一个正式版本，核心亮点为 MCP 服务器扩展注册、IronHub 深度链接安装、跨渠道文件附件及 Slack 相关修复。值得关注的是，长期的 **bug_bash 系列 QA 问题已进入集中修复窗口**——与 Slack 集成、Inspector 运维调试面板、以及记忆系统 FS 查询相关的多个修复已被合并或进入 review 阶段。发布后仍有多条 P1/P2 级 bug 待处理，主要分布在 Slack 集成稳定性、Routine 运行时线程附着和长时间运行超时机制上。

---

## 2. 版本发布

### [ironclaw-v1.1.0](https://github.com/nearai/ironclaw/releases) — 2026-08-06

首个在 1.0.0 之后的稳定版，自 `1.1.0-rc.1` 晋升，并集成了 RC 之后的修复。核心更新方向：

- **扩展触达（Extension Reach）**：
  - 支持注册任意托管 MCP 服务器
  - 支持通过 IronHub 深度链接直接安装扩展
  - 引入跨渠道的持久化文件附件能力
  - Slack 相关修复（详见 PR #7300 与修复清单）

> ⚠️ **迁移注意事项**：暂无明确的破坏性变更通知。建议用户关注 MCP 注册流程的变化（从"注册即激活"转变为"注册仅登记定义"，对应 PR #7253），新版本中注册 MCP 服务器后需要额外步骤完成安装与激活。

---

## 3. 项目进展

今日合并的 PR 揭示了多条主线的推进：

### 3.1 Inspector 运维面板（Operator Inspection Surface）
Inspector 系列是本周期最突出的新功能集群，今日确认了 API 与实时诊断流的合并（[#7235](https://github.com/nearai/ironclaw/pull/7235)），并持续有后续 PR 推进调试面板（[#7236](https://github.com/nearai/ironclaw/pull/7236)）、提示词检查（[#7239](https://github.com/nearai/ironclaw/pull/7239)）与模型调用统计（[#7277](https://github.com/nearai/ironclaw/pull/7277)）。该功能集群为运维人员提供受限的运行时快照、模型调用统计与实时诊断能力，目前处于功能拓展期。

### 3.2 记忆系统修复 — libSQL FTS 查询
[#7289](https://github.com/nearai/ironclaw/pull/7289) 合入，封闭了 **#7275**（生产路径上的跨会话记忆召回缺陷），并配有 [补充 PR #7288](https://github.com/nearai/ironclaw/pull/7288) 将 FTS 过滤器重构为纯文本契约，杜绝自然语言单词（如 AND、OR、NOT）被误解析为查询算符。

### 3.3 Docker 健康检查修复
[#7303](https://github.com/nearai/ironclaw/pull/7303) 安装 `curl`，解决 `docker.io/nearaidev/ironclaw:1.1.0` 镜像中编排健康检查无法运行、节点误报 `error` 状态的问题。

### 3.4 文档发布边界收紧
[#7259](https://github.com/nearai/ironclaw/pull/7259) 合入，冻结 `.mintignore` 并增设 CI 门禁，修复了 `docs/design/` 和 `docs/research/` 内部文档被公开到 Mintlify 站点（URL 可访问）的泄露问题。

### 3.5 其他待合并重点 PR
- **Slack 个人投递恢复**（[#7300](https://github.com/nearai/ironclaw/pull/7300)）：修复 OAuth 绑定后丢失 workspace ID 导致个人 DM 不可用的问题，并新增工作区不匹配时的 fail-closed 保护。
- **Routine 调度"无线程附着"**：多条相关 PR/Issue 正在联动处理（见第 5 节）。

---

## 4. 社区热点

> 说明：今日评论数最高的条目多为既有 issue 的持续跟进，但新增的 PR 活动及 issue 交互集中反映了社区对下述问题的集中关注。

| 条目 | 类型 | 评论数 | 关注点 |
|---|---|---|---|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Issue | 4 | 审批通知在一键点击后从通知栏消失，无法追溯 |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | Issue | 4 | GitHub 集成搜索/创建 Issue 报 HTTP 403 |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Issue | 3 | Reborn 例程因缺 Slack 读 DM 能力而失败，陷入 `capability_info` 重试循环 |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | Issue | 3 | 活动面板在运行期间不更新，且折叠工具细节 |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Issue | 3 | 用户请求断开 Slack，Agent 错误拒绝 |

**核心诉求分析**：社区对 Slack 集成的可靠性反馈最集中——包括连接、断开、DM 投递目标识别与授权/认证的完整性。其次是活动监控、通知历史可追溯性为代表的可观测性需求。伴随 Inspector 系列 PR 落地，后者有望在后续版本逐步解决。值得注意的是，[#5702](https://github.com/nearai/ironclaw/issues/5702)（GitHub 403）在 PR 或 Issue 中尚无明确 fix 关联，仍待跟进。

---

## 5. Bug 与稳定性

### 🔴 P1 级

- **[#5456](https://github.com/nearai/ironclaw/issues/5456) — Runner 租约过期**：90 秒不活动阈值对多工具 / 多模型推理场景过短，导致例程运行系统性失败。**尚无关联 fix PR**。
- **[#5877](https://github.com/nearai/ironclaw/issues/5877) — Slack 通知投递给了错误用户**：通知（可能含敏感结果）被发给了无关人员。该 issue 已关闭，但需核实修复是否已随 v1.1.0 发布。

### 🟠 P2 级（影响面较广）

- **[#5836](https://github.com/nearai/ironclaw/issues/5836) — 定时例程持续报 "No thread attached"**：`ironclaw-issues-slack-summary` 5 分钟一次全部失败，成功率 0%。此为系统性问题，多条同类 issue 被关联（如已关闭的 [#5507](https://github.com/nearai/ironclaw/issues/5507)），**疑似与例程无法附加到会话线程有关，尚无直接 fix PR**。
- **[#5702](https://github.com/nearai/ironclaw/issues/5702) — GitHub 集成 403**：基于 HTTP 403 的 issue 搜索/创建能力不可用。**无 fix PR**。
- **[#5834](https://github.com/nearai/ironclaw/issues/5834) — Slack 断开被拒**：Agent 拒绝执行断开操作，需要用入口以外的路径恢复。**关联 PR #7300 对 Slack 目标解析有所修复，可关注是否覆盖此场景**。
- **[#5776](https://github.com/nearai/ironclaw/issues/5776) — 长输出提示导致模型超时，退化为 "invalid result"**：真实超时原因被掩盖；与 [#5552](https://github.com/nearai/ironclaw/issues/5552)（通用 "invalid result" 掩盖多工具失败细节）同类。**无直接 fix PR**，但 PR #7305（见下）对 UI 层错误呈现有所修补。
- **[#5522](https://github.com/nearai/ironclaw/issues/5522) — Reborn 例程缺 Slack 读 DM 能力并陷入 `capability_info` 重试循环**：能力描述-重试死循环问题。**无明确 fix PR**。

### 🟡 P3 级（体验类）

- **已关闭**（多为 UI/体验类，如 #5704 图片透明、#5705 终端图标无法隐藏、#5706 侧边栏显示原始 ID、#5557 日志跳转需二次点击等）。

### 修复联动提醒

- **[#7305](https://github.com/nearai/ironclaw/pull/7305)**：修正#7302 中失败的工具调用导致整个活动摘要变红的问题——虽然 Agent 已恢复并完成运行，界面仍呈现攻击性红色错误状态。此修复贴合用户对 "恢复后完成" 场景的视觉表达预期。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 可能纳入版本 | 说明 |
|---|---|---|---|
| **Inspector 运维能力**（诊断快照/模型统计/提示词检查） | PR #7235/#7236/#7239/#7277 | v1.2.0 或更高 | 已进入功能拓展期，多个 XL 级 PR 已开，方向明确 |
| **Nostr 主机函数**（WASM 签名） | [PR #7184](https://github.com/nearai/ironclaw/pull/7184) | 待定 | 使用主机持有的私钥进行 Schnorr 签名，私钥不出沙箱；由新贡献者 Kampouse 提交，值得关注 |
| **显式渠道投递工具**（双通道模型） | [PR #7157](https://github.com/nearai/ironclaw/pull/7157) | 待定 | 每个 run 的最终回复进入各自会话（WebUI 线程 / Slack DM 等），删除已过时的投递启发式 |
| **沙箱配置规范化**（Docker/Railway 独立 profile） | [PR #7214](https://github.com/nearai/ironclaw/pull/7214) | 待定 | 工作区/检查点按租户+用户隔离，Railway 用独立 Python worker 执行命令 |
| **FTS 自然语言召回**（标准化英语停顿词+引号包裹） | PR #7288/#7289 | v1.1.x 补丁 | 已合并，大概率作为后续补丁发布 |
| **登录页 OAuth 优先级调整** | [PR #7304](https://github.com/nearai/ironclaw/pull/7304) | 待定 | 将 "Continue with Google" 等 OAuth 按钮置于网关 Token 表单之上，提升第三方登录曝光度 |

---

## 7. 用户反馈摘要

综合 Issue 评论与系统行为，用户声音集中在以下方面：

**满意点**
- Inspector 系列为平台可观测性提供了实质性改善，多条 Issue 正被该系统逐步覆盖。

**痛点（按频次排序）**
1. **Slack 集成持续不稳定** — 用例涵盖：无法断开（[#5834](https://github.com/nearai/ironclaw/issues/5834)）、投递目标识别错误（[#5508](https://github.com/nearai/ironclaw/issues/5508)）、通知投递至错误用户（[#5877](https://github.com/nearai/ironclaw/issues/5877)）等。更有用户反馈 "the Slack integration remains connected with no way to disconnect it through the agent" 的阻塞性诉求。
2. **Routine 失败无处排查** — 多线程问题：失败后 "No thread attached" 且 "Open run" 按钮禁用（[#5507](https://github.com/nearai/ironclaw/issues/5507)），"invalid result" 无根因信息（[#5552](https://github.com/nearai/ironclaw/issues/5552)），无法删除旧 routine（[#5510](https://github.com/nearai/ironclaw/issues/5510)）。用户在排查链路中频频受阻。
3. **UI 反馈与状态可视化不足** — 活动面板不实时更新（[#5701](https://github.com/nearai/ironclaw/issues/5701)），审批通知消失无历史（[#5553](https://github.com/nearai/ironclaw/issues/5553)），工具失败状态过度呈现（[#7302](https://github.com/nearai/ironclaw/issues/7302)）。
4. **创建产物暴露内部细节** — 例程创建的成功反馈包含触发 ID、cron 语法等开发者信息（[#5707](https://github.com/nearai/ironclaw/issues/5707)），非技术用户难以理解。

---

## 8. 待处理积压

### ⚠️ 长期未闭环的 P1/P2 项（存在时长 > 30 天）

| ID | 标题 | 创建时间 | 最近更新 | 状态 | 备注 |
|---|---|---|---|---|---|
| [#4341](https://github.com/nearai/ironclaw/issues/4341) | Agent THINKING 思维链暴露给用户且卡在 thinking 状态 | 2026-06-02 | 2026-08-07 | OPEN | 超 2 个月未分配，模型行为级问题 |
| [#4342](https://github.com/nearai/ironclaw/issues/4342) | 认证弹窗在刷新后仍阻塞聊天 | 2026-06-02 | 2026-08-07 | OPEN | 同上，P2 无 fix |
| [#4343](https://github.com/nearai/ironclaw/issues/4343) | MCP 集成显示已激活但驱动不可用 | 2026-06-02 | 2026-08-07 | OPEN | P2，与 v1.1.0 的 MCP 注册逻辑变更关联，建议审视是否已间接修复 |
| [#5456](https://github.com/nearai/ironclaw/issues/5456) | Runner 租约过期导致例程失败 | 2026-06-30 | 2026-08-07 | OPEN | P1 长期未闭环 |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Slack 读 DM 能力缺失 + capability_info 重试循环 | 2026-07-02 | 2026-08-07 | OPEN | 活跃中 |

### 提示
- 2026-06-02 的 Qwen3.6-35B 系列 Issue（#4340-#4344）已静默超 2 个月，建议清理：要么关闭归档，要么标记为模型供应商问题并移交。
- **#5456（Runner 租约超时）** 是影响例程可靠性的最高优先级技术债，建议评估动态租约策略（如按工具预期的延迟自适应延长），而非简单放宽阈值。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-07

## 今日速览

LobsterAI 今日活跃度中等偏上：24小时内新增6条Issue和4条PR，均无合并或关闭记录。Issue主要集中在功能请求（输入框编辑模式、自定义Provider兼容性）和运行时问题（执行无输出、PowerShell版本疑问），另有2条4月的旧Issue被标记为stale。PR方面，4条均处于待合并状态，其中2条为今日新提交的Windows安装器修复和OpenClaw配置清理，另2条为4月的功能开发PR已进入stale状态。整体来看，项目目前处于稳定的迭代节奏，社区反馈以体验优化和边界case处理为主，无高危崩溃或安全事件。


## 项目进展

今日无 PR 被合并或关闭。4 条待合并 PR 中，2 条为今日新提交：

- **PR #2446** — `fix(win-installer): rescue null watchdog exit code via extractor`（作者：fisherdaddy，2026-08-07）— 修复 Windows 安装器在解压阶段 watchdog 退出码为空的问题，属于安装体验稳定性改进。[链接](https://github.com/netease-youdao/LobsterAI/pull/2446)
- **PR #2445** — `fix(openclaw): strip plugin-index-managed keys from config.set`（作者：fisherdaddy，2026-08-07）— 在 OpenClaw 配置写入时过滤由插件索引管理的键，避免配置冲突，反映项目在插件生态规范化方面的持续推进。[链接](https://github.com/netease-youdao/LobsterAI/pull/2445)

另有两条 4 月提交的 PR（#1197 Agent 管理页面交互优化、#1199 模型级 contextWindow/maxTokens 设置）已进入 stale 状态，与主分支存在冲突，需维护者决策是否继续跟进。


## 社区热点

今日热点集中在新开的 Issue 中，多数讨论聚焦于**日常使用体验**：

- **Issue #2444**（PYUDNG，2026-08-07）— 输入框编辑模式：用户提出长 Prompt 输入时 Shift+Enter 换行不直观，误发送的问题，并给出了两种设计方案（全局设置切换 or 编辑模式开关）。评论中用户进一步补充了对短 Prompt 场景的使用惯性分析，具备一定讨论深度。[链接](https://github.com/netease-youdao/LobsterAI/issues/2444)

- **Issue #2447**（jzNccc，2026-08-07）— “执行没有出结果，也没有错误信息”，用户附带了截图但描述信息有限，已有 1 条评论。此类模糊反馈需要维护者主动追问环境信息，属于典型的“需澄清”类 Issue。[链接](https://github.com/netease-youdao/LobsterAI/issues/2447)

- **Issue #1196**（daiqi1235，2026-04-01，stale）— “不要强制工作目录建立 Agents.md、User.md 等 6 个文件”，此条虽为旧 Issue 但持续有热度，反映用户对工作目录整洁度的长期关注。[链接](https://github.com/netease-youdao/LobsterAI/issues/1196)


## Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| 中 | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 模型 ID 含斜杠（如 SiliconFlow 的 `deepseek-ai/DeepSeek-V4`）时，界面无法选择该模型，影响所有 OpenAI 兼容服务商 | 待处理，暂无 fix PR |
| 低 | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | 执行没有输出也没有错误信息，信息不充分，需进一步确认 | 待澄清 |
| 低 | [#2442](https://github.com/netease-youdao/LobsterAI/issues/2442) | 用户质疑为什么 exec 的 shell wrapper 仍使用 PS 5.1 而非 PS 7.4。作者在 Issue 描述中自行解释为 Node.js 默认行为 | 讨论中，无 fix 计划 |
| 低 | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198)（stale） | 网关重启进度条消失、状态不明，后续对话提示模型不可用 | 4 月提出，持续未解决 |

上述 Bug 今日均无对应 fix PR，其中 #2443 影响面较大（所有带斜杠模型 ID 的自定义 Provider），建议维护者优先评估。


## 功能请求与路线图信号

- **输入框编辑模式（#2444）** — 用户提供了两套解决方案（全局切换或编辑模式按钮），与典型 IDE/编辑器交互模式接轨。结合项目近期在 UI/UX 侧的持续优化（参见 PR #1197），此需求有较大概率纳入后续版本。

- **PowerShell 7.4 内核升级（#2442）** — 用户询问 exec 的 shell wrapper 版本。作者在描述中已推断为 Node.js 默认行为，但社区对 PS 7.x 的兼容性需求客观存在，可视为低优先级路线图信号。

- **旧 PR #1199（模型级 contextWindow/maxTokens 设置）** — 此功能需求在 4 月已被实现，但进入 stale 状态，若能与主分支解决冲突并合并，将提升模型配置的灵活性。


## 用户反馈摘要

- **工作区整洁度**（#1196）：用户对强制生成 6 个系统文件表示不满，倾向全局 agent 配置或隐藏目录方案，并提到“agents 里一大堆东西”造成视觉混乱。此类反馈在产品设计层面具有参考价值，建议在文档中说明文件用途或提供收敛方案。
- **交互效率**（#2444）：用户明确表达输入长 Prompt 时 Shift+Enter 换行是痛点，说明当前交互模型对高频/深度用户不够友好。
- **模型配置**（#2443）：使用 SiliconFlow 这类 OpenAI 兼容服务的用户遇到模型 ID 含斜杠导致无法选择的问题，核心诉求是“能用的模型必须能在界面里选到”。
- **执行透明度**（#2447）：用户对“无输出但也不报错”的状态感到困惑，侧面反映当前 exec 流程缺乏中间态反馈。


## 待处理积压

- **Issue #1196/PR #1197/PR #1199**（均为 4 月提交，已 stale）：Agent 管理页面交互优化（PR #1197）和模型级 token 设置（PR #1199）均与主分支冲突。这两项功能对用户体验有明确增益，建议维护者评估合并成本。
- **Issue #1198**（4 月，stale）：网关重启状态不透明问题在 4 个月后仍未解决，可能影响用户在网关维护期间的使用信心。
- **PR #1197 vs Init 冲突**：该 PR 是基于 #1176 的更新版本，需确认与当前主分支的差异范围后再决策。

---

*日报生成时间：2026-08-07 | 数据来源：netease-youdao/LobsterAI GitHub 仓库*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*