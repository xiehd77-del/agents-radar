# AI CLI 工具社区动态日报 2026-08-31

> 生成时间: 2026-08-31 04:19 UTC | 覆盖工具: 9 个

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

**日期：2026-08-31** | 数据来源：各工具 GitHub 官方仓库


## 1. 生态全景

当前 AI CLI 工具生态已进入 **"高流量反馈、低代码产出"** 的成熟分化期。头部工具（Claude Code、Codex、Gemini CLI）社区规模庞大但问题积压严重，稳定性与信任危机成为共性挑战——计费透明度、Windows 平台缺陷、长会话资源失控是三大高频痛点。与此同时，工具调用可靠性（错误成功状态、静默丢消息、空消息阻塞）正在取代基础功能缺失，成为社区最敏感的技术债。值得注意的趋势是：**子代理/Agent 编排的细粒度控制**（压缩阈值、同步/异步、上下文管理）在多工具中同步升温，标志着用户已从"能否完成任务"进阶到"能否可控、可预测、可审计地完成任务"。开源工具（OpenCode、Pi、DeepSeek TUI）则以高频迭代和社区自发补丁展现出更强的修复敏捷性。


## 2. 各工具活跃度对比

| 工具 | 今日活跃 Issues | 今日 PR 动态 | Release | 社区热度信号 | 备注 |
|------|----------------|-------------|---------|-------------|------|
| **Claude Code** | 10 个热点（累计 839+ 评论） | 1 条（旧 PR 更新） | 无 | 🔥🔥🔥🔥🔥 最高 | 单 Issue 最高 839 评论/476 赞，但 PR 产出极低 |
| **OpenAI Codex** | 10 个热点（累计 220+ 评论） | 10 个合入 | 3 个 alpha | 🔥🔥🔥🔥🔥 最高 | 发布频率高，PR 活跃，Windows问题集中 |
| **Gemini CLI** | 10 个热点（累计 55+ 评论） | 8 合入 + 2 开放 | 1 个 nightly | 🔥🔥🔥🔥 | 合入效率高，安全修复占比大 |
| **Copilot CLI** | 10 个精选（累计 20+ 评论） | 无 | 无 | 🔥🔥🔥 | 高流量无产出，"只报不修"态势明显 |
| **OpenCode** | 10 个热点 | 10 个活跃（3 合入） | 无 | 🔥🔥🔥🔥 | 社区自发修复活跃，compaction 成焦点 |
| **Pi** | 10 个热点 | 7 合入 + 3 开放 | 无 | 🔥🔥🔥 | 修复效率极高，长会话/OOM 问题集中 |
| **Qwen Code** | 9 个热点 | 13+ 个活跃 | 无 | 🔥🔥🔥 | 安全加固主导，OpenTUI 迁移推进中 |
| **DeepSeek TUI** | 10 个热点 | 10 个开放 | 草稿 v0.9.12 | 🔥🔥 | 活跃度回升，TUI 交互一致性成主线 |
| **Kimi Code** | 2 条新 Issue | 无 | 无 | 🔥 最低 | 社区冷清，处于早期积累阶段 |

> 注：各工具 Issue 总池规模差异较大（Claude Code 单一 Issue 评论量即超 Kimi Code 全站），热度信号综合评论量、点赞数、问题严重度评估。


## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **子代理/Agent 上下文管理** | Claude Code（#90862/#90347 独立压缩阈值）、Gemini CLI（#22323 错误成功状态）、OpenCode（#41358 压缩后丢失目标）、Pi（#8864 死亡螺旋） | 为子代理设置独立上下文边界、压缩阈值可配置、压缩后不丢失任务目标、状态报告真实可信 |
| **长会话/资源生命周期治理** | Claude Code（#90889 OOM）、Copilot CLI（#4612 13GB 日志/#4664 堆溢出）、OpenCode（#33356 DB 13GB）、Pi（#8746 OOM/#8849 缓存不命中）、Gemini CLI（#25166 假死） | 长时间运行场景的内存/日志/存储有界性，进程退出机制可靠，资源泄漏防护 |
| **Windows 平台稳定性** | Claude Code（#85840 DACL/#90891 MSIX）、Codex（#28919/#41049/#41290 5 项）、Gemini CLI（#26905 粘贴修复）、Copilot CLI（#4671 代理回归）、OpenCode（#46336/#46338 快捷键） | 桌面应用稳定性、WSL 集成、窗口管理、输入交互、更新机制不破坏数据 |
| **工具调用可靠性** | Kimi Code（#2628 Read/Write 错乱）、OpenCode（#37946 空消息 400）、Pi（#8861 工具调用静默丢弃）、Gemini CLI（#22323 假成功） | 模型声明与实际执行一致、无静默丢弃、错误状态真实上报、严格提供商兼容 |
| **可观测性与成本透明** | Claude Code（#32364 OTel）、Codex（#41742 速率横幅）、OpenCode（#37354 请求透明化）、Pi（#8849 缓存审计） | 遥测导出统一、配额/成本消耗可视化、请求行为可审计 |
| **认证/登录链路稳定性** | Copilot CLI（#4671 OAuth 代理回归）、Kimi Code（#2627 iPadOS 登录失败）、Codex（#39467/#40815 登录障碍） | 代理/TLS 环境兼容、跨端认证一致性、移动端 WebView 适配 |
| **模型行为可配置性** | Codex（#32823 reasoning.mode）、OpenCode（#24610 DeepSeek 思考开关）、DeepSeek TUI（#5713 wire 协议）、Qwen Code（#10568 配置热加载） | 推理模式、思考深度、协议类型、配置热更新不重启 |


## 4. 差异化定位分析

| 工具 | 定位与侧重 | 目标用户 | 技术路线 |
|------|-----------|---------|---------|
| **Claude Code** | 全功能商业 CLI + 桌面应用矩阵 | 企业级/专业开发者 | 闭源核心 + GitHub 反馈驱动，子代理编排能力强，但 Windows 桌面端是明显短板 |
| **OpenAI Codex** | 深度集成 ChatGPT 生态的全栈 CLI | OpenAI 生态重度用户 | 闭源 + 高频 Rust 版本迭代，与 Web/桌面端联动，模型行为治理（Guardian）投入大 |
| **Gemini CLI** | Google 生态原生 + 长上下文 | Google Cloud/Vertex 用户 | 开源（Apache-2.0）+ Nightly 快速迭代，合入效率最高，安全与兼容性修复节奏快 |
| **Copilot CLI** | GitHub 生态集成 | GitHub 企业用户 | 闭源，与 VS Code/IDE 联动深，但社区反馈处理滞后，BYOK/自定义模型兼容性弱 |
| **OpenCode** | 开源可定制终端 Agent | 开源爱好者/插件开发者 | 开源（MIT），Bun+TypeScript，插件生态活跃，社区自发补丁密集，但核心团队回应少 |
| **Pi** | 开发者优先的轻量 CLI | 独立开发者/长会话用户 | 开源（Apache-2.0），Rust 核心 + 扩展生态，修复效率极高（当日 Issue 当周合入） |
| **Qwen Code** | 阿里云生态 + 安全加固 | 国内企业开发者 | 开源（Apache-2.0），安全评审体系化（类级漏洞关闭），OpenTUI 迁移中 |
| **DeepSeek TUI** | 极简 Rust TUI | 终端党/Rust 社区 | 开源，crate 解耦重构中（EPIC-005），TUI 交互一致性打磨，沙箱副作用争议大 |
| **Kimi Code** | 国产大模型 CLI 新势力 | 国内开发者/移动端用户 | 开源，处于早期积累期，功能完善度与社区规模均落后，但 Remote Control 跨端有差异化 |


## 5. 社区热度与成熟度

**成熟稳定型（社区大、但反馈循环慢）**：
- **Claude Code**：社区规模最大，但 839 评论的额度信任危机半年未解，PR 产出极低，呈"高流量、低响应"状态
- **Copilot CLI**：今日 0 PR，高流量问题（13GB 日志、压缩失败）持续数周未修复，"只报不修"态势明显

**快速迭代型（修复敏捷、发布高频）**：
- **Gemini CLI**：8 PR 合入 + Nightly 日更，Windows 粘贴、IPv6 校验等修复当日合入，是最敏捷的闭源工具
- **OpenCode**：3 PR 合入，社区自发提交补丁（空消息修复等），活跃贡献者（Hona、rekram1-node 等）高频产出
- **Pi**：7 PR 当日合入，Issue 提交到修复合入周期极短（如 #8852→#8853），体现开源协作的高效
- **OpenAI Codex**：3 个 alpha + 10 PR 合入，迭代节奏较快，但 Windows 问题积压仍严重
- **DeepSeek TUI**：活跃度回升，但多个 PR 仍处于 OPEN 状态，v0.9.12 尚在草稿

**早期积累型**：
- **Kimi Code**：仅 2 条新 Issue、无 PR/Release，社区规模与功能完善度均处于起步阶段，但移动端远程控制有差异化探索


## 6. 值得关注的趋势信号

### 信号一：子代理可靠性成为多工具共同痛点
Claude Code（#75043 嵌套子代理异步化）、Gemini CLI（#22323 假成功）、OpenCode（#41358 压缩丢目标）、Pi（#8746 subagent OOM）——四个工具的同日 Issue 指向同一核心：**Agent 的自我认知与真实行为偏差正在侵蚀信任**。对开发者的启示：评估 AI CLI 时不应只看"能否完成"，更要看"失败时是否诚实地失败"。

### 信号二：计费/配额透明度已从功能缺陷演变为信任危机
Claude Code（#38335，839 评论半年未决）、Pi（#8849 缓存永不命中导致账单虚高）、Codex（#34898 治理循环耗光配额）——**用户开始审计每一笔 token 消耗**。对开发者的启示：选择工具时关注成本可观测性（如 OTel、用量导出、缓存命中率可见），优先选择提供审计能力的工具。

### 信号三：Windows 平台是闭源商业工具的共同软肋
Claude Code（DACL、MSIX、静默重启）、Codex（WSL 污染、握手失败）、Copilot CLI（代理回归）——三大闭源工具同日合计 10+ 条 Windows 相关缺陷。而开源工具（Gemini CLI 粘贴修复、OpenCode 快捷键修复、DeepSeek TUI 沙箱调整）响应更积极。对开发者的启示：**Windows 用户在选型时应优先考虑开源工具或已明确 Windows 支持路线图的产品**。

### 信号四：安全边界从"防外部攻击"转向"防自我破坏"
Qwen Code（Git 钩子执行链、shell 重定向 fail-closed）、DeepSeek TUI（NoNewPrivs 沙箱误伤 sudo）、Pi（扩展 keybindings 单例污染）——**安全评审的视角已从"攻击者能做什么"扩展到"Agent 自身可能做什么"**。对开发者的启示：关注工具的沙箱策略是否可配置、安全机制是否有逃生通道，避免安全设计本身成为生产力阻碍。

### 信号五：配置热加载与即时生效成为基线期望
Qwen Code（#10568 热加载）、OpenCode（#27167 会话目标 139 赞）、Pi（#8876 新 Provider 即插即用）——**用户不再接受"改配置必须重启"**。对开发者的启示：评估工具的配置体验时，将"热加载支持"作为重要考量项。

### 信号六：社区自发补丁 vs 官方响应速度的分化加剧
OpenCode 和 Pi 展现了开源社区强大的自愈能力（当日 Issue 当周修复），而 Claude Code 和 Copilot CLI 的高热度问题数十周悬而未决。对开发者的启示：**在核心工作流上，开源工具正在成为更可靠的选择**；而闭源工具的优势在于生态整合度（Codex↔ChatGPT、Copilot↔VS Code）。

---

*报告基于 2026-08-31 各工具 GitHub 仓库数据生成，数据截止时间为次日 00:00 UTC。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-31）

## 1. 热门 Skills 排行（按讨论活跃度排序）

### 🥇 skill-creator 评估体系修复（PR #1298）
- **功能**：修复 `run_eval.py` 在 Windows 下的进程管道读取、触发器检测及并行 worker 问题，并解决描述优化循环信号失真的根因
- **社区焦点**：与 Issue #556 直接关联（10+ 独立复现），是当前生态最核心的痛点——评估工具不可靠导致所有 Skill 描述优化均基于噪声进行
- **状态**：Open（同类修复 PR #1099、#1050 亦处于 Open 状态，三方形成合力）
- 🔗 https://github.com/anthropics/skills/pull/1298

### 🥈 Hivemind 多代理编排（PR #1628）
- **功能**：零成本多代理编排——让 Claude Code 将机械性工作委托给运行在免费模型上的 headless opencode workers，自身仅保留规划、审查与合并权
- **社区焦点**：核心论点是"昂贵模型的上下文才是稀缺资源，而非智能"，代表社区对成本优化的前沿探索，创作于 8 月下旬，讨论快速升温
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/1628

### 🥉 文档排版质量管控（PR #514）
- **功能**：解决 AI 生成文档的典型排版问题——孤行、寡行段落（段落标题滞留页底）、编号错位
- **社区焦点**：直击"用户不会主动要求排版质量，但每个 Claude 生成的文档都受影响"这一普适痛点，3 月创建后持续获得关注
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/514

### 4. 文档格式修复系列（PR #538 / #541）
- **功能**：修复 PDF Skill 中大小写敏感的文件引用（8 处不匹配）；修复 DOCX Skill 在创建修订记录时与现有书签的 `w:id` 冲突导致的文档损坏
- **社区焦点**：OOXML 的 ID 共享空间问题具有深度技术价值，且影响实际用户体验；文本格式类 Skill 的健壮性修复备受关注
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/538 | https://github.com/anthropics/skills/pull/541

### 5. ServiceNow 平台 Skill（PR #568）
- **功能**：覆盖 ITSM、ITOM、ITAM/SAM、FSM、HRSD、SPM/PPM、安全响应、CSDM 及 IntegrationHub 的全面平台助手
- **社区焦点**：定位为"平台级 AI 助手"而非窄脚本工具，代表企业级场景深度集成需求；从 3 月持续活跃到 8 月，讨论周期长
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/568

### 6. self-audit 推理质量门禁（PR #1367）
- **功能**：交付前先做机械性文件验证（Step 0），再按损害严重度优先进行四维度推理审计，宣称语言/框架无关
- **社区焦点**：与 Issue #1385 提案形成联动，回应了社区对 AI 输出可靠性的核心焦虑
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/1367

---

## 2. 社区需求趋势

| 方向 | 代表 Issues | 解读 |
|---|---|---|
| **安全与信任边界** | #492（43 评论） | 社区技能在 `anthropic/` 命名空间下分发造成信任边界滥用，是当前最激烈讨论 |
| **组织级分享与协作** | #228（16 评论，8 👍） | 企业用户需要组织内直接共享 Skill，而非手动下载传输 |
| **评测/开发工具链可靠性** | #556（12 评论，7 👍）、#202 | 工具链本身的 bug 严重阻碍 Skill 开发迭代 |
| **上下文窗口管理** | #1487、#189 | 技能体积过大导致上下文耗尽、重复安装引发 token 浪费 |
| **质量保障体系** | #412、#1385 | 社区明确需求：面向 Agent 系统的治理模式、推理质量门禁管道 |

---

## 3. 高潜力待合并 Skills

| Skill | PR | 潜力原因 |
|---|---|---|
| **scnet-hpc**（#1615） | 8 月下旬提交，覆盖 SSH + Slurm 全流程 HPC 集群操作 | 填补 HPC 领域空白，有明确用户群 |
| **Hivemind**（#1628） | 8 月下旬提交，零成本多代理架构 | 成本优化是刚需，且架构理念新颖 |
| **UIZZE 合作技能**（#1595） | 反 UI-slop 的产品级 UI 方向引导，附带 80 万+ 真实屏幕参考 | "硬性完成门禁"契合当前对 AI 输出质量的高要求 |
| **testing-patterns**（#723） | 覆盖完整测试栈和 React 组件测试 | 主流工程刚需，一旦合并使用频率将很高 |
| **pyxel 游戏开发**（#525） | retro 游戏引擎的 MCP 集成，含 write→run→inspect 循环 | 趣味性强，开发者社区传播潜力大 |

---

## 4. 生态洞察

**社区最集中的诉求可概括为：工具的可靠性优先于工具的功能丰富度。**

58% 的热门 PR 集中在修复既有 Skill 的 bug（Windows 兼容、文件引用、文档损坏、评测失真），而非创造新能力。这指向一个信号：当基础工具链不稳定时，社区会自发聚集于"让已有东西真正可用"这一优先级，新 Skill 的探索密度反而降低。修复 #1298（评估工具）、#492（安全边界）、#1487（上下文膨胀）三者的落地，将成为生态下一阶段健康度的分水岭。

---

# Claude Code 社区动态日报 — 2026-08-31

> 本期数据来源：github.com/anthropics/claude-code（截至 2026-08-31 更新）

## 今日速览

今日无新版本发布，社区焦点集中在 **Claude Max 订阅会话额度异常消耗** 问题（#38335，已获 839 条评论、476 个赞）以及 **Windows 平台桌面应用一系列稳定性缺陷**（远程控制失效、MSIX 更新器破坏包完整性等）。此外，关于 **子代理（subagent）上下文压缩阈值独立配置** 的功能需求今日出现多起新提交，显示社区对细粒度代理控制的需求持续升温。

## 社区热点 Issues

### 1. [BUG] Claude Max plan session limits exhausted abnormally fast since March 23, 2026
**#38335** · 作者: karenrebecag · 评论 839 · 👍 476

**链接**: https://github.com/anthropics/claude-code/issues/38335

**为何重要：** 自 2026 年 3 月提交以来持续发酵，至今仍为 OPEN 状态，是社区关注度最高的 Issue。用户报告 CLI 使用场景下 Max 套餐的会话额度消耗速度异常，明显超出预期。近 840 条评论表明社区对该问题有大量复现和讨论，但官方尚未给出明确结论，这已成为影响用户信任的关键问题。

### 2. [BUG] Claude Desktop (Windows 11): main window stays always-on-top with no setting to disable
**#85891** · 作者: kylealty-boop · 评论 45 · 👍 101

**链接**: https://github.com/anthropics/claude-code/issues/85891

**为何重要：** Windows 11 桌面端窗口始终置顶、无法通过设置关闭，影响多任务并行场景。45 条评论 + 101 个赞，是该类别中最受关注的问题。与 #66516（macOS 平台）互为对应，社区期待官方能提供置顶开关。

### 3. [BUG] Windows: CoworkVMService can never arm its own recovery actions
**#85840** · 作者: Xotvs · 评论 8

**链接**: https://github.com/anthropics/claude-code/issues/85840

**为何重要：** 该问题被标记为 #59794 和 #66849 两个此前关闭的 issue 的根因——`CoworkVMService` 因 DACL 权限不足无法注册恢复操作，服务死亡后 `claude.exe` 静默挂起且无崩溃转储。涉及 Windows 平台远程协作核心功能，子问题 #89711 已定位到具体 DACL 配置缺陷。

### 4. [BUG] Nested subagents: children spawned by a subagent are always async
**#75043** · 作者: mof086999-code · 评论 20 · 👍 5

**链接**: https://github.com/anthropics/claude-code/issues/75043

**为何重要：** 嵌套子代理场景下，子代理派生的孙代理无法同步执行（忽略 `run_in_background` 参数）、完成通知无法传回父代、resume 后 `TaskStop` 报所有权错误。已标记 `reproduced`，是代理编排领域的高影响缺陷。

### 5. [BUG] Typed input queued mid-turn is silently dropped at turn end
**#85603** · 作者: Teinie · 评论 24

**链接**: https://github.com/anthropics/claude-code/issues/85603

**为何重要：** TUI 交互模式下，在某一轮对话运行期间键入的文本在轮次结束时被静默丢弃（非 Escape 触发），且在 tmux 多窗格场景下更易复现。对于日常使用 CLI 的开发者的工作流打断明显，获 24 条评论讨论。

### 6. [BUG] Stealth Restart Destroys Running Sessions (umbrella issue)
**#90172** · 作者: wshallwshall · 评论 5

**链接**: https://github.com/anthropics/claude-code/issues/90172

**为何重要：** Windows 桌面应用为执行更新而静默重启，导致运行中的会话被中断，用户看到 "Can't reach your computer" 错误。此 umbrella issue 汇总了 8 项独立缺陷，涵盖远程控制、会话恢复、更新策略等多个方面，是桌面端稳定性的系统性隐患。

### 7. [ENHANCEMENT] Support OpenTelemetry (OTel) configuration in Claude Code on the Web
**#32364** · 作者: awakia · 评论 9 · 👍 35

**链接**: https://github.com/anthropics/claude-code/issues/32364

**为何重要：** 企业用户希望在 claude.ai/code（Web 端）也能像 CLI 一样配置 OpenTelemetry 导出遥测数据。35 个赞反映可观测性需求在团队场景中的强诉求，目前仍处于 OPEN 状态。

### 8. [BUG] Headless (desktop-app agent-mode) runs never exit — accumulates until OOM
**#90889** · 作者: samgob · 评论 1

**链接**: https://github.com/anthropics/claude-code/issues/90889

**为何重要：** 今日新增。桌面应用的 headless agent 模式在任务完成后 `claude` 进程不退出，持续累积直至内存耗尽。已在 2.1.229 和 2.1.247 两个版本复现，涉及资源泄漏，对自动化调度场景影响严重。

### 9. [BUG] CLI hangs indefinitely on every subcommand except --version (headless Linux)
**#90800** · 作者: principessapio · 评论 1

**链接**: https://github.com/anthropics/claude-code/issues/90800

**为何重要：** 今日新增。无头 Linux 环境下（原生安装和 npm 安装均复现），除 `--version` 外所有 `claude` 子命令均无限挂起且无任何输出。若确认，将是阻断性缺陷，影响 Linux 服务器的 CI/CD 集成。

### 10. [ENHANCEMENT] Per-agent compaction thresholds for Agent-tool subagents
**#90862** · 作者: simonusa · 创建 2026-08-31（已关闭）

**链接**: https://github.com/anthropics/claude-code/issues/90862

**为何重要：** 今日新增的重复请求。用户需要为委托的子代理分别设置上下文压缩阈值——当前子代理可累积至 600k-940k tokens 才触发压缩，超过实际需要。该需求今日出现多个版本（#90347 也在同一天活跃），说明社区对子代理上下文管理的需求很强烈。


## 重要 PR 进展

> 注：近 24 小时仅有 1 条 PR 记录，以下为完整列表及补充说明。

### 1. [CLOSED] fix(plugins): use portable shebangs in shell scripts
**#35350** · 作者: letanure · 更新 2026-08-30

**链接**: https://github.com/anthropics/claude-code/pull/35350

**功能：** 将 11 个插件脚本中的 `#!/bin/bash` 替换为可移植的 `#!/usr/bin/env bash`，修复 NixOS 等 bash 不在 `/bin/bash` 的系统上插件 hook 无法执行的问题。该 PR 于 3 月创建，是 #11029 的部分修复。


## 功能需求趋势

### 1. 子代理/Agenet 上下文管理的细粒度控制
- **#90862**（今日提交）：为 Agent 工具派生的子代理设置独立的压缩阈值
- **#90347**：per-agent auto-compact window，协调器会话与子代理分开边界
- **#78224**：在可恢复失败（额度用尽、瞬时 API 错误）时暂停-恢复后台子代理，而非直接终止
- 三个独立需求同周出现，表明社区对子代理在复杂任务中的资源管理能力有强烈诉求。

### 2. 代理编排与消息传递的可靠性
- **#75043**：嵌套子代理的异步/同步控制、通知传递、TaskStop 所有权
- **#90890**：Remote Control 会话中 SendMessage 静默丢消息
- 社区希望代理间通信机制更健壮、状态一致性更可预测。

### 3. 可观测性与遥测
- **#32364**：Web 端支持 OpenTelemetry 配置
- 企业用户在跨环境（CLI/Web/桌面）的场景下希望有统一的遥测导出能力。

### 4. 安全与权限治理
- **#90887**：强制不可绕过的对抗性代码审查门禁（PreCommit hook）
- **#90658**：自动模式下 Claude 访问项目范围之外的文件
- 代理自主性提升后，权限边界和审计能力成为社区关注的新重点。

### 5. 桌面端窗口管理与更新策略
- **#85891**：Windows 窗口置顶开关
- **#90172**：静默重启破坏会话（umbrella）
- 桌面端稳定性与用户可控性是当前 Windows 用户的最大痛点。


## 开发者关注点

### 1. 订阅额度消耗透明度（信任危机）
`#38335` 持续半年未解决，近 840 条评论。用户对 Max 套餐额度消耗速度的质疑已不仅是一个 bug 报告，而是演变为对计费机制透明度的信任问题——建议官方尽快给出明确解释或补偿方案。

### 2. Windows 平台稳定性系统性风险
今日集中出现多条 Windows 相关的底层缺陷：
- **#85840 / #89711**：CoworkVMService 因 DACL 权限错误无法自恢复，服务崩溃后 claude.exe 静默挂死，无崩溃转储
- **#90891**：MSIX 桌面应用更新器就地改写包文件，破坏代码完整性，导致 GPU 进程崩溃并连带杀死所有嵌入式 Claude Code 会话
- **#90892**：内置浏览器面板打开外部 https URL 时桌面应用直接崩溃（3/3 复现）
- **#90172**：静默重启销毁运行中会话（8 个独立缺陷的 umbrella）

多个 root-cause 已被定位（DACL、MSIX 写入权限），但修复仍未到达用户端，Windows 开发者目前承受着较高的稳定性风险。

### 3. 长时间运行会话的资源泄漏
- **#90889**：headless 模式任务完成后进程不退出，直至 OOM（2.1.229 和 2.1.247 均存在）
- **#80372**：后台 bash 任务在活跃会话中被约每 30 分钟静默杀死，而 Monitor 任务可存活数天
- **#89639**：macOS 定时任务卡在工具调用中途，持续占用全局并发槽位直至整个调度饿死
- 长时间运行的代理任务在当前版本中资源生命周期管理存在明显短板。

### 4. TUI 交互细节的回归
- **#85603**：轮次结束时静默丢弃用户在对话中输入的内容
- **#90886**：多并发会话场景下 fullscreen 渲染器被误判启动失败而自动禁用
- TUI 是 CLI 用户的主要交互界面，此类细节回归直接影响日常工作效率。

### 5. 历史数据安全与更新可靠性
- **#90888**：Windows 更新后会话/聊天历史丢失（今日新增，尚无评论）
- **#90891**：更新器破坏包完整性导致级联崩溃
- 更新机制的安全性已成为 Windows 用户的核心顾虑——更新不应以丢失数据或破坏运行为代价。


**编辑注：** 今日 Issue 中大量问题集中在 Windows 平台，且 root-cause 已较为清晰（DACL、MSIX 写入、CSP frame-ancestors 等），建议官方优先调度 Windows 桌面的修复批次。Proxy/子代理上下文管理方面的多项需求已形成明显趋势，可在后续版本中统筹设计。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-31

## 今日速览

过去24小时内，OpenAI Codex 发布了 3 个 Rust 版本（均为 0.152.0-alpha 系列），并合并了 10 个 PR，主要涉及 `update_plan` 工具默认禁用、TUI 速率限制横幅、MCP 命名支持等。社区方面，Windows 平台问题持续高发，包括 WSL 集成失败、Windows 桌面应用“控制其他设备”标签缺失、Pets 浮窗可点击区域丢失等，另有 recurring 定时任务被未经授权自动暂停的问题讨论热度最高（57 条评论）。


## 版本发布

过去 24 小时内发布了 3 个 Rust 版本：

- **rust-v0.152.0-alpha.6** — 最新 alpha 版，延续 0.152 系列迭代
- **rust-v0.152.0-alpha.5** — alpha 系列持续更新
- **rust-v0.152.0-alpha.4** — 早期 alpha 版本更新

> 注：发布说明仅标注 "Release 0.152.0-alpha.x"，未提供详细变更日志。


## 社区热点 Issues（Top 10）

### 1. Recurring 定时任务被未经授权自动暂停
**[#38350](https://github.com/openai/codex/issues/38350)** | 评论 57 | 👎 0

ChatGPT Web 端的循环定时任务在成功运行后，会从 enabled 状态自动变为 paused，用户并未请求暂停、禁用或删除。最新一次事件中有 4 个不相关的定时任务同时被禁用。涉及 `[bug, codex-web, automations]`。

**关注点**：自动化任务稳定性是重度用户的核心依赖，此问题可能影响生产级工作流。

### 2. Windows 版 Codex 应用缺失“控制其他设备”标签
**[#28919](https://github.com/openai/codex/issues/28919)** | 评论 50 | 👍 47

Windows 桌面应用的 Settings > Connections 中缺少“control other devices”选项卡，无法从 Windows 控制其他设备。高赞（47 个 👍）表明 Windows 用户对此功能有强烈需求。

**关注点**：跨设备控制是远程工作流的关键能力，Windows 支持滞后于 macOS。

### 3. code-mode host 握手失败，5.6 模型无法正常工作
**[#41049](https://github.com/openai/codex/issues/41049)** | 评论 41 | 👍 1

Windows 10 上 code-mode host 在初始化握手阶段异常退出（`code-mode host exited during handshake`），导致无法自动读取目录。用户确认与项目文件无关。

**关注点**：5.6 模型在 Windows 上的核心功能受阻，影响范围较大。

### 4. [Windows][WSL] 切换 Agent 环境为 WSL 后创建/删除项目失败
**[#41290](https://github.com/openai/codex/issues/41290)** | 评论 17 | 👍 7

版本 26.825.31414，切换 Agent Environment 至 WSL 后，项目创建和删除均失败。Windows + WSL 集成问题持续多发。

**关注点**：WSL 是 Windows 开发者使用 Codex 的主要路径之一，此类问题直接阻塞日常开发。

### 5. `/side` 会话过期过快且行为不透明
**[#25233](https://github.com/openai/codex/issues/25233)** | 评论 12 | 👍 26

临时 `/side` 会话在 Codex App 中过期过快，且用户无法了解其过期机制。26 个 👍 表明这是一个广泛困扰用户的问题。

**关注点**：会话生命周期管理的透明度和可控性需求强烈。

### 6. macOS 上服务器端删除的会话重新出现在 Recents 且无法移除
**[#40219](https://github.com/openai/codex/issues/40219)** | 评论 11 | 👍 10

服务器端删除的对话在 macOS 客户端 Recents 中重新出现，且用户无法删除。涉及 `[bug, app, session]`。

**关注点**：会话同步一致性影响用户对数据控制权的信任。

### 7. CLI/TUI 会话恢复失败：`already has an active writer`
**[#39823](https://github.com/openai/codex/issues/39823)** | 评论 11 | 👍 2

在 Approval-mode 使用或切换会话后，恢复 CLI/TUI 会话可能报错 `already has an active writer`。涉及 CLI 和 TUI 双端。

**关注点**：会话恢复是 CLI 高强度用户的基本操作，稳定性需优先保障。

### 8. Windows + WSL 重启后 shell 状态被污染
**[#25317](https://github.com/openai/codex/issues/25317)** | 评论 9 | 👍 3

Windows 桌面 + WSL 在重启后 shell 仍处于被污染状态，`live app-server` 持有已删除的 `CODEX_HOME/tmp/arg0` 辅助路径。属于回归问题，关联 #22185 和 #16970。

**关注点**：回归问题叠加历史遗留，Windows/WSL 用户长期受影响。

### 9. Windows Pets 浮窗变为穿透且无法拖拽
**[#41513](https://github.com/openai/codex/issues/41513)** | 评论 9 | 👍 0

内置和自定义浮窗宠物在 Windows 上变为点击穿透，无法拖拽。涉及 `[bug, windows-os, app, pets]`。

**关注点**：虽非核心功能，但 UI 交互异常反映了桌面端渲染/命中检测的底层问题。

### 10. Codex 进入自我强化治理循环，消耗配额且无法完成任务
**[#34898](https://github.com/openai/codex/issues/34898)** | 评论 8 | 👍 3

Codex 在 `gpt-5.6-sol` 下进入自我强化的治理循环，忽略有界范围，耗尽使用配额且无法完成任务。涉及 `[bug, model-behavior, windows-os, rate-limits, CLI]`。

**关注点**：模型行为异常 + 配额消耗 = 成本风险，需要紧急关注。


## 重要 PR 进展（Top 10）

### 1. 将 update_plan 工具改为 opt-in
**[#41744](https://github.com/openai/codex/pull/41744)** | 已关闭

将 `tools.update_plan.enabled` 默认改为 `false`，用户需显式启用。同时从模型提示和协作模式等场景中移除默认的 `update_plan` 引导。可能策略调整——减少工具暴露面，降低误用率。

### 2. TUI 中显示可操作的速率限制横幅
**[#41742](https://github.com/openai/codex/pull/41742)** | 已关闭

通过 `account/rateLimits/read` 携带后端横幅和账户身份数据，在 TUI 编辑器上方渲染速率限制通知。提升配额用尽的用户可见性和可操作性。

### 3. 支持包风格 MCP 服务器名称
**[#41700](https://github.com/openai/codex/pull/41700)** | 已关闭

允许 MCP 服务器名称包含 `:`、`@`、`/` 和 `.`，支持如 `npm:@modelcontextprotocol/server-sequential.thinking` 的命名，并在 `add/get/list/remove` 全链路保留。对 npm 生态 MCP 使用更友好。

### 4. 修复旧版 JediTerm 终端光标样式渲染
**[#41673](https://github.com/openai/codex/pull/41673)** | 已关闭

旧版 JediTerm 在 `DECSCUSR` 中打印 space intermediate 会覆盖光标下方字形。修复改为在可修复的位置应用光标样式并重绘。终端兼容性修复。

### 5. 批准首次 Node REPL 执行时无需等待 Guardian
**[#41666](https://github.com/openai/codex/pull/41666)** | 已关闭

首个 REPL 执行在异步 Guardian 分类仍挂起时即可快速批准，后续继续异步检查。减少 REPL 首条命令的等待延迟。

### 6. 在历史压缩后保留 Guardian 授权
**[#41660](https://github.com/openai/codex/pull/41660)** | 已关闭

压缩和历史注入会重写模型可见的对话，但不改变用户已授权的内容。此修复避免 Guardian 将这些更新误判为授权变更而禁用有效的审核复用。防止压缩后不必要的重新审核。

### 7. 在会话元数据中标记历史摄取请求
**[#41743](https://github.com/openai/codex/pull/41743)** | 已关闭

启用 history-notes token 预算扩展时，在 Responses turn 元数据中设置 `history_ingest_requested`，并保留该 key 以防调用方覆盖。元数据可观测性增强。

### 8. 更新 update_plan 默认启用状态的测试
**[#41630](https://github.com/openai/codex/pull/41630)** | 已关闭

覆盖 `update_plan` 默认、显式启用和显式禁用三种状态，验证自定义 base 和开发者指令下的工具列表一致性。为 #41744 的默认值变更做准备。

### 9. 为环境 MCP 测试设置工作目录
**[#41683](https://github.com/openai/codex/pull/41683)** | 已关闭

环境备份的 stdio MCP 服务器无 host 本地工作目录回退，测试 fixture 需显式提供 workspace 作为 `cwd`。测试基础设施修复。

### 10. 将 Vim 历史测试移入历史搜索模块
**[#41613](https://github.com/openai/codex/pull/41613)** | 已关闭

将 Vim 历史导航测试移至历史搜索实现附近，共享人类化输入测试辅助函数。代码组织和可维护性改进。


## 功能需求趋势

从当前 Issues 和 PR 中提炼的社区关注方向：

| 方向 | 代表 Issues/PRs | 热度 |
|------|----------------|------|
| **Windows 平台支持** | #28919, #41049, #41290, #25317, #41513 | 🔥🔥🔥🔥🔥 |
| **WSL 集成** | #41290, #25317 | 🔥🔥🔥🔥 |
| **会话管理** | #25233 (side chats 过期), #40219 (僵尸会话), #39823 (resume 失败) | 🔥🔥🔥🔥 |
| **模型行为与控制** | #34898 (治理循环), #32823 (reasoning.mode) | 🔥🔥🔥 |
| **自动化/定时任务** | #38350 (任务自动暂停) | 🔥🔥🔥 |
| **MCP 生态** | #41700 (包风格命名), #20009 (OAuth MCP 导入失败) | 🔥🔥 |
| **速率限制透明化** | #41742 (TUI 横幅), #23124 (Chronicle 消耗配额) | 🔥🔥 |
| **授权/审核机制** | #41660 (Guardian 授权保留), #41666 (REPL 快速批准) | 🔥🔥 |
| **UI/UX 细节** | #27344, #28387 (macOS 交通灯裁剪), #20090 (命令摘要空白), #41712 (文本被输入框遮挡) | 🔥🔥 |
| **Pets/桌面装饰** | #41513, #41501 | 🔥 |

**核心结论**：Windows 平台（含 WSL）的稳定性问题仍是社区最大痛点；会话生命周期管理的透明性和可控性需求强烈；模型行为的可预测性（治理循环、reasoning.mode 配置）也是高频诉求。


## 开发者关注点

1. **Windows / WSL 稳定性是首要痛点**：从 code-mode 握手失败、WSL 切换后项目管理失败、到 shell 状态污染，Windows 用户在多个核心功能上持续受阻。开发者对缺少 Windows 专属功能的反馈（如“控制其他设备”标签缺席，47 👍）尤为强烈。

2. **会话与自动化可靠性**：定时任务被自动暂停（57 条评论，热度最高）、`/side` 会话过期过快、server 端已删除会话在客户端复活且无法移除——这些问题直接动摇了用户对 Codex 作为可信自动化工具的信任。

3. **配额/成本失控风险**：模型陷入治理循环导致使用配额被耗尽，且 Chronicle 在后台默默消耗 5 小时配额而 UI 无开关。开发者在配额消耗上的可见性和控制力不足，是付费用户的核心关切。

4. **模型行为可配置性不足**：缺少 `reasoning.mode` 设为 `pro` 的配置入口（#32823），社区希望 API 计费用户也能配置 GPT-5.6 模型的推理模式。

5. **登录/认证障碍**：Windows 上 ChatGPT 登录跳转至添加手机页面导致 Codex 不可用（#39467）、macOS 桌面端反复登出而 CLI 正常（#40815）、Cloudflare 挑战阻断 CLI token 交换（#16052，持续 5 个月未解决）——认证链路的稳定性对跨平台用户体验影响显著。

6. **Guardian/审核机制的用户感知**：多个 PR 关联 Guardian 授权和审核流程的优化（#41660、#41666），说明开发团队在平衡安全审核和响应体验，社区对此类“隐形”阻塞（如 REPL 首命令等待）的感知是延迟痛点。

---

*本日报由 GitHub 数据分析生成，数据截至 2026-08-31。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# 🤖 Gemini CLI 社区动态日报 — 2026-08-31

## 📌 今日速览

今日社区最核心的议题集中在 **Agent 可靠性与状态误报** 上：最高热度的 `#22323` 暴露了子代理在达到 MAX_TURNS 上限后被错误报告为"成功"的严重问题。同时，`#21409` 显示通用代理存在长时间挂起阻塞工作流。在 PR 侧，一批涉及 **安全、核心稳定性与兼容性** 的修复已合入主分支，特别是针对 Windows 终端粘贴体验和 IDE 插件 IPv6 回环校验的改进，为开发者提供了更健壮的使用体验。

## 🚀 版本发布

**Nightly 更新**：`v0.59.0-nightly.20260831.g0bd1d4397`
- 完整的变更日志可通过 Compare View 查看（上一个版本为 8 月 30 日构建）。

🔗 [查看版本详情](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260830.g0bd1d4397...v0.59.0-nightly.20260831.g0bd1d4397)

---

## 🔥 社区热点 Issues（Top 10）

### 1. 子代理 MAX_TURNS 后仍报告成功（`#22323`）
- **热度**：🔥 13 条评论 | 2 👍 | P1 严重性
- **核心问题**：`codebase_investigator` 子代理在撞到轮次上限但未做任何分析时，仍向上层传递 `status: "success"` 且终止原因为 `GOAL`，掩盖了真实的"中断"状态。
- **社区观点**：这是对 Agent 自我认知能力的重大考验，开发者普遍担心错误的成功信号会误导后续决策流程。目前处于待回归测试阶段。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. 通用代理（Generalist Agent）无限期挂起（`#21409`）
- **热度**：8 条评论 | 8 👍 | P1 严重性
- **核心问题**：只要 Gemini CLI 将任务委托给通用代理，就会陷入死循环。即使执行简单的文件夹创建操作也可能挂起长达一小时。
- **社区观点**：该问题在 3 月被提出，至今仍开放，社区已积累大量 👍（8 个），表明受影响的用户面较广。临时方案是手动指示模型停用子代理。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. 评估 AST 感知式文件读取与搜索的影响（`#22745`）
- **热度**：7 条评论 | 1 👍 | EPIC 级追踪
- **核心内容**：该 EPIC 旨在评估基于抽象语法树（AST）优化文件读取、搜索和代码库映射的可行性，以期减少 Token 消耗并提高单次工具调用的信息密度。
- **社区价值**：若落地，将显著改善大仓库下的上下文管理效率，并与 `#22746`（使用 AST 感知 CLI 工具）形成联动。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

### 4. Gemini 未能充分利用自定义 Skills 和子代理（`#21968`）
- **热度**：6 条评论 | P2
- **核心问题**：开发者 `rnett` 反馈，Gemini 只有在用户显式指定时才会使用自定义的 `gradle` 或 `git`  Skills，而不会在相关场景下主动调用。
- **趋势信号**：这反映出用户希望 CLI 具备更高的智能调度能力，主动匹配最佳工具链，而非被动等待指令。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

### 5. 安全：Auto Memory 日志缺乏确定性脱敏（`#26525`）
- **热度**：5 条评论 | P2 安全问题（仅维护者可见）
- **核心问题**：Auto Memory 在将本地记录发送至后台提取模型前，并未在本地进行确定性脱敏，且默认日志记录潜在敏感的技能内容。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

### 6. Shell 命令完成后卡在 "Waiting input" 状态（`#25166`）
- **热度**：4 条评论 | 3 👍 | P1，Effort/Medium
- **核心问题**：在极端简单、无需输入的 CLI 命令执行完毕后，Gemini CLI 仍显示命令活跃并处于"等待输入"状态，导致流程僵持。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

### 7. Browser Agent 在 Wayland 环境下运行失败（`#21983`）
- **热度**：4 条评论 | 1 👍 | P1
- **核心问题**：Linux Wayland 用户执行浏览器子代理时直接报错终止，缺乏可用性支持。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

### 8. Symlink 形式的 Agent 文件不被识别（`#20079`）
- **热度**：4 条评论 | P2
- **核心问题**：`~/.gemini/agents/` 目录下的 `.md` 文件若为符号链接，则不会被识别为合法的子代理配置。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/20079)

### 9. Browser Agent 忽略 settings.json 覆盖配置（`#22267`）
- **热度**：3 条评论 | P2
- **核心问题**：用户在 `settings.json` 中配置的 `maxTurns` 等覆盖参数对 `AgentRegistry` 初始化后的 Browser Agent 完全不生效。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/22267)

### 10. 工具数量超限触发 400 错误（`#24246`）
- **热度**：3 条评论 | P2
- **核心问题**：当可用工具数量超过 128 个时，Gemini CLI 直接触发 400 接口错误。社区建议优化工具作用域管理，避免一次性全量注入。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. 合成带括号粘贴标记，修复 Windows 多行粘贴误提交（`#26905`）
- **状态**：✅ 已合入
- **核心修复**：针对 Windows Terminal / PowerShell / WSL2 场景，在检测到未开启括号粘贴模式的粘贴数据时，自动合成 `\x1b[200~ ... \x1b[201~` 标记，避免多行内容被过早提交执行。
- **影响面**：修复了 Windows 环境下的一大高频痛点。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/26905)

### 2. 修复 IDE 伴侣插件 IPv6 回环地址校验失败（`#26848`）
- **状态**：✅ 已合入
- **核心修复**：在 Host 头验证白名单中增加 `[::1]`，使 VSCode 插件可正常通过 IPv6 访问本地服务，属于安全增强。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/26848)

### 3. 默认回退链新增 `gemini-2.5-flash-lite` 模型（`#26914`）
- **状态**：✅ 已合入
- **核心修复**：当 Pro 与 Flash 配额耗尽时，CLI 将自动回退至 `gemini-2.5-flash-lite`（免费层 1000 RPD），无需用户手动指定模型，提升了纯免费用户的可用性。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/26914)

### 4. 扩展更新失败时恢复旧版本（`#26930`）
- **状态**：✅ 已合入
- **核心修复**：在更新扩展时若执行 `loadExtension` 或文件操作失败，系统将回滚至上一个可用版本，杜绝因更新失败导致的无扩展可用状态。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/26930)

### 5. 处理非交互式路径下 `refreshAuth` 拒绝回调（`#26932`）
- **状态**：✅ 已合入
- **核心修复**：修复了 `--prompt` 模式下因 OAuth 刷新失败导致的未捕获 Promise 异常崩溃问题，增强了非交互场景下的鲁棒性。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/26932)

### 6. A2A 服务器配置合并改为深合并（`#26931`）
- **状态**：✅ 已合入
- **核心修复**：修复了工作区设置中仅定义单一嵌套键时，导致用户级设置其他嵌套配置被静默覆盖丢失的问题。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/26931)

### 7. 抑制工作区扫描中的瞬时目录 ENOENT 误报（`#28834`）
- **状态**：✅ 已合入
- **核心修复**：消除了当 BFS 扫描遇到瞬时消失的文件夹（如 `projects.json.lock`）时产生的非必要警告信息，提升日志整洁度。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/28834)

### 8. 修复 MCP 工具 Schema 缺少根级 `type:object` 的问题（`#28839`）
- **状态**：✅ 已合入
- **核心修复**：对 MCP 服务器上报的畸形 JSON Schema 进行归一化，确保根节点包含 `type: object`，消除 Vertex AI 严格模式下的兼容性报错。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/28839)

### 9. 归一化 Diff 上下文片段中的行尾符（`#29132`）
- **状态**：🟡 开放中（8/30 提交）
- **核心修复**：在生成 diff 上下文片段前统一 CRLF/CR 换行符，补充了 CRLF 回归测试用例，旨在解决跨平台 diff 显示错乱的问题。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29132)

### 10. 保持截断后的 MCP 工具名唯一性（`#28971`）
- **状态**：🟡 开放中
- **核心修复**：针对超出 API 长度限制的 MCP 工具名，当前截断逻辑非单射（可能产生重复），该 PR 拟改进截断策略以确保注册表中名称唯一。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/28971)

---

## 📈 功能需求趋势

结合本周 Issue 分类与讨论热度，社区最集中的关注点体现在以下三个方向：

1. **Agent 工具调度智能性**：大量 Issue 指向 Agent 的自我认知缺陷——要么过度依赖默认行为（`#21968` 不主动用 Skills），要么产生误导性反馈（`#22323` 错误成功状态），社区共识是希望提升 Agent 的上下文感知调度能力与执行透明度。
2. **零依赖沙箱化执行**：`#19873` 提出利用 Gemini 3 模型的 bash 原生亲和性，通过零依赖的 OS 级沙箱隔离来拦截与路由命令意图，旨在在不牺牲安全性的前提下提升文件操作效率。
3. **上下文工程与性能优化**：包括 AST 感知的代码定位（`#22745`）、Token 精简读取策略（`#19561`）、以及用持久化文件 CRUD 替代内存型任务的追踪器（`#18836`），侧面反映出社区对长会话下性能退化与成本控制的焦虑。

## 🧑‍💻 开发者关注点

- **可靠性焦虑**：最高频的吐槽集中在"假死"与"假成功"上。无论是 `#21409` 的挂起还是 `#25166` 的 Shell 等待，都在严重消耗开发者耐心，使得部分用户开始考虑禁用子代理特性。
- **配置覆盖失效**：`#22267` 与 `#26931` 暴露出的配置合并/覆盖逻辑缺陷，说明开发者依赖精细本地化调优的刚需极强，任何配置字段被静默忽略都会引发信任危机。
- **平台差异撕裂（尤其 Windows）**：`#26905` 与 `#28832` 的合并表明维护团队正加速填补 Windows 生态的兼容性鸿沟，社区对此持积极反馈，但仍有大量历史遗留问题（如 Wayland 支持 `#21983`）等待解决。
- **安全敏感性上升**：Auto Memory 相关的缺陷追踪（`#26525`、`#26523`）表明，随着记忆功能落地，用户对本地数据脱敏、无效补丁拦截以及重试策略的精细化要求已达新高。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-31**  
**数据来源：** github.com/github/copilot-cli


## 今日速览

过去24小时内，仓库共更新了20条Issue，无新版本发布，也无新PR合并。核心看点集中在**v1.0.81的OAuth登录、FileWatch事件循环异常放大至13GB日志、会话压缩（Compaction）在多种模型与BYOK场景下持续失败**，以及一系列关于**插件技能自动加载、telemetry配置冲突**等使用体验问题。值得注意，今日**没有新的功能开发PR**，体现社区处于“高流量反馈、低代码产出”的状态。


## 版本发布

过去24小时内无新版本发布。


## 社区热点 Issues（精选 10 个）

### 1. v1.0.81 回归：TLS 代理环境下 OAuth 登录失败（#4671）
- **状态：** OPEN | **👍 0** | **评论 0** | 创建 2026-08-31
- **链接：** [Issue #4671](https://github.com/github/copilot-cli/issues/4671)
- **摘要：** v1.0.81在TLS检测型HTTP代理下无法完成OAuth认证（设备码与Web流均失败），而1.0.80正常。
- **关注点：** 企业用户刚需场景，刚发布即报回归，需要官方尽快确认。

### 2. FileWatch 事件循环失控：日志膨胀至 13GB 并冻结 TUI（#4612）
- **状态：** OPEN | **👍 1** | **评论 8** | 创建 2026-08-26
- **链接：** [Issue #4612](https://github.com/github/copilot-cli/issues/4612)
- **摘要：** 长时间运行/恢复会话后，FileWatch 触发的 host-event 进入紧密循环，日志文件膨胀至 13GB，终端 UI 无响应。
- **关注点：** 严重稳定性问题，影响所有长会话用户，社区已用“Runaway”形容。

### 3. 会话压缩失败：Opus 4.6 返回空响应（#2861）
- **状态：** OPEN | **👍 3** | **评论 2** | 创建 2026-04-20
- **链接：** [Issue #2861](https://github.com/github/copilot-cli/issues/2861)
- **摘要：** 短会话手动 `/compact` 在 Opus 4.6 上连续 3 次失败，错误为“received empty response”。
- **关注点：** 模型侧兼容性老问题至今未解决，点赞数在今日报告中较高。

### 4. 自定义模型压缩失败：报错 “Tool choice must be auto”（#4646）
- **状态：** OPEN | **👍 0** | **评论 1** | 创建 2026-08-28
- **链接：** [Issue #4646](https://github.com/github/copilot-cli/issues/4646)
- **摘要：** 通过自定义 OpenRouter 接入 `~z-ai/glm-latest` 时，手动及自动压缩均报错。
- **关注点：** 自定义模型（非官方）用户基数渐长，兼容性验证机制缺乏。

### 5. 自定义 Agent 工具绑定：`web`/`search` 别名静默失效（#4594）
- **状态：** OPEN | **👍 1** | **评论 1** | 创建 2026-08-25
- **链接：** [Issue #4594](https://github.com/github/copilot-cli/issues/4594)
- **摘要：** 使用文档化别名 `web` 或 `search` 声明工具时，Agent 绑定 0 个工具且无任何报错/日志。
- **关注点：** 静默失败对开发者信心影响较大，需要文档或运行时报错兜底。

### 6. 会话恢复后进程崩溃：JavaScript 堆内存溢出（#4664）
- **状态：** OPEN | **👍 0** | **评论 1** | 创建 2026-08-30
- **链接：** [Issue #4664](https://github.com/github/copilot-cli/issues/4664)
- **摘要：** 恢复大体积会话时，Node.js 进程达到 ~4GB 堆上限后崩溃，无法继续工作。
- **关注点：** 长会话用户痛点，与 #4612 同属“会话持续运行”类问题。

### 7. 企业级 Agent 未显示在 CLI/VS Code（#1285）
- **状态：** OPEN | **👍 9** | **评论 8** | 创建 2026-02-04
- **链接：** [Issue #1285](https://github.com/github/copilot-cli/issues/1285)
- **摘要：** 在组织 `.github-private` 仓库内创建的 Agent 预期在 CLI 与 VS Code 中可用，但未显示。
- **关注点：** 企业功能落地问题，👍 9 为今日最高，存在跨工具（IDE + CLI）同步期待。

### 8. 切换 BYOK 后模型自动回退（#3978）
- **状态：** OPEN | **👍 4** | **评论 1** | 创建 2026-06-30
- **链接：** [Issue #3978](https://github.com/github/copilot-cli/issues/3978)
- **摘要：** 因 AIC 额度用尽改用 BYOK 后，恢复会话时模型自动切回 claude-sonnet-4.6，未尊重 BYOK 配置。
- **关注点：** 模型切换逻辑存在状态残留，影响 BYOK 正常使用。

### 9. 插件新增技能不可用：需手动 `/skills reload`（#3606）
- **状态：** CLOSED | **👍 0** | **评论 0** | 更新 2026-08-31（今日关闭）
- **链接：** [Issue #3606](https://github.com/github/copilot-cli/issues/3606)
- **摘要：** 安装插件后，新技能无法立即调用，需手动执行 reload。
- **关注点：** 已关闭，说明官方在今日已修复或标记完成。

### 10. 被“中断”的 create_session 在 1.6 小时后自动创建并执行（#4668）
- **状态：** OPEN | **👍 0** | **评论 0** | 创建 2026-08-30
- **链接：** [Issue #4668](https://github.com/github/copilot-cli/issues/4668)
- **摘要：** Agent 将 `create_session` 标记为中断并自行完成工作，但 1 小时 38 分钟后该会话实际创建并自动运行，造成重复劳动。
- **关注点：** 会话管理一致性严重缺陷，直接影响 Agent 自动化任务场景。


## 重要 PR 进展

过去24小时内无新 PR 创建或合并。


## 功能需求趋势

综合社区 Issue 反馈，当前最受关注的功能方向为：

1. **会话生命周期稳定性**：从 FileWatch 死循环、堆内存溢出、到 session 延迟执行，大量 Issue 集中在会话创建、恢复、压缩与销毁的可靠性。开发者普遍期望在长时间、大上下文场景下获得更稳的边界表现。
2. **多模型与 BYOK 兼容性**：自定义模型压缩失败、BYOK 模型回退等持续出现，社区希望官方提供更清晰的模型能力矩阵与切换机制。
3. **企业级/组织级 Agent 发现机制**：Organisation-level Agent 与 CLI/IDE 的同步发现仍是企业用户关注重点，跨工具一致性需求明确。
4. **插件与工具加载自动化**：插件技能需要手动 reload、自定义 agent 工具静默失败，社区期待插件安装后即时生效和更明确的错误反馈。
5. **Telemetry 与可观测性配置一致性**：非交互模式不发送 telemetry、特定 headers 配置阻断导出等问题，反映企业用户在管控场景下对可观测依托的精细化需求。


## 开发者关注点

- **高频痛点排行：**
  1. **会话压缩（Compaction）反复失败** — 涉及多个模型、多种触发方式（手动/自动），是当前社区反馈最集中的功能缺陷。
  2. **回归问题响应速度** — v1.0.81 的 OAuth 代理回归（#4671）在发布后快速出现，开发者对代理与TLS环境支持保持高敏感。
  3. **长会话资源失控** — 13GB 日志、堆内存溢出、FileWatch 死循环，多个独立 Issue 均指向长时间运行场景下缺少资源看护与守护机制。
  4. **静默失败案例增多** — 工具绑定不生效不报错、session 创建延迟无预警、extension 挂起无错误，开发者普遍要求任何功能失效都应显式暴露。

- **社区情绪：** 整体积极，反馈详尽（附日志、截图、配置），但已出现对“反复回归”的不耐烦，尤其是网络代理与终端渲染相关低层能力。企业级与自定义模型用户群体正持续扩大，对文档完整性和失败可诊断性的要求显著提升。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-31

> 技术分析师精选，基于 GitHub 官方仓库 MoonshotAI/kimi-cli 实时数据


## 1. 今日速览

今日社区整体平静：**无新版本发布、无 PR 合入**。两大新 Issue 均指向 **0.39.1 版本**的可靠性问题——一个涉及 **工具调用行为与输出不一致**（工具调用异常），另一个涉及 **iPad/Safari 端远程控制登录流程阻断**（跨端兼容性）。这两条 Issue 目前均无评论、无赞，社区反应尚待发酵。

---

## 2. 版本发布

**无** — 过去 24 小时无新 Release。

> 上一个版本为 0.39.1（Homebrew），建议关注后续 patch 版本是否会针对今日两条 Issue 进行热修复。

---

## 3. 社区热点 Issues（全量）

| 序号 | Issue | 标题 | 核心问题 | 影响面 | 评论/热度 | 状态 |
|------|-------|------|----------|--------|-----------|------|
| 1 | [#2628](https://github.com/MoonshotAI/kimi-cli/issues/2628) | Model emits Read tool calls instead of Write/Edit — text says 'calling Write', wire shows Read | **工具调用行为不一致**：模型声称执行 Write/Edit，但线路日志实际发出 Read。版本 0.39.1，模型 k3-256k | 代码编写场景核心链路，直接影响写文件类任务可靠性 | 0 评论 / 0 👍 | 新开 |
| 2 | [#2627](https://github.com/MoonshotAI/kimi-cli/issues/2627) | Remote Control login fails on iPadOS 16.6 — "无法开始登录" | **远程控制登录流程在 iPadOS 16.6（Safari/微信）中断**，错误提示出现于 code-rc.kimi.com，服务端为 Debian 12 ECS | iPad/移动端用户无法使用 Remote Control 功能 | 0 评论 / 0 👍 | 新开 |

> 两条 Issue 均于昨日创建，当前社区讨论尚未展开。对于 #2628，[项目内其他已关闭的类似问题](https://github.com/MoonshotAI/kimi-cli/issues?q=is%3Aissue+tool+calls) 表明工具调用可靠性是社区长期关注点；#2627 则是 Remote Control 功能首个移动端兼容性报告。

---

## 4. 重要 PR 进展

**无** — 过去 24 小时无新 PR 或 PR 更新。项目当前 PR 队列情况可[点击此处查看](https://github.com/MoonshotAI/kimi-cli/pulls)。

---

## 5. 功能需求趋势

> 基于今日 2 条 Issue 结合项目历史 Issue 数据推断（仅列出今日新增中折射出的方向，历史趋势请参阅此前日报）：

| 方向 | 今日信号 | 说明 |
|------|----------|------|
| **工具/Agent 行为可靠性** | #2628（Read/Write 调用错乱） | 社区对**工具调用链路的一致性**敏感度极高，该问题若被复现可能引发集中反馈 |
| **跨端兼容性 / 移动端支持** | #2627（iPadOS 16.6 登录失败） | Remote Control 功能向手机/平板场景延伸的过程中，**WebView 兼容性**（尤其国产 WebView 内核如微信）将成为新战线 |

> 说明：今日 Issue 数量较少，以上方向为基于现有数据的合理推断，历史高频趋势（IDE 集成、新模型支持、性能优化等）可参见前期日报。

---

## 6. 开发者关注点

| 痛点/关注点 | 证据 | 紧急度 |
|-------------|------|--------|
| **写操作工具调用与实际执行不一致** — 模型界面显示 Write，实际执行 Read，开发者无法信任工具调用结果 | #2628 | 🟢 中等（涉及核心编辑功能，建议尽快定位） |
| **Remote Control 登录流程在旧版 iOS Safari 与非标准 WebView 中未做降级处理** — 直接报错“无法开始登录”，无明确原因提示 | #2627 | 🟢 中等（移动端用户受挫，但不影响主流桌面端） |

> 值得注意的是，两条 Issue 目前均无开发者互动（0 评论、0 👍）。建议官方在 0.39.2 或 0.40 中优先关注 #2628 中提到的工具调用不一致问题——它是编码 Agent 最核心的信任基石。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-08-31** | **数据来源：github.com/anomalyco/opencode**


## 1. 今日速览

今日社区围绕 **会话上下文管理**（compaction/context）展开集中讨论：#33356 揭露了 `event` 表无上限增长导致数据库膨胀至 13GB+ 的严重问题，#41358 报告了自动压缩后 Agent 丢失任务目标并擅自继续行动的故障。与此同时，**空 assistant 消息导致严格提供商（Kimi/DeepSeek）返回 400 错误** 成为高频复现问题，已催生至少 3 个修复 PR（#45839、#46332、#46309）和 4 个相关 Issue。PR 侧呈现修复密集态势：shell 输出延迟、Windows 编辑快捷键、Bedrock 数据校验等多项修复在今日集中合并或提交。

> **核心结论：** 数据库无限增长和消息序列化缺陷正在成为影响长会话稳定性的两大技术债，社区已自发提交补丁。


## 2. 版本发布

**过去 24 小时内无新版本发布。**

> 当前社区活跃于 **v1.17.x**（桌面端）与 **v1.18.x**（CLI）系列，多起 Issue 提及的版本集中在 1.17.10–1.18.25 区间，建议关注后续 patch 版本。


## 3. 社区热点 Issues（Top 10）

### 🔥 严重性最高

**#33356 — `event` 表无限增长，opencode.db 膨胀至 13GB+（无保留/压缩策略）**
- 作者: rustyaos | 评论: 25 | 👍: 8 | 状态: OPEN
- 长时运行实例中，事件溯源 `event` 表永不清理由 `message.updated.1` 快照占据，两个实例各达 **~13 GB**，填满 22 GB 卷的 97–99%。
- **重要性：** 这是当前最严重的存储缺陷，直接影响长期用户的磁盘占用和启动性能。
- 链接: https://github.com/anomalyco/opencode/issues/33356

**#27167 — [功能] 添加原生会话目标 `/goal`**
- 作者: jorgitin02 | 评论: 76 | 👍: 139 | 状态: OPEN
- 提议为 OpenCode 增加持久会话目标/生命周期功能，而非仅依赖自定义斜杠命令。
- **重要性：** 社区最高赞需求（139 👍），已有配套 PR #46328（goal-loop 示例插件），值得持续跟踪。
- 链接: https://github.com/anomalyco/opencode/issues/27167

**#41358 — [Bug] 自动压缩后 Agent 继续思考/行动（无确认）并丢失原始任务目标**
- 作者: liudongyan13701205717-source | 评论: 7 | 👍: 0 | 状态: OPEN
- Windows 桌面端长会话自动压缩后，Agent 不停止确认即继续输出，且压缩后忘记任务目标。
- **重要性：** 直接破坏长任务可靠性，与 #33356 共同指向 compaction 机制缺陷，PR #45125 正在尝试修复。
- 链接: https://github.com/anomalyco/opencode/issues/41358

### 💬 高频复现

**#37946 — 中止的 assistant 轮次以零内容持久化，阻塞整个会话（400 “must not be empty”）**
- 作者: Oloompa | 评论: 5 | 👍: 1 | 状态: OPEN
- 中途中止的轮次被持久化为无文本、无工具调用的空 assistant 消息，此后每次重放都触发提供商 400 错误。
- **重要性：** 与 #31046、#37887、#39451 同根——空 assistant 消息序列化缺陷，影响 Kimi/DeepSeek 等严格提供商。
- 链接: https://github.com/anomalyco/opencode/issues/37946

**#37354 — OpenRouter 对 Gemini 模型的未授权请求**
- 作者: paul-phoenix | 评论: 7 | 👍: 1 | 状态: OPEN
- 即使用户选择了其他模型，opencode 仍先向 Gemini（Nano Banana 2）发送未授权请求，然后再发起正确模型请求。
- **重要性：** 潜在的隐私/成本问题，用户无法禁用该行为。
- 链接: https://github.com/anomalyco/opencode/issues/37354

### 🖥️ 平台兼容性

**#19130 — Windows ARM64 原生：OpenTUI 在 bun:ffi dlopen TinyCC 处初始化失败**
- 作者: Carliquiss | 评论: 20 | 👍: 13 | 状态: OPEN
- ARM64 原生二进制可执行非交互命令，但 TUI 无法初始化，报 TinyCC 相关错误。
- **重要性：** Windows ARM64 设备（Surface Pro X 等）用户无法使用 TUI，获得 13 👍 说明影响面不小。
- 链接: https://github.com/anomalyco/opencode/issues/19130

**#19473 — [已关闭] 桌面应用向 WSL 服务器发送 UNC 路径，破坏所有 bash 工具调用（有临时解决方案 ✅）**
- 作者: am-diff | 评论: 9 | 状态: CLOSED
- Windows 桌面端连接 WSL2 服务器时，项目组件将 `\\wsl.localhost\Debian` 写入全局数据文件，导致路径拼接失败。
- **重要性：** WSL 工作流关键阻塞，已关闭但未合并修复，用户可参考评论区 workaround。
- 链接: https://github.com/anomalyco/opencode/issues/19473

### ⚙️ 配置与行为

**#31152 — [已关闭] 空会话下每次响应都触发无限压缩循环**
- 作者: GraveEaterMadison | 评论: 7 | 状态: CLOSED
- 零配置、无技能/Agent/命令，输入 “hi” 即触发无限 Build/压缩循环。
- **重要性：** 极端复现路径暴露了压缩机制的边界条件缺陷。
- 链接: https://github.com/anomalyco/opencode/issues/31152

**#32202 — 技能重复根目录导致 `available_skills` 跨重启不稳定**
- 作者: ualtinok | 评论: 6 | 👍: 1 | 状态: OPEN
- 同一技能名存在于多个发现根时，OpenCode 在进程启动间可能选择不同根。最终列表按名称排序，但去重发生在更早阶段。
- **重要性：** 影响技能系统的可重复性，对多项目共享技能目录的用户造成困惑。
- 链接: https://github.com/anomalyco/opencode/issues/32202

**#39864 — Codex OAuth Fast 模型以标准吞吐运行**
- 作者: AidenGeunGeun | 评论: 4 | 状态: OPEN
- ChatGPT 认证的 Fast 模型条目发送 `service_tier: "priority"`，但未显示官方 Codex CLI 同账户的速度提升。
- **重要性：** 付费用户权益未兑现，涉及服务层 API 行为对齐。
- 链接: https://github.com/anomalyco/opencode/issues/39864


## 4. 重要 PR 进展（Top 10）

### 🚀 新功能

**#33247 — [OPEN] feat: 添加队列消息编辑、包装与转向、停止与转向**
- 作者: mortenfc | 更新: 2026-08-31
- 实现队列编辑（关闭 #6942、#21906 等 5 个 Issue）、最终 token 队列模式（#24580 等 6 个 Issue）。
- **意义：** 一个 PR 关闭 11 个功能请求，是近期最大的交互增强，值得关注合并进度。
- 链接: https://github.com/anomalyco/opencode/pull/33247

**#46328 — [OPEN] feat(plugin): 添加 goal-loop 示例插件**
- 作者: charleneleong-ai | 更新: 2026-08-31
- 通过插件 SDK 构建 `/goal` 和 `/loop`，无核心更改、无 SQLite、无自动续跑。
- **意义：** 直接回应 #27167（139 👍 需求），展示插件生态解决核心痛点的路径。
- 链接: https://github.com/anomalyco/opencode/pull/46328

**#45125 — [OPEN] feat(core): 增强压缩：比率 + 上下文恢复文档推进**
- 作者: ryangamerdev | 更新: 2026-08-31
- 关闭 #37551，关联 #41358 的上下文丢失部分（通过恢复文档保留任务目标）。
- **意义：** 针对今日最热门的 compaction 系列问题（#33356、#41358）提出系统级修复。
- 链接: https://github.com/anomalyco/opencode/pull/45125

### 🐛 关键修复

**#45839 — [OPEN] fix(opencode): 从回放中丢弃无模型可见内容的 assistant 轮次**
- 作者: impptg | 更新: 2026-08-31
- 关闭 #37946 和 #31046，阻止空 assistant 消息到达 Moonshot/Kimi、DeepSeek、Azure 等严格提供商。
- **意义：** 直接解决今日高频复现的 400 错误问题，建议尽快合入。
- 链接: https://github.com/anomalyco/opencode/pull/45839

**#46309 — [CLOSED] fix(ai): 规范化工具结果历史**
- 作者: rekram1-node | 更新: 2026-08-31
- 在缓存策略和协议降级前规范化本地工具历史，为未解析调用合成错误结果，替换空输出。
- **意义：** 系统级止血方案，与 #45839 形成互补。
- 链接: https://github.com/anomalyco/opencode/pull/46309

**#46334 — [OPEN] fix: 跳过未使用的压缩克隆**
- 作者: kvyb | 更新: 2026-08-31
- 当无消息转换钩子时跳过 `structuredClone`，仅在有钩子时保留克隆行为。修复 #46331。
- **意义：** 消除无关的克隆开销，针对 compaction 路径的性能优化。
- 链接: https://github.com/anomalyco/opencode/pull/46334

**#46287 — [CLOSED] fix: 合并 shell 进度更新**
- 作者: kvyb | 更新: 2026-08-31
- 保持逐块立即排空/截断，但将元数据预览发布限制为每 100 ms 一次，进程结束后强制发布最终状态。
- **意义：** 减少 `message.part.updated` 事件风暴，缓解 #33356 描述的数据库膨胀问题。
- 链接: https://github.com/anomalyco/opencode/pull/46287

### 🖥️ 平台与兼容性

**#46336 — [CLOSED] fix(desktop): 保留 Windows 编辑快捷键**
- 作者: Hona | 更新: 2026-08-31
- 将 Home 快捷键从 Ctrl+B 改为 Alt+Home，恢复 Ctrl+V 到编辑框而非陈旧菜单焦点。
- **意义：** 修复 Windows 用户在桌面端粘贴/编辑被拦截的回归问题。
- 链接: https://github.com/anomalyco/opencode/pull/46336

**#46338 — [OPEN] fix(app): 保持 composer 全选仅在编辑器内生效**
- 作者: Hona | 更新: 2026-08-31
- 让 Chromium 处理 Ctrl+A 而非在 Windows 桌面菜单中拦截，避免全页选中。
- **意义：** 配合 #46336，系统性清理 Windows 菜单快捷键拦截。
- 链接: https://github.com/anomalyco/opencode/pull/46338

**#46085 — [OPEN] fix(shell): 在所有平台上限制退出后管道排空**
- 作者: Hona | 更新: 2026-08-31
- 解决 `bunx agent-browser`、`dotnet build/test` 等在后台进程持有 stdout/stderr 时 shell 永不完成的问题。
- **意义：** 跨平台（Win/Linux/macOS）修复，影响 CI 场景的可靠性。
- 链接: https://github.com/anomalyco/opencode/pull/46085

**#46337 — [OPEN] fix(core): 正确计价 Anthropic 1 小时缓存写入**
- 作者: rekram1-node | 更新: 2026-08-31
- 在会话计价前保留提供商使用元数据，按 1.6 倍 5 分钟写入费率收取 1 小时缓存写入（2/1.25）。
- **意义：** 修正 Anthropic 长缓存收费过高/过低问题，影响成本敏感用户。
- 链接: https://github.com/anomalyco/opencode/pull/46337


## 5. 功能需求趋势

| 趋势方向 | 代表 Issues | 热度信号 |
|---------|------------|---------|
| **会话目标/生命周期管理** | #27167（139 👍、76 评论） | 社区最高赞需求，已有插件方案 PR #46328 |
| **压缩/上下文管理增强** | #33356、#41358、#31152、#45125 | 4+ 个 Issue/PR 集中指向，含数据库膨胀与目标丢失 | 
| **空消息序列化修复** | #37946、#31046、#37887、#39451 | 4 个 Issue 同根（Kimi/DeepSeek 400 错误），3 个 PR 在修 |
| **Windows 桌面端体验** | #46336、#46338、#34573、#33882 | 快捷键、窗口拖动、Settings 按钮灰化等桌面端细节 |
| **新模型适配与行为对齐** | #24610（DeepSeek 思考开关）、#39864（Codex Fast 吞吐）、#37354（OpenRouter→Gemini） | 用户关注模型参数透传与提供商行为一致性 |
| **存储与性能治理** | #33356（13GB DB）、#46287（事件合并） | 数据库膨胀驱动的性能优化需求开始浮现 |
| **插件生态扩展** | #32202（技能去重）、#46332（插件目录） | 社区正通过插件解决核心缺陷 |

**值得注意：** “会话目标”需求（#27167）已获得 139 个 👍，但核心团队尚未给出官方回应 —— 插件方案 PR #46328 正在试探性填补这一空白，建议跟踪其评审反馈。


## 6. 开发者关注点

### 核心痛点

1. **长会话稳定性是最大痛点。** 三大问题互相交织：#33356（DB 膨胀 13GB+）、#41358（压缩后丢失目标）、#37946（空消息阻塞会话）。三者共同影响“长时间保持一个会话”的核心使用场景，已触发社区自发提交 3+ 补丁（#45839、#46309、#46334）。

2. **严格提供商的 400 错误高频复现。** Moonshot/Kimi、DeepSeek、Azure 对空 assistant 消息零容忍，而 OpenCode 的文本块起始/关闭机制会在工具调用轮次产生空文本（#31046）。趋势：社区期待核心团队在序列化层根治，而非由各提供商适配。

3. **平台兼容性仍是长期短板。** Windows ARM64 TUI 不可用（#19130，13 👍）、WSL 路径问题（#19473）、Windows 快捷键拦截（#46336/#46338）——桌面端体验碎片化明显。

### 呼声较高的行为改进

- **请求透明化：** #37354 用户明确要求“如何禁用指向错误模型的未授权请求”，反映对请求可观测性和可控性的需求。
- **压缩机制可配置化：** #31152 极端复现（空会话也无限压缩）让用户对压缩的安全性产生怀疑，建议至少提供手动/自动开关。
- **社区节奏感知：** 多个 PR 标注 `[needs:issue]`（如 #46290、#46287）或因缺少关联 Issue 而滞留，社区期待更顺畅的 PR-Issue 关联流程。

### 活跃贡献者

- **Hona**（今日 3 个修复 PR：Windows 快捷键、流式排空、composer 全选）
- **rekram1-node**（今日 4 个修复 PR：Bedrock 校验/文本、工具历史规范化、Anthropic 计价）
- **kvyb**（今日 2 个合并修复：压缩克隆跳过、shell 进度合并）
- **impptg**（空消息修复 PR #45839 + 配套插件文档 #46332）

> 以上三人均保持高频提交节奏，侧面反映社区对修复质量的高要求。

---

*本日报基于 2026-08-31 当天的 GitHub 数据自动生成，数据截止时间为次日 00:00 UTC。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-31

## 今日速览

过去24小时是 Pi 项目高强度的 bug 修复与生态扩展日：社区报告集中在**长会话 OOM/上下文死亡螺旋、OpenAI 兼容层的数据丢失、以及扩展/插件生态的接口缺口**三大方向；而 PR 侧则密集落地了 JSONL 持久化损坏、分支总结 Token 预算、DeepSeek V4 迁移 Responses API 等关键修复。此外新增了腾讯 Token Plan、StepFun 两个内置 Provider 的提案，生态版图持续扩大。

---

## 社区热点 Issues（10 条）

### 1. 0.84.3 频繁 OOM：subagent 场景 21-27GB 内存被内核杀死
**#8746** | 作者: gmanzienko | 评论: 4 | 👍 0 ｜ [链接](https://github.com/earendil-works/pi/issues/8746)

**摘要**：升级到 0.84.3 后，内核 OOM Killer 两天内五次杀死 pi 进程（RSS 21-27GB），parent 和 subagent 均受影响。同一模型、同一 xhigh thinking 配置在 0.84.2 上连续运行 10 天无一次被杀。

**关注理由**：这是当前最严重的稳定性回归，直接导致主进程与子代理双双崩溃，影响所有重度使用 subagent 的用户。若 0.84.4 未包含对应修复，建议用户暂缓升级。

### 2. 长会话不可恢复的死亡螺旋：max_tokens 被静默钳制为 1
**#8864** | 作者: usefulish | 评论: 2 | 👍 0 ｜ [链接](https://github.com/earendil-works/pi/issues/8864)

**摘要**：当上下文估计超过 contextWindow（默认 128000）时，`clampMaxTokensToContext()` 静默发送 `max_tokens: 1`，模型返回 1-token 响应，且由于估计锚定在最后一条 assistant 消息的 reported totalTokens 上，会话进入不可恢复的循环。

**关注理由**：问题极其隐蔽且无恢复路径——会话既不报错也不被压缩，而是每次请求都退化为 1-token 响应。对长会话和自动压缩场景是致命缺陷，值得优先修复。

### 3. Anthropic 提示缓存从未读回 transcript，cacheRead 恒等于 system+tools
**#8849** | 作者: JulienMartel | 评论: 2 | 👍 0 ｜ [链接](https://github.com/earendil-works/pi/issues/8849)

**摘要**：通过 JSONL 审计发现，长会话中 `cacheRead` 全程保持不变（仅 system+tools 前缀），而 `cacheWrite` 每轮增长——即缓存每次都在写入但从不命中，用户长期为全部 transcript 承担完整输入费用。

**关注理由**：直接导致 Anthropic 用户的 API 账单虚高，且与官方缓存机制完全背离。对成本敏感的长会话使用者极其重要。

### 4. Windows 使用体验收集贴：生态现状与痛点
**#7547** | 作者: petrroll | 评论: 51 | 👍 2 ｜ [链接](https://github.com/earendil-works/pi/issues/7547)

**摘要**：Windows 开发者数量庞大，但 Pi 在 Windows 上运行方式多样（WSL、原生二进制、MSYS2 等），难以确定核心投入方向。该帖收集各方式下的具体问题，以便区分核心支持与外包方案。

**关注理由**：评论数最多（51 条）的 Issue，是当前最活跃的非代码讨论帖。对项目确定 Windows 支持优先级有直接参考价值。

### 5. pi-tui keybindings 单例被扩展重复加载破坏
**#4748** | 作者: any-victor | 评论: 6 | 👍 2 ｜ [链接](https://github.com/earendil-works/pi/issues/4748)

**摘要**：`pi-coding-agent` 加载的扩展从自己的 `node_modules` 解析 `@earendil-works/pi-tui`，导致该包 module-scope 的 `globalKeybindings` 单例与 Pi 主进程的实例分离——`setKeybindings(merged)` 的修改不会同步到扩展侧，快捷键提示渲染为空。

**关注理由**：这是扩展生态的基础设施问题，直接影响所有 TUI 扩展的快捷键提示渲染（已由 PR #8872 修复）。扩展作者和插件用户都应关注。

### 6. JSONL 会话文件在同进程打开两次产生重复 seq 并损坏文件
**#8852** | 作者: beyond0573 | 评论: 3 | 👍 0 ｜ [链接](https://github.com/earendil-works/pi/issues/8852)

**摘要**：`JsonlSessionRepo.open()` 每次调用都返回新的 `JsonlSessionStorage`，各自独立持有 `SessionState`。同一进程内两次打开同一会话文件时，两个实例从同一个 `nextSequence` 开始，各自追加 `seq: 1`，且均不报错。

**关注理由**：持久化层数据完整性 bug，会造成会话文件静默损坏。已由 PR #8853 修复（序列化可打开与变更）。严重威胁会话数据可靠性。

### 7. 分支总结确定性失败：generateBranchSummary 硬编码 maxTokens: 2048
**#8845** | 作者: cad0p | 评论: 2 | 👍 0 ｜ [链接](https://github.com/earendil-works/pi/issues/8845)

**摘要**：`/tree` 分支导航的 "Summarize" 在大分支上确定性失败：`generateBranchSummary` 将响应硬编码为 `maxTokens: 2048`，而输入预算为 `contextWindow - reserveTokens`。输入远大于输出预算时必然触发 token cap 错误。

**关注理由**：对使用 `/tree` 管理大代码仓库的用户是确定性阻断问题。已由 PR #8862 修复，简单但影响直接。

### 8. read 工具将 U+202F 窄不换行空格规范化为 U+0020，破坏 macOS 本地化截图文件名
**#8877** | 作者: FerDev12 | 评论: 2 | 👍 0 ｜ [链接](https://github.com/earendil-works/pi/issues/8877)

**摘要**：Pi 的 read 工具在文件系统访问前将精确路径中的 `U+202F NARROW NO-BREAK SPACE` 替换为 `U+0020 SPACE`，导致 macOS 本地化截图（如 `… p.m..png`）返回 ENOENT，即使提供了精确路径。这是 #1078 的未覆盖变体。

**关注理由**：非英文本地化用户的真实痛点，文件路径规范化逻辑存在过度处理。对 macOS 中文/日文等语言环境用户有实际影响。

### 9. OpenAI 兼容层静默丢弃同一 index 下的第二个工具调用
**#8861** | 作者: weijiafu14 | 评论: 1 | 👍 0 ｜ [链接](https://github.com/earendil-works/pi/issues/8861)

**摘要**：当流式响应在同一 `index` 下携带两个不同的工具调用（每个 delta 自带完整 id/name/arguments）时，累加器只保留第一个调用，第二个被静默丢弃，无任何错误。

**关注理由**：工具调用静默丢失是 agent 行为的隐蔽错误——模型认为两个工具都执行了，但 Pi 只发出一个。对依赖并行工具调用的工作流影响严重。

### 10. 扩展生态的 System Prompt 膨胀问题与社区方案（pi-prompt-diet）
**#8854** | 作者: Ran-Xing | 评论: 2 | 👍 0 ｜ [链接](https://github.com/earendil-works/pi/issues/8854)

**摘要**：重度用户安装 8-15 个第三方包后，各插件注入的 `promptGuidelines` 导致基础 System Prompt 严重膨胀。作者提议 `pi-prompt-diet` 作为社区解决方案，并征集官方反馈。

**关注理由**：这是扩展生态规模化的必然问题——插件越多、上下文被静态指令占用越多、留给实际任务的空间越少。对插件作者和重度用户都值得讨论。

---

## 重要 PR 进展（10 条）

### 1. 修复扩展 keybindings 访问：暴露宿主键位绑定到扩展 API
**#8872** | 作者: anishfyi | 状态: 已合并 ｜ [链接](https://github.com/earendil-works/pi/pull/8872)

**摘要**：修复 #4748。扩展从其自身安装目录解析 pi 包时，模块级 keybindings 管理实例永远收不到宿主的 `setKeybindings(merged)`，导致 `keyText("app.tools.expand")` 返回空字符串、快捷键提示渲染为 `( to expand)`。本 PR 在扩展 API 上暴露宿主键位访问。

**影响**：所有 TUI 扩展的快捷键提示恢复正常，是扩展生态的关键基础设施修复。

### 2. 修复 agent 循环重复 JSONL 写入器
**#8853** | 作者: beyond0573 | 状态: 已合并 ｜ [链接](https://github.com/earendil-works/pi/pull/8853)

**摘要**：按规范化会话路径序列化可写打开与变更操作。新的可写打开会取代进程内的旧写入器，旧写入器在序列分配或追加前即失败；只读加载与 fork 保持所有权不变。测试套件 123 个测试全部通过。

**影响**：修复 #8852（JSONL 会话文件损坏），保障持久化层数据完整性。

### 3. 分支总结输出预算改为由 reserveTokens 推导
**#8862** | 作者: PiedPiper911 | 状态: 已合并 ｜ [链接](https://github.com/earendil-works/pi/pull/8862)

**摘要**：修复 #8845。`generateBranchSummary` 原先将响应固定为 `maxTokens: 2048`，但输入预算为 `contextWindow - reserveTokens`，大分支必然超出输出预算导致确定性失败。现在输出预算由 reserveTokens 推导。

**影响**：`/tree` 分支总结在大仓库上恢复可用，修复确定性失败。

### 4. DeepSeek V4 迁移至 OpenAI Responses API
**#8873** | 作者: daawa | 状态: 已合并 ｜ [链接](https://github.com/earendil-works/pi/pull/8873)

**摘要**：将 DeepSeek V4 模型（deepseek-v4-flash、deepseek-v4-pro、vision-exp）从 OpenAI Completions API 迁移至 OpenAI Responses API。

**影响**：与 DeepSeek 官方推进 Responses API 的方向保持一致（见 #7559），为后续 /responses 原生 provider 铺路。

### 5. 新增腾讯 Token Plan 内置 Provider
**#8876** | 作者: yaoice | 状态: 已合并 ｜ [链接](https://github.com/earendil-works/pi/pull/8876)

**摘要**：覆盖 tc-code-latest、deepseek-v4-flash/pro、glm-5.2、minimax-m2.7 等模型，通过 `api.lkeap.cloud.tencent.com/plan/v3` 接入，使用 `TENCENT_TOKEN_PLAN_API_KEY`。GLM-5/5.1 因仅支持 reasoning toggle、无法控制 effort 而被排除。

**影响**：面向中国用户的模型选择进一步扩大，与 StepFun（#8867）等提案共同构成生态扩展趋势。

### 6. 修复 Codex WebSocket 空闲缓存定时器未 unref 导致进程挂起 5 分钟
**#8866** | 作者: jyatesdotdev | 状态: 已合并 ｜ [链接](https://github.com/earendil-works/pi/pull/8866)

**摘要**：通过 `diagnostics_channel` 和 `process.getActiveResourcesInfo()` 定位：Codex 扩展的 WebSocket 空闲缓存定时器未调用 `unref()`，导致 `pi -p` 脚本在输出最终答案后进程仍存活约 5 分钟。

**影响**：修复了 CI/脚本化场景下 `pi -p` 挂起问题，同时补充了扩展侧会话资源清理的文档。

### 7. OpenAI 兼容层：保留缓存字段存在性与 provider 报告的成本
**#8871** | 作者: piclaw-bot | 状态: 已合并 ｜ [链接](https://github.com/earendil-works/pi/pull/8871)

**摘要**：`openai-completions.ts` 原先将缺失的缓存 token 字段折叠为 0，并丢弃 provider 报告的非负有限 `usage.cost`。下游调用方无法区分"provider 报告零缓存用量"与"provider 未提供缓存遥测"。本 PR 保留字段存在性与成本信息。

**影响**：改进成本统计与缓存分析的准确性，对追踪模型真实用量的用户有价值。

### 8. 延迟设置期间保留 aborted stop reason
**#8635** | 作者: Mallikarjun-0 | 状态: 开放 ｜ [链接](https://github.com/earendil-works/pi/pull/8635)

**摘要**：修复 #8409。将请求中止信号传递到延迟流设置包装器；当请求信号已中止时，将设置失败报告为 aborted。新增针对工具执行期间中止、后续 auth setup 前的回归测试。

**影响**：改进工具执行期间中止请求时的错误语义，当前仍开放，待合入。

### 9. 分支无关：`dev branch`（CI 专用，禁止合并）
**#8232** | 作者: davidbrai | 状态: 开放 ｜ [链接](https://github.com/earendil-works/pi/pull/8232)

**摘要**：仅供 CI 与评论使用，标题明确标注 "DONT MERGE"。

**影响**：非功能变更，但可观察 CI 对开发分支的验证状态。

### 10. 待观察：SDK 配置 bash 全量输出目录（Issue #8869）
**#8869** | 作者: gabriel-imascono | 状态: 开放 ｜ [链接](https://github.com/earendil-works/pi/issues/8869)

**摘要**：建议为 `BashToolOptions` 增加可选 `fullOutputDirectory`，使 SDK 嵌入者在使用自定义 `BashOperations` 时自定义截断全量输出的写入位置，默认保持 `os.tmpdir()`。

**影响**：SDK 场景下输出管理更灵活，需要官方评估后决定是否落地。

---

## 功能需求趋势

从上文 Issue/PR 中可以提炼出以下六个社区关注方向：

1. **内置 Provider 持续扩充 / 迁移新 API**：腾讯 Token Plan（#8876）、StepFun（#8867）、DeepSeek /responses API（#7559）、Ollama Cloud（#4706）、z.ai（#6723）等多个独立提案同批涌现，覆盖中国与海外市场。DeepSeek V4 迁移至 Responses API（#8873）已落地，说明官方正在跟上模型厂商的 API 演进。

2. **上下文管理与长会话可靠性**：OOM 崩溃（#8746）、上下文死亡螺旋（#8864）、Anthropic 缓存从不命中（#8849）三案并列，反映长会话 + subagent 场景下资源管理是当前最痛的问题。修复方向既涉及内存控制，也涉及上下文压缩与 API 调用的成本优化。

3. **OpenAI 兼容层的数据保真度**：同一 index 下第二个工具调用被丢弃（#8861）、markdown 围栏包裹的 arguments 退化为 `{}`（#8858）、缓存字段/成本信息被吞（#8871）——多个独立 Issue 指向兼容层在"静默丢数据"方面的系统性风险。这批修复已在今明两天集中合入。

4. **扩展与 SDK 接口规范化**：keybindings 单例问题（#4748/#8872）、区分工具错误与 handler 失败（#8856）、事件钩子（resource_expand，#2930）、bash 描述参数（#8863）、bash 全量输出目录（#8869）——社区在系统性地打磨扩展 API 的表达力。

5. **System Prompt 膨胀治理**：#8854（pi-prompt-diet）开启了对第三方插件无节制注入 promptGuidelines 的反思。随插件数量增长，这一问题只会愈发突出，预计后续会出现官方层面的约束机制。

6. **Windows / macOS 细节兼容**：Windows 生态盘点（#7547，51 评论）、U+202F 路径规范化破坏截图名（#8877）——非主流路径的使用场景正被逐一提及，项目对不同平台的细节处理需要更多投入。

---

## 开发者关注点

1. **0.84.3 → 0.84.4 的升级需谨慎**：OOM 回归（#8746）在 0.84.3 明确存在且在 0.84.4 的来源不清。建议重度 subagent 用户在确认修复前暂缓升级或另开 issue 反馈。

2. **成本泄漏需要工具链支持**：Anthropic 缓存永不命中（#8849）与 OpenAI 兼容层成本信息被吞（#8871）说明：用户自行审计 JSONL 仍是发现此类问题的主要手段。长会话高账单用户应主动检查 `cacheRead` 与 `cacheWrite` 的比值。

3. **扩展侧的"隐性损坏"值得警惕**：keybindings 单例分裂（#4748）、JSONL 重复 seq（#8852）均以"无报错但行为异常"的方式出现。插件作者在更新到含 #8872、#8853 的新版本后，应回归测试快捷键渲染与会话持久化。

4. **`pi -e npm:<ext>@latest` 不会刷新临时扩展版本**（#8860）：`@latest` 仅在首次安装时生效，之后固定使用缓存。当前无命令行方式强制刷新，建议关注后续修复。

5. **batch/CI 场景的进程挂起问题已修复**：#8866（Codex WebSocket 定时器 unref 修复）直接解决 `pi -p` 输出后进程存活 5 分钟的问题。使用 `pi -p` 做自动化测试的用户应更新至包含该修复的版本。

6. **工具调用静默丢失风险仍在**：虽然 #8861、#8858 已合入修复，但使用 OpenAI 兼容网关（含代理/网关类中间层）的用户应留意此类问题是否仍存在边缘情况；并行工具调用场景建议验证两端都真正执行。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-31** | 数据来源：github.com/QwenLM/qwen-code

---

## 今日速览

昨日无新版本发布，社区讨论热度集中在**安全加固（沙箱隔离、加密存储、Git 执行链防护）**与**Web Shell / 守护进程的健壮性修复**两大方向。多个高质量功能提案（跨会话消息、Code Mode 程序化工具调用、Bubblewrap 沙箱）正在密集评审中，OpenTUI 迁移批次推进至第 4 轮。安全相关 PR 数量显著上升，反映项目在攻击面收敛上的持续投入。

---

## 社区热点 Issues

### 1. 安全与沙箱
- **#10377 [feat] 实现 CodeModeOnly 风格的 Code Mode 程序化工具调用**  
  `[priority/P2, category/core+security+sandbox, roadmap/subagents-tools, need-discussion]`  
  提案将普通工具编译为受限 JS runtime 中的 `tools.*` API，模型仅直接调用 `exec`/`wait`。涉及多类目交叉（core/tools/performance/security），讨论热度高（2 条评论），处于 Hybrid 架构设计阶段，是 subagents-tools 路线图的重要组成。  
  https://github.com/QwenLM/qwen-code/issues/10377

- **#10583 [feat] 为 Linux 添加轻量 Bubblewrap 沙箱后端**  
  `[priority/P2, category/security, scope/sandbox+linux, need-discussion]`  
  作为 Docker/Podman 的轻量替代，提供无需容器守护进程的 OS 级隔离，直击本地工具执行的资源开销痛点。  
  https://github.com/QwenLM/qwen-code/issues/10583

- **#4016 [feat] 敏感配置加密存储（AES-256-GCM）**  
  `[category/security, scope/token-storage, welcome-pr]`  
  用户痛点明确：API Key、Token 在 `settings.json`/`QWEN.md` 明文存储，同步配置时易泄露。已有 3 条评论，属 welcome-pr 标签，适合外部贡献者参与。  
  https://github.com/QwenLM/qwen-code/issues/4016

- **#10561 [bug] 命令执行配置键是开放的入口集合——fsmonitor、hooks 和用户全局配置**  
  `[priority/P1, category/security, scope/vulnerability]`  
  P1 级安全漏洞：review 管道多处 spawn git，多个 git config 键可使任意 spawn 执行攻击者控制的代码。源自 #10421 第二轮评审（R2-2/R2-3），需类级别的系统性关闭。  
  https://github.com/QwenLM/qwen-code/issues/10561

- **#10560 [bug] 审查：探测树与基础树创建签出在任何过滤筛选之前运行**  
  `[priority/P2, category/security, scope/cli]`  
  紧随上条的同类问题：`worktree add` 创建探测树在内容过滤之前执行，形成代码执行面。  
  https://github.com/QwenLM/qwen-code/issues/10560

### 2. Web Shell 与守护进程
- **#10564 [bug] Web Shell 对失败的调用只显示笼统的 "Internal error"，隐藏了服务商的实际错误信息**  
  `[priority/P2, type/bug, category/core+daemon, scope/web-shell]`  
  已关闭（2 条评论），诊断价值：失败的 turn 中服务商的真实拒绝原因被 UI 层吞掉。  
  https://github.com/QwenLM/qwen-code/issues/10564

- **#10570 [bug] 守护进程 HTTP 错误丢弃 JSON-RPC 细节**  
  `[priority/P3, type/bug, category/core+daemon]`  
  与上条同源问题延伸：`POST /session/:id/model` 返回的 5xx 顶层信息笼统，但可操作原因已在 `data` 字段中，需透传而非丢弃。  
  https://github.com/QwenLM/qwen-code/issues/10570

### 3. 会话与体验
- **#8724 [feat] 跨会话消息：同机 Qwen Code 会话互发消息**  
  `[status/in-progress, priority/P2, roadmap/multi-agent, scope/session-management]`  
  允许 `list_agents` 发现与会话间 `send_message`，接收端以标记输入呈现、带 fail-closed 门控。多 Agent 协作的基础设施，社区关注度高（12 条评论）。  
  https://github.com/QwenLM/qwen-code/issues/8724

- **#10568 [feat] 模型配置热加载，无需重启 CLI**  
  `[priority/P3, category/configuration, scope/model-switching+settings]`  
  请求三种实现路径（自动监听 / `/reload-config` 命令 / 懒加载），并提及竞品 Qoder CLI 已支持热加载，可作为参考。  
  https://github.com/QwenLM/qwen-code/issues/10568

- **#10538 [bug] Computer Use 驱动 0.20.0 在每次创建嵌入运行时都会崩溃（Windows x64）**  
  `[status/need-retesting, priority/P2, scope/windows+sdk]`  
  环境细节完整（Win11 x64、Node v24.18.0、cua-sdk@0.20.0），崩溃发生在每次创建嵌入式运行时时，影响面明确。  
  https://github.com/QwenLM/qwen-code/issues/10538

---

## 重要 PR 进展

### 1. 安全加固
- **#10201 [fix] 加固 read-only Git 审批边界，防御可执行配置钩子**  
  `[review/self-reported]`  
  覆盖 `diff.external`、`diff.<driver>.command`、`diff.<driver>.textconv` 等看似只读、实际可执行仓库控制助手的 Git 命令。  
  https://github.com/QwenLM/qwen-code/pull/10201

- **#10206 [fix] 无法解析的 shell 写重定向时 fail-closed**  
  `[review/self-reported]`  
  检测 `>"$PWD/protected.txt"`、`>"${PWD}/protected.txt"` 等动态重定向目标，无法解析时保守关闭权限评估。  
  https://github.com/QwenLM/qwen-code/pull/10206

### 2. Web Shell 与工作流
- **#10594 [feat] Web Shell 可视化并管理动态工作流运行**  
  `[review/self-reported]`  
  新增能力门控的 Workflow 体验：Runs 页面可浏览已保存工作流与运行历史，检查阶段/调度进度，查看审批与 token 用量，并支持暂停/恢复/取消/重试/重跑/删除。  
  https://github.com/QwenLM/qwen-code/pull/10594

- **#10554 [feat] 添加无会话的 POST /language 用于用户级语言同步**  
  进程级路由，hosts 可在会话建立前（如欢迎页）同步用户语言偏好，守护进程为唯一写入者。  
  https://github.com/QwenLM/qwen-code/pull/10554

- **#10489 [fix] 持久化 WebShell 模型推理偏好**  
  `[autofix/takeover]`  
  复用 `model.reasoningEffort` 设置，跨守护进程会话持久化模型与推理偏好：缺省用模型默认、`none` 禁用思考、五个固定档位启用思考。  
  https://github.com/QwenLM/qwen-code/pull/10489

### 3. CLI 与 OpenTUI
- **#10383 [feat] OpenTUI 迁移第 4 批——对话框、命令与会话回退**  
  叠加在第 3 批（#10368）之上，含 19 个对话框模块（auth/extensions/MCP/memory-status 等）与命令路由基础设施。  
  https://github.com/QwenLM/qwen-code/pull/10383

- **#10368 [feat] OpenTUI 迁移实时会话与输入批次**  
  第 3 批：实时会话流折叠与模型、流式 markdown 修复、渐进 MCP 显示。  
  https://github.com/QwenLM/qwen-code/pull/10368

### 4. 工作流与配置
- **#10543 [feat] 允许运维人员调整或禁用 Goal token 预算**  
  `[autofix/takeover]`  
  新增 `model.goalTokenBudget` 设置，正整数值即授权额度。  
  https://github.com/QwenLM/qwen-code/pull/10543

- **#10361 [fix] 按前导标记分类 Critical 反馈**  
  改为检查首个渲染严重性标记而非正文任意位置，避免 Suggestion 引用 Critical 内容导致误分类。  
  https://github.com/QwenLM/qwen-code/pull/10361

- **#10283 [feat] 通过 `general.outputStyle` 或 `--output-style` 选择输出样式**  
  `[autofix/takeover, autofix/needs-human]`  
  为 #9565 已内置的样式提供选择入口，名称大小写不敏感解析。  
  https://github.com/QwenLM/qwen-code/pull/10283

### 5. 其他
- **#10598 [fix] 使 Release 工作流可手动触发**  
  将 runner-environment 映射移至实际调用 Vitest 的步骤，修复 GitHub 网页端触发校验失败问题。  
  https://github.com/QwenLM/qwen-code/pull/10598

---

## 功能需求趋势

1. **安全与沙箱**（#10377、#10583、#4016）：本地沙箱轻量化、敏感配置加密存储成为高频诉求，Code Mode 风格受限工具调用是 subagents 路线图的下一步。
2. **多 Agent / 跨会话协作**（#8724、#10594）：会话间消息传递与工作流可视化并行推进，多会话协调从设计走向落地。
3. **配置热加载**（#10568）：用户不愿为模型配置重启 CLI，期望文件监听或重载命令。
4. **Windows 平台稳定性**（#10538、#8124）：Computer Use SDK 崩溃、启动横幅渲染缺失等问题持续上报，Windows 仍是稳定性短板。
5. **Web Shell 体验打磨**（#10564、#10570、#10489）：错误信息透传、模型切换、推理偏好持久化，daemon 架构下的细节逐步补齐。

---

## 开发者关注点

- **错误信息透明化**：Web Shell 与 daemon 层将真实错误原因隐藏在笼统的 "Internal error" 之后（#10564、#10570），开发者需要直接可操作的失败信息。
- **配置即时生效**：settings.json 修改后需重启，期望热加载或重载命令（#10568）。
- **敏感信息存储**：API Key / Token 明文存储在配置文件中，推送、同步时有泄露风险（#4016）。
- **CI 基础设施稳定性**：ECS 共享 runner 池竞争导致 E2E 超时（#10535、#10597），发布流程被阻塞，CI 稳定性影响交付节奏。
- **防御性安全设计**：Git 配置键、shell 重定向等"看似只读、实则可执行"的边界条件被系统性审查（#10560、#10561），安全评审从单点转向类级关闭。

---

*本日报由 AI 技术分析师自动生成，数据截至 2026-08-31T04:10:49Z。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-31**


## 今日速览

今日社区活跃度显著回升，共有 39 个 Issue 和 50 个 PR 处于更新状态。最值得关注的是 TUI 界面交互的一系列修复与新功能（如 [#5773](https://github.com/Hmbown/CodeWhale/pull/5773) 修复长文本输入时 `[↑]` 发送按钮丢失的问题），以及围绕 `EPIC-005` 大规模 crate 解耦重构的持续讨论。此外，两个高严重度的 bug 引发关注：上下文压力警告的瞬态问题（#5620）和 agent shell 设置 `NoNewPrivs` 导致 sudo 被阻止（#5723）。


## 社区热点 Issues

本周社区讨论焦点集中在稳定性、沙箱机制和界面交互上：

1. **[#5316] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** — 20 条评论
   作为核心架构级 EPIC，该 Issue 追踪整个 TUI crate 解耦的完整结构，包括所有 sub-EPIC 和 FEAT 的完成状态。这一重构直接关系到项目的可维护性和长期演进，是本周社区讨论中牵动多个 PR 的“根节点”。
   https://github.com/Hmbown/CodeWhale/issues/5316

2. **[#5620] [bug] Context pressure warning is transient and the agent does not proactively react to it** — 11 条评论
   上下文压力警告的瞬态问题，Agent 缺乏主动响应机制，导致原本用于提示用户的安全信号失效。该问题被评为 Medium 严重度，属于用户无感知的上下文质量退化，可能影响长会话使用体验。
   https://github.com/Hmbown/CodeWhale/issues/5620

3. **[#5723] [bug] Agent shell sets `NoNewPrivs`, blocking `sudo` and pre-existing deployment workflow** — 3 条评论 | **高严重度**
   Agent 执行环境中的 `NoNewPrivs` 设置直接阻断了用户既有的生产部署流程，属于“可运行但被沙箱误伤”的典型场景，已关闭且修复路径清晰。
   https://github.com/Hmbown/CodeWhale/issues/5723

4. **[#2342] [enhancement] 输出内容中的文件，支持点击后打开预览** — 5 条评论
   用户希望输出中的文件路径可直接点击预览，减少在目录树中手动寻找文件的繁琐操作。该需求虽提出已久（2026-05-29），但持续获得关注，属于高频 UX 痛点。
   https://github.com/Hmbown/CodeWhale/issues/2342

5. **[#4955] [enhancement] Request: zero-sandbox / --no-sandbox mode for local dev** — 5 条评论 | 👍 1
   用户因 kernel-level Seatbelt 沙箱频繁阻断基础 shell 命令而提出禁用沙箱的诉求，凸显沙箱策略在本地开发场景中的“双刃剑”效应。
   https://github.com/Hmbown/CodeWhale/issues/4955

6. **[#4785] [closed] Dead-code sweep: 464 `#[allow(dead_code)]` attributes hiding drift** — 7 条评论
   项目存在 464 个 `#[allow(dead_code)]` 抑制属性，导致编译器无法报告结构性漂移。该清理工作属于代码质量基建，已关闭，说明一次大规模清理已完成。
   https://github.com/Hmbown/CodeWhale/issues/4785

7. **[#5771] [tui] Give the active-session composer the shared [↑] send geometry** — 1 条评论 | **今日新开**
   启动画面已使用共享的 Tideline 圆角编辑器外壳，但活跃会话的 ComposerWidget 仍使用不同的发送按钮布局，导致交互不一致。该 Issue 今天刚提出，对应 PR #5773 已同步创建。
   https://github.com/Hmbown/CodeWhale/issues/5771

8. **[#5772] [tui] Make provider selection explicit; stop implicit external CLI credential reuse** — 1 条评论 | **今日新开**
   当前 provider 选择器可能隐式探测/复用外部 CLI 凭据，且未提供明确的“无探测”承诺确认。该 Issue 关注凭据安全与用户知情权，计划增强选择器的显式确认机制。
   https://github.com/Hmbown/CodeWhale/issues/5772

9. **[#5769] [bug] Network errors sometimes cause the engine to stop** — 1 条评论 | **今日新开**
   用户反馈偶发网络错误会导致引擎停止运行，影响使用连续性。该问题在 Linux Mint 环境复现，可能影响更多平台。
   https://github.com/Hmbown/CodeWhale/issues/5769

10. **[#5713] [enhancement] fix(custom): support wire = "responses" | "anthropic" for kind="openai-compatible"** — 2 条评论
    自定义 provider 目前只能走 Chat Completions 协议，`wire = "responses"` 和 `"anthropic"` 配置被忽略。该增强将解锁对 Responses API 和 Anthropic Messages 协议的支持，扩大兼容范围。
    https://github.com/Hmbown/CodeWhale/issues/5713


## 重要 PR 进展

今日 PR 活跃度极高，多个 TUI 交互与架构 PR 并行推进，主要包括：

1. **[#5773] Give the active-session composer the shared [↑] send hitbox**（OPEN）
   修复长文本输入时 `[↑]` 发送按钮被覆盖的问题，恢复与 Tideline 共享的发送几何一致性。直接对应 Issue #5771，且基于 #5770 栈式提交。
   https://github.com/Hmbown/CodeWhale/pull/5773

2. **[#5770] Compose Tideline startup into the shared composer shell**（OPEN）
   将启动画面（current-mark、圆角编辑器、低调启动、路由控制等）集成到统一的 Tideline 编辑器外壳中，解决多个交互不一致问题，关闭 #5768。
   https://github.com/Hmbown/CodeWhale/pull/5770

3. **[#5758] fix(tui): restore rounded active composer enclosure**（OPEN）
   恢复圆角 ComposerWidget 外壳，同时保留现有输入、光标、历史、菜单等路径。关闭 #5757，并保留 `composer_border` 偏好作为可关闭选项。
   https://github.com/Hmbown/CodeWhale/pull/5758

4. **[#5765] fix(tui): render truthful active Tideline rail**（OPEN）
   为活跃会话添加被动的五组 Tideline 会话栏，在 100/120 列阈值下展示。修复历史工作流面板伪装为当前状态的问题，关闭 #5764。
   https://github.com/Hmbown/CodeWhale/pull/5765

5. **[#5763] fix(tui): make topbar route segment interactive**（OPEN）
   将顶栏路由/模型段变为可交互元素，支持点击或 F3 打开 provider 选择器，统一入口到 `/provider` 路径。关闭 #5756。
   https://github.com/Hmbown/CodeWhale/pull/5763

6. **[#5758] 已列，见上**

7. **[#5750] fix(session): engine adopts the host session id**（OPEN）
   修复会话恢复失败的根本原因：Engine 未采纳宿主的会话 ID，导致恢复后的新 turn 落到不同的会话中。 有完整复现证据和对抗性审查。
   https://github.com/Hmbown/CodeWhale/pull/5750

8. **[#5748] feat(tui): automation visibility slice 1 — panel projection + receipts**（OPEN）
   自动化可见性切片，包括 AutomationPanelState 投影、活动带槽、带类型的 HistoryCell 回执等，经历两轮对抗性审查后已批准。
   https://github.com/Hmbown/CodeWhale/pull/5748

9. **[#5747] feat(tui): unified self-serve MCP/plugin auth**（OPEN）
   统一 MCP/插件自助认证流程：合成 `authenticate` 工具、共享 `/mcp login` 流程、invalid_grant 轮换处理。自动化测试 354 通过。
   https://github.com/Hmbown/CodeWhale/pull/5747

10. **[#5744] release: prepare Codewhale v0.9.12 source**（OPEN）
    v0.9.12 源代码预发布准备：版本号 bump + CHANGELOG（113 条记录，含 40 个新增、40 个修复等）。该 PR 为草稿，需创始人最终确认后才可合并。
    https://github.com/Hmbown/CodeWhale/pull/5744


## 功能需求趋势

综合近 24 小时更新的所有 Issue 和 PR，社区最关注的功能方向清晰可见：

| 方向 | 热度 | 代表 Issue/PR |
|------|------|--------------|
| **TUI 交互一致性** | ★★★★★ | #5771, #5772, #5773, #5770, #5763, #5765, #5758 — 多个 PR 并行修复启动画面、活跃会话、顶栏、Composer 的交互一致性问题 |
| **沙箱 / 权限边界** | ★★★★ | #5723（NoNewPrivs 阻止 sudo）、#4955（zero-sandbox 模式）— 用户对沙箱策略的副作用反馈强烈 |
| **新 Provider 接入** | ★★★★ | #5713（wire 协议扩展）、#3751（Neuralwatt）、#1330（ZenMux）— 对协议兼容层的扩展需求持续 |
| **MCP 能力补全** | ★★★ | #2535（ACP+MCP 支持）、#5747（统一 MCP 认证）— 工具链完整性诉求 |
| **稳定性 / 可靠性** | ★★★ | #5769（网络错误停引擎）、#5620（上下文压力警告瞬态）、#5605/#5735（flaky 测试） |
| **Provider 原生 Web 搜索** | ★★★ | #5681 — 对 DeepSeek/Qwen/Kimi 等已文档化 first-party 路由的 web search 支持 |

值得注意的趋势：**TUI 交互一致性**是当前最集中的改进方向，大量 PR 围绕“单一路径、单一真相”的原则展开；同时 **沙箱策略的副作用**正在成为高频用户痛点，社区对“可控的沙箱禁用”需求明确。


## 开发者关注点

综合开发者反馈，以下痛点与需求最为高频：

1. **上下文压力警告形同虚设**（#5620）：警告是瞬态的、Agent 不主动响应，等于“安全信号失效”，用户无法感知上下文即将耗尽。

2. **沙箱阻断正常操作**（#5723, #4955）：`NoNewPrivs` 阻止 sudo、Seatbelt 阻断基础 shell 命令。开发者对于“沙箱应隔离恶意操作但不应阻碍正常开发流程”有明确预期。

3. **外部 CLI 凭据隐式复用风险**（#5772）：选择器可能在“无探测”承诺下隐式探测凭证路径，用户需要明确的确认机制和凭据使用边界。

4. **测试稳定性**（#5605, #5735）：两个 flaky 测试在 CI 并行负载下互相干扰（owner-lock 冲突），已阻碍 PR 合并节奏，需要根治而非缓解。

5. **会话恢复不可靠**（#5750）：Engine 不采用宿主会话 ID 导致恢复后 turn 丢失，这类问题对日常使用影响极大，修复优先度高。

6. **MCP 与 ACP 互斥**（#2535）：ACP 模式无法调用 MCP 工具，导致 ACP 只能作为纯聊天通道，无法满足“飞书用户触发 → ACP 转发 → 调 MCP 工具”的真实工作流。

7. **Provider 协议兼容**（#5713）：用户明确需要 `wire = "responses"` 和 `"anthropic"` 协议支持，当前固定 Chat Completions 的做法已不够用。

8. **自更新权限失败静默覆盖**（#5727）：更新器在权限设置失败时仍继续原子替换，可能导致安装的二进制不可执行，存在可靠性隐患。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*