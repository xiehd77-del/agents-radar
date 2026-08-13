# OpenClaw 生态日报 2026-08-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-13 02:06 UTC

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

好的，作为您的 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 OpenClaw 项目 2026-08-13 日 GitHub 数据生成的项目动态日报。

---

### OpenClaw 项目动态日报 (2026-08-13)

#### 1. 今日速览

OpenClaw 项目今日活动量巨大，处于高度活跃状态。过去24小时内 Issues 和 PR 更新各达 500 条，但新版本发布数为 0，表明项目正处于密集的开发与问题修复迭代中，而非功能交付阶段。社区反馈的热点集中在**子代理（Subagent）任务完成的可靠性与消息投递丢失**、**会话状态管理**以及**模型认证（Auth）与速率限制**等核心稳定性问题上。虽然新 PR 数量众多（356 条待合并），但大量 Issue 被标记为 `clawsweeper:no-new-fix-pr`，暗示维护者带宽可能成为瓶颈。

#### 2. 版本发布

- 过去 24 小时内无新版本发布。

#### 3. 项目进展

尽管没有新版本发布，但今日合并/关闭的 PR（144 条）和关闭的 Issue（95 条）揭示了项目在稳定性方面的持续加固。关键进展包括：

- **强化子代理完成投递机制**：PR #79405 `fix: harden subagent completion fallback delivery` 已关闭。该 PR 旨在加固子代理完成消息的投递逻辑，避免在超时、重启等边缘情况下消息丢失，直接回应了社区多个高热度 Issue 的核心痛点。同时，Issue #8299 `Feature request: config option to suppress sub-agent announce` 被标记为 `close:already-fixed`，表明该功能可能已通过其他方式实现。
- **修复关键渠道功能**：Issue #42820 `message tool: Feishu send action polluted by poll schema` 和 #33413 `Slack: Show tool-level progress` 均被标记为 `close:already-fixed`，说明这些影响用户体验的具体问题已解决。
- **清理技术债务**：PR #110796 `fix(gateway): page SQLite transcript visits` 已关闭，优化了 SQLite 后端下会话文件的读取性能。PR #81829 `fix(doctor): exit non-zero on final invalid config` 仍在开放中，旨在修复 `doctor` 命令退出码不反映真实状态的问题，对 CI/CD 集成有重要意义。

#### 4. 社区热点

今日社区讨论热度极高，最突出的议题集中在**子代理（Subagent）消息投递的可靠性**上，多个高评论量 Issue 均与此相关，形成了明显的“问题集群”。

- **#121058 Silent reply failures still recurring** (91 评论): 这是今日绝对热点。用户报告在 #116277 关闭后，静默回复失败问题依然存在。即便有监控，问题仍复现，表明该 Bug 未能根治，引发了社区的强烈关注和焦虑。这直接指向核心通信管道的稳定性缺陷。
- **#7707 Memory Trust Tagging by Source** (45 评论): 这是一个长期开放的功能请求（P2），用户强烈要求根据信息来源（用户指令、网页抓取等）添加信任标签，以防“记忆投毒”攻击。反映了社区对 AI Agent 安全性的深层担忧。
- **#44925 Subagent completion silently lost** (26 评论)、**#67777 Subagent completion delivery can be lost** (11 评论)、**#92433 Subagent completion silently dropped** (10 评论): 这一系列 Issue 共同描绘了子代理完成消息在不同场景（超时、steering、重启）下丢失的多种失败模式。社区对此类问题的高频反馈表明，**多代理协作的可靠性已成为当前版本最严重的稳定性短板**。

#### 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

- **严重 (P1) - 消息丢失与会话阻塞**：
  - **#121058**: Silently failing replies 复现，核心通信问题，暂无修复 PR。
  - **#44925**: 子代理完成消息静默丢失，无重试/通知，影响任务可靠性。
  - **#92433**: 子代理完成消息在 steering 时被静默丢弃。
  - **#47975**: 子代理会话导致主会话无响应。
  - **#91363**: 隔离 Cron 任务一致性失败，模型请求从未发出。
  - **#54488**: 会话通道饥饿，消息入站分派被阻塞长达 20-30 分钟。
  - **#43374**: 多代理并发时所有 LLM API 调用同时超时。

- **中等 (P2) - 功能异常与回归**：
  - **#111498**: 主代理因 workspace-state 迁移问题被阻塞（回归）。
  - **#77733**: `/new` 和 `/reset` 命令不再触发人设问候语（回归）。
  - **#89278**: Codex OAuth 刷新超时导致 Cron 失败。
  - **#95610**: Prompt-cache 因动态注入而失效，导致 API 成本增加。

- **修复状态**：
  - 大部分新建的稳定性相关 PR（如 #122650、#122508）仍处于 `needs proof` 或 `waiting on author` 状态，尚未合并。
  - 今日关闭的 #42820 和 #33413 等 `already-fixed` Issue 表明部分问题已解决，但**最核心的子代理消息投递问题集群仍未得到根治**。

#### 6. 功能请求与路线图信号

今日涌现的功能请求反映了用户对**精细化控制**和**可观测性**的需求：

- **记忆与安全**：**#7707 记忆信任标签**是社区的强烈呼声，而 **#45031 技能安装安全扫描**（已关闭）也表明安全是用户的长期关注点。这些信号可能指向未来版本将加强安全和信任机制。
- **会话与交互控制**：**#45501 `session.resetPrompt`** 允许用户自定义会话重置消息，**#51028 会话面板智能排序** 提升多会话管理体验，**#99583 会话智能自动标题** 减少手动操作。这些请求均体现了对 UI/UX 精细化的追求。
- **成本与性能优化**：**#9016 暴露 OpenRouter 成本**、**#45771 内置速率限制**、**#95610 Prompt-cache 修复** 表明用户对运行成本的敏感度日益增加，这将是项目商业化或大规模部署时必须考虑的因素。
- **配置与集成**：**#45758 支持 YAML 配置** 以及 **#45508 自托管 STT/TTS** 显示了用户对标准化和私有化部署的偏好。

#### 7. 用户反馈摘要

- **核心痛点**：大量用户在多个 Issue 中抱怨“消息静默丢失”和“长时无响应”，这严重破坏了自动化工作流的信任感。用户不再满足于“偶尔成功”，而是要求系统具备**可预测的、可靠的交付保证**。
- **使用场景**：用户不仅在个人聊天中使用，还积极用于**并行编码任务**（#43367）、**复杂多代理编排**（#43367, #7707），甚至通过**Android Wear 设备**（PR #122123）进行控制。这表明 OpenClaw 正在从“聊天机器人”向“通用 Agent 运行时”演进。
- **情绪倾向**：对于未修复的顽固 Bug（如 #121058），用户情绪明显焦躁，并质疑关闭 Issue 的标准。对于功能请求（如 #7707, #44431），用户提供了详细的使用案例和修改建议，展现出高参与度和专业性。**用户总体期望是：稳定性优先，其次是功能的广度和深度。**

#### 8. 待处理积压

以下 Issue/PR 长期未得到有效响应或解决，建议维护者优先关注：

- **长期未关闭的高热度 P1 Bug**：
  - **#44925**: 子代理任务静默丢失（3月提出，26评论）。这是多代理场景下的严重缺陷。
  - **#43367**: 多代理编排不稳定（3月提出）。与 #44925 问题域重叠，暗示核心架构存在短板。
  - **#41165**: Telegram DM 路由错误（3月提出）。会污染主会话状态，影响数据隔离。
- **“无修复 PR”标签的 P1 问题**：大量带 `clawsweeper:no-new-fix-pr` 标签的 P1 Issue（如 #121058, #72015, #67777）积压严重，这清晰地表明**维护者带宽不足，无法为所有高优问题及时提供修复**。这可能是项目当前最大的风险。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：** 2026-08-13
**覆盖项目：** OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, ZeptoClaw, ZeroClaw


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**密集迭代与稳定性攻坚并行的快速演进期**。各项目普遍面临多代理消息投递可靠性、跨平台兼容性（Windows 为突出短板）、Token 成本优化三大核心挑战，同时围绕插件系统、多通道集成（Telegram/Slack/微信）、可观测性与运维体验展开差异化竞争。生态整体呈现"核心架构收敛、外围能力扩展"的态势，但**维护者带宽不足**已成为多个头部项目（OpenClaw、Hermes Agent）的共性瓶颈，社区贡献积极性高但合入效率受限。


## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 版本发布 | 健康度 | 阶段判断 |
|------|:---:|:---:|:---:|:---:|------|
| OpenClaw | 500 更新 | 500 更新 | 无 | ⚠️ 维护者瓶颈 | 高活跃 · 稳定性攻坚 |
| NanoBot | 8 | 36 | 无 | ✅ 健康 | 快速迭代 · 安全加固 |
| Hermes Agent | 50 | 50 | 无 | ⚠️ P1 积压 | 功能扩展 · 平台化 |
| PicoClaw | 2 | 3 | 无 | 🟡 响应趋缓 | 低活跃 · 等待合并 |
| NanoClaw | 4（全新开） | 10 | 无 | 🟡 升级回归 | 架构演进期 |
| NullClaw | — | — | — | ⚪ 无活动 | 休眠 |
| IronClaw | 91 更新 | 同左 | **2（1.2.0-rc.2/rc.3）** | ✅ 极高活跃 | 密集发布 · QA 驱动 |
| LobsterAI | 6 | 9 | 无 | 🟡 全 stale | 稳步修复 · 动力待激活 |
| TinyClaw | — | — | — | ⚪ 无活动 | 休眠 |
| Moltis | — | — | — | ⚪ 无活动 | 休眠 |
| CoPaw | 30 | 44 | **1（v2.1.0-beta.4）** | ✅ 健康 | 密集迭代 · 响应迅速 |
| ZeptoClaw | — | — | — | ⚪ 无活动 | 休眠 |
| ZeroClaw | 100 更新 | 同左 | 无 | ✅ 高活跃 | 安全加固 · 跨平台攻坚 |

> 注：NanoBot/OpenClaw 等项目的计数口径为"更新量"（含评论、标签变更等）。


## 3. OpenClaw 在生态中的定位

**社区规模与活跃度：** OpenClaw 以单日 500 条 Issue + 500 条 PR 更新的体量稳居生态龙头，远超 Hermes Agent（50/50）、ZeroClaw（100 更新）和 IronClaw（91 更新）。其社区讨论深度（单 Issue 最高 91 评论）和问题聚类现象也表明用户基数最大、使用场景最丰富。

**技术路线：** OpenClaw 采用**多代理编排**为核心架构，子代理（Subagent）消息投递的可靠性是其当前最大技术短板，也是社区反馈最密集的领域（#121058、#44925、#67777 等形成问题集群）。这一痛点反映了其架构复杂度远高于轻量级竞品。

**优势：** 功能覆盖面最广（Slack/Feishu/Telegram/Cron/记忆/技能等）、社区贡献者生态最活跃（大量第三方 PR）、被 LobsterAI 等桌面客户端作为核心引擎集成，事实上已成为**"Agent 运行时"的事实标准**。

**相对劣势：** 维护者带宽成为最大瓶颈——大量 P1 Bug 被标记 `clawsweeper:no-new-fix-pr`，核心消息投递问题久拖未决，用户情绪出现焦躁迹象（#121058 "Silent reply failures still recurring"）。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **多代理协作可靠性** | OpenClaw（#121058, #44925）, CoPaw（#6927 子代理死循环）, Hermes Agent（#38193 MCP OAuth 死锁） | 子代理完成消息投递不丢失、并发协作不死锁、失败可重试可通知 |
| **工具/插件安全边界** | NanoBot（#5329/#5218 ExecTool 路径逃逸）, OpenClaw（#45031 技能安全扫描）, ZeroClaw（#9362/#8741 浏览器截图路径逃逸）, CoPaw（#6916 插件静默创建定时任务）, Hermes Agent（#84959 防止 execute-code 绕过守卫） | 沙箱边界完整、凭据不泄露、插件权限需用户确认 |
| **Token 成本控制** | Hermes Agent（#6839 惰性 Tool Schema 加载, 18👍）, OpenClaw（#95610 prompt-cache 失效, #9016 暴露成本）, CoPaw（#6953 LLM prefix cache 优化） | 减少每次调用的 Token 开销、缓存命中率优化、成本透明可观测 |
| **渠道消息投递可信度** | OpenClaw（#121058 静默失败）, NanoClaw（#3086 WhatsApp 假成功, #2689 Signal 静默丢弃）, IronClaw（#7535-#7545 Telegram Bug 簇）, NanoBot（#5327 随机重复消息） | 消息"假成功"不可接受、投递状态可追踪、各类渠道行为一致性 |
| **Windows 平台支持** | Hermes Agent（#83683/#84185 网关死亡）, ZeroClaw（#7462 74 测试失败, #9290 安装失败）, LobsterAI（#2479 Windows 插件安装修复） | 网关进程守护、CI 覆盖、安装/升级流程可靠 |
| **运维可观测性** | NanoClaw（#2504 `ncl status`）, Hermes Agent（#66616 Skills 索引过期）, IronClaw（#7360 压测覆盖）, ZeroClaw（PR #9556 Langfuse 后端） | 轻量健康检查、可观测性后端集成、测试覆盖盲区补齐 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|------|---------|---------|-------------|
| **OpenClaw** | 全功能通用 Agent 运行时 | 开发者/高级用户，多代理复杂编排 | 多代理编排、子代理消息传递、Cron/记忆/技能全栈 |
| **Hermes Agent** | 插件平台化 + 桌面端 | 桌面端重度用户、插件开发者 | 插件接口系统化扩展（hooks/事件总线/脱敏注册表）、网关 + 桌面应用 |
| **NanoBot** | 轻量安全 + 多通道 | 中小团队、Docker 部署者 | 工具沙箱加固优先、ExecTool/WebFetch 安全闭环 |
| **IronClaw** | 企业部署 + 高频迭代 | 企业运维、托管部署 | Reborn 架构、orchestrator + 容器化、QA 流程驱动 |
| **CoPaw** | Agent 协作 + 移动端 | 移动端用户、多 Agent 工作流 | 单窗口多 Agent 协作、插件生态扩展 |
| **ZeroClaw** | 安全 + 跨平台兼容 | 多平台用户、安全意识强的团队 | 安全修复优先、Windows/macOS 兼容攻坚 |
| **NanoClaw** | 模板/插件体系 + 渠道集成 | 开发者、多渠道运营 | Agent Plugins 1.0.0 格式迁移、渠道 API 对接 |
| **PicoClaw** | 嵌入式/轻量部署 | 资源受限场景、Discord/Telegram 用户 | routed-agent 多智能体路由、轻量级引擎 |
| **LobsterAI** | 桌面客户端体验 | Mac/Windows 桌面用户 | OpenClaw 引擎封装、本地 UI 优化 |

**核心分化维度：** 部署形态（纯 CLI/桌面客户端/容器托管）、安全侧重点（沙箱/凭据/插件权限）、Agent 架构（单代理/多代理路由/子代理编排）。


## 6. 社区热度与成熟度

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代期** | IronClaw（日更 RC 版本）, CoPaw（Beta 高频发布） | 版本迭代快、QA 流程完善、社区反馈闭环高效 |
| **高活跃 · 稳定性攻坚** | OpenClaw, ZeroClaw, Hermes Agent, NanoBot | 功能与 Bug 并行推进、社区讨论深度高、但修复合入存在积压 |
| **架构演进期** | NanoClaw（Agent Plugins 1.0.0 迁移）, Hermes Agent（插件平台化） | 核心结构变更推进中、外围功能暂时让位 |
| **稳步修复期** | LobsterAI | 合并率高但新 Issue 少、存量问题待激活 |
| **响应趋缓** | PicoClaw | 社区贡献积极（3 PR 待合并）但维护者响应慢 |
| **休眠** | NullClaw, TinyClaw, Moltis, ZeptoClaw | 24 小时内零活动 |


## 7. 值得关注的趋势信号

1. **"静默失败"已成行业公敌。** 从 OpenClaw 的消息丢失、NanoClaw 的 WhatsApp 假成功到 IronClaw 的 Telegram 卡死，用户对"状态不可知"的容忍度已降至冰点。可预测的投递保证和明确的失败反馈正成为基础要求，而非增值特性。

2. **安全边界从"功能"走向"合规"。** NanoBot 的凭据泄露修复、ZeroClaw 的 SSRF 防护、CoPaw 的插件权限质问、Hermes Agent 的工具守卫——安全已从单个项目的自觉行为演变为整个生态的共同基线。插件权限管理（安装时声明、运行时校验）可能成为下一轮标准能力。

3. **Token 成本管控成为规模化部署的前置条件。** Hermes Agent 的 #6839（18👍）与 OpenClaw 的 prompt-cache 修复表明：当 Agent 从演示走向生产，每次调用 3500-5000 Token 的工具 Schema 开销已经不可接受。**惰性加载、双阶段注入、缓存友好**将成为架构设计的默认考量。

4. **Windows 支持是跨向主流用户的必经之路。** 三大活跃项目（Hermes、ZeroClaw、LobsterAI）同日遭遇 Windows 相关问题，且均涉及网关进程与文件系统语义。随着 Agent 从 Linux 服务器走向个人桌面，Windows 兼容性将决定生态能否触达大众市场。

5. **多代理协作从"炫技"走向"可信"。** OpenClaw 的子代理消息丢失问题集群与 CoPaw 的子代理死循环共同指向：多代理架构的价值取决于其**确定性**。在可靠性未达标前，社区更倾向保守的单代理 + 路由方案（如 PicoClaw）。

6. **运维可观测性缺口开始显性化。** 独立健康检查命令（NanoClaw #2504）、压测覆盖扩展（IronClaw #7360）、可观测性后端集成（ZeroClaw + Langfuse）——部署规模扩大后，用户需要的是"告诉我哪里坏了"，而非"自己排查"。

7. **社区贡献与维护者带宽的剪刀差在扩大。** OpenClaw 的 356 条待合并 PR、PicoClaw 的 3 条 PR 等 3 周无人 review、NanoClaw 的修复 PR 挂起 3 个月——贡献者热情未被有效承接。**治理效率将成为下一阶段项目分化的关键变量。**

---

*报告基于各项目 GitHub 公开数据生成，数据窗口为 2026-08-13 前 24 小时。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-13

## 今日速览

过去24小时内，NanoBot 项目共产生 8 条 Issue 更新（4 新开/活跃、4 已关闭）和 36 条 PR 更新（19 条待合并、17 条已合并/关闭），整体活跃度较高。社区讨论集中在**安全加固**（Docker 权限、Jina 凭据泄露、ExecTool 路径越界）和**多通道体验优化**（Matrix 线程、微信登录、WebUI 协作）两大方向。安全类 PR 合并进展显著（5 个安全相关 PR 已合并），另有数个高质量 PR 待合并，涉及会话生命周期、DeepSeek V4 Pro 支持等，项目功能性推进扎实。Issue 侧无重大回归报告，#5327 重复消息问题已关闭，整体健康度良好。

---

## 项目进展 — 今日合并/关闭的 PR

今日共合并/关闭 17 个 PR（含混合状态），其中影响较大的包括：

| PR | 内容 | 状态 |
|---|---|---|
| [#5258](https://github.com/HKUDS/nanobot/pull/5258) | **WebFetch 凭据泄露修复**：阻止含用户凭据的 URL 转发至 Jina，并检查本地重定向链 | ✅ 已合并 |
| [#5320](https://github.com/HKUDS/nanobot/pull/5320) | **Docker 权限修复**：恢复权限降级所需 capabilities，启用 no-new-privileges | ✅ 已合并 |
| [#5329](https://github.com/HKUDS/nanobot/pull/5329) | **ExecTool 路径防护**：补全 `~`、`~user`、重定向及赋值场景的路径边界检查 | ✅ 已合并 |
| [#5218](https://github.com/HKUDS/nanobot/pull/5218) | **ExecTool 重定向/分组定界符路径越界修复** | ✅ 已合并 |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | **Gemini 签名回退**：保留导入的工具调用签名，避免 Gemini 3 拒绝重放 | ✅ 已合并 |
| [#5362](https://github.com/HKUDS/nanobot/pull/5362) | **DeepSeek V4 Pro Responses API 支持** | ✅ 已合并 |
| [#5279](https://github.com/HKUDS/nanobot/pull/5279) | **会话历史存储迁移**至 config-dir，隔离于 agent workspace 之外 | ✅ 已合并 |
| [#4878](https://github.com/HKUDS/nanobot/pull/4878) | **Agent hooks 自动发现机制**（pkgutil 扫描 + entry_points） | ✅ 已合并 |

其中 #5329 和 #5218 连续补齐工具沙箱的边界缺失，闭环了此前 #5278 及社区暴露出的 workspace 绕行问题；#5258 将与今日关闭的 [#4884](https://github.com/HKUDS/nanobot/pull/4884) 安全报告形成完整修复链路，说明安全修复推进有针对性且高效。

---

## 社区热点

1. **[#5327 — Bug: 推理期间重复输出相同消息](https://github.com/HKUDS/nanobot/issues/5327)**（已关闭｜11 条评论）
   - 随机性重复输出同一语句（如 "Good points, let me investigate..."），发生于复杂指令场景，社区可复现路径有限，最终已关闭。
   - 诉求：用户期望推理过程可控可解释，而非随机性重复。

2. **[#5350 — 新增 QwenCloud Provider 支持](https://github.com/HKUDS/nanobot/issues/5350)**（1 条评论｜👍 0）
   - 提案新增与 DashScope 并行的 QwenCloud 路径，支持国际开发者使用 Qwen 模型。作者为 evelyn-jialin-zhang，更新于今日。
   - 属于海外生态覆盖类需求，建议关注跟进。

3. **[#5291 — 子代理会话转写持久化](https://github.com/HKUDS/nanobot/pull/5291)**（待合并）
   - 子代理完整对话（工具调用、推理过程）目前运行后即丢失，社区希望保留审计与复盘能力。

---

## Bug 与稳定性

| 严重度 | Issue | 是否有 Fix PR | 说明 |
|---|---|---|---|
| P1 — 工作区边界绕过 | [#5329](https://github.com/HKUDS/nanobot/pull/5329) / [#5218](https://github.com/HKUDS/nanobot/pull/5218) | ✅ 已合并 | ExecTool 通过 `~user`、重定向、分组定界符等方式逃逸 workspace 限制，已修复 |
| P1 — 凭据泄露 | [#4884](https://github.com/HKUDS/nanobot/issues/4884) | ✅ 已合并 ([#5258](https://github.com/HKUDS/nanobot/pull/5258)) | WebFetch 将含凭据完整 URL 发送至 Jina，修复后仅本地路径处理凭据类 URL |
| P1 — Docker 部署失败 | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | ✅ 已合并 ([#5320](https://github.com/HKUDS/nanobot/pull/5320)) | entrypoint 权限被拒绝（cap_drop: ALL 导致 root bootstrap 失败），已修复 |
| P2 — 随机重复消息 | [#5327](https://github.com/HKUDS/nanobot/issues/5327) | ✅ 已关闭 | 触发条件不明确，已关闭，建议后续跟踪 |
| P2 — 跨时区测试失败 | [#5348](https://github.com/HKUDS/nanobot/issues/5348) | ❌ 暂无 | token-usage 测试在特定 5 小时窗口内确定性失败（UTC 与配置时区不一致），需统一时区处理逻辑 |

### 待合并 PR 中的 Bug 修复
- [#5271](https://github.com/HKUDS/nanobot/pull/5271) **P0 — 会话数据竞态覆写**：防止后台过期任务在 `/new` 或生命周期切换后覆盖当前会话数据 — 待合并中
- [#5360](https://github.com/HKUDS/nanobot/pull/5360) **P2 — MCP 工具名非 ASCII 碰撞**：`"获取天气"` 等全非 ASCII 名称消毒后全部折叠为 `_`，导致注册冲突 — 待合并中

---

## 功能请求与路线图信号

| 功能 | 来源 | 状态 | 判断 |
|---|---|---|---|
| QwenCloud 国际平台 Provider | [#5350](https://github.com/HKUDS/nanobot/issues/5350) | 新开 Issue | 海外开发者需求，有刚需信号，维护者值得评估 |
| 语音输出（TTS） | [#4010](https://github.com/HKUDS/nanobot/issues/4010) | 3 个月未更新 | 呼声多年，跨通道可行性已评估，可能保留在长期路线图 |
| 子代理会话转写 | [#5291](https://github.com/HKUDS/nanobot/pull/5291) | PR 待合并 | 设计完整，配套测试，推进可能性较大 |
| 会话协作（@提及） | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | 新开 PR | WebUI 协作能力增强，符合多人协作场景演进方向 |
| 微信 QR 登录 Token 持久化 | [#5361](https://github.com/HKUDS/nanobot/pull/5361) | 新开 PR | 若 WebUI 无 channels 配置则 token 丢失，修复方向明确 |

---

## 用户反馈摘要

- **Matrix 线程上下文**（[#5275](https://github.com/HKUDS/nanobot/issues/5275)）：用户 whisperity 明确表达了 Discord/Slack 式的线程独立上下文是高频诉求 — "reply in thread" 进入的消息流不应与主房间混在一起。社区将 Matrix 与 Discord/Slack 对比，说明跨渠道体验一致性已是用户的重要评估维度。
- **Docker 部署门槛**（[#5295](https://github.com/HKUDS/nanobot/issues/5295)）：部署文档与实际 Docker 配置之间存在预期差异，用户在跟随文档操作时遭遇启动失败，说明部署流程文档与默认配置需要持续对齐。
- **WebFetch 信任边界**（[#4884](https://github.com/HKUDS/nanobot/issues/4884)）：用户对第三方服务（Jina）的隐私信任敏感，提出将含凭据的 URL 仅通过本地路径处理 — 社区对数据外发保持警惕，安全敏感度高。

---

## 待处理积压

**需关注（长时间未响应的已打开 Issue/PR）：**

1. **[#4010 — 语音输出支持](https://github.com/HKUDS/nanobot/issues/4010)**（5 月 26 日创建，3 条评论）
   语音输出诉求持续存在但无更新，建议维护者给出状态/路线图说明，或标记为 long-term。

2. **[#4329 — 原生 TypeScript 终端 UI](https://github.com/HKUDS/nanobot/pull/4329)**（6 月 13 日创建，标注 conflict）
   社区已做出跨平台实现，打通 Python gateway 与 TS 客户端，但 conflict + 长期未推进，可能是因为维护者对该方向有其他计划。

3. **[#5358 会话协作 PR](https://github.com/HKUDS/nanobot/pull/5358)**（chengyongru 系列）与 **[#5342 应用发现重构](https://github.com/HKUDS/nanobot/pull/5342)**（Re-bin）均标注 conflict，反映了多个同路径 PR 对 WebUI 模块改动冲突，建议维护者优先安排 review 合并，避免长期分叉。

---

*数据统计截至 2026-08-13，基于 HKUDS/nanobot 公开 GitHub 数据生成。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-13

---

## 1. 今日速览

项目今日保持高活跃度：24小时内产生50条Issue更新（39条活跃/新开，11条关闭）和50条PR更新（34条待合并，16条已合并/关闭），无新版本发布。核心开发力量集中在**插件系统扩展**（teknium1主导的系列PR，至少4条今日新增）与**桌面端稳定性修复**上。值得警惕的信号：**Windows平台连续出现两条P1级严重Bug**（#83683、#84185），均涉及网关在重启/更新后静默死亡且无日志，影响消息通道可用性，需优先响应。此外，MCP OAuth连接长时间运行后“卡死”（#38193、#81051）问题持续发酵，今日已出现对应修复PR #84963。整体看，功能开发节奏快，但稳定性修复与测试覆盖仍需加强。

---

## 2. 版本发布

今日无新版本发布。当前最新版本为 v0.20.0（此前发布）。

---

## 3. 项目进展

今日合并/关闭的16条PR中，以下推进了关键能力（按重要性排序）：

- **PR #65632 (已关闭/合并)** `feat(plugins): add pre_transcription hook and STT prompt threading` — 为插件系统新增 STT（语音转文字）请求预处理钩子，允许插件注入模型提示词/词汇表，修复 #64168。该功能由 @hansai-art 提出，后经 @teknium1 在新PR #84934 中接手并以保留原作者署名方式重新提交（今日 #84934 已关闭，疑似完成合并）。
- **PR #84519 (已关闭/合并)** `fix(agent): correct Upstage solar-pro4 and syn-pro context lengths` — 修正Upstage两个模型的上下文长度配置（syn-pro 从错误的256K修正为实际64K，此前可能导致上下文溢出/截断）。修复 #84482。合并前被标记为重复，可能以更优雅的方式（如直接从API获取）整体替换。
- **Issue #42525 (已关闭)** — Desktop UI 支持切换工作目录功能已实现。
- **Issue #64161、#64164、#64168、#64900、#65449 (已关闭)** — 多条插件扩展子任务完成，包括 streaming输出钩子（#64161)、插件间事件总线（#64164)、敏感信息脱敏注册表（#65449)。

**核心趋势**：插件接口扩展（累积 PR #84914、#84923、#84934）正在系统性地将 Hermes Agent 从“固定功能单体”推向“可扩展平台”，今日新增的 `pre_command` 观察钩子与 `ctx.call_mcp` 能力（#84914）值得关注，它允许插件观测命令分发并调用已配置的 MCP 服务器（默认拒绝、逐服务器白名单）。

---

## 4. 社区热点

| 排名 | 条目 | 评论数 | 诉求分析 |
|------|------|--------|----------|
| 1 | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) — 惰性工具Schema加载 | 39 | **核心痛点：Token成本**。当前每次API调用都会注入全部工具schema（50+工具集），消耗3500~5000 tokens；在本地模型上浪费尤其严重。18个👍说明这是用户普遍关心的成本问题，涉及 `needs-decision` 标签，可能对未来架构有较大影响。 |
| 2 | [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) — 插件接口扩展跟踪 | 33 | 这是社区插件接口扩展的“总纲”issue，聚合了多条子功能。今日多条插件相关PR/Issue围绕此展开，说明项目正在将分散的插件能力请求进行系统性整合。 |
| 3 | [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) — 生命周期事件目录+钩子分类 | 24 | 与 #64182 同源，目标是为一堆零散等待合并的钩子PR建立一个统一的验收标准，避免“一次性合入十几个互不相关的 add VALID_HOOKS”。这反映了维护者对**架构一致性**的关注。 |
| 4 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills索引过期 | 19 | 自动巡检发现skills索引已过期29.8小时（限制26h），属于基础设施层面的告警，影响文档站点的技能列表展示。 |
| 5 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) — 桌面重启杀死网关不重启 | 10 | **P1高优先级回归Bug**：Windows桌面应用每重启一次就会force-kill消息网关且不自动重启，导致微信/QQ/Telegram全部静默。该用户已指出这是相对旧版本的回归。 |

**分析**：今日热点集中**成本效率**（#6839）与**插件平台化**（#64182/#64231）两条线。前者反映用户对API消耗的敏感度，后者体现社区参与度在提升但需要明确的架构引导。高赞 Issue #6839（18👍）如获实现，将显著改善本地模型用户的体验。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 消息通道可用性，需紧急响应

| 编号 | 问题 | 状态 |
|------|------|------|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Windows桌面应用重启后网关被kill且不重启（微信/QQ/Telegram静默）— 回归 | 🔴 无PR，10评论 |
| [#84185](https://github.com/NousResearch/hermes-agent/issues/84185) | Windows上 `hermes update` 后新网关进程静默死亡（无日志、无PID文件） | 🔴 无PR，6评论 |

两问题同属 Windows 平台网关进程生命周期管理，大概率是同一类缺陷（如启动参数/工作目录/句柄继承问题），建议合并排查。社区已有多位用户确认存在。

### 🟠 P2 — 功能不可用/间歇性故障

| 编号 | 问题 | 状态 |
|------|------|------|
| [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | OAuth MCP服务器 keepalive 重连后永久死锁（auth-flow生成器跨任务释放锁） | 🔧 **已有fix PR #84963** |
| [#81051](https://github.com/NousResearch/hermes-agent/issues/81051) | OAuth MCP连接运行4小时后永久“parked”，仅重启网关可恢复 | 🔧 关联PR #84963 |
| [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | DeepSeek上 `title_generation` 辅助任务HTTP 400（response_format不支持） | ⏳ 无PR，2👍 |
| [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) | `browser_exec` 因 PYTHONPATH 指向 Hermes venv 导致 pydantic_core ModuleNotFoundError | ⏳ 无PR |
| [#84206](https://github.com/NousResearch/hermes-agent/issues/84206) | `@file:` 文本展开假设UTF-8，遇GBK/Shift_JIS等产生 UnicodeDecodeError | ⏳ 无PR |
| [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) | CLI updater 在 shallow/diverged 安装中展示虚假的新提交数 | ⏳ 无PR，P1标记但无assignee |

### 🟡 P3 — 体验/边缘问题

| 编号 | 问题 | 状态 |
|------|------|------|
| [#77505](https://github.com/NousResearch/hermes-agent/issues/77505) | Desktop会话列表严重滚动抖动（#77328修复未完全解决） | ⏳ 关联 #84964 亦报告滚动停滞 |
| [#84964](https://github.com/NousResearch/hermes-agent/issues/84964) | Desktop侧栏25+会话时滚轮滚动停滞（“死区”，滚动条拖拽正常） | 🔧 **已有修复PR #84966**（截断问题）但滚动问题未明确 |
| [#81039](https://github.com/NousResearch/hermes-agent/issues/81039) | Windows 每次子进程 spawn 闪控制台窗口（已关闭，可能已修复） | ✅ 已关闭 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills索引过期（29.8h > 限制26h），自动巡检告警 | ⏳ 持续状态 |

**总结**：Windows 平台存在一个需要系统性排查的网关守护问题（两个P1）；MCP OAuth类故障已进入修复阶段——PR #84963 明确了修复方向（在拥有任务侧确定性关闭SDK auth流生成器、物化OAuth资源bearer状态）。此外 `@file:` 编码问题（#84206）是很有价值的边界修复，对中文用户影响较大。

---

## 6. 功能请求与路线图信号

今日新功能/优化请求及对应信号：

### 高潜力（可能进入下个版本）

- **#6839 Lazy Tool Schema 加载（双阶段注入）** — 18👍，39评论，热度最高。已有方向性讨论（needs-decision），如落地将显著减少每次调用的Token开销。
- **#84946 Quota 告警阈值可配置化** — 已有PR #84946 提交，直接响应 #6567。
- **#84959 阻止网关 execute-code 绕过工具守卫** — 安全边界加固PR，新建即P2标定，预计会快速推进。
- **#84960 Inbox风格会话侧栏卡片** — 桌面端UI改进，有完整设计考虑，已在PR中实现。
- **#84962 Kubernetes终端后端** — 以操作者自身集群的**无状态session pod**执行每条命令，隔离Hermes进程、ServiceAccount token和文件系统。这是面向企业/运维场景的重要扩展，安全价值高。

### 路线图信号（需社区决策）

- **插件接口扩展（#64182+子任务）** — teknium1 正在系统性推动插件平台化，今日新增 PR #84914（`pre_command` 钩子 + `ctx.call_mcp`）、#84923（ownership ledger + on_unload + 监督任务），说明**Phase-0 结构层**正在成型。
- **#45779 多网关连接与标签页** — 7👍，Desktop仅支持单网关是个限制，社区呼声较高。
- **#46257 小米 MiMo-V2.5 TTS/ASR 原生接入** — 中文语音场景（国内用户高频），未见冲突PR。
- **#39043 Signal 适配器功能补全** — 引用/回复/编辑/远程删除/已读回执，3👍属于渐进增强，无争议。
- **#84834 Webhook 修复战役（meta-issue）** — 以“图门控”策略系统性修复 webhook 接入、执行、投递、配置、管理UI、部署到文档的全链路问题，属于架构级清理。
- **#79564 Discord 功能对齐战役（API v10）** — 类似的 meta-issue，旨在让Discord接入跟上官方API能力。

### 远期/概念性

- **#38275 HAMP — 代理地址系统+异步消息+加密身份** — 概念性提案，建议为agent定义 `agent@domain` 式地址，支持离线消息与端到端加密。评论仅2条，处于早期讨论阶段。

---

## 7. 用户反馈摘要

- **Agent成本敏感度显著提高** — #6839 的39条评论与18个赞表明：随着工具集扩大，用户越来越关注Token消耗。建议在路线图优先级上提升此优化项，尤其是对本地模型用户。
- **Windows平台稳定性亟待加强** — #83683 用户明确指出“这是回归”，说明部分用户经历过正常版本，升级后遇到此问题；#84185 反映更新后静默死亡问题让用户无任何排查线索（无日志）。连续两个P1指向Windows，建议专门分配人力排查。
- **DeepSeek 兼容性为高频痛点** — #83390（title_generation 400）和 #49169（模型picker显示深层别名）均与DeepSeek相关，可能因为该提供方在中文用户群体中占比较高。
- **中文用户的编码问题** — #84206 的 `@file` GBK/GB18030 编码兼容，直接影响国内用户读取本地CSV/文本。
- **MCP OAuth 稳定性是“信任杀手”** — #38193 的“永久死锁”和 #81051 的“4小时后必定卡死”使受影响用户只能手动重启网关。好在 PR #84963 已针对性修复且关联两条issue，建议合并前请提报用户进行验证。
- **Desktop UI 滚动卡顿持续存在** — #77505 已尝试过一种修复（#77328 memoization），但物理滚动jitter与25+会话后的停滞问题仍存在；#84966 修复的是“截断过早”问题，滚动核心问题还未解决。用户反馈“拖动滚动条可以，但滚轮不行”，指向虚拟化列表的 wheel 事件处理缺陷，建议深入排查。
- **贡献者回馈** — #65449 的插件脱敏能力获得社区认可（closed且作者为teknium1）；PR #84934 明确“保留原提交者署名”处理方式体现了项目在鼓励外部贡献方面的良好实践。

---

## 8. 待处理积压

以下为长期未得到响应的关键项，建议维护者关注：

| 编号 | 项目 | 时长 | 备注 |
|------|------|------|------|
| [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) | CLI updater 在 shallow 安装下显示虚假提交数 (P1) | 自 06-27 起已47天，仍开放 | P1标记但无人assign、无关联PR，与 #84185（Windows update 后死掉）可能同源 |
| [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | OAuth MCP 永久死锁 (P2) | 自 06-03 起已71天 | 今日有PR #84963，但长期无响应是事实 —— **建议合并PR后请原始提报者验证并关闭** |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | Signal 适配器功能补全 (P3) | 自 06-04 起已70天 | 未标注会阻塞、无反对意见但无人实现。社区在用Signal的场景，建议明确是否纳入某迭代 |
| [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) | Desktop 多网关标签页 (P3) | 自 06-13 起已61天 | 7👍 表达较强需求，建议在产品roadmap中回应或标记“暂不计划” |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills索引过期持续告警 | 自 07-18 起已26天 | 自动巡检反复触发但未根本解决，说明 cron workflow 的可靠性存在问题，需排查是否与时区/环境相关 |
| [#46257](https://github.com/NousResearch/hermes-agent/issues/46257) | 小米 MiMo-V2.5 TTS/ASR 原生接入 | 自 06-14 起已60天 | 国内语音场景有明确需求。社区如无人实现，建议标注“欢迎贡献者”并附初步技术方案 |
| [#67934](https://github.com/NousResearch/hermes-agent/pull/67934) | Ollama 本地模型发现用原生tags | 自 07-20 起已24天 | **已标注 MERGEABLE/BLOCKED，更新分支已对齐**，但无CI检查。取决于维护者是否使用bot提交的PR |

---

**报告生成时间**: 2026-08-13  
**数据源**: GitHub NousResearch/hermes-agent  
**统计**: 24h Issues 50条 | PR 50条 | Releases 0

---
以上日报基于 GitHub Issue/PR 数据自动生成，建议结合项目实际维护者人工判断后发布。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

PicoClaw 项目在过去 24 小时内处于**中等活跃度**状态：共收到 2 条 Issue 更新（均为存量问题触达，无新开 Issue）和 3 条 PR 更新（全部处于待合并状态，无新提交或合并）。值得关注的是，3 个待合并 PR 均已进入代码审查后期（更新于 8 月 12 日），但尚无维护者明确批准或请求修改的迹象。项目长期存在的一个可观测性短板——MCP 服务器连接失败导致智能体循环挂起（Issue #3269）和一个 Web UI 输入延迟问题（Issue #3281）——均已超过三周未获修复，社区对该类稳定性问题的关注度正在累积。无新版本发布，项目主干推进节奏趋于平稳、略显放缓。

---

## 3. 项目进展

过去 24 小时无 PR 被合并或关闭，但**3 个未合并 PR 均处于活跃讨论/迭代阶段**，值得关注：

| PR | 功能/修复 | 状态 | 备注 |
|---|---|---|---|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | 修复 routed-agent 上下文管理不遵循历史记录、摘要、压缩和 seahorse bootstrap 的 Bug | 待合并 | 核心修复类 PR，解决 Discord 频道路由场景下记忆失效问题 |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 支持私有 Bot 聊天中的 Telegram 话题（Topic）模式 | 待合并 | 功能增强，修复 `Chat.IsForum` 无法覆盖私有聊天场景的缺陷 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新增 Exa 原生 Web 搜索供应商 | 待合并 | 扩展 `tools.web` 能力，已实现日期范围过滤 |

若上述 PR 在近期合并，项目将获得**三个关键改进**：① 多智能体路由场景下的记忆持久性（此前为严重缺陷）；② Telegram 平台功能对齐（私有聊天话题支持）；③ 搜索生态扩展（Exa 作为新的原生供应商）。其中 PR #3316 对生产环境稳定性影响最大，建议维护者优先 review。

---

## 4. 社区热点

过去 24 小时无新增高热讨论，但两个**存量 Issue 积累了社区关注**：

- **[Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP 连接失败导致 agent 循环挂起**（评论 4，👍 1）：用户 `ruiyigen` 报告 MCP 服务器连接失败时，整个 chat 界面停止回复。该问题已存在 **24 天**（创建于 7 月 20 日），虽仅有 4 条评论，但问题性质严重——直接影响可用性，且涉及 MCP 这一核心扩展机制。评论中透露出用户对"失败降级"机制的期待。

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI 输入延迟**（评论 4，👍 1）：用户 `xpader` 报告历史消息较长时输入框严重卡顿。同样是**已存在 23 天**的存量问题，影响 Web UI 的日常使用体验，评论者可能已累计了复现细节。

**背后的诉求**：两者共同指向用户对**鲁棒性和性能**的期望——当外部依赖（MCP）故障时系统应优雅降级，而非整体挂起；当会话数据量增长时界面应保持流畅。这两个问题若长期不修复，将损害重度用户对 PicoClaw 的信任。

---

## 5. Bug 与稳定性

以下为当前活跃的 Bug 类 Issue，按严重程度降序排列：

| 严重程度 | Issue | 描述 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败导致 agent 循环挂起，chat 界面停止响应 | 开放（24 天） | ❌ 无 |
| 🟡 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框在历史消息较长时严重卡顿 | 开放（23 天） | ❌ 无 |
| 🟢 低 | PR [#3316](https://github.com/sipeed/picoclaw/pull/3316) 所述 Bug | routed-agent 不记忆历史、自动压缩不触发 | 已修复（待合并） | ✅ 有（PR #3316） |

**分析**：最严重的 MCP 挂起问题（#3269）尚无任何修复 PR 或维护者响应，且持续 3 周以上——这应被视为**项目健康度的警示信号**。Web UI 性能问题（#3281）同样缺乏关注。相比之下，PR #3316 涉及的 routed-agent 记忆问题虽严重，但已有开发者在社区自发修复并提交 PR，反映出该问题已被部分用户实际遭遇并着手解决。

---

## 6. 功能请求与路线图信号

过去 24 小时无新功能请求，但 3 个待合并 PR 提供了**明确的路线图信号**：

1. **Telegram 话题完整支持**（PR #3315）：当前仅支持论坛超群组，不支持私有聊天。该 PR 落地后，Telegram 平台用户将获得与 Discord 对等的话题体验。**预计纳入下一版本（如 0.3.2）概率较高**——修复明确、代码量适中、无破坏性变更。

2. **Exa 作为原生 Web 搜索供应商**（PR #3299）：这标志着 PicoClaw 正在扩展搜索后端生态，支持除现有供应商外的更多选择。该 PR 已存在 18 天，实现较完整（包括配置、日期过滤），**预计纳入概率中等偏高**，但需维护者确认 API 密钥管理和供应商策略。

3. **routed-agent 上下文修复**（PR #3316）：功能修复而非新功能，但暗示了**多智能体场景是当前社区的核心使用模式之一**——用户依赖 Discord 频道路由来隔离不同 agent 的上下文。该修复已获用户自发实现，**纳入概率高**。

**路线图判断**：短期内 PicoClaw 的下一版本大概率包含以上三项变更（1 个修复 + 2 个增强），方向聚焦于**通信平台体验补全（Telegram）**和**搜索能力扩展（Exa）**，而多智能体路由的稳定性修复将显著提升生产环境可用性。

---

## 7. 用户反馈摘要

基于上述 Issues 和 PR 的评论内容，提炼如下用户声音：

| 用户 | 角色 | 痛点/诉求 | 使用场景 | 满意度 |
|---|---|---|---|---|
| `ruiyigen`（#3269） | 中重度用户 | MCP 故障导致整体不可用，期望优雅降级 | 生产环境使用 Qwen3 + MCP 工具，依赖连续对话 | 不满意（等待响应 24 天） |
| `xpader`（#3281） | Web UI 日常用户 | 长历史输入卡顿，影响连续编辑体验 | 长期会话中持续编辑输入框，历史消息超过一定长度后延迟显著 | 不满意（等待响应 23 天） |
| `j-v`（PR #3316） | 开发者/高级用户 | 路由 agent 会话不记忆，自动压缩失效 | Discord 频道分配 agent 后，跨消息上下文丢失，token 累积无压缩 | **积极**（主动提交修复） |
| `genuss`（PR #3315） | 开发者 | Telegram 私有聊天话题无法识别 | 启用了话题模式的私有 Bot 聊天中，话题信息丢失 | **积极**（主动提交修复） |
| `kesku`（PR #3299） | 开发者 | 需要新的 Web 搜索后端 | 希望使用 Exa 的搜索能力和发布时间过滤 | **积极**（主动提交功能） |

**总体趋势**：社区中存在 **"等待响应 + 自主修复"** 的双重模式——存量 Bug 迟迟未获维护者回应（#3269、#3281），而部分具备开发能力的用户选择直接提交 PR 解决自身痛点（#3315、#3316、#3299）。这反映出社区活跃度尚可，但维护者的响应速度可能成为瓶颈。

---

## 8. 待处理积压

以下问题长期未获维护者响应或明确处理计划，建议提醒项目维护者关注：

| 类型 | 编号 | 摘要 | 等待时长 | 严重性 | 建议 |
|---|---|---|---|---|---|
| Issue | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 agent 循环挂起 | 24 天 | 🔴 高 | 建议在一周内给出响应，至少确认复现或提供临时绕行方案 |
| Issue | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史输入严重卡顿 | 23 天 | 🟡 中 | 建议标记为 triage，排查输入框渲染/状态管理瓶颈 |
| PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa Web 搜索供应商（待合并） | 18 天 | 🟢 低 | 建议确认是否纳入下一版本，避免长期悬挂 |

**维护者行动建议**：
1. 优先响应 Issue #3269（高严重性 + 长等待 + 社区关注度高）——即使暂时无法修复，也应提供明确状态更新。
2. 为 PR #3316（routed-agent 修复）安排 review——该修复影响生产部署稳定性，且为社区贡献。
3. 对 3 个待合并 PR 给出统一决策（合并/关闭/请求修改），避免积压认知负荷。

---

**项目健康度总评**：🚦 **中性偏谨慎**。社区活跃但维护响应趋缓；3 个高质量的社区 PR 等待合并彰显生态活力，但 2 个核心稳定性 Bug 悬而未决超过 3 周，已开始累积用户不满情绪。建议维护者加快 PR review 节奏，并对高严重性 Issue 给出明确回应，以维持社区信任。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：** 2026-08-13  
**数据窗口：** 过去 24 小时（截至 2026-08-13）

---

## 1. 今日速览

NanoClaw 在过去 24 小时保持**高度活跃**状态：共产生 4 条 Issue 更新（全部为新开）和 10 条 PR 更新（9 条待合并，1 条已关闭）。值得关注的是，核心团队（core-team）标记的 PR 占据待合并列表的 40%，包括 #3220 Agent Plugins 1.0.0 格式迁移和 #3231 插件 MCP 工作目录支持，表明主线功能开发正在稳步推进。今日无新版本发布，社区讨论焦点集中在模板/插件系统改造、渠道集成（WhatsApp、Signal、Telegram、Dial）和运维可观测性需求上。整体来看，项目处于**功能深化期**，核心架构调整与外围生态扩展并行。

---

## 2. 版本发布

无新版本发布。最近一次发布仍为 **v2.1.54**，当前多条 Issue 和 PR 的上下文均围绕该版本展开。

---

## 3. 项目进展

今日无 PR 被合并，但有 1 个 PR 被关闭：

- **[#3086 [CLOSED] fix(whatsapp): validate recipient exists before sending](https://github.com/nanocoai/nanoclaw/pull/3086)**（作者：alexandra261，创建于 07-18）  
  **状态：** 已关闭（未合并），关闭时间 08-12  
  **背景：** 该 PR 旨在修复 Baileys `sendMessage` 接受任意 JID 导致消息"假成功"的问题（接受不存在号码时仍返回 message key）。PR 关闭的具体原因未在数据中标注，需维护者确认是替代方案已落地还是 PR 被放弃。

**待合并 PR 中的重要进展（按关注度排序）：**

- **[#3220 [OPEN] feat!: agent templates become Agent Plugins 1.0.0 directories](https://github.com/nanocoai/nanoclaw/pull/3220)**（core-team）  
  这是当前最核心的架构变更：将 agent 模板迁移为 Agent Plugins 1.0.0 目录格式，同时包含安全加固（stamp-time symlink/caps/secret hardening）。PR 自述"no template box fits the main shape"，属于引擎级格式迁移，影响面较大。

- **[#2909 [OPEN] feat(setup): template setup flow in the wizard and first-agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909)**（core-team，stacked on #3220）  
  模板功能的第二部分：设置向导中的模板流程与首次 agent 印记。与 #3220 存在依赖关系，需先合并 #3220。

- **[#3231 [OPEN] feat(codex,opencode): honor plugin MCP cwd in both provider config writers](https://github.com/nanocoai/nanoclaw/pull/3231)**（core-team，08-12 创建）  
  #3220 的配套变更：让 Codex 和 OpenCode 的配置写入器都支持插件 MCP 工作目录（cwd）。Codex 侧已活体验证通过。

> **小结：** 核心团队正在推进"Agent Plugins 1.0.0"这一重大格式迁移，涉及模板系统、设置向导和 MCP 工作目录三个层面，属于跨版本的结构性演进。

---

## 4. 社区热点

今日最受关注的 Issue 是 **[#2504 feat: add `ncl status` command for lightweight operational health check](https://github.com/nanocoai/nanoclaw/issues/2504)**（作者：alexli-77）——虽然创建于 05-15，但在 08-12 获得新的评论（共 1 条），使其重新浮出水面。

**核心诉求：** 用户需要一个轻量级的运行健康检查命令。当前方案存在明显断层：
- `ncl sessions list` 只显示活跃会话，不提供健康信号（容器是否存活、最后消息时间、近期错误等）
- `/add-dashboard` skill 需要外部依赖，过于重

**深层需求分析：** 这反映出随着 NanoClaw 部署规模扩大，用户对**运维可观测性**的需求在上升——他们需要快速判断"实例是否在工作"，而不是登入容器逐一排查。该 Issue 已挂起近 3 个月仍未解决，可能是社区呼声较高的待办事项。

另一热点为 **[#3234 Template-stamped agent groups get a bare UUID id](https://github.com/nanocoai/nanoclaw/issues/3234)**——这是关于模板创建的 agent group 缺少 `ag-` 前缀导致 OneCLI `ensureAgent` 拒绝的问题，与 #3220 模板迁移直接相关，反映出当前模板功能的不成熟。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|---------|-------|------|-------------|
| 🟠 中 | [#3234](https://github.com/nanocoai/nanoclaw/issues/3234) | 模板创建的 agent group 使用 bare UUID（以数字开头），导致 OneCLI `ensureAgent` 拒绝 | **无 PR**。但 #3220 正在重构整个模板系统，可能在其范围内修复 |
| 🟠 中 | [#3233](https://github.com/nanocoai/nanoclaw/issues/3233) | Agent-scoped `ncl tasks` 无法看到 2.1.54 之前创建的周期性任务（报"No tasks"），pause/cancel 也失败；无迁移逻辑 | **无 PR**。属于升级回归问题，影响存量用户 |
| 🟡 低 | [#3086 (PR)](https://github.com/nanocoai/nanoclaw/pull/3086) | WhatsApp 收件人不存在时消息"假成功"，返回真实-looking 的 platformMsgId 但消息未送达 | **PR 已关闭**，无替代修复方案 |
| 🟡 低 | [#2689 (PR)](https://github.com/nanocoai/nanoclaw/pull/2689) | Signal DM 首次消息被静默丢弃（isMention 未置位）；DM platform ID 缺少 `signal:` 前缀 | **待合并**（自 06-04 起挂起超过 2 个月） |
| 🟡 低 | [#2346 (PR)](https://github.com/nanocoai/nanoclaw/pull/2346) | 未知斜杠命令被当作 Claude Code 命令处理，导致响应被静默丢弃 | **待合并**（自 05-08 起挂起 3 个月） |

> **最值得警惕的问题：** #3233 的周期性任务迁移缺口会影响所有从 2.1.54 之前版本升级的用户，属于典型的"升级后静默丢失功能"问题，建议优先处理。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 状态 | 分析 |
|---------|----------|------|------|
| `ncl status` 健康检查命令 | [#2504](https://github.com/nanocoai/nanoclaw/issues/2504) | Open（3 个月） | 运维可观测性需求，有评论但无 PR，可能尚未排入路线图 |
| 新增 QwenCloud 提供商 | [#3232](https://github.com/nanocoai/nanoclaw/issues/3232) | Open（今日新开） | 通过 provider skill 机制扩展模型提供商，符合项目"模块化提供商"的设计方向，被接受的可能性较高 |
| Agent Plugins 1.0.0 目录格式 | [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) | Open（core-team） | 核心架构变更，已在进行中 |
| 设置向导模板流程 | [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | Open（core-team） | 与 #3220 联动，确认在路线图中 |
| 添加 Dial 渠道 | [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | Open（07-14） | 新渠道集成 PR，待评审 |
| 新增 `add-why` 技能（解释消息处理过程） | [#3189](https://github.com/nanocoai/nanoclaw/pull/3189) | Open（08-05） | 提升可观测性/调试体验的工具类技能 |

**路线图信号：**
- **短期**：Agent Plugins 1.0.0 迁移（#3220 → #2909 → #3231）是明确的近期主线
- **中期**：QwenCloud provider skill（#3232）有较大概率被接受，符合现有扩展模式
- **长期**：`ncl status` 命令（#2504）代表运维体验优化方向，但 3 个月未有进展

---

## 7. 用户反馈摘要

- **运维痛点（#2504）：** 用户希望有一个轻量命令即可判断实例健康状态，当前方案要么信息不足（`sessions list`），要么依赖过重（dashboard skill）。实际使用场景是快速巡检多个实例。
- **升级回归痛点（#3233）：** 用户升级到 2.1.54 后，agent 内的任务管理完全"失明"——列表为空、操作失败，但任务实际仍在运行。这类问题对信任打击大，因为**静默失败**比显式报错更难排查。
- **模板功能缺陷（#3234）：** 模板创建的 agent group ID 不符合规范，反映出模板功能尚未达到生产可用状态——用户尝试新功能时立即遇到阻碍。
- **渠道反馈：** 用户报告 WhatsApp 消息"假成功"（#3086）和 Signal 消息被静默丢弃（#2689），说明渠道层消息投递的可信度仍需加强。这直接影响用户对"消息已发送"的信任。

---

## 8. 待处理积压

| 项目 | 类型 | 挂起时长 | 备注 |
|------|------|---------|------|
| [#2346 fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346) | PR（Fix） | **3 个月+**（05-08 创建） | 修复未知命令导致响应静默丢失的问题，对真实用户体验影响大，建议尽快评审 |
| [#2504 feat: add `ncl status` command](https://github.com/nanocoai/nanoclaw/issues/2504) | Issue（Feature） | **3 个月**（05-15 创建） | 运维可观测性需求，持续获得社区关注，但无 PR 跟进 |
| [#2689 fix(signal): DM platform ID consistency](https://github.com/nanocoai/nanoclaw/pull/2689) | PR（Fix） | **2 个月+**（06-04 创建） | Signal 渠道的 DM 消息被静默丢弃，修复已就绪但未合并 |
| [#3086 fix(whatsapp): validate recipient exists](https://github.com/nanocoai/nanoclaw/pull/3086) | PR（Fix） | **1 个月**（07-18 创建，今日关闭） | 已关闭但未合并，需确认替代方案或关闭原因 |

---

**日报总结：** NanoClaw 正处在核心架构演进期（Agent Plugins 1.0.0），核心团队投入显著，方向明确。但需注意：多个面向用户的 Bug 修复 PR（#2346、#2689）已挂起 2-3 个月未合入，而新 Issue 持续暴露升级回归（#3233）和模板功能缺陷（#3234）。建议在推进架构升级的同时，优先合入已就绪的修复 PR，避免用户侧问题积压。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-13

> 数据来源：IronClaw (github.com/nearai/ironclaw) GitHub 仓库


## 1. 今日速览

过去 24 小时项目整体活跃度极高，Issues 与 PR 更新合计 91 条，新开 Issues 与待合并 PR 均达到近期峰值。值得关注的是，QA 团队集中提交了一批 Telegram 集成相关的 P1/P2 级 Bug（#7535–#7547），涉及 webhook 激活、多用户访问、GIF/贴纸卡死等关键链路问题，指向 Telemetry 通道在真实部署环境下的稳定性短板。同时，两个 1.2.0-rc 版本相继发布，主要修复容器健康检查与 Windows 文件系统问题。项目处于 Reborn 架构快速迭代阶段，核心团队（serrrfirat、henrypark133 等）贡献密度极高，合并节奏顺畅。

**活跃度评估：🔥🔥🔥🔥🔥（极高）** —核心开发与 QA 验证双线并行，Release 迭代频率约 1 次/天。


## 2. 版本发布

过去 24 小时共发布 **2 个版本**（均为 1.2.0 候选版）：

### ironclaw-v1.2.0-rc.3（2026-08-12）
- **核心修复：** 运行时容器镜像现在内置 `curl`，使 orchestrator 的 `curl -fsS http://localhost:3000/` 健康检查探针可正常执行。此前镜像未附带 HTTP 客户端，探针从未成功运行，容器永远不会被标记为健康。
- **影响范围：** 所有由 hosted orchestrator 部署的实例。升级后容器健康状态检测将真实生效。
- **迁移注意：** 镜像体积略有增加（新增 curl 及其依赖），无其他迁移操作。

### ironclaw-v1.2.0-rc.2（2026-08-12）
- **核心修复：** Windows 首次启动的文件系统发布逻辑改用原生原子重命名语义（替代硬链接），并容忍不支持的目录同步操作；Release smoke 测试保留 Windows 账户身份，以保护独立 secrets 密钥。
- **影响范围：** 仅 Windows 部署。此版本修复了 rc.1 中 Windows 上 secrets 密钥可能无法正确隔离的问题。

**综合：** 两个 RC 版本均为小步快跑式 Bug 修复，无破坏性变更。关注 **rc.3 的健康检查修复**——它意味着从该版本起，"容器未标记为健康"这一静默故障将被暴露。


## 3. 项目进展

过去 24 小时合并/关闭的重要 PR（按影响面排序）：

### 已合并/关闭（19 条）

| PR | 内容 | 影响 |
|---|---|---|
| **#7555** `fix(docker): install curl so orchestrator healthchecks can run` | runtime 镜像安装 curl，forward-port 至 release/2026-08-11 | 修复容器健康检查失效问题（与 rc.3 同步） |
| **#7550** `feat(extensions): per-field help text on admin configuration forms + channel setup docs rewrite` | 扩展清单的 `[admin_configuration]` 字段新增 `description`，在 WebUI Admin 表单中渲染为字段提示；Telegram manifest 为首个落地场景 | 显著降低运维人员配置扩展的认知门槛 |
| **#7427** `release: prepare 1.1.1-rc.1` | Backport IronHub/custom MCP、WebUI、检索、运行时凭据、Slack、Telegram 修复至 1.1 线；Slack/Telegram 迁移默认跳过旧 channel 状态，支持显式 opt-in 导入 | 1.1 长期支持线同步获得关键修复 |
| **#6836** `feat(webui): @ironclaw/ui and workspace refactor` | 从最新 main 重新派生 WebUI 设计系统 workspace 包 `@ironclaw/ui`，5 层提交结构 | 推进 #7038 设计系统 Epic 的 Phase 3 基础 |
| **#5503** `[Experiment] Add compact Google extension capabilities` | Gmail 新增 `fetch_message_summaries`（inbox 高效摘要）、Calendar 新增摘要能力 | 为 Google 扩展提供上下文高效的新能力（实验性） |
| **#7560** `fix(release): retry the dist installer download` | 修复发布流水线中 cargo-dist 下载偶发连接失败 | 提升 Release 流水线鲁棒性 |

### 关键进展判断

**① "OMP 核心工具契约"重构落地（PR #7491，待合并）** — 模型中仅暴露 `read`、`write`、`edit`、`glob`、`grep` 五个精确名称，彻底移除旧的混合工具表面。这是 coding 工具链的收敛性突破，预计对模型工具调用准确率有显著正面影响。

**② 自动化任务结构化执行契约（PR #7548，待合并）** — 为定时自动化任务引入版本化的结构化执行合约（目标、成功标准、输出指令等），所有新建自动化均需提供 `execution_contract`。与 #7044（channel-first 引导）相呼应，为自动化任务的可靠性提供契约保障。

**③ Durable 存储 profile-agnostic 化（PR #7456，待合并）** — 将 Reborn profile 根目录统一至 `IRONCLAW_REBORN_HOME` 下，以 profile-agnostic 命名空间组织 `state/`、`system/` 等目录，并持久化安全信封防止重启降级。为多 profile 统一管理和安全加固铺路。


## 4. 社区热点

过去 24 小时讨论最活跃的条目：

### #7360 [OPEN] Expand stress coverage across built-in and durable write paths（3 评论）
**链接：** https://github.com/nearai/ironclaw/issues/7360

夜间 API 容量压测仅覆盖对话持久化和并发读端点，mock 模型从不返回工具调用，导致内置能力写入路径的回归无法被压测发现。**诉求：** 压测覆盖需扩展到工具调用写入路径。该项目对稳定性要求高，压测覆盖盲区可能导致静默回归。

### #7407 [CLOSED] Execute BatchPolicy::Parallel capability batches concurrently in invoke_capability_batch（3 评论）
**链接：** https://github.com/nearai/ironclaw/issues/7407

代理循环已能计算多工具调用的并行批量策略，但 `invoke_capability_batch` 仍串行执行所有批量。**诉求：** 使 `BatchPolicy::Parallel` 批次真正并发执行（有界），且零模型可见变化。该问题已关闭，对应 PR 已就绪。

### #7554 [OPEN] Custom MCP server add flow shows validation error（1 评论，新建 24h 内）
**链接：** https://github.com/nearai/ironclaw/issues/7554

用户报告 Custom MCP 服务器添加流程显示红色校验错误且无法添加，来源于 Slack 用户反馈。**值得注意：** 团队主动将 Slack 产品反馈渠道的帖子转成 GitHub Issue（"posted by IronClaw"），说明建立了用户反馈自动化工单机制。


## 5. Bug 与稳定性

QA（joe-rlo）集中提交了一批 Railway 部署实例上的 Telegram 集成问题，严重程度分列如下：

### P1 — 严重（功能完全不可用）

| Issue | 描述 | 状态 |
|---|---|---|
| **#7538** | Telegram 收到 GIF 或贴纸后代理**完全卡死**，即使后续文本消息也无响应 | 无 fix PR |
| **#7536** | 多用户访问流程断裂——Admin UI 创建的用户收到 token 但打开 UI 报 **"Invalid secret"** 错误 | 无 fix PR |
| **#7535** | 保存 Telegram bot 配置后 **webhook 未激活**，需完全重新部署才能生效 | 无 fix PR |

### P2 — 中等（功能异常但有绕过路径）

| Issue | 描述 | 状态 |
|---|---|---|
| **#7539** | WebUI 打开时，Telegram 用户消息在代理开始工作后才显示，会话流顺序错乱 | 无 fix PR |
| **#7540** | 超长 Telegram 消息被拆分为多段后仅处理第一段，后续段被拒 | 无 fix PR |
| **#7541** | 代理无法将生成的文件作为 Telegram 附件发送，而是提供本地路径 Markdown 链接 | 无 fix PR |
| **#7542** | 代理未识别当前会话已在 Telegram 中，仍询问"是否推送到 Telegram？" | 无 fix PR |
| **#7544** | 代理将内部推理/规划步骤/原始工具文档直接输出到聊天 | 无 fix PR |
| **#7543** | Telegram 定时任务首次执行成功但消息未送达 | 无 fix PR |
| **#7545** | 代理声称无加密货币实时数据工具，尽管有通用 HTTP 能力而拒绝查询多代币 | 无 fix PR |
| **#7451** | 代理有时错误地要求凭据，即使用户请求无需共享凭据 | 无 fix PR |
| **#7508** | GitHub MCP 扩展启动时给出"端点验证"混淆提示而非直接连接 | 无 fix PR |

### P3 — 轻微

| Issue | 描述 | 状态 |
|---|---|---|
| **#7546** | 代理对 Telegram 贴纸完全无反应/不确认 | 无 fix PR |
| **#7547** | 实例升级（agent-stg.nae.ai）在 egress 应用步骤失败 | 无 fix PR |

**趋势判断：** 排除 `scope: ci` 的 2 条基础设施问题，**Telegram 集成占了 QA 已发现 Bug 的绝对大头**（10/12 条）。核心团队已有 **PR #7464（linked-device）** 在推进 Telegram 链路的深度重构，QA 数据表明该方向优先级值得进一步提升。


## 6. 功能请求与路线图信号

### 新功能请求（24h 新增）

| Issue | 请求 | 潜在版本 |
|---|---|---|
| **#7517** | Cloud.near.ai 需支持 Google/GitHub 登录用户的 staking 路径 | 1.3.0+ |
| **#7537** | LLM 请求路径增加**通用 thinking/effort 控制**，各 provider 适配器映射原生参数（DeepSeek V4 Flash 为触发场景） | 1.2.0 候选 |
| **#7520** | Epic：移除已废弃/不可达的 WebUI 前端表面（v1/engine-v2 遗留） | 路线图 |

### 线上推进中（已有 PR 关联）

| Issue/PR | 功能 | 状态 |
|---|---|---|
| **#7439** (PR) | 每用户模型偏好 + `/model` 命令 | 待合并 |
| **#7491** (PR) | OMP 核心工具契约（5 个准名称收敛） | 待合并 |
| **#7044** (Epic) + **#6994** (PR) | 新用户 OOBE channel-first 引导 | 进行中 |

**判断：** #7537（thinking/effort 控制）的 PR 若在 1.2.0 冻结前被接纳，则对当前 DeepSeek 用户是一个显著体验改进点。 #7517 属于 Cloud 平台层需求，预计排入 1.3.0 路线图。


## 7. 用户反馈摘要

- **#7554（Custom MCP 校验）：** 用户试图添加自定义 MCP 服务器但被红色校验错误阻塞，体验受挫。需排查是校验逻辑过严还是实际配置不合法。
- **#7517（Staking 路径）：** 用户使用 Google/GitHub 登录后无法为推理进行质押，Stripe 为唯一付款方式，"Sign in with NEAR"仅作为登录选项而非可绑定的钱包。**用户直接诉求：** 允许将 NEAR 钱包绑定至现有 Google/GitHub 账户。
- **#7536（多用户访问）：** 管理员创建用户后，新用户打开 UI 即遇"Invalid secret"，**提及者无法确定是邮件中的 token 不正确还是 UI 读取存在缺陷**——这一困惑本身就是体验问题。
- **#7520（WebUI 表面清理）：** 用户面对混合了新老 WebUI 表面的前端，困惑于哪些功能可用。Epic 的提出本身即反映了用户的实际困惑。


## 8. 待处理积压

### 长期开放的关键 Issue

| Issue | 创建时间 | 天数 | 描述 |
|---|---|---|---|
| **#7044**（Epic） | 2026-08-03 | 10 天 | Onboarding to channel-first approach — 已有对应 PR #6994 推进中，但 Epic 本身未关闭 |
| **#7042**（Design System Phase 2） | 2026-08-03 | 10 天 | DESIGN.md 治理与指南 — 对应 PR #7043 待合并 |
| **#7038**（Design System Epic） | 2026-08-03 | 10 天 | Storybook + AI-first 设计系统 — 多 PR 并行推进中 |

### 本次观察发现的积压风险

- **Telegram Bug 簇**（#7535–#7546，共 10 条）全部**无 fix PR 关联**，其中 3 条为 P1。建议维护者将 PR #7464（linked-device）的合并优先级进一步提升，或在合并前为这批 P1 问题提供临时修复方案。
- **PR #7439**（每用户模型偏好）创建于 8 月 10 日，已等待 3 天仍未合并，建议确认合并阻塞点。

---

*本日报基于公开 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-13

## 1. 今日速览

过去24小时项目整体活跃度中等偏上，共产生 6 条 Issue 更新和 9 条 PR 更新。亮点在于 **PR 合并率较高（7/9）**，其中包含多项实质性修复：Windows 插件安装符号链接保护、macOS 图标大小兼容、模型思考强度独立配置等。但需注意，**当前所有活跃 Issue 均已被标记为 stale（已超过 3 个月无实质进展）**，且今日无新版本发布，长期积压问题值得关注。整体来看项目处于"稳步修复、动力待激活"的状态。

---

## 2. 版本发布

**无新版本发布。** 上一个版本为 2026.8.12（对应 PR #2480 Release/2026.8.12，已于昨日合并关闭）。

---

## 3. 项目进展

今日合并/关闭的 7 个 PR 覆盖了多个模块，以下是按领域分类的关键变更：

### 核心修复（area: main / openclaw）

| PR | 内容 | 状态 |
|---|---|---|
| [#2479](https://github.com/netease-youdao/LobsterAI/pull/2479) | **Windows 插件安装修复**：stage 插件安装到用户扩展目录旁，通过原子重命名保留 junction 符号链接，避免 `EPERM` 错误 | 已合并 |
| [#2478](https://github.com/netease-youdao/LobsterAI/pull/2478) | **Shell 图标兼容性**：`extractIcon` 不再在 macOS/Windows 上请求 `large` 尺寸（Electron 不支持），仅 Linux 使用 `large`，其他平台回退 `normal` | 已合并 |

### 前端修复（area: renderer）

| PR | 内容 | 状态 |
|---|---|---|
| [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) | **模型思考强度独立化**：此前"思考强度"是全局共享的（设 B 会冲掉 A），现在每个模型各自独立记忆，并补齐交互细节 | 已合并 |
| [#2482](https://github.com/netease-youdao/LobsterAI/pull/2482) | **技能管理器 UI 拆分**：将"我的"和"内置"技能拆分为独立标签页 | 已合并 |
| [#2481](https://github.com/netease-youdao/LobsterAI/pull/2481) | **侧边栏任务搜索优化**：搜索入口改为纯图标按钮，统一 macOS/Windows 外观，并补充诊断与回归覆盖 | 已合并 |

### 待合并 PR（2条）

| PR | 内容 | 状态 |
|---|---|---|
| [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) | **技能条目键修复（openclaw）**：使用 frontmatter `name` 而非目录名作为 `skills.entries` 的键，修复 UI 开关静默失效的问题（关联 Issue #2449） | 待合并 |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | **Cowork 会话列表过滤**：隐藏 OpenClaw 主 agent 内部会话（心跳/定时路由用），避免用户混淆；已在 `cowork_sessions` 表中新增 `hidden` 列 | 待合并（已 4 个月） |

**整体判断**：今日合并的 PR 集中在三个主题——**安装稳定性**（Windows junction/symlink）、**跨平台兼容性**（macOS 图标）、**配置粒度和 UI 体验**（模型独立配置、技能管理）。项目在"让更多平台跑得更稳、让配置更灵活"方向上取得了可见进展。

---

## 4. 社区热点

今日没有出现高活跃度讨论的 Issue/PR（评论数最多的仅 2 条且来自机器人生成的 stale 标记）。整体社区讨论热度较低。

值得关注的是 PR [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181)（隐藏 OpenClaw 主 agent 会话）：该 PR 已开放 4 个月有余，涉及用户可见会话列表的干净度问题，但始终未获合并，长期未得到维护者回应。

---

## 5. Bug 与稳定性

今日没有新的 Bug 报告。当前积压的 Bug 类 Issue 均为 stale 状态，按严重程度排列如下：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 3.31 版本强制沙箱无法关闭，用户找不到配置文件入口 | ❌ 无 |
| 🔴 高 | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改自建 agent 图标触发网关反复重启，删除后再试恢复正常 | ❌ 无 |
| 🟡 中 | [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) | 创建定时任务报错（版本 2026.5.27），附有截图 | ❌ 无 |
| 🟡 中 | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | mcp-bridge 插件配置 entry key 与 manifest ID 不匹配，每次启动产生警告 | ✅ 有关联 PR [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483)（同类 key 不匹配问题，待合并） |

---

## 6. 功能请求与路线图信号

今日无新功能请求。积压的功能请求如下：

| Issue | 请求内容 | 状态 |
|---|---|---|
| [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) | 支持**多个**自定义模型提供商（当前仅限一个），允许保留已有配置的同时新增新的提供商 | 已 stale |

该请求与今日合并的 PR [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475)（模型思考强度独立化）反映同一趋势——**用户对多模型、多提供商的灵活配置需求日益增长**。可以推测，模型提供商多实例支持（不只是"切换"，而是"并存"）会是近期功能方向之一。

此外，PR [#2482](https://github.com/netease-youdao/LobsterAI/pull/2482)（技能管理器拆分"我的/内置"标签）和 [#2481](https://github.com/netease-youdao/LobsterAI/pull/2481)（侧边栏搜索入口优化）表明项目正在**持续打磨 UI 细节与信息架构**，这通常是在为主要功能规模扩展做准备。

---

## 7. 用户反馈摘要

从今日活跃（虽均为 stale，但最近有更新）的 Issues 中提取的用户声音：

**🔸 信任与安全关切（最强烈）：**
> *[Issue #1173](https://github.com/netease-youdao/LobsterAI/issues/1173)（卸载后程序仍可运行）：* "你们是不是在用户电脑上偷偷留后门准备操控电脑？！" — 用户卸载 LobsterAI 后，已打开的窗口仍可运行且能发送飞书消息，引发对后门程序的强烈怀疑。这虽然是卸载行为的边界问题（Windows 卸载不会终止已运行的进程），但**用户信任受到的伤害是真实的**，值得官方公开解释或提供卸载时自动退出进程的修复。

**🔸 强制策略引发反感：**
> *[Issue #1179](https://github.com/netease-youdao/LobsterAI/issues/1179)（强制沙箱）：* 用户半夜更新 3.31 后发现沙箱强制启用，找不到关闭按钮，被迫回滚到 3.30。**强制策略+无配置入口**的组合是引发反感的直接原因。

**🔸 稳定性焦虑：**
> *[Issue #1180](https://github.com/netease-youdao/LobsterAI/issues/1180)（修改 agent 图标触发网关重启）：* 一个看似无害的 UI 操作（改图标）竟触发核心组件（网关）反复重启，反映出**低层操作与 UI 操作之间的隔离仍有不足**。

---

## 8. 待处理积压

以下 Issue/PR 长期未获维护者回应，建议优先处理：

| 类型 | 编号 | 描述 | 开放时长 | 优先级建议 |
|---|---|---|---|---|
| PR | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | 隐藏 OpenClaw 主 agent 会话（含 `hidden` 列 DB 变更） | **4.5 个月** | 🔴 高——涉及 DB schema 变更，积压越久 merge 成本越高，且直接影响用户会话列表整洁度 |
| Issue | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 卸载后程序仍运行 | 4.5 个月 | 🔴 高——涉及信任危机，建议至少给出官方说明 |
| Issue | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 强制沙箱关闭入口 | 4.5 个月 | 🔴 高——强制功能需提供显式配置入口 |
| Issue | [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) | 多自定义模型提供商 | 4.5 个月 | 🟡 中——与近期 PR 方向契合，有纳入迭代的潜力 |
| Issue | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改 agent 图标触发网关重启 | 4.5 个月 | 🟡 中——疑似低层重启机制与上层配置变更耦合过紧 |
| PR | [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) | 模型提供商官网链接 + API Key 引导（含 i18n） | **4.5 个月**（昨日以 stale 身份关闭） | 🟡 中——功能本身为低频需求，但若未来支持多提供商则价值提升 |

> **注**：所有 Issue 均已被标记为 stale，且 stale 机制似乎由机器人于 2026-08-12 统一触发。若维护者暂时无法处理，建议关闭或明确标注"planned/backlog"状态，避免社区对项目健康度产生误判。

---

*报告生成时间：2026-08-13 | 数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

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

好的，作为您的 AI 智能体与个人 AI 助手领域开源项目分析师，这是基于 CoPaw (github.com/agentscope-ai/CoPaw) 2026-08-13 日数据生成的项目动态日报。

---

# CoPaw 项目动态日报 | 2026-08-13

## 1. 今日速览

CoPaw 项目今日活跃度极高，处于密集迭代期。过去24小时内，项目共产生30条Issue更新和44条PR更新，并发布了新的Beta版本 v2.1.0-beta.4。Issue 与 PR 的提交与关闭数量均处于高位，表明社区反馈踊跃，且维护者响应迅速。**核心焦点集中在稳定性修复（如 #6921、#6839）和架构优化（如 #6926、#6953）上**，同时社区对 Agent 协作体验（#6925）和安全模型（#6916）提出了更高要求。项目正通过高频发布快速跟进反馈，整体健康度良好，但积压的 PR 和部分长期问题仍需关注。

## 2. 版本发布

- **v2.1.0-beta.4** (发布链接: [GitHub Releases](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.4))
    - **主要内容**：
        - **Bug 修复**：修复了文件预览和暗色模式样式问题 (#6915)。
        - **工具优化**：修正了 `read_file` 工具的描述 (#6898)。
        - **版本号**：正式将版本号升级至 v2.1.0b4。
    - **破坏性变更**：无。
    - **迁移建议**：此版本为增量更新，升级风险低，建议所有 Beta 用户升级以获取最新修复。

## 3. 项目进展

今日合并的 PR 数量有限，但包含关键修复，同时大量新 PR 被提交并进入审查状态，表明项目正在多条线推进。

- **重要合并/关闭**：
    - **PR #6540 [已关闭]**：`fix(agents): sanitize tool messages before model calls`。修复了上下文压缩后孤立工具结果导致 OpenAI 兼容提供商报错的问题（对应 Issue #6407），提升了模型调用的健壮性。
    - **PR #6913 [已关闭]**：`fix(computer-use): improve macOS element activation`。修复了 macOS 上 Computer Use 功能在操作瞬态菜单或复合元素时可能失败的问题。
    - **PR #6816 [已关闭]**：`fix(chats): handle dict-like model responses (#6813)`。修复了 `consume_model_response` 因 AgentScope `ChatResponse` 类型引发 `KeyError` 导致对话自动标题生成失败的 Bug。
- **新晋关键 PR（进入审查）**：
    - **PR #6953**：`perf: stabilize LLM prefix cache`。针对性地优化 Tool Schema 顺序，旨在提升 KV Cache 命中率，降低推理成本，这是一个重要的性能改进方向。
    - **PR #6938**：`fix(#6826): display actual assistant reply completion time`。修复助手消息完成时间显示不准的问题。
    - **PR #6936**：`fix(providers): coerce string-typed tool args emitted as JSON numbers`。修复 MCP 工具调用参数类型错误（对应 #6839）。

**结论**：项目不仅在修复既有 Bug，更在通过性能优化（PR #6953）和功能增强（如 PR #6954 MiniMax TTS）推动项目向前发展，整体进度稳定。

## 4. 社区热点

今日社区讨论热度集中在中度使用体验和关键功能缺失上。

- **Issue #6921 [高热度]**：[Bug] 任务执行中无提示停止，需手动说“继续”。(查看详情: https://github.com/agentscope-ai/QwenPaw/issues/6921)
    - **分析**：这是一个关于 Agent 任务自主性和状态反馈的高频问题。用户描述 Agent 在输出“计划”后便停止，需要用户干预才能继续。这反映出当前 Agent 在执行链路上的稳定性和对“任务暂停/结束”边界的识别存在问题，严重影响了自动化体验。
- **Issue #6926 [已关闭]**：[Bug] `sync.py` 导入历史记录时使用随机 UUID 导致数据孤立。(查看详情: https://github.com/agentscope-ai/QwenPaw/issues/6926)
    - **分析**：该问题定位到了 `sync.py` 模块，涉及数据持久化和一致性。用户详细描述了会话数据因错误的 Session ID 导致 18-50% 记录成为“孤儿数据”，这触及了数据安全和可靠性的底线，因此受到了社区的广泛关注。

## 5. Bug 与稳定性

今日报告了大量 Bug，其中 **任务中断、数据一致性和网络恢复** 问题最为突出。

| 严重程度 | Issue | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **高** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | **任务执行中途无提示停止**，需要用户干预才能继续。 | 待处理，暂无对应PR |
| **高** | [#6926](https://github.com/agentscope-ai/QwenPaw/issues/6926) | 历史同步数据**大量孤立**，会话记录被拆分。 | 已关闭，推测已内部修复。 |
| **高** | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | 网络中断恢复后**无法自动重连 LLM API**，必须重启服务。 | 待处理，暂无对应PR |
| **中高** | [#6927](https://github.com/agentscope-ai/QwenPaw/issues/6927) | 调用多个子 Agent 时**陷入死循环**，影响复杂协作任务。 | 待处理，暂无对应PR |
| **中** | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 工具调用时**数字字符串被误转为数字格式**导致失败。 | 已有 Fix PR [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) |
| **中** | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | **助手消息完成时间显示异常**，无法反映真实处理耗时。 | 已有 Fix PR [#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938) |
| **中** | [#6928](https://github.com/agentscope-ai/QwenPaw/issues/6928) | 历史消息**无法滚动查看**，且输入框编辑导致内容丢失。 | 待处理，暂无对应PR |
| **低** | [#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955) | 概率性启动报错、崩溃。 | 待处理，暂无对应PR |

## 6. 功能请求与路线图信号

社区对 Agent 的自主性、交互体验和系统开放性提出了更多期望。

- **Agent 主动性与收件箱 (Inbox)**：[#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) 建议 Agent 能将报告/消息主动投递到“收件箱”，形成一个固定的待办/信息集散地。这与此前的“记忆”功能互补，是构建更主动的 AI 助理的重要信号。
- **单窗口协作**：[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) 用户希望在**一个会话窗口内**查看多个 Agent 的协作过程，而非每次创建新会话并切换查看，这对多智能体编排的 UI/UX 提出了新要求。
- **插件安全模型**：[#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) 指出插件可**静默创建定时任务并注入消息**而无须用户确认。这是重要的安全反馈，预示后续版本可能需要引入更细粒度的插件权限管理。
- **Plugin 配置接口**：[#6924](https://github.com/agentscope-ai/QwenPaw/issues/6924) 反馈自定义频道插件在 2.0.x 后被限制，无法在 `channel config` 中配置，这可能是影响开发者生态的回归问题。相关 PR [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)（新增 Native DataPaw 应用）和 [#6954](https://github.com/agentscope-ai/QwenPaw/pull/6954)（添加 MiniMax TTS）显示了项目在扩展生态和 AI 能力上的投入。

## 7. 用户反馈摘要

- **稳定性是第一诉求**：多个 Issue（#6921、#6955、#6919）都指向了程序崩溃、卡死和任务中断问题，这成为影响用户体验的首要因素。
- **时间显示不准的困扰**：#6826 的反馈表明，用户非常在意 AI 的“思考”和“工作”时间，并期望 UI 能真实反映这一过程。
- **配置状态“丢失”**：#6957 反馈每次升级后工具（插件）的 API Key 等配置都需要重新填写，这显示配置持久化方面存在缺失，增加了用户的升级成本。
- **对新功能的强烈期待**：#6929 的建议（项目-对话-文件夹集成）和 #6945 的提问（智能审批与沙盘限制）表明，用户尝试将 CoPaw 用于更复杂的日常工作中，而不仅仅是简单的问答。

## 8. 待处理积压

以下为长期未能解决或关闭的重要条目，建议维护者重点关注。

- **Issue #6780 [高]**：`2.0.1版，不使用时几十分钟后自己会卡死`。这是一个持续了 6 天的稳定性问题，影响面较大，但至今无有效解决方案或回复。
- **PR #5992 [高]**：`Add per-session model overrides`。该 PR 已提出超过一个月，评论区关注度高，它允许单个 Agent 在不同会话中动态切换底层模型，对个性化场景至关重要。目前状态为"Under Review"，但已积压较长时间。
- **PR #5869 [中]**：`expose system commands in slash autocomplete`。已提出一个多月，旨在统一各 UI 端口的命令体验，属于易用性改进，但迟迟未能合并。
- **PR #6623 [中]**：`prevent final text loss when notifications race`。解决 ACP 通道下偶发性消息丢失的问题，已积压两周，需推动审查。

---
**数据来源**：CoPaw GitHub 仓库 (agentscope-ai/QwenPaw) 2026-08-13 日更新数据。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 2026-08-13 日的 ZeroClaw GitHub 数据快照，我为您生成了以下项目动态日报。

---

# ZeroClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

ZeroClaw 项目今日维持了极高的社区活跃度，过去24小时内产生了 100 条议题与PR更新，显示出强劲的开发动力。虽然今日无新版本发布，但项目在**安全加固**（如SSRF防护、浏览器任意文件写入修复）与**基础设施优化**（如Windows CI覆盖、会话迁移可靠性）方面有多项重要PR被关闭，表明维护团队正积极清理技术债务并强化跨平台兼容性。与此同时，社区讨论焦点集中在 **Windows平台测试失败**与**架构决策（RFC）** 上，反映出项目在快速迭代过程中面临的平台多样化与治理挑战。整体来看，项目处于活跃演进期，但跨平台兼容性问题可能成为下一阶段的重点关注对象。

## 2. 版本发布

今日无新版本发布（最新 Release 仍为 v0.8.3）。

## 3. 项目进展

今日共有 20 个 PR 被合并或关闭，其中多项涉及关键修复，对项目健康度有显著提升：

- **修复浏览器工具任意文件写入漏洞**：PR #9362 和 #8741 均针对浏览器工具的 `screenshot` 操作进行了路径校验，阻止了Agent将截图写入任意路径的逃逸行为。这两项安全修复的合并标志着对工具链安全边界的强化。
- **修复流式响应中的终端标记泄漏**：PR #9695 和 #9037 解决了从OpenRouter等提供商返回的 `<eom>`、`<|eom|>` 标记泄漏到用户可见文本和持久化历史中的问题，避免了模型输出污染。
- **修复微信渠道同步游标持久化问题**：PR #9956 修复了在消息批次入队前就持久化同步游标可能导致的消息丢失问题，提升了渠道的可靠性。

这些修复（特别是安全类）的快速合并，体现出维护者对关键缺陷的响应速度，项目整体向更稳定、更安全的方向迈进。

## 4. 社区热点

今日讨论热度最高的议题集中在以下两点：

- **Windows 平台测试大面积失败**：[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 以 14 条评论位居榜首。该问题报告了在Windows 11中文环境下有 74 个测试用例失败，根因涉及Unix专属命令、路径语义和控制台编码。关联的 [Issue #7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) 也呼吁CI引入Windows/macOS矩阵。这表明社区对项目在非Linux平台上的可用性和质量有强烈诉求。
- **维护者决策队列跟踪**：[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 作为RFC和设计问题的维护者决策看板，以 13 条评论紧随其后。该Issue作为"元问题"体现了社区对项目治理透明度和决策效率的关注，大量高优先级RFC（如插件看板 #8832、签名机制整合 #9101）正在等待最终裁决。

## 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

- **严重 (S1 - 工作流阻塞)**
  - **macOS桌面应用打开空白或无窗口** ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527))：权限检测失败导致应用显示空白页，重启后窗口消失。目前无直接修复PR，标记为 `r:needs-repro`。
  - **Windows桌面安装程序启动失败** ([#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290))：安装后启动时缺少 `TaskDialogIndirect`，涉及系统API调用问题。
  - **web_fetch 返回压缩乱码** ([#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207))：对gzip等压缩响应处理不当，返回无法解析的二进制垃圾数据。

- **次要 (S2 - 行为降级)**
  - **CLI创建的cron任务无法交付输出** ([#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340))：已关闭，问题在于 `delivery.mode` 硬编码为 `none`。
  - **cron父命令帮助信息错误** ([#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796))：已关闭，帮助文档中示例命令无效。

- **轻微 (S3 - 小问题)**
  - **Discord打字指示器卡死** ([#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198))：在仪表盘重载守护进程后，Discord频道上的"正在输入"指示器永久卡住。
  - **`zeroclaw desktop`命令使用失效下载链接且无法检测已安装AppImage** ([#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202))。

## 6. 功能请求与路线图信号

今日活跃的功能请求与PR指向了未来版本的可能方向：

- **插件自有看板（Kanban）** ([#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832))：提议为代理工作协调提供可选的看板界面，属于较大的架构性RFC。
- **统一斜杠命令注册表** ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929))：解决Web UI、TUI和渠道运行时之间命令漂移问题，旨在提升跨端一致性。
- **Langfuse可观测性后端** ([PR #9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556))：新增Langfuse作为OpenTelemetry追踪的导出后端，表明项目开始关注更专业的大模型应用可观测性。

结合现有PR判断，**插件系统能力扩展**与**可观测性增强**是未来版本的核心主题。

## 7. 用户反馈摘要

从今日的Issue评论中可以提炼出以下用户痛点与诉求：

- **跨平台支持是核心痛点**：`NiuBlibing` 报告的74个Windows测试失败案例以及后续的讨论，反映了开发者社区中相当一部分用户或贡献者依赖Windows环境。对CI矩阵的扩展（#7461）的呼声很高，用户期望项目官方能够保证在主流操作系统上的行为一致性。
- **对安全意识和高可用性的认可**：针对多个高优先级安全修复PR（如浏览器截图路径逃逸 #9362）的快速合并，社区虽未直接评论，但这种"发现问题-修复-合并"的高效流程符合贡献者对开源安全项目的期望。
- **对内部治理和RFC流程的紧迫感**：作为最高评论数的Issue之一，`维护者决策队列`（#8692）的活跃本身即是用户群体对项目路线图清晰度、决策透明度和响应速度的间接反馈。

## 8. 待处理积压

以下问题或PR持续时间较长，且重要性高，建议维护者关注：

- **重大特性请求等待裁决**：
  - [Issue #6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653)：定义模拟安装的主机架构策略，发起于2026-05-14，已标记 `needs-author-action`。
  - [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)：为ZeroCode编码工作流提供可选的LSP支持，发起于2026-04-19，该特性对提升Agent生成代码的准确性至关重要。

- **关键安全修复等待审查**：
  - [PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)：为 `file_download` 的SSRF防护添加 `allowed_private_hosts` 白名单配置。该PR创建于2026-07-04，状态为 `needs-author-action`，虽然风险等级为 `high`，但已较长时间未更新，可能需要维护者介入沟通以推动合入。

- **高优先级Bug等待响应**：
  - [Issue #7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)：macOS桌面应用无窗口问题，严重程度S1，但状态为 `needs-repro`，需要更多的环境信息。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*