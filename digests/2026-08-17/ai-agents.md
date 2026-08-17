# OpenClaw 生态日报 2026-08-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-17 01:20 UTC

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

# OpenClaw 项目动态日报 — 2026-08-17

## 今日速览

OpenClaw 项目在过去 24 小时内保持高活跃度：**500 条 Issue 更新**（其中 459 条新开/活跃，41 条关闭）和 **500 条 PR 更新**（378 条待合并，122 条已合并/关闭）。**事件循环阻塞**和**消息静默丢失**仍是当前最突出的稳定性主题，多个高优先级 Issue（#121058、#115908、#112423）均指向网关主线程被同步操作卡死导致的消息投递失败。团队持续通过 clawsweeper 自动化标记了大量“需维护者评审”和“需产品决策”的长期积压项，但核心 P1 问题的修复 PR 占比仍然偏低。今日有 1 个新发布的 Release（`pr-124528-profiles`，性能分析数据包），并有多达 **34 个 PR 处于等待作者/需补充证明状态**，合并流程存在阻塞风险。

---

## 版本发布

### pr-124528-profiles — Gateway 性能分析证据包

| 项目 | 详情 |
|------|------|
| 发布类型 | 性能分析数据包（非代码发布） |
| 日期 | 2026-08-17 |
| 关联 PR | [#124528](https://github.com/openclaw/openclaw/pull/124528) |

**内容说明：** 该 Release 包含从三节点、十二并发回合的 Gateway 压力测试环境中捕获的 CPU 性能分析数据。归档中提供了 PR #124528 的**优化前**和**优化后**两套 Gateway profiles，用于事件循环热点的对比分析。

**注意事项：** 这是证据性数据包而非功能发布，无破坏性变更或迁移要求。但对于关注事件循环性能问题的开发者（如追踪 #115908 和 #112423），该数据包是重要的参考基准。

---

## 项目进展

今日有 **122 条 PR 被合并/关闭**，以下为值得关注的重要合并：

### 已合并/关闭

| PR | 标题 | 关键点 |
|----|------|--------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | `feat(security): require acknowledgement for install policy warnings` | **安全边界增强** — 外部 `security.installPolicy` 命令现可返回 `warn` 状态，交互式 CLI 安装时操作者须确认目标名称方可继续，为可疑插件/技能安装增加人工审查环节。 |
| [#124945](https://github.com/openclaw/openclaw/pull/124945) | `fix(config): reject scalar config roots instead of loading defaults` | **配置系统加固** — 修复了被截断/篡改的 `openclaw.json`（root 为 null/数字/字符串）时静默加载默认值并标记 `valid: true` 的陷阱，现在会直接报错拒绝启动。 |

### 待合并但有重要进展

| PR | 标题 | 状态 |
|----|------|------|
| [#124954](https://github.com/openclaw/openclaw/pull/124954) | `fix(agents): preserve resolved agentId in model workspace resolution` | 修复多 agent 配置下 API 调用 100% 失败的 `AgentSelectionRequiredError`，**今日新开，P1**，📣 需补充证明 |
| [#124953](https://github.com/openclaw/openclaw/pull/124953) | `fix(agents): record interrupted trajectory ending for restart-marked sessions` | 修复网关崩溃后会话标记 `abortedLastRun: true` 但轨迹中无终止事件的问题，**今日新开，P1** |
| [#124947](https://github.com/openclaw/openclaw/pull/124947) | `fix: plugin tools disappear from Codex and restricted profiles` | 修复 Codex 动态工具构建时 `preparedModelRuntime` 未传入导致插件工具全部消失的问题，**今日新开，P1** |
| [#124913](https://github.com/openclaw/openclaw/pull/124913) | `feat(tts): add structured reply speech fields` | 为 `[[tts]]` 指令块添加结构化 API 支持，使工具模式会话不再依赖文本标记表达语音控制，**P2** |
| [#124858](https://github.com/openclaw/openclaw/pull/124858) | `fix(security): prevent approved scripts from changing before execution` | 防止已批准的脚本在执行前被篡改（TOCTOU 攻击面），修复 #124738，涉及 Codex 默认 harness 的安全边界，**P1** |

**整体评估：** 项目在**安全加固**、**配置系统可靠性**和**Codex 集成修复**三个方向有明显推进。但需要警惕的是，多个 P1 修复 PR（#124954、#124953、#124947）均为今日新开且还处于 "needs proof" 状态，尚未进入可合并阶段。

---

## 社区热点

### 最受关注 Issue

| Issue | 评论数 | 状态 | 核心诉求 |
|-------|--------|------|----------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | **97** | 已关闭 | 静默回复失败在 #116277 关闭后**仍在发生** — 监控 cron 持续记录新出现，用户对“问题被关闭但未真正修复”强烈不满 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 31 | 开放 | 子代理完成结果**静默丢失** — 无重试、无通知、超时无自动重启，多种失败模式叠加 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 26 | 开放 | 网关级**每代理成本预算强制** — 防 runaway spend，运营者痛点明确 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 21 | 开放 | `steer` 模式未能在回合中注入消息，排队到回合结束才生效 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 19 | 开放 | **分层 bootstrap 文件加载** — 大工作区用户每次会话浪费大量 token |

### 热点分析

**Issue #121058（97 评论）是今日绝对热点。** 该 Issue 虽然已被关闭，但用户明确表示问题在 #116277 被关闭后**持续复发**，监控 cron 在 8/9 当天仍有新记录。这表明当前修复未真正解决问题，用户对“关闭但不修复”的做法产生了信任危机。此类“关闭但未解决”的 Issue 对项目健康度的损害极大。

**PR 侧热点**集中在 [#123482](https://github.com/openclaw/openclaw/pull/123482)（会话列表加载卡顿，涉及 Android/Web UI/Gateway 多端）和 [#123535](https://github.com/openclaw/openclaw/pull/123535)（避免会话目录刷新风暴），均由 `jesse-merhi` 提交，反映 Control UI 在大型工作区场景下的性能问题正被集中处理。

---

## Bug 与稳定性

### 🔴 P1 高严重度（无 fix PR / 修复未验证）

| Issue | 问题描述 | 修复状态 |
|-------|----------|----------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | **静默回复失败持续复发** — 已关闭但问题仍在，监控 cron 持续记录新发生 | ⚠️ 已关闭但未修复 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | **会话转录投影活锁** — 持续写负载下主线程被阻塞数十秒，所有通道传输停滞 | ❌ 无 fix PR |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | **大型 SQLite 转录清理阻塞事件循环** — 归档时在网关线程执行完整物化+压缩+磁盘 I/O | ❌ 无 fix PR |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | **WhatsApp 入站图片楔住消息通道约 3 分钟** — 多模态运行状态卡死 | ❌ 无 fix PR，需现场复现 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | **Codex 驱动的 Telegram 回合反复超时** — 做了工作但从未到达 `turn/completed` | ❌ 无 fix PR，需现场复现 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | **`Cannot convert undefined or null to object`** — 2026.3.2 回归，Google Vertex/Gemini 3.1 受影响 | ❌ 无 fix PR |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | **长对话后 write/exec 工具参数静默丢失** — 工具调用 arrives 空 arguments | ❌ 无 fix PR |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | **`tools.elevated.enabled: true` 破坏 exec 路由** — 所有 exec 被路由到网关主机而非沙箱（**安全风险**） | ❌ 无 fix PR |

### 🟡 P1 有 fix PR（待合并或待验证）

| Issue | 问题描述 | 修复 PR |
|-------|----------|---------|
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev 频道更新失败 `EUNSUPPORTEDPROTOCOL`（npm vs pnpm） | 今日活跃，有 fix-shape-clear 标记 |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 嵌入助手阶段不重试瞬态 LLM/socket 错误 | 有 fix-shape-clear，可排期 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | 子代理完成 announce 被吞（已关闭） | 已关闭处理 |
| [#111870](https://github.com/openclaw/openclaw/issues/111870) | `@openclaw/codex` CLI 上下文注册失败（已关闭） | 已关闭处理 |

### 🟠 P2 值得关注

| Issue | 问题描述 |
|-------|----------|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | memory-core SQLite **无界增长** — `memory_index_chunks` 和 `memory_embedding_cache` 无保留策略，会占满磁盘 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **僵尸进程泄漏** — hook/tool 子进程未回收，导致运行时性能下降 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | WebChat 忽略自托管 TTS/STT 配置（P2 功能缺陷） |

### 🔴 安全相关问题（高优先级）

| Issue/PR | 描述 |
|----------|------|
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | `tools.elevated.enabled: true` 导致 exec 路由绕过沙箱（**P1 安全**） |
| [#124858](https://github.com/openclaw/openclaw/pull/124858) | 已批准脚本可在执行前被篡改（TOCTOU），PR 已提交待合并 |
| [#56217](https://github.com/openclaw/openclaw/issues/56217) | 1Password 密钥提供商崩溃循环耗尽服务账户速率限制 |

---

## 功能请求与路线图信号

### 可能进入下一版本的功能

| 功能 | 来源 | 信号强度 |
|------|------|----------|
| **结构化 TTS 回复字段** | PR [#124913](https://github.com/openclaw/openclaw/pull/124913) | 🟢 强 — PR 已提交，P2，有 Telegram 可见证明要求 |
| **云 Worker 配置文件和机器选择** | PR [#124864](https://github.com/openclaw/openclaw/pull/124864) | 🟢 强 — PR 已提交，P2，含视频证明 |
| **子代理完成注入父提示** | PR [#112623](https://github.com/openclaw/openclaw/pull/112623) | 🟢 中 — PR 已提交，P2，但需更多证明 |
| **每代理成本预算强制** | Issue [#42475](https://github.com/openclaw/openclaw/issues/42475) | 🟡 中 — 26 评论，有产品决策标记，无 PR |
| **Slack Modal 支持** | Issue [#88154](https://github.com/openclaw/openclaw/issues/88154) | 🟡 中 — 有明确场景，等待维护者评审 |
| **分层 bootstrap 加载** | Issue [#22438](https://github.com/openclaw/openclaw/issues/22438) | 🟡 中 — 19 评论，可显著节省 token |
| **Slash 命令参数暂存** | PR [#123356](https://github.com/openclaw/openclaw/pull/123356) | 🟡 中 — 已提交，但明确表示不能关闭对应 Issue（命令目录未传输解析器状态） |

### 路线图信号

- **TTS 能力正在从文本标记转向结构化 API**（#124913），这是对话体验系统化的重要一步
- **云端 Worker 管理正在从纯配置走向 UI 化**（#124864），表明多云部署正在成为一等公民场景
- **成本治理**（#42475）和 **上下文管理**（#22438）是社区呼声最高的运营类需求，但均未进入 PR 阶段

---

## 用户反馈摘要

### 真实痛点

1. **“关闭但不修复”导致信任危机（#121058，97 评论）**
   > “#116277 被关闭了，但静默回复失败仍在发生。监控 cron 在 Issue 关闭后持续记录新案例——包括今天（2026-08-09）。”
   
   这是今日最强烈的用户不满信号。

2. **长会话可靠性问题集中爆发**
   - 15+ 回合后 `write`/`exec` 参数静默丢失（[#53408](https://github.com/openclaw/openclaw/issues/53408)）
   - 子代理完成结果静默丢失且无重试（[#44925](https://github.com/openclaw/openclaw/issues/44925)）
   - 子代理显示完成但底层工作未完成（[#50165](https://github.com/openclaw/openclaw/issues/50165)）
   
   用户期望：**失败必须有可见信号**，不能默默吞掉。

3. **事件循环阻塞影响所有通道**
   - SQLite 转录清理（[#112423](https://github.com/openclaw/openclaw/issues/112423)）
   - 转录投影重构活锁（[#115908](https://github.com/openclaw/openclaw/issues/115908)）
   
   单一会话的操作正在影响整个网关的可用性。

4. **多 Agent 配置下的工具可见性断裂**
   > “`api.runtime.llm.complete({ agentId, messages })` 在多 agent 配置下 100% 失败。”（[#124954](https://github.com/openclaw/openclaw/pull/124954)）

### 使用场景

- **WhatsApp 图片处理楔住 3 分钟**（[#96834](https://github.com/openclaw/openclaw/issues/96834)）— 多模态输入在真实聊天场景中的体验远未达标
- **Telegram 群组多 Agent 上下文混淆**（[#56692](https://github.com/openclaw/openclaw/issues/56692)）— 多 Agent 共存的群聊场景存在根本性设计问题
- **macOS 用户被排除在内存检测之外**（[#47273](https://github.com/openclaw/openclaw/issues/47273)）— 平台差异导致的隐性功能缺失

### 满意度信号

- ✅ 用户对 **PR #123535 和 #123482**（会话列表加载性能）的修复方向持积极态度
- ✅ **#124945 拒绝标量配置根**被社区视为正向加固
- ❌ **Issue #121058 的关闭方式**引发用户强烈不满，认为维护者“眼不见为净”

---

## 待处理积压

### 🔴 长期未响应的重要 Issue（需维护者优先关注）

| Issue | 创建时间 | 已开放天数 | 严重度 | 备注 |
|-------|----------|-----------|--------|------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 2026-03-13 | **157天** | P1 | 子代理静默丢失 — 🦞 diamond lobster，需维护者评审+产品决策 |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | 2026-03-15 | **155天** | P1 **安全** | exec 路由绕过沙箱，**需要安全评审**，长时间未被处理 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 2026-03-16 | **154天** | P1 | steer 模式不注入消息，有 linked PR |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 2026-03-10 | **160天** | P2 | 成本预算强制，26 评论，无 PR |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | 2026-04-29 | **110天** | P1 | memory_search 被异常终止，有 recovery-stuck 标记 |
| [#50165](https://github.com/openclaw/openclaw/issues/50165) | 2026-03-19 | **151天** | P2 | 子代理虚假完成状态 |

### 需注意的模式

- **`clawsweeper-recovery-stuck` 标记大量出现** — 表明修复流程在某个环节反复卡住（可能是等待复现或等待产品决策）
- **`clawsweeper:no-new-fix-pr`** 是出现频率最高的标记，说明大量 Issue 长时间没有新的修复 PR 跟进
- **多个 P1 安全类 Issue（#46786）** 已在队列中停留 5 个月，安全评审流程需要加速
- PR 侧有 **34 个处于 `waiting on author` 状态**，维护者已评审但作者未回应的 PR 数量较多，可能需要主动跟进

---

## 项目健康度总结

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐⭐ | 500+ Issues、500+ PRs 日更新，社区参与度高 |
| 响应速度 | ⭐⭐⭐ | 新 PR 和新 Issue 响应快，但大量 P1 长期积压 |
| 修复效率 | ⭐⭐ | 122 PRs 合并但 P1 问题修复 PR 占比低，多个“关闭但未修复”案例 |
| 安全性 | ⭐⭐ | 安全相关 Issue 积压严重（#46786 已 155 天），虽有新 PR 但整体滞后 |
| 社区信任 | ⭐⭐⭐ | #121058 的关闭方式引发信任危机，需改进“关闭即解决”的验证流程 |

**最需关注的行动项：**
1. **事件循环阻塞问题**（#115908、#112423）应作为 P0 级别的核心稳定性问题优先处理
2. **#121058 需要在关闭后补充验证证据**，避免类似信任危机再次发生
3. **安全类 Issue 积压**需要专门的评审通道加速处理

---

## 横向生态对比

# AI 智能体开源生态横向分析报告

**报告日期：2026-08-17** | **数据窗口：2026-08-16 ~ 2026-08-17**


## 一、生态全景

个人 AI 助手/自主智能体开源生态正处于**爆发式增长与结构性阵痛并存**的阶段。头部项目（OpenClaw）维持日均千级 Issue/PR 更新的超高活跃度，但“事件循环阻塞”“消息静默丢失”等核心稳定性问题长期悬而未决，用户信任危机开始显现。与此同时，一批差异化竞争者（NanoBot、NanoClaw、CoPaw、Moltis）正通过**token 成本治理、可插拔架构、跨会话上下文管理、ACP 协议集成**等方向切入细分市场，生态呈现“一超多强、分层竞争”的格局。共同的技术主线已清晰浮现：**上下文管理、成本可观测性、安全加固、多智能体协作**是当前所有项目都在攻坚的四大命题。


## 二、各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 健康度 | 阶段判断 |
|------|--------------|------------|---------|--------|----------|
| **OpenClaw** | 500（新开/活跃 459） | 500（合并/关闭 122） | `pr-124528-profiles`（性能数据包） | ⭐⭐⭐ | 高速迭代但稳定性欠债 |
| **NanoBot** | 15（活跃 11） | 500（仅合并 1） | 无 | ⭐⭐ | 社区活跃但合并效率堪忧 |
| **Hermes Agent** | 50 | 50（合并 6） | `v0.20.2`（补丁版） | ⭐⭐⭐ | 快速修 bug + 功能扩张 |
| **NanoClaw** | 1（误报关闭） | 32（合并 13） | 无 | ⭐⭐⭐⭐ | 核心团队密集架构迭代 |
| **PicoClaw** | 3 | 5 | 无 | ⭐⭐⭐ | 稳定但 PR 审查偏慢 |
| **IronClaw** | 1 | 7 | 无 | ⭐⭐⭐⭐ | 健康，响应迅速 |
| **Moltis** | 3 | 6（合并 5） | 无 | ⭐⭐⭐⭐ | 活跃，快速修复回归 |
| **CoPaw** | 10（新开 6） | 11（9 待合并） | 无 | ⭐⭐⭐⭐ | 外部贡献活跃，修复快 |
| **ZeroClaw** | 48 | 50（合并 4） | 无 | ⭐⭐⭐ | 架构讨论密集，稳定性测试存忧 |
| **LobsterAI** | 7（活跃 7） | 17（合并 9） | 无 | ⭐⭐⭐ | 安全加固期，Issue 积压 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | — | — | 休眠/停滞 |


## 三、OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对比 |
|------|----------|----------|
| **社区规模** | 绝对领先（500+ Issues/PRs 日更新，远超所有竞品总和） | NanoBot 次之（PR 更新量大但合并少），其余项目日更新量均在 50 以下 |
| **技术路线** | 事件驱动网关 + 多渠道适配 + 插件生态，追求“通用个人助手底座” | NanoClaw 走**单向流式投递架构**（以 #3284 核心决策为代表），架构更激进但更简洁；Moltis 聚焦**网关可组合性 + ACP 外部代理集成** |
| **核心优势** | 功能覆盖最广（30+ 渠道）、社区贡献活跃、Issue 反馈闭环 | NanoClaw 在 **DB 去重、流式单门投递**设计上更优雅；Hermes 在**桌面端和 E2E 安全审计**上有独到投入 |
| **核心瓶颈** | 事件循环阻塞（#115908/#112423）、消息静默丢失（#121058）长期未根治；安全 Issue 积压 5 个月（#46786） | NanoBot 的 token 计量三连 Bug（#5402/#5377/#5266）暴露上下文管理缺陷；NanoClaw 关键外部 PR 等待超 66 天（#2752） |

**结论**：OpenClaw 仍是生态的“母舰”与参照系，但“关闭但未修复”的做法正在消耗社区信任；NanoClaw 和 Moltis 等轻量级项目正以更干净的架构吸引开发者分流。


## 四、共同关注的技术方向

### 1. 消息/结果静默丢失（5 个项目同时面临）

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | 子代理完成结果静默丢失（#44925）、静默回复失败复发（#121058） |
| **NanoBot** | 整合截断导致消息永久丢失（#5377），游标推进越过完整批次 |
| **CoPaw** | 多轮后早期历史不可见（#7065） |
| **Hermes** | 视觉工具首次探测后消失（#87654） |
| **Moltis** | 已解决（#1193 flaky 测试），但曾存在消息丢失风险 |

**核心诉求**：“失败必须有可见信号，不能默默吞掉”——用户对静默失败零容忍。

### 2. Token 成本/上下文管理（4 个项目）

| 项目 | 具体诉求 |
|------|----------|
| **NanoBot** | tiktoken 估算失真导致整合失效（#5402）；百万 token 消耗无日志（#5266） |
| **OpenClaw** | 每代理成本预算强制（#42475）；分层 bootstrap 加载节省 token（#22438） |
| **CoPaw** | 记忆方案评价“发送全部 memory 成本惊人”（#7003） |
| **Moltis** | Heartbeat 忽略活跃时间窗口，资源浪费（#1205） |

### 3. 安全加固（4 个项目同日推进）

| 项目 | 安全动作 |
|------|----------|
| **LobsterAI** | 日志脱敏、IPC 越权防护、URL scheme 白名单（3 PR 同批合入） |
| **OpenClaw** | 安装策略警告确认（#116489）、已批准脚本 TOCTOU 防护（#124858）、exec 沙箱绕过（#46786） |
| **PicoClaw** | 多渠道媒体下载 SSRF 修复系列（#3322/#3323/#3324） |
| **NanoBot** | `exec.allowPatterns` 白名单绕过漏洞（#5305，已关闭） |

### 4. 多智能体协作与上下文隔离（3 个项目）

| 项目 | 具体方向 |
|------|----------|
| **NanoClaw** | 跨会话上下文管理（#3257）、会话分离标记（#3256）、Agent 组内存（#3278） |
| **ZeroClaw** | RFC: ephemeral agent swarms（#10025） |
| **Hermes** | Devin ACP 集成为一级 Provider（#88027） |


## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键特征 |
|------|----------|----------|------------------|
| **OpenClaw** | 全渠道通用助手 | 个人/团队全面替代 SaaS | 事件驱动网关 + 多渠道适配器 + 插件系统，功能主权最大化 |
| **NanoClaw** | 多 Agent 协作 + 文档持久化 | 技术团队构建复杂 Agent 工作流 | 流式输出单门架构（#3284）简化投递链路；模块化可插拔 API（权限/通知/拦截） |
| **NanoBot** | 轻量级多 Provider 聚合 | 追求低门槛接入的开发者 | MCP 原生支持 + 技能系统 + 多渠道，重视 KV-cache 优化 |
| **Hermes** | 桌面端优先 + ACP 生态 | 桌面重度用户/企业部署 | Electron 桌面端 + Firejail 沙箱 + E2E 安全治理；年度大版本稳定输出 |
| **CoPaw** | CLI/Console 优先 + 数据分析 | 开发者工具链集成 | cron 任务管线齐全 + 原生分析应用运行时（#6940） |
| **Moltis** | 可组合网关 + ACP 外部代理 | 系统集成商/嵌入式场景 | 模块化 gateway 构建器 + 外部 Agent 注册（MiniMax Code） |
| **ZeroClaw** | 架构治理 + 远期生态兼容 | 有长期演进规划的团队 | RFC 驱动开发 + Chat Completions 协议兼容规划（#8603）+ Swarm 模式 |
| **LobsterAI** | 企业 IM 集成 + 安全审计 | 企业用户（钉钉/飞书/QQ） | Electron + 严格安全边界 + 日志脱敏 |


## 六、社区热度与成熟度

```
高活跃·架构快速迭代期
├── OpenClaw（千级日更新，但稳定性负债）
├── NanoClaw（核心团队密集输出，架构决策激进）
└── ZeroClaw（RFC 驱动，治理导向）

中活跃·质量巩固期
├── Hermes（v0.20.2 补丁发布，修复优先）
├── CoPaw（外部贡献激增，首次贡献者质量高）
├── Moltis（编译回归快速修复，测试稳定性提升）
└── LobsterAI（安全加固周，Issue 响应待改善）

社区热度上升期
└── IronClaw / PicoClaw（反馈响应快，但功能迭代慢）

长期积压风险期
└── NanoBot（PR 合并效率极低，13 个 PR 积压 ~6 个月）

休眠
└── NullClaw / TinyClaw / ZeptoClaw
```


## 七、值得关注的趋势信号

**1. “流式单出口”正在成为架构共识。** NanoClaw #3284 确立的“中间流式输出为唯一内容出口”设计，是对传统双通道（流式+最终结果）投递复杂度的根本简化——如果这一模式被验证稳定，可能引领下一代网关设计。

**2. 成本可观测性不再是“加分项”而是“生存项”。** NanoBot #5266 的用户报告“2 小时消耗约百万 token 却无可见活动”——当 API 成本成为真实账单压力时，细粒度 token 审计日志、每代理预算强制（OpenClaw #42475）、按需 schema 暴露（NanoBot #5298）正从“nice-to-have”变成“must-have”。

**3. 安全加固从“单个修复”走向“纵深防御体系”。** LobsterAI 一日合入三个安全 PR（日志 → IPC → URL scheme）标志着安全投入的系统化；PicoClaw 的 SSRF 修复系列覆盖 5 个渠道；OpenClaw 则面临安全 Issue 积压 5 个月（#46786）的健康度拷问。

**4. 外部贡献者的耐心正在成为稀缺资源。** NanoClaw #2752（Discord 附件）等待 66 天、NanoBot 13 个 PR 积压近半年、PicoClaw Exa PR 积压 22 天——维护者若不及时回应，优秀的贡献者将流向响应更快的项目（对比：IronClaw 对 Issue #7681 当日即提交修复 PR）。

**5. 开发者正从“功能广度”转向“场景深度”。** 从 CoPaw 游戏开发者的语言高亮需求（#7068）、Moltis 的 MiniMax Code 集成（#1204）、ZeroClaw 的 Chat Completions 兼容（#8603）可以看出——用户不再满足于“什么都能做但什么都不精”，而是要求 Agent 能适配**具体行业的具体工作流**。

**6. 跨平台多 Agent 共存的标准缺失。** OpenClaw #56692（Telegram 群组多 Agent 上下文混淆）与 NanoClaw #3255（多个适配器实例共享地址）共同指向同一痛点——当多个 Agent/机器人同时存在于一个会话空间时，消息归属与上下文隔离缺乏成熟模式，这可能是下一个架构创新的热点。

---

*报告由 AI 分析师自动生成，数据截止 2026-08-17 00:00 UTC。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-17

**数据周期**：2026-08-16 至 2026-08-17（UTC）  
**数据来源**：github.com/HKUDS/nanobot

---

## 1. 今日速览

NanoBot 项目在过去 24 小时内保持高度活跃：Issue 侧有 15 条更新（11 条活跃、4 条关闭），PR 侧有 500 条更新，但其中 499 条处于待合并状态，仅 1 条完成合并/关闭，合并效率偏低。无新版本发布。社区关注焦点集中在 **token 消耗过高 #5266**、**对话历史前缀保真问题 #2463** 和 **令牌整合（consolidation）相关 Bug（#5402、#5377）** 三条线上，讨论热度最高。值得警惕的是 **`exec.allowPatterns` 绕过的安全漏洞（#5305）** 虽在今日关闭，但安全类议题的修复方式值得关注。整体来看，项目社区活跃度高，但 PR 积压严重（499 条待合并），维护者带宽可能是瓶颈。

---

## 2. 版本发布

**无新版本发布。**

上一次发布至今的间隔已较长，且当前 PR 积压量庞大（499 条待合并），建议维护团队评估是否需要在近期规划一次集中发布，以消化积压变更。

---

## 3. 项目进展

今日仅 1 条 PR 合并/关闭：

- **[PR #4329] [CLOSED] feat(cli): add native TypeScript terminal UI**  
  链接：https://github.com/HKUDS/nanobot/pull/4329  
  作者：pancacake  
  说明：该 PR 曾在 main 分支短暂出现后被误标记为合并，main 分支随即被恢复，因此该 PR 的改动实际上并未进入主干。替代 PR [#5406](https://github.com/HKUDS/nanobot/pull/5406) 已由 Re-bin 重新提交，携带相同提交历史及跨终端测试修复。

**进展评估**：今日无实质性的代码合并进入主干，项目功能层面的推进依赖新的 PR #5406（TypeScript 终端 UI）和 #5358（WebUI 会话协作）等后续合并。当前合并节奏需要关注。

> **另需注意**：大量 PR（如 #1306、#1205、#1195、#1149、#1147、#1128、#1073、#1072、#1066、#1053、#1037、#1034、#1032、#1026、#1025、#1024、#1015 等）已标注 **[conflict]** 标记，长期处于未合并状态（多数创建于 2 月），需要维护者解决冲突或明确关闭，否则积压将持续膨胀。

---

## 4. 社区热点

**最热门 Issue 排行（按讨论活跃度）：**

1. **[#2463] [OPEN] Architectural issue: nanobot does not preserve the exact prompt prefix it previously sent**  
   https://github.com/HKUDS/nanobot/issues/2463  
   评论：15 | 👍：0 | 更新于 2026-08-16  
   作者：ronny-rentner  
   该问题自 3 月提出以来持续活跃，讨论的核心矛盾在于：NanoBot 持久化的对话历史与发送给模型的实际提示词前缀不一致，这与 OpenAI 的缓存机制产生根本性冲突（影响 KV-cache 命中率和成本消耗）。

2. **[#5266] [OPEN] [enhancement] Logs about token consumption (too many tokens are burned)**  
   https://github.com/HKUDS/nanobot/issues/5266  
   评论：14 | 👍：0 | 更新于 2026-08-16  
   作者：knoppix2  
   用户反馈"2 小时内消耗了约百万 token 且无可见活动"，要求对每次 API 调用的 token 消耗提供细粒度的可观测性日志。

3. **[#2185] [CLOSED] [regression] Upgrade from 0.1.4 to 0.1.4post5 breaks gemini-3-flash-preview**  
   https://github.com/HKUDS/nanobot/issues/2185  
   评论：9 | 👍：0 | 更新于 2026-08-16  
   回归问题，升级后 Gemini-3-flash-preview 不可用，今日关闭。

**热点诉求分析**：Token 消耗的可观测性是当前社区最强烈的呼声，与 #5402（tiktoken 低估导致整合不触发）和 #5377（整合截断导致消息丢失）形成一条明确的技术债线索——**token 计量不准确正在引发成本失控、上下文管理失灵等一系列连锁问题**。

---

## 5. Bug 与稳定性

**🔴 安全级别（严重）：**

- **[#5305] [CLOSED] [Security] `exec.allowPatterns` 白名单绕过可导致链式 shell 命令执行**  
  https://github.com/HKUDS/nanobot/issues/5305  
  作者：YLChen-007 | 创建：2026-08-09 | 今日关闭  
  严重安全漏洞：通过 OpenAI 兼容 API 可绕过 `exec` 工具的 allowlist 白名单，执行预设之外的额外 shell 段。今日已关闭，建议维护者在发布说明中明确修复方式及受影响版本。

**🟠 高优先级（影响核心功能）：**

- **[#5402] [OPEN] Token 整合从不触发——tiktoken 估算持续低于 API 实际计数**  
  https://github.com/HKUDS/nanobot/issues/5402  
  作者：Xcc313r4n7 | 创建：2026-08-16  
  问题描述：token 整合系统使用 tiktoken 估算 prompt 用量，但该估算持续低于 API 返回的真实值，导致整合机制形同虚设。这对长对话场景影响重大，可导致上下文溢出或成本失控。

- **[#5377] [OPEN] 整合截断归档输入，但游标推进越过完整消息批次**  
  https://github.com/HKUDS/nanobot/issues/5377  
  作者：dajiaohuang | 创建：2026-08-13  
  问题描述：`Consolidator.archive()` 将格式化对话截断到模型输入预算内，但调用方仍将 `last_consolidated` 推进到整个原始批次之后——被截断删除的消息将永久丢失。

- **[#4864] [OPEN] [bug] `<tool_call> <function=complete_goal>` 进入死循环**  
  https://github.com/HKUDS/nanobot/issues/4864  
  作者：Asem-D | 创建：2026-07-09 | 👍：1  
  问题描述：网关将 `recap` 参数解析为裸字符串而非 JSON 对象，导致 `complete_goal` 持续报错死循环。疑似最近的工具参数序列化变更引入的回归。

**🟡 中优先级：**

- **[#5373] [CLOSED] Cron 调度器在单次 job-store 持久化失败后永久宕机**  
  https://github.com/HKUDS/nanobot/issues/5373  
  作者：rickererer | 创建：2026-08-13 | 今日关闭  
  单次持久化失败（如磁盘满、权限变化、文件锁）会从 timer 任务中抛出，导致 `_arm_timer()` 不再触发下一轮调度。

- **[#2185] [CLOSED] [regression] 0.1.4 → 0.1.4post5 升级破坏 gemini-3-flash-preview**  
  https://github.com/HKUDS/nanobot/issues/2185  
  今日关闭，回归问题已解决。

**Bug 修复状态总览**：今日关闭的 4 个 Issue 中，包含 1 个安全漏洞（#5305）、1 个回归问题（#2185）、1 个平台/渠道问题（#5275）和 1 个调度器稳定性问题（#5373）。目前该 4 个问题均已关闭，但尚无对应的合并 PR 显示在今日的动态中，建议维护者明确修复 PR 的关联。

---

## 6. 功能请求与路线图信号

**高潜力纳入下一版本的功能：**

1. **[#5404] [OPEN] [enhancement] 技能增加 `disable-model-invocation` 选项**  
   https://github.com/HKUDS/nanobot/issues/5404  
  作者：nilslacroix | 创建：2026-08-16  
  诉求：允许将技能标记为"仅用户可调用"，模型无法自动触发。参考了 Cursor、Claude Code 等工具的做法。该功能若落地，可补充 NanoBot 在技能权限控制方面的能力，实现成本低（一个配置项），预计会被采纳。

2. **[#5251] [OPEN] [enhancement] WebUI 支持 MCP Apps 主机**  
   https://github.com/HKUDS/nanobot/issues/5251  
  作者：yuklcool | 创建：2026-08-05  
  诉求：接入官方 `io.modelcontextprotocol/ui` 扩展，让 MCP 服务器可附带交互式 UI 组件（表单、按钮等）。呼应了 MCP 生态的最新方向，属于前瞻性功能。

3. **[#5298] [OPEN] [enhancement] 对大型工具集实施 MCP Schema 预算**  
   https://github.com/HKUDS/nanobot/issues/5298  
  作者：kuaijiemei | 创建：2026-08-08  
  诉求：当 MCP 工具数量大时，`get_definitions()` 返回的 schema 会占据大量上下文。建议为模型可见的 MCP 工具定义设置预算，按需截断或分层暴露。与 #5402 的 token 问题形成呼应。

4. **[#4467] [OPEN] [enhancement] Dream 应更新现有技能而非每次创建重复项**  
   https://github.com/HKUDS/nanobot/issues/4467  
  作者：songsong-hui | 创建：2026-06-23 | 👍：1  
  诉求：Dream 每次运行都会在 `skills/` 下创建新技能副本，即使用户已维护同名的工作区技能。建议改为增量更新模式，保留用户的自定义改进。

5. **[#5289] [OPEN] feat(telegram): 支持发送贴纸及 Agent 主动消息响应**  
   https://github.com/HKUDS/nanobot/issues/5289  
  作者：kaguya-nanobot[bot] | 创建：2026-08-07  
  为 Telegram 渠道增加贴纸支持及 Agent 主动反应（reaction），丰富交互表达方式。

6. **[#5161] [OPEN] refactor: 收窄文件级 Pyright 抑制**  
   https://github.com/HKUDS/nanobot/issues/5161  
  作者：chengyongru | 创建：2026-07-29  
   技术债清理：在 PR #5158 开启 `strict` 检查后，基线中有 31 个文件级 `# pyright:` 指令。此重构旨在将抑制范围收窄到具体行，提升类型安全性。

---

## 7. 用户反馈摘要

| 反馈来源 | 用户痛点 | 诉求 |
|---------|---------|------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Token 消耗巨大（2 小时约百万 token），且无可见用户活动 | 需要细粒度 token 审计日志：何时、哪个调用、消耗了多少 token |
| [#5402](https://github.com/HKUDS/nanobot/issues/5402) | tiktoken 估算持续低估实际 token 数，整合机制形同虚设 | 修复 token 计量，使上下文整合在真正超限时触发 |
| [#5377](https://github.com/HKUDS/nanobot/issues/5377) | 归档截断后消息游标推进，导致部分消息永久丢失 | 确保被截断的消息不被标记为已处理 |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 持久化对话历史与实际发送的 prompt 前缀不一致，破坏 KV-cache 复用 | 保持发送给模型的 prompt 前缀与持久化内容一致，以受益于隐式缓存 |
| [#4467](https://github.com/HKUDS/nanobot/issues/4467) | Dream 每次运行生成重复技能副本，用户的自定义改进被覆盖或旁路 | 更新现有技能文件而非新创建 |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 因参数解析回归进入死循环 | 修复工具参数序列化，增加错误重试上限 |
| [#5289](https://github.com/HKUDS/nanobot/issues/5289) | Telegram 渠道缺少贴纸支持，入站贴纸显示为空消息 | 实现 `send_sticker`，支持 Agent 主动发送表情响应 |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | WebUI 会话间无法协作引用 | 通过 @提及 建立会话间协作能力，带稳定身份颜色 |

**整体满意度评估**：社区对 NanoBot 的功能广度（MCP、多渠道、子代理）认可度高，但 token 计量不准确、上下文整合逻辑缺陷以及部分回归问题正在消耗用户信任。技能管理和会话协作方面用户有明确的产品化诉求，说明项目正在从"能用"走向"好用"的阶段。

---

## 8. 待处理积压（重点关注）

**⚠️ 长期未响应的关键 Issue：**

| Issue | 创建时间 | 未响应时长 | 标签 | 链接 |
|-------|---------|-----------|------|------|
| #2463 — prompt 前缀不一致（架构问题） | 2026-03-25 | ~5 个月 | provider, priority: p2 | [链接](https://github.com/HKUDS/nanobot/issues/2463) |
| #4864 — complete_goal 死循环 | 2026-07-09 | ~6 周 | bug | [链接](https://github.com/HKUDS/nanobot/issues/4864) |
| #4467 — Dream 技能重复创建 | 2026-06-23 | ~8 周 | enhancement | [链接](https://github.com/HKUDS/nanobot/issues/4467) |

**⚠️ 长期未合并的 PR（按创建时间排序）：**

| PR | 创建时间 | 状态 | 内容 | 链接 |
|----|---------|------|------|------|
| #1015 | 2026-02-22 | [conflict] | 子代理支持自定义模型参数 | [链接](https://github.com/HKUDS/nanobot/pull/1015) |
| #1024 | 2026-02-22 | [conflict] | 子代理 profiles（可配置工具和技能） | [链接](https://github.com/HKUDS/nanobot/pull/1024) |
| #1025 | 2026-02-23 | [conflict] | OAuth token 持久化 + 保留未知字段（修复 #1023） | [链接](https://github.com/HKUDS/nanobot/pull/1025) |
| #1026 | 2026-02-23 | [conflict] | 媒体文件处理后删除，防止磁盘无限增长 | [链接](https://github.com/HKUDS/nanobot/pull/1026) |
| #1032 | 2026-02-23 | [conflict] | 子代理控制面 MVP（list/kill） | [链接](https://github.com/HKUDS/nanobot/pull/1032) |
| #1037 | 2026-02-23 | [conflict] | 将当前时间移到系统提示词末尾（优化隐式缓存） | [链接](https://github.com/HKUDS/nanobot/pull/1037) |
| #1053 | 2026-02-23 | [conflict] | 消息工具传递渠道路由元数据（修复 Slack 线程回复） | [链接](https://github.com/HKUDS/nanobot/pull/1053) |
| #1072 | 2026-02-23 | [conflict] | 捕获工具执行中 CancelledError 防止崩溃 | [链接](https://github.com/HKUDS/nanobot/pull/1072) |
| #1073 | 2026-02-23 | [conflict] | 保存配置时保留未知键（修复 #1023 Bug 2） | [链接](https://github.com/HKUDS/nanobot/pull/1073) |
| #1306 | 2026-02-28 | [conflict] | Discord 语音/音频 + TTS 回复 | [链接](https://github.com/HKUDS/nanobot/pull/1306) |
| #1205 | 2026-02-25 | [conflict] | KV-cache 复用 + batch 前缀翻转 | [链接](https://github.com/HKUDS/nanobot/pull/1205) |
| #1195 | 2026-02-25 | [conflict] | Telegram 论坛主题支持 | [链接](https://github.com/HKUDS/nanobot/pull/1195) |
| #1149 | 2026-02-25 | [无标记] | PromptGuard 提示注入检测 | [链接](https://github.com/HKUDS/nanobot/pull/1149) |

**积压分析**：13 个 PR 均自 2 月以来长期未合并，多数已标注冲突，涵盖安全（#1149）、数据丢失（#1073）、稳定性（#1072）和关键功能（#1024、#1032）等方向。核心问题集中在：
- 维护者需要对积压 PR 进行优先级排序和冲突解决，避免有价值的贡献因长期搁置而失效；  
- Issue #1023（配置保存丢弃未知字段）已有两个 PR（#1025、#1073）尝试修复但均未合并，用户数据安全风险持续存在。

---

## 项目健康度总结

| 维度 | 状态 | 说明 |
|------|------|------|
| 社区活跃度 | 🟢 高 | 每日 Issue/PR 更新量大，用户参与积极 |
| 版本发布节奏 | 🟡 中 | 暂无新版本，近期可能应在 PR 消积后规划发布 |
| PR 合并效率 | 🔴 低 | 500 条 PR 更新仅 1 条合并，积压严重 |
| Bug 修复响应 | 🟡 中 | 安全漏洞及时关闭，但 token 相关核心问题仍开放 |
| Token 成本控制 | 🔴 差 | 多个关联问题（#5266、#5402、#5377）指向同一根源，需系统性修复 |
| 安全性 | 🟢 良好 | 安全漏洞（#5305）发现后一周内关闭 |

**给维护者的优先建议**：① 解决 #1023 系列（配置丢失）和 #1072（CancelledError 崩溃）的合并事宜；② 将 token 计量准确性问题列为 P0 系统性排查；③ 对 13 个自 2 月积压的 ## 项目状态总览

**活跃度**：高（Issue：15 条更新/日，PR：500 条更新/日）  
**关键事件梳理**：
- 4 个 Issue 关闭（含 1 个安全漏洞 #5305、1 个回归 #2185）；  
- 1 个 PR 状态变更（#4329 被标记为已合并后又因误操作关闭）；  
- 无新版本发布。

**各维度评估**：
- **社区健康度**：👍 讨论活跃、反馈详实、用户参与度高；  
- **项目维护效率**：⚠️ 合并 PR 瓶颈明显（13 个 PR 已积压近 6 个月）；  
- **稳定性风险**：⚠️ Token 计量相关三连 Bug（#5402、#5377、#5266）指向核心上下文管理机制存在较大隐患，需尽快修复；  
- **安全态势**：✅ 新发现的安全漏洞及时处理（#5305），但需关注类似 `allowPatterns` 白名单机制在其它工具中的覆盖情况。

---

*本日报由 AI 分析师自动生成，数据截止 2026-08-17 00:00 UTC。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 Hermes Agent GitHub 数据，我为您生成了 2026-08-17 的项目动态日报。

---

### Hermes Agent 项目动态日报 (2026-08-17)

#### 1. 今日速览

Hermes Agent 项目今日活跃度极高，处于快速迭代与问题集中爆发期。过去24小时内，Issue 和 PR 更新均达到50条，新版本 v0.20.2 已发布，展现出强劲的开发动力。然而，问题追踪列表呈现出大量针对特定平台（Windows）、特定场景（网关重启、桌面应用、i18n）的精细化 Bug 报告，表明项目在功能扩张后正面临稳定性与兼容性挑战。社区参与热情高涨，贡献者积极提交修复 PR，但大量 PR 尚在待合并状态，维护者需关注合并效率以保持社区 momentum。

#### 2. 版本发布

- **v2026.8.16 (v0.20.2)**
  - **内容**：这是一个补丁版本，主要将自 v0.20.1 以来合并的约 397 个 PR 汇总为一个稳定的标签版本，供下游消费者（如 Docker 镜像、托管部署、新安装）使用。
  - **破坏性变更**：**无**。作为 Patch Release，该版本旨在提高稳定性，不包含预期的破坏性变更。
  - **迁移注意事项**：对于现有用户，尤其是通过 Docker 或托管服务部署的用户，建议在测试环境中验证后升级到此版本，以获取自 0.20.1 以来的所有修复和改进。

#### 3. 项目进展

虽然今日合并/关闭的 PR 数量为6条，但其中包含数个关键修复，对提升特定场景的稳定性有直接贡献。

- **桌面端体验优化**：PR [#62300](https://github.com/NousResearch/hermes-agent/pull/62300) 修复了桌面聊天界面计时器在导航切换后重置的问题 (Issue #62158)，提升了用户体验的连贯性。
- **安全维护**：PR [#73703](https://github.com/NousResearch/hermes-agent/pull/73703) 和 PR [#73662](https://github.com/NousResearch/hermes-agent/pull/73662) 完成了对网站和 JS 工作区依赖的 npm 安全审计修复，分别修复了 `brace-expansion` 和 `PostCSS` 中的漏洞，降低了项目供应链风险。
- **项目里程碑**：v0.20.2 版本的发布是今日最重要的进展，它标志着过去一个多月的大量工作（~397 PRs）已稳定集成，为更广泛的用户群体提供了可靠的更新基点。

#### 4. 社区热点

今日讨论最热烈的 Issue 集中在**系统集成与跨平台兼容性**的深层问题上。

- [Issue #87559](https://github.com/NousResearch/hermes-agent/issues/87559)：**ACP 提供的 MCP 服务器工具未出现在可调用工具目录中**。这是 ACP 模式下的核心功能故障，涉及与外部守护进程（如 Paseo daemon）的集成，5条评论表明用户对此高度关注，因为这直接影响了 ACP 生态的实用性。
- [Issue #62158](https://github.com/NousResearch/hermes-agent/issues/62158)：**桌面聊天计时器重置**。虽然是已关闭的 Bug，但4条评论和较长的存活时间（7/10创建）反映出用户对桌面端细节体验的在意。该 Issue 的关闭得益于 PR #62300 的合并。
- [Issue #87093](https://github.com/NousResearch/hermes-agent/issues/87093)：**[Setup] Debian 安装失败**。作为 P1 优先级问题，影响了新用户的入门体验，社区关注度高，迫切需要一个可靠的安装解决方案。

#### 5. Bug 与稳定性

今日报告的 Bug 呈现多点爆发态势，以下按严重程度排列：

- **P1 级**:
  - [Issue #88033](https://github.com/NousResearch/hermes-agent/issues/88033)：**`hermes serve` 文件描述符泄漏导致 EMFILE**。这是一个严重问题，直接影响长期运行服务的稳定性，可致代理完全不可用。**已有对应修复 PR [#88048](https://github.com/NousResearch/hermes-agent/pull/88048)**。
  - [Issue #87093](https://github.com/NousResearch/hermes-agent/issues/87093)：**Debian 安装脚本失败**。阻塞新用户部署，是项目的入门障碍。目前**暂无直接关联的 fix PR**。
- **P2 级**:
  - [Issue #87654](https://github.com/NousResearch/hermes-agent/issues/87654)：**视觉工具（Vision tools）在首次探测后消失**。核心 Agent 功能缺陷，影响会话连续性。
  - [Issue #87598](https://github.com/NousResearch/hermes-agent/issues/87598)：**Telegram 网关冷启动失败，重连机制失效**。影响消息平台稳定性，需要完全重启才能恢复，对依赖 Telegram 的用户影响较大。
  - [Issue #87514](https://github.com/NousResearch/hermes-agent/issues/87514)：**Firejail 沙箱环境下桌面更新失败**。限制了受严格安全策略保护的用户进行产品更新。
  - [Issue #87652](https://github.com/NousResearch/hermes-agent/issues/87652)：**桌面应用重复打开 TTS WebSocket**。导致回复被朗读两次，影响核心功能体验。
  - [Issue #87497](https://github.com/NousResearch/hermes-agent/issues/87497)：**`lifecycle_guard` 对 `ValueError: embedded null byte` 修复不完整**。存在绕过安全限制的风险，安全问题需重点关注。
- **P3 级**:
  - 包含了大量 i18n（中文本地化）、平台兼容（Windows）等问题，例如 [Issue #87577](https://github.com/NousResearch/hermes-agent/issues/87577)、[Issue #87580](https://github.com/NousResearch/hermes-agent/issues/87580)、[Issue #87582](https://github.com/NousResearch/hermes-agent/issues/87582) 等，虽不致命但影响用户体验的精细度。

#### 6. 功能请求与路线图信号

- **将 Devin ACP 集成为一级 Provider**：[PR #88027](https://github.com/NousResearch/hermes-agent/pull/88027) 提出将 Devin (Cognition) 作为 Hermes 的官方 Provider。这表明项目有意扩展其多智能体协作生态，将外部专业 Agent 纳入统一管理，是一个重要的路线图信号。
- **自动化运维体验增强**：[PR #80752](https://github.com/NousResearch/hermes-agent/pull/80752) 提出为反复失败的定时任务增加“审查提醒”。这呼应了用户对 Agent 自主性和可观测性的需求，可能被纳入后续版本以提升 Cron 功能的健壮性。

#### 7. 用户反馈摘要

- **部署痛点**：新用户（尤其是 Debian 用户）在安装阶段即遇到阻碍，说明安装脚本的跨发行版兼容性测试有待加强。同时，沙箱环境（Firejail）下的更新失败也让部分高级用户感到不便。
- **稳定性反馈**：大量关于网关重启、工具丢失、连接失败的报告表明，用户对长时运行下的系统稳定性有较高期待，任何需要手动干预的重启都被视为严重问题。
- **体验细节**：用户对桌面端的细节（如计时器重置、TTS 重复播放）和本地化（zh-CN）的关注度很高，说明项目已拥有一定的中文用户群体，他们对打磨产品细节有明确诉求。

#### 8. 待处理积压

- **重要 PR 等待合并**：目前有 44 个 PR 处于待合并状态。其中部分修复了今日报告的 P1/P2 级问题，如 [#88048](https://github.com/NousResearch/hermes-agent/pull/88048)（修复FD泄漏）和 [#88050](https://github.com/NousResearch/hermes-agent/pull/88050)（修复 Cron 重试风暴）。长期积压会阻塞问题闭环并削弱贡献者积极性。
- **长期未解决的核心 Issue**：如 [Issue #31367](https://github.com/NousResearch/hermes-agent/issues/31367)（飞书 WebSocket 断开导致网关重启）自5月24日创建，活跃至今已近3个月，仍未关闭。这类长期存在的问题对特定平台用户的信任度有较大影响，建议维护者优先排查并给与回应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-17** | **数据来源：github.com/sipeed/picoclaw**


## 1. 今日速览

PicoClaw 在过去24小时内保持稳定活跃：共产生 **3 条新 Issue** 和 **5 条 PR 更新**，无新版本发布。社区贡献集中在 **安全加固（SSRF 防护）** 与 **新功能扩展** 两条主线上——SashaMIT 连续提交了 3 个针对多渠道媒体下载 SSRF 漏洞的修复 PR，虽已标记为 stale 但仍在更新中。新 Issue 方面，用户报告了 Slack 媒体上传的实际功能缺陷（#3338），同时提出了 Telegram 表格富渲染（#3325，stale）和 OAuth 2.1 支持（#3302，stale）的增强需求。整体而言，项目代码活跃度中等偏上，但 **PR 审查效率偏低**（1 个 PR 等待合并已超 3 周），且部分高价值 PR 面临 stale 风险。


## 2. 版本发布

过去24小时内无新版本发布。


## 3. 项目进展

### 已合并/关闭 PR

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | ✅ 已关闭 | 新增 SimpleX 通道类型支持。该 PR 自 6/27 创建以来历时约 7 周，最终于 8/16 关闭。SimpleX 作为隐私优先的通讯协议，这一合并拓展了 PicoClaw 的多平台覆盖版图。 |

### 待合并 PR（重要）

| PR | 标题 | 等待天数 | 说明 |
|---|---|---|---|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | **22 天** | 新增 Exa 原生 web 搜索 provider，支持 `d/w/m/y` 时间范围过滤，通过 `X-Api-Key` 认证。 |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | fix(channels): block private targets on inbound media downloads | 8 天 | SSRF 加固：为 QQ/Telegram/Discord/LINE/Slack 入站附件下载启用 `BlockPrivateTargets`。 |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | fix(wecom): use CreateSafeHTTPClient for media downloads | 8 天 | 企业微信媒体下载改用安全 HTTP 客户端。 |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | fix(weixin): use CreateSafeHTTPClient for media downloads | 8 天 | 微信媒体下载改用安全 HTTP 客户端。 |

**小结：** 今日唯一合并的 PR #3193（SimpleX 通道）落地了 6 月底以来的新功能；而 SashaMIT 提交的 3 个安全修复 PR 已积压 8 天，且均被标记为 stale（当前为开放状态但需尽快关注）。此外 Exa 搜索 PR 积压 22 天而无进展。**审查效率是当前项目向前推进的主要瓶颈。**


## 4. 社区热点

**最活跃讨论：**

**[#3302 - [Feature] Support OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302)** 
- 3 条评论 | 创建于 7/30 | 已标记 stale
- 用户 sunboy0523 提出为 MCP 服务器支持 OAuth 2.1，引用已有 Issue #2546 作为参考。该需求涉及 MCP 生态认证标准演进，属于 Nice-to-Have 类别。

**[#3325 - [Feature] Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325)**
- 1 条评论 | 创建于 8/9 | 已标记 stale
- 用户 As-tsaqib 指出当前 Telegram 回复走 `sendMessage` HTML/MarkdownV2 路径，结构化 Markdown 表格退化为纯文本。Telegram Bot API 10.1 已引入原生表格 UI，建议跟进。

**分析：** 当前社区讨论关注点集中在 **MCP 协议生态演进** 和 **Telegram 富文本渲染能力** 上，属于功能增强类需求而非紧急缺陷。但两个 Issue 均已被标记为 **stale（7/30、8/9 创建）**，若维护者不积极回应，可能面临自动关闭风险。


## 5. Bug 与稳定性

### 今日新增

| 严重程度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🟠 中 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | **Slack 媒体上传失败**：`file.upload.v2: file size cannot be 0`。`SendMedia` 构建 `slack.UploadFileParameters` 时未设置 `FileSize`，导致所有上传在发起网络请求前即被 SDK 拒绝。 | ❌ 无 PR |

**技术预判：** 该 Bug 根因明确、修复方式直接（为 `UploadFileParameters` 设置正确的 `FileSize` 字段）。PicoClaw 版本为 0.3.x，推测为较新引入的回归或长期存在的基础功能缺陷。建议维护者优先分配处理。

### 待审查的安全修复（SSRF 系列）

| PR | 影响范围 | 风险等级 |
|---|---|---|
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | QQ/Telegram/Discord/LINE/Slack 入站附件下载 | 🟠 中（SSRF 风险） |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | 企业微信媒体下载 | 🟠 中 |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | 微信媒体下载 | 🟠 中 |


## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 状态 | 评估 |
|---|---|---|---|
| **Exa 原生搜索接入** | PR #3299 | 待合并 22+ 天 | 功能已完成，关键是在 `tools.web` 中增加一个 provider 选项。若本周内合入，有望进入下一版本。 |
| **SimpleX 通道** | PR #3193 | ✅ 已合并 | 确定进入下一版本。 |
| Telegram 表格富渲染 | Issue #3325 | stale | 有明确技术路径（Bot API 10.1），社区有需求但非核心。 |
| MCP OAuth 2.1 支持 | Issue #3302 | stale | 属于中长线规划，依赖于 MCP 生态的认证标准落地节奏。 |
| Slack 上传修复 | Issue #3338 | 新开 | 属于缺陷修复，应优先于新功能开发。 |

**路线图信号：** 安全加固（SSRF 系列 PR）与 Exa 搜索是两个最可能进入下一版本的功能/修复方向。Slack 上传 Bug 今日新报，按优先级应排在功能开发之前。


## 7. 用户反馈摘要

| 来源 | 反馈要点 | 类型 |
|---|---|---|
| Issue #3338（新） | Slack 媒体上传完全不可用，SDK 直接拒绝请求 | 😠 不满（功能缺陷） |
| Issue #3325 | 结构化表格在 Telegram 上退化为纯文本/代码块，体验差 | 😕 不满（体验受限） |
| Issue #3302 | 希望跟进 MCP 认证生态的 OAuth 2.1 标准 | 😐 期待（生态跟进） |
| PR #3299（Exa） | 希望增加更多搜索 provider 选项，丰富 `tools.web` 能力 | 😊 正向（能力扩展） |

**总结：** 用户对 PicoClaw 多平台覆盖的广度认可度较高，但 Slack 媒体上传作为基础通信能力不可用，直接影响实际使用体验；Telegram 表格渲染问题反映用户在追求更丰富的富文本表达。


## 8. 待处理积压 ⚠️

| 项目 | 类型 | 积压时长 | 风险 |
|---|---|---|---|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) Exa 搜索 provider | PR | 22 天 | 🟠 高（功能完整却长期积压，贡献者积极性受挫） |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) 微信 SSRF 修复 | PR | 8 天（已 stale） | 🟠 高（安全修复不应拖延） |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) 企业微信 SSRF 修复 | PR | 8 天（已 stale） | 🟠 中 |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) 多通道 SSRF 修复 | PR | 8 天（已 stale） | 🟠 中 |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) Telegram 表格渲染 | Issue | 8 天（已 stale） | 🟡 中（社区期待回应） |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) MCP OAuth 2.1 | Issue | 18 天（已 stale） | 🟡 低-中（非紧急但需表态） |

---

**📊 项目健康度评估：**

| 维度 | 状态 |
|---|---|
| 社区活跃度 | 🟢 良好（24h 内 8 条更新） |
| 维护响应速度 | 🟡 一般（Exa PR 22 天未审） |
| 代码质量管控 | 🟢 良好（安全加固 PR 质量高） |
| Issue 处理效率 | 🟡 一般（3 个新 Issue 中 2 个已 stale） |
| 版本迭代节奏 | 🟡 一般（近期无新版本发布） |

**维护者行动建议：** 优先审查 SashaMIT 的 SSRF 修复系列（#3322/3323/3324）和 Exa 搜索 PR（#3299），对长期积压的贡献者给予明确回应，避免社区贡献流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期**: 2026-08-17  
**数据窗口**: 2026-08-16 00:00 UTC — 2026-08-17 00:00 UTC  
**数据来源**: github.com/qwibitai/nanoclaw


## 1. 今日速览

NanoClaw 过去 24 小时保持高强度迭代节奏——**32 条 PR 更新**（13 条已合并/关闭，19 条待合并），核心团队（gavrielc 等）主导的大规模架构级 PR 集中落地，覆盖跨会话上下文管理、DB 迁移、流式投递单门架构等关键领域。Issues 侧仅 1 条（误报后关闭），社区反馈面平静。整体项目活跃度评级：**高**，核心开发持续产出，但外部贡献者的 PR 进入合并的比例偏低，值得关注。

**今日关键信号**：
- 由 #3284 确立的"**流式输出作为唯一内容出口**"架构不变量，是本轮最核心的架构决策
- 19 条待合并 PR 积压，其中 3 条来自外部贡献者（#3282、#3281、#2752），等待审查时间不一
- 社区侧无新 Issue 提交，已有 1 条误报关闭，无明显用户痛点在 Issues 侧爆发


## 2. 版本发布

**无新版本发布**。

上一版本信息未在本数据窗口内更新。当前主要变更均通过 PR 合入 main 分支推进，尚未形成正式 release。


## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 状态 | 影响领域 |
|---|---|---|---|
| [#3284](https://github.com/qwibitai/nanoclaw/pull/3284) | container: mid-turn streaming is the single delivery door — cross-segment assembly, DB-backed echo suppression, no result-door sends | ✅ 已合并 | 核心架构 |
| [#3262](https://github.com/qwibitai/nanoclaw/pull/3262) | channels: Chat SDK bridge agent-mode DM surface — app-context capture, DM-thread normalization, dm-opened hook (A8 + C4) | ✅ 已合并 | 多平台适配 |
| [#3263](https://github.com/qwibitai/nanoclaw/pull/3263) | Channel registry: hot-start a registered adapter after boot (A1) | ✅ 已合并 | 通道管理 |
| [#3264](https://github.com/qwibitai/nanoclaw/pull/3264) | Delivery: registerDeliveryBatchPreview hook over each undelivered batch (A2) | ✅ 已合并 | 可扩展性 |
| [#3265](https://github.com/qwibitai/nanoclaw/pull/3265) | Agent-to-agent: CreateAgentOptions.suppressCreatedNotify (A3) | ✅ 已合并 | Agent 管理 |
| [#3266](https://github.com/qwibitai/nanoclaw/pull/3266) | Permissions: registerChannelCardInterceptor seam before registration cards (A4) | ✅ 已合并 | 权限系统 |
| [#3260](https://github.com/qwibitai/nanoclaw/pull/3260) | permissions: 'decline_notify' unknown-sender policy | ✅ 已合并 | 权限策略 |
| [#3261](https://github.com/qwibitai/nanoclaw/pull/3261) | channels: optional adapter capabilities — setTyping/setThreadTitle/setSuggestedPrompts | ✅ 已合并 | 适配器能力 |
| [#3259](https://github.com/qwibitai/nanoclaw/pull/3259) | setup/tooling: skill-apply heading-ordinal strip, headless browser URL surfacing | ✅ 已合并 | 工具链 |
| [#3283](https://github.com/qwibitai/nanoclaw/pull/3283) | Preserve structured chat links | ✅ 已合并 | Bug 修复 |
| [#3278](https://github.com/qwibitai/nanoclaw/pull/3278) | feat(mcp-tools): save Word/PDF documents to agent memory (Story 1.1) | ✅ 已合并 | 新功能 |

### 核心进展解读

**架构层面**：今日最大的变化是 #3284 确立的**流式输出单门架构**——声明 `emitsMidTurnText` 的 Provider，其中间流式输出成为唯一内容出口门，最终结果不再参与内容投递。该改动以"无持久化去重状态"为设计约束，配合 DB 驱动的回声抑制，大幅简化了去重逻辑。这是对投递链路的一次根本性简化。

**功能推进**：合并的 6 个 PR（#3263~#3266、#3260、#3261）构成一组"模块化扩展"系列——通道热启动、批量投递预览钩子、Agent 创建通知抑制、注册卡片拦截器、新权限策略、适配器可选能力。这些改动共同表明项目正在系统性地将核心能力开放为可插拔API，为生态扩展打基础。

**遗留 PR 关闭**：#1251（OpenMail 邮件通道 skill）经约 5 个月后于今日关闭，未合入。


## 4. 社区热点

今日 **Issues 侧无讨论热点**（仅 1 条误报关闭），PR 侧评论数据未暴露，但可依据 PR 性质与规模判断关注焦点：

**焦点一：跨会话上下文管理（[#3257](https://github.com/qwibitai/nanoclaw/pull/3257)，待合并）**

该 PR 引入了跨会话上下文模块，支持多会话 Agent 组中将触发消息与 Agent 回复扇出为"会话回声"上下文行，并附带 DM 回填与 `ncl sessions history` 命令。这是对多会话一致性的系统性补强，也是当前待合并 PR 中影响面最大的一个。

**焦点二：流式投递架构（#3284，已合并）**
作为今日架构核心变更，该 PR 解决了流式输出 Provider 的内容投递一致性问题，将中间流与最终结果统一到单一出口。

**焦点三：会话分离标记（[#3256](https://github.com/qwibitai/nanoclaw/pull/3256)，待合并）+ 投递发送者解析修复（[#3255](https://github.com/qwibitai/nanoclaw/pull/3255)，待合并）**

这两个 PR 共同处理"多适配器实例共享同一平台地址"的边界场景——前者引入 `detached_at` 列拒绝向已分离会话投递，后者修复出站投递时发送者自身通道行的解析。两者配合解决同一类多实例一致性问题的两个侧面。

**焦点四：一批修复 PR 待审查**：包括 Telegram 配对码空格容忍（#3282）、旧会话任务盲区（#3281）、Discord 附件 URL 暂存（#2752）、`ncl groups config update` 可空标量清除（#3280）——这些是外部贡献者提交的实用修复，也是社区触点所在。


## 5. Bug 与稳定性

### 已修复（今日合入）

| 严重度 | 问题 | 修复 PR | 说明 |
|---|---|---|---|
| 🟢 低 | 平台显示文本缩短后 Chat SDK 超链接目标丢失 | [#3283](https://github.com/qwibitai/nanoclaw/pull/3283) | 格式化器追加隐藏去重 URL，纯文本链接行为不变 |
| 🟢 低 | skill-apply 步骤编号取 SKILL.md 标题原文，跨步/多技能运行显示错误序号 | [#3259](https://github.com/qwibitai/nanoclaw/pull/3259) | 剥离标题前导序号 |

### 待修复（已有 PR，待合并）

| 严重度 | 问题 | 修复 PR | 等待时长 |
|---|---|---|---|
| 🟡 中 | 多个适配器实例共享同一平台地址时，出站投递解析到随意的兄弟实例通道行 | [#3255](https://github.com/qwibitai/nanoclaw/pull/3255) | ~2 天 |
| 🟡 中 | Agent 作用域 `ncl tasks` 命令对 pre-2.1.54 遗留会话不可见（thread_id 非 `system://` 前缀） | [#3281](https://github.com/qwibitai/nanoclaw/pull/3281) | ~1 天 |
| 🟢 低 | Telegram 配对码展示带空格，粘贴后 `extractCode` 拒绝 | [#3282](https://github.com/qwibitai/nanoclaw/pull/3282) | ~1 天 |
| 🟢 低 | `ncl groups config update` 无法将可空标量置 NULL，`--model ""` 存入空串而非 NULL | [#3280](https://github.com/qwibitai/nanoclaw/pull/3280) | ~1 天 |
| 🟢 低 | Discord 入站附件只暴露 URL 时不暂存，Agent 只见 `[file: message.txt]` 无字节 | [#2752](https://github.com/qwibitai/nanoclaw/pull/2752) | **~66 天** ⚠️ |

### 回归风险关注（今日新引入）

- **#3284** 将"流式输出作为唯一出口"——对未声明 `emitsMidTurnText` 的 Provider 行为不变，但声明该能力后最终结果不再投递内容，适配器需确保中间流完整覆盖所有内容类型。合入后需要关注兼容性回归。


## 6. 功能请求与路线图信号

### 已落地（今日合并）

- **文档持久化能力**：[#3278](https://github.com/qwibitai/nanoclaw/pull/3278) 新增 `save_document` MCP 工具，持久化 Word/PDF 到 Agent 组内存 —— 来自 "Document Memory + Fill-In Editing" Epic（Story 1.1），标志着文档处理能力正式进入实现阶段

### 待合并（信号明确）

- **跨会话上下文管理**（#3257）：会话回声、DM 回填 + `ncl sessions history` —— 多会话一致性的核心能力
- **会话分离支持**（#3256）：`detached_at` 标记 + 拒绝向分离会话投递 —— 对应真实场景中 bot 被移出会话后的行为定义

### 扩展 API 面（已合入）

今日合并的 #3260、#3261、#3263~#3266 共同勾勒出平台的扩展方向：权限策略可插拔、适配器能力可声明、投递批次可预览、创建通知可抑制、注册流程可拦截。这些信号表明项目正在快速构建**模块化生态接口**，为第三方适配器/工具的接入铺路。


## 7. 用户反馈摘要

今日 Issues 侧无实质性用户反馈（唯一 1 条为误报后关闭）。从 PR 描述中可提炼外部贡献者触达的痛点：

- **Discord 附件不可读**（#2752，已等待 ~66 天）：Discord 自动转换粘贴文本为 `message.txt`，但 Agent 只能看到文件占位符而拿不到字节内容——**这是当前最长时间未获处理的外部修复 PR**，直接阻塞 Discord 渠道的实际可用性
- **多 bot 身份的会话归属混乱**（#3255）：同一房间多个 bot 身份时，投递目标解析可能落到错误的实例——影响多实例部署场景的数据一致性
- **遗留系统升级盲区**（#3281）：从 2.1.54 之前版本升级后，旧会话在 `ncl tasks` 中"隐身"——影响升级用户的既有工作流
- **管理命令小瑕疵**（#3280）：`--model ""` 存入空串而非 NULL，导致运行时拿到空字符串配置

此外 #1251 的关闭值得关注——该 PR 提议添加 `/add-openmail`（OpenMail 邮件通道），经 5 个月等待后最终被关闭，若社区对该功能有真实需求，需重新提交或等待官方支持。


## 8. 待处理积压

### ⚠️ 高优先级关注

| 项目 | 等待时长 | 说明 |
|---|---|---|
| **[#2752](https://github.com/qwibitai/nanoclaw/pull/2752)**: fix: stage inbound attachments that expose only a url (Discord) | **~66 天** | 最长时间未处理的外部 PR——Discord 附件 URL 暂存修复。阻塞 Discord 入站媒体可用性，建议维护者优先审查 |
| **[#1251](https://github.com/qwibitai/nanoclaw/pull/1251)**: skill: add /add-openmail | ~5 个月（今日关闭） | OpenMail 邮件通道 skill，经长期等待后关闭。若仍属路线图，建议显式沟通 |

### 待合并 PR 积压（截至今日）

核心团队 gavrielc 的 5 个 PR（#3254~#3257、#3255）均为架构级改动，涉及上下文管理、会话分离、投递修复、批选两阶段等，建议协调 reviewer 尽快审查，避免分支发散过久。

### 无未响应 Issue

当前无长期无人响应的 Issue 积压。


## 项目健康度总结

| 维度 | 评估 | 说明 |
|---|---|---|
| 迭代速度 | ⭐⭐⭐⭐⭐ | 24h 内 32 条 PR 更新、12 条合并，核心团队输出密集 |
| 社区参与 | ⭐⭐⭐ | 有外部贡献 PR（Telegram/Discord/ncl 修复），但外部 PR 合并等待时间偏长 |
| 架构清晰度 | ⭐⭐⭐⭐⭐ | #3284 确立的流式单门架构显著简化投递链路，设计约束明确 |
| Bug 响应 | ⭐⭐⭐ | 修复类 PR 当日可合入，但存在 #2752 等长期积压 |
| 发布节奏 | ⭐⭐⭐ | 无新版本发布，大量变更停留在 main 分支 |

**给维护者的建议**：
1. 优先处理 #2752（Discord 附件，等待 66 天）——外部贡献者的耐心是有限的
2. 协调审查 gavrielc 的 5 个待合并核心 PR，尽早落地以降低分支发散成本
3. 考虑为 #1251（OpenMail）的关闭给出明确说明或替代方案，避免社区误解为"功能不被接受"

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-17

> 数据来源：github.com/nearai/ironclaw | 统计时段：2026-08-16 ~ 2026-08-17

---

## 1. 今日速览

项目过去24小时活跃度**中等偏上**，主要驱动力来自依赖自动更新（5条PR）和一项针对Slack接入体验的修复。值得关注的是，Issue #7681（Slack未关联用户引导信息公开可见）触发了对应PR #7682的快速响应，体现了项目对用户反馈的敏捷性。当前有7条PR处于待合并状态，合并队列存在一定积压。整体项目健康度良好，无回归或严重Bug报告。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日有 **2 条 PR 被合并/关闭**，另有 **1 条重要 PR** 处于开放状态但直接回应了昨日新增 Issue，值得关注：

- **[PR #7683 — 移除已退役的 IronLoop 网络设置](https://github.com/nearai/ironclaw/pull/7683)【已合并，XS, core】**：从受信任的 IronLoop 仓库配置中删除过时的 `network_access` 字段，保留现有 Implement、Tester、自动 Review 和自动 Resolve 行为。属于配置清理，标志 IronLoop 网络设置正式退役，简化了仓库配置面。

- **[PR #7632 — 依赖批量更新（everything-else 组）](https://github.com/nearai/ironclaw/pull/7632)【已关闭/合并，M, low】**：将 `base64`（至0.23.1）、`toml`（至1.1.4+spec-1.1.0）、`rstest`、`jsonschema` 等4项依赖升级，持续跟进 Rust 生态版本。

- **[PR #7682 — Slack未关联用户提示改为私密发送（对应Issue #7681）](https://github.com/nearai/ironclaw/pull/7682)【开放中，L, low】**：实现了将共享频道中对未关联用户的连接引导消息改为**私密发送**，并提供**一键连接链接**，省去手动多步骤流程。该PR直接针对今日新增的Issue #7681，处于开放状态，预计近期将进入合并队列。

**整体判断**：项目今日在**稳定性维护**（依赖升级、配置清理）与**用户体验修复**（Slack私密引导）两个方向均有推进，其中 Slack 修复的响应速度值得肯定。

---

## 4. 社区热点

今日新增 Issue **#7681** 是社区最热话题（唯一新开 Issue，并触发即时 PR 响应）：

- **[Issue #7681 — Slack未关联用户的连接消息公开可见，且需手动往返操作](https://github.com/nearai/ironclaw/issues/7681)【OPEN，enhancement】**：当未关联 IronClaw 账户的 Slack 用户在共享频道中 @机器人 或发 DM 时，机器人回复的"请先连接账户"提示**整个频道可见**，且后续操作需要手动多步骤完成，上下文断裂（用户反馈"连接链接是什么？"）。该问题同时涉及 **隐私泄露** 与 **引导流程繁琐** 两个痛点，被标记为 UX/Onboarding 相关增强项。

**社区诉求分析**：用户对 Slack 集成中的隐私性和引导流畅度有明确期待——在共享空间中不应暴露个人连接状态，且引导流程应能自动衔接上下文，减少用户认知负担。

---

## 5. Bug 与稳定性

今日无崩溃、回归或严重 Bug 报告。

| 严重程度 | 条目 | 状态 | 修复 PR |
|---------|------|------|---------|
| 中 | [Issue #7681](https://github.com/nearai/ironclaw/issues/7681) — Slack未关联用户提示公开可见，隐私泄露风险 | 待修复 | [PR #7682](https://github.com/nearai/ironclaw/pull/7682) (开放中) |
| — | 无其他 Bug 报告 | — | — |

**稳定性评估**：无新引入的不稳定因素，依赖批量升级均标记为 low risk。

---

## 6. 功能请求与路线图信号

今日无全新功能请求，但 **Issue #7681** 作为 enhancement（标记了 `epic` 和 `scope: channel` / `UX / Onboarding`）释放了以下路线图信号：

- **Slack 集成向私密化、低摩擦方向发展**：PR #7682 实现了私密 nudge + 一键连接链接，体现项目在 Slack UX 上的推进方向。
- **确定性自动化行为**（来自 PR #7651，开放中）：要求 `trigger_create` 提供 `result_delivery` 并由模型从用户措辞中推导，支持"仅在触发/变更/有结果时通知"的显式意图，否则确定性回退到 `deliver`。该 PR 标记为 XL 且来自核心维护者，**极有可能被纳入下一版本**，是面向自动化治理的重要能力。

---

## 7. 用户反馈摘要

- **唯一用户反馈来自 Issue #7681**（由核心维护者 sergeiest 提出）：
  - 在共享频道中，连接提示**对全员可见**，影响了用户隐私体验；
  - 引导流程**缺乏上下文衔接**——用户在一个步骤中被告知"去 web app 连接"，但不知道该点哪个链接，形成"死胡同"体验；
  - 期望的流程是：私密消息 + 一键直达连接页 + 连接后可自动延续上下文。

**满意度判断**：该反馈指向体验短板（非 Bug 类），但在提出当日即获得修复 PR 响应，社区应能感受到项目对反馈的重视程度。

---

## 8. 待处理积压

以下 PR 处于开放状态超过 3 天，建议维护者优先处理：

| 条目 | 创建时间 | 开放时长 | 风险 | 备注 |
|------|---------|---------|------|------|
| [PR #7406 — actions 组依赖升级（4项）](https://github.com/nearai/ironclaw/pull/7406) | 08-09 | 8天 | medium | 涉及 claude-code-action、setup-node、rust-cache、docker/login-action，建议尽快处理以保持 CI 工具链更新 |
| [PR #7020 — tokio-tungstenite 0.29→0.30](https://github.com/nearai/ironclaw/pull/7020) | 08-02 | 15天 | low | 跨 minor 版本升级，可能涉及 API 变更，建议补充变更日志检查 |
| [PR #7262 — wasm 组依赖升级（wit-component / wit-parser）](https://github.com/nearai/ironclaw/pull/7262) | 08-05 | 12天 | low | wasm 工具链升级，建议与 #7020 一并处理 |
| [PR #7651 — 确定性无结果抑制（XL）](https://github.com/nearai/ironclaw/pull/7651) | 08-14 | 3天 | low | 功能增强，影响 automation 行为，建议安排 review |
| [PR #7684 — everything-else 组依赖升级（5项）](https://github.com/nearai/ironclaw/pull/7684) | 08-16 | <1天 | low | 与 #7632 相同组升级，建议合并后快速跟进 |

**维护建议**：依赖类 PR 已积累 4 条（#7406、#7020、#7262、#7684），建议设立固定的依赖合并窗口（如每周一次批量处理），避免积压导致安全/兼容性风险；PR #7651 与 #7682 属于产品功能级变更，建议 prioritize review。

---

*报告结束。总体评价：项目活跃度 ⭐⭐☆（中等偏上），健康度良好，社区反馈响应迅速，合并队列需关注。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-17

## 1. 今日速览

过去24小时项目活跃度处于**中等偏稳**状态：新增/活跃 Issue 7 条、关闭 3 条，PR 更新 17 条（合并/关闭 9 条、待合并 8 条），无新版本发布。值得关注的是，今日合并/关闭的 PR 全部围绕**安全加固**（日志脱敏、IPC 越权防护、URL scheme 白名单）和**体验修复**（重复错误消息去除）展开，表明项目当前阶段将稳定性和安全性置于较高优先级。此外，历史遗留的 10 余条 Issue 和 8 个 PR 处于长期搁置（stale）状态，其中最早的可追溯到 2026 年 4 月中旬，社区反馈的响应时效性仍是值得关注的短板。

---

## 2. 版本发布

**无。** 过去 24 小时无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 9 个 PR 中，有 5 个实质性落地，按板块分列如下：

### 🔒 安全加固（重点推进方向）
| PR | 内容 | 意义 |
|---|---|---|
| [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) | **主进程与 IM 模块敏感日志脱敏** — `api:fetch` IPC 不再落盘完整 URL/headers/body，Bearer token、SSE 内容、authCode 等敏感信息从 electron-log 中移除 | 修复了日志文件泄露用户凭证的严重隐患 |
| [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) | **限制 `store:*` IPC 越权访问** — 为 SQLite KV 读写增加 key 级访问控制，防止渲染层被污染后窃取 `auth_tokens`、`github_copilot_github_token` 等敏感 key | 阻断了一条完整的提权攻击链 |
| [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) | **`shell.openExternal` 增加 scheme 白名单** — 拒绝 `file:`、`javascript:`、`data:`、`cmd:` 等危险 scheme | 防止恶意 markdown/模型输出诱导打开本地文件或触发 OS 级动作 |

### 🛠️ 体验修复
| PR | 内容 |
|---|---|
| [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835) | 去除 `continueSession` 失败时**重复推送两条系统错误消息**的问题，对话流不再出现重复报错 |
| [#1690](https://github.com/netease-youdao/LobsterAI/pull/1690) | IM（钉钉/飞书/QQ）删除实例增加**二次确认弹窗**，防止误删后重新配置的高成本操作 |

> 此外，[#1691](https://github.com/netease-youdao/LobsterAI/pull/1691)（Agent 模板导入/导出）、[#1693](https://github.com/netease-youdao/LobsterAI/pull/1693)（模型设置入口优化 + 草稿保留）、[#1715](https://github.com/netease-youdao/LobsterAI/pull/1715)（OpenClaw 代理请求补全 session_id）、[#1760](https://github.com/netease-youdao/LobsterAI/pull/1760)（Agent 图片头像支持）也在今日被标记关闭（stale），但改动内容已合并至主干。

**整体判断**：项目在安全维度完成了系统性加固，对 Electron 应用常见的三类攻击面（日志泄露、IPC 越权、URL 注入）均做出了有效防御，属于一次有价值的纵深防御升级。

---

## 4. 社区热点

今日最受关注的问题集中在两条：

1. **[#1813](https://github.com/netease-youdao/LobsterAI/issues/1813)（已关闭）— DeepSeek V4 无法使用**（8条评论）  
   **报错**：`LLM request failed: provider rejected the request schema or tool payload.`  
   **诉求**：用户尝试接入 DeepSeek V4 模型失败，疑似工具调用 schema 与 provider 端不兼容。该 Issue 创建于 4 月 24 日，今日被标记关闭（stale），但并未看到对应的修复 PR 关联。结合新 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)（保留斜杠模型 ID 的 provider 前缀，涉及 `deepseek-ai/DeepSeek-V4-Flash`），**社区对 DeepSeek 系列模型的接入支持有明确且持续的需求**。

2. **[#1698](https://github.com/netease-youdao/LobsterAI/issues/1698)（开放）— 与智企帝王蟹存在 gateway 端口冲突**（3条评论）  
   **现象**：启动有道龙虾后安装智企帝王蟹，必现 gateway 鉴权失败、无响应；关闭龙虾后恢复正常。  
   **诉求**：两款应用共存场景下的端口/进程隔离。该 Issue 已存活 4 个月有余，且标记为「必现」，属于跨应用兼容性问题，需要龙虾侧提供端口可配置或动态占用检测机制。

---

## 5. Bug 与稳定性

以下按严重程度排列今日活跃的 Bug 报告：

| 严重度 | Issue | 描述 | 是否有修复 PR |
|---|---|---|---|
| 🔴 高 | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 与智企帝王蟹 gateway 端口冲突，必现 | ❌ 无 |
| 🟠 中 | [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) | 用户上传支持函失败（"Failed to upload"），疑似附件处理缺陷 | ❌ 无 |
| 🟠 中 | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796)（已关闭） | Write/Edit 工具持续执行失败，持续数日，更新应用后依旧 | ⚠️ 已关闭但未见对应修复 PR |
| 🟡 低 | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Windows 11 安装过程中高概率出现图标为白色且无效 | ❌ 无 |
| 🟡 低 | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | 更新后 edit diff 异常失灵 — 用户已定位到 `extractDiffFromToolInput` 函数 bug（仅从顶层查找 `old_str`/`new_str`） | ❌ 无（用户已提供根因分析，建议维护者快速跟进） |

> ⚠️ 特别提醒：[#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) 的用户不仅报告了 bug，还给出了完整的代码级根因分析，属于高质量的社区贡献，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

今日收集到的功能需求如下：

| 需求 | Issue/PR 来源 | 是否可能纳入下一版本 |
|---|---|---|
| **AI 回复朗读功能**（基于 Web Speech API） | [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682)（开放中） | ⭐ 高 — PR 已实现完整功能（含音波动画），零依赖，合并成本低，但已搁置 4 个月 |
| **远程导入技能时 URL 前置校验** | [#1683](https://github.com/netease-youdao/LobsterAI/pull/1683)（开放中） | ⭐ 高 — 小改动高收益，已与后端正则对齐 |
| **Agent 切换时自动清空主页输入框** | [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707)（开放中） | ⭐ 中 — 已定位根因（`draftPrompts['__home__']` 共享 key） |
| **Cowork 初始化骨架屏** | [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769)（开放中） | 🟡 中 — 纯 UI 优化 |
| **Skills/任务历史空状态增强** | [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770)（开放中） | 🟡 低 — 图标 + 副标题优化 |
| **记忆条目「编辑」按钮 i18n 翻译修复** | [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773)（开放中） | 🟡 低 — 单 key 补充 |
| **对话批量删除功能** | [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797)（已关闭） | 🟡 需求明确（👍 1），但未关联 PR |
| **邮箱连接支持 OAuth2/新式身份验证** | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | 🟡 需求真实（Outlook 已禁用应用密码），涉及 IM 模块架构调整，短期难落地 |
| **支持对话中动态调整 temperature** | [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | 🔴 低 — 设计空间有限，可能不符合产品定位 |
| **定时任务通知文案修复** | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | 🟡 低 — UI 文案 bug |

---

## 7. 用户反馈摘要

从今日活跃的 Issues/PRs 评论中提炼以下真实用户声音：

- **「Write/Edit 工具持续不可用成了日常」**（[#1796](https://github.com/netease-youdao/LobsterAI/issues/1796)）：用户反馈工具连续多日执行失败，即使更新应用也无改善，且该 Issue 最终被标记 stale 关闭而未见公开修复说明 — **对修复透明度的不满是潜在风险信号**。

- **「远程导入技能时输入 `111` 直接报错体验差」**（[#1683](https://github.com/netease-youdao/LobsterAI/pull/1683)）：贡献者主动修复了无效 URL 格式无前置校验的问题，反映社区成员对**细节体验的在意**，且原问题确实影响日常使用。

- **「邮件连不上 Outlook，应用密码被禁了」**（[#1745](https://github.com/netease-youdao/LobsterAI/issues/1745)）：真实使用场景中，微软已全面禁用普通应用密码，导致 IM 邮箱连接功能对部分用户完全不可用 — **该问题会随时间推移影响更多用户**。

- **「DeepSeek V4 接入不了，schema 被拒」**（[#1813](https://github.com/netease-youdao/LobsterAI/issues/1813)）：用户对 DeepSeek 新模型的接入有很强的即时需求，且新 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 已在处理模型 ID 含斜杠时的 provider 保留问题 — **说明团队已关注 DeepSeek 兼容性，但修复窗口较长**（Issue 4 月创建、PR 8 月才提出）。

- **「update 过后 diff 失灵，我自己定位到 bug 了」**（[#1783](https://github.com/netease-youdao/LobsterAI/issues/1783)）：用户投入了大量时间做代码级根因分析，展现出很高的社区参与度，但 4 个月未获官方回应 — **建议维护者正面回应致谢并合入修复，以免打击贡献者积极性**。

---

## 8. 待处理积压（长期未响应）

以下问题/PR 已存活超过 3 个月，建议维护者优先排期处理：

### 🔴 高优先级
| 项目 | 存活时长 | 说明 |
|---|---|---|
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) 端口冲突 | 约 4 个月 | 必现问题，影响与智企帝王蟹共存的用户 |
| [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) 附件上传失败 | 约 4 个月 | 用户无法上传支持函，疑似产品缺陷 |
| [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) 朗读功能 PR | 约 4 个月 | 功能完整、零依赖，仅需 review + merge |
| [#1683](https://github.com/netease-youdao/LobsterAI/pull/1683) URL 校验 PR | 约 4 个月 | 小改动高收益 |
| [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) 输入框清空修复 | 约 4 个月 | 已定位根因，等待合入 |
| **安全 PR 批量合入**（[#1831](https://github.com/netease-youdao/LobsterAI/pull/1831)、[#1832](https://github.com/netease-youdao/LobsterAI/pull/1832)、[#1833](https://github.com/netease-youdao/LobsterAI/pull/1833)） | 3.5 个月 | 安全修复不宜长期搁置，建议尽快并入 release |

### 🟡 中优先级
| 项目 | 存活时长 | 说明 |
|---|---|---|
| [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) Write 工具失败 | 约 4 个月 | 用户多次反馈，关闭但无公开修复说明 |
| [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) diff 失灵 | 约 4 个月 | 用户已提供完整根因分析 |
| [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) Win11 图标异常 | 约 4 个月 | 安装流程问题，影响新用户第一印象 |
| [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) Outlook OAuth2 | 约 4 个月 | 影响范围将逐步扩大 |
| [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) i18n 修复 | 约 4 个月 | 一行级修复，不应搁置 |

---

*本日报基于 2026-08-17 的 GitHub 公开数据自动生成。整体建议：项目活跃度健康，安全加固方向值得肯定；但 PR 合入周期普遍超过 3 个月，建议优化 review 流程，优先处理已就绪的小型 PR 和用户已提供根因分析的 Bug，以提升社区信任度和 contributor 留存率。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-17

## 1. 今日速览

Moltis 过去 24 小时保持中高活跃度：共新增/更新 3 个 Issues 和 6 个 PR，其中 5 个 PR 已完成合并或关闭。值得关注的是，今日修复了一个主分支编译错误（#1201）并随之解决了此前积压的 flaky 测试问题（#1193/#1203），主分支健康度有所回升。然而，两个新问题浮出水面：Heartbeat 忽略用户配置的活跃时间窗口（#1205），以及 CI 格式检查因两个文件超过行数上限失败（#1202），均尚未有修复方案。功能开发方面，MiniMax Code 外部 Agent 集成 PR（#1204）处于待合并状态，用户将迎来新的 ACP 代理选项。整体而言，项目处于积极迭代通道中，主分支稳定性正在恢复，但仍有 CI 门禁待清除。

## 3. 项目进展

今日共有 5 个 PR 合并或关闭，推进了多项关键工作：

- **[fix(gateway): thread start_background_tasks into the memory runtime builder](#1201)**（已合并）— 修复了 `moltis-gateway` 在主分支上无法编译的问题。该错误由 #1158 重构引入，`start_background_tasks` 变量在新提取出的 `build_memory_runtime_from_store` 中丢失作用域。此修复是今日多项工作的前置依赖，解除了主分支的编译封锁。

- **[test(gateway): run the push fanout test on a paused clock](#1203)**（已合并）— 彻底解决了源自 #1193 的 flaky 测试问题。该 PR 将 `fanout_is_bounded_and_times_out_a_hung_endpoint` 测试改为在暂停的虚拟时钟上运行，消除了全量测试套件负载下超时断言与真实挂钟之间的竞争条件。此 PR 基于 #1201 之上，两者同步合并。

- **[fix(caldav): honor list_events time ranges](#1147)**（已合并）— 改进了 CalDAV 的 `list_events` 实现，从拉取全部日历资源改为通过 RFC 4791 `calendar-query` REPORT 请求精确应用时间范围，并将 ISO 8601 边界标准化为 UTC，同时请求扩展日历数据以正确处理循环事件。此前时间范围过滤在客户端进行，存在效率与准确性问题。

- **[fix(vault): normalize recovery phrase before hashing](#1186)**（已合并）— 修复了 vault 的恢复短语处理逻辑：此前 KEK 派生已对短语做规范化（去横线、转大写），但哈希计算使用的是原始短语，导致同一短语通过不同格式输入会得到不同的哈希值。现哈希统一使用规范化后的短语。

- **[Add channel activity log visibility settings](#1093)**（已关闭/已合并）— 为频道回复目标增加了按账户、按频道、按用户三级的 `activity_log` 可见性设置，支持 `all`、`errors_only` 和 `off` 三种级别，用户级覆盖优先于频道级与账户默认值。该功能从 6 月初开发至今日合并，历时两个半月。

综合来看，今日的合并动态修复了 1 个编译回归、1 个 flaky 测试、2 个功能正确性问题，并完成了 1 个长周期功能开发，项目在主分支可编译性、测试稳定性与功能完整性三个维度均有所推进。

## 4. 社区热点

今日无讨论特别集中的 Issue 或 PR（各条目评论数为 0 或未记录）。值得关注的新条目是：

- **[#1205 [Bug]: Heartbeat ignores configured active hours and runs continuously](#1205)** — 由 IlyaBizyaev 新提交的 Bug 报告，指出 Heartbeat 机制未遵循用户配置的活跃时间窗口，持续运行。该问题直接关系到用户的资源消耗与隐私控制，属于功能行为与配置不一致的缺陷。

- **[#1204 [PR] feat: add MiniMax Code ACP agent](#1204)** — 这是目前唯一待合并的 PR，由 hetaoBackend 提交，为 Moltis 新增 MiniMax Code 这一 ACP 外部 Agent 支持。用户可通过自动发现或手动 TOML 配置来使用该 Agent。MiniMax Code 目前已有活跃用户群体，该 PR 若合并将直接扩大 Moltis 的工具生态覆盖面。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 中 | [#1205 Heartbeat ignores configured active hours](#1205) | Heartbeat 持续运行，忽略用户配置的活跃时间窗口，可能导致不必要的资源消耗。尚无评论与复现步骤之外的详细信息。 | 未分配，无修复 PR |
| 低 | [#1202 Format CI gate is red on main](#1202) | CI 格式检查失败：`memory-zvec/src/store.rs`（1799 行）与 `gateway/src/methods/services/admin.rs`（1531 行）均超过 1500 行上限。两个文件来自同一提交 9b47001a，CI 门禁当前为红色。 | 未分配，无修复 PR |

另有两项 Bug 已在今日通过合并修复 PR 解决：

- **编译回归（严重）**：`moltis-gateway` 因 `start_background_tasks` 变量丢失而无法编译（#1201，已合并修复）。该问题由 #1158 的重构引入，属于对主分支的直接破坏。
- **Flaky 测试（中）**：`fanout_is_bounded_and_times_out_a_hung_endpoint` 在全量测试套件环境下间歇性失败（#1193，由 #1203 关闭）。根因是超时断言与真实时钟竞争，改为暂停时钟后消除。

## 6. 功能请求与路线图信号

- **MiniMax Code 外部 Agent 集成（[PR #1204](#1204)，待合并）**：该 PR 为 Moltis 新增 `acp-minimax-code` 外部 Agent 类型，并纳入默认可执行文件检测与 Agent 注册表。MiniMax Code 是近期备受关注的编码 Agent 产品，此集成将成为 Moltis 在开发者工具生态中的新入口。PR 已同步更新配置验证与 Agents 设置 UI 夹具，说明准备工作已基本完成。该功能极有可能进入下一版本。

- **频道活动日志可见性设置（[PR #1093，已合并](#1093)）**：虽然今日已合并，但值得关注其产品信号：用户对活动的精细化控制需求正在增加——从仅“可见/不可见”的二元选择发展到按范围（账户/频道/用户）和按粒度（all/errors_only/off）的多维控制。

## 7. 用户反馈摘要

今日各 Issue 均无评论，以下反馈来源于提交者的描述：

- **配置项行为不符合预期**（源自 #1205）：用户明确配置了 Heartbeat 的活跃时间窗口，但观察到 Heartbeat 仍然持续运行，表明代码未读取或未应用该配置。此类“配置被静默忽略”的问题通常最令用户困扰，因为它不报错也不提示。该反馈来自 IlyaBizyaev。

- **测试稳定性对开发效率有直接影响**（源自 #1193 与 #1203 的关联修复）：Lstarsky0 在描述 Flaky 测试时提到“全量套件运行时 2/3 失败”，这类间歇性失败会严重消耗开发者的排查时间。由此衍生出对测试基础设施可靠性的持续关注。

- **恢复短语格式容错需求**（源自 #1186）：pxmpsdev 的修复反映了一个真实用户场景：用户输入恢复短语时可能使用全小写或带横线的格式，KEK 派生阶段已接受这类输入，但存储的哈希不一致导致验证失败。说明用户在初始化与恢复阶段对输入格式的宽容度有实际需求。

## 8. 待处理积压

- **CI 格式门禁红色（[Issue #1202](#1202)）**：`main` 分支的 Format 检查当前为失败状态，是因为两个文件超过 1500 行限制，且来自同一提交（9b47001a）。此问题虽不阻塞功能开发，但会长期保持 CI 红色，掩盖未来其他格式问题。建议尽快拆分或重新格式化对应文件，恢复门禁绿色。

- **Heartbeat 活跃时间配置失效（[Issue #1205](#1205)）**：新报告的 Bug，目前无分配、无评论。该问题与用户的资源控制直接相关，建议维护者尽快回应并确认是否为已知回归或独立缺陷。

- **PR #1204（MiniMax Code Agent）等待审查**：作为当前唯一待合并的 PR，其集成的完整度较高，但尚缺审查意见记录。若项目方希望推进该功能进入下一版本，建议安排 reviewer 及时评审。


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-17

> 数据来源：github.com/agentscope-ai/CoPaw | 生成时间：2026-08-17

---

## 1. 今日速览

CoPaw 项目今日处于**高活跃、快节奏**状态。过去 24 小时内产生 10 条 Issue 更新（6 新开/4 关闭）和 11 条 PR 更新（9 待合并/2 已关闭），虽无新版本释出，但社区驱动的修复与功能开发速度明显加快。值得注意的方面：**多个由首次贡献者提交的高质量修复 PR**（如 CLI cron 更新同步、OAuth2 refresh_token 持久化、视频内联显示等），表明外部开发者对项目的参与度和认可度正在上升；同时，一个 **P0 级崩溃 Bug（#7063）已作为 invalid 关闭**，需要关注其后续处理方式。项目整体处于**功能迭代与社区扩展的良性循环**中。🌟 项目活跃度评级：**高**（10+ Issues / 10+ PRs 日均活动量）

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 较少（仅 2 条），但社区提交的待审查 PR 数量较多（9 条），储备充足。

### 已合并/关闭

| PR | 说明 | 状态 |
|---|---|---|
| [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) / [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) — `fix(cli): sync top-level text on cron update --text for agent jobs` | **同一个 Issue（#7048）的两个竞品修复，均已关闭（但可能未合并，仅为标记关闭）**。修复的是 `qwenpaw cron update <id> --text "<prompt>"` 对 agent 类型任务更新失败但返回成功的问题。两位独立贡献者分别提交修复，值得注意。 | ⚠️ 已关闭 |

### 待合并/审查中（潜力股）

今日有 **9 条 PR 处于 OPEN 状态**，其中多条来自首次贡献者且质量较高：

- [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) — `fix(console): update context-usage ring after compact`，修复 `/compact` 后上下文环不刷新的 UI 显示问题。
- [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) — `feat(pawapp): add native DataPaw app runtime and durable analysis workspace`，一个大型原生分析应用运行时功能（附带截图）。
- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — `feat: unify provider discovery, model metadata, routing, and agent controls`，超长周期 PR（近一个月），涉及核心架构（provider 发现、模型元数据、路由统一），是**里程碑级别**的功能，值得重点 Review。
- [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) — `feat(console): add background chat task list API`（附 Issue #7056，来源：suantea，首次贡献者）
- [#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070) — `fix(agents): promote view_video results on OpenAI Responses API path`（来源：suantea，修复 Issue #7059）
- [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) — `fix(console): render data-URL images in historical messages on session reload`（来源：suantea，修复 Issue #7051）
- [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071) — `fix(agents): make view_video inline cap configurable instead of hardcoded 2 MB`（来源：suantea，修复 Issue #7060）

> 📌 连续提交多条 PR 的首次贡献者 `suantea`，其提交质量与覆盖广度值得关注。建议维护者优先 review 其 PR 合入以激励外部贡献者。

**项目整体推进方向**：CLI 修复、Console/前端体验优化、provider 层架构统一、MCP/OAuth 健壮性增强。

---

## 4. 社区热点

今日最受关注/互动最多的 Issue：

| 排名 | Issue | 互动情况 | 分析 |
|---|---|---|---|
| 🥇 | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) — Agent 执行工具调用时必现崩溃 | 创建于 08-16，更新 08-16，3 条评论 | P0 级必现崩溃，直接导致 `async for` 与 coroutine 的类型错误。虽然已标记 CLOSED，但**未提及关闭原因**（是否已在其他 PR 修复？还是标记 invalid？），需要跟进确认。 |
| 🥈 | [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) — Memory for QwenPaw agents — 97.5% fewer tokens (ViBo) | 创建于 08-13，更新至 08-16，3 条评论 | **广告/推广性 Issue**（推广 ViBo 记忆方案），但获得多轮讨论。折射出用户对**跨会话记忆**和 **Token 成本控制**的普遍诉求，值得项目组考虑是否将记忆能力内置化或提供官方最佳实践。 |
| 🥉 | [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) — cron update --text 返回成功但未更新 | 2 条评论 + 2 个竞品 PR（#7055/#7064） | 社区对同一 Bug 提交两个修复方案，说明该问题对用户操作影响直接且关注度高，但也暴露出**并发协作流程需要引导**（可考虑 Merge 一个、关闭另一个）。 |

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 **P0** | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Agent 执行工具调用时**必现崩溃** (`TypeError: 'async for' requires an object with __aiter__`) | ⚠️ 已关闭，**但关闭原因不明**，风险未疏导。若未合并修复，应重新打开或注明临时规避方案。 |
| 🟠 **P1** | [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065) | 多轮对话后（约 7 轮）**无法查看早前历史记录**，会话窗口只能显示最近 3-4 条 | 🆕 新开，无 PR 关联 |
| 🟡 **P2** | [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | Cron 任务在事件循环长时间空闲后 misfire（APScheduler 不触发） | 🔒 已关闭（内测期 Bug，v2.0.1，可能已在后续版本修复） |
| 🟡 **P2** | [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | 正常运行崩溃，需刷新页面才能重启，频次高发（Windows） | 🆕 新开，信息较少，需补充堆栈日志 |
| 🔵 **P3** | [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) | CLI `cron update --text` 返回成功但 prompt 未更新 | ✅ 已有两个修复 PR（#7055/#7064） |

> ⚠️ 特别关注：P0 级 Issue #7063（工具调用必现崩溃）关闭但未说明原因，**建议维护者确认是否已通过 PR #?? 修复或标记为 invalid**，并在 Release Notes 中说明。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 可能纳入版本推测 |
|---|---|---|
| [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) — [Feature] 插件 API 增加 system_prompt 权限 | 企业场景（插件交互界面希望隐藏/自定义 system prompt） | 与企业版/隐私保护相关，可能进入 v2.2 路线图 |
| [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) — [Feature] 支持 per-agent/per-session reasoning_effort（按 Agent/会话维度配置思考强度） | 不同角色（快速问答 vs 深度研究）需要不同档位 | **高度可能** — 与 PR #6302（统一 provider 路由与 agent 控制）方向一致，可能合并实现 |
| [#7068](https://github.com/agentscope-ai/QwenPaw/issues/7068) — [Feature] File viewer 支持 C# 与 shader 语言高亮 | 游戏开发场景（.cs/.shader/.hlsl） | 低优先级，但实现成本低，可快速迭代 |
| [#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073) — [Feature] Skill 名称去重（工作区自定义 skill 与内置 skill 同名时避免重复加载） | 用户自定义 skill 体验优化 | **很可能** — 这是刚需场景，且实现相对独立 |
| [PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) — 原生 DataPaw app 运行时与持久化分析工作区 | 独立数据分析桌面应用 | **大版本候选**（v3.0?），属于产品形态扩展 |
| [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — 统一 provider 发现、模型元数据与路由 | 架构级重构，能力感知路由 + 回退 | **v2.2 或 v3.0 核心变更**，请维护者优先 Review |

---

## 7. 用户反馈摘要

- **多用户表达了对 CLI 命令返回“假成功”的挫败感**：`cron update --text` 返回 rc=0 但实际未生效，直到用户再次查询才发现异常（Issue #7048）。社区以两个 PR 响应，说明**用户对 CLI 确定性行为的期望较高**。
- **记忆与上下文成本是核心痛点**：用户 `vnbochkarev-netizen` 指出“agents built on it forget everything between sessions, and sending ALL memory to the model on every request costs a fortune”（Issue #7003），侧面反映多轮与跨会话成本优化是落地 Agent 的关键诉求。
- **游戏开发者（Unity/Godot 生态）提出脚本查看器语言支持请求**：Issue #7068 指出只支持 JS/TS/Python 等语言，C# 与 shader 不可读，影响 **genAI 辅助游戏编程**场景的落地体验。
- **多轮对话历史丢失影响“可信 Agent”体验**：Issue #7065 报道约 7 轮后无法回看早期对话，用户需要向上滚动到顶也无法恢复。这直接影响到用户对对话 Agent 的信任感。
- **UI 层“假死不报错”的情况**：Issue #7074 描述“正常运行崩溃，需要刷新页面才能重启，频次高发”，但报错信息未完整给出，需要引导用户补充控制台日志。
- **企业用户对可见性控制提出新需求**：Issue #7052 的“不想在会话界面被用户看到 system_prompt”表明 B 端对**提示词版权/保密**有实际需求，而非可选项。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或存在沟通滞后，需要维护者的关注与定向指引：

| 类别 | 编号 | 说明 | 等待时长 |
|---|---|---|---|
| 🔺 **核心架构 PR（需重点 Review）** | [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — unify provider discovery, model metadata, routing, and agent controls | 近一个月未被合并或关闭，属于重大架构级变更为项目主负责人（`wangfei010313`，非外部贡献者），理应获得项目主理人的反馈 | 27 天 |
| 🆕 **P0 崩溃待确认** | [Issue #7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) — Agent 工具调用必现崩溃 | 已关闭但未注明关闭原因，若非已修复建议 reopen 或评论说明 | 当日发生 |
| 📋 **功能对齐 PR** | [PR #7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) — 背景任务列表 API | 关联 Issue #7056（可能也是同一贡献者提出），但今日尚未有关联 Issue 更新，建议明确（是否要合并、优先级如何） | 1 天 |

---

> **分析师注**：整体来看，CoPaw 项目在 2026-08-17 呈现出**社区热度快速上升、外部贡献质量增高、修复效率高**的健康态势。核心风险集中在 **(1) P0 崩溃（#7063）关闭原因不明** 与 **(2) 核心架构 PR（#6302）积压过久未决策**这两件事上，建议维护团队优先响应。用户对“记忆/上下文成本”和“CLI 确定性”两大方向的反馈，可作为下个版本需求的优先输入。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 ZeroClaw 仓库 2026-08-17 数据生成的项目动态日报。

---

## ZeroClaw 项目动态日报 — 2026-08-17

### 1. 今日速览

ZeroClaw 项目今日保持极高的社区活跃度，**48条 Issue 更新**与 **50条 PR 更新**表明项目正处于密集的开发与讨论周期。当前开发焦点明显偏向架构治理，围绕 RFC 的讨论占据了最热 Issue 的主导地位，显示出社区对项目长期技术方向的深度参与。与此同时，**P1 级别的 Bug 和并行运行时测试（Parallel Runtime Test）的稳定性问题**正在消耗大量维护精力，是当前需要优先解决的健康度风险。尽管今日无新版本发布，但大量待合并的 PR 预示着下一版本可能包含重大功能更新。

### 2. 版本发布

**无。** 过去24小时内无新版本发布。

### 3. 项目进展

今日合并/关闭的 4 个 PR 虽数量不多，但质量较高，主要集中在安全加固和文档澄清上：

- **[PR #9580 (CLOSED)] fix(security): harden built-in HTTP egress on the shared network guard**：这是一个由 `JordanTheJet` 提交的、被标记为 `priority:p1` 和 `risk:high` 的大型 PR。它将内置 HTTP 出站流量边界进行了安全加固，并将网络分类逻辑抽取到 `zeroclaw-infra::net_guard` 模块，为后续插件网络策略（PR #9137）的落地奠定了基础。这是推进 ADR-013 方向的关键一步。
- **[PR #9416 (CLOSED)] docs(tools): document that AllToolsResult.tools is the pre-filter registry**：这是一个小型的文档修复，明确了 `AllToolsResult.tools` 的语义是“预过滤注册表”，消除了与 `unfiltered_tool_arcs` 字段的潜在歧义，有助于减少下游开发者的误用。

此外，今日还有 **46 个 PR 处于待合并状态**，其中包含多个 XL 规模的功能开发（如插件网络策略、config 校验、Gateway 改进等），表明项目功能迭代速度很快，但合并队列也积压了大量工作等待维护者处理。

### 4. 社区热点

今日讨论热度最高的议题全部集中在**架构设计（RFC）**，评论数最多的三个 Issue 均为此类，凸显了社区对技术方向的高度关注和参与热情：

- **[Issue #6808 (讨论中)] RFC: Work Lanes, Board Automation, and Label Cleanup (23 条评论)**：这是一个关于项目治理和开发流程的 RFC，已经迭代了25个修订版本，目前处于“批准/实施中”状态。社区正在就如何优化工作流、自动化看板管理和标签清理进行深入讨论，反映了项目在规模扩大后对效率工具的迫切需求。
- **[Issue #8603 (讨论中)] RFC: ZeroClaw Chat Completions profile (22 条评论)**：该 RFC 提议为 ZeroClaw 增加对 OpenAI Chat Completions 协议的支持。这将是巨大的生态利好，能让 Open WebUI、LobeChat、Aider 等大量现有客户端直接接入 ZeroClaw，核心诉求是**降低接入门槛，拥抱更广泛的开发者生态**。目前状态为 `needs-maintainer-review`，等待维护者决策。
- **[Issue #9488 (讨论中)] RFC: Unified attachment architecture for web chat and channels (17 条评论)**：该提案旨在统一 Web 聊天和各个渠道（如 Telegram）的附件处理架构，解决当前可能的体验分裂问题，提升跨渠道功能的一致性。

**分析**：社区热点从功能讨论转向架构底层设计，说明项目已度过雏形期，社区开始思考更长远、更健壮的扩展性问题。

### 5. Bug 与稳定性

今日 Bug 修复和稳定性报告数量较多，并按严重程度排列如下（均为已接受状态，部分有对应修复 PR 或在积压中）：

**高严重度 (P1)：**

- **[Issue #10013] [Bug]: Edge TTS cancellation test can miss fake child startup under parallel load**：测试不稳定，在 `Parallel Runtime Test` 门禁下间歇性失败，阻塞了 CI 流程。已接受，暂无明确修复 PR。
- **[Issue #9655] [Bug]: approval cards carry no position...**：Telegram 渠道中，来自同一条消息的多个工具调用生成的审批卡片无法区分。这直接阻碍了操作员的工作流程，已接受，暂无明确修复 PR。
- **[Issue #9811] [Bug]: /health reports a channel healthy that has never connected**：健康检查接口报告从未成功连接的渠道为健康状态，会误导运维监控。已接受，暂无明确修复 PR。
- **[Issue #10006] [Task]: endpoint_lock_is_held_through_guard_cleanup flakes...**：另一个在并行测试门禁下的偶发失败项，已标记为 `status:in-progress`，正在处理中。

**中严重度 (P2)：**

- **[Issue #10037] [Bug]: POST /api/cron silently stores invalid session_target as isolated**：API 接口静默接受非法参数，可能造成配置与预期不符的隐患。
- **[Issue #10020] [Bug]: Agentic independent delegates ignore the target thinking policy**：代理委派功能在特定模式下未应用目标智能体的思考配置，行为不符合预期。
- **[Issue #10011] [Task]: avoid runtime-written executable in daemon heartbeat test**：属于测试稳定性优化任务，旨在避免当前测试方法在并行环境下遇到的问题。
- **[Issue #9953] [Bug]: SOP step schema validation rejects a double-encoded output object**：已关闭（CLOSED），说明该 Bug 已得到解决。

**分析**：项目稳定性面临的主要挑战来自新增的 `Parallel Runtime Test` 门禁下的测试竞态问题。虽然已有关注和任务在跟进，但多个 P1 级问题长期未关闭，需要维护团队将稳定性修复的优先级提到更高。

### 6. 功能请求与路线图信号

今日新提出的功能请求和 RFC 为未来版本描绘了清晰的蓝图：

- **[Issue #10025] RFC: zeroclaw swarm — ephemeral agent swarms with a crush-style TUI**：一个新提出的、非常有雄心的功能。这将允许用户通过命令行 TUI 快速、临时地组建多智能体团队来完成单一目标，是向“Agent 编排与协作”方向迈出的重要一步。目前状态为 `needs-maintainer-review`。
- **[Issue #8603] RFC: ZeroClaw Chat Completions profile**：该提议将成为连接更广泛 AI 客户端生态的关键。考虑到生态适配的重要性，**它极有可能被纳入下一版本进行规划**。
- **[Issue #9488] RFC: Unified attachment architecture**：跨渠道体验的一致性是许多项目的终极目标，该 RFC 的通过将消除 Web 端和 IM 渠道间的功能差异，有望在后续版本中落地。

**信号判断**：项目路线图呈现出两条主线：一是**横向扩展生态兼容性**（如支持 OpenAI 协议、统一附件架构），二是**纵向深化 Agent 能力**（如 Swarm 模式）。这两者都可能成为下一个大版本的核心亮点。

### 7. 用户反馈摘要

从今日更新的 Issues 中，可以提炼出以下真实用户痛点和使用场景：

- **生态整合的迫切需求**：在 Issue #8603 中，用户明确指出希望接入 `Open WebUI, LobeChat... Aider, LangChain` 等工具，这表明用户希望 ZeroClaw 能更无缝地融入其现有的 AI 工具链，而不是作为一个孤立的存在。
- **多用户协作场景的困扰**：Issue #9655 中，Telegram 用户在群聊中触发多个工具调用时，无法区分不同的审批卡片。这揭示了真实的多人在线协作场景中，交互设计需要更精细的反馈。同时，PR #9772 也试图解决群聊中会话共享与否的问题，进一步印证了该场景的重要性。
- **安全与可控性的关注**：Issue #9621（产品遥测）表明用户和开发者都希望项目的决策能基于真实数据，但同时也强调了需要“opt-in”和“operator-reviewed”，显示出对数据隐私和透明度的强烈诉求。
- **对系统可观测性的不满**：Issue #9811（`/health` 报告假健康）直接打击了运维人员对系统的信任，这种问题是影响用户信心的关键因素。

### 8. 待处理积压

以下 Issue 或 PR 存在较长时间未得到维护者响应或决策，建议重点关注：

- **[PR #9126] feat(plugins): validate typed instance config**：一个 XL 规模的 PR，已标记 `needs-author-action`，但创建近一个月仍未合并，可能阻塞依赖它的其他插件相关工作。
- **[PR #9002] fix(gateway): keep agent turns alive after viewer disconnect**：一个 P1 级的修复，能改善 Web 端用户体验，创建时间较长，需要维护者尽快推动评审。
- **[Issue #6165] RFC: Prefer a lighter ZeroClaw core through external integrations**：这是一个讨论度很高的 RFC，其决策将直接影响项目核心的边界和架构走向，目前仍是 `needs-maintainer-review`。
- **[PR #9582] feat(plugins): enforce a host-owned egress policy on plugin wasi:http**：与已合并的 PR #9580 同属一个系列，且明确说明“不可分离”。该 PR 处于待合并状态，建议维护者按计划推进，以保证安全策略的完整落地。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*