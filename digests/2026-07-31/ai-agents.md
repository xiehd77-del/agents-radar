# OpenClaw 生态日报 2026-07-31

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-31 02:56 UTC

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

好的，我是OpenClaw开源项目分析师。根据您提供的GitHub数据，我为您生成2026年7月31日的项目动态日报。

---

# 🦞 OpenClaw 开源项目动态日报 | 2026-07-31

## 1. 今日速览

今日OpenClaw项目面临"高活跃、高压力的积压消化期"。过去24小时内，Issue与PR更新均达500条，但**新版本发布数为零**，核心团队显然在消化存量而非推送新功能。最值得关注的是，**多个P0/P1级且标记为"diamond lobster"（高优先级）的严重Bug（如网关内存泄漏#91588）已存在数月，至今仍处于"待维护者决策"状态，未有关联修复PR**，这反映出项目在快速迭代后可能面临严重的稳定性债与维护瓶颈。与此同时，PR队列中出现了多个针对"会话状态"和"安全边界"的高风险合并，预示着未来兼容性可能存在变数。社区方面，开发者的诉求高度集中于**会话状态管理、数据安全与多智能体协作的可靠性**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日没有合并主分支的PR记录，项目进展主要体现在高质量的修复与功能PR提交上，但合并停滞是主要瓶颈：

- **稳定性修复 (提交)**: PR #116509 修复了 `edit` 工具在模糊匹配时可能意外重写非目标字节的数据丢失Bug；PR #111528 修复了在工具结果繁重的回合中，误触发上下文溢出恢复导致先前工具结果被截断的问题。
- **功能增强 (提交)**: PR #114631 为 custodian chat 增加了丰富的设置控件支持；PR #116188 提议在网关的 `hello-ok` 握手阶段广播附件大小限制，提升客户端兼容性。
- **安全加固 (提交)**: PR #116280 增强了安全扫描器对 `child_process` 调用的检测能力，覆盖了通过别名和计算成员调用的隐藏形式。
- **基础设施 (提交)**: PR #116631 和 #116634 移除了过时及冗余的测试用例，以提高CI效率。

**结论**：项目在修复和功能开发上仍具活力，但核心问题在于**合并流程不畅**，今日大量"待合并"PR（410条）的积压是项目健康度的主要风险。

## 4. 社区热点

今日讨论最热烈的Issue揭示了社区的核心痛点——**稳定性和会话状态管理**：

1.  **Issue #25592 - 工具调用间的内部文本被发送到消息渠道** (评论: 39 🟰 最高)
    - **诉求**: 用户强烈要求将智能体的内部处理过程（如错误处理、确认信息）与最终输出隔离，避免向Slack等渠道发送碎片化消息，这是影响用户体验的关键问题。
    - **链接**: [Issue #25592](https://github.com/openclaw/openclaw/issues/25592)

2.  **Issue #91588 - 网关内存泄漏，导致反复OOM崩溃 (P0)** (评论: 22)
    - **诉求**: 用户希望解决网关进程RSS无限制增长直至被系统杀死的问题，这是当前影响生产部署的最严重稳定性隐患。
    - **链接**: [Issue #91588](https://github.com/openclaw/openclaw/issues/91588)

3.  **Issue #91009 - Codex预工具钩子导致的CPU峰值与网关RPC停滞 (P1)** (评论: 18)
    - **诉求**: 开发者报告在与Codex集成时，原生钩子进程消耗大量CPU并导致网关响应停滞，严重影响开发效率。
    - **链接**: [Issue #91009](https://github.com/openclaw/openclaw/issues/91009)

4.  **Feature Request #39604 - 允许Web Fetch访问私有网络 (P2)** (👍: 12)
    - **诉求**: 该功能请求获得大量点赞，表明开发者有在沙盒环境内访问内部服务的明确需求，当前默认的阻断策略限制了其应用场景。
    - **链接**: [Issue #39604](https://github.com/openclaw/openclaw/issues/39604)

## 5. Bug 与稳定性

今日报告的Bug中，**会话状态（session-state）** 和 **数据丢失（data-loss / message-loss）** 是高频标签，以下是按严重程度排列的关键问题：

| 严重程度 | Issue | 标题 | 关键影响 | 修复状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (严重)** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏导致OOM崩溃 | 服务宕机、启动循环 | ❌ 无PR，积压待审 |
| **P1 (高)** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex钩子CPU占用高，网关停滞 | 性能严重下降 | ❌ 无PR，积压待审 |
| **P1 (高)** | [#43747](https://github.com/openclaw/openclaw/issues/43747) | 内存管理混乱 | 行为不一致，数据分叉 | ❌ 无PR，积压待审 |
| **P1 (高)** | [#69118](https://github.com/openclaw/openclaw/issues/69118) | Claude CLI在群组频道中每次对话都被重置 | 会话丢失、体验割裂 | ❌ 无PR，积压待审 |
| **P1 (高)** | [#29387](https://github.com/openclaw/openclaw/issues/29387) | agentDir中的Bootstrap文件被静默忽略 | 智能体人格设定失效 | ❌ 无PR，积压待审 |
| **P1 (高)** | [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write工具无追加模式，Cron会话覆盖文件 | **数据丢失** | ❌ 无PR，积压待审 |
| **P1 (中)** | [#116509 (PR)](https://github.com/openclaw/openclaw/pull/116509) | edit工具可能导致无关字节被重写 | 数据损坏 | ✅ 已提交修复PR，待合并 |

**结论**：多个存在数月的P0/P1级Bug仍无修复PR，是当前项目最大的健康度风险。新提交的修复PR（如#116509）虽及时，但合并进度缓慢，导致用户无法及时获得修复。

## 6. 功能请求与路线图信号

社区对功能的需求呈现出从"能用"向"好用"过渡的趋势：

- **高热度 (近期可能纳入)**:
    - **#39604**: 允许`web_fetch`访问私有网络 (👍12)。这是一个呼声很高的实用性需求，可能会被优先考虑。
    - **#42840**: 为Control UI增加MathJax/LaTeX支持 (👍10)。面向技术用户的基础体验优化，实现成本相对可控。
    - **#80213**: 为Skill增加作者自定义的安装/更新钩子。这能显著提升Skill生态的灵活性和自动化能力。
- **中热度 (远景规划)**:
    - **#22438**: 分级Bootstrap文件加载以控制上下文。这将是针对高级用户的大版本特性。
    - **#42026**: 分布式Agent运行时。这将是架构级别的重大变革，将彻底解决单点故障问题。
- **后台正在推进的PR暗示了路线图方向**:
    - **数据安全与隐私**: PR #116281 强化发送者身份认证，PR #116625 修复认证移除后工具缓存未清除的问题，表明安全是当前开发的重点。
    - **多智能体与状态管理**: PR #114388 的激进重构（移除存储的默认代理）与 PR #106364 的修复子代理延续状态，显示了项目在处理多智能体复杂状态时的坚定方向。

## 7. 用户反馈摘要

- **对稳定性不满**: "网关进程内存从350MB涨到15.5GB，然后被杀死，这让人无法接受。" —— 来自 Issue #91588。
- **对会话状态混乱不满**: "我的同事和我的记忆文件存储方式完全不同，这让我们如何协作？" —— 来自 Issue #43747。
- **对数据丢失风险担忧**: "独立的Cron任务会静默覆盖我的共享记忆文件，这太危险了。" —— 来自 Issue #40001。
- **呼声较高的细节优化**: "希望在Control UI里能直接看到和编辑 MEMORY.md 文件。" —— 来自 Issue #46809。
- **对内部信息泄漏的抱怨**: "智能体的处理过程（比如内部错误）不应该直接发到我们的Slack频道里。" —— 来自 Issue #25592。

## 8. 待处理积压

以下为长期未响应或卡在维护者审核阶段的高优问题，需要核心团队重点关注：

- **严重Bug积压 (均超过4个月，优先级P0/P1，无修复PR)**:
    - [#91588](https://github.com/openclaw/openclaw/issues/91588) - 网关内存泄漏 (P0)
    - [#91009](https://github.com/openclaw/openclaw/issues/91009) - Codex集成CPU问题 (P1)
    - [#29387](https://github.com/openclaw/openclaw/issues/29387) - 配置文件不生效 (P1)
    - [#40001](https://github.com/openclaw/openclaw/issues/40001) - Write工具导致数据丢失 (P1)
- **激进重构PR待决策**:
    - [#114388](https://github.com/openclaw/openclaw/pull/114388) - 移除存储的默认代理。该PR被标记为 `breaking change` ，影响面横跨多平台，需要维护者明确决策和公示迁移路径。
- **自动化工具卡在等待**:
    - [#75403](https://github.com/openclaw/openclaw/pull/75403) - ClawSweeper机器人提交的关于"打字指示器"的修复，自5月起就处于"等待作者"状态，需要人工介入处理。

---

**分析师建议**：OpenClaw项目当前处于一个关键的十字路口。虽然新功能和新想法层出不穷，但**严重的稳定性问题（内存泄漏、数据丢失）和PR合并积压正在消耗社区信任**。建议项目维护者近期将工作重心从开发新功能转移到**修复已提交的P0/P1级Bug、清理积压的PR队列**上来，并对 `#114388` 这类破坏性重构给出明确的时间表，以稳定军心。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-07-31  
**分析范围**：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、IronClaw、LobsterAI、Moltis、CoPaw、ZeptoClaw、ZeroClaw（另含 NullClaw、TinyClaw 无活动）

---

## 1. 生态全景

个人 AI 助手开源生态正处于**规模爆发与稳定性阵痛并存**的关键阶段。以 OpenClaw 为代表的第一梯队项目日 PR 更新量已突破 500 条，维持极高的迭代速度，但与此同时，P0/P1 级严重 Bug（内存泄漏、数据丢失）的修复积压正成为多项目共同面临的瓶颈。生态整体呈现三大特征：**一是安全与隐私成为最高优先级共识**，ZeroClaw 单日报告 3 个安全漏洞并当日提交修复、ZeptoClaw 聚焦凭据泄露修复、IronClaw 报告跨用户记忆泄漏，均表明安全已从"附加项"变为"生命线"；**二是会话状态管理与多智能体协作是当前最集中的技术攻关方向**，OpenClaw、NanoBot、ZeroClaw 均在此方向有架构级改动在推进；**三是生态已开始分化出差异化定位**，既有主打全功能替代的 OpenClaw/Hermes，也有聚焦轻量化的 NanoBot/PicoClaw，以及面向企业级隔离的 LobsterAI/IronClaw，市场分层初步形成。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 | 阶段判断 |
|------|------------|---------|---------|-----------|---------|
| **OpenClaw** | 500 | 500 | 无 | ⚠️ 危机 | 高活跃但 P0 积压严重，合并停滞 |
| **Hermes Agent** | 50 | 50 | v0.19.1 ✅ | 🟢 健康 | 高输出，快速迭代，交付力强 |
| **ZeroClaw** | 14 | 50 | 无 | 🟢 健康 | 密集评审期，安全优先级高 |
| **CoPaw** | 20 (含关闭) | 43 | 无 | 🟡 关注 | 高合并率但 v2.0 性能回退悬而未决 |
| **IronClaw** | 38 | 50 | 无 | 🟢 健康 | 架构重构推进期，双线并行 |
| **NanoBot** | 7 | 48 | 无 | 🟢 健康 | 合并节奏健康，3 主线推进 |
| **LobsterAI** | 0 | 9 (7合并) | 2026.7.29 ✅ | 🟢 健康 | 稳定迭代，核心维护者主导 |
| **PicoClaw** | 7 | 17 | 无 | 🟡 关注 | 稳定但有积压趋势，OAuth 需求重复 |
| **NanoClaw** | 2 | 15 | 无 | 🟡 关注 | 安全硬化期，核心 Bug 待修复 |
| **Moltis** | 2 | 4 | 无 | 🟢 健康 | 中低活跃，安全加固推进中 |
| **ZeptoClaw** | 0 | 1 | 无 | 🟡 关注 | 稳定维护期，安全 PR 待合并 |
| **NullClaw / TinyClaw** | 0 | 0 | 无 | ⚪ 休眠 | 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是生态的"规模标杆"与"稳定性反面教材"的双重代表。**

- **优势**：社区规模远超同类（日 Issue/PR 更新 500 条级别），功能覆盖面最广，生态配套（渠道、工具、Skill 生态）最为完整；其"网关-运行时-工具"的架构模式已成为事实上的参考范式，多个项目（NanoClaw、PicoClaw、CoPaw）在命名和架构上均有沿袭。
- **技术路线差异**：OpenClaw 强调**多平台入口统一 + 网关中转**的重架构，而 NanoBot 聚焦轻量单二进制、Hermes 强调桌面优先 + 多提供商适配。OpenClaw 的复杂度和灵活性使其成为"全家桶"选择，但同时也导致 Bug 修复周期拉长——P0 级网关内存泄漏（#91588）已积压数月。
- **社区规模对比**：以 PR 更新量估算，OpenClaw 日活贡献者规模约为 Hermes Agent 的 10 倍、IronClaw 的 10 倍，但其**合并率（PR 合并/提交比例）显著偏低**（今日 0 合并），而 Hermes（47/50 待合并但发布千 PR 级版本）、CoPaw（21/43 合并）等项目的合并效率明显更高。

**关键结论**：OpenClaw 是生态的"流量入口"，但其稳定性债正在将用户推向 Hermes、IronClaw 等承接项目。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **会话状态管理与记忆隔离** | OpenClaw、NanoBot、ZeroClaw、IronClaw、CoPaw | 会话历史与长期记忆分离（ZeroClaw #9048）；会话状态混乱（OpenClaw #43747、NanoBot #5184 临时会话、IronClaw #6900 跨用户记忆泄漏、CoPaw #6555 记忆丢失） |
| **数据安全与隐私** | OpenClaw、ZeroClaw、ZeptoClaw、IronClaw、LobsterAI | 凭据不泄露给子进程（ZeptoClaw #645）；webhook 签名验证必须失败关闭（ZeroClaw #9565）；跨用户工作区隔离（IronClaw #6866）；附件路径穿越修复（LobsterAI #2389） |
| **多智能体协作与子代理** | OpenClaw、NanoBot、CoPaw | 子代理延续状态（OpenClaw #106364）；spawn_subagent 参数修复（CoPaw #6588）；默认代理移除（OpenClaw #114388） |
| **WebUI 体验升级** | NanoBot、OpenClaw、IronClaw、CoPaw | 临时会话、侧边栏统一（NanoBot #5181/#5184）；文件预览、分页修复（IronClaw #6903/#6916）；长输出渲染冻结（CoPaw #6589） |
| **模型提供商适配** | Hermes、ZeroClaw、PicoClaw、LobsterAI | 自定义 base_url（Hermes #54011）；Nova 2 缓存兼容（ZeroClaw #8943）；模型 fallback 链（PicoClaw #3200）；Kimi K3 接入（LobsterAI #2381） |
| **可观测性与工具链** | ZeroClaw、Moltis、IronClaw | OTel 跨回合会话关联（ZeroClaw #8933）；Langfuse 导出（Moltis #1174）；错误可恢复性 Epic（IronClaw #6284） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
|------|---------|---------|---------|
| **OpenClaw** | 全功能聚合：多渠道、多工具、Skill 生态 | 技术发烧友、自托管重度用户 | 网关 + 运行时重架构，功能全但复杂度高 |
| **Hermes Agent** | 桌面优先、多提供商适配、快速迭代 | 开发者、桌面端重度用户 | 桌面应用 + 插件系统，v0.19 已千 PR 级稳定 |
| **NanoBot** | 轻量、单二进制、消息渠道优先 | 轻量部署、消息 Bot 场景 | 单一二进制 + SQLite 存储（迁移中），极简设计 |
| **ZeroClaw** | 安全默认、企业级、架构前瞻 | 安全敏感企业、自托管 | 高度重视安全合规，RFC 驱动架构演进 |
| **IronClaw** | 架构重构、技能系统精准化、多用户隔离 | 企业级多租户、SaaS 部署 | 目标架构分阶段演进（WS0 已启动） |
| **CoPaw** | 计算机使用（Computer Use）、Creator 创作 | 自动化、创作场景 | 原生桌面自动化（Windows/macOS）、沙箱隔离 |
| **PicoClaw** | 极简、多渠道、低资源占用 | 低配硬件、嵌入式爱好者 | Go 实现、$10 硬件可运行（<10MB RAM） |
| **LobsterAI** | 桌面应用、企业账号隔离、UI 打磨 | 桌面用户、企业多账号场景 | Electron 类桌面应用、NSIS 安装器 |
| **NanoClaw** | 容器化、安全硬化、注册表式技能 | DevOps、容器部署用户 | 容器镜像 + 签名验证 + 技能注册表 |
| **Moltis** | 安全加固、可观测性、多通道交互 | 中小团队 | 独立 Vault、OTLP 导出、按账号 operators 权限隔离 |
| **ZeptoClaw** | 运行时安全、进程隔离 | 多租户/不可信环境 | 子进程环境清理、进程树生命周期管理 |

---

## 6. 社区热度与成熟度

### 第一梯队：高活跃 + 快速迭代（日 PR 50+）
- **Hermes Agent**：发布 v0.19.1（含千 PR 级整合），高输出且交付力强，处于功能扩张期。
- **ZeroClaw**：密集评审 + 安全紧急修复，处于架构讨论与安全加固并行的"爬坡期"。
- **IronClaw**：架构重构系统化推进中，技能系统精准化与多用户隔离是当前焦点。

### 第二梯队：中等活跃 + 质量巩固（日 PR 15-50）
- **NanoBot**：合并节奏健康，WebUI/存储/Telegram 三线推进，处于"体验打磨期"。
- **CoPaw**：合并效率高但 v2.0 性能回退影响声誉，处于"稳定性修复期"。
- **OpenClaw**：活跃度最高但合并停滞，处于"积压消化期"——需警惕社区信心流失。

### 第三梯队：稳定维护 / 低活跃（日 PR < 15）
- **LobsterAI**：核心维护者主导，节奏平稳，处于"精雕细琢期"。
- **PicoClaw / NanoClaw / Moltis / ZeptoClaw**：功能性 PR 在审，无显著风险但亦无突破性进展，处于"蓄力期"。
- **NullClaw / TinyClaw**：完全休眠，可能已停止维护。

---

## 7. 值得关注的趋势信号

### 信号一：安全从"功能"变为"底线"，失败关闭（fail-closed）成为共识
ZeroClaw 同日报告 S0 级 webhook 验证缺失并当日提交修复、ZeptoClaw 清除子进程凭据泄露、IronClaw 跨用户记忆泄漏被标为 P0——**生态正从"默认信任"转向"默认不信任"**。开发者的启示：所有外部输入（webhook、子进程、用户消息）都应默认视为不可信，安全验证缺失即视为漏洞，而非"配置问题"。

### 信号二：会话状态管理是"最难啃的骨头"
从 OpenClaw 的 #43747（会话状态混乱）、ZeroClaw 的 RFC #9048（会话历史与记忆分离）、到 IronClaw 的 #6900（跨用户记忆泄漏），**多个项目不约而同将"会话状态的一致性、隔离性与持久化"列为最高优先级技术债务**。NanoBot 率先启动 JSONL→SQLite 迁移（#5173），可能成为状态管理的参考范式。趋势判断：会话存储的**结构化数据库化**和**多租户隔离**将是接下来 3-6 个月的主要战场。

### 信号三：OAuth 2.1 与认证标准化成为生态互通的"卡脖子"问题
PicoClaw 的 OAuth 需求在 24 小时内以重复 Issue 形式重现（#2546 关闭 → #3302 新开），Hermes 的按凭据 base_url 需求（#54011）、IronClaw 的 keyless cosign 签名（#6905），共同指向**认证与授权的标准化**需求。启示：任何面向服务端/网关定位的项目，OAuth 支持应尽早纳入路线图。

### 信号四：WebUI 从"可选界面"变为"竞争力核心"
NanoBot 三天内连续合并/提交 3 个 WebUI 重构 PR、IronClaw 集中报告 5 个前端 Bug、CoPaw 长输出导致 UI 冻结——**WebUI 体验正在成为用户选择助手的重要考量**。轻量部署 + 完整可用的 WebUI 将是一体化助手的新基线。

### 信号五：本地小模型与低资源场景成为新增长点
ZeroClaw 提出本地小模型运行时 profile（#5287）、PicoClaw 在 $10 硬件上运行、NanoClaw 将 Vercel CLI 从默认镜像移除以减小体积——**"轻量化 + 本地优先"正在从极客玩具变为正式产品方向**。信号启示：面向隐私敏感或个人开发者，本地模型 + 低资源占用是差异化突破口。

### 信号六：架构级重构进入"执行期"
IronClaw 目标架构从决策记录（#6918）走向 10 个拆分工作流（#6919-#6927）、ZeroClaw 的 5 个 RFC 进入 maintainer review、NanoBot 的 SQLite 迁移进入审查——**生态头部项目正集体从"功能堆积"转向"架构治理"**。这是生态成熟的标志，但也意味着短期内可能伴随兼容性波动，下游开发者需关注迁移指南。

---

## 分析师总结

当前生态正处于**从"快速增长"到"精细化运营"的转折点**。OpenClaw 的积压问题、IronClaw 的架构重构、ZeroClaw 的安全优先，各自代表了不同的应对策略。对技术决策者的建议：**优先选择合并节奏健康、安全响应迅速、会话状态管理有清晰路线的项目（如 Hermes、ZeroClaw、NanoBot）**；对开发者贡献者：**可重点关注 ZeroClaw 的安全修复、NanoBot 的 WebUI 重构、PicoClaw 的 OAuth 实现等明确信号方向**。生态的下一步分化将取决于谁能率先解决"稳定性债"与"状态管理"这两大共性难题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：** 2026-07-31  
**数据窗口：** 2026-07-30 ~ 2026-07-31（部分 Issue/PR 追踪至更早创建日期）  
**数据来源：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库


## 1. 今日速览

NanoBot 项目今日保持高度活跃，GitHub 数据呈现 "**中等 Issue 流入 + 高 PR 吞吐 + 主线功能推进**" 的态势。过去 24 小时新增/活跃 Issue 7 条（其中 5 条新开，2 条关闭），PR 更新达 48 条（待合并 19 条，已合并/关闭 29 条），合并率约 60%，说明维护团队响应迅速且合并节奏健康。今日无新版本发布，但 **WebUI 重构、会话存储 SQLite 迁移、Telegram 稳定性修复** 三条主线 PR 密集推进，且各自关联了对应的 Bug Issue，形成 "报告-修复-合并" 的闭环生态。值得关注的风险信号是：多个 PR 被标记为 `[conflict]`（存在合并冲突），以及 1 个存在 37 天的 `[bug]` Issue 仍未获官方回复。

**活跃度评估：高**（🔥 PR 48 条/日 属于相当活跃的水平，Issue 响应速度中上）。


## 2. 版本发布

**无新版本发布。** 上次发布情况未知，今日无 Release 动态。


## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 标题 | 类型 | 关联 Issue | 状态 |
|----|------|------|-----------|------|
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | feat: preserve Responses reasoning state and compact context | 功能增强 | - | ✅ 已合并 |
| [#5181](https://github.com/HKUDS/nanobot/pull/5181) | feat(webui): add persistent Quick Chat | WebUI 功能 | - | ✅ 已合并 |
| [#5182](https://github.com/HKUDS/nanobot/pull/5182) | refactor(webui): reuse one sidebar selection highlight | WebUI 重构 | - | ✅ 已合并 |
| [#5136](https://github.com/HKUDS/nanobot/pull/5136) | fix(agent): route finish_reason='length' with blank content to length recovery | Bug 修复 | fixes [#5133](https://github.com/HKUDS/nanobot/issues/5185) | ✅ 已合并 |
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | fix(ci): stabilize and speed up CI | CI/CD 改进 | - | ✅ 已合并 |

### 关键解读

- **WebUI 体验升级落地：** [#5181](https://github.com/HKUDS/nanobot/pull/5181) 和 [#5182](https://github.com/HKUDS/nanobot/pull/5182) 相继合并，为 WebUI 增加了 "Quick Chat" 常驻入口，并统一了侧边栏高亮逻辑。尤其 [#5182](https://github.com/HKUDS/nanobot/pull/5182) 是高频率重构的铺垫——将选中状态抽取为共享逻辑，为后续 #5184（Temporary Chat 临时会话）铺平道路（该 PR 目前仍开放中）。
- **Responses API 深度适配：** [#5172](https://github.com/HKUDS/nanobot/pull/5172) 采用了 OpenAI ARC-AGI-3 报告中提到的 Responses API 能力——保留完整的不透明输出项链（含加密推理），并支持上下文压缩。这标志着 NanoBot 在模型能力适配上的前沿性。
- **`finish_reason='length'` 恢复路径修复：**[#5136](https://github.com/HKUDS/nanobot/pull/5136) 解决了当 LLM 在工具调用时耗尽输出预算、文本为空时的错误路由问题，避免无效重试，直接提升了长工具链场景的稳定性。
- **CI 提速与稳定性：**[#5145](https://github.com/HKUDS/nanobot/pull/5145) 重构了 CI，用 stdin 握手替代定时 exec 测试，批量安装依赖，有望显著缩短 CI 耗时。

### 当前积压的重要开放 PR

| PR | 标题 | 说明 |
|----|------|------|
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | feat(session): migrate session storage from JSONL to SQLite | **大型架构变更。** 将运行时会话存储从 JSONL 迁移至 SQLite，首启时事务性导入旧数据，并保留 JSONL 作为回滚备份。如合并，将影响所有使用会话功能的用户与插件。 |
| [#5183](https://github.com/HKUDS/nanobot/pull/5183) | fix(cron): preserve manual run completion state | 修复手动触发 Cron 任务时完成状态丢失的问题，保护实时 cron 存储。 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | feat(webui): add Quick Chat and Temporal Chat | 在 #5181/#5182 基础上的扩展，新增 **临时会话**（仅内存、不落盘），呼应隐私需求。 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram): recover from silently stalled polling | 针对 [#5171](https://github.com/HKUDS/nanobot/issues/5171) 的修复方案。 |

**总体判断：** 项目正从三个方向同时发力——WebUI 交互重构、后端存储架构升级（JSONL→SQLite）、模型能力适配（Responses API），整体推进速度较快，但 #5173 的合并将是一个需要关注迁移成本的关键节点。


## 4. 社区热点

### 讨论最热烈的话题

**#5185 - "Nanobot returning tool calls code in responses"**（[链接](https://github.com/HKUDS/nanobot/issues/5185)，1 条评论，创建于 07-30）

> 用户报告模型突然开始在回复中**直接输出工具调用的代码**（附截图），而非执行工具。创建者本人也表示 "No idea w..."（无法复现步骤）。

**分析：**
- **诉求核心：** 这是一起 "回归性" 功能故障——之前正常，突然异常，且用户无法提供复现步骤，说明可能是环境相关（模型版本切换、上下文污染或提示词注入）而非代码逻辑变更。
- **热度评估：** 评论仅 1 条，尚处早期。但此类问题影响面大（所有使用工具调用的用户都可能遇到），值得维护者优先排查。**猜测与 #5133/#5136 的 `finish_reason='length'` 处理路径相关**（该路径在 7 月 28 日才修复），或与模型供应商端行为变化有关。

### 其他值得关注的讨论

| Issue/PR | 讨论点 |
|----------|--------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) (3 评论) | 用户报告无法通过 WhatsApp 发送音频文件，日志截断显示 `ffmpeg WARNING`，初步指向 ffmpeg 转码环节。 |
| [#4791](https://github.com/HKUDS/nanobot/issues/4791) (安全, 已关闭) | **DoS 安全报告：** 缺少频道级消息速率限制，任何已配对用户可无限发送消息消耗 LLM Token。该 Issue 在 24 天内关闭，但未看到对应修复 PR 关联，需确认是 "Won't fix" 还是已在其他 PR 中静默修复。 |


## 5. Bug 与稳定性

> 按严重程度排序，标注修复状态。

| 严重度 | Issue | 问题描述 | 修复状态 |
|--------|-------|---------|---------|
| 🔴 高 | [#5171](https://github.com/HKUDS/nanobot/issues/5171) "Telegram polling stalls silently" | **静默永久停摆：** 网络抖动后 Telegram 轮询永久停止，进程存活但日志完全静默，消息在服务器堆积。生产环境已观察到。 | ⚠️ 已有修复 PR [#5156](https://github.com/HKUDS/nanobot/pull/5156)，仍开放中 |
| 🔴 高 | [#5185](https://github.com/HKUDS/nanobot/issues/5185) "Tool calls code in responses" | **功能回归：** 模型在回复中直接输出工具调用代码文本，而非执行工具。 | ⚠️ 无关联 PR，需排查 |
| 🟡 中 | [#5149](https://github.com/HKUDS/nanobot/issues/5149) "no audio on WhatsApp" | WhatsApp 发送音频失败，ffmpeg 警告（日志被截断），初步指向转码流水线问题。 | ⚠️ 无修复 PR，尚在排查 |
| 🟡 中 | [#5187](https://github.com/HKUDS/nanobot/issues/5187) "doesn't work in Termux" | **配置校验过严：** 在 Termux 等无系统时区数据库的环境下，`config.json` 加载因 `timezone` 字段校验失败而崩溃。 | ✅ 已有修复 PR [#5189](https://github.com/HKUDS/nanobot/pull/5189)（今日提交，安装 `tzdata` 作为回退），待合并 |
| 🟡 中 | [#5133](https://github.com/HKUDS/nanobot/issues/5133) `finish_reason='length'` 误路由 | `finish_reason='length'` + `has_tool_calls=True` + 空文本时，被错误路由至空响应重试而非长度恢复。 | ✅ 已修复（PR [#5136](https://github.com/HKUDS/nanobot/pull/5136) 已合并） |
| 🟢 低 | [#3106](https://github.com/HKUDS/nanobot/issues/3106) "工具步骤完成但无法生成最终答案" | 使用 GPT 设置定时任务时频繁出现，但 GMini-4.7 正常，指向 GPT 特定模型行为。 | ⚠️ 开放 109 天无回复 |
| 🟢 安全 | [#4791](https://github.com/HKUDS/nanobot/issues/4791) "DoS: No rate limiting" | 无每用户/每会话消息速率限制，可被滥用消耗 LLM Token 并无限增长会话历史。 | ❓ 已关闭，**无可见对应修复**，需维护者确认处理方式 |

### 稳定性趋势小结

今日 Bug 报告集中在 **Telegram 适配、音频转码、时区处理、模型行为回归** 四个方面。其中时区问题（#5187）与 Termux 的碰撞暴露了配置校验在 "最小化 Linux 环境" 下的兼容性缺陷——修复方案（#5189）在 24 小时内即被提出，响应速度值得肯定。Telegram 静默停摆（#5171）则是生产环境中的高影响问题，对应修复 PR #5156 已存在但尚未合并，建议优先审查。


## 6. 功能请求与路线图信号

### 可能被纳入下一版本的新功能

| 功能 | 来源 | 证据 | 预判 |
|------|------|------|------|
| **会话夜间压缩/持久化** | PR [#5172](https://github.com/HKUDS/nanobot/pull/5172) | 已合并，"preserve and replay complete opaque Responses output-item chain... persist that chain" | 已落地，正在迭代 |
| **WebUI 临时会话（Temporary Chat）** | PR [#5184](https://github.com/HKUDS/nanobot/pull/5184) | 进行中，基于已合并的 #5181/#5182，仅内存不落盘 | 高概率进入下个版本，满足隐私/隔离诉求 |
| **Telegram 自定义 Bot API 地址** | Issue [#4702](https://github.com/HKUDS/nanobot/issues/4702) → PR [#4919](https://github.com/HKUDS/nanobot/pull/4919) | 开放中（07-14 创建），支持自建 Bot API 网关 | 面向企业/自托管用户，功能完整但需打磨 |
| **Heartbeat 共享会话** | Issue [#1899](https://github.com/HKUDS/nanobot/issues/1899) → PR [#4551](https://github.com/HKUDS/nanobot/pull/4551) | 开放中（06-26 创建），允许 Heartbeat 复用目标频道会话 | 解决资源浪费，但存在冲突标记 |
| **技能诊断命令 `nanobot skill status`** | PR [#1319](https://github.com/HKUDS/nanobot/pull/1319) | 开放中（02-28 创建，**154 天**），CLI 层面排查技能加载失败根因 | 功能明确、实现简单，但长期未合并，需关注 |
| **子代理模型预设** | PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) | 开放中（06-11 创建），允许 `spawn` 时指定其他模型预设 | 与多模型工作流需求吻合，值得期待 |

### 路线图信号综合判断

- **WebUI 是当前迭代最密集的前沿。** Quick Chat/临时会话/侧边栏统一高亮，三个 PR 在两天内相继出现，显示团队正集中力量重构 WebUI 交互架构。
- **会话存储层即将迎来重大变更。** PR #5173（JSONL → SQLite）一旦合并，将改变会话数据的读写模型，对插件生态可能有影响，需关注迁移兼容性。
- **Telegram 渠道的稳定性与可配置性是持续诉求。** 轮询恢复、自建 API 地址，分别对应稳定性与合规/网络隔离需求。


## 7. 用户反馈摘要

> 从今日活跃的 Issue/PR 评论与描述中提炼。

**#5149 - WhatsApp 音频问题（[链接](https://github.com/HKUDS/nanobot/issues/5149)）**
> "nanobot will not send audio message on whatsapp. it does receive them."

- **痛点：** 接收正常但发送失败的**单向能力缺失**，用户体验割裂感明显。日志指向 ffmpeg 转码警告，但被截断，需用户提供完整日志。

**#5185 - 工具调用代码泄露到回复中（[链接](https://github.com/HKUDS/nanobot/issues/5185)）**
> 用户上传截图展示回复中直接出现工具调用代码片段。

- **痛点：** 用户对"突然出现"的异常感到困惑，且无法提供复现步骤，说明问题可能具有环境特异性，也侧面反映**用户对工具的信任度会因这种回归而下降**。

**#5171 - Telegram 轮询静默停摆（[链接](https://github.com/HKUDS/nanobot/issues/5171)）**
> "the bot can stop receiving messages permanently while the process keeps running and the log stays completely silent."

- **痛点：** 最关键的词是 "**silently**"（静默）——无日志、无告警、无自动恢复，用户在不知情的情况下丧失全部消息接收能力。这对生产环境是严重隐患。

**#5187 - Termux 环境不兼容（[链接](https://github.com/HKUDS/nanobot/issues/5187)）**
> "I was testing nanobot in Termux (Why not? I was bored), and it doesn't work because of the time zone."

- **反馈：** 用户以轻松的语气报告了一个真实的环境兼容性问题——配置校验未考虑无系统时区数据库的极简 Linux 环境。这种"试一下"的探索性使用恰恰是开源项目扩大用户面的重要途径，修复成本低（#5189），值得快速合入。


## 8. 待处理积压

> 以下问题长期未获官方回复或修复，提请维护者关注。

| 类型 | 编号 | 标题 | 创建日期 | 搁置天数 | 说明 |
|------|------|------|---------|---------|------|
| Issue | [#3106](https://github.com/HKUDS/nanobot/issues/3106) | "I completed the tool steps but couldn't produce a final answer" | 2026-04-13 | **109 天** | 用户使用 GPT 设置定时任务时持续失败。无任何维护者回复。若无法复现，建议至少给出排查指引或标记为 `needs-more-info`。 |
| PR | [#1319](https://github.com/HKUDS/nanobot/pull/1319) | feat: add skill status command | 2026-02-28 | **153 天** | `nanobot skill status` CLI 命令，帮助用户诊断技能加载失败原因。功能简单且明确，长期未合并，可能因缺少维护者精力或合并冲突（已标记 `[conflict]`）而搁置。建议明确决定"合入/关闭/请求冲突解决"。 |
| PR | [#1656](https://github.com/HKUDS/nanobot/pull/1656) | fix(validation): handle None value in string schema validation | 2026-03-07 | **146 天** | 修复 schema 校验中对 `None` 值抛 TypeError 的问题。已标记 `[conflict]`，长期未处理。同类 PR [#4819](https://github.com/HKUDS/nanobot/pull/4819) 也存在 24 天以上的冲突待解决。 |
| Issue | [#4791](https://github.com/HKUDS/nanobot/issues/4791) | DoS: No channel-level message rate limiting | 2026-07-06 | 24 天（已关闭） | 安全问题已关闭但**未见修复提交或说明**。建议维护者明确关闭原因（Won't fix / 已在某版本修复 / 计划中），以消除安全疑虑。 |

**结构性观察：** 目前仓库内存在多个 `[conflict]` 标记的 PR（#1656、#1565、#1319、#4819、#4551、#4021），累计 **6 个待解决冲突**。这些 PR 大多功能完成度高、仅需冲突消解，其长期滞留既消耗了贡献者的积极性，也让功能无法及时触达用户。建议维护团队安排一次"冲突清理专项"，或引入自动化冲突检测与提示。


**总结：** NanoBot 处于高速迭代期，WebUI、存储架构、Telegram 稳定性三条主线同时推进，社区反馈积极但 Bug 修复压力同样存在。项目健康度整体良好，但需注意长期积压的冲突 PR 与无回复 Issue 对贡献者生态的潜在影响。下一版本（如有）最值得期待的变化：SQLite 会话存储 + WebUI 临时会话 + Telegram 自建 API 支持。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，我为您呈上这份基于 Hermes Agent 项目 2026-07-31 日实时数据生成的动态日报。

---

# Hermes Agent 项目动态日报 - 2026-07-31

## 1. 今日速览

Hermes Agent 项目今日活跃度极高，处于高强度的迭代与问题消化阶段。过去24小时内，项目新增/更新了 50 条 Issues 和 50 条 Pull Requests，数量均处于峰值水平。虽然绝大部分 PR（47条）仍在待合并状态，但今日也发布了包含约 1,000+ 个 PR 的 `v0.19.1` 补丁版本，体现了项目极强的交付能力。值得关注的是，今日新提交的 Issues 和 PR 中，有相当一部分（如 #75130、#75154、#75146）是针对近期版本更新或旧有问题的深入修复和反馈，显示了社区用户的高度参与和项目的快速响应机制。整体来看，项目处于“高输出、高频迭代”的活跃状态，但激增的 PR 积压数量也暗示维护者需要加快 Code Review 节奏。

## 2. 版本发布

- **[v2026.7.30: Hermes Agent v0.19.1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.19.1)**
  - **更新内容**：这是一个补丁版本，主要将 `v0.19.0` 之后合并的约 1,000+ 个 PR 整合为一个稳定的标签版本，以便于下游用户（如 Docker 镜像、托管部署和全新安装）使用。
  - **破坏性变更**：根据发布说明，这属于“Patch release”，意味着未引入新的破坏性变更。
  - **迁移注意事项**：对于现有用户来说，这只是一次稳定的常规更新，无特殊迁移步骤，可以安全升级。

## 3. 项目进展

今日合并/关闭的 PR 数量为 3 条，由于清单未完全展示，但结合新增的 PR 内容来看，项目推进聚焦于以下几个方面：

- **基础设施与安全加固**：大量 PR 致力于修复依赖漏洞和增强供应链安全，例如 PR #75037（修补已知漏洞依赖、添加包发布年限下限和 npm 脚本白名单）。
- **平台兼容性修复**：针对特定平台的修复明显增多，如 PR #74895（修复安装脚本在 PATH 中暴露 `hermes-acp` 启动器）和 PR #74904（处理 Windows 系统保留文件名导致的 `git stash` 失败）。
- **核心Agent能力增强**：在 Agent 的稳定性和正确性方面有显著投入，如 PR #69194（在每个终端工作目录建立检查点，避免因命令变体绕过破坏性命令检测）和 PR #75142（修复 Gemini 提供商上的思考预填标记问题，避免因多出的模型回合导致 400 错误）。

## 4. 社区热点

今日讨论最热烈的 Issue 集中在**配置管理**与**系统稳定性**方面，反映了用户对可靠性和可控性的高度关注：

- **[Issue #21498 - Custom provider max_output_tokens silently dropped](https://github.com/NousResearch/hermes-agent/issues/21498)** （9条评论）：
  - 这是今日最热门的话题。用户报告自定义提供者的 `max_output_tokens` 配置被静默丢弃，导致模型输出被默认最小值（2048 tokens）截断。这直接影响输出质量，是开发者的核心痛点。
- **[Issue #48731 - /model switch prefers native provider over current reseller](https://github.com/NousResearch/hermes-agent/issues/48731)** (4条评论)：
  - 当模型名称在多个提供商（如原生和经销商）存在时，`/model` 命令会错误地优先选择原生提供商，导致认证失败。这暴露了提供商选择逻辑的缺陷。
- **[Issue #13265 - Skills 系统五大架构缺陷](https://github.com/NousResearch/hermes-agent/issues/13265)**（4条评论，7个 👍）：
  - 尽管历史悠久（创建于4月），但依然是社区关注焦点。用户提出了关于 Skills 系统质量控制、无效内容固化等五个架构层面的缺陷，反映了高级用户对系统长期进化的深度思考。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在配置解析、平台适配和状态管理方面。按严重程度排列如下：

- **高严重度 (P1)**
  - [Issue #38349](https://github.com/NousResearch/hermes-agent/issues/38349): 容器镜像在更新后无法启动（Podman 下 s6 init 无法获取 PID 1），影响部署。目前无明确修复 PR。
- **中严重度 (P2)**
  - [Issue #74879](https://github.com/NousResearch/hermes-agent/issues/74879): 配额耗尽被误报为“认证失败”，误导用户排查方向。当前已有修复思路（调整匹配顺序）。
  - [Issue #57283](https://github.com/NousResearch/hermes-agent/issues/57283): 桌面应用在 `active-profile.json` 缺失时，不加载指定 profile，导致 MoA 配置异常。
  - [Issue #65601](https://github.com/NousResearch/hermes-agent/issues/65601): 桌面端新聊天窗口复用旧会话上下文，缺乏会话隔离。
  - **已有修复 PR：** [PR #75154](https://github.com/NousResearch/hermes-agent/pull/75154)针对 `git update` 时重置导致本地提交丢失的问题；[PR #75146](https://github.com/NousResearch/hermes-agent/pull/75146) 修复 Anthropic 凭据查找歧义。
- **低严重度 (P3)**
  - [Issue #55153](https://github.com/NousResearch/hermes-agent/issues/55153): `custom:<name>` 类型的提供商模型发现失败。
  - [Issue #54753](https://github.com/NousResearch/hermes-agent/issues/54753): Mattermost REST helper 读取响应体无大小限制，存在潜在内存压力。

## 6. 功能请求与路线图信号

社区对功能的需求显示出对**可扩展性、自动化运维和跨平台集成**的强烈意向。

- **高度可定制化请求**：
  - **[Issue #54011](https://github.com/NousResearch/hermes-agent/issues/54011): 支持按凭据设置 `base_url`**，以满足多账户、多端点（如 Cloudflare Workers AI）的轮换需求。
  - **[Issue #52264](https://github.com/NousResearch/hermes-agent/issues/52264): 增加 HTTP API 接口**，以支持 MCP 和 Skills 的热刷新，便于外部服务动态更新配置。
  - **[Issue #26109](https://github.com/NousResearch/hermes-agent/issues/26109): 新增 `post_assistant_turn` 插件钩子**，用于实现机器人间消息镜像和日志同步。
- **可能进入下一版本的信号**：
  - **热刷新接口**（Issue #52264）：与近期合并的关于配置热加载的 PR 方向一致，落地可能性很高。
  - **新的插件钩子**（Issue #12815 `on_clarify`）：该需求实现成本低，且能极大提升桌面端通知等插件体验，大概率会被采纳。
  - **工作目录切换**（Issue #50195）：对于多项目开发者来说非常实用，且相关 PR 已提交（#50195），正处于活跃讨论阶段。

## 7. 用户反馈摘要

从今日的 Issue 中，可以提炼出以下真实的用户声音：

- **痛点：配置的“静默失灵”是最大困扰**。多个 Issue（如 #21498、#74879）都提到配置项被静默忽略、错误报错，导致用户难以定位问题，浪费大量时间排查。用户希望系统对配置错误有更显式的警告或校验。
- **使用场景：多平台、多账号的复杂部署已成常态**。从 Discord、Telegram、微信（WeChat）到 QQ Bot，用户不仅在使用多平台，还在同一平台使用多账号。这带来了对细致配置（如每凭据 `base_url`）的迫切需求。
- **满意之处：项目的迭代速度**。从 v0.19.1 版本快速发布，以及对各类 Bug 的快速响应来看，用户普遍认可项目团队的活跃度和修复效率。但与此同时，快速迭代带来的回归问题（如插件被静默禁用 Issue #54009）也让部分用户感到不安。

## 8. 待处理积压

以下 Issue/PR 长期未得到维护者响应或处于停滞状态，建议重点关注：

- **[Issue #13265 - Skills 系统五大架构缺陷](https://github.com/NousResearch/hermes-agent/issues/13265)** (20年4月创建)：
  - 该问题提出了深远的架构改进建议，并获得了社区不少点赞支持，值得维护者就该问题给出官方回应或将需求纳入路线图。
- **[PR #13611 - 移动 Anthropic 超大 OAuth 系统提示词](https://github.com/NousResearch/hermes-agent/pull/13611)** (20年4月创建)：
  - 该 PR 解决了一个由特定用户场景（Claude Code订阅）引发的实际问题，但截至今日仍未合并，可能因设计决策需谨慎讨论。
- **[Issue #16979 - QQ 机器人附件下载失败被静默丢弃](https://github.com/NousResearch/hermes-agent/issues/16979)** (20年4月创建)：
  - 这是一个明确的可用性缺陷，文件传输是核心功能之一。该问题已开放超过3个月，仍未解决，也未关闭，希望维护者能明确处理计划。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-07-31

---

## 1. 今日速览

PicoClaw 今日处于**中等偏高活跃度**状态：过去 24 小时内有 7 条 Issue 更新和 17 条 PR 更新，虽然无新版本发布，但多条功能性 PR 已进入待合并阶段。值得关注的是，**社区对 OAuth 2.1 认证支持的需求出现了重复提交**（#2546 与 #3302），且新增了 Telegram 会话管理、IRC 长消息支持等渠道层面增强请求。同时，**代码审查中发现并发安全和 goroutine 泄漏问题的 Issue 新鲜出炉**（#3308），这可能是项目向稳定性深水区迈进的一个信号。总体而言，项目功能迭代节奏平稳，社区参与度健康，但需警惕"旧 Issue 停滞 + 重复需求"显现的 backlog 积压趋势。

---

## 3. 项目进展

> ⚠️ 说明：过去 24 小时内无新版本发布，本日报从数据概览的已关闭 PR 中提取项目进展。

### ✅ 今日合并/关闭的重要 PR

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | feat(bedrock): leverage Converse prompt caching via cache points | 已关闭 | **成本优化**：为 AWS Bedrock 接入 prompt caching，前缀缓存读取成本降至约 0.1×，写入约 0.5×（注：该 PR 创建于 6/23，今日标记关闭，具体合并时间待确认） |
| [#3262](https://github.com/sipeed/picoclaw/pull/3262) | build(deps): bump actions/setup-go from 6 to 7 | 已关闭 | CI 基础设施升级至 setup-go v7 |
| [#3263](https://github.com/sipeed/picoclaw/pull/3263) | build(deps): bump actions/setup-node from 6 to 7 | 已关闭 | CI 基础设施升级至 setup-node v7 |
| [#3290](https://github.com/sipeed/picoclaw/pull/3290) | build(deps): bump aws-sdk-go-v2/config 1.32.25→1.32.31 | 已关闭 | AWS SDK 依赖更新 |
| [#3288](https://github.com/sipeed/picoclaw/pull/3288) | build(deps): bump bedrockruntime 1.53.3→1.56.0 | 已关闭 | Bedrock 运行时 SDK 更新 |

**项目整体推进评估**：
- 今日合并/关闭的 PR 以**依赖升级和 CI 维护**为主，功能性突破主要体现在 Bedrock prompt caching（#3163）——这是对 AWS 用户成本结构的直接优化。
- 真正的重要功能 PR（#3270 DashScope TTS + 微信语音、#3279 seahorse 修复、#3200 模型 fallback 链、#3283 钉钉图片消息）均处于**待合并状态**，预计将在未来几日集中落地。
- 项目正处于"蓄力期"：维护者可能在进行一轮依赖刷新和代码审查，为下一批功能合入做准备。

---

## 4. 社区热点

### 🔥 今日焦点：#2546 OAuth 2.1 + PKCE 支持（已关闭，6 条评论）

**链接**: [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546)

- **背景**：该 Issue 创建于 4 月中旬（距今 3.5 个月），请求在仪表盘中支持通过 URL 一键添加 OAuth 2.1 保护的 MCP 服务器，非技术用户无需 shell 和 Node.js 即可操作。
- **今日动态**：状态从 OPEN 转为 CLOSED，且被标记为 stale——但**关闭原因不明**（并非因已实现而关闭，更像是维护者清理积压）。
- **社区诉求分析**：用户在评论区明确表达了"与 Claude.ai 的 Add connector 体验对标"的期望，背后需求是**降低非技术用户接入认证 MCP 服务的门槛**。
- **风险信号**：该 Issue 关闭但功能可能未实现，这直接导致了新的重复 Issue #3302 的产生（见下文），说明**需求并未消失，只是被积压机制吞掉了**。

### ⭐ 高关注度新增：#3308 代码审查 — 并发安全与内存优化（新开）

**链接**: [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308)

- 0 评论、0 点赞但已被标记为 BUG——作者对 SeaHorse、Channel Manager 和 Hooks 提出了**并发风险、goroutine 泄漏、内存/速度优化**的审查意见。
- 这是社区用户主动做深度代码审查的积极信号，说明项目已吸引到有 Go 底层功底的贡献者。
- 后续值得关注该用户是否会上传更详细的分析或对应的修复 PR。

---

## 5. Bug 与稳定性

### 🔴 中等严重度

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | **Process Hook `before_tool` 修改失效**：deserialization 缺陷导致 decision 字段被丢弃、args 被错误解析 | 已关闭 / stale | 无明确关联 PR |

**分析**：该 Bug 影响**工具调用链关键节点**——`before_tool` hook 中决定是否放行工具调用的 decision 字段在反序列化后丢失，意味着自定义安全策略可能被静默绕过（例如：用户 hook 返回拒绝，但实际工具仍被调用）。**虽然状态已关闭，但关闭原因存疑**——是已修复还是被清理？建议维护者对此予以确认。考虑到该问题涉及 hook 机制的核心逻辑，若未真正修复，其潜在影响范围（安全策略、参数篡改防护）不容忽视。

---

## 6. 功能请求与路线图信号

### 强烈信号：认证机制升级迫在眉睫

| Issue/PR | 请求 | 状态 | 关联 PR |
|---|---|---|---|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 支持 OAuth 2.1 for MCP servers（与 #2546 相同） | 新开 | 无 |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | OAuth 2.1 + PKCE for MCP servers（dashboard 添加） | 刚刚关闭 | 无 |

**信号强度**：🔴 **高**——同一需求在 24 小时内以新 Issue 形式重现，而其原始 Issue #2546 刚被关闭。这种"关闭旧 Issue → 用户重新开启新 Issue"的模式强烈暗示**：该需求尚未被实现，但用户诉求没有消退**。若项目方向确为服务端/网关使用，那么 OAuth 支持是迟早必须面对的门槛。

### 明确信号：会话管理向多端延伸

| Issue | 请求 | 状态 |
|---|---|---|
| [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Telegram 等聊天频道增加 session 列表/切换/删除能力 | 新开 |

**信号强度**：🟡 **中**——Web UI 已具备完整会话管理，用户期望将其扩展到聊天渠道。结合已存在的 #3257（gateway 无状态模式），说明用户在**多端场景下的会话工作流**管理需求正逐渐浮现。

### 其他新功能请求

| Issue | 请求 | 状态 |
|---|---|---|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRCv3 长消息（>512 字节）应作为单一整体消息处理 | 新开 / stale |

---

## 7. 用户反馈摘要

### 来自 Issue #3257（已关闭/stale）的真实场景

> "I'm using PicoClaw via `picoclaw gateway`. For CLI, I can create a fresh conversation by passing a different `--session` value. But in gateway mode, the session key is derived from channel/channel ID..."

**用户痛点**：gateway 模式与 CLI 模式在会话控制上存在**能力不对等**——CLI 用户可以灵活指定 session 标识，而 gateway 用户无法自由控制会话的生命周期。这反映了**从 CLI 到 gateway 的用户迁移过程中体验断档**的问题。

### 来自 Issue #3308 的开发者反馈

> "Building a native Go AI assistant that runs on $10 hardware with <10MB RAM and sub-second boot times is seriously awe..."

**满意之处**：用户对 PicoClaw 在低配硬件（$10 设备、<10MB 内存、亚秒级启动）上的表现给予了积极评价，但随即提出并发安全方面的改进建议——**这是社区从"能用"走向"用稳"的信号**。

---

## 8. 待处理积压 ⚠️

> 以下为长期未响应/未合并的 PR 和 Issue，建议维护者优先关注。

### 长时间未合并的 PR（按时间排序）

| PR | 标题 | 创建时间 | 已等待 | 说明 |
|---|---|---|---|---|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | 2026-07-01 | **30 天** | Web UI 模型默认 fallback 链配置，含后端 API 持久化——功能性需求，已在社区有预期 |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | chore(providers): update default model names to 2026-07 latest | 2026-07-20 | 11 天 | 9 个 provider 的默认模型名刷新（OpenAI 已更新至 gpt-5.6 系列）——**若长期不合并，新用户将使用过时模型 ID** |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | fix(seahorse): prevent tool-call format leakage into LLM summaries | 2026-07-21 | 10 天 | 修复 seahorse summaries 中工具调用格式泄漏问题——与 #3258 同属消息格式缺陷 |

### 已标记 stale 但仍有价值的 PR

| PR | 标题 | 创建时间 | 说明 |
|---|---|---|---|
| [#3291](https://github.com/sipeed/picoclaw/pull/3291) | build(deps): bump github/copilot-sdk/go 0.2.0→1.0.8 | 2026-07-23 | **跨大版本升级（0.x→1.x）**，可能包含破坏性变更，需要人工审查而非自动合并 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, -200LOC | 2026-07-03 | 精简 200 行代码的 deltachat 渠道重构——长期未合并可能面临 rebase 成本 |

### 已关闭但可能"假死"的 Issue

> ⏰ **特别提醒**：#3257（gateway 无状态模式）、#3258（before_tool hook 修复）均已在 stale 后被关闭。这两个问题分别涉及**核心能力对等性**和**安全关键 hook 机制**，建议维护者明确**关闭原因**——是已解决还是积压清理？若为后者，建议重新开启或标记为"已知问题"避免用户重复提交。

---

*本报告基于 GitHub 公开数据自动生成，仅供参考。链接可点击直达对应 Issue/PR 页面。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-07-31

## 1. 今日速览 ⚡

NanoClaw 项目保持中等偏高的活跃度。过去 24 小时共产生 **2 条新 Issue** 和 **15 条 PR 动态**（其中 4 条已合并/关闭），显示了持续的维护节奏。值得关注的是，今日没有新版本发布，但核心团队在一日之内密集提交了多条修复 PR，包括 **容器孤儿进程清理**、**Vercel CLI 默认安装移除**、**镜像签名验证身份固定** 等稳定性与安全硬化工作。然而，新开的两条 Issue 均指向核心功能的 **平台消息 ID 处理缺陷** 和 **registry 分支漂移导致的集成失效**，属于需要密切关注的健康度信号。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展 🚀

今日共有 **4 条 PR 关闭/合并**，全部来自核心团队，反映了项目在稳定性与安全性方面的持续投入：

- **PR #3160** `[core-team] versions: repin the agent image to hardened-2026-07-30` — 将 agent 镜像重固定至 `hardened-2026-07-30` 版本。新镜像从 **781MB/18 层** 显著降至 **611MB/8 层**，最大单层从 39% 缩减至 27%，大幅减少镜像拉取耗时，对大规模部署的启动速度有直接改善。🔗 _链接: nanocoai/nanoclaw PR #3160_

- **PR #3159** `[core-team] container: make the Vercel CLI opt-in rather than baked into every image` — Vercel CLI 此前被默认打包进每个 agent 镜像，现在改为按需通过 `/add-vercel` 技能添加。此举同时减小镜像体积并缩小默认凭据暴露面，属于安全默认值（secure-by-default）的改进。🔗 _链接: nanocoai/nanoclaw PR #3159_

- **PR #3122** `[PR: Fix, follows-guidelines, core-team] fix(opencode): main compatibility, custom-endpoint transport, memory parity` — 修复 opencode 集成中与主分支的兼容性问题，同时补齐自定义端点的传输支持与内存一致性。🔗 _链接: nanocoai/nanoclaw PR #3122_

- **PR #2682** `fix(update-skills): skip v1-only skill branches` — 在更新技能的检测流程中加入 v2 兼容性校验，自动跳过仅支持 v1 的分支，防止错误应用旧版技能到新版本环境。🔗 _链接: nanocoai/nanoclaw PR #2682_

---

## 4. 社区热点 🔥

今日讨论最活跃且最值得关注的是 **Issue #3153**，吸引了 1 条评论：

- **Issue #3153** — **`add_reaction` / `edit_message` 对入站消息始终失败**：作者 `TO-maschenborn` 报告了一个极其具体的核心链路 Bug —— 平台消息 ID 未剥离 agent-group 后缀，导致平台永远不认识该 ID。在 Slack 上每次尝试均返回 `message_not_found`，重试 3 次后以 `failed` 结束。该问题直接阻断了对入站消息进行回应和编辑的能力，属于高频操作路径，对依赖反应（reaction）和消息更正的用户影响极大。🔗 _链接: nanocoai/nanoclaw Issue #3153_

**后台诉求分析**：此 Issue 暴露了 agent-group 多租户逻辑与平台消息 ID 之间缺少一层 `id-normalization` 的架构欠账，且发生在最基础的 Slack 交互路径上，说明该路径此前缺少足够的集成测试覆盖。

---

## 5. Bug 与稳定性 🐛

按严重程度排列：

| 严重程度 | 编号 | 描述 | 状态 |
|---------|------|------|------|
| 🔴 **高** | **Issue #3153** | 入站消息的 `add_reaction` / `edit_message` 始终失败：agent-group 后缀未从平台消息 ID 中剥离，导致每次操作失败并触发 3 次重试 | 无 fix PR；待处理 |
| 🔴 **高** | **PR #3158** | 镜像签名验证门禁失效：`AGENT_IMAGE_SIGNER_IDENTITY` / `_ISSUER` 两个变量不存在，导致签名验证每次都被跳过、自动合并永远无法触发 | **已有 PR 修复，待合并** |
| 🟠 **中** | **Issue #3155** | registry 分支与 main 分支漂移；在 `main` 上按 `providers` 分支的 payload 应用技能，会在自身的构建步骤失败 | 无 fix PR；待处理 |
| 🟡 **较低** | **PR #3157** | `materializeTemplateSkills` 使用 `fs.statSync` 跟随符号链接，可能意外挂载指向容器路径的悬空链接 | **已有 PR 修复，待合并** |

**值得注意**：PR #3158 揭示了一个持续处于"静默失败"状态的安全门禁 —— 镜像签名验证实际上从未生效过。若修复合并，将补齐供应链安全的关键一环。

---

## 6. 功能请求与路线图信号 🔮

今日无新增的功能请求 Issue，但多条待合并 PR 指向了未来版本的方向：

| 功能方向 | 相关 PR | 状态 | 说明 |
|---------|---------|------|-------------|
| **更强容器隔离与生命周期管理** | PR #3119 — 孤儿容器 reconcile 机制，防止同一个 agent-group 重复启动多个容器轮询同一会话数据库（线上观测到一个 group 同时运行 3 个容器） | 待合并 | 对长时间运行的主机是刚需 |
| **定时任务的运行时感知** | PR #3154 — 向定时任务注入 `process_after` 时间与 `current_time` 字段，使任务能感知"当前实际运行时刻"而非创建时刻 | 待合并 | 使非即时任务的时间逻辑更准确 |
| **渠道消息结构化传递** | PR #3156 — 将 channel 附件作为结构化 parts 传递给 providers | 待合并 | 减少传输过程中的信息损失 |
| **供应商分支对齐** | Issue #3155 引发的修复方向（未明示 PR） | 待关注 | 防止 registry 分支漂移复发 |

---

## 7. 用户反馈摘要 💬

从今日 Issue 收集到的关键用户反馈：

- **Issue #3153**（作者 `TO-maschenborn`）：核心痛点集中在**功能完全不可用的挫败感**。作者明确描述"每次尝试都失败、重试 3 次后以 failed 结束"，且问题根源（ID 后缀未剥离）清晰可辨。用户期望的是：对入站消息的 reaction 和编辑应"开箱即用"，而不是在基础路径上出现系统性失败。

- **Issue #3155**（作者 `glifocat`）：表达了**对集成一致性的担忧** —— 按官方文档/registry 分支操作却在主分支上失败，会让贡献者在"跟随指引"后遭遇挫折，动摇了"安装即生效"的信任感。

- **PR #3119**（作者 `robbyczgw-cla`）：反映了真实长时间运行场景中的**资源泄露问题** —— 单 agent group 在 5 天 uptime 下累积到 3 个并发容器，浪费资源并可能引发状态不一致。这说明社区用户对高可用/长时间运行场景越发关注。

---

## 8. 待处理积压 ⏳

以下为长期未合并的高价值 PR，建议维护者优先审视：

| PR | 内容摘要 | 创建时间 | 已开放天数 |
|----|---------|---------|-----------|
| **PR #2301** — `feat(add-github): polling mode, git access question, safe OneCLI secret merge` | 为 GitHub 集成新增 **30 秒轮询模式**，支持无入站端口的环境中通过 REST API 集成，并加强了 webhook 模式的安全性提示与密钥合并逻辑 | 2026-05-06 | **86 天** |
| **PR #2317** — `feat(skills): add /add-voice-transcription-free-whisper skill` | 新增免费本地语音转录技能，支持 openai-whisper（GPU 加速）与 whisper.cpp（纯 CPU）双后端 | 2026-05-07 | **85 天** |
| **PR #2537** — `ci: add pre-commit hooks (prettier, eslint, typecheck, vitest)` | 为仓库加入 pre-commit 钩子，自动执行格式化与类型检查，降低贡献门槛 | 2026-05-18 | **74 天** |
| **PR #2634** — `feat: add add-paws4claws skill` | 集成 AWS 凭据代理守护进程 paws4claws，支持构建镜像、生成令牌、按 agent group 挂载 | 2026-05-28 | **64 天** |
| **PR #2685** — `docs(signal): group typing, outbound reactions, quote-reply fix` | Signal 渠道文档更新（群组输入指示器、出站 reaction、引用回复修复） | 2026-06-04 | **57 天** |
| **PR #3124** — `fix: report unavailable MCP servers` | 当 MCP 服务器不可用时予以报告，而非静默忽略 | 2026-07-24 | **7 天** |

其中 **PR #2301**（轮询模式）与 **PR #2317**（免费语音转录）是社区关注度较高的功能性增强，分别满足复杂网络环境部署与本地化/低成本语音转写的需求，建议评估后尽快推进合并。

---

*本报告基于 2026-07-31 的 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-07-31

## 1. 今日速览

IronClaw 在过去 24 小时内保持了高强度的开发节奏：**38 条 Issue 更新（33 新开/活跃，5 关闭）**与**50 条 PR 更新（29 待合并，21 已合并/关闭）**，活跃度处于近期高位。核心看点有二：一是围绕 **#6565 Skill Discovery/Routing/Activation Epic** 的两枚大型修复 PR（#6937、#6938）今日落地，直指技能激活的评分缺陷与静默失败问题；二是 BenKurrek 针对 **目标架构重构计划（#3773 Epic）** 一次性开出 10 个拆分工作流 Issue（#6919-#6927），说明架构转型已进入系统化执行阶段。另有多个 WebUI 前端 Bug 被集中报告（分页失效、文件预览渲染异常等），其中 Projects 页面伪造指标的问题已有对应修复 PR（#6906）。整体项目健康度良好，但安全/隐私类问题（#6900 跨用户记忆泄漏、#6866 工作区共享）需要优先关注。

---

## 2. 版本发布

**24 小时内无新版本发布。**

不过值得注意的是，PR #5598（`chore: release`）自 7 月 3 日起悬置至今已有近一个月，涉及 `ironclaw_common`（0.4.2→0.5.0，含 Breaking Changes）与 `ironclaw_skills`（0.3.0→0.4.0，含 Breaking Changes）。维护者可关注该 PR 的合并时机。

---

## 3. 项目进展

今日无新合并的 PR 数据可供确认，但以下已合入/关闭的 PR 值得关注（来自 21 条已合并/关闭记录）：

| PR | 标题 | 状态 | 意义 |
|----|------|------|------|
| [#6934](https://github.com/nearai/ironclaw/pull/6934) | refactor(host_api): de-wildcard the contract prelude (WS0) | CLOSED | 目标架构计划 WS0 第一个工作项已收尾，移除 45 个模块的通配符重导出，让依赖关系显式化 |
| [#6771](https://github.com/nearai/ironclaw/issues/6771) | [Test] Stabilize Reborn Playwright runtime and served-API coverage | CLOSED | Reborn 测试矩阵 runtime 与 served-API 稳定性问题已解决 |
| [#4636](https://github.com/nearai/ironclaw/issues/4636) | [Test] Add standalone SSO session and multi-user isolation E2E coverage | CLOSED | 独立 SSO 会话与多用户隔离的 E2E 覆盖已落地 |

**此外，以下已关闭 Issue 对应修复已合入**（缺少具体 PR 编号，可见于 Issue 状态）：

- #6752 - Instance deletion fails with "Loading your agents..." stuck（**已关闭**）
- #6834 - Slack setup fails in IronClaw（**已关闭**）

**综合评估**：WS0 工作项 #6934 的合入标志着目标架构计划开始从"决策记录"走向"落地执行"——这是从 PR #6918 决策记录到 #6919-#6927 十个拆分工作流推进的关键一步。项目整体正处于**架构重构初期 + 技能系统深度修复**的双线推进阶段。

---

## 4. 社区热点

### 最热 Issue

| Issue | 标题 | 评论数 | 分析 |
|-------|------|--------|------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | [EPIC] error-recoverability endgame — the model recovers from 100% of the errors it sees | 15 | 连续多日保持最高热度。社区对"模型遇到错误后能否自主恢复"的诉求强烈。该 Epic 定义了五条可恢复性契约（(a) 运行存活、(b) 模型可见、(c) 携带原因与方案、(d) 模型获得行动机会、(e) 不报告虚假成功）。这是对 agent 可靠性的根本性质疑，也是衡量 IronClaw 成熟度的关键指标。 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Epic: Hermetic capability and journey testing platform | 4 | 社区关注"每个能力和关键用户旅程是否有确定性的、有意义的覆盖"这一基础问题。与 #6284 一并构成质量保障体系的两翼。 |

### 最热 PR

| PR | 标题 | 规格 | 分析 |
|----|------|------|------|
| [#6937](https://github.com/nearai/ironclaw/pull/6937) | fix(skills): word-boundary keyword matching and a measured activation threshold | size: L | 修复 #5417 技能评分缺陷（子串命中得分 5 分导致误激活），改为词边界匹配，并引入实测激活阈值。社区对技能路由的"精准性"和"可预期性"有较高期待。 |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | fix(skills): explain activation refusals, enforce requirements, survive discovery limits | size: L | 技能激活失败从"静默/仅提示不可用"改为明确说明原因。这直接回应了 #6284 Epic 第 (b)(c)(d) 条契约中对"模型看到什么"的要求。 |
| [#6906](https://github.com/nearai/ironclaw/pull/6906) | fix: show only API-backed project data | size: L | 移除 Projects 页面展示的后端不存在的伪造指标（$0.00 spend、0 failures 等），只渲染 API 真实数据。社区对"展示真实数据"的诉求明确。 |

**分析**：社区热点集中在两条主线——**① 技能系统的精准性与可解释性（#6937/#6938/#6565）**，核心诉求是"技能要么被正确选中并激活，要么明确告诉用户/模型为什么不行"；**② 数据的真实性与透明度（#6906/#6902）**，用户对界面展示未经验证的指标表示不满。此外，#6284 的持续热度说明 agent 错误恢复能力是社区最关心的长期课题。

---

## 5. Bug 与稳定性

按严重程度排序：

### 严重（安全/隐私/数据泄漏）

| Issue | 标题 | 严重度 | 状态 |
|-------|------|--------|------|
| [#6900](https://github.com/nearai/ironclaw/issues/6900) | Shared-channel default subject binding collapses all users into the operator's memory namespace (cross-user memory leak) | **P0/Security** | OPEN，suggested_P0，无修复 PR |
| [#6866](https://github.com/nearai/ironclaw/issues/6866) | Same home directory shared across all users; workspaces visible to others | Security | OPEN，无修复 PR |
| [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub skill CTA returns 404 across all skills | P2 | OPEN（今日新报），无修复 PR |

**安全相关问题值得最高优先级关注。** #6900 描述的场景——共享 Slack 频道中多个用户的对话被折叠进操作者的记忆命名空间——是跨用户记忆泄漏，性质严重。虽然已有 #4636（SSO 多用户隔离 E2E）合入，但显然生产环境的隔离仍不完整。

### 中等等级

| Issue | 标题 | 状态 |
|-------|------|------|
| [#6903](https://github.com/nearai/ironclaw/issues/6903) | Admin users list cannot load users beyond the first page | OPEN，无修复 PR（cursor 分页丢失） |
| [#6904](https://github.com/nearai/ironclaw/issues/6904) | Logs page cannot load entries beyond the latest page | OPEN，无修复 PR（nextCursor 未透传） |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance deletion fails + "Loading your agents..." stuck | **已关闭** |
| [#6834](https://github.com/nearai/ironclaw/issues/6834) | Slack setup fails in IronClaw (near.foundation account) | **已关闭** |
| [#6915](https://github.com/nearai/ironclaw/issues/6915) | Workspace file links in assistant messages do not open the referenced file | OPEN，**已有 PR #6917** |
| [#6916](https://github.com/nearai/ironclaw/issues/6916) | Markdown files rendered as plain text in file preview modal | OPEN，无修复 PR |
| [#6902](https://github.com/nearai/ironclaw/issues/6902) | Projects page displays fabricated metrics as real data | OPEN，**已有 PR #6906** |

**模式识别**：前端 WebUI 是本轮 Bug 集中区。分页丢失（#6903/#6904）、文件链接跳转（#6915）、Markdown 渲染（#6916）均为典型的 UI/UX 细节问题，且已有 PR #6917（workspace 文件链接）和 #6906（Projects 数据）在修复中。建议维护者抓紧 review 这两个 PR 并尽快合入。

---

## 6. 功能请求与路线图信号

| Issue | 请求内容 | 可能纳入版本？ |
|-------|----------|---------------|
| [#6939](https://github.com/nearai/ironclaw/issues/6939) | **Migration tool** to port legacy agent setup and memory to IronClaw (from Hermes/Openclaw) | 信号明确：用户迁移成本是当前主要摩擦点。**有可能被纳入 v1 之前的 beta 阶段**，但当前没有对应 PR。 |
| [#6910](https://github.com/nearai/ironclaw/issues/6910) | **Shared Switch component** for settings controls (unify Appearance/Tools pages) | 属于 UI 一致性技术债。已有 #6909（Admin 删除流程统一 ConfirmDialog）类似诉求，说明设计系统统一化在进行中。 |
| [#6909](https://github.com/nearai/ironclaw/issues/6909) | **Migrate Admin deletion flows** to shared ConfirmDialog | 同上，UI 一致性。 |
| [#6905](https://github.com/nearai/ironclaw/issues/6905) | **Sign releases with keyless cosign** for verification (AUR packaging) | 供应链安全信号，来自外部贡献者。实施成本低，可能被维护者接受。 |
| [#6839](https://github.com/nearai/ironclaw/issues/6839) | **Immutable caching** for content-hashed JS/CSS in WebUI | 性能优化，当前无 PR。 |

**路线图判断**：#6939（迁移工具）是用户侧真实痛点，但当前核心工作集中在架构重构（#3773 系列）和技能系统（#6565 系列），迁移工具可能不会在近期进入开发队列。建议维护者在路线图文档中对社区给出明确预期。

---

## 7. 用户反馈摘要

### 正面反馈
- **无明确的正面反馈记录** — 本日数据中没有用户表达满意或肯定。

### 负面/待改进反馈

| 来源 Issue | 用户痛点 | 解读 |
|------------|----------|------|
| [#6939](https://github.com/nearai/ironclaw/issues/6939) | "现有 Hermes/Openclaw 用户迁移成本高，不愿从零开始" | 用户对新平台的迁移阻力是实际采用率的拦路虎 |
| [#6866](https://github.com/nearai/ironclaw/issues/6866) | "所有用户共享同一 home 目录，能看到其他用户的工作区——这是隐私问题" | 多用户隔离是 SaaS/企业部署的硬性要求，当前缺失导致用户信任受损 |
| [#6902](https://github.com/nearai/ironclaw/issues/6902) | "Projects 页面展示假数据（$0.00 spend、0 failures 等），这些不是后端提供的" | 用户对"虚构指标"的反感说明**真实性 > 漂亮界面**，伪造数据会直接损害产品信誉 |
| [#6834](https://github.com/nearai/ironclaw/issues/6834) | "Slack 集成连接流程无法完成，扩展处于不可用状态" | 已修复（关闭），但说明渠道扩展的可靠性仍需要持续加固 |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | "删除实例失败 + 重新登录卡在 'Loading your agents...'" | 已修复（关闭），实例生命周期管理的健壮性正在改善 |

**模式提炼**：用户反馈集中在**三个层面**——(1) 隐私与多用户隔离（#6866/#6900）；(2) 数据真实性（#6902）；(3) 迁移与入门门槛（#6939）。这三点是直接影响 IronClaw 从"技术尝鲜"走向"生产可用"的关键。

---

## 8. 待处理积压

以下为长期未响应且值得关注的问题：

| 类型 | 编号 | 标题 | 等待天数* | 备注 |
|------|------|------|-----------|------|
| Issue (Open) | [#6900](https://github.com/nearai/ironclaw/issues/6900) | Shared-channel default subject → operator's memory（跨用户内存泄漏） | 1 天 | P0 安全级别，**应最高优先级响应**。虽然标注 suggested_P0，但尚未有人认领 |
| Issue (Open) | [#6866](https://github.com/nearai/ironclaw/issues/6866) | 所有用户共享 home 目录（隐私问题） | 2 天 | 与 #6900 同属多用户隔离缺失，建议合并排期 |
| PR (Open) | [#5598](https://github.com/nearai/ironclaw/pull/5598) | chore: release（ironclaw_common 0.5.0 / ironclaw_skills 0.4.0，含 Breaking） | **28 天** | 发布 PR 悬置近一个月，Breaking Changes 的延迟发布可能阻塞下游消费者 |
| PR (Open) | [#5664](https://github.com/nearai/ironclaw/pull/5664) | chore(deps): bump actions group 16 updates（含 claude-code-action 0.1.88→0.1.183） | **26 天** | GitHub Actions 依赖长期未合并，可能与 CI 稳定性相关 |
| Issue (Open) | [#3773](https://github.com/nearai/ironclaw/issues/3773) | Epic: Land the IronClaw Target Crate Architecture | 73 天 | Epic 本身不是"未响应"，但今天新增的 10 个子任务说明主 Epic 长期未关闭，推进节奏需关注 |
| PR (Open) | [#6364](https://github.com/nearai/ironclaw/pull/6364) | feat(attachments): add durable cross-channel file flows | 11 天 | 跨渠道附件功能，覆盖 WebUI/Telegram/Slack，XL 规模，风险中等。多日未更新 |

**维护者提醒**：
1. **#6900 与 #6866** 属于安全/隐私类问题，即使在 v1-launch-checklist 之前也应提前处理。建议至少给出"计划修复时间点"，避免用户对多租户安全性失去信心。
2. **#5598 发布 PR** 已拖延近一个月。如 Breaking Changes 已就绪，建议尽快合并以解锁下游依赖方。
3. **#6937/#6938**（技能系统修复）与 **#6906**（Projects 数据修复）等待 review，这三个 PR 直接解决多个社区反馈热点，建议优先安排人力。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-07-31

> 项目健康度：🟢 活跃（过去24小时 PR 合并/关闭 7 条，版本发布 1 个，Issue 层面无新增阻塞）

---

## 1. 今日速览

过去 24 小时，LobsterAI 保持了稳定的合并节奏：共 9 条 PR 进入活跃状态，其中 7 条被合并或关闭，2 条仍在待审。项目发布了 2026.7.29 版本，核心更新围绕 **Cowork 侧边聊天、Kimi K3 模型接入、认证会话生命周期加固** 三个方向。值得注意的信号是，项目在 24 小时内合并了 4 条出自同一位核心维护者（`liuzhq1986`）的 PR，覆盖 UI 一致性和企业级账号隔离改造，说明当前迭代重心在前端体验统一与多租户/多账号场景的健壮性。Issue 侧无新增量，社区反馈渠道相对平静，但存在两条已滞留 4 个月的陈旧 PR（#1228、#1231）仍待维护者裁决，建议关注下方「待处理积压」。

---

## 2. 版本发布

### LobsterAI 2026.7.29（发布于 2026-07-29）

**主要更新内容：**

- **feat(cowork)：侧边聊天支持选中文本标签**（PR #2405）— 用户在侧边聊天引用助理输出时，现可附带选区标签，便于上下文定位。
- **feat：支持 Kimi K3 模型**（PR #2381）— 新增模型接入，扩大模型选择面。
- **fix(auth)：加固会话生命周期与 token 刷新**（PR #2405 关联）— 针对会话过期和刷新竞态的修复，涉及认证链路。

**破坏性变更：** 无明确标注的破坏性变更；auth 链路修复建议用户关注 token 刷新行为变化，若存在自建代理或自定义认证插件，建议在升级后做一次回归验证。

**迁移注意事项：** 本次无数据库变更或配置格式变更。建议升级后重点验证 Cowork 侧边聊天面板的行为（新增选中文本标签是否影响现有拖拽/缩放逻辑）以及 Kimi K3 模型在长上下文场景下的响应稳定性。

🔗 [查看 Release 详情](https://github.com/netease-youdao/LobsterAI/releases)

---

## 3. 项目进展

今日合并/关闭的高价值 PR 集中反映了以下几条产品主线：

### 🖼️ UI/UX：侧边栏体系整合与页面一致性

| PR | 内容 | 影响 |
|---|---|---|
| [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) | 侧边栏支持签到+横幅轮播 | 将签到入口与活动横幅统一为可共存、可轮播的组件，且单条目时自动隐藏导航控件，交互更克制 |
| [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) | Sites 页面布局与 Skills/MCP 对齐 | 解决页面宽度、间距、搜索样式不一致问题，产品内部视觉语言进一步收敛 |

### 💬 Cowork：侧边聊天从实验走向完善

| PR | 内容 | 影响 |
|---|---|---|
| [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) | 新增隔离的 `/btw` 侧边聊天 | 支持浮动、八方向拖拽缩放、停止生成和追问；执行历史隔离，不污染主对话；通过与 OpenClaw 隔离路径传输 |
| [#2405](https://github.com/netease-youdao/LobsterAI/pull/2405)（已发版） | 侧边聊天增加选中文本标签 | 强化引用上下文的可视化 |
| [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | 优化侧边聊天输入处理 | 面板打开期间可累积选中文本片段；移除产品级长度限制（保留传输安全兜底），提升可用性 |

### 🏢 企业级：账号隔离与安全加固

| PR | 内容 | 影响 |
|---|---|---|
| [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | 按账号隔离认证/媒体/排队追问/共享/部署状态 | 防止旧账号异步响应串扰新登录账号；强化企业权益校验、失败回滚与清理；补齐主/渲染进程诊断与双语文案 —— **这是企业版/多账号场景的重要地基** |
| [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | Email Skill 附件路径穿越修复 | 清洗附件文件名 + 强制下载目录边界，新增跨平台安全测试并升级 skill 版本 —— **安全修复，建议优先确认** |

### 🪟 Windows 平台：卸载/停止流程健壮性

| PR | 内容 | 影响 |
|---|---|---|
| [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) | NSIS 安装器：每个轮询周期重新执行 Stop-Process | 修复内核销毁慢于轮询窗口导致进程存活越过检测关口的问题，并补充存活进程明细日志（name/pid/path），提升 Windows 平台卸载与更新时的可靠性 |

**整体判断：** 项目在一天内完成了「UI 统一 + Cowork 功能闭环 + 企业级账号隔离 + 安全修复」四条线的推进，核心维护者提交密度较高、主题聚焦，项目处于稳定迭代并兼顾安全与用户体验的状态。

---

## 4. 社区热点

今日无高热度 Issue 讨论，PR 本身亦无显著的评论激增（多数 PR 评论数为 0）。以下两个信号相对突出：

1. **柯克/Kimi K3 模型支持（PR #2381）** — 虽非今日新增讨论，但随 Release 发布进入广大用户视野。需求动机明显：用户在尝试扩展可用模型矩阵，对闭源/特定供应商模型的接入有持续诉求。
2. **侧边聊天 `/btw` 的快速迭代（#2397 → #2405 → #2406）** — 3 天内 3 个 PR 连续打磨同一功能，说明该功能正在快速被真实用户使用并反馈问题。尤其是「移除产品级问题长度限制」这一改动，预示用户在使用侧边聊天时曾遭遇输入长度限制带来的挫败感。

🔗 [#2381 Kimi K3 支持](https://github.com/netease-youdao/LobsterAI/pull/2381) | [#2397 侧边聊天](https://github.com/netease-youdao/LobsterAI/pull/2397)

---

## 5. Bug 与稳定性

今日无新增 Issue 报告 Bug。从合并的 PR 中可提炼出以下已修复的稳定性与安全问题：

| 严重程度 | 问题描述 | 修复 PR | 状态 |
|---|---|---|---|
| 🔴 高 | Email Skill 附件路径穿越漏洞（可导致任意文件写入） | [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | 已合并 |
| 🟠 中 | Windows 平台 NSIS 安装/卸载时进程残留存活（Stop-Process 只执行一次，存在竞态窗口） | [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) | 已合并 |
| 🟠 中 | Cowork 会话过期/刷新时可能遇到竞态，token 刷新链路不完整 | Release 中 auth 加固修复 | 已发版 |
| 🟡 低 | AgentCreateModal 不支持 Escape 关闭且重开时残留上次表单数据（UX 一致性缺陷） | [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | ⚠️ 仍开启，滞留 4 个月 |

> 结论：今日无致命回归；安全修复已落地；陈旧 PR #1231 建议维护者尽快裁决（见第 8 节）。

---

## 6. 功能请求与路线图信号

当前无新 Issue 中的功能请求。但通过 PR 内容可以识别以下路线图信号：

| 功能方向 | 信号来源 | 判断 |
|---|---|---|
| **多模型接入扩展** | PR #2381（Kimi K3） | 模型矩阵持续扩充，下一版本大概率继续新增主流模型 |
| **侧边聊天 / 隔离会话** | PR #2397、#2405、#2406 | 该功能已被列为重点打磨对象，预计下一版本会有更多交互细节上调 |
| **企业级账号隔离与多租户** | PR #2409 | 企业场景的账号隔离是重要架构演进，后续可能配套权限管理、审计日志等功能 |
| **签到/活动/横幅体系** | PR #2411 | 产品开始覆盖运营活动能力，暗示商业化或用户增长方向的动作 |

---

## 7. 用户反馈摘要

由于今日无新增 Issue 评论，以下反馈基于 PR 内容间接推断：

1. **侧边聊天长度限制是真实痛点** — PR #2406 明确移除「产品级问题长度限制」，说明用户在使用 `/btw` 侧边聊天时明显感受到输入/引用内容被截断带来的挫败感；保留传输安全兜底说明项目在释放限制时仍注重技术边界。
2. **会话「标记为未读」是明确的功能缺位** — PR #1228（虽为陈旧 PR）反映了一个真实使用场景：用户在多个会话间切换时，缺乏主动标记能力导致重要会话易被遗忘。该 PR 已超过 4 个月未获裁决，建议维护者留意。
3. **用户对 Esc 键关闭弹窗的行为有一致预期** — PR #1231 指出项目内其他 Modal（如 McpServerFormModal）均已支持 Esc 关闭，而 AgentCreateModal 缺失，说明用户已形成跨组件的交互预期。

---

## 8. 待处理积压

以下两条 PR 均创建于 2026-04-01，距今已近 4 个月，仍处于开启状态且近期无维护者评论，建议尽快仲裁（合并/关闭/请求更新）：

| 编号 | 标题 | 作者 | 内容摘要 | 建议 |
|---|---|---|---|---|
| [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | feat(cowork): 新增会话「标记为未读」功能 | fhraiwxr | 在会话详情菜单/列表右键菜单增加「标记为未读」，扩展 coworkSlice 添加手动状态管理，已含 i18n | 功能价值明确，建议维护者确认是否符合产品规划后合并或明确拒绝 |
| [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | fix(agent): AgentCreateModal 支持 Escape 键关闭，并在重新打开时重置表单 | choyuenga | 修复 Escape 关闭缺失及表单残留数据问题，与其他 Modal 交互对齐 | 属纯 UX 一致性修复，风险低，建议快速合并 |

---

## 附：活跃能力提示

**今日速率：** 12 条 PR/日（含已关闭）；其中合并/关闭 7 条，项目处理速率处于健康区间。
**关注信号：** 若 PR #1228/#1231 持续滞留，社区贡献者活跃度可能受影响；建议维护者每周设定固定「陈旧 PR 清理日」以维持贡献者生态健康。

---
*本日报由 AI 自动生成，数据截至 2026-07-31。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-07-31

## 1. 今日速览

Moltis 过去24小时整体活跃度**中等偏高**：共产生 2 条新 Issue 和 4 条 PR 更新。值得关注的是，**安全漏洞报告（#1177）与功能请求（#1178）同期出现**，且两个安全加固 PR（#1170、#1174）均在推进中，表明项目在功能扩展的同时也在加强安全边界。三个待合并 PR 均处于活跃状态，其中一个涉及 Slack 通道的 PR（#1166）已合并关闭。**项目健康度良好**，维护者响应及时，无明显长期搁置问题。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并关闭 1 个 PR，另 3 个仍在审查中：

- **[PR #1166] feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit** — **已合并**。该 PR 在 #1165（确认反应机制）基础上进一步增强了 Slack 集成的可靠性：使用 reaction 替代 Slack 不支持的 typing indicator 作为消息回执与进度信号，并处理了排队、取消、重试、回调突发和投递失败等边界情况。合并该 PR 意味着 Slack 通道的消息状态可观测性和健壮性均有实质提升。

在审查中的 PR 包括：
- **PR #1174**：添加后端无关的代理插桩（instrumentation）、Langfuse v4 导出、OTLP 后端支持及端用户反馈收集，涉及 token 用量归因、推理过程记录等核心可观测性能力；
- **PR #1170**：将 `/sh` 等特权命令从访问白名单中剥离，引入独立的按账号 `operators` 列表进行权限隔离的安全加固；
- **PR #1176**：为 Web 端添加 Markdown 保留复制与会话导出功能。

整体来看，项目在 **可观测性、安全性、通道体验** 三条线上同步推进，且已合并的 Slack 功能为多通道一致性设计提供了参考。

---

## 4. 社区热点

今日暂无高讨论量的 Issue 或 PR（所有条目评论均为 0）。不过以下两个新 Issue 值得关注：

- **[Issue #1178: 让 Agent 发送 Telegram 内联按钮并接收结构化回调响应](https://github.com/moltis-org/moltis/issues/1178)** — 用户希望 Agent 能主动向用户发送 Telegram 内联按钮并在用户点击时收到结构化回调数据。这一需求说明社区用户已不满足于纯文本对话，希望构建可交互的对话界面，呼应了此前 Slack 通道的互动能力建设方向。

- **[Issue #1177: Vault 解锁/恢复端点的认证缺失（CWE-306）](https://github.com/moltis-org/moltis/issues/1177)** — 安全类报告，指出 Vault 解锁/恢复接口缺少必要的认证。

尽管新 Issue 尚无社区回应与讨论，但结合 PR #1170 对权限隔离的重构，**安全加固已经成为近期的显著开发主题**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 🔴 高 | [Issue #1177](https://github.com/moltis-org/moltis/issues/1177) | Vault 解锁/恢复端点缺失认证（CWE-306，即"关键功能缺少认证"），可能允许未授权访问凭据。同时该 Issue 似乎未附带完整的复现信息，实际攻击面有待进一步确认。 | 待确认，暂无对应 fix PR |

今日暂无其他崩溃或回归类 Bug 报告。

---

## 6. 功能请求与路线图信号

- **[Issue #1178: Telegram 内联按钮 + 结构化回调](https://github.com/moltis-org/moltis/issues/1178)** — 该需求与已合并的 Slack 确认反应/Block Kit 功能（#1166）在定位上高度同构，都是构建**交互式消息界面**能力。考虑到 #1166 刚合并且相关基建已就绪，Telegram 内联按钮被纳入下一版本的可能性**较高**。

- **[PR #1174: 插桩与反馈收集基础设施](https://github.com/moltis-org/moltis/pull/1174)** — 虽然属于基础设施，但"端用户反应反馈"（reaction feedback）功能直接服务于未来 UI 层交互设计，也为后续迭代提供了数据基础。

- **[PR #1176: Web 端 Markdown 保存与会话导出](https://github.com/moltis-org/moltis/pull/1176)** — 偏向生产力工具的诉求，此类功能对日常使用者价值显著，合并概率较高。

---

## 7. 用户反馈摘要

当前 Issues 均为新开条目，暂无用户间讨论与评论可供提炼。从 Issue 本身来看：

- **正向信号**：用户对 Moltis 的能力预期已超越基础聊天，开始围绕 Telegram 等渠道的**交互式 UI**（按钮、结构化回调）提出需求——说明项目在实际使用中展现了足够的稳定性，让用户有底气在此基础上追求更丰富的交互体验。
- **潜在痛点**：Issue #1177（认证缺失）暗示有用户或审计人员在安全审查层面深入测试了 Vault 功能，但报告中未包含完整的复现细节，这类不完整的 Bug 报告可能在维护者需要更多上下文时产生沟通成本。

⚠️ 部分 PR（#1174、#1170）的评论数为 `undefined`，可能因数据采集问题导致，建议核实 GitHub 上实际讨论情况。

---

## 8. 待处理积压

- **[Issue #1177](https://github.com/moltis-org/moltis/issues/1177)** — 今日新开的安全漏洞报告，虽未被"长期搁置"，但考虑到 CWE-306 的严重性，建议优先处理，尽快确认漏洞影响范围并安排修复。

- **[Issue #1178](https://github.com/moltis-org/moltis/issues/1178)** — 今日新增、响应较快的功能请求，鉴于与 #1166 的方向一致性，可考虑与维护者讨论排期。

- **[PR #1170](https://github.com/moltis-org/moltis/pull/1170)** — 已开放 5 天且连续更新中，属于安全加固关键 PR，建议在下一轮审查中优先处理，避免安全修复长时间停留于待合并状态。

- **[PR #1174](https://github.com/moltis-org/moltis/pull/1174)** — 已开放 4 天，代码量可能较大（涵盖插桩、导出、反馈多个子系统），建议拆分审查或明确合并计划，防止大型 PR 长期积压导致合并成本升高。

---

*本报告基于 2026-07-31 00:00 UTC 数据生成，数据覆盖过去 24 小时。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-07-31

> CoPaw (github.com/agentscope-ai/CoPaw) | 数据窗口: 2026-07-30 ~ 2026-07-31


## 今日速览

项目处于**高活跃度**状态：过去24小时共发生 63 次 Issue/PR 更新，其中 PR 更新达 43 条（合并/关闭 21 条），合入效率保持稳定。值得关注的是，当前有 **3 个高优先级 Bug 已有关联修复 PR 在审**（#6555 记忆丢失、#6557 MCP 工具名非法、#6588 spawn_subagent 参数校验），且 #6524 MCP 会话恢复问题已提交修复方案。但 **v2.0 性能回退问题（#6307）社区反响强烈且尚无明确修复计划**，是当前项目健康度的最大隐患。昨日无新版本发布。


## 项目进展

今日共合并/关闭 21 条 PR，关键进展包括：

**重大功能合入：**
- [#6424 [merged] feat(computer-use): native desktop GUI automation for Windows and macOS](https://github.com/agentscope-ai/QwenPaw/pull/6424) — 计算机使用（Computer Use）功能的原生桌面自动化能力正式合入，支持 Windows/macOS 双平台、无障碍优先 + Tauri 控制模式
- [#6556 [merged] feat(creator): creation checkpoints, home redesign, media recovery, export/import, and bilingual guide](https://github.com/agentscope-ai/QwenPaw/pull/6556) — Creator 插件迎来重大迭代：新增创作检查点、首页改版、媒体恢复、导入/导出和双语指南
- [#6486 [merged] fix(matrix): probe vodozemac E2EE backend](https://github.com/agentscope-ai/QwenPaw/pull/6486) — 修复 Python 3.12 下 Matrix 端到端加密不可用的问题（合入后 #6476 关闭）

**关键修复合入：**
- [#6590 [merged] fix(computer-use): reuse desktop identity on macOS](https://github.com/agentscope-ai/QwenPaw/pull/6590) — 修复 macOS 屏幕录制权限归属问题
- [#6582 [merged] fix(sandbox): fix sandbox cleanup handling](https://github.com/agentscope-ai/QwenPaw/pull/6582) — 修复沙箱清理逻辑
- [#6562 [closed] Fix Bug #6533, #6506 (+ 1 more)](https://github.com/agentscope-ai/QwenPaw/pull/6562) — 首次贡献者提交，修复 `/mission` 命令 TypeError 等三个 Bug

**合入后关闭的对应 Issue：** #6533、#6506、#6476、#6250


## 社区热点

**1. [#6307 [OPEN] v2.0 引入 ~2s 固定性能开销（7 评论）](https://github.com/agentscope-ai/QwenPaw/issues/6307)**
社区最关注的性能回退问题。用户从 v1.x 升级到 v2.0 后，每个简单对话回复都增加约 2 秒固定延迟，与模型响应时间无关。该问题创建于 7 月 21 日，已持续 10 天，**尚无修复 PR 关联**，社区耐心正在消耗。

**2. [#6563 [CLOSED] CI bug: 'Real behavior proof' workflow 阻塞所有 fork PR](https://github.com/agentscope-ai/QwenPaw/issues/6563)**
所有来自 fork 的 PR 都会因 `real-behavior-proof.yml` 工作流报 `Resource not accessible` 而无法通过 CI，**直接阻塞了所有外部贡献者**。已关闭说明有临时解决方案，但根本性修复待确认。

**3. [#6524 [OPEN] MCP 后端重启后客户端无法自动恢复（5 评论）](https://github.com/agentscope-ai/QwenPaw/issues/6524)**
生产环境关键问题：MCP Server 重启后客户端仍复用旧 session ID，导致工具查询失败，需手动执行 `list mcp` 才能恢复。该问题已关联 PR #6586（fix(mcp): recover stale server sessions），正在审查中。


## Bug 与稳定性

按严重程度排列：

**🔴 严重（核心功能受损）：**

1. **#6307 v2.0 ~2s 固定性能开销** — 每个简单回复增加 2 秒延迟，影响所有用户。[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | ⚠️ 无修复 PR
2. **#6555 Dream/记忆压缩丢失早期会话事件** — 上下文滚动出活跃窗口后，早期操作信息永久丢失，不会写入当天的记忆文件。[#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | 🔧 已有 PR [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) 修复中
3. **#6524 MCP 会话重启后无法自动恢复** — 复用失效 session ID，需手动干预。[#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | 🔧 已有 PR [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586) 修复中

**🟡 中等（特定场景受影响）：**

4. **#6589 `execute_shell_command` 大量输出导致 UI 冻结** — 数万行 stdout 一次性渲染，阻塞 UI 主线程需要强制关闭。[#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | ⚠️ 无修复 PR
5. **#6512 `execute_shell_command` 大输出截断（>30KB）** — 输出内容被截断，有时触发 `Internal error`。[#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | ⚠️ 无修复 PR
6. **#6557 MCP 工具名以连字符开头导致 LLM API 返回 400** — 工具名如 `-MCP__get_consensus_forecast` 违反 OpenAI Function Calling 规范。[#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) | 🔧 已有 PR [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) 修复中
7. **#6588 `spawn_subagent` 单任务模式不可用** — `batch` 被错误暴露为必填参数，导致无法创建前台单子代理。[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 🔧 已有 PR [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) 修复中

**🟢 低（体验问题）**

8. **#6559 主会话意外分叉，会话列表混乱** — 分叉会话平铺展示，无父子分组。[#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) | ⚠️ 无修复 PR
9. **#6506 子会话不继承审批级别设置** — 父会话设为 OFF 后子会话仍提示审批。已关闭 ✅


## 功能请求与路线图信号

**可能纳入下一版本（已有对应 PR）：**

| 功能请求 | 关联 PR | 状态 |
|---------|---------|------|
| [#6453 中文文件名在提示中保持中文](https://github.com/agentscope-ai/QwenPaw/issues/6453) | [#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567) | 审查中 |
| [#6578 Cron 任务 `dispatch.mode: "final"` 未生效](https://github.com/agentscope-ai/QwenPaw/issues/6578) | — | Issue 已关闭，修复方案待确认 |

**值得关注的新方向：**

- [#6571 [Feature] 支持工作流/强逻辑流程](https://github.com/agentscope-ai/QwenPaw/issues/6571) — 用户提出类似 Dify 的工作流能力，解决基于权限结果做强逻辑判断的安全诉求。该需求涉及 Agent 架构核心，短期可能不会实现，但代表企业对安全可控 Agent 的明确需求
- [#6593 [Feature] 增加统一且专业的清理页面](https://github.com/agentscope-ai/QwenPaw/issues/6593) — 长期使用后数据臃肿、存储膨胀，用户需要全局化的数据清理页面和自动化清理策略。属于体验完善类需求


## 用户反馈摘要

**高频痛点：**
- **性能回退是升级最大阻碍**：#6307 的 2 秒固定开销让用户对 v2.0 升级产生犹豫。评论中至少 7 人确认遇到相同问题。
- **长输出处理是核心体验短板**：两个独立 Issue（#6512、#6589）都指向 `execute_shell_command` 大量输出的处理问题。用户 feng183043996 提供了详细的复现步骤：运行股票分析脚本生成 15k+ 字符报告时输出被截断。
- **文件名的中文处理不友好**：Windows 用户上传中文文件名后被替换为不可识别的 UUID 前缀，提示信息过长且不友好（#6453）。
- **MCP 生态集成稳定性待提升**：#6524（会话恢复）和 #6557（非法工具名）反映 MCP 集成在生产环境中仍不够"健壮"。

**满意之处：**
- 用户 abo123456789 在 #6585 中表示"非常不错的项目"，整体对产品认可度较高
- Matrix E2EE 加密问题（#6476）在合入修复 PR 后迅速关闭，社区看到问题响应速度良好


## 待处理积压

需要维护者关注的重要事项：

1. **#6307 [性能] v2.0 ~2s 固定开销（10天未关闭）**
   社区关注度最高的 Issue，无修复 PR 关联，可能成为影响 v2.0 声誉的关键问题。
   [GitHub Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)

2. **#6563 [CI] fork PR 被 `real-behavior-proof.yml` 阻塞**
   已关闭但根本问题是否真正解决存疑。"Works for me"式的关闭可能掩盖了真正的 CI 配置缺陷。
   [GitHub Issue #6563](https://github.com/agentscope-ai/QwenPaw/issues/6563)

3. **#6512 [功能] `execute_shell_command` 大输出截断**
   7 月 28 日创建，已有 2 条评论但无维护者回复，与 #6589 同根同源。
   [GitHub Issue #6512](https://github.com/agentscope-ai/QwenPaw/issues/6512)

4. **#6571 [功能] 工作流/强逻辑流程支持**
   无任何维护者回复。该需求涉及权限安全管控，对于企业用户是刚需，建议至少给出 Roadmap 回应。
   [GitHub Issue #6571](https://github.com/agentscope-ai/QwenPaw/issues/6571)

---

*报告生成时间: 2026-07-31 | 数据来源: github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**日期：2026-07-31** | **数据来源：github.com/qhkm/zeptoclaw**


## 1. 今日速览

ZeptoClaw 项目在过去 24 小时内活跃度处于**中低水平**：无新 Issue 产生与关闭，无新版本发布，但有一项重要 PR（#645）正处于待合并状态，该项目聚焦于运行时安全加固，直指凭据泄露与子进程残留两大隐患。整体来看，项目处于**稳定维护期**，没有明显的新功能涌入或社区反馈波动，但安全层面的修复值得重点跟进。核心仓库的健康度良好，当前待处理事项集中在少量高价值 PR 上。


## 2. 版本发布

过去 24 小时内无新版本发布。建议关注 PR #645 的合并状态，其合入后很可能触发一次 patch 版本（如 v0.x.y+1）的发布。


## 3. 项目进展

### 今日关键 PR（待合并）

**[#645] fix(runtime): scrub subprocess secrets and reap timed-out process trees**
- **作者：** qhkm | **创建：** 2026-07-23 | **最后更新：** 2026-07-30
- **链接：** [qhkm/zeptoclaw PR #645](https://github.com/qhkm/zeptoclaw/pull/645)

**该 PR 解决两大安全问题：**

1. **凭据泄露风险修复（Scrub Subprocess Secrets）** ：此前运行时执行 shell 命令时会继承 ZeptoClaw 完整的进程环境变量，导致 provider API keys 和其他无关凭据**直接暴露**给模型编写的命令——这属于系统性安全缺陷。修复后将清理子进程环境，阻断凭据外泄路径。
2. **子进程生命周期管理修复（Reap Timed-out Process Trees）** ：此前运行超时后仅丢弃 `Command::output()` future，未一致性地终止并回收子进程树（含 Docker 容器场景），可能遗留僵尸进程和资源泄漏。修复后超时处理将包含完整的进程树清理。

**项目向前推进程度：** 上述修复若合入，ZeptoClaw 在**运行时隔离与资源管理**层面将迈出关键一步，显著降低多租户或不可信环境中的安全风险。从 PR 创建到更新跨越 7 天，说明作者在持续打磨方案，预计合入流程会较谨慎。


## 4. 社区热点

过去 24 小时无新 Issue 或评论产生。唯一活跃的 PR #645（评论数为 0，仍在讨论中）聚焦的是**安全加固**而非用户功能需求，社区暂无显著集中的讨论热点或诉求爆发点。


## 5. Bug 与稳定性

今日无新 Bug 报告。但 PR #645 所修复的内容中隐含以下既有问题（该 PR 即对应修复方案）：

| 严重程度 | 问题描述 | 状态 |
|---------|---------|------|
| 🔴 高 | Shell 命令子进程继承完整环境变量，**provider 凭据可能泄露**给模型编写的任意命令（含恶意命令场景） | 已有 fix PR #645，待合并 |
| 🟡 中 | 运行时超时后未终止/回收子进程树（含 Docker 容器），**可能导致资源泄漏与僵尸进程残留** | 已有 fix PR #645，待合并 |

以上问题暂未在 Issue 中单独登记，建议维护者在合并 PR #645 时同步创建 issue 记录存档，便于追踪。


## 6. 功能请求与路线图信号

今日无新的用户功能请求提交。值得关注的信号：

- PR #645 本身虽为修复，但其方向（进程环境隔离、生命周期管理）反映了项目在**安全沙箱与资源治理**上的持续投入，这一方向很可能延续至后续版本迭代。
- 结合项目近期无新 Release 的状态，推测下一版本的核心内容将围绕该 PR 展开（可能包含安全修复说明 + 可能的配置项变更）。


## 7. 用户反馈摘要

过去 24 小时无新的用户评论或 Issue 讨论产出。无新增痛点或满意度反馈可供提炼。建议持续跟踪 PR #645 合并后的使用反馈，特别是安全日志或资源占用方面的变化。


## 8. 待处理积压

### 需要关注的 PR

**[#645] fix(runtime): scrub subprocess secrets and reap timed-out process trees**
- 已等待 **8 天**（2026-07-23 创建，至今未合并），当前无评论、无 👍。
- **重要性：** 高——修复凭据泄露与资源回收两大安全问题。
- **建议：** 维护者尽快安排 review，确认环境变量清洗策略（黑名单/白名单）及 Docker 场景下的进程树终止逻辑后合并。长期搁置将拖延安全风险修复窗口。

### 反馈

今日无长期未响应的 Issue 积压（现有 Issue 列表为空）。建议维护者保持对 PR #645 的推进优先级，并考虑在合并后及时发布新版本以让用户受益。


## 项目健康度总结

| 维度 | 状态 | 说明 |
|------|------|------|
| 社区活跃度 | 🟡 稳定 | 无议题波动，短期安静 |
| 开发进度 | 🟢 正向 | 安全修复 PR 推进中，方向明确 |
| 安全性 | 🟠 待改进 | 凭据泄露风险尚未修复（但已有方案） |
| 维护响应性 | 🟢 良好 | 作者持续更新 PR（7-23 至 7-30 有更新）|

**核心建议：** 集中精力完成 PR #645 的审查与合并，并产出一个安全修复版本；同时建议将此次修复记录同步至 Release Notes 与安全公告，增强用户信任度。

---
*本日报由 AI 生成，数据截至 2026-07-31，基于 github.com/qhkm/zeptoclaw 公开信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-07-31

## 今日速览

ZeroClaw 在过去 24 小时保持高度活跃：共产生 14 条 Issues 更新和 50 条 PR 更新，但合并/关闭数量为 0，表明项目处于密集的评审与迭代阶段而非发布周期。安全领域动静最大——报告了 3 个安全相关 Bug（其中两个标注为 S0/S2 级），均有对应的修复 PR 在当天提交并等待合并。此外，本周有多个高风险的 RFC 类 Issue 持续活跃并获得了 maintainer 关注（标注 `needs-maintainer-review`），包括会话/记忆分离架构、OpenAI 兼容适配器、Gemini Live 实时语音通道等，说明项目在架构层面正经历重要的方向性讨论。CI 工具链和代码质量基础设施也有持续投入。整体来看，项目维护活跃但合并积压值得关注。


## 项目进展

> 今日无 PR 被合并或关闭，以下为已提交并等待合并的关键 PR。

**安全修复与加固**
- **#9410** [`fix(security): default command audit logging to disabled`](https://github.com/zeroclaw-labs/zeroclaw/pull/9410)（priority:p1）— 遵循已接受的安全诚实方向：将无效的命令审计设置默认为禁用、从示例配置中移除、并警告显式启用它的运维人员。修复 #9391。
- **#9569** [`fix(gateway): fail closed when a WhatsApp Cloud or Linq webhook cannot be verified`](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) — 直接修复 S0 级 Bug #9565：未配置密钥时不再跳过签名验证。
- **#9568** [`fix(security): match command allowlist entries case-insensitively on Unix`](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) — 修复回归 Bug #9566（源自 #4552），使含大写字母的 `allowed_commands` 条目可在 Unix 上匹配。

**运行时与 Agent 核心修复**
- **#8937** [`fix(agent): stream-hash tool args in loop_detector to avoid per-call deep clone`](https://github.com/zeroclaw-labs/zeroclaw/pull/8937) — 消除每次工具调用的深拷贝开销，优化 `LoopDetector::record` 的哈希路径（修复 #8936）。
- **#9325** [`fix(runtime): make streamed user turns read as conversation, not log payloads`](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) — 修复流式路径中用户消息被存储为裸时间戳日志行的问题，改善本地小模型（如 Ollama llama3.2）对对话上下文的读取。
- **#8928** [`feat(zerocode): show active resolved log path in Doctor diagnostics`](https://github.com/zeroclaw-labs/zeroclaw/pull/8928) — 在 Doctor 面板中展示当前生效的日志持久化路径，解决 #8650 并附带修复。

**Provider 兼容性改进**
- **#8943** [`fix(providers): exclude Nova 2 from Bedrock prompt caching`](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) — 修复 Nova 2 模型因 `cachePoint` 被拒（400）的问题（#8720）。
- **#8927** [`fix(providers): remove unconditional strip_think_tags from compatible provider`](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) — 修复 MiniMax 等上游在 `content` 中内联思维链时被误删的问题（#8615）。
- **#8953** [`fix(config): put Ollama endpoint in uri, not api_key, in dev templates`](https://github.com/zeroclaw-labs/zeroclaw/pull/8953) — 修复开发模板中 Ollama 端点被错误放入 `api_key` 字段的问题。
- **#8878** [`feat(providers): narrow per-model vision catalog parsing`](https://github.com/zeroclaw-labs/zeroclaw/pull/8878) — 补全 `modalities` 块解析，让 per-model 能力数据（如图像输入支持）可用（#8733 的 parser 部分）。

**渠道与配置**
- **#9571** [`chore(channels): remove the WATI channel`](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) — 移除 WATI 渠道模块及相关配置、路由、迁移、CI 条目。
- **#9567** [`feat(channel/email): address multiple To/Cc/Bcc recipients in one message`](https://github.com/zeroclaw-labs/zeroclaw/pull/9567) — 邮件渠道支持一信多收件人（#9506 的 CC/Reply-All 部分）。
- **#9311** [`feat(config): surface dangling peer_groups.*.channel refs as structured warnings`](https://github.com/zeroclaw-labs/zeroclaw/pull/9311) — 配置中 `peer_groups` 引用不存在的渠道时给出结构化警告（#8997）。

**Eval / 测试基础设施**
- **#9225** [`test(eval): seed regression suite from tracker failures`](https://github.com/zeroclaw-labs/zeroclaw/pull/9225) — 用闭环跟踪问题生成 18 个回归用例，扩大 CI 闸门覆盖面。
- **#9248** [`feat(eval): append-only run-history receipts`](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) — 新增 `[eval].history_dir` 选项，每次 eval 运行追加时间戳收据，便于趋势分析。
- **#9244** [`feat(eval): seed and grade isolated case memory`](https://github.com/zeroclaw-labs/zeroclaw/pull/9244) — 为 eval 用例添加结构化记忆种子和事后断言，使记忆行为可被精确验证。
- **#9211** [`ci(release): consolidate release attestations`](https://github.com/zeroclaw-labs/zeroclaw/pull/9211) — 将 GitHub artifact attestations 统一为唯一发布资产来源机制，同时生成 SBOM。

**其它功能**
- **#8688** [`feat(runtime): add trusted goal tools and delegation boundaries`](https://github.com/zeroclaw-labs/zeroclaw/pull/8688)（size:XL）— 新增仅在有作用域的可信目标准入上下文时注册的 `goal_start` / `goal_objective` / `goal_resume` 工具，并为 `ask_user` / `escalate_to_human` 增加目标感知的人类审批门。
- **#9126** [`feat(plugins): validate typed instance config`](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)（size:XL）— 要求插件声明封闭的 Draft 2020-12 `config_schema`，将字符串配置解析为类型化 JSON 并校验。
- **#8313** [`feat(skills): default to compact injection, deprecate full mode`](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) — 将紧凑技能注入设为默认，减少提示上下文占用，保留显式 `full` 模式的弃用窗口。


## 社区热点

**最高热度：RFC #9048 — ** [RFC: Separate conversation history from agent-curated long-term memory](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)
- **12 条评论**，横跨半个月仍保持活跃，且被标记为 high risk、needs-maintainer-review、no-stale。
- **诉求**：当前实现对会话历史和长期记忆的生命周期混用——在 Runtime、Gateway、channel autosave 代码路径中，都将对话轮次写入通用后端并标为 `MemoryCategory::Conversation`。社区希望从架构上区分两者，使会话历史按会话生命周期管理，而长期记忆由 agent 自主策展。
- **判断**：这是对核心数据模型的一次架构级建议，影响面大但讨论充分，若被采纳将改变记忆后端的组织方式。

**安全审查热点：Issue #9565 — ** [Bug: gateway webhook handlers do not fail closed (WhatsApp Cloud, Linq, WATI)](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)
- 严重度 **S0（数据丢失/安全风险）**，报告者通过源码审计确认三个入站 webhook handler 在未配置密钥时绕过签名验证。同批次的 PR #9569 在当天即提交修复，行动迅速。

**架构讨论活跃组**：以下 RFC 均获得 maintainer 关注且在持续更新：
- [#8603 OpenAI Chat Completions compatibility adapter](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（7 评论）
- [#8933 Add cross-turn conversation correlation to OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)（7 评论）
- [#8780 Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)（5 评论）
- [#8568 Mixture-of-Agents (MoA) virtual model provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)（4 评论）


## Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| **S0** 数据丢失/安全风险 | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Gateway 三个 webhook handler（WhatsApp Cloud、Linq、WATI）在未配置密钥时跳过签名验证，直接处理攻击者可控消息 | ✅ [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569)（待合并） |
| **S2** 降级行为 | [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) | `allowed_commands` 条目含大写字母时在 Unix 永远无法匹配，命令被静默拒绝（#4552 回归） | ✅ [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568)（待合并） |
| **S2** 降级行为 | [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | Debug 构建下 dashboard WebSocket 处理 agent 回合时 Tokio worker 线程栈溢出，进程偶发中止 | ❌ 暂无 |
| **S3** 次要问题 | [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) | Rust 1.96 下 `cargo test --doc` 因 rustdoc 默认主题参数重复而失败 | ❌ 暂无（`in-progress`） |

**分析**：安全相关的 S0/S1 在当天报告、当天即有 PR 修复，响应速度快。但值得关注的是 S0 问题已在 7 月 30 日报告而 PR #9569 同日提交，目前尚在等待合并——考虑到该问题涉及"未认证即可投递消息到 agent"，建议尽快合并。另外 WATI 渠道正处于移除流程中（PR #9571），相关 webhook 修复可能只是过渡措施。


## 功能请求与路线图信号

| Issue | 状态 | 说明 |
|-------|------|------|
| [#8603 OpenAI Chat Completions 兼容适配器](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | `needs-maintainer-review` | 让 Open WebUI、LobeChat 等客户端可直接连接 ZeroClaw。属于生态接入关键能力，已讨论近一个月 |
| [#8780 Gemini Live 实时语音通道](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | `needs-maintainer-review` | 以模型为对话大脑的实时多模态音视频通道，先支持 Gemini Live，采用后端无关设计 |
| [#8568 Mixture-of-Agents (MoA) 虚拟模型 Provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | `needs-maintainer-review` | 聚合器/评判模型 + 并行参考模型的多模型协作模式 |
| [#8933 OTel 跨回合会话关联](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | `needs-maintainer-review` | 在 OpenTelemetry 导出中携带会话 ID，作为 `gen_ai.conversation.id`，提升可观测性 |
| [#9048 会话历史与长期记忆分离](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | `needs-maintainer-review` | 架构级建议：从实现上分离会话历史与 agent 策展的长期记忆 |
| [#5287 本地小模型运行时 profile](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | `accepted`，👍 2 | 定义紧凑本地模型模式：减少提示膨胀、禁用宽松回退解析、防止内部指令泄露到用户可见输出 |
| [#7951 基于任务难度的本地/云端路由](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | `accepted` | 简单/低延迟回合留在本地模型，困难任务升级到云端模型 |
| [#9345 PR 风险/规模标签自动重算](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | `accepted` | PR diff 更新时自动重算 `size:*` 和 `risk:*` 标签，保留维护者覆盖 |

**路线图判断**：`needs-maintainer-review` 且持续活跃的 5 个 RFC（#8603、#8780、#8568、#8933、#9048）代表社区最集中的架构诉求——互操作性、实时多模态、可观测性、数据模型清晰化，建议在下一版本周期优先排期。`accepted` 状态的 #5287、#7951、#9345 已获官方认可，有望较快进入开发计划。


## 用户反馈摘要

- **本地小模型用户痛点**（来自 #9325 修复描述）：`llama3.2` 模型会把流式用户消息读成日志/API 输出，回复协议注释而非正常对话。这是本地优先场景的直接体验障碍。
- **安全默认值诉求**（来自 #9410）：社区对"命令审计默认开启但实际无效"表示不满，期望默认关闭、显式启用时警告，符合安全诚实原则。
- **开发者体验**（来自 #8650）：运维人员需要离开 ZeroCode 或猜测配置路径才能找到日志文件位置，Doctor 面板应直接展示解析后的日志路径。
- **WebChat 可用性**（#9562）：流式输出期间自动滚动覆盖用户手动滚动，无法阅读历史消息。用户引用了 openclaw 的同类 PR/issue 作参照。
- **社区期待**：多个 RFC（OpenAI 兼容层、Gemini Live、MoA）反映用户希望将 ZeroClaw 接入到更广泛的生态工具（Open WebUI、LobeChat）和新型交互方式中，而非仅限于自有 WebSocket/webhook 协议。


## 待处理积压

**长期未关闭的 PR（超 3 周仍在等待处理）：**
- [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) `feat(runtime): add trusted goal tools and delegation boundaries`（size:XL，创建于 7 月 4 日，已 27 天）— 目标工具与人类审批门，涉及安全语义，需维护者尽快评审
- [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) `feat(skills): default to compact injection, deprecate full mode`（创建于 6 月 25 日，已 36 天）— 默认配置变更，影响所有用户，需明确弃用路径后决策
- [#8878](https://github.com/zeroclaw-labs/zeroclaw/pull/8878)、[#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927)、[#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943)、[#8953](https://github.com/zeroclaw-labs/zeroclaw/pull/8953) — 4 个 provider 修复均标记 `needs-author-action`，部分等待作者回应或修改变更

**长期活跃的 RFC 等待决策：**
- [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) 会话历史与长期记忆分离 — 已讨论 17 天、12 条评论，架构影响大，建议尽快安排 maintainer 评审
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) OpenAI 兼容适配器 — 已讨论 29 天，生态接入关键需求

**高赞的已接受功能请求：**
- [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)（👍 2，已接受 118 天）— 本地小模型运行时 profile，虽已接受但 4 个月未进入实现阶段，用户耐心可能有限

---

*本报告基于 2026-07-31 的 GitHub 数据生成。所有链接指向 zeroclaw-labs/zeroclaw 仓库的对应 Issue/PR。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*