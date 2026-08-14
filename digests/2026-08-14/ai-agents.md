# OpenClaw 生态日报 2026-08-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-14 02:04 UTC

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

# OpenClaw 项目动态日报 — 2026-08-14

## 1. 今日速览

OpenClaw 项目在过去24小时内保持高活跃度，共产生500条Issue更新（新开/活跃338条，关闭162条）和500条PR更新（待合并386条，已合并/关闭114条）。**核心关注点集中在子代理（Subagent）完成消息静默丢失、会话状态管理可靠性及多通道消息路由稳定性等关键基础设施问题上**，多个P1级别的长期Issue持续获得大量社区讨论。值得关注的是，今日提交的多个PR（#123421、#123420、#123418等）显示维护者正在积极修复安全边界与模型配置流程问题，项目整体呈健康迭代态势。但**长期挂起的高优先级Bug（如#121058、#121953、#7707等）仍未有明确修复方案，稳定性问题仍是社区当前最主要的痛点**。

---

## 2. 版本发布

过去24小时内**无新版本发布**。


## 3. 项目进展

今日无合并PR的明确数据，但以下新提交的高质量PR值得关注，反映了项目在多方面的持续进展：

1. **[PR #123421] fix(sessions): hide unowned host catalogs on multi-user gateways** — 修复多身份网关上非管理员可列出主机用户本地发现的会话目录（含绝对路径等元数据）的权限漏洞，属安全边界加固。
2. **[PR #123420] fix(macos): adopt Peekaboo 4.1 bridge contracts** — 将 macOS 应用内嵌的 Peekaboo 自动化桥接从 3.9.8 升级至 4.1 协议，以获取进程级捕获所有权及更精确的原生操作通道声明。
3. **[PR #123418] fix(gateway): model setup fails after provider authorization** — 修复用户在完成外部设备授权后收到"Gateway is draining"错误信息的问题（实际网关未在重启或排空），改善模型配置体验。
4. **[PR #123237] fix(cron): alert when topic delivery fails** — 修复 cron 作业输出成功投递至已失效 Telegram 主题时静默丢失、且未通知操作员的问题，闭环了消息投递失败反馈链路。
5. **[PR #123394] fix(test): stabilize Vitest ownership audit** — 修复测试框架中因缓存导致的虚假失败报告，提升 CI 可靠性。

此外，**[PR #122985]** 修复了 Web UI 聊天窗口在多行草稿增长时跳动的问题，提升前端交互体验。整体来看，项目在**安全边界、macOS原生集成、消息投递可靠性和前端体验**四个维度均有积极的代码推进。


## 4. 社区热点

过去24小时内最受关注的核心议题是**"静默回复失败/Silent reply failures"**，集中在以下高热度Issue中：

### 🔥 热点1：[Issue #121058] Silent reply failures still recurring after #116277 closed — no queued reply payload（评论92条）
链接: https://github.com/openclaw/openclaw/issues/121058

- **诉求核心**：用户明确表达了对"#116277被关闭但问题仍持续发生"的强烈不满，监控 cron 持续记录到新失败事件（包括当日），**质疑维护者是否真正修复了根因而非仅关闭了 Issue**。这也是过去24小时内评论量最高的Issue，反映出社区对**稳定性问题长期悬而未决**的焦虑。

### 🔥 热点2：[Issue #7707] Feature Request: Memory Trust Tagging by Source（评论48条）
链接: https://github.com/openclaw/openclaw/issues/7707

- **诉求核心**：这是一个自2月提出至今已活跃6个月的功能请求，要求按来源为用户命令、网页抓取、第三方技能等记忆条目打信任标签，以防御**记忆投毒攻击**。社区对该功能的长期关注体现了对**AI Agent 安全性与可信度**的深层需求。

### 🔥 热点3：[Issue #25592] Text between tool calls leaks to messaging channels（评论48条）
链接: https://github.com/openclaw/openclaw/issues/25592

- **诉求核心**：当 Agent 在工具调用之间产生文本（如错误处理、处理确认信息）时，这些内部处理输出被错误地路由到了用户可见的 Slack/iMessage 等消息通道，**严重干扰了用户体验**。该问题自2月提出至今仍未被修复，且被标记为P1，社区持续关注。

**共性需求分析**：今日最活跃的Issue均围绕**可靠性与安全边界**两大主题，且多为长期未修复的老问题（2月至3月提出），社区对修复进度的耐心正在消耗。


## 5. Bug 与稳定性

### 🔴 严重（P1，影响核心功能，已长期存在）

1. **[#121058] Silent reply failures still recurring after #116277 closed — no queued reply payload**（P1，无fix PR）
   - 链接: https://github.com/openclaw/openclaw/issues/121058
   - 核心Bug：Agent 静默回复失败持续复发，监控 cron 仍持续记录新失败，且无排队回复载荷（queued reply payload），导致用户消息完全无响应。自8月9日创建以来，评论已达92条。

2. **[#121953] Cron agent turns stall on DeepSeek — '[cron:...]' user-message prefix is deprioritized**（P1，有链接PR开放）
   - 链接: https://github.com/openclaw/openclaw/issues/121953
   - 核心Bug：使用 DeepSeek 模型时，cron agent 轮次因用户消息前缀 `[cron:...]` 被 API 边缘服务器视为低优先级而严重延迟（数十秒至数分钟）。

3. **[#25592] Text between tool calls leaks to messaging channels**（P1，无fix PR）
   - 链接: https://github.com/openclaw/openclaw/issues/25592
   - 核心Bug：Agent 在工具调用间产生的内部处理文本被错误投递至用户可见的消息通道，造成严重 UX 问题。

4. **[#44925] Subagent completion silently lost — no retry, no notification, no auto-restart on timeout**（P1，有链接PR开放）
   - 链接: https://github.com/openclaw/openclaw/issues/44925
   - 核心Bug：子代理任务编排在多种失败模式下结果被静默丢弃（如完成通知失败、超时等），且无重试、通知或自动重启机制。

5. **[#43367] Multi-agent orchestration is unstable: concurrent agents add/config overwrites, session-lock failures, and detached child work**（P1，有链接PR开放）
   - 链接: https://github.com/openclaw/openclaw/issues/43367
   - 核心Bug：并发运行多个Agent时，配置覆盖、会话锁失败及子任务脱离等问题导致多Agent运行不可靠。

### 🟡 回归/新发现问题

1. **[#121605] [Bug]: after model fallback from claude-cli, assistant reply is produced but never delivered**（P1，已关闭）
   - 链接: https://github.com/openclaw/openclaw/issues/121605
   - 核心Bug：模型从 claude-cli 回退到 anthropic 后，生成的回复不会投递到发起通道（2026.7.1-2 中出现，2026.5.28 正常）。

2. **[#123073] dev-channel update fails: EUNSUPPORTEDPROTOCOL on workspace:* (updater uses npm, repo requires pnpm)**（P1，无fix PR）
   - 链接: https://github.com/openclaw/openclaw/issues/123073
   - 核心Bug：开发通道更新失败，因更新器使用npm但代码仓库依赖 pnpm 及 workspace:* 协议。

### 🟢 已关闭（今日修复/标记为已解决）

1. **[#121605] 模型回退后回复未投递** — 已关闭，标记为修复完成。
2. **[#42273] backup create stalls on large installations** — 已关闭，标记为 already-fixed。
3. **[#91456] Telegram DM lane can remain guarded after send timeout** — 已关闭。


## 6. 功能请求与路线图信号

### 高热度功能请求

1. **[#7707] Memory Trust Tagging by Source**（P2，48评论）— 要求按来源为记忆条目添加信任级别标签，防止通过不可信内容（网页、第三方集成）进行记忆投毒攻击。
   - 链接: https://github.com/openclaw/openclaw/issues/7707

2. **[#45758] Support YAML as config file format**（P3，8评论）— 希望增加 YAML 作为 JSON5 之外的备选配置文件格式，提高可读性与 DevOps 生态兼容性。
   - 链接: https://github.com/openclaw/openclaw/issues/45758

3. **[#45771] Built-in pace-aware rate limiting for autonomous agents**（P2，7评论）— 为自主代理（子代理、心跳驱动编码会话）增加可感知消耗速度的内建限流机制，避免打满 Anthropic API 配额。
   - 链接: https://github.com/openclaw/openclaw/issues/45771

4. **[#45508] Self-hosted STT/TTS provider support in webchat**（P2，7评论）— 将 WebChat 的"朗读"与"语音输入"从浏览器 Web Speech API 切换到网关的 TTS/STT 配置，使自托管语音方案在 webchat 前端可见可用。
   - 链接: https://github.com/openclaw/openclaw/issues/45508

### 下一版本可能的纳入项

- **Signal 通道完整支持**：今日有多个 Signal 相关 PR（#114098、#118169、#114173、#119343、#119342、#119341）处于开放状态，覆盖交互式设置向导、二维码账号关联、系统代理 QR 设置会话等多个环节，Signal 通道有望在后续版本中更加成熟。
- **移动端体验优化**：PR #120933 修复移动配对的二维码过期失效问题，结合 #46058 有关 Android 聊天优先界面的讨论，**移动端体验正在成为项目的重点方向之一**。
- **Secret 安全边界增强**：PR #123216 提供"认证出口替换代理与目的地绑定"的 secrets 新能力，让 Agent 生成的子进程（如 curl、gh）也能安全使用 secret 值，有望进一步加固安全边界。

### 路线图信号判断

PR #123351 邀请用户加入 Discord 社区、PR #123356 优化控制台 UI 斜杠命令参数输入，表明项目在**社区建设和用户体验打磨**方面正在持续投入，下一版本可能包含更多面向终端用户的前端优化。


## 7. 用户反馈摘要

### 核心痛点：稳定性与可靠性

1. **对Issue关闭但问题未解决表示强烈不满**（#121058）：用户指出"#116277 被关闭了，但静默回复失败仍在持续。监控 cron 自该 Issue 关闭以来一直在记录新事件——包括今天。" —— 用户对修复流程的信任度正在下降。

2. **子代理结果丢失是高频痛点**（#44925、#67777、#92433）：多个Issue指向同一个模式：子代理完成通知在超时、排空（drain）、孤儿清理或繁忙通道等条件下会静默丢失，且无重试、无通知、无自动恢复机制。用户描述："子代理任务编排有多个失败模式，结果都被静默丢弃。"这对依赖多Agent并行工作的用户影响极大。

3. **多Agent并发不稳定**（#43367）：用户反馈"我尝试从 OpenClaw CLI 编排一个小型并行编码批次，碰到了一连串失败，让多Agent运行在实际上不可靠。"具体包括配置覆盖写入、会话加锁失败、子任务脱离等问题。

4. **消息路由污染主会话**（#25592、#41165）：Agent 在工具调用间隙产生的内部处理文本（错误处理、处理确认）被错误发送到 Slack、iMessage 等用户可见通道。用户认为这是"显著的UX问题"。

### 使用场景与积极反馈

1. **多Agent团队协作**（#43747）：用户描述"我和我的同事们（3人）都在使用 openclaw"，但记忆管理方式存在很大差异（chunking/embedding 存储位置不同），反映了团队部署场景下对一致性的需求。

2. **WebChat/移动端使用**（#97983）：iOS/WebChat 用户反馈消息可追加到文本记录但不触发助手回复的问题，影响移动端使用体验。

3. **模型成本跟踪需求**（#9016）：用户希望将 OpenRouter 的每次调用成本暴露给Agent运行时，以便在回复中附带成本信息，体现对成本透明度的需求。

### 整体满意度评估

- **正面信号**：Signal 通道、控制UI、macOS 集成等方向持续有 PR 推进，社区对项目的活跃度是认可的。
- **负面信号**：大量2-3月提出的高优先级Bug至今仍未修复（如#25592、#43367、#7707等），且部分Issue被关闭后问题仍在复现（#121058），**用户对项目能否妥善治理长期技术债的信心正在动摇**。


## 8. 待处理积压

### 高优先级长期未响应/未解决Issue（自创建以来超过3个月，P1/P2）

1. **[#7707] Memory Trust Tagging by Source**（P2，2026-02-03提出，48评论）— 6个月+未解决，涉及 AI 安全核心问题。
   - 链接: https://github.com/openclaw/openclaw/issues/7707

2. **[#25592] Text between tool calls leaks to messaging channels**（P1，2026-02-24提出，48评论）— 5个半月+未解决，严重影响 UX。
   - 链接: https://github.com/openclaw/openclaw/issues/25592

3. **[#44925] Subagent completion silently lost**（P1，2026-03-13提出，27评论）— 5个月+未解决，影响核心功能稳定。
   - 链接: https://github.com/openclaw/openclaw/issues/44925

4. **[#43367] Multi-agent orchestration is unstable**（P1，2026-03-11提出，13评论）— 5个月+未解决。
   - 链接: https://github.com/openclaw/openclaw/issues/43367

5. **[#47975] Subagent sessions persist after completion, main session becomes unresponsive**（P1，2026-03-16提出）— 5个月+未解决。
   - 链接: https://github.com/openclaw/openclaw/issues/47975

6. **[#72015] active-memory blocks replies and QMD boot init can overload gateways**（P1，2026-04-26提出）— 3.5个月+未解决。
   - 链接: https://github.com/openclaw/openclaw/issues/72015

7. **[#78493] sudo update creates mixed ownership, doctor overwrites config**（P1，2026-05-06提出）— 3个月+未解决，影响 macOS 用户。
   - 链接: https://github.com/openclaw/openclaw/issues/78493

### ⚠️ 特别关注

- **[#121058]** 是过去24小时内评论数最高的Issue（92条），虽然才创建5天，但直接关联此前已关闭的#116277，且用户明确表示问题在关闭后仍持续发生。**建议维护者优先重新评估此问题的根因，避免因"关闭Issue"造成社区信任进一步流失。**

### PR 积压提醒

- **[PR #78035] fix(memory-core): preserve sibling supplement results**（2026-05-05创建，P1，标记"needs proof"）— 3个月+未合并，修复 memory-core 的 `Promise.all` fail-fast 问题。
  - 链接: https://github.com/openclaw/openclaw/pull/78035

---

**日报总结**：OpenClaw 项目今日提交活跃，多个新PR体现了对安全、稳定性和体验的持续投入，但**长期积压的 P1 级稳定性问题（尤其是子代理消息丢失、消息路由污染、多Agent并发可靠性）仍是社区最关注的焦点**，且用户对"关闭但未修复"的容忍度正在降低。建议维护团队优先梳理高热度长期Issue，在修复后再关闭，并在Issue中透明同步修复进度，以重建社区信任。

---

## 横向生态对比

好的，这是基于您提供的各项目动态日报生成的横向对比分析报告。

---

## 个人 AI 智能体开源生态横向对比分析报告 (2026-08-14)

### 1. 生态全景

个人 AI 智能体/自主智能体开源生态正处于**高速迭代与架构分化的关键时期**。头部项目（OpenClaw、Hermes Agent）的用户规模和复杂度已使其面临严峻的稳定性与安全挑战，社区对“关闭但未修复”的容忍度降至低点。与此同时，以 IronClaw 和 ZeroClaw 为代表的新一代项目，正通过“可插拔 Harness”和“安全加固优先”等架构变革，试图从底层解决单体 Agent 的扩展性瓶颈。生态整体呈现出从“功能堆叠”向“稳定性、安全性与可扩展性并重”的转型趋势，多项目在长期记忆、MCP 集成、多 Agent 协作等方向上的共性需求日益凸显。

### 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 版本发布 | 今日核心焦点 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新开/活跃 338, 关闭 162) | 500 (待合并 386, 已合并 114) | 无 | 稳定性问题（消息丢失、路由污染）长期未解，社区信任度承压 | 🟡 **关注** - 高活跃但技术债沉重 |
| **Hermes Agent** | 100 (总更新) | 100 (总更新) | v0.20.1 (补丁) | **严重回归**：网关进程被误杀，多平台消息服务中断 | 🔴 **预警** - 活跃度高但稳定性受挫 |
| **NanoBot** | 11 (新开/活跃 10) | 31 (已合并/关闭 9) | 无 | 密集修复 cron 持久化、会话状态丢失等核心稳定性 Bug | 🟢 **健康** - 信号质量高，迭代密集 |
| **IronClaw** | 50 (总更新) | 50 (总更新) | v1.2.0 (稳定版) | **史诗级架构重构**：Pluggable Agent Loops 拆解落地 | 🟢 **健康** - 架构演进方向明确，执行力强 |
| **ZeroClaw** | 50 (总更新) | 50 (总更新) | 无 | 安全加固（修复路径穿越漏洞）与大型功能 PR 推进 | 🟢 **健康** - 安全与功能并重，处于关键整合期 |
| **CoPaw** | 40+ (总更新) | 40+ (总更新) | v2.1.0, v2.1.0-beta.5 | 发布新版本，社区热议任务中断、安全漏洞指控 | 🟡 **关注** - 迭代快，但面临安全性质疑 |
| **PicoClaw** | 3 (新开/活跃 2) | 9 (待合并 6) | 无 | 依赖批量更新为主，1个 Web UI 性能 Bug 长期无响应 | 🟡 **关注** - 活跃度中等，维护响应待加强 |
| **NanoClaw** | 2 (新开/活跃) | 19 (已合并/关闭 13) | **v2.2.0** (重大更新) | **Agent 模板插件化迁移**与 CI 供应链安全门禁打通 | 🟢 **健康** - 发布节奏快，基础设施硬化 |
| **LobsterAI** | 2 (新开/活跃) | 11 (已合并/关闭 6) | 无 | UI 层统一重构与企业版功能集成 | 🟢 **健康** - 前端整合与商业化推进 |
| **Moltis** | 1 (新开) | 4 (待合并) | 无 | 构建脚本兼容性修复，等待大型功能 PR (CalDAV) 合并 | 🟢 **健康** - 工程修缮与功能积累并行 |
| **NullClaw / TinyClaw / ZeptoClaw** | - | - | - | 过去 24 小时无活动 | ⚪ **静默** - 暂停或维护期 |

### 3. OpenClaw 在生态中的定位

- **核心参照与事实标准**：OpenClaw 凭借其庞大的社区（日均 500+ 条 Issue/PR）和丰富的功能，是当前生态中无可争议的**核心参照项目**。其 issue 讨论、功能请求和 Bug 报告在很大程度上引领了整个生态的技术风向标，例如对子代理稳定性、记忆安全和消息路由等问题的关注，在其他项目中均有体现。
- **优势与挑战**：其优势在于**社区规模、功能广度与生态完整性**。然而，今日日报显示其正面临严峻的**技术债挑战**，大量 P1 级 Bug（尤其是子代理消息静默丢失 #44925）长期未解决，社区耐心正在被消耗。相比之下，IronClaw 和 ZeroClaw 虽然规模较小，但通过“Kernel + 可插拔 Harness”或“安全加固优先”的架构，在**长期演进潜力**上可能更具优势。NanoBot 则在**稳定性修复**上表现突出，其“信号质量”远高于 OpenClaw。OpenClaw 的“霸主”地位正面临来自“更稳”、“更新”的挑战者的压力。

### 4. 共同关注的技术方向

- **稳定与可靠性压倒一切**：
    - **子代理/任务编排的可靠性**：OpenClaw (#44925)、NanoBot (#5377, 合并截断)、CoPaw (#6921, 任务中断) 均报告了在多步骤任务或子代理执行中，结果丢失、中断或静默失败的问题。
    - **消息路由与投递**：OpenClaw (#25592, 内部文本污染通道) 与 Hermes Agent (网关误杀导致消息服务中断) 都反映了在复杂通道环境中，消息的精准、可靠投递是核心难点。
- **安全边界与信任**：
    - **记忆安全**：OpenClaw (#7707, Memory Trust Tagging) 和 LobsterAI (#1156, 记忆质量评分) 关注记忆投毒与数据污染，旨在建立对记忆来源的信任机制。
    - **供应链与依赖安全**：NanoClaw (agent-image 签名验证)、ZeroClaw (修复路径穿越漏洞) 和 CoPaw (安全漏洞指控) 都凸显了从代码到部署全链路的安全性正成为关注焦点。
- **多 Agent / 多任务协作**：OpenClaw (#43367, 多Agent不稳定)、IronClaw (#7482, 可插拔Agent循环) 和 CoPaw (任务模式资源控制) 都在向更复杂的多 Agent 协同场景演进，但相关的状态管理、资源控制和并发稳定性是共同挑战。
- **MCP 与工具生态集成**：NanoBot (MCP 架构预算、MCP Apps 宿主)、IronClaw (MCP 认证卡死) 和 ZeroClaw (Agent Plugins 1.0) 均在探索如何更高效、更安全地管理和接入不断增长的外部 MCP 工具。

### 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键架构差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全功能个人 AI 助手网关 | 技术爱好者、重度个人用户、小型团队 | 单体式网关，功能全面，通过庞大的社区和插件生态扩展 |
| **Hermes Agent** | 带桌面客户端的消息网关 | 注重桌面体验的个人用户 | 桌面应用 + 后端网关模式，强调与本地操作系统的集成 |
| **IronClaw** | **Agent 操作系统 (Kernel)** | 开发者、寻求高度可定制和可编程 Agent 基础设施的团队 | **Kernel + 可插拔外层 Harness** (Claude Code, Codex等)，核心提供调度、安全、审计能力 |
| **NanoBot** | 以 WebUI 为核心的智能体工作台 | 偏好 Web 界面协作的团队 | 强调 WebUI 协作（如 @mentions），以“信号质量”和结构化管理为特色 |
| **ZeroClaw** | 安全与合规优先的 Agent 运行时 | 对安全、审计有严格要求的组织 | **安全加固优先**，拥有 SOP (标准操作程序) 和目标模式等企业级功能 |
| **CoPaw** | 自带商业产品功能 (OS Shell) 的助手 | 追求现代交互体验和产品化功能的用户 | 引入类似操作系统的 Shell 窗口界面，注重产品化和用户体验 |
| **NanoClaw** | 轻量、插件化的 Agent 生态入口 | 追求轻量、可嵌入、快速启动的团队 | **插件化模板 (Agent Plugins 1.0)**，强调供应链安全和 CI/CD 完善度 |

### 6. 社区热度与成熟度

- **第一梯队 (快速迭代，高活跃)**：OpenClaw、Hermes Agent、IronClaw、ZeroClaw。这些项目拥有庞大的社区和极高的 PR/Issue 数量，是生态的绝对主角。
- **第二梯队 (密集迭代，质量巩固)**：NanoBot、CoPaw、NanoClaw。它们保持中等偏上的活跃度，并专注于特定方向（如协作、产品化）进行快速打磨，发布节奏快。
- **第三梯队 (稳步推进，生态补充)**：LobsterAI、Moltis。它们以特定的用户群（如企业版、特定场景）为目标，进行着相对平稳的迭代。
- **第四梯队 (静默或暂停)**：PicoClaw、NullClaw、TinyClaw、ZeptoClaw。活跃度低，其中 PicoClaw 虽有小幅更新，但已出现维护者响应滞后的问题。

### 7. 值得关注的趋势信号

1.  **从“全功能单体”到“模块化内核”演变**：IronClaw 的“Pluggable Agent loops”是最强烈的信号。社区开始意识到，由单一项目维护所有 Agent 逻辑是难以为继的，未来的竞争可能转向“内核能力”（调度、安全、审计）与“外部 Harness”（具体任务执行）之间的标准化接口。
2.  **“稳定性”成为新的核心竞争力**：OpenClaw 的困境和 Hermes Agent 的回归事件表明，当功能趋于同质化时，**可靠性将成为用户选择项目的首要考量**。能够快速、透明地解决技术债的项目（如 NanoBot）将赢得更多信任。
3.  **安全左移与供应链硬化**：NanoClaw 的 agent-image 签名验证、ZeroClaw 的 CI 漏洞修复等项目实践表明，安全不再仅是运行时的问题，而是正在向左移动到 CI/CD 流程和依赖管理环节，成为项目基础设施的一部分。
4.  **WebUI 协作化与本地化**：NanoBot 的会话 @mentions 协作、LobsterAI 的 UI 统一，以及多个项目（如 OpenClaw 的移动端优化）对 Web/移动端体验的投入，表明 **WebUI 正从个人控制台演变为团队协作工具**，对多语言、本地化体验的需求也在上升。
5.  **对 Token 成本的精细化控制**：NanoBot 的 MCP 架构预算、ZeroClaw 的 OpenRouter 缓存、OpenClaw 的限流请求，都反映出随着 Agent 任务复杂度提升，**用户对 API 成本的管理需求正从“事后统计”走向“事中控制”**，这将成为平台型产品的基础能力。

---

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-14

---

## 1. 今日速览

NanoBot 今日活跃度处于**高位**，过去 24 小时共产生 11 条 Issue 更新和 31 条 PR 更新，其中 10 个 Issue 为新开或活跃，9 个 PR 已合并或关闭。值得关注的是，**稳定性修复成为今日主线**：围绕 cron 调度器持久化崩溃、文件容量归档失败、会话状态丢失、合并截断等问题，社区提交了多组针对性 fix PR，其中大部分尚在待合并状态。功能侧，Telegram 贴纸支持、MCP 架构预算、Element SAS 验证等此前讨论的功能均有对应 PR 落地，部分已合并。项目整体处于**密集迭代且健康推进**的状态，暂无新版本发布。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内 Releases 数量为 0。

---

## 3. 项目进展

今日共有 **9 个 PR 合并/关闭**，其中功能性和修复性 PR 均有覆盖：

- **PR #5384 — [CLOSED] fix(webui): restore transcript-only session history**（[链接](https://github.com/HKUDS/nanobot/pull/5384)）：WebUI 侧边栏可重新发现仅有显示转录、无规范会话 JSONL 的历史会话；当两个存储都存在时保持规范元数据的权威性；转录-only 历史可打开、可删除，无需重建有损的模型上下文。这修复了之前会话历史可能"消失"的用户可见问题。
- **PR #5381 — [CLOSED] feat(webui): add native workspace folder picker**（[链接](https://github.com/HKUDS/nanobot/pull/5381)）：为本地托管的 WebUI 会话添加 macOS、Windows、Linux 原生文件夹选择器；仅当网关绑定 loopback 且浏览器连接为本地时展示该能力，Desktop-injected runtime 仍为第一选择。这提升了本地部署的用户体验。
- **PR #5374/#5375 — [CLOSED] fix(cron): keep scheduler alive when job-store persistence fails**（[链接 1](https://github.com/HKUDS/nanobot/pull/5374)、[链接 2](https://github.com/HKUDS/nanobot/pull/5375)）：修复 cron 调度器在单次持久化失败后永久崩溃的静默故障。同一修复提交了三个版本（#5374/#5375 已关闭，#5376 为当前活跃 PR），说明该问题得到了维护者的快速响应和多方验证。
- **PR #4556 — [CLOSED] feat(dream): wire up model_override for Dream consolidation**（[链接](https://github.com/HKUDS/nanobot/pull/4556)）：修复 #4029，在周期性记忆合并期间应用 `DreamConfig.model_override` 配置，使 Dream 合并可以使用独立模型。
- **PR #4550 — [CLOSED] fix(cron): use per-run session key to prevent context sharing across cron runs**（[链接](https://github.com/HKUDS/nanobot/pull/4550)）：修复 #4082，为每次 cron 运行附加运行 ID 到 session key 中，避免后续执行看到先前运行的陈旧上下文。

整体而言，项目在 **cron 调度可靠性、会话历史完整性、本地部署体验**三个方向获得了实质推进。

---

## 4. 社区热点

今日讨论热度较为分散，多个 Issue 各有 1 条评论，无单点爆发。但以下两个 PR 值得关注：

- **PR #5358 — feat(webui): add session collaboration via mentions**（[链接](https://github.com/HKUDS/nanobot/pull/5358)，2 天前创建，状态 OPEN）：为 WebUI 会话赋予稳定的 `@name`，允许用户通过 mention 选择对等会话进行协作。这是对 WebUI 协作能力的重大增强，已标为 `conflict` 需要解决。
- **PR #5376 / #5374 / #5375 — cron 调度器存活修复三部曲**（[链接](https://github.com/HKUDS/nanobot/pull/5376)）：同一修复被提交了三个版本，最终保留 #5376。修复了 `_save_store()` 抛出异常后 `_arm_timer()` 不再被调用导致调度器永久死掉的隐蔽 bug。由于该 bug 可导致 cron 任务静默停摆，社区提交积极性高，值得关注最终合并情况。

---

## 5. Bug 与稳定性

今日 Bug 类 Issue 集中在 **会话持久化和资源管理** 方向，按严重程度排列如下：

| 严重程度 | Issue | 摘要 | Fix PR 状态 |
|---------|-------|------|------------|
| **高** | [#5373](https://github.com/HKUDS/nanobot/issues/5373) — [OPEN] | Cron 调度器在作业存储持久化失败（磁盘满、权限变更、文件锁）后**永久死亡**：`_save_store()` 抛出异常，`_arm_timer()` 位于 `try/finally` 之外导致不再触发下一轮 tick | 已有 PR #5376 待合并 |
| **高** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) — [OPEN] | `Session.enforce_file_cap()` 在归档回调失败时**已先修改内存中的会话**，导致溢出消息被提前丢弃，后续成功保存无法恢复 | 已有 PR #5380 待合并 |
| **高** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) — [OPEN] | `Consolidator.archive()` 截断输入到 token 预算，但调用方仍将 `last_consolidated` 推进到整个原始批次，**被截断的消息永久丢失** | 已有 PR #5379 待合并 |
| **中** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) — [CLOSED] | `exec.allowPatterns` 存在 shell-chain 绕过，可执行非预期命令（安全公告） | 已关闭，但无对应修复 PR 记录，需确认修复方式 |
| **中** | [#5382](https://github.com/HKUDS/nanobot/pull/5382) — [OPEN，PR] | `os.replace()` 在 Windows 上偶发 `WinError 5`（Access denied），导致整个 gateway 崩溃；已在日志中确认两次（2026-08-11） | PR 本身即修复，待合并 |

此外，处于活跃修复中的 PR 还包括 [#5349](https://github.com/HKUDS/nanobot/pull/5349)（修复 settings 测试的时区窗口问题）等。

---

## 6. 功能请求与路线图信号

今日活跃的功能相关 Request 与对应 PR 如下：

| 功能请求 | 链接 | 对应 PR | 状态 |
|---------|------|--------|------|
| **MCP 架构预算** — 大型工具集在模型可视图中的 token 费用过高 ([#5298](https://github.com/HKUDS/nanobot/issues/5298)) | OPEN | PR #5388 — `feat(agent): budget model-visible MCP schemas`（按字节预算裁剪 MCP schema，保留全部内置工具） | OPEN，有实现 |
| **Telegram 贴纸和消息反应** ([#5289](https://github.com/HKUDS/nanobot/issues/5289)) | OPEN | PR #5387 — `feat(telegram): support reusable sticker replies`（暴露贴纸 file_id/emoji/set name，支持可复用贴纸回复） | OPEN，有实现 |
| **MCP Apps 宿主支持** ([#5251](https://github.com/HKUDS/nanobot/issues/5251)) | OPEN | PR #5386 — `feat(mcp): preserve MCP Apps result metadata`（将结构化 app 结果与模型可见文本分离，不扩大模型上下文） | OPEN，有实现 |
| **Matrix 设备信任问题** — bot 设备显示为 "untrusted" ([#4841](https://github.com/HKUDS/nanobot/issues/4841)) | OPEN | PR #5385 — `fix(matrix): complete Element SAS request flow`（接受 `m.key.verification.request`，完整走 ready→SAS→done 流程） | OPEN，有实现 |
| **WebUI 本地化 Agent 活动文本** ([#5366](https://github.com/HKUDS/nanobot/issues/5366)) | OPEN | 暂无对应 PR | 尚无实现 |
| **WebUI 运行中隐藏复制/分叉操作** ([#5368](https://github.com/HKUDS/nanobot/issues/5368)) | OPEN | 暂无对应 PR | 尚无实现 |

值得注意：#5298（MCP 架构预算）、#5289（Telegram 贴纸）、#5251（MCP Apps）、#4841（Matrix SAS）在今日均有对应 PR，说明维护者或社区贡献者正在密集消化此前积压的 Feature Request，这些功能很有希望在下一版本中集体落地。

---

## 7. 用户反馈摘要

从今日 Issues 评论中可提取以下用户声音：

- **Cron 持久化失败的用户体验痛苦**（[#5373](https://github.com/HKUDS/nanobot/issues/5373)）：`rickererer` 明确指出 cron 调度器在磁盘满或权限变化后会**静默永久死亡**，这对依赖定时任务的用户（如心跳、定期清理）是严重可用性问题。这属于典型的"无人值守服务静默挂掉"痛点点。
- **MCP 工具集规模带来的 token 成本焦虑**（[#5298](https://github.com/HKUDS/nanobot/issues/5298)）：`kuaijiemei` 指出大型 MCP 工具集导致 `get_definitions()` 传递过多 schema 给 LLM，上下文 cost 过高。这反映了**生产环境用户对 token 成本的敏感度正在上升**——用户希望精细控制模型可见的工具范围。
- **Telegram 渠道对贴纸支持的期望**（[#5289](https://github.com/HKUDS/nanobot/issues/5289)）：Telegram 用户发送贴纸时 bot 收到的是空/不透明消息，`send_sticker` 从未被调用，反应的 acknowledgement 流程与贴纸场景不匹配。这暴露了多模态渠道在实际社交场景中的适配空隙。
- **WebUI 协作和本地化需求增长**（[#5358](https://github.com/HKUDS/nanobot/pull/5358)、[#5366](https://github.com/HKUDS/nanobot/issues/5366)）：WebUI 的协作（@mention 会话）和本地化（Agent 活动文本随界面语言切换）需求同时出现，说明 **WebUI 正从个人工具走向小团队协作工具**，且国际化用户对中文等多语言体验的期待在上升。
- **Matrix 信任链问题的长期悬而未决**（[#4841](https://github.com/HKUDS/nanobot/issues/4841)）：`orrinwitt` 自 7 月 7 日起提出的 bot 设备在 Element 中显示 "untrusted" 的问题，直到今日才迎来修复 PR（#5385）。这说明 Matrix 端到端加密信任链在 bot 场景下有较多待完善的地方，用户等待了较长时间。

---

## 8. 待处理积压

以下为长期未响应或需关注的重要 Issue / PR：

| 编号 | 类型 | 标题 | 创建时间 | 备注 |
|------|------|------|---------|------|
| [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Issue | Matrix: bot device shows as 'untrusted' in Element | 2026-07-07 | 超过 1 个月，今日已有 PR #5385 修复，值得跟进合并 |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | PR | feat(heartbeat): add model_override config for cheaper heartbeat model | 2026-06-26 | 近 7 周未合并，标有 `priority: p2`；持续被更新说明维护者仍在关注，但未推进合并 |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | PR | feat(heartbeat): add isolated_session config to allow shared session | 2026-06-26 | 同上，同批 heartbeat 系列 PR 待合并 |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Issue | Proposal: budget model-visible MCP schemas for large tool sets | 2026-08-08 | 已有 PR #5388，建议维护者关联并加速审查 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Issue | Feature: Add MCP Apps host support to the WebUI | 2026-08-05 | 已有 PR #5386 实现基础支持，但 WebUI 宿主能力可能仍需更多工作 |

---

**总结**：NanoBot 今日处于密集迭代期，**核心稳定性问题（cron 存活、会话持久化、合并截断）获得了密集的修复 PR，且大多已有对应实现但尚待合并**；功能侧 Telegram 贴纸、MCP 架构预算、Matrix SAS、MCP Apps 元数据四线并进，几乎完成了对主要积压 Feature Request 的一轮响应。项目的"信号质量"较高——Bug 描述详尽、PR 自带测试说明、社区协作积极，整体健康度良好。下一步值得关注的关键动作是：**将 #5376、#5379、#5380 三个稳定性修复尽快合并并发布补丁版本**，同时评估 Pr #5388 / #5387 / #5385 / #5386 在下一版本中的纳入范围。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，这是 2026 年 8 月 14 日的 Hermes Agent 项目动态日报。

---

## Hermes Agent 项目日报 (2026-08-14)

### 1. 今日速览

Hermes Agent 项目今日活跃度极高，过去24小时内共有 100 条 Issues 和 PR 更新，并发布了补丁版本 v0.20.1。然而，**稳定性问题成为今日焦点**。大量高优先级（P1）的 Bug 报告集中指向一个由 v0.20.0 引入的严重回归：`_reap_unsupervised_gateway_orphans` 逻辑在桌面应用启动时误杀正在运行的消息网关（Gateway），导致微信、QQ、Telegram 等消息平台沉默，且无法自动恢复。目前已有多个重复 Issue 被报告，社区影响面较大。同时，Skills Index 陈旧、TUI 界面阻塞等问题也持续存在，维护者需优先处理网关回归问题。

### 2. 版本发布

- **[v0.20.1 (v2026.8.13)](https://github.com/NousResearch/hermes-agent/releases)**：这是一个补丁版本。版本说明指出，此标签是对自 v0.20.0 以来合并的约 656 个 PR 的汇总，为下游消费者（Docker 镜像、托管部署等）提供一个稳定的安装标签。**注意：该版本说明未提及具体的破坏性变更或迁移注意事项，但根据 Issue 报告，v0.20.x 系列（可能包括此版本）存在网关被误杀的回归问题，升级用户需特别关注。**

### 3. 项目进展

尽管修复类 PR 众多，但今日**没有**已合并/关闭的重大功能 PR。多个高价值 PR 仍在待合并状态，显示出项目功能的持续推进：

- **桌面端体验增强**：
    - [PR #85750](https://github.com/NousResearch/hermes-agent/pull/85750)：修复了桌面端配置了远程网关覆盖时，聊天 WebSocket 仍错误连接本地主后端的问题。
    - [PR #82793](https://github.com/NousResearch/hermes-agent/pull/82793)：为桌面端 Review 功能添加 Git 历史查看支持。
- **平台集成修复**：
    - [PR #85747](https://github.com/NousResearch/hermes-agent/pull/85747)：修复 Slack 线程根消息中附件仅为文件名而无实际内容的问题。
    - [PR #85759](https://github.com/NousResearch/hermes-agent/pull/85759)：修复 Telegram SDK 延迟安装后 `TypeHandler` 未重新绑定导致的启动失败。
- **安全性与配置**：
    - [PR #81403](https://github.com/NousResearch/hermes-agent/pull/81403)：在审批提示中可视化显示不可见 Unicode、控制字节等，防止 prompt 注入攻击，提升安全性。
    - [PR #85752](https://github.com/NousResearch/hermes-agent/pull/85752) 和 [PR #85757](https://github.com/NousResearch/hermes-agent/pull/85757)：修复 `agent.reasoning_effort` 配置项被误报为未知键的问题。

### 4. 社区热点

今日讨论热度高度集中在**网关稳定性**问题上，多个高相关性的 Issue 和 PR 形成热点。

- **[Issue #83683](https://github.com/NousResearch/hermes-agent/issues/83683): Desktop restart reaps the live gateway... (评论: 20)**：这是**核心回归问题**，详细描述了 Windows 桌面应用重启后强制杀死网关且不重新启动的 Bug。该问题在 macOS 和 Windows 上均有报告，用户反响强烈。
- **[Issue #84834](https://github.com/NousResearch/hermes-agent/issues/84834): Webhook Revolution (评论: 16)**：这是一个关于 Webhook 全面修复的 Meta-issue（EPIC），讨论度很高，反映了社区对 Webhook 功能的关注和修复期望。
- **[Issue #69592](https://github.com/NousResearch/hermes-agent/issues/69592): /sessions and /models overlays invisible... (评论: 12)**：TUI 核心功能（如 `/sessions`）在加载环境组件后失效的问题，已持续 13 天，严重影响使用 TUI 的用户。
- **[Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616): Skills Index is stale or degraded (评论: 25)**：自动探针发现 Skills 索引文件已过期，导致技能目录可能不准确，属于基础设施层面的问题。

**分析：** 社区热点清晰地指向了 v0.20.0 版本引入的稳定性回归和长期存在的 TUI 问题。用户对核心功能（消息传递、会话管理）的可靠性有很高要求，这类问题最容易引发大量反馈。

### 5. Bug 与稳定性

今日 Bug 报告数量多，且严重性高，**核心关键词是 "回归 (regression)"**。

**🔴 严重 (P0/P1)：**

- **[Issue #85344](https://github.com/NousResearch/hermes-agent/issues/85344) / [#85738](https://github.com/NousResearch/hermes-agent/issues/85738) / [#85044](https://github.com/NousResearch/hermes-agent/issues/85044) / [#84855](https://github.com/NousResearch/hermes-agent/issues/84855) / [#85368](https://github.com/NousResearch/hermes-agent/issues/85368) (均为 P1)**：这是一组**高度相关的重复 Bug**，核心问题是桌面应用（`serve` 后端）启动时，会误杀由 `launchd`（macOS）或“计划任务”（Windows）等外部 Supervisor 管理的网关进程，且无法恢复。这导致所有消息平台（微信、QQ、Telegram）静默失效，直到用户手动重启网关。这是 **v0.20.0 的严重回归**，目前**已有修复 PR？**：尚未看到针对此问题的直接修复 PR。有 PR [PR #85750](https://github.com/NousResearch/hermes-agent/pull/85750) 涉及桌面端连接问题，但未明确指出是此回归的修复。
- **[Issue #81639](https://github.com/NousResearch/hermes-agent/issues/81639) (已关闭, P0)**：`_canonicalize_api_tool_calls` 函数会修改持久化历史记录，导致会话卡死在纯推理回复状态。该 Issue 今日被标记为“重复”并关闭，说明已有解决方案或合并到其他 PR 中。

**🟠 中等 (P2)：**

- **[Issue #83846](https://github.com/NousResearch/hermes-agent/issues/83846)**：Windows 更新流程缺陷，ZIP 回退会删除已构建的桌面应用且不会重建，后续更新还提示“已是最新”。
- **[Issue #83427](https://github.com/NousResearch/hermes-agent/issues/83427)**：桌面应用中 `browser_exec` 工具崩溃，因为 `PYTHONPATH` 指向了 Hermes 自身的 venv，导致 `pydantic_core` 导入失败。
- **[Issue #80117](https://github.com/NousResearch/hermes-agent/issues/80117)**：网关中 SQLite POSIX 锁冲突导致 `APIConnectionError`。
- **[Issue #52339](https://github.com/NousResearch/hermes-agent/issues/52339)**：macOS 上 `hermes update` 命令会重建本地仓库的桌面应用，但 `/Applications/Hermes.app` 的安装包却未更新，造成“精神分裂”状态。
- **[Issue #76267](https://github.com/NousResearch/hermes-agent/issues/76267)**：Windows 平台上，当远程终端后端拆除时，`sync_back` 同步远程文件更改失败，可能导致远程技能/配置修改静默丢失。

**🟡 轻微 (P3)：**

- **[Issue #83390](https://github.com/NousResearch/hermes-agent/issues/83390)**：辅助标题生成在 DeepSeek 模型上失败 (HTTP 400)。
- **[Issue #85104](https://github.com/NousResearch/hermes-agent/issues/85104)**：桌面端聊天视图偶尔重复渲染同一助手消息（前端问题）。
- **[Issue #85745](https://github.com/NousResearch/hermes-agent/issues/85745)**：桌面端切换配置文件标签后，会话列表显示错误。
- **[Issue #84058](https://github.com/NousResearch/hermes-agent/issues/84058)**：macOS 桌面端，工具调用开始流式传输时，输入框光标丢失。

### 6. 功能请求与路线图信号

- **本地优先的 Agent 记忆**：[Issue #85418](https://github.com/NousResearch/hermes-agent/issues/85418) 提出一个基于 Hermes 构建的、本地优先、零依赖的记忆层方案，并希望与现有方案（如 Honcho）对标。这是一个有潜力的创新提案。
- **平台原生客户端**：[Issue #35966](https://github.com/NousResearch/hermes-agent/issues/35966) 再次获得关注，社区仍期待一个不依赖第三方消息平台、直接与本地 Gateway 交互的桌面/移动客户端。虽然已有 Electron 桌面应用，但此需求表明用户希望有更轻量、更原生的交互方式。
- **Telegram 冷启动策略**：[Issue #84317](https://github.com/NousResearch/hermes-agent/issues/84317) 建议允许用户在 Telegram 冷启动时选择不丢弃堆积的更新（`drop_pending_updates`），以避免消息丢失。
- **共享生命周期钩子**：[Issue #67798](https://github.com/NousResearch/hermes-agent/issues/67798) 提议将事件钩子系统从网关独有提升为所有执行表面（CLI、TUI、Cron）共享的运行时契约，这将是架构层面的一项改进。

### 7. 用户反馈摘要

- **核心痛点：** 用户对 v0.20.0 版本引入的稳定性回归感到强烈不满，尤其是网关被误杀导致消息服务中断的问题，严重影响了日常使用。
- **高频抱怨：** TUI 界面在特定配置下无法使用 `/sessions` 等核心命令，功能处于“瘫痪”状态，用户期望尽快修复。
- **满意度：** 用户对功能类 PR（如 Slack 附件修复、Git 历史查看）表示认可，但稳定性问题占据了主导地位。社区有“sponsor”用户（如 [Issue #85418](https://github.com/NousResearch/hermes-agent/issues/85418) 的作者）认可项目中长期以来的帮助，并愿意为生态贡献组件，表明社区仍有较高的参与热情。

### 8. 待处理积压

- **网关误杀回归 (高优先级)**：以 [Issue #83683](https://github.com/NousResearch/hermes-agent/issues/83683) 为代表的多个 P1 问题，需要**立即**定位并修复，这是当前项目健康度的最大威胁。
- **TUI 阻塞问题 (高优先级)**：[Issue #69592](https://github.com/NousResearch/hermes-agent/issues/69592) 已存在 13 天，涉及 TUI 核心功能，需要尽快解决。
- **Skills Index 陈旧 (中优先级)**：[Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) 影响技能目录的准确性，是外部用户可以感知的数据质量问题。
- **长期功能请求 (中优先级)**：[Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438) 关于富电子表格技能的请求，以及 [Issue #33049](https://github.com/NousResearch/hermes-agent/issues/33049) 关于使凭证池 TTL 可配置的请求，都已开放较长时间，需要维护者评估。
- **PR 积压**：包括 [PR #69182](https://github.com/NousResearch/hermes-agent/pull/69182) (TUI 配置不存在时快速失败)、[PR #77518](https://github.com/NousResearch/hermes-agent/pull/77518) (Langfuse 追踪辅助 LLM 调用) 等在内的一批有明确价值的 PR 仍处于待合并状态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-14 | 数据窗口：过去 24 小时**


## 1. 今日速览

PicoClaw 在过去 24 小时内保持了中高活跃度：共产生 3 条 Issue 更新和 9 条 PR 动态，其中 6 个 PR 处于待合并状态。今日动态以 **Dependabot 批量依赖更新** 为主导（6/9 条 PR），另有 1 个 Web 前端锁文件修复 PR 待审。Issue 侧新增 2 个功能请求（ASR 模型泛化、子代理动态模型覆盖）和 1 个已知 Web UI 输入延迟 Bug（已持续 3 周+ 未修复）。**无新版本发布**，AWS SDK、Anthropic SDK 等依赖升级进度略滞后于上游，有 3 个旧 PR 被新 PR 取代后关闭。整体项目健康，但需关注 Web UI 性能问题的修复进度和依赖更新合并节奏。


## 2. 版本发布

> 过去 24 小时无新版本发布。上次发布版本为 **0.3.1**（Web UI 输入延迟 Issue #3281 中用户所使用版本）。建议关注后续版本迭代节奏。


## 3. 项目进展

**今日无 PR 被合并。** 3 个 PR 被关闭（均为 Dependabot 旧批次被新批次取代而自动关闭）：

| PR | 说明 | 状态 |
|---|---|---|
| [#3304](https://github.com/sipeed/picoclaw/pull/3304) | anthropic-sdk-go 1.55.1 → 1.61.0 | 被 #3334 取代 |
| [#3305](https://github.com/sipeed/picoclaw/pull/3305) | bedrockruntime 1.53.3 → 1.56.2 | 被 #3336 取代 |
| [#3306](https://github.com/sipeed/picoclaw/pull/3306) | aws-sdk-go-v2/config 1.32.25 → 1.32.33 | 被 #3335 取代 |

**待合并的重要 PR：**

| PR | 内容 | 价值评估 |
|---|---|---|
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | 修复 `web/frontend/pnpm-lock.yaml` 中重复映射键导致的构建失败 | ⚠️ **高** — 该问题会导致 Web 前端无法通过 pnpm 安装依赖，阻塞所有前端开发 |
| [#3334](https://github.com/sipeed/picoclaw/pull/3334) | anthropic-sdk-go 1.55.1 → 1.62.0 | 中 — 跨 7 个 minor 版本，可能带来 Anthropic API 新特性支持 |

其余 4 个 PR 为 AWS SDK 相关依赖升级（#3332、#3335、#3336）及 Matrix 协议库升级（#3333），属常规维护。


## 4. 社区热点

| 热点 | 类型 | 讨论热度 | 核心诉求 |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI 输入延迟 | Bug | 5 评论 / 1 👍 | 当会话历史稍长时，Web 输入框严重卡顿。**该 Issue 已开放 24 天，至今无 maintainer 回应** |

**Top 1 热点：**[#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI chat input is very laggy

- **详情**：用户 `xpader` 在 PicoClaw 0.3.1 / Go 1.25.11 环境下，当会话历史积累到一定长度后，输入框出现严重延迟。这直接影响核心使用体验。
- **关键信号**：① 24 天无维护者响应是对社区信任的消耗；② 同类性能问题可能影响更多用户但未上报。
- **建议**：优先排查前端渲染长对话时的性能瓶颈（可能是 DOM 节点过多或状态更新机制低效）。

> 另：今日 2 个新 Feature 请求（#3330、#3331）暂无评论，暂未形成讨论热度。


## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🟠 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入延迟（随历史增长恶化） | 开放 24 天无响应，无修复 PR |
| 🔴 高（构建阻断） | [#3318](https://github.com/sipeed/picoclaw/pull/3318) | `pnpm-lock.yaml` 重复键导致前端依赖安装失败 | ✅ 已有修复 PR 待合并，已开放 9 天 |

**特别提醒**：#3318 虽为 PR 而非 Issue，但其对应的构建阻塞问题会阻止所有开发者进行 Web 前端开发，严重程度较高，建议优先合并。


## 6. 功能请求与路线图信号

| Issue | 需求 | 可行性分析 |
|---|---|---|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | **ASR 模型泛化** — 支持任意 `/audio/transcriptions` 兼容模型，不再硬编码 `*-whisper-*` 前缀 | **高** — 当前硬编码方式已落后（用户指出 Whisper 老旧且慢），通过 `whisper-transcription` 配置项可向后兼容，改动集中在 `asr.go` |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | **动态模型覆盖** — `delegate`/`spawn`/`subagent` 工具支持调用时指定模型 | **中高** — 需要设计 API 变更，但价值明确（当前模型选择过于静态）。可能与 [#3331](https://github.com/sipeed/picoclaw/issues/3331) 在配置系统上有协同 |

**路线图信号**：两个请求均与“模型灵活性”相关，推测项目当前模型选择机制存在结构性限制。若版本 0.4 考虑加强模型管理，这两个诉求大概率被纳入。


## 7. 用户反馈摘要

| 来源 | 用户声音 | 洞察 |
|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | “输入非常卡顿，会话历史稍长时几乎无法打字” | 长会话性能是 Web UI 的核心痛点，影响日常可用性 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 用户特意标注了精确的复现步骤和三方版本信息 | 用户提交质量高，期望得到快速响应但现在已等待 24 天 |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | “`*-whisper-*` 太老且太慢” | 用户对语音转录质量的期望超过当前 Whisper 系列模型能力，有升级诉求 |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | 明确列举了 3 个工具当前模型确定的静态逻辑 | 用户对代码逻辑理解深入，说明其是深度使用者，此类反馈应重视 |


## 8. 待处理积压

| 项目 | 类型 | 等待时长 | 优先级建议 |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI 输入延迟 | Issue | **24 天** 无维护者响应 | 🔴 **高** — 核心功能性能问题 + 用户等待时间过长 |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) — pnpm-lock.yaml 修复 | PR | 9 天待审 | 🔴 **高** — 阻塞前端构建，应尽快合入 |
| 依赖更新积压 | 6 PR | #3332-#3336（今日新增），#3304-#3306（7/30 创建，已被取代） | 🟡 中 — 建议维护者每周定期合并依赖 PR，避免旧批次堆积后被取代的浪费循环 |

> ⚠️ **特别关注**：#3281 已开放 24 天且 5 条评论、1 个 👍，维护者零响应。长静默期可能引发社区负面情绪，建议至少给出一句回应说明排查计划。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-14** | **数据窗口：2026-08-13 00:00 – 2026-08-14 00:00 UTC**


## 1. 今日速览

NanoClaw 在过去 24 小时迎来 **v2.2.0 正式发布**，核心特性为 **Agent 模板的插件化迁移（Agent Plugins 1.0.0）**，该变更通过 #3220 落地，为模板系统带来了格式迁移和安全性强化。项目活跃度处于**高位**：19 条 PR 更新（13 条已合并/关闭），其中 [core-team] 围绕 agent-image 签名验证门禁的 CI 改造链（#3236 → #3243）占据主导，表明项目在 **供应链安全和发布自动化** 方向上有明确投入。与此同时，2 条活跃 Issue 分别暴露了模板 ID 前缀缺失（已修复）和未知发送者审批流存在无限审批卡问题（待处理），后者是当前最需要关注的用户侧缺陷。总体而言，项目处于 **快速迭代 + 基础设施硬化** 阶段，健康度良好。


## 2. 版本发布

### v2.2.0

**核心特性：Agent 模板 → Agent Plugins 1.0.0 迁移**

- **原地更新语义**：`ncl groups create --template <ref>` 在目标 group 已携带该模板插件时，将执行**原地更新**而非创建重复 agent。Dry-run 模式会打印所有插件管辖表面的变更计划（插件文件、skills、MCP 配置等）。
- **格式迁移**：模板目录结构升级为 Agent Plugins 1.0.0 规范（由 PR #3220 落地）。

**破坏性变更（Breaking Changes）**：
- 旧版模板目录格式不再兼容，需按 1.0.0 规范迁移。
- Agent 模板的 stamp-time 安全性强化（symlink/caps/secret 加固）属于引擎级变更，可能影响依赖旧格式的外部工具。

**迁移注意事项**：
- 现有模板需手动/脚本化迁移至新目录结构。
- `versions.json` 中 agent-image 已重新固定至 `hardened-2026-08-13`（#3236），镜像尺寸微增（+44KB），主要携带项目自身内容更新。

> 发布 PR：[#3237 chore(release): v2.2.0](https://github.com/nanocoai/nanoclaw/pull/3237)


## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) | feat!: agent templates become Agent Plugins 1.0.0 directories | **v2.2.0 核心变更**，模板引擎整体迁移至新格式，附带安全性强化 |
| [#3231](https://github.com/nanocoai/nanoclaw/pull/3231) | feat(codex,opencode): honor plugin MCP cwd in both provider config writers | 完成插件 MCP 工作目录支持的另一半（注册表部分），Codex/OpenCode 配置生成器均开始正确处理 cwd |
| [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) | fix(telegram): generate pairing codes with a CSPRNG, not Math.random() | **安全修复**：Telegram 配对码从可预测的 `Math.random()` 迁移至 `crypto.randomInt`，码空间由 4 位扩展，消除暴力破解风险 |
| [#3236](https://github.com/nanocoai/nanoclaw/pull/3236) | versions: repin the agent image to hardened-2026-08-13 | 基础镜像安全更新，附带自有内容变更 |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | feat(setup): template setup flow in the wizard and first-agent stamping | 设置向导的模板流程 + 首个 agent 盖章，建立在 #3220 之上（该 PR 为 stacked 链中的下半部分） |
| [#3238](https://github.com/nanocoai/nanoclaw/pull/3238) | ci: let verify-agent-image run on every PR so it can gate | 修复路径过滤导致的门禁失效问题，使镜像验证成为真正的 PR 硬性检查 |
| [#3240](https://github.com/nanocoai/nanoclaw/pull/3240) | ci: open the agent-image bump PR from a dispatch | 镜像升级的 PR 开始由 AWS worker 的 `repository_dispatch` 异步触发，凭证分离（AWS 侧 + GitHub 侧） |

**关键判断**：项目今日实质向前推进了两个大的方向——**① Agent 模板的插件化与安全加固（#3220 + #2909，构成 v2.2.0 的主体）**；**② agent-image 供应链签名验证的 CI 门禁打通（#3238 + #3240 + #3158 合并链）**。前者涉及产品形态演进，后者涉及发布基础设施的完整性。


## 4. 社区热点

### 最受关注 Issue：[#3235 Unknown-sender approval: webhook/bot senders generate unbounded approval cards](https://github.com/nanocoai/nanoclaw/issues/3235)

- 作者：pentar69 | 创建：2026-08-13 | 评论：0 | 状态：Open
- **诉求分析**：当 messaging group 配置了 `unknown_sender_policy = 'request_approval'` 时，来自 **自动化发送者**（webhook、bot）的消息会触发与人类发送者相同的审批流程。由于自动化发送者持续推送，系统会**无限生成审批卡片**，且拒绝操作不生效（不持久化）。
- **背后的深层需求**：这是一个典型的 **策略分类缺陷** —— 审批策略应当能区分人类与自动化发送者，或对自动化发送者采取不同的降级策略（如仅记录日志、自动拒绝、或域名白名单）。该 Issue 代表了真实生产环境下 "bot 打爆审批流" 的运维痛点，解决它需要协议层面的设计决策：是否引入 sender 类型识别、审批策略的分级（allowlist / rate-limit / auto-denylist）等。

### 合并链讨论区：[#3242 DO NOT MERGE — live-fire test of the signature approver](https://github.com/nanocoai/nanoclaw/pull/3242)

- 作者：gavrielc（core-team）
- **内容**：一个明确的实验性 PR（Draft 状态，标注 DO NOT MERGE），用于实弹测试签名审批人链路（verify → approve-agent-image → 独立 cosign 验证 → 审批 review）。
- **社区意义**：虽然该 PR 本身不会被合并，但它向社区展示了 CI 改造链的完整执行过程，是核心团队透明化开发流程的一个良好信号。它同时回答了 "签名审批是否可独立验证" 这一核心安全问题。

### 其他值得注意的活跃 PR
- [#3243](https://github.com/nanocoai/nanoclaw/pull/3243)（OPEN）：修复 `verify-agent-image` 将 auto-merge 失败误判为镜像验证失败的问题。这是对 #3238 的补充修复。
- [#3218](https://github.com/nanocoai/nanoclaw/pull/3218)（OPEN）：CLI 支持有界 JSON stdin 输入。一个通用性较强的基础能力提案，等待合并中。


## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| **高** | [#3234](https://github.com/nanocoai/nanoclaw/issues/3234) | 模板 agent group 生成的 ID 缺少 `ag-` 前缀，导致 OneCLI `ensureAgent` 拒绝该 ID | **已关闭**（修复合入） |
| **高** | [#3235](https://github.com/nanocoai/nanoclaw/issues/3235) | 未知发送者审批流被 webhook/bot 打爆，产生无界审批卡片，拒绝操作不持久 | **Open**，无对应 fix PR |
| **中** | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) | Telegram 配对码使用 `Math.random()`，可预测 → 已修复为 CSPRNG（合入） | **已修复** |
| **中** | [#3243](https://github.com/nanocoai/nanoclaw/pull/3243) | `verify-agent-image` 中 auto-merge 失败被误判为镜像验证失败，导致门禁误报 | **Open**，修复 PR 待合入 |
| **低** | [#3230](https://github.com/nanocoai/nanoclaw/pull/3230) | skills 移除文档仍指向已退役的 data/env 镜像 | **Open**，文档修复 PR 待审查 |

**总结**：#3234 已快速闭环（Issue 创建 → 修复合入，间隔约 1 天），响应速度良好。**#3235 是当前最严重的未决 Bug**，影响生产环境中启用 `request_approval` 策略的团队，建议优先处理。


## 6. 功能请求与路线图信号

### 可能被纳入下一版本的功能

**1. CLI 有界 stdin JSON 输入（[#3218](https://github.com/nanocoai/nanoclaw/pull/3218)）**
- 为 `ncl` 增加 `--stdin-json` 参数，允许有界/受限地传递结构化参数。这是一个基础能力增强，不会改变现有请求框架。考虑到该 PR 已开放 5 天且有多条评论，有较大概率进入下一版本。

**2. Agent-image 自动审批发布循环（[#3241](https://github.com/nanocoai/nanoclaw/pull/3241) + [#3242](https://github.com/nanocoai/nanoclaw/pull/3242)）**
- 核心团队正在推进 "签名即审批" 机制：通过可验证的发布者签名取代手动点击。当前实现默认关闭（`AGENT_IMAGE_AUTO_APPROVE=true` 启用），且处于 live-fire 测试阶段。这属于 **CI/CD 基础设施的路线图级优化**，虽然不直接暴露为面向用户的 feature，但会显著提升发布效率与安全性。

**3. 设置向导中的模板流（[#2909](https://github.com/nanocoai/nanoclaw/pull/2909) 合入）**
- 配合 v2.2.0 发布，设置向导已支持模板流程和首个 agent 盖章，降低了新用户的初始化门槛。

### 来自用户侧的新需求信号
- **#3235 本质上是功能请求**：用户需要 "未知发送者" 策略能区分人类与自动化发送者，或提供针对 bot 的替代策略选项。如果社区反馈强烈，该 Issue 可能推动 2.3.0 版本中引入 sender 类型识别。


## 7. 用户反馈摘要

> 注：截至数据窗口，只有两条 active Issues，且 **#3234 只有 1 条评论**，#3235 尚无评论。以下基于 Issue 描述和 PR 讨论中透出的用户信号进行提炼。

**痛点 / 不满**：
- **模板 ID 前缀不一致（#3234）**：`--template` 和 `--folder` 两种创建路径生成的 ID 格式不统一（一个有 `ag-` 前缀、一个没有），暴露了内部实现细节不一致的问题。用户在描述中明确指出该问题会导致 OneCLI 集成失败——这反映了多子命令/多路径下的一致性维护需求。
- **审批策略颗粒度过粗（#3235）**：`request_approval` 策略无法区分人类和自动化发送者，说明当前策略模型的分类维度还比较单一，生产环境的多样性是一个未满足的需求。
- **文档与镜像不一致（#3230 描述）**：移除某些 skills 时文档仍指向已退役的镜像地址，说明文档维护经常滞后于代码变更。

**表达满意 / 值得肯定**：
- **CI 门禁硬化的透明度**：[#3239](https://github.com/nanocoai/nanoclaw/pull/3239) 和 [#3242](https://github.com/nanocoai/nanoclaw/pull/3242) 虽然是 "DO NOT MERGE" 的实验性 PR，但核心团队公开进行 live-fire 测试的方式，传递了对安全门禁的认真态度，社区可从中获得信任感。
- **安全修复及时**：#3229（Telegram 配对码 CSPRNG 修复）从提交到合入仅 3 天，响应快速。


## 8. 待处理积压

### 长期未响应的活动 PR（需维护者关注）

| PR | 标题 | 创建时间 | 停留天数 | 说明 |
|---|---|---|---|---|
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | fix(formatter): treat unknown slash commands as normal chat | 2026-05-08 | **98 天** | 修复未知斜杠命令被误分类为 `passthrough` 导致 SDK 响应被丢弃的问题。属于用户可见的功能缺陷，需要维护者尽快 review。 |
| [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) | feat(skills): /add-hindsight — bundled MCP wrapper for Hindsight memory | 2026-05-11 | **95 天** | 将 NanoClaw v2 agent groups 接入 Hindsight 长期记忆引擎。是一个完整的功能集成技能，若社区对长期记忆有需求，值得排期评估。 |

### 长期未响应的重要 Issue

| Issue | 标题 | 创建时间 | 停留天数 | 说明 |
|---|---|---|---|---|
| 无长期未响应的 Open Issue | — | — | — | 当前 2 条 Issue 均为 24 小时内创建，响应及时。 |

### 需要关注的风险
- **#3235 暂无修复计划**：如果该 Issue 在未来 48 小时内未获得任何 assignee 或 triage 标签，建议维护者在社区中主动声明处理计划，避免用户侧产生 "反馈无门" 的负面体验。
- **CI 门禁链的最终收尾**：#3243 仍为 OPEN，如果其修复延迟合入，`verify-agent-image` 门禁在 auto-merge 失败场景下会产生误报，阻塞正常 PR 合并流。

---

*本报告由 AI 分析师根据 GitHub 公开数据自动生成，仅供参考。*
*数据窗口：2026-08-13 00:00 – 2026-08-14 00:00 UTC*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-14

---

## 1. 今日速览

IronClaw 项目今日活跃度显著提升，24小时内产生50条Issue更新和50条PR更新，其中重大架构演进 **#7482 "Pluggable agent loops"（可插拔 Agent 循环）史诗级重构** 进入密集落地阶段，由核心维护者 `serrrfirat` 一次性拆解并关闭了 16 个子任务，标志着项目从"单体Agent运行时"向"Kernel + 可插拔外置Harness"的架构切换全面铺开。同时，**v1.2.0 正式版** 于昨日发布，完成从 RC 到 Stable 的升级，多项性能优化（事件合并写入、心跳日志精简、数据库写入压测框架）正在持续推进中。社区侧出现多个外部集成反馈（MCP 认证卡死、GitHub 扩展假连接等），稳定性打磨与外延扩张并行，整体项目健康度良好。

---

## 2. 版本发布

### ironclaw-v1.2.0 — 2026-08-13

**发布链接**: https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.2.0

**发布说明**:
- 由 `1.2.0-rc.3` 稳定晋升，包含 RC2 和 RC3 中验证的所有修复，以及 RC1 的完整功能集
- **关键修复（RC3）**: 运行时容器镜像现在预装 `curl`，使容器内 HTTP 健康检查可正常执行（编排器通过该机制探测 worker 状态）

**破坏性变更**: 本次发布为稳定晋升，不引入新的破坏性变更。

**迁移注意事项**: RC 版本用户可直接升级至 Stable；容器镜像内容有变化（新增 `curl`），自建镜像的用户需重新拉取基础镜像。

---

## 3. 项目进展

### 🏗️ 架构重构主线：#7482 Pluggable Agent Loops — 大规模拆解落地

今日最重磅进展：核心维护者 `serrrfirat` 将史诗级重构 #7482 拆解为 17 个可独立交付的工作流（Workstream），其中 **16 个已关闭**，形成从设计决策到执行落地的完整闭环。关键已关闭子任务包括：

- **[#7611] HarnessDriver v1 契约**（WS3 核心）— 定义检查点 blob、退出分类、事件最低要求；明确将 ACP 降级为一种 driver 实现而非架构中心 [链接](https://github.com/nearai/ironclaw/issues/7611)
- **[#7607][#7606][#7608][#7609][#7610] Egress 安全链**（WS1+M0）— 从 spike 验证到 sandbox 出口代理（iron-proxy）接入、每运行粒度的配置渲染器、审计桥接到 DurableEventLog、模型提供商 passthrough（替代 WS2 推理网关） [链接](https://github.com/nearai/ironclaw/issues/7606)
- **[#7613][#7616][#7618] Phase-0 Harness 适配**（WS3/WS5）— 确定 claude-code、pi、codex 三个外部 harness + 原生 Rust loop 作为基线；固定版本 agent 镜像构建管线；每线程持久化 workspace 挂载替代热容器 [链接](https://github.com/nearai/ironclaw/issues/7613)
- **[#7614][#7615] Capability socket**（WS4）— 沙箱内 agent 通过认证 socket 访问 HostRuntime 能力；`ic` CLI 聚合 MCP 投影减少模型往返 [链接](https://github.com/nearai/ironclaw/issues/7614)

**当前唯一优先构建项**：PR #7624（v0: ACP harness executor — claude-code as loop），其余三个整合任务（#7621/#7622/#7623）作为延迟阶梯，需在 v0 验证槽位后逐级启动。 [链接](https://github.com/nearai/ironclaw/issues/7624)

### 🧵 Unbound Turns 模型切换（PR #7634/#7562/#7633）

`BenKurrek` 推动的"线程为工作单元、单次 submit_turn"模型进入最终阶段：PR #7634 完成全部切换（预置历史、OpenAI 兼容、强制 tool_choice、运行限制），堆叠在已关闭的 #7633（prepared-context 入口 + 内核绑定引用删除）之上 [链接](https://github.com/nearai/ironclaw/pull/7634)。

### 📄 文档结构化执行契约（PR #7548）

为定时自动化引入版本化结构化执行契约（目标、成功标准、输出指令、无结果行为、允许能力、所需技能），新创建的自动化必须携带契约 [链接](https://github.com/nearai/ironclaw/pull/7548)。

### 🔧 性能优化批量涌入

- **PR #7628**: 移除心跳日志 churn，保留租约时间戳权威性 [链接](https://github.com/nearai/ironclaw/pull/7628)
- **PR #7629**: 减少触发器与出站状态写入（初始 fire claim 时做修剪） [链接](https://github.com/nearai/ironclaw/pull/7629)
- **PR #7631**: 合并运行时里程碑事件写入（CoalescingEventSink） [链接](https://github.com/nearai/ironclaw/pull/7631)
- **PR #7630**: 新增 per-turn Postgres 写入压测框架，量化每轮数据库写入 [链接](https://github.com/nearai/ironclaw/pull/7630)

### 📦 依赖与文档质量

- **PR #7506（已合并）**: 17 个 Rust 依赖批量升级 [链接](https://github.com/nearai/ironclaw/pull/7506)
- **PR #7378**: doc-fact 契约测试（CLI/manifest/Responses 声明与真实行为绑定） [链接](https://github.com/nearai/ironclaw/pull/7378)
- **PR #7376（已关闭）**: check-guidance 门禁扩展到 docs/ 全部页面与中文镜像 [链接](https://github.com/nearai/ironclaw/pull/7376)

---

## 4. 社区热点

### 🔥 最热 Issue：#7482（评论数 6）

**Pluggable agent loops 史诗** — Twitter/X 级别的架构讨论战场。核心论题：IronClaw 应成为 **Kernel**（调度、租户隔离、能力膜、密钥中介、出口边界、持久审计），而将 Agent 循环和逐集成工具代码外包给"现成 Harness"（Claude Code、pi、codex 等）。这一方向意味着项目从"做 Agent"转向"做 Agent 的操作系统"，是 IronClaw 迄今最重大的战略转向。社区关注焦点在于安全边界（沙箱 egress）与兼容性（ACP 协议降级）。 [链接](https://github.com/nearai/ironclaw/issues/7482)

### 💬 高强度讨论：#6257（评论数 4）

**PDF 发送/生成 mime_type 错误** — 已关闭。这是影响真实用户生产使用的 bug，从 Slack 渠道反馈流入 GitHub，修复方案已闭环。 [链接](https://github.com/nearai/ironclaw/issues/6257)

### 📢 新晋关注：#2117（评论数 2，👍 1）

**ironclaw-bridge 本地文件/MCP 桥接守护进程** — 云托管场景下，用户无法访问笔记本电脑本地文件（Obsidian vaults、本地项目目录），此提案旨在搭建隧道系统打通云与本地。社区有实际需求支撑。 [链接](https://github.com/nearai/ironclaw/issues/2117)

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🔴 高 | [#7626](https://github.com/nearai/ironclaw/issues/7626) | 自定义 MCP 需浏览器/邮箱认证时连接卡死（MKT1 场景被阻塞） | OPEN，无 PR |
| 🔴 高 | [#7589](https://github.com/nearai/ironclaw/issues/7589) | NEAR AI Cloud 上 Sonnet-5 连续三天返回 500 错误（关联 cloud-api#920） | CLOSED |
| 🟠 中 | [#7627](https://github.com/nearai/ironclaw/issues/7627) | GitHub 扩展输入任意凭据（如 "1"）后显示已连接，实际不可用 — 虚假成功状态误导用户 | OPEN，无 PR |
| 🟡 低 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆不可靠召回（2026-07-23 Champions 周会多名测试者报告） | OPEN，无 PR |
| 🟢 修复 | [#6257](https://github.com/nearai/ironclaw/issues/6257) | PDF 附件 mime_type 校验错误 | CLOSED |

**稳定性趋势**: 今日关闭了 Sonnet-5 500 错误与 PDF mime_type 问题，但新增了 MCP 认证卡死和 GitHub 扩展假连接两个外部集成类 bug，提示项目在快速扩展 harness 边界的同时，需要加强第三方集成认证状态的测试覆盖。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本

- **Pluggable Harness 执行器（v0）** — #7624 已标记"当前唯一优先构建项"，claude-code 作为首个外部 harness 的实验将直接验证 #7482 的整体架构可行性 [链接](https://github.com/nearai/ironclaw/issues/7624)
- **ironclaw-bridge 本地文件/MCP 桥接** — #2117 有社区 👍 支持，且与 #7482 的沙箱/边界设计天然互补，可能作为 WS 之外的并行能力 [链接](https://github.com/nearai/ironclaw/issues/2117)
- **Nostr 主机函数**（PR #7184，外部贡献者）— 为 WASM 工具沙箱添加 nostr-sign-event / nostr-publish / nostr-query，WASM 工具可直接与 Nostr 协议交互 [链接](https://github.com/nearai/ironclaw/pull/7184)

### 路线图信号

- **ACP serve 命令**（PR #7513，外部贡献者）— 通过 stdio 暴露 ACP 协议，使 GitHub Copilot CLI、VS Code 等外部工具可直接连接 IronClaw agent，与 #7482 中 ACP 降级为普通 driver 的方向一致 [链接](https://github.com/nearai/ironclaw/pull/7513)
- **Tier 3 写入放大优化**（#7603/#7604/#7605）— 批量检查点、配对行写入折叠、消息查找索引合并，预计每轮减少 14+ 行数据库写入，是性能优化的下一波 [链接](https://github.com/nearai/ironclaw/issues/7603)

---

## 7. 用户反馈摘要

- **MCP 连接体验不佳**（#7626）: "MKT1 requires email plus browser verification" — 付费用户因认证流程卡死而无法使用自定义 MCP，真实付费场景受阻。用户期望 IronClaw 的 MCP harness 能原生支持 OAuth/浏览器回调流程。
- **扩展连接状态误导**（#7627）: 用户用 "1" 作为凭据测试，GitHub 扩展居然显示"已连接"，虽然后续会提示认证失败，但"显示已连接"的状态信号具有欺骗性。用户需要的是**真实连接验证**而非表面状态。
- **跨会话记忆缺失**（#7185）: 多位测试者独立观察到"一个对话中建立的信息在后续对话中不可靠召回"，涉及法律（Devon）等专业场景。用户的核心痛点不是模型能力，而是**上下文持久化的一致性问题**。
- **Web UI 缺少版本展示**（#7580）: 用户想知道"我跑的是哪个 Reborn 版本"，当前 UI 该信息不可发现。表面小需求，实则反映用户对**版本透明度**和**可运维性**的诉求。
- **Sonnet-5 三天 500 错误**（#7589）: "For three days" — 连续多日不可用对重度依赖单一模型提供商的用户是严重事故，社区期望更快的降级/切换机制。

---

## 8. 待处理积压

| 优先级 | Issue/PR | 天数 | 说明 |
|--------|----------|------|------|
| ⚠️ 需关注 | [#7184](https://github.com/nearai/ironclaw/pull/7184) Nostr host functions | 10 天 | 外部贡献者实现功能完整（Schnorr 签名、BIP-340），但长时间未获核心维护者 review；如方向有意，建议明确排期，避免外部贡献流失 |
| ⚠️ 需关注 | [#7513](https://github.com/nearai/ironclaw/pull/7513) ACP serve 命令 | 3 天 | 与 #7482 架构方向直接相关，建议由 `serrrfirat` 评审确认是否与 HarnessDriver 契约设计一致 |
| ⚠️ 需响应 | [#7185](https://github.com/nearai/ironclaw/issues/7185) 跨会话记忆 | 10 天 | 多名测试者反馈，目前无 assignee、无 PR、无评论响应，属社区高感知问题 |
| ⚠️ 需响应 | [#7623](https://github.com/nearai/ironclaw/issues/7623) Capability access（WS4+WS6） | <1 天 | 延迟阶梯中的整合任务，需在 v0（#7624）验证后启动，建议在 #7624 中明确触发条件 |
| 🔵 例行 | [#7020](https://github.com/nearai/ironclaw/pull/7020) tokio-tungstenite 0.29→0.30 | 12 天 | 依赖升级等待合并，长时间未合入可能积累版本偏差 |
| 🔵 例行 | [#7262](https://github.com/nearai/ironclaw/pull/7262) wasm 组依赖升级 | 9 天 | 同上 |

---

## 项目健康度评估

**总体评级: 🟢 健康 · 高活跃**

- **代码活力**: 极为活跃 — 核心维护者（`serrrfirat`、`BenKurrek`）同时推进 3 条主线（架构重构、性能优化、文档治理），外部贡献者（`Kampouse`、`thisisjoshford`）有持续输入
- **架构演进**: 正在经历从"单体 Agent"到"Agent Kernel + 可插拔 Harness"的根本转型，方向明确（#7482 绑定决策 1-7 已记录），执行节奏清晰（v0 优先，延迟阶梯跟进）
- **稳定性信号**: v1.2.0 稳定发布 + 性能优化批量落地（写入裁剪、事件合并、压测框架），表明项目在功能扩张的同时没有放松运维品质
- **风险点**: ① 外部贡献者 PR（#7184、#7513）长时间未获 review，可能抑制社区贡献热情；② 多个用户侧 bug（#7626/#7627）指向集成认证流程的测试缺口；③ #7482 规模宏大（17 个工作流），需确保 v0 验证充分后再大规模铺开

---

*报告生成时间: 2026-08-14 | 数据来源: github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-14

## 今日速览

过去 24 小时项目活跃度中等偏上：共产生 2 条 Issue 和 11 条 PR 动态，其中 6 条 PR 已完成合并/关闭，5 条处于待合并状态，合并率为 54.5%，显示维护流程运转正常。值得注意的是，今日合并的 PR 集中在渲染层 UI 统一重构（#2486、#2487、#2488）和企业版功能集成（#2484），标志着项目正加速推进界面一致性与商业化版本落地。社区方面，新增 Issue #2489 表达了对 v4pro 版本的强烈期待，但内容缺乏具体信息，整体社区讨论热度不高。另有 5 条三月创建的 PR 已标记为 stale 但仍在开放状态，需关注长期积压问题。


## 📦 版本发布

无新版本发布。


## 🚀 项目进展

今日合并/关闭的 6 条 PR 中，4 条为当日创建并即时合并，反映出高效的迭代节奏：

- **#2488 [已关闭]** `refactor/cowork btw and management UI` — fisherdaddy 主导的 UI 重构，涉及 renderer 与 cowork 两大模块，推进了管理界面的统一与优化。
- **#2487 [已关闭]** `refactor(skills): merge skills and mcp views into unified skills-and-connectors view` — 将技能（Skills）与 MCP（模型上下文协议）视图合并为统一的「技能与连接器」视图，简化了用户界面层级，提升功能可发现性。
- **#2486 [已关闭]** `refactor(mcp): unify MCP card/detail UI with kits and skills styling` — 将 SkillCardMenu 抽取为共享 CardOverflowMenu 组件，跨 kits/mcp/skills 三处复用；新增 McpCard 与 McpDetailModal 组件，实现 MCP 管理界面与 kits/skills 的视觉统一。
- **#2485 [已关闭]** `feat(activity): support evergreen daily check-in` — 将签到活动调整为常驻形态（evergreen），复用已有服务端能力；优化账户菜单积分入口（跳转网页积分详情而非端内展开）；补充活动状态自动刷新机制，定向 Vitest 7/7 通过。
- **#2484 [已关闭]** `Feat/enterprise edition` — 企业版功能集成，涉及 renderer、docs、main、openclaw 四个模块，表明项目正在商业化方向迈出实质步伐。
- **#1232 [已关闭]** `fix(scheduledTask): 修复定时任务首次执行结果不推送到 UI 的问题` — 修复 `cronJobService.ts` 中 `pollOnce()` 的条件判断缺陷（`previousRunAtMs > 0` 导致首轮结果被丢弃），解决用户必须等待第二次执行才能看到结果的体验问题。

综合来看，今日合并内容可划分为**两条主线**：一是 UI 层的大规模统一与组件抽取（#2486、#2487、#2488），二是企业版与常驻功能落地（#2484、#2485），整体态势是**前端体验整合加速 + 商业化功能推进**。


## 🔥 社区热点

今日唯一具备讨论热度的 Issue 为：

- **[#2489 [OPEN] 快更新v4pro！](https://github.com/netease-youdao/LobsterAI/issues/2489)** — 由 nimamasl114514 创建于 08-14，含 1 条评论。用户对 v4pro 版本的发布表达了急切催促，虽然信息量有限，但反映出版本更新周期对用户体验的直接影响。指向产品团队应关注发布节奏与用户预期的管理。

其余新增 Issue 与 PR 均无评论互动，社区讨论活跃度较低。


## 🐛 Bug 与稳定性

今日无新增 Bug 报告。合并的 PR 中涉及以下稳定性改善：

| 严重程度 | 问题描述 | 状态 | 修复 PR |
|---------|---------|------|---------|
| **中** | 定时任务首次执行结果不推送到 UI（`previousRunAtMs > 0` 条件缺陷导致首轮结果被丢弃，需等第二次执行才能看到） | 已修复 | [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) |
| **低** | 自定义 Agent 允许重名，导致 Agent 列表歧义、用户需手动找回原始条目 | 修复待合并 | [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) |
| **低** | 点击定时任务「立即运行」按钮无视觉反馈，状态需最长 15 秒轮询才更新，易致重复点击 | 修复待合并 | [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) |
| **低** | 技能目录名与 frontmatter name 不一致时，OpenClaw UI 开关静默失效 | 修复待合并 | [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) |


## 💡 功能请求与路线图信号

- **v4pro 版本发布（#2489）**：新 Issue 直接以「快更新v4pro！」为题，是用户对下一大版本的最直接呼声。虽然缺乏具体需求描述，但在企业版 PR（#2484）已合入 main 的背景下，v4pro 很可能正处在功能冻结或发布准备阶段，该 Issue 反映了社区对版本迭代的敏感度。
- **Evergreen 每日签到（#2485 已合入）**：签到活动从限时形态转为常驻，这是一个产品策略信号 — 通过长效激励机制提升用户日常活跃度。该功能现已在 main 分支，预计随下一版本（可能是 v4pro）发布。
- **定时任务交互体验优化（#1163 待合并）**：引入乐观更新、缩短状态同步延迟、统一右键菜单样式，改进核心工作流中的操作反馈。属于「做了但用户感知不强、不做却明显难受」的体验类改进，值得尽快合入。


## 💬 用户反馈摘要

综合今日活跃 Issue 的评论内容（由于数据中评论详情有限，以下为可获取的信息）：

- **对版本迭代速度的不满（#2489）**：用户以急切语气催促 v4pro 发布，透露出对当前版本功能缺失或性能不足的潜在不满。虽然缺乏具体使用场景的细节描述，但「催促发版」这一行为本身就是一种明确的反馈信号。
- **对定时任务功能的期待（#1163）**：从 PR 描述可推断用户对「立即运行」按钮的响应迟缓（最长 15 秒）已有明显感知，且右键菜单样式与整体 UI 不一致的问题影响了使用体验。这属于高频操作路径上的细节摩擦，值得重视。
- **对安全与记忆质量的关注（#1156、#1165）**：虽然这两条 PR 标记为 stale，但 PR 描述中提到的「危险命令误判将导致 AI 静默执行 `rm -rf`、`git push --force` 等破坏性命令」「记忆质量评分错误会导致大量无关内容写入用户记忆」等场景，反映出社区贡献者对 AI 安全边界和数据质量的重视。这一隐忧可能代表了一部分深度用户的核心诉求。


## 📋 待处理积压

以下 PR/Issue 均已标记为 stale 且超过 4 个月未获进展，建议维护者评估状态：

| 编号 | 类型 | 标题 | 创建时间 | 最后更新 | 优先级建议 |
|------|------|------|---------|---------|-----------|
| [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) | PR | fix(agent): prevent duplicate custom agent names | 2026-03-31 | 2026-08-13 | **高** — 功能缺陷修复，代码量小，长期悬置会影响 Agent 管理体验 |
| [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | PR | fix(定时任务): 补全「立即运行」交互反馈，引入乐观更新与 Gateway 状态同步 | 2026-03-31 | 2026-08-13 | **高** — 直接改善高频操作路径的交互体验，且涉及多处修改，越晚合入冲突风险越大 |
| [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) | PR | 为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试（75 个测试） | 2026-03-31 | 2026-08-13 | **中** — 测试覆盖是项目健康度的基石，且与 Issue #1162 关联 |
| [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) | PR | 为 commandSafety 和 coworkMemoryJudge 补充 Vitest 单元测试 | 2026-03-31 | 2026-08-13 | **中** — 涉及安全模块（危险命令检测）与记忆质量门卫，测试缺失存在质量风险 |
| [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) | Issue | 为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试 | 2026-03-31 | 2026-08-13 | **中** — 对应 PR #1165 存在，等待合入后自动关闭 |

> ⚠️ 建议：上述 5 条 stale 条目已存在超 4 个月。建议维护团队集中评审一次，或明确标记为「下一版本规划」，或关闭并说明原因，避免社区贡献者的工作长期处于不确定状态。特别是 #1166（重名 Agent 修复）与 #1163（定时任务交互优化），两者均属于直接改善用户日常体验的改动，合入成本低、收益明确。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-14

## 1. 今日速览

过去 24 小时内 Moltis 项目保持中等活跃度：新开 1 个 Issue、提交 4 个待合并 PR，无新版本发布。值得关注的是，今日提交的 PR 均来自贡献者 Lstarsky0，且集中在构建脚本兼容性（#1194）与依赖仓库迁移适配（#1191、#1192）等工程性问题修复上，同时新报告的 flaky test 问题（#1193）也直指测试套件在满负载下的可靠性隐患。此外，penso 提交的大型功能 PR（#1190）仍在等待合并，涉及 CalDAV 与渠道历史连接器，是项目近期最重要的功能扩展方向。总体而言，项目处于健康的工程修缮与功能积累并行的阶段。


## 2. 版本发布

过去 24 小时内无新版本发布。


## 3. 项目进展

过去 24 小时内无 PR 被合并或关闭，当前有 4 个 PR 处于待合并状态。按影响范围和潜在价值排序：

| PR | 影响范围 | 状态 | 潜在价值 |
|---|---|---|---|
| [#1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190) | 核心功能扩展 | 待合并 | 高 — 新增连接器持久化、原子快照、调度/投影与本地全文搜索能力，同时引入 CalDAV 数据集与 Slack/Discord/Matrix/Teams 历史消息数据集，显著拓宽应用场景 |
| [#1194 fix(scripts): guard empty bash array expansions for macOS bash 3.2](https://github.com/moltis-org/moltis/pull/1194) | 构建脚本兼容性 | 待合并 | 中 — 修复 macOS 上 `set -u` 下空数组展开导致的 `local-validate-full` 配方崩溃，影响 macOS 开发者本地流程 |
| [#1191 fix(sandbox): point gogcli module path at the openclaw org](https://github.com/moltis-org/moltis/pull/1191) | 构建修复 | 待合并 | 高 — 修复 `moltis sandbox build` 在所有预构建镜像上的失败问题，属于阻断性构建缺陷 |
| [#1192 fix(skills): point wacrawl install metadata at the openclaw org](https://github.com/moltis-org/moltis/pull/1192) | 技能安装修复 | 待合并 | 中 — 修复 wacrawl 技能 Go 安装回退的路径错误 |

其中 #1191 与 #1192 两个 fix 均源于上游仓库（`steipete/gogcli` 与 `steipete/wacrawl`）迁移至 `openclaw` 组织导致 module path 变更，属于上游依赖漂移引发的连锁修复，建议维护者优先审查并合并以解除构建阻塞。


## 4. 社区热点

过去 24 小时内，[Issue #1193 Flaky test: push fanout timeout assertion races under full-suite load](https://github.com/moltis-org/moltis/issues/1193) 是唯一新建的 Issue，暂无评论与点赞，讨论热度有限。但这并不意味着该问题不关键——它是 4 个待合并 PR 之外最值得关注的技术信号：测试在集成环境下间歇性失败，直指并发测试稳定性问题。

该 Issue 的深层诉求是**测试套件在真实负载下的确定性不足**。报告者 Lstarsky0 观察到一个特定测试在 3 次全量套件运行中失败 2 次，且仅在完整套件环境下触发，表明问题与测试间的资源竞争或全局状态污染有关。这背后反映了项目在持续集成（CI）规模扩大后对测试隔离性的新需求。


## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix PR |
|---|---|---|---|
| **高** | — 对应 [PR #1191](https://github.com/moltis-org/moltis/pull/1191) | `moltis sandbox build` 在所有预构建镜像上失败——因 `gogcli` 迁移至 `openclaw` 组织后 `go.mod` module path 变更，GitHub 重定向不再生效 | ✅ 已有 PR #1191 待合并 |
| **中** | — 对应 [PR #1194](https://github.com/moltis-org/moltis/pull/1194) | macOS bash 3.2 上 `just local-validate-full` 在无 PR 号参数时因空数组展开崩溃（`unbound variable`），由 `set -euo pipefail` 触发 | ✅ 已有 PR #1194 待合并 |
| **中** | — 对应 [PR #1192](https://github.com/moltis-org/moltis/pull/1192) | wacrawl 技能的 Go 安装回退路径指向旧组织，导致安装失败 | ✅ 已有 PR #1192 待合并 |
| **低（测试可靠性）** | [Issue #1193](https://github.com/moltis-org/moltis/issues/1193) | `fanout_is_bounded_and_times_out_a_hung_endpoint` 测试在全量套件负载下间歇性失败（3 次运行失败 2 次），疑似超时断言与并发负载竞争 | ❌ 暂无对应 fix PR |

前三项均已有对应修复 PR 待合并，属于"已定位、待修复落地"状态。Issue #1193 则需要维护者复现并分析根因。


## 6. 功能请求与路线图信号

过去 24 小时内无用户提交新的功能请求 Issue，但 [PR #1190](https://github.com/moltis-org/moltis/pull/1190) 作为待合并的大型功能 PR，提供了清晰的路线图信号：

- **CalDAV 连接器**：意味着 Moltis 将支持日历数据集的只读接入，可服务于日程管理与时间感知型 Agent 场景；
- **Slack / Discord / Matrix / Teams 历史消息数据集**：允许 Agent 在不持有渠道凭据的前提下读取历史消息，为多平台会话记忆与上下文恢复提供基础；
- **持久化与原子快照 + 调度/投影 + 本地全文搜索**：为连接器层引入数据持久化和查询能力，指向更复杂的记忆与检索功能。

这些信号表明项目正从轻量 Agent 框架向具备持久化记忆与多源数据接入能力的平台演进。若该 PR 被合并，将成为下一版本的功能基石。结合当前无新版本发布的情况，**#1190 很可能是下一里程碑版本的核心组成部分**。


## 7. 用户反馈摘要

过去 24 小时内的新增 Issue 和 PR 均由贡献者提出，内容聚焦于工程问题本身，尚无用户侧的主观反馈、使用场景描述或满意度表达。从提交内容可间接推断的痛点包括：

- **macOS 用户**：本地验证流程（`just local-validate-full`）在 macOS bash 3.2 上直接崩溃，影响贡献者参与开发和本地验证的体验（PR #1194 的作者即为此问题所困）；
- **沙箱构建依赖**：`moltis sandbox build` 的持续失败会阻断所有依赖预构建镜像的开发者，属于影响面较广的工程问题（PR #1191 的作者报告）。


## 8. 待处理积压

以下为长期未响应或需维护者关注的重要 Issue/PR：

| 项目 | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| [PR #1191 fix(sandbox): point gogcli module path at the openclaw org](https://github.com/moltis-org/moltis/pull/1191) | 2026-08-13 | 待审查 | **高优先级** — 阻断所有 sandbox 构建，建议尽快审查并合并 |
| [PR #1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190) | 2026-08-11 | 待审查 | **高优先级** — 大型功能 PR，已停留 3 天，建议安排代码评审并规划合并时间线 |
| [Issue #1193 Flaky test: push fanout timeout assertion races under full-suite load](https://github.com/moltis-org/moltis/issues/1193) | 2026-08-13 | 待确认 | **中优先级** — 测试可靠性问题，建议维护者标记 todo 并在 CI 策略中配合超时/重试机制缓解 |

> 说明：由于数据窗口为过去 24 小时，未能覆盖更早的长期未响应条目。以上基于当前可见数据，其中 PR #1190 已等待约 3 天，是当前最值得维护者关注的功能积压项。

---

*报告生成时间：2026-08-14 | 数据来源：Moltis GitHub 仓库 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，我是 CoPaw 项目的 AI 智能体分析师。根据您提供的 GitHub 数据，我为您生成了 2026-08-14 的 CoPaw 项目动态日报。

---

### CoPaw 项目动态日报 (2026-08-14)

#### 1. 今日速览

CoPaw 项目今日活跃度极高，处于快速迭代期。过去 24 小时内，Issue 与 PR 的更新量均超过 40 条，并发布了 2 个新版本（含 `v2.1.0` 正式版），表明开发与社区反馈循环非常紧密。社区讨论热度集中在**多步骤任务中断**、**安全漏洞报告**及**API 集成问题**上。值得关注的是，有用户提交了声称存在严重安全漏洞的报告（尽管其中一个被标记为无效），这需要维护者高度警惕。总体而言，项目功能迭代速度加快，但也面临稳定性、安全性和用户体验等方面的新挑战。

#### 2. 版本发布

项目今日发布了两个新版本，其中 `v2.1.0` 为一次重要的功能迭代。

- **`v2.1.0` (正式版)**
    - **主要内容**:
        - **新增 QwenPaw OS Shell**: 引入可移动、可调整大小的窗口系统，支持应用启动器、任务栏、通知中心以及布局保存功能（[#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645)）。
        - **统一应用目录**: 已安装应用和市场应用现在在 App Center 中共享同一个目录。
    - **破坏性变更**: 此版本引入了新的 UI 范式（OS Shell），可能对用户的既有操作习惯产生影响。但暂未发现明确的破坏性 API 或配置变更。
    - **迁移注意事项**: 由于核心 UI 架构有调整，建议用户在升级前备份工作区，并在升级后清理浏览器缓存，以避免出现样式或功能异常。

- **`v2.1.0-beta.5` (预发布版)**
    - **主要内容**:
        - **Bug 修复**: 修复了聊天功能中处理字典类型模型响应时的错误 ([#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816))。
        - **性能优化与文档**: 简化了长期记忆功能的引导逻辑 ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942))，并更新了网站文档。
    - **说明**: 该版本为 `v2.1.0` 正式版发布前的迭代版本，修复了部分已知问题。

#### 3. 项目进展

今日合并的关键 PR 表明项目正在多个方面稳步推进：

- **功能增强**:
    - **聊天历史分页与压缩** ([#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)): 修复了长聊天记录加载超时的问题，显著提升了在弱网环境下（1MB+）的聊天体验。
    - **服务端任务执行限制** ([#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652)): 在服务端强制执行`max_iterations`配置，有效避免了任务模式（MissionMode）下因控制器 LLM 失控导致子任务无限派发直至账户余额耗尽的问题（此前的 issue 中曾出现产生 54+ 个子会话的情况）。这是一项重要的稳定性与成本控制修复。
- **集成与兼容性**:
    - **按需安装可选依赖** ([#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)): 将部分 Channel 的 SDK 从默认依赖中移出，降低了默认安装体积和潜在的依赖冲突。
    - **增强 Auto-Dream 集成韧性** ([#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884)): 使 Auto-Dream 功能能够容忍 LLM 输出的异常结构化数据，避免单个错误导致整个任务失败。

这些合并且的 PR 解决了多个长期存在的核心问题，尤其是在稳定性、性能和多任务可靠性上，标志着项目正从功能堆叠向体验打磨过渡。

#### 4. 社区热点

今日社区讨论热度最高的话题集中在以下几个方面：

1.  **多步骤任务中断 (Issue [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921))** (6条评论)
    - **诉求**: 用户反映在任务规划完成后（如输出 “Now 2.1, 3.1, 3.2. Let me do all three.”）会无提示地停止，被迫需要手动回复“继续”才能接着执行。
    - **分析**: 这是严重的可用性问题。这表明模型在“计划”和“执行”之间的转换存在逻辑缺陷，或触发了某个未知的停止条件。该问题直接影响核心任务自动化体验，需优先排查。

2.  **安全漏洞指控 (Issue [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992))** (3条评论)
    - **诉求**: 用户提交了一份详细的安全报告，声称 QwenPaw 服务暴露于公网 8088 端口，且插件安装 API 无鉴权，存在被植入后门的风险。
    - **分析**: 社区对该问题的反应强烈，但值得注意的是，另一个非常相似的 Issue ([#6993](https://github.com/agentscope-ai/QwenPaw/issues/6993)) 被标记为 **无效**。这可能是误报，也可能是报告过程出现了问题。**无论如何，这为项目的安全审计拉响了警报，官方必须给出明确回应**。

3.  **服务后台化与脚本化 (Issue [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010))** (3条评论)
    - **诉求**: 用户提出 `qwenpaw app` 无法作为真正的后台守护进程运行，导致通过 SSH 或脚本启动时命令阻塞。
    - **分析**: 这反映了用户对 QwenPaw 进化为可编程、可远程控制的 Agent 服务的需求。这正是 AI 原生产品向基础设施演进的关键信号。

#### 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

- **严重/高危 - 安全漏洞疑云**:
    - **端口暴露与API无鉴权** ([#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992)): 用户报告了潜在的严重安全漏洞。尽管有重复报告被标记为无效，但必须进行彻底调查。
    - **插件可静默创建定时任务** ([#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916)): 已关闭，但描述了一个权限模型缺陷，即插件可在无用户确认的情况下创建 Cron 任务和注入消息。此问题的关闭状态需要确认是“已修复”还是“已忽略”。

- **中等/功能阻断**:
    - **多步骤任务自动中断** ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)): 核心任务流中断，影响自动化体验。**暂无相关的 fix PR**。
    - **上下文压缩后聊天记录不可见** ([#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951)): 使用 Scroll 策略压缩上下文后，重新进入会话，压缩前的聊天记录在 UI 中消失。这属于数据展示的回归问题。**暂无相关的 fix PR**。

- **较低/体验问题**:
    - **启动报错/崩溃** ([#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955)): Windows 平台上通过 pip 安装后概率性启动崩溃。
    - **Anthropic 模型误杀图片** ([#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008)): 模型端的安全审核将正常图片误判为敏感内容，导致会话中断。
    - **Windows 桌面 TUI 连接失败** ([#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007)): 打包后的 `qwenpaw.exe` 与 `-m qwenpaw acp` 参数不兼容，导致 TUI 无法启动。
    - **Shabox 导致 UV 失败** ([#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005)): 开启 Shabox 后，UV 无法写入缓存目录。

#### 6. 功能请求与路线图信号

社区提出的新功能请求为 QwenPaw 的未来发展提供了重要线索：

- **嵌入式聊天界面** ([#6970](https://github.com/agentscope-ai/QwenPaw/issues/6970)): 用户希望提供一个无侧边栏、无头部栏的独立聊天页面，并支持通过 URL 传递 API Key，以便将 QwenPaw 嵌入到其他应用中。**这表明 QwenPaw 有望被用作一个可嵌入的 Agent 组件**。虽然目前没有直接的 PR，但这是一个值得官方考虑的产品化方向。
- **服务器-客户端分离模式** ([#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002)): 用户希望部署一个轻量级客户端，连接至远程服务器上的 QwenPaw Agent，以解决当前桌面客户端笨重、数据不同步的问题。这与 Issue [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) 的诉求相辅相成，**共同指向了“云端 Agent + 本地远程控制”的架构模式**。
- **向子进程注入频道信息** ([#6995](https://github.com/agentscope-ai/QwenPaw/issues/6995)): 一个易于实现的小功能，通过环境变量 `QWENPAW_CHANNEL` 让 Agent 调用的外部脚本能感知到消息来源。**该功能可能被快速实现**。

#### 7. 用户反馈摘要

- **对“任务自停”感到困惑和沮丧** (来自 [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)): 用户最大的痛点是 Agent 在执行多步骤任务时“不负责任”地暂停，破坏了自动化流程的连续性。
- **对动态 UI 元素感到不适** (来自 [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)): 有用户反馈聊天框下方动态变化的字符计数“闪的眼睛疼”，期望有开关可以关闭。这说明 **UI 的细节体验逐渐被重视**。
- **与杀毒软件的兼容性问题** (来自 [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)): 有用户反映 QwenPaw 在执行任务时被杀毒软件拦截甚至强制关闭，而“WorkBuddy”却没有此问题。这提示 QwenPaw 在**系统命令执行行为**上可能存在一些引起安全软件误判的模式。
- **对第三方平台集成有高需求** (来自 [#6823](https://github.com/agentscope-ai/QwenPaw/pull/6823), [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973), [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882)): 用户对使用阿里云百炼 Token Plan、集成 CopilotKit 等有明确诉求，表明社区希望 QwenPaw 能更好地融入其现有的技术栈。

#### 8. 待处理积压

以下 Issue 和 PR 需维护者重点关注，它们可能因长时间未跟进而积累更多社区负面反馈：

- **高风险安全报告**:
    - [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916): 插件可在无用户确认的情况下创建 Cron 任务并注入消息。此 Issue 已关闭，但未在数据中看到明确的修复 PR，建议确认处理方式。
    - [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992): 用户报告的严重安全漏洞，尽管有重复报告被标记为无效，但此举可能掩盖真实问题。**建议官方亲自排查并公开回应**。

- **长期未解决的重要 Feature/Bug**:
    - [#6326](https://github.com/agentscope-ai/QwenPaw/issues/6326): 要求明确指定 node.js 版本。该问题已存在 3 周，虽非高优先级，但明确的环境依赖有助于减少用户配置困难。
    - [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585): 聊天框动态字符显示问题，反馈已有两周，是一个简单的UI改进点。
    - [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100): 升级导致工作区丢失的问题，这是一个非常严重的稳定性投诉，必须确认该类事件在最新版本是否还会发生。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是基于 ZeroClaw 开源项目 2026-08-14 日 GitHub 数据生成的项目动态日报。

---

## ZeroClaw 项目动态日报 (2026-08-14)

### 1. 今日速览

ZeroClaw 项目今日活跃度极高，核心焦点集中在**安全加固**与**架构演进**两大方向。昨日共处理 50 条 Issues 和 50 条 PR，其中安全相关的高风险 RFC 和 Bug 修复占据了主导地位，显示出项目在向 v0.9.0 迈进时对安全性和稳定性高度重视。多个大型功能 PR（如 SOP 认证、Hailo-Ollama 支持）仍在持续推进中，同时一系列小型 CI 修复和代码清理工作也已完成，项目整体健康状况良好，正处于积极迭代和功能整合的关键阶段。

### 2. 版本发布

无新版本发布。当前工作集中在为下一个里程碑（推测为 v0.9.0）进行功能开发和稳定性加固。

### 3. 项目进展

今日有 10 个 PR 被合并或关闭，主要集中在 Bug 修复、文档完善和 CI 优化。

- **安全修复（已合并）**：
    - [#9969 fix(gateway): contain filesystem dashboard assets](https://github.com/zeroclaw-labs/zeroclaw/pull/9969)：修复了网关仪表盘静态资源的路径穿越漏洞，通过路径规范化和边界检查来防止符号链接逃逸。
    - [#9674 fix(infra): preserve session queue serialization during eviction](https://github.com/zeroclaw-labs/zeroclaw/pull/9674)：修复了会话队列驱逐时可能出现的反序列化问题，通过 RAII 守卫确保了会话请求注册的原子性。
- **Bug 修复（已合并）**：
    - [#9709 fix(tts): clean up Edge TTS temp output on every error path](https://github.com/zeroclaw-labs/zeroclaw/pull/9709)：修复了 Edge TTS 提供程序在错误路径上未清理临时文件的问题。
    - [#9705 fix(config): allow config set on existing hyphenated cron aliases](https://github.com/zeroclaw-labs/zeroclaw/pull/9705)：修复了 `config set` 命令无法处理包含连字符的 cron 任务别名的问题。
- **CI / 文档（已合并）**：
    - [#9966 fix(container): match nested fixture manifests by glob](https://github.com/zeroclaw-labs/zeroclaw/pull/9966)：修复了 Dockerfile 中无法匹配嵌套 crate 清单文件的问题。
    - [#9639 docs(architecture): document provider routing lifecycle](https://github.com/zeroclaw-labs/zeroclaw/pull/9639)：新增了关于 Provider 路由生命周期的官方架构文档。
    - [#9932 ci(codeql): drop rust/hard-coded-cryptographic-value](https://github.com/zeroclaw-labs/zeroclaw/pull/9932)：消除了 CodeQL 扫描中的 27 个误报。
- **重要里程碑**：
    - 关闭了 13 个 Issues，其中包括 `[Bug]: WeChat channel code... never compile or execute in CI` 等测试覆盖缺口问题，以及 `[Docs]: wit/VERSIONING.md...` 等文档规范问题，表明项目正在收尾一些历史遗留问题。

### 4. 社区热点

今日最受关注的讨论集中在几个高风险的架构 RFC 和安全问题上，体现了社区对项目未来方向和安全的深度关切。

- **[#8303 RFC: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（评论 20）**：该 RFC 提出为多轮对话设计持久化的目标（Goal）模式，是项目向更复杂任务执行迈进的关键一步。尽管讨论时间较长，但社区参与度极高，说明开发者对 Agent 的长时任务能力有强烈需求。
- **[#7155 RFC: Add a per-execution confirmation tier...](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（评论 18）**：关于高风险 Shell 命令分级确认策略的 RFC。该讨论已持续数月并经过多轮修订，反映了社区在“Agent 自主性”与“用户安全控制”之间的权衡与深度思考。此 RFC 与近期多个安全 Issue 相关联，是构建统一工具权限模型的核心。
- **[#9328 [Bug]: verifiable-intent evaluates constraints...](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)（评论 12）**：一个关于可验证意图（verifiable-intent）组件未验证凭证链的高危安全 Bug，引起了社区对 VI 实现安全性的关注和讨论，确保了该组件的可信度。

### 5. Bug 与稳定性

今日报告的 Bug 数量不多（约 13 个），但严重程度较高，主要集中在安全（Security）和核心运行时（Runtime）方面。

- **严重（P1）**：
    - [#9389 [Bug]: unauthenticated POST /api/pair keys its lockout on an attacker-supplied header](https://github.com/zeroclaw-labs/zeroclaw/issues/9389)（已关闭）：一个严重的认证绕过漏洞。根据其自动关闭状态，**可能已有相应的修复 PR**（如相关的安全修复），但需要确认。
    - [#9929 [Bug]: headless SOP step turns are given a session path but never persisted](https://github.com/zeroclaw-labs/zeroclaw/issues/9929)（开启）：无头 SOP 步骤的会话未持久化，状态为 `blocked`，依赖其他架构调整（参考 #9600）。
- **中等（P2）**：
    - [#9951 [Bug]: WeChat channel code and its 51 lib unit tests never compile or execute in CI](https://github.com/zeroclaw-labs/zeroclaw/issues/9951)（已关闭）：一个 CI 覆盖缺口问题，已修复。
- **文档问题（已关闭）**：
    - [#9643 [Docs]: wit/VERSIONING.md does not classify adding a variant...](https://github.com/zeroclaw-labs/zeroclaw/issues/9643)：
    - [#9710 bug(desktop): clean up temporary screenshot files on every exit](https://github.com/zeroclaw-labs/zeroclaw/issues/9710)：
    - [#9706 bug(provider): clean up Edge TTS temporary output...](https://github.com/zeroclaw-labs/zeroclaw/issues/9706)：
    - 以上三个问题都属于资源清理遗漏，均已被标记为 `follow-up` 并关闭，表明已有对应的修复 PR 合入。

### 6. 功能请求与路线图信号

今日的功能请求呈现“平台化”和“生态化”趋势，多个新特性旨在增强 ZeroClaw 的扩展能力。

- **Agent 插件生态**：[#9810 RFC: Load Agent Plugins 1.0 skill and MCP packages](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) 提议支持开放的 Agent Plugins 1.0 标准，这将是 ZeroClaw 生态建设的重要一步，但当前状态为 `blocked`。
- **硬件支持**：[#9109 feat(providers): add native Hailo-Ollama support](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（开启）正在为 Hailo AI 加速硬件添加原生支持，表明项目正在关注边缘计算和本地推理场景。
- **开发者体验**：
    - [#5907 Opt-in LSP support for ZeroCode coding workflows](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) 虽然提出较早，但至今仍在讨论，说明社区对提升代码生成质量的诉求长期存在。
    - [#7929 Unify slash-command registries across web UI, ZeroCode TUI, and channel runtime](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) 旨在统一各客户端的命令体验。
- **成本优化**：[#9631 Send stable session_id to OpenRouter for prompt-cache savings](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) 被标记为 `blocked`，但仍是一个明确的需求，旨在通过会话 ID 复用减少推理成本。

### 7. 用户反馈摘要

- **对安全性的高度关注**：从 #7155（命令分级确认）和 #9825（区块链地址误报）的讨论中可以看出，用户非常关心 Agent 执行操作的边界和安全可控性。他们希望 ZeroClaw 不仅功能强大，而且在执行敏感操作时能提供充分的确认和防护机制，减少误操作和安全风险。
- **对易用性和体验的持续追求**：
    - 关于 Telegram `/model` 选择器的请求（#9895）表明，用户希望移动端的管理体验能像桌面端一样便捷，而非只是“能用”。
    - 浏览器工具（#9945）的反馈则指出，功能覆盖率低（16/100+）会让高级用户感到不便，他们期望 ZeroClaw 能更好地暴露底层能力。
- **对成本敏感**：#9631（OpenRouter 缓存）的讨论直接反映了用户对控制 LLM API 调用成本的急切需求，这将是影响用户选择平台的关键因素之一。

### 8. 待处理积压

以下问题长期未得到解决或处于停滞状态，建议维护者关注。

- **受阻（Blocked）且关键的功能/RFC**：
    - [#9810 RFC: Load Agent Plugins 1.0 skill and MCP packages](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)
    - [#9598 RFC: Define the SOP capability permission contract](https://github.com/zeroclaw-labs/zeroclaw/issues/9598)
    - [#9631 [Feature]: Send stable session_id to OpenRouter for prompt-cache savings](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)
- **等待作者回应（needs-author-action）的老 Issue**：
    - [#6850 RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)（创建于 5 月 22 日）
    - [#5907 [Feature]: Opt-in LSP support for ZeroCode coding workflows](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)（创建于 4 月 19 日）
- **大型、高风险但进展缓慢的 PR**：
    - [#8713 fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)（开启，XL 规模，修复 SSRF 漏洞）
    - [#9013 refactor(config)!: move TodoWrite display config from the daemon into zerocode](https://github.com/zeroclaw-labs/zeroclaw/pull/9013)（开启，标有 breaking change 的风险）

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*