# AI CLI 工具社区动态日报 2026-08-15

> 生成时间: 2026-08-15 01:18 UTC | 覆盖工具: 9 个

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

# AI CLI 工具社区动态横向分析报告

**报告日期：2026-08-15**
**数据来源：GitHub Issues / PR / Releases（各主流 AI CLI 工具官方仓库）**


## 1. 生态全景

当前 AI CLI 工具已从“单点试水”进入“群雄逐鹿、快速迭代”的爆发期。**跨平台稳定性（尤其是 Windows/macOS）成为所有工具共同面临的阿喀琉斯之踵**——Claude Code、Codex、Gemini CLI 均在本周出现重大平台回归。与此同时，**安全过滤器误报、代理状态上报不真实、长会话资源泄漏** 成为高频共性问题。各工具正以“周级”频率发布版本（Codex 24 小时 5 个 alpha、Claude Code 日更），社区共创（外部开发者修复核心缺陷）的势头明显增强。

**核心判断**：市场已从“拼模型能力”转向“拼工程稳定性、拼生态集成、拼开发者信任”。


## 2. 各工具活跃度对比

| 工具 | 社区热点 Issue 数 | 近期重要 PR 数 | 24h Release 数 | 当前版本 | 社区热度信号 |
|------|:---:|:---:|:---:|:------|:---|
| **Claude Code** | 10（1 个 63 评论热门 Bug） | 4（数量有限） | 1 | v2.1.233 | ★★★★★ 最活跃，63 评论 Bug 为全市场最高 |
| **OpenAI Codex** | 10（1 个 101 评论热门） | 10 | 5（均为 alpha） | rust-v0.148.0-alpha.18 | ★★★★★ 最活跃，24h 内 20+ PR 合入 |
| **Gemini CLI** | 10 | 10 | 2（nightly） | v0.56.0-nightly | ★★★★☆ 稳定迭代，P1 问题修复积极 |
| **GitHub Copilot CLI** | 10 | 3 | 2 | v1.0.81-0 | ★★★☆☆ 中低，但企业用户发言权重高 |
| **Kimi Code CLI** | 4（老 Issue 活跃） | 0 | 0 | — | ★☆☆☆☆ 今日状态低迷，记忆系统呼声高 |
| **OpenCode** | 10 | 10 | 0 | v1.18.x | ★★★★☆ 紧急事故驱动型活跃（ID 时间戳回绕） |
| **Pi** | 10 | 10 | 1 | v0.84.2 | ★★★★☆ Windows 讨论 + 供应商适配持续活跃 |
| **Qwen Code** | 10 | 10+（8 个系列 PR） | 3 | v0.21.12 | ★★★★☆ 自动化审阅体系投入显著 |
| **CodeWhale (DeepSeek-TUI)** | 10 | 10 | 1 | v0.9.8 | ★★★☆☆ 发布后 CI 飘红暴露流程短板 |


## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|----------|
| **Agent 多层级可视化与编排** | Claude Code（#24537）、Gemini CLI（#28738 代理调用代理）、Pi、CodeWhale（#5372 子代理资源回收） | 多 Agent 工作流的监控 Dashboard、子代理状态透明化、层级编排一致性 |
| **跨平台稳定性（Windows 重灾区）** | Claude Code（Git Bash 弹窗、ECONNRESET）、Codex（CPU 忙循环、输入延迟）、Gemini CLI（ripgrep 修复）、Pi（WSL 登录挂起）、Copilot CLI（文件锁）、Qwen Code（内存增长） | 版本发布前缺乏系统级回归测试，平台特有问题集中爆发 |
| **安全过滤器误报调优** | Claude Code（#71992 系列 4 个 Issue）、Codex（#28015）、Gemini CLI（#26525 脱敏）、Copilot CLI（模型禁用策略） | “宁枉勿纵”策略伤及合法开发工作，需更智能的上下文识别 |
| **会话生命周期管理** | Claude Code（归档恢复）、Codex（Thinking 卡死丢会话）、Copilot CLI（停止操作丢失会话）、Gemini CLI（挂起/恢复）、CodeWhale（并发写锁） | 会话状态恢复、跨设备同步、崩溃后现场留存 |
| **子代理（Subagent）状态上报真实性** | Gemini CLI（#22323 MAX_TURNS 误报 GOAL 成功）、Claude Code（Advisor API 无响应）、Codex（UI 假死） | 异常中断必须如实上报终止原因，否则误导自动化流程 |
| **上下文压缩/记忆系统可配置化** | Claude Code（MEMORY.md 上限）、Gemini CLI（Auto Memory 无限重试）、Kimi Code（#1283 跨会话记忆）、Pi（追加式压缩）、Qwen Code（/compress 刷新） | 记忆与压缩策略需可配置、可审计、有透明度 |
| **长会话资源泄漏** | Claude Code、Codex、Gemini CLI（PTY 泄漏）、Qwen Code（#2128 内存无界）、OpenCode（ID 回绕） | 数小时以上会话的持续稳定性，是最隐蔽的“慢性病” |
| **第三方模型/供应商适配** | Pi（SiliconFlow、xAI、Vertex）、CodeWhale（DS4 本地路由）、OpenCode（DeepSeek Free 配额）、Qwen Code（models.dev 集成） | 模型目录与供应商实际能力的自动同步机制 |
| **CLI 基础体验打磨** | Claude Code（shell 补全 PR）、Qwen Code（Web Shell 上传）、Copilot CLI（/restart 冲突）、Codex（粘贴行为优化） | 终端交互细节决定日常使用愉悦度 |


## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线/策略 | 护城河与短板 |
|------|---------|----------|---------------|-------------|
| **Claude Code** | 全功能企业级开发助手 | 大型团队、CI/CD 场景 | 依托 Anthropic 模型深度集成，GitLab MR 等企业流程打通；强调安全过滤器（但误报重） | 模型能力 + 企业流程适配；安全误报、Windows 回归拖后腿 |
| **OpenAI Codex** | 高速迭代的“模型 + 生态”先锋 | 追求新模型/新功能的开发者 | **最激进迭代节奏**（24h 内 5 个 alpha + 20+ PR）；连接器体系（faster-connectors）架构重构 | 功能速度行业第一；但发布质量门禁缺失导致 26.810 系列双平台严重回归 |
| **Gemini CLI** | 稳定优先的子代理编排 | 依赖复杂 Agent 工作流的开发者 | 强调 P1 修复 + SSR Agent 自动修复机制；社区协作深度高（外部 PR 质量突出） | 子代理可靠性处理领先；但功能迭代速度落后于 Codex |
| **GitHub Copilot CLI** | 企业级 Copilot 生态延伸 | 已深度绑定 GitHub/Enterprise 的用户 | 依托 GitHub 模型目录 + MCP 生态 | 企业模型策略一致性最核心（当前体验不佳）；但社区活跃度垫底，反馈响应慢 |
| **Kimi Code CLI** | 轻量级个人开发助手 | 追求简洁的中文开发者 | 模型能力为引擎，但工程投入明显不足 | 社区呼声（记忆系统）强烈，但回应迟缓；今日 Issue/PR 清零 |
| **OpenCode** | 开源可自托管的协议层 | 追求自主可控的团队 | 开源协议 + 多 Provider 路由；强调“协议优先”而非模型绑定 | 48 位 ID 回绕等架构级事故暴露工程成熟度不足；但修复速度值得肯定 |
| **Pi** | 极致终端体验的“工匠派” | 重度 TUI 用户、性能敏感者 | 高度关注流式渲染性能、供应商扩展；强调社区共创（大量外部 PR） | TUI 体验打磨细致；Windows/WSL 生态短板拖累用户基数 |
| **Qwen Code** | 自动化工程体系先行者 | 需要代码审阅/CI 集成的大团队 | **自动化 Review/Autofix 体系投入独树一帜**（8 个 PR 系列）；同时推进 Web 桥接 | 自动化程度行业领先；但过度依赖自动化导致多轮审阅耗费人力 |
| **CodeWhale (DeepSeek-TUI)** | 开源高性价比的“性能黑马” | 追求成本、rust 开发者 | Rust 编写、第一方本地模型路由（DS4）、双层 Auto-Review；双模型守护模式 | 社区共创（外部开发者修复并发缺陷）质量极高；但发布门禁流程（CI 未同步）需补课 |


## 5. 社区热度与成熟度

**第一梯队（高活跃 + 高影响）**：**Claude Code** 与 **OpenAI Codex** 平分秋色。Claude Code 以 63 评论 Bug 和 96 👍稳定积累开发者共识；Codex 以 101 评论的 Windows 卡顿帖 + 24h 内大量 PR 合入维持极高热度。两者 “热度 ≠ 好评率”——当前社区情绪偏负，集中在平台稳定性、安全误报两个方向。Claude Code 的 PR 抓取量仅 4 条，存在数据盲区，需后续补充。

**第二梯队（中高活跃，社区结构分化）**：
- **Gemini CLI**：P1 问题处理效率极高（子代理误报 GOAL 已提交修复），社区信任度较好；
- **OpenCode**：紧急事故驱动型活跃，ID 回绕导致大量连锁 Issue，修复速度尚可；
- **Pi**：TUI 性能话题高频，供应商扩展（SiliconFlow、xAI）体现开放生态优势；
- **Qwen Code**：自动化 Review 系列 PR 多达 8 条且相互关联，社区影响力逐步积累，但 “多轮 review” 争议也带来一定消耗。

**第三梯队（中低活跃，需关注）**：**GitHub Copilot CLI** 社区反馈集中在企业模型策略和 MCP 回归，但活跃度偏低，修复节奏慢；**Kimi Code CLI** 今日 Issue/PR 清零但社区核心诉求（记忆系统）尚未获得回应，出现“呼声高、响应慢”的错配；**CodeWhale** 体量小但社区共创质量高，发布后 CI 飘红暴露流程短板。


## 6. 值得关注的趋势信号

### 🔴 信号一：平台回归成为“高频流行病”
Codex 26.810 系列在 Windows/macOS 双平台同步崩溃且用户请求回滚；Claude Code 2.1.232 在 Windows Git Bash 弹窗刷屏；Pi 的 WSL 登录挂起；OpenCode 的 48 位 ID 回绕。**所有工具都缺失“平台级回归测试门禁”**。对于开发者的启示：**升级不可盲目追新**，建议在生产环境固定版本观察 3-5 天后决策。

### 🟠 信号二：代理状态真实性问题将倒逼“可观测性”成为标配
Gemini CLI 的子代理 MAX_TURNS 被误报为 GOAL 成功、Codex UI 卡在 Thinking、Claude Code 的 Advisor API 无响应——共同指向 **“代理的执行状态必须是可信的、可审计的、可干预的”**。这不仅关乎用户体验，更关乎自动化流水线是否会被“假成功”误导。预计下一阶段各工具会在状态可见性、审计追踪上加大投入。

### 🟡 信号三：安全过滤器的“误伤率”将决定工具在大型企业的去留
Claude Code 4 个 Cyber 误报 Issue 集中关闭（session-halted 级别）、Codex 将 git status 误判为网络攻击、Qwen Code 的命令替换绕过漏洞——**安全能力正在从“有/无”走向“精准/粗糙”的分水岭**。企业安全团队在评估工具落地时，会将“误报导致的生产中断成本”纳入考量。开发者社区已形成“宁缺毋滥”的共识，呼吁更智能的上下文感知。

### 🟢 信号四：开源/社区共创成为稳定性主引擎
Pi 的外部开发者修复了剪贴板与并发问题、CodeWhale 的 EvanProgramming 24 小时内修复两个并发缺陷、Qwen Code 的 autofix 接管 PR 迭代、Gemini CLI 的 SSR Agent 自动修复合入——**“外部贡献者 + 自动化修复”的组合正在成为质量保障的新常态**。这对于评估工具的长期健康度有重要参考意义。

### 🔵 信号五：模型/供应商目录的“元数据同步”问题浮出水面
Pi 的 glm-5.1 下架未同步、CodeWhale 的 DeepSeek 输出上限差 6 倍、Qwen Code 的 models.dev 集成、Claude Code 的 auto-compact 窗口不一致——**模型能力目录与实际路由配置之间存在系统性偏差**。对于工具厂商，如何建立模型元数据的自动化同步机制是当务之急；对于开发者，需要留意“配置宣称的能力”与“实际有效的能力”之间的差距。

### 🟣 信号六：企业级功能的“配置一致性”成为新战场
Copilot CLI 多个 Issue（模型目录缺失、feature flag 冲突、reasoning effort 不兼容）集中暴露了**服务端配置与客户端行为不一致**的问题。企业用户在部署 Copilot CLI 时面临“设置里显示启用、CLI 里不可用”的困境。此问题的解决需要服务端与客户端的同步发布机制，目前各工具方案都未完善，属于待开发的空白领域。

---

**结语**：2026 年 8 月的 AI CLI 市场，正处于从“能用”迈向“好用”的阵痛期。模型的智力门槛在降低，但工程稳定性、平台兼容、生态协作正在成为新的分水岭。对于技术决策者，建议在选型时将 **“社区 Bug 响应周期”、“平台回归测试记录”、“状态可观测性”** 作为与模型能力同等重要的评估维度。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-15）

## 一、热门 Skills 排行

| 排名 | PR | Skill | 状态 | 功能简述 | 社区讨论热点 |
|---|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 修复 | OPEN | 修复 `run_eval.py` 在 Windows 下 stream 读取、触发检测失败、并行 worker 等问题 | 全仓最高热度 PR。评价系统对所有 skill description 一律报 recall=0%，"optimizing against noise"，直指 skill-creator 核心验证链路失效 |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | OPEN | AI 生成文档的排版质量管控：孤词换行、寡行标题、编号对齐 | AI 生成文档普遍存在排版问题，用户极少主动要求但影响专业观感 |
| 3 | [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit (v1.3.0) | OPEN | 交付前质量门禁：先机械验证文件存在性，再按破坏严重度对四维度推理进行审计 | 社区对"交付前自动审查"的需求明确，Issue #1385 同步提交了完整流水线提案 |
| 4 | [#568](https://github.com/anthropics/skills/pull/568) | servicenow | OPEN | 覆盖 ITSM、ITOM、ITAM、SecOps、SPM、CSDM 等全平台的 ServiceNow 助手 | 覆盖面极广的企业级 Skill，讨论至今持续 5 个月仍在活跃 |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | odt | OPEN | ODT/ODS 的创建、模板填充、格式转换（含 ODT→HTML） | 开源文档格式支持缺口明显，与已有 docx/pdf 形成互补 |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | OPEN | 覆盖 Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、边界用例等全栈测试方法论 | 测试是社区高频需求，该 Skill 打通了"测什么"到"怎么测"的完整链路 |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) | pyxel | OPEN | 基于 pyxel-mcp 的复古/像素风游戏开发工作流 | 生态位差异化的创意类 Skill，覆盖 write→run→capture→iterate 闭环 |

> 注：头部 PR 均带 **[OPEN]** 标记且未合并，反映官方仓库的合并审查周期较长，社区提交活跃度远超官方合并速度。

## 二、社区需求趋势（来自 Issues）

| 方向 | 代表 Issue | 关注度（评论/👍） | 说明 |
|---|---|---|---|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 43 评论 / 2👍 | 社区 Skill 伪装官方命名空间、诱导权限授予。**全仓最高热度 issue**，直指分发机制的信任漏洞 |
| **组织级 Skill 分发** | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论 / 8👍 | 企业内部共享 Skill 需手动下载/上传，缺少共享库或链接机制 |
| **Skill 评测与验证** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) | 12+3 评论 / 7+1👍 | `run_eval.py` 全量触发失败（recall=0%），评价信号失真，多用户复现 |
| **上下文窗口管理** | [#1487](https://github.com/anthropics/skills/issues/1487) / [#1175](https://github.com/anthropics/skills/issues/1175) | 4+4 评论 | claude-api Skill 单次注入 ~156k tokens 撑爆 context；SPO 文档处理需平衡权限逻辑与上下文成本 |
| **Bundled Skill 治理** | [#189](https://github.com/anthropics/skills/issues/189) | 6 评论 / 9👍 | document-skills 与 example-skills 内容重复安装，浪费 context window |
| **最佳实践更新** | [#202](https://github.com/anthropics/skills/issues/202) | 8 评论 / 1👍 | skill-creator 偏"面向人的教程"而非"面向 Claude 的操作指令"，token 效率低 |

**趋势小结**：最集中的诉求是 **Skill 生态的工程化治理**——评测可靠性、安全分发、去重、上下文预算控制。创意型新 Skill 提案反而不是社区讨论的主战场。

## 三、高潜力待合并 PR（近期可能落地）

| PR | Skill | 状态 | 落地潜力判断 |
|---|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | OPEN（更新于 07-02） | 逻辑清晰、四维度审计框架完整，Issue #1385 配套提案已形成体系。作者持续迭代，落地概率高。Skill 明确为"任何项目、任何技术栈、任何模型"通用，后续扩展性强 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | OPEN（更新于 07-27） | 针对规划产物堆积无生命周期的问题，定位精准（Issue #1417 由两位贡献者共同定义），作者署名致谢原始提出者，社区协作基础好 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | 两个合规修复 | OPEN（更新于 08-12） | 修复仓库内**两个违反 Agent Skills 规范自身的 Skill**（name 字段与目录不匹配）。作为规范参考实现的仓库不合规，属必须修复项，PR 极可能被接收 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf 大小写修复 | OPEN（更新于 04-29） | 修复 SKILL.md 中 8 处大小写不匹配导致的引用断裂（case-sensitive 文件系统）。纯 bug 修复，合并预期明确 |
| [#541](https://github.com/anthropics/skills/pull/541) | docx 修订冲突修复 | OPEN（更新于 04-16） | 修复 tracked changes 的 `w:id` 碰撞导致的文档损坏。根因分析到位，**工程价值高但审查周期长**，属"技术正确但优先级低"的典型 |

**重点关注**：[#1298](https://github.com/anthropics/skills/pull/1298)（skill-creator eval 修复）虽未列入上表，但它是 #556 的直接修复，且有多位贡献者重复提交类似修复（#514、#1099、#1050），官方合并压力最大。可视为 Meta-PR：它解锁其他所有依赖 eval 信号进行 description 优化的 Skill 开发。

## 四、Skills 生态洞察

**当前社区最集中的诉求是：让 Skill 的分发、评测、审计机制先"可信"，再谈"丰富"——即从"堆技能数量"转向"治理技能质量"**——头部 5 个热门 PR 全部是修复/审计/验证类，创意型新 Skill 反而被淹没在工程化诉求之下；与此同时，40+ 个未合并的 OPEN PR 悬置数月，官方审查速度跟不上社区贡献节奏，可能抑制后续贡献意愿。

---

# Claude Code 社区动态日报 — 2026-08-15

## 今日速览

今日最值得关注的是 **v2.1.233 发布**，新增了 GitLab MR URL 支持和可选的用户身份转发设置。社区方面，**Advisor 触发时 API 无响应** 的 Bug 以 63 条评论成为最热议题，同时多个关于 **Cyber 安全策略误报** 的 Issue 集体浮出水面；此外，Windows 平台在 2.1.232 版本后出现多个稳定性回归问题，值得开发者警惕。

---

## 版本发布

### v2.1.233
- **GitLab 集成增强**：为 `--worktree` 标志和 `claude agents` 视图添加 GitLab Merge Request URL 支持，MR 在界面中显示为 `!N` 格式。
- **身份转发选项**：在 Anthropic 上游新增可选的 `forward_user_identity` 应用网关设置，可将已登录用户的身份以 header 形式发送，便于代理背后的场景使用。

🔗 [查看 Release](https://github.com/anthropics/claude-code/releases)

---

## 社区热点 Issues

### 1. [BUG] Advisor 触发时 API 无响应 — 63 条评论，96 👍
**#69238** ｜ 创建于 06-18 ｜ 仍开放
使用 Sonnet 作为基础模型时，触发 Advisor 后频繁出现 "No response from API · Retrying in 2m 25s" 错误。累计 63 条评论、96 个 👍，是当前社区影响面最大的 Bug 之一。
🔗 https://github.com/anthropics/claude-code/issues/69238

### 2. [功能] 桌面端会话取消归档 — 29 条评论，57 👍
**#30869** ｜ 创建于 03-04 ｜ 已关闭
用户要求桌面应用支持取消归档 Claude Code 会话。虽然已关闭，但 57 个 👍 表明需求依然强烈，可能有后续实现计划。
🔗 https://github.com/anthropics/claude-code/issues/30869

### 3. [功能] Agent 层级仪表盘 — 16 条评论
**#24537** ｜ 创建于 02-09 ｜ 仍开放
社区对多 Agent 工作流的实时可视化监控需求持续走高，该 Issue 提出在 TUI + Desktop 中统一展示 Agent 层级的真实时状态、成本和工具调用。
🔗 https://github.com/anthropics/claude-code/issues/24537

### 4. [Bug] Windows Git Bash：静态分析误报导致权限弹窗频发 — 9 条评论
**#86619** ｜ 创建于 08-14 ｜ 仍开放
2.1.232 起（auto-mode 上线后），Windows Git Bash 中对只读 cd-compound 命令的静态分析产生误报，导致**无法关闭的权限确认弹窗持续弹出**。两台独立机器同日复现，开发者反馈强烈。
🔗 https://github.com/anthropics/claude-code/issues/86619

### 5. [文档/Bug] Playwright/Puppeteer 与 Web 沙箱代理不兼容 — 11 条评论
**#11791** ｜ 创建于 2025-11-17 ｜ 仍开放
浏览器自动化工具因安全代理不支持 HTTPS CONNECT 隧道而无法在 Claude Code Web 沙箱中运行。属于架构性限制，社区要求官方文档明确标注以节省排查时间。
🔗 https://github.com/anthropics/claude-code/issues/11791

### 6. [Bug] 崩溃后终端陷入鼠标追踪模式 — 2 条评论
**#84029** ｜ 创建于 08-05 ｜ 仍开放
TUI 崩溃时未发出禁用序列，导致终端停留在鼠标追踪模式，每次鼠标移动都向 shell 注入转义序列。属于终端状态恢复的边界 Bug，复现路径清晰。
🔗 https://github.com/anthropics/claude-code/issues/84029

### 7. [Bug] Windows 11 全平台 ECONNRESET — 2 条评论
**#86473** ｜ 创建于 08-13 ｜ 仍开放
Windows 11 上 v2.1.229 所有 Code 界面持续报 "Connection lost mid-response"，而裸 HTTPS 访问 api.anthropic.com 正常。可能与代理或网络栈相关，已标记为 duplicate。
🔗 https://github.com/anthropics/claude-code/issues/86473

### 8. [Bug] Cyber 安全过滤器连环误报 — 多个 Issue
**#71992 / #71986 / #71985 / #71978** ｜ 创建于 06-28 ｜ 已关闭
同一用户在不同工作域（infra-devops、通用、逆向工程、crypto-secrets）反复遭遇 **session-halted 级别的误报拦截**，涵盖解析无人机视频流、白盒 AES 逆向等合法工作。共 4 个 Issue 集中关闭，暴露出安全过滤器对合法开发场景的误伤问题。
🔗 https://github.com/anthropics/claude-code/issues/71992

### 9. [Bug] 相同模型会话 Auto-compact 窗口不一致 — 1 条评论
**#85205** ｜ 创建于 08-09 ｜ 仍开放
同一模型 `claude-opus-5[1m]` 在不同会话中分别以 150k 与 1M 作为 auto-compact 阈值，且 `/context` 会直接输出 150k 字样，说明配置未正确继承模型上下文窗口。
🔗 https://github.com/anthropics/claude-code/issues/85205

### 10. [Bug] 桌面应用归档项目无法恢复 — 1 条评论
**#85272** ｜ 创建于 08-09 ｜ 仍开放
归档本地 Cowork 项目后，UI 中无任何入口查看或恢复（Chat 项目不受影响）。属于数据管理能力缺失。
🔗 https://github.com/anthropics/claude-code/issues/85272

---

## 重要 PR 进展

### 1. [#86746] fix(security-guidance): 保留 Python 探针错误信息
**aayush598** ｜ 8 月 14 日更新
修复 #86709：`sg-python.sh` 原先将探针 stderr 重定向到 /dev/null，导致所有候选解释器失败时用户只看到通用错误。此 PR 保留并输出探针诊断信息，便于定位 Python 环境问题。
🔗 https://github.com/anthropics/claude-code/pull/86746

### 2. [#86626] feat: 为 CLI 添加 shell 补全（bash/zsh/fish）
**5hal1n** ｜ 8 月 14 日更新
为 `claude` CLI 添加 tab 补全脚本，兼容 macOS 自带 bash 3.2，并附带安装文档。提升命令行日常使用体验。
🔗 https://github.com/anthropics/claude-code/pull/86626

### 3. [#83890] Create pylint.yml
**KrypticKode007** ｜ 8 月 14 日更新
新增 Pylint CI 工作流，用于 Python 代码静态检查。当前仓库是否接受此改动有待观察。
🔗 https://github.com/anthropics/claude-code/pull/83890

### 4. [#41611] add the missing source to claude code
**tornikeo** ｜ 8 月 14 日更新
补充 Claude Code 中缺失的 source 信息。PR 描述较为简略，需进一步查看 diff 确认具体内容。
🔗 https://github.com/anthropics/claude-code/pull/41611

> 注：由于本次抓取的 PR 数量有限（4 条），无法覆盖到 10 条。建议关注后续数据源扩展或结合历史 PR 进行趋势分析。

---

## 功能需求趋势

从本期 Issues 中可提炼出以下社区关注方向：

1. **Agent 工作流可视化与编排**（#24537）：多 Agent 层级监控 Dashboard 呼声持续，开发者需要统一直观的工具链视图，涵盖成本、状态与调用链。
2. **记忆系统可配置化**（#79217）：`MEMORY.md` 的 200 行/25KB 索引上限应可调，进阶用户需要更灵活的上下文管理。
3. **会话生命周期管理**（#30869、#86089）：桌面端归档/恢复能力以及 Workflows 中 Agent 会话的 resume 支持成为高频诉求。
4. **Shell 补全与 CLI 体验**（#86626）：开发者期望更顺滑的终端交互体验。
5. **Web 界面的用户控制权**（#66117）：Claude.ai Web/App 中应允许关闭 prompt 建议，减少干扰。

---

## 开发者关注点

- **安全过滤器误报是重灾区**：Cyber 类误报（#71992 等）和 Fable 5 双用途安全误报（#86804）导致合法开发工作被中断，开发者呼吁优化过滤策略、降低误伤率。
- **Windows 平台稳定性回归**：2.1.232 后 Git Bash 权限弹窗刷屏（#86619）、MSIX 更新文件占用（#86555）、ECONNRESET（#86473）等多起问题集中出现，建议 Windows 用户暂缓升级或关注后续热修复。
- **成本与配额透明度**：#84607 显示同一工作日内每配额点的 token 消耗波动高达 17 倍，且 #83062 报告了 $995.67 的意外自动充值，用户对计费机制的可解释性提出质疑。
- **终端与桌面端细节体验**：崩溃后终端状态未恢复（#84029）、macOS 启动 107s 卡顿（#76079）等边界问题仍需打磨。
- **插件市场兼容性**：目录源插件 hooks 不执行（#86809）与 macOS 26 EFAULT 失败（#86786）暴露出插件生态的稳定性短板。

---

*本日报由 GitHub 数据自动生成，仅供参考，不构成对任何 Issue 或 PR 的官方立场。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-15**
**数据来源：github.com/openai/codex**


## 今日速览

今日社区焦点集中在 **Windows 平台性能问题的大规模爆发**：26.810.4967.0 版本更新后，大量用户报告系统级鼠标卡顿、CPU 空转和内存泄漏，此类 Issue 单日新增超 10 条且评论活跃。与此同时，Codex 团队保持着高频迭代节奏，24 小时内连续发布 5 个 rust 预发布版本（v0.148.0-alpha.14 至 .18），并在 TUI 启动流程、权限模型、沙箱网络等多个方向合入了大量内部修复 PR。


## 版本发布

过去 24 小时内发布了 5 个 rust 预发布版本，均为 alpha 迭代：

| 版本 | 类型 |
|---|---|
| `rust-v0.148.0-alpha.18` | Pre-release |
| `rust-v0.148.0-alpha.17` | Pre-release |
| `rust-v0.148.0-alpha.16` | Pre-release |
| `rust-v0.148.0-alpha.15` | Pre-release |
| `rust-v0.148.0-alpha.14` | Pre-release |

> 发布说明未附带具体变更日志。观察近期合并的 PR，这些版本可能包含权限配置文件解析、Linux 沙箱 DNS 代理、TUI 启动体验改进等内部重构。


## 社区热点 Issues（Top 10）

### 1. 🔥 Codex App 在 Windows 11 Pro 上频繁冻结/卡顿
**#20214** | 💬 101 评论 | 👍 84 | [链接](https://github.com/openai/codex/issues/20214)

**摘要**：Windows 11 Pro 用户报告 Codex App 在系统资源充足（Ryzen 5 5600 + 32GB RAM）的情况下仍频繁卡顿冻结。

**关注理由**：评论数最多的 Issue，已持续 3 个多月仍未解决。作为 Plus 用户的核心体验问题，该 Issue 已成为 Windows 性能问题的"总集合帖"。

---

### 2. macOS 上 SQLite 日志持续刷写（rust-v0.142.0 后仍未解决）
**#29532** | 💬 47 评论 | 👍 9 | [链接](https://github.com/openai/codex/issues/29532)

**摘要**：升级至 rust-v0.142.0 后，`~/.codex/logs_2.sqlite` 仍存在持续 SQLite 日志写入问题。`responses_websocket` 端点已有改善，但整体问题未完全修复。

**关注理由**：涉及磁盘 I/O 和续航的系统级问题，macOS 用户受影响范围广，且此前被认为已部分修复但实际未根治。

---

### 3. Windows 桌面版每秒轮询 powershell.exe 导致高 CPU
**#25453** | 💬 26 评论 | 👍 7 | [链接](https://github.com/openai/codex/issues/25453)

**摘要**：Codex Desktop 每秒生成短生命周期 powershell.exe 进程用于全进程轮询，导致显著 CPU 占用。

**关注理由**：进程轮询设计导致的资源浪费问题，直接影响 Pro 用户的使用体验，且已持续 2.5 个月。

---

### 4. 网络安全误报：常规仓库维护被反复拦截
**#28015** | 💬 24 评论 | 👍 5 | [链接](https://github.com/openai/codex/issues/28015)

**摘要**：CLI 将常规本地 DevOps 维护操作（如检查 git 状态、清理临时文件）误判为网络安全风险，反复打断付费会话。

**关注理由**：安全检测的误报率直接影响 CLI 的日常可用性，反映出安全策略的"宁枉勿纵"倾向需要调整。

---

### 5. UI 卡在 Thinking 状态，Stop 失效且重启后会话消失
**#24287** | 💬 23 评论 | 👍 8 | [链接](https://github.com/openai/codex/issues/24287)

**摘要**：Codex Desktop 接受 prompt 后 UI 卡在"Thinking"状态，Stop 按钮无效，重启应用后该 turn 消失。

**关注理由**：会话状态管理缺陷，用户可能丢失工作进度。影响 macOS 和 Windows 客户端（M1 Max + 64GB RAM 上仍复现）。

---

### 6. Windows 桌面应用触发系统级输入延迟
**#28855** | 💬 18 评论 | 👍 20 | [链接](https://github.com/openai/codex/issues/28855)

**摘要**：Codex Desktop 26.611.8604.0 在 Windows 上导致间歇性全系统输入延迟（鼠标/键盘），即使日志干净、插件已禁用。

**关注理由**：👍 20 的高赞表明影响面广。问题在应用启动/重开时立即出现，严重干扰正常电脑使用。

---

### 7. Work Louder/Codex Micro HID 发现阻塞 Electron 主线程
**#33912** | 💬 18 评论 | 👍 2 | [链接](https://github.com/openai/codex/issues/33912)

**摘要**：Windows 版 Codex 在发现 Work Louder/Codex Micro 硬件设备时，HID 枚举阻塞 Electron 主线程导致应用冻结。

**关注理由**：暴露了硬件集成层对主线程的阻塞问题，涉及外设兼容性且修复优先级较高。

---

### 8. **🚨 今日新增** Windows 26.810.4967 空转 CPU 忙循环
**#38547** | 💬 12 评论 | 👍 5 | [链接](https://github.com/openai/codex/issues/38547)

**摘要**：刚从 26.803.10989.0 升级至 26.810.4967.0 后，应用完全空闲时 Electron 主进程进入持续 CPU 忙循环。无需打开 Browse 功能即可复现。

**关注理由**：**当日最重大回归之一**。版本升级后立即出现，CPU 持续占用影响所有 Windows 用户。

---

### 9. **🚨 今日新增** Windows 更新导致整机卡顿，完全退出后立即恢复
**#38554** | 💬 8 评论 | 👍 3 | [链接](https://github.com/openai/codex/issues/38554)

**摘要**：26.810.4967.0 版本安装后（约 15:03 UTC+8），整机开始卡顿。完全退出 Codex 后问题立即消失。多个用户确认同版本存在类似情况。

**关注理由**：与 #38547 相互印证，两个独立报告指向同一版本回归——26.810.4967.0 存在严重的 Windows 性能问题。

---

### 10. **🚨 今日新增** macOS 新版本崩溃频繁、CPU 占用高
**#38637** | 💬 5 评论 | 👍 2 | [链接](https://github.com/openai/codex/issues/38637)

**摘要**：26.810.41047 版本在 macOS (arm64) 上几分钟内即崩溃，几乎无法打开长对话，CPU 占用过高。用户请求回滚版本。

**关注理由**：表明 26.810 系列版本在 macOS 平台同样存在稳定性回归（与 #38468 相互印证）。


## 重要 PR 进展（Top 10）

### 1. 提取应用缓存逻辑至 ConnectorRuntimeManager
**#31471** | [链接](https://github.com/openai/codex/pull/31471)

**内容**：将 Codex Apps 工具缓存提取至 `ConnectorRuntimeManager`，按账户/ChatGPT 用户/workspace 模式隔离运行时上下文，并支持不可变快照。

**意义**：四步重构的第一步，为连接器体系（faster-connectors）奠定架构基础。

---

### 2. Linux 沙箱：通过托管代理路由 DNS
**#31644** | [链接](https://github.com/openai/codex/pull/31644)

**内容**：为 Linux bubblewrap 网络命名空间添加 DNS 适配器（opt-in `enable_dns`），解决原生 DNS 客户端不遵循 HTTP/SOCKS 代理变量的问题。

**意义**：补齐 Linux 沙箱的网络安全隔离能力。

---

### 3. 保留环境配置所有权
**#38678** | [链接](https://github.com/openai/codex/pull/38678)

**内容**：环境附件可继承线程配置或自带配置。后续线程设置更新时，刷新继承配置但**不覆盖**附件自有的权限和 capability roots。

**意义**：修正权限继承逻辑，防止误覆盖。

---

### 4. 排除 TUI 粘贴突发中的快捷修改输入
**#38675** | [链接](https://github.com/openai/codex/pull/38675)

**内容**：将纯文本/Shift/Windows AltGr 字符事件视为文本输入；排除 Super/Hyper/Meta 修饰的字符事件进入粘贴突发检测。

**意义**：改善 TUI 输入体验，避免快捷键触发意外粘贴行为。

---

### 5. 遵循每环境权限配置文件
**#38673** | [链接](https://github.com/openai/codex/pull/38673)

**内容**：为每个 `EnvironmentConfig` 增加解析后的 `permission_profile`，`Ready` 环境配置可覆盖线程权限，`FromThread` 继续继承。

**意义**：权限模型精细化，支持更灵活的环境隔离。

---

### 6. 转发执行器网络策略决策用于审计
**#38670** | [链接](https://github.com/openai/codex/pull/38670)

**内容**：执行器本地代理做出最终域名/非域名策略决策后，发送 `network/policyDecision` 通知到控制器并触发审计事件。

**意义**：增强网络策略的可观测性和安全审计能力。

---

### 7. 递归解析 Code Mode 类型中的本地 JSON Schema $ref
**#38664** | [链接](https://github.com/openai/codex/pull/38664)

**内容**：Code Mode 此前将文档内 `$ref` 渲染为 `unknown`，本 PR 支持递归解析 fragment-only JSON Pointer 引用。

**意义**：提升 TypeScript 类型推导准确性，改善开发者体验。

---

### 8. Windows 沙箱强制实施托管 deny-read 规则
**#38660** | [链接](https://github.com/openai/codex/pull/38660)

**内容**：确保 Windows 沙箱请求在所有执行路径和设置刷新中保留托管文件系统 deny 规则；不支持时 fail-closed。

**意义**：修复安全策略可能被绕过的问题。

---

### 9. 优化终端超链接布局：无链接时跳过布局计算
**#38657** | [链接](https://github.com/openai/codex/pull/38657)

**内容**：若行内无超链接元数据，提前返回 `mark_buffer_hyperlinks`，避免不必要的段落布局开销。

**意义**：性能微优化，减少渲染开销。

---

### 10. TUI 启动期间保持输入框可编辑
**#38642** | [链接](https://github.com/openai/codex/pull/38642)

**内容**：配置和应用服务器初始化期间显示临时 composer，保留用户已输入的文本、光标位置，启动完成后再无缝移交主 TUI。

**意义**：解决"启动慢让用户干等"的体验痛点。


## 功能需求趋势

从近期 Issues 中可提炼出以下社区关注方向：

1. **性能与资源占用**（占比最高）
   - Windows 平台 CPU 空转、内存泄漏、输入延迟问题集中爆发
   - macOS 上 SQLite 日志持续写入影响磁盘寿命与续航

2. **网络安全误报调优**
   - 常规开发操作被误判为安全风险，需要更智能的上下文识别（#28015）

3. **版本稳定性**（新增）
   - 26.810 系列版本在 Windows/macOS 双平台出现严重回归，社区开始呼吁"请回滚"（#38637）

4. **会话恢复与状态管理**
   - 卡在"Thinking"、turn 消失、长线程恢复为空白等状态问题

5. **CLI 交互体验**
   - 粘贴行为、composer 编辑时机、快捷键冲突等细节优化需求

6. **跨平台体验一致性**
   - macOS 与 Windows 的行为差异和平台特有问题持续存在


## 开发者关注点

**🔴 紧急：26.810.4967.0 版本回归（Windows）**
> 单日新增 5+ 个独立 Issue（#38547、#38554、#38546、#38510、#38583），全部指向 26.810.4967.0 引入的 CPU 空转/系统卡顿问题。建议团队立即评估回滚或热修复。

**🟠 核心痛点：Windows 平台整体性能**
> 平台问题已持续 3 个多月（#20214 为最老活跃问题），涉及：powershell.exe 轮询、DWM 句柄累积、内核池增长、HID 阻塞主线程等。Windows 用户群体对客户端质量的不满情绪在上升。

**🟡 系统级影响不容忽视**
> 多个 Issue（#28855、#38554 等）明确报告"整机卡顿""全系统输入延迟"——Codex 对系统资源的侵占已超出应用自身边界，这是社区反应最激烈的点。

**🟢 团队响应积极**
> 24 小时内 5 个 alpha 版本 + 20+ 个 PR 合入，内部修复力度大。但外部感知到的版本更新带来的新回归（26.810 系列），表明发布前的质量验证流程需要加强——尤其是 Windows/macOS 双平台的性能回归测试。

---
*本日报由 AI 自动生成，数据截至 2026-08-15 | 仅供技术交流参考*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-15** | 数据来源: github.com/google-gemini/gemini-cli


## 1. 今日速览

今日发布两个 nightly 版本（v0.56.0-nightly.20260814/20260815），核心为 SSR Agent 自动修复批量合入，涉及测试稳定性、typescript 构建修复等。社区方面，**子代理（Subagent）的可靠性问题**持续成为焦点，尤其是 `MAX_TURNS` 后被误报为 GOAL 成功（#22323）和通用代理挂起（#21409）这两个 issue 讨论热度最高，均已进入 maintainer 的 retesting 流程。此外，Auto Memory 相关的多个 issue（#26516/#26522/#26523/#26525）也在持续追踪中，安全与稳定性是当前社区最关注的方向。


## 2. 版本发布

### v0.56.0-nightly.20260815.g2a87e7be1
- [发布链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260815.g2a87e7be1)
- 核心变更：[SSR Agent] Issue Fix (19826): 将 a2a-server 测试中的 `process.env` 迁移至 `vi.stubEnv`（PR #28811），提升测试隔离性与可靠性。
- 完整变更: [v0.56.0-nightly.20260814...v0.56.0](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260814.gc0d192452...v0.56.0-nightly.20260815.g2a87e7be1)

### v0.56.0-nightly.20260814.gc0d192452
- [发布链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260814.gc0d192452)
- 核心变更：
  - test(e2e): 稳定 file-system-interactive 测试在慢速 runner 上的表现（PR #28793）
  - fix(core): 针对容量错误实现上下文感知的静默重试与 availability TTL（#28761）


## 3. 社区热点 Issues（Top 10）

### 3.1 🔥 子代理 MAX_TURNS 后被误报为 GOAL 成功（#22323）
- **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **标签**: P1 / kind/bug / need-retesting
- **现象**: `codebase_investigator` 子代理在达到最大轮次限制时，报告 `status: "success"` 和 `Termination Reason: "GOAL"`，但实际上并未完成任何分析工作。
- **价值**: 这是今天最受关注的 Issue（12 条评论）。该问题会**误导用户和自动化流程**，使其认为任务已成功完成，而实际结果可能不完整甚至为空。今日已有对应修复 PR #28815 提交，进入 retesting 阶段。

### 3.2 通用代理（Generalist agent）挂起（#21409）
- **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **标签**: P1 / kind/bug / need-retesting
- **现象**: 当 CLI 将任务委托给通用代理时，代理会无限期挂起（用户等待长达 1 小时）。通过指示模型不委托可规避。
- **价值**: 8 条评论、8 👍，属 P1 高优问题。**直接导致任务无法完成**，严重影响依赖子代理的自动化场景。

### 3.3 Shell 命令执行卡在 "Waiting input"（#25166）
- **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **标签**: P1 / kind/bug / effort/medium
- **现象**: 简单 CLI 命令执行完成后，Gemini CLI 仍显示命令处于活动状态并等待用户输入，导致挂起。
- **价值**: 3 👍，P1 高优先级。这个问题**影响日常使用**，即使是极简命令也可能触发，容易使用户误以为命令未完成。

### 3.4 Auto Memory 对低信号会话无限重试（#26522）
- **链接**: [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)
- **标签**: P2 / kind/bug / bot-triaged
- **问题**: 当提取代理判断某个会话为低信号而跳过读取时，该会话不会被标记为已处理，导致**反复被重新审视**、浪费 token 和计算资源。
- **价值**: 5 条评论，反映 Auto Memory 在资源利用上的缺陷，是用户可感知的性能/成本问题。

### 3.5 浏览器子代理在 Wayland 下失败（#21983）
- **链接**: [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **标签**: P1 / kind/bug / agent/browser / need-retesting
- **问题**: 浏览器子代理在 Wayland 显示服务器环境下无法正常工作，异常终止。
- **价值**: P1 高优先级 + `agent/browser` 标签，Linux + Wayland 用户会直接受影响。社区 4 条评论，处于 retesting 阶段。

### 3.6 子代理未经许可自动运行（#22093）
- **链接**: [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)
- **标签**: P2 / kind/bug / need-retesting
- **问题**: 自 v0.33.0 起，**子代理会在禁用其运行的配置下仍然被自动调用**（用户仅期望使用 MCP 功能）。
- **价值**: 涉及**权限控制和用户预期管理**。配置被无视属于严重行为异常，需要用户额外防范。

### 3.7 浏览器代理响应中断仍显示 GOAL 成功（#22232）
- **链接**: [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)
- **标签**: P3 / kind/feature / customer-issue
- **问题**: BrowserAgent 采用"快速失败"策略，遇浏览器 Profile 锁定（如持久会话被占用）立即报错，建议增加自动接管或锁恢复机制。
- **价值**: `sessionMode: 'persistent'` 用户经常遇到此问题。属于体验增强类需求，社区 4 条评论。

### 3.8 浏览器代理忽略 settings.json 覆盖（#22267）
- **链接**: [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- **标签**: P2 / kind/bug / need-retesting
- **问题**: 浏览器代理**完全忽略**全局或项目级 `settings.json` 中的配置覆盖（如 `maxTurns`），与 AgentRegistry 的正确合并逻辑不一致。
- **价值**: 配置失效意味着用户无法按需对浏览器代理做调优，是功能性缺陷。

### 3.9 误导性管理错误提示（#24587）
- **链接**: [Issue #24587](https://github.com/google-gemini/gemini-cli/issues/24587)（在此不展开，相关内容详见 PR #28819 修复）
- **标签**: P2 / kind/bug
- **问题**: 个人账户用户选择不可用模型时，收到企业级专属的错误提示，具有误导性。
- **价值**: 已被 SSR Agent 自动修复（PR #28819 已合并）。但错误提示的歧义对用户体验影响直接，值得关注。

### 3.10 个人账户模型选择错误提示（#24246）
- **链接**: [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- **标签**: P2 / kind/bug / need-information
- **问题**: 当工具数量超过 400 个时，Gemini CLI 返回 400 错误，期望引擎能更智能地**限制工具作用域**，而非硬性报错。
- **价值**: 社区 3 条评论。随着 MCP/自定义工具增多，工具数量膨胀是**必然趋势**，限制机制将成为刚需。


## 4. 重要 PR 进展（Top 10）

### 4.1 [SSR Agent] 保留子代理恢复时的原始终止原因（#28815）
- **链接**: [PR #28815](https://github.com/google-gemini/gemini-cli/pull/28815)
- **标签**: P1 / area-agent / maintainer only
- **内容**: 修复 #22323。当子代理在恢复轮次中成功调用 `complete_task` 时，保留原始的 `MAX_TURNS`/`TIMEOUT` 终止原因，而非错误地标记为 GOAL 成功。
- **价值**: 修复今日最受关注的 Issue #22323，**提升子代理状态上报的真实性**。

### 4.2 [SSR Agent] 为 packages/cli 添加 composite 标志（#28813）
- **链接**: [PR #28813](https://github.com/google-gemini/gemini-cli/pull/28813)
- **标签**: P1 / area-platform / size/xs
- **内容**: 修复 #21911。为 `packages/cli` 添加 `"composite": true` 到 tsconfig，解决 `evals/tsconfig.json` 引用导致根构建/类型检查失败的问题。
- **价值**: 修复 CI 与本地构建的 TypeScript 配置问题，**提升工程化效率**。

### 4.3 [SSR Agent] 修复 MessageBus.request 静默挂起（#28816）
- **链接**: [PR #28816](https://github.com/google-gemini/gemini-cli/pull/28816)
- **标签**: size/s，已关闭
- **内容**: 修复 #22588。`MessageBus.request()` 中 `this.publish()` 的 floating promise 未注册失败处理，若 publish 失败则 promise 静默挂起 60 秒。现已添加失败处理。
- **价值**: 消除**隐性挂起问题**，提升系统健壮性与可观测性。

### 4.4 [SSR Agent] 修复 TUI 初始化无限挂起（#28812）
- **链接**: [PR #28812](https://github.com/google-gemini/gemini-cli/pull/28812)
- **标签**: P1 / area-core / help wanted
- **内容**: 修复 #21477。为 `getProcessInfo()` 中的 `execAsync` 添加执行超时，避免裸 Linux 终端下 TUI 卡在 "Initializing..."。
- **价值**: 修复 **P1 挂起类问题**，提升裸终端环境的启动可靠性。

### 4.5 修复 ShellExecutionService PTY 文件描述符泄漏（#20916）
- **链接**: [PR #20916](https://github.com/google-gemini/gemini-cli/pull/20916)
- **标签**: P1 / area-core / help wanted，已关闭
- **内容**: 修复 #15945。PTY master 文件描述符在进程退出/被 kill 后未正确关闭，导致 macOS 上 `kern.tty.ptmx_max`（511）耗尽。
- **价值**: 这是一个**长期存在的关键稳定性修复**。长会话用户会直接受益，避免 PTY 耗尽后所有 shell 命令不可用。

### 4.6 修复 PTY 内存泄漏：同步删除活动条目（#27154）
- **链接**: [PR #27154](https://github.com/google-gemini/gemini-cli/pull/27154)
- **标签**: P2 / area-core，已关闭
- **内容**: 修复 `activePtys.delete()` 被包在 Promise `.then()` 中导致 PTY 条目与 headless terminal 无法被 GC 的问题。
- **价值**: 与 #20916 互补，**修复长期运行会话的内存/文件描述符泄漏**。两个 PR 共同体现了社区对稳定性的高度关注。

### 4.7 允许代理调用代理（#28738）
- **链接**: [PR #28738](https://github.com/google-gemini/gemini-cli/pull/28738)
- **标签**: P2 / area-agent / size/l / help wanted
- **内容**: 修复 #22092。允许子代理通过 `tools:` frontmatter **委托给其他子代理或递归调用自身**。
- **价值**: 实现**代理多级编排能力**，是子代理体系的重要扩展，开启更复杂的自动化场景。

### 4.8 修复 Windows 下 ripgrep EFTYPE 错误（#25378）
- **链接**: [PR #25378](https://github.com/google-gemini/gemini-cli/pull/25378)
- **标签**: P1/P2 / area-core / help wanted
- **内容**: 修复 #22784。Windows 上 `grep_search` 因架构不匹配或二进制损坏导致 `spawn EFTYPE` 错误。
- **价值**: **Windows 用户的关键修复**，`grep_search` 是核心工具，直接影响日常代码检索能力。

### 4.9 支持 WSL2 剪贴板图片粘贴（#27588）
- **链接**: [PR #27588](https://github.com/google-gemini/gemini-cli/pull/27588)
- **标签**: P2 / area-core / size/l / help wanted
- **内容**: 修复 #22274。检测 WSL 环境，通过 PowerShell 互操作读取 Windows 剪贴板并保存为 PNG。
- **价值**: 完善 **WSL2 用户体验**，补齐 Linux 剪贴板工具链在 WSL 下的缺失。

### 4.10 修复设置加载顺序中的竞态条件（#28597）
- **链接**: [PR #28597](https://github.com/google-gemini/gemini-cli/pull/28597)
- **标签**: P2 / area-core / size/l，已关闭
- **内容**: 修复 settings 文件在 `process.env` 完全加载前即被解析展开的竞态问题，影响 `.env` 中变量在 settings 占位符中的使用。
- **价值**: 修复 **配置加载顺序的隐性缺陷**，保证占位符替换的确定性。


## 5. 功能需求趋势

从近期 Issues 中可以提炼出社区关注的几个核心方向：

### 5.1 子代理（Subagent）体系健壮性与自治能力
- **多层委托**（PR #28738）：允许代理调用代理，实现更复杂的任务分解和编排。
- **自我认知**（#21432）：代理应准确了解自身 CLI 参数、快捷键和执行方式，能作为自身使用指南。
- **状态可见性**（#22598）：子代理轨迹应可通过 `/chat share` 分享，便于审查与评估行为。

### 5.2 记忆系统（Auto Memory）的安全与效率
- **确定性重试策略**（#26522：低信号会话不应无限重试）。
- **安全加固**（#26525：内容进入模型上下文前应进行确定性脱敏）。
- **无效补丁处理**（#26523：应隔离或标记无效内存补丁，而非静默跳过）。
- 这些需求共同指向一个方向：**让记忆系统更可预测、更安全、更可审计**。

### 5.3 安全与权限控制的精细化
- **子代理权限尊重**（#22093：配置禁用后不应被自动调用）。
- **危险操作干预**（#22672：模型应避免使用 `git reset`/`--force` 等危险命令，或至少给出警告）。
- **工具数量管理**（#24246：>128 个工具时引擎应智能裁剪工具集，而非直接 400 报错）。

### 5.4 底层平台兼容性与稳定性
- **AST 感知工具**（#22745/#22746）：探索使用 AST 感知的文件读取/搜索/代码库映射。对大型代码库，AST 感知可减少 token 消耗并提高定位精度。
- **Wayland 支持**（#21983）、**Windows 修复**（#25378）、**WSL2 剪贴板**（#27588）：跨平台支持仍是持续投入方向。

### 5.5 终端体验与性能
- **终端 resize 性能**（#21924）：迁移至 RenderStatic，分小批次更新历史，避免 resize 时闪烁。
- **外部编辑器退出后画面刷新**（#24935）：退出编辑器后应强制全屏刷新，避免画面损坏。


## 6. 开发者关注点

### 6.1 高频痛点：子代理状态上报不真实
- 多个 Issue（#22323、#21983）显示**子代理在异常中断时仍报告 GOAL 成功**。这不仅误导用户，在自动化流程中会掩盖真实失败原因。
- 相关修复 PR（#28815）已提交但尚未合入正式版，用户在生产环境仍需注意。

### 6.2 高频痛点：挂起与卡死问题
- **无响应终端的挂起**：通用代理挂起（#21409）、shell 命令完成后仍显示 "Waiting input"（#25166）、TUI 初始化挂起（#21477）、MessageBus.request 静默挂起（#22588）。
- 这是**最直接影响用户体验的问题类型**，且多个来源并存，说明底层存在系统性风险。
- 建议：遇到类似情况可先尝试 `--no_agent_mode` 或指示模型不委托子代理作为临时规避手段（从 #21409 评论区提炼）。

### 6.3 高频痛点：PTY / 文件描述符泄漏
- macOS PTY 耗尽（#15945）、PTY 内存泄漏（#27154）——长期运行会话的稳定性问题。
- 相关修复 PR（#20916、#27154）均已关闭/合入，建议用户升级到包含这些修复的版本。

### 6.4 高频痛点：Auto Memory 的资源浪费与隐私顾虑
- 对低信号会话的无限重试（#26522）、内容在脱敏前即进入模型上下文（#26525）、无效补丁被静默跳过（#26523）。
- 这些问题的共性：**Auto Memory 的决策过程缺乏透明度和可干预性**，用户希望更可控、更节流。

### 6.5 配置管理混乱：覆盖与失效
- 浏览器代理忽略 `settings.json`（#22267）、子代理配置被无视（#22093）、加载顺序竞态（#28597）。
- 配置是用户管理 CLI 行为的主要手段，**配置失效会让用户失去对工具的掌控感**。建议跟进相应修复版本（如 #28597、#28812）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-15**


## 今日速览

昨日发布 v1.0.80 和 v1.0.81-0 两个版本，均聚焦于模型配置更新。社区最强烈的信号是 **MCP OAuth 认证回归**——多个 Issue 确认 1.0.79/1.0.80 破坏了 Atlassian 与 GitLab MCP 服务器的连接（RFC 8414 issuer 校验问题），部分用户已回滚至 1.0.78。与此同时，企业用户对 **Claude 系列模型被禁用**的反馈集中爆发，涉及 CLI 模型选择目录不一致和服务端 feature flag 冲突。仓库的 CI 自动化正在从 `pull_request_target` 迁移，相关 PR 已进入验证阶段。


## 版本发布

**v1.0.81-0**（2026-08-15 发布）
- 更新模型配置

**v1.0.80**（2026-08-14 发布）
- 更新模型配置


## 社区热点 Issues（Top 10）

### 1. Atlassian MCP OAuth 认证失败——1.0.79 起的回归
- **Issue #4480**（CLOSED）｜👍 6｜💬 4
- 从 1.0.79 升级后，连接 Atlassian 远程 MCP 服务器（`mcp.atlassian.com`）在 OAuth 发现阶段失败，报错：`Incompatible authorization server: authorization server advertised an issuer that does not match the URL its metadata was discovered from`。
- 该问题在 1.0.78 中正常工作，已被标记为回归。
- 链接：https://github.com/github/copilot-cli/issues/4480

### 2. Claude 模型在 CLI 中全部不可用
- **Issue #4422**（OPEN）｜👍 3｜💬 3
- 拥有个人 Enterprise 账户的用户无法在 CLI 中使用任何 Claude 模型（Sonnet 5、4.8 等），尽管 GitHub Copilot 设置中显示已启用。回滚 CLI 版本无效，昨日可用、今日即失效。
- 链接：https://github.com/github/copilot-cli/issues/4422

### 3. GitLab MCP OAuth 同样遭遇 RFC 8414 issuer 不匹配
- **Issue #4439**（OPEN）｜👍 2｜💬 3
- 与 #4480 同源的回归，影响 GitLab Self-Managed MCP 服务器的 OAuth 2.0 动态客户端注册流程，提示 issuer 不匹配。
- 链接：https://github.com/github/copilot-cli/issues/4439

### 4. Reasoning effort 与模型不兼容
- **Issue #4345**（OPEN）｜👍 4｜💬 6
- 当 `copilot_cli_opus_medium_effort_default` 和 `copilot_cli_gpt_5_4_mini_for_explore` 两个服务端 feature flag 同时生效时，子代理执行反复报错：`Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'`。
- 链接：https://github.com/github/copilot-cli/issues/4345

### 5. 组织已启用的模型缺失于模型目录
- **Issue #4390**（OPEN）｜👍 4｜💬 6
- 组织显式启用的模型（包括 Claude Sonnet 5/Opus 5 和 Kimi K3）在 Copilot 模型目录中不可见。选择 `claude-sonnet-5` 时提示 "This model is disabled by your..."。
- 链接：https://github.com/github/copilot-cli/issues/4390

### 6. 子任务冻结、停止响应
- **Issue #4306**（OPEN）｜👍 2｜💬 3
- autopilot 模式运行 `/fleet use speckit-automate implement skill` 时，子任务在会话中途无响应，影响长时自动化任务。
- 链接：https://github.com/github/copilot-cli/issues/4306

### 7. 停止操作导致整个会话丢失
- **Issue #4477**（OPEN）｜👍 0｜💬 0
- 用户按停止按钮中止任务后，整个会话（包括原始 prompt 和编辑内容）被删除。问题多次复现。
- 链接：https://github.com/github/copilot-cli/issues/4477

### 8. `copilot -w` 会话中 `/restart` 失败
- **Issue #4493**（OPEN）｜👍 0｜💬 0
- 使用 `copilot -w` 启动的会话执行 `/restart` 后无法恢复，worktree 选项与已有会话 ID 冲突。影响 v1.0.80。
- 链接：https://github.com/github/copilot-cli/issues/4493

### 9. autopilot 下 V8 OOM 崩溃（主机内存提交失败）
- **Issue #4499**（OPEN）｜👍 0｜💬 0
- v1.0.79 在长时 autopilot 会话中出现 `FATAL ERROR: Committing semi space failed`。崩溃时 V8 堆仅占用约 607 MB / 4.3 GB，是宿主机内存提交失败，而非堆上限。
- 链接：https://github.com/github/copilot-cli/issues/4499

### 10. 插件更新因文件锁失败
- **Issue #4488**（OPEN）｜👍 0｜💬 1
- 当其他 Copilot CLI 或 VS Code 会话打开时，插件更新会因文件锁报 "Access is denied"，即使那些会话并未使用该插件。
- 链接：https://github.com/github/copilot-cli/issues/4488


## 重要 PR 进展

> 注：过去 24 小时内仅有 3 个 PR，均与 CI 自动化重构相关，目前没有面向用户的功能性 PR 合并。

### 1. 将 PR 自动化从 `pull_request_target` 迁移
- **PR #4449**（CLOSED）
- 核心变更：删除 `pull_request_target` 权限模型，改为使用 issue-scoped write token 关闭无效 issue；用无权限的 `pull_request` 信号处理可合并 PR 的 prompt 检查；特权逻辑迁移至可信的 workflow-run 上下文。
- 链接：https://github.com/github/copilot-cli/pull/4449

### 2. 处理 fork PR 关联缺失场景
- **PR #4497**（OPEN）
- 更新 invalid-label writer，使其在 GitHub 未填充 fork PR 关联时，通过 workflow-run 元数据搜索并精确匹配唯一一个开放的 PR。
- 链接：https://github.com/github/copilot-cli/pull/4497

### 3. 验证 PR workflow 迁移的 canary
- **PR #4496**（CLOSED）
- 临时文档型 PR，用于验证 fork 来源 PR 的新自动化流程，验证后即关闭。
- 链接：https://github.com/github/copilot-cli/pull/4496


## 功能需求趋势

从最近 Issue 中可提炼出以下几个最受关注的方向：

- **模型支持广度与配置灵活性**：用户要求支持更多模型（如 GPT-5.6 reasoning mode、Kimi K3）、UI 中直接选择 "pro" 推理模式、修复模型目录缓存未刷新问题。
- **MCP 生态稳定与安全加固**：OAuth 认证回归是当前最大痛点，此外对 MCP `tools/list` 分页支持、MCP 服务器名冲突检测的大小写敏感性等也有明确诉求。
- **会话生命周期的健壮性**：停止操作导致会话丢失、`/restart` 与 worktree 冲突、恢复会话时未保留上次选择的 agent——这些都是高频反馈。
- **插件体系治理**：插件间依赖关系的声明与自动安装（inter/intra marketplace）、插件更新的文件锁问题。
- **权限配置的确定性预期**：`allowed_directories` 配置未生效导致频繁弹窗、编辑权限请求超时。

## 开发者关注点

- **MCP OAuth 回归影响面广**：Atlassian 和 GitLab 用户均受影响，且修复版本（1.0.80 引入）尚未解决，社区期待 1.0.81 能真正修复此问题。
- **企业模型策略与 CLI 不一致**：多个企业用户反馈设置中的模型启用状态与 CLI 实际可用模型不一致，且本地缓存不刷新（#4494），需要手动清除缓存才能使用新模型。
- **服务端 feature flag 冲突**可直接导致 CLI 运行异常（#4345），但普通用户无法控制服务端 flag，对问题排查和规避造成困难。
- **桌面应用（WebView2）稳定性**：Windows 桌面应用渲染进程自动终止（0x80000003），窗口空白需手动刷新恢复，影响使用体验。
- **自动化长时任务的稳定性**：autopilot 模式下的 OOM 崩溃与子任务冻结，暴露出长时运行场景的资源管理与任务调度不足。
- **人工智能安全用词争议**：#4498 提出 Copilot 主动使用 "enslaved" 一词命名标识符，社区对模型输出在文化敏感度方面的表现表示担忧。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，这是为你生成的 2026-08-15 Kimi Code CLI 社区动态日报。

---

# Kimi Code CLI 社区动态日报 — 2026-08-15

## 今日速览
今日社区讨论热度集中于 **“记忆系统” (Memory System)** 的优化与实现，多个高赞 Issue 反映了开发者在大型项目中对持久化上下文的迫切需求。此外，跨设备会话延续（Remote Control）的呼声也值得关注。过去24小时内，项目无新版本发布，也无新的 Pull Request 更新。

## 版本发布
过去 24 小时内无新版本发布。

## 社区热点 Issues
以下是根据更新时间和讨论热度挑选的 Issue（由于今日无新 Issue，均为历史更新）。

1.  **[#1283] 特性请求：记忆系统 - 跨会话持久化上下文**
    -   **重要性**：这是当前社区呼声最高的功能，有 39 条评论，表明大量用户受困于代理“忘记”上下文的问题。
    -   **社区反应**：用户围绕自动记忆（AI 管理笔记）和手动记忆（用户定义指令）两种模式的如何落地展开了详细讨论。
    -   [查看 Issue](https://github.com/MoonshotAI/kimi-cli Issue #1283)

2.  **[#2269] 特性请求：远程控制 / 多设备会话交接**
    -   **重要性**：代表了工作流扩展的新方向，用户希望在电脑、Web 或移动端之间无缝切换会话。
    -   **社区反应**：目前有 6 条评论，1 个赞，用户认可其对多环境办公场景的显著提升。
    -   [查看 Issue](https://github.com/MoonshotAI/kimi-cli Issue #2269)

3.  **[#1478] 能否优化记忆层？大项目开发很痛苦**
    -   **重要性**：中文社区用户直接表达了对现有记忆层（仅看到 agent.md）的不满，认为是大型项目的痛点。
    -   **社区反应**：用户引用了类似 `~/.openclaw/workspace/` 的结构作为参考，希望能够像 SOUL.md、MEMORY.md 那样实现分层级、结构化的记忆。
    -   [查看 Issue](https://github.com/MoonshotAI/kimi-cli Issue #1478)

4.  **[#1136] [已关闭] 增强 Shell 工具：为 PowerShell 添加版本感知上下文**
    -   **重要性**：该 PR 被关闭，但其内容揭示了 Windows 平台上的显著缺陷，主要涉及命令生成时的歧义问题，影响了 Agent 在 Windows 初始流程（pass-1）的性能。
    -   **社区反应**：虽已关闭，但该问题细节是用户排查 Windows 端问题的重要参考。
    -   [查看 Issue](https://github.com/MoonshotAI/kimi-cli Issue #1136)

## 重要 PR 进展
过去 24 小时内无 PR 更新。但值得关注的是，上述热点 Issue #1136 曾是一份关于修复 Windows PowerShell 上下文问题的 PR，因缺少评论区互动被自动关闭。这提示开发者对 Windows 环境的支持仍有改进空间。

## 功能需求趋势
从今日活跃的 Issues 中，可以提炼出社区最关注的功能方向：
-   **持久化记忆机制**：这是目前最核心的需求。社区希望引入一个正式的记忆系统，能够跨 session 保存项目模式、用户偏好和关键数据，而不仅是依赖单一文档。
-   **跨设备会话同步**：用户希望能够将命令行会话“悬浮”或迁移至其他设备，以满足多终端协同工作的需求。
-   **Windows 环境适配性**：围绕 Shell 工具的讨论再次凸显了 Windows PowerShell 环境下稳定性和兼容性的重要性。

## 开发者关注点
-   **大型项目中的上下文丢失**：开发者普遍反馈，在复杂项目中，Kimi Code CLI 容易丢失长期上下文，导致重复解释问题，用户体验不佳。
-   **记忆机制的透明度**：开发者希望记忆文件具有可读性、结构清晰（如分层目录），并便于手动干预或“遗忘”特定内容。
-   **跨平台工作流的无缝切换**：开发者期待会话状态不因设备更换而中断，能够即取即用。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-15

## 今日速览

昨日，OpenCode 遭遇了社区成立以来最严重的稳定性事件：48 位 ID 时间戳回绕导致所有历史会话停摆，并在数小时内引发大量连锁 Issue。与此同时，核心贡献者 kitlangton 提交了多个针对会话调度、中断恢复的修复 PR，社区修复速度值得关注。此外，开源免费模型（DeepSeek V4 Flash Free）的配额问题成为用户投诉重灾区。

---

## 社区热点 Issues

### 1. 48 位 ID 时间戳回绕导致所有历史会话停摆（紧急）
**#42608** — 2026-08-14 12:39:55 UTC 起，所有此前创建的会话静默停止处理 prompt，根因定位在 `packages/opencode/src/id/id.ts` 的 48 位时间戳回绕。这解释了 #42605 以及大量“会话无响应”报告。**社区影响：全局性、高优先级。**

### 2. 会话保持打开但 Agent 不再处理新消息（疑似同根源）
**#42605** — 桌面版在 Agent 完成任务并向用户提问后，新消息发送无响应。虽以独立 Issue 上报，但与 #42608 大概率同源。

### 3. DeepSeek V4 Flash Free 免费额度超限错误（重复上报）
**#42013 / #42385 / #42215** — 三个独立 Issue 报告同一问题：OpenCode Zen 的 `deepseek-v4-flash-free` 模型持续返回 `FreeUsageLimitError`，即使用户已等待超过 24 小时、配额本应重置。其中 #42013 称“凌晨 3 点还在使用，次日就无法访问”。社区反应：多次重复提交，说明该问题对免费用户影响面极大且修复进度缓慢。

### 4. GitHub Copilot Provider 模型列表为空
**#42083** — v1.18.15（Arch 包）中 `github-copilot` provider 认证成功但模型列表为空，`opencode models` 直接报“Provider not found”。该问题影响所有依赖 Copilot 订阅的用户，期待尽快修复。

### 5. 桌面版 v1.18.1 新布局隐藏 Agent 切换 UI
**#36997** — 新布局（`newLayoutDesigns: true`）下 Plan/Build 模式切换指示器被隐藏，用户无法识别或切换当前 Agent，Tab 键也无响应。UI 回归问题，影响日常操作效率。

### 6. gpt-5.6-luna 经 OpenCode Go 中继返回 403 地区限制
**#41518** — 通过 OpenCode Go 访问 `gpt-5.6-luna` 时上游返回 HTTP 403 “region not available”。中国区用户受影响明显，需确认中继节点策略。

### 7. 运行循环无法退出当消息 ID 不可按时间排序
**#38791** — `SessionPrompt.runLoop` 以纯字符串比较消息 ID 判断回合结束，依赖 ID 嵌入时间戳这一实现细节。第三方导入的会话可能使循环永远无法退出，直到 Provider 返回 400。

### 8. 本地 LLM 上下文缓存失效导致性能断崖
**#37489** — 使用 vLLM/Ollama 等本地推理引擎时，切换模式或执行压缩操作会导致上下文缓存失效，显著增加延迟。已获 5 条评论，用户对本地模型工作流优化呼声高。

### 9. Bash 工具子进程 stdout 大量小写入时被 SIGKILL
**#42626** — WSL (Ubuntu 24.04) 下运行 `pytest tests/` 时，Bash 子进程因 stdout 流式写入过多而被 SIGKILL。内存 19GB 仍触发，疑似管道缓冲或资源限制问题。

### 10. 48 位时间戳回绕：唯一非重复性会话 No-op 问题（已关闭）
**#42677** — `opencode run --auto` 对 ollama provider 偶发保存空 assistant 消息（计 118 token、零 parts）并退出码 0，与 #42608 时间戳回绕时间点吻合。

---

## 重要 PR 进展

### 1. [修复] 中断后保持排队工作暂停（核心会话调度）
**#42682** — `session.interrupt?continue=true` 现在仅恢复被中断意图的转向输入，显式排队的下一轮工作保持暂停，避免中断后意外跳转。

### 2. [修复] 统一 session 模型请求构建（核心重构）
**#42680** — 将持久化 Session 步骤与瞬态 `session.generate` 收敛到同一 `prepare` 出口，统一上下文钩子工具协调、媒体处理、图片边界等逻辑，减少双路径差异。

### 3. [修复] TUI 透明标签背景保留
**#42646** — 修复水平标签栏在透明终端背景下出现不透明条纹的问题，不再用固定 14%/28% alpha 替代透明。

### 4. [修复] 统一 patch 工具路径解析（核心）
**#42667** — patch 工具路径与权限资源统一到 `LocationMutation` 服务，修正嵌套 Location 下项目相对路径的边界问题。

### 5. [修复] 忽略新会话控件上的误触 release 事件
**#42673** — 修复文本选择拖拽到标签栏释放时误创建新会话的交互问题。

### 6. [功能] 持久化 Web 搜索 Provider 选择
**#42663** — Web 搜索提供方选择从 KV 状态迁移至文件持久化，并支持固定优先级。配套文档更新。

### 7. [修复] MCP 服务器配置缺少 `type` 字段时明确报错
**#42662** — 针对 Claude Code 迁移配置缺少 `type`/`enabled` 字段时，从静默失败改为清晰报错。关闭 #41229。

### 8. [重构] 协议层加固：模拟（Simulation）契约
**#42628** — 公开的 `@opencode-ai/protocol/simulation` 模块在移除副本前补齐类型导出、规范化 JSON-RPC 响应联合类型，保持协议 v1 兼容。

### 9. [修复] 桌面端 Wayland 窗口显示兜底
**#42681** — Linux 下增加 `did-finish-load` 兜底显示窗口，通过 `revealed` 标志确保单次触发，解决 Wayland 下窗口不出现的问题。

### 10. [重构] Worktree 路由移出 experimental 命名空间
**#42656** — Worktree API 从 `/api/experimental/project/:projectID/worktree` 提升至 `/api/worktree/:projectID`，接口正式化。

---

## 功能需求趋势

- **本地模型生态**：既需要 auto-discover `/v1/models`（#27553），也需解决上下文缓存失效的性能墙（#37489），本地推理工作流是高频诉求。
- **Permission 运行时动态控制**：`/approve on|off` 按会话切换审批模式（#41909），社区希望摆脱启动时固定配置。
- **OpenAI 兼容 Provider 的自动模型发现**：#27553 PR（#27554）已在 3 个月前提交，近期更新获得关注，该功能将大幅简化多 provider 配置。
- **WSL 与桌面侧车健壮性**：mirrored networking 下 ServeError（#37718）与旧版“git 目录无法发送消息”（#19193，已关闭）说明桌面 + WSL 组合仍是稳定性短板。
- **新模型支持**：Ollama Cloud Auth 登录（#4581）、Nara Router provider（#42664）等，显示用户期望更广泛的模型接入渠道。

---

## 开发者关注点

- **免费模型配额机制不透明**：多位用户报告 DeepSeek V4 Flash Free 超过 24 小时未重置、间歇性成功，对额度计算与重置规则期望官方明确说明。
- **会话恢复可靠性**：时间戳回绕、导入会话无法退出、无响应等问题集中爆发，开发者对会话 ID 生成、排序、恢复机制的健壮性提出更高要求。
- **多子 Agent 场景的 TUI 卡顿**：2-4 个并发子 Agent 即导致渲染线程 97% CPU、输入延迟 1-3s，多 Agent 工作流的 TUI 性能需要优化。
- **Provider 接入体验**：Copilot 空模型列表、OpenCode Go 地区限制、MCP 配置静默失败等，反映 provider 层仍缺少清晰错误提示与自动发现能力。
- **付费/余额同步延迟**：“付费后余额为 0”（#42606）、“购买了信用额度但无法使用”（#42637），支付成功到余额更新存在明显延迟，影响付费转化信任。

---

*本日报由 AI 技术分析师基于 GitHub 公开数据自动生成，数据截至 2026-08-15 12:00 UTC。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-15

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 1. 今日速览

昨日社区热度集中在 **Windows 生态支持** 与 **Copilot 登录稳定性** 两大方向：关于 Windows 使用体验的讨论帖（#7547）已成为社区最热议题（27 条评论），多个 Copilot 登录 429 限流问题（#7850、#8010）被关闭并标记为 no-action 但影响面较大。版本方面，v0.84.2 发布，带来 **全屏转录搜索** 与 **可配置默认工具** 两项新功能。基础设施层面，供应商适配（xAI、SiliconFlow、Anthropic Vertex）与新模型兼容性修复（DeepSeek V4 Flash、glm-5.1 下架）依然是社区的主要贡献方向。

---

## 2. 版本发布

**v0.84.2** — 新增功能：

- **全屏转录搜索** — 在 TUI 全屏视口（Fullscreen Viewport）模式下支持搜索与跳转匹配项。[Keybindings 参考](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport)
- **可配置默认工具** — 允许用户自定义启动时加载的默认工具集合。
- **修复**：Anthropic OAuth 刷新在 signal 为 undefined 时的崩溃问题（#8131）；TUI 复制选中文本时 OSC 52 在 VTE 终端（GNOME Terminal）下无效的问题（#7761，PR #8110）。

---

## 3. 社区热点 Issues

以下为过去 24 小时更新最频繁、社区反响最大的 10 个 Issue：

### #7547 【Open】Windows 上如何使用 Pi？你遇到了哪些问题？
- 作者: petrroll | 评论: 27 | 👍: 1 | 更新: 2026-08-14
- 摘要：发起 Windows 生态梳理讨论，目标是明确核心支持路径与可委托给扩展的场景。目前讨论热度最高。
- 链接：[Issue #7547](https://github.com/earendil-works/pi/issues/7547)

### #6187 【Closed】WSL 中 Pi 在 GitHub Copilot 设备授权后登录挂起
- 作者: makoit | 评论: 26 | 更新: 2026-08-14
- 摘要：WSL 环境下浏览器授权完成但客户端未检测到授权，登录挂起。此问题已关闭，但评论量很高，说明 WSL 用户基数不小。
- 链接：[Issue #6187](https://github.com/earendil-works/pi/issues/6187)

### #5223 【Closed】Anthropic 供应商修改最近的 assistant 消息中的 thinking 块，导致 Opus 4.8 自适应思考模式报 400 错误
- 作者: humblemuzzu | 评论: 17 | 👍: 6 | 更新: 2026-08-14
- 摘要：多轮对话使用 Claude Opus 4.8（高推理）时，因 `thinking` 块被修改导致请求失败。曾获 6 个 👍，反映高端模型用户对 thinking 块处理的敏感度。
- 链接：[Issue #5223](https://github.com/earendil-works/pi/issues/5223)

### #6665 【Open】TUI 在流式输出时占用 100% 单核 CPU：未缓存的 Intl.Segmenter 与逐块 Markdown 重建
- 作者: axelbaumlisto | 评论: 12 | 👍: 3 | 更新: 2026-08-14
- 摘要：定位到根因：grapheme 分词未缓存 + 每块 re-render。已标记 inprogress，是当前性能方向的核心问题之一。
- 链接：[Issue #6665](https://github.com/earendil-works/pi/issues/6665)

### #7850 【Closed】Copilot 登录对模型数量较多的组织返回 429（限流）
- 作者: tuunit | 评论: 9 | 👍: 7 | 更新: 2026-08-14
- 摘要：拥有 20+ 可用模型的组织在 Copilot 登录时遇到 429 限流。获 7 个 👍，是 Copilot 场景下反馈最集中的问题之一。
- 链接：[Issue #7850](https://github.com/earendil-works/pi/issues/7850)

### #5023 【Closed】终​​端无故跳转到会话开头
- 作者: markokocic | 评论: 12 | 👍: 2 | 更新: 2026-08-14
- 摘要：模型工作时终端随机跳转至开头并快速滚动至末尾，影响阅读体验。虽已关闭但评论较多，关注度依旧。
- 链接：[Issue #5023](https://github.com/earendil-works/pi/issues/5023)

### #8096 【Closed】Z.AI Coding Plan 默认配置引用了已下架的模型
- 作者: TennyZhuang | 评论: 5 | 👍: 1 | 更新: 2026-08-14
- 摘要：`defaultModelPerProvider` 仍为 zai 选择 `glm-5.1`，但 models.dev 已移除该模型，现目录仅含 glm-4.7/glm-5-turbo/glm-5.2。反映模型目录与供应商实际可用模型同步问题。
- 链接：[Issue #8096](https://github.com/earendil-works/pi/issues/8096)

### #7787 【Open】Bash PI_* 环境指南在无关任务中触发多余权限提示
- 作者: white-hat | 评论: 3 | 更新: 2026-08-14
- 摘要：默认 `exposeSessionEnvironment: true` 带来的全局指南让模型在普通任务中主动运行 `env`，造成噪音与权限提示。已收到 PR #8148 修复。
- 链接：[Issue #7787](https://github.com/earendil-works/pi/issues/7787)

### #5581 【Open】pi.sendMessage() 发送的自定义消息绕过了 before_agent_start 事件
- 作者: dljsjr | 评论: 3 | 👍: 1 | 更新: 2026-08-14
- 摘要：`triggerTurn: true` 直接调用 `_runAgentPrompt` 跳过 `emitBeforeAgentStart`，在特定场景下（如 web UI 与 agent 会话交错）会导致事件顺序异常。
- 链接：[Issue #5581](https://github.com/earendil-works/pi/issues/5581)

### #7761 【Closed】TUI 复制显示 “Copied!” 但 GNOME Terminal 剪贴板为空
- 作者: x1325991526 | 评论: 3 | 更新: 2026-08-14
- 摘要：OSC 52 在 VTE 终端下未实际写入系统剪贴板。已由 PR #8110 修复。
- 链接：[Issue #7761](https://github.com/earendil-works/pi/issues/7761)

---

## 4. 重要 PR 进展

以下为过去 24 小时内更新或创建的重要 Pull Request：

### #8149 【Closed】fix(ai): 忽略无效的 OpenAI 会话头
- 作者: rolandgvc | 更新: 2026-08-15
- 摘要：`session_id` 头带下划线，HTTP/1 代理（Envoy）会拒绝（`unexpected_underscore`）。此修复消除了不必要的 `session_id` 头发送，解决生产环境 400 错误。
- 链接：[PR #8149](https://github.com/earendil-works/pi/pull/8149)

### #8148 【Closed】fix(coding-agent): 将 bash PI_* 指南限定在会话提问场景
- 作者: white-hat | 更新: 2026-08-14
- 摘要：解决 #7787。只有当模型主动询问会话/模型信息时才提示环境变量，避免无关任务中触发 `env` 调用。
- 链接：[PR #8148](https://github.com/earendil-works/pi/pull/8148)

### #8146 【Closed】fix(ai): 将 Baseten DeepSeek V4 Flash 输出上限设为 384k tokens
- 作者: white-hat | 更新: 2026-08-14
- 摘要：models.dev 误报 1M 输出上限，Baseten 实际仅支持 384k。已实现对模型目录的 cap 修正。
- 链接：[PR #8146](https://github.com/earendil-works/pi/pull/8146)

### #8139 【Closed】feat(ai): 添加 ChatGPT OAuth 图像生成能力
- 作者: SaiAmartya | 更新: 2026-08-14
- 摘要：复用 OpenAI Codex OAuth 与 Responses 基础设施，为 `@earendil-works/pi-ai` 新增原生 ChatGPT 图像生成/编辑传输，无需 OpenAI API key。
- 链接：[PR #8139](https://github.com/earendil-works/pi/pull/8139)

### #8124 【Open】feat(ai): xAI 模型路由至 Responses API，默认 Grok 4.6
- 作者: Jaaneek | 更新: 2026-08-14
- 摘要：xAI 默认从 Completions 切换至 Responses API，并将默认模型从 Grok 4.5 升级至 Grok 4.6，同时补充 UA 标识。
- 链接：[PR #8124](https://github.com/earendil-works/pi/pull/8124)

### #8120 【Open】feat(coding-agent): 实验性追加式压缩（append compaction）
- 作者: vegarsti | 更新: 2026-08-14
- 摘要：`PI_EXPERIMENTAL=1` 下启用追加模式，复用 active system prompt、工具与 routing session，以便复用 provider 提示缓存。默认仍为独立式压缩。
- 链接：[PR #8120](https://github.com/earendil-works/pi/pull/8120)

### #8110 【Closed】fix(tui): 选中文本复制改走宿主剪贴板，“Copied!” 不再欺骗用户
- 作者: Panoplos | 更新: 2026-08-14
- 摘要：替代裸 OSC 52 写入，改通过宿主剪贴板（Windows/macOS/Linux）复制，且仅在真正成功时提示。修复 #7761。
- 链接：[PR #8110](https://github.com/earendil-works/pi/pull/8110)

### #8113 【Closed】feat(ai): 新增 SiliconFlow 供应商
- 作者: noahchen2002 | 更新: 2026-08-14
- 摘要：以 OpenAI-compatible 方式接入 `https://api.siliconflow.com/v1`，API key 读取 `SILICONFLOW_API_KEY`，遵循 moonshot/minimax 模式。
- 链接：[PR #8113](https://github.com/earendil-works/pi/pull/8113)

### #8119 【Open】fix: 跟踪 Kimi 缓存 tokens
- 作者: cristinaponcela | 更新: 2026-08-14
- 摘要：将 Kimi 响应中的顶层 `usage.cached_tokens` 计入 cache-read 输入。解决 #8075。
- 链接：[PR #8119](https://github.com/earendil-works/pi/pull/8119)

### #8112 【Open】fix(coding-agent): 扩展条目在 jiti 导入前先 realpath（关闭 #8092）
- 作者: cad0p | 更新: 2026-08-14
- 摘要：解决 pnpm 隔离 node_modules 布局下 jiti 无法解析扩展依赖的问题（`.pnpm/<pkg>@<ver>/node_modules/<pkg>` 符号链接场景）。
- 链接：[PR #8112](https://github.com/earendil-works/pi/pull/8112)

---

## 5. 功能需求趋势

从近期 Issue 与 PR 中可提炼出以下热门方向：

| 方向 | 代表性 Issue / PR | 说明 |
|------|------------------|------|
| **TUI 体验与性能** | #6665、#8143、#8110 | 全屏视图优化、CPU 占用、剪贴板行为 |
| **新供应商/模型适配** | #8113（SiliconFlow）、#8124（xAI）、#5262（Vertex）、#6216（Bedrock） | 社区持续扩展云服务商接入 |
| **模型兼容与 catalog 同步** | #8096（glm-5.1 下架）、#8146（DeepSeek 384k）、#8135（thinkingLevelMap） | models.dev 与供应商实际能力之间存在偏差 |
| **Copilot 登录与稳定性** | #7850、#8010、#6187 | 429 限流、WSL 授权挂起 | 
| **上下文压缩优化** | #8120（append compaction） | 探索复用 provider 缓存以降低压缩成本 |
| **扩展体系完善** | #8092、#8112、#8137 | jiti 解析、compat 导出、扩展开发体验 |

---

## 6. 开发者关注点

- **Windows / WSL 支持仍是最大痛点**：#7547、#6187、#8047 三条线索共同说明 Windows 生态（原生、WSL、Unix socket 测试）是当前使用门槛最高的环境。社区呼吁明确核心支持路径、将非核心场景交给扩展。
- **Copilot 登录 429 集中爆发**：#7850（模型多组织）与 #8010（企业新模型激活）均触发限流，对拥有大量模型的 Enterprise 用户影响尤为明显，且已标记 no-action，短期内难以根治。
- **TUI 性能与交互细节被高频提及**：流式输出占满 CPU（#6665）、滚动跳转（#5023）、剪贴板失效（#7761）说明终端体验直接影响用户留存。
- **模型目录与供应商实际的偏差持续产生问题**：glm-5.1 下架、DeepSeek 输出上限、Kimi 缓存统计不准，反映出模型元数据维护需要一个更自动化的同步机制。
- **扩展开发者对 API 完整性有强烈诉求**：#8100（原子化会话级模型状态）、#8137（导出 `resolveCloudflareModel`）、#8118（`requiresNonNullAssistantContent` flag）表明扩展生态正在逐步成熟，但核心 API 的边界仍需细化。

---

> 以上为 2026-08-15 日报内容。所有条目均附对应 GitHub 链接，可点击跳转。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-15** | **数据来源：** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)


## 1. 今日速览

昨日社区共发布 3 个版本（含 1 个正式版 v0.21.12、1 个 preview 版及 1 个 nightly 版），核心变化集中在 Web Shell 文件上传与 Session 管理、Autofix 审阅机制增强。值得关注的是，长期困扰用户的 Session 恢复超时问题（#8678）已关闭，同时 Web Shell 桌面端（Electron 方案）及 HTML 导出架构重构（#9186）等新方向引发讨论。基础设施层面，CI 在多个提交上出现 E2E 测试失败（#9143、#9159 等），且在 PR #9040 上出现了**第七轮** Review，社区对自动化审阅的收敛机制关注度持续上升。


## 2. 版本发布

### v0.21.12（正式版）
- **新功能：** 支持通过拖拽或 `@` 文件面板将工作区文件上传至 Web Shell 编辑器，并带进度跟踪（[#8874](https://github.com/QwenLM/qwen-code/pull/8874)）。
- **改进：** Autofix 审阅中引入 diff 增长制动机制，限制无界扩张。

### v0.21.12-preview.4 / preview.3
- **修复：** 保留独立 Session 目标（[#9038](https://github.com/QwenLM/qwen-code/pull/9038)）。
- **新功能：** 支持工作区文件上传（preview.4 中进一步强化）。

### v0.21.11-nightly.20260815
- **修复：** Web Shell 相关问题。
- **新功能：** Autofix 的 deny-by-default 足迹门控（[#9156](https://github.com/QwenLM/qwen-code/pull/9156)）。

### E2E 验证版本
`dsw-eas-tb-e2e-20260814-r6` 完成全链路验证（Release → SWE-bench Verified 500 → Terminal-Bench 2.0 89）。


## 3. 社区热点 Issues（10 个）

### 3.1 高优先级 Bug 与修复

**#8678 [P1/已关闭] Session 恢复超时问题**
- **现象：** 大 Session 恢复超时导致当前会话丢失，历时一周讨论。
- **社区反应：** 9 条评论，最终被标记为“部分解决并被取代”，但未完全满足所有验收标准。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8678)

**#8582 [P1/已关闭] 只读 Shell 分类器可被命令替换绕过**
- **现象：** 通过行延续符或 `${var@P}` 可隐藏命令替换，绕过只读检查执行任意代码，属安全漏洞。
- **社区反应：** 5 条评论，已关闭，说明已在 Nightly 中修复。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8582)

**#9026 [P2] 无头模式静默结束导致运行中止**
- **现象：** 模型在工具结果后静默结束回合（无输出），触发 `NO_TOOL_RESULT_PROGRESS` 错误的误报。
- **社区反应：** 4 条评论，已有对应 PR #9196 尝试修复。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/9026)

### 3.2 性能与资源

**#8051 [P2] 多工作区守护进程资源占用无界**
- **现象：** 仅限制数量、不限制字节数，请求体、WebSocket 组装、输出缓存均无字节上限。
- **社区反应：** 9 条评论，持续讨论中，尚无明确解决方案。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8051)

**#2128 [P1] 长会话内存无界增长**
- **现象：** UI History 数组无上限，数十小时会话后内存持续增长。
- **社区反应：** 4 条评论，开放 5 个月仍未解决，属于老问题。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/2128)

**#6806 [P2] `/compress` 后状态栏百分比不刷新**
- **现象：** Context 使用率显示在压缩后不更新，需下一次模型请求才刷新。
- **社区反应：** 5 条评论，标注 `welcome-pr`，欢迎社区提交修复。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/6806)

### 3.3 架构与 SDK

**#4063 [P0] Core+CLI 架构审查——14 项结构性问题**
- **现象：** 核心类型系统被 `@google/genai` 绑架，136 个文件直接 import 该包。
- **社区反应：** 8 条评论，1 👍，属于架构级问题，影响深远。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/4063)

**#9146 [P2] utils/ 目录依赖倒置，制造循环引用**
- **现象：** 51 个文件向上依赖 domain 目录，使目录图产生环。
- **社区反应：** 4 条评论，新开 Issue，提出重构方向。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/9146)

**#9002 [P3] Python SDK 拒绝 `permission_mode="auto"`**
- **现象：** CLI 支持但 SDK 客户端校验提前拒绝。
- **社区反应：** 6 条评论，集成一致性问题。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/9002)

**#8871 [P2] ACP 子进程失败——`Unknown argument: acp`**
- **现象：** `qwen serve` 模式下 ACP 子进程无法解析 `--acp` 参数，导致 Token 认证失败。
- **社区反应：** 5 条评论，影响 serve 模式的 ACP 集成。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8871)


## 4. 重要 PR 进展（10 个）

### 4.1 自动化审阅与 Autofix 体系（wenshao）

**#9092 / #9091 / #9153 / #9100 / #9183 / #9096 / #9118 / #8960（8 个 PR 系列）**
- **核心内容：** 系统性增强 `/review` 审阅机制——
  - `--resume` 支持从磁盘状态恢复中断的审阅（#9092、#9153）；
  - 运行 Session 账本与跨 Session Agent 证据（#9091）；
  - 增量审阅锚点验证与范围限定（#9100）；
  - 反向审计轮次上限随 diff 拓扑动态调整（#9183）；
  - 将散文式 gh 命令替换为平台支持的子命令（#9096）；
  - 轮次感知收敛机制，提高重复审阅的发布门槛（#9118）；
  - 升级停滞的接管 PR 并老化未答复的暂停（#8960）。
- **注意：** 上述 PR 均有多轮 review，社区对自动化收敛有较高期待。
- [查看 PR #9092](https://github.com/QwenLM/qwen-code/pull/9092) | [#9091](https://github.com/QwenLM/qwen-code/pull/9091) | [#9153](https://github.com/QwenLM/qwen-code/pull/9153) | [#9100](https://github.com/QwenLM/qwen-code/pull/9100) | [#9183](https://github.com/QwenLM/qwen-code/pull/9183) | [#9096](https://github.com/QwenLM/qwen-code/pull/9096) | [#9118](https://github.com/QwenLM/qwen-code/pull/9118) | [#8960](https://github.com/QwenLM/qwen-code/pull/8960)

**#9163 [New] 审阅账本与证据读取安全加固**
- **内容：** 所有账本/证据读取统一走 `O_NOFOLLOW` + `fstat` 单一原语，确保“验证的对象即读取的对象”，修复 #9091 审查中发现的 R2-2 问题。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/9163)

**#9130 [New] 沙箱验证的确定性 Flakiness Gate**
- **内容：** 在 `qwen-triage.yml` 的 verify job 中，对 PR 新增/修改的单元测试重复运行 N 次（默认 5），强制要求全部通过才视为成功。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/9130)

### 4.2 核心功能与架构

**#8707 [New] Qwen WebBridge——浏览器直接控制**
- **内容：** 从 `qwen serve` 直接控制 Qwen Chrome 扩展，实现 Kimi WebBridge 兼容的 `/command` 与 `/status` 端点、17 种操作、任务级资源追踪。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8707)

**#9196 [New] 接受重试耗尽后的静默工具后补全**
- **内容：** 修复 #9026——模型在工具结果后合法地静默结束回合（有效 finish_reason、无文本、无工具调用）时，不应触发 `NO_TOOL_RESULT_PROGRESS` 误报并烧掉四次重试预算。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/9196)

**#8938 / #8529 / #9136 / #9121 / #9167 / #9122**

- **#8938 [New]**：拒绝上游 fail-fast 占位符响应（HTTP 200 + 正常 finish_reason，但 body 仅占位文本）。
- **#8529 [New]**：从 API 元数据解析模型模态（models.dev 集成），避免冷启动等待远程刷新。
- **#9136 [New]**：限制工作流 `meta` 表达式评估的 VM 超时，防止死循环卡死进程。
- **#9121 [New]**：修复主 Agent 追踪的边界情况。
- **#9167 [New]**：钉钉渠道支持出站文件投递。
- **#9122 [New]**：Web Shell 侧边栏 Session 管理改进（hover 预览、长标题滚动、运行状态区分）。

- [查看 PR #8938](https://github.com/QwenLM/qwen-code/pull/8938) | [#8529](https://github.com/QwenLM/qwen-code/pull/8529) | [#9136](https://github.com/QwenLM/qwen-code/pull/9136) | [#9121](https://github.com/QwenLM/qwen-code/pull/9121) | [#9167](https://github.com/QwenLM/qwen-code/pull/9167) | [#9122](https://github.com/QwenLM/qwen-code/pull/9122)


## 5. 功能需求趋势

| 方向 | 代表 Issue/PR | 说明 |
|------|------|------|
| **自动化 Review 收敛机制** | #9176、#9118、#9183 | 要求审阅轮次有上限、可收敛、deferral 有确定性来源，而非模型自由文本。 |
| **JSON 导出/HTML 导出重构** | #9186 | 用 `WebShellTranscript` 统一渲染路径，替代冗余的 ChatViewer。 |
| **桌面端（Electron）支持** | #9168 | 社区提议在 Tauri 之外并行评估 Electron 宿主。 |
| **Session 恢复/持久化** | #8678（已关）、#9092 | 大 Session 的恢复、resume、断点续跑。 |
| **浏览器/Web 桥接** | #8707 | 从 serve 直接控制浏览器。 |
| **CI/测试稳定性（Flakiness Gate）** | #9130、#9143、#9159、#9160 | 自动化测试确定性、重复运行验证。 |
| **Web Shell UX 增强** | #9122、#9037、#8845 | 会话管理、文件上传、高度受限终端 UI 适配。 |
| **安全加固** | #9089、#9163 | PAT 隔离、账本文件读取的符号链接防护。 |


## 6. 开发者关注点

**高频痛点：**

1. **Session 恢复与内存管理是“老大难”**：P1 的 #2128（内存无界增长）开放近 6 个月未解决，加上 #8051（守护进程资源无界），构成“长时间使用 → 内存膨胀 → 必须重启”的负面循环。虽然 #8678 已关闭，但被标注为“部分解决”而非“完全修复”，底层 session 管理问题仍在持续发酵。

2. **自动化流程可靠性受到关注**：多轮 review（#9040 已到第七轮）消耗维护者精力，社区开始关注收敛机制的设计。同时多个 PR 处于 `[autofix/takeover]` 状态，说明 autofix 流程接管了 PR 迭代，但需要人类 reviewer 确认。

3. **CI 不稳定成为阻塞因素**：#9143、#9159、#9160（E2E 测试失败）集中在 serve 日志恢复测试上，且 #9137 显示 preview.2 的 **publish 步骤失败**，直接影响发布。

4. **架构耦合问题持续浮现**：#4063（136 个文件直连 `@google/genai`）与 #9146（utils 依赖倒置）同时指向核心包需要解耦，这在长期维护中会持续增加新功能开发成本。

---

> **日报总结：** 社区当前主旋律是“自动化”（审阅、检查、修复），但有过度依赖趋势（如 autofix 接管、多轮 review）导致新的效率与安全挑战。建议关注 `--resume` 系列 PR 的合并状态，以及 #2128 内存问题的后续进展。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-15 | 数据来源：github.com/Hmbown/DeepSeek-TUI（CodeWhale）**


## 今日速览

CodeWhale（原 DeepSeek-TUI）今日发布 v0.9.8，正式启用 **Codewhale** 品牌并弃用旧 npm 包名，同时引入本地 DS4 路由和 Auto-Review 双层模型守护机制。但 main 分支在 macOS/Windows 上因测试断言未同步新版本数据而持续飘红，社区已提交多个修复 PR 紧急止血。此外，并发写入导致 session 索引静默丢失数据的问题被定位并修复，属本轮质量关键补丁。


## 版本发布

### v0.9.8（过去 24 小时内发布）

**关键信息**：Codewhale 为 Shannon Labs 的公开产品，`codewhale` 命令、npm 包及发布资产统一使用小写技术标识。旧 npm 包 `deepseek-tui` 已弃用，不再接收后续发布；从 v0.8.x 遗留的 `deepseek`/`d` 命令迁移的用户需注意。

**主要变更**：
- 正式启用 **Codewhale** 品牌命名（命令、npm 包、发布资产）
- 新增第一方本地 DS4（DwarfStar）路由 —— 通过 OpenAI 兼容传输实现，无需额外协议适配器
- Auto-Review 升级为双层模式：确定性检查层不可绕过，兜底层在阻塞前升级为一次性模型守护（model guardian），采用 Codex `auto_review` reviewer 语义、Kimi 模式词汇及 Codewhale fail-closed 默认
- 遗留 npm 包 `deepseek-tui` 弃用，不再接收更新


## 社区热点 Issues（精选 10 条）

### 1. #5383 — v0.9.8 main 分支 CI 全红：provider-count 断言未同步
> 作者: Lstarsky0 | 评论: 1 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5383)

**要点**：`crates/cli/src/lib.rs` 中两处 provider-count 断言仍持有 v0.9.8 发布前的数字（期望 43/38，实际 45/40），导致 `main` 分支在 CI 上全红。与 #5377 同类问题——发布流程中测试断言与正式版数据未同步更新。

**社区反应**：维护者 Lstarsky0 已提交 PR #5384 修复，属流程性问题而非功能缺陷，但暴露了发布门禁的测试同步盲区。

---

### 2. #5377 — main 在 macOS/Windows 全红：九个 reasoning-effort 测试仍断言旧词汇
> 作者: Lstarsky0 | 评论: 1 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5377)

**要点**：九个 reasoning-effort 测试仍断言 pre-ladder 词汇表，与 `6f6c35183` 引入的 off/high/max 新快捷方式不匹配。经二分定位至单一提交，每次运行必现，非 flake。

**社区反应**：PR #5378 已做纯测试修复，零生产代码改动。与 #5383 同属"测试断言落后于实现"的共性问题。

---

### 3. #5324 — agent 工具 32 字段 schema 过于复杂，模型频繁报错
> 作者: Hmbown | 创建: 2026-08-12 | 更新: 2026-08-14 | 评论: 8 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5324)

**要点**：模型面向的 `agent` 工具携带 **32 属性 JSON schema、零必填字段、8 个 action**（start/status/peek/message/followup/interrupt/wait/cancel），运行时解析器还接受一袋别名。维护者承认 schema 过于臃肿，是模型持续报错的直接原因。

**社区反应**：8 条评论均为深度技术讨论。PR #5369 已先行合入 Moonshot schema 降级方案，主 schema 简化仍在推进中。这是当前模型稳定性的核心瓶颈之一。

---

### 4. #5374 — Agent 书写文本全部乱码（macOS）
> 作者: all-lopezg | 创建: 2026-08-14 | 更新: 2026-08-14 | 评论: 4 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5374)

**要点**：macOS 上 agent 输出文本全部损坏，附截图显示大段乱码，用户表示"完全无法阅读"。属于 TUI 渲染层的高影响 bug。

**社区反应**：用户先肯定了项目本身（"amazing work"），再报 bug，情绪正面。4 条评论中暂无明确根因，维护者尚未回应。

---

### 5. #5370 — P0：Web UI 完全损坏，需对照参考重建
> 作者: Hmbown | 创建: 2026-08-14 | 更新: 2026-08-14 | 评论: 1 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5370)

**要点**：维护者 Hunter 报告公开 Web UI（codewhale.net）"完全损坏"，包括外观和功能。需区分三个表面：公开 `web/` Next.js 应用、托管 CWC 应用、以及独立产品。优先级 P0。

**社区反应**：当前仅 1 条评论，属于维护者自报 bug，尚在范围界定阶段。

---

### 6. #5372 — 已关闭会话的写锁残留，阻塞新 sub-agent 创建
> 作者: Hmbown | 创建: 2026-08-14 | 更新: 2026-08-14 | 评论: 1 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5372)

**要点**：真实工作区复现：会话关闭后，旧 agent（`agent_8fbd3df6`）仍持有 `experiments/`、`tests/`、`artifacts/` 等路径的写声明，新会话的子 agent 被拒绝（write-scope contention error）。"死属主被计为活跃"。

**社区反应**：状态已 CLOSED，说明已有对应修复。这是多 agent 并发场景下的典型资源回收缺陷。

---

### 7. #5380 — session-index JSONL 并发写入不同步，静默数据丢失
> 作者: EvanProgramming | 创建: 2026-08-14 | 更新: 2026-08-14 | 评论: 1 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5380)

**要点**：`StateStore::append_thread_name` 的 session-index 写入在 `Arc<Mutex<Connection>>` 之外执行，多 StateStore 克隆并发时通过 `fs::rename` 覆盖索引文件导致静默数据丢失。社区成员 EvanProgramming 定位并提交 PR #5382 修复。

**社区反应**：状态已 CLOSED，修复 PR 已合入。属高价值社区贡献——外部开发者精确定位并发缺陷并提交补丁。

---

### 8. #5355 — v0.9.8 已知问题：并行加载与配置 fixture 抖动
> 作者: Hmbown | 创建: 2026-08-13 | 更新: 2026-08-14 | 评论: 2 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5355)

**要点**：从 v0.9.7 收尾移交的已知问题调查篮：`exec_persistent_service::failed_exec_*` 并行加载抖动 + `exact_turn_snapshot_restores_custom_endpoint_and_turn_receipt_after_builtin_route` 并行加载问题。均为发布门禁期观察到的 flake。

**社区反应**：2 条评论，属维护者整理的技术债清单，尚未有确定性修复。

---

### 9. #5373 — 输出 token 上限低于目录标称值，截断导致任务失败
> 作者: Hmbown | 创建: 2026-08-14 | 更新: 2026-08-14 | 评论: 1 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5373)

**要点**：CodeWhale 对 deepseek-v4-flash/pro 请求 65,536 输出 token，但 models.dev 目录标注 `limit.output=384000`（上下文 1,000,000）。竞品同一端点请求 384,000。Terminal-Bench 任务（`regex-chess`、`adaptive-rejection-sampler`）因截断崩溃。缺口近 6 倍。

**社区反应**：状态已 CLOSED，说明已修复。这是一个直接导致基准测试失败的严重配置缺陷。

---

### 10. #5379 — WebhookHookSink::new 在 HTTP 客户端构建失败时 panic
> 作者: EvanProgramming | 创建: 2026-08-14 | 更新: 2026-08-14 | 评论: 1 | 👍: 0 | [链接](https://github.com/Hmbown/CodeWhale/issues/5379)

**要点**：`WebhookHookSink::new`（crates/hooks/src/lib.rs:206-218）在 reqwest 客户端构建失败时走 fallback，但 fallback 以 `.expect("build fallback HTTP client")` 结尾——第二次构建失败即直接 panic。社区成员 EvanProgramming 修复为优雅降级。

**社区反应**：状态已 CLOSED，PR #5381 合入。又一个由外部开发者发现并修复的质量缺陷。


## 重要 PR 进展（精选 10 条）

### 1. #5365 — feat(provider): 第一方本地 DS4 设置 [已合入]
> 作者: Hmbown | [链接](https://github.com/Hmbown/CodeWhale/pull/5365)

**要点**：DwarfStar (DS4) 成为第一方本地 DeepSeek 路由，无需协议适配器。`/setup provider ds4`、`/provider setup ds4`、provider-picker `D` 快捷键均可进入预填 keyless loopback 预设；复用 OpenAI 兼容传输。**v0.9.8 核心新功能**。

---

### 2. #5353 — feat(tui): Auto-Review 模型守护层 [已合入]
> 作者: Hmbown | [链接](https://github.com/Hmbown/CodeWhale/pull/5353)

**要点**：Auto-Review 升级为双层模式：确定性检查层不可绕过，兜底层在阻塞前升级为一次性模型守护。Codex `auto_review` reviewer 语义、Kimi 模式词汇、Codewhale fail-closed 默认值。**v0.9.8 核心架构增强**。

---

### 3. #5382 — fix(state): 序列化 session-index 写入，防止静默数据丢失 [已合入]
> 作者: EvanProgramming | [链接](https://github.com/Hmbown/CodeWhale/pull/5382)

**要点**：修复 `StateStore::append_thread_name` 在 `Arc<Mutex<Connection>>` 外部执行索引文件操作导致的并发数据丢失。社区成员提交的高质量并发缺陷修复。对应 #5380。

---

### 4. #5381 — fix(hooks): Webhook HTTP 客户端构建失败时不再 panic [已合入]
> 作者: EvanProgramming | [链接](https://github.com/Hmbown/CodeWhale/pull/5381)

**要点**：移除 `.expect("build fallback HTTP client")` 的 panic 路径，客户端构建失败时优雅降级。避免 TLS 后端等环境特定问题导致宿主硬崩溃。对应 #5379。

---

### 5. #5384 — test(cli): 重新固定 provider-count 断言至 v0.9.8 registry [OPEN]
> 作者: Lstarsky0 | [链接](https://github.com/Hmbown/CodeWhale/pull/5384)

**要点**：修正 `cli_provider_helpers_follow_config_metadata` 的 registry 断言（43→45）和 catalog 断言（38→40），同步 v0.9.8 数据。关闭 #5383 的纯测试修复。

---

### 6. #5378 — test(tui): 重新固定 thinking-ladder 断言 [已合入]
> 作者: Lstarsky0 | [链接](https://github.com/Hmbown/CodeWhale/pull/5378)

**要点**：九个测试、零生产改动。每个测试断言了 `6f6c35183` 替换掉的 off/high/max 快捷方式，导致 macOS/Windows main 分支自合入以来持续全红。关闭 #5377。

---

### 7. #5376 — fix(tui): 内部运行时事件不进入 session peek [已合入]
> 作者: Lstarsky0 | [链接](https://github.com/Hmbown/CodeWhale/pull/5376)

**要点**：修复 session peek 中内部运行时事件泄漏的问题。先构建真实构造器复现（Projection/waiting、shell、User 等路径的 envelope 差异），再修复。关闭 #5375。

---

### 8. #5369 — fix(tools): Moonshot schema 降级而非拒绝条件字段 [已合入]
> 作者: Lstarsky0 | [链接](https://github.com/Hmbown/CodeWhale/pull/5369)

**要点**：#5324 的前置工作——Moonshot schema 遇到条件字段时降级处理而非硬拒绝，作为 schema 简化的独立先行步骤。保持 schema 切片纯 schema 变更、负净成本核算。

---

### 9. #5339 — fix(engine): 抑制子进程持有的 shell 补全事件 [已合入]
> 作者: cyq1017 | [链接](https://github.com/Hmbown/CodeWhale/pull/5339)

**要点**：过滤子进程持有的后台 shell 补全事件，避免污染父模型流；保留无主父进程补全及任务/状态可见性。新增父/子作业的回归测试。关闭 #5325。

---

### 10. #5368 — fix(tui): 将未加防护的测试限制在隔离 state 根目录 [已合入]
> 作者: Lstarsky0 | [链接](https://github.com/Hmbown/CodeWhale/pull/5368)

**要点**：修复 #5359 的四个测试。三个独立机制，各配一个单独回滚即失败的测试。核心修复：`settings_path_candidates()` 和 `TuiPrefs::path()` 将持锁线程路由到真实环境——测试持锁线程被假定不会触碰真实环境，实际会。


## 功能需求趋势

1. **IDE/生态集成**（#3192）：社区请求将 Codewhale 列入 agentclientprotocol/registry，便于 Zed 直接安装使用。反映出 CLI/Agent 工具的生态集成需求持续走高——"能被主流编辑器发现"成为工具链的隐形门槛。

2. **第三方模型配置简化**（#5350）：中文用户 shadapang 提议为 OpenCode Zen、OpenCode Go、Agnes、美团 Sensenova 等兼容服务商内置预制模板，包含固定 URL、常用模型列表、测试连接按钮。反映了 **"现成模板 + 一键联通"** 的配置体验已从选配变为刚需。

3. **Agent 工具 schema 简化**（#5324）：32 字段 JSON schema 无必填字段、8 种 action 混用单 schema，是模型持续报错的主因。社区高关注（8 评论），维护者已拆分 Moonshot schema 降级先行合入。**面向模型的接口设计**正在成为新焦点。

4. **TUI 显示身份一致性**（#5287）：同一运行子 agent 在 TUI 不同界面显示为 `agent_<hex>`、鲸鱼昵称（如 "Amazon River"）或调度/会话名，运维者按名调度后无法对应。**一致的身份体系** 是复杂 agent 编排场景的用户体验基石。

5. **插件系统与联邦市场**（#5311）：参考 Kimi 级别插件市场，Codewhale 已有 Agent Plugins v1 解析、本地/GitHub/tarball 安装更新、不可变工作区注册等基础，需补齐完整插件产品体验。**插件生态** 正在从基础设施走向市场层面。

6. **更新提示与一键升级**（#5053）：TUI 无主动更新检查，仅 doctor.rs:261 提及。建议增加带节流的启动检查、更新通知和一键升级重启（Ctrl+U 已被 kill-line 占用，需新 chord）。**CLI 工具的主动更新体验** 仍是常见短板。


## 开发者关注点

**高频痛点：**

- **测试断言与发布不同步**：v0.9.8 发布后 main 分支 macOS/Windows 全红，原因是九个 reasoning-effort 测试和两处 provider-count 断言未同步新版本数据（#5383、#5377）。发布门禁缺乏"断言随发布自动更新"的机制，维护者连续提交纯测试修复 PR（#5384、#5378），社区已注意到此类流程性问题。

- **并发安全缺陷持续暴露**：真实工作区出现"已关闭会话的写锁残留阻塞新 sub-agent"（#5372）、session-index 并发写入静默丢数据（#5380）、Webhook client 构建失败 panic（#5379）。外部开发者 EvanProgramming 连续贡献两个高质量修复 PR，说明多 agent/多线程场景下的资源管理仍是薄弱环节。

- **模型交互稳定性**：agent 工具 32 字段 schema 导致模型持续报错（#5324）、输出 token 上限低于目录标称值 6 倍导致任务截断崩溃（#5373、已修复）、Moonshot 条件字段处理（#5369）。**"模型能稳定消费"** 已成为与"功能丰富度"同等重要的工程维度。

**值得注意的亮点：**

- 外部开发者 EvanProgramming 在 24 小时内定位并修复两个独立并发/容错缺陷，社区贡献质量突出
- Lstarsky0 连续提交多个"纯测试同步 + 零生产改动"修复 PR，维护节奏稳健
- 本地 DS4 路由（#5365）+ Auto-Review 双层守护（#5353）双双合入 v0.9.8，架构新特性推进顺利

---

*日报完。数据更新截至 2026-08-14 23:59 UTC。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*