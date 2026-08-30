# OpenClaw 生态日报 2026-08-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-30 04:14 UTC

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

# OpenClaw 项目动态日报 — 2026-08-30

## 1. 今日速览

过去24小时内，OpenClaw 项目保持着极高的社区活跃度：共产生500条 Issue 更新（新开/活跃370条，关闭130条）和500条 PR 更新（待合并330条，合并/关闭170条），日内无新版本发布。当前积压的开放 Issue 和待合并 PR 数量庞大，虽然关闭率（26%）和合并率（34%）尚可，但大量高严重级别（P0/P1）问题长时间挂起（部分已开放数月）且标记为"无新修复 PR"，反映出核心稳定性问题仍是主要瓶颈。社区讨论集中在**内存泄漏、消息丢失、会话状态损坏**三大类问题上，同时 Slack、Telegram、WhatsApp 等多渠道投递可靠性是用户最关切的主题。此外，今日有多个由维护者（steipete）提交的 PR，涉及网关并发稳定性、协议文档修复和 CI 改进，表明维护团队正在积极清理技术债。总体而言，项目功能迭代活跃，但**稳定性问题积压**是当前最需要关注的健康风险。

---

## 2. 版本发布

过去24小时内无新版本发布。近期可关注 `2026.8.1` 及 `2026.8.1-beta.x` 系列（多个 Issue/PR 引用此版本）。

---

## 3. 项目进展

今日无直接合并的 PR 数据明细（已合并/关闭170条未逐条展示），但从今日活跃的 PR 和 Issue 关联来看，项目在以下方向有明显推进：

- **网关稳定性与并发**：维护者 steipete 今日提交了两个关键 PR：
  - `#133061` [fix: keep Gateway responsive during concurrent session renames](https://github.com/openclaw/openclaw/pull/133061)（关闭 #133053）：解决并发会话重命名时网关阻塞问题，基准测试显示500会话/1000重命名/32并发原生 agent 轮次下，会话列表卡顿显著改善。
  - `#133063` [docs(protocol): reconstruct July and August wire history; add deferred-changes section](https://github.com/openclaw/openclaw/pull/133063)：修复 gateway-protocol CHANGELOG 与代码脱节问题（约239个提交未记录）。
- **CI/基础设施**：`#133060` [fix(ci): stop Mantis Git descendants before builds](https://github.com/openclaw/openclaw/pull/133060) 修复 CI 中 Git 子进程残留问题；`#123975` 已关闭，其修复了 `tsgo` 编译器进程树清理问题（已合并/关闭）。
- **多项关键 Big Fix PR 仍在审查中**（详见第5节），如 `#126424`（保持对话投递在 agent 绑定范围内）、`#130993`（Responses 会话提前压缩）等。

总体而言，项目今日在**基础设施健壮性**和**文档一致性**上有所推进，但核心的稳定性修复尚未大量合入主分支。

---

## 4. 社区热点

今日讨论最热烈（评论数最多）的 Issue 集中于**长期未解决的严重稳定性问题**，反映了用户在高负载、多账号、长会话场景下的切实痛点：

- **[#91588 — Critical: Gateway Memory Leak (RSS 350MB→15.5GB 导致 OOM)](https://github.com/openclaw/openclaw/issues/91588)**（22条评论，P1，6月9日创建）
  网关进程内存泄漏问题，运行2-3天即被 OOM Killer 杀死，触发 `launchd-handoff` 无限重启循环。**这是目前社区最关注的单点故障**，高严重级别且已开放近3个月无修复 PR。

- **[#102175 — Embedded prompt cache breaks across boundaries](https://github.com/openclaw/openclaw/issues/102175)**（19条评论，P2，7月8日创建）
  嵌入式会话的 prompt-cache 复用失效，导致 token 消耗激增和模型工具清单变化。涉及会话状态和成本控制，虽为 P2 但因经济影响而热度高。

- **[#96834 — WhatsApp 1:1 图片导致消息通道阻塞约3分钟](https://github.com/openclaw/openclaw/issues/96834)**（14条评论，P1，6月25日创建）
  WhatsApp 原生多模态图片注入导致主通道卡死，多模态任务处理逻辑存在缺陷。

- **[#121953 — Cron agent 在 DeepSeek 上停顿](https://github.com/openclaw/openclaw/issues/121953)**（13条评论，P1，8月11日创建）
  `[cron:` 前缀消息被 DeepSeek API 边缘节点降级处理，导致定时任务延迟数十秒至数分钟。

- **[#74586 — AM 嵌入式运行中止 memory_search 工具调用](https://github.com/openclaw/openclaw/issues/74586)**（13条评论，P2，4月29日创建，👍3）
  模型已完成但被错误归类为超时，Active Memory 插件调用异常。

**分析**：热点问题集中在**资源管理（内存泄漏）、消息投递可靠性（WhatsApp/Slack）和多模型兼容性（DeepSeek）**。用户对这些 P1 级问题长期无修复表达了明显不满（多个 issue 挂起超3个月），尤其内存泄漏直接导致生产不可用。

---

## 5. Bug 与稳定性

今日新报告/活跃的 Bug 按严重程度排列：

### 🔴 P0（严重 - 数据丢失/崩溃循环）

- **[#125333 — totalTokens 膨胀在 2026.8.1-beta.2 仍复现](https://github.com/openclaw/openclaw/issues/125333)**（P0，🦞钻石龙虾级，[已有修复 PR 但仅覆盖 CLI](https://github.com/openclaw/openclaw/issues/123065)）
  8月17日创建，8月30日更新。`totalTokens` 指标被异常夸大，memory-flush 路径存在未防护的棘轮。**影响计费和上下文管理，但修复不完整。**

### 🟠 P1（高 - 核心功能异常）

- **[#91588 — 网关内存泄漏](https://github.com/openclaw/openclaw/issues/91588)** — 无修复 PR，开放近3个月，OOM 崩溃循环，热门度第一。
- **[#96834 — WhatsApp 图片阻塞](https://github.com/openclaw/openclaw/issues/96834)** — 无修复 PR，多模态处理缺陷。
- **[#121953 — DeepSeek 上 Cron 任务停顿](https://github.com/openclaw/openclaw/issues/121953)** — 无修复 PR，API 前缀兼容问题。
- **[#131150 — 多账号 Slack 网关重启后 DM 静默丢失](https://github.com/openclaw/openclaw/issues/131150)**（8月27日创建，[已有修复 PR #132723](https://github.com/openclaw/openclaw/pull/132723)）
  19个 Slack 账号场景下，重启后 `prepareSlackMessage` 返回 null，消息丢失。修复 PR 旨在将丢弃消息转为可见告警。
- **[#132762 — overflow-retry 成功但无最终投递](https://github.com/openclaw/openclaw/issues/132762)**（8月29日新开）— 多阶段工作流中重试以 toolResult 结束，无最终回复，用户看到"成功"但无实际输出。
- **[#132109 — Telegram 无限重试循环](https://github.com/openclaw/openclaw/issues/132109)**（已关闭，8月28日创建）— 会话 ID 状态冲突导致消息永不处理。

### 🟡 P2（中 - 功能降级/回归）

- **[#97616 — 子进程僵尸泄漏](https://github.com/openclaw/openclaw/issues/97616)** — hook/tool 子进程未回收，注册为回归问题，无修复 PR。
- **[#99586 — 工具表面空白响应](https://github.com/openclaw/openclaw/issues/99586)** — 网关操作后工具返回空白，重启仅短暂缓解，无修复 PR。
- **[#101929 — 上下文超限估算过度 (2.3-2.6x)](https://github.com/openclaw/openclaw/issues/101929)** — 估算器过度触发截断恢复，影响长会话稳定性。
- **[#124911 — 压缩保留token忽略模型上下文窗口](https://github.com/openclaw/openclaw/issues/124911)** — 辅助函数存在但仅在错误消息中使用。
- **[#120162 — qualityGuard 审计共享超时预算导致失败](https://github.com/openclaw/openclaw/issues/120162)** — 慢模型中审计重试被中止。

### 修复 PR 待合并（摘要）

| PR | 修复 Issue | 内容 | 状态 |
|----|-----------|------|------|
| [#132437](https://github.com/openclaw/openclaw/pull/132437) | #131340 | Code Mode 在无效果工具失败后继续执行 | 维护者审查中 |
| [#132122](https://github.com/openclaw/openclaw/pull/132122) | #131306 | Secret 请求保留原生答案和请求者权限 | 需证明 |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | — | 会话投递限制在 agent 绑定范围内（多 agent 安全） | 维护者审查中 |
| [#130993](https://github.com/openclaw/openclaw/pull/130993) | — | Responses 会话提前压缩（修复6个失败） | 已关闭/等待作者 |
| [#132723](https://github.com/openclaw/openclaw/pull/132723) | #131150 | Slack 消息丢弃后可见化 | 开放 |

**总结**：今日无新崩溃级 Bug 报告，但多个 P1 级消息丢失/阻塞问题持续活跃，修复速度慢于预期。**内存泄漏（#91588）仍是最大健康风险**。

---

## 6. 功能请求与路线图信号

- **[#122846 — 每次响应的工具调用块上限 (maxCallsPerBlock)](https://github.com/openclaw/openclaw/pull/122846)** — 超大规模 PR（涉及几乎全部渠道和应用），解决 CLI loopback 缓冲区溢出问题。**可能进入下一版本**，作为稳定性改进。
- **[#101665 — 插件工具让出回合 (yield turns)](https://github.com/openclaw/openclaw/pull/101665)** — 允许插件工具在外部交互期间暂停 agent 循环，**属架构级增强**，需审慎评估。
- **[#79458 — 斜杠命令描述 i18n](https://github.com/openclaw/openclaw/issues/79458)** — 中文用户反馈英文命令描述问题，PR 已存在但为 P3 低优先级。
- **[#91455 — Kubernetes 文档更新](https://github.com/openclaw/openclaw/issues/91455)** — 社区反馈 Helm 部署文档不清晰，属维护成本低、用户价值高的改进。
- **[#71058 — 多 Azure/Teams 机器人支持](https://github.com/openclaw/openclaw/issues/71058)** — 目前单网关仅支持单 Teams 身份，限制企业多租户场景。

**路线图判断**：短期（下一版本）可能纳入 **PR #122846（工具调用上限）** 和 **PR #101665（插件让出回合）** 这类直接影响 agent 循环稳定性的改进。长期看，多租户、i18n 等需求虽有呼声但优先级靠后（P2/P3）。

---

## 7. 用户反馈摘要

- **"内存泄漏让生产不可用"**（#91588）：用户在正常使用2-3天后遭遇 OOM 崩溃循环，"RSS 从350MB涨到15.5GB"，已开放近3个月无修复，**满意度极低**。
- **"多账号场景消息静默丢失"**（#131150）：19个 Slack 账号用户报告重启后 DM 消失，"没有任何错误提示"，且重启频繁（每30-90分钟）。用户希望至少能看到"消息已被丢弃"的可见信号。
- **"DeepSeek 模型下定时任务不可靠"**（#121953）：Cron 任务因前缀被降级而"停顿数十秒至分钟"，直接影响自动化工作流。
- **"长回复被静默截断"**（#84516）：Codex 模式下1000-1100字符后内容被截断但无错误标记，用户困惑且无法排查。
- **"上下文估算过度触发截断"**（#101929）：用户反馈"估算比实际账单高2.3-2.6倍"，导致不必要的恢复流程，浪费 token。
- **"系统提示词膨胀影响小模型"**（#92451，已关闭）：用户称 v2026.6.x 新增20+工具导致小型模型"注意力被稀释"，指令遵循能力下降。
- **正面反馈方向**：PR #133061（并发重命名修复）和 #132437（Code Mode 继续执行）收到维护者即时响应，社区对**快速修复**的 PR 表示认可。

---

## 8. 待处理积压

以下为长期未响应或修复进展缓慢的重要 Issue/PR，**提醒维护者优先关注**：

| 编号 | 标题 | 严重级别 | 创建时间 | 挂起时长 | 备注 |
|------|------|---------|---------|---------|------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏导致 OOM | P1 | 2026-06-09 | **83天** | 评论最多(22)，无修复 PR，社区热度 No.1 |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) | 跨渠道最终回退投递语义未定义 | P1 | 2026-05-28 | **94天** | 长期无进展，影响所有渠道的可靠性 |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) | 内置 dreaming 系统污染多 agent 身份 | P1 | 2026-04-12 | **140天** | 安全/会话状态双重风险，无修复方案 |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | sudo update 导致配置权限损坏 | P1 | 2026-05-06 | **116天** | 需安全审查，涉及 macOS 特有场景 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send 回环导致消息重复 | P1 | 2026-03-08 | **175天** | 超高挂起期，🦞钻石龙虾级，已有 PR 但未合入 |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | 大附件上传导致栈溢出 | P1 | 2026-06-04 | **87天** | 已有 PR，待合入 |
| [#121083](https://github.com/openclaw/openclaw/issues/121083) | SecretRef "default" 隐式别名文档缺失 | P2 | 2026-08-09 | 21天 | 文档类，已有 PR #132122，但需快速合入避免误导 |
| [#103723](https://github.com/openclaw/openclaw/pull/103723) | 添加 claude-haiku-4-5 支持 | P2 | 2026-07-10 | **51天** | 简单改动（添加模型名）但长期未合并，影响 Claude CLI 用户 |

---

**健康度综合评估**：OpenClaw 项目功能迭代速度快（每日大量 PR），社区活跃度高（500+ Issue/PR 更新），但**稳定性积压问题严重**。多个核心 P1 问题（内存泄漏、消息丢失）挂起超2个月无修复，而 P0 计费数据膨胀修复不完整。建议维护团队将**内存泄漏（#91588）**和**多账号投递可靠性（#131150）**列为最高优先级，并考虑对长期挂起的 P1 Issue（>90天）进行集中 triage 或明确 roadmap 承诺，以提升社区信任度。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-08-30**  
**数据窗口：2026-08-29 ~ 2026-08-30**  
**覆盖项目：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw**


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于 "**功能快速迭代与稳定性积压并存**" 的分化期。头部项目（OpenClaw、ZeroClaw、NanoClaw）保持极高 PR/Issue 吞吐量，但核心稳定性问题（内存泄漏、消息丢失、会话损坏）长期未解，成为普遍健康风险；腰部项目（NanoBot、Hermes Agent、IronClaw）聚焦特定技术深水区（安全沙箱、上下文压缩、循环终止），进入质量巩固阶段；尾部项目（LobsterAI、Moltis、CoPaw）则面临 PR 积压、维护响应滞后等社区生态挑战。跨项目共同涌现的需求集中在**上下文成本控制**（IronClaw #7824、OpenClaw #101929、Hermes #96784 等）、**多渠道消息投递可靠性**（Slack/WhatsApp/Telegram/QQ 全线告警）和**安全加固**（ZeroClaw cron 隔离、NanoBot 沙箱兜底、OpenClaw Secret 权限）三大方向。

> 注：小狼毫、TinyClaw、小狼毫、NullClaw 四个项目在统计窗口内无任何活动。


## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PRs（待合并） | PRs（合并/关闭） | Release | 健康度评估 |
|------|-------------------|-------------|-----------------|---------|-----------|
| **OpenClaw** | 370 | 330 | 170 | 无 | ⚠️ 功能迭代极快，但 P0/P1 稳定性问题积压严重（内存泄漏 83 天无修复） |
| **ZeroClaw** | 26 | 42 | 8 | 无（v0.8.5 冻结期） | ✅ 高强度迭代，S0 安全问题当日闭环；但安全 PR 审批积压 |
| **NanoClaw** | ~5 | 16 | 27 | 无（v2.0.0 后 9 天） | ✅ 高频合并 + 工程治理双线推进；1 个全渠道阻断 Bug 待响应 |
| **Hermes Agent** | ~50 | ~50 | 待确认 | 无 | ✅ 活跃度峰值；cronjob 系列 Bug 集中关闭；移动端需求浮现 |
| **NanoBot** | 2 | 9 | 4 | 无 | ✅ 稳定迭代，p1 安全 PR 5 天未合并需关注 |
| **IronClaw** | 1 | 6 | 0 | 无 | ⚠️ 技术深度高（PinchBench 数据扎实），但合并积压初现 |
| **CoPaw** | 8（新开/活跃） | 6 | 0 | 无 | ⚠️ 社区讨论热烈（多租户/Plan Mode），2 个严重 Bug 无 fix PR |
| **PicoClaw** | 2 | 1 | 2 | 无 | ✅ 稳定维护，2 笔积压 PR 完成合并；QQ 接入故障待响应 |
| **LobsterAI** | 1（stale） | 5（全部 stale，5 个月） | 0 | 无 | ❌ 合并通道严重阻塞，贡献者生态面临流失风险 |
| **Moltis** | 1 | 0 | 0 | 无 | ⚠️ 低频维护，唯一 Issue 两天无响应 |
| **NullClaw / TinyClaw / ZeptoClaw** | — | — | — | — | 💤 无活动 |

**活跃度分层**：OpenClaw、ZeroClaw、NanoClaw 处于第一梯队；Hermes Agent、NanoBot、IronClaw 第二梯队；CoPaw、PicoClaw、Moltis 第三梯队；LobsterAI 特殊（社区活跃但维护者失联）；三个项目静止。


## 3. OpenClaw 在生态中的定位

**OpenClaw 是该生态的"事实标准参照系"和规模最大的单体项目**，其社区体量（单日 500+ Issue 更新、500+ PR 更新）远超同类项目 1-2 个数量级。具体定位差异：

| 维度 | OpenClaw | 与同类对比 |
|------|----------|-----------|
| **技术路线** | 统一网关（Gateway）架构，多渠道接入（Slack/Telegram/WhatsApp 等） | ZeroClaw 同样采用网关模式但更强调沙箱安全；NanoClaw 更轻量，核心团队小而精 |
| **社区规模** | 500+ PR/日，Issue 讨论深度高（22 条评论的 P1 内存泄漏） | ZeroClaw 50 PR/日、NanoClaw 43 PR/日；长尾项目多为个位数 |
| **优势** | 功能覆盖面最广，多渠道投递先行，维护者（steipete）响应积极 | 在安全沙箱（ZeroClaw）、上下文压缩（IronClaw）等细分方向被反超 |
| **短板** | **稳定性欠债最深**：P0 计费数据膨胀修复不完整、P1 内存泄漏 83 天无解 | 竞品在特定深水区（沙箱策略、资源物化）已有落地 |

**核心判断**：OpenClaw 凭借体量和渠道广度占据生态中心位，但其"稳定性积压"已经成为社区信任度的主要消耗点。ZeroClaw 在安全架构上已形成差异化壁垒，NanoClaw 在工程治理效率上表现突出，两者均有潜力在特定维度挑战 OpenClaw 的领先地位。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|---------|---------|
| **上下文/Token 成本控制** | OpenClaw（#101929 估算超限 2.3-2.6x）、IronClaw（#7824 token 消耗 4 倍增长 + 准确率下降）、Hermes Agent（#96784 压缩优化）、NanoClaw（PR #5568 上下文压缩归一） | 全量历史重放导致成本失控，需要 compression barrier、结构化摘要、溢出恢复等系统性方案 |
| **消息投递可靠性** | OpenClaw（#131150 Slack 静默丢失、#96834 WhatsApp 阻塞）、Hermes Agent（#98228 Telegram 重连）、NanoClaw（#3660 SQLite 只读阻断全渠道）、PicoClaw（#3349 QQ 认证失败）、CoPaw（#7402 空 output_text 毒化会话） | 多渠道场景下消息丢失/阻塞/无限重试是普遍痛点，且多为"无声故障"——用户无法察觉错误原因 |
| **安全加固** | ZeroClaw（cron agent 隔离、OAuth 回调校验、临时文件权限）、NanoBot（PR #5536 受限 Shell 沙箱兜底）、OpenClaw（#65374 会话状态污染、Secret 权限）、IronClaw（工具披露误导） | 从"尽力而为的路径检查"转向"无沙箱即拒绝"的强安全模型；凭据存储与会话隔离成为默认要求 |
| **多租户/团队协作** | CoPaw（#7318 多租户 Hub、#7405 Plan Mode）、LobsterAI（#1145 团队配置导入导出）、OpenClaw（#71058 多 Teams 身份）、ZeroClaw（#10360 家庭边缘网格） | 个人助手工具正面临向团队产品/多设备组网演进的共同压力 |
| **移动端/跨平台客户端** | Hermes Agent（#11911、#98196 iOS/Android 原生 App 需求）、CoPaw（桌面端主题定制）、NanoClaw（Raspberry Pi 部署咨询） | 核心功能稳定后，前端交互层（桌面/移动/消息平台）成为用户可感知的体验短板 |
| **CI/工程基础设施自动化** | NanoClaw（PR #3647/#3648/#3657 标签自动分类）、OpenClaw（#133060 CI 修复）、ZeroClaw（chacha20 crate yanked） | 头部项目开始投资自动化 triage/标签系统，以应对 PR 洪峰 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|-----------------|
| **OpenClaw** | 多渠道消息 Agent，功能覆盖面最广 | 个人/小团队，多 IM 渠道重度用户 | 统一网关 + Agent 循环，社区插件生态丰富 |
| **ZeroClaw** | 安全优先的多 Agent 基础设施 | 对安全/合规有要求的企业与高级用户 | 沙箱策略分层（Bubblewrap/Landlock/Seatbelt），RFC 驱动的架构演进 |
| **NanoClaw** | 轻量、易部署的会话 Agent，工程治理标杆 | 独立开发者、容器化部署用户 | 核心团队小而精（3-4 人主导），CI/标签自动化程度最高 |
| **Hermes Agent** | 会话状态深度管理、Agent 压缩优化 | 长会话/大规模自动化用户 | 专注于 transcript/压缩/状态修复等"内功型"问题 |
| **IronClaw** | 上下文成本控制、循环终止可靠性 | 成本敏感的生产级用户 | PinchBench 基准驱动的量化优化，架构级压缩方案（Pi-style） |
| **NanoBot** | WebUI 体验 + 工具执行安全 | 桌面端优先、注重 UI 体验的用户 | 轻量级实现，SkillHub 技能市场，OAuth 在线模型目录发现 |
| **CoPaw** | 多租户 Hub + 桌面端体验 | 团队协作（QwenPaw 生态） | 官方主导的多租户路线图，腾讯系（AgentScope/Ark）技术栈 |
| **LobsterAI** | 技能/Agent 全生命周期管理 | 网易有道生态用户（中文用户群体） | Cowork 会话 + 计划任务 + 团队配置模板；UI 层增强为主 |
| **PicoClaw / Moltis** | 轻量级/嵌入式场景 | 低资源硬件、嵌入式开发者 | 保持最小可实现功能集，社区规模有限 |


## 6. 社区热度与成熟度

### 快速迭代阶段（功能扩张 > 稳定性巩固）
- **OpenClaw**：单日 500+ PR 更新，功能迭代速度生态第一；但稳定性欠债同步累积，"速度"与"质量"失衡
- **ZeroClaw**：50 PR/日，v0.8.5 冻结期仍保持高强度安全修复，处于功能扩张与质量巩固之间的平衡点
- **NanoClaw**：43 PR/日，27 条已合并，处于"高频合并 + 精细化治理"的健康快速迭代状态

### 质量巩固阶段（稳定性/深水区优化 > 新功能）
- **NanoBot**：bug 修复 > 功能开发，安全沙箱兜底与资源清理边界是当前重点
- **IronClaw**：聚焦上下文压缩与循环终止两大深水区，PR 质量高（PinchBench 数据支撑）
- **Hermes Agent**：长期积压的 cronjob Bug 集中关闭，会话状态修复 + 移动端需求浮现

### 风险区
- **LobsterAI**：5 条 PR 积压 5 个月全部 stale，贡献者生态面临流失风险
- **Moltis**：低频维护，唯一 Issue 2 天无响应，社区信心承压
- **CoPaw**：社区讨论热烈但 PR 合并停滞（最长达 20 天），2 个严重 Bug 无修复


## 7. 值得关注的趋势信号

**信号 1：上下文成本失控已成行业级痛点，且影响准确率**  
IronClaw #7824 的 PinchBench 数据显示 4.1 倍 token 膨胀的同时准确率下降 6.1 个百分点——这不只是成本问题，更是上下文污染/注意力稀释导致的性能退化。OpenClaw（估算超限 2.3-2.6x）和 Hermes（压缩边界优化）的同类诉求表明，**"全量历史重放"架构正在逼近天花板，行业亟需系统性压缩方案**（compaction barrier、结构化摘要、溢出恢复）。对开发者而言，率先实现高效压缩机制将形成差异化竞争力。

**信号 2："无声故障"成为用户满意度最大杀手**  
从 OpenClaw 的 Slack 消息静默丢失、ZeroClaw 的意大利语语音笔记被静默丢弃、NanoClaw 的 signal-cli 无限挂起（无错误提示），到 IronClaw 的工具成功但无输出——**故障发生时用户无法感知根因**是跨项目的共性问题。社区对"至少给一个可见信号"的诉求强烈（OpenClaw #131150 用户原话："希望至少能看到消息已被丢弃"）。可观测性和显式错误语义将成为下一波体验竞争的关键。

**信号 3：安全模型从"路径检查"转向"沙箱兜底"**  
ZeroClaw 的 cron agent 隔离（S0）、NanoBot 的 fail-closed 沙箱、OpenClaw 的 Secret 权限保留，三家头部项目同步推进同一方向——**应用层路径检查不可信，必须依赖操作系统沙箱兜底**。这与云端 Serverless 安全模型（如 gVisor）的发展路径一致，标志个人 AI 助手正在从"信任本机用户"转向"零信任执行环境"。

**信号 4：多租户/团队化是个人助手工具的必然演进方向**  
CoPaw 官方发起多租户路线图讨论（14 条评论）、LobsterAI 团队配置导入导出、ZeroClaw 家庭边缘网格 RFC——三个不同定位的项目同时出现团队/多设备需求，说明该品类正在从"个人效率工具"向"团队协作基础设施"跨越。**率先提供完善的多租户/权限模型的项目将获得企业级市场的先发优势**。

**信号 5：PR 合并没有跟上提交速度，生态"隐性积压"蔓延**  
IronClaw（6 条 PR 全待合并）、CoPaw（最长 20 天）、LobsterAI（5 个月）、NanoBot（p1 安全 PR 5 天）——多个项目的合并节奏低于提交节奏。**这不是单个项目的管理问题，而是该生态普遍面临的维护者带宽瓶颈**。NanoClaw 的 CI 标签自动分类系统（PR #3647/#3648/#3657）提供了一个可复用的解法：用自动化 triage 降低维护者认知负担。建议生态内项目借鉴该实践。

**信号 6：移动端与跨平台客户端需求集中爆发**  
Hermes Agent 的 iOS/Android 原生 App 诉求（含语音通话）、CoPaw 的桌面端主题定制、NanoClaw 的 Raspberry Pi 部署——用户不再满足于"能跑"，而是要求"在任何设备上有一致的完整体验"。**开源 Agent 项目的竞争正在从核心引擎延伸到前端体验层**，这可能是下一阶段的差异化战场。

---

*本报告基于 2026-08-30 各项目 GitHub 仓库公开数据。所有统计数字均来自对应项目的 Issue/PR 动态摘要。NullClaw、TinyClaw、ZeptoClaw 在统计窗口内无活动，未纳入对比分析。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-08-30** | **数据范围：过去 24 小时**


## 1. 今日速览

NanoBot 项目在过去 24 小时内保持中高活跃度：共新增/更新 2 个 Issue、13 个 PR（其中 4 个已合并/关闭），无新版本发布。值得关注的是，今日提交密集集中在 **WebUI 体验优化**（通知音效、日志流式输出、面板组保留）和 **Agent 执行安全性**（原生推理取消清理、受限 Shell 沙箱兜底、消息限流状态边界）两大方向，其中 PR #5536（受限 Shell 沙箱）已标注 p1 优先级，暗示安全加固是当前重点。整体来看，项目处于**持续迭代的稳定期**，社区贡献者活跃，维护者响应及时。


## 2. 版本发布

今日无新版本发布。


## 3. 项目进展

今日共有 4 个 PR 被合并或关闭，均为 WebUI/CLI/Provider 方向的小步快跑式改进：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#5591](https://github.com/HKUDS/nanobot/pull/5591) | fix(webui): preserve named pane groups | 已合并 | 修复 WebUI 面板组自定义标题在面板减少时丢失的问题，改善多面板布局体验 |
| [#5595](https://github.com/HKUDS/nanobot/pull/5595) | fix(webui): hide SkillHub install counts | 已合并 | 移除 SkillHub 中不可靠的安装量展示（数据稀疏且多显示为 0），清理 UI 噪声 |
| [#5596](https://github.com/HKUDS/nanobot/pull/5596) | feat(providers): discover OAuth model catalogs online | 已合并 | 为 OpenAI Codex、xAI Grok、GitHub Copilot 提供在线模型目录发现能力，Grok 4.6 设为默认 |
| [#5599](https://github.com/HKUDS/nanobot/pull/5599) | fix(cli): stream gateway logs in WebUI launcher | 已合并 | CLI 模式下实时流式输出网关日志，改善调试体验 |

**评价**：今日合并的 PR 以 WebUI 细节打磨为主，其中 **PR #5596 的 OAuth 模型目录在线发现**是具有一定架构意义的功能——它使 WebUI 选型与 xAI 运行时能力检查共享同一个规范化目录，为后续多 provider 模型管理打基础。整体推进节奏平稳，无重大架构变更。


## 4. 社区热点

今日最受关注的讨论集中在以下两个 PR，均为 p1/p2 级的修复型 PR，尚未产生大量评论，但设计意图值得关注：

- **[PR #5600 — fix(agent): close native reasoning on cancellation](https://github.com/HKUDS/nanobot/pull/5600)**（作者：KDB-Wind，p2）
  **核心诉求**：当流式请求在原生推理开始后被取消时，`_request_model` 会因 `CancelledError` 跳过正常清理流程，导致客户端收到推理输出却永远收不到 `reasoning_end` 信号——这会造成前端状态悬挂。该 PR 修复了取消时的清理行为。
  **背后分析**：这是一个典型的**资源清理边界**问题，反映 LLM 流式场景下取消操作的复杂性。社区对这类问题关注度高，因为它直接影响用户体验和协议完整性。

- **[PR #5536 — fix(exec): fail closed when restricted shell lacks a sandbox](https://github.com/HKUDS/nanobot/pull/5536)**（作者：KDB-Wind，p1）
  **核心诉求**：当启用了 `restrict_to_workspace` 但目标 Shell 本身不提供沙箱能力时，`ExecTool` 应**默认拒绝执行**（fail closed），而非仅依赖应用层路径检查（这些检查无法覆盖符号链接、Shell 展开和命令替换绕过）。
  **背后分析**：这是明确的安全加固 PR，从“尽力而为的路径检查”转向“无沙箱即拒绝”的强安全模型。p1 优先级表明该问题被社区视为高优安全风险。值得关注的是该 PR 已开放 5 天尚未合并，建议维护者加速推进。


## 5. Bug 与稳定性

今日报告的 Bug 均为新开 Issue，按严重程度排列如下：

**中等严重度**

1. **[Issue #5593 — Session message rate-limit state retains expired one-shot sessions](https://github.com/HKUDS/nanobot/issues/5593)**（作者：yu-xin-c）
   - 问题：`SendSessionMessageTool` 的 `_sent_at` 中，过期时间戳仅在相同来源再次发送时才被清理。一次性会话（one-shot session）的过期限流状态会残留累积，导致内存不必要增长。
   - 修复状态：**已有对应 PR [#5594](https://github.com/HKUDS/nanobot/pull/5594)**（作者同为 yu-xin-c），实现按最新成功发送时间排序并丢弃过期前缀。

**低严重度**

2. **[Issue #5592 — edit_file documentation does not state that match selectors are mutually exclusive](https://github.com/HKUDS/nanobot/issues/5592)**（作者：22373448）
   - 问题：`edit_file` 工具描述未说明 `occurrence`、`line_hint`、`replace_all` 是互斥选择器，可能导致模型误用。
   - 修复状态：**已有对应 PR [#5598](https://github.com/HKUDS/nanobot/pull/5598)**（作者：dajiaohuang），同步修正工具描述和运行时验证。

**其他稳定性相关 PR**（尚未关闭）：
- [PR #5601](https://github.com/HKUDS/nanobot/pull/5601) — WebUI 拒绝消息时回滚附件和 WebSocket 订阅（防孤儿文件和连接泄露）
- [PR #5597](https://github.com/HKUDS/nanobot/pull/5597) — 将 provider 重试等待事件路由到 sendProgress 可见性门控

**健康度评估**：今日无崩溃级 Bug 或回归报告，p1 安全问题有 PR 跟进但尚未合并，整体稳定性良好。


## 6. 功能请求与路线图信号

今日出现的功能需求/增强信号如下：

| 信号来源 | 功能描述 | 可能纳入版本 |
|---|---|---|
| [PR #5602](https://github.com/HKUDS/nanobot/pull/5602)（0717lee） | WebUI 回合完成通知音效（opt-in，默认关闭） | 小功能，可能进入下一 minor 版本 |
| [PR #5405](https://github.com/HKUDS/nanobot/pull/5405)（yu-xin-c，已开放 14 天） | 技能支持 `disable-model-invocation: true` 手动专属模式 | 有明确设计且已实现，可能进入下一版本 |
| [PR #5568](https://github.com/HKUDS/nanobot/pull/5568)（chengyongru，已开放 3 天） | `AgentRunner` 接管上下文压缩，在每次 provider 调用前强制执行本地输入上限 | **架构级变更**，影响核心执行流程，预计需要较长 review 周期 |
| [PR #5596](https://github.com/HKUDS/nanobot/pull/5596)（今日已合并） | OAuth 模型目录在线发现 | **已完成**，将在下一版本中体现 |

**路线图信号**：从 PR 类型分布（bug 修复 > 功能开发）来看，项目当前处于**稳定性优先**阶段。值得关注的是 [PR #5568](https://github.com/HKUDS/nanobot/pull/5568) 试图将上下文压缩逻辑归一到 runner 层——这是面向长会话场景的架构优化，但改动核心路径，需要谨慎评估。功能开发方面，手动专属技能模式（#5405）和 WebUI 通知音效（#5602）属于用户可感知的体验提升，预计优先级不会太高。


## 7. 用户反馈摘要

今日 2 个新开 Issue 均来自贡献者而非普通用户，无社区抱怨或负面反馈。从提交者画像来看：

- **yu-xin-c**（#5593、#5594、#5405）：持续投入于 session/rate-limit 状态管理和技能系统的改进，属于深度技术贡献者。
- **22373448**（#5592）：以“工具文档与运行时不匹配”的视角发现问题，这类反馈对提升工具链质量很有价值——文档模糊性会直接影响模型调用工具的准确性。

PR 方面，[PR #5602](https://github.com/HKUDS/nanobot/pull/5602)（通知音效）可能吸引较多用户注意，因其直接改善 WebUI 使用体验；[PR #5595](https://github.com/HKUDS/nanobot/pull/5595) 关于 SkillHub 安装量展示被移除，也从侧面说明社区用户对**低质数据展示的接受度较低**，维护者对此反馈响应迅速。


## 8. 待处理积压

**需要维护者关注的重点项：**

1. **[PR #5536 — fix(exec): fail closed when restricted shell lacks a sandbox](https://github.com/HKUDS/nanobot/pull/5536)**（p1 安全修复，已开放 5 天）
   - 安全等级较高（受限 Shell 沙箱缺失时可能被绕过路径检查执行任意命令），建议尽快安排 review。当前无 reviewer 被指派或评论记录，存在被淹没的风险。

2. **[PR #5405 — feat(skills): support manual-only invocation](https://github.com/HKUDS/nanobot/pull/5405)**（已开放 14 天）
   - 功能完整且已实现，等待维护者确认设计方向。长时间未响应可能导致贡献者挫败。建议在下一个维护周期内明确接纳/拒绝。

3. **[PR #5568 — refactor(agent): let runner own context compaction](https://github.com/HKUDS/nanobot/pull/5568)**（已开放 3 天）
   - 核心架构变更，预计 review 周期较长，但若无维护者早期介入并给出方向性反馈，PR 可能在细节讨论中停滞。建议主动明确取舍标准。


**项目健康度总评**：⭐⭐⭐⭐（4/5）

- ✅ 社区贡献活跃，Issue/PR 响应快，无失控积压
- ✅ 修复类 PR 占比高，安全加固（#5536 p1）和资源管理（#5594、#5600）齐头并进
- ⚠️ 5 天未合并的 p1 安全 PR 值得关注，若持续滞留将影响项目安全信誉
- ⚠️ 功能类 PR（#5405、#5602）在 bug 修复洪流中可能被边缘化，注意平衡社区贡献者的功能诉求

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，我是你的 AI 智能体与个人 AI 助手领域开源项目分析师。以下是基于 Hermes Agent 仓库 2026-08-30 日数据生成的项目动态日报。

---

# Hermes Agent 项目动态日报 (2026-08-30)

## 1. 今日速览

今日 Hermes Agent 项目活跃度极高，Issues 与 PR 更新均达到 50 条，显示社区参与度和项目迭代速度均处于峰值。值得关注的是，长期困扰用户的 `cronjob` 工具 `TypeError`（字符串与整数比较）系列问题今日集中关闭，标志着该稳定性顽疾的修复方案已被社区确认。同时，今日涌现出多个关于**会话状态管理**、**网关（Gateway）多配置文件健壮性**以及**跨平台客户端（尤其是移动端）**的高价值讨论与 PR，预示着项目正在从核心功能稳定向生态扩展和体验精细化迈进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

虽然今日没有新版本发布，但 PR 池中出现了多个针对核心架构的关键修复，显示出项目开发的深度。

- **网关 /busy 状态跨配置加固 (PR #98274)**: 对已合并的 #97932 进行后续加固，旨在解决 `/busy` 命令在路由配置文件、Slack 输入路由和兼容性密钥上的问题。这表明项目正在细化多配置文件场景下的会话管理逻辑。
- **网关心跳任务重启后失效修复 (PR #98310)**: 修复了网关重启后，活跃的 `/heartbeat` 心跳任务被孤立的问题。这直接关系到用户通过心跳机制维持长会话的稳定性。
- **会话状态多模态内容保护 (PR #98335)**: 修复了 `transcript_repair.py` 中的一个严重 Bug，该问题会将图片、音频等多模态消息错误分类为空白内容，可能导致会话历史数据丢失。该 PR 是 `#95514` 的后续，显示对数据完整性的关注度很高。
- **Agent 压缩机制多项优化 (PR #96784, #93575, #93576)**: 这三个 PR 聚焦于上下文压缩（Context Compression）的边界情况，包括中断重试、预估值覆盖真实用量以及预算保持等，旨在提升长会话场景下的成本与上下文管理精度。

**结论**: 项目今日虽无合并动作，但高强度的 PR 提交表明开发工作正聚焦于解决复杂的、深层次的架构问题，尤其是会话状态一致性和数据完整性。

## 4. 社区热点

今日最热门的讨论集中在少数几个长期悬而未决的问题上，体现了社区对特定问题的反复遭遇和强烈诉求。

- **`cronjob` 工具 `TypeError` 问题 (Issue #66616 除外)**:
  - #7142, #66824, #71987, #71993, #64520, #95706 等多个 Issue 均报告了同样的错误：`'<=' not supported between instances of 'str' and 'int'`，即传入 `repeat="forever"` 或 `"once"` 等字符串时导致任务创建失败。这些 Issue **今日集中被标记为已关闭**，且有 Issue #7142 标记为 `[TESTED FIX]`，表明修复方案已由社区成员（@davidvv）提交并通过测试，问题根源已被定位（`cron/jobs.py:609`）。这解释了为何今日关闭的 Issues 数量较多。

- **Skills 索引降级 (Issue #66616)**: 这是一个由自动化机器人报告的运维问题，Skills Hub 的索引文件已过期（29.8h 旧，限制 26h）。该 Issue 获得了 **121 条评论**，是今日讨论量最大的单条 Issue。虽然标题标记为 `degraded` 状态，但高评论数可能意味着社区在讨论其下游影响或构建新的索引方案，这值得维护者关注。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

**严重 (高影响/数据风险)**

- **[已修复] 会话状态多模态内容损坏 (PR #98335)**: 由 PR 揭示的严重数据丢失风险，修复了空白内容检测逻辑对多模态消息的误判。
- **[待修复] 托管 Python 3.11.15 在 sqlite3 C 扩展中 SIGSEGV (Issue #98332)**: 该崩溃会直接杀死托管 Agent 进程，并将批量任务错误报告为“owner exited”。该问题涉及托管环境的稳定性，需要优先排查。

**中等 (功能异常/影响特定场景)**

- **[已修复] `cronjob` 工具 `repeat` 参数类型校验 (Issue #7142, #66824 等)**: 该系列 Bug 今日以 `[TESTED FIX]` 或 `duplicate` 状态关闭，表明修复方案已验证或已存在重复报告，问题即将解决。
- **[待修复] Telegram 重连后进度更新使用已退役适配器 (Issue #98228)**: 在活跃对话中发生重连，可能导致进度消息和清理操作失败，影响消息投递的可靠性。
- **[待修复] QQ 机器人授权按钮在命名配置文件中显示未授权 (Issue #98292)**: 该问题表明网关在会话密钥命名空间的处理上存在逻辑缺陷，影响该平台用户的正常操作。
- **[待修复] `/v1/runs` 路径绕过 GoalManager 的持久 /goal 功能 (Issue #98299)**: 文档宣称的功能在程序化 API 路径下不生效，属文档与实现不一致问题。
- **[待修复] 真实配置浏览器启动问题 (Issue #96729)**: 包括认证数据库权限过宽 (0644)，以及在非交互式启动中注入 mock-keychain 标志，存在安全边界风险。

**轻微 (体验问题)**

- **KawaiiSpinner 刷新导致终端刷屏 (Issue #93999)**: 在窄终端下消息超宽时，动画刷屏影响阅读体验。
- **Skills 安装器丢弃未链接的支持文件并剥离执行权限 (Issue #82657)**: 在安装复杂 skills 时可能丢失功能。

## 6. 功能请求与路线图信号

今日功能请求和路线图信号主要聚焦在以下两个方向：

- **移动端与跨平台客户端需求强烈**:
  - Issue #11911 和 #98196 明确提出了对 **iOS/Android 原生 App** 的需求，支持语音通话和与既有配置/网关交互。
  - Issue #72011 则提出了一个方向性问题，即 Hermes 已内置 ACP Server，应如何定位庞大的远程/移动客户端类别（16个开放 PR）。这暗示社区有大量意愿构建客户端，但需要维护者给出统一的方向指引。
  - **预测**: 结合桌面端相关的 PR（如 #98333），下一版本的路线图可能不会仅专注于核心 Agent 功能，而是会加大对前端交互层（桌面端、移动端、消息平台）的打磨和统一。

- **Bot 群聊的独立性与可用性增强**:
  - Issue #97681 提出“Bot 群聊在桌面端关闭后应继续工作”，这指向了 Bot 运行与 GUI 解耦的架构需求。
  - PR #98307 旨在完善群聊中的文件传输和 Bot 交接功能，这是对群聊场景的重要补充。
  - **预测**: 项目可能会在接下来的版本中引入“守护进程模式”或增强网关的自主决策能力，以减少对桌面客户端的依赖，使群聊体验更接近原生 IM 机器人。

## 7. 用户反馈摘要

- **反复出现的痛点**: 用户对 `cronjob` 工具的错误感到**沮丧**，多个独立用户报告了完全相同的 `TypeError`，这表明问题在真实使用中非常普遍，且 LLM 生成的参数极易触发该错误。
- **对“静默失效”的担忧**: 在 Issue #54922 和 #75091 中，用户对 `custom_providers[].extra_body` 参数被**静默丢弃**或在故障转移时不正确传递表示不满。这反映出用户在精细控制网络/API 参数方面有明确需求，且要求行为透明、可预测。
- **对功能完整性的期待**: 用户（如 #78774 的 Telegram inline mode）直接引用了官方 API 文档来指出功能缺失，显示他们期待 Hermes 作为专业助手，应提供与主流平台 API 对齐的完整能力，而非仅仅是最小可用实现。
- **对稳定性的认可**: 多个长期存在的 `cronjob` Bug 被标记为 `[TESTED FIX]`，虽然暂无直接感谢评论，但问题被迅速修复有望提升用户满意度。

## 8. 待处理积压

- **高风险/高关注**: Issue #66616 (Skills 索引降级) 虽然状态为 `degraded`，但获 121 条评论，需要维护者介入评估该索引的健康度，并回应社区关于其影响的讨论。
- **长期待决策**: Issue #72011 (远程/移动客户端方向) 与 PR #92649 (委派子代理 inspect) 均被标记为 `needs-decision`，且涉及 16+ 个 PR 的走向。维护者需要尽快给出方向性指导，避免社区贡献者做无用功。
- **长期开放功能请求**: Issue #11911 (原生移动 App) 自 4 月以来一直开放，并有 5 条评论，虽然关注度不高，但代表了核心用户对特定功能的持续需求，可以在路线图规划时作为参考。

---
**数据来源**: NousResearch/hermes-agent GitHub 仓库 (2026-08-30 数据)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-30** | **数据来源：github.com/sipeed/picoclaw**


## 1. 今日速览

PicoClaw 项目今日活跃度中等偏低。24小时内新增/活跃 Issue 2 条、PR 3 条，无新版本发布。值得关注的是，今日新增了一个QQ频道接入故障报告（#3349），同时两个早期标记为 [stale] 的社区 PR（#3315、#3337）在时隔数周后迎来合并关闭，显示维护者正在清理积压贡献。当前项目处于**稳定维护节奏**，社区贡献活跃但缺乏高频迭代信号。


## 2. 版本发布

今日无新版本发布。最近一次发布信息暂缺，建议关注项目的 Releases 页面获取后续更新。


## 3. 项目进展

今日共有 2 个 PR 被合并/关闭，均为较早提交的社区修复，是本周内相对重要的代码合并：

- **[#3337] [Merged] Fix/mcp failure hangs agent loop**（[链接](https://github.com/sipeed/picoclaw/pull/3337)）— 由 kuzmichus 提交，修复了 MCP（Model Context Protocol）服务器连接失败时 Agent 主循环挂起的问题。此前当 `ensureMCPInitialized` 返回错误（如 MCP 服务器不可达）时，`AgentLoop.Run` 会直接传播错误并退出，导致聊天界面完全停止响应用户。该修复对依赖外部 MCP 服务的生产部署稳定性有实质意义。

- **[#3315] [Merged] Support topics in private bot chats**（[链接](https://github.com/sipeed/picoclaw/pull/3315)）— 由 genuss 提交，修复了 Telegram 私聊机器人开启论坛主题模式时的线程处理问题。此前代码仅在 `Chat.IsForum` 为 true 时识别主题，这对论坛超级群有效，但在私聊场景下 Telegram 提供的是 `IsTopicMessage` 字段，导致私聊主题消息无法被正确路由。

这两项合并分别解决了**运行稳定性**和**渠道兼容性**两个方向的问题，说明项目在维护核心 Agent 循环健壮性的同时，也在持续完善多平台适配。


## 4. 社区热点

今日社区讨论热度整体不高，暂无高互动量的讨论线程。相对值得关注的是：

- **[Issue #3343] Tool feedback animation can edit a Telegram message indefinitely**（[链接](https://github.com/sipeed/picoclaw/issues/3343)）— 虽然发布时间较早（8月22日），今日仍有更新（8月29日），评论 1 条。该问题描述了一个严重的资源泄漏场景：工具反馈动画在 Agent 轮次已停止推进后，仍持续每3秒调用 Telegram 的 `editMessageText` 接口，累计产生超过 **22.8 万次**编辑请求，最终触发 Telegram 服务端限流（`retry_after`）。此问题虽非今日新报，但反映社区对长时间运行场景下资源管理和限流处理的关注。


## 5. Bug 与稳定性

### 高优先级

- **[Issue #3349] QQ频道无法正常使用（新增）**（[链接](https://github.com/sipeed/picoclaw/issues/3349)）— 用户报告在 Docker 和 Linux x86 两种部署方式下，QQ 频道接入均不可用。Gateway 日志显示认证失败：`code:401, "请求头Authorization参数格式错误", code:11241`。该错误指向请求头中 Authorization 参数格式错误，可能由近期服务端 API 变更或本地配置问题引发。**当前无关联 fix PR**，考虑到 QQ 频道是国内用户的重要接入渠道，建议优先排查。

### 中优先级

- **[Issue #3343] Tool feedback 动画无限编辑 Telegram 消息**（[链接](https://github.com/sipeed/picoclaw/issues/3343)）— 已标记为 [stale]，该 bug 导致数天连续请求、超过 22.8 万次编辑尝试并触发限流。行为疑似缺少终止条件判断（未检测 agent turn 是否已结束）。目前**无关联 fix PR**，长时间运行场景下存在资源浪费与服务降级风险，建议补充循环退出条件并加入调用频率上限。


## 6. 功能请求与路线图信号

今日无新功能请求类型的 Issue。但在 PR 中有一个值得关注的信号：

- **[#3348] i18n: complete Czech code wrap labels**（[链接](https://github.com/sipeed/picoclaw/pull/3348)）— 捷克语社区贡献者 KrtCZ 提交了完整的捷克语代码换行标签翻译。该 PR 目前处于待合并状态，提示项目国际化（i18n）覆盖范围正在向更多语言扩展，欢迎其他语种社区跟进。


## 7. 用户反馈摘要

从今日活跃的 Issue 可以提炼以下用户反馈：

- **QQ 频道接入故障影响面广**（来自 #3349）：用户在 Docker 和 Linux x86 两种部署方式下均遇到同一认证错误，说明该问题非单环境偶发，而是普适性接入故障，可能阻塞依赖 QQ 频道的用户正常工作流。

- **长时间运行下的资源控制缺失**（来自 #3343）：Telegram 渠道的反馈动画循环缺少终止条件，持续数天高频调用 API 导致限流。这反映出用户对**长时间无人值守运行**场景的稳定性有较高期待，而当前实现存在隐患。

- **正面信号**（来自 #3315、#3337 的合并）：两项较早提交的 PR 最终被合并，说明维护者仍在逐一处理积压贡献。对等待合并的贡献者而言，这是一个积极的反馈。


## 8. 待处理积压

- **[Issue #3343] Tool feedback animation 无限编辑消息**（[链接](https://github.com/sipeed/picoclaw/issues/3343)）— 创建于 8月22日，已标记 [stale]，当前无 fix PR。问题严重程度较高（资源耗尽、触发限流），建议维护者尽快确认修复计划或分配负责人。

- **[Issue #3349] QQ频道无法正常使用**（[链接](https://github.com/sipeed/picoclaw/issues/3349)）— 今日新报，尚无响应。建议尽早回复用户并给出排查方向。

- **[PR #3348] 捷克语 i18n 标签补全**（[链接](https://github.com/sipeed/picoclaw/pull/3348)）— 已待合并 1 天，改动范围小且风险低，建议尽快 review 合并，以鼓励非英语贡献者持续参与。

- 此外，两个今日合并的 PR（#3315、#3337）此前均被标记为 [stale]，暴露了 PR 积压时间较长的问题。建议维护者考虑是否需要在项目层面优化 PR 响应时效（例如设置更短的 stale 标记时限或增加维护者投入），以提升社区贡献者的积极性。


> **总结**：今日项目处于稳定维护状态，两笔积压 PR 完成合并是积极信号。但新增的 QQ 频道接入故障与持续的 Telegram 动画资源泄漏问题需要维护者及时响应。社区贡献节奏稳定，i18n 与多平台适配仍是外部贡献的主要方向。项目整体健康度 **中等偏上**，稳定性修复是当前的关键路径。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期**: 2026-08-30  
**数据来源**: github.com/qwibitai/nanoclaw (nanocoai/nanoclaw)  
**统计周期**: 过去 24 小时


## 1. 今日速览

NanoClaw 项目在过去 24 小时保持高活跃度，PR 更新量达 43 条，其中 27 条已合并/关闭，16 条仍在审核中，展示出稳健的协作节奏。今日热点集中在 **Signal 集成链路的系统性修复**（3 个相关 Issue）与 **CI 标签分类体系的自动化改造**（3 个相关 PR），另有核心团队成员 gavrielc 提交了 8 个横向修复 PR（从容器构建重试到 .env 解析一致性），显示项目正在进行一次以稳定性和工程治理为核心的深度打磨。社区侧新增 Issue 以 Signal 集成的功能性缺陷为主，用户反馈集中在开箱即用体验的断裂上，值得维护团队优先关注。


## 2. 版本发布

**无新版本发布。** 继 2026-08-21 v2.0.0 正式发布后，项目已连续 9 天未发布新版本。当前主干处于高频合并状态，多个修复预计将进入下一个 patch/mirror 版本。


## 3. 项目进展

今日共合并/关闭 **27 个 PR**，核心团队成员 gavrielc 贡献了约 1/3 的合并量。以下为重关重要变更：

### 核心功能与稳定性

- **[#3665] feat(channels): 允许 chat-sdk 频道恢复 message.raw 中遗留的内容（已合并）**
  - 在持久化之前，`createChatSdkBridge` 会丢弃 provider payload（`serialized.raw = undefined`）以节省数据库空间。该 PR 增加了 `extractRawText` 通用钩子，让平台适配器可以在丢弃前恢复未投影到 `Message.toJSON()` 的内容。
  - 这是后续 Slack 粘贴表格恢复功能的基础支撑。

- **[#3666] feat(slack): 从原始事件中恢复粘贴的表格（已合并）**
  - 依赖 #3665，解决了 Slack 中以富文本/表格形式呈现的粘贴内容在经适配器投影后丢失的结构化信息。Slack 适配器现可从 `raw` 事件中提取表格内容。

- **[#3667] fix(add-slack): 复制 slack-raw-text 与其导入适配器一同复制（已合并）**
  - 修复了 #3666 引入的回归——`add-slack` skill 的 `nc:copy from-branch:channels` 列表未包含新文件 `slack-raw-text.ts`，导致任何通过 `add-slack` 安装 Slack 适配器的部署在类型检查阶段失败（`Cannot find module './slack-raw-text.js'`）。

- **[#3668] fix(slack): 恢复粘贴表格提取器——在 tip 恢复 compose（已合并）**
  - 确认了 #3667 的修复并将其合入主干。该组合修复确保 Slack 适配器在 composed checkout 中可完整通过类型检查。

- **[#3664] feat(config): 安装级默认模型与快速服务层级（已合并）**
  - 新增两个 host `.env` 配置项：`NANOCLAW_DEFAULT_MODEL`（为未设置模型的 agent 组填充默认模型）和 `NANOCLAW_FAST_MODE=1`（为所有 agent 开启 API 快速服务层级）。简化了多 agent 部署的初始化配置步骤。

### 构建与运维

- **[#3661] fix(container): 重试 Bun 安装而非直接失败镜像构建（已合并）**
  - 针对 `container/Dockerfile` 中通过 `curl | bash` 安装 Bun 时因网络抖动导致的偶发构建失败问题，增加了重试机制。对 CI/CD 可靠性有直接改善。

- **[#3659] fix(env): 统一带引号 .env 值的读取方式（已合并）**
  - 修复了 `src/env.ts:readEnvFile` 与 `setup/environment.ts:readEnvKey` 两个解析器对同一 `.env` 文件读写结果不一致的问题。前者会去除引号，后者不会导致的配置漂移。

- **[#3662] fix(task-script): 区分超时与命令失败的报错信息（已合并）**
  - `runScript` 执行 pre-task 脚本超时（30s）时，报错信息原来与命令非零退出完全一样（"Command failed"），现改为明确的超时提示。

- **[#3663] chore: 在示例与测试中使用中性占位名称（已合并）**
  - 将 `scripts/init-first-agent.ts` 和 `scripts/init-cli-agent.ts` 等文件中维护者姓名的占位替换为中性名称，改善新用户首次使用时的观感。

### 工程治理（CI/标签系统）

- **[#3647] ci(labels): 根据变更路径自动标注 area/* 和 kind/*（待合并）**
  - 在仓库已启用的 16 个 `area/*`、`kind/*`、`delivery/skill` 标签分类体系基础上，实现路径自动映射（如 `src/channels/*` 变更 → `area/channels`），以减少手动 triage。

- **[#3648] ci(labels): PR 模板 v2 与 token 解析和 managed-kind reconcile（待合并）**
  - 将 `.github/PULL_REQUEST_TEMPLATE.md` 升级为紧凑的 v2 合约（带 `nanoclaw-pr-template:v2` 标记），引入结构化 token 解析和 `kind/*` 分类的自动对齐。

- **[#3657] ci(labels): 以单个修复注释报告模板合规状态（待合并）**
  - CI-04 的分类检查将输出统一的 `template-compliance` commit status（红色 X 表示：v2 marker 无任何分类；绿色对勾表示合规），并以单条评论说明修复建议。

> **综合评估**: 今日合并的 PR 集中在稳定性修复（Docker 构建、env 解析一致性、Slack 适配器回归）与工程基础设施（CI 标签自动化、issue forms）。项目正在经历一次扎实的去技术债阶段，方向与社区反馈中的痛点高度一致。


## 4. 社区热点

### 今日最受关注：Signal 集成问题集中爆发（3 个新 Issue，均为同一作者 IT-Sage）

IT-Sage 在一天内提交了 3 个与 Signal 集成相关的 Issue，且提供了详尽的根因分析：

- **[#3671](https://github.com/nanocoai/nanoclaw/issues/3671): install-signal-cli.sh 固定 signal-cli 0.14.3 版本，导致新联系人会话建立时无限挂起（上游已在 0.14.7 修复）**
  - 核心痛点：`setup/install-signal-cli.sh` 将 `VERSION="0.14.3"` 写死，该版本存在 bug——与之前未建立过会话的 Signal 联系人收发消息会无限挂起，无任何错误提示或超时。用户被迫手动升级到 0.14.7 才能正常工作。

- **[#3670](https://github.com/nanocoai/nanoclaw/issues/3670): 专用号码 Signal 设置将 "owner" 授予 bot 自己的账号而非操作者，审批卡片消失于无人查看的 self-DM**
  - 核心痛点：文档中明确记载的"注册专用号码"路径（相对于默认的"作为辅助设备链接"）存在逻辑缺陷——`signal-auth.ts` 将 owner 角色分配给了 bot 自身账号，导致需要人工审批的操作（approval cards）被发送到 bot 的 self-DM 会话中，而操作者根本不会看到。

- **[#3669](https://github.com/nanocoai/nanoclaw/issues/3669): signal-auth 的 listAccounts 在非登录 shell 下找不到 ~/.local/bin 中的 signal-cli，安装向导错误地回退到 QR-link 流程**
  - 核心痛点：`install-signal-cli.sh` 将二进制安装到 `~/.local/bin`（该目录仅由 login shell 的 `.profile` 加入 `PATH`）。在非登录 shell 上下文（如 systemd service、cron、某些 CI 场景）中，`cliPath()` 解析失败，安装向导会静默回退到 QR-link 流程而非引导用户修正该问题。

> **分析**: 三个 Issue 相互关联，共同指向 **Signal 集成在非默认配置下（专用号码、非登录 shell）的开箱即用体验断裂**。值得注意的是，IT-Sage 对代码路径和文件级别的定位非常精确，说明其已进行了深入排查。这一系列 Issue 的集中爆发可能意味着 Signal 频道在特定用户群体中有着实质性使用规模，否则不会有人花时间做这类深度排障。维护团队应将其视为优先级较高的修复集群。

### 其他值得关注的讨论

- **[#3464](https://github.com/nanocoai/nanoclaw/pull/3464)（PR, 待合并）**: 删除已被 v2 command gate 取代的 v1-only `session-commands.ts`。该 PR 由非核心贡献者提交（wakqasahmed），涉及分叉分支的清理问题，已讨论了 7 天。

- **[#3364](https://github.com/nanocoai/nanoclaw/pull/3364)（PR, 待合并）: 添加 Context.dev MCP 集成** — 由社区成员 aadithyanr 提交，已存在 10 天。Context.dev 是新兴的 AI 工程上下文平台，该 PR 若被合并，将扩展 NanoClaw 与外部工具生态的连接能力。


## 5. Bug 与稳定性

按严重度排序：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| **高** | [#3660](https://github.com/nanocoai/nanoclaw/issues/3660) | **Session SQLite 数据库变为只读，阻止所有消息投递**（Discord 及所有频道出站消息均失败） | 🔴 开放中，**尚未有 fix PR** |
| **高** | [#3671](https://github.com/nanocoai/nanoclaw/issues/3671) | signal-cli 0.14.3 固定版本导致新联系人会话无限挂起（上游已修复） | 🔴 开放中；**已有明确修复路径**（升级至 0.14.7），待实施 |
| **中** | [#3669](https://github.com/nanocoai/nanoclaw/issues/3669) | signal-auth 在非登录 shell 下找不到 signal-cli，向导静默回退到 QR-link | 🟡 开放中，修复方案相对直接（建议改用 `~/.profile.d/` 或引导用户显式传入 `SIGNAL_CLI_PATH`） |
| **中** | [#3670](https://github.com/nanocoai/nanoclaw/issues/3670) | 专用号码路径将 owner 授予 bot 自身，审批卡片发送至无人查看的 self-DM | 🟡 开放中，涉及 `signal-auth.ts` 的账号绑定逻辑，需要进一步设计 |
| **已修复** | [#3668](https://github.com/nanocoai/nanoclaw/pull/3668) / [#3667](https://github.com/nanocoai/nanoclaw/pull/3667) | Slack 适配器因缺少 `slack-raw-text.ts` 导致类型检查失败的回归 | ✅ 已合并，在 tip 验证通过 |

> **重点警示**: [#3660](https://github.com/nanocoai/nanoclaw/issues/3660)（SQLite 只读）是当前最严重的功能阻断性问题——影响全渠道消息投递且无 workaround。该 Issue 已开放约 12 小时，至今无 PR 关联。建议维护团队优先排查会话数据库的写权限/mmap 限制/磁盘空间问题。


## 6. 功能请求与路线图信号

| 功能/改进 | 来源 | 当前状态 | 是否具备纳入下一版本的信号 |
|---|---|---|---|
| **CI/标签全自动分类**（area/* 按路径自动映射、kind/* 按 PR 类型、模板 v2 校验） | PR #3647, #3648, #3657（核心成员 glifocat） | 待合并 | **强信号**——核心成员主导，多 PR 协同设计，且已完成仓库端标签初始化 |
| **Issue 表单（4 种类型）**：bug report / skill request / doc correction / security hardening | PR #3644（核心成员 glifocat） | 待合并 | **强信号**——与上述 CI 改造属于同一"intake taxonomy"体系 |
| **安装级默认模型与快速服务层**（`NANOCLAW_DEFAULT_MODEL` / `NANOCLAW_FAST_MODE`） | PR #3664（已合并） | ✅ 已合入 | 已进入主干，可通过配置项直接使用 |
| **Context.dev MCP 集成** | PR #3364（社区成员 aadithyanr） | 待合并（已 10 天） | 信号中等——社区贡献，持续获得维护者关注但暂无合并/关闭动作 |
| **Slack 显式房间交接工具**（多 agent 切换） | PR #3545（核心成员 Koshkoshinsk） | 待合并 | 信号较强——核心成员提交，含多方校验（self、unknown、duplicate、outsider） |
| **30 分钟 turn 上限可配置化** | PR #3646（核心成员 glifocat） | 待合并 | 信号较强——修复 host sweep 的硬编码常量，属长期配置灵活性问题 |
| **上下文与文档**：CONTRIBUTING.md 增加 issue-side intake 指南 | PR #3651（核心成员 glifocat） | 待合并 | 信号强——与上述工程治理体系配套 |

> 趋势判断：维护团队（glifocat、gavrielc 等）正在同步推进 **工程效率（CI 自动化）** 与 **运行稳健性（构建重试、env 解析统一）** 两条主线。前者意味着项目将更快处理外部贡献，后者暗示即将发布的新版本会更稳定。


## 7. 用户反馈摘要

来自今日 Issue 和 PR 评论的真实声音：

- **信号集成体验存在较大摩擦**：IT-Sage 在三个 Issue 中系统性地暴露了 Signal 通道在非默认配置下的多处断点，语气务实但隐含对文档/实际路径不一致的挫败感。核心诉求是："文档里说的替代方案不可用，且失败时没有任何错误提示——我无法知道 systemd 环境下哪里出了问题。"

- **对开箱即用的高期望**：yishuixuanyuan（Raspberry Pi 用户）的询问体现了典型的新用户场景——没有云服务器资源，希望在日常硬件上跑通 NanoClaw。目前没有 Raspberry Pi 专属文档或安装脚本，需要社区给出指引。

- **上游依赖的锁定正在造成隐性故障**：`install-signal-cli.sh` 固定 0.14.3 版本的问题揭示了一个工程实践盲点——**固定版本时未同步监控上游 bug 修复**。该问题可能导致用户在使用数月后突然遭遇"静默失败"，而根因在依赖层面而非 NanoClaw 本身。

- **容器化部署的韧性需求**：#3661（Bun 安装重试）和 #3659（.env 解析一致性）的合并表明，**容器/Docker Compose 部署已成为主流使用路径之一**，用户对构建稳定性和配置一致性的要求在提高。


## 8. 待处理积压

以下为值得维护者关注的长期未响应或悬而未决的条目：

| 条目 | 类型 | 创建时间 | 停留时长 | 说明 |
|---|---|---|---|---|
| [#3464](https://github.com/nanocoai/nanoclaw/pull/3464) — 删除 v1-only `session-commands.ts` | PR | 2026-08-23 | 7 天 | 目标明确（修复 #2603 的 v1/v2 冲突），卡在 `skill/compact` 分支与 `main` 的合并策略上。建议核心成员介入提供合并指引。 |
| [#3364](https://github.com/nanocoai/nanoclaw/pull/3364) — Context.dev MCP 集成 | PR | 2026-08-20 | 10 天 | Skill 类型 PR，对生态扩展有价值的社区贡献。超过一周未获得 review feedback，建议至少给出初步反馈（accept/request changes）。 |
| [#3545](https://github.com/nanocoai/nanoclaw/pull/3545) — Slack 显式房间交接 | PR | 2026-08-25 | 5 天 | 核心成员提交，功能完整（含 5 类输入校验），处于待 review 状态，与今日 Slack 相关修复有一定交集，建议尽快 review。 |
| [#3660](https://github.com/nanocoai/nanoclaw/issues/3660) — Session DB 只读错误 | Issue | 2026-08-29 | 12 小时+ | **严重度高**：全渠道消息投递阻断。目前零评论零 PR 关联，恳请优先响应。 |
| [#3634](https://github.com/nanocoai/nanoclaw/issues/3634) — （隐含）Signal 版本升级路径缺失 | Issue | — | — | 由 #3671 引申而来——项目是否有统一的依赖版本审计/升级节奏？这将是长期工程治理课题。 |

---

**健康度总结**: NanoClaw 当前处于"高频合并 + 精细化治理"阶段。核心团队（gavrielc、glifocat、Koshkoshinsk）在稳定性和工程基础设施上的投入高，尤其是 CI 标签体系与 issue 表单的引入，将有效提升未来社区贡献的处理效率与透明度。然而，SQLite 只读问题与 Signal 集成缺陷暴露出"依赖固定 + 硬编码 + 非登录 shell"等生产环境下的深水区问题。建议维护团队在下一次版本发布前集中修复 Signal 一体化问题（#3669-#3671），并对 #3660 立即安排排查。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-30

*数据窗口：2026-08-29 ~ 2026-08-30 | 数据源：github.com/nearai/ironclaw*


## 1. 今日速览

今日 IronClaw 维持中等偏上的活跃度：1 条 Issue 更新，内容为上下文压缩（compaction）机制的性能缺陷报告，附带详细的 PinchBench 基准数据，具有较高的工程参考价值。PR 侧更新 6 条，其中 3 条（#7989、#7990、#7991）由同一位外部贡献者提交，均为工具实现或开发者体验相关的 bug 修复，且全部标记为 low risk；另有一条由 CI 机器人自动生成的知识图谱刷新 PR 和两条核心团队提交的压缩/循环终止修复。没有新的版本发布。值得注意的是，6 条 PR 全部处于待合并状态，合并积压开始出现，需关注后续合入节奏。整体来看，项目处于"核心团队持续推进 + 外部贡献者稳定涌入"的健康发展状态。


## 2. 版本发布

过去 24 小时内无新版本发布。


## 3. 项目进展

今日无合并/关闭的 PR。6 条待合并 PR 代表了当前项目的推进方向，其中最有价值的是两条核心团队提交的修复：

- **[#7978] fix(compaction): bound cumulative summarizer input**（size: L, risk: low, core）— 针对压缩摘要器的输入上限进行修复。此前仅对单条消息设置上限，导致累计摘要加上多消息增量可能超出模型上下文窗口。该修复直接支撑 Issue #7824 中提出的问题（详见下文"Bug 与稳定性"）。
- **[#7977] fix(loop): terminate on dominant repeated output, cap interactive wall clock**（size: XL, risk: low, scope: docs, core）— 修复默认循环族无法终止"无进展"运行的问题。背景是 PR #7531 移除了基于摘要的终止器后，生产环境出现了单次运行 593 次工具调用、持续 70 分钟的失控案例（run `e3513a4e`）。该 PR 同时为交互模式增加了墙钟时间上限，是稳定性方面的重要补强。

其余 4 条为外部贡献和 CI 维护类变更（详见第 5 节）。项目整体正在围绕"上下文成本控制"和"循环终止可靠性"两个方向进行收敛。


## 4. 社区热点

今日讨论热度最高的条目是 Issue **#7824 "Context projection: Pi-style compaction barrier, structured summaries, overflow recovery"**，该 Issue 创建于 2026-08-22，目前有 5 条评论，且与今日两条核心 PR（#7978、#7977）直接相关。

**核心诉求分析：** 该 Issue 用实测数据指出了 IronClaw 当前架构的一个致命成本问题——每次请求都将完整线程历史重放给模型。PinchBench 基准（147 个任务，DeepSeek-V4-Flash）对比显示：

| 运行版本 | 准确率 | 输入 tokens | 成本 |
|---------|--------|------------|------|
| `949991b5`（PR #7491 后） | 54.4% | 227.7M | $10.31 |
| `72a540b0`（旧 shell 基线） | 60.5% | 55.1M | $2.52 |

4 倍以上的 token 消耗和成本，同时准确率不升反降——这不仅是成本问题，更可能是上下文污染/注意力稀释导致的性能退化。Issue 标题中提到的 "Pi-style compaction barrier"、"structured summaries"、"overflow recovery" 暗示了一个系统性的方案（借鉴 Pi 项目的实现思路），而非简单的参数调优。社区对该诉求的持续关注（发布 7 天仍有讨论）说明这是一个用户能直接感知到成本压力的关键问题。


## 5. Bug 与稳定性

按严重程度排列：

### 高 — 生产失控级

- **默认循环无法终止非进度运行** — 生产运行 `e3513a4e`（2026-08-27）出现 593 次工具调用、持续 70 分钟无产出。根因：PR #7531（为防止 #7486 中幂等轮询误杀而引入的修复）移除了基于摘要的终止机制后，未提供替代方案。**已有修复 PR：#7977**（待合并）。
  - 链接：[Issue #7486](https://github.com/nearai/ironclaw/issues/7486)（根因来源）、[PR #7977](https://github.com/nearai/ironclaw/pull/7977)

### 中 — 上下文成本失控（架构级）

- **全量历史重放导致 token 消耗 4 倍增长 + 准确率下降** — Issue #7824 的实测数据表明，每一次模型请求都要重放完整线程历史，且与旧版 shell 基线相比，准确率从 60.5% 跌至 54.4%。**已有部分修复 PR：#7978**（限制压缩器输入），系统性方案仍在讨论中（见第 6 节）。
  - 链接：[Issue #7824](https://github.com/nearai/ironclaw/issues/7824)、[PR #7978](https://github.com/nearai/ironclaw/pull/7978)

### 低 — 工具行为缺陷（已有修复，待合并）

- **`list_dir` 不报告具体路径名** — 当请求不存在的目录时，`stat_optional` 将 `NotFound` 当作普通缺失处理并返回 `Ok(None)`，模型无法得知是哪个路径出了问题。**修复 PR：#7989**（待合并）。
  - 链接：[PR #7989](https://github.com/nearai/ironclaw/pull/7989)
- **工具披露将"无法解析的工具名"错误标记为输入编码错误** — 两件无关的情况（真正的非法编码 vs. 无法解析的工具名）被统一的 `FailureKind::InputEncode` 打标，导致诊断信息误导。**修复 PR：#7990**（待合并）。
  - 链接：[PR #7990](https://github.com/nearai/ironclaw/pull/7990)

### 低 — 开发者体验（已有修复，待合并）

- **macOS 上 pre-push hook 无法运行** — 测试和 CI 脚本各有一处独立问题，导致 Mac 开发者本地无法执行 hook，实际上被绕过。**修复 PR：#7991**（待合并）。
  - 链接：[PR #7991](https://github.com/nearai/ironclaw/pull/7991)


## 6. 功能请求与路线图信号

Issue #7824 是目前最能代表路线图方向的功能请求，核心诉求有三层：

1. **Compaction barrier** — 在上下文构建时设置一道"压缩屏障"，避免无限回溯；
2. **Structured summaries** — 将压缩摘要从纯文本升级为结构化格式，以保留更多可用的语义信息；
3. **Overflow recovery** — 当上下文溢出时，有确定的恢复策略，而非静默截断。

今日的 PR #7978（限制累计摘要器输入）可以看作对该 Issue 的"止血"式响应，但它在实现层面只解决输入边界问题，并未触及"结构化摘要"和"溢出恢复"这两个更深层的设计议题。结合 IronClaw 当前 "replays full thread history into every model request" 的架构现状，预计 **#7978 会先合并作为短期缓解，随后项目将启动一个更大规模的上下文管理重构**，以对齐 #7824 的理想方案。值得关注这一点，因为它可能带来破坏性变更（例如上下文格式变化、需要迁移现有的持久消息存储）。

此外，PR #7977（循环终止 + 交互墙钟上限）也隐含了一个产品方向信号：**交互模式需要硬性的时间/调用上限**，这说明项目开始关注交互场景下的资源失控治理。


## 7. 用户反馈摘要

以下反馈来自 Issue #7824 及其关联讨论：

- **成本敏感型用户对 token 消耗的放大反应强烈**：在一次 PinchBench 运行中，token 从 55.1M 膨胀到 227.7M（4.1 倍）、成本从 $2.52 涨到 $10.31（4.1 倍），而准确率反向下降了 6.1 个百分点。贡献者 `serrrfirat` 对此的评价是"measured, not hypothetical"——这是实测数据，不是理论推演。
- **社区对回归现象保持清醒**：PR #7977 的摘要明确提到"PR #7531 removed a digest-based terminator…Since then nothing in the default loop family can end a run for non-progress"，说明社区清楚地记录了一个"修复引入回归再修复"的循环，这种透明记录对用户建立信任是有帮助的。
- **外部贡献者对开发者体验的改进意愿较强**：standardtoaster 一人提交了 3 条修复 PR（#7989、#7990、#7991），涉及工具诊断信息、错误归因分类和 macOS 开发体验，说明项目的外部贡献土壤较好，低风险修复的 Onboarding 路径足够畅通。


## 8. 待处理积压

| 条目 | 类型 | 创建时间 | 最后活跃 | 状态/风险 |
|------|------|---------|---------|----------|
| [#7824](https://github.com/nearai/ironclaw/issues/7824) Context projection | Issue（含完整方案提案） | 2026-08-22 | 2026-08-29（有评论） | 已有部分缓解 PR（#7978），系统性方案未定；涉及成本+准确率双重问题，**建议核心团队给出明确 roadmap 跟踪** |
| [#7977](https://github.com/nearai/ironclaw/pull/7977) fix(loop) | PR（XL, core） | 2026-08-28 | 2026-08-29 | 直接对应生产失控事件（593 次调用/70 分钟），**等待合入中，建议优先 review** |
| [#7978](https://github.com/nearai/ironclaw/pull/7978) fix(compaction) | PR（L, core） | 2026-08-28 | 2026-08-29 | 直接缓解 #7824 的成本问题，**建议与 #7977 并行优先处理** |
| 6 条 PR 全部处于 OPEN 状态 | — | — | — | 今日无合并动作，合并积压形成中。考虑到其中 4 条为 low risk，**建议维护者安排一次批量 review + 合并** |

---

*本日报由 AI 自动生成。所有数据均来自公开 GitHub 仓库信息。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-30

> 数据来源：github.com/netease-youdao/LobsterAI | 统计窗口：2026-08-29 ~ 2026-08-30

---

## 1. 今日速览

过去24小时内，LobsterAI 项目活跃度处于**中等水平**。Issues 侧仅1条更新（且为stale标记的老Issue，非新报告），PR 侧有5条待合并的增强类PR，涵盖工具错误提示、技能快捷创建、Agent 图标修复、计划任务体验优化及团队配置导入导出。**值得注意的信号**：5条PR均创建于2026-03-31但至今（5个月）未合并，且均被标记为stale——项目存在严重的 PR 积压问题。无新版本发布。整体评估：**维护活动存在，但合并节奏明显滞后，社区贡献通道可能未得到及时响应。**

---

## 2. 版本发布

过去24小时内无新版本发布。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，5条 PR 均停留在待处理状态。但其内容本身反映了项目近期的演进方向，值得关注：

| PR | 功能方向 | 潜在影响 |
|---|---|---|
| [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) | Cowork 工具错误高亮 + 跳转到底部按钮 | 对工具调用失败的可视化反馈，直接影响用户排查效率 |
| [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) | 技能管理页一键创建技能（跳转 Cowork + 预填 prompt） | 降低创建技能的操作成本，属于工作流优化类增强 |
| [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | 修复创建 Agent 时默认图标不一致的 bug | 侧边栏 🦞 vs 页面 🤖 不统一问题，属于真实存在的 UI 一致性 bug |
| [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) | 计划任务列表显示上次运行时间 + 运行状态反馈 | 计划任务功能目前缺乏时间维度信息，用户无法直观判断执行情况 |
| [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) | 团队配置模板导出/导入（Settings → About） | 面向团队级部署场景的配置迁移能力，对企业用户有较大价值 |

> 虽然上述 PR 均未合入，但它们的**集中出现**（同期创建）表明社区有明确的功能演进诉求，维护者宜尽快集中审阅。

---

## 4. 社区热点

今日唯一活跃的 Issue 为 **#1139**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1139)），状态为 OPEN + stale，标题："新建重名的agent后，当前agent实际已切换为新建的，但未获取到其任务记录。"

- 作者：tzhouzhou
- 创建于 2026-03-31，最后更新于 2026-08-29（说明过去5个月内无人跟进？）
- 评论数：1，👍：0

**诉求分析**：该 Issue 描述了一个**状态同步缺陷**——用户新建与现有 agent 同名的 agent 后，界面已切换至新 agent，但任务记录仍停留在旧 agent 上，需手动切换两次才能刷新。这属于典型的前端状态管理缺陷（可能是 selectedAgentId 更新与记录列表加载未做联动）。从复现步骤判断，作者是深度用户，且对该缺陷影响到了日常工作流。

> 该 Issue 已 stale，但问题大概率仍然存在，建议维护者即时验证并推进修复。

---

## 5. Bug 与稳定性

### 已报告的 Bug

| 严重程度 | Issue/PR | 描述 | 是否已有修复 PR |
|---|---|---|---|
| 中 | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | 重名 agent 切换后任务记录不同步，需二次切换才能恢复 | ❌ 无 |
| 低 | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | 创建 Agent 时默认图标不一致（侧边栏🦞 vs 页面🤖） | ✅ PR 已提交，待合并 |

> 严重程度评估：#1139 影响用户操作连贯性，且无 workaround（需多次切换），按标准应属中高优先级，但长期未修复。建议维护者将其移出 stale 状态并指派负责人。

---

## 6. 功能请求与路线图信号

基于今日 PR 内容，可捕捉到以下路线图信号：

| 信号 | 来源 | 判断 |
|---|---|---|
| **工具调用错误可视化** 成为优化重点 | [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) | 表明 Cowork 会话中的工具失败反馈是用户高频痛点 |
| **计划任务功能补齐时间维度信息** | [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) | scheduled-tasks 模块正在日益成熟，用户需要更多执行状态感知 |
| **团队/企业级配置管理需求上升** | [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) | 导出/导入 JSON 模板意味着 LobsterAI 正被用于团队部署场景，配置迁移成为刚需 |
| **技能创建流程简化** 是体验优化方向 | [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) | 一步直达 skill-creator 的引导式创建，明显降低了新用户学习成本 |

> 上述需求大多来自**社区开发者自发贡献**（非官方），说明用户开始主动补足产品体验短板。若项目组认可这些方向，建议尽快回应并合入，以保持社区贡献者的积极性。

---

## 7. 用户反馈摘要

从今日唯一活跃 Issue [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) 可提取以下用户反馈：

- **使用场景**：用户在日常工作中频繁创建/删除/重命名 agent（“tyd的agent”案例），属于高频迭代型使用者。
- **具体痛点**：创建重名 agent 后，任务记录与 agent 身份不同步，用户需要记住“二次切换”才能看到正确数据——**这不仅是 bug，更暗示前端会话状态管理逻辑中存在隐藏耦合**。
- **隐含需求**：用户期望 agent 切换时状态能原子性更新（即切换导致界面完整刷新），而不是依赖经验性的 workaround。

> 该反馈质量较高（有截图、有复现步骤），建议维护者回复并确认修复排期。

---

## 8. 待处理积压

以下为长期未响应的重要条目，建议维护者重点关注：

| 类型 | 编号 | 标题 | 创建时间 | 搁置时长 | 备注 |
|---|---|---|---|---|---|
| Issue | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | 新建重名 agent 后任务记录不同步 | 2026-03-31 | ~5个月 | 无官方回复，已 stale |
| PR | [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) | feat(cowork): 工具错误高亮 + 跳转按钮 | 2026-03-31 | ~5个月 | 纯前端增强，低风险 |
| PR | [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) | feat(skills): 快捷创建技能入口 | 2026-03-31 | ~5个月 | 需涉及 App.tsx 改动 |
| PR | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | fix(agent): 默认图标不一致修复 | 2026-03-31 | ~5个月 | 明确 bug fix，风险极低 |
| PR | [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) | feat(scheduled-tasks): 运行时间展示 | 2026-03-31 | ~5个月 | 纯 UI 增强 |
| PR | [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) | feat(settings): 团队配置模板导入导出 | 2026-03-31 | ~5个月 | 涉及新 IPC，需谨慎审阅 |

> ⚠️  **健康度警示**：5条 PR 整体积压长达5个月且全部标记为 stale，这在开源项目中是一个**高危信号**——若长时间得不到反馈，社区贡献者很容易放弃后续贡献。建议维护者在本周内集中处理：至少关闭不采纳的 PR 并给出说明，合入低风险的 bug fix（#1143）和纯增强类 PR（#1138、#1144），对涉及架构调整的（#1145）给出明确的审阅时间表。

---

📌 **日报总结一句话**：LobsterAI 社区活跃但官方响应滞后，5条高质量 PR 和1个真实 bug 均被搁置5个月，项目需尽快疏通合并通道以维持社区生态健康度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-30

## 1. 今日速览

Moltis 项目在过去24小时内整体活跃度偏低，但尚在正常波动范围内。唯一一条活动是新增一个关于沙盒环境运行失败的 Bug 报告（#1246），截至数据采集时尚未获得任何评论或反响。PR 侧完全静默——既无新提交也无合并/关闭动作，同时没有新版本发布。总体而言，项目今日处于低频维护状态，社区讨论热度较低，需要关注后续是否有连锁反馈。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无合并或关闭的 PR。**

过去24小时内没有任何代码变更被合入主干，也没有 PR 被关闭。这意味着项目在功能推进、Bug 修复或技术债清理方面没有可见的前进。对于维护者而言，今日属于"零合并日"，建议关注 PR 队列中是否有等待过久的贡献者，避免挫伤外部参与积极性。

---

## 4. 社区热点

今日唯一活动为 Issue #1246（[链接](https://github.com/moltis-org/moltis/issues/1246)），目前评论数为 0，👍 数为 0，暂无讨论热度。

- **#1246 [bug]**: 用户在添加节点后无法在沙盒环境中运行 Moltis。作者 maop 声称已搜索过现有 issues、使用最新版本，并附上了会话上下文（截断显示）。

**分析**：虽然目前零互动，但该问题的场景描述指向一个真实的使用链条——多节点配置后进入沙盒模式失败。这可能涉及节点注册状态与沙盒隔离机制的交互逻辑，有一定排查深度。若该问题真实存在，可能影响多节点部署用户的核心体验，建议维护者尽快响应以避免负面口碑积累。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 中 | [#1246](https://github.com/moltis-org/moltis/issues/1246) | 添加节点后无法在沙盒中运行 | 待 triage，无 fix PR |

该 Bug 影响的是"节点添加 → 沙盒运行"这一复合场景，目前无法判断是沙盒启动逻辑、节点同步问题还是权限校验失败。由于涉及部署链路的稳定性，建议维护者尽快复现并分类到相应模块，同时检查是否与其他已知的多节点问题存在关联。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**

鉴于今日无 PR 合并、无 feature request 提出，路线图层面没有新增信号。当前版本的功能优先级可能仍沿用前几日的方向，建议关注未来几天 #1246 的修复过程是否会暴露出沙盒架构的改进需求（如节点状态同步机制优化）。

---

## 7. 用户反馈摘要

由于今日仅有一条无评论的 Issue，用户反馈信息非常有限。从 #1246 的文本中可以提取以下信息：

- **用户行为**：已主动搜索过现有 issues（确认非重复报告）、确认使用最新版本——表明此用户有一定耐心和配合度，属于值得维护的社区成员。
- **痛点场景**：在沙盒环境中添加节点后运行受阻，推测用户可能在进行多节点模拟或隔离测试时遭遇功能阻断。
- **信息完整度**：作者提到"包含完整会话上下文"，但由于截断显示不全，实际信息量待维护者进一步查看。

**建议**：维护者在回复时感谢用户提供的详尽信息，缩短故障排查的往返时间，同时注意保留这位用户的参与积极性。

---

## 8. 待处理积压

今日没有发现新增的长时间未响应 Issue 或 PR。不过基于当前项目状态，以下方面值得维护者留意：

- **PR 队列观察**：今日 PR 零活动，若此状况持续多日，建议检查是否有贡献者在等待 review 或 CI 结果，避免隐性积压。
- **Issue #1246 的后续响应时间**：目前该 Bug 已存在约 2 天（创建于 08-28），尚无维护者回复。建议在 24 小时内给出初步响应（即使只是确认收到或标记 triage），以维持社区对项目响应速度的信心。
- **长期健康度提示**：连续多日仅有低频活动时，建议在下次发布或里程碑更新时适当披露项目规划，稳定社区预期。

---

*本日报由 AI 分析师自动生成，数据截至 2026-08-30。所有链接均指向 GitHub 上的原始 Issue/PR。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-08-30** | **数据来源：** agentscope-ai/CoPaw GitHub

---

## 1. 今日速览

过去24小时 CoPaw 项目保持高度活跃，共产生 10 条 Issue 更新（8 新开/活跃、2 关闭）和 6 条 PR 更新，无新版本发布。社区讨论焦点集中在多租户版 Hub 的路线图规划（#7318，14 条评论）、Plan Mode 功能回归诉求（#7405）、以及桌面端主题定制需求（#7406）上。Bug 方面，报告了 2 个可能导致服务不可用的严重问题（#7402 与 #7301），均处于待修复状态。PR 队列中 6 个待合并 PR 已停留较长时间（最长达 20 天），建议维护团队加速审阅节奏。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，6 个 PR 仍处于打开状态。其中值得重点关注：

- **[#6874] feat(mcp): add configurable tool call timeout**（已标记 *Under Review*，8月10日创建，等待 20 天）— 将 MCP 工具调用超时设为可配置（默认 300 秒），同时支持旧 `timeout` 键的自动迁移。关闭 #6724，关联 #3997。这是一个等待已久的增强，涉及配置项兼容性设计，建议优先审阅。

- **[#7356] feat(console): add chat scroll lock** 与 **[#7357] feat(chat): add tool call visibility toggle** — 两个功能型 PR 均来自 AaronZ345，分别解决长流式输出时视线跟踪问题和工具调用卡片噪音问题，直击桌面端日常使用痛点。

- **[#7401] fix(acp): prevent Windows ACP agent stalls during workspace bootstrap** — 修复 Windows 下 ACP agent 因事件循环冻结导致启动挂起数分钟的问题，属于平台级稳定性修复。

- 另有 2 个 first-time-contributor PR（#7403 README 更新、#7220 图片尺寸校验），其中 #7220 自 8月23日 起已等待 7 天。

---

## 4. 社区热点

### 🔥 [#7318] QwenPaw Hub 多租户版路线图讨论（14 条评论）
> [agentscope-ai/QwenPaw Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)

社区呼声最高的议题。QwenPaw 从个人助手起家，但团队协作需求日益强烈，该 Issue 由官方发起，征求 2.2.0 多租户版 Hub 的下一步建设方向。关联了早期的 #2324（多用户访问与管理员管理技能）等历史需求。社区对 Multi-tenant 的期待明显，这可能是项目从个人工具走向团队产品的重要转折点。

### 💬 [#7405] Plan Mode 功能是否回归？（2 条评论）
> [agentscope-ai/QwenPaw Issue #7405](https://github.com/agentscope-ai/QwenPaw/issues/7405)

用户怀念旧版 Plan Mode 的"先看计划再执行"体验，认为虽然新引入了 mission/goal 模式且有快照回滚，但等待模型犯错再回滚的方式效率太低。2 小时内即获得评论回应，说明核心用户对执行前可视化计划的需求仍然强烈。

### 🎨 [#7406] 桌面端官方主题支持（1 条评论）
> [agentscope-ai/QwenPaw Issue #7406](https://github.com/agentscope-ai/QwenPaw/issues/7406)

用户被锁定在单一橙色主题（`#f07e26`）中，不得不通过直接修改 `.app` 包内 `index.html` 的方式实现定制——但每次应用更新都会覆盖。诉求直指：提供官方主题配置入口、设置页或 CSS 注入点。

---

## 5. Bug 与稳定性

### 🔴 严重（服务不可用/请求失败）

| Issue | 问题描述 | 状态 |
|-------|---------|------|
| [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) | **空 `output_text` 块毒化会话历史**：一条包含 `content=[{"type":"output_text","text":""}]` 的助手消息被持久化后，后续所有请求均触发 Ark Responses API 400 错误 `MissingParameter: input.content.text`。影响使用 Volcengine Ark 提供方的用户。**无 fix PR** | 待处理 |
| [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) | **MCP 遗留迁移产生悬空凭据引用**：迁移后空 env 客户端残留凭据引用，导致每个新会话均抛 `CredentialNotFoundError`，完全无法使用。**无 fix PR** | 待处理 |

### 🟡 中等

| Issue | 问题描述 | 状态 |
|-------|---------|------|
| [#7399](https://github.com/agentscope-ai/QwenPaw/issues/7399) | `daily_users` 时间戳标为"UTC"实为本地时间。**非 Bug**——已确认为 AgentScope `Msg` 类设计选择（`datetime.now().isoformat()` naive datetime），用户提了澄清后关闭 | 已澄清 |

### ✅ 已关闭

- [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) — Chrome tab 生命周期可配置化需求（8月6日创建，8月29日关闭），未确认是否已通过其他 PR 实现
- [#7400](https://github.com/agentscope-ai/QwenPaw/issues/7400) — 用户自行撤回（"搞错"）

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 来源 | 被纳入下版本可能性 |
|------|----------|------|-------------------|
| **多租户 Hub** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 官方 + 社区共同推动 | 官方已预告 2.2.0 推出，高概率 |
| **主题定制**（强调色/字体/间距） | [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | 用户诉求明确，已有 hack 方案 | 中——上线依赖官方 UI 架构决策 |
| **`/btw` 侧边问题命令** | [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | 对标 Claude Code v2.1.72 受欢迎功能 | 中高——实现成本低，社区有参考 |
| **Plan Mode 回归** | [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | 老用户诉求 | 中——需与 mission/goal 模式整合设计 |
| **Console 暴露 DingTalk `card_auto_layout`** | [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | 功能已存在（#2238），仅缺 UI 暴露 | 高——实现成本低，纯前端工作 |
| **MCP 工具调用超时可配置** | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | 已开发完成待合入 | 极高——已处于 Review 阶段 20 天 |
| **Chat 滚动锁定 + 工具调用可见性开关** | [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) / [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | 已完成开发 | 高——直接提升桌面端阅读体验 |

---

## 7. 用户反馈摘要

- **"先看计划再执行"仍然是核心工作流诉求。** #7405 用户明确表示虽然快照回滚能兜底，但"等待模型做错再回滚"的方式令人沮丧，期望在执行前就确认模型意图。
- **多租户/团队协作需求集中爆发。** #7318 中社区反复要求多用户访问与管理员管理技能，个人助手工具正面临向团队产品的演进压力。
- **桌面端锁定感的负面情绪上升。** #7406 用户形容"每次更新都要重新 hack"，反映定制能力缺失正在消耗重度用户信任。
- **集成生态的坑开始显现。** #7402（Ark 400 错误）和 #7301（MCP 凭据悬挂）都发生在真实生产环境中，用户在等待修复期间可能被迫切换方案。
- **误报与自我澄清并存。** #7399 用户最终确认是框架设计而非 Bug，体现了社区自纠能力良好。

---

## 8. 待处理积压

### ⚠️ 需优先关注的长期开放项

| 项目 | 类型 | 等待天数 | 说明 |
|------|------|---------|------|
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) MCP 工具调用超时 | PR (Under Review) | **20 天** | 功能已完整实现且有关联 issue（#6724），长期未合入可能block其他 MCP 相关改动 |
| [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) 超大图片尺寸校验 | PR (first-time-contributor) | **7 天** | first PR 长时间无反馈可能打击新贡献者积极性，且该修复可防止视觉模型提供商报错 |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) Chrome tab 生命周期可配置 | Issue（今日关闭） | 23 天 | 已关闭但未找到对应的实现 PR，需确认是否有其他方式解决，避免"假装解决" |

### 📊 风险提示

- **PR 审阅积压趋势**：6 个 PR 平均等待时间约 8.5 天，其中 2 个超过 1 周。若合并节奏持续放缓，社区贡献者积极性可能受挫。
- **2 个严重 Bug 无 fix PR**：#7402（空内容毒化会话）影响面较大（所有使用 Ark 响应用户），若传播可能损害项目稳定性口碑。

---

> **项目健康度总评：** 🟡 **活跃但审阅积压**。社区讨论质量与需求信号丰富，Bug 响应速度因 PR 合并滞缓而受影响。建议维护团队优先处理 #7402 和 #7301 的修复方案，并加速 #6874 的审阅/合并决策。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-30

## 1. 今日速览

ZeroClaw 项目今日保持高强度迭代状态，过去 24 小时内产生 26 条 Issue 更新与 50 条 PR 更新，其中 42 条 PR 处于待合并状态，反映项目仍处于密集开发期。安全与架构类议题占据主导地位，包括沙箱策略、内存子系统、OAuth 凭据缓存加固等 RFC 和修复持续活跃。**值得关注的风险信号**：连续两天 CI 依赖公告扫描失败（`chacha20` crate 被 yanked），且多个安全相关 PR（#9678、#10370、#10015）在 `do-not-merge` 或 `needs-maintainer-review` 状态下停滞多日，维护者审批队列存在一定积压。v0.8.5 发布线已进入 8 月 30 日收尾节点，但本周暂无新版本发布。


## 2. 版本发布

过去 24 小时无新版本发布。目前进行中的 v0.8.5 稳定化里程碑（[Issue #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)）已冻结新功能引入（8 月 4 日冻结），采用每周切割制度发布已就绪工作。


## 3. 项目进展

今日共合并/关闭 8 条 PR，其中值得关注的合并包括：

- **[#10012](https://github.com/zeroclaw-labs/zeroclaw/pull/10012) fix(providers): enforce OAuth callback and refresh contracts**（关闭）— 修复 OAuth 回调解析绕过 PKCE state 校验的漏洞，并统一不同 provider 的 refresh-error 策略。属于安全加固类核心修复。
- **[#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) feat(mcp): materialize resource blob with aggregate budget preflight**（关闭）— 将 MCP `tools/call` 返回的内嵌二进制资源物化到 agent workspace，配合预算预检机制，对应 Issue #9179 的完整落地。
- **[#10444](https://github.com/zeroclaw-labs/zeroclaw/pull/10444) / [#10440](https://github.com/zeroclaw-labs/zeroclaw/pull/10440)**（关闭）— 修复 ZeroCode TUI 中 SGR 鼠标事件被拆分后错误输入 composer 的问题（对应 Issue #10437）。

**修复的已关闭 Issue：**

- [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) cron 工具未按 agent 隔离的 S0 级安全问题已关闭，关联 PR #10177 将 agent_alias 注入 SQL 变更操作，从根上杜绝跨 agent 的 cron 任务操作。
- [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) Deepgram/OpenAI 转录 provider 静默丢弃语言提示的问题已修复。
- [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) Telegram 回复线程导致记忆碎片化的问题已关闭。

**PR 合并后项目整体推进评估：** 本周核心方向为安全加固（OAuth、cron 隔离、临时文件权限）与 MCP 功能补全双线并进。MCP 资源物化能力补齐了工具调用的二进制内容处理短板，而 cron agent 隔离则消除了一个 S0 级数据安全风险。


## 4. 社区热点

### 最活跃讨论

- **[Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy — filesystem and network restrictions**（16 条评论）
  作者 `raren` 于 5 月 28 日发起，至今仍在持续讨论。核心诉求是统一应用层路径准入与操作系统沙箱后端（Bubblewrap/Landlock/Seatbelt）的策略漂移问题。该 RFC 标记 `risk:high` 且 `needs-maintainer-review`，其长期活跃反映安全策略分层是社区关注焦点。

- **[Issue #9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) RFC: separate authoritative memory storage from optional enrichment connectors**（15 条评论）
  yanchenko 于 7 月 16 日提出，经过 8/22 与 8/30 两次维护者修订，体现了"有界连接器决策审查"的折中方案。讨论热度显示记忆子系统的架构边界是社区普遍关心的设计问题。

- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [Tracker]: Maintainer decision queue for RFCs and design issues**（14 条评论）
  跟踪维护者决策队列的元问题，本身即反映当前大量 RFC 等待审批的积压现状。

### 高反应 Issue

- **[Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) A2A protocol interoperability**（👍 7 个，10 条评论）— 社区对跨实例 Agent 通信协议的持续热情。

**诉求分析：** 热点集中在两大主题——安全策略的细粒度化（sandbox、权限隔离）与架构层规范化（存储与 enrichment 解耦、A2A 互操作）。社区对 ZeroClaw 的定位明显朝向"安全优先的多 Agent 基础设施"，而非单一聊天工具。


## 5. Bug 与稳定性

### 严重级（S0/S1）

| 严重度 | Issue | 标题 | 状态与 fix PR |
|--------|-------|------|---------------|
| S0（数据丢失/安全） | [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) | cron 工具未按 agent 隔离，任意 agent 可操作他人任务 | ✅ 已关闭，[PR #10177](https://github.com/zeroclaw-labs/zeroclaw/pull/10177) 已提交（OPEN） |
| S1（流程阻断） | [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) | Anthropic 兼容网关拒绝 tool result 中的 image_url 块 | 🔄 In progress，已 accepted，暂无关联 fix PR |

### 中等级（S2）

| Issue | 标题 | 状态 |
|-------|------|------|
| [#10436](https://github.com/zeroclaw-labs/zeroclaw/issues/10436) | OpenRouter 流式响应被总请求超时切断 | OPEN，新报告（8/29），暂无 fix |
| [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | AgentEnd 事件缺少 cost_usd 字段，channel 路径不发出 AgentEnd | OPEN，P1 |
| [#10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437) | ZeroCode 滚动时向 composer 插入 SGR 鼠标报告 | ✅ 已关闭，[PR #10444](https://github.com/zeroclaw-labs/zeroclaw/pull/10444) 已合并 |
| [#10456](https://github.com/zeroclaw-labs/zeroclaw/issues/10456) | MCP SSE reader 在超限事件后接受后缀数据 | OPEN，新报告（8/30），暂无 fix |

### 基础设施

- **[#10447](https://github.com/zeroclaw-labs/zeroclaw/issues/10447) / [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427)**：连续两天 CI 公告扫描失败，`chacha20` crate 0.10.0 被 yanked（Cargo.lock 第 66 行）。需执行 `cargo update -p chacha20`。属于供应链稳定性问题，P1 优先级。

**安全热点：** [Issue #10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) 报告 `zeroclaw-channels` 中临时文件使用 0o644 默认权限，可能泄露语音/图片等敏感数据。已有对应的自动化修复 PR（由 arena-ai-coding-agent 提交）。


## 6. 功能请求与路线图信号

### 高概率进入下一版本

- **MCP 资源物化**（[#9179](https://github.com/zeroclaw-labs/zeroclaw/issues/9179)）— PR #9196 已合并，功能已落地。
- **Type-resolved peer policy**（[#9880](https://github.com/zeroclaw-labs/zeroclaw/issues/9880)）— 将 `Vec<String>` 字符串文法升级为类型化的授权策略，当前状态 `blocked`，等待架构决策。
- **Emergency-stop 完整执行**（[#9802](https://github.com/zeroclaw-labs/zeroclaw/issues/9802)）— 对 in-flight 工具工作和网络出口层强制执行 kill-all/network-kill，P1 且 RFC 已提交。

### 值得关注的新功能

- **[#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) 从 POST /webhook 以 SSE 流式输出 agent-loop tokens** — 8/28 新报告，4 条评论，社区对流式交互有明确需求。
- **[PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) Hailo-Ollama 原生支持** — 面向边缘硬件（Hailo-8 AI 加速器）的 provider 扩展，标记 `do-not-merge` 状态，但值得跟踪。

### 路线图

[Issue #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) 纪念性子系统 parity 追踪器显示当前 7 个未完成项（4 issues + 3 PRs），跨会话记忆仍是对齐成熟 Agent 运行时的关键缺口。


## 7. 用户反馈摘要

- **自定义 OpenAI 兼容 provider 的痛点**（[#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063)）：用户 `Audacity88` 报告 Anthropic-backed 网关在工具返回图片时中断流程，S1 级 workflow-blocked。这暴露了兼容层适配器对多模态 tool result 的支持仍不完善。

- **Telegram 语音笔记在非英语场景下的静默失败**（[#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429)）：意大利语语音笔记被静默丢弃，日志仅输出 INFO 级信息。用户 `badbat75` 的痛点在于 **provider 静默忽略语言配置且无告警**，属于"无声故障"类问题。

- **多主机资源利用诉求**（[#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)）：用户 `kvnloo` 提出"家庭边缘网格"RFC——将闲置 PC、NAS 等设备组网扩展算力。这反映了 local-first 用户对水平扩展的真实需求。

- **OpenRouter 长响应被切断**（[#10436](https://github.com/zeroclaw-labs/zeroclaw/issues/10436)）：用户报告 `z-ai/glm-5.3-flash` 在长推理时被 HTTP 总超时切段，说明**流式场景下的 timeout 策略需要区分 TTFB 与总时长**。


## 8. 待处理积压

### 长期未合并的重要 PR（需维护者关注）

| PR | 标题 | 停滞天数 | 标签 | 阻塞原因 |
|----|------|---------|------|----------|
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | fix(config): harden Git shell policy arguments | 28 天 | `distinguished contributor`, `risk:high`, `size:XL` | `needs-author-action` + `needs-maintainer-review` 双等待 |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | fix(anthropic): support stored OAuth profiles | 35 天 | `trusted contributor`, `risk:high`, `size:XL` | `do-not-merge` 标记 |
| [#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370) | fix(providers): harden Copilot credential cache | 5 天 | `distinguished contributor`, `risk:high`, `do-not-merge` | 新增，尚未审阅 |
| [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) | fix(runtime): avoid nesting Docker sandbox inside Docker runtime | 35 天 | `risk:high`, `size:M` | `needs-maintainer-review` |

### 长期未解决的关键 Issue

| Issue | 标题 | 开放天数 | 优先级 | 备注 |
|-------|------|---------|--------|------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy | 94 天 | P2, risk:high | 16 条评论，`needs-maintainer-review`，讨论活跃但无决策 |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A protocol interoperability | 168 天 | P2 | 社区呼声高（👍7），仍处于 tracker 阶段，无具体实现 PR |
| [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | AgentEnd event missing cost_usd | 61 天 | P1 | 影响可观测性，有评论但无 assignee |

**维护者健康度提示：** 有 3 个 `do-not-merge` 标记 PR 均为安全相关（#9420、#10370、#10015），需明确其在 v0.8.5 之后的处置计划（合并/重基/关闭）。此外 #8692 维护者决策队列 tracker 的存在本身说明当前 RFC 审批流程需要更多维护者时间投入或更高效的决策机制。


> **综合结论：** ZeroClaw 项目活跃度极高，安全加固与架构演进双线推进。24 小时内解决了一个 S0 级安全问题（cron 隔离）、一个 S1 级流程阻断问题（OAuth），MCP 功能落地显著。但需警惕：CI 依赖扫描连续失败、4 个安全相关 PR 停滞、维护者审批积压可能成为后续迭代瓶颈。v0.8.5 临近收尾，建议优先处理 `do-not-merge` 安全补丁的最终处置。

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*