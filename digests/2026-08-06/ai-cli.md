# AI CLI 工具社区动态日报 2026-08-06

> 生成时间: 2026-08-06 02:41 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具横向对比分析报告

**报告日期：2026-08-06 | 分析师：AI 开发工具生态研究组**


## 一、生态全景

当前 AI CLI 工具已从"单点效率工具"全面进化为"可编程 Agent 运行时"——OpenAI Codex 的 Multi-Agent V2、DeepSeek TUI 的 Runtime API 系列端点、OpenCode V2 的 Workspace 架构共同指向同一方向：CLI 正在成为 IDE、Web 与自动化工作流共享的 Agent 执行内核。与此同时，各工具的社区反馈高度集中在三个共性领域：**MCP 生态稳定性**（参数丢失、协议兼容、OAuth 令牌刷新）、**模型行为可观测性**（路由不透明、系统提示词注入、用量误计）、**跨平台/终端兼容性**（Windows 崩溃、tmux 闪烁、alt-screen 问题）。安全方面，Claude Code 的 hook fail-closed 修复、Qwen Code 的只读 Shell 绕过漏洞、Kimi 的文件损坏 Bug，共同提示工具链进入"安全加固期"。整体判断：**能力竞争让位于可靠性竞争，平台化 vs 工具化的路线分歧正在固化。**


## 二、各工具活跃度对比

| 工具 | 今日活跃 Issues | 今日活跃 PRs | 版本发布 | 关键版本号 |
|------|:---:|:---:|:---:|------|
| **Claude Code** | 50（精选10） | 5 | 1 个稳定版 | v2.1.223 |
| **OpenAI Codex** | ~12 | 10 | 6 个（1 稳定 + 5 alpha） | rust-v0.146.1 |
| **Gemini CLI** | 10 | 10 | 3 个（1 稳定 + 1 预览 + 1 夜间） | v0.54.0 |
| **GitHub Copilot CLI** | ~10 | 0（24h 内无更新） | 4 个（全为补丁） | v1.0.79-5 |
| **Kimi Code CLI** | 3 | 3 | — | — |
| **OpenCode** | 10 | 10 | 1 个 | v1.18.14 |
| **Pi** | 10（50 总更新） | 10（37 总更新） | — | — |
| **Qwen Code** | 10 | 10 | 3 个（1 稳定 + 1 夜间 + 1 Desktop 首版） | v0.21.6 / desktop-v0.1.0 |
| **DeepSeek TUI** | 1（低活跃） | 10 | — | v0.9.4 发布列车整合中 |

> 注：Pi、DeepSeek TUI 为 24h 窗口数据；部分工具 Issue/PR 筛选强度不同，数据供横向参考。


## 三、共同关注的功能方向

| 趋势 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **MCP 生态成熟度** | OpenAI Codex、Gemini CLI、Copilot CLI、OpenCode、Claude Code | ① **OAuth 令牌刷新失败**（Gemini #28481、Copilot #4371）；② **参数静默丢失**（Claude Code #72228/#84362，字段丢失率 6.2%）；③ **协议兼容性**（Copilot #4370 FastMCP 握手失败、OpenCode #8058 缺 HTTP Streamable 传输）；④ **配置 CRUD 标准化**（DeepSeek TUI #5130） |
| **模型行为可观测性** | Claude Code、Copilot CLI、OpenCode、Qwen Code | ① **系统提示词注入不透明**（Claude Code #84053 证据确凿）；② **模型路由/用量不透明**（Claude Code Fable 误计、Copilot #4377 委托链不可见、OpenCode #39845 突然要求 opt-in）；③ **推理内容/状态显示不一致**（OpenCode #12523、Copilot #3135 状态行显示矛盾） |
| **上下文管理与长会话** | Gemini CLI、Pi、Claude Code、Kimi | ① **自动压缩触发不可靠**（Pi #6879 超限 100% 仍不触发）；② **压缩时独立控制思考预算/模型**（Pi #7553）；③ **跨会话持久记忆系统**（Kimi #1283 讨论近半年）；④ **会话链接/存档可移植性**（Claude Code #66504 获 46 👍） |
| **终端兼容性与 UI 体验** | Qwen Code、Copilot CLI、Claude Code、OpenCode、DeepSeek TUI | ① **Windows 稳定性**（Copilot #4026 跨版本崩溃、Qwen Code #8615 启动即崩）；② **tmux/终端闪烁**（Qwen Code #8580、Pi #7465）；③ **滚轮/alt-screen 交互回归**（DeepSeek #5234、Copilot #1799）；④ **旧布局保留诉求**（OpenCode #37012 获 38 👍） |
| **安全与权限模型** | Claude Code、Qwen Code、Gemini CLI、OpenCode | ① **hook/分类器 fail-closed**（Claude Code #84364、Qwen Code #8582 只读 Shell 可绕过）；② **代理/PAT 权限穿透**（Claude Code #76248）；③ **密钥/凭据泄露防护**（Qwen Code #8136 密码泄露）；④ **策略配置灵活性**（Gemini #19979 TOML→CUELang） |
| **多代理/子代理互操作性** | OpenAI Codex、DeepSeek TUI | ① **跨提供商任务分发协议中立化**（Codex #33551/#34833：OpenAI 专有 `agent_message` 致 Ollama/DeepSeek 无法解析）；② **子代理断点续跑**（DeepSeek #5242） |


## 四、差异化定位分析

| 工具 | 定位 | 技术路线 | 目标用户 |
|------|------|---------|---------|
| **Claude Code** | 全功能 AI 结对编程与自动化平台 | 深度集成 Anthropic 模型能力，MCP+Skills+Marketplace 生态，所有权成熟 | 专业开发者/团队，重需求有完善治理需求（hook、策略、市场管理） |
| **OpenAI Codex** | Agent 运行时与基础设施 | 多代理编排（Multi-Agent V2），rollout/状态管理，Guardian 安全策略 | 采用 OpenAI 模型的开发者，需要高自主性与审计能力 |
| **Gemini CLI** | 轻量级多模型 CLI | 深度绑定 Google AI 生态（Gemini 模型、Cloud），主导 ACP 协议 | Google 生态开发者，追求轻量与模型选择自由 |
| **GitHub Copilot CLI** | 企业级 GitHub 生态入口 | 深度绑定 GitHub 平台（仓库、Actions、Codespaces），统一配置治理 | GitHub 企业用户，重视合规与审计 |
| **Kimi Code CLI** | 务实型轻量 Agent | 极简功能集，快速修复反馈循环，ACP 兼容 | 个人开发者，追求快速上手与低摩擦 |
| **OpenCode** | 开源可自托管的多提供商平台 | V2 架构（Workspace 作为持久执行环境），社区驱动 | 开源社区与自部署用户，重视模型选择自由与透明 |
| **Pi** | 终端体验极致的个人 Agent | 跨提供商，WASM，注重终端兼容性/扩展生态 | 终端重度用户与独立开发者 |
| **Qwen Code** | 阿里云模型优先的全栈工具 | Desktop（Tauri）、WebShell、Live Voice、多渠道；支持 Qwen 模型与第三方 | 中文开发者、阿里云生态用户，多模态场景 |
| **DeepSeek TUI** | Agent 运行时平台（TUI 为前端的开放服务） | Runtime API 优先（内存/目标/技能/验证器全面 API 化），ACP 深度集成 | 构建 Agent 工具链的开发者，偏好 TUI 轻量前端 |


## 五、社区热度与成熟度

| 工具 | 热度评估 | 特征 |
|------|---------|------|
| **Claude Code** | ★★★★★ 最活跃 | Issue 讨论密度高（单日 50 条）、高 👍 议题多（#66504 获 46）、生态（Plugins+Marketplace）扩张快，社区情绪以"高期望伴随不满"为主 |
| **OpenAI Codex** | ★★★★★ 活跃 | alpha 版本一日 5 发（迭代激进），Issue 同步涌入（Multi-Agent 互操作为焦点），高 👍 需求累积中（#2909 获 143） |
| **Gemini CLI** | ★★★★ 稳健 | 迁移 Antigravity 争议持续但社区参与度高，PR 合入节奏稳定，issue 数稳定 |
| **Copilot CLI** | ★★★★ 企业向 | Issue 数量适中，但高价值问题集中（MCP + Windows + BYOK），PR 24h 内几乎为 0，社区响应节奏偏慢（多 issue 进 triage 无回应） |
| **Qwen Code** | ★★★★ 上升期 | 安全议题驱动高关注（P1 漏洞），Desktop 首版吸引新用户群，CI 稳定性问题引发讨论；社区活跃度在中文与英文用户间分布均匀 |
| **OpenCode** | ★★★★ 社区驱动 | V2 重构加速中（PR 密集合并），但 `/sessions` 回退印证迁移阵痛；高 👍 需求（#11176 获 134）等待兑现 |
| **Pi** | ★★★ 中等 | Issue 更新稳定，集中在细节打磨（XDG、模型排序），社区规模偏小但参与质量高 |
| **DeepSeek TUI** | ★★ 低活跃但高质量 | 24h 仅 1 条 Issue 更新，但 10 个 PR + 1 个发布列车意味着开发活跃；为代码贡献替代反馈的文化，"低讨论高产出" |
| **Kimi Code CLI** | ★★ 早期 | Issue/PR 数量少，但修复响应快（#2592 当日提交），重大缺陷暴露早期阶段 |


## 六、值得关注的趋势信号

**① 多代理互操作协议标准化成为"卡脖子"问题**
OpenAI Codex 的专有 `agent_message` 被 Ollama、DeepSeek 等外部提供商拒绝（#33551/#34833），提示行业缺乏中立的多代理通信标准。开发者若构建多提供商混合架构，应警惕"事实标准"（OpenAI Responses API）锁定风险。Gemini/DeepSeek 主导的 ACP 提供了另一条去中心化路径，值得关注其采纳率。

**② MCP 进入"信任危机"与"重建期"并存的阶段**
一边是参数静默丢失（Claude Code 6.2% 字段丢失率、Kimi 文件损坏），一边是各工具密集修复 OAuth/重连/协议兼容（Gemini #28481、OpenCode #40768/#40769、Qwen #8445）。MCP 已成为行业事实标准，但其可靠性/安全性仍需系统性加固。工具链建设者在依赖 MCP 时，应主动增加参数校验与失败显式化。

**③ 模型行为透明化成为社区共识性诉求**
Claude Code（Opus 5 系统提示词注入证据）、Copilot CLI（委托链不可见）、OpenCode（模型路由不透明）多起 Issue 共同指向：**用户拒绝为"黑盒模型行为"付费**。系统提示词注入可观测/可禁用、委托链可视化、用量误计修正，将成为未来 12 个月各工具差异化的焦点。

**④ "只读模式"安全边界应视为高危攻击面**
Qwen Code 的只读 Shell 绕过（命令替换）与 Claude Code 的 hook 异常放行（fail-open）揭示同类漏洞模式：**安全门控逻辑在异常/边缘输入下失效**。任何实现"只读/沙箱/护栏"的工具，都应引入对抗性测试（命令注入、转义、超长参数）作为 CI 常规步骤。

**⑤ "Agent 运行时平台化"与"轻量 CLI"两个方向分化加速**
上游：OpenCode V2 Workspace 架构、DeepSeek TUI Runtime API 化、Codex 多代理编排 → 以"平台/服务"形态向外输出能力。下游：Kimi 的克制功能集、Pi 的终端体验极致化 → 以"轻量个人工具"守住体验阵地。两条路线各有忠实用户群，短中期内难分胜负。

**⑥ 中文开发者社区与贡献力成为不可忽视力量**
Qwen Code 驱动中文用户深度参与（含 issue 排查），DeepSeek TUI 中文新手指南与 Windows 实测贡献，OpenCode 瑞典语翻译等社区 i18n 扩展。对工具团队而言，**非英语母语用户的本地化与文档/社区支持，正成为提升生态粘性的高性价比投入**。

**⑦ Windows 支持是"体验分水岭"**
Copilot CLI（#4026）、Qwen Desktop（#8615）、Claude Desktop（#83403/#83744）在 Windows 上的稳定性问题久拖未决，而 Windows 是 Pro/Plus 订阅主力环境。工具链若未实现 Windows 一等公民体验，将在企业客户争夺中持续失分。

**⑧ 安全修复获得社区高认可，应继续投入**
Claude Code hook fail-closed 修复（#84364）、Codex Guardian 熔断（#37190）、Gemini 的 OAuth 安全修复均获好评，且属于"防守型"PR。开发者信任的建立，不仅靠新功能发布速度，更靠**对既有功能的可靠性承诺**。


*本报告基于 2026-08-06 各工具 GitHub 公开数据，由 AI 技术分析与横向研判自动生成。数据源：[anthropics/claude-code](https://github.com/anthropics/claude-code)、[openai/codex](https://github.com/openai/codex)、[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)、[github/copilot-cli](https://github.com/github/copilot-cli)、[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)、[anomalyco/opencode](https://github.com/anomalyco/opencode)、[badlogic/pi-mono](https://github.com/badlogic/pi-mono)、[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)、[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)。*

*用途提示：本报告适用于技术选型评估、工具链路线规划与开发者社区生态观察，决策时建议结合团队实际场景交叉验证。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-06）

---

## 1. 热门 Skills 排行

以下为评论/关注度最高的 PR，代表了社区当前最集中的开发方向。

| 排行 | Skill / PR | 功能 | 社区关注点 | 状态 |
|---|---|---|---|---|
| 1 | **[fix(skill-creator): run_eval.py 修复](https://github.com/anthropics/skills/pull/1298)** | 修复 skill-creator 评估脚本始终报告 recall=0% 的致命 bug（Windows 流读取、触发检测、并行 worker 等问题） | 该 eval bug 已有多达 10+ 独立复现（见 #556），导致描述优化循环对噪声优化，严重阻碍 skill 迭代流程 | Open |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | AI 生成文档的排版质量控制——孤立单词换行、寡妇段落（标题孤悬页底）、编号错位 | 社区普遍认可 AI 生成文档普遍存在此类排版问题，是高频刚需场景 | Open |
| 3 | **[pdf: 修复文件引用大小写](https://github.com/anthropics/skills/pull/538)** | 修复 `skills/pdf/SKILL.md` 中 8 处大小写不匹配（`REFERENCE.md`→`reference.md`），在大小写敏感文件系统上会导致技能加载失败 | 虽为修 bug 而非新 skill，但暴露了官方仓库文件命名规范问题，获得持续关注 | Open |
| 4 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument 文本创建、模板填充及 ODT→HTML 转换 | 填补了 LibreOffice/开源文档生态的空白，同时覆盖 `.odt` 和 `.ods` 格式，触发词覆盖全面 | Open |
| 5 | **[frontend-design 改进](https://github.com/anthropics/skills/pull/210)** | 让前端设计 skill 更具可操作性和内部一致性，确保每条指令 Claude 在单次对话中可执行 | 强调 skill 指令可执行性的方法论讨论，对 skill 编写范式有参考价值 | Open |
| 6 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 两个元技能——质量分析（结构/文档/示例/资源/安全性五维评估）和安全分析 | 社区首次提出"元技能"概念，即对 skill 本身的审查工具，与 #492 安全议题形成呼应 | Open |
| 7 | **[self-audit](https://github.com/anthropics/skills/pull/1367)** | 交付前审计技能——先做机械文件验证，再按破坏严重性优先级执行四维推理审计 | 将"推理质量门控"从方法论文案落地为可操作技能，与 #1385 提案形成体系 | Open |
| 8 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 全栈测试模式覆盖——测试哲学（Testing Trophy）、单元测试（AAA）、React 组件测试、边界场景 | 社区对测试方向的强需求信号，覆盖面广且方法论完整，是近期最有潜力合入的技能之一 | Open |
| 9 | **[pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525)** | 基于 pyxel-mcp 的复古/像素/8-bit 游戏开发工作流（写→运行→截图→迭代） | 拓展了 skill 生态到游戏开发领域，展示 MCP+skill 结合范式 | Open |
| 10 | **[plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)** | 规划产物生命周期管理——防止规划文件无限累积 | 回应了 #1417 中社区明确指出的"规划工件无生命周期"痛点，由提案快速转化为正式 PR | Open |

> 注：以上 PR 全部处于 Open 状态，且为本轮数据中关注度最高的条目。

---

## 2. 社区需求趋势

从 Issues 中提炼的社区核心诉求方向：

**安全与信任边界（最高关注）**
- [#492](https://github.com/anthropics/skills/issues/492)（43 评论）：社区技能在 `anthropic/` 命名空间下分发构成信任边界滥用，用户可能误将社区技能视为官方技能授予权限。这是当前生态最尖锐的安全问题。

**组织级共享与协作**
- [#228](https://github.com/anthropics/skills/issues/228)（16 评论，8 👍，热度最高）：组织内技能共享，当前需手动下载/发送/上传，亟需共享库或直链分享。

**Meta-skills / 技能开发工具链**
- [#202](https://github.com/anthropics/skills/issues/202)：skill-creator 过于"教材化"而非"指令化"，影响 token 效率——反映社区对 skill 编写范式的反思。
- [#1329](https://github.com/anthropics/skills/issues/1329)：compact-memory 提案，用符号化表示精简 agent 长期记忆——长会话上下文管理的显性需求。

**平台集成需求**
- [#16](https://github.com/anthropics/skills/issues/16)：将 Skills 暴露为 MCP，统一软件 API 信号。
- [#29](https://github.com/anthropics/skills/issues/29)：AWS Bedrock 兼容性，显示企业用户的部署诉求。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、问题聚焦明确，预计近期落地可能性高：

| PR | 潜力分析 | 链接 |
|---|---|---|
| #1298 **skill-creator eval 修复** | 阻塞 skill 迭代的致命 bug，已有多方独立复现（#556、#1169 等），修复后直接盘活描述优化循环；同类 PR #1099、#1050、#1323、#1261 形成修复集群，说明维护方已有充分上下文 | [链接](https://github.com/anthropics/skills/pull/1298) |
| #1302 **color-expert** | 色彩专家技能（命名系统、色彩空间选择表、无障碍对比度），自包含性强，由 @meodai（知名色彩库作者）提交，技术权威性高，讨论持续活跃 | [链接](https://github.com/anthropics/skills/pull/1302) |
| #525 **pyxel 游戏开发** | 演示 MCP+Skill 组合模式的标杆案例，作者为 pyxel 及 pyxel-mcp 原作者（kitao），生态位独特，7 月仍在更新，说明有持续投入 | [链接](https://github.com/anthropics/skills/pull/525) |
| #1479 **plan-file-hygiene** | 直接回应社区明确痛点（#1417），由提案快速转化，讨论中作者积极寻求协作分工，合并意向明确 | [链接](https://github.com/anthropics/skills/pull/1479) |
| #1367 **self-audit** | 将推理质量门控落为实际操作指南，与 #1385 提案（三闸门管线）协同推进，方法论体系完整 | [链接](https://github.com/anthropics/skills/pull/1367) |

---

## 4. Skills 生态洞察

> **一句话总结**：当前社区最集中的诉求是——**让"技能开发本身"变得更可靠**（修复评估工具链 bug、完善元技能审查、强化安全信任边界），而**内容类技能（排版、测试、色彩、文档格式、游戏）则在快速涌现、等待合入通道畅通**；两者共同指向一个核心矛盾：**技能生产工具的成熟度远落后于技能消费需求**，这段"工具基建"追赶期将决定生态能否从个人实验走向组织级、平台级应用。

---

# Claude Code 社区动态日报 — 2026-08-06

> 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)


## 今日速览

今日发布 v2.1.223，引入 `owner/*` 通配符支持，用于批量允许/屏蔽 GitHub 组织下的全部 marketplace 仓库，同时新增工作流代理与 fork 技能的行为告警。社区讨论焦点集中在三大方向：Cowork/Cloud 会话 Git 代理权限收紧引发广泛吐槽（#76248，#66504 要求会话链接改为 opt-in 获 46 👍）；模型行为争议持续发酵（Opus 4.8 语言风格、Opus 5 推理质量、Fable 5 用量误计等）；以及一批 MCP 参数静默丢失、工具调用解析缺陷等可靠性问题。PR 侧修复了 pretooluse hook 异常时“放行”的安全漏洞，并改进了 code-review 的 `--comment` 标志行为。


## 版本发布

### v2.1.223

**主要变更：**
- **Marketplace 管理增强**：`strictKnownMarketplaces` 与 `blockedMarketplaces` 支持 `"owner/*"` 通配符条目，可批量允许或屏蔽 GitHub 组织下的全部 marketplace 仓库
- **新增告警**：当工作流代理（workflow agents）、fork 技能、斜杠命令或后台恢复任务被触发时，将显示提醒信息

> 来源：[anthropics/claude-code Releases](https://github.com/anthropics/claude-code/releases)


## 社区热点 Issues

> 以下为从今日活跃的 50 条 Issue 中精选的 10 条，综合考虑讨论热度、👍 数及对社区的影响面。

### 1. Session URL 默认附加到 commit/PR 描述 — 应当 opt-in
**#66504** | 作者: joka-7 | 评论: 12 | 👍: 46  
**链接**: https://github.com/anthropics/claude-code/issues/66504

**摘要**：每次提交和 PR 描述中默认附加 Session URL，用户认为应改为可选项。该 Issue 获得 46 个 👍，是当前社区呼声最高的功能请求之一，反映用户对隐私和工作流洁净度的关注。

**社区反应**：讨论活跃（12 条评论），多数赞同改为 opt-in，并建议通过配置项或环境变量控制。

---

### 2. Cowork/Cloud 会话：Git 代理阻断所有 push — PAT 透传失效
**#76248** | 作者: Loneplanet117 | 评论: 11 | 👍: 5  
**链接**: https://github.com/anthropics/claude-code/issues/76248

**摘要**：自 7 月 10 日起，Cowork/Cloud 远程会话无法 push 到“授权仓库集”之外的 GitHub 仓库，即使用户提供自己的 fine-grained PAT 也被拦截。会话中途行为变化，疑似 CCR_TEST_GITPROXY 灰度上线导致。

**社区反应**：多位用户确认复现，认为这是对远程协作工作流的严重破坏，要求提供显式授权机制或回退选项。

---

### 3. Opus 4.8 语言风格“toxic”/Opus 5 推理质量“incoherence”
**#77136** | 作者: pbower | 评论: 8 | 👍: 8  
**链接**: https://github.com/anthropics/claude-code/issues/77136

**摘要**：用户抱怨 Opus 4.8 的措辞风格令人不适，而 Opus 5.0 则在长对话中产生推理混乱。该反馈具有一定代表性，与多起模型行为相关 Issue 相互呼应。

**社区反应**：评论中多用户附议，认为模型的语言风格和长上下文稳定性需要系统改进，并建议提供风格/温度等调节选项。

---

### 4. Claude Desktop 5 小时使用上限后崩溃，需完全重装
**#83403** | 作者: medipalace | 评论: 7  
**链接**: https://github.com/anthropics/claude-code/issues/83403

**摘要**：Claude Desktop 在接近 5 小时使用限制时崩溃，之后无法重新打开，只能通过完全重装恢复。影响 Windows/macOS 用户，属高频阻断性问题。

**社区反应**：多位用户报告相同现象，并要求官方提供日志导出和修复方案；目前无官方回应。

---

### 5. `--continue` 无法找到 `-p` 创建的会话
**#82536** | 作者: not-stbenjam | 评论: 7  
**链接**: https://github.com/anthropics/claude-code/issues/82536

**摘要**：通过 `-p`（print 模式）创建的会话无法用 `--continue` 在交互模式下恢复。影响自动化脚本与人工接管混合使用的场景。

**社区反应**：用户确认该行为破坏 CI/自动化到人工调试的衔接流程，期望两种模式共享会话存储。

---

### 6. MCP 工具调用静默丢弃长参数值后的所有参数
**#72228** | 作者: tblitz | 评论: 5 | 👍: 1  
**链接**: https://github.com/anthropics/claude-code/issues/72228

**摘要**：当 MCP 工具调用的某个参数值足够长时，其后所有参数会在请求离开客户端前被静默丢弃，且工具可能以部分参数执行成功，造成隐蔽数据丢失。影响 v2.1.195+。

**社区反应**：开发者认为这是高危缺陷（尤其在自动化工具链中），要求优先修复并提供参数完整性校验。

---

### 7. 捆绑 ugrep 编译正则时 RSS 膨胀至 9–14 GB
**#83342** | 作者: developerinlondon | 评论: 4  
**链接**: https://github.com/anthropics/claude-code/issues/83342

**摘要**：Claude Code 将普通 `grep` 透明路由到捆绑的 ugrep 7.5.0，在编译 bounded-interval BRE 正则时 RSS 可达 9–14 GB。Linux 用户受影响严重。

**社区反应**：用户建议重新评估捆绑 grep 策略，或加入正则复杂度限制与回退机制。

---

### 8. Claude Desktop (Windows) GPU 进程崩溃导致整个应用退出
**#83744** | 作者: estebanfeldman | 评论: 4  
**链接**: https://github.com/anthropics/claude-code/issues/83744

**摘要**：Windows 版 Claude Desktop 1.24012.11.0 中 GPU 进程崩溃（exitCode 101457950）会连带杀死整个应用。

**社区反应**：与 #83403 类似属阻断性问题；用户建议禁用 GPU 加速作为临时方案。

---

### 9. Opus 5 专属提示词覆盖用户委托策略 — 版本边界证据
**#84053** | 作者: NashCC1550 | 评论: 0  
**链接**: https://github.com/anthropics/claude-code/issues/84053

**摘要**：自 v2.1.219 起，Opus 5 会话注入未文档化的系统提示词（内部名 `heron_brook`），强制“不调用 AgentTool/不使用工作流，除非用户请求”。该行为覆盖用户配置的委托策略，且已有版本边界对比证据。

**社区反应**：虽评论为 0，但内容涉及系统提示词透明性与策略覆盖，值得关注。

---

### 10. 标签语法解析器静默吞参 — 6.2% 字段丢失率
**#84362** | 作者: isaac-ranger | 评论: 0  
**链接**: https://github.com/anthropics/claude-code/issues/84362

**摘要**：工具调用的标签语法解析器在遇到不匹配/损坏的闭合标签时，会将后续参数块吸收进前一个字符串字段，导致参数静默丢失。实测在参数密集型 MCP 调用中有 6.2% 的字段丢失率。若剩余字段为可选，调用会以数据丢失成功返回。

**社区反应**：新提交，暂无讨论；但该问题与 #72228 共同揭示了工具调用链路中参数完整性的系统性风险。


## 重要 PR 进展

### 1. [OPEN] 修复 pretooluse hook 异常时未 fail-closed 的安全漏洞
**#84364** | 作者: alifakbxr | 更新: 2026-08-06  
**链接**: https://github.com/anthropics/claude-code/pull/84364

**摘要**：当 pretooluse hook 在执行规则评估时抛出异常（如 ImportError），hook 会以退出码 0 退出，从而放行被门控的工具执行。本次修复改为异常时返回 `permissionDecision: 'deny'`，确保未经授权的操作被阻止。

**意义**：安全关键修复，防止异常路径绕过权限控制。

---

### 2. [OPEN] 允许任意用户通过 👍 反对阻止自动关闭 Issue
**#84365** | 作者: alifakbxr | 更新: 2026-08-06  
**链接**: https://github.com/anthropics/claude-code/pull/84365

**摘要**：修复 #79146。与去重机器人承诺一致，允许任意用户的 thumbs down 阻止 Issue 被自动关闭。

**意义**：改善社区治理流程，防止有效反馈被机器人误关。

---

### 3. [OPEN] code-review 尊重 `--comment` 标志
**#16929** | 作者: heathdutton | 更新: 2026-08-05  
**链接**: https://github.com/anthropics/claude-code/pull/16929

**摘要**：修复 #16606。`/code-review` 命令此前默认向 GitHub 发布内联评论，与 README 声明的默认终端输出不符。本次修改为：未提供 `--comment` 时输出到终端（默认），仅显式传入时发布到 GitHub。

**意义**：修正行为与文档一致，避免意外在 GitHub 上留下评论。

---

### 4. [OPEN] Cowork 自签名证书错误的工作区修复
**#84138** | 作者: botbikamordehai2-sketch | 更新: 2026-08-05  
**链接**: https://github.com/anthropics/claude-code/pull/84138

**摘要**：修复 #24470。Bun 运行时在 macOS 上不加载系统根证书，导致无代理/企业 SSL 环境下出现“Self-signed certificate detected”报错。

**意义**：解决 macOS 用户在 Cowork 模式下的连接问题，但属于 workaround 而非根本修复。

---

### 5. [OPEN] 新增 14 个 Claude Code 插件（安全、性能、架构、全栈自动化）
**#41661** | 作者: cliffordjose | 更新: 2026-08-05  
**链接**: https://github.com/anthropics/claude-code/pull/41661

**摘要**：提议新增 14 个插件目录（含 README 与命令定义），将 marketplace.json 从 13 扩充至 27 个插件，涵盖安全、性能、架构与全栈自动化方向。

**意义**：插件生态扩展的社区提案，体现社区对平台可扩展性的旺盛需求。

---

> 其余 PR（如 #84357、#84356 涉及 Inno Setup 构建路径问题）为社区用户项目相关，非 Claude Code 核心仓库内容，此处不展开。


## 功能需求趋势

从当前 Issues 中提炼出的社区核心功能诉求：

| 方向 | 典型 Issue | 诉求摘要 |
|---|---|---|
| **会话管理** | #66504、#81946、#82536 | 会话链接默认 opt-in；会话存档项目可移植（区分 scratch 与 transcript）；`--continue` 支持恢复 `-p` 会话 |
| **Cloud/Cowork 权限模型** | #76248 | Git 代理授权规则应透明可配置，支持用户 PAT 透传，允许动态添加授权仓库 |
| **模型行为控制** | #77136、#84053 | 提供模型风格/温度调节、长上下文稳定性改进；系统提示词注入可观测/可禁用 |
| **浏览器扩展与安全** | #74715、#77605 | Chrome 扩展“始终允许”持久化失败；跨设备浏览器驱动需可靠的设备标识 |
| **桌面稳定性** | #83403、#83744 | 解决会话时长上限崩溃、GPU 进程连带崩溃；提供自动恢复机制 |
| **MCP 工具链可靠性** | #72228、#84362、#84363 | 参数完整性校验与失败告警；stdio MCP 服务器二进制更新后自动重连 |
| **市场管理** | v2.1.223 更新 | 已支持 `owner/*` 通配符，社区进一步期待更细粒度的市场准入控制 |
| **CLI/TUI 可配置性** | #84348、#72649 | 左箭头 detach 手势可禁用/可重绑定；特定终端（Warp）下的键盘编辑键回归修复 |


## 开发者关注点

- **Cowork Git 代理权限收紧**：是当前最大的痛点。用户在授权仓库集之外 push 被拦截，且 PAT 透传失效，严重冲击远程协作工作流。期望官方提供显式授权流程或回退开关。
- **模型行为不透明**：Opus 5 专属系统提示词注入（#84053）引发对“模型行为由谁定义”的质疑；Fable 5 用量误计（#84359）与 Opus 4.8 被降级（#84340）进一步加剧“模型路由不透明”的不满。
- **MCP 参数完整性**：两条独立报告（#72228、#84362）均指向工具调用参数在传输/解析阶段被静默丢弃。这对自动化工具链是致命级问题，社区期望：超长参数分段传输、解析器严格校验、失败时显式报错而非静默降级。
- **桌面应用稳定性**：Windows 与 macOS 上的崩溃类问题（#83403、#83744）持续出现，且恢复成本高（需完全重装）。开发者期待官方建立崩溃自动上报与恢复机制。
- **高频“小”问题堆积**：如 `--continue` 恢复会话失败（#82536）、Chrome 扩展“始终允许”不持久化（#74715）等，虽非高危但影响日常体验，用户期待更快的迭代响应。
- **对安全修复的肯定**：#84364（pretooluse fail-closed）与 #84365（防自动关 Issue）获得社区认可，开发者希望此类健壮性修复持续增加。

---
*本日报由 AI 自动生成，数据截至 2026-08-06。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-06

## 今日速览

昨日 Codex 发布了 5 个版本，其中 0.146.1 引入了针对 cyber 能力模型的安全审查默认策略，并修复了终端权限变更提示的问题。与此同时，**Multi-Agent V2 子代理任务载荷在非 OpenAI 自定义模型（Ollama、DeepSeek 等）中失效**成为社区最集中的反馈热点（至少 4 个活跃 issue），其次是 Windows 沙箱/浏览器插件 `sandboxPolicy` 缺失的系列问题已基本关闭。PR 方面，基础设施重构（rollout 迁移、skills 集中化、远程 MCP 握手加固）与安全策略（Guardian 熔断、Azure Key Vault 签名）双线并行。

## 版本发布

**rust-v0.146.1（最新稳定版）**
- 为 cyber 能力的模型应用更安全的自动审查默认值，并在终端界面中解释权限变更原因（#37057）
- Changelog: https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1

另有 rust-v0.147.0-alpha.6.5 / alpha.10 / alpha.11 / alpha.12 / alpha.13 共 5 个 alpha 版本，均无显著 changelog 内容。

> 提示：当前有多个 0.147.0-alpha.x 版本在 24 小时内密集发布，可能为活跃迭代周期。

## 社区热点 Issues

1. **[#34833] MultiAgentV2 跨提供商子代理无法消费加密任务分配（OPEN, 8 评论, 👍3）**
   父代理为 OpenAI、子代理为非 OpenAI 自定义提供商时，子代理只收到加密内容，无法解码执行。这是 multi-agent 互操作性问题的核心报告之一。
   https://github.com/openai/codex/issues/34833

2. **[#33551] Multi-Agent V2 向外部 Responses 提供商发送 OpenAI 专有的 `agent_message`（OPEN, 7 评论, 👍4）**
   明确指出 `agent_message` 是 OpenAI 私有格式，Ollama 等外部提供商无法识别 `encrypted_content`。与 #34833 相互印证，是跨提供商 agent 通信协议设计缺陷。
   https://github.com/openai/codex/issues/33551

3. **[#36586] DeepSeek 子代理看不到任务载荷（OPEN, 5 评论, 👍3）**
   `spawn_agent` / `followup_task` 分发的任务在 DeepSeek 子代理侧显示为 "no new task input"。说明问题不局限于单一提供商，影响面广。
   https://github.com/openai/codex/issues/36586

4. **[#36321] 子代理收到空任务载荷（OPEN, 4 评论）**
   0.146.0-alpha.9.2 版本中，`spawn_agent`/`followup_task`/`send_message` 均复现此问题。评论提及可能与 rollout 迁移有关。
   https://github.com/openai/codex/issues/36321

5. **[#37186] Codex Spark 显示有额度但拒绝运行（OPEN, 新提交 / 3 评论, 👍1）**
   用户 5.3 额度仍有剩余，却被"usage limit"拦截。Windows 平台，已上传日志。可能是配额计算或同步 bug。
   https://github.com/openai/codex/issues/37186

6. **[#25203] Windows 上 GitHub OAuth 回调 "Unable to find Electron app"（CLOSED, 37 评论, 👍21）**
   社区最高热度的 issue 之一，持续 2 个多月最终关闭。涉及桌面应用与 Electron 协议处理的集成问题。
   https://github.com/openai/codex/issues/25203

7. **[#2880] TUI 消息复制/导出为 Markdown（CLOSED, 27 评论, 👍78）**
   👍 数最高（78）。用户需要将 Codex 回复导出为 Markdown 以便归入外部文档或 GitHub issue。虽有 workaround（纯文本复制），但体验割裂。
   https://github.com/openai/codex/issues/2880

8. **[#2909] VS Code 扩展多根工作区支持（CLOSED, 23 评论, 👍143）**
   全量 issue 中 👍 最多（143）。多根工作区是 VS Code 高级用户的常见形态，扩展对此支持不完整。
   https://github.com/openai/codex/issues/2909

9. **[#2020] 浅色背景终端支持（CLOSED, 24 评论, 👍60）**
   CLI 硬编码深色配色，浅色终端下几乎不可见。用户被迫反转整个终端主题。issue 已关闭，待验证修复效果。
   https://github.com/openai/codex/issues/2020

10. **[#27694] macOS Dock 插件 `setDockTile` 递归崩溃（CLOSED, 17 评论, 👍8）**
    26.609.30741 版本中 `CodexDockTilePlugin` 递归导致 Dock/LaunchServices 不稳定。属于反复出现的回归问题，需要在 CI 中增加回归测试保护。
    https://github.com/openai/codex/issues/27694

## 重要 PR 进展

1. **[#37190] cyber 模型在收到一次 Guardian 拒绝后即中断（CLOSED）**
   为 `cyber` 类别模型引入断路器：首次 Guardian 拒绝即中断，其他模型维持原有阈值。同时集中了拒绝策略逻辑。
   https://github.com/openai/codex/pull/37190

2. **[#37191] 保留 rollout 迁移中的旧版语义（CLOSED）**
   迁移旧版 rollout 时避免因压缩检查点、子代理副本等导致对话上下文可见变化。属于大型数据迁移安全网。
   https://github.com/openai/codex/pull/37191

3. **[#37175] 向分页历史添加旧版 rollout 迁移（CLOSED）**
   实现 `migrate_rollouts`（dry-run + apply）、限流、逐记录结果，将旧 JSONL 规范化为分页历史。
   https://github.com/openai/codex/pull/37175

4. **[#37168] 限制远程 MCP 握手的 HTTP 请求时间（CLOSED）**
   修复流式 HTTP MCP 握手超时后 executor 仍被占用、后续请求受阻的问题。对多 MCP 服务器配置稳定性有帮助。
   https://github.com/openai/codex/pull/37168

5. **[#37154] macOS 公证改用 Azure Key Vault（CLOSED）**
   App Store Connect 私钥不再以 base64 `.p8`  secret 暴露在 runner 环境变量中，改为按需从 Key Vault 取用并签名。
   https://github.com/openai/codex/pull/37154

6. **[#37199] 线程归档分析（CLOSED）**
   归档/取消归档时发送 `codex_thread_archive_event`，含 thread ID、动作、时间戳。属于可观测性补全。
   https://github.com/openai/codex/pull/37199

7. **[#37198] 读取本地线程时优先使用持久化 cwd（CLOSED）**
   修复 rollout 中记录的 cwd 过期导致线程读取与列表不一致的问题。
   https://github.com/openai/codex/pull/37198

8. **[#37151] 合并并发 Git 状态扫描（CLOSED）**
   同一仓库根的并发 `git status --porcelain` 共享同一进行中的请求，降低 IO 与进程开销。
   https://github.com/openai/codex/pull/37151

9. **[#37189] 在世界状态中跟踪多代理用量提示（CLOSED）**
   确保会话恢复时，即使配置变更或历史记录早于该功能，也能获得正确的多代理用量说明。
   https://github.com/openai/codex/pull/37189

10. **[#37167] 向 MCP 贡献者暴露会话来源（CLOSED）**
    新增 `session_source()` API，按线程解析 MCP 资源，贯穿初始设置、每步解析与运行时刷新。
    https://github.com/openai/codex/pull/37167

## 功能需求趋势

- **多代理/子代理跨提供商互操作（高优先级，约 5+ 个活跃 issue）**：Multi-Agent V2 目前使用 OpenA I 专有的 `agent_message` 格式，导致 Ollama、DeepSeek 等自定义提供商无法解析任务内容。社区期望协议层实现中立格式（如标准 OpenAI Responses 类型）或提供可配置的序列化方式。
- **沙箱元数据一致性（Windows 浏览器/Computer Use）**：多个 issue 指向 `sandboxPolicy` 在旧版 CLI 与新版 app-server 之间元数据不匹配，导致 `node_repl`/Chrome 控制全面失败。已在本轮修复中关闭，但反复出现，需通过集成测试固化。
- **终端与 IDE 可用性**：浅色背景支持（#2020）、Markdown 导出（#2880）、多根工作区（#2909）均为高票需求。三者已在较长生命周期中反复被提及，社区使用场景已超越简单 REPL。
- **cyber 模型的安全策略**：Guardian 熔断和自动审查默认值调整反映 OpenAI 对高能力模型（可能涉及渗透测试/安全研究）在自主执行时的风险控制收紧。

## 开发者关注点

- **Windows 平台是 bug 重灾区**：本轮中 Windows 相关占比极高（OAuth 回调、沙箱、Dock（macOS 除外）、用户目录非 ASCII 字符、CreateProcessAsUser 权限）。Windows 10/11 + Pro/Plus 订阅是主力环境，但沙箱与权限模型经常到不了"用户代码执行"阶段。
- **alpha 版本迭代速度带来的稳定性回退**：0.147.0-alpha.x 一天 5 个版本，多个 issue 反馈"更新后功能反而不可用"（尤其集中在 26.616.x 系列），提示 alpha 通道的风险。
- **文档与迁移透明度**：rollout 迁移、MCP 握手超时、skills 负载重构等内部改动频繁，但缺少面向用户的迁移说明。有开发者表示"不知道更新后行为变化的原因"。建议在 release notes 中关联对应 PR。
- **配额/额度显示不一致**（#37186）：用户对"显示有额度但不让用"的容忍度低，期望优先处理此类阻塞性 bug，而非单纯叠加新功能。

---

*本日报由 AI 分析 GitHub 公开数据自动生成，统计时间截至 2026-08-06。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-06**


## 今日速览

今日发布 v0.54.0 稳定版与两个预览/夜间版本，并启动 v0.56.0 开发周期。社区焦点仍集中在 **Gemini CLI 向 Antigravity 迁移的争议**（相关 Issue 评论区持续活跃），同时 MCP OAuth 令牌刷新、Microsoft Copilot 生态相关修复进入了稳定的发布节奏。


## 版本发布

### v0.54.0（稳定版）
- 常规版本号提升及更新日志整理，未包含重大功能变更。

### v0.55.0-preview.1（预览版）
- 版本号提升与更新日志整理。
- fix(cli)：macOS 缺少嵌入式 seatbelt profiles 时回退到内置配置（PR #28551）。
- feat(pr-generator-core)：新增环境配置解析器、命令执行器及 GitHub 相关功能（PR #28552，持续开发中）。

### v0.55.0-nightly.20260806.g761f604c1（夜间版）
- 包含上述 macOS seatbelt 回退修复。


## 社区热点 Issues（10 个）

### 1. 迁移争议持续——但社区态度转变
- **#27314** [CLOSED] [Feature Request] 恢复独立 Gemini CLI 或支持完整旧版工作流与稳定 OAuth — [链接](https://github.com/google-gemini/gemini-cli/issues/27314)
    - 12 条评论 | 👍 3 | 更新于 08-06
    - 社区最重要的诉求之一：CLI 被迫并入 Antigravity 生态后的开发者体验回退问题。Issue 被标记为 Stale 并关闭，但评论仍在继续，说明用户对当前路线仍存不满。

### 2. 中文化社区高频疑问
- **#27265** [CLOSED] [Question] Gemini CLI 是否很快会被 Antigravity CLI 取代？额度是否会变得一样少？ — [链接](https://github.com/google-gemini/gemini-cli/issues/27265)
    - 8 条评论 | 更新于 08-06
    - 中文用户对迁移后配额减少的担忧，与 #27314 在同一议题下形成共鸣，目前官方未给出正面回应。

### 3. Windows 平台老问题仍未解决
- **#27097** [CLOSED] [Bug] Agent 在 Windows PowerShell 5.1 下使用 `&&` — [链接](https://github.com/google-gemini/gemini-cli/issues/27097)
    - 7 条评论 | 更新于 08-06
    - Agent 在 PowerShell 5.1 环境中硬编码使用 `&&`，导致命令执行失败并重复执行。尽管用户已在全局 GEMINI.md 中明确指示，Agent 仍然无视。该问题已关闭但标记为 effort/large，可能短期内难以修复。

### 4. MCP OAuth 安全性问题
- **#20990** [CLOSED] [Bug] MCP OAuth2.1 动态客户端注册失败 — [链接](https://github.com/google-gemini/gemini-cli/issues/20990)
    - 10 条评论 | 👍 1 | 更新于 08-06
    - `registrationUrl` 在 WWW-Authenticate 发现路径中被丢弃，导致符合 RFC 8414 的 MCP 服务器无法完成动态注册。安全相关，社区关注度高。

### 5. 智能体内存管理的长期痛点
- **#26522** [OPEN] [Bug] Auto Memory 无限重试低信号会话 — [链接](https://github.com/google-gemini/gemini-cli/issues/26522)
    - 5 条评论 | 更新于 08-06
    - 低价值会话不被标记为已处理，导致反复出现在索引中触发重试。内部维护者跟进中，涉及核心内存提取机制。

### 6. ACP（Agent Client Protocol）协议缺陷
- **#21783** [OPEN] [Bug] ACP：request_permission 前缺少 tool_call 会话更新 — [链接](https://github.com/google-gemini/gemini-cli/issues/21783)
    - 5 条评论 | 更新于 08-06
    - 影响依赖 ACP 协议的第三方客户端集成，违反协议预期时序，可能导致客户端状态不同步。

### 7. 企业级策略配置的迁移诉求
- **#19979** [CLOSED] [Feature] 策略配置从 TOML 迁移至 CUELang — [链接](https://github.com/google-gemini/gemini-cli/issues/19979)
    - 11 条评论 | 更新于 08-06
    - TOML 在复杂策略场景下暴露出表达力不足的问题。该 Issue 被标记为 effort/large 并关闭，但企业用户的配置灵活性诉求依然存在。

### 8. 自定义安全检查器
- **#27185** [CLOSED] [Feature] 支持自定义外部安全检查器 — [链接](https://github.com/google-gemini/gemini-cli/issues/27185)
    - 6 条评论 | 更新于 08-06
    - 社区希望扩展 CheckerRegistry，允许注册自定义安全可执行文件，而不仅限于内置的 allowed-path 和 conseca 检查器。

### 9. @ 文件引用体验优化
- **#27160** [OPEN] [Feature] 支持 `@filename 20-50` 指定行范围 — [链接](https://github.com/google-gemini/gemini-cli/issues/27160)
    - 5 条评论 | 更新于 08-06
    - 大型文件（800+ 行）场景下，用户希望精确控制上下文读取范围，减少 token 浪费并提高引用准确性。

### 10. 文档与定价页问题
- **#28448** [CLOSED] [Bug] GeminiCLI.com/plans 页面多项异常 — [链接](https://github.com/google-gemini/gemini-cli/issues/28448)
    - 4 条评论 | 更新于 08-06
    - 官方文档站 /plans/ 页面存在多处问题，虽已标记 need-information，但该页面直接影响用户对服务等级的认知。


## 重要 PR 进展（10 个）

### 1. 核心修复：MCP OAuth 令牌刷新（安全 · P1）
- **#28481** [CLOSED] fix(core): 使用存储的 client ID 刷新 MCP OAuth 令牌 — [链接](https://github.com/google-gemini/gemini-cli/pull/28481)
    - 修复 OAuth discovery + 动态客户端注册场景下刷新失败的问题（此前会删除已存凭据导致反复重新认证）。

### 2. 修复 v0.53.0 引入的 400 错误回归（P2）
- **#28586** [OPEN] fix(core): 在 functionCall 中保留 thoughtSignature — [链接](https://github.com/google-gemini/gemini-cli/pull/28586)
    - 修复并行工具调用时因剥离 thoughtSignature 导致 API 400 的回归。另有一份几乎相同的替代实现 #28607 已合并。

### 3. 长会话稳定性优化
- **#28488** [CLOSED] feat(cli): 上下文窗口溢出时自动压缩聊天历史 — [链接](https://github.com/google-gemini/gemini-cli/pull/28488)
    - 新增 `model.autoCompressOnOverflow` 设置，在上下文溢出时自动压缩而非报错中断。

### 4. 大型 diff 场景性能修复
- **#28581** [OPEN] fix(cli): @ 处理时跳过 diff hunk 标记 — [链接](https://github.com/google-gemini/gemini-cli/pull/28581)
    - 防止 unified/combined diff 中的 hunk 标记被误判为 @file 引用，避免大 diff 场景下 minimatch/path-scurry 堆内存膨胀。

### 5. SDK 非交互模式健壮性提升
- **#28660** [OPEN] / **#28695** [CLOSED] fix(sdk): 畸形工具参数不中断 sendStream — [链接](https://github.com/google-gemini/gemini-cli/pull/28660) | [链接](https://github.com/google-gemini/gemini-cli/pull/28695)
    - 两个独立提交解决 `JSON.parse()` 未防护导致流中断的问题，将畸形参数转为结构化错误而非直接终止。

### 6. 模型选择器支持 gemini-3.5/3.6-flash
- **#28485** [CLOSED] fix(cli): 为所有用户开放 gemini-3.5-flash — [链接](https://github.com/google-gemini/gemini-cli/pull/28485)
    - 修复 v0.51.0 用户无法在模型选择器中看到新版本 Flash 模型的问题。

### 7. VSCode 插件资源泄漏修复
- **#28494** [CLOSED] fix(vscode-ide-companion): 移除 activate() 中的逗号运算符 — [链接](https://github.com/google-gemini/gemini-cli/pull/28494)
    - 逗号运算符包裹导致 Disposable 泄漏，禁用时无法正确清理（closes #27790）。
- **#28580** [OPEN] 同一问题的并行修复 — [链接](https://github.com/google-gemini/gemini-cli/pull/28580)

### 8. 进程信号转发修复
- **#28676** [OPEN] fix(cli): 将终止信号转发到重新拉起的子进程 — [链接](https://github.com/google-gemini/gemini-cli/pull/28676)
    - 修复监督式 `kill -TERM <bootstrap-pid>` 后子进程被孤儿化的问题。

### 9. 嵌套流式错误解析优化
- **#28689** [CLOSED] fix(core): 解析嵌套 gaxios 流式错误信息 — [链接](https://github.com/google-gemini/gemini-cli/pull/28689)
    - 改进配额/限流等结构化错误的提取与分类，增强 GCA 场景的降级处理。

### 10. Cloud Workstations OAuth 重定向修复
- **#28688** [OPEN] fix(core): 动态解析 Cloud Workstations 代理重定向 URI — [链接](https://github.com/google-gemini/gemini-cli/pull/28688)
    - 修复 Cloud Workstations VM 内 OAuth 流程因静态 `localhost` 重定向而失败的问题。


## 功能需求趋势

| 方向 | 代表 Issue/PR | 热度 |
|------|--------------|------|
| **Antigravity 迁移与独立 CLI 回归** | #27314, #27265, #27356 | 🔥🔥🔥（多 Issue 评论持续，用户强烈不满） |
| **MCP 生态完善** | #20990, #28481, #27185 | 🔥🔥🔥（OAuth/安全+自定义能力） |
| **上下文管理优化** | #28488, #27160（@行范围） | 🔥🔥（自动压缩+精确引用） |
| **模型支持扩展** | #28485（3.5/3.6-flash） | 🔥（对新模型跟进速度有诉求） |
| **企业策略配置灵活性** | #19979（CUELang）, #27367（ReDoS） | 🔥（TOML 表达力受限） |
| **VSCode 集成稳定性** | #28494, #28580 | 🔥（Disposable 泄漏修复） |
| **SDK / 非交互模式健壮性** | #28660, #28695 | 🔥（错误处理防御性编程） |


## 开发者关注点

1. **迁移焦虑持续升温**：多个 Issue（#27314、#27265、#27356）围绕 Gemini CLI 并入 Antigravity 展开，用户核心诉求为保留轻量级独立 CLI、维持 Google One 订阅权益，以及对 Antigravity 配额减少的普遍不满。官方虽已关闭部分 Issue，但社区讨论热度居高不下。

2. **Windows 平台体验欠佳**：`&&` 在 PowerShell 5.1 下不受支持的问题（#27097）长期存在，Agent 无视用户全局指令，被标记为 effort/large，开发优先级较低。

3. **OAuth 流程可靠性问题**：MCP OAuth 动态注册（#20990）、令牌刷新静默失败（#21956）、Cloud Workstations 代理重定向（#28688）等多起安全与可用性问题在今日 PR 中得到集中修复，反映 OAuth 仍是高危薄弱环节。

4. **长会话与大上下文场景的稳定性**：上下文压缩（#28488）、thoughtSignature 保留（#28586/#28607）、diff hunk 误识别（#28581）等修复占据 PR 列表近半，说明大型任务场景的问题是当前开发重点。

5. **SDK 健壮性**：两路并行的修复（#28660、#28695）均针对畸形工具参数导致流中断的问题，社区对「模型输出不可信」的防御性编程共识正在形成。

---

*本日报由 AI 自动生成，数据来源于 github.com/google-gemini/gemini-cli 公开仓库。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**2026-08-06**


## 今日速览

今日发布 4 个版本（v1.0.79-2 ~ v1.0.79-5），核心亮点包括：新增 Sessions 标签页支持多会话并行管理、`/worktree new` 一键在新 worktree 开启会话、提示词固定（pinning）功能调整默认关闭。社区侧，Issue 讨论热度集中在 MCP 相关故障（注册表策略拦截、OAuth 3LO 失败、FastMCP 兼容性）、BYOK/BYOM 模型显示异常，以及 Windows 平台反复崩溃等长期未解问题上。


## 版本发布

### v1.0.79-5（最新）
- **新增**：Sessions 标签页和侧边栏支持管理多个并发会话
- **改进**：提示词固定（prompt pinning）默认关闭，需设置 `pinnedPrompts` 为 `true` 以启用
- **修复**：沙箱化 wrapper 构建（make 及类似工具）现在可根据构建清单获取所需的开发工具缓存

### v1.0.79-4（预发布）
- 无显著更新说明

### v1.0.79-3
- **改进**：使用 `/worktree new` 命令可在新 worktree 中直接开启新会话

### v1.0.79-2
- **改进**：固定提示词上移一行，与已有标签栏对齐，减少对时间线空间的占用；终端少于 30 行时默认关闭此功能（可通过 `pinnedPrompts` 配置启用）


## 社区热点 Issues

### 1. MCP 服务器被策略阻止（#3934）🔥
> 企业用户在自定义 MCP 注册表场景下，即使本地配置在 VS Code/IntelliJ 插件中运行正常，CLI 仍报 `MCP server is blocked by policy`。错误原因不透明，影响排障。

**反应**：2 条评论，1 👍。企业用户关注度高，属于配置策略类的典型问题。
🔗 https://github.com/github/copilot-cli/issues/3934

### 2. 新 Issue 涌入：MCP 三连发（#4374、#4378、#4371）🔥
> 昨日新增的多个 MCP 问题：`/mcp search` 在 Azure DevOps 远程仓库中报 400；GHEC 数据驻留实例上所有用户配置的 MCP 服务器被静默丢弃；MCP OAuth 3LO 授权码流程因客户端不支持 URL elicitation 而失败（-32042）。

**反应**：均为 triage 状态，评论为 0，但其中 #4374 获得 4 👍。涉及企业级场景（数据驻留、OAuth）和跨平台 Git 集成，覆盖面广。
🔗 https://github.com/github/copilot-cli/issues/4374 | https://github.com/github/copilot-cli/issues/4378 | https://github.com/github/copilot-cli/issues/4371

### 3. CLI 在 FastMCP 服务器上初始化失败（#4370）
> Copilot CLI 1.0.79-1 在 MCP 初始化前发送 `server/discover` 请求，FastMCP 未实现该方法并返回 `-32602`，CLI 将其视为致命错误导致无法连接。协议兼容性隐患。

**反应**：2 条评论，1 👍。影响面较广（FastMCP 是主流 Python MCP 框架），值得关注。
🔗 https://github.com/github/copilot-cli/issues/4370

### 4. `claude-haiku-4.5` 不支持 `medium` 推理力度（#4345）🔥
> 当 `copilot_cli_opus_medium_effort_default` 与 `copilot_cli_gpt_5_4_mini_for_explore` 两个 feature flag 同时启用时，子代理执行反复报错 `Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'`。配置组合触发 bug。

**反应**：2 条评论，4 👍，是昨日新增问题中热度最高的。涉及多模型配置下的兼容性问题。
🔗 https://github.com/github/copilot-cli/issues/4345

### 5. Windows 平台反复崩溃（#4026）
> 自 2026-05-24 起，CLI 在 Windows 上正常运行中频繁崩溃，跨 v1.0.15、v1.0.52、v1.0.53 等多个版本无法复现单一路径，问题持续未解。

**反应**：2 条评论。Windows 稳定性仍是社区长期痛点。
🔗 https://github.com/github/copilot-cli/issues/4026

### 6. alt-screen 视图无法关闭（#1799）
> 用户反馈近期发布的 alt-screen（备用屏幕）引发多处显示问题，询问是否有方式切回原始模式。配置与终端渲染交叉问题。

**反应**：12 条评论，8 👍，是本期讨论最热烈的问题之一。社区对终端 UI 变化敏感度高。
🔗 https://github.com/github/copilot-cli/issues/1799

### 7. `web_search` 工具返回幻觉内容（#4093）
> 内置 `web_search` 在检索无结果时会生成"自信且详细"的虚构答案并附引用，而非报告无结果。作为工具结果直接喂给模型，影响下游任务可信度。

**反应**：0 条评论（已关闭）。虽已关闭但暴露了工具设计层面的隐患，值得关注后续修复。
🔗 https://github.com/github/copilot-cli/issues/4093

### 8. BYOK 状态行显示 "medium" 与 `--effort high` 不一致（#3135）
> 升级到 1.0.41 后，BYOK/自定义 provider 使用 `--effort high` 时实际请求已正确携带 `reasoning_effort: "high"`，但状态行却显示 `gpt-5.5 (medium)`。显示层与请求层不一致。

**反应**：3 条评论，1 👍。反映自定义模型接入时状态显示不准确的问题。
🔗 https://github.com/github/copilot-cli/issues/3135

### 9. 内置 `view` 工具误报路径不存在（#4202）
> 1.0.73 中内置 `view` 对已存在文件报 `Path does not exist`，1.0.71 正常。问题从 1.0.72 开始出现并持续存在。同类 SDK probe 可稳定成功。

**反应**：5 条评论，1 👍。工具回归类 bug，影响基础文件读取场景。
🔗 https://github.com/github/copilot-cli/issues/4202

### 10. "Rubber Duck" 评审未使用独立评审模型（#4380）
> `rubber-duck` 评审有时复用主会话的模型家族而非选择独立评审者，削弱对抗性评审的价值。用户已在使用 5.6 Terra - Max 时观察到。

**反应**：新增问题，0 评论。涉及代码评审质量的关键特性，值得跟踪。
🔗 https://github.com/github/copilot-cli/issues/4380


## 重要 PR 进展

过去 24 小时暂无 PR 更新。


## 功能需求趋势

综合分析近期 Issues，社区关注的三大方向：

1. **MCP 生态成熟度**（#4370、#4371、#4374、#4378、#3934）
   - MCP 已成为社区核心关注点，但协议兼容性（FastMCP）、OAuth 流支持、企业策略管理和多云 Git 集成等问题频发。CLI 作为 MCP 客户端在多种真实场景下暴露了健壮性短板。

2. **多模型/自定义模型支持深化**（#3135、#4345、#4376、#4377）
   - 随着 BYOK/BYOM 逐步落地，社区提出更高诉求：BYOM provider 的模型动态发现与运行中切换（#4376）、模型委托链的可观测性（GPT-5.6 Terra 委托 Opus 子代理，用户不知情，#4377）、以及多模型配置组合下的参数兼容性（#4345）。"模型路由透明化"是下一个重点方向。

3. **终端 UX 精细化**（#1799、#3172）
   - alt-screen 切换、剪贴板竞争提示等细节问题持续引发讨论，说明 CLI 作为交互式终端工具，用户对显示层体验的敏感度很高。提示词固定（pinning）功能也经历了快速迭代（v1.0.79-2 调整默认行为），显示区域优化仍是活跃迭代区。


## 开发者关注点

1. **Windows 稳定性焦虑**（#4026）：连续两个多月、跨越多个版本无法解决的崩溃问题，已消耗开发者大量耐心。建议优先调度资源处理。

2. **MCP 故障的"静默失败"**（#4378、#3934）：策略拦截和权限问题以模糊错误呈现，开发者无法定位根因。错误信息透明化是高频诉求。

3. **模型行为可观测性缺失**（#4377、#3135）：用户可以感知到"钱花了但不知道花在哪"（Opus 子代理消耗额度）以及状态行显示与实际配置不符。模型调用的可解释性是信任基础。

4. **功能开关回归风险**（#4345）：feature flag 组合触发的问题说明配置矩阵的测试覆盖仍需加强。建议引入组合配置的自动化测试。

5. **个人开发者声音**：在重要 Issue 中（#1799、#3172 等），个人开发者依然保持活跃反馈，问题响应速度直接影响社区生态活跃度。多个 Issue 进入"triage"状态但未获回复（如 #4372、#4373、#4379），建议关注积压问题响应时效。

---

> 📌 以上日报基于 2026-08-06 GitHub 数据自动生成。Issue/PR 链接均指向 github.com/github/copilot-cli。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-06

## 今日速览

今日社区主要聚焦于**工具链稳定性**与**多模态支持**两大主题。最受关注的是两个关于 MCP 工具返回图片导致任务中断的 Bug 报告（#2588）及其随后的修复 PR（#2592），体现了维护团队对反馈的快速响应。此外，社区对**跨会话持久记忆系统**（#1283）的长期需求仍在持续发酵，该议题已积累近半年讨论。

---

## 社区热点 Issues

### 1. Feature Request: Memory System - Persistent context across sessions (#1283)
**作者**: CatKang | **创建**: 2026-02-27 | **更新**: 2026-08-06 | **评论**: 19
**链接**: [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

这是目前社区中**呼声最高、讨论周期最长**的功能请求。用户希望 Kimi Code CLI 能实现类似 Claude Code 或 Cursor 的 Memory System，支持自动记忆（AI 管理的项目模式笔记）和手动记忆（用户自定义指令），从而让 AI 在跨会话时保持项目上下文，减少重复描述需求。

**重要性**: 该 Issue 已开放近半年，评论数持续增长，是社区对“长期项目助手”能力最核心的诉求，直接关系到工具在大型项目中的实用性。

---

### 2. StrReplaceFile corrupts undecodable bytes outside the edited region (#2591)
**作者**: shoemoney | **创建**: 2026-08-05 | **更新**: 2026-08-05 | **评论**: 0
**链接**: [MoonshotAI/kimi-cli Issue #2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)

**核心问题**: `StrReplaceFile` 工具在处理文件时使用 `errors="replace"` 方式解码整个文件，然后编辑并写回。这会导致文件中**任何位置的非法 UTF-8 字节**（哪怕远在编辑区域之外）被错误替换为 U+FFFD 并写入磁盘，造成文件损坏。

**重要性**: 这是**数据损坏级**的严重 Bug，影响二进制文件或混合编码文件的用户。虽然评论数为 0，但问题的严重性和可复现性极高，值得优先关注。

---

### 3. Model declared without capabilities: an image-returning MCP tool aborts the run mid-task (#2588)
**作者**: tic-top | **创建**: 2026-08-05 | **更新**: 2026-08-05 | **评论**: 0
**链接**: [MoonshotAI/kimi-cli Issue #2588](https://github.com/MoonshotAI/kimi-cli/issues/2588)

**核心问题**: 当模型在 `config.toml` 中**未声明 `capabilities`**，且 MCP 工具返回图片时，任务会在**工具已执行并产生副作用之后**被中止，且错误信息不提示如何修复配置。

**重要性**: 此问题暴露了两个痛点：① 错误发生时机过晚（副作用无法回滚）；② 错误消息缺乏可操作的修复指引。该问题已被 #2592 和 #2590 两个 PR 追踪，是当前最活跃的修复热点。

---

## 重要 PR 进展

### 1. fix(soul): degrade unsupported tool media instead of aborting mid-task (#2592)
**作者**: rainbowgore | **创建**: 2026-08-06 | **更新**: 2026-08-06
**链接**: [MoonshotAI/kimi-cli PR #2592](https://github.com/MoonshotAI/kimi-cli/pull/2592)

**关联 Issue**: 解决 #2588

**功能/修复内容**: 当模型未配置 `capabilities` 且工具（含 MCP）返回图片时，原逻辑会直接抛出 `LLMNotSupported`，此时工具的副作用已经生效。此 PR 将行为改为**降级处理**而非**中止任务**，避免了因媒体类型不支持而中断整个运行流程。

---

### 2. fix(soul): name the config fix in the unsupported-capability error (#2590)
**作者**: ayaangazali | **创建**: 2026-08-05 | **更新**: 2026-08-05
**链接**: [MoonshotAI/kimi-cli PR #2590](https://github.com/MoonshotAI/kimi-cli/pull/2590)

**关联 Issue**: 部分解决 #2588（“无修复提示”这一半）

**功能/修复内容**: 原来的错误信息只会指出缺少某个 `capability`，但不会告诉用户具体在 `config.toml` 中如何修改。此 PR 优化了错误提示，让用户能立即知道**该添加什么配置项**来修复问题。

---

### 3. docs: mention qwen-audio-agent as a voice ACP client (#2589)
**作者**: x-lixu | **创建**: 2026-08-05 | **更新**: 2026-08-05
**链接**: [MoonshotAI/kimi-cli PR #2589](https://github.com/MoonshotAI/kimi-cli/pull/2589)

**功能/修复内容**: 纯文档更新。在 ACP（Agent Client Protocol）相关文档中补充了一个新的语音客户端 `qwen-audio-agent`，这是一个开源的**全双工语音运行时**，可将 `kimi acp` 作为 agent 调用，实现免提语音交互。

---

## 功能需求趋势

基于近期所有 Issues 的观察，社区关注的功能方向集中在以下几个方面：

1. **持久化记忆系统**: #1283 是最典型代表，用户希望 CLI 能跨会话记住项目模式、用户偏好和上下文，无需每次重新描述。
2. **多模态支持完善**: #2588 和 #2592 反映了用户在引入图像等非文本数据时遇到了配置和降级策略不足的问题，需要更优雅的处理方式。
3. **错误信息的可操作性**: #2590 表明社区不仅要“知道出错了”，更希望错误信息直接告诉用户**如何修改配置**，减少排查时间。
4. **语音和替代交互方式**: #2589 文档更新显示 ACP 协议正在吸引更多第三方客户端接入，语音交互是其中一个方向。

---

## 开发者关注点

- **配置复杂性问题**: #2588 中用户仅因遗漏 `capabilities` 声明就导致任务中途失败且无明显修复提示，反映出配置系统的**容错性**和**引导性**仍需加强。
- **数据安全与文件完整性**: #2591 指出的文件损坏问题是最严重的开发者痛点——工具在正常使用中可能**无感知地破坏文件内容**，这对开发者信任度的打击是巨大的。
- **副作用的不可回滚性**: #2588 中“工具已运行、副作用已产生、随后任务被中止”的场景揭示了一个设计层面的问题——在工具执行前就应完成能力校验，而不是在执行后才发现不支持。

---

*本日报由 AI 技术分析系统自动生成，数据来源 github.com/MoonshotAI/kimi-cli，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-06

## 今日速览

v1.18.14 发布，简化 xAI 登录流程并修复流式错误处理；社区对"保留旧版布局"的呼声居高不下（#37012），同时 V2 架构迁移相关的 PR 密集合并，标志着 core 层正在经历大规模重构；macOS 26 上 Bash 工具 WASM 崩溃（#40789）成为今日最严重的新增回归问题。

---

## 版本发布

### v1.18.14
**链接**: https://github.com/anomalyco/opencode/releases/tag/v1.18.14

- **简化 xAI 登录**：改为单一设备码流程，在 headless/远程环境中更稳定
- **保留流式中段 provider 错误**：兼容 provider 可据此重试失败响应
- **增加瞬时 provider/网络错误的重试逻辑**

---

## 社区热点 Issues（Top 10）

### 1. #37012 — 保留旧版布局选项（🔥 38 👍 / 35 评论）
**链接**: https://github.com/anomalyco/opencode/issues/37012

新布局强制导航层级过深，旧版主窗口直达所有功能；用户明确要求保留 legacy 布局作为可选项。这是当前社区情感最强的 UI 议题，持续三周热度不减。

### 2. #16017 — Go 套餐用量/余额 API 端点（🔥 126 👍 / 32 评论）
**链接**: https://github.com/anomalyco/opencode/issues/16017

用户希望将仪表盘上已有的 Go 订阅用量数据（滚动/周/月窗口）暴露为公开 API。高赞表明开发者需要用量数据来做成本控制和自动化监控。

### 3. #11176 — 官方 VS Code 扩展（🔥 134 👍 / 27 评论）
**链接**: https://github.com/anomalyco/opencode/issues/11176

OpenCode 官方 VS Code 扩展请求，希望作为原生扩展运行。134 个 👍 说明 IDE 集成是最大的功能缺口之一。

### 4. #39845 — DeepSeek V4 Flash 突然要求 China 模型 opt-in（22 👍 / 17 评论）
**链接**: https://github.com/anomalyco/opencode/issues/39845

用户在 Go 订阅会话中突然被要求启用中国托管模型，影响会话连续性。涉及模型路由策略的透明度问题，v1.15.13 仍有此问题。

### 5. #23153 — 支持加密货币支付 Go 订阅（36 👍 / 16 评论）
**链接**: https://github.com/anomalyco/opencode/issues/23153

社区对法币/卡支付之外的可替代支付方式有持续需求，尤其在加密友好的开发者群体中。

### 6. #34498 — 支持 SKILL.md frontmatter 中 disable-model-invocation（49 👍 / 13 评论）
**链接**: https://github.com/anomalyco/opencode/issues/34498

与 Claude Code 等工具对齐，允许 skill 声明禁止模型调用，增强 skill 安全边界。49 个 👍 说明 skill 生态正在快速成长。

### 7. #31932 — TUI 跨项目会话列表/选择器（6 👍 / 14 评论）
**链接**: https://github.com/anomalyco/opencode/issues/31932

`/sessions` 仅限当前项目，多仓库工作流需要全局会话视图。与 #35581 相互关联，是 TUI 高频工作流痛点。

### 8. #12523 — GPT-5.3 Codex 推理内容不显示（7 👍 / 10 评论）
**链接**: https://github.com/anomalyco/opencode/issues/12523

GPT-5.2 正常但 5.3 只显示 thinking 块头部而无内容。模型兼容性 bug，已关闭但值得关注修复进展。

### 9. #8058 — 为远程 MCP 服务器添加 HTTP Streamable 传输支持（0 👍 / 10 评论）
**链接**: https://github.com/anomalyco/opencode/issues/8058

MCP 协议已支持 streamable-http，OpenCode 目前仅支持 SSE。Sanity 等主流 MCP 服务器已采用新传输，兼容性缺口明显。

### 10. #40789 — macOS 26 (arm64) Bash 工具 WASM 崩溃（新，2 评论）
**链接**: https://github.com/anomalyco/opencode/issues/40789

Bash 工具每次调用均崩溃：`H.loadWebAssemblyModule` Bun WASM 错误，影响 TUI 和 headless 所有命令（甚至 `echo hello`）。macOS 26.6 新系统兼容性回归，严重度高。

---

## 重要 PR 进展（Top 10）

### 1. #40784 — [WIP] 托管工作区执行（Modal driver）
**链接**: https://github.com/anomalyco/opencode/pull/40784

V2 核心架构：Workspace 作为持久执行环境（有 root 的机器而非仓库），沙箱是 Workspace 的一种；Session 通过现有 runner 图针对 workspaceID 运行。V2 架构的关键拼图。

### 2. #38790 — 新布局添加 Workspace 流程（beta）
**链接**: https://github.com/anomalyco/opencode/pull/38790

新会话可选择：本地仓库、新建隔离 Workspace、或已有 Workspace；composer pill 展示分支上下文。直接回应 #37012 的布局争议。

### 3. #35311 — 同一仓库多处克隆识别为不同项目（修复）
**链接**: https://github.com/anomalyco/opencode/pull/35311

关闭 14 个相关 issue（#17940 #19348 #29869 等）。修复多克隆场景下项目身份混乱的长期问题。

### 4. #40723 — V1 数据迁移至 V2
**链接**: https://github.com/anomalyco/opencode/pull/40723

添加 REST 触发的 V1 会话历史迁移（可恢复进度）、导入旧 V2 session 数据和 JSON 凭据、更新 TUI 迁移流程。V2 正式落地前的数据平滑过渡关键步骤。

### 5. #40781 — UI 导出 Session 为 JSON
**链接**: https://github.com/anomalyco/opencode/pull/40781

三个入口：session 下拉菜单 "Export..."、Context 标签页 "Export session" 按钮、命令面板 `/export`。会话审计和分享的好工具。

### 6. #40717 — 瑞典语社区翻译
**链接**: https://github.com/anomalyco/opencode/pull/40717

新增瑞典语 README 和词汇表，注册翻译检查器。社区 i18n 生态持续扩展。

### 7. #40590 — 安装脚本支持 GITHUB_TOKEN 认证
**链接**: https://github.com/anomalyco/opencode/pull/40590

安装脚本的三个匿名 GitHub 请求（版本检测、release 检查、资产下载）在限流/内网环境会失败。该 PR 解决企业代理场景下的安装问题。

### 8. #39758 — Web 项目选择器显示目录
**链接**: https://github.com/anomalyco/opencode/pull/39758

修复全新浏览器 profile 下 Web 项目选择器总是显示 "No folders found" 的问题，关闭 #39434 #37961 #37611。

### 9. #27554 — 局域网 provider 自动发现
**链接**: https://github.com/anomalyco/opencode/pull/27554

`/connect` 增加 Local (LAN) 发现：组合 mDNS 等机制自动发现局域网内 OpenAI 兼容服务器和模型。本地/私有化部署场景的重要补充。

### 10. #40768 / #40769 — MCP OAuth 竞态与动态客户端复用修复
**链接**: https://github.com/anomalyco/opencode/pull/40768 | https://github.com/anomalyco/opencode/pull/40769

两个进程共享同一 MCP server 凭据行时，刷新 token 的竞态条件会导致第二个进程刷新失败；重新登录时复用已注册的动态客户端避免重复注册。多进程协作的稳健性修复。

---

## 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **IDE 集成** | #11176 官方 VS Code 扩展 | 134 👍 |
| **API/可观测性** | #16017 用量 API 端点 | 126 👍 |
| **UI/UX 布局** | #37012 保留旧布局 | 38 👍 |
| **支付方式** | #23153 加密货币支付 | 36 👍 |
| **Skill 生态** | #34498 disable-model-invocation、#40720 根级 autocomplete、#40689 行中补全 | 49 👍 累计 |
| **多项目工作流** | #31932 跨项目会话、#35311 多克隆修复 | 中 |
| **MCP 扩展** | #8058 HTTP Streamable 传输 | 中 |
| **自动化/自主性** | #37564 权限自动批准、#40782 computer-use | 低-中 |
| **i18n** | 瑞典语翻译（#40717）、其他社区翻译 | 持续增长 |

---

## 开发者关注点

1. **V2 迁移阵痛**：V1→V2 数据迁移（#40723）与大规模死代码清理（#40787、#40702、#40766）并行推进，但 `/sessions` 在 v1.18.14 出现回退（#40759），说明迁移期稳定性仍是核心风险。

2. **macOS 26 兼容性危机**：#40789 Buzz WASM 崩溃 + #40779 高内存占用，新 macOS 版本成为问题高发区。

3. **模型/会话细节缺失**：GPT-5.3 推理内容不显示（#12523）、子代理运行中无法查看（#40627）、网页端会话列表为空（#40399）——"看不见"的问题反复出现。

4. **Skill 调用体验**：多个 issue 指向 skill 补全只在提示词开头生效（#40719、#40689、#40720），skill 生态越丰富，入口设计越显重要。

5. **MCP 多进程可靠性**：#40768/#40769 解决 OAuth 竞态和动态客户端注册，多 opencode 进程共享 MCP 凭据是真实企业场景。

---

> 日报由 AI 技术分析师自动生成，数据来源：github.com/anomalyco/opencode
> 生成时间：2026-08-06

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-06

## 今日速览

昨日 Pi 社区共更新 50 条 Issue 与 37 条 PR，核心焦点集中在三方面：**模型选择器的自然排序优化**（多个相关 PR 合并落地）、**AGENTS.override.md 上下文覆盖机制**（双 PR 实现并关闭对应 Issue）、以及 **Copilot 模型缺失与 Qwen 模型更新的线上修复**。此外，`@file` 引用行范围支持（#L123-L145 语法）已通过 PR 实现，回应了开发者对细粒度文件引用的长期需求。

---

## 版本发布

过去 24 小时无新版本发布。

---

## 社区热点 Issues（10 个）

### 1. [Windows] 使用方式与问题汇总 — #7547
**状态**: OPEN | 💬 17 评论  
**链接**: [Issue #7547](https://github.com/earendil-works/pi/issues/7547)

社区中 Windows 开发者数量庞大，但 Pi 在 Windows 上的运行方式过于多样，难以确定优化优先级。作者发帖征集使用场景与痛点，是目前评论数最高的 Issue。

### 2. Linux 配置文件位置不符合 XDG 规范 — #534
**状态**: CLOSED | 👍 23 | 💬 14 评论  
**链接**: [Issue #534](https://github.com/earendil-works/pi/issues/534)

Pi 将配置文件直接放在 `$HOME` 下而非遵循 XDG Base Directory 规范。该 Issue 获得 23 个 👍，是社区关注度最高的议题之一，现已关闭（预计已修复）。

### 3. 自动压缩（auto-compaction）触发滞后 — #6879
**状态**: OPEN | 👍 13 | 💬 11 评论  
**链接**: [Issue #6879](https://github.com/earendil-works/pi/issues/6879)

上下文使用率超过 100% 后自动压缩仍未触发，直到 API 拒绝请求（373k tokens）才被迫压缩。用户建议在每个 agentic turn 之后检查压缩阈值。

### 4. 会话内模型/思考级别变更应默认为临时性 — #5263
**状态**: OPEN | 👍 12 | 💬 11 评论  
**链接**: [Issue #5263](https://github.com/earendil-works/pi/issues/5263)

希望 `/model` 和思考级别的变更仅影响当前会话，全局默认值统一在 `/settings` 中管理，避免误改持久配置。

### 5. truncateToWidth() 产生悬空 OSC 8 超链接 — #7399
**状态**: CLOSED | 💬 12 评论  
**链接**: [Issue #7399](https://github.com/earendil-works/pi/issues/7399)

截断文本时未跟踪 OSC 8 超链接的配对状态，可能在开启序列后截断导致悬空超链接。已通过 PR #7665 修复（跳过无 OSC 8 的纯文本前缀扫描）。

### 6. 会话卡在 "Working..."（Anthropic 订阅） — #5291
**状态**: CLOSED | 💬 8 评论  
**链接**: [Issue #5291](https://github.com/earendil-works/pi/issues/5291)

Anthropic Enterprise 订阅用户偶发会话卡在 "Working..."，中断/恢复有时有效有时无效，等待时间较长。

### 7. 新系统提示词过度鼓励 bash 调用 — #7128
**状态**: CLOSED | 💬 7 评论  
**链接**: [Issue #7128](https://github.com/earendil-works/pi/issues/7128)

系统提示词中 "Inspect PI_* environment variables" 的引导导致代理频繁执行环境检查命令，即使任务并不需要。属于提示词策略的回归问题。

### 8. 压缩（compaction）应支持独立配置思考级别/模型 — #7553
**状态**: OPEN | 💬 7 评论  
**链接**: [Issue #7553](https://github.com/earendil-works/pi/issues/7553)

自动/手动压缩无条件复用会话当前的思考级别。对推理模型用户而言，摘要的 thinking budget 无法与正常 turn 分离。

### 9. iTerm2 内联图片缺少 size 参数 — #7465
**状态**: CLOSED | 💬 7 评论  
**链接**: [Issue #7465](https://github.com/earendil-works/pi/issues/7465)

`@xterm/addon-image@0.9.0` 强制要求 OSC 1337 序列包含 `size` 参数，缺失时静默拒绝渲染，导致 xterm.js 终端中 Pi 图片无法显示。

### 10. X11 连接泄漏：填满 X server 客户端表 — #7600
**状态**: OPEN | 💬 2 评论  
**链接**: [Issue #7600](https://github.com/earendil-works/pi/issues/7600)

长驻 `pi` 进程 8 天内泄漏 182 个 X server 连接，触发 "Maximum number of clients reached" 错误，影响所有新 X 客户端。属于稳定性/资源管理问题。

---

## 重要 PR 进展（10 个）

### 1. feat(coding-agent): 支持 @file 行范围引用 — #7679
**状态**: CLOSED  
**链接**: [PR #7679](https://github.com/earendil-works/pi/pull/7679)

实现 1-based 包含式 `#L<start>-L<end>` 选择器，支持 `@file#L122-L145` 语法。保留字面文件名与路径恢复逻辑，拒绝图片行范围，EOF 处理与 `read` 工具对齐。回应 Issue #7673。

### 2. fix(coding-agent): 两个模型选择器自然排序 — #7692
**状态**: CLOSED  
**链接**: [PR #7692](https://github.com/earendil-works/pi/pull/7692)

在 `/model` 与 `/scoped-models` 间共享自然排序比较器，大小写不敏感且具备数字感知能力。解决 `@1m` 排在 `@200k` 之前的词法排序问题。对应 Issue #7693。

### 3. feat(ai): 新增 Amazon Bedrock Mantle OpenAI Responses 提供商 — #6216
**状态**: OPEN  
**链接**: [PR #6216](https://github.com/earendil-works/pi/pull/6216)

基于 OpenAI 的 Bedrock Provider 封装，为 Amazon Bedrock Mantle 添加 OpenAI Responses API 支持。已取代早期实现。

### 4. fix(ai): 支持 openai-completions 的 thinking_token_budget — #7638
**状态**: CLOSED  
**链接**: [PR #7638](https://github.com/earendil-works/pi/pull/7638)

解决 OpenAI 兼容端点上推理与回答共享 `max_tokens` 的问题——推理消耗过多时可能返回空文本且无工具调用。支持独立配置 thinking token 预算。

### 5. Fix event bus 泄漏 — #7656
**状态**: CLOSED  
**链接**: [PR #7656](https://github.com/earendil-works/pi/pull/7656)

将 `pi.events.on()` 订阅限定在注册它的扩展运行时内。会话重载/销毁后移除过期监听器，不影响宿主拥有的监听器。修复 Issue #7193。

### 6. fix: 支持在批准评论中识别 "lgtm," — #7663
**状态**: CLOSED  
**链接**: [PR #7663](https://github.com/earendil-works/pi/pull/7663)

`LGTM, please submit a minimal patch!` 这类带逗号的评论此前无法被识别为批准。为 #7023 引入的回归，现已修复。

### 7. fix(ai): Qwen Token Plan 用 qwen3.8-max 替换 preview 模型 — #7670
**状态**: CLOSED  
**链接**: [PR #7670](https://github.com/earendil-works/pi/pull/7670)

将 `qwen3.8-max-preview` 替换为 GA 版 `qwen3.8-max`，应用 Qwen 3.8 推理力度映射（low/medium/xhigh），并从目录生成中排除 preview 模型。

### 8. fix(ai): 从账户策略恢复 Copilot 模型 — #7672
**状态**: CLOSED  
**链接**: [PR #7672](https://github.com/earendil-works/pi/pull/7672)

`model_picker_enabled` 作为主要可用性信号，仅在 Individual 端点无可用 picker 模型时回退到策略显式启用的模型。修复 #7634（登录后 Copilot 模型列表为空）。

### 9. support AGENTS.override.md 作为目录级上下文覆盖 — #7681
**状态**: CLOSED  
**链接**: [PR #7681](https://github.com/earendil-works/pi/pull/7681)

实现 `AGENTS.override.md` 作为每目录最高优先级上下文文件。同目录下存在时仅加载 override 版本，其他目录的上下文文件照常分层。关闭 Issue #7642。

### 10. fix(coding-agent): 禁用编译二进制中的 bunfig 自动加载 — #7685
**状态**: CLOSED  
**链接**: [PR #7685](https://github.com/earendil-works/pi/pull/7685)

Bun 编译的独立 `pi` 二进制会从 cwd 自动加载 `bunfig.toml` 并执行 preload，若项目 preload 损坏或依赖过重（无 `node_modules`）会导致启动崩溃（包括 `pi --version`）。编译时添加 `--no-compile-autoload` 规避此问题。

---

## 功能需求趋势

| 方向 | 代表 Issue/PR | 热度 |
|------|--------------|------|
| **上下文文件增强** | `AGENTS.override.md` 覆盖机制（#7642→#7681/#7664）、行范围引用（#7673→#7679） | 高（双 PR 同日合并） |
| **模型选择器可用性** | 自然排序（#7693→#7692/#7690）、会话内变更临时化（#5263） | 高（Issue 获 👍12） |
| **提供商扩展** | Amazon Bedrock Mantle（#6216）、Qwen Token Plan Individual（#7659） | 中 |
| **压缩（Compaction）控制** | 独立思考级别/模型（#7553）、自动压缩触发修复（#6879） | 中（👍13） |
| **终端兼容性** | OSC 8 超链接悬挂（#7399）、iTerm2 图片 size 参数（#7465） | 中 |
| **扩展 API 完善** | 认证信息持久化（#7658）、provider 重试回调（#7649）、事件总线泄漏（#7193→#7656） | 中 |
| **多模态支持** | prompt 命令支持视频/音频（#3200） | 低（长期开放） |
| **编辑器/IDE 集成** | JetBrains 后端支持（#7641）、Neovim 插件（#7673） | 低 |

---

## 开发者关注点

- **Windows 支持现状不透明**（#7547）：运行方式碎片化，社区希望明确核心支持路径与外部委托边界
- **XDG 规范合规**（#534）：Linux 用户对配置目录位置敏感，获得 23 个 👍 反映广泛共识
- **自动压缩触发逻辑不可靠**（#6879）：在上下文超限后仍不触发，直到 API 强制拒绝。开发者期望每个 agentic turn 后都进行检查
- **扩展生命周期管理**：事件总线监听器在会话重载后泄漏（#7193），已通过限定运行时作用域修复（PR #7656）
- **终端渲染兼容性**：OSC 8 超链接截断、iTerm2 图片 size 缺失等问题影响 TUI 体验，但均已快速修复
- **模型列表可见性**：Copilot 模型登录后不可见（#7634）、模型变体排序混乱（#7693），反映提供商模型目录管理需更稳健
- **`pi update --self` 容错性**（#6675）：单次瞬时网络失败即中止更新，用户期望增加重试机制
- **X11 连接泄漏**（#7600）：长时间运行导致资源耗尽，影响面较大但评论数尚少，需更多社区反馈确认复现条件

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-06

> 今日焦点：Desktop v0.1.0 正式发布，Web Shell 迎来原生 Live Voice 支持；安全漏洞（命令注入绕过、密钥泄露）成为社区最高优先级议题。


## 一、今日速览

今日最核心的进展是 **Qwen Code Desktop v0.1.0 正式发布**，它基于 Tauri 外壳复用 Web Shell UI，是替代 Electron 桌面版的下一代桌面客户端。功能侧，**WebShell 新增实验性原生 Live Voice 支持**（macOS 全局快捷键实时语音交互）。然而，社区安全议题升温：一个可被 **命令替换绕过只读 Shell 分类器** 的漏洞（#8582，P1）和一个 **密码泄露** 的警告清理 Bug（#8136，P2）正获得密集讨论。


## 二、版本发布

### v0.21.6（稳定版）
- **WebShell 原生 Live Voice（实验性）**：macOS 可通过全局快捷键进行实时语音交互（[#7859](https://github.com/QwenLM/qwen-code/pull/7859)）
- Web Shell 在后台任务活跃期间保持对话展开状态，减少上下文折叠
- 其他稳定性与 bug 修复

### v0.21.6-nightly.20260806.cb3dc107f
- 测试稳定性：修复 glob external-path 测试的临时目录依赖（改用专用空目录，而非 /tmp）

### desktop-v0.1.0（桌面客户端首个正式版）
- 基于 Tauri 桌面壳（复用 Web Shell），配套 CI 修复
- 已出现 Windows 启动崩溃报告（见下方 Issue #8615）


## 三、社区热点 Issues（Top 10）

**1. [P1/安全] 只读 Shell 分类器可被命令替换绕过** — [#8582](https://github.com/QwenLM/qwen-code/issues/8582)
> 核心问题：AST 分类器与运行时替换检测均无法识别通过行连接符或 `${var@P}` 隐藏的命令执行，导致只读模式批准任意代码执行。属高危漏洞，**建议优先跟进**。5 条评论中已包含复现路径。

**2. [P2/安全] Provider 警告清理器截断端口并泄露含 `@` 的密码** — [#8136](https://github.com/QwenLM/qwen-code/issues/8136)
> `sanitizeProviderWarning` 在清理 URL 凭据时，对含端口消息处理错误，且当密码包含 `@` 时直接泄露敏感信息。已创建 12 天仍开放，8 条评论，社区关注度最高。

**3. [P1/平台] Desktop 0.1.0 Windows 启动崩溃：EISDIR lstat 'C:'** — [#8615](https://github.com/QwenLM/qwen-code/issues/8615)
> 内置 Node v22.20.0 在打开工作区时对盘符根路径执行 lstat 触发 EISDIR 错误，导致应用启动即崩溃。Windows x64 安装包必现，属于发布阻断级问题。

**4. [P3/UI] 终端窗口缩小后滚动区重复打印** — [#8557](https://github.com/QwenLM/qwen-code/issues/8557)
> macOS + Warp 终端下，缩窄窗口导致历史脚本块重复出现在回滚区。渲染层对 resize 的坐标处理有缺陷，影响长对话场景。

**5. [P2/UI] Desktop 桌面端 Markdown 链接点击无响应** — [#8593](https://github.com/QwenLM/qwen-code/issues/8593)
> 助手消息中的链接仅展示样式而无点击行为，无浏览器打开、无报错。用户诉求：支持外链打开或内置浏览器面板。

**6. [P2/平台] Anthropic 模型 ID 解析缺陷与 Opus 5 Token 缺失** — [#8584](https://github.com/QwenLM/qwen-code/issues/8584)
> 拒绝形如 `claude-opus-4.8` 的点分小版本别名，且未配置 Opus 5 的 token 上限。影响通过代理使用 Anthropic 模型的用户。

**7. [P2/工具链] VSCode 插件 Edit/Write 文件链接永远解析到工作区根目录** — [#8606](https://github.com/QwenLM/qwen-code/issues/8606)
> 嵌套目录文件的链接错误解析为 `<workspace-root>/<basename>`，导致 "file not found"。0.21.6 与插件版本均存在，影响 VSCode 内文件操作闭环。

**8. [P2/认证] Web Shell 会话深链刷新返回 401** — [#8560](https://github.com/QwenLM/qwen-code/issues/8560)
> 配置 bearer token 后，带有 `/session/<id>` 的深链刷新时返回未授权。已进入 in-review 状态，PR #8445 尝试修复。

**9. [P2/UI] 终端 UI 在 tmux < 3.5 下持续闪烁** — [#8580](https://github.com/QwenLM/qwen-code/issues/8580)
> 根因：Ink 渲染器溢出帧触发全屏清屏+重绘，且未正确查询 DEC 2026 支持。tmux 3.4 上大约 2-3 次/秒闪烁，多用户反馈。

**10. [P1/CI] CI /review 反向审计扇出静默挂起** — [#8597](https://github.com/QwenLM/qwen-code/issues/8597)
> GitHub 触发的 `/review` 大量超时（8月4日 12 次，8月5日再 9 次），且多数耗尽 360 分钟配额。PR #8602 正通过 per-request 总生命周期上限来修复。

> 另需关注：[#8532](https://github.com/QwenLM/qwen-code/issues/8532) CI 日志中 mock disk-full 测试误报为真实 ENOSPC（后续有望通过日志分级解决）；[#8592](https://github.com/QwenLM/qwen-code/issues/8592) Desktop 切换语言无效；[#8538](https://github.com/QwenLM/qwen-code/issues/8538) Desktop 复制按钮无响应（Windows）。


## 四、重要 PR 进展（Top 10）

**1. [修复] fix(core): 限制流式响应总生命周期 & 精简审查扇出** — [#8602](https://github.com/QwenLM/qwen-code/pull/8602) @wenshao
> 针对 #8597。现有 watchdog 仅限制 chunk 间空闲时间，此 PR 增加总生命周期上限，根治静默挂起问题。

**2. [修复] fix(web-shell): 允许 daemon 认证下会话刷新** — [#8445](https://github.com/QwenLM/qwen-code/pull/8445) @BZ-D
> 解决 #8560：允许文档导航在认证前加载公共 HTML 壳，同时保持 API 子路径受保护。

**3. [功能] feat(telemetry): 对齐 OpenTelemetry 会话生命周期** — [#8616](https://github.com/QwenLM/qwen-code/pull/8616) @zjunothing
> 为每个活跃会话发射标准 `session.start`/`session.end` LogRecord，恢复的会话携带 `session.previous_id`，改进可观测性。

**4. [修复] fix(cli): ESC 在响应中先取消任务再弹队列** — [#8353](https://github.com/QwenLM/qwen-code/pull/8353) @C0d3N1nja97342
> 修复 ESC 被 InputPrompt 消费导致无法取消进行中请求的问题，现在 ESC 在 Responding 状态下直达全局取消处理器。

**5. [功能] feat(core): 从 API 元数据解析模型模态** — [#8529](https://github.com/QwenLM/qwen-code/pull/8529) @DragonnZhang
> 从 models.dev 获取模型模态并配合磁盘缓存，无需冷启动等待网络请求，优化模态感知。

**6. [功能] feat(omni): 受管媒体存储，含 GC 与上传缓存** — [#8364](https://github.com/QwenLM/qwen-code/pull/8364) @GCGH159
> 为多模态实验产物实现内容寻址对象存储，包含标记-清除 GC、容量预算、崩溃恢复与持久化上传缓存。

**7. [修复] fix(cli): 零高度 VP 项上报，折叠思考块释放空间** — [#8570](https://github.com/QwenLM/qwen-code/pull/8570) @chiga0
> 虚拟视口模式下，折叠的思考块立即释放占用的纵向空间，修复了折叠后留下空白区域的问题。

**8. [功能] feat(voice): 支持可信私有 ASR Base URL** — [#8350](https://github.com/QwenLM/qwen-code/pull/8350) @rockybot2026
> 新增 `security.allowedInsecureVoiceBaseUrls` 精确白名单（默认空），使私有网络 ASR 网关可用，同时保持默认拒绝策略。

**9. [功能] feat(channels): 支持群组配对** — [#8440](https://github.com/QwenLM/qwen-code/pull/8440) @qqqys
> 群聊可按稳定 chat ID 一次性审批，成员共享使用权限。复用既有配对码流程，保留发起者审计上下文。

**10. [修复] fix(core): 移除 Goal 固定 50 次续跑上限** — [#8421](https://github.com/QwenLM/qwen-code/pull/8421) @qqqys
> Goal v3 不再硬编码 50 次上限，活动 Goal 可持续获得运行时许可，直到真正达到生命周期终点或用户暂停/清除。

> 其他值得关注：[#8364](https://github.com/QwenLM/qwen-code/pull/8364) Omni 媒体存储为多模态铺路；[#8445](https://github.com/QwenLM/qwen-code/pull/8445) 为 Web Shell 认证体验关键修复；[#8350](https://github.com/QwenLM/qwen-code/pull/8350) 为私有化部署语音能力打开入口。


## 五、功能需求趋势

从近期 Issue 中可以提炼出以下社区关注方向：

**1. 桌面端新一轮演进（高热度）**
- **重构方向明确**：Electron 桌面应用让位于 Tauri 壳复用 Web Shell（[#8092](https://github.com/QwenLM/qwen-code/issues/8092)、[#8596](https://github.com/QwenLM/qwen-code/issues/8596)），并提出重命名 `desktop-shell` → `desktop`
- **手机远程接入**：QR 码配对访问本地会话，零手工配置的 "Local Control" 模式（[#8595](https://github.com/QwenLM/qwen-code/issues/8595)）

**2. 安全加固持续强化**
- 只读 Shell 分类器绕过（[#8582](https://github.com/QwenLM/qwen-code/issues/8582)）与密码泄露（[#8136](https://github.com/QwenLM/qwen-code/issues/8136)）显示安全边界测试与审计需求迫切
- 私有 ASR 白名单（PR #8350）表明企业级部署对安全配置细粒度的需求

**3. 后台自动化与可观测性**
- 后台 Agent 恢复与 `activeWork` 事实跟踪（[#8586](https://github.com/QwenLM/qwen-code/issues/8586)）
- OpenTelemetry 会话生命周期对齐（[#8589](https://github.com/QwenLM/qwen-code/issues/8589)、PR #8616）

**4. 模型与服务兼容性**
- Anthropic 点分版本别名与 Opus 5 token 支持（[#8584](https://github.com/QwenLM/qwen-code/issues/8584)）
- 多模态能力：模型模态自动解析（PR #8529）与受管媒体存储（PR #8364）

**5. 低成本批处理模式**
- `/slow` 或 `/batch` 异步批量执行模式，降低运行成本（[#8605](https://github.com/QwenLM/qwen-code/issues/8605)）

**6. 平台分发路线图**
- 群组配对、通道扩展（PR #8440、#8517）说明社区协作与多渠道接入需求在增长


## 六、开发者关注点（痛点与高频反馈）

**高频痛点 Top 5：**

1. **终端渲染稳定性（多起报告）**：tmux < 3.5 下的持续闪烁（#8580）、窗口 resize 后的重复输出（#8557）、VP 模式下折叠空间未释放（PR #8570）——终端体验仍是 CLI 用户的核心诉求。

2. **Desktop 基础功能缺失**：复制按钮无响应（#8538）、Markdown 链接不可点（#8593）、语言切换无效（#8592）、Windows 启动崩溃（#8615）——桌面端 0.x 仍处于功能补齐阶段。

3. **VSCode 插件文件链路断裂**：嵌套文件的 Edit/Write 链接错误解析（#8606）——影响编辑器内核心工作流，反应迅速（3 条评论）。

4. **CI 基础设施可靠性**：`/review` 高频超时（#8597）、CI 日志误报磁盘满（#8532）——自动化质量直接影响开发效率。

5. **安全边界被绕过**：命令注入绕过只读分类器（#8582）、密码泄露（#8136）——安全类问题社区响应快，需高优先级处理。

**值得注意**：Issue #8562（tmux 闪烁）由用户用 **Qwen 3.8 Max 自行排查** 后确认是 Qwen Code 版本问题并主动反馈，体现社区自驱力；同时这类 LLM 辅助排查的行为模式也说明开发者对工具链的期望在提高。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-06** | **数据来源：**[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)


## 1. 今日速览

今日社区重心明显转向 **v0.9.4 发布列车的 Runtime API 生态扩展**，连续提交了 5 个 PR 为运行时管理接口新增内存、MCP、目标循环、验证器凭证及技能生命周期端点，标志着从「TUI 单机工具」向「可编程 Agent 运行时」的平台化转型。与此同时，**交互体验打磨**持续进行，三个高价值 PR 分别解决了鼠标滚轮失效、wait 耗时对模型不可见以及子代理检查点恢复等问题。此外，中文社区贡献活跃，Windows 新手中文指南 PR 进入合并流程。


## 2. 版本发布

过去 24 小时无新版本发布。当前正处于 **v0.9.4 发布列车**整合阶段（见 PR #5135），该分支目前领先 `main` 77 个提交，包含 18 个整合提交，预计近期将有正式版本放出。


## 3. 社区热点 Issues

> 注：近 24 小时仅 1 条 Issue 有更新，以下结合近一周活跃 Issue 综合筛选。

### 3.1 高活跃度 Issue

**#4029 [OPEN] 计划打造类似 Reasonix 的界面？** ⭐
- **作者：** longASKme | **创建：** 2026-07-04 | **更新：** 2026-08-05 | **评论：** 4
- **摘要：** 询问是否计划构建类似 Reasonix 风格的界面。
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/4029)
- **为何重要：** 社区对界面现代化的诉求持续存在，用户在等待官方对视觉方向的回应，反映 TUI 工具在向更友好交互演进的需求。

> **说明：** 当前 Issue 池整體活跃度较低，更多技术讨论通过 PR 进行（见下文），社区协作模式以「代码贡献代替问题反馈」为主。


## 4. 重要 PR 进展

### 4.1 🚀 平台能力扩展（v0.9.4 Runtime API 系列）

**#5131 Runtime API 内存端点 — 有界检查与生命周期控制**
- **作者：** Copilot | 更新：2026-08-05
- **内容：** v0.9.4 路由表缺少内存资源，托管客户端无法检查活动内存及其来源/范围。新增 `/v1/memory` 端点组，支持有界内存读取与生命周期控制。
- [PR #5131](https://github.com/Hmbown/CodeWhale/pull/5131)
- **重要性：** 补齐 Runtime API 的内存可观测性，是托管客户端实现完整状态管理的关键拼图。

**#5130 Runtime API：MCP 服务器配置与生命周期管理**
- **作者：** Copilot | 更新：2026-08-05
- **内容：** 之前 MCP 清单只读，增删改需直接编辑 TOML/JSON。新增 `POST /v1/apps/mcp/servers` 等路由，支持完整的 MCP 服务器 CRUD。
- [PR #5130](https://github.com/Hmbown/CodeWhale/pull/5130)
- **重要性：** 将 MCP 配置从「文件编辑」升级为「API 操作」，显著提升 IDE/Web 客户端的集成能力。

**#5133 Runtime API：持久化目标循环状态与完成控制**
- **作者：** Copilot | 更新：2026-08-05
- **内容：** 新增 `/v1/threads/{id}/goal` 端点组，支持读取活动目标状态并通过规范运行时边界驱动生命周期转换。
- [PR #5133](https://github.com/Hmbown/CodeWhale/pull/5133)
- **重要性：** 目标循环是 DeepSeek 自主任务执行的核心，该端点使外部客户端首次获得目标的远程控制能力。

**#5132 Runtime API：验证器凭证与证据暴露**
- **作者：** Copilot | 更新：2026-08-05
- **内容：** 此前仅 `verifier_failed` 计数器可见。新增 `/v1/fleet/runs/{run_id}/receipts` 等只读端点，列出任务凭证、失败原因，支持重试决策。
- [PR #5132](https://github.com/Hmbown/CodeWhale/pull/5132)
- **重要性：** 验证器结果透明化是构建可信自动化工作流的前提。

**#5129 Runtime API：技能生命周期端点 — 安装/更新/卸载/信任/审计**
- **作者：** Copilot | 更新：2026-08-05
- **内容：** 此前仅支持技能的发现与启停。新增完整 HTTP 生命周期管理路由，覆盖 TUI 的全部技能操作能力。
- [PR #5129](https://github.com/Hmbown/CodeWhale/pull/5129)
- **重要性：** 将技能管理完整开放给托管客户端，为 IDE/Web 端的插件生态铺路。

**#5135 release: Codewhale v0.9.4 发布列车** 🚂
- **作者：** Hmbown | 更新：2026-08-05
- **内容：** v0.9.4 集成分支，包含 77 个领先 `main` 的提交（18 个列车提交 + 2026-08-01 全部候选源码），取代 #5044。
- [PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135)
- **重要性：** 版本整合中枢，所有上述 Runtime API 扩展将随此版本发布。

### 4.2 ⚡ 交互体验与 Bug 修复

**#5240 TUI/Shell：工具内容中显示真实等待耗时**
- **作者：** SparkofSpike | 更新：2026-08-05
- **内容：** `wait`/delta 工具的 `duration_ms` 仅存在元数据中，模型不可见 — 导致所有等待结果看起来相同，模型会误判长任务为短任务而忙轮询。本次将该值暴露到工具内容中。
- [PR #5240](https://github.com/Hmbown/CodeWhale/pull/5240)
- **重要性：** 修复了 wait 语义对模型不可见的根本缺陷，将显著改善长任务场景的模型决策质量。

**#5242 TUI/Subagent：通过 followup 从检查点恢复中断子代理**
- **作者：** SparkofSpike | 更新：2026-08-05
- **内容：** 此前对 `interrupted_continuable` 子代理执行 followup 会进入死信队列 — 检查点被保留但无法真正恢复执行。本次修复使长任务（文档审查、多步搜索）可从断点续跑。
- [PR #5242](https://github.com/Hmbown/CodeWhale/pull/5242)
- **重要性：** 填补子代理恢复的关键空白，大幅减少中断后重新调度的资源浪费。

**#5234 TUI：鼠标捕获期间保持备用滚动关闭**
- **作者：** SparkofSpike | 更新：2026-08-05
- **内容：** 修复 #5223：当对话内容超出屏幕时，滚轮操作不滚动对话而是切换了输入历史。根因是 `recover_terminal_modes()` 同时启用了鼠标捕获和 xterm 备选滚动模式（DECSET?），两者冲突。
- [PR #5234](https://github.com/Hmbown/CodeWhale/pull/5234)
- **重要性：** 直击日常高频操作痛点，修复滚轮滚动失效问题。

**#5192 [CLOSED] 固定 ratatui 至 0.30.0**
- **作者：** bistack | 更新：2026-08-05
- **内容：** 将 `ratatui` 固定为 `=0.30.0`。因 ratatui-core 0.1.1+ 的 `Terminal::clear()` 会发送阻塞式光标位置报告（CPR）查询，与 TUI 事件循环争抢 crossterm 内部读锁导致启动死锁。
- [PR #5192](https://github.com/Hmbown/CodeWhale/pull/5192)
- **重要性：** 供应链依赖锁定，防止上游不兼容更新引发启动崩溃。

### 4.3 📚 文档与平台适配

**#5229 新增中文版 Windows 新手指南**
- **作者：** vFONGv | 更新：2026-08-05
- **内容：** 新增 `WINDOWS_BEGINNER.zh-CN.md`，覆盖安装、配置、模型切换、模式与权限、常见问题。命令与路径已在 Windows 10 实测验证，附真实操作截图。仅新增文件，不改动现有内容。
- [PR #5229](https://github.com/Hmbown/CodeWhale/pull/5229)
- **重要性：** 降低中文用户 Windows 上手门槛，社区本地化贡献的积极信号。

**#5236 文档证据：附加实时 Model Studio #5203 证明**
- **作者：** Inference1 | 更新：2026-08-05
- **内容：** 用本地 Terminal MP4 和阿里云 Model Studio Token Plan 截图替换旧终端截图，证明 `qwen3.8-max` 的推理到工作（reasoning-to-working）状态转换和活跃订阅。
- [PR #5236](https://github.com/Hmbown/CodeWhale/pull/5236)
- **重要性：** 使文档可验证性大幅提升，为模型集成支持提供实证。

**#5095 [CLOSED] 修复 ohos：Windows 链接器参数空格重新引号**
- **作者：** shenjackyuanjie | 更新：2026-08-05
- **内容：** rustc 将含空格的链接器参数传为带引号字符串，但 cmd 的 `%*` 扩展会剥离引号，导致 OpenHarmony SDK 安装在带空格路径（如默认 `D:\DevEco Studio\...`）时 `--sysroot` 被错误分割。
- [PR #5095](https://github.com/Hmbown/CodeWhale/pull/5095)
- **重要性：** 修复 Windows 下 OpenHarmony 交叉编译的路径处理缺陷。

**#5225 ACP：通过 session/prompt 暴露文件/搜索/git/patch/shell 工具**
- **作者：** rafaelcavalheri | 更新：2026-08-05
- **内容：** ACP 服务器 `session/prompt` 此前仅流式返回模型文本，不执行模型请求的工具调用。导致基于 ACP 的编辑器/桥接器（Zed、`acp-deepseek-adapter`）只能获得纯聊天代理。本次补上工具执行能力。
- [PR #5225](https://github.com/Hmbown/CodeWhale/pull/5225)
- **重要性：** 使 ACP 从「聊天 API」升级为「真正的编码 Agent API」，为 Zed 等编辑器的深度集成扫清障碍。


## 5. 功能需求趋势

| 趋势方向 | 代表 PR/Issue | 说明 |
|---------|--------------|------|
| **Runtime API 平台化** | #5129-#5133 | 将内存/MCP/目标/验证器/技能全部 API 化，朝「可编程 Agent 运行时」演进，服务 IDE 与 Web 托管客户端 |
| **ACP 协议深度集成** | #5225 | 让 Zed 等编辑器获得完整工具执行能力，从聊天升级为编码代理 |
| **长时间任务可靠性** | #5240, #5242 | wait 耗时可见性、子代理断点续跑，针对长任务场景的系统性优化 |
| **终端交互打磨** | #5234 | 滚轮冲突、鼠标捕获等高频 UI 痛点的精细化修复 |
| **多模型/多平台支持** | #5236, #5095, #5229 | qwen 模型实证、OpenHarmony 适配、Windows 中文文档 — 生态扩展持续 |
| **依赖供应链锁定** | #5192 | 对未来上游不兼容变更的防御性加固 |


## 6. 开发者关注点

- **API 可编程性是当前最高优先级**：5 个密集提交的 Runtime API 端点 PR 表明核心团队正将 DeepSeek 从「TUI 应用」重构为「Agent 运行时平台」，开发者应关注 v0.9.4 发布后的 API 兼容性承诺。
- **长任务执行的信息不对称痛点**：wait 耗时对模型不可见导致误判轮询策略（#5240）、中断子代理无法恢复（#5242）是 Agent 可靠性提升的关键瓶颈，这两处修复对于自动化工作流用户价值极高。
- **终端兼容性风险持续存在**：鼠标捕获与备选滚动模式冲突（#5234）、ratatui 0.1.1+ 的 CPR 死锁（#5192）、Windows 路径空格问题（#5095）共同指向终端生态的碎片化仍是主要 Bug 来源。建议贡献者注意终端模式切换的交叉测试。
- **ACP 集成预期升温**：#5225 的合入将直接解锁 Zed 等编辑器的完整 Agent 能力，社区对第三方 `acp-deepseek-adapter` 的集成质量关注度可能随之上升。
- **中文社区贡献活跃度高**：中文 Windows 上手文档（#5229）在极短时间内完成且质量扎实（实测验证），显示非英语母语用户的贡献意愿与实际交付能力，维护者可考虑继续引导本地化贡献。

---
*本日报由 AI 技术分析师自动生成，数据截至 2026-08-06。所有链接均指向 Hmbown/CodeWhale 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*