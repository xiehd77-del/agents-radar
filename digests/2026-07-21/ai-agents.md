# OpenClaw 生态日报 2026-07-21

> Issues: 353 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 02:49 UTC

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

好的，这是为您生成的 OpenClaw 项目动态日报 (2026-07-21)。

---

## OpenClaw 项目动态日报 — 2026-07-21

### 1. 今日速览

过去 24 小时，OpenClaw 项目社区高度活跃，但核心聚焦于稳定性修复而非新功能发布。共处理了超过 350 条 Issue 和 500 条 PR，其中合并/关闭了 118 个 PR，修复效率较高。尽管本周暂无新版本发布，但社区讨论集中在**会话状态管理、消息丢失、安全加固以及跨平台兼容性**等关键问题上，尤其是与 Codex 后端相关的回归问题成为讨论热点。整体来看，项目处于 “**高活力、高密度修复**” 阶段，社区贡献者参与度极强。

### 2. 版本发布

本周暂无新版本发布。

### 3. 项目进展

今日合并/关闭了 118 个 PR，重点涵盖了以下方面的推进：

- **诊断与工具链优化：** 修复了 `doctor` 命令在读取遗留会话存储时可能因恶意文件导致 CLI 阻塞的严重安全问题 (`#110772`)。
- **安全管理与边界防护：** 合并了多个针对 SSRF 攻击的修复，通过 `isIP` 函数严格校验 hosts，防止 DNS 绕过 (`#111098`, `#111233`)。同时修复了模型市场签名 key 的轮换机制 (`#108342`)。
- **渠道兼容性修复：** 修复了 Nostr 渠道在正常关闭时错误报告 relay 错误的问题 (`#111905`)；针对 Telegram 渠道的流式传输失败问题，增加了更清晰的状态提示 (`#111065`)。
- **用户界面与体验：** 为控制 UI 中的 GitHub Copilot 403 错误提供了更清晰的恢复指示 (`#112025`)；修复了 `e2e` 测试日志中可能出现的 UTF-8 编码截断问题 (`#109923`)。
- **核心框架与入站绑定：** 修复了路由绑定在特定分隔符下错误缓存 agent 实例的 bug (`#110001`)。同时，核心技能/路径 API 的 “session:end” 事件支持 (PR `#10142`) 和 “模型生成超时配置” (PR `#8724`) 等功能性PR正在推进中。

### 4. 社区热点

今日讨论最激烈的 Issue 主要集中在 **P1 级别的回归与严重 Bug** 上，反映出社区对会话稳定性和数据完整性的高度关注。

1.  **[Issue #88312] [已关闭] Codex app-server 回合完成卡死** (评论: 22)
    - **链接**: [Issue #88312](https://github.com/openclaw/openclaw/issues/88312)
    - **分析**: 这是一个高优先级的回归问题，导致 Codex 后端的多工具 Agent 回合无法完成。社区和开发者在 22 条评论中深入分析了 5 月 27 日更新引入的改动，并最终定位并关闭了此问题。**它突显了 Codex 集成层仍然是稳定性短板。**
2.  **[Issue #99241] [开放中] 工具输出渲染为图片附件，Agent 无法读取** (评论: 23)
    - **链接**: [Issue #99241](https://github.com/openclaw/openclaw/issues/99241)
    - **分析**: 这是今日最受关注的问题。在长时间运行的 ANSI 工作流中，非折叠的工具结果会变成 `(see attached image)` 占位符，导致 Agent 丢失证据。B标为 P1 且带有 `platinum hermit` 评级，**说明这是一个严重影响核心 Agent 能力的视觉障碍问题**，目前尚无修复PR。
3.  **[Issue #7707] [开放中] 功能请求：按来源进行内存信任标签** (评论: 19)
    - **链接**: [Issue #7707](https://github.com/openclaw/openclaw/issues/7707)
    - **分析**: 这是一个长期讨论的 “内存投毒” 防御方案，旨在区分用户指令、网络爬取和第三方 Skills 对 Agent 记忆的影响。它获得了 19 条评论和 0 个赞，**体现了社区对 Agent 安全性的持续关注和底层架构改进的强烈愿望。**

### 5. Bug 与稳定性

今日报告的 Bug 清单中，**P1 级别的严重问题和回归问题占据主导地位**，主要集中在会话状态和消息丢失上。

| 严重程度 | Issue/PR 链接 | 摘要 | 是否有 Fix PR |
| :--- | :--- | :--- | :--- |
| **P1 (严重)** | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出渲染为图片附件，Agent 无法读取 | 无 |
| **P1 (严重)** | [#88312](https://github.com/openclaw/openclaw/issues/88312) | [已关闭][回归] Codex 后端回合完成卡死 | 已关闭 |
| **P1 (严重)** | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex 后端 Telegram 回合超时 | 无 |
| **P1 (严重)** | [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息无法触发助手回复 | 无 |
| **P1 (严重)** | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Telegram 会话因 Codex 后端超时而失败 | 无 |
| **P1 (严重)** | [#64810](https://github.com/openclaw/openclaw/issues/64810) | 心跳事件打断 Telegram Topic 会话的进行中回复 | 无 |
| **P2 (中等)** | [#63216](https://github.com/openclaw/openclaw/issues/63216) | [已关闭] 会话陷入重复硬重置循环，上下文溢出 | 无 |
| **P1 (严重)** | [#110772 (PR)](https://github.com/openclaw/openclaw/pull/110772) | `doctor` 命令读取遗留会话文件时可能阻塞 | **已提交 PR** |
| **P2 (中等)** | [#108238](https://github.com/openclaw/openclaw/issues/108238) | [已关闭] 会话上下文用量计算错误，误报超限 | 无 |

### 6. 功能请求与路线图信号

今日出现的功能请求偏向于**架构升级和权限模型设计**，显示出社区对平台安全性和可扩展性的更高要求。

- **潜在的“下一版本”信号：**
    - **[Issue #10659] Feature Request: Masked Secrets**：这是一个长久以来的需求，要求 Agent 能“使用”但“看不到” API Key，防止注入攻击。此功能与社区近期对安全性的关注一致，有可能会在后续版本中优先安排。
- **高潜力路线图项：**
    - **[Issue #7707] Memory Trust Tagging by Source**：如前所述，这是一个社区共识度高的安全性架构改进。
    - **[Issue #12219] Skill Permission Manifest Standard**：提出建立标准化技能权限声明文件，让用户在安装技能前知情同意，是提升生态安全性的关键。
    - **[PR #89155] Forward session id to OpenRouter**：这是一个提升与其他第三方 LLM 网关兼容性的务实功能，通过传递 session id 以优化缓存和可观测性。

### 7. 用户反馈摘要

从近期评论中提炼的 “原话” 或观点：

- **针对回退机制：** 多位用户 (如 `TurboTheTurtle`) 反映 `exec` 命令在私有局域网内的高失败率，即使用户终端可直接访问。这导致了代理 “看起来脑子不好使” 的体验。
- **对上下文压缩的不满：** 用户 `mpz4life` 指出，自动压缩机制在工具执行期间静默中断了任务，且没有恢复。这是一种 “静默失败”，用户体验极差。
- **对渠道配置的困惑：** 用户 `david90232` 报告了 Slack 多工作区的配置复杂度和不一致性，即工作区 B 可以发送消息但无法接收回复，这导致多渠道管理的门槛过高。
- **对新模型支持的期待：** 用户 `fulgerulnegru` 抱怨 Anthropic 新模型列表是静态的，手动添加后会崩溃，这直接影响了用户使用最新模型的能力。

### 8. 待处理积压

以下是对项目健康度或社区体验有长期影响的、长时间未响应的重要 Issue 或 PR：

- **[#7707] [P2] Memory Trust Tagging by Source (2026-02-03)**：作为社区呼吁的核心安全功能，已积压超过5个月，亟需维护者就产品决策 (needs-product-decision) 给出明确回应。
- **[#58450] [P2] Agent 承诺后续跟进但未执行 (2026-03-31)**：这是一个影响用户信任的 “虚假承诺” 问题。尽管已标记为 `stale`，但其对用户体验的损害是持续的，应被评估是否值得提升优先级。
- **[#56733] [P1] Gateway 进程存活但事件循环冻结 (2026-03-29)**：一个严重影响生产环境的可怕 Bug（所有 HTTP 静默超时），虽已标记 `stable` 无进展，但其严重性值得维护者重新审视。
- **[#86996] [P1] Active Memory + Codex 路径导致高延迟和启动失败 (2026-05-26)**：这一问题直接关联到 Codex 后端的核心功能和性能，积压近两个月，是目前 Codex 集成稳定性问题的主要源头之一。应尽快给出 live-repro 或 fix-pr。
- **[#58398] [P2] 采用 Claude Code 的多层压缩架构 (2026-03-31)**：这是一个深度的架构借鉴提议，可能从根本上改善上下文压缩性能。目前仍处于 `needs-maintainer-review` 状态，需要项目核心维护者的深入评估。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手开源生态的资深技术分析师，现基于您提供的2026年7月21日各项目动态数据，为您呈现以下横向对比分析报告。

---

### **AI智能体开源生态全景分析报告 (2026-07-21)**

**报告日期:** 2026-07-21
**分析师:** 资深技术分析师

#### **1. 生态全景**

当前，个人 AI 助手与自主智能体开源生态正经历一场由**“功能狂奔”向“架构成熟与生态治理”**的深刻转型。一方面，以**OpenClaw**、**ZeroClaw**、**IronClaw**为代表的头部项目，正通过大规模重构（如去除遗留单体、重写核心控制面）来提升系统稳定性和可扩展性，这标志着生态已度过早期萌芽阶段。另一方面，安全问题（凭证泄露、SSRF、权限旁路）与用户体验（跨平台会话、Agent推理一致性）成为全社区的集体焦虑，驱动**NanoBot**、**Hermes Agent**、**CoPaw**等项目中涌现大量针对性修复。此外，多智能体协作、标准化协议(A2A)、企业级部署（SOP、审批流）等方向正从“概念探讨”走向“代码落地”，预示着生态即将进入更高阶的竞争维度。

#### **2. 各项目活跃度对比**

| 项目名称 | 活跃 Issues | 活跃 PRs | Release 状态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 高 (>350) | 高 (>500) | 无新版本，专注修复 | **高活力/高密度修复** |
| **NanoBot** | 7 | 29 (12 merged) | 无 | **快速迭代/功能演进** |
| **Hermes Agent** | 50 | 50 | **v0.19.0 (刚发布)** | **高活跃/高波动 (震荡期)** |
| **PicoClaw** | 11 (5 closed) | 10 (5 closed) | 无 | **积极维护/功能增强** |
| **NanoClaw** | 6 | 20 (6 merged) | 无 | **高活跃/功能扩展** |
| **NullClaw** | 0 | 1 (唯一) | 无 | **低活跃/维护停滞** |
| **IronClaw** | 大量P1/P2 Bug | 多项合并 (破坏性重构) | RC候选版遇CI失败 | **破坏性重构/密集Bug修复** |
| **LobsterAI** | 0 | 15 (10 merged) | 无 | **功能迭代/稳定性打磨** |
| **CoPaw** | 高 (含13评论热点) | 高 (多项合并/待审核) | 无 | **极高活跃/密集开发** |
| **ZeroClaw** | 39 | 50 | 无 | **极高活跃/高强度迭代** |
| **TinyClaw** | 0 | 0 | 无 | **停滞** |
| **Moltis** | 0 | 0 | 无 | **停滞** |
| **ZeptoClaw** | 0 | 0 | 无 | **停滞** |

**解读:** 生态呈现明显的两极分化。头部项目（OpenClaw, ZeroClaw, IronClaw）和活跃项目（NanoBot, CoPaw）每日处理大量社区反馈，处于快速跑道；而多个“-Claw”变体及学术项目则接近停滞，生态的“马太效应”正在强化。

#### **3. OpenClaw 在生态中的定位**

- **优势：** OpenClaw 今日处理了超过 **350条 Issue** 和 **500条 PR**，其社区规模和问题处理量远超其他项目（如 Hermes Agent 的 50/50），展现了极其庞大的用户基数与贡献者网络。其核心优势在于**渠道兼容性**（修复Nostr、Telegram）和**安全性快速响应**（SSRF、CLI阻塞），适合需要稳定、多平台接入的企业或个人用户。
- **技术路线差异：** OpenClaw 侧重于**功能修复与增量优化**，而非如 IronClaw 或 ZeroClaw 般的激进架构重构。这使其短期内更稳定，但也可能在未来面临架构迭代的压力。
- **社区规模对比：** OpenClaw 的社区规模呈“巨无霸”形态，是当前生态的绝对中心。与 **NanoBot** 或 **Hermes Agent** 相比，它在issue和PR处理量上拥有数量级优势，这既是其活力的证明，也带来了更高的噪音和协作成本。

#### **4. 共同关注的技术方向**

今天，多个项目在以下方向涌现出高度一致的社区诉求，表明这是生态级的痛点或机遇：

1.  **Agent 推理一致性与行为可靠性:**
    - **涉及项目:** **CoPaw (#6257)**, **PicoClaw (#3269)**, **OpenClaw (#99241)**, **ZeroClaw (#8837, #9207)**, **Hermes Agent (#2788)**。
    - **具体诉求:** 修复 Agent 在多工具调用中复制思考过程、因上游服务故障挂死、工具输出被错误渲染（变为图片）、上下文静默截断、Cron任务静默失败等“降智”或不稳定行为。核心需求是让 Agent 的行为可预测、可信赖。

2.  **跨平台会话与状态同步:**
    - **涉及项目:** **Hermes Agent (#4335, #68301)**, **OpenClaw (#63216)**，**IronClaw (#6349)**。
    - **具体诉求:** 用户希望在 CLI、桌面端、Web、Telegram 等不同平台间无缝切换对话，并保持上下文完整。当前各平台仍处于“信息孤岛”状态，无法满足用户“拿起手机继续聊”的跨端体验。

3.  **安全加固与权限治理:**
    - **涉及项目:** **NanoClaw (#3097-3100)**, **OpenClaw (#110772, #111098, #7707)**, **NanoBot (#4803)**, **ZeroClaw (#8713, #9084)**, **IronClaw (#6348)**。
    - **具体诉求:** 涵盖从**基础设施安全**（SSRF、API keys明文存储）到**应用级治理**（避免误操作撤销所有管理员、审批流绕过、角色授予漏洞）的全面需求。社区正在呼吁建立一套“权限不可滥用、审批不可绕过、凭证不可泄露”的信任体系。

4.  **多智能体协作与标准化协议:**
    - **涉及项目:** **NanoBot (#5000)**, **ZeroClaw (#3566)**, **IronClaw (#2277)**。
    - **具体诉求:** 从当前的“任务委托”模式，演进到具备持久身份、共享状态和独立通信能力的**真正多智能体协作**。同时，对Agent-to-Agent（A2A）协议的标准化支持呼声渐起，意图打破不同项目间的壁垒。

#### **5. 差异化定位分析**

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 渠道兼容、安全修复、工具链 | 企业用户、多平台部署者 | 巨型单体社区，增量修复驱动的成熟项目 |
| **NanoBot** | 多Agent协作、本地模型(Ollama)缓存 | 高级开发者、本地模型爱好者 | 强调低延迟与去中心化，当前受Ollama兼容性困扰 |
| **Hermes Agent** | 插件生态、桌面端TUI/GUI、跨平台 | 高级用户、插件开发者 | 发布节奏激进(Quicksilver)，插件API不兼容造成破坏性体验 |
| **PicoClaw** | 云部署、第三方提供商集成、多模态(TTS) | 云原生开发者、日韩市场用户 | 稳定为主，通过频繁修复维护可用性，侧重国际化 |
| **NanoClaw** | 安全治理、渠道矩阵(LINE/Dial) | 安全敏感用户、多市场用户 | 聚焦供应链安全和增量的渠道扩展，追求零信任根基 |
| **ZeroClaw** | SOP控制面、持久化内存、Agent评估 | 企业级用户、寻求规范化流程的用户 | 现代架构重构先锋，强调可治理性与可评估性，进展最快 |
| **IronClaw** | 架构重构(Reborn)、**破坏性创新** | 技术尝鲜者、社区贡献者 | 敢于自我革命，通过彻底删除旧代码实现架构跃迁，但伴随较多Bug |

#### **6. 社区热度与成熟度**

- **快速迭代与功能拓展阶段:**
    - **ZeroClaw**: 强度极高，正向0.9.0目标冲刺，SOP和内存系统是核心。
    - **CoPaw**: 热点集中，Bug修复与社区需求（AIOnly模型、会话管理）交织，处于活跃的正反馈循环。
    - **NanoBot**: 积极合并功能，解决Ollama和插件相关Bug，处于上升期。
    - **LobsterAI**: 正在为下一代版本（依赖升级、静默更新）铺设基础，协同功能是亮点。

- **质量巩固与稳定打磨阶段:**
    - **OpenClaw**: 进入典型的“高活力、高密度修复”阶段，通过大量PR稳固产品，为下一个稳定大版本奠定基础。
    - **PicoClaw**: 通过快速响应和闭环Bug修复，维护了核心用户（特别是云部署用户）的信任。
    - **NanoClaw**: 在扩展新渠道（LINE, Dial）的同时，重心明显向安全治理倾斜，典型的防御性开发模式。

- **陷入停滞或震荡阶段:**
    - **Hermes Agent**: **典型震荡期**。新版本v0.19.0带来巨大变革，但也触发大量回归Bug和用户群体中的不满。是“浴火重生”还是“隐患爆发”，取决于接下来几周的修复速度。
    - **TinyClaw, Moltis, ZeptoClaw, NullClaw**: 完全**停滞**，短期内看不到活跃贡献，除非有重大外部事件驱动。

#### **7. 值得关注的趋势信号**

1.  **从“Dev”走向“Admin”**: 社区的关注点正从“Agent能干什么”转移到“Agent怎么管”。权限模型、审批流（SOP）、评估仪表盘等管理性质的功能成为热门诉求。**对AI智能体开发者而言，设计之初就必须将治理和安全纳入核心架构，而非事后打补丁。**
2.  **跨项目协作的萌芽**: ZeroClaw 对 A2A 协议的探索 (Issue #3566) 以及 IronClaw 对 Codex 的集成设想 (Issue #2277)，表明行业开始思考如何打破孤岛。**未来能提供标准化、模块化协议和接口的框架，将获得更强的生态粘性。**
3.  **工具调用的“可解释性”成新赛道**: CoPaw (#6257) 和 OpenClaw (#99241) 等案例如出一辙——用户无法理解Agent内部的推理过程，导致对Agent行为的不信任。**提供透明的、可视化的Agent推理日志和状态，将成为区别于同类产品的关键用户体验要素。**
4.  **“回滚”能力变得和“更新”一样重要**: Hermes Agent 的 v0.19.0 更新灾难和 IronClaw 的大规模重构，暴露了缺乏可靠版本回退机制的代价。**设计一套原子化的、支持快速回滚的发行机制，对于保护用户生产环境和信心至关重要。**
5.  **对“持续对话”的极致追求**: 跨平台同步（Hermes Agent）、上下文避免截断（ZeroClaw）、自动添加时间戳（CoPaw）……这一切都指向同一个用户奢望：**像人类一样，对话可以跨越时空无缝延续**。能做好这个基础体验的项目，将在用户留存上占据显著优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot 项目数据，我已为您生成 2026-07-21 的项目动态日报。

---

# NanoBot 项目动态日报 | 2026-07-21

## 今日速览

本日 NanoBot 项目社区活跃度**极高**，主要表现在 Pull Request（PR）处理量显著增加。过去24小时内共有 **29 条 PR** 被更新，其中 **12 条**成功合并或关闭，表明项目维护者正在高效地推进代码合并与问题修复。同时，7 条 Issue 的更新中包含了 3 个已关闭项，也显示出良好的问题处理节奏。社区讨论焦点集中在**多智能体协作演进** (`#5000`)、**Ollama 缓存兼容性** (`#4867`) 以及 **API 密钥安全存储** (`#4803`) 等关键问题上。总体来看，项目处于**快速迭代与功能演进**阶段，开发与维护活动非常积极。

## 项目进展

今日项目取得了实质性进展，修复了多个关键 Bug，并合并了重要的基础架构重构和功能特性。

- **核心逻辑重构**: `#4993 [CLOSED]` `refactor(agent): unify internal turn lifecycle` 成功合并。这项重构统一了代理内部消息的处理流程，为后续的多智能体协作和新功能开发奠定了更稳定的基础。`#4982` 和 `#4981` 修复了飞书和 Telegram 渠道在特定边界条件下可能导致挂起的 Bug。
- **平台支持增强**: `#4937 [CLOSED]` `feat: add one-click deploy to render support` 的合并，使得用户可以通过 Render 平台一键部署 NanoBot，降低了非技术用户的使用门槛。`#5008 [CLOSED]` 修复了在多模态内容（如图文混排）合并时可能丢失图片的问题，提升了上下文的连贯性。
- **渠道稳定性提升**: `#4768 [CLOSED]` `fix(qq): add exponential backoff to WebSocket reconnect loop` 已合并。该 PR 为 QQ 渠道的 WebSocket 重连机制增加了指数退避策略，有效减少了因网络故障导致的大量错误日志和资源消耗。
- **文档与安全**: `#4998 [CLOSED]` `docs(ollama): document tool prompt cache diagnostics` 已合并，为用户提供了诊断 Ollama 缓存问题的官方文档。

## 社区热点

今日社区讨论最热烈的几个议题如下：

- **`#4867` [CLOSED] [enhancement] Preserve exact prompt prefix to enable caching in Ollama and others**: 该 Issue 由用户 `The-Markitecht` 提出，虽然已关闭，但在过去两周内积累了 **15 条评论**。问题核心在于 NanoBot 在处理每次对话时会额外增加约 60 秒延迟，导致在本地运行 Ollama 模型时完全不可用。这揭示了用户对**本地模型极低延迟推理**的迫切需求，以及 Prompt 缓存兼容性对用户体验至关重要。对应的 PR `#4998` 的合并也表明开发者已开始响应此问题。
- **`#5000` [OPEN] [enhancement] Proposal: evolve the current subagent system toward multi-agent collaboration**: 由 `bingqilinweimaotai` 提出的Issue编号#5000，象征意义重大。提案明确指出当前子代理系统仅是“后台任务委托”，缺乏持久身份和共享状态，从而无法实现真正的多智能体协作。这反映了社区对**更先进的、具备状态和记忆的多智能体框架**的强烈期待，是未来路线图的重要信号。
- **`#4803` [OPEN] Security: API keys stored as plaintext in ~/.nanobot/config.json**: 由 `hamb1y` 提出的安全类 Issue 持续受到关注。虽然 `api_key` 字段设置了 `repr=False`，但仍然会被序列化到配置文件中。这表明社区对**凭证安全**的重视程度很高，相关 PR `#5010` 也正在处理中。

## Bug 与稳定性

今日报告的 Bug 主要集中在边缘情况和回归问题上，多数已有相应的修复 PR：

- **[严重] `#4864` [OPEN] `<tool_call>` 导致无限循环**: `complete_goal` 函数因网关解析递归参数错误而进入死循环。该 Bug 影响自动目标完成功能，已有用户标记，但尚未有明确的 fix PR 关联。
- **[高] `#4767` [CLOSED] QQ 频道 WebSocket 重连循环产生过多错误日志**: 问题归因于固定 5 秒重连间隔且无退避机制。对应修复 `#4768` 已于今日合并。
- **[中] `#5004` [CLOSED] `fix(session): tolerate unsupported directory fsync`**: 修复了某些共享文件系统无法执行目录 `fsync` 时导致的会话错误。该 PR 已合并。
- **[中] `#4988` [OPEN] `fix(agent): keep background turns silent`**: 当后台任务模型返回空结果时，会错误地输出“无法生成最终答案”的占位符，干扰自动化流程。已有修复 PR 在等待合并。

## 功能请求与路线图信号

- **多智能体协作 (Multi-Agent Collaboration)**: `#5000` 是一个重要的路线图信号。用户明确提出要从“任务委托”演进到具备**持久身份、共享状态和代理间通信**的协作模式。这很可能是 NanoBot 下一阶段的重要方向。
- **一键部署方案**: `#1503` 请求为 **`Dokploy`** 平台创建官方部署模板。今日已有对应的 PR `#5007` 被创建，表明该请求可能被纳入下一个小版本。
- **增强的工具网关 (Tool Gateway)**: `#5006` 提出的**带保护的工具网关**，为渠道插件提供了执行工具调用的能力，这将极大扩展渠道的功能边界。
- **Ollama 缓存优化**: 虽然 `#4867` 已关闭，但 `#4998` 文档的合并说明项目正在通过文档和模板的方式来缓解此问题。未来的版本可能会在代码层面进行更深入的优化。

## 用户反馈摘要

- **正面反馈**: 用户对项目修复问题的速度感到满意，例如 `#4767` 提出的 QQ 频道重连问题很快被 `#4768` 解决。社区存在对**简化部署** (如 `#1503`、`#4937`) 和**安全实践** (如 `#5010` 的文档改进) 的积极期待。
- **负面/痛点反馈**:
    1.  **Ollama 延迟**: 用户对 Ollama 用户的体验感受强烈，`#4867` 中描述“每轮额外增加60秒”的体验被认为“完全不可用”（_“totally unusable with Ollama and 32 GB of VRAM”_），这是当前最影响用户满意度的痛点。
    2.  **功能退化**: 用户 `Asem-D` 在 `#4864` 中抱怨“最近一次更新中工具参数序列化发生了变化”导致无限循环，这说明新版本可能引入了未被完全覆盖的回归 Bug。
    3.  **安全担忧**: `#4803` 和 `#5010` 的 PR 反映出用户对 API 密钥明文存储的安全风险感到不安，并主动推动了文档改进。

## 待处理积压

- **`#1503` [OPEN] [enhancement] Template for Dokploy**: 创建于 2026-03-04，已存在近5个月。虽然今日有相关 PR `#5007`，但该 PR 仍为开放状态。若能成功合并，将解决非技术用户部署的长期痛点。
- **`#4803` [OPEN] Security: API keys stored as plaintext**: 已创建两周，暂无对应的代码修复，仅有改进文档的 PR (`#5010`)。这是一个安全风险，建议维护者在未来版本中通过 `exclude=True` 或其他加密存储机制从根本上解决。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是为您生成的Hermes Agent项目动态日报。

---

## Hermes Agent 项目动态日报 | 2026年7月21日

### 1. 今日速览

Hermes Agent 在 `v0.19.0 "The Quicksilver Release"` 发布后首日即进入高度活跃的震荡期。过去24小时内，项目产生了50个Issue和50个PR，社区参与度极高，但同时也暴露了新版引入的多个关键回归和兼容性问题。今日的焦点集中在新版本导致的桌面端崩溃、插件系统中断以及核心会话功能的各类Bug上，项目健康度在当前处于“高活跃，高波动”状态，需要快速响应以稳定版本。

### 2. 版本发布

- **v2026.7.20 / v0.19.0 (The Quicksilver Release)**
  - **发布范围**：这是自v0.18.0以来的重大版本发布，包含约 **2,245次提交**、**1,065个合并PR**、关闭了约 **3,300个Issue**，并有 **450+ 社区贡献者**参与。代码库变更巨大，新增约30万行代码。
  - **更新说明摘要**：官方Release Note仅以“Hermes is the mess”作为描述，暗示其包含了大量变更，可能较为混乱。
  - **关键影响与风险**：
    - **破坏性变更**：从今日大量Issue来看，`0.19.0` 引入了至少以下破坏性变更：
      - **插件API不兼容**：`v0.19.0` 中 `registry.dispatch` 的行为变更导致插件处理程序因接收到意外的 `task_id` 参数而崩溃 (Issue #68318)。
      - **核心功能回归**：导致蓝泡泡（BlueBubbles）消息通道继续出现重复消息处理的问题 (PR #45317)。
    - **迁移注意事项**：
      - **插件开发者**：所有使用“single-args”处理程序形状的插件都需要升级以兼容新的 `task_id` 参数传递机制。
      - **打包测试风险**：`0.13.0` 至 `0.19.0` 的所有SDist包都包含一个危险的测试文件，该文件可在执行打包测试时杀死用户整个会话 (Issue #68311)。**强烈建议用户不要直接运行已发布SDist中的任何测试。**

### 3. 项目进展

尽管处于发布后的混乱期，但社区修复速度极快。今日合并/关闭的关键PR显示项目正在积极应对新问题并持续演进：

- **[合并] docs: Update README with roadmap and visual enhancements** (PR #4216)：文档更新，提升了项目README的可读性和信息性。
- **[合并] feat(docs): add Japanese README** (PR #68340)：新增日语版本README，体现了项目在国际化和社区建设上的持续投入。
- **[新建PR] fix(kanban): cap corrupt-DB quarantine backups per DB basename** (PR #68345)：针对数据库文件被外部进程持续写入导致备份无限增大的问题，提供了容量上限的修复方案。
- **[新建PR] feat(prompt): add machine hostname to environment hints** (PR #68341)：一个提升多主机管理效率的小功能，让Agent能识别自身运行的主机，避免无意义的SSH到自身。

**总体评估**：项目在大量Issue涌入时，维护者和社区成员响应迅速，展现了强大的工程能力和社区韧性。一次性合并大量PR的“Quicksilver”风格带来了功能飞跃，但也付出了稳定性的代价，目前正处在消化新功能的“阵痛期”。

### 4. 社区热点

今日讨论最活跃、反应最多的议题反映了社区对新版本稳定性和跨平台体验的核心关切：

1.  **跨平台会话共享**
    - **Issue #4335** *(8条评论, 2个👍)*: 要求实现CLI、Telegram等不同平台间的**会话上下文共享**。这背后是用户希望在不同设备间无缝切换体验的核心诉求，是目前功能上的一大空白。
    - **相关链接**：**Issue #68301** *(3条评论)* 也提出了类似诉求（桌面端 <-> Telegram 原生会话桥接），虽然已被标记为重复并关闭，但反映了该需求的强烈呼声。

2.  **蓝泡泡消息去重**
    - **Issue #34372** *(5条评论)*: 讨论巴蓝泡泡（BlueBubbles）桥接因自动订阅 `updated-message` 事件导致每条iMessage被处理两次的问题。这是一个影响iMessage用户的严重体验问题。

3.  **Cron任务执行问题**
    - **Issue #2788** *(6条评论)*: 用户报告Cron任务从不运行或失败时无记录。这是核心功能缺陷，影响Agent的自动化能力。
    - **相关链接**：**Issue #66868** *(5条评论)* 报告了在Cron任务中调用主模型时出现401认证失败，即使在交互式会话中正常。

4.  **插件扩展能力**
    - **Issue #64900** *(5条评论)*: 提出允许插件扩展 `send_message` 工具的平台特定schema和处理器。这反映了插件开发者对更高自由度的需求，渴望能深度集成平台特性。
    - **相关链接**：**Issue #64231** *(5条评论)*: 由一个核心贡献者提出，旨在规范插件的生命周期事件和钩子（Hook）体系，以清理大量悬而未决的钩子PR，体现了对插件系统进行工程化治理的迫切需求。

### 5. Bug 与稳定性

今日报告的Bug数量多且严重，主要集中在 `v0.19.0` 引入的回归问题和核心功能故障。以下按严重程度排列：

- **P0/P1 级致命错误:**
    - **致命测试 `os.kill` (Issue #68311)**: **（非常重要）** `0.13.0`至`0.19.0` 的所有SDist包中都包含一个会执行 `os.kill(-1, SIGTERM)` 的测试文件，运行测试会杀死用户的整个用户会话。这是一个安全性与打包流程上的严重缺陷。
    - **桌面端“已是最新”弹窗无法关闭 (Issue #66611)**: P3级Bug，但严重阻碍用户交互，点击关闭按钮无效，需强制重启应用。**已关闭**，推测已有修复并入。

- **P2 级功能损坏:**
    - **插件处理程序崩溃 (Issue #68318)**: `v0.19.0` 的核心回归，导致所有插件工具调用失败。今天**已有至少一款插件确认受影响** (`kasio-notion`)。
    - **Cron任务401认证失败 (Issue #66868)**: 关键自动化流程的中断。
    - **用户更新时拒绝恢复本地变更导致应用崩溃 (Issue #68244)**: 更新逻辑的Bug，导致应用无法启动。**尚未有对应修复PR**。
    - **TUI技能凭据提示路由错误 (Issue #68261)**: 多会话共享进程时，凭据提示可能发送给错误窗口，存在安全风险和混淆。**尚未有对应修复PR**。
    - **桌面端聊天消息消失 (Issue #68324)**: 用户切换会话后助手消息消失，核心体验受损。**尚未有对应修复PR**。
    - **其他P2级Bug**：消息处理冲突 (Issue #68339)、`resolve_gateway_approval` FIFO逻辑错误 (Issue #64001)、技能库更新注入子会话 (Issue #57626)、跨模块导入导致安装不原子 (Issue #68300) 等。

### 6. 功能请求与路线图信号

今日的功能请求反映出社区对Agent智能性、自定义能力和开发体验的更高期待：

- **🟢 高潜力下一版本 (已有对应PR或路线图信号):**
    - **MCP服务器管理 (Issue #690):** 提出为MCP服务器增加发现、选择性加载和CLI管理的功能。社区已有多次讨论，**可能在后续版本中被优先考虑**。
    - **平台原生搜索 (PR #68337):** 新增对Anthropic原生网络搜索的支持。这符合Agent工具调用向原生API演进的趋势，**有较高可能性被合并**。
    - **自定义Prompt / 状态管理 (PR #68330):** 提出 `POSTURE.md` 概念，用于管理Agent的旋转任务和状态，属于高级用户对Agent长期记忆和状态控制的深度需求。

- **🟡 值得关注的信号:**
    - **可配置快捷键 (Issue #4256):** 获得 **6个👍**，是今日点赞数最高的Feature Request。终端用户对自定义绑定有强烈需求，但尚无关联PR，可能不是近期重点。
    - **插件扩展 `send_message` (Issue #64900):** 代表了插件开发者对平台特定能力深度集成的渴求。项目的`hook-taxonomy` PR (Issue #64231) 正试图建立规则，可能为这类扩展铺平道路。

### 7. 用户反馈摘要

从今日的Issue和评论中，可以提炼出以下真实用户痛点与场景：

- **“更新即灾难”体验**：用户对`v0.19.0`更新后的体验感到沮丧。有用户反馈“更新后无法启动应用” (#68244)，更有用户报告“更新前同意恢复本地更改可能暴露未知风险，拒绝后应用直接崩溃”，这暴露了更新流程中对用户预期管理和回滚机制的设计缺陷。
- **跨平台工作是刚需**：多个Issue (如 #4335, #68301) 反复强调`CLI ↔ 桌面 ↔ Telegram`间无缝切换会话的迫切性。用户想要“拿起手机继续没聊完的天”的体验，但目前每个平台都是信息孤岛。
- **对稳定性而非功能的抱怨**：大量Bug反馈都指向了 `v0.19.0` 引入的核心功能回退。用户明确表达了“宁要一个稳定的旧版本，也不要一个什么都坏掉的新版本”的情绪。特别是在Cron任务、消息处理、桌面端交互等核心场景，稳定性是压倒一切的需求。
- **高级用户开始“折腾”插件**：来自插件开发者和高级用户的反馈增多，如`bka9` (#64900) 和 `arssnndr` (#68318)。他们不再满足于基本功能，开始探索如何通过插件扩展Hermes的上限，反映了社区的成熟度和技术深度。

### 8. 待处理积压

以下为需要维护者关注、长期未得到妥善解决的重大问题：

- **⚠️ 关键：发布流程与测试质量**
    - **Issue #68311 (致命测试)**: 这不是一个需要讨论的Bug，而是一个需要**立即采取行动**的发布流程缺陷。仅标记为P1可能都不够，它直接影响了所有SDist版本的可用性和安全性。需要调查为何测试包被包含在SDist中，并紧急发布补丁版本 (0.19.1)。
    - **Issue #68244 (更新崩溃), #68300 (非原子导入)**: 这些是影响版本更新和核心安装的流程性问题，可能需要在发布流程中增加更严格的CI/CD管道检查。

- **⚠️ 重要：用户体验与功能中断**
    - **Issue #34372 (蓝泡泡重复消息)**: 此Issue已存在近两个月，且PR #45317 明确指出`v0.19.0`仍未修复。对于iMessage用户是持续的困扰。
    - **Issue #2788 (Cron任务无运行/无日志)**: 已存在近四个月。Cron是Agent实现自动化工作的核心，此Issue的长期未解决对项目的专业性构成损害。
    - **Issue #2228 (系统错误消息角色错误)**: 报告于3月，涉及消息格式、角色判定逻辑这类核心建模问题，一直未被合并，需要评估其优先级和修复难度。

**分析师总结**：Hermes Agent 正处在一个关键的十字路口。`v0.19.0` 展现了惊人的社区活力和工程产出，但同时也带来了严重的稳定性问题。项目当前的首要任务应该是 **“止血”**——快速响应并修复P0/P1级的致命错误和关键回归，并审视其发布和测试流程。在确保核心功能稳健之后，再根据社区的反馈，严谨地将优秀的功能请求和插件生态规范化为下一版本的里程碑。管理层的当务之急是发布一个修复性质的 `v0.19.1` 或 `v0.19.0-hotfix` 版本。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据您提供的 PicoClaw 项目数据，为您呈现 2026年7月21日的项目动态日报。

---

## PicoClaw 项目动态日报 | 2026-07-21

### 1. 今日速览

PicoClaw 项目今日活跃度极高。过去24小时内，社区贡献者与维护者处理了 **11 个 Issues** 和 **10 个 Pull Requests**，其中 Issues 与 PRs 的关闭率均达到 50% 以上，显示出项目维护团队对社区反馈的积极响应。值得注意的是，今日关闭的 Issue 中包含多个与 **Antigravity 提供商** 相关的回归性 Bug（#3274, #3275, #3278），表明近期代码合并可能引入了连锁问题，但已快速定位并修复。新提交的 PRs 则覆盖了 **日文本地化** 和 **DashScope TTS 集成** 等多个功能增强点，项目整体处于功能迭代与稳定性加固并行的健康发展阶段。

### 3. 项目进展

今日合并/关闭的PR主要围绕代码清理、依赖更新和问题修复，表明项目正在进行定期的维护性工作，为后续功能发布奠定稳定基础。

- **【基础设施】Docker 镜像更新**: PR #3192 将 goreleaser 构建的基础镜像从 `alpine:3.21` 升级到 `3.23`，与主 Dockerfile 保持一致，提升了构建环境的现代性和安全性。
    - [PR #3192](https://github.com/sipeed/picoclaw/pull/3192)
- **【代码质量】配置清理**: PR #3191 合并了 `.gitignore` 中的重复 `build/` 条目，净化了项目根配置。
    - [PR #3191](https://github.com/sipeed/picoclaw/pull/3191)
- **【长期待办】文档优化与构建逻辑**: 之前停滞的 PR #276 (README 改进) 和 PR #277 (make deps 逻辑优化) 在今日被关闭，虽然均为较旧的PR，但关闭动作释放了积极信号，说明项目正在清理积压工作，为旧有贡献画上句点。
    - [PR #276](https://github.com/sipeed/picoclaw/pull/276)
    - [PR #277](https://github.com/sipeed/picoclaw/pull/277)

### 4. 社区热点

今日最受关注的议题集中在 **“Antigravity”提供商** 的用户体验上。尽管该提供商存在多个 Bug，但用户反馈积极且详细，社区互动紧密。

1.  **Antigravity 提供商的多重回归问题**
    - 用户 @honbou 是今天社区最活跃的贡献者之一，连续提交了 3 个关于 Antigravity 提供商的关键 Bug，分别涉及 `tool_schema_transform` 参数错误 (#3274)、OAuth 策略合规性 (#3278) 以及配置重写后 `api_key` 丢失 (#3275)。这些 Issues 均在今日被关闭，显示出开发者对特定用户问题的响应速度极快。
    - **链接**: [#3274](https://github.com/sipeed/picoclaw/issues/3274), [#3278](https://github.com/sipeed/picoclaw/issues/3278), [#3275](https://github.com/sipeed/picoclaw/issues/3275)
    - **诉求分析**: 用户 @honbou 正在尝试在云环境（Azure VM）中稳定部署 PicoClaw，并深度使用其 Antigravity (Google OAuth) 集成功能。这表明 “云部署 + 第三方提供商集成” 是 PicoClaw 的一个核心使用场景，任何回归都会严重阻塞用户工作流。

2.  **MCP Server 连接失败导致 Agent 挂起**
    - Issue #3269 得到了至少一位用户的关注（`👍: 0`，但评论由创建者 @ruiyigen 提出，未获官方回复）。该问题直接揭示了 Agent 循环对后台服务（MCP）的硬依赖，一旦连接失败，整个聊天界面表现为“死机”，这是影响用户体验的严重问题。
    - **链接**: [#3269](https://github.com/sipeed/picoclaw/issues/3269)
    - **诉求分析**: 用户期望 PicoClaw 的 Agent 系统具备更强的鲁棒性，即某个上游服务故障不应导致整个应用的完全不可用。这指向对错误隔离和优雅降级（graceful degradation）功能的需求。

### 5. Bug 与稳定性

今日共报告了 **6 个新的 Bug**，其中 **2 个仍处于开放状态**。最为严重的问题集中在 **Agent循环挂死** 和 **核心提供商集成** 上。

- **严重: Agent 循环挂死 (OPEN)**: Issue #3269 描述了当 MCP 服务器连接失败时，Agent 循环会持续挂起，导致整个 PicoClaw 聊天界面停止响应。这是一个阻塞型 Bug，会使用户在单次错误后完全失去交互能力。
    - **链接**: [#3269](https://github.com/sipeed/picoclaw/issues/3269)
    - **状态**: 无关联 PR，仍需关注。
- **严重: Antigravity 提供商多项回归 (CLOSED)**: 三个关联 Bug (#3274, #3278, #3275) 已关闭。它们揭示了 v0.3.1 版本中引入的严重回归，影响了 Antigravity 提供商的可用性，包括工具调用失败、OAuth 登录完全阻断以及配置损坏。尽管已修复，但同一提供商在短时间内出现多个回归，提示其测试覆盖度可能不足。
    - **链接**: [#3274](https://github.com/sipeed/picoclaw/issues/3274), [#3278](https://github.com/sipeed/picoclaw/issues/3278), [#3275](https://github.com/sipeed/picoclaw/issues/3275)
- **中等: 网络中断后 Matrix 同步无重连逻辑 (OPEN)**: Issue #3203 描述了 Matrix 的 `/sync` 长轮询在网络中断后永久死亡，且不被 systemd 重启策略覆盖。这是一个长期存在的可靠性问题，会导致核心通信渠道静默失效。
    - **链接**: [#3203](https://github.com/sipeed/picoclaw/issues/3203)
    - **状态**: 距今已近20天，添加了 `stale` 标签，需要维护者介入讨论或提供修复方案。

### 6. 功能请求与路线图信号

今日社区提出了 3 个明确的功能请求，其中 2 个已有对应的实现 PR，极有可能进入下一个版本。

- **【高优先级】日文本地化**:
    - 用户 @honbou 在 feature request #3272 中提出为 WebUI 添加日语支持。
    - **响应速度**: 非常迅速。用户同时提交了实现 PR #3273，该 PR 添加了完整的 968 行日文翻译并注册了 dayjs 语言包。
    - **路线图信号**: 这表明 PicoClaw 正在积极拓展东亚市场，维护者对国际化请求持开放态度。
    - **链接**: [#3272](https://github.com/sipeed/picoclaw/issues/3272), [PR #3273](https://github.com/sipeed/picoclaw/pull/3273)
- **【高优先级】DashScope TTS 与微信音频发送**:
    - PR #3270 由 @MrTreasure 提出，计划增加阿里云 DashScope 的文本转语音（TTS）功能，并集成到微信消息发送中。
    - **路线图信号**: 这标志着 PicoClaw 正在超越纯文本聊天，向多模态（语音）和更丰富的集成（微信生态）迈进。
    - **链接**: [PR #3270](https://github.com/sipeed/picoclaw/pull/3270)
- **【中等优先级】Launcher对外部Gateway管理的支持**:
    - Issue #3276 提出希望 Launcher 能检测到由 systemd 等外部进程管理的 Gateway，避免 UI 中的“启动/停止”按钮与实际服务状态冲突。
    - **路线图信号**: 这反映了用户正将 PicoClaw 部署到更正式的生产环境中，需要更完善的系统集成能力。
    - **链接**: [#3276](https://github.com/sipeed/picoclaw/issues/3276)

### 7. 用户反馈摘要

- **痛点**: 用户 @ruiyigen 反馈 **MCP 服务不稳定直接导致 Agent 崩溃**，这是当前最迫切的稳定性问题。
- **痛点**: 用户 @honbou 在尝试云部署时遭遇了 **Antigravity 提供商的多处回归**，尽管已修复，但过程影响了其正常使用。
- **满意点**: 用户 @honbou 愿意投入大量精力提交详细的 Bug 报告（包含日志、截图和复现步骤），并且主动提交本地化 PR，表明其对项目有较高信任和投入度。
- **使用场景**: 从反馈看，PicoClaw 已不仅用于个人聊天机器人，而是被用于 **云端的、需要稳定后台服务（如 Matrix, MCP）支持的生产级 Agent**。

### 8. 待处理积压

部分长期未更新的 Issue 已被打上 `stale` 标签，需要维护团队特别关注，以避免社区贡献者的热情消退。

1.  **【高优先级】Matrix 同步无重连逻辑 (stale)**: Issue #3203 已开放近 20 天，严重影响了依赖 Matrix 通道的用户。建议维护者尽快确认修复优先级或给出临时工作区。
    - **链接**: [#3203](https://github.com/sipeed/picoclaw/issues/3203)
2.  **【中优先级】SearXNG Basicauth 支持 (stale)**: Issue #3231 来自中文用户 @okattjc，提出了一个在自托管 SearXNG 场景下非常实用的认证需求。该项目虽已关闭，但未说明后续计划。如果该项目不计划合入，建议明确告知用户解决方案或原因。
    - **链接**: [#3231](https://github.com/sipeed/picoclaw/issues/3231)
3.  **【中优先级】对话缓存断点提议 (stale)**: Issue #3229 来自 @AayushGupta16，是一份结构良好的优化提案，旨在节省 Anthropic API 的 token 消耗。此类来自社区的架构优化建议非常宝贵，即使当前无法实现，也应对提案给予肯定和讨论。
    - **链接**: [#3229](https://github.com/sipeed/picoclaw/issues/3229)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，这是为您生成的 NanoClaw 项目动态日报。

---

# NanoClaw 项目动态日报 2026-07-21

## 1. 今日速览

过去24小时内，NanoClaw 项目活跃度极高。社区提交了20个PR和6个Issue，主要集中在**安全加固**和**功能扩展**两个方向。核心团队快速合并了6个PR，显示出强劲的维护动力。需特别关注的是，`k-fls` 提交了一系列关于**权限系统**的严重安全漏洞报告及修复PR，这直接关系到项目的信任根基。此外，LINE集成和WhatsApp云API的修复也取得了重要进展，表明渠道矩阵正在稳步拓宽。

## 2. 版本发布

*无新版本发布。*

## 3. 项目进展

今日共有6个PR被合并/关闭，涵盖安全修复、容器化优化和渠道适配：

- **安全与权限**： `#3087` 修复了WhatsApp群组中 `@-mention` 模式未被正确触发的问题，确保群聊互动体验完整。
- **容器化**： `#3110` 将 `caldav-mcp` 服务器集成进代理容器镜像，为用户提供了更便捷的日历工具接入能力。 `#2642` 通过固定 `chat-adapter` 依赖版本，解决了Telegram集成时的版本冲突问题。
- **渠道适配**： `#3108` 修复了Chat SDK桥接器中处理附件时丢失数据的问题，补齐了处理链路中的关键一环。 `#3107` 为WhatsApp Cloud集成提供了行数据迁移的修复文档。
- **测试维护**： `#1110` 更新了容器运行时相关测试，使其与实际实现保持一致，提升了测试的可靠性。

这些合并表明项目正同时推进**功能开发**和**安全基建**。

## 4. 社区热点

今日最值得关注的社区热点围绕 **权限安全体系**展开，由 `k-fls` 发起的一系列Issue和PR形成了集中的讨论焦点。

- **热点一：权限授予/撤销的安全隐患**
    - **相关Issue**: `#3097` [OPEN] [角色授予漏洞](https://github.com/nanocoai/nanoclaw/issues/3097), `#3100` [OPEN] [撤销最后拥有者导致无信任根基](https://github.com/nanocoai/nanoclaw/issues/3100), `#3099` [OPEN] [审批路由绕过权限检查](https://github.com/nanocoai/nanoclaw/issues/3099)
    - **分析**：这三个Issue揭示了权限系统中的连锁问题：管理员可能因为误操作**授予全局管理员权限**、**撤销最后一个拥有者**导致系统无人可管理、且**审批流程本身可能被绕过**，让被修改权限的人自己批准自己的权限变更。这反映出社区对安全和治理的深度思考，诉求是建立一个**更严谨、防误操作、防滥用**的权限模型。

- **热点二：审批流程不透明**
    - **相关Issue**: `#3098` [OPEN] [审批卡片仅显示原始命令，效果不明确](https://github.com/nanocoai/nanoclaw/issues/3098)
    - **分析**：该Issue指出，在执行需要审批的高危操作时，展示给审批人的信息仅仅是原始命令行，而缺乏操作后的**状态变更描述**。这让审批者在信息不全的情况下做出决策，增加了误审批的风险。用户的核心诉求是**提升审批流程的透明度和可理解性**。

- **核心诉求总结**：这些热点共同指向一个诉求：**NanoClaw需要一套更安全、更透明、更防错的内部治理机制**。令人欣慰的是，`k-fls` 不仅报告了问题，也提交了对应的修复PR（`#3101`, `#3102`, `#3103`, `#3104`），这极大地提升了项目稳定性。

## 5. Bug 与稳定性

今日报告的 Bug 集中于数据迁移和安全逻辑，按严重程度排列如下：

- **严重：系统无信任根基风险**
    - **Issue**: `#3100` [撤销最后一个拥有者](https://github.com/nanocoai/nanoclaw/issues/3100)
    - **影响**：若执行此操作，系统将无法进行任何管理员级别操作，造成管理锁死。
    - **修复 PR**: `#3104` [拒绝撤销最后一个拥有者](https://github.com/nanocoai/nanoclaw/pull/3104) *（已提交，待合并）*

- **严重：审批逻辑绕过权限检查**
    - **Issue**: `#3099` [审批路由忽略权限](https://github.com/nanocoai/nanoclaw/issues/3099)
    - **影响**：攻击者或误操作可能导致低权限用户批准高权限操作，或权限变更者自己批准自己的变更，存在严重安全漏洞。
    - **修复 PR**: `#3103` [安全修复：权限比例、排除目标的角色变更审批路由](https://github.com/nanocoai/nanoclaw/pull/3103) *（已提交，待合并）*

- **中等：WhatsApp Cloud 数据迁移问题**
    - **Issue**: `#3105` [Bug：升级现有WhatsApp Cloud安装后遗留数据行](https://github.com/nanocoai/nanoclaw/issues/3105)
    - **影响**：在已有WhatsApp Cloud集成的用户升级后，可能导致服务静默失效。
    - **修复 PR**: `#3106` [修复WhatsApp Cloud数据迁移遗留问题](https://github.com/nanocoai/nanoclaw/pull/3106) *（已提交，待合并）*

- **中等：附件数据丢失**
    - **PR**: `#3109` [修复iMessage本地模式下附件读取](https://github.com/nanocoai/nanoclaw/pull/3109) *（已提交，待合并）*
    - **说明**：针对iMessage渠道附件未被正确传递到代理的问题提出了修复方案。

## 6. 功能请求与路线图信号

今日功能请求活跃，且与已有PR高度关联，显示出清晰的开发信号：

- **LINE 官方账号集成**
    - **Issue**: `#3096` [功能：添加/add-line技能](https://github.com/nanocoai/nanoclaw/issues/3096) (新开)
    - **关联 PR**: `#2918` [添加LINE官方账户渠道](https://github.com/nanocoai/nanoclaw/pull/2918) (已存在，待合并)
    - **分析**：新的功能请求直接引用了已存在的PR，表明社区对**LINE渠道**的强烈需求。这极有可能成为下一个被优先合并的特性，以覆盖日本、台湾、泰国等关键市场。

- **Dial 渠道集成**
    - **PR**: `#3041` [添加Dial渠道适配器](https://github.com/nanocoai/nanoclaw/pull/3041) (待合并)
    - **PR**: `#3050` [在频道选择器中添加Dial](https://github.com/nanocoai/nanoclaw/pull/3050) (待合并)
    - **分析**：这两个PR为集成 **Dial（SMS + AI语音通话）** 渠道铺平了道路。这表明项目路线图正超越纯文本消息，向**多渠道、多模态通信**演进。

- **语音转录功能**
    - **PR**: `#2459` [添加/add-voice-transcription技能](https://github.com/nanocoai/nanoclaw/pull/2459) (待合并)
    - **分析**：这是一个提出时间较早但仍在更新的PR，旨在为Discord等渠道提供**本地Whisper模型**的语音转录能力，强调隐私和无需云API。虽然等待时间较长，但其核心价值（隐私、离线）可能在后续版本中占据重要地位。

## 7. 用户反馈摘要

- **痛点**：`k-fls` 在 `#3097`、`#3098`、`#3099` 等Issue中细致描述了权限和审批操作中**缺乏透明度**和**容错机制**的问题，反映了高级用户对系统安全性的高要求和对潜在误操作的担忧。
- **使用场景**：`joshm1230212` 在 `#3096` 中明确提出了 **LINE集成**的用例，即“日本、台湾、泰国的主流即时通讯工具”，这为项目指明了针对特定市场的扩展方向。
- **改进建议**：`glifocat` 在 `#3105` 中详细描述了 **Upgrade路径**上的数据兼容性问题，这是一种非常典型的生产环境反馈，提醒维护者需要将“滚动升级”纳入设计考量。

## 8. 待处理积压

- **长周期特征PR**：`#2459` [语音转录功能](https://github.com/nanocoai/nanoclaw/pull/2459) 已开启超过2个月，需要维护者评估其状态，是继续推进、关闭还是进行重构，以避免社区核心贡献者的工作被长期搁置。
- **渠道集成PR**：`#2918` [LINE渠道集成](https://github.com/nanocoai/nanoclaw/pull/2918) 和 `#3041`/`#3050` [Dial渠道集成](https://github.com/nanocoai/nanoclaw/pull/3041) 都是来自社区、耗时较长的特性PR。鉴于今日有新的LINE集成请求（`#3096`），维护者可优先对 `#2918` 进行审查和合并决策。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是我根据 NullClaw 项目于 2026-07-21 的数据生成的日报。

---

# NullClaw 项目动态日报 | 2026-07-21

### 1. 今日速览

项目在过去 24 小时内处于低活跃度状态，无新 Issues 产生或关闭。主要活动集中在单一依赖更新 PR 的持续开放中。这反映出当前开发节奏放缓，项目可能正处于维护期或等待关键功能合并的阶段。唯一的一条活跃 PR 为自动化依赖升级，表明项目在基础架构维护上保持持续关注，但在新功能或 Bug 修复方面无明显进展。整体项目健康状况稳定，但创新驱动力减弱。

### 2. 版本发布

无

### 3. 项目进展

今日无 PR 被合并或关闭。唯一活跃的 PR #956 仍处于待合并状态，项目整体状态与前一日相比无实质性变化。

### 4. 社区热点

[#956 [OPEN] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)

- **分析：** 这是目前唯一活跃的 PR，由 Dependabot 自动发起。虽然无用户评论或反应，但其长期未合并（自 2026-06-15 创建）的状态值得关注。该项目旨在升级 Docker 基础镜像中的 Alpine Linux 版本（从 3.23 到 3.24）。此类更新通常涉及安全补丁和基础库的兼容性改进。PR 的搁置可能反映出维护者对自动化更新持谨慎态度，或在等待其他相关依赖的同步升级，以避免引入不兼容问题。这构成了社区事实上的“热点”，因为它代表了项目主干的基础设施维护动作。

### 5. Bug 与稳定性

今日无新 Bug 报告。项目在稳定性方面暂无噪声。

### 6. 功能请求与路线图信号

今日无新功能请求提出。结合积压的 PR #956 来看，项目的近期隐含路线图信号是 **平台基础环境的现代化**，即升级 Docker 构建环境。这可能是为了适配更底层的系统依赖或解决潜在的安全漏洞，但尚未转化为明确的用户功能交付。

### 7. 用户反馈摘要

由于今日无活跃的 Issues 和 PR 评论，无法提炼出真实的用户反馈。这表明用户群体在当前时间段内处于“静默”状态，可能意味着产品体验稳定，未出现迫使用户提交反馈的痛点。

### 8. 待处理积压

[#956 [OPEN] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)
- **状态：** 已开放 36 天，无实质讨论。
- **重要性：** **高**。尽管是自动化更新，但长期搁置意味着 Docker 镜像构建环境还停留在较旧的 Alpine 3.23 版本。这可能引入未被发现的安全漏洞或阻止其他依赖的升级。建议维护者尽快评估并决定是否合并，或关闭并说明理由，以避免技术债务累积。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是根据您提供的 IronClaw 项目 GitHub 数据生成的 2026-07-21 项目动态日报。

---

# IronClaw 项目动态日报 — 2026-07-21

**分析师:** AI 智能体与个人 AI 助手领域开源项目分析师

## 1. 今日速览

项目今日活跃度极高，处于重大架构转型的冲刺阶段。核心任务是彻底移除旧的 v1 遗留单体 `src/` 代码库 (`src/`)，并将所有生产部署切换到全新的 Reborn 架构栈。核心开发者在过去24小时内合并了多个高风险、大规模的 PR（#6375, #6382），并提交了多项后续清理与功能完善工作。同时，社区报告的 Bug 数量激增，其中 **P2 级别** 的常见问题（如语言切换、流式传输循环、错误显示等）成为主要关注点，表明 Reborn 架构在大规模推向用户后暴露出了一系列稳定性与体验问题。总体而言，项目处于 **“破坏性重构”与“密集 Bug 修复”并行的活跃阶段**。

## 2. 版本发布

**无。** 过去24小时内无新版本发布。但一个标记为 `ironclaw-v1.0.0-rc.1` 的候选版本发布过程遇到 CI 失败 (#6383) 并正在修复中，这可能是下一个正式发布的版本。

## 3. 项目进展

今日项目完成了多个里程碑式的重构，取得重大进展。

- **🎉 [核心里程碑] V1 单体代码库被彻底删除：**
    - **PR #6375** *(已合并)*: [refactor(tier-b): delete v1 legacy monolith (src/) and cut deploy over to Reborn](https://github.com/nearai/ironclaw/pull/6375)
        - 这是今日最重大的合并，风险等级为 **高风险**。该 PR 删除了整个旧的 `src/` 代码库，并将 Railway、GCP 和 Docker CI 的部署配置全部指向了 Reborn 栈。这标志着 IronClaw 的 Reborn 重写从“并行运行”阶段正式进入“全面替代”阶段。

- **🧹 架构清理与维护：**
    - **PR #6382** *(已合并)*: [refactor(turns): simplify filesystem_store](https://github.com/nearai/ironclaw/pull/6382) - 对关键的 `filesystem_store` 模块进行了大幅简化，移除了生产环境中已不再使用的代码，提升了关键数据持久化路径的稳定性和可维护性。
    - **PR #6378** *(已合并)*: [chore(runner): remove dead feature flags](https://github.com/nearai/ironclaw/pull/6378) - 进一步清理了 `ironclaw_runner` 中的无用功能标志，简化了构建配置。
    - **PR #6374** *(已合并)*: [refactor(composition): eliminate local_trigger_access](https://github.com/nearai/ironclaw/pull/6374) - 移除了最后一个旧部署模式 (`Local*`) 的侵入，使配置与身份验证更加统一和清晰。

- **🔨 持续功能推进：**
    - **PR #6388** *(开启中)*: [refactor(composition): relocate profile edge](https://github.com/nearai/ironclaw/pull/6388) - 继续完成 `DeploymentConfig` (Issue #6274) 的工作，将配置相关的边缘情况集中化。
    - **PR #6386** *(开启中)*: [refactor(reborn): consolidate all pre-flight policy](https://github.com/nearai/ironclaw/pull/6386) - 旨在将所有预飞行安全检查集中到 `authorize()` 函数中，实现安全里程碑，增强系统安全性。
    - **PR #6376** *(开启中)*: [Add streaming retry resilience coverage](https://github.com/nearai/ironclaw/pull/6376) - 引入了针对流式传输的重试弹性测试，以提升系统稳定性。

## 4. 社区热点

今日讨论主要集中在 **之前报告的 Bug** 以及 **当前架构升级的后续影响** 上。

1.  **用户界面与体验 Bug 讨论：**
    - **Issue #6190** (4 评论): [Multiple conflicting error messages displayed](https://github.com/nearai/ironclaw/issues/6190) - 用户对单个请求失败时显示多个冲突的错误消息感到困惑，认为这严重干扰了问题定位。
    - **Issue #6189** (4 评论): [Retryable stream error leaves completed response in failed state](https://github.com/nearai/ironclaw/issues/6189) - 已经完成响应的对话却显示可重试错误，用户普遍认为这是误导信息，希望修复。

    **分析：** 这两个是与 Stream（流式传输）相关的高频问题，共获得 **8 条评论**。用户的核心诉求是**清晰、准确、一致的错误反馈机制**，而不是多个相互矛盾的信息。

2.  **架构升级的后续空白讨论：**
    - **Issue #6369** (3 评论): [Tier B follow-up: gaps left by v1 (src/) retirement](https://github.com/nearai/ironclaw/issues/6369) - 由核心开发者创建，公开讨论删除 v1 代码后遗留的空白。这是社区与开发者就重大变更进行透明沟通的典型示例，表明团队正在主动识别和解决“拆旧建新”过程中的问题。

## 5. Bug 与稳定性

今日 Bug 报告数量较多，大部分与 Reborn 架构的初始用户体验有关。

**严重 Bug (P1级):**
- **Issue #6348**: [Gmail extension is automatically authorized without user consent after reinstall](https://github.com/nearai/ironclaw/issues/6348) - 安装后自动授权，**无任何 OAuth 提示**，存在重大安全隐患。
- **Issue #6360**: [Provider onboarding has no way to navigate back](https://github.com/nearai/ironclaw/issues/6360) - 提供商注册流程中的 UI 死胡同，用户无法返回上一步，体验极差。

**常见 Bug (P2级):**
- **Issue #6350 (2 评论)**: [Assistant unexpectedly switches response language](https://github.com/nearai/ironclaw/issues/6350) - 助理响应语言突然变为乌克兰语，影响用户体验。
- **Issue #6351 (2 评论)**: [Run fails with checkpoint unavailable/unreachable errors](https://github.com/nearai/ironclaw/issues/6351) - 多工具请求因系统检查点问题失败，可能指向后端基础设施的稳定性。
- **Issue #6352 (0 评论)**: [Streamed response replays in a loop after returning to the page](https://github.com/nearai/ironclaw/issues/6352) - 页面切回后流式响应循环播放，是一个明显的 UI 渲染错误。
- **Issue #6353 (2 评论)**: [Long assistant messages are truncated without expansion option](https://github.com/nearai/ironclaw/issues/6353) - 长消息被截断且无展开选项，影响信息阅读。
- **Issue #6189, #6190, #6349, #6362** 等 P2 级 Bug 均在今日被报告或更新。

**测试基础设施问题:**
- **Issue #6359**: [reborn_trace_first_party_tool_coverage reads real $HOME state](https://github.com/nearai/ironclaw/issues/6359) - 测试用例因读取开发者的本地环境变量而无法在本地通过，但在 CI 上总是绿色，是一个典型的测试环境隔离问题。

## 6. 功能请求与路线图信号

虽然今日没有全新的用户功能请求，但多个已提出的 Enhancement 被明确标记为 Reborn 待办事项，预示着下一版本的重点方向。

**可能被纳入下一版本 (v1.0 RC) 的功能：**
- **Issue #6320**: [feat(reborn): IronHub extension install flow](https://github.com/nearai/ironclaw/issues/6320) - **Reborn 原生插件市场安装流程**。这是构建开放生态的关键一环。
- **Issue #6324**: [feat(reborn): WebUI workspace redesign and chat-first onboarding](https://github.com/nearai/ironclaw/issues/6324) - **WebUI 工作区重设计与聊天优先入门体验**。旨在优化新用户的第一印象和核心交互流程。
- **Issue #6325**: [feat(reborn): thread-scoped MCP sessions and programmatic MCP config](https://github.com/nearai/ironclaw/issues/6325) - **线程作用域的 MCP 会话与程序化配置**。用于增强对 AI 工具（MCP）的控制和隔离。

**内部重构信号：**
- **Issue #6329**: [Decompose extension_lifecycle.rs (8,789 lines)](https://github.com/nearai/ironclaw/issues/6329) - 团队内部提出必须拆分一个接近 9000 行的巨型文件，以保持代码可维护性。
- **Issue #6389**: [Phase 4 (§5.11): collapse build_local_runtime + build_production_shaped](https://github.com/nearai/ironclaw/issues/6389) - 继续完成架构简化，合并运行时的构建路径。

## 7. 用户反馈摘要

从今日的 Issues 评论和报告中，可以提炼出以下痛点：

- **🤯 信息混乱与不一致：** 用户对于“完成但显示错误”（#6189）和“一个请求多个错误”（#6190）的现象感到非常困惑。这表明错误处理和信息呈现机制需要根据不同的失败原因进行更加精细化的设计。
- **🌐 跨渠道体验割裂：** 在 Telegram 和 WebUI 间使用同一个会话时，对话布局出现混乱（#6349）。用户期望在不同平台间获得一致的对话体验。
- **🕹️ 操作流程不友好：** 提供商注册无法返回上一步（#6360）、长消息被暴力截断（#6353）、流式响应进入死循环（#6352），这些都是直接破坏核心交互流程的体验问题。
- **🔒 合规与安全感缺失：** Gmail 扩展的自动授权（#6348）引发了用户对隐私和控制的强烈担忧。这是严重的安全敏感问题，必须优先处理。

## 8. 待处理积压

以下 Issue/PR 长期未被处理或回应，需要维护者关注：

- **Issue #2277** (已开启 102 天, 1 👍): [V2: ACP-backed child thread backends for delegated external agents](https://github.com/nearai/ironclaw/issues/2277) - 一个长期开放的、关于集成外部编码代理（如 Codex）的长期功能请求。虽然评论数不多，但获得了社区正面回应。随着 Reborn 架构的稳定，此问题可能会成为下一个版本的路线图候选。
- **PR #5598** (已开启 18 天): [chore: release](https://github.com/nearai/ironclaw/pull/5598) - 一个由 CI Bot 创建的自动更新依赖的 PR，长期未合并。虽然风险低，但长期搁置可能导致依赖版本落后，建议维护者定期review并合并此类后台任务。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据提供的 LobsterAI GitHub 数据，为您生成 2026-07-21 的项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-07-21

## 1. 今日速览

今日 LobsterAI 项目活跃度较高，主要得益于上周六（7月20日）大量的代码提交和合并工作。尽管今日无新 Issue 和新版本发布，但项目在功能开发、Bug 修复和基础依赖更新方面均取得了显著进展。全天共有 15 个 PR 处于活跃状态，其中 10 个已成功合并或关闭，主要集中在“开物” (Cowork) 协同功能、Windows 更新、AI 皮肤创作以及多项稳定性修复上。这表明项目正处于一个密集的功能迭代和稳定性打磨阶段。

## 2. 版本发布

无。

## 3. 项目进展

今天虽没有新版本发布，但项目核心功能取得了实质性推进：

- **“开物” (Cowork) 多注释附件功能** ([#2366](https://github.com/netease-youdao/LobsterAI/pull/2366))：此PR已合并，实现了在内置浏览器中批量创建评论注释并支持截取保存为附件。该功能将显著提升用户在协同工作场景下的信息收集和上下文传递效率，是项目协同能力的一大步。
- **AI 皮肤创建流程优化** ([#2361](https://github.com/netease-youdao/LobsterAI/pull/2361))：此PR已合并，为 AI 皮肤创作功能增加了持续的入口、首次使用引导和更简洁的框架提示，大大降低了用户创建个性化皮肤的门槛，提升了用户体验。
- **Windows 自动静默更新** ([#2368](https://github.com/netease-youdao/LobsterAI/pull/2368))：此PR处于开放状态，计划通过 PowerShell 启动 NSIS 安装器实现无交互静默安装，这对于希望简化更新流程的管理员和企业用户来说是个重要特性。
- **基础架构与依赖更新**：合并了构建脚本的清理 ([#2367](https://github.com/netease-youdao/LobsterAI/pull/2367))，并向 Electron 43 等核心依赖发起升级 ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277))，表明项目在积极跟进上游，确保技术栈的现代性和安全性。

总体来看，项目在协同工作、个性化定制、自动化和稳定性四大维度上均有建树，为下一阶段的功能发布奠定了坚实基础。

## 4. 社区热点

今日无特别活跃的讨论或高互动量 Issue/PR。从近期趋势看，社区重点关注以下方面：
- **协同功能 (Cowork)**：多个 PR ([#2366](https://github.com/netease-youdao/LobsterAI/pull/2366), [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359)) 专注于增强协同功能，暗示用户对在 AI 对话中进行更复杂的上下文传递（如截图、注释）有明确需求。
- **用户体验与稳定性**：许多 PR 都是针对 UI 闪烁、滚动跳转、消息闪烁等细节问题 ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364), [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363), [#2362](https://github.com/netease-youdao/LobsterAI/pull/2362))，说明用户对产品的稳定性和流畅度有较高期待，社区反馈也主要集中在这些“打磨”环节。

## 5. Bug 与稳定性

今日没有全新的 Bug 报告。但团队修复了多个与稳定性相关的问题，展示了快速响应能力：
- **严重**：
    - **IM消息闪烁** ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363))：修复了周期性的 IM 消息闪烁问题，已合并。
- **中等**：
    - **会话刷新时滚动跳转** ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364))：修复了刷新协同会话时屏幕滚动异常的问题，已合并。
    - **登录重试回调丢失** ([#2360](https://github.com/netease-youdao/LobsterAI/pull/2360))：修复了在重复或并发登录尝试时，本地回调失效的问题，已合并。
- **低**：
    - **UI布局闪动** ([#2359](https://github.com/netease-youdao/LobsterAI/pull/2359))：修复了预览面板展开/收起时的布局闪烁和输入区高度变化问题，已合并。
    - **定时任务UI Bug** ([#2362](https://github.com/netease-youdao/LobsterAI/pull/2362))：修复了一个定时任务相关的 UI 错误，已合并。

## 6. 功能请求与路线图信号

- **窗口静默更新** ([#2368](https://github.com/netease-youdao/LobsterAI/pull/2368))：此开放 PR 直接指向企业级管理需求，虽非用户直接提出，但该项目落地可能性很高，很可能被纳入下一版本。
- **基础依赖大版本升级**：`dependabot` 提出的 React 18 → 19 (`#1283`)、`@headlessui/react` 升级 (`#1282`) 和 Electron 升级 (`#1277`) 均为长期未合并的PR。这些升级通常带来性能提升和新能力，但也可能引入破坏性变更。团队在审慎评估，这预示着在未来某个版本可能会迎来一次较大的技术栈更新。
- **POPO 连接测试验证** ([#1349](https://github.com/netease-youdao/LobsterAI/pull/1349))：此 PR 修复了一个重要的用户痛点（伪验证通过），虽然已关闭，但反映出用户对第三方服务（如POPO）集成的可靠性和准确性有明确要求。未来可能会有更多此类集成验证方面的优化。

## 7. 用户反馈摘要

今日无新的 Issue 评论发酵。但从已合并的 PR 来看，可以推断出用户痛点：
- **协同工具效率**：用户需要一种更直观的方式在AI对话中分享和引用网页内容，而这正是 `#2366` 多注释附件功能所要解决的。`#2359` 和 `#2364` 的修复也印证了用户对协同场景下流畅交互的重视。
- **配置验证的可靠性**：`#1349` 的问题（测试假通过）表明用户对于配置环节的反馈真实性高度敏感，虚假验证会严重降低信任度。

## 8. 待处理积压

以下 PR 长期处于开放状态，需要维护者重点关注和推动，以避免技术债务积累和社区贡献者积极性受挫：

- **重大依赖升级**：
    - [PR #1282](https://github.com/netease-youdao/LobsterAI/pull/1282): 升级 `@headlessui/react` (v1→v2)。*老旧的UI库可能会成为未来开发的瓶颈。*
    - [PR #1283](https://github.com/netease-youdao/LobsterAI/pull/1283): 升级 `react` (v18→v19)。*需要评估兼容性，但长期搁置会错失性能和新特性。*
    - [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277): 升级 `electron` (v40→v43) 和 `electron-builder`。
- **旧 Issue 修复**：
    - [PR #1349](https://github.com/netease-youdao/LobsterAI/pull/1349): POPO 连接验证（已关闭）。*虽然已关闭，但可以作为处理类似“假验证”问题的参考案例。*
- **持续优化**：
    - [PR #1284](https://github.com/netease-youdao/LobsterAI/pull/1284): 升级 `react-syntax-highlighter`。*对于代码展示类功能有直接影响。*

**建议**：建议维护团队定期审查上述积压PR，确定每个升级/修复的优先级，并给出明确的合并或关闭计划，以保持项目健康度。

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 CoPaw 项目 GitHub 数据，我为您生成 2026-07-21 的项目动态日报。

---

# CoPaw 项目日报 | 2026-07-21

## 1. 今日速览

今日 CoPaw 项目社区活跃度 **极高**，Issues 和 PR 的更新数量均处于近期高位，表明开发者社区和用户群体均在积极贡献与反馈。项目核心开发团队正在进行密集的 Bug 修复和功能开发，特别是在 **Agent 推理与工具调用对齐** 和 **多 Agent 并发稳定性** 方面取得了显著进展。同时，社区对**会话管理**、**模型供应商支持**以及 **Human-in-the-Loop** 等功能的热切期待，也反映了项目正朝着更加成熟的企业级应用方向演进。

## 2. 版本发布

**无**。过去 24 小时内没有新的版本发布。

## 3. 项目进展

今日合并/关闭了多个重要 PR，项目在多个关键领域迈出了坚实一步：

- **核心框架与 API 合规性**:
    - **[PR #5922]** [已合并] 完善了 Langfuse 可观测性集成，为追踪添加 `user_id`, `session_id` 等信息，并修复了 Trace ID 格式问题。
    - **[PR #6150]** [已关闭] 引入了 `PawApp` SDK 和看板 (Kanban) 应用，为插件生态建设奠定了基础。

- **性能与稳定性**:
    - **[PR #6235]** [已关闭] 显著增强了 ReMe Light 长期记忆的稳定性，包括将索引重建改为显式操作、引入并发写入保护、优化 Markdown 分块等，并升级了 `reme-ai` 库。
    - **[PR #6238]** [待合并] 优化了 MCP 驱动的启动性能，通过并发初始化多个 handler，显著缩短了启用多个 MCP 服务时的启动时间。
    - **[PR #6203]** [待合并] 修复了 Windows 平台上 `tasklist` 检测进程时不设置超时可能导致进程卡住的问题，提升了桌面版的稳定性。
    - **[PR #6151]** [待合并] 重构了后台工具调用机制，通过双截止时间架构修复了多个因时机问题导致的 bug。

- **新功能与特性**:
    - **[PR #6284]** [待合并] 新增了 **QwenPaw Creator** 应用插件，支持脚本到视频的工作流，这是项目在多媒体内容生成领域的重要拓展。
    - **[PR #6271]** [待合并] 提议并提交了将 **AIOnly** 作为内置模型供应商的 PR，这将极大扩展用户可用的模型库。
    - **[PR #6270]** [待合并] 支持用户编辑 Agent 模式，提升了 Agent 配置的灵活性。
    - **[PR #6276]** [待合并] 提出了 **“统一浏览器” (Unified Browser)** 方案，旨在用一个统一的 SDK 支持多种浏览器后端，是浏览器自动化功能的一次重大重构。

## 4. 社区热点

今日讨论最热烈的议题主要围绕着 Agent 的行为一致性与智能化：

- **Hot Issue: [#6257] 多工具调用产生相同思考输出** (13 条评论)
    - **链接**: `agentscope-ai/QwenPaw Issue #6257`
    - **诉求分析**: 此问题揭示了 Agent 在单轮内执行多个工具调用时的一个严重逻辑缺陷：所有的调用共享同一个思考过程。这表明 Agent 无法为每个独立的工具调用进行独立的推理，而是简单地复制粘贴了第一次思考的结果。这直接影响了 Agent 的智能感和任务完成质量，因此获得了大量关注。

- **Hot Feature: [#6283] 自动附加当前时间信息** (2 条评论，发布于 2026-07-21)
    - **链接**: `agentscope-ai/QwenPaw Issue #6283`
    - **诉求分析**: 这是一个极具代表性的用户痛点。当用户重启隔天的对话时，模型会混淆历史日期，导致上下文错乱。提议在每次请求上下文中自动附加当前真实时间，这个“小改动”切中了广大用户的真实需求，能显著提升与 Agent 跨日对话的体验，因此讨论度高。

- **Hot PR: [#6280] 修复推理与工具段落的对齐** (等待人工审查)
    - **链接**: `agentscope-ai/QwenPaw PR #6280`
    - **背后诉求**: 此 PR 旨在修复 #6257 的 Bug。它从根源上解释了问题：AgentScope 2.0 在单条消息中包含多轮推理/工具循环时，格式化程序错误地将第一个思考块复制到了所有后续段落。这个 PR 直接回应了社区最关心的问题，是今日技术讨论的焦点。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在 Agent 行为和本地部署方面，部分已有对应的修复 PR。

| 严重程度 | Issue ID | 标题 | 状态 | 修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| **高** | #6257 | 多工具调用产生相同思考输出 | 开放 | **[#6280]** 等待审核 |
| **高** | #6241 | Agent 重复输出 + `memory_search` 死循环 | 开放 | n/a |
| **高** | #6282 | Reasoning relay 重复第一个思考块 | 开放 | **[#6280]** 关联修复 |
| **中** | #6246 | `_saved_tool_refs` 导致文件名过长崩溃 | 已关闭 | 已修复 |
| **中** | #6255 | 聊天报错 (400 Error) | 已关闭 | 已修复 |
| **中** | #6242 | `use_dimensions` 控制台设置未生效 | 开放 | n/a |
| **中** | #6273 | 任务跟踪与并发语义不统一 | 开放 | n/a |
| **低** | #6288 | 本地模型“下载”失败 (GGUF) | 开放 | **[#6290]** 等待审核 |
| **低** | #6197 | 桌面版在 `nvidia-smi` 挂起时启动卡死 | 开放 | n/a |

## 6. 功能请求与路线图信号

用户提出的新功能需求展现了强烈的**个性化和平台化**诉求：

- **高优先级 (已有/关联 PR 支持)**:
    - **[#6271] / [#6268] 支持 AIOnly 模型供应商**: 社区贡献者已提交完整 PR，极有可能在下一版本被采纳。
    - **[#6274] 新增 `ask_user_question` 工具 (Human-in-the-Loop)**: 该请求设计合理且有广泛的实用场景，可能与官方路线图契合。
    - **[#6285] 更新阿里云 Token 计划模型列表**: 是一个常见但必要的维护性请求。

- **中优先级 (社区呼声高，可能进入下一版本)**:
    - **[#6289] 自定义会话分组** / **[#6287] 会话文件夹支持**: 多个用户同时提出对会话进行自定义组织和管理，这是一个强烈的用户体验改进信号，很可能被纳入 Console 功能规划。
    - **[#6286] 允许禁用或自定义内置工具描述**: 针对 Token 消耗的优化建议，显示用户开始关注模型的精细化管理，是成熟用户的典型需求。

- **其他探索性功能**:
    - **[#6284] QwenPaw Creator 应用**: 项目官方已开始探索插件化内容创作，这是一个重要的路线图信号。
    - **[#6281] Web 控制台适配移动端**: 反映了用户随时随地访问的需求。

## 7. 用户反馈摘要

- **正向反馈**:
    - 社区贡献者 **[Z2Rikka]** 和 **[lalaliat]** 主动提交 PR，希望将 **AIOnly** 和**修复本地模型下载**等能力带入 CoPaw，体现了社区的积极共建精神。
    - 功能请求 [#6287] 和 [#6289] 的用户在提出需求时，表达了对改进会话管理的强烈期望，侧面说明 Core UI 体验得到了用户的深度使用。

- **负面与痛点反馈**:
    - **Agent 行为不可靠** (来自 #6241, #6257, #6282): 用户核心抱怨集中在 Agent 的“降智”行为，如重复输出、死循环、多工具调用缺乏独立推理等，这些问题严重影响了任务执行的可信度。用户 **[z13645719]** 详细描述了问题并与其他 issue 做了对比，体现了用户的专业性。
    - **稳定性问题** (来自 #6197, #6246, #6288): Windows 桌面版启动卡死和下载失败等问题，影响了特定用户群体的基础体验。用户 **[hingeek]** 和 **[rerbin]** 的问题报告非常详细，有助于开发者定位问题。
    - **配置与体验不统一** (来自 #6242, #5688): 不一致的 CSS 前缀 (`ant-` vs `qwenpaw-`) 和遗漏的配置项 (`use_dimensions`) 显示了 UI 开发和功能实现之间存在脱节，需要加强前后端协同。

## 8. 待处理积压

以下为长期未响应或进展缓慢的重要 Issue/PR，建议维护团队关注：

- **[Issue #5688] CSS 选择器前缀不匹配 (`ant-` vs `qwenpaw-`)**
    - **链接**: `agentscope-ai/QwenPaw Issue #5688`
    - **状态**: 开放 (创建于 2026-07-01)
    - **影响**: 可能导致大量 UI 样式不生效，影响用户体验。虽非紧急，但此问题存在时间较长，属于技术债务。
- **[Issue #4873] 同时开两个 subagent 导致主 agent 无限快速轮询**
    - **链接**: `agentscope-ai/QwenPaw Issue #4873`
    - **状态**: 开放 (创建于 2026-06-01)
    - **影响**: 这是一个严重的并发问题，会导致无限轮询，消耗资源且无法在飞书上打断。问题存在超过1个月，虽然复杂，但应被视为高优先级的稳定性 Bug。
- **[PR #5187] 为 Windows 桌面添加 GUI 自动化 (UIA + Tauri)**
    - **链接**: `agentscope-ai/QwenPaw PR #5187`
    - **状态**: 开放 (创建于 2026-06-14)
    - **影响**: 这是一个重量级功能，能极大扩展 CoPaw 在 Windows 上的能力。PR 内容详实，但已超过一个月未合并，可能处于核心团队内部 Review 或重构阶段。建议公开其进展或状态。

---

*数据截止至 2026-07-21 08:00 UTC。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为您生成的 ZeroClaw 项目动态日报。

---

# ZeroClaw 项目动态日报 — 2026-07-21

## 1. 今日速览

今日项目活跃度极高，社区贡献与核心开发并行推进。过去24小时内，**50条PR**与**39条Issue**的更新量表明项目正处于高强度迭代期。核心团队正集中力量推进 **SOP（标准操作流程）控制面**、**持久化内存子系统**以及**安全性加固**三大主线功能。值得注意的是，今日出现了标签和评论格式的CI检查问题，反映了项目在高速开发中对代码质量和规范性的要求。整体来看，项目接近0.9.0里程碑，但Windows平台兼容性问题与部分S1级Bug仍需重点关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日重要合并/关闭的PR与Issue，标志着项目在以下方面取得了关键进展：

- **SOP 控制面与审批流程**：合并了一系列关于SOP的增强功能，包括：
    - **审批代理** (PR [#8880]): 引入了基于群组成员和法定人数的审批机制，为流程中的关键决策点增加了安全性和协作能力。
    - **准入控制** (PR [#8848]): 实现了对SOP执行槽位的精细化控制，支持并行、持有、合并、丢弃等策略，并取消了HITL（人工介入）对并发的阻塞。
    - **确定性管道** (PR [#8979]): 添加了用于审批门控的确定性SOP管道基础模块，如 `llm.generate` 和 `forge.comment`，使SOP流程更加可预测和可靠。
- **持久化内存子系统**：多个关于**持久化内存**的PR正在推进以补齐与成熟竞品的差距。今日关闭并合并了多项相关PR，功能包括：
    - **内容扫描** (PR [#8984]): 在内存写入和召回边界增加了内容安全筛查层，防止敏感或恶意内容写入内存。
    - **检索缓存** (PR [#8897]): 为Agent的内存检索增加了可选缓存装饰器，以提升跨会话记忆的访问效率。
    - **类型化事实提取** (PR [#8900]): 增加了内存类型分类和门控的类型化事实提取功能，为更智能的记忆管理奠定基础。
- **安全性加固**：
    - **技能沙箱** (PR [#9084]): 为第三方技能的安装增加了安全审查、收据、验证和沙箱门控，显著提升了供应链安全性。
    - **SSRF防护** (PR [#8713]): 为 `file_download` 工具增加了 `allowed_private_hosts` 白名单机制，修复了SSRF安全漏洞的最后一个已知攻击面。

整体来看，项目在SOP和内存两大主要功能线上均有实质性合并，向“功能完备”的目标迈进了坚实一步。

## 4. 社区热点

今日社区讨论的焦点集中在以下议题：

- **SOP 流程与标签清理 (RFC)** ([Issue #6808]): 共14条评论。这项关于工作流、看板自动化和标签清理的RFC仍在持续讨论中。社区和维护者正在就如何通过SOP机制优化开发工作流进行深入探讨，显示出社区对项目管理规范化的高度关注。
- **Windows 平台测试失败** ([Issue #7462]): 共10条评论，获得7个👍。这是一个持续存在的痛点，大量Unix命令和路径语义问题导致Windows上有74个测试失败。用户 `NiuBlibing` 详细报告了问题，引发了社区对跨平台支持现状的广泛讨论。
- **Agent间（A2A）协议支持** ([Issue #3566]): 共9条评论，获得7个👍。作为长期需求，本次更新中提到该项目被关联了多个PR（如SOP审批），表明核心团队可能正在探索将A2A协议与SOP或网关组件集成，这是一个重要的架构信号。

## 5. Bug 与稳定性

今日报告了多个Bug，按严重程度排列如下：

- **[S0 - 数据丢失/安全风险]**
    - **Cron任务工作目录错误** ([Issue #9206]): 定时任务执行时，工作目录偶发性地被解析为根目录 `/`，可能导致数据泄露或错误操作。**尚无修复PR**。
- **[S1 - 工作流受阻]**
    - **Landlock沙箱自锁** ([Issue #9204]): 执行shell命令时，Landlock沙箱会将ZeroClaw自身也锁定其中，导致SQLite访问等问题。**尚无修复PR**。
    - **`web_fetch` 返回乱码** ([Issue #9207]): 对于gzip等压缩响应，`web_fetch` 工具返回垃圾数据，导致Agent无法解析网页内容。**尚无修复PR**。
    - **`shared_budget` 并发问题** ([Issue #9192]): 存在TOCTOU（检查时间与使用时间）竞争条件，可能导致AtomicUsize回绕或Mutex下的panic。**尚无修复PR，但有高活跃度讨论**。
    - **评论卫生CI检查失败** ([Issue #9216]): 主分支的代码注释中包含Issue引用，导致CI门控失败，阻塞了合并。**已有修复PR** (PR [#9230])。
- **[S2 - 行为降级]**
    - **历史记录静默截断** ([Issue #8837]): 在禁用历史修剪功能的情况下，Agent对话上下文仍然会静默丢失。**已于今日修复并关闭**。
- **[S3 - 小问题]**
    - **ZeroCode桌面命令失效** ([Issue #9202]): 桌面命令使用了失效的下载链接，且无法检测已安装的AppImage。**尚无修复PR**。
    - **Discord输入指示器卡住** ([Issue #9198]): Daemon重启后，Discord上的“正在输入…”状态会永久显示。**尚无修复PR**。

## 6. 功能请求与路线图信号

今日涌现的新功能请求主要围绕 **Agent评估（Eval）** 和 **ACP协议扩展**：

- **Agent评估仪表盘与趋势追踪** ([Issue #9228]): 用户 `IftekharUddin` 提出，在已有评估框架上，应增加一个长期趋势追踪仪表盘，用于观测能力套件随版本迭代的通过率变化。这反映了社区对可量化、可追踪的Agent能力评估的需求。
- **LLM评分校准工具** ([Issue #9227]): 同样由 `IftekharUddin` 提出，要求提供工具来生成LLM-as-judge评分器的校准文件，以提高评估结果的可靠性。
- **内存植入与副作用评分** ([Issue #9226]): 在评估时，希望能够预先植入特定记忆，并验证Agent的内存侧效果，这一需求指向了更精细的Agent行为验证。

结合已有的PR，这些需求很可能会被纳入下一版本。特别是，**`zeroclaw eval`** 命令（[Issue #7065]）的实现正在推进，而这些**跟进项**（Follow-up）明确列出了其后续里程碑。同时，**ACP嵌入式资源**功能 ([Issue #9178]) 也暗示了ZeroClaw正在积极对齐行业标准协议。

## 7. 用户反馈摘要

从今日的Issue和评论中，可以提炼出以下用户真实反馈：

- **痛点**:
    - **Windows支持不足** 是最大的痛点，多个Issues都在反映环境变量、路径分隔符、编码转换等问题，严重影响了Windows用户的开发体验。
    - **上下文丢失不可预测** ([Issue #8837])：用户 “susyabashti” 表达了困惑和沮丧，因为Agent会在对话中段毫无征兆地“失忆”，导致对话崩溃。该Bug虽然已修复，但暴露了运行时状态管理的隐蔽性问题。
    - **工具行为不一致** ([Issue #9207]): 用户发现 `web_fetch` 工具无法正确处理压缩网页，导致获取到的内容无法使用，这直接影响了Agent的信息获取能力，是严重的功能缺陷。
- **满意/不满意**:
    - **对SOP特性期待很高**：从[SOP RFC] (Issue #6808) 的持续讨论热度来看，社区对ZeroClaw引入自动化工作流规范表示欢迎，认为是提升Agent可靠性和可管理性的关键。
    - **对评估框架“只给工具不给视图”不满意**: 用户 `IftekharUddin` 明确表示，评估框架虽然能输出数据，但缺少直观的仪表盘来观察长期趋势，这阻碍了开发者通过迭代优化Agent性能。

## 8. 待处理积压

以下是一些长期未响应或卡顿的重要Issue和PR，需要维护者重点关注：

- **A2A协议支持** ([Issue #3566], 创建于2026-03-15): 社区呼声极高，但进度缓慢。虽然近期有关联PR，但核心实现仍未落地。建议维护者在路线图中明确其优先级。
- **Agent评估框架** ([Issue #7065], 创建于2026-06-01): 这是一个大型Tracker，虽然子任务正在快速推进，但其核心主干仍未合并。新提出的跟进项（[9226], [9227], [9228]）表明后续工作量巨大，建议加快核心功能的合并。
- **第三方技能安装安全门控** (PR [#9084]): 这是一个XL尺寸的PR，涉及重大安全特性，但目前标记为 `needs-author-action`（需要作者操作）。应确保作者及时响应审查意见，避免该重要安全补丁被长时间搁置。

[Issue #6808]: https://github.com/zeroclaw-labs/zeroclaw/issues/6808
[Issue #7462]: https://github.com/zeroclaw-labs/zeroclaw/issues/7462
[Issue #3566]: https://github.com/zeroclaw-labs/zeroclaw/issues/3566
[Issue #9206]: https://github.com/zeroclaw-labs/zeroclaw/issues/9206
[Issue #9204]: https://github.com/zeroclaw-labs/zeroclaw/issues/9204
[Issue #9207]: https://github.com/zeroclaw-labs/zeroclaw/issues/9207
[Issue #9192]: https://github.com/zeroclaw-labs/zeroclaw/issues/9192
[Issue #9216]: https://github.com/zeroclaw-labs/zeroclaw/issues/9216
[Issue #8837]: https://github.com/zeroclaw-labs/zeroclaw/issues/8837
[Issue #9202]: https://github.com/zeroclaw-labs/zeroclaw/issues/9202
[Issue #9198]: https://github.com/zeroclaw-labs/zeroclaw/issues/9198
[Issue #9228]: https://github.com/zeroclaw-labs/zeroclaw/issues/9228
[Issue #9227]: https://github.com/zeroclaw-labs/zeroclaw/issues/9227
[Issue #9226]: https://github.com/zeroclaw-labs/zeroclaw/issues/9226
[Issue #7065]: https://github.com/zeroclaw-labs/zeroclaw/issues/7065
[Issue #9178]: https://github.com/zeroclaw-labs/zeroclaw/issues/9178
[PR #8880]: https://github.com/zeroclaw-labs/zeroclaw/pull/8880
[PR #8848]: https://github.com/zeroclaw-labs/zeroclaw/pull/8848
[PR #8979]: https://github.com/zeroclaw-labs/zeroclaw/pull/8979
[PR #8984]: https://github.com/zeroclaw-labs/zeroclaw/pull/8984
[PR #8897]: https://github.com/zeroclaw-labs/zeroclaw/pull/8897
[PR #8900]: https://github.com/zeroclaw-labs/zeroclaw/pull/8900
[PR #9084]: https://github.com/zeroclaw-labs/zeroclaw/pull/9084
[PR #8713]: https://github.com/zeroclaw-labs/zeroclaw/pull/8713
[PR #9230]: https://github.com/zeroclaw-labs/zeroclaw/pull/9230

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*