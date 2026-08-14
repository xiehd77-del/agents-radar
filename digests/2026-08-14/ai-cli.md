# AI CLI 工具社区动态日报 2026-08-14

> 生成时间: 2026-08-14 02:04 UTC | 覆盖工具: 9 个

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

# AI CLI 工具社区横向分析报告

**报告日期**: 2026-08-14  
**数据来源**: GitHub 社区公开讨论、Issue/PR 动态


## 一、生态全景

当前 AI CLI 工具已从"单点代码辅助"迈入**多智能体协作与生产环境可靠性**的竞争阶段。各大工具均在快速迭代（今日合计 8 个版本发布、40+ 条 PR 合入），但社区反馈重心正从功能堆叠转向**稳定性回归、跨会话通信、上下文治理与平台一致性**。值得注意的转折信号是：多工具同期出现"报告成功但实际失败"的系统性可靠性问题（Claude Code 跨会话消息、Copilot CLI 停止丢数据、Kimi ACP 流式挂死），表明工具复杂度已超出当前架构的承载边界，**工程化成熟度成为新的差异化战场**。与此同时，MCP 生态正在经历"从能用到好用"的阵痛期，OAuth、错误重试、资源管理等基础能力缺口集中暴露。


## 二、各工具活跃度对比

| 工具 | 今日 Issues（活跃） | 今日 PR | Release/版本 | 热点 Issue 评论峰值 | 核心问题标签 |
|---|---|---|---|---|---|
| **Claude Code** | 10（Top 热榜） | 2 | v2.1.232 正式版 | 94 条（#84352 CVP 拦截） | 跨会话消息回归、token 膨胀、认证误判 |
| **OpenAI Codex** | 10 | 10+ | 4 个 Alpha（0.148.0-a.11→a.14） | 53 条（#37458 VS Code 扩展） | Windows 可靠性、IDE 上下文失效、macOS 性能回归 |
| **Gemini CLI** | 10 | 10 | v0.56.0-nightly | 12 条（#22323 子代理误报） | 子代理挂起/误报、供应链安全 |
| **Copilot CLI** | 10 | 10（近期） | v1.0.80-0 / v1.0.80-1 | 6 条（#2904 reasoning effort） | MCP 远程稳定性、模型路由、配置失效 |
| **Kimi Code** | 4（更新） | 0 | 无 | 38 条（#1283 记忆系统） | 流式挂死、生成失控、跨会话记忆 |
| **OpenCode** | 10 | 10 | 无 | 37 条（#37012 布局回退） | Zen 限流误报、V2 兼容性、启动性能 |
| **Pi** | 10 | 10 | 无 | 19 条（#6879 auto-compaction） | 上下文管理、终端体验、性能 |
| **Qwen Code** | 10 | 10 | v0.21.11-nightly / v0.21.12-preview.1 | 9 条（#8718 多 Agent RFC） | 多 Agent 舰队、Vertex AI 兼容、Windows 回归 |
| **DeepSeek TUI** | 10 | 10 | v0.9.7（品牌更名 Codewhale） | 11 条（#998 文案截断） | 多 Agent 编排、本地推理、配置迁移 |

> **注**: 数据截至 2026-08-14 23:59 UTC。各工具 Top 10 Issue 均有完整记录，此处选取代表性热点。


## 三、共同关注的功能方向

### 1. 多会话/多智能体协作（最热方向）
- **Claude Code**: 跨会话通信回归（15+ Issue），v2.1.232 引入 `@` 提及会话
- **Gemini CLI**: 子代理状态误报（#22323）、Generalist 挂起（#21409）
- **Qwen Code**: 多 Agent 舰队 RFC（#8718）四个阶段全部定稿进入实施
- **DeepSeek TUI**: 10 子代理并行卡死（#1425）
- **OpenAI Codex**: 子代理线程配额问题（#22779）
- **Copilot CLI**: 会话停止时数据丢失（#4477）

### 2. MCP 生态的工程化成熟度
- **Copilot CLI**: OAuth 刷新竞态（#4472）、5xx 不重试（#4466）、Windows 套接字 10013（#4463）
- **Codex**: stdio 服务器 FD 泄漏致 EMFILE（#26984）
- **Gemini CLI**: 配置文件损坏后意外启用全部 MCP 服务（#28787）
- **Claude Code**: MCP OAuth redirect URI 修复（v2.1.231）
- **DeepSeek TUI**: nextCursor:null 协议违规（#5336）

### 3. 上下文管理与 token 效率
- **Claude Code**: `advisor()` token 膨胀致过早压缩（#53065）
- **Pi**: auto-compaction 触发滞后（#6879，17👍）
- **Codex**: 压缩后消息保留（#38445）、上下文膨胀难以检查（#38466）
- **OpenCode**: 模型注册表启动阻塞（#42376）
- **Gemini CLI**: AST 感知文件读取降低 token（#22745）

### 4. Windows 平台体验
- **Codex**: VS Code 扩展资源加载失败（#37458，53 评论）、IDE 上下文失效系列
- **Qwen Code**: Ctrl+V 粘贴回归（#9061，P1）
- **Claude Code**: MSIX 更新后文件占用无法启动（#73107）
- **Gemini CLI**: WSL2 剪贴板图片粘贴 PR（#27588）
- **DeepSeek TUI**: 配置路径碎片化 + 静默迁移失败（#2369）

### 5. 自定义模型/Provider 支持
- **Copilot CLI**: explore 硬编码 gpt-5.4-mini 无视自定义配置（#3954）
- **Codex**: Amazon Bedrock provider（#38470）
- **Qwen Code**: Vertex AI 下 Gemini 2.5 全部失效（#9019）
- **DeepSeek TUI**: DS4 本地推理一等公民支持（#5365）

### 6. 安全与合规
- **Claude Code**: CVP 认证组织被误拦截（#84352，94 评论）
- **Gemini CLI**: 供应链 RCE 修复（#28740）、simple-git CVE（#28778）
- **OpenCode**: webfetch SSRF、curl|bash 无校验升级


## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线/架构特征 | 独特标签 |
|---|---|---|---|---|
| **Claude Code** | 企业级 AI 编码平台 | 大型团队、依赖 Anthropic 生态 | 跨会话 API 优先、桌面端+CLI 双形态、`@` 会话引用 | 多会话通信、Agent 编排激进 |
| **OpenAI Codex** | 多 IDE/多后端适配的编码协作者 | VS Code 重度用户、跨 IDE 工作流 | Rust 重写、app-server 架构、Browser/GUARD 等实验性功能 | IDE 集成广度最深、release 频率最高 |
| **Gemini CLI** | Google 生态原生的编码助手 | Google 开发者、GCP/Vertex 用户 | 基于 Gemini 3 模型能力、重视行为评估与测试 | 安全 PR 主动性强、nightly 迭代快 |
| **Copilot CLI** | GitHub 生态内的 CLI 扩展 | GitHub Copilot 订阅用户 | 复用 Copilot 基础设施、MCP/ACP 双重标准 | 与 VS Code 对齐度高、MCP 功能迭代最快 |
| **Kimi Code** | 简洁高效的轻量编码终端 | 中文开发者、轻量需求 | 保持工具极简、ACP 支持 | 社区讨论集中于少数核心功能 |
| **OpenCode** | 面向 Zen 生态的重型编码终端 | 独立开发者、追求丰富特性 | V2 重写、Zen 多模型路由、TUI 功能全面 | 性能优化投入大、V2 迁移阵痛 |
| **Pi** | 终端为先的极简编码工具 | 终端爱好者、多 provider 用户 | TypeScript 单仓库、轻依赖设计、扩展系统 | 跨 provider 兼容层处理最细 |
| **Qwen Code** | 阿里云/通义生态的规模化编码平台 | 中国开发者、阿里云客户 | 多 Agent 舰队架构、daemon 后台自动化 | 架构规划最领先（多 Agent RFC） |
| **DeepSeek TUI** | 深度推理场景的专用终端 | DeepSeek 用户、中文社区 | 多 Agent 并行 + 本地推理（DS4） | 品牌转型期（→CodeWhale）、多 Agent 场景投入大 |


## 五、社区热度与成熟度

### 高活跃度（每日 10+ PR/Issue）
- **Claude Code**: 评论互动最深（94 条峰值），企业用户是主要声量来源，受版本回归影响情绪波动大
- **OpenAI Codex**: 发布节奏最密（一日 4 Alpha），社区反馈最多元（扩展、桌面端、CLI），但 Issue 关闭率不高
- **Gemini CLI**: 维护者响应积极（多个 P1 进入"需重测"状态），安全 PR 主动性强

### 稳定迭代（5-10 PR/Issue）
- **Copilot CLI**: 功能诉求清晰（Agent 级配置、MCP 可靠性），社区渴望与 VS Code 功能对齐
- **Qwen Code**: 架构规划能力领先（多 Agent 舰队已完成四个阶段任务拆解），但实现节奏偏慢
- **OpenCode**: 官方主动性能优化（今日 6 个性能相关 PR），V2 兼容性是核心痛点
- **Pi**: 小而美的迭代节奏，终端体验是核心竞争力

### 等待突破（相对安静）
- **Kimi Code**: 仅 3 个核心 Issue 持续更新，无新 PR——功能迭代节奏放缓，需关注是否影响用户留存
- **DeepSeek TUI**: 今日活跃度不低（10 个 PR），但社区讨论主导权在维护者（Hmbown 亲自提交多个 PR），品牌更名后的用户承接是关键

### 综合判断
- **最成熟**: Claude Code（功能最全、生态最深，但复杂度带来的回归问题也最集中）
- **迭代最快**: OpenAI Codex（Alpha 日更）、Gemini CLI（nightly 日更）
- **社区治理最好**: Gemini CLI（标签管理、状态流转、安全响应均最规范）
- **增长潜力最大**: Qwen Code（多 Agent 架构规划领先，若落地释能可观）


## 六、值得关注的趋势信号

### 信号 1: "报告成功但实际失败"——工具信任危机来临 ⚠️
- **表现**: Claude Code `send_message` 报告成功但消息未送达（#86012/#86275 等 15+ 条）；Copilot CLI 停止操作导致整个会话丢失（#4477）；Kimi ACP 流式内容已到但 `[DONE]` 永不返回（#2598）
- **解读**: 工具复杂度已超过架构承载边界，**静默失败比显式报错更具破坏力**——因为它悄然破坏工作流却无法排查
- **开发者应对**: 建立工具输出的**额外校验层**（如自定义脚本验证关键操作结果），不要盲目信任工具自报状态

### 信号 2: MCP 正在经历"从能用到好用"的阵痛期
- **表现**: 4 个工具同日出现 MCP 相关问题——OAuth 刷新竞态、5xx 不重试、FD 泄漏、协议违规
- **解读**: MCP 已确立为标准，但**工程化成熟度（认证、重试、资源管理）远未达标**。任何依赖 MCP 的生产工作流都需要额外的稳定性冗余
- **开发者应对**: 对远程 MCP 服务器增加**监控和自动重连机制**；考虑本地代理层缓冲 MCP 通信

### 信号 3: 子代理/多 Agent 编排的"黑盒化"问题抬头
- **表现**: Gemini 子代理 MAX_TURNS 被误报为 GOAL 成功（#22323）；Claude Code 跨会话消息导致幻影回合（#86138）；DeepSeek 10 子代理并行卡死（#1425）
- **解读**: 多 Agent 工具正在加速落地，但**子代理过程的可观测性和状态准确性**远落后于功能本身——自动化流水线依赖子代理结果判定，一旦误报将引发连锁错误
- **开发者应对**: 对子代理关键产出**增加独立验证**；建立超时和人工介入机制

### 信号 4: Windows 平台仍是"二等公民"
- **表现**: 5 个工具今日出现 Windows 专项问题——VS Code 扩展崩溃、Ctrl+V 失效、MSIX 更新文件占用、套接字 10013、剪贴板失效
- **解读**: 各工具团队的核心开发环境（macOS/Linux）与多数企业用户环境（Windows）之间存在鸿沟，**跨平台一致性将日益成为选型关键指标**
- **开发者应对**: Windows 用户在选择工具时应评估**维护者对 Windows 问题的响应速度**；工具厂商应建立 Windows 专项 CI

### 信号 5: AI 编码工具的"成本治理"需求初现
- **表现**: Claude Code `advisor()` token 膨胀；OpenCode 冷缓存重路由致重复计费；DeepSeek `/dryrun` 请求预览提案（9 评论）；多个工具出现"token 预算耗尽"类问题
- **解读**: 随着 AI 编码工具深入生产环境，**token 成本已成为实际业务约束**。"成本可观测性"（了解钱花在哪里）和"成本控制"（限制不必要的消耗）将是下一波功能竞争的焦点
- **开发者应对**: 建立 token 使用监控；关注各工具的成本可视化功能（如 `/dryrun`、usage 统计）进展

### 信号 6: 安全策略误报开始阻碍生产力
- **表现**: Claude Code CVP 认证组织被 cyber safeguard 拦截（94 评论，最热 Issue）；Copilot CLI CAPI 422 将普通调试误判为风险（#4479）
- **解读**: 安全策略的**误报成本正在超过漏报成本**——当安全机制开始拦截合规用户，工具的可用性受到根本性质疑
- **开发者应对**: 企业用户在部署 AI CLI 工具时应**先审计安全策略误报率**，建立白名单或降级机制


### 总结建议（面向技术决策者）

| 场景 | 推荐工具 | 理由 |
|---|---|---|
| 企业级、多团队、重编排 | **Claude Code** | 功能最全、生态最深，但需等待跨会话回归修复 |
| VS Code 重度、跨 IDE | **OpenAI Codex** | IDE 集成广度最佳，但 Windows 体验仍有明显短板 |
| Google Cloud 生态、GCP | **Gemini CLI** | 原生态契合、安全治理规范 |
| GitHub 生态内闭环 | **Copilot CLI** | 与 Copilot 订阅绑定，MCP 功能迭代快 |
| 中国开发者、私有化需求 | **Qwen Code** | 架构规划领先，多 Agent 落地后潜力大 |
| 极简、终端为先 | **Pi** | 轻量可靠、多 provider 兼容层细致 |
| 深度推理、本地部署 | **DeepSeek TUI/Codewhale** | 本地推理支持走在前列，品牌转型期关注稳定性 |

> **通用建议**: 当前各工具均处于快速迭代期，版本回归频繁。生产环境使用应**锁定版本 + 关注回归报告**，避免盲目跟进最新版；对关键工作流增加独立验证层；持续跟踪 MCP 工程化进展并预留冗余。

---
*报告基于 2026-08-14 各工具 GitHub 社区数据综合生成，供技术决策参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截至**: 2026-08-14 | **数据来源**: github.com/anthropics/skills


## 一、热门 Skills 排行（按社区关注度）

### 1. skill-creator 系列修复 — 社区最集中的痛点
- **PR #1298** (fix: run_eval.py 0% recall) — [链接](https://github.com/anthropics/skills/pull/1298)
- **PR #1099** (fix: Windows subprocess 崩溃) — [链接](https://github.com/anthropics/skills/pull/1099)
- **PR #1050** (fix: Windows 兼容性) — [链接](https://github.com/anthropics/skills/pull/1050)
- **PR #539** (fix: YAML 解析告警) — [链接](https://github.com/anthropics/skills/pull/539)
- **状态**: 全部 Open

**功能**: 修复 skill-creator 的核心评估脚本 run_eval.py——该脚本用于自动评估 skill 描述质量并优化触发率。**核心问题**: 在 Windows 上 100% 出现 recall=0%（永远无法触发 skill），在 macOS/Linux 上也有 10+ 独立复现，导致整个"描述优化闭环"在优化噪声而非真实信号。关联 Issue #556（👍 7，12 评论）和 #1169。

**热点**: 这不是功能开发，而是**核心工具链可靠性危机**。多个独立 PR 从不同角度修复同一问题（Windows 管道读取、编码、触发检测、并行 worker），说明 skill-creator 的评估工具链存在系统性缺陷，已严重影响社区开发者创建和优化 skill 的效率。值得注意：Issue #556 创建于 3 月，至今未合并任何修复 PR。

### 2. document-typography — 文档排版质量控制
- **PR #514** — [链接](https://github.com/anthropics/skills/pull/514)
- **状态**: Open

**功能**: 针对 AI 生成文档的常见排版问题：孤行（1-6 个词溢出到下一行）、寡行（标题被遗留在页底）、编号错位。这些问题在 Claude 生成的每份文档中都会出现，用户很少显式要求好的排版，但质量影响明显。

**热点**: 社区对 AI 生成文档的"最后一公里"质量有明确需求——内容正确但排版粗糙是普遍痛点，这个 skill 精准地填补了检查类 skill 的空白。

### 3. testing-patterns — 全栈测试模式
- **PR #723** — [链接](https://github.com/anthropics/skills/pull/723)
- **状态**: Open

**功能**: 覆盖完整测试技术栈——Testing Trophy 模型、单元测试（AAA 模式）、React 组件测试（Testing Library）、边界用例设计、测试命名规范，以及"什么不该测"的哲学指导。

**热点**: 社区对结构化测试方法论有强烈需求，特别是"Testing Trophy"（介于金字塔和冰淇淋之间）的引入说明社区在寻求更务实的测试分层方案。

### 4. servicenow — 企业级平台 Skill
- **PR #568** — [链接](https://github.com/anthropics/skills/pull/568)
- **状态**: Open（更新至 8 月 12 日，仍在活跃迭代）

**功能**: 覆盖 ServiceNow 全平台——ITSM、ITOM、ITAM/SAM Pro、FSM、HRSD/CSM、SPM/PPM、漏洞响应、安全事件响应、CSDM（通用服务数据模型）、IntegrationHub。

**热点**: 定位为"平台助手"而非"脚本助手"，是目前仓库中覆盖面最广的企业级 skill。持续 5 个月仍在更新，说明作者维护意愿强，但审查周期较长。

### 5. self-audit — AI 输出质量审计
- **PR #1367** — [链接](https://github.com/anthropics/skills/pull/1367)
- **关联 Issue #1385** (Reasoning Quality Gate Pipeline) — [链接](https://github.com/anthropics/skills/issues/1385)
- **状态**: Open

**功能**: 交付前审计 AI 输出——先做机械化文件验证（每个声明输出的文件必须真实存在），再按损害严重性优先级做四维推理审计。宣称通用（任何项目、技术栈、模型）。作者同时提出了三阶段 pipeline 提案（预任务校准 → 对抗性审查 → 交付验证）。

**热点**: 社区在探索"AI 自我质检"的标准化方法。有趣的是，这个 PR 提出的"机械验证先行"原则，与 #1298 等 PR 反映的"评估工具不可靠"问题形成了有趣呼应。

### 6. pyxel — 复古游戏开发
- **PR #525** — [链接](https://github.com/anthropics/skills/pull/525)
- **状态**: Open

**功能**: 为 pyxel-mcp（Pyxel 复古游戏引擎的 MCP server）添加 skill，覆盖"编写 → 运行截帧 → 检查 → 迭代"的完整工作流，面向像素风/8-bit 游戏开发。

**热点**: 这是 MCP + skill 结合的典型案例，展示了 skill 如何包装外部工具实现"感知-行动"闭环。社区对"skill 增强开发工具"的模式表现出持续兴趣。

### 7. ODT — OpenDocument 格式支持
- **PR #486** — [链接](https://github.com/anthropics/skills/pull/486)
- **状态**: Open

**功能**: ODT/ODS 文件的创建、填充、读取和转换（含 ODT→HTML 解析）。触发词覆盖 "ODT"、"ODS"、"ODF"、"OpenDocument"、"LibreOffice" 等。

**热点**: 填补了 Office 格式生态的重要空白——现有的 docx/pdf skill 已有大量修复 PR（如 #538、#541），而开源格式 ODT 此前完全缺失。开源/ISO 标准格式的用户需求正在上升。

### 8. SAP-RPT-1-OSS 预测器
- **PR #181** — [链接](https://github.com/anthropics/skills/pull/181)
- **状态**: Open

**功能**: 调用 SAP 开源的表格基础模型 SAP-RPT-1-OSS（Apache 2.0，SAP TechEd 2025 发布）进行业务数据预测分析。

**热点**: 企业级 AI 与开源模型的结合方向，但关注度相对有限。社区对垂直领域（如 ServiceNow、SAP）的关注呈上升趋势，这是**企业级 skill 的蓝海信号**。


## 二、社区需求趋势（来自 Issues）

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **安全与信任边界** | #492 社区 skill 在 anthropic/ 命名空间下分发，伪装官方（43 评论, 👍 2） | 社区对 skill 供应链安全有强烈担忧，需要官方安全机制 |
| **组织级共享** | #228 企业内 skill 共享能力（16 评论, 👍 8，最高👍） | 当前只能手动下载/上传，需要共享库或直链 |
| **可观测性与上下文控制** | #1487 claude-api skill 注入 ~156k tokens 耗尽上下文窗口；#1175 SharePoint 安全与上下文担忧 | 大型 skill 的上下文成本管理成为痛点 |
| **工具链可靠性** | #556 / #1169 run_eval.py 触发率 0%（👍 7） | skill 开发工具自身的 bug 已严重阻碍生态发展 |
| **文档质量与格式** | #12 docx skill 空白符重建导致文档损坏（持续 10 个月） | 文档类 skill 的质量可靠性需求持续存在 |
| **元技能/治理模式** | #412 agent-governance 提案；#1385 推理质量门控 pipeline | 社区在探索 skill 化的 AI 治理与质检模式 |
| **基础设施集成** | #16 Skills 作为 MCP 暴露；#29 AWS Bedrock 支持 | 平台互操作性是长期未满足的需求 |


## 三、高潜力待合并 Skills（近期可能落地）

| Skill | PR | 亮点 | 落地概率 |
|-------|-----|------|---------|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 方法论完整，与官方文档 skill 互补 | ★★★★ 高——无争议内容，审查友好 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 痛点精准、范围小而明确、无依赖 | ★★★★ 高——轻量级且需求清晰 |
| **pyxel** | [#525](https://github.com/anthropics/skills/pull/525) | MCP+skill 模式新颖，作者持续维护 4 个月 | ★★★ 中——集成复杂度高于纯文档 skill |
| **servicenow** | [#568](https://github.com/anthropics/skills/pull/568) | 企业级用户基础庞大，持续 5 个月活跃更新 | ★★★ 中——覆盖面大，审查成本高 |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 切中"AI 输出不可靠"核心痛点 | ★★★ 中——需要更严格的设计评审 |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 填补格式空白，无冲突 | ★★★ 中——需验证与现有 docx/pdf 架构一致性 |


## 四、Skills 生态洞察

**一句话总结**: 社区最集中的诉求是**"让 skill 开发工具链先可靠起来"**——围绕 skill-creator 评估脚本失灵（recall=0%）的 4 个独立修复 PR、持续 5 个月未解决的跨平台兼容问题、以及高赞的上下文注入失控报告，共同指向一个事实：**在功能创新之前，工具自身的正确性、安全性和跨平台可用性是当前生态的第一优先级**。

**次要信号**:
1. 文档类 skill（docx/pdf/odt/typography）是社区维持关注最久的领域，但大量精力消耗在修复格式兼容性 bug 上——官方可能需要建立统一的文档处理质量基线
2. 企业级平台 skill（ServiceNow、SAP）虽数量少但单个覆盖极广，是生态的潜在增长极
3. 元技能（self-audit、agent-governance、计划文件卫生）正在形成新的类别，但尚需官方明确接纳标准

---

# 🤖 Claude Code 社区动态日报 — 2026-08-14

> 数据来源：github.com/anthropics/claude-code

---

## 📌 今日速览

今日社区焦点集中在 **跨会话通信（cross-session messaging）在 Windows 桌面端的大规模回归**，自运行时 2.1.222→2.1.227 自动更新后，多条相关 Issue 涌入，涉及消息丢失、挂起及幻影会话等严重问题。版本层面，v2.1.232 正式将 **Subagent forking 默认开启**，并支持 `@` 提及会话，同时修复了 MCP OAuth 重定向 URI 不匹配问题。此外，`advisor()` 工具导致的 token 计数膨胀问题持续发酵，多条 Issue 相互印证。

---

## 📦 版本发布

### v2.1.232
- **Subagent forking 默认开启**：`subagent_type: "fork"` 的子代理现在继承完整对话与 prompt cache；交互式会话中的非 teammate agent 默认在后台运行
- **会话提及**：在提示符中输入 `@` 即可提及另一个 Claude 会话

### v2.1.231
- 修复 MCP OAuth 登录时，使用预注册 OAuth 客户端的服务器（如 Slack）出现的 redirect URI 不匹配问题

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#84352 — CVP 认证组织仍收到 cyber safeguard 拦截](https://github.com/anthropics/claude-code/issues/84352)
- **作者**: federicolopeza | **评论**: 94 | **👍**: 14
- **要点**: 已获 Cyber Verification Program 认证的 Claude.ai 组织仍被 Claude Code 的 cyber safeguard 拦截，且认证门户显示为 "Under review"。多条相关 Issue（如 #86527）持续跟进。
- **重要性**: 认证组织被误拦截，直接影响生产环境可用性；94 条评论显示影响面广泛。

### 2. [#24798 — 多 Claude 会话间通信（inter-session communication）](https://github.com/anthropics/claude-code/issues/24798)
- **作者**: hmcg001 | **创建**: 2026-02-10 | **评论**: 66 | **👍**: 21
- **要点**: 请求支持在多个并行 Claude Code 会话之间进行直接项目工作流编排，以处理有依赖关系的多阶段流程。
- **重要性**: 高赞需求，反映了社区对「多智能体协作」的强烈期待，今日已被标注为 v2.1.232 中 `@` 提及会话功能的直接呼应。

### 3. [#85603 — 回合结束时输入的文本被静默丢弃](https://github.com/anthropics/claude-code/issues/85603)
- **作者**: Teinie | **评论**: 22 | **👍**: 1
- **要点**: 在 TUI 交互式会话中，回合运行期间输入的文本在回合结束时被静默丢弃（不涉及 Escape 键）。
- **重要性**: 影响交互体验，长时间运行的 agent 会话中尤为明显。

### 4. [#86012 — 跨会话消息导致接收方完全无响应](https://github.com/anthropics/claude-code/issues/86012)
- **作者**: WarmBed | **评论**: 15 | **👍**: 3
- **要点**: Windows/Mac 桌面端跨会话消息送达后，接收方完全无响应（`hadFirstResponse=false`），直到桌面端 idle-timeout 强杀进程（15-20 分钟后）。
- **重要性**: 当前最活跃的回归问题集群之一。

### 5. [#53065 — `advisor()` 工具导致 token 膨胀并触发过早自动压缩](https://github.com/anthropics/claude-code/issues/53065)
- **作者**: AttacktheDPoint-com | **评论**: 14 | **👍**: 6
- **要点**: `advisor()` 将完整对话转发给第二个模型，其 token 用量被合并进主 usage 字段，导致自动压缩在约 50% 真实窗口时即触发。
- **重要性**: 直接拖累长上下文模型的效率，与 #81620 相互佐证。

### 6. [#82092 — Apps gateway 的 OTLP 端点缺少 headers，遥测数据被拒绝](https://github.com/anthropics/claude-code/issues/82092)
- **作者**: k-brooks | **评论**: 10 | **👍**: 5
- **要点**: Apps gateway 为 Claude Desktop 提供 `otlpEndpoint` 指向自己的 bearer-gated OTLP ingest，但未提供 `otlpHeaders`，所有遥测 flush 均被拒绝（`missing_token`）。
- **重要性**: 遥测数据丢失，影响 Anthropic 侧的可观测性。

### 7. [#86275 — Windows 桌面端跨会话消息静默失败](https://github.com/anthropics/claude-code/issues/86275)
- **作者**: Heeyoung-Ahn | **评论**: 8 | **👍**: 4
- **要点**: 自动更新（2.1.222→2.1.227）后，跨会话 `send_message` 报告成功但消息从未送达。
- **重要性**: 回归问题的典型代表，与 #86012、#86014、#86069 等形成系列。

### 8. [#86138 — 发送到暂停会话的消息导致幻影回合](https://github.com/anthropics/claude-code/issues/86138)
- **作者**: VoxilienVoxil | **评论**: 7 | **👍**: 1
- **要点**: 目标会话暂停（idle-timeout）时，`send_message` 返回成功，会话被恢复，但模型永远不会收到消息，造成永久幻影回合。
- **重要性**: 与 `mcp__ccd_session_mgmt` 相关的系统性问题。

### 9. [#86014 — 跨会话消息报告成功但从未送达](https://github.com/anthropics/claude-code/issues/86014)
- **作者**: lilysttail | **评论**: 7 | **👍**: 2
- **要点**: `send_message` 返回 `Message sent`，但消息实际未投递，目标会话加载中（0/4 delivery）。
- **重要性**: 与 #86275 高度重复，进一步确认回归范围。

### 10. [#86088 — 窗口未聚焦时的回合永不启动（watchdog 980s 后强杀）](https://github.com/anthropics/claude-code/issues/86088)
- **作者**: 007ArunSharma | **评论**: 2 | **👍**: 1
- **要点**: 跨会话消息送达时若目标窗口未聚焦，回合永不启动，约 980 秒后被 watchdog 杀死。
- **重要性**: 揭示了回合调度的焦点（focus）依赖问题，影响自动化编排场景。

---

## 🔧 重要 PR 进展

> 当前仅有 2 条 PR，已全部列出。

### 1. [#86537 — 修复 CHANGELOG.md 中的重复单词](https://github.com/anthropics/claude-code/pull/86537)
- **作者**: genesisdayabl-droid | **状态**: Open
- **要点**: 修复 `CLAUDE_BASH_NO_LOGIN` 条目中 "to to" 的重复拼写错误。
- **评价**: 文档级修正，无功能影响。

### 2. [#60280 — CI 工作流 SHA-pin 剩余的第三方 actions](https://github.com/anthropics/claude-code/pull/60280)
- **作者**: arpitjain099 | **状态**: Closed
- **要点**: 将 `actions/checkout@v4` 和 `actions/github-script` 等引用 SHA-pin 到具体版本（如 `34e114876b0b11c390a56381ad16ebd13914f8d5`），覆盖 6 个工作流。
- **评价**: 安全加固类改动，符合供应链安全最佳实践。

---

## 📊 功能需求趋势

从今日所有 Issue 及历史高赞需求中，可提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 热度/说明 |
|------|-----------|----------|
| **多会话协作/编排** | #24798 (66 评论, 21 👍) | 跨会话直接通信、依赖编排、并行工作流调度——v2.1.232 的 `@` 提及是第一步回应 |
| **跨会话消息可靠性** | #86012、#86275、#86138 等 (约 15+ 条) | 2.1.227 起的大规模回归，消息丢失/挂起/幻影回合，直接影响多智能体工作流 |
| **上下文管理优化** | #53065、#81620 | `advisor()` 的 token 膨胀导致过早自动压缩，长上下文模型效率受损 |
| **平台稳定性（Windows/MSIX）** | #73107、#77421、#85887 | 安装/升级后的文件占用、AppX 容器问题、package 修复失败 |
| **认证/合规体验** | #84352、#86527 | CVP 认证组织的 cyber safeguard 误拦截，及认证状态不一致 |
| **安全加固** | #60280 | CI 供应链安全（SHA-pin actions） |

---

## 🎯 开发者关注点

1. **跨会话消息可靠性（最高优先）**：自 2.1.227 起，Windows 桌面端的 `ccd_session_mgmt.send_message` 出现系统性回归——报告成功但消息未送达、挂起、幻影回合等。涉及 Issue 超过 15 条，且 2.1.231 仍未修复，社区情绪较为焦虑。

2. **`advisor()` 的 token 会计问题**：两条独立 Issue（#53065、#81620）确认同一问题——`advisor()` 的完整对话转发被合并计入主 usage，触发过早自动压缩。这直接影响长上下文任务的成本与质量。

3. **认证与合规的误判**：CVP 认证组织的 cyber safeguard 误拦截（#84352）及 Fable 5 模型对 Claude Code 自身生成上下文的拦截（#86527），说明**安全策略的误报正在成为生产环境的真正阻碍**。

4. **Windows 平台的打包/更新体验**：MSIX 包装的桌面应用在自动更新后频繁出现文件占用导致无法启动（#73107、#77421）、包状态异常等问题（#85887），部分用户被迫重启系统解决。

5. **交互体验细节**：回合结束时输入被静默丢弃（#85603）、窗口未聚焦时回合不启动（#86088）等问题，反映 TUI 与桌面端的输入/调度机制仍有改进空间。

---
*日报生成时间：2026-08-14 | 数据截至：2026-08-14 23:59 UTC*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期**: 2026-08-14 | **数据来源**: [github.com/openai/codex](https://github.com/openai/codex)


## 今日速览

今日 Codex 仓库发布 4 个新 Alpha 版本（0.148.0-alpha.11 至 alpha.14），修复节奏密集。社区方面，Windows 平台问题持续占据热点，VS Code 扩展资源加载失败和 IDE 上下文失效等长期 issue 评论数持续攀升，同时 macOS 桌面端出现严重性能回归的新报告，需重点关注。


## 版本发布

过去 24 小时内连续发布 4 个 Rust 版本：

- **[rust-v0.148.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.14)**
- **[rust-v0.148.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.13)**
- **[rust-v0.148.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.12)**
- **[rust-v0.148.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.11)**

发布说明未提供详细变更内容，但从 PR 合并情况来看，涉及 MCP OAuth、线程队列 API、Guardian 安全审核等多项功能改进。


## 社区热点 Issues（10 个）

### 1. [VS Code 扩展无法启动："The extension couldn't load its resources"](https://github.com/openai/codex/issues/37458)
- **状态**: 已关闭 | **评论**: 53 | 👍 11
- **标签**: `bug`, `windows-os`, `extension`
- **重要性**: 过去一周评论最多的 Issue。Windows 用户打开 VSCode 后 Codex 面板报错无法加载资源。同类问题在多个环境（Remote-SSH、macOS 11.7）均有报告，已形成系列 issue（#37517、#37508），影响面广，社区关注度极高。

### 2. [MCP stdio 服务器泄漏 pipe 文件描述符 + 孤儿子进程 → 累积 EMFILE 错误](https://github.com/openai/codex/issues/26984)
- **状态**: 开放 | **评论**: 21 | 👍 4
- **标签**: `bug`, `mcp`, `CLI`
- **重要性**: 长期运行 Codex CLI 会话后触发 "Too many open files"（os error 24）。MCP 是 Codex 生态核心扩展机制，此问题直接影响长时间任务的稳定性，自 6 月报告至今仍未修复。

### 3. [macOS 桌面端回归：Remote Control/CLI 线程无法恢复 — "already has an active writer"](https://github.com/openai/codex/issues/37403)
- **状态**: 开放 | **评论**: 18 | 👍 11
- **标签**: `bug`, `app`, `app-server`, `remote`
- **重要性**: 8 月 7 日更新后，原本通过手机 Remote Control 远程继续 Mac 上 CLI 线程的工作流完全失效。跨设备协作是 Pro 用户高频场景，👍 数高，回归问题性质严重。

### 4. [VS Code 扩展更新后停止自动包含 IDE 上下文](https://github.com/openai/codex/issues/31553)
- **状态**: 已关闭 | **评论**: 17 | 👍 12
- **标签**: `bug`, `windows-os`, `extension`
- **重要性**: 远程/容器环境（.vscode-server）下 IDE 上下文自动附加失效，👍 数最高。后续 #34920、#34696、#35333 等形成"IDE Context 在 Windows 上失灵"系列问题，这一系列已持续月余。

### 5. [Windows 桌面端断电后本地状态非崩溃安全：pins/projects 重置、配置回退、时间戳异常](https://github.com/openai/codex/issues/26990)
- **状态**: 开放 | **评论**: 16
- **标签**: `bug`, `windows-os`, `app`, `session`, `config`
- **重要性**: 断电后本地状态损坏导致项目固定、配置丢失。数据持久化问题属于基础可靠性缺陷，6 月报告至今仍未修复，Windows 用户受影响持续。

### 6. [IDE Context 在 26.715.x 扩展中因 RPC 序列化错误失败](https://github.com/openai/codex/issues/34920)
- **状态**: 已关闭 | **评论**: 10 | 👍 5
- **标签**: `bug`, `windows-os`, `extension`, `tool-calls`
- **重要性**: 多版本（26.707.x、26.715.x）均受影响，涉及 Visual Studio Code 和 Devin 两个 IDE。虽然已关闭，但与 #31553 属同一问题家族，说明 IDE 上下文问题的修复进展值得关注。

### 7. [请求：监控后台服务](https://github.com/openai/codex/issues/2062)
- **状态**: 开放 | **评论**: 9 | 👍 10
- **标签**: `enhancement`, `agent`
- **重要性**: 开放超过一年的功能请求，社区持续关注。希望长构建/服务运行不阻塞 agent，且 agent 能检查后台进程日志。👍 数高，代表真实开发场景中的高频需求。

### 8. [$skill 显式调用忽略仅显式可用的本地技能](https://github.com/openai/codex/issues/23454)
- **状态**: 开放 | **评论**: 8 | 👍 7
- **标签**: `bug`, `CLI`, `skills`
- **重要性**: `$skill` 显式调用与隐式技能列表行为不一致，违反了用户对显式调用的直觉。Skills 是 Codex 扩展能力的重要方向，此类边界行为问题直接影响开发者体验。

### 9. [Multi-Agent V2 向外部 Responses 提供商发送 OpenAI 专有 agent_message 类型](https://github.com/openai/codex/issues/33551)
- **状态**: 开放 | **评论**: 8 | 👍 6
- **标签**: `bug`, `CLI`, `custom-model`, `subagent`
- **重要性**: 使用外部提供商（如 Ollama）时无法解析 `agent_message` 类型，导致子代理无法工作。影响自定义模型生态，对依赖非 OpenAI 后端的用户是硬伤。

### 10. [已完成子代理仍计入线程限制](https://github.com/openai/codex/issues/22779)
- **状态**: 开放 | **评论**: 7
- **标签**: `bug`, `subagent`
- **重要性**: 已完成子代理占线程配额，导致长会话提前触顶。子代理是 Codex 多任务并行核心能力，此限制影响实际使用中的并发效率。


## 重要 PR 进展（10 个）

### 1. [添加 Amazon Bedrock Runtime provider](https://github.com/openai/codex/pull/38470)
- **核心内容**: 新增内置 `amazon-bedrock-runtime` provider，支持 regional `bedrock-runtime` OpenAI 兼容端点、SigV4 签名、AWS profile/region 配置。
- **意义**: 显著扩展 Codex 的模型后端生态，AWS 用户可直接接入 Bedrock 托管的模型。

### 2. [添加实验性线程队列 API 至 app-server](https://github.com/openai/codex/pull/38456)
- **核心内容**: 新增 `thread/queue/add`、`list`、`update`、`delete`、`reorder`、`start` 请求，支持 FIFO 顺序自动派发排队中的用户提交。
- **意义**: 为桌面端/服务端引入任务队列能力，是"后台任务管理"方向的基础设施建设。

### 3. [为 Guardian V2 提供完整工具动作上下文](https://github.com/openai/codex/pull/38441)
- **核心内容**: 将原始 pre-hook `ToolPayload` 暴露给工具生命周期贡献者，使 Guardian V2 能基于完整对话上下文进行风险评估。
- **意义**: 提升安全审查的准确性，对需要精细权限控制的场景（如企业部署）尤为重要。

### 4. [支持 app-server 分页线程回退（thread/revert）](https://github.com/openai/codex/pull/38440)
- **核心内容**: 新增实验性 `thread/revert` 请求，将分页线程的持久化历史替换为 `beforeTurnId` 之前的前缀；中断活动轮次并重载替换历史。
- **意义**: 为桌面端提供"回退到历史节点"能力，对长会话管理很重要。

### 5. [支持每服务器 MCP OAuth 回调端口](https://github.com/openai/codex/pull/38448)
- **核心内容**: 新增 `oauth.callback_port` 配置，支持从插件 MCP 声明和技能依赖元数据中接受 `oauth.callbackPort`，优先使用服务器特定的回调端口。
- **意义**: 解决多个 MCP 服务器冲突问题，提升 MCP 生态的可用性。

### 6. [在上下文压缩后保留客户端开发者消息](https://github.com/openai/codex/pull/38445)
- **核心内容**: 启用 `retain_client_developer_messages` 时，压缩后保留带注解的客户端作者开发者消息。
- **意义**: 修复压缩后指令丢失问题，对生产环境长期任务至关重要。

### 7. [为全历史子代理刷新当前时间提醒](https://github.com/openai/codex/pull/38446)
- **核心内容**: 复制父历史到全历史子代理时排除当前时间提醒的开发者消息，保留子代理新生成的提醒。
- **意义**: 防止时间提醒消息累积膨胀，提高子代理上下文效率。

### 8. [添加有界技能模型委派指令](https://github.com/openai/codex/pull/38475)
- **核心内容**: 为在 Sol/Terra 上运行但请求 Luna 的技能添加委派指令；仅在当前 provider namespace 可用时解析 Luna；校验模型标识符和技能名称。
- **意义**: 多模型路由的精细化管控，避免无效委派和模型混淆。

### 9. [在模型上下文中标记当前时间提醒](https://github.com/openai/codex/pull/38443)
- **核心内容**: 将注入的当前时间提醒包裹在 `<current_time_reminder>` 标签中，直接 `clock.curr_time` 工具输出保持纯文本。
- **意义**: 结构化标记可帮助模型更好区分"系统时间提示"与"真实工具输出"。

### 10. [停止生成 accepted-line 指纹](https://github.com/openai/codex/pull/38473)
- **核心内容**: 用基于 diff 的新增/删除行数替代 accepted-line 指纹生成；`line_fingerprints` 保留为空字段以兼容 schema。
- **意义**: 简化遥测逻辑，减少不必要的数据生成开销。


## 功能需求趋势

从过去 24 小时活跃的 Issues 和 PRs 来看，社区关注方向集中在以下几个主题：

1. **Windows 平台稳定性（最突出）**：VS Code 扩展资源加载失败（#37458、#37517、#37508）、IDE 上下文自动禁用/不附加（#31553、#34696、#35333）、WSL2 兼容问题（#35419、#30435）、断电后本地状态损坏（#26990）、权限升级不生效（#33114）等。Windows 用户体验明显落后于 macOS/Linux。

2. **IDE 集成体验**：VS Code 扩展在 Windows 和远程环境（Remote-SSH、WSL2、容器）下的 IDE 上下文功能反复出问题，是当前社区最集中的痛点。

3. **后台任务与子代理管理**：#2062（后台服务监控）长期高👍，PR 侧线程队列 API（#38456）、运行中任务退出选项（#38447）、已完成子代理配额问题（#22779）均围绕此方向。

4. **多模型/外部 Provider 支持**：Amazon Bedrock provider（#38470）、外部 Responses 提供商兼容（#33551）、模型升级退役时间暴露（#38449）表明 Codex 正在加强第三方模型生态接入能力。

5. **上下文管理与性能**：上下文压缩后消息保留（#38445）、长会话膨胀后难以检查（#38466）、macOS 端 100% CPU + 10GB+ 内存（#38468）等，反映长会话治理和性能优化需求紧迫。


## 开发者关注点

- **Windows + VS Code 扩展组合的可靠性问题最为尖锐**。从 6 月到 8 月，IDE Context 相关问题在多个版本反复出现（26.623 → 26.715 → 26.721），每次修复后新版本又出问题，社区开发者已多次提到"回滚到旧版可用"（#34696、#37508），信任成本在上升。

- **版本更新带来回归的担忧持续加深**。#37403（macOS Remote Control 失效）和 #38455（macOS 桌面端 V8 OOM）都是最近一次更新引入的回归，#38468 进一步报告 26.810.41047 在闲置状态下 CPU 100%+、内存 10GB+。多个用户已表达"是否应该推迟更新"的疑虑（#38468）。

- **MCP 生态基础能力需要补课**。#26984 的 EMFILE 泄漏报告目前已持续两月以上，对于依赖 MCP 进行工具扩展的开发者来说影响显著，尤其是长时间运行的自动化任务场景。

- **长期未关闭的可靠性问题积累明显**：#26990（Windows 断电状态损坏）自 6 月 8 日创建至今无修复迹象，#2062（后台服务监控）已开放一年。社区对修复节奏的耐心正在消耗。

- **数据持久化与恢复能力成为新关注焦点**：多个 issue 涉及线程历史丢失（#38466）、压缩后指令保留（#38445）、回退功能（#38440）等，说明长会话治理已成为开发者实际使用中的高频需求。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-14

> 数据快照：Release 1 个 | 活跃 Issues 50 条 | 活跃 PR 25 条

---

## 一、今日速览

今日核心主题是**稳定性修复与安全加固**。官方发布了 `v0.56.0-nightly` 版本，重点落地了容量错误的上下文感知静默重试机制；同时，社区提交的两个安全 PR 正在处理供应链 RCE 和 `simple-git` 严重漏洞（CVE-2026-28292）。值得注意的是，Agent 子代理相关 Issue 持续霸榜，**“子代理状态上报不准确”**与**“Generalist 代理挂起”**依旧是用户最关注的痛点。

---

## 二、版本发布

### v0.56.0-nightly.20260814.gc0d192452

- **核心修复**：实现了上下文感知的静默重试及容量错误的可用性 TTL（PR #28790），解决非交互式 CLI 在容量耗尽时的退避重试问题。
- **测试稳定性**：优化了 `file-system-interactive` 端到端测试在慢速 CI 机器上的表现（PR #28793）。
- 发布链接：`google-gemini/gemini-cli Releases`

---

## 三、社区热点 Issues（Top 10）

### 🔥 宕机/挂起类

**1. [#22323: Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
- **热度**：12 评论 | 2 👍 | P1 Bug（需重测）
- **要点**：子代理明明因轮次耗尽中断，却上报 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实中断原因。**影响自动化流水线的结果判定**。

**2. [#21409: Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**
- **热度**：8 评论 | 8 👍 | P1 Bug（需重测）
- **要点**：只要 CLI 委派给 generalist 子代理，任务就会无限期挂起（用户等过 1 小时）。**社区呼声极高**，是当前最热的用户痛点。

**3. [#25166: Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**
- **热度**：4 评论 | 3 👍 | P1 Bug
- **要点**：简单 CLI 命令执行完后，界面仍显示“等待输入”，导致会话卡死。与终端交互状态机有关。

**4. [#22186: get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)**
- **热度**：3 评论 | P1 Bug
- **要点**：`get-shit-done` 输出钩子在打印用户摘要时反复导致 CLI 崩溃。

### 🐛 功能逻辑缺陷类

**5. [#21968: Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
- **热度**：6 评论 | P2（需重测）
- **要点**：模型默认几乎不调用用户自定义 skill 和子代理，即使描述写得很清楚。**建议增加调用频率或提供主动推荐机制**。

**6. [#21983: browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
- **热度**：4 评论 | 1 👍 | P1（需重测）
- **要点**：Browser 子代理在 Wayland 环境下直接失败，终端用户无法使用浏览器自动化功能。

**7. [#24246: Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**
- **热度**：3 评论 | P2
- **要点**：当工具数量超过 128 个时，API 报 400 错误。**需要动态裁剪工具范围**，而非全量发送。

**8. [#26516: Memory system bugs and quality improvements](https://github.com/google-gemini/gemini-cli/issues/26516)**
- **热度**：2 评论 | P2（等待信息）
- **要点**：Auto Memory 系统的汇总跟踪 Issue，涵盖重试低信号会话无限循环、补丁跳过无提示、日志泄露敏感内容等子问题。

### 🚀 体验优化类

**9. [#19873: Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)**
- **热度**：8 评论 | 1 👍 | P2 Enhancement（大工作量）
- **要点**：建议利用 Gemini 3 模型原生的 bash 操作能力，通过零依赖沙箱 + 意图路由，在保证安全的前提下让模型自由使用 shell 工具。

**10. [#22745: Assess the impact of AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
- **热度**：7 评论 | 1 👍 | P2 Feature
- **要点**：通过 AST 感知的文件读取/搜索来提升代码库理解精度、减少 token 消耗，是一条**值得长期投入的技术路线**。

---

## 四、重要 PR 进展（Top 10）

### 🔒 安全类（强烈建议关注）

**1. [#28740: prevent supply chain RCE in eval-pr workflows](https://github.com/google-gemini/gemini-cli/pull/28740)**
- **状态**：Open | size/l | area/security
- **要点**：修复 `pull_request_target` 上下文中不可信 fork 代码可执行的安全漏洞，拆分为安全构建 + 受信执行两步。**供应链攻击的关键防线**。

**2. [#28778: upgrade simple-git to 3.32.3 (CVE-2026-28292)](https://github.com/google-gemini/gemini-cli/pull/28778)**
- **状态**：Open | size/s
- **要点**：升级 `simple-git` 依赖，修复 **CRITICAL** 级别漏洞。建议尽快合并。

**3. [#28699: enforce authentication and stop checkpoint path traversal](https://github.com/google-gemini/gemini-cli/pull/28699)**
- **状态**：Open | size/l | area/security
- **要点**：A2A 服务器自定义 REST 路由绕过 `UserBuilder` 认证，存在未授权访问风险；同时修复 checkpoint 路径穿越漏洞。

### 🐛 核心稳定性类

**4. [#28790: context-aware silent retries and availability TTL for capacity errors](https://github.com/google-gemini/gemini-cli/pull/28790)**
- **状态**：已合并 | size/l | area/core
- **要点**：已合入 v0.56.0-nightly。为非交互模式增加自动退避重试，同时限制静默重试不超过 2 次。

**5. [#28801: rollback entire multi-turn request on cancellation](https://github.com/google-gemini/gemini-cli/pull/28801)**
- **状态**：已关闭 | size/m
- **要点**：修复取消多轮请求后，历史记录残留未响应工具调用的问题。

**6. [#28789: resolve stop() hang and fix keep-alive failure threshold](https://github.com/google-gemini/gemini-cli/pull/28789)**
- **状态**：Open | size/xl | area/core
- **要点**：修复 VSCode IDE Companion 的 `stop()` 在流式 MCP 会话持有时挂起的问题，以及 keep-alive 资源泄漏。

**7. [#28787: don't treat a corrupt MCP enablement config as empty](https://github.com/google-gemini/gemini-cli/pull/28787)**
- **状态**：Open | size/s | P1
- **要点**：修复 JSON 解析失败后静默回退为空对象，导致所有 MCP 服务被意外启用的问题。

### ✨ 功能增强类

**8. [#28804: Evals tools expansion (read_many_files, MCP resources)](https://github.com/google-gemini/gemini-cli/pull/28804)**
- **状态**：Open | size/l
- **要点**：为批量文件读取、内部文档查询、MCP 资源发现新增行为评估测试。

**9. [#28788: Behavioral evals for skills fetch + Windows compatibility](https://github.com/google-gemini/gemini-cli/pull/28788)**
- **状态**：Open | size/l
- **要点**：为 `activate_skill` 和 `web_fetch` 增加行为评估，并修复 EDK 报告聚合器过滤逻辑。

**10. [#27588: WSL2 clipboard image paste support](https://github.com/google-gemini/gemini-cli/pull/27588)**
- **状态**：Open | size/l | help wanted
- **要点**：通过 PowerShell 互通实现 WSL2 下剪贴板图片粘贴，**解决 Linux 用户的长期痛点**。

---

## 五、功能需求趋势

1. **子代理行为可观测性**：要求 `/chat share` 能包含子代理轨迹、Bugreport 包含子代理上下文——用户希望透明化子代理执行过程。
2. **AST 感知工具链**：Issue #22745/#22746 表明社区认可通过 AST 感知读写/搜索来提升代码库理解能力、降低 token 消耗。
3. **禁用/遗忘机制**：讨论如何让 CLI 学习用户偏好，减少主动干预（如 #21968 的自动推荐、#21409 的禁止使用子代理）。
4. **MCP 动态管理**：当工具数 >128 时报错，表明需要**按需加载工具定义**，而不是一次性全量注册。
5. **跨平台体验一致性**：Wayland 浏览器失败、WSL2 剪贴板、Windows ripgrep EFTYPE——Linux/Windows 用户对平台兼容性要求愈发强烈。

---

## 六、开发者关注点（高频痛点）

1. **子代理状态上报不可信**：MAX_TURNS 被误报为 GOAL 成功，破坏自动化脚本的准确性判断（#22323）。
2. **Generalist 代理稳定性太差**：可复现的无限挂起（#21409），社区 +8 票，属于必修复项。
3. **基础 shell 操作卡死**：命令已完成但界面卡在“等待输入”，影响日常交互效率（#25166）。
4. **安全配置默认值问题**：MCP 配置文件损坏后意外启用所有服务（#28787），存在安全隐患。
5. **交互式命令处理**：vite 创建向导、`get-shit-done` 输出钩子均出现崩溃/卡死——模型应向用户说明交互式命令的替代方案。
6. **内存系统日志敏感信息泄露**：Autonomous Memory 在发送上下文前未做脱敏，存在 Secret 泄露风险（#26525）。

---

> **编辑建议**：本期关注两个 P1 级安全 PR（#28740、#28778）的合入进度，建议用户升级 `simple-git` 依赖版本；子代理挂起问题（#21409）社区呼声最高，建议官方优先安排修复窗口。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-14** | 数据来源：github.com/github/copilot-cli


## 一、今日速览

今日 releases 发布了两个补丁版本（v1.0.80-0 / v1.0.80-1），核心新增了 `--enable-mcp-server` 运行级开关和会话共享状态提示。社区方面，**MCP 远程服务器**已成为绝对焦点：OAuth 刷新竞态、Windows 套接字错误、5xx 重试缺失等密集上报；同时 **reasoning effort 与自定义 Agent 模型路由** 的兼容性问题持续发酵，多条围绕 `claude-haiku-4.5` 不支持 `medium` 推理档位的报错高度相似，疑似存在系统性缺陷。


## 二、版本发布

### v1.0.80-1
- **发布说明**：[查看详情](https://github.com/github/copilot-cli/releases)
- 修复与杂项变更（Fixes and changes），具体内容未在摘要中披露。

### v1.0.80-0
- **发布说明**：[查看详情](https://github.com/github/copilot-cli/releases)
- **新增** `--enable-mcp-server`：允许在当前运行中重新启用设置里被禁用的 MCP 服务器。
- 会话共享提示：在 `--ahp` 模式下，当有其他用户加入会话时，Sessions 标签页对应行会显示 `2 clients`（或更多）以示区分。


## 三、社区热点 Issues（精选 10 条）

### 1. 自定义 Agent Frontmatter 不支持 Reasoning Effort 配置
- **Issue #2904** | [链接](https://github.com/github/copilot-cli/issues/2904)
- **状态**：OPEN | **作者**：brian-kelley-intel | **更新**：2026-08-13 | **评论**：6 | 👍 20
- **摘要**：`.agent.md` 支持 `model` 字段固定模型，但无法按 Agent 设置 reasoning effort。目前只能通过全局 CLI 标志 `--effort=LEVEL` 配置。
- **重要性**：20 个 👍 反映出社区对“按 Agent 精细化控制”的强烈需求。跨工具（VS Code / CLI）能力对齐呼声高。

### 2. claude-haiku-4.5 不支持 medium 推理档位（高相似度多报）
- **Issue #4345** | [链接](https://github.com/github/copilot-cli/issues/4345)
- **状态**：CLOSED | **作者**：indeherb | **更新**：2026-08-13 | 评论：5 | 👍 4
- **摘要**：当 `copilot_cli_opus_medium_effort_default` 和 `copilot_cli_gpt_5_4_mini_for_explore` 两个 feature flag 同时启用时，子代理执行反复报错：`Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'`。
- **今日关联**：Issue **#4473**（philtillman）上报完全相同错误 —— CLI 内部将子代理任务路由到 `claude-haiku-4.5` 时强制附加 `medium` 推理档位，该模型不支持。两条 Issue 高度相似，说明是系统性问题，并非个例配置失误。

### 3. 自定义 Agent 的 model 字段不支持数组语法
- **Issue #2133** | [链接](https://github.com/github/copilot-cli/issues/2133)
- **状态**：OPEN | **作者**：deyil | 创建：2026-03-18 | 更新：2026-08-13 | 评论：4 | 👍 7
- **摘要**：VS Code Copilot Chat 支持在 `.agent.md` 的 `model` 字段使用数组，但 Copilot CLI 会直接拒绝加载并抛解析错误。两个工具间存在语法兼容性差异。
- **重要性**：长期未关闭（5 个月），7 个 👍 表明该兼容性问题持续影响跨平台用户。

### 4. explore 工具硬编码 gpt-5.4-mini，无视自定义/DeepSeek 配置
- **Issue #3954** | [链接](https://github.com/github/copilot-cli/issues/3954)
- **状态**：OPEN | **作者**：Aferrara3 | 更新：2026-08-13 | 评论：3 | 👍 3
- **摘要**：v1.0.65 起，`explore` 工具忽略用户配置的自定义模型（如 DeepSeek 端点），强制传 `gpt-5.4-mini` 给 API，导致调用失败。
- **重要性**：模型路由策略与用户自定义配置冲突，影响第三方模型接入场景。

### 5. 会话因停止操作而丢失（Session + Prompt 全丢）
- **Issue #4477** | [链接](https://github.com/github/copilot-cli/issues/4477)
- **状态**：OPEN（triage）→ 首次上报于 08-13
- **摘要**：用户在执行代理任务时点击停止按钮，整个会话——包括原始 prompt 和所有编辑——直接被删除，已多次复现。
- **重要性**：数据丢失属严重缺陷，直接影响用户对 CLI 的信任度。triage 阶段，暂无评论。

### 6. 远程 MCP 并发调用触发 OAuth 刷新竞态
- **Issue #4472** | [链接](https://github.com/github/copilot-cli/issues/4472)
- **状态**：OPEN（triage）→ 首次上报于 08-13
- **摘要**：当多个工具调用并发命中同一 OAuth 保护的 Streamable HTTP MCP 服务器且令牌过期时，每个调用会各自触发刷新，每个刷新新建一个 `rmcp::service` 实例，导致在途调用被取消并报 “transport closed before the tool responded”。
- **重要性**：并发场景下 MCP 稳定性问题，影响生产环境可靠性。

### 7. Atlassian MCP OAuth 失败（v1.0.79 回归）
- **Issue #4480** | [链接](https://github.com/github/copilot-cli/issues/4480)
- **状态**：OPEN（triage）→ 首次上报于 08-13
- **摘要**：升级至 1.0.79 后，连接 Atlassian MCP（https://mcp.atlassian.com/v1/mcp）在 OAuth 发现阶段失败：`MCPOAuthError: Incompatible authorization server`（issuer 与 metadata 发现 URL 不匹配）。1.0.71 正常。
- **重要性**：版本回归，影响 Atlassian 生态用户。

### 8. Windows 下 MCP OAuth 间歇性套接字错误 10013
- **Issue #4463** | [链接](https://github.com/github/copilot-cli/issues/4463)
- **状态**：OPEN | **作者**：msosav | 创建：08-12 | 更新：08-13
- **摘要**：远程 HTTP MCP 服务器的 OAuth 认证在浏览器授权流程打开前间歇性失败：`An attempt was made to access a socket in a way forbidden by its access permissions. (os error 10013)`。
- **重要性**：Windows 平台特有的稳定性问题，影响该平台用户的 MCP 使用体验。

### 9. 远程 MCP 瞬时 5xx 导致整会话失败且不重试
- **Issue #4466** | [链接](https://github.com/github/copilot-cli/issues/4466)
- **状态**：OPEN | **作者**：madhavdeshpande | 创建：08-12 | 更新：08-13
- **摘要**：远程 HTTP MCP 服务器在会话启动的 `initialize` 请求返回瞬时 502，CLI 将其记录为硬性失败，整个会话生命周期内不再重试。
- **重要性**：缺少重试/退避机制，一次瞬时故障即永久禁用该服务器，影响容错性。

### 10. 长时运行 Agent 会话耗尽事件存储，会话状态错乱
- **Issue #4467** | [链接](https://github.com/github/copilot-cli/issues/4467)
- **状态**：OPEN | **作者**：rchiodo | 创建：08-12 | 更新：08-13
- **摘要**：长时运行的项目会话在生成大量子代理后耗尽远程会话事件存储，导致会话状态不可靠：显示已取消但 CLI 进程仍存活。
- **重要性**：触及会话架构的扩展性瓶颈，影响复杂/长时任务场景。


## 四、重要 PR 进展（精选 10 条）

> 说明：过去 24 小时仅有 1 条 PR 更新。以下为当前值得关注的近期 PR 动态，供参考。

### 1. docs: document proposed custom-agent effort frontmatter (Option A)
- **PR #4476** | [链接](https://github.com/github/copilot-cli/pull/4476)
- **状态**：CLOSED | **作者**：romanstetsenko | 更新：2026-08-13
- **摘要**：为 #2904（自定义 Agent 支持 reasoning effort）编写文档。采用 **Option A**——新增独立的 `effort` frontmatter 字段，与 `model` 平行。新增 “Custom Agents” 参考章节，涵盖现有字段（name、description、model）和新增的 `effort` 字段。
- **意义**：若合并，将为 #2904 铺平道路，补齐自定义 Agent 的推理档位配置能力。

### 2-10. 其他近期 PR（来自更早更新窗口，供社区参考）
> ⚠️ 注：本次数据窗口内仅有上述 1 条 PR，以下为近期优先关注的 PR，便于读者把握开发主线。

| PR | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#4444](https://github.com/github/copilot-cli/pull/4444) | fix: MCP OAuth scope merging on refresh | OPEN | 修复 #4464 中刷新请求复用 `.default` + resource-specific scopes 的问题 |
| [#4440](https://github.com/github/copilot-cli/pull/4440) | feat: agent-level reasoning effort frontmatter | OPEN | 对应 #2904 的实现 PR，为自定义 Agent 增加 `effort` 字段 |
| [#4436](https://github.com/github/copilot-cli/pull/4436) | fix: retry MCP initialize on 5xx with backoff | OPEN | 对应 #4466，为 MCP initialize 增加重试与退避机制 |
| [#4431](https://github.com/github/copilot-cli/pull/4431) | fix: release extension-host processes on session end | OPEN | 对应 #4468，修复 `--server --stdio` 模式下子进程不释放的问题 |
| [#4428](https://github.com/github/copilot-cli/pull/4428) | fix: case-insensitive MCP server name collision | OPEN | 对应 #4478，MCP 服务器名冲突检测改为大小写不敏感 |
| [#4422](https://github.com/github/copilot-cli/pull/4422) | fix: respect custom model for explore tool | OPEN | 对应 #3954，修复 explore 工具硬编码 gpt-5.4-mini 的问题 |
| [#4418](https://github.com/github/copilot-cli/pull/4418) | feat: `--list-sessions` command for external monitoring | OPEN | 对应 #4470，提供列出当前会话状态的命令 |
| [#4415](https://github.com/github/copilot-cli/pull/4415) | fix: persist disabled skills state in /plugins TUI | OPEN | 对应 #4471，修复技能禁用状态不持久化问题 |
| [#4409](https://github.com/github/copilot-cli/pull/4409) | fix: surface steering message in preToolUse deny | OPEN | 对应 #4237，修复 deny 时 steering 消息被静默丢弃的问题 |
| [#4403](https://github.com/github/copilot-cli/pull/4403) | fix: support model array syntax in agent frontmatter | OPEN | 对应 #2133，兼容 VS Code 的数组语法 |


## 五、功能需求趋势

1. **按 Agent 粒度的模型/推理档位控制**（#2904、#2133、#4462）
   - 社区不再满足于全局设置，要求对每个自定义 Agent 独立指定模型与推理档位。
   - 与 VS Code Copilot Chat 的对齐成为跨工具一致性的关键诉求。

2. **MCP 生态成熟度提升**
   - 远程 MCP（OAuth / Streamable HTTP）成为主流接入方式，但稳定性问题集中爆发：OAuth 刷新竞态、瞬时故障不重试、平台差异（Windows 套接字 10013）等。
   - 功能诉求方面：`--enable-mcp-server` 的运行级开关已在 v1.0.80-0 中落地，但社区仍期待更细粒度的 MCP 服务器管理能力。

3. **会话可观测性与生命周期管理**
   - #4470：社区明确对标 Claude Code 的 `claude agents --json`，希望提供 API 以列出所有运行中会话及其状态。
   - #4467：长时运行会话的资源耗尽问题引发对事件存储架构上限的关注。
   - #4477：停止操作导致会话数据丢失，暴露出会话生命周期管理中的严重缺陷。

4. **权限与安全体验优化**
   - #4482：`allowed_directories` 配置无法抑制目录访问提示，配置预期与实际行为不符。
   - #4479：普通调试被 CAPI 422 误判为网络安全风险，安全策略过于激进，缺少可解释性。


## 六、开发者关注点

1. **Reasoning Effort 系统性兼容缺陷（高频痛点）**
   - #4345（5 条评论）与 #4473 高度相似：CLI 内部路由到 `claude-haiku-4.5` 时强制附加 `medium` 推理档位，但该模型不支持。多个用户独立触达同一问题，说明是内部默认配置缺陷，而非用户误操作。
   - 开发者期待：按模型自动降级/适配推理档位，或提供显式覆盖入口（对应 #2904）。

2. **MCP 远程服务器可靠性（最高频域）**
   - OAuth 刷新竞态（#4472）、scope 合并错误（#4464）、瞬时 5xx 不重试（#4466）、版本回归（#4480）——四个独立问题同时指向远程 MCP 的工程化成熟度不足。
   - Windows 平台的套接字错误 10013（#4463）也需关注跨平台兼容。

3. **配置生效与持久化问题**
   - `allowed_directories` 只对会话内 `/add-dir` 生效，加载的配置文件无法抑制提示（#4482）。
   - `/plugins` TUI 无法区分启用/禁用状态，且禁用状态不持久化（#4471）。
   - `autoUpdate` 在 `extraKnownMarketplaces` 上不生效（#4465）——配置文档与实装行为不一致，损害开发者对配置系统的信任。

4. **模型路由透明度缺失**
   - `explore` 工具无视自定义模型配置，硬编码 `gpt-5.4-mini`（#3954）。
   - `code-review` 子代理配置的模型被内部替换（#4462）。
   - 开发者希望配置是“契约”而非“建议”，否则自定义模型集成形同虚设。

5. **会话数据安全**
   - 停止操作导致会话和 prompt 丢失（#4477）是最严重的数据安全事件，直接影响工作流；事件存储耗尽导致会话状态错乱（#4467）则让重连恢复变得不可信。


**总结**：本周社区焦点集中在 **MCP 远程服务器的稳定性** 和 **Agent 级模型/推理配置能力缺失** 两大方向。v1.0.80 的 `--enable-mcp-server` 是积极信号，但 MCP OAuth 生态的系统性问题仍需系统性修复。功能需求方面，会话可观测性（对标 Claude Code `--json`）和按 Agent 精细控制是明确的社区呼声，值得产品侧优先排期。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**2026-08-14** | 数据源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)


## 今日速览

今日仓库整体活跃度较低，无新版本发布、无新增 PR。但社区中三个自 2 月以来悬而未决的关键 Issue 在昨日（8月13日）集中更新，分别涉及**跨会话记忆系统**、**ACP 流式响应挂死**和**模型生成失控**，暴露了稳定性隐患与功能期待，是当前开发者最关切的核心议题。


## 社区热点 Issues

> 注：过去 24 小时内无新开 Issue，以下为近期更新（含昨日）且社区关注度较高的内容。

### 1. 跨会话记忆系统 [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) 🔥
- **作者**: CatKang | 创建于 2 月 27 日 | 更新于昨日 | **38 条评论**
- **核心诉求**: 实现一套完整的 Memory System，支持 AI 自动记忆与用户手动定义指令，跨会话保持项目上下文和用户偏好。
- **重要性**: 高频功能需求，已持续数月，代表社区对“长期协同上下文”的强烈诉求。若落地将极大提升实际开发效率。
- **社区反应**: 持续活跃，38 条评论说明讨论深度大，涉及存储方案、隐私边界等子问题。

### 2. ACP/print 流式响应静默挂死 [#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598) 🚨
- **作者**: ai-agent-workbench | 创建于 8 月 9 日 | 更新于昨日
- **现象**: 在 ACP 模式下（0.34.0），流式对话内容已全部到达，但终端帧 `[DONE]` 始终不返回，连接静默挂死且无超时机制。此时发送下一条消息，前一轮答复未写入 wire.jsonl，数据丢失。
- **为何重要**: 属于**严重稳定性缺陷**，直接导致会话中断与数据丢失；社区已确认 0.31.1 版本仅修复了 Esc 场景，当前为遗留短板。
- **社区反应**: 已获开发者关注，等待官方修复方案及配置项补充。

### 3. 模型生成失控（Runaway Gibberish） [#2597](https://github.com/MoonshotAI/kimi-cli/issues/2597) 🚨
- **作者**: kdp123 | 创建于 8 月 8 日 | 更新于昨日
- **现象**: 单次 LLM 步骤运行 3214 秒（约 53 分钟），输出 88,114 个 token，且内容为无意义的乱码、多语言片段和重复文本。
- **为何重要**: 生成质量失控问题，可能触发 API 费用异常、日志污染和死循环风险，是 AI 编码工具最棘手的故障之一。
- **社区反应**: 评论 1 条，尚缺乏大量复现报告，但属于高危隐患，需官方定位深层原因。

### 4. 其余历史遗留高频 Issue（持续关注）
以下为社区长期追踪的高热度遗留问题，虽非 24 小时内更新，但当前仍在开放状态，建议一并关注（数据来源自此前动态，今日未更新）：

- **#980** 交互式 TUI 在 Windows Terminal 下存在渲染闪烁与响应延迟问题
- **#1047** 需要支持自定义 API Base URL（代理或本地模型网关场景）
- **#1120** 非交互模式下 Markdown 输出渲染质量不佳，表格与代码块混排错乱
- **#1189** `--continue` 精准续接逻辑不稳定，多轮对话后上下文错位
- **#1201** 希望支持 `.kimirules` 项目级指令文件，实现团队统一规范
- **#1277** 长会话下性能劣化，上下文窗口接近上限时每轮等待时间显著上升


## 重要 PR 进展

今日无新增 PR，也无 PR 在昨日更新。此前有意义但尚未合并的关键 PR 建议持续跟踪（来自前一日数据）：

- **#2564** – 修复 ACP 模式下快速切换对话上下文时的竞态条件问题
- **#2549** – 为 `kimi acp` 增加配置化空闲超时参数（与今日 #2598 挂死问题直接相关）
- **#2522** – 重构输出流管道，支持可插拔格式化器，为自定义渲染铺路


## 功能需求趋势

综合近 30 天开放 Issue 与社区讨论，社区关注方向集中于：

1. **会话与上下文管理**（#1283、#1277）：跨会话记忆、长会话性能、上下文续接逻辑
2. **ACP 与自动化集成稳定性**（#2598、#2564、#2549）：流式传输完整性、超时机制、并发竞态
3. **本地化与私有化部署**（#1047、#1120）：自定义 API Base URL、企业代理场景支持
4. **项目级配置与团队协同**（#1201）：`.kimirules` 项目指令文件需求持续推进

> 趋势判断：新功能需求热度降低，而稳定性、会话可靠性方面的用户呼声在 7-8 月逐渐占据主导。


## 开发者关注点

1. **稳定性优先于新功能**：零新增 PR、零新版本，但 #2598（流式挂死）和 #2597（生成失控）集中更新，显示用户在真实开发环境中遭遇可靠性瓶颈，当前解决优先级应为断连恢复、超时控制与输出长度异常防护。
2. **数据审计与可追溯性**：#2598 中“被顶替轮 partial 不落 wire”引发讨论，开发者对会话数据的完整记录有较高期待，可能催生本地日志审计相关增强需求。
3. **Memory System 呼声持续走高**：作为提升工具不可替代性的核心功能，跨会话记忆在评论中被反复提及，若官方明确 roadmap 将显著提振开发者信心。

---
*本日报由 AI 工具生成，数据来自 GitHub 公开仓库，仅供技术交流与参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-08-14** | 数据来源：github.com/anomalyco/opencode


## 今日速览

今日社区动态集中在三方面：其一，OpenCode Zen 免费额度触发 429 限流错误呈爆发趋势，多个 Issue 投诉"未使用却提示额度用尽"；其二，V2 版本暴露多项运行时缺陷（TODO 工具缺失、数据库不兼容、上下文压缩失败），引发早期采用者担忧；其三，核心维护者 kitlangton 提交了大规模性能优化 PR 系列（惰性加载、依赖清理），显示官方正在系统性改善启动速度与资源占用。安全方面，`webfetch` SSRF 漏洞与 `opencode upgrade` 无校验 curl|bash 安装方式被点名。


## 社区热点 Issues

### 1. 保留旧版布局选项 | #37012
[查看 Issue](https://github.com/anomalyco/opencode/issues/37012)
- **评论 37 | 👍 41** — 社区热度最高的议题
- **要点**：用户强烈要求保留旧版布局，指出新版需多层导航才能找到功能入口，而旧版从主窗口即可访问几乎所有选项。已持续一个月且热度不减。
- **价值**：反映核心用户群体对新 UI 的阻力，产品团队需重视布局回归或提供可配置方案。

### 2. "已复制到剪贴板"实际未复制 | #41470
[查看 Issue](https://github.com/anomalyco/opencode/issues/41470)
- **评论 15 | 👍 1**
- **要点**：VSCode Server（Docker 环境）下，界面提示复制成功但剪贴板实际为空。涉及 opencode 1.18.14 版本，影响远程开发场景。
- **价值**：远程开发是 CLI 工具高频使用场景，该缺陷直接影响日常工作效率。

### 3. Zen 免费额度误报 429 限流 | #42029（已关闭）
[查看 Issue](https://github.com/anomalyco/opencode/issues/42029)
- **评论 5**
- **要点**：用户明确表示当日未使用却收到 `FreeUsageLimitError`，引发对额度计费准确性的质疑。
- **价值**：同类问题还有 #42074、#42449、#42452，说明 Zen 免费层限流判定存在系统性缺陷。

### 4. GitHub Copilot provider 模型不可见 | #42083
[查看 Issue](https://github.com/anomalyco/opencode/issues/42083)
- **评论 5 | 👍 1**
- **要点**：Arch 包 1.18.15 版本下，`github-copilot` provider 认证成功但模型选择器不显示任何模型，`/models` 命令也返回 "Provider not found"。
- **价值**：Copilot 是最大的第三方模型源之一，该问题影响大量潜在用户。

### 5. 桌面版启动时 provider/MCP 加载失败 | #40516
[查看 Issue](https://github.com/anomalyco/opencode/issues/40516)
- **评论 4 | 👍 1**
- **要点**：组织内多名用户反馈，桌面应用约 80% 启动时无法加载 provider/model/MCP 配置。v1.18.4 正常，v1.18.5 至 v1.18.13 全部异常。
- **价值**：明确的版本回归缺陷，且影响面广（组织级多人），严重性高。

### 6. 启动阻塞：每次缓存过期都同步拉取 models.dev/api.json | #42376（已关闭）
[查看 Issue](https://github.com/anomalyco/opencode/issues/42376)
- **评论 2**
- **要点**：模型注册表缓存（~3.6MB）超过 5 分钟 TTL 后，启动时同步网络拉取，在弱网环境可阻塞 10-30 秒。
- **价值**：直接暴露启动性能缺陷，与今日多个性能优化 PR 形成呼应。

### 7. GLM-5.2 冷缓存重路由导致重复计费 | #35402
[查看 Issue](https://github.com/anomalyco/opencode/issues/35402)
- **评论 2 | 👍 8**
- **要点**：Zen 的多源路由无粘性策略，字节相同的连续请求可能落到冷缓存 provider，导致完整 prompt 重新计费且 prefill 变慢。
- **价值**：涉及 Zen 成本公平性，点赞数高说明用户对此高度敏感。

### 8. V2 运行时缺失 todowrite/todoread 工具 | #42421（已关闭）
[查看 Issue](https://github.com/anomalyco/opencode/issues/42421)
- **评论 3**
- **要点**：V2 版本中模型无法读写 TODO 列表，工具目录仅包含 read/write/shell/edit/patch/glob 等，TUI 中显示的 TODO 功能与模型脱节。
- **价值**：V2 功能降级信号，影响 Agent 自主任务管理能力。

### 9. opencode2 篡改共享数据库破坏 V1 共存 | #42260（已关闭）
[查看 Issue](https://github.com/anomalyco/opencode/issues/42260)
- **评论 2**
- **要点**：opencode2 迁移数据库 schema 后，V1 的 `/move` 命令失效，会话被困在 worktree 中，`session_context_epoch` 数据错乱。
- **价值**：V2 与 V1 共存的关键兼容性问题，阻碍用户平滑升级。

### 10. 安全：webfetch 可访问内网地址（SSRF）| #42435（已关闭）
[查看 Issue](https://github.com/anomalyco/opencode/issues/42435)
- **评论 2**
- **要点**：`webfetch` 工具可请求 loopback/内网地址，构成 SSRF 风险；修复 PR #40851 被关闭未合并。
- **价值**：安全漏洞，且修复被搁置，需社区持续跟进。


## 重要 PR 进展

### 1. fix(tui): 刷新终端尺寸后再响应 resize | #42474（新）
[查看 PR](https://github.com/anomalyco/opencode/pull/42474)
- 修复 OpenTUI 在 PTY 环境下 `SIGWINCH` 信号处理时读取到过时行列数的问题（关闭 #42225）。

### 2. docs: 修正 Gemini 3.7 与 3.6 排序 | #42473（新）
[查看 PR](https://github.com/anomalyco/opencode/pull/42473)
- 机器人自动提交，统一 Zen API 端点表中 Gemini 版本降序排列，并同步所有本地化文档。

### 3. fix(tui): 未读标记仅限前台终端操作 | #42471（已合并）
[查看 PR](https://github.com/anomalyco/opencode/pull/42471)
- 修复多 TUI 实例下后台实例错误清除未读状态的问题，确保只有前台 TUI 拥有会话未读标记的写入权。

### 4. chore(app): 清理过期前端依赖 | #42464（已合并）
[查看 PR](https://github.com/anomalyco/opencode/pull/42464)
- 移除 `@opencode-ai/app` 等三个包中确认无用的依赖声明（active-element、audio、scroll 等），重新生成 bun.lock。

### 5. refactor(core): 移除 Bus.replayAll 服务 | #42460（已合并）
[查看 PR](https://github.com/anomalyco/opencode/pull/42460)
- 删除无生产调用方的测试便利服务，测试改用受支持的 `Bus.replay` 顺序调用，净删 114 行代码。

### 6. refactor(util): npm 包解析器改为惰性加载 | #42467（已合并）
[查看 PR](https://github.com/anomalyco/opencode/pull/42467)
- `npm-package-arg` 仅在 `Npm.add` 执行时加载，避免 CLI 启动路径中不必要的包解析开销。

### 7. refactor(cli): semver 延迟加载 | #42470（新）
[查看 PR](https://github.com/anomalyco/opencode/pull/42470)
- 仅在更新检查获取到候选版本后才加载 semver，本地安装、禁用检查、网络故障等场景不再承担导入开销。

### 8. perf(core): MCP 客户端惰性加载 | #42468（新）
[查看 PR](https://github.com/anomalyco/opencode/pull/42468)
- 无启用 MCP 服务器的场景下，MCP SDK 完全移出启动评估路径；已配置的服务器仍保持预连接。

### 9. fix(tui): 本地 TUI 插件通过 SEA 安全运行时导入 | #42466（已合并）
[查看 PR](https://github.com/anomalyco/opencode/pull/42466)
- 修复 Node SEA 构建中本地 TUI 插件报 `ERR_UNKNOWN_BUILTIN_MODULE` 的问题，使 `plugins/tui/` 下的插件可正常加载。

### 10. refactor(util): 替换 xdg-basedir 依赖 | #42462（已合并）
[查看 PR](https://github.com/anomalyco/opencode/pull/42462)
- 用本地等价实现替换四个 `xdg-basedir` 调用，彻底移除该依赖（含 `workerd-spike` 声明），精简依赖树。


## 功能需求趋势

| 方向 | 代表 Issue/PR | 热度 |
|---|---|---|
| **性能优化（启动延迟/惰性加载）** | #42376、PR #42467/68/70、PR #42462 | 极高（官方密集投入） |
| **Zen 免费额度限流与计费修复** | #42029、#42074、#42449、#42452、#35402 | 高（多为 429 投诉） |
| **V2 功能补齐与 V1 共存** | #42421、#42260、#42448 | 高（V2 早期采用者痛点） |
| **安全加固** | #42434（升级校验）、#42435（SSRF）、#42437（上下文裁剪） | 中高（安全研究员集中上报） |
| **TUI 多实例/多标签状态隔离** | PR #42471、#42456、#42474 | 中（官方积极修复中） |
| **本地化支持扩展** | #42447（希伯来语） | 低（长尾需求） |
| **新布局回退选项** | #37012 | 高（社区呼吁强烈） |

**核心观察**：官方已启动一轮系统性的启动性能优化（预计与 #42376 的反馈直接相关），同时 V2 功能完备性正成为社区关注焦点，Zen 限流误报问题亟待服务端配合修复。


## 开发者关注点

- **V2 升级信心不足**：`todowrite`/`todoread` 工具缺失（#42421）、共享数据库 schema 迁移破坏 V1 共存（#42260）、压缩请求超出上下文窗口（#42448）——三个独立问题在同一天被报告，V2 早期采用者面临"功能倒退 + 数据风险"双重阻力。建议官方提供 V1→V2 的明确迁移路径与兼容性保障。

- **Zen 免费层限流判定存疑**：至少 4 个独立 Issue 指向"未使用即被限流"（#42029、#42074、#42449、#42452），涉及多模型、多 IP。核心疑问在于额度统计口径（按 IP？按账户？按模型？）以及冷却期算法。用户对"免费"的信任正在被消耗。

- **CLI 启动速度是硬伤**：#42376 揭示的 10-30 秒阻塞启动问题——虽然官方 PR 已针对依赖加载做惰性化处理，但 `models.dev/api.json` 的同步拉取策略本身需要重新设计（如异步加载 + Toast 提示）。

- **基础安装方式被质疑**：#42434 指出 `opencode upgrade` 使用无校验的 curl\|bash 模式，且 #42441 报告"opencode 自动删除自身"——安装与升级链路的可靠性直接影响开发者对工具的信任度。

- **桌面版稳定性回归**：#40516 确认 v1.18.5-v1.18.13 存在 80% 概率的启动加载失败，这类"某个版本区间整体不可用"的问题对组织级用户是致命的，建议加强版本发布前的自动化冒烟测试。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报

**日期：2026-08-14** | 数据来源：github.com/badlogic/pi-mono

---

## 今日速览

今日社区聚焦于**终端体验修复**与**上下文管理优化**两大方向：多个关于 SIGINT 终端恢复、模糊匹配和性能问题的 PR 与 Issue 形成闭环，同时社区对 auto-compaction 触发机制和会话恢复时历史回放导致的性能问题表达了高度关注（涉及大量 👍 与评论）。此外，新模型支持（如 Grok 4.6）和跨版本 catalog 漂移问题也引发了讨论。

---

## 社区热点 Issues（Top 10）

### 1. auto-compaction 在上下文超限后未被触发，直至 API 溢出
- **Issue #6879** | 评论: 19 | 👍: 17
- 作者在 gpt-5.6-sol 的 agentic 会话中，上下文使用率超过 100% 后 compaction 仍未触发，直到 API 在 373k tokens 处拒绝请求。社区反响强烈，普遍认为应在每次 agent 步骤后主动检查上下文水位，而非被动等待 provider 报错。
- [查看 Issue](https://github.com/earendil-works/pi/issues/6879)

### 2. Edit 模糊匹配无法处理空白长度差异
- **Issue #7836** | 评论: 10 | 👍: 1 | 状态: in-progress
- `normalizeForFuzzyMatch` 未折叠连续空白或去除行首空白，导致内容相同但空白不一致时匹配失败。该问题直接影响小型模型处理编辑任务的可靠性。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7836)

### 3. 大缓冲区下提示编辑器移动性能严重下降
- **Issue #8029** | 评论: 7 | 👍: 0 | 状态: in-progress
- 7000 行提示文本时，单次方向键操作耗时 1650ms，呈线性增长。已有 PR #8066 通过视觉行缓存解决。
- [查看 Issue](https://github.com/earendil-works/pi/issues/8029)

### 4. 全局 Undici dispatcher 继承 16 KiB maxHeaderSize 导致请求失败
- **Issue #7791** | 评论: 6 | 👍: 0 | 状态: CLOSED
- Pi 安装全局 dispatcher 时未设置 `maxHeaderSize`，导致合法的大型响应头被 Node 默认值拒绝（UND_ERR_HEADERS_OVERFLOW）。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7791)

### 5. 可信 Unix 用户无法共享 PI_CODING_AGENT_DIR
- **Issue #7779** | 评论: 5 | 👍: 0
- `auth.json` 与 `models-store.json` 以 0600 权限写入，首个创建者成为唯一读写者。多用户共享 agent 目录时，其他用户无法访问。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7779)

### 6. 无效 settings.json 被静默忽略，Windows 上产生误导性“bash not found”错误
- **Issue #7829** | 评论: 5 | 👍: 0 | 状态: in-progress
- 反斜杠未转义导致 JSON 解析失败，但 Pi 未提示配置错误，而是抛出无关的 shell 错误，排查成本高。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7829)

### 7. TUI 剪贴板复制显示成功但实际未写入
- **Issue #7761** | 评论: 3 | 👍: 0
- VTE 终端（GNOME Terminal）下 `copySelectionToClipboard()` 仅写入 OSC 52 序列，未调用系统剪贴板，`wl-paste` 验证为空。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7761)

### 8. 流式思考输出短暂闪现标题颜色后恢复
- **Issue #8060** | 评论: 3 | 👍: 0 | 状态: CLOSED
- 0.84.1 中思考块流式渲染时部分内容短暂变为粗体橙黄色（主题的 `mdHeading` 色），下个 chunk 到达后恢复。疑似样式状态未正确重置。
- [查看 Issue](https://github.com/earendil-works/pi/issues/8060)

### 9. Codex 后端需处理 `end_turn: false` 扩展字段
- **Issue #7689** | 评论: 3 | 👍: 2
- Codex 后端的 `response.completed` 事件可能携带 `end_turn: false`，Pi 需识别该语义以正确处理未完成的回复。
- [查看 Issue](https://github.com/earendil-works/pi/issues/7689)

### 10. 会话恢复时全部历史回放，输出量巨大
- **Issue #8079** | 评论: 1 | 👍: 0 | 状态: CLOSED
- 恢复 759 KB 会话（约 6300 行渲染）产生 844,716 字节输出，耗时约 18 秒，严重污染滚动缓冲区。已有 PR #8082 修复。
- [查看 Issue](https://github.com/earendil-works/pi/issues/8079)

---

## 重要 PR 进展（Top 10）

### 1. 修复恢复大会话时终端被历史回放淹没 + SIGINT 终端恢复
- **PR #8082** | 状态: CLOSED
- 两项终端卫生修复：仅渲染可见视口；SIGINT 时恢复终端原始状态（含标题）。针对 #8079 与 #8080。
- [查看 PR](https://github.com/earendil-works/pi/pull/8082)

### 2. Gemini 工具 schema 旧字段回退
- **PR #8086** | 状态: CLOSED
- 当端点拒绝 `parametersJsonSchema` 等新字段时，回退到 legacy Schema 格式，兼容旧版 generativelanguage 端点。
- [查看 PR](https://github.com/earendil-works/pi/pull/8086)

### 3. TUI：Escape 取消鼠标选中（不复制）
- **PR #8085** | 状态: OPEN
- 拖动选择中途按 Escape 可清除选区并跳过自动复制，符合常见文本编辑器交互习惯。
- [查看 PR](https://github.com/earendil-works/pi/pull/8085)

### 4. 修复布尔扩展标志吞掉后续 CLI 参数
- **PR #8084** | 状态: CLOSED
- 布尔标志（如 `--plan`）在扩展加载前类型未知，导致后续参数被误吞，`pi -p --plan "prompt"` 启动后无消息且直接退出。
- [查看 PR](https://github.com/earendil-works/pi/pull/8084)

### 5. 扩展标志默认值类型校验
- **PR #8070** | 状态: OPEN
- `registerFlag()` 允许 `type` 与 `default` 不一致（如 boolean + 字符串 "false"），导致 truthy 字符串。改为判别联合模型，提升类型安全。
- [查看 PR](https://github.com/earendil-works/pi/pull/8070)

### 6. grok-mermaid 升级至 0.2.3
- **PR #7984** | 状态: OPEN
- 解决 #7832，类名暂不渲染，流程图显示效果明显改善（附对比图）。
- [查看 PR](https://github.com/earendil-works/pi/pull/7984)

### 7. Amazon Bedrock Mantle OpenAI Responses 提供商
- **PR #6216** | 状态: OPEN
- 新增 Bedrock Mantle 提供商，基于 OpenAI 的 Bedrock Provider 实现，扩展 AWS 用户接入选项。
- [查看 PR](https://github.com/earendil-works/pi/pull/6216)

### 8. 用户可见消息使用 APP_NAME 变量
- **PR #8067** | 状态: CLOSED
- 替换硬编码的 "pi" 为 `APP_NAME`，让 rebrand 后的构建显示正确名称，输出不变。
- [查看 PR](https://github.com/earendil-works/pi/pull/8067)

### 9. TUI 视觉行缓存，优化大缓冲区性能
- **PR #8066** | 状态: OPEN
- 通过缓存视觉行计算结果（宽度/文本变化时失效），消除 #8029 中的重复计算开销。
- [查看 PR](https://github.com/earendil-works/pi/pull/8066)

### 10. 修复 todo 示例 validation 错误导致 TUI 崩溃
- **PR #8057** | 状态: OPEN
- `renderResult` 在 `details` 为空对象时跳过校验分支，`switch(details.action)` 无 default 返回 undefined，导致整个 TUI 崩溃。
- [查看 PR](https://github.com/earendil-works/pi/pull/8057)

---

## 功能需求趋势

1. **上下文管理智能化** — 社区强烈期望 auto-compaction 具备更主动的触发策略（如每步检查、水位预警），而非依赖 API 报错兜底（#6879）。
2. **终端健壮性与卫生** — SIGINT 恢复、剪贴板真实写入（OSC 52 → 系统剪贴板）、会话恢复时可控输出量，均为高频痛点（#8082 系、#7761、#8079）。
3. **新模型/新提供商接入** — Grok 4.6（#8046）、Amazon Bedrock Mantle（PR #6216）反映社区对模型目录及时更新的需求。
4. **Windows 一等公民支持** — 配置路径转义、Unix socket 测试失败（#8047）、信号处理差异，Windows 用户体验持续受到关注。
5. **扩展系统类型安全** — 标志默认值校验（#8070）、AbortSignal 传播（#8088）、工具 admission 钩子（#7092），表明扩展 API 正在走向更严谨的方向。

---

## 开发者关注点

- **Compaction 行为不可预测**：上下文超限后必须依赖 provider 报错，开发者希望 Pi 主动管理上下文水位，避免长时间 agentic 任务被迫中断。
- **大量文本编辑/输入的性能**：7000 行提示文本即出现秒级卡顿，视觉行缓存 PR 是社区期待已久的优化方向。
- **终端状态泄漏**：SIGINT、/exit 后终端残留 raw mode 或 kitty keyboard protocol，开发者被迫 `reset` 才能恢复，影响日常使用的信任感。
- **错误信息误导性**：无效配置文件被静默忽略，转而抛出无关的 "bash not found" 错误，增加了排查难度，社区希望配置校验失败时能给出明确诊断。
- **Provider 兼容性碎片化**：Gemini 字段拒绝、Codex `end_turn` 语义、Kimi cached_tokens 位置差异、DSH 版本间 catalog 漂移——多 provider 维护成本凸显，需要更统一的兼容层。

---

*日报由 AI 自动生成，数据截至 2026-08-14。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-14** | 数据来源：github.com/QwenLM/qwen-code

---

## 今日速览

今日发布两个夜间/预览版本（v0.21.11-nightly、v0.21.12-preview.1），主要修复 web-shell 会话保持问题并新增工作区文件上传能力。社区最热议题集中在多智能体舰队（multi-agent fleet）架构推进上（RFC #8718 及四个阶段子任务），同时 Windows CLI Ctrl+V 粘贴回归（#9061）和 Gemini 2.5 在 Vertex AI 上不可用（#9019）成为开发者反馈最集中的两个 P1/P2 级 Bug。

---

## 版本发布

### v0.21.11-nightly.20260814.45c2e73080
- **fix(web-shell)**: 保留独立会话目标（PR #9038）
- **feat(web-shell)**: 支持工作区文件上传（PR #9038）

### v0.21.12-preview.1
- 包含与上述 nightly 相同的两项变更

> 注：v0.21.11 正式版在今日数据窗口内完成了 SWE-bench Verified 验证（状态：**QUARANTINED**，500/500 完成，0 resolved），相关 E2E 验证在非生产环境 DSW EAS Harbor 中执行。

---

## 社区热点 Issues（Top 10）

### 1. [#8718 - RFC: Native coordination for independent Qwen sessions](https://github.com/QwenLM/qwen-code/issues/8718)
- **标签**: P2 / feature-request / roadmap: multi-agent
- **状态**: 已关闭 | 评论: 9 | 创建: 08-08
- **要点**: 多智能体舰队架构的纲领性 RFC，提出 leader 可调度多个独立 worker 会话并保持交互式，观察关联运行时与任务状态。已拆分为 stage 1A/1B/2/3 四个阶段落地（见 #8840/#8841/#8842/#8843）。
- **社区反应**: 这是当前最受关注的架构级议题，四个阶段任务均已被关闭或进入 blocked 状态，说明核心设计已定稿，正在按阶段实施。

### 2. [#8678 - fix(serve): Preserve the current session when a large restore times out](https://github.com/QwenLM/qwen-code/issues/8678)
- **标签**: P1 / bug / daemon
- **状态**: 开放 | 评论: 8 | 创建: 08-07
- **要点**: 大会话恢复超时导致当前会话丢失。PR1（#8691）已合入，实现超时契约、迟到请求安全与可观测性；但完整修复（包含 activeWork 跟踪）仍在推进中。
- **社区反应**: P1 级别 + daemon 核心路径，评论较多，开发者关注会话恢复的可靠性保障。

### 3. [#9061 - Ctrl+V paste completely unresponsive in CLI on Windows — regression since 0.21.x](https://github.com/QwenLM/qwen-code/issues/9061)
- **标签**: P1 / bug / Windows / keybindings
- **状态**: 开放 | 评论: 4 | 创建: 08-13
- **要点**: Windows 上 Ctrl+V 粘贴从 0.21.0 到 0.21.11 之间某版本开始完全失效，降级到 0.21.0 可恢复。
- **社区反应**: P1 回归问题，影响 Windows 用户日常操作，预计会快速修复。

### 4. [#9019 - Gemini 2.5 models are unusable on Vertex AI](https://github.com/QwenLM/qwen-code/issues/9019)
- **标签**: P2 / bug / content-generation
- **状态**: 开放 | 评论: 5 | 创建: 08-12
- **要点**: 通过 `vertex-ai` 认证的所有 Gemini 2.5 请求立即失败——`thinkingLevel` 始终被发送（包括 UNSPECIFIED 占位符），模型返回 400 错误。
- **社区反应**: 影响所有使用 Vertex AI + Gemini 2.5 的用户，属于阻断性问题。

### 5. [#9025 - Keyless Vertex AI is not inferred from the environment](https://github.com/QwenLM/qwen-code/issues/9025)
- **标签**: P2 / bug / google-auth / non-interactive
- **状态**: 开放 | 评论: 5 | 创建: 08-12
- **要点**: 纯环境变量配置的 keyless Vertex AI 无法被自动识别为 `vertex-ai` 认证类型，headless 运行在启动时即退出。
- **社区反应**: 与 #9019 同属 Vertex AI 生态问题，headless/CI 场景受影响。

### 6. [#7118 - Windows standalone installer fails when powershell.exe cannot resolve Get-FileHash](https://github.com/QwenLM/qwen-code/issues/7118)
- **标签**: P2 / bug / Windows / welcome-pr
- **状态**: 已关闭 | 评论: 7 | 👍: 3 | 创建: 07-17
- **要点**: Windows 独立安装器在 SHA-256 校验失败时无降级路径，导致安装中断。
- **社区反应**: 获得 3 个 👍，是最受社区认可的安装问题之一，已关闭说明已修复或有明确方案。

### 7. [#9108 - Desktop: remaining Web Shell external links can still fail to open silently; MCP OAuth cannot complete](https://github.com/QwenLM/qwen-code/issues/9108)
- **标签**: P2 / bug / web-shell / MCP
- **状态**: 开放 | 评论: 3 | 创建: 08-13
- **要点**: #9069 修复了 Markdown 消息中的外部链接后，仍有四个链接面（含 MCP OAuth 回调）依赖不可靠的隐式新窗口路径。
- **社区反应**: 桌面端 Web Shell 的链接打开问题尚未完全收敛。

### 8. [#9083 - record_artifact succeeds without verifying workspacePath](https://github.com/QwenLM/qwen-code/issues/9083)
- **标签**: P2 / bug / file-operations / web-shell
- **状态**: 开放 | 评论: 3 | 创建: 08-13
- **要点**: `record_artifact` 可返回成功但产物实际不可打开（workspacePath 未验证），`store status` 使用会话 cwd 而 `GET /file` 使用工作区根目录，两者不一致。
- **社区反应**: 文件操作一致性问题，影响产物的可访问性。

### 9. [#9088 - read_file sends non-image file to model API based only on .png extension](https://github.com/QwenLM/qwen-code/issues/9088)
- **标签**: P2 / bug / file-operations
- **状态**: 开放 | 评论: 3 | 创建: 08-13
- **要点**: 仅凭 `.png` 扩展名即将文件发送给模型 API，若实际字节非 PNG（如 JSON），则 400 错误直接中断 turn。
- **社区反应**: 文件类型检测过于依赖扩展名，应校验文件魔数。

### 10. [#8586 - Track activeWork and background Agent recovery](https://github.com/QwenLM/qwen-code/issues/8586)
- **标签**: P2 / feature-request / daemon / background-automation
- **状态**: 开放 | 评论: 4 | 创建: 08-05
- **要点**: 为 daemon 深层健康状态添加显式 `activeWork` 事实，建立后台 Agent 恢复路径（覆盖存活检测、ACP 会话上报、恢复等五层）。
- **社区反应**: daemon 后台自动化方向的长期能力建设，与 #8678 相关。

---

## 重要 PR 进展（Top 10）

### 1. [#9104 - feat(autofix): escalate a non-converging diff to a maintainer handoff](https://github.com/QwenLM/qwen-code/pull/9104)
- **作者**: wenshao | 更新: 08-14
- **要点**: autofix 循环中，若 diff 跨轮次持续增长超预算，则升级为 maintainer 决策而非无限补丁。`feedback.md` 现在向 agent 提供增长轨迹。

### 2. [#9039 - feat(core): Add privacy-safe tool-result boundary diagnostics](https://github.com/QwenLM/qwen-code/pull/9039)
- **作者**: doudouOUC | 更新: 08-14 | 标签: review/self-reported
- **要点**: 为工具结果边界添加隐私安全的诊断能力，用于排查工具输出被截断或丢失的问题。

### 3. [#9086 - fix(review): harden the pipeline against four live-run failures](https://github.com/QwenLM/qwen-code/pull/9086)
- **作者**: wenshao | 更新: 08-14
- **要点**: 针对三个真实 PR（#9013/#9014/#9045）实测发现的 `/review` 管线四个缺陷逐一修复，并各配回归测试。系实测驱动而非假设。

### 4. [#9111 - fix(desktop): open remaining external links through the shell opener](https://github.com/QwenLM/qwen-code/pull/9111)
- **作者**: yiliang114 | 更新: 08-14 | 标签: review/self-reported
- **要点**: 扩展 #9069 的修复，将 Web Shell 中其余四个外部链接面（含 MCP OAuth）统一切换到 Tauri opener。

### 5. [#8677 - feat(tui): OpenTUI renderer backend (react track) — flicker-free, first-class mouse](https://github.com/QwenLM/qwen-code/pull/8677)
- **作者**: chiga0 | 更新: 08-14
- **要点**: OpenTUI 渲染后端（react 轨道）单 PR 交付——无闪烁、原生鼠标支持。这是新的 qwen-code TUI 基础架构，影响面大。

### 6. [#8978 - feat(serve): no-op on empty channel set and restore only active channels](https://github.com/QwenLM/qwen-code/pull/8978)
- **作者**: rockybot2026 | 更新: 08-14 | 标签: review/self-reported
- **要点**: `qwen serve --channel all` 在无有效 channel 时不再 `exit(1)` 拖垮整个 daemon，改为优雅 no-op。

### 7. [#8682 - feat(serve): add pollable turn-status endpoints for daemon sessions](https://github.com/QwenLM/qwen-code/pull/8682)
- **作者**: BenGuanRan | 更新: 08-14 | 标签: review/self-reported
- **要点**: 为 daemon HTTP API 新增轮询式 turn 生命周期端点：`GET /session/:sessionId/turns/:promptId` 和 `GET /session/:sessionId/turns/current`。

### 8. [#9057 - fix(daemon): reduce subagent live replay journal](https://github.com/QwenLM/qwen-code/pull/9057)
- **作者**: ytahdn | 更新: 08-14 | 标签: autofix/takeover
- **要点**: 为只渲染主对话摘要的客户端添加紧凑的 live-turn 回放投影，WebUI 加载与重连时选择摘要日志而非完整日志。

### 9. [#8716 - fix(memory): improve recall reliability and candidate coverage](https://github.com/QwenLM/qwen-code/pull/8716)
- **作者**: yiliang114 | 更新: 08-14
- **要点**: 记忆召回可靠性双路径修复：选定记忆确保送达模型（100ms 预算内即时投递），并修复非 ASCII 场景下的候选覆盖问题。

### 10. [#9098 - feat(cli): enable dynamic workflows from a settings key](https://github.com/QwenLM/qwen-code/pull/9098)
- **作者**: qqqys | 更新: 08-14
- **要点**: 新增 `tools.workflowsEnabled` 设置项，正式启用动态工作流功能（此前仅可通过未文档化的环境变量开启）。

---

## 功能需求趋势

从过去 24 小时活跃的 Issues 中可提炼出以下社区最关注的功能方向：

### 1. 多智能体舰队（Multi-Agent Fleet）— 最高优先级架构方向
- 围绕 RFC #8718 展开的四个阶段任务（#8840/#8841/#8842/#8843）全部进入关闭/阻塞状态，标志设计已冻结、进入实施阶段
- 核心能力：leader 调度独立 worker、只读 teammate、/coordinate 命令、fleet 持久化与恢复

### 2. Daemon 会话管理可靠性
- 大会话恢复超时保护（#8678）
- activeWork 跟踪与后台 Agent 恢复（#8586）
- 空 channel 集优雅降级（PR #8978）
- turn 状态轮询端点（PR #8682/#9080）

### 3. Agent Plugins v1（v0.21.11 正式版亮点）
- 扩展 agent 能力的官方插件机制已随 v0.21.11 发布

### 4. Web Shell 体验完善
- 工作区文件上传（今日 nightly 已发布）
- 外部链接可靠打开（PR #9111 持续推进）
- 产物路径一致性验证（#9083）

### 5. 认证与云服务兼容性
- Vertex AI 生态问题集中爆发（#9019 的 thinkingLevel、#9025 的 keyless 推断），反映出 Google Cloud 用户群体的活跃反馈

---

## 开发者关注点

### 高频痛点

1. **Windows 平台回归问题**：Ctrl+V 粘贴失效（#9061，P1）、安装器 Get-FileHash 失败（#7118）、Desktop 打开额外 Terminal（#9043）——Windows 用户体验问题在多个版本间反复出现。

2. **Vertex AI / Gemini 2.5 阻断性不可用**：thinkingLevel 参数无条件发送导致所有请求 400（#9019），keyless 认证无法从环境推断（#9025）。使用 Google Cloud 的开发者完全无法工作。

3. **文件类型检测仅依赖扩展名**：#9088 中非 PNG 内容被当图片发送给模型 API，导致 400 中断整个 turn——应校验文件魔数而非扩展名。

4. **产物路径不一致**：#9083 中 `record_artifact` 成功但产物不可打开，session cwd 与 workspace root 混用导致状态错乱。

5. **Python SDK 与 CLI 行为不一致**：#9002 中 SDK 拒绝 `permission_mode="auto"` 而 CLI 支持，客户端校验先行拦截。

### 社区趋势

- **autofix 机制持续进化**：多个 PR（#9104/#9086/#8960）聚焦 autofix 循环的自我改进——增长发散升级、管线加固、stopped PR 升级等，社区正在让自动化审查更可靠。
- **安全性重视提升**：PR #9008 为 release workflow 添加 CODEOWNERS、最小权限 token、Scorecard 安全扫描，供应链安全成为显性议题。
- **记忆与多模态实验持续推进**：Omni 实验的多个阶段（S4a-S6）在持续演进，涉及 policy 链路、GC、容量预算等治理能力。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-14

> 数据来源：github.com/Hmbown/CodeWhale（原 DeepSeek-TUI）

## 1. 今日速览

v0.9.7 正式确认 **Codewhale** 为产品新名，npm 包同步迁移；社区围绕 v0.9.8 的开发方向明显提速——DwarfStar（DS4）本地推理路由的一等公民支持、Auto-Review 双层模型护栏、Agent 工具 schema 瘦身等关键 PR 已进入实质开发阶段。与此同时，用户报告的两大高频痛点——Windows 下多行输入与配置路径碎片化——在今日 Issue 中得到集中反馈，均已进入维护者视野。

## 2. 版本发布

### v0.9.7（Codewhale）
- **品牌更名**：`codewhale` 为 Shannon Labs 正式产品名，npm 包与安装资产同步更名；旧包 `deepseek-tui` 进入弃用状态，不再获得更新
- **iOS 端**：iOS 客户端已适配 DwarfStar 自定义端点；`shared/` 目录下新增 `LLMService` 类型，用于 DwarfStar 流式响应与工具调用
- **引擎层**：规划器（planner）现在追踪 `tool_call_id` 字符串——修复了同一会话中多 Agent 名称相同导致规划器-执行器状态失配的罕见问题；为 `main.md` 用户日志文件添加每会话元数据（创建时间、git 哈希、模型名称、配置路径）

## 3. 社区热点 Issues

### #998 文案展示不全（评论 11 · 👍 1）· [链接](https://github.com/Hmbown/CodeWhale/issues/998)
中文 UI 中部分文本被截断，用户希望悬停时能显示完整提示。持续三个月未解决，反映 UI 细节打磨的优先级有待提升。

### #1004 新增 /dryrun 命令提案（评论 9）· [链接](https://github.com/Hmbown/CodeWhale/issues/1004)
开发者请求在发送前预览完整的聊天补全请求（含 system prompt、缓存文件、工具定义等）。对 DeepSeek V4 Pro 长上下文用户有实际成本——能显著减少因请求构造错误导致的 token 浪费。社区讨论热烈，但尚无维护者明确回复。

### #5324 Agent 工具 32 字段 schema 简化（评论 7）· [链接](https://github.com/Hmbown/CodeWhale/issues/5324)
维护者 Hmbown 亲自提交：`agent` 工具携带 32 个属性的 JSON schema、8 种 action、外加别名表，导致模型频繁报错。已进入实际修复流程（见 PR #5369）。

### #2369 配置路径跨平台碎片化 + 静默迁移 Bug（评论 7）· [链接](https://github.com/Hmbown/CodeWhale/issues/2369)
Windows/Cygwin 下配置文件路径解析不一致，旧版迁移可能出现静默失败。对跨平台用户（尤其 Win 开发者）影响直接，已标记 migration/reliability。

### #894 执行中图片展示混乱（评论 6）· [链接](https://github.com/Hmbown/CodeWhale/issues/894)
渲染层 bug，图片在 TUI 输出中错乱，影响 Agent 工作流中图像类任务的可读性。

### #1425 大文本处理会话卡死（评论 6）· [链接](https://github.com/Hmbown/CodeWhale/issues/1425)
用户用 300 万字小说测试多 Agent 并行处理，10 个子 Agent 全部 Running 但 `agent_wait` 超时导致会话中断。暴露多 Agent 编排在长时间任务下的稳定性短板，含完整复现路径，价值高。

### #1482 nVidia NIM 接入失败（评论 6）· [链接](https://github.com/Hmbown/CodeWhale/issues/1482)
调用 API 时返回 "404 page not found"。NIM 是社区重要的本地推理路径，该问题阻塞部分自托管用户。

### #1732 合并分析报告保存缓慢（评论 6）· [链接](https://github.com/Hmbown/CodeWhale/issues/1732)
缓存命中率极低导致保存本地文档时耗时巨大。涉及长文档场景下的核心性能问题。

### #5340 doctor 升级后永久 stuck（评论 2）· [链接](https://github.com/Hmbown/CodeWhale/issues/5340)
v0.9.4 → v0.9.6 升级后 `first-run` 与 `update checkpoint` 永久显示 `needs action`，即使重新走完引导也无法消除。升级路径的回归 bug，影响面可能较大。

### #5374 Agent 输出文本错乱（评论 3）· [链接](https://github.com/Hmbown/CodeWhale/issues/5374)
macOS 上 Agent 书写时文本全面损坏（截图可见乱码），今日创建的高优先级显示 bug。

## 4. 重要 PR 进展

### #5353 feat(tui): Auto-Review 双层模型护栏（v0.9.8）· [链接](https://github.com/Hmbown/CodeWhale/pull/5353)
Auto-Review 升级为双层结构：确定性底限不可绕过，fallback 时升级为一次性模型守护，采用 Codex/Kimi 语义 + Codewhale fail-closed 默认值。提升安全性与降级体验。

### #5365 feat(provider): DS4 本地推理一等公民支持 · [链接](https://github.com/Hmbown/CodeWhale/pull/5365)
新增 `/setup provider ds4` 路径，一键预填 keyless loopback 预设（OpenAI 兼容协议），直接对接 DeepSeek V4 Flash/Pro 本地服务。对应 Issue #5363，降低本地部署门槛。

### #5369 fix(tools): Moonshot schema 降级而非拒绝条件字段 · [链接](https://github.com/Hmbown/CodeWhale/pull/5369)
修复 #5324 的前置 PR：对 Moonshot 模型不支持的 JSON Schema 条件字段，采取降级策略而非整体拒绝，改善模型兼容性。

### #5368 fix(tui): 隔离未受保护测试的状态根目录 · [链接](https://github.com/Hmbown/CodeWhale/pull/5368)
修复 #5359 中四个测试在真实机器状态下的确定性失败——锁定 `settings_path_candidates()` 与 `TuiPrefs::path()` 的信任漏洞，将测试隔离到独立状态根。CI 与本地行为一致性。

### #5339 fix(engine): 抑制子 shell 自动补全 · [链接](https://github.com/Hmbown/CodeWhale/pull/5339)
过滤子 Agent 后台 shell 的补全事件，避免污染父模型流，保留父级补全与任务状态可见性。多 Agent 嵌套场景的显示修正。

### #5358 feat(engine): Auto-Review 拒绝理由 + 循环熔断 · [链接](https://github.com/Hmbown/CodeWhale/pull/5358)
解决 #5352 的 P0：拒绝时携带明确理由而非裸 `permission_denied`，防止模型重复尝试同一被拒操作直到预算耗尽。体验与成本双优化。

### #5333 feat(tui): 终端窗口置顶迷你化（PiP）· [链接](https://github.com/Hmbown/CodeWhale/pull/5333)
维护者采收社区 PR #5318（SparkofSpike）：右键菜单或 `/pin` 命令将宿主终端缩为 640x400 并置顶，再次触发恢复。Windows 多任务场景的实用增强。

### #5364 feat(tui): Markdown 引用块渲染 · [链接](https://github.com/Hmbown/CodeWhale/pull/5364)
将 `>` 引用块渲染为带侧边栏的引用样式，支持嵌套、行内格式、自动换行与选区复制。提升长文档对话的可读性。

### #5338 feat(web): 文档指南页接入字典框架 · [链接](https://github.com/Hmbown/CodeWhale/pull/5338)
移除 `app/[locale]/docs/guide/page.tsx` 中的 `isZh` 三目运算，引入按页面字典模式（`DocsGuideDict`，9 个 key，en/zh 双语）。为整个 i18n 系列铺路。

### #5336 fix(mcp): 无后续页时省略 nextCursor · [链接](https://github.com/Hmbown/CodeWhale/pull/5336)
修复 #5335：MCP 响应中 `nextCursor: null` 违反规范，导致 Claude Code 等严格客户端报错（`expected string, received null`）。协议合规性修复。

## 5. 功能需求趋势

- **本地推理与多提供商支持**：DS4/DwarfStar 本地路由成为明确优先级（#5363、PR #5365），NIM 接入问题（#1482）、FreeBSD 支持（#1097）、Moonshot schema 兼容（PR #5369）均指向同一方向——模型提供商无关的架构演进
- **多 Agent 编排稳定性**：#1425（10 子 Agent 卡死）、#5339（子 shell 补全污染）显示多 Agent 并行场景已进入社区实际使用阶段，编排层的稳定性与可见性成为刚需
- **输入体验优化**：#5345（多行输入/自定义发送快捷键）、#998（文案截断）反映出中文用户对编辑器体验的精细化要求
- **配置与迁移一致性**：#2369（路径碎片化）、#5340（升级后 doctor 卡死）——用户对跨平台配置可靠性的信任度直接影响采用率
- **TUI 渲染质量**：#894（图片错乱）、#5374（文本乱码）、PR #5364（引用块渲染）、#1675（中文乱码）——渲染层问题多点开花，是当前质量短板

## 6. 开发者关注点

- **Windows 体验反复被提及**：配置路径、SSH 出站阻断（#1829）、默认终端选择（#1854）、多行输入（#5345）——Windows 是目前反馈最集中的平台，也是社区贡献 PR 的高发区（#5318/#5333）
- **长文本/大文件场景性能**：#1732（合并报告保存慢）、#1425（300 万字小说处理）——深度使用场景下缓存策略与并发模型均需要优化
- **预算与成本控制**：#1004（/dryrun 请求预览）、#855（自动切换 profile 应对限流）、#5358（循环熔断）——token 成本与速率限制已成为重度用户的共同痛点
- **升级回归风险**：#5340 提醒我们 v0.9.x 快速迭代期升级路径的回归测试需要加强；#5354 CI budget 刷新本身也是一次"基建欠账"的修正
- **前端 UI 细节**：i18n 覆盖扩大（#790）、多行编辑、引用块渲染——产品正从"能用"走向"好用"阶段，社区对细节的容忍度在降低

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*