# OpenClaw 生态日报 2026-08-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-08 01:45 UTC

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

# OpenClaw 项目动态日报 — 2026-08-08

## 1. 今日速览

项目在过去24小时内保持**极高活跃度**：共有 500 条 Issue 更新（新开/活跃 470 条，关闭 30 条）和 500 条 PR 更新（待合并 412 条，合并/关闭 88 条）。值得关注的是，**P0 级严重 Bug 数量居高不下**——数据库损坏、内存泄漏、状态迁移失败等基础稳定性问题持续占据头条。社区讨论热度集中在**会话状态管理**、**数据安全**与**消息丢失**三大主题。今日无新版本发布，但已有 PR #120375 准备 2026.8.1 版本发布，项目正处于大版本发布前的**冲刺与稳定化阶段**。


## 2. 版本发布

过去 24 小时内无新版本发布。但值得注意：PR [#120375](https://github.com/openclaw/openclaw/pull/120375) 已准备 `2026.8.1` 发布（当前为 `2026.7.2`），涉及根包、macOS、package 及插件元数据的版本对齐，意味着新一轮发布即将到来。


## 3. 项目进展

今日合并/关闭了 88 个 PR，标志着多项重要功能推进。以下为关键亮点：

- **MedIA 标记静默失败修复**（[PR #80396](https://github.com/openclaw/openclaw/pull/80396)）：当 LLM 在代码块中包裹 `MEDIA:` 标记时，跳过提取虽符合设计但造成用户困惑，新增警告提示。解决 UX 摩擦。
- **Ollama 编码健壮性修复**（[PR #120240](https://github.com/openclaw/openclaw/pull/120240)）：拒绝 stream NDJSON 中的非法 UTF-8，修复了损坏内容被静默替换为替换字符（`h\uFFFDto`）的问题。
- **Gateway 群聊头像刷新**（[PR #120381](https://github.com/openclaw/openclaw/pull/120381)）：修复 attributed chat messages 中旧发送者头像残留问题。
- **Slack Enterprise Grid 多工作区支持**（[PR #120087](https://github.com/openclaw/openclaw/pull/120087)）：事件可保留工作区归属，支持正确路由到对应团队范围的 Slack 客户端。解决企业级部署的关键缺口。
- **macOS 实时语音 Gateway 中继**（[PR #118499](https://github.com/openclaw/openclaw/pull/118499)）：提取 iOS Gateway-relay 实时 Talk 会话到 `OpenClawKit`，macOS 获得同等能力。
- **Codex 实时语音绑定现有会话**（[PR #119001](https://github.com/openclaw/openclaw/pull/119001)）：Discord 语音现可绑定 Codex Realtime V3 到已路由的 OpenClaw 会话，保留原生线程的实时上下文。

此外，维护者 steipete 的 [PR #120362](https://github.com/openclaw/openclaw/pull/120362) 为 session 和 Workboard 管理的工作树生命周期补齐了 QA 覆盖，[PR #113902](https://github.com/openclaw/openclaw/pull/113902) 确保卸载的 npm 插件不会在下次 CLI 启动时被自动加载。


## 4. 社区热点

**🥇 [#116277 DeepSeek v4 Flash 静默回复失败](https://github.com/openclaw/openclaw/issues/116277)** — 129 条评论
最高热度。用户 `sloptop-the-terrible` 报告 DeepSeek v4 Flash 在 Telegram 群组消息中静默失败，仅输出通用 fallback "No reply was generated"。被标记为 P1、"diamond lobster" 级。社区共鸣强烈，反映 LLM 提供商故障时的降级体验是普遍痛点。

**🥈 [#116201 Realtime 语音会话状态无限增长](https://github.com/openclaw/openclaw/issues/116201)** — 59 条评论
用户 `vincentkoc` 指出实时语音会话在慢速/突发 provider 行为下可无限保留 consult 状态、provider 帧和预就绪音频。P1 + maintainer 关注，表明实时语音的资源边界缺失是架构级问题。

**🥉 [#7707 记忆信任标签 (Memory Trust Tagging)](https://github.com/openclaw/openclaw/issues/7707)** — 29 条评论
自 2 月以来持续活跃的功能请求，要求按来源（用户命令 vs 网页抓取 vs 第三方技能）为记忆条目打信任标签。社区对**记忆投毒攻击**的担忧强烈，该 issue 已积累 29 条评论并持续获得维护者关注（needs-security-review）。

**📈 其他热门议题：**
- [#77598 Pash 开发代理行为观察](https://github.com/openclaw/openclaw/issues/77598) — 23 条评论，社区对实时代理行为的监控记录
- [#91588 Gateway 内存泄漏至 15.5GB](https://github.com/openclaw/openclaw/issues/91588) — 22 条评论，P0 级严重问题
- [#22438 分层引导文件加载](https://github.com/openclaw/openclaw/issues/22438) — 18 条评论


## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|---------|-------|------|---------|
| **P0** | [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败：`no such column: entry_valid`，gateway 拒绝启动 | 已有 open PR |
| **P0** | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动预检可损坏运行中 gateway 的 SQLite 状态库（4 次损坏） | ⚠️ 无 fix PR |
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏：RSS 从 350MB 增长至 15.5GB，反复 OOM | ⚠️ 无 fix PR |
| **P0** | [#118772](https://github.com/openclaw/openclaw/issues/118772) | 2026.7.1+ 嵌入代理 `sessionEntry.totalTokens` 膨胀，4-8% 上下文即触发过早压缩（数据丢失） | 已有 open PR |
| **P1** | [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动从 beta.1 到 beta.7 回归 2.5x（1-vCPU 容器） | ⚠️ 无 fix PR |
| **P1** | [#116022](https://github.com/openclaw/openclaw/issues/116022) | beta.5 `/new` 复用稳定会话 ID，无法恢复已退役的 Codex 绑定 tombstone | ⚠️ 无 fix PR |
| **P1** | [#99586](https://github.com/openclaw/openclaw/issues/99586) | 与 gateway 交互后运行时工具面返回空白 body，仅容器重启可短暂清除 | ⚠️ 无 fix PR |
| **P1** | [#109145](https://github.com/openclaw/openclaw/issues/109145) | Gateway HTTP 服务器监听但不接受连接（v2026.7.1-beta.5） | ⚠️ 无 fix PR |
| **P1** | [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 被拒 "thread switched branches"——stale `expectedLeafEntryId` 未刷新 | ⚠️ 无 fix PR |
| **P1** | [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback 在 gateway 重启后不自动重连；`recovered=1` 误导 | ⚠️ 无 fix PR |
| **P2** | [#51429](https://github.com/openclaw/openclaw/issues/51429) | **用户工作路径被 hardcode（`/Users/wangtao`）合并并发布** | ⚠️ 无 fix PR |
| **P2** | [#74378](https://github.com/openclaw/openclaw/issues/74378) | Windows 上 CLI 命令执行后残留 `node.exe` 进程 | ⚠️ 无 fix PR（已加入 recovery-stuck） |


## 6. 功能请求与路线图信号

**高潜力的功能请求（社区需求强烈 + 已有实现方向）：**

- **#7707 记忆信任标签** — 社区呼声极高，已有 `needs-product-decision`，预计进入路线图。与 AI 安全大趋势强相关。
- **#78308 MCP 工具调用的渠道审批信封** — 将 `shell-exec` 已有的 `/approve <id>` 审批管线扩展至 MCP 工具。与 GPT-5 级别 agent 的工具安全讨论同频。
- **#45608 预重置记忆刷新** — `/new` 与每日重置前应执行与压缩前相同的静默记忆刷新。已有 4 个 👍。
- **#35203 多代理协作增强** — 能力画像 + 共享黑板 + 分层记忆 + Token 成本治理。
- **#13219 按模型使用量日志** — 成本跟踪需求持续累积。

**可能纳入 v2026.8.x 的特性（已有对应 open PR）：**

- **macOS/Android 实时语音**（[PR #118499](https://github.com/openclaw/openclaw/pull/118499)、[PR #119001](https://github.com/openclaw/openclaw/pull/119001)、[PR #120389](https://github.com/openclaw/openclaw/pull/120389)）— 多端扩展实时语音能力
- **Slack Enterprise Grid 多工作区路由**（[PR #120087](https://github.com/openclaw/openclaw/pull/120087)）— 企业级部署刚需
- **Signal 账号链接**（[PR #119344](https://github.com/openclaw/openclaw/pull/119344)）— 原生 `signal-cli link` 适配层
- **梦日记 i18n**（[PR #119723](https://github.com/openclaw/openclaw/pull/119723)）— 多语言用户体验改进


## 7. 用户反馈摘要

**核心痛点：**

1. **消息静默丢失是最突出的信任危机** — [#116277](https://github.com/openclaw/openclaw/issues/116277) 中 DeepSeek v4 Flash 静默失败且仅输出通用 fallback；[#86012](https://github.com/openclaw/openclaw/issues/86012) LINE 渠道因 reply token 过期而静默丢消息；[#90789](https://github.com/openclaw/openclaw/issues/90789) claude-cli 的合成占位消息导致 Telegram 静默无响应。**用户反复强调：宁要明确的失败，也不要看似成功的静默。**

2. **配置/工作路径被硬编码且合入发布**（[#51429](https://github.com/openclaw/openclaw/issues/51429)）— 用户发现代码硬编码了某位开发者的工作路径并已发布。这直接冲击用户对项目代码审查质量的信任。

3. **上下文/Token 浪费** — [#67419](https://github.com/openclaw/openclaw/issues/67419) 指出 bootstrap 文件每轮重新注入，浪费 20-30% Token；[#22438](https://github.com/openclaw/openclaw/issues/22438) 提出分层加载方案。用户对成本敏感度持续提高。

4. **Gateway 稳定性问题反复出现** — 内存泄漏（[#91588](https://github.com/openclaw/openclaw/issues/91588)）、监听不接连接（[#109145](https://github.com/openclaw/openclaw/issues/109145)）、冷启动回归 2.5x（[#119087](https://github.com/openclaw/openclaw/issues/119087)）。用户 `petercheng` 的描述："RSS 从 350 MB 增长至 15.5 GB 后被杀" 极具代表性。

**正面反馈信号：**

- 多代理工作树生命周期、语音能力扩展等工作获得认可，PR #120362 的 QA 覆盖建设受到肯定。
- 维护者 steipete 在 WebChat canvas、UI 状态清理等方面的快速迭代展现了项目对细节体验的关注。


## 8. 待处理积压

**长期未响应/未解决的重要 Issue：**

| Issue | 创建时间 | 优先级 | 状态 | 说明 |
|-------|---------|--------|------|------|
| [#91588 Gateway 内存泄漏](https://github.com/openclaw/openclaw/issues/91588) | 2026-06-09 | P0 | ⚠️ 无 fix PR | 近 2 个月未解决，影响所有长跑部署 |
| [#101290 CLI 预检损坏 SQLite](https://github.com/openclaw/openclaw/issues/101290) | 2026-07-07 | P0 | ⚠️ 无 fix PR | 数据损坏级 Bug，尚未有修复方案 |
| [#51429 硬编码工作路径](https://github.com/openclaw/openclaw/issues/51429) | 2026-03-21 | P2 | ⚠️ 无 fix PR | 信任危机级问题，4.5 个月未处理 |
| [#49876 Cron 会话输出幻觉](https://github.com/openclaw/openclaw/issues/49876) | 2026-03-18 | P1 | ⚠️ 无 fix PR | 信任与安全问题，近 5 个月未闭环 |
| [#85030 MCP 工具未注入子代理](https://github.com/openclaw/openclaw/issues/85030) | 2026-05-21 | P1 | ⚠️ 无 fix PR | 功能与预期不符，6 个 👍 |
| [#74378 Windows node.exe 残留](https://github.com/openclaw/openclaw/issues/74378) | 2026-04-29 | P2 | ⚠️ recovery-stuck | 3.5 个月未解决、已标记 recovery-stuck |
| [#109145 Gateway 监听不连接](https://github.com/openclaw/openclaw/issues/109145) | 2026-07-16 | P1 | ⚠️ 无 fix PR | 版本级 Bug，影响所有 HTTP API 用户 |
| [#75480 provider-payload.jsonl 无限增长](https://github.com/openclaw/openclaw/issues/75380) | 2026-05-01 | P1 | ⚠️ 无 fix PR | 磁盘占满风险 + 敏感数据泄露风险 |

---

**总体评估：** OpenClaw 社区高度活跃，功能迭代速度令人印象深刻（尤其是语音、多平台扩展），但 **P0/P1 级稳定性问题的大量积压**（特别是数据库完整性、内存泄漏、消息静默丢失）正在消耗用户信任。建议维护者优先处理数据安全与消息可靠性类问题，并为长期未关闭的高优先级 Issue 提供明确的时间表或状态更新。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比报告

**报告日期：2026-08-08** | **分析范围：12 个开源项目** | **数据窗口：过去 24 小时**


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**功能高速扩张与稳定性瓶颈并存的阶段**。头部项目（OpenClaw、Hermes Agent、ZeroClaw）日均处理 50-500 条 Issue/PR，但 P0/P1 级稳定性问题（数据库损坏、内存泄漏、消息静默丢失）持续积压，正在消耗用户信任。与此同时，**安全议题集中爆发**——API key 泄漏（ZeroClaw #9386/#9813）、会话数据隔离（NanoBot #5278）、记忆投毒防护（OpenClaw #7707）成为跨项目共性痛点。技术路线上，**多代理协作、实时语音、插件生态标准化**（Agent Plugins 1.0）是三大共同演进方向。社区整体呈现"功能先行、安全补课"的典型早期生态特征。


## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PR（待合并） | Release | 活跃度评级 | 健康度评分 |
|------|-------------------|-------------|---------|-----------|-----------|
| **OpenClaw** | 470 | 412 | 无（v2026.8.1 筹备中） | 🔥🔥🔥🔥🔥 极高 | 6.5/10（P0 Bug 积压严重） |
| **Hermes Agent** | 50 | 45 | 无 | 🔥🔥🔥🔥 高 | 7.5/10（评审瓶颈明显） |
| **ZeroClaw** | 44 | 47 | 无 | 🔥🔥🔥🔥 高 | 6.0/10（安全 Bug 集中爆发） |
| **CoPaw** | 20 | 26 | v2.1.0-beta.2 | 🔥🔥🔥🔥 高 | 7.0/10（回归问题需收口） |
| **NanoBot** | 7 | 10 | 无 | 🔥🔥🔥 中高 | 7.5/10（安全响应及时） |
| **IronClaw** | 36 | 38 | 无（v1.2.0 冲刺中） | 🔥🔥🔥🔥 高 | 7.5/10（QA 攻坚阶段） |
| **PicoClaw** | 3 | 12 | 无 | 🔥🔥 中低 | 6.5/10（合并速度成瓶颈） |
| **NanoClaw** | 0 | 8 | 无 | 🔥🔥 中 | 8.0/10（架构演进清晰） |
| **LobsterAI** | 7 | 1 | **2026.8.7** | 🔥🔥🔥 中高 | 8.5/10（迭代节奏健康） |
| **NullClaw** | 0 | 0 | 无 | ⚪ 无活动 | — |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 无活动 | — |
| **Moltis** | 0 | 0 | 无 | ⚪ 无活动 | — |

**关键数据洞察：** OpenClaw 单日 Issue 量级（470 条）是第二名（50 条）的 **9.4 倍**，社区规模呈断崖式领先；但其 P0 问题数量（4 个无 fix PR）也远超其他项目，规模与稳定性呈反比。


## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

| 维度 | OpenClaw | 对比项目 | 差异 |
|------|----------|---------|------|
| **社区规模** | 500 条 Issue/日，470 条新开 | Hermes 50 条、IronClaw 36 条 | 数量级碾压，已形成网络效应 |
| **渠道覆盖** | Telegram、Slack（含 Enterprise Grid）、Discord、LINE、Signal、macOS/Android 实时语音 | PicoClaw（WhatsApp/DingTalk）、NanoBot（微信优先） | 覆盖最广，企业级功能补齐中 |
| **功能深度** | 多代理工作树、记忆信任标签（讨论中）、Codex Realtime V3 绑定 | Hermes（ACP 子代理）、IronClaw（双通道投递） | 已从"聊天助手"演进为"Agent 运行平台" |
| **技术路线** | Gateway 集中式架构 + 插件生态 | Hermes（god-file 分片重构中）、ZeroClaw（Rust 重写） | 架构成熟度最高，但重构负担也最重 |

### 3.2 明显短板

- **稳定性赤字**：4 个 P0 级 Bug（数据库损坏、内存泄漏至 15.5GB、SQLite 损坏风险）数周未修复，与其社区规模严重不匹配
- **评审吞吐不足**：412 条待合并 PR vs 88 条合并/关闭，评审效率约 17.6%，低于 NanoBot（~52%）和 LobsterAI（~86%）
- **信任危机**：硬编码个人路径合入发布（#51429）、静默消息丢失（#116277）等事件正在消耗用户信任

### 3.3 生态定位结论

**OpenClaw 是生态的"事实标准"和"风向标"，但不是"质量标杆"。** 其规模优势（社区、渠道、功能广度）构成了极高的迁移成本壁垒，但 P0 积压和评审瓶颈正在为垂直替代者（如 ZeroClaw 的 Rust 高性能路线、NanoBot 的安全优先路线）创造窗口期。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 趋势判断 |
|----------|---------|---------|---------|
| **消息可靠性与透明失败** | OpenClaw（#116277、#86012）、NanoBot（#5256）、ZeroClaw（#9783） | "宁要明确失败，不要静默成功"——LLM 降级体验、消息丢失、循环回复需有明确反馈 | **强信号**：已成用户第一痛点，将推动"失败可见性"成为标配 |
| **安全与数据隔离** | NanoBot（#5278 会话历史可被 agent 读取）、ZeroClaw（#9813 API key 明文日志、#9815 forbidden_paths 失效）、OpenClaw（#7707 记忆投毒） | 会话级沙箱、密钥脱敏、记忆信任标签、路径访问控制 | **强信号**：从"功能优先"转向"安全补课"，预计 3-6 个月内成为主流 PR 方向 |
| **Token 成本可观测性** | NanoBot（#5266 百万 token 隐形消耗）、OpenClaw（#13219 按模型用量日志）、Hermes（#17565 可配置 temperature） | 细粒度用量审计、按会话/工具维度拆分、异常告警 | **中强信号**：生产环境用户的核心焦虑，但跨 core 埋点工程量大 |
| **上下文/Token 效率** | OpenClaw（#67419 bootstrap 每轮注入浪费 20-30%）、PicoClaw（#3321 前缀缓存优化）、Hermes（#13332 混合工具预选）、IronClaw（#7374 批量 tool_describe） | 减少模型往返、优化 prompt 序列、工具 schema 精简 | **中强信号**：与成本可观测性同源，属降本刚需 |
| **多代理协作** | Hermes（#4950 持久化 ACP 子代理）、OpenClaw（#35203 多代理增强）、IronClaw（#7157 双通道投递） | 子代理跨轮存活、能力画像、共享黑板、渠道隔离 | **中信号**：仍处早期探索阶段，暂无明显杀手级场景 |
| **插件生态标准化** | ZeroClaw（#9810 Agent Plugins 1.0）、NanoBot（#5288 Agent Plugins 集成） | 统一包格式、跨项目兼容、声明式安装 | **中信号**：OpenClaw 插件体系虽大但封闭，标准化可能催生跨生态互操作层 |
| **实时语音多端扩展** | OpenClaw（#118499 macOS 中继、#119001 Codex 绑定）、CoPaw（#6804 中文审批） | 实时语音从 iOS 扩展至 macOS/Android、Discord 会话绑定 | **弱信号**：头部项目领先布局，但生态整体尚处早期 |


## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构 | 关键差异化 |
|------|---------|---------|---------|-----------|
| **OpenClaw** | 全功能 Agent 运行平台 | 开发者/企业（中型+） | Gateway 集中式 + 插件生态 + 多模态 | 渠道覆盖最广、社区生态最丰富、企业级功能（Slack Grid）补齐中 |
| **Hermes Agent** | 开发者优先的自主智能体 | 深度开发者/技术爱好者 | 单体架构（god-file 分片重构中）+ ACP 子代理 | 多代理协作（持久化子代理）、macOS 桌面深度集成、插件接口先行 |
| **ZeroClaw** | 安全优先的高性能 Agent | 安全敏感型用户/家庭实验室 | Rust 核心 + 多 provider 抽象层 + SOP 引擎 | 极致性能、SOP 自动化、安全治理（虽当前有 Bug，但方向明确） |
| **NanoBot** | 安全隔离的轻量助手 | 隐私敏感个人用户/小型团队 | 会话级沙箱（推进中）+ 工作区隔离 + 多频道 | **安全设计为第一优先级**、微信渠道深度优化、Memory 生态（Dream） |
| **IronClaw** | 企业级质量保证型 Agent | 企业用户/QA 团队 | Rust 重写 + 双通道投递 + doc-truth 管线 | 文档一致性验证、显式渠道投递、压力测试体系 |
| **CoPaw** | 中文优先的全能助手 | 中文用户/阿里云生态用户 | Qwen 深度集成 + 桌面模式 + IM 审批 | 中文本地化最好、阿里巴巴技术栈集成（通义、Volcengine 等） |
| **LobsterAI** | 桌面端 Cowork 编辑器 | 桌面重度用户/OpenClaw 用户 | Electron 桌面应用 + OpenClaw 后端集成 | **唯一以桌面客户端形态存在的项目**，发布节奏稳定 |
| **PicoClaw** | 超低资源硬件 Agent | 嵌入式/边缘设备用户 | Go 轻量实现 + 丰富渠道（WhatsApp/DingTalk） | $10 硬件、<10MB RAM 运行，强调非功能性需求 |
| **NanoClaw** | 可扩展轻量脚手架 | 快速搭建个人助手的中级开发者 | TypeScript + ChannelAdapter v2 + SKILL.md 生态 | 架构现代化（Adapter 模式）、脚手架体验完整 |

**架构路线分歧**：生态呈现"Rust 高性能派"（ZeroClaw、IronClaw）与"TypeScript/Node 生态派"（OpenClaw、NanoClaw、Hermes）的路线分化，前者强调资源效率与内存安全，后者强调开发效率与生态复用。


## 6. 社区热度与成熟度分层

### 第一梯队：快速迭代期（高活跃 + 功能扩张 > 稳定性）

| 项目 | 特征 | 风险 |
|------|------|------|
| **OpenClaw** | 日处理 500+ Issue/PR，功能密度极高 | P0 积压 + 评审瓶颈，信任消耗加速 |
| **Hermes Agent** | 50 条 PR/日，社区贡献热情高 | 45 条待合并 PR，评审成瓶颈 |
| **ZeroClaw** | 安全 Bug 集中爆发但配套 PR 跟进快 | 安全事件密集，若修复不及时将失去信任 |
| **CoPaw** | v2.1.0-beta 发布后回归问题集中 | 需在正式版前收口回归类 Bug |

### 第二梯队：质量巩固期（活跃度稳定 + 稳定性优先）

| 项目 | 特征 | 亮点 |
|------|------|------|
| **IronClaw** | v1.2.0 发布前 QA 攻坚，doc-truth 管线 | 系统性解决"文档漂移→模型幻觉"问题，方法论可借鉴 |
| **NanoBot** | 安全隔离优先，响应迅速 | #5278 会话历史泄露 24h 内出 fix PR，安全实践标杆 |
| **LobsterAI** | 发布节奏稳定，Bug→PR 响应 <24h | 健康度最高（8.5/10），是"小步快跑"模式的典范 |

### 第三梯队：生态位补充期（特定场景 + 规模有限）

| 项目 | 特征 | 建议 |
|------|------|------|
| **PicoClaw** | 嵌入式定位明确，但合并速度成瓶颈 | 需集中评审积压 PR（#3200 已等 38 天） |
| **NanoClaw** | 架构演进清晰，但规模有限 | 可关注其 ChannelAdapter v2 模式作为架构参考 |
| **NullClaw / TinyClaw / Moltis** | 无活跃信号 | 可能已停滞，需确认是否维护 |

### 关键判断

- **生态整体处于"规模扩张期"，但头部项目的稳定性赤字与社区规模呈正相关。** OpenClaw 的 P0 问题处理速度直接影响整个生态的用户信任水位。
- **评审吞吐是当前生态的共同瓶颈。** OpenClaw（17.6%）、Hermes（~10%）、PicoClaw（~14%）的合并率均偏低，贡献者流失风险积聚。
- **LobsterAI、NanoBot 的迭代模式值得借鉴**：小步快跑、Bug→PR 闭环 <24h、及时关 stale issue，是健康度最高的两个项目。


## 7. 值得关注的趋势信号

### 信号一：安全从"加分项"变为"入场券"（强信号）

- **数据支撑**：ZeroClaw 同一窗口 4 个安全 P1（#9813/#9815/#9386/#9816）；NanoBot 的 #5278 引发架构级修复；OpenClaw #7707 记忆投毒讨论持续 5 个月
- **行业含义**：Agent 因可读写文件系统、调用工具、访问网络，安全边界远大于传统应用。**"会话级沙箱 + 密钥脱敏 + 记忆信任标签"将成为 2026 下半年标配**。开发者选型时应优先评估项目的安全响应速度（NanoBot 是标杆）

### 信号二："透明失败"取代"静默成功"成为用户核心诉求（强信号）

- **数据支撑**：OpenClaw #116277（129 评论，"宁要明确失败"）、ZeroClaw #9783（SOP 失败原因被丢弃）、IronClaw #7368（延迟被误判为丢失）
- **行业含义**：大模型的不确定性使"静默错误"成为信任杀手。**Agent 产品设计应遵循"所有失败必须可见、可诊断、可恢复"原则**。这不仅是体验问题，更涉及非幂等操作重放的安全风险（Hermes #79278）

### 信号三：Token 成本可观测性成生产环境刚需（中强信号）

- **数据支撑**：NanoBot #5266（2 小时烧百万 token 无感知）、OpenClaw #13219（按模型用量日志）、Hermes #17565（temperature 不可调导致幻觉）、IronClaw #6989（token 估算错误）
- **行业含义**：Agent 的自主性使成本失控风险远高于传统 API 调用。"隐形消耗"正在推动 **per-session/per-tool 用量审计 + 预算告警**成为企业部署的必备能力。PicoClaw 的前缀缓存优化（#3321）和 IronClaw 的批量 tool_describe（#7374）代表了工具层的降本方向

### 信号四：文档-代码一致性成为系统性工程问题（中信号）

- **数据支撑**：IronClaw doc-truth 管线（5 个 PR 组成的专项治理）、ZeroClaw #9780（文档称 watch-loop 可行但实际无 HTTP 能力）、OpenClaw #51429（文档与代码漂移导致用户困惑）
- **行业含义**：Agent 的 LLM 会将文档作为工具使用指南，文档漂移直接导致"模型幻觉"（IronClaw joe-rlo 提交的 8 个 P1 中多个源于此）。**doc-truth 验证管线值得全生态借鉴**——CI 中增加文档-行为一致性检查

### 信号五：插件生态标准化萌芽（弱信号 → 布局窗口）

- **数据支撑**：ZeroClaw #9810（Agent Plugins 1.0 标准）、NanoBot #5288（Agent Plugins 集成）
- **行业含义**：OpenClaw 的插件体系已形成事实标准，但其封闭性制约了跨项目复用。Agent Plugins 1.0（`plugin.json` + `skills/` + `mcp.json`）若成行，将催生跨生态的"一次开发、到处运行"格局。**对开发者：此时投入插件标准化是低成本卡位窗口**

### 信号六：实时语音成为"下一战场"（弱信号）

- **数据支撑**：OpenClaw 连续 3 个 PR 扩展实时语音（#118499 macOS、#119001 Codex 绑定、#120389 Android）、CoPaw 微信渠道中文审批（#6804）
- **行业含义**：头部玩家已在语音模态上布局，但 IronClaw/NanoBot/ZeroClaw 尚无动作。**若 OpenClaw 语音体验跑通，将形成新壁垒**。中小项目可关注语音交互的垂直场景（如语音审批、语音备忘录），避免正面竞争


## 总结

当前生态呈现"**一超多强、安全补课、效率为王**"的格局。OpenClaw 以绝对社区规模领先，但其稳定性赤字正被 ZeroClaw（Rust 性能）、NanoBot（安全隔离）等差异化竞争者蚕食。对技术决策者的建议：**大规模生产部署首选稳定性验证充分的项目（LobsterAI/NanoBot 模式可参考），追求功能前沿可跟 OpenClaw 生态，而安全敏感场景应关注 ZeroClaw 的进展和 NanoBot 的会话级沙箱方案。** 社区共同痛点（透明失败、成本可观测性、安全治理）正是创业和贡献的窗口期。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-08

---

## 1. 今日速览

NanoBot 项目在过去 24 小时内保持**高活跃度**。Issue 侧共有 9 条更新，其中 7 条新开/活跃、2 条已关闭，讨论集中在 **token 消耗可观测性**（#5266）与 **会话隔离安全**（#5276/#5278）两大主题。PR 侧更为密集，共 21 条更新，其中 10 条待合并、11 条已合并/关闭，涉及 **Memory 归档机制完善**（#5280/#5231）、**WebUI 路由与媒体修复**（#5285/#5268）、**会话/工作区安全加固**（#5279）等多条关键路径。值得关注的是，**会话历史存储位置变更**（#713）引发的安全质疑正在发酵，已有对应 fix PR（#5279）及时跟进。整体而言，项目正在经历一轮**以安全隔离和稳定性为核心的密集迭代期**，社区响应速度良好。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**。

---

## 3. 项目进展

今日共有 **11 个 PR 被合并/关闭**，以下是推动项目前进的关键合并：

- **`[bug, session, fix] fix(session): preserve proactive channel delivery during session retention trimming`**（[#5272](https://github.com/HKUDS/nanobot/pull/5272)，关闭 #5273）：修复了会话保留修剪（`retain_recent_legal_suffix` / `enforce_file_cap`）会误删**主动式频道投递消息**（如 cron 通知、任务投递）的问题。此前这些紧邻用户回复之前的消息会被当作冗余数据丢掉，影响实时通知可靠性。合并后，`_channel_delivery` 消息在修剪时会得到保留，低频场景下的推送可靠性明显提升。

- **`[bug, memory, fix] fix(memory): archive short idle sessions for Dream`**（[#5280](https://github.com/HKUDS/nanobot/pull/5280)）：修复了短空闲会话对 Dream（长期记忆模块）不可见的问题。此前短会话若未超出保护后缀窗口，永远不会生成 `history.jsonl` 条目，导致 Dream 无从处理。此 PR 与 [#5231](https://github.com/HKUDS/nanobot/pull/5231) 配合，为短会话补充了归档路径，**长期记忆的覆盖完整性得到补全**。

- **`[bug, webui, fix] fix(webui): preserve newly created topic route`**（[#5285](https://github.com/HKUDS/nanobot/pull/5285)）：修复了 WebUI 新建主题后路由丢失的回归问题——此前 `createChat` 返回的 topic 路由在乐观 session 列表确认前可能被重定向到错误的页面。新增 App 级回归测试覆盖路由/列表提交间隙。

- **`[bug, webui, fix] fix(webui): stage out-of-media-root attachments on history reads`**（[#5268](https://github.com/HKUDS/nanobot/pull/5268)，关闭 #5264）：修复了历史消息接口 `GET /api/sessions/{key}/messages` 对 media root 之外附件（如 `projects/` 下的文件）不返回 `media_urls` 的问题。WebSocket 实时通道已通过 `sign_or_stage_media_path` 处理，而历史接口仅用 `sign_media_path`，导致刷新后附件链接丢失。此 PR 统一了处理逻辑。

- **`[channel, fix] fix(channels): preserve global progress defaults`**（[#5287](https://github.com/HKUDS/nanobot/pull/5287)）：修复了频道级 `sendProgress` / `sendToolHints` 默认值被意外覆盖的问题，保持微信的配额安全默认值的同时，恢复了全局默认值对其他频道的适用性。

- **`[bug, provider, fix] fix: modernize dependency recovery guidance`**（[#5282](https://github.com/HKUDS/nanobot/pull/5282)）：将 Langfuse、Olostep、微信等依赖的安装指引从直接的 package 安装命令更新为 `nanobot plugins enable ...` 标准命令，同时统一了不完整安装的恢复指南。

- **`[bug, weixin, fix] fix(weixin): harden protocol delivery, streaming, and login`**（[#5263](https://github.com/HKUDS/nanobot/pull/5263)）：将微信频道对齐到 `openclaw-weixin` 2.4.6 协议头，加固了投递（含业务错误解析、稳定 client ID、重试感知 HTTP 状态）、流式响应与登录/QR 验证流程。

- **`[webui, refactor] refactor(webui): remove legacy session messages route`**（[#5284](https://github.com/HKUDS/nanobot/pull/5284)）：删除了无调用方的旧版 `/api/sessions/{key}/messages` 路由及其附带代码，清理了 WebUI 的历史包袱。注意：这与此前合并的 #5268 互为先后关系——#5268 先修复了该路由的附件问题，随后 #5284 将其移除并沉淀到新路由体系。

- **`[bug, webui, fix] fix(webui): keep activity text crisp while fading edges`**（[#5281](https://github.com/HKUDS/nanobot/pull/5281)）：修复了 WebUI 活动文本在边缘渐隐时的模糊问题，将滚动遮罩替换为指针透明渐变层。

- **`[webui, feature] feat(webui): expand model preset editor inline`**（[#5277](https://github.com/HKUDS/nanobot/pull/5277)）：模型预设编辑器扩展为行内展开/折叠模式，在宽窄布局下保持一致交互。

---

## 4. 社区热点

- **Token 消耗可观测性（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）** — 10 条评论，今日热度最高。用户 `knoppix2` 报告称 nanobot 在 2 小时内烧掉约百万 token 且用户无明显感知，要求记录每次调用的时间和 token 消耗量。这一诉求反映了 **AI 助手在生产环境中的成本可见性问题**，用户需要细粒度的用量审计能力才能定位"隐形消耗"的来源。该 Issue 暂无直接关联 PR，但已获得 10 条评论的讨论量，社区关注度高。

- **音频发送 Bug（[#5149](https://github.com/HKUDS/nanobot/issues/5149)）** — 5 条评论，持续活跃中（创建于 7/28，至今仍在讨论）。WhatsApp 频道可以接收音频但无法发送音频文件，日志中可看到 `[neonize.utils.ffmpeg WARNING]` 相关输出。该 Issue 已持续 10 天，说明可能是排障难度较高的跨组件问题（ffmpeg 转换链路 + WhatsApp 协议），需要维护者进一步介入。

- **会话级临时文件隔离（[#5276](https://github.com/HKUDS/nanobot/issues/5276)）** — 2 条评论，但**战略意义大**。该 Issue 指出即使启用了 `restrictToWorkspace` 和 bwrap 沙箱，`~/.nanobot/workspace` 目录仍是所有会话共享的全局可写空间。多会话并行时存在**数据串扰风险**。这与此前 #713 PR 的工作区隔离设计形成了互补需求——从"工作区级"进一步细化到"会话级"。

---

## 5. Bug 与稳定性

按严重程度排列：

**🔴 高风险（安全相关）**

- **会话历史存放于 agent 工作区内（[#5278](https://github.com/HKUDS/nanobot/issues/5278)）**：`<workspace>/sessions/` 同时是 agent 文件工具的磁盘作用域，会话 JSONL 文件可被 agent 直接 `read_file`/`list_dir` 读取，构成 **信息泄露路径**。已有对应 fix PR **[#5279](https://github.com/HKUDS/nanobot/pull/5279)**（将历史存储移出 workspace）和配套 PR **[#5283](https://github.com/HKUDS/nanobot/pull/5283)**（per-session 沙箱隔离，opt-in）。当前 #5279 待合并。
- **会话间共享全局工作区导致的数据串扰（[#5276](https://github.com/HKUDS/nanobot/issues/5276)）**：多会话共享 `~/.nanobot/workspace` 的读写权限，虽便于技能演化，但多租户/多用户部署下存在数据隔离缺口。同样由 #5283 提供 per-session 目录隔离方案。

**🟡 中风险**

- **`/goal` 消息产生大量重复回复（[#5256](https://github.com/HKUDS/nanobot/issues/5256)）**：一条 `/goal` 消息在等待用户回答期间产生数十条几乎相同的回复，直到用户介入或模型自行识别为系统循环并取消目标。这是**循环检测机制缺失**导致的异常行为，影响对话质量和 token 消耗（与 #5266 呼应）。暂无直接 fix PR。
- **会话保留修剪误删主动投递消息（[#5273](https://github.com/HKUDS/nanobot/issues/5273)）**：已由 **#5272** 合并修复 ✓。
- **历史消息接口遗漏 `media_urls`（[#5264](https://github.com/HKUDS/nanobot/issues/5264)）**：已由 **#5268** 合并修复 ✓。

**🟢 低风险 / 已解决**

- **Telegram 轮询静默停滞（[#5171](https://github.com/HKUDS/nanobot/issues/5171)）**：网络闪断后 bot 永久停止接收消息且日志无任何输出。修复 PR **[#5156](https://github.com/HKUDS/nanobot/pull/5156)** 已提交，仍在待合并状态（已等待约 9 天），建议维护者尽快审查。

---

## 6. 功能请求与路线图信号

- **Agent Plugins 与 CLI Apps 集成（[#5288](https://github.com/HKUDS/nanobot/pull/5288)，OPEN）**：将 vendor-neutral 的 Agent Plugins v1 包格式与现有 CLI-Anything 生态打通。线索：这是对 Skill/MCP 生态标准化的持续推进，若合并，插件安装将统一到单一包边界上。值得期待。
- **计算机使用能力（computer use）（[#4276](https://github.com/HKUDS/nanobot/pull/4276)，OPEN，创建自 6/10）**：model-agnostic 的 computer_use + browser 工具，支持 PyAutoGUI 和 Playwright 后端。这是**大型语言模型从"对话"走向"操作"**的关键功能，但该 PR 已悬挂近两个月，可能因为涉及面广（工具层设计、安全管控、跨模型兼容）仍在打磨。
- **Telegram 贴纸与消息反应（[#5289](https://github.com/HKUDS/nanobot/issues/5289)，OPEN）**：目前 Telegram 频道完全不支持发送贴纸，且消息反应仅存在于内部确认流程中。该 Issue 由 bot 账号创建（可能是自动生成的提案），代表了**频道能力完整性补齐**的方向。
- **Temporary Chat 模式（[#5252](https://github.com/HKUDS/nanobot/pull/5252)，OPEN）**：WebUI 新增临时会话功能——不落盘、不持久化、首条消息后才创建。这一功能与 #5290（原子 JSONL 写入去重）相互配合，指向**轻量化非持久交互**的方向。
- **会话级临时文件隔离（[#5276](https://github.com/HKUDS/nanobot/issues/5276)）**：配合 #5283 PR，per-session 沙箱隔离有望进入下一版本。
- **Token 消耗日志（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）**：用户普遍关注的成本可观测性话题，当前没有直接 PR。考虑到该议题跨 core 架构（需在各模型调用点埋点），可能会在后续版本中作为官方功能推出。

---

## 7. 用户反馈摘要

- **"token 烧得太快了完全没感觉"（来自 #5266）**：用户描述 nanobot 在 2 小时内消耗约百万 token 且无用户可见活动，表达了对成本失控的焦虑。这类反馈指向一个共性需求—— **"用量透明化"**，包括调用日志、按会话/按工具维度的用量拆分、异常增长告警。
- **"收得到音频但发不出去"（来自 #5149）**：WhatsApp 频道音频发送失败的问题已持续 10 天。用户对这类**不对称能力**（能收不能发）的体验落差感较强，日志中出现了 ffmpeg 相关警告，建议维护者优先排查编码/格式转换链路的兼容性。
- **"一条 /goal 消息产生了几十条重复回复"（来自 #5256）**：用户在等待 agent 答复时收到大量重复消息，直到手动干预。这暴露了**对话循环控制的缺口**，严重影响体验的可靠性和成本效益。
- **"会话级别隔离是刚需"（来自 #5276）**：用户明确认可工作区共享带来的技能演化优势（如 SOUL/USER 文件可被会话间共享），但在多会话/多用户场景下提出 **"共享有界、隔离有度"** 的精细化需求，体现出社区在安全性和灵活性之间的清醒平衡意识。
- **社区整体心态**：从多个 PR 的快速合入和 Issue 的积极响应来看，用户对 NanoBot 的**迭代速度和质量控制整体满意**，特别是在 WebUI 细节打磨和频道兼容性上持续投入，获得了正向反馈。

---

## 8. 待处理积压

- **🔴 [PR #5156](https://github.com/HKUDS/nanobot/pull/5156) — Telegram 轮询静默停滞修复（已等待 9 天）**：该 PR 修复了生产环境中 bot 在瞬态网络故障后永久停止收消息的问题。此类故障**无报错、无日志**，排障极其困难，对生产用户影响大。建议维护者优先安排 review。
- **🔴 [PR #4276](https://github.com/HKUDS/nanobot/pull/4276) — Computer Use 功能（已等待 2 个月）**：这是一个跨工具层的大功能，若迟迟无法合入或关闭，建议至少同步一下进展状态，避免贡献者的工作悬空。当前 PR 仍在持续更新（最后一次更新为 8/7），说明作者仍在维护。
- **🟡 [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) — WhatsApp 音频发送失败（已持续 10 天）**：收到但未发送音频的"半支持"状态对用户体验影响较大，建议明确是否已在某 PR 中修复，或初步给出排查方向。
- **🟡 [PR #5260](https://github.com/HKUDS/nanobot/pull/5260) — Memory 忽略工作区运行时文件（待合并中）**：正确处理 Memory 跟踪目录中的运行时产物是确保 Dream 不读取脏数据的前提，建议在下一轮合并窗口内安排合并。
- **🟡 [PR #5286](https://github.com/HKUDS/nanobot/pull/5286) — Matrix 线程会话隔离（待合并中）**：Matrix 线程的会话隔离是频道一致性的重要缺口，建议与 #5283 一并安排审查。

---

*报告生成时间：2026-08-08 | 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-08

## 1. 今日速览

本周 Hermes Agent 仓库保持**高热状态**：过去 24 小时产生 50 条 Issue 更新、50 条 PR 更新（待合并 45 条），显示社区贡献通道完全畅通，但合并吞吐（仅 5 条关闭）相对请求量存在滞后。值得关注的是,**会话压缩与状态管理**成为今日技术讨论核心**——多条 P1 级 Bug（#79278、#79624、#65365）均指向 session 生命周期与压缩机制，且已有针对性的修复 PR（#80373）在推进中,建议维护者将此类问题列为下周优先排期。新版本发布为 0，项目进入"大修"阶段而非新功能扩张期。

---

## 2. 版本发布

**无新版本发布**

上一次版本发布距今时间待确认，结合持续的 god-file 重构与稳定性修复，项目当前处于**维护与重构冲刺期**,尚未到发布节点。

---

## 3. 项目进展

本日合并/关闭的 PR 数量较少（5 条），但其中包含一个**史诗级功能落地**和一项关键修复：

| PR | 类型 | 说明 |
|---|---|---|
| [#4950](https://github.com/NousResearch/hermes-agent/pull/4950) | 功能 | **持久化 ACP 后台子代理**（Docker 沙箱内常驻）—— `delegate_task` 保持不变，新增显式后台工作流。关闭 #4949,补齐了 Hermes 多代理协作的拼图 —— 子代理不再受限于单轮任务,可跨轮存活 |
| [#81358](https://github.com/NousResearch/hermes-agent/pull/81358) | Bug 修复 | 修复 **Kanban 停职守卫误伤委托子代理**的问题（#80507）。子代理继承父进程环境变量后被错误要求执行 Kanban 退出协议,现已豁免 |

**架构重构的重要一步**：PR #80373（hermes_state.py 切片 R5-C9）已开启 `AsyncSessionDB` 门面的提取 —— 这是 #78647 大型 god-file 分片史诗的一部分,虽未合并,但已进入代码评审。该项目正在系统性地将单体文件拆分为可维护模块,方向正确但需谨慎控制回归风险。

> 📌 综合评估:本日合并量偏少,但持久化子代理是用户等待已久的里程碑特性。项目整体推进速度中等,庞大 PR 积压（45 条待合并）表明**评审环节是当前瓶颈**。

---

## 4. 社区热点

### 最热 Issue（按评论数排序）

| Issue | 评论数 | 议题 | 热度分析 |
|---|---|---|---|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) *Epic: Shard all 20 god files* | 60 | 仓库级 god-file 拆分 | 社区对代码可维护性关注度极高,60 条评论说明重构涉及面广、讨论深入,需协调大量 PR |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) *插件接口扩展追踪* | 30 | 插件系统稳定化 | 社区有大量插件 PR 排队等待接口稳定,（对接 Discord #plugins-interface-ideas 讨论），**维护者对此应优先响应** |
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) *可配置内存后端* | 15 | 内存系统灵活性 | 用户不满当前的 `MEMORY.md`/`USER.md` 硬编码方式,要求支持外部记忆服务（honcho 等） |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) *可配置 Temperature* | 11 | 推理参数控制 | **👍 13 个**,社群呼声最高。用户因固定 temperature 导致幻觉,严重影响了实际使用 |

### 最热 PR

没有单一 PR 获得超高讨论量,但新增 PR 集中在 **Bug 修复（12 条）** 与 **Windows 平台问题（4 条）**,显示社区测试覆盖面正在扩大,但与此同时,Windows 上多个平台级问题的堆积也值得警惕。

---

## 5. Bug 与稳定性

本日报告了多条 Bug,按严重程度排列如下:

### 🔴 P1（高危）

#### 1. [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) - 上下文压缩丢弃工具链结果（可能导致非幂等操作重复执行）
- **风险**: 压缩触发时工具链未完成,副作用已发生,但结果丢失 → 代理重放操作,造成安全事故
- **修复**: 已有 PR #80373（状态门面提取）间接相关,但核心修复无明确 PR
- **影响面**: 任何使用长会话且依赖工具链的用户

#### 2. [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) - 网关预压缩时崩溃（exit 1）,超大会话杀死进程
- **风险**: 会话超过 98K tokens 时重启导致网关直接崩溃,不可恢复
- **修复**: 无对应 PR
- **影响面**: 长期活跃的重度用户

#### 3. [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) - Anthropic OAuth 因暴露 memory 工具 schema 被拒（HTTP 400）
- **风险**: 所有使用 Claude Pro/Max 订阅的用户无法使用内存/会话搜索功能
- **修复**: 无对应 PR
- **影响面**: 订阅用户功能直接不可用

### 🟠 P2（中危）

| Issue | 问题 | 修复 PR |
|---|---|---|
| [#22418](https://github.com/NousResearch/hermes-agent/issues/22418) | macOS 桌面网关与 CLI 网关冲突,Discord token 锁冲突 | 无 |
| [#54523](https://github.com/NousResearch/hermes-agent/issues/54523) | Tailscale 远程连接:异步路由阻塞 asyncio 循环 10-25s | 无 |
| [#80968](https://github.com/NousResearch/hermes-agent/issues/80968) | Windows 上 `--tui` 网关崩溃（ConPTY） | 无 |
| [#81290](https://github.com/NousResearch/hermes-agent/issues/81290) | Windows 次桌面窗口黑屏 | 无 |

### 🟡 P3（低危/体验）

- Telegram 富文本消息被静默忽略（[#63485](https://github.com/NousResearch/hermes-agent/issues/63485)/[#81368](https://github.com/NousResearch/hermes-agent/issues/81368)）
- Windows 搜索路径 ripgrep 报错（修复 PR [#81441](https://github.com/NousResearch/hermes-agent/pull/81441) 已提交）
- Discord 未授权消息错误显示 ✅ 反应（[#81440](https://github.com/NousResearch/hermes-agent/issues/81440)）

> **稳定性总结**：会话状态管理与压缩机制是当前最薄弱的环节,3 个 P1 中有 2 个集中在该领域。建议维护者优先审视 #79278，该问题涉及**非幂等操作的安全执行**,风险等级最高。

---

## 6. 功能请求与路线图信号

### 高潜力（有对应 PR 或维护者活跃关注）

1. **可配置 Temperature 参数**（[#17565](https://github.com/NousResearch/hermes-agent/issues/17565)） - 👍 13,呼声最高。实现成本低、收益直接,建议在下一版本合入
2. **可配置记忆后端**（[#47349](https://github.com/NousResearch/hermes-agent/issues/47349)） - 需求明确（`MEMORY.md` → `rules.md` 重命名 + 可选 honcho/fact_store 后端）,与 #509 形成组合拳
3. **Teams 功能**（[#81405](https://github.com/NousResearch/hermes-agent/issues/81405)） - 基于现有 Profiles + Kanban 能力整合成更上层的"团队协作"概念,包含 Quick Chat、Managed Work、频道等,如果实现将是本季度最亮眼的功能

### 中潜力（社区有需求,暂无具体实现）

1. **PreToolUse 强制钩子**（[#40662](https://github.com/NousResearch/hermes-agent/issues/40662)） - 解决深度调试时 LLM 忽略系统提示词的问题
2. **混合工具预选**（[#13332](https://github.com/NousResearch/hermes-agent/issues/13332)） - 对 14K token 工具 schema 进行语义+关键词预选,减少 token 开销
3. **cron 任务质量门控**（[#28056](https://github.com/NousResearch/hermes-agent/issues/28056)） - 定时任务增加失败重试完成质量检查

### 低潜力（可能延后）

- 桌面端 Projects 概念梳理（[#73888](https://github.com/NousResearch/hermes-agent/issues/73888)/[#80383](https://github.com/NousResearch/hermes-agent/issues/80383)） - 区分显式项目/自动发现仓库/Home 三类概念

---

## 7. 用户反馈摘要

### 真实痛点提炼

1. **Memory 系统不透明**（#47349/评论 15 条）: 用户表示"当前的 `MEMORY.md` 被冻结注入每一轮对话,导致它既是记忆、又是提示词注入面",这是对记忆系统架构的根本性批评,暗示当前设计**对上下文污染和提示注入风险评估不足**

2. **温度参数不可调**（#17565/👍 13）: "固定 temperature 导致严重幻觉",用户希望调用 API 时能直接控制此参数,而非由提供方默认值（通常为 1.0）主导

3. **会话压缩产生安全风险**（#79278/评论 10 条）: 用户明确提到了 **"非幂等操作"的后果** —— 代理重放写操作、API 调用等,可能导致重复扣费或重复执行副作用

4. **Recency Bias 对调试行为的干扰**（#40662/评论 10 条）: AI 代理进入"深度调试模式"后会**持续忽略系统提示中的调试规则**,不论规则在哪个层级,这是 agent 自身行为设计的核心缺陷

5. **多网关冲突是常态化痛点**（#22418 等）: 桌面网关和 CLI 网关的 token 锁冲突属于**日常使用的摩擦点**

6. **第三方服务集成门槛高**: Telegram/Discord 富文本消息静默丢弃（被识别为**顶层 `rich_message` 无匹配过滤器**）—— 这是社区对"门面渠道体验不一致"的持续抱怨

### 满意度信号

- 没有大量抱怨"更新频繁"或"不兼容",而是集中反馈**具体功能的缺失和边界行为**
- 社区提交 PR 积极性高（50 条/日）,说明**项目方向被认可,开发者愿意投入时间**

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 天数 | 内容 | 优先级建议 |
|---|---|---|---|---|
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) | 2026-03-06 | 155 | 认知记忆操作（受 CrewAI 启发） | **高** —— 与 #47349 形成完整记忆系统升级路径,可作为单一史诗管理 |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | 2026-04-21 | 109 | 混合工具预选（降低 token 开销） | 中 —— 对 COGS 影响大,可考虑与 #6839 合并推进 |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | 2026-04-29 | 101 | 可配置 temperature | **高** —— 实现成本极低,社区呼声最高的功能（👍13） |
| [#18374](https://github.com/NousResearch/hermes-agent/issues/18374) | 2026-05-01 | 99 | cron 提示词完整暴露 | 中 —— 沙箱代理的刚需 |
| [#28056](https://github.com/NousResearch/hermes-agent/issues/28056) | 2026-05-18 | 82 | cron/代理运行质量门控 | 中 —— 适合 cron 功能成熟后做增强 |
| [#11349](https://github.com/NousResearch/hermes-agent/issues/11349)【已关闭】 | 2026-04-17 | — | Discord 文档 6 处漂移 | `⏳已解决`，说明**文档问题已被关注并关闭**，这是一个正面的健康信号，说明项目对文档一致性有响应机制 |

### 待合并老 PR

| PR | 创建时间 | 内容 | 积压天数 |
|---|---|---|---|
| [#4950](https://github.com/NousResearch/hermes-agent/pull/4950) | 2026-04-04 | 持久化 ACP 后台子代理 | 126 天 |
| [#75922](https://github.com/NousResearch/hermes-agent/pull/75922) | 2026-08-01 | 跳过安装树子目录提示 | 7 天 |

### 维护建议

- **优先处理**: 至少 2 个 P1 级会话稳定性问题（#79278/#79624）+ 高热度功能 #17565
- **评审瓶颈**: 45 条待合并 PR vs 5 条合并,评审速度是瓶颈,建议考虑增加维护者或建立社区 reviewer 机制
- **记忆系统**: #509 + #47349 可合并为一个"记忆系统 2.0"路线图,这是最长线（155 天）且需求最集中的方向

---

**项目健康度评分: 7.5/10**
- 活跃度:|: 优秀（50/50/50）
- 稳定性: ⚠️ 关注（3 个 P1 未修复）
- 社区健康: 优秀（高反馈、高贡献）
- 维护效率: 中等（评审积压明显）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-08** | **数据源：github.com/sipeed/picoclaw**


## 1. 今日速览

PicoClaw 项目过去 24 小时保持中等活跃度：共产生 4 条 Issue 更新（3 条开放、1 条关闭）和 14 条 PR 更新（12 条待合并、2 条已合并/关闭）。值得关注的是，两条新提交的 PR（#3320、#3321）分别针对 WhatsApp 渠道故障和前缀缓存优化，直指当前用户可感知的痛点，具有较高时效价值。与此同时，Issue 和 PR 的整体状态呈现出明显的**积压信号**：大量条目被打上 `stale` 标签且持续一周以上未获维护者响应，项目在功能迭代速度上有所放缓，活跃度评估为**中等偏下**。


## 2. 版本发布

过去 24 小时无新版本发布，无内容可更新。


## 3. 项目进展

**新增活跃 PR（2 条，今日提交）：**

- **[PR #3321] fix(agent): move dynamic context after history to preserve prefix caching** — 作者 grrowl。优化 prompt 序列以提升前缀缓存命中率，对降低 token 消耗和延迟有直接帮助，属于推理成本优化方向的重要修复。
- **[PR #3320] fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"** — 作者 grrowl。修复 WhatsApp 渠道因协议版本过期导致连接被拒的问题，直接影响该渠道的可用性。

**今日合并/关闭的 PR（2 条，均为依赖更新）：**

- **[PR #3291] build(deps): bump github.com/github/copilot-sdk/go from 0.2.0 to 1.0.8** — 将 Copilot SDK 从 0.2.0 升级到 1.0.8，跨多个 minor 版本的跃升，可能带来 API 行为变化，需关注兼容性。
- **[PR #3289] build(deps): bump github.com/pion/rtp from 1.10.2 to 1.10.5** — 音频传输底层依赖的小版本更新，风险较低。

> **分析**：两条合并 PR 均为依赖例行更新，核心功能代码无明显通过合并。项目的功能性推进集中在待合并队列中（如 DingTalk 图片消息 #3283、模型 fallback 链 #3200、TTS 支持 #3270 等），这些 PR 已在队列中等待 1~3 周不等，合并速度是当前项目进展的关键瓶颈。


## 4. 社区热点

**[Issue #3093] [Feature] I need SimpleX or tox** — [链接](https://github.com/sipeed/picoclaw/issues/3093)

- 状态：已关闭（stale）| 评论：6 条 | 👍 1 | 更新日期：08-07
- **核心诉求**：用户希望增加 SimpleX、Wire 或 Tox 等更多端到端加密通讯渠道。
- **热议背景**：这是目前讨论量最大的 Issue。6 条评论虽不算多，但该 Issue 已持续近两个月才被关闭，讨论跨度长，侧面反映了社区对扩展渠道的持续兴趣。关闭可能引发部分用户不满，值得关注后续是否有替代性的渠道扩展提案出现。

**其他讨论集中在 PR #3320（WhatsApp 405 修复）和 PR #3321（前缀缓存优化）**——二者刚提交即引起关注，因其针对性强、直接解决用户可感知的问题。


## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|---------|----------|------|---------|
| 🔴 严重 | **[Issue #3308] [BUG] 代码审查：并发风险、goroutine 泄漏、内存/性能优化** | 用户对 SeaHorse、Channel Manager 和 Hooks 做了深度 code review，指出存在并发安全隐患和资源泄漏风险。虽然原始标题带褒扬性质，但内容属于对核心模块的系统性隐患反馈 | ⚠️ 无关联 fix PR |
| 🔴 严重 | **[PR #3320] WhatsApp 渠道 405 错误** | 已有 PR 修复：`whatsmeow` 库版本过旧，WhatsApp 拒绝连接并提示 "client outdated (405)"，且不会自动重连，渠道长期不可用 | ✅ 已提交 fix PR，待合并 |
| 🟡 中等 | **[PR #3319] exec 工具超时参数被忽略** | `exec` 工具声明了 per-run `timeout` 参数，但同步执行始终使用全局超时，忽略用户传入值；`background` 与 `pty` 参数类型声明错误（string vs boolean） | ✅ 已提交 fix PR，待合并 |
| 🟡 中等 | **[PR #3279] tool-call 格式泄漏到 LLM 摘要** | SeaHorse 的 `partsToReadableContent` 存在工具调用格式泄漏到用户消息的 bug | ✅ 已有 fix PR，待合并 |

> **总结**：项目当前存在多处已知但尚未修复的问题，集中在 SeaHorse 核心模块和渠道连通性方面。虽均有提交修复 PR，但合并速度决定了这些问题的影响时长。


## 6. 功能请求与路线图信号

**新增/活跃功能请求：**

- **[Issue #3302] 为 MCP 服务器支持 OAuth 2.1** —用户明确标注为 "Nice-to-Have / Enhancement"，且关联了更早的 #2546。从 PR 队列来看，目前没有针对该需求的进行中工作，短期落地的可能性不高。
- **[Issue #3307] 为 Telegram 等聊天渠道增加会话列表/切换命令** — 指出 Web UI 已有完整的会话管理（`session-history-menu.tsx`），但聊天渠道用户无法列举/切换/删除会话。这是一个**体验一致性**的核心缺口，可能会被优先考虑。

**已提交但等待合并的功能 PR（对应功能可能进入下一版本）：**

| PR | 功能 | 等待时长 |
|----|------|---------|
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | DashScope TTS 提供商 + 微信音频发送 | ~19 天 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 可配置的默认模型 fallback 链 | ~38 天 |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | 9 个提供商默认模型名更新至 2026-07 最新版 | ~19 天 |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | DingTalk 图片/消息支持 | ~17 天 |

**路线图信号**：模型 fallback 链和 TTS 扩展是社区明显在推进的方向，但核心维护者的合并节奏是主要瓶颈。


## 7. 用户反馈摘要

- **对架构的认可与担忧并存（Issue #3308）**：用户对 PicoClaw "在 $10 硬件、<10MB RAM、秒级启动" 的成就表示高度赞赏，但同时对 SeaHorse、Channel Manager 中的并发安全和 goroutine 泄漏表达了关切。这说明开发者社区在认可项目理念的同时，对生产环境稳定性有更高期望。
- **渠道支持诉求强烈（Issue #3093）**：用户明确需要 SimpleX、Wire、Tox 等隐私优先的通讯渠道，说明隐私/加密通信是部分核心用户的重要使用场景。
- **多端体验一致性诉求（Issue #3307）**：用户指出 Web UI 有完整的会话管理能力，但 Telegram 等聊天渠道完全没有同等功能，暴露出 "Web 端和聊天端能力不对等" 的产品体验缺口。
- **WhatsApp 渠道持续不可用的不满（PR #3320）**：该 PR 反映了 WhatsApp 渠道因 405 错误持续失效、且一直未自动恢复的问题。用户对这一问题保持关注。


## 8. 待处理积压

**⚠️ 高优先级提醒（已 stale 且有实质内容的 PR）：**

- **[PR #3200] feat(models): add configurable default fallback chain** — 自 07-01 起已等待 38 天，功能完整且对日常使用价值高。若不合并，需要明确回应以避免贡献者流失。
- **[PR #3270] feat: add DashScope TTS provider and WeChat audio file sending** — 等待 19 天，TTS + 微信音频的组合功能在国内用户群体中可能有较高需求。
- **[PR #3271] chore(providers): update default model names to 2026-07 latest** — 等待 19 天，纯维护性更新，长时间不合并会导致默认模型配置过时。
- **[PR #3279] fix(seahorse): prevent tool-call format leakage into LLM summaries** — 等待 18 天的 bug 修复，直接影响摘要质量。
- **[PR #3283] fix(dingtalk): support picture/image message inbound** — 等待 17 天的功能扩展，打通 DingTalk 的图片消息链路。

**Issue 积压：**

- **Issue #3308（代码审查、并发风险）** 已 9 天无维护者响应，属于核心模块的稳定性反馈，建议优先回复。
- **Issue #3307（Telegram 会话管理）** 和 **Issue #3302（OAuth 2.1）** 均有用户明确的使用场景描述，建议社区维护者标注计划或回应时间预期。

**💡 维护者行动建议**：当前有 12 条 PR 处于待合并状态，其中多条已成熟且等待超过两周。建议安排一次集中 review + merge 批次，优先处理 bug 修复类（#3319、#3320、#3321）和等待最久的模型 fallback（#3200），以提升社区贡献者的积极性。


*本日报由 AI 自动生成，数据截至 2026-08-08。所有链接指向 GitHub 原始 Issue/PR。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-08

## 今日速览

NanoClaw 项目昨日保持平稳推进，**未发现活跃度异常信号**。24 小时内无新 Issue 提出、无版本发布，但 PR 活动保持热度，新增/更新 10 条，其中 8 条仍在待合并状态，2 条已合并/关闭。值得关注的是 **Mattermost 集成 PR #3199 的重新提交**（替代旧架构下已失效的 #546），以及 **AnyDoc 文档转换技能**和 **Tavily MCP 工具技能**等新能力加入。项目整体处于「功能扩展 + 稳定性修复并行」的健康节奏，社区贡献活跃，核心团队亦有参与（#2909、#3198 标记 core-team）。

---

## 项目进展

**今日合并/关闭的 2 条 PR 均属关闭状态，无新增代码合入，但可见明确架构演进信号：**

1. **PR #3199 替代 #546 (Mattermost 集成)** — v2 架构下的全新实现，说明旧版 Channel/registry 架构的迁移已进入尾声，新增集成均须基于新的 `ChannelAdapter`/`channel-registry.ts` 契约。
2. **PR #3190 (Tavily MCP 工具技能)** — 新增独立工具技能（Utility skill），扩展了 agent 可调用的外部工具生态。
3. **PR #3198 (AnyDoc 文档转换技能)** — core-team 出品，提高文档处理能力。
4. **PR #2909 (模板向导 + first-agent 刻印)** — core-team 成员完成 setup 向导流程，配合此前 #2890 的模板加载器，脚手架体验闭环成形。
5. **PR #3145 (为现有 wiring 回填 channel destinations)** — 数据库迁移 021，补齐存量数据，属架构平滑过渡的关键一步。
6. **PR #3197 (失败状态展示具体原因)** — agent-runner 已在 resultSummary 上报错误但 UI 层未透出，该修复让用户可见「动作失败：具体原因」而非泛化文案，**测试覆盖度扎实（定向 274 passed，全量 1427 passed）**。

> 整体看，项目正主动向 v2 ChannelAdapter 架构收敛，同时逐步完善错误可见性与文档工具链。

---

## 社区热点

今日无高评论量 Issue/PR（所有条目评论数 undefined/0），**热度更多体现在提交数量与涉及范围**：

- **PR #3199 (Mattermost 集成)** — 关注点：Mattermost 是企业级 Slack 替代，用户对自托管聊天平台集成需求明确。
- **PR #3050 (添加 Dial 到 channel picker)** — 持续多日未合并，涉及 `runChannelSkill` 模型变更，影响面较大，说明其推进需要核心团队更多评估。
- **PR #2346 (未知斜杠命令按普通聊天处理)** — 已悬挂 3 个月，涉及 Agent SDK 行为修复，属于日常使用中高频触碰的边界场景。

> 隐含诉求：**社区希望在不修改核心源码的前提下，通过「技能包/SKILL.md + channel adapter」的方式低成本扩展 NanoClaw 的工具与触达渠道。**

---

## Bug 与稳定性

- **【中危】PR #2346 — 未知斜杠命令被误判为 passthrough**：Agent SDK 将不认识的前缀命令当作 Claude Code 内建命令处理，导致响应被静默丢弃。修复思路明确（回退到 `category: 'none'`），但已等待 3 个月，建议维护者评估合入。
- **【中危】PR #3145 — 存量 wiring 缺 channel destinations**：迁移 021 解决历史数据不完整问题，处于待合并状态。
- **【低危】PR #3197 — 失败原因展示泛化（已关闭）**：已合并至飞书卡片展示链路，**事件闭环，无遗留风险**。
- **【低危】PR #3196 — 挂载点只读修复**：`mount readonly` 相关修复，等待评审。

---

## 功能请求与路线图信号

1. **Mattermost 集成 (PR #3199)** — 受企业用户关注度高的集成方向。结合此前 #546 已关闭，可确定**新集成将以 v2 ChannelAdapter 为准**。
2. **AnyDoc 文档转换 (PR #3198)** — 增强文档处理能力，core-team 亲自提交，**纳入下一版本的确定性较高**。
3. **模板向导 + 首次 agent 刻印 (PR #2909)** — 上一版本已落地模板加载器，本轮实现向导 UI 与首次配置流，**属路线图中「脚手架体验」的既定推进方向**。
4. **Dial channel 接入 (PR #3050)** — 社区贡献，涉及 `runChannelSkill` 模型变更，预计排期靠后或需调整方案。

---

## 用户反馈摘要

- **失败原因可见性不足（PR #3197）** — 用户只能看到「执行系统检查失败」等泛化文案，无法定位根因。已由 tier2tech-tian 修复并附带 274 个定向测试和跨层测试，**修复质量获得认可**。
- **未知命令的静默丢失（PR #2346）** — 用户输入未被识别的斜杠命令时，系统无任何反馈，交互体验受损。该问题描述客观、修复方向清晰，期待维护者抽出评审时间。
- **对 Mattermost 等自托管方案的需求 (PR #3199)** — 用户 wakqasahmed 二次提交，主动适配新架构，说明其对集成渠道的工作流依赖较重，**建议维护者高频响应以免社区热情流失**。

---

## 待处理积压

- **PR #2346 — 未知斜杠命令处理**（2026-05-08 创建，悬挂 3 个月）：评审无进展，涉及 Agent SDK 行为，建议维护者安排 Code Review 并明确是否纳入下一版本。
- **PR #3050 — Dial channel 接入**（2026-07-14 创建，近 1 个月）：依赖 `runChannelSkill` 模型变更，跨多文件影响面大，建议维护者与作者沟通方案后再合并。
- **PR #2909 — 模板向导流程**（2026-07-02 创建，状态 [core-team]）：已进入第二轮评审（更新于 08-07），预计近期将有合并动作。

---

## 项目健康度评估

| 维度 | 状态 | 说明 |
|------|------|------|
| 社区活跃度 | 🟢 健康 | 24h 内 10 条 PR 动态，贡献者来源广（含外部开发者 + core-team） |
| 合并速度 | 🟡 中等 | 2/10 闭环，其余 8 条待评审，存在 1 条 3 个月未动的旧 PR |
| Bug 修复节奏 | 🟢 良好 | 关键 UI 展示问题当日修复并合入，测试覆盖到位 |
| 架构演进 | 🟢 清晰 | v2 ChannelAdapter 迁移路线明确，新 PR 均采用新契约 |
| 风险信号 | 🟡 轻微 | 缺少维护者对部分 PR 的及时评审，可能影响社区贡献意愿 |

**综合评级：8/10** — 项目处于活跃发展期，核心架构清晰、社区贡献热情高，唯一短板在于评审资源分配不均，建议维护者优先处理滞留超过 30 天的 PR（#2346、#3050）。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-08

---

## 1. 今日速览

过去24小时项目活跃度极高，共产生 100 条 Issue/PR 更新（50+50），其中新开/活跃 Issue 36 条、待合并 PR 38 条，均处于近期高位。今日没有新版本发布，但合并/关闭了 12 个 PR（含 2 个 XL 级大 PR）。值得关注的是，**P1 级 bug_bash QA 问题仍在持续涌入**（今日新增 #7344、#7298、#7295 等），且**多起 QA 问题被证实根因是文档漂移和模型幻觉的组合**——团队已就此发起"文档真相验证管线"（doc-truth pipeline）专项治理，并提交了 5 个 PR 组成的大型补丁集。整体来看，项目正处于 v1.2.0 发布前的密集质量攻坚阶段，风险与推进速度并存。

---

## 2. 版本发布

无新版本发布。距上个里程碑 v1.1.0-rc.1 已有一段时间，当前大量 PR 标记为 v1.2.0 目标（如 epic #7166）。

---

## 3. 项目进展

今日合并/关闭的 12 个 PR 中，**2 个 XL 级核心 PR 是重要节点**：

- **[#7214 feat(sandbox): 新增 Docker 与 Railway 用户沙箱配置档**](https://github.com/nearai/ironclaw/issues/7214)（合并，XL，risk: medium）——为沙箱引入显式的 Docker 与 Railway 双配置档，工作区/检查点按"租户+用户"隔离，每个命令在全新的非 root Python worker 中运行。这修复了云部署环境下沙箱隔离与探测机制的系统性问题。
- **[#7157 feat: 显式渠道投递工具——双通道模型，删除投递启发式逻辑**](https://github.com/nearai/ironclaw/issues/7157)（合并，XL）——实施"会话生命周期"与"通知渠道"双通道投递模型，根治了 Telegram/Slack 消息错配、投递乱序等一揽子 QA 顽疾。

**其余关键合并/关闭：**

- **[#7324 依赖批量升级（11 项）**](https://github.com/nearai/ironclaw/issues/7324)——base64、toml、rstest 等 Rust 依赖例行更新。
- **[#7372 test(disclosure): 固定宽目录 schema-token 缩减下限**](https://github.com/nearai/ironclaw/issues/7372)——将 91 工具基准的 schema-token 缩减地板从 50% 收紧，防止渐进劣化不被察觉。
- 关闭了 14 个 Issue，含 **4 个 bug_bash_P1 Telegram 系列问题（#6475/#6476/#6643/#6644）**，说明渠道投递重构确实解决了实际故障。

**仍待合并的重要 PR（38 条在途）：** 今日最大的亮点是一组 **doc-truth 补丁系列**（#7375/#7376/#7378/#7379/#7381，共 5 个 PR，统一标记 "doc-truth PR x/5"），目标是系统性根除文档与发布行为漂移问题；此外 #7374（批量 tool_describe 减少模型往返）和 #7377（run 以调用者身份执行）均在 XL 级别推进。

---

## 4. 社区热点

今日讨论最热门的 Issue 呈现明显的"用户困惑"特征：

- **[#7340 No way to reset model settings to factory defaults（6 评论）**](https://github.com/nearai/ironclaw/issues/7340)——用户抱怨无法恢复模型设置的出厂默认值，这是一个典型的"可恢复性"需求，评论区讨论热烈。该问题与 #7369（错误时无 trace 捕获）一起指向：**用户需要更强的自我诊断和恢复手段**。
- **[#6989 Token 记账混合估算错误（4 评论）**](https://github.com/nearai/ironclaw/issues/6989)——从 content reference 字符串长度估算 token，而非引用内容的实际长度。技术细节深，是 pi-harness 计划下 P1 级修复的一部分。
- **[#7317 Proposal: Doc-Truth Verification Pipeline（3 评论）**](https://github.com/nearai/ironclaw/issues/7317)——社区成员 cuongdcdev 提议建立文档与代码一致性的验证机制，随即成为今日 doc-truth PR 系列的设计蓝本。**该诉求反应了"文档漂移已多次造成用户困惑"的累积痛点**。

**另一个值得注意的社群信号**：QA 测试者 joe-rlo 在 8 月 6-7 日集中提交了 8 个 bug_bash_P1 问题（#7292、#7294、#7295、#7298、#7246、#7247、#7344 等），虽然每个评论数不多，但构成了一个高度一致的信号——**模型在多个场景下"幻觉"了系统状态**（声称 GitHub 已连接但实际未验证、虚构自动化运行状态、记错 Slack 用户身份等）。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃的 Bug：

**P1 / 高影响：**

| Issue | 问题 | 状态 |
|---|---|---|
| [#7344](https://github.com/nearai/ironclaw/issues/7344) | Slack 已 ACTIVE 但助手不识别连接，拒绝使用 | 无 fix PR |
| [#7298](https://github.com/nearai/ironclaw/issues/7298) | "请求在发送前失败"/监控系统与 runner 失联 | 无 fix PR |
| [#7295](https://github.com/nearai/ironclaw/issues/7295) | 助手混淆 Slack 用户身份，把 DM 发错人 | 无 fix PR |
| [#7246](https://github.com/nearai/ironclaw/issues/7246) | 助手虚构自动化运行状态（实际无任何自动化） | 无 fix PR |
| [#7247](https://github.com/nearai/ironclaw/issues/7247) | 助手谎称 GitHub 已连接，未验证真实认证状态 | 无 fix PR |

**中影响：**

- [#7292](https://github.com/nearai/ironclaw/issues/7292) 安装的 CoinGecko 工具无法使用，runner 心跳报错
- [#7185](https://github.com/nearai/ironclaw/issues/7185) 跨会话记忆不可靠（已有 **[#7365 fix PR](https://github.com/nearai/ironclaw/issues/7365)**，XL 级，含 prompt 指导 + 常驻 MEMORY.md 通道）
- [#7074](https://github.com/nearai/ironclaw/issues/7074) 多工具会议研究在获取日历数据后失败
- [#7368](https://github.com/nearai/ironclaw/issues/7368) 渠道对话在 DeepSeek 级模型上耗时数分钟，是 #6643 的底层根因（延迟+缺失反馈）

**低影响 / 环境相关：**

- [#6590](https://github.com/nearai/ironclaw/issues/6590) Windows 上 serve 失败（workspace root 与 /skills 冲突）
- [#5456](https://github.com/nearai/ironclaw/issues/5456) runner 租约 90 秒不活动阈值对多工具例程过于激进

**已有关联 fix PR 的：** #7384（修复 .env 加载并停止将 session 故障误报为 API key 错误）、#7365（记忆修复）、#7382（压力测试脚本化工具调用负载）。

---

## 6. 功能请求与路线图信号

值得关注的路线图信号：

**高概率进入下一版本（已有对应 PR 在途）：**

- **Doc-Truth 验证管线（#7317）**——已有 5 个 PR 组成的完整补丁集（#7375/#7376/#7378/#7379/#7381），设计文档已落盘 `docs/internal/plans/2026-08-07-doc-truth-pipeline.md`。**这几乎是 v1.2.0 的必然组成部分**。
- **持久化状态兼容门禁（#7380，epic）**——要求"任何修改持久化状态的 PR 必须证明新版本可读旧版本数据"。工程量大，风险标记 high。
- **工具发现性能优化（#7374）**——批量 tool_describe 将发现成本从 5 次模型往返降为 1 次，是渐进式工具披露（#6810）的后续强化。
- **脚本化工具压力负载（#7382）**——补上 #7360 要求的压力测试缺口，mock LLM 侧车驱动内建/记忆工具序列并验证写入回读。

**用户呼声高、暂无明确排期：**

- [#7340](https://github.com/nearai/ironclaw/issues/7340) 模型设置出厂重置——小改动，高用户感知价值。
- [#7369](https://github.com/nearai/ironclaw/issues/7369) 错误时捕获 trace 的 UI 入口缺失。
- [#7362](https://github.com/nearai/ironclaw/issues/7362) i18n 改造：65 条硬编码英文错误信息需要本地化——中期工程，涉及架构调整。

---

## 7. 用户反馈摘要

- **"模型一本正经地撒谎"是当前最大的用户信任杀手。** QA 测试者 joe-rlo 提交的 8 个 P1 问题高度一致：模型不验证系统状态就断言"已连接""正在运行""已设置"。用户操作被误导，甚至 DM 发错人。**这不是单个 bug，而是系统性的"模型状态确认机制缺失"**。
- **"连接了但助手不知道"**——#7344 中 Slack 在 Messaging Channels 中显示 ACTIVE（8 个能力），但助手完全不知道这个连接存在。连接状态在系统组件之间不同步。
- **"文档一直在教我错误的东西"**——#7367 确认文档仍声称"聊天无法连接渠道"，而实际上这个功能早已实现；该文档进而使模型拒绝执行用户请求。这是"文档谎言→模型幻觉→用户受阻"的连锁反应。doc-truth 管线正是对此的系统性回应。
- **用户缺乏恢复和诊断手段**——#7340（无法恢复出厂设置）和 #7369（错误时无 trace 入口）表明：当出现问题时，用户既不能重置也不能诊断，只能干等。
- **延迟被误判为"消息丢失"**——#7368 揭示 Telegram 消息被提交后要等数分钟才处理，用户以为消息进了黑洞。改进反馈机制后此问题已缓解。

---

## 8. 待处理积压

**长期未响应/滞留的重要 Issue：**

| Issue | 创建 | 持续时间 | 备注 |
|---|---|---|---|
| **[#5456](https://github.com/nearai/ironclaw/issues/5456) runner 租约过期** | 2026-06-30 | 39 天 | bug_bash_P1，6/30 起就是主导故障模式，至今仍 OPEN |
| **[#6590](https://github.com/nearai/ironclaw/issues/6590) Windows serve 失败** | 2026-07-23 | 16 天 | 阻断 Windows 用户本地开发，仅有 2 条评论 |
| **[#5503](https://github.com/nearai/ironclaw/issues/5503) 紧凑版 Google 扩展能力（PR）** | 2026-07-01 | 38 天 | 实验性 XL PR，长时间未推进 |

**滞留的 PR：**

- **[#5503](https://github.com/nearai/ironclaw/issues/5503)** 已开 38 天，XL 规模，涉及 Gmail/Calendar 紧凑能力，无近期更新。
- **[#7131](https://github.com/nearai/ironclaw/issues/7131)** 触发运行失败通知改进，已开 4 天，等待评审。

**风险提示：** #5456（runner 租约 90 秒阈值）持续 39 天未修复，且这是 6/30 测试中"主导失败模式"，影响邮件、日历等多工具例程。**考虑到 8 月 6-7 日新增的 #7298"监控系统与 runner 失联"可能与其同源，建议维护者优先排查。** 此外，#7383 提醒 `tool_disclosure_port.rs` 已达 4.4k 行，需要拆分跟踪。

---

*数据来源：nearai/ironclaw GitHub 仓库，统计窗口 2026-08-07 至 2026-08-08。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-08

> 数据来源：github.com/netease-youdao/LobsterAI | 覆盖周期：2026-08-07 至 2026-08-08

---

## 1. 今日速览

LobsterAI 项目今日保持**高活跃度**：过去 24 小时内有 7 条 Issue 更新和 7 条 PR 更新，并有 1 个新版本发布（2026.8.7）。值得关注的是，新版发布后的相关修复工作已基本收尾——**6 条 PR 今日全部关闭/合并**，剩余 1 条待合并的 PR（#2452）正是针对新版中一个刚被社区报告的模型 ID 含斜杠的 bug 的修复。此外，**今日关闭的 4 条 Issue 中 3 条为历史遗留问题**（4 月初创建的 stale issue），说明维护团队正在清理积压。整体来看，项目处于"发布—修复—反馈"的良性迭代循环中，社区响应速度快，维护者参与度极高。

---

## 2. 版本发布

### LobsterAI 2026.8.7（2026-08-07 发布）

**主要更新内容：**

| 类别 | 变更 |
|------|------|
| ✨ 新功能 | Cowork 会话内标题栏对话搜索（PR #2435） |
| 💄 改进 | Markdown 数学公式 LaTeX 定界符支持（PR #2449） |
| 🛠️ 修复 | Windows 安装器 watchdog 空退出码问题（PR #2446） |

**迁移注意：** 本版本无已知破坏性变更。Windows 用户在升级时建议手动覆盖安装以确保安装器补丁生效。涉及 LaTeX 公式渲染的用户，请注意新旧定界符（`\(...\)` vs `$...$`）的兼容性。

📦 [查看 Release 详情](https://github.com/netease-youdao/LobsterAI/releases)

---

## 3. 项目进展

今日是发布后的第二天，团队完成了**发布分支合并与多场景修复收尾**：

| PR | 内容 | 意义 |
|----|------|------|
| [#2451 - Release/2026.8.5](https://github.com/netease-youdao/LobsterAI/pull/2451) | 发布分支合并至 main | 将 2026.8.5 全部功能正式合入主干，包括 Cowork 对话搜索、数学渲染改进、IM 分析、OpenClaw 配置与插件安装改进 |
| [#2450 - fix(cowork): restore fullscreen code toolbar clicks](https://github.com/netease-youdao/LobsterAI/pull/2450) | 修复 Windows 上 Cowork 全屏代码工具栏按钮无法点击的问题 | 将全屏层从 Electron 拖拽区中正确分离 |
| [#2445 - fix(openclaw): strip plugin-index-managed keys from config.set](https://github.com/netease-youdao/LobsterAI/pull/2445) | 过滤 config.set 中由插件索引管理的键 | 防止插件配置被错误覆盖 |
| [#2446 - fix(win-installer): rescue null watchdog exit code](https://github.com/netease-youdao/LobsterAI/pull/2446) | 修复 Windows 安装器 watchdog 空退出码问题 | 提升 Windows 安装/更新可靠性 |

**总体判断：** 2026.8.5/2026.8.7 两个版本的功能已全部落地主干，Cowork 模块和 OpenClaw 集成的稳定性得到显著提升。

---

## 4. 社区热点

### 🔥 最热议题：模型 ID 含斜杠的 Provider 兼容性问题

**[Issue #2443 — 模型 ID 含斜杠的自定义 Provider 无法在界面中使用（SiliconFlow）](https://github.com/netease-youdao/LobsterAI/issues/2443)**

- **创建时间：** 08-06，今日有新的更新与回复
- **影响范围：** 所有使用模型 ID 带 `/` 的 OpenAI 兼容服务商（SiliconFlow、OpenRouter 等）
- **核心诉求：** 用户无法从界面选择 `deepseek-ai/DeepSeek-V4-Flash` 这类带斜杠的模型 ID，需要在配置文件中手动修改

**实时响应：** 值得称赞的是，该 Issue 报告后不到 24 小时，对应的修复 PR **[#2452 — fix(openclaw): preserve provider for slashed model ids](https://github.com/netease-youdao/LobsterAI/pull/2452)** 已经提交，目前待合并状态。社区从发现问题到修复方案出现的高效率体现了项目维护团队的敏捷性。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🟢 轻微（有修复 PR）

| Issue | 问题描述 | 状态 |
|-------|---------|------|
| [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 模型 ID 含斜杠的 Provider 无法在界面中使用 | ✅ 已有 PR #2452（待合并） |
| [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | 执行任务无输出且无错误信息（页面截图，环境信息不全） | ⚠️ 待复现 |

### 🔴 历史遗留（今日关闭，已在旧版本修复）

| Issue | 问题描述 | 状态 |
|-------|---------|------|
| [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | sql.js (WASM) 高频操作导致 `memory access out of bounds` 崩溃，存在数据库损坏风险 | ✅ 已关闭（stale） |
| [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) | 定时任务 UI 重复、API rate limit 提示 | ✅ 已关闭（stale） |
| [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 自建 skill 安装路径错误（被装到 OpenClaw 目录），重启后技能面板无显示 | ✅ 已关闭（stale） |

**分析：** 今日关闭的 3 条历史 bug 均为 4 月初创建，横跨 4 个月后关闭，可能意味着已在后续版本中被修复但未及时回归确认，也可能是维护团队在清理积压。建议维护者在关闭时补充说明解决版本。

---

## 6. 功能请求与路线图信号

今日收到 1 条新的功能请求：

**[Issue #2444 — 输入框编辑模式](https://github.com/netease-youdao/LobsterAI/issues/2444)**

- **痛点：** 长 Prompt 输入时换行需按 `Shift+Enter`，容易误按 `Enter` 直接发送
- **建议方案：** 设置中可切换默认换行键；或输入框增加「编辑模式」按钮，支持 WYSIWYG 编辑器辅助 Markdown 输入
- **路线图判断：** 该请求属于体验优化类改进，涉及 UI 交互层，与近期 Cowork 输入体验优化方向一致（见 PR #2435 对话搜索、#2450 全屏代码工具栏），**有可能被纳入下一个小版本**。

⚠️ 注意：今日还看到 **[Issue #1265 — 基于 AGENT 绑定 IM 机器人和模型](https://github.com/netease-youdao/LobsterAI/issues/1265)**（已关闭/stale），该请求涉及多 Agent 场景下的模型和机器人独立配置，是较大的架构级功能，建议维护者评估是否纳入中期路线图讨论。

---

## 7. 用户反馈摘要

### ❤️ 正面反馈

- **快速响应：** Issue #2443 报告后 24 小时内即有修复 PR，社区对此高度认可
- **发布节奏稳定：** 2026.8.5 → 2026.8.7 连续两次小版本迭代，Cowork 和 OpenClaw 的改进密集落地

### 😕 痛点反馈

| 来源 | 用户痛点 |
|------|---------|
| [Issue #2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | 输入长 Prompt 时换行逻辑反直觉，容易误发送 |
| [Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 常见的 SiliconFlow 等 OpenAI 兼容服务商的模型 ID 格式（含斜杠）无法正常使用，属于主流场景兼容问题 |
| [Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | 任务执行出现"无输出无错误"的死寂状态，难以排查是用户问题还是产品缺陷 |
| [Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 自建 skill 被安装到 OpenClaw 目录，技能面板不显示，存在明显的路径映射问题（历史遗留，已关闭） |

---

## 8. 待处理积压

### ⚠️ 需关注

| 项目 | 类型 | 创建时间 | 状态 | 建议 |
|------|------|---------|------|------|
| [#2452 - fix(openclaw): preserve provider for slashed model ids](https://github.com/netease-youdao/LobsterAI/pull/2452) | PR | 08-07 | 待合并 | ⚡ **高优先级**：对应 Issue #2443 为活跃 bug，影响面广，建议尽快合并并发布 |
| [#2447 - 执行没有出结果，也没有错误信息](https://github.com/netease-youdao/LobsterAI/issues/2447) | Issue | 08-07 | 待响应 | 等待补充环境信息和复现步骤，建议打 `needs-info` 标签 |
| [#2444 - 输入框编辑模式](https://github.com/netease-youdao/LobsterAI/issues/2444) | 功能请求 | 08-07 | 待评估 | 建议维护者确认是否纳入路线图 |

### 📋 长期未响应排查

今日关闭的 3 条 stale issues（#1195、#1263、#1273）跨越了 4 个月才关闭，建议维护团队：

1. 在关闭时附上**解决版本号**，方便用户确认升级后是否已修复
2. 考虑增加 **stale-bot** 策略，设定更短的提醒周期，避免问题长时间堆积

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 14 条 Issue/PR 更新，响应迅速 |
| 维护响应性 | ⭐⭐⭐⭐⭐ | Bug 报告 → 修复 PR 平均不足 24h |
| 发布节奏 | ⭐⭐⭐⭐ | 连续两日小版本迭代，节奏稳定 |
| 积压管理 | ⭐⭐⭐ | 4 个月 stale issues 今日集中清理，但需要长期机制 |
| 用户满意度 | ⭐⭐⭐⭐ | 核心功能稳定，输入体验和多 Agent 配置仍有提升空间 |

**核心结论：** LobsterAI 处于健康的快速迭代轨道上，团队响应速度优秀，社区反馈渠道畅通。当前最紧迫的事项是**合并 PR #2452** 并发布补丁版本，解决 SiliconFlow 等主流服务商的模型兼容性问题。

---

*报告生成时间：2026-08-08 | 数据覆盖：2026-08-07 00:00 - 2026-08-08 00:00 (UTC)*

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

# CoPaw 项目动态日报 — 2026-08-08

> 数据来源：github.com/agentscope-ai/CoPaw（QwenPaw）· 统计周期：2026-08-07 ~ 2026-08-08


## 1. 今日速览

过去 24 小时项目保持高活跃度：共产生 **31 条 Issue 更新**（20 新开/活跃、11 关闭）和 **47 条 PR 更新**（26 待合并、21 已合并/关闭），并发布了 **v2.1.0-beta.2** 迭代版本。值得关注的是，今日同时出现多个**回归类 Bug**（自定义人设文件丢失、桌面模式无法选中复制、任务执行中无法提交新会话），说明 Beta 版本引入新功能的同时带来了一定稳定性回退，维护团队需重点关注。此外，社区贡献者活跃，47 条 PR 中多个来自 first-time-contributor，且覆盖 shell 临时文件泄漏、Playwright 连接自愈、ACL 工作区隔离等实质性修复，项目整体**社区健康度较高**。

**活跃度评估**：🔥🔥🔥🔥🔥（高）— Issue/PR 数量均处于近期高位，且有 1 个新版本发布。


## 2. 版本发布

### v2.1.0-beta.2

- **发布日期**：2026-08-07（统计周期内）
- **更新内容**：
  - `fix(ci)`：修复 real-behavior-proof 中的 fence-aware section extraction（修复 #6626）
  - `fix(checkpoints)`：修复 web workspace bootstrap 中自动快照恢复问题
- **变更类型**：Bug 修复为主，无明确破坏性变更及迁移说明
- **来源**：[GitHub Release](https://github.com/agentscope-ai/QwenPaw/releases)

> ⚠️ 注意：仓库中 Issue 标题仍引用 “QwenPaw” 名称，但仓库已迁移至 CoPaw（agentscope-ai/CoPaw），建议用户在反馈时统一使用最新仓库路径。


## 3. 项目进展

今日合并/关闭的 PR 覆盖多个模块，核心进展包括：

| 领域 | PR | 说明 |
|------|-----|------|
| **网站/下载页** | [#4694](https://github.com/agentscope-ai/QwenPaw/pull/4694)（已合并） | 下载页 UI 重构与优化，提升下载体验 |
| **Shell 执行** | [#6565 关联修复](https://github.com/agentscope-ai/QwenPaw/issues/6565)（已关闭） | 多行命令换行被折叠、PIPE 后台进程卡住问题已解决 |
| **循环防护** | [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773)（已关闭） | Linux 下 `/goal`、`/mission` 模式重复防护失效问题修复 |
| **配置健壮性** | [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615)（Under Review） | `load_agent_config` 增加 JSON 损坏容错，防止配置加载崩溃 |
| **插件隔离** | [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688)（Open） | 修复 `qwenpaw-creator` 安装时 `utils` 包名冲突问题（#6683） |

此外，[#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788) 已提交修复 Telegram ACL 白名单重置问题的 PR（使用共享 root profile 工作区），与今日热门 Issue #6786/#6787 直接对应。

**整体判断**：项目在稳定性和生态兼容性上持续投入（CI、checkpoints、shell、配置健壮性），同时社区贡献者不断涌入，显示项目处于**功能扩展与稳定性加固并行**的阶段。


## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 状态 | 核心诉求 |
|------|----------|--------|------|----------|
| 1 | [#6116 Doom loop: 单轮内重复调用同一工具](https://github.com/agentscope-ai/QwenPaw/issues/6116) | 8 | 已关闭(wontfix) | 拒绝循环调用检测虽能拦截但已浪费大量 token，社区对成本敏感 |
| 2 | [#6782 插件/应用市场始终提示“维护中”](https://github.com/agentscope-ai/QwenPaw/issues/6782) | 8 | 开启 | Docker 版 v2.0.1 市场功能不可用，影响插件生态 |
| 3 | [#6732 MCP 工具规律性失效](https://github.com/agentscope-ai/QwenPaw/issues/6732) | 6 | 开启 | MCP 工具隔夜/数小时后失效，需重启 Docker 容器恢复 |
| 4 | [#6490 新增 Volcengine Agent Plan 和 Xiaomi MiMo 内置 provider](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 4 | 开启 | 多模型提供商支持诉求，社区对生态扩展有较高期待 |
| 5 | [#6786 Telegram ACL 白名单重置](https://github.com/agentscope-ai/QwenPaw/issues/6786) | 4 | 开启 | multica 新任务导致授权用户被屏蔽，[#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788) 已提交修复 |

**分析**：社区热点集中在 **稳定性与可用性** 两大主题——市场不可用、MCP 失效、ACL 重置均直接影响生产环境使用；同时模型提供商扩展需求（Volcengine、Xiaomi）反映出用户对多样化模型接入的强烈需求。


## 5. Bug 与稳定性

按严重程度排列（🔴 严重 / 🟠 中等 / 🟡 轻微）：

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🔴 | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | 插件/应用市场始终“维护中”，无法使用 | 开启，待响应 |
| 🔴 | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 空闲几十分钟后进程卡死，需强杀重启 | 开启，待响应 |
| 🔴 | [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) | 多步任务完成后 Agent 进入死循环，会话阻塞数小时 | 开启，标记 need-info |
| 🟠 | [#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785) | **回归**：Profile 分类硬编码官方人设文件，自定义 .md 无法切换 | [PR #6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) 已提交修复 |
| 🟠 | [#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797) | **回归**：v2.1.0b2 桌面模式无法选中复制文本 | [PR #6802](https://github.com/agentscope-ai/QwenPaw/pull/6802) / [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) 已提交修复 |
| 🟠 | [#6796](https://github.com/agentscope-ai/QwenPaw/issues/6796) | **回归**：任务执行时无法在对话框提交新会话 | 已关闭（可能已在 b2 内修复） |
| 🟠 | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Google Gemini 因 `$schema` 字段报 “Model 'unknown' execution failed” | 开启，待响应 |
| 🟠 | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows 安装/更新失败，NM host 锁文件导致 NSIS 报错 | 开启，待响应 |
| 🟡 | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | OpenAI Responses 摘要忽略 `disable_thinking`，60 秒取消误报为 malformed | 开启，待响应 |
| 🟡 | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | `consume_model_response` 抛 `KeyError: '__aiter__'`，标题生成失败 | 开启（今日提交），待响应 |

**判断**：今日 Bug 呈现“新旧交织”特征——v2.1.0b2 引入多个回归（文本选择、自定义人设、会话提交），同时 MCP 失效、市场不可用等生产环境问题仍在积压。大部分回归已有对应修复 PR，但严重级 Bug（市场不可用、进程卡死）仍无明确响应。


## 6. 功能请求与路线图信号

| Issue | 功能请求 | 趋势判断 |
|-------|----------|----------|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 新增 Volcengine Agent Plan 和 Xiaomi MiMo 内置 provider | 已 12 天未关闭，评论 4 条，可能进入路线图 |
| [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) | 阿里云 Token Plan 模型列表增加 `qwen3.8-max-preview` | 硬编码模型列表已过时，需要动态拉取 |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | Chrome 标签页生命周期可配置 | 涉及浏览器自动化体验，社区有一定关注 |
| [#6790](https://github.com/agentscope-ai/QwenPaw/issues/6790) | 桌面模式单击打开应用 + 返回完整模式按键 | 已关闭（可能已被 [#6797 相关 PR](https://github.com/agentscope-ai/QwenPaw/pull/6802) 覆盖） |
| [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | 智能邮件管理助手（实时监控 + 访问控制） | 新提交 PR，社区贡献的新功能，值得关注 |

**信号**：模型 provider 扩展（Volcengine/Xiaomi/通义新模型）是当前最集中的功能诉求，来自不同用户的多条请求指向同一方向——**模型生态兼容性**。此外，桌面模式交互细节（单击/双击、选中复制）成为 v2.1.0b2 用户关注的新焦点。


## 7. 用户反馈摘要

- **成本敏感**：[#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) 用户反馈重复工具调用在检测到之前“已经浪费了大量 API 调用和 token”，说明用户对 token 成本极为敏感，希望系统能更早干预。
- **部署受阻**：[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) 与 [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) 分别反映 Docker 和 Windows 安装/更新受阻，直接影响新用户上手体验。
- **安全担忧**：[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) 用户报告 Malware Bytes 将桌面版标记为 Trojan Loader，并称“在我听到你们团队回复之前我会卸载”，安全误报对用户信任影响显著。
- **中文本地化**：[#6804](https://github.com/agentscope-ai/QwenPaw/pull/6804) PR 支持微信渠道中文审批回复（“允许”/“拒绝”），体现项目对中文用户场景的日益重视。
- **积极信号**：[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) 用户在报告安全问题的同时表示“我喜欢你们的工作，感谢你们所做的一切”，显示社区对项目整体评价积极。

**总体满意度**：中性偏正面。用户认可项目价值，但对 Beta 版本的稳定性和安装体验有较多抱怨。


## 8. 待处理积压

以下 Issue/PR 长期未获得维护者响应或明确进展，建议重点关注：

| 类型 | 编号 | 内容 | 等待时长 | 优先级建议 |
|------|------|------|----------|------------|
| Issue | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | Doom loop 检测过晚导致 token 浪费（8 评论，最终 wontfix） | 25 天 | 虽已关闭，但用户成本痛点未真正解决，建议考虑早期预警方案 |
| PR | [#6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) | 流式重试路径遵循 Retry-After 上限 | 8 天，Under Review | 涉及限流策略，建议尽快审阅 |
| PR | [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | 压缩前 flush 待处理 turns（修复 #6555） | 9 天，Under Review | 影响记忆可靠性，建议尽快合入 |
| PR | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | ACP 通知与响应竞态导致文本丢失 | 7 天，Under Review | ACP 协议稳定性关键修复，建议优先审阅 |
| Issue | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP 工具规律性失效（6 评论） | 2 天 | 社区呼声高，亟需官方定位 |
| Issue | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Volcengine/Xiaomi provider 支持 | 12 天 | 需求明确，建议纳入路线图评估 |

---

**项目健康度总结**：CoPaw 社区活跃度极高，PR 贡献源源不断，但维护者审阅速度（尤其 Under Review 状态 PR）可能成为瓶颈。v2.1.0-beta.2 的回归问题需在正式版前集中收口，同时生产环境级 Bug（MCP 失效、市场不可用、进程卡死）应优先响应，以维持社区信任。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-08

> 数据窗口：2026-08-07 ~ 2026-08-08（24小时）

---

## 1. 今日速览

ZeroClaw 过去 24 小时保持高强度迭代：共更新 50 条 Issues 和 50 条 PRs，其中活跃/新开 Issues 44 条、关闭 6 条；待合并 PR 47 条、合并/关闭 3 条。值得关注的是 **安全类议题集中爆发**——API key 明文落日志（#9813）、forbidden_paths 完全失效（#9815）、Gemini key 泄漏至聊天（#9386）等多条 P1 安全 Bug 在同一窗口内浮现，同时涌现 4 个安全增强 PR（#9827、#9839、#9838、#9634）。此外，**SOP 系统缺陷异常密集**，包括 headless 运行卡死（#9805）、失败原因被丢弃（#9783）、cron 触发无网络能力（#9780）等，配套修复 PR #9841 已提交。社区对 Agent Plugins 1.0 标准适配（#9810）和 XMPP 通道（#9814）表达兴趣，总体活跃度评估为**极高**。

---

## 2. 版本发布

本窗口无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 中，值得注意的是 #9836 *fix(transcription): make local_whisper bearer_token optional* ——该修复解决了本地 whisper.cpp（loopback 无鉴权）场景下因必须提供 bearer_token 导致启动失败的问题，属于推动开箱即用体验的小而关键修复。此外 6 个 Issues 被关闭，其中包括：

- **#8933** RFC: Add cross-turn conversation correlation to OTel export ——已关闭并接受。该 RFC 将对话 ID 作为实验性 `gen_ai.conversation.id` 属性随 OTel 导出，具备可观测性颗粒度提升。
- **#9246** RFC: Preserve Todo tracker configuration during ZeroCode ownership migration ——已关闭并接受，ZeroCode 迁移将不再丢失 Todo 跟踪器配置。
- **#9386** *[Bug]: GeminI API key 经 URL 泄漏至聊天* ——已接受，修复方案待落地（见 Bug 一览）。
- **#6055** Slack: hydrate thread context from conversations.replies ——已关闭。该功能解决了 `strict_mention_in_thread` 下免重复 @ 的需求。

从 PR 队列来看，**SOP 无头执行修复**（#9841，承接 #9494）是最值得跟踪的合并候选，将关闭 #9805 等多项 SOP 阻塞问题；**Agent 配置编写工具**（#9828）为 agent 提供经 operator 审批的配置修改路径，替代裸 `echo > config.toml`，是安全治理方向的重要一步。

---

## 4. 社区热点

| 热点 | 类型 | 评论 | 关注点 |
|---|---|---|---|
| [#8933 跨轮对话关联 OTel 导出](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | Issue (closed) | 13 | RFC 评审落下帷幕，可观测性设计获社区参与度最高 |
| [#9246 ZeroCode 迁移保留 Todo 配置](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | Issue (closed) | 12 | 迁移过程配置保留——自动化场景老痛点 |
| [#5937 Unify providers 架构与 reqwest 管理](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | Issue (open) | 12 | 长期悬而未决的架构重构，持续获得关注 |
| [#8424 工作区内 forbidden paths 与 .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | Issue (open) | 10 | 与今日 #9815 直接呼应，安全需求集中 |
| [#8043 Retire aardvark-sys 独立 crate](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | Issue (open) | 9 | 依赖治理方向的架构精简 |

**分析**：高评论 Issues 集中在**可观测性架构**、**配置迁移**和**安全路径治理**三条主线上；#5937 虽已持续近四个月未合并，表示社区对 providers 模块现状不满已久，今日多条 provider 相关 bug（#9812、#9816、#9775）也侧面验证了这一技术债。

---

## 5. Bug 与稳定性

按严重程度排列（P1 = 严重/阻塞，P2 = 一般）：

### P1（工作流受阻）

| Bug | 摘要 | 状态 | Fix PR |
|---|---|---|---|
| [#9813 API key 明文写日志](https://github.com/zeroclaw-labs/zeroclaw/issues/9813) | provider 连接错误时完整 URL（含 query 中的 API key）写入日志 | 已关闭（标记为 #9386 重复） | — |
| [#9386 Gemini key 经 URL 泄漏至聊天](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | sanitize_api_error 未剥离 `?key=`，key 进入用户可见消息 | accepted | 待提交 |
| [#9815 `forbidden_paths` 完全不可达](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) | `is_path_allowed` 在 allowed-root 检查即返回 true，跳过了 forbidden 循环 | accepted | 待提交 |
| [#9816 Anthropic 预算无上限](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | 所有 usage 记录 `cost_usd: 0.0`，日/月预算永不触发 | accepted | 待提交 |
| [#9812 Provider fallback 永不触发](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) | fallback 用的是 primary model id，永不生效且将 fallback 拖入 cooldown | accepted | 待提交 |
| [#9811 /health 报告从未连接的通道健康](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | Telegram token 无效时 /health 仍报 healthy | accepted | 待提交 |
| [#9805 cron 触发的 auto SOP 永远卡在 running](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) | headless 无 agent loop，ExecuteStep 永不执行 | accepted | ✅ #9841 / #9494 |
| [#9840 第二 daemon 抢占并断掉 daemon.sock](https://github.com/zeroclaw-labs/zeroclaw/issues/9840) | 启动时无条件 remove 既有 socket，退出时 unlink 遗留 | open | 待提交 |
| [#9786 SOP.toml 格式错误被静默丢弃](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | `sop list` 省略、`sop validate` 误报成功 | accepted | 待提交 |
| [#9770 `cron update` 静默丢弃声明式 job 修改](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | 六个字段被静默丢弃无提示 | accepted | 待提交 |
| [#9775 OpenRouter streaming 丢失 provider_extra](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) | `stream_chat` 跳过 merge_extra_body | in-progress | 待提交 |

### P2（降级行为）

| Bug | 摘要 | 状态 |
|---|---|---|
| [#9656 Telegram 审批等待期间 typing 指示器持续显示](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) | 被阻塞的 turn 看起来像在处理中 | accepted |
| [#9708 daemon 服务日志无大小/年龄上限](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) | stdout/stderr 重定向到固定文件无截断 | in-progress |
| [#9783 SOP finish_run 丢弃失败原因](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) | 失败运行只记录"失败"不记录"为何" | accepted |
| [#9784 SOP 多步 agent 驱动运行中途误标失败](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | 需复现 (needs-repro) | open |
| [#9780 cron 触发的 SOP 无网络能力](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | 文档称 watch-loop 可行但能力集缺 HTTP | accepted |
| [#9825 熵启发式把公链地址当泄漏](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) | 支付 URL 被误 redact（false positive） | open |

**修复信号**：#9827 和 #9839 已有 PR 分别应对 shell 逃逸与破坏性命令防护；此窗口同期开放的安全 PR 密度（#9827、#9839、#9838、#9636、#9634、#9384、#8948）反映了维护者对近期安全漏洞的集中响应。

---

## 6. 功能请求与路线图信号

| 功能请求 | 类型 | 信号 |
|---|---|---|
| **[Agent Plugins 1.0 标准支持](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)**（#9810） | Integration | 引入 open-vendor 插件标准（`plugin.json` + `skills/` + `mcp.json`），与 #9346（packaged catalog 契约）汇合，说明**插件生态**正在成为项目战略重点 |
| [原生 XMPP / Prosody 通道](https://github.com/zeroclaw-labs/zeroclaw/issues/9814)（#9814） | Channel | 自托管轻量聊天服务器需求——家庭实验室/低资源部署场景 |
| [简化默认 Web 工具面](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)（#9824） | Simplification | 五个重叠工具 → 三个清晰动词（fetch / research / request），web_search 改由 sub-agent 驱动——偏好简洁默认面 |
| [统一 providers 架构重构](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)（#5937） | Architecture | 悬置近四个月未合并。今日 #9812/#9816/#9775 的 provider bug 集中爆发，**增强了该 PR 的紧迫性与合理性**，预计近期将被重新激活 |
| [工作区相对 forbidden paths + .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)（#8424） | Security | 与 #9815 形成"同一个问题，两个视角"——预计会被安排进同一轮安全修复 |

**路线图判断**：安全加固是当前主旋律；插件生态（Agent Plugins + Package Catalog）将是下一个 feature 周期的大方向；SOP 引擎的可用性修复（#9841）预计最快合入。

---

## 7. 用户反馈摘要

- **"watch-loop 被吹过头了"** —— #9780 中指出文档宣称 cron 轮询式 SOP 可做 watch-loop，但实际没有 HTTP 能力、shell.exec/notify.channel 无法满足。**真实场景：用户对文档承诺与实际能力之间存在落差。**
- **"配置迁移不能丢 Todo 配置"** —— #9246 的 12 条评论反映 ZeroCode ownership 迁移在真实工作流中会对 Todo 跟踪器造成破坏，用户需要**平滑迁移**保证自动化流程不中断。
- **"一个 malformed SOP 和不存在一样"** —— #9786 指出格式错误的 SOP 在 CLI 中与不存在的 SOP 完全无法区分。**真实痛点：错误提示完全缺失，诊断成本高。**
- **"预算保护（budget cap）完全没有工作，花的钱不受控制"** —— #9816 中用户透露，anthropic provider 的 spend 恒为 0 意味着预算上限永远不触发。**这是花钱问题，不只是数字显示问题。**
- **"fallback 配置了也永远不生效"** —— #9812 中用户指出 primary 挂了之后 fallback 配置的 provider 也一并失效，进一步将 fallback 拖入 cooldown。**真实场景：可靠性诉求被一个 model id 错误完全破坏。**
- **"forbidden_paths 是摆设？"** —— #9815 指出即使配置了 forbidden 也无法阻止工作区内的敏感文件（如 `.env`、`config.yaml`）被 agent 访问。**安全预期被打破，直接触发 #8424 RFC 场景中的需求。**

---

## 8. 待处理积压

> 提醒：以下项均已超过 48 小时未获得维护者实际响应/移入下一里程碑。

| 条目 | 类型 | 创建 | 最后更新 | 积压原因 |
|---|---|---|---|---|
| [#5937 Unify providers 架构重构](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | RFC/refactor | 2026-04-20 | 2026-08-07 | 三个月零维护者响应，但今日 3 条 provider P1 bug 皆可归因于该 PR 试图解决的问题 |
| [#6663 Telegram 部分流式 tool-call 进度展示](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | Enhancement | 2026-05-14 | 2026-08-07 | 近三个月未动，`stream_mode = "partial"` 的用户在 Telegram 上无法看到工具执行进度 |
| [#7130 `forbid(unsafe_code)` 全工作区恢复](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) | Enhancement | 2026-06-03 | 2026-08-07 | 两个月未动，安全姿态（security posture）相关，与今日安全议题方向一致 |
| [#8948 MCP stdio 僵尸进程回收](https://github.com/zeroclaw-labs/zeroclaw/pull/8948) | PR (bug) | 2026-07-10 | 2026-08-07 | 近一个月未合并，依赖 #9418 落地，MCP 用户长时间受影响 |
| [#8965 Declarative skill auto-activation](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | PR (feature) | 2026-07-11 | 2026-08-07 | 堆叠在 #9563 之上，等待基础 PR 合入——skill 系统的重大功能推进被阻塞 |
| [#9563 Telegram 类型化媒体信封](https://github.com/zeroclaw-labs/zeroclaw/pull/9563) | PR (bug) | 2026-07-30 | 2026-08-07 | 已标 P1（`[IMAGE:]` 标记后 attachments 为空），等待作者响应 |

---

*报告生成时间：2026-08-08 | 下一窗口：2026-08-09*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*