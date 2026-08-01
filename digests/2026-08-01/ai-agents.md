# OpenClaw 生态日报 2026-08-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-01 02:56 UTC

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

# OpenClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

OpenClaw 项目近期保持高活跃度，过去 24 小时内有 500 条 Issue 更新（其中 462 条新开/活跃、38 条关闭）和 500 条 PR 更新（374 条待合并、126 条已合并/关闭）。今日无新版本发布。需重点关注的是，目前有多个 P0/P1 级严重稳定性问题处于“需维护者决策”状态（clawsweeper:needs-maintainer-review），主要集中在会话状态损坏、消息丢失、内存泄漏和崩溃循环方面。悬而未决时间较长的功能请求（如 Linux/Windows 桌面应用）也有较高社区呼声。整体来看，项目处于高迭代发布节奏，但需警惕大量稳定性问题长期未获得修复方案。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

过去 24 小时共有 126 个 PR 被合并或关闭，以下为本日完成的关键改进：

- **[PR #117173] Control UI 画布租约生命周期修复** (已关闭) — 修复了画布能力续租的两个生命周期缺陷：过期计时器回调和同步重连问题。该修复由维护者 steipete 提交，等级评定为"🦞 diamond lobster"，表示其对 UI 稳定性有显著改进。
- **[PR #117083] Gateway 就绪后后台任务让路** (已关闭) — 持有就绪中立的后台任务，在网关公开启动返回后 500ms 释放，为探测器和客户端留出初始 I/O 窗口，缓解受限 CPU 环境下的启动竞争问题。

- **[PR #117179] 修复 Google Live 实时转录无限增长** (开放中) — 解决 Google Live 会话在 Provider 未发送协议 `finished` 标记时，无限保留并复制进行中转录的问题，为 Google Provider 设立独立的 256 KiB 上限。

- **[PR #117177] 修复 exec 会话恢复时保留已批准命令输出** (开放中) — 关闭 #41152，保留了原贡献者 omarshahine 的提交（因源分支无法编辑），确保会话恢复时已批准命令的输出不丢失。

- **[PR #117152] 修复 Claude CLI ask_user 提示送达问题** (开放中) — 解决使用 Claude CLI 后端的代理卡在 `ask_user` 等待回复且问题未推送至原频道的问题。

- **[PR #116934] 修复 Matrix 崩溃停机期间消息丢失** (开放中) — 解决 Matrix 在硬重启后持久化较新的 `/sync` 游标，导致未完成路由的事件被抑制或丢失的问题。

- **[PR #116666] 防止 cron 饱和饿死 hook 分发** (开放中) — 修复 cron 占满全部 8 个内部代理槽位时 `/hooks/agent` 请求 15 秒准入超时返回 503 的问题。

## 4. 社区热点

今日最受关注的 Issue 和 PR：

- **[Issue #75] Linux/Windows Clawdbot Apps** (116 条评论，80 👍) — 用户 steipete 在 1 月提出的功能请求，希望为 Linux 和 Windows 提供与 macOS 功能集类似的桌面应用。该 Issue 获得 80 个赞，是今日讨论最热烈的话题，显示社区对跨平台桌面客户端的强烈需求。

- **[Issue #91588] Gateway 内存泄漏：RSS 从 350MB 涨至 15.5GB** (23 条评论) — P0 级严重问题，网关进程在 2-3 天内内存从约 350MB 增长至 15.5GB，触发 OOM 被杀后导致无限重启循环。该问题被标记为"clawsweeper-recovery-stuck"，即修复受阻需人工介入。

- **[Issue #116201] Realtime voice 状态无限增长** (18 条评论) — 维护者 vincentkoc 报告，实时语音会话在 Provider 缓慢/停滞时，会保留被取代的咨询工作和大型 Provider 帧，无硬性所有权边界。与此相关的修复 PR #117179 已提交。

- **[Issue #10659] Masked Secrets：防止 Agent 访问原始 API 密钥** (15 条评论，4 👍) — 安全功能请求，希望 Agent 能"使用"但不能"看到"API 密钥，防止提示注入攻击提取凭证。

## 5. Bug 与稳定性

按严重程度排列今日活跃的 Bug：

**P0 级：**
- **[Issue #91588] Gateway 内存泄漏至 OOM 崩溃** — RSS 从 350MB 增长至 15.5GB 导致反复崩溃，严重性最高，目前无修复 PR，被标记为 recovery-stuck。

**P1 级：**
- **[Issue #86519] Telegram 重复回复回归** — 5.20 更新后 Agent 在 Telegram 上重复发送相同回复 2-10 次，5.22 仅部分缓解。无修复 PR。
- **[Issue #114137] 消息生成但未送达** — 会话显示完成但最终文本从未推送到频道。
- **[Issue #115908] 会话转录投影死循环** — 持续写入下主线程阻塞数十秒，所有频道传输停滞。
- **[Issue #51396] clearUnboundScopes 无条件剥离操作者权限** — 3.13 回归，破坏非本地 token 认证客户端的 chat.send。已有修复合入分支 (linked-pr-open)。
- **[Issue #114255] 重启导致会话卡死 + Telegram 永久重试** — 网关重启时 Agent 运行中，会话卡在 `running` 状态，消息永久重试。
- **[Issue #116391] WebChat 会话历史每日消失** (已关闭) — 每天午夜后首条消息导致前日对话不可访问。

**P2 级：**
- **[Issue #51429] 工作路径被硬编码为 /Users/wangtao** — 用户安装后发现 OpenClaw 创建了 `/Users/wangtao` 文件夹并设为工作区，疑似开发者的硬编码路径被合并发布。
- **[Issue #97616] 子进程僵尸累积** — hook/tool 执行泄漏未回收子进程，导致运行时性能下降。

## 6. 功能请求与路线图信号

今日社区提出的功能需求及可能的路线图信号：

- **[Issue #75] Linux/Windows 桌面应用** — 获得 80 👍 的最高关注，是无障碍平台覆盖的核心缺口，但暂无具体 PR 关联，预计进入路线图的优先级较高。

- **[Issue #7707] 记忆来源信任标记** — 防止通过不可信内容（网页、第三方消息）进行记忆中毒攻击。与 #10659 同属安全强化方向，信号明确。

- **[Issue #10659] Masked Secrets** — API 密钥掩码系统，与如今主流的 secret redaction 趋势一致。已有 PR #117167 关闭了类似的 Google CLI OAuth 凭证抓取功能，说明安全边界收紧正在推进中。

- **[Issue #90916] 主题会话族** — 多命名上下文通道模型，一个助手可拥有隔离的上下文通道，共享显式记忆。与当前会话系统架构方向相近。

- **[PR #117172] 解除仅移除依赖的 PR 阻塞** — CI 流程优化，要求保留 `dependency-only removals` 不被阻塞。

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中提炼的用户真实反馈：

- **平台覆盖缺失（Linux/Windows）**：用户 steipete 明确表示已有 macOS/iOS/Android 应用，"Linux and Windows are missing"——这是对桌面端覆盖不全的直接诉求。

- **配置被破坏的沮丧情绪**：Issue #51429 的用户以"Apparently some wangtao hardcode his working space path into the code and somebody merged his code and published"表达了对代码审查和发布流程的质疑，反映用户对质量控制环节的不满。

- **更新引入回归的担忧**：Issue #86519 显示 5.20 更新引入了 Telegram 重复回复回归，且 5.22 仅部分修复。用户 w3-design1 称"Upgrading to 2026.5.22 reduced severity (~2-3x vs 8-10x) but did not fully fix"。

- **WebChat 使用场景的痛点**：Issue #116391 表明每日会话历史丢失问题严重影响跨日连续工作流，用户被迫重复解释上下文。

- **cron 任务静默失败**：Issue #87109 中用户 Tanklive 报告内存压力下 cron 任务无输出、无推送、无错误上报，对可靠性的信任产生负面影响。

## 8. 待处理积压

以下为长期未获修复或响应的关键 Issue：

- **[Issue #91588] Gateway 内存泄漏 (P0, 创建于 6月9日)** — 本次日报最具影响的问题，50+ 天未获修复，且被标记为 recovery-stuck。链接
- **[Issue #75] Linux/Windows 桌面应用 (创建于 1月1日)** — 7 个月无实质进展，但社区需求强烈（80 👍）。链接
- **[Issue #86519] Telegram 重复回复 (创建于 5月25日)** — 2 个月未修复，5.22 部分缓解后问题仍然存在。链接
- **[Issue #10659] Masked Secrets (创建于 2月6日)** — 6 个月未实现，安全重量的功能请求。链接
- **[Issue #46786] tools.elevated.enabled 破坏 exec 路由 (创建于 3月15日)** — 启用提权后所有 exec 调用都路由到错误主机，4 个多月未修复。
- **[Issue #53540] 大参数工具调用超时断开 (创建于 3月24日)** — 参数生成延迟超时导致 "Network connection lost"，4 个多月未处理。

---

*本日报由 AI 自动生成，数据来源于 OpenClaw 公开 GitHub 仓库。*

---

## 横向生态对比

# 2026-08-01 个人 AI 助手开源生态横向分析报告

**报告日期：** 2026-08-01
**数据窗口：** 2026-07-31 ~ 2026-08-01（24小时）
**覆盖项目：** OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, ZeptoClaw, ZeroClaw

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高迭代、高关注度的密集成长期**。以 OpenClaw 为首的项目群保持了极高的代码活动量（日 PR 更新 500+），大量 P0/P1 级稳定性问题（内存泄漏、会话状态损坏）悬而未决，反映出**功能扩张速度已超越质量巩固速度**。与此同时，安全加固（Masked Secrets、密钥脱敏、沙箱逃逸修复）和架构重构（IronClaw "Reborn"、ZeroClaw Hindsight、NanoBot SQLite 迁移）成为多项目同步推进的主线，表明生态正从"能用"向"可靠、安全、可扩展"过渡。社区对跨平台覆盖（Linux/Windows 桌面端）、会话级模型切换、运行时灵活性（无 Docker/K8s）的需求持续升温——用户体验的精细化成为下一阶段竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（462新开/活跃） | 500（374待合并） | 126 | 无 | ⚠️ 高活跃但 P0/P1 积压严重，50+ 天未修复 |
| **NanoBot** | 4（1新开/3活跃） | 13（7待合并） | 6 | 无 | ✅ 健康，Bug 当日闭环，架构升级推进中 |
| **Hermes Agent** | 50（48新开/活跃） | 50（42待合并） | 8 | 无 | ⚠️ 活跃但更新器/Bug 集中爆发，修复周期长 |
| **PicoClaw** | 2 | 3（全待合并） | 0 | 无 | ⚠️ 代码合并停滞，3 个 PR 超 4 周未合入 |
| **NanoClaw** | 8 | 10（6待处理） | 4 | 无（v2.1.54 预告） | ⚠️ 健康发展但运行时灵活性路线未明确 |
| **NullClaw** | 0 | 1 | 0 | 无 | 🟡 温和活跃，PR 积压风险初现 |
| **IronClaw** | 37 | 50 | ~10+（WS1.2/1.3 已合并） | 无 | ✅ 密集重构期，核心贡献者强力推进 |
| **LobsterAI** | 0（4 个 stale 关闭） | 11（全部合并/关闭） | 11（5 个实质改动） | 2026.7.31 已进入流程 | ✅ 高质量迭代，Bug 当日修复闭环 |
| **TinyClaw** | 0 | 0 | 0 | 无 | 🟡 无活动 |
| **Moltis** | 2 | 6 | 2 | 无 | ✅ 中等活跃，安全加固获外部贡献 |
| **CoPaw (QwenPaw)** | 18 | 38（20+ 修复待合并） | 11 | 无（2.0.1 为最新） | ⚠️ "修复洪峰"期，P0 修复在途未落地 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | 🟡 无活动 |
| **ZeroClaw** | 50 | 50（39待合并） | 1 关闭 | 无 | ⚠️ 架构演进投入大，但 PR 积压与作者响应滞后 |

**整体判断**：生态呈现**两极分化**——头部项目（OpenClaw、Hermes、ZeroClaw）活跃但积压严重；中型项目（NanoBot、LobsterAI、Moltis）迭代节奏健康；尾部项目（TinyClaw、ZeptoClaw）陷入停滞。IronClaw 与 LobsterAI 展示了最佳的健康度—活跃度平衡。

---

## 3. OpenClaw 在生态中的定位

**优势：**
- **绝对的用户规模与社区基数**：日 500 Issue/500 PR 更新量是第二名（Hermes/ZeroClaw 各 50 条）的 10 倍，116 条评论的 Linux/Windows 桌面端请求获 80 👍，社区声量无出其右
- **多通道覆盖最广**：Telegram、Matrix、WebChat、Google Live、Claude CLI 等均有专门维护，生态适配最完整
- **迭代速度领先**：日合并 126 个 PR，功能迭代节奏远超同类项目

**技术路线差异：**
- 以 **"claw" 多通道网关 + Agent 核心**为架构中心，强调会话状态管理、画布租约、后台任务调度等基础设施层的精细控制
- 与 IronClaw 的 "Reborn" 去重中心化架构、ZeroClaw 的 Wasm-First 插件化路线形成鲜明对比

**核心短板：**
- **稳定性问题积压严重**：P0 级 Gateway 内存泄漏 50+ 天未修复（RSS 从 350MB 涨至 15.5GB），多个 P1 消息丢失/重复问题长期无 PR
- **维护者响应瓶颈**：大量问题处于 `clawsweeper:needs-maintainer-review`，修复 PR 排队等待审查
- **跨平台覆盖滞后**：Linux/Windows 桌面应用 7 个月无实质进展，而 NanoClaw 已有 Apple Container 支持、CoPaw 已有 Windows 桌面端

**矩阵对比：**

| 维度 | OpenClaw | Hermes Agent | IronClaw | CoPaw | ZeroClaw |
|---|---|---|---|---|---|
| 社区规模 | ★★★★★（500/500） | ★★★★（50/50） | ★★★★（37/50） | ★★★★（18/38） | ★★★★（50/50） |
| 修复速度 | ★★（P0 50+ 天未修） | ★★★（当日多 PR 跟进） | ★★★★（贡献者密集修复） | ★★★（P0 在途） | ★★★（部分当日关闭） |
| 架构创新 | ★★★（稳定优先） | ★★★（代码分解推进） | ★★★★★（Reborn 重构） | ★★★ | ★★★★★（Wasm-First） |
| 安全投入 | ★★★（Masked Secrets 提议） | ★★★（2 条安全修复在途） | ★★★★（P0 安全 Bug 受关注） | ★★★ | ★★★★★（KeySource 抽象、Landlock 修复） |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **跨平台桌面端覆盖** | OpenClaw（#75）、NanoClaw（#1732）、CoPaw（#6587）、Hermes（#74836/#75598） | Linux/Windows 桌面应用缺失（80 👍）、无 Docker 原生模式、桌面端命名与稳定性 |
| **安全与数据隔离** | OpenClaw（#10659 Masked Secrets）、Hermes（#36645 沙箱逃逸）、ZeroClaw（KeySource/泄漏检测）、Moltis（节点配对签名）、IronClaw（跨用户内存泄漏）、CoPaw（agent.json 损坏） | API 密钥对 Agent 不可见、沙箱完整性、配置文件损坏防护、跨用户数据隔离 |
| **会话/记忆架构解耦** | OpenClaw（会话状态损坏）、ZeroClaw（#9048 历史/长期记忆分离）、LobsterAI（缓存命中率回归）、CoPaw（Dream 记忆丢失）、Hermes（会话搜索错配） | 上下文生命周期管理、前缀缓存效率、记忆持久化一致性 |
| **Provider 生态扩展** | NullClaw（grok-cli）、NanoBot（DeepSeek Responses）、CoPaw（与 agentscope 兼容性）、Hermes（xAI 会话损坏） | CLI 代理型 Provider 模式、Responses API 适配、新模型兼容性验证 |
| **消息投递可靠性** | OpenClaw（Telegram 重复、消息丢失）、Hermes（Telegram 截断）、NanoBot（微信 session 过期）、CoPaw（微信 cron 静默失败） | 通道适配层的消息完整性、去重、流式编辑正确性 |
| **WebUI 体验精细化** | OpenClaw（画布租约）、NanoBot（Quick Chat/滚动）、LobsterAI（侧边栏/骨架屏）、CoPaw（全局热键）、PicoClaw（CPU 占用） | 加载状态、快捷键发现、模型切换、会话列表性能 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能多通道个人助手（Telegram/Matrix/WebChat/语音） | 技术爱好者、播客/内容创作者 | Claw 多通道网关 + 画布租约 + 后台任务调度；单体仓库，P0/P1 修复积压 |
| **NanoBot** | 轻量级多通道 Bot（微信/Slack/WebUI），Python 为主 | 个人开发者、中小团队 | Python 轻量架构；SQLite 会话存储（今日完成 JSONL→SQLite 迁移）；WebUI 快速迭代 |
| **Hermes Agent** | 企业级网关、桌面端优先、插件生态 | 中型团队、需要桌面端的企业用户 | 多配置文件 + 独立网关架构；更新器跨平台可靠性问题集中；god-file 重构推进中 |
| **IronClaw** | 大规模自主智能体（LLM 作为操作系统入口） | 研究机构、高端开发者 | "Reborn" 架构重构（WS 1.x 系列）；使用 Rust；PI-Harness 采用计划推动性能优化 |
| **CoPaw (QwenPaw)** | 中文生态 + 多通道（飞书/微信）+ 桌面端 | 中文开发者、中小团队（与 AgentScope 生态绑定） | 基于 agentscope 框架；Python；上游依赖兼容风险是主要短板 |
| **ZeroClaw** | 高性能、安全敏感、Wasm 插件化 | 安全研究人员、性能敏感团队 | Wasm-First 插件运行时 + Rust 核心；KeySource 密钥抽象；HyperLiquid 触达（Hindsight 内存栈） |
| **NanoClaw** | 极简轻量、安全隔离（容器优先） | 隐私敏感用户、极简主义者 | Docker/容器隔离为安全优势（但也是灵活性的短板）；Apple Container 推进中；Go 语言 |
| **LobsterAI** | OpenClaw 的分支优化版（缓存/协作） | 已有 OpenClaw 部署但需要成本优化的团队 | 专注于缓存命中率优化与 UI 细节打磨；与 OpenClaw 保持 API 兼容 |
| **Moltis** | 去中心化协作（Nostr/NIP-29） | 去中心化/联邦生态爱好者 | Nostr 协议集成、节点配对机制；Zvec 内存后端实验 |
| **NullClaw** | CLI Provider 适配桥 | 已有本地 CLI 工具的开发者 | spawn-per-request 的 CLI 代理模式（codex-cli/gemini-cli/claude-cli/grok-cli） |
| **PicoClaw** | 嵌入式/资源受限环境 AI 助手 | 嵌入式开发者、RISC-V 爱好者 | Sipeed 硬件生态；Go 构建；DeltaChat/Simplex 通道 |

---

## 6. 社区热度与成熟度分层

```
【第一梯队：高迭代、大规模社区】
OpenClaw（500/500）——生态标杆，但 P0 积压风险最高
Hermes Agent（50/50）——快速修复期，更新器跨平台回归集中
ZeroClaw（50/50）——架构演进活跃，PR 积压但方向清晰

【第二梯队：健康迭代、质量巩固】
IronClaw（37/50）——重构密集推进，核心贡献者稳定
CoPaw（18/38）——修复洪峰期，大量在途待合入
LobsterAI（0/11 全部合并）——当日修复闭环最佳实践
NanoBot（4/13）——小而美，Bug 响应速度最快

【第三梯队：温和活跃/需关注】
NanoClaw（8/10）——有明确方向但长期决策（无 Docker）未表态
Moltis（2/6）——安全加固获外部贡献，方向正确
PicoClaw（2/3）——合并停滞超过一个月，需加速评审

【第四梯队：停滞】
NullClaw（0/1）——单 PR 等待首次响应
TinyClaw（0/0）
ZeptoClaw（0/0）
```

**成熟度判断**：LobsterAI 展现出最成熟的**质量闭环机制**（当日发现—当日修复—当日合入）；NanoBot 展示出最佳的**Bug 响应速度**（Issue 当日即有合并修复）；OpenClaw 虽规模领先但**质量巩固能力最弱**，长期 P0 积压已影响用户信任（"更新引入回归"的抱怨频现）。

---

## 7. 值得关注的趋势信号

### 信号一：生态正从"功能竞赛"转向"稳定性与信任构建"
OpenClaw 的 P0 内存泄漏 50+ 天未修复、CoPaw 的 `agent.json` 损坏导致"complete system failure"、Hermes 的更新机制跨平台回归——用户对"更新后出问题"的容忍度正在降低（CoPaw 用户称"系统坏了"、Hermes 用户表示"hermes update 无法修复"）。**可靠性已成为用户选择项目的核心考量**，而不仅限于功能覆盖。开发者选型时应将 P0/P1 修复周期作为关键评估指标。

### 信号二：会话级模型切换成为标配需求
NanoBot 的 #5198（无法在特定会话切换模型）与 LobsterAI 的缓存命中率修复（-100% → ~57% 回归）共同指向同一诉求：**用户希望在同一实例内为不同会话灵活选择模型，且切换过程不损害上下文缓存效率**。这对多模型工作流的重要性将持续上升。

### 信号三：安全边界成为生产部署的硬门槛
ZeroClaw 的 KeySource 抽象、Moltis 的外部贡献者"不修好安全问题不敢用"表态、OpenClaw 的 Masked Secrets 请求、Hermes 的沙箱逃逸问题——**安全已是社区共识，而非加分项**。API 密钥对 Agent 不可见（Masked Secrets）、配置文件的防篡改、沙箱与工具可用性的平衡是三大核心方向。Moltis 的外部贡献者明确表示"信任门槛影响采用决策"。

### 信号四：CLI 代理型 Provider 模式成为新模型接入的快速通道
NullClaw 的 grok-cli PR 沿袭了 codex-cli/gemini-cli/claude-cli 的既有模式，NanoBot 的 DeepSeek Responses API 适配也是基于已有框架的增量扩展。**"本地 CLI 工具链复用"成为快速接入新模型的标准方式**，降低了 Provider 适配成本。

### 信号五：运行时灵活性决定部署场景上限
NanoClaw 的容器隔离优势在 K8s/受限环境中成为短板，用户明确要求"无 Docker 运行"；IronClaw 则通过架构重构推进多环境适配。**"是否支持 Kubernetes"与"是否可无容器化运行"正在成为企业用户选型的决策分水岭**。

### 信号六：消息投递可靠性是跨项目共同痛点的"隐形黑洞"
OpenClaw（Telegram 重复、消息丢失）、Hermes（流式截断、相册拆分）、NanoBot（微信 token 覆盖）、CoPaw（微信 cron 静默失败 + 44M token 消耗）——**通道适配层的消息完整性是"看似已解决、实则持续出问题"的领域**。这提醒开发者：评估项目时，通道适配器的成熟度比功能性覆盖更关键。

### 信号七：记忆/上下文架构正在成为核心战场
ZeroClaw 的 Hindsight 7-PR 大型栈、OpenClaw 的画布租约修复、CoPaw 的 Dream 记忆修复、LobsterAI 的缓存命中率专项——**"AI 如何组织、压缩、持续使用上下文"正在从边缘问题升级为核心架构问题**。前缀缓存效率、会话/记忆分离、自动压缩策略直接影响长期运行的稳定性与经济性（token 成本）。

---

**总结**：个人 AI 助手开源生态正处于**从"功能驱动"转向"可靠性驱动"的关键转折期**。头部项目（OpenClaw）的规模优势正在被其积压的稳定性问题侵蚀，而中型项目（NanoBot、LobsterAI、Moltis）通过快速闭环赢得了信任。对于技术决策者，**建议优先评估项目的 P0/P1 修复周期、通道适配器成熟度与安全加固进度**，而非仅关注功能列表；对于开发者，**会话级模型切换、存储/记忆架构、和跨平台运行时是当前最具投入价值的技能方向**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-01

## 1. 今日速览

NanoBot 项目今日整体活跃度中等偏上。过去 24 小时内共有 4 条 Issue 更新和 13 条 PR 更新，其中 7 个 PR 待合并、6 个已合并/关闭，但无新版本发布。**微信频道 session 过期恢复机制**成为今日修复核心（Issue #5195 + PR #5196、#4223），同时 **DeepSeek Responses API 适配**（PR #5197）和 **SQLite 会话存储迁移**（PR #5173）体现了项目在 provider 集成与架构升级上的持续推进。项目中位数的 Bug（如 Termux 时区问题、Windows MIME 类型问题）均已有对应修复 PR 跟进，项目健康度良好。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 说明 |
|---|---|---|
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | **feat(session): migrate session storage from JSONL to SQLite** | 架构级变更 — 将运行时会话存储从 JSONL 迁移到 SQLite，首次启动时事务性导入旧数据，JSONL 文件保留为回滚备份。所有读写路径已切换到 SQLite，WebUI 会话列表与 Dream 修剪逻辑均通过统一管理接口运行。这是项目持久化层的重要升级，对并发与大规模会话场景将有明显收益。 |
| [#5196](https://github.com/HKUDS/nanobot/pull/5196) | **fix(weixin): recover refreshed state after session expiry** | 修复 Issue #5195 — 微信频道在 `errcode -14` 进入 60 分钟暂停后未能重新加载刷新后的 `account.json`，导致永续静默。该 PR 让暂停结束后自动拾取新 session 状态，同时被合并的 [#4223](https://github.com/HKUDS/nanobot/pull/4223)（作者：DreamShepherd2006）以更早的 PR 标识（#4223，6 月 6 日创建，7 月 31 日合并）做了类似修复，两者形成互补。 |
| [#5192](https://github.com/HKUDS/nanobot/pull/5192) | **fix(slack): scope channel thread openers to their own session** | 修复 Slack 频道消息开启的线程在首个回复前共享频道级会话的问题，使各线程从第一条消息起即拥有独立会话。 |
| [#5193](https://github.com/HKUDS/nanobot/pull/5193) | **fix(webui): preserve user scroll ownership near tail** | 修复 WebUI 上下文中用户主动向上滚动浏览时，系统自动跟随新消息导致滚动位置被抢占的问题。 |
| [#5189](https://github.com/HKUDS/nanobot/pull/5189) | **fix(config): install timezone data on all platforms** | 在所有平台安装 `tzdata` 作为标准库 `zoneinfo` 的 fallback，修复 Termux 及其他无系统时区数据库的 Linux 环境（对应 Issue #5187）。 |
| [#5195](https://github.com/HKUDS/nanobot/issues/5195) | 对应的修复 PR [#5196](https://github.com/HKUDS/nanobot/pull/5196) 和 [#4223](https://github.com/HKUDS/nanobot/pull/4223) | [#5196](https://github.com/HKUDS/nanobot/pull/5196) 已合并；[#4223](https://github.com/HKUDS/nanobot/pull/4223) 也已合并，两者均处理了**微信频道 session 过期后重新扫码登录，旧 token 覆盖新 token** 的问题 |

---

## 4. 社区热点

### 最活跃讨论：Issue #5195 — 微信频道 Re-scan QR 导致旧 token 覆盖新 token

- **链接**: [Issue #5195](https://github.com/HKUDS/nanobot/issues/5195)
- **评论数**: 2 | 创建: 2026-07-31
- **状态**: 已关闭（同日即有修复 PR）

**分析**: 用户在 WebUI 中重新扫码登录微信后，新启动的 channel 实例首次 `getupdates` 即返回 `errcode -14`（session 过期），随后被暂停 60 分钟。根因是 `stop()` 中旧 token 被重新写入，覆盖了刚刷新的新 token。该问题直接导致微信频道长时间静默不可用，严重影响实际使用体验。

**社区反应**: 该 Issue 当天即有修复 PR（#5196）提交并合并，维护者响应迅速。该问题同时暴露了微信频道在 session 生命周期管理上的隐患——`account.json` 刷新文件与内存态之间的同步逻辑存在竞态，与更早的 PR #4223（等待月余后合并）反映了同一根因。

### 值得关注：PR #5197 — DeepSeek Responses API 适配

- **链接**: [PR #5197](https://github.com/HKUDS/nanobot/pull/5197)
- **待合并** (OPEN)
- **作者**: chengyongru

**分析**: 将 `deepseek-v4-flash` 路由到 DeepSeek 原生 Responses API，同时保留其他模型走 Chat Completions。该 PR 复用了现有 Responses 请求框架、本地会话回放、流式与函数工具机制，并保留 DeepSeek 明文推理内容。这是继 `deepseek-v4-flash` 发布后社区期待已久的原生 API 适配，**吸引了较多关注**（👍为 0，说明是功能导向而非社区话题导向）。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 **P1** | [#5195](https://github.com/HKUDS/nanobot/issues/5195) | **微信频道重新扫码登录后旧 token 覆盖新 token，频道静默不可用**（暂停 60 分钟） | ✅ 已有 Fix PR（[#5196](https://github.com/HKUDS/nanobot/pull/5196) 已合并） |
| 🟠 **P1** | —（PR 阶段） | **持久化 session summary 字段缺失/损坏导致 `AutoCompact.prepare_session()` 崩溃**（PR [#5201](https://github.com/HKUDS/nanobot/pull/5201)） | ✅ 修复 PR 待合并 |
| 🟠 **P1** | —（PR 阶段） | **exec 会话中 `wait_for` 目标被响应截断导致空白等待**（PR [#5200](https://github.com/HKUDS/nanobot/pull/5200)） | ✅ 修复 PR 待合并 |
| 🟡 **P2** | [#5190](https://github.com/HKUDS/nanobot/issues/5190) | **Windows 平台 JS 模块加载失败** — 服务器以 `text/plain` MIME 类型响应 `.js` 文件（Windows 注册表覆盖 Python 内置 mimetypes） | ✅ 修复 PR 待合并（[#5191](https://github.com/HKUDS/nanobot/pull/5191)） |
| 🟢 **P3** | [#5187](https://github.com/HKUDS/nanobot/issues/5187) | **Termux 环境因缺少系统时区数据无法加载配置** | ✅ 已关闭（PR [#5189](https://github.com/HKUDS/nanobot/pull/5189) 已合并） |

### 稳定性观察

- 微信频道 session 管理连续出现两个关联 Bug（#5195 + 旧 #4223），表明**该模块的并发/状态同步逻辑需要更系统的测试覆盖**
- SQLite 迁移（#5173）为项目最大架构变更之一，后续需要密切关注数据迁移与回滚的稳定性

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 分析 |
|---|---|---|
| **DeepSeek Responses API 原生适配** | [PR #5197](https://github.com/HKUDS/nanobot/pull/5197)（待合并） | 表明项目在快速跟进最新模型 API 形态（Responses 范式），Preview 模式下对 `deepseek-v4-flash` 的原生支持值得期待 |
| **Quick Chat / Temporary Chat** | [PR #5184](https://github.com/HKUDS/nanobot/pull/5184)（待合并） | WebUI 新增两种对话形态：Persistent Quick Chat 复用现有会话/线程机制，Temporary Chat（临时会话）仅保留内存历史。该 PR 还统一了侧边栏选中高亮逻辑，属于 WebUI 体验增强方向的重要信号 |
| **JSONL → SQLite 迁移完成** | [PR #5173](https://github.com/HKUDS/nanobot/pull/5173)（已合并） | 架构升级完成，后续可预期更高效的会话检索、批量操作与数据管理能力 |
| **会话级模型切换** | [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)（OPEN） | 用户要求能在**不重配整个实例**的情况下切换特定会话的模型。`/model` 命令按 ID 指定模型时似乎未生效。这是一个高频需求（对比各类 SaaS AI 的 UI），若纳入路线图将显著提升可用性 |
| **WebUI 会话列表性能优化** | [PR #5194](https://github.com/HKUDS/nanobot/pull/5194)（待合并） | 通过复用 workspace 快照与缓存索引减少 `/api/sessions` 请求开销，暗示大规模的会话列表已开始影响前端性能 |

---

## 7. 用户反馈摘要

### 真实痛点

1. **微信频道静默不可用（Issue #5195）**
   - 用户 amkile 详细描述了重新扫码登录后频道立即收到 `errcode -14` 并暂停 60 分钟，造成长时间不可用。该问题直接**阻断微信端用户的使用**，且因 `_pause_session()` 机制导致恢复周期很长。

2. **WebUI 无法切换当前会话模型（Issue #5198）**
   - 用户 whisperity 指出 Nanobot 始终以默认模型运行，其他模型仅作 fallback。WebUI 中点击模型 blip 无效，`/model <ID>` 命令似乎也不生效。用户对比各大 SaaS AI 的 UI 表达了对该功能的**明确期待**。

3. **Windows 用户无法正常加载 WebUI（Issue #5190）**
   - 同一个用户 amkile 报告了 Windows 上 JS 文件因注册表 MIME 类型配置（`text/plain`）导致模块加载失败的 Bug，直接阻塞 WebUI 使用，影响面覆盖所有 Windows 用户。

4. **Termux 用户环境兼容性（Issue #5187）**
   - 用户 CVFA1 在 Termux（Android 终端）中运行 Nanobot 因时区数据缺失而失败。虽然是"无聊时测试"的场景，但反映了**项目对最小化/非标准 Linux 环境的兼容性关注不足**。

### 满意/积极性信号

- Issue #5195 当天报当天修，维护者的快速响应体现了项目运营的健康度
- PR #4223（6 月创建）今日终于合并，说明**长尾 PR 会得到最终处理**，但耗时较久（近 2 个月）

### 反馈模式

- **高频关键词**：session 管理（微信/exec/持久化）、WebUI 交互（模型切换/滚动/会话列表）、平台兼容性（Windows/Termux）
- **用户画像**：报告者多为技术用户，能提供详细的环境信息和复现步骤

---

## 8. 待处理积压

### 需关注的重要开放 Issue

| Issue | 创建时间 | 描述 | 建议 |
|---|---|---|---|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 2026-07-31 | **无法在特定会话中切换模型**（除非重配整个实例）。这是高频需求信号，但截至目前 0 评论、无 PR 认领 | ⚠️ 建议维护者在本周内至少确认该需求是否纳入路线图，并明确 `/model` 命令的正确用法 |
| [#5190](https://github.com/HKUDS/nanobot/issues/5190) | 2026-07-31 | Windows 静态资源 MIME 类型错误，修复 PR（[#5191](https://github.com/HKUDS/nanobot/pull/5191)）已提交但**仍在待合并** | 🟡 对应修复 PR 已就绪，请尽快 review 合并，该 Bug 直接阻塞 Windows 用户 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | 2026-07-30 | **Quick Chat + Temporary Chat** 功能 PR | 🟡 功能面较大，涉及 WebUI 导航和状态管理，建议安排充分 review |

---

## 总结

NanoBot 今日处于**稳定的迭代节奏**：Bug 修复响应速度快（微信 session 问题当日闭环）、架构升级持续推进（SQLite 迁移完成）、新 provider 适配进入 preview（DeepSeek Responses）。社区反馈集中在**会话级模型切换**（#5198）这一高频需求上，建议维护者短期内给出明确回应。整体项目健康度良好，技术债在有序清理中。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-01

## 今日速览

项目今日保持高活跃度，过去24小时内 Issues 更新50条（新开/活跃48条，关闭2条），PR 更新50条（待合并42条，已合并/关闭8条），无新版本发布。今日社区讨论集中在几个高热度 Bug 上——xAI 图像解析导致的会话永久性损坏、macOS 更新机制被残留文件阻断、Telegram 流式消息截断等，均为实际用户体验痛点。值得关注的是，一批桌面端更新链路修复 PR 集中涌现（至少3条针对更新器问题），反映维护者对该模块的重视；此外今日提交了大量代码分解（god-file decomposition）相关的重构 PR，显示项目正推进架构整洁度工作。整体来看，项目维护活跃、修复节奏快，但部分 Bug 的修复周期仍较长。

## 版本发布

今日无新版本发布。

## 项目进展

今日无 PR 被合并（所有更新中有8条 PR 状态变更为已合并/关闭，但数据集中未明确显示被合并的具体 PR 编号；已关闭的2条 Issue 中 #75768 标记为 `sweeper:implemented-on-main`，说明对应修复已落地到主分支）。以下为最近更新且与已关闭 Issue 直接关联的 PR：

- **[PR #74909] fix(desktop): skip hermes-setup binary on macOS/Linux updater path**（更新于 2026-08-01）— 直接修复 Issue #74836（macOS 更新永久性损坏问题）。该 PR 解决 `resolveUpdaterBinary()` 在 macOS 上因残留 `hermes-setup` 二进制文件而错误进入 Windows 风格更新流程的问题。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/74909)

- **[PR #75768] Telegram typing indicator stuck indefinitely**（状态：CLOSED，标记 `implemented-on-main`）— 该 Issue 今日被关闭，标记为已在主分支实现。Telegram 多配置文件下的"正在输入"指示器无限卡住问题（v0.19.0 回归）已获修复。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/75768)

- **[PR #73857] chore(deps): refresh safe transitive npm dependencies**（状态：CLOSED）— 已关闭/合并，清理根目录锁文件中的安全传递依赖（@eslint/eslintrc、PostCSS、nanoid 等），无破坏性变更。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/73857)

- **[PR #69864] chore(deps): clear desktop npm advisories**（状态：CLOSED，标记 duplicate）— 桌面端 npm 安全公告清理（tar、fast-uri、shell-quote、DOMPurify），因重复被关闭。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/69864)

项目在架构治理方面持续推进：今日有多条 god-file 分解相关的重构 PR/Issue（#75787、#75746、#75769），将巨型 mixin 类拆分为独立模块，说明项目有意控制技术债务。

## 社区热点

今日讨论最活跃的 Issue/PR 集中在以下几条：

- **[Issue #69078] xAI grok-4.5 'Invalid PNG image' 400 permanently bricks session**（13条评论）— 一个含视觉工具结果的网关会话在调用 xAI 时开始**每一次** API 调用都返回不可重试的 400 错误，甚至纯文本轮次也失败，且重启网关无法恢复。用户只能删除会话及其 `gateway` 状态才能恢复。该问题被标记为 #25837 的 xAI 变体，说明这是一个跨提供商的系统性缺陷。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/69078)

- **[Issue #64231] chore(plugins): lifecycle-event catalog, hook taxonomy, and batch disposition of pending hook PRs**（13条评论）— 由核心维护者 teknium1 提出的插件生命周期事件目录和 hook 接受标准定义倡议，目标是对十余条悬而未决的 observer-hook PR 进行批量裁决，而不是逐一合入零散的 `VALID_HOOKS` 追加。该 Issue 已开放超两周，讨论热度持续。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/64231)

- **[Issue #74836] macOS in-app update permanently broken by stale leftover ~/.hermes/hermes-setup**（9条评论，1个👍）— 用户报告 macOS 上残留的旧版 `hermes-setup` 二进制文件永久性破坏应用内更新按钮，`hermes update` 命令也无法修复。根因是 `resolveUpdaterBinary()` 仅检查文件存在性而无版本/过期校验。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/74836)

- **[Issue #71643] Telegram streaming — successful finalize edit carries stale preview text**（6条评论，1个👍）— 流式 Telegram 回复可能永久截断，尽管所有 Bot API 调用均成功。最终 `editMessageText` 携带的是最后一次流式*预览*文本而非完整响应，网关此后设置 `content_delivered=True` 抑制了完整消息的发送。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/71643)

- **[Issue #75598] issue with updates**（5条评论）— Windows 用户报告约一周前开始更新后程序不稳定，多个网关配置文件互相冲突，切换配置文件不会停用其他实例。该问题同时标记了 `risk-compatibility` 和 `risk-platform-windows`。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/75598)

**讨论趋势分析**：今日热点集中于（1）会话状态持久化边界的缺陷（xAI 会话永久损坏、Telegram 截断），（2）更新机制的跨平台可靠性问题（macOS 陈旧二进制、Windows 多网关冲突），（3）插件生态治理的长期诉求。这些高热度讨论均直接指向用户日常使用中的核心路径。

## Bug 与稳定性

### P1 级（严重）

- **[Issue #74836] macOS 应用内更新被陈旧 `~/.hermes/hermes-setup` 永久性破坏**（9条评论，1个👍）
  `resolveUpdaterBinary()` 仅检查文件存在性而无版本门控，导致 macOS 上任何残留的旧版 updater 二进制都会让"更新"按钮彻底失灵，且 `hermes update` 无法修复。
  **已有对应 fix PR：[#74909]。**[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/74836) | [查看 PR](https://github.com/NousResearch/hermes-agent/pull/74909)

- **[Issue #71643] Telegram 流式消息截断——最终编辑携带陈旧预览文本**（6条评论，1个👍）
  流式回复的最终 `editMessageText` 携带的是最后一段预览文本而非完整响应，`content_delivered=True` 抑制了正确内容发送。所有 Bot API 调用都成功但用户收到的是截断内容。
  **暂无对应 fix PR。**[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/71643)

- **[Issue #69078] xAI “Invalid PNG image” 400 永久性损坏会话**（13条评论）
  含视觉工具结果的会话中，所有 API 调用（包括纯文本轮次）均返回不可重试的 400 错误。重启无法恢复，唯一办法是删除会话。已确认是 #25837 的 xAI 变体。
  **暂无对应 fix PR。**[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/69078)

### P2 级（中等）

- **[Issue #75598] Windows 更新后程序不稳定、多个网关冲突**（5条评论）
  用户报告更新后多个网关实例互相冲突，配置文件切换不彻底。标记了平台兼容性和 Windows 特定风险。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/75598)

- **[Issue #73060] Gateway /stop 仅丢弃队列头部消息，FIFO 溢出后续仍会执行**（3条评论）
  `/stop` 只丢弃一条排队消息，后面的消息会被提升并继续执行，与用户预期不符。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/73060)

- **[Issue #72316] `_should_treat_stop_as_truncated` 在 Ollama Cloud GLM 上误报 + SSE 流不传播 `partial` 状态**（4条评论）
  两个叠加 Bug 导致 WebUI 丢弃或错误渲染 GLM-5.2 的响应：截断检测误判 + 流式状态未正确传递。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/72316)

- **[Issue #75761] 同配置文件桌面端会话可在同一秒内覆盖图片上传**（2条评论）
  附件文件名仅在同一内存会话内唯一，但写入的目录为配置文件级共享目录，同秒产生的图片可能互相覆盖。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/75761)

- **[Issue #75797] 桌面端复制代码块时会展开 URL 引用**（新增，对应 PR #75797 已提出修复）
  复制代码块时 `@url:` wire 引用会被不必要地展开。修复 PR 已提交。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/75797)

- **[Issue #75794] `[SILENT]` 标记后追加文件修改验证器页脚导致静默响应检测失败**（对应 PR #75794 已提出修复）
  当 cron 任务以 `[SILENT]` 响应但文件写入被拒绝时，验证器页脚被追加到静默标记之后，使 `is_autonomous_silence_response()` 判定失败。修复 PR 已提交。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/75794)

### 其他值得关注的回归与边缘问题

- **[Issue #75768] Telegram 打字指示器无限卡住（多配置文件，v0.19.0 回归）** — 今日已关闭，标记 `implemented-on-main`。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/75768)
- **[Issue #75766] `/hatch` 失败——PIL `_imaging` 导入错误（跨版本 user-site 泄漏）** — python3.11 服务进程解析到了 python3.12 的 user-site Pillow，可复现。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/75766)
- **[Issue #71643] Telegram 相册跨轮次拆分** — 兄弟图片下载完成时间不同导致同一相册被分发到两个代理轮次。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/74965)
- **[Issue #75792] 语音播放阶段 barge-in 转录会捕获 Hermes 自身的 TTS 输出并重新提交** — 对应 PR #75792 已提交修复（fail-closed 防护）。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/75792)

**更新链路相关 Bug 集中爆发**：今日有至少 4 条 issue/PR 直接涉及更新器逻辑缺陷（#74836、#75598、#75793、#75790），覆盖 macOS 和 Windows 两个平台。这表明近期更新器重构引入了跨平台回归，但修复速度也很快——3 条修复 PR 已在今日提交。

## 功能请求与路线图信号

以下功能请求值得关注，按可能纳入下一版本的可能性排序：

- **[PR #75799] 新增 `HERMES_OFFLINE` 环境变量，支持隔离/离线部署** — 该 PR 会抑制冷启动时两次无条件的外部网络调用，适用于内网/气隙环境。这是一个低成本高价值的功能，合并概率较高。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/75799)

- **[Issue #71853] Skill 依赖声明（`depends_on`）及安装时强制校验** — 用户希望 skill 的 `prerequisites` 能在 `hermes skill install` 时被强制执行，而不仅仅是文档声明。该需求能显著改善 skill 生态的可靠性，已有清晰的实现路径。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/71853)

- **[Issue #64231] 插件生命周期事件目录与 hook 分类标准** — 由核心维护者提出，是一项治理性功能需求。若落地，将影响所有插件开发者的 hook 编写方式，需在社区达成共识后推进。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/64231)

- **[Issue #72896] Gmail send/draft create 支持 `--attach` 参数** — 用户希望 Gmail 工具能支持附件，实现路径清晰（复用如 MIME 构建逻辑），属于渐进式功能增强。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/72896)

- **[Issue #75186] `codex_app_server` 无法路由命名自定义提供商** — 当前运行时仅允许 `openai` 和 `openai-codex`，即使同一提供商的 CLI 已验证可用。该限制阻碍了 Codex 运行时的自定义模型接入，涉及运行时门控逻辑扩展。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/75186)

- **[Issue #75781] TUI 代码围栏视觉分离改进** — 用户反馈 Ink TUI 中围栏代码块与散文的视觉区分不足。低风险 UI 改进，可能在桌面端迭代中纳入。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/75781)

- **[Issue #69203] Discord 出站 @Name → `<@id>` 提及解析** — 与 Feishu 适配器已有功能对齐，要求 Discord 适配器将 LLM 输出的 `@Display Name` 转换为 Discord 实际提及的 `<@id>` 格式。当前 LLM 输出无法直接被 Discord 渲染为可点击提及，影响用户体验。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/69203)

**架构治理方向**：#75746 和 #75769 两条重构 Issue 分别针对 `SessionDB`（6,868 行/153 方法）和 `GatewaySlashCommandsMixin`（5,383 行/65 方法）提出进一步分解方案，与今日提交的 #75787 重构 PR 形成呼应。项目有意持续推进 god-file 分解，改善代码可维护性。

## 用户反馈摘要

- **更新机制是今日最大痛点**：macOS 用户报告"任何 `hermes update` 都无法修复"更新按钮失效问题（#74836），Windows 用户反馈"更新后整个程序不稳定，多个网关互相冲突"（#75598）。用户对更新机制的可靠性有较高期待，近期回归影响了信任度。

- **Telegram 消息交付可靠性问题**：多个 Telegram 相关 Bug 同时活跃（流式截断 #71643、相册拆分 #74965、打字指示器卡死 #75768、重复投递 #74248），反映 Telegram 适配器在真实使用场景中仍有较多消息完整性问题。用户在这些 Issue 中提供了详尽的复现步骤和日志，对问题定位有积极帮助。

- **跨平台一致性问题**：同一功能（更新器、提及解析）在不同平台/适配器上的行为不一致（Feishu 支持 @提及解析而 Discord 不支持，见 #69203），用户期待各平台体验一致。

- **安全边界意识增强**：用户在 #36645 中指出 `HERMES_WRITE_SAFE_ROOT` 可以被终端工具绕过，显示部分用户对沙箱逃逸路径有清晰认知。安全相关的反馈在此项目中获得了较好的响应——今日有2条安全修复 PR 在队列中。

- **积极的架构反馈**：#75746/#75769 两条重构 Issue 来自同一用户（MaxFreedomPollard），其对 SessionDB 和 GatewaySlashCommandsMixin 的分析详尽，显示出社区对项目长期可维护性的关注与支持。

## 待处理积压

以下为长期未解决但对项目健康度有较大影响的事项：

- **[Issue #60789] `session_search(profile=...)` 静默搜索当前配置文件而非命名配置文件**（开放 24 天，4条评论，P2，风险标记：会话状态）
  模式参数在 schema 中已定义且被工具接受，但代理循环处理器从未将其传递给发现/浏览路径。搜索结果会静默错误——用户以为在搜索"other"配置文件，实际搜的是当前配置文件。该问题会导致跨配置文件信息检索错误，建议优先处理。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/60789)

- **[Issue #36645] `terminal`/`execute_code` 绕过 `HERMES_WRITE_SAFE_ROOT` 文件安全限制**（开放 61 天，2条评论，P2，安全风险标记）
  `HERMES_WRITE_SAFE_ROOT` 仅限制 Hermes 原生工具（Write、Edit），但终端工具可直接通过 shell 命令（如 `python -c "open(...)"`）在任意位置写文件。对于启用了文件安全防护的用户，这是一个完整的沙箱逃逸路径。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/36645)

- **[Issue #43666] 持久化边界的脱敏间隙：工具输出文件转储、压缩块、数据库 URI**（开放 52 天，4条评论，P2，安全风险标记）
  从 #43083 拆分出的问题——脱敏逻辑在工具调用参数和消息内容上一致，但工具输出的文件转储、压缩块和数据库连接字符串中仍存在明文敏感信息泄漏。审计发现一次会话后 `state.db` 中有 23 处密码明文命中。该问题直接影响用户数据安全。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/43666)

- **[Issue #39829] Bedrock Converse 拒绝空白占位文本，破坏助手优先历史恢复**（开放 57 天，2条评论，P2）
  `agent/bedrock_adapter.py` 使用单个空格作为空消息内容的占位符，但 AWS Bedrock Converse API（承载 Anthropic Claude 模型）拒绝空白文本块。任何涉及 assistant-first 历史恢复的场景都会因此失败。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/39829)

- **[Issue #58728] Matrix 网关流式发送最终/分段消息但不发送 m.replace 编辑**（开放 26 天，1条评论，P2，消息投递风险）
  尽管流式功能已启用，Matrix 网关会发送最终和分段消息，但从不发送 `m.replace` 编辑操作用于实时更新。导致 Matrix 端缺少流式更新的关键部分。[查看 Issue](https://github.com/NousResearch/hermes-agent/issues/58728)

- **[PR #59179] 修复：通过 cron 模式拒绝无人值守网关任务**（开放 27 天，P2，安全风险标记）
  将现有 cron 和 kanban worker 标记视为无人值守状态，在网关审批分类前进行判定。对危险命令、组合守卫和 execute_code 审批走 `approvals.cron_mode` 路径。该 PR 涉及自动化审批逻辑的安全加固，停留时间较长。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/59179)

- **[PR #59162] 全局日志记录中脱敏机密信息**（开放 27 天，P2，安全风险标记）
  在 Hermes 的全局记录工厂中对 `LogRecord.msg` 和 `LogRecord.args` 进行脱敏，使用现有 `agent.redact.redact_sensitive_text` 路径。同时覆盖元组/列表/字典日志参数中的字符串值。该 PR 与 #43666 同属安全主题，建议安全审查后尽快处理。[查看 PR](https://github.com/NousResearch/hermes-agent/pull/59162)

*注：以上分析基于提供的 GitHub 数据快照，部分 PR/Issue 的关联和状态可能随时间变化。日报中 P1/P2/P3 优先级标签来自项目自身的标记体系。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：** 2026-08-01  
**数据窗口：** 2026-07-31 至 2026-08-01（24小时）

---

## 1. 今日速览

过去24小时内，PicoClaw 项目保持温和活跃态势：新增/更新 Issues 2 条，待合并 PR 3 条（均处于长期推进状态），无新版本发布。值得注意的是，今日无任何 PR 被合并或关闭，代码合并进度出现停滞；同时有一项来自核心维护者 `trufae` 的 DeltaChat 重构 PR（-200 LOC）已持续开放近一个月，可能面临较大的 Review 压力。社区讨论集中于 IRC 长消息支持（#3287）和 Web 界面输入框 CPU 占用问题（#3292），前者为功能性需求，后者为稳定性问题，均值得关注。

---

## 2. 版本发布

**无新版本发布。** 当前最新版本仍为 v0.3.1（发布日期待确认）。

---

## 3. 项目进展

**今日无 PR 被合并或关闭**，这是值得关注的信号 — 代码落地速度有所放缓。目前有 3 个 PR 处于待合并状态，均为已更新至 7 月 31 日的活跃 PR：

| PR | 标题 | 作者 | 创建日期 | 已开放天数 | 状态 |
|---|---|---|---|---|---|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | trufae | 2026-07-03 | 29 天 | 待 Review |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | dim | 2026-06-27 | 35 天 | 待 Review |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | lc6464 | 2026-07-01 | 31 天 | 待 Review |

**关键观察：** 三个 PR 全部开放超过一个月，说明项目当前的 Review 通道存在瓶颈。其中 `trufae` 作为核心维护者贡献的 DeltaChat 重构（削减 200 行代码、移除密码认证、更新文档）对代码库健康度有明显正向价值，建议优先处理。

---

## 4. 社区热点

### 最活跃 Issue：#3287 — IRC 长消息支持
- **链接：** [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)
- **作者：** superuser-does | **创建：** 2026-07-22 | **更新：** 2026-07-31 | **评论：** 2

**背景与诉求：** IRC 协议默认限制单条消息 512 字节，超出部分会被客户端自动拆分。用户希望 PicoClaw 能够将 IRCv3 中拆分后的长消息识别为一条完整消息，以便 AI 模型能正确处理上下文。这反映了 PicoClaw 作为多通道 AI 助手在真实 IM 协议限制下的适配需求 — 消息完整性问题直接影响 AI 回复质量，是一个有实际价值的功能改进方向。

### 次热点 Issue：#3292 — Web 界面输入框 CPU 占用过高
- **链接：** [Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)
- **作者：** Acdfmwaopuio | **创建：** 2026-07-24 | **更新：** 2026-07-31 | **评论：** 1

**背景与诉求：** 用户报告在 Firefox 浏览器中聚焦聊天界面输入框时 CPU 占用异常升高，环境为 PicoClaw v0.3.1 + Go 1.26 + deepseek-v4-flash 模型 + Debian Linux。该问题被标记为 `[stale]`，意味着可能已有一段时间未获得有效跟进。此类 UI 交互层的性能问题会直接影响日常使用体验，建议排查是否与前端渲染循环或文本高亮逻辑有关。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🟡 中等 | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | 聊天界面输入框聚焦时 CPU 占用过高（Chrome/Firefox Web 界面） | 无关联 Fix PR，标记为 `[stale]` |

**分析：** 今日仅 1 个活跃 Bug 报告，数量较少，整体稳定性良好。但该问题已存在约一周且无修复进展，且被系统标记为 stale，建议维护者确认是否为已知问题或补充排查。

---

## 6. 功能请求与路线图信号

### 社区提出的新需求：

**Feature Request #3287：IRC 长消息合并处理** — 将 IRCv3 自动拆分的消息在传递给 AI 模型前重新拼接。考虑到 IRC 是 PicoClaw 的核心通道之一（与 DeltaChat、Simplex 并列），此功能对实际使用价值较高。

### 路线图信号分析：

结合 3 个待合并 PR 来看，项目当前的功能扩展方向集中在：

1. **新通道支持：** PR #3193 增加 Simplex 通道 — 可作为聊天协议聚合平台的差异化优势；
2. **模型管理能力：** PR #3200 增加可配置的默认模型回退链 — 面向 Web UI 用户的多模型容灾需求；
3. **技术债务清理：** PR #3222 的 DeltaChat 重构 — 体现维护者对代码质量的关注。

**预测：** #3200（模型回退链）和 #3222（DeltaChat 重构）与当前 AI 助手场景关联度高，被合入下一版本（v0.4.0）的可能性较大；#3287 的 IRC 长消息支持作为新功能需求，若社区反馈增加，有望排入后续迭代。

---

## 7. 用户反馈摘要

> 以下提炼自今日更新的 Issues 评论内容（基于可用数据）：

- **对 IRC 使用体验的期待：** 用户希望 PicoClaw 能理解 IRC 协议中因 512 字节限制导致的自动消息拆分，并将拆分段落视为一条完整消息处理（#3287）。这暗示在实际使用中，长消息场景下 AI 回复可能会因上下文断裂而质量下降。
- **对 Web 界面性能的关切：** 用户报告输入框聚焦时 CPU 占用升高，虽未明确表达不满，但反馈本身说明桌面浏览器端的交互流畅度仍有提升空间（#3292）。

目前社区情绪整体稳定，未发现对项目方向或维护速度的负面评价。两个活跃讨论均来自功能改进与体验优化类话题，属于项目健康发展的正常演进信号。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 开放时长 | 优先级建议 |
|---|---|---|---|---|
| PR | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | 35 天 | 🟡 中 — 新通道功能长期搁置可能影响外部贡献者积极性 |
| PR | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | 31 天 | 🟡 中 — 面向 Web UI 用户的核心功能，建议尽快 Review |
| PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | 29 天 | 🟢 高 — 核心维护者贡献，代码清理价值明显，建议优先合入 |
| Issue | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | [BUG] CPU usage too high when focus on input box | 8 天（已标记 stale） | 🟡 中 — 建议确认是否为 UI 层已知瓶颈，至少给出临时规避方案 |

**特别提醒：** 3 个 PR 均开放超过 4 周，长期未合入可能带来两个风险：(1) 外部贡献者（dim、lc6464）的参与意愿下降；(2) 代码冲突概率随时间上升。建议维护者在未来一周内至少处理 1-2 个 PR。

---

*本日报由 AI 自动生成，数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)。所有时间戳与数据均来自原始 GitHub API。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-01** | **数据来源：GitHub (nanocoai/nanoclaw)**

---

## 1. 今日速览

项目在过去24小时内保持中等活跃度：共产生 **8 条 Issue 更新**（全部处于开放状态）和 **10 条 PR 更新**（其中4条已合并/关闭，6条待处理）。今日无新版本发布。核心关注点集中在基础设施层：**容器运行时灵活性**（Kubernetes、Apple Container、无Docker运行）和**通道适配器扩展**（iMessage、Dial、Telegram）是当前社区最热的两条主线。安全加固类议题（日志脱敏、请求来源校验）持续有 PR 推进，说明项目在稳定性与安全性方面维持着健康的迭代节奏。一个值得警惕的信号是：#3162 号 Telegram 配对静默故障 Bug 为今日新增且标记为高优先级，需要维护团队及时响应。

---

## 2. 版本发布

今日无新版本发布。但注意到一个相关信号：PR #3163 `fix(release): restore the v2.1.54 release path` 已在今日合并，暗示 v2.1.54 的发布流程曾出现过问题且已修复，**v2.1.54 正式版本可能在未来数日内发布**。建议社区用户保持关注。

---

## 3. 项目进展

今日共有 **4 个 PR 被合并/关闭**，总结合并代码量约为 8 个 PR 中 4 个完成闭环：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#3163](https://github.com/nanocoai/nanoclaw/pull/3163) | fix(release): restore the v2.1.54 release path | ✅ 合并 | 修复 v2.1.54 发布路径，为后续版本发布扫清障碍 |
| [#3165](https://github.com/nanocoai/nanoclaw/pull/3165) | Codex/copilot changes | ✅ 关闭 | 遵循贡献指南的改动（内容不明，已关闭） |
| [#1678](https://github.com/nanocoai/nanoclaw/pull/1678) | docs(skills): update voice transcription skills for Telegram + Linux | ✅ 合并 | 语音转录技能文档更新，移除 WhatsApp-only 限制，扩展至 Telegram 与 Linux 支持 |
| [#3076](https://github.com/nanocoai/nanoclaw/pull/3076) | feat(imessage): unified local+hosted adapter targeting spectrum-ts v11 | ✅ 关闭 | iMessage 统一适配器（本地+托管），目标 spectrum-ts v11 |

**项目整体进展判断**：iMessage 适配器已完成一轮迭代（#3076），语音转录能力在文档层面已完成 Telegram/Linux 扩展（#1678），发布流程得到修复（#3163）。项目整体处于**功能性扩展与基础设施修复并行推进**的状态，未出现重大架构变革，稳定性优先的策略明显。

---

## 4. 社区热点

### 热点一：容器隔离 vs. 主机直连的路线之争

**Issue #1184**（[链接](https://github.com/nanocoai/nanoclaw/issues/1184)）— 3 条评论，1 👍
在受限 K8s 环境中部署 NanoClaw 的挑战（Sealos 平台），作者在摘要中明确表达了对项目极简理念的认可，但受限于容器隔离无法访问主机工具。

**Issue #1732**（[链接](https://github.com/nanocoai/nanoclaw/issues/1732)）— 3 条评论
提出 **native runner 模式**以绕过 Docker，直接访问主机工具（tmux、有头浏览器、macOS API）。该 Issue 列举了被阻塞的具体用例，诉求明确、论证充分。

> **分析**：两条 Issue 共同指向同一核心矛盾——**安全隔离与主机直连的取舍**。NanoClaw 将容器隔离视为安全优势，但用户在实际生产中需要访问主机工具。结合 PR #2809（Apple Container runtime）和 Issue #2354（K8s runtime），**"容器编排灵活性"正在成为影响用户采纳的关键瓶颈**。这可能是项目在下一版本需要重点关注的方向。

### 热点二：Telegram 配对静默失败

**Issue #3162**（[链接](https://github.com/nanocoai/nanoclaw/issues/3162)）— 今日新增，0 评论，0 👍
虽无讨论热度，但标记为 **High Priority** Bug（详见下文 Bug 章节）。

---

## 5. Bug 与稳定性

### 🔴 高严重度

**#3162 [High] Telegram pairing is silently broken for the whole process lifetime if the boot-time getMe fails**
[Issue 链接](https://github.com/nanocoai/nanoclaw/issues/3162)
- **影响**：启动时 `getMe` 调用若失败（网络慢、代理抖动、Telegram 服务异常），**整个进程生命周期内配对码全部失效**，用户无法配对且无任何错误提示。
- **状态**：今日新开，尚无 fix PR。
- **关键细节**：已在 `channels` 分支 6ee516ad 验证。单一 HTTP 失败即可导致永久锁定，属于典型的**静默故障**，对用户体验伤害大。
- **建议**：维护团队应尽快确认并修复，至少应增加**失败重试/熔断**与**用户可见的错误提示**。

### 🟡 中严重度

**#2923 [Hardening] ask_user_question card can be defaced by a forged click before origin authz**
[Issue 链接](https://github.com/nanocoai/nanoclaw/issues/2923)
- **影响**：伪造按钮点击可**篡改卡片显示文本**（显示为 `selectedLabel — attacker name`），即使响应已被来源校验拒绝。属于显示完整性欺骗，非数据泄露。
- **状态**：已有对应 PR **#2651**（[链接](https://github.com/nanocoai/nanoclaw/pull/2651)）——`fix(interactive): validate pending question response origin`，目前仍待合并。该 PR 通过传递回调确认的 `platformId`/`threadId` 并在通道动作路径中比对来源，直接针对此问题。

### 🟢 低严重度

**#2589 Apple Container: host.docker.internal in OneCLI proxy URL doesn't resolve**
[Issue 链接](https://github.com/nanocoai/nanoclaw/issues/2589)
- Apple Container 微VM内 `host.docker.internal` 无法解析，且不支持 `--add-host` 注入，影响代理 URL 连通性。已有 PR #2809 在推进 Apple Container 支持，预计包含相关处理。

---

## 6. 功能请求与路线图信号

### 高概率进入下一版

| 需求 | 来源 | 对应 PR/Issue | 预判 |
|---|---|---|---|
| **Apple Container 运行时** | 多用户诉求 | PR #2809（开放中） | 已在实现，合并后将支持 macOS 原生容器 |
| **Kubernetes 容器运行时** | Issue #2354（1 👍） | 开放中，尚无对应 PR | 需社区贡献者认领 |
| **原生直连模式（无 Docker）** | Issue #1732 + #1225 | 开放中，尚无对应 PR | 与 #2354 同属"运行时灵活性"路线，建议统一规划 |
| **Hosted iMessage (Photon) 注册流程** | — | PR #3164（开放中） | 作者为 glifocat（活跃贡献者），合并概率高 |
| **Dial 通道（SMS + AI 语音）** | — | PR #3041（开放中） | 新增通信渠道，扩展使用场景，值得关注 |
| **日志敏感信息脱敏** | — | PR #3161（开放中） | 安全加固类，合并概率较高 |

### 需维护者决策

- **运行时灵活性是否设为正式路线图方向**：至少 4 条 Issue/PR 与此相关（#1184、#1732、#1225、#2354），但未见维护者明确表态。建议官方对该方向给出回应，避免社区重复提案。

---

## 7. 用户反馈摘要

**正面反馈：**
- Issue #1184 作者明确表达对项目的认可：*"I really appreciate the minimalist approach and how it provides a lightweight, secure alternative to the more bloated agent frameworks. Using existing code agents to build such a streamlined 'Claw' is brilliant."* —— 极简设计和轻量安全是用户选择 NanoClaw 的核心原因。

**核心痛点：**
1. **生产环境部署受限**（#1184）：在 K8s/受限环境中的部署困难，Docker 依赖成为硬门槛。
2. **Docker 依赖过强**（#1225）：用户明确询问 *"Can I run it without Docker?"*，且其环境包含 Windows 与 Linux 平台。
3. **主机工具不可达**（#1732）：tmux、有头浏览器、macOS API 等主机级工具因容器隔离而无法使用，仅剩挂载整个文件系统这一不安全的方式。
4. **文档与实现不同步**（#2588）：`skill/apple-container` 分支与主分支严重脱节，按文档执行 `/convert-to-apple-container` 会立即失败。

**不满意点：**
- **静默故障**（#3162）：Telegram 配对失败无任何提示，用户体验差。
- **文档过期**（#2588）：分支引用不存在的 API 和模块，且主分支运行时已从 Node+tsc 迁至 bun。

---

## 8. 待处理积压

### ⚠️ 高优先级关注

**Issue #2588**（[链接](https://github.com/nanocoai/nanoclaw/issues/2588)，创建于 2026-05-22）
`skill/apple-container` 分支与主分支严重脱节，文档引用的 API 已不存在。**已积压约 2.5 个月**，且与 PR #2809（Apple Container runtime 实现）直接相关，建议在合并 #2809 时一并对齐该分支。

### ⚠️ 中优先级

**Issue #1225**（[链接](https://github.com/nanocoai/nanoclaw/issues/1225)，创建于 2026-03-18）
"Run it without Docker" 的诉求已存在 **4.5 个月**，且获得社区持续关注（#1732 是对其更详细的补充）。维护者需明确回应可行性或给出 roadmap。

**Issue #2354**（[链接](https://github.com/nanocoai/nanoclaw/issues/2354)，创建于 2026-05-08）
Kubernetes 容器运行时需求已提出近 3 个月，**尚无任何认领或维护者回应**。若项目不计划支持，建议官方明确关闭并说明原因，避免社区反复提案。

### ⚠️ 需长期跟踪

- **PR #2651**（[链接](https://github.com/nanocoai/nanoclaw/pull/2651)）— 安全修复（ask_user_question 来源校验），创建于 2026-05-30，已开放 **2 个月**未合并。考虑到对应 Issue #2923 是安全相关，建议维护团队加快审查。
- **PR #2809**（[链接](https://github.com/nanocoai/nanoclaw/pull/2809)）— Apple Container runtime，创建于 2026-06-18，开放 **1.5 个月**。牵涉面较广（涉及 #2588、#2589 两条 Issue），建议尽快给出审查结论。

---

## 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区活跃度 | ⭐⭐⭐⭐ | 24h 内 8 Issue + 10 PR，讨论持续 |
| 维护响应速度 | ⭐⭐⭐ | 有活跃贡献者（glifocat）持续跟进，但部分 PR/Issue 存在 2-3 个月积压 |
| 代码质量管控 | ⭐⭐⭐⭐⭐ | follows-guidelines 标签、多 PR 有核心团队标记、审查严格 |
| 安全性 | ⭐⭐⭐⭐ | 安全类 Issue 均有 PR 跟进，日志脱敏等加固措施在推进 |
| 文档一致性 | ⭐⭐⭐ | #2588 显示部分分支文档已过期 |
| **核心风险** | — | **运行时灵活性需求（K8s/无Docker）长期未获官方回应**，可能成为用户流失的潜在因素 |

**总结**：NanoClaw 项目整体处于健康发展的轨道上，社区贡献活跃、安全意识到位、贡献指南执行良好。**最大的结构性风险在于"运行时灵活性"路线尚未明确**——多条相关 Issue 已积压数月之久。建议维护者在未来 1-2 周内对"非 Docker 运行时"方向给出官方立场声明，以消除社区不确定性。

---

*本日报由 AI 分析生成，数据截至 2026-08-01。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-01

> 数据窗口：2026-07-31 ~ 2026-08-01（基于 GitHub 事件时间戳）


## 1. 今日速览

过去 24 小时，NullClaw 项目整体活跃度处于**温和上升**通道：Issues 侧无新增或关闭（净变化为 0），PR 侧新增 1 条待合并提交，无新版本发布。本窗口的核心事件是 **PR #981**（新增 grok-cli provider），表明项目正在持续扩充第三方 CLI 适配层，但渠道合并节奏放缓，维护者响应压力尚存。**健康度评估：稳定推进，社区互动偏淡，需关注 PR 积压与 Issue 静默问题。**


## 2. 版本发布

本窗口内**无新版本发布**。最近一次 Release 暂缺，建议关注 `Tags` 页以获取后续版本动态。


## 3. 项目进展

本窗口**无 PR 被合并或关闭**，因此无代码合入事件。但存在 1 条重要待合并 PR，代表项目在功能层面有明确推进方向：

- **[PR #981] feat(provider): add grok-cli provider for xAI Grok CLI**（`待合并`）
  - 作者：valonmulolli | 创建：2026-07-29 | 更新：2026-07-31
  - [查看 PR](https://github.com/nullclaw/nullclaw/pull/981)
  - **内容摘要**：新增基于 CLI 的 provider，将请求委托给本机 `grok` 命令（xAI Grok），沿用 `codex-cli` / `gemini-cli` / `claude-cli` 相同的 spawn-per-request 模式。该 provider 作为**可选**支持，依赖用户自行安装并认证 `grok` CLI。
  - **项目意义**：若合并，NullClaw 的 provider 生态将扩展至 xAI 系模型，成为继 OpenAI、Gemini、Claude 之后第 4 条 CLI 适配通道，适配矩阵进一步完善。


## 4. 社区热点

本窗口内**无高互动讨论**（评论数、表情反应均为 0）。唯一活跃的 PR #981 处于静默状态（0 评论、0 👍）。值得注意的是，该 PR 自创建以来已 **3 天**未获维护者反馈，虽非热门讨论，却是社区期望落地的功能点，建议维护者尽快回复。


## 5. Bug 与稳定性

本窗口内**无新报告的 Bug、崩溃或回归问题**。项目稳定性良好，暂无紧急修复需求。


## 6. 功能请求与路线图信号

本窗口内**无新增 Issue 形式的功能请求**，但 **PR #981** 本身就是一项功能扩展信号——用户侧已出现对 xAI Grok 模型接入的实际诉求。结合此前已完成的 `codex-cli` / `gemini-cli` / `claude-cli` provider 模式，可以判断：

- **CLI 代理型 provider 已成为社区认可的扩展模式**，后续版本很可能继续沿此范式接纳更多 CLI 工具（如 `ollama`、`llama.cpp` 等）；
- grok-cli provider 若通过审查，将作为样例被纳入文档推荐列表，并为后续“多模型路由”功能铺路。

**下一版本潜在纳入项**：PR #981（待合并）。


## 7. 用户反馈摘要

本窗口内无 Issues/PRs 评论可供提炼。基于 PR #981 的提交内容可间接推断用户侧诉求：

- **使用场景**：开发者已在本地配置 `grok` CLI 并完成认证，希望在 NullClaw 中直接复用该本地工具链，而非额外引入模型 API key；
- **隐含痛点**：现有 provider 对 CLI 型模型支持已形成模式，用户期望保持**一致的配置体验**（spawn-per-request、环境变量透传），降低多模型切换成本；
- **满意度信号**：PR 提交质量较高（沿用既定模式），但长期无维护者回应可能削弱贡献者积极性。


## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 等待天数 | 备注 |
|------|------|----------|----------|------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) feat(provider): add grok-cli provider | PR | 2026-07-29 | **3 天** | 已更新至 07-31，仍无维护者评论或 review |

**建议**：请维护者在 48 小时内对 PR #981 进行首轮 review（至少确认代码风格与 provider 注册逻辑），以保持社区贡献通道畅通。此外，本窗口内 **0 条新 Issue** 与 **0 条 Issue 关闭**的组合表明 Issue 队列可能处于“静默积累”状态，建议检查是否有历史 Issue 超过 30 天无响应，避免社区反馈通道淤塞。

---

*本日报由 AI 自动生成于 2026-08-01，数据源：nullclaw/nullclaw GitHub 仓库公开事件。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是 2026 年 8 月 1 日的 IronClaw 项目动态日报。

---

## IronClaw 项目动态日报 — 2026-08-01

### 1. 今日速览

项目活跃度极高，正处于大规模架构重构（“Reborn”）的密集执行期和性能攻坚阶段。过去24小时内有37条Issue更新和50条PR活动，核心贡献者团队（ilblackdragon, BenKurrek, serrrfirat等）正通过一系列堆叠的PR（如 #6967, #6975, #6977, #6980）稳步推进目标架构的落地。同时，以 `ilblackdragon` 为首的PI-Harness采用计划也催生了一批高优级（P0/P1）的缓存与性能优化议题，表明项目在追求正确性的同时，也在重点关注成本和效率。安全与数据隔离相关的Bug（如 #6900, #6778）持续被提出并受到关注，社区反馈也较为活跃，项目整体健康度良好，但CI与基础设施的稳定性仍需关注。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日项目进展的核心是**“Reborn”目标架构中“工作流（WS1.x）”的大规模重构**，方向是将不同层级（loop、extension、product）的共享契约（contracts）抽取为独立的crate，以消除依赖倒挂和重复导入路径。

- **重构里程碑：** 工作流WS1.2和WS1.3已合并。
    - [PR #6975 (WS1.2)](https://github.com/nearai/ironclaw/pull/6975) 已合并：成功提取 `ironclaw_loop_contracts`，并将 `ironclaw_agent_loop` 切换到新的中立契约上。
    - [PR #6977 (WS1.3)](https://github.com/nearai/ironclaw/pull/6977) 已合并：成功提取 `ironclaw_extension_contracts`，关闭了双重导入路径。
- **重构进行时：** WS1.4 ([#6980](https://github.com/nearai/ironclaw/pull/6980)) 和 WS1.5 ([#6981](https://github.com/nearai/ironclaw/pull/6981)) 已提交并处于开放状态，继续沿着既定计划推进。WS1.5（证据铸造整合）因涉及安全敏感代码而被特别标注。
- **前端修复：** [PR #6908](https://github.com/nearai/ironclaw/pull/6908) 已合并，修复了管理后台用户列表无法翻页的问题，这是一个直接影响用户体验的修复。
- **核心功能沉睡回归修复：** 一个历史遗留的严重回归 [PR #4022](https://github.com/nearai/ironclaw/pull/4022)（HTTP响应错误被视为致命错误）终于被合并，这使得代理运行时的容错性恢复到正确状态。

### 4. 社区热点

今日讨论热度最高的Issue是 **[#6284 [EPIC] error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)**，评论数达15条。该议题的目标是让模型能够从100%的运行时错误中恢复，触及了AI代理稳定性的核心痛点。高讨论度表明社区和核心团队对代理在复杂环境中自主解决问题的能力有极高的期望，也反映出当前错误处理机制尚未达到理想状态。

此外，**[#6963](https://github.com/nearai/ironclaw/issues/6963)** 关于路径化CI门禁的讨论也值得注意，它暴露了重构过程中因文件移动带来的测试覆盖盲区，显示了开发者对工程质量细节的严格把控。

### 5. Bug 与稳定性

今日报告的Bug集中在**安全/隐私**和**性能**两方面，严重程度较高。

- **安全与隐私 (P0/P1):**
    - **[#6900 (P0)](https://github.com/nearai/ironclaw/issues/6900): 共享频道默认主题绑定导致跨用户内存泄漏 (Cross-user memory leak)** 。这是一个严重的安全隐患，在共享频道中，一个用户的记忆可能被写入操作者的命名空间。目前暂无直接修复PR。
    - **[#6778 (P1)](https://github.com/nearai/ironclaw/issues/6778): Hosted-MCP 工具目录按扩展ID而非安装发布，导致跨用户元数据暴露**。同样是一个身份隔离问题，暂无直接修复PR。
- **性能回归 (P0/P1):**
    - **[#6973 (P0)](https://github.com/nearai/ironclaw/issues/6973): Postgres API 容量性能严重回退** (p95 从3.74s恶化至12.0s)。主要贡献者 `serrrfirat` 已提交大尺寸性能修复PR，但该PR仍开放中。
    - **[#6990 至 #6984 (P0/P1)](https://github.com/nearai/ironclaw/issues/6990)**: 一系列关于**Prompt缓存**的议题被创建。核心问题是当前实现会导致缓存频繁失效，无法有效利用 Anthropic 的缓存机制。这些问题由 `ilblackdragon` 根据研究文档提出，并极有可能由一个专门的PR系列解决，但目前暂无直接关联的修复PR。
- **其他稳定性问题:**
    - **[#6978](https://github.com/nearai/ironclaw/issues/6978)**: Reborn测试的 `workflow_dispatch` 运行存在结构性失败（CI自身缺陷）。
    - **[#6947](https://github.com/nearai/ironclaw/issues/6947)**: `classify-test-scope.sh` 脚本中，`ironclaw_product` crate被错误归类为legacy-only。

### 6. 功能请求与路线图信号

- **CLI兼容性增强：** [Issue #6983](https://github.com/nearai/ironclaw/issues/6983) 建议为 `ironhub` 子命令添加 `hub` 别名，以便与 IronHub Dashboard 的命令兼容。这是一个低成本的易用性改进，可能较快被接受。
- **新用户迁移工具：** [Issue #6939](https://github.com/nearai/ironclaw/issues/6939) 请求提供从旧版代理产品迁移到 IronClaw 的工具，以降低用户切换成本。这是获取新用户的关键一环，但实现工作量较大，可能会被排入路线图。
- **术语标准化：** [Issue #6971](https://github.com/nearai/ironclaw/issues/6971) 提出统一 “Tools” 和 “Extensions” 的术语。这表明产品文档和UI在概念上可能存在不一致，需要澄清。
- **路线图信号：** 大量的 `[scope: reborn]` 标签的Issue和PR表明，**“Reborn”架构重构是目前绝对的核心路线图**。同时，从 #6984 到 #6990 的这批PI-Harness相关性能Issue来看，**“成本优化”和“性能”** 也是下一阶段的重点方向。

### 7. 用户反馈摘要

- **最强烈的痛点：** 用户对**数据安全和隐私**表示担忧。[#6866](https://github.com/nearai/ironclaw/issues/6866) 报告所有用户共享同一个home目录，可以互相看到工作区，这是一个非常严重的隐私问题。此外，共享频道中的用户身份混淆问题 (#6900) 也会动摇用户对平台的信任。
- **不和谐的体验：** 用户反馈产品页面存在**虚假数据**[#6902](https://github.com/nearai/ironclaw/issues/6902)（显示 $0.00 花费、0 个门禁等指标），这严重损害了产品的可信度，可能与前端开发中的占位符有关。
- **品牌一致性：** 用户注意到扩展页面描述中使用了 “Reborn” 而非 “Ironclaw 1.0”[#6854](https://github.com/nearai/ironclaw/issues/6854)，表明用户对产品的正式命名和对外沟通很敏感。
- **易用性障碍：** 缺乏从旧版迁移的工具 (#6939) 和登录功能无法使用[#6972](https://github.com/nearai/ironclaw/issues/6972) 都构成了直接的使用障碍，其中登录问题是阻滞用户进入产品的致命缺陷。

### 8. 待处理积压

- **长期悬挂的发布PR：** **[PR #5598 "chore: release"](https://github.com/nearai/ironclaw/pull/5598)** 自7月3日创建以来已开放一个月，包含 `ironclaw_common` 和 `ironclaw_skills` 的破坏性变更。它长期未合并会阻塞下游依赖者，需要优先处理。
- **长时间运行的回滚修复：** **[PR #5981](https://github.com/nearai/ironclaw/pull/5981) 和 [#5982](https://github.com/nearai/ironclaw/pull/5982)** 自7月11日起一直处于开放状态，涉及消息路由和预算审批功能，回滚到当前主线后等待合并。鉴于两者都标注为 `size: XL`，可能需要更多时间审查，但考虑到它们已经开放了相当长时间，是时候推动合并了。
- **需要注意的“幽灵”PR：** **[PR #5598](https://github.com/nearai/ironclaw/pull/5598)** 和 **[PR #5981](https://github.com/nearai/ironclaw/pull/5981)** 等PR的 `更新` 时间很近，但 `创建` 时间很旧，说明维护者仍在照看它们，只是合并门槛很高。建议维护者对这些长期开放的PR进行一次集中的状态评估，明确是推进、关闭还是拆分。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🤖 LobsterAI 项目日报 — 2026-08-01

## 📌 今日速览

过去24小时，LobsterAI 的社区活跃度主要集中在 **4 个 stale（过期自动关闭）Issue 与 8 个关联 stale PR 的统一清理**上，这些条目均于 2026-04-02 创建，因长期未获关注被系统关闭。剔除自动化清理噪音后，**真实的开发推进显著**：当日共合并 11 个 PR，其中 5 个为实质性功能/质量改动（含 UI 交互优化与 OpenClaw 核心稳定性修复），核心价值集中在 **缓存命中率修复（-100% → ~57% 的回归修复）、BTW 工具协议泄漏防护、侧边栏体验升级**。新版发布为 0，但 5 个前沿 PR 具备进入下一个 2026.7.31 阶段性版本的资格。项目整体处于**高频迭代、稳定性加固并行推进**的活跃期。

---

## 🚀 版本发布

无新版本发布。但值得注意的是，PR #2416 (`Release/2026.7.31`) 今日已合并，预计 **2026.7.31 版本已进入发布流程**，3 个修复类 PR（#2413、#2414、#2415）大概率已包含在该版本中。

---

## 🛠 项目进展

剔除 stale 清理后，今日实质合并 **5 个 PR**，集中在两个方向：

### 一、OpenClaw 核心链路稳定性（3 个，全部直接入库）

| PR | 变更内容 | 业务价值 |
|---|---|---|
| [#2413 fix(openclaw): keep live prompt tool-result history byte-stable across turns](https://github.com/netease-youdao/LobsterAI/pull/2413) | live prompt 投影不再重新应用 4x 聚合上限，保持历史片段字节级稳定 | **修复 DeepSeek 长会话缓存命中率从 ~100% 断崖跌至 ~57% 的回归** |
| [#2415 fix(openclaw): drop aggregate cap in live tool-result prompt projection](https://github.com/netease-youdao/LobsterAI/pull/2415) | 与 #2413 同源修复，持久化会话沿用旧逻辑 | 进一步彻底移除 prefix cache 被破坏的根因 |
| [#2414 fix(cowork): prevent BTW tool protocol leakage](https://github.com/netease-youdao/LobsterAI/pull/2414) | 清洗侧聊结果中的 tool-call 标记；侧问需工具时返回稳定指引；错误元数据保留 | **杜绝协议级信息泄漏，增强侧聊稳定性** |

> 💡 **分析师点评**：缓存命中率从 ~100% 跌至 ~57% 属于**重大隐性回归**（不仅增加 token 费用，还使长会话响应延迟显著上升）。该问题的发现与当日修复体现了良好的质量闭环。

### 二、Renderer UI 交互优化（2 个）

| PR | 变更内容 | 业务价值 |
|---|---|---|
| [#2417 fix(sites): add copy success feedback](https://github.com/netease-youdao/LobsterAI/pull/2417) | 复用会话复制图标交互，为站点 URL 与共享码复制增加成功反馈 | 消除用户复制后无反馈的困惑 |
| [#1321 fix(settings): dismiss overlays when switching settings tabs](https://github.com/netease-youdao/LobsterAI/pull/1321) | 切换设置页签时自动关闭记忆编辑器/连接测试弹层 | 修复弹层残留导致的界面"假只读"问题 |

---

## 💬 社区热点

今日无新开 Issues/PRs，热点聚焦于 **4 个同日创建（2026-04-02）、今日被 stale 关闭的 Issue**，均与**侧边栏/会话列表体验**相关，合计收获 8 条评论。同一作者 `MaoQianTu` 贡献了其中 3 个功能类 Issue，且对应 PR（#1315、#1318、#1320）均已合并，属于**需求与实现同步闭环**的健康状态：

| Issue | 讨论热度 | 对应 PR 状态 |
|---|---|---|
| [#1319 会话列表骨架屏加载状态](https://github.com/netease-youdao/LobsterAI/issues/1319) | 2 评论 | ✅ PR #1320 已合并 |
| [#1314 拖拽调整侧边栏宽度](https://github.com/netease-youdao/LobsterAI/issues/1314) | 2 评论 | ✅ PR #1315 已合并 |
| [#1317 侧边栏按钮显示快捷键 kbd 提示](https://github.com/netease-youdao/LobsterAI/issues/1317) | 2 评论 | ✅ PR #1318 已合并 |
| [#1311 表格换行+长文本 hover 展示全文](https://github.com/netease-youdao/LobsterAI/issues/1311) | 2 评论 | 无对应 PR |

**深层诉求**：这组 Issue 集中暴露了**前端交互细节打磨不足**——启动闪烁、宽度固定、快捷键不可发现、复制无反馈。用户核心痛点是"**应用是否处于加载中、操作是否生效**"的不确定性。

---

## 🐛 Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题描述 | 状态 |
|---|---|---|
| 🔴 **严重（缓存回归）** | 重复计算 aggregate budget 导致 DeepSeek 长会话 prefix cache 命中率 ~100% → ~57%，直接推高成本与延迟 | ✅ 已修复（PR #2413 / #2415） |
| 🟠 中等（协议泄漏） | 侧聊结果中工具调用标记未清洗，存在协议级信息泄漏风险 | ✅ 已修复（PR #2414） |
| 🟡 轻微（UI 假死） | 切换设置页签后弹层残留，界面看起来"只读" | ✅ 已修复（PR #1321） |
| 🟡 轻微（体验） | 站点 URL/共享码复制无反馈 | ✅ 已修复（PR #2417） |

> **项目健康度**：全部已知 Bug 已在当日或历次迭代修复，**无未修复的活跃 Bug**，且均为非崩溃类问题。

---

## 🧭 功能请求与路线图信号

### 已入主线（对应 PR 已合并，大概率进入 2026.7.31 / 下一版本）：

- **拖拽调整侧边栏宽度**（180~480px 范围）— PR #1315 已实现，含拖拽手柄 + 全局事件清理
- **快捷键可视化 kbd 提示**（macOS ⌘/⌥/⇧ 与 Win/Linux Ctrl/Alt 平台感知）— PR #1318 已实现
- **会话列表骨架屏加载态**，区分"加载中"与"空状态" — PR #1320 已实现

### 信号较弱（仅有 Issue，无对应 PR）：

- **表格换行带原始标签 + 长文本 hover 展示全文**（#1311）— 由于提交者未附对应 PR，4 个 stale Issue 中唯一功能未落地项，建议维护者主动评估。

### 待合并（1 个）：

- [#2234 fix(openclaw): cron yield descendant finalization](https://github.com/netease-youdao/LobsterAI/pull/2234) — 修复 cron 场景下子 agent 完成后父 agent 无法恢复执行的问题，含 yield continuation 循环。⚠️ 该 PR 已打开 1 个月以上，今日标记为 stale，若未及时处理可能被自动关闭，**需优先关注**。

---

## 🗣 用户反馈摘要

从 Issue #1311 / #1314 / #1317 / #1319 中提炼：

**真实痛点：**
1. **启动闪烁与数据丢失焦虑**："应用启动时会话列表直接显示'暂无会话'，用户会误以为历史记录丢失"（#1319）
2. **固定宽度损害可用性**："小屏用户侧边栏占用比例过大，大屏用户希望显示更多会话标题"（#1314）
3. **快捷键发现成本高**："新用户需进入设置页才能发现 Ctrl+N / Ctrl+F"（#1317）
4. **长文本截断无法识别**："会话标题过长截断后用户无法判断内容"（#1314）

**值得注意**：用户对**交互细节**（拖拽范围 180~480px、kbd 默认 50% 透明度、淡入动画）提出了**相当专业的建议**，提交者水平较高（MaoQianTu 一人贡献 3 个高完成度 PR），社区有潜力吸纳更多深度用户。

---

## 📋 待处理积压

| 条目 | 类型 | 创建日期 | 最后活跃 | 优先关注理由 |
|---|---|---|---|---|
| [#2234 cron yield descendant finalization](https://github.com/netease-youdao/LobsterAI/pull/2234) | PR | 2026-06-30 | 2026-07-31 | ⚠️ 已打开超 1 个月，修复 cron 子 agent 完成事件不驱动父 agent 的关键缺陷。今日已被标记 stale，若两周内无动作将自动关闭 |
| [#1311 表格换行/hover 展示全文](https://github.com/netease-youdao/LobsterAI/issues/1311) | Issue | 2026-04-02 | 2026-07-31 | 已关闭（stale），但功能需求真实存在且无对应实现，建议移入 backlog 手动跟踪 |

---

## 📊 项目健康度评级

| 维度 | 状态 | 说明 |
|---|---|---|
| **开发活跃度** | ✅ 高 | 当日 11 个 PR 关闭（98% 合并率），5 个为实质级改动 |
| **Bug 响应速度** | ✅ 及时 | 缓存命中率回归当日发现、当日修复（#2413→#2415 同源双保险） |
| **需求闭环率** | ✅ 良好 | 4 个功能类 Issue 中 3 个已由对应 PR 落地，闭环率 75% |
| **积压健康度** | ⚠️ 需关注 | 1 个关键 PR（#2234）面临 stale 关闭风险，建议维护者立即响应 |
| **用户体验投入** | ✅ 增强 | 骨架屏、拖拽宽度、kbd 提示等细节优化密集落地 |

**结论**：LobsterAI 处于高质量迭代窗口期——核心稳定性修复（缓存/协议）与前端体验打磨（侧边栏/加载态）双线并进。唯一风险点是 #2234 的 stale 状态可能让一个已完成的 cron 修复功亏一篑，建议维护团队优先评审。

---

*日报生成时间：2026-08-01 | 数据源：netease-youdao/LobsterAI GitHub 仓库*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-01

## 今日速览

项目活跃度处于**中等偏上**水平。过去24小时内产生了 2 条 Issue 更新和 6 条 PR 更新，其中两条由外部贡献者（tsauvajon）提交的**安全加固 PR 是今日最大亮点**，直接针对任意文件写入与节点配对验证两个关键安全短板。功能开发层面，Nostr NIP-29 群聊支持和 Markdown 导出/复制的 PR 已合并关闭，核心合并链持续推进。社区侧，新增 [#1181](https://github.com/moltis-org/moltis/issues/1181) 报告了 GPT 5.6 Luna 模型的使用问题，而 [#1131](https://github.com/moltis-org/moltis/issues/1131) 的 Markdown 复制/导出功能请求也随 PR #1176 的合并正式落地。无新版本发布。

---

## 项目进展

今日**合并/关闭 2 项 PR**，均代表项目实质性的功能推进：

- **[#1168](https://github.com/moltis-org/moltis/pull/1168) — feat(nostr): add NIP-29 group chat support for Buzz channels（已合并）**：为 `moltis-nostr` 新增了 NIP-29 群聊协议支持，使 Moltis 能够接入 Block 开源工作区产品 Buzz 的团队频道，这是项目在**多平台群组协作**方向的重大补强，AI 代理与人类成员将能在同一频道内以平等身份协作。

- **[#1176](https://github.com/moltis-org/moltis/pull/1176) — feat(web): add Markdown copy and session export（已合并）**：实现了两个用户高频请求的功能——复制助手回复时保留原始 Markdown 格式（含实时与持久化回复），以及在会话级别一键导出完整分页历史为 Markdown 文件。直接回应了 Issue [#1131](https://github.com/moltis-org/moltis/issues/1131) 的用户请求，提升用户对对话内容的可保存性与可复用性。

两项合并分别覆盖**连接层协议扩展**与**前端用户体验**，使 Moltis 既打通了新的协作生态，又补齐了日常使用的关键拼图。


## 社区热点

今日活跃讨论集中在以下安全与对话相关议题：

- **[PR #1179](https://github.com/moltis-org/moltis/pull/1179) — fix(gateway): verify node pairing signatures**：外部贡献者 tsauvajon 在提交说明中明确指出"希望在自己正式使用 Moltis 之前把安全修复搞定"，表达了将项目投入生产环境的期望。该 PR 修复了节点配对验证中的签名校验缺陷：将 `node.pair.verify` 绑定到服务器签发的待处理请求上，防止调用方自行提供密钥或挑战值。作者在 #1180 的修复基础上继续提交，形成了一波集中的安全加固攻势。

- **[Issue #1181](https://github.com/moltis-org/moltis/issues/1181) — [bug]: Issue with GPT 5.6 Luna**：新报告的使用问题，目前尚无评论或复现信息，需维护者跟进确认是否为新模型兼容性问题。

- **[Issue #1131](https://github.com/moltis-org/moltis/issues/1131) — [feature]: Add copy + export as Markdown（已关闭）**：该功能请求获得 1 个 👍，随着 #1176 的合并已关闭，成为当日"从需求到交付"完整闭环的典型。


## Bug 与稳定性

今日报告 1 条新 Bug，另有 2 条安全修复 PR 正在审查中：

| 严重程度 | 描述 | 状态 |
|---------|------|------|
| **高（安全）** | **Zip 解压与 HuggingFace 模型路径任意文件写入漏洞** — 恶意 zip 或模型仓库可覆盖用户信任的配置文件（config、credentials、scripts），进而获得代码执行能力（[PR #1180](https://github.com/moltis-org/moltis/pull/1180)） | 🔧 待合并修复 |
| **高（安全）** | **网关节点配对签名验证缺失** — 调用方可自行提供密钥或挑战值，绕过服务器签发流程（[PR #1179](https://github.com/moltis-org/moltis/pull/1179)） | 🔧 待合并修复 |
| **中（功能）** | **GPT 5.6 Luna 模型使用异常** — 新报告，暂无详情，需作者补充会话上下文（[Issue #1181](https://github.com/moltis-org/moltis/issues/1181)） | ⚠️ 待确认 |

两条安全修复 PR 均来自同一外部贡献者 tsauvajon，其在提交说明中明确表达了"修复后才敢在自己的环境中使用"的态度，侧面反映出这些漏洞对真实用户的信任门槛影响。**建议维护者优先 review 这两条 PR**。


## 功能请求与路线图信号

- **[#1131](https://github.com/moltis-org/moltis/issues/1131) Markdown 复制与会话导出** — ✅ **已交付**，随 PR #1176 合并落地，属于典型的高频需求快速兑现。

- **[#1158](https://github.com/moltis-org/moltis/pull/1158) Zvec 向量数据库内存后端**（feat，OPEN）：作者 demyanrogozhin 以实验性质使用 vibe-coding 方式构建，基于 Zvec + redb，通过 `zvec` cargo feature 门控（在 `full` 特性中默认启用），并支持对接独立的 llama-cpp embedding 服务。该 PR 虽标注 "Just as experiment"，但可能预示社区对**替代性向量存储方案**的兴趣，值得维护者评估是否纳入正式路线图。

- 功能请求与 PR 之间存在双向信号：**Buzz/NIP-29 已经合并**，说明项目对主流协作平台的覆盖正在扩宽；**操作员权限列表**（[PR #1170](https://github.com/moltis-org/moltis/pull/1170)，OPEN）在重构访问控制模型，将"谁能访问"与"谁是操作员"解耦，是安全架构演进的明确信号。

综合待合并的 4 条 PR（#1170 访问控制、#1179/#1180 安全修复、#1158 Zvec 后端），下一版本预计将显著提升**安全性与可部署性**。


## 用户反馈摘要

- **安全顾虑是真实用户的上手门槛**：外部贡献者 tsauvajon（提交了两条安全修复 PR）明确表示"我想用 Moltis，但得先把几个安全问题修了才敢用"。这是很强的信号——**安全信任度直接影响用户采用决策**。具体痛点集中在恶意模型仓库/zip 导致的任意文件写入漏洞，以及节点配对过程中的签名验证缺失。

- **Markdown 复制与导出是长期诉求**：Issue #1131 自 6 月 17 日提出，历时约 6 周关闭，👍 1 次支持。用户对保留原始 Markdown 格式（而非纯文本）有明确要求，同时对长会话的完整历史导出也有需求——PR 实现中专门处理了分页加载的完整会话记录。

- **Zvec 内存后端的"vibe-coding"实验**（[PR #1158](https://github.com/moltis-org/moltis/pull/1158)）反映了社区用户**偏爱灵活自选组件**的倾向——作者没有等待官方实现，而是自己组合了 Zvec + redb + llama-cpp 的定制方案。这种"自己动手"的做法，一方面证明 Moltis 的模块化设计友好，另一方面也提示官方在后端可插拔性方面有进一步打磨的空间。


## 待处理积压

- **[PR #1158](https://github.com/moltis-org/moltis/pull/1158) — feat(memory): add zvec vector database memory backend**：已开放 **15 天**（7 月 17 日发起，最后一次更新 7 月 31 日），尚无维护者明确表态。作者投入了实际配置与代码工作，长期沉默可能导致贡献者流失。建议维护者评估其架构合理性并给出明确方向。

- **[Issue #1181](https://github.com/moltis-org/moltis/issues/1181) — GPT 5.6 Luna 使用问题**：新报告，0 评论，尚无维护者跟进。因涉及新模型兼容，建议尽快回应以避免用户困惑。

- **[PR #1170](https://github.com/moltis-org/moltis/pull/1170) — fix(channels): gate /sh and privileged tools behind a per-account operators list**：已开放 **6 天**，修改涉及命令、回调、队列回放、聊天执行、外部接口等多条执行路径的权限边界，改动面较大，需要维护者分配足够时间进行 review。


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-01

> 数据来源：github.com/agentscope-ai/CoPaw（含子项目 QwenPaw）

---

## 1. 今日速览

过去 24 小时 CoPaw 项目社区活跃度**高**，但健康度**喜忧参半**。核心代码库 24 小时内产生 18 条 Issue 与 38 条 PR 更新，无新版本发布。正面信号是 Bug 修复速度显著提升——今日至少 8 个已报告 Bug 有对应的 fix PR 在途或已合并，且首次贡献者参与度极高（38 条 PR 中 6 条来自 first-time-contributor）。负面信号是暴露出一批**框架层系统性问题**：`agent.json` 系统级损坏（#6520）、`spawn_subagent` schema 设计缺陷（#6588）、shell 命令超时机制失效导致 UI 冻结与会话阻塞（#6608/#6589）、以及与 agentscope 上游版本的兼容性断裂（#6612）。这些问题集中在 Windows 桌面端与长会话场景，提示核心质量与跨平台稳定性是当前最大短板。社区侧，用户对工作区文件快捷访问（#6083，已获 PR #6306）、全局热键悬浮窗（#6568 → PR #6607）等体验增强呼声较高且已有实现，积极信号明确。

---

## 2. 版本发布

今日无新版本发布（最新仍为 2.0.1 / 2.0.0.post2）。但上游依赖 `agentscope==2.0.4.post1` 已更新，且 QwenPaw 2.0.1 与其存在兼容性断裂（见 #6612），预计下一个补丁版本将包含相应修复。

---

## 3. 项目进展

**已合并/关闭 PR（关键 3 条）：**

- **[#6573 fix(audio): restore transcription for channel audio messages](https://github.com/agentscope-ai/QwenPaw/pull/6573)**（已合并）— 修复 AgentScope 2.0 迁移后飞书频道音频消息静默转写失败的问题（关闭 #6544）。`AudioContent(data=...)` 未进入转写管道的根因已修复。
- **[#6606 fix(read_file): accept numeric string line ranges](https://github.com/agentscope-ai/QwenPaw/pull/6606)**（已合并）— `read_file` 工具接受数字字符串形式的行范围参数。
- **[#6592 fix(memory): flush Auto-Memory before Scroll context eviction](https://github.com/agentscope-ai/QwenPaw/pull/6592)**（已合并）— 修复 Scroll 上下文策略在自动压缩时绕过 AgentScope 压缩中间件，导致早期会话事件丢失、最终缺失于每日记忆的问题（修复 #6555）。同时避免手动 `/compact` 后重复提交 summarization task。

**值得关注的待合并 PR（重要修复）：**

- [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) — 修复 shell 命令超时硬限制失效与 UI 冻结（修复 #6608/#6589）
- [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) — 修复与 agentscope 2.0.4.post1 的兼容性问题（修复 #6612）
- [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) — 修复 `spawn_subagent` schema 推断错误（修复 #6588）
- [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) — 修复 `agent.json` 系统级损坏问题（修复 #6520）

**综合评估：** 今日关闭 5 个 Issue、11 个 PR 合并/关闭，另有 20+ 个修复/特性 PR 待合并。项目在音频转写、记忆压缩、文件读取等 3 个功能域完成了修复闭环，方向正确。但合并的 PR 多为局部修复，`agent.json` 损坏、shell 超时失效等核心稳定性问题仍未合并，整体而言项目**处于"大量修复在途、尚未落地"的过渡阶段**。

---

## 4. 社区热点

**🔹 热点 1：#6537 — Skill tags disappear on restart（回归 bug，10 评论）**
[Issue 链接](https://github.com/agentscope-ai/QwenPaw/issues/6537)
Skill Pool UI 中设置的标签在重启后消失。问题通过 `PUT /skills/pool/{name}/tags` API 正确保存到 `skill_pool/skill.json`，但在启动或构建时 manifest 协调过程中丢失。这是 #3270 的回归，**评论数高说明社区对配置持久化稳定的诉求强烈**——用户对"保存了却丢失"最敏感。目前无明确 fix PR。

**🔹 热点 2：#6588 — `spawn_subagent` schema 设计缺陷（4 评论）**
[Issue 链接](https://github.com/agentscope-ai/QwenPaw/issues/6588)
`spawn_subagent` 支持单任务模式（`batch=None`），但模型侧工具 schema 将 `batch` 标记为必填，导致前台创建单个子代理失败。**这是框架层 API 设计缺陷**，已获 PR #6609 修复。社区期待快速合入。

**🔹 热点 3：#6612 — 与 agentscope 2.0.4.post1 不兼容（2 评论，但影响面最大）**
[Issue 链接](https://github.com/agentscope-ai/QwenPaw/issues/6612)
安装 `qwenpaw==2.0.1` 后与当前最新 `agentscope==2.0.4.post1` 存在两处运行时故障：主动响应用于 `Msg` 而非 `UserMsg`，以及工具权限死锁。**这是依赖管理层面的系统性问题**，已获 PR #6615 修复。用户需要固定的依赖版本约束或更快的上游适配。

**社区诉求总结：** 三个热点问题的共性诉求是**稳定性和可预期性**：配置不能丢、API 不能拒绝合法调用、不能与上游依赖断裂。这反映出 2.x 版本当前最紧迫的任务是夯实基础，而非堆功能。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| **P0-致命** | [#6520 agent.json 系统性损坏](https://github.com/agentscope-ai/QwenPaw/issues/6520) | `agent.json` 出现 BOM 头、缺少闭合引号、中文双重编码等 20+ 字段分布式损坏，导致系统完全崩溃（Windows） | [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) 已提交 |
| **P0-致命** | [#6612 与 agentscope 2.0.4.post1 不兼容](https://github.com/agentscope-ai/QwenPaw/issues/6612) | proactive 子系统两处运行时崩溃 + 工具权限死锁（`Msg.content` 类型变更） | [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) 已提交 |
| **P0-致命** | [#6608 shell 命令无限阻塞 + 孤儿进程](https://github.com/agentscope-ai/QwenPaw/issues/6608) | 长时 shell 命令绕过 `shell_command_timeout`，阻塞飞书会话 1.5 小时；取消后遗留孤儿子进程，无每频道总超时 | [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) 已提交 |
| **P1-严重** | [#6589 execute_shell_command 大量输出冻结 UI](https://github.com/agentscope-ai/QwenPaw/issues/6589) | 万行级输出一次性渲染阻塞 UI 主线程，强制关闭应用（Windows 11） | [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) 已提交 |
| **P1-严重** | [#6537 Skill tags 重启后消失](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 已保存的 tags 在 startup manifest 协调时丢失（#3270 回归） | 无 |
| **P1-严重** | [#6588 spawn_subagent 单任务模式不可用](https://github.com/agentscope-ai/QwenPaw/issues/6588) | schema 将 `batch` 标记为必填，导致合法调用被拒绝 | [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) 已提交 |
| **P2-中等** | [#6601 无空响应错误上报](https://github.com/agentscope-ai/QwenPaw/issues/6601) | 长会话窗口逼近上限时模型空响应，QwenPaw 不报错、不恢复 | 无 |
| **P2-中等** | [#6614 微信 cron 推送静默失败](https://github.com/agentscope-ai/QwenPaw/issues/6614) | cron 任务显示 success 但微信侧 `ret=-2`（context_token 失效），自 7/27 起从未真正送达，消耗 ~44M tokens 重试 | 无 |
| **P2-中等** | [#6512 shell 大输出截断](https://github.com/agentscope-ai/QwenPaw/issues/6512) | >30 KB 输出被截断，偶发 `Internal error`，无法获取完整结果 | 无 |
| **P2-中等** | [#6555 Dream 记忆丢失早期会话事件](https://github.com/agentscope-ai/QwenPaw/issues/6555) | 早期会话被上下文压缩滚动出窗口后，Dream 进程生成每日记忆时遗漏 | [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) 和已合并的 [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) |
| **P3-轻微** | [#6558 多会话 UI 数据完整性](https://github.com/agentscope-ai/QwenPaw/issues/6558) | 切换模式/会话时消息丢失、指令漂移、回复从头重新渲染 | 已关闭（可能已修复，需验证） |
| **P3-轻微** | [#6529 ACP 响应缺 models 字段](https://github.com/agentscope-ai/QwenPaw/issues/6529) | 外部客户端无法发现可用模型 | 已关闭 |
| **P3-轻微** | [#6549 桌面端输入框被遮挡](https://github.com/agentscope-ai/QwenPaw/issues/6549) | Windows 10 高分辨率/缩放下输入框不可见 | 已关闭 |

---

## 6. 功能请求与路线图信号

**已有实现 PR 的功能请求（大概率进入下一版本）：**

| 功能请求 | 对应 PR | 分析 |
|----------|---------|------|
| [#6083 桌面端工作区目录快捷访问](https://github.com/agentscope-ai/QwenPaw/issues/6083) | [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) | 在 Desktop 侧边栏添加工作区文件夹快捷入口，解决非技术用户手动导航目录的问题。**已提交 10 天仍在 review，建议加速。** |
| [#6568 全局热键快速输入悬浮窗](https://github.com/agentscope-ai/QwenPaw/issues/6568)（由 PR #6607 推断） | [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | 类豆包风格全局热键（默认 alt+space）呼出无边框置顶输入窗口。**典型的"快进快出"交互场景，产品方向正确。** |

**暂无实现但需求明确：**

| 功能请求 | 分析 |
|----------|------|
| [#6083 工作区产出物一键直达/下载](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 用户期望"最近产出物"入口，当前 PR 仅提供目录跳转，下载/预览能力未覆盖 |
| [#6160 内置 Python 运行环境](https://github.com/agentscope-ai/QwenPaw/issues/6160) | Windows 用户无系统 Python 时无法执行生成的脚本，期望复用 QwenPaw 自带解释器。**对非技术用户门槛影响大** |
| [#6260 结果呈现折叠（思考和工具调用可折叠）](https://github.com/agentscope-ai/QwenPaw/issues/6260) | 用户更关注交付结果而非过程，当前过程占满全屏、结果被淹没。**UI/UX 优先级高** |
| [#6587 桌面应用名称简化（去 "Desktop" 后缀）](https://github.com/agentscope-ai/QwenPaw/issues/6587) | 小改动，可快速解决 |

---

## 7. 用户反馈摘要

**🔸 满意度最高：** 飞书音频转写修复（#6573 已合并）——用户 yguangg 报告的音频静默失败问题当日即被修复，响应速度快。**🔸 满意度最低：**

- **配置丢失引发信任危机**（#6537）：用户 Ra-M497 明确表达沮丧——设置保存了却重启即失，"最后一步 UI 状态和实际落盘状态不一致"是用户最难以接受的行为。
- **静默失败的信任损耗**（#6614）：angelozb 报告微信 cron 推送从未真正送达但显示 success，且已消耗 ~44M tokens 重试，这是"最危险的失败模式"——用户以为功能在工作，实际完全失效。
- **"系统坏了"的无力感**（#6520）：easyaha 报告 `agent.json` 系统性损坏导致"complete system failure"，Windows 文本编辑器/同步工具隐式添加 BOM 是根因之一，说明**跨平台文件兼容性需从框架层加固**。
- **长会话体验瓶颈**（#6601）：rerbin 报告长会话逼近上下文上限后彻底无响应且无提示，用户处于"无声死锁"状态。

**🔸 典型使用场景：** 股票分析报告生成（#6512）、TeslaMate 数据迁移（#6555）、日常微信定时推送（#6614）、飞书频道群聊（#6608）、外部 Agent 客户端集成（#6529）。用户群体画像为一进步的中小型开发团队/个人开发者，将 QwenPaw 作为日常自动化工作流的基础设施，**对稳定性要求极高**。

---

## 8. 待处理积压（需维护者关注）

**长期未响应/未解决的 Issue：**

| Issue | 创建时间 | 距今 | 状态 |
|-------|----------|------|------|
| [#6083 桌面端工作区目录快捷访问](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 2026-07-14 | 18 天 | 有 PR #6306，长期 review 未合并 |
| [#6160 内置 Python 运行环境](https://github.com/agentscope-ai/QwenPaw/issues/6160) | 2026-07-16 | 16 天 | 无 PR，4 评论 |
| [#6537 Skill tags 重启消失](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 2026-07-28 | 4 天 | 10 评论高热度，无 fix PR |
| [#6614 微信 cron 静默失败](https://github.com/agentscope-ai/QwenPaw/issues/6614) | 2026-07-31 | 1 天 | 已消耗 ~44M tokens，需紧急响应 |
| [#6302 provider 统一发现/路由/模型管理大 PR](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 2026-07-21 | 11 天 | 大 PR（#6167），长期未合并 |

**风险提示：** #6302 和 #6306 两个 PR 均未合并且时间较长，考虑到 UI/UX 和 provider 管理是下一个版本的核心体验，建议维护者明确时间线。#6614 微信静默失败消耗 token 巨大，建议优先排查 context_token 机制是否与长期会话共存。

---

> **日报总结：** CoPaw 项目目前处于"修复洪峰"阶段——大量问题被报告、大量修复 PR 在途但尚未充分合并。建议维护者优先合入 P0 级修复（#6528、#6615、#6610），随后对 #6537（tag 丢失）和 #6614（cron 静默失败）给出明确响应，以重振社区对稳定性的信心。功能侧 #6607 全局热键和 #6306 工作区快捷访问是明确的体验加分项，建议尽快合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

ZeroClaw 项目今日保持高活跃度，过去24小时内 Issues 与 PR 更新各达50条，其中 PR 待合并39条，Issues 新开/活跃45条，未发布新版本。社区讨论集中在安全加固（RFC 高频出现）、内存架构解耦（Hindsight 7/7 大型 PR 栈）、以及观测性增强三大主线。值得关注的是，今日有两条新 PR（#9604、#9605）由维护者 Audacity88 直接提交，表明核心团队正在亲自处理 Linq webhook 所有权与 Quickstart 配置入口等具体问题；同时，大量 PR 仍处于 `needs-author-action` 状态（Hindsight 系列 PR、OpenAI 兼容端点 #8486 等），反映贡献者响应滞后与维护者评审积压并存。总体而言，项目在架构演进（Wasm-First、插件化、Rust 化）上投入巨大，但社区活跃度与维护容量之间的张力已现端倪。


## 2. 版本发布

**无新版本发布。**


## 3. 项目进展

今日无 PR 被合并，但有一条 PR 被关闭，且多条关键 PR 在持续推进或有维护者动作：

- **PR #9279** `fix(zerocode): measure picker modals by display width` — **已关闭**。修复了 picker 弹窗宽度计算（从 Unicode 标量计数改为终端显示单元格），新增 CJK 回归测试。这是小型 UI 修复，关闭表明已完成处理（可能是合并或超时关闭）。

- **PR #9604** `fix(gateway): enforce Linq webhook alias ownership` — 维护者今日新开，修复 Linq 渠道消息路由至 alias 所有者的权限问题，涉及 `domain:security` 与 `risk:high`。

- **PR #9603** `fix(config): preserve Ollama dev template contracts` — 维护者今日新开，将 Ollama 开发模板迁移至 schema V3，将 endpoint 从 API key 迁移至 `uri` 字段，并新增模板网关测试。

- **PR #9605** `fix(quickstart): collect required webhook settings` — 维护者今日新开，补充 Quickstart 中必需的 webhook `port` 和 `secret` 字段引导，防止错误默认值。

- **Hindsight 内存栈（PR #9063–#9069，7/7 已全部提交）** — 这组大型 PR 已被维护者打回并要求作者修正（`needs-author-action`，维护者注释 2026-07-18）。系列涵盖：① Hindsight HTTP 内存后端/工厂 ② 共享/系统内存层级 + 鉴权 ③ 召回/注入调优 ④（推测）⑤"遗忘/保留 via invalidate PATCH" ⑥异步 retain + Telegram DM 流式裁剪 ⑦ Dashboard 按 agent 后端内存统计。**系列尚未被合并**，且 `size:XL` 提示体积庞大，维护者已介入修正评审意见，但作者多日未响应。

- **PR #9535** `feat(runtime): anchor context compaction to model window ratio` — 标记为 `principal contributor` 与 `p1` 优先级，将上下文修剪从固定 `max_context_tokens` 改为按模型真实 `context_window` 比例锚定，修复大窗口模型静默禁用裁剪的问题。仍处于 `needs-author-action`。

**项目整体判断**：核心团队仍在积极修复安全与配置问题，但大型社区 PR（Hindsight 系列、OpenAI 端点）的合并节奏明显放缓，维护者与贡献者的协作周转期拉长，已形成积压风险。


## 4. 社区热点

在今日活跃的 Issues/PRs 中，评论与反应最集中的如下：

- **[Issue #9048] RFC: Separate conversation history from agent-curated long-term memory**（14 条评论）
  讨论热度最高的议题，要求将会话历史与长期记忆彻底分离。当前运行时、网关、渠道自动保存代码将对话写入通用内存后端作为 `MemoryCategory::Conversation`，与会话生命周期概念混淆。核心诉求是消除两条生命周期路径的耦合。

- **[Issue #9127] RFC: Abstract a `KeySource` trait**（11 条评论）
  对 `#[secret]` 字段（93 个）与 `#[credential_class]` 分类（59 个、5 类）的密钥材料来源进行抽象。希望按部署形态分类管理主密钥，从而在不同部署环境（Docker、systemd、云 KMS）间统一密钥来源。安全领域的高关注度议题。

- **[Issue #7155] RFC: Per-execution confirmation tier for high-risk shell commands**（9 条评论）
  提出在 shell 工具的 `allow/ask/deny` 三级策略之间增加更细粒度的确认层级，避免全有或全无的粗粒度授权。被标注 `priority:p1` 与 `risk:high`，讨论已持续两个月（6 月初创建）。

- **[Issue #8933] RFC: Add cross-turn conversation correlation to OTel export**（9 条评论）
  提议在 OpenTelemetry 导出中携带 `gen_ai.conversation.id`，将跨会话回合关联到统一会话 ID。与 #7232 观测性增强提案形成协同。

- **[Issue #9106] RFC: A2A outbound client (A2ATool)**（8 条评论）
  要求实现 A2A 协议的出站方向（对应 v0.8.2 已发布的 A2AServer），使 ZeroClaw 能主动调用外部 A2A 智能体，解锁跨智能体协作。由 #3566 拆分而来。

**诉求分析**：社区对"架构清晰度"（记忆/会话分离）、"安全细粒度控制"（shell 确认层级、密钥抽象）、"互操作性"（A2A、OpenAI 兼容、OTel 关联）的需求最强烈。多数活跃 RFC 都带有 `needs-maintainer-review` 标签，说明作者在等待维护者给出方向性反馈。


## 5. Bug 与稳定性

今日 Bug 相关的最重要动态如下（按严重程度排列）：

| 严重性 | Issue/PR | 状态 | 说明 |
|---|---|---|---|
| **S2（退化行为）** | **Issue #8973** [Bug]: Landlock blocks shell access to required system files on Fedora — **已关闭** | ✅ 已解决 | Landlock 沙箱在 Fedora 上阻止 shell 访问 `/dev/null`，导致 shell 工具完全失效。此前标记为 `p1` + `risk:high`，今日关闭，修复进展值得确认（关闭原因未标注）。 |
| **S2（退化行为）** | **PR #9037** fix(runtime): strip trailing provider terminal markers — 待合并 | ⏳ 待合并 | `openrouter.default → ai21/jamba-large-1.7` 的 `<eom>` 标记泄漏到会话可见文本与持久历史中。修复将剥离流式响应的终端标记。 |
| **S1（潜在崩溃）** | **Issue #6724** [Bug]: Enabled Signal or Voice Call channel with empty credentials can crashloop the supervisor — **已关闭** | ✅ 已解决 | 空凭据渠道导致 supervisor 每 2 秒重启循环，已关闭，状态 `accepted`。 |
| **安全** | **PR #8918** fix(security): redact Slack tokens in the leak detector — 待合并 | ⏳ 等待维护者 | 维护者已修复投稿分支，将四个新 `unwrap()` 改为静态正则不变量，收窄 token 匹配范围，待评审通过。 |
| **安全** | **PR #9604** fix(gateway): enforce Linq webhook alias ownership — 今日新开 | 🆕 需关注 | 修复 webhook 消息路由到 alias 所有者的安全漏洞，`risk:high`。 |
| **配置** | **Issue #9246** RFC: Preserve Todo tracker configuration during ZeroCode ownership migration — 待处理 | ⏳ 需关注 | PR #9013 的迁移可能丢失 Todo tracker 配置，需在迁移路径中保留配置。 |

**判断**：严重 Bug 大多已修复或有关联修复 PR，其中 #8973（Landlock）与 #6724（crashloop）今日关闭，项目稳定性控制较好。但仍有 **PR #7960**（`execute_pipeline` 绕过 `ToolAccessPolicy` 权限）处于 `stale-candidate`，该漏洞涉及权限逃逸且作者多日未响应，建议维护者重点关注。


## 6. 功能请求与路线图信号

在未来版本（可能为 v0.9.x）中，以下功能请求最值得关注：

| 功能请求 | Issue/PR | 状态 | 纳入可能性 |
|---|---|---|---|
| **OpenAI-compatible Chat Completions 端点** | Issue #8550 + **PR #8486**（已提交） | PR 待合并（`needs-author-action`） | ⭐⭐⭐ 高 — 已有完整实现，只是评审周转中；对生态接入（Open WebUI、LobeChat、LangChain）价值巨大 |
| **上下文压缩锚定模型窗口** | **PR #9535** | 待合并（`principal contributor`） | ⭐⭐⭐ 高 — 修复大窗口模型静默禁用裁剪的缺陷，涉及上下文预算的核心正确性 |
| **Skill 紧凑注入默认化** | **PR #8313** | 待合并（阻塞中？） | ⭐⭐ 中高 — 将全量注入改为按需加载，降低 prompt 上下文消耗，方向明确但 `feat` 大改 |
| **A2A 出站客户端（A2ATool）** | Issue #9106 | RFC 待评审 | ⭐⭐ 中 — 与已发布的 A2AServer 构成完整协议能力，但实现工作量未估 |
| **Shell 命令三级策略** | Issue #7155（`p1`） | RFC 讨论中 | ⭐⭐ 中 — 官方已在推进 `Claude Code-style` 模式，但设计仍处于讨论期 |
| **Per-model 能力与上下文窗口配置** | Issue #7100（`p1`） | RFC 讨论中 | ⭐⭐ 中 — 解决模型能力误报与上下文预算硬编码问题，直观实用 |
| **Wasm-First 插件运行时（默认开启）** | Issue #8135 | RFC 讨论中 | ⭐ 中低 — 架构级重构，涉及构建链与安全模型变革，短期难以落地 |
| **"一切皆插件"统一目录** | Issue #6489（tracker） | 长期方向 | ⭐ 长期 — 将 Integrations 与 Plugins 概念合并，属长期架构路线图 |

**路线图信号**：近期讨论以 `type:rfc` 与 `risk:high` 为高频标签，且大量新增（7 月中下旬）RFC 处于 `needs-author-action` 状态，说明项目正将大量精力投向上层架构设计（记忆、安全、插件化、观测性）。下一版本若合并 OpenAI 兼容端点与上下文修剪修复，将显著增强外部生态接入能力与运行稳定性。


## 7. 用户反馈摘要

从今日活跃的 Issues 评论提炼的社区真实反馈：

1. **记忆系统的长短期边界混乱**（来自 #9048）：社区明确指出"会话历史"与"长期记忆"在生命周期上本质不同，但实现中却被写入同一后端并归为单一类别，导致检索、整理、持久化策略难以分别控制。这反映出**长期运行的部署中记忆膨胀与检索噪声问题的真实痛点**。

2. **沙箱与工具执行冲突**（来自 #8973 评论）：Fedora 用户反馈 Landlock 沙箱开启后 shell 工具因无法访问 `/dev/null` 而完全失败，**"安全措施与实际工具可用性之间的平衡"**是用户对沙箱功能的主要疑虑，修复关闭是积极信号。

3. **多平台支持仍薄弱**（来自 PR #9398）：macOS 与 Windows 测试仍为"advisory"（仅收集失败清单，不设门槛）状态。贡献者与用户对**跨平台行为一致性的期望在上升**，但官方尚未把非 Linux 平台纳入必过 CI。

4. **LLM 输出污染会话记录**（来自 PR #9037）：`<eom>` 标记泄漏到对话历史与下游交付，引起用户对**模型输出卫生处理和渠道渲染鲁棒性**的关注，特别是对非主流模型（如 ai21/jamba）的兼容性。

5. **大型 PR 的评审痛苦**（来自 Hindsight 系列 PR 维护者注释）：维护者需要大幅改写贡献者的安全相关代码（如 #8918 的 `unwrap()` 替换、#9064–#9068 范围修正），说明**社区贡献者的代码质量与项目安全标准之间存在成本摩擦**，评审负担向核心团队倾斜。


## 8. 待处理积压

以下重要议题长期未获维护者或作者的有效推进，需重点提醒：

| 议题 | 停滞时长 | 状态 | 风险说明 |
|---|---|---|---|
| **[PR #9063–#9069] Hindsight 内存栈（7 个 PR）** | 创建于 7/14，维护者 7/18 打回，**至今 14 天无作者响应** | `needs-author-action` | 大型功能（后端 + 层级 + 鉴权 + Dashboard），目前维护者已介入但仍阻塞；若持续无响应，建议维护者明确超时策略或自行接管 |
| **[PR #8486] OpenAI 兼容端点** | 创建于 6/29，`needs-author-action` | ⚠️ 33 天 + | 核心功能 PR，对生态接入意义重大；作者为 REL-mame 也是多份 RFC 的提交者，可能需要维护者主动协调 |
| **[Issue #5907] LSP 支持** | 创建于 4/19，`needs-author-action` | ⚠️ 104 天 + | 长期悬置的 RFC（105 天无实质性推进），对编码工作流价值明确但已边缘化 |
| **[PR #7960] `execute_pipeline` 权限绕过** | 创建于 6/19，`stale-candidate` | ⚠️ 43 天 + | 涉及安全（权限逃逸），已标记 `stale-candidate`，随时可能过期；建议维护者明确处理 |
| **[Issue #6489] "一切皆插件" tracker** | 5/6 创建，`needs-maintainer-review` | 长期方向 | 架构级 tracker，虽然不紧急，但作为顶层路线图文档，长期无维护者回复会让后续子议题缺乏锚点 |
| **[PR #8313] Skill 紧凑注入默认化** | 6/25 创建，无 `needs-author-action` 但无进展 | 未知阻塞点 | 功能改进明确，但 37 天未合并且无 author/maintainer 的明显动作标记 |

**优先级建议**：① 确认 #8973 关闭原因（是否真实修复），② 对 Hindsight 系列 7 个 PR 设置明确的超时截止日期，③ 推进 #8486 的评审与合并（如有依赖问题可考虑手动 rebase 并分拆），④ 对 #7960 的 `stale-candidate` 限期确认，⑤ 在 #8692 maintainer 决策队列中为新 RFC 增加 TTL 机制，避免无限期积压。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*