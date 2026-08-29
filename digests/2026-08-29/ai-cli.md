# AI CLI 工具社区动态日报 2026-08-29

> 生成时间: 2026-08-29 06:07 UTC | 覆盖工具: 9 个

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

**报告日期**: 2026-08-29
**数据范围**: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI


## 1. 生态全景

当前 AI CLI 工具赛道已进入**规模化竞争与稳定性攻坚并重**的阶段。一方面，各工具高频发版（Codex 单日 5 个 alpha、Claude Code 发布 v2.1.251、Gemini CLI 发布夜间版），核心功能如子代理、MCP 集成、远程会话、Web 搜索等持续扩展；另一方面，社区反馈高度集中在**稳定性与安全性**——网络防护误报导致会话中断（Claude Code）、Windows 平台大面积启动失败（Codex、Copilot CLI）、Agent 状态机"假成功/真挂起"（Gemini CLI）、TUI 渲染与冻结问题（Copilot CLI、OpenCode、Qwen Code）等，说明工具的"可用性"仍是最大短板，而非功能数量。


## 2. 各工具活跃度对比

| 工具 | 热点 Issues（24h） | 重要 PR（24h） | Release（24h） | 最热 Issue 评论数 | 平台集中问题 |
|------|-------------------|----------------|----------------|-------------------|-------------|
| **Claude Code** | 10 | 1 | v2.1.251 | 164（#84352） | 网络防护误报、Windows 稳定性 |
| **OpenAI Codex** | 10 | 10 | 5× alpha | 86（#40752） | Windows 桌面端（启动/握手失败） |
| **Gemini CLI** | 10 | 10 | v0.59.0-nightly | 13（#22323） | Agent 挂起/误报、安全加固 |
| **GitHub Copilot CLI** | 10 | 1 | v1.0.82-1 | 7（#4612） | GHEC 租户认证、TUI 冻结 |
| **Kimi Code CLI** | 2 | 1 | 无 | 1（#2625/#2626） | MCP 安全绕过、缓存计费异常 |
| **OpenCode** | 9 | 10 | 无 | 119（#29079） | GPT 响应延迟、TUI 泄漏 |
| **Pi** | 10 | 10 | v0.84.4 | 24（#8584） | 窄终端崩溃、压缩不触发 |
| **Qwen Code** | 10 | 10 | v0.22.3 + nightly | 11（#8124） | WebShell 迁移回归、本地模型崩溃 |
| **DeepSeek TUI** | 6 | 10 | 无（v0.9.12 里程碑中） | 19（#5573） | 里程碑追踪、多模型搜索 |

> 注：Kimi Code 社区规模明显小于其他工具，24h 内仅 2 条 Issue 更新。


## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **安全加固与权限边界** | Gemini CLI（3 个安全 PR：系统配置加载、OAuth IdP mix-up、NTFS 短路径）、Claude Code（网络防护误报 #90499/#90501）、Kimi Code（MCP 绕过敏感文件保护 #2625）、Qwen Code（钩子信任边界 #10427） | 安全策略需全局一致、可验证，避免误伤正常操作 |
| **Windows 平台稳定性** | Codex（#40752 启动失败 86 评论）、Copilot CLI（#4165 resume 挂起）、Claude Code（#53247/#90172）、Qwen Code（#8124 渲染缺陷） | 启动失败、静默重启、会话恢复、句柄泄漏——Windows 是各工具共同短板 |
| **TUI 渲染与交互稳定性** | Copilot CLI（#4612 13GB 日志、#4648 输入框变黑）、Pi（#8806 窄终端崩溃）、Qwen Code（#10406 渲染死循环）、OpenCode（#34421 渲染进程卡死） | 终端宽度适配、事件循环、渲染性能、键盘输入一致性 |
| **Agent 状态机可靠性** | Gemini CLI（#22323 误报成功、#21409 无限挂起）、Copilot CLI（#4533 并行子代理脱节）、Claude Code（#88778 Opus 5 静默注入） | "卡死"与"假成功"并存，开发者对 Agent 输出的信任度下降 |
| **上下文/压缩管理** | Pi（#6879 压缩不触发已修复、#7553 压缩可配置推理级别）、Gemini CLI（#26522 自动记忆重试）、Claude Code（#88405 symlink 不加载） | 大上下文场景下的压缩策略、记忆系统效率和 token 成本控制 |
| **多模型/多 Provider 支持** | Copilot CLI（#4649 Grok/Gemini tool search 不生效）、Pi（#8572 Bedrock Mantle）、DeepSeek TUI（#5681 Web 搜索扩展至 DeepSeek/Qwen/Kimi）、Qwen Code（#10435 llama-server 回归） | 非 OpenAI/Anthropic 模型的兼容性和功能对齐 |
| **Linux 生态适配** | OpenCode（#44938 中键粘贴）、Pi（#2870 XDG 规范 52👍）、Qwen Code（#1210 XDG 支持） | 桌面/终端习惯、目录规范的 Linux 原生支持 |


## 4. 差异化定位分析

| 工具 | 定位 | 核心优势 | 当前短板 |
|------|------|---------|---------|
| **Claude Code** | 全功能 AI 编程助手（Anthropic 官方） | 功能最全（钩子事件、远程会话流式传输）、社区规模最大 | 安全过滤器误报严重（#84352 164 评论）、桌面端稳定性 |
| **OpenAI Codex** | ChatGPT 生态的 CLI 入口（OpenAI 官方） | 迭代速度最快（单日 5 个 alpha）、Rust 重构中、TUI 功能丰富（Pets、Computer Use） | Windows 桌面端尚不成熟、高频发版伴随不稳定 |
| **Gemini CLI** | Google 生态 Agent 终端（Gemini 模型） | 安全设计最严谨（fail-closed、OAuth 防护）、AST 感知方向明确 | Agent 可靠性问题（挂起/误报）突出、skills 启动不主动 |
| **GitHub Copilot CLI** | 深度绑定 GitHub 生态 | GitHub 生态集成（PR/delegate）、hook 机制 | GHEC 企业租户支持不足、TUI 冻结/日志膨胀严重、社区活跃度偏低 |
| **Kimi Code CLI** | Moonshot AI 的轻量 CLI 方案 | 简洁，适合已有 Moonshot 生态用户 | 社区规模极小（24h 仅 2 条 Issue）、功能与生态深度有限 |
| **OpenCode** | 开源多模型终端（支持 GPT/Claude/Gemini 等） | Provider 中立、模型切换灵活 | 模型响应延迟（#29079 119 评论）是最大痛点、桌面端 UI 质量不稳 |
| **Pi** | 轻量开源 Coding Agent（badlogic 出品） | 修复速度快（24h 内 10+ PR，包含多个 close）、关注终端兼容性细节 | 社区规模偏小、扩展 API 时序依赖问题 |
| **Qwen Code** | 阿里云百炼生态 CLI（Qwen 模型） | WebShell 驾驶舱/会话工作流等创新功能、CI 基础设施投入大 | WebShell 迁移阵痛、本地模型兼容性回归、发布质量受质疑 |
| **DeepSeek TUI** | 开源多模型终端（DeepSeek 系） | 云代理分发（Daytona）、无头 PR 审查等差异化功能 | 尚未发布正式版（v0.9.12 里程碑中）、社区规模较小 |


## 5. 社区热度与成熟度

**高活跃度 + 大规模用户基础**（Issues 评论量达百级）:
- **Claude Code** — 最热 Issue 164 条评论，社区反馈最丰富，但安全误报与桌面端问题累积
- **OpenCode** — 最热 Issue 119 条评论，社区关注模型性能，桌面端问题集中
- **OpenAI Codex** — 最热 Issue 86 条评论，快速迭代期，但 Windows 用户受阻明显

**中高活跃度**（Issue 评论数十级）:
- **Gemini CLI** — 安全加固与 Agent 可靠性双线推进，P1 问题持续受关注
- **Qwen Code** — 功能迭代活跃（WebShell/会话驾驶舱），但发布回归问题引发信任危机
- **Pi** — 社区体量不大但修复效率极高，24h 内 10 个 PR 全部围绕已知 bug 修复

**中低活跃度**:
- **GitHub Copilot CLI** — 企业用户为主，Issue 量不大但 GHEC/认证问题影响核心用户
- **DeepSeek TUI** — 处于 v0.9.12 里程碑收尾期，社区聚焦版本发布

**低活跃度**:
- **Kimi Code CLI** — 24h 内仅 2 条 Issue、1 个 PR，社区规模与生态丰富度明显落后


## 6. 值得关注的趋势信号

### 6.1 安全从"功能"走向"门槛"
Gemini CLI 同日合并 3 个安全 PR（系统配置加载、OAuth IdP mix-up、NTFS 短路径绕过），Claude Code 网络防护误报引爆社区（164 评论），Kimi Code 证实 MCP 可绕过敏感文件保护，Qwen Code 修复 4 个钩子信任边界漏洞。**安全不再是附加特性，而是各工具竞争的基础门槛**；同时"误报"与"漏报"的平衡将决定工具在日常开发中的实际可用性。

### 6.2 Agent 状态机的可信度是共同瓶颈
Gemini CLI 的"Subagent 到 MAX_TURNS 误报为 GOAL 成功"（#22323）与"通用 Agent 无限挂起"（#21409）并列为 P1，Copilot CLI 的并行子代理与 TUI 事件脱节（#4533），Claude Code 的 Opus 5 静默注入（#88778）——**对开发者而言，不可信的 Agent 比没有 Agent 更危险**。状态机的透明性（输出可见性、可中断性、防误报）是下一阶段用户体验的关键分水岭。

### 6.3 Windows 平台是"未开垦的战场"
Codex 一天 5 个 alpha 仍压不住 Windows 启动失败（#40752 86 评论），Copilot CLI 的 Windows resume 挂起（#4165）开放一月未修复，Claude Code 的静默重启（#90172）摧毁进行中会话。**Windows 开发者是最大的未满足用户群体**——谁能率先交付稳定的 Windows 体验，谁就能抢占这一增量市场。

### 6.4 多模型生态已不可逆
Copilot CLI 的 tool search 在 Grok/Gemini 上无效（#4649）、Pi 新增 Bedrock Mantle 支持（#8572）、DeepSeek TUI 发起多供应商原生搜索扩展（#5681）、OpenCode 本身就是 Provider 中立——**开发者不再满足于"绑定单一模型"**。支持多模型的工具将获得更广泛的用户基础，但跨模型行为一致性（同一功能在不同模型上的表现差异）将成为新的用户体验挑战。

### 6.5 上下文/Token 成本的"杠杆效应"觉醒
OpenCode 的 #41450 展示了一条 AGENTS.md 规则削减 81.6% 输入 token，Pi 的压缩策略修复（#8782）与压缩成本控制（#7553）， Copilot CLI 的用户要求关闭命令折叠（#39903，65👍）——**开发者开始用"成本工程师"的视角审视 AI CLI**，上下文管理、压缩策略、token 可观测性将越来越成为选型考量因素。

### 6.6 Linux 原生体验的呼声日益增长
OpenCode 的中键粘贴（#44938）、Pi 的 XDG 规范（#2870，52👍）、Qwen Code 的 XDG 支持（#1210）——**Linux 开发者对"移植体验"的容忍度正在降低**。随着 AI CLI 在 Linux 开发者中的渗透率提升，遵循系统惯例（目录规范、剪贴板语义、信号处理）将成为基础要求。


**给技术决策者的建议**: 若团队以 Windows 为主，建议暂缓迁移至 Codex 或 Copilot CLI（稳定性风险最高），可关注其后续修复节奏；若追求功能深度与大社区生态，Claude Code 仍是首选但需评估网络防护误报的影响；若对安全合规有严格要求，Gemini CLI 的安全设计最值得借鉴，但其 Agent 可靠性需额外的监督机制。多模型支持应作为选型的必选项而非加分项。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止**: 2026-08-29 | **数据来源**: github.com/anthropics/skills

---

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|------|-----------|---------|-------------|------|
| 1 | **skill-creator 修复** ([#1298](https://github.com/anthropics/skills/pull/1298)) | 修复 `run_eval.py` 始终报告 0% recall 的严重 Bug，涉及 Windows 流读取、触发检测、并行 worker | 该问题有 10+ 独立复现（关联 #556），描述优化循环面对的是噪声数据，导致 skill 描述质量无法被有效评估 | OPEN |
| 2 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质量控制：孤行文字、孤寡段落、编号错位 | 直击 AI 生成文档的普遍痛点——用户很少主动要求好的排版，但这些问题影响每一份文档 | OPEN |
| 3 | **scnet-hpc** ([#1615](https://github.com/anthropics/skills/pull/1615)) | 通过 profile 化 SSH 和 Slurm 工作流操作 SCNet HPC 集群 | 覆盖连接、分区、内存、模块、加速器配置等全流程，面向科研计算场景 | OPEN |
| 4 | **ODT skill** ([#486](https://github.com/anthropics/skills/pull/486)) | OpenDocument 格式（.odt/.ods）的创建、填充、读取与转换为 HTML | 补全文档格式生态缺口，支持 ISO 标准开源格式 | OPEN |
| 5 | **Hivemind 多Agent编排** ([#1628](https://github.com/anthropics/skills/pull/1628)) | 将机械性工作委托给 headless opencode worker（运行在免费模型上），Claude Code 保持规划/审查/合并角色 | 核心洞察：昂贵模型的上下文是稀缺资源，而非其智能。零成本多 Agent 编排思路 | OPEN |
| 6 | **skill-quality-analyzer + skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 两个元 Skills：质量分析（结构/文档/示例/资源五维评估）与安全分析 | 社区对 Skill 质量的自我审视与安全加固需求 | OPEN |
| 7 | **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367)) | AI 输出交付前审计——先做机械性文件验证，再做四维度推理审计（按损害严重性排序） | 通用性设计（适配任何项目/技术栈/模型），交付质量把关 | OPEN |
| 8 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 全栈测试模式：Testing Trophy 模型、单元测试 AAA 模式、React 组件测试最佳实践 | 从"测什么"到"怎么测"的完整方法论，填补测试领域空白 | OPEN |

---

## 2. 社区需求趋势

从 Issues 讨论中可提炼出社区最集中的四大方向：

- **安全与信任边界** ([#492](https://github.com/anthropics/skills/issues/492)，43 评论)：社区技能在 `anthropic/` 命名空间下分发造成信任边界滥用风险，用户可能将社区技能误认为官方技能并授予过高权限——这是目前最受关注的问题
- **组织级分享与协作** ([#228](https://github.com/anthropics/skills/issues/228)，16 评论)：Skills 应支持组织内直接共享，目前的 .skill 文件手动分发（Slack/Teams 发送 + 手动上传）流程过于繁琐
- **质量评估与调优工具** ([#556](https://github.com/anthropics/skills/issues/556) + 202 讨论)：skill-creator 的评价体系不可靠是最核心的工具链痛点，直接影响所有 skill 描述质量的迭代优化
- **上下文效率** ([#1487](https://github.com/anthropics/skills/issues/1487))：**claude-api skill 单次调用注入约 156k tokens 耗尽上下文窗口**——大体积 skill 的上下文管理成为新的关注点

其他值得注意的讨论方向：Agent 系统治理模式（[#412](https://github.com/anthropics/skills/issues/412)）、紧凑记忆符号表示（[#1329](https://github.com/anthropics/skills/issues/1329)）、Bedrock 兼容性（[#29](https://github.com/anthropics/skills/issues/29)）、Skills 作为 MCP 暴露（[#16](https://github.com/anthropics/skills/issues/16)）。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃且尚未合并，近期落地概率较高：

- **skill-creator 评估管线修复** ([#1298](https://github.com/anthropics/skills/pull/1298))：单 PR 解决 0% recall 的系统性 Bug（含 Windows 兼容），直接解锁所有 skill 描述优化的前提条件。另有 [#1099](https://github.com/anthropics/skills/pull/1099) 和 [#1050](https://github.com/anthropics/skills/pull/1050) 从不同角度修复同类问题，说明该问题关注度高、提交者多
- **document-typography** ([#514](https://github.com/anthropics/skills/pull/514))：解决 AI 生成文档的排版通病，与已存在的 pdf/docx/odt skills 形成互补，适用面广
- **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723))：覆盖完整测试栈的方法论 skill，补齐现有集合中的测试领域空白
- **scnet-hpc** ([#1615](https://github.com/anthropics/skills/pull/1615))：近期（8月）创建的高质量 HPC 场景 skill，结构完整
- **Hivemind** ([#1628](https://github.com/anthropics/skills/pull/1628))：零成本多 Agent 编排的创新思路，贴合"上下文即稀缺资源"的趋势判断

---

## 4. Skills 生态洞察

> **社区最集中的诉求是让 Skills 从"能用"到"可信、可量化、可协作"——技能分发存在信任边界风险（#492），评估工具因 Bug 产生零信号（#556/#1298），组织内共享流程繁琐（#228），大体积 skill 耗尽上下文（#1487）——生态正从"增长期"进入"治理期"，质量基础设施（评估、安全、分发、效率）成为最大的社区焦虑点。**

---

# 🤖 Claude Code 社区动态日报 — 2026-08-29

> 数据来源: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

今日发布 v2.1.251，新增模型切换钩子事件及子代理远程会话实时流式传输能力。社区方面，**CVP 批准组织仍被网络防护拦截**（#84352，164 条评论）成为焦点，同时涌现多起 **“网络防护误报导致会话中断”** 类问题（#90499/#90501），暴露出安全过滤器的稳定性隐忧；Windows 平台桌面端稳定性问题（静默重启、崩溃、IME 输入异常）持续高发。

---

## 🚀 版本发布 — v2.1.251

**更新要点：**

- **新增钩子事件**：`PreModelSwitch` 和 `PostModelSwitch`（可阻止、确认或注解模型切换）；`SessionStart` 恢复钩子现在可接收会话过期状态及预估重新缓存成本。
- **远程会话实时流**：新增前台子代理工具调用及结果到 Remote Con 的实时流式传输支持。

📎 [查看 Release 详情](https://github.com/anthropics/claude-code/releases)

---

## 🔥 社区热点 Issues（Top 10）

### 1. CVP 批准组织仍遭网络防护拦截
**#84352** — 已获 Cyber Verification Program 批准的组织在 Claude Code 中仍被 cyber-safeguard 拦截，验证门户显示“审核中”而非批准状态。**164 条评论**，25 👍。

> 🔗 [Issue #84352](https://github.com/anthropics/claude-code/issues/84352)

### 2. Claude Code Web 无法从非默认分支启动会话
**#10018** — 功能请求：允许 Web 版从非默认分支开启会话，86 👍，59 条评论，现已关闭。

> 🔗 [Issue #10018](https://github.com/anthropics/claude-code/issues/10018)

### 3. Windows 桌面端崩溃后孤儿 Silo/Job Object 导致无法恢复
**#53247** — 应用崩溃后遗留孤儿对象，仅注销或重启可恢复（HRESULT 0x80070020）。30 条评论，19 👍。

> 🔗 [Issue #53247](https://github.com/anthropics/claude-code/issues/53247)

### 4. GitHub 连接器显示“已连接”但 Cowork 中无可用工具
**#61682** — Windows 11 桌面端 app v1.8555.2.0 下连接器状态异常。27 条评论，24 👍。

> 🔗 [Issue #61682](https://github.com/anthropics/claude-code/issues/61682)

### 5. Dispatch 会话锁定 Fable 5 模型且无法切换
**#79410** — Max 计划用户在 Dispatch 会话中触发 Fable 5 限额后，会话被永久锁定，无法切换到其他可用模型。4 条评论。

> 🔗 [Issue #79410](https://github.com/anthropics/claude-code/issues/79410)

### 6. 桌面端静默重启破坏运行中会话（八个缺陷）
**#90172** — 应用为更新静默重启，直接摧毁进行中的远程会话，报错“无法访问您的计算机”。1 条评论，2 👍。

> 🔗 [Issue #90172](https://github.com/anthropics/claude-code/issues/90172)

### 7. 网络防护误报：数据库进程冲突排查被阻断
**#90499** — Opus 4.8 标记模型将正常数据库运维误判为网络安全威胁，会话被强制中断（session-halted）。

> 🔗 [Issue #90499](https://github.com/anthropics/claude-code/issues/90499)

### 8. 网络防护误报：队列顺序校验被标记为“毒消息”
**#90501** — 合法的队列验证操作被安全过滤器拦截，同样造成会话中断。

> 🔗 [Issue #90501](https://github.com/anthropics/claude-code/issues/90501)

### 9. `.claude/rules/` 中符号链接文件不自动加载
**#88405** — 文档声明支持 symlink，实际未生效，与官方文档相矛盾。7 条评论，4 👍。

> 🔗 [Issue #88405](https://github.com/anthropics/claude-code/issues/88405)

### 10. Opus 5 独占的系统提示注入静默禁用 Agent 工具
**#88778** — 主循环模型为 `claude-opus-5` 时，系统提示被注入两行指令，静默抑制 AgentTool 与用户配置的子代理工作流；其他模型不受影响。

> 🔗 [Issue #88778](https://github.com/anthropics/claude-code/issues/88778)

---

## 🔧 重要 PR 进展

*说明：本次抓取周期内仅捕获到 1 条含明确 PR 记录的更新（另有部分 PR 存在但没有 PR 标题，因此未列全）。*

### #87079 — 安全规则 glob 匹配：`**` 模式支持零深度路径
**作者**: anishsamant | 状态: Open | 更新: 2026-08-28

**核心修复**：当前 `_glob_match` 委托给 `fnmatch`，其中 `*` 本身已能跨越 `/`，导致 `**/*.ts` 需要字面路径分隔符，静默排除了 `security-patterns.json` 规则中的顶层文件。由于这是安全规则，失败模式是**静默不匹配**，修复后 `**` 将按文档承诺匹配任意深度。

> 🔗 [PR #87079](https://github.com/anthropics/claude-code/pull/87079)

---

## 📈 功能需求趋势

从近期活跃 Issue 中提炼社区最关注的方向：

| 方向 | 代表性 Issue | 热度 |
|------|-------------|------|
| **🔌 IDE/Web 集成增强** | #10018（Web 非默认分支启动） | 86 👍 |
| **📊 用量可见性** | #80261（桌面端用量指示器）、#83092（用量条） | 13+ 👍 |
| **🔧 .NET 运行时支持** | #11627（.NET 9/10 SDK 支持 Web 运行时） | 75 👍 |
| **🖱️ TUI 交互体验** | #87769（终端 UI 鼠标支持） | 新增 |
| **📱 移动端会话管理** | #85285（iOS 桌面会话缺失） | 一致性诉求 |
| **🔐 网络防护精确性** | #84352/#90499/#90501（误报与批准规避） | 高热度 |

---

## 💡 开发者关注点

1. **网络防护误报问题集中爆发** — 多个“会话中断”类问题直指安全过滤器误判（尤其标记模型为 Opus 4.8），且 CVP 批准组织也无法豁免，严重阻断正常开发工作流。

2. **桌面端稳定性持续承压** — Windows 平台的静默重启（#90172）、崩溃后无法恢复（#53247）、内嵌浏览器崩溃（#87659/#90353）等问题高频出现，直接影响远程会话可靠性与用户信任。

3. **模型管理策略透明度不足** — Dispatch 锁定 Fable 5（#79410）与 Opus 5 静默注入（#88778）均反映模型切换逻辑缺乏可预见性，用户无法有效掌控会话行为。

4. **子代理/工作流机制bug** — 恢复会话丢上下文（#86688）、子会话无法继承分组（#82788）、`.claude/rules/` 符号链接失效（#88405）等细节问题，影响日常开发效率。

5. **新旧平台一致性问题** — 桌面端与 CLI/Web 功能不对齐（Dispatch 缺失、分支选择受限、会话同步缺失），社区期望功能体验跨端统一。

---

*本日报由 AI 开发工具分析助手自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-29** | **数据来源：** [github.com/openai/codex](https://github.com/openai/codex)


## 今日速览

今日社区焦点高度集中在 **Windows 桌面端**：更新后应用无法启动、工具宿主握手失败、渲染空白等问题集中爆发，其中 #40752（应用无法启动）以 86 条评论成为最热 Issue。与此同时，**5 个 Rust 版本（0.151.0-alpha 系列）密集发布**，核心团队通过 10+ 个 PR 在沙箱权限、MCP 输出限制、终端查询响应等方面进行了大量内部加固，展现出高频迭代态势。


## 版本发布

过去 24 小时内发布了 **5 个 Rust 版本**，均为 0.151.0-alpha 系列预发布版：

- **[rust-v0.151.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.12)**
- **[rust-v0.151.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.11)**
- **[rust-v0.151.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.10)**
- **[rust-v0.151.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.9)**
- **[rust-v0.151.0-alpha.7.1](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7.1)**

> 发布说明暂未提供详细变更日志，但从同期合并的 PR 来看，主要涉及构建系统优化（rules_rs 平台）、资源目录整理、TUI 模型选择器刷新等基础设施改进。


## 社区热点 Issues（10 个）

### 1. [#40752 Windows 桌面应用更新后无法启动](https://github.com/openai/codex/issues/40752) — 🔥 86 评论 | 👍 51
- **现象：** 更新到 v26.820.60940 后应用启动失败，报 “Unable to locate Codex CLI” 及 spawn EINVAL 错误（与 .cmd wrapper 相关）。
- **影响：** 当前最热 Issue，影响面广，Windows 用户大面积受阻，社区关注度极高。

### 2. [#39903 新增选项：禁用 “Ran N commands” 折叠](https://github.com/openai/codex/issues/39903) — 44 评论 | 👍 65
- **诉求：** 希望增加配置项，让 TUI 始终展开已执行命令的完整输出，而非自动折叠。
- **社区反应：** 获 65 个赞，是当前**最高赞功能请求**，说明开发者对命令输出可见性有强烈需求。

### 3. [#41049 code-mode 主机握手阶段异常退出](https://github.com/openai/codex/issues/41049) — 36 评论 | 👍 1
- **现象：** 代码模式中本地命令执行通道在初始化握手阶段退出（“code-mode host exited during handshake”），导致无法自动读取目录，5.6 模型工作异常。
- **关联：** 与 #41241 高度相似，疑为同一根因，已形成系列问题。

### 4. [#37104 Windows/WSL 集成终端静默失败](https://github.com/openai/codex/issues/37104) — 23 评论 | 👍 9
- **现象：** 底部/侧边面板在 PTY/WSL 启动前静默失败，集成终端无法打开。
- **状态：** 自 8 月 5 日持续至今，仍处于开放状态，属老牌顽固问题。

### 5. [#34227 Windows 宠物（Pet）叠加层命中区域漂移](https://github.com/openai/codex/issues/34227) — 21 评论 | 👍 1
- **现象：** 桌面宠物（Pets 功能）的点击热区与可见形象随时间推移逐渐失同步。
- **观察：** Pets 功能相关 Bug 近期密集出现（另有 #41267），说明该功能仍处活跃开发期。

### 6. [#33192 Windows 10 DWM 句柄泄露](https://github.com/openai/codex/issues/33192) — 15 评论 | 👍 10
- **现象：** 工具调用任务后 DWM Composition 句柄持续累积（一次 5 次调用增长 22 个），可能导致系统资源耗尽。
- **价值：** 提供了清晰的复现路径，对性能问题排查有较高参考价值。

### 7. [#40002 Android Remote 路径大小写校验失败](https://github.com/openai/codex/issues/40002) — 11 评论 | 👍 8
- **现象：** Android Remote 验证受信任 Windows 项目时，因路径大小写敏感匹配失败而无法通过。
- **影响：** Windows 路径不区分大小写，而 Android 端区分，跨平台一致性问题典型。

### 8. [#17179 Windows 沙箱导致项目所有权变更](https://github.com/openai/codex/issues/17179) — 10 评论 | 👍 6
- **现象：** workspace-write 沙箱可能将项目所有权变更为 CodexSandboxOffline 用户，导致持续写入失败。
- **状态：** 自 4 月持续至今，属长期未解决的沙箱权限问题。

### 9. [#41326 Computer Use 助手每次点击即崩溃](https://github.com/openai/codex/issues/41326) — 9 评论
- **现象：** Computer Use 可成功读取应用状态（截图 + 无障碍树），但首次 UI 操作（坐标点击）即触发 SIGTRAP 崩溃。
- **关联：** 同系列 #41327、#41356 在 macOS 上同样复现（**macOS 27** 也崩溃），为跨平台高优 Bug。

### 10. [#41450 Code Mode Token 放大效应：一条 AGENTS.md 规则削减 81.6% 输入](https://github.com/openai/codex/issues/41450) — 3 评论
- **发现：** 在 AGENTS.md 中添加一条规则，可将累计输入 token 降低 81.6%，揭示了配置对成本控制的巨大杠杆效应。
- **价值：** 为开发者提供了立即可用的优化手段，具有较高传播潜力。


## 重要 PR 进展（10 个）

### 1. [#41477 将 Bundled Rust 资源整理至资产目录](https://github.com/openai/codex/pull/41477)
- **内容：** 将 `core` 和 `tui` 的嵌入式运行时资源从源码/测试夹具中分离，统一归入资产目录。
- **意义：** 改善 Bazel 构建的可维护性与数据隔离。

### 2. [#41476 Release 二进制改用 rules_rs 平台定义](https://github.com/openai/codex/pull/41476)
- **内容：** 为各发布平台映射 Rust target triple，使用 `rules_rs` 平台而非 LLVM 平台定义构建多平台二进制。
- **意义：** 构建系统标准化，减少跨平台编译差异。

### 3. [#41467 TUI 模型选择器从 App Server 异步刷新](https://github.com/openai/codex/pull/41467)
- **内容：** 模型选择器打开时异步拉取最新模型列表，不再依赖启动时的缓存目录。
- **意义：** 修复模型列表过期问题，确保新模型即时可见。

### 4. [#41454 连续执行宿主失败后阻止目标继续运行](https://github.com/openai/codex/pull/41454)
- **内容：** 若某个 goal 连续 3 次因 handler 运行失败，则将该 goal 标记为 blocked；工具成功时重置失败计数。
- **意义：** 防止在故障状态下徒劳重试，提升稳定性。

### 5. [#41452 上报 Code Mode 宿主请求耗时](https://github.com/openai/codex/pull/41452)
- **内容：** 对 code mode host 的 execute/wait/terminate 请求计时，排除客户端响应延迟和空闲时间。
- **意义：** 度量更精准，便于性能分析与优化。

### 6. [#41448 澄清 Default 协作模式中的提问处理](https://github.com/openai/codex/pull/41448)
- **内容：** 允许 `request_user_input` 用于可选的、能显著提升工作质量的问题；工具无返回时继续以最佳判断推进。
- **意义：** 减少不必要的交互中断，提升自主任务流畅度。

### 7. [#41447 支持 `openai/elicitation` 表单请求](https://github.com/openai/codex/pull/41447)
- **内容：** 客户端声明对象型 `form` 能力时，广告 `openai/elicitation` 表单支持，并处理 create 请求。
- **意义：** 新增表单交互模式，扩展多智能体协作场景。

### 8. [#41436 响应 TTY 子进程的终端查询](https://github.com/openai/codex/pull/41436)
- **内容：** 拦截 PTY 子进程发出的设备状态、窗口大小、光标位置、DEC 私有模式查询，写入有界响应。
- **意义：** 修复全屏程序在 PTY 中阻塞等待应答的问题。

### 9. [#41421 支持 per-tool MCP 输出限制](https://github.com/openai/codex/pull/41421)
- **内容：** 为 MCP server 的每个工具新增 `output_token_limit` 配置；插件与用户策略冲突时取最严格限制。
- **意义：** 更精细的 MCP 输出控制，防止单工具输出失控。

### 10. [#41429 每一轮（turn）保留最后选中的步骤上下文](https://github.com/openai/codex/pull/41429)
- **内容：** 在活动 turn 状态中保存最近捕获的 `StepContext`；模型回退时的推测捕获不会覆盖它。
- **意义：** 确保上下文一致性，防止回退机制引入状态错乱。


## 功能需求趋势

| 趋势方向 | 代表 Issues | 热度信号 |
|---------|------------|---------|
| **命令输出可见性控制** | #39903（禁用命令折叠）| 最高赞（👍65），开发者希望完整看到执行过程 |
| **Windows 稳定性修复** | #40752、#41049、#37104、#40878、#41289、#41339 | 数量最多，Windows 桌面端问题占比超 50% |
| **Computer Use 可靠性** | #41326、#41327、#41356、#41281 | 跨平台（Windows/macOS）崩溃，属新功能打磨期 |
| **沙箱权限模型改进** | #17179、#41237 | 长期未决，涉及所有权变更与 EPERM 读取失败 |
| **多智能体与上下文管理** | #41422（Guardian 转录）、#41424（嵌套 fork 上下文基线）、#41429（步骤上下文保留）| 内部 PR 密集，持续强化多智能体架构 |
| **Pets（桌面宠物）功能完善** | #34227、#41267 | 新功能伴随的交互/动画 Bug 集中反馈 |


## 开发者关注点

1. **Windows 桌面端是当前最大的“重灾区”。** 从启动失败、握手退出、空白界面到句柄泄漏，Windows 平台问题占据了今日 Top 热度的半壁江山。高频发版（一天 5 个 alpha 版本）虽表明团队在快速修复，但也侧面说明稳定性压力较大。

2. **“握手失败”（handshake）成为高频关键词。** #41049、#41241 等均指向本地工具宿主在初始化阶段崩溃。对用户而言，这意味着 Codex 无法读取项目目录、无法执行本地命令，基本等于“不可用”。

3. **对执行透明度的需求强烈。** #39903 的高赞表明开发者不满足于 Codex“报个结果就折叠”，而是希望完整查看命令执行历史。这与 CLI 工具“所见即所得”的预期一致。

4. **AGENTS.md 对 token 成本的杠杆效应引发关注。** #41450 展示了一条配置规则可削减 81.6% 输入 token，开发者对“如何写 AGENTS.md 来省钱”的兴趣预计会持续升温。

5. **MCP 生态精细化管控。** per-tool 输出限制（#41421）、插件钩子扩展（#41456）、中断轮次钩子（#41432）等 PR 表明，MCP 正在从“能跑”走向“可管可控”。

---

*本日报由 AI 自动整理生成，数据截至 2026-08-29。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-29

> 数据来源：github.com/google-gemini/gemini-cli

---

## 今日速览

今日核心动态围绕**安全加固**展开：夜间版 v0.59.0 发布了 fail-closed 工作区信任修复，另有 3 个安全相关 PR 集中合并提审（系统级配置加载、OAuth IdP mix-up 防护、NTFS 短路径绕过）。与此同时，Agent 行为可靠性问题持续占据 Issue 榜，**Subagent 恢复逻辑误报成功**与**通用 Agent 挂起**两大 P1 问题仍是社区关注焦点。

---

## 版本发布

### v0.59.0-nightly.20260829.g0bd1d4397

**核心变更**：`fix(core): enforce fail-closed workspace trust and filter mcpServers in restricted mode`

- 在受限/不受信环境中，默认拒绝加载仓库级 `mcpServers` 配置
- 防止服务器启动期间发生意外进程执行
- 由 @luisfelipe-alt 贡献（PR #29099）

🔗 [查看完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260828.g3c311beac...v0.59.0-nightly.20260829.g0bd1d4397)

---

## 社区热点 Issues

以下 10 个 Issue 在过去 24 小时讨论热度最高，按活跃度排序：

### 1. 🔴 Subagent 到达 MAX_TURNS 被误报为 GOAL 成功（#22323）
**13 条评论 | P1 | 已开放 5 个月，仍在重测中**

`codebase_investigator` 子代理在达到最大轮次限制后，`Termination Reason` 仍显示 `GOAL` 成功，导致主代理误判任务完成、静默丢失分析结果。

> 💡 **重要性**：直接威胁 Agent 输出可信度。任务被中断却报成功，等于欺骗用户，是可靠性方向的 P1 级缺陷。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. 🔴 通用 Agent 无限挂起（#21409）
**8 条评论 | P1 | 👍 8**

Gemini CLI 一旦委托给 generalist agent 就永久挂起，简单操作（如创建文件夹）也受影响，用户最长等待 1 小时后被迫取消。

> 💡 **重要性**：👍 8 说明大量用户踩坑。社区已找到临时绕过方法（指示模型不要使用子代理），但根本修复仍悬而未决。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. 🟡 添加 nano banana 图像生成模型支持（#28445）
**8 条评论 | P2 | Good first issue**

社区用户发现仓库中缺少 nano banana 等图像生成模型的配置，提议补充。

> 💡 **重要性**：标记了 good first issue，适合新贡献者入手；也反映社区对多模态能力（尤其是图像生成）的期待正在上升。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/28445)

### 4. 🟡 零依赖 OS 沙箱 + 执行后意图路由（#19873）
**8 条评论 | P2 | Effort/large**

利用 Gemini 3 模型天然的 bash 亲和力，通过沙箱隔离文件操作并智能路由执行后意图，在不牺牲安全性的前提下释放模型原生能力。

> 💡 **重要性**：8 个月的长期讨论，触及 Agent 安全与效率的根本平衡点，属于基础架构方向的长期规划。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/19873)

### 5. 🟡 AST 感知的文件读取、搜索与代码库映射评估（#22745）
**7 条评论 | P2 | EPIC**

跟踪一系列关于 AST 感知工具价值的调研：通过单个工具调用精准读取方法边界、减少 token 噪音、优化代码库导航。

> 💡 **重要性**：EPIC 级 Issue，与 #22746 联动，如落地将显著提升大仓库场景下 Agent 的上下文效率。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

### 6. 🟡 Gemini 使用 skills 和 sub-agents 不够主动（#21968）
**6 条评论 | P2**

经验性反馈：Gemini 不会主动调用用户自定义的 skills 和子代理，即使描述明确相关，只有显式指示才会使用。

> 💡 **重要性**：用户投入成本配置了 skills 却没被自动触发，说明 Agent 的"工具调度决策"仍需改进，是落地体验的关键短板。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

### 7. 🟡 Auto Memory 无限重试低信号会话（#26522）
**5 条评论 | P2**

后台提取代理跳过低信号会话后，该会话未被标记已处理，导致被反复重新索引和重试，浪费资源。

> 💡 **重要性**：Auto Memory 功能尚在打磨期，此类效率问题会直接拖累长期运行的性能。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/26522)

### 8. 🟡 确定性脱敏 + 减少 Auto Memory 日志（#26525）
**4 条评论 | P2 | 安全相关**

Auto Memory 将本地 transcripts 发送给提取模型时，机密内容在模型上下文中已暴露后才进行脱敏；日志中可能记录现有 skill 信息。

> 💡 **重要性**：隐私设计存在"先发送、后脱敏"的顺序问题，安全敏感用户应关注此 Issue 的进展。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

### 9. 🟡 Shell 命令执行后卡在 "Waiting input"（#25166）
**4 条评论 | P1 | 👍 3**

命令已执行完毕，但 Gemini CLI 仍显示 shell 活动并等待用户输入，极简命令也会触发，长时间挂起。

> 💡 **重要性**：P1 级别、👍 3 社区共鸣，终端交互卡死问题直接影响日常开发效率。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

### 10. 🟡 browser_agent 在 Wayland 下失败（#21983）
**4 条评论 | P1 | 标记 need-retesting**

浏览器子代理在 Wayland 环境下启动即失败，`Termination Reason` 显示 GOAL。

> 💡 **重要性**：Linux 用户的浏览器自动化场景完全不可用，需关注重测进展。

🔗 [查看 Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

---

## 重要 PR 进展

以下 10 个 PR 按安全优先级和功能影响排序：

### 1. 🔒 安全：修复 Windows/POSIX 系统级配置的不安全加载（#29115）
`fix(config): prevent insecure system-wide configuration loading`

修复系统级配置加载中的本地提权和跨用户任意命令执行漏洞。Windows 端使用 PowerShell 实施 ACL 验证。

> 💡 安全关键修复，涉及本地提权面，建议企业用户重点关注。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29115)

### 2. 🔒 安全：修复 OAuth IdP mix-up 攻击向量（#29117）
`fix(core): prevent OAuth IdP mix-up in MCP authentication`

实现 RFC 9207 Authorization Server Issuer Identification 验证，防止身份提供商混淆攻击和未授权 token 泄露。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29117)

### 3. 🔒 安全：修复 NTFS 8.3 短文件名路径绕过（#29116）
`fix(core): mitigate NTFS 8.3 short name (SFN) path`

处理 `git~1`、`env~1` 等 Windows 短文件名在路径归一化和 AllowedPathChecker 中的绕过问题。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29116)

### 4. 🔒 安全：fail-closed 工作区信任 + restricted 模式过滤 mcpServers（#29099）
`fix(core): enforce fail-closed workspace trust and filter mcpServers in restricted mode`

已合入今日夜间版。不受信环境下默认拒绝仓库自定义 MCP 服务器，防止启动时意外代码执行。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29099)

### 5. 🟡 Web 抓取工具：改进目标验证与连接路由（#29120）
`fix(core): improve destination validation and connection routing in web fetch utilities`

新增异步 DNS 解析验证，通过 Undici 传输连接器绑定解析后的地址并保留 TLS，增强 SSRF 防护。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29120)

### 6. 🟡 修复 MCP 工具名截断后冲突（#28971）
`fix(core): keep truncated MCP tool names unique`

修复两个 MCP 工具前后各 30 字符相同导致注册名冲突的问题。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/28971)

### 7. 🟡 修复 SSE 流末尾事件丢失（#29106）
`fix(core): flush final SSE event on EOF without trailing blank line`

修复非标准代理截断连接时，`finishReason`/用量元数据被静默丢弃的问题。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29106)

### 8. 🟡 修复 spawn 失败时 handleExit 重复执行（#29114）
`fix(core): prevent duplicate handleExit execution on spawn failure`

Node.js 中 spawn 失败会同时触发 `error` 和 `close` 事件，通过可重入标志避免重复清理。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29114)

### 9. 🟢 扩展：修复 GitHub 仓库解析中 .git 后缀剥离（#29118）
`fix(extensions): only strip trailing .git suffix`

修复 `blog.github.io` 这类内部含 `.git` 的仓库名被错误截断的问题，改为仅去除尾部后缀、大小写不敏感。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/29118)

### 10. 🔵 依赖与配置更新 + ECC bundles 集成（#28955）
`Update dependencies, add MCP configuration, and integrate ECC bundles`

XL 规模的大型依赖更新，集成 ECC bundles 并新增 MCP 配置，影响面较大需完整回归测试。

🔗 [查看 PR](https://github.com/google-gemini/gemini-cli/pull/28955)

---

## 功能需求趋势

从今日收集的 50 条 Issue 中，社区最关注的功能方向如下：

### 1. 🛡️ 安全与沙箱（最突出）
- 零依赖 OS 沙箱（#19873）
- Auto Memory 确定性脱敏（#26525）
- 系统级配置加载安全（PR #29115）
- NTFS 短文件名绕过（PR #29116）
- OAuth IdP mix-up 防护（PR #29117）

> **趋势判断**：安全修复呈集中爆发态势，说明项目正在经历一轮安全加固周期，同时社区对 Agent 权限边界的安全意识显著提升。

### 2. 🤖 Agent 自感知与工具调度
- 更主动地使用 skills/sub-agents（#21968）
- Agent 认知自身 CLI 参数与热键（#21432）
- Subagent 轨迹可视化与分享（#22598）

> **趋势判断**：社区希望 Agent 不仅是"能调用工具"，更要"知道什么时候该调用什么"，工具调度智能化是下一阶段的重点。

### 3. 📊 上下文效率优化
- AST 感知文件读取与代码库映射（#22745, #22746）
- Tactful Extraction 节流读取逻辑（#19561）
- Subagent 轨迹纳入 bugreport（#21763）

> **趋势判断**：大规模仓库场景下 token 效率是高频痛点，结构化读取替代"暴力读取"成为明确方向。

### 4. 🧠 Auto Memory（记忆系统）功能打磨
- 低信号会话重试策略（#26522）
- 无效 memory patch 隔离（#26523）
- 记忆系统整体质量改进（#26516）

> **趋势判断**：Auto Memory 是近期新功能，当前处于密集修复期，记忆提取的准确性、安全性和跳过策略均在迭代。

### 5. 🖼️ 多模态能力扩展
- nano banana 等图像生成模型配置（#28445）

> **趋势判断**：社区对图像生成能力的调用需求正在显现，CLI 直接访问多模态模型是明确诉求。

---

## 开发者关注点

### 1. Agent 可靠性问题（最集中痛点）
- **Subagent 恢复误报成功**（#22323）：默认信任 Agent 的 `success` 回报，实际结果可能是中断
- **通用 Agent 挂起**（#21409）：一旦触发需手动干预，无超时机制
- **浏览器 Agent Wayland 下崩溃**（#21983）：Linux 用户浏览器自动化不可用
- **Shell 命令完成后卡死**（#25166）：终端状态未正确同步

> **总结**：Agent 状态机的正确性是当前开发者的最大痛点，"卡死"和"假成功"并存的局面让开发者对 Agent 输出的信任度打了折扣。

### 2. 配置与自定义体验参差
- **Symlink Agent 文件不被识别**（#20079）：`~/.gemini/agents/` 下的软链接被忽略
- **Browser Agent 忽略 settings.json 覆盖**（#22267）：`maxTurns` 等配置不生效
- **>128 个工具触发 400 错误**（#24246）：工具数量膨胀后 API 报错

> **总结**：配置覆盖链路存在不一致问题——部分配置被读但不生效，部分边界情况（symlink）直接被忽略。

### 3. 防御性行为不足
- **Agent 使用破坏性命令**（#22672）：`git reset`、`--force` 等危险操作未被劝阻
- **临时脚本散落**（#23571）：模型在随机位置创建编辑脚本，工作区清理困难
- **交互式提示卡住**（#22465）：创建 Vite 应用时卡在交互式 prompt

> **总结**：开发者期望 Agent 具备更强的"谨慎意识"——不仅完成任务，还要以可控、可预测、无副作用的方式完成。

### 4. 可见性与可调试性
- **Subagent 轨迹不在 bugreport 中**（#21763）
- **Subagent 轨迹无法通过 `/chat share` 分享**（#22598）
- **get-shit-done 输出钩子崩溃**（#22186）

> **总结**：Agent 内部执行过程缺乏透明机制，当出现问题时开发者无法定位是哪个子代理、哪一步出了问题。

---

*本日报由 AI 自动生成，数据采集时间范围：2026-08-28 至 2026-08-29。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**2026-08-29**


## 今日速览

昨日发布了补丁版 **v1.0.82-1**，修复了认证失败提示不明确的问题。社区焦点集中在两个方向：一是 GHEC（GitHub Enterprise Cloud）数据驻留租户与部分 BYOK 用户在 `-p`/`--agent` 模式下遭遇 401 认证失败（#4527、#4650、#4654），疑似模型目录接口请求了错误的端点；二是多达 5 个 TUI（终端界面）冻结/渲染相关的新上报（#4612、#4648、#4533），其中文件监视事件进入死循环并写爆日志至 13 GB 的问题（#4612）影响极为严重。


## 版本发布

### v1.0.82-1（补丁版）
- **Fixed**: 改进认证失败提示，现在会显示具体的失败原因（如 `401 Bad credentials`），而非仅显示 `/login` 提示。该修复可帮助用户更快定位企业代理、网络或凭据问题。
- **发布链接**: https://github.com/github/copilot-cli/releases


## 社区热点 Issues（10 个）

### 1. Runaway FileWatch 事件循环导致 TUI 冻结、日志膨胀至 13GB
- **Issue #4612** | 作者: tdihp | 评论: 7 | 👍: 1
- **摘要**: 长时间运行或恢复（resume）的会话可能进入 `No connection accepted a host event {"kind":"FileWatch"}` 的死循环，导致 TUI 无响应，且 debug 日志以极快速度膨胀至 13GB。
- **重要性**: ⭐⭐⭐⭐⭐ 不仅是功能性故障，还可能快速耗尽磁盘空间。此问题目前处于 triage 阶段，社区正在关注是否有临时 workaround。
- **链接**: https://github.com/github/copilot-cli/issues/4612

### 2. Atlassian MCP OAuth 在 1.0.79 回归（RFC 8414 不兼容）
- **Issue #4480** | 作者: jfrost-fabric | 评论: 7 | 👍: 6（已关闭）
- **摘要**: 连接 `https://mcp.atlassian.com/v1/mcp` 时 OAuth 发现流程报错：授权服务器广播的 issuer 与元数据发现 URL 不匹配（RFC 8414 §3.3）。
- **重要性**: ⭐⭐⭐⭐ 影响所有使用 Atlassian MCP 服务器的用户，已标记为回归问题（1.0.71 正常）。👍 数高说明影响面较大，现已关闭，预计修复已合入。
- **链接**: https://github.com/github/copilot-cli/issues/4480

### 3. GHEC 数据驻留租户 `-p` 模式 401 认证失败
- **Issue #4527** | 作者: AvitalLivshits | 评论: 2 | 👍: 4
- **摘要**: 在 GHEC 数据驻留租户（`<tenant>.ghe.com`）上，交互模式正常，但 `copilot -p` 非交互模式启动即失败，因其模型目录请求误发至 `api.githubcopilot.com` 而非租户端点。
- **重要性**: ⭐⭐⭐⭐⭐ 直接影响企业数据驻留客户的核心功能，且与今日新增的 #4650、#4654 高度相关，反映出一个系统性问题。
- **链接**: https://github.com/github/copilot-cli/issues/4527

### 4. Windows 下 `--resume` 冷启动挂起
- **Issue #4165** | 作者: asalcedo29 | 评论: 4 | 👍: 1
- **摘要**: 在 Windows PowerShell 中直接运行 `copilot --resume`，TUI 会永久卡在 `Resuming session...`，无任何报错。但先启动交互模式再恢复同一会话则可成功。
- **重要性**: ⭐⭐⭐⭐  Windows 平台核心会话功能缺陷，已开放一个多月未修复，持续影响日常使用。
- **链接**: https://github.com/github/copilot-cli/issues/4165

### 5. 并行子代理导致 TUI 停止消费事件（输入+滚动失效）
- **Issue #4533** | 作者: bikramjitk | 评论: 4 | 👍: 0
- **摘要**: 在预发布版（1.0.81-4/5）中，当 turn 启动并行子代理时 TUI 停止响应，键盘输入和滚动均无效；但底层 Rust 运行时仍在持续处理子代理的模型调用。
- **重要性**: ⭐⭐⭐⭐ 并行子代理是 Agent 模式的关键能力，TUI 与运行时状态脱节属于严重架构缺陷。
- **链接**: https://github.com/github/copilot-cli/issues/4533

### 6. `/delegate` 预检阶段 403 错误
- **Issue #4657** | 作者: debrevitatevitae | 评论: 0 | 👍: 0（今日新增）
- **摘要**: `/delegate` 在 `UncommittedChangesCheck` 预检阶段始终 403，但相同凭据通过 `curl`/`gh api` 调用同一端点却成功。
- **重要性**: ⭐⭐⭐⭐ 新建 issue，涉及核心协作功能不可用，且与 GitHub API 直接调用行为不一致，值得关注。
- **链接**: https://github.com/github/copilot-cli/issues/4657

### 7. `session.resume` 静默忽略 `model` 参数
- **Issue #4645** | 作者: jerry-santana | 评论: 0 | 👍: 0（今日新增）
- **摘要**: 恢复会话时指定不同的 `model` 会被静默丢弃，后续推理请求仍使用持久化会话中的陈旧模型。
- **重要性**: ⭐⭐⭐⭐ 无提示的静默行为违背最小惊讶原则，可能导致用户在不知情下使用非预期模型产生费用。
- **链接**: https://github.com/github/copilot-cli/issues/4645

### 8. Tool Search 在 Grok/Gemini 上无效（#4588 后续）
- **Issue #4649** | 作者: ArlindNocaj | 评论: 0 | 👍: 0（今日新增）
- **摘要**: GPT 模型已验证 tool search 生效（token 从 43.1k 降至 21.0k）；但 Grok 虽报告已启用却不做任何延后加载（57.7k vs 21.0k），Gemini 则完全未启用该功能。
- **重要性**: ⭐⭐⭐⭐ 直接反映多模型支持的不均衡，影响使用非 GPT 模型用户的上下文窗口及成本。
- **链接**: https://github.com/github/copilot-cli/issues/4649

### 9. 输入框背景变黑、文字近乎不可见
- **Issue #4648** | 作者: Piotr779 | 评论: 1 | 👍: 0（今日新增）
- **摘要**: 会话中途输入框背景突然变黑，导致文字几乎不可读，但终端其他区域渲染正常；标准终端 reset 无法修复。
- **重要性**: ⭐⭐⭐ 虽然不影响底层功能，但直接阻断交互，属于高可见度 UI 缺陷。
- **链接**: https://github.com/github/copilot-cli/issues/4648

### 10. 用户消息被作为 steering 传递时跳过 `userPromptTransformed` Hook
- **Issue #4640** | 作者: bghgary | 评论: 0 | 👍: 0（昨日新增）
- **摘要**: Agent 处理期间若用户插入新消息，消息会以 steering 形式交给模型，但 `userPromptTransformed` hook 不会被调用，导致注入的固定指令丢失。
- **重要性**: ⭐⭐⭐ 影响 hooks 机制的一致性和可靠性，对依赖 hooks 注入上下文的工作流有实质影响。
- **链接**: https://github.com/github/copilot-cli/issues/4640


## 重要 PR 进展（1 个）

### 处理 fork PR 关联缺失的 invalid-label writer
- **PR #4497** | 作者: mrecachinas | 创建: 2026-08-14 | 更新: 2026-08-29（已合并/关闭）
- **功能**: 当 GitHub Actions 的 workflow run 未填充 PR 关联信息时（fork PR 场景常见），writer 现在会基于受信任的 workflow-run 元数据进行搜索，并严格要求恰好一个匹配的开放 PR。
- **意义**: 修复了 fork PR 在 CI 中可能被错误标记的问题，保证严格的 `requirements.txt` 校验逻辑不被绕过或误判。
- **链接**: https://github.com/github/copilot-cli/pull/4497


## 功能需求趋势

1. **企业/租户端点适配**（#4527、#4650、#4654）— GHEC 数据驻留与自定义主机场景下认证/API 端点的正确处理成为高频问题。
2. **TUI/渲染稳定性**（#4612、#4648、#4533）— TUI 冻结、输入失效、渲染异常频繁出现，表明 UI 层仍存在稳定性短板。
3. **模型相关修复**：BYOK/自定义模型端点（#4651、#4650）、不同模型对 tool search 的兼容性（#4649）——社区对多模型支持的需求非常迫切。
4. **Windows 平台适配**（#4165、#4653、#4652）— 从 resume 挂起到 AltGr 输入被吞，Windows 用户体验问题持续积累。
5. **本地上下文保存**（#2930）— 企业安全策略禁用远程 Copilot Memory 的场景下，社区持续呼吁本地 auto-memory 能力。


## 开发者关注点

- **认证与端点错误信息透明度不足**：v1.0.82-1 修复了 `401 Bad credentials` 展示问题，但 GHEC 租户下 prompt/agent 模式的 403/401（#4527、#4657）仍缺乏指引性诊断信息。
- **静默失败行为受质疑**：`session.resume` 忽略 model 参数（#4645）和不一致的 hook 调用（#4640）均属无声错误，开发者期望明确的报错或警告。
- **平台间体验一致性**：Windows 相关缺陷（#4165、#4652、#4653）长期存在，社区期待在 1.x 稳定期得到系统性修复。
- **多模型生态支持不平衡**：tool search、plugin 自定义 agent 发现（#4655）等问题在不同模型/配置下行为差异大，开发者需要更一致的跨模型行为契约。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-29** | 数据来源：github.com/MoonshotAI/kimi-cli


## 今日速览

昨日社区活跃度整体平稳，共产生 2 条 Issue 更新和 1 个 PR。但两条 Issue 均属重量级：一是安全研究者演示了 `MCP 工具调用可绕过内置敏感文件保护机制`，引发对 auto-approve 权限模式下安全边界的质疑；二是付费用户反馈 `缓存计费出现显著异常（cache_read 被反复计费）`，影响范围待确认。PR 方面，社区提交了针对 `asyncssh` 已知漏洞（GHSA-2wxc-x7rj-hg8f）的依赖升级修复。


## 版本发布

过去 24 小时内无新版本发布。


## 社区热点 Issues

过去 24 小时内更新共 2 条，均收录如下：

### 1. #2625 [已关闭] MCP 工具调用绕过内置敏感文件保护（任意文件读取已证实）
- **作者**: zhaoxingxing06 | 创建: 2026-08-28 | 评论: 1 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2625
- **重要性**: ★★★★★（安全漏洞）
- **详情**: 报告者指出，内置文件工具（Read）会拒绝读取 `.env`、SSH 私钥、凭据存储等敏感文件，但 **MCP 工具调用不受此内容级保护限制**。在 auto-approve 权限模式下，MCP 调用甚至跳过审批提示，可直接读取任意文件。这意味着任何接受文件路径参数的 MCP 服务器均可成为攻击面。
- **社区反应**: 该 Issue 已被关闭，说明维护者已确认并（可能）进入修复流程。但 1 条评论讨论量偏低，建议密切关注后续修复版本。

### 2. #2626 [开启中] 配额消耗异常：每次对话均计费 cache_read 且 cache_creation 始终为 0（>10 倍放大）
- **作者**: ahmadyaseen35-coder | 创建: 2026-08-29 | 评论: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2626
- **重要性**: ★★★★★（计费/成本）
- **详情**: 付费年费用户报告：2026-08-28 晚间（+03:00 时区），5 小时配额窗口在轻度使用数分钟内即消耗约 40%。CLI 日志显示每次对话均产生 `cache_read` 计费，而 `cache_creation` 始终为 0。按缓存机制设计，`cache_read` 应以 `cache_creation` 为前提，此模式暗示缓存层级完全失效，导致请求被重复全额计费（>10 倍成本放大）。
- **社区反应**: 刚创建暂无评论，但涉及成本损失，预计会快速聚集关注。


## 重要 PR 进展

过去 24 小时内更新共 1 条，收录如下：

### #2622 [开启中] 依赖升级：pykaos 中的 asyncssh 升至 2.23.1（修复 GHSA-2wxc-x7rj-hg8f）
- **作者**: katsugtgz | 创建: 2026-08-28 | 评论: 0 | 👍: 0
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2622
- **内容**: 将 `pykaos` 工作区包中的 `asyncssh` 从 2.21.1 升级至 2.23.1，修复 GHSA-2wxc-x7rj-hg8f 与 GHSA-qr67-gv47-xwwh 两个安全公告。
- **影响**: `pykaos` 包上存在已知安全漏洞（SSH 相关），此升级属于安全必需修复。改动范围小（`pyproject.toml` + `uv.lock`），风险低。目前尚无维护者评论，等待合并。


## 功能需求趋势

基于过去 24 小时的数据（样本较小），仅能识别出以下方向性信号：

| 方向 | 信号来源 | 说明 |
|------|----------|------|
| **安全与权限模型** | Issue #2625 | 社区对 MCP 工具调用的安全边界高度关注，要求 `内容级防护`（敏感文件识别）对所有工具调用路径（含 MCP）一致生效 |
| **计费透明度与缓存策略** | Issue #2626 | 用户对缓存计费模式极为敏感，要求 CLI 提供可观测的缓存命中/未命中指标，且缓存策略应避免跨会话反复全量计费 |


## 开发者关注点

1. **安全边界一致性（高频关注）**：开发者希望安全策略是"全局"而非"局部"的——内置工具有的保护，MCP 扩展也必须有；任何权限绕过路径都应视为严重缺陷。
2. **缓存与计费的可验证性（成本敏感）**：付费用户对配额消耗极度敏感，期望 CLI 提供细粒度的计费日志和缓存状态可视化，且产生异常计费时应能快速定位原因。目前问题已上报但尚无官方回应，属于**高风险待解决**事项。
3. **供应链安全（常规但持续）**：社区在持续主动修复依赖漏洞（如 asyncssh），此类 PR 通常应优先合并以降低攻击面暴露风险。

> 提示：本日报基于截至 2026-08-29 的公开 GitHub 数据生成。Issue #2626 涉及计费争议，建议读者核对自身日志，若受影响可在原 Issue 下补充场景，加速官方定位。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-29

## 今日速览

今日社区最引人关注的是 **GPT 模型响应延迟问题**（#29079）以 119 条评论成为讨论焦点，该 issue 虽已关闭但暴露出模型响应性能的稳定性隐忧。此外，**TUI 在 /tmp 目录泄漏 ~21MB .so 文件**的问题（#42700）受到关注，可能影响长期使用的用户体验。批量重构 PR 与 V2 客户端功能推进成为今日代码层面的主要动态。

## 社区热点 Issues

### 1. GPT Models takes too long to respond（#29079）
**状态**: CLOSED | 评论: 119 | 👍: 52  
[查看 Issue](https://github.com/anomalyco/opencode/issues/29079)

使用 GPT 5.4 时响应时间极不稳定——有时秒回，有时需等数分钟。该问题累计获得 52 个赞和 119 条评论，说明影响面较广。虽已关闭，但反映了模型网关层响应分发策略仍有优化空间。

### 2. [2.0] TUI 向 /tmp 泄漏 ~21MB .so 文件（#42700）
**状态**: OPEN | 评论: 7  
[查看 Issue](https://github.com/anomalyco/opencode/issues/42700)

每次启动 TUI 都会在 /tmp 中遗落 ~21MB 的 `.so` 文件且从不清理。对长期使用 TUI 的开发者而言，tmpfs 会被逐渐填满，最终导致 TUI 无法启动。Arch Linux 用户已确认受影响。

### 3. 本地 vLLM + Qwen3-Coder 触发循环压缩摘要（#22792）
**状态**: CLOSED | 评论: 6 | 👍: 3  
[查看 Issue](https://github.com/anomalyco/opencode/issues/22792)

配置本地 vLLM（`@ai-sdk/openai-compatible`）服务于 Qwen3-Coder-30B 时，简单输入（如“你好”）触发病态的重复压缩摘要循环。本地模型工作流的稳定性仍需加强。

### 4. Opencode Zen 全模型响应缓慢且 Esc 中断失效（#29397）
**状态**: CLOSED | 评论: 6 | 👍: 7  
[查看 Issue](https://github.com/anomalyco/opencode/issues/29397)

多日以来所有模型响应需数分钟甚至不返回，且双击 Esc 无法中断。虽然工单已关闭，但 7 个 👍 说明该问题在 Zen 用户群体中引起了足够重视。

### 5. `opencode upgrade` 不支持 GITHUB_TOKEN 导致 403（#23461）
**状态**: OPEN | 评论: 5 | 👍: 2  
[查看 Issue](https://github.com/anomalyco/opencode/issues/23461)

代理/VPN 环境下执行 `opencode upgrade` 因匿名 GitHub API 限流（60 req/h/IP）而频繁报 403。命令未携带已配置的 `GITHUB_TOKEN`，属于基础体验缺陷。

### 6. 自定义模型连接反复报 ECONNRESET（#46088）
**状态**: OPEN | 评论: 3 | 今日新增  
[查看 Issue](https://github.com/anomalyco/opencode/issues/46088)

新会话可正常开始，但读取几个文件后稳定复现 `ECONNRESET`。上下文窗口配置为 200k tokens 且实际读取量远未达标，初步判断与连接池或超时处理有关。

### 7. 桌面端丢失既有会话历史（#34471）
**状态**: CLOSED | 评论: 3  
[查看 Issue](https://github.com/anomalyco/opencode/issues/34471)

重置 Desktop 配置后，`opencode.db` 中的历史会话在桌面端和 Web 端全部消失。SQLite 迁移期间的配置重置流程存在数据安全隐患。

### 8. 单条 Prompt 2 分钟消耗 21 美元且无任何输出（#34402）
**状态**: CLOSED | 评论: 3  
[查看 Issue](https://github.com/anomalyco/opencode/issues/34402)

使用 GPT-5.5 Pro 执行深度审计任务时，2 分钟内烧光全部 20 美元余额且未返回任何内容。成本控制与异常熔断机制广受关注。

### 9. 多个并发实例启动时 Bun 崩溃（#38366）
**状态**: OPEN | 评论: 2  
[查看 Issue](https://github.com/anomalyco/opencode/issues/38366)

macOS arm64 上同时启动 6–8 个 TUI 实例（同一项目目录），多个实例在启动阶段段错误崩溃。Bun 1.3.14 的并发安全性值得关注。

### 10. 渲染进程死循环导致桌面端无响应（#34421）
**状态**: CLOSED | 评论: 2  
[查看 Issue](https://github.com/anomalyco/opencode/issues/34421)

macOS M1 Max 上 v1.17.11 启动约 3 分钟后，Solid.js 信号进入无限循环，渲染进程彻底卡死。30+ 次运行中记录 84 次无响应事件，严重度较高。

---

## 重要 PR 进展

### 1. feat(app): 通过二维码配对服务器（#46098）
**提交者**: Hona | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46098)

为 V2 Web 和桌面客户端增加二维码配对能力，复用现有 `opencode2 pair` 通道。显著简化多端接入的配置流程。

### 2. fix(core): 限制已消费任务历史（#46087）
**提交者**: Hona | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46087)

将进程级 Job 注册表的历史记录上限设为 **100 个任务 / 16 MiB 输出文本**，自动驱逐已完成条目。有助于降低长期运行时的内存占用。

### 3. fix(ai): 隔离响应工具调用标识（#46084）
**提交者**: kitlangton | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46084)

修复 Open Responses 函数调用中 `call_id` 稳定但 item ID 可被复用或遗漏时的累积器键冲突，避免完成参数被意外丢弃。

### 4. fix(shell): Windows 退出后管道排空上界（#46085）
**提交者**: Hona | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46085)

Windows 下子进程（如 `bunx agent-browser`）退出后仍持 stdout/stderr 句柄导致 shell 挂起，本 PR 为管道排空设置边界条件。

### 5. refactor(util): 层图不透明化与可组合化（#46089）
**提交者**: kitlangton | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46089)

移除基于名称的替换 API，使 Layer 依赖关系显式化，减少“看似封闭却缺服务”的隐性错误。

### 6. refactor(core): 复用目录响应摘要（#46071）
**提交者**: kitlangton | 状态: CLOSED  
[查看 PR](https://github.com/anomalyco/opencode/pull/46071)

`refresh` 时对 models.dev 响应计算一次 SHA-256，避免写入缓存时重复哈希数 MB 数据。

### 7. refactor(core): 独立技能激活绑定到 Session（#46077）
**提交者**: kitlangton | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46077)

将独立技能激活逻辑从公共 Session 服务迁入 ID 绑定句柄，与 prompts/controls 保持一致的可组合性。

### 8. fix(codemode): 拒绝 Object.assign 循环引用（#46076）
**提交者**: kitlangton | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46076)

解释器此前对 `Object.assign` 绕过循环值检查，补上该防护后可阻止跨执行边界时的状态污染。

### 9. fix(tui): 等待 diff 基础搜索聚焦（#46083）
**提交者**: kitlangton | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46083)

修复 diff-base 选择测试中“输入早于焦点就绪”的竞态，待 `DialogSelect` 异步聚焦完成后再注入按键。

### 10. refactor(core): 复用 Markdown 块字节计数（#46079）
**提交者**: kitlangton | 状态: OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/46079)

HTML 转 Markdown 时先编码测长、再编码写回，现改为直接复用首次字节数，减少一次 UTF-8 编码分配。

---

## 功能需求趋势

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **模型性能与稳定性** | #29079, #29397, #46088 | 多模型/自定义端点的响应延迟、中断失效、连接重置成为高频痛点 |
| **桌面端体验修复** | #34421, #34382, #34437 | 渲染进程卡死、大 diff 解析阻塞 UI 线程、设置无法打开等问题集中爆发 |
| **Linux 剪贴板支持** | #44938, #6370, #32370 | 中键粘贴 PRIMARY 选区是 Linux 用户的传统期望，多个 PR 持续发力 |
| **配置与数据安全** | #34445, #34471 | 升级后数据目录重建、会话历史丢失引发信任危机 |
| **成本可观测性** | #34402 | 单次 Prompt 高额消耗且无输出，需要成本熔断或预算上限机制 |

---

## 开发者关注点

- **模型响应性能是当前第一痛点**：GPT 模型时快时慢、本地 vLLM 触发循环压缩、自定义端点 ECONNRESET——模型层的稳定性和可诊断性亟需提升。
- **桌面端 UI 稳定性堪忧**：Solid.js 信号循环、同步 diff 解析、菜单失效、设置打不开——v1.17.x 系列的 UI 回归问题密集，影响日常使用信心。
- **数据不丢失是底线**：升级/重置后 session 历史消失，需要更严谨的迁移策略与备份机制。
- **Linux 生态细节缺失**：中键粘贴、主剪贴板支持等基础终端习惯尚未完全覆盖，社区正以多个 PR 持续补齐。
- **后台资源管理精细化**：/tmp 泄漏、并发实例崩溃、Job 历史无上限——长时间运行场景下的系统资源治理需要更多关注。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-29

> 数据来源: [github.com/badlogic/pi-mono](https://github.com/earendil-works/pi) | 统计周期: 2026-08-28 ~ 2026-08-29

---

## 1. 今日速览

昨日社区聚焦于**窄终端崩溃**与**扩展注册 Provider 时序**两大问题的修复：两个 PR 解决了 80-88 列终端上 TUI 启动崩溃和扩展 Provider 注册延迟导致默认模型解析错误的问题。同时，**自动压缩不触发**（Issue #6879）的长期 bug 因修复 PR 合入而关闭，并引入了"post-tool 请求前压缩"机制。功能层面，`v0.84.4` 新增终端能力覆盖配置和扩展 UI 提示事件。

---

## 2. 版本发布

**v0.84.4** — 两项新特性：

- **终端能力覆盖（Capability Overrides）**：可手动覆盖检测到的终端超链接、图像和真彩色支持能力，适配终端模拟器误报场景。参见 [terminal-setup.md](https://github.com/earendil-works/pi/blob/v0.84.4/packages/coding-agent/docs/terminal-setup.md#capability-overrides)。
- **扩展 UI 提示事件**：为扩展提供 UI 对话框相关的事件通知。

---

## 3. 社区热点 Issues（Top 10）

### 1. #8584 [OPEN] TUI 行损坏：长工具输出后流式文本逐词换行 ✅ 24 评论
- **作者**: ractive | **创建**: 08-24 | **👍**: 9
- **要点**: 工具调用打印长行后，助手文本流式渲染出现逐词换行异常——每行仅一个词，疑似终端宽度检测被工具输出破坏。
- **社区反应**: 评论数达 24 条，是当前最活跃的未解决问题，影响核心交互体验。
- [查看 Issue](https://github.com/earendil-works/pi/issues/8584)

### 2. #6879 [CLOSED] 自动压缩在上下文超 100% 后不触发直至 Provider 报错
- **作者**: alexanderkreidich | **创建**: 07-20 | **👍**: 20
- **要点**: 单个 agentic turn 运行 2 小时后 context 超过 100% 仍不压缩，直到 API 在 373k tokens 时拒绝请求才触发。
- **社区反应**: 获 20 👍，是社区最关心的稳定性问题之一。**今日已在 PR #8782 中修复**。
- [查看 Issue](https://github.com/earendil-works/pi/issues/6879)

### 3. #2870 [CLOSED] 遵循 XDG 基础目录规范
- **作者**: mks-h | **创建**: 04-06 | **👍**: 52
- **要点**: 应用在 Linux 上污染 home 目录，应遵循 `$XDG_CONFIG_HOME` 规范。
- **社区反应**: 52 👍 为本周最高，反映 Linux 用户对目录规范的强诉求。
- [查看 Issue](https://github.com/earendil-works/pi/issues/2870)

### 4. #7130 [CLOSED] Kitty 终端退格键删除 2 个字符（Kitty 协议释放事件未过滤）
- **作者**: mister-booth | **创建**: 07-26 | **👍**: 1
- **要点**: Kitty 键盘协议释放事件未被过滤导致退格双删。
- **社区反应**: 12 条评论，涉及终端协议兼容性问题。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7130)

### 5. #7128 [OPEN] 默认系统提示中的 PI_* 指南过度鼓励不必要的 bash 调用
- **作者**: tea-de-kay | **创建**: 07-26 | **👍**: 13
- **要点**: 默认 system prompt 新增的 "Inspect PI_* environment variables" 指南使 agent 频繁执行环境检查命令，即使任务不需要。
- **社区反应**: 13 👍 表明用户对 agent 行为偏置的敏感度较高。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7128)

### 6. #7553 [OPEN] 压缩功能可配置思考级别/模型
- **作者**: Saolence | **创建**: 08-03
- **要点**: 自动压缩无条件复用当前会话的 thinking level，使用推理模型时无法区分摘要的思考预算。
- **社区反应**: 9 条评论，反映推理模型用户对压缩成本控制的关注。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7553)

### 7. #8620 [OPEN] 0.84.3 内置 CLI：所有全局扩展报 "Cannot find module" 错误
- **作者**: orchidautomation | **创建**: 08-25
- **要点**: 升级到 0.84.3 后，`~/.pi/agent/extensions/` 下所有扩展加载失败。
- **社区反应**: 6 条评论，影响所有使用第三方扩展的用户。
- [查看 Issue](https://github.com/earendil-works/pi/issues/8620)

### 8. #8166 [CLOSED] 工具批次中途注入自定义消息破坏 tool_calls→tool 邻接（DeepSeek 400）
- **作者**: CarloCattano | **创建**: 08-15
- **要点**: 扩展调用 `pi.sendMessage(..., { triggerTurn: false })` 在工具批次中途注入消息，导致后续所有对话失败。
- **社区反应**: 11 条评论，暴露出扩展自定义消息与工具调用时序的深层冲突。
- [查看 Issue](https://github.com/earendil-works/pi/issues/8166)

### 9. #8813 [CLOSED] 技能斜杠自动补全从 `skill:` 前缀匹配
- **作者**: XiaYiHann | **创建**: 08-29
- **要点**: 模糊匹配完整 `skill:<name>` 字符串导致固定前缀字符占据排序权重——输入 `/idea` 选中 `skill:deep-research` 而非 `skill:research-idea`。
- **社区反应**: 2 条评论，功能性缺陷，已在 PR #8786 中修复。
- [查看 Issue](https://github.com/earendil-works/pi/issues/8813)

### 10. #8806 [CLOSED] TUI 在窄终端（80-88 列）启动崩溃 — 长技能行超宽
- **作者**: mariobgsp | **创建**: 08-29
- **要点**: 内置启动框宽度 87w 超过 88 列终端宽度，`doRender` 硬抛异常。
- **社区反应**: 2 条评论，影响面广（所有窄终端用户），已有对应修复 PR #8805。
- [查看 Issue](https://github.com/earendil-works/pi/issues/8806)

---

## 4. 重要 PR 进展（Top 10）

### 1. #8812 [CLOSED] fix(coding-agent): 刷新扩展 Provider 注册后再解析初始模型
- **作者**: rosingrind | **创建**: 08-29
- **要点**: 修复扩展注册的 Provider 因注册排队导致初始模型解析为其他 Provider 默认值的竞态。
- [查看 PR](https://github.com/earendil-works/pi/pull/8812)

### 2. #8782 [CLOSED] fix(coding-agent): 在 post-tool 模型请求前执行压缩
- **作者**: davidbrai | **创建**: 08-28
- **要点**: 仅当 agent 循环继续时才执行 next-turn 准备，使阈值压缩可在 Provider 下一次请求前触发。**Closes #6879**。
- [查看 PR](https://github.com/earendil-works/pi/pull/8782)

### 3. #8786 [CLOSED] fix(tui): 技能斜杠自动补全按裸名称匹配
- **作者**: XiaYiHann | **创建**: 08-28
- **要点**: `fuzzyFilter` 改为仅对技能名称部分匹配，避免 `skill:` 前缀干扰排序。**Closes #8813**。
- [查看 PR](https://github.com/earendil-works/pi/pull/8786)

### 4. #8805 [CLOSED] fix(tui): 窄终端下自适应截断而非崩溃
- **作者**: mariobgsp | **创建**: 08-29
- **要点**: `doRender` 对超宽行改为截断而非抛异常，修复 80-88 列终端启动即崩。**Closes #8806**。
- [查看 PR](https://github.com/earendil-works/pi/pull/8805)

### 5. #8787 [CLOSED] fix(ai): Codex SSE 回退仅限超大 WebSocket 帧
- **作者**: bobvanderlinden | **创建**: 08-28
- **要点**: 将 WebSocket→SSE 自动回退限制在关闭码 `1009`（消息过大），避免其他 WebSocket 故障误触发。
- [查看 PR](https://github.com/earendil-works/pi/pull/8787)

### 6. #8784 [CLOSED] fix(ai): MiniMax-M3 的 OpenRouter/GMICloud 每模型 max_tokens 上限
- **作者**: 0ArchLinux0 | **创建**: 08-28
- **要点**: MiniMax-M3 广告 1M 上下文，但 OpenRouter 路由限制 `max_tokens` ≤ 524,288，需按模型设上限。
- [查看 PR](https://github.com/earendil-works/pi/pull/8784)

### 7. #8811 [CLOSED] feat: 添加启动合成器（StartupComposer）
- **作者**: sorafujitani | **创建**: 08-29
- **要点**: 启动过程中即可接受输入，并将输入状态带入正常交互模式；启动信任检查、选择和输入对话框使用共享 UI。
- [查看 PR](https://github.com/earendil-works/pi/pull/8811)

### 8. #8795 [CLOSED] feat(coding-agent): 添加工件验证修复门（artifact verification repair gate）
- **作者**: minpeter | **创建**: 08-28
- **要点**: 可选扩展：在确定性验证通过前扣留成功令牌，将机器可读失败反馈为有界修复轮次并在耗尽后失败关闭。
- [查看 PR](https://github.com/earendil-works/pi/pull/8795)

### 9. #8572 [OPEN] feat(ai): Amazon Bedrock Mantle 支持
- **作者**: cristinaponcela | **创建**: 08-24
- **要点**: WIP — 等待 API key 权限做端到端测试。新增 Amazon Mantle API 面，支持此前经 Converse 路由失败的 GPT-5.x 等模型。**Addresses #5363**。
- [查看 PR](https://github.com/earendil-works/pi/pull/8572)

### 10. #8790 [OPEN] feat(coding-agent): 扩展更新日志支持
- **作者**: cristinaponcela | **创建**: 08-28
- **要点**: 为 `PiManifest` 增加 `changelogPath`，支持包相对路径解析、`CHANGELOG.md` 兜底。**Addresses #5958**。
- [查看 PR](https://github.com/earendil-works/pi/pull/8790)

---

## 5. 功能需求趋势

| 方向 | 代表 Issue / PR | 热度信号 |
|------|----------------|---------|
| **窄终端 / 多尺寸适配** | #8806（启动崩溃）、#8793（补全弹窗位置可配置） | 刚暴露，2 个 PR 连修 |
| **压缩 / 上下文管理精细化** | #7553（压缩可配 thinking level）、#8782（post-tool 前压缩） | 高 —— 旧问题终获修复，新细分需求出现 |
| **Provider / 模型注册时序与动态切换** | #8812（扩展 Provider 时序）、#8810（默认模型间歇性失效） | 新出现，说明扩展体系扩大后的稳定性挑战 |
| **新模型 / 新 API 支持** | #8572（Bedrock Mantle）、#8784（MiniMax-M3 上限） | 持续活跃，GPT-5.x 经 Bedrock 的接入需求明显 |
| **扩展开发体验** | #8790（扩展 changelog）、#7147（UI 对话框事件）、#8349（检测队列中的自定义续接） | 多项并行推进，扩展 API 完善中 |

---

## 6. 开发者关注点（痛点 / 高频需求）

1. **终端兼容性依旧是痛**：Kitty 协议双删字符（#7130）、窄终端启动即崩（#8806）、Apple Terminal 崩溃（#8771）、Windows 路径显示混用分隔符（#8809）——多平台多终端的适配持续消耗社区精力。
2. **压缩逻辑的可靠性**：自动压缩在 context 超 100% 不触发（#6879，今日已修复）、OpenAI Responses API 下压缩请求缺 tools（#8774）、压缩流式中断无重试（#6848）——三项独立问题都指向压缩路径仍是易碎环节。
3. **扩展 API 的隐式时序依赖**：扩展 Provider 注册在初始模型解析之后生效（#8810）、自定义消息注入破坏 tool_calls 邻接（#8166）、`agent_end` 中无法检测队列中的续接（#8349）——扩展体系的健壮性需系统化改进。
4. **默认行为对用户的影响面**：系统提示鼓励多余 bash 调用（#7128）、`/model` 列出全部目录模型而非已配置模型（#8478）——用户希望默认行为更"克制"、更贴合实际配置。
5. **新增能力请求集中在外围体验**：权限系统（#8802）、独立视觉模型配置（#8815）、`pi -p` 打印模式与扩展/MCP 共存时无法退出（#8814）——核心能力外，用户在寻找更细粒度的控制。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-29

## 今日速览

昨日发布两个版本：**v0.22.3 稳定版**带来 Channels 命名会话、守护进程扩展安装路径校验等关键更新，以及**v0.22.3-nightly** 分支预览。Issue 侧持续发酵 WebShell 迁移带来的系列 UI 缺陷（多个由 PR #9811 引发的渲染循环、会话切换锁死问题），同时新版 0.22.3 在本地 llama-server 的推理兼容性上出现回归报告，社区关注度较高。PR 侧则集中在 WebShell 会话工作流驾驶舱、审查工作树预构建等基础设施优化上。


## 版本发布

### v0.22.3（稳定版）
- **Channels 命名会话**：支持每通道最多管理 8 个持久会话任务（[#10198](https://github.com/QwenLM/qwen-code/pull/10198)）
- **守护进程扩展安装**：接受绝对本地路径安装，拒绝相对路径，安全性提升
- **cua-driver-rs v0.20.2**：macOS 版本已完成签名+公证（universal binary），Linux/Windows 为未签名构建

### v0.22.3-nightly.20260829.e5cb60ad48
- `feat(web-shell)`: 在分支选择器旁显示 git 状态提示（[#10397](https://github.com/QwenLM/qwen-code/pull/10397)）
- `feat(review)`: 审查功能相关改进（详情见 PR 列表）


## 社区热点 Issues（Top 10）

1. **[#8124] 启动横幅首帧顶部缺行（渲染缺陷，Windows 相关）** — 已开放近 30 天，评论 11 条，最高热度。TUI 首帧渲染偶发丢失 ASCII 艺术图顶部约 3 行，与 provider 更新竞态相关，欢迎 PR 贡献。社区关注度高但未见明显进展。
   https://github.com/QwenLM/qwen-code/issues/8124

2. **[#9981] PR #9406 延迟审查发现汇总（机器人维护）** — 自动审查循环识别出超出原 PR 修复范围的问题，等待维护者跟进。这类机器人维护的 issue 持续积累，反映自动化审查流程在稳定运行中。
   https://github.com/QwenLM/qwen-code/issues/9981

3. **[#8897] `--approval-mode` 和 `--auth-type` 参数缺失于 `qwen --help`（已关闭）** — CLI 参数已注册且生效但未显示在帮助信息中，属于文档/发现性问题，已解决关闭。社区对 CLI 可发现性有明确需求。
   https://github.com/QwenLM/qwen-code/issues/8897

4. **[#8432] Bailian Token Plan 模型列表不同步，图像/视频生成失败** — 内置 `/auth` 模型列表与阿里云百炼控制台实际列表脱节，影响图像/视频生成。已标记 `ready-for-human` 待人工处理，1 👍。
   https://github.com/QwenLM/qwen-code/issues/8432

5. **[#10075] 0.22.1：配置 `permissions.allow` 后 edit/write_file 工具静默消失（已关闭）** — P1 严重缺陷：配置允许列表后，白名单外的工具完全从会话中消失且无任何提示。社区抱怨"发布前请做冒烟测试"，反映对发布质量的关切。
   https://github.com/QwenLM/qwen-code/issues/10075

6. **[#10435] 0.22.3 在本地 llama-server 上推理崩溃：grammar 解析 400 错误** — 新版本引入的回归，代码审查请求导致 llama-server 报 `failed to parse grammar`。对本地模型用户影响直接，需尽快确认是否为普遍问题。
   https://github.com/QwenLM/qwen-code/issues/10435

7. **[#10406] web-shell 无限重渲染循环：守护进程不可达时 connection.error 持续触发** — PR #9811 引入的回归：内联 `onError` 导致 effect 每次渲染都重新执行，形成死循环。WebShell 迁移稳定性问题集中爆发。
   https://github.com/QwenLM/qwen-code/issues/10406

8. **[#10441] review 的 include.path 可隐藏仓库级 filter 配置（安全）** — `git config --file` 不展开 `include.path`，恶意 include 指令可绕过仓库级 filter 检查，标记 `ready-for-agent`。安全敏感度高。
   https://github.com/QwenLM/qwen-code/issues/10441

9. **[#10461] auto-memory-extractor 子代理 peg-native 格式错误** — 跨多个版本持续出现的错误（用户报告至少 45+ 版本前就有），`managed-auto-memory-extractor` 频繁失败。社区期待修复已久。
   https://github.com/QwenLM/qwen-code/issues/10461

10. **[#1210] 请求 XDG Base Directory 支持（7 👍 最高赞）** — 社区长期诉求（去年 12 月提出），希望 Linux 上使用 `XDG_BASE_DIRECTORY` 替代 `~/.qwen`，符合 Linux 生态惯例，但至今未实现。
    https://github.com/QwenLM/qwen-code/issues/1210


## 重要 PR 进展（Top 10）

1. **[#10423] feat(review): 审查工作树在 agent 运行前预构建** — CI 效率优化：`QWEN_REVIEW_PREBUILD=1` 时，`fetch-pr` 在 plan 生成后立即对工作树执行 `build-test --install --build-only`，避免 agent 串行等待。
   https://github.com/QwenLM/qwen-code/pull/10423

2. **[#8583] feat(web-shell): 实验性会话工作流驾驶舱** — 大型功能 PR（已开放 24 天），覆盖 plan 捕获、修订绑定审批、transcript 投影、Agent 执行和 WebShell 全链路。由 `yiliang114` 主导，`autofix/takeover` 推进中。
   https://github.com/QwenLM/qwen-code/pull/8583

3. **[#10024] feat(web-shell): HTML 产物托管分享** — 为 Web Shell 添加 HTML 产物公开分享，支持 Cloudflare → Vercel → Netlify 提供商流程（Prepare → Authorize → Connect → Ready）。
   https://github.com/QwenLM/qwen-code/pull/10024

4. **[#10122] feat(autofix): 审查收敛信号消费——接管循环的熔断器** — 为接管循环实现退出机制：审查 CLI 发布机器可读收敛诊断码（`recommendations: [{code: ...}]`），autofix 据此判断是否继续接管。
   https://github.com/QwenLM/qwen-code/pull/10122

5. **[#10427] fix(hooks): 修复钩子执行中的四个信任边界漏洞** — 安全修复：HTTP 钩子不再跟随重定向、修复仓库控制配置与代码执行/网络出口间的四个独立信任边界洞。单 commit 重开 #8396。
   https://github.com/QwenLM/qwen-code/pull/10427

6. **[#10468] fix(core): 一次性结算已取消工作流 + 按可用 CPU 调整窗口大小** — 修复工作流生命周期两个缺陷：取消时立即结算（而非延迟）、窗口大小按可用 CPU 计算。为 #9974 的重开精简版。
   https://github.com/QwenLM/qwen-code/pull/10468

7. **[#10470] fix(cli): sessionCd 从会话工作区而非陈旧 settings 缓存读取目录信任** — 修复 `sessionCd` 控制处理器使用进程级 `this.settings` 缓存而非每会话 `Config` 的信任门控问题，附带回归测试。
   https://github.com/QwenLM/qwen-code/pull/10470

8. **[#9110] fix(core): 清理临时工作目录的项目快照** — 会话从一次性目录启动后，清理 `projects/` 存储中的残留项目快照条目，含优雅关闭时释放运行时状态声明。
   https://github.com/QwenLM/qwen-code/pull/9110

9. **[#10443] fix(ci): 将所有单元测试套件纳入 vitest RPC 超时豁免** — 将 Windows/macOS CI 上 vitest 超时豁免扩展到全部测试套件，解决 worker→main `onTaskUpdate` RPC 60 秒预算耗尽问题。
   https://github.com/QwenLM/qwen-code/pull/10443

10. **[#10214] fix(ci): checkout 前恢复受保护的 qwen 残留文件** — `/verify` 作业使项目级 `.qwen` 目录变为 root 所有且只读，容器被异常终止时现有恢复逻辑无法运行，此 PR 在 checkout 前主动恢复。
    https://github.com/QwenLM/qwen-code/pull/10214


## 功能需求趋势

- **WebShell 稳定性与体验**：从 PR #9811（WebShell UI 迁移）派生出大量 follow-up 问题（#10372、#10373、#10385、#10391、#10399、#10405、#10406），涉及渲染循环、语言硬编码、会话切换锁死、分组成员丢失等，说明 WebShell 已成为核心 UI 但迁移阵痛明显
- **会话与工作流管理**：Channels 命名会话（#10198）已落地；会话轮换 sessionRotation（#8927）、Agent 视图 CLI 化（#7802）、模型提议 Goal 用户确认（#10171）均在推进中，会话生命周期管理是重点方向
- **安全与信任边界**：钩子信任边界修复（#10427）、include.path 隐藏 filter（#10441）、heredoc 权限投影收敛（#10446），安全加固持续进行
- **CI/CD 基础设施优化**：pnpm 迁移 + 快速引导（#10444）、ECS runner 池路由（#10036）、vitest 超时豁免（#10443）、审查工作树预构建（#10423），开发体验优化集中爆发
- **IDE 集成**：vscode-ide-companion 系列修复（#10372、#10373），VS Code 集成持续完善中

## 开发者关注点

- **发布质量**：`#10075`（P1 工具静默消失）引发社区强烈不满，用户直呼"发布前请做冒烟测试"；`#10435`（llama-server 推理崩溃）为新版本回归，连续两个版本出现影响核心功能的缺陷，发布流程需要更严格的门禁
- **本地模型兼容性**：llama-server grammar 解析失败（#10435）意味着新版本对本地推理的兼容性测试不足，对依赖本地模型的用户影响重大
- **WebShell 迁移阵痛**：PR #9811 派生了至少 6 个 follow-up issue（渲染循环、编辑索引错误、会话锁死、分组成员丢失），且因超 1500 行审查上限导致修复被延迟，"reply-only triage" 模式影响修复时效
- **自动化审查流程**：多个 `autofix-deferred` issue（#9981、#10048、#10382、#10415）显示自动审查能发现问题但修复分流效率不高；`#10106` 暴露审查线程解析在 0/90 线程成功时无信号输出，流程可视化有待改进
- **Git 操作限制争议**：`#10448` 提出"无 .git 文件夹禁止一切 git 操作"的约束对 submodule 工作流不合理，社区认为应通过实际执行 git 命令来验证，而非粗暴检查目录存在性

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-29

> 数据来源：github.com/Hmbown/DeepSeek-TUI（实际镜像：Hmbown/CodeWhale）

## 今日速览

v0.9.12 里程碑进入密集收尾期：核心 PR 集中落地，包括 Daytona 云代理分发、无头 PR 审查（GitHub 回帖）、登录会话修复和大量死代码清理；TUI 工作条带迎来重大交互升级（Shell 与子代理同级可导航）。同时，社区对多模型供应商（DeepSeek、Kimi、Qwen 等）的原生 Web 搜索支持呼声明显，`/copy` 等小功能也被提上议程。

---

## 社区热点 Issues（10 条精选）

### 1. #5573 — v0.9.12 里程碑追踪（置顶必读）
**作者**: Hmbown | 💬 19 条评论 | ⏱️ 更新于今日
**为什么重要**: 官方发布的唯一权威入口，列出了 P0 必须修复项（#5566 等，涉及资金与安全），所有社区 PR 和 Issue 最终都对齐此列表。当前工作分支 `codex/v0912-integration-20260823`，**尚未发布正式版本**。
🔗 https://github.com/Hmbown/CodeWhale/issues/5573

### 2. #5316 — EPIC-005：TUI Crate 解构（伞形 EPIC）
**作者**: aboimpinto | 💬 18 条评论 | ⏱️ 更新于昨日
**为什么重要**: 这是代码架构层面的最大工程，涉及将巨型 TUI crate 拆分为多个独立模块。影响所有贡献者的开发路径，EPIC 下涵盖大量子任务和 PR。
🔗 https://github.com/Hmbown/CodeWhale/issues/5316

### 3. #5579 — 插件 UX 与 Claude Code 对齐（已关闭）
**作者**: Hmbown | 💬 3 条评论 | ⏱️ 更新于今日
**社区反应**: 这是一个**已关闭**的增强请求，但关闭原因是**部分交付**：PR #5663（提示栏主动推荐插件）已落地，但插件热重载与分类发现仍待后续版本。
🔗 https://github.com/Hmbown/CodeWhale/issues/5579

### 4. #5681 — 扩展原生 Web 搜索至 DeepSeek、Qwen、Kimi、Z.AI、小米 MiMo
**作者**: h3c-hexin | 💬 0 条评论 | ⏱️ 更新于昨日
**为什么重要**: **今日社区最值得关注的新需求**。目前仅 OpenAI、Anthropic 和 xAI 支持 provider 原生搜索，其他主流国产模型仍需用户单独配置搜索后端。此 issue 与 PR #5686（Moonshot/Kimi 搜索实现）直接呼应，是生态扩展的关键一步。
🔗 https://github.com/Hmbown/CodeWhale/issues/5681

### 5. #5668 — 新增 `/copy` 命令：复制最近一次模型输出
**作者**: Hmbown | 💬 2 条评论 | ⏱️ 更新于昨日
**痛点明确**: 长对话后手动选中文本复制非常不便，社区需要一个直接命令。Scope 较小，适合新手贡献者接手。
🔗 https://github.com/Hmbown/CodeWhale/issues/5668

### 6. #4402 — v0.9.2 注意力 UX 设计（Focus-Aware 通知）
**作者**: Hmbown | 💬 2 条评论 | ⏱️ 更新于昨日
**背景**: 已有通知、标题状态和任务/后台状态，但**未形成统一的注意力契约**：完成反馈基于耗时而非终端焦点；标题忙/完成状态不联动；缺少返回摘要。属于长期 UX 改进项，v0.9.12 暂未列入 P0。
🔗 https://github.com/Hmbown/CodeWhale/issues/4402

---

## 重要 PR 进展（10 条精选）

### 1. #5701 — Daytona 云代理分发（已合并）
**功能**: 新增 `codewhale dispatch` / `/dispatch`（别名 `cloud-agent`）命令，可将本地任务分发至 Daytona 云代理，支持 GitHub/CNB/Gitee 远端。凭据缺失时**默认失败关闭（fail closed）**，密钥仅存环境变量或 keyring。
🔗 https://github.com/Hmbown/CodeWhale/pull/5701

### 2. #5706 — 无头 PR 审查 + GitHub 回帖（已合并）
**功能**: `codewhale review --pr N [--post]` 实现无头 PR 审查。加 `--post` 后以 **codewhale-agent[bot]** 身份发布评论（含摘要与行内评论），基于 PR head SHA 锚定。未配置 GitHub App 时为 no-op 绿。
🔗 https://github.com/Hmbown/CodeWhale/pull/5706

### 3. #5708 — Tideline 组件：按 ratatui 翻译规范实现（待审）
**功能**: 按设计文档 §5a 实现剩余 12 个 Tideline 组件（独立渲染模块 + golden buffer 测试），延续已有 topbar（组件 13）的模式。涉及 `crates/tui/src/tideline/` 目录。**架构参考价值高**。
🔗 https://github.com/Hmbown/CodeWhale/pull/5708

### 4. #5704 — 统一登录路径：会话与 Daytona Slot 持久化（已合并）
**修复**: 原登出逻辑**不清理** Codewhale 账户会话与 Daytona token，且 TUI 缺少 `/login` 命令。此 PR 统一为一个登录路径，并保证登出时所有凭据全部清除。
🔗 https://github.com/Hmbown/CodeWhale/pull/5704

### 5. #5703 — `cw operate` 对齐 CWC OperateRecord（待审）
**功能**: 将 `cw · operate` 与已合并的 CWC `OperateRecord` 对齐（`20de981`），改为 camelCase 字段（`burnRate`、`leadPlan`、`pace`），并新增 pace 节流/加宽逻辑。
🔗 https://github.com/Hmbown/CodeWhale/pull/5703

### 6. #5663 — 提示栏主动建议插件（已合并）
**功能**: #5579 的部分交付。当用户输入包含 "Supabase" 等关键词时，若本地已安装对应插件，直接 toast 下一步建议，避免用户手动输入 `/plugin suggest`。
🔗 https://github.com/Hmbown/CodeWhale/pull/5663

### 7. #5705 — 清理已验证死代码与无用依赖（已合并）
**维护**: **+4 / −143 行**，涉及 13 个文件：移除 2 个无用依赖和 9 个死函数，且每个删除都通过 `allow(dead_code)` 审计验证，`Cargo.lock` 同步瘦身。
🔗 https://github.com/Hmbown/CodeWhale/pull/5705

### 8. #5699 — TUI 工作条带：一线 Shell 支持（已合并）
**UX**: 后台 Shell 升级为与子代理同级的可导航分组（`▾ Shells N`），可打开行查看输出，`shell_*` id 可直接作为 `/jobs cancel <id>` 的取消目标，并支持 `/jobs cancel all` 与 `/jobs cancel-all`。
🔗 https://github.com/Hmbown/CodeWhale/pull/5699

### 9. #5686 — 新增 Moonshot/Kimi 原生搜索（待审）
**功能补充**: 为 Moonshot/Kimi 产品线（K3 Formula、K2.6 `$web_search`、Kimi Code 会员 `/search`）添加原生 Web 搜索，并将供应商控制执行限制为 **4 轮 8 次工具调用**，自动拒绝异常工具，仅恢复可信来源引用。
🔗 https://github.com/Hmbown/CodeWhale/pull/5686（作者 h3c-hexin）

### 10. #5710 — 修复 CI：安装 libdbus-1-dev（待审）
**CI 修复**: ubuntu-latest 上 `cargo build` 因 `libdbus-sys` 缺少系统依赖而失败。添加与 `ci.yml` 相同的 retry-wrapped apt 安装步骤。**直接提升所有 PR 的 CI 通过率**。
🔗 https://github.com/Hmbown/CodeWhale/pull/5710

---

## 功能需求趋势

| 方向 | 热度 | 代表 Issue / PR |
|------|------|----------------|
| **多模型供应商原生搜索** | 🔥🔥🔥 高 | #5681（DeepSeek/Qwen/Kimi/Z.AI/MiMo）、#5686（Kimi） |
| **云代理 / 远程分发** | 🔥🔥 中高 | #5701（Daytona）、`/dispatch` 命令 |
| **插件 UX 对齐 Claude Code** | 🔥🔥 中高 | #5579（已部分交付）、#5663 |
| **注意力 / 焦点感知 UX** | 🔥🔥 中 | #4402（焦点感知通知、标题状态） |
| **明细小命令补齐** | 🔥 中 | #5668（`/copy` 复制最近输出） |
| **工作条带统一交互** | 🔥 中 | #5699（Shell 可导航分组） |
| **架构解构** | 🔥 持续 | #5316（Crate Decomposition EPIC） |

---

## 开发者关注点

1. **发布节奏与 P0 优先级**：社区最关心 v0.9.12 何时发布、#5566（资金/安全类）修复进度。当前仅靠 #5573 单一追踪，建议维护者拆分进度或增加每日状态 comment。
2. **多模型搜索配置繁琐**：DeepSeek、Qwen、Kimi 等用户需要额外配置搜索后端，体验割裂。**#5681 是高频痛点**，建议优先排期。
3. **CI 稳定性**：#5710 再次暴露 Linux 构建环境依赖问题，开发者希望 CI 配置能覆盖所有系统库依赖，避免反复打补丁。
4. **依赖更新频繁**：web 目录下 TypeScript 5.9→7.0、Next 15→16、Tailwind 3→4 为**破坏性大版本升级**（由 Dependabot 提交）。维护者需评估兼容性风险后再合并。
5. **GitHub App 身份配置复杂**：#5707/#5709 提供了文档，但 `codewhale-agent[bot]` 目前为创始人门控（founder-gated），外部贡献者无法测试端到端回帖，协作测试受限。

---

**编辑备注**：本日报基于 GitHub 公开数据自动生成，部分仓库名已映射至实际地址（Hmbown/DeepSeek-TUI → Hmbown/CodeWhale）。所有链接均指向对应 Issue/PR 详情页。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*