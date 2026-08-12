# OpenClaw 生态日报 2026-08-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-12 02:04 UTC

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

# OpenClaw 项目动态日报 — 2026-08-12

## 今日速览

过去24小时项目活跃度极高：Issues 更新 500 条（新开/活跃 385 条，关闭 115 条），PR 更新 500 条（待合并 274 条，已合并/关闭 226 条）。无新版本发布。社区讨论持续聚焦于**会话状态管理（session-state）**、**消息丢失（message-loss）** 和 **渠道投递可靠性** 三类顽疾。值得关注的是，上期遗留的 P0 级启动崩溃问题（#121675，2026.8.1-beta.1 插件缺失导致引导循环）已在今日关闭，标志着该高危问题已解决。整体来看，项目处于高吞吐、高关注的状态，但大量 P1 级问题仍处于 `no-new-fix-pr` + `needs-maintainer-review` 状态，维护者审阅压力显著。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日有 226 条 PR 被合并/关闭，以下为值得注意的合并或关闭项：

### 已合并/关闭的高价值 PR

- **[fix(windows): launch npm-installed native session CLIs](https://github.com/openclaw/openclaw/pull/122334)**（已关闭，P1）：修复 Windows 下 npm 安装的本地会话 CLI 启动问题——此前可能选择错误的 POSIX shim 或将 `.cmd` shim 路由到 `cmd.exe` 导致任意参数被错误解析。该修复涵盖 acpx、Anthropic、Codex、OpenCode 等多个扩展。

- **[feat: clone GitHub projects from session picker](https://github.com/openclaw/openclaw/pull/121818)**（已关闭，P1）：支持在会话选择器中直接克隆 GitHub 项目，补齐了 #121381 的一部分。

- **[improve(ui): quiet slash command menu hierarchy](https://github.com/openclaw/openclaw/pull/122237)**（已关闭，P2）：优化 Control UI 斜杠命令菜单的视觉层级，降低品牌红色对命令名称、图标、选中行的统一强调造成的视觉噪点。

- **[improve: speed up audit event writer tests](https://github.com/openclaw/openclaw/pull/122369)**（已关闭）：将审计事件写入测试从 39 秒降至合理水平，减少 CI 热点。

### 值得关注的已关闭 Issue

- **[#121675 P0: 2026.8.1-beta.1 因缺少配套插件导致启动引导循环](https://github.com/openclaw/openclaw/issues/121675)**：已关闭。该问题导致升级到 beta 版本后所有 `@openclaw/*` 插件无法解析，触发不可恢复的启动循环。关闭意味着该高危事件已解决。

- **[#92201 P1: Anthropic 思维签名在重放时不定期失效](https://github.com/openclaw/openclaw/issues/92201)**：已关闭。嵌入式 runner 在回放时遇到签名校验失败，恢复机制因错误文本通用化而未能触发。

- **[#92076 P1: 子代理完成投递在请求方会话非活跃时失败](https://github.com/openclaw/openclaw/issues/92076)**：已关闭。修复了会话被驱逐后完成回退路径尝试写入转录文件时导致投递失败的问题。

> 整体评估：项目推进明显，尤其是在 Windows 原生 CLI 启动、GitHub 项目克隆、UI 可访问性/视觉优化等方面有实质性改进。但大量长期存在的 P1 级可靠性问题（消息丢失、状态管理）仍未修复。

---

## 社区热点

### 讨论最活跃的 Issues

1. **[#121058 — Silent reply failures still recurring after #116277 closed — no queued reply payload](https://github.com/openclaw/openclaw/issues/121058)**（69 条评论）
   - 核心诉求：一个宣称已修复的静默回复失败问题仍在持续发生。监控 cron 在 issue 关闭后仍不断记录新事件。社区对"关闭即完成"的修复流程表示质疑。

2. **[#116201 — Realtime voice work can retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201)**（64 条评论）⚠️ 高度活跃
   - 核心诉求：实时语音会话的多个资源限制以"条目计数"或"取消信号"而非硬性所有权边界表达，导致慢速/突发 provider 行为下可以无限保留已取代的 consult 工作、大帧、预就绪音频等。被评为 🦞 diamond lobster 级。

3. **[#25592 — Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)**（46 条评论）⚠️ 高度活跃
   - 核心诉求：Agent 在工具调用之间产生的文本（错误处理、处理确认、叙述）被直接路由到消息渠道（Slack、iMessage 等）作为可见消息。这是显著的 UX 问题——内部处理输出泄漏给用户。

4. **[#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)**（43 条评论）
   - 核心诉求：为记忆条目打上基于来源（用户命令、网页抓取、第三方技能）的信任级别标签，防止通过不可信内容（网页、消息、第三方集成）隐藏恶意指令的记忆中毒攻击。

### 讨论最活跃的 PRs

所有 PR 评论数显示为 `undefined`，无法准确排名。但从标签判断，以下 PR 获得较多维护者关注：

- **[#122350 fix(gateway): keep model catalog reads responsive](https://github.com/openclaw/openclaw/pull/122350)**（P2, size: XL, status: 👀 ready for maintainer look）：修复打开 Control UI 或请求完整模型目录时可能消耗整个 Gateway CPU 核心、延迟 `/healthz` 并饿死渠道定时器的问题。大型迁移安装尤其容易受影响。

- **[#122176 refactor(state): retire commitments schema](https://github.com/openclaw/openclaw/pull/122176)**（P2, size: L, rating: 🦞 diamond lobster）：移除已废弃的 commitments 特性表结构。

> 分析：社区热点集中在**可靠性问题的反复出现**和**安全/隐私设计**两个维度。用户对"关了又开"的修复模式表示不满，同时对记忆安全和数据边界提出了更高要求。

---

## Bug 与稳定性

### 🔴 严重（P0/P1，高影响力）

| Issue | 问题 | 严重度 | 状态 |
|-------|------|--------|------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | **静默回复失败复发** — #116277 关闭后仍在发生，监控 cron 持续记录新事件 | P1, 69 评论 | 无 fix PR |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **实时语音会话无界保留 provider/consult 状态** — 资源限制是软性的，可无限积累 | P1, 64 评论 | `no-new-fix-pr` |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | **工具调用间文本泄漏到消息渠道** — 内部处理输出对用户可见 | P1, 46 评论 | `needs-security-review` |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | **Codex 长回复静默截断至 ~1000-1100 字符** — `stop=null, aborted=false` 无错误信息 | P1, 11 评论 | `no-new-fix-pr` |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **钩子/工具子进程泄漏** — 僵尸进程积累导致运行时劣化 | P1, 7 评论 | `needs-info` |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | **Cron 代理在 DeepSeek 上停滞** — `[cron:...]` 前缀导致 API 边缘低优先级服务 | P1, 7 评论 | `linked-pr-open` |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | **MCP loopback 传输在网关重启后不自动重连** — `recovered=1` 具有误导性 | P1, 9 评论 | `no-new-fix-pr` |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | **iOS/WebChat 消息追加到转录但不触发回复** — `--deliver` 无法投递 | P1, 9 评论 | `source-repro` |

### 🟡 中等（P1/P2，部分有 PR）

| Issue | 问题 | 状态 |
|-------|------|------|
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex Telegram 回合超时 — 反复执行工作但从不达到终端 `turn/completed` | `needs-live-repro` |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM 嵌入式运行中止 `memory_search` 工具调用 — 被误分类为超时 | `needs-live-repro` |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A `sessions_send` 回环调用导致重复消息 | `linked-pr-open` |
| [#42820](https://github.com/openclaw/openclaw/issues/42820) | Feishu 发送动作被 poll schema 污染，阻止文件发送 | `linked-pr-open` |
| [#80498](https://github.com/openclaw/openclaw/issues/80498) | 子代理完成通知可能过早或重复 | `source-repro` |

### 🟢 已解决（今日关闭）

- [#121675](https://github.com/openclaw/openclaw/issues/121675)（P0）— beta 发布缺插件引导循环：已关闭
- [#92201](https://github.com/openclaw/openclaw/issues/92201)（P1）— Anthropic 思维签名回放失败：已关闭
- [#92076](https://github.com/openclaw/openclaw/issues/92076)（P1）— 子代理完成投递失败：已关闭
- [#96827](https://github.com/openclaw/openclaw/issues/96827)（P1）— `message_tool_only` 模式不终止导致级联自回复：已关闭
- [#89315](https://github.com/openclaw/openclaw/issues/89315)（P1）— 网关堆无界增长致 cgroup OOM：已关闭
- [#92460](https://github.com/openclaw/openclaw/issues/92460)（P3）— Cron 完成通知丢弃显式 `delivery.channel`：已关闭
- [#91799](https://github.com/openclaw/openclaw/issues/91799)（P2）— Discord Agent 无法使用 MCP 工具：已关闭（标记 invalid）

> 总结：今日关闭了多个高影响问题（含 1 个 P0），但仍有大量 P1 级可靠性问题悬而未决。最令人担忧的是 [#121058](https://github.com/openclaw/openclaw/issues/121058)——**已关闭问题的复发**，以及 [#116201](https://github.com/openclaw/openclaw/issues/116201)——**实时语音的无界状态保留**，二者都获得了 60+ 条评论且无修复 PR。

---

## 功能请求与路线图信号

### 高热度功能请求

| Issue | 功能 | 热度 | 分析 |
|-------|------|------|------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **记忆信任标签（Memory Trust Tagging by Source）** | 43 评论 | 与 [#25592](https://github.com/openclaw/openclaw/issues/25592) 文本泄漏问题形成呼应——社区对安全边界和输入可信度日益关注 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | **可配置流式看门狗超时阈值** | 15 评论, 8 👍 | 长推理模型（kimi-k2.5, DeepSeek-R1）触发 30s 看门狗误报，需要可调配置 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | **Control UI 支持 MathJax/LaTeX** | 8 评论, 10 👍 | 科学/数学内容展示的基本需求 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | **网关级每代理成本预算强制** | 21 评论 | 运维侧对成本控制的需求，与现有 `session-cost-usage.ts` 相关 |
| [#13700](https://github.com/openclaw/openclaw/issues/13700) | **会话快照（/session save\|load）** | 6 评论 | 分支对话、A/B 测试提示词、回滚到已知良好状态 |
| [#55249](https://github.com/openclaw/openclaw/issues/55249) | **会话标签/昵称** | 5 评论 | 自动化生成的会话键难以辨识，UX 改进 |

### 可能纳入下个版本的功能（依据已有 PR）

| 功能 | 相关 PR | 状态 |
|------|---------|------|
| **设备配对一键粘贴** | [#120768](https://github.com/openclaw/openclaw/pull/120768) | 待合并（等待作者） |
| **模型快捷键按搜索焦点门控** | [#122316](https://github.com/openclaw/openclaw/pull/122316) | 待合并（就绪） |
| **键盘可达身份菜单底部控件** | [#122066](https://github.com/openclaw/openclaw/pull/122066) | 待合并（就绪） |
| **实时转录 WebSocket 子协议** | [#118977](https://github.com/openclaw/openclaw/pull/118977) | 待合并（等待作者） |
| **保留已解析图片（部分失败不全部丢弃）** | [#122361](https://github.com/openclaw/openclaw/pull/122361) | 待合并（等待作者） |

> 路线图信号：安全/信任（记忆标签、文本泄漏修复）、会话管理与可恢复性（快照、标签）、成本控制（预算）、以及长推理模型适配（看门狗超时）是当前社区呼声最高的方向。

---

## 用户反馈摘要

### 真实痛点

1. **"关闭即修复"的幻象**（[#121058](https://github.com/openclaw/openclaw/issues/121058)，69 评论）：用户报告监控 cron 在问题标记为已关闭后仍持续记录新事件，质疑修复是否真正有效。这反映了社区对修复质量的信任危机。

2. **内部处理输出暴露给用户**（[#25592](https://github.com/openclaw/openclaw/issues/25592)，46 评论）：Agent 在工具调用之间的叙述、错误处理文本被直接发送到 Slack/iMessage 等渠道。用户认为这是显著的 UX 问题——"内部处理输出、失败执行……应该被抑制"。

3. **长回复静默截断**（[#84516](https://github.com/openclaw/openclaw/issues/84516)，11 评论）：Codex/OAuth 代理的回复在 ~1000-1100 字符处被静默截断，`aborted=false`、`stopReason=null`，无任何错误提示。用户无法区分是模型问题还是系统问题。

4. **会话键难以辨识**（[#55249](https://github.com/openclaw/openclaw/issues/55249)，5 评论）：`agent:main:msteams:channel:19:44ff67b4064941d0b45ccba274c3e403@thread.tacv2` 这类自动生成的会话键对用户不友好。

5. **配置了历史限制却不生效**（由 [#119326](https://github.com/openclaw/openclaw/pull/119326) 提起）：多账户渠道的 `historyLimit` 和 `dmHistoryLimit` 被文档化了，但代码从未读取这些键——"文档告诉你设置了，但实际上没效果"。

### 用户满意点

- **[#122369](https://github.com/openclaw/openclaw/pull/122369) 审计事件写入测试加速**：社区对 CI 优化持积极态度。
- **[#122237](https://github.com/openclaw/openclaw/pull/122237) UI 斜杠命令菜单视觉优化**：解决了品牌红统一强调导致的视觉噪点问题。
- **[#122361](https://github.com/openclaw/openclaw/pull/122361) 图片部分解析失败不再全部丢弃**：之前"一张图读不了，全部图片都收不到"，修复后保留已解析图片。

### 使用场景

- **企业级多工作区部署**（[#122346](https://github.com/openclaw/openclaw/pull/122346)）：Enterprise Grid 安装中两个工作区使用相同 Slack 本地 ID 时策略误应用到错误工作区。
- **低成本模型适配**（[#121953](https://github.com/openclaw/openclaw/issues/121953)）：DeepSeek API 对 `[cron:` 前缀的请求给予低优先级服务，导致 cron 任务停滞数十秒至分钟。
- **长期运行部署的稳定性**（[#89315](https://github.com/openclaw/openclaw/issues/89315)，已关闭）：systemd --user 常年运行的网关堆无界增长，最终被 cgroup OOM 杀死。

---

## 待处理积压

### 长期未解决的高重要性 Issue

| Issue | 创建时间 | 天数 | 严重度 | 状态 |
|-------|---------|------|--------|------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) — 工具调用间文本泄漏 | 2026-02-24 | 170 天 | P1, 46 评论 | `needs-product-decision` |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — 记忆信任标签 | 2026-02-03 | 191 天 | P2, 43 评论 | `needs-product-decision` |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) — 工具 schema token 开销（~3,500 tok/会话） | 2026-02-12 | 182 天 | P2, 9 评论 | `no-new-fix-pr` |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — 每代理成本预算 | 2026-03-10 | 156 天 | P2, 21 评论 | `linked-pr-open` |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) — A2A sessions_send 回环重复消息 | 2026-03-08 | 158 天 | P1, 12 评论 | `linked-pr-open` |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) — 子代理会话持久且主会话无响应 | 2026-03-16 | 150 天 | P1, 10 评论 | 无 review 标签 |

> 说明：以上 Issue 均超过 4 个月未解决，其中多个为 P1 级且带有 `diamond lobster` 高影响力评分。特别是 [#25592](https://github.com/openclaw/openclaw/issues/25592)（文本泄漏）已存在近半年，虽有 46 条评论但仍在等待产品决策。

### 最近出现但被标记待审的 PR

- **[#122350 fix(gateway): keep model catalog reads responsive](https://github.com/openclaw/openclaw/pull/122350)** — size: XL, `👀 ready for maintainer look`，优化模型目录读取对 CPU 和健康检查的影响。
- **[#121327 fix(claws): freeze installed tool profile authority](https://github.com/openclaw/openclaw/pull/121327)** — size: XL, 涉及安全边界和可用性，`👀 ready for maintainer look`。

---

*报告生成时间：2026-08-12 | 数据来源：OpenClaw GitHub 仓库 (github.com/openclaw/openclaw)*

---

## 横向生态对比

# 个人 AI 智能体开源生态横向分析报告

**报告日期：2026-08-12**
**数据窗口：2026-08-11 ~ 2026-08-12（24 小时）**
**覆盖项目：14 个（含 4 个无活动项目）**


## 1. 生态全景

当前个人 AI 智能体开源生态正处于 **"从可用到可靠"的关键转折期**。头部项目（OpenClaw、Hermes Agent）日均处理 500 条 Issue/PR 更新，显示出极高的社区参与度，但大量 P1 级可靠性问题（消息静默丢失、会话状态管理）长期悬而未决，提示**核心稳定性仍是行业最大短板**。安全议题从边缘走向中心——API 密钥泄漏（NanoBot）、插件权限越界（CoPaw）、沙箱逃逸（ZeroClaw）等多起安全事件同日爆发，表明随着 Agent 功能深入生产环境，**安全边界设计已成为社区共识性刚需**。与此同时，"工具调用间文本泄漏"（OpenClaw #25592，170 天未解决）、"消息 ID 复用静默丢弃"（NanoClaw #3226"等跨项目反复出现的同类问题，揭示出一个系统性问题：**即时通讯渠道语义与 Agent 会话模型之间存在根本性的阻抗失配**，各项目虽在独立修补，但缺乏统一的理论框架和治理共识。生态整体呈现出 **"快速迭代、局部优化、共性难题待破"** 的阶段性特征。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | 新版本 | 健康度评估 |
|------|------------|---------|-------------|--------|-----------|
| **OpenClaw** | 500 条（新开/活跃 385，关闭 115） | 500 条（待合并 274，合并/关闭 226） | 226 | ❌ | 🟢 高吞吐，但维护者审阅积压显著 |
| **Hermes Agent** | 50 条峰值 | 50 条峰值（45 待合并） | 5 | ❌ | 🟡 桌面端严重回归问题密集，响应较快 |
| **NanoBot** | 6 条（新开 2，关闭 4） | 140 条（待合并 21，合并/关闭 119） | 119 | ❌ | 🟢 Issue 关闭率高，但大量 PR 因冲突被关 |
| **NanoClaw** | 1 条新开 | 8 条（合并 3，待合并 5） | 3 | ❌ | 🟢 核心团队主导，推进节奏快 |
| **IronClaw** | 22 条（活跃 13） | 50 条（待合并 25） | 25 | ❌ | 🟢 Reborn 重构为主线，QA 集中关闭 |
| **CoPaw** | 22 条（新开/活跃 9，关闭 13） | 48 条（待合并 23，合并 25） | 25 | ✅ v2.1.0-beta.3 | 🟢 迭代节奏稳健，社区反馈活跃 |
| **LobsterAI** | 4 条（关闭 3） | 10 条（合并 7） | 7 | ✅ 2026.8.11 | 🟡 活跃但 stale 关闭比例偏高 |
| **PicoClaw** | 3 条（新开 2，关闭 1） | 6 条（全部待合并） | 0 | ❌ | 🟡 合并瓶颈初显，4 条 PR 已 stale |
| **ZeroClaw** | 100 条更新 | 100 条更新 | 1 | ❌ | 🟡 RFC 定稿期，大量 PR 等待作者 |
| **Moltis** | 0 | 1 条（待合并） | 0 | ❌ | 🟡 低活跃，单一大型 PR 酝酿期 |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚪ 无活动 |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚪ 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚪ 无活动 |
| **LobsterAI**（补充） | — | — | — | — | — |

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态的绝对核心与风向标**，日均 500 条 Issue/PR 更新，远超第二名（IronClaw/CoPaw 约 50 条），其社区规模至少是同类项目的 5-10 倍。

| 维度 | OpenClaw | 同类对比 |
|------|----------|---------|
| **渠道覆盖** | 全渠道（Slack、iMessage、Discord、Telegram、Feishu、MSteams 等），且每个渠道有深度适配 | NanoBot、NanoClaw、PicoClaw 为 OpenClaw 的直接衍生/仿制，继承其渠道架构 |
| **技术路线** | 自研网关 + 嵌入式 runner + 插件体系（`@openclaw/*`），支持多 Provider 路由 | Hermes Agent 采用 Python 重写，更侧重本地优先；IronClaw 走 Reborn 内核化路线（ACP 协议） |
| **社区治理** | 维护者审阅压力大，大量 P1 问题处于 `needs-maintainer-review`；"关闭即完成"流程受质疑 | Hermes 社区对 Epic 重构参与度高；CoPaw/ZeroClaw 有明确版本节奏（v2.1 / v0.9） |
| **核心挑战** | 消息可靠性（#121058 复发）、实时语音状态无界（#116201）、工具调用间文本泄漏（#25592） | Hermes 受桌面端更新机制困扰；CoPaw 有中文 IME 崩溃；ZeroClaw 有沙箱逃逸 |

**关键判断**：OpenClaw 凭借先发优势和生态惯性占据主导地位，但其巨大的体量也带来维护瓶颈；衍生项目（NanoClaw、PicoClaw）通过聚焦特定场景（移动端、嵌入式）进行差异化竞争，短期内不太可能撼动 OpenClaw 的核心地位，但正在分流长尾需求。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 共性根因 |
|----------|---------|---------|---------|
| **消息可靠性与静默丢失** | OpenClaw（#121058 复发）、NanoClaw（#3226 ID 复用丢弃）、CoPaw（#6732 MCP 工具失效）、NanoBot（#5327/#5256 重复输出） | 消息不丢、不重、不静默；循环检测机制缺失 | Agent 会话模型与 IM 渠道语义的阻抗失配；修复后缺少回归验证 |
| **安全边界与信任** | NanoBot（#5306 shell 链绕过、#4784/4783 密钥泄漏）、CoPaw（#6916 插件静默建 cron）、ZeroClaw（#9883 WebP 无界解码、#9872 沙箱逃逸）、OpenClaw（#7707 记忆中毒） | 密钥隔离、白名单不可绕过、沙箱强隔离、插件权限审批 | Agent 功能深入生产环境后，安全设计从"加分项"变为"必选项" |
| **上下文与记忆管理** | OpenClaw（#116201 状态无界）、IronClaw（#7484 任务静默驱逐、#7485 token 双倍计）、ZeroClaw（#9535 压缩锚定窗口比）、OpenClaw（#14785 schema token 开销） | 上下文不丢失、token 开销可控、压缩策略可配置 | 长会话场景下上下文窗口管理成为体验瓶颈；长推理模型（kimi、DeepSeek-R1）加剧看门狗误报 |
| **跨渠道/多租户一致性** | Hermes（#34352 多租户）、OpenClaw（#122346 企业多工作区）、IronClaw（#7505 memory 跨提供商不一致）、PicoClaw（#3301 路由代理会话记忆丢失） | 路由规则不破坏会话语义、provider 间行为一致 | 多代理/多租户架构下，配置路由与数据隔离的复杂性超出初期设计预期 |

## 5. 差异化定位分析

| 项目 | 定位 | 目标用户 | 架构特征 | 关键技术优势 |
|------|------|---------|---------|-------------|
| **OpenClaw** | 全功能个人 AI 助手网关 | 开发者、深度用户、企业 PoC | 网关 + 插件 + 多渠道 | 最广渠道覆盖；最大社区；插件生态 |
| **Hermes Agent** | 本地优先、多 Agent 协作 | 注重隐私的开发者、桌面端用户 | Python 重写、原生长文 MCP god-file | 本地优先；长文 MCP；社区参与架构讨论（Epic #78647） |
| **NanoBot** | 轻量级聊天机器人框架 | 希望快速搭建 Bot 的开发者 | 极简 + 可嵌入 | 部署轻量；单文件集成 |
| **CoPaw (QwenPaw)** | 中文优先的全能桌面/Web 助手 | 中文用户、桌面端深度用户 | 桌面端 + 多渠道 + Apps 市场 | 中文体验好；公式渲染；统一市场（v2.1） |
| **IronClaw** | 可插拔内核架构（Reborn） | 企业级、需要自托管 | ACP 内核 + 外部 Agent Loop | 租约/密钥中介/审计；对自主 Agent 的强容器化 |
| **ZeroClaw** | 强安全、SOP 驱动的确定性 Agent | 安全敏感型企业 | RFC 驱动 + 策略即代码 | 沙箱隔离；SOP 控制面板；确定性执行 |
| **LobsterAI** | 类 Claude Code 的编程 + 协作助手 | 开发者、编程场景 | Claw 生态 + Cowork | Cowork 协作；思考级别个性化；本地文件交互 |
| **Moltis** | 个人数据中枢 | 隐私敏感用户 | 本地持久化 + 数据源连接器 | CalDAV 快照；本地全文搜索 |

## 6. 社区热度与成熟度

**第一梯队——快速迭代期（日更 ≥50 条）**：OpenClaw、Hermes Agent
- 特征：PR 吞吐量大，但维护者审阅积压严重；P1 问题堆积；社区讨论活跃但修复验证不足（"关闭即完成"）
- 判断：处于从"快速增长"向"质量巩固"过渡的转折点

**第二梯队——稳健推进期（日更 20-50 条）**：IronClaw、CoPaw、NanoBot、ZeroClaw
- 特征：有明确版本节奏（IronClaw Reborn、CoPaw v2.1、ZeroClaw v0.9）；安全/架构议题为主；QA 或测试驱动
- 判断：进入结构化发展阶段，路线图清晰，迭代质量优于速度

**第三梯队——功能积累期（日更 <20 条）**：NanoClaw、PicoClaw、LobsterAI、Moltis
- 特征：核心团队或少数贡献者主导；有高价值 PR 但合并节奏慢；社区讨论偏少
- 判断：处于"从原型到产品"的关键积累期，维护者响应速度决定社区去留

**第四梯队——静默期**：NullClaw、TinyClaw、ZeptoClaw
- 特征：24 小时无任何活动；可能为个人实验项目或已停止维护
- 判断：不建议依赖或投入

## 7. 值得关注的趋势信号

### 信号 1：安全从"功能"走向"底线"
NanoBot（shell 链绕过、API 密钥泄漏）、CoPaw（插件静默建定时任务）、ZeroClaw（WebP 解码 DoS、沙箱逃逸）在同一天爆发，这不是巧合——**Agent 一旦获得执行权限，安全边界设计就成为生存底线**。开发者应在设计初期即引入威胁建模，而非事后补救。

### 信号 2："消息不丢"是 Agent 可信度的第一块基石
OpenClaw（#121058 复发）、NanoClaw（#3226）、NanoBot（#5327/#5256）——三个不同项目、同一类问题：**用户无法区分"Agent 没理我"是模型问题、渠道问题还是系统缺陷**。建议社区层面推动统一的消息投递语义规范（如至少一次投递 + 明确回执），并建立回归测试机制避免"修了又犯"。

### 信号 3：上下文窗口管理成为体验竞争的胜负手
IronClaw 发现 token 估算器将有效上下文减半，OpenClaw 社区抱怨工具 schema 消耗 3500 token/会话，ZeroClaw 提出窗口比例锚定压缩——**在模型输入成本高企的当下，"省 token"就是"省 money"和"提速度"**。创新的上下文压缩、惰性加载、按需 schema 注入将极具竞争力。

### 信号 4："可插拔"与"确定性"在分化
IronClaw 的 Reborn（ACP 内核化）与 ZeroClaw 的 SOP（策略即代码）代表两种不同的治理哲学：前者通过开放协议吸收生态（让外部 Agent Loop 接入），后者通过强制策略锁定边界（确保行为确定性）。**开发者应根据自身对"灵活"与"可控"的偏好选择技术路线**。

### 信号 5：中国开发者力量正在快速上升
CoPaw 明确以中文用户为核心（处理 IME 崩溃、公式渲染、建议微信群），LobsterAI 来自网易有道，NanoBot/CoPaw 等均有中英双语社区活跃，且中文用户已成为 OpenClaw 生态的重要贡献者。**中文社区的本地化体验（字体、公式、输入法、IM 集成）正成为差异化竞争优势**。

---

*报告生成时间：2026-08-12 | 数据来源：各项目 GitHub 仓库公开数据 | 分析框架：横向对比 + 趋势研判*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-12

---


## 1. 今日速览

过去 24 小时 NanoBot 项目保持较高活跃度，**Issue 处理效率显著提升**（6 条中 4 条已关闭，关闭率 66.7%），但 PR 合并效率有所放缓（119 条合并/关闭，21 条待处理，待处理率 15%），存在一定的积压风险。值得关注的是，**安全问题**成为今日社区讨论的核心焦点：两条已关闭的安全类 Issue（#4784、#4783）牵出 API 密钥通过 `os.environ` 全局污染导致跨 Provider 泄漏的隐患，同时一条新提交的 `exec.allowPatterns` shell 链绕过漏洞（#5306）仍处于开放状态，尚未见对应修复 PR，需密切跟踪。此外，**消息重复输出类 Bug**（#5327、#5256）连续出现，社区反馈强烈。功能开发侧，MCP 凭据保留修复（#5338）、进程树终止修复（#5346）、WebUI 应用发现页重新设计（#5342）等 PR 值得关注。整体来看，项目在安全加固和稳定性提升方面仍有较大改进空间。


## 2. 版本发布

**今日无新版本发布。**

*(距离上个版本发布已有一段时间，结合多项安全修复和功能 PR 已合入主分支，建议维护者考虑规划新版本发布，以便让这些修复尽快触达用户。)*


## 3. 项目进展

今日合并/关闭的 PR 达 **119** 条，但值得注意的是，其中标注为 **[conflict]**（冲突）的 PR 数量较多，如 #2181（小米 MiMo 支持）、#1367（kimi-coding 映射）、#1321（Tavily 搜索支持）、#1199（fallback model）、#1114（cron hot reload）等。**[conflict] 标签通常意味着 PR 因长期未更新而产生合并冲突，或已被关闭**。这提示我们：大量早期有价值的功能贡献可能因维护者精力有限而未能及时处理，**这些 PR 今日被统一标记关闭，虽并非技术性合并，但可视为项目对积压 PR 的一次清理**。

在此基础上，今日真正被合并的有效 PR 包括：

- **#5346** — `fix(exec): terminate one-shot process trees on cleanup`
  修复一次性 `exec` 清理漏洞：超时、取消或异常错误时，仅杀掉了根 shell 进程，子进程仍会在后台存活运行。此修复有助于防止资源泄漏和潜在的恶意持久化。

- **#5344** — `fix(agent): warn instead of silently spiraling on repeated identical tool calls`
  为 Agent 工具调用循环增加重复检测，当模型反复调用相同工具、相同参数时发出警告，避免静默耗尽 `max_iterations` 预算。

- **#5341** — `fix(skills): make weather workflow Windows-safe`
  修复了 Windows PowerShell 下 `curl` 被解析为 `Invoke-WebRequest` 别名导致天气技能首次执行失败的问题。

- **#5328** — `feat(providers): add OrcaRouter as a named gateway provider`
  新增 OrcaRouter 网关 Provider 支持，统一接入 OpenAI、Anthropic、Google、DeepSeek、Qwen、MiniMax、xAI 等 150+ 模型。

- **#5338** — `fix(mcp): preserve credentials when OAuth store read fails`
  修复 MCP OAuth 存储读取失败被当作空存储处理的问题，防止后续更新覆盖其他服务器的凭据。

- **#5342** — `feat(webui): redesign apps discovery`
  重新设计 WebUI 应用发现页面，支持 Discover / Installed / All 视图，引入 curated Featured 批次（基于 nanobot.wiki registry + 离线缓存回退）。

整体来看，项目在 **Agent 循环稳定性**、**exec 进程管理**、**跨平台兼容性**、**WebUI 体验** 以及 **MCP 凭据安全** 等方面均有实质推进。但大量功能型 PR（新 Provider、新工具）的长期积压与关闭，表明项目维护者在**持续推进核心稳定性的同时，对新功能的接纳速度有所放缓**。项目正处于 **"稳定优先于扩张"的整合期**。


## 4. 社区热点

- **#5327** `[CLOSED]` [bug] Nanobot repeats multiple times the same message while reasoning（**10 条评论**）
  链接：https://github.com/HKUDS/nanobot/issues/5327

  今日评论数最高的 Issue。用户报告 Nanobot 在推理过程中随机重复输出同一句话（如 "Good points, let me investigate the issue"）。该问题已关闭，但官方未注明修复方式 —— 这可能意味着是模型端行为而非框架缺陷。

- **#5256** `[OPEN]` [bug] /goal message produces dozens of repeated replies（2 条评论）
  链接：https://github.com/HKUDS/nanobot/issues/5256

  与 #5327 高度相关：一条 `/goal` 消息产生了数十条近乎相同的回复，直到用户介入或模型自我识别为系统循环。该 Issue 仍为开放状态，且已有对应修复方案 **PR #5257** 处于待合并状态（该 PR 同样修复了持续目标在空闲轮次时的无界延续问题）。

> **分析**：消息重复输出已成为社区近期关注的核心痛点，反映出 Agent 在长轮次推理中仍存在**循环检测机制缺失**的问题 —— 好在 PR #5344 和 #5257 已对此进行针对性修复。


## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 | 修复 PR |
|--------|-------|------|------|---------|
| 🔴 严重（安全） | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell 链绕过，可通过 shell 链执行未授权命令 | **开放**（1 评论） | ❌ 无 |
| 🔴 严重（安全） | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Provider API 密钥通过全局 `os.environ` 突变在不同 Provider 之间泄漏 | **已关闭** | ✅ 已关闭（修复方案未在 Issue 中注明） |
| 🔴 严重（安全） | [#4783](https://github.com/HKUDS/nanobot/issues/4783) | CLI 子进程使用完整 `os.environ` 运行，导致 API 密钥泄漏给应用子进程 | **已关闭** | ✅ 已关闭 |
| 🟠 中等 | [#5327](https://github.com/HKUDS/nanobot/issues/5327) | 推理过程中重复输出同一消息 | **已关闭** | ✅ 疑似已修复 |
| 🟠 中等 | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` 消息产生数十条重复回复 | **开放**（2 评论） | ⏳ [#5257](https://github.com/HKUDS/nanobot/pull/5257) 待合并 |
| 🟡 轻微 | [#5333](https://github.com/HKUDS/nanobot/issues/5333) | OpenRouter Server Tools 支持缺失 | **已关闭** | ✅ 已在早期提交中实现 |

> **重点关注 #5306**：`exec.allowPatterns` 本意是安全限制机制，但 shell 链可绕过白名单检查，这是纯安全边界绕过漏洞。当前无修复 PR，且已公开披露，建议维护者优先处理。

> 好消息是，今日合入的 **PR #5346**（进程树终止）和 **PR #5344**（循环工具调用检测）将分别填补 exec 子进程残留和 Agent 死循环两个稳定性盲区。


## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 需求 | 潜力判断 |
|----------|------|------|----------|
| [#5333](https://github.com/HKUDS/nanobot/issues/5333) | Issue (closed) | 支持 OpenRouter Server Tools（Web Search、Web Fetch、Fusion 等） | 已在早期提交中实现，大概率已纳入主分支 |
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) | PR (open) | 新增 OrcaRouter 网关 Provider（150+ 模型单端点接入） | 已开放，功能完整，较可能被合入 |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) | PR (open) | 非 WebUI 渠道的 per-session 沙箱隔离 | 安全向增强，配合当前安全修复趋势，合入概率较高 |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | PR (open, conflict) | 子代理可配置不同模型预设（spawnPresets） | 存在冲突且已搁置 2 个月，合入不确定性高 |

**路线图信号**：当前项目的隐含优先级是 **安全加固 → Agent 循环控制 → 跨平台兼容 → Provider 生态扩张**。沙箱隔离（#5283）和 Provider 扩展（#5328）是下一阶段最可能被纳入的功能方向。


## 7. 用户反馈摘要

- **API 密钥泄漏是用户最关心的安全问题**（来自 #4784、#4783）：用户 hamb1y 深入分析了两个不同的泄漏路径——跨 Provider 的 `os.environ` 污染，以及在运行第三方 CLI 应用时完整的 API 密钥环境变量传递。这反映出用户在生产环境中对 **密钥隔离和最小权限原则** 的高度关注。

- **消息重复输出影响核心使用体验**（来自 #5327、#5256）：用户描述"随机出现"、"需要用户介入才能停止"，这表明循环检测机制的缺失会直接**侵蚀用户对 Agent 可靠性的信任**。

- **新功能需求持续旺盛**（来自 #5333）：用户对 OpenRouter Server Tools 的支持表达了明确期望，并以"感谢你创建了如此出色的项目"开场，体现了**社区对项目的高度认可与建设性参与态度**。

- **负面反馈较少**：整体而言，用户反馈以建设性 Bug 报告和功能期望为主，未出现对项目方向或维护节奏的批评性意见，社区氛围健康。


## 8. 待处理积压

**⚠️ 需要维护者关注的事项：**

| 类型 | 编号 | 描述 | 搁置时长 | 建议 |
|------|------|------|----------|------|
| 🔴 安全漏洞 | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell 链绕过 | 3 天 | **优先修复**，安全类问题不应积压 |
| 🟠 Bug 修复 PR | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | 持续目标空闲轮次无界延续修复 | 7 天 | 尽快合入，直接对应 #5256 开放 Bug |
| 🟡 长期 PR | [#4145](https://github.com/HKUDS/nanobot/pull/4145) | Weather Skill 综合修复（#3958） | 72 天 | 长期未合入，建议 review 或明确关闭 |
| 🟡 长期 PR | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | 子代理模型预设 | 62 天 | 已有冲突标记，需 resolve 或关闭 |
| 🟡 长期 PR | [#2181](https://github.com/HKUDS/nanobot/pull/2181) 等 | 多个 Provider 扩展 PR（小米、Kimi、Tavily、OpenCode Zen 等） | 3-6 个月 | 均为今日关闭的 conflict PR，建议评估是否值得 rebase 重新开放 |

> **特别提醒**：今日 119 条关闭的 PR 中，标注 `[conflict]` 的 PR 超过 10 条，且多数为社区贡献的功能型 PR（新 Provider、新工具）。如果这些 PR 因冲突被统一关闭，建议维护者筛选高价值 PR 主动 rebase 或指导贡献者更新，避免社区贡献流失。


*本报告由 AI 自动生成，基于 2026-08-12 的公开 GitHub 数据。如有偏差，欢迎指正。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是为您生成的 Hermes Agent 项目动态日报。

---

# Hermes Agent 项目动态日报
**报告日期**: 2026-08-12
**数据来源**: GitHub (NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 项目今日活跃度**极高**，核心聚焦于**稳定性修复**与**安全加固**。过去24小时内，Issue 与 PR 均达到 50 条的更新峰值，且大量 P1/P2 级别的严重 Bug（尤其是 Windows/macOS 桌面端网关更新后崩溃、静默死亡问题）被密集报告，社区对桌面端更新机制的不满较为集中。值得庆幸的是，社区响应迅速，针对这些关键回归问题（如 #83683、#84109）已有多项 fix PR 被提交。此外，代码库正在经历一场大规模的 **“god-file” 重构（Epic #78647）**，尽管该重构尚在早期，但已确立了“不允许回退”的硬性政策，表明项目在向更健康、更易维护的代码结构迈进。

---

## 3. 项目进展

**今日无新版本发布**。项目进展主要体现在对昨日及近期严重回归问题的快速响应和修复 PR 的提交上。虽然这些 PR 大多处于待合并状态（45/50），但它们清晰地指出了项目当前的修复方向：

- **桌面端网关生命周期修复**：针对 #83683（Windows 桌面端重启后网关被误杀且不重启）和 #84200（macOS 桌面端启动时 SIGTERM 掉 launchd 管理的网关），PR #83720 提出“绝不回收受监管网关”的修复策略，旨在彻底解决桌面端与后台网关的进程管理冲突。
- **会话状态回归修复**：针对 #84109（`/reset` 后创建的新会话在列表中不可见），PR #84198 提交了修复，旨在恢复因会话身份持久化改动（d2a4d373eb）而破坏的会话列表可见性。
- **安全漏洞修复**：PR #84199 修复了 `model_aliases` 配置中 API key 不被读取且可能跨提供商泄漏的问题（#83612）；PR #84203 修复了网关生命周期守卫中的两个绕过漏洞和一个误报。

---

## 4. 社区热点

今日社区讨论热度最高的议题揭示了开发者的核心诉求：

- **[Epic] 全仓库 God-File 分解 (#78647)**：以 **67条评论**高居榜首。开发者 `andrexibiza` 发起的这场史诗级重构（从 7000+ 行的 `mcp_tool.py` 等“上帝文件”入手）引发了关于代码架构、可维护性和模块化的广泛讨论。这反映了社区对于项目长期健康度的深切关注，以及对“扩展而非重复”设计原则的支持。
- **[Feature] 懒加载工具 Schema 以减少 Token 开销 (#6839)**：以 **38条评论**和 **18个 👍** 成为最受关注的功能请求。该 Issue 直击本地模型和 API 成本痛点（每次调用 3500-5000 Tokens 消耗），社区对此方案的讨论热烈，期望能显著降低推理成本和延迟，是提升项目经济性和实用性的关键需求。
- **[Feature] 解决多租户 Hermes 问题 (#34352)**：以 **25条评论** 持续获得关注。提出者已在生产环境运行数月的修复方案，核心是让内存操作绕过 Hook 系统以实现租户隔离。这个话题关乎 Hermes 从个人助手走向多用户、企业级应用的关键路径。

**链接**:
- [#78647 Epic: Shard all 20 god files](https://github.com/NousResearch/hermes-agent/issues/78647)
- [#6839 Lazy Tool Schema Loading](https://github.com/NousResearch/hermes-agent/issues/6839)
- [#34352 Solving the Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352)

---

## 5. Bug 与稳定性

今日报告了多个严重（P1/P2）回归和稳定性问题，主要集中在**桌面端（尤以 Windows 为重）**的更新与网关进程管理上：

**P1 严重问题：**
- **[Windows] 桌面端重启后网关被误杀且不重启 (#83683)**：导致微信/QQ/Telegram 等平台静默离线，属回归问题。**已有修复 PR #83720**。
- **[Windows] 更新后网关冷启动即静默死亡 (#84185)**：`hermes update` 后网关进程无日志、无 PID 文件即消失，需手动重启。**暂无明确的 fix PR**，情况紧急。
- **[macOS] 桌面端更新后网关被 SIGTERM (#84200)**：与 #83683 类似，但发生在 macOS 上，影响 launchd 管理的网关。**暂无明确的 fix PR**。
- **[通用] `/reset` 后新会话不可见 (#84109)**：会话列表（侧边栏、API）无法显示重置后创建的新会话，回归问题。**已有修复 PR #84198**。
- **[Windows] 桌面端更新后后台无法启动 (#83562)**：虽手动可启动，但 Desktop UI 报 `Hermes backend exited (0)`。**暂无明确的 fix PR**。

**P2 中等问题：**
- **[Feishu] 多路复用模式下 WebSocket 接收循环崩溃 (#73779)**：`Future attached to a different loop` 错误导致网关静默停止接收消息。**暂无明确的 fix PR**。
- **[通用] 后台进程完成通知被错误路由 (#83213)**：执行 `/new` 后，通知发到了错误的会话。**暂无明确的 fix PR**。
- **[通用] `browser_exec` 崩溃：`pydantic_core` 模块导入错误 (#83427)**：桌面端因 `PYTHONPATH` 指向 Hermes venv 导致依赖冲突。**暂无明确的 fix PR**。
- **[通用] 本地 TTS 编码错误 (#84102)**：Ogg/Vorbis 输出导致平台语音气泡静默降级。**暂无明确的 fix PR**。

**P3 低级别问题：**
- **看板查询数据库已关闭 (#83448, #84089)**：`hermes kanban show` 命令报错，已被标记为重复问题。

**结论**：项目当前面临的关键挑战在于**桌面端跨平台（尤其是 Windows）的更新与网关进程生命周期管理**。虽然已有针对部分问题的修复 PR，但仍有多项 P1 问题悬而未决，维护者需优先处理。

---

## 6. 功能请求与路线图信号

今日的功能请求展现了项目未来的演进方向：

- **将 Google Antigravity (原 Project Genie) 作为一等 OAuth 提供商 (#83244)**：社区希望通过官方渠道接入 Claude Sonnet 4.6、Gemini 3.x 等新模型。由于已有成熟的开源 OAuth 插件架构，此功能**很有可能被纳入后续版本**。
- **新增 OneBot 11 平台适配器 (#84202 PR)**：通过 NapCat/Lagrange 等桥接工具连接 QQ，绕过官方 Bot 平台的限制。该 PR 已提交，展示了对国内用户核心需求（QQ 机器人）的重视，**有望在社区 review 后合并**。
- **为插件系统增加富 OS 通知（带图标、按钮和 deeplink）(#84192 PR)**：旨在增强插件 UI 交互能力，提升用户体验，属于演进性功能。**可能被纳入下一版本**。
- **将“懒加载工具 Schema” (#6839) 作为优先事项**：虽然 Issue 已开放数月，但鉴于其巨大的 Token 节省潜力和社区高认可度（18 👍），它仍是**路线图上的重要候选功能**。

---

## 7. 用户反馈摘要

- **对 Windows 更新机制的强烈不满**：多条 Issue（#63717、#68760、#82186、#83562、#84185）反映了 Windows 用户在更新 Hermes Desktop 时反复遇到的痛苦，包括文件被锁定（WinError 32）、权限被拒（WinError 5）、更新后网关静默死亡等问题。用户反馈“更新即瘫痪”的体验严重影响了项目在 Windows 平台上的口碑。
- **对智能体成本与性能的敏感**：#6839 的讨论表明用户对 API 调用成本和本地模型推理延迟高度敏感，期望更高效的 Token 使用方式。
- **对突破平台限制的渴望**：#84202 等 PR 的提交，反映出用户希望绕过官方 API 限制（如 QQ Bot）以实现更自由、更可控的集成方式。
- **对代码库健康度的专业关注**：#78647 Epic 获得了 67 条评论，说明有经验的核心用户不仅关心功能，也高度关注项目的代码架构和长期可维护性，希望项目能持续健康发展。

---

## 8. 待处理积压

以下为长期存在或今日新增但尚未有响应/修复的重要问题，提醒维护者关注：

- **[Windows] `hermes.exe` 在更新时被锁定 (WinError 32) (#68760)**：创建于 2026-07-21，属 P2，已标记为重复但仍未解决，是 Windows 更新的核心阻碍之一。
- **[Windows] 桌面端后端使用 venv Python 持有 .pyd 锁 (#62792)**：创建于 2026-07-11，属 P1，长期未关闭。这可能是 #68760 等问题的根本原因，需要架构层面的改动。
- **[Windows/Desktop] 更新按钮报 WinError 5 权限错误 (#82186)**：创建于 2026-08-09，是对“Hermes-managed Node”特性引入的回归的反馈，需追溯该特性实现。
- **[Bug] 技能索引过期或退化 (#66616)**：自动化探针检测到索引过期，这是一个影响到文档站点的自动化维护问题，虽然严重度不高，但需要维护者检查 CI 流程。
- **[PR] fix(web): rotate PTY attach token on session switch (#62058)**：创建于 2026-07-10，今日被关闭，但可能未合并。需确认其状态——是被替代/放弃，还是已通过其他方式修复。

**链接**:
- [#68760 hermes.exe locked during update](https://github.com/NousResearch/hermes-agent/issues/68760)
- [#62792 Desktop backend holds .pyd locks](https://github.com/NousResearch/hermes-agent/issues/62792)
- [#82186 Desktop update button fails with WinError 5](https://github.com/NousResearch/hermes-agent/issues/82186)
- [#66616 Skills index is stale](https://github.com/NousResearch/hermes-agent/issues/66616)
- [PR #62058 rotate PTY attach token](https://github.com/NousResearch/hermes-agent/pull/62058)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：** 2026-08-12  
**数据窗口：** 2026-08-11 至 2026-08-12  
**数据来源：** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

过去24小时项目活跃度呈**中等偏上**态势：共产生3条Issue更新（2条新开/活跃、1条关闭）和6条PR更新（全部处于待合并状态），但**无新版本发布**。值得关注的是，今日新开的Issue #3328（LINE webhook配置项无效）在数小时内即获得对应修复PR #3329，体现了维护团队对社区反馈的快速响应能力。然而，6条待合并PR中有4条已被标记为 `[stale]`，其中 #3316 和 #3299 分别悬置9天和17天未获合并，提示项目当前**合并瓶颈已初步显现**——修复代码积压可能成为短期内的主要风险。

---

## 2. 版本发布

**本期无新版本发布。**  
上一个版本仍为 `v0.3.1`（提交 `2cf030d`），当前 master 分支已积累至少6条待合并PR，建议维护者评估是否需要在近期整理一次补丁版本（可覆盖路由会话上下文修复、customAllowPatterns修复及Exa搜索集成等项目）。

---

## 3. 项目进展

**今日无PR被合并或关闭**，但以下高价值PR仍在积压中，值得关注其推进状态：

### 核心修复候选
| PR | 标题 | 悬置天数 | 状态 | 价值评估 |
|---|---|---|---|---|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | 路由代理的上下文管理修复（历史、摘要、压缩、seahorse引导） | 9天 | `[stale]` | **高** — 解决dispatch rules路由后会话记忆失效的核心Bug，直接影响多代理场景的可用性 |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | 修复customAllowPatterns被默认拒绝规则覆盖的问题 | 9天 | 待合并 | **高** — 安全功能的核心配置项失效，可能导致用户在允许列表中加入命令却无法执行 |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | LINE channel webhook配置项无效：由"预置值"改为"警告提示" | 1天 | 待合并 | **中** — 本次窗口内新提交的PR，修复Issue #3328 |

### 功能增强候选
| PR | 标题 | 悬置天数 | 状态 | 价值评估 |
|---|---|---|---|---|
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 支持私有机器人聊天中的话题（forum topic） | 9天 | `[stale]` | **中** — 扩展Telegram渠道的适用场景 |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 在LLM响应调试日志中记录提示缓存token | 8天 | `[stale]` | **中** — 有助于开发者优化成本和调试缓存命中率 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 添加原生Exa网络搜索提供商 | 17天 | `[stale]` | **中** — 扩展web搜索能力，丰富工具生态 |

> **分析：** 项目整体处于"功能积累期"，但合并节奏未能跟上PR提交速度。4条 `[stale]` 标记PR悬置超过一周，若持续无维护者介入，社区的贡献意愿可能受到挫伤。

---

## 4. 社区热点

### 今日讨论热度最高：Issue #3301（3条评论）
**[BUG] /clear 与会话自动压缩在经由dispatch rules路由到非默认代理时失效**  
- 🔗 [Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)  
- **作者：** j-v | **更新：** 2026-08-11 | **创建：** 2026-07-29

**摘要：** 用户配置了dispatch rules将某代理路由至指定Discord频道后，发现该会话的 `/clear` 命令和自动压缩功能均不工作。作者在Raspberry Pi上运行PicoClaw v0.3.1，通过Discord和Telegram渠道使用DeepSeek模型。

**分析：** 该Issue与PR #3316 描述的是同一问题的两面（Issue报告问题，PR提供修复），表明已有社区成员主动承担了修复工作。**核心诉求是**：路由规则不能破坏会话级功能的一致性——用户期望无论走默认还是路由代理，会话管理行为保持一致。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度

**Issue #3328：`line.settings.webhook_host` / `webhook_port` 配置项被声明、赋予默认值、绑定环境变量，但没有任何代码消费它们**  
- 🔗 [Issue #3328](https://github.com/sipeed/picoclaw/issues/3328)  
- **报告：** 2026-08-11 | **评论：** 0 | **状态：** OPEN  
- **影响：** 配置项静默失效，用户设置后无任何效果且无警告，属**配置信任度**问题。若用户依赖LINE渠道的webhook配置（如自定义域名/端口），实际上线后可能遭遇回调失败。  
- **修复PR：** ✅ 已有 — [#3329](https://github.com/sipeed/picoclaw/pull/3329) 选择改为"警告提示"策略而非重新实现读取逻辑，是务实的处理方式，建议尽快合并。

**Issue #3301：路由代理的会话记忆/压缩功能失效**  
- 🔗 [Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)  
- **报告：** 2026-07-29 | **评论：** 3 | **状态：** OPEN  
- **影响：** 多代理场景下，经由dispatch rules路由的会话**完全丢失上下文管理**（无法 `/clear`、无自动压缩）。  
- **修复PR：** ✅ 已有 — [#3316](https://github.com/sipeed/picoclaw/pull/3316) 已提交修复，但悬置9天未合并。

### 🟡 中低严重度

**Issue #3294：`/list models` 仅显示当前模型而非所有已配置模型**（已关闭）  
- 🔗 [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294)  
- **状态：** 已于2026-08-11关闭（标记 `[stale]`）。该问题与 `/list models` 命令的预期行为（列出所有配置的模型）不符，但已被自动关闭，**其修复方案未能尘埃落定**，后续可能复现。

---

## 6. 功能请求与路线图信号

| 功能 | 来源 | 状态 | 信号强度 |
|---|---|---|---|
| **Exa原生搜索提供商** | [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | 待合并17天 | ★★★★ — 完整实现+配置+文档，极可能在下一版本合入 |
| **Telegram私有聊天话题支持** | [PR #3315](https://github.com/sipeed/picoclaw/pull/3315) | 待合并9天 | ★★★☆ — 修复明确，覆盖面有限 |
| **LLM缓存token日志** | [PR #3317](https://github.com/sipeed/picoclaw/pull/3317) | 待合并8天 | ★★★☆ — 低成本高回报的调试工具改进 |

**路线图信号：** 当前积压PR清晰指向三大方向：**①会话上下文管理健壮性**（#3316）、**②渠道适配扩展**（#3315、#3329）、**③工具/提供商生态丰富**（#3299）。其中 #3299 悬置时间最长（17天），若持续无人处理，可能面临"贡献者失去耐心→PR腐烂→功能性分叉"的风险。

---

## 7. 用户反馈摘要

从Issue评论中提炼的真实用户声音：

**正面反馈：**
- 用户在Issue #3301中主动定位问题并提供复现步骤，同时另一位贡献者（j-v）直接提交了修复PR #3316，体现了社区的自助修复文化。

**痛点与不满：**
- **配置无效无提示（Issue #3328）：** 用户指出webhook配置"被声明、被默认、被文档化，但无人读取"，批评这种模式容易让用户误以为配置已生效，实际却静默失效。**建议项目组增加"配置项消费校验"机制**，在启动时检测未被读取的配置并发出警告。
- **路由代理的会话记忆丢失（Issue #3301）：** 用户明确表达"dispatch rules不应破坏会话语义"的预期，这是对路由功能设计原则的重要反馈。
- **`/list models` 显示不完整（Issue #3294）：** 用户对命令名与实际行为不一致表达了困惑，该Issue虽已关闭，但反映出**CLI命令语义与用户预期之间存在的偏差**。

---

## 8. 待处理积压

以下项已超过一周未获维护者响应，建议及时跟进：

| 类型 | 编号 | 摘要 | 悬置时间 | 优先级建议 |
|---|---|---|---|---|
| PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa原生搜索实现 | **17天** | 🔴 高 — 完整实现长时间无维护者评论，有腐烂风险 |
| PR | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | 路由会话上下文修复 | 9天 | 🔴 高 — 对应Issue #3301被多次提及，修复不可缺席 |
| PR | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | customAllowPatterns修复 | 9天 | 🟠 中高 — 安全配置失效影响用户信任 |
| PR | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Telegram私有话题支持 | 9天 | 🟡 中 |
| PR | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 缓存token日志 | 8天 | 🟡 中 |
| Issue | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 路由会话压缩失效 | 已开放14天，3次讨论 | 🟠 中高 — 已有PR但未合并，Issue不宜久悬 |

---

*本日报由 AI 自动生成，数据截至 2026-08-12 00:00 UTC。建议维护团队优先处理 #3299 和 #3316 两条高价值 PR，避免社区贡献冷却。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-12** | **数据源：github.com/qwibitai/nanoclaw**


## 1. 今日速览

NanoClaw 过去24小时整体活跃度**中高**。虽然无新版本发布，但核心开发活动密集：共产生 1 条新 Issue 和 8 条 PR 更新，其中 3 条 PR 已合并/关闭、5 条仍在推进。值得关注的是，核心团队成员 @amit-shafnir 在 Agent 模板迁移（#3220）和远程 MCP 服务器支持（#3221）两条主线上均有连续动作，说明项目正在经历一次**平台能力升级期**（Agent Plugins 1.0.0 与远程 MCP 支持）。此外，一个可能造成**消息静默丢失**的 Issue（#3226）被报告，需要维护者优先排查。总体而言，项目处于功能迭代的活跃阶段，但稳定性问题开始浮现。

**活跃度评级：⭐⭐⭐⭐（4/5）**


## 2. 版本发布

过去24小时内无新版本发布。不过需关注 PR #3220（Agent Plugins 1.0.0 目录结构变更）一旦合并，将是一次**破坏性格式迁移**，现有模板用户需更新目录结构。


## 3. 项目进展

今日合并/关闭了 3 条 PR，集中在**连接器能力扩展**与**AI 提供商兼容性**方面：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | feat(providers): remote Streamable HTTP MCP servers for codex and opencode | ✅ 已合并 | 将远程 MCP 服务器支持扩展到 codex 和 opencode 提供商，补全了此前仅 Claude 支持的能力缺口，生态系统一致性提升 |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | feat: support remote Streamable HTTP MCP servers | ✅ 已合并 | 引擎层与 Claude 提供商支持远程 Streamable HTTP MCP 服务器（`{ type: 'http', url }`），标志着 NanoClaw 开始支持**非 stdio 的 MCP 传输方式** |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | feat: add Tavily MCP tool skill | ✅ 已合并 | 新增 Tavily 搜索工具的 MCP skill，扩展了代理可用的外部工具集 |

**点评：** 远程 Streamable HTTP MCP 支持从提案（#3092）到 provider 全量覆盖（#3221）在不到一个月内完成，说明核心团队对 MCP 生态的推进节奏非常果断。Tavily skill 的合入使 NanoClaw 的搜索能力得到增强。

与此同时，核心团队在 Agent 模板 → Agent Plugins 1.0.0 的迁移（#3220）和 setup wizard 流程（#2909）上仍在推进，这两项合入后将为项目带来一次重要的**模板体系升级**。


## 4. 社区热点

今日最受关注的议题集中在以下两点：

**① 消息静默丢失（Issue #3226）— 新开、1 条评论**

[Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226) 报告了一个严重但隐蔽的问题：当平台在同一个会话中**复用消息 ID**时，入站消息会被静默丢弃，既不到达 agent，用户也没有任何可见提示。报告者指出——从用户视角来看，这**与"agent 忽视了我"完全无法区分**。该 Issue 虽只有 1 条评论，但涉及消息可靠性这一核心体验，预计会迅速获得关注。

**② 模板系统迁移（PR #3220）— 核心团队主导的关键变革**

[PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) 将 agent 模板升级为 "Agent Plugins 1.0.0" 目录结构，附带 stamp-time 符号链接/权限/密钥加固。虽然这不是社区讨论热度最高的 PR，但其**技术影响面**最大，涉及格式迁移和目录结构变更，可能会引起所有使用模板功能的用户的关注。


## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 是否有修复 PR |
|---|---|---|---|
| 🔴 **高** | [#3226](https://github.com/nanocoai/nanoclaw/issues/3226)（Open） | **消息静默丢失**：平台复用 message ID 时入站消息被丢弃，用户无感知 | ❌ 尚无 |
| 🟡 **中** | [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195)（Open） | **升级非事务性**：NanoClaw 升级过程可能因中断而处于不一致状态 | ✅ 该 PR 即为修复方案，待合并 |
| 🟡 **中** | [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)（Open） | **数据库迁移缺口**：现有消息组 wirings 缺少 channel destinations | ✅ 该 PR 提供 migration 021 回填方案，待合并 |
| 🟢 **低** | [PR #2134](https://github.com/nanocoai/nanoclaw/pull/2134)（Open） | **launchd plist 缺失环境变量**：Apple Silicon + Colima 环境下 setup 可能失败（已挂起约 3 个月） | ✅ 该 PR 即为修复，但长期未合并 |

**重点风险提示：** 消息静默丢失（#3226）是当前最需要优先响应的稳定性问题。它不报错、不提示、无法从日志直接感知，会直接侵蚀用户对 agent 可靠性的信任。建议维护者尽快确认该行为的出现条件，并评估是否需要在平台适配层加入消息 ID 冲突检测与告警机制。


## 6. 功能请求与路线图信号

结合活跃 PR 与 Issue，以下能力可能被纳入下一版本：

| 信号 | 来源 | 说明 | 可能性评估 |
|---|---|---|---|
| **Agent Plugins 1.0.0（模板迁移）** | [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) | 模板功能升级为标准化插件目录结构，含安全加固 | ⭐⭐⭐⭐⭐ 核心团队主导，已在推进 |
| **Setup wizard + 首 Agent 模板引导** | [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) | 安装向导增加"如何创建第一个 agent"选项；模板加载器已在 #2890 落地 | ⭐⭐⭐⭐⭐ part 2/2，完成度高 |
| **远程 Streamable HTTP MCP 支持** | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) + [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | 引擎 + Claude + codex + opencode 已全面支持 | ⭐⭐⭐⭐⭐ 已全部合并 |
| **事务性升级机制** | [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195) | 升级失败可回滚，避免半更新状态 | ⭐⭐⭐⭐ 核心团队参与，逻辑明确，待合并 |
| **Tavily 搜索工具** | [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | 已作为 Utility skill 合入 | ✅ 已完成 |
| **消息 ID 去重/冲突处理** | [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226) | 平台复用 message ID 时的去重策略或至少可见告警 | ⭐⭐ 尚在讨论初期，需维护者介入设计 |

**路线图研判：** 项目当前明显聚焦于三条主线——MCP 协议兼容性、Agent 模板体系的正式化、以及稳定性修补。前两者可能在近期以一个小版本（如 v0.x 或 v1.x）的形式对外发布，而消息 ID 冲突处理则可能进入下一个迭代周期。


## 7. 用户反馈摘要

> **问题：** 当平台在同一个会话中复用了之前用过的消息 ID 时，入站消息会被静默丢弃，既到不了 agent，用户也看不到任何丢失的迹象。从用户角度来说，这看起来就是"agent 根本没理我"。
>
> —— [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226) 报告者 @dweekly

**分析：** 这不仅是技术 bug，更是对**用户信任**的直接伤害。"agent 忽略了我"是用户对 AI 助手最糟糕的体验之一，而当这一体验源于底层消息传递缺陷时，用户会错误地归因于 agent 本身能力不足或平台"不爱搭理人"。建议在修复之外，考虑至少在调试日志中提供可见的丢弃记录，帮助用户区分"agent 未响应"与"消息在管道中丢失"。


## 8. 待处理积压

以下事项长期未得到维护者响应，建议关注：

| 项目 | 创建时间 | 悬置时长 | 说明 |
|---|---|---|---|
| [PR #2134](https://github.com/nanocoai/nanoclaw/pull/2134)（Open） | 2026-04-29 | **~3.5 个月** | Apple Silicon + Colima 环境变量的 launchd plist 修复。Mac 用户基数庞大，该问题可能影响新用户首次 setup 成功率，建议尽快处理 |
| [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)（Open） | 2026-07-02 | **~6 周** | Setup wizard 的 pr 2/2 已处于 Review 阶段，今日有更新，预计近期将有进展 |
| [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)（Open） | 2026-07-28 | **~2 周** | DB migration 021 回填 destinations，有一定技术风险，需 core team review |

**维护者建议：** #2134 已挂起超百日，若该修复方向不再适用于当前架构，建议明确关闭并说明原因，或指派 reviewer 重新评估；长期悬挂的 PR 会抑制外部贡献者的积极性。


## 健康度总结与关键观察

**总体判断：** NanoClaw 目前处于**功能快速迭代 + 基础设施升级**的阶段。远程 MCP 支持已完成全 provider 覆盖，模板系统正在经历 1.0 化的结构性变革，稳定性补丁也在持续推进。

**需要关注的风险：**
1. **消息静默丢失（#3226）**——最需要优先响应的用户可见可靠性问题
2. **长期悬挂的外部 PR（#2134）**——维护者响应不及时可能影响社区贡献意愿
3. **模板迁移（#3220）的破坏性**——合入前需明确迁移文档与兼容方案

---

*本日报由 AI 自动生成。所有数据均来自 NanoClaw GitHub 仓库公开信息。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-12

## 1. 今日速览

IronClaw 过去 24 小时保持高强度迭代：共处理 22 条 Issue（13 条活跃）和 50 条 PR（25 条待合并），无新版本发布。核心开发力量集中在 **Reborn 架构演进** 上，围绕 Agent Loop 内核化（#7482）、上下文窗口管理（#7484、#7504）、认证与密钥安全（#7509）以及存储 profile 无关化（#7456）展开系统性重构。值得关注的是，**8 个来自 QA 的 bug 被统一关闭**，其中多个涉及 Agent 幻觉问题（虚假声称已连接 GitHub/Telegram/自动化状态），表明团队正在集中整治 Reborn 分支下的可靠性短板。整体项目健康度良好，长期积压的 P0 任务（如 Anthropic 缓存优化 #6984）已随 PR #6997 关闭，路线图推进节奏清晰。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共有 **25 条 PR 被合并/关闭**，以下是推进核心路线图的关键贡献：

### 🏗️ Reborn 架构演进
| PR | 内容 | 意义 |
|---|------|------|
| [#7471](https://github.com/nearai/ironclaw/pull/7471) | **租约过期恢复安全运行** — 隔离进程日志心跳池，仅在可重放检查点恢复过期运行 | 提升数据面稳定性，避免租约过期导致的安全运行被误杀 |
| [#7470](https://github.com/nearai/ironclaw/pull/7470) | **修复无投影元数据的线程索引行不可列出** — 恢复 sidebar 中缺失的线程 | 修复了 `list_threads` 中持久化但不可见的幽灵线程 |
| [#7514](https://github.com/nearai/ironclaw/pull/7514) | **启用 Railway hosted volume profile 的沙箱 shell** | 为托管卷配置提供 shell 能力，补齐部署选项 |

### 🔧 核心 Loop 修复
| PR | 内容 | 意义 |
|---|------|------|
| [#7503](https://github.com/nearai/ironclaw/pull/7503) | **保留被接受的任务跨上下文窗口驱逐** — 钉住用户任务消息，超限时抛 `BudgetExceeded` 而非静默丢失 | 直接解决 #7484 中"任务被静默驱逐"的最严重症状 |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | **Anthropic 显式 cache_control 断点（双传输通道）** — 关闭了 P0 #1（#6984） | 两处传输通道均不再依赖自动缓存，OAuth 通道从此也具备缓存控制能力 |

### 🎨 WebUI 体验
| PR | 内容 |
|---|------|
| [#7480](https://github.com/nearai/ironclaw/pull/7480) | **左侧导航长对话标题悬停显示** — 新增 `MarqueeText` 组件，超出视口时滚动展示完整标题（关闭 #7481） |

---

## 4. 社区热点

今日讨论最活跃的 Issues/PRs：

| 条目 | 讨论热度 | 诉求分析 |
|------|---------|---------|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) Epic: **可插拔 Agent Loop — ACP 执行器、边缘凭据注入、内核架构** | 3 条评论，risk: high | 这是 **Reborn 路线图的战略核心**：IronClaw 定位为"内核"（调度、租户、密钥中介、审计），而 Agent Loop 和工具代码将交给 **现成的 ACP 代理**（如 Claude Code CLI）。社区关注点在于：这会如何改变现有依赖铁爪内置 Loop 的用户的迁移路径，以及内核与外部 Loop 之间的能力鸿沟如何填补 |
| [#7505](https://github.com/nearai/ironclaw/issues/7505) **Memory target-alias 解析属于契约层，应移到领域层** | 1 条评论 + 对应 PR #7512 | 两个内置 memory provider（native 和 mem0）复用同一 prompt，但只有 native 正确解析 `target:` 别名，mem0 将 `target: "memory"` 原样存储导致跨会话记忆失效。社区反馈指向 **多提供商一致性问题** |
| [#7484](https://github.com/nearai/ironclaw/issues/7484) **上下文窗口静默驱逐任务 — 钉住用户消息、压缩后驱逐、重审 128 条上限** | 1 条评论 + 对应 PR #7503/#7504 | 128 条消息硬上限在三个独立位置被硬编码，长对话中**用户最初的任务指令被静默丢弃**，导致模型"忘记"用户要求。社区关注点：强制压缩的方式（PR #7504）是否会造成意外的信息丢失 |

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 — 但已有修复 PR
| Issue | 问题描述 | 修复 PR |
|-------|---------|---------|
| [#7505](https://github.com/nearai/ironclaw/issues/7505) | **Memory 跨提供商不一致**：mem0 不解析目标别名，`MEMORY.md` 读取永远找不到 | [#7512](https://github.com/nearai/ironclaw/pull/7512) 已提出 |

### 🟠 中高 — 活跃处理中
| Issue | 问题描述 | 状态 |
|-------|---------|------|
| [#7484](https://github.com/nearai/ironclaw/issues/7484) | **上下文窗口静默驱逐任务** — 128 条上限硬编码，长对话丢失用户指令 | PR #7503（已合并）、#7504（待合并）双管齐下 |
| [#7485](https://github.com/nearai/ironclaw/issues/7485) | **Token 估算器双倍计 ASCII** — `max(chars/4, bytes/2)` 对 ASCII 文本按 2 chars/token 计算，实际有效上下文窗口**减半**；两个估算器结果不一致 | 未分配 |
| [#7486](https://github.com/nearai/ironclaw/issues/7486) | **类型化无进展逃逸误杀幂等操作** — 输出哈希将轮询/读操作标记为 `NoChange`，长运行被提前终止 | 未分配 |
| [#7490](https://github.com/nearai/ironclaw/issues/7490) | **`retry_disposition()` 表格是死代码** — 约 25 个瞬时故障类别未接线，静默重驱动不生效 | 未分配 |

### 🟡 中低 — 已修复或关闭
| Issue | 问题描述 | 状态 |
|-------|---------|------|
| [#7487](https://github.com/nearai/ironclaw/issues/7487) | `tool_search` 标记工具已披露但未返回 schema，解除 describe-first 保护 | ✅ 已关闭（修复已合入） |
| [#7488](https://github.com/nearai/ironclaw/issues/7488) | 披露桥工具硬编码 `Exclusive` 序列化，批量搜索被丢弃 | ✅ 已关闭（修复已合入） |
| [#7294](https://github.com/nearai/ironclaw/issues/7294) **P1** | Agent 谎称"已有 Telegram 例程" | ✅ 已关闭（QA bug，系列修复） |

### 🟢 低 — 体验问题
| Issue | 问题描述 | 状态 |
|-------|---------|------|
| [#7508](https://github.com/nearai/ironclaw/issues/7508) P2 | GitHub MCP 扩展启动时给出令人困惑的端点验证提示 | 未分配 |
| [#7481](https://github.com/nearai/ironclaw/issues/7481) | 长对话标题无法通过悬停查看 | ✅ 已关闭（PR #7480） |
| [#7483](https://github.com/nearai/ironclaw/issues/7483) | 默认 NEAR AI 连接/模型探测未使用认证会话 | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

### 可能进入下一版本的功能
| Issue/PR | 功能 | 判断依据 |
|----------|------|---------|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) Epic: **可插拔 Agent Loop**（ACP 执行器） | 新增 `ironclaw serve --acp --stdio` 命令（PR #7513）已开放 | 这是 **Reborn 路线图的北极星**，PR #7513 是新贡献者提交的 ACP stdio 支持，表明已在落地 |
| [#7496](https://github.com/nearai/ironclaw/issues/7496) **IdentyClaw Passport 宿主中介** | 让无 shell 的安全默认 profile 也能使用 Passport | 独立功能请求，当前无对应 PR，但触及身份/信任相关主题 |
| [#7517](https://github.com/nearai/ironclaw/issues/7517) **Cloud.near.ai 支持 Google/GitHub 登录后的 staking** | 用户要求通过 Google/GitHub 登录也能为推理质押 | 新需求，涉及支付/钱包集成，优先级待评估 |

### 路线图信号 — 明确进入 v1.3.0 的 Epic
- [#7405](https://github.com/nearai/ironclaw/issues/7405) **改进延迟工具发现**（已关闭 — 完整签名 + 命名空间感知的目录预览）
- [#6879](https://github.com/nearai/ironclaw/issues/6879) **自动化运行质量**（未关闭 — 触发→运行管道结构性缺陷，小模型（DeepSeek V4 Flash）上问题尤甚）
- [#7038](https://github.com/nearai/ironclaw/issues/7038) **Storybook + AI 优先设计系统** — PR #7498（自动化建议卡片 V1 后端）已为其贡献了一个模块

---

## 7. 用户反馈摘要

### 核心痛点：Agent 幻觉 / 状态误报
从 QA 提交的 3 个 P1 bug（#7246、#7247、#7294）可以看出，用户（QA 测试者）反复遇到 Agent 在未实际检查的情况下**虚构已连接状态** — 声称"GitHub 已连接"、"Telegram 例程已在运行"、自动化"正在发送"，而实际后端状态为空。这属于**系统性信任问题**：模型在没有验证信号的情况下过度乐观。这些 bug 已在今日集中关闭，但背后的架构根因（无中间件强制状态检查）值得持续关注。

### 功能缺口：连接与钱包的耦合
来自 [#7517](https://github.com/nearai/ironclaw/issues/7517) 的真实用户反馈：**使用 Google/GitHub 登录 Cloud.near.ai 后无法进行推理质押**。"Sign in with NEAR" 仅作为登录方式而非可附加的钱包，Stripe 又不能用于质押。用户需要一个**将 NEAR 钱包附加到现有 OAuth 账户**的路径。

### 社区认可方向
- [#7483](https://github.com/nearai/ironclaw/issues/7483) 的成功修复（默认连接探测改用认证会话）解决了**新用户开箱体验**的痛点 — 用户打开内置 NEAR 提供方对话框时不应因留空 API key 而失败。
- PR #7480（悬停显示长标题）回应了 WebUI 用户对**信息可发现性**的需求，虽然是小改进但直接影响日常使用。

---

## 8. 待处理积压

### 长期未响应（>7 天）的重要 Issue
| Issue | 创建时间 | 关键性 | 备注 |
|-------|---------|--------|------|
| [#5910](https://github.com/nearai/ironclaw/pull/5910) PR: **在通知打开时水合批准门** | 2026-07-10（33 天） | 涉及 WebUI 订阅路径上的批准门传递 | 已有回归测试，但等待 Reborn 相关改动合入后再合并，建议维护者明确时间表 |
| [#6879](https://github.com/nearai/ironclaw/issues/6879) **自动化运行不可靠** | 2026-07-29（14 天） | **v1.3.0 Epic** — 同一条存储提示词有时成功有时返回无内容，小模型尤甚 | 2026-08-11 无新评论，审计结论（触发→运行管道结构性缺陷）尚待落地 |

### 高优先级但尚无 PR 的 Issue
| Issue | 问题 | 影响 |
|-------|------|------|
| [#7485](https://github.com/nearai/ironclaw/issues/7485) | Token 估算器双倍计 ASCII | **有效上下文窗口减半**，直接影响所有长度敏感任务的模型输出质量 |
| [#7490](https://github.com/nearai/ironclaw/issues/7490) | `retry_disposition()` 死代码 | **瞬时故障静默重驱动不可用**，影响长任务稳定性 |
| [#7486](https://github.com/nearai/ironclaw/issues/7486) | 类型化无进展逃逸误杀幂等操作 | 合法长轮询/读取任务被静默终止 |

### ⚠️ 维护者提醒
- [#7516](https://github.com/nearai/ironclaw/pull/7516)（新贡献者 PR，XL 规模）和 [#7513](https://github.com/nearai/ironclaw/pull/7513)（新贡献者，ACP 命令）为 **first-time contribution**，建议在 Reborn 合入窗口关闭前安排 review，以保持新贡献者参与度。
- [#7365](https://github.com/nearai/ironclaw/pull/7365)（memory-save 引导 + MEMORY.md 常驻提示，修复跨会话记忆丢失）已开放 5 天且对应 issue #7185，建议尽快合入 — 这是用户最直接可感知的记忆功能改进。

---

*报告生成时间：2026-08-12 | 数据源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | 统计口径：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-12

> 项目健康度：🟢 活跃 | 社区响应：🟡 正常 | 技术方向：清晰


## 1. 今日速览

LobsterAI 过去 24 小时整体活跃度处于高位。开发侧持续快速迭代，**10 条 PR 中有 7 条已合并/关闭**，并发布了 2026.8.11 新版本；社区侧 4 条 Issue 中 3 条已关闭（含数条历史遗留问题经维护者清理），仅 1 条仍处于开放状态。值得关注的是，老 Issue 的关闭大多标记为 `[stale]`，而非通过修复解决，提示部分积压问题仍待真正处理。新开放的 PR 集中在**模型思考强度个性化配置**与 **Cowork 本地文件交互体验**两个方向，产品迭代节奏稳健。


## 2. 版本发布

**2026.8.11** ([Release 页面](https://github.com/netease-youdao/LobsterAI/releases))

**主要新增功能：**
- **Cowork 协作增强**：新增 collapse-agent-tasks 快捷键；支持在输入时使用修饰键快捷键；侧边栏可为定时任务会话添加标识
- **模型思考级别（Thinking Level）配置**：为支持的模型新增可配置的思考深度选项，支持服务端下发默认值；OpenClaw 别名支持产品级 `max` 映射至运行时级 `xhigh`；每个 Agent 与每个会话可持久化各自的选择（[PR #2457](https://github.com/netease-youdao/LobsterAI/pull/2457)）

**Bug 修复/体验改进：**
- 本地文件工作流优化（右键菜单，见下节）
- 启动与运行时可靠性提升
- Settings 交互改进
- Cowork 进度可见性增强

**破坏性变更与迁移注意：**
- 版本并未标注破坏性变更
- 因新增 `cowork_sessions` 相关列与持久化字段（思考级别等），旧版本配置**不兼容回滚**，升级后不建议降级至 2026.8.10 及更早版本
- 模型请求选项改为版本化传递，第三方模型网关需适配新协议


## 3. 项目进展

过去 24 小时合并/关闭的 PR 集中在 **3 个方向**：

**① 模型思考级别可配置化（重点推进）**
[PR #2457](https://github.com/netease-youdao/LobsterAI/pull/2457)（已合并）为系统引入服务端驱动的思考级别配置体系，将产品级 `max` 映射到运行时级 `xhigh`，并支持逐会话/逐 Agent 持久化。此特性已随 2026.8.11 发布，是本次迭代的核心能力。

**② Cowork 本地文件交互完善**
[PR #2473](https://github.com/netease-youdao/LobsterAI/pull/2473)（已合并）为本地文件链接新增右键菜单（打开方式/另存为/复制路径/复制内容/复制图片/在文件夹中显示），替代原先内联的 reveal-in-folder 操作，并新增 `dialog:saveFileCopy` IPC 通道。

**③ 交互细节打磨**
- Escape 关闭最上层弹窗，修复嵌套弹窗时单次 Esc 同时触发两个层的问题（[PR #2476](https://github.com/netease-youdao/LobsterAI/pull/2476)）
- 侧边栏站点图标描边粗细对齐（[PR #2474](https://github.com/netease-youdao/LobsterAI/pull/2474)）
- 2026.8.10 版本合入 main（[PR #2477](https://github.com/netease-youdao/LobsterAI/pull/2477)）


## 4. 社区热点

今日社区讨论热度整体偏低，无高互动话题。相对受关注的是：

- **[Issue #1237](https://github.com/netease-youdao/LobsterAI/issues/1237)**：Settings 弹窗关闭时未保存的配置（API Key 等）静默丢失，2 条评论，今日已关闭。该问题与 [PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241) 相关联（PR 同样已被关闭）
- **[Issue #1240](https://github.com/netease-youdao/LobsterAI/issues/1240)**：单一大模型 API 受限后导致整个 LobsterAI 不可用，2 条评论，今日已关闭

二者分别反映 **配置安全** 与 **故障隔离** 方面的用户诉求，涉及核心使用体验，建议维护者即使关闭 Issue 也跟进验证修复落地情况（见第 5、8 节）。


## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| 🟠 高 | [Issue #1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 单个模型 API 受限导致**所有**对话框任务不可用，切换模型无效，重启后无法启动 | 今日关闭（stale），**无对应修复 PR** |
| 🟠 高 | [Issue #1183](https://github.com/netease-youdao/LobsterAI/issues/1183)（仍 OPEN） | 循环跳出遮罩提示"OpenClaw 网关未能在规定时间内启动成功" | 仍开放，1 条评论 |
| 🟡 中 | [Issue #1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Settings 弹窗未保存修改静默丢失 | 有关联 PR #1241（已关闭） |
| 🟡 中 | [Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 超过最大任务时长被自动停止，但用户**无法确认任务是否还在继续运行**，后台状态不透明 | 今日关闭（stale），无修复 PR |

**重点提醒：** 今日关闭的 3 条 Issue 均为 `[stale]` 自动关闭。其中 #1240（全局受限）与 #2062（任务超时无状态反馈）均直接涉及核心功能可用性，且无对应修复 PR，建议维护者**主动核实这些问题的当前状态**，若仍可复现应重新打开并纳入排期。


## 6. 功能请求与路线图信号

| 今日活跃 PR/Issue | 功能方向 | 被纳入下版本的可能性 |
|------------------|---------|-------------------|
| [PR #2475](https://github.com/netease-youdao/LobsterAI/pull/2475)（OPEN） | **每个模型独立的思考深度记忆**，修复全局共担导致互相覆盖的问题 | ⭐⭐⭐ 高——修复明显 bug，与 2026.8.11“思考级别”主线一致 |
| [PR #2473](https://github.com/netease-youdao/LobsterAI/pull/2473)（已合并） | 本地文件右键菜单（打开方式/另存为/复制内容） | 已进入 2026.8.11 |
| [Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062)（stale） | 超时任务状态可视化（任务是否继续运行的明确反馈） | ⭐⭐ 中——多条 Issue 反映 Cowork 任务状态透明性不足，属高频诉求 |
| [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)（stale OPEN） | 隐藏 OpenClaw 内部主 Agent 会话，避免用户混淆 | ⭐⭐ 中——体验优化，搁置已久；若 Cowork 列表持续有困惑反馈则应优先推进 |


## 7. 用户反馈摘要

**核心痛点：**

- **故障隔离缺失**（#1240）：API 受限本应只影响单个模型，但实际导致全局不可用、切换模型无效、重启失败。用户原话："已证实此刻该 API 在其他龙虾上运行畅通……lobsterai 整体陷入瘫痪。"——体现模型级容灾与故障域隔离的迫切需求

- **任务状态不透明**（#2062）：任务超时被自动停止后，用户不确定任务"是停止了还是后台还在跑"，缺乏明确反馈机制

- **配置安全**（#1237）：用户修改 API Key 后若忘记保存，所有配置静默丢失且无任何提醒

**使用场景：** 用户尝试构建 **24 小时连续运行** 的自动化任务（#2062），且有用户将 LobsterAI 通过 QQ 对话框进行任务调度（#1240），均指向将 LobsterAI 作为**长期后台自动化基础设施**的使用模式。此类场景对稳定性、可观测性和故障恢复的要求远高于普通交互式应用，建议在上述方向加大投入。


## 8. 待处理积压

| 类型 | 编号 | 标题 | 搁置时长 | 建议 |
|------|------|------|---------|------|
| Issue | [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) | 循环跳出遮罩"OpenClaw 网关未能在规定时间内启动成功"（Windows） | 4.5 个月 | 核心启动流程 Bug，影响基本可用性，建议优先排查 |
| PR | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | fix(cowork): 隐藏 OpenClaw 主 Agent 会话 | 4.5 个月 | 功能可用，长期搁置；建议合入或给出明确拒绝理由 |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): electron 40 → 43 批量升级 | 4.5 个月 | Dependabot 自动 PR，长期未处理；Electron 大版本升级建议安排专项验证窗口 |
| Issue | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)（stale 关闭） | 单模型受限导致全局瘫痪 | — | **建议重新打开**，此为核心稳定性问题，stale 关闭时无修复 PR 关联 |

---

*本日报基于 github.com/netease-youdao/LobsterAI 公开数据生成，数据时间窗口为 2026-08-11 至 2026-08-12。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：2026-08-12** | **数据区间：2026-08-11 ~ 2026-08-12**

---

## 1. 今日速览

Moltis 项目今日活跃度整体**偏低**，24 小时内无新 Issue 创建或关闭，Issue 活动进入静默期。项目核心动态集中在一项新提交的 Pull Request（#1190）上，该 PR 提出了**持久化 CalDAV 连接器、原子快照、调度任务、本地全文搜索**等一系列重大功能扩展，目前处于待合并状态。无新版本发布，代码仓库整体处于功能开发前的酝酿阶段。社区讨论热度明显不足，但 PR #1190 的提出预示着项目可能正在酝酿一轮较大的功能升级。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 待合并 PR（1 个）

| PR | 标题 | 作者 | 状态 | 摘要 |
|----|------|------|------|------|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | Add durable local CalDAV connectors | penso | **待合并** | 引入供应商无关的连接器持久化、原子 CalDAV 快照、调度、投影以及受限本地全文搜索；新增提示编译数据集计划和受信任只读 `connectors` 代理工具；新增 Settings > Connectors 账户与数据集管理界面 |

**分析**：PR #1190 是一个**体量较大**的功能型 PR，覆盖后端持久化、数据同步、搜索索引、代理工具和前端设置界面多个层面。该 PR 若成功合并，将大幅增强 Moltis 的**本地数据接入能力**，使其从纯粹的对话代理向**个人数据管理中枢**演进。这是项目在数据连接层迈出的关键一步，也是今日项目进展的核心标志。

> ⚠️ 注意：当前**没有**已合并 PR，项目进展全部押注在 #1190 的评审与合并流程上。建议维护者关注该 PR 的评审进度。

---

## 4. 社区热点

### 今日最受关注 PR

**[#1190 Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)** — 作者：penso

- 创建时间：2026-08-11
- 评论数：数据未显示（标记为 undefined）
- 👍 数：0

**分析**：虽然当前评论与点赞数据尚不明确（评论数显示为 undefined，可能尚未有评论），但该 PR 的功能覆盖面广，涉及 **CalDAV 日历协议支持、本地全文搜索、数据集计划编译、Settings 界面升级** 等多个用户可感知的改进方向。这些功能直接回应了 AI 助手类项目用户对**本地数据隐私保护**和**离线可用性**的核心关切。

---

## 5. Bug 与稳定性

**今日无 Bug 报告。**

过去 24 小时内没有新 Issue 创建，也没有现有 Issue 被关闭或标记。项目当前**未发现新的 Bug、崩溃或回归问题**，稳定性表现良好。但这也有可能是因为社区活跃度较低、用户反馈尚未到位所致，建议持续观察。

---

## 6. 功能请求与路线图信号

### 潜在路线图信号（来自 PR #1190）

| 信号 | 说明 | 推断 |
|------|------|------|
| **供应商无关的连接器持久化** | 支持多种数据源统一持久化 | 项目可能从纯对话代理向**个人数据枢纽**转型 |
| **原子 CalDAV 快照** | 对日历数据做原子级快照 | 关注**数据一致性**与**可恢复性** |
| **调度与投影** | 支持定时任务与数据投影 | 未来可能支持**主动提醒、定时报告**等场景 |
| **受限本地全文搜索** | 在本地范围内提供全文搜索 | 重视**隐私保护**（数据不出本地）与**离线能力** |
| **提示编译数据集计划** | 将提示词编译为数据集访问计划 | Agent 工具调用将更加**结构化、可审计** |
| **只读 `connectors` 代理工具** | 为 Agent 提供可信只读数据访问 | 强化 **AI 安全** 与 **权限边界** 管理 |

**预判**：若 #1190 被维护者采纳并入主线，以上功能极有可能进入下一版本（预计为 v0.x 的下一个 minor 或 major 版本）。这些功能将大幅提升 Moltis 作为个人 AI 助手的**实用性**，尤其是对注重数据隐私的用户群体。

---

## 7. 用户反馈摘要

**今日无用户评论数据。**

由于今日无新 Issue、PR 也尚未产生评论，暂无具体用户反馈可供提炼。建议维护者主动跟进 PR #1190 的早期反馈，尤其是关于：

- CalDAV 连接器的**实际使用场景**是否覆盖用户主流日历服务（如 Google Calendar、Apple iCloud、Nextcloud）
- 本地全文搜索的**性能表现**与索引体积控制
- Settings > Connectors 界面的**易用性**与**配置复杂度**

---

## 8. 待处理积压

### 需维护者关注的 PR

| PR | 标题 | 作者 | 持续待处理时间 | 说明 |
|----|------|------|---------------|------|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | Add durable local CalDAV connectors | penso | 创建于 8-11，**已超过 24 小时无进一步动态** | 功能覆盖面广，涉及多个模块，建议尽快安排 code review 并给出明确的时间预期，避免大型 PR 长时间悬置导致合并冲突 |

### 关注建议

- 该 PR 涉及**前端（Settings 界面）**、**后端（持久化与调度）**、**工具层（Agent 工具）**多个组件，建议维护者拆分 review 任务，按模块并行推进
- 若该 PR 的方向与项目路线图不符，建议**尽早给出明确反馈**，避免贡献者投入过多后续精力
- 今日 Issue 积压为 0，但结合 PR #1190 的规模，可能意味着社区处于**观望期** — 维护者的响应速度和态度将直接影响后续贡献者热情

---

## 📊 项目健康度评估

| 指标 | 状态 | 说明 |
|------|------|------|
| Issue 活动 | ⚪ 静默 | 0 新开 / 0 关闭，社区讨论不足 |
| PR 活跃度 | 🟡 平稳 | 有 1 个大型功能 PR 待评审 |
| 版本迭代 | ⚪ 停滞 | 无新版本发布 |
| 代码交付 | 🟡 酝酿期 | 大功能（#1190）待合并，尚未落地 |
| 社区反馈 | ⚪ 空白 | 无评论、无点赞数据 |

**综合评估：项目处于功能开发前的低活跃期，但 PR #1190 预示着近期可能有重大功能落地。当前健康度中等偏上，关键在于 #1190 的评审速度与后续版本发布节奏。**

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 🤖 CoPaw (QwenPaw) 项目动态日报

**报告日期**: 2026-08-12  
**数据窗口**: 2026-08-11 ~ 2026-08-12 (24小时)

---

## 1. 今日速览

CoPaw 项目在过去 24 小时内保持高强度迭代节奏，共产生 **22 条 Issue 更新**（其中 9 条新开/活跃、13 条已关闭）和 **48 条 PR 更新**（23 条待合并、25 条已合并/关闭），并发布了 **v2.1.0-beta.3** 版本。社区反馈活跃，既有用户对公式渲染、MCP 工具稳定性等使用痛点的持续反馈，也有涉及安全权限模型的新议题被提出，显示出项目在功能完善与社区治理两个层面都在加速推进。总体评估：**项目健康度良好，版本迭代与社区反馈形成正循环**。

---

## 2. 版本发布

### 🚀 v2.1.0-beta.3

| 项目 | 详情 |
|------|------|
| **发布时间** | 2026-08-11 |
| **版本类型** | Beta |
| **发布链接** | [v2.1.0-beta.3 Releases](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.3) |

**主要更新内容：**

- **文件工作区与博客功能**（`Feat/files workspace blog`，PR [#6783](https://github.com/agentscope-ai/QwenPaw/pull/6783) by @zhaozhuang521）— 新增文件工作区与博客相关能力
- **Provider 能力缓存修复**（`fix(provider): expire stale capability cache entries and clear on model switch`，PR [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) by @ningblue）— 修复模型切换时能力缓存过期问题

**迁移注意事项：**

- 本版本为 Beta 版本，建议生产环境用户暂缓升级
- 已知桌面端问题：v2.1.0-beta.1 存在的 Python 子进程环境变量注入问题（Issue [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)）已被关闭，建议验证该修复是否在此版本中生效
- 发布验证任务由 [Issue #6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) 跟踪，需在 2026-08-11 15:45 UTC 前完成安装验证

---

## 3. 项目进展（今日合并/关闭的重要 PR）

### 核心架构与配置层

| PR | 标题 | 状态 | 意义 |
|----|------|------|------|
| [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) | `chore: update release notes for v2.1.0` | ✅ 已合并 | 完成 v2.1.0 中英文发布说明、README 多语言同步 |
| [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) | `feat(console): unify renderable code block experience` | ✅ 已合并 | 统一代码块渲染体验，新增 LaTeX/Mermaid 预览与亮暗主题适配（**直接回应用户公式渲染诉求**） |
| [#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915) | `fix(files): repair previews and dark mode styling` | ✅ 已合并 | 修复 Unicode PDF 文件名与 SVG 文件预览失败，对齐暗色主题 |

### 渠道与工具链

| PR | 标题 | 状态 | 意义 |
|----|------|------|------|
| [#6909](https://github.com/agentscope-ai/QwenPaw/pull/6909) | `feat(channels): warn when a bot is already used by another agent` | ✅ 已合并 | 渠道 Bot 被多 Agent 复用时增加冲突提醒（回应多 Agent 部署需求） |
| [#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898) | `fix(tools): correct read_file tool description` | ✅ 已合并 | 修正 `read_file` 工具描述与实际行为不符的问题 |
| [#6891](https://github.com/agentscope-ai/QwenPaw/pull/6891) | `feat(computer-use): improve native input workflows` | ✅ 已合并 | 改进桌面端 Computer Use 输入可靠性与往返效率 |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | `fix(memory): flush pending turns before compression (#6555)` | ✅ 已合并 | 修复上下文压缩前自动记忆冲刷缺口 |

### 待合并的高价值 PR

| PR | 标题 | 说明 |
|----|------|------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | `feat: unify provider discovery, model metadata, routing, and agent controls` | 统一 Provider 发现/路由/模型管理，回应 Issue #6167 的架构级重构 |
| [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | `feat(console): unify apps, plugins, and skills in the marketplace` | 统一市场页面 `/market`，整合 Apps/插件/技能 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | `feat(mcp): add configurable tool call timeout` | MCP 工具调用超时配置，默认为 120 秒（修复 #6724） |
| [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | `feat(desktop): remember window geometry` | 桌面端记忆窗口位置与大小 |

**今日总结**：项目在 **UI 体验统一**（代码块/文件预览/市场页面）、**配置健壮性**（渠道冲突检测/HTTP 500 修复）、**上下文与内存管理**（压缩前冲刷）三个方向均有实质推进，v2.1.0 正式版的功能面已相当完整。

---

## 4. 社区热点 🔥

### 最热 Issue：MCP 工具规律性失效
**[Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — `[Bug]: mcp工具规律性失效`**
`作者: @70995781` | `评论: 10` | `状态: 已关闭`

- **诉求**：MCP 工具每隔数小时失效，重启 Docker 容器后恢复。Agent 对工具调用的可靠性产生直接质疑
- **热点原因**：这是生产环境中 Agent 工具链的最基础需求，同类问题在社区中具有普遍性
- **关联 PR**：已关闭，推测通过 [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)（MCP 超时配置）+ [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723)（缓存过期）在 v2.1.0-beta.3 中部分修复

### 次热 Issue：公式渲染 + 会话分组 + 活动会话背景
**[Issue #6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) — `[Feature]: 公式渲染问题；会话分组管理；活动会话背景`**
`作者: @renzhong424` | `评论: 7` | `状态: 已关闭`

- **诉求**：三个独立需求打包提交 — **LaTeX 公式渲染**（对比 Cherry Studio）、**会话分组管理**、**活动会话背景标识**
- **热点原因**：公式渲染是多个历史 Issue（#5453、#4756）的共同痛点；会话分组与背景标识则是高频 UI 改进需求
- **进展**：公式渲染已通过 PR [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) 合入解决；会话分组/背景仍待规划

### 最热 PR：Provider 统一重构
**[PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — `feat: unify provider discovery, model metadata, routing, and agent controls`**
`作者: @wangfei010313` | `更新: 2026-08-12` | `状态: 待合并`

- **意义**：这是目前最大的架构级 PR，统一 Provider 发现机制、模型元数据、路由和 Agent 控制，移除空 Provider onboarding 流程
- **社区关注**：该 PR 直接影响模型管理 UX（如用户新增 Provider 的流程）与多模型路由策略，是 #6167 的整体解法

---

## 5. Bug 与稳定性报告

### 🔴 高严重度

**[Issue #6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) — `qwenpaw-v2.0.1 出现经常性的崩溃`** （OPEN）
`作者: @lijikai1206` | `评论: 2` | `创建: 2026-08-11`

- **表现**：pip 安装的 v2.0.1 在 web 端频繁崩溃，报错位于 `console/channel.py:497` 的 `process/reply failed`
- **影响面**：pip 安装路径的稳定运行受影响，且发生在稳定版（非 beta）
- **状态**：尚无 fix PR 关联，**建议优先排查**

**[Issue #6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) — `Inter-agent messages spawn a new agent session per message`** （OPEN）
`作者: @oitsukiii` | `评论: 2` | `创建: 2026-08-11`

- **表现**：Agent 间消息触发并发"影子实例"，导致重复数据处理
- **性质**：多 Agent 协作场景的并发一致性缺陷，由用户 Agent 代笔提交（中英文双语），质量较高
- **状态**：尚无 fix PR

### 🟡 中严重度

**[Issue #6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) — `Console UI crashes on Chinese IME compositionEnd during agent run`** （OPEN）
`作者: @hhhzyd-cloud` | `评论: 2` | `创建: 2026-08-10`

- **表现**：中文输入法（IME）在 Agent 运行时触发 compositionEnd，消息队列功能完全不可用
- **影响面**：中文用户核心使用路径受损，v2.1.0b2 引入的回归
- **状态**：尚无 fix PR，**建议优先关注**

**[Issue #6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) — `Plugins can silently create cron jobs and inject user-visible messages without any approval`** （OPEN）
`作者: @Jasonsun77` | `评论: 1` | `类型: Security`

- **表现**：通过 Apps 市场安装插件后，可静默创建定时任务并向对话注入消息，**无用户确认机制**
- **严重度**：中高（安全权限模型缺口），涉及已安装插件的持久化能力
- **状态**：无 fix PR，**安全团队需介入评估**

### 🟢 低严重度（已修复/已关闭）

| Issue | 标题 | 说明 |
|-------|------|------|
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 Python 子进程崩溃 | 已关闭（PYTHONHOME 注入问题） |
| [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | Console 前台空闲持续重绘（~20% CPU） | 已关闭（无限 CSS 动画导致） |
| [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | fork 子 Agent 假完成报告 | 已关闭 |
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | 加载动画不消失 | 已关闭 |

---

## 6. 功能请求与路线图信号

### 📌 可能纳入下版本的信号

| 功能请求 | 来源 | 预判 |
|----------|------|------|
| **Agent 主动投递消息至收件箱（Inbox）** — [Issue #6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) | @Alan761126 | 与现有 cron/heartbeat 机制互补，扩展 Agent 主动性能力，**中概率进入 v2.2** |
| **CopilotKit 集成指南** — [Issue #6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) | @taohongxiu | 属于第三方集成讨论，**低概率进核心路线图** |
| **QQ 机器人消息精简** — [Issue #6897](https://github.com/agentscope-ai/QwenPaw/issues/6897) | @Jasonsun77 | 工作流信息全量推送导致 QQ 限流，**中概率被优化** |
| **会话/项目目录隔离** — [Issue #6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) | @song90625 | 已在 v2.1.0b3 的 `files workspace` 中有初步实现，**高概率在 v2.1 正式版落地** |
| **字体大小调节 + 文件路径可点击** — [Issue #4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | @casteroy | 长期未关闭的桌面端体验需求，**仍在 backlog 中** |

### 🔍 路线图判断

当前 v2.1.0 的功能面集中在：**统一市场**（[#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880)）、**统一代码块渲染**（[#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911)）、**Provider 架构重构**（[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)）、**桌面端体验优化**（[#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877)）。正式版发布已临近，发布说明 PR [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) 已准备就绪。

---

## 7. 用户反馈摘要

### 正面反馈

- **桌面端窗口几何记忆**（[PR #6877](https://github.com/agentscope-ai/QwenPaw/pull/6877)）获得关注，社区用户认可该改进的实用性

### 核心痛点

| 痛点 | 来源 | 用户原声摘录 |
|------|------|-------------|
| **公式渲染缺失** | [Issue #6893](https://github.com/agentscope-ai/QwenPaw/issues/6893)、[#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)、[#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756) | *"它其实应该有这个能力"*（@renzhong424）— 对比 Cherry Studio 等其他工具，体验落差明显 |
| **MCP 工具可靠性** | [Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | *"每隔一段时间就无效了，重启后恢复"* — 生产环境依赖度高的用户受损严重 |
| **中文输入法兼容** | [Issue #6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | 中文 IME 导致消息队列不可用，中文用户核心使用路径被阻塞 |
| **QQ 限流与消息冗杂** | [Issue #6897](https://github.com/agentscope-ai/QwenPaw/issues/6897) | *"没必要把每一步工作流全部发送到QQ上，会触发限流"* — 集成场景的真实运营痛点 |
| **桌面端字体过小** | [Issue #4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | *"长时间使用眼睛疲劳"* — 桌面端的基础可用性需求 |

### 社区治理建议

- [Issue #6895](https://github.com/agentscope-ai/QwenPaw/issues/6895)：用户提议建立微信群，**侧面反映中文社区规模在扩大**，建议考虑官方社群渠道

---

## 8. 待处理积压 ⏳

### 长时间未响应/未标记的 Issue

| Issue | 标题 | 创建时间 | 已等待 | 优先级建议 |
|-------|------|---------|--------|-----------|
| [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) | 日记页面子文件夹笔记分组错误 | 2026-08-10 | 2 天 | 中（UI 数据分组逻辑缺陷） |
| [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) | 如何集成 CopilotKit | 2026-08-10 | 2 天 | 低（可回答后可关闭） |
| [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | 字体大小/文件路径可点击 | 2026-05-09 | 3 个月+ | 中（桌面端体验积压） |

### 长时间未合并的高价值 PR

| PR | 标题 | 创建时间 | 已等待 | 说明 |
|----|------|---------|--------|------|
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | 系统命令 TUI/Console 斜杠自动补全 | 2026-07-08 | 35 天 | 涉及 TUI + Console 双端，Review 周期较长 |
| [#6660](https://github.com/agentscope-ai/QwenPaw/pull/6660) | .dockerignore 更新（README.me） | 2026-08-03 | 9 天 | 小改动，等待 review |
| [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) | AnySearch 搜索引擎集成 | 2026-08-08 | 4 天 | 涉及 Tavily 的替换，需安全审查 |

---

## 📊 项目健康度总结

| 维度 | 评分 | 说明 |
|------|------|------|
| **迭代速度** | ⭐⭐⭐⭐⭐ | 日均近 50 条 PR 更新，v2.1.0-beta.3 按期发布 |
| **社区活跃度** | ⭐⭐⭐⭐☆ | Issue 讨论密度高，但 PR Review 吞吐量仍有提升空间 |
| **稳定性** | ⭐⭐⭐☆☆ | 存在 1 个高严重度崩溃（#6919）和 1 个安全权限缺口（#6916） |
| **用户满意度** | ⭐⭐⭐⭐☆ | 公式渲染（#6911）与文件预览（#6915）已修复核心诉求；但中文 IME bug 与 MCP 稳定性仍是拦路虎 |

---

*本报告由 CoPaw 开源项目分析师 AI 生成，数据来源：[github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为您的 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 ZeroClaw 2026-08-12 的 GitHub 数据生成的项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-08-12

## 1. 今日速览

ZeroClaw 项目今日活跃度**极高**，属于密集讨论与协作状态。过去24小时内共有 100 条 Issues/PRs 更新，其中新提交的 PR #9936 试图通过 Cherry-pick 方式合并上游的安全与正确性修复，但大部分 PR 仍处于等待作者响应或审查阶段。项目当前的核心焦点集中在 **RFC 提案的最终敲定**（如 Goal mode、Chat Completions 兼容层）与 **高危安全 Bug 的修复**（如 WebP 解码、文件系统沙箱逃逸）。尽管无新版本发布，但围绕 v0.9.0 的架构定稿与安全加固已成为当前的主旋律，且有大量待处理 PR 存在合并阻塞，需要维护者重点关注。

## 2. 版本发布

**无。** 过去24小时内无新版本 Release 发布。

## 3. 项目进展

今日最显著的进展来自于上游同步与关键修复，尽管合并数量仅 1 个，但质量较高。

- **跨越式同步 (PR #9936)**：由 `kckylechen1` 提交的 [PR #9936](https://github.com/zeroclaw-labs/zeroclaw/pull/9936) 已**合并**。该 PR 通过 Cherry-pick 方式将上游 `zeroclaw-labs/zeroclaw` master 分支的 9 个安全与正确性修复同步至当前树，涉及 CI、文档、核心、代理、通道、配置等多个模块，但其中 3 个修复已在当前树中存在而被自动跳过。这有助于弥合分支间的安全差距。
- **SOP 控制平面推进 (PR #9841)**：[PR #9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) 旨在推动无头 SOP 运行，并修复了在审查 #9494 时发现的 5 个缺陷。该 PR 被视为 #9494 的规范化续作，目标直指 v0.9.0 的 SOP 授权契约。
- **Bug 修复积累**：多个针对特定缺陷的 PR 处于待合并状态，包括修复 Matrix 回复丢失的 [PR #9911](https://github.com/zeroclaw-labs/zeroclaw/pull/9911)、修复 Gateway 会话键前缀重复的 [PR #9918](https://github.com/zeroclaw-labs/zeroclaw/pull/9918)，以及修复 SOP 工作区路径解析错误的 [PR #9765](https://github.com/zeroclaw-labs/zeroclaw/pull/9765)。

## 4. 社区热点

今日讨论热度最高的议题依旧是**架构级 RFC**，这表明社区正在集中精力解决顶层设计问题。

- **[RFC: Goal mode v1 — bounded foreground Matrix work (#8303)](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** (`19条评论`)：最受关注。该 RFC 旨在定义如何持久化地跨多个代理轮次追踪用户目标，评论者正积极讨论其第一版交付范围。
- **[RFC: ZeroClaw Chat Completions profile (#8603)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** (`18条评论`)：紧随其后。社区对兼容 OpenAI Chat Completions 协议的需求强烈，这将是吸引 Open WebUI 等生态用户的关键。
- **[RFC: Add a per-execution confirmation tier for high-risk shell commands (#7155)](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** (`17条评论`)：关于高风险的 Shell 命令执行策略，讨论热度颇高，体现了社区对于 AI 安全控制粒度的高度关注。

**诉求分析**：这些热帖反映了社区对于**标准化互操作性**和**强安全沙箱**的双重诉求。开发者希望 ZeroClaw 能无缝接入现有工具链，同时确保 Agent 在关键操作上的安全可控。

## 5. Bug 与稳定性

今日报告了多个严重级别较高的 Bug，主要集中在安全沙箱和媒体处理管道。

- **高危 - 未修复，有处理中 PR**
  - **[Inbound WebP conversion decodes unbounded (#9883)](https://github.com/zeroclaw-labs/zeroclaw/issues/9883)**：WebP 图片在进入共享校验器之前已被无限制解码，可能导致拒绝服务攻击。
  - **[Bounded delegate target resolves filesystem to delegator's workspace (#9872)](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)**：受约束的委派代理（Researcher）在读写文件时错误地指向了委派者（Executive Assistant）的工作区，导致沙箱隔离失效。**已有相关修复 PR #8713**（需关注其进度）。
- **中危 - 已关闭/修复**
  - **[Docker Compose gateway can remain loopback-bound (#9035)](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)**：该问题已被标记为已关闭，表明可能已通过配置或代码修复解决。
  - **[daemon reload is not on SIGUSR1 (#9768)](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)**：该 Bug 已关闭，提示文档错误已修正，但需留意是否所有相关信号处理均已更新。

## 6. 功能请求与路线图信号

结合 RFC 与 PR 状态，以下功能点有望被纳入 v0.9.0 或后续版本：

- **OpenAI 兼容层**：`Chat Completions profile` (#8603) 呼声最高，虽然暂无对应 PR，但这是连接庞大 OpenAI 生态的必经之路，极有可能进入路线图。
- **运行时安全策略管道**：多个 RFC（如 #7142、#7155）与 PR（#7821）都在推进将安全决策逻辑统一收归运行时负责，并定义策略覆盖层，这将是 v0.9.0 的安全架构核心。
- **SOP（标准操作程序）能力补全**：多个 Tracker（#8288）和 PR（#9841）正在推进让 SOP 控制面板达到 5/5 完成度，包括状态可见性和权限契约，这将是该版本的功能亮点。
- **上下文压缩优化**：PR #9535 引入了基于模型窗口比例（`context_compact_ratio`）的上下文压缩策略，以替代旧的绝对预算模式，这对于长对话场景是一个重要的体验优化。

## 7. 用户反馈摘要

从近期 Issues 的讨论中，可以提炼出以下真实的用户声音：

- **安全与文档一致性**：用户 `AngryPacifist` 在 #9768 中指出，文档建议运维人员通过发送 `SIGUSR1` 信号来重载守护进程，但实际上该信号会杀死进程。这反映了文档与实际行为脱节的问题，容易引发生产事故。
- **部署与网络问题**：用户 `knoppix2` 在 #9035 中反馈了 Docker Compose 部署后网关仍绑定在 loopback 地址的问题，即使用户已正确映射端口也无法从外部访问，严重阻塞了工作流。
- **沙箱隔离的期望**：#9872 的 Bug 表明用户期望 `bounded` 模式下的委派代理拥有完全独立的文件系统视角，但当前实现却共享了委派者的工作区。这揭示了社区对“强隔离”沙箱的刚性需求。

## 8. 待处理积压

以下重要 PR 长期处于 `needs-author-action`（等待作者响应）状态，存在合并阻塞风险，建议维护者跟进。

- **[PR #9194: feat(secrets) - 提取 KeySource trait](https://github.com/zeroclaw-labs/zeroclaw/pull/9194)** (`size:XL`)：涉及核心密钥管理架构的重构，搁置过久会增加后续合并冲突的风险。
- **[PR #8713: fix(tools) - 修复 file_download SSRF 漏洞](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)** (`size:XL`, `risk:high`)：关联今日的热点 Bug #9872，优先级应上调。
- **[PR #9535: feat(runtime) - 上下文压缩锚定模型窗口比](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** (`size:XL`, `risk:high`)：该功能对未来长对话体验至关重要，且已标记为 `principal contributor`，应尽快推动。
- **[PR #9385: feat(channels) - WhatsApp Web 请求审批](https://github.com/zeroclaw-labs/zeroclaw/pull/9385)** (`size:L`, `stale-candidate`)：此 PR 已标记为“stale-candidate”，如果不及时处理，可能会被自动关闭。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*