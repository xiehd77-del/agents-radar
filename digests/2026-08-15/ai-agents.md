# OpenClaw 生态日报 2026-08-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-15 01:18 UTC

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

# OpenClaw 项目动态日报 — 2026-08-15

## 今日速览

过去24小时项目活跃度极高：共产生500条Issue更新（新开/活跃485条，关闭15条）和500条PR更新（待合并405条，合并/关闭95条），社区讨论热度集中在多个长期未解的P0/P1级Bug上。今日无新版本发布，但项目维护流水线保持高速运转，值得关注的是多个高优Bug（如#121058静默回复失败、#91588内存泄漏）已连续多日无有效修复PR推进，维护响应速度存在瓶颈。另一方面，今日有数个新提交的PR（如#123901、#123911）直指性能与稳定性优化，说明维护者正在积极处理技术债。

---

## 版本发布

**今日无新版本发布。**

上一版本为2026.7.2-beta系列，当前stable channel仍为2026.7.1-2（commit 0790d9f），dev channel存在`workspace:*`协议导致的更新失败问题（见#123073）。

---

## 项目进展

今日合并/关闭的95条PR中，值得关注的进展包括：

- **PR #116489 [CLOSED]** — `feat(security): require acknowledgement for install policy warnings`：为`security.installPolicy`命令增加了`warn`返回模式，安装可疑插件/技能时需操作者明确确认，加强了供应链安全防线。该PR涉及CLI、macOS、Gateway等多个模块，属大型安全加固。

- 另有94条PR合并/关闭，但公开数据中未展示明细，暂无法逐一核实。

**整体判断：** 今日合入的PR偏向安全加固与存量修复，项目在稳定性投入上有所加码，但未见重大新功能落地。

---

## 社区热点

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|-------|----------|--------|----------|
| 1 | [#121058 Silent reply failures still recurring after #116277 closed](https://github.com/openclaw/openclaw/issues/121058) | 94 | 声称已关闭的#116277并未真正解决问题，静默回复失败仍在持续，用户对"关闭但未修复"的流程表示不满 |
| 2 | [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 51 | 要求按来源（用户命令、网页抓取、第三方技能）标记记忆条目的信任等级，防止记忆投毒攻击——安全类需求，已挂P2 |
| 3 | [#42475 Per-agent cost budget enforcement](https://github.com/openclaw/openclaw/issues/42475) | 25 | 在网关层为每个agent设置费用上限，防止失控支出——运维成本控制刚需 |
| 4 | [#91588 Gateway Memory Leak (RSS 350MB→15.5GB)](https://github.com/openclaw/openclaw/issues/91588) | 24 | P0级严重内存泄漏，导致OOM反复崩溃，2-3天内RSS增长40+倍 |

**分析：** 社区讨论热度最高的议题集中在两类——①"声称修复但实际未修复"的信任危机（#121058），②资源治理诉求（成本预算、内存泄漏）。前者反映了用户对issue关闭流程质量的不满，后者指向OpenClaw在长跑稳定性上仍有明显短板。

---

## Bug 与稳定性

按严重程度排列：

### P0 严重
| Issue | 描述 | 状态 |
|-------|------|------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway内存泄漏，RSS从350MB涨至15.5GB，OOM反复崩溃 | 24评论，无fix PR |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs领先于release版本，文档中的配置项在2026.3.13不存在 | 无fix PR，维护者已标记 |
| [#119270](https://github.com/openclaw/openclaw/issues/119270) | file工具会剥离目标路径开头的`@`，导致写入/删除错误文件——数据安全风险 | 无fix PR |

### P1 重点关注
| Issue | 描述 | 是否已有fix PR |
|-------|------|---------------|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook产生CPU密集的openclaw-hooks进程，阻塞Gateway RPC | ❌ |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent在DeepSeek上被`[cron:]`前缀降优先级，导致长时间停顿 | ❌ |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer模式无法在主会话中注入消息 | ❌ |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent会话结束后主会话无响应 | ❌ |
| [#120563](https://github.com/openclaw/openclaw/issues/120563) | 自定义/Ollama provider不发送对话历史，每轮固定上下文 | ❌ |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | 前台回复围栏导致早期回复不投递WhatsApp | ❌ |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel更新失败，updater使用npm但repo要求pnpm | ❌ |
| [#123557](https://github.com/openclaw/openclaw/issues/123557) | ACP session/new的cwd不传播到Gateway chat.send | ❌ |

### 值得注意的修复PR
- **PR #123901** (`fix(workers): bound Gateway bundle cache growth`) — 修复worker bundle缓存无限增长问题，与#91588内存泄漏可能相关。
- **PR #123911** (`perf(ui): restore startup bundle headroom`) — 修复CI中启动bundle超出预算的问题。
- **PR #122141 / #122142** — 两个团队分别提交了修复subagent大小写冲突的PR，属于同类问题。

---

## 功能请求与路线图信号

| 功能 | Issue | 优先级 | 是否有对应PR |
|------|-------|--------|-------------|
| 记忆信任标记（防投毒） | [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2 | ❌ |
| Gateway级per-agent费用预算 | [#42475](https://github.com/openclaw/openclaw/issues/42475) | P2 | ❌ |
| Agent自主触发上下文压缩 | [#6757](https://github.com/openclaw/openclaw/issues/6757) | P2 | ❌ |
| Context来源/易变性元数据（RFC） | [#54373](https://github.com/openclaw/openclaw/issues/54373) | P3 | ❌ |
| 任务流生命周期hook事件 | [#87362](https://github.com/openclaw/openclaw/issues/87362) | P2 | ❌ |
| 动态模型发现（OpenRouter） | [#10687](https://github.com/openclaw/openclaw/issues/10687) | P2 | ❌ |
| per-pattern会话保留规则 | [#50900](https://github.com/openclaw/openclaw/issues/50900) | P2 | ❌ |
| Control UI上传大小可配置 | [#71142](https://github.com/openclaw/openclaw/issues/71142) | P2 | ❌ |
| 本地embedding maxThreads配置 | [#54128](https://github.com/openclaw/openclaw/issues/54128) | P3 | ❌ |

**与PR对比：** 今日提交的PR中有 #113548 (`feat(agents): add warn-only usage budgets`) 直接对应#42475的费用预算需求，该PR已进入"needs proof"阶段，说明此功能可能进入下一版本。其余功能请求均无对应PR，管线仍以修复存量问题为主。

---

## 用户反馈摘要

从今日活跃的Issue评论中提炼的真实用户反馈：

**正面反馈：**
- 无显著正面反馈出现在高评论量Issue中。

**负面/痛点反馈：**

1. **"关闭≠修复"的信任危机（#121058）** — 用户sloptop-the-terrible指出#116277被关闭后问题仍在持续，监控cron持续记录新失败。这是典型的"修复验证不充分"案例，用户对维护流程持怀疑态度。

2. **长跑稳定性焦虑（#91588、#87109）** — 多个用户报告Gateway内存持续增长导致OOM、cron静默失败。生产用户Tanklive明确表示"重启后12h+再次增长到1073MB+，可稳定复现"，说明该问题高度可复现却迟迟未修。

3. **消息静默丢失（#86012、#51049、#50093）** — LINE、WhatsApp等多通道均存在消息静默丢失场景，用户无法感知失败，只能被动发现。

4. **多账号/多workspace配置的坑（#82020、#56693、#121495）** — 自定义provider与内置provider共享baseUrl时出现回归；Slack命名账号会破坏默认账号的SecretRef解析。配置系统的边界情况仍然脆弱。

5. **Alpha/生产风险（#123799）** — FlaviaDyckerhoff以生产部署身份求助："需要安全升级/回滚指南"，指向Codex compact 404问题，说明部分用户已在生产环境依赖OpenClaw。

---

## 待处理积压

以下Issue长期未获有效响应（均为2个月以上未修复的高优问题）：

| Issue | 创建时间 | 优先级 | 最后更新时间 | 备注 |
|-------|---------|--------|-------------|------|
| [#7707 Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | P2 | 2026-08-15 | 6个月+，仅讨论无PR |
| [#6757 Agent自触发压缩](https://github.com/openclaw/openclaw/issues/6757) | 2026-02-02 | P2 | 2026-08-14 | 6个月+，agent本人提交的需求 |
| [#47975 Subagent会话后主会话无响应](https://github.com/openclaw/openclaw/issues/47975) | 2026-03-16 | **P1** | 2026-08-15 | 5个月+，核心会话稳定性问题 |
| [#48003 Steer模式无法注入](https://github.com/openclaw/openclaw/issues/48003) | 2026-03-16 | **P1** | 2026-08-15 | 5个月+，已有根因分析（commit 9889c6da5） |
| [#91588 Gateway内存泄漏](https://github.com/openclaw/openclaw/issues/91588) | 2026-06-09 | **P0** | 2026-08-14 | 2个月+，严重性极高但无修复PR |
| [#91009 Codex hook CPU问题](https://github.com/openclaw/openclaw/issues/91009) | 2026-06-06 | **P1** | 2026-08-15 | 2个月+，有复现步骤 |

**维护者警示：** 上述P0/P1级Issue长期未修复，是项目健康度的重大隐患。特别是#91588（内存泄漏）和#47975（会话卡死），直接关系到核心体验，建议优先调配资源。

---

*报告生成时间：2026-08-15 | 数据来源：github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期**：2026-08-15  
**数据窗口**：过去 24 小时（2026-08-14 至 2026-08-15）


## 1. 生态全景

当前个人 AI 助手开源生态正处于**由对话式工具向生产级基础设施跃迁的关键阶段**。主流项目（OpenClaw、Hermes Agent、ZeroClaw）已出现明显的**稳定性瓶颈**——会话静默失败、内存泄漏、Windows 平台兼容性等长期 P0/P1 问题持续消耗社区信任。与此同时，**供应链安全、成本治理、多租户隔离**成为头部项目共同发力的方向（OpenClaw 的安装策略确认、Hermes 的多租户架构讨论、ZeroClaw 的高风险命令防护、NanoClaw 的镜像签名验证闭环）。值得注意的是，**社区贡献者正在深度参与架构级决策**——从 Discord 原生支持（Hermes、IronClaw）、MCP 工具链兼容（CoPaw、PicoClaw）到网关级费用预算（OpenClaw、ZeroClaw），反映出用户不再满足于"能聊天"，而是要求**可靠、可控、可审计**的自动化执行能力。


## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | Issues（关闭） | PR（待合并） | PR（合并/关闭） | 新版本 | 健康度评级 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 485 | 15 | 405 | 95 | ❌ | 🟡 中 — 高活跃但 P0 积压严重，维护响应瓶颈 |
| **Hermes Agent** | 47 | 3 | 26 | 24 | ❌ | 🟢 良好 — P0 当日修复率高，批量产出新功能 |
| **ZeroClaw** | 30 | 3 | 47 | 3 | ❌ | 🟢 良好 — 稳定化周期，PR 产出旺盛但审阅积压 |
| **IronClaw** | 16 | 9 | 23 | 23 | ❌ | 🟢 良好 — 结构化管理，v1.3.0 项目制推进 |
| **LobsterAI** | 2 | — | ~5 | 22 | ✅ 2026.8.14 | 🟢 良好 — 合并效率高，但社区 PR 积压 4.5 个月 |
| **CoPaw** | 13 | 37 | 26 | 15 | ❌ | 🟡 中 — 活跃但合并瓶颈（37% 合并率） |
| **NanoBot** | 1 | 2 | 14 | 8 | ❌ | 🟢 良好 — 响应快，WebUI 方向集中推进 |
| **PicoClaw** | ~3 | ~4 | 4 | 5 | ❌ | 🟢 良好 — 小步快跑，严重 Bug 当日出修复 PR |
| **NanoClaw** | 2 | 0 | 8 | 3 | ❌ | 🟢 良好 — 关注供应链安全验证，贡献者 PR 质量高 |
| **Moltis** | 0 | 0 | 2 | 0 | ❌ | 🟢 良好 — 功能推进期，等待大规模 PR 审阅 |
| **NullClaw** | 0 | 0 | 0 | 1 | ❌ | 🟢 良好 — 低活跃但无阻塞 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | 0 | ❌ | ⚪ 静默 — 无活动 |


## 3. OpenClaw 在生态中的定位

**生态参照系中的"标准定义者"角色。** 作为 GitHub 上活跃度最高的项目（单日 500+ Issue 更新、405 条待合并 PR），OpenClaw 在社区规模上远超所有同类（Hermes 约为其 1/10），其 issue 编号已突破 12 万——这既是影响力的证明，也是技术债的显性化。

| 维度 | OpenClaw | 对比参照 |
|---|---|---|
| **技术路线** | 全功能一体化（Gateway + CLI + 多渠道 + 技能系统 + 记忆） | Hermes Agent 走模块化多执行面路线；ZeroClaw 强调插件化与 RFC 驱动；IronClaw 以 epic 项目管理见长 |
| **社区规模** | 超大（单日 500 Issue/500 PR） | Hermes（50/50）、ZeroClaw（33/50）、CoPaw（50/41）为第二梯队 |
| **核心矛盾** | **维护响应 < 社区诉求**：500 活跃 Issue 中大量 P0/P1 长期无 fix PR（#91588 内存泄漏 2 个月+无修复），"关闭≠修复"信任危机已浮现 | Hermes 当日修复 3 个 P0；NanoBot 高优 Bug 当日合并修复；PicoClaw 严重 Bug 次日即出修复 PR |
| **优势** | 功能覆盖最全、社区贡献生态最活跃、安全加固意识强（install policy warn 模式） | 无同类可及 |
| **风险** | 用户"用脚投票"的临界点——#121058 的 94 条评论显示高粘性用户耐心正在被消耗 | — |

**结论**：OpenClaw 是生态的**功能定义者和规模标杆**，但其维护瓶颈正在创造"替代窗口"——Hermes（多执行面）、ZeroClaw（插件化 + RFC 驱动）正是差异化竞争的代表。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **记忆安全 / 防投毒** | OpenClaw（#7707 Memory Trust Tagging）、Hermes agent 记忆操作多租户隔离（#34352） | 记忆条目需按来源标记信任等级，防止恶意注入 |
| **成本治理** | OpenClaw（#42475 per-agent 费用预算）、IronClaw（#7646 自动化预算授权）、ZeroClaw（#9996 原子化 action budget） | 网关级/自动化级费用上限与原子化记账，防止失控支出 |
| **跨渠道一致性** | PicoClaw（Telegram 会话管理缺失 #3307）、CoPaw（多 UI 会话身份串扰 #7011）、OpenClaw（WhatsApp/LINE 消息静默丢失） | 不同渠道/UI 间的功能一致性与会话状态同步 |
| **Windows 平台支持** | Hermes（CRLF 内存破坏 P0、桌面重启网关不拉起 P1）、ZeroClaw（74 个测试失败 #7462）、NanoClaw（POSIX 引号兼容）、CoPaw（cmd 窗口闪烁、nvidia-smi 卡死） | Windows 是一等公民还是二等公民？多家项目在此失分 |
| **MCP 生态兼容** | CoPaw（MCP 工具结果重复 #6958）、PicoClaw（MCP 连接失败挂起 #3269）、IronClaw（origin-scoped MCP OAuth）、NanoBot（MCP SDK v2 迁移） | MCP 已成为事实标准，但实现质量参差导致大量运行时问题 |
| **静默失败/错误可观测性** | OpenClaw（#121058 静默回复失败）、CoPaw（/api/tool-calls 404 反复调用）、ZeroClaw（错误分类 #9421）、NanoClaw（setup.sh 静默卡死） | 用户无法感知失败 → 信任度流失 → 核心体验风险 |
| **桌面端/CLI 进程管理** | Hermes（#83683 重启不拉网关）、CoPaw（#2846 自动更新、#7010 守护模式）、ZeroClaw（#9895 移动端体验） | 从"可运行"到"可运维"的差距 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全能型个人 AI 助手：多渠道 + 技能 + 记忆 + Gateway | 追求功能全覆盖的开发者/极客 | 单体仓库，模块化命令（CLI/macOS/Gateway），dev/stable 双通道 |
| **Hermes Agent** | 多执行面（CLI/TUI/桌面/cron）+ 高扩展性 | 重度终端用户、桌面端依赖者 | 多执行面统一运行时，Gateway 为核心会话管理器，Discord Omniscience 批量扩展 |
| **ZeroClaw** | 插件化 + 安全优先 + 协议兼容 | 安全敏感型企业用户、Matrix 社区 | RFC 驱动决策，内置安全决策管线，插件 egress 统一治理 |
| **IronClaw** | 自动化可靠性 + 可插拔架构 | 生产环境自动化部署用户 | epic 驱动项目管理，unbound-turns 无界对话模型，结构化自动化执行契约 |
| **CoPaw** | AgentScope 生态 + 渠道矩阵（飞书/钉钉等） | 中文社区用户、多渠道运营者 | 基于 AgentScope 框架，OneBot 本地媒体管道对齐，skill 动态加载 |
| **NanoBot** | 轻量 + WebUI 体验优先 | 追求开箱即用的个人用户 | Python 网关 + TS 终端双轨，WebUI 会话管理重构（拖拽/分组/本地化） |
| **NanoClaw** | 供应链安全 + 低功耗设备支持 | NAS/家庭服务器用户 | 镜像签名验证闭环，预构建 hardened 镜像 |
| **PicoClaw** | 多渠道消息（钉钉/微信/Telegram）+ TTS | 即时通讯重度用户 | 基于 Claw 系架构的精简实现，多渠道功能对齐 |
| **Moltis** | 事件驱动 + 跨平台任务管理 | 需要日历/邮件/IM 集成的生产力用户 | 持久化连接器 + Slack 原生任务卡片，provider-neutral 设计 |
| **LobsterAI** | 协作（Cowork）+ UI/渲染体验 | 中文社区、OpenClaw 衍生用户 | Fork 自 OpenClaw 的 UI 重制，侧边栏功能集中迭代 |


## 6. 社区热度与成熟度分层

```
第一梯队（快速迭代期）：OpenClaw、Hermes Agent、ZeroClaw
  ├─ 特征：日均 50+ PR 更新、贡献者多、功能批量产出
  ├─ 风险：规模扩大 → 维护响应瓶颈（OpenClaw 已现，ZeroClaw 初现）
  └─ 建议：关注合并效率和 P0 响应速度

第二梯队（项目制推进）：IronClaw、CoPaw、LobsterAI
  ├─ 特征：epic/里程碑驱动、版本节奏明确、UI/UX 重点打磨
  ├─ 风险：社区 PR 积压（CoPaw 37% 合并率、LobsterAI 4.5 个月停滞）
  └─ 建议：提高社区贡献者的合并回报率

第三梯队（轻量推进）：NanoBot、PicoClaw、NanoClaw、Moltis、NullClaw
  ├─ 特征：方向聚焦、响应速度快（Bug 当日修复率高）
  ├─ 风险：功能覆盖有限、可能错失生态标准
  └─ 建议：保持专注差异化方向，避免盲目追求功能全

第四梯队（静默）：TinyClaw、ZeptoClaw
  └─ 连续 24h 无活动，需关注是否活跃开发已停滞
```


## 7. 值得关注的趋势信号

### 信号一：安全性从"功能"升级为"架构级约束" 
ZeroClaw 的 allow/ask/deny 命令分级、OpenClaw 安装策略确认、Hermes 的 approvals.deny 绕过漏洞（#86568）、NanoClaw 镜像签名验证——安全已不再是"加一个 hook 的事"，而是渗透到**命令执行、安装流程、镜像分发、审批体系**的每一个环节。开发者若想建立用户信任，**安全设计必须前置到架构层面**。

### 信号二：Windows 平台是"下一个战场" 
仅今天一天，Hermes 就有 2 个 Windows 专属的 P0/P1 问题（CRLF 内存破坏、网关不自动拉起），ZeroClaw 有 74 个 Windows 测试失败。**大量个人 AI 助手用户正从 Linux/macOS 迁移到 Windows 桌面**（尤其是家庭服务器/NAS 场景），跨平台稳定性将成为关键竞争力。

### 信号三：MCP 兼容性 = 生态入场券 
CoPaw 的 tool result 重复写入、PicoClaw 的 MCP 连接失败挂起、IronClaw 的 origin-scoped MCP OAuth、NanoBot 的 MCP SDK v2 迁移——MCP 已是事实标准，但**实现质量参差不齐**正在制造大量运行时问题。项目的 MCP 兼容性将直接影响其连接外部工具生态的能力。

### 信号四："关闭 ≠ 修复"的信任危机 
OpenClaw #121058（94 条评论）和 Hermes #83683（用户直指 0.20.0 回归）揭示的共同问题是——**修复验证不充分导致用户对维护流程失去信心**。建议各项目建立"修复后验证"流程（如社区确认 + 自动化回归测试），这比任何新功能都更能留住核心用户。

### 信号五：从"对话"到"任务执行"的架构跃迁 
ZeroClaw 的 Goal mode RFC、IronClaw 的自动化执行契约（[SILENT] 令牌、模型 pinning）、Moltis 的持久化连接器——头部项目正在将 AI 助手从"对话系统"重构为"**可靠的任务执行平台**"。这意味着对**确定性、可审计性、错误传播机制**的要求将全面超越"回复质量"。

### 信号六：成本治理成为刚需 
OpenClaw #42475（25 评论）、IronClaw 预算授权、ZeroClaw 原子化 action budget 并行涌现，预示 AI 助手**从免费玩具走向生产工具**的拐点已到。支持**按 agent 设置费用上限、原子化记账、超支告警**将成为标配能力。

### 信号七：渠道功能一致性 = 用户基本盘 
PicoClaw Telegram/Web 差异、CoPaw 多 UI 会话身份串扰、OpenClaw WhatsApp/LINE 静默丢失——用户已不满足于"能多端聊"，而是要求**每个渠道都提供一致的功能体验**（会话管理、技能、记忆、审批流）。渠道适配不再是"加个 webhook"，而是**全功能矩阵对齐**。

### 信号八：自动化可靠性是最大的差异化机会 
IronClaw #6879 的深度审计结论揭示了一个行业级问题：**无人值守自动化的执行可靠性远低于交互模式**。谁能解决"同一个 prompt 有时正常有时空"的结构性缺陷（而非模型噪声），谁就能在 2026 年下半年的生态竞赛中占据制高点。


**给技术决策者的建议**：
1. **选型时优先评估 P0/P1 修复响应速度**——这是社区健康度最诚实的指标
2. **关注 Windows 与 MCP 兼容性**——决定用户获取的广度和生态对接能力
3. **将成本治理和自动化可靠性纳入 PoC 验证范围**——这是从"试用"到"生产"的分水岭
4. **警惕"功能广度 vs 稳定性"的置换**——OpenClaw 的教训表明这是生态中最昂贵的取舍

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-15

## 今日速览

NanoBot 项目在过去 24 小时内保持高活跃度：共产生 3 条 Issue 更新（1 条新开、2 条已关闭）和 22 条 PR 更新（14 条待合并、8 条已合并/关闭）。值得注意的是，**WebUI 相关功能开发已成为当前最集中的贡献方向**，多个 PR 涉及界面交互、本地化和体验优化。此外，两条先前报告的 Bug（#5391 Anthropic 流式超时、#5378 文件归档异常）均已在今日获得对应修复 PR 并关闭，体现了项目组对稳定性问题的高响应速度。无新版本发布，整体项目健康度良好，但需关注多个 PR 存在合并冲突标记（`conflict`），可能需要维护者介入协调。

---

## 版本发布

过去 24 小时内无新版本发布（Releases: 0）。

---

## 项目进展

今日共有 **8 个 PR 被合并或关闭**，主要集中在以下方向：

**关键 Bug 修复（高价值）：**

- **[#5392 [已合并] fix(anthropic): treat stream idle timeout as inactivity only, not total time](https://github.com/HKUDS/nanobot/pull/5392)** — 修复 #5391：`NANOBOT_STREAM_IDLE_TIMEOUT_S`（默认 90 秒）在 Anthropic 无回调流路径上被错误地用作总超时，导致长时间但活跃的生成被中断。已将超时语义修正为仅针对不活跃状态。**这是今日最重要的稳定性修复，直接解决了一个潜在的生成中断数据丢失问题。**

**WebUI 体验优化：**

- **[#5393 [已合并] feat(webui): polish sidebar and session transitions](https://github.com/HKUDS/nanobot/pull/5393)** — 从 #5358 中拆分出的 UI 优化部分，改进了侧边栏层次结构、连接线、折叠标签呈现方式等，属于纯 UI 改进，不引入依赖和冲突。
- **[#5395 [已合并] feat(webui): refine conversation groups and shared shapes](https://github.com/HKUDS/nanobot/pull/5395)** — 统一分组术语并完全本地化分组工作流，支持将活动会话拖入分组或移回独立列表，简化删除确认样式并引入共享形状缩放。与 #5389（拖拽会话分组）形成互补。

**其他：**

- **[#5390 [已合并] Agent/knowledge graph](https://github.com/HKUDS/nanobot/pull/5390)** — 知识图谱相关功能（PR 描述为空，具体内容待查看）。
- **[#4689 [已关闭] feat(providers): surface OAuth status and expiry warnings](https://github.com/HKUDS/nanobot/pull/4689)** — 标记为 `invalid` 关闭，可能在功能实现上被延后或优先级调整。
- **[#5018 [已关闭] feat(skills): support explicit context loading](https://github.com/HKUDS/nanobot/pull/5018)** — 标记为 `conflict` 关闭，需关注是否将重新提交。

> 整体来看，项目在稳定性和 WebUI 体验方面有实质性推进，社区贡献者的积极性较高。

---

## 社区热点

今日热度最高的话题集中在 **WebUI 功能集** 和 **类型系统重构** 两个方向：

1. **[PR #5389 — feat(webui): add drag-and-drop session organization](https://github.com/HKUDS/nanobot/pull/5389)**
   - 新增拖拽式会话分组功能，支持在侧边栏中对独立会话进行自由排序，或将一个会话拖到另一个会话上创建分组。
   - **分析**：这是用户对会话管理效率提升的典型诉求，反映了 WebUI 在复杂会话场景下对可视化组织能力的明确需求。

2. **[PR #5367 — feat(webui): localize agent activity](https://github.com/HKUDS/nanobot/pull/5367)**
   - 将 WebUI 中 Agent 活动标签本地化到全部 10 种支持语言，并在用户切换语言时实时更新历史活动显示。
   - **分析**：本地化工作的持续投入表明项目正在积极扩展全球用户群，这也是社区贡献者关注度较高的领域。

3. **[Issue #5161 + PR #5396 — refactor: narrow file-level Pyright suppressions](https://github.com/HKUDS/nanobot/pull/5396)**
   - 基于 PR #5158 启用的严格类型检查，逐文件收窄 31 个文件级 Pyright 抑制指令，目的是提升类型安全并防止未来诊断被误抑制。
   - **分析**：此方向体现了项目对代码质量和类型安全的重视，吸引了多位贡献者（#5161 作者 chengyongru，PR #5396 作者 ojassharma7）的协作。

此外，以下 PR 带有 **conflict 标记**，可能需要维护者关注合并顺序：

- #5389（拖拽分组）、#5356（渠道设置流程优化）、#5371（隐藏助手操作按钮）、#5358（会话协作 @提及）、#5340（粒子背景交互）、#5382（Windows 文件保存重试）等 7 个 PR 均存在合并冲突。

---

## Bug 与稳定性

今日报告的 2 个 Bug 均已在上一个 PR 中关闭，值得肯定：

| 严重程度 | Issue | 摘要 | 状态 | 修复 PR |
|---------|-------|------|------|--------|
| **高** | [#5391](https://github.com/HKUDS/nanobot/issues/5391) | Anthropic 流式空闲超时被误当作总超时，会杀死长时间但活跃的生成 | 已关闭 | [#5392](https://github.com/HKUDS/nanobot/pull/5392) 已合并 |
| **中** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | `Session.enforce_file_cap()` 在调用归档回调之前就修改了内存中的会话，若回调失败，调用者的会话已被篡改且在后续保存中无法恢复 | 已关闭 | 修复已完成（相关 PR 已并入某次合并中，具体对应 PR 待确认） |

**当前待合并的 Bug 修复 PR：**

- **[#5271 (P0) fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)** — 防止过期后台任务在 `/new` 或会话生命周期替换后覆盖会话数据。**严重程度为 P0，已等待 8 天，建议维护者优先审查。**
- **[#5382 (P2) fix(session): retry os.replace() on transient Windows PermissionError](https://github.com/HKUDS/nanobot/pull/5382)** — 解决 Windows 平台上 `JsonlSessionStore.save()` 偶发 `[WinError 5] Access is denied` 导致整个网关崩溃的问题（已在同一日志中确认发生两次）。标记有 conflict，需解决冲突后合并。

---

## 功能请求与路线图信号

从今日动态中可以看出以下路线图信号：

1. **WebUI 会话管理重构（大概率进入下一版本）**
   - #5389（拖拽分组）+ #5395（分组体验优化）+ #5358（@提及协作）+ #5356（渠道设置流程优化）等多条 PR 并行推进，说明开发团队正在对 WebUI 的会话管理进行系统性升级。建议关注这些 PR 的合并顺序和冲突解决方案。

2. **MCP SDK v2 迁移（明确路线图）**
   - [#5179（P1）](https://github.com/HKUDS/nanobot/pull/5179) 将 MCP 客户端从 v1 迁移至 v2 `Client` API，并保留 SSRF 验证、DNS 固定、代理路由等安全特性。标记为 P1 优先级，虽非今日新进展，但持续活跃。

3. **TypeScript 终端 UI（探索性方向）**
   - [#4329](https://github.com/HKUDS/nanobot/pull/4329) 正在重建 `nanobot agent` 为原生 TypeScript/OpenTUI 客户端，Python 网关保留为唯一后端实现。这是一个较大的架构演进方向，虽挂起时间较长（6 月 13 日创建），但近期有更新，值得持续关注。

4. **类型安全提升（基础设施加固）**
   - #5161 → #5396 的 Pyright 严格检查窄化工作，将逐步消除文件级类型抑制指令，为未来引入更严格的类型保证铺路。

---

## 用户反馈摘要

以下为今日 Issue 和 PR 评论中反映出的用户真实痛点：

1. **生成中断问题（已修复）**：用户在 #5391 中反馈，在 Anthropic provider 的长文本生成场景下，超时机制会错误介入，导致本应正常完成的生成被强制中断。修复 #5392 已被合并，建议用户及时更新至最新代码。

2. **WebUI 会话管理诉求（持续增长）**：多个 PR 的发起者（bingqilinweimaotai、chengyongru、ZhouJ-sh 等）针对会话分组、拖拽排序、协作提及等功能连续提交了互补性的 PR，表明开发者社区对 WebUI 会话管理能力的期待值较高。

3. **Windows 平台稳定性（等待合并）**：PR #5382 的作者 albatrossflyon-coder 在日志中确认了 Windows 平台上 `os.replace()` 偶发权限错误导致整个网关崩溃的问题（同一日志中出现两次），说明了该问题并非个案，Windows 用户存在一定的使用风险。

4. **TypeScript 终端方向（长期关注）**：PR #4329 在描述中强调保留 Python 网关作为唯一实现，体现作者对跨平台一致性的考虑。该 PR 虽已存在两个月，但持续获得更新，说明该方向仍在推进中。

---

## 待处理积压

以下为需要维护者关注的长期待处理事项：

**PR 积压（按优先级排序）：**

| PR | 优先级 | 等待天数 | 状态与关注点 |
|----|-------|---------|-------------|
| [#5271 fix(session): prevent stale background task saves](https://github.com/HKUDS/nanobot/pull/5271) | **P0** | 8 天 | 严重级别最高，涉及会话数据完整性，建议优先审查 |
| [#5179 MCP SDK v2 迁移](https://github.com/HKUDS/nanobot/pull/5179) | P1 | 15 天 | 大范围重构，涉及迁移兼容性，需充分测试 |
| [#4329 TypeScript 终端 UI](https://github.com/HKUDS/nanobot/pull/4329) | 无标记 | 63 天 | 架构级改动，需与 Python 网关方向对齐后决策 |
| [#4145 Weather Skill](https://github.com/HKUDS/nanobot/pull/4145) | 无标记 | 75 天 | 功能新增，包含示例代码和测试，等待时间较长 |

**合并冲突提示（需协调）：**
当前有 7 个开放 PR 带有 `conflict` 标记（#5356、#5358、#5340、#5382、#5389、#5371、#5018），其中多个集中在 WebUI 领域，建议维护者统一协调合并顺序，避免冲突范围扩大。

*报告生成时间：2026-08-15，基于 NanoBot (github.com/HKUDS/nanobot) 公开 GitHub 数据。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-15

## 1. 今日速览

过去 24 小时项目保持着高热度的社区活跃度：**50 条 Issue 更新**（47 条活跃，3 条关闭）与 **50 条 PR 更新**（26 条待合并，24 条已合并/关闭）双双达到近期峰值，其中 P0/P1 级 bug 均已在当天得到修复或合并对应 PR，响应速度值得肯定。**Discord API v10 对齐战役（Omniscience）** 继续批量产出新功能和测试用例（单日新增 10+ 子 Issue/PR），是该阶段最集中的开发主线。与此同时，今日密集曝光了**一批来自社区深耕用户的深层设计缺陷**（Docker 复用漂移、FTS5 索引不兼容、外部记忆 provider 覆盖内置记忆、窗口期重启不拉起网关等），问题定位具体、复现路径清晰，体现出社区用户已深度使用 Hermes 的各类高级特性。合并流方面，今日修复了 3 个 P0 回归（Windows CRLF 内存破坏、桌面端 rewind 截断、以及流式断连的自动降级），整体项目健康度良好，但需警惕 Windows 平台和会话状态管理两个长期薄弱点的持续暴露。


## 2. 版本发布

今日无新版本发布（最新版本为 v0.20.0）。


## 3. 项目进展

过去 24 小时共有 **24 个 PR 被合并或关闭**，核心推进集中在以下几条主线：

- **会话稳定性的关键修复（P0）**：PR [#83785](https://github.com/NousResearch/hermes-agent/pull/83785) 修复了桌面端 rewind 截断中的持久化 row-id 寻址问题（#82959），并附带对齐守卫，消除了 mis-aimed-cut 的安全隐患。PR [#86572](https://github.com/NousResearch/hermes-agent/pull/86572) 为重复流式断连（stream-drop stall）增加了自动升级到 fallback chain 的机制——该修复直接回应了 8 月 14 日 OpenRouter 的 `anthropic/claude-sonnet-4.6` 流式故障（约 100% 会话受影响），将极大提升生产环境的容错能力。

- **Discord Omniscience 战役持续铺开**：今日新增 10+ 个子 Issue（I1/I3/I4/V1/W3/R3/T5/M1/M3/M5 等）及对应 PR，覆盖命令注册表同步、组件鉴权、原生语音验证、消息模型结构化、轮询投影等细分能力，每条 PR 均附带明确的测试通过数（12~31 个），整体推进节奏紧凑、测试完备。

- **多端一致性修复落地**：PR [#86374](https://github.com/NousResearch/hermes-agent/pull/86374) 为 TUI/桌面端 `slash_worker` 补全 Hermes 托管工具的 PATH（browser-use/uvx/uv），解决 CLI 发现失败问题。PR [#86290](https://github.com/NousResearch/hermes-agent/pull/86290) 修复了 session_search 在过滤后结果为空时误报“无历史记录”的语义缺陷。PR [#86291](https://github.com/NousResearch/hermes-agent/pull/86291) 让 MCP OAuth 真正开始尊重 `authorization_params` 和 `require_refresh_token` 配置。

- **Profile 隔离修复**：PR [#86313](https://github.com/NousResearch/hermes-agent/pull/86313) 修复了 bot profile 的系统提示词泄漏默认 profile 的 skills 索引和身份信息的问题，该问题会导致 agent 依据错误的技能列表进行规划，属于功能性缺陷。


## 4. 社区热点

今日社区讨论最集中的话题清晰折射出 Hermes 用户群体对**多租户架构**和**稳定运行**的强烈关注：

1. **[#34352 Solving the Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352)（31 评论，👍 3）** — 由 NimbleCoAI 提出，直指内存操作绕过 hook 系统导致多租户隔离无法实现，该团队已 fork 核心并生产运行数月。这条 Issue 是社区对多租户能力最强烈的信号诉求，且已获得 3 个 👍，值得维护者认真评估（详见第 7 节）。

2. **[#66616 Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616)（31 评论）** — 自动化探针检测到 skills 索引已 29.8 小时未更新（上限 26h），且长时间未恢复，社区的耐心正在被持续消耗。

3. **[#78647 EPIC — All Gods Must Die: 20/20 killed](https://github.com/NousResearch/hermes-agent/issues/78647)（77 评论）** — 即便是已关闭的 Epic（god-file 分片重构），仍因 77 条评论成为今日讨论量之最。既体现了该重构方向获得了广泛关注，也暗示其引发的讨论余波未尽。

4. **[#83683 Desktop restart reaps the live gateway but never relaunches](https://github.com/NousResearch/hermes-agent/issues/83683)（27 评论，P1）** — Windows 桌面端重启即杀网关且不重启，WeChat/QQ/Telegram 全部失声。用户已明确指出这是 0.20.0 的回归（此前版本正常），并带详尽复现报告，暴露了桌面端进程管理的脆弱性。


## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| **P0** | [#85825](https://github.com/NousResearch/hermes-agent/issues/85825) | **Windows 下 CRLF 行尾不匹配导致 `memory replace/remove` 静默覆盖整个 MEMORY.md** — 用户数据存在被整体清空的风险 | 今日已关闭（修复已合入，具体 PR 未在列表中显示） |
| **P0** | [PR #83785](https://github.com/NousResearch/hermes-agent/pull/83785) | 桌面端 rewind 截断的持久化 row-id 寻址修缮（含 mis-aimed-cut 防护） | 已合并 |
| **P1** | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | **Windows 桌面端重启后网关被强杀且未被拉起重启**（WeChat/QQ/Telegram 静默）— 0.20.0 回归 | 仍开启，尚无对应 PR |
| **P2** | [#84969](https://github.com/NousResearch/hermes-agent/issues/84969) | **持久 Docker 容器复用不校验 `docker run` 不可变配置** — 变更终端配置后跨进程复用旧容器，存在安全边界风险 | 仍开启，无 PR |
| **P2** | [#86558](https://github.com/NousResearch/hermes-agent/issues/86558) | `hermes gateway restart` 在 XDG_RUNTIME_DIR 泄漏自其他用户时（su/sudo 场景）崩溃 | 已有 [PR #86563](https://github.com/NousResearch/hermes-agent/pull/86563)，已提交并待合入 |
| **P2** | [#85834](https://github.com/NousResearch/hermes-agent/issues/85834) | 桌面端 SSH 远端 profile 的会话恢复报告 “Session not found” | 仍开启，无 PR，与 #74998 相关但不同 |
| **P2** | [#86567](https://github.com/NousResearch/hermes-agent/issues/86567) | Windows cron 脚本执行绕过 venv 启动器（忽略 editable .pth），直接调用 base Python | 今日新开，尚无 PR |
| **P2** | [#86568](https://github.com/NousResearch/hermes-agent/issues/86568) | **`approvals.deny` 规则可通过注入空格/Tab 绕过** — 安全缺陷，反混淆管线存在漏洞 | 今日新开（P3 安全级），尚无 PR，需优先评估 |
| **P2** | [#30449](https://github.com/NousResearch/hermes-agent/issues/30449) | DeepSeek 后端的 `reasoning_content`/`reasoning_effort` 无法送达 OpenAI 兼容 SSE 流 | 仍开启（5/22 报告），无 PR |
| **P2** | [#79625](https://github.com/NousResearch/hermes-agent/issues/79625) | 桌面端会话忽略 `checkpoints.enabled` 配置，文件系统检查点永不创建 | 仍开启，无 PR |
| **P2** | [#86510](https://github.com/NousResearch/hermes-agent/issues/86510) | `read_file` 对无尾换行文件的 `total_lines` 统计存在 off-by-one 错误 | 今日新开，标记为 duplicate |
| **P2** | [#86513](https://github.com/NousResearch/hermes-agent/issues/86513) | file_tools 在远端/容器后端的读写去重/保鲜检查误用宿主机文件系统 | 今日新开，标记为 duplicate |
| **P3** | [#83845](https://github.com/NousResearch/hermes-agent/issues/83845) | TUI/桌面 `slash_worker` 的 PATH 缺少 Hermes venv/bin | 已关闭（PR #86374 已合入） |
| **P3** | [#68876](https://github.com/NousResearch/hermes-agent/issues/68876) | 桌面端切换 provider/model 后菜单、composer、会话绑定与实时代理请求不同步 | 仍开启，无 PR |
| **P3** | [#86565](https://github.com/NousResearch/hermes-agent/issues/86565) | 桌面端会话状态点不符实（阻塞批准时仍显蓝色“运行中”而非琥珀色“等待输入”） | 今日新开，无 PR |


## 6. 功能请求与路线图信号

- **[Multi-Tenant Hermes（#34352）](https://github.com/NousResearch/hermes-agent/issues/34352)** — 请求将记忆操作的 hook 纳入租户隔离体系。这可能是 Hermes 迈向企业级多租户架构的关键一步，但也涉及核心架构改动，需要 careful design。当前无关联 PR。

- **[Discord Omniscience 系列](https://github.com/NousResearch/hermes-agent/issues/79564)** — 包含命令注册表同步、组件鉴权、原生语音、profile 路由矩阵、线程权限、轮询投影、结构化消息模型等 10+ 个子任务，均有对应 PR 和测试，是当前最明确的路线图信号。PR [#86440](https://github.com/NousResearch/hermes-agent/pull/86440)、[#86419](https://github.com/NousResearch/hermes-agent/pull/86419)、[#86451](https://github.com/NousResearch/hermes-agent/pull/86451) 等均已提交。

- **[将既有会话归入 Project（#86561）](https://github.com/NousResearch/hermes-agent/issues/86561)** — 用户希望会话开始后仍能将其关联到某个 Project，用于锚定工作区/上下文。已标记为 duplicate，说明已有其他 Issue 覆盖此需求，但至少在后续版本中应有明确排期。

- **[跨进程 Turn 序列化（PR #67454）](https://github.com/NousResearch/hermes-agent/pull/67454)** — 通过 DB 级租约实现跨进程 turn 序列化（#67442），已开放近一个月，是并发多进程场景的重要基础设施，等待维护者决策。

- **[生命周期钩子跨执行面统一（#67798）](https://github.com/NousResearch/hermes-agent/issues/67798)** — 希望将 session/agent 生命周期钩子从 gateway 独占提升为所有执行面（CLI/TUI/cron/桌面等）共享的运行时契约。属于架构层面的重要演进方向，仍处于 needs-decision 状态。

- **[zai-coding-plan 专用 provider profile（PR #86560）](https://github.com/NousResearch/hermes-agent/pull/86560)** — 为 z.ai coding-plan 订阅用户提供开箱即用的默认配置（当前需手改 GLM_BASE_URL），对提升新手体验有直接价值，已提交。


## 7. 用户反馈摘要

- **深度用户的架构性痛点（#34352）**：NimbleCoAI 明确表示“**Memory operations bypass the hook system entirely, making tenant isolation impossible without forking core**”，且已在生产环境 fork 维护数月。其诉求远不止文档层面的“multi-tenant”概念，而是当前架构在真实多租户场景下的根本性阻断。

- **Windows 平台反复踩雷（#85825、#83683）**：仅一天之内就出现两个 Windows 专属的 P0/P1 级问题（CRLF 内存破坏、桌面重启后网关不拉起）。社区用户 zuowen7 直指“**This is a regression: before this version, the old…** ”（明确指向 0.20.0 的行为回退），表明 Windows 端稳定性正在成为新用户增长的主要风险。

- **安全敏感操作需要可预测的行为（#86568）**：WzKyy 发现 `approvals.deny` 可通过空白字符绕过，意味着用户以为“已被阻止的命令”实际上可能会被执行——这类信心若被打破，用户将失去对安全审批体系的信任。同一个用户同时提交了 Windows cron 行为异常的两个独立报告，说明宏观的“Windows 生态成熟度”仍是社区关注焦点。

- **进程/环境清洁性问题（#86558）**：Dre4my26 报告了标准的 `su`/`sudo -u` 运维场景下 Hermes 崩溃的原始 PermissionError，说明 gateway 对“非标准用户环境”的容忍度不足，影响企业用户的部署信心。

- **对 Discord 支持的积极投入（#79564、#86535~#86539 等）**：一整排的 “Discord omniscience” 系列 Issue 与 PR 均来自同一位作者（andrexibiza），配套完整测试，展现出高度的建设性与一次性完成度，对项目方至少起到了“示范 PR”的作用。


## 8. 待处理积压

| 项目 | 类型 | 持续时长 | 备注 |
|---|---|---|---|
| [#34352 Multi-Tenant Hermes](https://github.com/NousResearch/hermes-agent/issues/34352) | Issue（feature） | 2.5 个月 | 31 条评论、3 👍，社区已有生产级 fork 方案，**建议维护者正式回应并评估设计** |
| [#4064 鼠标支持（CLI）](https://github.com/NousResearch/hermes-agent/issues/4064) | Issue（feature） | 4.5 个月 | 12 条评论，TUI 用户的刚需，已被标记为 duplicate，但至今未实现 |
| [#30449 DeepSeek reasoning 不达 SSE 流](https://github.com/NousResearch/hermes-agent/issues/30449) | Issue（bug, P2） | ~3 个月 | 已影响 Open WebUI + DeepSeek 用户群体，仍未解决 |
| [#66616 Skills 索引持续过期](https://github.com/NousResearch/hermes-agent/issues/66616) | Issue（bug, P3） | 28 天 | 自动化探针已多次失败，31 条评论中社区表达了耐心消耗的迹象，**建议尽快修复 CI  freshness 机制** |
| [PR #67454 TurnLease 跨进程序列化](https://github.com/NousResearch/hermes-agent/pull/67454) | PR（feature） | 27 天 | 关键基础设施，长期处于 needs-decision，等待核心维护者明确态度 |
| [#79625 桌面端 checkpoint 被静默禁用](https://github.com/NousResearch/hermes-agent/issues/79625) | Issue（bug, P2） | 10 天 | 用户数据安全相关（checkpoint 不落盘），需尽快确认是否可复现并给出修复方案 |
| [PR #70375 桌面端日志密钥脱敏](https://github.com/NousResearch/hermes-agent/pull/70375) | PR（security） | 23 天 | Session token 明文落盘风险，等待合入；在安全方向上建议该 PR 获得优先评审 |

---

**编辑注**：今日社区提交的 #86568（approvals.deny 绕过）虽被标为 P3，但涉及审批规则绕过，属于安全边界问题，建议维护方提升优先级尽快评估。另 #86509、#86513 等多条重复 Issue 的集中出现，提示维护者可以将“死代码/重复逻辑”类的清理纳入近期的技术债清单。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**2026-08-15** | 数据来源: github.com/sipeed/picoclaw

---

## 1. 今日速览

PicoClaw 过去24小时活跃度持续走高，共产生 12 条 Issue/PR 动态，其中 Pull Request 更新达到 9 条，显示核心开发仍在快速推进。值得关注的是，针对昨日上报的严重 Bug（MCP 服务器连接失败导致 agent 循环挂起、聊天界面完全无响应）已迅速出现对应修复 PR，体现了项目组对稳定性问题的高度重视。此外，多个存量 PR 被标记为 stale 并关闭，加速了积压清理。项目整体处于 Bug 修复与功能打磨并行的稳健发展阶段。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 nightly 构建（Git: 2cf030d2），建议关注下一个稳定版发布节奏。

---

## 3. 项目进展

过去24小时内有 5 个 PR 被合并/关闭，其中值得关注的实质性变更包括：

- **[PR #3270] feat: add DashScope TTS provider and WeChat audio file sending**（已合并）— 新增阿里云 DashScope（百炼）TTS 语音合成支持，并实现微信渠道音频文件发送能力，这是音频能力在多渠道的重要拓展。
- **[PR #3271] chore(providers): update default model names to 2026-07 latest**（已合并）— 刷新 9 个服务商的默认模型列表至 2026 年 7 月最新版本（含 OpenAI GPT-5.6 系列、Anthropic 最新模型等），确保开箱即用的模型配置不过时。
- **[PR #3279] fix(seahorse): prevent tool-call format leakage into LLM summaries**（已合并）— 修复 seahorse 摘要路径中工具调用格式泄漏到用户消息的隐患，与之前修复的同类 Bug 形成完整闭环。
- **[PR #3283] fix(dingtalk): support picture/image message inbound**（已合并）— 为钉钉渠道补齐图片消息接收能力，同步引入 OpenAPI token 缓存机制。
- **[PR #3303] build(deps): bump actions/stale from 10 to 11**（已合并）— 维护自动化依赖更新。

整体来看，项目在 **多渠道消息能力**（钉钉图片、微信音频）、**TTS 扩展**、**模型配置时效性** 和 **稳定性修复** 四个方向均取得进展。

---

## 4. 社区热点

**[Issue #3269] [BUG] MCP 服务器连接失败导致 agent 循环挂起、聊天界面停止响应**
- 链接: https://github.com/sipeed/picoclaw/issues/3269
- 状态: 开放 | 评论: 5 | 👍 1

该项目目前最受关注的 Issue，原因是其影响面覆盖所有使用 MCP（Model Context Protocol）服务器的用户，且后果严重——聊天界面完全无响应。用户 `ruiyigen` 在 nightly 版本（git 2cf030d2）上使用 Qwen3 模型复现了该问题。评论区的讨论聚焦于 `AgentLoop.Run` 的错误传播机制，以及如何优雅降级而非直接退出。该 Issue 直接催生了修复 PR #3337（见下节），彰显社区"报 Bug + 提修复"的快节奏协作模式。

---

## 5. Bug 与稳定性

| 严重程度 | 项目 | 描述 | 状态 | 修复 PR |
|---------|------|------|------|---------|
| 🔴 严重 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败 → agent 循环挂起 → 聊天界面完全停止回复用户 | **开放**（反馈于 7/20, 更新于 8/14） | ✅ [PR #3337](https://github.com/sipeed/picoclaw/pull/3337)（8/14 创建，修复中） |
| 🟡 中等 | 通过 #3308 关闭的 Code Review 反馈 | Seashore/Channel Manager/Hooks 中存在并发危险、goroutine 泄漏及内存/速度优化空间 | 已关闭（stale） | 部分修复已通过 #3279 合并 |
| 🟡 中等 | [PR #3319](https://github.com/sipeed/picoclaw/pull/3319)（开放中） | exec 工具同步执行时忽略单次运行的 `timeout` 参数，且 schema 中将 `background`/`pty` 声明为 string 而非 boolean | 修复待合并 | 本体即修复 PR |

**核心风险提示**: Issue #3269 的修复 PR #3337 已于昨日（8/14）提交，但尚未合并。该 Bug 影响所有使用外部 MCP 服务器的生产环境用户，建议维护者优先 review 和合入此修复。

---

## 6. 功能请求与路线图信号

**[Issue #3307] Telegram（及其他聊天渠道）的会话列表/切换命令**
- 链接: https://github.com/sipeed/picoclaw/issues/3307
- 状态: 已关闭（stale）| 提出于 7/30

用户 `iamtoricool` 提出 Telegram 渠道缺少 Web UI 中已有的完整会话管理能力（列出、切换、删除会话）。虽然该 Issue 因 stale 被自动关闭，但需求本身真实存在——PicoClaw 的多渠道矩阵（Telegram/钉钉/微信/deltachat 等）正在快速铺开，各渠道功能对齐是必然趋势。结合已合并的 钉钉图片 (#3283) 和 微信音频 (#3270) 来看，**" 채널별 기능 격차 해소"** 正在成为近期迭代的隐性主线。

**路线图信号**: 以下开放 PR 若被合入，将是下一版本的重要能力增量——
- [PR #3200](https://github.com/sipeed/picoclaw/pull/3200)（开放中）: Web UI 可配置默认模型 fallback 链，支持多模型冗余切换
- [PR #3222](https://github.com/sipeed/picoclaw/pull/3222)（开放中）: deltachat 渠道清理重构，-200LOC，去除遗留特性

---

## 7. 用户反馈摘要

- **对 Bug 响应速度的敏感**: Issue #3269 的评论表现出用户对"聊天界面完全停止回复"这一故障的强烈不满，同时注意到开发者在一天内就提交了修复 PR，社区对响应速度总体认可。
- **对多渠道一致性的期待**: Issue #3307 反馈显示，用户期望在不同聊天渠道（Telegram/Web/钉钉/微信）获得**一致的功能体验**，Web UI 的功能领先于聊天渠道形成落差，是常见的用户痛点来源。
- **对代码质量的关注**: Issue #3308 虽然被 stale 关闭，但其 Code Review 内容（并发安全、goroutine 泄漏、内存优化）获得社区互动，说明核心开发者对代码健康度有追求，社区中也有同频的贡献者愿意做深度审查。
- **对模型列表时效性的实际需求**: PR #3271 的合并说明用户/贡献者在乎"默认模型是否最新"，避免手动配置的负担。

---

## 8. 待处理积压

以下为长期未合入且值得维护者关注的重要 PR：

| PR | 创建时间 | 标题 | 关注理由 |
|----|---------|------|---------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 7/03 | refactor(deltachat): cleanup implementation, -200LOC | 已开放超过 6 周，重构规模清晰且方向正确（精简 + 文档），但长时间未合入，需确认是否有阻塞项 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 7/01 | feat(models): add configurable default fallback chain | 功能价值高（模型 fallback 链），已开放 6 周+，涉及前后端改动，需要维护者分配时间 review |
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | 8/07 | fix(tools): honor exec timeout and boolean run options | Bug 修复类 PR，等待合入；时间已过一周 |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | 8/14 | Fix/mcp failure hangs agent loop | ⚠️ **高优先级**：修复严重 Bug（#3269），建议今日内完成 review 并合入 |

**维护者提醒**: 项目正在使用 actions/stale 自动关闭长期无互动 Issue/PR，从本周关闭记录看（#3308、#3307、#3303 等多个），**stale 机制可能导致有价值讨论被过早关闭**。建议对此类关闭做人工复核，避免误伤有效反馈。

---

*本日报由 AI 分析师基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**2026-08-15** | 数据窗口: 2026-08-14 至 2026-08-15

---

## 1. 今日速览

NanoClaw 在过去 24 小时内保持了社区活跃节奏：共产生 2 条新 Issue 和 11 条 PR 更新。最值得关注的是，核心团队（`core-team`）昨日连续发起两轮签名验证器的"实弹测试"（PR #3244 与 #3242/#3243），最终 3 个 core-team PR 均已关闭，标志着自动签名审批链路已通过验证阶段。同时，社区提交的修复类 PR 质量较高，覆盖 setup 脚本 Node 版本检测、Cron 解析容错、Windows 兼容性等多项实际问题。无新版本发布，项目正处于重点优化稳定性与开发体验的阶段。整体健康度良好，维护者响应及时。


## 2. 版本发布

过去 24 小时无新的 Releases。


## 3. 项目进展

昨日共有 3 个 PR 关闭/合并（均为 core-team 内部操作），核心进展集中在对**自动化签名审批链路的验证与修复**：

| PR | 状态 | 说明 |
|---|---|---|
| [PR #3244](https://github.com/nanocoai/nanoclaw/pull/3244) | Closed (未合并) | 签名审批器第二轮"实弹测试"，在 Draft 状态下验证 verify → approve-agent-image → 独立 cosign 验证 → 审批评论全程链路是否可用 |
| [PR #3243](https://github.com/nanocoai/nanoclaw/pull/3243) | Closed (未合并) | **核心修复**：修正 `verify-agent-image` 工作流中"启用自动合并"步骤被误判为验证结论的问题——该步骤在 Draft PR 上必然失败，且失败不代表镜像验证未通过。已修复并确保 verify 成为必需检查 |
| [PR #3242](https://github.com/nanocoai/nanoclaw/pull/3242) | Closed (未合并) | 首轮"实弹测试"，将 pin 切换至上一个 hardened 构建以触发完整验证链 |

**总结**：这三条 PR 之间是迭代关系——#3243 解决了验证逻辑的根本缺陷后，又通过 #3244 进行了复验。项目在**供应链安全/镜像签名的自动化验证能力**上已完成一轮完整的验证闭环，为后续自动合并 hardened 构建奠定了基础。除此之外，另有 8 条 PR 仍处于待合并状态，详见下文分析。


## 4. 社区热点

今日虽无明显高赞/高评论热帖（均为 0 评论），但以下两条 Issue 与一条 PR 形成了**紧密的关联讨论组**，值得维护者重点关注：

**[Issue #3248](https://github.com/nanocoai/nanoclaw/issues/3248) — setup.sh 的"Node 缺失或过旧"分支存在逻辑缺陷**
- 作者 `glifocat` 在代码层面做了精细分析：`setup.sh` 的 `check_node` 函数（[L51-L68](https://github.com/nanocoai/nanoclaw/blob/249cf983/setup.sh#L51-L68)）在检测到 Node 版本 < 20 时，会调用 `install-node.sh`，但 `install-node.sh` 发现已有任何版本的 Node 时会短路退出，导致"过旧"场景下既不修复也不提示，用户被卡在中间状态。
- **联动**：作者在报出此 Issue 的同一天直接提交了修复 PR [PR #3249](https://github.com/nanocoai/nanoclaw/pull/3249)（且标注了 *follows-guidelines* 与 *core-team*），实现了"issue-to-fix"的快速闭环。

**诉求分析**：该 Issue 反映了开发者在**首次安装/升级 NanoClaw 时的摩擦成本**——Node 环境检测逻辑在边界条件下失效，会直接阻断安装流程。考虑到 setup.sh 是项目的第一入口，此类问题对用户留存影响较大。


## 5. Bug 与稳定性

昨日报告 2 条 Bug，均有对应修复 PR 或在推进中：

### 严重程度中等

**[Issue #3248](https://github.com/nanocoai/nanoclaw/issues/3248) — setup.sh Node 版本检测分支失效**
- 影响：Node < 20 的用户运行 setup.sh 时，安装脚本会静默短路，安装流程挂起或误判成功。
- 修复：已有 [PR #3249](https://github.com/nanocoai/nanoclaw/pull/3249)（待合并），方案为让 `install-node.sh` 能正确处理"已有过旧 Node"的场景。

### 严重程度较高（影响面更广）

**[Issue #3245](https://github.com/nanocoai/nanoclaw/issues/3245) — 预构建 Agent 镜像中的 Bun 二进制要求 AVX2，在旧 CPU 上触发 SIGILL 崩溃**
- 影响：默认 wizard 推荐的 `NANOCLAW_HARDENED_IMAGE=true` 拉取的预构建镜像，其 Bun 二进制为**非 baseline x64 目标**（要求 AVX2 指令集）。在 Intel Tremont/Elkhart Lake 等低功耗 Atom 平台（如 Celeron J6413/N5105）上运行时直接 SIGILL 崩溃——这是**硬崩溃**，无降级路径。
- 修复：**暂无对应 PR**，Bug 尚在待处理状态。这影响了相当一部分**家庭服务器/NAS 用户**，值得维护团队优先排查构建配置。

### 其他稳定性向 PR（待合并）

近期待合并的 8 条 PR 中包含多项稳定性修复：
- [PR #3247](https://github.com/nanocoai/nanoclaw/pull/3247)：修复 Cron 字符串格式错误（如 `0 21-5 * * *`）导致每次调度轮询都重复报错的问题，改为自动退休该无效字符串。
- [PR #3246](https://github.com/nanocoai/nanoclaw/pull/3246)：修复 Linux 风格 POSIX 引号在 Windows `cmd.exe` 下传递失败，导致孤儿容器清理在 Windows 平台静默失效的问题。
- [PR #3230](https://github.com/nanocoai/nanoclaw/pull/3230)：修正技能卸载文档中仍指向已废弃的 data/env 镜像的问题。


## 6. 功能请求与路线图信号

本窗口内最大的路线图信号来自 **Dial 通道接入**：

**[PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) + [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)**（均由 `OmriBenShoham` 提交，已存在约 1 个月仍在待合并）
- **功能**：新增 **Dial 通道适配器**（SMS + AI 语音通话），配套 Wizard/技能选择器更新。
- **信号意义**：两条 PR 均为 *Feature* 类型且标注 *follows-guidelines*，说明作者遵循了项目贡献规范。若合并，NanoClaw 将新增一个重要的**语音/短信交互入口**，直接扩展"AI 助手"的使用场景——从纯聊天界面走向多模态触达。这可能是下一版本的重要卖点。

综合来看，若维护者将 #3041/#3050 合入下一个 minor 版本，将是一次功能性跳跃。建议维护团队评估此 PR 的合并优先级。


## 7. 用户反馈摘要

基于 Issue 描述文本（评论数为 0，无直接对话）：

| 来源 | 用户画像 | 核心反馈 |
|---|---|---|
| [Issue #3245](https://github.com/nanocoai/nanoclaw/issues/3245) | 低功耗 x86 设备用户（NAS/家庭服务器） | **"默认推荐路径不可用"**：wizard 推荐的 hardened 镜像在无 AVX2 的 CPU（Tremont/Elkhart Lake Atom）上直接崩溃，用户需手动排查才能发现根因，新手极易在此受挫 |
| [Issue #3248](https://github.com/nanocoai/nanoclaw/issues/3248) | 环境重装/升级用户 | **"安装脚本在边界条件下静默卡死"**：已有旧 Node 但版本不够时，脚本不报错也不继续，用户难以判断是自身原因还是项目 Bug |

**共性总结**：两条 Issue 都指向**新用户首次部署路径的容错性不足**。用户并非抱怨功能缺失，而是希望在环境不满足要求时得到**清晰、可操作**的错误提示，而非静默失败或硬崩溃。


## 8. 待处理积压

以下 Item 等待时间较长或长期未获响应，建议维护者关注：

### PR 积压（超过 2 周未合并）
| PR | 等待天数 | 说明 |
|---|---|---|
| [PR #2427](https://github.com/nanocoai/nanoclaw/pull/2427) — `fix: attachment issues` | 95 天 | 已停留近 3 个月，关联 Issue #2426。若该 Issue 仍影响用户，建议维护者明确答复优先级或请求 rebase |
| [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) — `fix: stage inbound attachments that expose only a url (Discord)` | 64 天 | Discord 附件（文本/图片）无法以可读形式传至 agent。该问题直接影响 Discord 用户的日常体验，等待时间偏长 |
| [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) — Dial 通道 | ~32 天 | 见上文功能信号分析 |

### Issue 积压
- [Issue #3245](https://github.com/nanocoai/nanoclaw/issues/3245) 为昨日新报，但**无对应 PR**，且为硬崩溃问题。建议尽快标记 `bug` 标签并排期。

---

**整体评估**：NanoClaw 项目处于"稳定性加固 + 供应链安全建设"的窗口期。核心团队在签名验证链路上推进迅速（2 天内完成两轮验证测试并修复了逻辑缺陷），但社区贡献的修复类 PR 合并效率有待提升——当前 8 条待合并 PR 中多数已等待数周。建议维护者对积压 PR 做一次集中 triage，并优先响应 #3245 的基线构建问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

NullClaw 今日整体活跃度较低，24 小时内无新 Issue 提交或关闭，仅 1 条 PR 被合并，版本发布次数为 0。虽然提交量不大，但本次合并的 PR 具有较强的实质性意义——它解决了 SQLite 后端在多部署场景下的路径配置痛点，属于对现有架构的能力补全而非简单修修补补。仓库目前不存在明显的阻塞性问题或争议讨论，项目处于平稳推进的节奏中。与上周同期相比，活跃度有所回落，但无异常迹象。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 合并 PR

| PR | 标题 | 状态 | 核心内容 |
|---|---|---|---|
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | GEN-548: make SQLite memory database path configurable | ✅ 已合并 | 为基于 SQLite 的主记忆引擎新增 `memory.database_path` 配置项；保留原有默认位置（`<workspace>/memory.db`）作为空值回退；支持绝对路径以适配只读工作区部署；同步补充配置文档 |

**分析：** 该 PR 解决了两个实际部署问题：一是默认路径在多个工作区共用同一进程时容易产生碰撞，二是只读工作区（如容器化挂载、CI 环境）无法在 workspace 内写库的困境。`database_path` 的引入将 SQLite 后端的灵活性提升了一个层级，对多租户和容器化用户是实质性利好。此次修改属于非破坏性变更，向后兼容，预计不会引发迁移成本。

---

## 4. 社区热点

今日无高讨论量 Issue 或 PR。唯一合并的 PR #986 评论数为 0，未产生公开讨论，也未收到 👍 反馈。社区整体讨论热度偏低，说明当前版本功能稳定，没有引发争议或强烈诉求的话题。

---

## 5. Bug 与稳定性

今日无新报告 Bug、崩溃或回归问题。仓库当前无已知未修复的稳定性问题。

---

## 6. 功能请求与路线图信号

今日无新功能请求提交。结合 PR #986 的合入，可判断以下趋势：

- **部署灵活性持续被重视**：紧随 `database_path` 的合入，推测后续可能出现面向只读文件系统、网络存储（如 NFS）等场景的配置扩展（如 memory 层的 backup/restore 路径、WAL 模式开关等）
- **SQLite 后端进入"配置完备"阶段**：该 PR 补齐了路径可配置性，后续若有类似"memory engine 可插拔"/"替代后端（如 PostgreSQL）"类需求，则将是更大的架构级变更

暂无证据表明上述任何一项已被纳入下一版本的明确路线图。

---

## 7. 用户反馈摘要

PR #986 说明其针对的场景——"只读工作区部署"——指向容器化（只读 rootfs）或 CI 环境下的使用体验问题。虽然没有直接的用户评论引用，但从 PR 描述推断，此前用户若在非可写工作区运行 NullClaw，需要侵入式修改源码或手动复制库文件才能绕开默认路径限制。此次合入后，用户可通过 YAML 配置直接指定数据库位置，降低了部署摩擦。整体未发现用户满意度的负面信号。

---

## 8. 待处理积压

当前无长期未响应的重要 Issue 或 PR。所有已提交 PR 都及时获得处理，无陈旧的待合并变更。维护节奏健康，无需额外关注。

---

> **健康度评估：** `🟢 良好` — 无阻塞问题，变更质量高，社区虽静但属正常波动。建议观察接下来 3-5 天的 Issue 与 PR 活跃度，若持续低迷可考虑主动引导讨论（如 roadmap 公示、RFC 征集）。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

IronClaw 项目保持高强度迭代状态，过去 24 小时活跃度处于近期高位：共 25 条 Issue 更新（16 条新开/活跃、9 条关闭）和 46 条 PR 更新（23 条待合并、23 条已合并/关闭）。核心焦点集中在 **v1.3.0 自动化可靠性（epic #6879）** 的结构化执行规范落地、**unbound-turns 无界对话模型**的切换完成，以及 QA 周期暴露的 Slack/Telegram 集成缺陷修复。值得注意的是，此前悬置的 **v1.2.0 发布线已合并回 main**（PR #7657），标志着 1.2 版本修复正式进入主线。项目健康度良好 — 关键 PR 均标注 `risk: low/medium` 且配有回归检查，自动化测试覆盖率在持续加固。

---

## 2. 版本发布

**无新版本发布。**

> 相关动态：PR #7657 已完成 `release/2026-08-11` 分支合并回 main，包含 1.0/1.1→1.2 启动迁移、Windows 文件系统/冒烟修复、Windows JSON 输出清理等已验证修复。PR #7663（打开中）正在将 1.2 修复**前向移植**到当前 main（含 thread-index 投影修复、Windows 可靠性改进等），标志着 1.2 修复与主线已趋于同步。

---

## 3. 项目进展

今日合并/关闭的核心 PR 涉及多条关键链路，整体项目在**自动化可靠性、存储性能、认证兼容性和前端 UI 规范化**四个方向均有实质推进：

### 🟢 自动化执行契约（v1.3.0，epic #6879）
- **PR #7652（已关闭）** — 完成生产级 DB 写压力量测：一个标准化 agent turn（10 次内置工具调用 + 11 次模型尝试）的精确写行数已被记录，为后续优化提供基线。
- **PR #7650（待合并）** — 语义执行结果持久化：仅在触发器 worker 持久化成功后才评估结构化自动化结果，替换了原先隐藏的一秒级存储协调器。
- **PR #7651（待合并）** — 确定性无结果抑制：要求新触发器明确选择 `deliver` 或 `suppress_when_nothing_to_report`，模型返回 `[SILENT]` 令牌实现精确抑制。
- **PR #7663（待合并）** — 1.2 修复前向移植至 main，填补发布线间隙。

### 🟢 无界对话（Unbound Turns）切换
- **PR #7562（已关闭）** — unbound-turns 基础设计文档 + phase-1 实施落地（prepared-context 接受门、unbound 运行通道、内核绑定引用删除）。
- **PR #7634（待合并）** — 完成切换的最终阶段：覆盖全部 #7633 文档中的后续项，并执行 71 条款一致性审计。

### 🟢 存储性能优化（epic #7591）
- **PR #7628（待合并）** — 移除心跳日志写入 churn：停止追加 `ProcessJournalKind::Heartbeat` 行，心跳租约时间戳保留在物化进程行上，附带 15 秒 turn 运行器超时。这是 DB 写压力缩减的关键第一步。

### 🟢 认证与扩展修复
- **PR #7668（已关闭）** — 扩展提供商认证诊断：保留 GitHub provider 错误详情（401 不再坍缩为通用重认证提示），贯穿 WASM→ABI→能力→运行时/持久化门→拒绝/恢复全链路。
- **PR #7665（已关闭）** — 支持 origin-scoped 托管 MCP OAuth：接受 RFC 9728 resource 为同一源 `/mcp` 端点的形状，保留 OAuth 元数据穿透 DCR/token 交换/刷新链路。

### 🟢 前端 UI 规范化（正在推进）
- **PR #7569（已关闭）** — 引入共享 `SearchField` 组件，统一设置/扩展注册表/线程侧栏的搜索输入。
- **PR #7565（已关闭）** — 修复 WebUI 公开路由上的 i18n 覆盖缺失（Admin→Configuration 等多处硬编码英文串）。
- **PR #7520（已关闭）** — 退役 v1/engine-v2 遗留前端代码的 epic 已关闭。

---

## 4. 社区热点

本次观察窗口内未出现评论数超过 1 的活跃议题（多数 Issue 评论数标明为 0，但包含追踪型 epic）。按讨论浓度与业务影响，以下内容值得关注：

### 🔥 Issue #6879 — 自动化运行"碰运气"问题（epic，v1.3.0）
> 链接：[#6879](https://github.com/nearai/ironclaw/issues/6879)

这是当前项目**最核心的 epic**：同一个存储的 prompt 有时正常执行、有时产出为空，尤其在 DeepSeek V4 Flash 上表现明显。2026-07-30 的流水线审计结论是**结构性缺陷，而非模型噪声** — 触发器触发被当作普通交互式聊天回合执行。该 epic 已衍生出 6+ 个子任务（#7644、#7645、#7646、#7647 等），涵盖模型 pinning、preflight 授权、确定性抑制、语义结果评估等。**背后诉求**：让无人值守自动化具备与交互模式同等的可靠性保障，消除调度执行的随机性。

### 🔥 PR #7634 — unbound-turns 切换完成（XL 级）
> 链接：[#7634](https://github.com/nearai/ironclaw/pull/7634)

71 条款一致性审计 + 完备的 follow-up 文档实现，代表会话模型从"绑定引用"向"prepared-context"的完整迁移，是近期架构级变更的核心交付。

### 🔥 PR #7456 — Reborn 持久化存储 profile 无关化（XL 级，打开中）
> 链接：[#7456](https://github.com/nearai/ironclaw/pull/7456)

将所有 Reborn profile 直接挂载于 `IRONCLAW_REBORN_HOME` 下的 `state/`、`system/`、`workspaces/` 等与 profile 无关的命名空间，并持久化安全信封以防止重启触发的 profile 切换削弱租户/工作区隔离。该 PR 已打开 5 天，属长跑型架构改造。

---

## 5. Bug 与稳定性

以下按严重程度排列：

### 🟥 P2 — QA 周期集中暴露的三项实际缺陷（均有修复已关闭）
| 缺陷 | 表现 | 修复状态 |
|---|---|---|
| **[Slack UI 显示"Reconnect/Finish Setup"**](https://github.com/nearai/ironclaw/issues/7660) | 连接实际有效但界面错误展示未完成状态 | ✅ [PR #7666](https://github.com/nearai/ironclaw/pull/7666) 已关闭 |
| **[MP4 附件 Telegram 上传失败**](https://github.com/nearai/ironclaw/issues/7662) | `invalid_value (attachments.mime_type)` 即使识别为 video/mp4 | 尚待对应 PR |
| **[扩展状态跨用户泄漏**](https://github.com/nearai/ironclaw/issues/7659) | 其他用户的扩展出现在当前用户的 Registry 页面上 | 尚待对应 PR |

### 🟨 P2 — Telegram 双因素认证/登录码投递问题
- **[2FA 门识别缺陷](https://github.com/nearai/ironclaw/issues/7658)**（已关闭）：手机模式登录码未到达已登录手机上的 Telegram 服务聊天，涉及 `auth.sendCode` → `PHONE_MIGRATE_1` → 重发成功但用户收不到。✅ 修复 PR #7658 已关闭 — 已识别迁移 DC 上的 2FA 门并告知登录码位置。
- **[登录码提示应反映 sentCode.type_](https://github.com/nearai/ironclaw/issues/7667)**（打开）：原始 TL 发送路径的提示信息需依据 `sentCode.type_` 动态调整。

### 🟨 功能性问题
- **[DOCX 文件损坏](https://github.com/nearai/ironclaw/issues/6869)**（已关闭）：生成的 DOCX 无法用 Word 打开 — 已解决，属于较早期（7/29）但值得记录。

### 🟩 覆盖面加固
- **[CI 覆盖率下限重新标定](https://github.com/nearai/ironclaw/pull/7655)**（已关闭）：Slack/Telegram 集成测试覆盖率观察值与门禁下限对齐，防止 CI 假红。

---

## 6. 功能请求与路线图信号

### 明确纳入 v1.3.0 的新功能（来自 epic #6879 衍生）
| Issue | 功能 | 信号强度 |
|---|---|---|
| [#7647](https://github.com/nearai/ironclaw/issues/7647) | 确定性 no-delivery 结果（`[SILENT]`） | 对应 PR #7651 已打开 |
| [#7646](https://github.com/nearai/ironclaw/issues/7646) | 自动化预算授权与 standing approval 租约获取 | 需求明确，尚未见 PR |
| [#7645](https://github.com/nearai/ironclaw/issues/7645) | 每个自动化契约 pin 一个 LLM 模型 profile | 需求明确，尚未见 PR |
| [#7644](https://github.com/nearai/ironclaw/issues/7644) | 调度前一次性验证结构化自动化 | 依赖 #7193 手动触发基础，需求明确 |

### 可插拔 Memory（v1.3.0 信号）
- **[Issue #7664](https://github.com/nearai/ironclaw/issues/7664)** — 通过配置绑定外部记忆系统，Mnesis Core 为首个消费者。对应 **PR #7661**（打开中）已实现 MCP-backed memory provider。**趋势**：架构正从工厂硬编码转向配置驱动，为第三方记忆接入铺路。

### 增强请求（尚未见 PR）
- **[Slack→Console 桥接](https://github.com/nearai/ironclaw/issues/7656)**（已关闭）：将 Slack 回复与 Console 线程/运行关联，含深链与运行元数据 — 已关闭但可能以其他形式落地。
- **[ACP 执行器](https://github.com/nearai/ironclaw/issues/7624)**（打开，v1.3.0 范围）：claude-code 作为 loop 的 dev-only harness — 对应 **PR #7648**（打开，experimental）已实现基础路由框架。

### 前端一致性（观察窗口内多项）
- **[Issue #7639](https://github.com/nearai/ironclaw/issues/7639)** — 共享 `InlineNotice` 组件（info/success/warning/danger 色调）
- **[Issue #7637](https://github.com/nearai/ironclaw/issues/7637)** — 设计系统组件边界类型化（显式 prop types）
- **[Issue #7638](https://github.com/nearai/ironclaw/issues/7638)** — 线程删除失败提示从 `window.alert()` 迁移到全局 toast

---

## 7. 用户反馈摘要

### 真实用户痛点
1. **自动化"忽好忽坏"**（#6879）：用户反馈同一个 prompt 有时正常、有时产出空，且小模型（DeepSeek V4 Flash）上更明显 — 指向模型与执行框架的耦合问题，社区预期的是"写一次、跑得稳"。

2. **DOCX 生成不可靠**（#6869）：用户 Davin Basi 用 IronClaw 生成标注版 NDA 失败 — 与 ChatGPT/Claude 的"开箱即用"能力形成对比，暴露知识文档生成管线的差距。该案已有两次失败记录（协议违规中断 + 文件损坏）。

3. **Slack/Telegram 连接体验混淆**（#7660、#7658）：界面显示"连接未完成"但实际功能正常；登录码未到达预期位置 — 直接影响新用户引导和无摩擦 onboarding。

4. **注册扩展可见性**（#7659）：用户安装的扩展在他人账号上可见 — 触点包括多租户边界问题，安全敏感度较高。

### 满意点
- WebUI i18n 覆盖率修复、共享组件规范化（#7565、#7569）等维护性改进已关闭 — 前端技术债正在被系统化清理。

---

## 8. 待处理积压

### ⚠️ 长期未响应的功能请求

| 项目 | 创建时间 | 天数 | 备注 |
|---|---|---|---|
| [**#7183** — 每用户 LLM 模型选择](https://github.com/nearai/ironclaw/issues/7183) | 2026-08-04 | 11 天 | **已关闭** 💡 — 用户级模型选择曾为 admin-only，社区 Champions 小组提出诉求。从关闭状态看可能已通过其他途径（如 1.3.0 自动化的模型 pinning）部分满足，但建议确认是否真正交付。 |

### ⚠️ 长时间未合并的 PR（打开中 > 7 天）

| PR | 打开天数 | 风险/规模 | 阻塞点预判 |
|---|---|---|---|
| [**#7456**](https://github.com/nearai/ironclaw/pull/7456) — 持久化存储 profile 无关化 | 5 天 | XL / medium | 涉及沙箱+CI+文档+依赖多作用域，等待完整评审 |
| [**#7379**](https://github.com/nearai/ironclaw/pull/7379) — docs-live 分支部署公共文档 | 8 天 | L / medium | 文档发布与 release 同步机制，需 release 流程稳定后合入 |
| [**#7378**](https://github.com/nearai/ironclaw/pull/7378) — doc-fact 契约测试 | 8 天 | L / low | 增量验证 CLI/manifest/Responses 文档真值，等待测试基础设施稳定 |
| [**#7255**](https://github.com/nearai/ironclaw/pull/7255) — APDD 治理工具包评估 | 10 天 | XL / low | 纯文档，等待治理层决策 |

---

*本日报基于 2026-08-15 00:00 UTC 前 24 小时的 GitHub 事件数据生成。所有链接均为原始 GitHub Issue/PR 地址。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-15

> 数据统计周期：2026-08-14 至 2026-08-15 | 数据来源：GitHub API


## 1. 今日速览

LobsterAI 项目昨日活动量处于**高位**：共处理 27 条 PR（22 条已合入/关闭），发布 1 个新版本（2026.8.14），另有 2 条新 Issue 提交。**合并节奏显著提速**——多条 `[area: cowork]` 与 `[area: renderer]` 的 UI/交互修复源自同一核心维护者（fisherdaddy）在一日内连续提交并合并，说明团队正处于集中迭代窗口期。需注意两条 PR（#2491 与 #2483）为同一技能键名修复的重复提交，合并后需关注后续处理。Issue 侧活跃度较低，仅 2 条新增，其中一条为低质量反馈。


## 2. 版本发布

### LobsterAI 2026.8.14（发布于 2026-08-14）

本次发布包含 3 项已记录变更，均来自侧边栏（sidebar）功能模块：

| 变更 | 说明 | PR |
|------|------|-----|
| `feat(sidebar)` | 支持签到（check-in）与横幅轮播（banner carousel） | [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) |
| `feat(sidebar)` | 新增多智能体任务活动筛选器 | [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) |
| `feat(sidebar)` | 侧边栏增强（内容截断，详见 release notes） | — |

**破坏性变更**：暂未发现。**迁移注意**：Release PR #2498（`Release: 2026.7.30`）亦于今日合入 main，涉及 67 commits、264 个文件变更（+24,736/−4,253），引入 **Team Edition 账户与配额流程**，并对 **Skills 与 Connectors 体验**做了重构。建议下游使用者关注这两个模块的配置格式变化。


## 3. 项目进展

今日合入的 PR 主要集中在以下几个方面：

**核心功能修复（OpenClaw Skills 开关失效）** — 两个 PR（[#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) 与 [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483)）修复了同一问题：OpenClaw 通过 `resolveSkillKey()` 即 frontmatter 名称解析 skills.entries 覆盖项，而 LobsterAI 此前按目录派生 ID 写入，目录名与 frontmatter 名不一致时 UI 技能开关静默失效。两 PR 均已合入，建议维护者确认无冲突。

**协作（Cowork）交互修复** — 多条由 `fisherdaddy` 提交的修复已于今日合入：
- [PR #2499](https://github.com/netease-youdao/LobsterAI/pull/2499)：修复 turn 进程在会话暂停期间（如 `sessions_yield` 后）被过早折叠成空时长的问题，现要求有答案块后才折叠
- [PR #2496](https://github.com/netease-youdao/LobsterAI/pull/2496)：修复徽章弹窗超出视口且可能被后续消息遮挡的问题
- [PR #2490](https://github.com/netease-youdao/LobsterAI/pull/2490)：浏览器注解截图现以编号附件卡片形式展示，并可在独立的 artifact 面板中查看

**UI/渲染层改进**：
- [PR #2495](https://github.com/netease-youdao/LobsterAI/pull/2495)：默认 UI/代码字体整体调大，含一次性迁移逻辑
- [PR #2493](https://github.com/netease-youdao/LobsterAI/pull/2493)：会话导出图片与卡片切换 UI 修复
- [PR #2494](https://github.com/netease-youdao/LobsterAI/pull/2494) 与 [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492)：账户信用额度图标样式与颜色对齐

**主要版本合并**：[PR #2498](https://github.com/netease-youdao/LobsterAI/pull/2498) 将 `release/2026.7.30` 分支（67 commits，+24,736/−4,253）合入 main，引入 Team Edition 功能。


## 4. 社区热点

今日社区讨论整体平静，评论数均较少，无爆发性讨论。相对活跃的条目：

- **[Issue #2489 "快更新v4pro！"](https://github.com/netease-youdao/LobsterAI/issues/2489)**（新开，1 评论）：用户催促 v4 Pro 更新，反映出部分用户对最新模型版本的急切需求。该类反馈通常意味着社区对模型能力的敏感度高，值得产品侧关注。

- **[Issue #1154（补测试）](https://github.com/netease-youdao/LobsterAI/issues/1154)**（更新于今日，1 评论）：该 Issue 虽创建于 3 月，但有新评论。内容涉及为 `commandSafety` 和 `coworkMemoryJudge` 两个核心安全模块补充测试，作者为中文社区贡献者，可见测试基建仍有关注热度。

> **分析**：今日无高热讨论；社区对版本迭代速度的敏感度高于对具体功能的讨论。


## 5. Bug 与稳定性

今日无新增 Bug 报告。活跃的稳定性相关工作：

| 严重度 | 问题 | 状态 |
|--------|------|------|
| 🟢 低 | [PR #2499](https://github.com/netease-youdao/LobsterAI/pull/2499) 修复 turn 进程被误折叠为空时长（显示为失败状态，实际未失败） | ✅ 已合入 |
| 🟡 中 | **OpenClaw 技能开关静默失效**（目录名与 frontmatter 名不一致导致 UI 开关无效果） | ✅ 已修复（[#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) 与 [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483)） |
| 🟢 低 | 徽章弹窗超出视口/被后续消息遮挡 | ✅ 已修复（[#2496](https://github.com/netease-youdao/LobsterAI/pull/2496)） |
| 🟢 低 | 字体默认值调整（一次性的，非回归） | ✅ 已合入（[#2495](https://github.com/netease-youdao/LobsterAI/pull/2495)） |

**值得关注**：[PR #1153](https://github.com/netease-youdao/LobsterAI/pull/1153)（修复 `buildOpenAIChatCompletionsURL` 处理 Gemini `/v1` 路径时的拼接错误）已开放 **4.5 个月**未合并。该 Bug 会导致 Google Gemini 用户在 OpenAI 兼容模式下请求 URL 格式错误，属功能性缺陷，建议维护者尽快处理。


## 6. 功能请求与路线图信号

- **隐藏侧边栏广告横幅（永久）** — [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（OPEN，待合并）新增 Settings → General 中永久隐藏侧边栏广告的选项，回应 Issue #2342。用户此前只能临时关闭单条横幅。该 PR 已开放近 1 个月，若无设计冲突建议尽快合入。

- **会话内页内搜索（Ctrl+F）** — [PR #1155](https://github.com/netease-youdao/LobsterAI/pull/1155)（OPEN，stale）：实现会话详情页页内搜索，基于 TreeWalker + CSS Custom Highlight API。该功能已开放 4.5 个月，功能完整度高，建议纳入近期评审。

- **标记会话为未读** — [PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228)（CLOSED/stale）：已实现中英文文案与 Redux 扩展，但于今日被系统标记关闭。若因长期未合入被系统自动关闭，建议维护者评估是否重新开放。

- **AgentCreateModal 增强** — [PR #1231](https://github.com/netease-youdao/LobsterAI/pull/1231)（CLOSED/stale）：增加 Escape 关闭与表单重置逻辑，属小型 UX 改进，同样被标记关闭。


## 7. 用户反馈摘要

- **[#2489](https://github.com/netease-youdao/LobsterAI/issues/2489)（快更新v4pro！）**：用户明确表达对 v4 Pro 模型支持的急切需求，字里行间透着“等不及了”的语气。这暗示模型能力是社区当前的核心关注点，版本发布节奏直接影响用户满意度。

- **[#1154](https://github.com/netease-youdao/LobsterAI/issues/1154)（补测试）**：中文社区开发者主动指出 `commandSafety.ts` 与 `coworkMemoryJudge.ts` 零测试覆盖的风险——前者一旦误判可能导致 AI 静默执行 `rm -rf` 等破坏性命令，后者是记忆写入关键门卫。这是高质量的技术反馈，也道出了用户对安全性的深层关注。

- **OpenClaw 技能开关失效（[#2483](https://github.com/netease-youdao/LobsterAI/pull/2483)）**：问题表现为 UI 开关“静默无效”，用户不会看到任何报错，只发现技能未生效。此类问题对信任度伤害较大，所幸已在今日修复。


## 8. 待处理积压

| 类型 | 编号 | 标题 | 搁置时长 | 建议 |
|------|------|------|----------|------|
| PR | [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | 修复 Gemini `/v1` 路径 URL 拼接错误 | 4.5 个月 | **影响功能可用性**（Gemini 用户调用失败），建议优先评审 |
| PR | [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | 会话内页内搜索（Ctrl+F） | 4.5 个月 | 功能完成度高，建议纳入路线图 |
| PR | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 永久隐藏侧边栏广告横幅 | 25 天 | 直接回应社区诉求（#2342），建议加速合入 |
| PR | [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) | 依赖升级：rimraf 5→6 | 5 天 | Dependabot 例行升级，无风险 |
| PR | [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) | 依赖升级：vite 5→8 | 5 天 | 跨大版本，建议留意构建兼容性 |
| Issue | [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) | commandSafety / coworkMemoryJudge 补测试 | 4.5 个月 | 涉及核心安全模块，建议响应并开放讨论 |

---

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）

- **优势**：合并效率高、核心维护者活跃、版本发布节奏稳定
- **风险**：多个质量不错的社区 PR 长期搁置（4.5 个月未响应）、陈旧 PR 被系统自动关闭可能挫伤贡献者积极性、依赖升级跨度过大（vite 5→8）需审慎验证
- **关注**：两条相同修复目的的 PR（#2491/#2483）同批合入，建议确认无相互覆盖；Issue #2489 反映的 v4 Pro 支持需求值得产品侧给出官方回应

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：** 2026-08-15  
**数据窗口：** 过去 24 小时（截至 2026-08-15 23:59 UTC）  
**数据来源：** github.com/moltis-org/moltis


## 1. 今日速览

过去 24 小时 Moltis 项目保持中等活跃度：无新 Issue 产生或关闭，2 条 PR 处于待合并状态（其中 1 条为今日新提交），无新版本发布。今日核心动作为 PR [#1195](https://github.com/moltis-org/moltis/pull/1195) 提交的 Slack 原生任务卡片支持，叠加本周早前提交的持久化连接器 PR [#1190](https://github.com/moltis-org/moltis/pull/1190)，两者共同指向一个清晰的演进方向——**从纯对话式助手向事件驱动的跨平台任务管理基础设施转型**。值得关注的是两条 PR 均来自同一作者（penso），社区外部贡献活跃度偏低，长期看存在维护集中度风险。整体项目健康度良好，但 Issue 积压状态与合并节奏需要关注。


## 3. 项目进展

今日无 PR 被合并或关闭，以下为正处于待合并状态的两条关键 PR：

**① Slack 原生实时任务卡片（今日新提交）** — [PR #1195](https://github.com/moltis-org/moltis/pull/1195)

- 实现渠道中立的工具生命周期更新机制，在既有响应流中渲染为 Slack 原生 plan/task 卡片
- 通过**不透明 per-run ID** 和仅注册规范化工具名保护卡片隐私，失败流中自动清理终端错误
- 扩展原生流式交互能力

**② 持久化日历/频道/邮件连接器（待合并第 4 天）** — [PR #1190](https://github.com/moltis-org/moltis/pull/1190)

- 新增 provider-neutral 连接器持久化层：原子快照、调度、投影、有界本地全文搜索
- 新增只读 CalDAV、Gmail、Himalaya v2 及可复用的频道历史数据集，采用 provider-owned schemas，不拷贝凭据
- 新增 provider-scoped 信任机制

**综合评估：** 两条 PR 合计引入约 15 项新能力模块，覆盖连接器持久化、跨平台交互、隐私保护与搜索，是 Moltis 向**生产级个人 AI 基础设施**迈进的重要一步。若均获合并，项目能力边界将显著拓宽。


## 4. 社区热点

今日社区讨论热度较低——24 小时内无新 Issue，无评论互动数据（评论数均为 undefined），无新增 👍 反应。最受关注的两条 PR 均来自核心维护者，尚未引发外部讨论。

从 PR 内容来看，社区（或至少维护者团队）当前的核心诉求是：**在不牺牲用户隐私的前提下，将 AI 助手从纯文本对话嵌入日常高频工具（Slack 消息流、日历、邮箱）** 。PR [#1195](https://github.com/moltis-org/moltis/pull/1195) 中对 "card privacy with opaque per-run IDs" 的明确设计，侧面反映了用户对 AI 操作可见性和可控性的潜在关注。


## 5. Bug 与稳定性

今日报告 Bug：**0 条**。

无崩溃、回归或稳定性问题报告。项目当前处于功能推进期，稳定性风险主要来自两条待合并 PR 的大规模代码变更（连接器持久化层 + Slack 原生集成），建议维护者在合并前进行充分的回归测试。


## 6. 功能请求与路线图信号

24 小时内无新功能请求提交。但结合两条待合并 PR 的内容，可以清晰预见下一版本的能力方向：

| 信号来源 | 功能方向 | 纳入可能性 |
|---------|---------|-----------|
| PR #1190 | 持久化连接器框架（原子快照/调度/投影） | 高——核心基础设施 |
| PR #1190 | 只读 CalDAV 日历集成 | 高 |
| PR #1190 | Gmail 只读集成 | 高 |
| PR #1190 | Himalaya v2 邮件支持 | 中高 |
| PR #1195 | Slack 原生任务卡片渲染 | 高 |
| PR #1195 | 不透明 per-run ID 隐私机制 | 高——安全关键设计 |

**推测：** 两条 PR 很可能同批进入下一版本（或先后紧邻发布）。合并后 Moltis 将具备跨 Slack/邮件/日历的持久化任务管理能力，路线图指向 "AI 助手作为统一任务控制平面" 的定位。


## 7. 用户反馈摘要

由于过去 24 小时内无新的 Issue 评论或讨论，无法提取新的用户反馈。基于待合并 PR 的设计上下文可做如下推断：

- **潜在用户痛点（由 PR 设计反向推导）：** ① AI 任务状态在对话流中不可视——PR #1195 的任务卡片直接解决此痛点；② 连接器配置/认证易丢失——PR #1190 的持久化层 + provider-owned schemas 定位精准；③ 隐私顾虑——per-run ID 设计回应了 "AI 何时在替我做什么" 的透明度需求。
- **使用场景扩展：** 从纯对话扩展到 Slack 工作流、日历管理、邮件检索，覆盖日常高频场景。


## 8. 待处理积压

以下为值得关注但尚未合并/响应的 PR：

| 编号 | 标题 | 等待时长 | 优先级建议 |
|------|------|---------|-----------|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | Add durable calendar, channel, and email connectors | 4 天 | **高**——核心能力扩展，涉及 15+ 个新模块，建议尽快安排 Review 并启动回归测试 |
| [#1195](https://github.com/moltis-org/moltis/pull/1195) | Add Slack native live task cards | 1 天 | **中高**——依赖 #1190 的 channel-history 能力，建议协同审查 |

**维护者提醒：** 两条 PR 同属大规模架构级变更且出自同一作者，建议在合并前：① 明确 #1190 的 API 稳定性承诺（是否 alpha/beta）；② 检查 #1195 对现有响应流的兼容性（是否有 breaking change）；③ 考虑为两条 PR 各自的 connector scope 增加测试覆盖率要求。若后续 7 天无外部 reviewer 参与，建议主动在社区渠道（Discord/ Discussions）征集反馈。


> **报告说明：** 本报告基于 GitHub 公开数据自动生成。由于数据窗口内无 Issue 互动，部分板块（Bug 与稳定性、用户反馈、社区热点）内容有限，已结合 PR 设计上下文做合理推断，并在相应位置标注。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-15

> 数据来源：GitHub (agentscope-ai/CoPaw) | 统计周期：2026-08-14 00:00 – 2026-08-15 00:00 UTC


## 1. 今日速览

过去 24 小时 CoPaw 仓库整体保持**高活跃度**：共产生 50 条 Issue 更新（新开/活跃 13 条，关闭 37 条）和 41 条 PR 更新（待合并 26 条，已合并/关闭 15 条）。**当日无新版本发布**（当前最新版本仍为 v2.1.0/2.0.1 线）。值得关注的是，本周 PR 合并/关闭率约 37%（15/41），另有 26 条 PR 处于待合入状态，**合并积压明显**，建议维护团队加快 Review 节奏。社区侧，用户对 MCP 工具兼容性、桌面端自动更新、模型 API 兼容性（Responses API）、以及多会话/后台运行等需求反馈集中且持续。新提交的 `skill-system` 动态加载 PR（#7033/#7031/#7029）和 `auto-title-sync` PR（#7032/#7030）显示了项目在技能生命周期管理和 UX 细节上的推进意愿。整体项目健康度**中等偏上**：社区活跃、PR 产出旺盛，但合并瓶颈和部分老 Issue 的关闭积压值得关注。


## 2. 版本发布

过去 24 小时内**无新版本发布**。当前最新版本停留在 v2.1.0（b4 测试版）和 v2.0.1 稳定线。值得关注的是，PR #6908 正在尝试将 `agentscope` 依赖升级至 2.0.6（目前为 2.0.4.post1），而 Issue #6612 已报告 `qwenpaw==2.0.1` 与 `agentscope==2.0.4.post1` 存在兼容性崩溃（消息类型变更 + 工具权限死锁），**建议用户在官方发布兼容性修复前谨慎升级 agentscope**。


## 3. 项目进展

过去 24 小时共有 **15 条 PR 被合并/关闭**（含关闭未合并），主要集中在以下方向：

- **技能系统（Skill System）重构启动**：社区贡献者 Ferrum360 提交了技能动态加载 + 自动卸载 + frontmatter 修复的三连 PR（[#7029](https://github.com/agentscope-ai/CoPaw/pull/7029)、[#7031](https://github.com/agentscope-ai/CoPaw/pull/7031)、[#7033](https://github.com/agentscope-ai/CoPaw/pull/7033)），其中 #7029（中文版）已关闭（可能被英文版 #7033 取代），#7031 已关闭、#7033 处于待合并状态。该系列 PR 引入了 `load_skill`/`unload_skill`/`check_skill_status` 工具链和每 5 轮自动卸载闲置技能的 `AutoUnloadHook`，是技能生态走向运行时管理的重要一步。
- **OneBot 渠道媒体本地化**：[#6715](https://github.com/agentscope-ai/CoPaw/pull/6715) 已合并，将 OneBot 入站图片/音频/视频/文件在进入 Agent 处理前统一解析并下载到本地托管存储，与 AgentScope 2.0 本地 DataBlock 管道对齐。
- **插件渠道交互式配置恢复**：[#6943](https://github.com/agentscope-ai/CoPaw/pull/6943) 已合并，恢复了插件渠道 `get_configurator()` 在交互式渠道配置流程中的支持（含临时 FastAPI 应用以加载插件 HTTP 路由）。
- **Whisper 安装文档**：[#2105](https://github.com/agentscope-ai/CoPaw/pull/2105) 已合并，为本地语音转文字（`--extras whisper`）补充了中英文安装说明。
- **MCP 重复数据修复已提交**：[#6969](https://github.com/agentscope-ai/CoPaw/pull/6969) 针对 #6958（FastMCP 返回 `structuredContent` 与 `content` 导致 tool result 重复写入）提交了修复，当前处于待合并状态。

项目整体在渠道适配、技能生命周期和文档层面有可见推进，但大型架构性 PR（如 #6302、#5992）仍未合并，核心进展节奏相对平稳。


## 4. 社区热点

| 排名 | Issue / PR | 评论数 | 状态 | 核心关注点 |
|:---:|---|---:|---|---|
| 1 | [#3045 自动获取模型为什么不可用](https://github.com/agentscope-ai/CoPaw/issues/3045) | 8 | CLOSED | 模型自动获取失败，涉及配置与版本 |
| 2 | [#2418 新增 skills-hub 管理页面](https://github.com/agentscope-ai/CoPaw/issues/2418) | 7 | CLOSED | 用户希望更快发现/下载主流 Skills |
| 3 | [#2846 桌面端自动更新 + 任务栏图标](https://github.com/agentscope-ai/CoPaw/issues/2846) | 6 | CLOSED | 桌面 UX：每次需卸载重装，图标错误 |
| 4 | [#2303 MiniMax check_connection() 404](https://github.com/agentscope-ai/CoPaw/issues/2303) | 6 | CLOSED | Anthropic 兼容 Provider 端点不兼容 |
| 5 | [#7010 缺少真正后台/守护模式](https://github.com/agentscope-ai/CoPaw/issues/7010) | 6 | CLOSED | SSH/脚本启动时命令卡住不返回 |
| 6 | [#6405 升级 2.0 后 MCP Tool not found](https://github.com/agentscope-ai/CoPaw/issues/6405) | 6 | CLOSED | MCP 工具名变更后无法找到 |
| 7 | [#7011 Console stop 取消活动飞书会话](https://github.com/agentscope-ai/CoPaw/issues/7011) | 5 | **OPEN** | 多 UI 会话 session 身份串扰 |
| 8 | [#3002 不兼容 OpenAI Responses API](https://github.com/agentscope-ai/CoPaw/issues/3002) | 5 | CLOSED | Azure OpenAI 网关返回 400 |

**分析与诉求**：今日热点呈现“模型接入”与“桌面体验”双主线。模型侧，用户对 **OpenAI Responses API 格式兼容**（#3002、#944、#2737）和 **MiniMax 等 Anthropic 兼容 Provider 的端点支持**（#2303）呼声高——这反映了企业网关接入和多元化模型服务的真实场景。桌面侧，**自动更新**（#2846、#3464）和**后台守护模式**（#7010）是高频痛点，用户在 Windows/macOS 上频繁手动卸载重装和 SSH 启动阻塞严重影响了自动化部署。此外，Issue #7011 暴露了一个**2.1.0 中 Console stop 请求可取消活动飞书会话**的跨会话身份串扰问题，涉及多 UI 会话并发场景，当前仍为 OPEN 状态，需要维护者重点关注。


## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高危（影响核心功能或数据）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#7011](https://github.com/agentscope-ai/CoPaw/issues/7011) | **2.1.0：Console stop 请求可取消活动中的飞书会话**，多 UI 会话间 session identity 串扰 | **OPEN** | 无 |
| [#6612](https://github.com/agentscope-ai/CoPaw/issues/6612) | qwenpaw 2.0.1 与 agentscope 2.0.4.post1 不兼容：主动消息 Msg.content 类型崩溃 + 工具权限死锁 | CLOSED | 建议关注 #6908 (agentscope 2.0.6 升级) |
| [#6951](https://github.com/agentscope-ai/CoPaw/issues/6951) | Scroll 压缩后重新进入会话，压缩前聊天记录不可见，仅显示 eviction index | CLOSED | 无 |
| [#6958](https://github.com/agentscope-ai/CoPaw/issues/6958) | 调用 FastMCP 编写的 MCP 时 tool result 文件写入两份重复数据（超过截断阈值时） | **OPEN** | [#6969](https://github.com/agentscope-ai/CoPaw/pull/6969) ✅ |

### 🟡 中危（影响特定功能或环境）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#7016](https://github.com/agentscope-ai/CoPaw/issues/7016) | 2.1.0 流式会话中 `/api/tool-calls/{id}/offload` 返回 404 "Tool call not found"，页面反复调用 | **OPEN** | 无 |
| [#7025](https://github.com/agentscope-ai/CoPaw/issues/7025) | QwenPaw Creator 插件安装后导致所有插件失效 | **OPEN** | 无 |
| [#6972](https://github.com/agentscope-ai/CoPaw/issues/6972) | Chrome 扩展 WebSocket 连接成功但发送 tab.create 命令即断开，属 browser 工具 JSON-RPC 实现 bug | CLOSED | 无 |
| [#6806](https://github.com/agentscope-ai/CoPaw/issues/6806) | qwenpaw-creator 插件在 Windows 上保存模型配置报 "Internal Server Error" | CLOSED | 无 |
| [#6405](https://github.com/agentscope-ai/CoPaw/issues/6405) | 升级 2.0 后 MCP 工具总是提示 Tool not found | CLOSED | 无 |
| [#6197](https://github.com/agentscope-ai/CoPaw/issues/6197) | QwenPaw Desktop 在 nvidia-smi 挂起时启动卡死（frozen binary） | CLOSED | 无 |

### 🟢 低危（体验 / 轻微缺陷）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7040](https://github.com/agentscope-ai/CoPaw/issues/7040) | UI 文案错别字："Stop Running" 写成 "Stopp Running" | CLOSED (invalid) |
| [#4832](https://github.com/agentscope-ai/CoPaw/issues/4832) | Windows 下执行 shell 命令时 cmd 窗口闪烁（缺 `CREATE_NO_WINDOW` 标志） | CLOSED |
| [#4731](https://github.com/agentscope-ai/CoPaw/issues/4731) | Edge/火狐浏览器启动失败，Edge 退出码 21（Windows 11） | CLOSED |


## 6. 功能请求与路线图信号

| 功能需求 | 来源 Issue(s) | 已有对应 PR | 可能纳入版本 |
|---|---|---|---|
| **Skills Hub 管理页面**（快速发现和下载主流 skills） | [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) | 无，但 #7033 技能动态加载为其前置 | 中期（需先完成技能动态加载） |
| **桌面端自动更新** | [#2846](https://github.com/agentscope-ai/CoPaw/issues/2846)、[#3464](https://github.com/agentscope-ai/CoPaw/issues/3464) | 无 | 待评估 |
| **后台/守护模式**（`qwenpaw app` 不阻塞终端） | [#7010](https://github.com/agentscope-ai/CoPaw/issues/7010) | 无 | 待评估 |
| **OpenAI Responses API 兼容**（或按 Provider 自定义请求适配） | [#944](https://github.com/agentscope-ai/CoPaw/issues/944)、[#3002](https://github.com/agentscope-ai/CoPaw/issues/3002)、[#2737](https://github.com/agentscope-ai/CoPaw/issues/2737) | 无，依赖上游 AgentScope | 待定（依赖 AgentScope 支持） |
| **Provider 无关的会话历史**（模型可在对话中自由切换） | [#2314](https://github.com/agentscope-ai/CoPaw/issues/2314) | 无 | 待定（依赖 AgentScope） |
| **对话中手动删除单条消息** | [#4001](https://github.com/agentscope-ai/CoPaw/issues/4001) | 无 | 待评估 |
| **会话拆分**（将部分对话转移至新会话） | [#4436](https://github.com/agentscope-ai/CoPaw/issues/4436) | 无 | 待评估 |
| **定时任务支持不投递**（heartbeat 输出抑制） | [#2554](https://github.com/agentscope-ai/CoPaw/issues/2554) | 无 | 待评估 |
| **/models 与 /model 对话内切换命令** | [#2763](https://github.com/agentscope-ai/CoPaw/issues/2763) | 无（[#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) 提供 per-session 覆盖） | 短期（#5992 已待合并） |
| **零配置本地 GGUF 模型运行**（内置 llama.cpp + 模型浏览器） | [#6433](https://github.com/agentscope-ai/CoPaw/issues/6433) | 无 | 较远 |
| **Computer Use 支持** | [#5551](https://github.com/agentscope-ai/CoPaw/issues/5551) | [#7037](https://github.com/agentscope-ai/CoPaw/pull/7037)（观察相关窗口表面） | 短期（#7037 已提交） |
| **自动标题同步**（auto-memory 联动刷新会话标题） | 无明确 Issue | [#7032](https://github.com/agentscope-ai/CoPaw/pull/7032)、[#7030](https://github.com/agentscope-ai/CoPaw/pull/7030) | 短期 |
| **子代理会话分组**（Console 中分组展示） | 无明确 Issue | [#7035](https://github.com/agentscope-ai/CoPaw/pull/7035) | 短期 |
| **媒体附件下载控制**（音频下载按钮） | 无明确 Issue | [#7036](https://github.com/agentscope-ai/CoPaw/pull/7036) | 短期 |
| **数据应用 DataPaw 运行时** | 无明确 Issue | [#6940](https://github.com/agentscope-ai/CoPaw/pull/6940)（first-time-contributor） | 中期 |

**信号判断**：#7033（动态技能加载）、#7032（自动标题同步）、#7035（子代理分组）、#7036（媒体下载）、#7037（computer-use 窗口观察）均为新鲜提交且相互独立，大概率随 v2.1.x 或 v2.2 进入主线。而 Responses API 和 Provider 中性会话历史两条线取决于上游 AgentScope 的演进，短期内不太可能落地。


## 7. 用户反馈摘要

**高频痛点（多 Issue 共现）**
- **桌面端更新体验差**：Windows 用户普遍反馈“卸载后再安装太麻烦”（#2846、#3464），有用户建议增加自动更新和正确显示 CoPaw 图标而非 Python 图标。
- **模型/API 兼容性困扰**：连接 Azure OpenAI 代理网关时 GPT-5.3 系列返回 400（#3002）；MiniMax Anthropic 兼容 API 的 `/models` 端点不支持导致 `check_connection()` 失败（#2303）；升级 2.0 后 MCP 工具提示 Tool not found（#6405），tool 命令格式从 `[mcp-key]__[tool_name]` 变化后仍无法找到工具。用户对“官方适配速度跟不上模型厂商 API 迭代”表示不满。
- **服务器/远程部署阻塞**：`qwenpaw app` 缺少 daemon 模式，SSH 或 nohup 启动时命令会一直挂住不返回（#7010），自动化运维场景（CI/CD、远程调度）无法直接使用。
- **长会话体验**：scroll 压缩后重新进入会话，压缩前的原始消息不可见，仅显示内部 eviction index，用户认为“上下文压缩应只影响模型输入，不应破坏用户可见的完整 transcript”（#6951）。

**正面信号**
- 用户对模型切换命令（`/models`、`/model`）有明确需求且附带点赞（#2763 获 👍2），说明 CLI 对话式模型管理是大家希望保留/加强的方向。
- 定时任务中“不投递”的需求（#2554）来自数据抓取通知场景，说明渠道集成已被真实业务使用。
- 社区贡献者多语言活跃（中英文高密度提问/修复并行），且出现多次 first-time-contributor PR（#6940、#5992、#2105），项目对新贡献者有一定吸引力。

**满意度评价**
- 大部分 Bug 在提交后数小时至数天内被关闭，反映了维护者的响应速度；但高优先级缺陷（#7011 多会话串扰、#7016 工具 404）仍处于 OPEN 且暂无受让人，存在响应空窗。另外 #7040（拼写错误）被标记 invalid，用户略有不耐（“速速改”），说明 UI 文案质量审查也应纳入版本门禁。


## 8. 待处理积压

> 以下为长期未响应、评论少但影响面较大的 OPEN 条目，提醒维护者留意。

| 类型 | 编号 | 标题 | 创建日期 | 存活天数 | 备注 |
|:---:|---|---|---:|---:|---|
| Issue | [#4436](https://github.com/agentscope-ai/CoPaw/issues/4436) | 支持将部分对话转移至新会话（会话拆分） | 2026-05-16 | 91 | 评论 2，无维护者回复；长对话治理刚需 |
| Issue | [#4001](https://github.com/agentscope-ai/CoPaw/issues/4001) | 支持在对话中手动删除单条消息 | 2026-05-02 | 105 | 4 条评论但无维护者回应；微信式交互需求 |
| PR | [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | Add per-session model overrides | 2026-07-12 | 34 | first-time-contributor，标记 Under Review 但一个月未合入，存在 review 瓶颈 |
| Issue | [#6819](https://github.com/agentscope-ai/CoPaw/issues/6819) | Channel tool 在需要审批时无提示 | 2026-08-08 | 7 | 涉及渠道工具调用，影响审批流可观测性 |
| Issue | [#6735](https://github.com/agentscope-ai/CoPaw/issues/6735)（推测） | — | — | — | 如需完整积压清单可进一步提取（今日快照展示已包含多数活跃项） |

---

*本日报由 CoPaw GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-15

> 数据覆盖时间窗口：2026-08-14 ~ 2026-08-15（基于最近更新/创建时间）

---

## 1. 今日速览

过去 24 小时 ZeroClaw 仓库保持高位活跃：33 条 Issue 更新（30 条活跃，3 条关闭）与 50 条 PR 更新（47 条待合并，3 条已合并/关闭）。当天有 5 个新 PR 提交（#10002、#10001、#9999、#9996、#9994），涉及 shell 命令防护、OAuth 支持、错误分类与配置校验等多个方向。值得注意的是，当前没有任何新的版本发布，且绝大部分活跃 PR 停留在 `needs-author-action` 状态——这意味着社区贡献意愿很强，但 **维护者审阅带宽可能是当前瓶颈**。另一显著信号是：v0.8.5 版本周期正在进行中（Tracker #9459），在发布前的稳定性收尾阶段，多个高风险 RFC（#8303、#7155、#9487 等）正处于决策队列中（见 #8692），预计未来两周将进入密集决策期。

---

## 2. 版本发布

过去 24 小时内无新版本发布。项目目前处于 v0.8.5 稳定化周期（Tracker: [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)，截止 8 月 30 日），8 月 4 日已完成特性冻结，当前阶段以 Bug 修复与稳定性为主。

---

## 3. 项目进展

过去 24 小时有 3 个 PR 被合并或关闭，是近期节奏较为平缓的一天。以下为已合并/关闭条目，从标题推断其贡献：

| PR | 状态 | 内容概要 |
|----|------|---------|
| [#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982) | **Issue 已关闭**（wontfix） | 外部提交的托管记忆提案（ViBo Cloud API）被驳回。释放信号：该项目被视为低优先级或与路线图不一致 |
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | **Issue 已关闭** | Telegram 流式流式工具调用进度功能完成闭环 |
| PR（未在 Top 20 中展示） | 已合并 | 合并的 PR 集中在小型修复领域，未涉及架构级变更 |

此外，当天有 5 个新 PR 提交，说明开发者的贡献意愿仍然强烈：

- **#9999**（vrurg）— [fix(compatible): classify output-limited terminal responses](https://github.com/zeroclaw-labs/zeroclaw/pull/9999)：将 `finish_reason: "length"` 分类为输出 token 限制的终止失败，与 #9421 呼应，是针对"不完整终端响应被误报为成功"问题的修复系列。
- **#9996**（Audacity88）— [fix(security): make action budget accounting atomic](https://github.com/zeroclaw-labs/zeroclaw/pull/9996)：修复并行调用可能绕过 `max_actions_per_hour` 限制的并发问题。
- **#10002**（JordanTheJet）— [fix(tools): accept camelCase segments in google_workspace validation](https://github.com/zeroclaw-labs/zeroclaw/pull/10002)：修复 Google Workspace 工具因 camelCase API 标识而被误拦截的问题。
- **#10001**（JordanTheJet）— [fix(tests): gate non-UTF-8 browser path fixtures to Linux](https://github.com/zeroclaw-labs/zeroclaw/pull/10001)：修复 Windows 上测试失败（与 #7462 相关）。
- **#9994**（Audacity88）— [feat(zerocode): add transcript copy context menu](https://github.com/zeroclaw-labs/zeroclaw/pull/9994)：ZeroCode UI 增加复制菜单功能。

**总体判断**：项目处于 v0.8.5 稳定化阶段，社区 PR 提交集中在 bug 修复层面，符合冻结期的预期节奏。架构级工作（RFC 审阅）仍集中在 Issue 层面。

---

## 4. 社区热点

### 4.1 最活跃讨论 — RFC: Goal mode v1（#8303）

- **链接**: [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（22 条评论，👍 1）
- **核心诉求**: ZeroClaw 需要一种持久机制，让 Agent 在跨多轮对话中追索有界用户目标。该 RFC 建议引入"bounded foreground Matrix work"模式。作者明确提出应将**重启交接（restart handoff）**、**广播通道接收（broad channel admission）**、**Web 集成**和**异步子任务执行**拆分为独立阶段，从而避免首次交付范围过大。
- **分析**: 这是 ZeroClaw 从"对话型 Agent"向"任务型 Agent"演进的关键架构提案，反映了用户对**长期运行任务** 的强烈需求。

### 4.2 高热度讨论 — 高风险 shell 命令确认层级（#7155）

- **链接**: [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（20 条评论，状态: accepted）
- **核心诉求**: 引入 Claude Code 风格的命令策略——`allow/ask/deny` 三级模式，为高风险 shell 命令提供每次执行的确认层级。2026-08-05 已更新至 Revision 3，范围已收窄至 shell 策略契约。
- **分析**: 这是社区对 Agent 安全性的直接诉求，持续受到关注已超过 2 个月。相关领域有多个关联 PR（#9839、#9996）已在实现阶段。

### 4.3 关注度上升 — Chat Completions 协议支持（#8603）

- **链接**: [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（19 条评论）
- **核心诉求**: 使 ZeroClaw 兼容 OpenAI Chat Completions 协议，从而让 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等现成客户端可以直接连接。
- **分析**: 该项目能显著降低 ZeroClaw 的接入门槛（从"定制 SDK"到"标准协议"），属于**生态扩展的核心需求**。

### 4.4 值得关注的合并系列 — 插件 egress 基础（#9137 + #9580 + #9126）

- **链接**: [PR #9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) | [PR #9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) | [PR #9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)
- **背景**: 三个 PR 共同构建插件化的**网络出口策略基础**——将地址分类原语移入共享的 `net_guard` 模块，为浏览器工具、Web 工具和 Matrix 集成的统一出口防护奠定基础。
- **状态**: 均为 `needs-author-action`，等待作者响应审阅意见。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|---------------|
| **S1** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | **不完整终端响应被误报为成功**：provider 可在未给出可信最终答案时结束回合，而 runtime/delegation 仍向调用者呈现成功 | ✅ **已有修复**：[PR #9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999)（8月14日提交，分类 `finish_reason: "length"`），另见 [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) 为 Git-stacked 前置 PR |
| **S2** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | **Windows 74 个测试失败**：Unix-only 命令、路径语义、控制台编码。CI 仅跑 Linux 所以未捕获 | ⚠️ 部分处理：[PR #10001](https://github.com/zeroclaw-labs/zeroclaw/pull/10001) 修复了浏览器路径 fixture 问题，但整体修复仍需推进 |
| **S2** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | **高熵检测器错误遮蔽 Solana 钱包地址**，且 `high_entropy_tokens=false` 无法禁用该行为 | ❌ 暂无 fix PR |
| **S2** | [#9759](https://github.com/zeroclaw-labs/zeroclaw/issues/9759) | **Quickstart 允许重复的 webhook 端口绑定**，导致运行时冲突 | ❌ 暂无 fix PR |
| **S3** | [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983) | **Fallback 模型（不支持视觉）错误报告错误原因**：未指明是视觉能力缺失 | ❌ 暂无 fix PR |
| — | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | cron 自定义 shell 测试在并行门控下触发 **ETXTBSY**，导致无关 PR 失败 | ❌ 暂无 fix PR，已影响 PR #9963 |
| — | [#9919](https://github.com/zeroclaw-labs/zeroclaw/issues/9919) | **Qdrant 在 builder-only 工厂中静默回退到 MarkdownMemory**，可能选错持久化层 | ❌ 暂无 fix PR |

---

## 6. 功能请求与路线图信号

### 6.1 高概率纳入 v0.9.0 的功能（已有 RFC + 实现 PR）

| 功能 | RFC/跟踪 | 实现 PR | 状态 |
|------|----------|---------|------|
| 高风险 shell 命令防护策略（allow/ask/deny） | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) 阻止直接拼写不可逆破坏命令 | PR 待 author 响应 |
| 原子化的 action budget 记账 | 关联安全管线 RFC [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) 原子化 max_actions_per_hour | 新提交，待审阅 |
| 可插拔入站认证与规范委托人 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（Rev 8, accepted） | — | 推进中 |
| 统一包/能力/配置/运行时状态目录 | [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) | — | accepted，规划中 |
| 运行时安全决策管线与限制性覆盖 | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)（Rev 6, accepted） | — | 推进中 |

### 6.2 社区提出但尚未被接受的功能请求

| 请求 | 链接 | 状态 | 分析 |
|------|------|------|------|
| **Discord 按角色授权** | [#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970) | in-progress | Discord 仅支持按用户 ID 授权，社区需要按角色管理 |
| **活跃 shell 方言注入系统提示** | [#9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788) | blocked | 依赖 shell 检测能力落地 |
| **Provider 分组的 Telegram /model 选择器** | [#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895) | accepted | 移动端可用性的直接改进 |
| **Agent 导出为便携包** | PR [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | `needs-author-action` | 已提交实现，支持跨安装迁移；XL 级变更，需仔细审阅 |

---

## 7. 用户反馈摘要

### 7.1 正面反馈信号

- **PR #9999** 的作者（vrurg）在收到 "错误分类" 问题（#9421）反馈后，仅用数小时就提交了修复 PR，体现了高效的社区-维护者协作反馈闭环。
- **PR #6663 关闭** 说明 Telegram 部分流式流媒体功能已经落地，该渠道的用户体验得到了实质性改进。

### 7.2 用户的痛点与诉求

- **移动端体验不佳**（[#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)）：Telegram 上通过文本命令切换模型在移动端较为繁琐；需要分组、分页的选择器。
- **误报/错误信息误导**（[#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983)）：视觉能力回退时，错误信息未能准确说明根因，用户很难定位问题。
- **安全边界过严/过松并存**（[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)）：高熵检测器会错误遮蔽 Solana 钱包地址，而 `high_entropy_tokens=false` 又无法在 channel 路径上禁用——说明安全功能在**开箱即用**与**灵活配置**之间仍需平衡。
- **Windows 平台二等公民**（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)）：74 个测试在 Windows 上失败，用户反馈 CI 只跑 Linux 且未覆盖 Windows。社区明确表达了对跨平台质量的期望。

### 7.3 外部商业提案被拒绝

- **Issue #9982**（ViBo 托管内存提案）以 `wontfix` 关闭。说明 ZeroClaw 的 memory 能力将保持自主建设路线。

---

## 8. 待处理积压

### 8.1 维护者决策队列（长期未决）

| 议题 | 链接 | 关键信息 |
|------|------|----------|
| **RFC: Goal mode v1** | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 22 条评论，创建于 6 月 24 日，活跃讨论中；已明确分阶段交付路径 |
| **RFC: 可插拔入站认证与规范委托人** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | Rev 8，目标 v0.9.0 security milestone |
| **RFC: Chat Completions profile** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 19 条评论，待 maintainer 审阅 |
| **Security posture/credential boundaries** | [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 已接受，未开始实现 |
| **统一目录契约** | [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) | 已接受，等待里程碑排期 |
| **有级联的产品遥测** | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | 待维护者审阅 |

> 以上指令集中追踪于 **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（维护者决策队列 Tracker）**

### 8.2 需要 Author 行动的 PR（长期待响应）

| PR | 等待时长 | 状态标签 |
|----|----------|----------|
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)（Matrix 单消息进度草稿） | 48 天 | `needs-author-action`, XL 级 |
| [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137)（共享 egress 策略基础） | 28 天 | `needs-author-action`, XL 级 |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)（验证类型化实例配置） | 28 天 | `needs-author-action`, XL 级 |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)（支持 Anthropic 存储的 OAuth 配置文件） | 20 天 | `needs-author-action`, XL 级 |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)（历史截断事件中的令牌核算） | 12 天 | `needs-author-action`, XL 级 |
| [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839)（阻止不可逆破坏命令） | 8 天 | `needs-author-action`, S 级 |

> ⚠️ 多个 PR 需要维护者跟进，尤其 `needs-maintainer-review`（如 [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) 已等待超过 30 天）。这些 PR 覆盖了安全、稳定性等关键领域，建议维护者优先安排审阅排期。

---

## 项目健康度综合评估

| 维度 | 评级 | 说明 |
|------|------|------|
| **社区活跃度** | 🟢 活跃 | 日均 30+ Issue 更新、50+ PR 更新，贡献者稳定输出 |
| **维护者响应** | 🟡 均衡 | 当天有 3 个 PR 合入，但 `needs-author-action` 堆积 47 个，回应策略合理但速度适中 |
| **代码质量** | 🟢 良好 | 新增 PR 全部附带测试与上下文，无回归；Windows 平台仍有历史欠账 |
| **安全性** | 🟢 强关注 | 安全相关 RFC 大量接受，5+ PR 处理安全边界问题 |
| **路线图推进** | 🟡 稳定 | v0.8.5 冻结期按计划推进；多个重大架构 RFC 已进入决策队列尾部 |

**需要关注的风险**：多个大型 PR（XL 级）等待 author 或 maintainer 操作，堵塞时间已超过两周。随着 v0.8.5 冻结期结束、v0.9.0 安全架构落地，建议维护者加快对核心安全 PR（#9996、#9839、#9580）的审阅节奏，防止安全修复积压。

---

*报告生成时间：2026-08-15 | 数据源：[ZeroClaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*