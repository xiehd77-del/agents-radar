# OpenClaw 生态日报 2026-08-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-27 08:05 UTC

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

# OpenClaw 项目动态日报 — 2026-08-27

---

## 1. 今日速览

过去24小时项目活动量极高，Issue 与 PR 更新均达 500 条上限（Issue 新开/活跃 327 条、PR 待合并 365 条），但无新版本发布。讨论热度集中在**多智能体编排稳定性**（#43367，14 评论）、**消息丢失/静默丢弃**（#112259、#128971）、**DeepSeek 模型回归**（#88657）与 **Zombie 子进程泄漏**（#97616）等顽固问题上。值得关注的是，维护者（steipete 等）今日提交了密集的修复 PR（大部分为文档与小规模修复，少数涉及 gateway 核心逻辑），但大量 PR 仍处于 "waiting on author" 状态，合并效率可能受作者响应速度制约。整体来看，项目当前处于 **beta 周期内的密集修复阶段**，稳定性和消息投递可靠性是最大短板。

---

## 2. 版本发布

过去24小时内无新版本发布。当前 beta 版本为 [v2026.8.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3)（提交 `5831b80`）。

---

## 3. 项目进展

过去24小时已合并/关闭 PR 135 条，以下为值得关注的合并内容（按影响力排序）：

| PR | 标题 | 关键信息 | 影响 |
|---|---|---|---|
| [#130801](https://github.com/openclaw/openclaw/pull/130801) | refactor(models): simplify status auth projection | 合并 | 简化模型状态认证投影，消除重复的联合类型，降低维护成本 |
| [#130795](https://github.com/openclaw/openclaw/pull/130795) | fix(setup): treat superseded catalog refresh as activation success | 合并 | 修复 Codex 推理激活成功后仍报错的问题（现场复现，等待 91 秒后 RPC 失败） |
| [#130794](https://github.com/openclaw/openclaw/pull/130794) | fix(status): show healthy channels as OK in deep health | 合并 | `openclaw status --deep` 对健康通道不再误报 WARN |
| [#130768](https://github.com/openclaw/openclaw/pull/130768) | fix(google): preserve gateway queries in embedding batches | 合并 | 修复 Gemini embedding 批次在带查询参数的网关 URL 下路由错乱问题 |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings | **已关闭（未合并）** | 大规模 gateway 修复（XL），涉及多智能体会话工具越权投递问题，目前状态为 "ready for maintainer look"，但今日被关闭，需关注后续处理 |

**今日新提交的重点 PR（尚未合并）：**

- [#130691](https://github.com/openclaw/openclaw/pull/130691) — **修复嵌套 worker 委派超时问题**（P1，gateway）：Node 后端 worker 在创建委派子任务时可能丢失 Gateway 实例或源 worker 会话权限。当前 "ready for maintainer look"。
- [#130787](https://github.com/openclaw/openclaw/pull/130787) — **停止推荐不支持的云 worker 类型**：避免用户在添加 worker 配置时被引导到无效实例类型。
- [#130813](https://github.com/openclaw/openclaw/pull/130813) — **修复 linked hooks 与嵌套 pack 加载**：本地 hook 安装成功但从未执行的问题。

**总体判断：** 项目正在推进网关稳定性（消息投递、worker 委派、认证状态）与配置体验优化，但核心架构级的修复（如 #126424）仍处于审查阶段，短期难以落地。

---

## 4. 社区热点

今日讨论最活跃的议题集中在**消息丢失与多智能体不稳定**，这两类问题直接触及用户核心使用场景，反馈强烈：

### 4.1 beta 反馈集中帖 — #125626（20 评论）
[Issue #125626](https://github.com/openclaw/openclaw/issues/125626) — OpenClaw 2026.8.1 beta feedback
- 由维护者 Patrick-Erichsen 发起，是 v2026.8.1-beta.3 的集中反馈入口。评论活跃度高，说明社区正在积极测试新版本并反馈问题。

### 4.2 多智能体编排不稳定 — #43367（14 评论，👍1）
[Issue #43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration is unstable: concurrent agents add/config overwrites, session-lock failures, and detached child work (P1)

- **用户诉求：** 从 CLI 并发执行多个 `openclaw agents add` 会导致配置互相覆盖；session-lock 频繁失败；子任务会变成"孤儿进程"不归父任务管理。用户原话："I tried to orchestrate a small parallel coding batch... hit a cluster of failures that make multi-agent runs unreliable in practice."
- **状态：** 已打开近 6 个月，仍为 OPEN，且被标记为 `needs-maintainer-review` 与 `needs-info`。这是社区最大的痛点之一，核心问题仍未解决。

### 4.3 可见消息被静默丢弃 — #112259（8 评论，👍1）
[Issue #112259](https://github.com/openclaw/openclaw/issues/112259) — Visible inbound channel turn can be silently dropped (P1, 零-payload 分发无重试/死信/用户可见失败)

- **用户诉求：** iMessage DM（或其他渠道）消息可被 gateway 接受但被静默丢弃：无 agent 运行、无持久化、无错误提示。用户完全不知道消息没有被处理。
- **状态：** 仍为 OPEN，被标记为 `needs-maintainer-review` 和 `needs-product-decision`。

### 4.4 Telegram 最终回复丢失 — #128971（新开 2 天，6 评论）
[Issue #128971](https://github.com/openclaw/openclaw/issues/128971) — Telegram final reply is silently lost when terminal receipt returns `delivery_ambiguous` (P1)

- **用户诉求：** Telegram 会话中 agent 完成所有工作并生成最终回复，但终端接收返回 "delivery_ambiguous" 时，最终消息被静默丢弃，用户只看到进度消息。
- **状态：** 新开 2 天即被标记为 `no-stale` 与 `queueable-fix`，说明这是已知可复现且优先级较高的投递可靠性问题。

### 4.5 DeepSeek V4 Flash 不完整回合 — #88657（12 评论，👍1）
[Issue #88657](https://github.com/openclaw/openclaw/issues/88657) — DeepSeek V4 Flash incomplete turn (payloads=0, tools=2, replaySafe=no, stopReason=stop) in 2026.5.27/28 (P1)

- **用户诉求：** 从 2026.5.26 升级到 5.27/5.28 后，DeepSeek V4 Flash 出现工具调用产出为零的情况。模型在旧版本可正常工作，判断为版本回归。
- **状态：** OPEN，标记为 `source-repro`。已持续近 3 个月，仍有用户遇到。

**共性分析：** 社区反馈集中在"消息可靠到达"与"多智能体可预测性"两个信任基石上。用户已经能够接受功能迭代中的小问题，但对"静默丢消息"和"配置互相踩踏"容忍度极低。

---

## 5. Bug 与稳定性

按严重程度排列（P0 → P2），重点关注回归与数据丢失类问题：

### 🔴 P0 级

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs are ahead of release（文档与版本不一致，`IsolatedSessions` 配置在 2026.3.13 中不存在） | OPEN，10 评论 | ❌ 无新 fix PR，被标记为 `needs-live-repro` |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多智能体并发配置覆盖、session-lock 失败、孤儿子任务 | OPEN，14 评论 | ❌ 无（2 个关联 PR 仍在 review） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏（zombie 进程）导致运行时性能劣化 | OPEN，9 评论 | ❌ 无 |

### 🟠 P1 级 — 消息丢失/数据损坏类

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见入站消息被静默丢弃（零-payload 分发，无重试/死信） | OPEN，8 评论 | ❌ 无 |
| [#128971](https://github.com/openclaw/openclaw/issues/128971) | Telegram 最终回复因 `delivery_ambiguous` 被静默丢弃（新开 2 天） | OPEN，6 评论 | ⏳ 标记为 `queueable-fix`，暂无 PR |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) | 过期 subagent 完成消息被投递到被替换的 requester lifecycle | OPEN，7 评论 | ✅ 有关联 PR 打开 |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost 刷新锁在容器环境中因 PID 复用而永久冻结 | OPEN，7 评论 | ⏳ 关联 PR 已打开 |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash 不完整回合（2026.5.27+ 回归） | OPEN，12 评论 | ❌ 无 |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | 'restart recovery claim changed before agent adoption' 在 2026.7.2-beta.7 上复发 | OPEN，5 评论 | ❌ 无（此前修复未完全生效） |

### 🟡 P2 级 — 行为异常/兼容性问题

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#115001](https://github.com/openclaw/openclaw/issues/115001)（[已关闭](https://github.com/openclaw/openclaw/issues/115001)） | 混合内存搜索词 FTS LIKE 回退返回虚假的 1.0 相似度分数 | **已关闭**（今日） | ✅ 已有关联 PR |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | `${XDG_CONFIG_HOME}` 安装 skill 时未被解析 | OPEN，14 评论 | ❌ 需产品决策 |
| [#123652](https://github.com/openclaw/openclaw/issues/123652) | Azure/OpenAI runtimeContextCarrier 尾部重定位破坏 GPT-5.6 prompt cache 谱系 | OPEN，5 评论 | ❌ 无 |
| [#113093](https://github.com/openclaw/openclaw/issues/113093) | 2026.7.1-2 完整 profile + llama.cpp MTP 服务器返回 413/400 | OPEN，6 评论 | ❌ 无 |
| [#126429](https://github.com/openclaw/openclaw/issues/126429) | CLI 后端模型列表崩溃、辅助身份认证不被识别、无法手动切换 | OPEN，5 评论 | ❌ 无 |

**⚠️ 重点风险提示：** 今日新提交的 [PR #130691](https://github.com/openclaw/openclaw/pull/130691)（嵌套 worker 委派超时）与 [PR #130769](https://github.com/openclaw/openclaw/pull/130769)（修复 CLI 运行时认证报告）可能缓解部分与 worker/认证相关的问题，但核心的消息投递链路（#112259、#128971）仍无修复方案，需维护者优先关注。

---

## 6. 功能请求与路线图信号

### 较高可能性进入下个版本的功能
- **Telegram 贴纸发送支持**（[#7476](https://github.com/openclaw/openclaw/issues/7476)，6 评论）— 需求明确（发送 512x512 `<100KB` `.webp` 作为贴纸而非图片），实现路径清晰，可能需要插件小改动。
- **JSON Schema 自动生成**（[#55235](https://github.com/openclaw/openclaw/issues/55235)，5 评论）— 已有生成能力但需用户手动触发，自动生成/更新 openclaw.json schema 在 bootstrap/update 时执行将显著提升编辑器体验。
- **按失败类别做 provider 降级**（[#47910](https://github.com/openclaw/openclaw/issues/47910)，**已关闭**）— 此 Issue 今日被关闭，可能已合入代码或已放弃。若已实现，将大幅减少认证失败时的无效重试。
- **会话 TTL/最大生命周期**（[#45390](https://github.com/openclaw/openclaw/issues/45390)，5 评论）— 用户观察到 6+ 天会话积累 171k/200k tokens 和 71 次超时。自动轮换需求真实存在，但实现需要设计评审。

### 与现有 PR 关联性强、有望推进的需求
- **ComfyUI 自定义 Header 与 per-request seed**（[PR #130098](https://github.com/openclaw/openclaw/pull/130098)）— 解决本地 ComfyUI 在 HTTP 认证下的接入问题，目前 "needs proof"。
- **Session group 并发变更不丢失**（[PR #112227](https://github.com/openclaw/openclaw/pull/112227)）— 修复两个 UI 标签页同时新建 session group 时丢失其中一个的问题，目前 "waiting on author"。
- **推理流展示（reasoning stream）**（[#42276](https://github.com/openclaw/openclaw/issues/42276)，7 评论）— 用户希望 agent 能像 OpenAI/Grok 那样实时覆写思考过程。与今日 [PR #128249](https://github.com/openclaw/openclaw/pull/128249)（在 Control UI 显示继承的 reasoning）方向一致，但距离完整的覆写式流式体验仍有差距。

---

## 7. 用户反馈摘要

### 真实用户痛点
- **消息投递不可靠是最大的信任危机**
  - *来自 #128971：* "A Telegram forum-topic turn can finish all requested work, generate the final answer, and still leave the user with only the progress message."
  - *来自 #112259：* "The turn dispatches with zero reply payloads, no agent run is ever created, nothing is persisted to the session transcript, and the server shows no error."
- **多智能体配置管理在并发场景下不安全**
  - *来自 #43367：* "openclaw agents add appears unsafe when invoked concurrently: config gets overwritten repeatedly."
  - *来自 #112227：* 两个控制台标签页同时新建 session group 会静默丢失其一。
- **回归问题仍然频发**
  - *来自 #88657：* "The model worked without issues in 2026.5.26" — 升级到 5.27 就出现问题。
  - *来自 #118839：* "Restart-recovery admission keeps throwing... on a build that already includes the fix work."

### 用户对现有功能的认可
- **`/verbose` 的 argsMenu 修复**（[PR #118822](https://github.com/openclaw/openclaw/pull/118822)）— 用户主动提交 PR 补齐 "/verbose 是唯一没有 argsMenu 的 options 命令"，说明社区积极参与小粒度体验完善。
- **`--deep` 健康检查的用户期待**（[PR #130794](https://github.com/openclaw/openclaw/pull/130794)）— "A healthy WhatsApp account could appear as WARN | healthy"，修复后用户对状态输出的信任度提升。

---

## 8. 待处理积压

以下问题长期未获维护者有效响应，或虽有 PR 但长期未能合并，风险较高：

| Issue/PR | 标题 | 持续时间 | 状态 | 建议 |
|---|---|---|---|---|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多智能体并发配置覆盖/锁失败 | **5.5 个月** | OPEN，标记 `needs-info` | 已收集足够复现信息，建议维护者升级为 P0 并指派负责人 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | 投递队列消息 TTL/过期 | **6.5 个月** | OPEN，`needs-maintainer-review` | 需求明确，实现简单，长期未推进 |
| [#17840](https://github.com/openclaw/openclaw/issues/17840) | 反应（reaction）触发 agent turns | **6.5 个月** | OPEN，`needs-product-decision` | 需要产品决策，建议明确是否纳入路线图 |
| [#45415](https://github.com/openclaw/openclaw/issues/45415) | MEMORY.md 大小警告/上限 | **5.5 个月** | OPEN，`needs-maintainer-review` | 已有关联 PR，但长期处于 "waiting on author" |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | gateway 会话投递保持在 agent 绑定内（多智能体核心修复） | **8 天** | **今日被关闭**，未合并 | 需确认关闭原因：是被超车替代，还是因冲突被拒？建议重新开启或明确说明 |
| [#86022](https://github.com/openclaw/openclaw/issues/86022) | 人相关搜索请求限制过严 | **3 个月** | 今日被关闭 | 关闭原因标注为 "stale"，但原问题可能仍存在，建议评估是否真的解决 |
| [#71689](https://github.com/openclaw/openclaw/issues/71689) | SQLite 镜像损坏导致任务注册表无法恢复 | **4 个月** | OPEN，`needs-maintainer-review` | 数据损坏类问题应优先处理 |

---

## 📊 项目健康度评估

| 维度 | 评分（5分制） | 说明 |
|---|---|---|
| 社区活跃度 | ★★★★★ | Issue/PR 均达 500 条上限，新开 Issue 327 条，讨论密度高 |
| 维护者响应速度 | ★★★☆☆ | 今日维护者提交了大量 PR，但大量 Issue 仍长期处于 `needs-maintainer-review` |
| 稳定性 | ★★☆☆☆ | 消息丢失（#112259、#128971）、zombie 进程（#97616）、多智能体配置踩踏（#43367）等核心信任问题仍未解决 |
| 发布纪律 | ★★★☆☆ | beta 周期内，无新的正式版本；维护者通过 beta feedback issue 收集反馈，流程规范 |
| 积压清理 | ★★☆☆☆ | 多个 5 个月以上的 P1 问题未有关闭或推进迹象 |

**明日关注点：** ① #126424 关闭原因；② #128971 是否会很快被认领修复；③ v2026.8.1-beta.3 是否有新 beta 迭代；④ #130691 能否合入（嵌套 worker 委派）。

---

## 横向生态对比

# 个人 AI 助手开源生态横向分析报告 — 2026-08-27


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于 **beta 密集修复与大规模功能落地并行**的关键阶段。头部项目（OpenClaw、Hermes Agent、IronClaw、CoPaw）以每日 300~500 条 Issue/PR 的超高吞吐运行，但消息投递可靠性、多智能体编排稳定性仍是跨项目共性短板。与此同时，二线项目正通过差异化切入点加速追赶——NanoBot 聚焦架构债务清理和 TUI 体验，Moltis 收敛于 Provider 管理与 MCP 合规性，PicoClaw 在渠道适配层快速修补。**安全性**（配置防抹除、路径穿越、shell 注入）成为多项目共同治理重点，而 **prompt cache 优化**与**多租户能力**则是最新浮现的竞争赛道，预示生态正从单机工具向团队协作和成本敏感型生产环境演进。


## 2. 各项目活跃度对比

| 项目 | Issues（今日） | PR（今日） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 327 活跃 / 500 上限 | 365 待合并 / 500 上限 | 无（v2026.8.1-beta.3） | ★★☆☆☆ 消息丢失/多智能体核心问题未解 |
| **Hermes Agent** | 45 活跃 / 5 关闭 | 43 待合并 / 7 关闭 | 无 | ★★★☆☆ 配置防抹除落地是里程碑，但 2 个 P1 长期搁置 |
| **IronClaw** | 46 更新 / 20 关闭 | 50 更新 / 47 合并 | ✅ v1.4.0-rc.1 | ★★★★☆ 发布前夕集中清理，性能问题上升 |
| **NanoBot** | 2 新开 | 18 合并 / 13 待合并 | 无 | ★★★★☆ 合并效率极高，架构重构密集 |
| **CoPaw** | 16 新开/活跃 | 25 合并 / 20 待合并 | ✅ v2.2.0-beta.1 | ★★★★☆ 多租户 Hub + prompt cache 双线推进 |
| **PicoClaw** | 5 新开 / 2 关闭 | 2 待合并 / 4 合并 | 无（v0.3.1） | ★★★☆☆ 平稳迭代，Slack 媒体 bug 已获 PR |
| **NanoClaw** | 1 新开（P0 bug） | 18 待合并 / 6 合并 | 无 | ★★★☆☆ 社区贡献活跃但 P0 队列饥饿无解 |
| **ZeroClaw** | — | — | 无 | ★★★☆☆ 高优先级 RFC 进入实施期，但 S0/S1 bug 频发 |
| **LobsterAI** | 1 新开 | 12 合并 / 1 待合并 | 无（发布分支已合并） | ★★★★☆ 合并率 92%，稳步迭代 |
| **Moltis** | 0 新开 | 2 合并 / 0 待合并 | ✅ 20260826.01 | ★★★★☆ 收尾期，清理积压高效 |
| **NullClaw** | 1 新开 | 0 | 无 | ★★★☆☆ 平稳，唯一需求是 Skills 符号链接 |
| **TinyClaw / ZeptoClaw** | — | — | — | 无活动 |


## 3. OpenClaw 在生态中的定位

**社区规模统治力无可争议**——单日 327 条活跃 Issue + 365 条待合并 PR（双 500 上限），远超 Hermes（45/43）和 IronClaw（46/50），Ecosystem 内头部地位稳固。但其核心价值定位在于 **全渠道消息网关（gateway）+ 多智能体编排** 的复杂架构，这正是其与竞品最大的差异化——代价是 **稳定性短板同样显著**：消息静默丢弃（#112259、#128971）和多智能体并发配置踩踏（#43367）持续 5~6 个月未根治，构成信任危机。Hermes 同样聚焦 gateway 却已取得配置防护里程碑，IronClaw 则通过 1.4.0-rc.1 性能优化线拉开差异化。OpenClaw 的技术路线决定了其 **上限最高、但因复杂度导致的修复周期也最长**，在生态中扮演"能力标杆 + 稳定性反面教材"的双重角色。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息投递可靠性** | OpenClaw（静默丢弃、Telegram final reply 丢失）、NanoClaw（队列饥饿）、Hermes（gateway 永不重试）、CoPaw（定时任务推送缺失） | 失败重试/死信队列/用户可见错误，杜绝 "silent drop" |
| **多智能体并发安全** | OpenClaw（#43367 配置覆盖）、CoPaw（#6921 规划完就停）、ZeroClaw（#10408 并行运行冲突） | session-lock、并发配置写入、规划-执行一致性 |
| **配置写入防护** | Hermes（#96169 防抹除已落地）、NanoClaw（#3550 shell 注入）、PicoClaw（#3328 无效配置无警告） | fail-closed 写入、损坏配置保留快照、配置校验反馈 |
| **性能/成本优化** | CoPaw（#7335 prompt cache 81.68% vs 96.02%）、IronClaw（#7891 19 秒延迟）、OpenClaw（DeepSeek 回归） | 工具输出投影、上下文裁剪、缓存命中率提升 |
| **安全加固** | ZeroClaw（#10409 临时文件权限）、NanoClaw（路径穿越 #5564）、IronClaw（TOCTOU 逃逸 #6817） | 路径穿越防护、沙箱加固、权限最小化 |
| **多租户/企业级能力** | CoPaw（QwenPaw Hub）、ZeroClaw（RBAC RFC）、Hermes（Bot Mode 群组管理） | 多用户隔离、细粒度权限、团队部署 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道消息网关 + 多智能体编排 | 高端个人用户/开发者 | 统一 gateway 抽象，Node 后端 worker 委派 |
| **Hermes Agent** | 桌面端优先 + Gateway 双模 | 桌面重度用户、企业 | .desktop 启动器 + Electron + SSH 远端 spawn |
| **IronClaw** | 沙箱安全 + 托管部署 | 云原生/安全敏感团队 | Rust 实现，容器沙箱 + Reborn 栈重构 |
| **NanoBot** | 轻量级 CLI + TUI/WebUI | 开发者/效率工具用户 | Python 实现，AgentLoop 状态解耦 + OpenAI 兼容端点 |
| **CoPaw** | IM 渠道 + 知识库 | 中文用户为主、团队协作 | 多租户 Hub + prompt cache 可观测性 |
| **NanoClaw** | 极简部署 + 多渠道 | 自托管/硬件爱好者 | 轻量单二进制 + Node.js 运行时 |
| **Moltis** | 多 Provider 管理 + MCP 集成 | 配置敏感型用户 | 模型偏好可逆管理 + RFC 7591 动态 OAuth 注册 |
| **LobsterAI** | 桌面分享 + 资料库管理 | 内容创作者/知识工作者 | Electron 桌面 + 云端分享链路 + 分析事件管线 |
| **PicoClaw** | 多渠道适配（Slack/Telegram/IRC）| 社区运营者 | 基于 Go 的轻量通道桥接，自定义 allow patterns |
| **ZeroClaw** | 零配置 + 语音通道（Gemini Live）| 语音优先用户 | 确定性配置层 + RFC 驱动架构演进 |


## 6. 社区热度与成熟度分层

| 阶段 | 项目 | 特征 |
|---|---|---|
| **快速迭代期**（高频发布、功能与修复并进） | IronClaw（1.4.0-rc.1）、CoPaw（2.2.0-beta.1）、ZeroClaw（RFC 进入实施）、Hermes Agent（高吞吐修复） | 版本节奏紧凑，社区响应快，但稳定性风险随新功能同步上升 |
| **质量巩固期**（重构/清理为主） | NanoBot（架构债务清理 + 测试补强）、Moltis（积压清零）、LobsterAI（92% 合并率） | 非紧急修复但坚实推进技术债收口，风险低 |
| **观望/停滞期** | NullClaw、TinyClaw、ZeptoClaw | 活跃度极低，等待下一个功能信号（如 NullClaw 的 Skills symlink） |
| **攻坚转型期**（核心稳定性仍是最大短板） | OpenClaw、NanoClaw | 功能丰富但信任基石（消息可靠性/队列公平性）待加固 |


## 7. 值得关注的趋势信号

**① "静默失败"成为社区容忍度最低的问题类型。** OpenClaw 消息静默丢弃、NanoClaw 队列饥饿致 agent 失联、Hermes 配置被静默重置——这类"无日志、无错误、无人知道"的问题密集出现，说明用户对透明可观测性的要求已超越功能丰富度。**对开发者的启示**：为所有投递/执行路径建立显式确认机制，宁可失败报错也不要静默吞掉。

**② 工具输出上下文污染正在成为性能瓶颈共识。** IronClaw #7891（49KB MIME 头直入 prompt 导致 19 秒延迟）与 CoPaw #7335（prompt cache 命中率差距）本质同源——工具结果未经投影/裁剪/缓存友好处理就进入模型上下文。**对开发者的启示**：工具输出应自带可裁剪结构（如 RFC 6901 指针引用子集），而不是全量直塞。

**③ 多租户/多用户需求从零散 Issue 汇聚为官方路线图。** CoPaw QwenPaw Hub 将多租户引入 2.2.0，ZeroClaw RBAC RFC 持续推进，Hermes Bot Mode 群组管理初现——生态正从"个人单用户"转向"团队可协作"。**对开发者的启示**：早期架构设计建议预留 session 级权限隔离的空间，而非事后打补丁。

**④ 安全加固从"响应式修 bug"转向"主动式基线能力"。** Hermes 配置防抹除历经三代 PR 终落地、NanoClaw email shell 注入被社区 PR 拦下、ZeroClaw 临时文件权限成为新 PR——配置写入防护、输入校验、路径穿越防御正在成为项目安全基线的隐形门槛。**对开发者的启示**：安全不应是事后修补，建议将 fail-closed 写入与输入白名单校验作为默认架构约束。

**⑤ 渠道适配的"最后一公里"决定用户体验天花板。** Telegram `delivery_ambiguous` 丢消息（OpenClaw）、Slack 线程广播被静默丢弃（IronClaw #7925）、Mattermost 重启后路由失效（NanoClaw #3556）——每个渠道都有"看似连接成功实则行为异常"的边界场景，而这恰恰是用户感知最强烈的部分。**对开发者的启示**：优先补齐渠道协议的边界 case（分片、话题、回执歧义、重启恢复），比增加新渠道更具用户价值。

---

*报告基于 2026-08-27 各项目 GitHub 公共数据生成*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-27

## 今日速览

今日 NanoBot 项目活跃度极高，24小时内产生35条 PR 更新和2条 Issue，其中 Main 分支合并流显著：18条 PR 已完成合并/关闭，13条新 PR 进入待合并队列。值得关注的是，项目在 Agent 架构层面推进密集，多条 PR 围绕 AgentLoop 状态解耦、推理生命周期收口、usage 记录显式化等内部重构展开，且均附带完整测试；同时 TUI/WebUI 前端的体验优化（剪贴板图片粘贴、技能自动补全、连接异常诊断）也同步落地。社区侧，新开 Issue 中有一条关于 session 路径穿越的安全修复报告（#5564），由自动化 agent 提交，需重点跟进；另有一条关于 `read_session` 通配符查询的历史记录读取缺陷（#5550）已关闭。综合来看，项目正处于高频迭代期，架构质量意识强，安全性、稳定性与用户体验多条线并进。

## 项目进展

今日共 18 条 PR 合并或关闭，覆盖领域广泛，以下为关键合并：

### 架构与核心 Agent 重构

- **[#5559]** refactor(agent): decouple loop from message tool state — 将消息工具的同会话投递结果通过结构化工具结果上报，在运行边界聚合响应用户状态，移除 MessageTool 每轮状态与冗余的 TurnContext 注入。*架构清晰度提升明显。*
- **[#5558]** refactor(agent): load MyTool through tool loader — 通过 ToolContext 传递 RuntimeControl，使 MyTool 参与标准内置发现流程，并移除 AgentLoop 中的手动注册分支。*消除了特判路径。*
- **[#5556]** fix(agent): complete native reasoning lifecycle — 在 answer 内容、本地工具执行、hosted 工具事件、流恢复等多处关闭 provider-native 推理通道，并补充正向排序测试。*推理生命周期管理趋于完整。*
- **[#5555]** refactor(agent): remove duplicate progress streaming path — 删除未使用的 `AgentRunSpec.progress_callback` 输入和第二个 provider 流状态机，统一到 per-run hook 路径。*去重后维护成本下降。*
- **[#5546]** refactor(agent): make run usage explicit — AgentLoop 返回 AgentRunResult，移除进程级 `_last_usage` 侧通道，API 通过 per-run hook 捕获用量，`/status` 读取 session 级用量。*修复了潜在的并发污染问题。*
- **[#5481]** feat(usage): add unified provider usage backend — 为网关管理的 WebUI/TUI 会话中每次重试管理的 provider 调用记录一条内容无关的 usage 行。*用量统计能力补全。*

### 前端/TUI/WebUI 体验

- **[#5534]** feat(tui): autocomplete skill references — TUI 中支持 `$skill-name` 引用输入时弹出筛选 picker，支持方向键/Enter/Tab/Escape 操作。*技能发现成本大幅降低。*
- **[#5533]** fix(tools): keep find_files scans responsive — find_files 扫描移入 worker 线程，用预算制 os.scandir 替换重复 pathlib 调用，支持取消传播。*大目录扫描卡顿问题修复（此 PR 标注 p1 优先级）。*
- **[#5538]** refactor(tui): clarify active composer actions — 区分“Enter 立即发送”与“Tab 当前响应完成后发送”，在占位符中动态提示。*交互语义更明确。*
- **[#5543]** fix(tui): surface chat connection failures — 区分初始化期、健康恢复、持续不可用、不可恢复故障，仅在连接失败后查询 `/health` 端点。*连接异常可视化，排查效率提升。*
- **[#5491]** fix(webui): keep answer text outside reasoning shell — WebUI 中 answer 切片跨 answer→tool→answer 轮次保留，推理/工具活动收敛到活动面板，最终合成单条消息。*多轮对话中答案丢失问题修复。*
- **[#5548]** refactor(webui): isolate websocket application orchestration — 将重连水合逻辑移入 WebUISessionProjection / WebUIOutboundProjector，统一管理 outbound 事件路由与 inbound envelope。*WebUI 状态编排更集中。*
- **[#5519]** fix(webui): compact single-pane chat header — 压缩单栏聊天头部与顶部间距，增加模型设置入口，加速历史向上滚动。*UI 密度优化。*

### 性能与文档

- **[#5557]** perf(tui): skip redundant dependency installs — 通过 `tui/package.json` 与 `tui/bun.lock` 的 SHA-256 指纹缓存，跳过重复的 `bun install --frozen-lockfile`。*TUI 启动时间优化。*

> 综合来看，今日合并集中在**架构债务清理**与**交互细节补强**，未包含实验性新功能，但大量 `p2` 优先级重构在持续压低技术债，整体技术健康度呈上行趋势。

## 社区热点

今日最值得关注的讨论来自 **Issue #5564**（自动化 Agent 提交）：

> **【OPEN】** [#5564] fix(session): prevent path traversal in session file handling
> 作者: `arena-ai-coding-agent[bot]` | 评论: 0 | 👍: 0
> 摘要: `nanobot/session/manager.py` 中 session ID 直接拼接文件路径，恶意 session ID（如 `../../etc/passwd`）可导致路径穿越。作者给出了样例代码与修复思路。

**分析：** 该类“AI 自动发现安全漏洞”的 issue 在明星开源项目中越发常见（通常为头部的安全扫描 agent 自动提交）。虽然当前无评论互动，但路径穿越属于**高危安全类问题**，潜在影响包括任意文件读取/覆盖。考虑到 NanoBot 可能被作为本地服务运行，该问题建议尽快响应——优先确认当前 session ID 的输入来源与清洗逻辑，并在下个小版本中合入修复分支。

其余 PR/Issue 互动量均较低（评论数为 0），今日社区讨论氛围偏“建设推进型”而非“问题争论型”，说明项目贡献者协作节奏紧凑。

## Bug 与稳定性

按严重程度排列：

| 严重程度 | 编号 | 标题 | 状态 | 说明 |
|---|---|---|---|---|
| 🔴 高（安全） | [#5564](https://github.com/HKUDS/nanobot/issues/5564) | fix(session): prevent path traversal in session file handling | OPEN | session 文件路径拼接存在路径穿越风险，尚无 fix PR 关联，需人工介入评估 |
| 🟠 中 | [#5550](https://github.com/HKUDS/nanobot/issues/5550) | [bug] read_session tool returns empty history when models use wildcard queries for the optional filter | CLOSED | `read_session` 在模型以 `"*"`、`".*"` 或空白字符串查询时返回空历史；已关闭，但需确认修复是代码修复还是“误用转文档” |

**稳定性相关合并修复：**

- **[#5556] fix(agent): complete native reasoning lifecycle**：修复了流恢复/工具执行等边界场景推理通道未关闭的问题，已合入。
- **[#5533] fix(tools): keep find_files scans responsive**：p1 优先级的扫描卡顿修复已合入，配合取消传播机制，大目录场景响应性预期明显改善。

## 功能请求与路线图信号

今日**无新增功能请求 Issue**，但有多条 **PR 指向明确的新功能增量**，以下可视为下一版本的能力预告：

| 功能 | PR | 状态 | 预计纳入版本 |
|---|---|---|---|
| TUI 剪贴板图片粘贴（Ctrl+V / Alt+V） | [#5563](https://github.com/HKUDS/nanobot/pull/5563) | OPEN | 下一特征版本 |
| OpenAI 兼容流式端点输出工具执行进度事件（Closes #3698） | [#5562](https://github.com/HKUDS/nanobot/pull/5562) | OPEN | 下一特征版本 |
| Spawn 级模型预设（`spawnPresets` allowlist，Resolves #4231） | [#5561](https://github.com/HKUDS/nanobot/pull/5561) | OPEN | 下一特征版本 |
| 裸 `nanobot` 命令默认进入 Agent 模式 | [#5560](https://github.com/HKUDS/nanobot/pull/5560) | OPEN | CLI 行为调整，可能随下个 minor 发布 |
| 集成的 mst-python 元搜索 provider（跨多引擎 RRF 融合） | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | OPEN | p1 待合并，观察窗口较长，可能进 v0.5+ |
| WebSocket 模型重试状态可见性（NAN-34） | [#5504](https://github.com/HKUDS/nanobot/pull/5504) | OPEN | 等待 review，同 TUI/WebUI 发布周期 |

其中 **#5562（工具执行进度事件流）** 对依赖 OpenAI 兼容端点的下游应用具有重要意义，建议社区关注 merge 进度。

## 用户反馈摘要

今日收集到的用户反馈相对较少，主要来自 Issue 与 PR 描述中的使用场景诉求：

1. **多会话引用场景的确定性缺失（#5550）**：用户反映：当模型引用 `@session` 并要求“查看其历史”时，模型常以通配符查询（`"*"`、`".*"`、空白串）调用 `read_session`，期望拉取最近消息，却得到空历史。这暴露了 `read_session` 的通配符语义不明确，且模型在长上下文下偏好通配符表达。*回复方向：确认是否已在 closed 时附带修复策略（如显式 `READ_ALL` 常量替代通配符），避免模型猜测。*

2. **TUI 连接失败的可见性诉求（#5543）**：该 PR 的提出背景是用户在使用 TUI 时无法区分“网络抖动中”与“服务彻底不可用”。本次合入后，UI 将区分多种连接状态（初始化/恢复/持续不可用/不可恢复），并仅在连接失败后查询 `/health` 端点，避免多余请求。*对时常在弱网环境下使用 TUI 的用户属实质性体验改善。*

3. **技能引用输入效率（#5534）**：此前输入 `$skill-name` 需要手动记忆技能名与拼写，缺少发现性；本次合入的自动补全显著降低了 TUI 下技能使用门槛，或间接推动技能类功能的活跃度。

## 待处理积压

以下为长期未得到合入/响应的重要 PR 与 Issue，建议维护者优先审视：

| 类型 | 编号 | 标题 | 等待周期 | 优先级 | 备注 |
|---|---|---|---|---|---|
| PR | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent): integrate mst-python as a metasearch provider | 自 08-03 起 24 天未合并 | p1 | 功能价值明确（多引擎 RRF 融合），合入后对搜索质量增益可量化；建议安排 review |
| PR | [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status (NAN-34) | 自 08-24 起 3 天 | p2 | 标注 `conflict`，需要 rebase 处理；WebUI/TUI 均涉及，合入影响面较大 |
| Issue | [#5564](https://github.com/HKUDS/nanobot/issues/5564) | fix(session): prevent path traversal in session file handling | 今日新开 | 安全 | 暂无维护者响应，建议尽快指派处理 |

---

*报告生成时间：2026-08-27 | 数据源：HKUDS/nanobot GitHub 仓库 | 客观性声明：本报告基于公开元数据生成，不包含维护者内部沟通信息。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-27

---

## 1. 今日速览

过去24小时内，Hermes Agent 项目异常活跃：**50 条 Issues 更新（45 活跃/5 关闭）** 与 **50 条 PR 更新（43 待合并/7 关闭）** 双双触及数据面板上限，但**无新版本发布**。值得关注的是今日出现了明显的问题集中爆发：桌面端 SSH 远端启动超时（#96129、#96187）、配置写入防护（#96169）及执行回执（#96165）三个议题同日关闭，显示出维护者在并行推进稳定性修复；与此同时，**Gateway 模式消息投递链路**（#91653、#77836）和**配置文件防抹除**（#96169）成为社区最关切的稳定性议题。整体项目处于高吞吐的修复与功能并进状态，但 P1 级 Bug 仍有两例未解决，健康度中等偏上。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日关闭的 PR 反映出两个重要的稳定性推进方向：

### 3.1 配置写入防护机制终于落地（三次迭代后合并）
- **[#96169 [CLOSED] fix(config): fail-closed write guard — refuse unparseable/non-mapping config.yaml instead of wiping it](https://github.com/NousResearch/hermes-agent/pull/96169)** — 这是一条历经三代的修复线：由 #14276 引入防护，被 #65975 修复空配置误判，再经 #71385 加强备份逻辑，最终在今日合并的 #96169 中统一收口。该 PR 确保了配置写入路径在遇到损坏 YAML 时**失败关闭**并保留 `.corrupt.*.bak` 快照，覆盖 CLI、`hermes console` 与 dashboard 等全部写入面。
- 同时关闭的 **[#65975](https://github.com/NousResearch/hermes-agent/pull/65975)** 与 **[#71385](https://github.com/NousResearch/hermes-agent/pull/71385)** 是这一防线的中间迭代。

### 3.2 SSH 远端启动回归修复
- **[#96187 [OPEN] fix(desktop): stop double-quoting expandRemotePath fragments in the SSH spawn path](https://github.com/NousResearch/hermes-agent/pull/96187)** — 直接针对今日报告的 #96129（SSH 远端 bootstrap 超时），修复 POSIX 远端上路径参数被双重引号包裹导致的 20 秒 exec 超时问题，目前待合并。

> **总体判断**：虽然今日合并/关闭数量不多，但配置防护线的最终合并是**长期技术债的清偿**，对防止用户配置静默丢失具有里程碑意义。

---

## 4. 社区热点

### 4.1 最受关注 Issue（104 条评论）
- **[#66616 [OPEN] Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616)** — 自动化探针连续报告 Skills Hub 索引过期（29.8h 超 26h 限制），已持续**40天**，累计 104 条评论。这虽非用户直接反馈，但长时间的 `degraded` 状态会影响技能市场功能的可用性，社区对此缺少维护者响应。

### 4.2 高赞功能请求
- **[#85845 [Feature]: Official OpenSpec plugin for Hermes Agent](https://github.com/NousResearch/hermes-agent/issues/85845)** — 获得 3 个 👍，社区对 spec-driven development 工作流有明确诉求，目前无维护者回应。

### 4.3 Gateway 消息投递链路关注
- **[#77836 Weixin: rate limit circuit breaker creates infinite retry loop](https://github.com/NousResearch/hermes-agent/issues/77836)** — 获得 1 个 👍，该 Issue 描述了微信环境下消息投递死循环的根因分析，已有 3 条评论讨论，尚无 fix PR。

> **趋势判断**：社区热点集中在 **Gateway 模式的消息可靠性**（#77836、#91653、#96134 同属该领域）与**技能生态**（#66616、#85845）两个方向。

---

## 5. Bug 与稳定性

### P1 级（严重）
| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | 桌面端从 .desktop 启动器启动时 Electron chrome-sandbox 缺少 setuid 导致**静默失败**（无窗口、无报错） | OPEN，2个月+ | 无 |
| [#86366](https://github.com/NousResearch/hermes-agent/issues/86366) | `archive_and_compact` 将携带的尾部消息标记为 compacted=1，导致每次压缩后**重复存储** | OPEN, 13天 | 无 |

### P2 级（中等）
| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#96129](https://github.com/NousResearch/hermes-agent/issues/96129) | SSH 远端 bootstrap 更新后超时（detached serve 占用 SSH 通道） | [#96187](https://github.com/NousResearch/hermes-agent/pull/96187) 已提交 |
| [#91653](https://github.com/NousResearch/hermes-agent/issues/91653) | Gateway 投递失败后**永不重试**（owner 进程存活时无法被回收） | 无 |
| [#77836](https://github.com/NousResearch/hermes-agent/issues/77836) | 微信限流熔断器每次重试都重置冷却时间，形成**无限重试循环** | 无 |
| [#96164](https://github.com/NousResearch/hermes-agent/issues/96164) | GHEC Copilot provider 忽略企业 token exchange / API host 配置 | 无 |
| [#96107](https://github.com/NousResearch/hermes-agent/issues/96107) | MCP OAuth 登录 monday.com 失败（issuer 不匹配） | 无 |
| [#96063](https://github.com/NousResearch/hermes-agent/issues/96063) | 桌面端模型选择器隐藏 provider 信息，本地存储过期值导致**静默发送错误 provider** | 无 |

### 桌面端新报 Bug 群（今日集中出现）
- [#96160](https://github.com/NousResearch/hermes-agent/issues/96160) 流式输出时视口**自动滚到顶部**
- [#96139](https://github.com/NousResearch/hermes-agent/issues/96139) 关闭最后一个窗口时**静默绕过退出确认**，强制终止后端
- [#96175 PR](https://github.com/NousResearch/hermes-agent/pull/96175) workspace 面板 **"Maximum update depth exceeded"** 崩溃

> **健康度观察**：今日新报 Bug 集中在桌面端交互细节，且均有对应 PR 在跟进；但 **#51327 与 #86366 两个 P1 已持续多日未获处理**，是项目当前最大的稳定性风险点。

---

## 6. 功能请求与路线图信号

### 高概率纳入下版本（已有实现 PR 或强需求信号）
- **Bot Mode 群组管理增强** — [#91329](https://github.com/NousResearch/hermes-agent/issues/91329)（群设置中管理成员）与 [#96136](https://github.com/NousResearch/hermes-agent/issues/96136)（按成员设置模型/provider/reasoning）双双提出，但 #96136 被标记为 **duplicate**，说明 #91329 已被纳入路线图。
- **`delegate_task` 每子任务模型/provider 参数** — [#96014](https://github.com/NousResearch/hermes-agent/issues/96014) 要求与 cron 任务同级参数覆盖能力，符合编排智能体的合理诉求，设计成本较低。
- **免密钥搜索失败时故障转移** — [#91609](https://github.com/NousResearch/hermes-agent/issues/91609)（Firecrawl 403 后继续尝试下一个 provider）+ [#96186 PR](https://github.com/NousResearch/hermes-agent/pull/96186)（Tavily 限额后继续尝试），两条互补，预计可合并推进。

### 观望中（需维护者决策）
- **OpenSpec 官方插件**（[#85845](https://github.com/NousResearch/hermes-agent/issues/85845)）— 社区 3 👍 但无维护者响应。
- **Hermes Collective Wisdom Agent V1**（[#94266 PR](https://github.com/NousResearch/hermes-agent/pull/94266)）— 大型功能 PR，已打上 `needs-decision` 标签，等待架构评审。
- **Telegram Business 委托收件箱**（[#26654 PR](https://github.com/NousResearch/hermes-agent/pull/26654)）— 已存活 3 个月+ 仍未合并，涉及消息安全边界，需要谨慎评审。

---

## 7. 用户反馈摘要

- **"路径不可见"类问题反复出现**：多个 Issue（#84361、#96129、#96187）都包含"日志中不显示路径/参数"的抱怨，用户调试困难。社区对可观测性的诉求正在上升。
- **配置静默丢失的恐惧真实存在**：#96169 的关闭获得了社区积极回应，用户对"修改配置时被静默重置"有着明确的痛点记忆。
- **Gateway 模式下功能不一致**：#96134（USER.md/MEMORY.md 不被注入）明确指出"CLI 正常但 Gateway 失败"的割裂体验，用户期望两种模式行为一致。
- **桌面端日常使用的小痛点集中**：流式滚动跳跃（#96160）、退出确认被绕过（#96139）、模型与 provider 显示脱节（#96063）——这些是高频操作场景。

---

## 8. 待处理积压

### 长期未响应的 Issue（需维护者关注）
| Issue | 创建时间 | 描述 | 备注 |
|-------|---------|------|------|
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | 2026-06-23（66天） | P1 桌面端 .desktop 启动静默失败 | 两个 P1 之一，有 12 条评论 |
| [#32504](https://github.com/NousResearch/hermes-agent/issues/32504) | 2026-05-26（93天） | 冗余代码 `_budget_grace_call` 与 `_budget_exhausted_injected` 清理 | 低优先级但长期未动 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 2026-07-18（40天） | Skills index 持续 degraded（104 条评论） | 自动化探针长期报警 |

### 长期滞留的 PR（需决策或推进）
| PR | 创建时间 | 描述 | 阻塞原因推测 |
|----|---------|------|------------|
| [#26654](https://github.com/NousResearch/hermes-agent/pull/26654) | 2026-05-15（104天） | Telegram Business 委托收件箱 | 涉及消息安全边界，需安全评审 |
| [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) | 2026-08-24 | Collective Wisdom Agent V1（大型） | 标有 `needs-decision`，或需架构拆分 |
| [#43481](https://github.com/NousResearch/hermes-agent/pull/43481) | 2026-06-10（78天） | 文档修正：`hermes skills` → `hermes skills config` | 纯文档改动，应可快速合并 |

---

## 总结

Hermes Agent 项目今日处于**高活跃、多线并进**的状态：配置防护机制的最终落地是重要里程碑，SSH 远端回归已有修复 PR 在途。但项目也面临**两个 P1 级 Bug 长期未处理**和 **Gateway 消息投递链路存在系统性风险**（#91653 与 #77836 指向同一深层架构问题）的挑战。社区对桌面端体验细节的反馈密度上升，建议维护团队在下一版本中优先处理 P1 积压，并对 Gateway 投递回收机制进行架构级评审。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-27** | **数据来源：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

过去24小时内，PicoClaw 社区保持着**中高活跃度**，共产生 7 条 Issue 更新（5 新开/活跃，2 关闭）和 6 条 PR 更新（2 待合并，4 已合并/关闭），可见开发与反馈循环顺畅。核心进展体现在几个方面：一是 **Slack 媒体上传缺陷**（#3338）收到了针对性修复 PR（#3340），作为公开 issue 中明确的 bug 已被快速认领，说明维护者对渠道适配问题响应积极；二是 **路由代理上下文管理缺陷**（#3301/#3316）的相关修复 PR 已完成合并，修复了会话记忆与自动压缩失效的问题，属于功能性完善；三是 **Telegram 私聊话题支持**（#3315）已合入，补全了多平台体验。值得注意的是，今日有 4 个 PR 在一日内集中关闭（含 3 个带 `stale` 标签），且合并的 PR 均来自 8 月初的提交，这暗示维护者可能执行了一轮 PR 清理/合并操作，旨在收束旧账。目前仍有 2 个 PR 处于待合并状态，其中 `fix(line): warn on inert webhook_host / webhook_port`（#3329）已停留超过两周，但已配套对应的 issue 修复方案，预计近期将会被处理。项目整体处于**平稳迭代、快速修复**的健康状态，但新版本发布节奏暂缓（近24小时无 release）。

---

## 2. 版本发布

**近24小时无新版本发布。** （上一已知版本为 v0.3.1）

---

## 3. 项目进展

今日合入的 PR 虽非全新功能，但解决了此前阻塞特定用户场景的痛点，其对项目完整性的贡献值得肯定：

- **[PR #3316 - fix: routed-agent context management not respecting history, summarization, compression, and seahorse bootstrap](https://github.com/sipeed/picoclaw/pull/3316)（已合并）**
  - **状态**: 已关闭
  - **意义**: 修复了通过 dispatch rules 路由到非默认代理时，会话历史不被记忆、自动压缩永不触发的问题。这直接解决了 Issue #3301 中用户报告的核心痛点。合入此举修正了多代理路由场景下的会话管理机制，提升了项目在复杂配置下的可靠性。

- **[PR #3315 - Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)（已合并）**
  - **状态**: 已关闭
  - **意义**: 支持在启用论坛主题模式的 Telegram 私聊中识别 `IsTopicMessage` 标记，扩展了 Telegram 渠道的兼容性。该项目合入后，PicoClaw 在 Telegram 平台上的功能覆盖更加完整。

- **[PR #3314 - Fix: agent not able to execute shell command added to customAllowPatterns](https://github.com/sipeed/picoclaw/pull/3314)（已合并）**
  - **状态**: 已关闭
  - **意义**: 修复了 `customAllowPatterns` 配置不生效、默认拒绝模式优先于用户自定义白名单的 bug。这直接关系到安全策略的执行正确性，合并后用户配置的 shell 命令（如 `git push`）将按预期放行。

- **[PR #1549 - fix: merge PR #1448 #1447 #1446 #1444](https://github.com/sipeed/picoclaw/pull/1549)（已关闭/合并）**
  - **状态**: 已关闭（超长期 PR）
  - **意义**: 该合并型 PR 自 3 月开启，今日最终关闭，表明维护者正在清理历史遗留 PR，将分散的修复统一合入主干。

---

## 4. 社区热点

今日讨论热度最高的议题集中在**长聊天历史的体验优化**与 **IRC 协议适配**上：

- **[Issue #3287 - [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**（评论 8 条，开放中）
  - 该 issue 讨论了 IRCv3 协议中长消息被自动截断的问题，用户希望 PicoClaw 能将 512 字节以上、由客户端拆分的多条消息视为一条完整消息处理。虽然创建于上月，但今日仍有更新（8/26），说明社区对多行/长文消息在 IRC 渠道的体验非常关注，且该需求尚未实现。

- **[Issue #3281 - [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)**（评论 7 条，开放中，👍 1）
  - 该 issue 反馈 Web UI 在会话历史较长时输入会出现延迟，直接影响了用户最核心的交互体验。虽然单个 👍 不高，但评论数较多，且“历史越长越卡”的性能问题通常会影响大量重度用户，值得优先关注。

- **相关讨论链**：注意 #3281（Web UI 卡顿）与 #3316（路由上下文管理）存在一定关联性——若未合并前的路由上下文不生效导致无限堆积历史，可能加剧 UI 负担。（但需确认是否同一个历史变量，暂为推测）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重性 | Issue | 状态 | 详情 | 是否有修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| 高 | [**#3338 - Slack 无法附加图片媒体内容**](https://github.com/sipeed/picoclaw/issues/3338) | OPEN | `SendMedia` 未设置 `FileSize` 导致 SDK 以“文件大小为0”为由拒绝所有上传。这说明集成中的参数构造不完整，导致 Slack 渠道的图片功能完全无法使用。 | ✅ 已有 [**PR #3340**](https://github.com/sipeed/picoclaw/pull/3340)（OPEN） |
| 中高 | [**#3301 - /clear 和会话自动压缩在路由代理中不工作**](https://github.com/sipeed/picoclaw/issues/3301) | CLOSED | Discord/Telegram 渠道通过 dispatch rules 路由后，/clear 命令与自动压缩均失效，导致会话无限增长。此 bug 影响代理在特定聊天中的记忆功能与性能。 | ✅ 已修复（PR #3316 合并） |
| 中 | [**#3328 - line.settings.webhook_host / webhook_port 配置项无效**](https://github.com/sipeed/picoclaw/issues/3328) | CLOSED | 配置项在代码中有默认值、有文档，但没有任何消费者去读取它。设置后不会产生任何效果且无警告，属于功能失效的类型。 | ✅ 已修复（PR #3329 待合并，但 issue 与 PR 今日已关闭，修复方案已就绪） |
| 中 | [**#3339 - Google Antigravity 生成返回通用 429 错误**](https://github.com/sipeed/picoclaw/issues/3339) | OPEN | 模型发现和身份验证正常，但每个生成请求都返回 `RESOURCE_EXHAUSTED`，且响应中无配额信息。这将导致该提供商完全不可用。 | ❌ 暂无 PR |
| 中 | [**#3346 - 关于 RKLLM 模型回复异常**](https://github.com/sipeed/picoclaw/issues/3346) | OPEN | 用户报告在 ARM 开发板上运行 RKLLM（Qwen3.5-0.8B_w4...）时出现回复异常，附截图。该 issue 今日创建、零评论，尚需更多信息与确认。 | ❌ 暂无 PR |
| 低 | [**#3281 - Web UI 聊天输入延迟**](https://github.com/sipeed/picoclaw/issues/3281) | OPEN | 历史较长时输入卡顿，高评论、1👍，用户体验影响大但优先级取决于复现比例。 | ❌ 暂无 PR |

---

## 6. 功能请求与路线图信号

今日的 Issue 更新中，明确的功能请求有一项：

- **[Issue #3287 - IRC 长消息支持](https://github.com/sipeed/picoclaw/issues/3287)**（开放中）
  - 这一需求将 IRC 中分片的长消息合并为一条完整消息处理，属于对 IRCv3 协议的深度适配。考虑到 PicoClaw 已将 IRC 作为默认渠道之一，且该 issue 讨论热度较高（8条评论），**有较大概率被纳入下一迭代**（如 v0.4.x）作为渠道层优化。

此外，从已合并的 [#3315 - Telegram 私聊话题支持](https://github.com/sipeed/picoclaw/pull/3315) 来看，**跨渠道体验一致性**（如话题识别）是近期的重点方向。

---

## 7. 用户反馈摘要

- **路由上下文管理的共识**：用户 `j-v` 在 #3301 及 #3316 中详细描述了路由代理不记忆历史的问题，说明在多代理/频道路由场景中，会话恢复与记忆机制是**高频使用场景**，其故障对“以代理为中心”的管理模式影响较大。修复后，此类用户的体验将得到显著提升。

- **Web UI 性能痛点**：`xpader` 在 #3281 中反馈输入框延迟，且明确指出了操作路径（历史越长越卡），反映了用户对长会话工作流的依赖。当前无直接 PR，建议维护者优化历史渲染策略或增加虚拟滚动。

- **配置健壮性的需求**：`qing-wang` 在 #3328 中发现配置无效且无警告，这体现出用户期望**配置即所得**（或至少得到反馈）。这一反馈有助于推动项目完善配置校验与可观测性，后续或可引导出类似“配置静态检查”的改进。

- **渠道媒体功能的期待**：`octavioturra` 在 #3338 中给出了详尽的失败原因分析（代码路径指向 `slack-go SDK` 版本对 `FileSize` 的强制要求），说明社区**专业度较高**，贡献者能快速定位底层原因，维护者响应也很及时（#3340 已提交）。

---

## 8. 待处理积压

以下几项在近 24 小时有更新，但尚未完成闭环，建议维护者重点关注：

- **[PR #3329 - fix(line): warn on inert webhook_host / webhook_port instead of seeding them](https://github.com/sipeed/picoclaw/pull/3329)**（OPEN，已存活 15 天）
  - 修复计划明确，对应 issue #3328 已关闭。该 PR 处于待合并状态已超两周，建议整理本轮合并队列时优先处理，避免长时间霸占待合并列表。

- **[Issue #3339 - Antigravity 429 错误](https://github.com/sipeed/picoclaw/issues/3339)**（OPEN，已存活 10 天）
  - 该问题导致 Google Antigravity 提供商的生成功能完全不可用，且已 10 天无技术响应。若 PicoClaw 官方支持该提供商，这将是一个阻塞性 bug；若为实验性支持，建议在文档中标注状态。

- **[Issue #3346 - RKLLM 回复异常](https://github.com/sipeed/picoclaw/issues/3346)**（OPEN，今日创建）
  - 刚提交的新 issue，暂无评论。ARM 端侧模型是重要场景，建议尽快引导用户补充环境信息与日志，避免挂起。

- **[Issue #3287 - IRC 长消息支持](https://github.com/sipeed/picoclaw/issues/3287)**（OPEN，存活超 1 个月）
  - 已开放超过一个月，是社区反复提及的功能诉求。建议维护者评估是否纳入路线图，给予明确反馈，避免用户长期等待。

---

> 以上日报基于 2026-08-27 当日 GitHub 数据快照生成，全部引用均附有原文链接。如需当日更早的上下文或跨周趋势，可回溯前序日报或整体数据。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：** 2026-08-27  
**数据窗口：** 2026-08-26 ~ 2026-08-27  
**数据来源：** github.com/qwibitai/nanoclaw


## 1. 今日速览

NanoClaw 项目昨日迎来一轮高强度的 bug 修复冲刺：过去 24 小时共产生 24 条 PR 更新（其中 18 条待合并），由社区贡献者 **Agi-Asi** 主导提交了 13 个修复类 PR，覆盖 setup 脚本、容器唤醒、任务日志、Node 版本下限、信号通道等多个模块，整体活跃度处于**高位**。核心团队（glifocat）关闭了 2 个 Mattermost 集成相关的修复 PR（#3556、#3557），修复了卡片路由在宿主重启后失效的问题。与此同时，一个新的 **P0 级可靠性 Bug**（#3568）被报告——待处理的 `system` 行可能阻塞入站队列，导致 agent 静默失联，目前尚无关联修复 PR。另有安全相关的增强请求（#574）在搁置 6 个月后正式关闭。总体而言，项目正处在 **"大版本前密集修 bug + 补稳定性"** 阶段，社区贡献者活跃度极高，但大面积待合并 PR 也提示维护者需要尽快排期 review 和合并。


## 2. 版本发布

**无新版本发布。** 但 `[Unreleased]` changelog 中有大量的 fix 累积（见下节），预计下一次发布将是一个重要的补丁版本。


## 3. 项目进展

### 已合并/关闭的 PR（6 条）

| PR | 标题 | 类型 | 作者 | 关键信息 |
|---|---|---|---|---|
| [#3556](https://github.com/nanocoai/nanoclaw/pull/3556) | fix(mattermost): recover card thread after restart | Bug 修复（核心团队） | glifocat | 修复 Mattermost 交互卡片在宿主重启后因内存缓存丢失导致的线程路由失效问题 |
| [#3557](https://github.com/nanocoai/nanoclaw/pull/3557) | fix(mattermost): improve initial setup and SiteURL handling | Bug 修复（核心团队） | glifocat | 改进 Mattermost 通道的初始配置流程及 SiteURL 处理逻辑 |
| [#574](https://github.com/nanocoai/nanoclaw/issues/574) | containers lack jq | 增强（低优先级） | ErikDeBruijn | **关闭**（未采纳）——建议容器内置 jq 以避免 `node -e` 解析带来的 eval 攻击风险；维护者选择不采纳该建议 |

> **分析：** Mattermost 通道的 2 个修复 PR 在同一天内关闭，说明核心团队正在集中清理该通道的已知问题。卡片路由依赖内存缓存的架构缺陷被修复，提升了通道在重启后的可用性。Issue #574 的关闭（不予采纳）表明维护者可能正在考虑其他 JSON 解析方案，或在安全策略上有不同取舍。

### 待合并的重要 PR（18 条待合并中筛选）

| PR | 标题 | 作者 | 影响面 |
|---|---|---|---|
| [#3555](https://github.com/nanocoai/nanoclaw/pull/3555) | fix(setup): raise the Node floor to 22.14.0 | Agi-Asi | **构建/依赖** —— better-sqlite3 13 在较低 Node 版本上段错误，提升 Node 版本下限可避免大量用户踩坑 |
| [#3558](https://github.com/nanocoai/nanoclaw/pull/3558) | fix(container): raise the Claude SDK output-token cap | Agi-Asi | **核心运行时** —— 将 Claude SDK 输出 token 上限提升至模型真实上限，解决长输出被截断问题 |
| [#3552](https://github.com/nanocoai/nanoclaw/pull/3552) | fix(codex): enforce MCP-only policy behind OneCLI | wildcard | **安全策略** —— 在 OneCLI 模式下强制 Codex 走 MCP-only 策略 |
| [#3551](https://github.com/nanocoai/nanoclaw/pull/3551) | fix(config): enforce per-group MCP policy and OneCLI gateway routing | wildcard | **配置/路由** —— 强制每组 MCP 策略生效，并修复 OneCLI 网关路由 |
| [#3549](https://github.com/nanocoai/nanoclaw/pull/3549) | fix(mailbox): use INSERT OR IGNORE for retried message delivery | aniruddhaadak80 | **数据可靠性** —— 修复重试投递因唯一约束冲突导致的无限崩溃循环 |
| [#3550](https://github.com/nanocoai/nanoclaw/pull/3550) | fix(skills): quote email substitution and tighten validation regex | aniruddhaadak80 | **安全修复** —— email 验证正则允许 shell 元字符（`;`、反引号、`$()`），且替换时未加引号，存在命令注入风险；同时修复含撇号邮箱导致的 onboarding 中断 |

> **进度评估：** 24 小时内 6 条 PR 被关闭/合并，18 条待合并 PR 多为 Agi-Asi 提交的集中性修复批次，主题涵盖 **setup 脚本健壮性、容错增强、Node 版本下限、任务日志、测试精确性、Channels 表情规范化、CLI 文档** 等，当前积压量较大（18 条待合并），建议维护者集中安排一轮 review。


## 4. 社区热点

今日社区讨论热度最高的是围绕 **Agi-Asi 提交的 13 条跨模块 PR 批次**（#3553~#3567）。虽然单条 PR 的评论数不高，但同一作者在短时间内批量提交覆盖多个模块的修复，且全部标注 "follows-guidelines"，说明社区存在 **深度参与者** 在系统性解决长期积累的技术债。这批 PR 覆盖范围包括：

- **Setup 体验：** PATH 配置、signal-cli 等待锁超时、非交互式 apt、launchd plist 引导（#3561、#3562、#3563、#3567）
- **运行时可靠性：** 容器反复唤醒失败通知用户、Claude SDK 输出 token 上限提升、Node 版本下限提升（#3555、#3556、#3558）
- **数据一致性：** task_log 写入系列 ID、Node 25+ stderr 断言精确性（#3554、#3564）
- **渠道修复：** 表情符号跨平台标准化（#3553）

**热点 Issue 分析：** 新开的 [#3568](https://github.com/nanocoai/nanoclaw/issues/3568)（pending system rows starve the inbound queue）是当前社区最关注的运行稳定性问题——一旦 `kind='system'` 行累积超过 `maxMessagesPerPrompt`（默认 10），**agent 会对所有入站消息静默失联**，且不产生任何错误日志。虽然暂无评论，但该问题一旦被广泛遭遇，极可能引发大量用户反馈。


## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题标题 | Issue/PR | 是否已有修复 PR |
|---|---|---|---|
| **P0 严重** | Pending `system` 行耗尽入站队列，agent 静默停止响应所有入站消息 | [#3568](https://github.com/nanocoai/nanoclaw/issues/3568) | ❌ 无 |
| **P1 高** | `insertMessage()` 使用普通 INSERT，重试时因唯一约束冲突导致无限崩溃循环 | [#3549](https://github.com/nanocoai/nanoclaw/pull/3549) | ✅ 已有 PR，待合并 |
| **P1 高** | email 替换未加引号且校验正则放行 shell 元字符（`;`、反引号、`$()`），存在**命令注入**风险；含撇号邮箱（如 `o'brien@x.com`）会破坏 onboarding shell 行 | [#3550](https://github.com/nanocoai/nanoclaw/pull/3550) | ✅ 已有 PR，待合并 |
| **P2 中** | better-sqlite3 13 在 Node < 22.14.0 上段错误（segfault） | [#3555](https://github.com/nanocoai/nanoclaw/pull/3555) | ✅ 已有 PR，待合并（提升 Node 版本下限） |
| **P2 中** | Mattermost 交互卡片路由依赖内存缓存，宿主重启后丢失缓存导致点击卡片路由失效 | [#3556](https://github.com/nanocoai/nanoclaw/pull/3556) | ✅ **已关闭/修复** |
| **P3 低** | signal-cli 探测在 daemon 配置锁上死锁 | [#3563](https://github.com/nanocoai/nanoclaw/pull/3563) | ✅ 已有 PR，待合并 |
| **P3 低** | Linux 安装器中 apt 非交互式执行挂起（needrestart） | [#3562](https://github.com/nanocoai/nanoclaw/pull/3562) | ✅ 已有 PR，待合并 |
| **P3 低** | 容器反复唤醒失败但用户无感知 | [#3566](https://github.com/nanocoai/nanoclaw/pull/3566) | ✅ 已有 PR，待合并 |

> **⚠️ 特别关注：** #3568 尚无任何修复 PR 关联，且该 Bug 会导致 agent **静默**失联，影响隐蔽、难以排查。建议维护者优先将 #3549 和 #3550 合并（两者均为社区发现的实际稳定性/安全问题），再投入精力排查 #3568。


## 6. 功能请求与路线图信号

| 需求/信号 | 来源 | 状态分析 |
|---|---|---|
| **容器内置 jq 以替代 `node -e` JSON 解析**（降低 eval 攻击风险） | [#574](https://github.com/nanocoai/nanoclaw/issues/574) | **已关闭（未采纳）** —— 关闭于 2026-08-26，距创建已 6 个月。维护者可能认为 `node -e` 风险可控，或规划了其他解析方案。鉴于 #3550 正在修复 shell 注入问题，安全方面的考量正在被其他 PR 覆盖 |
| **Per-group MCP 策略强制**（当前可配置但运行时未生效） | [#3551](https://github.com/nanocoai/nanoclaw/pull/3551)、[#3552](https://github.com/nanocoai/nanoclaw/pull/3552) | 两条 PR 均由 wildcard 提交，属安全策略增强。合并后将使 per-group MCP 配置从"纸面配置"变为"运行时强约束"，是 **OneCLI 网关安全模型** 的关键拼图 |
| **Dial 通道正式文档化**（README + changelog） | [#3501](https://github.com/nanocoai/nanoclaw/pull/3501) | Dial 通道已通过 #3050/#3041 实现（`/add-dial`、`/add-dial-number`、`/add-dial-tool`），但 README 和 changelog 未提及。文档补齐说明该通道正走向 GA |

> **路线图判断：** 当前无新版本发布，但大量修复 PR 正在累积。从 PR 分布推测下一版本（可能是 0.x 或 1.x 的补丁版）将聚焦 **安装/升级体验、容器稳定性、MCP 安全策略、渠道 bug 修复**。P0 Issue #3568 的存在可能促使维护者提前发布一个 hotfix 版本。


## 7. 用户反馈摘要

| 来源 | 反馈要点 | 用户画像 |
|---|---|---|
| [#574](https://github.com/nanocoai/nanoclaw/issues/574)（评论 3 条） | 用户 ErikDeBruijn 指出容器内缺少 jq，当前使用 `node -e` 进行 JSON 解析存在 **eval 攻击面**。该反馈获得 1 个 👍，说明部分用户认同。**最终未采纳**，但同日出现了 #3550（修复 email shell 注入），两个事件相关联，提示维护者可能通过收紧校验 + 正确引用替代引入 jq | 自托管用户，对容器安全性敏感 |
| [#3568](https://github.com/nanocoai/nanoclaw/issues/3568) | 用户 BuckG71 详细描述了 `maxMessagesPerPrompt` 达到上限后系统行阻塞队列的触发条件，说明该用户 **已深入阅读源码** 并定位到具体逻辑，属于高技术水平用户；描述中未见 workaround | 深度用户/开发者，已在生产环境中运行 |
| [#3550](https://github.com/nanocoai/nanoclaw/pull/3550) | 含撇号邮箱（`o'brien@x.com`）会破坏 onboarding shell 行——这是 **真实用户踩坑** 后提交的修复，属于典型的"边缘输入导致核心流程崩溃"问题 | 实际业务用户，使用真实邮箱注册时触发 |

> **整体满意度：** 社区贡献者参与度高（单日 3 位非核心成员提交 PR），修复内容贴合实际问题。但 #3568 这类静默失效问题的存在，说明项目在 **队列管理/背压处理** 方面仍有设计层面的缺陷需要弥补。


## 8. 待处理积压

### ⚠️ 需要立即关注

| 项目 | 标题 | 创建时间 | 等待天数 | 备注 |
|---|---|---|---|---|
| **Issue #3568** | [Pending system rows starve the inbound queue; agent silently stops responding](https://github.com/nanocoai/nanoclaw/issues/3568) | 2026-08-26 | 1 天 | P0 级稳定性 Bug，可导致 agent 静默失联，无解决办法、无关联 PR。**需尽快确认根因并安排修复** |

### 一般积压

| 项目 | 标题 | 创建时间 | 状态 | 备注 |
|---|---|---|---|---|
| **PR #3501** | [docs: mention the Dial channel in the README and changelog](https://github.com/nanocoai/nanoclaw/pull/3501) | 2026-08-24 | OPEN（core-team） | 已等待 2 天，属文档补充，风险低，可快速合并 |
| **PR #3565** | [fix(update): let forks keep local adapters through the skill refresh](https://github.com/nanocoai/nanoclaw/pull/3565) | 2026-08-26 | OPEN | 解决 fork 仓库在 skill 刷新后丢失本地适配器的问题，需维护者确认合并策略 |
| **PR #3567** | [fix(setup): put ~/.local/bin on PATH before the onecli guard in register-claude-token.sh](https://github.com/nanocoai/nanoclaw/pull/3567) | 2026-08-26 | OPEN | setup 脚本修复，同一批次中的多条 PR 建议批量 review |

### 长期未响应

| 项目 | 标题 | 创建时间 | 状态 | 备注 |
|---|---|---|---|---|
| **Issue #574** | [containers lack jq](https://github.com/nanocoai/nanoclaw/issues/574) | 2026-02-28 | **CLOSED（2026-08-26）** | 搁置 6 个月后关闭，用户提出安全建议但未采纳。**建议维护者考虑在 release note 中说明关闭理由**，避免用户困惑 |

---

> **日报总结语：** 项目当日活跃度极高，社区贡献者集中提交了大规模修复批次，项目正朝着更稳定的方向快速迭代。但 #3568 号 P0 级队列饥饿问题如不能快速解决，将可能成为下一版本发布前必须跨过的门槛。同时 18 条待合并 PR 的积压也提示维护者需要尽快安排 review 窗口，以免社区贡献者的工作失焦。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-27

## 1. 今日速览

过去 24 小时，NullClaw 项目整体活跃度较低。仅新增 1 条 Issue（#995），无新 PR 提交、无版本发布。该 Issue 提出了 Skills 目录符号链接支持的功能需求，反映部分用户在技能文件组织方面有特定需求。项目目前处于开发节奏放缓的平稳期，社区讨论热度不高，但维护者若能在符号链接支持上快速响应，有望获得较高的用户满意度。

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 2026.5.29（据 Issue #995 中用户提及）。

## 3. 项目进展

今日无 PR 合并或关闭，无代码层面的实质进展。

长远看，项目近期若能在 Skills 管理（特别是符号链接支持）方向有所推进，将有助于提升技能文件组织灵活性，满足部分用户的进阶需求。

## 4. 社区热点

**Issue #995 [enhancement] Support Skills Symlinks**（[链接](https://github.com/nullclaw/nullclaw/issues/995)）
- 作者：ivostoykov | 创建于 2026-08-26 | 评论：0 | 👍：0

这是过去 24 小时内唯一的社区动态。虽然暂无评论和点赞，但该需求揭示了用户对技能文件组织方式的诉求——通过符号链接减少重复同步，并有效利用已有的技能资源。这一需求在多文件、多环境的实际使用场景中具有代表性，值得关注。

## 5. Bug 与稳定性

今日无 Bug 报告，无崩溃或回归问题。项目稳定性状态良好。

## 6. 功能请求与路线图信号

**Skills 符号链接支持**（Issue #995）：建议在 Skills 加载逻辑中识别并跟随符号链接，或显式增加相关配置项。

该需求实现难度较低，但触达用户文件管理方式的底层逻辑。若需求被采纳，可能随下一版本（预计 2026 年 9 月或 10 月周期）一并发布。鉴于这可能是继 `2026.5.29` 之后的首个功能增强点，值得维护者优先评估。

## 7. 用户反馈摘要

- **需求动机**（来自 Issue #995）：用户希望 `skills` 命令能够识别符号链接，以帮助技能文件在多个项目或目录间复用，减少同步操作。
- **使用场景**：用户可能维护了多个技能库或使用版本管理工具管理技能文件，符号链接有助于实现模块化组织。
- **当前满意度**：符号链接被忽略（`skills list` 不显示它们）令用户感到不便，属于功能性缺失，而非易用性问题。

## 8. 待处理积压

今日无新增长期未响应或超期未处理的 Issue 或 PR。当前唯一活跃条目（#995）创建于昨日，尚在正常响应窗口内，建议维护者在 2–3 个工作日内给出初步回复或规划，以保持社区响应积极性。

---

*本报告基于 NullClaw 公开仓库数据自动生成，生成时间：2026-08-27。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-27

## 1. 今日速览

IronClaw 今日保持高活跃度：过去 24 小时共处理 46 条 Issues 和 50 条 PR，其中 20 条 Issues 关闭、47 条 PR 合并/关闭，并发布了 1.4.0-rc.1 候选版本。值得注意的动向包括：**性能优化成为绝对主线**（#7891 指出单次工具调用导致 19 秒推理延迟、#7930 提出工具参数引用机制、#7929 要求建立可决策的性能指标），**WebUI 语音输入进入架构设计阶段**（#7867 及三个关联设计 issue），以及 **1.4.0 版本的大量老 issue 集中收尾关闭**（多个 5-7 月创建的 issue 今日关闭）。项目整体处于 1.4.0 发布前的密集整合期，健康度良好，但性能问题引发的关注度正在上升。

---

## 2. 版本发布

### ironclaw-v1.4.0-rc.1（2026-08-26）

**首个 1.4.0 候选版本**，涵盖自 1.3.0 以来的 **81 个提交**。核心新增内容：

- **持久化通知收件箱**：运行（runs）将权威结果和可操作的门禁（actionable gates）发布到每个用户的收件箱，通过 WebUI 通知中心呈现，使审批和认证提示不再依赖会话内消息。
- 其他变更细节需查看完整 Release Notes。

**迁移注意事项**：作为 RC 版本，建议测试环境验证通知收件箱功能与现有工作流的兼容性；生产环境暂不建议升级。

---

## 3. 项目进展

今日合并/关闭的 PR 呈现明显的 **"v1 遗留清理 + Reborn 栈加固"** 双主线（多个 7 月创建的 PR 今日集中关闭）：

| PR | 内容 | 价值 |
|---|---|---|
| **#6817** — fd-rooted 路径遍历修复 | 修复 `DiskFilesystem` 的 **4 个 TOCTOU 容器逃逸漏洞** | 安全加固，阻止路径检查与 syscall 间的竞态攻击 |
| **#6740** — 沙箱出口代理 TLS 终止缝 | 将 TLS 拦截从 `sandbox/shell-integration` 分支移植到 main | 为沙箱出口代理的 TLS 终止能力铺路 |
| **#6533** — 容器监督模式 | 为托管部署增加容器适配的 restart/apply 路径 | 修复容器环境下裸 `os error 2` 的 UX 问题 |
| **#6366** — API-key 提示可返回 | 修复 `ironclaw onboard` 中 Esc 无法返回上一级菜单的问题 | CLI 交互体验修复 |
| **#6157** — Reborn TUI + 服务安装 | 增加 `ironclaw-reborn tui` 终端客户端（WebChat v2 API 的 HTTP+SSE 客户端） | 新增终端使用路径 |
| **#6112** — agent-loop 执行器重构 | 分解 `canonical.rs` 的 `execute()`，去重延迟包装逻辑 | 代码结构清理，降低后续维护复杂度 |
| **#6096** — 串行化并发入站消息写入 | 修复同一线程两条快速消息乱序持久化/显示/执行的问题 | 数据一致性修复（关闭 #6047） |
| **#5970 / #5918 / #5917** — MCP 注册框架 | 三层 MCP 注册框架：owner-scoped store → 托管服务器注册/发现 → 注册服务器锁定 host egress | MCP 生态基础能力落地 |
| **#5742** — [生产变更] 内存上下文连线 | 修复 `ProductionMemoryPromptContextService` 从未被 composition 装配的问题 | **生产级修复**：内存提示注入加固逻辑此前完全未生效 |

此外，#6131/#6132/#6133/#6134 四个 Reborn tier-2 集成测试 PR 构成测试基建的四车道扩展，覆盖存储模式审计、fixture LLM 接缝、SSE 线协议回环测试及故障注入场景。

---

## 4. 社区热点

### 🔥 最热 issue：#7732 — 持久化 per-user 沙箱（10 评论）
[链接](https://github.com/nearai/ironclaw/issues/7732)

v1.4.0 路线图上的 Epic，讨论 Reborn 的 `builtin.shell` 目前每次命令都创建/销毁容器的问题，目标是实现持久化用户计算机。作为 Epic 级别讨论，社区关注度高。

### 🔥 高热度：#7891 — 工具输出未投影导致 19 秒推理延迟（5 评论）
[链接](https://github.com/nearai/ironclaw/issues/7891)

**本质问题**：两次 `gmail.get_message` 调用（API 本身仅 274/290 ms）导致 **19.7 秒的 turn 耗时**，其中 19.2 秒为模型推理。原因：**49,152 字节原始 MIME 头被无意识推入 prompt**，模型需要处理非结构化数据。这暴露了 IronClaw 工具结果管道的根本缺陷——**能力输出未经投影/裁剪就进入上下文**。此问题与 #6986（缓存工具数组字节一致性）、#7929（性能指标可决策性）、#7930（工具参数引用）构成性能优化问题簇。

### 💬 语音输入需求快速升温：#7867 → #7932/#7933/#7934
[#7867 语音输入](https://github.com/nearai/ironclaw/issues/7867) → [浏览器端归一化方案](https://github.com/nearai/ironclaw/issues/7932) → [主机端归一化方案](https://github.com/nearai/ironclaw/issues/7933) → [架构选择](https://github.com/nearai/ironclaw/issues/7934)

一个 feature request 在 48 小时内催生 3 个架构设计 issue，说明 WebUI 语音输入是用户痛点，且维护者（italic-jinxin）正在积极推进方案选型。

### 🌟 新增：#7922 — apply_patch 改为 grammar-constrained freeform 工具
[链接](https://github.com/nearai/ironclaw/issues/7922)

提出将 `builtin.apply_patch` 从 JSON-schema 函数工具改为 grammar-constrained freeform 工具，以消除 JSON 转义 diff 的混乱。这一方向与 #7930（工具参数引用）共同指向 **工具调用效率与可靠性的深层优化**。

---

## 5. Bug 与稳定性

### 🔴 高严重度

| Issue | 问题 | 状态 |
|---|---|---|
| **#7891** — 未投影能力载荷 + 盲 24 KiB 切片导致 19 秒推理 | 两封邮件的 MIME 头直接进入 prompt，成本极高 | **OPEN**，无 fix PR |
| **#7912** — Telegram 移除返回 503 | 生产环境 `POST /api/webchat/v2/extensions/telegram/...` 移除扩展失败 | **OPEN**，无 fix PR |

### 🟡 中严重度

| Issue | 问题 | 状态 |
|---|---|---|
| **#7925 (PR)** — Slack 线程广播消息被静默丢弃 | `subtype: "thread_broadcast"` 不在 allowlist 中，消息直接 `Ignore` | **OPEN PR**，修复已完成 |
| **#7928 (PR)** — 增加有界可选 JSON 结果视图 | 解决工具结果过大无法读取的问题 | **OPEN PR**，涉及 RFC 6901 指针、集合限制、UTF-8 字符串分页 |

### ✅ 已修复（今日关闭）

- **#6686** — 移除死代码 `DockerProcessSandboxBackend`（已被持久化沙箱取代）
- **#4425** — `builtin.http` 上下文炸弹修复（10MB 下限、无 HTML strip 问题已关闭）
- **#4796** — LLM 缺乏当前日期/时间感知（已关闭）
- **#2597** — E2E 浏览器测试追踪（已关闭）

---

## 6. 功能请求与路线图信号

### 🔮 可能进入 1.4.0 的功能

| 功能 | 来源 | 信号 |
|---|---|---|
| **WebUI 语音输入** | #7867 + #7932/#7933/#7934 | 已进入架构设计阶段，48 小时内产生 3 个设计 issue，推进速度极快 |
| **工具参数引用** | #7930（p1） | 允许工具参数引用先前结果而非重复输出，直接解决 #7891 的性能痛点 |
| **可决策的性能指标** | #7929（p1） | 要求为所有性能优化建立生产可观测指标，是 #7921/#6986/#7444 的前置依赖 |
| **apply_patch grammar 约束** | #7922（p3） | 消除 JSON 转义 diff，提升编码工具的可靠性 |

### 📋 长期路线图信号

- **#7732**（Epic: 持久化 per-user 沙箱）和 **#6986**（缓存工具数组字节一致性）均标记 v1.4.0，属于发布前必须解决的关键项。
- **#2117**（ironclaw-bridge 本地文件/MCP 桥接守护进程）已从 4 月挂起至今，3 评论 1 👍，属于社区有需求但优先级偏低的功能。

---

## 7. 用户反馈摘要

### 😠 痛点

- **工具输出污染上下文**（#7891）："模型需要处理未投影的原始 MIME 数据" —— 这不是模型质量问题，而是工具结果管道设计缺陷。用户 `henrypark133` 明确指出 **"零锁竞争、零重试、零队列延迟，成本全部来自 49KB 原始 MIME 头被推入 prompt"**。
- **语音输入缺失**（#7867）："WebUI composer 仅支持键盘。说出消息比打字更快……Slack 和 Telegram 都支持语音，唯独 web UI 不支持。"
- **自动化运行不稳定**（#6879）："相同的存储 prompt 有时成功有时毫无产出，尤其在小模型上（DeepSeek V4 Flash）" —— 结构性缺陷而非模型噪声。

### 👍 满意点（今日关闭的 issue 暗示）

- 大量 5-7 月的老 issue（#4162/#4163/#4165/#4167/#4828/#3873/#567 等）今日集中关闭，说明 Reborn 栈的 **重构清理正在系统性收尾**。
- **#4796**（LLM 日期/时间感知）关闭，说明时间工具集成已完成。

### 💡 需求信号

- 用户希望 **工具结果可选择性读取**（#7928 的 bounded selectable JSON views 方向）。
- 用户希望 **工具参数可引用先前结果**（#7930），避免重复输出大载荷。

---

## 8. 待处理积压

### ⚠️ 需要关注

| Issue/PR | 创建时间 | 现状 | 风险 |
|---|---|---|---|
| **#2117** — ironclaw-bridge 本地文件/MCP 桥接 | 2026-04-07 | OPEN，3 评论，1 👍 | 4.5 个月无实质进展，本地文件访问是云托管部署的 blocker |
| **#2950** — 拆分 provider-safe schema 清理与严格可选字段重写 | 2026-04-24 | OPEN，3 评论 | 3 个月未闭合，涉及 LLM 提供商兼容性，可能是隐性技术债 |
| **#6369** — Tier B 遗留缺口（v1 src/ 退役后） | 2026-07-20 | OPEN，3 评论 | 需要关注 v1 退役后遗留的能力缺口 |
| **#4625** — Slack 频道路由的个人和团队 agent | 2026-06-09 | OPEN，1 评论 | Slack 作为一线渠道的战略级 Epic，长期低活跃 |

### 📊 趋势观察

今日 20 条 Issues 关闭（占总更新量的 43%），且多数为 1-3 个月前创建的积压项，说明 **维护者正在 1.4.0-rc.1 发布前集中清理 backlog**。但 **#7891（性能）和 #7912（Telegram 503）两个新 bug 尚无 fix PR**，需要重点跟踪。

---

*报告生成时间：2026-08-27 | 数据来源：nearai/ironclaw GitHub 仓库*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-27

## ① 今日速览

过去24小时内，LobsterAI 保持高频迭代节奏：共处理 13 条 PR，其中 12 条已合并/关闭（合并率约 92%），仅 1 条 PR 待合并。Issues 侧相对平稳，新增 1 条功能请求，暂无 Bug 报告。合并的 PR 集中在渲染层（renderer）的 UI 细节优化、分享文件永久删除功能、登录引导修复等方向，整体项目推进扎实，无明显阻塞风险。无新版本发布，但可见版本发布分支（`Release/2026.8.26`）已合并，新版本发布应临近。项目活跃度评估：**高**（PR 合并速度快，开发主力贡献集中）。

## ② 版本发布

无新版本发布。但注意 PR #2549 ([Release/2026.8.26](https://github.com/netease-youdao/LobsterAI/pull/2549)) 已合并，预计 2026.8.26 或 8.27 版本将很快发布。

## ③ 项目进展

今日合并/关闭的 12 条 PR 按功能领域归纳如下：

**功能新增与完善**

- [PR #2555 feat(analytics): 完善发布与部署分析链路](https://github.com/netease-youdao/LobsterAI/pull/2555)：新增分享、部署、复制链接及权限更新结果事件，增加异步部署终态跟踪与可靠上报队列，补充账号身份、订阅状态及环境信息，同步完善自动化测试。
- [PR #2550 feat(library): 支持永久删除云端分享文件](https://github.com/netease-youdao/LobsterAI/pull/2550)：新增分享文件永久删除接口、IPC 与客户端类型；仅允许删除已停止的分享，删除前需文件名二次确认；删除后同步更新云端列表、状态计数和本地收藏；同时修复本地服务部署请求在账号切换和弹窗关闭后的重复触发问题，并优化分享更新时间及 Tooltip 可访问性。

**UI/UX 优化与修复**

- [PR #2544 chore: update library icon](https://github.com/netease-youdao/LobsterAI/pull/2544)：更新资料库图标。
- [PR #2548 chore: update settings width](https://github.com/netease-youdao/LobsterAI/pull/2548)：调整设置页宽度。
- [PR #2553 Fix/zhipu icon dark mode](https://github.com/netease-youdao/LobsterAI/pull/2553)：修复智谱图标在暗色模式下的显示问题（覆盖 Windows 平台）。

**登录引导与提示优化**

- [PR #2546 fix(sidebar): delay login promo tip until engine startup completes](https://github.com/netease-youdao/LobsterAI/pull/2546)：修复引擎启动期间侧边栏登录推广提示的显示时机——启动完成后再展示 5 秒提示窗口。
- [PR #2547 Liuzhq/fix login guide](https://github.com/netease-youdao/LobsterAI/pull/2547) 和 [PR #2545 Liuzhq/fix login guide](https://github.com/netease-youdao/LobsterAI/pull/2545)：两条登录引导修复（注：同日两条同名分支，可能为递进修复）。

**文档与发布**

- [PR #2549 Release/2026.8.26](https://github.com/netease-youdao/LobsterAI/pull/2549)：版本发布分支合并。
- [PR #2557 Liuzhq/fix 2026.8.24](https://github.com/netease-youdao/LobsterAI/pull/2557)、[PR #2556 Liuzhq/26.8.24 rlog](https://github.com/netease-youdao/LobsterAI/pull/2556)：文档/变更日志类更新。

**整体判断**：项目在高频小步迭代，开发主力集中于登录引导、分享文件管理和 UI 细节三个方向，未出现大规模重构或框架变更，风险较低。


## ④ 社区热点

今日 Issues 侧仅 1 条，但这条引发了值得关注的讨论：

- [Issue #2554 [Feature] 新增 Synthorai 作为内置服务商](https://github.com/netease-youdao/LobsterAI/issues/2554)（作者：cuihuan，评论：1）

**分析**：用户提出将 Synthorai（一个 key 打通多家模型网关）加入 LobsterAI 内置服务商列表。核心痛点在于：目前类似聚合服务商只能走 Custom 自定义槽位，但相比内置条目缺少默认模型列表、缺少 `switchableBaseUrls`（OpenAI/Anthropic 双协议 base URL 切换）、没有图标和默认 baseUrl，新用户容易配置出错。当前 LobsterAI 已内置 18 个服务商（包括 OpenRouter 聚合类），说明用户对"聚合网关"类服务商有明确需求且已有先例，该请求合理且在现有架构内可落地。

**PR 侧热度**：今日无特别高互动 PR，但持续观察 [PR #2551](https://github.com/netease-youdao/LobsterAI/pull/2551) 的合并进程。


## ⑤ Bug 与稳定性

今日**未收到明确的 Bug 报告**，但间接暴露以下稳定性问题已在 PR 中修复：

| 问题描述 | 严重程度 | 修复 PR | 状态 |
|---|---|---|---|
| 引擎启动期间侧边栏登录推广提示计时器被误触发，导致展示时机错误 | 低（体验） | [#2546](https://github.com/netease-youdao/LobsterAI/pull/2546) | ✅ 已合并 |
| 本地服务部署请求在账号切换和弹窗关闭后重复触发 | 中（资源与逻辑） | [#2550](https://github.com/netease-youdao/LobsterAI/pull/2550) | ✅ 已合并 |
| 智谱图标在暗色模式下显示异常 | 低（视觉） | [#2553](https://github.com/netease-youdao/LobsterAI/pull/2553) | ✅ 已合并 |
| 多处登录引导逻辑缺陷 | 中（用户流程） | [#2545](https://github.com/netease-youdao/LobsterAI/pull/2545)、[#2547](https://github.com/netease-youdao/LobsterAI/pull/2547)、[#2557](https://github.com/netease-youdao/LobsterAI/pull/2557) | ✅ 已合并 |

另有一条待合并 PR [PR #2551 fix: app update preserve ready state](https://github.com/netease-youdao/LobsterAI/pull/2551)（fisherdaddy 提交），从标题看涉及应用更新时保留 ready 状态，与更新流程的稳定性相关，建议关注其合并进度。


## ⑥ 功能请求与路线图信号

- [Issue #2554 新增 Synthorai 内置服务商](https://github.com/netease-youdao/LobsterAI/issues/2554) 是今日唯一的功能请求，也是重要的路线图信号。

**判断依据**：
- 现有架构中已有 **OpenRouter** 作为聚合服务商内置，说明"聚合网关"是该产品明确支持的模式；
- 用户提出 Synthorai 是为例证，更深层诉求是**希望自定义服务商能获得与内置同等的体验**（默认模型列表、双协议切换、图标、默认 baseUrl）；
- 该需求可作为"增强自定义服务商配置体验"纳入下一版本，并且已有 `switchableBaseUrls` 机制存在，实现成本可控。

**推荐动作**：维护者可在 #2554 中确认该功能是否已在路线图，或将其升级为"自定义服务商体验优化"提案。

**其他路线图参考**（来自已合入 PR）：分享文件永久删除功能、发布与部署分析链路是近期路由中可见的平台能力建设方向；暗色模式图标覆盖说明工程团队在持续打磨主题适配。


## ⑦ 用户反馈摘要

基于 Issue #2554 的反馈内容和 PR 提交信息，提炼如下：

**来自 Issue #2554（代表性诉求）**
> "Custom 是能用的，但和内置条目比有几点体感差异：没有默认模型列表、没有 switchableBaseUrls、设置页没有图标、没有默认 baseUrl，新用户容易把 base URL 填错（结尾带不带 / 之类）。"

- **痛点**：配置成本高、易出错，尤其对非技术用户不友好；
- **场景**：希望用"一个 key 打通多家模型"的网关服务，降低管理成本；
- **潜在满意点**：用户认可 LobsterAI 支持 Custom 槽位，说明"能配置"是及格分，但"配置体验"决定用户忠诚度。

**其他间接反馈（来自 PR 语义）**：
- 多次修复"登录引导"问题（PR #2545/#2546/#2547/#2557），侧面反映新用户引导流程仍是体验薄弱环节；
- 分享文件永久删除功能（PR #2550）的上线，暗示用户此前对"删除不彻底"有明确诉求，属于高频使用的"资料库"场景。


## ⑧ 待处理积压

当前积压压力较小，仅 1 条明确待跟进项：

| 项目 | 类型 | 创建时间 | 备注 |
|---|---|---|---|
| [PR #2551 fix: app update preserve ready state](https://github.com/netease-youdao/LobsterAI/pull/2551)（fisherdaddy） | PR 待合并 | 2026-08-26 | 涉及应用更新流程的稳定性，建议尽快 review 合并，避免与即将发布的版本（Release/2026.8.26 已合并）产生冲突。 |

**长期跟踪建议**：
- [Issue #2554](https://github.com/netease-youdao/LobsterAI/issues/2554) 目前回复 1 条，若维护者不计划近期实现，建议明确标注状态（如 `accepted` / `later`），避免用户长期等待；
- 观察发现 `liuzhq1986` 分支使用日期命名（`26.8.24`、`2026.8.24`、`26.8.26`），同类分支短期出现多次，建议代号规范化，避免混淆。


**项目健康度总结**：PR 合并效率高（12/13 当日处理完毕），无严重 Bug 积压，功能演进方向清晰（分析链路、分享管理、引导优化），社区需求能快速获得回应。唯一需关注的是 PR #2551 的合并时机的版本发布节奏的衔接，以及 #2554 所代表的"聚合网关"类需求是否纳入路线图。整体判断：**健康、活跃、稳步迭代**。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-27

## 1. 今日速览

Moltis 项目在经历一段时间的静默后，今日迎来结构性进展：两个长期挂起的 PR（#1104、#1244）在昨日密集合并关闭，标志"模型偏好管理"与"Fastmail MCP OAuth 兼容性"两大功能线正式落地。与此同时，与之相对应的核心 Bug Issue #1094（取消偏好模型）同步关闭，形成"报告→修复→回归验证"的完整闭环。今日无新开 Issues、无待合并 PR，GitHub 活动集中在合并操作而非新讨论，整体活跃度属于**中高**，项目正处在"收尾期"而非"爆发期"。版本发布 20260826.01 与两项合并同步推进，建议关注下一阶段是否开启新一轮功能规划。

## 2. 版本发布

**20260826.01** — 昨日发布，与两项合并操作时间点吻合，推测为本轮修复的正式发版承载。

- 更新内容推断（基于已合并 PR）：
  - 模型偏好管理增强：支持在"首选模型对话框"中预选已保存的 Provider 模型偏好；保存操作现在会**替换（而非追加）** 该 Provider 的原有首选模型列表，空选择将清除全部偏好（PR #1104）。
  - Fastmail MCP OAuth 修复：优先使用受保护资源作用域（protected-resource scopes）而非授权服务器提供的更宽泛作用域目录；在 RFC 7591 动态客户端注册中包含选定作用域（PR #1244）。
- 破坏性变更：模型偏好保存语义从"增量修改"变为"整体替换"，用户若依赖旧行为（保存时保留未选中的历史偏好）需注意更新操作习惯。
- 迁移注意事项：建议清理本地缓存的 MCP OAuth 客户端注册信息，重新走发现流程，确保新作用域选择逻辑生效。

## 3. 项目进展

| PR | 标题 | 状态 | 推进方向 |
|----|------|------|----------|
| [#1104](https://github.com/moltis-org/moltis/pull/1104) | fix(providers): allow replacing preferred models | 已合并 | **模型偏好管理增强** — 此前用户无法"取消偏好"某个模型，保存时只能追加不能替换，导致偏好列表无法清理。该 PR 从后端逻辑到前端对话框预选，再到 Playwright 回归测试，完整打通了"取消偏好"功能链路。 |
| [#1244](https://github.com/moltis-org/moltis/pull/1244) | Fix Fastmail MCP OAuth scope registration | 已合并 | **MCP OAuth 兼容性修复** — 修复了 MCP OAuth 发现过程中作用域选择过宽的问题（直接使用授权服务器的完整作用域目录），改为优先使用受保护资源作用域，并在动态客户端注册（RFC 7591）中携带选定作用域。附带 Fastmail 形态的回归测试。 |

这两个 PR 分别补全了 **Provider 管理** 与 **MCP 外部服务集成** 两个关键模块，是当前版本中较有分量的功能补强。

## 4. 社区热点

今日无高讨论量 Issues/PR。过去 24 小时唯一活跃实体是昨日新创建的 PR [#1244](https://github.com/moltis-org/moltis/pull/1244)（Fastmail MCP OAuth 修复），Frok 后在 24 小时内迅速合并，执行效率高但未产生社区讨论。值得关注的是，短期内连续出现 MCP 相关合并（包括移动端连接的 Fastmail 场景），暗示维护者对 **MCP 生态合规性** 有较强的治理意愿，社区使用者若有 MCP 接入需求可重点跟踪此方向。

## 5. Bug 与稳定性

今日无新增 Bug 报告。唯一关闭的 Bug 为：

- **[#1094](https://github.com/moltis-org/moltis/issues/1094) [已关闭] De-Preferring Models** — 严重程度：**中（功能缺陷，非崩溃）**。用户反馈无法从偏好列表中移除已选模型，影响日常模型切换体验。该 Bug 自 6 月 3 日创建，历时近 3 个月，最终由 [#1104](https://github.com/moltis-org/moltis/pull/1104) 修复并同步关闭，**已有 fix PR**，状态健康。

## 6. 功能请求与路线图信号

今日无新功能请求。路线图信号主要来自已合并 PR 的方向：

- **模型偏好可逆操作**（#1104）：支持"取消偏好"和"清空偏好"，说明项目正从"配置灵活性"向"配置可管理性"演进。
- **MCP OAuth 精细化**（#1244）：按资源而非按授权服务器目录选择作用域，暗示未来会支持更多 MCP 服务商的差异化 OAuth 流程，**Fastmail 是第一个适配案例**，预计后续将出现更多针对具体服务商的适配 PR。

## 7. 用户反馈摘要

今日无新 Issues/PR 评论。回溯 Issue #1094（已关闭）的诉求可提炼出典型痛点：

- **使用场景**：用户在 Chat 会话中频繁切换 Provider 模型，发现旧模型无法从"首选列表"中移除，导致每次切换时误选到已弃用模型。
- **核心痛点**：缺少"取消偏好"入口，配置数据只能增不能减，长期使用后偏好列表冗余膨胀，影响选择效率。
- **满意点**：该问题在 3 个月内获得了完整修复并附带了 Playwright 回归测试，修复质量预期较好。

## 8. 待处理积压

今日无长期未响应的新增 Items 值得标记。项目当前积压压力较小：

- 无未合并 PR（待合并: 0）
- 无超过 3 个月未关闭的 Open Issues 浮出水面（#1094 已在今日关闭）
- 结合最近 24 小时一次版本发布和两次合并，项目处理积压问题的效率处于健康水位。

---

*数据来源：[Moltis GitHub Repository](https://github.com/moltis-org/moltis)，统计窗口：2026-08-26 00:00 - 2026-08-27 00:00 (UTC)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-27

> 数据来源：github.com/agentscope-ai/CoPaw | 数据窗口：2026-08-26 ~ 2026-08-27

---

## 1. 今日速览

CoPaw 项目今日迎来 **v2.2.0-beta.1** 发布，标志着多租户 Hub 方向的正式起航。过去 24 小时社区活跃度极高：**45 条 PR 更新**（其中 20 条待合并）、**29 条 Issue 更新**（16 条新开/活跃），以及 **25 条 PR 被合并/关闭**，显示维护团队正处于高强度迭代周期。值得关注的两条主线：（1）社区对多用户、多租户能力的需求在本周集中爆发（#7318、#5780、#4702、#6335），最终催生了 2.2.0 的 Hub 版本；（2）围绕 prompt cache 性能提升（#7335）形成了从 Issue 到 PR（#7342、#7346）的快速闭环，项目在可观测性与成本优化维度开始发力。同时，Windows 桌面端与安装器相关问题（#7312、#7298、#7336）正在被集中修复，稳定性仍是当前重点。

---

## 2. 版本发布

### v2.2.0-beta.1（2026-08-27）

[发布链接](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.2.0-beta.1) | 类型：Beta

**主要更新内容：**

- **Docs**：更新 scroll context manager 博文（PR #7300）
- **providers**：修复 DashScope 工具 schema 清洗问题，适配 strict models（PR #7284，by @XiuShenAl）
- **test(integration)**：定向集成测试覆盖增强（内容截断）

**多租户 Hub 预告：** Issue #7318 正式宣布 **QwenPaw Hub 多租户版**将于 2.2.0 推出，这是项目从个人助手走向团队协作的关键一步。该版本回应了此前多个社区请求（#2324 多用户访问、#5780 多用户账号管理、#4702 RBAC 需求、#6335 团队部署咨询）。

**安装验证：** 发布后已自动触发安装验证任务（Issue #7333），要求 4 小时内完成各平台安装核验。

**迁移注意：** Beta 版本，建议生产环境暂缓升级；多租户配置与管理界面为新增能力，不涉及既有单用户配置的破坏性变更。版本号已由 PR #7338 推进至 `2.2.0b2`，说明 Beta 迭代节奏很快。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#7338](https://github.com/agentscope-ai/CoPaw/pull/7338) | 版本号升至 2.2.0b2 | 版本管线推进，下一迭代已启动 |
| [#7332](https://github.com/agentscope-ai/CoPaw/pull/7332) | 稳定 timing-sensitive 测试 | 修复 CI 中因时序竞争导致的测试不稳定，提升 CI 可靠性 |
| [#7327](https://github.com/agentscope-ai/CoPaw/pull/7327) | Console E2E 覆盖新增 23 个用例 | 覆盖率预计提升 6-7 个百分点，质量保障持续加强 |
| [#7323](https://github.com/agentscope-ai/CoPaw/pull/7323) | 修复 NSIS 卸载器误报文件占用 | Windows 安装/卸载体验关键修复 |
| [#7194](https://github.com/agentscope-ai/CoPaw/pull/7194) | Workspace 启动失败清理支持取消安全 | 生命周期管理健壮性提升 |
| [#401](https://github.com/agentscope-ai/CoPaw/pull/401) | README 完善项目运行说明 | 文档改进，降低新用户入门门槛 |
| [#534](https://github.com/agentscope-ai/CoPaw/pull/534) | 新增法语（fr-CA）支持 | 国际化扩展，覆盖 17 个文档页面 |

### 值得关注的新增 PR（待合并）

- **[#7346](https://github.com/agentscope-ai/CoPaw/pull/7346) perf(runtime): stabilize prompt cache prefixes** — 通过稳定 prompt 前缀提升缓存命中率，直指成本优化
- **[#7342](https://github.com/agentscope-ai/CoPaw/pull/7342) feat(token-usage): add prompt cache observability** — prompt cache 可观测性第一阶段（对应 Issue #7335）
- **[#7345](https://github.com/agentscope-ai/CoPaw/pull/7345) fix: 工具卡片在停止后卡在"执行中"** — 修复 tool call 生命周期管理中 `plugin_call` 提前标记 `completed` 导致的 UI 卡死问题

**总体评估：** 项目在稳定性修复、测试覆盖、国际化三个方向同步推进，同时 2.2.0 的 prompt cache 优化与多租户 Hub 两大功能线已开始实质性进展。项目处于快速迭代的活跃期。

---

## 4. 社区热点

### 🔥 最热讨论

**1. [Issue #7318 — QwenPaw Hub 多租户版：你希望我们接下来做什么？](https://github.com/agentscope-ai/CoPaw/issues/7318)**
- 评论：7 | 创建于 8/26，持续活跃
- 这是当前社区最关注的话题，直接关联 2.2.0 版本方向。围绕多租户的功能优先级、权限模型、部署形态展开讨论。该 Issue 汇总了此前多个分散需求（#2324、#5780、#4702、#6335），是社区声音的集中体现。

**2. [Issue #6921 — Agent 规划完就停止，需要说"继续"才继续执行](https://github.com/agentscope-ai/CoPaw/issues/6921)**
- 评论：11（今日新增多条）| 创建于 8/12，持续两周
- 这属于 AI Agent 的经典可靠性痛点——模型"只说不做"。用户 rerbin 给出详细复现模式和模型输出特征（"Now 2.1, 3.1, 3.2. Let me do all three."），显示这是一个系统性的规划-执行断裂问题，而非偶发。高评论数说明受影响的用户较多。

**3. [Issue #7258 — 微信频道"不显示思考过程"设置无效](https://github.com/agentscope-ai/CoPaw/issues/7258)**
- 评论：6 | 已关闭
- 涉及 IM 渠道（微信）的设置不生效问题，讨论聚焦于渠道适配层对全局设置的覆盖逻辑。

### 社区诉求分析

后端（Infra）方向的讨论密度明显提升：**prompt cache 优化（#7335）** 成为新热点，用户以实际生产数据对比了 CoPaw（81.68%）与 OpenCode（96.02%）的缓存命中率差距，直接关联成本效益。同时本周多个多用户/多租户 Issue 的集中出现，说明 CoPaw 已从早期个人工具开始被社区尝试用于团队协作场景。这条需求线已被官方正式回应（#7318），版本节奏与社区期待同步。

---

## 5. Bug 与稳定性

### 严重程度排列

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🟢 高 | [#7312](https://github.com/agentscope-ai/CoPaw/issues/7312) | Windows 下 `execute_shell_command` 因继承 stdin 管道导致 Python 进程挂起（缺 `stdin=DEVNULL`） | 待处理 |
| 🟢 高 | [#7298](https://github.com/agentscope-ai/CoPaw/issues/7298) | Desktop/Docker 内置 Python 3.11 旧版 OpenSSL 3.0.x TLS 栈，运营商 DPI 重置握手 | 待处理 |
| 🟡 中 | [#7321](https://github.com/agentscope-ai/CoPaw/issues/7321) | 工具调用已结束但 UI 一直显示"执行中" | 已有 fix PR：[#7345](https://github.com/agentscope-ai/CoPaw/pull/7345) |
| 🟡 中 | [#7324](https://github.com/agentscope-ai/CoPaw/issues/7324) | 定时任务执行成功后，收件箱缺失部分推送消息 | 待处理 |
| 🟡 中 | [#7296](https://github.com/agentscope-ai/CoPaw/issues/7296) | OpenAI Responses 多轮对话报 400 "reasoning item not found"（无状态上游提供商） | 待处理 |
| 🟡 中 | [#7193](https://github.com/agentscope-ai/CoPaw/issues/7193) | Agent 自动搜索记忆错乱，搜到同一 agent 另一会话内容 | 待处理，已标注 need-info |
| 🟡 中 | [#7335](https://github.com/agentscope-ai/CoPaw/issues/7335) | prompt cache 命中率 81.68%（对比 OpenCode 96.02%），成本影响可量化 | 已有对应 PR：[#7342](https://github.com/agentscope-ai/CoPaw/pull/7342)、[#7346](https://github.com/agentscope-ai/CoPaw/pull/7346) |
| 🔵 低 | [#7310](https://github.com/agentscope-ai/CoPaw/issues/7310) | 疑似插件冲突导致崩溃（datapaw 运行时缺失） | 待处理 |
| 🔵 低 | [#7229](https://github.com/agentscope-ai/CoPaw/issues/7229) | 本地测试运行器跳过套件并误报成功 | 已关闭 |
| 🔵 低 | [#7212](https://github.com/agentscope-ai/CoPaw/issues/7212) | 图片像素超限时崩溃而非优雅降级 | 已关闭 |
| 🔵 低 | [#7282](https://github.com/agentscope-ai/CoPaw/issues/7282) | Console Markdown 列表渲染间距过大 | 已关闭 |
| 🔵 低 | [#7206](https://github.com/agentscope-ai/CoPaw/issues/7206) | v2.1.1-beta.1 手动 /compact 始终报 pydantic ValidationError | 已关闭（回归已确认） |

**注意：** #6921 作为一个高频复现的核心 Agent 行为问题已持续两周，暂无明确 fix PR，建议维护者优先排查。

---

## 6. 功能请求与路线图信号

### 高可能性进入下一版本

| 功能请求 | 对应 PR/状态 | 判断依据 |
|---|---|---|
| **Prompt cache 可观测性**（[#7335](https://github.com/agentscope-ai/CoPaw/issues/7335)） | [#7342](https://github.com/agentscope-ai/CoPaw/pull/7342)（已提交）、[#7346](https://github.com/agentscope-ai/CoPaw/pull/7346)（已提交） | 当日内完成从 Issue 到 PR 的闭环，`perf` 标签，2.2.0 重点方向 |
| **多租户 Hub**（[#7318](https://github.com/agentscope-ai/CoPaw/issues/7318)） | 官方宣布 2.2.0 推出 | 产品路线图明确，已进入发布周期 |
| **模型输出能力与请求限制分离**（[#7337](https://github.com/agentscope-ai/CoPaw/pull/7337)） | PR 已提交 | 防止模型能力被误作为 max_tokens 限制，属正确性修复 |
| **Workspace-scoped Skill 预加载**（[#7183](https://github.com/agentscope-ai/CoPaw/pull/7183)） | PR 待合并（Under Review） | 设计参考 Claude Code subagents，适合企业用户 |

### 社区提议但尚未官方回应

- **上下文优化工具**（[#7316](https://github.com/agentscope-ai/CoPaw/issues/7316)）：让 LLM 判断工具返回内容是否有价值，无用则简化/删除以优化上下文——目前仅为讨论
- **OpenViking 长期记忆后端**（[#7252](https://github.com/agentscope-ai/CoPaw/issues/7252)）：作者表示愿意提交 PR，但需维护者确认方向
- **自动清除已完成后台任务**（[#7280](https://github.com/agentscope-ai/CoPaw/issues/7280)）：已关闭，但用户建议增加设置项
- **弹窗点选替代文字输入**（[#7279](https://github.com/agentscope-ai/CoPaw/issues/7279)）：模型返回多个选项时，希望弹窗点选——已关闭，但可能是 Console UI 优化的一个方向
- **滚动锁定**（[#7339](https://github.com/agentscope-ai/CoPaw/issues/7339)）：流式生成时禁用自动滚动——**已有对应 PR [#7340](https://github.com/agentscope-ai/CoPaw/pull/7340)，预计快速合并**
- **游戏开发文件语言支持**（[#7068](https://github.com/agentscope-ai/CoPaw/issues/7068)）：**已有对应 PR [#7344](https://github.com/agentscope-ai/CoPaw/pull/7344)**

---

## 7. 用户反馈摘要

### 核心痛点

**1. Agent 任务中断问题（#6921）**
用户 rerbin 指出：模型在输出"Now 2.1, 3.1, 3.2. Let me do all three."后便停止，需要用户手动输入"继续"才恢复执行。模型"规划完就停"的特征明显——它准备好计划，却未实际执行。这严重破坏了自动化体验，可能是多步任务的核心可靠性问题。

**2. 工具调用状态不同步（#7321）**
用户强制结束了一个因 VPN 不稳定而挂起的 ping 命令后，界面一直显示"执行中"，工具卡片卡死。同类问题在 #7310 中也有出现（插件冲突导致崩溃后 AI 修复失败）。桌面端 UI 状态管理需要更健壮的异常处理。

**3. 定时任务推送不完整（#7324）**
3 个定时任务同时执行成功，但收件箱只收到 2 条推送，缺失 1 条。推送机制的可靠性需要排查。

**4. 文件分类上传路由错误（#7322）**
用户在知识库分类下上传文件，实际落入工作区根目录，分类路由逻辑有误。用户明确指出"想问下以上问题是属于 BUG 还是本来设计就是这样？"——这种设计意图不明确的情况会增加用户困惑。

**5. 上下文记忆串线（#7193）**
Agent 在一个会话中搜索记忆时，检索到了同一 agent 另一会话的内容，导致"不知道干嘛了"。跨会话记忆隔离需要进一步加固。

### 满意之处

- 发布节奏紧凑（2.1.1 → 2.2.0-beta.1 间隔很短），用户对快速迭代有正面反馈
- 多租户 Hub 方向的正式宣布，回应了长期以来的企业级需求呼声
- prompt cache 性能差异被社区用数据明确提出，且维护团队当日即给出 PR 响应——这种响应速度得到认可

---

## 8. 待处理积压 ⚠️

### 长期未解决的重要 Issue

| Issue | 创建时间 | 持续天数 | 说明 |
|---|---|---|---|
| [#6921](https://github.com/agentscope-ai/CoPaw/issues/6921) — Agent 规划完就停止 | 2026-08-12 | 15 天 | 高评论量（11+）、影响核心自动化体验，尚无可用的 fix PR |
| [#7193](https://github.com/agentscope-ai/CoPaw/issues/7193) — 记忆搜索串线 | 2026-08-21 | 6 天 | 涉及 Agent 记忆隔离机制，可能导致任务执行错误 |
| [#7298](https://github.com/agentscope-ai/CoPaw/issues/7298) — TLS 旧版导致握手被重置 | 2026-08-25 | 2 天 | 影响特定网络环境下桌面端所有连接，修复涉及升级 Python 运行时 |
| [#7312](https://github.com/agentscope-ai/CoPaw/issues/7312) — Windows 下 stdin 管道导致挂起 | 2026-08-26 | 1 天 | Windows 平台基础能力问题，影响 shell 命令执行可靠性 |

### 长期未合并的 PR

| PR | 创建时间 | 持续天数 | 说明 |
|---|---|---|---|
| [#7183](https://github.com/agentscope-ai/CoPaw/pull/7183) — workspace-scoped skill 预加载 | 2026-08-20 | 7 天 | Under Review 状态，功能已完整，等待维护者审阅 |

### 风险提示

- [#6921](https://github.com/agentscope-ai/CoPaw/issues/6921) 持续两周无 fix PR，对于 Agent 类产品的核心用户体验有显著影响，建议提升优先级
- Windows 安装器修复（#7323、#7336）虽已在进行中，但 #7298 的 TLS 问题涉及运行时升级，可能需要更长的排期

---

*日报生成时间：2026-08-27 | 数据截止：2026-08-27 发布周期内 | 项目健康度评级：🟢 快速迭代，社区活跃，需关注核心 Agent 稳定性问题*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据您提供的 ZeroClaw GitHub 数据生成的 **2026-08-27 项目动态日报**。

---

# ZeroClaw 项目动态日报 | 2026-08-27

## 1. 今日速览
ZeroClaw 项目今日处于**高度活跃**状态，核心工作集中在**架构决策与实现落地**上。过去24小时内，多项已接受的高优先级 RFC（如语音通道、会话级提示词附件）从提案阶段转向**实施调度**，由官方 Tracker 协调开发，显示出项目执行力强劲。然而，**高优先级 Bug 的报告频率依然较高**（包含潜在的 S0 严重性问题），且维护者审查队列积压（大量 PR 等待作者响应或维护者审阅），这可能是限制项目吞吐量的主要瓶颈。整体来看，项目正在从大量 RFC 讨论期逐渐过渡到密集的功能落地与安全加固期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管无 Release，但今日内部合并/关闭了几个关键 PR，标志着特定功能线的里程碑：

- **国际化基础设施扩展**：PR [#10347](https://github.com/zeroclaw-labs/zeroclaw/pull/10347) 合并，使 Quickstart CLI 验证测试与区域设置无关。同时，PR [#10378](https://github.com/zeroclaw-labs/zeroclaw/pull/10378)（本地化 ZeroCode 配置元数据）和 PR [#10189](https://github.com/zeroclaw-labs/zeroclaw/pull/10189)（本地化终端审批提示）已在流程中，展示了项目在 UI/UX 和测试层面对标准化的全面追求。
- **Bug 修复常态化**：合并了针对 Discord 图片回退逻辑重复的修复 (PR [#10385](https://github.com/zeroclaw-labs/zeroclaw/pull/10385))，以及将裸 `vision_model_provider` 迁移到新配置格式的兼容性修复 (PR [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707))。
- **实现阶段启动**：最值得关注的是，针对已接受的 RFC #8780（Gemini 语音通道）和 RFC #9998（会话级提示词附件），专门创建了**实施跟踪器** [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) 和 [#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405)，并且已经出现了对应的代码 PR [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)。这表明项目已从“决定做什么”进入“开始做”的阶段。

## 4. 社区热点
今日讨论热度集中在几个长期悬而未决的**高风险架构 RFC** 上，这些 RFC 均处于 `no-stale` 状态，持续吸引关注：

- **[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) RFC: Realtime speech-to-speech channel for Gemini Live (评论: 21)**
  这是当前最热的讨论点，经过修订后吸引了大量反馈。社区对“语音到语音”的实时交互模式表现出浓厚兴趣，讨论已促成实施 Tracker 的建立，是一个从讨论转向落地的典型案例。
- **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy from storage backends (评论: 20)**
  关于记忆生命周期与存储后端解耦的讨论依然活跃，反映了开发者对架构清晰度和可插拔性的深层需求，但该 RFC 尚未被接受，仍在辩论中。

## 5. Bug 与稳定性
今日报告了多个严重级别较高的 Bug，显示当前主分支可能在稳定性和并发处理上存在隐患：

- **S0 - 数据丢失/安全风险**：
  - [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) **网络车不可取消**：桌面端无法取消正在进行的消息且输入框被禁用，可能导致数据丢失，`r:needs-repro`。
- **S1 - 工作流阻塞**：
  - [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) **守护进程栈溢出**：应用 Quickstart 配置时导致 Tokio 运行时栈溢出，目前无 fix PR。
  - [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) **并行运行冲突**：同一会话在活跃期间接收新消息会启动并行运行，导致重复工作和回复。目前无 fix PR，但该问题关乎核心运行时逻辑，需优先关注。
- **S2 - 行为降级**：
  - [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) **终端回退绕过投递缝**：终端回退文本未通过标准的实时投递链路。

## 6. 功能请求与路线图信号
- **实现 Tracker 的建立**：为已接受的 RFC #8780（实时语音）和 #9998（会话级提示词附件）创建的 Tracker ( [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406)、[#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) ) 是强烈的路线图信号。它们不仅代表了下一版本的核心新功能，也表明维护者正在积极推动这些大型特性的落地。
- **AI 辅助 PR 审查标准化**：RFC [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) 和 [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) 虽然在议题层面，但反映了项目在**开发流程革新**上的探索，有配套的 `pr-review-pilot` 在实践中。这表明项目不仅关注产品功能，也在优化自身的研发效能。
- **桌面端体验补强**：Issue [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) 暴露了桌面端在交互控制上的短板，这可能催生关于 Web Dashboard 消息队列和取消机制的进一步优化。

## 7. 用户反馈摘要
- **需求驱动力明确**：从多个 RFC 和 Feature 请求（如 Discord 角色授权、Telegram 会话隔离）可以看出，用户对**生产级、企业级功能**（细粒度权限、多租户/多用户隔离）的需求非常强烈。
- **安全性是核心关注点**：新提交的 PR [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) 关注临时文件权限，与社区中多个关于安全沙箱（#6996）、认证边界（#9587）的讨论吻合。用户希望 ZeroClaw 在开放和扩展的同时，提供可信赖的底层安全保证。
- **透明度要求高**：多个讨论（如 #10366）都聚焦于 PR 审查流程和“作者-维护者”边界，这表明高级贡献者渴望更清晰、更高效的协作机制。

## 8. 待处理积压
以下 PR 因长期未获回应或阻塞，需维护者重点关注，以疏通开发流程：

- **等待作者响应 (`needs-author-action`)** 的高风险 PR：这些 PR 对项目贡献巨大，但均需作者进一步修改。
  - [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) feat(sessions): add persistent session prompt attachments (XL)
  - [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) fix(tools): honor allowed roots for git operations
  - [#10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075) fix(runtime): thread live config through gateway chat to the tool registry
- **等待维护者处理 (`needs-maintainer-review`)** 的关键 PR：
  - [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) feat(zerorelay): secure transport... (重大安全升级)
  - [#10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364) fix(runtime): keep detailed tool output when a short error is also set
- **历史遗留 RFC**：RFC #6996（沙箱策略）和 #6909（桌面控制）虽非今日最活跃，但长期处于 `needs-maintainer-review` 状态，积压已久。这与 #8692 中提到的“维护者决策队列”问题高度相关，建议维护者加速清理这些历史决策项，以释放社区讨论产能。

---
**总结**：ZeroClaw 项目正处于关键的**架构转型与功能扩张期**。虽然未发新版，但项目内部效率极高，多个重量级功能已进入实施阶段。然而，S0/S1 级 Bug 的出现和不断积压的审查队列是当前健康度的主要风险点，建议项目在推进新功能的同时，适当调配资源解决稳定性问题并优化维护者工作负载。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*