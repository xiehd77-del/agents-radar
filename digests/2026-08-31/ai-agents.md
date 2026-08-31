# OpenClaw 生态日报 2026-08-31

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-31 04:19 UTC

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

# OpenClaw 项目动态日报 — 2026-08-31

> 数据来源：github.com/openclaw/openclaw 公开仓库 Issue/PR/Release 事件


## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持极高的社区活跃度：共更新 500 条 Issue（新开/活跃 270，关闭 230）与 500 条 PR（待合并 306，已合并/关闭 194），并发布 2026.8.1 正式版本。讨论焦点集中在多平台消息投递可靠性（Telegram/WhatsApp/Slack/Feishu）、**2026.8.1 迁移导致的 cron 作业隔离**（#133347，发布当日即被报告的 P1 回归）、以及跨重启会话恢复与权限边界安全。新版本发布后社区反馈速度很快，说明测试覆盖面较广，但迁移类回归仍是风险点。


## 2. 版本发布

### [v2026.8.1](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1)

**主要亮点：**

- **历史会话搜索**：支持按精确词或短语搜索可见会话文本，并可从匹配结果重新打开上下文消息（#105057, #105635, #105585）。
- **跨网关会话**：支持在配对设备或云端运行工作任务（Sessions beyond your Gateway），扩展了多设备协同能力。

**⚠️ 迁移注意事项（社区已反馈）：**

- **cron 作业隔离回归**（[#133347](https://github.com/openclaw/openclaw/issues/133347)，P1）：升级后调度器迁移将合法 cron 配置误判为 `invalid-schedule` 并隔离，导致既有自动化任务被静默弃用。目前已标记 `source-repro` + `fix-shape-clear`，发布当日即有报告，建议升级用户立即检查 cron 任务状态。


## 3. 项目进展

今日合并的关键 PR 集中在**消息绑定传递、插件安装安全边界、CLI/UI 修复**三条主线，均属于稳定性加固：

| PR | 内容 | 影响 |
|---|---|---|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) `fix(gateway): keep conversation delivery within agent bindings` | 修复多智能体场景下会话工具导致消息投递到错误绑定 | 覆盖 Discord/iMessage/Matrix/Mattermost/Slack/Telegram/Feishu 全通道，消除跨智能体消息串线风险 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) `feat(ui): review install policy warnings` | 控制 UI 支持管理员审阅安装策略警告 | 配合 #116489 构成完整的安全安装审阅链路 |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) `fix(cli): resolve alias targets from the write snapshot` | 修复 `models aliases add` 解析别名目标不一致问题 | 改进配置写入一致性 |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) `fix(ui): avoid session catalog refresh storms` | 避免侧边栏会话目录高频冗余刷新 | 提升 Web UI 响应性能 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) `fix(models): keep Claude CLI OAuth available in Control UI` | 修复 Gateway 重启后 Claude CLI OAuth 刷新所有权丢失 | 保障认证配置持久性 |

**注意：** #126424 标记 `merge-risk: 🚨 compatibility / message-delivery / security-boundary`，属于跨全通道的深度改动，建议仔细观察下一个小版本的回归反馈。


## 4. 社区热点

今日讨论热度最高的议题呈现“多通道消息可靠性”与“2026.8.1 新版本回归”双焦点：

1. **[#125626 OpenClaw 2026.8.1 beta feedback](https://github.com/openclaw/openclaw/issues/125626)**（24 评论）
   新版本集中反馈帖，社区正围绕 8.1 的会话搜索和跨网关功能进行密集测试讨论。

2. **[#42475 Per-agent cost budget enforcement at the gateway level](https://github.com/openclaw/openclaw/issues/42475)**（22 评论，👍1）
   讨论已持续 5 个月，社区对**网关级单智能体成本预算控制**诉求强烈，希望在不依赖外部监控的情况下限制模型调用开销。

3. **[#48788 Centralized filename encoding utility](https://github.com/openclaw/openclaw/issues/48788)**（19 评论）
   Feishu 中文文件名的编码问题牵出架构级方案讨论（Shift-JIS/EUC-KR/GB18030 多编码支持），已提出集中式工具方案。

4. **[#102175 Embedded prompt cache breaks across boundaries](https://github.com/openclaw/openclaw/issues/102175)**（18 评论，🐚 platinum hermit）
   长会话嵌入场景下 prompt cache 在 room-event/policy/Responses 边界失效，直接影响成本与延迟。

5. **[#22676 Signal daemon stop() race condition on SIGUSR1 restart](https://github.com/openclaw/openclaw/issues/22676)**（17 评论，P1，已关闭）
   网关 SIGUSR1 重启时 signal 守护进程存在竞态，导致旧进程未释放端口即启动新实例，引发孤儿进程与发送失败。

**诉求分析：** 评论热度最高的议题集中在**运维可观测性**（成本预算）与**多通道消息零丢失**两大方向，反映用户已从“能用”迈入“生产级可靠”阶段。


## 5. Bug 与稳定性

### 🔴 P0

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#108395](https://github.com/openclaw/openclaw/issues/108395) | 模型生成伪 "Human: [timestamp]" 文本实现自我授权 | OPEN，待安全审查 | 无 |

### 🟠 P1（按风险排序）

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#133347](https://github.com/openclaw/openclaw/issues/133347) | **2026.8.1 迁移隔离合法 cron 任务**（数据丢失） | OPEN，发布当日报告 | 无 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex-backed Telegram 回合反复超时，消息丢失 | OPEN，👍4，待产品决策 | 无 |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram 通道分发失败：缺少 runDispatchLifecycle | OPEN，source-repro | 无 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 入站图片导致主通道阻塞 ~3 分钟 | OPEN，needs-live-repro | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未回收，zombie 堆积致运行恶化 | OPEN，fix-shape-clear | 无 |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | Windows 原生 CLI Scheduled Task 无法保持运行 | OPEN，source-repro | 无 |

### 🟡 P2

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#65374](https://github.com/openclaw/openclaw/issues/65374) | 内置 dreaming 系统在多智能体下污染代理身份 | OPEN，⭐8 | 无 |
| [#110346](https://github.com/openclaw/openclaw/issues/110346) | message send --media 在 WhatsApp/Telegram 间 allowlist 不一致 | OPEN，linked-pr-open | 有 |
| [#100941](https://github.com/openclaw/openclaw/issues/100941) | 高并发工具调用下 WebSocket 1006 断开且报错误导 | OPEN，source-repro | 无 |

**风险提示：** 今日无新增 P0，但存在多起跨通道消息丢失类 P1（Telegram/WhatsApp/Slack）被 `needs-live-repro` 或 `needs-product-decision` 阻塞，长期滞留（如 #87744 已 3 个月）需维护者决策优先级。


## 6. 功能请求与路线图信号

今日高频功能诉求与**对应 PR 信号**：

| 需求 | 社区热度 | 已有关联 PR | 下一版本纳入可能性 |
|---|---|---|---|
| **网关级 per-agent 成本预算**（#42475） | 22 评论，持续 5 个月 | 无 | 高（社区长期高优诉求） |
| **集中式文件名多编码处理**（#48788） | 19 评论 | PR #48578（部分修复） | 高（架构级方案讨论中） |
| **Telegram 访客机器人 & 机器人间通信**（#79077） | 13 评论，⭐8 | 无 | 中（官方平台新特性跟进） |
| **主题会话族**（#90916，已关闭） | 10 评论 | 无 | 中（单助手多命名上下文通道） |
| **网关重启后补拉错过的入站消息**（#55792） | 5 评论 | 无 | 中（与 #127229 相关） |
| **能力级权限模型（默认拒绝高风险操作）**（#12678） | 6 评论 | 无 | 高（安全方向、与 #116489 方向一致） |
| **内置无头浏览器**（#53763） | 4 评论 | 无 | 低（依赖重构量大） |

**线路图信号：** 安全转向明显——#116489、#120900 已落地安装策略警告链路，未来版本会更强调**安装/技能权限的可审计性与默认安全**；会话搜索与跨设备运行已在 8.1 落地，下一步方向大概率是**跨网关会话状态一致性增强**。


## 7. 用户反馈摘要

- **正向反馈：** 8.1 新增的会话搜索功能得到社区积极试用（见 #125626）；Web UI 安装策略警告功能（#120900）被视为安全管理的关键拼图；跨网关会话扩展了实际使用场景。
- **迁移之痛：** #133347 报告了 8.1 升级后 cron 任务被静默隔离，用户表示“Gateway 与调度器健康，但只有新建的任务保持 active”，存量自动化被悄悄丢弃，属高影响回归。
- **平台差异困扰：** #110346 反映同一命令、同一路径在 WhatsApp 与 Telegram 的媒体 allowlist 行为不一致，用户在跨平台迁移时需维护两套预期。
- **长会话可靠性焦虑：** #102175 的 prompt cache 跨边界失效 + #87744 的 Codex 回合超时，指向长对话/长任务场景下成本与稳定性的双重不安。用户开始关注“会话恢复后 MCP loopback 未重握手”（#98435）等深水区问题，说明使用深度在加深。

**典型用户声音（转述）：**
> “进程发生了 `recovered=1`，会话内容都在，但 MCP loopback 断了——下一个工具调用直接失败，恢复标志是误导性的。”（#98435）


## 8. 待处理积压

| 类型 | Issue/PR | 关键信息 | 滞留时间 |
|---|---|---|---|
| P1 Issue | [#55792](https://github.com/openclaw/openclaw/issues/55792) 网关重启后补拉错过的入站消息 | 长期无 assignee，社区多次顶帖 | 5 个月 |
| P1 Issue | [#53540](https://github.com/openclaw/openclaw/issues/53540) 大参数工具调用触发 embedded runner“网络连接丢失” | 标有 needs-product-decision，无进展 | 5 个月 |
| P1 Issue | [#87744](https://github.com/openclaw/openclaw/issues/87744) Codex-backed Telegram 回合反复超时 | 高赞（👍4），涉消息丢失，待产品决策 | 3 个月 |
| P1 Issue | [#114020](https://github.com/openclaw/openclaw/issues/114020) Feishu/Telegram 分发失败（runDispatchLifecycle） | source-repro 已确认，无修复 PR | 1 个月 |
| P2 PR | [#123416](https://github.com/openclaw/openclaw/pull/123416) 保留迁移配置中 bundled provider 兼容性 | ⏳ waiting on author 状态超 2 周，影响面广 | 2 周+ |
| P2 PR | [#123356](https://github.com/openclaw/openclaw/pull/123356) Control UI 显式命令激活计划 | 同样卡在 waiting on author | 2 周+ |

**维护者关注建议：**

1. **优先处理 #133347**——新版本发布当日即暴露的 P1 数据丢失类回归，直接影响 8.1 用户信任度，建议纳入热修复。
2. 两起跨通道**消息丢失类 P1 长期滞留**（#87744、#114020）与 8.1 的“Sessions beyond your Gateway”战略方向直接相关，建议提升优先级。
3. 3 个 PR 卡在 `waiting on author`（#123416、#123356、#132668），均已获 maintainer 初步审阅，建议主动跟进作者补料，避免社区贡献流失。

---

*本日报由 AI 分析师基于 GitHub 公开数据自动生成，仅供参考，不构成官方立场。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-08-31**


## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态正处于**从「功能可用」迈向「生产级可靠」的关键转折期**。各头部项目（OpenClaw、ZeroClaw、Hermes Agent）不约而同地将重心从新功能开发转向多通道消息零丢失、会话持久化、成本预算控制与安全边界加固；与此同时，以 NanoBot、CoPaw 为代表的中型项目正通过架构重构（Runner 统一上下文管理、Provider 契约化）为下一阶段平台化做准备；而 PicoClaw、Moltis 等轻量级项目则聚焦嵌入式/跨架构场景的技术债清理。社区讨论的共性关键词为：**可靠性、安全性、成本可观测性**——用户已不再满足于「能跑通」，而是要求「可放心依赖」。


## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 合并率 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃270，关闭230） | 500（待合并306，合并/关闭194） | ✅ v2026.8.1 | 38.8% | 🟢 高活跃，但迁移回归风险需关注 |
| **ZeroClaw** | 50（活跃47，关闭3） | 50（全部待合并） | ❌ 无 | 0%（今日） | 🟡 活跃度高，但合并管道积压严重 |
| **Hermes Agent** | 50（活跃40，关闭10） | 50（待合并48，合并2） | ❌ 无 | 4% | 🟡 讨论活跃，合并通道拥堵明显 |
| **NanoBot** | 6（关闭4） | 28（合并/关闭8） | ❌ 无 | 28.6% | 🟢 响应快（Bug 2-3天关闭），健康 |
| **CoPaw** | 23（全活跃） | 26（合并6） | ❌ 无（Beta.4 筹备中） | 23.1% | 🟡 发布后安全加固+稳定性修复密集 |
| **IronClaw** | 0（完全静默） | 11（全部待合并） | ❌ 无 | 0%（今日） | 🟡 代码活跃但社区讨论冷清 |
| **LobsterAI** | 7（全部stale关闭） | 7（合并4，待合并3） | ❌ 无 | 57.1% | 🟢 稳定维护期，讨论热度低 |
| **Moltis** | 1（已关闭） | 2（合并1，待合并1） | ✅ v20260830.01 | 50% | 🟢 稳健推进，技术债清理 |
| **PicoClaw** | 2（全开放） | 1（待合并，存量58天） | ❌ 无 | 0%（今日） | 🟡 维护期，数据安全缺陷待处理 |
| **NanoClaw** | 2（全开放） | 25（全部待合并） | ❌ 无 | 0%（今日） | 🟡 架构升级推进中，合并积压 |
| **NullClaw / TinyClaw / ZeptoClaw** | — | — | — | — | ⚪ 24h 无活动 |


## 3. OpenClaw 在生态中的定位

**社区规模绝对领先**：OpenClaw 单日 500 条 Issue + 500 条 PR 的动态量级，是第二梯队（ZeroClaw/Hermes 约 50 条）的 10 倍，表明其拥有生态内最庞大的用户基数和贡献者网络。

**技术路线差异**：OpenClaw 的核心差异在于**多通道投递的广度与深度**——已覆盖 Discord/iMessage/Matrix/Mattermost/Slack/Telegram/Feishu 七大通道且具备跨网关会话能力（v2026.8.1「Sessions beyond your Gateway」），这使其更像一个**消息优先的 Agent 网关**而非单纯的 Agent 框架。相比之下，NanoBot 的渠道覆盖面较小但 Runner 架构更现代，Hermes Agent 在 Desktop 端投入更多，ZeroClaw 则在 RFC 架构严谨性上领先。

**优势与风险**：优势在于生态规模带来的快速反馈循环（发布当日即发现 P1 回归）和功能迭代速度；风险在于版本迁移的兼容性负担——cron 隔离回归（#133347）暴露了大规模用户下的升级痛感，这是小规模项目难以体会的「幸福的烦恼」。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **多通道消息零丢失** | OpenClaw（#87744/#114020/#96834）、CoPaw（#7408）、NanoBot（#5580/#5605） | Telegram/WhatsApp/Feishu/DingTalk/邮件各渠道的消息投递可靠性、配置持久性、通道阻塞问题 |
| **成本预算与可观测性** | OpenClaw（#42475 网关级 per-agent 成本预算）、Hermes Agent（#25267 订阅OAuth避免双付费、#97315 429自旋浪费额度）、IronClaw（#7977 循环无终止消耗 token） | 用户对推理成本高度敏感，要求细粒度预算控制与异常消耗防护 |
| **会话持久化与恢复可靠性** | OpenClaw（#98435 MCP loopback 断连）、Hermes Agent（#96811 缓存失效、#98722 压缩死循环）、ZeroClaw（#10061 图片污染上下文）、PicoClaw（#3351 物理删除历史）、NanoBot（#5580 持久化阻塞事件循环） | 长会话场景下状态一致性、压缩/归档不丢数据、重启后正确恢复 |
| **安全边界与权限模型** | OpenClaw（#12678 能力级权限、#108395 模型自我授权）、NanoBot（#5338 MCP凭据保护）、ZeroClaw（#6996 沙箱策略、#9654 拒绝语义丢失）、CoPaw（GPL依赖/漏洞修复） | 默认拒绝高风险操作、安装可审计、凭据安全、供应链合规 |
| **Provider 生态与本地模型** | NanoClaw（Conifer 请求 + Ollama 四件套）、NanoBot（AnySearch 集成）、Hermes Agent（#25267 Claude 订阅接入）、ZeroClaw（#5287 local_small profile） | 用户追求「真免费」或低成本接入，本地模型与聚合网关需求上升 |
| **跨设备/跨网关协同** | OpenClaw（v2026.8.1 跨网关会话）、Hermes Agent（#97681 跨设备 Bot 群聊）、LobsterAI（#2574 共享浏览器页面） | 多设备、多节点间的会话连续性与 Agent 协作 |


## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键架构特征 |
|---|---|---|---|
| **OpenClaw** | 多通道 Agent 网关 / 消息优先 | 重度多平台用户、自动化工作流依赖者 | 七大通道绑定、跨网关会话、历史搜索 |
| **ZeroClaw** | 架构严谨的 Agent 运行时 | 对安全边界、可扩展性有高要求的技术团队 | RFC 驱动、memory 生命周期解耦、沙箱策略 |
| **Hermes Agent** | 多形态客户端 Agent（Desktop/TUI/CLI） | 桌面端深度用户、多设备部署者 | Electron Desktop 壳、压缩/会话管理、profile 机制 |
| **NanoBot** | 轻量级多渠道 Agent 框架 | 中小团队、快速集成需求者 | Agent Runner 统一上下文管理、可插拔记忆、MCP 生态 |
| **CoPaw** | 全栈 Agent 平台（PawApp + 渠道） | 寻求开箱即用 + 深度定制的用户 | Tauri 桌面应用、多 agent 并发、第三方 harness 支持 |
| **IronClaw** | Rust 高性能 Agent 基础设施 | 对性能与类型安全敏感的基础设施团队 | Rust 生态、知识图谱、设计系统驱动 WebUI |
| **LobsterAI** | Agent 协作客户端（浏览器 + 聊天） | 知识工作者、跨工具协作需求 | 交互式浏览器、Artifact 面板、MCP 桥接 |
| **Moltis** | 嵌入式/边缘 Agent 沙箱 | Apple Silicon / arm64 用户、轻量部署者 | Docker 沙箱、跨架构兼容性 |
| **PicoClaw** | 嵌入式设备 Agent | RV1106 等低端硬件用户 | 极简架构、内存优化 |
| **NanoClaw** | Provider 契约化 Agent 框架 | Provider 开发者、多模型接入需求者 | Provider 契约层、本地模型优先 |

**关键差异点总结**：OpenClaw 赢在**渠道广度**，ZeroClaw 赢在**架构严谨性**，Hermes 赢在**客户端体验**，NanoBot 赢在**模块化轻量**，CoPaw 赢在**全栈整合**，IronClaw 赢在**底层性能**。


## 6. 社区热度与成熟度分层

**第一层：快速迭代期（功能驱动，输出频繁）**
- **OpenClaw**：依然处于高速功能迭代阶段，单日 500 PR 级别的吞吐，但已开始显现迁移兼容性阵痛
- **NanoClaw**：正处于 Provider 契约重构的集中发力期，8 条架构级 PR 批量提交，方向明确

**第二层：质量巩固期（稳定性/安全驱动）**
- **ZeroClaw**：从功能扩张转向 RFC 收敛与安全加固，大量架构决策等待排期
- **Hermes Agent**：压缩/会话状态的系统性修复 + Desktop 体验打磨，48 条修复 PR 等待合入
- **CoPaw**：v2.2.0 发布后的安全审计 + Beta 稳定性修复，维护者主动提交合规 PR
- **IronClaw**：密集技术债清偿期（依赖升级、CI 统一、设计系统地基），但社区讨论热度偏低

**第三层：稳定维护期（响应式维护）**
- **NanoBot**：架构重构有序推进，Bug 响应周期已压缩至 2-3 天，健康度最佳
- **Moltis**：技术债清理 + 跨架构兼容性修复，节奏稳健
- **LobsterAI**：日常维护为主，社区讨论热度低
- **PicoClaw**：维护期，但数据安全缺陷（#3351）和 UI 卡顿（#3350）需重视


## 7. 值得关注的趋势信号

**信号一：多通道零丢失已成为「入场券」而非「加分项」**
OpenClaw（#87744/#114020）、CoPaw（#7408）、NanoBot（#5580）的通道消息丢失/配置丢失问题均被用户以生产事故级别对待。智能体框架即将进入「消息投递成功率 SLA」竞争阶段。

**信号二：「真免费」与「成本可观测」是用户的深层焦虑**
NanoClaw 用户强调「genuinely free」、Hermes 用户不满「订阅 + API 双付费」、IronClaw 生产环境 593 次工具调用/70 分钟的单次运行——三层信号共同指向：**用户需要知道自己花的每一分 token 去了哪里，且希望有免费或低成本的合法路径**。将成本预算控制（OpenClaw #42475）或本地模型支持（Hermes #85852、NanoClaw Ollama 四件套）纳入路线图的项目将获得显著的采纳优势。

**信号三：长会话可靠性是当前最大的技术债务**
从 Hermes 的压缩死循环家族（#96775→#97488→#98722）、ZeroClaw 的图片污染上下文（#10061）、到 PicoClaw 的物理删除历史（#3351）、NanoBot 的持久化阻塞事件循环（#5580）——「会话越长，越不可靠」是跨项目的共性痛点。**Prompt cache 跨边界失效**（OpenClaw #102175）与 **MCP loopback 断连**（OpenClaw #98435）则是长会话场景下的两个深水区问题，解决这些问题的项目将获得长对话工作流用户的忠诚度。

**信号四：安全正在从「附加功能」变为「架构前提」**
OpenClaw 的模型自我授权（#108395）、ZeroClaw 的 operator 拒绝语义丢失（#9654）、CoPaw 的供应链漏洞批量修复、NanoBot 的 MCP 凭据保护——安全已渗透到智能体的**行为边界**（哪些操作默认拒绝）、**通信链路**（mTLS 盲转发）、**供应链**（GPL 排除、依赖漏洞）和**数据持久化**（凭据加密）四个层面。未来智能体框架的竞争将包含「安全合规证明」维度。

**信号五：Provider 契约化与本地模型闭环是平台化分水岭**
NanoClaw 的 Provider 契约重构（8 条 PR）和本地 Ollama 四件套、NanoBot 的 AnySearch 合作、Hermes 的 llama.cpp 运行时——头部项目都在为「Provider 即插即用 + 本地模型一键跑」做架构准备。**能够标准化 Provider 接入流程并支持真实本地运行的项目，将在平台化竞争中占据先机**。


**给开发者的参考建议**：
- 若你依赖多通道消息投递，优先跟踪 OpenClaw 的 #126424 合并后回归情况与 #133347 热修复进展
- 若你关注成本控制，关注 OpenClaw #42475 与 Hermes #97315 的最终方案
- 若你处理长会话场景，建议暂缓升级至 8.1 并对 Hermes 的压缩相关 issue 保持跟进
- 若你考虑新项目选型，NanoBot 的健康度/响应比与 ZeroClaw 的架构严谨性是值得权衡的两种路线

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-31

## 1. 今日速览

NanoBot 项目在过去 24 小时内保持高度活跃：共产生 6 条 Issue 更新和 28 条 PR 更新，其中 4 个 Issue 已关闭，8 个 PR 已合并/关闭，显示出维护团队对社区反馈的响应速度较快。核心开发方向集中在 **Agent Runner 架构重构**（内存摘要、上下文压缩、请求拟合）、**Telegram 富文本消息流式传输**、**电子邮件渠道 OAuth 升级与投递逻辑修复**，以及 **MCP 凭据安全** 等领域。值得关注的是，来自 AnySearch 团队的官方集成 PR（#5607）已提交，标志着外部生态合作正在加速。整体项目健康度良好，PR 合并率约为 29%，但在 20 个待合并 PR 中，有多个高优先级（p1）重构尚在评审中，值得留意。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

今日合并/关闭的 8 个 PR 主要集中在 Bug 修复和架构清理方向：

- **[#5608] refactor(agent): defer transcript assembly to runner**（已关闭/合并）— `chengyongru` 将转录装配推迟至 `AgentRunner` 执行，保留了 `ContextBuilder.build_messages` 的兼容路径。这标志着 Agent 上下文管理向 Runner 集中化迈出一步，为后续 #5612（统一请求拟合）和 #5610（累积式摘要）铺路。
- **[#5600] fix(agent): close native reasoning on cancellation**（已关闭/合并）— `KDB-Wind` 修复了流式请求被取消后 `reasoning_end` 未发送的问题，消除了客户端收到推理输出但永远等不到终止信号的协议不一致。
- **[#5338] fix(mcp): preserve credentials when OAuth store read fails**（已关闭/合并）— 同样是 `KDB-Wind` 提交，修复了 MCP OAuth 存储读取失败被误当作空存储、进而可能覆盖其他服务器凭据的严重问题。该 PR 从 8 月 11 日提出到合并历时近三周，属于跨多个版本的长期修复。
- 其余关闭项涵盖 WebUI 消息拒绝时的副作用回滚（#5601）、Telegram 富文本预览升级（#5531）等（后两个处于 OPEN 状态，实际关闭的为更早的兼容性 PR）。

此外，#5608 的关闭直接激活了 #5612 和 #5610 两个后续重构的评审路径 — 三者构成了一条清晰的「Runner 统一负责上下文管理」的架构主线。

## 4. 社区热点

- **[Issue #5505] Add AnySearch as a web search provider**（7 条评论）— [链接](https://github.com/HKUDS/nanobot/issues/5505)
  来自 **AnySearch 团队官方** 的集成请求，提出了 API、MCP、Skill 三种集成方式，并已附带提交 PR #5607。这是典型的**上游工具商主动适配**案例，反映出 NanoBot 作为 AI Agent 框架的生态吸引力正在增强。讨论中社区关注点集中在 key-optional 匿名配额模式是否会被滥用，以及是否应像 Serper 一样设置速率限制。

- **[Issue #1697] The result wasn’t returned and the output was incorrect**（1 条评论）— [链接](https://github.com/HKUDS/nanobot/issues/1697)
  已存在近 6 个月的老 Issue 今日再次被更新。用户报告查询结果需多次追问才能返回，且提出了「哪个配置控制安全权限、如何启用全权限」的问题。虽然评论数不多，但其长期未解决的状态与用户对权限模型的困惑，反映出**早期版本在响应可靠性和权限文档方面存在缺口**。该 Issue 也是最近刚关闭的 #5583（工具异常时追加「try a different approach」提示）所针对的体验问题的直接来源之一。

- **[PR #5580] fix(session): move persistence off event loop**（p1, conflict 标记）— [链接](https://github.com/HKUDS/nanobot/pull/5580)
  尽管无直接评论记录，但其 `p1` 优先级和 `conflict` 标记使其成为当前待合并队列中最需要关注的一项。该 PR 将会话持久化移出事件循环，涉及 `SessionManager` 的线程安全改造，与最近关闭的 #5463（DingTalk 后台任务未观察）和 #5593（限流状态保留过期会话）构成统一的稳定性加固主题。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|----------|------|------|
| **高** | [#5580](https://github.com/HKUDS/nanobot/pull/5580) | 会话持久化在事件循环中执行，可能阻塞事件循环导致消息延迟 | 有 fix PR，p1，待合并（conflict） |
| **中高** | [#5593](https://github.com/HKUDS/nanobot/issues/5593)（已关闭） | 限流状态 `_sent_at` 中已过期的一次性会话未及时清理，可能造成内存泄漏或错误限流 | 已关闭（修复已合入） |
| **中高** | [#5463](https://github.com/HKUDS/nanobot/issues/5463)（已关闭） | DingTalk 流处理器接受消息后创建的 task 无终端观察者，后台任务可能静默失败 | 已关闭（修复已合入） |
| **中** | [#5582](https://github.com/HKUDS/nanobot/issues/5582)（已关闭） | WebUI 引用/提及场景下创建的 Cron 任务在创建或触发时崩溃 | 已关闭（修复已合入） |
| **中** | [#5583](https://github.com/HKUDS/nanobot/issues/5583)（已关闭） | 工具抛出异常时未附加「try a different approach」恢复提示，屏蔽了自我纠错路径 | 已关闭 — 功能增强而非崩溃 |
| **中低** | [#5605](https://github.com/HKUDS/nanobot/pull/5605) | 邮件渠道在消息通过过滤器之前即标记 `\Seen`，被过滤器拒绝的邮件仍被标记为已读 | 有 fix PR（OPEN） |

**关键发现**：4 个关闭的 Issue 中有 3 个是 8 月 28-29 日新报出的，今日迅速关闭，说明维护者对新 Bug 的响应周期已压缩到 **2-3 天**。@iChizer0 和 @yu-xin-c 是近期贡献最密集的两位社区成员，前者聚焦 WebUI/Cron/工具层交互体验，后者关注流处理器和会话状态管理的边界情况。

## 6. 功能请求与路线图信号

- **AnySearch 集成（#5505 + [PR #5607](https://github.com/HKUDS/nanobot/pull/5607)）**：AnySearch 团队提交了新 provider 实现，支持 key-optional 匿名配额模式。结合已有 Serper provider 模式，**Web 搜索的 provider 生态正在扩展**，匿名配额机制若被合并，可能成为后续其他搜索 provider 的参考范式。
- **Microsoft 委托 OAuth for Office365/Outlook（[PR #5609](https://github.com/HKUDS/nanobot/pull/5609)）**：IMAP/SMTP 基础认证正在被微软弃用，此为邮件渠道的**前瞻性合规改造**，p2 优先级但属于「不做就会坏」的类型。
- **按收件人别名过滤邮件（[PR #5606](https://github.com/HKUDS/nanobot/pull/5606)）与仅标记已投递消息为已读（PR #5605）**：同属于 `tilladam` 提交的邮件渠道体验优化，前者解决共享邮箱多别名场景，后者修复 `\Seen` 标记过早问题。
- **短期记忆框架（[PR #5571](https://github.com/HKUDS/nanobot/pull/5571) + [PR #5570](https://github.com/HKUDS/nanobot/pull/5570)）— 值得重点关注**：`chengyongru` 提交的「默认要求显式召回」和「可插拔召回后端」是**记忆系统的重大设计转向** — 不再默认预加载全部历史 `memory/history.jsonl`，而是按需召回。这直接影响所有依赖长上下文工作流的用户，如果合入将显著降低默认 token 占用，但需要用户显式配置召回逻辑。
- **临时运行时上下文（[PR #5615](https://github.com/HKUDS/nanobot/pull/5615)）**：为 `RuntimeContextBlock` 增加 opt-out 的 `ephemeral` 生命周期，使上下文仅在当前模型请求和工具循环中可用、不写入会话持久化。这一能力将**扩展 WebUI 引用/提及场景的灵活性**，并可能为多轮工具链调用提供更安全的上下文隔离机制。

## 7. 用户反馈摘要

- **「需要多次追问才返回结果」**（Issue #1697）：用户在查询合约交易时，NanoBot 先回复将查询最近 30 条成交记录，但结果未自动返回。这类「意图确认正确但执行结果丢失」的反馈，与 #5580 中持久化阻塞事件循环的 bug 高度相关，也与 #5583 对应的工具异常无恢复提示的体验问题耦合。
- **「哪个配置控制安全权限？如何启用全权限？」**（Issue #1697）：用户对权限模型存在明显困惑，且该 Issue 的更新间隔长达 6 个月未见维护者回应，提示**权限配置文档存在覆盖缺口**。
- **「rich output never rendered」**（PR #5531，Telegram）：`rich_messages: true` + `streaming: true` 组合下，富文本消息始终通过旧版 HTML 编辑路径发送，富文本分支不可达。这解释了此前多个 Telegram 富文本相关的用户不满，修复（#5531）处于待合并状态，同时一个新 PR（#5614）进一步实现了 Telegram 富文本流式发送（目前标记为 DO-NOT-MERGE/draft）。
- **积极的生态信号**：AnySearch 团队主动提交集成 PR，说明外部服务商对 NanoBot 的插件机制认可度在提升。

## 8. 待处理积压

以下长期未解决的事项值得维护者关注：

- **[Issue #1697]**（2026-03-08 创建，至今未关闭）— [链接](https://github.com/HKUDS/nanobot/issues/1697)
  查询结果不自动返回 + 权限配置困惑。已存活近 6 个月，是今日列表中存留最久的 Open Issue。虽相关修复散落在 #5580、#5583 等 PR 中，但无单一 PR 直接声明 closes #1697，建议维护者追踪验证并补充权限文档。

- **[PR #5412]**（2026-08-17 创建，OPEN）— [链接](https://github.com/HKUDS/nanobot/pull/5412)
  `flush background child output to logs` — 修复后台网关/API 进程早期输出因 Python 块缓冲而延迟写入日志文件的问题。已存在两周，无冲突标记但仍在待合并队列，属于影响可观测性的实用修复。

- **[PR #5338]→ 已合并**：上面提及的 MCP 凭据保护问题实际上经历了 8/11 至 8/30 约 19 天的评审期，表明 **MCP 相关改动需要更仔细的安全评审**。建议社区在后续 MCP 相关 PR 中预留更长的 review buffer。

- **PR #5571 与 #5570（记忆系统重构）**：两者均为 p1/p2 优先级且由同一作者提交，构成较大的行为变更（默认不预加载记忆）。当前无反对意见记录，但考虑到其影响面 — 所有使用记忆功能的现有部署 — 建议维护者考虑发布**候选版本（RC）或 Beta 标记**，以便在正式合并前获得更宽的社区验证。

---

**报告总结**：NanoBot 项目在 Agent 架构精细化（Runner 统一上下文管理）、渠道体验修复（Telegram 富文本、邮件 OAuth/投递语义）、以及记忆系统前瞻性重构（可插拔 + 显式召回）三条线上同步推进。外部生态（AnySearch）的主动入驻是积极信号。需要关注的主要风险是 #5580 的 p1 + conflict 状态，以及记忆重构 PR 组在未经过 RC 验证的情况下直接合入主分支的可能性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-31

## 今日速览

过去 24 小时项目保持中高活跃度：共处理 50 条 Issues（40 条活跃 / 10 条关闭）和 50 条 PR（48 条待合并 / 2 条已合并），无新版本发布。值得关注的是，48 条待合并 PR 与仅 2 条合并/关闭形成明显反差，合并通道出现积压。今日最突出的信号集中在 **Desktop 会话状态与上下文压缩** 领域——`#98722`（持续 "Summarizing thread" 循环）和 `#96811`（P0 级会话亲和性密钥轮换）暴露了该方向仍存在系统性稳定性风险。Desktop 相关 Bug 高频出现（双 Dock 图标、自动朗读重复、图片灯箱显示异常等），社区对桌面端体验的反馈较为密集，可能是当前版本迭代的薄弱环节。此外，合并通道的拥堵值得关注——大量修复 PR 等待合入。

---

## 项目进展

今日仅 2 条 PR 被合并/关闭，但其中一条为**核心稳定性修复**：

- **[PR #98450] fix(compression): in-place compaction commit never stamps _DB_PERSISTED_MARKER** — 由 issue 直接转为修复 PR 并合入，解决了 `compression.in_place: true` 时压缩后 transcript 被重新 INSERT、live set 从 ~58K 暴涨至 ~512K tokens 的严重问题。这条修复对长会话用户有直接帮助，意味着压缩后的持久化标记机制恢复正常，会话体积不会再无故膨胀。该项修复已关闭对应的 P1 issue。

其余 48 条 PR 仍处于待合并状态。从开放 PR 的质量来看，目前等待中的关键修复已形成了一个"维护批次"（见 Bug 与稳定性章节），一旦合并将对项目稳定性有明显提升。

---

## 社区热点

| 排名 | Issue/PR | 评论数 | 👍 | 关注点 |
|-------|----------|--------|-----|--------|
| 1 | [#66616] Skills index is stale or degraded | 127 | 0 | 自动巡检发现技能索引老化（29.8h > 26h 限制），已持续数月，bots 持续关注但社区互动少 |
| 2 | [#25267] Claude Agent SDK model provider with subscription OAuth | 17 | 53 | **社区呼声最高的功能请求** — 用户希望用 Claude 订阅直接跑 Hermes，而不是"订阅 + API 双付费" |
| 3 | [#48098] Desktop stale "Summarizing thread" after compaction resumes | 8 | 0 | Desktop 端压缩状态显示错误，与实际模型工作状态脱节 |

**分析：**

- **#66616**（127 条评论）虽然评论量最大，但主要来自 `nousbot-eng` 的自动巡检机器人，属于低互动但需关注的基础设施稳定性问题。
- **#25267**（53 👍）是**社区真实诉求最强烈的功能请求**。用户表示"Claude 订阅用户实际上付了两次钱"，这种成本敏感型的诉求在开源 AI 工具社区很有代表性。已有 17 条讨论但无官方回复，该问题已开放 3 个多月，建议维护者尽快纳入 roadmap 并给予明确回应。
- **#48098**（8 条评论）反映 Desktop 端会话状态展示与实际状态脱节的问题。该 issue 今日已关闭，说明修复已完成或标记处理。

---

## Bug 与稳定性

按严重程度排列：

### P0

- **[#96811] Per-response session ids churn every conversation-affinity key**（OPEN，2 评论）— 每次响应生成新的 `session_id`，导致 prompt cache 完全失效、缓存命中率大幅下降。影响所有走 OpenRouter / Nous / OpenAI 的会话。**已有对应 fix PR [#98811]**（`Refs #96811`，注意是 `Refs` 不是 `Closes`，说明修复未完全覆盖），但 PR 描述中承认仅部分修复了 issue 的主要复现场景（Hermes Studio group chat），其他路径仍需跟进。
- **[#98722] 持续 "Summarizing thread" 循环 — 压缩锁回收失效，600 秒无进展**（OPEN，2 评论）— 与 #96775、#97488、#84371 属于同一家族问题。**暂无对应 fix PR**，并有新的 [#96775] → [#97488] → [#98722] 演化趋势，需尽快系统性解决。

### P1

- **[#94405] Windows Desktop boot-loop：/api/ws 拒绝 session token**（OPEN，5 评论）— Electron 应用在 Windows 上无法完成启动，环境变量 `HERMES_DASHBOARD_SESSION_TOKEN` 未传递给后端进程。**暂无对应 fix PR**。
- **[#97315] Sole-credential openai-codex pool 429 旋转自循环**（OPEN，1 评论）— 单一 OpenAI 凭据触发 `usage_limit_reached` 后以 ~2 req/s 速率自旋数小时，无退避机制、无尝试上限。**暂无对应 fix PR**，涉及 usage-cost 问题，对使用 ChatGPT 后端的用户影响较大。
- **[#98450] 已修复（关闭）** — 见项目进展，不再重复。

### P2

- **[#98774] run_tests.sh venv probe 只检查 pytest**（OPEN，4 评论）— 漂移的虚拟环境报告代码失败而非缺失依赖，误导调试。**暂无对应 fix PR**。
- **[#99028] Profile-scoped gateways 执行默认 profile 的 cron 任务**（OPEN，2 评论）— 多 profile 场景下任务串扰问题。**暂无对应 fix PR**。
- **[#99032] TUI paste 占位符缺失时静默发送占位符**（OPEN，2 评论）— 粘贴 token 丢失后模型收到 `[[ N lines ]]` 而用户无感知。**暂无对应 fix PR**。
- **[#84371] 已关闭** — compaction 死循环（middle=0），已修复。
- **[#96775] 已关闭** — 压缩中断后无持久退避，已修复。

### P3

- **[#99065] /btw 在 Desktop 中只显示提示不显示答案**（OPEN，3 评论）— CLI 与 TUI 正常，仅 Desktop 异常。**暂无对应 fix PR**。
- **[#99043] Real-profile refresh 不更新浏览器存储**（OPEN，1 评论）。**暂无对应 fix PR**。
- **[#99066] Desktop 图片灯箱大图缩至 6% 无法查看**（OPEN，1 评论）。**暂无对应 fix PR**。
- **[#84127] macOS Intel `hermes update` 因 cryptography 无 x86_64 wheel 失败**（OPEN，2 评论，需复现）。**暂无对应 fix PR**。
- **[#73151] macOS 双 Dock 图标**（OPEN，5 评论）。**暂无对应 fix PR**。

### 已关闭

- **#98909**（"opened in error"，非 bug）
- **#93515**（Edge TTS 双读，已修复）
- **#97488**（压缩超时遗留问题，已修复）
- **#48098**（Desktop 状态显示，已修复）
- **#84371**（压缩死循环，已修复）
- **#73503**（codex_app_server 压缩失效，已修复）
- **#96775**（压缩中断退避，已修复）

---

## 功能请求与路线图信号

### 高热度 / 可能被纳入

- **#25267 Claude Agent SDK 订阅 OAuth 接入**（53 👍，3+ 个月无官方回应）— 用户明确表达"订阅 + API 双付费"的痛点，属于能有效降低用户成本、提升留存的方向。**评估建议**：该功能涉及与 Anthropic 的 OAuth 对接和计费逻辑，工程量中等，但对 Claude 订阅用户吸引力高，值得进入路线图。如暂无法实现，建议官方至少做一次明确回应。
- **PR #85852 本地 llama.cpp 运行时管理**（待合并）— "一键运行本地模型" 的基础能力，方向与社区对本地化、隐私保护的需求一致，值得关注。
- **PR #98470 Worker 协作契约层**（待合并）— 基于 Data/Borg 分析的被动、JSON 安全契约层，可提升多 agent 协作的可靠性与可控性，如果被合并将是一个重要的架构级增强。

### 低热度新请求

- **#99037 VPN 代理开关配置**（1 评论）— 用户对网络代理的细粒度控制需求。
- **#375 Inception Prompting**（1 评论）— CAMEL-AI 启发的子代理 delegation 加固方案。
- **#88839 操作性表面支持 --json 结构化输出**（1 评论）— 面向自动化/脚本用户的正确诉求。
- **PR #99097 Swedish 界面 locale**（等待合并）— 国际化持续推进。

---

## 用户反馈摘要

**普遍痛点：**

- **成本敏感**：`#25267` 中最直接的用户声音 —— Claude 订阅用户跑 Hermes 需要额外付 API 费用，感受是"付了两次钱"。这对开源 AI 工具的采纳率有明显影响。
- **压缩/会话状态问题集中爆发**：`#98722` 等系列 issue 中用户描述了"Summarizing thread 循环 600 秒无进展"、"压缩后会话体积反而暴涨"等现象，说明长会话场景仍是稳定性短板，且可能与 Desktop 端展示与真实状态脱节问题（#48098）叠加，造成用户困惑。
- **Windows 支持仍是短板**：#94405（boot-loop）、#84127（cryptography wheel 缺失）等 Windows 专属问题持续存在，平台覆盖的完善度仍是口碑风险点。

**使用场景反馈：**

- 多平台部署（Windows/macOS/Linux）用户对 `hermes update`、桌面端 TTS、浏览器覆盖层等具体体验问题反馈积极，说明 Desktop 端实际使用率在上升。
- 有用户提到用 Hermes 做跨设备（laptop + homelab + VPS）Bot 群聊（#97681），场景新颖，但依赖 Desktop 作为调度器，关闭 Desktop 就会中断 —— 这类"常驻后台"型需求值得关注。

---

## 待处理积压

### 长期未响应的重要请求

1. **[#25267] Claude Agent SDK 订阅 OAuth** — 开放 110+ 天，53 👍 为今日最高，无官方回应。建议尽快给出明确答复或纳入路线图规划。
2. **[#375] Inception Prompting** — 开放 180 天，仅 1 条评论，疑似被忽略。该方向与代理韧性直接相关，有学术依据（CAMEL-AI），建议评估后明确优先级或关闭。

### 合并通道积压（48 条 PR 待合并）

- **今日需重点关注的修复类 PR：**
  - **#98811**（P0 缓存修复，仅部分修复 #96811）
  - **#98817**（TUI/CLI 终端铃声提示，低风险 UX 改进）
  - **#99091**（Simplex send() 静默成功修复，`fixes #98949`）
  - **#99093**（Windows Git Bash bot-mode 修复，salvage #97758）
  - **#99094**（Desktop Group Chat 暂停状态持久化，salvage #97808）
  - **#99095**（Desktop auto-speak 与 gateway 配置串扰修复）
  - **#99096**（Teams Adaptive Card 支持）

- **长期未合并 PR（超过 30 天）：**
  - **#63009**（Codex GPT-5.6 压缩阈值提升）— 49 天
  - **#68499**（委托生命周期分离）— 41 天
  - **#85852**（本地 llama.cpp 运行时）— 17 天

### 开放但长期未更新的高严重度 Issue

- **#96811（P0）** — 已有 PR 但明确标注不 closes，需持续跟踪是否还需要后续迭代。
- **#94405（P1）** — Windows boot-loop 已开放 6 天无进展，建议分配 Windows 专项维护者跟进。
- **#97315（P1）** — 429 自旋无退避问题，已开放 3 天，涉及用户计费成本，建议优先处理。

---

*本日报基于 Hermes Agent GitHub 仓库公开数据自动生成，数据截至 2026-08-31。链接格式：`https://github.com/NousResearch/hermes-agent` + Issue/PR 路径（如 `issues/25267` 或 `pull/98811`）。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-31**  
**数据窗口：过去 24 小时（2026-08-30 至 2026-08-31）**


## 1. 今日速览

PicoClaw 项目在过去 24 小时内活跃度**中等偏低**：新增 2 个 Issues（均开放）、1 个待合并 PR（为 2 个月前的存量 PR），无新版本发布。今日值得关注的是两个高质量问题报告：其一直指 session 存储层**数据物理删除**的数据安全缺陷（#3351），其二暴露了 Web UI 在低性能嵌入式设备上的**严重输入卡顿**（#3350），两个问题均直接关联 PicoClaw 轻量级/边缘部署的核心定位。与此同时，一份停滞近两个月的 deltachat 重构 PR（#3222）在今日获得更新，表明维护者仍在持续跟进。整体来看，项目处于**稳定维护期**，社区反馈聚焦于数据持久化与低端硬件体验两大痛点。


## 2. 版本发布

本报告周期内无新版本 Release。


## 3. 项目进展

### 今日无合并/关闭 PR

过去 24 小时内没有 PR 被合并或关闭，项目代码库无实际变更推进。

### 值得关注的活跃 PR

| PR | 说明 | 状态 |
|---|---|---|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **deltachat 通道重构**：删除约 200 行代码，移除旧属性与回退逻辑、改用官方 relay 列表、废弃密码认证、新增 `show_invite_link` 等 | 开放中（stale），8/30 有更新 |

该 PR 自 7 月 3 日创建以来已近两个月，今日获得更新（可能回应了 reviewer 反馈）。若合并，将显著提升 deltachat 通道的维护性与安全性，但当前仍未进入合并流程。


## 4. 社区热点

今日最受关注的讨论集中在用户对**数据安全**的质疑上：

**[#3351 自动压缩物理删除 session 历史记录](https://github.com/sipeed/picoclaw/issues/3351)** — 用户 `chentianxiong123` 通过直接查看 `.jsonl` 文件证实：长对话触发自动压缩时，`JSONLStore.rewriteJSONL` 会**物理覆盖整个文件**，而非追加写入。这意味着"失忆"后连原始记录都无法找回。该 Issue 虽暂无评论，但触及 AI 助手类项目最敏感的数据持久化问题，预计将引发讨论。

**[#3350 Web UI 在低性能设备上打字卡顿](https://github.com/sipeed/picoclaw/issues/3350)** — 用户报告在 RV1106 等 RISC-V 低端硬件上，输入框延迟随聊天记录增长而加剧，CPU 飙升。该问题直接挑战 PicoClaw 主打嵌入式/轻量级场景的核心卖点。

> **分析**：两个 Issue 均未获评论，但问题本身精准、有源码定位，属于高质量反馈，预计将获得维护者关注。


## 5. Bug 与稳定性

今日报告 2 个问题，按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | Session 存储非纯 append-only：`SetHistory` 通过 `rewriteJSONL` 物理覆盖文件，自动压缩后**历史数据不可恢复**。属数据丢失级缺陷。 | 无 |
| 🟡 中 | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Web UI 输入框延迟随聊天记录增长而加剧，在低性能设备上**每字符输入均有明显卡顿**，CPU 飙升。疑似前端渲染与历史消息量线性耦合。 | 无 |

两个问题均尚未关联修复 PR，其中 #3351 建议优先排查——数据不可恢复问题在用户信任层面影响较大。


## 6. 功能请求与路线图信号

本周期无新功能请求。但结合活跃 PR 可推测路线图方向：

- **deltachat 通道现代化**（[#3222](https://github.com/sipeed/picoclaw/pull/3222)）：移除密码认证、转向官方 relay 列表，表明项目在**去中心化通信**方向持续推进，同时提升安全性。
- **嵌入式场景优化**（由 [#3350](https://github.com/sipeed/picoclaw/issues/3350) 反向推断）：针对低性能设备的 UI 性能优化可能成为近期重点，尤其是聊天历史消息的虚拟滚动/懒加载机制。


## 7. 用户反馈摘要

| 用户诉求 | 来源 | 深层需求 |
|---|---|---|
| **"原始聊天记录在压缩后无法找回"** | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | 用户希望"失忆"不影响历史数据留存——即 `session` 应作为**不可变日志**存在，压缩仅作用于上下文窗口（给 LLM 的 token），而非物理删除原始文件。 |
| **"为什么输入框打字会受聊天记录长度影响？"** | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 用户认为 UI 输入性能与历史消息渲染应**解耦**，暗示前端可能在全量渲染上存在 O(n) 性能瓶颈，期望优化为增量渲染或虚拟列表。 |
| **PR #3222 作者的维护倾向** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 主动削减兼容代码与删除过时功能（-200LOC），表明维护者重视**代码精简与安全收敛**，而非功能堆叠。 |


## 8. 待处理积压

> ⚠️ **维护者关注提醒**

| 项目 | 类型 | 等待时长 | 备注 |
|---|---|---|---|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | **58 天** | deltachat 重构 PR 自 7/3 建立至今未合并，虽今日有更新，但仍处于 stale 状态。该 PR 涉及安全相关变更（移除密码认证），建议尽快安排 review，避免长期分支导致冲突扩大化。 |

本周期内无其他长期未响应的关键 Issue。


**总结**：PicoClaw 今日无代码变动、无版本发布，但两则高质量 Issue 揭示了**数据安全**与**低端硬件体验**两大短板，与项目嵌入式定位直接相关。建议维护者优先关注 #3351 的数据持久化方案（可考虑引入 WAL 或定期归档机制），并对 #3350 的前端渲染做性能剖析。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-31

## 今日速览

NanoClaw 项目在过去 24 小时内保持了稳定的活跃度，共收到 2 条新 Issues 和 25 条待合并 PR，日新增 PR 数量处于近期高位。核心团队提交的大型 provider 架构重构系列 PR（共 8 条）仍在待合并状态，涉及 provider contract 声明、指令渲染、运行时/宿主/设置契约等，表明项目正进行一次系统性的 provider 层基础设施升级。两个新 Issue 分别指向 Conifer 网关新 provider 支持和 `update-nanoclaw` 的符号链接快照问题——前者是社区提出的新集成请求，后者则暴露了一个涉及数据安全的 Bug。项目当前无紧急事故性回归，但 PR 积压量较高，合并节奏成为关注点。


## 版本发布

过去 24 小时无新版本发布。


## 项目进展

今日无 PR 被合并或关闭，25 条待合并 PR 中绝大多数来自核心团队（zvi-fried ×15、amit-shafnir ×4），展现了明显的架构级推进势头，但合入节奏亟需关注。

值得重点追踪的待合并 PR 包括：

- **Provider 契约重构系列（8 条）**：zvi-fried 连续提交 `refactor(providers)`: 声明 runtime 契约 ([#3581](https://github.com/nanocoai/nanoclaw/pull/3581))、宿主契约 ([#3585](https://github.com/nanocoai/nanoclaw/pull/3585))、安装验证器 ([#3586](https://github.com/nanocoai/nanoclaw/pull/3586))、核心持有指令渲染 ([#3591](https://github.com/nanocoai/nanoclaw/pull/3591))、opencode 契约 ([#3588](https://github.com/nanocoai/nanoclaw/pull/3588))、codex 契约 ([#3584](https://github.com/nanocoai/nanoclaw/pull/3584))，以及 tone→personality/speed→service tier 映射 ([#3593](https://github.com/nanocoai/nanoclaw/pull/3593)) 和 speed inference 属性 ([#3592](https://github.com/nanocoai/nanoclaw/pull/3592))。该系列将 provider 的定义从散落的代码中抽离为统一契约，是平台化方向的关键架构投资。
- **CLI 任务修复** ([#3687](https://github.com/nanocoai/nanoclaw/pull/3687))：matt1995ai 修复 `ncl tasks` 无法识别 chat session 中任务的问题，涉及 44 条活跃 series。
- **Slack 委托上传作者修复** ([#3686](https://github.com/nanocoai/nanoclaw/pull/3686))：保留人工作者身份。
- **Ollama 本地模型三连 PR**：provider payload ([#3546](https://github.com/nanocoai/nanoclaw/pull/3546))、engine seams ([#3547](https://github.com/nanocoai/nanoclaw/pull/3547))、一键安装 skill ([#3548](https://github.com/nanocoai/nanoclaw/pull/3548))，配合本地 Web Chat ([#3298](https://github.com/nanocoai/nanoclaw/pull/3298)) 形成本地部署闭环。


## 社区热点

今日最具讨论价值的是两个新 Issue，均暂无评论但信号明确：

- **#3685 Conifer 网关支持请求** ([Issue #3685](https://github.com/nanocoai/nanoclaw/issues/3685))：用户 charlespers 请求将 Conifer（一个统一网关，同时兼容 OpenAI 和 Anthropic 协议）作为一级 provider 接入。值得注意：该请求特意强调"genuinely free"——用户对"免费"有明确诉求，可能有被此前某些 provider 的"伪免费"（需 BYOK 或有限额度）伤害过的经历。该请求与团队当前进行的 provider 契约重构方向高度契合，实现成本可能较低。

- **#3684 `update-nanoclaw` 符号链接快照 Bug** ([Issue #3684](https://github.com/nanocoai/nanoclaw/issues/3684))：安全敏感问题——当 `data/` 或 `groups/` 为符号链接时，快照记录了链接本身而非内容，导致更新报告成功后回滚实际上恢复了指向"已迁移数据"的链接。这是一个"静默失败"型问题，比显式报错更危险。


## Bug 与稳定性

按严重程度排序：

**中等（数据安全）**
- **符号链接快照 Bug** ([Issue #3684](https://github.com/nanocoai/nanoclaw/issues/3684))：`update-nanoclaw` 的 mutable-state 快照在遇到 `data/` 或 `groups/` 为符号链接时只记录链接而非内容。事务报告成功，但回滚可能将数据留在已迁移状态。当前无修复 PR。

**较低（功能缺陷）**
- **`ncl tasks` 无法识别 chat session 中的任务** ([PR #3687](https://github.com/nanocoai/nanoclaw/pull/3687))：当 scheduled task 早于 per-series task sessions 时不可见，agent 询问自身时间表得到 `No tasks.`，实际有 44 条活跃 series。已有修复 PR。

**CI 稳定性**
- **skill-directives 测试断言过期** ([PR #3682](https://github.com/nanocoai/nanoclaw/pull/3682))：`main` 分支在 `scripts/skill-directives.test.ts` 上为红色，测试硬编码的文件列表未跟上 add-slack 的 `nc:copy` fence 变更。已有修复 PR。


## 功能请求与路线图信号

- **Conifer 网关 Provider** ([Issue #3685](https://github.com/nanocoai/nanoclaw/issues/3685))：一键接入所有主流模型，兼客 OpenAI/Anthropic 双协议。"BYOK、本地模型、真正免费"三点诉求明确。结合 team 正在进行的 provider contract 重构（[#3581](https://github.com/nanocoai/nanoclaw/pull/3581)-[#3593](https://github.com/nanocoai/nanoclaw/pull/3593)），新 provider 接入的成本有望显著降低，此请求大概率会被纳入下一迭代。

- **本地优先部署闭环**：Ollama 启动 skill ([#3548](https://github.com/nanocoai/nanoclaw/pull/3548)) + 本地 Web Chat ([#3298](https://github.com/nanocoai/nanoclaw/pull/3298)) + Ollama provider ([#3546](https://github.com/nanocoai/nanoclaw/pull/3546)) 构成一个完整的"装上即用"本地体验。这可能是项目在"去外部依赖"方向上的重要产品决策。


## 用户反馈摘要

由于今日两个新 Issue 均无评论，本轮从 Issues 本身提炼诉求：

- **对"真免费"的敏感性**：用户明确区分"BYOK/本地模型"和"genuinely free"，暗示对某些 provider 宣传免费的透明度存在不信任。对 NanoClaw 的启示是：在 provider 文档和市场定位中应明确标注使用限制，避免"假免费"观感。
- **对数据一致性的高要求**：符号链接场景的静默失败 Bug 说明部分用户以非标准目录布局运行 NanoClaw（`data/`/`groups/` 用符号链接指向独立磁盘或自管理位置），对升级/回滚的正确性有明确预期。
- **任务可见性需求**：`ncl tasks` 无法列出历史任务的问题暴露了一个真实操作场景——agent 自我查询任务列表用于自主规划或用户审计，隐藏任务会让 agent 产生错误的自认知。


## 待处理积压

- **PR 合并积压（25 条待合入）**：核心团队的 15 条 PR 中，最早的 [#3505](https://github.com/nanocoai/nanoclaw/pull/3505)（附件路由修复）已等待 7 天，provider 重构系列最大已等待 4 天（其中 8 条均于 8/27-8/28 创建）。高积压量可能造成与 `main` 分支的合并冲突累积，建议按依赖顺序批处理合并。

- **本地功能四件套**（[#3546](https://github.com/nanocoai/nanoclaw/pull/3546)、[#3547](https://github.com/nanocoai/nanoclaw/pull/3547)、[#3548](https://github.com/nanocoai/nanoclaw/pull/3548)、[#3298](https://github.com/nanocoai/nanoclaw/pull/3298)）均已等待 5 天以上，存在互相依赖关系，长期挂起可能阻塞后续工作。

---

*日报由 AI 自动生成，数据截至 2026-08-31。所有链接均指向 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-31

---

## 今日速览

项目过去24小时整体活跃度**中等偏上**，主要动力来自 PR 通道：11 条 PR 获得更新（10 条待合并、1 条已关闭），但 Issues 通道完全静默——无新开、无关闭、无评论。代码基础设施层面有持续投入：夜间自动知识图谱刷新（#7988）、CI 统一化改造（#7992）、设计系统 Phase 3a 基础（#7831）均在推进中；同时批量依赖升级 PR（Rust、Wasm、GitHub Actions）持续涌入，占待合并队列过半。从数据看，项目当前处于**密集的技术债清偿与基础设施加固期**，但不排除活跃度向代码提交倾斜、社区讨论（Issues）相对冷清这一结构性失衡风险。

---

## 项目进展

过去24小时内无 PR 被合并（唯一关闭的 #7959 为依赖升级，dependabot 常规操作，大概率因冲突或未被采纳而关闭）。以下为当前待合并队列中值得关注的重要动议：

- **[#7992] [OPEN] ci: unify bounded integration execution** — 将 PR 与 merge-queue 的集成测试统一为单次 `cargo nextest run`，固定 4 并发上限，并直接消费类型化的 Cargo 集成清单，移除多余的 shell 投影与分组 runner，简化 CI 架构。作者：henrypark133（core），风险中等，涉及 CI。  
  🔗 https://github.com/nearai/ironclaw/pull/7992

- **[#7831] [OPEN] Design System Phase 3a foundation — Chromatic lane + missing token axes** — 为 `webui-v2` 引入非阻塞的 Chromatic 视觉回归通道（刻意不加入 `code-style` 滚动 `needs:` 列表），补齐缺失的设计 token 轴向，为 Phase 3 改版奠定测试基础。作者：rdisandro（experienced），规模 XL，风险中等。  
  🔗 https://github.com/nearai/ironclaw/pull/7831

- **[#7988] [OPEN] chore(agents): refresh codebase knowledge graph** — 由夜间工作流自动生成的代码库记忆快照刷新，属 CI/基础设施例行维护。作者：ironclaw-ci[bot]（core），规模 XS，风险低。  
  🔗 https://github.com/nearai/ironclaw/pull/7988

> **综合判断**：项目整体向"CI 更简、测试更稳、设计系统基础更牢"的方向持续推进。但需注意，过去24小时合并数为零，长期来看合并吞吐量可能成为瓶颈。

---

## 社区热点

今日 Issues 与 PR 评论区均无新增讨论（评论数据为 undefined），没有明显的社区讨论热点。但从 PR 动作频率和规模可推断几个隐性"热点"方向：

- **错误分类语义的精细化修复**（#7985、#7990，作者 same: standardtoaster，experienced）— 两份 PR 均指向同一个深层主题："什么样的失败算输入编码错误、什么样的算领域失败"。这不仅是内部错误处理的质量问题，也直接影响用户侧看到的错误信息是否准确可操作。
  - #7985：`NativeMemoryService::read` 中"文档不存在"被错误映射为 `InputEncode` 失败，用户会看到 *"the tool input could not be encoded"* 这种误导性报错。
  - #7990：tool-disclosure 桥将所有可恢复失败统一标记为 `InputEncode`，导致真正格式错误的输入与"工具名无法解析"混为一谈。  
  🔗 https://github.com/nearai/ironclaw/pull/7985 | https://github.com/nearai/ironclaw/pull/7990

- **循环终止机制的回归风险**（#7977）— 源自 #7531 移除基于摘要的终止器后，非进展性运行可无限持续（生产运行 e3513a4e 曾跑 593 次工具调用、耗时 70 分钟），社区/团队内部显然对此有压力，正在寻求收敛方案。  
  🔗 https://github.com/nearai/ironclaw/pull/7977

---

## Bug 与稳定性

今日无新 Bug Issue 报告。以下为已进入修复流程的稳定性隐患，按严重程度排列：

| 严重程度 | 问题描述 | 修复 PR | 状态 |
|---|---|---|---|
| **高** | 循环无法在非进展状态下终止，单次运行可达 593 次工具调用（约70分钟），消耗大量 token 与时间成本 | #7977（终止于重复输出 + 限制交互墙钟） | OPEN，待合并 |
| **中** | 内存服务读取不存在文档时，用户看到 "input could not be encoded" 的误导性错误，而非"文档不存在" | #7985（域失败与输入错误区分） | OPEN，待合并 |
| **中** | 工具披露桥中"工具名无法解析"被统一标记为输入编码错误，掩盖真实失败原因 | #7990（区分两种失败类型） | OPEN，待合并 |

> 三项修复均已完成、处于待合并状态，建议维护者优先评审合并，以消除用户侧错误信息误导与资源浪费的隐患。

---

## 功能请求与路线图信号

今日无新功能请求 Issue。结合待合并 PR，以下方向可能被纳入下一迭代：

- **设计系统 Phase 3a（#7831）**：Chromatic 视觉回归通道 + 设计 token 补全，指向 WebUI 大规模改版的前置基础，预示 3a/b/c 系列将持续数周。
- **循环控制精细化（#7977）**：终止条件 + 墙钟上限，面向生产环境降低 token 成本与失控风险，属于 agent 稳定性路线图的关键一环。
- **CI 架构收敛（#7992）**：合并单测执行、砍掉多余 shell 层，为后续持续集成扩展（如更多平台、更多集成类型）铺路。

---

## 用户反馈摘要

今日 Issues/PR 评论区无新增用户反馈（评论数据缺失）。可参考的间接信号：

- **来自作者 standardtoaster**（#7985、#7990）的修复动机直指用户可见错误信息的准确性问题——"工具输入无法编码"这句话对终端用户是黑话，实际含义可能是"文档不存在"或"工具名拼错"。从 PR 描述看，这些误导性错误在生产中确实发生并被用户/内部观察到（#7985 引用真实失败案例）。
- **来自作者 henrypark133**（#7977）的修复动机来自真实生产运行数据（e3513a4e，593 次调用/70 分钟），说明非受控运行成本已在生产环境被实际感受到。

> 综合判断：用户侧最迫切的痛点是"错误可理解性"和"运行可终止性"——两者都是 agent 可靠性/成本控制的关键，工程团队已做出针对性响应。

---

## 待处理积压

以下 PR 长期未获得合并或明确回应，提请维护者关注：

| PR | 主题 | 等待时长 | 风险/规模 | 备注 |
|---|---|---|---|---|
| **#7020** | tokio-tungstenite 0.29→0.30（tokio 生态组） | 29 天（2026-08-02 创建，至今 OPEN） | S / low | dependabot 自动升级，长期未合并可能因 breaking change 或依赖冲突，建议明确处理（合并或关闭并说明原因） |
| **#7834** | wasm 组 4 项更新（wasmtime/wit-component/wit-parser） | 8 天 | L / medium | Wasmtime 跨版本升级潜在破坏面大，建议尽早分配 reviewer 做兼容性验证 |
| **#7835** | actions 组 5 项更新（含 claude-code-action 1.0.183→1.0.208、setup-node 4.x→7.x） | 8 天 | M / medium | setup-node 跨 major 版本，需确认 CI 兼容性 |
| **#7831** | 设计系统 Phase 3a 基础（Chromatic + token 轴） | 8 天 | XL / medium | 规模大，需足够 review 带宽，避免阻塞 Phase 3 后续依赖 |
| **#7993** | everything-else 组 16 项 Rust 依赖更新（uuid/base64/toml 等） | 1 天 | L / low | 大量依赖批量升级，建议与 #7959（已关闭）对比处理，避免重复劳动 |

> **健康度提示**：唯一合并/关闭的 PR 是依赖升级（#7959），而 12 个功能/修复类 PR（#7831/#7977/#7985/#7990/#7992 等）均停留 OPEN 状态。合并吞吐不足可能导致技术债堆叠，建议维护团队评估评审带宽是否匹配 PR 产生速率。

---
*本日报基于 2026-08-31 的 GitHub 数据自动生成，具体数据截至 2026-08-31 当日。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-31

## 今日速览

项目今日活跃度处于**中等偏下**水平。过去24小时内，Issues 和 PR 各有 7 条更新，但 **Issues 全部为关闭状态（均为 stale 自动关闭）**，无新开 Issue；PR 方面有 3 条处于待合并状态，4 条已合并/关闭。值得关注的是，今日有 **1 个新提交的 PR（#2574）** 引入了应用内交互式浏览器功能，是近期的亮点功能增量。另一个新 PR（#2573）为未登录用户添加了登录引导弹窗，改善用户体验。**今日无新版本发布**。项目整体健康度良好，但社区讨论热度偏低，多数更新来自 stale 清理机制。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日合并/关闭了 4 个 PR，新提交 2 个 PR，主要推进方向如下：

| PR | 状态 | 内容 | 影响 |
|---|---|---|---|
| [#2573](https://github.com/netease-youdao/LobsterAI/pull/2573) | 🔀 新提交（OPEN） | 未登录用户发送聊天消息时，展示专门的欢迎弹窗，引导登录 | 改善新用户引导流程，降低使用门槛 |
| [#2574](https://github.com/netease-youdao/LobsterAI/pull/2574) | 🔀 新提交（OPEN） | 在右侧 Artifact 面板中内嵌**交互式 Agent 浏览器**，同时保留独立浏览器窗口模式；通过 LobsterAI MCP 桥接 OpenClaw 浏览器工具，使 Agent 与用户共享同一页面；持久化浏览器配置文件 | 显著提升 Agent 与用户的实时协作体验，是近期最大的功能增量之一 |
| [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) | ✅ 已合并 | Cowork 初始化阶段用骨架屏（shimmer skeleton）替代静态加载文字 | 改善启动等待体验，消除空白加载态 |
| [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) | ✅ 已合并 | SkillsManager 和 TaskRunHistory 空状态增加图标和副标题 | 统一 UI 风格，提升空状态的信息传达 |
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) | ✅ 已合并 | 依赖升级：@headlessui/react 1.7.19 → 2.2.10 | 跟随上游更新，可能引入组件行为变化，需关注回归 |

**长期待合并 PR（仍在 OPEN 状态）：**
- [#1127](https://github.com/netease-youdao/LobsterAI/pull/1127) — 修复 MCP 服务 stop() 方法中强制关闭定时器未取消导致的连接误关问题（已搁置 5 个月）
- [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) — 修复 Anthropic SSE 流式解析因缺少行缓冲导致数据丢失的问题（已搁置 5 个月，关联 Issue #922）

> 💡 **信号**：PR #2574 的提交内容很扎实（共享页面 + MCP 桥接 + 持久化），说明团队仍在积极推进 Agent 协作体验的核心能力建设。若通过评审，将是下一次版本发布的重要特性。

---

## 社区热点

今日社区讨论热度极低，所有 Issues 均为 stale 自动关闭，无新模式或活跃讨论。评论数最多的 Issue 为 4 条：

1. **[#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) — 有道龙虾与智企帝王蟹 gateway 端口冲突**（评论 4，stale 关闭）
   - 用户反馈：龙虾启动状态下安装智企帝王蟹，必现 gateway 鉴权失败和端口竞争，关闭龙虾后恢复。该问题被标记为 stale 关闭，但**未被标记为已解决**，未来可能复发。

2. **[#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) — Bug report**（评论 4，stale 关闭）
   - 上传失败的技术支持联系函，信息不完整。

3. **[#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) — Win11 安装图标白色无效**（评论 3，stale 关闭）
   - 安装过程中图标显示异常，大概率复现，涉及 Windows 平台兼容性问题。

其余 Issue 评论数均为 2-3 条，无热点讨论。整体来看，社区用户反馈更多集中在**功能细节缺陷**，而非使用路径模糊或文档缺失。

---

## Bug 与稳定性

今日**无新 Bug 报告**。此前报告的问题多数已被 stale 机制自动关闭（不代表已修复），其中值得关注的风险项如下（按严重程度排序）：

| 严重程度 | Issue | 问题描述 | fix PR |
|---|---|---|---|
| 🟠 中 | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 与智企帝王蟹 gateway 端口冲突，必现 | 无 |
| 🟡 中 | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 安装图标白色无效（大概率出现） | 无 |
| 🟡 中 | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | 更新后 edit diff 失灵，根因已定位（`extractDiffFromToolInput` 函数只取顶层 old/newText） | 无 |
| 🟢 低 | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | 定时任务通知文案错误 | 无 |
| 🟢 低 | [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | 无法动态调整大模型 temperature 参数 | 无 |
| 🔴 高* | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | 无法连接 Outlook 邮箱（不支持 OAuth2/新式身份验证），**用户完全无法使用邮箱功能** | 无 |

> *注：Outlook 邮箱问题对受影响用户的阻塞性最强，属于无法绕过的问题。

**长期未合并的 bug-fix PR：**
- [#1127](https://github.com/netease-youdao/LobsterAI/pull/1127) — MCP 强制关闭定时器未取消（5 个月未合并）
- [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) — Anthropic SSE 流式解析数据丢失（5 个月未合并，关联 Issue #922）

> ⚠️ 这两个 PR 均涉及**数据丢失或连接误关**级别的稳定性问题，长期搁置可能对用户在特定场景下的体验造成持续性伤害，建议优先评审。

---

## 功能请求与路线图信号

今日**无新功能请求**提出。已有的功能相关信号如下：

| 需求 | 来源 | 当前状态 | 路线图预测 |
|---|---|---|---|
| 动态调整大模型 temperature 参数 | [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | 已 stale 关闭，无实现 | 低优先级，短期内可能不会纳入 |
| 应用内交互式浏览器 | PR [#2574](https://github.com/netease-youdao/LobsterAI/pull/2574) | 待合并 | **大概率进入下一版本**，是当前最明确的功能增量 |
| 邮箱 OAuth2 支持 | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | stale 关闭，无实现 | 取决于邮箱功能在路线图中的优先级 |

---

## 用户反馈摘要

从今日关闭的各 Issue 评论和描述中，可提炼如下用户画像：

**积极方面：**
- 用户对 LobsterAI 的定位有明确预期（Agent 协作、定时任务、多工具联动），说明产品心智已初步建立。
- 用户愿意深入分析根因（如 #1783 的用户找到了 `extractDiffFromToolInput` 函数的具体问题），表明社区存在**高技术水平用户**，且对产品期待值较高。

**痛点与不满：**
- **多产品共存冲突**（#1698）：用户同时使用有道系多款产品时，出现端口/进程竞争，说明产品在**系统级资源管理**上需要更强的隔离或协调策略。
- **平台兼容性不足**（#1714）：Windows 11 安装图标异常问题在发布数月后仍未修复，可能持续影响 Windows 用户获取与推广。
- **第三方服务接入受限**（#1745）：Outlook 邮箱无法使用令用户感到明显挫败，主流第三方服务的对接质量直接影响用户的信任度。
- **更新后功能回归**（#1783、#1751）：用户在更新后遇到 diff 失灵和文案错误，反映了**回归测试覆盖存在盲区**。

---

## 待处理积压

以下 Issue/PR 长时间未获响应或未解决，建议维护者重点跟进：

| 类型 | 编号 | 描述 | 搁置时长 | 建议 |
|---|---|---|---|---|
| PR | [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) | Anthropic SSE 流式解析数据丢失修复 | 5 个月 | **优先评审**，高影响稳定性问题 |
| PR | [#1127](https://github.com/netease-youdao/LobsterAI/pull/1127) | MCP 强制关闭定时器连接误关修复 | 5 个月 | **优先评审**，涉及核心连接管理 |
| Issue | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | Outlook 邮箱 OAuth2 支持 | 4 个月+ | 若邮箱功能在规划中，应评估工作量并回复用户 |
| Issue | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 与智企帝王蟹 gateway 端口冲突 | 4 个月+ | 未被标记为已解决，建议内部复现确认 |
| Issue | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 安装图标白色无效 | 4 个月+ | 建议确认是否已修复，修复后标记关闭以清理积压 |

---

*本报告基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-31

## 1. 今日速览

Moltis 今日整体活跃度**中等偏低**，过去24小时内共产生 4 条动态（1 Issue 关闭、2 PR 更新、1 版本发布）。项目在 **Arm64 架构兼容性**方面取得了实质性进展——此前长期存在的 Docker 沙箱在 Apple Silicon 上无法启动的问题（#1085）已于今日关闭，对应修复 PR #1247 已完成合并。与此同时，一个新的功能修复 PR #1248 已提交并在今日进入待合并状态，涉及执行工具对显式 `node: null` 的语义处理。社区今日无新增 Issue 和 PR 提出，讨论热度较低，但项目正在稳健地清理技术债务和跨架构兼容性问题。

---

## 2. 版本发布

### Release `20260830.01`（8月30日发布）

今日发布新版本 `20260830.01`。该版本紧随机场修复节奏，主要包含：

**更新内容：**
- 修复 Docker 沙箱在 arm64（Apple Silicon）架构上的启动失败问题（Issue #1085，PR #1247）
- 移除对 x86 专用 SMBIOS 路径（`/sys/class/dmi`、`/sys/devices/virtual/dmi`）的无条件挂载掩码

**破坏性变更：** 无已知破坏性变更。该修复仅影响 arm64 Docker 环境下的沙箱行为，x86 环境的原有挂载策略保持不变。

**迁移注意事项：** 使用 Docker Desktop（macOS）或 arm64 Linux 宿主机的用户在升级后可正常启动沙箱；无需额外配置迁移。

---

## 3. 项目进展

今日最重要的事件是 **PR #1247 合并关闭**，直接解决了长期阻碍 arm64 用户使用 Docker 沙箱的严重问题：

- **[PR #1247 — fix(sandbox): drop DMI sysfs masks on arm64 Docker daemons](https://github.com/moltis-org/moltis/pull/1247)**（已合并，关闭 #1085）
  - **根因修复**：`sysfs_paths_to_mask_from()` 在检测到宿主机无 `/sys`（macOS）时，假定 Docker Desktop 的 Linux VM 具备完整 sysfs，从而对 `/sys/class/dmi` 和 `/sys/devices/virtual/dmi` 进行无条件挂载掩码。但 DMI 是 x86 SMBIOS 特性，在 arm64 中不存在，runc 因此无法创建挂载点。
  - **修复方式**：在 arm64 Docker daemon 环境下跳过 DMI 相关掩码。
  - 该项目进展标志着 Moltis 在**跨平台兼容性**方面向前迈出了重要一步，覆盖了 Apple Silicon 用户的完整使用链路。

另外，PR #1248 已提交并进入待合并（OPEN）状态，但尚未完成合并——详见下文功能小节。

---

## 4. 社区热点

今日社区讨论热度较低，无高互动话题。但 **Issue #1085** 值得关注——尽管已关闭，该 Issue 自 5 月底提出至今日修复经历约 3 个月，是社区持续关注的重点问题。

- **[Issue #1085 — Docker sandbox fails on arm64: /sys/class/dmi mount error](https://github.com/moltis-org/moltis/issues/1085)**（已关闭，0 评论）
  - 诉求分析：该 Issue 代表了一类用户痛点——**arm64（Apple Silicon）设备上的容器兼容性**。Moltis 的沙箱功能在 Mac 上无法使用，直接阻碍了这些用户的核心工作流。尽管该 Issue 本身评论数为 0，但其持续 3 个月未被解决的历史反映了社区对 Apple Silicon 支持的关注度。

---

## 5. Bug 与稳定性

今日报告并关闭的 Bug **仅 1 条**，严重程度为中高，但已圆满解决：

**中高严重 — Docker 沙箱无法在 arm64 上启动（已关闭/已修复）**
- **Issue #1085**（[链接](https://github.com/moltis-org/moltis/issues/1085)）：`/sys/class/dmi` 挂载错误导致沙箱启动失败
  - 影响：Apple Silicon 用户无法使用 Docker 沙箱功能，属于功能性阻断
  - Fix PR：**#1247**（已合并）
  - 无其他待处理 Bug、崩溃或回归问题报告。

今日无新增 Bug 报告，项目稳定性整体良好。

---

## 6. 功能请求与路线图信号

今日无新的 Feature Request 提出，但有一个值得关注的功能性修复 PR 处于待合并状态：

- **[PR #1248 — fix(exec): honor explicit null node selection](https://github.com/moltis-org/moltis/pull/1248)**（作者：`mikemikimike`，创建于 2026-08-31）
  - **功能语义**：该 PR 修复了 `ExecTool` 在 `node` 参数显式为 `null` 时的行为——将其视为显式请求使用本地执行路径，而非当前被忽略并回退到配置默认值的行为。
  - **变更内容**：
    - 显式 `node: null` → 使用本地执行路径
    - `node` 省略 → 保持配置/Provider 的默认选择不变
    - 新增回归测试（覆盖已连接 node provider + 已配置默认值的场景）
  - **潜在路线图信号**：该 PR 体现了 Moltis 对执行工具更细致语义控制的逐渐完善。如果被合并，预计对自动化编排和动态节点分配场景有正向影响。该 PR 当前处于 OPEN 状态且尚未被 review，需要维护者关注。

---

## 7. 用户反馈摘要

今日来自 Issues 的用户反馈信息较少（所有 Issue 均为 0 评论，无直接用户文字反馈），但从 Issue #1085 的描述中可以提取以下关键信息：

- **痛点**：*"Docker sandbox fails to start on Apple Silicon (arm64) because moltis hardcodes tmpfs mounts at `/sys/class/dmi` and `/sys/devices/virtual/dmi`. These directories don't exist in Docker Desktop's Linux VM on arm64 (DMI is an x86 SMBIOS feature), and runc cannot create mountpoints..."*
  - **使用场景**：在 Apple Silicon（Mac M 系列）上的 Docker Desktop 环境中运行 Moltis 沙箱
  - **不满意度来源**：runc 在 arm64 上无法构建挂载点，导致沙箱进程彻底无法启动，功能完全不可用
  - **问题细节识别能力**：用户对底层技术细节的描述精准，直接定位到了硬编码路径和 SMBIOS 架构差异，这有助于修复者快速根因分析

---

## 8. 待处理积压

**需要维护者关注：**

- **[PR #1248 — fix(exec): honor explicit null node selection](https://github.com/moltis-org/moltis/pull/1248)**（OPEN，作者：`mikemikimike`，创建于 2026-08-31）
  - 该 PR 今日刚提交，目前**尚未获得任何 review 或评论**。建议维护者在 48 小时内启动 review 流程，避免因长期未关注导致 contributor 流失。
  - 变更范围涉及核心执行工具（`ExecTool`）的语义处理，推荐至少进行一次维护者代码审查以确认与现有 Provider 选择逻辑的兼容性。

---

**整体评估**：Moltis 项目今日呈现**稳健推进、技术债清理**的健康态势。Arm64 兼容性问题的解决将直接扩大项目的用户覆盖面（特别是 Apple Silicon 开发者群体）。建议维护者重点关注 PR #1248 的及时评审，以保持 contributors 的活跃度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-31

> 数据来源：github.com/agentscope-ai/CoPaw（QwenPaw 仓库）


## 1. 今日速览

今日项目活跃度较高，24 小时内产生 23 条 Issue 更新和 26 条 PR 更新。值得关注的是，维护者 guodaxia103 密集提交了多条安全合规相关 PR（依赖漏洞修复、GPL 依赖排除），反映出项目正在 v2.2.0 发布后面临一轮集中的安全审查。与此同时，社区侧出现了一批针对 2.2.0-beta 的 Bug 报告（工具结果丢失、SSE 流文本重复、消息漂移等），Beta 版本的稳定性问题需要引起重视。另有 2 条来自首次贡献者的 PR 进入审查流程，社区参与度保持正向。整体来看，项目处于"发布后安全加固 + Beta 稳定性修复"的密集开发阶段。**活跃度评级：高。**


## 2. 版本发布

过去 24 小时内无新版本发布。当前最新版本仍为 **v2.2.0-beta.3**（Beta）。不过今日已有 PR #7423（chore: bump the version to 2.2.0b4）提交，预计 **v2.2.0-beta.4** 即将进入发布流程。

值得提醒：v2.2.0-beta.1 中报告的 Tool results lost 问题（#7420）和 Beta.3 中的 Console 流文本重复问题（#7417），在 Beta.4 发布前建议用户关注修复状态。


## 3. 项目进展

今日合并/关闭的 PR 共 6 条，以下为已关闭的重要 PR：

| PR | 内容 | 状态 | 意义 |
|---|---|---|---|
| [#7414](https://github.com/agentscope-ai/QwenPaw/pull/7414) | fix(pawapp): fail closed when chat runtime is unavailable | 已合并 | 消除 PawApp 在缺少运行时时的虚假合成回复，改为结构化错误，提升可诊断性 |
| [#7403](https://github.com/agentscope-ai/QwenPaw/pull/7403) | Update README | 已关闭（合并） | 首次贡献者（tarscheong）的文档改进 |

其余 20 条 PR 处于待合并状态，其中值得关注的高优先级候选包括：
- [#7429](https://github.com/agentscope-ai/QwenPaw/pull/7429) 排除 GPL Pylint 运行时依赖（合规修复）
- [#7427](https://github.com/agentscope-ai/QwenPaw/pull/7427) 修复 Creator UI 前端依赖漏洞（3 高 2 中）
- [#7425](https://github.com/agentscope-ai/QwenPaw/pull/7425) 修复官网依赖漏洞（86 个实例）

项目整体正在从功能开发转向安全与合规加固阶段，同时 Beta 4 版本号已开始推进。


## 4. 社区热点

今日讨论最活跃的 Issue 集中在以下几条：

**[#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) — 工具结果丢失 + 同命令重复调度触发 Doom-Loop 保护**（评论 4，Open）
> 作者在升级到 2.2.0-beta.1 后单次会话出现 5 次 stall，2 种不同机制。这是 Beta 版本中潜在的严重稳定性问题，社区关注度高。

**[#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) — Feishu 通道配置被意外清空**（评论 3，Open）
> 生产环境配置丢失，cron 投递报 `KeyError('channel not found: feishu')`。配置持久化问题直接影响用户生产可用性。

**[#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) — 空 output_text 块污染会话历史导致上游 400 错误**（评论 3，Open）
> 该问题已收到对应修复 PR [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409)，社区响应速度较快。

**[#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396) — Claude Code 作为第三方 agent harness 的状态与路线图**（评论 2，Open）
> 用户关注 harness 功能路线图，Claude Code 仍标记为 "Coming soon"，社区对此有期待。

**背后诉求分析**：社区热点集中在 Beta 版本的稳定性（工具调用丢失、流文本异常）和生产配置可靠性（通道配置丢失）两大方向，其次是对新功能（Claude Code harness）路线图的关注。


## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | 工具结果丢失 + 命令重复调度触发 Doom-Loop 保护（2.2.0-beta.1） | 无 fix PR |
| 🔴 高 | [#7407](https://github.com/agentscope-ai/QwenPaw/issues/7407) | Console 消息静默漂移到错误 agent，会话串线 | 无 fix PR |
| 🟠 中 | [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) | 空 `output_text` 块持久化后导致 Ark API 400 错误 | **已有 fix PR** [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) |
| 🟠 中 | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console 流中段出现大段重复文本，结束时有追加一份 | 无 fix PR |
| 🟠 中 | [#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) | Feishu 通道配置被意外清空 | 无 fix PR |
| 🟡 低 | [#7419](https://github.com/agentscope-ai/QwenPaw/issues/7419) / [#7418](https://github.com/agentscope-ai/QwenPaw/issues/7418) | Step 手风琴折叠了整轮消息（含穿插文本） | 已关闭（invalid） |

安全合规类（今日新增，由维护者主动提交）：
- [#7430](https://github.com/agentscope-ai/QwenPaw/issues/7430) — Linux Tauri 依赖 glib 0.18.5 存在 unsoundness（GHSA-wrw7-89jp-8q8g）
- [#7428](https://github.com/agentscope-ai/QwenPaw/issues/7428) — 运行时捆绑了可选的 GPL Pylint 提供程序
- [#7426](https://github.com/agentscope-ai/QwenPaw/issues/7426) — Creator UI lockfile 存在 5 个已知漏洞（3 高 2 中）
- [#7424](https://github.com/agentscope-ai/QwenPaw/issues/7424) — 官网 lockfile 存在 86 个漏洞实例（18 高）

> 安全类均已对应提交 fix PR（[#7429](https://github.com/agentscope-ai/QwenPaw/pull/7429)、[#7427](https://github.com/agentscope-ai/QwenPaw/pull/7427)、[#7425](https://github.com/agentscope-ai/QwenPaw/pull/7425)）


## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 分析 |
|---|---|---|
| **主题化支持**（强调色/字体/间距配置） | [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | 用户目前通过手动编辑 .app 包内的 index.html 来实现自定义，每次更新都会丢失。该请求合理且有明确使用场景，但可能优先级不高 |
| **Plan Mode**（计划模式） | [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | 用户希望恢复 Plan Mode 以便预先查看模型计划。当前 snapshots 方案需要等模型执行错误后才能回滚，体验不佳 |
| **Claude Code harness 支持** | [#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396) | 用户询问路线图，源码中 claude 仍是占位符。社区有明确需求 |
| **DingTalk 卡片 card_auto_layout 开关** | [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) → PR [#7416](https://github.com/agentscope-ai/QwenPaw/pull/7416) | 后端已支持、仅缺 UI 暴露。**首次贡献者 kilowu 已提交完整实现**，预计下个版本可纳入 |
| **Skills workspace 预加载配置** | PR [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) 首次贡献者 wuyak | 引用 Claude Code subagents 的 preload 设计，待审查中 |
| **Session 级思维模式**（Off/Low/Medium/High） | PR [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | 跨设备同步 + 请求上下文优先级，功能完整度较高 |


## 7. 用户反馈摘要

**积极反馈：**
- 第三方 agent harness 功能（Codex/Qoder）获得了用户认可，被视为 "great addition"（#7396）
- 用户对 2.2.0-beta 的新功能（mission/goal mode、snapshots）表示知晓但认为 Plan Mode 更直观（#7405）

**负面反馈：**
- Beta 版本稳定性是当前最大痛点。#7420 作者报告"单次会话 5 次 stall"，且 2.1.x 未观察到。升级到 2.2.0-beta.1 后问题首次出现（#7420）
- 生产配置可靠性问题：用户 feng183043996 连续提交了 2 条与 Feishu 通道相关的问题（#7408 配置丢失、#7399 时间戳显示非 Bug），表明其在使用中遇到实际问题
- 主题定制困难：#7406 用户表示每次应用更新后手动修改都会丢失，现有 UI 锁定为单一橙色强调色

**使用场景：**
- 生产环境 cron 投递（#7408）
- 多 agent 并发会话（#7407）
- 浏览器 SDK 多页面分组（#7397）


## 8. 待处理积压

以下为长期未响应或存在卡点的重要事项：

| 项目 | 类型 | 创建时间 | 备注 |
|---|---|---|---|
| [#5097](https://github.com/agentscope-ai/QwenPaw/pull/5097) — Shield 图标居中修复 | PR | 2026-06-11 | **已搁置近 3 个月**，改动极小（CSS 定位），建议维护者尽快处理或关闭 |
| [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) — 瞬时 MCP 连接失败永久阻塞会话 | Issue | 2026-08-08 | 已关闭，但需确认修复是否进入 2.2.0 正式版 |
| [#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785) — Profile 分类硬编码官方 persona 文件，自定义 persona 无法切换（回归） | Issue | 2026-08-07 | 已关闭，需确认回归修复的发布版本 |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) — Skills 工作区预加载配置 | PR | 2026-08-20 | 首次贡献者 wuyak 的 PR 已等待 11 天，处于 Under Review，建议维护者推进 |
| [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) — 会话级思维模式管理 | PR | 2026-08-20 | 功能完整但待合并，是否进入 Beta.4 需明确 |

---

**编辑备注：** 今日安全合规工作量显著（4 个安全 Issue + 3 个对应修复 PR），表明项目正在系统性地补强供应链安全。建议关注 #7420 和 #7407 两条高严重度 Bug 的修复进展，以及 Beta.4 的发布时间。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-31

## 1. 今日速览

ZeroClaw 项目保持高度活跃。过去 24 小时内 Issues 更新达 50 条（47 条活跃、3 条关闭），PR 更新 50 条但均处于待合并状态，无新版本发布。当前工作焦点集中在 **RFC 架构决策**（runtime 会话管理、memory 生命周期解耦、附件架构统一）与 **安全/稳定性修复**（Daemon 栈溢出、权限边界、凭据轮换）。多个大型 PR（#10142 zerorelay 安全传输、#10412 会话所有权重构）仍在等待审查或作者行动，合并管道存在一定的积压迹象。整体项目健康度良好，但需关注待合并 PR 的处理效率。

## 2. 版本发布

过去 24 小时内无新版本发布。近期版本节奏请关注 Releases 页面。

## 3. 项目进展

过去 24 小时内 **无 PR 被合并**。当前 50 个开放 PR 全部处于待合并状态，其中多个关键 PR 已完成开发但等待审查或作者响应：

- **[#10142] feat(zerorelay): secure transport with blind relay and native mTLS enrollment** — 为远程 WSS 平面引入强制双向 mTLS，新增 `zerorelay` 盲转发组件，携带安全架构升级，**size:XL**，标记为 `needs-author-action`。
- **[#10412] feat(session): extract the atomic session-ownership claim into a shared SessionBackend contract** — 将会话所有权声明抽为统一的 `SessionBackend` trait（Compare-And-Set 语义），消除并发竞态，**size:XL**，同样等待作者响应。
- **[#9746] fix(tools): per-agent ownership scoping for session tools and discord_search** — 关闭 `sessions_*` 工具与 `discord_search` 的 check/use 竞态，增加后端稳定的作用域读写，**size:XL**，标记为 `distinguished contributor`。
- **[#9867] ci(labels): automate PR size labels** — 引入 `pr-size-labeler.yml` 自动计算 PR 的 `size:*` 标签，提升 PR 分类的自动化水平，等待 maintainer review。

> 多个大型 PR（尤其 #10142、#10412、#9746）已在队列中积压，建议维护者按优先级推进审查，避免核心架构改动长期滞留。

## 4. 社区热点

过去 24 小时内讨论度最高的议题集中在 **RFC 架构设计** 与 **安全策略**：

- **[#9487] RFC: Runtime-owned conversation sessions and transport surface adapters**（28 条评论）— 讨论 runtime 持有会话生命周期的方案，涉及多个 RFC 的归属边界（#9487/#9488/#9600），是当前架构演进的核心议题之一。
- **[#6850] RFC: Decouple memory lifecycle policy from storage backends**（23 条评论）— 社区持续关注 memory 生命周期策略与存储后端的解耦，避免 gateway/channel/backend 各自重复实现治理逻辑。
- **[#9488] RFC: Unified attachment architecture for web chat and channels**（22 条评论）— 修订至第 9 版，讨论统一附件架构，涉及 web 聊天与各 channel 的附件处理一致性。
- **[#6996] RFC: Granular sandbox policy — filesystem and network restrictions**（17 条评论）— 讨论 application 层路径准入与 OS 层 sandbox（Bubblewrap/Landlock/Seatbelt）的统一策略。

> **分析**：社区讨论高度集中于 **架构层面对齐** — 无论是会话所有权、memory 生命周期还是附件架构，核心诉求是建立清晰的边界契约，避免各 channel/gateway 重复实现，同时保持安全策略的前后一致。

## 5. Bug 与稳定性

过去 24 小时内报告的 Bug 按严重程度排列：

| 严重度 | Issue | 摘要 | 状态 |
|--------|-------|------|------|
| **S1 工作流阻断** | [#10230] | Daemon 启动/重载时 agent 初始化可致 Tokio worker 栈溢出（Quickstart 场景触发） | 待复现（`r:needs-repro`） |
| **S1 工作流阻断** | [#10061] | Provider 拒绝的图片仍留在会话历史中，导致后续每轮重放该图并污染上下文 | 进行中，已有相关 PR #10088 修复附件保留逻辑 |
| **P1** | [#9965] | 并行 runtime 门控下，运行时写入的可执行测试夹具存在脆弱性 | 进行中 |
| **S2 功能降级** | [#10292] | ACP 会话工具无法列出或查看 Code 会话（`sessions_list` 遗漏最近会话） | 进行中，PR #9746 涉及此路径 |
| **S2 功能降级** | [#9905] | Discord 音频转写管理器未绑定到活跃 agent 的 transcription_provider | 进行中 |
| **P1** | [#9654] | 真实的 operator 拒绝只以三个词到达模型且无语义，模型自行编造原因 | 进行中，与 #9642/#9423 同路径 |
| **P1** | [#9899] | `bitmaps 3.2.1` 未维护公告（RUSTSEC-2026-0247）导致 `cargo deny` 失败 | 受阻塞（tracker） |

> **关键观察**：图片附件生命周期问题（#10061）与 ACP 会话可见性问题（#10292）均有对应 fix PR 在途，但尚未合并。建议优先推进 #10088 和 #9746 的 review/merge 进程。

## 6. 功能请求与路线图信号

- **RFC 密集期**：当前有 **10+ 个开放 RFC** 等待 maintainer 决策（见 #9487、#6850、#9488、#6996、#8396、#9103、#6909、#7822、#9975、#9330 等）。其中 **#8692 Maintainer decision queue** 跟踪器在协调这些决策的排期，但 14 条评论和 30+ 天的跨度表明积压未明显缓解。
- **Session/所有权架构调整**：多个 RFC（#9487、#10412 对应实现、#9746）指向 **会话所有权与边界统一** 的方向，建议合并后统一验证这些改动对 channel/代理编排的兼容性。
- **合规与本地化**：#9972 跟踪器要求清理用户可见的硬编码输出至 Fluent/本地化边界；#10118 跟踪 Rust 反模式清理（307 个候选） — 两项均显式影响代码质量，且涉及大量文件，可作为下一版本的清理重点。
- **新功能建议**：
  - [#5287] 定义紧凑型 `local_small` 运行时配置与 prompt 预算契约 — 收到 **2 个 👍**，反映本地模型用户对 prompt 膨胀和系统指令泄漏的真实痛点。
  - [#10167] 为终端 multiplexer 暴露厂商中立的 agent 生命周期导出 — 核心是避免 ZeroClaw 与特定终端产品的耦合。
  - [#10050] 增加 gateway 路由实现「不经 agent turn 的原样消息发送」 — 补齐 gateway 47 个 `/api/*` 路径中的能力缺口。

> **结论**：项目正在经历一次 **架构契约收敛** 的关键时期，但大量 RFC 集中在少数维护者决策点，容易成为瓶颈。建议将已接受的 RFC 尽快转为实现任务，释放决策队列压力。

## 7. 用户反馈摘要

- **本地模型用户痛点**（#5287）：一位用户反馈使用本地模型时 prompt 膨胀严重，且系统指令可能泄漏到用户可见输出中 — 社区以 👍 表达认同，但该问题 4 月提出至今仍为 `in-progress`，时长已近 5 个月。
- **运营商/拒绝语义问题**（#9654）：用户指出真实的人工拒绝（如 CLI 或 channel 中回答「否」）最终只以三个无语义的词到达模型，模型随后自行编造拒绝原因 — 暴露了会话上下文中操作员决策信息丢失的问题，直接影响安全关键场景的可信度。
- **配置与诊断透明度**（#8650）：ZeroCode 在日志诊断失败时无法向用户展示实际日志路径，用户需要手工发现 `turn_...` 相关文件 — 属于低严重度的易用性反馈，但会显著影响故障排查效率。
- **Discord 转写问题**（#9905）：Discord 音频转写管理在运行期未被绑定到 agent 后端的 `transcription_provider`，导致转写功能静默失效 — 属于典型的「配置好但未接线」问题。

## 8. 待处理积压

以下为长期未解决或等待关键行动的重要事项，建议维护者优先关注：

| 项目 | 提出时间 | 状态 | 说明 |
|------|---------|------|------|
| **#9887（RFC 决策队列）** | 2026-07-04 | 开放中 | Maintainer 决策排期跟踪器，已有 30+ 天未闭合，多项 RFC 等待其排期 |
| **#5287（local_small profile）** | 2026-04-04 | `in-progress` | 提出近 5 个月，有 👍 信号，但未见对应 PR |
| **#9527（Rust 1.98.0 工具链升级）** | 2026-07-29 | 等待作者行动 | 工具链升级是基础性维护，建议尽快处理避免影响后续 PR 的 CI 基线 |
| **[#10142] zerorelay 安全传输 PR** | 2026-08-19 | `needs-author-action` | 大型安全架构改动（XL），长时间未获得 author 响应会阻塞安全路线图 |
| **#9899（bitmaps 安全公告 waiver）** | 2026-08-10 | `blocked` | 安全 CI 持续失败，依赖 Matrix SDK dev-dependencies 间接引入，需要上游协调或本地缓解 |
| **#9419（provider 凭据轮换）** | 2026-07-26 | `do-not-merge` | 涉及多种 provider（OpenAI/Anthropic/Router）的凭据轮换，安全性影响大，但已标记 do-not-merge，需要明确阻塞原因并给出下一步 |

---

*数据来源：ZeroClaw GitHub 仓库，统计窗口为 2026-08-30 至 2026-08-31。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*