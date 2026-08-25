# OpenClaw 生态日报 2026-08-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-25 01:20 UTC

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

# 🦞 OpenClaw 项目动态日报 — 2026-08-25

*数据基于 GitHub 最近 24 小时 Issues/PR 活动与发布记录*


## 1. 今日速览

OpenClaw 社区在过去 24 小时保持高活跃度（Issues 更新 500 条、PR 500 条，均接近平台采集上限）。**活跃度评级: 🔥 高**。核心趋势：发布 `v2026.8.1-beta.3`（引入 GPT-5.6 全系列推理支持、CDP relay 等）；讨论焦点集中在**消息投递可靠性（message-loss/delivery）**与**会话状态持久化（session-state）**相关缺陷，二者合计占带标签议题的相当比重。存在一批 `P0/P1` 但已被打上 `clawsweeper:no-new-fix-pr` 标记的较老高优缺陷，整体 Bug 修复节奏略滞后于新功能发布节奏，需人工介入升级处理。


## 2. 版本发布

### 🚀 v2026.8.1-beta.3
> [查看 Release](https://github.com/openclaw/openclaw/releases)

**核心亮点：**
- **GPT-5.6 全家族推理支持**：OpenClaw 与 Codex runtime 全面支持 GPT-5.6 Sol、Terra、Luna、Ultra 四种规模的推理（reasoning）能力，开发者可按需选用不同档位。
- **Control UI 首次运行设置增强**：已验证的模型设置现在可无缝接续（flow-through）至 Custodian 及可选的渠道设置。
- **Puppeteer 兼容的 CDP Relay 支持**：为配对的外部 Chrome 会话新增 CDP relay（Chrome DevTools Protocol）支持，扩展远程浏览器控制能力。

**破坏性变更 / 迁移说明：**
- Release 说明被截断（`Explicit ext...`），未完整披露扩展相关细节。建议升级前查阅完整 Release Notes。
- 未明确标注是否存在配置格式破坏性变更；但鉴于 beta 阶段的 `Custodian` 首启流程变更，建议首次启动时注意观察日志输出。


## 3. 项目进展（近日合并/关闭的重要 PR）

*以下为近 24 小时已合并（CLOSED）且改动量较大的 PR，反映项目实际落地的推进：*

- **PR #126424** — `fix(gateway): keep conversation delivery within agent bindings`（[链接](https://github.com/openclaw/openclaw/pull/126424)，XL，已关闭）— 修复多智能体运营者通过 conversation 工具可能将对话投递到绑定范围之外的通道问题。涉及 Discord/iMessage/Matrix/Mattermost/Slack/Telegram/Feishu 等全渠道，合并风险标注了 message-delivery 与 security-boundary，是一次关键的边界收敛。
- **PR #120900** — `feat(ui): review install policy warnings`（[链接](https://github.com/openclaw/openclaw/pull/120900)，XL，已关闭，含🎥视频证据）— 让管理员可在 Control UI 中审阅并确认继续安装带策略警告的插件（对应 `acknowledgeInstallPolicyWarning` 参数）。同期 `feat(security)`（#116489）也已合并，安全策略审查闭环基本成型。
- **PR #123975** — `fix(scripts): clean up tsgo process trees on timeout or signal`（[链接](https://github.com/openclaw/openclaw/pull/123975)，M，已关闭）— 修复 `tsgo` 包装器在收到信号时留下僵死编译器进程树的问题，并引入 `OPENCLAW_TSGO_TIMEOUT_MS` 看门狗（默认情况下仍为无限等待，需显式设置）。
- **PR #125471** — `fix(models): keep Claude CLI OAuth available in Control UI`（[链接](https://github.com/openclaw/openclaw/pull/125471)，XL，已关闭）— 解决网关重启后 Claude CLI OAuth 刷新所有权丢失、Control UI 中显示矛盾空行的回归问题。
- **PR #128371** — `fix(release): authorize focused beta evidence`（[链接](https://github.com/openclaw/openclaw/pull/128371)，XL，已关闭）— 解除 beta.3 发布阻塞：允许在冻结候选仅改动已审阅测试的情况下，发布全部组验证。

**小结**：近 24 小时合入的改动集中在三类：渠道投递边界收敛、UI/CLI 操作体验补全、发布流程自动化优化。项目的“核心智能体运行逻辑”层面推进有限，更多是边缘修补。


## 4. 社区热点（高讨论度 Issues/PRs）

| 排名 | Issue/PR | 评论数 | 核心诉求与信号 |
|---|---|---|---|
| 1 | [#125626 Release validation: v2026.8.1-beta.2](https://github.com/openclaw/openclaw/issues/125626) | 18 | 发布验证流程中测试者需在最终评论区通过验证技能一次性提交结果。流程较重，期待自动化。 |
| 2 | [#67777 Subagent 完成投递丢失](https://github.com/openclaw/openclaw/issues/67777) | 12 | 子代理完成在直接宣布超时/排空/孤儿修剪场景下会丢失。已有 PR 打开但长期未合并（4月至今）。 |
| 3 | [#97616 钩子/工具子进程僵尸化](https://github.com/openclaw/openclaw/issues/97616) | 9 | 长时间运行后 `openclaw-hooks`/`bash`/`codex` 子进程堆积为僵尸进程，拖慢运行时。`no-new-fix-pr`+`needs-maintainer-review`，停滞较久。 |
| 4 | [#6757 Agent 自触发上下文压缩](https://github.com/openclaw/openclaw/issues/6757) | 8 | 用户希望 `/compact` 可在 Agent 会话内自助触发，減少人工介入。获 2 👍，产品决策卡在“是否安全”上。 |
| 5 | [#125570 Skill Workshop 更新覆盖技能描述](https://github.com/openclaw/openclaw/issues/125570) | 6 | 应用 Skill Workshop 的 update 提案会静默覆盖 live skill 的 `description` frontmatter 字段，导致技能路由失效。属数据破坏类缺陷，P1。 |

**趋势分析**：高热度议题呈两极化——要么是发布/验证流程类协作问题，要么是数据完整性/消息丢失类可靠性缺陷。用户对“静默失败”容忍度低（多次出现“reports success anyway”“silently disabled/permanently deleted”类表述）。


## 5. Bug 与稳定性

### 🔴 P0（UX 发布阻断）
| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#108520](https://github.com/openclaw/openclaw/issues/108520)（🟣 P0，stability:stable） | iOS 应用自动更新后 Talk Mode 与聊天完全不可用（网关连上但无功能） | 无公开 fix PR，处于 `needs-info`状态 |

### 🟠 P1 — 消息丢失 / 数据损坏（严重度高）
| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 持久化外发消息卡在 `send_attempt_started`，重启后丢失 | 无 fix PR，`needs-live-repro` |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 拒绝 write 工具会静默禁用记忆持久化，Agent 仍报成功。**用户强烈不满** | 无 fix PR |
| [#126900](https://github.com/openclaw/openclaw/issues/126900) | `maxActiveTranscriptBytes` 压缩后仍超阈值 → 无限循环压缩，消息队列卡死 | 有 PR 打开（`linked-pr-open`） |
| [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop update 覆盖 live skill 描述，导致技能路由静默失效 | 无 fix PR |
| [#128067](https://github.com/openclaw/openclaw/issues/128067) | beta.7 实况报告：6 类可靠性缺陷（持久化/投递/重启恢复）+ 3 小缺陷 | 无 fix PR（详见下） |

### 🟡 P1 — 崩溃循环 / 进程泄漏
| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 钩子/工具子进程僵尸累积、运行时劣化。已 57 天未推进（`no-new-fix-pr`） | 无 |
| [#86119](https://github.com/openclaw/openclaw/issues/86119) | 孤儿 `node server.js` worker 进程累积（子代理/cron 嵌入运行后） | 无 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | `AgentSelectionRequiredError` 刷屏：显式多智能体所有权下三个入口缺乏 agentId 目标 | 无 fix PR |

### 🟢 值得关注的回归
- [#90786](https://github.com/openclaw/openclaw/issues/90786)（P3, regression）：`memory status --index/--deep` 在 2026.6.1 后报 `Unknown memory embedding provider: google`。有 PR 但被标记 `needs-maintainer-review`。
- [#113130](https://github.com/openclaw/openclaw/issues/113130)（P1）：Moonshot/Kimi 拒绝带父级 `anyOf` 的工具 schema（openai-completions 路径未做归一化）。无 fix PR。

**稳定性健康度综合评估**：**⚠️ 中偏低**。存在多个打上 `no-new-fix-pr` 标记的 P1 缺陷久拖未决（如 #67777、#97616、#125570、#126906），修复产出速度赶不上新问题涌入速度，且发布频率（beta 迭代快）可能引入新的回归。建议维护者优先对 `clawsweeper:no-new-fix-pr` + `P1` 组合标记的议题做一次集中人工分诊。


## 6. 功能请求与路线图信号

### 高潜力（已有 PR / 实现路径清晰）
| 请求 | 说明 | Why now |
|---|---|---|
| **内存耗尽后重试风暴**（[PR #128945](https://github.com/openclaw/openclaw/pull/128945) 针对 #128938） | 嵌入配额耗尽时不断重试、饿死同步队列 | 直接修复 429 循环，开发者已动手 |
| **CLI 增加 `agents set-default` 命令**（[PR #114036](https://github.com/openclaw/openclaw/pull/114036) 针对 #114036） | 用户无法重指派默认 Agent；当前需手工改配置 | 需求清晰、低风险 |
| **记忆内存只读 `memory.list` 方法**（[PR #115329](https://github.com/openclaw/openclaw/pull/115329)，draft） | 供外部消费者只读查询记忆 | 对应 #115303，多智能体编排必备 |
| **Agent 自触发上下文压缩**（[#6757](https://github.com/openclaw/openclaw/issues/6757)，8 评论 / 2👍） | 让 Agent 在会话内自行触发 `/compact` | 呼声高，但需安全评审 |

### 探索中（讨论充分但未定型）
- **Signal 渠道实时工具调用进度**（[#77202](https://github.com/openclaw/openclaw/issues/77202)）：用“先发后删”模式补齐长任务静默空白。
- **内置步调感知限流**（[#45771](https://github.com/openclaw/openclaw/issues/45771)）——防止自治 Agent 打爆令牌额度。
- **模型回退在上下文超限时触发**（[#9986](https://github.com/openclaw/openclaw/issues/9986)）——`fallbacks` 目前只对 API 错误生效，上下文超限会卡死。
- **Anthropic 模型目录自动发现**（[#113411](https://github.com/openclaw/openclaw/issues/113411)）：不再每次发版手动添加模型。

**路线图判断**：`memory.list` 只读网关方法 + `agents set-default` + 移动端 UI 修复较有可能进入 2026.8.x 稳定版。模型目录自动发现一旦落地将显著降低新模型接入成本。


## 7. 用户反馈摘要

**(1) “静默失败”最伤信任**
> 例：#126906 拒绝 write 工具后，Agent 对从未发生的保存报告“成功”。部署者无感知，`doctor` 也查不出。 → 诉求：工具被拒必须向操作者显式告警，不允许静默降级。

**(2) “重启恢复”是高频痛点**
> 例：#126246 Telegram 外发消息卡在 `send_attempt_started`；#128896 Telegram 讨论重启后拒收新消息；#120050 macOS 安装失败后 checklist 显示错行。 → 三类“重启后状态不确定”的场景反复出现，说明**状态机持久化**是当前最大短板。

**(3) 自定义模型/提供商接入仍四处碰壁**
> 例：#82020 Zhipu 双账号共享 baseUrl 的自定义供应商仍回归；#113130 Kimi 拒绝 anyOf schema；#77467 MiniMax OAuth 无法自动刷新。 → “BYO model”虽主打，但长尾体验碎片化。

**(4) 多智能体协作期待治理**
> 例：#76247 希望区分“接受”和“实际执行”两个阶段；#126360 `AgentSelectionRequiredError` 刷屏；#125838 QQBot 多账号 slash 命令无回复。 → 多智能体消息路由需要更多可见性与可控性。


## 8. 待处理积压（维护者重点关注）

| 积压项 | 年龄 | 当前状态 | 建议 |
|---|---|---|---|
| **#67777** [子代理完成投递丢失](https://github.com/openclaw/openclaw/issues/67777) | 4 个月（4/16 创建） | P1，有 PR 但长期未合并 | **打断 `clawsweeper:no-new-fix-pr` 限制，人工评审 PR**。架构级问题，影响消息可靠性核心。 |
| **#97616** [子进程僵尸累积](https://github.com/openclaw/openclaw/issues/97616) | 2 个月（6/29 创建） | P1，`no-new-fix-pr`+`needs-maintainer-review` | 长驻进程内存/句柄泄漏信号，若有用户在生产环境运行需优先处理。 |
| **#108520** [iOS 更新后全面不可用](https://github.com/openclaw/openclaw/issues/108520) | 40 天（P0，`needs-info`） | 仍无响应方 | 官方 App 的 P0 阻断级问题，需尽快确认是否已在新版本修复；否则应主动联系用户。 |
| **#126360** [AgentSelectionRequiredError 刷屏](https://github.com/openclaw/openclaw/issues/126360) | 6 天（P1） | `needs-product-decision` | 显式多智能体下日志刷屏影响可观测性，建议尽快给出产品决策（是自动指定还是给出更清晰报错）。 |
| **#127287** [Copilot GHE 数据驻留失效](https://github.com/openclaw/openclaw/issues/127287) | 4 天（P1） | `linked-pr-open` + `needs-live-repro` | GHE 企业用户受影响，但复现门槛高。请 PR 作者补实况证据链。 |
| **#128067** [beta.7 实况：6 类可靠性缺陷](https://github.com/openclaw/openclaw/issues/128067) | 2 天 | `P1` 综合报告 | 强烈建议维护者逐条回复/分流；这类综合性实况报告是重要的 QA 输入。 |

*补充*：PR #128896（Telegram 讨论重启恢复）与 PR #128944（移动端 UI 文本宽度）为最新提交（8/25），均处于等待作者响应状态，属正常流程，无需特别干预。


> **报告总结**：OpenClaw 在功能迭代上保持高速（GPT-5.6 支持、CDP relay、安全策略审阅 UI 相继落地），但**可靠性债务**（重启恢复、消息投递、静默失败）正在累积。P1 缺陷的“已打标未处理”占比偏高，是当前项目健康度的主要风险项。建议在下一个稳定版发布前优先完成一次可靠性专项治理。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-08-25 | 数据窗口：2026-08-24 ~ 2026-08-25**


## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**高速扩张与可靠性债务并存的阶段**。主流项目（OpenClaw、Hermes Agent、CoPaw、ZeroClaw、NanoBot 等）均保持高活跃度，功能迭代节奏惊人（GPT-5.6 支持、OAuth 集成扩展、多平台渠道接入等），但**消息投递可靠性、会话状态持久化、更新链路健壮性**三大痛点几乎在每个项目中均有体现，成为制约用户体验的核心瓶颈。从社区反馈来看，用户对"静默失败"容忍度极低，对"重启后状态不确定"的抱怨趋于集中，各项目正从"拼功能"转向"拼可靠性与治理能力"。生态整体呈现**"大而全的平台型"（OpenClaw、Hermes、ZeroClaw）与"小而美的场景型"（NanoBot、PicoClaw、Moltis）分化并存**的格局。


## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PRs | Releases | 待合并 PR | 活跃度 | 健康度 | 关键信号 |
|------|:---:|:---:|:---:|:---:|:---:|:---:|------|
| **OpenClaw** | ~500（采集上限） | ~500（采集上限） | v2026.8.1-beta.3 | 大量 | 🔥🔥🔥🔥🔥 | ⚠️ 中偏低 | 发布频率快，但 P1 bug 积压（`no-new-fix-pr` 标记多），可靠性债务累积 |
| **Hermes Agent** | 47 活跃 | 5 合并/关闭 | 无 | — | 🔥🔥🔥🔥🔥 | ⚠️ 中 | 高讨论度（技能索引、deadline 层提案），P1 bug 多无 fix PR |
| **CoPaw** | 31 活跃 / 19 关闭 | 26 合并 / 21 待合并 | v2.1.1-beta.2 | 21 | 🔥🔥🔥🔥 | 🟡 中 | 会话串线问题集中，内存泄漏 20.7GB 严重，测试基座加固中 |
| **ZeroClaw** | 43 活跃 / 7 关闭 | 5 合并 / 45 待合并 | 无 | 45 | 🔥🔥🔥🔥 | ⚠️ 中 | 审阅瓶颈明显（needs-author-action 多），Chat Completions 兼容层高热度但 blocked |
| **NanoBot** | 8 | 12 合并 / 14 待合并 | 无 | 14 | 🔥🔥🔥 | 🟢 良好 | 社区提案→实现转化率高，P1 修复响应快 |
| **NanoClaw** | 2 | 3 合并 / 18 待合并 | v2.3.0 | 18 | 🔥🔥🔥 | 🟡 中 | macOS 兼容性短板，更新链路稳定性集中修复中 |
| **Moltis** | 2 关闭 | 7 合并 / 3 待合并 | 20260824.01 | 3 | 🔥🔥🔥 | 🟢 良好 | 合并节奏紧凑，OAuth 集成当日提出当日落地 |
| **LobsterAI** | 3 关闭（stale） | 10 合并 / 1 待合并 | 无 | 1 | 🔥🔥 | 🟢 良好 | 用户体验打磨期，跨平台缩略图/插件安装修复为主 |
| **IronClaw** | 21 | 35 更新 | 无 | — | 🔥🔥🔥🔥 | 🟢 良好 | CI 基建重构 + 新用户引导优化，QA 专项进行中 |
| **PicoClaw** | 3 活跃 | 1 合并 / 2 待合并 | 无 | 1 | 🔥🔥 | 🟡 中 | WebUI 需求持续高热度，MCP 挂起问题 stale |
| **NullClaw** | 2 新开 | 1 待合并（dependabot） | 无 | 1 | 🔥 | 🟢 稳定 | 自托管配置自由度是社区关注焦点 |
| **ZeptoClaw** | 1 新开 | 0 | 无 | 0 | 🔥 | 🟢 稳定 | REPL UX 硬化提案，处于功能间歇期 |
| **TinyClaw** | — | — | — | — | ⚪ 无活动 | — | — |

*注：OpenClaw 数据量接近 GitHub API 采集上限，实际活跃度可能更高。*


## 3. OpenClaw 在生态中的定位

### 优势

- **体量绝对领先**：日 Issues/PR 各 500 条（采集上限），远超 CoPaw（~50）、ZeroClaw（~50）、Hermes（~50）等竞品，社区规模和组织化程度（自动化标记、发布验证流程）是生态内标杆。
- **版本迭代速度最快**：beta 版本高频发布，率先支持 GPT-5.6 全家族推理（其他项目尚未跟进），CDP relay、安全策略审阅 UI 等能力领先。
- **全渠道覆盖**：Discord/iMessage/Matrix/Mattermost/Slack/Telegram/Feishu 等全渠道支持，且持续收敛投递边界（PR #126424）。
- **生态工具链完善**：Skill Workshop、Control UI、Puppeteer 兼容层等周边工具链成熟度高于同类。

### 技术路线差异

- **以"Skill/技能"为核心抽象**：与 CoPaw 的"Agent/Workflow"、ZeroClaw 的"Profile/合同"路线不同，OpenClaw 强调技能的发现、安装、版本管理，已形成类似"App Store"的生态雏形。
- **网关（Gateway）架构**：与 Hermes Agent 的桌面端优先路线、Moltis 的轻量级集成路线形成对比。

### 主要短板

- **可靠性债务**：消息丢失（#67777 已 4 个月）、子进程僵尸（#97616 已 57 天）、静默失败（#126906）等 P1 bug 打上 `no-new-fix-pr` 后停滞，"重功能、轻稳定性"的策略可能为竞品留下超越窗口。
- **发布即引入回归**：beta 迭代过快，iOS 更新后完全不可用（#108520）达 40 天未解决，影响核心用户体验。


## 4. 共同关注的技术方向

| 需求方向 | 涉及项目 | 具体诉求 |
|---------|---------|----------|
| **消息投递可靠性** | OpenClaw（#67777、#126246）、CoPaw（#7231）、ZeroClaw（#9812）、NanoBot（#5515）、PicoClaw（#3269） | 消息丢失、投递到错误会话、fallback 不触发、任务回执丢失——"静默失败"是跨项目最大公因数 |
| **会话状态持久化/重启恢复** | OpenClaw（#126246、#128896）、Hermes（#93888、#92145）、NanoClaw（#3508）、NullClaw（#992）、ZeptoClaw（#650） | 重启后状态丢失、配对码不可见、更新后服务不可用、Ctrl+C 误触销毁会话 |
| **多智能体/多会话隔离与路由** | OpenClaw（#126360）、CoPaw（#7011、#7231）、Hermes（#25833）、ZeroClaw（#9600）、NanoClaw（#3508） | Agent 间消息路由可见性、会话身份竞争条件、跨 Agent 权限隔离、协作会话聚合 |
| **模型/Provider 接入灵活性** | OpenClaw（#113130、#82020）、NanoBot（#5350）、Hermes（#86612）、Moltis（#1240）、ZeroClaw（#10068） | 自定义端点、OAuth 订阅登录、上下文窗口限制、provider fallback 可靠性、"BYO model"长尾体验 |
| **更新/安装链路健壮性** | Hermes（#92145、#94264）、NanoClaw（#3497、#3506）、PicoClaw（#1929）、LobsterAI（#IPR 1277）、NullClaw（#956）、IronClaw（#7821） | 更新后服务不可用、安装后依赖损坏、Docker 基础镜像积压、依赖升级安全风险 |
| **标准协议互操作** | ZeroClaw（#8603）、NanoBot（#5350）、Hermes（#86612） | OpenAI Chat Completions 兼容层、QwenCloud 兼容路径、多 Provider 自动发现——**从专有协议向行业标准开放**是明确趋势 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|-----------------|
| **OpenClaw** | 全功能个人 AI 助手平台（多渠道、技能生态、企业级安全策略） | 开发者→企业级用户 | 网关+Skill 注册表架构，全渠道适配器，beta 高频发布 |
| **Hermes Agent** | 桌面端优先的 Agent 工作台（HUD、Spatial 插件、会话空间） | 桌面端重度用户、本地优先 | 桌面客户端+远程网关双模，强调本地 UI 体验，技能系统自动进化 |
| **CoPaw** | 多智能体协作与任务编排（审批流程、工作区 Skill、导入导出） | 多 Agent 生产级用户 | 工作区+Agent+Skill 三层抽象，内置审批模式和任务编排，Python 后端 |
| **ZeroClaw** | 安全/隔离增强的 Agent 网关（risk_profile、合同式架构治理） | 安全敏感型企业用户 | Profile 合同体系，S0-S3 分级安全，强调架构治理流程；向 OpenAI 兼容层演进 |
| **NanoBot** | 轻量级、低 token 消耗的个人助手（条件触发、FTS5 搜索） | 个人开发者、资源受限环境 | 纯 Python 实现，轻量级运行时，事件驱动替代心跳轮询，token 零消耗 |
| **IronClaw** | Rust 实现的 Agent 基础设施（CI 基建、WebUI 引导流程） | Rust 生态开发者 | Rust 核心，CI/CD 重构（统一工具链），系统提示词字节级稳定优化 |
| **Moltis** | 订阅制 OAuth 集成的轻量 Agent（Grok/Copilot/OpenAI 订阅直连） | 已有 AI 订阅的普通用户 | 轻量级集成，OAuth 优先，Apple 容器隔离，设备码登录 |
| **PicoClaw** | 嵌入式/边缘场景 Agent（Go 实现） | 嵌入式开发者、非技术用户 | Go 语言，TUI 界面（WebUI 路线图中有），轻量部署、slack 集成 |
| **LobsterAI** | 跨平台桌面 AI 助手（缩略图渲染、文件分享优化） | 桌面端用户、OpenClaw 技能兼容 | Electron 桌面端，与 OpenClaw 技能目录兼容，本地文件生命周期管理 |
| **NanoClaw** | 多渠道轻量 Agent（Slack/Telegram 优先、模板建 Agent） | 消息平台重度用户 | 强调从聊天中直接派生 Agent，多渠道模板引用（template-ref）机制 |
| **NullClaw** | 自托管隐私优先的 Agent 网关 | 自托管用户、隐私敏感 | 强调配置自由度与操作透明度，部署灵活性为主题 |
| **ZeptoClaw** | 交互式 REPL 体验打磨 | CLI 重度用户 | 单仓库轻量级，REPL 交互创新（信号处理、命令发现） |


## 6. 社区热度与成熟度

### 第一梯队：快速迭代期（高活跃 + 功能高速推进 + 可靠性债务累积）

- **OpenClaw**、**Hermes Agent**、**ZeroClaw**、**CoPaw**

这些项目 Issues/PR 量级最大，功能迭代速度最快（多日/周级 beta 发布），但同时 P1/P0 bug 积压比例高（OpenClaw 的 `no-new-fix-pr`、ZeroClaw 的 45 个待合并 PR、Hermes 的多个 P1 无 fix PR），处于"边扩张边补窟窿"的状态。

### 第二梯队：质量巩固期（活跃度中高 + 修复节奏健康 + 社区转化率高）

- **NanoBot**、**Moltis**、**IronClaw**

这些项目 PR 合并节奏紧凑（NanoBot 当日提案当日合并、Moltis 当日 Issue 当日实现），P2 修复等待时间短，社区提案→实现转化率高，整体健康度最佳。其中 Moltis 当日完成 OAuth 集成的响应速度值得关注。

### 第三梯队：稳定积累期（低活跃 + 聚焦特定场景或体验打磨）

- **PicoClaw**、**LobsterAI**、**NullClaw**、**NanoClaw**、**ZeptoClaw**

这些项目活跃度较低，但社区需求信号明确（PicoClaw 的 WebUI、NullClaw 的自托管配置、LobsterAI 的上下文窗口设置）。其中 NanoClaw 虽活跃度中等，但 macOS 修复密度极高，维护者响应积极，有望在短期转入第二梯队。


## 7. 值得关注的趋势信号

**1. "静默失败"是用户信任的最大杀手**
从 OpenClaw #126906（write 工具被拒但 agent 报成功）到 CoPaw #7198（任务等到天亮还在待审批）再到 ZeptoClaw #650（误触 Ctrl+C 销毁整个会话），用户对"系统不告知真实状态"的容忍度极低。**所有 Agent 项目应将"操作结果显式回执"作为核心设计原则**——工具被拒、任务中断、审批挂起都必须在 UI/日志中明确呈现，而非静默降级。

**2. 多智能体协作从"能不能跑"进入"好不好管"阶段**
CoPaw #6925/#3013（协作会话聚合）、OpenClaw #126360（AgentSelectionRequiredError 刷屏）、Hermes #25833（技能一致性保证）共同指向：**当 Agent 数量超过 3 个，用户需要的是治理机制而非更多功能**——会话隔离、权限边界、消息路由可见性、审批分级，是下一个竞争焦点。

**3. 标准协议互操作成为生态分水岭**
ZeroClaw 的 Chat Completions 兼容层（#8603）获 24 条评论高热度、NanoBot 的 QwenCloud 兼容路径、Hermes 的自动发现注册表——**从专有协议向 OpenAI 生态标准开放**正在成为新项目的"入场券"。未能提供标准兼容层的项目将面临集成壁垒。

**4. 更新/安装链路正在成为新的可靠性瓶颈**
Hermes（更新后服务不可用）、NanoClaw（macOS 段错误）、LobsterAI（依赖升级 4 个月积压）、NullClaw（Dependabot PR 71 天未处理）——**"最后一公里"的脆弱性正在抵消功能优势**。建议所有项目将 CI/CD 加固（原子更新、回滚机制、依赖安全扫描）纳入 P0 优先级。

**5. 订阅制 OAuth 集成成为新用户增长引擎**
Moltis 当日实现 Grok 订阅 OAuth（#1240）、Hermes 的自动发现注册表——**用户不希望单独申请 API-key，而是直接使用已有的 OpenAI/GitHub Copilot/Grok 订阅**。集成主流订阅服务的 OAuth 流程，是吸引非开发者用户的低成本高回报路径。

**6. 可靠性的"基础架构"正在被社区自发设计**
Hermes 的"统一 deadline 层"提案（#85125，4 阶段架构重构）、ZeroClaw 的合同归属追踪（#9600）、NanoClaw 的持久化协调状态（#3508）——**社区已开始从"修 bug"转向"设计可靠性基础设施"**。维护者应重视这类架构级提案，它们代表了社区对项目长期健康度的真实关切。

**7. macOS 作为一等公民的呼声持续走高**
NanoClaw 6/21 PR 与 macOS 直接相关、OpenClaw iOS 更新后不可用、Hermes macOS arm64 SIGSEGV——**移动端和 macOS 的稳定性已成为用户评估"是否值得长期投入"的关键考量**，维护者需要平衡"新功能速度"与"多平台稳定性投入"。

---

*报告生成时间：2026-08-25 | 数据源：GitHub 各仓库公开数据 | 本报告由 AI 自动生成，仅供参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-25

## 1. 今日速览

过去24小时 NanoBot 项目保持高活跃度，累计产生 8 条 Issue 与 26 条 PR 动态，其中 12 条 PR 已合并/关闭，另有 14 条 PR 排队待审。值得关注的是，社区贡献者 yrxeva 在一天内密集提交了 5 个功能建议（涉及 FTS5 搜索、条件触发、崩溃安全任务账本、Cron 路由、WebUI 流状态修复），且其中 2 个已迅速落地为 PR 并合并，显示出社区提案→实现的高转化率和维护团队的积极响应。整体项目健康度良好，无阻塞性严重 Bug，但存在若干 P2 级别的稳定性修复待审。

---

## 2. 版本发布

24小时内无新版本发布。

---

## 3. 项目进展

今日合并/关闭了 12 条 PR，关键进展如下：

**🏃 性能优化**
- **PR #5507** — SQLite FTS5 全文搜索索引，将历史会话搜索从 JSONL 全量扫描提升为近实时索引查询，解决会话增长后的搜索延迟问题。*（由 Issue #5509 驱动，当日提交当日合并）*
- **PR #5508** — 引入 `ConditionalTriggerRuntime` 条件触发运行时，以纯 Python 轻量条件监听替代心跳轮询的完整 LLM 调用，实现事件驱动自动化的 **零 token 消耗**。*（对应 Issue #5510）*

**🛠️ 稳定性修复**
- **PR #5496** — 修复 AgentRunner 中 no-tools 请求（malformed-call recovery、空响应终结等路径）缺少 wall-clock 超时保护的问题，防止会话级锁被卡死
- **PR #5517** — 修复 Windows 平台 exec 进程时序竞争：在 stdout 先于进程退出通知到达时重新轮询，并以显式 root-exit 握手替代超时推测

**🧩 架构重构**
- **PR #5480** — 定义不可变类型化 `LLMUsage` 契约，统一规范化 OpenAI Chat/Responses、Anthropic、Bedrock 各边界的 token 与缓存语义，为上层用量追踪奠定基础
- **PR #5481** — 在 typed contract 之上新增统一 provider usage 后端，为 gateway 管理的 WebUI/TUI 会话的每次重试记录 usage

**📦 其他**
- **PR #5506** — WebUI 所选项目工作区现在会映射为模型当前工作目录，并保持 prompt-cache 复用

---

## 4. 社区热点

**#5350 — QwenCloud provider 兼容路径提案**（评论 2，跨越 12 天仍活跃）
> 链接: https://github.com/HKUDS/nanobot/issues/5350

该 Issue 由 evelyn-jialin-zhang 于 8 月 12 日提出，至今仍有讨论热度，是今日评论最多的议题。核心诉求：NanoBot 已支持 DashScope（阿里云国内平台），但 QwenCloud 是 Qwen 面向国际开发者的平台，两者 provider ID、API key 和 endpoint 均不同。提案希望在不破坏现有 DashScope 配置的前提下，增加一条向后兼容的 QwenCloud 路径。这反映了 NanoBot 用户群体的国际化扩张需求，以及多平台共存时的配置迁移痛点。

**#5512 — WebUI 在 Gateway 重启后卡在 spinning 状态**（评论 1，同日修复 PR 已提交）
> 链接: https://github.com/HKUDS/nanobot/issues/5512

该 Bug 在今日获得了极高响应速度：用户报告后数小时内，PR #5514 即提交修复（清除陈旧流状态），闭环效率值得肯定。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 对应修复 PR |
|---------|------|------|------------|
| **P1** | WebUI 在 Gateway 重启后前端永远收不到 `goal_status: idle`，`isStreaming` 永远为 true，对话看似挂起 | 🔴 待合并 | #5514 (已提交，closes #5512) |
| **P1** | no-tools 模型请求（malformed-call recovery、空响应终结）缺少超时保护，可能长时间持锁 | ✅ 已合并 | #5496 |
| **P2** | Windows exec 测试中 stdout 到达先于进程退出通知导致时序竞争 | ✅ 已合并 | #5517 |
| **P2** | Agent 重复调用相同工具时无循环检测，会烧尽 `max_iterations` 而用户无感知 | 🟡 待合并 | #5344（已等待 13 天） |
| **P2** | 会话回复超时任务的失败被静默丢弃（`SendSessionMessageTool` 后台任务） | 🟡 待合并 | #5515 |
| **P2** | 时区相关测试问题：`record_token_usage()` 未传 `timezone_name` 导致每日约 5 小时窗口内确定性失败 | 🟡 待合并 | #5349（已等待 12 天） |

> 对 P1 问题的评估：**#5512 需要优先合并**、**#5496 已解决**。整体稳定性风险可控，但两个 P2 修复 PR 在队列中等待时间偏长。

---

## 6. 功能请求与路线图信号

**已进入 PR 阶段（大概率纳入下版本）**
- **FTS5 会话搜索**（#5509 → #5507 已合并）✅
- **条件触发运行时**（#5510 → #5508 已合并）✅
- **Gateway 重连后清空流状态**（#5512 → #5514 待合并）🔜
- **Cron 结果路由到可配置频道 + 批量归档**（#5513，尚无 PR，提案中建议维护独立 job 列表并支持批量管理）
- **崩溃安全的任务账本**（#5511，持久化多步任务进度到 `tasks.json`，原子写入防崩溃丢失）

**早期提案（暂无 PR，信号较弱）**
- **QwenCloud 路径**（#5350）：社区呼声存在但 12 天无 PR，可能需要维护者确认优先级
- **AnySearch 搜索提供商**（#5505）：第三方主动提出集成计划，零成本接入机会，建议评估
- **Telegram 富消息与流式互斥**（#5516）：`rich_messages: true` 与 `streaming: true` 不可共存，提交者已指出 Bot API 10.1–10.3 drafts 可解决，属于明确技术路径的功能缺口

**独立提案（#5509、#5510、#5511、#5513 均由 yrxeva 提出）** — 该贡献者同时提交了 Issue 与实现 PR，规格清晰且实现质量高，建议维护者优先审查其剩余提案。

---

## 7. 用户反馈摘要

- **QwenCloud**（#5350）：用户已有 DashScope 配置在使用中，不希望破坏现有路径；新增 QwenCloud 需要解决 provider ID、API key、endpoint 的共存问题。潜在冲突：两平台同属 Qwen 生态，容易混淆配置。
- **Telegram 富消息**（#5516）：用户表示 `rich_messages: true` 与 `streaming: true` 当前互斥，导致富消息功能实际不可用，日志显示的 rendering 错误（`editMessageText` legacy 路径）与 Bot API 新版本能力不匹配——这是对 Telegram 集成完整性的直接诉求。
- **WebUI 重启卡顿**（#5512）：用户报告 "turn appears hung even though the backend may have finished"——感知上的卡死比实际失败更影响体验，用户可能无法区分是等待还是死锁。
- **FTS5 性能**（#5509，由 yrxeva 提出）：数百个会话时搜索每次全量扫描 JSONL——这暗示用户已有大量会话积累，搜索性能成为实际瓶颈。

---

## 8. 待处理积压

### ⏳ 等待超过 7 天的 PR
| PR | 主题 | 等待天数 | 状态 |
|----|------|---------|------|
| [#5291](https://github.com/HKUDS/nanobot/pull/5291) | persist subagent conversation transcripts | 17 天 | OPEN |
| [#5344](https://github.com/HKUDS/nanobot/pull/5344) | warn on repeated identical tool calls | 13 天 | OPEN |
| [#5349](https://github.com/HKUDS/nanobot/pull/5349) | timezone_name in settings tests | 12 天 | OPEN |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | release completed task groups | 6 天 | OPEN |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | heartbeat model_override config | **60 天** | OPEN |

> ⚠️ **重点提醒**：PR #4549（heartbeat model_override）已积压 60 天，是当前最久的待审 PR。该功能允许为 heartbeat 指定更便宜的模型，对成本敏感的用户有直接价值，建议维护者优先评估。

### 📋 长期未响应 Issue
- **#5350**（QwenCloud，12 天无 PR）— 暂无维护者回应记录

---

*报告生成时间：2026-08-25 | 数据源：HKUDS/nanobot GitHub 仓库*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，我是你的 AI 智能体与个人 AI 助手领域开源项目分析师。根据 Hermes Agent 在 2026-08-25 的 GitHub 数据，我生成了以下项目动态日报。

---

# Hermes Agent 项目动态日报 — 2026-08-25

## 1. 今日速览

Hermes Agent 项目今日处于 **高活跃度** 状态，Issue 与 PR 更新均达到 50 条的上限，显示出社区参与度和开发迭代速度都非常快。值得注意的是，问题追踪系统中有 **47 个新开或活跃的 Issue**，而合并/关闭的 PR 仅有 5 个，这表明维护者在处理新报告的同时，可能面临一定的 PR 积压压力。社区讨论焦点集中在 **会话状态管理、桌面端稳定性、更新机制健壮性** 以及 **技能（Skill）系统的执行一致性** 等核心痛点上。同时，有多个针对关键 Bug 的修复 PR 在今日被提交，显示出项目对稳定性问题的响应较为迅速。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有 5 个 PR 被合并或关闭，主要集中在 Bug 修复和功能收尾：

- **[PR #60087] (已合并)** feat(guardrails): detect repeated tool results independent of args/failure
  这是一个重要的功能增强，为 `ToolCallGuardrailController` 添加了内容重复检测机制。它能够识别出即使工具调用的参数不断变化，但返回结果完全相同的“死循环”场景，从而有效防止 Agent 陷入无意义的重复调用。这是对现有循环守卫机制的重要补充。

- **[PR #94333] (已关闭)** fix(desktop): HUD frost follows the scrim, and enumeration says why it failed
  该 PR 修复了桌面端 HUD（平视显示器）模式的两个问题：一是界面在 Agent 思考时可能出现的“白底白字”问题；二是 HUD 无法识别到后方浏览器窗口且无日志输出的问题，提升了 HUD 模式的可用性和可调试性。

- **[PR #87495] (已关闭)** feat(desktop): add Spatial runtime plugin
  这是一个新功能，为桌面端引入了名为 "Spatial" 的运行时插件，提供了无限平移/缩放画布、项目筛选和本地固定等功能，丰富了桌面端的项目管理体验。

- **[PR #92701] (已关闭)** docker backend: exit 125 "too many colons" — persistent sandbox path built from unsanitized task_id
  该 Bug 的关闭表明其对应的修复方案已被接受或实现。该问题会导致当任务ID包含冒号时，所有Docker后端的工具调用失败，是一个严重的影响会话执行的问题。

- **[PR #59499] (已关闭)** Kanban dispatcher ignores max_in_progress_per_profile, spawns all tasks concurrently
  该 Issue 的关闭意味着“看板调度器忽略并发限制”的问题已得到解决，这有助于防止因任务并发数过高而导致的资源耗尽（如浏览器自动化实例）。

整体来看，项目在强化 Agent 行为鲁棒性（防循环）、完善桌面端体验（HUD修复、Spatial插件）以及修复后端执行问题（Docker、Kanban调度）方面取得了进展。

## 4. 社区热点

- **[Issue #66616] (评论: 91)** [skills-index-watchdog] Skills index is stale or degraded
  该自动化脚本报告的“技能索引过期”问题在今日收到了大量关注和评论。虽然这是一个自动化机器人提交的运维问题，但 91 条评论的热度表明该问题可能影响了许多用户的技能发现和使用，社区在积极讨论临时解决方案或寻求官方修复。

- **[Issue #85125] (评论: 20)** Tracking: unified deadline layer — architectural fix for the timeout/hang backlog (4 phases)
  这是一个由社区成员发起的，旨在从架构上彻底解决 **400多个** 超时/挂起类 Issue 的提案。该提案被标记为 `needs-decision`，且评论活跃，反映出社区对这类长期存在的“顽疾”有非常强烈的解决意愿，并已开始自发地进行问题归类和方案设计。

- **[Issue #25833] (评论: 10)** Self-created skills lack mechanism-level guarantees for correctness and execution consistency
  关于“自我创建技能的正确性保证”的讨论也在持续。这触及了 Agent 自我进化能力的核心信任问题，即如何确保 Agent 学习并固化的技能是可靠和安全的。社区对此高度关注，期望有机制层面的保障。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在几个高发区域，按严重程度排列如下：

**高严重度 (P1)**
- **[Issue #92145]** `hermes update` leaves running services on stale `sys.modules` when the auto-restart phase aborts on an ImportError
  **描述**: 更新命令在自动重启阶段遇到 `ImportError` 后，会导致正在运行的服务仍使用旧代码，且可能处于不一致状态。
  **状态**: 无修复 PR。

- **[Issue #94248]** [Bug]: Gateway SIGSEGV 17-72 ms after delegate deadlines with Codex SSL reads (macOS arm64, v0.20.4)
  **描述**: 在 macOS arm64 上，Gateway 在委托任务达到截止期限后发生 `SIGSEGV` 崩溃，且与 Codex SSL 读取有关。这是一个严重的稳定性问题。
  **状态**: 无修复 PR。

- **[Issue #94258]** fix(state): retry transient NULL-without-exception SQLite SystemError
  **描述**: 会话写入时遇到未处理的 `SystemError`，导致对话轮次意外中止。
  **状态**: 无修复 PR。

- **[Issue #94264]** Update can restore invalid local Python and report success while every agent turn fails
  **描述**: `hermes update --gateway` 可能恢复包含语法错误的本地 Pyhton 代码，并报告更新成功，但随后所有 Agent 任务都会失败。这在通过消息平台远程使用时可能导致锁定。
  **状态**: 无修复 PR。

**中严重度 (P2)**
- **[Issue #93888]** [Bug]: Current Desktop sends a local runtime ID to a Remote Gateway and cannot restore stored sessions
  **描述**: Windows 桌面端无法从远程 Gateway 恢复已存储的会话。
  **状态**: 无修复 PR。

- **[Issue #81051]** OAuth-backed MCP connections get permanently stuck ("parked") after a teardown lock race
  **描述**: OAuth 认证的 MCP 连接在运行约4小时后会永久卡住，只能通过重启 Gateway 恢复。已有相关 PR **#94327** 提交。
  **状态**: 有修复 PR。

- **[Issue #92701]** (已关闭) docker backend: exit 125 "too many colons"
  **描述**: 该问题已被关闭，表明修复可能已经合并。

- **[Issue #94324]** Background curator read-before-write guard can never pass
  **描述**: 由于 `ContextVar` 在 worker 线程中丢失，后台策展人 (curator) 永远无法通过“先读后写”检查，导致其技能改进功能失效。已有相关 PR **#94326** 和 **#94330** 提交。
  **状态**: 有修复 PR。

- **[Issue #94328]** MEDIA attachments delivered twice when the file path contains a space
  **描述**: Windows 下，当媒体文件路径包含空格时，附件会被发送两次。已有相关 PR **#94329** 提交。
  **状态**: 有修复 PR。

**低严重度 (P3/P4)**
- **[Issue #93648]** Slack native streaming: every streamed turn posts a duplicate message
- **[Issue #93280]** [Bug]: Desktop /context fails and Context Usage status-bar indicator is unavailable
- **[Issue #90229]** [Bug]: Desktop right-sidebar file tree stuck on skeleton forever after boot
- 以及多个 Windows 桌面端的 UI/布局 Bug (如 #94319, #92818, #91245 等)。

## 6. 功能请求与路线图信号

- **架构级修复**：**[Issue #85125]** 提出的“统一截止时间层（unified deadline layer）”方案是一个重要的路线图信号。该提案旨在系统性解决长期困扰项目的超时/挂起问题，虽然目前是 `needs-decision` 状态，但获得较多讨论，极有可能被维护者纳入后续版本的核心重构计划。

- **会话空间（Session Spaces）**：**[PR #91248]** 提议引入后端支持的“会话空间”，允许对话独立于工作目录进行分组，并可绑定到特定网关渠道。这能显著改善多项目、多场景下的会话管理体验，有望在未来版本中落地。

- **技能系统的可靠性**：**[Issue #25833]** 和相关的修复 PR（#94326, #94330）表明，官方正在补齐技能创建和执行链路上的机制性缺陷。这不仅是 Bug 修复，更是对 Agent 自我进化能力的一次重要加固。

- **桌面端增强**：**[PR #87495]** 的 Spatial 插件、**[Issue #90654]** 提出的“应用内浏览器元素选择器” RFC，以及 **[Issue #92885]** 提出的“独立配色方案”功能，都表明桌面端正在从一个简单的聊天界面，演变为一个功能更丰富的 Agent 工作台。

- **API 提供商扩展**：**[PR #86612]** 为 Mistral、Cohere、DeepInfra、SiliconFlow 添加了自动发现注册表，这延续了项目对多模型提供商支持的承诺，降低了新用户接入的门槛。

## 7. 用户反馈摘要

- **对更新机制的担忧**（来自 Issue #92145, #94264）：多位用户反馈 `hermes update` 命令在异常情况下会导致服务不可用或运行旧代码，这引发了关于更新安全性和回滚机制的讨论，是影响用户信任的关键问题。
- **对会话持久化的不满**（来自 Issue #93888）：桌面端无法恢复远程会话的 Bug 直接破坏了核心工作流，用户情绪较为急迫。
- **对桌面端体验的细节追求**（来自 Issue #94319, #92885）：用户对窗口管理的细节（如无法还原全屏窗口）以及应用内浏览器的渲染体验提出了具体的改进建议，表明用户已将 Hermes Desktop 视为日常高频使用的生产力工具。
- **对技能系统一致性的深度关切**（来自 Issue #25833, #94324）：技能系统的问题不仅仅是 Bug，用户（尤其是开发者）更关心其作为“Agent 记忆和进化机制”的可靠性，希望有更强的保证（guarantees）。
- **积极的社区自救**（来自 Issue #85125, #5114）：面对复杂的历史遗留问题，社区成员选择主动提出架构级的解决方案和功能增强提案（如 Autoresearch skill），表现出对项目发展方向的深度参与和共建意愿。

## 8. 待处理积压

- **长期未决的架构级提案**：**[Issue #85125]** (创建于 2026-08-13) 和 **[Issue #5114]** (创建于 2026-04-04) 都因为涉及重大改动或需要设计决策，长期处于 `needs-decision` 状态。这类提案是社区智慧的结晶，建议维护者能抽出时间评估并给出明确回应，以保持社区参与热情。

- **高严重度 Bug 亟待确认**: 今日报告的多个 P1 级 Bug（如 #92145, #94248, #94264）尚无对应的修复 PR。这些 Bug 分别影响更新、稳定性和远程控制，是当务之急。官方应对这些报告做出快速响应，至少确认问题并给出临时规避方案。

- **桌面端文件树问题**：**[Issue #90229]** 和 **[Issue #91245]** 都描述了桌面端侧边栏文件树在启动后不刷新/卡在骨架屏的问题。这两个 Issue 可能指向同一根因，建议合并处理。

- **低评论的功能请求**: 像 **[Issue #79757]** (i18n支持) 这样的功能请求虽然评论不多，但对于 Hermes 这样面向全球开发者的项目，国际化是扩大用户基础的必要功能。维护者可以考虑将其纳入路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-25** | **数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目过去 24 小时活跃度中等偏上。共产生 3 条 Issue 更新（全部为活跃状态，无新关闭）及 3 条 PR 更新（1 条待合并、2 条合并/关闭），无新版本发布。值得关注的是 2 条长期遗留的 PR（#1929、#1551）在今日被正式合并/关闭，标志着配置安全修复与多 PR 集成工作终于落地。与此同时，Issue #806（WebUI 支持）持续保持高热度（10 条评论、8 个 👍），是当前社区最受期待的功能方向。整体来看，项目处于"功能推进+技术债清理"并行的阶段，社区参与度健康。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日有 2 个 PR 合并/关闭，均为长期搁置的补丁：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#1929](https://github.com/sipeed/picoclaw/pull/1929) | fix: apply security credentials before config validation in web handlers | ✅ 已合并 | 修复了 Web 启动器配置保存时，即使 token 已正确存储在 `.security.yml` 中，仍因校验顺序错误而报错 `"channels.pico.token is required"` 的问题。这是一个**安全相关的正确性修复**，解决了配置校验与安全凭据加载顺序的竞态矛盾，对 Web 管理界面用户有直接影响。 |
| [#1551](https://github.com/sipeed/picoclaw/pull/1551) | fix: merge PR #1428 #1422 #1417 | ✅ 已关闭 | 将三个历史 PR 的修复合并为一个补丁，属于技术债清理与积压处理，具体修复内容涉及多个分散的小问题。 |

此外，[#3299](https://github.com/sipeed/picoclaw/pull/3299)（Exa 原生 Web 搜索提供商）仍处于待合并状态，若合入将为 `tools.web` / `web_search` 增加一个全新的搜索后端，扩大工具的覆盖面。

**项目向前推进评估**：今日的 PR 合并主要集中在维护性修复而非新功能上线，但这两项修复（特别是 #1929 的配置安全顺序）解决了实际用户的痛点，且为后续 WebUI 功能奠定更稳定的配置管理基础。

---

## 4. 社区热点

### 最热 Issue：#806 — [Feature] Add webUI support (Refactoring now)

- **链接**：[sipeed/picoclaw Issue #806](https://github.com/sipeed/picoclaw/issues/806)
- **热度**：10 条评论 | 8 个 👍 | 标签：`enhancement`, `priority: high`, `type: roadmap`
- **状态**：2026-02-26 创建，至今仍活跃（最后更新 2026-08-24）

**分析**：这是当前社区最大的呼声——为 PicoClaw 提供浏览器端 Web UI。Issue 明确指出 TUI 虽好但对"非技术用户"门槛过高，Web UI 是降低使用门槛的最自然路径。标签中 `priority: high` 与 `type: roadmap` 表明项目方已将其纳入路线图，且标题中"Refactoring now"暗示相关重构工作已在推进。8 个 👍 在 Issue 中属于较高水平，反映需求覆盖面广。

### 次热 Issue：#3269 — MCP 服务器连接失败导致 Agent 循环挂起

- **链接**：[sipeed/picoclaw Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)
- **热度**：7 条评论 | 1 个 👍
- **状态**：已标记 `stale`，但今日有更新（2026-08-25）

---

## 5. Bug 与稳定性

今日无新 Bug 报告，但 2 个历史 Bug 仍在活跃讨论中：

### 中高严重度 · Agent 循环挂起

- **Issue [#3269](https://github.com/sipeed/picoclaw/issues/3269)**：当 MCP 服务器连接失败时，Agent 循环会挂起（hang），导致 PicoClaw 聊天界面完全停止响应用户。
- **严重程度**：⭐️⭐️⭐️⭐️（4/5）——直接影响核心可用性，MCP 是常用扩展方式，连接失败是实际情况中常见的网络/配置问题。
- **影响范围**：使用 MCP（Model Context Protocol）服务的所有用户。
- **修复状态**：**暂无对应 fix PR**，该 Issue 已标记 `stale`，需要维护者关注并推进修复。
- **环境信息**：PicoClaw nightly（git 2cf030d2）、Go 1.25.11、Qwen3 模型。

### 中严重度 · Slack 媒体上传完全不可用

- **Issue [#3338](https://github.com/sipeed/picoclaw/issues/3338)**：Slack 媒体上传始终失败，报错 `file.upload.v2: file size cannot be 0`。根因已定位：`SendMedia` 构建 `slack.UploadFileParameters` 时未设置 `FileSize` 字段，导致 slack-go SDK 在网络请求前即拒绝所有上传。
- **严重程度**：⭐️⭐️⭐️（3/5）——功能完全不可用，但仅影响 Slack 集成用户。
- **修复难度**：低——根因已明确定位，只需补上 `FileSize` 字段赋值。
- **修复状态**：**暂无 fix PR**。代码路径已指明，适合作为 good first issue 或快速补丁。

---

## 6. 功能请求与路线图信号

### WebUI 支持（高优先级，路线图确认）

- **Issue [#806](https://github.com/sipeed/picoclaw/issues/806)**：社区最强烈的功能需求。结合 `priority: high` 和 `type: roadmap` 标签及标题中"Refactoring now"的线索，**大概率已被纳入下一版本规划**。今日 #1929 合入的配置安全修复也可视为 WebUI 的铺垫工作之一。

### 原生 Exa Web 搜索提供商

- **PR [#3299](https://github.com/sipeed/picoclaw/pull/3299)**：为 `tools.web` / `web_search` 增加 Exa 作为原生搜索后端，支持 `d`/`w`/`m`/`y` 时间范围过滤。当前处于**待合并**状态，一旦合入用户将有更多搜索后端选择，减少依赖外部工具链。虽已标记 `stale`，但功能本身有价值，值得维护者审核合并。

---

## 7. 用户反馈摘要

### 用户痛点

1. **WebUI 需求强烈（#806）**：用户反馈 TUI 对非技术用户极不友好，浏览器界面是最直观的管理方式。评论中透露出 "非技术用户"（non-tech users）是 PicoClaw 目前未能覆盖的人群，WebUI 被认为是扩大用户基数的关键路径。

2. **MCP 故障容错缺失（#3269）**：用户 ruiyigen 报告 MCP 连接失败导致整体对话中断，暴露了 Agent 循环缺少超时/降级/错误恢复机制。这是**稳定性方面的核心诉求**——单一外部服务故障不应导致整个系统不可用。

3. **Slack 集成从"可用"到"不可用"的体验落差（#3338）**：错误信息 `file size cannot be 0` 对用户具有迷惑性，实际问题是代码未设置 `FileSize` 字段。用户 octavioturra 提供了精确的根因分析和修复建议，属于可以快速行动的优质报告。

### 用户满意度信号

- WebUI 的 8 个 👍 表明用户对路线图方向持积极态度，但 `priority: high` 持续半年多未落地也可能积累等待成本。
- 今日 #1929 修复了 Web 配置保存的长期错误，对使用 Web 管理界面的用户是实际利好。

---

## 8. 待处理积压

以下 Issue/PR 长期未获响应或处理，建议维护者优先关注：

| 项目 | 链接 | 时长 | 严重度/优先级 | 备注 |
|---|---|---|---|---|
| Issue #3269 — MCP 连接失败导致挂起 | [链接](https://github.com/sipeed/picoclaw/issues/3269) | 36 天+（7-20 创建） | 🔴 高 | 已标记 `stale`，今日仍在更新，需指派处理 |
| Issue #3338 — Slack 媒体上传失败 | [链接](https://github.com/sipeed/picoclaw/issues/3338) | 8 天 | 🟡 中 | 根因已定位，修复成本低，适合快速 patch |
| PR #3299 — Exa 搜索提供商 | [链接](https://github.com/sipeed/picoclaw/pull/3299) | 30 天 | 🟢 功能增强 | 已标记 `stale`，功能有价值，建议审核合并或关闭 |
| Issue #806 — WebUI 支持 | [链接](https://github.com/sipeed/picoclaw/issues/806) | 6 个月+ | 🟠 高（路线图） | 社区持续关注，"Refactoring now"表明有进展但需同步 |

---

*本日报由 AI 分析师基于 GitHub 公开数据自动生成，仅供参考，不构成投资或开发决策建议。*


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期**: 2026-08-25  
**数据窗口**: 2026-08-24 ~ 2026-08-25  
**数据来源**: github.com/qwibitai/nanoclaw


## 1. 今日速览

NanoClaw 项目今日保持高活跃度：24 小时内产生 21 条 PR 更新（18 条待合并）和 2 条 Issue 更新，并发布了 **v2.3.0** 版本（含 Slack 体验的破坏性变更）。社区贡献者密度显著提升——多条 PR 来自非核心团队的独立贡献者（如 `dim0627`、`wakqasahmed`、`witek`、`brentkearney`），主题集中在 **macOS 兼容性修复**（4 条相关 PR）与 **新渠道/集成接入**（Mattermost、Dial、Apple Container 驱动）。值得注意的信号是：`better-sqlite3` 在 macOS 上因 Node 版本下限标注过宽导致段错误（Issue #3497 ），且多处 PR 涉及 `/update-nanoclaw` 事务控制器与符号链接解析问题，表明**更新链路稳定性**是当前社区最关注的话题。整体活跃度评估：**高**——生态正处在渠道扩展与稳定性加固并行推进的阶段。


## 2. 版本发布

### v2.3.0（2026-08-24 发布）

- **⚠️ 破坏性变更**：针对经典单机器人（single-bot）Slack 安装，推出**每 Agent 独立置备（per-agent provisioned）的 Slack App**、支持从 Slack 直接派生（spawn）Agent，以及多项 UX 改进。
- **迁移说明**：经典 Slack 集成方式保持原样、不受影响——本次变更要求社区做出**决策**（是否迁移），而非强制迁移。新安装默认采用新体验；非 Slack 渠道不受影响。
- **适配器说明**：该版本与 `@chat-adapter/telegram@4.30.0` 的上游修复保持一致（见 Issue #2767 ），Telegram 信道已原生支持 `MarkdownV2`，此前在 `channels` 分支中的 legacy-Markdown 消毒器已过时。

> 建议：使用经典 Slack 集成且暂不打算迁移的团队，可暂缓升级；新部署建议直接采用新 Slack 体验。


## 3. 项目进展

今日合并/关闭的 PR 共计 3 条，其中两条为 chiptoe-svg 的 Codex 生态成果，一条为 AI-Coding-CLI 选择器：

| PR | 内容 | 状态 | 意义 |
|---|---|---|---|
| [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) | **feat(setup)**: AI-coding-CLI 选择器——setup 流程可从 Claude Code / Codex 中挑选助手 | 已合并 | setup 流程走向多供应商适配层，为后续接入 Aider/Gemini-CLI 等铺路 |
| [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) | **feat(codex)**: 将 persona + skill 目录同步暴露给 Codex agents（与 Claude 对齐） | 已合并 | 切换 provider 从"内容重写"变为"配置变更"，大幅降低迁移成本 |
| [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) | Telegram legacy-Markdown 消毒器随 v4.30.0 适配器废弃 | 已关闭 | 技术债清理，`channels` 分支的 workaround 代码可移除 |

**整体判断**：合并集中在 Codex 兼容层与 setup 多供应商化，v2.3.0 发布后下一阶段显然**将把 Slack/Telegram 渠道体验推齐**，并通过 template-ref 机制打通"聊天中创建 Agent"的端到端流程（见 PR #3396 与 #3428 的配合 ）。

当前 **18 条待合并 PR** 形成了清晰的路线图信号：Mattermost 正式接入（#3502、#3507 配套）、Apple Container 驱动（#3503）、durable host-coordination state（#3508）三大主线。


## 4. 社区热点

### 🔥 热点一：#3497 — better-sqlite3 13 在 macOS 上段错误（新开 Issue，0 评论）

- **链接**: [Issue #3497](https://github.com/nanocoai/nanoclaw/issues/3497)
- **内容**: `better-sqlite3@13.0.3` 在 Node 版本 ≥22 但 <22.14.0 的 macOS 上 `new Database()` 直接段错误。声明的最低版本 `>=22` 过宽，受影响用户通过所有检查后安装得到一个"没有可用数据库层"的坏环境，`pnpm test` 无法完成。
- **分析**: 虽然评论数为 0，但该 Issue 直接戳中**安装链路防御性校验不足**的软肋，且与今日多条 macOS 更新修复 PR 形成了共鸣——社区对 macOS 作为一等公民的期望在提升。

### 🔥 热点二：#3508 — durable host-coordination state（core-team PR，评论最多之一）

- **链接**: [PR #3508](https://github.com/nanocoai/nanoclaw/pull/3508)
- **内容**: 该 PR 是"让 host 重启变安全"的奠基性工作。当前所有协调状态（coordination facts）都只存在于进程内存中——重启会杀掉等待审批的 waiter、重置投递重试计数（**毒消息在崩溃循环中会无限重试**）、丢失"重建应用后停止/重启意图"，并让陈旧的 finish 事件干扰新 session。该 PR 建立持久化协调状态的接缝（seams），供后续消费。
- **分析**: 这是今天**架构层面最重的一条 PR**。它揭示了一个用户不易察觉但影响严重的稳定性问题（崩溃循环下毒消息无限重试），虽名为"dormant groundwork"，但意图明确——为 host 重启安全铺路。社区关注度高的原因在于它直指"自更新/重启后状态丢失"的真实痛点。

### 🔥 热点三：#3506 — macOS 上 update 事务控制器修正（6 项修复，1 条 PR）

- **链接**: [PR #3506](https://github.com/nanocoai/nanoclaw/pull/3506)
- **内容**: 6 项修复，全部在真实 macOS 更新过程中被触发，其中 1 项同时影响 Linux fallback 模式。这印证了 #3497 所暴露的"macOS 体验未达一等公民"的整体判断。


## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 对应 PR |
|---|---|---|---|
| 🔴 高 | **`better-sqlite3@13` 在 macOS + Node ≥22 但 <22.14.0 段错误**，安装后无可用数据库层，`pnpm test` 无法完成 | 无 fix PR | [Issue #3497](https://github.com/nanocoai/nanoclaw/issues/3497) |
| 🟠 中高 | **macOS 上 `/update-nanoclaw` 事务控制器 6 项缺陷**（含 1 项 Linux fallback 共有缺陷） | 已有 fix PR | [#3506](https://github.com/nanocoai/nanoclaw/pull/3506) |
| 🟠 中高 | **update 控制器路径比较不解析符号链接**，导致 macOS（/tmp 为 symlink）上更新逻辑误判 | 已有 fix PR | [#3499](https://github.com/nanocoai/nanoclaw/pull/3499) |
| 🟡 中 | **OneCLI 网关默认绑定地址错误**：只写了 `api-host` 到 `.env`，但网关自身 `docker-compose` 未被告知，导致 agent 容器无法访问 | 已有 fix PR | [#3302](https://github.com/nanocoai/nanoclaw/pull/3302)，修复 #2903 |
| 🟡 中 | **毒消息在崩溃循环中无限重试**（重启重置重试计数） | 有奠基性 PR | [#3508](https://github.com/nanocoai/nanoclaw/pull/3508) |
| 🟢 低 | Telegram legacy-Markdown 消毒器过时 | 已关闭 | [Issue #2767](https://github.com/nanocoai/nanoclaw/issues/2767) |

**规律**：macOS 兼容性是当前最大的稳定性短板。6/21 的今日 PR 与 macOS 直接相关——这是一个**修复密度极高**的信号，说明维护者已意识到问题并积极回应。


## 6. 功能请求与路线图信号

| 功能需求/信号 | 状态 | 来源 | 可能纳入版本 |
|---|---|---|---|
| **Mattermost 正式渠道接入**（含安装 skill） | 两条配套 PR 待合并：#3502（SDK 适配器）+ #3507（安装 skill） | 社区贡献者 `glifocat` | **v2.4.0（较大概率）** |
| **Apple Container（macOS microVM）session 驱动** | PR #3503 待合并，`NANOCLAW_RUNTIME_DRIVER=container` | 核心贡献者 `chiptoe-svg` | v2.4.0 或 v2.5.0 |
| **从聊天中通过模板创建 Agent**（`create_agent` 工具 + `ncl templates list`） | PR #3396 + #3428 配套，均为 core-team | 核心贡献者 | v2.4.0 |
| **MindsHub provider 文档与 setup skill** | PR #3493 待合并（docs-only） | 社区贡献者 `torrmal` | v2.4.0 |
| **附件路由到所选邮箱挂载点** | PR #3505 待合并 | 社区贡献者 | 视评审进度 |
| **Dial 渠道 README/变更日志补充** | PR #3501 + #3432 配套 | 核心贡献者 | 已列入 changelog 计划 |
| **将 Claude Code skill 目录暴露给非 Claude providers** | PR #2337 待合并（2026-05-07 开启，已 3 个月+） | 核心贡献者 | 长期未合并，见"待处理积压" |

**判断**：v2.3.0 是 Slack 体验的分水岭；v2.4.0 大概率以 **Mattermost 正式接入 + 模板建 Agent + Apple Container 驱动** 为核心卖点，macOS 稳定性修复将作为补丁密集合入。


## 7. 用户反馈摘要

> 数据说明：今日 2 条 Issue 均无较多评论，#3497 无评论、#2767 仅 1 条评论。以下基于 PR 描述与 PR 间相互引用提炼，非直接用户评论。

### 已识别的真实用户痛点

1. **macOS 安装即坏的挫败感（Issue #3497 ）**: `better-sqlite3` 段错误发生在所有检查通过之后——用户走完流程、安装"成功"，最后得到一个无法运行测试的环境。这是"最后一公里失效"型 bug，对信任损耗极大。

2. **macOS 更新事务的不确定性（PR #3506 与 #3499 ）**: 作者 `chiptoe-svg` 明确写到"Every defect was hit live while updating a real macOS install"。这不是人为构造的测试场景，而是真实用户在真实机器上反复碰壁。特别值得注意的是 `/tmp` 为符号链接导致路径比较失败（#3499 ）——这类"日常但隐蔽"的系统差异，正是 macOS 用户高频抱怨的来源。

3. **自更新/重启后状态丢失的担忧（PR #3508 ）**: 该 PR 的存在本身就说明用户已遭遇"重启后等待审批被取消、重试计数清零、重启意图丢失"等场景。毒消息无限重试是最严重的一条——它可能让一个坏消息把整个 agent 拖入崩溃循环。

### 推荐的自更新/重启体验

- 从 PR 描述中可以确认，实际用户（如 `brentkearney` 报告 #3497 ）对"安装/更新后无法正常运行"的容忍度很低；`chiptoe-svg` 连续提交多条 macOS 修复（#3503、#3506 ），说明核心维护者也在真实 macOS 环境上遭遇了同等痛点，并正在积极解决。


## 8. 待处理积压

### ⚠️ 长期未合并的重要 PR

| PR | 开启时间 | 已搁置时长 | 说明 |
|---|---|---|---|
| [#2337](https://github.com/nanocoai/nanoclaw/pull/2337) **feat(providers): surfacing Claude Code skill catalog to non-Claude providers** | 2026-05-07 | **110+ 天** | 与 #2475（已合并）直接相关——#2475 做的是 Codex 对齐，#2337 做的是通用 skill 目录抽象。现 #2475 已合，**#2337 是完成该方向"最后一公里"的必要步骤**，建议优先评审 |
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) **tighten codex provider contracts** | 2026-05-09 | **108+ 天** | 将 Codex SDK 更新到当前 `codex app-server` JSON-RPC 契约，清除过时文档。与 #2475/#2337 同属 Codex 生态补全，互为依赖 |

### 建议

1. **尽快为 #3497 指派负责人**——这是今日唯一无 fix 对应的高严重度问题，Node 版本下限应更新为 `>=22.14.0` 或安装前做运行时检测。
2. **优先合并 #3508 的持久化协调状态接缝**——虽为奠基性工作，但它是解决"毒消息无限重试"与"重启丢状态"两大稳定性痛点的基础，越早合入越早暴露问题。
3. **关注 #2337 与 #2361 的积压**——两条 Codex 生态 PR 已搁置超 100 天，而 #2474/#2475 今日刚合并，若不及时处理前两者，会出现"半套能力上线、另一半永远待审"的割裂状态。

---

*本日报由 AI 自动生成，数据截至 2026-08-25。所有链接指向 GitHub 原始 Issue/PR。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-25

## 今日速览

NullClaw 今日活跃度处于 **中等水平**，过去 24 小时共 2 条新 Issue、1 条待合并 PR，无新版本发布。值得关注的是两条新 Issue 均指向 **自托管可配置性与可用性体验**：一是 Firecrawl 搜索引擎端点硬编码导致自托管实例无法接入，二是配对码隐藏后无法获取的可用性缺陷。PR 方面仅有 Dependabot 提交的 Alpine 基础镜像依赖升级，项目核心代码无新增提交。综合来看，项目目前处于 **稳定迭代期**，社区反馈集中于配置灵活性与部署体验优化。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 项目进展

今日无 PR 被合并或关闭。唯一活跃的 PR 为依赖升级类，尚未推进核心功能开发：

- **#956** [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group — 由 Dependabot 提交，将 Docker 基础镜像从 Alpine 3.23 升级至 3.24，自 2026-06-15 创建以来已滞留逾两个月，建议维护者尽快处理。 [链接](https://github.com/nullclaw/nullclaw/pull/956)

项目整体核心进度今日未有实质推进，属于常规维护日。

---

## 社区热点

今日社区讨论热度较低，两条新 Issue 均无评论，难以判断活跃讨论趋势。但从内容看，**#992 的可用性困惑** 和 **#993 的自托管需求** 共同反映了用户对 NullClaw 部署灵活性的关注，这可能是近期的社区讨论方向信号：

- **#992**「如果配对码被隐藏且不写入磁盘，我们如何查看它？」— 用户对 Gateway API 配对流程表示困惑，直指 #535 变更后配对码仅存于内存中，自托管用户无法正常获取。 [链接](https://github.com/nullclaw/nullclaw/issues/992)
- **#993**「为自托管实例提供可配置的 Firecrawl 搜索端点」— 用户明确表达了自托管场景下对搜索提供方端点的定制需求。 [链接](https://github.com/nullclaw/nullclaw/issues/993)

社区诉求核心：**自托管场景下的配置自由度与操作透明度**。

---

## Bug 与稳定性

今日报告 1 条 Bug，严重程度评定为 **中高（功能不可用但无数据损失风险）**，暂无对应修复 PR：

- **#992** [bug] 配对码隐藏后无法查看，用户无法完成 Gateway API 配置，阻断自托管用户的核心功能使用流程。该问题由 #535 的变更引入，属于回归性问题。 [链接](https://github.com/nullclaw/nullclaw/issues/992)

---

## 功能请求与路线图信号

今日收到 1 条功能请求：

- **#993** [enhancement] 使 Firecrawl 搜索端点可配置，以支持自托管实例。当前端点硬编码为 `https://api.firecrawl.dev/v1/search`，用户建议改为可配置文件/环境变量注入。 [链接](https://github.com/nullclaw/nullclaw/issues/993)

**路线图判断**：该请求与 #992 同属「自托管体验优化」方向，若项目维护者重视自托管用户群体，这两项可能被合并入下一版本迭代。目前无关联 PR，尚未进入开发阶段。

---

## 用户反馈摘要

- **部署可用性痛点（#992）**：用户 heredos 明确表示「困惑了好几天」，Pairing code 不可见导致 Gateway API 配置过程中断。这反映了 #535 的日志变更未同步更新文档或提供替代获取方式，用户可感知的体验缺口明显。
- **自托管配置需求（#993）**：用户 Crymfox 指出原生 `firecrawl` 搜索提供方无法接入自托管 Firecrawl 实例，说明目前搜索能力对自托管场景支持不足，用户需要更灵活的接入选项。

总体反馈情绪：**理解功能价值但受限于部署灵活性，期待更透明的配置与操作体验**。

---

## 待处理积压

- **PR #956**（dependencies）— Alpine 3.23→3.24 基础镜像升级，已滞留 **71 天**，Dependabot 提交但长期未获维护者处理。建议尽快合并或关闭以避免依赖过期风险。 [链接](https://github.com/nullclaw/nullclaw/pull/956)
- **Issue #992**（bug）— 配对码可访问性回归问题，属阻断性可用性缺陷，建议优先响应并评估是否需回滚或补充替代获取途径。 [链接](https://github.com/nullclaw/nullclaw/issues/992)

---

> **维护者提示**：项目核心功能稳定，但「自托管体验」已成为社区关注焦点。建议优先处理 #992 配对码回归问题、评估 #993 配置化需求，并清理积压的 Dependabot PR，以保持项目健康度与社区信任。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。这是基于 IronClaw (github.com/nearai/ironclaw) 2026-08-25 日 GitHub 活动数据生成的项目动态日报。

---

# IronClaw 项目动态日报 | 2026-08-25

## 1. 今日速览

IronClaw 项目今日活跃度极高，核心开发与社区反馈均呈现高频状态。过去24小时内，项目共产生 21 条 Issue 更新和 35 条 PR 更新，主要集中在 **WebUI 用户体验修复（特别是新用户引导流程）**、**Telegram 集成稳定性** 以及 **CI/CD 基础设施重构** 三大方向。值得关注的是，多个关键 PR（如 #7821, #7833, #7001）已成功合并，标志着在提升构建效率、增强新用户引导体验和优化模型缓存性能方面取得了实质性进展。同时，由 QA 团队发起的“Dogfooding & QA bug fixing”专项活动（#7843）正在进行中，大量用户反馈的 Bug 正在被快速验证和修复。项目整体呈现“大规模功能迭代+高强度缺陷修复”的健康、快节奏发展态势。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日合并/关闭了多项重要 PR，项目在多条技术路线上稳步推进：

- **CI/CD 基础设施重构（重大进展）**：
    - **合并** [#7821 - ci: single setup-rust composite — toolchain pin, mold, centralized build profiles (T1)](https://github.com/nearai/ironclaw/pull/7821)：关闭了 Issue #7798。该 PR 引入统一的 Rust 工具链配置，替换了此前分散在 12 个工作流文件中的 43 处工具链调用，旨在彻底解决“本地绿、CI 红”的漂移问题。
    - **推进** [#7817 - ci: nextest test pipeline, full-failure signal, PR unthrottle (T2)](https://github.com/nearai/ironclaw/pull/7817)：该 PR 正在推进中，目标是优化测试流水线，缩短测试时间并提供更全面的失败信号。这些改动将显著提升开发者的迭代效率和 CI 稳定性。

- **新用户引导（Onboarding）体验闭环**：
    - **合并** [#7833 - feat(suggestions): generate over the user's no-approval, read-only tools](https://github.com/nearai/ironclaw/pull/7833)：关闭了 Issue #7812。这是体验优化的重要一步，允许系统在生成建议时使用用户已连接的、只读的工具（如 Gmail），使得建议能基于用户的真实数据，大幅提升建议的相关性和实用性。
    - **合并** [#7857 - fix(webui): refresh conversations after starting suggestion](https://github.com/nearai/ironclaw/pull/7857)：修复了启动建议后，侧边栏会话列表不刷新的问题，补齐了用户引导流程的最后一环。

- **性能与稳定性**：
    - **合并** [#7001 - feat(loop): keep the cached system prefix byte-stable across model calls](https://github.com/nearai/ironclaw/pull/7001)：关闭了 Issue #6985。通过保持系统提示词前缀的字节级稳定，大幅提升缓存命中率，有望显著降低模型调用成本和延迟。

- **WebUI 组件标准化**：
    - **合并** [#7794 - refactor(webui): introduce shared page shell and loading primitives](https://github.com/nearai/ironclaw/pull/7794)：关闭了 Issue #7792。统一了多个页面的滚动、间距和加载骨架屏逻辑，为后续 UI 一致性和可维护性打下基础。
    - **合并** [#7854 - fix(webui): remove Gateway v2 login eyebrow](https://github.com/nearai/ironclaw/pull/7854)：清理了登录页的历史遗留 UI 元素。

## 4. 社区热点

今日社区讨论热度较为分散，但核心诉求清晰：

- **[#7853 - Telegram setup offers personal account linking but cannot complete it](https://github.com/nearai/ironclaw/issues/7853)** (2条评论)：这是一个新报告的 Bug，但因其直接影响用户完成集成设置，且与另一新 Issue #7862 高度相关，属当前热点。用户（emajoe）详细描述了在 Railway 实例上无法完成个人 Telegram 账户绑定的问题。该问题已被开发者复现并确认，且已有对应修复 PR ([#7861](https://github.com/nearai/ironclaw/pull/7861))。社区与开发者互动响应迅速，体现了项目对用户反馈的高关注度。

- **[#7812 - Onboarding suggestions: respect user-level tool permissions](https://github.com/nearai/ironclaw/issues/7812)** (3条评论)：该 Issue 虽然已被关闭，但它是今日合并的 PR #7833 的核心驱动。背后诉求强烈：用户希望 IronClaw 生成的建议能“更懂我”，而不是基于冷冰冰的模板。这反映了用户对 AI 助手个性化体验的更高期待。

- **[#7297 - Error messages stack up in UI after every failed prompt](https://github.com/nearai/ironclaw/issues/7297)** (2条评论)：这是一个长期存在的 UI 问题，用户（joe-rlo）抱怨错误信息在聊天界面不断堆积，严重影响视觉和可用性。该问题在今天再次被更新，说明其影响范围可能较广，社区对此类基础体验问题的容忍度较低。

## 5. Bug 与稳定性

今日报告了多个 Bug，按严重程度排列如下：

- **高（功能不可用）**：
    - **[#7853 - Telegram personal account linking cannot complete](https://github.com/nearai/ironclaw/issues/7853)**：核心集成功能损坏，阻断用户设置流程。**已有修复 PR：[#7861](https://github.com/nearai/ironclaw/pull/7861)**。
    - **[#7862 - Device link fails with generic error when telegram_api_id unconfigured](https://github.com/nearai/ironclaw/issues/7862)**：与 #7853 相关，报错信息太笼统，无法引导用户自行排查配置问题。**无直接修复 PR，但 #7861 可能部分覆盖**。

- **中（功能缺陷/UI混乱）**：
    - **[#7845 - Activating a suggested task fails to render thread entry](https://github.com/nearai/ironclaw/issues/7845)**：功能虽在后台运行，但 UI 不刷新导致用户无法感知任务已启动。**已被 PR #7857 修复**。
    - **[#7297 - Error messages stack up in UI](https://github.com/nearai/ironclaw/issues/7297)**：长期存在的 UI 缺陷，影响聊天界面的清爽度和可用性。**暂无修复 PR**。
    - **[#7856 - MCP tool discovery silently skips camelCase tool names](https://github.com/nearai/ironclaw/issues/7856)**：工具发现逻辑存在隐患，导致部分命名规范的工具被静默忽略，对依赖外部 MCP 服务器的用户影响较大。**暂无修复 PR**。

- **低（代码质量/技术债）**：
    - **[#7860 - Decompose ironclaw_extension_manager::lifecycle_product_service](https://github.com/nearai/ironclaw/issues/7860)**：核心文件过长，已达 1774 行，超出项目架构规范，是明确的 refactoring 信号。**暂无修复 PR**。

## 6. 功能请求与路线图信号

今日有多个新功能请求，结合现有 PR 可看出后续版本方向：

- **意大利语支持**：[#7855 - Add Italian language support](https://github.com/nearai/ironclaw/issues/7855) 请求添加新语言，说明项目国际化（i18n）进入社区驱动阶段。鉴于已有 11 种语言包，此请求很可能在后续版本中被采纳。
- **GSuite CLI 工具**：[#7849 - feat(extensions): bundle an agent-first GSuite CLI](https://github.com/nearai/ironclaw/issues/7849) 希望提供一个更“AI 原生”的 GSuite 命令行工具，以简化模型对 Gmail 等复杂数据的访问。这说明项目在**深化现有工具链的能力，而不仅仅是增加新连接器**。
- **Sandbox 凭据代理**：[#7825 - Sandbox egress auth: native iron-proxy recipes](https://github.com/nearai/ironclaw/issues/7825) 是当前 PR [#7810](https://github.com/nearai/ironclaw/pull/7810) 的后续规划，旨在将沙箱凭据管理泛化，而不仅限于 GitHub CLI。这是一个重要的架构演进方向，与 **v1.4.0** 的规划吻合。

## 7. 用户反馈摘要

- **个性化体验诉求强烈**：用户（sergeiest）在 #7812 中提出的“建议应基于用户真实数据”获得了开发者的积极响应并快速实现。这表明用户不满足于通用功能，更希望 AI 助手能深度集成个人数据，提供“千人千面”的体验。
- **设置流程容错率低**：Telegram 集成问题（#7853, #7862）成为今日反馈热点。用户对“遇到问题但不知如何解决”的体验感到沮丧，反馈不仅限于功能本身，还包括对**错误提示信息质量**的更高要求。
- **UI 细节影响整体观感**：错误信息堆积（#7297）和任务启动后界面不更新（#7845）等细节问题，虽不致命但会持续消耗用户耐心，影响对产品稳定性的整体评价。

## 8. 待处理积压

以下为长期未响应或对项目健康度有潜在影响的事项，建议维护者关注：

- **[#7297 - Error messages stack up in UI](https://github.com/nearai/ironclaw/issues/7297)**：此 UI 缺陷自 8 月 6 日报告以来，已持续近三周，虽被标记为 P2，但对用户体验的负面影响是持续性的。考虑到同类问题（#7845）已被快速修复，建议在此次 QA 专项周中一并解决。
- **[#6774 - Document Gmail terminal-based setup steps](https://github.com/nearai/ironclaw/issues/6774)**：该文档改进请求已开放近一个月，至今未获得官方回复或处理。虽然不是代码缺陷，但对于降低用户上手门槛有积极作用，建议在文档更新排期中优先考虑。
- **“Do not merge” 和 “BISECT” 类型 PR**：例如 [#7858](https://github.com/nearai/ironclaw/pull/7858)、[#7852](https://github.com/nearai/ironclaw/pull/7852)。这些是用于 CI 调试的临时 PR，虽已被作者明确标记，但提醒核心维护者 `henrypark133` 在 T1/T2 任务（#7821, #7817）中的 CI 重构工作可能仍存在一些需要排查的兼容性问题，需确保这些临时分支被及时关闭，避免污染主分支历史。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-25

## 1. 今日速览

过去24小时项目活跃度较高。虽然无新版本发布，但PR提交与合并节奏密集（11条PR，其中10条已完成合并或关闭），代码合并速度超过Issue处理速度。值得关注的是，今日关闭的3个Issue均为stale（已过期）状态，项目方可能正在进行积压清理，与此同时，来自多个贡献者的PR集中在渲染器（renderer）、技能（skills）、插件安装（plugins）等用户体验领域，表明项目正在功能打磨阶段。唯一待合并的PR为dependabot提交的自动化依赖更新，维护方需留意合并时间。整体来看，项目代码迭代健康，社区贡献活跃度高。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的10个PR覆盖多个模块，核心进展如下：

- **跨平台缩略图与本地文件生命周期（#2524）** — 由liugang519提交，新增隔离的跨平台缩略图渲染器，支持图片、视频、PDF、Office、HTML等格式，统一16:9缩略图尺寸与缓存策略，并完善了本地产物的生命周期管理，防止已删除任务的延迟事件重新创建资料关系。这是今日体量最大的功能增强，解决了跨平台媒体预览的体验一致性。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2524

- **文件分享与收藏交互优化（#2522）** — 同样来自liugang519，分享打包时保留Unicode文件名、兼容历史版本文件名、优化收藏状态即时更新与失败回滚，并统一订阅/发布额度限制弹窗样式。明显是针对Library功能的体验打磨。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2522

- **协作消息选择保活（#2521）** — liuzhq1986提交，修复协作场景下右键上下文菜单打开前选中文本被清除的问题，并允许只读选中文本在编辑控件外显示共享编辑菜单（仅保留复制选项），提升了macOS Ctrl+Click场景的可用性。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2521

- **插件安装弹窗可用性修复（#2520）** — 同样来自liuzhq1986，修复插件安装失败时错误信息过长导致操作按钮不可见的问题，弹窗内容/日志/错误详情可独立滚动，并增加关闭按钮与IPC错误防护。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2520

- **技能页签记忆修复（#2527）** — fisherdaddy修复技能面板选中页签被持久化的问题，默认回到市场页。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2527

- **SQLite写入放大优化（#1193，stale关闭）** — Housum提交的性能优化PR在积压4个月后关闭，方案为通过防抖+批量事务消除每次行变更触发完整`db.export()`的写放大问题。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/1193

- 此外还包括登录引导（#2525）、IM图标添加（#2523）、工具包图标URL更新（#2526）、credits加载设置UI（#2528）等较小改动。

> 综合来看，今日项目在**跨平台文件处理、协作体验、插件安装可靠性**三个方向均有明确推进，加上renderer层面的多处细节修复，说明项目正处于用户体验打磨期。

---

## 4. 社区热点

今日无高讨论量Issue或PR（大部分已关闭条目评论数为3或以下），但以下两点值得关注：

- **Issue #1187（上下文窗口设置）** — 虽已关闭（stale），但获得1个👍和3条评论，反映了DeepSeek模型用户在处理超出上下文窗口（Context overflow）时的真实困扰，说明模型上下文适配仍是用户痛点。
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1187

- **PR #1193（SQLite写放大优化）** — 该PR从4月搁置至8月才关闭，虽然最终未合并，但讨论期较长，说明社区对本地数据持久化性能是有关注的。类似场景下Electron应用数据量增大后的性能问题值得持续跟进。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/1193

---

## 5. Bug 与稳定性

今日关闭的3个Issue均标记为stale，无新Bug报告。但从相关PR可推断以下修复内容：

| 严重程度 | 问题描述 | 对应修复 | 状态 |
|---------|---------|---------|------|
| 中 | 插件安装失败时错误信息过长导致操作按钮不可见 | PR #2520 | 已合并 |
| 低 | 协作场景右键菜单打开前选中文本被清除 | PR #2521 | 已合并 |
| 低 | 技能面板选中页签被持久化，重开后不在市场页 | PR #2527 | 已合并 |
| 低 | 已删除任务的延迟事件可能重新创建资料关系 | PR #2524 | 已合并 |

从issue看，以下历史问题被标记为stale后关闭，但问题可能仍存在于用户环境中：

- 技能安装到OpenClaw目录后重启不显示（#1195）
- 自定义工具默认配置无法固定（#1192）

目前暂无CVE或高危崩溃类问题报告。

---

## 6. 功能请求与路线图信号

今日主要功能信号：

- **上下文窗口大小与输出token设置（#1187）** — 用户希望为模型API增加上下文窗口和输出token的显式配置。考虑到模型层适配是AI助手的核心竞争力，且随多模型接入（如DeepSeek）用户基数增长，此需求可能会在后续版本被纳入模型设置模块。
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1187

- **自定义已有工具的默认配置（#1192）** — 用户希望为内置工具（如browser）设置固定默认参数（如无头模式），避免依赖大模型指令跟随的随机性。这与PR #2520（插件安装改进）和#2524（缩略图渲染器）方向一致，都是「将不确定性变为确定性」的体验优化思路。

- **云端资源恢复状态及Node网站重新部署提示（#2524内）** — 说明项目正在扩展云端能力，后续版本可能会在跨端资源同步方面有更多动作。

---

## 7. 用户反馈摘要

从已关闭Issue的评论中提炼以下声音：

- **「Context overflow: prompt too large for the model」** — 使用DeepSeek模型时常见，用户期望能自定义上下文窗口大小而非依赖模型默认值。属于模型适配层面的显性需求。
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1187

- **「大模型的指令跟随经常不好，没法无头模式启动浏览器」** — 说明用户已尝试通过记忆机制（memory）来引导Agent行为，但效果不稳定。这暴露了**「通过自然语言控制工具参数」的可靠性瓶颈**，用户更倾向于硬编码配置。
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1192

- **「提示安装成功，重启后技能面板无显示」** — 技能安装成功但UI不刷新的问题，涉及OpenClaw技能目录与LobsterAI技能面板的路径匹配逻辑。该Issue在4月提出，8月被stale关闭，如未真正修复，建议维护者确认。
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1195

---

## 8. 待处理积压

以下Issue/PR长期未获响应或进展缓慢，建议维护者关注：

- **PR #1277（依赖更新）** — dependabot在4月提交的electron与electron-builder依赖升级（electron 40.2.1 → 43.4.1），已停留4个月仍为OPEN状态。跨大版本更新（40→43）涉及破坏性变更评估，建议尽早安排评审，避免长期堆积导致安全风险累积。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/1277

- **PR #1193（SQLite写放大优化）** — 4月提交的性能优化PR今日被关闭（stale），但写放大问题对于长期使用且本地数据量增长的用户仍然存在。若项目暂无采纳计划，建议维护者给出明确说明，以免贡献者重复提交。
  🔗 https://github.com/netease-youdao/LobsterAI/pull/1193

- **Issue #1195（技能安装后重启不显示）和 #1192（默认配置）** — 虽被标记为stale关闭，但问题本质未解决。如果这些能力已被后续版本覆盖，建议在对应Release Notes中说明，帮助用户确认升级路径。
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1195
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1192

---

**整体评价**：LobsterAI今日代码合并节奏良好，社区贡献者活跃，多条PR围绕真实用户痛点展开（插件安装、协作交互、文件分享）。项目健康度良好。建议关注点：①依赖更新PR长期积压需尽快评审；②被stale关闭的Issue应有明确的后续处理说明（修复版本号或定位为低优先级），避免用户困惑。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-08-24

## 今日速览

Moltis 今日保持高活跃度，24小时内共处理 12 项事务（2 Issues 关闭、10 PR 更新），其中 7 个 PR 已合并/关闭，3 个仍处于待合并状态，并发布 1 个新版本（20260824.01）。核心进展集中在三大方向：新增长 xAI Grok 订阅版 OAuth 集成（#1240）、修复 Apple 容器 ID 超限问题（#1237）以及多项安全加固（节点配对签名验证 #1179、Slack 共享频道工具策略 #1238）。项目合并节奏紧凑，社区贡献者参与度高，整体健康度良好。

---

## 版本发布

**Release 20260824.01**（发布于 2026-08-24）

本次版本暂无详细变更日志。结合当天的合并 PR 推断，该版本很可能包含以下内容：

- 新增 `xai-oauth` 供应商（SuperGrok / Heavy / X Premium+）
- 修复 Apple 容器 ID 64 字符限制
- 修复 TTS 默认 Coqui 误判
- 修复 heartbeat 活跃时间窗口逻辑
- Slack 共享频道工具策略支持

**迁移注意事项：** 新增的 `xai-oauth` 为纯增量功能，现有 API-key 模式的 `xai` 供应商不受影响。Apple 容器命名规则变更可能影响依赖旧命名格式的自动化脚本。

---

## 项目进展

今日合并/关闭的 7 个 PR 展现了项目在四个维度的推进：

### 1. 新功能落地
- **xAI Grok 订阅 OAuth 支持**（[#1240](https://github.com/moltis-org/moltis/pull/1240)）：新增 `xai-oauth` 供应商，通过 RFC 8628 设备码登录接入 SuperGrok / Heavy / X Premium+ 订阅，走 `cli-chat-proxy.grok.com` 代理路由，API-key 模式保留为回退。对应 Issue [#1239](https://github.com/moltis-org/moltis/issues/1239) 同时关闭。

### 2. 关键 Bug 修复
- **Apple 容器 ID 超限**（[#1237](https://github.com/moltis-org/moltis/pull/1237)）：修复了身份前缀＋会话 UUID 拼接后超过 64 字符限制导致容器启动失败的问题，改用 SHA-256 后缀生成稳定标识，并为过期容器生成后缀预留空间。
- **TTS 默认误判**（[#1242](https://github.com/moltis-org/moltis/pull/1242)）：不再硬编码 Coqui 为 `configured=true`，改用 `CoquiTts::is_configured()` 判断，避免无 TTS 配置时出现红色警告。修复 #1114。
- **Heartbeat 时间窗口**（[#1241](https://github.com/moltis-org/moltis/pull/1241)）：修复 `end = "24:00"` 被 chrono 拒绝导致的时间判断失效，并让 `active_hours` 配置真正在 heartbeat 路径中生效。

### 3. 安全加固
- **节点配对签名验证**（[#1179](https://github.com/moltis-org/moltis/pull/1179)）：将 `node.pair.verify` 绑定到服务器签发的待处理请求，防止调用者自带 key 或 challenge，修复潜在的安全漏洞。
- **Slack 共享频道策略**（[#1238](https://github.com/moltis-org/moltis/pull/1238)）：持久化并暴露 `untrusted_audience` 和 `untrusted_tools` 设置，保持 fail-closed 默认值，同时允许基于策略为共享频道/非操作员会话显式授权工具访问。

### 4. WhatsApp 媒体下载边界
- （[#1233](https://github.com/moltis-org/moltis/pull/1233)）：在 #1228 已实现入站文件持久化的基础上，收窄本分支的媒体下载范围，避免重复功能，同时控制流式下载的边界。

---

## 社区热点

今日讨论热度最高的两个议题：

1. **xAI Grok 订阅 OAuth**（[Issue #1239](https://github.com/moltis-org/moltis/issues/1239) / [PR #1240](https://github.com/moltis-org/moltis/pull/1240)）— 2 条评论
   - **诉求：** 已有 OpenAI Codex 和 GitHub Copilot 的 OAuth 支持，用户期望同样方式使用 Grok 订阅，省去单独申请 API-key 的流程。这是一次 "追加相似模式" 的典型社区请求，当日提出当日实现并合并，响应速度极快。

2. **Apple 容器 ID 超限**（[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)）
   - 该 Issue 从 6 月 27 日创建至今已存续近两个月，今日通过 PR #1237 关闭。长期悬而未决的 bug 终于修复，说明项目在积压清理上正在加速。

---

## Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|------|--------|
| 中 | **Apple 容器 ID 超限**导致 sandbox 启动失败（#1137） | 已关闭 | [#1237](https://github.com/moltis-org/moltis/pull/1237) ✅ |
| 低 | **TTS 默认 Coqui 误判**为已配置，产生误导性警告（#1114） | 已关闭 | [#1242](https://github.com/moltis-org/moltis/pull/1242) ✅ |
| 低 | **Heartbeat active_hours 失效**，`end=24:00` 被当作无效值 | 已关闭 | [#1241](https://github.com/moltis-org/moltis/pull/1241) ✅ |
| 安全 | **节点配对签名可被替换**（潜在安全风险） | 已关闭 | [#1179](https://github.com/moltis-org/moltis/pull/1179) ✅ |

今日无新报告的活跃 Bug，所有已知问题均有对应修复。安全方面，节点配对签名验证的落地是今日最重要的加固项。

---

## 功能请求与路线图信号

| 信号 | 说明 | 可能性评估 |
|------|------|-----------|
| **Coder 远程工作区 sandbox 支持**（[#1199](https://github.com/moltis-org/moltis/pull/1199)） | 通过 REST API 创建临时工作区、基于 WebSocket 执行命令，支持模板、预设、TTL 等参数，仍处于 OPEN 状态 | 高 — 功能完整、文档齐备，待合并中 |
| **OpenAI-safe 工具 schema**（[#1232](https://github.com/moltis-org/moltis/pull/1232)） | 适配 OpenAI strict schema 的 `additionalProperties=false` 约束，修复 Codex 发送 null/空值的问题 | 中高 — 直接解决 Codex 兼容性痛点 |
| **Cron 消息上下文保留**（[#1243](https://github.com/moltis-org/moltis/pull/1243)） | 定时消息发送后，后续追问能继承原始会话上下文 | 中高 — 提升 cron 在 WhatsApp 等渠道的可用性 |

以上三个 PR 均处于 OPEN 状态，预计合入后 Moltis 在 **远程开发环境集成、工具调用兼容性和自动化消息能力** 三个方向将获得显著增强。

---

## 用户反馈摘要

- **对 OAuth 集成的偏好明确：** 用户已习惯通过 OAuth 方式使用 OpenAI 和 Copilot 订阅，对 xAI 的诉求是 "保持一致的使用体验"，不希望额外配置 API-key。社区对订阅服务的集成需求呈现增长趋势。
- **Apple 容器问题的持久性困扰：** Issue #1137 从 6 月底持续到 8 月底，接近两个月的等待周期说明该问题影响特定用户群体（Apple 生态 + 长会话），虽然不是高频问题但对受影响的用户造成持续阻塞。
- **贡献者对安全的态度积极：** PR #1179 的作者明确表示 "想用 Moltis 但需要先修复安全问题"，说明项目的安全口碑直接影响外部开发者的采用意愿。

---

## 待处理积压

| 项目 | 类型 | 等待时长 | 备注 |
|------|------|---------|------|
| [PR #1199](https://github.com/moltis-org/moltis/pull/1199) Coder 远程工作区 sandbox | 功能 PR | 9 天（8/15 创建） | 功能完整、文档已备，等待合并 |
| [PR #1232](https://github.com/moltis-org/moltis/pull/1232) OpenAI-safe 工具 schema | 兼容性修复 | 2 天（8/22 创建） | 解决 Codex 集成痛点，建议尽快 review |
| [PR #1243](https://github.com/moltis-org/moltis/pull/1243) Cron 消息上下文保留 | 功能修复 | 1 天（8/24 创建） | 新提交，需维护者审核 |

三个待合并 PR 均无长期积压迹象，维护团队当日处理节奏良好，建议保持当前 review 速度，重点关注已等待 9 天的 Coder 支持 PR。

---

*数据来源：[Moltis GitHub 仓库](https://github.com/moltis-org/moltis) | 报告生成时间：2026-08-25*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-25

> 项目当前版本：v2.1.1-beta.2 | 收录仓库：agentscope-ai/QwenPaw (CoPaw)


## 1. 今日速览

过去 24 小时 CoPaw 项目保持高活跃度：共产生 50 条 Issue 更新（新开/活跃 31 条，关闭 19 条）和 47 条 PR 更新（待合并 21 条，已合并/关闭 26 条），同时发布了 v2.1.1-beta.2 补丁版本。从 Issue 讨论内容来看，社区关注的三大核心议题分别是：**多智能体会话隔离与跨会话消息路由正确性**（#7011、#7231、#7237）、**长期运行内存增长失控**（#7222、#5720）、以及**审批模式与任务自主执行的体验优化**（#7198、#7230）。值得注意的是，多条高热度 Issue 与 PR 均指向 Console 会话身份（session identity）竞争条件问题，说明开发团队正在集中加固这一薄弱环节。整体而言，项目迭代节奏稳健，社区反馈渠道畅通，但内存泄漏和会话串线问题仍是对用户体验影响最大的技术债。

- 活跃度评估：★★★★★（Issue/PR 数量均处于近期高位，维护者响应及时）
- 健康度信号：新版本发布频率正常；19 条 Issue 关闭是否意味着积压缓解仍需观察
- 值得警惕：多起内存增长问题（最高达 20.7GB）和会话串线 Bug 在多个版本中反复出现，稳定性待加强


## 2. 版本发布

### v2.1.1-beta.2（2026-08-24 发布）

**主要更新内容：**

- **feat(console)**: assistant 回复卡片新增 artifacts 展示（PR #7161）
- **fix(video)**: 修复 OpenAI Responses API 上工具结果视频的投递问题（PR #7061）
- **test(browser)**: 浏览器相关测试加固（内容截断）

**破坏性变更：** 无明确标注。

**迁移注意：**
- 若使用 OpenAI Responses API 且依赖视频工具结果回传，建议升级到此版本
- Console 端 assistant 回复卡片结构有变化，如有前端定制请关注 artifacts 字段

**关联说明：** 该版本发布后，Issue #6921（任务自动停止需手动"继续"）仍在 Beta 版本上反馈，说明该问题尚未完全修复。


## 3. 项目进展

今日合并/关闭的 PR 体现了项目在 **Console 会话身份管理、CI 基础设施、测试覆盖率和文档一致性**四个方向的推进：

| 关键 PR | 类型 | 状态 | 意义 |
|---------|------|------|------|
| [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) fix(console): freeze session identity for chat sends | Bug 修复 | 待合并 | 直接针对 #7011/#7231 的 Console 会话串线问题，在发送时冻结会话身份以消除竞争条件 |
| [#7248](https://github.com/agentscope-ai/QwenPaw/pull/7248) fix(ci): derive Docker boundary version from package | CI 修复 | 已合并 | 移除 Dockerfile 中硬编码的 boundary 版本，从包版本派生，杜绝版本不一致风险 |
| [#7245](https://github.com/agentscope-ai/QwenPaw/pull/7245) chore(console): remove desktop mode reminder | 清理 | 已合并 | Console UI 细节优化 |
| [#7255](https://github.com/agentscope-ai/QwenPaw/pull/7255) docs(readme): add Access Policy as the fifth core security layer | 文档 | 待合并 | 补齐英文 README 的安全层描述，保持三语文档一致 |
| [#7246](https://github.com/agentscope-ai/QwenPaw/pull/7246) test(integration): expand coverage with 39 router/module test files | 测试 | 待合并 | 新增 238 个集成测试用例，显著扩大后端 HTTP 面覆盖 |
| [#7250](https://github.com/agentscope-ai/QwenPaw/pull/7250) fix(scripts): local test runner skips suites and reports false success | 测试修复 | 待合并 | 修复本地测试运行器静默跳过套件却报告成功的严重问题 |
| [#7173](https://github.com/agentscope-ai/QwenPaw/pull/7173) fix(e2e): re-anchor agents action cells | E2E 修复 | 已合并 | 适配 #6397 新增 Backend 列导致的定位器偏移 |
| [#7209](https://github.com/agentscope-ai/QwenPaw/pull/7209) fix(e2e): repair remaining failing cases against the redesigned console | E2E 修复 | 待合并 | 修复 Console 改版后失效的用例 |

**核心结论：** 最重要且影响面最大的是 **#7237（Console 会话身份冻结）**，这直指用户频繁报告的"消息发错会话、切换会话时消息丢失"问题。另一个值得关注的是 **#7250（本地测试运行器静默跳过套件）**，修复前开发者在本地 pre-PR 测试可能获得虚假的"全部通过"结果，这对质量保障体系是个隐患。整体来看，团队今日在稳定性修复和测试基座加固上投入显著。


## 4. 社区热点

### 🔥 热点 1：#6921 多步骤任务执行频繁中断，需手动催促"继续"（11 条评论）

> 链接：[Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 状态: OPEN | 作者: rerbin | 更新: 08-24

**现象：** 模型在输出类似“Now 2.1, 3.1, 3.2. Let me do all three.”的规划后无提示停止，必须用户回复"继续"才接着执行。该 Issue 已获得 11 条评论，为当前讨论度最高的问题。

**分析：** 这一行为可能是模型在长上下文中自主判断"阶段性汇报"的策略，但对用户而言表现为任务"卡住"。考虑到同作者还提交了 #7230（上下文压缩不应在任务执行中触发）以及 #7198（审批模式过于频繁），这些反馈共同指向一个核心矛盾：**在长任务执行中，系统的自动干预与用户的"放手"预期之间存在冲突**。这是 Agent 产品自主性设计的典型痛点。

**相关线索：** 作者 rerbin 同时也是 #7198、#7230 的提交者，均为任务自主执行体验的优化诉求。

### 🔥 热点 2：#6782 Docker 版插件/应用市场持续提示"维护中"（9 条评论）

> 链接：[Issue #6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | 状态: CLOSED | 作者: Sakura7301 | 更新: 08-24

**现象：** Docker 版 2.0.1 的插件市场/应用市场始终显示"维护中"，无法使用。该问题今天被关闭。

**分析：** 该问题在 8 月 7 日创建、持续两周后关闭，但从其他 Issue 观察，用户对插件/应用市场的体验问题可能并未完全解决。建议维护者确认关闭原因（是修复还是因重复而关闭）。

### 🔥 热点 3：#338 Webhook 功能请求 — 长期关注（8 条评论，1 👍）

> 链接：[Issue #338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 状态: OPEN | 创建: 03-02 | 更新: 08-24

**现象：** 建议增加 webhook 功能使用户软件能与 CoPaw 双向通信，创建已近半年、今日仍有更新。虽然是 good first issue，但长期未实现。

**分析：** 该需求反映了 CoPaw 在**外部系统集成方面**的缺口 — 用户希望能通过接口方式与 CoPaw 交互，而非仅在聊天 UI 内使用。此外 #3425（支持关系型数据库存储、Microsoft Teams 渠道）同样打开了系统集成方向的讨论。

### 🔥 热点 4：#7011 Console 停止请求会取消活动的飞书会话（8 条评论）

> 链接：[Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 状态: OPEN | 作者: djj532 | 更新: 08-24

**现象：** 在多 UI 会话场景下（2.1.0），通过 Console 发送停止请求后，会意外中断一个活动的飞书会话。

**分析：** 该问题与 #7231（Console 消息被发送到错误会话）构成同一类**会话身份串线**问题。今日提交的 PR #7237（freeze session identity for chat sends）正是针对此类问题。若 #7237 合入，有望同时修复 #7011、#7231 和 #7235（如果有），建议维护者跟踪验证。


## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 | 对应修复 |
|--------|-------|------|------|----------|
| 🔴 严重 | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | **qwenpaw-backend 连续运行 2 天内存涨至 20.7GB**，导致整机卡顿。用户明确区分了与 #9（启动期泄漏）不同的运行时逐步累积问题 | OPEN | **无 fix PR** |
| 🔴 严重 | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | v1.1.12.post2 内存泄漏：64 分钟从 150MB 涨至 580MB，最终进程被杀、配置损坏。含根因分析：异步任务泄漏+HTTP 会话不回收 | OPEN | **无 fix PR** |
| 🔴 严重 | [#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) | **Console 消息发送到错误会话**：当两个会话并行或一个会话仍在生成时切换到其他会话并发送消息，消息可能被投递到错误会话且丢失 | OPEN | PR #7237 (待合并) |
| 🟠 高 | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console 停止请求可取消活动的飞书会话，跨 UI 会话身份值串联 | OPEN | PR #7237 (待合并) |
| 🟠 高 | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | daily_paper 任务在处理含 surrogate characters（U+D800–U+DFFF）的 PDF 时崩溃（UnicodeEncodeError），整个任务直接退出 | OPEN | **无 fix PR** |
| 🟠 高 | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | 瞬时 streamable HTTP MCP 连接失败后，即使自动重连成功，当前对话仍被永久阻塞 | OPEN | **无 fix PR** |
| 🟡 中 | [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | agent.json 中 built-in 工具全部启用，但会话的函数 schema 未注入，工具栏面暴露不一致 | OPEN | **无 fix PR** |
| 🟡 中 | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | send_file_to_user 发送非 ASCII（中文）文件名时，文件卡片名显示 percent-encoded 乱码 | CLOSED | 已关闭（推测已修复） |
| 🟡 中 | [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | reload_agent() 丢弃插件的 workspace 级注册（runtime hooks、modes、slash commands） | CLOSED | 已关闭 |
| 🟢 低 | [#7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) | 夜间测试 flaky：macOS runner 上时序断言失败 | CLOSED | 已关闭 |

**需要警惕的高风险项：** #7222 和 #5720 这两个内存问题目前均无对应的 fix PR，且 #5720 已存在一个多月。内存泄漏问题在长时间运行场景下会严重影响生产环境的稳定性，建议优先排查。


## 6. 功能请求与路线图信号

### 信号 1：多智能体协作会话机制改进（高确定性）

- [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) — 希望智能体协作在同一个会话窗口内完成，不用反复新建会话
- [#3013](https://github.com/agentscope-ai/QwenPaw/issues/3013) — B 智能体完成异步任务后想主动回复 A 时，不应新建会话通道；希望可指定飞书频道展示 A/B 交流内容
- [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) — 反馈跨智能体协作缺乏引导、触发方式不明确、存在身份混淆
- [#2750](https://github.com/agentscope-ai/QwenPaw/issues/2750) — 多智能体协作的信息隔离需要增强

**分析：** 这类反馈从 3 月持续至今（#3013 更新于 8 月 24 日），涵盖：协作会话聚合、异步结果回传路径优化、权限隔离。当前多智能体模式"能跑"但"不好用"，需要一次系统性的交互机制升级，建议团队将其列为下半年体验优化的重点方向。

### 信号 2：工作区级 Skill 预加载策略（确定性高，已有 PR）

- Issue [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) + PR [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) — 新增 `preload` 策略，可让工作区核心 Skill 在会话开始前加载；默认保持 `on_demand`
- 作者还引用了 Claude Code 的双模式加载做法

**分析：** 该功能提供了一种更精细的 Skill 资源控制方式，对以特定 Skill 为核心构建工作区的专业用户有明确价值，且实现方式是增量式的（默认行为不变），风险较低。

### 信号 3：按频道独立配置模型（确定性中等）

- [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) — 不同渠道（钉钉、微信、Console）使用不同模型，当前全局/智能体级配置粒度不够

**分析：** 该需求回应了用户在真实场景中"多端多模型"的需求（如钉钉用快速模型、微信用中文优化模型）。技术上会涉及 agent config 结构的扩展，属于中量级改动。

### 信号 4：Agent 导入流程（确定性高，已有 PR）

- PR [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) — 新增 Pawport 导入流程，可从 Codex 和 Qoder 导入 instructions、settings、skills、plugins 等项目

**分析：** "从别的 Agent 产品迁移到 QwenPaw"的导入能力，会降低用户从 Codex 等既有工具迁移的摩擦，是新用户增长的一个利器。

### 信号 5：PowerContext 长短期记忆后端（确定性中等）

- PR [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) — 新增 PowerContext 可插拔长期记忆后端，基于现有 `BaseMemoryManager` 抽象实现

**分析：** 作为 ReMeLightMemoryManager 的补充方案，提供用户更多选择。与 #6399（reranker UI 配置面板，同样是记忆组件的增强）呼应，说明团队在记忆模块的生态建设上持续投入。


## 7. 用户反馈摘要

### 高频痛点

| 痛点主题 | 涉及 Issues | 用户原声摘录 | 严重程度 |
|----------|-------------|-------------|----------|
| **任务自主执行中断** | #6921、#7198、#7230 | "规划好下一步就停止了，没实际开始干也无任何视觉可见的提示" // "你不可能整夜盯着弹出的审批，你希望它一夜干完的活儿早上看到的可能是个待审批弹窗" | 🔴 高 |
| **会话串线/身份混乱** | #7011、#7231 | "the question can be delivered to the **wrong session**" // "正在与某个 agent 对话时如果切换到另一个 agent，当前会话的全部上下文会丢失" | 🔴 高 |
| **多智能体协作体验割裂** | #6925、#3013、#2420 | "他们协作对话一次创建一次新的会话，并且我还要切换智能体去看他们的对话内容" // "A 智能体还在旧的会话通道上，收不到 B 最后的结果反馈" | 🟠 中高 |
| **内存无限增长** | #7222、#5720 | "连续运行约 2 天后进程内存从几百 MB 持续增长到 20.7 GB" // "每分钟涨 5.5MB，然后被外部进程杀掉" | 🟠 中高 |
| **Dashboard 加载缓慢** | #7242 | "74 个 agents 时 API 响应正常，但 Dashboard 通过 localhost:8xxx 访问需要 6 分钟以上" | 🟡 中 |
| **审批模式过度触发** | #7198 | "默认的自动模式也有大量毫无意义的审批" // "对一个任务执行中的中间产物、临时产物的任何操作，触发审批都要谨慎考虑必要性" | 🟠 中高 |

### 用户画像与使用场景

从 Issue 内容推断 CoPaw 的核心用户群体正逐渐清晰：

1. **重度多智能体用户** — 利用多个 agent 并行处理复杂任务，对会话隔离、协作链路有较高要求（#3013、#6925 的用户正在搭建跨 agent 的生产协作流）
2. **夜间无人值守用户** — 希望在夜间让 agent 自主完成任务，对审批打断零容忍（#7198 的诉求非常典型）
3. **大规模部署用户** — 在单实例上运行 74 个 agents，对 Dashboard 的加载性能提出了新的要求（#7242）
4. **企业集成场景用户** — 使用钉钉、飞书等渠道接入 CoPaw，对多端模型差异化和会话可见性有需求（#7085、#3013）

### 值得注意的正向反馈

- 用户 rerbin 说"我把上下文调到了各个模型支持的极限最大值、然后感觉会话太长时手动点压缩按钮，中断少了很多" — 说明手动操作可以作为规避方案
- #7182 作者 wuyak 提出的 Skill preload 方案展现了技术深度，并引用 Claude Code 的成熟做法，说明社区中有较多对 Agent 开发生态熟悉的技术型用户


## 8. 待处理积压

### ⚠️ 长期未响应的功能请求

| Issue | 内容 | 创建时间 | 停留时长 | 状态评估 |
|-------|------|----------|----------|----------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 建议添加 webhook 功能 | 2026-03-02 | **约 6 个月** | 已是 good first issue 但持续未实现；外部系统集成是生态建设的重要抓手，建议排期或明确说明路线图 |
| [#3425](https://github.com/agentscope-ai/QwenPaw/issues/3425) | 支持关系型数据库存储 + Microsoft Teams 渠道 | 2026-04-15 | **约 4 个月** | 无维护者回应记录，两条建议均有一定价值（尤其 RDBMS 对企业用户） |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | CoPaw Agent Teams — 自然语言驱动的多智能体协作团队 | 2026-04-10 | **约 4 个月** | 提案詳尽，但可能是较大范围的重构，未见官方方向确认 |
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 多步骤回复的消息聚合，避免碎片化消息刷屏 | 2026-06-26 | 约 2 个月 | 直接影响对话体验，与 #6925 的诉求同源，建议优先考虑 |

### ⚠️ 长期未解决的高影响 Bug

| Issue | 内容 | 创建时间 | 停留时长 | 状态评估 |
|-------|------|----------|----------|----------|
| [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | 内存泄漏（v1.1.12.post2） | 2026-07-02 | **近 2 个月** | 包含用户根因分析仍无进展；同类问题 #7222 再次出现，说明这是系统性问题，建议成立专项解决 |
| [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | MCP 瞬时故障后对话永久阻塞 | 2026-08-08 | 2 周+ | 涉及 MCP 连接的恢复机制，对 MCP 生态的可靠使用有影响，建议确认优先级 |

### 观察建议

1. **webhook（#338）** 建议在下一个大版本（v2.2?）中排期实现，或者正式标记为"计划中"以免社区反复关注
2. **多智能体协作会话机制** 已经积累了 #6925、#3013、#2420 等多个相关 Issue，建议合并关键词并发布官方设计文档，引导社区讨论收敛
3. **测试基建修复 PR #7250** 应尽快合入 — 本地测试运行器静默跳过套件的问题如果不解决，后续所有贡献者的 pre-PR 自检都可能失真


## 附：方法论说明

本报告基于 CoPaw GitHub 仓库（agentscope-ai/QwenPaw）2026-08-24 至 08-25 的 Issues、PRs 和 Releases 数据。所有数据均来自公开仓库，链接可直接访问。Issue/PR 评论数和状态以数据快照时间为准（2026-08-25 生成报告时）。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**日期：2026-08-25**  
**数据来源：github.com/qhkm/zeptoclaw**

---

## 1. 今日速览

ZeptoClaw 过去 24 小时整体活跃度**偏低**：仅有 1 条新 Issue（#650），无 PR 更新、无新版本发布。虽然条目数量少，但新 Issue 的质量和方向值得关注——它针对交互式 REPL 的边界场景提出了系统性改进需求，涉及信号处理和命令解析两个维度，反映出 CLI 用户体验正在成为社区关注焦点。当前仓库处于**稳定推进期**，开发节奏放缓但需求仍在持续沉淀。需要注意的是，待合并 PR 为 0，意味着上游开发可能正处于新一轮设计/重构前的酝酿阶段。

---

## 3. 项目进展

过去 24 小时**无 PR 合并或关闭**，没有新增代码进入主干。基于此前节奏推测，上一轮提交（推测涉及 REPL 基础架构或 agent 命令路由）已合入，当前处于新需求收集和设计验证的窗口期。项目整体处于**功能迭代间歇期**，下一阶段发力点可能集中在 CLI 交互体验打磨上。

---

## 4. 社区热点

### 🔥 Issue #650：REPL UX 硬化 — 安全 Ctrl+C/Ctrl+D、孤立 `/` 命令表
**链接：** [qhkm/zeptoclaw Issue #650](https://github.com/qhkm/zeptoclaw/issues/650)

- **作者：** Suraware  
- **创建/更新：** 2026-08-24（当日无新增评论）  
- **评论数：** 0 | 👍 0

这是今日**唯一**的活跃 Issue，也是当前讨论的核心。虽然暂无评论互动，但问题本身的设问非常精准，值得深度拆解：

**核心诉求分析：**

| 问题点 | 现状 | 期望 |
|--------|------|------|
| **Ctrl+C / Ctrl+D 误触** | 任意中断信号直接导致 `Err(Interrupted | Eof) => Goodbye!`，正在进行的会话被意外终止 | 需要分级处理：首次 Ctrl+C 应取消当前输入/命令，仅当连续触发或空闲状态时才退出 |
| **孤立 `/` 输入** | 单独输入 `/` 落入 `Unknown command: /` 分支，用户无法获知可用命令 | 应显示命令帮助表（即类似 `help`），引导用户发现可用斜杠命令 |

这一 Issue 反映了**真实用户场景中的挫败感**：长会话中误触 Ctrl+C 导致全部上下文丢失，以及新手用户面对 `/` 时无处可查的困惑。此类体验问题虽然不涉及核心功能缺陷，但对 CLI 工具的用户留存影响深远。**建议维护者优先排期，并考虑补充现有的 TUI/line-editor 测试用例。**

---

## 5. Bug 与稳定性

今日**无新 Bug 报告**、无崩溃或回归问题。Issue #650 中描述的两个问题更偏向**交互设计缺陷**而非功能性 Bug，严重程度评估如下：

| 严重级别 | 描述 | 影响面 | 状态 |
|----------|------|--------|------|
| 🟡 中 | 任意 Ctrl+C 导致会话立即终止 | 所有使用交互式 REPL 的长任务用户；数据丢失风险 | 无修复 PR，尚无明确修复计划 |

当前仓库整体**稳定性良好**，无紧急修复需求。

---

## 6. 功能请求与路线图信号

**Issue #650 包含两项明确的功能请求：**

1. **信号安全机制**：区分“取消当前操作”和“确认退出”两个层级——这是主流 REPL 工具（如 `ipython`、`psql`）的标准行为，ZeptoClaw 作为 agent 型 REPL 更应内置此防护，因为用户通常在与 agent 进行多轮上下文对话，误触退出代价远高于普通 CLI。
2. **孤 `/` 自动唤起命令帮助**：对齐 `slack-cli`、`gh` 等现代 CLI 的快捷命令发现范式，降低新用户学习成本。

**结合仓库现状判断：** 这两点与 CLI 核心体验强相关，**大概率被纳入下一版本（v0.6 或 v0.7）**。若维护者认同方向，预期会先做信号流的单元测试设计，再进入实现阶段。

---

## 7. 用户反馈摘要

> 以下反馈提炼自 Issue #650 提交描述：

- **"Exits silently on any Ctrl+C / Ctrl+D … destroying an in-progress session by accident"** —— 用户明确表示误触中断导致进行中的会话被意外销毁，这是对当前行为**强烈不满**的直接表达，隐含对会话上下文保留机制的期待。
- **"A lone `/` submitted as input falls into the unknown-command arm … even though the …"** —— 表示即使用户有意图探索命令，当前实现也用模糊的错误信息阻断发现路径。

**使用场景还原：** 用户可能是长时间运行 agent 进行多步骤任务，键盘操作中误触 Ctrl+C，所有中间状态（对话历史、临时变量）直接丢失；同时，该用户正处于新手上手阶段，主动输入 `/` 想查看可用命令却发现无法获得引导。

**用户满意之处（推断）：** 用户没有抱怨核心 agent 功能本身，说明在 REPL 之外的正常使用路径上是无障碍的，但对基础交互细节的容忍度已到达临界点。

---

## 8. 待处理积压

今日**无长期未响应**的重大 Issue 或 PR。Issue #650 处于“新开”状态但已形成完整问题拆解，**建议维护者优先回复并标注 `good-first-issue` 或 `UX` 标签**，以鼓励社区贡献。同时提醒关注该 Issue 的后续评论——若短期内出现多个用户 +1 或类似场景补充，则优先级应进一步提升。

---

## 项目健康度总结

| 维度 | 状态 | 说明 |
|------|------|------|
| 🟢 活跃度 | 低 | 24h 仅 1 Issue，无代码活动 |
| 🟢 稳定性 | 良好 | 无 Bug 报告、无回归 |
| 🟡 社区参与 | 中 | 新 Issue 质量高，但暂无互动讨论 |
| 🟢 维护响应 | 待观察 | 新 Issue 尚无维护者回复（24h 内），建议缩短首次响应时间 |
| 🟡 版本节奏 | 间歇 | 已进入新需求累积期，预计未来 2-3 周有功能发布 |

**给维护者的行动建议：** ① 对 #650 给出明确的技术方案回应，确认信号分级处理的可行性；② 考虑将孤 `/` 帮助表与现有 `help` 命令复用逻辑；③ 结项时补充对应集成测试，覆盖 SIGINT 和 EOF 多场景路径。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-25

## 1. 今日速览

过去24小时内，ZeroClaw 项目保持了高度活跃的开发与讨论节奏：共产生 50 条 Issue 更新（43 条活跃、7 条关闭）和 50 条 PR 更新（45 条待合并、5 条合并/关闭），无新版本发布。社区讨论的焦点集中在 OpenAI Chat Completions 兼容端点（#8603/#8486）、session 持久化的合同归属（#9600）、以及多个已接受状态的高风险安全修复（如 delegate 绕过命令拦截 #10165、cron 跨 agent rename 竞态 #10324）。值得关注的是，大量 PR 被标记为 `needs-author-action` 或 `needs-maintainer-review`，表明项目在活跃开发的同时存在一定的审阅和推进瓶颈，积压风险值得注意。


## 3. 项目进展

过去24小时内有 5 个 PR 被合并或关闭，另有 45 个 PR 处于待合并状态。合并/关闭的 PR 包括：

- **#10023（已关闭）** — [Failure logs claim the requested model, not the pinned fallback model](https://github.com/zeroclaw-labs/zeroclaw/issues/10023)：修复了 reliable provider 的错误日志中记录了请求的模型而非实际提供服务的 pinned fallback 模型的问题。
- **#10251（已关闭）** — [Repeat parallel runtime tests: 17 telegram listen_* tests assert on wall-clock timeouts](https://github.com/zeroclaw-labs/zeroclaw/issues/10251)：修复了 17 个 telegram listen_* 测试依赖墙钟超时导致在负载 runner 上不稳定失败的问题（与 #9429 同类）。
- **#9590（已关闭）** — [Concurrent models refresh runs can lose cache entries](https://github.com/zeroclaw-labs/zeroclaw/issues/9590)：修复了并发 `models refresh` 读-改-写未加锁导致缓存条目丢失的问题。
- **#10106（已关闭）** — [Exact proxy selectors reject supported transcription services](https://github.com/zeroclaw-labs/zeroclaw/issues/10106)：修复了 proxy selectors 拒绝合法 transcription 服务的问题。
- **#10143（已关闭）** — [Make provider-call accounting lifecycle-complete](https://github.com/zeroclaw-labs/zeroclaw/issues/10143)：完善了 PR #10003 引入的 provider 调用计费合同，确保每个物理 provider 叶子节点被精确表示一次。

**项目整体评价：** 上述合并集中在 bug 修复和内部架构完善层面，尚未有大型功能模块合入。但多个高优先级的安全修复和可靠性改进正处于待合并或审阅状态（如 #10165、#10324 的修复 PR），预期后续数日内会有显著的功能与稳定性推进。


## 4. 社区热点

过去24小时内讨论最活跃的议题集中在以下三个方向：

### 4.1 OpenAI Chat Completions 兼容端点（#8603 / #8486）
[RFC #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（24 条评论）是当前社区讨论的绝对焦点。该 RFC 提议为 ZeroClaw 增加一个 OpenAI Chat Completions 兼容的 profile，使得 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 和 OpenAI SDK 等客户端可以直接接入 ZeroClaw 的 agent 能力，而不再局限于 WebSocket、ACP 和 per-channel webhooks。配套的 [PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)（feat(gateway): add OpenAI chat completions endpoint）目前处于 `blocked` 状态。

**背后诉求的解读：** 社区对标准协议互操作性的需求十分强烈。大量用户使用 OpenAI 生态工具链，ZeroClaw 当前的专有协议构成了实际的使用壁垒。

### 4.2 Session 持久化合同归属（#9600）
[Tracker #9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)（11 条评论）提出了会话持久化合同被四个独立工作流同时修改、缺乏明确归属的问题。这反映了项目在架构演进过程中，跨模块的边界和权利/义务正在出现模糊化，社区希望维护者明确合同所有权和层次排序。

### 4.3 维护者 RFC 决策队列（#8692）
[Tracker #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（14 条评论）建立了 RFC 和设计议题的维护者决策队列，确保所有需要 maintainer 裁决的提案有明确的追踪和结束路径。这表明社区开始关注项目的治理效率和决策透明度。


## 5. Bug 与稳定性

### 严重级别：S0（数据丢失/安全风险）

**[#10165] [OPEN] Independent delegate bypasses `block_high_risk_commands` on its own risk profile**
- 链接： https://github.com/zeroclaw-labs/zeroclaw/issues/10165
- 创建于 8 月 20 日，更新于 8 月 24 日
- 高危命令（如 `rm`）通过独立 delegate 执行时可以绕过其自身 risk_profile 中的 `block_high_risk_commands=true` 设置。涉及 security/sandbox 组件。
- **状态：** `in-progress`，已有社区关注，暂无已合并的 fix PR。

**[#10324] [OPEN] Cron manual trigger and run-history reads remain check-then-act across an agent rename**
- 链接： https://github.com/zeroclaw-labs/zeroclaw/issues/10324
- 创建于 8 月 24 日（最近 24h 内新增）
- Cron 手动触发和运行历史读取在 agent rename 期间存在 check-then-act 竞态。作者刻意将其标注为 S2 而非 S0（因为到达该竞态的条件较为苛刻），但后果与 #9947 同类——即跨 agent 边界的安全问题。
- **状态：** 新开，已有 1 条评论。

### 严重级别：S2（降级行为）

**[#9812] [OPEN] Provider fallback carries the primary's model id, so it can never fire (and poisons the fallback into cooldown)**
- 链接： https://github.com/zeroclaw-labs/zeroclaw/issues/9812
- 创建于 8 月 7 日，更新于 8 月 24 日
- Fallback provider 被要求使用主 provider 的 model id，导致正确配置的 fallback 永远不会触发，且每次尝试的失败还会将 fallback 置入 cooldown。
- **状态：** 标记 `needs-repro`，用户已提供复现配置。该问题与 #10023（已关闭）属于同一代码路径的不同表现。

**[#10068] [OPEN] Interactive agent session caps context at 32,000 tokens**
- 链接： https://github.com/zeroclaw-labs/zeroclaw/issues/10068
- 交互式 agent session 将 context 硬性限制在 32,000 tokens，忽略配置的 `max_context_tokens = 131072`。
- **状态：** `in-progress`，3 条评论。

**[#9820] [OPEN] Calculator tool: model emits literal `<TOOLCALL>` pseudo-syntax instead of a real function call**
- 链接： https://github.com/zeroclaw-labs/zeroclaw/issues/9820
- 在使用 NVIDIA NIM 的 llama-3.3-nemotron-super-49b-v1 时，模型输出字面量 `<TOOLCALL>` 伪语法而非真正的函数调用。
- **状态：** 已接受，1 条评论。

**[#10306] [OPEN] Gate web/ TypeScript in required CI, and stop bare tsc from printing 75 misleading errors**
- 链接： https://github.com/zeroclaw-labs/zeroclaw/issues/10306
- 创建于 8 月 24 日
- 请求将 `web/` 的 TypeScript 类型检查纳入必须的 CI 流程，并让裸 `tsc -b` 以一个明确的指引链接替代现有的 75 条误导性错误。

### 严重级别：S3（轻微问题）

**[#10180] [OPEN] ZeroCode paste mutates the hidden composer while another surface owns input**
- 链接： https://github.com/zeroclaw-labs/zeroclaw/issues/10180
- Terminal bracketed-paste 事件被直接路由到 `Chat::handle_paste`，绕过了键盘路径的输入所有权检查。

### 已关闭的 Bug（24h 内）

- #10023：修复了 fallback 模型日志记录错误（详见第 3 节）
- #9590：修复了并发 models refresh 缓存丢失
- #10106：修复了 transcription 服务 proxy selector 错误
- #10190：修复了 reasoning fallback 分类器误匹配不相关的复合错误子句
- #10224：修复了自定义 provider 5xx 错误被记录为重复转义的 JSON


## 6. 功能请求与路线图信号

以下几个被接受（`status:accepted`）的 enhancement 和 RFC 最有可能进入下一版本的开发范围：

| 议题 | 标题 | 优先级 | 状态 | 对应 PR |
|------|------|--------|------|---------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | P2 | accepted | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)（blocked） |
| [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) | Add pre-turn tool elicitation hints for natural-language routing requests | P2 | accepted | — |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | Decouple gateway WebSocket lifetime from agent turn lifecycle | P1 | in-progress/accepted | — |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | Retire StoragePolicy::Rolling; absorb row-count cap into Rotating | P2 | in-progress/accepted | — |
| [#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222) | RFC: Opt-in single-tool provider rounds for interactive agents | P2 | accepted，待维护者审阅 | — |
| [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | Make plugin install + config-entry seeding recoverable as one operation | P2 | in-progress | — |

**路线图信号：**
- **Chat Completions 兼容层**（#8603）代表了项目从专有协议向行业标准生态开放的战略方向，若合入将显著扩大 ZeroClaw 的接入面和用户基数。
- **Gateway WebSocket 生命周期解耦**（#7759）被标记为 P1，说明 WebSocket 连接脆弱性已实际影响用户体验，预计将在较短期内进入开发。
- **Session 持久化合同归属**（#9600）作为架构治理追踪器，其结果将直接影响后续多个开发流的排期。


## 7. 用户反馈摘要

### 积极信号

- **对标准协议互操作性的强烈期望：** #8603 的 24 条评论中，多位用户表达了使用 OpenAI 协议客户端（Open WebUI、Continue.dev、Aider 等）直连 ZeroClaw 的迫切需求，说明用户群体对这些工具链的依赖度高。
- **安全审查的主动性：** 多个安全相关问题（#10165、#10175、#10173）在创建后快速获得社区讨论和维护者确认，表明用户对安全有较高敏感度且社区响应积极。

### 明确的痛点

- **fallback 机制长期不可用：** #9812 和 #10023 暴露了一个共同的根本性缺陷——fallback provider 从未正确工作过。用户配置了 fallback 却从未触发（#9812），或触发了但日志误导排障（#10023）。这直接影响服务的可靠性。
- **上下文窗口限制与配置不一致：** #10068 指出交互式 session 硬编码 32k context 上限，与配置的 131k 不一致，且无明确文档说明该行为。对依赖长上下文的高端模型用户产生了实际的工作流影响。
- **跨工具链一致性问题：** #9820（calculator 工具输出伪语法）和 #10073（Rolling 存储策略在高负载下的性能回退）反映了在多样化的部署环境（Raspberry Pi、高并发生产）中，默认配置的行为需要进一步的适配和打磨。

### 不满意之处

- **缺少可操作性的错误信息：** #10178 反馈 daemon socket 所有权错误无法识别当前 active owner 或恢复路径，用户在故障排查时不得不往返猜测。
- **web/ 与 web/ 构建体验割裂：** #10306 描述了 `tsc -b` 在 `web/` 下输出 75 条误导性错误而影响开发效率的问题，用户期望 CI 与本地构建体验对齐。


## 8. 待处理积压

以下是当前处于长期未解决或需要维护者关注的重要项：

| 议题/PR | 说明 | 当前状态 | 优先级 |
|---------|------|----------|--------|
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | OpenAI Chat Completions endpoint（社区高热度），处于 `blocked` | 已创建近两个月，需要维护者解除阻塞或明确阻塞原因 | P1（社区关注度） |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | Pixel-level image validation（防止损坏图片导致 provider 请求失败） | 创建于 8 月 7 日，`needs-author-action`，18 天未更新 | P2 |
| [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) | TaskRecord 作为唯一后台生命周期 owner | `needs-author-action`，创建于 8 月 4 日，21 天未推进 | P2 |
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | Git shell policy 参数加固（安全） | `needs-author-action`，创建于 8 月 2 日，23 天未推进 | P1（安全） |
| [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) | 浏览器自动化改为显式 opt-in（安全），标记 `do-not-merge` | `blocked` + `do-not-merge`，需要维护者决策 | P1（安全） |
| [#10173](https://github.com/zeroclaw-labs/zeroclaw/issues/10173) | Alpine 非 root 镜像元数据强制 CI 检查（安全） | 已接受，`in-progress`，等待对应 PR | P2 |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | OIDC milestone tracker（身份验证/隔离/授权） | 创建于 6 月 24 日，仍在进行中，仅 1 条评论 | P2 |


## 项目健康度摘要

| 维度 | 评估 | 备注 |
|------|------|------|
| 社区活跃度 | ★★★★☆ | Issues/PR 50+50 条，多个高热度 RFC 在推进 |
| Bug 修复效率 | ★★★☆☆ | 24h 内关闭 7 个 Issues，但多个 P1 bug（#10165、#10324）仍无合并的 fix PR |
| PR 审阅效率 | ★★☆☆☆ | 45/50 的 PR 处于待合并状态，且较多被标记为 `needs-author-action` 或 `needs-maintainer-review`，审阅与推进存在瓶颈 |
| 架构治理 | ★★★★☆ | Tracker #8692 与 #9600 的设立显示项目正借助体系化流程解决跨模块边界与决策效率问题 |
| 安全态势 | ★★★☆☆ | 多个高优先级安全修复等待合入；S0 级 delegate 绕过问题（#10165）尚无 fix PR |

**重点关注项：** Chat Completions profile（#8603）的高热度与 PR #8486 的长期 `blocked` 状态构成了当前社区与项目之间的最大张力；多个安全修复（#9678、#9830、#10173）的在途时间偏长，建议维护者优先推进。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*