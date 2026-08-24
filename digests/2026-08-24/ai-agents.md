# OpenClaw 生态日报 2026-08-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-24 01:22 UTC

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

# OpenClaw 项目动态日报 — 2026-08-24

## 今日速览

OpenClaw 项目今日保持高热度的社区活跃度，过去 24 小时内产生 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 452 条，待合并 PR 405 条。今日无新版本发布，当前处于 **v2026.8.1-beta.2** 的验证阶段（[#125626](https://github.com/openclaw/openclaw/issues/125626)）。核心热点集中在消息传递可靠性（sessions_send 重复/丢失、Telegram/WhatsApp 回复滞留）、AI 供应商适配（DeepSeek 优先级降级、Codex OAuth 超时）以及资源泄漏问题（进程未回收、SQLite 句柄未释放）。值得关注的是，大量高优 Bug 出现在 **P1 级别**（占比超过半数），且多数带有 `clawsweeper:no-new-fix-pr` 标签，表明社区在等待修复方案上存在一定积压。整体来看，项目在功能迭代（PR 持续合并）与稳定性压力（Bug 集中涌现）之间呈现并行状态。

---

## 版本发布
无新版本发布。当前验证中的 v2026.8.1-beta.2 正在接受社区测试（[#125626](https://github.com/openclaw/openclaw/issues/125626)），测试反馈将以 release-validation 工作表单形式汇总。

---

## 项目进展

今日合并/关闭的重要 PR 数量为 95 条，但评论数最高的前 30 条 PR 中大多仍处于开放状态（待合并 405 条）。值得关注的进展信号：

- **[PR #128436](https://github.com/openclaw/openclaw/pull/128436)（已关闭）**：修复 QA 重启验证在跨 Gateway 替换时可能基于过期 `wait` 调用误判当前检查点状态的问题，优化测试质量。
- **[PR #127338](https://github.com/openclaw/openclaw/pull/127338)（待合并，P1）**：修复不完整模型流（如 Bedrock 截断）在缺少终端事件时仅返回部分文本的问题，引入带部分输出的重试机制，合入后有望改善会话连续性。
- **[PR #128426](https://github.com/openclaw/openclaw/pull/128426)（待合并，P1）**：修复 Safari 中 Control UI 侧边栏菜单无法弹出的问题，改善跨浏览器体验。
- **[PR #128431](https://github.com/openclaw/openclaw/pull/128431)（待合并）**：优化 Mattermost 入站 DM 回复路径，减少每次冷回复的 HTTP 请求，提升响应速度。
- **[PR #127382](https://github.com/openclaw/openclaw/pull/127382)（待合并）**：修复 diagnostics-otel 扩展直方图桶上限为 10,000 导致模型延迟和内存无法以绝对值诊断的问题。

这些合入动作表明项目在**稳定关键路径**和**性能优化**上仍在持续前进，但大量 PR 等待维护者审查的积压（405 条待合并）可能成为迭代速度的瓶颈。

---

## 社区热点

以下 Issue 是今日讨论最集中的话题：

| Issue | 标题 | 评论 | 标签 |
|-------|------|------|------|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | Release validation: v2026.8.1-beta.2 | 18 | maintainer, P2, off-meta |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows: vitest teardown fails with EBUSY unlink on agent state DB | 15 | P2, platinum hermit |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent turns stall on DeepSeek — `[cron:...]` prefix deprioritized | 13 | P1, diamond lobster |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | codex app-server: turn interrupted after client-delegated tool result | 12 | duplicate, P1, platinum hermit |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send: target agent can call back, causing duplicate messages | 12 | P1, diamond lobster |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout | 10 | bug, regression, P1 |

**核心诉求分析**：当前社区最关切的是**多智能体通信可靠性**（`sessions_send` 造成消息重复/丢失，见 #39476）与**供应商特定行为适配**（DeepSeek 对 `[cron:` 前缀的系统级降级，见 #121953）。此外，Windows 上 SQLite 文件锁导致的测试失败（#119796）和 Codex OAuth 刷新超时（#89278）也受到了大量关注，说明跨平台兼容性和认证稳定性是用户日常使用中的高频痛点。

---

## Bug 与稳定性

以下按严重程度排列今日活跃的高风险 Bug：

**P0 级**
- [#108520](https://github.com/openclaw/openclaw/issues/108520)：iOS 应用更新后 Talk Mode 和聊天功能完全不可用，gateway 连接但无法交互。标记为 `ux-release-blocker`，暂无修复 PR。

**P1 级**
- [#121953](https://github.com/openclaw/openclaw/issues/121953)：DeepSeek 对 cron 消息前缀降级导致 Agent 长时间停滞（数十秒至分钟），影响自动化任务可靠性。
- [#89278](https://github.com/openclaw/openclaw/issues/89278)：Codex OAuth 刷新成功但 cron/heartbeat 因 10s 超时机制失败，已标记 regression；已有[关联 PR #127338](https://github.com/openclaw/openclaw/pull/127338) 在增强流式恢复，但尚未覆盖此场景。
- [#126246](https://github.com/openclaw/openclaw/issues/126246)：Telegram 持久化消息滞留在 `send_attempt_started`，重启后丢失，造成消息丢失和用户困惑。
- [#126900](https://github.com/openclaw/openclaw/issues/126900)：`maxActiveTranscriptBytes` 在压缩后仍高于阈值时进入无限压缩循环，阻塞队列，日志无明确提示。
- [#126906](https://github.com/openclaw/openclaw/issues/126906)：通过 `tools.deny` 拒绝 write 工具会静默禁用记忆持久化，且 Agent 仍报告保存成功，造成虚假成功。
- [#97616](https://github.com/openclaw/openclaw/issues/97616)：Hook/tool 子进程泄漏导致僵尸进程堆积，运行时性能下降。
- [#127948](https://github.com/openclaw/openclaw/issues/127948)：WhatsApp 群聊中引用缓存过期后回复渲染为完全空白气泡。

**P2 级**
- [#119796](https://github.com/openclaw/openclaw/issues/119796)：Windows 上 vitest teardown 因 SQLite 句柄未释放报 EBUSY。
- [#111857](https://github.com/openclaw/openclaw/issues/111857)：CLI budget 在压缩后重新打开完整 JSONL 分支，导致低上下文父会话反复被压缩。

**修复状态总结**：上述 P1 级 Bug 大多标注为 `clawsweeper:no-new-fix-pr`，意味着**待合并 PR 中暂无对应修复**，仅 [#89278](https://github.com/openclaw/openclaw/issues/89278) 和 [#111857](https://github.com/openclaw/openclaw/issues/111857) 有相关联的 PR 但尚未验证解决。P0 级 iOS 问题仍无针对性修复。整体 Bug 修复速度略慢于报告速度。

---

## 功能请求与路线图信号

以下功能请求值得关注：

- **[PR #128447](https://github.com/openclaw/openclaw/pull/128447)**：为 Node-hosted worker 会话引入可选的容器隔离（Docker/Podman），为多租户场景或不可信环境下的安全运行提供路径。叠加 [#72591](https://github.com/openclaw/openclaw/issues/72591)（per-agent MCP 服务器细粒度隔离），开发者对**隔离和资源控制**的需求正在明确上升。
- **[PR #128421](https://github.com/openclaw/openclaw/pull/128421)**：为 `sessions.dispatch` 增加自动设备放置能力，运营多节点会话群的用户不再需要手动指定每台设备，简化大规模部署。
- **[PR #128444](https://github.com/openclaw/openclaw/pull/128444)**：支持创建**兄弟会话**（detached sibling sessions），突破当前 `sessions_spawn` 只能创建父子关系的限制，提升多智能体编排灵活性（关连 #128233）。
- **[PR #128432](https://github.com/openclaw/openclaw/pull/128432)**：Control UI 支持用户自定义强调色，将原本硬编码的主题色（默认 claw red）交由用户控制，提升个性化能力。
- **Telegram 进行中草稿状态行（[PR #107302](https://github.com/openclaw/openclaw/pull/107302)）**：在聊天界面展示 Agent 正在执行的工具及已耗时间，解决小组中无法判断 Agent 是卡住还是正常工作的困惑。
- [#91455](https://github.com/openclaw/openclaw/issues/91455) 仍在积压中，**Kubernetes 部署文档**的完善请求尚未被采纳。

这些 PR 多为 2026-08-24 当天提交，且多数带有 `maintainer` 标签，说明维护者正在积极推动**跨渠道体验一致性**和**资源隔离**方面的新功能，预计最早可在 v2026.8.2 或后续版本中进入主线。

---

## 用户反馈摘要

- **自动化任务可靠性诉求（#121953）**：用户 Dytchem 表示 DeepSeek 对 `[cron:` 前缀的降级优先级导致 cron 任务经常停滞数十秒，严重影响了自动化流程的稳定性和可预测性。类似地，#89278 中用户 kopl-blip 反馈 Codex OAuth 刷新超时导致定时任务失败，尽管立即手动探测正常。
- **消息丢失/重复困扰（#39476、#126246）**：多个用户报告 `sessions_send` 引起的重复或丢失消息问题，尤其在 A2A 互调场景下。MAG-Linares-Andalucia 表示 Telegram 回复滞留在 `send_attempt_started` 且重启后丢失，"Agent 完成了但用户什么都没收到"，对可用性造成明显伤害。
- **资源配置与运维体验（#72591）**：用户 alexbixor 详细描述 12 个 Agent × 10 个 MCP 服务器产生 120 个进程的浪费场景，表明多 Agent 单网关配置下资源消耗考量已进入实际部署优化阶段。
- **文档与配置不一致（#91455、#121083）**：Kubernetes 部署指南描述较为别扭（用户原话 "holts a bit akward"）；SecretRef `provider: "default"` 内置别名未在文档中明确说明，导致用户配置类似 `provider: "minimax"` 时遭遇解析错误。
- **窗口/跨浏览器体验（#108520、#128426）**：iOS 自动更新后功能丢失让用户 Dagmar 深感困扰；Safari 侧边栏菜单不可用被 steipete 修复，这可能是 Mac 用户高频点击的常规入口。

---

## 待处理积压

以下为长期未得到有效响应的重点 Issue/PR 列表，建议维护者关注：

**高风险 Bug（长时间未修复）**
- [#89278](https://github.com/openclaw/openclaw/issues/89278)（2026-06-02 开启，P1，regression）：Codex OAuth 刷新超时导致 cron/heartbeat 间歇性失败。2 个 👍，社区关注度高。
- [#39476](https://github.com/openclaw/openclaw/issues/39476)（2026-03-08 开启，P1）：A2A 会话回环导致消息重复。已有 PR 但长期未合并（`linked-pr-open`）。
- [#97616](https://github.com/openclaw/openclaw/issues/97616)（2026-06-29 开启，P1）：子进程泄漏导致运行时退化，影响长期运行的 gateway。
- [#91455](https://github.com/openclaw/openclaw/issues/91455)（2026-06-08 开启，P3）：Kubernetes 部署文档更新积压已久，仅 1 个 👍，但用户积极反馈文档可读性差。

**待合并的有价值 PR（等待维护者审查）**
- [#110257](https://github.com/openclaw/openclaw/pull/110257)（2026-07-18 提交，P2）：修复 trajectory 时间戳错误（`session.ended` 与 `model.completed` 相同），影响调试效率。虽已明确用途说明，但合入时间已近一个月。
- [#110402](https://github.com/openclaw/openclaw/pull/110402)（2026-07-18 提交，P2，fix #109032）：修复 WhatsApp 的 `chunkMode: "newline"` 模式下面段落合并问题。该问题影响用户可见的消息格式，且标有 `merge-risk: message-delivery`，需要及时审查。
- [#111452](https://github.com/openclaw/openclaw/pull/111452)（2026-07-19 提交，P2）：修复 pnpm CMD wrapper 检测问题，影响 Windows 用户。
- [#119736](https://github.com/openclaw/openclaw/pull/119736)（2026-08-05 提交，XL 规模，`needs proof`）：共享有界终端投递证据的重构，规模较大且涉及 `session-state` 风险，但可能是解决多生命周期消息投递问题的关键，有待深入评审。

---

*本报告基于 GitHub 公开数据生成，统计窗口截至 2026-08-24。*

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期**: 2026-08-24 | **数据窗口**: 过去24小时 | **分析范围**: 12个核心项目


## 一、生态全景

个人 AI 助手/自主智能体开源生态正处于 **"功能扩张与稳定性承压并行"** 的深度整合期。头部项目（OpenClaw、Hermes Agent）日 PR/Issue 更新量稳定在 500+ 量级，但 P1 级 Bug 积压与 `clawsweeper:no-new-fix-pr` 标签的普遍出现，表明修复速度已开始落后于报告速度，社区等待成本上升。与此同时，二线项目（NanoBot、Moltis、PicoClaw）则以高质量的小步快跑策略，在安全加固（SSRF 全面封堵）、架构规范化（Provider 契约统一、内存后端标准化）和用户体验打磨上取得了实质突破。移动端远程访问（gbr/1 协议）、容器化隔离、WASM 插件化、多智能体通信可靠性（`sessions_send` 消息重复/丢失）是横跨多个项目的共性技术焦点，正在成为下一代智能体基础设施的竞争高地。


## 二、各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 健康度 | 核心基调 |
|------|-------------|-----------|---------|--------|---------|
| **OpenClaw** | 452 活跃/新开 | 405 待合并（95 合并/关闭） | v2026.8.1-beta.2 验证中 | ⭐⭐⭐ | 高热度，Bug 积压严重，功能与稳定并行 |
| **NanoBot** | 1 新开 | 19 更新（5 合并） | 无 | ⭐⭐⭐⭐ | 高活跃，系统性重构 + 新功能探索 |
| **Hermes Agent** | 100 更新 | 100 更新（多合并） | 无 | ⭐⭐⭐⭐ | 高活跃，桌面端稳定性集中加固 |
| **PicoClaw** | 2 关闭 | 7 更新（5 关闭） | 无 | ⭐⭐⭐⭐ | 安全加固收尾，防御性维护 + 新功能探索 |
| **NanoClaw** | 6 更新 | 50 更新（20 合并） | v2.3.0 发布 PR 备好但被阻断 | ⭐⭐⭐ | 高活跃，新增 3 个高严重度 Bug，发布受阻 |
| **NullClaw** | 1 新开 | 0 | 无 | ⭐⭐⭐ | 低活跃，1 个高危锁竞争问题待处理 |
| **IronClaw** | 12 新开 | 23 更新（5 合并） | 无 | ⭐⭐⭐⭐ | 高活跃，沙箱架构 + CI 管线双线推进 |
| **LobsterAI** | 4 关闭（stale） | 3 关闭（stale） | 无 | ⭐⭐ | 低活跃，历史积压清扫，无新功能推进 |
| **TinyClaw** | — | — | — | — | 无活动 |
| **Moltis** | 2 新开/活跃 | 10 更新（9 合并） | 无 | ⭐⭐⭐⭐⭐ | 高活跃，深度稳定性修复，合并密度最高 |
| **CoPaw** | 3 新开/活跃 | 15 更新（8 合并） | 无 | ⭐⭐⭐⭐ | 中等偏高活跃，修复与功能清理并行 |
| **ZeptoClaw** | — | — | — | — | 无活动 |
| **ZeroClaw** | 50 更新 | 50 更新（0 合并） | 无 | ⭐⭐⭐ | 高讨论度，架构 RFC 密集，PR 积压 45 个 |


## 三、OpenClaw 在生态中的定位

**生态地位**: OpenClaw 是当前个人 AI 智能体赛道无可争议的**头号项目**，日更新量（500+ Issues + 500+ PRs）是第二梯队项目（NanoClaw 50+/IronClaw 23+）的 10 倍以上，社区规模与讨论深度均处于断层领先地位。

**核心优势**:
- **全渠道覆盖**: Telegram、WhatsApp、Discord、Mattermost、Slack 等主流 IM 通道均有深度适配，生态壁垒已初步形成；
- **A2A 多智能体协议**: 原生支持智能体间通信（`sessions_send`），在编排能力上领先于多数竞品；
- **版本迭代节奏**: v2026.8.1-beta.2 正处于社区验证阶段，95 条 PR 日合并量表明功能迭代速度极快。

**主要短板**:
- **稳定性承压**: P1 级 Bug 占新报告问题的一半以上，且大量标记 `clawsweeper:no-new-fix-pr`（无对应修复），消息可靠性（重复/丢失）、资源泄漏（子进程、SQLite 句柄）等问题已成为社区高频吐槽点；
- **修复速度落后**: 405 条待合并 PR 的审查积压，正在成为迭代速度的硬瓶颈——对比 Moltis 的 9/10 合并率，OpenClaw 的合并效率（95/500 ≈ 19%）明显偏低；
- **供应商适配不稳定**: DeepSeek 优先级降级、Codex OAuth 超时等供应商特定问题频发，影响自动化任务的可靠性。

**战略判断**: OpenClaw 凭借先发优势和生态壁垒，在 **"广度"** 上仍无可撼动，但若 P1 级 Bug 积压和 PR 审查瓶颈持续，可能为 NanoClaw、Moltis 等聚焦稳定性的后发项目留下差异化竞争窗口。


## 四、共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **移动端/远程访问** | PicoClaw (#3344)、NanoClaw (#3494, #2301)、OpenClaw (sessions 远程控制) | 手机扫码/配对码远程旁观或控制桌面 Agent、NAT 穿透方案，无需暴露端口 |
| **多智能体通信可靠性** | OpenClaw (#39476)、NanoClaw (#2404, #3457)、NanoBot (#5445) | `sessions_send` 消息重复/丢失、双路径投递、message id 冲突导致 UNIQUE 约束崩溃 |
| **消息投递与持久化** | OpenClaw (#126246)、Hermes Agent (#93251)、Moltis (#1228, #1231) | Telegram/WhatsApp 消息滞留、并行工具调用结果丢失、服务重启后 MCP 客户端失效 |
| **安全加固与 SSRF 防护** | PicoClaw (#3322-3324)、ZeroClaw (#10075, #10072)、NanoClaw (#3456)、LobsterAI (#1202) | 全渠道媒体下载 SSRF 防护、OAuth 凭据持久化、审批按钮 custom_id 安全、敏感信息防泄漏 |
| **资源隔离与容器化** | OpenClaw (#128447, #72591)、ZeroClaw (#9487)、NanoClaw (#72591) | 多租户/不可信环境的容器隔离（Docker/Podman）、per-agent MCP 隔离、多 Agent 进程资源浪费 |
| **Provider 生态扩展** | NanoBot (#5500, #5491)、CoPaw (#7223)、ZeroClaw (#9109, #9645)、NanoClaw (#3355) | Codex TLS 重建阻塞、DeepSeek 模型退役、Hailo-Ollama 边缘硬件、Cursor Agent SDK 支持 |
| **跨平台兼容性** | OpenClaw (#119796)、Hermes Agent (#93063)、NanoClaw (#3497, #3498)、CoPaw (#6203) | Windows SQLite 句柄、Fedora 安装失败、macOS Node 版本段错误、Windows tasklist 探测阻塞 |
| **CI/CD 与工程效率** | IronClaw (#7817, #7821)、NanoClaw (#2537)、ZeroClaw (#10272) | nextest 迁移、pre-commit hooks、并行测试隔离 |


## 五、差异化定位分析

| 项目 | 定位 | 核心优势 | 目标用户 |
|------|------|---------|---------|
| **OpenClaw** | 全能型个人 AI 助手框架 | 全渠道覆盖、A2A 多智能体协议、社区生态 | 追求功能广度与多平台覆盖的开发者/团队 |
| **Hermes Agent** | 桌面优先的 AI 助手客户端 | Desktop/Dashboard/CLI 三端统一体验、代码审查能力（/review） | 深度桌面用户、依赖本地工作流的开发者 |
| **NanoBot** | 轻量级、高可玩性智能体 | WebUI 与 TUI 统一配置体验、MCP 生态深化、进程可管理性 | 偏好类 ChatGPT 交互、注重快速部署的个人用户 |
| **NanoClaw** | OpenClaw 的轻量化/高性能分支 | Chat SDK 4.32.0 统一升级、stacked PR 协作模式 | 寻求更高性能和更细粒度控制的开发者 |
| **PicoClaw** | Go 实现的高性能通道网关 | SSRF 全面封堵、WhatsApp 通道稳定性、跨通道统一安全模型 | 注重安全合规、多 IM 通道同时接入的生产环境 |
| **IronClaw** | 企业级、持久化沙箱智能体 | per-user 持久沙箱、凭证托管代理（iron-proxy）、CI 管线重建 | 企业/团队级部署，对安全隔离与审计有硬性要求 |
| **Moltis** | 高稳定性优先的全能框架 | 今日 9/10 合并率、深度底层修复（TLS/ALPN、嵌入批处理、MCP 重启） | 对稳定性与生产可用性极为敏感的开发者 |
| **ZeroClaw** | 架构驱动的前瞻型框架 | 运行时所有权 RFC、WASM 插件系统、统一附件架构 | 关注长期架构演进的技术决策者 |
| **CoPaw** | 多项目目录/复杂工作流支持 | Aider 集成、会话级多目录绑定、技能系统增强 | 处理多项目复杂工作流的专业开发者 |
| **LobsterAI** | 企业级配置管理 | 模型级 context/token 设置、全局配置 | 企业环境中的配置管理需求 |

**核心差异维度**:
- **抽象层次**: OpenClaw/NanoClaw 关注**智能体通信与编排**；IronClaw/ZeroClaw 聚焦**运行时沙箱与会话所有权**；PicoClaw/Moltis 深耕**通道适配层稳定性**。
- **用户体验重心**: Hermes Agent 强调 Desktop 原生体验；NanoBot 深耕 WebUI/TUI 一致性；CoPaw 侧重多项目/工作流管理。
- **安全模型**: PicoClaw 完成全通道 SSRF 防护；IronClaw 实现 per-user 凭证托管；ZeroClaw 推进 `.zeroclawignore` 敏感文件防护。


## 六、社区热度与成熟度分层

### 第一层：快速迭代期（日 PR 更新 > 50，功能与 Bug 并行爆发）
| 项目 | 特征 | 风险 |
|------|------|------|
| **OpenClaw** | 500+ 日更新量，95 PR 合并，但 405 PR 积压；P1 Bug 占半数以上 | 修复速度 < 报告速度，稳定性口碑可能下滑 |
| **NanoClaw** | 50 PR 更新，20 合并，v2.3.0 发布受阻 | 3 个高严重度 Bug 同时存在，稳定性承压 |
| **ZeroClaw** | 50/50 更新，但 0 合并——全部集中在架构 RFC 讨论 | PR 大量积压，讨论热度未转化为代码落地 |

### 第二层：质量巩固期（日 PR 更新 10-30，合并率高）
| 项目 | 特征 | 亮点 |
|------|------|------|
| **Moltis** | 10 PR 更新，9 合并（90%），深度底层修复 | 今日表现最优，项目从功能扩张转向稳定性加固 |
| **IronClaw** | 23 PR 更新，5 合并；沙箱 + CI 双线推进 | 技术债清理审慎（THROWAWAY 验证 PR），工程文化成熟 |
| **CoPaw** | 15 PR 更新，8 合并 | 修复 + 功能清理并行，但存在内存泄漏隐患 |
| **NanoBot** | 19 PR 更新，5 合并；核心维护者高产出（8 PR） | 系统性重构 + Linear/MCP 生态扩展，健康度良好 |

### 第三层：维护收尾期（日更新 < 5，以清理为主）
| 项目 | 特征 | 风险 |
|------|------|------|
| **PicoClaw** | 安全加固收尾完成，无新 Bug | 无实质性进展，但防御性维护到位 |
| **Hermes Agent** | 100 更新但集中在桌面端修复 | 更新命令破坏安装（#83529）是信任危机点 |
| **LobsterAI** | 全部为 stale 清理，无新功能 | 安全泄漏（#1202）关闭但无修复，风险敞口 |
| **NullClaw** | 仅 1 个新 Issue，锁竞争死锁待解 | 核心功能路径存在稳定性隐患 |

### 无活动：TinyClaw、ZeptoClaw


## 七、值得关注的趋势信号

### 1. 移动端远程访问正在成为标配能力
PicoClaw（#3344）与 NanoClaw（#3494）几乎同步出现了基于 `gbr/1` 协议的手机配对远程旁观方案，叠加 OpenClaw 对 sessions 远程控制的积累，**"随时随地查看/控制你的 Agent"** 正在从锦上添花变为刚需。建议：若你正在设计 Agent 产品，应尽早将移动端访问纳入架构规划。

### 2. "隔离与沙箱"是下一波基础设施竞争高地
OpenClaw 容器隔离 PR（#128447）、IronClaw per-user 持久沙箱（#7810）、ZeroClaw 运行时所有权 RFC（#9487）——三个不同定位的项目在同一天指向同一个方向：**Agent 运行时的安全隔离与资源管控**。这预示着 Agent 从"个人玩具"向"生产工具"的质变正在发生。

### 3. 多智能体通信的"消息可靠性"问题已到临界点
OpenClaw（#39476）、NanoClaw（#2404/#3457）均报告了消息重复/丢失问题。**A2A 协议（sessions_send 回环、双路径投递）的可靠性已经成为制约复杂编排落地的主要瓶颈**。若能在该方向做出突破，将是差异化竞争的重要筹码。

### 4. OAuth 与凭证管理的工程化缺口
NanoBot（OAuth 数据持久化）、Hermes Agent（OAuth 登录强化）、CoPaw（refresh_token 轮换）、OpenClaw（Codex OAuth 超时）、IronClaw（凭证托管代理）——五个项目不约而同在修 OAuth/凭证问题。**第三方集成的认证链路稳定性正在成为普遍痛点**，标准化、可复用的 OAuth 解决方案有明确市场需求。

### 5. macOS 是一等公民：路径解析敏感度不容忽视
NanoClaw（#3498）的 macOS 更新控制器静默退出（`/var/folders` vs `/private/var` symlink 差异）、Hermes Agent（macOS keychain 弹窗）、CoPaw（Windows tasklist 阻塞）——**跨平台路径处理和权限模型差异正在反复消耗开发者时间**。对 macOS/Windows 的深度适配能力将直接影响高端开发者群体的采纳决策。

### 6. CI/CD 工程化成为项目健康度的分水岭
IronClaw 的 nextest 迁移 + data-driven 验证策略、NanoClaw 的 pre-commit hooks、ZeroClaw 的并行测试隔离——**头部项目的工程化水平正在拉开差距**。CI 管线的质量直接决定了合并效率和 bug 发现速度，Moltis 的 90% 合并率与其深度测试文化密不可分。

### 7. 社区贡献者"移动端偏好"正在形成
多个社区贡献者（LinespottingPrivate 同时向 PicoClaw 和 NanoClaw 提交 gbr/1 手机配对 PR）跨项目贡献同一主题的代码，表明**移动端远程控制是社区开发者最愿意投入的领域之一**，也是个人开发者最容易上手的贡献切入点。

---

*报告生成时间: 2026-08-24 | 数据截止: 2026-08-23 23:59 UTC | 数据源: GitHub API | 分析框架: 活跃度 / 健康度 / 趋势信号*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-24

## 1. 今日速览

NanoBot 项目今日活跃度**显著提升**，24小时内共产生 21 条 Issues/PR 更新，其中 PR 更新达 19 条（含 5 条已合并/关闭），为近期最高水平。核心维护者 chengyongru 贡献了 8 条 PR，覆盖 provider 重构、配置编辑器、Codex TLS 修复等多个方向，显示项目进入**系统性重构与功能扩展并行**阶段。值得关注的是，这些变更集中于 WebUI 刷新与 Agent 会话管理的稳定性改进，同时伴随两个重要的功能预研（Linear Agent 集成、Agent TUI 统一配置界面）。项目尚未发布新版本，建议用户关注主线分支的累积变化。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭了 5 条 PR，均已在主分支落地：

| PR | 标题 | 类型 | 要点 |
|---|---|---|---|
| [#5445](https://github.com/HKUDS/nanobot/pull/5445) | fix(docker)：persist OAuth client data | 修复 | Docker 容器内 OAuth 凭据持久化问题，将 XDG 数据目录定向到挂载实例目录，并确保非 root 用户可写入 |
| [#5491](https://github.com/HKUDS/nanobot/pull/5491) | fix(webui)：keep answer text outside reasoning shell | 修复 | 修复推理/工具活动与最终答案合并时的文本丢失问题，保持 fork 边界消息计数一致 |
| [#5492](https://github.com/HKUDS/nanobot/pull/5492) | feat(cli)：expose nanobot process identities | 功能 | CLI 进程按角色命名（nanobot-agent/webui/gateway），便于用户通过进程管理工具识别 |
| [#5475](https://github.com/HKUDS/nanobot/pull/5475) | refactor：remove remaining dead code | 重构 | 移除零消费辅助函数、未用 websocket-client 依赖，收窄导出范围，**不破坏公共 API** |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(runtime)：add user-controlled turn recovery | 功能 | 为 WebSocket 中断的回合添加用户可控恢复机制，支持"继续/放弃"，不自动恢复，避免额外模型调用 |

**亮点**：[#5420](https://github.com/HKUDS/nanobot/pull/5420) 为用户提供了**中断回合的自主恢复能力**，这是一项直接提升可用性的功能。配合 [#5475](https://github.com/HKUDS/nanobot/pull/5475) 的代码清理，项目在功能增强与代码质量两个维度均有推进。

## 4. 社区热点

本周讨论热度最高的条目：

- **[Issue #5444](https://github.com/HKUDS/nanobot/issues/5444)（2 条评论）**：用户报告 Docker 环境下通过 OAuth 登录 OpenAI 失败，回调 URL 被重定向到 `localhost:1455`。该问题已于 [#5445](https://github.com/HKUDS/nanobot/pull/5445) 中修复（OAuth 数据持久化），但需确认 `localhost:1455` 的重定向是否完整解决。核心诉求：**容器化部署开箱即用的可用性**。

- **[PR #5480](https://github.com/HKUDS/nanobot/pull/5480)（pending）**：`refactor(providers)` 将 Provider 的用法字典替换为不可变类型化 `LLMUsage` 契约，统一 OpenAI Chat、Responses、Anthropic、Bedrock 各 wire 边界的 token/cache 语义。这是一个**架构层面的一致化改造**，值得社区关注其评审进展。

- **[PR #5500](https://github.com/HKUDS/nanobot/pull/5500)（pending，根因分析深）**：Codex Provider 因每次请求都重建 TLS 上下文导致阻塞 10 秒以上。作者通过 py-spy 捕获根因后，建议按实例缓存已验证/回退的 TLS 上下文，并附带并发回归测试。这是**典型的性能问题深挖**，对依赖 Codex 的开发者影响明显。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 高 | [#5444](https://github.com/HKUDS/nanobot/issues/5444) | Docker 下 OpenAI OAuth 登录失败（日志显示换码后卡住） | **已修复**（[#5445](https://github.com/HKUDS/nanobot/pull/5445) 已合并，等待用户验证） |
| 中 | [PR #5496](https://github.com/HKUDS/nanobot/pull/5496) | `AgentRunner` 无工具请求绕过超时保护 → 单次请求可能占满整个会话超时 | **已有 fix PR**（待合并） |
| 中 | [PR #5500](https://github.com/HKUDS/nanobot/pull/5500) | Codex Provider 每次请求重建 TLS 上下文，高并发下严重阻塞 | **已有 fix PR**（待合并） |
| 中 | [PR #5499](https://github.com/HKUDS/nanobot/pull/5499) | 在空文件夹中打开 TUI 会同步创建空会话 | **已有 fix PR**（待合并） |
| 中 | [PR #5430](https://github.com/HKUDS/nanobot/pull/5430) | 长时间运行的 `AgentLoop` 为每个完成的任务组保留空集，内存逐渐膨胀 | **已有 fix PR**（待合并，带 conflict） |
| 低 | [PR #5467](https://github.com/HKUDS/nanobot/pull/5467) | TUI resume 命令未保留 `--config`/`--workspace` 启动参数 | **已有 fix PR**（待合并，带 conflict） |

## 6. 功能请求与路线图信号

**[Issue #5493](https://github.com/HKUDS/nanobot/issues/5493)**（新增）：在频道消息中支持 HTML/`.md` 文件预览，建议采用 `iframe + srcdoc` 方案（自带沙箱隔离）。这属于 Channel 组件的功能增强，目前无可对应的 open PR，但结合近期 WebUI 的频繁更新，**有一定概率被纳入后续版本**。

从今日 PR 流中可提取强烈的路线图信号：

- **统一配置编辑器**（[#5497](https://github.com/HKUDS/nanobot/pull/5497)、[#5498](https://github.com/HKUDS/nanobot/pull/5498)）：构建一个传输无关的完整配置编辑器契约，支持密钥脱敏、显式替换/清除，并同步到 Agent TUI 的 `/config` 面板。**说明项目正在统一 WebUI 与 TUI 的配置体验**。
- **原生 Linear 集成**（[#5495](https://github.com/HKUDS/nanobot/pull/5495)）：新增 Linear Agent 官方频道，支持 OAuth + PKCE、每工作区轮换 token、SQLite 去重队列接收 `AgentSessionEvent` webhook。**这是继 WeChat/Feishu/Telegram 之后，向项目协作工具扩展的信号**。
- **MCP 生态深化**：三条并行 PR（[#5386](https://github.com/HKUDS/nanobot/pull/5386)、[#5388](https://github.com/HKUDS/nanobot/pull/5388)）分别处理 MCP Apps 结果元数据保留工具可见性、以及模型可见 schema 的字节预算控制。**方向是控制 MCP 对模型上下文的侵占**。
- **Matrix 协议完善**（[#5385](https://github.com/HKUDS/nanobot/pull/5385)）：完成 Element SAS 验证请求全流程，适配现代客户端。
- **进程可管理性**（[#5492](https://github.com/HKUDS/nanobot/pull/5492)，已合并）：为运维场景提供明确的进程命名。

## 7. 用户反馈摘要

- **Docker 部署体验**（[#5444](https://github.com/HKUDS/nanobot/issues/5444)）：用户使用 Docker 部署时遇到 OAuth 登录失败，报错显示回调 URL `localhost:1455/auth/callback` 被拒绝。说明该同学期望容器场景下 OAuth 流程开箱即用，对配置要求敏感。对应修复（[#5445](https://github.com/HKUDS/nanobot/pull/5445)）已合并，但需用户实测验证。

- **文档预览需求**（[#5493](https://github.com/HKUDS/nanobot/issues/5493)）：用户提出希望查看历史消息中的 HTML/`.md` 文件。提案明确、方案具体（`iframe + srcdoc`），符合安全实践。目前无直接响应，建议维护者回应采纳意愿。

## 8. 待处理积压

**值得注意的长期未合并 PR**（2 周以上且无显著进展）：

- **[PR #5152](https://github.com/HKUDS/nanobot/pull/5152)**（2026-07-28 创建，未更新）：`fix(subagent)` 标记部分完成结果。该 PR 尝试为 subagent 结果附加 `subagent_remaining_count` 元数据，防止模型过早下结论。**至今已近 1 个月**，且标记为 `regression`，建议维护者评估合并优先级。

**需冲突解决的 PR**：

- **[PR #5430](https://github.com/HKUDS/nanobot/pull/5430)**（`conflict`）：释放已完成任务组——功能性修复，但出现合并冲突，需协调解决。
- **[PR #5467](https://github.com/HKUDS/nanobot/pull/5467)**（`conflict`）：TUI resume 保留启动参数——回合并冲突。两条冲突 PR 涉及 `agent` 与 `tui` 模块的边界，建议协调处理。

**整体判断**：项目健康度良好。Active 的 PR（14 条）明显多于紧急修复需求，Issues 积压很少（仅 1 条新开）。核心维护者的重构力度大，但冲突管理的积压（2 条）可能成为短期交接点。Docker 部署修复（[#5445](https://github.com/HKUDS/nanobot/pull/5445)）已落地，建议集中验证并发布补丁版本，以回应社区反馈。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，我是你的 AI 智能体与个人 AI 助手领域开源项目分析师。根据 Hermes Agent 在 2026-08-24 的 GitHub 数据，我生成了以下项目动态日报。

---

### Hermes Agent 项目动态日报 (2026-08-24)

#### 1. 今日速览

Hermes Agent 项目今日活跃度极高，在 24 小时内产生了 100 条 Issue/PR 更新，显示出强劲的开发与维护势头。虽然今日无新版本发布，但项目核心聚焦于**稳定性修复**，特别是针对 Desktop 客户端的会话管理（Session State）、消息投递可靠性和远程连接稳定性等问题进行了集中攻坚。社区反馈强烈，多个高影响力 Bug（如编辑消息失败、连接断开）被关闭或已有对应修复 PR，表明维护团队响应迅速，项目整体健康度良好，正处在密集的打磨和加固阶段。

#### 2. 版本发布

今日无新版本发布。

#### 3. 项目进展

今日合并了大量关键修复，主要围绕提升 Desktop 客户端的稳定性和安全性：

- **修复 Desktop 连接回退问题**：合并了 `#92274`，解决了远程网关因无认证存活检查与注册表漂移而导致的连接中断与回退问题。
- **新增桌面端辅助模型选择器**：合并了 `#93390`，用户现在可以在 Desktop、Dashboard 和 CLI 的所有辅助模型选择器中为 `/review` 子代理选择模型，无需手动编辑配置文件。
- **强化 OAuth 登录与 Bot 模式安全**：合并了 `#92194`（OAuth 登录）和 `#91339`（通过查询文件发送 @提及交接，防止 shell 注入），提升了账户安全性与 Bot 间通信安全性。
- **修复多项体验问题**：包括 `#93279`（修复重启后 "All-profiles" 偏好丢失）、`#93400`（远程附件按连接路由）等，优化了细节体验。

这些合并不仅修复了已知问题，还通过新功能（如 `#93390`）提升了产品的可配置性。此外，针对 Gateway 生命周期守卫的多个绕过漏洞（`#93411`, `#88336`, `#68289`）的修复也已被合并，显著增强了核心进程的安全性。

#### 4. 社区热点

- **[Bug] Skills index is stale or degraded** ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616))：这是今日评论最多的 Issue，由自动化机器人报告，已有 84 条评论。核心问题是 `skills-index.json` 文件过期（29.8小时，限制26小时），导致技能中心状态降级。虽然是一个自动化运维问题，但因其影响了核心功能（Skills Hub）的更新，引发了大量关于基础设施稳定性和监控有效性的讨论。
- **[Bug] Desktop — Edit earlier message fails with "Edit failed" / session not found** ([#75756](https://github.com/NousResearch/hermes-agent/issues/75756))：这是一个 P2 级别的严重可用性问题，用户在编辑较早消息时遭遇失败，且此问题被认为是 P1 紧急。该 Issue 今日被关闭，与另一个相同问题的 Issue `#79229` 一起，表明这是一个影响核心编辑工作流的痛点。虽然没有直接关联的修复 PR，但其关闭可能意味着已通过其他提交修复。
- **[Bug] hermes update - destroys hermes** ([#83529](https://github.com/NousResearch/hermes-agent/issues/83529))：更新命令导致软件被破坏，这是极其负面的用户体验，直接影响了用户对软件升级的信任。该问题仍有 9 条评论，说明社区关注度很高，用户期待一个稳妥的更新机制。

#### 5. Bug 与稳定性

今日报告的 Bug 集中在桌面端的会话/连接管理上，按严重程度排列如下：

- **[严重]** [Bug]: Desktop — Edit earlier message fails with "Edit failed" / session not found (rewind lacks resume+retry) ([#75756](https://github.com/NousResearch/hermes-agent/issues/75756)) - **已关闭**。核心编辑功能不可用，虽已关闭，但未找到对应修复 PR，需关注。类似问题见 [#79229](https://github.com/NousResearch/hermes-agent/issues/79229)（已关闭）。
- **[严重]** [Bug]: hermes update - destroys hermes ([#83529](https://github.com/NousResearch/hermes-agent/issues/83529)) - **待处理**。更新命令导致安装损坏，属于高危问题。
- **[高]** Parallel tool batches of >=4 calls lose ALL results ([#93251](https://github.com/NousResearch/hermes-agent/issues/93251)) - **已关闭**。当并行工具调用超过4个时，所有结果丢失，严重影响复杂任务。已关闭，但无直接关联 PR。
- **[高]** [Bug]: Fedora 44, installation failed ([#93063](https://github.com/NousResearch/hermes-agent/issues/93063)) - **待处理**。新系统安装失败，影响用户获取产品。
- **[中]** [Bug]: macOS keychain prompt after update ([#91115](https://github.com/NousResearch/hermes-agent/issues/91115)) - **待处理**。每次更新后都弹出钥匙串提示，影响体验。
- **[中]** [Bug]: tool results still become unavailable when SDK id differs from call_id after assistant normalization ([#93404](https://github.com/NousResearch/hermes-agent/issues/93404)) - **待处理**。工具结果获取失败的根本原因之一，已有复现，等待实现。

**稳定性修复趋势**：今日有多个相关 PR（如 [#93405](https://github.com/NousResearch/hermes-agent/pull/93405)、[#93408](https://github.com/NousResearch/hermes-agent/pull/93408)、[#93410](https://github.com/NousResearch/hermes-agent/pull/93410)）针对会话重新连接、网关路由和空探测问题，表明维护团队正致力于系统性解决这些被反复报告的连接稳定性问题。

#### 6. 功能请求与路线图信号

- **Bot Mode 可靠性改进计划** ([#93091](https://github.com/NousResearch/hermes-agent/issues/93091))：这是一个包含多项建议的综合性 feature request，涉及类型化失败原因、消息 TTL、注意力徽章、群组路由和重试策略。结合近期合并的 `#91339`（Bot 模式安全）和 `#90006`（连接绑定操作），**Bot 模式的可靠性和安全性是当前的重点发展领域**。
- **新增 `/review` 命令** ([#4251](https://github.com/NousResearch/hermes-agent/issues/4251))：用户长期要求的内置 AI 代码审查命令，PR `#93390` 已合并，该功能**很可能在下一版本中与用户见面**。
- **通过运行中会话路由 CLI 提示** ([#92981](https://github.com/NousResearch/hermes-agent/pull/92981))：一个新的 PR，旨在通过 `hermes chat-z` 命令将 CLI 提示直接路由到正在运行的 Desktop 渲染器，这是一种创新的交互方式，未来版本可能会集成。

#### 7. 用户反馈摘要

- **安装与更新体验是主要痛点**：`#83529`（更新破坏安装）和 `#93063`（Fedora 安装失败）等 Issue 表明，用户在新环境部署和版本升级过程中遇到较大阻碍，这可能是潜在用户流失的关键点。
- **核心编辑流程不可靠影响信任**：多个 Issue（如 `#75756`、`#79229`）抱怨编辑历史消息失败，这破坏了核心的会话管理体验，虽然有技术上的复杂性（会话重放），但用户期望值很高。
- **网络环境适应性差**：反馈集中在 WebSocket 连接相关的假死、掉线和数据丢失（如 `#69940`、`#89083`、`#79635`），尤其是在睡眠唤醒、不同网络（Tailscale）等场景下，用户对网络变化的容错能力有较高期待。
- **积极反馈**：PR `#93390` 的合并满足了用户对工具可配置性的需求，这是一个积极的信号。

#### 8. 待处理积压

- **[高危]** [Bug]: hermes update - destroys hermes ([#83529](https://github.com/NousResearch/hermes-agent/issues/83529))：8月10日创建，至今未标记为已解决，长期未响应或修复，对用户升级意愿打击巨大，**维护者需优先处理**。
- **[高危]** [Bug]: Fedora 44, installation failed ([#93063](https://github.com/NousResearch/hermes-agent/issues/93063))：新系统支持问题，影响用户获取产品，需尽快适配。
- **[中危]** [Bug]: macOS keychain prompt after update ([#91115](https://github.com/NousResearch/hermes-agent/issues/91115))：频繁打扰用户，影响体验，且升级后出现，需要从更新机制上解决。
- **[中危]** [Bug]: tool results still become unavailable... ([#93404](https://github.com/NousResearch/hermes-agent/issues/93404))：虽然是新开的 Issue，但明确标记为 "READY FOR IMPLEMENTATION"，且属于根本性问题，应尽快规划修复。
- **[中危]** [Bug]: Skills index is stale or degraded ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616))：虽然由机器人报告，但属于基础设施稳定性问题，长期不解决会削弱用户对 Skills 功能的信任。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**: 2026-08-24 | **数据窗口**: 过去24小时 | **数据来源**: GitHub (sipeed/picoclaw)


## 1. 今日速览

PicoClaw 在过去24小时保持了较高的活跃度：共处理 2 条 Issues 和 7 条 Pull Requests，其中 2 个 Issue 和 5 个 PR 已关闭（含 2 个被标记为 stale），2 个 PR 处于待合并状态。所有关闭项均为自动化过期清理或已完成合并，无新 Bug 报告。值得关注的是，大量安全加固类 PR（SSRF 防护）已批量合入——过去两周提交的 weixin/wecom/channels 三通道媒体下载 SSRF 修复如今全部关闭，标志着跨通道安全问题治理告一段落。此外，新提交的 **Build Remote Agent 手机配对 PR (#3344)** 引入了全新的 `gbr/1` 协议支持，是近期少有的功能性扩展。整体来看，项目处于"防御性收尾 + 新功能探索"的过渡阶段，健康度良好。


## 2. 版本发布

过去24小时内无新版本发布。


## 3. 项目进展

### 已合并/关闭的 PR（5 个）

集中在两个主题：

**① 安全加固收尾（3 个）— 由 SashaMIT 提交**

| PR | 内容 | 状态 |
|---|---|---|
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | 在所有入站媒体下载通道（QQ/Telegram/Discord/LINE/Slack）启用 `BlockPrivateTargets` SSRF 防护 | ✅ 已关闭 |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | 企业微信（WeCom）媒体下载改用 `CreateSafeHTTPClient` + `ValidateSafeHTTPURL` | ✅ 已关闭 |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | 微信（Weixin）媒体下载同样改用安全 HTTP 客户端 | ✅ 已关闭 |

这三项 PR 是同一 SSRF（服务端请求伪造）加固系列的组成部分，与 #3322 互相关联（PR 内标注为 sibling）。**至此，所有主流 IM 通道的媒体下载路径均已完成 SSRF 防护。**

**② 核心修复与依赖更新（2 个）— 由 grrowl 提交**

- **[#3320](https://github.com/sipeed/picoclaw/pull/3320)（已关闭）**: 升级 `go.mau.fi/whatsmeow` 依赖，修复 WhatsApp 通道因客户端版本过期被服务器以 `Client outdated (405)` 拒绝连接的问题。这是阻塞 WhatsApp 通道可用性的关键修复。
- **[#3321](https://github.com/sipeed/picoclaw/pull/3321)（已关闭）**: 将动态上下文块（当前时间、运行时信息等）从 system message 中移到对话历史之后，以保留 prefix caching 的有效性。此项优化可显著降低长对话的 LLM API 成本。

**综合评估**：本周期的合并内容以安全加固和稳定性修复为主。特别是 SSRF 防护的全面落地和 WhatsApp 通道的恢复，使得 PicoClaw 在"开箱即用的多通道安全"方面迈出了实质性一步。


## 4. 社区热点

今日最受关注的是新提交的 **[PR #3344: Add Build Remote Agent phone pairing (gbr/1)](https://github.com/sipeed/picoclaw/pull/3344)**（作者：LinespottingPrivate，创建于 2026-08-23）。

**亮点**：
- 引入 `gbr/1` 协议，允许手机通过配对码/QR 码远程旁观（spectate）桌面 Agent
- 基于 MIT 协议的 `gbr-agent` v0.6.0+，支持 QR + 8 位配对码
- 仅暴露 `http://127.0.0.1:8788` 或 stdio，安全边界清晰

**热点分析**：这是项目近期少有的新功能 PR。在同类 Agent 项目中，移动端远程查看/控制已成为标配能力。PicoClaw 此前缺少官方移动端配套，此 PR 恰好补上了这一缺口。虽然仍处于 OPEN 状态且缺乏评论讨论，但其"手机配对"的使用场景切中了真实需求，预计会成为后续社区讨论的焦点。


## 5. Bug 与稳定性

今日无新报告的 Bug。此前存在的两个问题已在今日确认解决：

| 问题 | 严重程度 | 状态 |
|---|---|---|
| **WhatsApp 通道连接后被断开（Client outdated 405）** — 由于 `whatsmeow` 依赖版本过旧，WhatsApp 服务器拒绝连接，通道不可用 | 高（通道完全不可用） | ✅ 已通过 [#3320](https://github.com/sipeed/picoclaw/pull/3320) 修复 |
| **LLM prefix caching 失效导致成本上升** — 动态上下文放在系统提示词中导致每个请求 token 变化，缓存全部失效 | 中（性能/成本问题） | ✅ 已通过 [#3321](https://github.com/sipeed/picoclaw/pull/3321) 修复 |

另外，此前安全审计发现的 **SSRF 漏洞**（多个 IM 通道的媒体下载可被重定向到内网地址）在今日已全部修复完毕（#3322/#3323/#3324），该问题属于中高风险安全漏洞，现已关闭。


## 6. 功能请求与路线图信号

今日有 2 个 stale 标记的 Feature Request 被关闭（均为过期自动清理，不代表被拒绝）：

- **[#3302: Support OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302)** — 希望为 MCP 服务器增加 OAuth 2.1 支持，作者标注为 "Nice-to-Have / Enhancement"
- **[#3325: Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325)** — 希望 Telegram 表格通过 Bot API 10.1 的原生表格 UI 渲染，而非退化为纯文本

**路线图判断**：
- **OAuth 2.1 支持**信号较强 — 距 #2546（同主题早期 Issue）已有时日，若 MCP 生态对 OAuth 2.1 的呼声持续，有望在后续版本纳入
- **Telegram 富文本表格**属体验优化，依赖 Telegram Bot API 10.1+ 的演进，预计短期内优先级不高

**新功能信号**：PR #3344（手机配对远程控制 Agent）若被合并，将标志着 PicoClaw 向"移动端友好"迈出第一步，值得关注其被合并后的社区反馈。


## 7. 用户反馈摘要

从今日关闭的 Issues/PRs 及相关评论中可提炼出以下用户诉求与痛点：

| 用户类型 | 反馈要点 | 来源 |
|---|---|---|
| **安全敏感型用户** | 关注 SSRF 风险，希望所有媒体下载路径都经过安全校验 | [#3322](https://github.com/sipeed/picoclaw/pull/3322) 等 |
| **WhatsApp 通道用户** | 因依赖过期导致 WhatsApp 通道不可用，影响实际使用 | [#3320](https://github.com/sipeed/picoclaw/pull/3320) |
| **Telegram 深度用户** | 不满于 Telegram 中表格退化为纯文本/代码块，期望原生渲染 | [#3325](https://github.com/sipeed/picoclaw/issues/3325) |
| **MCP 生态开发者** | 期望对 OAuth 2.1 提供支持（与 #2546 呼应） | [#3302](https://github.com/sipeed/picoclaw/issues/3302) |
| **移动端用户** | 期望通过手机远程查看/控制桌面 Agent（PR #3344 的提出本身即代表需求） | [#3344](https://github.com/sipeed/picoclaw/pull/3344) |

**总体感受**：用户对项目的安全性和多通道兼容性要求较高，同时对 Agent 的移动端支持有一定期待。


## 8. 待处理积压

### 长期未合并的 PR

| PR | 内容 | 创建日期 | 待处理天数 |
|---|---|---|---|
| **[#3222: refactor(deltachat)](https://github.com/sipeed/picoclaw/pull/3222)** | 重构 DeltaChat 通道实现，移除遗留代码、完善文档，净减约 200 行代码；更新依赖至官方 relay 列表，删除密码邮件配置（改用 jsonrpc 管理密钥） | 2026-07-03 | **52 天** ⚠️ |

该 PR 从创建至今已超过 7 周仍处于待合并状态，重构涉及 API 变更（如 `invite_link` → `join_invite_link`），建议维护者尽快安排 review。

### 待合并的新 PR

| PR | 内容 | 创建日期 |
|---|---|---|
| **[#3344](https://github.com/sipeed/picoclaw/pull/3344)** | Build Remote Agent 手机配对（gbr/1 协议） | 2026-08-23（昨日） |

### 风险提示

无新增高风险积压项。已关闭的 stale Issues/PRs 中，OAuth 2.1 与 Telegram 富表格功能请求如后续社区持续关注，建议重新打开评估。


> **报告总结**：PicoClaw 在安全加固方面已完成一轮系统性收尾，多个通道的 SSRF 防护全面落地；WhatsApp 通道恢复可用是今日最重要的修复。项目活跃度处于正常偏高水平，社区生态健康。建议维护者关注 #3222（DeltaChat 重构）的超期积压和 #3344（手机配对）的评审。

*报告生成时间: 2026-08-24 | 数据截止: 2026-08-23 23:59 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-24** | **数据窗口：过去24小时**


## 1. 今日速览

NanoClaw 今日活跃度处于**较高水平**：24小时内共产生 6 条 Issue 更新和 50 条 PR 更新，核心团队成员（amit-shafnir、gavrielc、DawoudIO 等）保持高频提交。值得关注的是，今日集中暴露了 **3 个高严重度 Bug**（#3456、#3455、#3498）及 1 个环境依赖崩溃问题（#3497），主要集中在消息投递去重、Discord 审批流、claim-stuck 看门狗和 macOS 兼容性四个方向。PR 侧活跃度则集中在 Chat SDK 4.32.0 升级、pnpm release-age 门控、per-channel typing 生命周期声明三个方向，且形成了 stack 链式 PR 协作模式。另有 v2.3.0 发布 PR 已备好（#3495），但因阻断问题尚未合并，社区贡献者（如 LinespottingPrivate 提交的 gbr/1 手机配对适配器）涌入明显，整体生态呈**良性活跃**态势，但稳定性问题需要优先处理。


## 2. 版本发布

**无新版本发布。**

> ⚠️ 值得注意的是，`[core-team] chore(release): v2.3.0` (#3495) 已作为发布 PR 提交，但同日有 PR #3496（versions: repin to hardened-2026-08-23）被关闭并描述为 "Stopgap while a release can't be cut"——暗示 v2.3.0 版本发布**可能被阻断**（据 #3496 描述，自 2026-08-21 起 hardened 安装即存在失败问题）。请关注下个发布窗口。


## 3. 项目进展

今日共合并/关闭 **20 条 PR**（占 PR 总量 40%），核心进展集中在三条线上：

| 方向 | PR | 说明 |
|------|-----|------|
| **Chat SDK 4.32.0 升级（闭环）** | #3466（closed）、#3465（open） | 将 Chat SDK 4.29.0 提升至 4.32.0 并 pin 所有频道 skill——主链已完成合入，双胞胎 registry PR 待合并 |
| **Typing 生命周期声明（第 1/2 轮）** | #3467（closed）、#3468（open） | 允许频道适配器声明 typing-indicator 生命周期——主干已合入，channels 双胞胎 PR 待合并 |
| **pnpm release-age 门控（第 1 轮）** | #3469（closed）、#3470/#3471（open） | minimumReleaseAge 从 pnpm: key 中提出——主干版本已合入，channels/providers 双胞胎待合并 |
| **版本硬化修复** | #3496（closed） | 将镜像 repin 到 hardened-2026-08-23，解决容器 label 比较失败导致的安装阻断 |
| **v2.3.0 发布 PR** | #3495（closed） | 版本号升至 2.3.0，包含破坏性变更迁移说明——通常 release PR 合入后即发布 |

**协作模式亮点**：amit-shafnir 采用 **stacked PR 链**（#3490 ← #3491 ← #3492）在 `main` 分支上管理跨三层的修改链，并在 `channels`/`providers` 分支上生成 "twin" PR——这种模式提高了大型改动的审查效率。

**新功能信号**：zvi-fried 提交了 Cursor Agent SDK provider 及对应 setup skill（#3355、#3356），若合入将新增一个重要 provider。


## 4. 社区热点

### 今日最引人注目的讨论

**① #3494: Build Remote Agent 手机配对适配器（新 PR，评论高）**
- 链接: https://github.com/nanocoai/nanoclaw/pull/3494
- 来自社区贡献者 LinespottingPrivate，提出 gbr/1 协议让手机可通过扫码/8位码配对来**旁观**桌面 Agent
- 诉求分析：用户渴望**移动端访问 Agent 输出**的能力——无需暴露端口、只需 `gbr-agent` 工具即装即用。这是继 #2301 的 polling mode 后第二次出现 "NAT/防火墙穿透" 主题，说明**远程访问**是社区强烈需求

**② #3456: Discord 审批按钮 `custom_id` 损坏（closed，高严重度）**
- 链接: https://github.com/nanocoai/nanoclaw/issues/3456
- 作者 DawoudIO 快速报告并自带初步根因分析，一天内即被打上 closed 标签（修复 PR 应已准备）
- 这是**企业协作场景**的高频功能，影响面大（approval/ask_question 卡片在 Discord 上不可用）

**③ #2404: 双通道投递重复消息（4 条评论，创建于 5 月但仍有热度）**
- 链接: https://github.com/nanocoai/nanoclaw/issues/2404
- 长期存在但未被关闭——同一消息经 MCP tool 和 `<message>` 块双路径输出导致重复
- 诉求分析：Agent 框架中**输出规约**需要更明确——一个 turn 内只能走一条输出路径


## 5. Bug 与稳定性

按严重程度排列（🔴=高/🔴⬜=中）：

### 🔴 高严重度（影响核心功能，建议优先处理）

| Issue | 描述 | 状态/修复情况 |
|-------|------|---------------|
| **#3456** | **Discord 审批按钮 `custom_id` 损坏**——按钮同时包含 `id` 和 `value` 参数，导致 Discord 侧 custom_id 冲突，每次点击都解析到错误选项，审批流不可用 | ✅ 已关闭，修复已完成 |
| **#3455** | **claim-stuck 看门狗误杀正常忙碌的 turn**——从 `markProcessing()` 到首个 SDK 事件之间 heartbeat 不被更新，60 秒后看门狗将繁忙会话标记为卡死并永久封锁 | ❌ 无 fix PR，**需紧急干预** |
| **#3498** | **macOS 更新控制器静默退出**——`os.tmpdir()` 返回 `/var/folders/...`（symlink），`path.resolve()` 解析后与 `/private/var/...` 不匹配，导致更新指令变 no-op 且 `hasSafeStatePaths` 失败 | ❌ 无 fix PR |

### 🔴⬜ 中严重度

| Issue | 描述 | 状态/修复情况 |
|-------|------|---------------|
| **#3457** | **`insertMessage()` UNIQUE 约束崩溃**——重试投递同一 message id 时，无 `ON CONFLICT` 处理，SQLite 直接抛 UNIQUE 约束异常，导致 "Message delivery failed, will retry" 循环 | ❌ 无 fix PR（可能随 #2404 一并修复） |
| **#3497** | **better-sqlite3@13.0.3 在 macOS 上 Node <22.14.0 段错误**——声明下限为 `>=22`，但旧版 Node 22 通过检查后在 `new Database()` 处崩溃，且 `pnpm test` 无法完成 | ❌ 无 fix PR（提升 Node 下限即可） |

### **修复建议优先级**：#3455（会永久阻塞会话）→ #3498（更新流程静默失效）→ #3457（中严重度）


## 6. 功能请求与路线图信号

### 新功能需求（来自 Issues/PR）

| 功能 | 来源 | 状态 | 可能的版本 |
|------|------|------|-----------|
| **Cursor Agent SDK 支持** | PR #3355（setup skill）、#3356（provider SDK） | Open | v2.4.0 候选 |
| **Build Remote Agent 手机配对（gbr/1）** | PR #3494 | Open | 待评审，可能纳入 v2.4.0 |
| **per-channel typing 生命周期声明** | PR #3467（closed）、#3491（open） | 主干已合入 | v2.3.0（已入 release notes） |
| **Chat SDK 4.32.0 统一升级** | PR #3466（closed）、#3490（open） | 主干已合入 | v2.3.0 |
| **GitHub integration polling mode（免端口）** | PR #2301 | Open 长期 | 待定 |

### 信号与判断
1. **移动端/远程访问** 是当前最强的路线图信号——继 #2301 polling mode 后，#3494 是第二次指向 NAT/防火墙穿透需求。建议维护者评估将两者整合为官方远程访问方案。
2. **Chat SDK 升级 + typing 声明** 已完成合入，确定性进入 v2.3.0，将改善多频道一致性。
3. **Codex provider 结构化认证**（#3489）已提交核心团队评审，预计在 v2.3.0 或 v2.4.0。


## 7. 用户反馈摘要

从今日评论与 Issue 中提炼的真实反馈：

| 反馈来源 | 用户原意 | 深层诉求 |
|----------|---------|----------|
| **#3456（DawoudIO）** | "Discord 审批卡片的每个点击都解析到错误选项，完全不可用" | 企业级审批流程是核心使用场景，Discord 通道的交互可靠性直接决定团队是否采用 NanoClaw 作为协作入口 |
| **#3455（DawoudIO）** | "看门狗把忙碌判定为卡死，永久阻塞回复且无自愈路径" | 对核心消息循环的**鲁棒性**要求：不仅不能卡死，更不能误杀正常运行的会话 |
| **#3498（brentkearney）** | "macOS 上调用更新指令直接退出 0，什么也没发生" | **macOS 是一等公民**——在 Apple Silicon 时代，macOS 上运行 Agent 是主流场景，任何路径解析差异都不可接受 |
| **#3497（brentkearney）** | "Node 22 旧版通过了所有检查却在打开数据库时段错误" | 对**安装引导**的检查项完备性提出要求：版本下限声明必须实际验证，不能只过语法检查 |
| **#2404（作者长期未回复）** | "同一消息被发送两次，一次来自 MCP tool，一次来自 `<message>` 块" | Agent 框架的输出路径需要**单一事实来源**——当前双路径设计造成用户可见的重复消息，影响用户体验的专业感 |


## 8. 待处理积压

以下 Issue/PR 长期未获关注或处理时间过长，建议维护者优先跟进：

| 编号 | 类型 | 描述 | 创建时间 | 搁置时长 |
|------|------|------|----------|----------|
| **#2301** | PR | feat(add-github): polling mode + git access + OneCLI secret merge | 2026-05-06 | **110 天** |
| **#2404** | Issue | Double delivery: MCP tool + `<message>` 块重复投递 | 2026-05-10 | **106 天** |
| **#2537** | PR | ci: 添加 pre-commit hooks（prettier, eslint, typecheck, vitest） | 2026-05-18 | **98 天** |
| **#3142** | PR | fix(signal): 通过 mounted inbox 转发附件而非死路径 | 2026-07-27 | **28 天** |
| **#3355 / #3356** | PR | Cursor Agent SDK 支持（setup skill + provider payload） | 2026-08-19 | 5 天（等待核心团队评审） |

### ⚠️ 特别提醒

1. **#2301（polling mode）** 是社区明确的远程访问需求，搁置 110 天未动，建议至少给出 route 计划。
2. **#2404（重复投递）** 与今日新报的 #3457（UNIQUE 约束崩溃）同属消息投递一致性问题——建议合并排查，一并修复。
3. **#2537（pre-commit hooks）** 对贡献者体验有直接提升，长时间未合并可能压抑社区贡献意愿。


## 项目健康度评估

| 维度 | 评分（⭐1-5） | 说明 |
|------|---------------|------|
| **活跃度** | ⭐⭐⭐⭐⭐ | 50 PR + 6 Issue 更新/日，核心团队与社区并行贡献 |
| **协作效率** | ⭐⭐⭐⭐ | stacked PR 链 + twin PR 模式高效；但双胞胎 PR 机制需关注合并顺序风险 |
| **稳定性** | ⭐⭐ | 新增 3 个高严重度 Bug（#3455、#3456、#3498），叠加遗留 #2404，稳定性承压 |
| **社区参与** | ⭐⭐⭐⭐ | 社区贡献者（LinespottingPrivate、brentkearney）持续提交高质量 issue/PR |
| **发布节奏** | ⭐⭐⭐ | v2.3.0 已备好但被阻断（#3496 只做了 stopgap），需尽快推进发布 |

**总体判断**：项目处于**快速迭代期核心功能较稳但边界场景（macOS、Discord、重试路径）承压**的状态。强烈的路线图信号是 "远程/宽松网络访问"，社区贡献生态良好——但需重视 4 个高严重度稳定性问题（#3455、#3498、#3457、#3497）的修复节奏，建议下一个 24 小时内至少为 #3455 给出修复计划。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-24

## 今日速览

项目过去24小时整体活跃度较低：仅有1条新Issue（#991）提交，无新PR、无版本发布。该Issue报告了一个**潜在的严重稳定性问题**——MCP stdio调用在Proxmox启动器锁（launcher lock）占用下可能无限期挂起，且此问题尚无可用的修复PR。虽然当日活动量不大，但该问题涉及核心功能路径（MCP桥接），可能影响生产环境可靠性，建议维护者优先关注。项目整体处于常规维护节奏，社区反馈渠道畅通，但缺少新功能推进的动态信号。

---

## 版本发布

无新版本发布。上一版本为2026.8.22。

---

## 项目进展

过去24小时内没有合并或关闭的PR。项目功能推进方面无显著新动态，整体处于维护稳定期。


## 社区热点

**Issue #991 — [OPEN] MCP stdio calls can hang indefinitely behind the Proxmox launcher lock**
- 作者: locke1979 | 创建: 2026-08-23 | 评论: 2 | 👍: 0
- 链接: https://github.com/nullclaw/nullclaw/issues/991

该Issue为今日唯一动态，也是社区关注焦点。用户报告了在Proxmox环境（CT 151）下，当配置的stdio MCP服务器已被长驻网关（gateway）进程占用时，独立的`nullclaw agent`调用会无限期挂起。**核心痛点在于进程间锁竞争导致的死锁问题**——具体的复现步骤和讨论线索可参考Issue详情。虽然评论数不多，但该问题直指MCP桥接的并发安全，可能影响多进程协作场景的稳定性。


## Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 关键信息 |
|---------|---------|------|---------|
| **高** | MCP stdio调用在Proxmox launcher lock被占用时无限挂起 (#991) | 已报告，无修复PR | 环境: Proxmox CT 151 + NullClaw 2026.8.22; 现象: `nullclaw agent` 与 `nullclaw-gateway.service` 的锁竞争导致hang; 影响: 依赖stdio MCP的独立调用将不可用 |

**分析**：该问题属于典型的锁竞争死锁场景，可能有两方面风险——一是进程启动超时机制缺失，二是锁获取未设置超时上限。建议维护者评估在锁获取路径中添加超时与重试机制，并考虑将错误信息更加明确地反馈给用户。


## 功能请求与路线图信号

今日无新功能请求或路线图讨论。现有Issue #991虽然主要是Bug报告，但其深层次的痛点（MCP进程间资源竞争、锁管理策略）可能隐含着对**进程隔离与资源治理能力**的增强需求，值得在后续版本中关注。结合项目近期无新PR/Release的情况，当前版本功能稳定性是社区的主要诉求。


## 用户反馈摘要

来自Issue #991的反馈显示：

- **使用场景**：用户处于Proxmox虚拟化环境中，通过只读MCP桥接（148个工具）使用NullClaw，属于较重的生产环境部署。
- **核心痛点**：当长驻服务（gateway）已占用MCP服务器时，独立CLI调用将无响应——这影响了用户在自动化脚本中调用`agent`命令的可预期性。
- **潜在期望**：用户希望此类锁冲突能被明确提示或以非阻塞方式处理，而不是无限等待。

整体来看，用户对环境的复杂度较高（Proxmox + MCP桥接 + 多进程），对工具的健壮性有较高要求，遇到问题时愿意通过可复现的Issue进行反馈，社区参与积极。


## 待处理积压

当前最突出的待处理事项为 **Issue #991**（MCP stdio调用挂起），自创建一天内尚无维护者响应，也无关联PR。考虑到该问题影响核心功能的稳定性，且大概率有可复现路径，建议维护者尽快：

  - 确认问题触发范围（是否为所有平台通用问题，还是Proxmox环境特有）；
  - 评估锁机制是否需要引入超时或取消机制；
  - 在后续版本中考虑将这一修复纳入关键补丁。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-24

*数据来源：github.com/nearai/ironclaw | 统计窗口：2026-08-23 ~ 2026-08-24*

---

## 1. 今日速览

IronClaw 项目今日保持高活跃度，24 小时内产生 12 条新 Issue 和 23 条 PR 更新，但均非重大版本节点（无新 Release）。项目当前开发焦点清晰：**持续型沙箱架构（persistent sandbox）** 与 **CI/CD 管线加固** 双线并进——前者由 #7732 史诗 Issue 统领，后者则有 4 条并行 PR（T1–T4）同时推进。值得关注的是，用户反馈渠道（#x-ai-product-feedback）今日贡献了 7 条 Issue，集中在 **Slack/Gmail/Notion 等第三方集成的配置与连接体验问题**——这是集成配置链路（尤其 OAuth 弹窗、权限提示）稳定性不足的明确信号。CI 管线的 nextest 迁移正处于验证阶段（含两条标记 "THROWAWAY" 的验证 PR），说明团队在技术债清理上采取了审慎、可验证的推进策略。总体项目健康度良好，但集成层用户体验问题需排期修复。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 3.1 今日合并/关闭的 PR（共 5 条）

| PR | 标题 | 规模/风险 | 状态 | 关联 Issue |
|---|---|---|---|---|
| [#7730](https://github.com/nearai/ironclaw/pull/7730) | chore(deps): bump everything-else group (6 updates) | M / low | ✅ 已合并 | — |
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | chore(deps): bump actions group (4 updates) | M / medium | ✅ 已合并 | — |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | chore(deps): bump wasm group (2 updates) | M / low | ✅ 已合并 | — |
| 其余 2 条 | 依赖更新/例行维护 | — | ✅ 已关闭 | — |

> 今日合并的 PR 均为 Dependabot 自动依赖更新，无功能性代码合入。主要进展集中在**待合并队列**中（见下）。

### 3.2 关键待合并 PR（项目实质推进）

| PR | 标题 | 核心贡献 | 状态 / 阻塞点 |
|---|---|---|---|
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | feat(sandbox): manifest-declared direct-exec credential bindings | 完成 **one-persistent-sandbox-per-user** 运行时，含托管出口与调用归属；通过代理为 `gh` CLI 注入一次性凭证（GH_TOKEN），**沙箱内只见占位符，真实密钥仅由代理替换** | OPEN（XL/低风险），关联 #7825 |
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | feat(suggestions): generate over user's no-approval, read-only tools | 建议生成改为基于**用户真实已连接的、只读的工具面**，而非硬编码的 4 项能力白名单——卡片推荐不再"盲猜" | OPEN（M/低风险），关闭 #7812 |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | ci: nextest test pipeline, full-failure signal, PR unthrottle | CI 测试从逐二进制串行 `cargo test` 迁移至 `cargo nextest`；每次失败输出**全部失败测试名**，不再只露单个失败 job；PR 不再被节流 | OPEN（XL/中风险），关闭 #7799 |
| [#7821](https://github.com/nearai/ironclaw/pull/7821) | ci: single setup-rust composite (T1) | 统一 Rust toolchain/linker/build-profile 的所有权，消除"本地绿、CI 红"的漂移类问题 | OPEN（XL/中风险），关闭 #7798 |

**进展评估**：功能性进展集中在两条主线——**沙箱凭证托管的完整闭环**（#7810，配合 #7825 的后续演进）与**CI 管线的重建**（#7817/#7821/#7819/#7809 四条通道并行）。沙箱专项的推进意味着 #7732 史诗目标（持久化用户沙箱）正在从设计走向落地。

---

## 4. 社区热点

### 4.1 最热 Issue：#7732 — Epic：持久化用户沙箱

- **链接**：https://github.com/nearai/ironclaw/issues/7732
- **标签**：`epic` / `v1.4.0`
- **讨论量**：9 条评论（24h 内有更新）
- **核心诉求**：当前 Reborn 已支持通过 Docker 将 `builtin.shell` 路由至用户沙箱，但实现方式为**每个命令创建/销毁容器**——不是要交付的持久化"用户电脑"。`/workspace` 需按 `(tenant, user)` 持久化。
- **关联**：#7810（PR）直接服务于此 epic——该 PR 补齐了**按用户管理的出口代理（iron-proxy）+ 调用归属 + 凭证托管**，是"持久化用户沙箱"落地的最后几块拼图之一。

### 4.2 技术债清理：CI nextest 迁移验证引发关注

- **PR #7839 / #7838**（`THROWAWAY` 标记，均为 XL/中风险）：专为验证 nextest 两种执行路径（bulk / exact-target）而创建，明确标注 **"Do not merge, do not review"**，跑完 CI 即删除。
- 这一做法显示团队在 CI 专项上采取了**数据驱动的验证策略**——不盲合并大型重构，先用 throwaway 分支收集实证。

### 4.3 设计系统第三阶段启动

- **PR #7831**（rdisandro，XL/中风险）：Design System Phase 3a 基础——新增 `webui-v2-chromatic` 非阻塞视觉回归通道 + 补齐缺失的 design-token 轴。WebUI 定制化持续推进中。

---

## 5. Bug 与稳定性

今日无新 Bug 被标记，但以下新旧问题值得关注：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#7842](https://github.com/nearai/ironclaw/issues/7842) | 请求执行中出现通用 `invalid result` 错误（用户报告） | 无 PR |
| 🔴 高 | [#7841](https://github.com/nearai/ironclaw/issues/7841) | Telegram 配置卡死在 "admin must configure" | 无 PR |
| 🟠 中 | [#7830](https://github.com/nearai/ironclaw/issues/7830) | Notion 扩展在 IronClaw 中无法安装 | 无 PR |
| 🟠 中 | [#7829](https://github.com/nearai/ironclaw/issues/7829) | Gmail 配置时 OAuth 弹窗约 1 秒即消失，导致认证失败 | 无 PR |
| 🟠 中 | [#7828](https://github.com/nearai/ironclaw/issues/7828) | NEAR Foundation 账户无法设置 Slack | 无 PR |
| 🟡 低 | [#7840](https://github.com/nearai/ironclaw/issues/7840) | Slack 连接引导缺失，用户不知道该去哪接 | 无 PR |

**信号解读**：`#7841`“admin must configure"提示出现在**终端用户的 Telegram 配置流程**中，意味着面向用户的配置项泄漏了面向管理员的概念——这是提示文案/UX 设计层面的缺陷，应快速修复。#7829 的 OAuth 弹窗瞬间消失则指出了 WebUI 中第三方认证流程的基本可靠性问题。

---

## 6. 功能请求与路线图信号

| 信号 | Issue / PR | 分析 |
|---|---|---|
| **持久化用户沙箱**（服务端拉满） | [#7732](https://github.com/nearai/ironclaw/issues/7732) `epic,v1.4.0` | 明确列入 v1.4.0；#7810 已部分落地，剩余工作：`defer loop executors` 等 |
| **沙箱出口认证标准化** | [#7825](https://github.com/nearai/ironclaw/issues/7825) | 要求以 iron-proxy + 主机凭证代理取代 GitHub 专属 carve-out——即所有 CLI 工具经由统一代理机制注入凭证，而非仅 `gh` 特判 |
| **工具广告按真实可用性过滤** | [#7836](https://github.com/nearai/ironclaw/issues/7836) | 模型可见的工具列表（schema/nspreview/tool_search）应只展示当前部署中**实际可执行**的工具——已用 PinchBench 定量证实问题存在 |
| **建议生成接入用户真实数据** | [#7812](https://github.com/nearai/ironclaw/issues/7812) / [PR #7833](https://github.com/nearai/ironclaw/pull/7833) | 有 PR 已实现，按用户自身权限只读调用工具，落地在即 |
| **IronHub 代理链接 WebUI 化** | [PR #7516](https://github.com/nearai/ironclaw/pull/7516) / [PR #7826](https://github.com/nearai/ironclaw/pull/7826) | Hub Agent Link 的注册 URL 与共享密钥安装可经 Extensions 页完成（当前仅 CLI 可行）——两条 PR 均 OPEN，新一代贡献者（neo-sky）在推 |

**判断**：#7732 是明确的下版本主线；#7825、#7836 将作为沙箱与工具发现层的配套完善大概率进入 v1.4.0。#7812 已有实现 PR，预计近期合并。

---

## 7. 用户反馈摘要

（来源：`#x-ai-product-feedback` 渠道，经 IronClaw 自动分类后生成的 7 条 Issue）

**痛点集中在"第三方工具集的配置与连通体验"**：
- **OAuth 弹窗时序问题**（#7829）："Gmail 弹出认证窗口但 1 秒后就消失"——这是 WebUI 与 Google OAuth 流程之间的竞态问题，直接阻断集成路径。
- **配置完仍不可用**（#7828、#7841）：用户完成配置流程后遭遇 `admin must configure` 死胡同；NEAR 基金会内部账号也无法设置 Slack。
- **引导缺失**（#7840）：应用未在用户需要时提示"去连接 Slack"，用户主动来找才发现无入口。
- **安装失败**（#7830）：Notion 工具无法在 IronClaw 中安装，阻断新工具接入。
- **请求执行中断**（#7842）：请求执行中出现通用 `invalid result` 错误，属于诊断信息缺失的"哑错误"。

**整体评价**：外部集成（Slack/Gmail/Telegram/Notion）的**配置与连接体验是目前最大的用户痛点集群**，且涉及多个独立工具，指向共性问题——集成注册/认证管线存在系统性缺陷，而非单一工具的问题。

---

## 8. 待处理积压

| 项目 | 问题 | 持续时间 | 状态 |
|---|---|---|---|
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | tokio-tungstenite 从 0.29 升至 0.30 的依赖升级 | 自 2026-08-02（22 天） | 仍未合并，但 24h 内一度更新 |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | APDD Kit 治理框架评估与集成提案（rdisandro） | 自 2026-08-05（19 天） | OPEN，无近期更新记录 |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | IronHub Agent Link WebUI 操作界面（neo-sky） | 自 2026-08-12（12 天） | OPEN，24h 有更新；配套 PR #7826 已补上 |
| 依赖升级积压群 | 当前有 4 条 Dependabot PR 同时待合并（#7837/#7834/#7835/#7020） | 均为近 1-2 天新开 | 正常轮转中，但批量积累需关注 |

**提醒**：
- **#7020 的 tokio-tungstenite 升级**已搁置三周，考虑到 `tokio` 生态仍在活跃演进，建议设定明确升级期限，避免版本偏差扩大。
- **#7255 APDD 治理框架提案**有长期未获回应的迹象——若维护者有意接洽，建议明确排期或婉拒，避免贡献者等待不确定。
- **#7810（沙箱凭证绑定）** 与 **#7817/#7821（CI 迁移）** 均属大改动、高价值 PR，建议维护者给出明确的 review 时间线，防止大型分支长时间偏离主干。

---

*报告生成时间：2026-08-24 | 数据窗口：24h | 数据源：GitHub API (nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-24

## 今日速览

过去24小时内，LobsterAI 项目完成了一轮**集中清理关闭**：4条 Issue 与 3个 PR 全部以关闭/合并状态收尾，无新增活跃讨论或新版本发布。值得关注的是，所有关闭项时间戳均集中在 2026-04-01 创建、2026-08-23 更新，带有 `[stale]` 标记，表明这是**维护者对历史积压项的一次系统性清扫**，而非新功能推进。当前项目活跃度较低，但关闭项中包含了若干有价值的议题（安全泄漏、群名 Bug、Agent 管理优化等），其关闭状态需关注是已解决还是被搁置。项目整体处于**低活跃、维护收尾期**。

- 过去24小时更新：4 Issues 关闭、3 PR 合并/关闭、0 新版本
- 活跃度评估：低（无新开 Issue/PR、无新评论）
- 关键信号：全部更新均为历史积压项的 stale 清理，无新功能合并

---

## 版本发布

无新版本发布。

---

## 项目进展

今日无新增 PR 合并。3 个 PR 均标记为 `[stale]` 并关闭，其中包含两个值得关注的实现：

| PR | 内容 | 状态 | 备注 |
|----|------|------|------|
| [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | Agent 管理页面交互优化（删除操作直接入口、侧边栏改进） | CLOSED (stale) | 原为 #1176 的重开，因与主分支冲突后关闭，**未合并** |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | 为模型添加 context window 和 maxTokens 设置，并同步到 Cowork/OpenClaw 配置 | CLOSED (stale) | **未合并**，功能可能被搁置 |
| [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | NIM 超大群 teamTypeNum 硬编码修复（一行修改） | CLOSED (stale) | 关联 Issue #1200，**是否合并不明确** |

**结论**：今日没有实际代码合入主线，项目进度未向前推进。PR #1199 的模型级 token 设置功能若被搁置，将影响后续上下文管理能力。

---

## 社区热点

今日无新增活跃讨论，但以下关闭项的过往讨论值得回顾：

| 议题 | 评论数 | 核心诉求 |
|------|--------|----------|
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) 不要强制在工作目录建立 Agents.md 等6个文件 | 2 | 用户对强制创建系统文件的体验不满，希望支持全局/公共配置或隐藏目录 |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) 网关重启进度条消失，对话显示模型不可用 | 2 | 用户对重启状态的可见性和错误反馈有明确诉求 |
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) agent 泄漏 model key 信息（安全风险） | 2 | 用户发现 agent 可被诱导暴露 key 配置，属于安全敏感问题 |

这些议题的共性：**用户对 LobsterAI 的配置管理体验（#1196）、异常反馈机制（#1198）、安全性（#1202）提出了改进期望**。虽然已关闭，但维护者应确认这些反馈是否已进入内部改进队列。

---

## Bug 与稳定性

今日关闭的 Bug 中，安全相关问题优先级最高：

| 严重程度 | Issue | 问题描述 | 是否有 fix PR |
|----------|-------|----------|---------------|
| 🔴 严重（安全） | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | agent 可被诱导泄漏 model key 信息（环境变量、配置文件位置），存在敏感信息泄漏风险 | ❌ 无对应 PR |
| 🟡 中等（功能） | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM 超大群/普通群 @ 机器人时，`teamTypeNum` 硬编码错误导致群名无法获取显示为原始 ID | ✅ PR #1201（已关闭，合并状态不明） |
| 🟢 轻微（体验） | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | 网关重启进度条消失，后端状态不可感知，对话显示模型不可用 | ❌ 无对应 PR |

**分析**：
- #1202 安全漏洞目前**无任何修复措施**，且已关闭，存在后续风险敞口。建议维护者重新打开或内部跟踪。
- #1200 的修复 PR #1201 也已被关闭，需确认修复是否已进入主分支。

---

## 功能请求与路线图信号

| 来源 | 需求 | 可能的后续方向 |
|------|------|----------------|
| Issue [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | 支持全局/公共 `agents.md` 配置，或建立到隐藏目录，避免每个工作目录强制生成6个系统文件 | 配置管理模块可考虑引入"全局Prompt + 项目级覆盖"模型 |
| PR [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | 增加 per-model 的 `contextWindow` 和 `maxTokens` 设置，并同步到 Cowork/OpenClaw 配置 | 该 PR 显示了明确的路线图意图：**细粒度模型级 token/上下文管理**，若被采纳将显著提升 Settings 可用性 |
| Issue [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | 网关重启需要更清晰的进度/状态反馈 | 可纳入网关生命周期管理改进范围 |

**信号判断**：#1199 的实现思路成熟（persist + export + propagate），是下一版本可能纳入的功能；#1196 的"全局 agents 文件"需求与主流 Agent 框架（如 CC）的设计思路一致，有较高采纳可能。

---

## 用户反馈摘要

- **配置体验**："每次选择不同的工作目录，都要强制建立 6 个系统文件...现在这样太乱了，而且删了还要重建！" — 用户对强制文件创建的抵触情绪明显，希望更灵活的目录约定。([#1196](https://github.com/netease-youdao/LobsterAI/issues/1196))
- **错误反馈**："网关重启到一半进度条消失，也不知道重启状态，后面的对话都显示模型不可用" — 用户需要明确的重启状态指示和可感知的错误恢复。([#1198](https://github.com/netease-youdao/LobsterAI/issues/1198))
- **安全边界**："agent 回复配置文件定义位置、key 环境变量相关信息...agent 没有做防护，会泄漏 key 相关信息" — 用户关注 agent 处理敏感信息的边界，期望默认拒绝此类操作。([#1202](https://github.com/netease-youdao/LobsterAI/issues/1202))
- **实用性 Bug**："@-mention 机器人时群名显示为原始 ID 而非真实群名" — 直接降低群聊场景的可用性，属于高频触发问题。([#1200](https://github.com/netease-youdao/LobsterAI/issues/1200))

---

## 待处理积压

⚠️ 以下均为今日刚关闭、但实质问题可能未获解决的历史项，建议维护者核实处理状态：

| 事项 | 类型 | 状态风险 | 建议 |
|------|------|----------|------|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) **agent 泄漏 model key** | Issue | 安全问题无对应修复 PR，已 stale 关闭，风险敞口 | **建议紧急评估**：确认是否存在实际泄漏路径，尽快补充防护措施 |
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) **NIM 群名 Bug** | Issue + PR | 修复 PR 已关闭但合并状态不明，用户可能仍受影响 | 确认修复是否已进主分支，必要时重新打开 Issue |
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) **强制创建 6 个系统文件** | Issue | 高频痛点，无 fix PR，产品设计层面未回应 | 建议进入路线图讨论，参考全局/项目配置分离机制 |
| [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) **网关重启状态不可见** | Issue | 体验类 Bug，无对应修复 | 可考虑结合网关生命周期管理一起修复 |
| [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) **Agent 管理页面交互优化** | PR | 因冲突关闭，交互优化可能被放弃 | 若确认有价值，建议解决冲突后重新提交 |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) **模型级 token/context 设置** | PR | 功能完整但被 stale 关闭 | 建议纳入下一版本迭代计划，社区有明确需求 |

---

**总结**：LobsterAI 今日处于维护清理模式，无新功能推进，但历史积压暴露的问题仍存在风险——特别是 **#1202 的安全泄漏问题未得到修复响应**，建议维护者优先处理。同时， [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) 和 [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) 代表了社区对配置体验和模型级精细控制的核心诉求，是下一版本值得优先考虑的方向。项目整体健康度**中等偏低**，活跃度有待提升。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-24

**项目健康度：🟢 高活跃 · 稳定推进**


## 1. 今日速览

过去 24 小时 Moltis 保持高活跃状态：共 10 条 PR 更新，其中 9 条已合并/关闭，仅 1 条待合并；Issues 侧 2 条新开/活跃（0 关闭）。本日合并且已关闭的 PR 覆盖浏览器隐身模式、WhatsApp 文件持久化、MCP 客户端重连、内存后端规范化等 8 个修复方向——这也是 Moltis 近期合并密度最高的一天之一。值得关注的是，今日合入的 PR 整体呈“深度修复"特征：涉及递归打包技能、嵌入编码批处理上限、TLS/ALPN 协商等底层稳定性问题，说明项目正从功能扩张转向稳定性加固阶段。开发节奏健康，无明显阻塞。

> ⚠️ 说明：以下各节中的 Issues 与 PR 均为 2026-08-24 当天仍处于活跃或当日合并/关闭状态的数据。Issue #245 创建日期为 2026-02-26，本文在“待处理积压”一节单独标注。


## 2. 版本发布

**无新版本发布。** 今日无 Release。仓库当前未发布新版本，建议关注 `main` 分支的合入动态以评估功能集成进度。


## 3. 项目进展

过去 24 小时共有 9 条 PR 被合入/关闭，按功能域归类如下：

- **浏览器/网络 (`browser`)**
  - [#1227 [CLOSED]](https://github.com/moltis-org/moltis/pull/1227) `fix(browser): enable Obscura stealth mode by default` — 默认启用 Obscura sidecar 的 `--stealth` 模式，新增 `tools.browser.obscura_stealth` 配置项（默认 `true`），允许运营者按需关闭。
  - [#1229 [CLOSED]](https://github.com/moltis-org/moltis/pull/1229) `fix(browser): support Browserless v2 containers` — 完整支持 Browserless v2 容器协议（v2 启动参数经 Base64 `launch` websocket query 传递，使用 `TIMEOUT`/`CONCURRENT`），同时保留 v1 镜像与 API 作为默认。

- **信息通道 (`whatsapp`)**
  - [#1228 [CLOSED]](https://github.com/moltis-org/moltis/pull/1228) `fix(whatsapp): persist inbound files for local tools` — 下载入站 WhatsApp 文件并持久化至会话媒体接口，本地工具获得稳定的 `local_path`；实现设有 20MB 上限、路径净化等安全约束。

- **MCP 基建 (`mcp`)**
  - [#1231 [CLOSED]](https://github.com/moltis-org/moltis/pull/1231) `fix(mcp): resolve current client after server restart` — 修复 MCP 工具桥接在服务重启后仍向已关闭客户端派发消息的问题，保证每次转发均使用最新连接。

- **技能打包 (`skills`)**
  - [#1234 [CLOSED]](https://github.com/moltis-org/moltis/pull/1234) `fix(skills): materialize recursive bundled sidecars` — 修复预构建发布与 Docker 镜像中递归打包 sidecar 文件缺失的问题（此前 `read_skill` 引用 `scripts/quick_validate.py` 却报“not found”）。

- **内存系统 (`memory`)**
  - [#1235 [CLOSED]](https://github.com/moltis-org/moltis/pull/1235) `fix(memory): normalize built-in backend config value` — 将内置后端运行时名称从 `sqlite` 规范化为可配置值 `builtin`，统一序列化逻辑并新增回归测试。
  - [#1236 [CLOSED]](https://github.com/moltis-org/moltis/pull/1236) `fix(memory): bound local embedding encoder batches` — 限制本地 GGUF 嵌入编码器的 `n_batch`（从 2048 降至 512）防止进程崩溃，并加重试逻辑。

- **国际化 (`i18n`)**
  - [#1225 [CLOSED]](https://github.com/moltis-org/moltis/pull/1225) `fix(i18n): update and improve zh-TW Traditional Chinese locale` — 大幅重写并扩充繁体中文 UI 翻译，以 `connectors.ts` 为主，提升术语一致性。

- **定时任务 (`cron`)**
  - [#1226 [CLOSED]](https://github.com/moltis-org/moltis/pull/1226) `fix(cron): deliver scheduled output to the originating chat` — 新增 `payload.deliver_to_current_chat` 瞬态快捷方式，使定时任务输出准确投递至发起会话（保留 thread/topic 路由），同时拒绝非法混合配置。

**整体评估：** 本批合入覆盖至少 7 个功能模块，包含多项面向生产场景的稳定性修复（MCP 重启、嵌入批处理、TLS 下的 WS 协商等，后者见 Issue #245 跟踪）。其中 WhatsApp 文件持久化、Browserless v2 支持与 Obscura 隐身模式默认启用属于新功能落地，其余多为 Bug 修复与工程规范化。项目正处在“功能加固 + 深度兼容性”并行阶段。


## 4. 社区热点

本日最受关注的是历史遗留问题，而非当日新建：

- **Issue [#245 [OPEN]](https://github.com/moltis-org/moltis/issues/245) “h2 in ALPN breaks WebSocket — browser negotiates h2, WS upgrade returns 405”**（创建于 2026-02-26，更新于 2026-08-23，2 条评论）— 该问题描述了一个持续半年未解的疑难 Bug：TLS 下将 `h2` 置于 ALPN 首位会导致新开浏览器标签页的 WebSocket 静默失败（返回 405），现有会话因 TLS session 复用而幸存。评论虽少，但本质是浏览器兼容性与协议栈交互问题，影响所有通过 HTTPS 使用 Moltis WebSocket 的用户。**目前仍无对应修复 PR，但 #1227 中 Obscura 浏览器相关改动可能间接触及类似协商逻辑，值得关注后续动向。**

其余 Issues/PR 评论量均为 0，社区讨论热度处于低位。


## 5. Bug 与稳定性

按严重程度排列：

**🔴 高严重度（可能导致进程崩溃、数据丢失或核心功能不可用）**

- **本地嵌入编码导致进程终止** — PR [#1236](https://github.com/moltis-org/moltis/pull/1236) 修复：本地 GGUF 嵌入编码器在 token 化 chunk 或 query 超过 512 tokens 时可导致整个 Moltis 进程终止。根因是 `n_ctx=512` 与 `n_batch=2048` 不匹配，非因果 llama.cpp 编码器要求完整输入适配单一批次。该 bug 影响所有使用本地嵌入的部署，今日已合入修复。

- **MCP 服务重启后工具调用失效** — PR [#1231](https://github.com/moltis-org/moltis/pull/1231) 修复：服务重启后，活动对话仍向已关闭的 MCP 客户端派发工具调用，直至下一轮重建注册表。影响正在进行的多轮对话，导致工具静默失效。今日已合入修复。

**🟡 中严重度（功能异常但可绕过，不导致崩溃）**

- **TLS 下 WebSocket 协商失败（405）** — Issue [#245](https://github.com/moltis-org/moltis/issues/245)（活跃）— 浏览器新标签/刷新后 WS 握手失败，原因是 TLS 下 ALPN 首位为 `h2`，浏览器协商 h2 后 WebSocket 升级被拒。已有临时绕过方案（需手动调整 ALPN 顺序），当前无关联修复 PR。持续活跃 6 个月。
- **共享 Slack 频道中工具失效** — Issue [#1224](https://github.com/moltis-org/moltis/issues/1224)（活跃，0 评论）— 创建于 2026-08-21，用户报告在共享 Slack 频道中工具停止工作，无评论，无关联 PR。严重性待复现确认。

**🟢 低严重度（非功能性/边界条件）**

- #1234 修复了预构建发布中递归打包技能 sidecar 文件缺失问题（此前请求 `quick_validate.py` 报“not found”）；#1235 规范了内置内存后端配置值；#1225 改进了繁体中文翻译；#1226 修复了定时任务投递目标；#1227/#1228/#1229 为默认值调整与新增能力。


## 6. 功能请求与路线图信号

当日无明确标注 `enhancement` 的新建 Issue，但以下 PR 指示了明确的产品演进方向：

| 方向 | 证据 PR | 说明 |
|---|---|---|
| **WhatsApp 深度集成** | [#1233 [OPEN]](https://github.com/moltis-org/moltis/pull/1233) `Add opt-in WhatsApp document ingestion` | 在 #1228 已落地基础持久化的基础上，进一步按账号维度提供 `download_inbound_documents` 开关——说明该功能正在被产品化。该 PR 目前待合并，预计将进入下一版本。 |
| **开箱即用的隐私/反检测浏览** | [#1227 [CLOSED]](https://github.com/moltis-org/moltis/pull/1227) | 将 Obscura 隐身模式设为默认，暗示项目对隐私保护的自带主张。 |
| **容器化浏览器兼容性** | [#1229 [CLOSED]](https://github.com/moltis-org/moltis/pull/1229) | 同时支持 Browserless v1/v2，说明官方对容器化部署生态的重视在增强。 |

结合上述信号，**下一版本很可能包含：** ① WhatsApp 文件按需下载（#1233）；② 默认开启的隐身浏览；③ 内存后端配置规范化带来的云原生部署友好改进。


## 7. 用户反馈摘要

来自当日活跃/更新 Issues 的真实用户反馈：

- **P2Chill（Issue #245）** — 报告了一个非常棘手的生产环境问题：只要浏览器是“全新”连接，WebSocket 就会因 h2 协商失败而断开。用户特意指出“现有会话正常、新标签页失败”这一极具迷惑性的现象，暗示该问题容易被误判为偶发。此类反馈对排障定位很有价值，且侧面说明用户对 WebSocket 通道的依赖程度较高。
- **affanshahid（Issue #1224）** — 报告在 Slack **共享频道** 中工具彻底失效，做了预检（搜索既有 issue、确认最新版本），但未附会话上下文——该场景（共享频道）涉及 Slack 权限模型，可能触及多租户/跨频道访问控制逻辑，值得维护团队针对性复现。
- 其余 PR 与 Issue 均无评论，未收集到更多可用反馈。

> 💡 综合两条反馈，当前用户场景集中于**生产化消息通道稳定性**：WebSocket 长连接、Slack 共享频道上下文、WhatsApp 文件流转。这三者恰好对应了本日合并的三类修复（browser/ws、cron 投递、whatsapp 持久化），项目响应方向与用户痛点高度一致。


## 8. 待处理积压

**高优先级（影响面大、持续活跃但未解决）**

- **Issue [#245](https://github.com/moltis-org/moltis/issues/245)** “h2 in ALPN breaks WebSocket” — 已持续 **6 个月**（2026-02-26 创建），当前仍无关联修复 PR。影响所有 TLS + WebSocket 用户，且问题描述详尽、复现路径清晰。该问题涉及 `rustls`/hyper 层 ALPN 协商，修复面可能较深，但 6 个月未合入修复值得关注，新建时无 milestone 标注。

**中优先级（新增待响应）**

- **Issue [#1224](https://github.com/moltis-org/moltis/issues/1224)** “Tools stop working in shared Slack channels”（2026-08-21 创建）— 已 3 天无维护者响应/评论。用户已做预检（确认最新版本），共 0 评论 0 👍，尚未被标记。Slack 共享频道为常用协作模式，建议尽快分类为 `bug` 并对齐到 Slack 连接器 owner。
- **PR [#1233 [OPEN]](https://github.com/moltis-org/moltis/pull/1233)** “Add opt-in WhatsApp document ingestion” — 已创建 1 天，目前待合并（未关闭）。功能与 #1228 天然衔接，建议优先评审以免分支漂移。

**长期未响应（无更新）**

- 暂无其他活跃超过 30 天未关闭且拥有维护者标签的 Issue/PR。


*日报生成时间：2026-08-24 · 数据窗口：2026-08-23 至 2026-08-24（24 小时）*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，这是CoPaw项目2026年8月24日的动态日报。

---

### CoPaw 项目动态日报 (2026-08-24)

#### 1. 今日速览

今日 CoPaw 项目活跃度较高，主要体现在 Pull Request 的密集提交与合并上（24小时内15条PR活动），显示核心开发与社区贡献都在稳步推进。虽然无新版本发布，但多个关键修复PR（如Windows进程探测、Token缓存）被合并，有助于提升软件稳定性。与此同时，Issue 侧暴露了两个值得关注的稳定性隐患（内存泄漏与代理状态丢失），以及一个用户调研类问题（Aider集成），社区反馈活跃，但未出现引爆讨论的热点。整体来看，项目正处于健康的功能迭代与问题修复并行阶段。

#### 2. 版本发布

无新版本发布。

#### 3. 项目进展

今日有 8 个 PR 被合并或关闭，其中包含数个有意义的修复与功能清理，标志着项目在稳定性方面迈出了一小步。

- **稳定性修复**
  - **[已关闭]** [fix(utils): bound and hide the Windows tasklist liveness probe](https://github.com/agentscope-ai/QwenPaw/pull/6203)：修复了Windows系统下进程存活检测可能因缺少超时而阻塞的问题，并优化了调用方式，对Windows用户友好。
  - **[已关闭]** [fix(token_usage): don't persist an unseeded cache on shutdown](https://github.com/agentscope-ai/QwenPaw/pull/6220)：修复了Token用量缓存在未加载磁盘数据时可能被意外清空的问题，避免了数据丢失。
  - **[已关闭]** [fix(cli): build a valid user message for the headless task command](https://github.com/agentscope-ai/QwenPaw/pull/6616)：修复了 `qwenpaw task` 命令因消息格式错误而无法运行的问题。

- **功能推进与清理**
  - **[已关闭]** 一组由 `Ferrum360` 提交的关于动态技能加载和自动标题同步的PR（[#7027](https://github.com/agentscope-ai/QwenPaw/pull/7027)、[#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030)、[#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031)、[#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032)、[#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033)）虽有多个重复提交，但已全部关闭，表明相关功能代码已整合或处理完毕，虽未合并入主干，但为后续的skill-system重构提供了讨论基础。

这些合并的PR解决了数个此前遗留的bug，尤其是针对CLI和Windows平台的问题，有助于提升不同用户场景下的使用体验。

#### 4. 社区热点

今日社区讨论热度相对分散，未出现现象级热点Issue或PR，但以下几个问题吸引了社区注意：

- **[#7221] [Feature] 热重载后插件注册丢失**：该Issue由 `liuyaoqing1619-ops` 提出，获得了3条评论。用户详细描述了在配置变更触发热重载后，插件的工作区级注册（如运行时钩子、斜杠命令）会丢失的问题。这触及了高级用户的核心使用场景，反映了对系统灵活性和零中断运维的强烈需求。
  [查看Issue](https://github.com/agentscope-ai/QwenPaw/issues/7221)

- **[#7222] [Performance] 后端进程内存无限增长至20GB+**：该问题由 `weiguochen-sh` 报告，获得了2条评论。用户详细描述了在正常使用2天后，后端进程内存逐步增长至20.7GB并拖慢整机的现象。这是一个严重的稳定性问题，得到了社区的关注，等待维护者排查。
  [查看Issue](https://github.com/agentscope-ai/QwenPaw/issues/7222)

#### 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

- **严重（高优先级）**
  - **后端进程内存无限增长** ([#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222))：运行2天内存飙升至20GB+，严重影响服务稳定性，目前无相关修复PR。

- **中等**
  - **热重载后插件状态丢失** ([#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221))：配置变更后，插件的运行时钩子、命令等注册信息被清空，破坏功能连续性。目前无直接修复PR，但[PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)提出的“工作区级always-on加载”可能部分解决此问题。
  - **长文本推理时连接被切断** ([#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218))：在长时间推理场景下出现 "peer closed connection" 错误，用户已确认自定义模型端也反馈了超时问题。这可能是配置或代理设置问题，需进一步排查。
  - **对话历史污染** ([#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217))：用户报告停止任务后，下一次对话会不正确地沿用上一次的思考过程和回复模式。这是一个影响对话逻辑的严重bug，但当前报告信息较少，待补充更多细节。

#### 6. 功能请求与路线图信号

今日的功能请求主要集中在增强灵活性和系统集成方面，相关PR显示这些需求正在被积极讨论和实现：

- **会话级多项目目录支持**：[PR #6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) 提出了将单个聊天会话绑定到多个项目目录的功能，完全契合高级用户对复杂工作流管理的需求。该PR仍处于开放状态，是未来增强多任务处理能力的重要信号。
- **Aider CLI 集成**：[Issue #7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) 询问如何将 Aider CLI 作为代理接入，表明社区对与外部代码编辑工具集成的需求正在增长。
- **DeepSeek 模型目录更新**：[PR #7223](https://github.com/agentscope-ai/QwenPaw/pull/7223) 提出根据官方API变动，移除已退役的 `deepseek-chat` 和 `deepseek-reasoner` 模型，并更新至v4系列。这表明项目在紧跟供应商模型迭代，保持兼容性。
- **技能系统增强**：[PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) 提出了工作区级 `always_on` 技能加载模式，旨在为特定代理预加载核心行为，这弥补了[Issue #7221](https://github.com/agentscope-ai/QwenPaw/issues/7221)中提到的部分痛点。

#### 7. 用户反馈摘要

- **核心痛点**：`weiguochen-sh` 在[#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)中详细描述了内存泄漏对生产环境的严重影响，反馈专业且数据详实，是典型的稳定性抱怨。
- **功能需求**：`x1n95c` 在[PR #6976](https://github.com/agentscope-ai/QwenPaw/issues/6976)中提出的多项目目录绑定，表达了高级用户对复杂项目管理流程的迫切需求。
- **使用困惑**：`xiaohushi512` 在[#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)中询问QwenPaw是否内置超时设置，反映了在集成外部模型时的配置困惑，也暗示了文档或错误提示可能不够清晰。
- **生态集成期望**：`xguest` 在[#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224)中寻求Aider集成帮助，体现出用户希望CoPaw能更好地融入其现有开发工具链。

#### 8. 待处理积压

- **[#6976] session-scoped multi project directories**：该PR从8月13日发起，已持续开放11天，处于待审或等待更新状态，是重要的功能特性，建议维护者关注。
  [查看PR](https://github.com/agentscope-ai/QwenPaw/pull/6976)
- **[#7066] fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers**：该修复PR针对MCP服务器的OAuth2令牌轮换问题（对应Issue #7053），已开放8天，关乎远程MCP服务器的长期稳定连接，值得被优先审查。
  [查看PR](https://github.com/agentscope-ai/QwenPaw/pull/7066)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为一名AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的ZeroClaw GitHub数据，生成2026-08-24的项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-08-24

## 1. 今日速览
ZeroClaw 项目今日处于**高活跃度**状态，核心焦点集中在架构演进与安全加固两大方向。过去24小时内，Issues 和 PR 更新均为 50 条，显示出社区讨论热度极高。目前有大量 RFC（Request for Comments）提案正在讨论中，特别是关于**运行时所有权（Runtime ownership）、统一附件架构（Unified attachment architecture）和 WASM 插件系统**的设计，表明项目正在经历一次深度的架构升级周期。与此同时，多个高风险的 `file_download` SSRF（服务端请求伪造）安全加固 PR 正处于堆叠（stacked）提交和审查状态，凸显了项目对安全性的重视。目前 Pull Request 积压量较大（45个待合并），维护者审查压力明显。

## 2. 版本发布
- **无新版本发布**。项目正处于多个大型功能与架构重构的整合期，下一个正式版本的发布可能需等待这些关键 RFC 落地及安全补丁合并。

## 3. 项目进展
今日无 PR 被合并，但多个关键 PR 的活跃更新揭示了项目正在推进的重大方向：
- **SSRF 安全加固三部曲**：由 `wangmiao0668000666` 主导的 `file_download` 工具 SSRF 加固正在分步实施，旨在从网关到工具注册表全链路传递实时配置，并正确处理 NAT64 前缀（[#10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075)、[#10072](https://github.com/zeroclaw-labs/zeroclaw/pull/10072)）。这是一个基础性的安全改进，对于防止恶意服务器内网探测至关重要。
- **核心运行时清理**：`Audacity88` 提交了 PR [#10289](https://github.com/zeroclaw-labs/zeroclaw/pull/10289)，提议移除未使用的遗留 HMAC 节点传输协议，旨在简化运行时架构并减少维护负担。此外，PR [#10246](https://github.com/zeroclaw-labs/zeroclaw/pull/10246) 正在修复 RPC 会话无法访问已配置频道的问题，这将增强远程控制场景的可用性。
- **提供者（Provider）生态扩展**：社区正在推进多项提供者支持，包括原生 Hailo-Ollama 支持（[#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)）和新的 ZeroRouter 预设（[#9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645)），这表明项目正在扩大对边缘AI硬件和新型API网关的兼容性。

## 4. 社区热点
今日讨论最热烈的议题集中在架构设计层面，评论数显著高于其他问题：
- **#9487 [RFC]: Runtime-owned conversation sessions and transport surface adapters**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)，25条评论）：该RFC提议将会话所有权明确划归运行时，并引入传输适配层，是解决当前多个工作流冲突的核心提案。高讨论度反映了社区对会话持久化契约归属问题的普遍关注。
- **#9488 [RFC]: Unified attachment architecture for web chat and channels**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)，19条评论）：统一不同渠道（Web/QQ/Slack等）的附件处理架构是提升用户体验和开发者效率的关键，该提案的讨论热度仅次于 #9487。
- **#6850 [RFC]: Decouple memory lifecycle policy from storage backends**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)，17条评论）：将内存生命周期策略与具体存储后端解耦，是实现模块化存储方案的重要一步，引发了关于AI记忆管理最佳实践的深入讨论。
- **#8780 [RFC]: Realtime speech-to-speech channel for Gemini Live**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)，17条评论）：该提案已重写为经纪人（broker）合约，旨在通过Gemini Live提供实时语音对话能力，跨越文本交互的边界，代表了前沿的功能需求方向。

这4个热点全部指向一个共同诉求：**随着项目功能增加，开发者正在积极探索未来架构的清晰边界与模块化设计**，以确保项目的长期可维护性和扩展性。

## 5. Bug 与稳定性
今日无新 Bug 被关闭，但有一个新报告的测试问题，且有多个重要的修复 PR 正在等待合并：
- **测试稳定性（次要）**：[#10272](https://github.com/zeroclaw-labs/zeroclaw/issues/10272) 报告了在并行测试下，Hailo 集成测试可能捕获其他测试发出的事件导致失败。这是一个典型的测试隔离问题，目前仅影响开发者，暂无对应修复PR。
- **功能性修复（积压）**：多个高优先级 Bug 修复 PR 仍未合并，可能持续影响特定用户场景：
    - [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) **修复受监管的Shell审批路由**，保证通过频道发起的Shell命令能被正确审批，而非被直接拒绝。
    - [#10258](https://github.com/zeroclaw-labs/zeroclaw/pull/10258) **修复`cron update --command`命令**补丁无法应用到agent任务的问题。
    - [#10253](https://github.com/zeroclaw-labs/zeroclaw/pull/10253) **修复cron任务未遵循调度器的工作区安全策略**的问题。
    - [#10256](https://github.com/zeroclaw-labs/zeroclaw/pull/10256) **修复网关日志中未脱敏的幂等键**，这是一个安全和日志卫生问题。

## 6. 功能请求与路线图信号
今日的功能请求与架构路线图高度相关，并已有相应的 PR 作为实现信号：
- **模块化与标准化插件系统（强烈信号）**：围绕 Agent Plugins 1.0 标准的支持请求（[#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)）及全面的 WASM 插件架构提案（[#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)）显示，社区强烈希望 ZeroClaw 成为一个开放的插件平台。结合 #9109 和 #9645 PR，未来版本有望支持从 WASM 到新硬件在内的多种扩展方式。
- **增强的渠道支持（明确信号）**：多个已接受的 `status:accepted` 功能请求（[Twilio SMS #6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)、[Zulip #6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)、[Rocket.Chat #6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435)、[Mastodon #6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423)）均处于 `no-stale` 状态，表明这些功能已被项目接受并排入开发日程，只是时间问题。
- **安全敏感文件防护（重要信号）**：RFC [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) 提议允许通过 `.zeroclawignore` 文件及工作区相对禁止路径模式来保护工作区内敏感文件。这填补了当前 `forbidden_paths` 机制仅能阻止工作区外访问的空白。

## 7. 用户反馈摘要
- **对配置复杂度和日志清晰度的不满**：用户 `radther` 在 [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) 中报告 Agent 在执行 cron 任务时缺少上下文。此外，多个 PR（如 [#10256](https://github.com/zeroclaw-labs/zeroclaw/pull/10256)）致力于修复日志中的敏感信息泄露，反映出用户对系统可观测性安全的高度关注。
- **对灵活、细粒度安全策略的强烈需求**：用户对安全策略的讨论不再局限于简单的"允许/禁止"，而是需要更精细的控制，例如区分沙箱策略（[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)）和针对区块链地址的“发布安全”例外（[#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)）。这表明用户正将 ZeroClaw 部署到更复杂的生产环境中，对数据安全和策略灵活性提出了更高要求。
- **对新渠道接入的渴望**：用户对 Zulip、Rocket.Chat、Mastodon、Twilio 等渠道的请求依然活跃，特别是对于在 WhatsApp/iMessage 之外触达用户的 SMS 渠道（#6427），表明项目在多元化通信渠道集成方面的需求依然强劲。

## 8. 待处理积压
以下关键 PR 和问题已存在较长时间或在近期未有更新，需要维护者重点关注：
- **超长待审 PR（风险高）**：
    - [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) **为 Hailo-Ollama 提供原生支持** - 已开放月余，当前状态为 `needs-author-action`，存在并行测试失败问题，需要作者响应并更新。
    - [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) **在历史记录修剪时暴露 token 统计** - 由核心贡献者提交，已等待超过3周，目前 `needs-author-action`，需要作者或维护者更新。
- **重要功能请求等待分配**：
    - [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) **ACP 桥接自动配对不应依赖一次性代码** - 该问题自5月18日提出，已 `accept`，但对维护者来说，其修复的优先级可能低于正在进行的 SSRF 加固工作。
    - [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) **要求添加“无需Agent参与”的频道消息直发路由** - 这是一个明确的功能缺口，解决的是网关层的基础操作需求，建议及时评估并给出排期。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*