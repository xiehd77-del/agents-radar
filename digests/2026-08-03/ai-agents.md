# OpenClaw 生态日报 2026-08-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-03 02:56 UTC

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

# OpenClaw 项目日报 — 2026-08-03

## 1. 今日速览

OpenClaw 项目今日继续保持极高活跃度，24小时内产生 500 条 Issue 更新与 500 条 PR 更新，其中新开/活跃 Issue 452 条、待合并 PR 361 条，社区反馈与贡献者参与均处于高位。项目发布了 `v2026.7.2-beta.7` 版本，核心亮点是引入了面向持久化数据的**隔离存储（quarantine store）**机制，显著增强了崩溃恢复与 schema 升级安全性。值得关注的是，P0 级 Issue #115421（schema 降级恢复可能清空状态数据库导致定时任务丢失）仍在开放状态，且多个高热度问题（如 DeepSeek 静默失败、实时语音状态泄漏）持续吸引维护者与社区讨论，稳定性治理仍是当前重点。

---

## 2. 版本发布

### v2026.7.2-beta.7
**发布时间：** 2026-08-03（持续更新中）

**核心更新内容（Highlights）：**

- **状态安全与恢复机制（State safety and recovery）**：
  - 引入**隔离存储（quarantine store）**——当主数据库损坏时，持久化数据可被安全隔离保存，不随主库丢失。
  - **崩溃可恢复的 SQLite 快照**：支持从崩溃中自动恢复数据库快照，降低数据损坏风险。
  - **崩溃持久的文件系统发布**：确保文件系统层面的数据发布在崩溃后仍保持一致。
  - **schema 升级数据丢失拒绝**：在 schema 升级过程中，若存在数据丢失风险，系统将主动拒绝升级，保护用户数据。
  - **回滚写入者快照恢复**：支持在 schema 回滚场景下通过快照恢复数据。

**破坏性变更与迁移注意事项：** 由于引入了新的存储安全机制，建议用户在升级前备份状态目录（`state/`）。若使用旧版本打开新版本写入的数据库，可能触发 schema 拒绝逻辑。建议直接升级至本版本并关注首次启动时的迁移日志。

🔗 [v2026.7.2-beta.7 Release 页面](https://github.com/openclaw/openclaw/releases)

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下变更对项目推进具有显著意义：

| PR | 标题 | 类型 | 影响 |
|---|---|---|---|
| [#118379](https://github.com/openclaw/openclaw/pull/118379) | refactor(gateway): compact protocol validator registry | 重构（已合并） | 将 298 个 schema 协议验证器的重复导入与声明压缩，降低维护成本，减少新增 schema 时的改动面。 |
| [#118366](https://github.com/openclaw/openclaw/pull/118366) | refactor: consolidate extension Vitest shard configuration | 测试基础设施（已合并） | 将 19 个扩展测试分片的重复配置统一为共享构建，防止测试配置漂移，提升测试稳定性与维护效率。 |
| [#114411](https://github.com/openclaw/openclaw/pull/114411) | refactor(cli): consolidate security-sensitive regression fixtures | 测试基础设施（已合并） | 合并 CLI 安全回归测试中的重复 fixture，减少维护者审查负担。 |
| [#117843](https://github.com/openclaw/openclaw/pull/117843) | fix(agents): verify delegated writes before reporting success | 功能修复（已合并） | 修复 #67136：写文件工具在返回成功前会校验持久化文件的字节级一致性，避免虚假成功回执。在超时/中断恢复场景下同样生效。 |
| [#117876](https://github.com/openclaw/openclaw/pull/117876) | test(outbound): consolidate recovery fixtures | 测试基础设施（已合并） | 整合 56 个外发恢复测试用例的重复 setup，提升生命周期测试的可维护性。 |
| [#118064](https://github.com/openclaw/openclaw/pull/118064) | fix(line): skip invalid location messages before delivery | 功能修复（已合并） | 阻止带空白标题/地址的 LINE 位置消息进入 API，避免投递失败。 |

**整体评估：** 今日合并的 PR 以维护者主导的**代码质量与测试基础设施重构**为主，体现出项目在功能高速迭代后正主动进行技术债务清理。同时 `write` 工具的成功回执真实性问题得到修复，对依赖文件写入的自动化工作流是一实质性改进。项目整体处于**健康推进状态**。

🔗 [查看全部 PR](https://github.com/openclaw/openclaw/pulls)

---

## 4. 社区热点

今日讨论最活跃的 Issue 反映了社区当前最关切的问题：

### 🥇 [#116277](https://github.com/openclaw/openclaw/issues/116277) — DeepSeek v4 Flash 静默回复失败（87 条评论）
**状态：** 已关闭 | **标签：** P1, 消息丢失, diamond lobster

**核心问题：** 用户通过 Telegram 群组消息触发 DeepSeek v4 Flash 模型，但模型静默失败，仅回退为通用提示 "No reply was generated for this message"。该问题在 7 月 30 日报告后迅速发酵至 87 条评论，为今日最高讨论量。

**社区诉求分析：** 用户对**模型失败时缺少诊断信息**表达了强烈不满——无法辨别是模型故障、配置错误还是网络问题。关联 PR [#116306](https://github.com/openclaw/openclaw/pull/116306) 正是针对此问题：在静默回退消息中**加入 provider 名称**以提供诊断上下文，目前处于 "needs proof" 状态。该 Issue 已被关闭，推测已有修复或 workaround。

### 🥈 [#116201](https://github.com/openclaw/openclaw/issues/116201) — 实时语音会话可无界保留 provider 与 consult 状态（51 条评论）
**状态：** 开放 | **标签：** P1, 会话状态, diamond lobster, 需要维护者决策

**核心问题：** 实时语音会话在慢速、停滞或突发 provider/client 行为下，可能无限保留已过期的 consult 工作、大型 provider 帧和预就绪音频，导致资源泄漏。

**社区诉求解析：** 该问题触及**资源边界与所有权**的设计缺陷，而非简单的 bug 修复。维护者已在评论中参与讨论，但尚未给出产品决策。社区期待对实时语音会话**引入硬性所有权边界**，而非依赖计数或取消信号。

### 🥉 [#115326](https://github.com/openclaw/openclaw/issues/115326) — 崩溃循环熔断器永久抑制 Discord/WhatsApp（26 条评论）
**状态：** 已关闭 | **标签：** P1, 消息丢失, 崩溃循环, diamond lobster

**核心问题：** 崩溃循环熔断器激活后，`channels.start` 恢复路径失效（WebSocket 1006），导致 Discord 与 WhatsApp 通道被永久抑制。已报告的文档恢复方法无法工作。

**社区诉求：** 用户对**恢复路径不可靠**表示失望，期待熔断机制具备自动重置或更清晰的恢复指引。

🔗 [查看更多热门 Issue](https://github.com/openclaw/openclaw/issues)

---

## 5. Bug 与稳定性

以下按严重程度排列今日值得关注的 Bug 报告：

### P0（严重）

| Issue | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | Schema 降级恢复不得隔离/清空状态数据库（定时任务丢失） | 开放 | 无直接 fix，[#113567](https://github.com/openclaw/openclaw/pull/113567)（迁移前快照）部分相关，处于 needs proof |

**分析：** 当旧版本打开高版本 schema 的数据库时，恢复逻辑生成了隔离备份并创建了全新的空数据库，导致用户**定时任务全部丢失**。这是数据丢失级别的严重问题，且与今日发布的 quarantine store 机制高度相关，建议维护者优先评估。

### P1（高）

| Issue | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默回复失败 | 已关闭 | 关联 PR [#116306](https://github.com/openclaw/openclaw/pull/116306)（needs proof） |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音会话无界保留 provider/consult 状态 | 开放 | 无 |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 容器内 PID 复用导致 usage-cost 刷新锁永久无法释放 | 开放 | 无 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex 钩子中继产生 CPU-bound 进程，阻塞网关 RPC | 开放（6月6日报告） | 无 |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | 循环检测仅阻止 exec 但不终止卡死的 agent 运行 | 开放 | 无 |
| [#117956](https://github.com/openclaw/openclaw/issues/117956) | claude-cli 后端绕过 API key 清除，产生 ~1370 万 token 账单 | 开放（8月2日新报） | 无 |

### P2（中）精选

| Issue | 标题 | 状态 |
|---|---|---|
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有持久化会话上下文被硬编码为 128k，与模型无关 | 开放 |
| [#115001](https://github.com/openclaw/openclaw/issues/115001) | 混合记忆搜索 FTS 回退硬编码相似度 1.0，返回虚假高分 | 开放 |
| [#99586](https://github.com/openclaw/openclaw/issues/99586) | 网关操作后 Agent 工具面板返回空白，需重启才恢复 | 开放 |

**稳定性小结：** 今日无新增 P0 级回归，现有 P0 问题集中在 **schema 迁移与数据安全** 领域，与版本发布的 quarantine store 机制形成呼应——社区对该机制的实际效果抱有较高期待。P1 层面，**静默失败与死锁类**问题仍占主导。

🔗 [查看全部开放 Issues](https://github.com/openclaw/openclaw/issues)

---

## 6. 功能请求与路线图信号

今日新增/活跃的功能请求及路线图信号：

| Issue/PR | 标题 | 类型 | 被纳入下一版本的可能性 |
|---|---|---|---|
| [#117721](https://github.com/openclaw/openclaw/pull/117721) | Control UI 实时渲染 Agent 思考事件（thinking events） | 功能 PR（autofix） | **高** —— 已实现并通过 Gateway 事件流驱动，仅需 UI 层渲染，已有关键路径支持，若维护者认可属于低风险高价值改进。 |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | WebChat 文件查看器支持图片预览 | 功能请求 | **中高** —— 社区呼声高（10 条评论），属于 UX 改进，实现范围有限，较易排期。 |
| [#117952](https://github.com/openclaw/openclaw/pull/117952) | Talk 模式等待延迟回复，避免提前播报 "no text" | 功能修复（autofix） | **中高** —— 修复语音交互体验问题，改动范围小，利于提升用户满意度。 |
| [#117509](https://github.com/openclaw/openclaw/pull/117509) | 展示 sessions_yield 等待状态，避免父会话结束无输出 | 功能修复 | **中高** —— 解决实际 UX 问题，已有原型实现。 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 单个 Gateway 支持多个 Azure/Teams Bot | 功能请求 | **中** —— 属于架构级功能扩展，实现成本较高；当前无对应 PR，短期落地可能性较低。 |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | macOS Talk Mode 接入 OpenAI Realtime（语音到语音） | 功能请求 | **中低** —— 需要跨插件架构支持，依赖上游能力，短期排期不确定。 |

**路线图信号判断：** 项目近期重心明显偏向**稳定性与可靠性**（版本发布主题 + P0 问题），功能请求中 **Control UI 与语音体验类**改进获得较多关注。autofix 类 PR 的快速产出也表明项目正尝试通过自动化手段加速闭环。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户反馈：

### 😟 主要痛点

1. **模型失败时缺乏诊断上下文（#116277）：** 用户收到 "No reply was generated" 时完全无法判断是 DeepSeek 故障、密钥失效还是网络问题。社区普遍期待失败消息中包含 **provider 名称与失败原因**。—— *关联 PR #116306 正在尝试解决*

2. **恢复路径不可靠（#115326）：** 崩溃熔断器激活后文档化恢复方法失效（WebSocket 1006），用户被 "永久锁定" 在故障状态，且在等待修复期间无法正常使用 Discord/WhatsApp。

3. **数据安全焦虑（#115421）：** Schema 降级导致定时任务丢失，用户对 "恢复流程反而造成更大损失" 表达了严重的信任危机。虽然隔离备份值得肯定，但**自动创建空数据库**替代原库的行为需要更保守的策略。

4. **上下文长度硬限制（#116010）：** 所有模型被统一限制为 128k 上下文，即使配置了更高 contextTokens 也不生效，影响长对话场景下的使用体验。

5. **CLI 静默回退（#76492）：** `openclaw agent` 命令连不上网关时静默改用嵌入式模式，**掩盖了真实的网关故障**，给诊断带来额外成本。

### 🙂 正面反馈

- 社区对 #117843（写文件前校验）的关闭表示认可，认为是"长期需要的基础保障"。
- 对 #118379（协议验证器压缩）等重构类 PR 的评价为 "干净利落"，对维护者的主动清理表示欣赏。

---

## 8. 待处理积压

以下为长期未响应/未解决的重要 Issue 与 PR，建议维护者优先关注：

### ⚠️ 超 4 个月未解决的高优先级（P1）Issue

| Issue | 标题 | 报告日期 | 存活天数 | 最后更新 |
|---|---|---|---|---|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式无法在 main session 回合中注入消息（P1） | 2026-03-16 | ~140 天 | 2026-08-03 |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | ACP 父会话在等待子会话完成时卡死，需刷新（P1） | 2026-03-22 | ~134 天 | 2026-08-02 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子 Agent 完成投递在超时/清理时可能丢失（P1） | 2026-04-16 | ~109 天 | 2026-08-02 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex 钩子中继 CPU 占用导致网关 RPC 阻塞（P1） | 2026-06-06 | ~58 天 | 2026-08-03 |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | 循环检测无法终止卡死的 agent 运行（P1） | 2026-07-13 | ~21 天 | 2026-08-03 |

### ⏳ 待维护者决策的长期开放 PR

| PR | 标题 | 创建日期 | 存活天数 | 当前状态 |
|---|---|---|---|---|
| [#101777](https://github.com/openclaw/openclaw/pull/101777) | fix(codex): 抑制 sandbox 子进程 stdout/stderr 流错误（P1） | 2026-07-07 | 27 天 | needs proof |
| [#115301](https://github.com/openclaw/openclaw/pull/115301) | fix(msteams): 在 agent 队列前解析审批（P1） | 2026-07-28 | 6 天 | waiting on author |
| [#113567](https://github.com/openclaw/openclaw/pull/113567) | feat(state): 前向 schema 迁移前对状态 DB 做快照 | 2026-07-25 | 9 天 | needs proof |

### 📌 积压分析

- **P1 级 Issue 超长存活已成为常态**：5 个超过 3 个月的 P1 Issue 均无 fix PR 在途，且集中在**会话管理/上下文投递**领域，建议维护者评估是否存在系统性架构缺口。
- **#115421（P0）与 #113567 存在直接关联**：若 #113567（迁移前快照）能早日合并，可在一定程度上缓解 schema 迁移风险。两者之间存在明显的版本联动关系，值得优先推进。
- **autofix 类 PR 量大但合并率不高**：今日展示的 10 个 autofix PR 中仅 4 个已合并（其中 2 个为维护者 steipete 的重构），clawsweeper[bot] 的自动修复需要人工 review 的环节仍是瓶颈。

---

*本日报基于 OpenClaw 公开 GitHub 数据自动生成，数据截至 2026-08-03。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-03**


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**功能高速迭代与稳定性治理并行的深水区**。头部项目（OpenClaw、ZeroClaw）已形成庞大社区规模，日均数百条 Issue/PR 流动，正集中精力解决 schema 迁移安全、消息投递可靠性、静默失败诊断等"规模化的痛"；腰部项目（NanoBot、CoPaw、IronClaw）则呈现出"功能扩展与稳定性加固双线推进"的健康节奏。生态整体呈现明显的**分层格局**——少数超级项目占据主导，大量差异化项目以连接器生态、轻量部署、垂直场景为切入点。共同的技术焦虑集中在**会话状态管理与持久化、多 provider 兼容性、模型失败时的诊断可观测性**三个核心维度。


## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 合并/关闭 | 活跃度评级 | 健康度评估 |
|------|-------------|-----------|---------|-----------|-----------|-----------|
| **OpenClaw** | 452 活跃/500 更新 | 361 待合并/500 更新 | ✅ v2026.7.2-beta.7 | PR 合并且重构为主 | 🔥🔥🔥 极高 | 🟢 健康，技术债务清理中，1 个 P0 待解 |
| **ZeroClaw** | 37 活跃/50 更新 | 40 待合并/50 更新 | ✅ **v0.8.4**（262 commits/49 贡献者） | 10 合并 | 🔥🔥🔥 极高 | 🟢 健康，RFC 决策积压是瓶颈 |
| **Hermes Agent** | 50 更新 | 50 更新 | 无 | 0 合并 | 🔥🔥🔥 高（PR 密集但合并停滞） | 🟡 待合并 PR 量大，1 个 P0 回归（DeepSeek 缓存破坏） |
| **CoPaw** | 9 活跃/10 更新 | 17 待合并/23 更新 | 无 | 6 合并 | 🔥🔥 中高 | 🟡 兼容性危机（agentscope 升级）在途修复 |
| **IronClaw** | 5 新开/6 更新 | 18 待合并/27 更新 | 无 | 9 合并 | 🔥🔥 中高 | 🟢 健康，QA 驱动深度审计，修复闭环快 |
| **NanoBot** | 0 新开 | 7 待审/14 更新 | 无 | 7 合并 | 🔥🔥 中高 | 🟢 健康，p1 修复响应快，测试覆盖意识强 |
| **PicoClaw** | 1 新开/3 更新 | 6 待合并/9 更新 | 无 | 3 关闭 | 🔥 中等 | 🟡 维护者响应滞后，大量 PR/Issue stale |
| **NanoClaw** | 1 新开 | 7 待合并/10 更新 | 无 | 3 合并 | 🔥 中等 | 🟡 SQLite 锁竞争无 fix，合并管线拥挤 |
| **LobsterAI** | 1 活跃/3 更新 | 4 待合并/6 更新 | 无 | 2 关闭 | 🔥 中等 | 🟠 4 条 PR 待合并超 4 个月，核心 Bug 无响应 |
| **Moltis** | 0 | 1 待合并 | 无 | 0 | 🌑 低 | 🟢 稳定，MCP 仓库捆绑功能有分量 |
| **NullClaw / TinyClaw / ZeptoClaw** | — | — | — | — | ⚫ 无活动 | — |

**规模对比注记**：OpenClaw（500/500/日）与 ZeroClaw（50/50/日）是仅有的两个达到"日更数百级"的项目；NullClaw、TinyClaw、ZeptoClaw 当日无活动，暂不纳入后续对比。


## 3. OpenClaw 在生态中的定位

**核心参照地位明确**——OpenClaw 以绝对领先的社区规模（日均 500 Issue + 500 PR，约为第二名 ZeroClaw 的 10 倍）和版本迭代速度（beta 通道周级更新）确立了生态标杆地位。

- **优势**：
  - **规模壁垒**：452 条活跃 Issue 本身构成丰富的问题-修复知识库，吸引更多贡献者形成正循环
  - **技术深度**：隔离存储（quarantine store）、崩溃可恢复 SQLite 快照、schema 升级数据丢失拒绝等机制在存储安全领域明显领先
  - **维护者执行力**：代码质量与测试基础设施重构（协议验证器压缩 298→集约、19 个测试分片统一配置）体现主动技术债管理
  - **生态辐射**：CoPaw 出现与 openclaw 的移植偏差比对（#6626），说明 OpenClaw 的设计决策正被其他项目参照或移植

- **相对短板**：大量 P1 级问题存活超 100 天（如 Steer 模式 140 天、ACP 父会话卡死 134 天），在会话管理/上下文投递领域可能存在系统性架构缺口；autofix 类 PR 合并率不足 40%，自动化修复管线有优化空间。

**与第二梯队的差距**：ZeroClaw（262 commits/版本，49 贡献者/版本）虽有体量，但活跃度约为 OpenClaw 的 1/10；NanoBot 与 IronClaw 则分别在渠道适配与 Rust 工程质量上有单点优势，但整体生态影响力不在同一量级。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 核心矛盾 |
|---------|---------|---------|---------|
| **静默失败与可观测性** | OpenClaw（#116277 DeepSeek 静默）、CoPaw（#6625 误报无文本输出）、PicoClaw（#3311 重复失败静默循环）、Hermes Agent（#77217 DeepSeek 缓存破坏） | 模型/工具失败时用户无法获得可诊断信息（provider 名称、失败原因） | 失败路径的"黑盒"属性与用户排障需求之间的根本张力 |
| **会话状态持久化与恢复安全** | OpenClaw（#115421 schema 降级清库 + quarantine store）、NanoClaw（#3177 SQLite 跨挂载锁竞争）、ZeroClaw（#9519 配置并发写入被覆盖）、CoPaw（#6537 技能标签重启丢失）、Hermes Agent（#53374 Windows 休眠后新建会话） | 状态数据在异常/升级/迁移场景下的持久性、完整性与一致性 | 状态管理在复杂性（schema 演进、并发、跨文件系统）面前的脆弱性 |
| **多 provider/多模态兼容性** | NanoBot（#5214 Responses API 回退、#5216 Gemini Flash 400）、CoPaw（#6612 + #6619 agentscope 兼容崩溃）、Hermes Agent（#77217 DeepSeek 缓存破坏 OpenCode provider）、OpenClaw（#116010 上下文硬编码 128k） | 不同模型/服务商/依赖版本间的差异导致崩溃、死锁或功能降级 | provider 差异的无限性与框架适配的有限性 |
| **死锁与资源泄漏** | OpenClaw（#114234 PID 复用锁死、#106231 循环检测不终止）、IronClaw（#7025 并发协调器重复投递、#7017 恢复覆盖终态）、NanoBot（#5215 子进程清理不彻底） | 分布式/并发场景下资源所有权与生命周期边界不清晰 | 并发正确性需要架构级设计而非局部修复 |
| **CLI/安装/升级体验** | ZeroClaw（#9672 cron 示例全部不可运行）、LobsterAI（#1217 重启网关）、PicoClaw（#3294 命令行为与文档不符）、Hermes Agent（#77211 npm 失败误导） | 文档/命令/安装脚本与真实行为脱节 | 快速迭代中质量门禁未能覆盖所有用户路径 |
| **网络安全与认证边界** | ZeroClaw（#9565 webhook 未认证）、IronClaw（#7016 环境代理绕过 DNS 重绑定保护）、NanoBot（#5216 网关认证） | 入站消息/出站请求的认证与防护存在漏洞 | 安全加固速度与功能扩展速度的不匹配 |


## 5. 差异化定位分析

| 项目 | 定位与目标用户 | 技术架构特征 | 核心差异化 |
|------|---------------|-------------|-----------|
| **OpenClaw** | 全功能个人 AI 助手框架，覆盖多 IM 渠道 + 语音 + 自动化，面向专业用户与开发者 | 多语言/多运行时，插件化扩展，存储安全机制领先 | 功能广度 + 社区规模的绝对领先 |
| **ZeroClaw** | 自主智能体框架，强调 WASM 组件化插件与 RFC 驱动治理，面向企业级/复杂部署 | Rust 核心，WASM 插件隔离，RFC 流程规范化（Work Lanes） | 架构治理透明度 + 安全边界意识 |
| **Hermes Agent** | 个人助手 + 桌面应用（跨平台 GUI），面向日常用户与 BYOK 用户 | 桌面优先，Profile 多配置管理，OAuth 链 | 桌面体验 + 使用量/成本可视化（#77263） |
| **NanoBot** | 轻量级 bot 框架，多 IM 渠道（WeChat、Teams 等），面向个人/小团队 | 模块化（gateway/exec/image 等），强测试文化 | 部署轻量 + 渠道适配广度 |
| **IronClaw** | 自主智能体框架，强调投递可靠性与网络出口安全，面向需要可靠消息投递的生产场景 | **Rust 重写**（区别于项目命名上的 Claw 家族），Wave 2 架构重构改善依赖方向 | 工程质量 + 投递语义严格性（CAS） |
| **CoPaw** | QwenPaw——通义生态绑定的智能体框架，面向中文用户与 Qwen 模型用户 | 依赖 agentscope 核心，控制台/WebUI 完整 | 通义生态原生集成 + 中文社区 |
| **NanoClaw** | 轻量部署的智能体框架（Docker 友好），面向容器化/自托管用户 | 多通道（Signal/Dial/Telegram），Skill 系统 | Docker 优先 + 通道扩展性 |
| **PicoClaw** | 极简/低资源智能体（面向轻量设备和嵌入式），Telegram 为主要使用场景 | 轻量化核心，OpenAI 兼容 | 轻量级运行 + 低门槛 |
| **LobsterAI** | 办公场景智能体（IM 机器人为核心接入），面向企业微信/钉钉用户 | 服务端应用 + IM 集成，CoWork 会话协作 | 办公 IM 深度集成 |
| **Moltis** | MCP 生态基础设施，面向 AI 框架开发者 | MCP 服务器托管/生命周期管理，Vault 集成 | MCP 治理（企业级） |


## 6. 社区热度与成熟度分层

**第一层：超级活跃，质量巩固阶段** —— **OpenClaw、ZeroClaw**
- 社区规模大，贡献者多元化，已有系统性技术债务清理动作（重构 PR 占比高）
- OpenClaw 处于"功能高速迭代后主动清债"阶段；ZeroClaw 处于"v0.8.4 发布后向 v0.9.0 过渡，RFC 决策积压"阶段
- **风险**：P0/P1 长期存活（OpenClaw #115421 无 fix；ZeroClaw 8+ RFC 等待决策）可能消耗社区信任

**第二层：快速迭代，稳定性加固并行** —— **NanoBot、IronClaw、CoPaw、Hermes Agent**
- 日均 10-50 条 Issue/PR，合并率 50% 左右，p1/p2 修复响应快（大部分 24h 内出 PR）
- IronClaw 以 QA 驱动深度审计+同日修复闭环效率最高；NanoBot 测试覆盖意识最强
- **风险**：Hermes Agent 合并率为 0（待合并量大）、CoPaw 依赖兼容性危机需尽快发补丁

**第三层：中低活跃，维护节奏波动** —— **NanoClaw、PicoClaw、LobsterAI、Moltis**
- 日更 <10 条，Moltis 接近静默（但 PR 分量足）
- **风险**：LobsterAI（4 条 PR 搁置 4 个月、核心 Bug 4 个月无响应）、PicoClaw（8 条 PR/Issue stale 8 天）存在社区贡献者流失风险
- **特征**：无此层项目有明显的新版本发布，版本节奏整体停滞


## 7. 值得关注的趋势信号

| # | 趋势信号 | 数据支撑 | 对开发者的参考价值 |
|---|---------|---------|------------------|
| 1 | **状态安全成为基础设施级刚需** | OpenClaw 发布 quarantine store + schema 升级拒绝机制；NanoClaw 曝 Docker 跨挂载 SQLite 锁竞争；ZeroClaw 合入配置写入序列化 | 任何 AI 助手框架的持久化层，必须预研 schema 演进策略与异常恢复路径，不能仅依赖"数据库本身"的可靠性 |
| 2 | **静默失败是用户体验的首要杀手** | 跨 5 个项目出现同类问题（DeepSeek 静默、工具失败无反馈、误报成功），社区诉求高度一致：**失败必须可诊断**（provider 名称、错误码、上下文） | 在 Agent 的每个执行环节（模型调用、工具执行、消息投递）加入结构化错误透出机制，是提升信任度的最低成本手段 |
| 3 | **provider 兼容性是生态扩展的最大瓶颈** | CoPaw 因 agentscope 升级崩溃、NanoBot 为 OpenAI Responses API 做回退、Hermes Agent 缓存功能破坏 DeepSeek 模型、OpenClaw 上下文硬编码 128k | 多模型支持不应通过"逐 provider 打补丁"实现，需要设计**抽象适配层**（协议转换 + 能力降级 + 错误归一化），并建立依赖锁定/回归测试机制 |
| 4 | **开源治理流程开始规范化** | ZeroClaw 提出 RFC 投票机制（#9496）并尝试 Work Lanes；OpenClaw 依赖 autofix 加速闭环；社区对"决策不透明"的不满开始浮出水面（LobsterAI 关闭 Issue 无说明） | 随项目规模扩大，**结构化决策流程**（RFC、投票窗口、决策记录）将成为大型开源项目的必备治理工具 |
| 5 | **桌面端与可观测性成为差异化战场** | Hermes Agent 推桌面端用量/成本面板、安全面板（#77263）；ZeroClaw 提 OTel trace 关联（#7232）；CoPaw 曝慢网络下页面加载超时暴露前端性能债 | "Agent 运行状态可视化"（成本、Token、调用链）正从可选变成必需，是产品化的重要一环 |
| 6 | **MCP 生态加速走向治理化** | Moltis 推 MCP 仓库捆绑（发现/安装/更新/迁移）；NanoClaw 支持远程 Streamable HTTP MCP | MCP 服务器正从"脚本级接入"走向"企业级资产"（类似 npm/pip），**统一发现、认证、版本管理**将成为下一波需求 |
| 7 | **安全审计从"应用层"下沉到"网络出口层"** | IronClaw 发现环境代理变量可绕过 DNS 重绑定保护（#7016）；ZeroClaw webhook 未认证（#9565） | SSRF、DNS 重绑定、代理劫持等**出站网络威胁**在 Agent（自动发起 HTTP 请求）场景下风险倍增，安全设计需覆盖出口链路而非仅入口 |

---

**报告结语**：生态整体处于"**广度扩张后期、深度治理前中期**"的窗口期。头部项目在用庞大社区消化技术债，腰部项目以工程质量换取差异化生存空间。对开发者而言，选择框架的关键不再是"功能多少"，而是"**失败时你能看到什么、恢复时你能保住什么**"——这正是当下所有项目共同打磨的命题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-03

## 1. 今日速览

NanoBot 项目今日活跃度处于**中高水平**。过去 24 小时虽无新 Issue 产生，但 Pull Request 活动密集（14 条），其中 7 条已合并/关闭、7 条待审，显示维护节奏稳定。值得关注的是，今日合并的 PR 集中于 WebUI 时间戳显示（#5217）、WeChat 渠道会话恢复（#5196）以及会话搜索与提及（#5211）等用户体验改进，同时 RTK 命令重写器（#4854）、持续目标门控（#4833）等结构性功能也已落地。此外，4 个新提交的待审 PR（#5214-#5216）聚焦 provider 层兼容性修复，均标注 p1/p2 优先级，表明跨平台稳定性是当前开发重点。项目整体处于**快速迭代、功能深化与稳定性加固并行**的阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日有 7 条 PR 被合并/关闭，按功能领域分类如下：

### WebUI 与前端体验
- **[CLOSED] #5217 fix(webui): show timestamps for replayed messages** — 为回放消息（含 cron/主动消息）显示持久化的创建时间，并在缺少完成元数据时回退到消息创建时间，同时补充了回归测试。解决了重放消息无时间戳的可见性缺口。 [链接](https://github.com/HKUDS/nanobot/pull/5217)
- **[CLOSED] #4822 fix(webui): preserve automation source on streamed replies** — 修复流式回复中自动化来源元数据丢失问题，确保水合后的 WebUI 会话正确显示自动化徽章，并新增前后端回归测试。 [链接](https://github.com/HKUDS/nanobot/pull/4822)
- **[CLOSED] #5194 perf(webui): accelerate JSONL session list and thread loading** — 通过复用活动目录、缓存 workspace-scope 快照等方式加速会话列表与线程加载性能。 [链接](https://github.com/HKUDS/nanobot/pull/5194)

### 渠道适配
- **[CLOSED] #5196 fix(weixin): recover refreshed state after session expiry** — 修复 WeChat 在 `errcode -14` 后 60 分钟暂停期间，若 `account.json` 被刷新，渠道需在暂停结束时重新加载新会话状态，避免长时间无响应。 [链接](https://github.com/HKUDS/nanobot/pull/5196)

### 核心执行与工具链
- **[CLOSED] #4854 feat(exec): add RTK command rewriter** — 新增可选的 `tools.exec.rtk` 配置与 RTK 命令重写器，在 sandbox 包装前执行重写并重新运行 exec 守卫，同时过滤一次性 exec 输出的 RTK hook 提示噪音。 [链接](https://github.com/HKUDS/nanobot/pull/4854)
- **[CLOSED] #4833 Gate sustained goals behind explicit runtime mode** — 将始终可见的 `long_task`/`complete_goal` 工具替换为运行时门控的 `create_goal`/`update_goal`，仅在 `/goal` 或活跃目标轮次注入目标技能提示，并添加动态按轮工具注册。 [链接](https://github.com/HKUDS/nanobot/pull/4833)
- **[CLOSED] #4021 fix(codex): dedup reasoning items before send, retry on duplicate-item 400** — 修复 `openai_codex_provider` 偶发重发已接受的 `reasoning` 项导致 400 错误的问题，在发送前去重并在收到 duplicate-item 错误时重试。 [链接](https://github.com/HKUDS/nanobot/pull/4021)

**小结：** 今日合并内容覆盖了 WebUI 交互细节、渠道稳定性、exec 工具链扩展及多轮对话可靠性，且每项均附有测试，代码质量把控严格。

---

## 4. 社区热点

今日 14 条 PR 中，讨论热度较为平均（评论数均为 undefined 或 0👍）。但从更新时间和优先级来看，以下 PR 受到维护者较多关注：

- **[OPEN] #5214 fix(providers): fall back to chat completions on serde body rejections** (p1) — 针对 OpenAI Responses API 在端点拒绝请求体时对话终止的问题，提出回退到 chat completions 的解决方案。该问题直击多 provider 兼容性痛点，p1 优先级表明影响面较大。 [链接](https://github.com/HKUDS/nanobot/pull/5214)
- **[OPEN] #5215 fix(gateway): close agent resources deterministically on stop** (p1) — 解决停止 gateway 时 exec 会话或 MCP 子进程未清理导致的 asyncio 关闭噪音与停止卡顿问题。 [链接](https://github.com/HKUDS/nanobot/pull/5215)
- **[OPEN] #5216 fix(image): send Gemini Flash hints via generationConfig.imageConfig** (p2) — 修复 Gemini Flash 图像模型因宽高比/尺寸提示导致的 HTTP 400 错误。 [链接](https://github.com/HKUDS/nanobot/pull/5216)

**分析：** 社区当前反馈集中于**多模型提供商兼容性**与**运行时资源清理**两大方向，均为实际部署中高频遇到的技术债，预计近期会有更多相关 PR 或 Issue 跟进。

---

## 5. Bug 与稳定性

今日未报告新 Bug，但存在 **4 个待审的修复 PR** 值得关注，按严重程度排列：

| 严重度 | PR | 问题描述 | 状态 |
|--------|-----|----------|------|
| **P1** | [#5214](https://github.com/HKUDS/nanobot/pull/5214) | OpenAI Responses API 在 serde 反序列化错误时导致对话终止 | 待审 |
| **P1** | [#5215](https://github.com/HKUDS/nanobot/pull/5215) | Gateway 停止时子进程清理不彻底，产生 asyncio 噪音并可卡住停止流程 | 待审 |
| **P2** | [#5216](https://github.com/HKUDS/nanobot/pull/5216) | Gemini Flash 图像模型因提示格式问题报 400 INVALID_ARGUMENT | 待审 |
| **P2** | [#5213](https://github.com/HKUDS/nanobot/pull/5213) | `uv tool` 环境中无 pip，导致 `nanobot plugins enable` 失败 | 待审 |

**已合入的修复：**
- WeChat 会话过期后状态未恢复（#5196，已合入）
- Codex provider 重复 reasoning 项导致的 400 错误（#4021，已合入）
- 流式回复丢失自动化来源元数据（#4822，已合入）

**趋势判断：** 项目对稳定性问题的响应速度较快，p1 类问题 24 小时内即有修复 PR 提出，整体 Bug 闭环效率良好。

---

## 6. 功能请求与路线图信号

今日无新 Issue，但通过 PR 可观察到以下路线图信号：

- **跨会话能力增强（强信号）**：**#5211** 为 OPEN 状态，由外部贡献者 Re-bin 提交，新增 `search_sessions` 与 `read_session` 工具，并集成到 WebUI 的 `@` 提及面板中，允许用户跨会话引用其他对话内容。该功能若合并，将显著提升多会话管理体验，并可能成为下一版本的核心特性。 [链接](https://github.com/HKUDS/nanobot/pull/5211)（需注意此 PR 未标注优先级，建议维护者评估）
- **多模态能力扩展（信号）**：**#5212** 新增 MiniMax 音乐生成功能指引与工具契约发现，配合已有音乐 provider 栈，表明多模态生成方向仍在持续投入。 [链接](https://github.com/HKUDS/nanobot/pull/5212)
- **子代理结果标记（信号）**：**#5152** 为 OPEN 状态，提出为子代理结果附加 `subagent_remaining_count` 元数据，防止模型误判未完成结果。 [链接](https://github.com/HKUDS/nanobot/pull/5152)
- **持续目标特性收敛（已确认）**：**#4833** 已合入，将长任务工具改为运行时门控模式，下一版本将默认不暴露 `long_task`/`complete_goal`，改为按需注入。

**建议：** 将 #5211 的优先级从默认提升至 P1/P2 评估，该功能对日常使用者价值较高。

---

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼，但结合近期 PR 的动机描述，可间接反映用户痛点：

- **WebUI 时间戳缺失（#5217）**：用户在使用重放消息（cron/主动消息）时无法区分消息时间，影响消息审阅与排障，修复后体验将直接提升。
- **WeChat 渠道长时间无响应（#5196）**：`errcode -14` 后渠道暂停 60 分钟，且状态刷新后未能及时恢复，说明渠道层会话管理对真实环境异常（如账号刷新）的适应能力仍需加强。
- **Gemini Flash 图像生成报错（#5216）**：用户在使用 `gemini-3.1-flash-lite-image` 等模型时，因宽高比提示格式问题直接收到 400 错误，提示 provider 差异处理仍是稳定性的关键战场。
- **uv 环境插件管理失败（#5213）**：官方安装脚本可能使用 `uv tool`，但该环境不附带 pip，导致插件启用命令直接失败，对新手用户不友好。

---

## 8. 待处理积压

以下为当前值得关注但尚未响应的 PR/Issue：

### 长期未合并的 PR
| PR | 标题 | 创建时间 | 待审时长 | 说明 |
|----|------|----------|----------|------|
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | fix(codex): dedup reasoning items before send | 2026-05-27 | 约 2.5 个月 | 已关闭（今日标记为 CLOSED），但此前悬置时间较长，反映 codex provider 修复优先级一度偏低 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | fix(subagent): mark partial completion results | 2026-07-28 | 6 天 | 涉及子代理结果完整性，建议尽快安排 review |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | feat(session): add cross-session search and mentions | 2026-08-01 | 2 天 | 新特性，但未标注优先级，建议维护者设定评估周期 |

### 风险提示
- 今日 7 条待审 PR 中，**4 条为 Bug 修复且含 p1/p2 优先级**（#5213-#5216），建议优先处理以避免技术债累积。
- 所有近期 PR 的评论数均为 undefined，难以判断讨论活跃度，建议维护者在 CI/合并流程中增加对讨论状态的显式跟踪。

---

**综合健康度评价：** NanoBot 项目当前处于**快速迭代、功能与稳定性并重**的健康状态。PR 闭合率高（50%），p1 修复响应及时，测试覆盖意识强，外部贡献者活跃（Re-bin、arcdrake22、KDB-Wind 等）。建议下一阶段关注：① 加速 p1 待审 PR 的合并节奏；② 为 #5211 跨会话搜索功能设定明确优先级；③ 持续跟踪 provider 兼容性类问题的回归测试覆盖。

*报告生成时间：2026-08-03 | 数据来源：HKUDS/nanobot GitHub 仓库*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为您的 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 Hermes Agent (github.com/nousresearch/hermes-agent) 2026-08-03 日 GitHub 数据生成的项目动态日报。

---

### Hermes Agent 项目动态日报 (2026-08-03)

#### 1. 今日速览

今日 Hermes Agent 项目活跃度极高，24 小时内新增/更新了 50 条 Issue 和 50 条 PR，显示出强大的社区参与度与贡献热情。虽然无新版本发布，但项目在 **稳定性和安全性** 方面收到了大量高质量的修复 PR，这已成为当前开发的重点。P0/P2 级别的 Bug 报告集中在 **桌面端 (Desktop) 会话管理、网关 (Gateway) 消息投递与身份验证** 方面，且多数已有对应的修复 PR，体现了项目组对关键问题的快速响应能力。整体来看，项目正处于一个以 **“修复回归 + 加固安全边界 + 优化核心体验”** 为核心的密集迭代期。

#### 2. 版本发布
- 无新版本发布。

---

#### 3. 项目进展

今日虽无 PR 被合并，但涌现了大量高质量、直击痛点的待合并 PR。这些 PR 清晰地展示了项目正在修复一批关键的稳定性与安全问题：

- **修复桌面端会话与配置管理：**
  - **[fix(desktop): route messaging settings to active profile (#76913)](https://github.com/NousResearch/hermes-agent/pull/76913)**：修复了桌面端消息平台设置忽略非主 Profile 的问题，防止用户误操作主 Profile 配置，对多 Profile 用户至关重要。
  - **[fix(desktop): keep pin writes safe from stale list pages landing after the ack (#77170)](https://github.com/NousResearch/hermes-agent/pull/77170)**：尝试彻底修复会话“置顶/取消置顶”因竞态条件而失效的问题（对应 Issue #76919）。
  - **[fix: handle display.message_reactions in config.set (#77241) (#77260)](https://github.com/NousResearch/hermes-agent/pull/77260)**：修复桌面端启用“消息反应”功能时，后端因未知配置键而静默失败的问题。
  - **[fix(desktop): prevent code blocks with no tag, text, or yaml from bei… (#77258)](https://github.com/NousResearch/hermes-agent/pull/77258)**：修复桌面端对无语言标记的代码块（如纯文本、YAML列表）错误归类为富文本显示的问题。

- **加固网关 (Gateway) 与投递安全：**
  - **[fix(gateway): recover from stale Weixin context tokens (#74572)](https://github.com/NousResearch/hermes-agent/pull/74572)**：修复企业微信定时消息因 token 过期而发送失败的问题。
  - **[fix(gateway): stop session background delegations (#74609)](https://github.com/NousResearch/hermes-agent/pull/74609)**：修复 Discord 会话中后台任务在 `/stop` 后仍继续运行并产生新消息的问题，确保会话状态一致。
  - **[fix(gateway): prevent import-time plugin discovery from permanently disabling plugins (#77200) (#77252)](https://github.com/NousResearch/hermes-agent/pull/77252)**：修复了插件因导入时机问题导致循环依赖而被永久禁用的问题。

- **增强 CLI 与看板工具：**
  - **[fix(kanban): accept line-wrapped and data-URI base64 in kanban_attach (#77249)](https://github.com/NousResearch/hermes-agent/pull/77249)** 与 **[fix(kanban): add local-path option to kanban_attach (#77250)](https://github.com/NousResearch/hermes-agent/pull/77250)**：两个 PR 分别从“格式兼容”和“性能/可靠性”角度优化了 `kanban_attach` 工具的附件处理方式。

---

#### 4. 社区热点

- **[Issue #71837: fix(desktop): duplicate branch lanes in project sidebar on Windows (#71837)](https://github.com/NousResearch/hermes-agent/issues/71837)**：**Windows 用户**高度关注，6 条评论。该问题导致 Windows 桌面上同一项目的会话在侧边栏出现重复分支，严重影响核心项目管理体验。此问题已存在一周，社区对修复的呼声较高。

- **[Issue #69163: [Bug]: no such gateway 'coder' (#69163)](https://github.com/NousResearch/hermes-agent/issues/69163)**：6 条评论。Profile 迁移功能存在缺陷，导致导入的 `coder` 网关无法被识别，影响了用户的迁移流程。这反映出 Profile 功能的健壮性仍需加强。

- **[Issue #77217: [Bug]: feat(cache): enable DeepSeek caching on OpenCode breaks deepseek-v4-flash ... (#77217)](https://github.com/NousResearch/hermes-agent/issues/77217)**：这是一个 **P0 级别** 的回归问题。一次缓存功能的更新直接导致 DeepSeek 模型在 OpenCode Zen 服务商上完全不可用（HTTP 400 错误）。此问题于今日创建，社区反馈迅速，对项目稳定性构成直接威胁。

- **[PR #77263: feat(usage,security): desktop usage & cost surface + Safety & Security panel (#77263)](https://github.com/NousResearch/hermes-agent/pull/77263)**：这是一个功能丰富的 PR，旨在为桌面端增加使用量与成本展示，并新增安全面板。这回应了用户对**透明度和可控性**的长期需求，是今日最受关注的 PR 之一。

---

#### 5. Bug 与稳定性

**严重级别: P0 (紧急)**

- **[Bug: DeepSeek caching breaks opencode provider with HTTP 400 (#77217)](https://github.com/NousResearch/hermes-agent/issues/77217)**：新引入的缓存功能导致特定模型在特定服务商上彻底不可用，影响严重。相关修复 PR 尚未出现，风险极高。

**严重级别: P2 (高)**

- **[Desktop GUI creates new session after Windows sleep (#53374)](https://github.com/NousResearch/hermes-agent/issues/53374)**：Windows 电脑休眠唤醒后，桌面 GUI 因 WebSocket 断开而错误地创建新会话，导致上下文丢失。该问题已存在一个多月，评论数最多（7条），是**最受关注的稳定性问题**。
- **[Multiplexed gateway routes a user's DMs to a sibling profile's session (#74285)](https://github.com/NousResearch/hermes-agent/issues/74285)**：多 Profile 网关存在严重逻辑漏洞，可能将用户的私聊消息错误路由到其他 Profile 的会话中，是严重的隐私和会话隔离问题。
- **[Cron scheduler needlessly serializes workdir jobs (#73804)](https://github.com/NousResearch/hermes-agent/issues/73804)**：Cron 调度器因设计缺陷，将所有带 `workdir` 的任务强制放入单线程顺序队列，可能导致任务饥饿和效率低下。
- **[`hermes update` skips Node.js refresh after a failed npm install (#77211)](https://github.com/NousResearch/hermes-agent/issues/77211)**：更新机制存在缺陷，一旦 npm 安装失败，后续 `hermes update` 会跳过 Node.js 依赖修复，导致用户被错误提示误导。
- **[Kanban auto-decompose silently reassigns tasks to non-spawnable assignee (#62985)](https://github.com/NousResearch/hermes-agent/issues/62985)**：看板自动分解功能绕过“不可生成”的分配者限制，可能意外启动任务。

**严重级别: P3 (中)**

- 包含多个桌面端问题，如 **[Pin/Unpin 状态被回滚 (#76919)](https://github.com/NousResearch/hermes-agent/issues/76919)**、**[Projects 视图会话重复 (#73889)](https://github.com/NousResearch/hermes-agent/issues/73889)**、**[语音对话仅第一次有效 (#75329)](https://github.com/NousResearch/hermes-agent/issues/75329)** 等。
- 另有 **CLI/安装** 相关问题，如 **[stale .git/shallow.lock 卡住更新 (#75133)](https://github.com/NousResearch/hermes-agent/issues/75133)**、**[arm64 镜像打包错误 (#74554)](https://github.com/NousResearch/hermes-agent/issues/74554)**。

**已有关联修复 PR 的 Bug：**
- #77241 (Message reactions) -> PR #77260
- #76919 (Pin/Unpin reverts) -> PR #77170
- #77215/#77216 (kanban_attach) -> PR #77249/#77250
- #77200 (Plugin discovery) -> PR #77252

---

#### 6. 功能请求与路线图信号

- **桌面端使用量与成本显示：** **[PR #77263 (Usage & Cost Surface)](https://github.com/NousResearch/hermes-agent/pull/77263)** 和 **[PR #77251 (Usage Summary Surface)](https://github.com/NousResearch/hermes-agent/pull/77251)** 都在今日提交，说明“**可观测性**”是当前社区和开发者共同关注的重点，极有可能在下一版本中落地。
- **OpenRouter 全量模型目录：** **[PR #77254 (Opt into full OpenRouter catalog)](https://github.com/NousResearch/hermes-agent/pull/77254)** 允许 BYOK 用户选择使用 OpenRouter 的完整模型列表，这将极大提升模型选择的灵活性，很可能被采纳。
- **桌面端会话列表密度模式：** **[Issue #68119 (Session list density modes)](https://github.com/NousResearch/hermes-agent/issues/68119)** 提议为桌面端增加紧凑/舒适等不同密度视图，以解决会话标题相似难以区分的问题，是一个体验优化方向。
- **Profile 共享 Auth 目录：** **[Issue #29530 (Shared auth home for profiled workers)](https://github.com/NousResearch/hermes-agent/issues/29530)** 提出了为多 Profile 工作进程提供独立的共享认证目录，避免 OAuth 状态分裂，这对安全架构有深远影响。

---

#### 7. 用户反馈摘要

- **Windows 平台体验是主要痛点：** 大量 Issue（#53374, #71837）表明 Windows 桌面端在上休眠恢复、项目管理等基础功能上存在明显缺陷，严重影响了该平台用户的核心使用体验。
- **配置与迁移流程易受挫：** 用户报告了 Profile 迁移后网关失效 (#69163)、更新流程卡死 (#75133)、npm 修复失败误导 (#77211) 等问题，表明安装、配置、升级环节的错误处理和提示信息有待优化，以减少用户的挫败感和困惑。
- **透明度和可控性需求强烈：** 无论是要求显示 Token/成本 (PR #77263, #77251)，还是要求会话/任务管理更可靠（#71837, #62985），都反映出用户希望更清楚地了解 Agent 的运行状态和消耗，并对系统行为有更强的掌控力。
- **社区反馈迅速，修复意愿高：** 对于 P0 的 DeepSeek 回归问题 (#77217)，在 Issue 提交当天就有开发者试图分析并提供解决方案（参见 PR #77260 的模式），体现出社区的高效协作和对项目健康度的责任心。

---

#### 8. 待处理积压

以下 Issue 和 PR 已存在较长时间，且对社区影响较大，提醒维护者重点关注：

- **[Issue #53374: Desktop GUI creates new session after Windows sleep (#53374)](https://github.com/NousResearch/hermes-agent/issues/53374)**: 创建于 2026-06-27，已持续38天，是评论数最多（7条）的 Issue。作为最影响 Windows 用户体验的会话保持问题，亟需官方修复方案。

- **[Issue #29530: Profiled workers need a shared auth home (#29530)](https://github.com/NousResearch/hermes-agent/issues/29530)**: 创建于 2026-05-20，已持续75天，且被标记为 `needs-decision`。该问题涉及多 Profile 场景下的认证架构设计，可能阻碍企业级部署，需要尽快做出架构决策。

- **[PR #40457: feat(qqbot): support send_message MEDIA (#40457)](https://github.com/NousResearch/hermes-agent/pull/40457)**: 创建于 2026-06-06，已持续近两个月且为 `P2` 级别。该 PR 为 QQ 机器人平台补齐了媒体消息发送能力，属于基本功能完善，长时间的搁置可能让 QQ 平台用户感到不满。

- **[PR #60365: docs: prevent adapter-interface drift in gateway docs (#60365)](https://github.com/NousResearch/hermes-agent/pull/60365)**: 创建于 2026-07-07，虽为文档更新，但能有效防止因文档滞后导致的适配器开发问题，建议尽快审阅合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报道日期：2026-08-03** | **数据来源：github.com/sipeed/picoclaw**


## 1. 今日速览

PicoClaw 项目今日整体活跃度**中等偏高**：过去24小时共产生 3 条 Issue 和 9 条 PR 更新，其中 3 条 PR 被合并或关闭，另有 6 条 PR 处于待合并状态。值得关注的是，**核心 Agent 稳定性修复**成为近期主线——社区同时提交了 Issue #3311（工具重复失败导致死循环）和对应修复 PR #3312，且多位贡献者围绕 shell 命令权限控制提交了多项 PR（#3313、#3314），说明 Agent 执行安全与可靠性是社区当前最集中的痛点。此外，多条 PR 和 Issue 已进入 stale（停滞）状态，需要维护者关注或推动。新版本发布方面目前无更新。


## 2. 版本发布

**无新版本发布。**

上次已知版本为 v0.3.1（`2cf030d`）。当前多条 PR 涉及安全性加固（schema v4 配置迁移）和模型路由功能增强，预计将在下个版本中集中体现。建议关注 PR #3297 的合入状态，该 PR 包含配置结构变更（schema v3→v4），可能带来**迁移注意事项**。


## 3. 项目进展

今日共有 3 条 PR 被合并或关闭：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#3313](https://github.com/sipeed/picoclaw/pull/3313) | Fix: agent not able to execute shell command added to customAllowPatterns | 已关闭 | 修复 `customAllowPatterns` 中默认拒绝规则优先于用户自定义允许规则的问题 |
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | Feat/auto pr | 已关闭 | 自动化 PR（由 picoclanker 机器人操作） |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Add zh-TW locale and Traditional Chinese translations（stale） | 已关闭 | 繁体中文（台湾术语）本地化完成 |

其中，#3313 的关闭值得关注——同一位作者 j-v 在数小时内重新提交了 #3314（状态为 OPEN），说明 #3313 可能因流程原因被关闭而非合并，修复本身仍在推进中。zh-TW 本地化 PR 完成关闭，意味着 PicoClaw 的 WebUI 和文档正式支持繁体中文。


## 4. 社区热点

**今日最受关注的问题集中在 Agent 执行失败无反馈的问题。**

- **[Issue #3311](https://github.com/sipeed/picoclaw/issues/3311) — Repeated identical tool failure loops silently to max_tool_iterations**（由 lucapette 提交）
  - 创建于 8月2日，目前已有对应修复 PR #3312 在待合并队列中
  - 用户在 Telegram 生产环境中观察到：Agent 执行 `git` 命令失败后，系统会静默重试直到达到 `max_tool_iterations` 上限，用户始终得不到任何答复
  - 这是典型的"**静默失败**"问题，直接导致用户从产品层面感知为"机器人坏了"

- **[PR #3312](https://github.com/sipeed/picoclaw/pull/3312) — fix(agent): stop turn early on repeated identical tool failure**（由 lucapette 提交）
  - 直接修复上述 Issue 的根因，目前为 OPEN 状态，需要维护者尽快 review

此外，**shell 命令执行权限控制**也是今日高频话题：PR #3313 与 #3314 均为同一修复（customAllowPatterns 不生效），虽然此问题尚未有对应 Issue 报告，但反映出当前版本在执行安全控制上存在的实际缺陷。


## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 修复状态 |
|---|---|---|---|
| **高** | [Issue #3311](https://github.com/sipeed/picoclaw/issues/3311) | Agent 工具重复失败时静默循环至 `max_tool_iterations`，用户永远得不到回答 | 已提交 [PR #3312](https://github.com/sipeed/picoclaw/pull/3312) 待合并 |
| **高** | [PR #3314](https://github.com/sipeed/picoclaw/pull/3314) | `customAllowPatterns` 不生效——默认拒绝规则永远优先于用户自定义允许规则，导致 `git push` 等命令无法执行 | PR 保持 OPEN 待 review |
| **中** | [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` 命令只显示当前模型而非所有已配置模型（stale, 已一周无维护者响应） | 无修复 PR |
| **中** | [PR #3295](https://github.com/sipeed/picoclaw/pull/3295) | `SplitMessage` 在超大围栏代码块头部时挂起（stale） | PR 待 review |

值得警惕的是，**两条高严重度问题均来自真实生产环境**（Telegram 用户），说明 Agent 在执行层（shell 命令、工具调用）的可靠性仍是当前版本的薄弱环节。


## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 分析 |
|---|---|---|
| [Issue #3298](https://github.com/sipeed/picoclaw/issues/3298) | 添加 AI Router 作为 OpenAI 兼容 provider 预设 | 目前用户可以通过 `api_base` 手动配置使用 AI Router，但缺少"开箱即用"的命名预设。贡献者已表明愿意以官方身份贡献此功能，维护成本低、收益明确 |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | 添加 Exa 原生 web search provider | 扩展 PicoClaw 的搜索能力，支持 `d`/`w`/`m`/`y` 时间范围过滤。如果被合入，将丰富工具生态 |
| [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` 应显示所有配置的模型 | 属于产品体验改善，用户期望与命令描述（"Configured models"）一致 |

**预判**：AI Router 预设（#3298）和 Exa 搜索（#3299）均已在老 PR 队列（7月26日创建）中，若项目维护者开始清理 stale 队列，这两个功能有较大概率进入下个版本。


## 7. 用户反馈摘要

- **对 Agent 可靠性的不满**（来自 Issue #3311）："用户永远得不到答案"的生产事故级别体验——工具失败后系统既不向用户反馈错误，也没有提前终止循环，导致用户在 Telegram 上等不到任何回复。这直接影响用户对 PicoClaw 作为助手工具的基本信任。
- **对命令执行安全边界的困惑**（来自 PR #3313/#3314）：一位用户尝试将 `git push` 加入执行白名单（customAllowPatterns），但即便通过所有测试用例，运行时仍然被拒绝执行。用户已明确提交了修复代码但尚未获得 review，这属于**社区贡献需要维护者回应**的典型案例。
- **功能预期与文档描述不一致**（来自 Issue #3294）：用户根据命令描述"Configured models"预期看到所有模型列表，实际却只显示当前模型。这类"产品预期落差"虽然严重度不高，但反应出命令功能定义需要更清晰。


## 8. 待处理积压

以下为长期未获维护者响应的项目，均为 stale 状态（已超过一周），建议维护者优先处理：

1. **[Issue #3294](https://github.com/sipeed/picoclaw/issues/3294)** — `/list models` 命令行为与预期不符（已 stale 8天）
2. **[PR #3295](https://github.com/sipeed/picoclaw/pull/3295)** — SplitMessage 挂起修复（已 stale 8天，含回归测试）
3. **[PR #3296](https://github.com/sipeed/picoclaw/pull/3296)** — 捷克语代码换行标签本地化（已 stale 8天）
4. **[PR #3297](https://github.com/sipeed/picoclaw/pull/3297)** — 安全加固：远程提示与执行边界（已 stale 8天，含 schema v4 迁移，**涉及配置迁移需注意**）
5. **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — Exa web search provider（已 stale 8天）

**项目健康度评估**：社区贡献活跃度高（多人同时提交修复），但维护者响应速度滞后——8天内大规模 PR 进入 stale 状态。高严重度问题（Agent 静默失败、shell 命令权限）已有明确修复代码但均未合入，建议项目维护者优先 review 这批 PR，避免社区贡献流失与用户体验持续受损。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-03

## 1. 今日速览

NanoClaw 项目过去 24 小时活跃度**中等偏上**：共有 10 条 PR 更新和 1 条新 Issue，无新版本发布。值得关注的动态包括：针对 Docker 跨挂载文件系统上 SQLite 数据库锁竞争的严重 Bug 被报告（#3177），这可能是影响容器化部署用户的关键问题；同时，团队核心成员提交了多项修复与功能 PR，包括远程 Streamable HTTP MCP 服务器支持（#3092）和 command-gate 拒绝通知路由修复（#3175），表明项目在连接器生态与底层稳定性两个方向同步推进。已关闭的 3 个 PR（含 2 个功能/修复合并）表明维护节奏正常，但 7 个 PR 仍积压待合并，合并管线略显拥挤。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

今日关闭/合并了 3 个 PR，推进了以下修复与功能：

- **[#3176 — fix(release): retry post-publish readback](https://github.com/nanocoai/nanoclaw/pull/3176)**（核心团队）：修复发布流程中发布后回读校验的可靠性问题，增加重试机制。这一改进将提升发布管道的稳健性，减少因瞬时故障导致的发布失败或误报。
- **[#2626 — fix(signal): replace silent restartService failure with explicit error](https://github.com/nanocoai/nanoclaw/pull/2626)**：修复 Signal 通道设置中 `restartService()` 静默失败的问题。此前当 plist 已卸载时 `launchctl kickstart` 会静默无操作，向导会误报成功；现在会显式报错。关闭 Issue #2583。这一修复提高了设置过程的透明度和可靠性。
- **[#301 — feat(skill): enhance add-telegram skill with Markdown rendering, file downloads, and Linux/Docker guidance](https://github.com/nanocoai/nanoclaw/pull/301)**（Skill 类型）：增强 Telegram 集成技能，新增 Markdown 渲染（HTML parse mode + 纯文本降级）、文档下载支持（≤10MB 保存至 `/workspace/group/uploads/`），并补充 typing indicator 的 `stopTyping()` 调用模式及 Linux/Docker 部署说明。该 PR 历经近 6 个月后关闭，具体状态（合并/关闭）标注为 Blocked + Pending Closure，但带来的技能完善对 Telegram 用户体验有实质提升。

总体而言，项目在**发布管线稳定性**、**Signal/Telegram 通道体验**两个方向完成了收尾工作，增量明确但规模不大。

## 4. 社区热点

今日社区讨论热度较分散，最大的信号来自新开的 Issue：

- **[#3177 — fix: resolve session database lock contention on Docker cross-mount filesystems](https://github.com/nanocoai/nanoclaw/issues/3177)**（作者: DawoudIO，👍 0，评论 0）：该 Issue 报告了会话数据库（`inbound.db`, `outbound.db`）在 Docker 挂载文件系统（macOS/Linux，VirtioFS）上出现严重锁竞争，导致 29,000+ 只读错误和间歇性投递失败。根因指向 SQLite 的 DELETE journal 模式无法跨 Docker 挂载传播。虽然刚创建、暂无评论，但问题的严重性和影响面（容器化部署用户）使其成为**今日最值得关注的社区热点**。

在 PR 侧，已持续近三周的 Dial 频道相关两个 PR（#3050、#3041）仍在待合并队列中，社区对新增 SMS + AI 语音通话频道的关注度持续存在，但无新增互动。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题描述 | 状态 |
|---------|---------|------|
| **高** | **SQLite 数据库锁竞争**（#3177）：Docker 跨挂载文件系统（VirtioFS）上会话数据库 `inbound.db`/`outbound.db` 出现锁竞争，导致 29,000+ 只读错误和间歇性投递失败。影响所有使用 Docker 挂载卷部署的用户。 | ⚠️ 新报告，无 Fix PR |
| **中** | **command-gate 拒绝通知的写入路径违规**（#3175）：`writeOutboundDirect()` 让宿主机直接向会话拥有的 `outbound.db` 写入，违反仓库自身的单写入者不变量（docs/db.md），存在损坏风险。 | 🔧 已有 Fix PR（#3175，OPEN） |
| **低** | **Signal restart 静默失败**（#2626）：已修复并关闭。 | ✅ 已修复（PR #2626） |
| **低** | **发布后回读校验失败**（#3176）：已通过重试机制修复。 | ✅ 已修复（PR #3176） |

**重点关注**：#3177 指向的数据库锁竞争问题目前**没有修复 PR**，且影响面广（所有 Docker 挂载部署），建议维护者优先排查。

## 6. 功能请求与路线图信号

- **远程 Streamable HTTP MCP 服务器支持**（[#3092](https://github.com/nanocoai/nanoclaw/pull/3092)，OPEN，核心团队）：该 PR 为 MCP 服务器增加远程 Streamable HTTP 传输支持。结合 MCP 生态的快速发展，这一能力可能被纳入下一版本，使 NanoClaw 能连接远程 MCP 服务器而不限于本地进程。
- **Dial 频道集成**（[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) SMS + AI voice calls、[#3050](https://github.com/nanocoai/nanoclaw/pull/3050) 频道选择器及技能）：两个相关 PR 均已开放超过三周，功能完整（含频道适配器 + SKILL.md + 设置向导集成），若合并将新增一个完整的通信频道。从 PR 状态看无阻塞标记，可能随时被合并。
- **Top-level context Markdown 统一注入**（[#3090](https://github.com/nanocoai/nanoclaw/pull/3090)，OPEN，核心团队）：修复模板中所有顶层上下文 Markdown 的前置拼接问题，属于模板系统完善类改进，无用户可见的破坏性变更。
- **移除 qodo 技能**（[#3172](https://github.com/nanocoai/nanoclaw/pull/3172)，OPEN，核心团队）：清理已废弃的 qodo 相关技能，属代码库卫生维护。

## 7. 用户反馈摘要

今日新 Issue 中的用户痛点非常明确：

- **Docker 部署用户的数据库稳定性痛点**（#3177）：在 macOS/Linux 上通过 Docker 挂载卷运行 NanoClaw 的用户面临**严重锁竞争**，表现为大规模只读错误和消息投递失败。根因是 SQLite DELETE journal 模式与 VirtioFS 不兼容。用户将问题定位清晰（跨挂载文件系统的 journal 模式传播失败），说明受影响的用户有较强的技术背景和排障能力。该问题长期存在将直接影响容器化用户的信任度。
- **Signal 设置流程对 macOS 用户的误导**（#2626，已修复）：当 plist 已卸载时，`launchctl kickstart` 静默失败，向导误报成功，用户会困惑于服务实际未运行。修复后明确报错，提升设置体验。
- **Telegram 技能对 Markdown 与文件传输的明确需求**（#301，已关闭）：用户需要 HTML parse mode 的 Markdown 渲染、文件/文档下载支持，以及 Linux/Docker 环境的使用说明——反映出 Telegram 用户群中容器部署比例不低。

## 8. 待处理积压

以下 PR/Issue 长期未得到响应或合并，需要维护者关注：

| 项目 | 创建时间 | 等待时长 | 说明 |
|------|---------|---------|------|
| [#2625 — fix(teams): set supportsFiles: true in Teams manifest](https://github.com/nanocoai/nanoclaw/pull/2625) | 2026-05-27 | **68 天** | 修复 Teams 频道 `supportsFiles: false` 导致文件上传 UI 禁用和 `send_file` 投递被静默丢弃的问题。修复简单但影响用户明确，长期未合并。 |
| [#3050 — feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050) | 2026-07-14 | **20 天** | Dial 频道功能完整 PR，已等待超两周。 |
| [#3041 — feat(channels): add Dial channel adapter (SMS + AI voice calls)](https://github.com/nanocoai/nanoclaw/pull/3041) | 2026-07-14 | **20 天** | Dial 频道适配器，与 #3050 配套，功能互补，建议同时审阅。 |
| [#3092 — feat: support remote Streamable HTTP MCP servers](https://github.com/nanocoai/nanoclaw/pull/3092) | 2026-07-19 | **15 天** | MCP 远程服务器支持，核心团队提交，功能价值高。 |
| [#3090 — fix(templates): prepend all top-level context Markdown](https://github.com/nanocoai/nanoclaw/pull/3090) | 2026-07-19 | **15 天** | 模板上下文注入修复，影响所有 SKILL 的上下文组装。 |
| [#3175 — fix: route command-gate denials through the delivery adapter, not outbound.db](https://github.com/nanocoai/nanoclaw/pull/3175) | 2026-08-02 | 1 天 | 修复数据损坏风险 PR，新建但尚未被审阅。 |

**提醒**：#2625 已等待超过两个月，修复内容简单明了，长期搁置会影响 Teams 频道用户的文件传输体验及对项目维护节奏的信心。建议维护者优先处理这批积压 PR，尤其是 #2625、#3175（数据风险）和 #3041/#3050（完整功能待合并）。

---

*本报告基于 2026-08-03 的 GitHub 数据自动生成。数据来源：[NanoClaw](https://github.com/nanocoai/nanoclaw) Issues & PRs。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-03

## 今日速览

IronClaw 过去 24 小时保持高活跃度，共产生 6 条 Issue 更新和 27 条 PR 更新。核心开发团队持续推动 Wave 2 端口反转重构的落地（#7018 合并了四个大型重构 PR），同时 QA 团队（theredspoon）集中报告了 4 个与投递可靠性和网络安全相关的深层缺陷，且均已在同日提交修复 PR，形成了高效的"发现-修复"闭环。值得关注的是，`dependabot` 在一天内提交了 4 个依赖更新 PR，叠加 CI 基础设施的持续打磨（#7019、#7013、#6952），表明项目在功能迭代的同时也在同步强化工程质量。整体评估：**高活跃度、节奏健康**。

- **Issue 趋势**：5 个新开（全部为 QA 报告），1 个关闭（用户反馈的 Staking 页面 UI bug）
- **PR 趋势**：18 个待合并，9 个已合并/关闭
- **当前专注领域**：投递可靠性（delivery durability）、网络安全加固、Wave 2 架构重构、CI 基础设施优化

---

## 版本发布

无新版本发布。


## 项目进展

### 🔥 今日核心合并：Wave 2 端口反转栈整合

[PR #7018](https://github.com/nearai/ironclaw/pull/7018)（已关闭/合并，size: XL, risk: medium）——维护者 BenKurrek 按所有者指示，将四个已充分评审的 Wave 2 端口反转 PR（#7000、#7003、#7004、#7005）合并为单个分支合入 `main`，取代了原本需要四次逐步合并/变基的级联流程。该 PR 的合并标志着以下重大架构进展：

- **`ironclaw_operator` 端口反转完成**（[#7004](https://github.com/nearai/ironclaw/pull/7004)）：`ironclaw_operator` 不再依赖 `ironclaw_product`，完成了产品面端口的依赖方向反转
- **`ProductSurfaceFailure` 关键节点解决**（[#7000](https://github.com/nearai/ironclaw/pull/7000)）：解决了 WS2.1 发现的"最大单一残留术语"——`ironclaw_extension_host` 在 19 个生产文件中使用产品内部工作流错误作为自身生命周期错误词汇表的问题
- **对话/线程命名陷阱修复与附件模块扩展**（[#7005](https://github.com/nearai/ironclaw/pull/7005)）：完成词汇表重命名和一个 crate 扩展

> 此合并标志着 Wave 2 架构重构的重大里程碑——原本分散在四个独立 PR 栈中的变更现已统一落地 `main`，消除了后续迭代的合并负担。

### CI 基础设施与工程质量

- [PR #6952](https://github.com/nearai/ironclaw/pull/6952)（已关闭/合并）— Reborn PR 测试按受影响区域智能化裁剪：为每个 PR 自动规划需运行的包及其传递工作区消费者闭包
- [PR #7007](https://github.com/nearai/ironclaw/pull/7007)（已关闭/合并）— 合并队列失败时自动向 live-canary Slack 频道推送告警
- [PR #7013](https://github.com/nearai/ironclaw/pull/7013)（已关闭/合并）— 恢复原有的 90% 变更行覆盖率门槛，保持 fail-closed 行为

### 功能修复

- [PR #6906](https://github.com/nearai/ironclaw/pull/6906)（待合并，core, human-verified）— 修复项目概览页展示虚构指标的问题，改为仅呈现 API 支持的真实项目数据
- [PR #7026](https://github.com/nearai/ironclaw/pull/7026)（待合并，core）— 修复 `ironclaw serve` 在含旧版 loop 检查点的存储上启动失败的迁移问题


## 社区热点

今日讨论热度主要集中在 QA 团队（theredspoon）提交的一系列投递可靠性与网络安全缺陷报告，以及与之配对的修复 PR。值得注意的特征是：**每个 Issue 都在同日或次日即有对应修复 PR 提交**，且 PR 均明确标注了关联的 Issue 范围。

### 最值得关注的热点：#7031 + #7029 — 投递恢复不在协调器生命周期内重试

- [Issue #7031](https://github.com/nearai/ironclaw/issues/7031)（新开）— QA 报告：失败的延迟投递恢复在协调器生命周期内不会重试
- [PR #7029](https://github.com/nearai/ironclaw/pull/7029)（新开，待合并）— 恢复 durable `Prepared → Sending` 比较-交换作为厂商出口所有权的唯一权威

背后的诉求：这组 Issue+PR 体现了项目对**投递可靠性**的高度重视。QA 发现现有实现中进程内 `in_flight` 权威可能导致重放时无法解析目标状态——这是分布式系统中典型的"单飞"（single-flight）语义问题。

### 讨论热点：#7016 + #7027 — 环境代理变量绕过 DNS 重绑定保护

- [Issue #7016](https://github.com/nearai/ironclaw/issues/7016)（新开）— 环境代理变量可绕过 `ReqwestNetworkTransport` 的 DNS 重绑定保护
- [PR #7027](https://github.com/nearai/ironclaw/pull/7027)（新开，待合并）— 禁用 ambient 代理发现，确保固定目标地址的权威性

### 跨 Issue 关注链：#7025 / #7017 / #7028 — 并发投递与状态覆盖

- [Issue #7025](https://github.com/nearai/ironclaw/issues/7025)（新开）— 并发协调器可发送同一持久投递尝试
- [Issue #7017](https://github.com/nearai/ironclaw/issues/7017)（新开）— 中断投递恢复可覆盖并发的 `Delivered` 状态
- [PR #7028](https://github.com/nearai/ironclaw/pull/7028)（新开，待合并）— 恢复期间保留终态（terminal status）

结合 #7031+7029、#7025、#7017 三条 Issue 线，可以看到 QA 团队对**投递子系统的持久状态转换**进行了系统的并发和故障场景审计——这些发现相互印证，共同指向投递路径上状态机需要更严格的比较-交换（CAS）语义保护。


## Bug 与稳定性

今日报告的 Bug 均来自 QA 团队的深度审计，按严重程度排列如下：

### 高严重度 — 数据一致性 / 安全

| Issue | 问题描述 | 影响 | 修复 PR |
|--------|---------|------|---------|
| [#7017](https://github.com/nearai/ironclaw/issues/7017) | 中断投递恢复可覆盖并发的 `Delivered` 状态 | 已确认送达的消息可能被回滚为未送达状态，导致重复投递或状态丢失 | ✅ [#7028](https://github.com/nearai/ironclaw/pull/7028) |
| [#7025](https://github.com/nearai/ironclaw/issues/7025) | 并发协调器可发送同一持久投递尝试 | 同一消息可能被多次投递，破坏 exactly-once 语义 | ✅ [#7029](https://github.com/nearai/ironclaw/pull/7029) |
| [#7016](https://github.com/nearai/ironclaw/issues/7016) | 环境代理变量（HTTP_PROXY 等）可绕过 DNS 重绑定保护 | SSRF 防护被绕过，恶意代理可拦截/篡改流量 | ✅ [#7027](https://github.com/nearai/ironclaw/pull/7027) |

### 中严重度 — 运维诊断

| Issue | 问题描述 | 影响 | 修复 PR |
|--------|---------|------|---------|
| [#7030](https://github.com/nearai/ironclaw/issues/7030) | `doctor` 诊断中未报告主机代理环境变量被忽略的情况 | 运维人员无法从诊断输出中察觉网络出口被系统代理扭曲 | 暂无（今日新开） |
| [#7031](https://github.com/nearai/ironclaw/issues/7031) | 失败的延迟投递恢复在协调器生命周期内不会重试 | 投递失败后缺少自动重试机制，消息可能长时间停留在中间态 | ✅ [#7029](https://github.com/nearai/ironclaw/pull/7029) |

### 低严重度 — UI

| Issue | 问题描述 | 影响 | 修复 PR |
|--------|---------|------|---------|
| [#7015](https://github.com/nearai/ironclaw/issues/7015)（已关闭） | Staking 页面存在 UI 缺陷 | 视觉效果问题，功能不受影响（用户未提供截图或复现步骤） | 已关闭 |

**QA 模式观察**：theredspoon 的 QA 报告具有极高的专业度——每个 Issue 均标注了验证环境的 commit hash、复现步骤和特性区域。这种严谨的 QA 流程值得肯定，同时也为修复 PR 的快速落地提供了坚实基础。


## 功能请求与路线图信号

今日暂无用户直接提出的新功能请求（#7015 为 UI bug 反馈非功能请求）。但从 PR 动态中可以提取以下路线图信号：

| 信号 | 来源 PR | 可能纳入版本 |
|------|---------|-------------|
| **自定义 MCP OAuth 认证** — 使 `Auto` 托管 MCP 注册通过 RFC 9728 元数据发现完成 OAuth 验证 | [#7024](https://github.com/nearai/ironclaw/pull/7024) | 下一版本 |
| **仅展示 API 真实数据** — 移除项目概览中的虚构指标 | [#6906](https://github.com/nearai/ironclaw/pull/6906) | 下一版本 |
| **投递语义强化** — 持久化 CAS + 终态保留 + 去重抑制 | [#7029](https://github.com/nearai/ironclaw/pull/7029), [#7028](https://github.com/nearai/ironclaw/pull/7028) | 下一版本（likely hotfix） |
| **网络加固** — 禁用环境代理发现、锁定目标地址 | [#7027](https://github.com/nearai/ironclaw/pull/7027) | 下一版本（likely hotfix） |

综合判断：投递可靠性 + 网络安全加固很可能作为 patch 版本优先发布，MCP OAuth 认证与 UI 数据真实性修复预计进入下一个 minor 版本。


## 用户反馈摘要

1. **Staking 页面 UI 问题**（[#7015](https://github.com/nearai/ironclaw/issues/7015)）：用户报告 Staking 页面存在 UI 缺陷，但未提供截图、详细描述或复现步骤。该 Issue 已在创建当日被关闭——建议维护者在关闭此类反馈时，主动评论询问更多信息，或引导用户通过更结构化的渠道提交 bug 报告，以免流失有效反馈。

2. **QA 深度审计反馈**：theredspoon 本次提交的 4 个 Issue（[#7031](https://github.com/nearai/ironclaw/issues/7031)、[#7030](https://github.com/nearai/ironclaw/issues/7030)、[#7017](https://github.com/nearai/ironclaw/issues/7017)、[#7016](https://github.com/nearai/ironclaw/issues/7016)）暗示了一个潜在的用户痛点：**在配置了系统代理（HTTP_PROXY/HTTPS_PROXY）的环境中，IronClaw 的网络行为可能与预期不符**——当前默认发现系统代理的行为可能在代理存在时改变网络出口，且该行为未被正确诊断。如果你的使用场景涉及代理服务器，建议关注 [#7027](https://github.com/nearai/ironclaw/pull/7027) 的进展。

3. **投递可靠性**：多个 Issue 串（#7025、#7017、#7031）共同指向投递路径的并发一致性——对于依赖 IronClaw 做可靠消息投递的用户，若曾遇到"消息偶发重复投递"或"状态显示异常"，这些修复（[#7028](https://github.com/nearai/ironclaw/pull/7028)、[#7029](https://github.com/nearai/ironclaw/pull/7029)）落地后建议及时跟进升级。


## 待处理积压

### 需要关注的长寿 PR

| PR | 创建时间 | 存活天数 | 备注 |
|----|---------|---------|------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) — chore: release（`ironclaw_common` 0.5.0, `ironclaw_skills` 0.4.0） | 2026-07-03 | 31 天 | 包含 breaking changes，涉及 `ironclaw_common` 和 `ironclaw_skills`。长期未合并可能导致版本发布受阻，且与主线漂移风险增大。 |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) — Reborn 队列消息转向（移植至当前 main，修复 turn-boundary 竞态） | 2026-07-11 | 23 天 | size: XL, risk: medium。核心功能（queued-message steering），已重新移植并修复了评审中发现的竞态问题，端到端测试就绪。 |

### 等待合并的修复 PR（今日提交）

以下 PR 均对应今日 QA 报告的 Issue，建议优先安排评审：

1. [PR #7029](https://github.com/nearai/ironclaw/pull/7029) — 恢复 durable CAS 投递所有权（修复 #7025、#7031）
2. [PR #7028](https://github.com/nearai/ironclaw/pull/7028) — 恢复期间保留终态（修复 #7017）
3. [PR #7027](https://github.com/nearai/ironclaw/pull/7027) — 禁用环境代理发现（修复 #7016）

### 新 Issue 等待确认

- [#7030](https://github.com/nearai/ironclaw/issues/7030)（`doctor` 诊断不报告代理变量问题）— 今日新开，尚无对应修复 PR，建议确认是否纳入本轮修复范围。

---

*本日报由 AI 自动生成 · 数据来源：github.com/nearai/ironclaw · 报告日期：2026-08-03*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-03

## 今日速览

过去24小时项目活跃度中等偏稳：3条Issue更新（1条活跃、2条关闭），6条PR更新（4条待合并、2条关闭），暂无新版本发布。当前待合并的4条PR集中在IM配置修复、定时任务排序、CoWork会话性能优化，功能性PR与性能优化并行推进。另外，多条Issue与PR被标记为`stale`，提示维护者需关注长期搁置问题的清理节奏。

---

## 项目进展

今日无新合并PR，处于待合并状态的4条PR值得重点关注，涉及以下方向：

**1. IM配置热更新修复（PR #1215）** — 待合并
> 修复了平台级配置保存（如钉钉、Telegram凭据）不触发chat handler重建的问题。此前修改systemPrompt等设置不会实时生效，需重启应用。由mingoLzm提交。  
> 🔗 https://github.com/netease-youdao/LobsterAI/pull/1215

**2. 定时任务列表排序逻辑修复（PR #1218）** — 待合并
> 解决新建任务随机出现在列表中间的问题。根因是Gateway完全依赖UUID v4字符串排序，与创建时间无关。重构后按`nextRunAtMs`为主排序，同类时间任务再按创建顺序排列。  
> 🔗 https://github.com/netease-youdao/LobsterAI/pull/1218

**3. CoWork会话列表与详情页性能优化（PR #1219、#1220）** — 待合并
> 同一作者choyuenga提交两处性能优化：① 为`CoworkSessionItem/List`补充`React.memo`，消除流式输出时全列表无效重渲染；② 消除`recentChats()`与`conversationSearch()`的N+1查询问题，每个session从独立2次查询优化为批量查询。  
> 🔗 https://github.com/netease-youdao/LobsterAI/pull/1219  
> 🔗 https://github.com/netease-youdao/LobsterAI/pull/1220

**整体评估：** 项目本轮进展聚焦于体验细节打磨（配置即时生效、任务列表可预期性、会话页流畅度），属于稳步优化型迭代，无重大架构级变更。

---

## 社区热点

当前无高热度Issue或PR，评论量普遍偏低（1-2条）。相对关注度最高的是：

**Issue #1287（已关闭）— IM机器人连通性测试虚假通过**
> 用户报告设置-IM机器人中对popo进行连通性测试时，appkey、appsecret、aes key全填`1`也能测试通过，说明测试逻辑存在明显校验漏洞。该Issue已于今日由维护者关闭（stale标记），但关闭理由未见公开说明，建议关注是否已有修复计划。  
> 🔗 https://github.com/netease-youdao/LobsterAI/issues/1287

另一值得关注的是 **Issue #1289（已关闭）— 长代码块折叠/展开功能请求**，获得2条评论，社区对AI输出长代码块的阅读体验有明确改善诉求。虽已关闭（stale），但该需求与实用性高度相关，建议纳入后续迭代评估。

---

## Bug 与稳定性

**高优先级：**

**1. 偶发重启网关（Issue #1217 — OPEN）**
- **现象：** 运行过程中偶发启动网关，一天可能3-5次，影响正常使用
- **环境：** Win10，版本2026.3.26
- **提交信息：** 用户提供了完整日志（lobsterai-logs-20260401-180401.zip）
- **状态：** 已标记stale，短期内可能被自动关闭，但该问题影响核心功能稳定性，建议维护者及时介入
- 🔗 https://github.com/netease-youdao/LobsterAI/issues/1217

**中优先级：**

**2. IM机器人连通性测试校验缺失（Issue #1287 — CLOSED）**
- 测试凭据全填`1`即通过，说明连通性测试缺乏基本的非空/格式校验，甚至可能未真实调用API
- 该问题虽已关闭，但若未实际修复，用户在配置错误凭据时可能获得误导性反馈

**稳定性总结：** 今日无新增崩溃性Bug报告，网关偶发重启是当前最影响用户体验的稳定性缺口，且有明确日志可供排查，建议优先跟进。

---

## 功能请求与路线图信号

**1. 长代码块折叠/展开（Issue #1289）**
- 诉求：AI输出15~200行代码块时全量展示导致页面冗长，需大量滚动
- 已有`CODE_BLOCK_LINE_LIMIT`（200行）和`CODE_BLOCK_CHAR_LIMIT`（20000字符）的超限降级机制，但中间区间无折叠处理
- 提案：自动折叠+展开按钮，代码块超过一定阈值（如15行）时默认折叠
- **路线图判断：** 该功能属于高频使用场景的体验优化，实现成本较低（UI层改动），进入下一版本的概率较高  
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1289

**2. 定时任务列表排序可预期性（PR #1218）**
- 通过重构排序规则使新建任务出现在列表顶部附近，提升操作反馈感
- 该PR已在实现阶段，预计随下个版本发布

---

## 用户反馈摘要

- **痛点：** 网关偶发重启（Issue #1217）是当前最显著的用户负面反馈，一天多次重启严重打断工作流
- **配置信任感：** IM连通性测试假通过（Issue #1287）可能让用户对配置校验机制产生不信任感
- **体验改进诉求：** 长代码块可读性（Issue #1289）反映用户与AI长文本交互的深度使用场景，改善滚动疲劳是真实需求
- 整体而言，用户反馈集中于**稳定性**和**长内容可读性**两个维度，性能类问题（如PR #1219/#1220针对的重渲染、N+1）目前无直接用户抱怨，是主动优化型工作

---

## 待处理积压

**⚠️ 需重点关注：**

**1. Issue #1217 — 偶发重启网关（OPEN，已标记stale）**
- 创建于2026-04-01，至今已超4个月无维护者回复
- stale标记意味着若不响应将在近期被自动关闭
- **建议：** 该问题有完整日志且影响核心功能，应尽快分配资源排查
- 🔗 https://github.com/netease-youdao/LobsterAI/issues/1217

**2. PR #1215 / #1218 / #1219 / #1220 — 四条功能性PR待合并（均标记stale）**
- 四条PR均创建于2026-04-01，等待合并超过4个月
- 涉及IM配置热更新、任务排序修复、性能优化等明确价值，长期搁置可能导致：① 代码冲突累积；② 社区贡献者积极性受挫
- **建议：** 安排一次集中Review，按优先级依次合并并发布
- 🔗 https://github.com/netease-youdao/LobsterAI/pull/1215  
- 🔗 https://github.com/netease-youdao/LobsterAI/pull/1218  
- 🔗 https://github.com/netease-youdao/LobsterAI/pull/1219  
- 🔗 https://github.com/netease-youdao/LobsterAI/pull/1220

---

## 健康度评估

| 维度 | 状态 | 说明 |
|------|------|------|
| 活跃度 | 🟡 中等 | 24h内3条Issue+6条PR更新，但多为stale状态触发 |
| 合并效率 | 🟠 偏低 | 4条PR待合并超4个月，需关注贡献者耐心 |
| Issue响应 | 🔴 不足 | 核心Bug（#1217）4个月无维护者回复 |
| 版本节奏 | ⚪ 停滞 | 近期无新版本发布 |
| 代码质量 | 🟢 良好 | 待合并PR均有具体问题分析和测试说明 |

**总结：** 项目在功能和性能优化的技术储备上表现扎实，但维护响应速度和版本发布节奏明显滞后，长期积压可能带来社区信任度下降的风险。建议优先处理stale标记的关键Issue与PR。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-08-03)

## 1. 今日速览

今日 Moltis 项目活跃度处于**低位但有关键产出**：过去 24 小时无新 Issue 提交或关闭，唯一亮点是 1 条待合并的 PR（#1183），该 PR 引入 MCP 服务器托管仓库捆绑管理能力，涉及功能面广（CLI/RPC/Web UI 三端 + 数据库迁移），是本周期内最具分量的功能增量。无新版本发布，仓库整体保持稳定，未见 Bug 或崩溃类反馈。建议关注 PR #1183 的合并进度，因其包含数据库迁移，需评估升级影响。

---

## 2. 版本发布

**无新版本发布**（上一个 Release 暂无数据）。预计下一次版本发布将包含 PR #1183 的 MCP 仓库捆绑功能。

---

## 3. 项目进展

### 重要 PR（待合并）

**#1183 [OPEN] feat(mcp): add managed repository bundles**

- **作者**: penso，**创建**: 2026-08-02，**最后更新**: 2026-08-03
- **状态**: 待合并（无冲突标记）
- **链接**: [PR #1183](https://github.com/moltis-org/moltis/pull/1183)
- **核心改动**:
  - 新增 **托管 Git 仓库捆绑** 机制，支持 MCP 服务器的发现、预览、安装、更新与移除
  - 支持 **HTTPS Git 凭据** 与 **SSH 传输** 两种认证方式
  - 集成 **Vault 生命周期管理**，支持导入仓库备份的 MCP 配置
  - 覆盖 **CLI、RPC、Web UI** 三端工作流，附带数据库迁移脚本

**推进意义**: 该项目是本阶段最系统化的功能扩展，将 MCP 服务器管理从"手工配置"升级为"仓库化、可版本化、可迁移"的完整生命周期管理。若该 PR 被合并，Moltis 将成为少数具备企业级 MCP 服务器治理能力的开源助手框架。数据库迁移提示后续升级需要执行 schema 变更，建议维护者在合并前补充迁移说明。

---

## 4. 社区热点

**今日无高互动 Issue/PR**（唯一活跃 PR #1183 暂无评论互动）。讨论热度较低，可能与 PR 发布时间较短（不足 24 小时）且功能说明较技术化有关。建议关注该 PR 合入后社区对新工作流的反馈。

---

## 5. Bug 与稳定性

**今日无 Bug 报告、崩溃或回归问题。**

---

## 6. 功能请求与路线图信号

**今日无新增功能请求 Issue。** 但 PR #1183 本身传递了强烈的路线图信号：MCP 服务器发现/安装/更新流程正从"手动配置"转向"仓库化集中管理"。结合其支持 HTTPS/SSH 凭据与 Vault 集成，可推测下一版本的主要方向是：

- **企业级安全治理**（凭据管理、Vault 对接）
- **组件生态化**（类似 npm/pip 的 MCP 服务器仓库）
- **三端一致性**（CLI/RPC/Web UI 功能对齐）

若 PR 合入后社区反馈良好，后续可能衍生出"搜索官方/社区仓库""一键回滚版本"等子功能 Issue。

---

## 7. 用户反馈摘要

**今日无有效用户反馈数据**（PR #1183 暂无评论）。当前无法提炼用户痛点或满意度。待 PR 合并后，建议观察用户在"安装/更新流程体验""迁移后配置兼容性"方面的反馈。

---

## 8. 待处理积压

**今日无长期未响应的关键 Issue/PR。** PR #1183 当前为 1 天龄，处于正常评审窗口期，暂不属于积压。

> 关注建议：若 PR #1183 在 3-5 天内无维护者合并或评论，应视为积压信号，建议在社区中提醒。

---

*报告生成时间: 2026-08-03 | 数据来源: github.com/moltis-org/moltis | 统计周期: 过去24小时*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-03

> 数据来源: github.com/agentscope-ai/CoPaw | 统计周期: 2026-08-02 ~ 2026-08-03


## 1. 今日速览

CoPaw（QwenPaw）今日社区活跃度处于**高位**：24 小时内新增/更新 Issue 10 条（9 条活跃）、PR 23 条（17 条待合并），无新版本发布。围绕 **QwenPaw 2.0.1 与 agentscope 2.0.4.post1 的兼容性问题**（崩溃、死锁、API 字段缺失）是当前最集中的技术债来源，已有 3+ PR 定向修复。同时，**技能标签重启丢失**（#6537）与**慢网络下控制台页面加载超时**（#6633/#6635）两大回归/性能问题已分别有 PR 跟进。社区贡献者活跃度显著——今日 PR 中多数来自独立开发者，且多个为 first-time-contributor，项目生态系统呈现健康的开放协作态势。


## 2. 版本发布

今日无新版本发布。当前最新版本仍为 QwenPaw **2.0.1**。

⚠️ 值得注意的是，社区已报告 2.0.1 与 agentscope 2.0.4.post1 存在兼容性问题（见下文 #6612、#6619），建议在下一个补丁版本中予以解决。


## 3. 项目进展

今日合并/关闭 6 条 PR，其中值得关注的有：

| PR | 标题 | 状态 | 意义 |
|----|------|------|------|
| [#6638](https://github.com/agentscope-ai/QwenPaw/pull/6638) | feat(sidebar): add app-center entry to simple mode | 已合并 | 简化模式侧边栏新增应用中心入口，提升基础导航体验 |
| [#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632) | fix(skills): preserve plugin-sourced skill tags across reconcile cycles | 已合并 | 修复技能标签重启丢失问题（与 #6537 相关），插件来源技能标签在重建清单时保留 |
| [#6552](https://github.com/agentscope-ai/QwenPaw/pull/6552) | fix(skills): preserve plugin-sourced skill tags across pool reconcile | 已合并 | 与 #6632 同问题的另一独立实现，表明维护者选择了其中一种方案 |
| [#6548](https://github.com/agentscope-ai/QwenPaw/pull/6548) | feat(website): add Loop Engineering & Sandbox blogs, track Hero Try Now clicks | 已合并 | 官网发布两篇技术博客（中/英），新增 Hero 按钮 GA4 点击追踪 |
| [#6521](https://github.com/agentscope-ai/QwenPaw/pull/6521) | fix(console): surface OMP loop modes in slash menu with i18n and inline Markdown | 已合并 | 控制台斜杠菜单新增 OMP 循环模式（如 /ultrawork）支持，含国际化与 Markdown 渲染 |
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | fix(scroll): preserve session IDs during history migration | 已合并 | 修复历史迁移时的会话 ID 保留问题，非破坏性迁移方案 |

**核心信号：** 技能标签持久化修复（两个方案最终合并）+ 控制台 OMP 特性补全 + Scroll 历史迁移修复，三个核心模块均有实质推进。


## 4. 社区热点

| 条目 | 类型 | 评论数 | 链接 | 核心诉求 |
|------|------|--------|------|----------|
| **#6537** | Issue (已关闭) | 11 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 技能标签重启后丢失，回归 #3270。这是当前**讨论最热烈**的 Issue，社区对配置持久化稳定性提出高要求 |
| **#6543** | PR (待合并) | — | [链接](https://github.com/agentscope-ai/QwenPaw/pull/6543) | OneBot/QQ 消息格式优化——Markdown 语法直接暴露在聊天中，要求纯文本化与本地媒体发送 |
| **#6612** | Issue (开启) | 2 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6612) | qwenpaw 2.0.1 + agentscope 2.0.4.post1 导致 proactive 子系统崩溃 + 工具权限死锁，**兼容性危机** |

**分析与诉求：** 社区最强烈的信号集中在两处：(1) **配置持久化可靠性**——技能标签问题因回归而引发较大讨论量，用户对 "配置被静默丢弃" 这类问题容忍度低；(2) **依赖兼容性**——agentscope 升级后导致的系列崩溃（Msg.content 类型错误、死锁、ToolCallBlock 字段缺失）正在消耗社区信任，多位用户报告了在升级 agentscope 后无法正常使用。

此外 OneBot 集成 PR 也引发关注，表明 **QQ/OneBot 适配是当前社区的高频使用场景**，用户对消息格式的干净度有明确预期。


## 5. Bug 与稳定性

### 🔴 严重（阻断使用）

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容：proactive 崩溃 + 工具权限死锁 | 开启 | [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) 已提交 |
| [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | "ToolCallBlock" 缺少 "extra_content" 字段 — 流式响应崩溃 | 开启 | [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) 已提交 |

### 🟡 中等

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP delegate 在通知与响应竞争时误报 "无文本输出" | 开启 | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) 已提交 |
| [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll 自动压缩不触发记忆流程（手动 /compact 正常） | 开启 | [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) 已提交 |
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) | execute_shell_command 多行命令新行变空格 + PIPE 模式下后台进程卡死 | 开启 | [#6566](https://github.com/agentscope-ai/QwenPaw/pull/6566) 已提交 |
| [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | CI 证据门禁剥离 fenced code block（与 openclaw 的移植偏差） | 开启 | — |

### 🟢 中低（性能/体验）

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) | Skills/Skill Pool 页面在慢网络下加载失败 — MB 级未压缩响应超 30s | 开启 | [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) 已提交 |
| [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) | Console 页面在慢网络下加载失败 — 一体化 MB 级响应 | 开启 | —（与 #6633 同源） |
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 技能标签重启丢失（回归 #3270） | 已关闭 | 已合并 #6632 / #6552 |

**判断：** 所有中等级以上 Bug 均有对应 Fix PR 在途，修复覆盖率达到 100%，项目响应速度良好。严重兼容性问题（#6612、#6619）有 PR 但尚未合并，需维护者优先处理。


## 6. 功能请求与路线图信号

| 来源 | 功能/需求 | 潜在纳入版本 | 判断依据 |
|------|-----------|--------------|----------|
| [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | **多智能体协作引导缺失**：用户反馈文档未说明默认 Agent 不会自动调用其他 Agent，需在 PROFILE.md 显式配置 | 下一版（2.1） | 用户体验类反馈，涉及文档 + 产品行为，有较强改进动机 |
| [#6543](https://github.com/agentscope-ai/QwenPaw/pull/6543) | OneBot/QQ 出站文本纯净化和媒体发送 | 2.0.2 或 2.1 | PR 功能已完成，处于 Review 阶段 |
| [#6640](https://github.com/agentscope-ai/QwenPaw/pull/6640) | creator 模块：拒绝反馈循环、overlay 堆叠、结构化日志与运行时加固 | 下一版 | 功能 PR 规模较大，覆盖多条改进 |
| [#6521](https://github.com/agentscope-ai/QwenPaw/pull/6521) | 控制台斜杠菜单支持 OMP 循环模式（含 i18n） | 已合并 | 将随下个版本发布 |

此外，[#6637](https://github.com/agentscope-ai/QwenPaw/pull/6637) 修复了大型工具输出导致的 UI 冻结（来自 #6589），属于质量改进；[#6639](https://github.com/agentscope-ai/QwenPaw/pull/6639) 修复了生产构建中 monaco-editor CSS 被错误 stub 的问题，两者均为界面/体验类提升。

**路线图信号：** 社区对**多智能体协作的显式引导与文档完善**有明确需求（50+ 轮对话才发现问题）。结合文档现状，建议关注 Multi-Agent 章节是否有更新计划。


## 7. 用户反馈摘要

**多智能体使用门槛（来自 [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)）：**
> 用户 `monicfenga` 表示：自 7 月起进行了 50+ 轮多智能体相关对话，直到 8 月 1 日才发现默认 Agent 不会自动调用其他 Agent，必须在 PROFILE.md 中显式写入才能生效。

> 用户强调："引导缺失，而非用户未读文档"——已完整阅读官方 Multi-Agent 文档但依然未获知此行为。

**依赖兼容焦虑（来自 [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)）：**
> 用户报告同时安装 qwenpaw==2.0.1 与 agentscope==2.0.4.post1 后，proactive 子系统出现两处独立运行时故障，均源于 agentscope API 变更未被跟上。

**深度使用者的低容忍度（来自 #6537 评论）：**
> 技能标签丢失问题触发 11 条评论的讨论，评论中用户表现出对"配置被静默重置"的明显不满，希望设备重启后保留全部工作区配置。

**慢网络环境痛点（来自 [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)/[#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635)）：**
> 用户 `Moonlit-Pages` 报告了 Skills 页面与多个 Console 页面的加载失败问题，核心原因为 MB 级未压缩 API 响应超过前端固定 30s 超时限制，且是否失败与 payload 大小完全相关——在慢网络下无法使用核心功能。


## 8. 待处理积压

### 需维护者重点关注

| 条目 | 类型 | 创建时间 | 链接 | 滞留原因/风险 |
|------|------|----------|------|---------------|
| **#6612 + #6615** | Issue + Fix PR | 2026-07-31 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6612) / [PR](https://github.com/agentscope-ai/QwenPaw/pull/6615) | agentscope 2.0.4.post1 兼容性问题，**自提交起已 4 天未合并**，社区用户升级 agentscope 后可能持续遇到崩溃。建议优先 review |
| **#6620** | Fix PR（first-time） | 2026-08-01 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/6620) | Gemini 流式工具调用崩溃的修复，与 #6619 直接对应，等待维护者 review |
| **#6623** | Fix PR（first-time） | 2026-08-01 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/6623) | ACP 通知竞争问题（#6625）修复，涉及并发时序处理，需仔细验证 |
| **#6626** | Issue | 2026-08-01 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6626) | CI 门禁逻辑问题——fenced code block 被完全剥离导致合法 PR 被拒，**影响所有使用代码块作为证据的贡献者**，目前无 PR 跟进 |
| **#6565 + #6566** | Issue + Fix PR | 2026-07-30 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6565) / [PR](https://github.com/agentscope-ai/QwenPaw/pull/6566) | Shell 命令两个 bug（换行折叠 + PIPE 卡死），PR 来自 first-time contributor，已存在 5 天待 review |

### 长期未响应

| 条目 | 创建时间 | 链接 | 说明 |
|------|----------|------|------|
| #6543（OneBot 改进 PR） | 2026-07-29 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/6543) | 已 6 天处于 Under Review，涉及 OneBot/QQ 核心体验，建议加速 |
| #6537（技能标签回归） | 2026-07-28 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 虽已关闭且有合并 PR（#6632/#6552），但需确认最终方案已被采纳且通过全部 CI 验证 |

---

**项目健康度评估：** 社区活跃度高、Bug 响应速度快（Fix PR 覆盖率高），但依赖兼容性（agentscope）与慢网络体验问题暴露了 2.0.1 的稳定性短板，建议尽快发布 2.0.2 补丁版本收拢以上修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-03

**数据窗口**: 2026-08-02 ~ 2026-08-03 | **数据来源**: GitHub Issues/PRs/Releases


## 1. 今日速览

ZeroClaw 在过去 24 小时保持高度活跃：50 条 Issue 更新（37 条活跃 / 13 条关闭）与 50 条 PR 更新（40 条待合并 / 10 条已合并或关闭）并行推进。期间发布了 **v0.8.4 维护加固版本**（262 commits / 49 名贡献者），重点强化了内存与 SOP 控制面、provider 与 channel 可靠性、沙箱与凭据边界。社区讨论重心集中在 **架构级 RFC**（运行时会话所有权、统一附件架构、Chat Completions profile）、**安全 Bug**（webhook 未认证、WATI 通道关闭），以及 **治理流程**（RFC 投票机制）。项目正处于 **v0.8.4 发布后向 v0.9.0 过渡**的关键阶段，大量 RFC 等待维护者最终裁决。


## 2. 版本发布

### v0.8.4 — 维护与加固版本

**发布链接**: https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.4

**规模**: 262 commits | 49 名贡献者

**核心变更**:
- 扩展内存与 SOP（标准操作流程）控制平面
- 改善 provider 与 channel 可靠性
- 强化沙箱与凭据边界
- 优化桌面端与发布流水线

**⚠️ 注意事项**:
- 发布工作流因 Rust MSRV 从 1.95.0 提升至 **1.96.1**，导致 `all-features` Docker 镜像发布失败（见 #9690）。**如使用 `all-features` 容器镜像，升级前需确认镜像可用性**
- 该问题不是 v0.8.4 回归，自 2026-07-08 起已存在，建议关注 #9690 的修复进度


## 3. 项目进展

**今日合并/关闭的关键 PR**（共 10 条）：

| PR | 标题 | 类型 | 影响 |
|----|------|------|------|
| [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) | fix(providers): harden SSE completion and idle timeouts | 修复 | 加固 OpenAI/Anthropic/Compatible 提供商的 SSE 与超时处理，维护者刷新了分支并补齐终态事件处理 |
| [#9519](https://github.com/zeroclaw-labs/zeroclaw/pull/9519) | fix(gateway): serialize config writes so a flush can't erase concurrent updates | 修复 | 序列化网关配置写入，避免并发更新被静默覆盖，属于数据安全修复 |
| [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478) | fix(channels): notify the sender when the reply-intent precheck declines | 修复 | 通道被拒时不回复的体验问题，增加固定通知文本，对应 #9465 |

**积压结清**：13 条旧 Issue 关闭（traker #8357 v0.8.4 完成；#8578 daemon 启动失败修复；#9676 CI 发布问题标记完成等）。

**其他**: PR #9571 发出移除 WATI channel 的提案（对应安全 Bug #9565），若合并将一次性移除该 channel 的所有相关代码与 CI/容器/文档配置。


## 4. 社区热点

**Top 1 — RFC: ZeroClaw Chat Completions profile**（15 评论）
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8603

> 核心诉求：为 ZeroClaw 增加 OpenAI Chat Completions 协议兼容层，使 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等生态工具可直接接入。这是打通 ZeroClaw 与主流 AI 工具生态的关键枢纽，讨论热度持续 30+ 天未见衰减。

**Top 2 — RFC: Work Lanes, Board Automation, and Label Cleanup**（17 评论）
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6808

> 项目治理与标签体系重构的长期 RFC（Rev 23），关注者期望减轻维护者手工路由负担。rev 持续推进表明社区对项目治理透明度的关注度较高。

**Top 3 — RFC: Pluggable inbound authentication and canonical principals**（9 评论）
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7141

> 安全与架构方向：将入站认证从写死的 OIDC 改为可插拔 provider，并定义 canonical principal 模型。与 #7142（安全决策管线）形成配套设计。


## 5. Bug 与稳定性

### 🔴 严重级别（P0 / 数据安全）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | **Gateway webhook 未认证（WhatsApp Cloud、Linq、WATI）** — 攻击者可向 agent 注入消息。S0 级别 | 已发 PR #9571 移除 WATI；其余需确认修复方案 |
| [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) | **CLI 三个 `cron add` 示例全部不可运行**，空状态提示还打印第四个错误形式。P1 | 待分配 fix |

### 🟠 高优先级（P1）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) | **Registry WIT 钉扎与 master 分支脱节**，导致已发布的 WASM 组件无法解析。S2 | 已接受（priority:p1, status:accepted），需跟踪 |
| [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | Provider 凭据轮换逻辑待完善（PR #9419 在途） | 等待合并 |

### 🟡 中低优先级（P2/P3）

- [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) — **Containerfile StageX pin 低于 MSRV 1.96.1**，all-features 镜像构建失败。已接受，PR 未出
- [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) — 被拒消息仅显示 emoji 无文字反馈（已关闭，对应 PR #9478）
- [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) — Rust 1.96 下 `cargo test --doc` 失败（已关闭，修复已合入）


## 6. 功能请求与路线图信号

### 🔮 高概率进入 v0.9.0

| RFC | 标题 | 状态 | 信号 |
|-----|------|------|------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime 统一拥有会话与传输适配器 | 提案中 | 多个 channel/web 相关修改均依赖此架构 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 统一附件架构（web chat + channels） | 提案中 | 与 #9487 配套，两者同时落地可能性高 |
| [#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) | 在 v0.9.0 弃用 Lucid 内存连接器 | 2 条评论 | 上游项目已休眠 4 天未更新，维护者 JordanTheJet 推动，被接受概率较高 |
| [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | Anthropic OAuth 存储 profile 的正式契约 | 与 PR #9420 配套 | 实现已完成，本 PR 为确认契约 |

### 🧭 路线图信号

- **兼容 OpenAI 生态**（#8603）是社区呼声最高的能力缺口，与 #9487 适配层思路一致
- **WASM 插件生命周期钩子**（[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)）为第三方审计/遥测提供能力；若被采纳将成为重要插件生态扩展
- **可观测性增强**（[#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)）OTel trace 关联与事件格式化，对应运维侧需求——建议与产品遥测（#9621）一并推进


## 7. 用户反馈摘要

| 用户 | 反馈要点 | 来源 |
|------|---------|------|
| `vrurg` | **CLI 文档质量差**——每个例子均有不同错误原因，操作者按文档操作直接报错，暴露了 release 前文档验证不充分 | [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) |
| `klonuo` | **启动失败后不退出进程**——zerocode 进程挂在失败状态，缺少明确的失败退出码 | [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578)（已关闭） |
| `REL-mame` | **生态兼容诉求强烈**——用户拥有的工具（Open WebUI/LobeChat/Continue.dev/Aider 等）无法直接连接 ZeroClaw，需要 Chat Completions 兼容层 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)，评论 15 条 |
| `ZiBibro` | **被拒消息体验差**——仅 emoji 无文字反馈；推送了修复 PR #9478，已被合入 | [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) |
| `JordanTheJet` | **安全负反馈**——webhook 不认证即放行消息进入 agent 执行链，属高风险安全设计缺陷 | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) |
| `Audacity88` | **审批流程不明确**——维护者花费大量精力在重复讨论上（参见 RFC 决策队列 #8692）；提出更结构化流程方案 #9496（定义投票窗口、法定人数与结果记录） | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) |

**总体**：用户最关心的是安全问题、生产力工具链兼容性与 CLI 使用体验。


## 8. 待处理积压

### 长期未决的 RFC（等待维护者最终决策）

| Issue | 标题 | 创建时间 | 等待时长 | 备注 |
|-------|------|---------|---------|------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 2026-05-20 | ~75 天 | 评论 17 条，Rev 23，长期处于 ratification 状态 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | Pluggable inbound authentication | 2026-06-03 | ~61 天 | 安全/架构方向，已沉淀 30+ 天无实质推进 |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Runtime-owned security decision pipeline | 2026-06-03 | ~61 天 | 与 #7141 配套，等待同批决策 |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Schema-validated memory consolidation | 2026-05-29 | ~66 天 | 影响记忆模块稳定性，尚未有维护者明确态度声明 |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | Structured Observability (OTel trace correlation) | 2026-06-05 | ~59 天 | 4 条评论，无维护者回复 |
| [#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) | 弃用 Lucid 内存连接器 | 2026-08-01 | 2 天 | 新发起的提案，建议尽快明确态度 |

### 长期阻塞的 PR（等待作者更新或维护者介入）

| PR | 标题 | 等待原因 | 等待时长 |
|----|------|---------|---------|
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | exclude Nova 2 from Bedrock prompt caching | `needs-author-action` 等待作者更新 | ~24 天 |
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) | chore(channels): remove the WATI channel | `needs-author-action` 依赖安全问题修复决策 | ~4 天 |
| [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) | recover tool invocations in `<tools>` tag | `needs-author-action` 等待作者更新 | ~6 天 |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | keep agent turns alive after viewer disconnect | 3 个 P1 PR 均处于 `needs-author-action` 状态 | ~5 天 |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | rotate live credentials after rate limits | `needs-author-action`，涉及凭据轮换风险 | ~4 天 |

### ⚠️ 特别提醒

**RFC 决策队列**（[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）已明确列出所有等待维护者决策的 RFC。当前积压规模（至少 8 个开放 RFC 等待响应）将持续消耗社区参与积极性。建议优先处理：

1. **#8603 Chat Completions profile** — 社区呼声最高，落地将带来显著的生态集成收益
2. **#9644 Lucid 内存弃用** — 新提案，影响小，决策成本低，可快速关闭
3. **#7142/#7141 安全决策管线** — 安全架构核心，长期未决可能造成安全债累积


*报告生成时间: 2026-08-03 | 数据截至: 2026-08-03 23:59 UTC*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*