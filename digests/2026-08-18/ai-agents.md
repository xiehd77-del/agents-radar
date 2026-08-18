# OpenClaw 生态日报 2026-08-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-18 01:18 UTC

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

# OpenClaw 项目动态日报 — 2026-08-18

## 今日速览

OpenClaw 项目在过去24小时保持极高活跃度，共产生500条 Issue 更新（其中新开/活跃479条，关闭仅21条）与500条 PR 更新（其中待合并361条，占72.2%）。值得关注的是，项目长期存在的高优先级问题（P1/P2）大量处于 `clawsweeper:needs-maintainer-review` 与 `clawsweeper:needs-product-decision` 状态，说明维护者评审与产品决策已成为当前最大的瓶颈。今日无新版本发布，但合并/关闭了139条 PR，其中包含多项安全边界修复与架构清理工作，项目整体呈加速收敛态势。

---

## 版本发布

**无新版本发布。** 最近一次发布仍为 2026.6.1 系列。当前主分支已有大量待合并 PR（361条），预计下一次版本发布将包含密集的稳定性修复与 UI 改进。

---

## 项目进展

今日合并/关闭了139条 PR（占总 PR 数的27.8%），其中值得关注的合并项包括：

| PR | 标题 | 关键内容 |
|---|---|---|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | `feat(ui): review install policy warnings` | 在 Control UI 中为管理员增加安装策略警告的审阅与确认流程，补齐了 [#116489](https://github.com/openclaw/openclaw/pull/116489) 的 UI 闭环 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | `feat(security): require acknowledgement for install policy warnings` | 引入 `security.installPolicy` 外部命令的 `warn` 返回值，安装插件/技能前需经授权操作者明确确认 |
| [#125468](https://github.com/openclaw/openclaw/pull/125468) | `fix(voice-call): expose realtime/streaming stream paths through tailscale serve/funnel` | 修复 voice-call 插件在 Tailscale Serve/Funnel 下实时音频调用约1秒后断连的问题 |
| [#125472](https://github.com/openclaw/openclaw/pull/125472) | `improve(ui): rebuild agent GitHub identity panel on settings primitives` | 重构 agent GitHub 身份面板，消除原始枚举值直接渲染的问题，回归设置页设计语言 |
| [#125432](https://github.com/openclaw/openclaw/pull/125432) | `fix(matrix): keep user ID authorization case-sensitive` | 修复 Matrix 用户 ID 经 Unicode/服务器名大小写折叠后被误判为同一身份的安全问题 |
| [#125434](https://github.com/openclaw/openclaw/pull/125434) | `fix(agents): keep node agent tools on dedicated surfaces` | 防止 agent 运行通过通用 Nodes action 调用 node 发布的专用工具，保持策略过滤面 |

**本次合并的整体方向：** 安全边界的完整性（安装策略确认、Matrix 身份校验、工具调用面隔离）与控制 UI 的设计语言统一。项目在安全加固和 UX 收敛两个维度上均有实质推进。

---

## 社区热点

今日讨论最活跃的 Issue 集中在**会话状态丢失与消息可靠性**这一主题上，具体如下：

1. **[#77598 — Track live dev agent behavior and trajectory](https://github.com/openclaw/openclaw/issues/77598)**（评论23，👍 1）
   对 Pash 开发 agent 的24小时连续观察记录。社区对 agent 自主行为的运行轨迹保持高度关注，这反映了用户对 agent 可观测性的持续诉求。

2. **[#91009 — Codex PreToolUse native hook relay spawns CPU-bound processes](https://github.com/openclaw/openclaw/issues/91009)**（评论20，👍 2）
   Codex 集成的 hook relay 产生 CPU 满载进程并阻塞网关 RPC。该问题同时涉及 `message-loss` 与 `crash-loop` 两个 impact 标签，且被标记为 `platinum hermit`（最高价值），社区讨论集中在 hook 进程生命周期管理与资源隔离上。

3. **[#68596 — Configurable streaming watchdog timeout threshold](https://github.com/openclaw/openclaw/issues/68596)**（评论15，👍 8）
   用户要求在长推理模型（如 DeepSeek-R1、kimi-k2.5）场景下可配置流式看门狗超时阈值。👍 数高达8，显示该诉求覆盖面广——凡使用推理模型的用户均可能遭遇误报。

4. **[#62505 — Coding Agent never completes anything](https://github.com/openclaw/openclaw/issues/62505)**（评论15，👍 1）
   2026.4.2 及更早版本可正常工作的编码 agent 在更新后完全失效，仅输出模糊状态更新。该回归问题被标记为 P1，至今无修复 PR，社区讨论持续升温。

5. **[#38327 — "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview](https://github.com/openclaw/openclaw/issues/38327)**（评论14，👍 3）
   2026.3.2 版本引入的回归，影响 Google Vertex/Gemini 用户，最新评论更新于今日（08-18），说明问题仍在影响用户。

**讨论背后的核心诉求：** 用户对 agent **行为的可观测性**（`#77598`）、**资源消耗的透明性**（`#91009`）、以及**长推理场景下的稳定性**（`#68596`、`#62505`）有强烈关切。社区期望 OpenClaw 在保持 agent 自主性的同时，提供更细粒度的控制与诊断手段。

---

## Bug 与稳定性

今日 Bug 类 Issue 按严重程度排列如下：

### P1 级（严重）：

| Issue | 标题 | 状态 |
|---|---|---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 完全不完成任务（2026.4.2 起回归） | 无 fix PR，`needs-maintainer-review` |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined or null to object" | 无 fix PR，`needs-live-repro` |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay 产生 CPU 满载进程并阻塞网关 RPC | 无 fix PR，`needs-maintainer-review` |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 工具调用参数过大时嵌入式运行器报 "Network connection lost" | 无 fix PR，`source-repro` |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update` 导致文件所有权混用，doctor 随后覆盖配置 | 无 fix PR，`needs-live-repro` |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未回收，僵尸进程累积导致运行时退化 | 无 fix PR，`needs-info` |

### P2 级（中等）：

| Issue | 标题 | 状态 |
|---|---|---|
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 工作路径被硬编码（/Users/wangtao）并随发布合入 | 无 fix PR，`needs-product-decision` |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | Discord 频道在 2026.5.4 无法加载（beta.1 与 2026.4.29 正常） | 有 linked PR（open） |
| [#107814](https://github.com/openclaw/openclaw/issues/107814) | gpt-5.3-codex-spark 对必填参数的工具调用发送空参数 | 无 fix PR，`needs-info` |
| [#123356](https://github.com/openclaw/openclaw/pull/123356) | Control UI 斜杠命令参数暂存（UI 阶段） | PR 待合并，`waiting on author` |

### 已有关联修复 PR 的问题：

| Issue | 关联 PR | PR 状态 |
|---|---|---|
| [#77930](https://github.com/openclaw/openclaw/issues/77930)（Discord 回归） | `#80396`（MEDIA token 跳过警告）| `needs proof` |
| [#62328](https://github.com/openclaw/openclaw/issues/62328)（FTS5 缺失） | `#125478`（会话菜单去重）| 非直接修复，同域改进 |

**整体评估：** 今日无新增 P0 级 Bug，但 P1 级问题积压严重——多个高影响问题（如 `#62505`、`#91009`、`#38327`）长时间无 fix PR，部分已持续数月（`#38327` 自 3 月起）。维护者评审积压已成为稳定性修复的主要瓶颈。

---

## 功能请求与路线图信号

今日活跃的功能请求中，以下方向有较高概率进入后续版本：

1. **流式看门狗超时阈值可配置**（[#68596](https://github.com/openclaw/openclaw/issues/68596)，👍 8）
   长推理模型（DeepSeek-R1、kimi-k2.5）用户频繁触发误报。已有明确诉求，实现成本低，预计很快会被纳入配置项。

2. **多 Agent 会话状态持久化与恢复**（[#67419](https://github.com/openclaw/openclaw/issues/67419)，👍 2，[#58957](https://github.com/openclaw/openclaw/issues/58957)，👍 2）
   bootstrap 文件每轮重新注入浪费 20-30% token、模型切换时静默失败等问题，共同指向会话上下文管理需要更精细的控制。

3. **多个 Teams bot 支持**（[#71058](https://github.com/openclaw/openclaw/issues/71058)，👍 1）
   当前 `channels.msteams` 为单一对象，社区请求支持同一网关下多个 Azure 应用注册/Teams bot 身份。

4. **per-agent 资源控制**（[#67413](https://github.com/openclaw/openclaw/issues/67413)，👍 5）
   memory-core dreaming 目前全 workspace 同步执行，导致内存峰值超限 OOM。请求支持 per-agent dreaming 配置。

5. **Control UI 数学公式渲染**（[#42840](https://github.com/openclaw/openclaw/issues/42840)，👍 10）
   社区最高 👍 数之一，要求添加 MathJax/LaTeX 支持。当前多组 UI 改进 PR 正在密集合入（`#125478`、`#125486`、`#125249`、`#125240`），此请求大概率会被纳入下一轮 UI 迭代。

**路线图信号：** 今日合并的 `#125468`（voice-call 流路径修复）与 `#125486`（Ask OpenClaw 切换移至侧边栏底部）表明项目正聚焦于**语音/实时交互的稳定性**与 **UI 信息架构的收敛**。结合 `#125424`（隐藏 OpenClaw 管理的 provider 会话）与 `#125465`（移除过时的反向 worker tunnel），**架构清理**是当前主线的另一关键词。

---

## 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

**满意的方面：**
- [#73537](https://github.com/openclaw/openclaw/issues/73537) 用户 Raneb-cafe 表示：*"感谢 OpenClaw。我们已将其作为家庭和业务助手运行（Telegram 集成、自动化、cron 任务、Home Assistant 控制），它已真正成为我们日常流程的一部分。"* 该用户同时也请求增加生产就绪稳定性标签。

**痛点与不满：**

1. **回归问题打击信任：**
   - [#62505](https://github.com/openclaw/openclaw/issues/62505) 用户 drpau：*"这个 agent 已经为我持续输出数周工作，现在除了模糊的状态更新（以及随后对模糊性的道歉）什么都不做了。"*
   - [#51429](https://github.com/openclaw/openclaw/issues/51429) 用户 buggiant-coder：*"Apparently some wangtao hardcode his working space path into the code and somebody merged his code and published"* — 硬编码路径随发布合入，用户表示强烈不满。

2. **静默失败与诊断困难：**
   - [#58957](https://github.com/openclaw/openclaw/issues/58957) 用户 LunaLee0130：模型切换时上下文过大导致无声失败，*"没有明确的错误信息，用户无法判断问题是否由上下文窗口溢出导致。"*
   - [#53408](https://github.com/openclaw/openclaw/issues/53408) 用户 TimeAground：长对话后 write/exec 工具参数被静默丢弃，*"工具调用被尝试执行但收到的是空的参数对象。"*

3. **资源占用与性能退化：**
   - [#91009](https://github.com/openclaw/openclaw/issues/91009) 用户 aspalagin：Codex hook relay 进程消耗 *"~100%+ CPU each"*，并阻塞网关 RPC，导致消息丢失与崩溃循环。

4. **国内用户中文反馈：**
   - [#51429](https://github.com/openclaw/openclaw/issues/51429) 为中文提交，表达了对硬编码路径的困惑与不满，同时在 [#79458](https://github.com/openclaw/openclaw/issues/79458) 中 LifetimeVip 请求斜杠命令描述的 i18n 支持，称 *"中文用户只能看到英文描述"*。

**整体情绪：** 用户对 OpenClaw 的核心价值（多通道集成、agent 自主性）高度认可，但**回归问题频发**与**静默失败**正侵蚀信任。社区希望项目在发布前加强回归测试，并为关键路径提供更清晰的错误诊断。

---

## 待处理积压

以下 Issue 长时间未获维护者响应，建议优先关注：

| Issue | 创建时间 | 持续时间 | 严重度 | 搁置原因 |
|---|---|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026-03-06 | 5.5 个月 | P1 | `needs-live-repro`，维护者无法复现 |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 2026-04-07 | 4.5 个月 | P1 | `needs-maintainer-review` |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | 2026-03-19 | 5 个月 | P1 | `needs-maintainer-review` |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 2026-04-16 | 4 个月 | P1 | `needs-maintainer-review` |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 2026-03-24 | 5 个月 | P1 | `needs-live-repro` |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 2026-04-24 | 4 个月 | P0 | `stale`，`needs-product-decision` |

**重点提示：** [#70903](https://github.com/openclaw/openclaw/issues/70903) 为 P0 级（`ux-release-blocker`），文件级持久化 provider cooldown 在用户充值后仍持续阻止请求数小时，直接影响用户体验与商业续费，且被标记为 `stale`，需立即关注。

**PR 积压：** 361 条 PR 待合并中，部分已等待超过两周（如 [#97175](https://github.com/openclaw/openclaw/pull/97175)，6月27日创建，标为 `needs proof`）。建议维护者优先处理 `platinum hermit` 级别的 PR，这些通常对应高价值修复。

---

*本日报数据基于 2026-08-18 GitHub 公开数据生成，反映项目在报告时间窗口内的动态。*

---

## 横向生态对比

好的，这是基于您提供的各项目动态生成的横向对比分析报告。

---

### 个人 AI 智能体开源生态横向对比分析报告 (2026-08-18)

#### 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高速扩张与深度整合**的转折点。一方面，以 OpenClaw 为首的项目在功能广度上大幅领先，但**维护者评审瓶颈**已成为制约其稳定性的核心矛盾；另一方面，生态内部呈现出**架构趋同**与**场景分化**并存的局面，多项目不约而同地在会话状态管理、通道层抽象、安全边界加固等方向投入大量精力。社区对 **AI 智能体的可观测性、资源可控性和长任务可靠性**的需求急剧上升，标志着生态正从“技术尝鲜”向“生产就绪”的成熟阶段过渡。

#### 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新 | 今日 PR 更新 | 主要合并/进展 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (479活跃) | 500 (361待合并) | 139 PR 合并，安全边界修复与 UI 收敛 | 无 | 🟡 **高风险**：活跃度极高，但 P1/P2 问题积压，评审瓶颈严重。 |
| **Hermes Agent** | 50 | 50 | 无合并，聚焦安全修复与会话重构 PR 推进 | v0.20.3 (patch) | 🟢 **良好**：发布节奏稳定，安全修复响应及时，但关键 Bug 有积压。 |
| **IronClaw** | 29 | 44 (16合并) | 数据库写入压力优化、新通知架构定义 | v1.3.0-rc.1 | 🟡 **关注**：1.3.0-rc.1 存在**发布阻断级**升级 Bug。 |
| **PicoClaw** | 3 | 4 | 修复 Agent 工具静默死循环 Bug | 无 | 🟢 **健康**：问题修复效率高，整体稳定性向好。 |
| **NanoClaw** | 4 | 42 (25合并) | 通道层重构 Wave A/B 大批量合入 | 无 | 🟢 **活跃**：架构升级推进坚决，但存在时间敏感项（Codex 退役）。 |
| **CoPaw** | 14 | 33 (20合并) | 修复媒体 Token 计算、GitPanel 样式等问题 | 无 | 🟢 **良好**：快速迭代期，社区反馈积极，但历史 MCP 问题待解。 |
| **LobsterAI** | 7 | 18 (18关闭) | 批量清理积压 PR，DSH 引擎与多项功能落地 | 无 | 🟢 **积极**：集中清理与技术收口，但高质量 Issue 积压严重。 |
| **ZeroClaw** | 50 | 50 | 大量安全加固与 CI 优化 PR 合并 | 无 | 🟡 **关注**：社区讨论热度高（RFC），但关键 PR 存在滞留。 |
| **Moltis** | 3 | 9 | 新增 MiniMax Code ACP 代理，WebUI 可配置性提升 | 无 | 🟢 **稳定**：外部贡献健康，但 Podman 兼容问题长期未决。 |
| **NullClaw** | 0 | 1 | 仅 dependabot 依赖更新 PR | 无 | 🔴 **低活跃**：处于维护停滞期。 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无活动 | 无 | ⚪ **无活动** |

#### 3. OpenClaw 在生态中的定位

- **生态核心与参照系**：OpenClaw 不仅是活跃度最高的项目（日 Issue/PR 处理量均为 500），更是整个生态的**参照标准**。其他项目或直接 fork、或将其功能作为“路线图”参考，OpenClaw 的版本发布和功能取舍深刻影响着整个生态的风向。
- **优势**：拥有最庞大的社区和功能覆盖面（从语音通话到 Matrix 身份安全，场景极广），其 `clawsweeper` 自动化标签体系和 `platinum hermit` 价值评级系统，使其在大型开源项目管理上具备领先的工程化实践。
- **挑战与风险**：对比 Hermes Agent 的快速发布和IronClaw的聚焦优化，OpenClaw 正面临**严重的维护者评审瓶颈**。大量 `needs-maintainer-review` 和 `needs-product-decision` 标签的长期积压，导致 P1 级 Bug（如 Coding Agent 回归问题 #62505）数周无修复 PR，正在消耗社区信任，是其当前最大的生态位风险。

#### 4. 共同关注的技术方向

- **会话状态与上下文管理**：
    - **涉及项目**：OpenClaw、Hermes Agent、NanoClaw、LobsterAI、ZeroClaw。
    - **具体诉求**：多 Agent 会话状态持久化/恢复（OpenClaw #67419）、会话历史重构与压缩优化（Hermes #63292/#62587）、任务在聊天会话中执行的上下文丢失（NanoClaw #3301）、长文档任务因上下文溢出中断（LobsterAI #1671）。说明**状态持久性、可靠恢复与上下文预算**是各项目普遍的技术难点。

- **通道层 (Channel) 抽象与统一**：
    - **涉及项目**：NanoClaw、PicoClaw、Moltis、OpenClaw。
    - **具体诉求**：NanoClaw 正进行大规模 `channels` 重构（Wave A/B），旨在建立统一、可扩展的平台抽象层；Moltis 正扩展外部 ACP 代理生态；IronClaw 在修复 Telegram/Slack 连接流程。**多渠道、多代理的统一接入与管理**是平台型项目的共同演进方向。

- **安全边界与权限控制**：
    - **涉及项目**：OpenClaw、Hermes Agent、ZeroClaw、IronClaw。
    - **具体诉求**：安装策略警告确认（OpenClaw）、子进程凭据隔离与 ACL 权限修复（Hermes #77462）、SSRF 防护与 API Key 泄露修复（ZeroClaw）、审计记录缺失（IronClaw）。安全加固从“功能补丁”升级为**系统性架构设计**（如 ZeroClaw 的“运行时安全决策管线”）。

- **可观测性与控制力**：
    - **涉及项目**：OpenClaw、Hermes Agent、CoPaw。
    - **具体诉求**：代理行为轨迹跟踪（OpenClaw #77598）、定时任务运行可视化（CoPaw #7075）、Cron 脚本无声失败（Hermes #62587）。用户不再满足于“黑盒”的智能体，对**运行细节、资源消耗和诊断信息**提出了更高要求。

#### 5. 差异化定位分析

- **OpenClaw**：**全能型个人 AI 助手平台**。目标用户为极客与专业用户，追求功能覆盖和高度可定制，通过密集迭代快速集成新功能 (如 Gemini、DeepSeek)。
- **Hermes Agent**：**精品化桌面优先助手**。聚焦桌面端体验打磨（如跨平台窗口管理、无缝后台集成），注重快速迭代与安全加固并重，其 CLI/Desktop/Gateway 三层架构较为独特。
- **IronClaw**：**基础设施与性能优化导向**。侧重于内部架构（数据库写入压力）和自动化能力（调度、运行）、WASM 工具链等底层性能和工程效率，而非用户可见功能。
- **ZeroClaw**：**安全与协议标准驱动**。在安全加固（SSRF、API Key）和协议兼容（Chat Completions）上投入显著，社区化治理严谨（通过 RFC 决策），旨在构建生态级的基础设施。
- **PicoClaw / NanoClaw / CoPaw**：**插件化 / 多通道接入**。定位为 OpenClaw 的轻量级、更聚焦的替代或补充，在特定渠道（如 Telegram、飞书，微信）或特定场景（如编码、群协作）提供更垂直、更稳定的体验。它们更注重与 OpenClaw 的兼容性，同时修复其痛点（如 PicoClaw 针对静默失败漏洞的修复）。

#### 6. 社区热度与成熟度

- **快速迭代期 (High-Velocity)**：**OpenClaw** (高活跃但存在失稳风险)、**NanoClaw** (架构重构推进果断)、**CoPaw** (积极修复与新功能并行)、**LobsterAI** (批量收口积压功能)。
- **质量巩固期 (Consolidation)**：**Hermes Agent** (稳定发布，聚焦会话重构 )、**IronClaw** (大规模性能优化，但需解决 RC 版本回归)、**ZeroClaw** (大量安全与工程加固 PR 合入，收敛风险)、**PicoClaw** (快速修复 Bug，清理积压)。
- **稳定或停滞期 (Maintenance)**：**Moltis** (外部贡献驱动，内部进展平稳)、**NullClaw** (仅有依赖更新，处于维护模式)。

#### 7. 值得关注的趋势信号

1.  **“生产就绪”焦虑蔓延**：Meta 层面的“可观测性”与“可靠性”需求（如 OpenClaw #77598 追踪 Agent 轨迹, IronClaw #7720 升级崩溃）已成为社区最普遍的声音，且**远比新功能吸引力更迫切**。对开发者而言，在构建 Agent 时需将日志、追踪、优雅降级和失败恢复机制作为首要考量，而非附加功能。
2.  **性能关注点向数据库与资源消耗迁移**：IronClaw 的 `epic #7591` (数据库写入压力) 和 OpenClaw 的 `#91009` (CPU 满载进程) 表明，随着智能体在多轮、长任务场景下的深入使用，其**基础设施成本和效率**问题开始凸显。优化 token 消耗、数据库写入量和进程资源占用将成为提升竞争力的关键。
3.  **模型退役与适配成为常态化风险**：NanoClaw 的 PR #3299 (Codex GPT-5.4 退役) 和 Hermes 的 #88762 (Qwen 3.8 适配) 表明，**LLM 模型的快速迭代正在倒逼上层 Agent 框架进行更快的适配和版本管理**。维护者需建立与模型提供方的同步机制，并考虑模型版本回退与降级的平滑路径。
4.  **安全设计从“打补丁”走向“架构内置”**：ZeroClaw 提出的“运行时安全决策管线”和 Hermes 对子进程凭据的系统性隔离，标志着安全不再是孤立的修复，而是开始融入 Agent 的**核心架构与决策流程**中。这将是下一代企业级 Agent 平台的必备要素。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-18

## 1. 今日速览

NanoBot 项目在过去 24 小时保持中高活跃度：共产生 3 条 Issue 更新和 15 条 PR 更新，其中 5 个 PR 已合并或关闭，是近期合并量较为集中的一天。合并内容涵盖了此前困扰用户的 Telegram 轮询静默失联问题（#5156/#5301）、Agent 循环生成重复澄清回复的回归修复（#5410）、CLI 终端 UI 重构落地（#5406）以及 Gateway 进程稳定性改进（#5416）。当前仍有 10 个 PR 处于待合并状态，其中不少带有 `conflict` 标签，说明项目正经历较大规模的重构期，建议维护者优先处理冲突以保持合并通道畅通。新版本方面今日无发布。

## 3. 项目进展

今日合并/关闭的 5 个 PR 标志着多个重要修复和功能正式落地：

- **[#5416] fix(gateway): stabilize process identities** — Re-bin 合并的 PR，将 macOS 上依赖 locale 的 `ps lstart` 进程身份识别替换为 `proc_pidinfo` 原生出生时间戳，并统一了跨平台进程身份契约。这是 Gateway 在 macOS 上稳定性的关键修复，同时也清理了潜在的多语言环境兼容问题。
- **[#5410] fix(goal): stop repeating clarification replies** — linz12306 修复了持续目标（sustained goal）一个显著的回归问题：此前每次普通文本回复都会被自动重新注入目标延续，导致 `complete_goal` 反复触发、模型产生重复澄清。现在延续仅在真正的工具调用预算边界处保留。这与今日仍开放的 Issue #4864（`complete_goal` 无尽循环）直接相关，虽然根因不同（#5410 为 AgentRunner 侧逻辑，#4864 为 gateway 参数序列化），但都指向目标完成机制需要更严格的把控。
- **[#5406] feat(cli): add native TypeScript terminal UI** — Re-bin 重新提交了此前因误合并而从 `main` 回滚的终端 UI PR，

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-18

> 数据统计周期：2026-08-17 ~ 2026-08-18（基于 GitHub Issue / PR / Release 事件）

---

## 1. 今日速览

过去 24 小时，Hermes Agent 仓库保持 **高活跃度**：共产生 50 条 Issue 更新（80% 新开或活跃，20% 关闭）、50 条 PR 更新（其中 84% 仍在待合并状态），并发布了 **v0.20.3 补丁版本**（`v2026.8.16.2`），汇总自 v0.20.2 以来的约 125 个合并 PR。值得关注的是，**安全评审类 Issue 与修复 PR 占据显著比重**——多个问题直指子进程凭据隔离、文件系统 ACL、沙箱逃逸等安全边界，说明项目正在进行系统性的安全加固。社区侧，今日新开的高热度讨论集中在快速迭代验证（Qwen 3.8 回归）与安全修复体验优化上。整体而言，项目处于**功能迭代与安全加固并行的快速发布节奏**。

---

## 2. 版本发布

**v2026.8.16.2 (Hermes Agent v0.20.3)**

- **发布日期：** 2026 年 8 月 16 日
- **发布性质：** Patch Release
- **核心内容：** 该 tag 将 v0.20.2 之后合并的约 **125 个 PR** 汇总为一个稳定的标记版本，供下游消费（Docker 镜像、托管部署、全新安装）。
- **破坏性变更：** 发布说明未提及致命破坏性变更，但值得注意的悬而未决问题是横跨 CLI、网关、桌面端的 PR #63298（preserve queued prompt boundaries）与 #63292（interrupted completions as metadata）——它们重构了会话历史状态管理，若合并进下一个 minor 版本，需关注 API/会话恢复兼容性。
- **迁移注意事项：** 无明确迁移指引；建议下游消费者关注即将合并的会话状态重构类 PR（见下文"待处理积压"）。

---

## 3. 项目进展

今日无 PR 被显式标记为 "Merged" 合并（8 条关闭的 PR 中包括 2 条 `auto-fix` 机器人 PR（#88813）和 6 条关闭但未注明合并状态的 PR）。**更核心的进展体现在持续活跃的 PR 上**，这些 PR 已进入评论/更新周期，表明项目正处于功能整合与修复冲刺阶段。值得关注的进度信号：

- **企划级 PR #70370（fix(desktop): scrub credentials from embedded terminal PTY env）** — 由外部贡献者 `zapabob` 提交，直接对应 EPIC #83565（子进程凭据继承封闭战役）。该 PR 在 7 月 23 日创建后持续更新至 8 月 18 日，今日仍活跃，说明安全修复仍在评审中。
- **会话状态重构系列（#63292 / #62663 / #62587 / #57687 / #56034 / #60662）** — 全部由 `yingliang-zhang` 提交，分别处理中断补全、cron 会话回收、TUI 内存泄漏、压缩阈值等。这些 PR 在过去 24 小时均有更新，互相关联指向一个**更健壮的会话历史系统**。

**整体判断：** 项目正在同时推进两个方向：`安全性收敛`（子进程凭据、沙箱工具解析）和 `会话体验统一化`（队列边界、历史持久性、压缩机制）。合并速度放缓，但活跃 PR 数量多、注释深度高，说明评审过程严谨，而非停滞。

---

## 4. 社区热点

### 最热 Issue

1. **#66616 - [skills-index-watchdog] Skills index is stale or degraded**（48 条评论，活跃度断层第一）
   - 链接： [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616)
   - 状态： 自动探针报告索引超龄 3.8 小时（29.8h > 26h 限制）。已持续一个月，累计 48 条评论，却无 👍（非情感热度），说明这是一个**机器人/维护者之间反复调试的技术债问题**——可能因为 cron 重建失败、部署流程与索引生成之间存在竞争条件。高频更新但没有用户表达实际困扰，更像工程流程噪音。不过，它占用了大量 Issue 讨论空间，值得维护者关注根本性的流水线稳定性问题。

2. **#88661 - MCP 工具超时导致整组工具失效，无法自动重连**（2 条评论，新开于 8 月 17 日）
   - 链接： [Issue #88661](https://github.com/NousResearch/hermes-agent/issues/88661)
   - 诉求： 用户在配置了 300s 超时后，单个 MCP 工具超时竟然导致该 server 的**全部工具从 session 中注销**，且无自动重连。这一行为直接破坏生产可用性，属于**服务降级级别 Bug**。该问题虽新开，但暴露了 MCP 连接生命周期管理的一个明显缺陷。

3. **#88762 - Qwen 3.8 fails where Qwen 3.6 works fine**（1 条评论，创建于 8 月 17 日）
   - 链接： [Issue #88762](https://github.com/NousResearch/hermes-agent/issues/88762)
   - 状态： 用户 `SoftologyPro` 报告 llama.cpp + Qwen 3.8 GGUF 完全无法工作（无具体错误），回退到 3.6 则一切正常。这属于**配置/兼容性求助类**，但回帖区尚无来自维护者的指引，说明对新一代模型的适配尚未跟进，是潜在的用户摩擦点。

---

## 5. Bug 与稳定性

### 严重/高影响

- **[Bug] Windows 下终端工具崩溃：路径含空字符 (Issue #88810)**
  - 链接： [Issue #88810](https://github.com/NousResearch/hermes-agent/issues/88810)
  - 影响： 在 Windows 上执行 `python -m pytest` 会触发 `ValueError: embedded null character in path`，已定位到 `lifecycle_guard.py` 缺少 `ValueError` 捕获。崩溃路径清晰、影响本地直接开发效率，**紧急度中高**。尚无对应的修复 PR。

- **[Bug] 委托失败 API 调用消耗子 agent 预算，饿死回退链 (Issue #77305)**
  - 链接： [Issue #77305](https://github.com/NousResearch/hermes-agent/issues/77305)
  - 影响： 非致命但破坏用户体验——HTTP 429 等可重试错误会消耗有限迭代预算，导致该用的 fallback 模型没有机会被调用。诊断明确，修复方向清晰（应在 API 调用后再计数 budget），但 8 月 3 日提交后近两周无 PR 关联，**维护者响应滞后**。

- **[安全] Windows 上 `_secure_file` 是空操作，Secret 可被 SYSTEM/Administrators 读取 (Issue #77462)**
  - 链接： [Issue #77462](https://github.com/NousResearch/hermes-agent/issues/77462)
  - 影响： **CRITICAL**。`os.chmod` 在 Windows 上仅切换只读位，无法替代 ACL。`icacls` 实测证明权限完全开放。目前已经挂有 sweeper 标签（risk-security-boundary），但尚无修复 PR 链接。属于安全债，务必排期处理。

- **[安全] 明确空的 execute_code 权限集反而扩大为全部沙箱工具 (Issue #84271 → PR #88814)**
  - 链接： [Issue #84271](https://github.com/NousResearch/hermes-agent/issues/84271) / [PR #88814](https://github.com/NousResearch/hermes-agent/pull/88814)
  - 影响： 显式传入 `enabled_tools=[]` 本来意图是"零工具"，却被解析为"无限制"（fail-open）。**这是典型的权限绕过漏洞**，今日提交的 PR #88814 已变更为 deny-all 语义，修复推进及时。

### 中低影响

- `hermes_state.py` "database is locked"（#57921，已关闭） — 通过调整超时/锁逻辑关闭，但未看到根治方案讨论。
- Desktop 残留 `hermes serve` 孤儿进程（#80898、#76245，均已关闭） — 双端贡献者提交 PR 修复，已合入。
- `_secure_file` + MCP secret provenance 丢失（#77529） — 仍在讨论中，特别是 gateway 进程内 secret 跨刷新时的来源追溯问题，方向性进展。

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本

- **#84177 - Design Mode：桌面端元素选择桥接**（1 👍, P3）
  - 链接： [Issue #84177](https://github.com/NousResearch/hermes-agent/issues/84177)
  - 需求描述： 从 preview/browser 面板点击 DOM 元素，将 tag/class/bounding box 直接注入 Agent 上下文。同类型"可视化 Agent 交互"正与桌面端改进（如 #88744 的 macOS 窗透、#88816 的混合面板）形成呼应，说明**桌面端交互体验是当前迭代热点**，此类功能有较大概率被列入 backlog。

- **PR #88796 - 从不可取消的内存预取 provider 中扣留敏感上下文**
  - 链接： [PR #88796](https://github.com/NousResearch/hermes-agent/pull/88796)
  - 价值： 直接补上 Issue #84263（detached prefetch 线程泄漏）的安全缺口。该 PR 的合入能消除一类敏感信息外泄路径，属于**安全路线图中成熟的候选人**。

- **PR #88801 - skill-behavior-validation 技能（模拟回放式自验证）**
  - 链接： [PR #88801](https://github.com/NousResearch/hermes-agent/pull/88801)
  - 方向： 引入"行为验证"技能：对 SKILL.md 的重大编辑后，需重放旧例、运行负向对照，确保技能行为不退化。这不是紧急修复，而是**方法论创新**，体现项目在技能工程化上的长远规划。

### 社区呼声较高但暂缺实现

- **#11239 - env 引用支持 MCP Server 配置中的密钥**（2 👍, 自 2026-04-16 一直 open）
  - 链接： [Issue #11239](https://github.com/NousResearch/hermes-agent/issues/11239)
  - 这个请求已经积压了 4 个月：目前 `~/.hermes/config.yaml` 会以明文存 MCP 密钥，而 #77462 恰好证明 Windows 上这些文件权限也是开放的。**该 Issue 的安全重要性被低估**，建议维护者将其优先级提升并耦合安全修复一起解决。

---

## 7. 用户反馈摘要

| 用户声音 | 来源 | 情绪/痛点 |
|---|---|---|
| "对 Qwen 3.8 无法使用感到困惑，3.6 明明一切正常。" | #88762 | 困惑 + 挫败感，期望 Agent 对模型适配有更平滑的降级提示。 |
| "Cron 脚本（no_agent: true）在桌面上手动触发时毫无反馈，不知道跑没跑。" | #62587 (PR) | 缺乏可视性：用户希望至少有个 session 记录，哪怕是终端任务。 |
| "单个 MCP 工具超时，导致所有工具消失，完全不怀疑自己哪一步配置错了。" | #88661 | 问题难以自诊断，反馈路径太长。 |
| "Desktop 退出后残留的 serve 进程越来越多，白白吃内存。" | #80898 (已关闭) | 已修复，但曾造成用户资源被侵蚀的困扰。 |
| "example 插件（clicked N×）默认出现在生产版桌面状态栏，纯属视觉噪音。" | #76064 (已关闭) | 轻量但能识别出"产物不干净"的负面印象。 |

**总体趋势：** 用户最满意的部分集中在**桌面端的快速修复**（关闭的桌面插件默认启用、孤儿进程清理）；不满主要集中在**新模型适配验证周期**（Qwen 3.8）和 **MCP/子服务可靠性**（超时、断连）。

---

## 8. 待处理积压

| 类型 | 关键 Issue/PR | 年龄 | 备注 |
|---|---|---|---|
| **安全** | #77462 - Windows ACL 空操作 | 15 天 | CRITICAL，无关联修复 PR。 |
| **安全** | #77529 - MCP secret 来源元数据丢失 | 15 天 | 与 #77462 配合可形成完整密钥保护闭环。 |
| **功能** | #11239 - MCP 配置支持 env secret 引用 | 4 个月 | 长期未响应的合理请求，安全价值高。 |
| **Bug** | #77305 - 子代理预算被 API 调用耗尽 | 15 天 | 已定位根因，需要实现或指派。 |
| **Bug** | #66616 - 技能索引停滞 | 1 个月 | 半机器人问题，长期消耗维护时间。 |
| **PR** | #63298 - 保留排队提示边界（会话队列重构） | 5 周 | 大型重构，需要更谨慎评审，但接近合入状态。 |
| **PR** | #70370 - Desktop PTY 凭据清洗 | 4 周 | 安全增强，长时间待合并，希望维护者加速。 |

> **健康度小结：** 发布节奏稳定、安全修复响应及时（#84271 当天出修复 PR），但"CRITICAL 安全项"（#77462）和"关键 Bug"（#77305）均有超 2 周无 PR 的积压，需要投入更多维护带宽；长期积压的 #11239 建议与安全加固合并处理，优先提升。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-18** | **数据周期：2026-08-17 ~ 2026-08-18**


## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持中等活跃度，共产生 3 条 Issue 更新和 4 条 PR 更新，无新版本发布。本周期的核心特征是**问题解决效率提升**：与 Issue #3311（工具重复失败静默死循环）直接关联的修复 PR #3312 已关闭，意味着该影响 Telegram 生产环境的严重 Bug 已合入主线；同时，长周期 PR #2606（微信渠道增强）和 #271（配置环境变量覆盖修复）也在昨日完成合并，多个积压项得到清理。不过，新上报的 Issue #3339（Antigravity 429 错误）尚无人响应，且被标记为 stale 的 Issue #3287（IRC 长消息支持）长期悬而未决，社区对 IRC 渠道改进的耐心正在消耗。整体项目健康度良好，但**需警惕新 Bug 响应速度与 stale 陷阱**。


## 2. 版本发布

**今日无新版本发布。**


## 3. 项目进展

本周期合并/关闭了 3 个 PR，分别对应三个独立的能力修复/增强，项目整体向前推进的幅度适中且方向明确：

- **修复 Agent 工具失败静默死循环**（[PR #3312](https://github.com/sipeed/picoclaw/pull/3312)）— 关闭。该修复直接解决了用户在 Telegram 上提问后长时间无响应的问题（对应 Issue #3311）。核心改动是：当工具在单轮对话中以相同错误反复失败时，Agent 提前终止循环并向用户返回错误说明，而非静默重试至 `max_tool_iterations`。同时附带回归测试保障，防止后续迭代回退。这是本周期**质量价值最高**的合并，直接消除了一个生产环境可用性缺陷。
- **修复 config.json 缺失时环境变量不生效**（[PR #271](https://github.com/sipeed/picoclaw/pull/271)）— 关闭。该 PR 修复了 Fly.io 等仅依赖环境变量的部署场景下，因 config.json 缺失导致默认模型（glm-4.7）被加载且凭据缺失而启动失败的问题。修复方式为：无论是否读取配置文件，均强制执行 `env.Parse(cfg)`，并补充了回归测试。这属于**部署可靠性**的重要修正，对容器化/云部署用户影响直接。
- **增强微信渠道多实例支持与配置管理**（[PR #2606](https://github.com/sipeed/picoclaw/pull/2606)）— 关闭。作为大跨度 PR（2026-04-21 创建，近 4 个月后合并），覆盖后端、前端与文档三层，新增渠道目录与动态实例处理逻辑，强化非法渠道名校验/错误处理，并改善多实例场景下的流程稳定性。从合入时间跨度来看，该功能可能经历了较长的 review 与兼容打磨，值得期待其落地效果。

**关键指标**：3 个 PR 合并（其中 2 个修复 Bug、1 个功能增强），1 个新 PR 待合并（Slack 媒体上传修复），积压清理效果显著。


## 4. 社区热点

本周期社区热点集中在**高讨论度的老 Issue** 与 **新 Bug 首次报告**两个维度：

- **[Issue #3287 — IRC 长消息支持](https://github.com/sipeed/picoclaw/issues/3287)**（6 条评论，OPEN，stale）：这是当前**讨论热度最高**的 Issue，虽有 6 条评论但遗憾的是标记为 stale。用户诉求明确：IRCv3 协议下，超长消息（>512 字节）发送时应被 PicoClaw 视为单一完整消息处理，而非被客户端切割后作为多条消息。考虑到 IRC 渠道上长文本（如 README、代码片段）在 Agent 使用场景中常见，该需求对 IRC 用户的使用体验影响显著。持续 stale 状态可能意味着维护者优先级低于其他渠道（Slack、Telegram、微信）。
- **[Issue #3339 — Antigravity 429 错误](https://github.com/sipeed/picoclaw/issues/3339)**（0 条评论，OPEN）：最新上报，暂无任何响应。认证与模型发现均正常，但每次生成请求均固定返回 429 且无配额信息透出。作者已明确指出 OAuth 范围正确、模型列表正常获取，指向**客户端实现或参数传递层面**的问题而非配额消耗殆尽。该 Issue 值得快速跟进。


## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 说明 | 当前状态 |
|---------|-----------|------|---------|
| 🔴 高 | [Issue #3311](https://github.com/sipeed/picoclaw/issues/3311)（工具重复失败静默循环） | 生产环境（Telegram）下 Agent 长时间无响应，用户体验严重受损 | 已关闭，[PR #3312](https://github.com/sipeed/picoclaw/pull/3312) 已修复 |
| 🟡 中 | [Issue #3339](https://github.com/sipeed/picoclaw/issues/3339)（Antigravity 429 错误） | 合法认证下生成请求全部被拒，Antigravity 模型无法使用 | 无 fix PR，待排查 |
| 🟡 中 | [PR #3340](https://github.com/sipeed/picoclaw/pull/3340)（Slack 媒体上传缺 FileSize） | slack-go v0.23.1 要求 files.getUploadURLExternal 长度参数，PicoClaw 传零值导致上传被拒 | 有 PR 待合并 |

**稳定性评估**：今日没有新增崩溃级或数据丢失级 Bug 报告；上一个高危 Bug（#3311）已修复，整体稳定性处于**修复速率高于新增速率**的健康状态。


## 6. 功能请求与路线图信号

本周期值得关注的功能需求信号：

- **IRC 长消息语义化处理**（[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)）：用户建议将 IRC 切分的长消息重组为单一语义单元。鉴于 IRC 用户群体虽然相对小众但粘性高，若 PicoClaw 希望保持多渠道一致体验，该需求应在下一版本（或 backlog 清理阶段）纳入考量。
- **Better Antigravity 错误透传**（来自 [Issue #3339](https://github.com/sipeed/picoclaw/issues/3339) 的隐含需求）：作者指出 429 响应中没有透出配额详情，暗示需要更细粒度的错误分级与诊断信息。这一诉求对 Google 系模型使用者有参考价值。
- **来自 PR #2606 的微信多实例信号**：已合并的微信渠道增强暗示项目正在向**多实例/多渠道并行治理**方向演进，未来可能强化配置热更新与渠道隔离能力（参考同仓库 channel 目录结构变化）。

暂无新的 roadmap 文档或里程碑更新信号。


## 7. 用户反馈摘要

从本周期 Issues/PRs 评论与描述中提炼的真实反馈：

- **生产环境代理场景痛点已缓解**（[Issue #3311](https://github.com/sipeed/picoclaw/issues/3311)）：用户在 Telegram 上让 Agent 执行 `git` 命令（无凭据环境），等待数分钟无响应、直至 `max_tool_iterations` 耗尽仍未收到任何输出。这反映了**工具失败时的错误反馈机制**是用户可见的核心痛点，且不只限于 git，任何被安全护栏拦截的命令都会触发。该问题已修复，用户可感知的变化是：失败时快速得到明确错误，而非静默等待。
- **部署配置心智负担**（[PR #271](https://github.com/sipeed/picoclaw/pull/271)）：Fly.io 等平台只用环境变量、无 config.json 的场景下，默认模型 `glm-4.7` 被加载导致启动失败。这提示**文档中应更明确地区分"无配置文件"与"默认配置"两种状态**，避免用户因凭据缺失而困惑。
- **IRC 长消息体验被割裂**（[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)）：IRC 客户端会对超长消息自动切分，PicoClaw 会将多段当作独立消息分别回复，导致上下文断裂。用户期待的是"合一"语义处理，这是**语义完整性**层面的反馈。
- **Antigravity 配额问题缺乏上下文**（[Issue #3339](https://github.com/sipeed/picoclaw/issues/3339)）：所有条件正常但生成持续 429，且响应中无配额剩余信息，用户无法判断是消耗殆尽还是实现层缺陷。


## 8. 待处理积压

以下问题持续超过一周未获得有效维护者动作，建议关注：

- **[Issue #3287 — IRC 长消息支持](https://github.com/sipeed/picoclaw/issues/3287)**（OPEN，stale，创建于 2026-07-22，最后更新 2026-08-17）：讨论最热烈但已进入 stale 状态近一个月无维护者动作。若短期无排期计划，建议明确标注将推迟至下半年路线图，而非长期悬置。
- **[PR #3312 相关但未完全处理的潜在问题](https://github.com/sipeed/picoclaw/pull/3312)**：修复已合入，但 Issue #3311 中提到的"shell 安全护栏拦截时返回明确错误（而非静默失败）"这一更广泛诉求，可能需要进一步的 UX 改进跟踪。
- **[Issue #3339 — Antigravity 429](https://github.com/sipeed/picoclaw/issues/3339)**（创建于 2026-08-17）：虽然仅 1 天，但作为新 Bug 且影响一个模型通道的可用性，建议优先与作者互动确认复现细节，避免进入 stale 循环。

**长期 stale 风险提醒**：Issue #3287 如果在未来 1 周内无维护者回复，将大概率被自动关闭。若 IRC 渠道确实是 PicoClaw 支持的核心渠道之一，建议在关闭前保存讨论结论并迁移至 roadmap 文档。

---

*本报告由 AI 自动生成，数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)，统计窗口为 2026-08-17 至 2026-08-18。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-18** | **数据周期：2026-08-17 ~ 2026-08-18**


## 1. 今日速览

项目处于**高度活跃**状态，过去24小时内产生 4 条 Issue 更新和 42 条 PR 更新，其中 25 条 PR 已合并或关闭，17 条待合并。值得关注的是，gavrielc 领导的 **channels 通道层重构**（wave A/B）今日完成大批量合并（#3292-#3297、#3304、#3305、#3309、#3310），标志着这个跨多日的核心架构升级进入收尾阶段。此外，社区贡献者 glifocat 围绕 **任务（task）在聊天会话中的执行缺陷** 提交了 2 个 Issue（#3301、#3289）和 2 个对应修复 PR（#3303、#3291），是目前最集中的 Bug 修复方向。无新版本发布。


## 3. 项目进展

### 今日合并/关闭的重要 PR（共 25 个）

**通道层（Channels）重构 — 大批量推进（gavrielc）**

这是今日项目进展的核心主线，多个 PR 构成的"wave"系列持续合并：

- **#3310** [已关闭] — `fix(channels): restore the slack-formatting container skill lost in the upstream-main merge`。修复上游合并时静默丢失的 Slack 格式化容器技能文件，按字节恢复到合并前状态。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3310)
- **#3309** [已关闭] — `slack: defaults factory, membership, onboarding, a2a guard (wave B — per-thread everywhere)`。通道层 Wave B 收尾：Slack 全场景切换为 per-thread 会话模式，落地默认工厂、成员关系、引导（onboarding）、A2A 防护四块。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3309)
- **#3305** [已关闭] — `slack: shared channel-layer library + canvas cluster (wave A, includes main sync)`。同步 main 并落地前两个通道层模块：共享 Slack Web API 客户端与 canvas 集群。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3305)
- **#3304** [已关闭] — `channels: adapter-declared session-mode context defaults (threads stamp derived)`。新增可选的 `sessionMode` 适配器声明，使线程型平台可声明 per-thread 会话，替代硬编码。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3304)
- **#3297** [已关闭] — `setup: per-channel pre-step and companion-skill declarations for the wizard`。为设置向导增加两个通用扩展点：通道预步骤与伴随技能声明。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3297)
- **#3296** [已关闭] — `agent-runner: extendTool — additive MCP tool schema and description extension`。新增 MCP 工具注册表扩展点，允许模块叠加扩展基础工具的输入模式、描述与透传键。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3296)
- **#3295** [已关闭] — `channels: generic membership-event hook on the Chat SDK bridge`。新增 Chat SDK 桥上的通用成员事件钩子。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3295)
- **#3294** [已关闭] — `delivery: post-delivery hook with first-delivery context`。在出站交付循环中新增投递后钩子，附带首次投递标记。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3294)
- **#3293** [已关闭] — `router: session-created hook for brand-new engaged sessions`。新增会话创建钩子。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3293)
- **#3292** [已关闭] — `channels: bridge inbound-policy registration seam`。新增入站策略注册缝。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3292)

**Bug 修复（社区贡献者）**

- **#3303** [待合并] — `fix(tasks): keep run logs for task rows firing in chat sessions`（glifocat）。修复任务在聊天会话中触发时丢失运行日志的问题。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3303)
- **#3291** [待合并] — `fix: bound pending message polling`（glifocat）。为待处理消息轮询增加批量上限。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3291)

**其他待合并 PR（17 个待合并中值得关注的）**

- **#3311** [待合并] — `fix(agent-runner): route scheduled-task errors to the operator (#3223)`（wakqasahmed）。将定时任务错误路由给操作员。→ [链接](https://github.com/nanocoai/nanoclaw/pull/3311)

> **总结**：通道层重构是当前最大的架构级推进，从 hook 机制 → 默认工厂 → 完整模块落地的递进路径清晰，且各个 PR 堆叠关系明确。项目正在为多通道支持建立统一、可扩展的平台抽象层。


## 4. 社区热点

### 🔥 #3309 / #3305 — 通道层 wave A/B 合并（gavrielc）
[PR #3309](https://github.com/nanocoai/nanoclaw/pull/3309) 与 [PR #3305](https://github.com/nanocoai/nanoclaw/pull/3305) 在短时间内连续合并，覆盖了 Slack 通道的全链路——从默认工厂、成员管理到 onboarding、A2A 防护。这是项目迈向**多通道抽象**的关键步骤，且与 wave A（共享客户端库、canvas 集群）形成完整的前后衔接。社区对该系列的关注度高，反映了对 Slack 通道在 NanoClaw 中成为一等公民的期待。

### 🔥 #3311 — 定时任务错误路由（wakqasahmed）
[PR #3311](https://github.com/nanocoai/nanoclaw/pull/3311) 修复了一个微妙的设计缺陷：定时任务在触发时出错，此前会写成 `chat` 消息并复制 batch 的路由字段——但任务批次本来就不带路由字段（由 agent 在触发时决定投递目标），所以错误消息实际上无处可去。PR 将其改为路由给操作员。该 PR 同时修复了 [#3223](https://github.com/nanocoai/nanoclaw/issues/3223)，说明这是一个拥有明确用户反馈的真实问题。


## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高 — 数据丢失类

| Issue | 描述 | 状态 |
|-------|------|------|
| [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) | **任务在聊天会话中触发后"单行道"化**——日志丢失、回复被"吃掉"、序列不再列出。自 #2988（2.1.48 中的 one-door 任务投递）以来出现，影响所有在聊天会话中触发的旧任务。作者 glifocat 已提交修复 PR [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) | **有修复 PR 待合并** |

### 🟠 中 — 功能缺陷类

| Issue | 描述 | 状态 |
|-------|------|------|
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | **codex provider 发出未声明的 `file` ProviderEvent**——`/add-codex` 在主分支上 typecheck 失败，生成的图片被静默丢弃 | **开放中**，已有 1 条评论，时间跨度从 8 月 8 日至今 |
| [#1143](https://github.com/nanocoai/nanoclaw/issues/1143) | 文档仍引用已被移除的 `/data/env` 路径（文档类 Bug） | **已关闭** |

### 🟡 低 — 性能类

| Issue | 描述 | 状态 |
|-------|------|------|
| [#3289](https://github.com/nanocoai/nanoclaw/issues/3289) | **待处理消息轮询没有批量上限**——`getPendingMessages()` 将所有到期的待处理行全部加载到 JS 中再应用 `map`，积压量大会导致内存压力 | **有修复 PR**（[#3291](https://github.com/nanocoai/nanoclaw/pull/3291)）待合并 |


## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 路线图判断 |
|----------|------|------------|
| **会话运行时驱动拆封**（Session Driver Seam） | [PR #3306](https://github.com/nanocoai/nanoclaw/pull/3306) 引入 `src/drivers/`，Docker 为内置实现，纯增量添加；[PR #3307](https://github.com/nanocoai/nanoclaw/pull/3307) 将主机侧会话生命周期全部走 driver seam | **高置信度纳入下一版本**——为未来替代运行时（如本地进程、远程容器）铺路 |
| **本地 Web 聊天通道**（Local Web Chat） | [PR #3298](https://github.com/nanocoai/nanoclaw/pull/3298) 添加仅回环的本地 Web 通道适配器，带小型浏览器聊天 UI | 核心团队成员提交，有一定概率被纳入 |
| **MCP 工具扩展**（extendTool） | [PR #3296](https://github.com/nanocoai/nanoclaw/pull/3296) 允许模块叠加扩展 MCP 基础工具的 schema 与描述 | 已合入，预计进入下一版本能力集 |
| **Codex 版本升级** | [PR #3299](https://github.com/nanocoai/nanoclaw/pull/3299) 将 `@openai/codex` 从 0.138.0 升至 0.146.0，因为 GPT-5.4 将于 2026-08-31 从 Codex 退役 | **时间敏感**——需在本月底前合入 |


## 7. 用户反馈摘要

从今日更新的 Issues 与 PR 评论中提炼：

1. **任务在聊天会话中的行为异常是真实痛点**（#3301）：用户 glifocat 详细描述了任务在聊天会话中触发后的三重副作用——日志丢失、回复丢失、序列不显示，且问题影响面广（"在我的安装上每个旧任务都受影响"）。这表明 2.1.48 的 one-door 任务投递改动存在非预期回归。

2. **社区对会话语义的期待**（#3289）：glifocat 针对待处理消息轮询的内存问题给出了具体的性能分析，并给出了对应的修复方案——说明核心用户不仅在使用，还在积极协助优化内部实现。

3. **上游合并导致文件丢失的教训**（#3310）：Slack 格式化技能文件在 upstream-main 合并中被静默丢弃（无删除提交，只是合并解析时未保留），核心团队不得不按字节恢复。这提醒维护者在合并大 PR 后需增加文件存在性校验。

4. **配置默认值需要修正**（#3302）：OneCLI 网关的默认绑定地址不正确，导致 Docker 网桥地址与网关实际监听地址不一致。属于新手接入时容易踩的坑。


## 8. 待处理积压

### ⏳ 长期未响应的重要 Issue

| Issue | 创建时间 | 描述 | 提醒 |
|-------|----------|------|------|
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | 2026-08-08 | codex provider 未声明 `file` 事件 + 图片丢失，时间跨度 10 天 | 已有 1 条评论但无官方回复，且涉及功能失效（typecheck 失败），建议尽快回应 |

### 🚨 时间敏感项

- **[PR #3299](https://github.com/nanocoai/nanoclaw/pull/3299)**：`@openai/codex` 0.138.0 的默认模型 GPT-5.4 将于 **2026-08-31** 从 Codex 退役。若不及时合入升级，`/add-codex` 技能将在两周内部分失效。建议优先级提升。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-18

## 1. 今日速览

NullClaw 项目过去24小时整体活跃度较低：无新增 Issue、无版本发布，仅有 1 条由 dependabot 提交的依赖更新 PR（alpine 3.23 → 3.24）待合并。该 PR 创建于 2026-06-15，更新于 2026-08-17，距今两个月仍未合并，或反映维护者对容器镜像依赖更新持谨慎态度。项目当前处于稳定维护期，无新功能推进或重大修复合入迹象，建议关注 PR #956 的合并进程及后续 CI 状态。

---

## 2. 版本发布

过去24小时内无新版本发布。

---

## 3. 项目进展

**今日无 PR 被合并或关闭。** 唯一活跃的 PR #956 为依赖更新，尚未合并，未对项目功能产生影响。项目整体进展处于暂停状态。

- **PR #956（待合并）**：`ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group` — 由 dependabot[bot] 提交，将 Docker 基础镜像 alpine 从 3.23 升级至 3.24，属于常规安全/稳定性维护。该 PR 已开放 64 天，显示维护团队对自动依赖更新审查周期较长。
  - 链接：https://github.com/nullclaw/nullclaw/pull/956

---

## 4. 社区热点

过去24小时内无活跃社区讨论（无新 Issue、无新评论）。当前最受关注的条目仍为 **PR #956**（唯一活跃 PR），关注点集中在：

- **Docker 镜像基础版本升级**：alpine 3.24 包含安全修复和 musl libc 更新，社区对镜像安全性的诉求通过 dependabot 自动触发，但由于长期未合并，可能引起对项目维护响应速度的关注。
- 该 PR 评论数为 0，无明确社区反对或支持声音，诉求主要为**自动化依赖管理流程的及时性**。

链接：https://github.com/nullclaw/nullclaw/pull/956

---

## 5. Bug 与稳定性

过去24小时内**无新 Bug 报告**。项目当前无已知未解决的稳定性问题或回归异常记录。

---

## 6. 功能请求与路线图信号

过去24小时内无新功能请求。结合现有 PR 分析：

- PR #956（alpine 升级）暗示容器镜像维护是当前路线图中的持续任务，虽非用户可见功能，但属于基础设施稳健性投入。
- 无其他功能信号表明近期版本将引入新特性，项目路线图目前偏向稳定性和依赖维护。

---

## 7. 用户反馈摘要

过去24小时内无新 Issue 或评论可提炼用户反馈。结合历史上下文与 PR #956 的状态：

- 无用户对功能的直接反馈。
- 依赖更新长期未合并可能间接反映维护者对第三方变更的保守态度，用户可能因此延迟获得安全修复。

---

## 8. 待处理积压

以下条目长期未获响应或处理，建议维护者优先关注：

| 条目 | 类型 | 开放时长 | 备注 |
|------|------|----------|------|
| **PR #956**：alpine 3.23 → 3.24 依赖更新 | PR | 64 天 | 安全相关依赖升级，长时间未合并，可能阻塞后续镜像构建的 CI 稳定性更新。建议确认 CI 测试状态并给出合并或关闭的明确决定。 |

链接：https://github.com/nullclaw/nullclaw/pull/956

---

*本报告由 AI 自动生成，数据截止 2026-08-18 00:00 UTC。项目健康度评估：🔴 低活跃（维护期）。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-18

## 1. 今日速览

IronClaw 在过去 24 小时保持高度活跃：29 条 Issue 更新（其中 23 条新开/活跃、6 条已关闭）、44 条 PR 更新（28 条待合并、16 条已合并/关闭）、1 个新版本发布（v1.3.0-rc.1）。核心工作集中在三大方向：**数据库写入压力优化**（epic #7591 的 Tier 2/3 任务密集推进，多条相关 PR 已提交）、**通知系统基础设施化**（#7687-#7691 系列 Issue 定义持久化用户收件箱架构）、以及 **1.3.0-rc.1 的稳定性修复**（启动崩溃 #7720、libSQL 写通道饥饿 #7714）。项目整体健康度良好，但 RC 版本引入的回归问题和 libSQL 后端性能瓶颈需要优先关注。

---

## 2. 版本发布

### ironclaw-v1.3.0-rc.1（2026-08-17）

- **安装方式**：提供 shell 脚本与 PowerShell 脚本预编译二进制安装
- **风险提示**：⚠️ **存在已知回归** — 从 1.2.x 升级的部署在启动时崩溃循环（详见 Issue [#7720](https://github.com/nearai/ironclaw/issues/7720)），错误为 `unknown field activation_state in v2 extension installation row`，属于数据库迁移兼容性问题
- **迁移注意**：升级前建议备份数据库；RC 版本不建议在生产环境直接部署，建议等待修复 PR 合入后再升级

---

## 3. 项目进展

### 已合并/关闭的里程碑 PR

| PR | 内容 | 影响 |
|---|---|---|
| [#7710](https://github.com/nearai/ironclaw/pull/7710) | fix(slack): 多智能体评审修复 — 连接链接落地加固（7 项发现） | 改善 Slack 未关联用户引导体验，修复 #7682 的评审问题 |
| [#7703](https://github.com/nearai/ironclaw/pull/7703) | feat(wasm): 类型化 WIT 工具响应与 guest 迁移 | 能力响应规范化方案（#7627）PR 3，被 #7711 取代并合并 |
| [#7663](https://github.com/nearai/ironclaw/pull/7663) | fix(release): 前向移植 1.2 修复 + 线程索引修复 | Windows 文件系统/发布冒烟可靠性、JSON 输出、healthcheck curl 等修复 |

### 关键进展

- **数据库写入压力优化（epic #7591）**：Tier 2 中收益最大的 #7598（能力调用状态折叠，预计 −40 rows/turn）和 Tier 1 的 #7594（里程碑写入 CoalescingEventSink）已关闭；Tier 3 的多项任务（#7603、#7604、#7605）已拆分出更细的子任务（#7707）并持续推进
- **能力响应规范化方案（#7627）**：PR #7711 作为最终 PR 提交，叠加在 #7692 之上，取代 #7703，实现类型化工具响应、guest 迁移和分发错误清理

---

## 4. 社区热点

| Issue/PR | 评论数 | 讨论焦点 |
|---|---|---|
| [#7275](https://github.com/nearai/ironclaw/issues/7275)（已关闭） | 4 | 跨会话持久记忆的可验证性 — 用户反馈 #7185 中报告信息无法跨对话可靠召回，引发对持久记忆工具覆盖度的讨论 |
| [#7591](https://github.com/nearai/ironclaw/issues/7591) | 3 | 数据库写入压力降低 epic — 四个并行代码审计发现每个典型 turn 产生大量不必要的存储写入 |
| [#7701](https://github.com/nearai/ironclaw/issues/7701) | 2 | 资源管理器中 reserve+reconcile 合并为一次写入 — 预计每次 turn 减少 11 行写入 |

**社区诉求分析**：最活跃的讨论集中在性能优化（写入压力）而非新功能，反映出用户对扩展性和成本敏感度的提升。epic #7591 成为当前最受关注的技术债清理项目，社区（及核心团队）期望通过该 epic 将每次 turn 的数据库写入量降低约 60%。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 **严重** | [#7720](https://github.com/nearai/ironclaw/issues/7720) | 1.3.0-rc.1 从 1.2.x 升级后启动崩溃循环，HTTP/SSH 端口不可用 | 无修复 PR，需紧急处理 |
| 🟠 **高** | [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL 共享写连接饥饿导致资源管理器级联失效，约每 40s 抖动一次 | 已有 fix PR [#7717](https://github.com/nearai/ironclaw/pull/7717) |
| 🟡 **中** | [#7702](https://github.com/nearai/ironclaw/issues/7702) | 义务审计记录（AuditBefore/AuditAfter）在生产环境中从未写入，违反 host-api 契约 | 无修复 PR |
| 🟡 **中** | [#7705](https://github.com/nearai/ironclaw/issues/7705) | CoalescingEventSink 关闭时无限阻塞 + pending_flush_error 锁存 | 无修复 PR，从 #7631 评审中发现的非阻塞问题 |
| 🟢 **低** | [#7716](https://github.com/nearai/ironclaw/issues/7716) | 添加 MCP 服务器流程缺少 Bearer 认证和 STDIO/HTTP 传输选项 | 无修复 PR |
| 🟢 **低** | [#7715](https://github.com/nearai/ironclaw/issues/7715) | Telegram 连接流程缺少 Bot/个人账户选择 | 无修复 PR |

**QA 套件分析**（#7704）：clawbench 84 个非通过用例中，最大可修复缺陷是存储写通道竞争，与 #7714 同源。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 Issue | 相关 PR | 可能纳入版本 |
|---|---|---|---|
| GitHub Projects v2 字段操作 | [#7719](https://github.com/nearai/ironclaw/issues/7719) | 无 | 下一版本（v1.4.0？） |
| MCP 服务器 Bearer 认证 + 传输选项 | [#7716](https://github.com/nearai/ironclaw/issues/7716) | 无 | 取决于 bug_bash 优先级 |
| 持久化通知收件箱（全套） | [#7687](https://github.com/nearai/ironclaw/issues/7687)-[#7691](https://github.com/nearai/ironclaw/issues/7691) | 无（Issue 阶段） | v1.4.0 候选 |
| 调度运行确定性无投递结果 | [#7647](https://github.com/nearai/ironclaw/issues/7647)（已关闭） | [#7650](https://github.com/nearai/ironclaw/pull/7650)（从运行时证据推导运行结果） | v1.3.0 |
| 语义化 Google Docs 编辑工具 | 无独立 Issue | [#7718](https://github.com/nearai/ironclaw/pull/7718) | v1.3.0 |
| 原生结构化输出终结 | 无独立 Issue | [#7693](https://github.com/nearai/ironclaw/pull/7693) | v1.3.0 |
| 自动化任务"立即运行" | 无独立 Issue | [#7708](https://github.com/nearai/ironclaw/pull/7708) | v1.3.0 |

**路线图信号**：核心团队在 1.3.0 中大幅扩展自动化能力（run-now、确定性结果、语义文档工具），同时 v1.4.0 的候选功能已开始累积（AGENTS.md 编辑同步 #3762、通知收件箱 #7687-#7691）。

---

## 7. 用户反馈摘要

- **跨会话记忆不可靠**（#7275）：用户明确表示"一个对话中显式建立的信息，在后续对话中无法可靠召回"。尽管 IronClaw 已有持久记忆工具，但生产环境中的实际行为与预期有差距。该 Issue 已关闭，摘要显示是"验证"性质的工作，但底层问题是否解决需进一步观察。
- **Slack 未关联用户引导暴露隐私问题**（#7681）：用户 @机器人时收到的连接引导信息在公共频道中所有人可见，且引导流程需要多步手动操作。PR #7682 和 #7710 已解决。
- **QA bug_bash 反馈**（#7715、#7716）：Telegram 连接流程缺少模式选择导致用户困惑，MCP 服务器添加流程缺失认证选项——表明**连接器/集成流程的用户体验仍需打磨**。
- **自动化通知缺失**（#7687）：当前通知中心仅支持自动化审批，用户无法获知运行失败、完成等关键状态，需要时跳转到 WebUI 查看。

---

## 8. 待处理积压

### 长期未关闭的重要 Issue

| Issue | 创建日期 | 天数 | 标签 | 说明 |
|---|---|---|---|---|
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | 2026-05-18 | 92 天 | suggested_P1, customer, v1.4.0 | **WebUI 编辑 AGENTS.md 不更新系统提示** — 已标记 P1 和 v1.4.0，但长期未解决，影响所有通过 WebUI 管理身份文件的用户 |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | 2026-08-01 | 17 天 | OOBE | WebChat v2 首次运行引导原型 — contributor 提交的 XL 规模 PR 长期未合并 |

### 需维护者关注

- **#7720 是发布阻断级问题** — RC 版本无法从 1.2.x 升级，需立即修复
- **#7714 的修复 PR #7717 需尽快评审合入** — libSQL 后端的性能问题会影响所有使用该后端的部署
- **epic #7591 的 Tier 3 任务拆分合理但需按优先级排序** — 建议优先处理 #7707（真实节省 14 rows/turn）和 #7701（−11 rows/turn）

---

*本日报基于 2026-08-18 的 GitHub 数据自动生成，数据覆盖过去 24 小时。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-18

> 数据来源：GitHub (netease-youdao/LobsterAI)，统计窗口：2026-08-17 ~ 2026-08-18

---

## 1. 今日速览

过去24小时项目活跃度**中等偏高**，核心特征为「集中合并 + 少量新提交」：共关闭/合并 18 个 PR（其中 13 个为 4 月积压的历史 PR，今日批量处理），新增 3 个 PR 待合并，另有 7 个 Issue 处于活跃讨论状态（6 个为 4 月创建的 stale 问题）。今日最值得关注的信号是 **DeepSeek Harness (DSH) 系列 PR 全部被合并**，标志着 LobsterAI 对 DSH 运行时/模型提供方的支持正式落地；同时 `OrcaRouter` 提供方集成 PR 已进入待合入队列，本地模型生态接入面正在持续扩大。Issue 侧今日无新增缺陷报告，活跃讨论主要围绕历史遗留问题与一个外部项目的自荐（#2500）。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

> 以下为本统计窗口内被合并/关闭的 PR 中，对项目功能与体验有实质性推进的条目。

### 🔖 功能新增

| PR | 标题 | 意义 |
|---|---|---|
| [#2502](https://github.com/netease-youdao/LobsterAI/pull/2502) | feat: dsh engine integration | 主进程集成 DSH 引擎（macOS 平台），为后续 DeepSeek Harness 作为运行时/提供方铺路 |
| [#2505](https://github.com/netease-youdao/LobsterAI/pull/2505) | feat: dsh process launcher | 配套 DSH 引擎的进程启动器，打通渲染进程与主进程的 DSH 生命周期管理链路 |
| [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506) | docs: add DeepSeek Harness (dsh) runtime setup instructions | 补充 DSH 运行时安装文档，保证功能与文档同步落地 |
| [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) | feat(cowork): 聊天窗口新增悬浮「滚动到底部」按钮 | Cowork 聊天长对话场景下的核心体验补足，对齐主流聊天应用（微信、Slack、ChatGPT）交互规范 |
| [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) | feat(cowork): AI 回复消息新增「重新生成」按钮 | 对 AI 回复不满意时无需整轮重发，可单条重新生成，降低操作成本 |
| [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640) | feat(tool-result): 工具执行结果增加一键复制按钮 | 统一 Bash 终端输出、Diff 视图、标准工具结果与 AI 文本消息的复制体验 |
| [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) | feat(modal): 所有弹窗统一支持 Esc 键关闭 | 统一全部弹窗交互行为，消除权限确认、Agent 创建等弹窗无法用 Esc 关闭的割裂体验 |
| [#1642](https://github.com/netease-youdao/LobsterAI/pull/1642) | feat: add right click menu | Windows 资源管理器右键菜单集成，实现 `LobsterAI --open-directory="%V"` 直达打开目录 |
| [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) | feat(openclaw): upgrade OpenClaw to v2026.4.12 | OpenClaw 运行时升级，同步修复微信插件兼容性问题（修复 `resolvePreferredOpenClawTmpDir is not a function` 报错） |
| [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) | feat(agent): 为每个 Agent 添加独立工作目录配置 | 非 main Agent 可配置专属工作目录，未配置时自动回退 `{STATE_DIR}/workspace-{agentId}/`，数据隔离能力提升 |
| [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) | feat(cowork): group session list by time period | 会话列表按「今天 / 昨天 / 7 天内 / 30 天内 / 更早（按月细分）」分组，定位历史会话无需一屏屏翻找 |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | feat(cowork): 非 main agent 首页欢迎区域显示 agent 名称和描述 | 从固定文案改为动态展示（「Hi，我是内容总结助手」），增强多 Agent 模式下的辨识度与个性化体验 |

### 🐛 修复类

| PR | 标题 | 意义 |
|---|---|---|
| [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) | fix(electron): add edit context menu for text inputs | 修复 Electron 主窗口文本输入框无剪切/复制/粘贴右键菜单的问题（仅作用于原生文本输入控件，不影响聊天正文与自定义菜单） |
| [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | fix(skills): portal upgrade progress overlay | 修复技能升级进度浮层渲染错位问题，统一挂载到 document.body 保证全壳层覆盖 |
| [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) | fix(log): 脱敏导出日志中的敏感信息 | **安全修复**：导出日志存在明文 API Key / Bearer token / OAuth token，新增主进程日志脱敏工具集中处理敏感 header 与请求/响应体 |
| [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) | fix(Settings): 将 Qwen 控制台链接从灵积迁移至百炼 | 阿里云灵积（DashScope）控制台即将下线，迁移至百炼入口，防止用户点击失效页面，零行为变更 |
| [#1669](https://github.com/netease-youdao/LobsterAI/pull/1669) | fix(设置页模型提供商体验) | 修复「测试连接」按钮禁用判断（缺失模型/BaseURL 时不可点），修复自定义提供商弹窗显示 `custom_0` 内部 key 的问题 |
| [#1639](https://github.com/netease-youdao/LobsterAI/pull/1639) | fix(i18n): 修复多处按钮 tooltip 硬编码英文未国际化 | 统一 WindowTitleBar、SkillsButton、Schema 等多处硬编码英文提示，中英文环境下均可正确显示 |

**小结**：今日合并的 PR 中，4 月积压的 13 个 PR（#1636-#1669）权重极高，涉及 Cowork 交互补全、i18n 国际化、敏感信息脱敏、Agent 独立工作目录、右键菜单、OpenClaw 升级等核心体验与安全能力，整体推进幅度可观。

---

## 4. 社区热点

今日讨论热度最集中的 Issue 为：

### [#2500 — VOKO：让 AI Agent 跨平台即时通信与群协作](https://github.com/netease-youdao/LobsterAI/issues/2500)
- 作者为开源项目 VOKO 的自荐帖，定位「AI 智能体的跨平台通信层」，目标解决不同 Agent 框架/IM 渠道无法互通的问题，已接入 OpenClaw、VOKO IM、AstrBot
- 诉求核心：推动 **A2A（Agent-to-Agent）标准化**
- 评论 1 条（作者本人），获得 0 👍
- 此类自荐帖在开源项目中较为常见，不一定代表主流社区诉求，但其提出的 A2A 标准化方向与 LobsterAI 的多 Agent 协作愿景存在结合点，值得观察

### 另一讨论热点为 PR [#2504 — OrcaRouter provider integration](https://github.com/netease-youdao/LobsterAI/pull/2504)
- 当前为 **OPEN 待合并**状态，是今日唯一一个新提交且尚未处理完的功能型 PR
- 功能：将 OrcaRouter（Anthropic/OpenAI 兼容的 LLM 网关）接入 LobsterAI 的 provider 注册体系，与现有 OpenRouter 保持一致的端到端对接
- 意义：模型路由层再增加一个可用选择，尤其对需要 namespaced model IDs 的用户有实际价值

---

## 5. Bug 与稳定性

> 今日无新增 Bug 报告。活跃的 Bug 类 Issue 均为 4 月创建、今日被标记为 `stale` 的历史遗留问题：

### 中高关注度（功能不可用类）

| Issue | 描述 | 严重程度 | 是否有 Fix PR |
|---|---|---|---|
| [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | **ollama 本地模型无法使用**（qwen3 至 gemma4 均报错），cherrystudio 客户端调用正常，说明 Ollama 本身无问题 | **高**（本地模型是核心使用场景） | **无** |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | **除 SSE 之外的 MCP 引擎无法找到并使用** | **高**（MCP 生态主打通用的 stdio 方式） | 无 |
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | groupPolicy 每隔一段时间被自动覆盖为 allowlist，用户配置无法持久化 | 中（配置丢失类） | 无 |
| [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) | 手动创建定时任务点击保存时提示「还有内容未保存」（实际已保存成功），Win11 + 4.8 版本 | 中（提示误导，非功能失败） | [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) 有相关前端修复，但主因未定位 |
| [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | md 文件转 word 执行到一半提示 `sse response finish reason: full`，上下文窗口达上限导致中断 | 中（长文档场景受限） | 无 |

**安全类修复提醒**：今日合并的 [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661)（日志脱敏）解决了导出日志中 API Key 明文泄漏的问题，建议维护团队复核是否有其余敏感路径（如上传的诊断包、崩溃报告）存在类似泄漏风险。

---

## 6. 功能请求与路线图信号

| Issue/PR | 诉求 | 与现有 PR 的关联 / 被纳入下版的概率 |
|---|---|---|
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | **基于 Markdown 的工作流编排**：期望 main agent 能感知并调动其他 agent 协作完成复杂任务（当前各 agent 互不感知，除非由 main agent 自行 spawn） | 与今日合并的 [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668)（Agent 独立工作目录）互补，后者可视为「agent 自治」的第一步，但 agent 间编排仍需 API 层打通，预计后续版本会有所动作 |
| [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504) | OrcaRouter 提供方集成（OPEN 待合并） | 提供方列表在持续扩充（OpenRouter → 百炼 → OrcaRouter / DSH），本地模型链路（Ollama）和网关链路（OrcaRouter）作为两个方向并行推进，大概率进入下一版 |
| [#2502](https://github.com/netease-youdao/LobsterAI/pull/2502) + [#2505](https://github.com/netease-youdao/LobsterAI/pull/2505) + [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506) | DSH 引擎集成（已合并） | DSH 作为新型模型运行时进入支持列表，加上 [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) 所反映的 Ollama 兼容问题，说明「本地模型支持」是当前用户的核心诉求与项目投入方向 |
| [#2500](https://github.com/netease-youdao/LobsterAI/issues/2500) | VOKO 项目自荐：AI Agent 跨平台通信层与群协作 | 仅 1 条评论、0 赞，社区响应度低。但其「A2A 标准化」的思路与 LobsterAI 多 Agent 协作愿景有交叉，可做一次生态交流，但短期不会进入路线图 |

---

## 7. 用户反馈摘要

从今日活跃的 7 个 Issue 评论中提炼的用户真实声音（含 4 月创建、今日有更新的评论）：

- **本地模型是核心诉求，当前体验割裂**（[#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)）：用户明确指出「Ollama 本身没有问题」，cherrystudio 客户端可正常调用模型与 MCP，但 LobsterAI 报错。**说明问题定位在 LobsterAI 与 Ollama 的兼容层，而非模型本身**，建议优先排查。
- **MCP 支持不均衡**（[#1662](https://github.com/netease-youdao/LobsterAI/issues/1662)）：仅支持 SSE 传输方式的 MCP 引擎，stdin/stdio 方式无法使用，影响面较大。
- **配置被自动覆盖**（[#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)）：groupPolicy 被周期性重置为 allowlist，用户自定义配置无法持久化，对安全设置类功能是较严重的体验问题。
- **长文档任务中断**（[#1671](https://github.com/netease-youdao/LobsterAI/issues/1671)）：调用过程中上下文达到上限（`finish reason: full`），md 转 word 执行到一半失败，需要节流策略或自动分段支持。
- **Agent 间不可协作**（[#1644](https://github.com/netease-youdao/LobsterAI/issues/1644)）：用户明确反馈 main agent 感知不到其他 agent 的存在，即使通过 `memory_search` 和 `agents_list` 也查不到，只能手动让 main agent spawn 新 sub-agent。**这是多 Agent 协作能力的结构性短板**，且用户已有明确的「md 工作流编排」诉求。

---

## 8. 待处理积压

### 高优先级（4 个月以上未解决且有实际使用影响）

| 类型 | 编号 | 标题 | 活跃状态 | 建议 |
|---|---|---|---|---|
| Issue | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | ollama 的本地模型没法使用 | 4 个月+，仅 1 评论 | **建议优先排查**。本地模型是核心场景，且 CherryStudio 同环境可用，问题大概率出在 LobsterAI 的兼容层，值得主动定位并给出明确结论（修复 or 临时解决方案） |
| Issue | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | 除 sse 之外的 mcp 无法使用 | 4 个月+，仅 1 评论 | MCP 生态主流通用方式（stdio）不可用，属于影响面广的功能缺缺失，建议提升排期优先级 |
| Issue | [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) | 手动创建定时任务提示「还有内容未保存」 | 4 个月+，仅 1 评论 | Bug 虽不阻断功能，但「提示与实际结果不符」会显著降低用户信任度，且与 [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501)（技能升级浮层修复）同属前端交互类问题，可一并排查 |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): bump the electron group（electron 40.2.1 → 43.4.0） | 4 个月+，dependabot 自动提交 | 依赖版本跨度较大（40 → 43），长时间未处理可能积累兼容性问题，建议排期合入并重点回归 Electron 主进程相关功能 |

### 低活跃度但值得留意的长期积压

| 类型 | 编号 | 标题 | 活跃状态 |
|---|---|---|---|
| Issue | [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | groupPolicy 每过一会就被覆盖为 allowlist | 4 个月+，2 评论，属配置持久化缺陷，建议定位 |
| Issue | [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | 许愿：基于 md 的工作流编排（agent 间调度） | 4 个月+，1 评论，属功能请求，对多 Agent 方向有指导意义 |
| Issue | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | md 文件转 word 一半提示 sse response finish reason: full | 4 个月+，1 评论，长上下文场景提醒，建议后续补充任务分片能力 |
| PR | [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | feat(cowork): 非 main agent 首页欢迎区域显示 agent 名称和描述 | **OPEN**，4 个月+，今日未合并，建议尽快确认是否合入 |
| PR | [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504) | feat: add OrcaRouter provider integration | **OPEN**（今日新提交），待合入队列 |

---

**整体项目健康度评估**：今日批量处理了大量积压 PR（13 个 4 月 PR 全部合并），说明维护者正在进行一轮集中性的清理与能力收口，节奏健康。但 Issue 侧积压问题（Ollama 兼容、非 SSE MCP、配置覆盖、agent 间协作）均为 4 个月未决的高影响问题，建议在集中合并告一段落后，将精力转向这几类核心体验问题，并针对 #1635（Ollama）和 #1662（MCP）给出明确的技术结论或修复排期。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-18

## 今日速览

项目活跃度中等偏上，24小时内共有12条Issue/PR动态更新，其中9条PR活跃（3条待合并），3条Issue有更新（仅1条为新增活跃）。核心维护者 `Lstarsky0` 正在高效推进两个高价值修复（heartbeat配置语义修正、cron活跃时段生效），均已在今日提交PR待合并。值得注意的是，一度阻塞CI的格式门禁问题（#1202）已在今日关闭。新功能方面，MiniMax Code ACP代理（#1204）已合并，WebUI RPC超时配置（#1130）也已落地，项目正在稳步扩展外部代理生态并增强可配置性。长期未关闭的Podman兼容问题（#1095）依然悬而未决，是当前最需关注的风险点。


## 版本发布

无新版本发布。


## 项目进展

今日共合并/关闭6个PR，另有3个新的修复PR处于待合并状态，整体推进节奏良好，主要进展集中在以下方向：

- **外部代理生态扩展**：PR #1204 新增了 MiniMax Code ACP 代理支持，并将其纳入默认的可执行文件检测与代理注册表，同时补全了自动发现和手动 TOML 配置文档。这表明 Moltis 正在持续扩大对不同 ACP 外部代理的兼容性。
- **WebUI 可配置性提升**：PR #1130 落地了 WebUI RPC 超时时长的可配置能力，直接响应用户对于 `rpc timeout` 的请求（对应 Issue #1127，已在今日关闭）。
- **Shadow DOM 穿透效率优化**：PR #1103 在浏览器快照和基于引用的查找路径中实现了对 Shadow DOM 的穿透查找，替代并改进了原有 PR #1100，是一项对浏览器自动化能力的重要增强。
- **依赖与工程质量维护**：Dependabot 推送的 cargo 依赖批量升级（#1207，含 wasmtime-wasi、cmov、quinn-proto、serde_with）以及 `tar` 0.4.46 补丁升级（#1087）均已合并；CI 格式门禁于 main 分支的失败（#1202）也已在今日关闭（虽然对应的行数超限文件尚未看见修复 PR，但门禁问题被认为是已解决状态）。

社区力量是今日贡献主力，外部作者（`penso`、`hetaoBackend`）与 `dependabot[bot]` 合计贡献了 5 个已合并 PR，体现了项目良好的外部协作生态。


## 社区热点

**#1095 Podman 兼容问题** — [Issue链接](https://github.com/moltis-org/moltis/issues/1095)

该 Issue 自 6 月 3 日创建以来，持续处于活跃讨论状态，今天再次被更新，评论数达到2条。用户报告 Moltis 在 Podman 环境下无法正常工作，这大概率与内外部容器运行时的适配有关。在用户对替代容器运行时需求日益增长的背景下，这是一个值得关注的高频诉求点，但长期悬而未决。


## Bug 与稳定性

按严重程度排列，今日共持续跟踪2个Bug相关Issue，另有2个开放性Bug修复PR待合入：

| 严重程度 | Issue/PR | 状态 | 摘要 | Fix PR |
|---------|----------|------|------|--------|
| 🟠 高 | [#1208 fix(cron): honor heartbeat active hours when the scheduler fires](https://github.com/moltis-org/moltis/pull/1208) | 待合并 | `heartbeat.active_hours` 配置项从未生效。`is_within_active_hours` 函数虽然已实现、文档化和测试，但 `cron` crate 中没有任何代码调用它，心跳被简单地注册为固定间隔任务，调度器完全忽略了活跃时段限制。 | 无（本身即为修复PR） |
| 🟠 高 | [#1209 fix(gateway): treat heartbeat.update params as a patch, not a whole config](https://github.com/moltis-org/moltis/pull/1209) | 待合并 | `heartbeat.update` API 将请求参数直接反序列化为 `HeartbeatConfig` 并整体覆盖原配置。由于结构体标注了 `#[serde(default)]`，调用方未传入的字段会被重置为默认值，而非保留原值，造成配置意外丢失（修复 #1187）。 | 无（本身即为修复PR） |
| 🟡 中 | [#1202 Format CI gate is red on main](https://github.com/moltis-org/moltis/issues/1202) | **已关闭** | 两个文件（`store.rs` 1799行、`admin.rs` 1531行）超过 1500 行上限导致格式门禁失败。 | 已关闭，未有对应修复PR |
| 🟢 低 | [#1095 Podman 兼容问题](https://github.com/moltis-org/moltis/issues/1095) | 开放中 | Podman 环境不可用，该问题已存在两个多月仍未有解决，但低于直接构建/运行错误带来的冲击。 | 无 |


## 功能请求与路线图信号

- **RPC 超时配置已落地（已响应）**：[#1127](https://github.com/moltis-org/moltis/issues/1127) 请求允许配置 RPC 超时时间，对应的实现 [#1130](https://github.com/moltis-org/moltis/pull/1130) 已在今日合并，标志该需求已在下一版本范围内落地。
- **外部代理模型与努力程度选择（已合并）**：[#1125](https://github.com/moltis-org/moltis/pull/1125) 为外部代理提供商（`/model`）引入了 `models` 和 `efforts` 的一等配置支持和设置界面分组展示，扩展了模型选择与管理能力。
- **托管文件库与设置浏览器（新交付）**：[#1206](https://github.com/moltis-org/moltis/pull/1206) 引入基于数据目录的持久化文件库，提供认证流式列表/上传/下载/创建/移动/删除API；配套 Finder 风格设置浏览器、`MOLTIS_FILES_DIR` 发现机制，并为 Docker/Podman/Apple Container 提供只读默认挂载，预计将显著增强文件操作与集成能力。该 PR 仍处于待合并状态。

综合来看，上述新增功能已形成一系列面向可配置性、文件管理和外部代理生态的增强，正逐步进入主分支。


## 用户反馈摘要

从今日活跃的 Issue 评论中可以看到用户的核心诉求集中在配置语义和遗忘的角落：

- **Bug 反馈质量高**：Issue #1209（heartbeat.update 参数覆盖整个配置）与 #1208（active_hours 从不生效）都属于被用户仔细阅读逻辑和测试后揪出的深度 bug，说明有社区用户在使用过程中对 heartbeat 配置做过深度观察，期待更精细的时序逻辑。
- **对长期未修复问题的耐心尚存**：#1095 的评论虽不多，但用户明确表示在寻找替代方案或等待修复，属于一种“不满意但保持关注”的状态。因 Podman 用户基数日渐扩大，值得优先排期处理。


## 待处理积压

- **[Bug] #1095 Podman 兼容性问题**（已开放 2.5 个月）— [Issue链接](https://github.com/moltis-org/moltis/issues/1095)：这是当前最重要的积压问题。用户报告 Podman 不可用，且没有任何修复 PR 在途。容器环境兼容性是主流用户日益依赖的基础能力，建议在下一迭代优先处理。
- **大型 PR 待审查** — [#1206 添加托管文件库与设置浏览器](https://github.com/moltis-org/moltis/pull/1206)：这是较大的功能集 PR，虽已提交但尚未合并，建议尽快安排核心维护者做代码Review，避免与新提交产生大范围冲突。
- **新版式门禁风险** — #1202 的close 状态尚需验证（若文件超限问题仍未处理，CI 在下一次提交很可能会再次转红）。若相关重构已在其他 PR 中一并完成，建议维护者在 commit 历史中明确标注对应关系，避免回归不透明。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。以下是基于 CoPaw (github.com/agentscope-ai/CoPaw) 2026-08-18 的 GitHub 数据生成的项目动态日报。

---

### CoPaw 项目动态日报 (2026-08-18)

#### 1. 今日速览

今日 CoPaw 项目活动度**非常高**，共产生 14 条 Issue 更新和 33 条 PR 更新，显示出强劲的开发与社区互动势头。一方面，官方在快速迭代，今日合并/关闭了 20 个 PR，修复了包括媒体 Token 计算错误、GitPanel 样式失效、上下文压缩后状态不同步等多个关键问题；另一方面，社区反馈热烈，涌现出多个讨论激烈的 Bug 报告（如多 UI 会话冲突、插件热加载丢失）和功能请求（如频道独立模型、技能池搜索）。目前项目仍处于 v2.1.0 版本的快速修补与功能增强期，尚未发布新版本。

#### 2. 版本发布

今日无新版本发布。

#### 3. 项目进展

今日共有 20 个 PR 被合并或关闭，主要集中在 **Console 体验优化**、**Bug 修复**和**集成完善**三个方面，项目整体稳定性和可用性得到显著提升。

- **Console 稳定性与体验优化**：
    - [PR #6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) 修复了将图片 base64 数据误算为文本 Token 的问题，避免上下文窗口被快速占满。
    - [PR #6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) 修复了执行 `/compact` 命令后，上下文使用率环形指示器不更新的问题。
    - [PR #7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) 优化了 PawApp 的启动流程，新安装的应用无需手动刷新页面即可使用，更新应用时也能正确加载新前端。
    - [PR #7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) 为聊天中的媒体附件增加了统一的下载控件，并优化了音频播放器的按钮布局。
    - [PR #6981](https://github.com/agentscope-ai/QwenPaw/pull/6981) 清理了所有语言文件中的审批命令提示。
    - [PR #7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) 优化了后台任务列表的展示，限制了高度并增加了滚动提示，避免影响聊天输入框。

- **关键 Bug 修复**：
    - [PR #5151](https://github.com/agentscope-ai/QwenPaw/pull/5151) 修复了因 CSS 类名前缀不匹配导致的 GitPanel 标签页样式失效问题。
    - 合入 [PR #7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) 的修复，在请求模型前将远程媒体 URL 本地化，避免因后端服务器无法访问外网或遇到防盗链而报错。

- **新功能与集成**：
    - [PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) 合入了原生 **DataPaw** 应用运行时和持久化分析工作区，同时 [PR #7089](https://github.com/agentscope-ai/QwenPaw/pull/7089) 为 datapaw 插件建立了独立的版本发布流水线，方便其独立于主项目更新。

---

#### 4. 社区热点

今日讨论最热烈的 Issue 主要集中在 **多会话管理冲突** 和 **功能体验** 问题上。

- **[Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011): Console stop request 会意外中断活跃的飞书会话 (2.1.0)** (6条评论)
    - **诉求**：用户报告了在多个 UI 会话并存时，一个 Console 的停止请求会错误地取消另一个活跃的飞书（Feishu）会话。这暴露了在复杂使用场景下（多UI+多渠道），会话隔离机制存在缺陷，是影响多任务协同的关键问题。
- **[Issue #6405](https://github.com/agentscope-ai/QwenPaw/issues/6405): 升级2.0后，MCP工具总是提示 Tool not found** (7条评论)
    - **诉求**：这是一条历史问题的持续反馈。用户升级到 2.0 后，MCP 工具按新命名规则 `[mcp-key]__[tool_name]` 配置后仍提示找不到工具。这指向升级后 MCP 工具解析或注册环节的兼容性问题，已困扰用户近一个月，需要官方重点关注。

---

#### 5. Bug 与稳定性

按严重程度排序：

- **高 - 会话管理冲突**：[Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) 中，Console 的停止操作会误伤其他渠道（飞书）的活跃会话，严重影响多任务协同体验。目前**无**直接关联的修复 PR。
- **高 - 核心功能崩溃**：[Issue #7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) 报告 Agent 执行工具调用时必现崩溃，原因为代码中错误地对 coroutine 使用 `async for` 进行遍历。该 Issue 已被关闭，推测已定位并修复。
- **中 - 插件机制缺陷**：[Issue #7077](https://github.com/agentscope-ai/QwenPaw/issues/7077) 报告插件注册的运行时钩子在 workspace reload 后会静默失效，这会影响依赖热安装的插件稳定性。**无**直接关联的修复 PR。
- **中 - 模型初始化失败**：[Issue #7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) 报告控制台初始化由于 Pydantic 类型未完整定义而失败，属于框架配合问题。**无**直接关联的修复 PR。
- **低 - 历史会话/附件显示问题**：[Issue #7084](https://github.com/agentscope-ai/QwenPaw/issues/7084) 指出仅有一条历史会话时无法打开，[Issue #7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) 则报告了控制台聊天中图片附件在 reload 后丢失。这两个均为UI/交互上的瑕疵，但影响用户体验。均**无**直接关联的修复 PR。
- **低 - 渠道特定问题**：[Issue #7088](https://github.com/agentscope-ai/QwenPaw/issues/7088) 报告 OneBot (QQ) 渠道传图因签名 URL 过期导致模型调用报错，**已有** [PR #7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) 针对该问题进行了修复。

---

#### 6. 功能请求与路线图信号

用户今日提出了多项功能需求，反映了 CoPaw 向更强大、更灵活的生产力工具演进的趋势。

- **频道级模型配置**：[Issue #7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) 提出按频道（钉钉、微信、控制台）独立配置模型，而非全局或仅限智能体级别，以满足不同场景的特定需求。
- **技能池搜索**：[Issue #7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) 建议在 `qwenpaw skills config` 界面增加搜索/过滤功能，解决技能数量庞大时难以查找的问题。
- **定时任务可视化管理**：[Issue #7075](https://github.com/agentscope-ai/QwenPaw/issues/7075) 希望增加定时任务的运行细节展示，包括开始时间、运行时长、结束状态等，以提升任务调度的可观测性。
- **工作流可视化**：[Issue #6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) 希望智能体协作能在一个会话窗口中展示，避免创建多个会话并手动切换查看。
- **可插拔长时间记忆后端**：对于 [Issue #7079](https://github.com/agentscope-ai/QwenPaw/issues/7079) 提出的集成 PowerContext 记忆功能，作者已同时提交了 [PR #7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) 进行实现。该 PR 被标记为 "first-time-contributor"，若被合并，将作为新特性进入下一版本。

---

#### 7. 用户反馈摘要

从今日的 Issue 中，可以提炼出用户的真实使用场景和痛点：

- **升级之痛**：用户反馈升级到 2.0 后遇到 MCP 工具失效等问题（[#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)），说明升级路径和兼容性测试是社区关注的重点。
- **多任务与多渠道协同是刚需**：有用户希望多智能体协作在一个窗口内完成（[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)），也有用户因多 UI 会话导致操作互相干扰而感到困扰（[#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)）。这反映出用户正将 CoPaw 用于更复杂的日常工作流。
- **对细节体验要求高**：用户不仅关心功能实现，还关注使用细节，例如技能列表的搜索体验（[#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090)）、定时任务运行状态的可观测性（[#7075](https://github.com/agentscope-ai/QwenPaw/issues/7075)）以及模型配置的灵活性（[#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085)）。
- **对新集成保持开放态度**：用户积极反馈第三方集成问题，如 QQ 图片 URL 失效（[#7088](https://github.com/agentscope-ai/QwenPaw/issues/7088)），这也促成了快速修复（PR #7087）。

---

#### 8. 待处理积压

以下为长期未响应或处于停滞状态的重要 Issue/PR，提醒维护者关注。

- **[Issue #6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)**：升级 2.0 后 MCP 工具找不到的问题，从 7 月 23 日至今仍未解决，且评论数较多，属于影响用户升级的长期痛点。
- **[PR #6515](https://github.com/agentscope-ai/QwenPaw/pull/6515)**：为内置提供商添加火山引擎和 Xiaomi MiMo V2.5 API，已开放 3 周，等待评审，关注度较高。
- **[PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)**：旨在统一提供商发现、模型元数据、路由和智能体控制的重大重构 PR，已开放近一个月，需要维护者投入时间评审，这可能成为未来版本的核心架构。
- **[PR #6986](https://github.com/agentscope-ai/QwenPaw/pull/6986)**：修复沙箱被防病毒软件阻止的问题，已开放 5 天，描述较为简单，需要维护者跟进确认具体方案。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是 2026-08-18 日的 ZeroClaw 项目动态日报。

---

# ZeroClaw 项目动态日报 - 2026-08-18

## 1. 今日速览

ZeroClaw 项目今日处于**高度活跃**状态，但核心活动集中在**长期 RFC 的持续讨论与整合**，而非新功能发布。过去 24 小时内有 50 条 Issue 和 50 条 PR 更新，显示出强大的社区参与度。重点在于安全加固（如 SSRF 防护、API Key 泄露修复、原子性预算检查）和架构演进（如 Chat Completions 协议支持、运行时安全决策管线）的收尾。项目虽无新版本发布，但多个高风险、大尺寸（XL）PR 的合并表明 `v0.9.0` 的安全与网关里程碑正在稳步推进。**值得注意的是，`needs-maintainer-review` 标签在众多关键 PR 上出现，维护者响应速度将是近期项目健康度的关键指标。**

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

今日合并的 PR 主要集中于**安全加固**和**CI/CD 流程优化**，体现了项目在稳定性和工程质量上的投入：

- **安全修复（高优先级）**
    - **[PR #9973](https://github.com/zeroclaw-labs/zeroclaw/pull/9973)**: 修复 Gemini API Key 泄露问题，将 Key 从 URL 迁移至 `x-goog-api-key` 请求头，避免了敏感信息在日志和诊断信息中暴露。
    - **[PR #10000](https://github.com/zeroclaw-labs/zeroclaw/pull/10000)**: 为 QQ 和 Mattermost 频道的附件下载增加大小限制，防止恶意或异常的大文件导致内存或磁盘资源耗尽。
    - **[PR #9993](https://github.com/zeroclaw-labs/zeroclaw/pull/9993)**: 修复 Email 频道的隐性附件文件读取漏洞，确保仅从内存中的 `MediaAttachment.data` 构建附件，防止空 payload 意外读取服务器本地文件。
    - **[PR #9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996)**: 修复了 `RateLimitedTool` 预算检查的非原子性问题（Issue #9849），通过“先预留、后提交”的方式，消除了并行执行下超限的风险。
    - **[PR #9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612)**: 修复 WhatsApp Cloud 审批令牌的生命周期问题，确保在任何退出路径下都不会遗留孤儿令牌，增强了决策流程的完整性。
    - **[PR #9765](https://github.com/zeroclaw-labs/zeroclaw/pull/9765)**: 修复 SOP（标准操作流程）定义加载路径错误，使其从共享工作区而非数据目录加载，修正了数据隔离和配置管理的问题。

- **CI 与基础设施**
    - **[PR #10039](https://github.com/zeroclaw-labs/zeroclaw/pull/10039)** & **[PR #10043](https://github.com/zeroclaw-labs/zeroclaw/pull/10043)**: 提取了统一的 Clippy 运行脚本并清理了重复的 CI 测试守卫，简化了 CI 配置，降低了各平台 lint 检查漂移的风险（推进 Issue #7884）。
    - **[PR #9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398)**: 增加了 macOS 和 Windows 平台的定时测试，扩大了跨平台回归测试的覆盖范围。
    - **[PR #9547](https://github.com/zeroclaw-labs/zeroclaw/pull/9547)**: 将 CPAL 音频库升级到 0.18，并迁移了 Voice Wake 功能，确保依赖项保持最新。

- **Bug 修复**
    - **[PR #10010](https://github.com/zeroclaw-labs/zeroclaw/pull/10010)**: 修复 cron 自定义 shell 测试中的 ETXTBSY 竞态条件，提升了测试稳定性。
    - **[PR #9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544)**: 修复委托（delegate）工具未遵循配置的 provider fallback 的问题，确保故障转移策略在委派场景下同样生效。

## 4. 社区热点

今日讨论热度最高的议题集中在**架构级别的 RFC**，它们决定了 ZeroClaw 未来很长一段时间的发展方向，社区参与度极高：

- **[Issue #6808: RFC: Work Lanes, Board Automation, and Label Cleanup (23 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**
    - **热点：** 这是一个关于项目治理的 RFC，已进入“批准/推进中”状态。社区仍在热烈讨论其工作流自动化和标签清理的细节，反映了成熟项目对流程效率的持续关注。
- **[Issue #8603: RFC: ZeroClaw Chat Completions profile (23 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)**
    - **热点：** 提出接入 OpenAI Chat Completions 协议，这能直接兼容 Open WebUI、LobeChat 等大量现有工具，是**社区呼声极高的功能**，有望极大扩展 ZeroClaw 的客户端生态。
- **[Issue #8303: RFC: Goal mode v1 — bounded foreground Matrix work (22 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)**
    - **热点：** 讨论引入“目标模式”以在多个 Agent 轮次中持久化执行有界任务，这是从“问答”迈向“自主执行任务”的关键一步，需求强烈。
- **[Issue #7155: RFC: Add a per-execution confirmation tier for high-risk shell commands (20 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)**
    - **热点：** 关于高危险性 Shell 命令的确认机制和策略（allow/ask/deny），是安全领域的核心讨论，对于赢得企业级用户至关重要。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在安全边界和并发一致性问题上，且大部分已有对应的修复 PR：

- **严重级别：高**
    - **[Issue #9849 (CLOSED): RateLimitedTool budget check is non-atomic (S2)](https://github.com/zeroclaw-labs/zeroclaw/issues/9849)** - 并行执行下预算检查可被绕过。**已由 PR #9996 修复。**
    - **[Issue #9594 (CLOSED): Coding-agent tools charge the action budget twice (S2)](https://github.com/zeroclaw-labs/zeroclaw/issues/9594)** - 编码代理工具重复计入操作预算。**已由 PR #9996 修复（提交逻辑调整）。**
    - **[PR #8713 (OPEN): fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)** - 修复 SSRF 防护缺失。此 PR 仍处于开放状态，等待作者操作。
    - **[Issue #10023 (OPEN): Failure logs claim the requested model, not the pinned fallback model](https://github.com/zeroclaw-labs/zeroclaw/issues/10023)** - 故障日志记录模型不准确，影响排障，目前无关联 PR。

- **严重级别：中**
    - **[PR #10038 (OPEN): fix(gateway/cron): reject invalid session_target instead of isolating](https://github.com/zeroclaw-labs/zeroclaw/pull/10038)** - 修复 cron API 接受无效 `session_target` 的问题，防止后台任务静默失败。

## 6. 功能请求与路线图信号

今日的功能请求和 RFC 揭示了项目未来的演进方向：

- **互操作性 (Interoperability) 是明确的信号：**
    - **[Issue #8603 (RFC: Chat Completions profile)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** 是最强的路线图信号。若被接受，将成为 `v0.9.0` 的重大特性，无缝接入现有 OpenAI 生态工具。
- **安全与治理持续强化：**
    - **[Issue #7155 (High-risk shell commands confirmation)](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)**、**[Issue #7141 (Pluggable inbound authentication)](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** 和 **[Issue #7142 (Runtime-owned security decision pipeline)](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)** 这些已接受的 RFC 表明，一个统一的、插件化的安全架构正在成型，将定义 `v0.9.0` 的安全模型。
- **开发者体验与工程质量：**
    - **[Issue #10059 (Option-Backspace support in ZeroCode)](https://github.com/zeroclaw-labs/zeroclaw/issues/10059)** 和 **[Issue #10011 (Task: avoid runtime-written executable in test)](https://github.com/zeroclaw-labs/zeroclaw/issues/10011)** 这类小但提升体验的请求，可能作为 `good first issue` 被快速纳入后续补丁版本。

## 7. 用户反馈摘要

从今日的 Issue 和 PR 讨论中，可以提炼出以下用户反馈：

- **对安全细节的高度关注**：多条关于 SSRF、API Key 泄露、权限控制的问题被提出，并有针对性的修复 PR 迅速跟进，这说明用户群对安全性有较高要求，且官方响应积极。
- **对生态兼容性的强烈渴望**：关于 Chat Completions 协议的 RFC 获得了高热度，用户明显希望将 ZeroClaw 接入到已有的 OpenAI 兼容工具链中。
- **对任务持久化和自主性的需求**：Goal mode 等 RFC 的讨论表明，用户不再满足于单一的对话，而是希望 Agent 能承担多步骤、有明确目标的复杂任务。
- **对故障可观测性的关注**：Issue #10023 反馈了当使用 fallback 模型时日志记录不准确的问题，这直接影响了用户排障效率，属于影响运维体验的细节问题。

## 8. 待处理积压

以下问题或 PR 由于长期未解决或等待关键反馈，需要维护者特别关注：

- **[PR #8713 (OPEN, 自 07-04): SSRF 防护的 `allowed_private_hosts` 功能](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)**
    - 这是一个高风险的修复，但已滞留在 `needs-author-action` 状态一个多月。该修复对于防止内部网络探测至关重要，建议维护者与作者沟通，推动其完成或接手处理。
- **[PR #9314 (OPEN, 自 07-23): Telegram 长轮询偏移量问题修复](https://github.com/zeroclaw-labs/zeroclaw/pull/9314)**
    - 修复可能导致消息永久丢失的重要 Bug，但 PR 处于 `needs-maintainer-review` 状态，长时间（近一个月）未获审查。需要维护者处理，避免用户数据损失风险。
- **[Issue #8692 (OPEN, 自 07-04): Maintainer decision queue for RFCs](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**
    - 这是一个协调追踪器，用于管理大量待做决策的 RFC。它的存在本身就表明维护者精力可能被大量 RFC 讨论所分散，可以考虑通过自动化或分派机制来提高决策效率。

---

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*