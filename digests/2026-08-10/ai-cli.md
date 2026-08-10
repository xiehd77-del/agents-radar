# AI CLI 工具社区动态日报 2026-08-10

> 生成时间: 2026-08-10 01:55 UTC | 覆盖工具: 9 个

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

**报告日期：2026-08-10** | **分析范围：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / Pi / Qwen Code / DeepSeek TUI (CodeWhale)**


## 1. 生态全景

AI CLI 工具赛道已进入**平台期后的深水区**：头部工具（Claude Code、Codex）的核心功能趋于稳定，社区焦点从"功能有无"转向"可靠性、可控性与平台兼容性"；中间梯队（Gemini CLI、Copilot CLI、OpenCode）正处于**功能快速迭代与稳定性问题并存的阶段**，代理编排、MCP 生态、Windows 支持是共同的攻坚方向；新入局者（Kimi CLI、Qwen Code、DeepSeek TUI）则依托各自的模型生态寻找差异化切口——Kimi 深耕 ACP 协议稳定性、Qwen 聚焦多会话协调与企业级记忆、DeepSeek TUI 通过重构 Compaction 机制展现技术深度。值得注意的是，**安全过滤器误报**（Claude Code ClAudit 单日 10+ 报告）和 **Windows 平台系统性问题**（Codex Computer Use 故障群、Copilot MCP 超时）成为跨工具的高频痛点，反映出行业在模型安全对齐和跨平台适配上的共同短板。


## 2. 各工具活跃度对比

| 工具 | 今日 Issue 数* | 今日 PR 数* | Release 情况 | 整体活跃度 |
|------|---------------|------------|-------------|-----------|
| **Claude Code** | 15+（含 10 条误报系列） | ~5 | 无新版本（CLI 2.1.221） | 🔥🔥🔥🔥🔥 极高 |
| **OpenAI Codex** | 10（多集中在 Windows） | 8（7 合并） | 无新版本 | 🔥🔥🔥🔥🔥 极高 |
| **Gemini CLI** | 10 | 10（4 功能 + 6 依赖） | v0.56.0-nightly | 🔥🔥🔥🔥 高 |
| **GitHub Copilot CLI** | 25 | 0 | 无新版本 | 🔥🔥🔥🔥 高（Issue 爆发但 PR 空白） |
| **Kimi Code CLI** | 2 | 1 | 无新版本 | 🔥🔥 中低 |
| **OpenCode** | 10 | 10 | 无新版本 | 🔥🔥🔥🔥 高 |
| **Pi (CodeWhale)** | 10 | 10 | 无新版本（v0.9.6 筹备中） | 🔥🔥🔥🔥 高 |
| **Qwen Code** | 10 | 10 | v0.21.8-nightly | 🔥🔥🔥🔥 高 |
| **DeepSeek TUI** | 10 | 4（3 合并） | v0.9.6 筹备中 | 🔥🔥🔥 中 |

*注：Issue/PR 数为日报中列出的 Top 条目数，实际总量可能更高。社区热度综合 Issue 评论区活跃度、赞数及 PR 合并节奏评估。*


## 3. 共同关注的功能方向

### 3.1 模型控制权与透明度（跨 4 工具）
- **Claude Code**：会话静默降级（Fable 5 → Opus 4.8）且 `/model` 无法覆盖（#85415/#67246）
- **OpenCode**：模型级 `options` 在 headless 模式被丢弃（#27361）
- **Copilot CLI**：企业账号下 Claude 模型突然全部禁用（#4422）
- **Gemini CLI**：子代理绕过权限设置自动运行（#22093）

**共性诉求**：用户要求对模型选择、降级、切换有明确的知情权和控制权，禁止静默行为。

### 3.2 代理/子代理可靠性（跨 5 工具）
- **Gemini CLI**：通用代理挂起 1 小时（#21409）、子代理 MAX_TURNS 后误报成功（#22323）
- **Copilot CLI**：并行子代理触发 429 限流且无退避（#4416）
- **OpenCode**：子代理权限请求静默挂起（#13715）
- **Qwen Code**：多会话原生协调机制 RFC（#8718）
- **Claude Code**：Fable 5 安全分类器误判中断会话

**共性痛点**：代理在边缘场景下的挂起、误报、不可干预是当前最影响信任度的问题。

### 3.3 MCP 生态稳定性（跨 4 工具）
- **Copilot CLI**：MCP 初始化 60 秒硬超时且无重试，29% 会话失败（#4421）；OAuth 3LO 认证失败（#4371）
- **Qwen Code**：Streamable HTTP 可选流 404 导致整个连接中断（#8784）
- **Kimi CLI**：Google GenAI 与 MCP 工具的 JSON Schema 兼容问题（PR #739）
- **Gemini CLI**：工具总数超 128 触发 400 错误（#24246）

**共性趋势**：MCP 已从"能连上"进入"连得稳、连得安全"阶段，超时、认证、容错是集中短板。

### 3.4 跨平台/跨设备会话同步（跨 3 工具）
- **Codex**：跨平台同步聊天记录（#5609，63 👍）
- **Claude Code**：跨目录恢复会话（#28745，76 👍）
- **Gemini CLI**：跨设备会话连续性相关问题

**共性诉求**：开发者期望会话不再绑定单一目录或设备，形成可迁移的工作上下文。

### 3.5 上下文压缩（Compaction）优化（跨 2 工具）
- **DeepSeek TUI**：压缩后 token 计数无变化（#5096）、1M 模型仍在 128K 阈值压缩（#5239）
- **Claude Code**：与安全分类器相关的上下文管理问题

**共性方向**：压缩策略需要更智能的阈值匹配和可见的收益反馈。


## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 | 当前最大短板 |
|------|---------|---------|-------------|-------------|
| **Claude Code** | 全功能 IDE 级 CLI | 专业开发者、企业团队 | 安全分类器（ClAudit）、Remote Control、插件生态 | 安全过滤器误报、模型控制权不足 |
| **OpenAI Codex** | 多端协同的 AI 开发平台 | ChatGPT 用户、跨平台开发者 | apply_patch 行尾保留、gRPC TCP 传输（code-mode）、Computer Use | Windows 平台系统性缺陷 |
| **Gemini CLI** | 多代理协作的实验场 | Google 生态用户、研究型开发者 | 子代理互调（PR #28738）、AST 感知文件读取评估、策略引擎 | 代理稳定性（挂起/误报） |
| **GitHub Copilot CLI** | GitHub 深度集成的自动代理 | GitHub 重度用户、企业组织 | 自动模式（Autopilot）、/remote 远程会话、MCP 扩展 | 企业模型可见性、MCP 超时机制 |
| **Kimi Code CLI** | 轻量级、快迭代 | Moonshot 生态用户 | ACP 协议支持、多提供商兼容层 | 社区规模小、功能迭代节奏慢 |
| **OpenCode** | 多提供商聚合网关 | 自托管/多模型用户 | OpenCode Go 网关、原生模型回退（在途）、Xcode 27 集成 | Go 网关稳定性、TUI 复制粘贴 |
| **Pi (CodeWhale)** | 高可定制 TUI | 终端重度用户、自托管者 | 远程会话线协议、llama.cpp 支持、扩展命令系统 | TUI 渲染稳定性、远端目录覆盖 |
| **Qwen Code** | 模型+工具链深度整合 | 阿里云/通义生态用户 | Goal v3 运行时统一、Workflow 引擎驱动 /review、Qoder 插件 | E2E 测试不稳定、Windows 安装器 |
| **DeepSeek TUI** | 极简但深度的技术探索 | 技术爱好者、自托管用户 | Compaction 重构（后继交接模式）、Fleet 统一配置、结构化生存契约 | 社区规模小、工具可靠性（File edit） |


## 5. 社区热度与成熟度

### 成熟期（⭐️⭐️⭐️⭐️⭐️）
**Claude Code** 社区规模最大、Issue 讨论深度最高，但已出现"高分贝不满"特征（误报系列 10+ 条、情绪化标题）。处于**功能完善但信任度需要修复**的阶段。

### 快速增长期（⭐️⭐️⭐️⭐️）
- **OpenAI Codex**：Windows 问题的集中爆发反而说明用户基数在快速扩大，PR 合并效率高（7/8），迭代节奏健康。
- **Gemini CLI**：功能探索积极（代理互调、AST 评估），但 P1 级稳定性问题（挂起、误报）拖累用户体验，处于"想法超前于实现"的阶段。
- **Copilot CLI**：单日 25 条 Issue 但 0 PR，社区反馈激增但官方响应滞后，值得关注是否在准备大版本（v1.0.x）。
- **OpenCode / Qwen Code / Pi**：三者均处于快速迭代期，PR 合并节奏快，社区讨论有实质深度，但用户基数相对头部仍有差距。

### 早期阶段（⭐️⭐️⭐️）
**Kimi CLI** 和 **DeepSeek TUI** 社区规模较小，Issue 讨论量有限，但技术选型有特色（Kimi 聚焦 ACP 稳定性、DeepSeek TUI 在 Compaction 上做深度重构），适合技术探索型用户关注。


## 6. 值得关注的趋势信号

### 6.1 安全过滤器的"误伤危机"将成为行业共性挑战
Claude Code 的 ClAudit 单日 10+ 误报事件提供了重要警示：随着安全分类器在模型链路中的位置越来越靠前，**误报的代价**（中断会话、静默降级）可能比漏报更大。其他工具（如 Codex、Copilot）的模型治理功能需要思考如何在安全和可用性之间取得平衡。**建议开发者在使用任何 CLI 工具时，关注其安全机制的透明度和可配置性。**

### 6.2 Windows 是 AI CLI 工具的"最后一块拼图"
OpenAI Codex（Computer Use 系统性故障）、Copilot CLI（MCP 超时）、Qwen Code（安装器失败）在 Windows 上的问题在同一日集中爆发，说明**头部工具在 Windows 端的打磨仍不充分**。对于 Windows 开发者，建议优先选择在 Windows 上传出口碑较好的工具（如 Gemini CLI、Pi），或等待 Codex/Copilot 的 Windows 修复版本。

### 6.3 代理编排正在从"单层委派"走向"多层协作"
Gemini CLI 的"允许代理调用代理"（PR #28738）、Qwen Code 的多会话协调 RFC（#8718）、OpenCode 的子代理嵌套——多个工具不约而同地在探索**代理间的互相委托与协作**。这标志着 AI CLI 从"一个代理执行所有任务"向"代理团队分工协作"演进。**开发者在设计自动化工作流时，应提前考虑多代理场景下的状态同步和错误传播问题。**

### 6.4 MCP 生态进入"深水区"
MCP 的讨论从"如何接入"转向"如何稳定、安全地接入"：超时机制（Copilot #4421）、OAuth 认证（Copilot #4371）、可选端点容错（Qwen #8784）、工具数量膨胀（Gemini #24246）。**MCP 服务器开发者应重视容错设计和渐进式能力声明，CLI 使用者则应关注工具的 MCP 生命周期管理能力。**

### 6.5 "静默失败"是用户信任的头号杀手
从 Claude Code 的会话静默降级、Copilot 的初始提示静默丢弃（#4423）、到 DeepSeek TUI 的 File edit 假成功（#5209）、OpenCode 的模型 options 静默丢弃——多个工具出现了"系统说成功但实际没有发生"的问题。**这是一种比报错更严重的信任破坏**。开发者评估工具时，应把"失败透明度"（fail loudly）作为关键指标，而非仅看功能完整性。

### 6.6 企业级需求正在浮出水面
Copilot CLI 的组织仓库 /remote 失败（#2751）、企业账号模型不可用（#4422）、OpenCode Go 订阅计费问题（#41430）、Gemini CLI 的工具审批策略（PR #26540）——企业用户在模型可控性、计费透明度、与组织基础设施集成的需求日益凸显。**企业技术决策者在选型时，应优先考察工具的权限模型、审计日志和策略引擎能力。**

---

*报告完。数据来源：各工具 GitHub 仓库 2026-08-10 社区动态。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截至 2026-08-10 | 数据源：github.com/anthropics/skills**


## 1. 热门 Skills 排行

| # | Skill (PR) | 核心功能 | 社区关注点 | 状态 |
|---|-----------|---------|-----------|------|
| 1 | **skill-creator 系列修复** (#1298, #1099, #1050, #1323) | 优化 skill-creator 的 eval 与优化循环，修复 Windows 兼容与触发检测缺陷 | **引发最多讨论的焦点**。多个独立 PR 指向同一根因：`run_eval.py` 的触发检测机制在 Windows 及部分环境下失效，导致 recall 恒为 0%，优化循环针对噪声迭代。社区对 skill 描述自动优化管线（`run_loop.py` / `improve_description.py`）的正确性高度关切。 | Open |
| 2 | **skill-quality-analyzer + skill-security-analyzer** (#83) | 两个元技能：质量评估（五维度：结构/文档/示例/资源/安全）与安全分析 | 社区对 Skills 的**质量评估与安全审计**提出了体系化需求，这是首个针对"skill 本身质量"的元层提案。 | Open |
| 3 | **PDF Skill 修复** (#538) | 修复 `SKILL.md` 中 8 处大小写敏感的文件引用（`REFERENCE.md` → `reference.md` 等） | 虽为小修复，但引发持续性讨论（更新跨度近 2 个月），暴露了官方文档在大小写敏感环境（Linux）下的兼容性短板。 | Open |
| 4 | **DOCX 追踪修订修复** (#541) | 修复当文档存在书签时，追踪修订 `w:id` 冲突导致的文档损坏 | OOXML 复杂状态的边界处理是社区痛点——`w:id` 在书签/修订/批注间共享 ID 空间，官方示例中的硬编码低 ID 存在隐患。与 #12（空白重排导致文档损坏）呼应。 | Open |
| 5 | **testing-patterns** (#723) | 覆盖全栈测试模式：测试哲学(Testing Trophy)、单元测试(AAA模式)、React组件测试(Testing Library)等 | 社区对**系统化测试 skill** 的强烈需求信号。 | Open |
| 6 | **pyxel 复古游戏开发** (#525) | 基于 pyxel-mcp 的 Python 复古/像素风游戏开发工作流 | 创意/游戏领域的垂直 skill 需求；跨 4 个月持续更新，讨论热度不减。 | Open |
| 7 | **色彩专家 color-expert** (#1302) | 自包含色彩专业知识：命名系统（ISCC-NBS、Munsell、XKCD、RAL、Ridgway 1912）、色彩空间对比表（OKLCH/OKLAB/CAM16） | 设计领域的深度垂直 skill 代表。 | Open |
| 8 | **自审计 skill** (#1367) | "机械验证 → 四维推理审计"，在交付前对 AI 输出进行质量门禁 | 与 #1385（推理质量门禁管线提案）形成配套；主张"先验证文件存在，再按损失严重级审计推理质量"。 | Open |

> 注：以上 PR 均处于 **open** 状态，尚无 merged/draft 样例。


## 2. 社区需求趋势（来自 Issues）

| 方向 | 代表性 Issue | 热度信号 |
|------|-------------|---------|
| **Skill 分发与信任边界** | #492 安全：community skills 在 `anthropic/` 命名空间下伪装官方、滥用信任边界 | 43 评论 / 最高热度 |
| **组织级 Skill 共享** | #228 实现 org 内 skill 直接共享（现需手动下载/上传） | 16 评论 / 8 👍 |
| **基础设施稳定性** | #556、#1169、#1329：eval/优化循环触发率 0%、Windows 子进程崩溃 | 12 评论 / 7 👍（#556） |
| **插件去重** | #189：`document-skills` 与 `example-skills` 内容相同导致重复 | 6 评论 / 9 👍 |
| **上下文管理** | #1487：claude-api skill 单次注入 ~156k token 撑爆上下文窗口 | 新近提出（仅 4 评论，但严重度高） |
| **Agent 治理与安全** | #412 agent-governance（策略执行/威胁检测/信任评分/审计追踪）、#1175 SPO 文档访问控制 | 中等讨论量 |
| **外部集成** | #29 Bedrock 兼容、#16 Skills 暴露为 MCP | 早期呼声，持续存在 |


## 3. 高潜力待合并 Skills（评论活跃、近期可能落地）

1. **skill-creator 修复合辑**（#1298 / #1099 / #1050 / #1323）
   三路 PR 从不同角度修复同一根因（Windows 兼容、触发检测、并发隔离），且与 #556、#1169 两个高赞 Issue 强关联。社区合并共识最高，可预期近期合入。

2. **skill-quality-analyzer + skill-security-analyzer**（#83）
   直击 #492 暴露的安全信任问题与质量评估空白，语义上与官方治理方向对齐。

3. **document-typography**（#514）
   解决 AI 生成文档中孤行/孤段/编号错位等高频排版问题，与 #12（whitespace 损坏）互为补充，属于"小而痛"的实用型 skill。

4. **plan-file-hygiene**（#1479）
   针对规划产物无生命周期的痛点（#1417），社区协作设计（多人署名提案），落地概率较高。


## 4. Skills 生态洞察

> **一句话总结**：社区最集中的诉求是 **"基础设施可靠性 + 可信分发"** ——即 eval/优化工具链的稳定性（Windows、触发检测、并发隔离）与 skill 的安全/质量保障（命名空间信任、质量评分、治理），而非新增更多功能型 skill；创作类与测试类为第二梯队需求。

---

# 🤖 Claude Code 社区动态日报

**日期：2026-08-10** | **数据来源：github.com/anthropics/claude-code**

---

## 📌 今日速览

今日官方未发布新版本，社区焦点集中在 **Fable 5 安全分类器（ClAudit）大量误报** 上——单日出现 10+ 条"误拦截正常对话"的报告，且用户反馈无法通过 `/model` 命令切换规避；与此同时，**会话降级（Session downgrade）** 问题浮出水面，多个用户反映会话被静默从 Fable 5 降级至 Opus 4.8。功能需求方面，**UI 本地化**（#31413，76 👍）与**跨目录恢复会话**（#28745，76 👍）持续保持高热度。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。社区当前版本为 **2.1.226**（VSCode 扩展），CLI 版本 2.1.221。

---

## 🔥 社区热点 Issues（Top 10）

### 1. 🚨 ClAudit 误报批量涌现——安全过滤器失控？
**#85375 / #85385-#85392 系列**（10+ 条，作者 sworrl）

> 同一用户连续提交 10 条 ClAudit 误报报告，涉及 `Opus 4.8` 安全分类器将正常工程讨论、甚至普通对话（如"F••• C•••!"）标记为 `cyber` 类并**中断会话**（severity: session-halted）。所有报告均标注"可复现（server-side）"。

**为什么重要**：这不是个例——多起报告指向同一模式：ClAudit 在会话中途触发，且用户无法有效干预。结合 #67246 和 #85415，这是一个**系统性安全过滤器误伤问题**。

🔗 [查看 #85375](https://github.com/anthropics/claude-code/issues/85375) | [查看系列](https://github.com/anthropics/claude-code/issues?q=author%3Asworrl+label%3Acyber)

---

### 2. ⚠️ 会话被静默降级：Fable 5 → Opus 4.8
**#85415**（作者 Nightsd01，今日新开）

> 用户报告"完全无害的周末项目"会话被自动从 Fable 5 降级至 Opus 4.8，且无明确提示。用户在标题中直接抗议："At the VERY WORST: Downgrade to Opus 5, not 4.8!!!!"

**关联**：#67246 报告了相同问题（Fable 5 安全性分类器误判后静默切换模型，且 `/model` 无法覆盖）。社区反应：两条 issue 合计 15 条评论，反映出用户对**模型控制权**的强烈诉求。

🔗 [查看 #85415](https://github.com/anthropics/claude-code/issues/85415) | [查看 #67246](https://github.com/anthropics/claude-code/issues/67246)

---

### 3. 💬 UI 本地化支持（高赞需求）
**#31413**（作者 HolliOnRoad，👍 8，评论 13）

> 请求为 Claude Code 界面增加多语言支持。创建于 3 月，持续活跃至今，属于**长期未解决的高呼声功能需求**。

🔗 [查看 #31413](https://github.com/anthropics/claude-code/issues/31413)

---

### 4. 🔄 跨目录恢复会话
**#28745**（作者 butlersrepos，👍 76，评论 11）

> 会话与启动目录绑定，当原目录被删除或重命名后，无法恢复该会话。76 个 👍 是本期 Issue 中**社区支持度最高**的请求之一。

🔗 [查看 #28745](https://github.com/anthropics/claude-code/issues/28745)

---

### 5. 🐛 Workflow 工具 JSON 参数被转为字符串
**#72248**（作者 mabry-prv，评论 10）

> Workflow 工具的 `args` 传入 JSON 对象/数组时，脚本收到的却是一段 JSON 编码的字符串，与文档声明的"verbatim"契约不符。**已有复现步骤**，影响所有依赖结构化参数的 Workflow 用户。

🔗 [查看 #72248](https://github.com/anthropics/claude-code/issues/72248)

---

### 6. 🖥️ Windows 桌面版崩溃导致 MSIX 包损坏+数据丢失
**#81306**（作者 NavarreDR，评论 5）

> Desktop 崩溃导致 MSIX 包"卡死"，恢复需手动删除包，连带销毁本地数据（Code 标签分组、崩溃转储）。涉及 Remote Control 双会话场景。**数据丢失类问题，优先级应较高**。

🔗 [查看 #81306](https://github.com/anthropics/claude-code/issues/81306)

---

### 7. 🌐 Remote Control 响应不渲染，需手动刷新
**#85240**（作者 rsicak，评论 5，8月9日新开）

> 浏览器端（iPad Safari/Chrome、macOS Safari）Remote Control 的助手响应**从不自动渲染**，每次需手动刷新页面才能看到完整回复。跨 3 种浏览器组合稳定复现，属**高影响可用性缺陷**。

🔗 [查看 #85240](https://github.com/anthropics/claude-code/issues/85240)

---

### 8. 🔌 GitHub Integration 写操作全部 403
**#80874**（作者 nilshil-ai，评论 4）

> OAuth 授权成功，但所有写操作（如创建 PR、推送）均返回 "403 Resource not accessible by integration"——连接器形同虚设。影响 CI/CD 自动化工作流。

🔗 [查看 #80874](https://github.com/anthropics/claude-code/issues/80874)

---

### 9. 📁 插件版本解析逃逸 marketplace 根目录
**#82712**（作者 kerfern，评论 1）

> 当 marketplace 无 `.git` 目录且插件声明 `"version": null` 时，版本解析会**沿文件系统向上查找**，最终解析到 `~/.claude` HEAD，导致每次提交都重新 clone。这是一个**隐蔽的环境隔离缺陷**。

🔗 [查看 #82712](https://github.com/anthropics/claude-code/issues/82712)

---

### 10. 🔀 VSCode Fork 功能异常：空白聊天+不可见
**#85008**（作者 daniyalasyed，评论 2，8月8日新开）

> VSCode 2.1.226 中 Fork 会话后，新标签页为空白，且 Fork 出的会话在列表中不可见。作者特别指出与历史 Issue #31831 不同——本次在**完全空闲**状态下触发，排除了竞态条件归因。

🔗 [查看 #85008](https://github.com/anthropics/claude-code/issues/85008)

---

## 🔧 重要 PR 进展

### 1. 📝 安全指南默认模型引用更新
**#85409**（作者 petergoldstein，8月10日）

> 将 `security-guidance` 插件中过时的 Opus 4.7 / Sonnet 4.6 引用更新为 Opus 5 / Sonnet 5。**间接证实 Opus 5 / Sonnet 5 已成为当前默认模型代际**。

🔗 [查看 PR #85409](https://github.com/anthropics/claude-code/pull/85409)

---

### 2. 🛠️ 修复 YAML 块标量 agent 描述解析
**#85323**（作者 erichanwang，8月9日）

> 修复 #83803 遗留的 YAML 解析缺陷：`description: |` / `description: >` 多行块标量现在从缩进内容测量，而非将标量标记当作完整描述。影响所有使用多行描述 agent 的插件开发者。

🔗 [查看 PR #85323](https://github.com/anthropics/claude-code/pull/85323)

---

### 3. 📚 技能命名规范化
**#85243**（作者 bechor25，8月9日）

> 8 个内置技能（plugin-dev、hookify 等）的 `name` 字段包含空格且为标题大小写，不符合规范。PR 将其改为 spec 合规命名，避免下游解析问题。

🔗 [查看 PR #85243](https://github.com/anthropics/claude-code/pull/85243)

---

### 4. 📄 AGENTS.md 增量迭代插件
**#17395**（作者 Olshansk，8月9日更新，已关闭）

> 新增 `agent-session-commit` 插件：将 AGENTS.md 设为权威指令文件，CLAUDE.md 仅作指针；支持 `/session-commit` 手动触发及 Stop hook 自动提示，实现跨会话的项目指令迭代。

🔗 [查看 PR #17395](https://github.com/anthropics/claude-code/pull/17395)

---

### 5. 📖 文档：强制 Task 工具与模型元数据
**#9262**（作者 FradSer，8月10日更新，已关闭）

> 文档更新：在提交命令文档中记录 `claude-3-5-haiku-latest` 模型参数，并强制在 commit 工作流中使用 Task 工具以确保上下文隔离。仅文档修改。

🔗 [查看 PR #9262](https://github.com/anthropics/claude-code/pull/9262)

---

## 📊 功能需求趋势

| 趋势方向 | 代表 Issue | 热度信号 |
|---------|-----------|---------|
| **UI 本地化** | #31413 | 13 评论，持续 5 个月未解决 |
| **跨目录/跨设备会话管理** | #28745、#81658 | 76 👍（最高） |
| **模型控制权/防降级** | #85415、#67246 | 今日新增，双报告并行 |
| **安全过滤器可配置性** | #67246、#85414、#85375 系列 | 单日 10+ 误报报告，**爆发趋势** |
| **远程控制/浏览器体验** | #85240 | 多设备稳定复现的高影响缺陷 |
| **Fork/会话复制可靠性** | #85008 | 新开 Issue，作者精确复现 |

---

## 🎯 开发者关注点

### 1. 🔴 安全过滤器误伤已成系统性问题
**最紧急**。Fable 5 安全分类器（ClAudit）在多个独立场景下误判良性内容（正常工程讨论、防御性安全审计、普通对话），且**一旦触发即中断会话**，无法通过 `/model` 或其它命令覆盖。用户情绪激烈（"why do you keep flagging this?"），建议官方紧急响应。

### 2. 🔴 模型选择权与透明度不足
会话被自动降级（Fable 5 → Opus 4.8）缺乏明确提示和干预手段；子代理的 effort 配置是否生效无从观察（#85416）。开发者需要**更强的模型控制与可观测性**。

### 3. 🟡 数据持久化可靠性堪忧
Windows MSIX 崩溃致本地数据销毁（#81306）、桌面 30 天保留策略删除唯一副本（#81100）、跨平台同步丢失对话（#81658）——多条数据丢失报告并行出现，需引起重视。

### 4. 🟡 VSCode/桌面端体验细节欠佳
Fork 后空白会话（#85008）、远程控制响应需手动刷新（#85240）——IDE 集成和远程场景的**可用性打磨仍有空间**。

### 5. 🟢 插件/技能生态规范化进行中
YAML 解析修复、技能命名合规化、AGENTS.md 迭代插件——社区正积极完善插件开发体验，官方应关注此类 PR 的合并节奏。

---

*本日报由 AI 技术分析师自动生成，基于 GitHub 公开数据，供技术社区参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-10** | **数据来源：** [github.com/openai/codex](https://github.com/openai/codex)


## 今日速览

Windows 平台成为今日社区焦点：Computer Use 功能的 `EnumWindows` 错误（0x80070003）和桌面应用崩溃循环问题集中爆发，多条相关 Issue 和 PR 围绕 Windows 展开。与此同时，核心修复已落地：`apply_patch` 的换行符保留功能正式合入（PR #37757、#37758），解决了长期困扰 Windows 用户的 CRLF 混用问题；此外，TUI 文本换行与 Cursor 项目路径解析的底层修复也已合并。

---

## 社区热点 Issues

基于过去 24 小时的评论活跃度与社区投票，以下 10 个 Issue 最值得关注：

### 1. [#17827] 可定制的状态栏（Status Line）
- **作者：** pkondaurov | **评论：** 39 | **👍：** 150 | **状态：** OPEN
- **要点：** 请求为终端 UI 底部增加可定制的状态栏，可显示 token 用量、模型名称、速率限制、上下文窗口、Git 分支等实时信息，灵感来自 Claude Code。
- **关注理由：** 150 👍 为本期最高，社区对终端 UI 可观测性的需求极为强烈，但 Issue 已开放近 4 个月。
- **链接：** [Issue #17827](https://github.com/openai/codex/issues/17827)

### 2. [#4003] Windows 上修补文件混用行尾符（已关闭）
- **作者：** chausner | **评论：** 33 | **👍：** 74 | **状态：** CLOSED
- **要点：** `apply_patch` 未遵循文件原有的行尾风格（CRLF/CR/LF），导致文件行尾混用。今日 PR #37757/#37758 已合入修复。
- **关注理由：** 74 👍 的高热度老 Issue（2025-09 创建），今日终于迎来修复，体现了社区反馈的闭环。
- **链接：** [Issue #4003](https://github.com/openai/codex/issues/4003)

### 3. [#25928] VS Code/Cursor 扩展提交的 Prompt 随机消失
- **作者：** Avnsx | **评论：** 25 | **👍：** 17 | **状态：** OPEN
- **要点：** 扩展版本 3.6.31，在 Cursor IDE 中提交的 Prompt 在进入队列前随机消失，影响 ChatGPT Pro 用户。
- **关注理由：** 评论活跃、影响 IDE 核心工作流，涉及消息队列的可靠性问题，目前尚无明确解决方案。
- **链接：** [Issue #25928](https://github.com/openai/codex/issues/25928)

### 4. [#37043] Windows Computer Use 失败：`EnumWindows` 0x80070003
- **作者：** Moonst | **评论：** 18 | **👍：** 4 | **状态：** OPEN
- **要点：** Computer Use 辅助程序启动后，`list_apps()` 和 `list_windows()` 立即报 `EnumWindows failed: The system cannot find the path specified`，重启无法解决。
- **关注理由：** 今日 Windows Computer Use 故障组中最具代表性的 Issue，多条相关问题（#37180、#37383、#37595）指向同一根因，团队正在集中排查。
- **链接：** [Issue #37043](https://github.com/openai/codex/issues/37043)

### 5. [#11011] 线程切换非常缓慢
- **作者：** ImanYZ | **评论：** 21 | **👍：** 19 | **状态：** OPEN
- **要点：** 更新后 Codex App 在线程间切换极度缓慢、无响应。同类问题 #20802（macOS 上的回归）已被标记为 CLOSED。
- **关注理由：** 高评论数、影响日常使用效率，或与已修复的 macOS 回归相关，需确认 Windows 端是否已同步修复。
- **链接：** [Issue #11011](https://github.com/openai/codex/issues/11011)

### 6. [#5609] 跨平台同步聊天记录与对话历史
- **作者：** interconnectedMe | **评论：** 6 | **👍：** 63 | **状态：** OPEN
- **要点：** 希望 ChatGPT 网页版、Codex 网页版、VS Code 扩展、Codespaces 等平台间同步全部聊天记录。
- **关注理由：** 63 👍 的高票功能需求，且近 24 小时仍有更新（评论+1），显示该需求持续受到关注。
- **链接：** [Issue #5609](https://github.com/openai/codex/issues/5609)

### 7. [#15299] 支持将入站 MCP 通知路由到活跃的 CLI 会话
- **作者：** jasny | **评论：** 15 | **👍：** 14 | **状态：** OPEN
- **要点：** 希望外部通道能通过 MCP notification 将入站消息推送到正在运行的 Codex CLI 会话中，目前缺少文档化的路径。
- **关注理由：** MCP 生态扩展的关键需求，评论讨论活跃，涉及外部事件驱动的工作流场景。
- **链接：** [Issue #15299](https://github.com/openai/codex/issues/15299)

### 8. [#37180] Windows Computer Use 审批提示不显示
- **作者：** YTSun | **评论：** 11 | **👍：** 6 | **状态：** OPEN
- **要点：** 桌面应用版本 26.730.8199.0，`launch_app` 报 `node_repl exec context not found`，审批提示从未出现。
- **关注理由：** Computer Use 在 Windows 上不可用的问题持续发酵，此 Issue 提供了不同的报错上下文，有助于根因定位。
- **链接：** [Issue #37180](https://github.com/openai/codex/issues/37180)

### 9. [#37752] 桌面应用（Codex 模式）启动后约 25 秒静默退出，无限崩溃循环
- **作者：** paraninternational | **评论：** 2 | **👍：** 0 | **状态：** OPEN（今日创建）
- **要点：** Windows 11 上，ChatGPT 桌面应用进入 Codex 模式后约 22-30 秒静默退出并循环崩溃，空白配置也复现；同一台机器上的 CLI 工作正常。
- **关注理由：** 今日新建且直接指向桌面应用崩溃的问题，与 Computer Use 故障可能共享底层根因，需优先跟进。
- **链接：** [Issue #37752](https://github.com/openai/codex/issues/37752)

### 10. [#34248] Goal 自动续跑进入无进展死循环，产生数千重复 turns
- **作者：** Owen-XRD | **评论：** 3 | **👍：** 1 | **状态：** OPEN
- **要点：** Goal 自动继续机制在等待外部长期运行进程时进入自持续循环，每次 `task_complete` 后 5-8ms 即触发新的 `task_started`。
- **关注理由：** 自动化的可靠性问题，可能消耗大量 token 和计算资源，对自动化场景的信任度影响大。
- **链接：** [Issue #34248](https://github.com/openai/codex/issues/34248)

---

## 重要 PR 进展

过去 24 小时内共有 8 个 PR 更新（其中 7 个已合并），以下 10 个最值得关注：

### 1. [#37758] 增加保留 apply_patch 换行符的功能开关（已合并）
- **功能：** 新增 `apply_patch_preserve_line_endings` 特性开关（默认关闭），使 `apply_patch` 更新文件时保留 CRLF、CR 和混合换行符。
- **意义：** 直接对应 Issue #4003（74 👍），为换行问题提供开关控制，确保向后兼容。
- **链接：** [PR #37758](https://github.com/openai/codex/pull/37758)

### 2. [#37757] 为 `apply_patch` 增加换行符保留模式（已合并）
- **功能：** 新增可选的 `PreserveLineEndings` 更新模式，贯穿补丁处理链路，避免更新时改写补丁范围之外的行尾。
- **意义：** 从底层解决 Windows 行尾混用问题的核心实现，是今日最重要的修复之一。
- **链接：** [PR #37757](https://github.com/openai/codex/pull/37757)

### 3. [#37747] 限制 Cursor 项目路径解析范围（已合并）
- **功能：** 不再递归遍历目录树，改为基于常见文件名分隔符探测有界候选路径集合，提前终止。
- **意义：** 修复 Cursor 项目名称解析可能递归扫描大目录的性能隐患。
- **链接：** [PR #37747](https://github.com/openai/codex/pull/37747)

### 4. [#37745] 为 code-mode 主机添加 gRPC TCP 传输（已合并）
- **功能：** 支持通过 `--listen` 接受 `grpc://IP:PORT` 端点，输出绑定端口到 stdout，便于端口 0 场景。
- **意义：** 为 code-mode 提供远程 TCP 连接能力，拓展了本地通信的边界。
- **链接：** [PR #37745](https://github.com/openai/codex/pull/37745)

### 5. [#37709] 修复 TUI 编辑器中换行空白与后续文本分离的问题（已合并）
- **功能：** 新增针对编辑器的 grapheme-safe 换行，使 Unicode 空白保持在与其关联的文本行中。
- **意义：** 改善 TUI 编辑体验，处理了 Unicode 边界情况下的排版异常。
- **链接：** [PR #37709](https://github.com/openai/codex/pull/37709)

### 6. [#37723] 为会话配置导入失败上报 I/O 子类型（已合并）
- **功能：** 在 `failed_to_load_session_config` 子类型中附加稳定的错误分类（`invalid_data`、`not_found`、`permission_denied`）。
- **意义：** 改进可观测性和排障效率，使配置加载失败更易诊断。
- **链接：** [PR #37723](https://github.com/openai/codex/pull/37723)

### 7. [#37654] 宣告环境配置读取支持（已合并）
- **功能：** 在 exec-server 能力中新增 `environmentConfigRead` 并默认向本地执行器宣告；旧执行器响应默认设为 `false`。
- **意义：** 对本地执行器的环境配置读取能力进行标准化声明，有助于客户端能力协商。
- **链接：** [PR #37654](https://github.com/openai/codex/pull/37654)

### 8. [#31817] 自动更新 models.json（OPEN）
- **功能：** 由 GitHub Actions 定期自动更新模型元数据。
- **意义：** 持续集成流程的一部分，确保模型列表与上游一致。
- **链接：** [PR #31817](https://github.com/openai/codex/pull/31817)

---

## 功能需求趋势

从当前 Issue 中提炼出社区最集中的功能需求方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **Windows 平台支持与稳定性** | #37043、#37180、#37383、#37595、#37752、#37734、#37104、#26803、#37599 | 🔥🔥🔥 爆发式增长 |
| **TUI 显示增强** | #17827（状态栏）、#37709（换行） | 🔥🔥 高票持续 |
| **跨平台会话/聊天同步** | #5609 | 🔥🔥 63 👍 |
| **MCP 双向通信扩展** | #15299（入站通知路由） | 🔥 已有雏形 |
| **模型别名映射（企业网关）** | #21594 | 🔥 企业用 |

**Windows Computer Use** 是今日最集中的用户痛点：至少 5 个独立 Issue 指向 `EnumWindows 0x80070003` 错误和应用/窗口发现失败，叠加桌面应用崩溃循环问题，表明 Windows 端的原生集成还存在系统性的稳定性缺口。该问题在 PR 侧暂无对应修复合入，值得重点跟进。

## 开发者关注点

1. **Windows 原生集成稳定性是当前最大痛点。** 多个独立 Issue 指向同一类故障（Computer Use 枚举失败、应用崩溃循环、沙箱权限错误），且今日提交的多个 Issue 均围绕 Windows 展开。开发者普遍反馈：CLI 在 Windows 上运行正常，但桌面应用和 Computer Use 模块存在明显的平台适配缺陷。

2. **换行符问题是长期未得到解决的“老账”。** Issue #4003 自 2025-09 提出至今（近 11 个月）才在今日合入修复，期间积累了 74 👍 和 33 条评论。开发者对 `apply_patch` 在 Windows 上改写 CRLF 的问题长期不满，建议后续确保此类平台兼容性问题能更快排入迭代。

3. **同步与可观测性的呼声高涨。** 跨平台会话同步（#5609，63 👍）和可定制状态栏（#17827，150 👍）分别代表了工作流一致性和终端可观测性的核心需求。二者长期未落地，社区期待值不断累积。

4. **自动化稳定性需关注。** #34248 揭示的 Goal 自动续跑死循环问题可能造成大量 token 浪费，对依赖 Codex Agent 进行无人值守任务的开发者影响严重，建议优先处理。

5. **消息队列可靠性问题影响核心工作流。** #25928 中 Prompt 在进入队列前随机消失的问题直接影响 IDE 扩展的日常使用，在修复前建议关注官方更新或使用 CLI 作为替代方案。

---

> 日报数据截至 2026-08-10。所有 Issue/PR 链接均可点击直达 GitHub 原始页面。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-10** | **数据来源：github.com/google-gemini/gemini-cli**


## 今日速览

今日发布 v0.56.0-nightly 版本更新；Issue 侧社区讨论热度集中在**子代理（Subagent）健壮性**问题上，包括子代理在 MAX_TURNS 后误报成功、通用代理挂起等 P1 级缺陷。PR 侧则以 dependabot 批量依赖升级为主，值得关注的是两项核心修复：ACP 会话恢复污染问题以及代理嵌套调用（allow agents to call agents）的落地。


## 版本发布

### v0.56.0-nightly.20260810.gcf22ac7e8
- **类型**：夜间构建版
- **变更内容**：常规 nightly 更新，无显著功能变更
- **对比版本**：v0.56.0-nightly.20260809.gcf22ac7e8
- 链接：[查看 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260809.gcf22ac7e8...v0.56.0-nightly.20260810.gcf22ac7e8)


## 社区热点 Issues（Top 10）

### 1. 子代理 MAX_TURNS 后误报成功（P1）
- **Issue #22323** | 评论 12 | 👍 2
- **问题**：`codebase_investigator` 子代理在达到最大轮次限制后，仍然返回 `status: "success"` 和 `Termination Reason: "GOAL"`，即使实际上未执行任何分析。这会导致主代理误判任务已完成，隐藏了真正的中断。
- **影响**：直接关系到多代理协作场景下的结果可信度，是目前代理编排中较为危险的静默失败模式。
- 链接：[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. 通用代理（Generalist agent）挂起（P1）
- **Issue #21409** | 评论 8 | 👍 8
- **问题**：当 Gemini CLI 委派任务给通用代理时，代理会无限期挂起，即使是创建文件夹这类简单操作也会卡住（用户最长等待 1 小时）。手动指示模型不使用子代理可绕过此问题。
- **社区反应**：👍 数最高（8），说明影响面较广，是当前代理功能的重大稳定性障碍，被标记为 `status/need-retesting`。
- 链接：[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. 基于 AST 的文件读取与代码库映射评估（P2）
- **Issue #22745** | 评论 7 | 👍 1
- **内容**：EPIC 级追踪，评估 AST 感知的文件读取和代码库映射是否值得引入。潜在收益包括：单次工具调用精确定位方法边界、减少 token 噪声、优化导航效率。
- **意义**：反映了社区对大规模代码库操作效率的深层需求，直接关联 `codebase_investigator` 的后续演进方向。
- 链接：[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 4. 模型未充分利用自定义 Skills 和子代理（P2）
- **Issue #21968** | 评论 6 | 👍 0
- **问题**：用户反馈 Gemini 在自主执行任务时几乎不会主动调用自定义 skills 和子代理，即使任务与已定义的 skill 高度相关（如 gradle/git skills）。只有显式指示时才会使用。
- **影响**：直接限制了自定义扩展能力的价值发挥，关系到 CLI 生态的可扩展性。
- 链接：[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### 5. Shell 命令执行后卡在 "Waiting input"（P1）
- **Issue #25166** | 评论 4 | 👍 3
- **问题**：简单 CLI 命令执行完毕后，Gemini CLI 仍显示命令为活动状态并等待用户输入，造成挂起。该问题可复现且出现在极简单的命令场景。
- **影响**：属于核心交互流程的稳定性缺陷，目前标记为 `effort/medium`。
- 链接：[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 6. 子代理在无权限状态下运行（P2）
- **Issue #22093** | 评论 3 | 👍 0
- **问题**：自 v0.33.0 起，用户在所有配置中已禁用 Agents 模式，但子代理（如 generalist）仍被自动调用，绕过权限设置。
- **严重性**：属于权限边界失效问题，涉及安全与用户预期一致性，目前标记为 `status/need-retesting`。
- 链接：[Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

### 7. 工具总数超过 128 个时触发 400 错误（P2）
- **Issue #24246** | 评论 3 | 👍 0
- **问题**：当可用工具超过 128 个时，Gemini CLI 报 400 错误。用户期望代理能够智能筛选与当前任务相关的工具集，而非全量加载。
- **意义**：随着 MCP 生态扩大和自定义工具增多，工具数量管理将成为必经之路。
- 链接：[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 8. 模型倾向在随机位置创建临时脚本（P2）
- **Issue #23571** | 评论 3 | 👍 0
- **问题**：当限制模型仅通过 shell 执行操作时，模型倾向于在多个目录生成编辑脚本，导致工作区清理困难，尤其在需要干净提交时。
- 链接：[Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### 9. Agent 应阻止/劝阻破坏性行为（P2）
- **Issue #22672** | 评论 3 | 👍 1
- **问题**：在复杂 git 操作、分支管理等场景中，模型偶尔使用 `git reset` 或 `--force` 等破坏性命令，而存在更安全替代方案。建议对数据库等资源操作增加风险感知。
- 链接：[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

### 10. Browser Agent 忽略 settings.json 覆盖配置（P2）
- **Issue #22267** | 评论 3 | 👍 0
- **问题**：Browser Agent 完全忽略全局或项目级 `settings.json` 中的配置覆盖（如 `maxTurns`），虽然 `AgentRegistry` 正确读取了配置，但实际行为未生效。
- 链接：[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)


## 重要 PR 进展（Top 10）

### 1. 修复 ACP 会话恢复污染问题（P1, Core）
- **PR #28744** | 状态：OPEN | 作者：PranavMishra28
- **内容**：修复 `loadSession` 在 `resumeChat()` 之前调用 `geminiClient.initialize()` 导致新开聊天污染会话文件的问题，确保恢复会话时保留原始上下文。Closes #28693。
- 链接：[PR #28744](https://github.com/google-gemini/gemini-cli/pull/28744)

### 2. 允许代理调用代理（P2, Agent, Help Wanted）
- **PR #28738** | 状态：OPEN | 作者：akash-manna-sky
- **内容**：实现子代理之间的相互委托及递归调用（通过 `tools:` frontmatter），修复 #22092。该 PR 标记为 `help wanted`，说明社区驱动的可能性较大，是代理编排能力的重要拓展。
- 链接：[PR #28738](https://github.com/google-gemini/gemini-cli/pull/28738)

### 3. 保留模型解析后的 systemInstruction 与 tools（Core）
- **PR #28743** | 状态：OPEN | 作者：kunalrawat425
- **内容**：修复 `GeminiChat.sendMessageStream()` 中 `getResolvedConfig()` 返回的 `systemInstruction` 和 `tools` 被聊天级默认值覆盖的问题。
- 链接：[PR #28743](https://github.com/google-gemini/gemini-cli/pull/28743)

### 4. 修复 Caretaker Agent 技能命名规范
- **PR #28742** | 状态：OPEN | 作者：bechor25
- **内容**：将 `triage-worker` 下两个技能名称从 `code_explorer` 和 `spec_generator` 修改为符合 Agent Skills 规范的连字符格式。
- 链接：[PR #28742](https://github.com/google-gemini/gemini-cli/pull/28742)

### 5. 策略引擎工具审批 Bug 修复（P1, Core）
- **PR #26540** | 状态：OPEN | 作者：Abhijit-2592
- **内容**：修复策略引擎中若干关键问题——正则 null-byte 匹配缺陷、`YOLO`/`AUTO_EDIT` 模式下审批无法持久化及多余审批提示。
- 链接：[PR #26540](https://github.com/google-gemini/gemini-cli/pull/26540)

### 6. 更新 .gitignore 忽略 .env 与 .ai 文件
- **PR #28619** | 状态：CLOSED | 作者：zyntromedia
- **内容**：将 `.env` 和 `.ai` 文件加入 `.gitignore` 并补充单元测试，改善仓库安全卫生。
- 链接：[PR #28619](https://github.com/google-gemini/gemini-cli/pull/28619)

### 7~10. Dependabot 批量依赖升级
- **PR #28746**：npm-dependencies 组 74 个包批量升级（simple-git 3.28.0→3.36.0、MCP SDK 1.23.0→1.30.0 等）
- **PR #28752**：puppeteer-core 24.0.0 → 25.4.0
- **PR #28749**：@google/genai 1.30.0 → 2.15.0
- **PR #28750**：dotenv-expand 12.0.3 → 1000.0.0（大版本跳升）
- 链接：[PR #28746](https://github.com/google-gemini/gemini-cli/pull/28746) | [PR #28752](https://github.com/google-gemini/gemini-cli/pull/28752) | [PR #28749](https://github.com/google-gemini/gemini-cli/pull/28749) | [PR #28750](https://github.com/google-gemini/gemini-cli/pull/28750)


## 功能需求趋势

从今日活跃的 Issues 来看，社区诉求集中在以下几个方向：

| 方向 | 需求内容 | 代表 Issue |
|------|----------|------------|
| **子代理能力增强** | 允许代理间相互调用、自动调用自定义 Skills | #28738, #21968 |
| **组件级评估（Evals）** | 建立更健壮的组件级评测体系（已有 76 个行为评测用例，覆盖 6 个 Gemini 模型） | #24353 |
| **AST 感知工具链** | AST 感知的文件读取、搜索和代码库映射，提升大规模代码库操作效率 | #22745, #22746 |
| **静态分析集成** | 引入 tilth / glyph 等工具优化 `codebase_investigator` | #22746 |
| **浏览器代理韧性** | 自动会话接管和锁恢复，增强浏览器代理的容错能力 | #22232 |
| **记忆系统治理** | 自动记忆的确定性脱敏、低信号会话跳过策略、无效 patch 隔离 | #26522, #26523, #26525 |
| **破坏性行为管控** | 代理应主动阻止/劝阻破坏性 git 命令和危险资源操作 | #22672 |


## 开发者关注点

### 🚨 高频痛点

1. **代理稳定性仍是最大短板**
   - 通用代理挂起（#21409）、子代理误报成功（#22323）、shell 命令卡死（#25166）三大 P1 级问题在评论数上领先，说明当前代理功能的可靠性仍处于社区信任的临界点。

2. **配置与权限的"预期违背"**
   - 子代理绕过权限设置自动运行（#22093）、Browser Agent 忽略 settings.json 配置（#22267）等问题反映出代理行为与用户期望之间存在系统性偏差。

3. **工具数量膨胀带来的可用性危机**
   - 超过 128 个工具即触发 400 错误（#24246），而模型又不主动使用已有 skills（#21968），工具既"多用不了"又"少用不上"的矛盾值得重点关注。

### 🔍 观察

- 今日 PR 以依赖升级为主（74 项批量更新），实质性功能 PR 较少，社区目前可能正处于"修 bug、稳底盘"的阶段。
- `allow agents to call agents`（#28738）是一个值得持续跟踪的方向性 PR，它标志着代理架构从单层委派走向**多层协作**的演进起点。
- Auto Memory 系列问题（#26516~#26525）在 5 月集中提出后持续有更新，说明记忆系统正在经历"从有到优"的打磨期，安全和质量是当前重点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-10**


## 今日速览

过去 24 小时内无新版本发布和 PR 合并，但社区提交了 25 条 Issue 讨论。值得关注的是昨天集中涌入的 10+ 条 [triage] 标签新 Issue，预示着即将到来的 v1.0.x 系列新版本可能存在若干关键问题。当前热门话题集中在 **MCP 服务器连接稳定性与超时机制、并行工具调用导致的响应错乱、以及企业账号下模型可用性异常**。此外，多个高赞旧 Issue（如输入队列取消 #1857、/remote 非 GitHub 仓库支持 #2922）仍在持续获得关注，说明这些功能缺口尚未解决。


## 社区热点 Issues（Top 10）

### 1. 并行工具调用导致响应顺序错乱——AI 代理逻辑混乱的根源
[#4420] 并行工具调用非确定性响应顺序导致机器人困惑 | 创建: 2026-08-09 | 👍 0 | 💬 0

**标签**: triage

> Copilot harness 无法在并行工具调用时保持请求与响应的可靠关联，导致返回结果与原始请求不匹配，引发 AI 代理逻辑混乱。

**关注理由**: 这是影响 AI 代理正确性的严重缺陷，可能导致工具执行结果被错误关联，进而引发连锁反应。属于 triage 新提交，需重点跟进后续进展。此问题若属实，将直接影响依赖并行工具调用的高级 AI 工作流可靠性。

[GitHub Issue #4420](https://github.com/github/copilot-cli/issues/4420)


### 2. 企业账号下所有 Claude 模型突然不可用
[#4422] Claude 模型在 CLI 模型选择中被全部禁用 | 创建: 2026-08-09 | 👍 0 | 💬 0

**标签**: triage

> 使用个人企业账号时，昨日还能正常使用的所有 Claude 模型（sonnet 5、4.8 等）今天全部被禁用，即使在 GitHub Copilot 设置中显示已启用。回滚 CLI 版本依然无效，报错 "This model is disabled by your..."。

**关注理由**: 突发性服务降级问题，影响范围可能涉及所有企业账号用户。此类模型可用性问题通常与后端配置或策略推送有关，而非 CLI 本地问题，值得官方紧急排查。若此问题大规模存在，将严重影响企业用户的开发效率。

[GitHub Issue #4422](https://github.com/github/copilot-cli/issues/4422)


### 3. MCP 初始化超时机制存在严重缺陷——高失败率且无恢复机制
[#4421] MCP 初始化握手固定 60 秒预算且无重试——npx 启动的 stdio 服务器约 29% 会话失败且无法恢复 | 创建: 2026-08-09 | 👍 0 | 💬 0

**标签**: triage

> MCP initialize 握手使用硬编码的 60 秒超时，超时后 CLI 记录失败并**永不在该会话中重启该服务器**，无重试、无退避、无法调整预算。

**关注理由**: 近三分之一的会话因网络或启动慢而遭遇 MCP 服务器永久死亡，严重损害用户体验。考虑到 MCP 是 Copilot CLI 核心扩展机制，此缺陷会显著降低依赖外部 MCP 服务器的用户满意度，需要优先修复。

[GitHub Issue #4421](https://github.com/github/copilot-cli/issues/4421)


### 4. 探索子代理并行扇出导致模型限流（429）——无退避无自动切换
[#4416] 并行探索子代理扇出触发单模型 429 限流 | 创建: 2026-08-09 | 👍 0 | 💬 0

**标签**: triage

> 通过 task 工具并行启动多个子代理时，所有 explore 代理默认使用同一轻量模型（当前为 claude-haiku-4.5），该模型突发速率限制远低于其他模型，导致大量 429 错误。尽管存在 `eligibleForAutoSwitch` 属性，系统却无自动切换机制。

**关注理由**: 涉及自动模式的核心性能瓶颈。并行子代理是提高效率的关键手段，但当前实现会因模型限流而适得其反。此问题影响自动模式的扩展性和可靠性。

[GitHub Issue #4416](https://github.com/github/copilot-cli/issues/4416)


### 5. 会话创建时初始提示被静默丢弃——工作树已创建但代理从未收到消息
[#4423] 新会话创建时初始提示被静默丢弃——工作树已配置但代理从未收到消息 | 创建: 2026-08-09 | 👍 0 | 💬 0

**标签**: triage

> 从应用中创建新会话时，git 工作树、分支和 CLI 会话均成功配置，但初始提示从未传递给代理。会话永远闲置，无任何助手响应，提示文本丢失。

**关注理由**: 这是一个严重的静默失败缺陷，用户输入的提示词会无提示丢失，导致会话完全不可用。作为数据丢失类问题，其优先级应该较高。

[GitHub Issue #4423](https://github.com/github/copilot-cli/issues/4423)


### 6. 输入队列无法取消——已入队消息必须等待执行完毕
[#1857] 允许用户在消息执行前取消或移除已入队的消息 | 创建: 2026-03-05 | 👍 26 | 💬 9

**标签**: area:input-keyboard

> 当代理忙碌或执行 `/compact` 时，通过 `Ctrl+Q` / `Ctrl+Enter` 入队的消息**无法取消或删除**。一旦入队，消息将按顺序自动执行，即使用户改变主意也无法阻止。

**关注理由**: 持续 5 个月的高赞（+26）功能请求，社区呼声很高。交互设计上的明显缺失可能导致用户误操作后无法挽回，尤其在执行成本高昂的 AI 操作时，此问题更显突出。

[GitHub Issue #1857](https://github.com/github/copilot-cli/issues/1857)


### 7. /remote 不支持非 GitHub 仓库——GitLab/Bitbucket 用户被排除
[#2922] 功能请求：/remote 应支持非 GitHub Git 仓库（如 GitLab、Bitbucket） | 创建: 2026-04-23 | 👍 2 | 💬 1

**标签**: area:sessions

> 在 GitLab 或其他非 GitHub 仓库中使用 `/remote` 时报错 `Remote session disabled: not in a GitHub repository`。建议远程会话功能应独立于 Git 托管平台。

**关注理由**: 功能扩展需求，反映 Copilot CLI 用户群体的 Git 平台多样性需求。虽然当前关注度不算高，但若官方希望扩大用户覆盖面，这是值得考虑的功能方向。

[GitHub Issue #2922](https://github.com/github/copilot-cli/issues/2922)


### 8. 组织仓库无法使用 /remote——报 "could not resolve repository"
[#2751] 在组织仓库中使用 /remote 时报 "could not resolve repository" | 创建: 2026-04-16 | 👍 13 | 💬 8

**标签**: area:agents, area:enterprise

> Copilot CLI v1.0.28 在 GitHub 组织拥有的仓库中运行 `/remote` 命令时，报错 `Remote session disabled: could not resolve repository`。

**关注理由**: 高赞（+13）企业级功能缺陷，影响组织用户的远程会话能力。4 个月未解决说明该问题可能涉及 GitHub 组织权限模型的复杂性，是企业客户关键痛点之一。

[GitHub Issue #2751](https://github.com/github/copilot-cli/issues/2751)


### 9. sessionStart Hook 不触发——插件机制可靠性受质疑
[#1730] .github/hooks/ 中的 sessionStart hook 在 Copilot CLI v0.0.420 中不触发 | 创建: 2026-02-28 | 👍 3 | 💬 7

**标签**: area:plugins

> 在 Windows 11 / PowerShell 7 环境下，`.github/hooks/*.json` 中定义的 `sessionStart` 钩子在启动 Copilot CLI 会话时不执行。

**关注理由**: 涉及插件机制的核心可靠性问题。Hook 系统是 Copilot CLI 扩展性的重要组成部分，如果基础 Hook 都无法保证执行，将影响所有依赖 Hook 的自定义工作流。此 Issue 积压 5 个月未解决，说明该 hook 机制可能非当前版本核心维护方向。

[GitHub Issue #1730](https://github.com/github/copilot-cli/issues/1730)


### 10. MCP OAuth 3LO 授权流程失败——企业网关场景受限
[#4371] MCP OAuth 3LO（授权码模式）报错 -32042：此请求需要更多信息 | 创建: 2026-08-05 | 👍 0 | 💬 0

**标签**: area:authentication, area:mcp

> 连接配置了 OAuth 3LO（授权码授权）目标的 MCP 网关时，工具调用因客户端不支持所需的 URL 引导而失败，报错 -32042。客户端应引导用户打开 URL 进行认证。

**关注理由**: 影响企业场景下使用 OAuth 保护 MCP 服务的需求。随着 MCP 生态发展，OAuth 3LO 将成为标配认证方式，Copilot CLI 需补齐此支持。

[GitHub Issue #4371](https://github.com/github/copilot-cli/issues/4371)


## 重要 PR 进展

过去 24 小时内无 PR 活动和合并记录。建议关注上游仓库的下一步动态。

## 功能需求趋势

从今日 Issues 中提炼出的社区关注方向：

1. **MCP 生态成熟度提升**：多个 Issue 涉及 MCP 服务器初始化超时、OAuth 3LO 认证、FastMCP 兼容性问题、MCP 配置策略等。这表明 Copilot CLI 正被广泛应用于各类 MCP 服务器，社区对 MCP 连接的稳定性和安全性提出了更高要求。

2. **并行与自动模式的可靠性**：并行子代理限流、并行工具调用顺序错乱、初始提示静默丢弃等问题直指自动模式在高负载场景下的稳定性短板。社区不仅需要功能存在，更需要其在复杂场景下可靠运行。

3. **模型可用性与自主选择**：企业账号中 Claude 模型不可用、模型目录缺失、Auto-mode 想要设置模型强度范围和偏向——社区希望更精细地控制使用的模型，同时要求模型可用性的一致性，避免突然变更。

4. **输入交互体验优化**：取消入队消息、改进提示输入界面、可配置 HUD——用户对交互细节的关注度很高，希望 CLI 提供更流畅、更可控制的对话体验。

5. **远程会话与多平台支持**：非 GitHub 平台的 `/remote` 支持、组织仓库远程控制——远程会话功能是企业用户重点关注的方向，需要适配更多使用场景。


## 开发者关注点

| 痛点/需求 | 相关 Issue | 出现频次 |
|---|---|---|
| **模型不可用/被禁用**（企业账号下 Claude 模型全部不可用） | #4422, #4390, #4421 | 3 次 |
| **MCP 连接失败/超时**（初始化超时、FastMCP 兼容、OAuth 失败） | #4421, #4370, #4371, #4408 | 4 次 |
| **并行/子代理执行异常**（限流、响应错乱、卡死） | #4416, #4420, #4306 | 3 次 |
| **远程会话受限**（非 GitHub 仓库、组织仓库解析失败、企业策略静默禁用） | #2922, #2751, #4409 | 3 次 |
| **静默失败/消息丢失**（初始提示丢弃、无操作反馈） | #4423, #4409 | 2 次 |
| **输入体验**（无法取消队列、提示符编辑器改进、HUD 可配置） | #1857, #4417, #4418 | 3 次 |
| **Bug：Explore 子代理的默认模型是唯一受限的模型，无退避、无自动模型切换，尽管存在 `eligibleForAutoSwitch`** 标记 | — | — |

**核心观察**：

1. **MCP 稳定性是当前最大痛点**：从超时机制到 OAuth 认证，MCP 相关 Issue 数量多且覆盖面广，说明 Copilot CLI 的 MCP 支持已进入实际使用阶段，但稳定性有待提升。

2. **自动模式（Autopilot）的可靠性问题集中爆发**：子代理并行执行导致的限流和卡死，直接影响了自动模式的核心价值主张。解决这些问题将是提升用户体验的关键。

3. **企业用户的模型可见性异常**：多个 Issue 反映模型在设置中显示已启用但 CLI 中不可用。这类"幽灵配置"问题容易造成信任危机，建议官方排查模型目录同步机制。

4. **数据丢失类问题优先级应提升**：初始提示词被静默丢弃（#4423）和消息无法取消（#1857）都可能导致用户工作成果丢失或不可控，建议官方优先处理。

---

*本日报由 AI 自动生成，数据来源于 GitHub Public API。部分 Issue 为 24 小时内新提交，尚未获得社区大量讨论，但因其描述的问题严重性而被收录。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-10** | **数据来源：** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)


## 今日速览

今日社区动态虽无新版本发布，但两个关键议题热度不减：一是社区呼声极高的**跨会话持久记忆系统**（Issue #1283）已积累 27 条讨论，功能优先级有望提升；二是曝出 **ACP 模式下流式响应静默挂死**的严重稳定性隐患（Issue #2598），涉及连接无超时及数据落盘缺陷，建议相关用户关注并复现反馈。此外，Google GenAI 与 MCP 工具的兼容性修复 PR（#739）仍在推进中。


## 社区热点 Issues

### 1. [feature] 记忆系统 - 跨会话持久上下文（#1283）
- **作者**：CatKang | **更新**：08-09 | **评论**：27 | 👍 0
- **重要性**：社区高频诉求，支持 AI 自动管理笔记与用户手动指令的持久化记忆，覆盖项目模式与用户偏好，是提升 CLI 智能化水平的核心能力。
- **社区反应**：27 条评论持续深入讨论机制设计与场景边界。
- **链接**：[Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### 2. [bug] ACP 流式响应静默挂死（#2598）
- **作者**：ai-agent-workbench | **创建/更新**：08-09 | 评论：0 | 👍 0
- **重要性**：0.34.0 在 ACP 模式下存在连接挂死、被顶替轮次的数据不写入 wire.jsonl 的严重问题，无空闲超时兜底，直接影响自动化集成的数据完整性与可靠性。
- **社区反应**：新提交 Issue，暂无评论，等待官方复现确认。
- **链接**：[Issue #2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)


## 重要 PR 进展

### 1. [fix] 去除 Google GenAI 工具参数的 JSON Schema 元数据（#739）
- **作者**：xiaoju111a | **更新**：08-09 | 👍 0
- **功能**：修复 Google GenAI 提供商与含标准 JSON Schema 元数据字段的 MCP 工具（如 Exa MCP）之间的兼容性校验错误。
- **链接**：[PR #739](https://github.com/MoonshotAI/kimi-cli/pull/739)


## 功能需求趋势

- **持久化记忆系统**：社区最强烈呼声，期望实现跨会话的自动+手动上下文记忆（Issue #1283）。
- **ACP 协议稳定性**：关于流式响应挂死与数据落盘的稳定性问题开始凸显，自动化场景可靠性成为新关注点。
- **多提供商工具兼容性**：Google GenAI 与 MCP 工具的 JSON Schema 兼容问题暴露，跨平台工具链的标准化适配需求上升。


## 开发者关注点

- **可靠性痛点**：ACP 模式下无空闲超时、挂死轮次数据丢失，严重影响脚本化/自动化使用的信任度，期待官方加入超时机制与日志兜底。
- **记忆与上下文管理**：跨会话记忆是提效刚需，开发者希望在不牺牲性能的前提下灵活控制记忆粒度与持久化策略。
- **工具链互通**：MCP 工具在不同模型提供商间的参数标准不统一，带来配置摩擦，社区期待更透明的兼容层或诊断支持。

---
*日报生成时间：2026-08-10 | 涵盖过去 24 小时 GitHub 动态*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-10

> 数据来源：github.com/anomalyco/opencode | 截至 2026-08-10 更新


## 今日速览

**OpenCode Go 网关层出现 `deepseek-v4-flash` 模型名被注入前导空格的严重故障，多个用户报告 HTTP 400 错误，已确认修复未生效。** 此外，社区对 **原生模型回退/故障转移** 功能的呼声高涨（👍 107），TUI 复制粘贴故障与 Xcode 27 集成问题仍是焦点。多个核心修复 PR 已进入合入流程。


## 社区热点 Issues

### 1. [#4283] 复制到剪贴板功能失效 — 最高热度问题
- **作者**: maheshmuttintidev | **评论**: 122 | **👍**: 110
- **状态**: OPEN — 持续发酵中
- **摘要**: 用户无法从 AI 回复中复制文本到剪贴板，已在多版本复现，影响面大。
- **链接**: https://github.com/anomalyco/opencode/issues/4283

### 2. [#7602] [FEATURE] 原生模型回退/故障转移支持 — 高票功能请求
- **作者**: arisgrout | **评论**: 29 | **👍**: 107
- **状态**: OPEN
- **摘要**: 希望能定义“模型 A 失败/限流 → 自动切换到模型 B”的策略。当前仅支持同 ID 的 Provider 回退，无法跨模型，导致长任务易中断。
- **链接**: https://github.com/anomalyco/opencode/issues/7602

### 3. [#785] 请求禁用流式模式
- **作者**: SimonWai | **评论**: 29 | **👍**: 38
- **状态**: OPEN — 历史遗留高赞问题
- **摘要**: 某些代理提供商（如 Credal OpenAI Proxy）不支持 streaming，导致调用失败，希望提供开关。
- **链接**: https://github.com/anomalyco/opencode/issues/785

### 4. [#12472] 原生 Claude Code Hooks 兼容性
- **作者**: ArtyMcLabin | **评论**: 17 | **👍**: 38
- **状态**: OPEN
- **摘要**: 已兼容 Claude Code 的 rules/skills，但 `PreToolUse`/`PostToolUse`/`Stop` 钩子仍未支持，影响从 Claude Code 迁移的用户。
- **链接**: https://github.com/anomalyco/opencode/issues/12472

### 5. [#34743] Xcode 27 集成忽略模型配置
- **作者**: velouria | **评论**: 15 | **👍**: 0
- **状态**: OPEN
- **摘要**: 通过 Xcode 27 beta 的 ACP 调用 opencode 时，忽略 `opencode.json` 中的模型设置，固定使用默认模型 `big-pickle`。
- **链接**: https://github.com/anomalyco/opencode/issues/34743

### 6. [#13715] 子代理权限请求静默挂起
- **作者**: ro-hansolo | **评论**: 11 | **👍**: 24
- **状态**: OPEN
- **摘要**: 当子代理嵌套调用时需要权限确认时，提示不显示，会话永久挂起。已定位到 TUI 的 `children()` 记忆化问题。
- **链接**: https://github.com/anomalyco/opencode/issues/13715

### 7. [#30221] OpenCode Go 订阅持续报 "terminated" 错误
- **作者**: healerovski | **评论**: 9 | **👍**: 4
- **状态**: OPEN
- **摘要**: Go 订阅下所有会话都会以未知错误 "terminated" 终结，但直连 Deepseek/Z.AI 无此问题，疑似网关侧缺陷。
- **链接**: https://github.com/anomalyco/opencode/issues/30221

### 8. [#39838] DeepSeek V4 Flash 突然不可用
- **作者**: shanyan-wcx | **评论**: 9 | **👍**: 11
- **状态**: CLOSED（疑似已被 #41306/#41314 系列问题覆盖）
- **链接**: https://github.com/anomalyco/opencode/issues/39838

### 9. [#27361] headless 模式下模型 options 未转发
- **作者**: R8CEH | **评论**: 6 | **👍**: 4
- **状态**: CLOSED
- **摘要**: `@ai-sdk/openai-compatible` 自定义提供商在 `opencode run --format json` 下会丢弃 `reasoning.effort` 等选项。
- **链接**: https://github.com/anomalyco/opencode/issues/27361

### 10. [#24649] OpenCode Go：澄清自托管与第三方代理模型（已关闭）
- **作者**: Mikkelka | **评论**: 18 | **👍**: 32
- **状态**: CLOSED
- **摘要**: 社区对 Go 订阅文档中“基础设施声明”存疑，要求明确哪些模型自托管、哪些由第三方转发。
- **链接**: https://github.com/anomalyco/opencode/issues/24649


## 重要 PR 进展

### 1. [#38067] 会话提醒：改为边缘触发构建切换提醒
- **作者**: Duo-Huang | **状态**: OPEN
- **内容**: 修复 `SessionReminders.apply` 全量扫描历史以判断“计划→构建”模式切换的方式，改为边缘触发，降低长会话开销。
- **链接**: https://github.com/anomalyco/opencode/pull/38067

### 2. [#37584] 限制提示循环中的连续溢出压缩周期
- **作者**: a692570 | **状态**: OPEN | **关联 Issue**: #27924
- **内容**: 限制 SessionPrompt 中上下文溢出后的压缩重试次数，避免死循环。
- **链接**: https://github.com/anomalyco/opencode/pull/37584

### 3. [#40427] 实验性渲染性能优化
- **作者**: Hona | **状态**: OPEN
- **内容**: 首屏渲染内存占用从 7.45 MB 降至 1.82 MB（**-75.5%**）。基准为不可变数据库快照 + 固定 24 小时语料窗口。
- **链接**: https://github.com/anomalyco/opencode/pull/40427

### 4. [#39358] 持久化会话归档
- **作者**: kitlangton | **状态**: OPEN
- **内容**: 为 V2 新增一等公民的会话归档操作：幂等记录 `session.archived` 时间戳，与删除操作解耦。
- **链接**: https://github.com/anomalyco/opencode/pull/39358

### 5. [#35976] `opencode web/serve` 新增 `--dir` 选项（合并前清理）
- **作者**: airvzxf | **状态**: CLOSED
- **内容**: 修复多个 Web 模式工作区相关 Issue 的根因（#24082、#30005、#31401），已进入合入流程。
- **链接**: https://github.com/anomalyco/opencode/pull/35976

### 6. [#41450] 为空 AI SDK Provider 错误派生回退消息
- **作者**: rekram1-node | **状态**: OPEN
- **内容**: `AI_APICallError` 有时只有结构化详情（如 `statusCode`）而 `message` 为空，导致 TUI 显示空白错误。此 PR 从状态码/响应头派生回退消息。
- **链接**: https://github.com/anomalyco/opencode/pull/41450

### 7. [#41455] TUI：附件路径加入模型上下文
- **作者**: cakeni | **状态**: OPEN | **关联 Issue**: #41454
- **内容**: 将本地图片附件的 `source.path`（文本）紧邻二进制图片插入上下文，方便需要路径的模型读取。
- **链接**: https://github.com/anomalyco/opencode/pull/41455

### 8. [#41452] 对齐 Copilot 响应延续逻辑
- **作者**: rekram1-node | **状态**: CLOSED
- **内容**: 对齐官方 VS Code Copilot 客户端的 stateless 响应延续：持久化完成态的 reasoning item ID、加密状态、处理多轮 tool_call_id。
- **链接**: https://github.com/anomalyco/opencode/pull/41452

### 9. [#40997] 核心层：集成提示替换为表单
- **作者**: rekram1-node | **状态**: OPEN
- **内容**: 用共享的 `Form.Fields` 定义替换 GitHub Copilot / Azure / Cloudflare 等集成专用提示 schema，密钥答案在 Core 侧完成校验并持久化为 Provider 配置。
- **链接**: https://github.com/anomalyco/opencode/pull/40997

### 10. [#41350] App：新增 BusyWave 动态加载指示器
- **作者**: Victozee26 | **状态**: OPEN
- **内容**: 将“Thinking”静态文本替换为 TUI 同款的动态波浪动画，同时保持显式“显示思考过程”时的可见性。
- **链接**: https://github.com/anomalyco/opencode/pull/41350


## 功能需求趋势

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **原生模型回退/故障转移** | #7602 | 👍 107 高票，连续数月上升 |
| **Claude Code 生态兼容** | #12472（hooks） | 👍 38，规则与技能已兼容，钩子系统成新缺口 |
| **禁用流式模式** | #785 | 👍 38 历史遗留，代理场景硬需求 |
| **会话/交互体验** | #38392（/clear）、#16226（仅按钮发送）、#25555（可回滚问答） | 多票分散但方向明确 |
| **多模态附件上传** | #31791（Q&A 工具拖拽图片） | 新功能，反馈集中在 question 工具 |
| **性能优化** | #40427（渲染）、#38067（提醒计算） | 大会话场景痛点 |
| **持久化进程/记忆** | #41453（daemon + 记忆召回） | 新提出，尚待讨论 |


## 开发者关注点

### 高优先级痛点

1. **OpenCode Go 网关稳定性** — `deepseek-v4-flash` 模型名前导空格故障(#41306/#41314)已在 8 月 8-9 日集中爆发，多个用户独立验证并修复未生效。直接调用与 Hermes 均受影响，且 Go 订阅整体出现 “terminated” 错误(#30221)。

2. **复制粘贴普遍故障** — 终端 TUI(#4283)与 VS Code 扩展(#39588)均受影响，Windows/macOS 双平台覆盖，已持续数个月，是当前评论与点赞双高的老问题。

3. **自定义 Provider 配置被静默丢弃** — 模型级 `options`（如 `reasoning.effort`）在 headless 模式(#27361)与自定义 `@ai-sdk/openai`(#41294)下均未转发，排障成本高。

4. **Windows 权限相关的挂起** — 非管理员运行 `opencode run`/TUI 会无限挂起(#41436)，管理员模式下正常，指向系统调用（如 shell 执行）的权限边界问题。

### 中频关注

5. **Xcode 27 集成被忽略** — ACP 路径下 `opencode.json` 模型设置失效(#34743)，固定使用默认模型。

6. **子代理权限确认丢失** — 嵌套子代理触发权限请求时 TUI 不渲染(#13715)，导致静默挂起。

7. **OpenCode Go 计费状态同步延迟** — Stripe 付款后订阅未激活、控制台仍显示“Subscribe”(#41430)。

---
*本日报由 AI 自动生成，数据检索时间 2026-08-10。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-10

> 数据来源：github.com/badlogic/pi-mono（实际指向 earendil-works/pi）

---

## 今日速览

今日社区迎来一波密集的 Issue 和 PR 更新，主要集中在 **TUI 渲染稳定性**（滚动跳变、超宽行崩溃）、**GitHub Copilot 登录限流**修复（两个独立 PR 提交）、以及 **扩展命令路由**与**发送消息 API 行为**的修正。此外，关于 **pi.dev 远端目录覆盖内置模型上下文窗口**（GLM-5.2 被错误限制为 262k）的 Bug 引发关注，反映出社区对模型元数据准确性的高要求。

---

## 社区热点 Issues（Top 10）

1. **#6922 [已关闭] 默认模型无法使用 llama.cpp 模型：启动时提示 "No models available"**
   - 作者：highlyunavailable | 评论：10 | 👍：14
   - 当 `defaultProvider` 设置为 llama.cpp 且默认模型位于 llama ini 配置中时，启动报错。共 14 个 👍，是近期关注度最高的问题。
   - https://github.com/earendil-works/pi/issues/6922

2. **#7730 [开启] macOS 长会话高 CPU 占用（50-110%）**
   - 作者：gterzian | 评论：6 | 👍：6
   - 与上下文大小或会话长度相关，内存占用 600-800MB。影响日常使用的性能问题，值得关注。
   - https://github.com/earendil-works/pi/issues/7730

3. **#7869 [已关闭] ai21 API 失效（410 Gone）**
   - 作者：Josako | 评论：2
   - AI21 旧 API 已退役，需迁移至 app.ai21.com 网关。影响正在使用 ai21 的用户。
   - https://github.com/earendil-works/pi/issues/7869

4. **#7870 [已关闭] pi.dev 远端目录覆盖内置 GLM-5.2 上下文窗口（262k 而非 1M）**
   - 作者：tcf909 | 评论：1
   - OpenRouter 实际支持 1M 上下文，但目录错误覆盖为 262k。模型元数据准确性直接关系用户体验。
   - https://github.com/earendil-works/pi/issues/7870

5. **#7868 [已关闭] TUI 渲染器在单行超出终端宽度时直接中止会话**
   - 作者：intelligentrascal | 评论：1
   - 应截断而非中止。已导致实际工作会话中断，渲染层健壮性问题。
   - https://github.com/earendil-works/pi/issues/7868

6. **#7861 [已关闭] 流式输出长文本时滚动位置反复跳回**
   - 作者：jingyulong | 评论：1
   - 流式输出期间无法阅读历史内容。与 #7730、#7616 同属 TUI 滚动/渲染问题群。
   - https://github.com/earendil-works/pi/issues/7861

7. **#7860 [已关闭] 桌面宿主关闭 stdout 管道导致 EPIPE 崩溃（0.84.1）**
   - 作者：speak010 | 评论：1
   - 修复 PR #5183 从未合并。外部集成场景的稳定性问题。
   - https://github.com/earendil-works/pi/issues/7860

8. **#7859 [已关闭] 扩展命令无法通过 sendUserMessage 触发（文档模式失效）**
   - 作者：softpudding | 评论：1
   - 文档中描述的自重载模式失效，扩展开发者的关键路径。
   - https://github.com/earendil-works/pi/issues/7859

9. **#7855 [已关闭] 随机出现 "Response was truncated before completion."**
   - 作者：rolznz | 评论：1
   - 在 VLLM 本地推理时随机出现，OpenAI 兼容 API 都可能触发。需手动提示继续，影响自动化流程。
   - https://github.com/earendil-works/pi/issues/7855

10. **#7848 [已关闭] 自动压缩（Auto-compaction）中断活动任务而非恢复**
    - 作者：jagadeepmamidi | 评论：1
    - 压缩后任务不自动继续。长任务场景下的关键可靠性问题。
    - https://github.com/earendil-works/pi/issues/7848

---

## 重要 PR 进展（Top 10）

1. **#7872 [已关闭] feat(coding-agent): 会话启动时暴露上下文文件**
   - 在 `session_start` 事件中暴露 AGENTS/CLAUDE 上下文文件，并补充文档与测试。面向扩展开发者的功能增强。
   - https://github.com/earendil-works/pi/pull/7872

2. **#7866 [已关闭] feat(tui): 增加 copyOnSelect 选项**
   - 新增 `copyOnSelect` 选项，允许用户禁用全屏 TUI 模式下选中即复制的行为。直接回应 #7720 的功能请求。
   - https://github.com/earendil-works/pi/pull/7866

3. **#7865 [已关闭] fix(tui): SelectList 与模型选择器支持 PageUp/PageDown**
   - 为基础 SelectList 组件补充 `tui.select.pageUp/pageDown` 键位处理，修复多个选择器缺失翻页的问题。
   - https://github.com/earendil-works/pi/pull/7865

4. **#7858 [已关闭] fix(coding-agent): 无论 expandPromptTemplates 设置如何均路由扩展命令**
   - 修复 `sendUserMessage()` 因 `expandPromptTemplates: false` 跳过扩展命令处理的问题，使文档中的模式真正可用。
   - https://github.com/earendil-works/pi/pull/7858

5. **#7857 [开启] feat(agent): 在 sendUserMessage 中暴露 expandPromptTemplates**
   - 为 toilet-pi 等项目提供触发扩展命令的能力。与 #7858 互补，目前仍在开放状态。
   - https://github.com/earendil-works/pi/pull/7857

6. **#7851 [已关闭] fix(provider): GitHub Copilot 模型策略顺序启用**
   - 将并发策略请求改为顺序执行，避免组织拥有大量模型时触发 429 限流。直接修复 #7850。
   - https://github.com/earendil-works/pi/pull/7851

7. **#7844 [已关闭] 登录期间阻止批量策略更新**
   - 移除登录时的批量模型启用，改为通过 Copilot Chat 显式启用。与 #7851 是同一问题的两个独立解法。
   - https://github.com/earendil-works/pi/pull/7844

8. **#7856 [已关闭] fix(ai): 修复验证期间 JSON 序列化结构工具参数**
   - 修复嵌套工具参数被双重序列化为字符串时的验证失败问题，避免多余的 "must be object" 硬失败。
   - https://github.com/earendil-works/pi/pull/7856

9. **#7344 [已关闭] feat(protocol): 新增远程会话线协议**
   - 新增 `@earendil-works/pi-protocol` 包：传输无关的远程会话命令/事件/快照/错误定义、有界 CBOR 编码与增量长度前缀分帧。为远程会话能力奠基。
   - https://github.com/earendil-works/pi/pull/7344

10. **#7072 [已关闭] fix(coding-agent): 缓存 llama.cpp 模型目录**
    - 修复 #6948：默认模型启动时未生效的竞态条件。llama.cpp 用户的启动体验修复。
    - https://github.com/earendil-works/pi/pull/7072

---

## 功能需求趋势

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **TUI 交互体验** | #7720（禁用选中复制）、#7852（鼠标点击跳转光标）、#7865（PageUp/PageDown） | 社区对 TUI 交互细节的要求持续升温，包括复制行为可配置、鼠标操作支持、翻页导航等 |
| **模型支持与元数据** | #7870（GLM-5.2 上下文窗口）、#7847（Qwen Token Plan 中国版）、#7867（Codex buffer 溢出识别） | 新模型接入与元数据准确性并重，社区要求 Pi 正确识别各模型的真实能力边界 |
| **扩展生态** | #7859（扩展命令触发）、#7872（上下文文件暴露）、#7740（/reload 后自定义渲染失效） | 扩展开发者对文档承诺的行为一致性要求高，期望文档模式真实可用 |
| **会话可靠性** | #7848（自动压缩中断任务）、#7855（响应截断）、#7860（EPIPE 崩溃） | 长会话/自动化场景下的可靠性问题集中爆发，成为社区最关注的主题之一 |
| **远程/外部集成** | #7344（远程会话协议）、#7860（外部宿主管道） | Pi 作为外部 agent 被嵌入桌面宿主或远程使用的场景增多，对协议层与管道健壮性提出要求 |

---

## 开发者关注点

- **TUI 滚动与渲染稳定性是当前最大痛点**：#7861、#7868、#7730、#7616 形成了完整的"滚动跳变—超宽行崩溃—高 CPU—视图跳动"问题链，多名用户报告真实工作会话被中断。开发者普遍期望在流式输出和工具输出较长时，阅读历史内容的体验不被破坏。
- **GitHub Copilot 登录限流（HTTP 429）**在组织用户中触发频繁，两个 PR（#7851、#7844）分别从"顺序启用策略"和"登录期间不启用策略"两个角度修复，说明社区对登录流程的并发请求设计有共识性不满。
- **扩展命令路由不一致**是一个典型的"文档与实现脱节"问题，`sendUserMessage` 无法触发扩展命令，直接导致依赖此模式的扩展无法正常工作，社区期待尽快统一行为。
- **模型目录的远端覆盖机制缺少保护**：pi.dev 远端目录能静默覆盖内置元数据（如 GLM-5.2 的上下文窗口），且无用户可见提示，开发者呼吁增加本地优先或差异提示机制。
- **多个 PR 提交后即被关闭（auto-closed）**的现象（如 #7845、#7823）引发注意，开发者对贡献流程的透明度和关闭原因说明有进一步期待。

---

> 日报完。数据窗口：2026-08-09 至 2026-08-10。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-10

## 今日速览

今日发布新版 `v0.21.8-nightly.20260810`，新增 Qoder 插件扩展支持。社区方面，关于**多会话原生协调（RFC #8718）**与**MCP Streamable HTTP 可选流 404 导致连接中断（#8784）**的讨论最为活跃；同时，多项 E2E 测试不稳定问题及 `/review` 命令预算管理缺陷的修复正在推进中。

---

## 版本发布

### v0.21.8-nightly.20260810.55e20db328
- **核心功能**：支持 Qoder 插件扩展（PR #8661）
- **CI 工程**：为 Issue 自动分配领域负责人（auto-assign issues to area owners）

> 说明：昨日 nightly（v0.21.8-nightly.20260809）曾因 `integration_none`/`integration_docker` 任务失败而发布中断（Issue #8771），今日已恢复。

---

## 社区热点 Issues（Top 10）

### 🔥 高热度讨论

**1. RFC: 独立 Qwen 会话的原生协调机制（#8718）**
- 作者：yiliang114 ｜ P2 ｜ 8 条评论
- 提出由 leader 会话调度 2–3 个独立 worker 会话，观察运行状态并收集结构化结果，面向多代理协作与后台自动化。
- **价值**：直指多代理协作的核心痛点，为后续 Multi-Agent 路线提供基础。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/8718)

**2. Streamable HTTP 可选 GET/SSE 流被 404 后导致整个 MCP 连接中断（#8784）**
- 作者：kenshin1986 ｜ P2 ｜ 5 条评论
- 当 MCP 服务器拒绝可选的通知流端点时，Qwen Code 客户端未做降级处理，直接中断整条连接。
- **价值**：MCP 协议边界场景真实 bug，影响面大。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/8784)

### 🐛 Bug 与稳定性

**3. Windows 独立安装器因 PowerShell 无法解析 Get-FileHash 失败（#7118）**
- 作者：Loongtech ｜ P2 ｜ 6 条评论 ｜ 👍 3
- SHA-256 校验步骤在特定 PowerShell 环境下失败，导致安装中断并提示回退 npm 安装。
- **价值**：Windows 用户高频问题，社区点赞最多，欢迎 PR。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/7118)

**4. `npm test` 无法启动：未知 flag 报错（#8721）**
- 作者：imrehg ｜ P2 ｜ 5 条评论
- 本地 `make test` 因 `NODE_OPTIONS` 传递方式问题报 `EUNKNOWN` 错误，阻塞测试流程。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/8721)

**5. SDK bug：未识别的诊断事件篡改并驱逐会话状态（#8823）**
- 作者：zjunothing ｜ P2 ｜ 3 条评论
- 未知 daemon 事件经 `appendStatusBlock()` 进入共享 transcript reducer，可能被误渲染或导致状态丢失。
- **价值**：影响 SDK 层数据完整性，Web Shell 等渲染器均受波及。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/8823)

**6. Web 终端（xterm）中 TUI 持续闪烁/撕裂（#8659）**
- 作者：LelandJin ｜ P3 ｜ 4 条评论 ｜ 欢迎 PR
- 默认 `useTerminalBuffer` 全屏重绘导致阿里云 Workbench 等 Web 终端渲染异常。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/8659)

### 🚀 功能提案

**7. 直接外部上下文提供者配置（#7585）**
- 作者：doudouOUC ｜ P3 ｜ 12 条评论
- 提议为私有多仓集成增加“直接外部上下文提供者”配置，支持按需/自动召回两种模式。
- **价值**：企业级上下文管理方向，评论数最高。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/7585)

**8. 企业级外部记忆集成配置（#7449）**
- 作者：doudouOUC ｜ P3 ｜ 7 条评论
- 提出厂商无关的企业外部记忆集成方案，强调文档优先、兼容性测试增量推进。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/7449)

**9. 基于工作流引擎重建 `/review` 第 3–5 步编排（#8769）**
- 作者：wenshao ｜ P2 ｜ 4 条评论
- 将 agent 扇出、验证与反向审计从模型驱动迁移至 workflow 引擎，实现确定性代码编排。
- **价值**：提升 review 稳定性、可观测性。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/8769)

**10. 大会话恢复超时时保留当前会话（#8678）**
- 作者：doudouOUC ｜ P1 ｜ 2 条评论
- 已合并 PR #8691（修复恢复超时安全与可观测性），本 Issue 持续追踪后续改进。
- [查看讨论](https://github.com/QwenLM/qwen-code/issues/8678)

---

## 重要 PR 进展（Top 10）

**1. [CLOSED] 修复测试：后台 shell 测试不再共享固定 /tmp 路径（#8813）**
- 作者：wenshao ｜ 已合并
- 解决 `backgroundShellRegistry.test.ts` 因共享 `/tmp/s1.output` 导致的跨 worker/CI 串扰。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8813)

**2. [OPEN] 在所有 OpenAI 兼容 Provider 上拦截 thinking-tag 泄漏（#8818）**
- 作者：yiliang114
- 将思考标签泄漏防御扩展至所有 OpenAI 兼容端点，关闭两条已知绕过路径。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8818)

**3. [OPEN] ACP 会话采用 Goal v3 运行时（#8732）**
- 作者：qqqys
- 统一 ACP/Web Shell 与 CLI 的 Goal 实现，支持完整生命周期管理。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8732)

**4. [OPEN] 修复 `/review` 发布评论可读性（#8825）**
- 作者：wenshao
- 重新组织评论为段落结构，修复预算缺口解析器的占位符绕过。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8825)

**5. [OPEN] 支持虚拟子代理 ID 含保留字符（#8717）**
- 作者：carffuca
- 允许 agent 任务 ID 包含 `:` 与 `/`，经 UTF-8 Base64URL 无损往返。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8717)

**6. [OPEN] 为 daemon 会话增加可轮询的 turn 状态端点（#8682）**
- 作者：BenGuanRan
- 新增 `GET /session/:sessionId/turns/:promptId` 与 `/turns/current`，支持轮询回合生命周期。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8682)

**7. [OPEN] Web Shell 以 daemon 为权威源协调回合中消息（#8798）**
- 作者：ytahdn
- 按稳定消息 ID 对齐会话队列，刷新或切换会话后恢复待发消息。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8798)

**8. [OPEN] 保证 `compose-review` 在反向审计预算用尽时存活（#8791）**
- 作者：wenshao
- 引入 compose floor（默认 20 分钟），确保 review 输出与提交在截止前完成。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8791)

**9. [OPEN] Web Shell 增加模型特定推理控制（#8675）**
- 作者：callmeYe
- 内置推理控制注册表，跨 Core/ACP/Daemon/SDK/WebShell 统一配置 Thinking 与 Effort 分级。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8675)

**10. [CLOSED] 保留延迟工具发现时的 Prompt 缓存（#8276）**
- 作者：DragonnZhang ｜ 已合并
- 延迟工具发现期间保持主会话的工具声明与系统提示缓存稳定，通过 `deferred_tool_call` 桥接后续调用。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8276)

---

## 功能需求趋势

| 方向 | 代表 Issue/PR | 热度 |
|------|--------------|------|
| **多 Agent/多会话协作** | #8718（会话协调）、#8769（review 编排）、PR #8732（Goal v3） | 🔥🔥🔥 |
| **MCP 生态完善** | #8784（SSE 流容错）、#7585（上下文提供者） | 🔥🔥🔥 |
| **企业级记忆/上下文管理** | #7449（外部记忆）、#7585（外部上下文） | 🔥🔥 |
| **稳定性与可观测性** | #8678（会话恢复）、PR #8682（turn 状态）、PR #8791（review 预算） | 🔥🔥 |
| **Web Shell 体验** | PR #8796（进度）、#8780（子代理行）、PR #8675（推理控制） | 🔥 |
| **模型推理控制** | PR #8675（Thinking/Effort 分级） | 🔥 |
| **本地移动访问** | #8595（二维码配对，已关闭但值得关注） | 🔥 |

---

## 开发者关注点

1. **E2E 测试稳定性堪忧**：多起 CI 失败集中在 `cli/monitor.test.ts`、`extensions-install.test.ts`，且反复出现相同签名（#8822、#8799、#8766），社区正在通过修复 fixture 路径（#8813）与安装 tmux/zip 依赖（#8792）等手段积极止血。

2. **`/review` 命令高投入、高关注**：连续 4 个 PR（#8825、#8778、#8791、#8769）围绕预算缺口、评论格式、编排确定性展开，说明该功能正处于密集打磨期。

3. **Windows 安装仍是痛点**：安装器在 PowerShell 环境下失败问题已持续数周且获多点赞，提示团队需对 Windows 脚本做更弹性的兼容处理。

4. **MCP 集成精度要求提升**：开发者不再满足于基础握手，开始关注可选端点失败、上下文提供等边界场景，意味着 SDK 层容错需增强。

5. **Session/状态一致性是核心诉求**：从 #8823（transcript 状态驱逐）到 #8798（消息协调），社区对 daemon 与前端状态同步的可靠性关注度显著上升。

---

*本日报由 Qwen Code 社区数据自动生成，数据截止时间为 2026-08-10 12:00 UTC。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-10** | **数据来源：** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

> 说明：当前仓库已更名为 **CodeWhale**（原 DeepSeek-TUI），以下内容基于该仓库最新数据整理。

---

## 1. 今日速览

今日社区动态聚焦于 **v0.9.6 发布筹备**：三条 release 相关 PR 密集合入，涵盖发布顺序校验、CNB 资产下载 URL 修复及版本准备。功能层面，社区持续高度关注 **上下文压缩（Compaction）策略**、**多 Provider API Key 管理** 和 **TUI 与 CLI 控制面一致性**，中文翻译讨论也有较高热度。此外，`dependabot` 提交了 `jsonschema` 依赖升级 PR，技术债务清理稳步推进。

---

## 2. 版本发布

**无新版本 Release（过去 24 小时）**。但 PR #5313 已合入 `chore(release): prepare v0.9.6`，v0.9.6 即将发布。

根据 PR #5313 描述，v0.9.6 为 **“减法式”运行时发布**，核心调整包括：

- 移除 harness 引入的阻塞干扰，同时保留显式预算、截止时间、取消和真实 provider 状态
- 重构 Compaction 为 **单一 provider 汇总 + 提交后继交接（successor handoff）** 模式，避免邮箱冻结问题

---

## 3. 社区热点 Issues（Top 10）

### ① [CLOSED] v0.9.3: Fleet model classes, loadout auto, and semantic route roles
- **Issue #3205** | 评论 13 | 👍 0
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/3205)
- **重要性**：Fleet 自动负载解析是 TUI/CLI/子代理统一模型选择器的基石，社区讨论热度最高。
- **社区反应**：聚焦于 loadout 解析应面向角色/槽位整体计算，而非单一模型字符串。

### ② [CLOSED] v0.9.3: define CLI/TUI parity for subagent and runtime control surfaces
- **Issue #4022** | 评论 9 | 👍 0
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/4022)
- **重要性**：确保子代理控制和运行时操作不被困在 TUI 中，为未来云应用/远程工作区铺路。

### ③ [OPEN] Discussion: The Chinese Translation of "Constitution" — "宪法" or "协作准则"?
- **Issue #4949** | 评论 8 | 👍 0
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/4949)
- **重要性**：社区对“Constitution”中文译法存在分歧，涉及术语准确性与政治敏感性，中文母语者讨论活跃。

### ④ [OPEN] Switching providers can retain an unrelated default model
- **Issue #5034** | 评论 4 | 👍 0 | *今日更新*
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5034)
- **重要性**：Provider 切换时默认模型解析不一致（如切换到 OpenAI 仍保留 `gpt-5.5`），影响多 Provider 工作流可靠性。

### ⑤ [OPEN] Compaction gain not visible
- **Issue #5096** | 评论 4 | 👍 0 | *今日更新*
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5096)
- **重要性**：用户报告 `/compact` 命令显示成功，但 token 计数无变化，压缩收益不可见，直接影响长会话体验。

### ⑥ [OPEN] TUI: make deny-by-default approval selection configurable and clearly explained
- **Issue #5293** | 评论 4 | 👍 1
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5293)
- **重要性**：v0.9.4 起权限弹窗默认高亮“拒绝”项，可能使用户误操作。社区建议改为可配置，保证向后兼容。

### ⑦ [OPEN] v0.9.5: unified tasks surface (shell + subagents + durable workers)
- **Issue #5270** | 评论 3 | 👍 0 | *今日更新*
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5270)
- **重要性**：统一后台任务视图是 v0.9.5 的大方向，目标覆盖 shell、子代理、Fleet/lane workers 和 workflow 运行。

### ⑧ [OPEN] Compaction: publish and enforce a structured survival contract
- **Issue #4394** | 评论 3 | 👍 0 | *今日更新*
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/4394)
- **重要性**：要求明确 Compaction 后哪些信息必须保留，是解决 #5096、#5239 等压缩相关问题的根本方案。

### ⑨ [OPEN] File (action=edit) silently accepts wrong parameter names and reports fake success
- **Issue #5209** | 评论 3 | 👍 0
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5209)
- **重要性**：`File` 工具 `edit` 模式接受错误参数名（如 `new_str`）却返回成功，导致每次编辑需重复 3-5 次，严重损害可靠性。

### ⑩ [CLOSED] Unknown model ids silently degrade to the 128K legacy context default
- **Issue #5244** | 评论 3 | 👍 0
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5244)
- **重要性**：未知模型 ID 静默降级为 128K 上下文窗口，1M 窗口模型被错误压缩，需在 UI 中明确提示降级行为。

---

## 4. 重要 PR 进展（过去 24 小时更新，共 4 条）

### ① [CLOSED] chore(release): prepare v0.9.6
- **PR #5313** | 作者: Hmbown
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5313)
- **内容**：v0.9.6 发布准备。重构 Compaction 为“provider 汇总 + 后继交接”模式；移除 harness 阻塞干扰，保留预算/截止/取消等显式控制。

### ② [CLOSED] fix(release): use CNB asset download URLs
- **PR #5308** | 作者: Hmbown
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5308)
- **内容**：修复发布资产下载 URL，改用 `codewhale.net/codewhale` 规范仓库路径；补充 `/-/releases/download/vX.Y.Z/` 路径，确保镜像模式获取资产而非 HTML 页面。

### ③ [CLOSED] fix(release): validate crate publication order
- **PR #5306** | 作者: Hmbown
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5306)
- **内容**：发布前校验 20 个 crate 的发布顺序与 Cargo 元数据一致性；纠正 `codewhale-core` 与 `codewhale-tui` 顺序，并处理重复/缺失/版本混合/依赖倒置等异常。

### ④ [OPEN] build(deps): bump jsonschema from 0.46.10 to 0.49.6
- **PR #5281** | 作者: dependabot[bot]
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5281)
- **内容**：依赖升级。`jsonschema` 0.46.10 → 0.49.6，属于常规安全/功能更新。

---

## 5. 功能需求趋势

| 方向 | 代表 Issues | 热度 |
|---|---|---|
| **上下文压缩（Compaction）策略优化** | #5096、#5239、#4394、#5043、#5244 | 🔥🔥🔥🔥🔥 |
| **多 Provider / 多 API Key 管理** | #5250、#5034、#5047 | 🔥🔥🔥🔥 |
| **TUI 与 CLI 控制面一致性** | #4022、#5270、#5287 | 🔥🔥🔥🔥 |
| **子代理（Subagents）显示与交互** | #5287、#5270、#5098 | 🔥🔥🔥 |
| **Fleet 统一配置与负载解析** | #3205、#5098 | 🔥🔥🔥 |
| **工具可靠性（File edit / verifier）** | #5209、#5056 | 🔥🔥 |
| **权限审批交互（deny-by-default）** | #5293 | 🔥🔥 |
| **国际化 / 中文翻译讨论** | #4949 | 🔥 |
| **裁剪文本复制洁净度** | #5314 | 🎯 新晋 |
| **截图/图片多模态查看** | #5102 | 🎯 新晋 |

**解读**：
- **Compaction 是最热焦点**——多起 issue 指向同一个根因：模型上下文窗口（1M）与工具默认压缩阈值（128K）不匹配，且压缩后收益不可见。
- **多 Provider 与密钥管理**需求上升，用户希望按 Provider 保存多个 API Key 并正确解析各 Provider 的默认模型。
- **TUI/CLI 控制面统一** 与 **子代理身份显示** 是 v0.9.5 的大方向，由维护者主动推进。
- **Fleet 配置层级过深、静默遮蔽** 是运维侧的痛点。

---

## 6. 开发者关注点（痛点 & 高频需求）

### 🔴 高频痛点

1. **上下文压缩失效 / 不可见**
   - “触发成功但 token 计数无变化”（#5096）
   - “1M 模型仍在 128K 触发压缩”（#5239、#5244）

2. **Provider 切换后模型/密钥残留**
   - 切换 Provider 后仍保留旧 Provider 的默认模型（#5034）
   - 仅能保存一个 API Key，切换 Provider 需重新获取（#5250）
   - API Key 仅持久化在当前仓库而非全局存储（#5047）

3. **File 工具 edit 模式假成功**
   - 错误参数名不报错，返回“替换成功”，实际未修改（#5209）

4. **权限弹窗默认值变更引发误操作**
   - v0.9.4 起默认高亮“拒绝”，用户可能无意识拒绝操作（#5293）

5. **TUI 复制内容携带装饰符**
   - “复制消息”包含 `●` 和 `▏` 等 rail 装饰字符，需手动清理（#5314）

### 🟡 高频需求

1. **Compaction 结构化生存契约**——明确哪些信息（意图、决策、证据、工具状态）必须保留（#4394）
2. **Fleet loadout 自动解析**——为角色/槽位解析完整计算负载而非单一模型（#3205）
3. **统一任务面板**——一个视图查看所有后台任务（shell/子代理/workers/workflow）（#5270）
4. **子代理显示身份一致**——以 fleet/session 名称显示，而非 `agent_<hex>` 或随机昵称（#5287）
5. **未知模型 ID 的显式降级提示**——避免静默使用 128K 默认值（#5244）

---

## 附：社区声音

> “Compaction 说完成了，但 token 计数一点没变——这让我无法信任这个功能。” —— #5096 用户 `jbousquie`

> “编辑文件时传错参数名居然返回成功，结果多花了 4 倍时间反复修改。” —— #5209 用户 `yekern`

> “切换 Provider 到 OpenAI，默认模型还是上一家的 gpt-5.5——这明显是解析逻辑 bug。” —— #5034 维护者 `Hmbown`

> “英文 Constitution 译成‘宪法’在国内语境有敏感性，‘协作准则’更稳妥但丢失了权威性——需要社区共识。” —— #4949 作者 `SparkofSpike`

---

*日报生成时间：2026-08-10 | 数据窗口：2026-08-09 ~ 2026-08-10*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*