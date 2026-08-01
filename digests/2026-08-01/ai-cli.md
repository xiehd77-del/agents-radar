# AI CLI 工具社区动态日报 2026-08-01

> 生成时间: 2026-08-01 02:56 UTC | 覆盖工具: 9 个

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

**报告日期：2026-08-01** | **分析范围：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（CodeWhale）**


## 1. 生态全景

AI CLI 工具已从"编码助手"演变为**完整的 agent 化开发环境**，竞争焦点从模型能力转向工程化深度——包括会话管理、上下文压缩、沙箱安全、跨平台稳定性等系统级能力。各工具呈现明显分层：Claude Code 和 Codex 以高活跃度引领生态，Gemini CLI 和 Copilot CLI 依托大厂背书稳扎稳打，OpenCode 和 Pi 以激进迭代的高频发布追赶，而 Qwen Code 和 DeepSeek TUI 则分别在多模型兼容和品牌重塑上发力。值得警惕的是，**数据安全事件**（跨会话凭据泄露、rm -rf 防护绕过）和**计费透明度**（等待即扣费、配额误判）成为跨工具的高频投诉，暗示行业正从功能竞争转向信任竞争。同时，Windows 平台稳定性成为几乎所有工具的共同短板。


## 2. 各工具活跃度对比

| 工具 | 活跃 Issues | 重要 PR | 版本发布 | 社区热度信号（👍 总量） | 迭代阶段 |
|------|------------|---------|---------|------------------------|---------|
| **Claude Code** | 10 个热点（评论 51/35/28…） | 6 个（2 Open） | 无 | ≈280+（单 Issue 最高 83） | 成熟期，高热度 |
| **OpenAI Codex** | 10+ 个热点 | 10+ 个（9 已合并） | 3 个 pre-release | ≈320+（单 Issue 最高 185） | 快速迭代，高输出 |
| **Gemini CLI** | 10 个热点（P1×6） | 10 个（7 修复类） | 2 个补丁版 | ≈15+（👍 普遍偏低） | 修复集中期 |
| **GitHub Copilot CLI** | 10 个热点（3 新增） | 2 个（均非功能性） | 1 个 pre-release | ≈20+ | 维护期，PR 沉寂 |
| **Kimi Code CLI** | 4 个热点 | 1 个 | 无 | ≈25 | 早期，需求探索 |
| **OpenCode** | 10 个热点 | 10 个（6 Open） | 无 | ≈130+（单 Issue 最高 31） | 高活跃，付费服务承压 |
| **Pi** | 10 个热点 | 10 个（多数已合并/关闭） | 无（昨日高强度） | ≈5+ | 高速修复期 |
| **Qwen Code** | 10 个热点 | 10 个（3 已合并） | v0.21.2 | ≈15+ | 稳定迭代 |
| **DeepSeek TUI (CodeWhale)** | 10 个热点 | 10 个（4 关闭/合并） | v0.9.3（品牌重塑） | ≈5+ | 品牌转型期 |

> 注：👍 总量为今日热点 Issue 的点赞数合计估算，反映社区参与度而非绝对值。


## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **会话持久化与恢复** | Claude Code（#83019 30 天自动删除）、Codex（#25779 状态无界增长、#36061 继续对话失败）、Copilot CLI（#4325 events.jsonl 超长无法加载、#4251 恢复 OOM）、Gemini CLI（#25166 命令后卡死）、DeepSeek TUI（#5000 中断输出丢失） | 长会话的稳定性、可恢复性和存储策略是跨工具的首要痛点 |
| **Windows 平台稳定性** | Claude Code（#81159 GPU 崩溃）、Codex（#34133 GPU 崩溃、#35119 WSL Git 不可用）、Gemini CLI（#21983 Wayland 失败）、Pi（#6187 WSL 登录挂起）、Qwen Code（#8227 文件读取失效） | GPU 进程崩溃、WSL 兼容性、文件系统差异处理是共性问题 |
| **上下文管理与压缩** | Claude Code（#82056、#80751）、Codex（#28316 base64 重复发送）、Gemini CLI（/compress 建议）、Qwen Code（#6721 缓存前缀失效）、OpenCode（#14743 缓存命中率） | 长会话的上下文透明性、token 效率、缓存优化是共同追求 |
| **计费/配额透明度** | Claude Code（#79337 Max 误判）、Codex（#35259 等待即扣费、#36369 配额显示不一致）、Gemini CLI（配额管理）、OpenCode（#38257 付费服务 401） | 用户对"钱花在哪了"的可见性和消费可预期性要求普遍提升 |
| **自动审批与安全边界** | Codex（--approve-for-me、MCP 严格审批）、Gemini CLI（#23433 HITL 绕过）、Claude Code（#81273 rm -rf 绕过）、Copilot CLI（/permissions） | 安全与效率的平衡——需要更精细的权限控制而非简单开关 |
| **MCP/生态互操作** | Gemini CLI（#23296 OAuth 刷新）、Copilot CLI（#4323 .mcp.json 注释）、DeepSeek TUI（#4996 ACP 客户端）、OpenCode（#17505 ACP 集成） | MCP 配置可维护性、认证生命周期、协议中立性成为生态扩展的关键 |
| **子代理/多智能体可靠性** | Claude Code（#83001 输出丢失）、Gemini CLI（#22323 MAX_TURNS 误报）、Copilot CLI（#4318 覆盖显式指令）、Codex（子代理命名） | 多 agent 协作的错误报告准确性、指令遵从度、结果可回收性 |

**最关键信号**：**没有单一工具解决了长会话 + 多智能体 + Windows 的全栈稳定性问题**。这是一个尚未被满足的巨大市场空间。


## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线 | 目标用户 | 独特优势 | 关键短板 |
|------|---------|---------|---------|---------|---------|
| **Claude Code** | 全功能 agentic 编码平台 | 闭源 + 深度模型集成（Fable 5/Opus） | 专业开发者、Max 付费用户 | 模型能力强、生态成熟、插件丰富 | 安全事件频发（数据删除、凭据泄露）、计费系统混乱 |
| **OpenAI Codex** | 高性能 agentic 编码 + 云端协同 | 闭源 + Rust 重写 + 云会话 | 追求性能的开发者、Codex 付费用户 | 架构现代化（Rust）、自动化审批完善、高频发布 | Windows 体验明显落后、等待计费争议 |
| **Gemini CLI** | 安全优先的 agentic 编码 | 开源（部分）+ Google 生态 | 安全敏感型团队、GCP 用户 | 安全评分体系（P1/P2）、Subagent 架构、沙箱机制 | 社区参与度低、P1 Bug 修复周期长 |
| **GitHub Copilot CLI** | GitHub 生态内嵌的 agent | 闭源 + GitHub 深度集成 | GitHub 重度用户、企业团队 | 生态整合（PR/Issue）、/permissions 命令、品牌信任 | 社区贡献通道不畅、功能演进缓慢 |
| **Kimi Code CLI** | 轻量级编码助手 | 开源 + Moonshot 模型 | 中文开发者、Kimi 用户 | 简单易用、中文友好 | 功能单薄、社区规模小、生态未成型 |
| **OpenCode** | 开源聚合层（多模型） | 开源 + 服务端聚合（Go/Zen） | 多模型用户、隐私敏感型 | 模型中立、缓存优化活跃、TUI 插件生态 | Go 服务稳定性问题、零保留政策变更引发信任危机 |
| **Pi** | 开源高性能编码 agent | 开源 + Go/Rust 混合 | 性能敏感型开发者、自托管 | 性能优化激进（O(n²)→O(n)）、文化契合（个人项目） | 品牌认知度低、社区规模小、跨平台兼容性弱 |
| **Qwen Code** | 多模型兼容编码工具 | 开源 + 多 Provider 支持 | 使用非 OpenAI 模型的开发者 | Anthropic/Qwen 双兼容、Autofix 机制、桌面端 Web Shell | 长会话稳定性、Windows 细节问题多 |
| **DeepSeek TUI (CodeWhale)** | 极简 TUI 编码工具 | 开源 + Rust + 品牌重塑 | 极简主义者、DeepSeek 用户 | 轻量、TUI 体验纯粹、DeepSeek V4 Flash 原生支持 | 功能边界有限、生态位窄、品牌切换期混乱 |

**关键分化**：
- **模型绑定 vs 模型中立**：Claude Code/Gemini CLI 绑定自家模型 → 但 Codex/Copilot CLI 也绑定模型；真正中立的是 **OpenCode、Pi、Qwen Code、DeepSeek TUI、Kimi**（后者可切换 Provider）→ 但 Komi 与 Qwen 仍优先自家模型。中立阵营的核心竞争力在于"聚合"体验。
- **闭源 vs 开源**：Claude Code/Codex/Copilot CLI 闭源（信任换取生态）；Gemini CLI 部分开源（Google 协议）；其余 5 款均开源（社区信任+贡献驱动）。
- **云端协同 vs 本地优先**：Codex 强调云会话、Claude Code 虽有 Web 版但定位仍是终端优先、Copilot CLI 深度绑定云端；Pi/DeepSeek TUI/Qwen Code 偏向纯本地运行。


## 5. 社区热度与成熟度

**第一梯队（高活跃 + 成熟生态）**
- **Claude Code**：评论深度最高（51 条热帖）、社区生态丰富（插件、PR 活跃），但安全信任危机（rm -rf 绕过、凭据泄露）正在侵蚀用户信心。
- **OpenAI Codex**：点赞数最高（185 👍）、PR 合并速度最快（9 个/日）、发布节奏稳定（3 个 pre-release），呈现"工程化铁军"态势，社区反馈响应效率极高。

**第二梯队（中活跃 + 快速追赶）**
- **OpenCode**：付费服务（Go）引发 42 条评论的热帖，隐私政策变更引发 31 👍 关注，社区对透明度极度敏感；TUI 插件生态活跃（6 个功能 PR），但老 Bug 未根治（黑屏、文本无法选中）。
- **Pi**：**昨日合并/关闭 8 个 PR**，修复速度惊人（O(n²)→O(n)、Wayland 剪贴板），但社区规模小（👍 普遍 ≤5），尚处"小而精"阶段。
- **Gemini CLI**：P1/P2 安全分级体系专业，但社区参与度低迷（👍 普遍个位数），修复周期长（#25166 已 4 个月未解决）。

**第三梯队（稳定迭代 / 探索期）**
- **Qwen Code**：版本节奏稳健（v0.21.2），CI 自动化愈合闭环（bot 自动跟进、autofix），表现中规中矩；多模型兼容路线有差异化空间。
- **Copilot CLI**：PR 几乎停滞（24h 无功能性 PR），社区活跃集中在 Issues 讨论，处于"维护期"信号。
- **DeepSeek TUI (CodeWhale)**：品牌切换引发 10+ 功能提案和一批 Bug 反馈，正处于**转型窗口期**，社区响应积极但洞察深度有限。
- **Kimi Code CLI**：仍处于"需求探索期"——仅 1 个 PR、4 个热点 Issue，核心诉求（远程控制、记忆系统）尚在讨论阶段，产品化路径未清晰。


## 6. 值得关注的趋势信号

### 🔴 高危预警

1. **数据安全的"信任危机"正在蔓延**：Claude Code 的跨会话凭据泄露（#72274）、rm -rf 防护绕过（#81273）、Gemini CLI 的 HITL 绕过（#23433）、Auto Memory 未脱敏（#26525）——**安全底线事件已跨工具出现**。对开发者而言：在使用 AI CLI 处理敏感代码/数据前，需评估工具的沙箱隔离能力；对工具厂商而言：安全修复的速度将直接决定用户留存。

2. **"等待即扣费"引发计费透明度革命**：Codex 的轮询耗 token（#35259）和 Claude Code 的 Max 误判（#79337）表明，**用户已不满足于"总额显示"，要求按操作粒度追踪消费**。能提供细粒度成本可观测性的工具将获得显著竞争优势。

### 🟡 中期趋势

3. **Windows 平台成为下一个战场**：9 款工具中 7 款存在 Windows/WSL 相关活跃问题。随着企业 Windows 开发者成为 AI CLI 增量市场，**谁能率先解决 Windows 的 GPU 崩溃、WSL 兼容、文件系统差异**，谁就能拿到下一个增长窗口。

4. **"聚合层"工具的崛起**：OpenCode、Pi、Qwen Code、DeepSeek TUI 均在走"模型中立 + 本地优先"路线。Codex 的云会话、Claude Code 的 Web 版则在走"云端协同"。**模型能力不再是护城河，工作流整合和数据所有权才是**。

5. **Autofix/自愈机制成为标配**：Qwen Code 的 Autofix 闭环、Codex 的自动审批、Copilot CLI 的 /permissions 命令——**工具开始主动介入自身的错误修复和权限管理**。这是从"编码助手"迈向"自主 agent"的关键一步。

### 🟢 长期信号

6. **"上下文可观测性"将成刚需**：Claude Code（#82056）、Qwen Code（#6721）、OpenCode（缓存修复）均涉及上下文加载状态和缓存命中率的可见性。**开发者会越来越要求"我知道 AI 看到了什么"**，而不仅是"AI 帮我做了什么"。

7. **品牌与信任 > 功能堆砌**：DeepSeek TUI 的品牌切换、OpenCode 的零保留政策变更引发的波动，与 Codex/Claude Code 的付费纠纷合并，**用户在 choosing tools 时，透明度、稳定性与安全记录逐渐比功能清单更有决策权重**。

---

**报告结论**：AI CLI 工具正从"单点能力"竞争进入"系统工程"竞争阶段。**性能、安全、透明、跨平台**四要素将决定未来 12 个月的市场格局。当前尚无全栈领先者——Claude Code 和 Codex 在功能上领先，但安全/计费事件可能削弱优势；Pi 和 OpenCode 在架构上展示出潜力，但规模尚未成势。对开发者而言，**应根据自身平台的优先级（Windows vs macOS/Linux）、安全敏感度和对生态绑定的容忍度来选择工具**；对工具厂商而言，**优先修复数据安全漏洞和 Windows 稳定性**的投入产出比最高。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止**: 2026-08-01 | **数据来源**: github.com/anthropics/skills


## 一、热门 Skills 排行（按关注度/评论活跃度）

### 1. skill-creator 系列修复 — 社区最集中的痛点
**PR #1298** (MartinCajiao) — open | 链接: https://github.com/anthropics/skills/pull/1298

> 修复 `run_eval.py` 在所有 skill description 上恒定报告 `recall=0%` 的严重问题（关联 Issue #556，有 10+ 次独立复现）。该问题导致 description-optimization 循环在噪声上做优化，完全失效。

**配套 PR 集群**（同一问题，多作者独立提交）:
| PR | 作者 | 核心修复点 |
|---|---|---|
| [#1099](https://github.com/anthropics/skills/pull/1099) | joshuawowk | Windows 下 subprocess pipe 读取崩溃 (`WinError 10038`) |
| [#1050](https://github.com/anthropics/skills/pull/1050) | gstreet-ops | Windows `claude.cmd` PATHEXT + cp1252 编码 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | Polluelo978 | trigger 检测漏掉真实 skill name，提前退出 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | alvingarcia | eval 命令文件写入用户 live project 的 `.claude/commands/`，污染真实环境 |

**社区讨论焦点**: 这是当前仓库**最严重且最活跃**的问题集群 — `skill-creator` 的 eval 核心链路在 Windows 和触发检测上双重失效，导致优化循环产出无意义结果。5 个独立 PR 从不同角度修复，但尚未合并，说明官方可能在做更大规模的重构。

**状态**: 全部 open，无合并迹象。


### 2. Add document-typography skill — 排版质量控制
**PR #514** (PGTBoos) — open | 链接: https://github.com/anthropics/skills/pull/514

> 针对 AI 生成文档中的**孤儿词换行**（1-6 个词溢出到下一行）、**寡妇段落**（节标题被孤立在页底）、**编号错位**三类排版问题。用户很少主动要求好的排版，但这些问题影响每份 Claude 生成的文档。

**社区讨论热点**: 三类问题在 AI 生成文档中高频出现，需求真实且覆盖面广。

**状态**: open（3 月创建，至今 5 个月未合并）。


### 3. fix(pdf): 大小写敏感文件引用 — 简单但关键
**PR #538** (Lubrsy706) — open | 链接: https://github.com/anthropics/skills/pull/538

> 修复 `skills/pdf/SKILL.md` 中 8 处大小写不匹配 — 实际文件是小写 (`forms.md`, `reference.md`)，但 SKILL.md 里用了大写引用。在大小写敏感的文件系统上直接导致 skill 失效。属于**极简修复 (8 处引用替换)**，但直接影响 pdf skill 在 Linux/macOS 上的可用性。

**状态**: open（已 5 个月未合并，社区有讨论但官方未回应）。


### 4. Add ODT skill — OpenDocument 格式支持
**PR #486** (GitHubNewbie0) — open | 链接: https://github.com/anthropics/skills/pull/486

> 完整支持 ODT/ODS/ODF 格式的创建、填充、读取及 ODT→HTML 转换。触发词覆盖 "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice"。填补了文档技能矩阵中**开源格式的空白**（现有技能集中在 docx/pdf）。

**状态**: open（讨论已停更 3 个月）。


### 5. Add self-audit — 四维推理质量门禁
**PR #1367** (YuhaoLin2005) — open | 链接: https://github.com/anthropics/skills/pull/1367

> v1.3.0 版本，核心是**先机械验证文件存在性 → 再按损害严重度优先级做四维推理审计**。作者声称"适用于任何项目、任何技术栈、任何模型"，并配套在 Issue #1385 提出了完整的三门禁流水线（预任务校准 → 对抗性评审 → 交付验证）。

**讨论热点**: 与 #1385 提案联动，社区对**交付前质量门禁**有持续兴趣，且作者在持续迭代（v1.3.0）。

**状态**: open（近期活跃，可能继续演进）。


### 6. Add testing-patterns skill — 全栈测试模式
**PR #723** (4444J99) — open | 链接: https://github.com/anthropics/skills/pull/723

> 覆盖完整测试栈：Testing Trophy 模型、单元测试（AAA 模式、纯函数、边界用例）、React 组件测试 (Testing Library)、以及"什么该测 vs 什么不该测"的判断框架。社区在测试生成方向有明显需求。

**状态**: open（4 月后讨论停滞）。


### 7. Add color-expert skill — 色彩专业知识
**PR #1302** (meodai) — open | 链接: https://github.com/anthropics/skills/pull/1302

> 自包含的色彩专业知识库：命名系统（ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS）、色彩空间的"何时用哪种"对照表（OKLCH 用于刻度、OKLAB 用于渐变、CAM16 等）。

**状态**: open（7 月仍在更新，活跃）。


### 8. feat(skills): add self-audit & Add plan-file-hygiene skill — 元技能趋势
**PR #1479** (Palo-Alto-AI-Research-Lab) — open | 链接: https://github.com/anthropics/skills/pull/1479

> 解决 Issue #1417 — 规划产物（planning artifacts）无生命周期地无限累积。社区多名成员（@halilxibrahim, @xg-gh-25）已就问题框架达成共识，此 PR 基于该共识实现。

**状态**: open（7 月底刚创建，最新活跃）— **可能是近期落地的候选**。


## 二、社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 热度 | 现状 |
|---|---|---|---|
| **🔴 安全与信任边界** — 社区技能在 `anthropic/` 命名空间下分发，冒充官方技能，存在信任边界滥用 | [#492](https://github.com/anthropics/skills/issues/492) | 43 评论 | open，持续 5 个月 |
| **🟠 组织级技能共享** — 期望在 Claude.ai 内直接 org-wide 共享，而非手动下载/上传 .skill 文件 | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论, 8 👍 | open |
| **🟠 skill-creator 可靠性** — `run_eval.py` 恒定 0% recall，优化循环完全失效 | [#556](https://github.com/anthropics/skills/issues/556) | 12 评论, 7 👍 | open（对应 5 个 PR） |
| **🟡 插件内容重复** — document-skills 和 example-skills 安装后内容雷同，造成上下文窗口重复占用 | [#189](https://github.com/anthropics/skills/issues/189) | 6 评论, 9 👍 | open（2015-12 至今） |
| **🟡 技能消失/损坏** — 用户技能文件无故不可见 | [#62](https://github.com/anthropics/skills/issues/62) | 10 评论 | open |
| **🟡 上下文窗口安全** — claude-api skill 单次调用注入约 156k tokens，直接打爆上下文窗口 | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 评论 | open（7/27 最新） |
| **🟡 元技能方向** — 质量门禁流水线（受 PR #1367 驱动的提案） | [#1385](https://github.com/anthropics/skills/issues/1385) | 3 评论 | open |
| **🟢 平台集成** — Bedrock 支持、将 Skills 暴露为 MCP 协议 | [#29](https://github.com/anthropics/skills/issues/29), [#16](https://github.com/anthropics/skills/issues/16) | 4+4 评论 | open（早期遗留） |

**趋势总结**：
- **最强信号** — 安全/信任边界（43 评论）和 skill-creator 工具链可靠性（12 评论 + 5 个 PR）
- **结构性需求** — 组织级共享、插件去重（都是生态规模化必经之路）
- **新兴方向** — 元技能（self-audit、质量门禁）、上下文窗口治理


## 三、高潜力待合并 PR（近期可能落地）

| PR | Skill | 潜力依据 | 风险 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval 修复 | 唯一系统性修复 eval 核心链路；关联 #556 被多次复现，官方无法忽视 | 官方可能重写整个 eval 模块，各 PR 被 supersede |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 7/25 刚创建，社区已形成共识框架；生命周期管理是明确缺口 | 新 PR，需观察 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 痛点真实、解决方案清晰（三类问题定义明确）；5 个月未合说明优先级不高 | 时间过长，可能被遗忘 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 作者持续迭代（v1.3.0）+ 配套提案 #1385 有体系性 | 作者主张"universal"，可能过于宏大，Skill 应聚焦 |

> 注：所有 PR 目前均为 open 状态，仓库中**尚无已合并的 PR** — 这说明 anthropics/skills 仓库当前处于活跃征集阶段，官方可能在做大规模审核或重构后才开始合并。


## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"skill-creator 工具链自身不可靠 + 技能分发缺乏信任边界"** — 即社区在内容生产端（eval 失效导致优化盲目，Windows 不可用）和消费端（命名空间冒充、上下文窗口爆炸）同时遭受基础设施级问题，而新技能方向（排版、测试、色彩、ODT）则呈现明显的"垂直专业化 + 元技能（质量门禁、文件卫生）"双轨演进。

---

*报告生成时间: 2026-08-01 | 数据源: anthropics/skills 仓库公开数据*

---

# Claude Code 社区动态日报 — 2026-08-01

## 今日速览

今日无新版本发布，社区焦点集中在 **Fable 5 模型在 Max 套餐上的计费/权限误判问题**（#79337 已获 51 条评论、20 👍），以及 **多起高危数据删除事故报告**（#82165、#81273 等揭露了安全防护绕过和误删路径）。此外，Windows 桌面版 GPU 进程崩溃（#81159、#81275）与 TUI 滚动回归（#65833）持续困扰用户，跨会话凭据泄露（#72274）等安全问题亦在发酵。


## 社区热点 Issues

### 1. [BUG] Fable 5 prompts 'usage credits required' on Max plan — 自 7/20 成为 Max 标配当日即出现
**#79337** | 作者: otnixX | 评论: 51 | 👍: 20 | [链接](https://github.com/anthropics/claude-code/issues/79337)
- **概述**：2026-07-20（Fable 5 成为 Max 套餐标准模型的当天）起，Claude Code 在 Max 套餐上拒绝运行 Fable 5，静默降级至 Opus 4.8，并提示需要 usage credits。
- **重要性**：直接影响 Max 付费用户核心权益，且与套餐权益描述相悖，社区反响强烈；另有 VS Code 扩展同样受影响（#79441，剩余 20% 周配额仍被拦截）。
- **社区反应**：评论数榜首，用户普遍质疑计费系统逻辑与套餐权益实现。

### 2. [BUG] v2.1.150 起滚轮不再滚动对话内容 — 反而发送方向键
**#65833** | 作者: tatuliusi | 评论: 35 | 👍: 83 | [链接](https://github.com/anthropics/claude-code/issues/65833)
- **概述**：WSL 环境下，更新至 v2.1.150 后鼠标滚轮无法滚动会话输出，而是触发输入历史循环。
- **重要性**：83 👍 为今日最高，属于高频基础交互回归，影响 TUI 日常使用体验。
- **社区反应**：大量用户确认复现，等待官方修复或 workaround。

### 3. [BUG] Claude Code Web 无法使用 gh CLI 命令（权限拒绝）
**#11139** | 作者: cnighswonger | 评论: 28 | 👍: 31 | [链接](https://github.com/anthropics/claude-code/issues/11139)
- **概述**：Web 端调用 gh CLI 时遭遇 Permission Denied，导致 CI/PR 相关操作不可用。
- **重要性**：跨平台（Linux/Web）核心工具链集成问题，长期未解决，31 👍 反映影响面广。

### 4. [BUG] GPU 进程崩溃致 Claude Desktop 退出并损坏 MSIX 包（Opus 5 浏览器操作时）
**#81159** | 作者: juanespelu | 评论: 9 | [链接](https://github.com/anthropics/claude-code/issues/81159)
- **概述**：Windows 11 上 Opus 5 执行页内浏览器动作时，GPU 进程崩溃（exitCode 101457950）导致整个应用退出，甚至损坏 MSIX 包。
- **重要性**：与 #81275、#77768 等共同构成 Windows 桌面端浏览器功能的系统性崩溃问题，涉及 Intel/NVIDIA/WARP 多种硬件。

### 5. [BUG] 跨会话凭据泄露：生产数据库被未授权主机修改
**#72274** | 作者: acosmi-fushihua | 评论: 6 | [链接](https://github.com/anthropics/claude-code/issues/72274)
- **概述**：一个会话中意外出现另一用户的服务器凭据，并被用于修改生产数据库，导致未授权操作。
- **重要性**：安全类最高危事件，暗示会话隔离或上下文管理存在严重缺陷，需紧急排查。

### 6. [BUG] Fable 5 安全护栏误伤合法防御性安全审计流程
**#74422** | 作者: robert-hromej | 评论: 2 | [链接](https://github.com/anthropics/claude-code/issues/74422)
- **概述**：Fable 5（max effort）在用户对自己授权的仓库执行常规安全审计（gitleaks/deps/vuln review）时，误判为恶意行为并拦截。
- **重要性**：反映模型安全策略对“防御性”与“攻击性”上下文的区分能力不足，影响安全从业者正常使用。

### 7. [BUG] 自动模式灾难性删除防护被绕过：反引号替换内 rm -rf 无需确认
**#81273** | 作者: arielman | 评论: 1 | [链接](https://github.com/anthropics/claude-code/issues/81273)
- **概述**：自动模式下，`rm -rf` 嵌套在反引号替换（`$(...)`）中可绕过灾难性删除确认提示。
- **重要性**：安全防护绕过漏洞，与 #80830（无确认删除已有目录）、#82165（rm -rf /* 被构造并执行，且 kill 被拦截）共同构成高危数据丢失链条。

### 8. [BUG] 会话记录默认存储位置超出备份覆盖范围，30 天后自动删除
**#83019** | 作者: fogathmann | 评论: 1 | [链接](https://github.com/anthropics/claude-code/issues/83019)
- **概述**：会话 transcripts 默认存储在典型备份覆盖之外的路径，且 30 天自动删除，导致项目历史记录静默永久丢失。
- **重要性**：数据持久化与备份策略设计缺陷，对长期项目的可追溯性构成威胁。

### 9. [BUG] 后台认证守护进程无法从被拒的主动刷新中恢复，约每 8 小时需手动重新登录
**#83039** | 作者: manishknema | 评论: 0 | [链接](https://github.com/anthropics/claude-code/issues/83039)
- **概述**：Max 套餐下，后台 auth 守护进程的 token 主动刷新被拒后无法自愈，每 ~8 小时要求手动 `claude auth login`。此前 Pro 套餐无此问题。
- **重要性**：直接影响 Max 用户持续使用体验，且与套餐差异相关，属新报告，值得关注。

### 10. [BUG] 会话限额终止导致多智能体工作流输出丢失，尽管已消耗配额
**#83001** | 作者: YalcinkayaE | 评论: 1 | [链接](https://github.com/anthropics/claude-code/issues/83001)
- **概述**：因会话限额触发终止，一周 Max 配额被消耗，但多智能体工作流的产出结果全部丢失，用户拒绝退款方案并要求人工介入。
- **重要性**：配额消耗与产出保障不对等，涉及服务可用性和用户权益，且与 #83012（CLI 无法获取后台云会话结果）关联。


## 重要 PR 进展

### 1. [CLOSED] Fix #80705: Usage leak 问题修复
**#81540** | 作者: ghost | 更新: 2026-07-31 | [链接](https://github.com/anthropics/claude-code/pull/81540)
- **内容**：由 Atlas 2 自动生成的贡献，修复 Usage 泄漏问题，声明奖励 $200，已完成测试和仓库验证后提交（已关闭）。

### 2. [OPEN] fix(ci): 修复 cron 失败、排除 PR，并提议 TUI 延迟修复
**#82987** | 作者: ruok-dev | 更新: 2026-07-31 | [链接](https://github.com/anthropics/claude-code/pull/82987)
- **内容**：解决 GitHub Actions 定时任务失败问题，并针对高智能体负载下 TUI 输入延迟退化提出架构级修复方案（Resolves #82984）。
- **意义**：直击高负载场景下的交互性能痛点，社区方案值得官方参考。

### 3. [OPEN] feat(code-review): 实现置信度评分与 --threshold 标志
**#82794** | 作者: hulincup | 更新: 2026-07-31 | [链接](https://github.com/anthropics/claude-code/pull/82794)
- **内容**：补齐 README 与命令实现的偏差，将 code-review 插件从二元校验升级为 0–100 置信度评分，支持 --threshold 过滤，并保留现有 truth-check。
- **意义**：提升代码评审插件的实用性和可配置性。

### 4. [OPEN] Upgrade Node.js version from 20 to 24
**#39872** | 作者: dijonkitchen | 更新: 2026-07-31 | [链接](https://github.com/anthropics/claude-code/pull/39872)
- **内容**：为即将到来的 LTS 变更，将 Node.js 从 20 升级至 24。

### 5. [CLOSED] docs: 为 security-guidance 插件添加 README.md
**#17776** | 作者: skyvanguard | 更新: 2026-07-31 | [链接](https://github.com/anthropics/claude-code/pull/17776)
- **内容**：为 plugins/ 目录下唯一缺少文档的 security-guidance 插件补充完整 README，涵盖 9 个安全模式说明（已关闭）。

### 6. [OPEN] Claude/automatizar inventario insumos w4n98s
**#82981** | 作者: Eduardo-neira | 更新: 2026-07-31 | [链接](https://github.com/anthropics/claude-code/pull/82981)
- **内容**：标题为西班牙语，疑似个人自动化脚本误提交至官方仓库，无实质内容，建议关注清理。


## 功能需求趋势

1. **上下文管理可观测性**（#82056）：会话无法感知 auto-memory 索引是否完整加载、截断或未加载，需要暴露加载状态。社区对上下文透明度的需求上升。
2. **插拔式上下文管理器**（#80751）：长期开发会话中上下文检索的低效引发诉求，希望支持智能上下文检索与可插拔管理。
3. **成本与配额透明化**（#77134）：harness 应直接展示 Claude 刚生成的文本以供审批，避免二次模型调用耗费 token，尤其针对远程/移动场景。
4. **CLI 与云会话集成**（#83012、#83014）：CLI 会话无法获取后台 Ultraplan/云会话结果；advisor agent 应能强制恢复失败 agent 进程，减少人工介入。
5. **Bash 工具语义一致性**（#74746）：Bash 工具应运行于 bash 而非用户登录 shell（如 zsh），避免 glob 等语法差异导致命令中断。


## 开发者关注点

- **高危安全与数据丢失**：多位用户报告 Claude Code 在自动模式下绕过防护执行 `rm -rf`（#80830、#81273、#82165），其中一起事故中命令被扩充为 `rm -rf /*` 且安全分类器阻断了 kill 操作。社区对灾难性删除防护的可靠性提出严重质疑。
- **模型权限与计费**：Fable 5 在 Max 套餐被误判为需 usage credits（#79337），且安全护栏对合法安全审计产生误报（#74422）、对前端重连代码误判为网络安全威胁（#83038），均指向模型行为与用户预期的错位。
- **Windows 桌面端稳定性**：内置浏览器功能在 Windows 上引发多起 GPU 进程崩溃（#81159、#81275、#77768、#82962），且无崩溃转储，问题波及 Intel、NVIDIA、WARP 多种硬件。
- **跨会话数据隔离**：#72274 的跨会话凭据泄露为最严重隐私事件，社区对会话间的上下文/凭据隔离机制表达担忧。
- **日常使用回归**：TUI 滚轮失效（#65833）、暗色模式白字白底（#62911）、后台 agent 最终报告丢失（#74113）、会话记录自动删除（#83019）等持续影响日常体验，高频反馈等待修复。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-01** | **数据来源：github.com/openai/codex**


## 今日速览

今日 Codex 社区动态集中在三个方向：一是 `--approve-for-me` CLI 标志与 MCP 严格自动审查等自动化审批能力持续增强；二是多项底层架构优化（线程单写者锁、分页摘要查询、沙箱 V8 启用）稳步推进；三是 Windows 平台问题持续发酵，Git 不可用、GPU 崩溃等问题引发高频反馈。此外，社区对“自动解析提问”（auto-resolve）配置选项的诉求已积累 185 个 👍，成为当前最受关注的功能需求。


## 版本发布

过去 24 小时内发布了 3 个 Rust 版本（均为预发布版）：

- **rust-v0.147.0-alpha.4** — 最新 alpha 版本
- **rust-v0.147.0-alpha.3** — 前序 alpha 版本
- **rust-v0.147.0-alpha.1.1** — 补丁版本

> 注：发布说明未提供详细变更日志，建议关注对应 tag 获取具体内容。


## 社区热点 Issues

### 1. [#28969] 增加禁用 60 秒自动解析问题的设置（👍 185 · 💬 64）
**标签**：bug, CLI, config, plan
[链接](https://github.com/openai/codex/issues/28969)

社区最热 Issue。用户希望当 Codex 向用户提问时，可以配置关闭 60 秒后自动继续执行的默认行为，以便在复杂决策场景下保留充分思考时间。64 条评论表明该行为在真实工作流中造成了广泛困扰。

### 2. [#35058] Codex Diff 在 macOS VS Code 中崩溃（👍 109 · 💬 42）
**标签**：bug, extension
[链接](https://github.com/openai/codex/issues/35058)

打开 Codex Diff 标签页即显示 "Oops, an error has occurred"，影响所有仓库。macOS Apple Silicon + VS Code 1.128.0 环境必现，属于阻断性 Bug，严重阻碍日常代码审查流程。

### 3. [#34133] Windows 截图导致 GPU 进程崩溃（💬 30）
**标签**：bug, windows-os, app, browser
[链接](https://github.com/openai/codex/issues/34133)

内置浏览器截图时，Code Integrity 拒绝捆绑的 vk_swiftshader.dll，导致 GPU 进程崩溃、应用冻结甚至无法重新打开。Windows 10 用户在高频使用浏览器代理后遭遇严重稳定性问题。

### 4. [#35119] WSL 仓库被误判为非 Git 仓库（👍 11 · 💬 11）
**标签**：bug, windows-os, app, app-server
[链接](https://github.com/openai/codex/issues/35119)

26.721.3404 版本将有效的 WSL ext4 仓库标记为 non-Git 并报告 "Git is unavailable"，此前版本正常工作。Windows + WSL2 用户的核心开发流程被阻断。

### 5. [#31786] Windows WSL 远程控制 Android 完全不可用（💬 17）
**标签**：bug, windows-os, app, connectivity, remote
[链接](https://github.com/openai/codex/issues/31786)

配对流程可完成但手机端始终显示 "connecting"，无法建立连接。Windows 用户跨端远程能力基本不可用。

### 6. [#25779] Codex Desktop 会话状态无界增长导致冻结（💬 13）
**标签**：bug, context, tool-calls, app, session
[链接](https://github.com/openai/codex/issues/25779)

Meta-bug：会话/轮次状态无界增长，造成上下文膨胀、应用冻结以及活动轮次控制丢失。多位用户在长时间会话后遭遇性能退化。

### 7. [#34133] 远程控制 Windows WSL 到 Android 不通（💬 17）

### 8. [#35259] 等待/轮询期间重复消耗模型额度（💬 9）
**标签**：bug, rate-limits, tool-calls, app, subagent
[链接](https://github.com/openai/codex/issues/35259)

在多代理场景中，Codex Desktop 仅为等待/轮询状态就反复进入模型，实测占原始 token 消耗的 19.8%。用户对“等待也要付费”的机制表达强烈不满。

### 9. [#28316] 不应在后续上下文中重发大尺寸 base64 图片（💬 10）
**标签**：bug, CLI, context, tool-calls
[链接](https://github.com/openai/codex/issues/28316)

用户提交图片后，Codex 会在后续请求中重复携带完整 base64 payload，导致上下文无界增长和 token 浪费。对多轮图片对话场景影响显著。

### 10. [#35259] 等待/轮询期间重复进入模型消耗额度（💬 9）

### 另请关注：

- **#29645** — 内置 image_gen 对常规提示词超时约 240 秒（💬 10）
- **#33592** — gpt-5.6-sol 下浏览器/Chrome 插件不可用，切换 terra 后正常（💬 5）
- **#32250** — GPT-5.6 Sol Medium 模式迅速耗尽 Pro 5 小时配额（👍 8）
- **#36061** — “在新任务中继续对话”报 "no rollout found"（💬 3）
- **#36369** — 显示 58% 配额剩余却提示已达使用上限（💬 2）


## 重要 PR 进展

### 1. [#36373] 新增 `--approve-for-me` CLI 标志（已合并）
[链接](https://github.com/openai/codex/pull/36373)

为交互式和 exec 命令增加自动审批模式，路由审批请求至自动评审，支持 `approval_policy="on-request"` 与 `workspace-write` 沙箱。自动化工作流的实用增强。

### 2. [#36365] MCP 请求的严格自动审批（已合并）
[链接](https://github.com/openai/codex/pull/36365)

识别 `codex_strict_auto_review` 标记，将 MCP 审批路由至自动评审器，仅接受规范的自动审批结果，无法提供用户审批时安全失败（fail closed）。

### 3. [#36389] 所有线程历史强制执行单写者所有权（已合并）
[链接](https://github.com/openai/codex/pull/36389)

为传统和分页线程引入跨进程写锁，防止并发写入导致的历史损坏。

### 4. [#36374] 为代码模式启用沙箱 V8（已合并）
[链接](https://github.com/openai/codex/pull/36374)

启用 `v8_enable_sandbox` 特性，修复 Windows MSVC 仍使用非沙箱预编译包的问题，提升代码模式安全性。

### 5. [#36367] 在注册表中保留有效工具暴露设置（已合并）
[链接](https://github.com/openai/codex/pull/36367)

将每次运行时的有效暴露策略存入 `ToolRegistry`，并应用 MCP、sandbox 等策略，确保工具暴露与实际执行一致。

### 6. [#36384] 使用分页查询加载轮次摘要（已合并）
[链接](https://github.com/openai/codex/pull/36384)

合并每个轮次的首条用户消息与最后一条代理消息到分页查询中，消除了为每个轮次单独发起 item 查询的性能瓶颈。

### 7. [#36372] 使用 MSVC 运行原生 Windows Bazel 测试（已合并）
[链接](https://github.com/openai/codex/pull/36372)

将 Windows 原生 Bazel 测试目标切换到 `x86_64-pc-windows-msvc`，提升 Windows 平台的测试覆盖质量。

### 8. [#36380] 新增线程分区管理 API（已合并）
[链接](https://github.com/openai/codex/pull/36380)

添加 `threadSection/create`、`update`、`delete` 三个 app-server 方法，基于 SQLite + UUIDv7 持久化自定义分区。

### 9. [#36378] 本地会话选择器优先从状态 DB 加载（已合并）
[链接](https://github.com/openai/codex/pull/36378)

本地恢复/分叉选择器改为优先读取索引化的状态 DB 元数据，远程工作区仍保留原 store 行为，提升本地会话恢复速度。

### 10. [#31471] 提取应用缓存逻辑至 ConnectorRuntimeManager（进行中）
[链接](https://github.com/openai/codex/pull/31471)

将 Codex Apps 工具缓存抽取到 `ConnectorRuntimeManager`，按账户、ChatGPT 用户、工作区模式和 Codex home 限定运行时上下文。属于 faster-connectors 系列（1/4），是较大规模的重构工作。


## 功能需求趋势

从近期的 Issues 和 PR 中可以提炼出以下社区重点关注的方向：

1. **审批流程自动化**：`--approve-for-me` 标志与 MCP 严格自动审批的落地，表明用户对无人值守/半自动工作流的需求显著提升，要求 Codex 在无需人工干预的情况下安全执行操作。

2. **上下文管理与性能优化**：图片 base64 重复发送（#28316）、会话状态无界增长（#25779）、轮次摘要分页加载（#36384）等，反映出长会话场景下的性能问题已成为社区高频痛点。用户需要可预测的资源消耗和稳定的长时运行体验。

3. **Windows 平台稳定性**：Git 不可用（#35119）、GPU 崩溃（#34133）、WSL 远程不可用（#31786）等问题集中爆发，Windows 用户体验与 macOS/Linux 存在明显差距，平台一致性修复需求迫切。

4. **可配置的交互行为**：禁用自动解析的诉求（#28969）获得 185 个 👍，用户希望更细粒度地控制 Codex 的交互节奏，包括提问等待时间和输入阻塞策略（PR #36410）。

5. **子代理体验优化**：“用户定义名称优先于运行时昵称”（#19186）与“动态子代理命名”（#29649）持续获得关注，多代理协作场景下用户需要更强的可辨识性和控制力。

6. **配额与额度透明度**：多个配额显示异常问题（#33216、#36369、#32250）表明用户对额度消耗的可预期性和显示准确性要求很高，尤其是付费用户对成本和额度敏感度持续提升。


## 开发者关注点

综合以上数据，开发者反馈中最集中的痛点和需求如下：

- **等待即扣费**：Codex 在等待/轮询期间反复进入模型消耗额度（#35259），用户对此强烈不满，要求区分“实际计算”与“状态轮询”的计费策略，或至少在 UI 中明确展示等待期间的消耗。

- **大文件/图片上下文失控**：base64 图片在后续请求中被重复发送（#28316），导致 token 无谓消耗和上下文膨胀。开发者需要 Codex 对多模态输入做更智能的上下文压缩或裁剪。

- **Windows 体验告急**：从 WSL 仓库误判（#35119）到截图崩溃（#34133），Windows 平台已被多个独立问题困扰。对于 Windows-only 的开发者团队，这些问题直接影响 Codex 的可用性评价。

- **“继续对话”流程脆弱**：侧边栏对话“在新任务中继续”报 "no rollout found"（#36061）、分叉任务继承未完成轮次（#36405），会话生命周期的边界管理不够健壮，破坏多轮跨任务工作流。

- **配额显示不一致**：显示 58% 配额剩余却触发限额提醒（#36369）、Spark 周限额卡在 100%（#33216），这类显示不一致问题削弱了用户对额度系统的信任，对 Plus/Pro 付费用户尤其敏感。

- **自动审批与安全边界**：虽然 `--approve-for-me` 广受欢迎，但社区对自动审批的安全性仍有疑虑，特别是 MCP 场景下的权限边界（#36365 的 fail-closed 设计在此背景下显得尤为重要）。

---

*日报生成时间：2026-08-01 | 数据范围：github.com/openai/codex 过去 24 小时更新*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-01

## 今日速览

今日发布两个补丁版本（v0.53.1、v0.54.0-preview.1），同步修复了容量耗尽导致的请求挂起问题。社区讨论高度集中在 Subagent 行为异常（如 MAX_TURNS 误报成功）、Auto Memory 系统稳定性与隐私隐患，以及 MCP OAuth 令牌刷新缺陷。多个高优先级 Issue 正在等待回归测试或寻求复现，Agent 对指令的遵从度和系统自省能力成为开发者关注的核心痛点。


## 版本发布

**v0.53.1（稳定版补丁）& v0.54.0-preview.1（预览版补丁）**
- 本次两个版本均通过 cherry-pick 提交 `f47d6c6`（来自 PR #28599 / #28566）实现同步修复。
- 核心修复内容：
  - **修复容量耗尽导致的请求挂起**：将容量耗尽（capacity exhaustion）分类为终止状态，避免无限重试（PR #28599）。
  - **传导无效流错误详情**：将 `InvalidStreamError` 的类型与消息从核心层传递至 CLI UI，以便在模型返回空响应时给出针对性建议（如提示用户执行 `/compress` 释放上下文）（PR #28566）。


## 社区热点 Issues（10 个）

1. **[P1/Bug] Subagent 达到 MAX_TURNS 被误报为 GOAL 成功** — #22323
   `codebase_investigator` 子代理在触发最大轮次限制、未执行任何分析的情况下，仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了实际中断，严重误导用户判断。
   社区反应：12 条评论，自 3 月提出以来持续活跃，处于 `need-retesting` 状态。
   链接: https://github.com/google-gemini/gemini-cli/issues/22323

2. **[P1/Bug] Shell 命令执行完毕后卡在 “Waiting input”** — #25166
   极简 shell 命令在执行完成后，UI 仍显示命令 active 并卡死，需要用户手动干预。该问题在 4 月被报告，至今未解决，已获得 3 个 👍。
   链接: https://github.com/google-gemini/gemini-cli/issues/25166

3. **[P1/Bug] Agent 反复忽略 GEMINI.md 中的硬性规则** — #27620
   开发者明确要求“未经逐次批准不得执行 git push”，Agent 却仍自动推送代码修复。指令遵从性问题再次被推至前台，目前处于 manual-triage。
   链接: https://github.com/google-gemini/gemini-cli/issues/27620

4. **[P1/Security] HITL 绕过漏洞：垂直换行注入 UI 截断** — #23433
   攻击者可在命令确认界面注入垂直换行符，实现 UI redressing，绕过 Human-in-the-Loop 确认机制。涉及安全底线，需要优先处理。
   链接: https://github.com/google-gemini/gemini-cli/issues/23433

5. **[P1/Bug] MCP HTTP OAuth 令牌刷新失败** — #23296
   远程 MCP 服务器的短期访问令牌过期后，活动会话中的工具调用无法自动刷新令牌，会话内调用直接失败。已关闭但社区仍在使用反馈中。
   链接: https://github.com/google-gemini/gemini-cli/issues/23296

6. **[P2/Bug] Auto Memory 对低信号会话无限重试** — #26522
   后台提取代理对低价值会话反复尝试读取，导致已处理的候选会话反复出现在索引中，浪费资源且干扰记忆系统。
   链接: https://github.com/google-gemini/gemini-cli/issues/26522

7. **[P2/Security] Auto Memory 缺少确定性脱敏** — #26525
   本地转录内容在发送给后台提取模型前未经可靠脱敏，隐私敏感信息存在泄露风险；日志系统亦可能记录已有技能内容。
   链接: https://github.com/google-gemini/gemini-cli/issues/26525

8. **[P2/Bug] 400 错误：工具数量超过 128 个** — #24246
   当启用的工具超过约 128 个时，请求返回 400 错误，缺少自动裁剪工具范围的智能逻辑，影响大型工作区。
   链接: https://github.com/google-gemini/gemini-cli/issues/24246

9. **[P1/Bug] browser subagent 在 Wayland 下失败** — #21983
   浏览器子代理在 Wayland 环境（Linux）下异常退出，虽显示 GOAL 但实际未完成任务，兼容性问题悬而未决。
   链接: https://github.com/google-gemini/gemini-cli/issues/21983

10. **[P1/Bug] 无权限情况下 Subagent 自动运行** — #22093
    自 v0.33.0 起，即便用户在配置中禁用了 Agents 模式，子代理（如 generalist）仍会被自动调用，用户预期仅使用 MCP 功能。
    链接: https://github.com/google-gemini/gemini-cli/issues/22093


## 重要 PR 进展（10 个）

1. **[修复] 保留 thoughtSignature 防止函数调用 400 错误** — PR #28607
   修复 v0.53.0 回归问题：`stripThoughts()` 误删了 `functionCall` 的 `thought_signature`，导致并行工具调用报 400 错误。与 #28586 为同一根因的并行修复方案。
   链接: https://github.com/google-gemini/gemini-cli/pull/28607

2. **[修复] Preview 模型 404 时自动回退至稳定版** — PR #28608
   使用 Gemini API Key 认证但缺少 preview 模型权限时，自动回退至稳定模型，避免因 404 导致初始化失败。
   链接: https://github.com/google-gemini/gemini-cli/pull/28608

3. **[修复] MCP OAuth 令牌刷新使用存储的 client ID** — PR #28481
   修复通过 OAuth discovery + 动态客户端注册配置的 MCP 服务器无法刷新令牌的问题，且刷新失败会删除已存储凭据的连锁缺陷。
   链接: https://github.com/google-gemini/gemini-cli/pull/28481

4. **[修复] macOS 沙箱模式 Seatbelt 配置文件缺失崩溃** — PR #28551
   解决 macOS/gMac 环境运行 `-s` 沙箱模式启动崩溃的问题：非 JS 静态资源未随 bundle 打包，现回退至内嵌配置文件。
   链接: https://github.com/google-gemini/gemini-cli/pull/28551

5. **[修复] SDK 会话中 console.error 替换为 debugLogger** — PR #28613
   规范日志输出，修正 SDK 中不符合项目约定的直接控制台输出。
   链接: https://github.com/google-gemini/gemini-cli/pull/28613

6. **[修复] InvalidStreamError 明细传导至 CLI UI** — PR #28566
   将后端 `InvalidStreamError` 的类型与消息透传到 UI 层，让 CLI 能显示针对性提示（如建议 `/compress`）。该 PR 已完成代码审查并关闭。
   链接: https://github.com/google-gemini/gemini-cli/pull/28566

7. **[修复] 补齐 VS Code IDE Companion 缺失的 Disposable 注册** — PR #28526
   修复因括号配对错误导致 `gemini.diff.accept` 命令与 `onDidChangeWorkspaceFolders` 订阅器未正确注册、造成资源泄漏的问题。
   链接: https://github.com/google-gemini/gemini-cli/pull/28526

8. **[修复] 保留 thoughtSignature 修复 400 错误（并行方案）** — PR #28586
   针对同一 400 错误的另一修复尝试，由不同贡献者提交，思路与 #28607 一致（独立开发，存在冲突可能性）。
   链接: https://github.com/google-gemini/gemini-cli/pull/28586

9. **[发布] v0.54.0-preview.1 补丁版本** — PR #28609
   自动化 cherry-pick 流程，将 Commit `f47d6c6` 补丁至 preview 分支，创建 v0.54.0-preview.1。
   链接: https://github.com/google-gemini/gemini-cli/pull/28609

10. **[发布] v0.53.1 稳定版补丁（含冲突）** — PR #28610
    自动化 cherry-pick 至稳定版分支时检测到合并冲突，需人工解决后合并。
    链接: https://github.com/google-gemini/gemini-cli/pull/28610


## 功能需求趋势

从活跃 Issues 与 PR 中可提炼出以下社区重点方向：

1. **Agent 行为可靠性与遵从度**：MAX_TURNS 误报、GEMINI.md 规则被忽略、工具数量上限导致的 400 错误、禁用的 Subagent 被自动调用等，均指向 Agent 对指令和配置的遵从度不足。
2. **Auto Memory 系统稳定性与安全性**：低信号会话无限重试 (`#26522`)、无效补丁静默跳过 (`#26523`)、无确定性脱敏 (`#26525`) 等问题，表明 Auto Memory 功能仍处于较早期阶段，社区对后台数据安全和使用效率关注显著。三连 Issue 来自同一维护者，说明该方向优先级正在被主动收敛。
3. **AST 感知能力的引入**：多个 Issue（#22745、#22746）在探讨用 AST 感知的文件读取/搜索优化代码库映射，可减少低效读取与 token 浪费。
4. **MCP 生态体验优化**：OAuth 令牌刷新缺陷（#23296 / PR #28481）引发社区连锁讨论，动态客户端注册的令牌生命周期管理是关键痛点。
5. **浏览器子代理兼容性**：Wayland 环境失败（#21983）、浏览器会话锁死恢复（#22232）、settings.json 覆盖被忽略（#22267），说明 browser_agent 的跨平台稳定性和配置能力亟待增强。
6. **深度自省与可观测性**：支持通过 `/chat share` 共享子代理轨迹（#22598）、bug 报告中补充子代理上下文（#21763）、Agent 能准确理解自身 CLI 参数与热键（#21432），反映开发者希望拥有更强的调试与透明度控制手段。
7. **新模型支持与管理**：即使在今日数据中，仍出现停用模型建议（如“停止建议 Gemini 1.5 Pro” #27604），说明模型推荐与用户预期之间仍存在错位。


## 开发者关注点

- **最大痛点**：Agent 在关键场景下的可靠性问题——轮次耗尽误报成功、指令遵从失败导致非预期 `git push`、长命令执行后 UI 假死，均直接影响开发者的信任感与日常工作流。
- **核心诉求**：对后台行为的可见性正在成为稀缺资源——子代理轨迹缺乏共享渠道、bug 报告缺少子代理上下文、Auto Memory 进程不透明，开发者要求更强的调试与审计能力。
- **安全与隐私敏感**：HITL 绕过漏洞（#23433）与 Auto Memory 未脱敏日志（#26525）说明社区对安全底线非常敏感。Auto Memory 的隐私设计缺陷由维护者主动追踪，预计后续会有系统级修复。
- **频繁反馈**：多个问题（如 #25166）已持续数周仍无修复，且部分高质量 PR（#28551、#28481）等待合并时间较长，可能对社区贡献者意愿产生一定影响。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**2026-08-01**


## 今日速览

今日最值得关注的是 **v1.0.78-0 预发布版本**，新增了 `/permissions` 命令用于切换审批模式，并默认开启了 `allowDevToolCaches` 沙箱设置以改善构建兼容性。社区方面，**plan-mode 权限回归**（#4188）正式关闭，但用户仍报告沙箱构建缓存相关体验问题；多个 **triage 级新 Issue** 集中爆发（会话因 `events.jsonl` 超长永久无法加载、任务完成机制覆盖用户显式指令等），值得关注。


## 版本发布

**v1.0.78-0**（预发布）

- **新增** `/permissions` 命令，支持在审批模式之间切换
- **新增** ACP 模式支持通过 `closeSession` 请求关闭会话
- **改进** 新的沙箱设置 `allowDevToolCaches`（默认开启）：允许沙箱化构建访问工具链缓存、注册表和安装包，以提升构建成功率


## 社区热点 Issues（10 个）

### 🔥 高热度 / 已关闭

**1. #4188 — [CLOSED] plan-mode 权限回归**
> 作者: wsilveiranz | 评论: 7 | 👍: 3

Plan 模式开始屏蔽 shell 命令，包括 `gh` CLI（此前用于在规划阶段读取/创建 issue）。作者认为这是回归。该 Issue 今日已关闭，但社区讨论热度高，说明 plan 模式的工具权限边界是敏感话题。

🔗 https://github.com/github/copilot-cli/issues/4188

---

**2. #4305 — [CLOSED] JS 'Undefined' 无法转换为 Rust 'String'**
> 作者: azat-badretdin | 评论: 4 | 👍: 4

升级到 1.0.76 后，几乎任何命令都会立即触发此错误（预发布版 1.0.76-2 同样存在）。4 👍 说明受影响用户不少，虽已关闭，但若未彻底修复可能再次爆发。

🔗 https://github.com/github/copilot-cli/issues/4305

---

**3. #4161 — [CLOSED] 切回 autopilot 模式后 `task_complete` 工具不可用**
> 作者: AlexMalfr | 评论: 4 | 👍: 4

这是 #1523 的回归——官方曾在 v1.0.4 声明 `task_complete` 在 autopilot 模式下始终可用，但当前版本中该工具仍可能被过滤掉。4 👍 表明此问题影响面较大。

🔗 https://github.com/github/copilot-cli/issues/4161

---

### 🆕 新提交 / Triage（今日新增）

**4. #4325 — [triage] `events.jsonl` 超过 V8 最大字符串长度后会话永久无法加载**
> 作者: MattPD | 评论: 0 （2026-08-01 创建）

长生命周期会话的 `events.jsonl` 超过 V8 字符串长度上限后，CLI 无法恢复该会话。文件完好、session-store 记录完整，但 CLI 无法加载。**长期使用者的定时炸弹**，需要关注官方是否提供会话拆分或压缩方案。

🔗 https://github.com/github/copilot-cli/issues/4325

---

**5. #4318 — [triage] Autopilot 任务完成机制可覆盖用户显式指令**
> 作者: wekempf | 评论: 1

用户明确指示 agent「仅做研究与解释」，但 autopilot 的任务完成强制机制仍会驱动 agent 继续执行操作。涉及任务完成判定与用户意图的优先级冲突，属于行为安全问题。

🔗 https://github.com/github/copilot-cli/issues/4318

---

**6. #4324 — [triage] Fork 后丢失 todos 并编辑了错误的 plan**
> 作者: xj-ms | 评论: 0

要求 Copilot 更新 plan 和 todo 列表时，它在 fork 的会话中更新了旧 plan，并报告 todo 列表为空。**plan 模式和会话 fork 场景的文件编辑目标选择逻辑存在问题**。

🔗 https://github.com/github/copilot-cli/issues/4324

---

**7. #4323 — [triage] `.mcp.json` 不支持注释，导致所有 workspace MCP 服务器被跳过**
> 作者: cthlo | 评论: 0

仓库级 `.mcp.json` 被严格按 JSON 解析，任何 `//` 或 `/* */` 注释都会导致整个文件被拒绝，所有 MCP 服务器失效。**MCP 配置可维护性问题**，社区长期诉求之一。

🔗 https://github.com/github/copilot-cli/issues/4323

---

**8. #4319 — [triage] Plan 模式切换会话后计划评审不显示，会话挂起**
> 作者: dejimarquis | 评论: 0

plan-mode 提示运行中切换到其他会话再切回，计划评审界面不渲染、会话挂死，只能强制终止。**Plan 评审 UI 的状态机存在缺陷**，直接影响核心工作流。

🔗 https://github.com/github/copilot-cli/issues/4319

---

### 📌 其他值得关注

**9. #4251 — [area:sessions] 恢复大型会话 OOM / CPU 占用约 70 分钟（1.0.74 回归）**
> 作者: oldake | 评论: 1

1.0.74 恢复大型会话时出现 OOM，内存约为 1.0.73 的 3–4 倍，CPU 峰值持续 70 分钟。**性能回归**，对长会话用户影响大。

🔗 https://github.com/github/copilot-cli/issues/4251

---

**10. #4078 — [area:sessions] 定时提示（`/every`、`/after`）会杀掉现有提示队列**
> 作者: darkmatter2222 | 评论: 4

N 个任务排队时触发定时提示，agent 处理完定时任务后不继续弹出队列中的下一个任务——队列永久卡住。**自动化工作流的关键缺陷**。

🔗 https://github.com/github/copilot-cli/issues/4078


## 重要 PR 进展

> 今日过去 24 小时仅有 2 条 PR 动态，均不涉及代码变更。以下是全量 PR 列表：

**1. #3163 — ViewSonic monitor**（OPEN）
> 作者: tijuks | 更新: 2026-07-31

非功能性 PR，疑似误提交或测试 PR（内容涉及 ViewSonic 显示器，与 Copilot CLI 无关）。社区可忽略或提醒维护者关闭。

🔗 https://github.com/github/copilot-cli/pull/3163

---

**2. #4316 — Create devcontainer.json**（OPEN）
> 作者: Pjrich1313 | 更新: 2026-07-31

新增 devcontainer.json 配置文件，便于容器化开发环境。未附带描述，功能性待审。

🔗 https://github.com/github/copilot-cli/pull/4316

---

**⚠️ 数据说明**：过去 24 小时无合并或可测试的功能性 PR（feature/fix），社区核心开发工作集中在 Issue 修复与 triage 中。


## 功能需求趋势

从近日 Issue 中可提炼出以下社区功能需求方向：

| 方向 | 代表 Issue | 需求描述 |
|------|-----------|---------|
| **多模态 / 终端渲染修复** | #4311, #4313 | 终端渲染空白、历史滚动、渲染性能问题集中爆发，终端 UI 稳定性成痛点 |
| **会话持久化 / 恢复** | #4325, #4251 | 大型会话恢复失败、`events.jsonl` 超长无法加载——长会话管理亟需改善 |
| **ACP 扩展能力** | #2109, #4174 | 社区持续呼吁 `ask_user` 风格扩展方法、token/context 使用量可见性 |
| **权限与安全边界** | #4188, #4318 | plan-mode 工具权限、autopilot 任务完成机制与用户指令冲突——行为边界需更精细控制 |
| **企业级配置管理** | #3909 | 企业管理员希望通过服务端集中下发 CLI 配置（环境变量等），而非仅限云端环境 |
| **MCP 配置可维护性** | #4323 | `.mcp.json` 注释支持，避免严格 JSON 解析导致整文件失效 |
| **新模型支持** | #3215, #4315 | 组织级启用新模型后 `/model` 列表不刷新、第三方模型（如 DeepSeek-V4）工具调用失败 |


## 开发者关注点

### 🔴 高频痛点（按影响面排序）

1. **会话恢复与内存问题**（#4325、#4251）：长会话用户频繁遭遇恢复失败、OOM、CPU 峰值问题，是当前最严重的稳定性隐患。

2. **Plan 模式可靠性**（#4188、#4319、#4324）：工具权限回归、会话切换挂死、fork 后 plan 编辑错乱——plan 模式是核心工作流，多项缺陷叠加影响信任度。

3. **Autopilot 行为边界**（#4318、#4161）：任务完成机制、`task_complete` 工具可用性、指令优先级——用户对 agent 自主行为的控制力存疑。

4. **版本升级回归**（#4305、#4251）：多个用户在 1.0.74–1.0.76 区间遭遇升级后新问题，**建议社区在升级前关注 release notes 中的 breaking changes**。

5. **定时任务队列缺陷**（#4078）：自动化工作流（`/every` 等）的队列处理逻辑有缺陷，影响 CI 类场景。

### 💡 积极信号

- v1.0.78-0 的 `allowDevToolCaches` 默认开启，直接回应了沙箱构建兼容性问题的社区反馈。
- 新增 `/permissions` 命令，增强用户对审批模式的主动控制。

---

> 日报数据来源：github.com/github/copilot-cli 公开 Issue / PR / Release 数据。所有链接可点击直达对应 GitHub 页面。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-01** | 数据来源：github.com/MoonshotAI/kimi-cli

---

## 今日速览

今日社区热度集中在两大长期功能诉求上：**远程控制（Remote Control）** 与**持久化记忆系统（Memory System）**，这两项 Issue 虽创建于二月，但近期持续获得关注更新。另有一个关键的 **Bug 报告** 关于对话输出自动滚动问题在近期被重新激活。此外，社区涌现一个针对工具调用 JSON 双重编码问题的修复 PR，直击多 Provider 场景下的兼容性痛点。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 社区热点 Issues

### 1. [#1282 [enhancement] 远程控制功能请求](https://github.com/MoonshotAI/kimi-cli/issues/1282)
- **状态**：OPEN | **更新**：07-31 | **👍**：23 | **💬**：9
- **内容**：允许用户从手机、平板或任意浏览器远程控制本地 CLI 会话，实现工作流无缝衔接。
- **重要性**：**过去24小时获赞最多的 Issue**，反映了开发者对跨设备工作流延伸的强烈需求。高赞数与持续讨论表明该特性可能成为 CLI 工具从单机走向云端协同的关键一步。

### 2. [#1283 [enhancement] 记忆系统 - 跨会话持久化上下文](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **状态**：OPEN | **更新**：07-31 | **💬**：8
- **内容**：实现自动记忆（AI 管理笔记）与手动记忆（用户自定义指令）机制，让 CLI 在跨会话中记住项目模式与用户偏好。
- **重要性**：与远程控制同源同作者，反映社区对"连续性"体验的追求——不止于设备跨越，更在于时间维度上的上下文积累。该功能对提升 Agent 类工具的实际生产力至关重要。

### 3. [#2422 [bug] 对话完成滚动查看时自动跳转底部](https://github.com/MoonshotAI/kimi-cli/issues/2422)
- **状态**：OPEN | **更新**：07-31 | **👍**：1 | **💬**：2
- **内容**：在 Kimi Code CLI 1.46.0 版本（kimi2.6 模型）中，对话结束后向上滚动查看历史输出时，界面会被强制拉回底部，影响阅读体验。
- **重要性**：一个直接影响用户体验的交互缺陷。虽赞数不高，但更新日期为今日，说明开发者正在关注中。在长对话或代码审查场景下，这类问题会显著干扰文本回溯效率。

### 4. [#796 [closed] 错误：位置1处消息角色设置问题](https://github.com/MoonshotAI/kimi-cli/issues/796)
- **状态**：CLOSED | **更新**：07-31
- **内容**：报告 KimiCLI/1.3 版本在调用 `kimi-for-coding` 模型时，LLM Provider 返回 HTTP 400 错误，提示消息角色设置异常。
- **重要性**：虽已关闭，但今日有更新（可能包含解决方案说明或回归测试验证）。作为历史遗留的 Provider 兼容性问题，其处理流程对后续类似问题有参考意义。

---

## 重要 PR 进展

### 1. [#2572 fix(kosong): 递归解包工具调用中的双重编码 JSON](https://github.com/MoonshotAI/kimi-cli/pull/2572)
- **作者**：aalhadxx | **更新**：07-31（今日创建并更新）| **状态**：OPEN
- **功能**：修复 Moonshot API 对 `function.arguments` 中嵌套数组/对象值进行字符串化（double-encode）时，导致 Pydantic 校验失败的问题。此修复通过递归解码逻辑，确保 `SetTodoList`、`ExitPlanMode`、`StrReplaceFile` 等包含复杂参数的工具调用在第三方 Provider 环境下也能正常工作。
- **重要性**：**今日唯一更新的 PR，直击多 Provider 兼容性痛点**。对于依赖非 Moonshot 官方 API 的开发者而言，此修复意味着更低的接入门槛。递归解包方案简洁且具有通用性，有望加速合入。

---

## 功能需求趋势

从近期活跃的 Issue 中可以提炼出以下社区关注方向：

1. **跨设备远程控制**（#1282）：从桌面延伸到移动端的无缝工作流恢复。
2. **持久化记忆系统**（#1283）：跨会话积累项目上下文与个人偏好，提升长期使用效率。
3. **交互体验细节优化**（#2422）：如终端输出的滚动、查看与回溯行为，表明工具已进入"精雕细琢"阶段，用户开始关注此类细节。

---

## 开发者关注点

- **上下文连续性的双重期待**：开发者同时关注"空间"（远程控制，跨设备）与"时间"（记忆系统，跨会话）两个维度的连续性，期望 CLI 成为真正"随身携带"的 AI 结对编程伙伴。
- **第三方 Provider 兼容性需求上升**：PR #2572 直指 Moonshot API 与第三方 Provider 在复杂参数编码上的差异，说明部分社区成员在使用非官方 API 网关或代理，对中间层兼容性有实际需求。
- **终端交互打磨成为新焦点**：滚动、回看等基础交互的缺陷开始被高频反馈，暗示 CLI 核心功能已趋稳，用户注意力正转向细节体验。

---

*本日报由 AI 自动生成，数据基于 GitHub Public API 实时抓取，供技术开发者快速了解社区动态。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-01

> 数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 今日速览

OpenCode Go 订阅服务的稳定性成为今日社区最大焦点：`401 Request blocked by upstream provider` 错误已持续一周，影响大量付费用户，多条相关 Issue 评论数居高不下。与此同时，DeepSeek V4 Flash 正式版上线引发社区对模型可用性的关注，而关于 Go 服务隐私政策悄然变更的讨论（`零数据保留`表述被移除）也迅速升温。TUI 黑屏/输入遮挡等历史问题依旧活跃，缓存稳定性相关的 PR 系列正在持续推进中。

---

## 社区热点 Issues

### 1. [Bug] OpenCode Go: return 401 Request blocked by upstream provider — chat/completions blocked while /v1/models works
- **#38257** | `作者: lizijiangyyjx` | `评论: 42` | `👍: 11`
- **链接**: [Issue #38257](https://github.com/anomalyco/opencode/issues/38257)
- **重要性**: 影响所有 OpenCode Go 订阅用户，`chat/completions` 端点被上游拦截而 `/v1/models` 正常。已持续 10 天未解决，且与其他 Zen/Go 相关 Issue（#39827）形成佐证，疑似服务端系统性故障。
- **社区反应**: 42 条评论为近 24 小时最高，用户普遍反映问题可复现，但官方暂无明确回应。

### 2. [Bug] Black screen on just installed opencode
- **#10221** | `作者: akopichin` | `创建: 2026-01-23` | `更新: 2026-07-31` | `评论: 33` | `👍: 17`
- **链接**: [Issue #10221](https://github.com/anomalyco/opencode/issues/10221)
- **重要性**: 老牌黑屏问题（续 #4140），至今仍被反复提及。用户安装后无法进入 TUI，日志输出异常。这类问题严重影响新用户体验和社区口碑。
- **社区反应**: 高赞但长期悬而未决，用户多次催促修复。

### 3. [Bug] OpenCode Go: 401 blocked by upstream provider — 影响 Go 订阅所有模型，/v1/models 却正常
- **#38257** | `作者: lizijiangyyjx` | `创建: 2026-07-22` | `更新: 2026-07-31` | `评论: 42` | `👍: 11`
- **链接**: [Issue #38257](https://github.com/anomalyco/opencode/issues/38257)
- **重要性**: 同上（与 #1 重复？无，但内容相近——此为单独 Issue）。

### 4. DeepSeek V4 Flash formal version (0731) — is it already live on OpenCode Go/Zen?
- **#39823** | `作者: Johell1NS` | `创建: 2026-07-31` | `更新: 2026-07-31` | `评论: 22` | `👍: 20`
- **链接**: [Issue #39823](https://github.com/anomalyco/opencode/issues/39823)
- **重要性**: 今日最热新 Issue。DeepSeek V4 Flash 正式版发布当天，用户立即询问 OpenCode Go/Zen 是否已同步上线。20 个 👍 显示社区对最新模型的支持速度有较高期待。
- **社区反应**: 用户积极确认版本状态，同时关注 agent 能力提升（Terminal Bench 82.7 等）。

### 5. [Bug] Progress halts with qwen 3.6 35b-a3b with naked tool call in the console
- **#24316** | `作者: boutell` | `创建: 2026-04-25` | `更新: 2026-07-31` | `评论: 20` | `👍: 2`
- **链接**: [Issue #24316](https://github.com/anomalyco/opencode/issues/24316)
- **重要性**: 模型输出裸 `<tool_call>` 导致会话中断。涉及 qwen 3.6、llama.cpp 与 OpenCode 三方交互，排查难度高，但问题长期存在影响本地模型用户。
- **社区反应**: 评论持续讨论根因归属，暂无定论。

### 6. [Bug] message="exiting loop"
- **#38801** | `作者: josephtingiris` | `创建: 2026-07-25` | `更新: 2026-07-31` | `评论: 19` | `👍: 0`
- **链接**: [Issue #38801](https://github.com/anomalyco/opencode/issues/38801)
- **重要性**: 用户形容“每次打开都失望”，错误信息 `exiting loop` 影响多种 OpenAI API 兼容服务。作者尝试 step=80 等参数仍未解决，反映 TUI 稳定性问题依旧尖锐。
- **社区反应**: 多个用户分享类似经历，希望官方优先处理循环退出逻辑。

### 7. [Bug] session/update notifications sent after session/prompt response (end_turn)
- **#17505** | `作者: hancengiz` | `创建: 2026-03-14` | `更新: 2026-07-31` | `评论: 15` | `👍: 10`
- **链接**: [Issue #17505](https://github.com/anomalyco/opencode/issues/17505)
- **重要性**: 将 OpenCode 作为 ACP Provider 集成时，`session/update` 在 `end_turn` 之后才到达，导致 UI 内容不完整。直接影响第三方客户端集成（如 Fabriqa），对生态建设尤为重要。
- **社区反应**: 集成方明确表述影响，期待尽快修复。

### 8. OpenCode Go: clarify which models are self-hosted vs. proxied through third-party providers
- **#24649** | `作者: Mikkelka` | `创建: 2026-04-27` | `更新: 2026-08-01` | `评论: 14` | `👍: 31`
- **链接**: [Issue #24649](https://github.com/anomalyco/opencode/issues/24649)
- **重要性**: 31 个 👍 为所有 Issue 中最高。用户质疑 Go 文档中的“基础设施”声明，要求澄清模型自托管与第三方代理的差异。近期隐私变更加剧了此类关切。
- **社区反应**: 讨论聚焦于信任与透明度，官方未予实质回应。

### 9. Allow selecting text
- **#927** | `作者: KTibow` | `创建: 2025-07-12` | `更新: 2026-07-31` | `评论: 13` | `👍: 29`
- **链接**: [Issue #927](https://github.com/anomalyco/opencode/issues/927)
- **重要性**: 29 👍 的老需求：TUI 中无法选中/复制文本，默认光标为 `default` 而非 `text`。一年来仍未实现，属于基础可用性痛点。评论数超过 13 条，用户持续关注。
- **社区反应**: 高频基础体验诉求，等待官方支持。

### 10. [Feature] Removal of zero-data-retention policy
- **#39861** | `作者: 99991` | `创建: 2026-07-31` | `更新: 2026-08-01` | `评论: 5` | `👍: 13`
- **链接**: [Issue #39861](https://github.com/anomalyco/opencode/issues/39861)
- **重要性**: 用户发现 OpenCode Go 文档中“零数据保留”表述被“移除”并由相关 #39875 跟进，13 👍 显示社区重视数据隐私承诺的变更。与 #24649、#39875 构成隐私讨论链。
- **社区反应**: 要求恢复原措辞或补充竞品对比说明。

---

## 重要 PR 进展

### 1. fix(cache): 稳定系统前缀 / 缓存审计日志
- **#27378 (CLOSED)** | `作者: martinffx` | `更新: 2026-08-01`
- **链接**: [PR #27378](https://github.com/anomalyco/opencode/pull/27378)
- **内容**: 缓存修复栈（3/4）：`OPENCODE_EXPERIMENTAL_CACHE_STABILIZATION` 标志下稳定系统前缀，以提升 Anthropic 缓存命中率。关闭状态，为后续合并做准备。

### 2. fix(cache): 改善 Anthropic 提示缓存命中率（系统拆分+工具稳定性）
- **#14743 (OPEN)** | `作者: bhagirathsinh-vaghela` | `更新: 2026-08-01`
- **链接**: [PR #14743](https://github.com/anomalyco/opencode/pull/14743)
- **内容**: 修复跨仓库、跨会话的 Anthropic 提示缓存未命中问题；同会话缓存已可用，本次处理跨会话场景。与 #27378 同属缓存优化系列。

### 3. feat(tui): 跨配置根目录发现插件
- **#39988 (OPEN)** | `作者: kitlangton` | `更新: 2026-08-01`
- **链接**: [PR #39988](https://github.com/anomalyco/opencode/pull/39988)
- **内容**: 从全局配置目录及所有祖先 `.opencode/plugins/tui/` 目录发现客户端本地 TUI 插件，覆盖 TUI 启动后新建的目录。替代 #39981 的窄修复，提升插件生态灵活度。

### 4. feat: 增加 `OPENCODE_AIRGAP` 环境变量（禁网模式）
- **#39994 (OPEN)** | `作者: RuofengX` | `创建: 2026-08-01`
- **链接**: [PR #39994](https://github.com/anomalyco/opencode/pull/39994)
- **内容**: 为内网/隔离环境提供单一切换开关；禁用自动外联，但保留用户自定义端点（如 MCP、webfetch）。状态为 `needs:compliance`，或涉及合规审查。

### 5. feat(app): 可配置发送键（Enter / Shift+Enter / Ctrl+Enter）
- **#39985 (OPEN)** | `作者: PureLin` | `更新: 2026-08-01`
- **链接**: [PR #39985](https://github.com/anomalyco/opencode/pull/39985)
- **内容**: 在设置 → 常规 → 输入中新增发送键模式选择：Enter（默认）、Shift+Enter、Ctrl/Cmd+Enter。解决误触发送场景，属于体验增强。标记为 `needs:compliance`。

### 6. feat(session): 调试循环检测——相同 shell 命令持续失败时注入提示
- **#39990 (OPEN)** | `作者: openchat-ai` | `创建: 2026-08-01`
- **链接**: [PR #39990](https://github.com/anomalyco/opencode/pull/39990)
- **内容**: 基于 #39772 的循环检测方案：相同命令多次失败时，向模型注入“你可能在假设循环”提示，打断无效迭代。同日提交，属“调试体验”系列新功能。

### 7. fix(tui): 与外部 TSX 插件共享运行时（OpenTUI/Solid）
- **#39983 (CLOSED)** | `作者: kitlangton` | `更新: 2026-08-01`
- **链接**: [PR #39983](https://github.com/anomalyco/opencode/pull/39983)
- **内容**: 外部 TSX 插件在打包后的 Bun 可执行文件中使用宿主 TUI 的 OpenTUI 与 Solid 运行时，修复插件局部 `createSignal` 仅首次渲染的问题。已关闭，提升插件兼容性。

### 8. feat(tool): shell 命令失败的简洁错误输出
- **#39982 (OPEN)** | `作者: openchat-ai` | `创建: 2026-08-01`
- **链接**: [PR #39982](https://github.com/anomalyco/opencode/pull/39982)
- **内容**: #39771 的第三部分。此前 #39978 已实现智能超时（网络 15s、构建 300s）；本 PR 在命令失败时输出精炼的错误信息（而非完整堆栈），减少上下文噪音。

### 9. fix(tui): 会话标签拖拽仅持久化一次
- **#39942 (CLOSED)** | `作者: kitlangton` | `更新: 2026-08-01`
- **链接**: [PR #39942](https://github.com/anomalyco/opencode/pull/39942)
- **内容**: 修复拖拽标签时每次跨越槽位都会触发 flock → 读 → 写 → 协调循环的问题，改为单次持久化。降低 `tabs.json` 写入频率，提升拖拽流畅度。

### 10. feat(tui): 透明背景切换（auto/on/off）
- **#5657 (OPEN)** | `作者: JosXa` | `创建: 2025-12-17` | `更新: 2026-08-01`
- **链接**: [PR #5657](https://github.com/anomalyco/opencode/pull/5657)
- **内容**: 引入三态透明度策略 `auto|on|off`，通过 `theme.transparency` 命令在调色板切换。长时间挂起的请求，今日更新，可能接近合并。属于外观可定制需求。

---

## 功能需求趋势

| 需求方向 | 相关 Issue / PR | 热度信号 |
|---------|----------------|---------|
| **模型可用性与服务稳定性** | #38257、#39827、#39823 | 42 条评论、20 👍 |
| **数据隐私与透明度** | #39861、#39875、#24649 | 31 👍、20 👍 |
| **TUI 可用性** | #927、#10221、#38801 | 29 👍、17 👍 |
| **提示缓存与性能** | #23595、#37489、PR #14743/#27378 | 多 PR 同步推进 |
| **调试体验优化** | #39772、PR #39990、PR #39982 | 新功能方向，环检测 |
| **本地化完善** | #39925 | 中文汉化不完整 |
| **应用集成能力** | #39936（VS Code 通知）、#17505（ACP） | 生态扩展需求 |

---

## 开发者关注点

1. **支付服务可靠性**：OpenCode Go 的 401 错误持续多日未解决，付费用户的信任度正在下降。多个 Issue（#38257、#39827）相互印证，社区呼吁官方明确状态与修复时间表。

2. **零保留政策变更引发信任危机**：文档中“零数据保留”措辞被悄然移除，用户通过 #39861、#39875 要求恢复表述或补充隐私政策。并与此前的模型来源疑问（#24649）叠加，隐私与透明度的诉求高度集中。

3. **TUI 基础体验长期不佳**：黑屏（#10221、#4140）、输入框遮挡（#38773）、文本无法选中（#927）、`exiting loop`（#38801）等老问题至今未根治，新用户入门成本高。

4. **模型迭代的适配速度**：DeepSeek V4 Flash 正式版上线当天，即有用户追问 Go/Zen 支持状态（#39823），说明社区希望 OpenCode 作为聚合层能快速跟进前沿模型。

5. **缓存效率成为性能瓶颈**：系统提示词位置漂移导致缓存未命中（#23595）、上下文缓存失效（#37489），相关修复 PR 系列（#14743、#27378）正密集推进，但在合并前本地大模型用户仍受影响。

---

> **说明**：以上内容基于 2026-08-01 抓取的 GitHub 数据整理。PR 评论数暂未明确展示，故以状态与内容优先级为主；部分状态标注（如 `[needs:compliance]`）为仓库自身标记，未做额外处理。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，这是 2026 年 8 月 1 日的 Pi 社区动态日报。

---

## Pi 社区动态日报 — 2026-08-01

### 今日速览
Pi 项目昨日经历了高强度开发与社区反馈。**性能与稳定性是核心焦点**，多个关键 PR 针对 O(n²) 的 JSON 输出、SQLite 会话操作和 CPU 占用问题进行了修复。同时，社区对 **Wayland 剪贴板支持**和**新模型（如 Baseten、Kimi K3）的集成需求**强烈，相关 PR 已迅速合并。

### 社区热点 Issues
1.  **[#6879] auto-compaction 在上下文超限后仍不触发** (👍 5, 评论 7)
    - **重要性**: 高。会话在超过 100% 上下文窗口后仍继续运行，直到 API 拒绝请求，这会导致昂贵的 token 消耗和任务失败。
    - **社区反应**: 用户呼吁在每次 agent 操作后检查上下文用量，而不是等到 provider 报错。
    - 链接: https://github.com/earendil-works/pi/issues/6879

2.  **[#6187] WSL 环境下浏览器授权后 Pi 登录挂起**
    - **重要性**: 高。影响所有在 WSL 下使用 GitHub Copilot 的用户，设备已注册但客户端无法检测到，导致流程中断。
    - **社区反应**: 评论较多，但没有提供直接的解决方案，问题仍处于打开状态。
    - 链接: https://github.com/earendil-works/pi/issues/6187

3.  **[#6665] TUI 在流式输出时单核 CPU 占用 100%**
    - **重要性**: 高。长时间会话中性能严重下降，影响用户体验。问题定位到 `Intl.Segmenter` 未缓存和 Markdown 重建逻辑。
    - **社区反应**: 已被标记为 *inprogress*，表明维护者已接受并正在修复。
    - 链接: https://github.com/earendil-works/pi/issues/6665

4.  **[#7020] 压缩（compaction）后 Pi 偶发不继续执行**
    - **重要性**: 中高。频繁在长会话（协调器模式）中出现，打断工作流。
    - **社区反应**: 用户抱怨该问题，但无明确解决方案，仍处于打开状态。
    - 链接: https://github.com/earendil-works/pi/issues/7020

5.  **[#7053] 并行工具调用时，若一个工具停滞，已完成的结果会丢失**
    - **重要性**: 中高。在复杂的 agent 任务中会导致数据混乱和错误执行。
    - **社区反应**: 指出了上一轮修复的不彻底性，问题复现路径清晰。
    - 链接: https://github.com/earendil-works/pi/issues/7053

6.  **[#7290] `--mode json` 输出 O(n²) 数据，大文件写入可致 OOM**
    - **重要性**: 中高。严重影响依赖 JSON 模式进行自动化集成的用户。
    - **社区反应**: 用户详细描述了问题，且社区已有对应的 PR (#7394) 来修复此问题。
    - 链接: https://github.com/earendil-works/pi/issues/7290

7.  **[#7248] Wayland 下 Ctrl+V 粘贴文本静默失败**
    - **重要性**: 中。影响特定环境（Wayland + Konsole）下的文本交互，是一个明确的 bug。
    - **社区反应**: 已作为 bug 被修复（见 PR #7387），问题已关闭。
    - 链接: https://github.com/earendil-works/pi/issues/7248

8.  **[#7319] kimi-coding OAuth 401 错误不会触发刷新或重试**
    - **重要性**: 中。导致 Kimi 订阅用户间歇性遇到认证失败，且无法自动恢复。
    - **社区反应**: 问题报告详细，指出了 401 被排除在重试逻辑之外的原因。
    - 链接: https://github.com/earendil-works/pi/issues/7319

9.  **[#7149] 官方 Linux x64 二进制在 Sandy Bridge 等旧 CPU 上崩溃 (SIGILL)**
    - **重要性**: 中。影响使用旧硬件的用户，npm 包正常但二进制崩溃，问题定位明确为编译目标过高。
    - **社区反应**: 已有对应 PR #7390 修复。
    - 链接: https://github.com/earendil-works/pi/issues/7149

10. **[#6996] Gemini 3.x 因缺少 `thought_signature` 导致工具调用失败**
    - **重要性**: 中。功能性问题，导致 Gemini 3.x 模型无法在工具调用场景下正常工作。
    - **社区反应**: 尚在讨论阶段，等待维护者确认。
    - 链接: https://github.com/earendil-works/pi/issues/6996

### 重要 PR 进展
1.  **[#7394] fix(coding-agent): make JSON streaming output linear**
    - **功能**: 修复 #7290。将 JSON 输出模式从 O(n²) 降为 O(n)，改为只发送增量更新，避免大文件写入时内存溢出。
    - 链接: https://github.com/earendil-works/pi/pull/7394

2.  **[#7387] fix(coding-agent): read clipboard text on Wayland**
    - **功能**: 修复 #7248。当检测到 Wayland 环境时，优先使用 `wl-paste` 读取剪贴板，解决了 Ctrl+V 粘贴失效的问题。
    - 链接: https://github.com/earendil-works/pi/pull/7387

3.  **[#7390] fix(coding-agent): target baseline x64 CPUs**
    - **功能**: 修复 #7149。将编译目标调整为更基础的 x64 指令集，避免在旧 CPU 上出现非法指令错误。
    - 链接: https://github.com/earendil-works/pi/pull/7390

4.  **[#7410] fix(agent): make SQLite session operations linear**
    - **功能**: 优化 SQLite 会话存储性能，避免每次追加时克隆整个缓存，并增强了事务失败时的缓存一致性。
    - 链接: https://github.com/earendil-works/pi/pull/7410

5.  **[#7398] feat(agent): add per-session store queues**
    - **功能**: 为内存和 JSONL 存储引入每会话队列，在保证不同会话并发操作的同时，确保同一会话的写操作是串行的。
    - 链接: https://github.com/earendil-works/pi/pull/7398

6.  **[#7404] feat(ai): add Baseten provider**
    - **功能**: 新增 Baseten 作为内置 API-key 模型提供商，采用 OpenAI 兼容接口，用户可直接使用 Baseten 上的模型。
    - 链接: https://github.com/earendil-works/pi/pull/7404

7.  **[#7386] feat(server): add composable protocol server**
    - **功能**: 引入了传输无关的 `PiServer`，支持组合式监听器生命周期，为构建可扩展的服务端架构打下基础。
    - 链接: https://github.com/earendil-works/pi/pull/7386

8.  **[#7396] feat(coding-agent): add server session backend**
    - **功能**: 为 `PiServer` 添加持久化会话后端，将会话保存为 JSONL 格式，支持跨进程锁和崩溃恢复。
    - 链接: https://github.com/earendil-works/pi/pull/7396

9.  **[#7389] Add native prompt API for extensions**
    - **功能**: 为扩展系统新增原生 `pi.prompt()` API，扩展开发者可以更轻松地处理用户输入，并复用原生命令、技能等处理逻辑。
    - 链接: https://github.com/earendil-works/pi/pull/7389

10. **[#7408] feat(agent): add storage-owned session readers**
    - **功能**: 重构会话数据读取逻辑，将 `SessionReader` 能力下沉至存储层，优化了 SQLite 的索引读取性能，并统一了不同存储后端的行为。
    - 链接: https://github.com/earendil-works/pi/pull/7408

### 功能需求趋势
- **性能与资源占用优化**: 大量 Issues 和 PRs 关注于 CPU 占用过高（#6665）、输出传输效率（#7290）和存储操作性能（#7410, #7398）。这表明社区对 Pi 在大规模、长时间会话中的资源效率和响应速度有很高要求。
- **新模型与 Provider 支持**: 社区持续推动对新模型和服务的集成，如 Kimi K3 (#7199)、Baseten (#7404) 和 Amazon Bedrock Mantle (#6216)。这反映出用户希望 Pi 能跟上模型生态的快速发展。
- **服务端与无人值守模式增强**: 一系列关于 `server`、`protocol`、`session backend` 的 PR（#7386, #7396, #7408, #7409）表明项目正在积极强化其作为后端服务的潜力，满足自动化、批处理和多人协作场景的需求。
- **扩展能力提升**: 新增的原生 `pi.prompt()` API (#7389) 和修复扩展命令触发问题 (#7277) 表明社区正在为第三方扩展提供更强大、更底层的接口，以构建更复杂的工具链。

### 开发者关注点
- **稳定性痛点**: 开发者不仅在关注功能缺失，更在意各种情况下的稳定性问题。例如，压缩 (compaction) 后不继续执行 (#7020)、并行工具调用偶发数据丢失 (#7053)，以及认证中断后无法自动恢复 (#7319) 是当前社区反馈的集中痛点。
- **环境兼容性**: 除了 Wayland 剪贴板问题 (#7248)，WSL 环境下的登录问题 (#6187) 和旧 CPU 架构的崩溃问题 (#7149) 也受到重点关注。这表明 Pi 的用户群体多样，对跨平台和跨硬件兼容性的要求很高。
- **对透明度和修复速度的期待**: 从 Issue 的 "inprogress" 标签和大量快速被关闭的 PR 来看，维护者响应积极。开发者们正通过详细的 bug 报告（如 #7290 和 #6665）和直接的修复 PR，与核心团队形成高效的协作闭环。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-01

## 1. 今日速览

今日发布了 **v0.21.2** 版本，Autofix 功能在连续五轮后开始延迟低严重性建议，并在拒绝继续时发布可见通知。社区热度集中在 **多工作区 daemon 资源管理**（#6378、#8051、#8182）与 **Anthropic 转换器系列 bug 修复**（#8039、#8159、#8160、#8161），CI 自动化测试失败占据了较多 Issue 数量但多数已关闭或由 bot 自动跟进。

## 2. 版本发布

### v0.21.2
- **Autofix 行为优化**：连续五轮后延迟低严重性建议，并在因轮次限制拒绝继续时发布可见通知（[#7913](https://github.com/QwenLM/qwen-code/pull/7913)、[#8067](https://github.com/QwenLM/qwen-code/pull/8067)）。

## 3. 社区热点 Issues

1. **[RFC] 单 daemon 支持多工作区**（#6378，31 评论，已关闭）
   社区讨论最热烈的 RFC，提出从"1 daemon = 1 workspace × N sessions"模型演进为多工作区支持，同时保持现有客户端的单工作区行为不变。相关资源限制跟踪见 [#8051](https://github.com/QwenLM/qwen-code/issues/8051)。→ [链接](https://github.com/QwenLM/qwen-code/issues/6378)

2. **daemon 给每个 ACP 子进程授权 50% 主机内存**（#8182，3 评论）
   `getAcpMemoryArgs()` 基于主机内存计算 V8 老生代上限，从不按子进程数均分，多个 ACP 子进程并发时存在内存过载风险。→ [链接](https://github.com/QwenLM/qwen-code/issues/8182)

3. **Anthropic 4.6+ assistant-prefill 400 错误**（#8039，6 评论，已关闭）
   影响所有 Claude Opus/Sonnet 4.6+ 及 5.x 系列（Fable 5、Mythos 5、Sonnet 5 等）。当 Gemini 格式历史以模型轮次结尾且无后续消息时，assistant 预填充触发 400；同时 `thinking.display` 静默默认 `omitted`。→ [链接](https://github.com/QwenLM/qwen-code/issues/8039)

4. **工具发现使 prompt 缓存前缀失效**（#6721，7 评论）
   延迟工具通过 `tool_search` 被找到后，真实工具 schema 被解析并调用 `setTools()`，导致新工具声明破坏 prompt 缓存前缀命中率。→ [链接](https://github.com/QwenLM/qwen-code/issues/6721)

5. **长会话中模型输出 XML 风格工具调用**（#8003，3 评论，已关闭）
   200+ 轮、180K+ token 长会话中，`qwen3.8-max-preview` 偶发将工具调用输出为 `<invoke>`/`<parameter>` 纯文本而非结构化 `tool_calls`。→ [链接](https://github.com/QwenLM/qwen-code/issues/8003)

6. **JSON 风格工具参数泄漏为纯文本**（#8207，3 评论）
   模型在应当输出结构化 `tool_call` 时，将工具参数序列化为纯文本，导致下游工具执行失败，影响 DataAgent 多子代理并行分发场景。→ [链接](https://github.com/QwenLM/qwen-code/issues/8207)

7. **Windows 下 @-文件读取验证失效**（#8227，3 评论）
   接 #7206 的加固工作，Windows 平台 `O_NOFOLLOW` 不存在，dev/ino 身份检查可能无效且无测试覆盖。→ [链接](https://github.com/QwenLM/qwen-code/issues/8227)

8. **QQ 机器人频道截断发送者 openid**（#8232，3 评论）
   `prepareGroupMessage()` 将发送者 openid 截断为前 8 个十六进制字符加省略号，模型无法使用 `<@OPENID>` 标签正确 @ 提及发送者。→ [链接](https://github.com/QwenLM/qwen-code/issues/8232)

9. **多轮思考签名仅保留第一个**（#8258，2 评论）
   `geminiChat.ts` 历史合并将单轮中所有 thought 标记部分合并为一个 blob，只保留第一个 `thoughtSignature`，多推理片段（如并行工具调用的多段推理）信息丢失。→ [链接](https://github.com/QwenLM/qwen-code/issues/8258)

10. **启动时 SGR 鼠标转义序列泄漏**（#8267，2 评论，已关闭）
    v0.21.2 启动后终端输入框出现大量原始 SGR 鼠标转义序列（`ESC [ < button;x;y M`），被当作普通文本注入输入缓冲区，影响正常输入。→ [链接](https://github.com/QwenLM/qwen-code/issues/8267)

## 4. 重要 PR 进展

1. **修复 ACP cron 测试等待真实分钟边界**（#8243）
   启用 `QWEN_CODE_TEST_CRON_FAST` 测试缝，cron 任务 5 秒后自动触发，替代等待真实时钟分钟边界，缩短 CI 测试时间。→ [链接](https://github.com/QwenLM/qwen-code/pull/8243)

2. **稳定 thinking 块高度 + 内联 Ctrl+O 切换**（#8077，已合并）
   流式思考预览默认隐藏，块保持恒定 1 行头部，消除页面重排闪烁；将全屏转录覆盖层替换为内联展开/折叠所有思考块的切换。→ [链接](https://github.com/QwenLM/qwen-code/pull/8077)

3. **Anthropic 级联剥离孤儿 tool_use 的 thinking 兄弟块**（#8166）
   `cleanOrphanedToolCalls` 剥离孤儿 `tool_use` 时，级联删除同轮中与之关联的 `thinking`/`redacted_thinking` 兄弟块，并增加空 thinking 内容的兜底过滤。→ [链接](https://github.com/QwenLM/qwen-code/pull/8166)

4. **合并本地与 CI 的 Autofix 流程**（#8121，已合并）
   扩展 `/autofix` 技能，支持无参数直接调用以审查并修复当前本地工作区，同时保持 GitHub Actions 控制平面不变。→ [链接](https://github.com/QwenLM/qwen-code/pull/8121)

5. **移除 ACP 对私有 serve 模块的依赖**（#8141）
   将 workspace 内存诊断/摘要/限制、技能状态映射、服务器名校验、频道投递标准化/IPC 契约等从 `packages/cli/src/serve/**` 迁移至 `packages/cli/src/runtime/**`，解耦生命周期。→ [链接](https://github.com/QwenLM/qwen-code/pull/8141)

6. **TUI 图像显示工具**（#8217）
   新增模型可调用的 `display_image` 工具（仅主交互 TUI），验证绝对路径、PNG 签名、8 MiB 大小限制，仅持久化路径和 MIME 类型而非图像字节。→ [链接](https://github.com/QwenLM/qwen-code/pull/8217)

7. **Web Shell 打包为桌面应用**（#8132）
   将 Tauri 概念验证转为 release-ready 桌面壳，打包现有 Web Shell 而非维护另一套桌面 UI，负责原生生命周期（启动/恢复状态、workspace 管理等）。→ [链接](https://github.com/QwenLM/qwen-code/pull/8132)

8. **/review 测试计划校验 + A/B 测试框架**（#8215）
   为 `/review` 增加 Test Plan 声明检查、基于基础树的 A/B 验证框架、逐 hunk 探针测试能力。→ [链接](https://github.com/QwenLM/qwen-code/pull/8215)

9. **Web Shell 会话隔离自动 recap**（#8262）
   防止一个会话请求的自动 recap 在用户切换到另一会话后插入错误会话的转录本；每次请求记录来源会话和代数，只有所有权匹配才接受结果。→ [链接](https://github.com/QwenLM/qwen-code/pull/8262)

10. **Windows 粘贴文件支持**（#7957）
    通过现有剪贴板快捷键和空终端粘贴路径，支持从文件资源管理器复制的文件粘贴；纯图像选择走图像路径流，其他类型文件插入路径。→ [链接](https://github.com/QwenLM/qwen-code/pull/7957)

## 5. 功能需求趋势

- **多工作区 / daemon 资源管理**：从 #6378 RFC 延伸出 #8051 （资源上限跟踪）、#8182（ACP 子进程内存配额）等，社区对 `qwen serve` 生产级资源治理持续关注。
- **Anthropic 兼容性修复**：netbrah 连提 #8039、#8159、#8160、#8161 四个 bug，覆盖 prefill、tool_use 清理、ID 字符集、tool_result 排序，涉及所有 Claude 4.6+/5.x 用户，修复 PR #8166 已就绪。
- **会话功能增强**：新增 #8271 提议完整会话分支（含可选 Git worktree 隔离）；#8054 提议单开关禁用全部内置 skills；#8229 支持运行中会话的可变默认消息。
- **CI 自动化质量**：多个由 bot 上报的 E2E 失败（#8237、#8256、#8244、#8222 等）围绕 cron 测试异步时序和 SDK MCP Server 异步工具处理，测试提速 PR #8243 是及时响应。

## 6. 开发者关注点

- **长会话稳定性**：#8003（XML 风格工具调用）、#8258（多思考签名丢失）、#8207（工具参数纯文本泄漏）均指向长上下文/多轮场景下的模型输出格式不稳定性。
- **Windows 平台体验**：#5199（React 错误）、#8227（@-文件读取防护失效）、#7957（文件粘贴功能新增）显示 Windows 用户活跃反馈，安全与桌面体验并重。
- **工具调用与缓存**：#6721 揭示工具动态发现与 prompt 缓存之间的冲突，是性能敏感用户关注的核心问题。
- **终端 UI 细节**：#8267 的 SGR 转义泄漏为 v0.21.2 引入的新回归，已在 24 小时内关闭；#8214 的选中文本渲染问题也得到快速社区响应。
- **社区响应速度**：多个 P2/P3 优先级 bug（如 #8232）在创建 24 小时内获得多轮评论；自动化的 CI failure issue + autofix 流程已形成闭环，多数在创建当天即被标记为 `autofix/in-progress` 或直接关闭。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-01** | **数据来源：** [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（现为 CodeWhale）


## 1. 今日速览

昨日，**v0.9.3 正式发布**，标志着项目从 `deepseek-tui` 全面转向 **CodeWhale** 品牌，并原生支持 DeepSeek V4 Flash 响应。围绕新版本，社区提交了 10+ 个面向 **v0.9.3 的功能增强提案**，主要集中在 ACP 协议客户端、OAuth 无头认证和沙箱文件路径白名单等方向；同时，一个关于中长文本文件编辑高频失败的 bug 报告引发了开发者对工具诊断信息质量的讨论，对应的修复 PR 已提交。


## 2. 版本发布

### v0.9.3 — CodeWhale 品牌确立与 DeepSeek V4 Flash 支持

- **核心变化**：`codewhale` 成为正式产品名（源自 Shannon Labs），npm 包及资产统一更名；旧包 `deepseek-tui` 已弃用并停止更新
- **新增支持**：DeepSeek V4 Flash 直接响应接入
- **配套内容**：72 个单一关注点 commit 集成，合并了工具面精简、上下文压缩等多项优化（来自 PR #4993）

> 发布候选 SHA：`80c66ddd735387669b846e0af15ad35765c1c3b6`
> 发布 PR： [Hmbown/CodeWhale PR #4993](https://github.com/Hmbown/CodeWhale/pull/4993)


## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 摘要 | 社区反应 |
|---|-------|------|----------|
| 1 | [#5003 中长文本编辑反复失败](https://github.com/Hmbown/CodeWhale/issues/5003) | `File` 编辑工具在替换大段代码（700 行 C 文件、中文注释、CRLF）时反复失败（15+ 次），缺少可操作诊断信息，最终需外部脚本绕过 | 2 评论。反馈开发者在长文本替换场景下的典型痛点，对诊断信息质量提出了明确要求 |
| 2 | [#4949 “Constitution” 中文翻译之争](https://github.com/Hmbown/CodeWhale/issues/4949) | 讨论“Constitution”应译为“宪法”还是“协作准则”，涉及中文语境下的政治敏感性 | 5 评论。国际化协作中的文化适配议题，社区在等待共识 |
| 3 | [#5007 知名 Youtuber 未使用 CodeWhale](https://github.com/Hmbown/CodeWhale/issues/5007) | 社区成员发现其关注的 Youtuber 在测试 DeepSeek-v4-flash 时用了 Codex 而非 CodeWhale，认为社区需要提升影响力 | 5 评论。侧面反映了 CodeWhale 与 Codex 在 TUI 工具间的竞争态势 |
| 4 | [#5005 沙箱路径白名单需求](https://github.com/Hmbown/CodeWhale/issues/5005) | Xcode 构建产物体积大且位于 `~/Library/Developer/...`，当前 `workspace-write` 沙箱限制无法访问外部日志与构建产物 | 1 评论。沙箱模式与真实构建场景冲突的典型代表，影响 Xcode 重度用户 |
| 5 | [#5000 中断输出持久化](https://github.com/Hmbown/CodeWhale/issues/5000) | 回合被中断时（`MessageComplete` 前），已发出给用户的文本无引擎层持久化表示，重启后丢失 | 1 评论。属于会话一致性的基础架构问题，影响断点续聊体验 |
| 6 | [#5002 Tool 'task' 不可用 + API 400](https://github.com/Hmbown/CodeWhale/issues/5002) | 使用中报错 `Failed to locate tool: Tool 'task' is not available` 及 Anthropic API HTTP 400 | 1 评论。可能涉及工具注册或配置问题，需官方关注 |
| 7 | [#4998 无头 OAuth 完成路径](https://github.com/Hmbown/CodeWhale/issues/4998) | SSH/容器环境无法完成浏览器 OAuth 流程，需要 PKCE + loopback 优先 + 手动粘贴回调的通用方案 | 0 评论。服务器/容器场景的普遍痛点，属于基础能力完善 |
| 8 | [#4997 GitHub Copilot 作为 ACP worker](https://github.com/Hmbown/CodeWhale/issues/4997) | 建议将 Copilot agent mode 作为命名外部 ACP worker 后端（非 ProviderKind），运行时协商模型能力 | 0 评论。生态互操作方向的关键需求，若实现将显著扩展工具边界 |
| 9 | [#4996 协议中立 ACP 客户端](https://github.com/Hmbown/CodeWhale/issues/4996) | 需要有界、协议中立的 ACP 客户端层（stdio JSON-RPC + 能力协商），避免硬编码特定客户端行为 | 0 评论。与 #4997 配套，是外部编辑器/代理接入的基础设施 |
| 10 | [#5009 眼科计费广告](https://github.com/Hmbown/CodeWhale/issues/5009) | 明显的垃圾广告（眼科计费服务） | 2 评论。社区需要更积极的垃圾 Issue 治理机制 |


## 4. 重要 PR 进展（精选 10 条）

| # | PR | 说明 |
|---|-----|------|
| 1 | [#4993 Release v0.9.3](https://github.com/Hmbown/CodeWhale/pull/4993) | **已关闭**。v0.9.3 集成与发布列车：72 commits，DeepSeek V4 Flash + 工具规范化 |
| 2 | [#5008 文件编辑诊断增强](https://github.com/Hmbown/CodeWhale/pull/5008) | 针对 #5003：修复大段替换反复失败问题，新增可操作诊断信息与过期行号容错 |
| 3 | [#4977 AltGr 输入修复](https://github.com/Hmbown/CodeWhale/pull/4977) | **已关闭**。Windows 巴西 ABNT2 键盘下 AltGr+/ 误触帮助面板的问题修复 |
| 4 | [#5001 宽字符列宽修复](https://github.com/Hmbown/CodeWhale/pull/5001) | 修复 Enclosed Alphanumerics（①❷等）和 keycap 序列在 CJK 终端下 1 列 vs 2 列渲染不一致问题 |
| 5 | [#5006 Windows PATH 保护](https://github.com/Hmbown/CodeWhale/pull/5006) | 修复 NSIS 安装器因 `ReadRegStr` 缓冲区限制而覆盖超长用户 PATH 的问题 |
| 6 | [#4910 确定性验证面检查](https://github.com/Hmbown/CodeWhale/pull/4910) | Draft PR：关于是否有确定性验证面的“理智检查”，偏文档/流程探讨性质 |
| 7 | [#5004 Rustdoc 门禁修复](https://github.com/Hmbown/CodeWhale/pull/5004) | **已关闭**。恢复 v0.9.3 的 rustdoc 验证门禁（修复测试辅助函数的文档链接渲染） |
| 8 | [#5016 libc 依赖升级](https://github.com/Hmbown/CodeWhale/pull/5016) | dependabot：libc 0.2.186 → 0.2.189（新增 Emscripten pthread 相关支持） |
| 9 | [#5015 futures-util 升级](https://github.com/Hmbown/CodeWhale/pull/5015) | dependabot：futures-util 0.3.32 → 0.3.33（修复 `ReadLine` 相关行为） |
| 10 | [#5013 ratatui 升级](https://github.com/Hmbown/CodeWhale/pull/5013) | dependabot：ratatui 0.30.0 → 0.30.2（TUI 渲染框架补丁更新） |

> 另含 CI/依赖类 PR：clap_complete (#5014)、globset (#5011)、docker/login-action (#5012)、actions/stale (#5010)。


## 5. 功能需求趋势

从近 24 小时活跃 Issue 中可提炼出以下社区关注方向：

- **外部生态互操作**（3 条：#4996 ACP 客户端、#4997 Copilot 后端、#4994 凭据交接）——最集中的诉求方向，目标是将 CodeWhale 嵌入更广泛的 agent 工具链
- **认证与部署场景**（1 条：#4998 无头 OAuth）—— SSH/容器/服务器场景的基础能力补全
- **沙箱与文件系统策略**（1 条：#5005）—— 安全模型需要在实际构建/调试场景中更灵活
- **会话状态持久化**（1 条：#5000）—— 中断恢复的会话一致性
- **内容语义持久化**（1 条：#4995）—— TUI 图形状态（如水母动画）的持久化与恢复
- **模型解析统一**（1 条：#4851）—— 双模型解析链合并为单 owner 的架构整理
- **评测可靠性**（1 条：#4999）—— benchmark harness 需要可确定性、fail-closed、provenance-exact


## 6. 开发者关注点

- **长文本编辑可靠性问题**（#5003）：针对包含中文注释和 CRLF 行尾的大文件替换场景，工具反复失败且诊断信息不足。核心诉求是：更清晰的错误定位、对过期行号的容忍、以及替代性写入路径
- **沙箱限制 vs 真实工作流**（#5005）：沙箱模式目前仅允许 workspace 内写入，但 Xcode 等构建工具天然在 `~/Library` 下产生产物。开发者需要显式的路径白名单机制，而非简单放宽沙箱
- **中断/崩溃恢复**（#5000）：TUI 端已显示的输出在重启后消失，模型无法感知已发出的内容，影响长会话的连续性与成本控制
- **对竞品工具的敏感度**（#5007）：社区对“知名博主不用 CodeWhale”反应积极，部分开发者将 Codex 视为直接竞品，关注工具在 DeepSeek 模型生态中的占位情况
- **国际化协作的“敏感词”处理**（#4949）：中文翻译的准确性讨论已进入第二轮，社区在“法律术语准确性”和“政治色彩规避”之间寻求平衡，项目需要建立更高效的术语决策机制

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*