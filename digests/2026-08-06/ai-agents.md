# OpenClaw 生态日报 2026-08-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-06 02:41 UTC

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

# OpenClaw 项目动态日报 — 2026-08-06

## 1. 今日速览

OpenClaw 项目今日活跃度极高，24小时内 Issues 和 PR 更新各达500条，显示出庞大的社区规模和快速迭代节奏。**核心关注点集中在会话状态管理（session-state）和消息投递可靠性（message-delivery）**，这两类问题占据了高优先级 Issue 和 PR 的大半壁江山。值得注意的是，多个 P0 级问题（如 Agent DB 迁移失败 #119263、严重 bug #119090）已被迅速关闭，表明维护团队响应及时。然而，大量 Issue 被标记为 `needs-maintainer-review` 和 `needs-product-decision`，暗示部分问题的修复方向仍需产品层面的决策，积压风险不容忽视。今日无新版本发布，代码合并/关闭的 PR 数量为63条，处于正常水平。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日虽无版本发布，但通过关闭的 PR 和 Issue 可以看出项目在以下方向持续推进：

- **消息投递可靠性**：PR #119737（Slack 线程回执确认）和 PR #118359（auto-reply 取消所有权回收）针对消息丢失和重复投递问题进行修复，是社区痛点的高优先响应。
- **安全性加固**：PR #117304 对 voice-call 供应商错误信息中的凭据进行脱敏，防止 API 密钥泄露；PR #116260 扩展了 Codex 监督工具的结果脱敏策略，覆盖更多令牌类型。这两项 PR 均面向安全边界。
- **会话稳定性**：PR #118806 禁止叶子子代理（leaf subagents）调用 `sessions_yield`，修复了已知问题 #118776，有助于防止会话控制权混乱。
- **可观测性与运维**：PR #119816 为 `openclaw doctor` 和 `status` 命令增加了 OTel/Prometheus exporter 健康报告，PR #119777 则让健康检查报告实际解析的 SQLite 会话存储路径，均有利于运维排障。
- **CLI/更新机制健壮性**：PR #119516 修复了 CLI 更新失败后托管网关无法恢复的问题（#119515）。

整体来看，项目正在从多个维度修补稳定性和安全性漏洞，并改善运维体验。但这批 PR 多数仍为打开状态，合并后的实际效果有待观察。

## 4. 社区热点

今日讨论热度最高的 Issue 呈现出几个鲜明的诉求集群：

- **实时语音会话资源失控（#116201，58条评论）**：问题直指实时语音功能在慢速或突发 provider 行为下，会话状态（consult、provider frames、预生成音频）可能无界增长。这不仅是资源浪费，更可能引发内存问题。**诉求核心是希望为实时语音会话建立硬性资源所有权边界。**

- **记忆信任分级（#7707，27条评论）**：该功能请求提出根据信息来源（用户命令 vs 网页抓取 vs 第三方 skill）对 Agent 记忆进行信任标记，以防止提示注入和记忆投毒。这反映了社区对 AI Agent 安全性的深层担忧，是长期悬而未决的热点。

- **子代理完成结果静默丢失（#44925，25条评论）**：该 bug 描述了多种子代理任务结果静默丢失的场景（无重试、无通知、无自动重启），对依赖复杂任务编排的用户影响极大。评论数高表明该问题具有广泛代表性。

- **网关主线程启动即被占满（#118846，19条评论，已关闭）**：一个高影响力的性能问题，已通过关闭（状态 CLOSED）表明可能已找到修复方案或将不再追踪，值得关注其后续。

这些热点揭示了社区当前最关心的两件事：**Agent 的可靠性（结果不丢失、状态不失控）和安全性（记忆与凭据防泄露）**。

## 5. Bug 与稳定性

按严重程度排列今日值得关注的 Bug 与稳定性问题：

| 严重级别 | Issue | 标题 | 状态 | 修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14->v15 迁移失败（`no such column: entry_valid`），网关拒绝启动 | OPEN，有 [PR #119268](https://github.com/openclaw/openclaw/pull/119268) 关联？(实际关联待确认) | 未明确 |
| **P0** | [#119090](https://github.com/openclaw/openclaw/issues/119090) | 管理媒体清理在会话存储不可读时“失败开放”，永久删除会话生成媒体 | CLOSED | 未知，已关闭 |
| **P1** | [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 可保留无界 provider 和 consult 状态 | OPEN | 未明确 |
| **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成结果静默丢失，无重试/通知/重启 | OPEN | 未明确 |
| **P1** | [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 上 Agent 重复相同回复 2-10 次（5.20 更新后回归） | OPEN | 未明确 |
| **P1** | [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite 记录清理阻塞网关事件循环 | OPEN | 未明确 |
| **P1** | [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex app-server 发出 turn/started 后静默，运行卡死 | OPEN | 未明确 |
| **P1** | [#106231](https://github.com/openclaw/openclaw/issues/106231) | 循环检测阻止执行但不终止卡死的 Agent 运行 | OPEN | 未明确 |
| **P1** | [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex 应用服务：客户端委托消息工具结果后回合被中断 | OPEN | 未明确 |
| **P1** | [#53540](https://github.com/openclaw/openclaw/issues/53540) | 大参数工具调用生成延迟超过请求超时，导致连接丢失 | OPEN | 未明确 |
| **P1** | [#107873](https://github.com/openclaw/openclaw/issues/107873) | 嵌入提示锁会话接管在工具失败后中止可见 WebChat 回合 | OPEN | 未明确 |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未收割的子进程，导致僵尸进程累积 | OPEN | 未明确 |
| **P1** | [#90098](https://github.com/openclaw/openclaw/issues/90098) | Control UI 和网关的大附件处理非栈安全 | OPEN | 有 [PR #119217](https://github.com/openclaw/openclaw/pull/119217) (浏览器侧修复) |

**核心问题提示**：多个 P1 问题集中在**会话状态管理**（session-state）和**消息丢失**（message-loss），尤其是与 Codex/Telegram/子代理相关的环节。P0 的数据库迁移问题需高度警惕，可能影响所有升级用户。另有数个 P1 问题（如 #97616 僵尸进程、#90098 大附件）表明运行时稳定性仍是挑战。大部分 P1 问题仍无关联的修复 PR，这意味着仓库存在显著的修复积压。

## 6. 功能请求与路线图信号

今日反馈的功能请求，结合已有 PR，可窥见未来版本方向：

- **记忆信任分级（[#7707](https://github.com/openclaw/openclaw/issues/7707)）**：呼声极高，直指 AI 安全核心。虽然实现复杂，但社区需求强烈，有可能在后续版本中进入规划。
- **可配置的执行审批黑名单（[#6615](https://github.com/openclaw/openclaw/issues/6615)）**：允许用户“默认放行，除黑名单外”，提升安全性与灵活性的平衡。已有 PR 关联，被纳入开发的可能性较大。
- **Discord 消息编辑/删除事件支持（[#53654](https://github.com/openclaw/openclaw/issues/53654)）**：支持“编辑后重新处理”与“删除后取消”，能显著提升 Discord 渠道的交互体验。有明确社区支持（3 👍）。
- **飞书视频预览封面（[PR #98458](https://github.com/openclaw/openclaw/pull/98458)）**：一个直接的体验优化 PR，若合并将改善飞书渠道的富媒体消息展示。
- **Control UI 支持 MathJax/LaTeX 渲染（[#42840](https://github.com/openclaw/openclaw/issues/42840)）**：满足科研和数学用户的需求，虽然并非核心功能，但社区点赞数高（10 👍）。
- **投递队列消息 TTL/过期机制（[#16555](https://github.com/openclaw/openclaw/issues/16555)）：** 防止网关重启后旧消息泛滥，是对现有投递可靠性机制的重要补充。
- **AWS 部署指南（[#13597](https://github.com/openclaw/openclaw/issues/13597)）**：文档增强请求，有助于企业级用户采用。
- **持久化 followup 队列（[PR #82572](https://github.com/openclaw/openclaw/pull/82572)）**：这是一个 XL 规模的 PR，旨在将消息队列持久化到 SQLite 中，以在网关重启后不丢失。该 PR 状态为“等待作者”，但若实现，将显著提升消息投递的持久性。

**路线图信号**：安全（记忆信任、凭据管理）和消息投递持久性/可靠性是明确的投资方向。

## 7. 用户反馈摘要

- **对“静默失败”的强烈不满**：多个 Issue（如 [#44925](https://github.com/openclaw/openclaw/issues/44925)、[#85251](https://github.com/openclaw/openclaw/issues/85251)）反映了用户对 Agent 在后台悄悄失败、无任何通知或重试的沮丧。这严重破坏了用户对 Agent 的信任感。
- **对“回归”问题的敏感**：Telegram 重复回复（[#86519](https://github.com/openclaw/openclaw/issues/86519)）、QQBot 重复发送（[#77306](https://github.com/openclaw/openclaw/issues/77306)）等回归 bug 表明，频繁更新带来的不稳定正在侵蚀用户信任。
- **对安全漏洞的担忧**：从记忆投毒（[#7707](https://github.com/openclaw/openclaw/issues/7707)）到供应商凭据泄露（[PR #117304](https://github.com/openclaw/openclaw/pull/117304)），用户对 Agent 处理敏感信息和面对恶意内容时的安全性表现出高度关注。
- **[#51429](https://github.com/openclaw/openclaw/issues/51429) 的“乌龙”事件**：用户 `buggiant-coder` 发现工作路径被硬编码为 `/Users/wangtao`，并通过标题表达了强烈不满（“看起来有人把工作路径hardcode进代码里而且居然被合并发布了”）。虽可能是个例，但也暴露出代码审查流程可能存在漏洞。
- **部分功能请求获得高赞**：如 [MathJax/LaTeX 支持（#42840，10 👍）](https://github.com/openclaw/openclaw/issues/42840)和 [exec-approvals 黑名单（#6615，8 👍）](https://github.com/openclaw/openclaw/issues/6615)，说明用户不仅关注稳定性，也渴望更强大的功能与定制化能力。

## 8. 待处理积压

部分重要 Issue 或 PR 长期未获得明确响应或进展，需维护者关注：

- **[#7707](https://github.com/openclaw/openclaw/issues/7707)（2月3日创建）**：Memory Trust Tagging 功能请求，讨论热度高但已停留 6 个月，仍为 `needs-product-decision` 状态。是时候给出产品层面的反馈了。
- **[#70903](https://github.com/openclaw/openclaw/issues/70903)（4月24日创建）**：P0 级“持久化文件型 provider cooldown”问题，用户被长时间阻塞。该问题已标记为 `stale`，但影响巨大，应优先解决。相关的新 Issue [#115642](https://github.com/openclaw/openclaw/issues/115642) 也提出了类似问题，说明该痛点持续存在。
- **[#6615](https://github.com/openclaw/openclaw/issues/6615)（2月1日创建）**：exec-approvals 黑名单功能请求，获得 8 个 👍，已有 PR 关联，但进度缓慢。用户对安全性的诉求应得到重视。
- **[#42840](https://github.com/openclaw/openclaw/issues/42840)（3月11日创建）**：Control UI 的 LaTeX 支持，获得 10 个 👍，需求明确且实现难度不高，可以评估排期。
- **[PR #82572](https://github.com/openclaw/openclaw/pull/82572)（5月16日创建）**：持久化 followup 队列的 XL 规模 PR，对消息可靠性有质的提升，但长时间处于“等待作者”状态。维护者若能协助推进，将是一项重要的稳定性投资。
- **多个 P1 级 Bug 无修复 PR**：上表所列的多个 P1 问题（如 #44925、#86519、#53540 等）长期存在且无关联 PR，是潜在的“技术债”和“信任杀手”。建议维护者定期将其中影响面最大的问题（如 Codex 静默失败系列）提上修复日程。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-08-06  
**分析范围：** OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、CoPaw、ZeroClaw、TinyClaw、Moltis、ZeptoClaw（共 13 个项目）

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正经历从**功能扩张期**向**稳定性与信任建设期**的关键转型。各项目普遍面临三大核心挑战：**会话状态管理与消息投递可靠性**（多项目 P0/P1 级 bug 高频出现）、**Agent 事实性与记忆力安全**（幻觉状态、记忆投毒、凭据泄露成为跨项目共性痛点）、以及**长会话与工具调用场景下的性能与资源失控**。与此同时，标准协议兼容（OpenAI Chat Completions）、MCP 生态扩展、模型自动路由与 fallback 机制成为多家项目共同的投资方向。生态整体呈现**高活跃度、高密度反馈**的特征，但相当一部分项目的 PR 合并速度跟不上提交速度，修复积压成为系统性问题。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PR（24h） | 合并/关闭 PR | 新 Release | 健康度 | 阶段判断 |
|------|--------------|----------|------------|-----------|--------|---------|
| **OpenClaw** | 500 更新 | 500 更新 | 63 | 无 | ⭐⭐⭐⭐ | 快速迭代期，但积压风险上升 |
| **Hermes Agent** | ~100 更新 | ~50 更新 | 1/50 | 无 | ⭐⭐⭐ | 密集重构期，合并瓶颈显著 |
| **IronClaw** | 33 新开/活跃 | 50 更新，32 待合并 | — | **v1.1.0-rc.1** | ⭐⭐⭐⭐ | 功能加速期，QA 反馈密度上升 |
| **CoPaw** | 14 活跃/8 关闭 | 50 更新，28 待合并 | 22 | 无 | ⭐⭐⭐⭐ | 功能与稳定性并行推进 |
| **ZeroClaw** | 50 更新 | 50 更新 | 1 | 无 | ⭐⭐⭐ | 架构讨论密集，代码落地缓慢 |
| **NanoBot** | 4 更新 | 14 更新 | 6 | 无 | ⭐⭐⭐⭐ | 健康推进期 |
| **NanoClaw** | 2 更新 | 12 更新，10 待合并 | 2 | 无 | ⭐⭐⭐⭐ | 核心维护者活跃，合并待跟上 |
| **LobsterAI** | 2 新增 | 13 更新 | **12** | **2026.8.5** | ⭐⭐⭐⭐⭐ | 高质量闭环运营 |
| **PicoClaw** | 0 | 4 更新 | 1（含 OAuth 大功能） | 无 | ⭐⭐⭐⭐ | 维护收尾期 |
| **NullClaw** | 0 | 2 更新 | 0 | 无 | ⭐⭐⭐⭐ | 稳定性攻坚期 |
| **TinyClaw** | 0 | 0 | 0 | 无 | — | 静默期 |
| **Moltis** | 0 | 0 | 0 | 无 | — | 静默期 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | — | 静默期 |

**备注：** 活跃度排名依次为：**OpenClaw > Hermes Agent = IronClaw = CoPaw = ZeroClaw > NanoBot = NanoClaw = LobsterAI > PicoClaw = NullClaw**。三个项目（TinyClaw、Moltis、ZeptoClaw）当日零活动，暂无法形成数据基线。

---

## 3. OpenClaw 在生态中的定位

### 3.1 社区规模

OpenClaw 是当前生态中**绝对的核心参照系**：单日 Issues/PR 合计 1000 条更新，远超第二位（Hermes Agent 的 ~150 条）；单日合并/关闭 PR 63 条，也大幅领先其他项目。其 Issue 编号已到 **#119xxx**，在 2025 年 5 月以 OpenClaw 3.0 作为独立项目对外发布（一周年），社区规模在同类项目中具有压倒性优势。

### 3.2 技术路线与优势

- **全渠道覆盖**：支持 Slack、Telegram、Discord、飞书、WhatsApp、Signal、Matrix、QQBot、WebChat 等十余种消息渠道，适配层深度远超大多数同类项目
- **Agent 编排深度**：支持叶子子代理、委派任务、多 Agent 协作、Codex 监督工具扩展，在自主智能体能力边界上探索最远
- **可观测性建设**：`doctor`/`status` 命令集成 OTel/Prometheus exporter 健康报告，SQLite 会话存储路径可查，运维成熟度领先
- **记忆与安全方向明确**：记忆信任分级（#7707）提案已获 27 条评论，指向 AI 安全的深层治理

### 3.3 相对短板

- **稳定性与迭代速度的矛盾**：Telegram 重复回复、子代理结果静默丢失、僵尸进程累积等问题长期未闭环，P0 级数据库迁移故障（#119263）仍在处理中
- **合并积压与 PR 维护压力**：大量 PR 处于 `needs-maintainer-review` 和 `needs-product-decision`，单个 P1 问题等待修复 PR 的时间超过数周

---

## 4. 共同关注的技术方向

### 方向一：消息投递可靠性与持久性（涉及 OpenClaw、NanoBot、NanoClaw、LobsterAI）

| 问题 | 涉及项目 | 具体诉求 |
|------|---------|---------|
| 消息重复/丢失 | OpenClaw（Telegram 重复、Slack 回执）、NanoBot（MCP 错误误判成功） | 端到端回执确认、失败重试、幂等投递 |
| 队列持久化 | 多个项目有持久化 queue 的需求 | 进程/网关重启后消息不丢失 |
| 静默失败 | OpenClaw（子代理结果静默丢失）、NanoClaw（Signal 附件不可达）、NanoBot（错误被吞） | 失败可见性、主动通知 |

### 方向二：Agent 事实性与状态验证（涉及 IronClaw、OpenClaw、CoPaw）

| 问题 | 涉及项目 | 具体诉求 |
|------|---------|---------|
| 幻觉状态宣称 | IronClaw（#7246/#7247 声称自动化运行、GitHub 已连接但实际未连接） | 工具调用前置状态验证 |
| 状态管理失控 | OpenClaw（实时语音无界状态）、CoPaw（长会话工具调用堆叠报错） | 硬性资源边界、会话状态回收 |

### 方向三：记忆安全与信任分级（涉及 OpenClaw、Hermes Agent、ZeroClaw）

| 问题 | 涉及项目 | 具体诉求 |
|------|---------|---------|
| 记忆投毒防护 | OpenClaw（#7707 信任分级）、Hermes（委派子上下文环境变量泄漏） | 信息来源可信度标记 |
| 凭据防泄露 | OpenClaw（PR #117304 凭据脱敏）、NanoBot（#5258 凭证 URL 外发防护）、ZeroClaw（SSRF 加固 PR 处于等待状态） | 统一凭据保护层 |

### 方向四：模型容灾与成本优化（涉及 CoPaw、PicoClaw、ZeroClaw、IronClaw）

| 问题 | 涉及项目 | 具体诉求 |
|------|---------|---------|
| 模型 fallback 链 | CoPaw（已实现）、PicoClaw（PR #3200 待合入）、ZeroClaw（OpenRouter session_id 缓存） | 主模型故障时自动切换备用模型 |
| 成本可观测性 | ZeroClaw（OpenRouter 缓存优化）、PicoClaw（Anthopic 用量可视化） | 用量报告、缓存优化策略 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 | 核心差异化 |
|------|---------|---------|------------|-----------|
| **OpenClaw** | 全渠道 + 自主编排 | 重度自动化用户、企业级部署 | Rust 核心 + 多语言 SDK；SQLite + 会话状态管理；丰富的 provider 适配层 | 生态最全、触达最广、社区最大 |
| **Hermes Agent** | 桌面优先 + 多平台 | Windows/桌面用户、开发者 | 单仓库 god-file 架构 + 大栈支持（16MiB）；强 lifecycle guard；Telegram API 对齐 | 桌面体验和终端工具链深度集成 |
| **IronClaw** | 可扩展生态（MCP/IronHub）+ 企业级 | 寻求标准化扩展的开发者 | Rust/WASM；标准化消息框架；MCP 服务器注册 | MCP 生态平台化（IronHub 深度链接） |
| **CoPaw** | 中文用户 + 桌面端 + 多模型 | 中文市场、模型聚合用户 | 后端 + 控制台 UI；LLM fallback UI；Agent 自动路由 | 中文社区活跃度高、模型兼容性好 |
| **NanoBot** | WebUI 优先 + WhatsApp 渠道 | 轻量级个人用户 | 小体量快速迭代；Temporary Chat 内存会话；MCP 集成 | 轻量、部署便捷、UI 现代化 |
| **NanoClaw** | 多通道（含 Signal/Dial）+ 数据库架构严谨 | 注重架构一致性的开发者 | 强单写者规则（outbound.db）；通道适配器隔离 | 架构约束严格，防止并发写入 |
| **NullClaw** | 稳定性攻坚 | 无人值守部署 | 长轮询自愈 + 大栈支持 | 长时稳定运行目标清晰 |
| **ZeroClaw** | 安全加固 + 标准协议兼容 | 企业级、安全敏感用户 | RFC 驱动架构演进；规范开发（Rust）；开放生态集成 | 标准协议兼容（Chat Completions 兼容层） |
| **LobsterAI** | 桌面 + 企业版 + 运营功能 | C 端+企业双轨 | 快速迭代（2-3日一版）；活动运营深度集成 | 运营能力强、企业认证隔离 |
| **TinyClaw / Moltis / ZeptoClaw** | — | — | — | 数据不足，难以定义定位 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（活跃度高、功能推进快）
| 项目 | 特征 |
|------|------|
| **OpenClaw** | 频率最高、合入数量最大；但积压与回归并存，稳定性处于波动中 |
| **IronClaw** | v1.1.0-rc.1 发布标志功能加速期；QA 反馈（bug_bash）机制完善 |
| **CoPaw** | 功能与修复并行；LLM fallback 闭环；UI 体验打磨进入 2.1 beta 阶段 |
| **Hermes Agent** | 处于大规模重构期（god-file 分解），合入瓶颈待解；Telegram API 批量对齐 |
| **LobsterAI** | 闭环效率最高（当日 PR 全量合并）；活动运营迭代高频 |

### 质量巩固阶段（稳定性/维护节奏稳定）
| 项目 | 特征 |
|------|------|
| **NanoBot** | 合入质量高、回归少；Temporary Chat 与安全修复并进 |
| **NanoClaw** | 核心维护者活跃期；架构不变量（单写者）严格遵守 |
| **PicoClaw** | 收尾阶段；OAuth 长周期 PR 终合并，重心转向遗留 PR 清理 |
| **NullClaw** | 稳定性攻坚明确；两个历史 issue 已获修复 PR |

### 架构讨论密集但落地偏慢
**ZeroClaw**：RFC 海啸（零合入 PR 仅 1 个），架构方向接受度高于代码落地速度。

---

## 7. 值得关注的趋势信号

### 7.1 跨项目共识：Agent 可靠性是当前最大缺口
- 从 OpenClaw（子代理静默丢失、Telegram 重复回复）、NanoBot（MCP 错误被吞、WhatsApp 音频静默失败）、CoPaw（`nohup` 卡死、fork 误报成功）到 ZeroClaw（OpenRouter 流式 request 丢参数），各项目都在修补**静默失败**这一信任杀手。
- **参考价值：** 新建 Agent 项目时，应将消息不可丢失、失败可见、自动重试作为核心架构约束，而非事后补丁。

### 7.2 安全从"外部攻击防护"内化为"Agent 自身行为可信"
- 跨项目一致出现对记忆投毒（OpenClaw #7707）、凭据意外外发（NanoBot #5258）、状态幻觉（IronClaw #7246/#7247）、环境变量泄漏（Hermes #71941）等问题的系统性响应。
- **参考价值：** AI 开发者需将 **Agent 声称能力与实际能力的一致性验证**作为功能发布的准入标准。

### 7.3 MCP 生态已从"新功能"变成"必要基础设施"——但稳定性是短板
- CoPaw（MCP 工具规律性失效）、ZeroClaw（MCP/tool-schema 内存泄漏）、NanoBot（MCP 业务错误不透明）、IronClaw（MCP 端点有效性验证缺失）——多平台同时暴露 MCP 稳定性问题。
- **参考价值：** MCP 服务的注册、验证、超时、重连机制需要标准化，当前各项目的自建方案成本高且互不兼容。

### 7.4 模型 fallback 与自动路由成为生产级部署的标配
- CoPaw 已实现完整闭环；PicoClaw 的 fallback 链 PR 等待合入；IronClaw 的技能选择权正在从"规则打分"转向"模型主动选择"。ZeroClaw 对 OpenRouter session caching 的诉求反映了成本意识正在推动架构优化。
- **参考价值：** 多模型容灾与智能路由将从可选项变为生产部署的必要组键。

### 7.5 项目治理效率成为生态分化的关键因素
- 合并效率**显著分层**：LobsterAI（12/13 闭环）、OpenClaw（63 合并）表现最佳；Hermes Agent（1/50）、ZeroClaw（1 PR 闭环）处于瓶颈。长期积压将在未来 1-2 个季度内影响用户留存和贡献者生态。
- **参考价值：** 建议处于合并瓶颈的项目（Hermes、ZeroClaw）引入批量审查机制（如同 epic 分组合并）和自动化门禁，降低人为评审瓶颈。

---

**结论：** 2026 年 8 月的个人 AI 助手生态正处于从"能做"到"可靠地做"的关键转折。各项目的竞争焦点正从功能丰富度转向**信任建设**——消息不丢、状态不会失控、Agent 不撒谎、凭据不泄露。能够在接下来的 1-2 个季度解决可靠性痛点的项目，将有机会确立下一代领导者地位。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-06

## 今日速览

过去24小时 NanoBot 项目保持高活跃度，共有 4 条 Issue 更新和 14 条 PR 更新，无新版本发布。WebUI 和 Agent 核心功能是今日开发焦点：Temporary Chat 模式的实现与加固（#5252、#5259）以及一个持续目标循环 Bug 的修复 PR（#5257）均已在今日提交。安全方面有一个值得关注的 p1 级 PR（#5258）——防止带凭证的 URL 被发送至远端 Jina reader。整体项目健康度良好，无严重回归报告。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日共 6 个 PR 被合并或关闭，其中最值得关注的两项：

- **#5234 feat(agent): integrate mst-python as a metasearch provider** ([链接](https://github.com/HKUDS/nanobot/pull/5234)) — 已合并。新增 Meta-Search Tool (mst) 作为 Web 搜索 provider，可同时聚合 DuckDuckGo、Google、Brave、Bing 等多个引擎结果并通过 RRF 融合排序，显著提升搜索覆盖质量。p1 优先级，已合入主分支。

- **#5250 fix(webui): feather clipped activity edges** ([链接](https://github.com/HKUDS/nanobot/pull/5250)) — 已合并。修复了 Agent 活动面板内容溢出时边缘被裁切的视觉问题，新增方向感知的渐隐特效，改善长内容滚动时的浏览体验。

- **#5203 fix(whatsapp): detect outbound media content before dispatch** ([链接](https://github.com/HKUDS/nanobot/pull/5203)) — 已合并。WhatsApp 外发媒体不再信任文件扩展名，而是通过文件内容检测确定类型；不支持或有歧义的音频格式将作为文档发送，确保原始文件完整送达。

- **#5254 feat: add provider-native request switches** ([链接](https://github.com/HKUDS/nanobot/pull/5254)) — 已合并。为多个服务商添加 WebUI 原生开关：OpenAI Codex Fast mode、OpenAI/DeepSeek Web Search、xAI Grok X Search。

此外，`#5249 refactor(webui): improve visual consistency` 的精简重构也已关闭。Temporary Chat 的早期 PR #5184 因与 #5252 有冲突被关闭（后者为替代实现）。整体来看，今日合入内容以 WebUI 体验优化和 provider 生态扩展为主，项目向前推进明显。

---

## 社区热点

今日最受关注的问题和讨论集中在以下两处：

1.  **Issue #5237 — MCP 工具返回业务错误但 Agent 无视并等待超时** ([链接](https://github.com/HKUDS/nanobot/issues/5237))，2 条评论。当 MCP server 返回 `{"code": 404, "msg": "data not exist"}` 这类业务错误信封（`isError = False`）时，nanobot 将其视为成功调用，LLM 永远不知道调用失败了。这是一个 MCP 协议层面的边角问题，但直接影响 Agent 工具的可靠性，社区关注度高。

2.  **Issue #5149 — WhatsApp 无法发送音频消息** ([链接](https://github.com/HKUDS/nanobot/issues/5149))，4 条评论。用户在安装当前版本后请求发送音频文件，但消息未被送达。日志显示 neonize ffmpeg 存在告警。该 Issue 创建于 7 月 28 日，已持续多日，社区关注度相对较高。

---

## Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|---------|-------|------|--------|------|
| p1（安全） | — | 带凭证的 URL（含 userinfo 或 token 类 query 参数）会被转发至远端 Jina reader | [#5258](https://github.com/HKUDS/nanobot/pull/5258) | 待合并 |
| p1（功能阻断） | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP server 返回业务错误信封时被当作成功，Agent 无法感知失败 | — | 未修复 |
| p2（严重循环） | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` 消息在等待用户回复时产生数十条重复回复，直至用户干预或模型识别为系统循环 | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | 已提交 fix PR |
| p2（功能） | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 无法发送音频消息（可接收） | [#5203](https://github.com/HKUDS/nanobot/pull/5203) | 已合并，待验证 |

其余修复类 PR 包括：

- **#5260 fix(memory): ignore runtime files inside tracked workspace dirs** ([链接](https://github.com/HKUDS/nanobot/pull/5260)) — 防止运行时生成的文件（如 `.dream_cursor`）污染已跟踪的工作区目录。
- **#5248 fix(matrix): send non-empty POST body on room join** ([链接](https://github.com/HKUDS/nanobot/pull/5248)) — 修复 Continuwuity 等 homeserver 拒绝空 POST body 导致 joining 静默失败的问题。

> **安全提示**：#5258（凭证 URL 泄漏防护）建议尽快合入，目前主分支存在将含 token 的 URL 外发至第三方服务的安全隐患。

---

## 功能请求与路线图信号

今日最大的功能亮点是 **Temporary Chat（临时会话）**：PR #5252 为其添加了 WebUI 入口，PR #5259 进一步加固为“仅内存、不落盘”的临时会话模式，确保会话状态不写入历史记录、WebUI transcripts 或自动记忆。目前两个 PR 均待合并，预计会成为下一版本的重要功能。

其他值得关注的路线图信号：

- **Issue #5251 — MCP Apps host 支持** ([链接](https://github.com/HKUDS/nanobot/issues/5251))：用户建议将 `io.modelcontextprotocol/ui` 的 MCP Apps 扩展能力引入 WebUI，使 MCP server 可以附加交互式 UI 组件。该请求能显著扩展 nanobot 作为 Agent UI 平台的能力边界。
- **PR #5253 — 共享交互式项目终端** ([链接](https://github.com/HKUDS/nanobot/pull/5253))：新增一个项目级 PTY 终端，WebUI 和 Agent 共享，支持 xterm.js、回放、重连、重启和显式终止。截至今日仍为待合并状态。
- **PR #5255 — 可信的 API 服务状态展示** ([链接](https://github.com/HKUDS/nanobot/pull/5255))：Draft PR，修复外部启动的 `nanobot serve` 实例在 WebUI 中始终显示为 Off 的问题，并新增 `nanobot api status` 命令。

---

## 用户反馈摘要

- 来自 Issue #5149：用户期望从 WhatsApp 请求任意音频文件能被正常发送，当前版本实际为静默失败。同类问题在 #5203 中已有修复，用户可等待新版本验证。
- 来自 Issue #5256：`/goal` 持续目标在等待用户输入时无界地重复注入提示，用户观察到“dozens of near-identical replies”，只能通过人工干预或模型自发识别系统循环来终止。该体验对持续目标模式的使用有较大负面影响。
- 来自 Issue #5237：MCP 工具结果对 LLM 的透明性不足——业务层的错误信息（如 404）没有传递给模型。对于依赖 MCP 工具链做决策和重试的用户，这会导致 Agent 静默卡死直至超时，影响自动化可靠性。

---

## 待处理积压

以下为长期未响应或可能被忽略的重要问题：

- **Issue #5149 — WhatsApp 无法发送音频**：已开放 9 天、4 条评论。修复 PR #5203 虽已合入，但 issue 尚无关闭确认，建议维护者标记已修复并请用户验证。
- **PR #5255 — Draft: 可信的 API 服务状态**：该 Draft PR 从 8 月 5 日创建后暂无后续评论，涉及 WebUI 面板可信性问题，建议维护者关注并推进 review。
- **PR #5253 — 共享交互式项目终端**：功能体量较大，尚未获得 review 反馈，考虑到已有下层依赖（#5252），建议协调两个 PR 的合并节奏，避免冲突扩散。

---

*日报生成时间：2026-08-06 · 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-06

## 1. 今日速览

项目今日活跃度**极高**，单日 Issues 与 PR 更新合计达 100 条，但需注意其中约 60% 来自一位维护者（andrexibiza）批量提交的 Telegram API 对齐系列 issue 以及 god-file 分解系列 PR，属于有计划的批量输出而非偶发流量。核心事件集中在三方面：一是 **repo-wide god-file 分解**进入密集执行期，CLI 主文件已切出 5 个 PR 切片（R1-R5）；二是 **gateway lifecycle guard 崩溃问题**引发 4 个独立修复 PR 同日提交，说明该问题影响面较大且社区响应迅速；三是 Telegram 平台发出约 16 个功能对齐 issue（多为 duplicate/批量标记）。合并/关闭速度较慢（1/50），大量 PR 待审，合并瓶颈值得关注。`P1` 级问题有 2 个（Windows 桌面版回归、Linux 更新后 gateway stale），均需优先处理。

---

## 2. 版本发布

今日无新版本 Release。上一版本为 0.20.0（存在已知回归，见 Bug 章节）。

---

## 3. 项目进展

今日合并/关闭的 PR 仅 1 个，另有 49 个待合并。重大项目进展如下：

**已合并（1 个）：**

| PR | 内容 | 影响 |
|---|---|---|
| [#79102](https://github.com/NousResearch/hermes-agent/pull/79102) | **fix(gateway): treat virtual model alias as unset in API server sessions** | 修复 API server 会话将虚拟模型别名（如 `"hermes-agent"`）持久化为真实模型 ID 的问题。此前会导致后续 chat 调用将别名传给 agent 作为真实模型使用，破坏 gateway 默认模型配置。该修复使未显式指定 model 的会话回退到 gateway 配置的默认模型。 |

**重点推进方向（待合并 PR 中可见战略意图）：**

- **god-file 分解进入密集执行期**：`hermes_cli/main.py`（12,599 行）正被系统性切片，今日提交 R1-R5 五个 PR（[#79844](https://github.com/NousResearch/hermes-agent/pull/79844) 至 [#79848](https://github.com/NousResearch/hermes-agent/pull/79848)），分别提取 oneshot hard-exit、custom-provider persistence、npm toolchain、node runtime leaf 和 command facades。同时 `web_server.py` 也在切片（[#79126](https://github.com/NousResearch/hermes-agent/pull/79126)）。这是 epic [#78647](https://github.com/NousResearch/hermes-agent/issues/78647)（shard all 20 god files）的核心执行。
- **gateway lifecycle guard 系列修复**：针对 NUL 字节崩溃（[#77780](https://github.com/NousResearch/hermes-agent/issues/77780)）有 4 个独立修复 PR 提交，覆盖不同角度——二进制/超大输入防护（[#79838](https://github.com/NousResearch/hermes-agent/pull/79838)）、NUL 路径防护（[#79837](https://github.com/NousResearch/hermes-agent/pull/79837)）、heredoc 误报修复（[#79835](https://github.com/NousResearch/hermes-agent/pull/79835)），其中 #79835 与 #79837 为互补修复。

---

## 4. 社区热点

今日讨论最活跃的 Issues/PRs：

| 排名 | Issue/PR | 评论数 | 主题 | 诉求分析 |
|---|---|---|---|---|
| 1 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) Epic: god-file decomposition | 14 | repo-wide 架构重构 | 社区对大型文件可维护性的普遍关注。该 epic 已派生出大量子任务和 PR，反映了项目对代码质量的重视，但也可能分散对功能开发的注意力。 |
| 2 | [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) lifecycle_guard `ValueError: embedded null byte` | 12 | 终端命令全部崩坏 | 影响面最广的 bug，任何涉及 heredoc 或 `-c` payload 的终端命令都会触发。高评论数反映了用户受影响的广度。已有多个修复 PR 待合并。 |
| 3 | [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) Extract Gateway Platform Routing | 11 | `gateway/run.py` 858KB god-file | 该 issue 已存在 38 天，持续获得关注。用户对超大型单文件的负面体验正在积累，这也呼应了 #78647 epic 的必要性。 |

**核心社区情绪**：讨论集中在代码可维护性和稳定性两个维度，功能性讨论相对较少。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1（严重）

| Issue | 描述 | 状态 |
|---|---|---|
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | **[0.20.0 回归] 桌面版底部操作面板完全缺失**，应用变为只读 shell。影响 Windows 平台。 | 已报告，无 fix PR |
| [#78574](https://github.com/NousResearch/hermes-agent/issues/78574) | **Linux 更新后默认 gateway 保持 stale**，导致 ImportError。`hermes update` 未重启 systemd user gateway，新源码与旧内存模块混用。 | 已报告，无 fix PR |

### P2（高）

| Issue | 描述 | 状态 |
|---|---|---|
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | lifecycle_guard 因 `os.open` 遇到 `embedded null byte` 崩溃，**所有终端命令不可用**。 | 4 个 fix PR 待合并（[#79838](https://github.com/NousResearch/hermes-agent/pull/79838)、[#79837](https://github.com/NousResearch/hermes-agent/pull/79837)、[#79835](https://github.com/NousResearch/hermes-agent/pull/79835)、[#79838](https://github.com/NousResearch/hermes-agent/pull/79838)） |
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) | 委派子上下文通过共享终端快照持久化，后续普通调用可看到不应存在的环境变量。 | 已报告，无 fix PR |
| [#79562](https://github.com/NousResearch/hermes-agent/issues/79562) | WeChat 平台 `/approve` 文本回退在首次批准后失效（时序竞争）。 | 已报告，无 fix PR |
| [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) | 成本标签格式化为 2 位小数，低于 1 美分的单次调用显示为 `$0.00`。 | 已报告，无 fix PR |
| [#79459](https://github.com/NousResearch/hermes-agent/issues/79459) | 本地 TTS 提供商（Piper/KittenTTS）忽略配置的 voice 参数。 | 已报告，无 fix PR |
| [#79101](https://github.com/NousResearch/hermes-agent/issues/79101) | API server 会话将虚拟模型别名存储为真实模型，破坏 gateway 默认配置。 | **已修复**，PR [#79102](https://github.com/NousResearch/hermes-agent/pull/79102) 已合并 |
| [#79834](https://github.com/NousResearch/hermes-agent/pull/79834) | UTF-8 文本在 sample 边界被误判为二进制。 | 有 fix PR 待合并 |

### 值得注意的其他 bug PR：

- **terminal 读操作循环检测**（[#79839](https://github.com/NousResearch/hermes-agent/pull/79839)）：单次调用重复 517 次字节相同的 `[]` 直到 max_iterations。这是 guardrails 层面的改进。
- **benched credential 不应 disqualify chain entry**（[#79840](https://github.com/NousResearch/hermes-agent/pull/79840)）：健康 provider 因 402 被排挤出 fallback chain 长达 47 分钟。
- **desktop zoom 失焦重置**（[#75495](https://github.com/NousResearch/hermes-agent/pull/75495)）：Chromium 在窗口失焦/聚焦后静默将 zoom 重置到 100%。

---

## 6. 功能请求与路线图信号

### 高确定性纳入（已有对应 PR）：

| 功能 | 对应 PR/Issue | 信号强度 |
|---|---|---|
| **god-file 分解**（CLI 主文件、web_server、gateway） | [#79844](https://github.com/NousResearch/hermes-agent/pull/79844)-[#79848](https://github.com/NousResearch/hermes-agent/pull/79848)、[#79126](https://github.com/NousResearch/hermes-agent/pull/79126)、[#54962](https://github.com/NousResearch/hermes-agent/issues/54962) | 极高，已有 standing policy 且密集推进中 |
| **Telegram Bot API 10.2 全面对齐** | [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) meta-issue + 约 16 个子 issue | 高，已有 campaign 框架，但多数标记为 duplicate |
| **Desktop 最小化到托盘** | [#79803](https://github.com/NousResearch/hermes-agent/pull/79803) | 已实现，待合并 |
| **Hindsight 嵌入继承 Hermes LLM** | [#79159](https://github.com/NousResearch/hermes-agent/pull/79159) | 已实现，待合并 |

### 可能纳入下一版本（仅有 Issue，无 PR）：

| 功能 | Issue | 信号强度 |
|---|---|---|
| **内置记忆生命周期管理**（MEMORY.md/USER.md 检视、整理、冲突检测） | [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | 中，有明确范围界定 |
| **DeepSeek 原生 server-side web_search** | [#79820](https://github.com/NousResearch/hermes-agent/issues/79820)（已关闭为 duplicate） | 中，虽关闭但说明已有其他渠道覆盖 |
| **Assistant 消息 Preview 链接路由到文件标签页** | [#41736](https://github.com/NousResearch/hermes-agent/issues/41736) | 中，已存在 59 天 |

### 值得注意的架构信号：

- **email adapter 输出截断修复**（[#79842](https://github.com/NousResearch/hermes-agent/pull/79842)）：发现 email 从未声明 `splits_long_messages`，导致被误用 Telegram 的 4096 字符限制。说明跨平台适配器的能力声明机制需要更严格执行。

---

## 7. 用户反馈摘要

### 主要痛点：

1. **终端工具稳定性**是最集中的用户痛点。`lifecycle_guard` 崩溃导致所有终端命令失败（[#77780](https://github.com/NousResearch/hermes-agent/issues/77780)），且在 issue 评论中用户 `BBorisV` 详细描述了 heredoc 场景下的触发路径，说明此类场景在真实使用中很常见。同时 [#79835](https://github.com/NousResearch/hermes-agent/pull/79835) 指出 `shlex` 不理解 heredoc 语法导致的误报问题，意味着用户日常使用 heredoc 的频率不低。

2. **更新流程的可靠性**。用户 `ccheng555` 报告 [#78574](https://github.com/NousResearch/hermes-agent/issues/78574)：`hermes update` 更新了代码但未重启 gateway，导致新旧代码混用出现 ImportError。这种"半更新"状态对用户体验的伤害较大。

3. **桌面版 0.20.0 回归**。用户 `LAN-TINA-WS` 报告 [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) 底部操作面板完全消失，描述为"应用变成只读外壳"，措辞强烈，说明该功能对其工作流至关重要。

### 积极信号：

- 用户 `zhangweiooy` 提交的 DeepSeek web_search 功能请求（[#79820](https://github.com/NousResearch/hermes-agent/issues/79820)）虽然被标记为 duplicate 关闭，但说明第三方开发者正在积极探索 provider 新能力与 Hermes 的集成。
- Telegram 功能对齐系列（[#78781](https://github.com/NousResearch/hermes-agent/issues/78781)-[#78791](https://github.com/NousResearch/hermes-agent/issues/78791)）虽多为 duplicate，但发起人 `andrexibiza` 展现了系统化的 API 差距分析能力，这种深度文档对比对项目质量提升有价值。

### 值得注意的使用场景：

- 用户 `rodrigogs` 在 [#79839](https://github.com/NousResearch/hermes-agent/pull/79839) 中描述了一个真实场景：agent 在单次 turn 中重复执行同一个 `gh api` 命令 517 次、持续 46 分钟、每次都得到空结果。这说明 agent 的循环检测机制在当前配置下不够敏感，需要更激进的 break 条件。

---

## 8. 待处理积压

### 长期未响应的 P1/P2 Issue（需要优先关注）：

| Issue | 创建时间 | 天数 | 严重度 | 最后活动 |
|---|---|---|---|---|
| [#78574](https://github.com/NousResearch/hermes-agent/issues/78574) Linux 更新后 gateway stale | 08-04 | 2 天 | P1 | 08-06（有评论） |
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) 桌面版 0.20.0 回归 | 08-05 | 1 天 | P1 | 08-06（有评论） |
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) 委派子上下文持久化泄漏 | 07-26 | 11 天 | P2 | 08-06（无 fix PR） |
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) lifecycle_guard 崩溃 | 08-03 | 3 天 | P2 | 4 个 fix PR 待合并 |

### 最需要关注的趋势：

**`#71941`（委派子上下文持久化）** 已存在 11 天且无 fix PR，属于 P2 级问题。该 bug 描述的是 `delegate_task` 的子进程环境变量泄漏到后续普通调用中，涉及终端环境缓存的共享机制。考虑到 `delegate_task` 是 agent 编排的核心工具之一，这类状态泄漏可能导致安全风险（子任务的环境变量被未授权调用读取）。

### 合并瓶颈：

当前有 49 个 PR 待合并，但今日仅合并 1 个。按照此速度，即使忽略新增 PR，也需约 49 天清空积压。建议维护者考虑：

- god-file 系列的 5 个 PR（[#79844](https://github.com/NousResearch/hermes-agent/pull/79844)-[#79848](https://github.com/NousResearch/hermes-agent/pull/79848)）属于同一 epic 且大概率无行为变更，建议批量审查合并
- lifecycle-guard 相关的 4 个修复 PR（[#79835](https://github.com/NousResearch/hermes-agent/pull/79835)、[#79837](https://github.com/NousResearch/hermes-agent/pull/79837)、[#79838](https://github.com/NousResearch/hermes-agent/pull/79838)、[#79839](https://github.com/NousResearch/hermes-agent/pull/79839)）针对同一崩溃问题，建议合并后统一验证，避免冲突

---

*报告生成时间：2026-08-06 | 数据来源：NousResearch/hermes-agent GitHub 仓库*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-06** | **数据周期：2026-08-05 00:00 – 2026-08-06 00:00 UTC**


## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等水平**。过去 24 小时无新 Issue 提交或关闭，项目 Issue 侧处于静默期；PR 侧相对活跃，共收到 4 条 PR 更新，其中 1 条已关闭（含合并），3 条处于待合并状态。值得注意的是，**一条搁置近 8 周的 OAuth 功能 PR（#926）已关闭并合并**，是今日最重要的功能推进。无新版本发布。综合来看，项目维护重心偏向已提交 PR 的收尾与审查，社区需求侧近期未有明显波动。


## 2. 版本发布

本报告周期无新版本发布。


## 3. 项目进展

今日有 1 条 PR 完成合并/关闭，但影响面较大：

- **PR #926 - feat(auth): 新增 Anthropic OAuth setup-token 登录**（[链接](https://github.com/sipeed/picoclaw/pull/926)）
  - **状态**：已关闭（合并）
  - **合并时间**：2026-08-05
  - **作者**：BallerIsLeet
  - **推进内容**：为 Anthropic 供应商新增了 OAuth setup-token 支持（`sk-ant-oat01-*` 前缀），作为 API key 之外的替代认证方式。具体包括：① 新增 `--setup-token` CLI 标志及交互式登录菜单；② 集成 Anthropic 用量端点，使 `auth status` 可展示 5 小时与 7 天内的资源使用情况；③ 为 OAuth token 增加流式（streaming）支持。
  - **项目意义**：该 PR 创建于 2 月 28 日，历经约 5 个月终于合并。这标志着 PicoClaw 在 **Anthropic 生态集成成熟度**上迈出重要一步——从单一 API key 认证扩展至更灵活的 OAuth 体系，同时补全了用量可视化能力，提升了企业级场景的可观测性。

其余 3 条 PR 仍处于开放状态，详见下文“待处理积压”部分。


## 4. 社区热点

今日无高讨论量 Issue。聚焦到最近更新的 PR 与社区反馈信号：

- **PR #3200 - feat(models): 可配置的默认 fallback 链**（[链接](https://github.com/sipeed/picoclaw/pull/3200)）
  - **动态**：创建于 7 月 1 日，8 月 5 日有更新，当前处于待合并状态
  - **核心诉求**：允许用户在 Web UI 中配置模型的默认降级链（default fallback chain），包括设置主模型、追加备用模型、调整顺序，并经后端 API 持久化。
  - **分析**：这反映了用户对**多模型容灾与成本控制**的需求。当主模型不可用或配额耗尽时，自动切换到备选模型，是高可用场景的基础能力。该 PR 已搁置超 5 周，社区可能期待其加速合入。

- **PR #1951 - chore: 将安装脚本从 docs 仓库迁移至主仓库**（[链接](https://github.com/sipeed/picoclaw/pull/1951)）
  - **动态**：创建于 3 月 24 日，8 月 5 日有更新
  - **分析**：主仓库与文档仓库分离导致安装脚本维护失焦，该 PR 将脚本统一收归主仓，简化使用者获取最新安装方式的路径。虽然属于工程化“内务”，但长期搁置可能影响新手部署体验。


## 5. Bug 与稳定性

今日无新增 Bug 报告，但有 1 条阻塞构建的缺陷正在修复中：

- **PR #3318 - fix(web): 修复无法解析的 pnpm-lock.yaml**（[链接](https://github.com/sipeed/picoclaw/pull/3318)）
  - **严重程度**：🔴 高（阻塞开发环境）
  - **问题描述**：`web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 在 `packages:` 与 `snapshots:` 两处重复定义，YAML 规范禁止重复的映射键，导致 `pnpm install` 直接失败并报 `ERR_PNPM_BROKEN_LOCKFILE`。
  - **影响范围**：所有涉及 Web 前端的本地开发与 CI 流程均受影响。
  - **修复状态**：PR 已提交（作者 nuestraai），8 月 5 日更新，处于待审查状态，尚**未合并**。该问题若持续存在，将成为新贡献者参与前端的首要障碍。


## 6. 功能请求与路线图信号

近期无新的 Issue 提出功能需求，但结合待合并 PR 可识别两个明确的产品方向信号：

| 方向 | 来源 | 说明 | 纳入可能性 |
|------|------|------|-----------|
| **多模型 fallback 链配置** | PR #3200 | Web UI 可视化配置主模型、备用模型及优先级顺序 | 可能性高——功能完整（含前端 + 后端），已完成开发，缺的是审查合入 |
| **安装体验统一化** | PR #1951 | 安装脚本从 docs 仓库迁回主仓库，集中维护 | 可能性中——属于工程治理改进，但搁置时间已超 4 个月，优先级可能较低 |

此外，已合并的 PR #926 中引入的 **Anthropic 用量可视化**（`auth status` 展示 5 小时/7 天用量）是继认证增强后的又一信号：项目正强化 **API 成本可观测性**，未来可能推广至更多供应商。


## 7. 用户反馈摘要

今日没有新的 Issue 评论，但结合当前 PR 动态与历史搁置状态，可提炼以下用户侧信号：

- **前端开发者入场受阻**：PR #3318 暴露的 `pnpm-lock.yaml` 损坏问题，直接导致 `ERR_PNPM_BROKEN_LOCKFILE` 报错。任何尝试在本地搭建 Web 前端的开发者都会在第一关被阻断，这对社区贡献者生态的负面影响较大。
- **对多模型容灾的明确需求**：PR #3200 的作者 lc6464 分别在 3 月（#1951）和 7 月（#3200）各提交了一条 PR，虽侧重点不同，但共同反映其深度使用场景。fallback 链的核心痛点在于“单一模型故障即服务中断”，满足的是生产级可靠性诉求。
- **认证方式多样化的偏好**：PR #926 的合入侧面验证了用户对“API key 之外更灵活的认证方式”的需求。OAuth setup-token 适配了短期、限权的使用场景，更适合团队内部分发与权限管控。


## 8. 待处理积压

以下为长期未合入或未响应的重要 PR，建议维护者优先关注：

| PR | 主题 | 创建时间 | 最近更新 | 搁置时长 | 优先级建议 |
|----|------|---------|---------|---------|-----------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | 安装脚本迁移至主仓库 | 2026-03-24 | 2026-08-05 | ~4.5 个月 | 🟡 中——工程化改进，收尾成本低 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 可配置默认 fallback 链 | 2026-07-01 | 2026-08-05 | ~5 周 | 🟠 高——功能完整，社区价值明确，长期搁置可能挫伤贡献者积极性 |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | 修复 pnpm-lock.yaml 损坏 | 2026-08-05 | 2026-08-05 | 1 天 | 🔴 紧急——阻塞前端开发环境，建议 24h 内完成审查 |

> 免责声明：本日报基于 GitHub 公开数据自动生成，PR 合并状态以实际仓库为准。部分 PR 的“已关闭”状态可能是未合并直接关闭，建议点击链接确认具体原因。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-06

**数据统计周期**：2026-08-05 至 2026-08-06 | **数据来源**：GitHub API

---

## 1. 今日速览

NanoClaw 项目在 2026-08-05 表现出中等偏上的开发活跃度。24 小时内共有 12 条 PR 更新和 2 条 Issue 更新，其中 10 个 PR 处于待合并状态，2 个 PR 已关闭。最值得关注的是提交了 `#3192` 修复 PR，直接针对已存在数周的命令门控拒绝通知写入 `outbound.db` 违反单写者规则的问题。另一方面，Issue `#2528`（Signal 通道附件不可达）已延期近三个月仍未修复，但今日出现了包含问题排查方向的评论。整体来看，项目核心维护者正处于活跃修复期，但待合并 PR 的池子正在持续扩大，需要关注合并节奏是否能够跟上提交速度。

---

## 2. 版本发布

**无新版本发布。** 上次发布至今已超过 24 小时，建议维护者考虑在近期的修复和功能累积后规划下一个 patch/minor 版本。

---

## 3. 项目进展

今日关闭了 2 个 PR，均为值得关注的修复：

| PR | 标题 | 状态 | 关键内容 |
|---|---|---|---|
| [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works | **已关闭** | 禁用了内建 SendMessage 的默认注册，为真正的 agent 间消息传递让路。这是一个行为变更，值得在 release notes 中标注。 |
| [#3175](https://github.com/nanocoai/nanoclaw/pull/3175) | fix: route command-gate denials through the delivery adapter, not outbound.db | **已关闭** | 修复了命令门控拒绝通知写入 `outbound.db`（违反单写者规则）的问题。该 PR 的新版本 `#3192` 于今日重新提交，说明关闭后可能有重构需求。 |

**值得注意的信号**：`#3192`（与 `#3175` 同主题的重新提交）在过去 24 小时内提交，合入时间预计未来几天。此外，[#3186](https://github.com/nanocoai/nanoclaw/pull/3186)（为 skill 能力添加 host seams）、[#3156](https://github.com/nanocoai/nanoclaw/pull/3156)（将通道附件以结构化 parts 传递至 providers）和 [#3191](https://github.com/nanocoai/nanoclaw/pull/3191)（WhatsApp 登录态丢失时防止宿主启动挂起）等几个高质量 PR 均在持续推进。特别值得注意的是 **#3191** 修复了一个实际会导致**宿主启动 hang 死**的阻塞性 bug，建议优先合入。

---

## 4. 社区热点

今日社区讨论热度较低，两个活跃 Issue 各只有 1 条评论，无高热度讨论话题。不过有两个值得关注的信号：

- **[Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)**（Signal 附件不可达）：该 issue 创建近 3 个月，今日更新了最新评论。从摘要来看，用户发送图片或 PDF 后，agent 容器内无法访问这些附件。关联 PR [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) 正是将通道附件以结构化 parts 传递至 providers 的修复方案，这说明该问题已进入修复管道。
- **[PR #3192](https://github.com/nanocoai/nanoclaw/pull/3192)** 的重新提交表明维护者对该修复方案仍在不懈打磨，核心架构（单写者规则）的遵守是项目开发的重中之重，值得社区关注。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| **高** | [#3191](https://github.com/nanocoai/nanoclaw/pull/3191) | WhatsApp 登录态失效时 `setup()` 无界等待 → **宿主启动 hang 死** | 已有修复 PR，待合并 |
| **中** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal 通道附件在 agent 容器内不可达（图片/PDF） | 未修复，关联 PR #3156 推进中 |
| **中** | [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | Debian 12 LXC 上 docker 套接字权限被拒，恢复路径不触发 | 未修复（存在近 3.5 个月，无明确进展） |
| **低** | [#3192](https://github.com/nanocoai/nanoclaw/pull/3192) | command-gate 拒绝通知直接写入容器拥有的 outbound.db（第二个写入者，违反单写者规则） | 已有修复 PR（重新提交） |
| **低** | [#3188](https://github.com/nanocoai/nanoclaw/pull/3188) | MCP stdio 子进程缺少网关环境变量（HTTPS_PROXY/CA-trust 等） | 已有修复 PR，待合并 |

---

## 6. 功能请求与路线图信号

今日收录了几个重要的功能新增信号：

- **[PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)** — 新增 **Tavily MCP 工具 skill**。Tavily 是专为 LLM 优化的搜索 API，该 skill 将显著增强 agent 的联网检索能力。若合入，下一版本将直接支持更可靠的实时搜索。
- **[PR #3189](https://github.com/nanocoai/nanoclaw/pull/3189)** — 新增 **add-why skill**，用于解释单条消息为何被处理为当前结果。这是可观测性方向的有用补充。
- **[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — 在通道选择器中加入 **Dial** 通道支持。该项目已有一段时日，说明新通道接入流程成熟，值得持续推进。
- **[PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)** — 修复未知斜杠命令被错误当作 Claude Code 命令解析并导致消息被静默丢弃的问题。这是体验层的重要修复，合入后用户误输入斜杠命令时不会再"无响应"。

综合来看，下一版本的功能方向可能包括：**Tavily 搜索能力、Dial 通道支持、附件结构化传递、WhatsApp 登录态恢复机制及新增观测工具**。

---

## 7. 用户反馈摘要

- **Signal 附件问题（[#2528](https://github.com/nanocoai/nanoclaw/issues/2528)）**：用户 `.add-signal` 安装 Signal 后，通过手机发送图片/PDF，agent 容器内无法访问这些附件。这说明当前 v2 安装中 Signal 通道的文件传递链路仍存在缺陷，用户对"agent 能否看到我发的图片"这一基础体验极其关注。
- **Docker 套接字权限问题（[#2006](https://github.com/nanocoai/nanoclaw/issues/2006)）**：在 Proxmox LXC（Debian 12）上全新安装时，Docker 安装和用户组添加已完成，但后续步骤仍因权限不足而失败，且恢复路径未触发。该问题困扰用户已 3.5 个月，说明 **LXC/Proxmox 环境的安装体验需要专项优化**。
- **WhatsApp 登录态丢失（[#3191](https://github.com/nanocoai/nanoclaw/pull/3191)）**：开发者主动发现当 WhatsApp 会话登出且无人扫码时，整个宿主启动流程会被卡死。这是部署稳定性的重要隐患，修复 PR 已提交。

---

## 8. 待处理积压

以下条目长期未得到响应，建议维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 说明 |
|---|---|---|---|---|---|
| [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | Issue | Debian 12 LXC: docker socket permission denied — recovery path doesn't fire | 2026-04-25（**103天**） | 开放 | 安装流程关键缺陷，影响 LXC 用户群体 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | PR | feat(setup): add Dial to the channel picker | 2026-07-14（**23天**） | 开放 | 较成熟的功能 PR，等待核心团队评估 |
| [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) | PR | fix(agent-runner): carry channel attachments as structured parts | 2026-07-30（**7天**） | 开放 | 直接关联 #2528 的修复方案 |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | PR | fix(formatter): treat unknown slash commands as normal chat | 2026-05-08（**90天**） | 开放 | 体验优化 PR，已积压 3 个月 |

---

## 项目健康度评估

**整体评价：良好（B+）**。核心维护者持续活跃，数据库单写者规则等架构不变量得到严格遵守。当前主要挑战是**合并积压**（10 个 PR 等待合并）和**安装/部署环节的体验问题**（Issue #2006 长期悬而未决）。Signal 附件问题虽存在较久，但已有对应的修复 PR 在推进中。建议维护者优先合入 [#3191](https://github.com/nanocoai/nanoclaw/pull/3191)（阻断性 bug）和 [#3188](https://github.com/nanocoai/nanoclaw/pull/3188)（低风险环境变量透传），并尽快组织一次版本发布，避免 PR 池继续膨胀。

---

*本日报由 AI 分析师自动生成，数据截止时间为 2026-08-06。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-06

> 数据来源：github.com/nullclaw/nullclaw | 统计周期：2026-08-05 ~ 2026-08-06

---

## 1. 今日速览

今日项目整体活跃度较低，过去 24 小时内无新 Issue 产生、无版本发布，仅有两项由同一作者提交的 PR 处于待合并状态。两项 PR 均针对长期存在的稳定性问题——Agent turn 路径栈溢出和 Telegram/Matrix 通道静默失效——且都附有明确根因分析和修复方案，说明维护团队当前的重点在于巩固运行稳定性而非扩张功能。项目健康度总体良好，无回归、无紧急安全事件，但社区反馈通道（Issues）今日完全静默，讨论热度不高。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并或关闭，但两项待合并 PR 值得关注，二者均为 bug 修复性质，指向项目近期稳定性攻坚的方向：

| PR | 标题 | 修复目标 | 状态 |
|----|------|----------|------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | fix(runtime): give the agent turn path a 16 MiB stack | 解决 `SessionManager.processMessage*()` / `Agent.turn()` 路径栈空间不足导致的崩溃（关闭 #976） | 待合并 |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | fix(channels): let poll failures age out a dead polling thread | 修复 Telegram/Matrix 频道在空闲一夜后静默失效、需重启网关才能恢复的问题（关闭 #972） | 待合并 |

两项修复叠加后，将显著提升长时间无人值守场景下的可靠性——前者解决运行时崩溃风险，后者解决通道"假死"问题。若两者顺利合并，预计项目将朝着"长时间稳定运行无需人工干预"的目标迈出一大步。

---

## 4. 社区热点

今日无高讨论量的 Issue 或 PR。两项 PR 均无评论、无点赞，作者为同一人（raskevichai），推测为维护者自行提交的内部修复，社区参与度不高。

---

## 5. Bug 与稳定性

今日无新报告的 Bug，但两项 PR 分别对应了两个历史遗留稳定性问题：

| 严重程度 | 问题描述 | 对应 Issue | 修复 PR | 备注 |
|----------|----------|------------|----------|------|
| 高 | Agent turn 路径栈空间不足（原 2 MiB 别名自 `HEAVY_RUNTIME_STACK_SIZE`），可能导致进程崩溃 | [#976](https://github.com/nullclaw/nullclaw/issues/976) | [#985](https://github.com/nullclaw/nullclaw/pull/985)（将栈扩至 16 MiB） | 修复方案为直接扩容，是否根治需验证 |
| 中 | Telegram/Matrix 轮询线程静默死亡后，supervisionLoop 无法发现并恢复，频道失联直至手动重启网关 | [#972](https://github.com/nullclaw/nullclaw/issues/972) | [#984](https://github.com/nullclaw/nullclaw/pull/984)（让轮询失败超时后被 supervisior 回收） | 根因是 supervisor 存在结构性盲区 |

两项修复均已在 PR 中给出根因分析，未发现新的回归问题。

---

## 6. 功能请求与路线图信号

今日无新功能请求。从两项 PR 的修复方向判断，近期版本的重点仍将围绕稳定性与可靠性展开——大栈支持（16 MiB 栈）和通道自愈机制可能成为下一个 patch 版本的核心内容。目前未观察到新功能向路线图移动的信号。

---

## 7. 用户反馈摘要

今日无 Issue 评论可提取。从已关闭的 Issue #972 和 #976 标题来看，用户此前反馈的核心痛点为：

- **长时间运行后频道静默失效**（Telegram/Matrix），需要人工重启网关才能恢复，严重影响无人值守场景；
- **Agent 会话处理路径偶发崩溃**，怀疑与栈空间不足相关。

这两类问题均已在今日的 PR 中得到针对性修复，待合并后将验证是否真正解决用户痛点。

---

## 8. 待处理积压

今日无长期未响应的 Issue 或 PR。两项 PR 均为 8 月 5 日新提交的，尚未收到维护者的 review 或合并操作，属正常处理周期。

---

**项目健康度评估：偏好。** 活跃度虽不高，但维护者保持稳定的修复节奏，无严重回归、无安全关切，社区提交的 issue 均有对应修复方案，项目处于良性迭代轨道。建议关注两项 PR 的合并进展及后续验证结果。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-06

## 1. 今日速览

过去24小时IronClaw项目继续保持高活跃度，共产生43条Issue更新和50条PR更新，其中新开/活跃Issue 33条、待合并PR 32条，另发布1个候选版本。值得关注的是，**v1.1.0-rc.1** 作为1.0.0之后的首个候选版本正式发布，标志着扩展生态功能（MCP服务器、Slack命令、跨渠道附件）已进入验证阶段。代码层面，技能选择机制重构（PR #6938、#6745）和Sandbox用户配置文件（PR #7214）是当前积压最大、风险中高的核心进展。但值得警惕的是，今日新增的多个**bug_bash_P1**问题（如 #7246、#7247）指向Agent在状态验证上的幻觉问题，稳定性信号分化。整体判断：项目处于功能加速期，但QA反馈密度上升，需要关注质量回摆。

---

## 2. 版本发布

### ironclaw-v1.1.0-rc.1（2026-08-03）

**核心变更：**
- **扩展生态触达**：支持注册任意托管的MCP服务器，可通过IronHub深度链接安装，跨渠道传递持久化文件附件
- **Slack `/ironclaw` 斜杠命令**：新增首个一等公民的Slack集成入口
- **错误可读性全面改进**：对失败路径的日志与提示做了系统性梳理

**破坏性变更与迁移注意：**
- 作为RC候选版本，建议仅在生产前验证环境中试用；如有对接IronHub的部署，需确认深度链接协议兼容性；文件附件跨渠道传递涉及持久化层改动，升级前建议备份现有workspace数据

---

## 3. 项目进展

### 已合并/关闭的重要PR

| PR | 标题 | 要点 |
|---|---|---|
| [#6831](https://github.com/nearai/ironclaw/pull/6831) | feat(reborn): standardized messaging framework | 合并了**标准化消息框架**：16个核心操作、13个保留操作名、规范JSON Schema、12码错误分类法，为宿主级消息契约奠定了基础 |
| [#7261](https://github.com/nearai/ironclaw/pull/7261) | fix(ci): resolve release canary temp path | 修复了tag-only发布流程中canary证据目录的零任务失败问题 |
| [#7196](https://github.com/nearai/ironclaw/pull/7196) | chore(deps): bump the wasm group | wasmtime-wasi 47.0.2→47.0.3 等增量更新 |

**项目整体推进：**
标准化消息框架的落地意味着**宿主与Agent之间的交互协议从"口头约定"走向"机器可验证的契约"**，配合v1.1.0-rc.1的发布，1.1.0在架构层面已不再有尚未闭合的悬空设计。但需关注CI门禁对前端PR的误伤（Issue #7209），这属于流程类技术债，影响开发体验。

### 待合并的关键PR（风险提示）
- [#7214](https://github.com/nearai/ironclaw/pull/7214) feat(sandbox): 显式Docker与Railway用户沙箱配置 — **XL尺寸，风险中等**，但触及多租户隔离，合并后建议优先验证
- [#6938](https://github.com/nearai/ironclaw/pull/6938) fix(skills): 模型选择技能而非关键词打分器 — **XL尺寸**，依赖 #6745，属于技能选择逻辑的方向性变更

---

## 4. 社区热点

### 最热Issue：Configuration-as-Code Epic（#3036）
- **链接**：[Issue #3036](https://github.com/nearai/ironclaw/issues/3036)
- **动态**：创建于2026-04-28，至今7条评论，1个👍，今日仍有更新
- **诉求**：运维人员希望以声明式方式配置IronClaw，当前需要手修 `.env`、`.system/` 文档、settings JSON、扩展安装、运行时flag——无schema、无diff、无审计轨迹。这是一个存在多月的**架构级痛点**，反应了项目从"单机工具"走向"平台"过程中必然出现的配置管理缺口
- **信号**：已被标记为 `reborn` + `epic`，说明团队认领了方向，但尚未进入实施周期

### 最热PR：技能选择机制重构（#6938）
- **链接**：[PR #6938](https://github.com/nearai/ironclaw/pull/6938)
- **诉求**：从"宿主关键词打分"转向"模型主动选择技能"，即把技能调用的决策权从规则打分交给模型自身判断
- **分析**：这一变更与epic #6941（模型自建、自选、自用技能）同向，是**Agent自主性关键一步**。但XL尺寸+风险低（文档范围），说明这是一个"架构上合理、执行上重"的改动

---

## 5. Bug 与稳定性

### P1（严重，需优先处理）

| Issue | 问题描述 | 修复PR |
|---|---|---|
| [#7246](https://github.com/nearai/ironclaw/issues/7246) | **Agent幻觉自动化状态**：声称BTC新闻摘要自动化在运行，实际Automations页面显示"No automations yet" | 无 |
| [#7247](https://github.com/nearai/ironclaw/issues/7247) | **Agent虚假声明GitHub已连接**：未验证实际认证状态即声称无需进一步连接，随后GitHub操作失败 | 无 |

**分析**：这两个bug同源——Agent在未检查真实状态的情况下对外断言。这属于**Agent事实性缺陷**（factuality gap），修复方向大概率在工具调用的前置状态验证逻辑，建议 @ilblackdragon 团队对照 #7246/#7247 的复现环境（Railway测试实例）排查 `reborn_services.rs` 中的状态读取路径。

### P2（中等级）

| Issue | 问题描述 | 修复PR |
|---|---|---|
| [#7249](https://github.com/nearai/ironclaw/issues/7249) | Slack DM执行结果被投递到Telegram聊天 | 无 |
| [#7248](https://github.com/nearai/ironclaw/issues/7248) | **无效MCP端点被接受后导致运行失败**：注册时未做连通性/有效性验证 | 无 |
| [#7250](https://github.com/nearai/ironclaw/issues/7250) | **DeepWiki MCP网络错误时给出误导认证建议**：Agent猜测原因而非报告实际错误 | 无 |
| [#7251](https://github.com/nearai/ironclaw/issues/7251) | **Agent猜测MCP认证类型**：不主动发现或发起认证流，让用户选择 | 无 |

### 回归与CI

| Issue | 问题描述 |
|---|---|
| [#7209](https://github.com/nearai/ironclaw/issues/7209) | **回归测试门禁无法识别 node:assert 风格**，导致正确的前端PR被误杀 |

**修复状态**：以上均为OPEN，无对应fix PR。

---

## 6. 功能请求与路线图信号

### 可能纳入v1.1.0的功能

| Issue/PR | 功能 | 判断 |
|---|---|---|
| [#6731](https://github.com/nearai/ironclaw/issues/6731) | **IronHub集成**：Agent可运行时发现、安装、验证社区工具 | 已在v1.1.0-rc.1中体现（IronHub深度链接），**基本确认纳入** |
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | **共享频道作为外发投递目标**：管理员允许的频道可被Agent用于投递 | 新开，讨论中，风险中等，**可能进入1.1.x** |
| [#7203](https://github.com/nearai/ironclaw/issues/7203) | **虚拟文件系统作为真实挂载点**：技能文件可通过挂载而非复制执行 | 与#7171（PR）强相关，**正在开发中** |
| [#7218](https://github.com/nearai/ironclaw/issues/7218) | **Web调试检查器**：`?debug=true`下可查看prompt构建、token用量、工具执行 | **已有PR #7230（存储层）**，功能本体仍在开发 |

### 长期路线图信号
- **Configuration-as-Code**（#3036）：epic级别，标记为 `reborn` + `suggested_P2`，属中期方向
- **Admin-Managed Agents as UserId Subjects**（#6578）：面向多租户管理员创建非人主体的生态能力，已标记为 `reborn`

---

## 7. 用户反馈摘要

**来自Issue评论与描述的痛点信息：**

- **PDF附件MIME类型错误**（#6257）：用户Michael Kelly在Slack反馈，发送/生成PDF文件时报 `Invalid value (attachments.mime_type)`，怀疑是内容类型嗅探问题。**尽管已开2周，仍无assignee**，建议维护者指派专人跟进
- **Slack反馈线程附加文件无法访问**（#7254）：产品反馈分诊流程中，用户上传报告附件后IronClaw无法读取，**影响用户提供复现材料的体验**
- **MCP端点验证体验**（#7248/#7250/#7251）：用户群体（bug_bash参与者）普遍反映Agent在MCP配置时缺乏**主动验证意识**，倾向猜测而非探测，这在多维QA反馈中形成主题
- **GitHub连接状态误报**（#7247）：用户对"Agent声称已连接但实际未连接"的体验极为挫败，这是信任损耗最直接的一类缺陷
- **评审机制摩擦**（#7231）：社区成员观察到PR评论文本说"APPROVE"但未触发真实GitHub审批，导致PR停滞在合并队列外——这是对协作流程效率的直接投诉

---

## 8. 待处理积压

### 长期未响应/被忽略的重要Issue

| Issue | 问题 | 创建时间 | 备注 |
|---|---|---|---|
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | **PDF附件MIME类型错误** | 2026-07-19 | 已18天无assignee，无workaround，影响文件类工具链使用 |
| [#6578](https://github.com/nearai/ironclaw/issues/6578) | **Admin-Managed Agents作为UserId主体** | 2026-07-23 | 史诗级，仅1条评论，尚未进入任务分解阶段 |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | **Configuration-as-Code** | 2026-04-28 | 3个月+，多评论但无主导者推进 |

### 长期滞留的PR

| PR | 说明 | 创建时间 | 风险 |
|---|---|---|---|
| [#5101](https://github.com/nearai/ironclaw/pull/5101) | ci复用cargo-component安装器 | 2026-06-20 | 已47天未合并，过程风险中 |
| [#7027](https://github.com/nearai/ironclaw/pull/7027) | **禁用环境代理发现** | 2026-08-03 | 安全相关，依赖#7028/#7029堆栈，需加速合并以闭合安全面 |

---

## 项目健康度小结

**积极信号：**
- 版本节奏健康：1.0.0 → 1.1.0-rc.1 间隔合理，RC发布说明清晰
- 架构演进明确：标准化消息框架合并，技能选择权向模型转移，Sandbox多租户隔离落地中
- 社区QA反馈体系有效运作：bug_bash机制能快速暴露真实场景下的Agent行为缺陷

**风险信号：**
- P1级Agent幻觉问题（#7246/#7247）若大面积存在，将直接影响用户对Agent可靠性的信任
- CI门禁误伤前端PR（#7209）若持续，将降低社区贡献者的交付效率
- MCP端点验证缺失可能在新版本中放大（IronHub集成后MCP使用量会上升）

**建议关注优先级：**
1. 修复P1幻觉类bug（#7246/#7247） → 2. 合并#7027（安全） → 3. 指派#6257（PDF MIME） → 4. 修复CI门禁（#7209）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：** 2026-08-06  
**数据窗口：** 过去 24 小时（截至 2026-08-05 23:59 UTC）

---

## 1. 今日速览

LobsterAI 过去 24 小时活跃度维持高位：1 个新版本发布（2026.8.5），13 条 PR 更新中 12 条已合并/关闭，代码合入节奏稳定。Issues 侧新增 2 条由同一用户（fujingzhai）提交的高质量 Bug 报告，均聚焦于系统提示词注入与技能开关失效问题，指向前端配置链路存在设计缺口。值得注意的是，两条已有 4 个月历史的 NIM 超大群 Bug（#1200/#1201）在今日被重新激活但仍未关闭，社区对其修复的呼声值得关注。整体项目健康度良好，核心维护者响应迅速（当日 PR 全量闭环），但需留意用户反馈的系统提示词重复注入与配置持久化问题。

---

## 2. 版本发布

### LobsterAI 2026.8.5（2026-08-05 发布）

**主要变更：**

- **feat(activity):** 新增原生每日签到体验（PR #2408，作者：btc69m979y-dotcom）
- **feat(enterprise):** 隔离账号级认证与服务流程，按账号作用域拆分（PR #2409，作者：liuzhq1986）
- **style:** 样式调整（未详述）

**破坏性变更：** 无明确标注。

**迁移注意事项：** 企业版用户需关注账号作用域隔离后，既有认证与服务调用链路的适配情况，建议在升级后对多账号切换场景进行回归测试。签到功能为新增能力，无需额外配置，但涉及活动入口展示，如有定制化 UI 需求需同步调整。

---

## 3. 项目进展

今日合并/关闭的 12 条 PR 主要集中在**活动系统打磨、窗口生命周期加固、OpenClaw 网关稳定性、协作搜索增强**四个方向：

| 方向 | PR | 内容 |
|---|---|---|
| **活动系统** | [#2439](https://github.com/netease-youdao/LobsterAI/pull/2439)、[#2438](https://github.com/netease-youdao/LobsterAI/pull/2438)、[#2433](https://github.com/netease-youdao/LobsterAI/pull/2433)、[#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | 启动页签到海报连续优化：更新素材、增加关闭图标、裁剪白边、优化失败提示、禁用世界杯决赛奖励自动弹窗。活动系统迭代高频，说明运营侧需求旺盛 |
| **窗口生命周期** | [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) | 修复 OpenAI 兼容代理与 HTML 预览服务器关闭时因 keep-alive 连接挂起导致的应用退出卡死；主窗口激活改为等待首帧渲染完成，避免焦点切换与第二实例启动的竞态 |
| **OpenClaw 网关** | [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) | 修复两个独立竞态导致的单实例锁文件中毒问题（Windows 下强制杀死网关进程可能中断锁文件写入；网关自身重启竞态），避免网关每次重启失败长达 30 秒 |
| **协作搜索** | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) | 标题栏新增对话搜索按钮，复用侧边栏搜索能力，带响应式样式与查询感知导航 |

**综合评估：** 项目横向覆盖"稳定性加固 + 功能迭代 + 运营支持"三层需求，单日 12 条 PR 全量闭环，维护效率优秀。dependabot 批量升级（cross-env、react-dom、vite）也已于今日关闭，技术债清理持续进行中。

---

## 4. 社区热点

今日讨论热度最集中的是 **Issue #2441**（技能开关静默失效 + openclaw.json 被整文件覆盖）与 **#2440**（系统提示词重复注入），均由用户 fujingzhai 于 8 月 5 日提交，虽暂无评论互动，但两条 Issue 内容详实、附有复现路径与实测数据（含字符数统计），专业度极高，且指向同一根因链——**用户无法持久精简每次新对话的系统提示词**。这本质上是"运行时（OpenClaw）与桌面端配置同步机制"的深层设计问题，而非单一 Bug。

此外，**Issue #1200 / PR #1201**（NIM 超大群群名获取失败）虽建于 4 月 1 日，今日被再次更新但无新评论，属"老问题未被遗忘"状态，社区耐心正在消耗。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **高** | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441)：技能开关按目录名写入但 OpenClaw 按 frontmatter name 匹配，开关静默失效；且 openclaw.json 被整文件覆盖，用户无持久精简入口 | 新开，无 fix PR |
| **高** | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440)：桌面端系统提示词重复注入，78% 内容与 AGENTS.md 托管区逐字重复，模型被迫读两遍同一指令 | 新开，无 fix PR |
| **中** | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200)（含 PR [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)）：NIM 超大群 teamTypeNum 硬编码错误（team/p2p 类型号颠倒），导致 @机器人时群名显示为原始 ID 而非真实群名；一行修改即可修复 | 已开 4 个月，PR 待合入 |
| **已修复** | OpenClaw 网关锁文件中毒（PR [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436)）：两个竞态导致网关重启失败长达 30 秒 | 已合并 |
| **已修复** | 应用退出卡死（PR [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437)）：代理与预览服务器 keep-alive 连接阻塞关闭流程 | 已合并 |

---

## 6. 功能请求与路线图信号

- **按账号作用域隔离认证与服务流（已实现）：** PR #2409 已随 2026.8.5 发布，企业多账号场景的配置隔离需求得到响应。
- **对话搜索增强（已实现）：** PR #2435 将搜索入口提升至标题栏，说明团队正在强化"历史会话找回"这一核心交互路径。
- **启动页签到活动持续迭代（进行中）：** 连续 4 条 PR（#2432/#2433/#2438/#2439）打磨签到海报与奖励流程，叠加 #2408 原生签到能力，**活动运营体系**可能是近期产品重点。
- **用户对系统提示词精简的诉求（信号强）：** #2440/#2441 所反映的"每次新对话提示词过于冗长、无法持久裁剪"问题，直接关联 token 成本与响应质量。结合现有 PR 无人触碰此块，**可能成为下一版本的重要优化方向**。

---

## 7. 用户反馈摘要

- **系统提示词膨胀（#2440）：** 用户指出桌面端每条首条用户消息注入的系统指令块中，78% 内容与 AGENTS.md 托管区逐字重复，"等于同一套指令让模型读了两遍"。这不仅是 token 浪费，更可能污染模型对指令的优先级判断。
- **配置无持久化入口（#2441）：** 用户表达的核心痛点在于"**没有任何办法持久地精简进入每次新对话的系统提示词**"——技能开关匹配不一致导致静默失效，openclaw.json 又会被整文件覆盖，个人定制在每次同步后归零。
- **NIM 群名显示异常（#1200）：** 用户场景为云信超大群中 @机器人时名称无法正确显示，"显示为原始 ID 而非真实群名"，影响群聊体验与机器人可用性。

---

## 8. 待处理积压

| 类型 | 编号 | 问题 | 等待时长 | 建议 |
|---|---|---|---|---|
| **Bug（高价值）** | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) + [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | NIM 超大群 teamTypeNum 硬编码错误，一行代码可修，PR 已备好 | **4 个月+** | 强烈建议尽快审合并。老 Issue 被反复提及但无进展，对社区信任有负面影响；修复成本极低 |
| **Bug（高价值）** | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 技能开关静默失效 + openclaw.json 被覆盖 | 1 天 | 新开且无 PR，但涉及配置同步架构，建议尽早排期评估 |

---

**项目健康度总评：** ⭐⭐⭐⭐☆（4.5/5）  
- 正向：PR 闭环速度极快、发布节奏稳定（约每 2-3 日一版）、社区 Bug 报告质量高
- 风险：NIM 群名 Bug 积压 4 个月未合入（一行修复）、系统提示词重复注入可能引发 token 成本争议（该问题影响所有桌面端用户）、依赖升级 PR（#1279-1281）均为停更多月后的大版本跃迁（如 vite 5→8），建议关注兼容性回归

> 数据截至 2026-08-05 23:59 UTC。所有链接可直接访问对应 GitHub Issue/PR 详情页。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-06

> 项目代号：CoPaw（github.com/agentscope-ai/CoPaw）  
> 数据窗口：2026-08-05 ~ 2026-08-06（过去 24 小时）

---

## 一、今日速览

过去 24 小时 CoPaw 项目保持**高度活跃**：共产生 22 条 Issue 更新（14 条活跃 / 8 条关闭）和 50 条 PR 更新（28 条待合并 / 22 条已合并或关闭），日 PR 密度处于近期高位。**稳定性问题与能力增强两条主线并行推进**——一方面长会话工具调用报错（#6726）、MCP 工具规律性失效（#6732）、SSE 流内错误不重试（#6708）等一批影响真实用户的关键 Bug 被密集上报，且均有对应修复 PR 在途；另一方面模型自动路由（#6436）、Live artifact canvas（#6730）、用户上下文透明穿透（#6525）等功能请求和实现持续涌出，开发者生态活跃度显著。**值得注意的是，今日社区反馈高度集中于 Windows 桌面端体验细节**（#6452、#6413、#6587、#6734、#6736 均为同一用户 rerbin 提出的 UI 优化建议，且一半已关闭），侧面反映桌面客户端用户基数正在扩大，并已形成持续反馈的忠实用户群体。整体项目健康度**良好**，但 Bug 闭环速度（24h 内 8/22 闭环）仍有提升空间。

---

## 二、项目进展

今日无新版本发布。以下展示今日**合并或关闭**的核心 PR，以及它们对项目产生的影响：

| PR | 标题 | 状态 | 影响 |
|----|------|------|------|
| [#6701](https://github.com/agentscope-ai/CoPaw/pull/6701) | fix(website): website add blog | ✅ 已合并 | 官网新增博客板块，文档与内容生态完善 |
| [#6670](https://github.com/agentscope-ai/CoPaw/pull/6670) | docs(checkpoint): add checkpoint usage documentation in commands page | ✅ 已合并 | 将 checkpoint（快照/回滚）用法整合进 Magic Commands 文档页，降低用户学习成本 |
| [#5598](https://github.com/agentscope-ai/CoPaw/pull/5598) | feat(console): add LLM fallback configuration UI | ✅ 已合并 | Agent 级与全局 LLM 模型回退配置 UI 落地，配合后端逻辑形成完整闭环（历时 37 天，属长周期大型功能） |
| [#5597](https://github.com/agentscope-ai/CoPaw/pull/5597) | feat(backend): per-agent and global LLM model fallback | ✅ 已合并 | 后端模型回退机制正式生效：主模型重试耗尽后按配置自动切换备用模型 |
| [#6675](https://github.com/agentscope-ai/CoPaw/pull/6675) | fix: force relay reasoning_content for DeepSeek models (fixes #6667, #6541) | ✅ 已合并 | 修复 DeepSeek 思维链模式多轮对话中 `reasoning_content` 缺失导致的 400 报错，是社区呼声最高的修复之一 |
| [#3874](https://github.com/agentscope-ai/CoPaw/pull/3874) | feat(model): refine retry logic | ✅ 已合并 | 重试逻辑细化（历时 100 天终闭环），为后续 SSE 流内错误重试（#6714）等修复铺路 |

**里程碑意义**：`#5597/#5598` 的合并标志着 LLM 模型回退从单一 PR 变成了完整的用户可见功能——Agent 级和全局级均可配置，且回退边界明确（同模型内重试、失败后才切备份）。这是自 2.0 大版本以来**首个跨前后端完整闭环的稳定性增强功能**，意义重大。

另有 [#6504](https://github.com/agentscope-ai/CoPaw/pull/6504)（统一项目目录解析与文件工作区）、[#6525](https://github.com/agentscope-ai/CoPaw/pull/6525)（用户上下文穿透 Chat API → Agent → Tool → MCP → SKILL CLI）两个大型功能 PR 正在推进中，虽未合并但持续收到更新，值得关注。

---

## 三、社区热点

### 1. 思维链兼容性引发高频讨论

[#6707](https://github.com/agentscope-ai/CoPaw/issues/6707)（thinking-mode 上游要求 `reasoning_content` 回传，工具调用历史导致 400）与刚合并的 #6675 形成了 **Issue → PR → 合并**的完整闭环，是今日社区讨论的焦点之一。多个使用者反馈在 DeepSeek / Kimi 等推理模型上遇到同类问题，说明**推理模型与工具调用的组合正成为主流使用模式**，而框架在此场景的兼容性仍存在短板。

### 2. 长会话 + 大量工具调用 = 稳定性黑洞

[#6726](https://github.com/agentscope-ai/CoPaw/issues/6726)（长会话大量工具调用后 400 报错）、[#6700](https://github.com/agentscope-ai/CoPaw/issues/6700)（超大工具输出导致会话加载卡死）和 [#6707](https://github.com/agentscope-ai/CoPaw/issues/6707) 共同描绘出一个典型的高压场景：**真实用户正在用 CoPaw 做长时间、重工具调用的自动化任务**（20~30+ 轮工具往返），而这个场景暴露了协议边界、上下文窗口、渲染性能等多个层面的问题。三者中 #6700 已关闭、#6707 引发的 #6721 修复 PR 在途、#6726 仍待处理。

### 3. 中国开发者高频提交 UI 打磨建议

用户 rerbin 在 24 小时内连开 4 个 UI 优化 Issue（#6734、#6736、#6452、#6413、#6587、#6454），覆盖会话标题、菜单命名、多模态提示、复制菜单、应用名等细节，其中 4 个已关闭。同一用户的多条建议被快速采纳或妥善处理，**说明维护者对中国用户的使用习惯和桌面端体验高度重视**，也反映出 Windows 桌面包在 2.1 beta 阶段用户参与度高。

---

## 四、Bug 与稳定性

按严重程度排列（🔴 严重 / 🟠 中等 / 🟡 轻微）：

### 🔴 严重（阻塞正常使用）

| Issue | 描述 | 状态 | 对应修复 PR |
|-------|------|------|------------|
| [#6731](https://github.com/agentscope-ai/CoPaw/issues/6731) | `execute_shell_command` 在模型传入 `sandbox_config` 参数时必崩（`replace() should be called on dataclass instances`），2.0.1 和 main 分支均受影响 | Open · 1 评论 | 暂无 |
| [#6732](https://github.com/agentscope-ai/CoPaw/issues/6732) | MCP 工具每隔数小时规律性失效，重启 Docker 容器后恢复 | Open · 2 评论 | 暂无 |
| [#6726](https://github.com/agentscope-ai/CoPaw/issues/6726) | 长会话 + 20~30+ 工具调用后 400 "tool must follow tool_calls"，会话中断 | Open · 2 评论 | 暂无 |
| [#6707](https://github.com/agentscope-ai/CoPaw/issues/6707) | thinking-mode 上游下历史含工具调用的会话请求 400 | Open · 1 评论 | [#6721](https://github.com/agentscope-ai/CoPaw/pull/6721)（在途） |

### 🟠 中等

| Issue | 描述 | 状态 |
|-------|------|------|
| [#6708](https://github.com/agentscope-ai/CoPaw/issues/6708) | SSE 流内 503 错误不触发重试，直接失败 | Open · 1 评论 → 已有 [#6714](https://github.com/agentscope-ai/CoPaw/pull/6714) 修复 PR |
| [#6722](https://github.com/agentscope-ai/CoPaw/issues/6722) | 后台 fork 子代理 worktree 失败但上报 completed | Open · 1 评论 → 已有 [#6725](https://github.com/agentscope-ai/CoPaw/pull/6725) 修复 PR |
| [#6480](https://github.com/agentscope-ai/CoPaw/issues/6480) | `nohup`/`&` 脱离命令让 agent 永久卡住不返回 idle | Open · 2 评论（12 天未关闭） |
| [#6690](https://github.com/agentscope-ai/CoPaw/issues/6690) | `cron pause/resume` 状态不持久化，重启丢失（已关闭，修复完成） | ✅ 已关闭 |

### 🟡 轻微

- [#6716](https://github.com/agentscope-ai/CoPaw/issues/6716)：集成测试 `test_auto_update_persists_targets` 确定性失败（KeyError），影响 nightly 测试覆盖——已标记为 invalid 关闭，但修复 PR [#6729](https://github.com/agentscope-ai/CoPaw/pull/6729) 和 [#6727](https://github.com/agentscope-ai/CoPaw/pull/6727)（Windows 路径匹配修复，解除 66 个测试静默跳过）正在推进。

**今日亮点**：绝大多数严重 Bug 均已有对应修复 PR 在途（#6721、#6714、#6725），但 **#6731、#6732 和 #6726 目前还没有任何关联修复 PR**，是值得优先关注的风险点。

---

## 五、功能请求与路线图信号

### 高潜力候选（已有 PR 或强社区信号）

| Issue | 功能 | 信号强度 |
|-------|------|---------|
| [#6436](https://github.com/agentscope-ai/CoPaw/issues/6436) | **自动模型路由**：简单对话走小模型、图片走视觉模型、难题走大模型 | 中——暂无 PR，但与 LLM fallback 方向一致，可能纳入后续版本 |
| [#6724](https://github.com/agentscope-ai/CoPaw/issues/6724) | **MCP 工具调用超时配置**（per-client + call-level guard） | 高——直击 MCP 卡死无超时的痛点，代码层面已有明确方案 |
| [#6730](https://github.com/agentscope-ai/CoPaw/issues/6730) | **Live artifact canvas**：Console 侧栏渲染 agent 生成的 HTML 产物 | 中——用户希望不离开聊天就能查看仪表盘/报告/交互演示 |

### 低风险 / 已明确拒绝的

- [#6392](https://github.com/agentscope-ai/CoPaw/issues/6392)（智能体级 token 统计）——已关闭，维护者未明确表态是否在路线图内
- [#6717](https://github.com/agentscope-ai/CoPaw/issues/6717)——测试巡逻机器人发布的测试 Issue，已明确为测试用途

### 路线图信号解读

今日用户反馈中值得注意的有两点：一是 **MCP 相关的问题密度最高**（#6732 失效、#6724 超时、#6726 工具调用堆叠），MCP 生态已成为 CoPaw 的核心扩展路径但稳定性仍是短板；二是 **UI 体验的精细化打磨正在 2.1 beta 阶段快速增长**（单日 4 个 UI 优化 Issue），说明项目已由功能驱动阶段过渡到体验打磨阶段。

---

## 六、用户反馈摘要

### 来自 Issues 与评论的真实声音

- **长会话工具调用的稳定性令人担忧**（#6726）："In a long console-channel session where the agent made a large number of tool calls (up to 20-30+ tool_call/tool_result pairs accumulate)"——用户正在用 CoPaw 执行真正复杂的自动化任务，而框架在长上下文 + 工具调用边界的处理上还不够健壮。

- **MCP 服务的可靠性影响信任**（#6732）："每隔一些时间 mcp 工具就无效了，没法自动被调用，答复未注册或者不存在，重启 qwenpaw docker 容器后就能恢复"——MCP 工具"检测不到"但"重启就好"的间歇性故障，让用户无法放心依赖 MCP 生态。

- **桌面端 UI 细节反馈密集且具体**（#6734、#6736 等）："新聊天改称新任务更合适"、"会话标题自动提取机制粗糙，难以理解"——同一用户对 2.1 beta1 的 UI 细节给出了高密度质量反馈，同时早期反馈（#6452、#6413、#6587、#6454）已被快速关闭，表明项目对用户建议的响应速度是令人满意的。

- **超大工具输出破坏会话加载**（#6700）："某次工具调用产生异常大的输出时，页面可能长时间无响应甚至卡死，导致无法继续使用该对话"——缺少输出截断和历史消息分页机制，已关闭但未说明修复方案。

---

## 七、待处理积压

### 长期未关闭的严重 Bug

| Issue | 创建时间 | 等待天数 | 描述 |
|-------|---------|---------|------|
| [#6480](https://github.com/agentscope-ai/CoPaw/issues/6480) | 2026-07-26 | 11 天 | `execute_shell_command` 执行 `nohup`/`&` 命令后 agent 永不返回 idle——阻塞类问题，影响 shell 工具的核心使用体验 |
| [#6413](https://github.com/agentscope-ai/CoPaw/issues/6413) | 2026-07-24 | 13 天 | "完整模式" UI 概念混乱（已关闭，但 2.1 beta1 中仍被用户引用） |

### 值得关注的大型 PR

| PR | 创建时间 | 等待天数 | 描述 |
|----|---------|---------|------|
| [#6504](https://github.com/agentscope-ai/CoPaw/pull/6504) | 2026-07-27 | 10 天 | 统一项目目录解析与文件工作区，涉及面广，持续收到更新但未合入 |
| [#6525](https://github.com/agentscope-ai/CoPaw/pull/6525) | 2026-07-28 | 9 天 | 用户上下文透明穿透（Chat API → Agent → Tool → MCP → SKILL CLI），已持续更新 |

### 观察

- **#6480 是悬置时间最长的严重 Bug**（11 天无修复 PR），阻塞命令行工具的核心场景，建议维护团队优先介入。
- 三个老 PR（#5598/#5597/#3874）今日最终合并，说明**长周期 PR 的合入节奏正在加快**（从数周到上百天），部分受限于测试覆盖和 review 人力。
- Windows 测试覆盖问题（#6727）的修复同日合入后，**后续集成测试的可信度将显著提升**，有望加快 PR 合入速度。

---

## 附：数据汇总

- 新开/活跃 Issues：14 / 关闭 8
- 待合并 PR：28 / 已合并+关闭 22
- 新版本：0
- 最活跃贡献者（今日）：rerbin（4 Issues）、ChaosG（3 Issues）、qbc2016（3 PRs）、rayrayraykk（2 PRs）

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是 2026-08-06 的 ZeroClaw 项目动态日报。

---

## ZeroClaw 项目动态日报 — 2026-08-06

### 1. 今日速览

ZeroClaw 项目今日处于高活跃度状态，但面临显著的维护瓶颈。过去24小时内，Issue 和 PR 更新均达到 50 条，然而最终合并/关闭的 PR 仅有 1 个，这可能导致大量工作积压。当前讨论焦点高度集中在 **RFC（Request for Comments）** 上，涉及身份验证、工具安全策略、会话管理等核心架构领域，表明项目正处在重要的架构演进和加固阶段。虽然社区参与度极高，但达成共识和代码合并的速度可能会成为近期项目健康度的主要观察指标。

### 2. 版本发布

过去 24 小时内无新版本发布。

---

### 3. 项目进展

今日有 1 个 PR 被合并/关闭，同时有多个关键 PR 处于开放状态并积极推进，项目整体处于“讨论/评审海啸”中，落地的代码变更相对较少。

- **合并/关闭的 PR:**
    - **PR #9750** [已关闭]：`fix(service): bound launcher-owned daemon logs`。该 PR 旨在限制由启动器持有的守护进程日志大小，防止无限增长。它被关闭可能意味着其功能已被 **PR #9773** `fix(service): bound launchd daemon logs` 所取代或改进（PR #9773 专门针对 macOS launchd 进行了绑定日志处理，可能是一个更具体的后续解决方案）。

- **推进中的关键修复 PR（高风险，需重点关注）：**
    - **PR #9781** `fix(runtime): validate WebAuthn assertion data`：来自核心贡献者 Audacity88，旨在修复 WebAuthn 断言验证中的安全漏洞，通过检查长度、RpIdHash 和 User Present 标志来增强安全性。
    - **PR #9723** `fix(tool-call-parser): parse DeepSeek DSML and <|tool_call|> envelopes`：修复 DeepSeek 模型工具调用格式的解析，提升模型兼容性。
    - **PR #9777** `fix(channels): accept Signal source UUID senders`：修复 Signal 频道对使用 UUID 而非电话号码的发送者的识别问题。

**总结：** 除一个日志修复被关闭外，今日没有重大功能合并。但多个高优先级修复 PR 正处于活跃的评审和更新状态，表明代码推进工作仍在进行，只是速度受限于评审资源。

---

### 4. 社区热点

今日讨论热度最高的议题均围绕架构决策（RFC），反映了社区对项目未来方向的深度参与和高期待，但也可能意味着决策过程会相对缓慢。

1.  **RFC: Work Lanes, Board Automation, and Label Cleanup (Issue #6808)** — **18条评论**，持续更新中。
    - **诉求：** 这是一项治理和流程改进提案，旨在通过引入“工作车道”和自动化来优化项目本身的维护效率。这一 RFC 从 5 月持续至今，热度不减，反映出社区对项目走向成熟化、规范化的强烈诉求。

2.  **RFC: Goal mode v1 — bounded foreground Matrix work (Issue #8303)** — **18条评论**。
    - **诉求：** 用户 (`vrurg`) 提出需要一种持久化的方式，让 Agent 能在多个对话轮次中追求一个有界的目标，而不仅仅是一次性的响应。这指向了对 ZeroClaw 作为自主 Agent 框架更高层次能力的期望。

3.  **RFC: ZeroClaw Chat Completions profile (Issue #8603)** — **16条评论**。
    - **诉求：** 期望 ZeroClaw 能够兼容 OpenAI Chat Completions 协议，以便无缝接入 Open WebUI、LobeChat、Aider 等生态工具。这代表了用户对于互操作性和生态集成的主流呼声。

4.  **RFC: Add a per-execution confirmation tier for high-risk shell commands (Issue #7155)** — **16条评论**。
    - **诉求：** 在安全与易用性之间寻找平衡。社区希望引入类似 Claude Code 的 (allow/ask/deny) 策略，对高风险 shell 命令进行分级确认，以增强用户对 Agent 的控制感和安全性。

**分析：** 社区热点集中在**安全加固**、**架构扩展**和**标准协议兼容**三大方向。用户不再满足于基础功能，而是期待 ZeroClaw 成为一个更安全、更可控、生态兼容性更强的专业级 Agent 平台。

---

### 5. Bug 与稳定性

今日报告的 Bug 数量多且严重级别高，主要集中在安全性（S1/S2）和运行时稳定性方面。

- **严重问题 (S1 - 工作流阻塞)：**
    - **Issue #9775** `[Bug]: OpenRouter streaming requests drop provider_extra`：`stream_chat` 路径未调用 `merge_extra_body`，导致所有配置的 `provider_extra` 参数（如缓存指令）在流式请求中丢失。这是一个明确的功能缺陷，且会导致用户成本增加或功能失效。目前未有对应 fix PR。

- **中等问题 (S2 - 行为降级 / 安全风险)：**
    - **Issue #9328** `[Bug]: verifiable-intent evaluates constraints without verifying the credential chain`（已接受）：安全校验逻辑存在缺陷，可能导致未经验证的凭证通过检查。
    - **Issue #9768** `[Bug]: daemon reload is not on SIGUSR1...`：文档和实际行为不符，提示发送的信号会杀死守护进程，可能导致用户误操作。已有一个对应的修复 PR **#9773** (launchd logs)。
    - **Issue #9697** `[Bug]: ZeroCode cannot connect to daemon launched by Windows Task Scheduler`：在 Windows 特定场景下的连接问题，影响特定用户群。

- **其他值得关注的问题：**
    - **Issue #8642** `[Bug]: MCP/tool-schema cloning drives unbounded RSS growth`（已接受）：这是一个关键的内存泄漏问题，被从 #5542 中拆出跟踪，可能存在 OOM 风险。目前没有可见的修复 PR。

**修复 PR 情况概览**：今日有多个针对 Bug 的修复 PR 处于开放状态，包括：**PR #9737** (pipelines 中未执行 agent 策略，安全风险)、**PR #9678** (Git 安全策略参数加固)、**PR #9748** (过期的 provider 刷新覆盖新会话) 等。这些 PR 大多标记为 `needs-author-action`，等待作者回应评审意见或进行更新。

---

### 6. 功能请求与路线图信号

尽管近期无新版本发布，但海量的 RFC 和功能请求为下一版本的路线图提供了强烈信号。

- **高概率纳入下个版本的功能：**
    - **插件拥有的 Kanban 看板 (Issue #8832)**：这项提案很可能会被采纳，为多 Agent 协作和工作流管理提供可视化和协调手段，扩展 ZeroClaw 在复杂任务处理方面的能力。
    - **OpenRouter `session_id` 支持 (Issue #9631)**：这是一个呼声很高的优化请求，通过向 OpenRouter 发送稳定 `session_id` 来利用其 prompt caching 机制，能显著降低成本。该功能逻辑清晰，实现路径明确，有望尽快落地。
    - **OpenAI Chat Completions 兼容层 (Issue #8603)**：虽然涉及架构变更，但该功能是连接庞大生态的关键一步，可能作为里程碑特性逐步推进。

- **可能成为重大架构演进的方向：**
    - **运行时拥有的会话与会话传输适配器 (Issue #9487)** 和 **统一的包/能力/配置目录 (Issue #9346)**：这些都属于基础架构层面的重构，标志着 ZeroClaw 正从单体应用向更模块化、可插拔的架构演进。这些 RFC 处于早期讨论阶段，短期难以落地，但指明了长期发展方向。

---

### 7. 用户反馈摘要

- **痛点：互操作性与生态隔离。** 用户在 **Issue #8603** 中强调，无法使用 OpenAI 生态下的成熟客户端（如 Open WebUI， Aider）是主要的迁移障碍。他们希望 ZeroClaw 能更好地融入其现有的开发工具链。
- **安全性与控制感的矛盾。** **Issue #7155** 的讨论表明，用户希望有更精细的权限控制（如分级确认）。同时，**Issue #8424** 关于 `.zeroclawignore` 的请求则体现出用户对 Agent 误操作敏感文件的担忧，希望能在工作区内也设置安全边界。
- **成本敏感性。** **Issue #9631** 对 OpenRouter 缓存的需求非常具体，用户明确指出了“不必要的昂贵”问题，并详细描述了由于缓存未命中导致的重复 token 消耗。这表明用户对 API 成本非常敏感，并希望项目方能提供优化的解决方案。
- **对文档和实际行为一致性的要求。** 多个 Bug（如 **Issue #9768** 关于信号，**Issue #9779** 关于 `sops_dir` 默认值）都指出文档描述与实际行为不符，且失败时无提示。用户不仅希望功能可用，更希望系统在各个边界条件下行为可预期、可诊断。

---

### 8. 待处理积压

以下问题长期未得到有效解决或处于停滞状态，需要维护者关注。

- **高优且长期未决：**
    - **Issue #8642** `[Bug]: MCP/tool-schema cloning drives unbounded RSS growth`：这是一个严重的内存泄漏问题，可能影响所有使用 MCP 工具的实例，社区已在其父 issue 中多次报告 OOM，需优先处理。
    - **Issue #6350** `[Bug]: WhatsApp Web — allowed-numbers bypassed...`（已关闭，但历史问题）：该问题虽然已关闭，但需要在后续版本中集成回归测试，防止再次出现。

- **等待作者回应的开放 PR（`needs-author-action`）：**
    - **PR #9723** `fix(tool-call-parser): parse DeepSeek...`：对应严重的模型解析兼容性问题。
    - **PR #8713** `fix(tools): add allowed_private_hosts opt-in...` 和 **PR #8826** `fix(tools): gate image_gen download URL against SSRF`：两个 SSRF 安全加固补丁，等待作者回应。
    - **PR #9428** `fix(channels): require sender authorization for Bluesky and Reddit`：修复两个频道的授权缺失问题，等待作者更新。
    - **PR #8928** `feat(zerocode): show active resolved log path...`：提升诊断能力的 UI 改进，等待作者更新。

- **需要维护者决策的 RFC 队列：** **Issue #8692** 跟踪器明确指出，有大量 RFC 需要维护者决定是否接受、拒绝或延迟。这包括 `#6808`、`#8303`、`#7155` 等评论数众多、社区期望高的重要提案。维护者需要尽快安排审查以避免社区热情降温。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*