# OpenClaw 生态日报 2026-08-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-21 01:22 UTC

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

# OpenClaw 开源项目动态日报

**日期：2026-08-21** | **数据周期：2026-08-20 ~ 2026-08-21**

---

## 1. 今日速览

过去24小时，OpenClaw 项目呈现**极高活跃度**，共产生 500 条 Issue 更新和 500 条 PR 更新。Issue 侧新开/活跃 467 条，关闭 33 条；PR 侧待合并 361 条，已合并/关闭 139 条。虽无新版本发布，但**大量问题集中在 P0/P1 级消息丢失、数据损坏和会话状态异常**，维持较高的修复紧迫性。值得关注的是，`clawsweeper` 自动化标记在待合并 PR 和未修复 Issue 上堆积，大量关键问题处于 `needs-maintainer-review` 状态，维护者审阅压力较大。新提交的 PR 集中在 HTTP API 会话管理、工具策略执行和 UI 稳定性方面，整体项目处于**高强度迭代 + 积压消化并行**的状态。

---

## 2. 版本发布

**无新版本发布。**

当前验证中的版本为 `v2026.8.1-beta.2`，正处于发布验证阶段（见 Issue #125626）。

---

## 3. 项目进展

今日**无明确合并记录**（PR 合并/关闭合计 139 条，但热门列表中无 merged 标记），但以下 PR 处于关键推进阶段，值得关注：

### 已关闭（合入候选）
| PR | 说明 |
|---|---|
| [#126922](https://github.com/openclaw/openclaw/pull/126922) `fix(channels): preserve delivery after preview cleanup` | 修复 Discord/Slack/Mattermost 临时流式预览删除失败导致已送达消息被误报失败的问题 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) `feat(ui): review install policy warnings` | Control UI 支持管理员审阅并确认安装策略警告（安全边界功能） |
| [#109938](https://github.com/openclaw/openclaw/pull/109938) `fix(setup): preserve chat handoff during inference repair` | 修复 `openclaw setup` 交互流程在推理验证失败时错误跳转的问题 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) `fix(models): keep Claude CLI OAuth available in Control UI` | 修复 Gateway 重启后 Claude CLI OAuth 刷新所有权丢失的问题 |

### 待审阅/待作者更新（高优先级）
- [#126424](https://github.com/openclaw/openclaw/pull/126424) `fix(gateway): keep conversation delivery within agent bindings` — 多代理绑定下会话投递越界修复（P1，涉及多个 channel，兼容性风险高）
- [#126925](https://github.com/openclaw/openclaw/pull/126925) `fix: speech-only supplements silently complete agent replies` — 语音补充被误判为最终回复的问题（P1）
- [#125822](https://github.com/openclaw/openclaw/pull/125822) `fix(ui): keep model controls stable during session startup` — 会话启动期间模型控制台不稳定修复（P1）

**总体判断**：项目在**消息投递可靠性**、**会话状态一致性**和**安全边界**三个方向上持续加固。HTTP API 相关的三个 PR（#126619、#126616、#126611）集中解决了 `/v1/chat/completions` 的系统提示开销、会话绑定和截断问题，说明**外部 SDK 集成体验**正在成为重点优化方向。

---

## 4. 社区热点

### 讨论热度最高
| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) `Per-agent cost budget enforcement at the gateway level`（23 评论） | 🔥🔥🔥 | 运营者希望在网关层设置每个 agent 的日/月费用上限，防止失控支出 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) `centralized filename encoding utility`（20 评论） | 🔥🔥🔥 | 飞书中文文件名 UTF-8/Latin-1 乱码问题的架构级修复方案，需支持多编码（Shift-JIS/EUC-KR/GB18030） |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) `Release validation: v2026.8.1-beta.2`（17 评论） | 🔥🔥 | 发布验证跟踪，多个测试者协作 |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) `Gateway fails to start after update to 2026.7.1`（14 评论，👍3） | 🔥🔥 | 升级后 gateway 无法启动的回归问题，影响 systemd 和手动启动 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) `"Cannot convert undefined or null to object" with google-vertex`（14 评论） | 🔥🔥 | 2026.3.2 版本 Google Vertex 模型回归 |

### 值得关注的现象
- **平台可靠性成为社区最焦虑的议题**：多条高赞 Issue 集中在 `silently dropped`（静默丢弃）、`crash-loop`（崩溃循环）和 `data-loss`（数据丢失）类别，用户对"消息被无声丢弃"的容忍度极低。
- **AI 辅助维护者（clawsweeper）积压明显**：大量 Issue 被标记 `clawsweeper:no-new-fix-pr`、`needs-maintainer-review`、`needs-product-decision`，说明自动化三连已无法推动问题闭环，需要人工介入。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 级（严重）
| Issue | 描述 | 修复状态 |
|---|---|---|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway 升级 2026.7.1 后无法启动（systemd/ollama/手动均失败，crash-loop） | ❌ 待处理 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于发布版本（文档功能在代码中不存在，P0） | ❌ 待处理 |
| [#119270](https://github.com/openclaw/openclaw/issues/119270) | 文件工具会剥离目标路径开头的 `@`，导致**静默写入/删除错误文件**（数据丢失） | ❌ 有 linked PR 待合入 |

### 🟠 P1 级（高）
| Issue | 描述 | 修复状态 |
|---|---|---|
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash 产生不完整回复（payloads=0，消息丢失） | ❌ 待处理 |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel 更新失败：`EUNSUPPORTEDPROTOCOL`（npm/pnpm 不匹配） | ❌ 有 linked PR 待合入 |
| [#125431](https://github.com/openclaw/openclaw/issues/125431) | Codex 受限工具策略**静默禁用工作区 AGENTS.md**（安全+功能） | ❌ 待产品决策 |
| [#123273](https://github.com/openclaw/openclaw/issues/123273) | 命名 agent 图片附件失败（"failed to hydrate structured image attachment"） | ❌ 待处理 |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker gateway 容器无限重启（OPENCLAW_SANDBOX=1 时） | ❌ 待处理 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 可靠投递卡在 `send_attempt_started`，重启后消息丢失 | ❌ 待处理 |
| [#92241](https://github.com/openclaw/openclaw/issues/92241) | 回滚后 gateway 持有旧模块路径，入站消息**静默丢弃**（ERR_MODULE_NOT_FOUND） | ❌ 待处理 |
| [#124284](https://github.com/openclaw/openclaw/issues/124284) | v2026.8.1-beta.2 引入的 stream wrapper 与 vLLM 不兼容，子代理 spawn 失败 | ❌ 待处理 |

### 🟡 P2 级（中）
| Issue | 描述 | 修复状态 |
|---|---|---|
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | 记忆管理行为不一致（3 人团队各自表现不同） | ❌ 待产品决策 |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows vitest teardown EBUSY 文件锁错误 | ❌ 有 linked PR 待合入 |
| [#50490](https://github.com/openclaw/openclaw/issues/50490) | 飞书群聊激活模式切换无效（始终响应所有消息） | ❌ 待处理 |
| [#74378](https://github.com/openclaw/openclaw/issues/74378) | Windows 下 CLI 命令残留 node.exe 进程 | ❌ 待处理 |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite 快照恢复缺少崩溃一致性保障（数据丢失风险） | ❌ 待处理 |

### 关键规律
- **静默失败是最大隐患**：至少 5 个 P0/P1 问题涉及"消息/文件被静默丢弃或破坏"，用户无法感知错误发生，直到数据丢失。
- **Windows 平台稳定性持续承压**：多个文件锁、进程残留问题集中在 Windows 环境。
- **beta.2 引入新回归**：#124284 表明 `wrapStreamFnWithProviderPromptState` 可能是一个新的不稳定因子。

---

## 6. 功能请求与路线图信号

### 可能被纳入下一版本的高价值功能

| 功能 | 来源 | 关联 PR | 预判 |
|---|---|---|---|
| **低成本/轻量上下文模式**：HTTP `/v1/chat/completions` 10-15s TTFB（[#68920](https://github.com/openclaw/openclaw/issues/68920)） | 实时语音场景（LiveKit/Twilio） | [#126619](https://github.com/openclaw/openclaw/pull/126619) 已提交 PR | ✅ 高概率 |
| **Provider 按失败类型隔离**：认证失败的 provider 自动隔离而非重复重试（[#47910](https://github.com/openclaw/openclaw/issues/47910)） | 运营商降本增效 | 无 PR | ⚠️ 需产品决策 |
| **每 Agent 费用预算**：网关级日/月费用上限（[#42475](https://github.com/openclaw/openclaw/issues/42475)） | 企业级运营需求 | 无 PR | ⚠️ 需求明确，待排期 |
| **会话启动消息可配置**：`session.resetPrompt` 自定义重置消息（[#45501](https://github.com/openclaw/openclaw/issues/45501)） | 开发者体验优化 | 无 PR | ⚠️ 轻量改动 |
| **`/new` 和 `/reset` 二次确认**（[#45564](https://github.com/openclaw/openclaw/issues/45564)） | 防止误操作丢失会话 | 无 PR | ⚠️ 简单方案，或社区 PR |

### 路线图信号
- **外部 SDK/HTTP API 集成是当前主线**：3 个同日提交的 HTTP chat 修复 PR（#126619/#126616/#126611）+ 10-15s TTFB Issue + `raycast-moltbot` 客户端联动，指向团队正在系统性地优化第三方客户端接入体验。
- **安全边界强化**：Codex 工具策略（#125431）、终端工具遵循 exec 策略（[#125118](https://github.com/openclaw/openclaw/pull/125118)）、安装策略警告确认（#120900）三条线同步推进，安全是持续投入方向。

---

## 7. 用户反馈摘要

### 高频痛点
- **静默失败零容忍**：多位用户强调"消息被无声丢弃"比崩溃更令人崩溃——"The process appears healthy (systemd reports active/running) but messages are being silently dropped"（#92241）；"visible inbound message accepted and then silently discarded"（#112259）。
- **升级恐惧症**：每次升级都有回归风险——"worked before, now fails"出现了 7+ 次，用户对版本升级的信任成本在累积。
- **记忆/上下文管理混乱**：`Memory management is in chaos`（#43747）反映多用户部署场景下记忆行为不一致的问题，直接影响协作体验。
- **长对话稳定性**：DeepSeek V4 不完整回复、火山引擎长对话缺参数、上下文过大静默失败（#58957）共同指向**长会话可靠性**是核心痛点。

### 积极评价
- 社区对功能需求的响应速度认可度较高：多个功能请求（如 provider fallback 分类、费用预算）在短时间内获得了大量点赞和讨论，说明用户期待值高。
- 自动化归档（clawsweeper）虽然积压，但用户对问题追踪透明度（标签体系）整体接受。

---

## 8. 待处理积压

### 长期未响应/卡住的重要 Issue

| Issue | 最后活跃 | 卡住原因 |
|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) `Cannot convert undefined or null to object`（google-vertex/gemini-3.1） | 2026-08-20 | 创建于 3 月，P1，待 maintainer review |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) `XDG_CONFIG_HOME 未展开`（skill 安装） | 2026-08-20 | 5 个月前创建，P3，待产品决策 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) `Live Docs are ahead of release`（P0） | 2026-08-20 | 5 个月前创建，P0 但始终未修复 |
| [#14747](https://github.com/openclaw/openclaw/issues/14747) `configurable lane wait diagnostic threshold` | 2026-08-20 | 6 个月前创建，P2，待 maintainer review |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) `v2026.8.1-beta.2 release validation` | 2026-08-20 | 发布验证流程进行中 |

### 待合并的长期 PR
- [**#89040**](https://github.com/openclaw/openclaw/pull/89040) `perf: harden embedded bootstrap-context event loop` — 创建于 6 月 1 日，2.5 个月未合入，标记 `proof: sufficient`、`ready for maintainer look`，但一直未被处理。
- [**#122846**](https://github.com/openclaw/openclaw/pull/122846) `agent-core: add per-response tool-call block cap` — 覆盖面极广（50+ extensions），P2，`needs proof`，可能因波及面太大而延迟。

### 维护者提示
`clawsweeper` 自动化标记大量堆积在 `needs-maintainer-review` 和 `needs-product-decision`，建议维护者优先处理以下类别：(1) P0/P1 + `source-repro` 可复现问题；(2) 有 linked PR 但尚未合入的闭环；(3) 创建超过 3 个月仍未分流的老 Issue。

---

**报告结束。** 数据来源：OpenClaw GitHub 仓库 Issues/PRs 元数据。

*生成时间：2026-08-21 | 周期：24h | 分析视角：项目健康度、社区热点、积压风险*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**分析日期：2026-08-21**
**覆盖项目：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw**


## 1. 生态全景

当前个人 AI 助手开源生态呈现 **"一超多强、安全与稳定性军备竞赛加剧"** 的格局。以 OpenClaw 为绝对核心（单日 500+ Issue/PR 更新），其余项目在各自细分方向深耕。社区最焦虑的议题高度一致：**消息/数据静默丢失、Windows 兼容性、长会话可靠性**——这三大问题在 OpenClaw、Hermes Agent、CoPaw、NanoClaw 中均被列为 P0/P1 级缺陷。与此同时，安全加固（ZeroClaw 的插件 egress 策略、Moltis 的 CWE-306 修复、IronClaw 的沙箱持久化）正在成为继功能迭代之后的新竞争焦点。生态整体处于**高强度迭代与质量巩固并行**的阶段，没有新进入者，头部效应持续强化。


## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本 | 健康度评估 | 阶段定性 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（467 活跃/33 关闭） | 500（361 待合并/139 合并关闭） | ❌（beta.2 验证中） | ⚠️ 高活跃但积压严重，P0/P1 问题堆积 | 高强度迭代 + 积压消化 |
| **Hermes Agent** | 50（43 活跃/7 关闭） | 50（48 待合并/2 合并关闭） | ❌ | ⚠️ 提交密集、合并暂缓，Windows 安装链路问题集中 | 快速修复期 |
| **CoPaw** | 28 | 50（22 待合并/28 合并关闭） | ✅ v2.1.1-beta.1 | 🟢 良好，Bug 均有 PR 跟进 | 功能迭代 + 稳定性修复并行 |
| **ZeroClaw** | 50（45 活跃/5 关闭） | 50（48 待合并/2 合并关闭） | ❌ | ⚠️ 待合并积压严重（48/50），安全 PR 滞留 | 安全架构布局期 |
| **NanoClaw** | — | 50（35 待合并/15 合并关闭） | ❌ | 🟢 良好，Bug 均有 PR 跟进 | 快速迭代期 |
| **IronClaw** | 高 | 高（多 PR 合并） | ❌（v1.4.0 聚合期） | 🟢 良好，三线并行（修复+功能+债务清理） | 版本聚合期 |
| **NanoBot** | 5（3 活跃/2 关闭） | 29（17 待合并/12 合并关闭） | ❌ | 🟢 健康，响应迅速 | 稳定迭代期 |
| **Moltis** | 1（0 活跃/1 关闭） | 8（4 待合并/4 合并关闭） | ✅ 20260820.01 | 🟢 健康，安全闭环迅速（21 天） | 安全加固 + 多通道优化 |
| **LobsterAI** | 2（2 活跃/0 关闭） | 7（1 待合并/6 合并关闭） | ❌ | 🟢 稳定，历史 PR 集中清理 | 功能收尾期 |
| **PicoClaw** | 3（3 活跃/0 关闭） | 9（5 待合并/4 合并关闭） | ❌ | 🟡 中等，3 个框架级 PR 落地 | 基座能力补强期 |
| **NullClaw** | — | — | — | ⚪ 无活动 | 停滞 |
| **TinyClaw** | — | — | — | ⚪ 无活动 | 停滞 |
| **ZeptoClaw** | — | — | — | ⚪ 无活动 | 停滞 |

**数据说明**：OpenClaw 的 Issue/PR 数据体量远超其他项目，部分原因是其自动化标记（clawsweeper）导致的活跃计数膨胀；但即便如此，其去重后的问题密度仍为生态最高。


## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 对比结论 |
|---|---|---|
| **社区规模** | 单日 500 Issue + 500 PR 更新，讨论帖高赞评论 23+ | **绝对领先**，是第二名（Hermes/ZeroClaw 的 50 条）的 10 倍 |
| **消息投递可靠性** | 持续加固：Discord/Slack/Mattermost 修复（#126922）、多代理绑定投递越界修复（#126424） | 已投入大量资源，但仍为 P0 问题集中区 |
| **安全边界** | 安装策略警告确认（#120900）、Codex 工具策略（#125431） | 在安全方向有投入，但不及 ZeroClaw 的插件安全架构深入 |
| **HTTP API/SDK 集成** | 3 个同日提交的 `/v1/chat/completions` 修复 PR，10-15s TTFB 优化 | **生态内最重视外部集成体验的项目**，与 NanoBot 的 Provider 生态扩张形成呼应 |
| **技术路线差异** | 网关（Gateway）+ 通道（Channels）+ 代理（Agent）三层架构，覆盖多 IM 平台 | 是唯一在"消息投递 + 会话状态一致性"上做系统性加固的项目 |
| **发布节奏** | 频繁 beta，当前 v2026.8.1-beta.2 验证中 | 迭代密度高，但回归风险也高（beta.2 引入 vLLM 不兼容 #124284） |
| **积压治理** | clawsweeper 自动化标记堆积，大量 `needs-maintainer-review` | **维护者审阅压力是生态内最大瓶颈**，自动化三连已无法推动闭环 |

**总结**：OpenClaw 是生态的"基础设施级"项目——覆盖最广的 IM 通道、最大的社区、最完整的 Agent 框架。但正因规模庞大，其**积压问题（361 条待合并 PR）与静默失败类 Bug（至少 5 个 P0/P1）成为其最大软肋**。相比之下，IronClaw 在架构整洁度（文档合并减少 9,713 行）、ZeroClaw 在安全前瞻性上各有建树，但短期内无项目可撼动 OpenClaw 的生态位。


## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息/数据静默丢失** | OpenClaw（#119270 文件工具 `@` 剥离、#92241 回滚后静默丢弃）、Hermes Agent（state.db 8 天损坏 3 次 #89293）、CoPaw（history.db 膨胀至 7.6G #7168）、NanoClaw（#2606 always 模式静默丢弃） | 用户对"无声失败"的容忍度几乎为零，"宁愿崩溃也不要静默"成为社区共识 |
| **Windows 平台稳定性** | OpenClaw（vitest EBUSY #119796、CLI 残留 node.exe #74378）、Hermes Agent（桌面应用更新失败 #90829、ConstrainedLanguage 安装失败 #89857、ZIP 回退死循环 #83846）、ZeroClaw（TaskDialogIndirect 启动失败 #10111、自更新无测试覆盖 #7910）、Moltis（PR #468 已开放 151 天 | Windows 上是最大用户群体，但其安装/更新/运行链路稳定性最差，多项目均被此类问题困扰 |
| **成本控制与配额管理** | OpenClaw（#42475 每 agent 费用上限，23 评论）、IronClaw（#7732 持久化沙箱的资源管理）、NanoClaw（#3270 ncl token usage） | Agent 被重度使用后，"失控支出"成为企业/个人运营者的核心焦虑 |
| **长会话/流式可靠性** | OpenClaw（DeepSeek 不完整回复 #88657）、NanoBot（#5454 流式中断不重试）、CoPaw（#6921 多步任务中断、#7162 流式 ReadError 不重试）、Hermes Agent（#75801 finish_reason 缺失导致虚假断流） | 流式输出的**部分成功状态恢复**是共性难题，多项目均在尝试补上"断点续传"能力 |
| **LLM Provider 兼容性/扩展** | NanoBot（SenseNova #5453、Google Vertex #5459）、PicoClaw（#1158 Anthropic 原生协议）、CoPaw（Qwen_Code 作为后端 #7181）、OpenClaw（google-vertex 回归 #38327） | 单一 Anthropic/OpenAI 直连已不能满足需求，生态正在向多厂商兼容快速演进 |
| **音频/多模态支持** | PicoClaw（#3331 转录模型白名单放宽）、ZeroClaw（#8780 Gemini Live 语音通道 RFC）、CoPaw（#7060 video inline-media cap） | 语音交互正从 "实验功能" 走向 "核心场景"，但模型选择的灵活性仍是瓶颈 |
| **Agent 自主性与安全边界平衡** | ZeroClaw（#7155 高风险 shell 命令确认层级，23 评论）、OpenClaw（#125431 Codex 策略静默禁用 AGENTS.md）、CoPaw（#6921 多步任务无提示停止） | 用户期望 Agent "更自主地推进任务"，但同时对失控风险高度警惕——这构成 2026 年下半年最核心的产品张力 |


## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 | 典型场景 |
|---|---|---|---|---|
| **OpenClaw** | 通用型 Agent 网关/框架（生态标杆） | 开发者、企业运营者、多平台 IM 用户 | 网关 + 多通道（Discord/Slack/飞书/Telegram）+ 代理绑定，支持 HTTP API | 多 IM 平台统一接入、团队协作、SDK 集成 |
| **Hermes Agent** | 桌面优先的 Agent 客户端 | 个人桌面用户、Windows 重度用户 | 桌面应用 + Gateway + Kanban 任务管理，强调 state.db 可靠性 | 本地任务执行、桌面自动化、多代理 Kanban 协作 |
| **CoPaw** | 中文场景优化的 Agent 助手 | 中文用户、本地模型爱好者 | 深度集成 Qwen 系列模型，Console 界面，强调中文文件名支持 | 中文写作、本地模型驱动、任务产出物管理 |
| **ZeroClaw** | 安全为先的可编程 Agent 平台 | 安全敏感型企业、插件开发者 | WASM 插件系统 + egress/SSRF 策略门禁，Rust 实现 | 插件生态、企业级安全合规、自定义策略 |
| **IronClaw** | 企业级 Agent 基础设施 | 企业架构师、平台团队 | 大型 Epic 拆分（持久化沙箱、生命周期 Hook），WebUI 设计系统 | 多租户部署、复杂沙箱场景、可编程 Hook |
| **NanoBot** | 轻量级多 Provider 助手 | 个人开发者、多厂商模型用户 | Python 实现，MCP SDK v2 迁移中，强调 Provider 生态扩张 | 快速接入多家 LLM、渠道调度（Telegram/WhatsApp 等） |
| **NanoClaw** | 社区驱动的 Agent 框架 | 活跃社区贡献者、Slack 用户 | 高度模块化 skill 系统（add-* 系列），核心团队带头审计 | Slack 集成、skill 市场、社区协作开发 |
| **PicoClaw** | 嵌入式/轻量级 Agent | 嵌入式开发者、IoT 场景 | Go 实现，强调多智能体协作框架（Blackboard + Handoff） | 资源受限设备、协议兼容（Anthropic 原生） |
| **LobsterAI** | Agent 桌面应用 | 网易生态用户、中文桌面用户 | 基于 OpenClaw 引擎（build-openclaw-runtime.sh），专注 UI 体验 | 写作/文档生成、定时任务调度、引擎管理 |
| **Moltis** | 多通道消息代理 | 中小团队、WhatsApp 用户 | 通道适配器（WhatsApp/Telegram/Matrix）+ 安全加固优先 | 群聊机器人、消息路由、Vault 安全 |

**格局判断**：OpenClaw 和 CoPaw 分别代表"通用性"与"中文场景深度优化"的两极；ZeroClaw 与 IronClaw 在"安全"与"企业级"方向各有侧重；其余项目在规模上尚不足以构成直接竞争，更多是生态互补关系。


## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 |
|---|---|---|
| **T1：生态核心（极速迭代）** | OpenClaw | 单日 500+ Issue/PR，但积压同步膨胀；自动化标记（clawsweeper）大量堆积，维护者成为瓶颈 |
| **T2：快速迭代（功能活跃）** | Hermes Agent、CoPaw、NanoClaw、ZeroClaw | 日更新 20-50 条，Bug 响应速度在 24h-48h 内，社区讨论质量高（用户主动提交根因分析） |
| **T3：稳定迭代（质量巩固）** | IronClaw、NanoBot、Moltis、LobsterAI、PicoClaw | 日更新 5-10 条，版本节奏平稳，安全闭环快（Moltis 21 天修复 CWE-306），历史债务清理中 |
| **T4：停滞（无活动）** | NullClaw、TinyClaw、ZeptoClaw | 24h 无活动，或已进入维护休眠 |

**阶段判断**：
- **快速迭代期**：OpenClaw、Hermes Agent、CoPaw、NanoClaw —— 新功能与 Bug 修复密集，用户期望高，风险是回归引入。
- **质量巩固期**：IronClaw（v1.4.0 聚合前扫清障碍）、Moltis（安全加固收口）、LobsterAI（历史 PR 清理）—— 重心从"加功能"转向"修稳定、减债务"。
- **架构转折期**：ZeroClaw（安全架构布局）、PicoClaw（多智能体框架刚落地，生态待丰富）—— 方向已定，但生态验证尚未完成。


## 7. 值得关注的趋势信号

### 趋势一：**"静默失败"成为用户信任的第一杀手**
OpenClaw（至少 5 个 P0/P1 涉及静默丢弃/破坏）、Hermes Agent（state.db 损坏）、CoPaw（会话挂死）、NanoClaw（always 模式静默丢弃）——用户对"看起来正常但数据没了"的容忍度趋近于零。**AI 智能体开发者应将"可观测性"（即使用户不主动要求）视为核心工程质量**，主动暴露错误路径，而非吞掉异常。

### 趋势二：**成本控制从"可选"走向"刚需"**
OpenClaw 的 #42475（每 agent 费用上限）获 23 条高赞评论、NanoClaw 的 ncl token usage（#3270）5 天即活跃、IronClaw 的沙箱资源管理（#7732）——Agent 在被真实工作负载使用后，"失控支出"正在倒逼成本治理能力成为产品标配。

### 趋势三：**长会话/流式断点恢复是下一阶段的技术高地**
NanoBot #5454、CoPaw #7162、Hermes Agent #75801、OpenClaw #88657 共同指向同一痛点：流式输出的"部分成功状态"恢复。**谁先解决"断点续传 + 状态一致性"，谁就能在重度 Agent 任务场景建立口碑**。这对所有开发者的启示是：不要假设 LLM 流式输出是可靠的，设计时要预设中断。

### 趋势四：**安全与自主性的张力决定产品天花板**
ZeroClaw 的 shell 命令确认层级（#7155，23 评论）与 OpenClaw 的 Codex 策略（#125431）形成对照：前者主张"逐条确认"，后者在"静默禁用"上引发争议。CoPaw #6921（"规划完就停了"）与 ZeroClaw #7155（"失控的 shell 命令太可怕"）则代表用户对自主性的两种极端期待。**中间态（策略分层、按风险等级自适应确认）可能是最优解**。

### 趋势五：**Provider 生态扩张成为多项目共同主线**
NanoBot（SenseNova、Google Vertex）、PicoClaw（Anthropic 原生协议）、CoPaw（Qwen_Code 后端）、OpenClaw（google-vertex 修复）——单一模型绑定正在松动，**"模型无关的 Agent 框架"** 是各个项目的共同愿景。对开发者而言，抽象层设计应从一开始就假设"模型会切换"。

### 趋势六：**Windows 平台体验是尚未被征服的蓝海**
Hermes Agent（5+ 个 Windows 安装/更新 Issue）、OpenClaw（Windows vitest EBUSY、node.exe 残留）、ZeroClaw（TaskDialogIndirect 启动失败）、Moltis（PR #468 悬置 151 天）——**Windows 用户基数庞大但质量投入普遍不足**。能在 2026 年下半年系统性解决 Windows 安装/更新/运行链路稳定性的项目，将获得显著的差异化优势。

### 趋势七：**自动化维护工具的边界开始显现**
OpenClaw 的 clawsweeper 自动化标记大量堆积，Hermes Agent 的自动探针持续报告同一问题（#66616，66 条评论）——**AI 辅助维护工具能提效，但无法替代人工决策**。社区的疲劳感已经出现，维护者需要重新评估"自动标记 + 人工裁决"的工作流效率。


**结语**：2026 年下半年的生态竞争焦点从"谁能做更多功能"转向"谁能保证数据不丢、成本可控、安全不破"。OpenClaw 虽占据生态核心，但积压问题若持续恶化，可能为 IronClaw（企业级）、ZeroClaw（安全级）等差异化竞争者留出缝隙。对于技术决策者，选择哪个项目作为基座，应优先评估其在**消息可靠性、Windows 兼容性、成本治理**三个维度上的真实表现，而非单纯的功能列表。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-08-21** | **数据窗口：2026-08-20 至 2026-08-21**


## 1. 今日速览

NanoBot 项目在过去 24 小时内保持**高度活跃**，核心开发与社区反馈双线并行。共产生 5 条 Issue 更新（3 条开放，2 条关闭）和 29 条 PR 更新（17 条待合并，12 条已合并/关闭），无新版本发布。值得关注的是，今日 PR 密集出现了一批针对**流式错误重试**（#5455）、**渠道调度器异常边界**（#5457）的修复，以及**新 Provider 接入**（SenseNova #5453、Google Vertex AI 请求 #5459），表明项目正在同时推进稳定性加固与生态扩展。社区侧，Docker 下 OpenAI OAuth 登录问题（#5444）引发讨论，另有 2 个较老 PR 被重新激活，整体项目健康度良好。


## 2. 版本发布

无新版本发布。


## 3. 项目进展

今日共有 **12 条 PR 被合并或关闭**，以下为关键变更：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#5452](https://github.com/HKUDS/nanobot/pull/5452) | `feat(tui): print resume command on exit` | 已合并 | TUI 退出时打印 `nanobot agent --session websocket:<id>` 恢复命令，改善会话连续性体验 |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | `refactor(webui): unify floating controls` | 已合并 | 统一 WebUI 浮层控件样式与语义（Menu/Popover/Combobox），提升 UI 一致性 |
| [#1203](https://github.com/HKUDS/nanobot/pull/1203) | `fix(cli): workaround 'Event loop is closed' on linux` | 已关闭 | 修复 Python 3.11 下 Linux 关闭时 `RuntimeError`，该 PR 历时近 6 个月后迎来关闭 |

**关键进展**：今日合并的 PR 集中在 **WebUI 体验统一**与 **TUI 可用性增强**，且 #1203 的关闭意味着长期悬而未决的 Linux CLI 退出崩溃问题已进入解决轨道。整体来看，项目在继续推进多端体验打磨与稳定性修复。

在**待合并队列**中，以下 PR 值得关注（均已在活跃讨论中）：

- [#5420](https://github.com/HKUDS/nanobot/pull/5420) `feat(webui)`: 单轮对话可观测性与安全恢复
- [#5453](https://github.com/HKUDS/nanobot/pull/5453) `feat(providers)`: 新增 SenseNova（商汤日日新）Provider
- [#5413](https://github.com/HKUDS/nanobot/pull/5413) `fix(providers)`: 对异常错误应用回退策略


## 4. 社区热点

**最受关注 Issue：**

- [#5444](https://github.com/HKUDS/nanobot/issues/5444) `[bug] Failed to ogin OpenAI via OAuth in Docker` — 作者在 Docker 环境中通过 OAuth 登录 OpenAI 失败，评论区已有 1 条回复。该问题涉及常见的容器环境端口映射/回调链路问题，预计会较快获得修复。👍 0

**最活跃 PR：**

- [#5180](https://github.com/HKUDS/nanobot/pull/5180) / [#5179](https://github.com/HKUDS/nanobot/pull/5179) — MCP SDK v2 迁移的两个竞争方案仍在拉扯中（一个最小化评估版、一个完整迁移版），讨论跨度已超三周，社区对该架构决策的关注度持续。
- [#5420](https://github.com/HKUDS/nanobot/pull/5420) `feat(webui)`：针对回合可观测性的较大改动，涉及前端交互逻辑重构。

**热点诉求分析：** 社区当前最关心两大方向：**① 流式响应的容错性**（多个 issue/PR 指向流中途失败的恢复机制），**② Provider 生态扩张**（单一 Anthropic/OpenAI 直连已不能满足需求，不断有新的厂商接入请求）。同时，MCP SDK v2 迁移的拉锯战反映出社区对架构演进方向的分歧，需要维护团队尽快决策。


## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有修复 PR |
|---|---|---|---|
| 🟠 高 | [#5454](https://github.com/HKUDS/nanobot/issues/5454) | **流式 Provider 中途 `server_error` 不重试**：一旦已有 content/reasoning 流出，Codex `response.failed` 事件触发的重试逻辑被跳过 | ✅ 已有 [#5455](https://github.com/HKUDS/nanobot/pull/5455) 修复 PR（已打开） |
| 🟡 中 | [#5444](https://github.com/HKUDS/nanobot/issues/5444) | **Docker 环境 OAuth 登录失败**：授权码交换 token 环节出错，可能与容器内回调地址解析有关 | ❌ 暂无 |
| 🟡 中 | [#5425](https://github.com/HKUDS/nanobot/issues/5425) | **自定义 OpenAI 兼容 Provider 不支持 `socks://` 代理**：导致请求在到达 Provider 前失败 | ✅ 已关闭（修复落地） |

另外，今日合并/更新的 2 个稳定性相关 PR 值得关注：修复 Matrix 错误日志插值问题（[#5458](https://github.com/HKUDS/nanobot/pull/5458)）以及将异常边界限定在消息处理范围的调度器修复（[#5457](https://github.com/HKUDS/nanobot/pull/5457)）。


## 6. 功能请求与路线图信号

**新增功能请求：**

| Issue/PR | 内容 | 信号强度 |
|---|---|---|
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | 新增 **Google Vertex AI** 原生 Provider（用于 Claude 模型） | 🟡 较高 — 社区已有多 Provider 接入先例，且请求方明确列出当前支持的 Provider 清单 |
| [#5453](https://github.com/HKUDS/nanobot/pull/5453) | **SenseNova（商汤日日新）** Provider（已提交 PR，含 3 个模型） | 🟢 可能进入下一版 — PR 已打开且标注 `new-provider` |

**路线图信号**：从近 30 天 PR 分布来看，项目正逐步从"核心对话能力"向 **"渠道生态 + 企业级集成"** 扩展。MCP SDK v2 迁移（[#5179](https://github.com/HKUDS/nanobot/pull/5179)）若最终落地，将显著影响后续所有渠道类集成的开发效率，预计是下半年最重要的架构级变更。


## 7. 用户反馈摘要

- **"流式中断无法恢复"体验痛点**（[#5454](https://github.com/HKUDS/nanobot/issues/5454)）：用户在使用 Codex 等流式 Provider 时遭遇服务端错误，发现一旦内容已部分输出，内置重试机制完全失效，只能整轮重来。该反馈直接将"部分成功状态下的恢复策略"提上议程，修复 PR 已在 24 小时内跟进（#5455），响应速度值得肯定。
- **Docker 部署的 OAuth 流程受阻**（[#5444](https://github.com/HKUDS/nanobot/issues/5444)）：容器化部署时，OAuth 回调 URL 仍指向 `localhost:1455`，在容器网络隔离下容易断链，提示项目需针对容器化场景补充网络配置文档或自动检测逻辑。
- **付费安全扫描 MCP 服务的接入需求**（[#5447](https://github.com/HKUDS/nanobot/issues/5447)，已关闭）：有开发者运营 Solana x402 付费 API 服务，希望将 nanobot 与安全扫描 MCP 集成，虽未达成采纳，但表明生态中已有第三方在围绕 nanobot 建设商业服务。


## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 状态 | 建议 |
|---|---|---|---|---|
| [#5180](https://github.com/HKUDS/nanobot/pull/5180) `chore(mcp): evaluate minimal SDK v2 migration` | PR | 2026-07-30 | 待合并（评估 Draft） | 与 #5179 形成竞争，需维护者明确取舍方向，避免长期双轨并存 |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) `Migrate MCP integration to SDK v2` | PR | 2026-07-30 | 待合并（P1，conflict） | 社区等待该架构决策已久，建议给出明确时间表 |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) `feat(telegram): support reusable sticker replies` | PR | 2026-08-13 | 待合并 | Telegram 贴纸复用功能，已超一周未获更新，建议 reviewer 关注 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) `fix(memory): preserve full consolidation input` | PR | 2026-08-13 | 待合并（conflict） | 合并冲突需协调处理 |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) `fix(mcp): preserve credentials when OAuth store read fails` | PR | 2026-08-11 | 待合并（conflict） | 涉及 MCP 凭证安全，建议优先处理 |

---

**本期编辑注**：NanoBot 活跃度处于高位，核心维护者对 Bug 报告的响应速度（24 小时内产出修复 PR）值得肯定。MCP SDK v2 迁移的决策是当前最重要的路线图分叉点，建议维护团队在近期给出明确方向，以消除社区歧义。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-21

## 今日速览

过去 24 小时项目活跃度维持高位：共 50 条 Issue 更新和 50 条 PR 更新，其中新开/活跃 Issue 达 43 条（关闭 7 条），新提交 PR 约 48 条待合并。值得关注的是，今日没有新版本发布，但 Issue 和 PR 的提交密度集中在安装/更新链路（`area/install-update` 相关条目超过 15 条）和 Windows 平台兼容性（`platform/windows` 相关超过 10 条），表明该方向是当前社区反馈最集中的区域。此外，`state.db` 损坏、会话持久化失败等数据可靠性问题连续多日出现（#89293、#90493、#85079），已成为影响用户信任的关键风险点，对应修复 PR 已有多个在审。

## 项目进展

**整体判断：今日没有合并或关闭的重大 PR（48 条待合并，2 条已关闭/合并），但 PR 提交非常密集，说明修复工作正在快速推进，预计未来 48 小时有一波合并窗口。**

### 已合并/关闭的 PR（2 条）
数据中未展示具体已合并/关闭的 2 条 PR 明细，但从 Issue 侧来看，以下 Issue 被标记为 CLOSED，可能对应已合入的修复：

- **#27649 [Bug]: Multiprocess logging can keep writing to rotated agent.log.N files** — 该问题在持续 3 个月后于今日关闭，对应的 PR #91210（fix(logging): recover from POSIX rollover backup races）新提交待合并，说明该问题根因已定位并完成修复。
- **#34597 [Bug]: Windows: Gateway crashes ~400ms after boot** — 今日关闭，确认修复已合入。

### 今日新提交且方向明确的修复 PR（供关注）

| PR | 解决的问题 | 状态 |
|---|---|---|
| [#91214](https://github.com/NousResearch/hermes-agent/pull/91214) fix: memory-plugin 和 Qwen-CLI 配置文件 JSON 在 Windows 下因 BOM 静默丢失 | 修复 14 个 JSON 读取站点 | OPEN |
| [#91210](https://github.com/NousResearch/hermes-agent/pull/91210) fix(logging): POSIX rollover 备份链竞争条件 | 修复 #27649 剩余问题 | OPEN |
| [#91201](https://github.com/NousResearch/hermes-agent/pull/91201) fix(update): 暴露 config 模块重载失败 | 修复 #90945 残留静默失败 | OPEN |
| [#91205](https://github.com/NousResearch/hermes-agent/pull/91205) fix(kanban): 保留 worktree 仓库绑定 | 修复 Kanban 任务 spawn_failed 循环 | OPEN |
| [#91206](https://github.com/NousResearch/hermes-agent/pull/91206) fix(kanban): 瞬时 provider 故障后重新排队 workers | 防止误判 | OPEN |
| [#91209](https://github.com/NousResearch/hermes-agent/pull/91209) fix(agent): 忽略结构化工具结果中的 null errors | 修复 #91166 | OPEN |
| [#91197](https://github.com/NousResearch/hermes-agent/pull/91197) fix(cli): 保持恢复会话的 cwd 优先级一致 | 修复 cwd 继承问题 | OPEN |
| [#91162](https://github.com/NousResearch/hermes-agent/pull/91162) fix(kanban): 延迟手动 reclaim 直至确认 worker 终止 | 修复任务被错误释放 | OPEN |

## 社区热点

### 今日讨论热度最高

**#66616 — Skills index is stale or degraded（66 条评论）**  
[链接](https://github.com/NousResearch/hermes-agent/issues/66616)  
这是一个自动探针持续报告的稳定性问题——Skills Hub 的索引已超过 26 小时阈值（当前 29.8 小时）。该问题的持续存在（已开放超过一个月）引发 66 条讨论，核心诉求是 **CI 管道的可靠性**：`skills-index.yml` 的 cron 调度和 `deploy-site.yml` 的构建之间存在依赖窗口，一旦某一环失联，前端文档站即指向过期数据。社区可能对自动化的"健康探针"本身产生疲劳，期待一劳永逸的修复方案。

### 用户关注焦点

**Windows 安装/更新链路问题高度集中**，今日至少 5 个独立 Issue 指向不同的安装/更新失败路径（#83846、#90829、#89857、#90134、#91021、#82309、#89807）。讨论中传递出：

- #83846（13 条评论，1 👍）：**ZIP 回退路径会删除已构建的桌面应用且永不重建**，导致后续更新报告"Already up to date"，用户可能陷入死循环。
- #90829：**桌面应用每日更新失败**，根因是 win32-x64 的 fail-closed 原生依赖门禁加上 node_modules 损坏。
- #89857：**PowerShell Constrained Language Mode 下无法安装**，两个 PR（#90128、#91196）均在解决此问题。

> 值得注意：PR #90128 和 #91196 在处理同一问题时存在"冲突"——#91196 被标记为"Supersedes stale/conflicting PR #90128 while preserving its exact implementation and original author identity"，这种处理方式体现了良好的协作规范，但需维护者尽快裁决，避免社区贡献者混淆。

## Bug 与稳定性

### P0 级别

**#90971 — apply_anthropic_cache_control 在预装饰输入上非幂等（P0）**  
[链接](https://github.com/NousResearch/hermes-agent/issues/90971)  
作者已主动更正原始描述，确认最初两个溢出场景经 @jackulau 和 @andrexibiza 排查后**不可达**。但问题本身暴露了 prompt caching 路径缺少防御性编程，建议尽快补充幂等性测试。

### P1 级别

| Issue | 问题描述 | 是否有修复 PR |
|---|---|---|
| [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) | ZIP 回退删除构建产物且不重建 | 未发现对应 PR |
| [#85079](https://github.com/NousResearch/hermes-agent/issues/85079) | 并发子代理写入导致 session_persistence_failed | 未发现对应 PR |
| [#89293](https://github.com/NousResearch/hermes-agent/issues/89293) | 8天内 state.db 损坏 3 次（锁风暴 + journal_mode 回退） | 未发现对应 PR |
| [#34597](https://github.com/NousResearch/hermes-agent/issues/34597) | Windows Gateway 启动 ~400ms 后崩溃（已关闭，修复合入） | ✅ 已修复 |

### P2 级别（重点）

- **#90493 — 会话持久化失败吞掉真实 SQLite 错误**（[链接](https://github.com/NousResearch/hermes-agent/issues/90493)）：用户看到的是笼统的 `locked/disk/unknown` 三值桶，而非真实损坏原因，排障效率极低。
- **#75801 — gpt-5.6-luna 缺少 finish_reason 导致 4 次虚假断流重连 + 桌面端丢答案**（[链接](https://github.com/NousResearch/hermes-agent/issues/75801)）：模型行为与流式框架的双重叠加问题。
- **#90477 — SSH 远程桌面配置文件切换错误**（[链接](https://github.com/NousResearch/hermes-agent/issues/90477)）：切换 profile 后回退到本地后端并连接到不同的 SSH 主机——这在多租户/多用户场景下存在**安全隐患**。

### 稳定性质疑

**#89293（state.db 8 天内损坏 3 次）** 是最具破坏力的稳定性报告。日志分析指向"锁风暴 + 窗口内重启 + journal_mode 在升级后静默回退到 WAL"的完整因果链。考虑到数据丢失和人工恢复成本，建议维护者将 SQLite 并发写入路径的加固列为**高优先级**。

## 功能请求与路线图信号

### 可能纳入下一版本的功能（已有 PR 原型）

1. **#91204 — Desktop 账户资源与网关指标控制面板（PR 已提交）**  
   [Issue #91204](https://github.com/NousResearch/hermes-agent/pull/91204)  
   新增 `system.resources` 和 `account.usage` RPC，提供 CPU/RAM/磁盘/配额可视化。用户对资源消耗可见性的诉求上升。

2. **#90866 — 可观察状态从源头到副作用全程 proof-carrying（架构提案）**  
   [链接](https://github.com/NousResearch/hermes-agent/issues/90866)  
   该提案汇总了近期多个事故的修复经验，强调状态可观测性、原子发布和真实性校验，代表用户对系统性根治方案的需求。虽为 P3，但架构价值高。

3. **#91202 — Memory 和 Skill 写入的审批工作流**  
   [链接](https://github.com/NousResearch/hermes-agent/issues/91202)  
   用户希望在 memory/skill 写入上也引入类似 shell 命令的 `approvals.mode`。考虑到 agent 自主性增强的趋势，该请求具备合理性，但当前被标记为 duplicate。

4. **#91149 — 预览面板：SSH 远程后端下将 localhost 开发服务器通过 harness 路由**  
   [链接](https://github.com/NousResearch/hermes-agent/issues/91149)  
   远程开发场景下的 preview 代理需求，标志用户对远程后端的深度使用。

### 架构级信号

**#88683 — 让 install/update/bootstrap 遵循单一事务性部署计划（P3，needs-decision）**  
[链接](https://github.com/NousResearch/hermes-agent/issues/88683)  

该提案针对安装/更新领域的碎片化问题（今日几乎所有 Windows 问题都可溯源到此处）。若被采纳，将大幅减少未来同类 Bug 数量，但落地成本较高。

## 用户反馈摘要

### 痛点聚焦

1. **Windows 安装/更新链路的质量**是当前最大的用户信任危机。多个独立用户（ArcGG33、cvc007、vquilon、barsh、CCXXXI、liujuanjuan1984）在不同环节遇到安装失败、更新回退、构建损坏的问题。信息碎片化严重，用户被迫在多个 Issue 间跳转才能拼出完整问题图景。

2. **数据安全焦虑上升**：#89293 的作者（zhanglingfei112）报告了 3 次损坏、每次都需要离线 `.recover`、存在部分数据丢失、耗费数小时手工处理的经历——这是最令人担忧的用户场景。评论区中，其他用户也对 `state.db` 的可靠性表达了审慎。

3. **桌面端 Stream UI 在多后端/多主机场景下存在一致性问题**（#90477），用户在 SSH 远程连接切换配置时出现"本地后端 + 远程主机"的错乱，不仅影响体验，也可能导致对错误环境执行操作的风险。

### 积极反馈

- PR #91213 在 Bot Mode 中分离 DM 和群组视图，基于 #88738 的群组行模型进行增量改进，体现了项目迭代的连贯性。
- PR #91208 展示了社区对 Kanban 自动分解工作流的深度使用（守护 PR 评论反馈、acknowledge reviewer 响应的时序），说明 Kanban 功能已产生实际的社区粘性。

## 待处理积压

| Issue/PR | 标签 | 停留时长 | 建议 |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded | bug, P3 | 34 天 | 自动探针持续报告同一问题，需一次性根治 CI 依赖链，而非反复触发告警 |
| [#32678](https://github.com/NousResearch/hermes-agent/issues/32678) GCP Vertex AI 连接 404 | bug, P2 | 87 天 | 长时间未响应但用户明确报告了 curl 可用的对照实验，建议排查 |
| [#47188](https://github.com/NousResearch/hermes-agent/issues/47188) Telegram proxy_targets 忽略自定义 base_url | bug, P2 | 66 天 | 有明确的代码定位建议（gateway/platforms/telegram.py 的 resolve_proxy_url），待认领 |
| [#89857](https://github.com/NousResearch/hermes-agent/issues/89857) ConstrainedLanguage Mode 安装失败 | bug, P2 | 2 天 | 已有 2 个 PR 在处理，需要维护者协调避免重复提交 |
| [#90128](https://github.com/NousResearch/hermes-agent/pull/90128) vs [#91196](https://github.com/NousResearch/hermes-agent/pull/91196) ConstrainedLanguage PR 冲突 | — | — | 需要尽快合并裁决 |

---

**总结**：今日 Hermes Agent 项目处于"提交密集、合并暂缓"的状态。社区活跃度高，但用户的注意力集中在 Windows 安装/更新链路的质量问题和 `state.db` 数据可靠性上。期待维护者在接下来 48 小时内推进 PR 合并窗口，优先处理 P0/P1 级别的数据安全和更新死循环问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**: 2026-08-21  
**数据来源**: github.com/sipeed/picoclaw  
**分析视角**: 项目健康度、社区热度、开发进展


## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**中等偏上**水平：共 3 条 Issue 更新（全部处于开放状态，其中 1 条为 Bug 报告、2 条为功能请求），9 条 PR 更新（5 条待合并、4 条已关闭），无新版本发布。值得关注的是，三项长期挂起的代码重构 PR（#714 技能安装重构、#1158 Anthropic 原生协议支持、#423 多智能体协作框架）均于今日关闭合并，标志着项目在技能管理、协议兼容和分布式协作三个方向的基座能力得到实质性补强；社区提交的 web 前端锁文件修复 PR 也已合入。与此同时，5 条 Dependabot 依赖升级 PR 已搁置一周以上，合并优先级需要维护者评估。当前活跃的核心诉求集中在 **Web UI 性能（#3281）** 与 **音频转录模型可配置化（#3331）**，用户侧对功能扩展和交互体验均有明确期待。


## 2. 版本发布

无新版本发布。上一次版本仍为 v0.3.1（Issue #3281 中用户提及）。


## 3. 项目进展

今日共有 4 个 PR 被合并/关闭，其中 3 个为核心代码变更，1 个为社区修复：

| PR | 标题 | 类型 | 影响 |
|---|---|---|---|
| [#714](https://github.com/sipeed/picoclaw/pull/714) | skills: install/reinstall CLI and refactor into skillsCmd | 增强 | 重构技能安装子系统，支持 `repo@branch` 语法与子路径指定，新增 force 重装能力，改用 GitHub Trees API 实现完整目录拉取，并优化了重复安装时的报错提示 |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | feat: add anthropic-messages protocol for native Anthropic API format | 增强 | 新增 `anthropic-messages` 协议前缀，支持使用 Anthropic 原生 Messages API 格式（`/v1/messages` 端点）的 LLM 服务，修复 Issue #269。解决了一类兼容代理只支持 Anthropic 原生格式而无法接入 PicoClaw 的问题 |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | base multi-agent collaboration framework & shared context | 增强 | 基础多智能体协作框架合入，包含线程安全的共享上下文池（Blackboard）、Agent 切换（Handoff）与发现工具，搭建在已合并的 #213（provider 协议重构）与 #131（模型 fallback 链 + 多智能体路由）之上 |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | fix(web): repair unparseable pnpm-lock.yaml | 修复 | 修复了 `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 在 `packages` 和 `snapshots` 下重复声明导致的 YAML 解析失败（`ERR_PNPM_BROKEN_LOCKFILE`） |

**简评**：三项功能型 PR 合入时间跨度约半年（#423 创建于 2 月、#714 创建于 2 月、#1158 创建于 3 月），属"长期打磨后落地"类型；短期内项目功能性增量有限。但多智能体协作框架的合入值得关注——该 PR 明确了下一代架构的基座方向，后续插件/工具开发将基于此框架展开。社区修复 PR #3318 从提交到合入仅 12 天，响应较及时。


## 4. 社区热点

### 最热 Issue：#3281 — Web UI 长历史输入卡顿
- **链接**: https://github.com/sipeed/picoclaw/issues/3281
- **状态**: 开启，6 条评论，1 👍
- **诉求**: 在 Web UI 中，当单会话历史消息累积到一定长度后，输入框出现严重输入延迟（键入卡顿）。

该 Issue 已存活约 1 个月（7/21 创建后 8/20 有更新），用户给出了清晰的复现路径，目前仍无 fix PR 关联。从评论数看社区讨论已形成一定声势。考虑到 Web UI 是 PicoClaw 的主要交互入口，输入卡顿属于 **高影响** 体验问题，值得优先排期。

### 需关注 Issue：#3331 — 音频转录接口模型白名单限制
- **链接**: https://github.com/sipeed/picoclaw/issues/3331
- **状态**: 开启，1 条评论
- **诉求**: 当前语音转录仅支持模型名含 `*-whisper-*` 的服务，用户希望推广到所有兼容 `/audio/transcriptions` 端点的模型，提出了新增 `whisper-transcription` 配置开关的方案。

该需求触及**模型可扩展性**痛点：Whisper 系列相对老旧/慢速，硬编码匹配规则限制了用户对更快的转录模型（如 Parakeet、Canary 等）的使用。提案中已给出具体代码修改建议（asr.go 中 force select whisper path），实现成本可控，预估下一个 minor 版本有较大概率纳入。


## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🟠 **中** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框在会话历史较长时出现明显延迟（版本 0.3.1，Go 1.25.11） | 开放中，无关联 fix PR |
| 🟢 **低** | [#3318](https://github.com/sipeed/picoclaw/pull/3318) | web/frontend 的 pnpm-lock.yaml 含重复键导致依赖无法安装（`ERR_PNPM_BROKEN_LOCKFILE`） | **已修复**，8/20 合入 |

> 说明：无崩溃级或数据一致性类严重 Bug 报出。当前唯一未修复 Bug 为 Web UI 性能回归问题，建议优先调查是否需要虚拟滚动或渲染节流。


## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 热度 | 纳入下一版本可能性 |
|---|---|---|---|
| **音频转录模型可配置化** — 不限定 whisper 系列 | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | 评论 1 | **较高** — 提案附带了具体代码修改建议，且改动集中（asr.go 中增加 flag），预计 minor 版本可落 |
| **delegate/spawn/subagent 动态模型覆盖** | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | 评论 1 | **中等** — 涉及多智能体路由与模型解析机制的联动调整，需更多设计讨论 |
| **多智能体协作框架** | [#423](https://github.com/sipeed/picoclaw/pull/423)（已合入） | — | 已落地，后续将作为子代理调度的基座 |


## 7. 用户反馈摘要

- **Web UI 性能是"first pain point"**（Issue #3281）：用户在 0.3.1 版本上实测，会话历史累计后输入变得"very laggy"。评论倾向要求渲染层优化，但尚未有维护者侧回应，说明响应速度需提升。
- **语音场景的模型选择诉求强烈**（Issue #3331）：用户指出 `"*-whisper-*"` 匹配规则 "too old and slow"，表明当前语音服务链路对现代转录模型支持滞后，存在实际业务场景被限制的情况。
- **Agent 工具链可配置性不足**（Issue #3330）：用户希望 delegate/spawn/subagent 在调用时能指定 model，目前模型是"静态决定"（delegate 跟随 target agent、spawn 跟随 defaultModel），限制了多模型混合编排的灵活性。该问题与 #423 多智能体框架结合看，用户在主动探索更复杂的协作拓扑。
- **锁文件问题获快速响应**（PR #3318）：从报告到修复合入约 12 天，社区贡献者获得正面协作体验。


## 8. 待处理积压

以下问题长期未获响应或进展缓慢，建议维护团队关注：

| 类型 | 编号 | 描述 | 挂起时长 |
|---|---|---|---|
| Issue | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史输入卡顿（高影响、已有 6 条评论） | 30 天 |
| PR | [#3336](https://github.com/sipeed/picoclaw/pull/3336) | Dependabot: bedrockruntime 1.53.3 → 1.57.1 | 8 天 |
| PR | [#3335](https://github.com/sipeed/picoclaw/pull/3335) | Dependabot: aws-sdk-go-v2/config 1.32.25 → 1.32.35 | 8 天 |
| PR | [#3334](https://github.com/sipeed/picoclaw/pull/3334) | Dependabot: anthropic-sdk-go 1.55.1 → 1.62.0 | 8 天 |
| PR | [#3333](https://github.com/sipeed/picoclaw/pull/3333) | Dependabot: mautrix 0.27.0 → 0.29.0 | 8 天 |
| PR | [#3332](https://github.com/sipeed/picoclaw/pull/3332) | Dependabot: aws-sdk-go-v2 1.42.0 → 1.43.4 | 8 天 |

> ⚠️ **维护者提示**：5 条 Dependabot PR 均为常规依赖升级，无 breaking changes（其中 mautrix v0.29.0 与 anthropic-sdk-go v1.62.0 的变更日志无破坏性变更提示）。建议安排集中合并以降低依赖漂移风险；同时确认 CI 状态是否正常，避免版本长期落后引入兼容性问题。


## 总结

PicoClaw 今日合入了三项核心框架级 PR，标志着项目在多智能体协作这一长期方向正式进入"框架已完成、生态待丰富"阶段。短期来看，版本发布节奏放缓（无新 Release），但社区侧 Bug 修复的响应速度（12 天完成一个锁文件修复）体现出协作流程的有效性。值得关注的是，一个持续 30 天的 Web UI 性能问题仍悬而未决，可能成为社区信任度的减分项。建议下阶段优先：① 响应并修复 #3281 输入卡顿问题，② 对 #3331 的转录模型配置提案给出明确开放/拒绝信号，③ 批量合并 Dependabot 积压 PR。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-21**
**数据窗口：2026-08-20 ~ 2026-08-21**


## 1. 今日速览

NanoClaw 今日活跃度处于**高位**。PR 更新达 50 条（待合并 35 条），其中出现了一个值得关注的模式：核心团队成员 gavrielc 提交了一批针对既有 skill 的深度审计修复 PR（#3414-#3420，叠加在 #3408 之上），覆盖 dashboard、ollama-tool、atomic-chat-tool 等 7 个 skill 的配置死区、脚本错误和文档漂移问题。社区侧曝光了 2 个真实 Bug（#2715 WhatsApp 附件不可达、#3369 mention-sticky 误触发），其中 #3369 已有修复 PR（#3422）跟进。此外，zvi-fried 提交了 Cursor Agent SDK 接入（#3355、#3356）——这构成了新 provider 方向的前期铺垫。**值得关注**：#3401、#3402、#3403 三个 fix 旨在修复主仓库与 channels 分支的兼容性问题，建议用户将 channels 分支的版本回退到上次稳定构建，待此组 PR 合并后再升级。项目整体健康度**良好**——Bug 均有 PR 跟进，无阻塞性问题。


## 2. 版本发布

**今日无新版本发布。**


## 3. 项目进展

今日共合并/关闭 15 个 PR，以下为重点合并项：

- [#3421 [CLOSED] docs+setup: announce one-click Slack agents](https://github.com/nanocoai/nanoclaw/pull/3421) — 核心成员合并：README 横幅 + setup 流程升级，用户可通过一条命令完成 Slack 应用创建、头像配置和 workspace 安装。标志 "one-click Slack agents" 功能走向 GA。

- [#1311 [CLOSED] Feature create new session](https://github.com/nanocoai/nanoclaw/pull/1311) — 闭合并入旧 Feature（自 3 月 21 日开启），确认手动/API 创建新 session 能力已落地。

另外，gavrielc 提交了 7 个**待合并**的 skill 审计修复（#3414-#3420），均基于公共栈 #3408，涉及：

- `#3417 fix(add-dashboard)`：补齐 REMOVE.md、SQL 可移植性、shutdown 接线。审计结论：12 个 skill 中"最健康"，仅轻微漂移。
- `#3416 fix(add-ollama-tool)`：修复 `ollamaEnv()` 直读 `process.env` 导致 URL 固定为硬编码默认值、4 个管理工具无法注册的死配置问题；改为按组读取 `container_configs` MCP 配置。
- `#3415 fix(add-atomic-chat-tool)`：同样的死配置类问题——文档中的 `ATOMIC_CHAT_API_KEY=sk-...` 示例还会触发凭证值检查导致安装失败。
- `#3414 fix(add-clidash)`：修复 refresh() 并发发发射 ~29 个 `bin/ncl` 进程、10 秒超时导致 27 个超时、UI 几乎全错的自我击溃问题。修复后 payload 测试 87 → 102 全绿。
- `#3418 fix(add-tavily-tool)`：smoke test 静默跳过问题（选中的组无运行容器时无提示），改为显式检查并给出真实信号。
- `#3419 fix(add-anydoc)`：脚本裸调 `ncl`，多实例主机上可能读 A 的 DB 重启 B 的组。
- `#3420 fix(add-macos-statusbar)`：Swift 硬编码 `com.nanoclaw.plist`，与新的 `com.nanoclaw-v2-<installSlug>` 前缀不匹配，statusbar 监控不存在的服务。

> 信号：这批审计显示部分 skill 在"真实环境"下存在配置不生效、并发失控、多实例错误操作等系统性质量问题，但均已定位并有明确修复，说明核心团队对社区贡献的质量审查正在深化。


## 4. 社区热点

今日热门讨论集中在以下条目：

- [#3369 mention-sticky engages without a mention: accumulate creates the session row that is the subscription](https://github.com/nanocoai/nanoclaw/issues/3369) — 新开 1 天，已有关联修复 PR（#3422）。用户指出 `engage_mode: 'mention-sticky'` + `ignored_message_policy: 'accumulate'` 组合下，accumulate 创建 session 行本身成为订阅源，导致 agent 在未被 @ 的线程里自动回复。对 Slack 类线程平台用户影响面大。

- [#3422 fix(router): mention-sticky subscribes on a mention, not on a session](https://github.com/nanocoai/nanoclaw/pull/3422) — 针对 #3369 的修复，同作者当日提交。将订阅信号从"session 创建"改为"真正收到 mention"。

- [#3402 fix(codex): deliver provider-generated files](https://github.com/nanocoai/nanoclaw/pull/3402) — 核心成员提交，解决 provider 生成文件的投递问题：显式路径与所有权契约、安全 outbox staging、`send_file` 显式投递。


## 5. Bug 与稳定性

按严重程度排序：

**高**
- [#2715 Inbound WhatsApp media is unreachable by the agent](https://github.com/nanocoai/nanoclaw/issues/2715) — WhatsApp 入站附件下载到未挂载进 agent 容器的主机目录，agent 被赋予不存在的 `/workspace/attachments/...` 路径。**影响**：agent 无法读取用户发来的图片/文档/音频，对 WhatsApp 渠道用户是阻断级。**状态**：仍为 OPEN，**无 fix PR**，已滞留 73 天。

**中**
- [#3369 mention-sticky engages without a mention](https://github.com/nanocoai/nanoclaw/issues/3369) — 见上。**状态**：OPEN，**已有修复 PR #3422 待合并**。

**低**
- [#2606 engage_mode='always' silently drops all messages](https://github.com/nanocoai/nanoclaw/issues/2606) — `evaluateEngage()` 缺少 `always` 分支，消息以 `no_agent_engaged` 被静默丢弃。**状态**：今日关闭（未查明是否为代码修复关闭，建议维护者确认关闭原因）。

**技术债相关**（来自审计 PR）：
- 多个 skill 的配置读取仅 `process.env`（`#3415`、`#3416`）——NanoClaw 不填充 `.env` 到环境变量，导致文档配置完全失效。
- `#3414` 并发 fan-out 导致 UI 大部分报错。
- `#3419` 裸 `ncl` 调用在多实例主机上跨实例操作。


## 6. 功能请求与路线图信号

- **新增 provider：Cursor Agent SDK** — zvi-fried 提交了 [#3355 /add-cursor 安装 skill](https://github.com/nanocoai/nanoclaw/pull/3355) 和 [#3356 Cursor Agent SDK payload](https://github.com/nanocoai/nanoclaw/pull/3356)。目前系统支持 claude/codex 等 agent；加入 Cursor 意味着覆盖面扩展，结合 [#3402 的 provider-generated file 投递机制](https://github.com/nanocoai/nanoclaw/pull/3402)（可能为跨 provider 统一文件投递铺路），预计 Cursor 将在下一次 minor release 中可用。

- **ncl 工具链增强** — [#3270 Feat/ncl token usage](https://github.com/nanocoai/nanoclaw/pull/3270)（已活跃 5 天）为 CLI 增加 token 用量统计。考虑"token usage 看板"与"consumer 生存能力"方向的优先级，该功能价值高，预计会在随后合并。

- **新增 skill：add-why** — [#3189 feat(skill): add-why — explain what happened to one message](https://github.com/nanocoai/nanoclaw/pull/3189)，对单条消息解释"为什么发生了这个动作"，面向调试与可解释性。处于 OPEN 状态 16 天，方向感强，但因"非核心链路"可能排期靠后。

- **容器只读挂载加固** — [#3196 Fix/add mount readonly](https://github.com/nanocoai/nanoclaw/pull/3196)，安全相关的加固，已 OPEN 14 天，建议维护者优先推进。


## 7. 用户反馈摘要

- **#2715（WhatsApp 附件不可达）**：用户是真实使用场景反馈——"agent cannot open images/documents/audio"。且指出附件保存位置与 session inbox 不一致，属于架构层面的路径设计问题，建议维护者在修复时一并审视各渠道的附件目录统一问题。

- **#3369（mention-sticky 误触发）**：来自 nilsborg 的反馈，描述精确（"accumulate creates the session row that is the subscription"），至少说明该用户对 `mention-sticky` 的语义有明确预期（只应在被 @ 时回复），且已在 PR #3422 中给出语义修正。用户对 `ignored_message_policy` 的文档预期与实际行为不一致，建议维护者同步更新文档表述。

- **PR 密集创作者**：teran13 与核心团队 gavrielc 今日均有多个 PR 在活跃状态，其中 teran13 的 4 个 PR（#3270、#3189、#3196、#3422）在规格定义上大多齐备，但部分涉及源码头文件的 PR（如 #3196 修改挂载配置）可能需要对改动影响面有更清晰的说明，建议维护者优先与 ta 对齐合并前要求。


## 8. 待处理积压

**高危（建议优先处理）**

- [#2715 WhatsApp 附件路径不可达](https://github.com/nanocoai/nanoclaw/issues/2715) — 阻断 WhatsApp 渠道核心能力，已 OPEN 73 天无 fix PR。**建议**：维护者确认 `DATA_DIR/attachments` 与 session inbox 的映射方案，或考虑统一挂载 `/workspace/attachments` 为数据卷。

- [#3196 容器只读挂载加固](https://github.com/nanocoai/nanoclaw/pull/3422) — 已 OPEN 14 天，涉及安全加固改动，建议设置明确合并期限。

**中危**

- [#3189 add-why skill](https://github.com/nanocoai/nanoclaw/pull/3189) — 已 OPEN 16 天，功能价值明确但优先级不高，建议由社区继续推动 review，避免"僵尸 PR"。

- [#3270 ncl token usage](https://github.com/nanocoai/nanoclaw/pull/3270) — 已 OPEN 5 天，属于资金可观测性核心诉求，建议维护者优先 review（如计划在下一个 minor 包括该功能，请先在 PR 内声明）。

**低危（提醒）**

- #2606 虽已关闭，但关闭原因未在摘要中说明。建议维护者在 commit message 或 issue 中补充关闭理由（是否是因 #3422 的修复一并解决），避免社区困惑。


### 附：高频贡献者一览（今日）

| 贡献者 | PR 数 | 类型 |
|---|---|---|
| gavrielc | 7 | skill 审计修复（叠加 #3408） |
| zvi-fried | 4 | core-team fix / Cursor provider 扩展 |
| teran13 | 1（新）+ 3（活跃） | skill 与 fix |
| jsboige | 1 | scheduling cron 修复 |
| marcelomarra | 1 | Slack scope 修复 |

---

*本报告基于 GitHub 公开数据生成，所有链接可点击跳转至对应 Issue/PR 详情页。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 IronClaw GitHub 数据，我为您生成了 2026-08-21 日的项目动态日报。

---

### IronClaw 项目动态日报 — 2026-08-21

#### 1. 今日速览

IronClaw 项目今日活跃度极高，Issues 与 PR 更新频繁，核心开发与社区讨论并行推进。项目正处于 **v1.4.0 版本的功能聚合期**，多个大型 Epic（如持久化沙箱、Agent 生命周期 Hook、WebUI 设计系统）的拆分与实施工作正在密集进行。值得注意的是，今日合并了多项关键修复（如 OpenAI 模型建议生成故障 SEV、Rust 1.98 Clippy 导致的 CI 全红问题），并关闭了数个长期悬而未决的 Issue，显示出项目在快速迭代的同时具备很强的稳定性修复能力。

#### 2. 版本发布

- **无新版本发布。**

#### 3. 项目进展

今日合并了大量 PR，显著推进了多个核心模块的进展，并完成了重要的技术债务清理：

- **修复关键问题并入主干：**
    - **[PR #7786](https://github.com/nearai/ironclaw/pull/7786)**：**（已合并）** 修复了因 `uniqueItems` 声明导致 OpenAI 模型建议生成功能完全故障的 SEV，并清理了失效的 allowlist ID，确保功能恢复正常。
    - **[PR #7777](https://github.com/nearai/ironclaw/pull/7777) 与 [PR #7778](https://github.com/nearai/ironclaw/pull/7778)**：**（已合并）** 两项 PR 协同解决了 Rust 1.98 Clippy 新 Lint 导致的**全分支 CI 红屏**问题，保障了合并队列的畅通。
- **功能落地与整合：**
    - **[PR #7738](https://github.com/nearai/ironclaw/pull/7738)**：**（已合并）** 为 Slack 部署配置卡片增加了字段级帮助文本，完善了扩展配置体验。
    - **[PR #7729](https://github.com/nearai/ironclaw/pull/7729)**：**（已合并）** 实现了自动化（Automation）的“立即运行”（run-now）功能，覆盖 Trigger 领域、产品能力与 WebUI。
- **重大文档重构：**
    - **[PR #7763](https://github.com/nearai/ironclaw/pull/7763)**：**（已合并）** 将七份相互矛盾的子代理（Subagent）设计文档整合为一份权威 README，净减少 **9,713 行**，大幅降低了维护成本。
- **前端体验优化与架构整理：**
    - **[PR #7304](https://github.com/nearai/ironclaw/pull/7304)**：**（已合并）** 调整了登录页面布局，将 OAuth 登录按钮置于网关 Token 表单之上，优化用户登录体验。

这些合并表明项目在**修复关键阻碍、推进核心功能、清理技术债务**三线并行，为 v1.4.0 的发布扫清了障碍。

#### 4. 社区热点

今日讨论度最高的当属 **[Issue #7732](https://github.com/nearai/ironclaw/issues/7732)**（持久化的每用户沙箱 Epic），收获了 8 条评论。该 Issue 提出了“利用 iron-proxy 实现持久化用户沙箱”的宏大构想，并拆解了当前实现的不足，是 v1.4.0 的核心特性之一。其高热度反映了社区对**更稳定、更隔离且状态可持久化**的沙箱环境有强烈需求，并涉及上层代理进行网络管理的复杂设计，是技术含量和关注度都极高的议题。

此外，关于 **Agent 生命周期 Hook** 的 **[Epic #7770](https://github.com/nearai/ironclaw/issues/7770)** 及其第一个落地 PR **[#7765](https://github.com/nearai/ironclaw/pull/7765)** 也获得了较多关注。该 Epic 旨在将代理生命周期事件（如前/后回合、压缩、工具结果）全面开放为 Hook 注册点，这是将 IronClaw 从一个固定引擎进化为**可编程、可扩展的代理框架**的关键一步。围绕该 PR 的代码审查（Issue #7775、#7780、#7776 等）产生了多个高价值的后续优化议题，表明核心开发者对代码质量的把控非常严格。

#### 5. Bug 与稳定性

今日上报的 Bug 主要集中在**可靠性、一致性与环境适配**方面，按严重程度排列如下：

| 严重程度 | Issue/PR | 问题描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **[Issue #7783](https://github.com/nearai/ironclaw/issues/7783)** | **LLM超时策略缺陷：** 结构化输出最终化阶段无法测量首Token时间（TTFT），且重试预算与截止时间不匹配，可能导致有效请求被错误终止。 | **待处理** (无关联PR) |
| **中** | **[Issue #7776](https://github.com/nearai/ironclaw/issues/7776)** | **并发写入导致数据丢失：** `memory.write` 的全文档覆盖模式无法检测并发写入，存在静默覆盖风险。 | **待处理** (已有改进方案) |
| **中** | **[PR #7777](https://github.com/nearai/ironclaw/pull/7777)** | **CI 全红：** Rust 1.98 Clippy 新增 Lint 导致所有分支的 CI 检查失败。 | **已合并修复** ([PR #7778](https://github.com/nearai/ironclaw/pull/7778)) |
| **中** | **[Issue #7767](https://github.com/nearai/ironclaw/issues/7767)** | **测试时区不稳定：** 自动化（Automation）展示层的日期测试依赖 UTC，在 `Asia/Shanghai` 等时区会失败。 | **待处理** (已有修复PR: [#7774](https://github.com/nearai/ironclaw/pull/7774)) |
| **低** | **[Issue #7308](https://github.com/nearai/ironclaw/issues/7308)** | **第三方集成问题：** Hosted MCP OAuth 注册（Attio）因 invalid scope 失败且无法纠正。 | **已关闭** |

#### 6. 功能请求与路线图信号

从今日的更新来看，项目正坚定不移地迈向 **v1.4.0**，路线图清晰，主要信号如下：

- **Epic 拆分为交付铺路：** 大型工作被拆分为可独立交付的小型 Epic/PR。例如，WebUI 设计系统被拆分为 **Phase 1 ([#7038](https://github.com/nearai/ironclaw/issues/7038))**、**Phases 2–3 ([#7781](https://github.com/nearai/ironclaw/issues/7781))** 和 **Phases 4–5 ([#7782](https://github.com/nearai/ironclaw/issues/7782))**。这表明项目正在将一个宏大的愿景快速、分阶段地落地。
- **Agent 生命周期 Hook 是下一阶段的重点：** 由 **[Epic #7770](https://github.com/nearai/ironclaw/issues/7770)** 领导的 “hook 化” 改造是明确的路线图信号。其第一个消费者（Memory 整理）已被实现于 **[PR #7765](https://github.com/nearai/ironclaw/pull/7765)**。围绕此产生的 **[Issue #7775](https://github.com/nearai/ironclaw/issues/7775)**（无边界运行中跳过门控能力）和 **[Issue #7780](https://github.com/nearai/ironclaw/issues/7780)**（调度器侧失败终结绕过 Hook 点）等后续项，将进一步完善这一核心架构。
- **扩展性与集成体验优化：** 除了核心代理功能，项目也在优化周边生态。如 **[Issue #7769](https://github.com/nearai/ironclaw/issues/7769)**（在配置界面展示扩展设置阶段与阻塞项）和 **[PR #7766](https://github.com/nearai/ironclaw/pull/7766)**（分离 Telegram 机器人配对与个人设备绑定），都旨在提升第三方集成的用户体验和透明度。

#### 7. 用户反馈摘要

从今日的 Issues 评论中可以提炼出一些用户（主要是核心开发者和贡献者）的反馈：

- **追求完美架构与严格控制技术债：** 开发者对代码质量和架构演进非常在意。例如，在审查 PR #7765 时发现了内存写入的并发问题（Issue #7776），并认为其审查意见是“正确的”。这种严格的代码审查文化催生了大量高质量的后续优化任务。
- **对测试可靠性的担忧：** 时区相关的测试失败（Issue #7767）反映了社区对 CI 环境稳定性和可移植性的要求，希望测试用例不依赖于开发者的本地环境配置。
- **对现有开发流程的主动优化：** 开发者主动创建 “[Issue #7771](https://github.com/nearai/ironclaw/issues/7771)” 这类故障分类文档，系统性分析基准测试中的失败，展现了社区对**数据驱动改进**的认可与实践。
- **对清洁、有组织的代码库的追求：** 多个清理 Issue（如 [#7784](https://github.com/nearai/ironclaw/issues/7784)、[#7785](https://github.com/nearai/ironclaw/issues/7785)）和文档整合 PR (#7763) 表明，社区成员非常看重项目的长期可维护性，希望保持代码库的精炼和文档的准确。

#### 8. 待处理积压

以下是一些值得维护者关注的重点事项，以避免它们阻碍后续开发：

- **高优先级技术债：**
    - **[Issue #7755](https://github.com/nearai/ironclaw/issues/7755)**：合并两个重复的 turn/subagent 词汇类型以清理技术债。该 Issue 明确标注 **“在 #7752 合并前不应落地”**，需关注其依赖的 PR #7752 的状态。
- **已提交修复方案但未合并：**
    - **[Issue #7767](https://github.com/nearai/ironclaw/issues/7767)**：自动化测试时区不稳定问题，已有对应的修复 PR **[#7774](https://github.com/nearai/ironclaw/pull/7774)**，需尽快安排合并。
    - **[Issue #7776](https://github.com/nearai/ironclaw/issues/7776)**：`memory.write` 的并发写入问题，虽无 PR 但已被讨论出解决方案，属于潜在的数据一致性隐患。
- **大型功能 PR 等待审核：**
    - **[PR #7711](https://github.com/nearai/ironclaw/pull/7711)**：WASM 工具响应规范化栈的最终 PR，属于大型功能（size: XL），需要重点审核以确保其正确性。
    - **[PR #7779](https://github.com/nearai/ironclaw/pull/7779)**：实现持久化用户沙箱的第二步（通过代理进行网络管理），与 Epic #7732 紧密相关，是 v1.4.0 的核心，需要投入足够资源进行验证和合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-21

> **数据的 GitHub 洞察报告** | 数据窗口: 2026-08-20 至 2026-08-21

---

## 1. 今日速览

LobsterAI 今日整体活跃度处于**中等偏稳定**状态。过去 24 小时新增 2 条 Issues（无关闭），PR 更新 7 条（其中 6 条已完成合并或关闭），无新版本发布。值得注意的是，今日流入的 7 条 PR 中**有 6 条来自 4 月份创建的"遗留分支"并已在今日集中合并**，表明维护团队正在进行一次**大规模历史 PR 清理与合并**。与此同时，有 1 条新开 PR（#1547）针对定时任务通知配置的 Bug 修复仍处于待合并状态，建议维护者优先跟进。Issue 方面，关于 AI 产物 Markdown 预览的功能请求（#1552）的对应 PR（#1553）已在今日合并，功能即将落地。项目整体处于**功能迭代收尾与稳定性修复并行**的推进节奏中。


## 2. 版本发布

**今日无新版本发布。**

> 提示：今日集中合并了 6 个历史 PR，建议维护者在功能验证完成后尽快切出新的 release 版本（如 `v0.x.y` 或 `beta`），以缩短用户获取修复的等待周期。


## 3. 项目进展

今日合并/关闭 6 个 PR（其中 5 个为历史遗留 PR 集中合并），推进了以下功能与修复：

| PR | 标题 | 状态 | 影响板块 | 要点 |
|---|---|---|---|---|
| [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | feat(cowork): Write 工具文件卡片及分屏预览面板 | ✅ 已合并 | Cowork / 文件预览 | **核心功能落地**：Write 工具后展示内联文件卡片（文件名、路径、类型、大小 + 操作按钮），支持右侧可拖拽预览面板（Markdown 渲染、HTML 沙箱、SVG、图片、代码高亮），并避免 Read 工具批量读取时产生卡片视觉干扰 |
| [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | fix(agent): sync activeSkillIds immediately when updating current agent's skills | ✅ 已合并 | Agent 技能管理 | 修复修改技能列表保存后，当前对话技能徽章不刷新的问题（Fixes #1502） |
| [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | feat(engine-overlay): 引擎启动超时后显示取消启动和查看日志按钮 | ✅ 已合并 | 引擎管理 | 引擎启动超过 30 秒后自动显示"取消启动"和"查看日志"按钮，避免用户等待 5 分钟硬超时无操作出口 |
| [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | fix: npm run dist:mac:x64 打包失败 | ✅ 已合并 | 打包 / macOS | 修复 macOS 系统不支持 `sha256sum` 导致打包失败的问题，在 build-openclaw-runtime.sh 中加入 `shasum` 兼容 |
| [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | feat(settings): 设置面板侧栏支持搜索筛选分类 | ✅ 已合并 | 设置面板 / UX | 设置侧栏新增搜索框，支持中英文关键词 AND 匹配 + NFKC 规范化，当前 Tab 被过滤时自动切换到第一个可见 Tab |
| [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | fix: 修复Agent编辑后点击原Agent无法切换回聊天界面的问题 | ✅ 已合并 | Agent 界面导航 | 修复编辑 Agent 后点击当前已选中的 Agent 无法从"我的Agent"返回聊天界面的问题 |

**开放中 PR（1 条）：**
- [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547)（OPEN）fix(scheduledTask): 修复定时任务通知渠道选择后无法改回"不通知"的问题 — 作者 gongzhi-netease，改动仅 +2 行，涉及 `TaskForm.tsx`，待维护者 review。

**综合结论**：项目今日通过合并历史 PR 完成了 **3 项功能迭代**（文件卡片预览、启动超时交互、设置搜索）与 **3 项稳定性修复**（Agent 技能同步、macOS 打包、Agent 界面切换），核心体验（写作/文档生成场景）与工程化（构建、导航）均有显著改善。


## 4. 社区热点

今日社区讨论热度总体较低，Issue 侧无高互动话题（评论数均 ≤2）。最值得关注的是功能请求 #1552（Markdown 预览），其评论区包含 1 条讨论，且**对应的实现 PR（#1553）已在今日合并**，属于"讨论-落地"快速闭环的典型案例。

- **[Issue #1552 — feat: AI产物 Markdown 预览及文件卡片支持](https://github.com/netease-youdao/LobsterAI/issues/1552)**（1 评论）
  - **诉求分析**：用户在使用 Agent 通过 Write 工具创建 Markdown/HTML 等文本文件后，无法在应用内直接预览文件内容，只能通过让 Agent 用 Read 读取后贴入聊天（占用对话空间）或手动切到文件管理器打开。**这反映出用户在写作、文档生成等高频场景中对"生成物即时可视化"的核心诉求**。该 Issue 已在今日通过 PR #1553 落地。


## 5. Bug 与稳定性

今日报告的 Bug 主要集中在以下几项，按严重程度排列：

| 严重程度 | 问题描述 | Issue/PR | 修复状态 |
|---|---|---|---|
| 🟠 中 | **定时任务通知渠道无法改回"不通知"**：用户将通知渠道从 IM（如飞书）改为"不通知"保存后，再次编辑时下拉框仍显示之前的 IM 渠道。根因来自 commit `61cfe60` 历史 bug，`delivery.mode` 为 `'none'` 时未正确处理 | [PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | ⚠️ **待合并**（+2 行修复，建议尽快 review） |
| 🟢 低 | **macOS x64 打包失败**：`npm run dist:mac:x64` 无法打出安装包，因 macOS 系统不支持 `sha256sum` | [PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555) | ✅ 已合并（shasum 兼容已加入） |
| 🟢 低 | **Agent 编辑后无法切回聊天界面**：编辑 Agent 后点击当前已选 Agent，仍停留在"我的Agent"界面 | [PR #1560](https://github.com/netease-youdao/LobsterAI/pull/1560) | ✅ 已合并 |
| 🟢 低 | **Agent 技能徽章不刷新**：修改技能列表保存后，当前对话的 Active Skill Badges 需要手动切换 Agent 才能更新 | [PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | ✅ 已合并 |

**建议**：重点关注 **PR #1547** 的合并状态，该修复涉及定时任务通知配置的数据一致性，影响日常任务调度体验，改动量极小（仅 2 行），建议尽快完成 review 并合并。


## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 当前状态 | 纳入下一版本可能性 |
|---|---|---|---|
| **Write 工具文件卡片 + 分屏预览面板**（Markdown 渲染、HTML 沙箱、SVG、图片、代码高亮） | [Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552) | 对应 PR #1553 已合并 | ✅ **已确定纳入**，即将在下一版本发布 |
| **引擎启动超时后的取消/日志操作** | [PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | 已合并 | ✅ 已落地，改善启动卡住时的用户体验 |
| **设置面板侧栏搜索筛选** | [PR #1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | 已合并 | ✅ 已落地，提升多 Tab 场景下的导航效率 |

以上三项均为已合并功能，预计将在下个版本统一发布。当前无新的未实现功能请求积压。


## 7. 用户反馈摘要

由于今日 Issue/PR 评论区互动较少（评论数均 ≤2），未能获取丰富的用户直接反馈。以下为从有限评论与 PR 描述中提炼的信息：

- **写作/文档生成场景的痛点**（来自 Issue #1552）：用户在使用 Agent 生成 Markdown/HTML 等文本文件后，**期望即时预览而非二次操作**。当前流程（Read 全文贴入聊天或切换文件管理器）占用对话空间且效率低，对应 PR 已合并，预期显著改善该场景体验。
- **启动卡住时无操作出口**（来自 PR #1546）：当 OpenClaw 引擎启动卡住（网络问题、编译缓存失效），用户只能等待 5 分钟硬超时，期间无法操作。该 PR 合入后提供"取消启动"与"查看日志"按钮，降低用户等待焦虑。
- **Agent 设置保存后 UI 反馈不一致**（来自 PR #1545、#1560）：多处 UI 状态未即时同步（技能徽章、Agent 切换），说明**用户对"保存后立即生效"的反馈一致性有较高期待**，相关修复已合入。


## 8. 待处理积压

以下为长期未响应或尚未解决的重要 Issue / PR，建议维护者重点关注：

| 类型 | 编号/标题 | 创建时间 | 最后更新 | 搁置时长 | 备注 |
|---|---|---|---|---|---|
| Issue | [#1556 — doc bug: IM机器人配置指南404](https://github.com/netease-youdao/LobsterAI/issues/1556) | 2026-04-08 | 2026-08-20 | **约 4.5 个月** | 文档链接 404，属于**用户文档体验**问题。建议尽快修复文档链接或补充 IM 机器人配置指南，避免影响用户接入 |
| PR | [#1547 — fix(scheduledTask): 定时任务通知渠道无法改回"不通知"](https://github.com/netease-youdao/LobsterAI/pull/1547) | 2026-04-07 | 2026-08-20 | **约 4.5 个月** | 修复 +2 行，改动极小。遗留时间较长，可能被忽略，建议本周内安排 review 后合入 |
| Issue | [#1552 — feat: AI产物 Markdown 预览及文件卡片支持](https://github.com/netease-youdao/LobsterAI/issues/1552) | 2026-04-08 | 2026-08-20 | ~4.5 个月 | ⚠️ **虽对应 PR 已合并，但 Issue 仍处于 OPEN 状态**，建议补充 comment 说明已由 PR #1553 修复并关闭，保持仓库整洁 |

> 另外注意：今日合并的 PR 中仅 #1545 标注了关联 Issue（Fixes #1502），其余 PR（#1546、#1553、#1555、#1557、#1560）均未关联对应 Issue。建议维护者在后续合并时补充关联信息，便于追踪与 release notes 自动生成。


## 附：数据统计汇总

| 指标 | 数值 |
|---|---|
| 新开 Issues | 2 |
| 已关闭 Issues | 0 |
| 新增 PR | 1（#1547） |
| 已合并/关闭 PR | 6 |
| 待合并 PR | 1 |
| 新版本发布 | 0 |

---

*数据来源: [LobsterAI GitHub 仓库](https://github.com/netease-youdao/LobsterAI)*
*统计周期: 2026-08-20 ~ 2026-08-21*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期**: 2026-08-21  
**数据窗口**: 2026-08-20 至 2026-08-21

---

## 1. 今日速览

Moltis 项目在过去 24 小时内保持中等偏高的活跃度：1 个安全相关 Issue 被关闭（#1177，CWE-306 认证缺失漏洞），8 条 PR 中有 4 条已合并、4 条待合并，并发布了 1 个新版本（20260820.01）。今日合并的 PR 集中在 WhatsApp 消息处理、认证安全加固和工具策略配置三个方向，其中 **#1216 修复了 Vault 解锁/恢复端点缺失认证的严重安全漏洞**，对应关闭了 #1177。整体来看，项目正处于安全加固和多通道体验优化的密集迭代期，维护者响应速度良好。

---

## 2. 版本发布

### Release 20260820.01

- **发布时间**: 2026-08-20
- **内容**: 常规滚动发布，包含当日合并的修复（详见下文"项目进展"）
- **破坏性变更**: 无明确标注
- **迁移注意事项**: 无特殊说明

---

## 3. 项目进展

今日 4 条 PR 被合并，重点推进了以下方向：

### 🔒 安全加固（优先级最高）

- **[PR #1216](https://github.com/moltis-org/moltis/pull/1216)**: 修复 CWE-306 — `POST /api/auth/vault/unlock` 和 `POST /api/auth/vault/recovery` 此前无需认证即可访问，远程未认证攻击者可暴力破解 Vault 凭据。修复后这两条路由纳入 `auth_gate` 保护。**直接关闭 Issue #1177**，属于高优先级安全补丁。

### 📱 WhatsApp 通道体验优化（3 条合并）

- **[PR #1217](https://github.com/moltis-org/moltis/pull/1217)**: 在 `mention_mode = "mention"` 的群组中，用户回复机器人消息时不再被误判为"未提及"。此前只有 @ 提及才会触发机器人响应，现在对消息的回复同样被视为寻址，**用户可在群聊中通过回复直接与机器人对话**。
- **[PR #1218](https://github.com/moltis-org/moltis/pull/1218)**: 移除硬编码的 push name "Moltis"。此前所有 WhatsApp 机器人（无论配置名称）在群聊中对外显示为 "Moltis"，现在自定义名称（如 "Ada"）可正确显示。
- **[PR #1219](https://github.com/moltis-org/moltis/pull/1219)**: 将 untrusted-turn 工具上限改为可配置。此前 #1170 引入的硬编码 deny-all 策略误伤了公共受众的 3 个工具注册，且导致工具策略层 4、5 在共享链接场景下不可达，现在可通过配置调整。

### 综合评估

项目在 24 小时内同时完成了**安全漏洞修复、WhatsApp 交互细节优化和策略配置灵活性提升**三个维度的推进，其中安全修复直接消除了一个远程可利用的认证绕过漏洞。整体项目向前迈进了"一个安全版本 + 多通道体验打磨"的一步，节奏健康。

---

## 4. 社区热点

今日无超高热度讨论（评论数均为 0），但以下 PR 值得关注：

### 待合并 PR 中的热点

- **[PR #1222 — fix(web): validate sandbox image requests](https://github.com/moltis-org/moltis/pull/1222)** (tsauvajon, 创建于 08-20)  
  沙箱镜像请求验证：用于容器/Dockerfile 的镜像引用和包名需经过校验，且包检查和镜像构建限制为仅操作员管理员可执行。这是对沙箱逃逸/供应链攻击面的主动防御，与今日安全修复主题一致。
  
- **[PR #1221 — fix(gateway): pin Snyk Agent Scan](https://github.com/moltis-org/moltis/pull/1221)** (tsauvajon, 创建于 08-20)  
  将技能安全扫描固定在 `Snyk Agent Scan 0.5.17`（通过 uvx），移除独立的 mcp-scan 回退并强制要求 uv。**意图明确：防供应链攻击**（依赖版本漂移风险）。

### 分析

这两条待合并 PR 均出自同一维护者（tsauvajon），方向均为**安全加固**，说明项目当前安全侧正在系统性地收口。社区对此类供应链安全改进的诉求（从 #1177 被积极修复可以看出）正在得到响应。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| 🔴 严重 | [#1177](https://github.com/moltis-org/moltis/issues/1177) | Vault 解锁/恢复端点缺失认证 (CWE-306)，任意远程未认证用户可暴力破解 | ✅ 已修复 ([PR #1216](https://github.com/moltis-org/moltis/pull/1216)) |
| 🟡 中等 | [PR #1222](https://github.com/moltis-org/moltis/pull/1222) | 沙箱镜像请求未验证（潜在代码注入面） | ✅ 已有修复 PR（待合并） |
| 🟢 轻微 | [PR #1221](https://github.com/moltis-org/moltis/pull/1221) | 安全扫描依赖未固定（供应链漂移风险） | ✅ 已有修复 PR（待合并） |
| 🟢 轻微 | [PR #1217](https://github.com/moltis-org/moltis/pull/1217) | WhatsApp 群聊回复消息被丢弃（功能性小缺陷） | ✅ 已合并 |
| 🟢 轻微 | [PR #1218](https://github.com/moltis-org/moltis/pull/1218) | WhatsApp push name 被硬编码为 "Moltis" | ✅ 已合并 |

**结论**: 无新增未修复的严重 Bug。所有已知问题均有对应处理。

---

## 6. 功能请求与路线图信号

今日无全新功能请求 Issue，但待合并 PR 中释放了明确的路线图信号：

| 信号 | 来源 | 说明 | 可能的下一版本方向 |
|------|------|------|-------------------|
| **沙箱输入严格化** | [PR #1222](https://github.com/moltis-org/moltis/pull/1222) | 镜像引用/包名需校验，限制为操作员管理员 | 安全加固 + Web 沙箱 |
| **依赖锁定策略** | [PR #1221](https://github.com/moltis-org/moltis/pull/1221) | 固定安全扫描工具版本，移除回退 | 供应链安全 |
| **跨平台 shell 钩子** | [PR #468](https://github.com/moltis-org/moltis/pull/468) | Windows 上使用 `cmd.exe /C` 替代 `sh -c`（已开放 5 个月） | 插件系统跨平台完善 |

**预判**: 若 #1221/#1222 在下一版本合并，Moltis 将在沙箱安全和供应链安全两个维度显著提升，适合强调安全性的企业用户场景。

---

## 7. 用户反馈摘要

今日 Issue/PR 评论极少（大部分评论数为 0），可提取的明确反馈如下：

- **（来自 #1177 已关闭）**: 用户 Practice100101 报告了 Vault 端点认证缺失问题，走完了 Preflight Checklist（搜索重复、使用最新版），但未能提供完整会话上下文 — 说明该用户对报告安全问题的流程较熟悉，属于偏技术型用户。
- **（来自 PR #1217 的修复动机）**: 用户在群聊中使用 `mention_mode = "mention"` 时，回复机器人消息被静默丢弃。此场景表明用户期望的交互模型是"回复即寻址"（与主流 IM 习惯一致），而非仅限 @ 提及。该行为已被修复，说明维护者重视真实交互体验。
- **（来自 PR #1218 的修复动机）**: 机器人自定义名称（如 "Ada"）在 WhatsApp 群聊中不生效，对外始终显示为 "Moltis" — 涉及品牌/身份一致性问题，已修复。

**总结**: 用户反馈集中于 WhatsApp 交互细节（提及/回复语义、显示名称）和安全问题，均为实际使用中遇到的问题，而非空泛建议。

---

## 8. 待处理积压

以下条目长期未合并/未更新，建议维护者关注：

### ⚠️ 长时间开放的 PR

- **[PR #468 — fix(plugins): use cmd.exe on Windows for shell hooks](https://github.com/moltis-org/moltis/pull/468)**  
  创建于 2026-03-23（**151 天**），至今状态仍为 OPEN。解决 Windows 平台 `sh -c` 不可用的问题，插件系统在 Windows 上的 Shell 钩子长期失效。尽管提交者提到测试通过，但一直未获合并。  
  **建议**: 若仍有 Windows 用户群，应优先合并或明确排期；若已放弃 Windows 插件钩子支持，应明确告知用户。

### 📋 其他观察

- 今日无长时间未响应的 Issue（#1177 在 21 天内从报告到修复闭环，响应速度优秀）。
- 仓库整体 Issue 积压情况不明，但今日活跃度显示维护者具备处理能力。

---

## 📊 项目健康度评估

| 维度 | 评分 (5分制) | 说明 |
|------|-------------|------|
| 维护响应速度 | ⭐⭐⭐⭐⭐ | 21 天内完成安全漏洞从报告到修复的闭环 |
| 社区活跃度 | ⭐⭐⭐ | 24h 内 1 Issue + 8 PR，但评论互动较少 |
| 代码质量 | ⭐⭐⭐⭐ | PR 附带测试与验证清单，格式检查通过 |
| 安全关注度 | ⭐⭐⭐⭐⭐ | 主动修复 CWE-306 + 供应链安全加固 |
| 积压处理 | ⭐⭐⭐ | 1 条 5 个月未合并的 PR 需要关注 |

**综合评级: 健康，处于积极迭代期** 🟢

---

*数据来源: Moltis GitHub 仓库 (github.com/moltis-org/moltis)，抓取时间 2026-08-21。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-21

> 数据来源: github.com/agentscope-ai/CoPaw (QwenPaw) | 统计周期: 2026-08-20 ~ 2026-08-21


## 1. 今日速览

项目保持**高活跃度**：过去 24 小时共产生 28 条 Issue 更新和 50 条 PR 更新，新开 PR 数量明显高于合并数（待合并 22 条 vs 已合并/关闭 28 条），说明项目正处于密集开发期。**v2.1.1-beta.1 正式发布**，主要包含 Console 编辑器体验优化和提供商标配日志降噪。值得关注的是，近期 Bug 报告呈现出**质量升级**趋势——多个 Issue 均附带了完整的根因分析（如网络恢复重连失败 #6932、流式中断不重试 #7162、embedding health check 超时 #7156），可见社区用户已深度参与问题定位；同时近期 Bug 从"能用"层面向"可靠"层面深化——会话因无法下载的图片链接而挂死 (#7110)、history.db 被撑爆至 7.6G (#7168)、网络抖动后无法自愈 (#6932) 等均属于生产环境的高频稳定性风险，这种反馈信号表明 QwenPaw 正在被更重度、更长时长的 Agent 任务所使用。本地模型、多模态、中文场景使用体验仍是最核心优化方向。


## 2. 版本发布

### v2.1.1-beta.1

- **发布链接**: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1
- **发布时间**: 2026-08-20
- **类型**: Beta

**更新内容**：
- feat(console): 改进编辑器标签栏在溢出时的导航体验
- fix(providers): 将速率限制器初始化日志级别降为低级别，减少日志噪音
- chore: 更新发布说明

**迁移注意事项**：
- 本版本为增量修复，无破坏性变更和特殊迁移要求。


## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 说明 | 状态 |
|---|---|---|
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | fix(file-handling): 下载器超时后继续回退链（wget→curl→urllib），修复 subprocess.TimeoutExpired 导致下载中断的问题 | 已合并 |
| [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | feat(console): 将应用、插件、技能市场的入口统一至 `/market` 页面，保留各自业务逻辑 | 已合并 |
| [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) | fix(envs): 损坏的 envs.json 不再被静默吞掉并被覆写，改为保留原文件 + 原子写入 | 已合并 |
| [#7166](https://github.com/agentscope-ai/QwenPaw/pull/7166) | fix(release): qwenpawmail MCP 拆分为独立 sidecar 可执行文件，降低主包耦合 | 已合并 |
| [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) | feat(console): 助手回复卡片新增 artifacts 展示 | 已合并 |
| [#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) | perf(drivers): 工作区启动时并发初始化持久化 Drivers，显著降低冷启动延迟 | 已合并 |

**整体判断**：项目在**稳定性修复**（下载回退、envs 损坏保护、并发初始化）和**前端体验**（统一市场页、编辑交互）两条线同步推进。v2.1.1-beta.1 的发布为小幅增量，更大的功能更新仍在汇聚中。


## 4. 社区热点

### 本周最热 Issue 分析与深层诉求

**#6921 — 多步任务执行中无提示停止（10 条评论）**
[链接](https://github.com/agentscope-ai/QwenPaw/issues/6921)

- **现象**：执行多步骤任务时，模型输出类似 "Now 2.1, 3.1, 3.2. Let me do all three." 后即停止，需用户说"继续"才继续执行
- **关键词**：多步执行、任务中断、自主性不足
- **背后诉求**：用户期望 Agent 在规划完成后能自主持续推进，而非"每走一步都要被推一下"。这与 Agent 自主决策边界有关（模型侧因素居多），社区已在 #6921 内展开 10 条讨论，暂无修复 PR。

**#7102 — 运行冻结超过 10 分钟（9 条评论）**
[链接](https://github.com/agentscope-ai/QwenPaw/issues/7102)

- **现象**：使用 glm 5.3 运行 QwenPaw Desktop 2.1.0 时界面冻结 5-10 分钟，无任何 token 输出
- **背后诉求**：本地模型作为后端时的可靠性问题。用户最终已关闭此 Issue（状态 CLOSED，可能是通过换模型绕开），但深层表达的是对开源模型整合稳定性的担忧。

**#6643 — 任务产出物建议按任务分目录存放（6 条评论）**
[链接](https://github.com/agentscope-ai/QwenPaw/issues/6643)

- **现象**：所有任务产出物堆积在 media 目录下，非常混乱
- **背后诉求**：随着任务增多，产出物文件管理成为显著痛点。核心是**工作区文件组织方式**的优化，建议按任务 ID 建子目录。当前仍 OPEN，社区有持续讨论。

### 最热 PR

**#6399 — 为 ReMeLightMemoryCard 添加 Reranker 配置 UI（已 OPEN 29 天）**
[链接](https://github.com/agentscope-ai/QwenPaw/pull/6399)

- **说明**：在 Agent Config 的可折叠面板中增加 Reranker 设置。虽评论数不多，但长时间保持开放状态本身就构成"热度"——维护者需关注其推进情况。


## 5. Bug 与稳定性

### 🔴 高严重程度

| Issue | 问题描述 | 状态 |
|---|---|---|
| [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) | recall_history 的 expand 将整段工具输出写入 conversation_history，同一区间被重复落库，导致 history.db 膨胀至 **7.6G**。根因指向 ToolResultCapMiddleware 的默认 token cap（3000）设置不当 | OPEN，无 fix PR |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | **网络短暂中断并恢复后无法自动恢复**，所有 LLM 请求持续报 httpx.ConnectTimeout，必须手动重启服务 | OPEN，无 fix PR |
| [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | 对话中出现无法下载的图片链接时，整个会话不可用，仅 /clear 可恢复 | CLOSED，由 PR #6371 修复（下载器超时回退） |
| [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) | 流式输出中途 httpx.ReadError 导致偶发 UNKNOWN_AGENT_ERROR，且 `_get_httpx_retryable()` 漏掉 ReadError 故不自动重试 | CLOSED（已有修复方案） |

### 🟡 中严重程度

| Issue | 问题描述 | 状态 |
|---|---|---|
| [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | embedding health check timeout **硬编码 5s** 无配置项，Ollama 后端已预热（~0.5s）仍超时（实际 10.4s），导致向量召回降级为 BM25-only | OPEN（相关 PR #7133 已提交修复） |
| [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) | 损坏的 envs.json 被静默吞掉，随后被覆写，所有存储的环境变量丢失 | CLOSED，PR #7135 已合并 |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手消息结束时间显示异常（实际耗时 2min 但显示几秒） | CLOSED |

### 🟢 低严重程度

| Issue | 问题描述 | 状态 |
|---|---|---|
| [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | video inline-media cap 硬编码 2MB，provider 的 max_inline_media_bytes 设置不生效 | CLOSED，PR #7061 已提交修复 |


## 6. 功能请求与路线图信号

### 可能进入下一版本的方向

| 功能 | Issue / PR | 判断依据 |
|---|---|---|
| **会话级思考模式（Thinking Off/Low/Medium/High）** | PR [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | 已有完整实现，含跨设备同步，预计在下个 minor 版本 |
| **工作区级常驻 Skills（always-on）** | Issue [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) + PR [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | 同日提出并提交 PR，开发者响应迅速，有望进入 v2.2 |
| **Agent 级跨会话记忆开关（Scroll）** | Issue [#7184](https://github.com/agentscope-ai/QwenPaw/issues/7184) | 与 #7182 同源（同作者），构成"记忆+技能"双特性组合 |
| **Qwen_Code 作为第三方 Agent 后端** | Issue [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181) | 明确表达对 ACP 的嫌弃，说明 QwenPaw 作为 harness 的使用方式更受欢迎 |
| **统一工具面板 + Web 服务预览 + 交互式终端** | Issue [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 3 条评论，复合型需求，属于较大的 Console 功能 — 短期落地可能性降低 |
| **钉钉群聊上下文模式（共享/隔离）** | Issue [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158) | 针对多用户群聊的上下文隔离需求，属于 Channel 增强方向 |

### 高频反复出现的方向

以下需求在过去数周内被**多名用户反复提及**，虽单个 Issue 讨论度不顶级，但总量持续增长，是明确的演变方向信号：

| 方向 | 涉及 Issue |
|---|---|
| **中文文件名保持**（上传/提示中） | #6453, #6734 等 — 用户持续强调"中文体验"优化 |
| **产出物目录管理**（任务级隔离） | #6643 — 多任务重度使用的工作流瓶颈 |
| **模型调度路由**（自动分发，替代单模型固定） | #6436 — 定位 Model Routing，适合轻量模型做快速任务 |


## 7. 用户反馈摘要

### 真实用户场景与痛点

- **重度任务执行者在长任务下的自主性受挫**：rerbin 在 #6921 中详细描述了"规划完下一步就停了"的现象，期望 Agent 能在规划后连续执行而非等待用户指令。说明 Agent 的"主动推进"能力是核心体验要素。
- **模型输出"看起来聪明，做起来迟钝"的割裂感**：#7102 用户因 GLM 5.3 冻结 5-10 分钟而被迫切换模型，构成隐性的模型兼容性流失。
- **国内网络环境下使用受阻**：#6974 用 VPN 后桌面客户端基本不可用（已 CLOSED，但反映网络代理穿透能力不足）；#7110 的"海外图片链接无法访问导致会话挂死"更说明问题已从不便升级为功能阻断。中文用户对国内网络下的可靠性诉求强烈。
- **文件命名与展示的中文本地化**：#6453 用户明确要求中文文件名在提示中不被转换成不可读字符，说明中文路径场景的实际使用频率很高。
- **桌面端 UI 交互细节**：多个用户（#6734、#7179）不约而同地建议"新建聊天"改称"新任务"、智能体切换下拉框压缩，侧面验证了 QwenPaw 的核心场景是**任务执行**而非聊天。

### 用户对修复速度的反馈

- #7102 已 CLOSED、#7110 已 CLOSED 且修复 PR 已合并 —— 用户对这两类阻断性问题处理满意。
- 但 #6921（多步停止）在 8 月 12 日创建、10 条评论后仍无官方响应或修复 PR，用户积极性可能受影响。


## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue | 创建时间 | 说明 |
|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 2026-08-12 | "多步任务执行中无提示停止" — 10 条评论，社区讨论热度高，但**无官方回复或修复 PR**，已持续 9 天 |
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 2026-07-24 | "自动模型路由" — 已 OPEN 近 28 天，虽仅 3 条评论，但功能价值高、需求明确，且作者 Hazemaan 给出的功能定位清晰。建议按月份定期评审讨论，若本季度不排期则给出超时结论或转移标签 |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 2026-08-03 | "按任务分目录存放产出物" — OPEN 18 天，6 条评论，持续有用户参与讨论 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | 2026-07-23 | "Reranker UI 配置面板" — OPEN 29 天，维护者 lecheng2018 已提交完整实现，但长时间未获 review |

### 📌 建议

1. **优先处理 #6921**：这是当前社区最活跃、但官方未响应的 Issue，建议至少给出一份模型层/后端的排查方向声明（即使不做修复承诺）。
2. **评审 #6399**：已实现且待 review 近 30 天，建议尽快安排 Review 后合入或明确暂停原因。
3. **关注 #7168（history.db 膨胀）**：若用户长期运行的 Agent 普遍出现该问题，可能影响真实交付口碑，建议作为稳定性核心项排期。

---

*本报告由 AI 生成，基于 GitHub 公开数据。所有链接指向 agentscope-ai/QwenPaw 仓库。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-21

---

## 1. 今日速览

ZeroClaw 今日维持**高热度的社区活跃度**。过去 24 小时产生 50 条 Issue 更新（新开/活跃 45 条，关闭 5 条）和 50 条 PR 更新（待合并 48 条，合并/关闭 2 条）。两大核心热点集中在**插件安全架构**（egress/SSRF 策略）与**新 RFC 讨论**（高风险 shell 命令确认层级）上。值得注意的是，**待合并 PR 积压严重**（48/50），且多数集中在 `risk:high` 的安全领域，维护者决策宽度可能成为短期瓶颈。无新版本发布。

---

## 2. 版本发布

**无。**

---

## 3. 项目进展

过去 24 小时关闭的 PR 数量有限（2/50），但从更大时间窗口看，**多个关键 PR 正处于活跃评审状态**，项目正推进以下方向：

**3.1 插件系统安全生态建设（重点方向）**
- **PR #9582 / #9584（stacked）**：由 JordanTheJet 提交的插件 egress 策略二阶段 + 三阶段（授予仪式）。强制所有 WASM 插件的 `wasi:http` 请求走宿主持有的策略门禁，并在 CLI 中增加基于 ADR-014 的授予以防凭证泄露。此为安全架构的重量级变更（size: XL）。
- **PR #10072**：SSRF 加固 `file_download` 工具，识别 NAT64 前缀的 SSRF 门禁（stacked on #10070）。

**3.2 配置模型迁移与修复**
- **PR #10033**（p1, risk:high）：修复 Discord/Slack/Matrix 等通道配置 `Default` 与 `serde(default=...)` 游移的隐患，使 Rust 通道默认值统一从 serde 默认取用。

**3.3 工具与运行时稳定化**
- **PR #9713**：历史裁剪事件暴露 token 审计信息（解决 #9619），提升可观测性。
- **PR #10177**：修复 agent-scoped cron 突变原子性。
- **PR #10198**：shell 方言断言平台自适应（测试修复）。

**3.4 通道/Gemini 实时语音**
- **PR #9772**：Telegram 群聊按用户隔离会话的开关。
- Issue **#8780** 的 RFC 收到 14 条评论，正在向 broker 契约方向演进。

> **整体判断**：项目正走向"插件为一切"的架构布局，安全加固维度走在最前端，而功能性发布节奏相对保守。

---

## 4. 社区热点

**讨论最激烈 Issue（评论量前五）：**

| Issue | 标题 | 评论数 | 链接 |
|---|---|---|---|
| #7155 | RFC: 高风险 shell 命令逐条确认层级 + Claude Code 风格命令策略（allow/ask/deny） | 23 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| #9487 | RFC: 运行时持有的会话 + 传输面适配器（ACP） | 22 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| #10118 | [Tracker]: Rust anti-slop 模式债务清理（307 处候选） | 16 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) |
| #6850 | RFC: 将记忆生命周期策略与存储后端解耦 | 14 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| #8780 | RFC: Gemini Live 实时语音对语音通道 | 14 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) |

**热点诉求分析：**

- **#7155**：社区对高风险命令干预机制需求迫切。作者已迭代三版修订（Revision 3），将范围收敛到 shell 策略契约，`status:accepted` 且 `risk:high`。反映出用户对 Agent 在 shell 场景失控的担忧。
- **#9487**：运行时所有权会话 + 传输适配器——指向 **ACP 与 ZeroCode 深度集成的架构路线**，被标记 `needs-maintainer-review`，需要维护者正式回应。
- **#10118**：Rust 反反模式治理（307 个 panic 候选点），虽然偏向工程质量，但 16 条评论说明**开发者对代码健壮性的焦虑开始显性化**。

---

## 5. Bug 与稳定性

**按严重程度排列的今日活跃 Bug：**

| 严重度 | Issue | 描述 | 状态 | 对应 Fix PR |
|---|---|---|---|---|
| **S1** | #9016 | OpenAI Chat Completions 拒绝 reasoning effort 导致工具调用轮失败 | **已关闭**（昨日内关闭） | — |
| **S2** | #10068 | 互动 Agent 会话上下文被硬性限制到 32k，忽略配置的 131072 | `in-progress` | 无 |
| **S2** | #10194 | PR 评审机器人发布结果晚于 PR 合并（竞态） | **已关闭** | — |
| **S2** | #10106 | 精确代理选择拒绝已支持的转录服务 | `in-progress` | 无 |
| **S3** | #10103 | ZeroCode Health 状态法语/西语标签对齐问题 | `in-progress` | 无 |

**稳定性点评：**  
- 最严重的问题 #9016 已关闭，阻断性问题暂不突出。  
- #10068 属于**配置预期与实际行为不符**的中度问题（`max_context_tokens` 未生效），在长会话/大数据场景下可能造成劣化体验。  
- #10194 是 CI 工具链竞态，虽已闭环，但会对 PR 合并后自动评论造成噪音。

---

## 6. 功能请求与路线图信号

**可能进入下一版本的信号较强的功能请求：**

| 功能 | 依据 | 可能性预测 |
|---|---|---|
| **按用户隔离的 Telegram 群聊会话** | PR #9772 活跃、待评审，属群聊协作刚需 | 高概率随下轮合并 |
| **SSRF 加固与 NAT64 前缀策略** | PR #10072 stacked，安全向 | 高概率 |
| **Gemini Live 实时语音通道** | #8780 RFC 已 2 次修订为 broker 契约，14 条评论 | 进入实现阶段的可能较高，需 maintainer 确认 |
| **Plugin 安装事务性恢复** | #10162 已接受，作为任务追踪 | 确定性中，改进体量小 |
| **流式响应默认开启（stream_mode=partial）** | #10166，`status:accepted` | 低风险小改动，可能快速合入 |
| **Stall watchdog 默认启用** | #10168，`status:accepted` | 同上，两个 "Feature" 成对出现 |
| **Agent 可移植性（导出/导入 bundle）** | #10069 | 处于早期 RFC，暂无 PR |

> **观察**：多个 'accepted' 的小型配置默认值改动（#10166/#10168）显示**项目正在逐步为用户体验做细节打磨**，下一版发布时大概率纳入配置默认值调整的集合。

---

## 7. 用户反馈摘要

**正面信号：**
- 用户对安全方向的投入反馈积极：高风险的 shell 策略（#7155）与插件权限模型（#8398）能持续滚动讨论，说明**安全设计对话有真实参与度**。
- #10162 与 #10168 表现出用户对 **CLI 工具日常交互的细节预期**（安装可恢复、卡死不挂起）——有一定工程素养的用户群。

**痛点/批评点：**
- **Windows 生态支持仍然薄弱**：  
  - #10111：`TaskDialogIndirect` 入口点未找到（桌面端启动失败，已关闭为重复 dupe）
  - #7910：Windows 自更新 swap/rollback 路径仍无测试覆盖（长期未解决，`p3`）
  - 这两个信号叠加说明 **Windows 兼容性仍是软肋**。
- **文档与实现漂移**：  
  - #10074 指出 SECURITY.md 记载的 CI 任务已被移除，文档不再反映现实。

---

## 8. 待处理积压

**长期未响应/搁浅的重要事项：**

| 类型 | 编号 | 标题 | 待办性质 |
|---|---|---|---|
| RFC | #6996 | 沙箱策略（文件系统+网络限制） | **等待作者行动（needs-author-action）**，已近 3 个月未迭代 |
| RFC | #8398 | 插件权限/配置/密钥模型开放式问题 | **等待作者/维护者+作者动作**，影响插件生态推进 |
| Bug | #4668 | MariaDB memory 后端支持 | 老牌需求（3月建），已被接受但无实现者，停留在 backlog |
| PR | #9341 | ZeroCode 会话隔离 surfaces | **do-not-merge** 标记 + `needs-author-action`，自 7/24 起待更，影响 ZeroCode 用户感知的会话行为 |
| PR | #9637 | 临时 React Router RSC exception 守卫 | **do-not-merge** + `needs-author-action`，`p1` 安全约束但滞留 3 周 |
| PR | #9678 | Git shell 策略参数加固 | p1 高风险 PR，等待作者动作，已经 19 天未推进 |
| Tracker | #8691 | ADR 基线恢复与审计 | 追踪器建置 1.5 月，待权威维护者启动 |

**重点关注提醒：**
1. **P1 级安全 PR 滞留**：`#9678`、`#9637`、`#9584` 均挂起 over 3 周。若这些属于安全关键路径，建议维护者优先调度。
2. **协调请求**：`#8692`（维护者决策队列）是一个信号——**RFC 决策延迟正在被社区感知**。

---

*日报生成时间：2026-08-21 · 数据来源：github.com/zeroclaw-labs/zeroclaw · 分析基于 GitHub issue/PR 元数据及讨论内容*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*