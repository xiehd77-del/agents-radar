# OpenClaw 生态日报 2026-08-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-10 01:55 UTC

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

# OpenClaw 项目动态日报 — 2026-08-10

## 1. 今日速览

OpenClaw 项目今日处于**高活跃度**状态，过去24小时内 Issue 更新达 500 条（新开/活跃 429 条，关闭 71 条），PR 更新同样为 500 条（待合并 334 条，已合并/关闭 166 条），反映出社区参与度和维护者响应均维持在较高水平。**但需要警惕的是**，今日无新版本发布，且最热门 Issue（#116277）虽然已被关闭，其核心问题"静默回复失败"仍持续复发（#121058），提示底层架构可能存在尚未根治的稳定性隐患。此外，一批 P0/P1 级别的 Bug（如文档与版本脱节 #48920、无限重启循环 #111372）仍处于待处理状态，对项目健康度构成压力。


## 2. 版本发布

过去24小时内无新版本发布。当前最新版本停留在 2026.7.x 系列（含 beta 版本）。不过，多个问题表明社区对**稳定版本升级路径**存在明显焦虑：

- **#90378** (https://github.com/openclaw/openclaw/issues/90378) — 用户升级 5.28 → 6.1 时，cron 存储从 JSON 静默迁移到 SQLite 且未保留原配置，新任务默认 `delivery.mode=announce` 导致通道错误。
- **#111372** (https://github.com/openclaw/openclaw/issues/111372) — 升级 6.11 → 7.1-2 后，macOS 上 gateway 陷入无限重启循环（SIGTERM loop），已标记为回归问题。
- **#48920** (https://github.com/openclaw/openclaw/issues/48920) — P0 级文档与版本脱节：Live Docs 中包含的 `IsolatedSessions` 配置在最新稳定版 2026.3.13 中并不存在。

> **建议**：维护者需尽快发布包含回归修复的补丁版本，并审视升级迁移脚本的透明性与文档同步机制。


## 3. 项目进展

尽管今日无新版本发布，但 PR 活跃度表明项目在多条线推进中。重点关注的已合并/关闭 PR 和技术方向：

- **#121333 (已合并)** — `fix(android): prevent talk config parser contract drift` (https://github.com/openclaw/openclaw/pull/121333)：修复 Android 端 Talk 配置解析器与 Swift/Gateway 端的契约漂移问题，恢复了 Android 的共享 fixture 测试覆盖，确保跨端一致性和未来的构建安全。
- **#120312 (已合并)** — `fix(codex): keep Slack turns running when a plugin is disabled` (https://github.com/openclaw/openclaw/pull/120312)：修复了当管理员禁用某个远程 Codex 插件时，Slack 对话在常规模型轮次之前意外停止的问题。

**今日大量新增 PR 呈现出三个核心方向**，表明项目正在系统性加固：

| 方向 | 代表 PR | 意图 |
|---|---|---|
| **稳定性防护** | #121063 (https://github.com/openclaw/openclaw/pull/121063) — 为 `runLoop` 增加 turn/error-batch/idle-repeat 防护，针对外部服务返回 429 引发的无限重试（曾造成 219 轮、~15M tokens 消耗）；#120190 (https://github.com/openclaw/openclaw/pull/120190) — 为压缩（compaction）增加有界可恢复机制 | 防止 Agent 陷入失控循环，尤其是外部 API 错误被误判为成功场景 |
| **基础设施加固** | #120597 (https://github.com/openclaw/openclaw/pull/120597) — 检测 virtiofs/9p 文件系统以防止 SQLite WAL 损坏（涉及 Docker Desktop/OrbStack/Podman 场景）；#121316 (https://github.com/openclaw/openclaw/pull/121316) — 重构 SQLite 同步操作，强制执行 writer fence，清理过时的存储抽象层 | 解决容器化环境下的数据一致性问题 |
| **前端/UI 修复** | #121286 (https://github.com/openclaw/openclaw/pull/121286) — Web UI 危险操作的二次确认；#119527 (https://github.com/openclaw/openclaw/pull/119527) — 转录搜索可打开选定的历史消息 | 改善用户交互体验 |

**合并率**约为 33%（166/500），高于常见开源项目水平，说明维护者响应积极。但需注意大量关键 PR 仍被标记为 "⏳ waiting on author" 或 "📣 needs proof"，**存在因作者响应不及时而阻塞合并的风险**。


## 4. 社区热点

今日最受关注（评论数 Top 3）的议题：

### 🥇 #116277 — DeepSeek v4 Flash 静默回复失败（已关闭，**196 条评论**）
https://github.com/openclaw/openclaw/issues/116277

不但是今日之最，更可能是整个项目近期讨论量最大的 Issue。该 Bug 描述了 DeepSeek v4 Flash 在 Telegram 群组中**静默失败**，仅输出通用的 "No reply was generated" 回退消息。尽管该 Issue 已被标记为关闭（lobster 级别），但**#121058** (https://github.com/openclaw/openclaw/issues/121058) 在 8 月 9 日重新开启，指出问题仍在持续发生。196 条评论的高热度反映出：
- 该模型被广泛使用，影响面大；
- "静默失败"比显式报错更令用户困惑，因为它隐藏了失败的根本原因；
- 关闭即复发的情况加深了社区对修复质量的质疑。

### 🥈 #22438 — 分层引导文件加载（19 条评论）
https://github.com/openclaw/openclaw/issues/22438

该功能请求于 2 月提出，今日仍保持活跃。核心诉求是：bootstrap 文件在每个会话中都会消耗大量 tokens，对大型工作区的用户来说尤其浪费。建议引入**分级加载**机制以渐进式控制上下文。评论虽不多但持续，说明有稳定需求基础。

### 🥉 #121058 — 静默回复失败复发（19 条评论）
https://github.com/openclaw/openclaw/issues/121058

见上文分析，这是 #116277 的直接延续，凸显了该问题的顽固性。监控 cron 仍持续记录新的失败事件，说明修复并未触及根本原因。

**社区情绪分析**：热点集中在"AI 可靠性"（静默失败）与"成本控制"（tokens 浪费）两大主题上，反映出用户已从追求功能转向追求稳定与经济性。


## 5. Bug 与稳定性

按严重程度排列今日活跃的 Bug：

### 🔴 P0 级（发布阻断）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 与发布版本脱节：文档中的配置在实际版本中不存在 | **OPEN**，10 条评论，👍4 | 无 |
| [#111372](https://github.com/openclaw/openclaw/issues/111372) | macOS 升级后 gateway 无限重启循环（SIGTERM loop） | **OPEN**（回归），5 条评论 | 无 |

### 🟠 P1 级（高优先级）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse 原生钩子产生 CPU 密集型 `openclaw-hooks` 进程，阻塞 gateway RPC（platinum hermit） | **OPEN**，18 条评论，👍2 | 无 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式无法在主要会话中注入中轮消息（diamond lobster） | **OPEN**，16 条评论，👍4 | 无 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | `gh-issues` 技能将未经过滤的 Issue 内容注入子代理提示词 — **安全问题**（platinum hermit） | **OPEN**，16 条评论，👍1 | 无 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory 阻塞回复 & QMD 启动初始化可超载多代理 gateway（diamond lobster） | **OPEN**，10 条评论，👍2 | 无 |
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败在 #116277 关闭后仍持续发生 | **OPEN**，19 条评论 | 无 |

### 🟡 P2 级（中等优先级，积累较多）

P2 级问题数量较多，**重点关注重复出现的模式**：
- **消息丢失/重复**：Telegram 重复消息 (#96242)、多个通道的重复 transcript/replay 问题 (#69208 伞形 Issue)
- **子代理生命周期**：子代理会话完成后未清理，主会话无响应 (#47975)
- **迁移问题**：cron 存储 SQLite 迁移静默失败 (#90378)

**趋势总结**：今日 Bug 报告集中于 **(1) 静默失败/消息丢失、(2) Agent 失控循环（CPU 峰值、无限重试）、(3) 升级迁移不透明** 三大主题，且**多数高危问题尚无对应的 Fix PR**，维护者需优先分配资源。


## 6. 功能请求与路线图信号

### 高潜力（可能被纳入下一版本）

| 功能请求 | Issue | 关联 PR 或信号 | 分析 |
|---|---|---|---|
| **Tiered bootstrap 加载** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 暂无直接 PR | 19 条评论持续活跃，解决 token 浪费的痛点，与成本优化趋势契合 |
| **Masked Secrets（API Key 遮蔽）** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 暂无直接 PR | 15 条评论，👍4，牵涉安全与提示注入防护，与 #45740 的安全隐患形成呼应 |
| **Per-agent dreaming 配置** | [#67413](https://github.com/openclaw/openclaw/issues/67413) | 暂无直接 PR | 解决多工作区同时 dreaming 导致的内存峰值/OOM 问题，👍5 表明需求强烈 |
| **优雅子代理超时（预超时警告）** | [#6625](https://github.com/openclaw/openclaw/issues/6625) | 暂无直接 PR | 避免子代理被强杀导致的工作丢失，与用户对可靠性诉求一致 |
| **Webchat 内联按钮支持** | [#46656](https://github.com/openclaw/openclaw/issues/46656) | 暂无直接 PR | 跨通道能力一致性，改善 WebChat 用户交互 |

### 已有关联 PR 的功能（值得关注进度）

- **上下文感知延续（continue_work）**：PR #85651 (https://github.com/openclaw/openclaw/pull/85651) — 大型功能（XL），已标记为 "needs proof"，若合可将显著增强 Agent 的自主延续能力。
- **原生 announceTarget 路由**：PR #101248 (https://github.com/openclaw/openclaw/pull/101248) — 优化子代理完成通知路径，支持跨通道回传。
- **多插槽内存架构**：Issue #60572 (https://github.com/openclaw/openclaw/issues/60572)，👍3，可能会在更大版本中规划。


## 7. 用户反馈摘要

综合今日 Comments 与 Issues 内容，提炼真实用户声音：

**😡 主要痛点**

1. **"静默失败"是最令人沮丧的体验**：DeepSeek v4 Flash 的问题（#116277/#121058）持续发酵，用户对"AI 没反应但又不说为什么"的容忍度极低。这比显式报错更糟，因为用户无法判断是网络问题、模型问题还是配置问题。
2. **升级 = 冒险**：#90378 与 #111372 的案例表明，升级后可能出现配置漂移、无限重启等问题，用户对升级路径缺乏信心。
3. **Agent 失控风险**：#121063 中描述的 6h42m、~15M tokens 的无限循环消耗是真实且昂贵的风险。用户对成本的敏感度很高，需要界限保护功能。
4. **群聊/多代理场景混乱**：#56692 中用户明确指出"代理会响应原本发给其他代理的消息"，在多代理协作场景下此问题严重。

**😊 积极反馈信号**

- 评论中的 👍 数据表明用户对 **Masked Secrets**（👍4）、**Per-agent dreaming**（👍5）等功能需求强烈，说明用户在积极思考安全与资源管理。
- **修复被确认关闭**：#116022（beta.5 session tombstone）、#58139（memory-lancedb Windows 挂载）等均已被关闭，说明部分 P1/P2 问题得到了有效修复。

**📌 用户使用场景洞察**

- 大量 Issue 集中在 **Telegram、WhatsApp、Slack** 等消息通道，表明 OpenClaw 被广泛应用于消息驱动的私人助理场景。
- **容器化部署**（Docker、k3s）的 Bug 频发（如 #51049、#120597），显示容器场景是主流但尚未成熟。
- **模型多样性**（DeepSeek、Kimi、GLM、Claude 等）用户群体庞大，对多模型 fallback 的可靠性有硬性要求（如 #94919 中 ECONNRESET 触发 fallback 但用户无感知）。


## 8. 待处理积压

以下高影响力 Issue 长期未获有效响应或修复，建议维护者重点关注：

| Issue | 创建时间 | 影响力 | 紧急度 | 建议 |
|---|---|---|---|---|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 2026-02-06 | 安全相关，👍4，diamond lobster | **高** — 安全隐患 | 已有超过 6 个月未解决，应尽快纳入安全评审或路线图 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) gh-issues 提示注入 | 2026-03-14 | 安全相关，platinum hermit | **高** — 提示注入可导致信息泄露 | 需安全审查并尽快修复 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) 文档与版本脱节 | 2026-03-17 | P0，用户信任度受损 | **高** — 文档误导直接产生不可用配置 | 长期未响应将加剧用户流失 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex 钩子 CPU 峰值 | 2026-06-06 | 稳定性，platinum hermit | **中高** — 影响特定集成场景 | 应优先调查 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie 子进程泄漏 | 2026-06-29 | 稳定性，长期运行导致资源耗尽 | **中高** — 回归问题 | 与 #91009 可能有关联，可一并排查 |
| PR [#87552](https://github.com/openclaw/openclaw/pull/87552) 可恢复的投递尝试 | 2026-05-28 | 消息可靠性，P1 | **中** — 已等待超 2 个月，标记 "needs proof" | 维护者应指导作者补充证明或关闭 |
| PR [#85651](https://github.com/openclaw/openclaw/pull/85651) 上下文感知延续 | 2026-05-23 | 重大功能特性，XL 级 | **中** — 需要真实行为证明 | 若可行应推动合入，否则明确搁置原因 |

**整体评判**：项目活跃度优秀，维护者响应积极，但**安全问题堆积**（#45740, #10659）和**用户信任度风险**（#48920, #121058）是当前最大的健康度隐患。建议下个版本优先解决静默失败的根本原因、安全评审积压问题，并在版本发布时提供更透明的迁移说明。

---

## 横向生态对比

# 个人 AI 智能体开源生态横向对比分析报告

**报告日期**: 2026-08-10  
**数据窗口**: 2026-08-09 ~ 2026-08-10  
**覆盖项目**: OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、IronClaw、LobsterAI、Moltis、CoPaw、ZeroClaw(含 NullClaw、TinyClaw、ZeptoClaw 三个无活动项目)


## 1. 生态全景

个人 AI 智能体开源生态正处于**高速扩张期与稳定性阵痛期并存**的关键阶段。一方面，社区贡献热情空前高涨——今日 12 个监测项目中 9 个有实质活动，累计产生 170+ 条 Issue 更新和 200+ 条 PR 更新，CoPaw 首次贡献者占比超过 60%；另一方面，**"静默失败"与"数据可靠性"成为跨项目共性问题**——OpenClaw 的 DeepSeek 静默回复失败(196 条评论)、Hermes Agent 的消息静默删除、PicoClaw 的 Matrix 通道静默断连，均指向同一核心矛盾：智能体在长尾场景下的可预期性与可观测性尚未达标。此外,**安全加固**成为全生态共识,SSRF 修复(NanoBot/PicoClaw/ZeroClaw)、提示注入防护(Hermes Agent/OpenClaw)、供应链 CVE 治理(NanoClaw)多点开花。项目间的分化正在加剧:头部项目(OpenClaw)已进入规模化的社区治理阶段,而中小项目(如 Moltis、LobsterAI)仍处于核心功能打磨期。


## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | Release | 健康度评估 |
|------|------------|---------|-------------|---------|-----------|
| **OpenClaw** | 500 (429新/活跃, 71关闭) | 500 (334待合并, 166合并/关闭) | 166 | 无 | ⚠️ **高活跃但存隐患** — 社区规模最大,但 P0 Bug 积压 + 热门 Issue 复发 |
| **Hermes Agent** | 50 (多数新开/活跃) | 50 (少数合并/关闭) | ~3 | 无 | ⚠️ **高强度迭代 + 严重稳定性问题** — P0 消息丢失/命令执行风险 |
| **ZeroClaw** | 50 (38活跃, 12关闭) | 50 (49待合并, 1合并/关闭) | 1 | 无 | ⚠️ **功能密集提交但审查积压** — RFC 审批阻塞 + P0 安全未修复 |
| **IronClaw** | 22 (15活跃, 7关闭) | 28 (8合并/关闭) | 8 | 无 | 🟢 **快速迭代** — Bug→Fix 闭环效率高,架构演进方向清晰 |
| **CoPaw** | 18 (11活跃, 7关闭) | 34 (33待合并, 1关闭) | 1 | 无 | 🟢 **社区加速成长期** — 首次贡献者超 60%,但 PR 审查速度偏慢 |
| **NanoClaw** | 1 (1新开) | 16 (16待合并) | 0 | 无 | 🟡 **开发冲刺中段** — 代码就绪但合并停滞,最长 PR 已悬置 84 天 |
| **NanoBot** | 5 | 15 (4合并/关闭) | 4 | 无 | ⚠️ **安全隐患 + 活跃并行** — 2 个安全漏洞无修复 PR |
| **PicoClaw** | 3 | 6 (1合并) | 1 | 无 | 🟡 **中等活跃** — 安全加固推进中,Matrix Bug 被 stale 关闭 |
| **LobsterAI** | 3 (1新增) | 0 | 0 | 无 | 🟡 **低活跃** — 讨论集中在模型切换与上下文窗口 |
| **Moltis** | 2 (2新开) | 1 (1待合并) | 0 | 无 | 🟡 **稳定但保守** — 良性维护,无重大功能推进 |
| **NullClaw** | — | — | — | — | ⚪ 无活动 |
| **TinyClaw** | — | — | — | — | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | — | ⚪ 无活动 |

> 注:OpenClaw 的 Issue/PR 数量级远高于其他项目,反映其生态规模已形成指数级差距。


## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中无可争议的领跑者**,其社区规模(日更新 500+ Issue + 500+ PR)是第二梯队(Hermes Agent、ZeroClaw)的 10 倍,是中小项目的两个数量级以上。

**核心优势**:
- **生态规模壁垒** — 500 条日 Issue 更新意味着庞大的用户基数和活跃的第三方贡献者网络,已形成自增强的社区飞轮
- **全通道覆盖** — Telegram、WhatsApp、Slack、Discord 等消息通道的全方位适配,使其成为消息驱动式 AI 助理的事实标准
- **技术纵深** — 今日 PR 覆盖容器化 SQLite 安全(virtiofs/9p 检测)、runLoop 防失控机制、跨端契约一致性(Android/Swift/Gateway),技术深度高于同级项目

**潜在短板**:
- **稳定性信任危机** — 最热门 Issue(#116277, 196 评论)关闭后复发,叠加 P0 文档脱节、无限重启回归,用户对"升级 = 冒险"的感知正在累积
- **上层架构复杂化** — 多端(Android/iOS/Desktop/Gateway)同步维护推高技术债,修复周期长于中小项目

**与同类对比**:
- vs **Hermes Agent**: Hermes 在数据安全(命令执行防护、凭证验证)上有更激进的设计,但社区规模和通道生态远不及 OpenClaw
- vs **CoPaw**: CoPaw 侧重生产力场景(记忆搜索、审批工作流),功能取向上更像"个人工作助理",而 OpenClaw 更像"通用智能体运行时"
- vs **NanoBot**: NanoBot 主打轻量、易部署,是 OpenClaw 的"轻量替代",但功能深度差距明显


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **Token/成本可观测性** | OpenClaw(分级引导加载 #22438)、NanoBot(Token 消耗追踪 #5266)、IronClaw(工具调用效率 #6046) | 用户对 token 消耗已从"关心"升级为"焦虑"——需要细粒度日志、渐进式上下文加载、防止静默消耗 |
| **静默失败根治** | OpenClaw(#121058 复发)、Hermes Agent(#82756 消息静默删除)、PicoClaw(#3203 Matrix 静默断连)、NanoBot(隐藏的 token 黑洞) | "没有报错的失败"比显式错误更具破坏性,多项目用户明确表示零容忍——需要可观测性 + 自动恢复机制 |
| **安全加固** | NanoBot(allowPatterns 绕过)、PicoClaw(SSRF 三通道修复)、ZeroClaw(webhook 认证缺失、配置竞态)、Hermes Agent(命令执行防护、提示注入)、NanoClaw(供应链 CVE) | 从 SSRF、命令注入到提示注入、供应链攻击,安全已成为生态的"生存底线"而非"加分项" |
| **升级/迁移透明度** | OpenClaw(cron 存储静默迁移 #90378)、Hermes Agent(状态管理)、PicoClaw(deltachat 重构 -200LOC) | 配置漂移、静默行为变化、破坏性变更缺乏提示——用户对升级路径的信心普遍不足 |
| **Agent 失控防护** | OpenClaw(runLoop 防护 PR、压缩有界化)、Hermes Agent(命令执行风险)、ZeroClaw(MCP 内存泄漏)、IronClaw(工具调用纪律) | CPU 峰值、无限重试、令牌耗尽、自复制 Routine——"Agent 失控"从科幻担忧变为现实成本 |
| **容器化部署可靠性** | OpenClaw(SQLite WAL 损坏检测)、NanoBot(Docker 部署权限)、NanoClaw(镜像发布加固)、IronClaw(Slack 容器集成) | 容器是主流部署方式但远未成熟,数据一致性、文件系统兼容性、镜像安全是共同瓶颈 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|------|---------|---------|-------------|
| **OpenClaw** | 全功能通用智能体(多通道、多模型、子代理、记忆、技能) | 个人开发者、高级用户、企业试点 | Go 后端 + 多端(Swift/Android) + 可插拔 Provider;单体仓库,复杂度高 |
| **Hermes Agent** | 终端智能体(偏 CLI/桌面) + 强调安全边界 | 安全敏感型开发者、终端重度用户 | Rust 实现,强调命令验证、凭证安全、平台适配 |
| **CoPaw** | 生产力场景(记忆搜索、审批流、会话管理) | 办公用户、知识工作者 | Python 后端 + Web Console;Qwen 生态绑定 |
| **ZeroClaw** | 大规模多代理编排 + 治理框架 | 企业级部署、平台团队 | Rust 实现,RFC 驱动治理,强调安全默认值、RBAC、签名机制 |
| **IronClaw** | 工具目录与发现性能 | LLM 应用开发者 | Rust 实现,专注大规模工具检索、tool discovery 优化 |
| **NanoBot** | 轻量快速部署(单文件、零配置) | 个人用户、小型团队 | Go/轻量架构,强调开箱即用 |
| **NanoClaw** | 通道适配器(多 IM 平台) + 加固镜像 | 通行集成型用户 | Go 实现,专注通道接入与供应链安全 |
| **PicoClaw** | 嵌入式/轻量通道(微信、Telegram 等) | 嵌入式开发者、通道多样性需求 | Go 实现,强调多通道覆盖 |
| **LobsterAI** | 多模型切换与协作 | 模型对比测试用户 | 关注模型网关级路由,网易有道背景 |
| **Moltis** | Vault/安全 + 容器沙箱 | 隐私敏感用户 | 小而美,专注安全与状态一致性 |

**核心差异**:OpenClaw 追求广度(全通道、全功能),Hermes/ZeroClaw 追求纵深(安全/治理),NanoBot/Moltis 追求轻量,CoPaw 追求生产力场景——生态已形成"全能型 vs 专精型 vs 轻量型"三级分化。


## 6. 社区热度与成熟度

| 阶段 | 项目 | 特征 |
|------|------|------|
| **规模化社区治理阶段** | OpenClaw | 日更新 500+,需建立 formal RFC 流程、自动化 Bug 分类、维护者轮值制度 |
| **快速迭代 + 安全补课阶段** | Hermes Agent、ZeroClaw、IronClaw | 活跃度高但需在安全、稳定性上投入;IronClaw 的 Bug→Fix 闭环效率值得借鉴 |
| **社区加速成长期** | CoPaw、NanoClaw | 首次贡献者大量涌入,PR 审查速度是关键瓶颈 |
| **质量巩固阶段** | NanoBot、PicoClaw、Moltis、LobsterAI | 活跃度中等,聚焦打磨体验与安全加固;LobsterAI 和 Moltis 节奏偏保守 |
| **静默/停滞** | NullClaw、TinyClaw、ZeptoClaw | 24h 零活动,需关注是否存活 |


## 7. 值得关注的趋势信号

**对 AI 智能体开发者的参考价值**:

1. **可观测性成为刚需**:从 OpenClaw 的 token 日志到 NanoBot 的 token 追踪,用户已不再接受"黑箱"式智能体。建议开发者将 token 用量、工具调用链、失败原因作为一等公民纳入日志体系。这不是可选项,而是留存用户的底线。

2. **"静默失败"是最大的信任杀手**:当 Agent 不回复、消息丢失、通道无感知断开时,用户默认"系统坏了",修复成本远高于显式报错。建议所有关键路径强制 fail-loud + 自动恢复,宁可打扰不可静默。

3. **安全不再只是合规问题,而是生态生存问题**:从 SSRF 到提示注入到命令执行,安全漏洞正以每周数起的速度冲击各项目。建议将安全纳入 CI 门禁(如 NanoClaw 的 CVE 扫描 + IronClaw 的自动化修复),并建立安全响应流程。

4. **升级迁移需"透明默认"**:配置漂移、静默迁移、破坏性变更无提示,正在系统性侵蚀用户对升级路径的信心。建议任何变更前显式声明、提供迁移工具、保留回滚选项。

5. **Agent 失控防护成为必备功能**:runLoop 防护、有界重试、压缩有界化、工具调用预算——这些正在从"高级特性"变为"基础安全网"。建议所有外部 API 调用强制设置超时 + 重试上限,防令牌耗尽。

6. **容器化是主流但远未成熟**:SQLite WAL 损坏(virtiofs/9p)、Docker 部署权限、镜像安全——容器场景的稳定性问题横跨所有项目,建议关注针对容器环境的专项验证。

7. **治理与社区流程的自我迭代**:ZeroClaw 出现"社区自发建立维护者决策队列"(#8692),以及"RFC 流程本身需要加速"(#9496)——项目规模扩大后,治理效率成为新瓶颈。建议早期建设清晰的贡献指南、PR 审查 SLA 和 RFC 流程。

---

*报告结束。数据来源:各项目 GitHub 仓库,统计窗口 2026-08-09 ~ 2026-08-10。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-10

> 项目健康度评级：⚠️ **关注**（安全隐患 + 高活跃度并行）

---

## 1. 今日速览

NanoBot 在过去 24 小时内保持了较高的社区活跃度：共产生 5 条 Issue 和 15 条 PR 更新，其中 **2 条安全相关的 Issue 值得高度关注**（涉及 `exec.allowPatterns` 的 shell 链式命令绕过漏洞）。功能开发方面也有实质推进：PR #5299 为 token 用量追踪提供了结构化 API 支持（与社区高频诉求 #5266 直接呼应），PR #5309 修复了 marketplace 技能与内置技能的同名覆盖问题。虽无新版本发布，但 4 个 PR 已合并/关闭，包含文档恢复、测试强化和 WebUI 修复。**总体判断：项目开发活力充沛，但安全问题需要优先处理。**

---

## 2. 版本发布

**无新版本发布。** 建议维护者关注安全 Issue #5305/#5306 的修复进度，考虑尽快发布补丁版本。

---

## 3. 项目进展

### 今日已合并/关闭的 PR（4 个）

| PR | 标题 | 类型 | 说明 |
|---|---|---|---|
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | Add GitAgent Protocol support (agent.yaml + SOUL.md) | 功能/关闭 | 经约 2.5 个月后关闭，未合并。GitAgent Protocol 是一个开放标准，说明该项目可能被搁置或计划以其他方式实现 |
| [#5307](https://github.com/HKUDS/nanobot/pull/5307) | Restore Star History chart | 文档/已合并 | 由于原服务被 GitHub 限制而移除的 Star 历史图表已通过新的 provider 恢复，对项目展示和社区透明度有正面帮助 |
| [#5308](https://github.com/HKUDS/nanobot/pull/5308) | strengthen user-path coverage and CI gates | 测试/CI/已合并 | 新增交互式 CLI、WebUI 分支、路由认证等用户路径测试，增加 V8 覆盖率报告，并移除 5 个冗余测试。CI 质量显著提升 |
| [#5304](https://github.com/HKUDS/nanobot/pull/5304) | fix(webui): explain HTTPS requirement for voice input | Bug 修复/已合并 | 修复了 Android Chrome 在非 HTTPS 环境下无法使用语音输入的问题，现提供明确指引和文档 |

### 关键观察

- **测试基础设施加固**：PR #5308 的合并说明项目正在系统性地强化 CI 门槛，这对长期稳定性是很好的信号。
- **GitAgent Protocol 未合并**：虽然被关闭，但该项目在 nanobot 社区中有一定关注度。建议维护者明确说明后续计划。

---

## 4. 社区热点

### 🔥 热度最高：Issue #5266 — Token 消耗日志追踪

- **链接**: [HKUDS/nanobot Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)
- **状态**: Open | 评论 13 | 创建于 2026-08-06
- **核心诉求**: 用户反映 nanobot 在无明显操作的情况下**2 小时内消耗了约百万级 token**，请求提供详细的 token 消耗日志以便追踪。
- **背后分析**: 这是一个典型的 **成本可观测性** 诉求。随着 AI 应用的日常化，用户对 token 花费越来越敏感。该 Issue 背后可能隐藏着一个更大的问题——**是否有 token 被静默消耗**（如后台任务、重试循环、心跳请求等）。
- **相关信号**: PR #5299 已提出持久化 token 使用记录并通过 `GET /api/settings/usage/records` API 暴露，很可能直接回应此 Issue。

---

## 5. Bug 与稳定性

### 🔴 严重 — 安全漏洞（无 fix PR）

| Issue | 标题 | 风险描述 |
|---|---|---|
| [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell-chain bypass | 通过 shell 链式命令（如 `;`、`&&`），攻击者可以绕过 allowlist 限制执行任意命令 |
| [#5305](https://github.com/HKUDS/nanobot/issues/5305) | allowlist bypass via OpenAI-compatible API | 类似 #5306，但是通过 OpenAI 兼容 API 触发的绕过，攻击面更广（可远程利用） |

**评估**：这是当前项目面临的最紧急风险。如果 nanobot 被部署为公开可访问的 API 服务，这个漏洞可能导致 **远程代码执行**。**尚未发现已提交的 fix PR**，建议维护者优先级标记为 P0。

### 🟡 中等 — 功能性 Bug

| Issue | 标题 | 状态 |
|---|---|---|
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose 部署失败：`entrypoint.sh: Permission denied` | 无 fix PR，有 5 条评论讨论中 |
| [#5311](https://github.com/HKUDS/nanobot/issues/5311) | Agnes AI 自定义 provider 嵌套对象参数双重编码 | 刚创建，无评论 |

### 🟢 已有 Fix PR 的 Bug

| Issue/PR | 标题 | 说明 |
|---|---|---|
| [#5302](https://github.com/HKUDS/nanobot/pull/5302) | Dream consolidation 期间调用不可用工具 | 修复 prompt/tool 不匹配问题（ckkkhoo 提交） |
| [#5303](https://github.com/HKUDS/nanobot/pull/5303) | Weather 技能在 Windows PowerShell 下兼容性 | 修复 `curl` 在 PowerShell 中解析为 `Invoke-WebRequest` 的问题 |
| [#5310](https://github.com/HKUDS/nanobot/pull/5310) | 微信强制二维码登录不生效 | 修复 `--force` 参数无法覆盖已保存账号的问题 |

---

## 6. 功能请求与路线图信号

| 功能/方向 | 来源 | 信号强度 |
|---|---|---|
| **Token 用量追踪** | Issue [#5266](https://github.com/HKUDS/nanobot/issues/5266) + PR [#5299](https://github.com/HKUDS/nanobot/pull/5299) | ⭐⭐⭐⭐⭐ 已有实现 PR，大概率进入下一版本 |
| **Computer Use（计算机控制）** | PR [#4276](https://github.com/HKUDS/nanobot/pull/4276) | ⭐⭐⭐ 长期开放的 feature PR，包含 browser 和 computer_use 工具，目标是模型无关的通用计算机控制。若合并将成为 nanobot 的重要差异化能力。 |
| **Agent Plugins 集成** | PR [#5288](https://github.com/HKUDS/nanobot/pull/5288) | ⭐⭐⭐ 建立供应商中立的插件边界，让外部项目（如 computer-use）作为独立插件运行 |
| **API 状态真实性** | PR [#5255](https://github.com/HKUDS/nanobot/pull/5255) | ⭐⭐ Draft PR，旨在准确报告外部管理的 API 服务器状态，改善 WebUI 信息透明度 |
| **Responses 能力声明** | PR [#5204](https://github.com/HKUDS/nanobot/pull/5204) | ⭐⭐ 重构 provider 层，以声明式方式明确各 provider 的能力边界 |

---

## 7. 用户反馈摘要

从今日活跃的 Issue/PR 评论中提炼的真实用户声音：

**👍 正面反馈：**
- PR #5308（测试强化）的合并获得了社区认可，用户对 CI 改进普遍给予肯定，认为这提升了项目可靠性。

**👎 负面反馈：**
- **Token 黑洞问题**（#5266）：用户反映 nanobot 在闲时也疯狂消耗 token，评论中指出"没有明显用户活动却烧掉大量 token"令人不安，说明可能存在 bug 级 token 泄漏而非单纯缺少日志。
- **Docker 部署门槛较高**（#5295）：普通用户按文档部署时遇到的权限问题，提示文档和镜像构建可能仍有优化空间。
- **微信登录的强制刷新不生效**（PR #5310）：说明即使 `--force` 参数存在，也无法覆盖已保存的登录态，属于易用性问题。

**💡 关键洞察：** 多数用户反馈围绕**可观测性**（token、API 状态）和**部署体验**（Docker）两个主题，这是项目在功能丰富之后需要投入的"打磨"方向。

---

## 8. 待处理积压

以下为长期未获响应的 Issue/PR，建议维护者关注：

### ⚠️ 需关注的 PR

| PR | 标题 | 年龄 | 建议 |
|---|---|---|---|
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | GitAgent Protocol support | 约 2.5 个月（今日关闭，未合并） | 建议明确答复社区是否引入该协议，避免类似提案反复提交 |
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | Model-agnostic computer use | 约 2 个月 | 已标记 conflict，需要 rebase。功能价值高，建议维护者给出明确态度，是否纳入路线图 |

### ⚠️ 需关注的 Issues

| Issue | 标题 | 年龄 | 建议 |
|---|---|---|---|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Token 消耗追踪 | 4 天 | 已有 PR #5299 对应，建议建立关联并推动 review/merge |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose 权限失败 | 2 天 | 部署阻断性问题，建议优先修复镜像或更新文档 |

---

*本报告由 AI 分析师基于 GitHub 数据自动生成，数据截止 2026-08-10。如需人工复核或有任何疑问，请联系项目维护者。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 GitHub 数据生成的 **Hermes Agent 项目动态日报 (2026-08-10)**。

---

# Hermes Agent 项目动态日报 — 2026-08-10

## 1. 今日速览

今日 Hermes Agent 项目活跃度极高，处于高强度迭代与问题修复阶段。过去24小时内 Issues 和 PR 的更新数量均达到50条（主要集中于新开/活跃状态），显示社区反馈与贡献者活动均十分频繁。项目当前面临严峻的稳定性挑战，尤其是**会话状态管理（session-state）**与**消息投递（message-delivery）**相关的严重 Bug 频发，其中包含多个 P0/P1 级别的数据丢失和会话中断问题。与此同时，社区贡献者积极响应，针对桌面端体验、底层依赖修复和新平台适配提交了大量 PR，但目前绝大多数 PR 处于待合并状态，可能面临合并积压。整体来看，项目功能迭代速度与 Bug 修复速度并行，但质量安全管理需高度关注。

## 2. 版本发布

- 今日无新版本发布。

## 3. 项目进展

今日**没有** PR 被标记为“已合并/关闭”（根据数据，合并或关闭的 PR 数量为 3，可能为除展示外的小型维护或依赖更新）。这意味着核心代码库的合并进度有所放缓，核心维护者可能正在处理更紧急的问题或积压的 PR。

尽管合并较少，但社区提交了多个**高价值**的待合并 PR，这些 PR 反映了项目即将取得的重要进展：

- **修复严重会话状态丢失问题**：
    - [PR #82592](https://github.com/NousResearch/hermes-agent/pull/82592)：修复网关/中继层冻结预览最终回复和空闲会话委托回调丢失的问题，涉及消息投递可靠性，对重度用户至关重要。
- **数据安全与命令执行防护**：
    - [PR #82869](https://github.com/NousResearch/hermes-agent/pull/82869)：修复凭证安全，在调用 Vault CLI 前增加二进制文件验证机制。
    - [PR #78311](https://github.com/NousResearch/hermes-agent/pull/78311)：将 `x_search` 工具的结果视为不受信任内容进行扫描，增强对提示注入的防御。
- **提升桌面端与平台兼容性**：
    - [PR #82861](https://github.com/NousResearch/hermes-agent/pull/82861)：修复 Linux/Wayland 下 HUD 无法拖拽问题，使用原生 `-webkit-app-region` 方案，改进 Linux 用户体验。
    - [PR #82865](https://github.com/NousResearch/hermes-agent/pull/82865)：修复 `read_file` 误将含多字节字符的 UTF-8 文件分类为二进制文件的问题，提升对 CJK 等非英文内容支持。
- **基础设施与新平台适配**：
    - [PR #82867](https://github.com/NousResearch/hermes-agent/pull/82867)：优化 FTS 索引构建逻辑，避免在 tokenizer 缺失时每次启动都重建索引，显著减少启动和会话打开耗时。
    - [PR #82864](https://github.com/NousResearch/hermes-agent/pull/82864)：为 Telegram 适配器增加“纯表情回复”功能。

**结论**：项目功能开发和修复进度活跃，但合并管线存在瓶颈。讨论热点聚焦于极端可靠性问题，若这些 PR 被合并，项目稳定性将获得显着提升。

## 4. 社区热点

今日讨论热度最高的议题反映了用户对**数据安全**和**无障碍访问**的极致关切：

- **[Issue #63047] Desktop app becomes completely unresponsive...** (19条评论)
    [链接](https://github.com/NousResearch/hermes-agent/issues/63047)
    **分析**：桌面应用在约5条消息后完全无响应，包括设置面板。这是一个严重的可用性灾难，引发了大量用户共鸣。大家可能在讨论环境配置差异、复现步骤以及等待官方修复的临时方案。此问题与 #82756 等会话状态问题可能同源，背后诉求是**希望得到稳定的桌面端使用体验**。

- **[Issue #26689] Accessibility improvements for blind VoiceOver users** (13条评论)
    [链接](https://github.com/NousResearch/hermes-agent/issues/26689)
    **分析**：虽然这是一个较早的 Feature Request，但今日仍获得大量讨论，表明社区对**包容性设计**的呼声很高。盲人用户详细描述了使用屏幕阅读器操作 Hermes 的困难，诉求是希望项目组将无障碍作为一等公民。这不仅是功能需求，也体现了开源社区对多样性的尊重。

## 5. Bug 与稳定性

今日报告了大量严重 Bug，按严重程度排列如下：

**P0 - 极端严重（数据丢失风险）**

- **[Issue #82756]** Desktop 端再次出现静默删除约65条消息的历史记录问题（第三次复现）。这是极高的数据完整性缺陷，可能和桌面客户端的 `truncate` 逻辑失效有关。
    [链接](https://github.com/NousResearch/hermes-agent/issues/82756)
    **[已有关联PR #82592]**：虽然该 PR 主要针对网关，但可能会间接改善会话状态一致性。

- **[Issue #82842]** Agent 在 Windows 上执行了针对 C:\ 根目录的 `rd /s /q` 命令，险些导致系统盘数据全部丢失。这暴露了终端命令执行风险边界和用户授权确认机制的严重漏洞。
    [链接](https://github.com/NousResearch/hermes-agent/issues/82842)
    **状态**：尚无直接修复 PR，需重点紧急关注。

**P1 - 严重（核心功能不可用）**

- **[Issue #63047]** 桌面应用完全无响应（见社区热点）。
    [链接](https://github.com/NousResearch/hermes-agent/issues/63047)
- **[Issue #82770]** 测试会话泄漏到生产环境 `state.db`，导致700+无用的数据库行。
    [链接](https://github.com/NousResearch/hermes-agent/issues/82770)
    **状态**：尚无直接修复 PR。

**P2 - 中等（功能受损或存在安全隐患）**

- **[Issue #82846]** 智能审批的辅助 LLM 调用无强制超时，供应商响应停滞会永久卡死 Agent 会话。
    [链接](https://github.com/NousResearch/hermes-agent/issues/82846)
    **状态**：尚无直接修复 PR。
- **[Issue #82798]** `skills_guard` 安全扫描将 `__PLACEHOLDER__` 模板识别为硬编码密钥，错误阻止技能安装。
    [链接](https://github.com/NousResearch/hermes-agent/issues/82798)
    **状态**：尚无直接修复 PR。
- **[Issue #82592]** 相关的网关消息冻结问题。
    [链接](https://github.com/NousResearch/hermes-agent/pull/82592) (PR)
- **[Issue #82831]** `normalize_usage` 在 usage 详情为字典时错误地统计推理 token 为 0，影响成本统计和配额计算。
    [链接](https://github.com/NousResearch/hermes-agent/issues/82831)
    **状态**：尚无直接修复 PR。

## 6. 功能请求与路线图信号

- **会话状态管理革命（高优先级）**：多个 Issues（#82756, #82770）指向现有状态管理机制脆弱。虽然未见全新功能 PR，但针对这些问题的修复（如 #82592, #82867）是演进关键，暗示项目将投入更多精力重构会话持久化层。
- **数据安全与权限强化（强信号）**：[Issue #82842](https://github.com/NousResearch/hermes-agent/issues/82842)（高风险命令）和 [Issue #82689](https://github.com/NousResearch/hermes-agent/issues/82689)（Kanban 命令无授权门禁）表明用户对安全边界极度敏感，未来的版本可能会看到更严格的命令审批机制和权限沙箱。
- **新平台与集成扩展（潜在）**：存在较老的对 Zalo Bot 平台适配的 PR [#4290](https://github.com/NousResearch/hermes-agent/pull/4290)，虽长时间未合并，但仍被更新，说明贡献者仍在维护，未来有可能被纳入。
- **自动化与自我改进（长期愿景）**：[Issue #61644](https://github.com/NousResearch/hermes-agent/issues/61644) 呼吁构建自主评估与自我改进引擎，尽管当前优先级不高，但随着 Agent 复杂化，此需求将愈发强烈。

## 7. 用户反馈摘要

- **频繁遇到“假死”与卡顿**：大量用户反馈桌面端和网关在处理长对话或特定操作后变得无响应（#63047）。
- **对数据丢失的恐慌**：用户反映消息静默消失（#82756），这是对信任的重大打击，用户期待更强的数据审计和回滚机制。
- **对“暗坑”的不满**：例如，`hermes update` 的误导性错误提示（#77211），OpenRouter 路由模型被静默隐藏（#46064），这些细节问题虽小但极大影响用户体验。
- **社区贡献热情高涨**：尽管存在上述问题，每天仍有大量高质量的 PR 被提交（包括构建系统、状态管理、新平台适配等），说明用户认为 Hermes 潜力巨大，愿意主动参与修复和建设。

## 8. 待处理积压

以下为长期未决或近期关注度高但仍待回应的议题：

- **[Issue #63047]** P1 级桌面端无响应问题，已持续近一个月，评论达19条，至今无官方有效回应，用户急需替代方案。
    [链接](https://github.com/NousResearch/hermes-agent/issues/63047)
- **[Issue #82756]** P0 级消息丢失问题，第三例报告，用户情绪激烈，需要官方优先响应和安全审计，且需检查 `main` 分支是否已合入相关修复（例如之后提到的 FTS 修复）。
    [链接](https://github.com/NousResearch/hermes-agent/issues/82756)
- **[PR #72579]** 关于 ACP 会话模型选择的修复，待考虑是否纳入下一版本。
    [链接](https://github.com/NousResearch/hermes-agent/pull/72579)

---

**日报结语**：今日的 Hermes Agent 正处于一个“多事之秋”。社区贡献活跃度极高，但反馈的主流问题是严重的稳定性与数据安全问题。建议维护团队优先处理 P0/P1 级别的数据丢失和命令执行风险议题，并加速合并像 #82592、#82867 这类底层可靠性修复的 PR。同时，对长期未决的无障碍需求（#26689）给予正式回应，有助于维持社区的良好生态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-10**  
**数据窗口：2026-08-09 至 2026-08-10**


## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持中等偏上的活跃度，共产生 3 条 Issue 更新和 6 条 PR 更新，其中 5 个 PR 正在等待合并。安全加固是今日的核心主题——三个相互关联的 PR（#3322、#3323、#3324）集中修复了多通道媒体下载的 SSRF 漏洞，覆盖微信、企业微信及 QQ/Telegram/Discord/LINE/Slack 等主流通道。功能层面，Telegram 原生表格渲染（#3325/#3327）从 Issue 快速落地为 PR，体现了社区协作的高效率。与此同时，一个持续一个多月的 Matrix 同步断连 Bug（#3203）今日被标记关闭，但关闭原因为 stale 而非修复，这一点值得警惕。今日无新版本发布。


## 2. 版本发布

今日无新版本发布。最近已知版本为 v0.2.9（Issue #3203 中提及）。


## 3. 项目进展

今日合并/关闭的 PR 仅有 1 个：

- **[#3326] fix(web): remove duplicate pnpm lock entries**（已合并）— 由 As-tsaqib 提交。修复了 `web/frontend/pnpm-lock.yaml` 中两处 `semver@7.8.5` 的字节级重复映射项，该问题会导致 `pnpm install --frozen-lockfile` 报 `ERR_PNPM_BROKEN_LOCKFILE` 错误。属于构建链路清理，虽非用户可见功能，但对 CI/CD 稳定性和新贡献者 onboarding 有实际价值。
  - 链接：https://github.com/sipeed/picoclaw/pull/3326

另有 5 个 PR 处于待合并状态（详见下文 Bug 修复与功能部分），其中安全加固系列（#3322/#3323/#3324）若整体合入，将系统性收窄多个通道的 SSRF 攻击面，属于项目安全基线的明显提升。


## 4. 社区热点

今日最受关注的议题是 **[Issue #3203] Matrix sync loop 断连无重连逻辑**（已关闭，8 条评论，2 👍），该 Bug 自 7 月 2 日报告以来持续活跃，描述了一个隐蔽且影响严重的问题：Matrix 的 `/sync` 长轮询在网络中断或 homeserver 重启后静默死亡，且因主进程未退出导致 systemd 的 `Restart=on-failure` 无法触达，形成"僵尸连接"。该 Issue 今天被标记为 stale 并关闭——值得注意的是，关闭原因并非修复完成，而是因长期无进展被自动清理。

**分析**：这一关闭方式可能引发社区不满。该 Bug 的隐蔽性（无崩溃日志、无自动恢复）意味着用户可能长时间无感知地失去 Matrix 通道，此种"静默死亡"比显式报错更具破坏力。如果维护者因时间或精力原因暂无法处理，建议明确标注"已知问题"并挂入里程碑，而非仅仅依赖 stale bot 关闭，以免埋没重要反馈。

- 链接：https://github.com/sipeed/picoclaw/issues/3203


## 5. Bug 与稳定性

**严重：SSRF 漏洞（3 个关联 PR，均已提交修复，待合并）**

- **[#3322] fix(channels): block private targets on inbound media downloads**（OPEN）— 发现 `utils.DownloadFile` 的 SSRF 加固（`BlockPrivateTargets`）此前仅 OneBot 通道启用，QQ / Telegram / Discord / LINE / Slack 的入站附件下载仍可被构造的媒体 URL 诱导访问 loopback、link-local 或 RFC1918 地址。属于安全漏洞面收窄的关键修复。
  - 链接：https://github.com/sipeed/picoclaw/pull/3322

- **[#3323] fix(wecom): use CreateSafeHTTPClient for media downloads**（OPEN）— 企业微信的 `storeRemoteMedia` 和 `downloadRemoteMediaToTemp` 使用普通 `http.Client`，重定向可落入内网。与前者同一系列。
  - 链接：https://github.com/sipeed/picoclaw/pull/3323

- **[#3324] fix(weixin): use CreateSafeHTTPClient for media downloads**（OPEN）— 微信公众号/CDN 媒体使用 iLink `api.HttpClient`，同样存在 SSRF 风险。修复方式与 #3323 一致，保留 iLink API 客户端（含 BaseURL/proxy 配置）不动。
  - 链接：https://github.com/sipeed/picoclaw/pull/3324

**中：Matrix 同步断连后无重连（Issue #3203，今日被 stale 关闭）**

- 该 Bug 的严重性在于：断连后 `sync` 循环永久终止，主进程仍存活，systemd 不会被触发，用户和运维均无法感知通道已死。目前无修复 PR 关联，Issue 状态为 CLOSED(stale)。建议维护者将其重新打开并明确优先级。
  - 链接：https://github.com/sipeed/picoclaw/issues/3203


## 6. 功能请求与路线图信号

**高概率进入下一版本：**

- **Telegram 原生表格渲染** — Issue [#3325] 请求用 Telegram Bot API 10.1 引入的原生视觉表格 UI 替代当前的 monospaced code block 降级方案。贡献者 As-tsaqib 在 Issue 提交当天即完成配套 PR [#3327]（feat(telegram): render tables with native rich messages），实现了 GFM 表格及受支持的 HTML `<table>` 检测（排除 inline/fenced code），并覆盖发送、回复/主题、编辑等路径。从 Issue 到 PR 的无缝衔接说明该功能社区需求明确、实现思路清晰，极有可能被纳入下一个版本。
  - Issue 链接：https://github.com/sipeed/picoclaw/issues/3325
  - PR 链接：https://github.com/sipeed/picoclaw/pull/3327

**需观望：**

- **IRC 长消息支持** — Issue [#3287]（4 条评论）提出 PicoClaw 应识别 IRCv3 中被客户端按 512 字节自动拆分的多段消息，将其重新组装为单一语义消息。当前实现无法理解拆分后的消息流。该提案涉及消息重组逻辑，需要明确"何时判定为同一条消息"的边界条件，讨论深度尚浅，短期内落地概率较低，但值得纳入路线图评估。
  - 链接：https://github.com/sipeed/picoclaw/issues/3287


## 7. 用户反馈摘要

- **对"静默失败"零容忍**：Issue #3203 的用户评论反映出对 Matrix 联动失效的显著不满，核心痛点不在"出错"，而在"出错了却毫无感知"。用户通过日志排查才发现通道早已断开，这种体验对自托管用户群体伤害尤甚。

- **Channels 功能覆盖需求持续增长**：待合并的 3 个 SSRF 修复横跨 7+ 个通道适配（微信、企业微信、QQ、Telegram、Discord、LINE、Slack），说明用户对多渠道接入的需求持续走高，且对此类通道的安全边界愈发敏感。

- **文档与实现并重的 PR 风格受欢迎**：PR #3222（deltachat 重构）明确"删除过时功能和回退逻辑"并引用官方 relay 列表替代硬编码，这种主动清理技术债的做法是社区喜闻乐见的方向。

- **积极响应反馈**：PR #3326（pnpm lockfile 修复）的提交通讯简洁明确（说明错误信息、影响面、修了什么），是对依赖链可靠性的直接回应，这种对 CI 基础设施的及时维护获得开发者用户的认可。


## 8. 待处理积压

- **[Issue #3203] Matrix sync loop 无重连逻辑**（8 条评论，📅 2026-07-02 创建，今日被 stale 关闭）— 该问题严重性中等偏高，但因"无崩溃、无日志、静默失效"的特性极易被忽略。现已因 stale 自动关闭，但仍然是一个未解决的真实 Bug。**建议维护者重新打开，标记为 `known-issue`，并在下个版本中加入基础的重连退避机制。**
  - 链接：https://github.com/sipeed/picoclaw/issues/3203

- **[PR #3222] refactor(deltachat): cleanup implementation, documentation -200LOC**（📅 2026-07-03 创建，已开放 38 天）— DeltaChat 通道的重构 PR 已处于待合并状态超过一个月。该 PR 除了 -200 行代码的体量缩减，还包含删除密码认证、改为仅支持 jsonrpc secrets、重命名 `invite_link` 为 `join_invite_link` 等破坏性变更。长期悬而未决会导致与主线 diff 越拉越大，合并成本持续上升。**建议维护者安排 code review 或明确状态。**
  - 链接：https://github.com/sipeed/picoclaw/pull/3222


## 项目健康度总评

| 维度 | 状态 | 说明 |
|------|------|------|
| 活跃度 | 🟢 活跃 | 24h 内 3 Issues + 6 PRs，有实质代码产出 |
| 响应性 | 🟢 良好 | 功能请求当日即有实现（#3325→#3327） |
| 安全性 | 🟡 加固中 | 3 个 SSRF 修复待合并；修复方向正确 |
| 积压风险 | 🟡 中等 | deltachat 重构 PR 悬置 38 天；Matrix Bug 被 stale 关闭 |
| 版本节奏 | ⚪ 无新版本 | 日常迭代期 |

**关注建议**：优先检视并推进 SSRF 系列 PR（#3322-#3324）的合并排期；重新评估 #3203 的关闭决策；为 #3222 的 deltachat 重构 PR 安排 review 时限，避免长期分叉。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期**: 2026-08-10  
**数据窗口**: 2026-08-09 至 2026-08-10  
**数据来源**: github.com/qwibitai/nanoclaw

---

## 1. 今日速览

NanoClaw 项目在过去 24 小时内保持了**较高的开发活跃度**，共产生 17 条更新（1 Issue + 16 PR）。核心信号集中在两个方面：**供应链安全与加固镜像推进**（gabi-simons 的 CVE 修复与镜像发布工作流，以及 stumpjumper 报告的 Python 包通道缺失问题），以及 **通道可用性修复**（Signal/Slack 附件转发路径修正）。值得关注的是，16 条 PR 中**全部处于待合并状态，无任何 PR 被合并或关闭**，这一现象反常，可能暗示今日是开发冲刺的中段，维护者尚未开始批量合并。Issues 侧仅 1 条新开，社区反馈量偏低，项目处于"内部开发高活跃、外部反馈平稳"的阶段。特别值得注意：两条 Signal 附件丢失的修复 PR（#2529、#3142）已分别悬置 83 天和 14 天，项目维护者需尽快处理该积压以解除通道可用性风险。


## 3. 项目进展

今日**无 PR 被合并或关闭**，16 条 PR 全部停留在待审查/待合并状态。尽管如此，从 PR 内容可判断项目当前正在推进以下方向——这些是即将落地的变更，而非已完成的里程碑：

**已就绪待合并的修复（代码完整，等待审查）：**
- [#3207](https://github.com/nanocoai/nanoclaw/pull/3207)（core-team）— 升级 pnpm/npm 以修复 tar 包 CVE（GHSA-23hp-3jrh-7fpw，critical 级）。grype 扫描在 agent 镜像中发现两处受影响版本（npm 10.9.8 与 pnpm 10.33.0 各自内置的 tar），即使刷新基础镜像也无法自動清除。该 PR 已包含修复内容，**建议优先合并**以解除供应链安全风险。
- [#3208](https://github.com/nanocoai/nanoclaw/pull/3208)（core-team）— 新增 Docker Hub 镜像发布工作流，含 CVE 门禁，为加固镜像的正式分发建立自动化通道。

**功能开发推进（未完成或待定稿）：**
- [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) 与 [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) — Dial 通道适配器（SMS + AI 语音通话），两条 PR 均为 Feature skill 类型，实现通道选取器集成与通道适配。已从 7 月 14 日持续至今。
- [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) — CLI 从 stdin 接受受限 JSON 输入，为命令调用提供更灵活的输入方式。
- [#3214](https://github.com/nanocoai/nanoclaw/pull/3214)、[#3213](https://github.com/nanocoai/nanoclaw/pull/3213)、[#3212](https://github.com/nanocoai/nanoclaw/pull/3212)、[#3186](https://github.com/nanocoai/nanoclaw/pull/3186) — 四个面向架构精简的重构 PR（模块生命周期统一、渲染器注册、迁移注册表、技能能力宿主接缝），表明项目正在有步骤地推进内部架构治理。

**整体判断：** 项目路线图正处于"功能开发集中产出、但仍未进入归并阶段"的状态。较长时间的待合并 PR（#2529 已 83 天、#3050/#3041 已 27 天）提示合并积压是当前主要开发流程瓶颈。


## 4. 社区热点

今日社区讨论热点尚未形成——唯一新开的 Issue（#3217）暂未产生评论。值得注意的长期讨论集中在两条尚未关闭的 PR 上：

- **[#2529](https://github.com/nanocoai/nanoclaw/pull/2529) fix(signal): deliver inbound attachments to the agent instead of dropping them**（创建于 5 月 18 日，已持续 84 天）— 该 PR 解决 Signal 适配器丢弃入站附件的问题，今日有文档配套 PR（#3210）提交，说明该修复的关键路径已确认但仍未落地。建议关注。

- **[#3142](https://github.com/nanocoai/nanoclaw/pull/3142) fix(signal): forward image/file attachments through the mounted inbox**（7 月 27 日创建）— 同属 Signal 附件路径问题，与 #2529 高度重叠，两者共同指向 **Signal 通道附件功能在当前版本中实际不可用** 的事实。该问题同时出现在文档 PR #3210 中（"tell the agent where received attachments land"），表明维护团队已达成一致认知，但两条 PR 的合并顺序与取舍尚需明确。


## 5. Bug 与稳定性

今日无新 Bug 被报告。但在排查积压 PR 时发现一个 **直接影响用户功能的 Bug 修复尚未推进**（涉及 #2529、#3142 两案）：

| 严重程度 | 问题描述 | 状态 | Fix PR |
|---------|---------|------|--------|
| **高** | Signal 适配器丢弃入站附件（图片/文件/PDF 无法被 agent 读取），原因是拼接了从未挂载进容器的路径 | 已确认，两条修复方案均待合并 | [#2529](https://github.com/nanocoai/nanoclaw/pull/2529)、[#3142](https://github.com/nanocoai/nanoclaw/pull/3142) |
| **中** | Slack 适配器无法将粘贴的表格内容传递给 agent | 已提交修复 | [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) fix(slack): surface pasted tables |
| **中** | agent 镜像内 tar 包存在 critical 级 CVE（GHSA-23hp-3jrh-7fpw），npm 与 pnpm 均有受影响版本 | 已提交修复 | [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) bump pnpm and npm |

此外，此前已知的 "DM 解析日志包含敏感信息" 问题已有修复 PR（[#3215](https://github.com/nanocoai/nanoclaw/pull/3215) fix(permissions): redact DM resolution logs），当日已提交。

**综合判断：** 当前 Bug 修复的状态是"修复均已提交、但合并队列阻塞"。供应链 CVE（#3207）有 core-team 背书且影响安全，建议优先合入。


## 6. 功能请求与路线图信号

今日来自社区的明确功能请求仅 1 项，来自 Issue #3217：

- **Python（pip）包安装通道支持**：当前 `install_packages` / `container_configs` 仅支持 `packages_apt` 和 `packages_npm` 两个安装源，无 pip 通道。作者 stumpjumper 指出这会导致依赖 Python 工具链的 agents 无法使用加固预构建镜像路径——也就是说，**无法在满足安全约束的前提下运行含有 Python 依赖的 agent**。相关文档 PR（#3216）同日提交，但代码层面的支持尚未有对应 PR。

**路线图信号判断：**

| 信号 | 来源 | 是否可能进入下一版本 |
|------|------|-------------------|
| pip 通道支持 | Issue #3217 + 文档 PR #3216（stumpjumper） | **有可能**——同一作者在同一天提交了问题与文档 PR，表明准备充分；但与 #3217 配套的实现 PR 尚未出现，短期可能仅先在文档中明确限制 |
| Dial 通道（SMS + AI 语音） | PR #3050、#3041（OmriBenShoham） | 高——两条功能 PR 已存在 27 天仍活跃，且类型为 Feature skill，是路线图中较明确的增量 |
| Docker Hub 镜像发布 + CVE 门禁 | PR #3208（gabi-simons） | 高——core-team 成员提交，配合 #3207 是加固镜像体系化的完整闭环 |


## 7. 用户反馈摘要

今日社区直接反馈数据有限（新 Issue 暂无评论），但从 Issue #3217 的核心诉求中可提取两条关键用户声音：

- **痛点：加固镜像的吸引力受限于包覆盖范围。** 用户 stumpjumper 的诉求代表了安全敏感型用户（企业场景）的真实使用门槛——在需要 Python 依赖的场景下，无法通过预构建的加固镜像路径部署，意味着这类用户被迫回退到自定义 Dockerfile 方案，而这恰恰与加固镜像的目标相冲突。
- **诉求：文档需准确描述能力边界。** 作者在同一天提交了文档 PR（#3216），说明用户的关注点已从**代码功能缺失**延伸到**文档明确性**层面，且内容精确指向 `install_packages` 的实际覆盖范围。这类"文档与实际能力对齐"的诉求，在安全合规场景的用户中具有普遍代表性。

长期存在的用户痛点仍围绕 **Signal 通道附件不可用** 这一问题——相关修复 PR 已存在数月，影响面虽未量化，但已引起至少两位独立贡献者分别提交修复方案（#2529、#3142），说明该问题已被实际用户多次触及。


## 8. 待处理积压

以下为长期未响应的关键事项，需维护者关注：

| 事项 | 类型 | 等待时长 | 优先级建议 |
|------|------|---------|-----------|
| [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) fix(signal): deliver inbound attachments to the agent | 核心功能修复 | **84 天** | ⚡ 高 — 与 #3142 存在功能重叠，建议明确取舍并尽快合入其中一条 |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) fix(signal): forward image/file attachments through the mounted inbox | 核心功能修复 | 14 天 | ⚡ 高 — 同样针对 Signal 附件丢失问题，需与 #2529 协调评估 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) feat(setup): add Dial to channel picker + wizard/skills | 功能开发 | 27 天 | 中 — 配合 #3041 共同构成 Dial 通道支持，若路线图时间紧可暂缓 |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) feat(channels): add Dial channel adapter (SMS + AI voice) | 功能开发 | 27 天 | 中 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) refactor: add host seams for skill-owned capabilities | 架构重构 | 6 天 | 中 — 不直接影响用户，可错峰合并 |
| [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) fix(permissions): redact DM resolution logs | 安全修复 | 1 天 | 中 — 涉及敏感信息泄露，建议按常规流程审查 |

**给维护者的重点提醒：** 两条 Signal 附件修复 PR（#2529 与 #3142）已形成功能重叠，长期并行容易造成社区贡献者困惑。建议尽快做出取舍决策（选择其一或要求合并提交），以消除积压、鼓励后续贡献者继续参与。


> **总结：** NanoClaw 当前处于"大量代码就绪但未合入"的开发窗口期，方向上兼顾了供应链安全（CVE 修复 + 镜像发布）、Bug 修复（Signal/Slack 附件）和架构治理（模块重构）。社区反馈维度信号较弱，唯一的用户声音指向 Python 包通道缺失这一功能空白。核心风险在于**合并积压持续积累**（最长 84 天），可能抑制外部贡献者的积极性。建议优先处理 #3207（CVE）+ #2529/#3142（Signal 附件）+ #3217 对应的代码支持。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-10

## 1. 今日速览

IronClaw 过去 24 小时保持高度活跃：22 条 Issue 更新（其中 15 条新开/活跃、7 条关闭），28 条 PR 更新（8 条已合并/关闭）。开发重心集中在 deferred tool discovery 的可插拔化与性能基线建设（#7405/#7409/#7410/#7411 系列 PR）、聊天 UI 的多个提交修复、以及运行投递/Routine 可靠性改进。无新版本发布，但多个高优先级 Bug 修复 PR 已进入待合并队列，项目整体处于快速迭代阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去 24 小时合并/关闭了多个重量级 PR，显著推动了系统稳定性与可扩展性：

### 🔧 已合并/关闭的 PR

| PR | 内容 | 里程碑意义 |
|----|------|-----------|
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | **Skill 安装基础设施修复**：一个 DB-backed tree 统一所有 skill mount，使 skill 自身的命令可运行（关闭 #7168） | 修复了 "skill 安装后即消失"的严重问题，属于 #6941 史诗的第 4 项，是技能系统可用性的关键突破 |
| [#7387](https://github.com/nearai/ironclaw/pull/7387) | 批量依赖升级（12 项，base64/toml/rstest 等） | 保持核心依赖链在安全/维护版本上 |
| [#7022](https://github.com/nearai/ironclaw/pull/7022) | GitHub Actions 升级（setup-node 4→7、docker/login-action） | CI 基础设施现代化 |

### 📌 值得关注的待合并 PR（合入后将推动的能力）

- **[#7411](https://github.com/nearai/ironclaw/pull/7411)：deferred-tool retrieval 可插拔化** — 将 tool_search 从具体实现改为 port/binding 架构，是 #7405 enhancement 的第一阶段生产化改造
- **[#7410](https://github.com/nearai/ironclaw/pull/7410)：返回带预算限制的完整签名** — 使 tool_search 返回完整 parameters schema（预算内），为减少模型额外 round-trip 铺路
- **[#7409](https://github.com/nearai/ironclaw/pull/7409)：100-1000 工具规模基线测试** — 建立大规模目录下的检索质量基线，支撑工具发现能力的横向扩展

整体判断：项目正围绕"大规模工具目录下的高效发现与认证"（#7405、#7166）与"前端 UI 稳定性修复"（#7403/#7404/#7341）双线推进，架构演进方向清晰。

---

## 4. 社区热点

### 最活跃讨论（按评论数）

**1. [#5522 — Reborn routine 无法读取 Slack DM（已关闭）](https://github.com/nearai/ironclaw/issues/5522)** — 4 条评论
- 虽然已关闭，但该 issue 暴露了 Slack 能力集缺失的深层问题：agent 不具备 Slack 读能力时陷入 capability_info 重试循环
- 配套问题：#5882（Slack 重连后认证状态损坏）仍在开放

**2. 多个 Bug Bash P2 问题获得 2 条评论** — 集中在 WebUI 渲染与状态一致性：
- [#7346](https://github.com/nearai/ironclaw/issues/7346)：Emoji 短代码在聊天界面明文显示
- [#7348](https://github.com/nearai/ironclaw/issues/7348)：Activity 工具调用与进度消息时间序错乱
- [#7345](https://github.com/nearai/ironclaw/issues/7345)：agent 报告 61 个自动化而 UI 仅显示 50 个

### 热点背后的核心诉求

最突出的用户痛点是 **UI 状态与真实系统状态不一致**（自动化数量、Emoji 渲染、时间线顺序）。这些 Bug 虽然单个严重程度不高（P2），但集中出现暗示 **WebUI v2 在真实数据流下存在渲染层缺陷**。好在社区提交节奏很快——对应的 fix PR（#7403/#7404/#7402）已由 ironloopai[bot] 在同日创建，体现出该仓库高效的 bug→fix 闭环。

---

## 5. Bug 与稳定性

### 🔴 高严重度

| Issue | 严重度 | 描述 | 修复状态 |
|--------|--------|------|----------|
| [#7400](https://github.com/nearai/ironclaw/issues/7400) | **高**（100% 触发率，影响 1.1.0-rc.1 和 1.1.0 稳定版） | `stream: true` + caller `tools[]` 组合调用 `/api/v1/responses` 会出现**中途失败**并遗留**永久不可删除的 "zombie" thread** | ⚠️ 无 fix PR，严重阻塞 Responses API 的 streaming + tools 组合场景 |
| [#7292](https://github.com/nearai/ironclaw/issues/7292)（已关闭） | P1 | 安装 CoinGecko 工具后选择 Demo 模式仍无法使用——runner heartbeat 错误 | ✅ 已关闭（修复或甄别为环境特定问题） |
| [#6479](https://github.com/nearai/ironclaw/issues/6479) | P2（安全风险） | Routine 可创建/修改其他 routine，存在**自复制自动化**风险，无防护机制防 routine inception | ⚠️ 长期开放（7/22 创建），无相关 PR |

### 🟡 中严重度（P2 Bug Bash，多数已有对应 fix PR）

| Issue | 描述 | 修复 PR |
|--------|------|---------|
| [#7346](https://github.com/nearai/ironclaw/issues/7346) | Emoji 短代码明文显示（:wave: → :wave:） | ✅ [#7404](https://github.com/nearai/ironclaw/pull/7404)（待合并） |
| [#7348](https://github.com/nearai/ironclaw/issues/7348) | Activity 块与进度消息时间序错乱 | ✅ [#7403](https://github.com/nearai/ironclaw/pull/7403)（待合并） |
| [#7345](https://github.com/nearai/ironclaw/issues/7345) | Agent 报告 61 个自动化 vs UI 显示 50 个 | ✅ [#7402](https://github.com/nearai/ironclaw/pull/7402)（待合并） |
| [#7349](https://github.com/nearai/ironclaw/issues/7349) | 刷新后运行历史/Activity 时间线部分消失 | ⚠️ 无直接 fix PR 关联 |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack 反复重连后认证流程永久损坏（需卸载重装） | ⚠️ 长期开放（7/9），无直接 fix |
| [#5878](https://github.com/nearai/ironclaw/issues/5878) | GitHub token 被撤销后产生误导性错误信息 | ⚠️ 无直接 fix |

### 🟢 低严重度

- [#5509](https://github.com/nearai/ironclaw/issues/5509)（已关闭）：新聊天创建延迟随历史累计增长（前端分批加载问题）
- [#5510](https://github.com/nearai/ironclaw/issues/5510)（已关闭）：无法删除旧 routine

### 稳定性趋势观察

值得注意的是：**多个 P2 在 24 小时内即被自动机器人 ironloopai[bot] 提交了修复 PR**（#7402/#7403/#7404），表明项目已经将 Bug Bash 发现的常见 UI 问题纳入自动化修复流水线。但 **#7400 的 zombie thread 问题**无任何修复 PR 关联，且同时影响 rc 和稳定版本，是需要优先响应的隐患。

---

## 6. 功能请求与路线图信号

### 正在进行中的功能演进（有 PR 支撑）

**① 大规模工具发现的性能优化（#7405 系列）** — 核心方向：减少模型不必要的 round-trip，提供 namespace-aware catalog previews
- 支撑 PR：#7409（100-1000 工具基线）、#7410（完整签名预算返回）、#7411（provider 可插拔化）
- 叠加 #7407：提出 `invoke_capability_batch` 真正并发执行 `BatchPolicy::Parallel` 批次，消除模型等待
- 路线图判断：这是 **v1.2.0 的核心功能项**（对应已提出的 epic #7166），方向清晰、实现已分步落地

**② 用 pinned `omp` 工具面替换第一方编码工具（#7392）**
- 意图是与 oh-my-pi@08819b2 的契约对齐，将 IronClaw 的编码工具面替换为外部固定实现
- 这是一项实验性（epic）改动，可能改变编码相关 tool 的使用体验

**③ Web Push 作为第一方通知渠道（#7398）**
- 将浏览器推送/PWA 作为与 Slack/Telegram 平级的通知路由（RFC 8030/8291/8292）
- 扩展 automations 触达能力，降低对第三方聊天渠道的依赖

**④ 泛化 progressive previews（#7396）**
- Slack + Telegram 通用渐进式预览契约，使工具执行过程可见而不至于用中间消息淹没最终结果
- 直接回应 #5551 的问题（中间进度消息被当作最终输出）

### 社区呼声较高的新需求

- **Routine 防护机制**（#6479）：用户期待系统对 self-replicating automation 有最低防线
- **简单任务的工具调用收敛**（#6046）：124 次工具调用来完成一个简单 email-to-sheet 任务，用户明确期待更高效的中继决策

---

## 7. 用户反馈摘要

### 满意点
- **技能安装修复获得"正确响应"**：PR #7171 解决了 "skill 安装后消失" 的用户致命痛点，评论区有正向反馈（从构建内容推断）
- **Bug → Fix 闭环速度快**：多个 Bug Bash 问题（#7346/#7348/#7345）在 24 小时内即被自动修复 PR 响应，给予用户修复效率的信心

### 痛点与不满

**① 工具调用效率低**
> #6046：「一个简单任务用了 124 次工具调用。agent 花大量精力解码 email body、分析无关内容（base64 解码、FOIA 上下文分析、价格邮件）…」

→ 用户期望 agent 在简单任务上有更好的 tool invocation 纪律；这也强化了 #7405（tool discovery 优化）的紧迫性。

**② 误导性错误信息**
> #5878：「GitHub token 被撤销后，系统报『the tool input could not be encoded』『AI model provider was temporarily unavailable』——完全不是真正原因。」

→ 用户对错误信息的诊断价值不满，期待认证失效时主动提示 re-auth。

**③ 中间消息污染最终输出**
> #5551：「Slack 频道收到的是『Now let me also check for the 'Show HN: Apfel' thread...』这样的中间进度消息，而不是最终摘要。」

→ 对应 PR #7396（progressive previews）正是回应此痛点。

**④ 自动化状态一致性**
> #7345：「Agent 说 61 个 automations，UI 只显示 50 个。是 agent 在幻觉还是 UI/backend 计数不一致？」

→ 用户对 agent 状态报告的真实性产生质疑，这正是 PR #7402 正在修复的。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重点 Issue（无修复 PR、每周仍在活跃更新）

| Issue | 创建日期 | 开放时长 | 关注原因 |
|--------|---------|---------|---------|
| [#7400](https://github.com/nearai/ironclaw/issues/7400) | 08-09 | <24h ⚠️ 但严重度最高 | **Zombie thread 不可删除** — 高严重度、100% 触发率，影响 1.1.0 正式版。需要尽快给出临时规避方案 |
| [#6479](https://github.com/nearai/ironclaw/issues/6479) | 07-22 | 19 天 | Routine 自复制风险 — 安全侧漏，无 protection 机制，期待在 v1.2.0 路线图中得到回应 |
| [#6046](https://github.com/nearai/ironclaw/issues/6046) | 07-13 | 28 天 | 工具调用效率 — 与 #7405 系列路线图相关，但 issue 本身无关联 PR |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | 07-09 | 32 天 | Slack 认证永久损坏 — 需卸载重装才可恢复，属高影响外部集成问题 |
| [#5878](https://github.com/nearai/ironclaw/issues/5878) | 07-09 | 32 天 | GitHub token 失效误导性错误 — 影响调试效率，期待 auth 错误分类改进 |

### ⚠️ 长期未合入的 PR

| PR | 创建日期 | 开放时长 | 备注 |
|----|---------|---------|------|
| [#7076](https://github.com/nearai/ironclaw/pull/7076)（neo-sky） | 08-03 | 7 天 | "Install the packages the catalog already publishes" — 已 rebase 到 main，等待 reviewer |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | 08-02 | 8 天 | tokio-tungstenite 0.29→0.30 依赖升级 |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | 08-05 | 5 天 | wasm 组依赖升级（wit-component/wit-parser） |

### 💡 维护者建议

依赖 PR 合入速度慢于创建速度。考虑到本次 24h 内有 20 条 PR 待合并（远超已合并的 8 条），建议增设 reviewer 轮值或自动化合并策略（在 CI 全绿 + 低风险 + 标记依赖的情况下），避免依赖债和社区新贡献者等待时间过长。

---

*本日报由 IronClaw GitHub 数据自动生成 | 统计窗口：2026-08-09 ~ 2026-08-10*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-10

## 今日速览

过去24小时项目活跃度整体偏低，无新版本发布、无PR合并或关闭，代码合并通道暂处于静默状态。Issues方面共3条活跃讨论，其中1条为新增（#2453），2条为历史遗留问题被再次关注。值得关注的是，今日讨论的核心集中围绕"模型切换与上下文窗口管理"这一主题，反映出用户对多模型协作场景下配置灵活性有较高诉求。项目核心功能仍在稳定运行，未发现新的崩溃类或严重回归问题。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日无合并或关闭的PR，代码推进处于停滞状态。不过从Issues中的讨论线索（特别是#2132中维护者参与的根因分析）可以推断，**跨模型子任务调用机制**的修复方案可能正处于内部开发或评审阶段，建议持续关注未来数日的PR动态。

---

## 社区热点

**#2453 切换自定义模型，被系统定义为不许可？**（[链接](https://github.com/netease-youdao/LobsterAI/issues/2453)）
- 昨日新开、当天即有回复，是今日讨论热度最高的话题。
- 用户发现当模型ID形如 `custom_1/openai/gpt-oss-20b:free` 时，系统会将 `openai` 误判为provider并判定为"不许可"。该问题在使用OpenRouter免费模型和NVIDIA模型时均会出现。
- **诉求分析**：核心矛盾在于系统对模型ID的解析逻辑过于简单——仅按 `provider/model` 格式切分，未考虑OpenRouter等网关类服务中转接第三方模型的场景。用户希望系统能识别"网关标识"与"实际模型提供方"两个维度。

---

## Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 中 | [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) | 自定义模型（经OpenRouter/NVIDIA网关）切换被拒，影响使用免费模型的用户；新开线程时沿用模型不受影响 | 无fix PR，讨论中 |
| 中 | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | DeepSeek模型运行中出现 `Context overflow: prompt too large`，与上下文窗口配置不兼容有关 | 无fix PR，stale标记 |
| 低 | [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | 跨模型子任务无法被主任务正确追踪——网关级函数调用未注册到 `subagents` 列表，导致任务状态同步失败 | 已有根因定位，修复方案讨论中 |

---

## 功能请求与路线图信号

**#1187 上下文窗口大小与输出Token设置**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1187)）

用户建议在设置模型API的选项中增加"上下文窗口大小"和"输出token数"两个可配置项。目前该问题触发于DeepSeek模型，本质上是**不同模型的上下文长度存在差异，系统默认值无法通用**。

**路线图判断**：该请求在技术上实现成本不高（仅增加两个参数配置），且能显著改善多模型兼容性，与#2453所反映的"多模型支持灵活性"诉求方向一致。**两项Issue可能共同推动下一版本在模型配置面板中增加高级参数选项**。

---

## 用户反馈摘要

**正面反馈**：
- 在#2132讨论中，用户对跨模型子任务协作的设想（同模型子任务完成通知机制可借鉴到跨模型场景）获得了维护者的认可，维护者已着手梳理网关级函数调用的追踪机制。

**负面反馈 / 痛点**：
- **多模型切换的"规则不透明"问题**（#2453）：用户表示"在一个线程里面切换模型尤其打扰"，且对OpenRouter/NVIDIA等网关服务使用不友好，影响了免费模型的可及性。
- **大上下文模型不可用**（#1187）：用户在DeepSeek上无法处理长会话，需要频繁 `/reset`，严重打断工作流。
- 被标记为 stale 的两条Issue（#1187、#2132）均超过两个月未获得实质推进，可能让用户感觉反馈未被重视。

---

## 待处理积压

以下为长期未响应/未解决的重要Issue，建议维护者优先关注：

1. **#1187** [OPEN] [stale] [上下文窗口设置](https://github.com/netease-youdao/LobsterAI/issues/1187) — 创建于2026-04-01，持续4个月，涉及核心可用性问题
2. **#2132** [OPEN] [stale] [跨模型子任务协作](https://github.com/netease-youdao/LobsterAI/issues/2132) — 创建于2026-06-09，已有根因分析，待修复方案落地

*注：两条stale Issue均在本周被重新激活讨论（更新于08-09），建议维护者借此机会推进关闭或明确排期。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**2026-08-10** | 数据来源: GitHub (moltis-org/moltis)

---

## 1. 今日速览

过去 24 小时内 Moltis 项目活跃度处于**中等偏低**水平：共产生 2 条新 Issue、1 条待合并 PR，无新版本发布。两条新增 Issue 均属 Bug 报告——分别涉及**心跳设置 UI 字段丢失**和 **Apple Container 1.x 沙箱状态误判**，表明用户在实际使用场景中仍会遇到稳定性与状态一致性问题。值得关注的是，一条围绕 **vault 恢复短语哈希规范化**的修复 PR 正在等待合并，若合并将解决一个长期存在的用户使用摩擦点。整体来看，项目处于**良性维护节奏**中——有明确的修复进展，但无重大功能推进或社区爆发性讨论。🚀 项目健康度：**稳定，略偏保守**。

---

## 2. 版本发布

**今日无新版本发布。** 下次版本更新预计将包含 #1186 PR 中涉及的 vault 恢复短语兼容性修复（详见下文）。

---

## 3. 项目进展

**待合并 PR（1 条，无已合并项）：**

| PR | 标题 | 类型 | 影响 |
|----|------|------|------|
| [#1186](https://github.com/moltis-org/moltis/pull/1186) | `fix(vault): normalize recovery phrase before hashing` | Bug 修复 | 修复 vault 恢复短语在**哈希存储**与 **KEK 派生**之间处理不一致的问题 |

**分析：** 该 PR 修复了一个逻辑不一致：`derive_recovery_kek` 在派生密钥前会对恢复短语进行规范化（去除破折号、转大写），因此用户输入的短语无论是小写还是带破折号都能成功解锁；但**存储的哈希**却是基于原始未规范化短语计算的，这就导致同一短语在解锁与验证两个环节行为不一致。该 PR 仅在 `pxmpsdev` 单个 commit 内完成，改动范围小、风险可控，是典型的**用户体验一致性修复**——一旦合入，将直接改善用户在恢复钱包时的成功率，消除了一个隐蔽的"能用但验证失败"陷阱。

---

## 4. 社区热点

今日无高热度讨论。两条 Issue 均为 0 评论、0 点赞，未形成社区讨论。

**唯一值得关注的信号：** PR #1186（见上文）为当日内唯一开放 PR，虽无评论，但作为 fix 类型 PR 已显示维护者对 vault 相关问题的响应意愿。

---

## 5. Bug 与稳定性

**今日共报告 2 个新 Bug，严重程度从低到高排列如下：**

### 🟡 中等 — Apple Container 1.x 沙箱状态误判 (Issue [#1185](https://github.com/moltis-org/moltis/issues/1185))
> 作者: `mikz` | 创建于 2026-08-08，最后更新 2026-08-09

**现象：** Apple Container 1.x 沙箱实际已成功启动，但 Moltis 错误地将其判定为"未运行"状态，导致用户无法正常使用基于该沙箱的应用。

**影响评估：** 这是**状态机误判**类问题——非崩溃性故障，但会直接阻断用户的正常工作流程，属于可靠性层面的隐性缺陷。**目前无关联 fix PR。**

### 🟢 低 — 心跳设置 UI 静默重置未显示字段 (Issue [#1187](https://github.com/moltis-org/moltis/issues/1187))
> 作者: `IlyaBizyaev` | 创建于 2026-08-09

**现象：** 在心跳设置界面中，表单未覆盖的配置字段会在保存/提交时被**静默重置**，用户无任何提示。

**影响评估：** 这是一个**UI 数据一致性**问题——用户可能在不知情的情况下丢失自定义配置。这类 Bug 虽不致命，但会侵蚀用户信任感。**目前无关联 fix PR。**

---

## 6. 功能请求与路线图信号

今日**无明确的新功能请求**。但以下信号值得关注：

- PR #1186（恢复短语规范化）实际上是对**用户多格式输入兼容性**的隐性需求回应（尽管是以 Bug 修复形式出现），暗示社区用户在使用 vault 时可能频繁遇到"输入正确但因格式问题而失败"的场景。
- Issue #1185（Apple 沙箱误判）指向用户对**容器/沙箱状态监测可靠性**的需求，未来版本可能需要在状态同步机制上增强。

---

## 7. 用户反馈摘要

今日 Issue 虽无直接评论，但从 Bug 描述可提炼以下用户痛点：

1. **"怎么保存了却没生效?"** — Issue #1187 反映用户对 UI 提交机制透明度的不满，即配置字段被静默重置却无任何警告或确认。
2. **"明明启动了却说没启动"** — Issue #1185 反映用户在容器生命周期管理上的挫败感，状态误判直接打乱用户工作流。
3. **"恢复短语格式太麻烦"** — PR #1186 的修复方向暗示用户曾因大小写/破折号问题导致 vault 恢复失败的痛点（该 PR 正是解决此问题的关键补丁）。

整体来看，**用户对配置一致性和状态准确性的敏感度较高**，这是当前版本中需要重点关注的体验短板。

---

## 8. 待处理积压

**今日无长期未响应的 Issue 或 PR。** 提示维护者：

- 今日两个新 Bug（#1185、#1187）均已超过 24 小时未获回复，若 48 小时内无维护者响应，建议在 Issue 中标记 triage 状态，以避免社区形成"问题石沉大海"的负面感知。
- PR #1186 已开放超 24 小时未获 review，建议尽快安排代码评审——该修复涉及敏感的安全相关路径（vault），及时合并将消除用户风险并释放维护者精力。

---

*日报由 AI 自动生成，数据截至 2026-08-10 00:00 UTC。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-10

> 数据来源：github.com/agentscope-ai/CoPaw（含 QwenPaw 仓库数据）

---

## 1. 今日速览

CoPaw 项目（QwenPaw）过去 24 小时保持高度活跃：共产生 18 条 Issue 更新（11 条活跃/新开，7 条关闭）和 34 条 PR 更新（33 条待合并，1 条已关闭），但无新版本发布。今日 PR 队列中涌现大量高质量社区贡献，覆盖会话分叉、SSE 流式修复、Gemini provider 兼容性等关键领域，显示社区参与度显著上升。值得关注的是，**首次贡献者（first-time-contributor）占比超过 60%**，项目正处在社区扩张的良性阶段。同时，多起重复提交的同一 Bug（#6848-#6852）以及关闭的重复 Issue 表明前端渲染问题值得维护者重点关注，该问题已有相关修复 PR 在途。

---

## 2. 版本发布

**无新版本发布。** 当前最新版本为 v2.1.0b2（测试版），社区反馈集中在此版本上。

---

## 3. 项目进展

今日有 1 个 PR 被合并/关闭，另有 33 个 PR 正在等待审查。以下为重要进展：

### 已关闭
- **PR #6846** — [feat(providers): catalog DeepSeek V4 context windows (1M)](https://github.com/agentscope-ai/QwenPaw/pull/6846)（首次贡献者）
  - 为 DeepSeek V4 系列模型（deepseek-v4-flash / deepseek-v4-pro）补充 100 万 token 上下文窗口的静态目录配置。
  - **修复效果**：此前这些模型被错误解析为 131,072 token 默认值，导致 Console 显示 131.1K、在 128K 处即触发上下文压缩，与实际 1M 窗口严重不符。

### 待审查的重要 PR（按影响力排序）
| PR | 内容 | 状态 |
|---|---|---|
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | **会话分叉功能**：右键会话即可将完整对话上下文快照到新会话，实现检查点式分叉 | 🔍 Under Review |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | **ReMe 记忆搜索 Reranker 支持**（后端）：过采样+重排序+截断，显著提升记忆检索质量 | 🔍 Under Review |
| [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) | **纯 ASGI 中间件流式 SSE**：修复 Console 无法增量显示模型输出/工具调用/思考过程的问题 | 待审查 |
| [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) | **保留助手回复完成时间**：修复会话历史重载后 `completed_at` 丢失的问题 | 待审查 |
| [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) | **剥离 Gemini 不支持的 Schema 元数据**：移除 `$schema` 字段修复 Google API 调用失败 | 待审查 |
| [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) | **Console 展示内置工具文档与参数**：工作站内置工具页从一行描述升级为完整文档抽屉 | 待审查 |

> **核心进展**：项目正在从「功能可用」迈向「体验完善」——会话分叉、流式渲染、记忆搜索增强等 PR 直指用户核心痛点，且均来自社区贡献。

---

## 4. 社区热点

### 🔥 最高热度 Issue

**#2291 — [Help Wanted: Open Tasks — Come Contribute!](https://github.com/agentscope-ai/QwenPaw/issues/2291)**
- 评论数：**66** | 状态：已关闭（作为任务追踪总入口）
- 这是 CoPaw 的社区贡献任务清单（P0 至 P2 优先级排序），吸引了大量首次贡献者认领任务。

### 📌 讨论热点

**Issue #6281 — [希望 Web 控制台适配移动端](https://github.com/agentscope-ai/QwenPaw/issues/6281)**（5 条评论）
- 用户 `ook826092-cloud` 提出移动端适配需求，评论区持续有讨论，说明移动端使用是真实场景需求。

**Issue #6826 — [对话中助手消息结束时间显示异常](https://github.com/agentscope-ai/QwenPaw/issues/6826)**（4 条评论）
- 用户报告助手实际思考耗时 2 分钟但页面显示仅几秒，时间显示与真实不符。该问题已有对应修复 PR #6845。

**Issue #5584 — [无法连接自定义的 ascend-vllm 模型](https://github.com/agentscope-ai/QwenPaw/issues/5584)**（4 条评论，已关闭）
- 用户反馈 v1.1.7 后可连接但新版本全部失败，涉及 OpenAI SDK 底层兼容性问题。该问题今日被关闭，但未在 PR 中找到明确对应修复。

### 👥 社区协作趋势

多条 Issue（#6850、#6851、#6848、#6849）为同一用户 `lcq225` 对同一 Bug（长文本工具输出渲染成不可读块）的重复提交，侧面反映出用户对该问题的强烈关注和修复迫切性。

---

## 5. Bug 与稳定性

### 🔴 高严重度

**1. 长文本工具输出渲染崩溃（前端口碑问题）**
- Issue：[#6848](https://github.com/agentscope-ai/QwenPaw/issues/6848)、[#6849](https://github.com/agentscope-ai/QwenPaw/issues/6849)、[#6850](https://github.com/agentscope-ai/QwenPaw/issues/6850)、[#6851](https://github.com/agentscope-ai/QwenPaw/issues/6851)、[#6852](https://github.com/agentscope-ai/QwenPaw/issues/6852)（同用户 4 次提交+1 个活跃）
- **现象**：v2.1.0b2 中，工具调用返回大量多行文本、agent 直接将其包含在最终响应中时，前端渲染器将其折叠成不可读的单块文本。
- **影响**：Windows 11 + Console 渠道 + sensenova-6.7-flash-lite 模型环境，严重损害可用性。
- **修复状态**：⚠️ 尚无明确对应 fix PR。

**2. Google Gemini API 调用失败（Model 'unknown' execution failed）**
- Issue：[#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812)
- **根因**：Gemini provider 发送的工具 Schema 中包含 `$schema` 字段，Google SDK 将其视为额外字段并拒绝。已有 AI 诊断并建议修复方案。
- **修复状态**：✅ 已有对应 PR [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844)（待合并）。

### 🟡 中严重度

**3. MCP 工具调用字符串参数被错误转换为数字格式**
- Issue：[#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839)
- **现象**：v2.0.1 中，本应传字符串的参数（如证券代码"000001"）被以数字格式传递，导致 API 调用失败。
- **修复状态**：⚠️ 无对应 PR。

**4. 对话记录异常中断丢失（断点保存缺失）**
- Issue：[#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)（已关闭）
- **内容**：Agent 执行 `reboot` 命令导致宿主机重启后，对话记录完全消失。用户要求建立断点保存机制。
- **修复状态**：⚠️ 已关闭但未见修复说明，需确认。

**5. 助手消息结束时间显示异常**
- Issue：[#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)
- **修复状态**：✅ 已有对应 PR [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845)（待合并）。

**6. 杀软误杀（QwenPaw vs WorkBuddy）**
- Issue：[#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)
- **现象**：QwenPaw 执行任务时常被杀软拦截甚至强制关停进程；同任务 WorkBuddy 无此问题。可能涉及代码签名、行为特征等。
- **修复状态**：⚠️ 尚未定位。

### 🟢 低严重度

- **#6853** — [prompts.py 文档与实现不符](https://github.com/agentscope-ai/QwenPaw/issues/6853)：文档声称 dream 流程自动同步 digest 到 MEMORY.md，但实际从未实现。

---

## 6. 功能请求与路线图信号

### 可能进入下一版本的功能

**1. 审批附带描述说明**
- Issue：[#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832)
- 用户建议 AI 在提交权限审批时附带一句简短用途描述。**已有对应 PR**：[#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854)（add localized approval purpose descriptions），已进入审查流程。

**2. 会话分叉 / 快照**
- 对应 PR：[#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704)（ready-for-human-review）
- 该功能允许用户将当前会话完整上下文快照到新会话，实现检查点式分支探索，已完成评审待合并。

**3. Console 内置工具文档展示**
- 对应 PR：[#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325)
- 将内置工具的完整技术文档（MCP 官方文档 + 运行时 docstring/schema）集成到 Console 界面。

**4. ReMe memory 搜索 Reranker**
- 对应 PR：[#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)（Under Review）
- 记忆搜索增加重排序支持，显著提升检索质量。

### 需求信号（无对应实现）

- **Web 控制台移动端适配**（#6281，5 条评论）
- **Auto-Dream 容错与重试机制**（#6841）：单条 schema 校验失败不应导致整个任务标记为 error
- **ReMe4 完整路线图**（#6840）：用户关注 Auto-Link、三模态搜索、四分类摘要权重的落地时间表
- **隐藏 Agent 功能**（PR #6842 已提出，待审查）

---

## 7. 用户反馈摘要

### 😊 满意点
- 社区任务清单（#2291）机制获得了广泛参与，66 条评论显示贡献者认可这种开放协作模式。
- DeepSeek V4 上下文窗口修正（PR #6846）解决了用户配置困惑，社区对该类细节修复反应积极。

### 😞 不满意点

**最集中的痛点：前端渲染体验**

> *"When a tool call returns a large amount of raw text output and the agent includes it directly in the final response text…"* — 同一位用户（`lcq225`）对同一 Bug 提交了 4 次 Issue，说明该问题已严重影响其日常使用。

**其它真实痛点：**

| 来源 | 用户声音 | 深层需求 |
|---|---|---|
| #5584 | "1.1.7 的版本还可以连接，后来的版本均无法连接…qwenpaw 对话时总提示连接模型错误" | 版本升级带来兼容性回退，用户希望保证向后兼容 |
| #6847 | "Qwenpaw 在执行任务的时候，经常会被杀软拦截，甚至强制关停 Qwenpaw 进程" | 安全信任问题——用户不确定 QwenPaw 到底在执行什么操作 |
| #5579 | "Agent 执行了重启宿主机的命令…该条对话记录完全消失" | 需要断点保存机制，对话不应因异常中断而丢失 |
| #6826 | "助手实际思考耗时 2min，但是页面显示用户发送消息，到助手完成对话的时间仅几秒" | 时间线展示需要反映真实执行情况 |
| #6832 | "用户查看这些权限非常不直观，需要查看申请的 PowerShell 代码才能明白" | 审批需要可读性，降低用户审查成本 |

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注（长时间未响应/未修复）

**1. Web 控制台移动端适配**
- Issue：[#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)
- 创建于 2026-07-20，已过去 3 周，5 条评论，暂无明确计划回应。

**2. 对话记录断点保存机制**
- Issue：[#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)
- 创建于 2026-06-27，已被关闭，但用户核心诉求（断点保存）未见对应 PR 或 release 说明，建议确认实现状态。

**3. ascend-vllm 模型连接兼容性**
- Issue：[#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584)
- 创建于 2026-06-27，今日关闭，但未找到对应修复 PR，建议补充关闭说明。

**4. 待合并 PR 积压 — "Under Review" 超过两周的 PR：**

| PR | 内容 | 创建时间 | 等待天数 |
|---|---|---|---|
| [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) | CIDR 支持 no-auth host 白名单 | 07-19 | 22 天 |
| [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) | 可配置主题/皮肤模块（Task 1 草稿） | 07-21 | 20 天 |
| [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) | Console 内置工具文档展示 | 07-22 | 19 天 |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | ReMe 记忆搜索 Reranker | 07-23 | 18 天 |

---

## 📊 项目健康度综合评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **社区活跃度** | ⭐⭐⭐⭐⭐ | 34 条 PR、18 条 Issue、超 60% 首次贡献者 |
| **Issue 响应速度** | ⭐⭐⭐⭐ | 当日新 Issue 大部分在一天内获得响应 |
| **PR 审查效率** | ⭐⭐⭐ | 部分 PR 等待超过 2 周仍处于 Under Review |
| **Bug 修复速度** | ⭐⭐⭐⭐ | Gemini/MCP/时间显示等问题均有快速对应 PR |
| **版本发布节奏** | ⭐⭐⭐ | 2.1.0b2 已发布一段时间，正式版尚未推出 |

**总体判断**：CoPaw 正处在社区生态加速成长期。大量高质量的首次贡献者涌入并直击用户痛点，PR 队列的质量和针对性显著提升。维护团队当前的核心瓶颈在于 **PR 审查速度**——33 条待合并 PR 需要加速处理，尤其是已标注 "Under Review" / "ready-for-human-review" 的高价值 PR（如 #6704 会话分叉、#6398 Reranker）。建议优先审查以下 PR 以保持社区贡献热情：

1. [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) — 会话分叉（功能价值高）
2. [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) — Gemini 修复（Bug 修复快）
3. [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) — SSE 流式（体验提升大）

---

*本日报由 AI 分析师根据 CoPaw GitHub 仓库 2026-08-10 数据自动生成，供项目维护者与社区参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-10

## 1. 今日速览

ZeroClaw 今日保持中高活跃度，24 小时内 **50 条 Issue 更新（38 活跃/12 关闭）**与 **50 条 PR 更新（49 待合并/1 合并关闭）**，显示社区讨论与贡献持续密集。当前积压大量 `needs-maintainer-review` 标签的 RFC（如 #6808、#7100、#9397）与 `needs-author-action` 的 PR（多个 memory 栈 PR），维护者审批带宽或成瓶颈。安全类议题热度不减：**两个 P0 级安全漏洞**（#9565 webhook 未 fail-closed、#9284 配置写入竞争）仍在修复中。值得注意的是，今日 **零新版本发布**，但 CI 管线存在 rustc 版本低于 MSRV 的构建问题（#9690 已关闭），需关注后续发版节奏。

---

## 2. 版本发布

**无新版本发布。** 最近一次发布仍为 v0.8.3（历史版本）。

---

## 3. 项目进展

今日 **无 PR 被合并**，唯一关闭的 PR 为 #9690（CI 构建修复），已按关闭处理。尽管无代码合入，项目在以下方向有持续推进：

- **Memory 栈（Hindsight）**：涉及 4 个大型 PR（#9064/#9065/#9066/#9068）仍在积极迭代，作者 `logical-and` 持续处理审查反馈。该系列将引入共享/系统内存层、召回/注入调优、合并去重修复等，是当前最长线的功能开发。
- **安全加固 PR 稳步更新**：#9866 对 verifiable-intent 边界进行加固（停止序列化 JWK 私钥标量、防 u32 回绕）、#9607 将 coding CLI 工具路由至沙箱化 runtime、#9536 修复 ACP 会话默认工作目录，均处于可审查状态。
- **Provider 多模型支持**：#9809 新增 `[providers.models.<family>.<alias>.models.<model_alias>]` 子表，一个 provider profile 可托管多模型（单一凭证 + 端点），配套 #7100 的 per-model 上下文窗口配置 RFC，将提升多模型路由灵活性。
- **文档与配置修复**：#9778 统一 FND 系列 RFC 修订历史；#9753 修复 risk-profile `allowed_tools` 无法区分"未设置"与"显式空列表"的问题——此前空列表会被错误视为"无限制"。

> 结论：项目当前处于**功能开发密集提交、合并审查偏慢**的阶段。多个功能栈已在 PR 中成型但等待合并。

---

## 4. 社区热点

| 排名 | 议题/PR | 评论数 | 核心诉求 |
|-------|--------|--------|----------|
| 1 | [#6808 RFC: Work Lanes, Board Automation, Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 22 | 治理层优化：让工作路由更自动化，减少维护者手工标签负担。Rev. 24 显示长期迭代，社区参与度高 |
| 2 | [#7100 RFC: Per-model capability & context-window config](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 12 | 解决 provider 默认值对 vision/上下文窗口误报问题，配套 #9809 实现 |
| 3 | [#9397 RFC: 空 allowed_groups 应视为 permit-none](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | 11 | 安全默认值讨论：空列表不应等于"允许所有群组"，当前默认可导致越权 |
| 4 | [#8692 Tracker: Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 11 | 社区自发建立维护者决策队列，反映**审批积压已影响协作效率** |
| 5 | [#8054 系统提示工具可用性应与各入口点匹配](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | 10 | 跨渠道一致性问题：推理模型被告知"无工具可用"但实际请求含工具 |

**趋势分析**：社区讨论热度集中在 **（a）治理流程优化**（#6808、#8692、#9496）与 **（b）安全默认值收紧**（#9397、#9825、#6971）。前者表明项目规模扩大后流程痛点显现，后者表明安全审查文化深入人心。

---

## 5. Bug 与稳定性

### P0 — 严重

| 议题 | 状态 | 说明 | 修复 PR |
|------|------|------|---------|
| [#9565 网关 webhook 未 fail-closed](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | in-progress | WhatsApp Cloud/Linq/WATI 三个 webhook 处理器**未认证调用者**即分派消息，S0 级数据泄露风险 | 无 |
| [#9284 配置回写可覆盖并发写入](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | accepted | `flush_config` 三步流程存在竞态：先读锁克隆→await 保存→再写回，期间并发修改可能丢失 | 无 |

### P1 — 高

| 议题 | 状态 | 说明 | 修复 PR |
|------|------|------|---------|
| [#8642 MCP 工具模式克隆致 RSS 无限增长](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | accepted | agent 循环中工具 schema 克隆驱动内存泄漏，已从 #5542 拆分 | 无 |
| [#9085 pgvector 启动时嵌套 panic](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | accepted | PostgresMemory 构造时 Tokio runtime context panic | 无 |
| [#9779 sops_dir 文档默认值未生效](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | accepted | 依赖默认配置的 SOP 引擎**静默不加载** | 无 |
| [#9565 相关：Discord 输入指示器卡死](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | accepted | reload 后永久显示"typing…" | 无 |

### 已关闭（修复或重复）
- [#9860 Web UI 在文件系统事件后冻结](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) — 标记 duplicate（2 评论后关闭）
- [#9834 zeroclaw-runtime 测试间歇性失败](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) — 已关闭

**稳定性评估**：仍有 **2 个 P0 安全项未修复**（#9565 认证缺失 + #9284 写入竞态），且 #9565 自 7 月 30 日报告至今已 11 天仍 in-progress，建议优先分配维护者。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 可能纳入版本 |
|------|------|--------------|
| **Per-model 能力/上下文窗口配置** | [#7100 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) + [#9809 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 0.8.4/0.9.0（高风险，PR 巨大） |
| **多模型 per-provider-profile** | [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 同上，需先完成 #7100 评审 |
| **发布签名机制统一** | [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — 3 套并存签名机制 → 1 套，53 个资产 → 20 个 | 短期，纯 CI 收益 |
| **热更新安全策略/频道配置** | [#7897 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) | 0.9.x（依赖运行时架构） |
| **Home Assistant 原生 REST 工具** | [#8994 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8994) | 待作者响应（stale-candidate） |
| **发布安全的区块链标识符例外** | [#9825 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) | 与 #9486 配合，短期可落地 |

**判断**：0.8.4（若有）大概率聚焦 **安全修复**（#9565、#9284）与 **CI 清理**（#9690、#9101）；**多模型配置**（#7100+#9809）体量大（size:XL）更可能进入 0.9.0。

---

## 7. 用户反馈摘要

- **真实痛点：高熵检测器误杀合法输出**。多用户报告 Solana 钱包地址（#9486）和支付请求 URL（#9825）被强制替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，导致 **Telegram 频道中 agent 无法提供钱包地址、发票链接不可投递**。用户 `koshak01` 指出即使用户显式设置 `high_entropy_tokens=false` 仍被拦截——**配置无法覆盖**是核心不满。社区提出"定义公开区块链标识符发布安全例外"的 RFC（#9825）作为建设性方案。
- **持续困扰：进程管理与输入机制**。MCP 僵尸进程累积（#8731）、`browser_open` 无显示环境时挂起整个 turn（#8560，已关闭修复）、Discord/Telegram 输入指示器异常（#9198/#9656）——多用户报告**运行时鲁棒性问题**，尽管多数已修复，但反映出 edge case 处理需加强。
- **正面反馈**：无明确表扬，但#8054（系统提示工具可用性）的快速跟进修复（#8053）说明**用户提交的 bug 能得到有效响应**。
- **社区自我组织**：#8692 维护者决策队列 tracker 由社区发起并持续维护（11 评论），体现**用户对项目治理的参与意愿**，同时也暗示维护者响应存在滞后。

---

## 8. 待处理积压

### 需维护者关注（审批/决策）

| 项目 | 等待时长 | 标签 | 说明 |
|------|---------|------|------|
| [#6808 治理 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | ~82 天 | needs-maintainer-review | 社区持续更新 Revision 24，**Ratification 被推迟** |
| [#7100 per-model 配置 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | ~69 天 | needs-maintainer-review | 阻塞 #9809 巨型 PR |
| [#6971 安全态势统一 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | ~75 天 | needs-maintainer-review | 安全多面治理框架，涉及面广 |
| [#9496 RFC 流程简化](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) | ~13 天 | needs-maintainer-review | 自指：**RFC 流程本身需要加速** |

### 需作者响应（needs-author-action）

| PR | 创建日期 | 说明 |
|----|---------|------|
| [#9064/#9065/#9066/#9068 Hindsight 内存栈 7 分之 2-7](https://github.com/zeroclaw-labs/zeroclaw/pull/9064) | 2026-07-14 | **待作者响应超 27 天**，整个内存功能栈被阻塞 |
| [#9194 KeySource 提取](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) | 2026-07-20 | 密钥管理抽象，安全相关 |
| [#8826 image_gen SSRF 防护](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) | 2026-07-08 | **33 天未响应**，安全修复停滞 |
| [#9314 Telegram 长轮询 offset 修复](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) | 2026-07-23 | P1 消息丢失风险 |

### 特别提醒

- [#9565（P0 webhook 认证缺失）](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) 已 11 天 in-progress 无修复 PR，**建议维护者介入**。
- 内存栈 PR 系列（#9064-#9068）待作者响应超 27 天，若作者失联，应考虑找其他贡献者接手或关闭。

---

*日报生成时间：2026-08-10 | 数据来源：ZeroClaw GitHub 仓库*
*分析基于 24 小时内更新数据，所有链接可直接访问对应 GitHub 条目。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*