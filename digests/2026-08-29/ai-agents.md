# OpenClaw 生态日报 2026-08-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-29 06:07 UTC

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

# OpenClaw 项目动态日报 — 2026-08-29

## 今日速览

OpenClaw 项目今日保持高活跃度，24小时内共有 500 条 Issue 更新（新开/活跃 408 条，关闭 92 条）和 500 条 PR 更新（待合并 294 条，已合并/关闭 206 条），并发布了 v2026.9.1-beta.1 版本。值得关注的是，数据中存在相当数量的“长期未决”Issue（创建于 2-6 个月前但今日仍有更新），结合大量 `clawsweeper` 相关标签，表明项目在自动化维护和人工 review 之间存在一定的积压。项目今日的核心工作围绕**稳定性修复**（尤其是 Gateway 重启恢复、消息传递可靠性）和**发布验证管线**的完善，多个 PR 集中在 FRV（Full Release Validation）和测试基础设施上。此外，PR 合并趋势向好，但有多个大型 PR（size: XL）处于待审状态，可能成为合并瓶颈。

**版本发布**：v2026.9.1-beta.1（Beta）
**Issues**：500 条更新（新开/活跃 408，关闭 92）
**PRs**：500 条更新（待合并 294，已合并/关闭 206）


## 版本发布

### v2026.9.1-beta.1 — `openclaw@2026.9.1-beta.1`

**核心亮点：**

- **Gateway 重启恢复**：在 Gateway 多次重启后保留已接受的 turns，确保 restart-safe 运行能跨越每个 checkpoint 继续执行并交付最终响应。（PR #130491，感谢 @jalehman）
- **Gateway 配置写入可靠性**：保持已提交配置的可写性，避免配置丢失。

**破坏性变更与迁移注意事项：** 作为首个 beta 版本，暂无明确破坏性变更说明，建议用户查阅完整 Changelog 后再升级。


## 项目进展

今日有 206 个 PR 被合并/关闭，主要集中在测试基础设施和发布验证管线，同时解决了一些长期存在的问题。重要合并/关闭的 PR 包括：

**已合并/关闭：**

- **[PR #120900]** feat(ui): review install policy warnings — 为 Control UI 增加安装策略警告审查能力，管理员可审阅并继续安装存在警告的插件，增强了安全管控。
- **[PR #123975]** fix(scripts): clean up tsgo process trees on timeout or signal — 修复 tsgo 包装器在收到信号时留下顽固编译进程树的问题，新增 `OPENCLAW_TSGO_TIMEOUT_MS` 看门狗。
- **[PR #131990]** fix(agents): show token limits for rejected model requests — 当 OpenAI 兼容提供方因配置 token 限制拒绝请求时，向用户展示具体限制数值。
- **[PR #132226]** feat(buzz): preserve bot identities when adding named accounts — 支持配置多个 Buzz bot 而不覆盖现有根身份和房间（关闭 #130062）。
- **[PR #125471]** fix(models): keep Claude CLI OAuth available in Control UI — 修复 Gateway 重启后 Claude CLI OAuth 刷新所有权丢失的问题。

**关键待合并 PR（今日活跃）：**

- **[PR #128882]** fix(deepseek): doubled-bar DSML tool calls are delivered as text and never executed — 修复 DeepSeek 模型输出全角双竖线 DSML 工具调用时，工具调用被当作纯文本展示而从未执行的问题。（关闭 #128858）
- **[PR #130993]** fix: Responses sessions compact before reaching context limit — 修复 OpenAI Responses 长会话压缩管线的六个缺陷，包括上下文边界估计、多阶段压缩等问题。
- **[PR #131616]** fix(message): hydrate remote-only sandbox attachments via fs bridge — 修复远程沙箱（OpenShell/SSH）中生成的文件作为附件发送失败的问题。
- **[PR #132338]** fix(release): make FRV reruns write-once — 修复 Full Release Validation 在客户端网络瞬时故障时重复触发同一 rerun 的问题。这与昨日提到的 #132289 直接相关。
- **[PR #109902]** refactor(plugin-sdk): expose reply-session conflict classifier — 将回复会话初始化冲突分类逻辑从各 channel 扩展中抽取为共享 SDK API，减少重复代码。

**整体判断：** 项目在通往 v2026.9.1 稳定版的路径上，重点推进了**消息传递可靠性**（DeepSeek DSML 修复、远程附件）和**发布验证基础设施**的加固，同时保持了 UI/UX 的持续打磨。PR 合并/关闭率 41.2%（206/500），处于健康水平。


## 社区热点

今日讨论最活跃的 Issue/PR（按评论数排序）：

1. **[Issue #91588]** 🔥 Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days, causing repeated OOM crashes（23 评论）
   - 这是一个 P0 级别的严重问题，用户报告 Gateway 内存从 350MB 涨到 15.5GB，导致系统 OOM 被杀，触发反复的 `launchd-handoff` 重启循环。目前仍处于打开状态，且带有多达 7 个 `clawsweeper` 标签（包括 `no-new-fix-pr`、`needs-maintainer-review`、`needs-live-repro`），表明问题已被自动化流程捕获但缺少有效的修复 PR 和可复现路径。社区用户持续关注并补充场景，侧面反映该问题影响面较大。

2. **[Issue #48788]** feat: centralized filename encoding utility for multi-encoding Content-Disposition handling（20 评论）
   - 社区在讨论跨渠道（尤其是飞书中文文件名 UTF-8 被误读为 Latin-1）的文件名编码问题，希望有一个统一的架构性方案，覆盖 Shift-JIS、EUC-KR、GB18030 等多种编码。

3. **[Issue #96834]** WhatsApp 1:1: inbound image wedges main lane ~3min before processing（14 评论）
   - WhatsApp 图片消息在真正处理前导致主通道卡死 3 分钟。多模态图片注入导致 `active_reply_work` 卡住。

4. **[Issue #84516]** Codex app-server: long agent replies silently truncated at ~1000-1100 chars（13 评论，👍 2）
   - Codex/OAuth 模式下，长回复被静默截断到约 1000-1100 字符，模型未被中止但输出不完整，用户困惑度较高。

5. **[Issue #41744]** Feishu: read image tool result loses media before final outbound payload（13 评论）
   - 飞书渠道中，Agent 使用 `read` 工具读取本地图片后，回复中的媒体附件在最终发送时丢失。

**趋势分析：** 社区最关心的问题集中在**消息丢失/截断、内存泄漏、跨渠道多模态内容处理**三大方面。用户对 OpenClaw 在 WhatsApp/飞书/Telegram 等多渠道场景下的可靠性期待较高，这类“静默失败”问题（如 #84516 的截断、#112259 的丢弃）因难以排查和复现而尤其引发讨论。


## Bug 与稳定性

按严重程度排列（P0 > P1 > P2）：

**P0 级别：**

- **[Issue #91588]** Gateway Memory Leak — RSS 从 350MB 涨到 15.5GB，导致重复 OOM 崩溃（`clawsweeper:no-new-fix-pr`、`needs-live-repro`）。创建于 2026-06-09，距今 2.5 个月仍未定位根因或提供重现步骤。⚠️ 无 fix PR。

**P1 级别（严重）：**

- **[Issue #96834]** WhatsApp 图片消息使主通道卡死 ~3 分钟，`active_reply_work` 卡住（`clawsweeper:no-new-fix-pr`）。⚠️ 无 fix PR。
- **[Issue #84516]** Codex 长回复静默截断（~1000-1100 字符），用户感知为数据丢失（`clawsweeper:fix-shape-clear`、`needs-maintainer-review`）。⚠️ 无 fix PR。
- **[Issue #87711]** 已关闭：Telegram 新会话首轮空回复（footer-only）。
- **[Issue #97616]** 子进程未回收导致僵尸进程累积和运行时性能退化（`clawsweeper:needs-info`）。⚠️ 待更多信息。
- **[Issue #112259]** 入站消息可能被静默丢弃（零负载调度无重试、无死信、无用户可见失败）（`clawsweeper:no-new-fix-pr`）。⚠️ 无 fix PR。
- **[Issue #124284]** vLLM openai-completions + thinking 模式下，子代理生成的 XML 工具调用格式错误（`clawsweeper:needs-info`）。此问题与 v2026.8.1-beta.2 引入的 `wrapStreamFnWithProviderPromptState` 有关。⚠️ 待更多信息。
- **[Issue #126906]** 拒绝 write 工具会静默禁用内存持久化，而 Agent 仍报告保存成功（`clawsweeper:no-new-fix-pr`）。⚠️ 无 fix PR。
- **[Issue #89257]** `openclaw backup create --verify` 退出码 13，留下损坏的 .tmp 归档；验证器也拒绝旧的备份硬链接（`clawsweeper:no-new-fix-pr`）。⚠️ 无 fix PR。
- **[Issue #115642]** 订阅认证的计费冷却时间（~5 小时）远长于故障持续时间，导致不必要的不可用（`clawsweeper:no-new-fix-pr`）。⚠️ 无 fix PR。
- **[Issue #85027]** macOS LaunchAgent 从 2026.5.6 升级到 2026.5.19 后 Gateway 不可恢复，需 Time Machine 还原（`clawsweeper:no-new-fix-pr`）。⚠️ 无 fix PR。

**P2 级别（重要）：**

- **[Issue #120735]** Telegram 贴纸以原始文件引用到达，无描述且未暂存到磁盘（`linked-pr-open`）。✅ 已有 linked PR。
- **[Issue #82876]** `sessions_spawn` 子代理运行在健康主会话中被接受，但子运行之后因 HTTP 401 失败（`clawsweeper:no-new-fix-pr`）。⚠️ 无 fix PR。
- **[Issue #87938]** 已关闭：Feishu DM 会话在 Gateway 重启后重建，存在重复键和维护清理问题。

**趋势分析：** 今日活跃的 P0/P1 级别 Bug 大多缺少有效修复 PR（`clawsweeper:no-new-fix-pr` 标记密集），说明项目在稳定性方面的投入仍有提升空间。特别是 #91588（内存泄漏）和 #112259（静默丢弃）属于用户感知强烈的可靠性和数据安全问题。


## 功能请求与路线图信号

以下功能请求值得关注，部分已有 PR 推进：

1. **[Issue #71058] / [PR #112811]** 支持单个 Gateway 配置多个 Teams bot 身份（`feat(msteams): support multiple bot accounts`）。该 PR 已在评论区获得“ready-for-review”，且与 #71058 直接关联。🚀 可能进入 2026.9.x。
2. **[Issue #48788]** 集中式文件名编码工具，统一处理多编码 Content-Disposition。已有一定讨论，但尚无实现 PR 被接受。
3. **[Issue #88154]** Slack Modal 交互支持。仍处于需求收集阶段。
4. **[Issue #53654]** Discord messageUpdate/messageDelete 事件支持，用于编辑重处理和删除取消。
5. **[Issue #54242]** `memory-lancedb` 的 `memory_store` 等工具未暴露给 Agent 动态工具面。有 👍 3，但 PR 缺失。
6. **[Issue #9912]** `maxTurns/maxToolCalls` 配置项，限制 Agent 迭代次数。已有 `clawsweeper` 标签，但尚无明确 PR。
7. **[Issue #14438]** 插件热重载（jiti cache 失效），无需重启容器。👍 4，社区呼声较高。

**路线图信号：** 多 bot 身份支持（Teams）、Slack 模态交互、以及插件热重载是呼声较高的功能方向。多 Teams bot 支持已有 PR 在推进，预计会进入下一个版本。


## 用户反馈摘要

- **“Gateway 崩溃让人崩溃”**：来自 #91588，用户报告内存泄漏导致 OOM 崩溃已持续 2.5 个月仍未修复，生产环境稳定性受到严重质疑。
- **“静默截断最难以接受”**：来自 #84516，Codex 模型长回复在 `stop=null` 且 `aborted=false` 的情况下被截断，用户完全无法感知失败原因，排查成本极高。
- **“Agent 报告成功但实际没保存”**：来自 #126906，用户拒绝 write 工具后发现内存持久化被禁用，但 Agent 仍报告“保存成功”，暴露出工具授权与记忆系统之间的状态不一致。
- **“工具调用失败死循环，刷屏严重”**：来自 #55694，Agent 在工具调用失败后无限重试，每次重试前都发消息，用户收到 6+ 条重复消息。这呼应了 #78865 中“Tool call circuit breaker needed”的呼声。
- **“每个命令都带一串 UUID，完全不知道在跑什么”**：来自 #51184，用户反馈 cron 任务在 `/status` 中显示为原始 UUID，无法区分任务名，请求表面 cron job 名称/标签。
- **“OpenAI 提示词前缀缓存被动态注入破坏了”**：来自 #95610，用户指出每次轮次动态注入的消息提示和系统提示变动导致自动前缀缓存失效，增加了成本。这属于成本优化与架构设计的前沿讨论。

**正面反馈：** 今日数据未发现明显的用户正面反馈/满意度表达，侧面说明用户多在有明确问题时才会提出 Issue。


## 待处理积压

以下 Issue/PR 长时间未得到有效响应或解决，值得维护者特别关注：

1. **[Issue #91588]** Gateway Memory Leak（P0，创建 2026-06-09，⚠️ 无 fix PR，需优先处理）
2. **[Issue #96834]** WhatsApp 图片消息卡死主通道（P1，创建 2026-06-25，⚠️ 无 fix PR）
3. **[Issue #84516]** Codex 长回复静默截断（P1，创建 2026-05-20，⚠️ 无 fix PR）
4. **[Issue #41744]** 飞书读图工具结果媒体丢失（创建 2026-03-10，⚠️ 无 fix PR）
5. **[Issue #87756]** Lobster 工作流在嵌套 `/tools/invoke` 时挂起（P2，创建 2026-05-28，⚠️ 无 fix PR）
6. **[Issue #71058]** 多 Teams bot 支持（P2，创建 2026-04-24，✅ 已有 PR #112811 待合并）
7. **[Issue #82662]** 隔离 cron agentTurn 设置超时（P2，创建 2026-05-16，⚠️ 无 fix PR）
8. **[Issue #88230]** `openclaw message send` CLI 卡住不退出（P1，创建 2026-05-30，⚠️ 无 fix PR）
9. **[Issue #54373]** RFC：上下文来源/易变性元数据（创建 2026-03-25，讨论中无结论）
10. **[Issue #50291]** 插件钩子缺失分布式追踪上下文（创建 2026-03-19，⚠️ 无 fix PR，涉及多通道群聊场景）

**维护者行动建议：** 优先处理 P0 内存泄漏和 P1 静默失败类问题；其次推进已有 PR 的代码审查（尤其 #128882、#130993、#131616 这几个大型修复）；并对长期无法复现的 issue 考虑增加“需更多信息”标签或关闭。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：2026-08-29**


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**从功能堆叠向稳定性与可观测性并重**的转型期。头部项目（OpenClaw、Hermes Agent、ZeroClaw、IronClaw）均面临相似的核心挑战：多通道消息可靠性（静默丢失/截断/重复）、上下文窗口与工具输出增长的根本张力、以及长期运行下的内存泄漏与进程稳定性问题。同时，社区对**可配置性**（超时、模型路由、上下文策略）与**可观测性**（进度反馈、失败原因分类、重试状态）的呼声显著上升，标志着用户群体正从早期采用者向生产环境使用者过渡。MCP 生态兼容性（双协议支持、会话恢复）成为跨项目的共同投入方向。


## 2. 各项目活跃度对比

| 项目 | Issues（日更） | PRs（日更） | 合并/关闭率 | Release | 健康度 |
|------|---------------|-------------|-------------|---------|--------|
| **OpenClaw** | 500（新开/活跃 408，关闭 92） | 500（待合并 294，已合并/关闭 206） | 41.2% | v2026.9.1-beta.1 | 🟢 高活跃，积压偏重 |
| **Hermes Agent** | 50（新开/活跃 40，关闭 10） | 50（待合并 ~41，已合并 ~9） | ~18% | v0.20.6（8/27） | 🟢 高活跃，批量合入 |
| **ZeroClaw** | 33（活跃 27，关闭 6） | 50（待合并 50，关闭 0） | **0%** | 无 | 🟡 高活跃，合并瓶颈明显 |
| **IronClaw** | 14（活跃 11，关闭 3） | 28（待合并 13，已合并 15） | 53.6% | v1.4.0 | 🟢 健康，响应快 |
| **NanoBot** | 8（活跃 7，关闭 1） | 17（待合并 12，已合并 5） | 29.4% | 无 | 🟢 活跃，稳定加固期 |
| **CoPaw** | 42（新开/活跃 11，关闭 31） | 31（待合并 19，已合并 12） | 38.7% | v2.2.0-beta.2/3 | 🟢 健康，清理高效 |
| **NanoClaw** | 3（活跃 3，关闭 0） | 50（待合并 45，已合并 5） | 10% | 无 | 🟡 中高活跃，积压严重 |
| **LobsterAI** | 5（活跃 2，关闭 3） | 9（待合并 1，已合并 8） | 88.9% | 2026.8.28 | 🟢 健康 |
| **PicoClaw** | 1（活跃 1） | 1（已合并 1） | 100% | 无 | 🟢 平稳 |
| **Moltis** | 1（活跃 1） | 0 | — | 无 | 🟡 低活跃 |
| **TinyClaw** | — | — | — | — | ⚪ 无活动 |
| **NullClaw** | — | — | — | — | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | — | ⚪ 无活动 |


## 3. OpenClaw 在生态中的定位

**社区规模与影响力：** OpenClaw 以 500 条日更 Issue/PR 的体量遥遥领先，是生态中唯一达到此量级的项目（第二名 Hermes Agent 为 50 条），属于绝对头部。其 `clawsweeper` 自动维护流程表明项目已建立规模化的问题治理基础设施。

**技术路线差异：**
- **Gateway 架构**：OpenClaw 强调 Gateway 重启恢复与配置写入可靠性，以 `launchd-handoff` 为代表的系统集成深度领先。
- **多通道广度**：WhatsApp、飞书、Telegram、Codex 等多渠道覆盖成熟度最高，但这也带来了渠道间行为不一致的副作用（如飞书/微信/WhatsApp 各有独立的媒体处理缺陷）。
- **发布节奏**：Beta 版本月度迭代，但大型 PR（size: XL）审查周期偏长，成为合并瓶颈。

**对比优势：** 生态位最完整 —— 从渠道适配、Agent 调度、SDK（plugin-sdk 重构）到发布验证管线（FRV）均有布局。**核心短板：** 长期未决的 P0 问题（内存泄漏 #91588 已 2.5 个月）对生产用户信任度构成侵蚀。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **上下文窗口管理** | OpenClaw、Hermes Agent、IronClaw、ZeroClaw、CoPaw | 工具返回结果过大导致上下文溢出（IronClaw #7981 列仓库 519KB）；压缩策略与提示词缓存失效（Hermes Agent P0 批量修复）；回复截断/静默丢失（OpenClaw #84516）；运行时上下文无限回放（NanoBot #5586） |
| **消息可靠性** | OpenClaw、CoPaw、ZeroClaw | 入站消息静默丢弃（OpenClaw #112259）；Agent 忙碌时消息丢失（CoPaw #5344）；并发触发重复回复（ZeroClaw #10408）；飞书/WhatsApp 通道不稳定（OpenClaw #96834、CoPaw #5757） |
| **MCP 生态兼容** | Hermes Agent、CoPaw、NanoBot | OAuth 认证锁竞争与连接停驻（Hermes Agent 多个 duplicate）；双协议客户端与旧版回退（CoPaw #7330）；WebUI 交互式 MCP Apps（NanoBot #5251）；服务器重启后恢复（CoPaw #6524） |
| **可观测性与可配置性** | NanoBot、NanoClaw、ZeroClaw、OpenClaw | 重试事件仅 CLI 可见（NanoBot #5585）；失败原因不可区分（NanoClaw #3599）；无进度反馈（ZeroClaw #10426、NanoClaw #3645）；硬编码超时/限制（NanoClaw #3643、Hermes Agent #89241） |
| **安全与密钥卫生** | ZeroClaw、NanoBot、IronClaw、NanoClaw | API key 未标记敏感（ZeroClaw #10432）；密钥净化绕过（NanoClaw #216）；路径绕过（ZeroClaw #9815）；文件权限过宽（ZeroClaw #10409） |


## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | IronClaw | NanoBot | ZeroClaw | CoPaw |
|------|----------|--------------|----------|---------|----------|-------|
| **核心定位** | 全渠道通用 AI 助手网关 | 多 provider 桌面/云端 Agent 框架 | NEAR AI 生态自动化助手 | 轻量级终端/自托管 Agent | 开发运维导向的 Agent 运行时 | 企业级多渠道助手平台 |
| **目标用户** | 个人开发者/重度多渠道用户 | 多模型混合用户/桌面端用户 | NEAR 生态开发者 | 开发者/终端爱好者 | DevOps/自动化工程师 | 企业/团队用户 |
| **架构特色** | Gateway 中心化 + 多渠道适配 | OpenCode 集成 + 桌面优先 | 工具 Schema 投影 + 持久化沙箱 | 事件循环 + TUI/WebUI 双界面 | RFC 驱动 + SOP 控制平面 | MCP 深度集成 + 多租户 Hub |
| **关键优势** | 渠道广度最全、社区最大 | Provider 路线覆盖最广（OpenAI/Bedrock/DeepSeek 等） | 工具输出裁剪（投影）架构领先 | 代码精简、社区质量高 | 安全/合规意识强（RFC 文化） | MCP 协议跟进最快、中文/飞书/钉钉支持好 |
| **主要瓶颈** | P0 问题积压、大型 PR 审查慢 | 缓存层兼容性技术债、Windows 支持弱 | 工具输出粒度与上下文张力 | PR conflict 积压、维护者带宽 | 合并率 0%、RFC 决策慢 | 历史 Issue 清理与部分渠道稳定性 |


## 6. 社区热度与成熟度

**第一梯队（高活跃、高影响）：** OpenClaw —— 体量远超同类，具备工业化治理能力，但需警惕"大而不稳"。

**第二梯队（稳定迭代、质量巩固）：** Hermes Agent、IronClaw、CoPaw —— 三者均处于"功能快速迭代 → 质量深度优化"的转型期，合入效率和问题响应速度健康（IronClaw 合并率 53.6% 最高；Hermes 批量合入 P0 修复节奏快；CoPaw 清理效率突出）。

**第三梯队（快速成长、积压风险）：** ZeroClaw、NanoBot、NanoClaw —— 活跃度高但存在明显瓶颈：ZeroClaw 合并率 0%（审查带宽严重不足）、NanoBot 多个 PR 长期 `conflict`、NanoClaw 45 个 PR 待合并。

**第四梯队（平稳/低频）：** LobsterAI、PicoClaw、Moltis —— 迭代节奏稳定但社区参与度有限；TinyClaw、NullClaw、ZeptoClaw 处于休眠状态。

**成熟度判断：** OpenClaw 与 IronClaw 在工程化（发布验证管线、生产事故响应机制）上领先；ZeroClaw 在架构治理（RFC 流程）上意识超前但执行滞后；NanoBot 社区贡献质量最高（深度代码级 Issue 报告），但维护者响应带宽成为上限。


## 7. 值得关注的趋势信号

**1. "静默失败"已成为行业公敌。** 多个项目最严重的用户投诉均指向同一类问题——消息被静默丢弃（OpenClaw #112259）、回复被静默截断（OpenClaw #84516）、工具报告成功但实际未保存（OpenClaw #126906）、语音笔记被静默忽略（ZeroClaw #10429）。用户的耐心门槛正在提高，**可观测性即产品力**。开发者启示：在 Agent 设计中应默认添加失败可见性（至少 DEBUG 级可诊断日志 + 用户可感知的超时/重试状态）。

**2. 上下文管理从"优化项"升级为"架构核心"。** IronClaw 的 519KB 工具输出事故、Hermes Agent 的 prompt-cache 批量 P0 修复、NanoBot 的运行时上下文回放边界提案 —— 三个独立项目在同一天密集处理上下文相关问题，说明**模型上下文窗口的物理限制已成为 Agent 规模化部署的第一约束**。工具输出裁剪（投影/预算/引用）与压缩/摘要策略（分层、事务性、进度感知）是下一阶段的竞争焦点。

**3. "可配置的硬限制"成为刚需。** 硬编码超时杀长任务（NanoClaw #3643）、固定 token 限制误杀模型（Hermes Agent #89241）、30s 泛化超时丢消息（Hermes #93911）——用户正在为**默认值的不适配**买单。Agent 框架的下一个差异化点可能在于"合理的默认值 + 易发现的配置入口"。

**4. MCP 生态分化加速。** Hermes Agent 在批量修复 OAuth 连接问题，CoPaw 在推进双协议兼容与自动恢复，NanoBot 社区在呼吁 WebUI 级 MCP Apps 支持 —— 三个方向分别对应连接可靠性、协议兼容性、交互深度，说明 MCP 已从"能用"进入"好用"阶段，生态位尚未固化，存在明显的切入窗口。

**5. 安全卫生问题开始集中暴露。** API key 未标记敏感、路径绕过、临时文件权限过宽、依赖被 yanked —— 多个项目的安全类 Issue 在今日集中出现（虽多为 P2），反映**社区从功能优先转向安全审视**。对开发者而言，安全默认值（最小权限、敏感标记、依赖扫描）应前置。

**6. "内部触发的对话"成为新场景。** ZeroClaw 的 SOP 控制平面（5/5 里程碑）、内部发起 agent 回合契约（#6954）、IronClaw 的通知系统闭环 —— 项目正在从"用户发消息 → Agent 回复"的简单模式，进化到 **cron/SOP/心跳/事件驱动的复合调度模式**。这意味着 Agent 身份稳定性、会话绑定、并发控制将成为下一轮框架设计的基本要求。

---

*报告基于各项目 GitHub 公开数据自动生成，数据窗口为 2026-08-28 至 2026-08-29。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-29

## 今日速览

NanoBot 项目今日活跃度极高，24 小时内产生 8 条 Issue 更新和 17 条 PR 更新，PR 提交/合并节奏明显加快。多个高质量修复 PR（会话持久化移出事件循环、被丢弃会话复活修复、Cron 来源元数据清洗等）集中落地或进入待合并队列，表明项目正处于密集的稳定性加固阶段。值得关注的是，同一作者（iChizer0）连续提交了 5 条关于运行时上下文、重试事件分发、推理内容回放边界等增强型 Issue，且每条均附有精确的代码定位分析，显示出社区中已有深度用户对架构细节提出了系统性改进需求。今日无新版本发布，但代码库变更量较大。

## 版本发布

今日无新版本发布。

## 项目进展

今日共有 5 个 PR 被合并/关闭，其中多个为高优先级修复：

- **[#5579] fix(session): move persistence off event loop**（合并） — 将 SessionManager 的持久化操作从事件循环中移出，引入取消安全的异步 API，覆盖了 AgentLoop、compaction、恢复、斜杠命令和 WebUI 会话持久化路径。这是对整体并发模型的一次重要加固，直接降低了事件循环阻塞导致会话状态丢失的风险。
- **[#5578] test(tui): avoid clipboard status race on Windows**（合并） — 修复 Windows 上 TUI 剪贴板测试的竞态问题，用稳定的 placeholder 插入替代对瞬时状态消息的等待，提升 CI 可靠性。
- **[#5577] / [#5576] fix(tui): preserve full UI in Herdr panes**（合并，两项相同内容的提交） — 重构 Herdr 集成：Herdr 窗格现在使用与独立终端一致的 alternate-screen TUI 布局和控件，集成范围被收敛为仅设置/清除窗格标题，移除了对生命周期、会话、模型、工作区等元数据的上报。这是对 TUI 在嵌入场景下体验的一次整体修复。
- **[#5560] feat(cli): make nanobot the default agent command**（关闭） — 让裸 `nanobot` 命令直接启动终端 Agent，并接受 Agent 级选项（`-m`、`--workspace`、`--session` 等），不再需要显式输入 `nanobot agent`。简化了 CLI 入口。

另有 12 个 PR 处于待合并状态，其中包括修复被丢弃会话死而复生（#5589）、Cron 任务元数据清洗（#5587）、以及为抛出的工具异常追加重试提示（#5588）等 p1/p2 级修复，预计将在接下来数日内陆续合入。


## 社区热点

今日最受关注的议题集中在 WebUI 的 MCP 集成与运行时上下文管理两个方向。

**[#5251] Feature: Add MCP Apps host support to the WebUI**（2 条评论，创建于 8 月 5 日，今日仍有更新）— 该 Issue 提出让 WebUI 支持官方 MCP Apps 扩展（`io.modelcontextprotocol/ui`），使 MCP 服务器能够在 UI 中嵌入交互式应用，而非仅以文本/图像形式呈现调用结果。这一需求已保持了 24 天的活跃度，反映了社区对 MCP 生态从纯工具调用向交互式 UI 组件演进的明确期待。

**[#4429] feat: Allow custom provider to configure thinking style**（2 条评论，已关闭）— 该 Issue 要求允许 `custom` provider 为非标准 thinking 参数的模型（如 VolcEngine/Doubao 的 `{"thinking": {"type": "enabled"}}`）配置推理模式。今日被关闭，推测相关能力已通过其他 PR 合入，值得关注具体实现方式。

此外，iChizer0 在 8 月 28 日集中提交的 5 条增强型 Issue 虽然单条评论不多，但形成了一个关于**运行时上下文生命周期管理**的完整提案集（详见下文"功能请求与路线图信号"），是今日最值得关注的社区声音。


## Bug 与稳定性

今日报告的 Bug 按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| **高** | [#5582] Cron jobs created from WebUI quote/@mention turn crash at add time or at fire time | WebUI 回合携带运行时上下文块（引用/提及）时，通过调度创建的 Cron 任务在创建时或触发时会崩溃，导致提醒丢失 | 已有 [#5587]（p2，待合并） |
| 中 | [#5592] edit_file documentation does not state that match selectors are mutually exclusive | `edit_file` 工具说明未声明匹配选择器（occurrence、line_hint、replace_all、expected_replacements）是互斥的，可能导致用户误用 | 暂无 |
| 低 | [#5585] RetryWaitEvent is CLI-only | 当 provider 请求失败重试时，`RetryWaitEvent` 仅输出到 CLI，`ChannelManager` 丢弃了所有该事件，远程用户无法感知重试状态 | 已有 [#5504]（p2，待合并） |

其中 [#5582] 是今日最具实际破坏性的 Bug——它直接影响 WebUI 用户通过引用/提及方式创建定时提醒的核心场景，且崩溃可能静默丢失提醒。对应的修复 PR #5587（清洗 Cron origin 元数据、排除实时运行时上下文块）已在待合并队列中。


## 功能请求与路线图信号

今日的功能请求集中在以下方向：

**1. 运行时上下文（Runtime Context）生命周期管理** — iChizer0 提出的系列提案：

- **[#5586] Ephemeral blocks** — 允许运行时上下文块选择不持久化到会话历史，避免每次对话轮次都回放。这是一个对上下文管理和 token 效率有直接影响的架构级改进。
- **[#5584] 限制推理内容的回放深度** — 当前 `Session.get_history` 会无限期地将 `reasoning_content` 和 `thinking_blocks` 复制到回放历史中，导致上下文膨胀。提案要求设置回放边界。
- **[#5583] 工具异常追加"换种方法"提示** — 当前恢复提示仅附加到"工具错误结果"，但在工具**抛出异常**时缺失。已有对应的 fix PR [#5588] 待合并。
- **[#5585] RetryWaitEvent 分发到所有渠道** — 已在上述 Bug 部分阐述，对应 PR [#5504] 为 WebUI/TUI 增加了模型重试状态显示。

这些提案共同指向一个趋势：**随着 NanoBot 的 Agent 能力增强，社区开始关注上下文管理和运行状态的可观测性**，而不仅是功能堆叠。这些议题都可能进入下一版本的核心改进范围。

**2. WebUI MCP Apps 支持**（[#5251]）— 如前所述，这是一个需求明确但实现复杂的功能请求，需要 WebUI 层支持加载和渲染 MCP 服务器提供的交互式 UI 组件，目前尚处于讨论阶段。

**3. 自定义 Provider 的 thinking 参数**（[#4429]，已关闭）— 需求已得到响应，关注后续 Release 中 `custom` provider 对非标准推理参数的支持方式。


## 用户反馈摘要

- **@iChizer0**（5 条 Issue 提出者）— 评论风格展现出对源码的深入研读（精确到行号），提出了"运行时上下文被无限期回放导致历史膨胀"、"重试事件在 CLI 之外完全不可见"等架构级痛点，代表了资深用户对 Agent 可观测性和资源效率的诉求。
- **@yuklcool**（#5251）— 认为"nanobot 已经提供了坚实的 MCP 客户端路径，但调用结果目前主要被当作模型可见的文本或图像产物"，希望 MCP 生态能进一步延伸到交互式 UI 领域。
- **@gkd2323c**（#4429）— 明确指出了 VolcEngine/Doubao 等国内模型厂商使用了与 OpenAI 不同的 thinking 参数格式，反映出 NanoBot 用户群体的国际化与模型供应商多样性。
- **@22373448**（#5592）— 报告了 `edit_file` 工具文档中未说明 match 选择器互斥性的问题，是典型的"文档不清晰导致误用"类反馈，关注点在工具契约的精确性。


## 待处理积压

- **[#5251] MCP Apps host support** — 创建于 8 月 5 日，已 24 天未获得维护者明确回应，是当前社区呼声最高但最缺乏反馈的 Enhancement。
- **[#5388] feat(agent): budget model-visible MCP schemas** — 创建于 8 月 13 日，已 16 天处于待合并状态，且当前标记有 `conflict`（需要解决冲突）。该 PR 为模型可见的 MCP 工具 schema 引入可选的字节预算，对控制大模型上下文长度有实际帮助，建议维护者优先处理冲突并推进合并。
- **[#5504] fix(ui): surface model retry status** — 创建于 8 月 24 日，已 5 天待合并，同样有 `conflict` 标记。该 PR 与 #5585 的诉求直接相关，但需要在保持渠道安静的同时向 WebSocket 客户端发布瞬态重试事件，设计上需要一定权衡。
- **[#5571] / [#5570] 记忆系统改造** — 两个 PR 均处于 `conflict` 状态。此两项 PR 涉及默认系统提示的变更（将 `MEMORY.md` 从默认提示中移除，改为显式的 `recall_memory` 工具召回）和可插拔记忆后端的引入，属于对记忆机制的架构调整，可能存在行为兼容性争议，需维护者给出明确决策。
- **[#5568] runner 拥有上下文压缩的所有权** — 创建于 8 月 27 日，等待评审中。该 PR 改变了请求适配的时机——由 runner 在每次 provider 调用前直接执行压缩，可能在长对话场景显著改善体验，但由于涉及核心控制流调整，需要仔细评估。

**整体评价**：NanoBot 项目今日处于高活跃度的"稳定期加固"状态。社区贡献者结构健康（多个不同作者在并发提交修复），Issue 报告质量普遍较高且多附有代码层面的精确分析。主要风险点在于**多个 PR 长期处于 `conflict` 状态未解决**（#5388、#5504、#5570、#5571），建议维护者在下一个版本发布前集中处理这批积压，以避免功能分支过期和合并成本上升。

> 本报告基于 GitHub 公开数据自动生成，部分信息可能存在延迟或缺失。链接均指向 HKUDS/nanobot 仓库。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-29

## 1. 今日速览

Hermes Agent 项目今日保持高强度迭代节奏，24小时内产生 50 条 Issue 更新与 50 条 PR 更新。当前最突出的信号是**围绕 Prompt 缓存（prompt-caching）层的一组 P0 级批量修复正在进行**——今日新开 4 条 salvage PR（#97704、#97708、#97709、#97710）将多日积累的缓存缺陷集中合入主线，显示项目在缓存兼容性方面存在成片的技术债。与此同时，MCP OAuth 认证锁竞争问题（#81051、#49543、#91265、#77369、#93562、#84132 等）已被标记为 duplicate 并大部分关闭，说明该领域已有系统性修复落地。Issue 关闭率（10/50）偏低，但其中包含多个 P0/P1 严重问题，表明核心 Bug 正在被积极处理。社区侧，Skills index 过期告警（#66616）以 115 条评论成为绝对热点，反映出用户对官方技能库维护状态的持续关注。整体活跃度高，项目处于功能迭代与稳定性加固并行的阶段。

## 2. 版本发布

今日无新版本发布。上一个已知版本为 v0.20.6（2026-08-27），当前 `main` 分支持续集成中。

## 3. 项目进展

今日合并（CLOSED）的 PR 中，绝大多数为 Bug 修复，且呈明显的**批量合入**特征：

- **PR #97704 [P0]** — 将五个 prompt-cache 修复（#97618、#96755、#97327、#96768）+ 两个桌面持久化修复（#96608、#95886）以单次批量方式合入主线，是一个七合一的累积修复批次，覆盖 OpenAI/Bedrock/DeepSeek/ZAI 等多 provider 路线。
- **PR #96755 [P0]** — 修复 caller 提供的 `prompt_cache_key` 超长导致的 400 错误；该问题此前会阻断所有 Chat Completions 请求，是 OpenAI 兼容路线的系统性缺陷。
- **PR #97327 [P0]** — Amazon Bedrock Converse 路线上的 Nova 模型不再因 `toolConfig.tools` 内嵌 `cachePoint` 被拒绝；经此修复，Nova 每轮 tool-enabled 调用的验证失败问题得到解决（对应 Issue #97281）。
- **PR #96768 [P0]** — 针对"每响应新建物理 session"的 host 类型，固定了缓存作用域隔离的不变量测试。
- **PR #96608 [P0]** — 桌面端 gateway 文件下载改为失败原子性写入，杜绝下载失败时截断/破坏已存在文件（对应 Issue #96597）。
- **PR #95886 [P0]** — 桌面端流式助手文本不再因空完成而丢失，并统一为 SessionDB 原子持久化（对应 Issue #95514）。
- **PR #97703 [P2]** — `resolve_hermes_bin()` 改为经由 `sys.executable` 调用解析后的 Python 入口点，修复了不同 Python 解释器（例如系统 Python 而非 venv）之间 shebang 指向错误导致的静默失败。

**值得注意**：今日有 3 条 salvage PR（#97708、#97709、#97710）均出自 @kshitijk4poor，将多位贡献者的分支修复逐一移植到最新 `main`（其中一条因分支落后约 2,240 commits 而做冲突解决）。这表明大量修复长期停留在分支上而未能及时合入，批量合入策略虽高效，但也暗示 PR 积压的问题。另外，两个自动格式化 PR（#97706、#97713）被自动合并，属常规维护流程。

## 4. 社区热点

**#66616 [OPEN] Skills index freshness probe failed（115 条评论）** — 由 `nousbot-eng` 自动触发，报告 Skills Hub 索引已过期 29.8 小时（上限 26h）。115 条评论使其成为近 30 条中最受关注的问题。虽然属于自动化巡检告警而非用户行为，但高评论量说明大量讨论聚焦于技能索引的 Pipeline 稳定性——这是对文档/API 一致性产生直接影响的运维问题。链接：https://github.com/NousResearch/hermes-agent/issues/66616

**#76820 [CLOSED] Per-subagent model routing + API key pooling（2 条评论，👍 1）** — 功能请求涉及子代理的模型级路由和 API key 池化。评论数虽少，但被标记为 `needs-decision` 且已关闭，说明"是否纳入路线图"尚待决策。多模型、多 key 的子代理工作流是当前企业级用户的高频需求，此类请求的搁置可能造成 go-to-market 成本。链接：https://github.com/NousResearch/hermes-agent/issues/76820

## 5. Bug 与稳定性

以下按严重程度排列，已标注是否有对应修复 PR：

**P0（已修复）**
- **Bedrock Nova 模型 toolConfig.tools 中 cachePoint 拒绝**（#97281，现已关闭）→ 修复 PR #97327 已合入。
- **超长 `prompt_cache_key` 使所有 Chat Completions 400**（OpenAI/DeepSeek/ZAI 等）→ 修复 PR #96755 已合入。
- **Desktop 流式文本丢失 + 持久化非原子**（#95514）→ 修复 PR #95886 已合入。
- **Desktop gateway 下载失败时截断/删除既有文件**（#96597，现已关闭）→ 修复 PR #96608 已合入。
- **Prompt 缓存前缀切分产生空白文本块导致 Anthropic API 400**（#97618，现已关闭）→ 修复 PR #97604 批次中已包含。
- **OpenCode Go 路线 1h TTL 被错误裁剪至 5m**（#84733 引入的回归）→ 修复 PR #97708 今日合入。

**P1（待观察）**
- **Linux 强制本地后端启动后约 10s 被杀**（#96266，6 条评论，👍 1）— 用户报告 Hermes Desktop 启动时后端崩溃且重试/修复失败，尚无对应修复 PR。至 v0.20.5 仍存在，对 Linux 桌面端用户影响较大。

**P2（已关闭为重复 / 已有系统性修复）**
- **多个 MCP OAuth 相关问题**（#81051、#49543、#93562、#84132）——均为 python-sdk 1.26.0 的 auth-flow lock 竞争导致 OAuth MCP 服务器永久停驻，已标记为 duplicate 并关闭，说明主修复分支已落地。

**P2（待响应 / 仅有报告无修复）**
- **Desktop /compress 超时报告与实际情况不符**（#88988）——压缩 134s 完成，但 SDK 以 120s 超时报告失败。存在产品行为不一致问题，暂无 PR。
- **GLM-5.3 推理模型 90s 非流式超时检测误杀**（#89241）——Z.AI GLM-5 在思考阶段被 90s 阈值杀掉，3 次重试后失败；后端正常但有延迟。尚无修复 PR。
- **Desktop relay 30s 泛化超时导致 Bot Mode 投递失败**（#93911）——合法时长超过 30s 的 turn 被丢弃；无修复 PR。
- **Windows 上 `asyncio.start_unix_server` 不存在**（#96956）——每次 gateway 启动都会触发 shutdown_watchdog 的 traceback；无修复 PR。
- **Nova 模型的 ValidationException**（#97281，已关闭）——对应修复 PR #97327 已合入。
- **流式分块中 `int` 对象调 `lstrip` 崩溃**（#97382，`needs-repro`）——仅崩溃，无完整复现步骤；尚无 PR。
- **Windows 桌面端拖拽文件附件失效**（#97702，`needs-repro`）——回归问题，无 PR。

## 6. 功能请求与路线图信号

**可能被纳入下一版本（有对应 PR）**
- **Bot Group Chats 持久化（#97681 / PR #97712）**：PR #97712 为 Group Chat 增加 durable authority 与 replay，解决 Desktop 关闭后群聊中断问题。设计方向明确，合并概率较高。
- **桌面端 Bot Mode 交接可视化（PR #97711）**：与 #97681 相关问题，将 Bot 交接实时反映到 Agents 面板，属于同一波桌面端功能性增强。
- **Desktop Debug MCP server（#95489）**：为 LLM Agents 提供原生 UI 调试工具集的原生 MCP 服务，处于 `needs-decision` 状态，暂无 PR，但"LLM 是一等用户"的定位为该需求提供了合理动机。

**可能进入后续路线图（信号较弱）**
- **原生 skill-sleep 自改进（#71266）**：参考 Microsoft SkillOpt 的验证门控技能增强方案，1 条评论，讨论热度低。
- **Discord 配置迁移（#66391，已关闭）**：将 Discord 行为设置移入 config.yaml，已关闭但为明确有效需求。
- **Per-subagent 模型路由 + API Key 池化（#76820，已关闭）**：多模型、多 key 子代理工作流的需求代表，虽已关闭但存在后续 reopen 可能。

**已合入的功能性增强**
- **WeCom 流式气泡工具计时动画（#96942）**：为微企微平台增加工具执行实时计时展示，属于 channel 层 UX 优化。

## 7. 用户反馈摘要

- **Long-running OAuth MCP 服务器"停驻"问题普遍**（#81051、#49543、#84132、#93562、#91265）：多个用户报告类似症状——OAuth 认证的远程 MCP 服务器在约数小时运行后停止响应，重连失败且被标记为"parked"，只有完整重启 gateway 才能恢复。`RuntimeError: The current task is not holding this lock` 是常见底层异常。该问题涉及多个服务（Composio、Honeycomb、Linear、Ptengine），且被不同用户复现，现已标记为 duplicate 并关闭，说明已有系统性修复方案。
- **Local 模式桌面端启动可靠性问题**（#96266）：用户报告 Linux 下后端进程在 `HERMES_BACKEND_READY` 后被杀死，重试/修复失败，为 **P1** 级问题。影响范围大——所有以 local 模式在 Linux 桌面端使用的用户都可能受影响。
- **CJK 输入导致创建按钮不可用**（#96153）：在"Create new bot"对话框中，bot 名称包含中文/日文/韩文字符时，创建按钮保持禁用状态。这是一处典型的 **i18n 边界 bug**，影响非英文用户。
- **Windows 原生平台问题数个**：#96956（asyncio unix server）、#97635（/background 结果未投递）、#97702（拖拽附件失效）——Windows 作为平台，在 gateway 启动、后台任务投递、桌面端交互方面均有待加固。
- **缓存层兼容性问题成隐性痛点**：多条 P0 修复（#97327、#96755 等）显示了 Nova、OpenAI-compatible 提供商、OpenCode Go、LiteLLM Anthropic 代理等多样化的场景中 prompt-cache 的兼容性问题。这暴露了 Hermes Agent 在多种 provider 的缓存语义上仍有较长的适配距离。

## 8. 待处理积压

**长期未关闭的 Issue：**
- **#66616（Skills index 过期巡检）**：自 2026-07-18 开始持续告警，已 42 天。索引自动构建 Pipeline 的可靠性仍有问题。评论数 115 条，社区关注度极高，值得维护者优先处理。
- **#96266（Linux 本地后端启动即崩溃）**：P1 级，自 2026-08-27 起 2 天无 PR 对应，是最新的高优先级未解决项。

**PR 积压批次：**
- **@leighton-tidwell 的 #84299（Kanban 附件桌面端预览）与 #89487（⌘⇧E 折叠侧边栏）**均已存在 11–17 天，属于有完整测试覆盖的功能 PR，但处于 `OPEN` 状态。考虑到今日合入的 PR 多为 P0 修复，这些 P3 功能在优先级上可能被排后。
- **@konsisumer 的 #77605（严格 host 文件工具作用域）**：7 月 3 日创建的 security 相关 PR，已开放 26 天，属安全边界的增强，建议维护者确认并合并。

**其他值得关注：**
- **#77369 与 #91265** 是 MCP OAuth mtime==0 竞争的根源报告，虽然 marked duplicate，但其底层根因——fresh-process mtime 0 被误判为外部刷新——在 #66616 的 Skills Index 或其它首次启动场景中可能仍有类似模式需要清理。
- **#66391（Discord 配置迁移）**已关闭，但如 `DISCORD_HOME_CHANNEL` 等配置在社区中仍有需求，建议在后续版本规划中把 `config.yaml` 的 Discord 段落补充完整。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-29** | **数据来源：github.com/sipeed/picoclaw**


## 1. 今日速览

PicoClaw 项目今日活跃度整体平稳，过去 24 小时内收到 1 条 Issue 更新和 1 条 PR 更新，无新版本发布。值得关注的是，一项关于 QQ 频道多附件类型支持的增强功能 PR（#1349）已于今日合并关闭，标志着该项目在社区渠道（Channel）的交互能力迈上了新台阶。此外，一条关于"轮次结束后转向（after-turn steering）"模式的特性请求（#3342）仍处于开放讨论中，社区对其设计方向存在一定的探讨空间。总体而言，项目在持续迭代推进中，Issue 处理速度和 PR 审查效率处于正常水平。


## 2. 版本发布

过去 24 小时内无新版本发布。项目当前稳定版本维持不变。


## 3. 项目进展

**关键进展：** 今日合并了 PR #1349 —— **`[type: enhancement, domain: channel, go] feat(qq): support parsing and replying to more attachment types`**

- **合并时间：** 2026-08-29（创建于 2026-03-11，历经约 5 个月完成评审与合入）
- **功能范围：**
  1. 支持解析 QQ 频道中的表情（emoji）结构；
  2. 支持接收来自 QQ 频道的语音、图片、视频和文件消息；
  3. 支持回复时发送本地语音、图片、视频和文件附件（发送前先上传）；
  4. 回复时优先使用 Markdown 消息格式，失败时降级到其他方式。

- **推进意义：** 该 PR 显著增强了 PicoClaw 在 QQ 频道渠道上的富媒体交互能力，从原来偏文本导向的频道适配，向**多模态消息处理**迈出了重要一步。这将直接改善基于 QQ 频道部署场景下用户的实际体验（例如接收图片/语音指令、发送结构化回复等），对项目的渠道生态完整性有实质性贡献。


## 4. 社区热点

**热点 Issue：#3342** **[OPEN] [stale] [Feature] Opt-in "after-turn" steering mode: queue busy-session messages instead of interrupting the running turn**

- **链接：** [sipeed/picoclaw Issue #3342](https://github.com/sipeed/picoclaw/issues/3342)
- **作者：** unedtamps | **创建于：** 2026-08-21 | **最近更新：** 2026-08-28 | **评论数：** 1

**分析：** 该 Issue 提出了一个颇具设计深度的交互模式改进。核心痛点是：当用户在当前任务仍在执行时发送第二条消息，现有"转向（steering）"机制会将其视为中途修正——直接跳过任务 #1 的剩余工具调用（日志显示 "Skipped due to queued user message."），并立即注入消息 #2 进行处理。用户建议新增一个**可选的"轮次后转向"模式**，将忙碌会话期间收到的消息加入队列，待当前轮次完成后再处理，而不是强行打断。

这一诉求反映了真实使用场景中两类用户的差异需求：一类希望"随时打断、快速响应"；另一类则希望在重要任务执行期间保持上下文完整、不被割裂。该讨论在今日虽只有 1 条评论，但属于设计层面的基础性问题，后续可能引发较大范围的社区讨论。


## 5. Bug 与稳定性

今日无新增 Bug 报告、崩溃或回归问题。项目当前稳定性状态良好，无需紧急修复。


## 6. 功能请求与路线图信号

**[新功能请求]** Issue #3342 —— **Opt-in "after-turn" steering mode（轮次后转向模式）**

- **状态：** 开放中，标记为 stale，但今日有更新（2026-08-28 活跃），表明讨论仍在继续。
- **路线图判断：** 该请求带标签 `[Feature]`，提出了明确的使用场景和可选性（opt-in）设计初衷，且与现有交互架构息息相关。考虑到：

  - 实现层面涉及智能体调度核心逻辑（是否阻塞、是否可以并发），改动有一定复杂度；
  - 但"可选开启"的定位意味着不会破坏现有默认行为，风险可控；
  - 项目近期刚合入 QQ 渠道增强 PR，整体功能迭代节奏稳定。

  该功能**有合理概率被纳入下一批规划**，具体取决于维护者对该交互场景优先级的判断及社区讨论热度。


## 7. 用户反馈摘要

**来自 Issue #3342 的核心用户反馈：**

- **痛点：** 当前强制打断机制（mid-task course correction）不适合所有场景。当智能体正在执行一个较为关键或耗时的任务链时，中途注入新用户消息会导致任务 #1 的工具调用被无端跳过（"Skipped due to queued user message."），造成上下文断裂和结果不确定性。
- **期望行为：** 提供可配置选项，使系统在忙碌状态时将来消息排队，在当前轮次结束后再依次处理，保证每轮对话的执行完整性。
- **潜在应用场景：** 多轮复杂任务（如数据分析链路）、需要保持执行连续性的自动化流程、以及用户在等待长任务时补发补充信息的场景。

总体来看，用户对项目的"转向（steering）"设计持认可态度，但希望获得更细粒度的控制权，体现出 PicoClaw 用户群体对**代理执行可控性**有较高期待。


## 8. 待处理积压

**[重点提醒]** Issue #3342 自 2026-08-21 创建至今已一周有余，仍处于讨论阶段且被标记为 `[stale]`，评论数仅 1 条。虽属于特性请求而非严重 Bug，但背后关联的核心交互设计问题具有一定权重，建议维护者：

- 明确表达对该需求的接纳/拒绝态度；
- 或组织一次社区讨论/投票来确定该模式的优先级；
- 避免长时间悬而不决，以免损失社区信心。

此外，PR #1349 从创建（2026-03-11）到合并（2026-08-29）历时约 5 个半月，周期较长，建议关注是否存在 PR 评审延迟的系统性问题。


*本报告基于公开 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-29** | **数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 在过去 24 小时保持中等偏上的活跃度：新增/活跃 Issue 3 条（0 条关闭），PR 更新 50 条（其中 45 条待合并，5 条已合并/关闭），无新版本发布。值得关注的是，amit-shafnir 连续提交了 9 个 setup 驱动协议相关的 PR（#3633-#3640 区间及 #3485），构成一个规模可观的架构改造栈，是目前项目最集中的开发主线。此外，多个由核心团队标记的 Slack 适配器与 agent-runner 修复 PR 仍在积压队列中，合并节奏偏慢。社区活跃度方面，`bash nanoclaw.sh` 直接挂起的报告（#3645）引发了用户共鸣，是今日讨论度最高的 Issue。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共 5 个 PR 被合并/关闭，以下为已完成的关键变更：

### 已合并/关闭

- **#2361 [已关闭] codex provider 契约收紧** — 作者: chiptoe-svg
  将过时的 Codex SDK provider 草图替换为当前 `codex app-server` JSON-RPC 契约，使 `CODEX_MODEL` 成为可选覆写项，并移除过时的 40K/manual-compaction 指导文档。该 PR 对 Codex 集成路径的可靠性有直接改善意义。
  
- **#2363 [已关闭] credential-proxy OAuth token 主动刷新**（#1102 的 v2 移植）— 作者: chiptoe-svg
  修复了 OAuth token 过期后容器代理静默 401 的长期问题，仅影响使用原生凭据代理的用户；OneCLI 用户不受影响。
  
- **#1102 [已关闭] credential-proxy OAuth token 自动刷新原始 PR** — 作者: chiptoe-svg
  该 PR 今日正式关闭，最终合入的 v2（#2363）对 OneCLI 用户的安全边界做了更明确的注释说明，整体方案已收敛。

- **#216 [已关闭] 修复 /proc 与 Read 工具的密钥净化绕过** — 作者: leaanthony
  安全修复：修复了通过 `/proc/self/environ` 和 Read 工具绕过 Bash 钩子环境变量净化的三个攻击向量。该 PR 自 2026-02-13 提交以来长期处于 Blocked 状态，今日关闭。

- **#2326 [已关闭] 添加 Issue 模板** — 作者: glifocat
  为仓库补充了 bug、enhancement、skill 三类 Issue 模板，有助于未来问题提交的规范化。

### 评估

今日合并数量不高（5 个），但其中两个是 credential-proxy 的长期安全修复（#1102/#2363），一个解决了已存在半年的密钥泄露向量（#216），整体质量权重较高。45 个待合并 PR 的积压仍然偏重，尤其是核心团队的 Slack/agent-runner 修复（#3387-#3392）已等待近 9 天。

---

## 4. 社区热点

今日最受关注的 Issue/PR：

### #3645 — `bash nanoclaw.sh` 直接挂起且无任何输出或日志

- **类型**: Issue（Bug） | **作者**: dagelf | **创建**: 2026-08-29 | **评论**: 2 | **状态**: Open
- **链接**: [Issue #3645](https://github.com/qiwibitai/nanoclaw/issues/3645)
- **摘要**: 用户执行 `bash nanoclaw.sh` 后，终端仅显示 ASCII logo（一只大型动物图案）后无限期挂起，无任何反馈或日志输出。该问题对新手用户极为不友好——首次启动即卡死且无提示。
- **分析**: 这一 issue 虽然评论数不多，但反映了 onboarding 体验的核心痛点：启动脚本缺少最基本的进度反馈和错误日志。用户在首次体验就陷入黑箱状态，很可能直接放弃。这值得维护团队优先关注，建议至少在启动脚本中加入 `--verbose` 选项或前期环境检测。

### 备注

过去 24 小时内没有出现评论数特别高（>10）的 PR 讨论，整体讨论热度集中在少数 issue 上。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 是否有修复 |
|--------|----------|------|-----------|
| 🟢 中 | #3645 | `bash nanoclaw.sh` 启动无限挂起，无日志、无反馈，首次使用体验严重受损 | ❌ 无 |
| 🟡 中 | #3643 | 硬编码 30 分钟 `ABSOLUTE_CEILING_MS` 会中途杀死本地模型的长轮次，无配置出口 — 本地模型（如 OpenCode provider → OpenAI 兼容本地服务器）的 agent 长轮次会被宿主强制杀死，`heartbeatAgeMs=1829985` 超出 `ceilingMs=1800000` | ❌ 无（社区已提出配置化建议） |
| 🟢 低 | #3599 | 速率限制/配额导致的失败与其他失败（脚本错误、超时）在 `ncl tasks list` 中无法区分，影响 on-call 排障效率 | ❌ 无（已有功能请求方案） |

另外，以下 PR 值得注意：

- **#3642 [OPEN]** — `fix(update-skills): report local adapter state instead of failing or silently reverting`（作者: brunoasm）
  修复了 `update-skills` 在本地 adapter 状态异常时的静默回滚问题，目前等待评审。
  
- **#3427 [OPEN]** — `fix(agent-runner): tell the agent send_card drops callback actions`（作者: glifocat，core-team 标记）
  通过使 agent 感知 `send_card` 会丢失 callback actions 来避免意外的行为差异，已等待 8 天。

---

## 6. 功能请求与路线图信号

### 明确的功能请求

- **#3599 — 持久化 rate_limit/quota 分类**（作者: DawoudIO）
  请求在任务运行记录中持久化失败原因类别（是否因配额/速率限制而失败），以便在配额恢复后自动重试。该请求合理且实现成本较低（仅需在运行记录中多存一个字段），**很可能被纳入下一版本**。

- **#3643 — ABSOLUTE_CEILING_MS 配置化**（作者: glifocat）
  请求将硬编码的 30 分钟上限变为可配置项。社区已在 issue 中表达了认同，且已有相关实现思路（如通过环境变量或配置文件暴露）。**有较大概率进入路线图**。

### 路线图信号

- **setup driver 重构栈**（amit-shafnir 的 #3485 + #3633-#3640 共 9 个 PR）是当前最大的架构方向：将 NicoClaw 的交互式 setup 从终端 UI 库迁移到可被 GUI 驱动的 NDJSON 协议之上，同时加强安全性（拒绝 argv/env 传凭据、强制服务健康检查、子进程字节上限与 kill 路径）。这是一个面向原生桌面应用的重要铺垫，暗示团队正在规划桌面客户端。

### 已提交但待合并的功能 PR

- **#2003 — voice transcription V2（容器侧、默认主权）**（作者: jorgenclaw）已等待 4 个月，处于 Open 状态且无评审动态，可能已失焦。若团队仍认可该方向，需要推进。
- **#3633/#3637/#3638/#3639** 等 setup 相关 PR 均为核心团队标记，正在密集提交中，合入只是时间问题。

---

## 7. 用户反馈摘要

以下为今日 Issue 评论中提炼的真实声音：

### 痛点

1. **安装/启动黑箱（#3645）**：用户 `dagelf` 报告脚本挂起且无任何输出，社区用户大概率会认同"缺少日志和反馈是最大的挫败点"。
2. **硬编码限制影响真实工作流（#3643）**：glifocat 指出，使用本地模型的 agent 长轮次会被 30 分钟上限无法配置地杀死。对于那些依赖本地模型长任务（如代码生成、长文档处理）的用户来说，这是一个真实的阻塞问题。
3. **失败原因不可区分（#3599）**：DawoudIO 表示，配额失败在 `ncl tasks list` 中与其他失败没有区别，`failed_runs` 计数没有任何原因标注。这直接增加了开发者排障成本。

### 用户行为观察

- 今日没有出现正面反馈或使用体验分享的评论，整体用户声音以"受阻"为主。
- 两个独立用户（glifocat、DawoudIO）提出的都涉及"配置化与可观测性"，可以推断目前用户对项目的灵活性和排障能力有更高期待。

---

## 8. 待处理积压

以下为历史上长期未响应、但值得关注的重要 Issue/PR：

### 🔴 最需关注

- **#2003 — voice transcription V2**（Open 已 126 天，作者 jorgenclaw）
  容器侧语音转录实现已重新提交，仍无评审，可能已丧失团队关注。若功能方向仍有效，建议至少给出状态回应。

### 其他积压

- **#3427** — `fix(agent-runner): tell the agent send_card drops callback actions`（Open 8 天，core-team）
  对 agent 行为可预测性有实际影响，建议安排评审。
- **#3387 / #3388 / #3392** — Slack 适配器三个核心修复（Open 9 天，core-team）
  1:1 DM 隐私、任务升级渠道、approvals adapter 实例保持，均涉及 Slack 集成的正确性，建议优先推进。

---

## 总结

NanoClaw 今日的核心动态集中在 **setup 驱动协议重构**（amit-shafnir 的 9 个 PR 栈）和安全修复的历史收尾（#216、#1102/#2363）。项目整体健康，但存在两个值得警惕的信号：一是 45 个待合并 PR 的积压未见缓解，核心团队的 Slack 修复等待时间已达 9 天；二是用户侧的"配置化与可观测性"需求（#3643、#3599）与"新手启动反馈缺失"（#3645）形成了对项目易用性的双重挑战。建议维护团队在推进新架构的同时，优先回应 `bash nanoclaw.sh` 挂死问题，并通过配置化解决本地模型超时问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-29

---

## 1. 今日速览

IronClaw 过去 24 小时保持高活跃度：共 14 条 Issue 更新（11 条活跃，3 条关闭）、28 条 PR 更新（13 条待合并，15 条已合并/关闭），并发布 v1.4.0 正式版。社区注意力集中于 **两个核心持续性痛点**：一是模型上下文溢出与工具结果过载导致的性能退化（#7891、#7981、#7986、#7930），二是通知系统的耐久性建设（#7873-7875 全部关闭，对应实现 PR 已合并）。值得关注的是，**关于工具架构的重构意图明显**——`list_repos` 返回 519KB 数据的案例揭示了"工具输出粒度 vs 模型上下文窗口"的根本张力，项目正在从多个方向同时补漏（#7984、#7982、#7978、#7976、#7975）。总体来看，项目正处于 **"社区反馈驱动、核心团队高频响应" 的健康循环期**，1.4.0 稳定版的发布标志着近期 81 个 commit 的变更正式进入稳定轨道。

---

## 2. 版本发布

### ironclaw v1.4.0 (2026-08-27)

**Release Notes 要点：**
- 自 `ironclaw-v1.3.0` 以来的 **81 个 commit** 稳定提升至正式版
- 核心新增：**耐久通知收件箱（Durable notification inbox）** —— 运行结果和可操作门控发布到每用户收件箱，由 WebUI 通知界面呈现

**破坏性变更与迁移指南：**
- 当前 Release Notes 未披露明确的破坏性变更条目
- 建议用户查阅 `1.4.0-rc.1` 的 RC 版本发布说明以获取完整变更范围
- 升级后建议验证通知收件箱与现有自动化工作流的集成是否正常

---

## 3. 项目进展

今日共 15 条 PR 合并/关闭，其中**核心进展集中在通知系统与 AI 循环稳定性两个方向**：

### 🔔 通知系统闭环落地（今日关闭 4 条关联 PR）

| PR | 内容 | 状态 |
|---|---|---|
| [#7899](https://github.com/nearai/ironclaw/pull/7899) | 发布自动化**预运行失败**通知 (`RunFailed`) | ✅ 已合并 |
| [#7900](https://github.com/nearai/ironclaw/pull/7900) | 发布**资源/策略阻塞**通知 (`RunBlocked`) | ✅ 已合并 |
| [#7901](https://github.com/nearai/ironclaw/pull/7901) | **认证门控先持久化再富化**，确保中断时不丢失可恢复项 | ✅ 已合并 |
| [#7903](https://github.com/nearai/ironclaw/pull/7903) 关联 3 条关闭的 Issue | #7873、#7874、#7875 全部关闭 | ✅ 闭环 |

**意义**：三个通知类型（`RunFailed`、`AuthenticationRequired`、`RunBlocked`）构成完整的自动化生命周期事件覆盖，且**持久化先于外部通道投递**的设计确保可靠性。

### 🔄 AI 循环稳定性修复（今日关闭 2 条核心修复 PR）

- **[#7982](https://github.com/nearai/ironclaw/pull/7982) — `result_read` 预算误导修复**：此前工具对两种不同的预算失败返回同一消息，导致模型无法从错误中恢复。修复后区分场景返回可操作指南。直接来源是 #7981 中的生产事故（64 次工具调用、3 分 01 秒）。
- **[#7965](https://github.com/nearai/ironclaw/pull/7965) — `tool_search` 误报修复**：仅匹配一个偶然词项也会返回看似合理的排名结果，误导模型认为工具存在。修复后要求多词项匹配。

### 🧱 质量与架构加固

- [#7979](https://github.com/nearai/ironclaw/pull/7979) — 强制执行编码输出所有权架构门控
- [#7980](https://github.com/nearai/ironclaw/pull/7980) — CI 验证集成测试组拓扑结构，路由新目录至正确的测试通道

### 💅 WebUI 设计系统最终落地

- [#5563](https://github.com/nearai/ironclaw/pull/5563) 与 [#5084](https://github.com/nearai/ironclaw/pull/5084) — 设计系统 tokens + `/playground` 页面、自动化学页面重构，均于今日关闭。这是从 7 月初启动的 WebUI v2 设计体系工作的收尾。

---

## 4. 社区热点

### 🔥 最热 Issue：性能类 Bug 主导讨论

| Issue | 标题 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | 2 封邮件的未投影能力负载 + 盲切片 24 KiB 头信息 = 14.3 秒推理成本 | **10** | 工具输出未经上下文投影直接进入提示词，导致推理时间爆炸 |
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | 上下文压缩：Pi 风格压缩屏障 + 结构化摘要 + 溢出恢复 | 5 | 完整线程历史重放到每次模型请求是核心架构问题，成本差距 4 倍 |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) | Epic: Agent 生命周期钩子扩展 | 4 | 将生命周期事件扩展为钩子注册，而非核心引擎修改 |

### 深层诉求分析

三个高热 Issue 本质指向**同一根本张力：模型上下文窗口的有限性 vs 工具输出与线程历史的无限增长**。`#7891` 以硬数据揭示了该问题的严重性 — 双向 19.7 秒延迟中，**19.2 秒是纯模型推理成本**，原因是 49KB 未投影的 MIME 头信息强行进入提示词。

这不再是理论优化话题，而是**已经真实影响用户体验和运行成本的生产事故**（#7981：列仓库耗时 3 分钟、#7982：模型反复重试一个无法达到的预算）。当前 6 条活跃性能相关 PR（#7976、#7977、#7978、#7984）正在同时补漏，但**从"补丁"走向"架构性修复"仍需观察**。

---

## 5. Bug 与稳定性

### 🔴 高危 — 生产事故级

| Issue | 问题描述 | 严重度 | 位置 | 修复 PR |
|---|---|---|---|---|
| [#7981](https://github.com/nearai/ironclaw/issues/7981) | `list_repos` 列出 98 个仓库需 64 次工具调用、3 分 01 秒；首轮调用已含完整答案但模型无法使用 | 🔴 P2 建议 | `github` 工具 | [#7982](https://github.com/nearai/ironclaw/pull/7982) 已合并 + [#7984](https://github.com/nearai/ironclaw/pull/7984) 待合并 |
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | 49KB MIME 头信息未投影直接进提示词 → 单次回合 19.7 秒 | 🔴 中风险 | 工具/扩展 | 无直接 fix PR，可能纳入 compaction 系列 |
| [#7986](https://github.com/nearai/ironclaw/issues/7986) | `list_repos` 每仓库 81 个裸字段、519KB 总量，**自带投影接口未使用** | 🟡 P2 建议 | `github` 扩展包 | 无 |

### 🟡 中危 — 架构缺陷

| Issue | 问题描述 | 严重度 | 修复 PR |
|---|---|---|---|
| [#7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` 重建工具 Schema 时静默丢弃非白名单顶级约束，无警告无测试 | 🟡 中 | 无 |
| [#7977](https://github.com/nearai/ironclaw/pull/7977) | 移除 digest-based 终止器后，非进展状态无终止机制 → 生产运行 593 次工具调用/70 分钟 | 🟡 中 | [#7977](https://github.com/nearai/ironclaw/pull/7977) 待合并 |

### 稳定性趋势

**积极信号**：通知系统相关 3 个 Issue 全部关闭，无回归；`result_read` 预算误导修复直接来自生产数据，采用数据驱动修复方式。

**警惕信号**：`flatten_top_level` 的问题暴露了**工具 Schema 处理链中缺少诊断输出**，属于长期积累的技术债，需关注是否还有其他静默丢弃路径。

---

## 6. 功能请求与路线图信号

### 即将进入下一版本的可能功能

| 功能 | 来源 Issue/PR | 状态 | 纳入可能性 |
|---|---|---|---|
| **工具结果引用传递** — "使用 gmail.get_message 已返回的内容"而非重新发送 | [#7930](https://github.com/nearai/ironclaw/issues/7930) | 新开，无 PR | ⭐⭐⭐ #7984 已部分实现（工具搜索回复按首视包络裁剪），但不涉及参数引用 |
| **NEAR AI 模型模态保留** — 通过模型发现展示文本/图像/视频能力 | [#7970](https://github.com/nearai/ironclaw/pull/7970)、[#7969](https://github.com/nearai/ironclaw/issues/7969)、[#7971](https://github.com/nearai/ironclaw/issues/7971) | 3 条 Issue，同一位作者 | ⭐⭐⭐ 已形成功能集，可能作为一个里程碑落入下版本 |
| **持久化沙箱执行器** — 在 Docker 沙箱中运行完整 Agent 循环 | [#7908](https://github.com/nearai/ironclaw/pull/7908) | PR 开放中 | ⭐⭐ (架构级变更，需长周期评估) |
| **Agent 生命周期钩子扩展** — 补齐 after-turn/before-turn/compaction 等钩子 | [#7770](https://github.com/nearai/ironclaw/issues/7770) | Epic 进行中 | ⭐⭐⭐ 分阶段推进，compaction 相关 PR 已在落地 |

### 路线图信号

**compaction（上下文压缩）是当前最明确的路线图主线** — 5 条相关 PR（#7976、#7977、#7978、#7975）全部来自核心团队成员，覆盖阈值推导、单轮裁切、累积摘要边界等多个维度，说明该方向已被团队列为高优先级。

---

## 7. 用户反馈摘要

### 真实痛点

> "The answer was already fully present after call #1." — [#7981](https://github.com/nearai/ironclaw/issues/7981) 评论

用户对**工具输出粒度与模型消费能力的不匹配**表达了明显挫败感。`list_repos` 返回 519KB 数据但模型无法有效消费，最终导致 64 次工具调用和 3 分钟延迟——工具需要更智能的**输出裁剪或结果引用机制**。

> "Zero lock contention, zero retries, zero queue delay. The cost came entirely from raw MIME headers pushed into the prompt unasked." — [#7891](https://github.com/nearai/ironclaw/issues/7891)

**"未经请求就推入提示词"** 是核心痛点。用户需要的是**智能上下文投影**，而非简单的工具结果截断——应该只推送对当前任务有意义的部分。

### 积极反馈

- 通知系统从 Issue 提出到实现闭环（#7873 → #7899 合并）仅 3 天完成，用户对响应速度感到满意（无负面反馈出现，说明该功能符合预期）
- **边界情况被认真对待**：#7985 指出现有错误消息将"缺少文档"误报为"输入编码错误"，说明用户关注错误的**可诊断性**— 区分领域失败与请求格式错误至关重要

### 场景分布

- **邮件处理（Gmail 集成）**：2 条性能相关 Issue 直接关联
- **GitHub 仓库管理**：列表操作的输出颗粒度问题是主要痛点
- **自动化任务编排**：通知系统是用户强烈需要的功能，已作为 1.4.0 核心特性发布

---

## 8. 待处理积压

### ⚠️ 需要关注的未响应 Issue

| Issue | 创建时间 | 备注 |
|---|---|---|
| [#7903](https://github.com/nearai/ironclaw/issues/7903) — 持久化沙箱执行官 spike | 2026-08-26 | 高风险架构决策，有 PR #7908 跟进但状态开放中，需明确评估窗口 |
| [#7977](https://github.com/nearai/ironclaw/pull/7977) — 终止器修复（非进展状态终止） | 2026-08-28 | 涉及 70 分钟生产事故，虽已有 PR 但尚未合并，建议尽快推进 |
| [#7986](https://github.com/nearai/ironclaw/issues/7986) — `list_repos` 81 字段问题 | 2026-08-28 | 与 #7981 同源，但独立暴露了**扩展包投影接口未使用**的架构问题，反映 `github` 扩展包可能需要架构审查 |

### 📋 长期未合并 PR（>30 天）

| PR | 创建时间 | 问题 | 建议 |
|---|---|---|---|
| [#5563](https://github.com/nearai/ironclaw/pull/5563) — 设计系统 tokens | 2026-07-02 | **今日已关闭** ✅ | 该 PR 已通过约 57 天的评审周期后合并，反映出大型 UI 变更的审批流程需要优化 |
| [#5084](https://github.com/nearai/ironclaw/pull/5084) — 自动化页面重构 | 2026-06-18 | **今日已关闭** ✅ | 历时 71 天的 PR，与 #5563 同批关闭，说明设计系统合并是前置条件 |

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 24 小时内 14 个 Issue/28 个 PR 活动，社区与核心团队双向驱动 |
| **响应速度** | ⭐⭐⭐⭐⭐ | 生产事故（#7981）当天即有修复 PR（#7982）合并 |
| **架构前瞻性** | ⭐⭐⭐⭐ | 性能问题已从"修复个案"走向"系统性重构"（compaction 系列 + 沙箱执行器） |
| **技术债风险** | ⭐⭐⭐ | `flatten_top_level` 静默丢弃暴露了 Schema 处理链缺少诊断输出；设计系统 PR 周期过长 |
| **社区透明度** | ⭐⭐⭐⭐ | 几乎所有 Perf 问题均附带实测数据（延迟、字节数、工具调用次数）|

**总体判断**：IronClaw 正处于从"功能快速迭代"向"质量与性能深度优化"的转型期，1.4.0 的发布是一个重要的稳定里程碑。接下来的关键看点在于 compaction 系列 PR（#7976/#7977/#7978/#7975）能否在下一版本中合入，以及 #7986 所暴露的扩展包输出粒度问题能否获得架构级解决方案。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-29

> 数据来源：github.com/netease-youdao/LobsterAI（统计区间：2026-08-28 00:00 — 2026-08-29 00:00 UTC）

---

## 1. 今日速览

项目今日整体活跃度**中等偏高**。过去 24 小时内有 1 个新版本发布（2026.8.28），9 条 PR 更新（8 条已合并/关闭，1 条待合并），5 条 Issue 更新（3 条已关闭，2 条仍开启）。当日合并的 8 条 PR 主要围绕**设置页模型目录、侧边栏横幅调度、手机号脱敏/昵称修复、会话页内搜索**等功能展开，其中多条 PR（#1153、#1155、#1156）为**积压约 5 个月的遗留 PR** 集中清理。新版本发布节奏保持稳定（每月 2-3 次）。**值得关注的是**：一批 3 月底提交的测试补充与 Bug 修复 PR 今日全部关闭，意味着此前长期悬而未决的核心模块测试覆盖问题终于落地。整体项目健康度良好，社区反馈活跃度中等。

---

## 2. 版本发布

### LobsterAI 2026.8.28（2026-08-28 发布）

**包含更新：**
- `login guide` 登录引导功能（PR #2525）
- `settings` 新增**计划模型目录（plan model catalog）** 功能（PR #2530）
- 包含合并入 release/2026.8.24 分支的更新，如手机号脱敏冲突修复等

**破坏性变更**：无明确标注。

**迁移注意事项**：当前无额外说明。建议用户关注设置页中模型列表的展示变化（可能新增 "More Models" 折叠区）。

| 资源 | 链接 |
|------|------|
| Release 页面 | [LobsterAI 2026.8.28](https://github.com/netease-youdao/LobsterAI/releases) |
| 相关 PR #2572 | [Release/2026.8.24](https://github.com/netease-youdao/LobsterAI/pull/2572) |

---

## 3. 项目进展

今日合并/关闭的 PR 呈现出**两个推进方向**：

### 3.1 新功能与改进（当日创建、当日合并）

- **PR #2568 — 折叠更多模型 + 侧边栏横幅调度同步**
  由 @Mind-Hand 提交，将可选模型合并为默认折叠的 "More Models" 区域，并添加了服务端同步的侧边栏横幅调度（含客户端版本门控、本地过期、缓存处理与刷新恢复）。
  链接：[PR #2568](https://github.com/netease-youdao/LobsterAI/pull/2568)

- **PR #2570 — 修复手机号脱敏合并冲突**
  合并发布账户菜单更新，同时保留 `136****7834` 脱敏逻辑，用合成数据替换真实测试手机号。
  链接：[PR #2570](https://github.com/netease-youdao/LobsterAI/pull/2570)

- **PR #2571 / #2569 — 手机昵称修复**
  两条同日合并的渲染层修复。
  链接：[PR #2571](https://github.com/netease-youdao/LobsterAI/pull/2571) / [PR #2569](https://github.com/netease-youdao/LobsterAI/pull/2569)

### 3.2 积压 PR 集中清理（3 月底创建、今日关闭）

- **PR #1153 — Gemini baseURL 路径拼接修复**（关联 Issue #1151），修复 `slice(0, -3)` 多切一个字符的问题。链接：[PR #1153](https://github.com/netease-youdao/LobsterAI/pull/1153)
- **PR #1155 — 会话内页内搜索（Ctrl+F）**，基于 TreeWalker + CSS Custom Highlight API 实现精确文本节点定位与实时高亮。链接：[PR #1155](https://github.com/netease-youdao/LobsterAI/pull/1155)
- **PR #1156 — commandSafety / coworkMemoryJudge 单元测试补充**（关联 Issue #1154），为两个核心安全/质量模块新增 Vitest 覆盖。链接：[PR #1156](https://github.com/netease-youdao/LobsterAI/pull/1156)

> 以上三组 PR 已有约 5 个月的等待期，今日全部关闭，**项目维护节奏明显加快**。另外，仍有一条旧 PR #1146（修复新建 agent 任务记录获取问题）仍为 OPEN 状态。

---

## 4. 社区热点

| 排名 | 条目 | 类型 | 评论数 | 状态 | 链接 |
|------|------|------|--------|------|------|
| 1 | **#2489 快更新v4pro！** | Issue | 3 条 | 已关闭 | [链接](https://github.com/netease-youdao/LobsterAI/issues/2489) |
| 2 | **#2536 微信群已满人** | Issue | 2 条 | 已关闭 | [链接](https://github.com/netease-youdao/LobsterAI/issues/2536) |
| 3 | **#1154 为 commandSafety 和 coworkMemoryJudge 补充测试** | Issue | 2 条 | 已关闭 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1154) |

**诉求分析：**
- **#2489**：用户催促 v4pro 版本发布，说明社区对新一代模型支持有较高期待，可能意味着当前模型能力存在不足或用户对新版本有明确的性能预期。
- **#2536**：微信群已满，用户询问是否能开新群。这反映出**用户基数在增长**，同时也暴露了社区沟通渠道承载能力不足的问题。建议维护者考虑扩展微信群数量或开设其他社区渠道（如 Discord/Slack）。
- **#1154**：社区开发者主动贡献测试代码，说明**用户对安全/质量模块有较高关注度**，也侧面体现了项目在开放协作方面的号召力。

---

## 5. Bug 与稳定性

今日 Bug 类更新较少，均为旧问题收尾：

| 严重程度 | 描述 | 状态 | 关联 PR/Issue |
|----------|------|------|---------------|
| **中** | `buildOpenAIChatCompletionsURL` 处理 Gemini `/v1` 路径时 URL 缺 `/` 分隔符，导致 API 请求失败 | 已修复（PR #1153 今日合并） | [Issue #1151](https://github.com/netease-youdao/LobsterAI/issues/1151) / [PR #1153](https://github.com/netease-youdao/LobsterAI/pull/1153) |
| **中** | 新建重名 agent 后任务记录未自动刷新 | 待修复（PR #1146 仍 OPEN） | [PR #1146](https://github.com/netease-youdao/LobsterAI/pull/1146) |
| **低** | 手机号脱敏合并冲突遗留下真实号码测试数据 | 已修复（PR #2570 今日合并） | [PR #2570](https://github.com/netease-youdao/LobsterAI/pull/2570) |

> 整体来看，今日没有新报告的 P0/P1 级紧急 Bug，项目处于**稳定迭代**状态。需要留意的是 PR #1146 已经积压约 5 个月，建议近期安排处理。

---

## 6. 功能请求与路线图信号

今日新提出/活跃的功能相关诉求较少，但以下信号值得关注：

| 信号 | 来源 | 说明 | 是否能进入下一版 |
|------|------|------|------------------|
| **v4pro 模型支持** | [Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | 用户明确催促新模型发布 | 高，可能已进入内部排期，但需确认具体时间表 |
| **微信群扩容** | [Issue #2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | 社区渠道扩展 | 与代码路线无关，但值得运营重视 |
| **设置页模型目录（plan model catalog）** | 已在 Release 2026.8.28 中发布 | 模型管理能力增强 | 已实现 |
| **侧边栏横幅服务端调度** | PR #2568 已合并 | 运营位基础设施 | 已实现 |

**路线图判断**：项目当前重心在**设置页模型管理与账户体系完善**（渲染层多处修改），以及**核心模块测试覆盖率补全**（#1154、#1149）。下一阶段可能将重点转向模型能力（v4pro）与新社区渠道建设。

---

## 7. 用户反馈摘要

| 来源 | 用户声音 | 分析 |
|------|----------|------|
| Issue #2489 | "快更新v4pro！" | 用户对新模型能力有急迫需求，可能为等待某项具体能力（如更强推理/更快的速度） |
| Issue #2536 | "WeChat group is Full. Anticipating for another wechat group! Thanks." | 社区活跃度高、新用户涌入，微信群供不应求。用户态度友好、有耐心，但渠道不足可能影响新用户体验 |
| Issue #1149 / #1151 | 社区开发者主动提交详细测试方案与 Bug 修复方案 | 说明开发者用户对项目代码质量有较高要求，且愿意主动贡献。项目在技术社区中的认可度可见一斑 |

**整体感受**：用户主要痛点集中在**模型更新速度**与**社区渠道容量**，对项目本身的稳定性与功能无明显负面反馈。

---

## 8. 待处理积压

以下条目长期未获响应或进展缓慢，建议维护者近期关注：

| 条目 | 类型 | 创建时间 | 积压时长 | 状态 | 链接 |
|------|------|----------|----------|------|------|
| **#1146 修复新建 agent 未获取任务记录** | PR | 2026-03-31 | ~5 个月 | OPEN | [链接](https://github.com/netease-youdao/LobsterAI/pull/1146) |
| **#1149 为 coworkMemoryExtractor 补充 Vitest 测试** | Issue | 2026-03-31 | ~5 个月 | OPEN | [链接](https://github.com/netease-youdao/LobsterAI/issues/1149) |
| **#1151 buildOpenAIChatCompletionsURL Gemini 路径 Bug** | Issue | 2026-03-31 | ~5 个月 | OPEN（关联 PR #1153 已合并，建议关闭） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1151) |

> 说明：#1151 关联的修复 PR #1153 已于今日合并，建议维护者验证后关闭该 Issue。#1149 与 #1154 同一作者提交，后者已合并测试补充，建议评估 #1149 中的 `coworkMemoryExtractor` 测试是否可以同步推进。#1146 的 agent 任务记录问题直接影响用户侧体验，建议优先排期。

---

## 项目健康度评估

| 维度 | 评分（5 分制） | 说明 |
|------|---------------|------|
| 活跃度 | ⭐⭐⭐⭐ | 24h 内 5 Issue + 9 PR + 1 Release，节奏稳健 |
| 维护响应 | ⭐⭐⭐⭐ | 积压 PR 集中清理效果显著，但仍有 #1146 悬挂 |
| 社区参与 | ⭐⭐⭐ | 有外部贡献者提交 PR，但量级一般 |
| 代码质量 | ⭐⭐⭐⭐ | 安全模块测试补全具积极意义 |
| 用户满意度 | ⭐⭐⭐ | 基本满意，但对新模型推出速度有期待 |

---

*日报由 LobsterAI GitHub 数据自动生成*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-29

## 1. 今日速览

Moltis 项目在 2026 年 8 月 29 日整体活跃度处于**较低水平**：过去 24 小时仅产生 1 条新的 Issue（#1246），无 PR 活动，无版本发布。该 Issue 为用户报告的 bug，涉及在沙盒环境中添加节点后无法运行的问题。鉴于单日仅 1 条 Issue 且无代码流动，项目当前处于相对平静的开发间歇期，但也需关注该 bug 报告背后反映的沙盒环境稳定性和节点管理逻辑的潜在缺陷。整体项目健康度尚可，但建议维护者关注积压问题的处理节奏。

---

## 2. 版本发布

过去 24 小时内无新版本发布。无更新内容或迁移事项可披露。

---

## 3. 项目进展

过去 24 小时内没有 PR 被合并或关闭，因此无法报告具体的代码推进。项目在今日未产生任何功能迭代或修复落地，长期看项目进展的驱动力将取决于下一批 PR 的合并情况。

---

## 4. 社区热点

今日唯一活跃的 Issue 为 **#1246**（[链接](https://github.com/moltis-org/moltis/issues/1246)），目前暂无评论和点赞，但作为唯一的新增动态仍值得关注。该 issue 由用户 **maop** 提交，报告在沙盒环境中添加节点后无法运行的问题。用户已确认检索过既有 bug 列表且使用了最新版本。此问题的核心诉求集中在**沙盒环境的可靠性和节点动态添加后的系统一致性**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 有无 Fix PR | 说明 |
|---------|-------|------|-------------|------|
| **中** | [#1246: can't run on sandbox after a node is added](https://github.com/moltis-org/moltis/issues/1246) | 开放中，待响应 | 无 | 用户报告在沙盒中添加节点后无法运行。尽管用户未提供完整会话日志，但从上下文可推测这是节点管理或沙盒状态同步中的一个确定性缺陷，可能与资源分配、沙箱隔离或节点注册逻辑有关。目前尚无维护者响应或修复 PR。 |

建议维护者优先排查沙盒环境的节点添加/初始化流程，并可在该 issue 下请求用户补充完整的会话日志和环境信息以加速定位。

---

## 6. 功能请求与路线图信号

今日无新的功能请求提交。Issue #1246 严格来说属于 bug 报告而非新功能提议，因此无法据此推断路线图信号。未来可关注沙盒和多节点管理相关主题是否在 `feature` 标签下产生需求共振。

---

## 7. 用户反馈摘要

今日的反馈仅来自 Issue #1246 的提交者 **maop**。其核心痛点是：**在沙盒中加入节点后系统无法正常运行**。这表明用户正在积极使用 Moltis 的多节点/沙盒功能，且对基础的节点操作可靠性有较高的期望。该用户已遵循提交规范（检查既有 issue、确认版本），说明其是有一定经验的用户，其反馈的参考价值较高。遗憾是用户尚未提供足够上下文，维护者应主动引导补充。

---

## 8. 待处理积压

过去 24 小时内无新增长时间未响应的 Issue 或 PR，但以下为持续存在的积压信号供维护者留意：

- **#1246**（[链接](https://github.com/moltis-org/moltis/issues/1246)）—— 新报告且尚未得到任何维护者回应，建议在 48 小时内回应分配标签或请求补充信息，避免用户流失。
- 建议维护者整体审视此前未关闭的 bug 类 issue 清单，评估当前 bug 响应时间和平均修复周期，确保项目健康度维持稳定的可预测状态。

---

*日报生成时间：2026-08-29 | 数据窗口：2026-08-28 至 2026-08-29*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-29

> CoPaw（github.com/agentscope-ai/CoPaw）社区与开发动态，数据截至 2026-08-29。

---

## 1. 今日速览

过去 24 小时 CoPaw 项目保持**高活跃度**：共产生 42 条 Issue 更新（11 条新开/活跃，31 条关闭）与 31 条 PR 更新（19 条待合并，12 条已合并/关闭），并发布 2 个新版本（v2.2.0-beta.3 / v2.2.0-beta.2）。值得注意的是，今日有 **大量历史遗留 Issue 被集中关闭**（包括 #5757、#6314、#6524、#2814 等 30 余条），表明维护团队正在进行一轮大规模清理与收尾，同时也有多个高价值 PR 合入（MCP 双协议客户端、MCP 会话恢复、模型发现修复等），整体项目推进节奏紧凑。

---

## 2. 版本发布

### v2.2.0-beta.3（最新）
- **feat(mcp):** 新增 Streamable-HTTP 双协议客户端，支持旧版回退（PR #7330）— 使 `streamable_http` 驱动优先使用 MCP 2026-07-28 规范，并在对端为旧版时回退至原有握手协议。这是对 MCP 生态兼容性的重要增强。
- **fix(mcp):** 在 teardown 时中止挂起的会话 RPC，并恢复过期的 `list_tools`（PR #7329）— 修复 MCP 服务器重启后客户端无法自动恢复的问题（对应 Issue #6524）。

### v2.2.0-beta.2
- **fix(workspace):** 使启动失败清理逻辑具备取消安全性（PR #7194）。
- **test(e2e):** 控制台端到端测试新增 23 个针对性用例与扩展断言（PR #7327）。

> **注意：** 两个版本均为 beta 预发布版本，无明确的破坏性变更或迁移说明。

---

## 3. 项目进展

今日合并/关闭的重要 PR 聚焦于以下方向：

| 方向 | PR | 说明 |
|------|-----|------|
| **MCP 协议升级** | #7330（merged） | Streamable-HTTP 双协议客户端，兼容新旧 MCP 规范，显著提升远程 MCP Server 连接的稳定性 |
| **MCP 会话恢复** | #7329（merged） | 中止挂起的 RPC、恢复过期 `list_tools`，直接解决 Issue #6524（MCP 后端重启后客户端无法自动恢复） |
| **自定义模型发现** | #7320（merged） | 修复自定义 OpenAI 兼容 Provider 的模型自动发现与持久化，覆盖 Issue #7305 所报问题 |
| **模型输出 token 迁移** | #7386（merged） | 兼容 legacy per-model `max_tokens` 配置在 `discovered_models` 中的迁移，保留加密凭据可加载性 |
| **ACP 运行时限制** | #7388（merged） | ACP 运行时输出限制改用 `max_completion_tokens`，与模型元数据对齐 |
| **钉钉流连接检测** | #7381（merged） | 检测钉钉 Stream WebSocket 过期连接并绑定 SDK 请求上限，修复休眠/网络切换后的“假活”问题 |
| **上下文截断优化** | #7331（merged） | 限制超大单行工具结果进入 Agent 上下文，完整结果存为工作区产物，防止上下文溢出 |
| **启动架构优化** | #7384（merged） | 共享延迟 ASGI 启动运行时，在 Python 完全加载前即可暴露健康检查，加速“可聊天”就绪 |

综合来看，项目今日在 **MCP 生态、Provider 兼容性、上下文管理、启动性能** 四个维度均有实质推进，且多个 PR 直接对应并关闭了历史 Issue，体现了高效的“问题-修复”闭环。

---

## 4. 社区热点

### 🔥 #7318 [OPEN] — QwenPaw Hub 多租户版路线图讨论（13 条评论）
**链接:** https://github.com/agentscope-ai/QwenPaw/issues/7318

这是当前社区最热的讨论帖。作者 rayrayraykk 宣布 **QwenPaw Hub 多租户版将于 2.2.0 推出**，并邀请社区反馈“接下来该做什么”。帖子引用了多个历史社区需求（如 #2324 多用户访问与管理员管理技能）。13 条评论表明社区对团队版/多租户功能有强烈诉求，正在积极贡献功能建议。

### 🔥 #5757 [CLOSED] — 飞书信息不回复（15 条评论）
**链接:** https://github.com/agentscope-ai/QwenPaw/issues/5757

连续多次“第一条消息正常回复，后续消息无响应（机器人显示已收到但无回复）”，涉及 Docker 与 AgentScope Platform 两套部署。这是飞书通道的高频问题，虽已关闭但评论区仍有大量用户反馈同类现象，值得关注是否真正修复。

### 🔥 #7298 [OPEN] — OpenSSL 3.0.x TLS 栈导致运营商 DPI 重置握手（9 条评论）
**链接:** https://github.com/agentscope-ai/QwenPaw/issues/7298

桌面版（Tauri）与 Docker 镜像捆绑 Python 3.11 时代的 OpenSSL 3.0.x，在部分运营商网络中 TLS 握手被 DPI 重置，桌面版无规避方案。这是一个影响特定用户群体（中国大陆运营商网络）的**环境兼容性问题**，已引发较多讨论。

---

## 5. Bug 与稳定性

### 严重级别：高

| 问题 | 状态 | 对应 Fix PR |
|------|------|-------------|
| **#7298** 桌面/Docker 捆绑 OpenSSL 3.0.x，运营商 DPI 重置 TLS 握手，且桌面版无变通方案 | OPEN | 暂无 |
| **#6524** MCP 后端重启后客户端无法自动恢复，需手动 `list mcp` | CLOSED | ✅ #7329（已合入 v2.2.0-beta.3）|
| **#7379** 处理中文长文件名 PDF 报错（Windows 路径被误认为 URL），阻断任务执行 | OPEN | 暂无 |

### 严重级别：中

| 问题 | 状态 | 对应 Fix PR |
|------|------|-------------|
| **#6314** `RemoteProtocolError: peer closed connection`，QwenPaw 主动关闭连接导致任务中断 | CLOSED | 已跟进 |
| **#7288** MCP 大结果在活跃轮次中绕过滚动压缩，溢出模型上下文 | CLOSED | ✅ #7331（限制单行工具结果大小）|
| **#6124** 可编辑安装时 36 个 ReMe 后台循环消耗 48GB+ 内存，启动永不完成 | CLOSED | 已跟进（与 #7133 PR 相关）|
| **#6427** WebView2 渲染进程在 v2.0.0+post.4 启动约 7 秒后崩溃（`msedge.dll+0x36c7f6d`）| CLOSED | 已跟进 |
| **#5344** `/api/console/chat` 返回 200 但 Agent 忙碌时静默丢弃消息 | CLOSED | 已跟进 |

**总结：** 核心稳定性问题（MCP 恢复、上下文溢出、消息静默丢弃）多数已有关联修复并合入；**OpenSSL 版本问题与中文文件名路径问题**仍待解决，是当前需要重点关注的新增风险。

---

## 6. 功能请求与路线图信号

### 🔮 可能进入下一版本的功能

| 功能需求 | 来源 Issue/PR | 信号 |
|----------|--------------|------|
| **Fallback 模型配置页面** | PR #7392（OPEN）；Issue #4011、#5718 | 已实现独立“Fallback Models”标签页，支持启用/禁用与模型选择，功能完成度较高 |
| **会话归档分组** | Issue #3187 | 社区多次请求，已有 UI/后端方案讨论 |
| **Shell 命令实时交互/可观测性** | Issue #4237、#4986 | 已有一轮完整设计讨论（running-commands panel） |
| **Windows 系统托盘** | Issue #3751、#5622 | 需求合并中，双 Issue 提出相同诉求 |
| **技能（Skills）单元测试支持** | Issue #3883 | 开发者工具链增强需求 |
| **模型自动切换（Auto Switch）** | Issue #5718、#4011 | 当主模型不可用时自动回退，与 Fallback 配置页面直接关联 |

### 📌 路线图信号：QwenPaw Hub 多租户版
Issue #7318 明确 2.2.0 将推出多租户 Hub，社区正在积极反馈“下一步做什么”，预计会成为未来数周的核心开发方向。

---

## 7. 用户反馈摘要

- **飞书通道稳定性差**（来自 #5757）：用户多次反馈“第一条消息正常，后续无回复”，涉及 Docker 与云平台，是影响面较大的渠道问题。虽然 Issue 被关闭，但评论区仍有用户表示“问题依然存在”。
- **MCP 重启恢复痛点**（来自 #6524）：`streamable_http` 模式下服务端重启后客户端无法自动恢复，用户需要手动执行 `list mcp`。该问题已在 v2.2.0-beta.3 修复（PR #7329）。
- **执行大输出命令被截断**（来自 #6512）：`execute_shell_command` 输出超过约 30KB 时结果被截断，甚至触发 `Internal error`，影响批量数据处理场景。PR #7331 已对工具结果做限制并保存完整产物，但需验证是否完全覆盖该场景。
- **会话排序反直觉**（来自 #4817）：用户吐槽“没有一个像 qwenpaw 这么反人类设计的”，会话未按最近活动时间排序，对标 WorkBuddy、Trae、豆包等产品。
- **对模型 fallback 的强烈需求**（来自 #5718, #4011）：用户希望 Agent 能够自主感知模型配额不足并自动切换，现在只能停下来等待用户手动切换。

---

## 8. 待处理积压

以下为长期未响应或值得关注的重要 Issue/PR，建议维护者关注：

| 项目 | 类型 | 创建时间 | 备注 |
|------|------|----------|------|
| **#7298** OpenSSL 3.0.x TLS 栈被运营商 DPI 重置 | Bug | 2026-08-25 | 3 天无 fix，影响特定网络用户，建议评估升级 OpenSSL 或提供配置选项 |
| **#7379** 中文长文件名 PDF 报错 | Bug | 2026-08-28 | 新开 Issue，Windows 路径误识别为 URL，阻断任务，尚无响应 |
| **#1775** Codex Steer Mode 消息附加功能 | Feature | 2026-03-18 | 已挂 5 个月，社区仍有需求，建议评估排期 |
| **PR #7080** PowerContext 可插拔长时记忆后端 | PR | 2026-08-17 | First-time contributor 提交，Under Review 中，值得关注但需仔细评审 |
| **#7395** Claude Code 第三方 agent harness 路线图 | Question | 2026-08-28 | 用户在询问 Claude Code 支持进展（`coming_soon=True`），建议官方回复排期预期 |

---

## 健康度总评

**项目状态：🟢 健康，活跃度高**

- **正向指标：** PR 合并率高（12/31 今日合并/关闭）、Issue 清理效率高（31/42 关闭）、版本迭代节奏紧凑（两日内发布两个 beta）、高价值修复（MCP、Provider、上下文管理）密集落地。
- **关注点：** 新出现的 OpenSSL 兼容问题、中文路径 Bug 尚无响应；大量 Issue 被关闭但部分可能“关闭未修”（如 #5757 飞书问题），建议关注用户是否反馈回归；积压的长期 Feature（如 Steer Mode、系统托盘）缺乏明确排期。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-29

## 1. 今日速览

ZeroClaw 过去 24 小时保持高活跃度：33 条 Issue 更新（27 条活跃、6 条关闭）与 50 条 PR 更新（全部待合并）。值得关注的是，**三个 P1 级 Bug（#8654、#9815、#9425）在今日关闭**，但其中 #9815（`forbidden_paths` 安全绕过）与 #8654（skill-review fork 段错误）的修复 PR 尚未合并，安全风险仍需警惕。此外，今日新出现一例 **CI 依赖扫描失败（#10427）**，检测到已废弃的 `chacha20` crate，属于供应侧安全信号。项目在合规化（RFC 决策队列 #8692）、SOP 控制平面 5/5 里程碑（#8288）以及会话/渠道安全加固方面持续推进，但 **RFC 审批明显积压**——多个高危 RFC（#6850、#6996、#6909）等待维护者裁决。

---

## 2. 版本发布

过去 24 小时无新版本发布。截至本日报生成时，尚无已发布的 Release 可供分析，功能预览请参考下方「功能请求与路线图信号」中列出的待合并 PR。

---

## 3. 项目进展

过去 24 小时**无 PR 被合并或关闭**，50 条 PR 全部处于待合并状态。项目渐进式进展体现在以下层面：

### 3.1 已关闭 Issue 反映的问题修复（待 PR 合并）
| Issue | 问题 | 对应修复 PR |
|---|---|---|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork 越界 slice 导致 SIGSEGV | 待识别（多 PR 在队列中） |
| [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) | `forbidden_paths` 在 `allowed_roots` 下失效 → 安全绕过 | 待识别 |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | 运行中 SOP 作业无操作员取消路径 | 待识别 |
| [#9711](https://github.com/zeroclaw-labs/zeroclaw/issues/9711) | Arduino 固件闪存临时目录未清理 | 待识别 |
| [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) | ZeroCode 粘贴事件绕过输入所有权检查 | 待识别 |
| [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) | Google TTS API key 未标记敏感 | 待识别 |

### 3.2 今日活跃的修复 PR（管道中最具实质性的进展）
- **[#10414](https://github.com/zeroclaw-labs/zeroclaw/pull/10414) fix(cron): 为 agent 手动触发与历史记录添加属主限定** — 为 cron 任务增加基于 agent 别名的隔离，修复重命名导致的越权访问风险。
- **[#10030](https://github.com/zeroclaw-labs/zeroclaw/pull/10030) fix(runtime): 从 RPC prompt 路径持久化会话状态** — 确保 `session/state` 查询不再返回卡死的 `running` 状态。
- **[#10029](https://github.com/zeroclaw-labs/zeroclaw/pull/10029) fix(channels): 入站 webhook 消息保留配置别名** — 修复多 webhook 实例折叠为 `webhook` owner 的冲突问题。
- **[#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262) fix(rpc): 守护进程重载时关闭 RPC 连接** — 解决 zerocode quickstart 卡死问题。

### 3.3 架构级 PR 待合入（长期目标）
- **[#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) feat(providers): 原生 Hailo-Ollama 支持** — 标注 `do-not-merge`，Hailo 专用。
- **[#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) feat(sessions): 持久会话 prompt 附件** — SQLite 存储 + 单次审批，是会话增强的重要方向。

> **整体判断**：项目活跃度极高，但 PR 合并速率偏低——50 条 PR 全部待合并且 0 条关闭，可能反映维护者审查瓶颈（参考 #8692 tracker 中维护者决策队列的持续积压）。

---

## 4. 社区热点

### 4.1 最热门 Issue：内存治理与存储解耦
**[#6850 — RFC: 将内存生命周期策略与存储后端解耦](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)**（评论 21，更新至 2026-08-28，风险:high）
- **诉求**：当前 `Memory` trait 同时承担底层存储与生命周期治理（合并、治理策略），各 gateway/channel 重复实现。提案希望明确职责边界，将治理提升为独立策略层。
- **信号**：该 RFC 讨论了三个月仍未进入实施阶段，是零爪架构演进的核心争议点之一。

### 4.2 内部发起 agent 回合的溯源与回复契约
**[#6954 — RFC: 内部发起 agent 回合的溯源、会话绑定与回复契约](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)**（评论 16，Revision 2 已修正）
- **诉求**：为 cron/SOP 等内部触发的对话定义身份稳定性、并发绑定与回复生命周期，避免会话状态混乱。

### 4.3 沙箱策略细化
**[#6996 — RFC: 细粒度沙箱策略 — 文件系统与网络限制](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)**（评论 15，更新至 2026-08-29）
- **背景**：应用层路径准入与 OS 沙箱后端（Bubblewrap/Landlock/Seatbelt）漂移，需统一风险配置。
- **关联 PR**：[#10098](https://github.com/zeroclaw-labs/zeroclaw/pull/10098)（Landlock DNS/TLS 访问修复）正在等待审查，是该 RFC 的先行修复。

### 4.4 维护者决策队列
**[#8692 — Tracker: 维护者 RFC 与设计问题决策队列](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（评论 14）
- **状态**：该 tracker 本身就是社区对审批积压的回应。今日仍有多个 RFC 新增「needs-maintainer-review」标签（#6996、#6909、#9975 等），说明维护者带宽仍然紧张。

---

## 5. Bug 与稳定性

### 5.1 高危（P1，今日新增/活跃）
| Issue | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | Deepgram/OpenAI 转录静默忽略语言提示（意大利语语音笔记被丢弃） | OPEN，新增 | 无 |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | 活跃回合中第二条消息启动并行运行 → 重复工作与回复 | OPEN（in-progress） | 无 |
| [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) | CI：依赖扫描失败 — `chacha20 0.10.0` 已被 yanked | OPEN（in-progress） | 无（需 `cargo update -p chacha20`） |

### 5.2 中危（P2，今日新增/活跃）
| Issue | 问题 | 状态 |
|---|---|---|
| [#10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437) | ZeroCode SGR 鼠标滚轮报告被插入编辑器 | OPEN，新增（0 评论） |
| [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) | ElevenLabs TTS API key 未标记 sensitive | OPEN（accepted） |
| [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) | 临时文件默认权限 0o644 可能泄露敏感媒体 | OPEN（accepted） |

### 5.3 已关闭（今日）+ 未合并修复的注意点
- **#9815（forbidden_paths 安全绕过，P1）已关闭** — 但修复 PR 未出现在今日合并列表中，需确认其合入状态。此问题属于安全漏洞（路径绕过），若修复尚未合入，**潜在风险仍存在**。
- **#8654（SIGSEGV，P1）已关闭** — 同理，需追踪修复 PR 的合并状态。

---

## 6. 功能请求与路线图信号

### 6.1 高概率进入下一版本（有对应 PR 已有实质实现）
| 功能 | Issue / PR | 信号 |
|---|---|---|
| AnySearch 搜索提供商 | [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356) / [#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336) | 有实现，等待审查（needs-author-action） |
| Serply 搜索提供商 | [#10402](https://github.com/zeroclaw-labs/zeroclaw/pull/10402) | 有实现，等待审查 |
| 会话持久 prompt 附件 | [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | 有完整实现，能力丰富 |
| 新 web_search 提供商（多个） | 上述 + 其他 | 搜索生态扩展成为明显方向 |

### 6.2 功能请求（无 PR，但用户需求明确）
| 功能 | Issue | 说明 |
|---|---|---|
| Telegram 进度可见性 | [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) | 用户无法看到 agent 内部进度，长任务看起来像卡死 |
| SOP 作为心跳 | [#10422](https://github.com/zeroclaw-labs/zeroclaw/issues/10422) | 希望 `heartbeat.sop = "<name>"` 直接执行 |
| POST /webhook SSE 流式输出 | [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | Hosted Path A worker 需要实时 token 流 |

### 6.3 路线图信号
- **SOP 5/5 里程碑**（[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)）：13 项能力待验收，是当前最重要的路线图 tracker。
- **Gemini 语音转语音 broker 通道**（[#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406)）：已接受 #8780，正在实施批处理。
- **AI 辅助 PR 预审查/重审查**（[#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)）：已进入生产试点，规范化 SOP。

---

## 7. 用户反馈摘要

从今日活跃 Issue 评论中提取的关键用户痛点：

1. **Telegram 体验断裂**（#10426、#10429）：用户反馈「对话静默直到最终响应，长任务看起来像卡死」；意大利语语音笔记被静默丢弃，属于「配置了语言但无效」的隐性失败——`INFO` 级日志掩盖了真实问题。

2. **会话并发导致重复计费/重复回复**（#10408）：用户发送第二条消息时触发并行运行，导致同一会话出现两份回复。对生产环境用户而言，这是成本与体验双损失。

3. **RPC/CLI 卡死**（#10262、#10030）：zerocode quickstart 在守护进程 reload 后卡死，已通过关闭 RPC 连接的 PR 解决，但相关用户的信任修复需要版本发布支撑。

4. **安全头未标记**（#10432、#10175）：API key 在日志/调试输出中可能明文暴露。虽然标记为 P2，但属于「容易修复但影响面广」的 hygiene 问题。

5. **审查积压**（#8692）：社区自身通过 tracker 反映「RFC 等候时间过长」，大量高风险 RFC 等待维护者裁决。

---

## 8. 待处理积压

### 8.1 长期未解决的高风险 RFC（等待维护者决策）
| issue | 标题 | 等待时长 | 风险 |
|---|---|---|---|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 内存生命周期与存储解耦 | >3 个月 | high |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 内部发起 agent 回合契约 | >3 个月 | high |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 细粒度沙箱策略 | >3 个月 | high |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 桌面端 computer-use 支持 | >3 个月 | high |

### 8.2 卡在 `needs-author-action` 的 PR（贡献者未响应）
| PR | 标题 | 等待时长 |
|---|---|---|
| [#10414](https://github.com/zeroclaw-labs/zeroclaw/pull/10414) | cron agent 手动触发与历史保护 | 2 天 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | 会话工具与 discord_search 属主作用域 | >3 周 |
| [#10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364) | 保留短错误时的详细工具输出 | 4 天 |
| [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356) | AnySearch 提供商 | 4 天 |
| [#10402](https://github.com/zeroclaw-labs/zeroclaw/pull/10402) | Serply 提供商 | 3 天 |

### 8.3 标记 `do-not-merge` 的长期 PR
- **[#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（Hailo-Ollama 原生支持）**：已开放 >6 周，`do-not-merge` 标记，需维护者明确是否继续推进。

### 8.4 维护者重点关注建议
1. **#9815 修复 PR 需尽快确认合入**——安全绕过问题若未修复，应重新打开 Issue。
2. **#8692 决策队列优先级**——4 个高危 RFC 等待 >3 月，建议建立每周一次的 RFC 批处理节奏。
3. **CI 依赖故障（#10427）**——`chacha20` 被 yanked 意味着供应链风险，建议立即 `cargo update` 并发布补丁版本。

---

**日报生成时间**：2026-08-29  
**数据来源**：ZeroClaw GitHub 仓库，过去 24 小时动态

> 本日报为 AI 自动生成，所有链接指向原始 GitHub Issue/PR。分析基于标签、评论数、更新时间等公开元数据，供项目维护者与社区参考。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*