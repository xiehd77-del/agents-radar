# OpenClaw 生态日报 2026-08-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-19 01:19 UTC

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

# OpenClaw 项目动态日报 — 2026-08-19

## 今日速览

过去24小时OpenClaw项目保持着极高活跃度：共产生500条Issue更新与500条PR更新，但同时暴露了一个值得警惕的信号——**新开/活跃Issue高达477条，其中相当比例已确认带复现步骤且影响核心会话状态**；PR方面待合并数量达402条，合并/关闭仅98条，表明维护者审查队列正在累积。社区讨论热点高度聚焦于**会话状态损坏、网关事件循环阻塞、CLI预算压缩超时**等稳定性痛点，尤其是三个"diamond lobster"级（最高严重度）Issue均指向会话状态完整性，说明项目当前的核心技术债集中在对话会话生命周期管理上。今日无新版本发布，项目正处于密集修复循环中。

---

## 项目进展

### 关键状态信号
- **PR合并/关闭数**：98条（占PR更新总量的19.6%），其中有多个带 `maintainer` 标记的重要PR已合并
- **待合并PR**：402条，其中至少20条标记为 `ready for maintainer look` 或 `automerge armed`
- **新版本发布**：0个 — 当前可能处于版本发布前的修复集中期

### 今日值得关注的合并/关闭PR

| PR | 内容 | 状态 | 影响 |
|---|---|---|---|
| [#126096](https://github.com/openclaw/openclaw/pull/126096) | **fix(agents): keep guided auth atomic through creation** — 修复引导式 `agents add` 在凭证持久化与新agent创建之间非原子问题，取消或失败可能导致凭证残留 | 已关闭 | `auth-provider` 边界，影响所有扩展（cloudflare-ai-gateway、xiaomi、lmstudio、ollama等） |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **feat(ui): review install policy warnings** — 管理员可在Control UI中审查安装策略警告并主动确认继续安装 | 已关闭 | `security-boundary`，增强了插件安装的安全可治理性 |

### 今日推进的活跃重要PR

| PR | 内容 | 状态 | 风险等级 |
|---|---|---|---|
| [#123976](https://github.com/openclaw/openclaw/pull/123976) | **fix(gateway): frozen worker processes never resume when host ps stalls** — 修复因 `ps` 命令卡住导致工作进程永久冻结问题 | 待合并 | 🚨 availability |
| [#123979](https://github.com/openclaw/openclaw/pull/123979) | **fix(scripts): build heap ignores its systemd memory budget** — 修复V8堆大小不遵守cgroup内存限制，导致OOM杀死无关服务 | 待合并 | 🚨 availability |
| [#126067](https://github.com/openclaw/openclaw/pull/126067) | **fix: surface paired-device runtime requirements** — 暴露配对设备运行时的隐含要求，消除静默死路 | 待合并 | 🚨 session-state |
| [#126087](https://github.com/openclaw/openclaw/pull/126087) | **fix: restart-recovered turns no longer show fatal errors** — 修复重启恢复后仍显示致命错误提示 | 待合并 | 🚨 session-state |

**综合评估**：项目整体处于**防御性维护**阶段，今日推进的核心主题包括——修复因构建/类型检查挂起导致的CI阻塞、降低网关与UI的无效操作频率（如空闲通道的SQLite写入、会话目录刷新风暴）、增强安装过程的安全审计能力。这反映了团队在打磨工程基础设施、提升运行稳定性和管理能力。

---

## 社区热点

### 讨论最活跃的Issue（按评论数排序）

**1. [#116201 — Realtime voice work can retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201)**（60条评论）
- **状态**：`OPEN`，P1，`diamond lobster`
- **标签**：`bug`, `maintainer`, `needs-maintainer-review`, `needs-product-decision`
- **诉求**：实时语音会话的资源限制基于数量或取消信号而非硬性所有权边界，在慢速/停滞/突发性供应商行为下可能保留超量咨询工作、大帧、预就绪音频。
- **热度原因**：60条评论说明该问题经历长时间的复现讨论与方案辩论，是用户与维护者共同关注的高频阻塞点。

**2. [#77598 — Track live dev agent behavior and trajectory](https://github.com/openclaw/openclaw/issues/77598)**（23条评论）
- **状态**：`OPEN`，P2，`silver shellfish`
- **发起背景**：对Pash的dev agent进行24小时观察，记录agent行为轨迹。
- **诉求**：用户关注agent自主行为的可观测性，希望了解agent的行为轨迹与决策模式。

**3. [#112423 — Large SQLite transcript cleanup blocks the gateway event loop](https://github.com/openclaw/openclaw/issues/112423)**（16条评论）
- **状态**：`OPEN`，P1，`diamond lobster`
- **标签**：`source-repro`（有复现步骤）
- **诉求**：大型SQLite转录归档在全文物化、压缩、磁盘I/O和回读均在网关线程执行，导致事件循环阻塞。

### 热点分析

三个最热门的Issue有共同特征——**都涉及会话状态/资源管理**，且都有 `source-repro`（已提供复现步骤）标签。这说明社区正在对"长寿命会话"场景进行系统性测试，发现的问题集中在会话恢复、转录清理、资源上限管理，这些问题直接影响生产环境的长时间稳定性。

---

## Bug 与稳定性

### P0 / 严重级

| Issue | 标题 | 状态 | 标签 | 是否有Fix PR |
|---|---|---|---|---|
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI startup preflight can corrupt live state DB — "database disk image is malformed" (2026.6.6, macOS) | 已关闭 | `regression`, `data-loss`, `not-repro-on-main`, `P0` | 已解决 |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | Startup migration preflight blocks gateway after upgrade 6.11→7.1; migration tables empty | OPEN | `regression`, `crash-loop`, `P0`, `ux-release-blocker`, `source-repro` | ❌ 无 |

### P1 / 高严重级

| Issue | 标题 | 状态 | 是否有Fix PR |
|---|---|---|---|
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction timeout fires far below deadline (4.9s–50s), 100% failure on large sessions, wake death-spiral | OPEN | ❌ 无 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection reconcile can livelock under sustained writes, blocking main thread | OPEN | ❌ 无 |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | Gateway V8 heap OOM during main-session turn; restart-recovery converts one crash into 7-core-dump loop | OPEN | ❌ 无 |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries exhaust before replacement server ready | OPEN | ✅ [#111020](https://github.com/openclaw/openclaw/pull/111020) |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | Windows native CLI Scheduled Task does not stay running | OPEN | ✅ `linked-pr-open` |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x state migration leaves channel conversation-store SQLite empty (0 bytes), breaks MS Teams sends | OPEN | ✅ `linked-pr-open` |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | Stack-safe large attachment handling for Control UI and gateway | OPEN | ✅ `linked-pr-open` |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock never releasable after restart reuses owner PID (containers) | OPEN | ✅ `linked-pr-open` |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker gateway container restart loop with OPENCLAW_SANDBOX=1 on Windows | OPEN | ❌ 无 |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix room agents loop on no-reply output, stale session replay after restart | OPEN | ❌ 无 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview | OPEN | ❌ 无 |

### 主要修复的Bug（今日关闭）

- **#101290 (P0)**: CLI健康检查命令在网关运行期间损坏SQLite数据库 — 已关闭（无法在main上复现）
- **#87182 (P2)**: memory-core dreaming叙事会话在post-completion清理中被错误归档
- **#103231 (P1)**: `claude-cli` 后端的 `ownsNativeCompaction` 假设不成立，导致会话膨胀超过200%

### 稳定性趋势分析

P0/P1级Issue中，**有Fix PR的比例约为一半**，其余仍无修复方案或处于讨论阶段。最令人担忧的是[#115546](https://github.com/openclaw/openclaw/issues/115546)（CLI预算压缩超时）和[#115908](https://github.com/openclaw/openclaw/issues/115908)（转录投影死循环）——两者都是 `source-repro` + `diamond lobster`，说明问题可稳定复现且影响核心会话流程，需要优先分配维护者资源。

---

## 功能请求与路线图信号

### 社区高频需求

| Issue | 功能请求 | 评论 | 👍 |
|---|---|---|---|
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | **Agent自主触发上下文压缩**（self-compact tool） | 8 | 2 |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) | **按源目录而非agent建立记忆索引**，消除同一工作区的重复向量存储 | 6 | 1 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | **自助托管的STT/TTS在WebChat中可用**（经过网关而非浏览器API） | 7 | 2 |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | **隔离子agent完成状态与父上下文**，默认只返回状态和子会话链接 | 12 | 1 |
| [#49259](https://github.com/openclaw/openclaw/issues/49259) | **清理Dashboard中的陈旧孤立会话** | 7 | 0 |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | **为SQLite转录/会话增加companion-friendly API** | 14 | 2 |

### 与现有PR的关联判断

- **#6757（自我压缩工具）**：目前无直接对应PR，但[#120491](https://github.com/openclaw/openclaw/pull/120491)（per-turn发送预算守卫）在消息工具中引入了限制逻辑，说明团队在关注类似方向。
- **#95724（按目录索引）**：暂无对应PR，仍处于产品决策阶段。
- **#96975（子agent隔离）**：目前无直接对应PR，维护者可能认为这涉及较大架构调整。
- **#45508（自托管STT/TTS）**：暂无对应PR，但WebChat正在高频迭代（如[#125617](https://github.com/openclaw/openclaw/pull/125617)修复媒体发送确认），说明活跃开发中。

### 路线图判断

今日PR中两个信号值得关注：
- **[#126074](https://github.com/openclaw/openclaw/pull/126074) feat(sessions): expose sidebar category controls** — 让agent可通过工具为会话设置侧边栏分类，这是对会话管理交互的增强
- **[#126109](https://github.com/openclaw/openclaw/pull/126109) feat(ui): enable link favicons by default** — 默认开启带SSRF防护的链接favicon获取

两者均属于UI/会话管理体验优化，不太可能是下一版本的核心功能，但会带来日常使用体验提升。

---

## 用户反馈摘要

### 典型用户痛点

**1. 升级/回滚后状态不一致**
- 用户从6.11升级到7.1后遇到启动迁移阻止网关启动（[#112395](https://github.com/openclaw/openclaw/issues/112395)）
- 回滚时网关持有旧模块路径，入站消息被静默丢弃（[#92241](https://github.com/openclaw/openclaw/issues/92241)）
- 升级后通道会话存储SQLite为0字节，孤儿引用导致MS Teams主动发送失败（[#94939](https://github.com/openclaw/openclaw/issues/94939)）
- **共性**：升级路径缺乏端到端验证，状态迁移可靠性存疑

**2. 长时间运行后资源泄漏/卡死**
- 大型SQLite转录清理阻塞网关事件循环（[#112423](https://github.com/openclaw/openclaw/issues/112423)）
- 网关V8堆OOM导致一次崩溃变七次核心转储循环（[#115424](https://github.com/openclaw/openclaw/issues/115424)）
- Cron调度器定时器在重度超时后永久停止（[#102534](https://github.com/openclaw/openclaw/issues/102534)）
- **共性**：长时间运行场景下资源管理存在盲区

**3. 通道/集成稳定性**
- 微信插件因导出缺失无法加载（[#115478](https://github.com/openclaw/openclaw/issues/115478)）
- 飞书流式卡片更新导致长回复严重延迟（[#91941](https://github.com/openclaw/openclaw/issues/91941)）
- 桌面应用导致网关循环重启，会话中断（[#115256](https://github.com/openclaw/openclaw/issues/115256)）
- **共性**：第三方平台适配的稳定性仍显薄弱

**4. 无可见回复的fallback消息引起困惑**
- "[#116348](https://github.com/openclaw/openclaw/issues/116348)" 用户要求抑制或限流"未生成回复"的fallback消息，在多用户提及群组中产生垃圾信息
- "[#92186](https://github.com/openclaw/openclaw/issues/92186)" 前台回复围栏导致较早完成的消息在仪表板可见但未发送到WhatsApp

### 用户满意点

- 有用户对可复现问题的Issue响应速度表示认可，如[#103231](https://github.com/openclaw/openclaw/issues/103231)（claude-cli压缩问题）已关闭
- 维护者对[#101290](https://github.com/openclaw/openclaw/issues/101290)（P0 SQLite损坏）给出了关闭说明
- 部分功能请求获得高赞，说明用户对项目的发展方向有参与感

---

## 待处理积压

### 长期未关闭的重要Issue

| Issue | 创建日期 | 天数 | 标签 | 最后更新 |
|---|---|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026-03-06 | **166天** | `regression`, `P1`，google-vertex/gemini-3.1-pro-preview | 08-19 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | 2026-02-02 | **198天** | `enhancement`, `P2` | 08-18 |
| [#39406](https://github.com/openclaw/openclaw/issues/39406) | 2026-03-08 | **164天** | `enhancement`, `P2`（压制瞬态工具错误警告） | 08-18 |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | 2026-03-11 | **161天** | `P3`, `needs-info`（多agent并发超时） | 08-19 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | 2026-03-13 | **159天** | `enhancement`, `P2`（自托管STT/TTS） | 08-18 |
| [#49259](https://github.com/openclaw/openclaw/issues/49259) | 2026-03-17 | **155天** | `enhancement`, `P3`（清理孤立会话） | 08-18 |

### 已停滞的PR（长期未更新）

| PR | 创建日期 | 天数 | 最后更新 |
|---|---|---|---|
| [#97339](https://github.com/openclaw/openclaw/pull/97339) fix(cron): expose flat cron job fields | 2026-06-28 | **52天** | 08-19（仅有自动标记） |
| [#117712](https://github.com/openclaw/openclaw/pull/117712) build(deps): bump actions group | 2026-08-02 | **17天** | 08-19（dependabot rebasing中） |

### ⚠️ 需特别关注

1. **#38327（166天未修复）**：这是2026.3.2版本引入的回归，虽涉及第三方模型提供商兼容性，但长期未解决会影响用户信任
2. **#43374（161天）**：多agent并发时LLM调用同时超时，复现条件未明，需要更多信息
3. **#6757（198天）**：Agent自我压缩功能需求已积压半年多，社区仍有活跃讨论

### 维护建议

- 优先响应 `P0` 且 `ux-release-blocker` 的[#112395](https://github.com/openclaw/openclaw/issues/112395)（升级迁移阻止网关启动）
- 为 [#115546](https://github.com/openclaw/openclaw/issues/115546)（CLI压缩超时）和[#115908](https://github.com/openclaw/openclaw/issues/115908)（转录投影死循环）分配专门维护者——两者都是 `diamond lobster` 且有完整复现步骤，修复后将对会话稳定性有显著改善
- 对长期需求的 [#38327](https://github.com/openclaw/openclaw/issues/38327) 建议更新状态或明确路线图

---

*报告生成时间：2026-08-19 | 数据来源：[OpenClaw GitHub Repository](https://github.com/openclaw/openclaw)*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-08-19  
**分析范围：** OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw  
**数据来源：** 各项目 GitHub 仓库公开动态

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**规模化迭代与稳定性攻坚并行的阶段**：头部项目（OpenClaw）面临大规模社区反馈下的维护队列压力，核心矛盾集中在长会话状态管理与资源泄漏；腰部项目（Hermes Agent、IronClaw、CoPaw）则以高频率发版和快速 Bug 闭环为特征，功能迭代与稳定性改善同步推进；同时，生态出现明显的**"派生项目集群"现象**（*Claw 系列：OpenClaw、PicoClaw、TinyClaw、NullClaw、ZeptoClaw、ZeroClaw、NanoClaw、IronClaw），围绕同一技术路线形成多层次竞争与协作格局。跨项目的共同技术焦点集中在**会话生命周期管理、多通道/多协议适配、本地模型与沙箱安全、MCP 生态集成**四大方向，而自动化可靠性（Agent 任务执行的可预测性）正成为下一代竞争的分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|------|-----------|---------|---------|-----------|
| **OpenClaw** | 500（新开 477） | 500（合并 98） | 0 | ⚠️ 极高活跃但维护队列积压，会话状态类技术债突出 |
| **Hermes Agent** | 50（新开 40） | 50（合并 13） | v0.20.4 ✅ | 🟢 快速迭代，Bug 闭环效率高，自动化基础设施有小问题 |
| **CoPaw** | 45（新开 29） | 50（合并 19） | 0 | 🟢 社区贡献活跃（约 45% 新贡献者），稳定性问题待系统性解决 |
| **ZeroClaw** | 50（新开 31） | 50（合并 2） | 0 | ⚠️ 提交动能高但合并吞吐极低，维护者审阅带宽成瓶颈 |
| **LobsterAI** | 9（陈旧更新） | 16 合并 | 2026.8.18 ✅ | 🟢 交付高峰日，积压清理显著，但用户侧 Bug 响应不足 |
| **NanoClaw** | 1 新开 | 39 | 0 | 🟢 核心团队高强度重构期，无阻塞性危机 |
| **NanoBot** | 10 | 27 | 0 | 🟢 活跃度高，修复闭环好，但安全类 PR 搁置需关注 |
| **IronClaw** | 约 10 | 约 15 | v1.3.0-rc.2 ✅ | 🟢 稳定化与前瞻规划并行 |
| **Moltis** | 2 关闭 | 6（5 合并） | 2 个 ✅ | 🟢 交付节奏好，社区互动偏少 |
| **PicoClaw** | 6 | 4 | 0 | 🟡 中等活跃，长期 PR 终获合并，Bug 响应有优化空间 |
| **NullClaw** | 0 | 0 | 0 | ⚪ 无活动 |
| **TinyClaw** | 0 | 0 | 0 | ⚪ 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

### 优势

- **社区规模断层第一**：24 小时内 500 条 Issue + 500 条 PR 更新，远超其他项目（多为 10-50 条量级），反映出最大的用户基数和贡献者生态。
- **问题反馈颗粒度极高**：大量 Issue 带 `source-repro`（可复现步骤）标签，社区已形成"精准报障→维护者定位"的高效协作模式。
- **安全与治理意识领先**：安装策略审查 UI（#120900）、配对设备运行时要求透明化（#126067）等 PR 表明项目在安全边界治理上走在前列。

### 技术路线差异

- **网关-工作进程架构**：OpenClaw 强调网关（gateway）与工作进程（worker）的分离，当前大量 Bug 围绕此架构的边界条件（事件循环阻塞、进程冻结、V8 堆 OOM），说明其在追求高并发与隔离性的同时也承受着架构复杂度带来的稳定性代价。
- **多通道优先**：会话状态管理（语音、转录、SQLite、CLI 预算）是当前技术债核心，这与 Hermes Agent（侧重桌面端+多 Profile）和 NanoBot（侧重命令行+WebUI）形成差异化。

### 对比结论

OpenClaw 是生态中**无可争议的"基础设施级"项目**，其规模相当于其他项目总和的数倍。当前处于"规模扩张→稳定性补课"的转型期，若能解决会话状态生命周期管理的系统性问题，将进一步巩固其生态底座地位；若维护队列持续积压，可能为派生项目（IronClaw、ZeroClaw）创造差异化竞争窗口。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **Agent 任务执行中断/不可靠** | OpenClaw（#115546、#115908）、CoPaw（#6921、#7102）、IronClaw（#6879） | 多步骤任务规划后停止执行、模型冻结超时、自动化任务不可预测——**"自主性"与"可预测性"的矛盾成为全生态共性痛点** |
| **会话状态管理/生命周期** | OpenClaw（3 个 diamond lobster 级 Issue）、Hermes Agent（#89346）、CoPaw | 会话恢复后状态不一致、转录清理阻塞、历史分裂——长会话场景下的资源与一致性管理是共同技术债 |
| **MCP 连接可靠性** | CoPaw（#6470、#5900）、ZeroClaw（#8642） | 硬编码 SSE 忽略 streamable_http 配置、无自动重连、schema 克隆导致内存增长——MCP 生态集成从"能用"走向"可靠" |
| **沙箱/本地执行安全** | NanoBot（#4797）、ZeroClaw（#9402）、CoPaw（#7005）、Moltis（#1106） | shell 子进程无资源限制、Docker 嵌套、Podman 兼容、路径解析错误——本地执行环境的安全与兼容性普遍薄弱 |
| **升级/迁移可靠性** | OpenClaw（#112395）、ZeroClaw（#7462）、LobsterAI（#1587）、NanoClaw（#3194） | 升级后状态损坏、迁移阻塞启动、回滚不完整——**"升级恐惧症"是用户信任的最大杀手** |
| **配置隐式失效** | CoPaw（#6470）、PicoClaw（#3328）、IronClaw（#7726、#7727）、ZeroClaw（#8563） | 配置项存在但代码未消费、文档与实现漂移、静默无效——多项目出现"配置假死"问题，反映工程成熟度短板 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 | 关键差异化 |
|------|---------|---------|-------------|-----------|
| **OpenClaw** | 全功能个人 AI 助手框架 | 开发者/极客/自托管社区 | 网关-工作进程分离，多通道 | 生态规模最大，功能最全，当前以稳定性攻坚为重心 |
| **Hermes Agent** | 桌面优先的跨平台 AI 助手 | 桌面用户/多 Profile 管理者 | 桌面端 + 云端网关联邦 | 强调 Profile 身份管理、桌面端体验；Nix 声明式配置是新亮点 |
| **CoPaw** | 中文优先的多通道 Agent | 中文用户/企业场景 | 多渠道 + MCP 驱动 + 沙箱 | 飞书/钉钉/微信深度适配，社区贡献者涌入迅猛 |
| **ZeroClaw** | Rust 高性能轻量 Agent | 性能敏感/嵌入式场景 | Rust 实现，单一二进制 | 预编译二进制分发，Twitter/X 等长尾通道 |
| **IronClaw** | WASM 沙箱化 Agent 运行时 | 安全敏感/自动化场景 | WASM 工具执行 + 资源账本 | 自动化可靠性为最高优先级，工具面统一实验 |
| **NanoClaw** | 本地优先的桥接型 Agent | 自托管/隐私关注者 | 数据库可插拔重构中 | 多引擎支持（OpenClaw/hermes-agent）+ 渠道桥接 |
| **LobsterAI** | 多引擎 GUI 客户端 | 非技术用户/桌面端 | 桌面 GUI + OpenClaw 后端 | DSH 引擎引入，多引擎可插拔架构转型中 |
| **NanoBot** | 轻量命令行/WebUI Agent | 开发者/脚本自动化 | 轻量级单进程 | 快速部署，跨会话消息传递等 WebUI 增强 |
| **Moltis** | 可组合的 Agent 组件平台 | 开发者/数据集成场景 | 连接器生态 + Files 库 | Tesla 连接器、文件管理基础设施，组件化思路清晰 |
| **PicoClaw** | 轻量/嵌入式 Agent | 硬件爱好者/边缘设备 | 极简依赖 | WebUI 需求强烈，IRC/Webex 等长尾渠道 |

---

## 6. 社区热度与成熟度

### 第一梯队：快速迭代期（高活跃 + 高合并效率）

**Hermes Agent**、**CoPaw**、**NanoClaw**：三者均处于功能密集迭代期，Issue-PR 闭环速度快（Hermes Agent 的 Windows 自锁 Bug 在数小时内获得两个修复 PR），社区反馈响应积极，新贡献者占比高（CoPaw 约 45%）。关键在于能否在保持速度的同时控制技术债累积。

### 第二梯队：质量巩固期（高活跃 + 维护压力大）

**OpenClaw**、**ZeroClaw**：两者均面临"提交动能 > 合并吞吐"的失衡。OpenClaw 的 477 条活跃 Issue 和 ZeroClaw 的 48 条待合并 PR 说明维护者审阅带宽已构成瓶颈。若不介入治理（批量 triage、增加 maintainer），可能影响贡献者留存。

### 第三梯队：稳步推进期（中活跃 + 交付节奏好）

**IronClaw**、**LobsterAI**、**Moltis**、**NanoBot**：这组项目活跃度适中但交付效率高——LobsterAI 单日合并 16 条 PR + 发布版本，Moltis 发布 2 个版本并完成多个 Bug 闭环，IronClaw 并行推进 v1.3.0 稳定化与 v1.4.0 规划。处于"小而精"的健康发展状态。

### 第四梯队：低活跃/停滞期

**PicoClaw**（中等偏低，长期 PR 合并后活跃度回升）、**NullClaw**、**TinyClaw**、**ZeptoClaw**（24 小时无活动）。派生项目未能积累足够社区动能，可能面临被边缘化的风险。

---

## 7. 值得关注的趋势信号

### 信号一：Agent 自动化可靠性的"信任危机"（全生态共性）

IronClaw 将自动化不可靠（#6879）升级为 v1.3.0/v1.4.0 史诗级任务，CoPaw 用户抱怨"规划后不执行"（#6921），OpenClaw 的 CLI 预算压缩超时（#115546）——**用户对"无人值守"场景的信任正在成为产品采纳的关键门槛**。IronClaw 将预测结果从"语义判断"改为"基于运行时证据确定性推导"（PR #7650）代表了正确的演进方向。**对开发者的启示：Agent 任务的可预测性、可观测性和失败自愈能力，可能比模型智能水平本身更影响用户体验。**

### 信号二：MCP 从"能连"到"可靠"的必经之路

CoPaw 的 MCP 硬编码 SSE 问题（#6470）和 ZeroClaw 的 MCP schema 内存增长（#8642）表明，MCP 已从概念验证进入生产环境打磨阶段。**连接管理（自动重连、健康检测、传输协议可配置）和数据治理（schema 大小、token 预算）将成为 MCP 生态下一阶段的竞争焦点。**

### 信号三：本地执行安全的"默认安全"转向

NanoBot 的 `restrict_to_workspace` 默认值变更 PR（#4880）和 ZeroClaw 的 Docker 嵌套修复（#9402）指向同一趋势：**沙箱/执行环境正在从"可选加固"走向"默认安全"**。随着 Agent 工具调用能力的增强，执行边界的默认收紧将成为安全合规的基本要求。

### 信号四：多引擎/多后端架构成为主流选择

LobsterAI 引入 DSH 引擎（#2502）、NanoClaw 重构数据库可插拔层（#3332-#3335）、IronClaw 的 WASM 工具面统一实验（#7491）——**项目不再绑定单一引擎或单一运行时，而是构建可插拔的引擎/后端抽象层**。这既是对上游依赖风险的分散，也是满足用户多样化模型/运行时需求的结构性方案。

### 信号五：配置治理的"文档-代码一致性"缺口

多项目出现配置项存在但代码未消费的问题（CoPaw #6470、PicoClaw #3328、IronClaw #7726、ZeroClaw #8563），用户对"静默失效的配置"的挫败感强烈。**这是工程成熟度的重要标尺——治理体系（配置可观测性、无效配置预警）正在成为中大型项目的必备能力。**

### 信号六：Windows 支持成为新兴市场的"入场券"

ZeroClaw 的 Windows 74 个测试失败（#7462，70+ 天未修复）、Hermes Agent 的 Windows 自锁 Bug（#89599）、CoPaw 的 Windows 崩溃——**Windows 用户的诉求从"能用"升级为"高质量可用"**。缺乏 Windows CI 覆盖的项目（ZeroClaw）正在为此付出用户信任代价。随着 AI 助手向大众市场渗透，Windows 支持质量将直接影响项目在主流用户中的口碑。

---

**总结：** 个人 AI 助手开源生态正处于从"功能竞赛"转向"可靠性竞赛"的关键拐点。OpenClaw 以规模优势占据生态中心，但维护治理压力是最大变数；Hermes Agent、CoPaw 等腰部力量凭借快速闭环正在积累差异化优势；自动化可靠性、MCP 生产化、默认安全、多引擎架构是决定下一阶段竞争格局的四大主线。对于技术决策者，建议在选型时重点关注目标项目对"长会话稳定性"和"自动化可预测性"的实际投入，而非仅看功能列表的丰富程度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-19

> 数据来源：HKUDS/nanobot GitHub 仓库 | 数据窗口：过去 24 小时（截至 2026-08-19）

---

## 1. 今日速览

NanoBot 在过去 24 小时内保持了高活跃度，共产生 10 条 Issue 更新和 27 条 PR 更新，其中值得关注的是多个修复类 PR 直接对应社区报告的 Bug（如 #5436 修复 #2493、#5435 修复 #5425），修复闭环效率较高。项目当前没有新版本发布，但社区提交的 PR 覆盖了从 Mattermost 系统消息过滤、Windows 兼容性修复到本地安全加固等多个维度，整体项目健康度良好。值得注意的是，**"LANGSMITH 集成失效"问题（#2493）在持续近 5 个月后终于有 PR 提交修复**，而安全相关的 `restrict_to_workspace` 默认值变更 PR（#4880）已搁置超过一个月，需要维护者关注。

---

## 2. 版本发布

**无新版本发布**（最新 Release 信息不可用）。

---

## 3. 项目进展

### 今日合并/关闭的 PR（6 个）

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#5433](https://github.com/HKUDS/nanobot/pull/5433) | test(exec): wait deterministically for truncation output | ✅ 已关闭 | 修复 Windows 3.14 测试作业中固定 500ms 轮询导致的不确定性，提升测试可靠性 |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | feat(webui): add lightweight cross-session messaging | ✅ 已关闭 | 为持久化会话引入服务端 `@handle`，支持跨会话发送消息，增强 WebUI 会话管理能力 |
| [#5432](https://github.com/HKUDS/nanobot/pull/5432) | fix(tui): refresh expired API credentials | ✅ 已关闭 | TUI 在 HTTP 401 后自动刷新 API 凭据并重试请求，修复长时间运行后凭据过期的问题 |
| [#5427](https://github.com/HKUDS/nanobot/pull/5427) | fix(tui): keep composer visible and focused | ✅ 已关闭 | 修复 TUI 中点击其他区域后输入框失焦问题，增加视觉辨识度，提升用户体验 |
| [#5409](https://github.com/HKUDS/nanobot/issues/5409) | Prevent Margin Leaks & Surprise LLM Bills | ✅ 已关闭 | 社区提交的花费防火墙提案被关闭（可能是商业考量） |
| [#5417](https://github.com/HKUDS/nanobot/issues/5417) | Windows: WebUI exits when gateway rejects virtualenv PID handoff | ✅ 已关闭 | 对应修复 PR #5415 已提交 |

**关键进展总结：** 今日合并/关闭的 PR 主要集中在 WebUI/TUI 稳定性和功能增强上，特别是跨会话消息传递和凭据自动刷新功能，后者直接解决了长时间使用场景下的实际痛点。Windows 平台相关的 WebUI 退出 Bug 也已通过 #5415 给出修复方案。

---

## 4. 社区热点

### 🔥 讨论最活跃

| Issue/PR | 讨论热度 | 核心诉求 |
|---|---|---|
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) — LANGSMITH is not working after latest update | 7 评论 / 1 👍 / **持续近 5 个月** | 最新更新移除了 `litellm_provider.py` 导致 LangSmith 集成失效，用户明确表达了修复诉求 |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) — no audio on WhatsApp | 6 评论 | 用户报告 NanoBot 无法在 WhatsApp 上发送音频文件（但可以接收），影响音频类交互场景 |
| [#5436](https://github.com/HKUDS/nanobot/pull/5436) — LANGSMITH is not working fix | 新建 PR | 声称修复 #2493，但**仅更改了文档**（`docs/release-archive.md`），是否真正修复代码层问题存疑 |

### 深度分析

**LANGSMITH 集成失效问题（#2493）是本日最显著的热点**，也是当前最长寿的活跃 Issue 之一（从 3 月 25 日报道至今）。核心矛盾在于：项目移除 `litellm_provider.py` 导致依赖 LangSmith 的集成断裂，而 #5436 的修复 PR 仅仅修改了文档而非实际代码逻辑，可能无法真正满足用户需求。该 Issue 的持续存在反映了**用户在依赖上游工具链变更时的脆弱性**，也提示维护者需要在架构变更时提供明确迁移路径。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 **高** | [#2493](https://github.com/HKUDS/nanobot/issues/2493) | LANGSMITH 集成完全失效（回归） | 有 PR #5436，但仅改文档，修复可能不彻底 |
| 🔴 **高** | [#4797](https://github.com/HKUDS/nanobot/issues/4797) | shell 子进程无资源限制（ulimit/cgroup/CPU/内存），存在 fork bomb 风险 | 无对应 fix PR |
| 🟡 **中** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 无法发送音频消息 | 无对应 fix PR |
| 🟡 **中** | [#5425](https://github.com/HKUDS/nanobot/issues/5425) | 自定义 OpenAI 兼容 provider 不支持 `socks://` 代理 URL | ✅ 已有 PR #5435 修复 |
| 🟢 **低** | [#5429](https://github.com/HKUDS/nanobot/issues/5429) | `AgentLoop.schedule_background()` 无法检索后台任务异常 | ✅ 已有 PR #5431 修复 |
| 🟢 **低** | [#5428](https://github.com/HKUDS/nanobot/issues/5428) | `AgentLoop` 保留空的活动任务组 | ✅ 已有 PR #5430 修复 |

### 今日新增 Bug 全部有修复 PR 跟进

特别值得注意的是 #5429 和 #5428 两个 AgentLoop 相关的 Issue 由同一作者（yu-xin-c）在同一天提交 Issue 和对应 PR（#5431、#5430），形成了高效的"报障-修复"闭环。

---

## 6. 功能请求与路线图信号

### 新提出的功能需求

| Issue/PR | 需求 | 信号强度 |
|---|---|---|
| [#5421](https://github.com/HKUDS/nanobot/issues/5421) | **设计问题**：空闲压缩是否应保留并发轮次创建的 provider 状态？ | 中等 — 涉及 `Consolidator` 的状态一致性契约，可能影响记忆系统设计 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | WebUI 回合可观测性与安全恢复 | 较强 — 已提交 PR，但标注 conflict，需要解决冲突 |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | WebUI 后续建议（follow-up suggestions） | 中等 — 已提交 PR，但标注 conflict |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 集成 mst-python 作为 metasearch 搜索 provider | 较强 — 功能完整的 PR，Priority P1 |

### 可能被纳入下一版本的方向

从 PR 堆积情况来看，**WebUI 体验增强**（#5420、#5408）和 **MCP schema 预算管理**（#5388）是最可能在下一版本中合入的方向。特别需要关注 #5388，该 PR 为模型可见的 MCP 工具 schema 引入字节预算机制，有助于控制 token 消耗。此外，#5421 的设计问题如果得到答复，可能会推动 consolidation 机制的升级。

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **架构变更导致的集成断裂（#2493）**：用户对"更新后功能消失"表达了明显不满，尤其在没有替代方案的情况下。这类回归问题对开源项目的信任度影响最大。

2. **多媒体支持缺失（#5149）**：音频功能在 WhatsApp 通道上单向不可用，说明渠道适配还不够完整。

3. **资源安全担忧（#4797）**：有用户明确指出子进程无资源限制可能被 LLM 利用导致系统资源耗尽（`yes > /dev/null &` 或 fork bomb），反映了对**生产环境安全性的真实需求**。

4. **代理兼容性（#5425）**：企业用户常用的 `socks://` 代理前缀不被支持，影响私有化部署场景。

### 商业提案的反馈

#5372（ViBo 记忆系统集成提案）和 #5409（混合花费防火墙提案）均在短期内被关闭（后者仅 1 天），可能反映了项目方对第三方商业集成的谨慎态度，或已内部讨论决定不采纳。

---

## 8. 待处理积压

### ⚠️ 长期未响应/需维护者关注

| 项目 | 创建时间 | 搁置时长 | 优先级建议 |
|---|---|---|---|
| [#4880](https://github.com/HKUDS/nanobot/pull/4880) — fix(security): default restrict_to_workspace to True | 2026-07-11 | **~6 周** | 🔴 **高** — 安全默认值变更，直接降低工具操作逃逸工作区的风险面，应优先合入或明确拒绝 |
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) — LANGSMITH integration broken | 2026-03-25 | **~5 个月** | 🔴 **高** — 活跃 Issue 中最长寿，虽然新增了 PR 但修复质量存疑，需维护者确认 |
| [#4797](https://github.com/HKUDS/nanobot/issues/4797) — No resource limits on shell subprocesses | 2026-07-06 | **~6 周** | 🔴 **高** — 涉及安全漏洞（资源耗尽攻击），无对应修复 PR |

### 冲突待解决 PR

以下 PR 均标注 `conflict`，需要维护者解决冲突后方可合入：

- [#5420](https://github.com/HKUDS/nanobot/pull/5420) — WebUI turn observability
- [#5408](https://github.com/HKUDS/nanobot/pull/5408) — WebUI follow-up suggestions
- [#5257](https://github.com/HKUDS/nanobot/pull/5257) — Bound sustained-goal continuation
- [#5212](https://github.com/HKUDS/nanobot/pull/5212) — MiniMax music guidance
- [#5341](https://github.com/HKUDS/nanobot/pull/5341) — Windows-safe weather workflow
- [#5411](https://github.com/HKUDS/nanobot/pull/5411) — Isolate local agent runtime

---

## 📊 综合健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 24 小时内 10 Issues + 27 PRs，提交频率高 |
| Bug 修复效率 | ⭐⭐⭐⭐ | 今日报告的新 Bug 基本都有 PR 跟进，但 #4797 等安全问题积压较久 |
| 版本迭代节奏 | ⭐⭐⭐ | 无新版本发布，大量 PR 处于 Open/conflict 状态 |
| 长期问题处理 | ⭐⭐ | #2493 拖了 5 个月，#4880 拖了 6 周，需维护者加速 |
| 安全性 | ⭐⭐⭐ | #4797 和 #4880 均涉及安全加固但未落地 |

**总体评价：** NanoBot 项目当前处于功能累积期和平台适配期（大量 WebUI、Windows 兼容性改进），社区贡献活跃，但维护者对冲突 PR 的处理速度和关键安全 PR 的决策需要加快，以避免技术债和信任度下降。

---

*本报告由 AI 自动生成，数据来源：https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-19

## 1. 今日速览

今日项目活跃度极高。过去24小时内录得 50 条 Issue 更新（其中新开 40 条）和 50 条 PR 更新（待合并 37 条），并发布了 v0.20.4 补丁版本（聚合自 v0.20.3 以来的 ~74 个合并 PR）。值得关注的是，今日提交的 PR 与 Issue 呈现出高度对应关系——`#89599` 的 Windows 自锁 Bug 在数小时内就有 `#89605`、`#89604` 两个修复 PR 跟进，体现了项目组对社区反馈的响应速度。另一个强烈信号是 Nix Home Manager 模块（Issue #9056，获得 12 个 👍）在持续数月后已有多个相关 PR（#9087、#84178）进入决策流程，有望在近期落地。整体来看，项目处于快速迭代期，社区反馈闭环效率较高，但持续存在的自动化基础设施问题（skills-index 停摆）和桌面端性能回归仍需密切关注。

---

## 2. 版本发布

### Hermes Agent v0.20.4 (v2026.8.18)

- **发布日期：** 2026年8月18日
- **发布类型：** Patch 版本
- **内容：** 聚合自 v0.20.3 以来合并的约 74 个 PR，形成稳定的标记版本，供下游消费者（Docker 镜像、托管部署、新安装）使用。
- **破坏性变更：** 无明确说明（Patch 版本通常不引入破坏性变更）。
- **迁移注意：** 无特殊要求，常规升级路径即可。

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下几项值得关注：

**已合并/关闭：**

- **#9087 feat(nix): add home-manager module for per-user hermes-agent service**（与 #84178 配套）— 用户级 Nix Home Manager 模块进入合并流程，推进了 #9056 功能请求。对于 NixOS/Home Manager 用户，这将在后续版本中实现声明式安装管理 Hermes Agent。[PR #9087](https://github.com/NousResearch/hermes-agent/pull/9087) | [PR #84178](https://github.com/NousResearch/hermes-agent/pull/84178)

- **#86255 fix(skills): preserve document modes during atomic writes** — 修复了技能管理器原子写入的权限回归问题（临时文件默认 0600 权限导致模式丢失）。解决了实际使用中 SKILL.md 文件权限被意外收紧的问题。[PR #86255](https://github.com/NousResearch/hermes-agent/pull/86255)

- **#89532 fix(tui): hydrate cold-profile secret sources before the session's agent build** — 修复 TUI 网关中冷配置文件（其 API 密钥仅存在于注册的密钥源中）首次构建 agent 时缺少密钥的问题。避免了首次回答失败或使用了错误的进程环境凭据。[PR #89532](https://github.com/NousResearch/hermes-agent/pull/89532)

**尚待合并（重点）：** 今日提交的修复类 PR 大多直接对应新提交的 Issue，体现了快速响应的节奏，详见下文第 5、6 节。

---

## 4. 社区热点

今日讨论最活跃的议题集中在以下几个方面：

- **[高热度] Issue #66616** — Skills index 停摆/降级，当前 54 条评论。自动化新鲜度探测失败，索引已 29.8 小时未更新（限制 26 小时）。用户关注点在于该问题已持续一个月（自 7 月 18 日创建），且直接影响到 `/docs/skills` 文档站的内容更新。[Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) 今日已有修复 PR [PR #89608](https://github.com/NousResearch/hermes-agent/pull/89608) 提交。

- **[热点] Issue #88715** — Multiplex 模式下 profile 身份在 transport/session/storage/control 路径中晚绑定，导致身份不一致。这属于架构层问题的讨论，3 条评论但涉及面广，牵动 area/sessions、area/profiles 等多个模块。[Issue #88715](https://github.com/NousResearch/hermes-agent/issues/88715)

- **[热点] Issue #88275 + #53902** — 桌面端 Renderer 进程 CPU/GPU 占用异常。一个是新提交的（v0.20.2 在 macOS Intel 上 40-70% CPU），另一个是 v0.17.0 遗留的 fontations+temporal_rs 死循环问题（GPU 98% 活跃、13W 功耗）。用户痛点集中在桌面端性能与散热上。[Issue #88275](https://github.com/NousResearch/hermes-agent/issues/88275) | [Issue #53902](https://github.com/NousResearch/hermes-agent/issues/53902)

- **[高赞]** Issue #9056 (Nix Home Manager 模块) 获得 12 个 👍，是最受关注的功能请求，已关闭（相关PR已合并）。[Issue #9056](https://github.com/NousResearch/hermes-agent/issues/9056)

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

**严重（P2，影响核心功能，多数已有修复 PR）：**

1. **Windows CLI 更新自锁** — `hermes update` 因更新器试图替换正在执行的 `hermes.exe` 而永远失败（EACCES/WinError 32）。此 Bug 直接阻断 Windows 用户的命令行更新路径。[Issue #89599](https://github.com/NousResearch/hermes-agent/issues/89599) — 标记为重复，暂无直接 PR，但相关联的插件 enable 挂起问题（#89600）已有两个修复 PR。

2. **桌面端 profile 切换静默挂起（Windows）** — 点击侧边栏 profile 无任何反应，不建立新的 WebSocket 连接（上游 c69b6471e6 的原子化 gateway 切换重构引入）。严重影响多 profile 用户的 Windows 桌面端体验。[Issue #89586](https://github.com/NousResearch/hermes-agent/issues/89586) — 尚无直接 PR，但 [PR #89609](https://github.com/NousResearch/hermes-agent/pull/89609) 涉及 gateway 切换的失败上报，可能相关。

3. **Bot Mode 丢弃 per-profile Cloud 别名** — v2 连接注册表启用后，混合本地/Cloud 设置中的 per-profile Cloud 后端未被保留，转而启动惰性本地后端。[Issue #89131](https://github.com/NousResearch/hermes-agent/issues/89131) — 暂无 PR。

4. **共享 primary profile 路由后会话历史分裂** — #88734 的修复导致网关路由元数据与 AIAgent 持久化使用不同的 state.db，产生分裂会话。[Issue #89346](https://github.com/NousResearch/hermes-agent/issues/89346) — 已有 PR [PR #89379](https://github.com/NousResearch/hermes-agent/pull/89379) 提交。

5. **Desktop MCP 健康探测挤掉活跃会话** — 健康探测总是新建 HTTP 会话并 shutdown，对单活跃会话限制的宿主（如 Slack MCP）会导致活跃会话被挤掉。[Issue #89576](https://github.com/NousResearch/hermes-agent/issues/89576) — 暂无 PR。

6. **Telegram 启动通知在重启后丢失** — 仅计划内重启发送启动通知，服务器断电/重启后不会发送。[Issue #89579](https://github.com/NousResearch/hermes-agent/issues/89579) — 暂无 PR。

7. **预存供应商冷却期导致充值后不再探测** — 429 后的冷却期缓存在 auth.json 中，即使充值成功也因 stale `last_error_reset_at` 而持续短路。[Issue #89415](https://github.com/NousResearch/hermes-agent/issues/89415) — 暂无 PR。

8. **Gateway 审批超时（远程 Windows 桌面客户端）** — Windows 桌面端的审批点击无法回传到远程 Hermes 网关。[Issue #89111](https://github.com/NousResearch/hermes-agent/issues/89111) — 暂无 PR。

9. **`hermes plugins enable` 在 stdout 重定向时挂起** — `_resolve_tool_override_grant()` 无 isatty 保护。已有两个修复 PR 竞争：[PR #89605](https://github.com/NousResearch/hermes-agent/pull/89605)（添加 isatty 守卫）和 [PR #89604](https://github.com/NousResearch/hermes-agent/pull/89604)（非交互时 fail closed）。[Issue #89600](https://github.com/NousResearch/hermes-agent/issues/89600)

10. **Ctrl+C/Ctrl+Q 在流式输出时中断而非清除草稿** — 当有未发送的草稿时，Ctrl+C 应清除草稿而非中断正在运行的 turn。已有修复 PR：[PR #89606](https://github.com/NousResearch/hermes-agent/pull/89606)。

**中等（P3）：**

11. **Hindsight provider 拒绝共享观测范围** — `"shared"` scope 不被接受，观测按会话碎片化。[Issue #74933](https://github.com/NousResearch/hermes-agent/issues/74933)

12. **gateway.error.log 无限增长** — Slack Socket Mode 重连 traceback 刷屏，单文件达到 141MB（268,086 条记录）。[Issue #88895](https://github.com/NousResearch/hermes-agent/issues/88895)

13. **`hermes config set` 存储复合值（列表/映射）为字符串** — 功能缺口，复合配置键无法从 shell/agent 脚本化设置。[Issue #89561](https://github.com/NousResearch/hermes-agent/issues/89561)

**已关闭（今日解决）：**

- **#85624 Auto-title 在 Bedrock/Anthropic 上 100% 失败**（OpenAI-only response_format 泄漏到 Messages API）— 已关闭。
- **#83147 桌面/WebSocket 重连必须恢复持久化的 turns 而无重复** — 已关闭。
- **#82816 OpenAI 兼容提供商拒绝 response_format json_schema 时 auto-title 静默失败** — 已关闭。
- **#89175 goals 的 bootstrap 宽限期在慢磁盘上静默丢弃首次写入** — 已关闭（CI flaky）。
- **#88955 Bot Mode 群聊中被打断的成员 turn 持久化空 hidden 消息** — 已关闭。
- **#62202 Gateway 未在每轮后调用 _post_turn_goal_continuation** — 已关闭。
- **#89546 桌面端持久 SESSIONS|BOTS 导航标签上显示悬停关闭按钮** — 已关闭。

**遗留未修复（超过 24 小时仍开放）：**

- **#18421 /goal 判官误报** — 仅凭文本声称成功，无文件系统验证。已存在 3 个月+，仍有 3 条评论，无 PR。
- **#17157 Discord slash 命令同步超时** — 已有 3 个月+，仍开放。
- **#18885 cron 任务中的 memory 工具需 per-job allow_memory 标志** — 已有 3 个月+，仍开放。

---

## 6. 功能请求与路线图信号

今日提交的新功能请求，按落地可能性排序：

**可能进入下一版本（已有对应 PR）：**

- **#89549 feat(video_gen/xai): 允许 Grok Imagine 1080p** — 请求放开 xAI 视频插件的分辨率限制，文档已列出 1080p 但插件钳制到 720p。已有信 PR [#89595](https://github.com/NousResearch/hermes-agent/pull/89595) 提交，落地可能性高。[Issue #89549](https://github.com/NousResearch/hermes-agent/issues/89549)

- **#89600（Bug）+ #89605/#89604（修复）**：`hermes plugins enable` 在非交互模式下的行为修复，两个方案竞争（isatty 守卫 vs. fail closed），需要维护者决策采用哪个。这个决策会影响 CLI 在 CI 等场景下的自动化行为。[Issue #89600](https://github.com/NousResearch/hermes-agent/issues/89600)

**讨论中但落地需时间：**

- **#89576（Bug）**：修复 Desktop MCP 健康探测协议，需在探活时不挤掉活跃会话。
- **#89304 允许 Desktop profile 别名指向注册的远程网关 profile** — 推进远程/多网关联邦的可用性。[Issue #89304](https://github.com/NousResearch/hermes-agent/issues/89304)
- **#88307 状态栏中始终可见的连接选择器** — 纯本地模式下无法一键切换到远程后端。[Issue #88307](https://github.com/NousResearch/hermes-agent/issues/88307)

**功能演进信号：**

- **Hermes Agent 作为 issue 提交者**（#89549 由 Agent 代开）——这表明项目开始用自身能力辅助社区交互，是一个有趣的"吃自己的狗粮"信号。
- **多智能体 PR 收敛技能**（#89526）— 将并行 agent 工作收敛为单一最小 PR。这可能预示着未来版本对多 agent 协作工作流的支持加深。

---

## 7. 用户反馈摘要

**桌面端性能是用户最大的痛点：**

- 用户在 Intel MacBook Pro 上报告 v0.20.2 渲染进程 CPU 占用 40-73%（#88275），而 v0.17.0 的遗留问题（GPU 98%、13W 功耗）至今未解决（#53902）。用户尝试了 `desktop.disable_gpu=true` 来部分缓解，但基本体验仍受影响。

**AI 辅助的自动化调用引发新的使用摩擦：**

- 当 stdout 重定向（管道、文件、CI）时，`hermes plugins enable` 永远卡住——这反映了脚本化/自动化场景在真实用户中逐渐增多，交互设计需要适配非 TTY 环境。（#89600）

**Windows 平台配置阻断：**

- Windows CLI `hermes update` 无法成功（自锁）是最明显的阻断性问题。用户在 PowerShell 下调用时无法更新版本，这会直接影响 Windows 用户的升级路径。（#89599）

**Nix/声明式配置需求强烈：**

- Nix Home Manager 相关 Issue #9056 获 12 👍，是今日最高赞的 Issue，说明用户对声明式配置管理 Hermes Agent 的需求很强烈。

**持续存在的旧问题消耗用户信任：**

- /goal 判官仅凭文本响应判断成功（#18421）在葡萄牙语用户中被标记，说明非英语用户在使用时遇到了额外的验证障碍。
- 自动标题生成在多个供应商上失败（#85624、#82816），涉及 Bedrock、Anthropic 兼容网关、vLLM/xgrammar 等多个后端，说明辅助任务的供应商兼容性依然是一个待解决的系统性问题。

---

## 8. 待处理积压

以下为长期未响应的重要 Issue 或 PR，需要维护者关注：

| 项目 | 类型 | 创建时间 | 持续时间 | 状态 | 备注 |
|------|------|----------|----------|------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index 停摆 | Bug | 2026-07-18 | ~1个月 | OPEN，54 条评论 | 已有 PR #89608 修复，请尽快合并 |
| [#18421](https://github.com/NousResearch/hermes-agent/issues/18421) /goal 判官误报 | Bug | 2026-05-01 | ~3.5个月 | OPEN，3 条评论 | 功能可信度问题，建议排期 |
| [#17157](https://github.com/NousResearch/hermes-agent/issues/17157) Discord 命令同步超时 | Bug | 2026-04-28 | ~3.7个月 | OPEN，3 条评论 | 影响 Discord 重度用户 |
| [#18885](https://github.com/NousResearch/hermes-agent/issues/18885) cron 中 memory 工具需 allow_memory 标志 | Feature | 2026-05-02 | ~3.5个月 | OPEN，5 条评论 | 用户已在评论区讨论方案 |
| [#53902](https://github.com/NousResearch/hermes-agent/issues/53902) v0.17.0 Renderer GPU 死循环 | Bug | 2026-06-28 | ~1.7个月 | OPEN，8 条评论 | 影响 macOS Intel 用户 |
| [#9056](https://github.com/NousResearch/hermes-agent/issues/9056) / PR #9087/#84178 Nix Home Manager 模块 | Feature | 2026-04-13 | ~4个月 | **已关闭** | 今日已合并相关 PR，标记为完成 |
| [#31593](https://github.com/NousResearch/hermes-agent/pull/31593) QQBot DM 审批授权修复 | PR | 2026-05-24 | ~2.8个月 | OPEN | 修复已提交但未合并，QQBot 用户等待中 |

---

**总结：** 项目整体处于高速迭代期，今日的 Issue/PR 闭环速度快（如 CLI 的 isatty 问题在一天内得到两个 PR），v0.20.4 补丁如期发布。社区需求主要集中在桌面端性能优化、Windows 平台支持完善、声明式安装（Nix）等方面。需要重点关注的是自动化基础设施（skills-index 停摆）已持续一个月，以及多个 P2 级 Bug 在今日新提交后尚未有对应修复 PR（如 #89586、#89131、#89576、#89579、#89415）。这些若能在下个版本（v0.20.5）得到解决，将显著提升整体健康度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

过去24小时内，PicoClaw 项目保持中等活跃度：共产生 6 条 Issue 更新（5 条活跃，1 条关闭）和 4 条 PR 更新（2 条待合并，2 条已合并/关闭），无新版本发布。两个长期挂起的 PR（#1158 Anthropic 原生协议支持、#3317 提示缓存 token 日志）在本日完成合并，标志着多协议兼容性与可观测性取得实质进展。当前积压中值得关注的是 #806 的 WebUI 重构（高优先级 roadmap 项，评论 9 条、👍 8 个）以及 #3328 的 LINE webhook 配置失效 Bug（已有对应修复 PR #3329 待合入），未见阻碍项目健康发展的严重风险信号。

---

## 2. 版本发布

**无**（过去24小时无新版本发布）

---

## 3. 项目进展

今日合并/关闭了 2 个 PR，均为挂起较久的跨版本工作：

- **[#1158] feat: add anthropic-messages protocol for native Anthropic API format**（作者: hyperwd，关闭于 2026-08-18）— 新增 `anthropic-messages` 协议前缀，支持 Anthropic 原生 Messages API（`/v1/messages` 端点）格式的 LLM 服务。该 PR 修复 #269，此前仅支持 Anthropic 兼容代理格式的服务无法接入。此变更补全了 PicoClaw 在协议兼容层的关键缺口，对使用各类 Anthropic 代理服务（Claude Code、Anthropic 直连等）的用户具有重要价值。需要注意：该 PR 挂起时间约 5 个月，可能存在与当前代码库的适配成本，建议维护者确认合并后的状态。

- **[#3317] feat(providers): log prompt cache tokens in LLM response debug output**（作者: vmuliadi-astro，关闭于 2026-08-18）— 在网关的 "LLM response" 调试输出中补充 `prompt_cache_hit_tokens` / `prompt_cache_miss_tokens` 字段，使 DeepSeek（经 Cloudflare AI Gateway）等提供商的缓存命中数据可观测。对依赖缓存降本的用户（尤其高频调用场景）是直接利好。

另有 #3329（fix: warn on inert webhook_host/webhook_port，修复 #3328）和 #3314（fix: customAllowPatterns 不生效）仍在待合并状态，均对应真实 Bug 修复，建议加速评审。

---

## 4. 社区热点

- **[#806] [Feature]: Add webUI support (Refactoring now)** — 评论 9 条 | 👍 8 个 | 优先级: high，路线图项。作者 Zepan 提出为降低非技术用户的使用门槛，开发浏览器端 Web UI（当前仅有 TUI）。这是近期社区关注度最高的议题，👍 数量远超其他 Issue，说明"降低入门门槛"是当前用户群体的核心诉求。该 Issue 标注 "Refactoring now" 表明可能已进入开发流程，建议关注其在后续版本中的落地节奏。

- **[#3287] [Feature] Better support long messages in IRC** — 评论 6 条。用户 superuser-does 提出 PicoClaw 应将 IRCv3 中超 512 字节的消息视为单一完整消息来处理（当前被 IRC 客户端自动拆分后 PicoClaw 会将其作为多条消息理解），影响长文本场景下的语义完整性。属于协议适配层面的合理需求。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

- **[高] #3339: Antigravity 生成返回通用 429 错误** — 认证和模型发现成功，但每次生成请求均返回 `RESOURCE_EXHAUSTED`（429），响应中无配额相关信息。用户 k3XD16 于 2026-08-17 报告，尚无可用的排查方向或修复 PR，可能涉及 Google Antigravity 端配额策略或 PicoClaw 请求头处理问题。建议维护者排查是否遗漏了必要的请求参数。

- **[中] #3328: line.settings.webhook_host / webhook_port 配置从未被读取** — 声明存在、有默认值、有文档，但代码中无任何消费方，设置后既不生效也不告警。qing-wang 于 2026-08-11 报告。已有修复 PR #3329（改为警告而非静默播种），但仍待合并，建议尽快合入以避免用户因无效配置产生困惑。

- **[中] #3301: /clear 与 session 自动压缩在经 dispatch rules 路由的非默认 agent 聊天中不生效** — 影响 Discord/Telegram 多 agent 路由场景，用户手动清空上下文或自动压缩功能失效，可能导致上下文膨胀与 token 浪费。j-v 于 2026-07-29 报告，暂未见对应修复 PR。

- **[低] #3292: 聊天界面输入框选中时 CPU 占用过高** — 已于今日关闭。该问题涉及 Web 端 Firefox 下输入框聚焦时的 CPU 尖峰，关闭原因未明确标注，若为修复已合入则正常关闭，若是因长期无响应被自动关闭则建议开放者确认根因。

---

## 6. 功能请求与路线图信号

- **WebUI（#806）** — 社区热度最高（👍 8），且标注为 roadmap 项，原始作者 Zepan 同时是项目活跃维护者，已注明 "Refactoring now"，大概率纳入后续大版本。当前 TUI 对非技术用户门槛较高，"浏览器界面是让非技术用户管理 PicoClaw 最直观的路径"是该请求的核心论据。

- **IRC 长消息支持（#3287）** — 属于协议适配需求，无对应 PR，优先级待定。IRCv3 的 512 字节限制是协议特性，PicoClaw 在拆分消息上的当前行为可能与用户预期不符，建议在下个迭代评估。

- **Anthropic 原生 Messages 协议（#1158, 已合并）** — 完成合入后，使用 Anthropic 原生 API 格式服务的用户（包括各类代理服务）可无缝接入，预计会扩展 PicoClaw 在 Anthropic 生态中的用户基数。

---

## 7. 用户反馈摘要

从今日活跃 Issues 的评论与描述中提炼：

- **配置无效无感知** — #3328 作者 qing-wang 指出 "nothing in the codebase reads them. Setting either has no effect, and there is no warning to say so."，反映用户对"静默失效的配置项"的挫败感，期望设计上对无效配置至少给出显式警告（PR #3329 正是此方向）。

- **上下文管理在多 agent 路由下失效** —— #3301 用户 j-v 在真实工作流中（Discord/Telegram + dispatch rules 路由）发现 `/clear` 和自动压缩均无法作用于被路由的会话，说明高级路由功能与基础会话管理之间的交互存在盲区，影响实际使用体验。

- **模型提供商兼容性痛点** — #3339 用户 k3XD16 在 Antigravity 认证与模型发现均成功后仍收到 429，且错误信息无任何可操作线索（"no quota info in response"），反映与云服务商集成时错误透传不够完善的问题。

- **调试信息的可观测性需求** — #3317 的合入（日志增加 prompt cache token）体现了用户阵营中对 token 成本精细化的追求，尤其 DeepSeek 经 Cloudflare AI Gateway 时的缓存数据此前完全不可见。

---

## 8. 待处理积压

以下重要事项长期未得到维护者响应，提醒关注：

- **[#3301] /clear 和 session 自动压缩在 dispatch rules 路由下不生效** — 自 2026-07-29 报告，已逾 3 周无维护者回应，无关联 PR。属多 agent 高级场景的功能缺陷，建议评估优先级。

- **[#3314] fix: customAllowPatterns 不生效** — 作者 j-v 于 2026-08-03 提交修复 PR，已标注 stale，仍未收到评审或合并动作。该问题导致 exec allow list 形同虚设（默认 deny 规则始终优先），影响 agent 执行自定义命令的能力，属于安全/功能边界问题，建议加速处理。

- **[#3329] 对无效 webhook_host/webhook_port 给出警告** — 修复 PR 与 Issue #3328（2026-08-11 创建）同步存在，已一周有余无评审动态。鉴于 Issue 描述清晰、修复方案简单，属于低风险高收益的改动，应尽快合入。

- **[#3287] IRC 长消息支持** — 自 2026-07-22 报告以来评论 6 条，维护者未参与讨论。IRC 渠道用户群虽小众，但长文本语义拆分可能在群聊场景造成消息混乱，建议官方给出明确的态度声明（是否采纳/何种排期），避免用户长期悬置。

---

**项目健康度评估**：活跃度中等偏上，Bug 响应节奏存在优化空间（#3301/#3314 积压超过 2 周未处理），但核心功能合并进展顺利（#1158 为跨 5 个月的重要能力合入）。社区热情集中在 WebUI 方向，建议路线图规划中予以明确回应。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：** 2026-08-19  
**数据窗口：** 2026-08-18 → 2026-08-19

---

## 1. 今日速览

NanoClaw 在过去 24 小时展现出极高的核心团队开发强度，共产生 39 条 PR 更新，其中以 `moshe-nanoco` 主导的数据库层可移植性重构（#3321-#3337 系列）为主线。该系列重构在合入前置性分支（#3321/#3323/#3324/#3326）后，今日提交了 4 个新的待审查阶段（#3332-#3335/#3337），显示出将中央数据库从 SQLite 绑定中解耦的系统性工程意图。同时，`gavrielc` 提交了 7 条围绕 session 生命周期驱动抽象、安全隐患修复的 PR（#3306-#3308/#3339-#3342），涵盖 Slack 安全策略收紧、凭证校验失败闭环等关键操作修复。社区侧活跃度相对平稳，仅有 1 条新 Issue 上报（#3338），为 Codex WebSocket 空闲重试隐蔽性问题。整体看，项目正处于一次大规模内部基础设施重构期，维护者响应迅速，无阻塞性危机。

---

## 3. 项目进展

> **说明：** 本期无新 Release，以下为本窗口内合入的 PR 进展。

### 数据库可移植性重构（核心推进）
| PR | 说明 |
|---|---|
| [#3321 refactor(db): centralize the central database path](https://github.com/nanocoai/nanoclaw/pull/3321) | 统一中央数据库路径管理 |
| [#3323 refactor(db): make central SQL portable](https://github.com/nanocoai/nanoclaw/pull/3323) | 将中央 SQL 与方言解耦，建立可移植层 |
| [#3324 refactor(db): add async central database seam](https://github.com/nanocoai/nanoclaw/pull/3324) | 为异步中央数据库接入创建接缝（后续被新版取代） |
| [#3326 fix(db): close async concurrency races](https://github.com/nanocoai/nanoclaw/pull/3326) | 修复异步并发竞争条件 |
| [#3330 test(db): run central suites through the driver](https://github.com/nanocoai/nanoclaw/pull/3330) | 测试改为走 DbDriver API，覆盖驱动层 |

**待审查的新阶段：**
- [#3332 refactor(db): prepare the central database for portable drivers](https://github.com/nanocoai/nanoclaw/pull/3332)
- [#3333 refactor(db): add async central database seam](https://github.com/nanocoai/nanoclaw/pull/3333)（替代 #3324 的改进版）
- [#3334 [BREAKING] refactor(db): adopt async central database safely](https://github.com/nanocoai/nanoclaw/pull/3334) — **破坏性变更**
- [#3335 refactor(db): add backend composition and portable tests](https://github.com/nanocoai/nanoclaw/pull/3335)
- [#3337 fix(codex): await central database operations](https://github.com/nanocoai/nanoclaw/pull/3337)

> **项目推进评估：** 基础 SQL 可移植层、异步接缝、并发修复已确立，今日递进至"后端组合 + 破坏性采用"阶段，方向为让 NanoClaw 支持非 SQLite 的远程数据库后端。

### 安全与稳定性修复（合入状态）
- [#3077 fix(claude): only abort on a rejected rate_limit_event; split rate_limit vs quota](https://github.com/nanocoai/nanoclaw/pull/3077) — 修复 Claude 速率限制事件误判终止；区分限流与配额语义

### 核心机制进展（今日新增）
- [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) 新增 session-runtime 驱动层（Docker 为内置实现，纯增量）
- [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) host 侧会话生命周期接入驱动层
- [#3308](https://github.com/nanocoai/nanoclaw/pull/3308) 禁止在未处置的已有文件夹上创建 agent group，防数据丢失

---

## 4. 社区热点

### 最受关注：Codex WebSocket 空闲重试隐性失败
[Issue #3338](https://github.com/nanocoai/nanoclaw/issues/3338)
- 作者 `ionescu77` 昨日新建，目前已获 2 条评论。
- **核心诉求：** 当 Codex Responses WebSocket 连接空闲 5 分钟时，Codex CLI 会自行触发内部重试，但该失败信息并未传递给 NanoClaw——导致用户提交请求后可能静默等待长达 10 分钟（NanoClaw 自身的超时上限）而没有任何反馈。
- **背后需求：** 桥梁类集成（Telegram/WebSocket）对中间层故障的可见性、透传质量，以及超时机制之间的协调设计。
- **评价：** 这并非独立偶发问题，而是"外层超时 > 内层重试周期"的典型设计缺陷——外层被内层"抖动"欺骗。是值得维护组优先回应的可用性议题。

### 高频贡献者持续主导讨论
今日核心团队（`gavrielc`、`moshe-nanoco`）贡献了几乎所有活跃 PR，社区外部贡献者（`javexed`、`sfakam`、`itsakhilyou`）各有 1-2 条提交，讨论声量集中在 infra PR 本身，公开评论较少。

---

## 5. Bug 与稳定性

### 🔴 功能性 Bug（出现中）
| 严重度 | Issue/PR | 问题描述 | Fix 状态 |
|---|---|---|---|
| 高 | [#3338](https://github.com/nanocoai/nanoclaw/issues/3338)（Open） | Codex WebSocket 空闲重试失败被隐藏，请求可静默等待 10 分钟 | 尚无对应 PR |
| 中 | [#3339](https://github.com/nanocoai/nanoclaw/pull/3339)（Open） | 存储的账号凭证无法验证时被当作"验证通过"处理，失败未闭环 | 已有 Fix PR，待合并 |
| 中 | [#3340](https://github.com/nanocoai/nanoclaw/pull/3340)（Open） | `pending_approvals` 缺少"交付实例"记录，OneCLI 凭证卡片可能以错误身份编辑 | 已有 Fix PR，待合并 |
| 中 | [#3341](https://github.com/nanocoai/nanoclaw/pull/3341)（Open） | Slack 服务与凭证签发方无配对校验，两半系统独立配置易错配 | 已有 Fix PR，待合并 |

### 🟡 已修复（本窗口关闭）
- [#2868](https://github.com/nanocoai/nanoclaw/issues/2868)（Closed） `/update-skills` 静默空操作：已安装渠道无法刷新代码/依赖——预检步骤跳过了刷新逻辑。
- [#3194](https://github.com/nanocoai/nanoclaw/issues/3194)（Closed） `/update-nanoclaw` 可"假成功"：版本切换先于验证，且回滚点不覆盖 SQLite 数据库、gitignored 配置及外部组件，存在 4 个失败窗口。
- [#3326](https://github.com/nanocoai/nanoclaw/pull/3326)（Merged） 异步并发竞争关闭。

---

## 6. 功能请求与路线图信号

### 新增功能/渠道
- [#3343](https://github.com/nanocoai/nanoclaw/pull/3343)（Open） **Webex REST 轮询适配器**：企业场景中无需入站 Webhook，通过轮询 REST 接口接收消息。如果合并，将成为继 Slack/Telegram 后的又一重量级渠道。
- [#3322](https://github.com/nanocoai/nanoclaw/pull/3322)（Open） **You.com MCP 工具集成**：新增 `/add-youdotcom-tool` skill，为用户提供通过 You.com 接入 MCP 工具链的能力。

### 潜在纳入下一版本的方向
- **数据库后端可插拔**：PR 系列 #3332-#3335 明确指向对 PostgreSQL/MySQL 等远程后端的支持，被纳入下一小版本的可能性极高。
- **Session 运行驱动抽象**：#3306-#3307 为未来支持非 Docker 运行时提供了基础。
- **核心团队对 Slack 安全语义的收紧**（#3342）表明向"默认安全/最小权限"推进的决心。

---

## 7. 用户反馈摘要

> 来源：本窗口 Issues 及 PR 评论中可见的用户声音。

1. **关于 `/update-skills` 静默失效（#2868）**  
   用户 `glifocat` 指出：通过 CHANGELOG 中 `[Unreleased]` 部分引导用户"重新运行 `/add-<channel>`"来恢复更新逻辑，这种"用操作替代修复"的做法实际上掩盖了功能缺陷本身。反馈基调强调：**文档引导不能替代代码正确性**。

2. **关于更新流程的不信任感（#3194）**  
   同一用户的第二条反馈指出：更新命令"先改 checkout 再验证"的顺序，使得故障窗口暴露于数据库和配置层面。这折射出用户对**升级安全性和回滚充分性**的深层担忧——尤其在涉及外部组件时。

3. **来自新 Issue（#3338）的间接批评**  
   用户 `ionescu77` 虽未直接抱怨，但描述中"用户无法知晓 10 分钟沉默原因"的场景，体现出对**运行状态可观测性**的持续需求。这类问题对真实世界中的 Telegram 操作者影响尤为明显。

---

## 8. 待处理积压

### 长期未关闭的 PR
| PR | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) | 2026-08-17 | Open | Session driver seam，所有后续 PR 依赖此块，**需优先审查推进** |
| [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) | 2026-08-17 | Open | Stacked on #3306，阻塞后续 |
| [#3308](https://github.com/nanocoai/nanoclaw/pull/3308) | 2026-08-17 | Open | Stacked on #3306 + consumption PR |

> 核心团队 3 条 PR 形成依赖链，已滞留 2 日未动，可能成为后续工作流瓶颈。

### 长时间未响应的 Issue
**暂无**。唯一条 Open Issue （#3338）为昨日新建，尚在正常响应窗口内。

---

> **总结评语：** 项目当前健康度良好，核心维护层推进节奏明确，社区侧偶发反馈能被及时关闭。建议维护者优先审查 #3306 系列以解除阻塞，并及时回应 #3338 的可用性疑虑。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。以下是根据 IronClaw (github.com/nearai/ironclaw) 2026-08-19 的 GitHub 数据生成的每日项目动态日报。

---

# IronClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

IronClaw 项目今日活跃度**极高**，核心团队与社区贡献者均在密集推进关键工作。过去 24 小时内，项目有 1 个新 Release 发布（v1.3.0-rc.2），重点修复了升级过程中的崩溃问题。Pull Request 流量显著高于 Issues，反映出团队正专注于功能落地与代码重构（尤其是 Reborn 运行时与编排循环）。`v1.4.0` 的多个史诗级任务已开启，涵盖了从设计系统治理、沙箱解决方案到内存提供方集成等前沿方向。项目整体处于 **v1.3.0 稳定化与 v1.4.0 规划并行** 的健康发展阶段。

## 2. 版本发布

**ironclaw-v1.3.0-rc.2** (2026-08-18)
[查看 Release](https://github.com/nearai/ironclaw/releases)

**更新内容与迁移注意：**
- **关键修复**：解决了从 1.2 版本升级时，由于未正确处理 `activation_state` 字段导致启动时崩溃循环（crash-loop）的问题。现在升级过程会接受并保留该字段。
- **增强**：标准的 Reborn 运行时镜像再次支持可选的、仅公钥认证的工作节点 SSH（端口 2222）。
- **迁移建议**：此次为补丁性质修复，无破坏性变更。建议所有运行 v1.3.0-rc.1 或从 v1.2 升级的用户更新至此版本，以避免启动失败。

## 3. 项目进展

今日虽无 PR 合并记录，但大量高质量 PR 正在快速推进中，多个关键重构即将合入：

- **能力响应规范化**：`#7686` 和 `#7711` 是两个关键的 XL 级 PR，旨在将运行时能力结果处理集中化，并引入类型化工具响应与访客迁移。这标志着技术栈正朝着更稳定、更可预测的 WASM 工具执行架构演进。([#7686](https://github.com/nearai/ironclaw/pull/7686), [#7711](https://github.com/nearai/ironclaw/pull/7711))
- **工具面统一**：`#7491` 正在将内部编码工具面统一为更简洁的 `read/write/edit/glob/grep/bash` 六件套，这是对 `omp` 工具契约的一次重大试验，旨在提升模型在编码任务上的表现。([#7491](https://github.com/nearai/ironclaw/pull/7491))
- **工程效能与测试重构**：`#7734` 完成了两个大型测试模块的独立化提取，迁移了317个测试但零生产代码变更，显著提升了代码库的可维护性。([#7734](https://github.com/nearai/ironclaw/pull/7734))
- **性能优化**：`#7709` 和 `#7712` 针对长时间运行的 Agent 循环进行了性能优化，通过在 leas 和检查点机制上减少不必要的 I/O，以提升运行效率。([#7709](https://github.com/nearai/ironclaw/pull/7709), [#7712](https://github.com/nearai/ironclaw/pull/7712))

## 4. 社区热点

- **#6879 [OPEN] 自动化运行不可靠**：这是目前社区最关注的痛点之一，已升级为 `v1.3.0` 和 `v1.4.0` 的史诗级任务。用户反映，有时存储的自动化提示词能成功执行，有时却毫无产出，尤其是在小参数模型上。开发团队已确认这是结构性缺陷而非模型噪声，**根本原因是触发任务被当作普通的交互式聊天回合执行**。这直接关系到产品的核心价值，相关讨论对未来版本优先级有重大影响。([Issue #6879](https://github.com/nearai/ironclaw/issues/6879))

- **#7185 [CLOSED] 跨对话记忆不可靠**：此 Issue 虽已关闭，但引发了关于长短期记忆架构的广泛讨论。多测试者发现 Agent 无法可靠地在后续对话中回忆起之前建立的上下文。社区期待看到相关修复 PR 或说明。([Issue #7185](https://github.com/nearai/ironclaw/issues/7185))

## 5. Bug 与稳定性

**高危：**

- **#7736 每日失败分类学**：这是一份由 CI 生成的每日失败报告，其中指出了由弱模型（Qwen/Qwen3.8-27B）导致的多个非通过任务问题，为模型选型提供了重要反馈。([Issue #7736](https://github.com/nearai/ironclaw/issues/7736))
- **#7727 目录 `capabilities` 必需但从未被读取**：这是一个影响面较广的 BUG，目录中的 `capabilities` 产物被强制要求却从未被使用，这可能误导开发者并引入潜在的安全风险。尚无 PR 链接。([Issue #7727](https://github.com/nearai/ironclaw/issues/7727))

**中危：**

- **#7714 [CLOSED] libSQL 单写连接饿死问题**：在重负载场景下，单一共享写连接导致资源管理员的 journal 长时间停滞，进而引发级联故障。该 Issue 已被关闭，大概率已有修复方案或正在进行重构。([Issue #7714](https://github.com/nearai/ironclaw/issues/7714))
- **#7726 `IRONHUB_MANIFEST_URL` 配置被硬编码忽略**：该配置项形同虚设，任何指向自托管目录的值都会被拒绝，限制了部署灵活性。尚无 PR 链接。([Issue #7726](https://github.com/nearai/ironclaw/issues/7726))

## 6. 功能请求与路线图信号

今日多个 Issue 和 PR 指向了明确的路线图方向：

- **设计系统治理**：`#7733`、`#7038` 以及关联 PR `#7043`、`#7257` 均在推进 WebUI 的设计系统与 Storybook 集成，表明项目开始重视前端体验的一致性与标准化。
- **新存储/沙箱方案**：`#7731` 提出集成 Mnesis 作为内存提供方，`#7732` 提出联合 CLI 的端到端沙箱方案，这些都是面向 `v1.4.0` 的基础架构级探索。
- **自动化可靠性是首要目标**：针对 `#6879` 的审计，PR `#7650` 正试图将预测结果从通过 `语义判断` 改为 `基于运行时证据确定性地推导`。这一改动的进展值得关注。
- **AI 驱动的语音输入**：PR `#7724` 为 WebUI 新增了语音转文字功能，而且采用了非常安全的设计（从不自动发送，浏览器不持有凭据），展现了对用户体验细节的关注。

## 7. 用户反馈摘要

- **记忆与上下文**：用户（Devon, 由 Tobias 代述）反馈 Agent 在跨对话时无法访问此前对话中建立的信息，凸显了在复杂工作流中对长期记忆的强烈需求。([Issue #7185](https://github.com/nearai/ironclaw/issues/7185))
- **自动化可信度**：用户反映自动化任务执行不稳定（hit-or-miss），尤其在小模型场景下，降低了他们对“无人值守”功能的信任。([Issue #6879](https://github.com/nearai/ironclaw/issues/6879))
- **Slack 集成体验**：用户对 Slack 未链接用户的连接流程提出了两点不满：1) 在公共频道内的响应缺乏隐私；2) 流程需要手动往返，操作繁琐。团队已响应并有相应修复 PR 计划。([Issue #7681](https://github.com/nearai/ironclaw/issues/7681))
- **工具调用浪费**：用户观察到 Agent 在调用过多工具后会陷入低效的 `fetch-retry` 循环，而不是通过分页获取结果，导致资源预算被白白耗尽。([Issue #7447](https://github.com/nearai/ironclaw/issues/7447))

## 8. 待处理积压

以下为值得维护者关注的长期未决或潜在复杂事项：

- **#3676 [OPEN] 安全文档重写**：这个 PR 从 5 月开始，旨在重写安全文档。虽然已基于新的 `main` 分支重建，但已经拖延了 3 个月，可能需要维护者协调力量加速合并，以免文档与代码持续脱节。([PR #3676](https://github.com/nearai/ironclaw/pull/3676))
- **#6994 [OPEN] OOBE 自动化任务原型**：此 PR 提出了 WebChat v2 的首次运行体验设计方案和原型，已开放两周多，但仍在等待评审或反馈。作为重要的用户体验入口，建议尽快推进。([PR #6994](https://github.com/nearai/ironclaw/pull/6994))
- **#7673 [OPEN] 预算账本核算改进**：该 Issue 指出 `BudgetLedger`（预算账本）存在两个边界缺口，虽然都处在保守方向（可能提前终止任务），但可能导致不必要的费用消耗，建议在近期版本中给予关注。([Issue #7673](https://github.com/nearai/ironclaw/issues/7673))

---
**报告完毕。** 总体来说，IronClaw 项目正处于积极迭代阶段。虽然存在自动化可靠性等关键短板，但团队响应迅速，已将其列为最高优先级的工作项之一。`v1.3.0-rc.2` 的快速修复也展现了项目对稳定性的重视。随着大量重构 PR 的合并，预计下一个版本在稳定性与可扩展性上将有显著提升。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-19

> 数据来源：github.com/netease-youdao/LobsterAI | 数据分析周期：2026-08-18 ~ 2026-08-19


## 1. 今日速览

LobsterAI 项目今日整体活跃度**极高**，24 小时内发生 29 条更新事件，其中 16 条 PR 被合并，合并节奏明显加快。**最核心的事件是 2026.8.18 版本的正式发布**，该版本引入了 DeepSeek Harness (DSH) 实验性集成及多项调度任务、模型加载的稳定性改进。与此同时，21 个早期（4 月份）遗留的 PR 在今日集中被合并，表明维护团队正在进行**大规模历史积压清理**，这些 PR 经过了数月的测试验证后终于落地。但需注意，今日 Issues 侧仅标记了 9 条陈旧（stale）Issue 的活跃更新，**并无新 Bug 被报告**，整体项目健康度良好，处于"高产出、低风险"的良性状态。


## 2. 版本发布

### LobsterAI 2026.8.18（发布于 2026-08-18）

**核心更新内容：**

| 类别 | 变更 |
|------|------|
| 新增功能 | **DSH (DeepSeek Harness) 引擎集成**，作为实验性可选项引入（默认关闭） |
| 新增功能 | DSH 进程启动器，完善引擎生命周期管理 |
| 依赖升级 | DSH 更新至 rc.7 版本 |

**破坏性变更：** 无。该版本为增量发布，DSH 集成采用 opt-in 方式，默认不影响现有引擎（OpenClaw）的使用路径。

**迁移注意事项：** 已安装 2026.8.17 及更早版本的用户可直接升级，无需额外配置迁移操作。若用户希望体验 DSH 引擎，需主动在设置中开启实验性开关。

> 详细变更参见 PR #2502（DSH 引擎集成）、#2509（更新至 rc.7）


## 3. 项目进展

今日是项目**里程碑式的一天**，共 16 条 PR 被合并/关闭，涵盖多条自 4 月起便处于等待状态的 PR 被正式合入主干。主要进展可归为以下 5 个方向：

### 3.1 重大修复合入（4 月遗留，今日最终合并）

| PR | 说明 | 价值 |
|----|------|------|
| [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) | 修复 OpenClaw 网关因非法配置字段无法启动（P0 Blocker） | 解决 100% 复现的用户无法启动问题；根因是 cron 配置中 `skipMissedJobs` 字段在新版 OpenClaw 中被移除 |
| [#1597](https://github.com/netease-youdao/LobsterAI/pull/1597) | 启用 SQLite `PRAGMA foreign_keys`，修复级联删除失效 | 修复 `cowork_messages` 和 `user_memory_sources` 表长期存在的孤儿数据问题 |
| [#1615](https://github.com/netease-youdao/LobsterAI/pull/1615) | 提升会话导出质量，支持复制到剪贴板 | 修复 Markdown 导出中硬编码英文角色名、缺少元信息等问题，用户体验显著提升 |

### 3.2 功能新增

| PR | 功能 |
|----|------|
| [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | 定时任务执行完成后推送 OS 原生系统通知（默认关闭，需在设置中开启） |
| [#1583](https://github.com/netease-youdao/LobsterAI/pull/1583) | 技能管理增加"最近使用"标签页 + 使用次数统计 |
| [#1629](https://github.com/netease-youdao/LobsterAI/pull/1629) | 用户头像设置（预置 SVG 头像 + 本地上传） |
| [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) | MCP 模块新增"快速添加模板"（File System / SQLite / Brave Search） |

### 3.3 UI/UX 优化

- [#2481](https://github.com/netease-youdao/LobsterAI/pull/2481) 任务搜索移至 Header 操作区，统一跨平台外观
- [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) 新增"Artifact 自动预览"开关（默认行为保留）
- [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) 侧边栏新增**多 Agent 任务活动过滤器**
- [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) 站点页面与 Skills/MCP 管理页样式对齐
- [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) 站点 URL/分享码复制成功反馈提示

### 3.4 稳定性改进

- [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508) 服务器模型加载增加退避重试机制 —— 单次失败不再导致整个会话期内模型列表为空
- [#2507](https://github.com/netease-youdao/LobsterAI/pull/2507) 定时任务运行历史分页加载，防止超过 OpenClaw 网关限额

### 3.5 版本合并

- [#2510](https://github.com/netease-youdao/LobsterAI/pull/2510) 将 release/2026.8.17 分支合并至 main（23 commits，57 文件，+7,004/-39）

**整体评价：** 项目向前迈进了**一大步** —— 大量 4 月份的功能开发/修复经过 4 个月的验证后今日集中合入，加上 8.18 版本的发布，**本日交付量相当于平时 1~2 周的迭代总量**。


## 4. 社区热点

> 注：今日所有 Issue/PR 评论数均不超过 2 条，无明显高热讨论帖。但从 PR 合入模式可窥见社区关注焦点。

### 热点一：DSH 引擎集成（#2502、#2509）

- **动态**：两条 PR 在版本发布前夕相继合入，是 8.18 版本的核心卖点
- **诉求分析**：项目正试图**降低对单一引擎（OpenClaw）的依赖**，向多引擎架构演进。这与 Issue #1614（请求支持 hermes-agent）反映的社区诉求方向一致 —— 用户希望有更多引擎选择

### 热点二：定时任务系统通知功能（#1620 → #1621）

- **动态**：Issue #1620 于 4 月 10 日提出，PR #1621 同期开发并最终于今日合入
- **诉求分析**：用户希望在**任务完成时无需打开应用**即可获知结果，属于典型的"被动等待 → 主动通知"的使用场景。该功能默认关闭，确保不打扰现有用户

### 热点三：历史积压 PR 批量合入

- **动态**：4 月份创建的 8 条 PR 集中关闭/合并（包括 #1583、#1597、#1615、#1621、#1626、#1629、#1631）
- **诉求分析**：这批 PR 可能因需要适配 OpenClaw 新版本而搁置数月，今日批量合入表明**项目已与新版 OpenClaw 完成适配兼容**，具有里程碑意义


## 5. Bug 与稳定性

今日无新增 Bug 报告。当前有 8 条**标记为陈旧（stale）** 的 Bug 类 Issue 处于未修复状态，均为 4 月份报告：

### 严重级

| Issue | 问题描述 | 当前状态 |
|-------|---------|----------|
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | **更新最新版本后首次启动崩溃**（闪退） | 4 个月未响应，需复测是否已在 8.18 版本修复 |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | 复杂任务导致客户端崩溃 | 4 个月未响应，需复测 |
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | 会话功能、定时任务均无法正常进行（macOS Intel） | 4 个月未响应 |

### 中等级

| Issue | 问题描述 | 当前状态 |
|-------|---------|----------|
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | 无法添加自定义模型（测试失败） | 4 个月未响应 |
| [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | 技能删除后列表未同步刷新且重启无效 | 4 个月未响应 |
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | 切换英文后部分内容（条款、工具风格）未翻译 | 4 个月未响应 |

> ⚠️ **风险提示**：以上 Bug 均在 4 月前报告，距今已超 4 个月，期间经历了 2026.8.17 和 2026.8.18 两个版本的迭代，部分问题可能已被修复但未被验证关闭。建议维护团队**逐条排查并引导用户验证后关闭**，以恢复 Issue 跟踪的有效性。


## 6. 功能请求与路线图信号

| 请求 | 来源 | 状态判断 |
|------|------|---------|
| 定时任务执行完成后推送系统通知 | Issue [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) | ✅ **已合入** 8.18 版本（PR #1621），官方设定默认关闭 |
| 增加 hermes-agent 作为可选 AI 引擎 | Issue [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | ⏳ **开放中**，但 DSH 引擎集成（#2502）是同一方向的更优解，建议关注 DSH 的后续推进 |
| 本地模型切换后如何安装 Skill | Issue [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | ⏳ **开放中**，涉及本地模型下 Skill 依赖安装的体验问题，可能需在新版本中优化 |
| MCP 快速添加模板（File System / SQLite / Brave Search） | PR [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) | ✅ **已合入**，提升 MCP 服务接入效率 |
| 多 Agent 任务活动过滤器 | PR [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | ✅ **已合入**，借鉴 Codex 交互模式 |

**路线图信号**：DSH 引擎的引入暗示项目正从"单引擎（OpenClaw）"转向**多引擎可插拔架构**，未来可能支持更多 AI Agent 引擎。此外，技能使用统计（#1583）的合入表明项目开始关注 **auto-routing 场景下的可观测性**。


## 7. 用户反馈摘要

以下反馈基于今日活跃的 9 条陈旧（stale）Issue 的评论内容，反映的是 4 月份用户在对应 Issue 下的实际反馈：

| 反馈类型 | 具体摘录 | 来源 |
|---------|---------|------|
| 😊 功能期待 | "希望能够像 openclaw 一样使用 hermes-agent" —— 对多引擎支持的期待 | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) |
| 😠 稳定性抱怨 | "更新后启动闪退"、"一个稍微复杂的任务客户端就崩了" —— 用户明显受挫 | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587), [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) |
| 🤔 功能困惑 | "切换成本地模型以后，原来的 skill 都不能用了" —— 本地模型与 Skill 兼容性问题 | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) |
| 😕 一致性困扰 | "切换语言之后，部分内容没有实现语言切换" —— 国际化不一致 | [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) |
| 😐 细节不满 | "技能删除后列表未同步更新，重启也无效" —— 前端状态同步问题 | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) |
| 🙋 高频使用 | "任务执行完能不能推送个通知？" —— 定时任务重度用户 | [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) |

**痛点总结**：① 本地模型与 Skill 的兼容体验待完善；② 多语言国际化不彻底；③ 前端状态同步存在死角。**积极信号**：多数 4 月 Bug 可能已在后续版本中修复，但需验证确认。


## 8. 待处理积压

### 🔴 需优先关注的超期 Issue（4 个月以上未响应）

| Issue | 标题 | 等待时长 | 建议 |
|-------|------|---------|------|
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | 更新最新版本首次启动崩溃 | ~4 个月 | **强烈建议**复测 8.18 版本是否已修复，可要求报告者确认 |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | 复杂任务客户端崩溃 | ~4 个月 | 同上 |
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | 增加 hermes-agent 引擎支持 | ~4 个月 | 建议在 DSH 路线下统一回复用户，说明多引擎规划 |
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | 无法添加自定义模型 | ~4 个月 | 属核心功能缺陷，应优先响应 |

### 🟡 待合并的 PR

| PR | 说明 | 优先级 |
|----|------|--------|
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | 优化模型选择器 UI + 统一会话工具栏样式 | 中 |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | **修复全局搜索被当前 Agent 隐式限制的 Bug** + 搜索 UX 升级 | **高**（修复严重 Bug，建议优先审查） |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 依赖升级（electron 40→43, electron-builder） | 中（存在潜在 breaking change，需关注） |

### 🟢 维护建议

1. **清理陈旧 Issue**：对 8 条 stale Bug 进行逐一验证，能关闭的尽快关闭
2. **优先审查 #1634**：全局搜索 Bug 会直接影响核心检索体验，且已等待 4 个月
3. **关注 #1277 依赖升级 PR**：electron 跨了 3 个大版本（40→43），需评估兼容性风险


## 📊 项目健康度评估

| 维度 | 评级 | 说明 |
|------|------|------|
| 代码产出效率 | ⭐⭐⭐⭐⭐ | 16 条 PR 合入 + 1 个版本发布，产出极高 |
| Issue 响应速度 | ⭐⭐ | 今日 9 条 Issue 均为 4 月陈旧更新，无新响应 |
| 社区活跃度 | ⭐⭐⭐ | 合入 PR 多，但讨论热度低 |
| 稳定性 | ⭐⭐⭐⭐ | 无新增 Bug 报告，2 个稳定性修复合入 |
| 积压清理 | ⭐⭐⭐⭐⭐ | 8 条历史 PR 集中合入，积压显著减少 |

**总结**：今日是 LobsterAI 项目的**交付高峰日** —— 版本发布叠加积压 PR 批量合入，开发团队执行效率很高。但要警惕**用户侧可见的 Bug 响应不足**（4 个月未关闭的陈旧 Issue），建议借当前高产出窗口同步推进 Bug 验证与关闭。DSH 引擎集成是值得关注的战略级信号，可能引领项目下一阶段的架构演进方向。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-19

## 今日速览

过去24小时，Moltis 项目保持中高活跃度：2 个历史 Bug（含 Podman 兼容性、Heartbeat 配置丢失问题）均告关闭，其中 Heartbeat 问题由 #1209 修复关闭、Podman 问题由 #1106 修复关闭，形成了完整的 "issue → fix → merge" 闭环。6 条 PR 中 5 条已完成合并或关闭，仅 1 条待审核，合并效率较高。值得关注的是，新提交的 Tesla Fleet API 连接器 PR（#1210）与已合并的 Files Library + Settings 浏览器 PR（#1206）共同勾勒出项目向"数据接入生态 + 本地文件管理"双线扩张的产品意图。今日发布 2 个版本迭代（20260818.06 → 20260818.08），整体项目健康度和交付节奏良好。


## 版本发布

今日发布两个新版本：`20260818.06` 和 `20260818.08`。两个版本均未附带独立的发布说明文本，从合并的 PR 推断，20260818.06 应包含 Podman 沙箱逃逸修复（#1106）、Heartbeat patch 语义修复（#1209）以及 README 星标图修复（#1211）；20260818.08 则在此基础上进一步合入了 OpenAI reasoning 工具调用路由优化（#1198）和 Files 库/Settings 浏览器等功能（#1206）。

> ⚠️ **迁移注意**：`heartbeat.update` 的语义已从 "整体替换配置" 变更为 "字段级 patch"（#1209）。依赖旧行为、在调用时未携带全部字段的客户端/脚本，升级后需确认配置不再被意外重置为默认值。


## 项目进展

过去 24 小时合并/关闭的 5 个 PR 覆盖了从基础架构到功能扩展的多个层面，推动项目在以下方向取得实质进展：

- **Podman 兼容性收尾**（[#1106](https://github.com/moltis-org/moltis/pull/1106)）：合并了支持 Podman 逃逸出口的修复，包括显式的 Linux 主机 socket 透传和特权嵌套 Podman 支持、失败即关闭的 socket 安全策略及 rootless 诊断增强。该 PR 修复了 6 月遗留的 #1095，标志着沙箱生态对 Podman 的完整支持落地。
- **OpenAI reasoning 路由优化**（[#1198](https://github.com/moltis-org/moltis/pull/1198)）：将组合使用函数工具与 `reasoning_effort` 的内置 OpenAI 请求路由至 Responses API，在无工具/推理场景下保持 Chat Completions 行为不变，并统一了流式与非流式的请求构造逻辑。
- **Heartbeat 配置修复**（[#1209](https://github.com/moltis-org/moltis/pull/1209)）：修复 `heartbeat.update` 将参数直接反序列化并整体覆盖配置的缺陷，改为按 patch 语义合并，解决 #1187 中 UI 表单未呈现字段被静默重置的问题。
- **核心功能扩展**（[#1206](https://github.com/moltis-org/moltis/pull/1206)）：新增数据目录持久化的 Files 库，提供经过认证的流式 list/upload/download/create/move/delete API；新增 Finder 风格 Settings 浏览器及 `MOLTIS_FILES_DIR` 发现机制，并默认只读挂载 Docker/Podman/Apple Container。
- **文档/项目形象**（[#1211](https://github.com/moltis-org/moltis/pull/1211)）：修复 README 星标历史图因 GitHub API 鉴权导致的展示断裂，切换至无需 token 的替代数据源。


## 社区热点

今日社区讨论热度整体偏低：2 条关闭的 issue 中仅 #1095 有 2 条评论，6 条 PR 均无评论互动。最值得关注的是 [#1095 Podman 不可用问题](https://github.com/moltis-org/moltis/issues/1095)，这是一条两个多月前（6 月 3 日）提出的旧 issue，在 #1106 合并后于今日关闭，评论数虽少但代表了真实用户对 Podman 容器环境运行 Moltis 的明确需求。另一个已关闭的 [#1187 Heartbeat 设置 UI 静默重置字段问题](https://github.com/moltis-org/moltis/issues/1187)，由用户 IlyaBizyaev 在 8 月 9 日提交，精确描述了表单未覆盖字段被重置为默认值的行为，推动了 #1209 的 patch 语义修复。

整体而言，今日社区呈现 "贡献者驱动、用户反馈驱动修复" 的模式，虽互动量不大，但 issue 闭环效率较高。一个略异常的信号是：多数 PR 缺少评论互动，可能说明核心开发由少数维护者驱动，社区参与度仍有提升空间。


## Bug 与稳定性

今日共关闭 2 个 Bug，均为长期遗留问题，无新增 Bug 报告。按严重程度排列：

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 高 | [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman 环境无法运行 Moltis，影响部分容器用户 | ✅ 已由 #1106 合并修复 |
| 中 | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat 设置 UI 静默重置表单未覆盖的配置字段，可能导致用户配置意外丢失 | ✅ 已由 #1209 合并修复 |

两个 Bug 均已通过对应 PR 修复并关闭，今日无新的崩溃、回归或安全事件报告。项目稳定性整体处于良好状态。


## 功能请求与路线图信号

今日核心功能信号集中在 #1206（已合并）和 #1210（待审核）两个 PR 上，共同描绘了下一阶段的扩展方向：

- **本地文件管理能力**（#1206，已合并）：新增 Files 库（持久化数据目录、流式 API、Finder 风格 Settings 浏览器）和 `MOLTIS_FILES_DIR` 环境变量支持，Docker/Podman/Apple Container 下默认只读挂载。这一功能的落地意味着 Moltis 正从纯对话/代理工具向带有完整文件管理能力的平台演进。
- **车辆数据连接器生态**（[#1210](https://github.com/moltis-org/moltis/pull/1210)，待审核）：新增 `moltis-connector-tesla`，以只读方式将 Tesla 车辆数据同步至共享连接器快照存储 —— 不发送车辆命令、不唤醒休眠车辆，支持两套数据集形状。该 PR 与 #1206 共享连接器存储架构，表明 "连接器生态" 正成为项目的核心架构方向之一。
- **版本发布节奏**：今日连发两个版本（.06 与 .08），从功能跨度看（Bug 修复 + 核心功能合并），已初步形成 "积累 → 批量发版" 的迭代节奏。

综合判断，该项目正处于一条明确的扩张轨线上：先搭好文件/数据基础设施（#1206），再吸引第三方数据源接入（#1210）；同时保持对现有问题的快速响应。建议关注 #1210 的合入进度及后续是否有更多 connector 生态 PR 跟进。


## 用户反馈摘要

由于今日关闭的 2 个 issue 均无详细评论内容，以下提炼自有限的评论与 issue 描述：

- **容器环境支持是硬需求**（#1095）：用户 RokkuCode 在两个月前提交的 Podman 环境问题，虽然评论数不多，但该 issue 得以保留至今并最终由专门 PR 修复，说明用户对 Podman 场景的支持有真实需求，且维护者予以了充分重视。
- **配置修改需"所见即所得"**（#1187）：用户 IlyaBizyaev 精确描述了 heartbeat 设置 UI 的行为缺陷——表单未覆盖的字段在保存后被静默重置为默认值。这一反馈反映出用户对配置管理的预期是 "编辑器式" 的（只改我动过的），而非 "表单式"（整表提交）。这一痛点推动了 #1209 的语义修正。

从用户画像来看，当前活跃反馈者多为较深度的用户（能准确定位到配置结构、容器网络行为等层面），且对 Moltis 的配置管理和容器兼容性有较高要求。


## 待处理积压

当前最值得关注的待处理项是：

| 项目 | 类型 | 创建时间 | 当前状态 | 备注 |
|------|------|---------|---------|------|
| [#1210 Tesla Fleet API 连接器](https://github.com/moltis-org/moltis/pull/1210) | 新功能 PR | 2026-08-18 | 已开放 1 天，待审核 | 当前唯一处于 open 状态的 PR，功能清晰且有完整实现，建议优先查看合入 |

**需要维护者关注的长期信号**：查看今日关闭的 issue 时间线可以发现，#1095（2026-06-03 创建）经历了 2 个多月才通过 #1106 修复关闭，中间间隔时间较长。虽然最终得到了妥善处理，但这种从 issue 到 fix PR 的长周期可能意味着沙箱/容器模块的维护负载较高，或相关修复排期较靠后。如果 Podman 支持对项目定位重要，建议评估是否需要增加该模块的投入或建立更快的响应机制。

---

*本日报基于 Moltis GitHub 仓库 2026-08-18 至 2026-08-19 的公开活动数据自动生成，数据时间截至 2026-08-19。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-19

**数据统计周期**：2026-08-18 ~ 2026-08-19（UTC）  
**数据来源**：github.com/agentscope-ai/CoPaw（含 QwenPaw 主仓 Issue/PR 数据）


## 1. 今日速览

CoPaw 项目今日处于**高活跃度**状态：过去 24 小时新增/更新 Issue 45 条（其中新开与活跃 29 条，关闭 16 条），PR 更新 50 条（待合并 31 条，已合并/关闭 19 条），无新版本发布。Issue 侧的核心议题集中在 **MCP 连接稳定性（OAuth2 refresh token 轮换、streamable_http 重连）、Agent 多步骤任务中断、以及沙箱与 shell 执行兼容性** 三大方向；PR 侧则呈现出 **大量 first-time-contributor 提交** 的特征（20 条展示 PR 中 9 条来自新贡献者），涵盖 shell 路径修复、OAuth2 token 持久化、视频上下文传递等实用改进，社区参与度显著上升。值得注意的是，多个高活跃 Issue（#6921、#7102、#7011）均与 **任务执行中断/冻结** 相关，稳定性问题仍是用户最集中的痛点。


## 2. 版本发布

今日无新版本发布。最新版本仍为 **v2.1.0**（及 2.1.0b2 / 2.1beta2）。当前版本相关反馈包括：任务执行中断（#6921）、MCP 传输配置被忽略（#6470）、Console 会话误取消（#7011）、QwenPaw Creator 配置 404（#7076）等，提示 v2.1.0 在稳定性方面存在需修复的已知问题。


## 3. 项目进展

今日无直接标记为 merged 的 PR 展示，但 **19 条 PR 被关闭/合并**，其中包括若干关键修复的收尾：

- **#6617** `fix(providers): honor the Retry-After cap on the streaming retry path` — **已关闭**（作者 Yigtwxx）。该 PR 修复了流式重试路径中不尊重 `Retry-After` 上限的问题，统一了限流策略的三分支逻辑（内部获取超时、可重试 429、不可重试），对提升 LLM 调用稳定性有直接价值。
- **#7122** `Feature/biz kb` — **已关闭**（first-time-contributor，linchao001），内容为描述占位，疑似测试或无效 PR。
- **#7072** `feat(console): add background chat task list API` — **已关闭**（first-time-contributor，suantea）。实现了 Issue #7056 提案中的后台任务列表 API（`GET /console/chat/task`），使多 Agent 协调场景下能够批量查询任务状态，此前只能逐个轮询。
- **#7069** `fix(console): render data-URL images in historical messages on session reload` — **已关闭**（first-time-contributor，suantea）。修复了会话重载后历史消息中 `data:` URL 图片无法显示的问题，后端返回正常但前端未正确渲染。
- **#7064** `fix(cli): sync top-level text on cron update --text for agent jobs` — **已关闭**（first-time-contributor，suantea）。修复了 `qwenpaw cron update --text` 仅更新 `request.input` 而不同步顶层 `text` 字段的问题，此前 `cron get/list` 显示的内容与实际执行内容不一致。

**项目整体向前推进**：后台任务管理接口（#7072）和 OAuth2 refresh token 持久化（#7066，待合并）构成了对 MCP 远程服务支持的重要补强；视频工具结果在 OpenAI Responses API 上的传递修复（#7061，待合并）填补了 Volcengine Ark 等提供商的上下文缺口；多个 shell/沙箱修复（#7057、#7116）则直接回应用户在 systemd/Docker/沙箱场景下的真实问题。整体上项目处于**社区驱动修复 + 新贡献者涌入**的良性循环阶段。


## 4. 社区热点

今日讨论最热烈的 Issue 集中在**多步骤任务中断**与**MCP 连接可靠性**两个主题，反映了当前用户对 Agent 自主完成任务的核心期待与实际体验之间的落差。

- **#6921** — `[Bug]: 经常在“Now 2.1, 3.1, 3.2. Let me do all three.”类似信息输出后无提示就停止了`（8 评论，OPEN）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/6921  
  这是**今日最受关注**的 Issue。用户报告 QwenPaw 2.1beta2 在 Windows 11 上执行多步骤任务时，模型输出类似 “Now 2.1, 3.1, 3.2. Let me do all three.” 的规划后即无提示停止，需要用户手动说“继续”才恢复执行。评论区的核心诉求是：**Agent 规划后应立即执行，而非等待用户确认** —— 目前的行为使得多步骤任务的“自主性”大打折扣，用户必须时刻盯着对话窗口。
- **#6684** — `[enhancement] [Feature]: 增加频道的重试功能`（10 评论，OPEN）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/6684  
  自建 Matrix 频道在服务器启动时因 QwenPaw 启动快于 Matrix 服务而连接失败，且无自动重试或健康检测，用户必须手动重新保存频道才能恢复。评论关注点在于 **频道连接的故障自愈能力** —— 希望系统具备自动重连与健康检查机制。
- **#7102** — `[Bug]: Freeze more than 10 minutes long`（7 评论，OPEN）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7102  
  用户在 QwenPaw Desktop 2.1.0 上使用 GLM 5.3 时，模型超过 5-10 分钟无任何 token 输出，连 thinking 过程也冻结。此问题与 #6921 同属“任务中断”类，但表现为更严重的完全冻结。
- **#6470** — `[Bug]: MCP driver ignoring transport config — hardcoded SSE client breaks streamable_http servers`（5 评论，OPEN）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/6470  
  用户指出 `mcp_stateful_client.py` 中 `_setup_transport` 硬编码使用 `sse_client`，完全忽略 YAML 配置中的 `transport: streamable_http`，导致所有 Streamable HTTP 协议的 MCP 服务器无法连接。这是一处明确的代码缺陷，影响面较大。

**PR 侧热点**：多条 PR 虽评论数未展示，但从标签看 **#7071**（`fix(agents): make view_video inline cap configurable instead of hardcoded 2 MB`，[链接](https://github.com/agentscope-ai/QwenPaw/pull/7071)）、**#7066**（`fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers`，[链接](https://github.com/agentscope-ai/QwenPaw/pull/7066)）和 **#7054**（`feat(chrome): support remote bridge endpoint for LAN/network browsers`，[链接](https://github.com/agentscope-ai/QwenPaw/pull/7054)）均处于 `Under Review` 且来自 first-time-contributor，显示出社区对**长尾功能补全**（视频内联上限可配置、OAuth2 轮换 token 持久化、远程浏览器桥接）的关注正在转化为实际代码贡献。


## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

### 🔴 严重（功能不可用/数据丢失）

- **#7118** — `[Bug]: a corrupt envs.json is swallowed silently, then overwritten — every stored env var is lost`（OPEN，1 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7118  
  单个不可解析字节即可导致 `envs.json` 中所有环境变量静默丢失，且下次写入将该丢失持久化到磁盘。**数据丢失类 Bug，严重性最高**。暂无关联 fix PR。
- **#7110** — `[Bug]: 对话上下文中包含无法下载的图片链接，整个会话就不可用了`（OPEN，3 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7110  
  消息记录中出现一个无法访问的图片 URL（模型幻觉生成或网络限制），整个会话即不可用，只有 `/clear` 才能恢复。**单个坏链即可导致会话整体不可用**，属于典型的健壮性缺陷。
- **#7082** — `[Bug]: Model 'unknown' execution failed. Reason: _StructuredOutputDynamicClass is not fully defined`（OPEN，3 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7082  
  Console 渠道初始化 Agent/Toolkit 时出现 Pydantic 错误，`_StructuredOutputDynamicClass is not fully defined`，需调用 `model_rebuild()` 或定义 `Optional`。属 2.1.0 的结构化输出回归。

### 🟠 中等（功能异常/中断）

- **#7102** — `[Bug]: Freeze more than 10 minutes long`（OPEN，7 评论，见社区热点）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7102  
  模型冻结超过 10 分钟无输出。可能涉及 GLM 5.3 提供商兼容性或流式解析问题。
- **#6921** — `[Bug]: 多步骤任务规划后无提示停止`（OPEN，8 评论，见社区热点）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/6921  
  规划语句输出后停止执行，需用户手动“继续”。
- **#7011** — `[Bug]: Console stop request can cancel an active Feishu session under multiple UI sessions (2.1.0)`（OPEN，7 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7011  
  多个 UI 会话并存时，一个 Console 的停止请求会错误取消另一个活跃的飞书会话，涉及 session 身份串扰。
- **#7063** — `[Bug]: Agent 执行工具调用时必现崩溃`（CLOSED，4 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7063  
  `_execute_tool_call` 中 `async for` 遍历一个 coroutine 导致 `TypeError`。已在 v2.1.0 中修复并关闭。**已解决**。
- **#7046** — `execute_shell_command mangles heredoc/multi-line commands`（CLOSED，2 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7046  
  heredoc 或多行命令传给 `execute_shell_command` 时，第一行被当作文件参数，导致命令执行错误。已关闭但未展示关联 fix PR。

### 🟡 轻微（体验/配置）

- **#7005** — `[Bug]: Enabling Shabox causes UV Run to fail`（OPEN，2 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7005  
  启用沙箱后 `uv run` 无法写入 `~/.cache/uv`，需手动添加 `Write(~/.cache/uv/**)` 策略。**已有对应 PR #7116**（`fix(sandbox): expand ~ in policy-derived mount paths`，[链接](https://github.com/agentscope-ai/QwenPaw/pull/7116)）在修复中。
- **#7074** — `[Question]: 正常运行崩溃，需要刷新页面才能重启，频次高发`（OPEN，3 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7074  
  运行中频繁崩溃需刷新页面，疑与前端 session 状态字典加载有关。
- **#7121** — `Flaky nightly: test_sibling_sessions_run_without_serializing timing assertion fails on macOS runners`（OPEN，1 评论）  
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7121  
  macOS CI 上的并发会话时序断言不稳定，属测试 flakiness 而非产品缺陷，但需关注是否为真实并发问题。


## 6. 功能请求与路线图信号

今日用户提出的功能需求中，以下方向可能被纳入下一版本：

| 功能请求 | Issue/PR | 信号强度 | 说明 |
|---|---|---|---|
| **频道自动重连/健康检测** | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | 强，10 评论 | 自建 Matrix 连接失败后无重试机制，用户需手动恢复。与 [#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900)（MCP streamable_http 无自动重连）形成同类需求集群，建议路线图中加入统一的重连机制。 |
| **会话级/Agent 级 reasoning_effort 覆盖** | [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | 中，2 评论 | 目前 `reasoning_effort` 仅在模型级全局设置，不同角色的 Agent（快速问答 vs 深度研究）无法差异化配置思考深度。 |
| **插件 API 增加 system_prompt 权限** | [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | 中，4 评论 | 企业用户希望在插件交互层注入公司提示词，且不被用户在会话界面看到。 |
| **技能池导入页面增加搜索/过滤** | [#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) | 中，2 评论 | 技能池有几百个技能时，`questionary.checkbox` 仅支持上下键翻找，无法按关键词搜索。 |
| **文件预览关闭选项** | [#7039](https://github.com/agentscope-ai/QwenPaw/issues/7039) | 弱-中，4 评论（已关闭） | 点击文件后直接预览而非下载，用户希望提供 Turn off preview 开关。 |
| **对话中单条消息删除** | [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) | 弱，5 评论（已关闭） | 用户希望像微信一样可右键/长按删除某条消息，涉及上下文自动更新。虽已关闭但评论数不少，可能已转内部需求。 |

**已有对应 PR 的功能**：
- 视频内联上限可配置（#7071，对应 Issue #7060）— 解决 2-50 MB 视频无法内联的问题，**预计可合入**。
- 后台任务列表 API（#7072，对应 Issue #7056）— 已关闭/合并，多 Agent 场景可批量查询任务状态。
- 远程浏览器桥接端点（#7054）— 支持 LAN/网络浏览器，打破 loopback-only 限制。
- 智能邮件管理助手（#6800）— 完整的多邮箱接收/分类/自动回复助手，属于较大的功能 PR，仍在开放中。


## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户声音：

1. **多步骤任务的“假自主”是最大失望点**（#6921）：用户原话描述“都是规划好下一步就停止了，没实际开始干也无任何视觉可见的提示”，需要用户反复说“继续”才能推进。这直接影响了用户对 Agent 自主执行能力的信任。深层诉求是：**规划后应立即执行，失败才请求确认**，而非默认停下来等指令。

2. **MCP 连接配置不生效令人沮丧**（#6470）：用户明确指出了硬编码 `sse_client` 的代码位置（`mcp_stateful_client.py` 约第 800 行），说明用户不仅有使用需求，还具备定位问题的技术能力。这类“用户直接指出根因”的 Issue 往往是最值得优先修复的。

3. **坏链即可摧毁整个会话**（#7110）：用户反馈“消息记录里出现一个没法访问的图片链接，这个会话下面就彻底挂掉了，只有 /clear 才有用”。用户对“单一资源失败导致整个会话不可用”的设计表达了明显不满。

4. **沙箱策略配置的文档/实际行为不一致**（#7005）：用户按文档添加 `Write(~/.cache/uv/**)` 到 `policy.yaml` 后仍无法解决 `uv run` 写入问题（PR #7116 修复中），说明沙箱的路径解析逻辑存在 `~` 展开缺失。

5. **安全软件误报影响信任**（#6775）：英文用户报告 Malware Bytes 将 Desktop 版本识别为 Trojan Loader，作者表示“I'm uninstalling until I hear back from your team”。安全误报对海外用户信任度影响大，需要官方提供明确的排查指引或签名机制。

6. **积极反馈**：#7039 用户提到“更新到 2.1.0 版本后，确实发现很多改善，比如公式显示正常了”—— 虽同时报告了新 Bug，但肯定了版本改进方向。


## 8. 待处理积压

以下 Issue/PR 长期未获得维护者响应或状态未更新，建议关注：

| 项目 | 创建时间 | 最后更新 | 等待时间 | 说明 |
|---|---|---|---|---|
| **#5900** — MCP streamable_http 会话终止后无自动重连 | 2026-07-09 | 2026-08-18 | **~40 天** | 远程 MCP 服务器重启/网络抖动后，客户端永久跳过该 MCP，无重连机制。与 #6470、#7053 同属 MCP 连接可靠性问题集群，建议统一纳入修复计划。链接：https://github.com/agentscope-ai/QwenPaw/issues/5900 |
| **#6470** — MCP driver 硬编码 SSE client 忽略 transport 配置 | 2026-07-26 | 2026-08-18 | ~23 天 | 用户已明确根因（`mcp_stateful_client.py` `_setup_transport`），修复成本应较低。链接：https://github.com/agentscope-ai/QwenPaw/issues/6470 |
| **#6775** — Malware Bytes 误报 Trojan Loader | 2026-08-07 | 2026-08-18 | ~11 天 | 用户表示“uninstalling until I hear back”，维护者未回应。安全相关反馈应尽快响应以避免用户流失。链接：https://github.com/agentscope-ai/QwenPaw/issues/6775 |
| **#6921** — 多步骤任务规划后无提示停止 | 2026-08-12 | 2026-08-18 | ~6 天 | 今日最热 Issue（8 评论），无维护者回复，无关联 PR。若为 Agent 循环逻辑缺陷，应尽快定位。链接：https://github.com/agentscope-ai/QwenPaw/issues/6921 |
| **#6800** — 智能邮件管理助手功能 PR | 2026-08-07 | 2026-08-18 | ~11 天 | 完整的多邮箱管理功能 PR，仍为 OPEN 状态，未见 review 活动。若项目方向允许，建议评审或明确拒绝以鼓励贡献者。链接：https://github.com/agentscope-ai/QwenPaw/pull/6800 |


**项目健康度总结**：CoPaw 在社区活跃度上表现优秀，新贡献者提交的 PR 占比高（约 45%），且多数针对真实用户痛点；但 **MCP 连接可靠性（#5900、#6470、#7053）和 Agent 任务中断（#6921、#7102）两大问题集群**已积累较长时间未获系统性修复，建议维护者在 v2.1.x 补丁版本中优先处理。整体来看，项目处于**功能迭代旺盛但稳定性需巩固**的阶段，社区贡献者生态正在形成。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-19

---

## 1. 今日速览

ZeroClaw 在过去 24 小时保持高度活跃，Issue 与 PR 更新各 50 条，几乎打满 GitHub 单页配额。Issue 新增/活跃 31 条、关闭 19 条，PR 侧仍有 48 条待合并、仅 2 条关闭/合并，合并吞吐显著低于提交动能——大量 PR 徘徊在 `needs-maintainer-review` 与 `do-not-merge` 状态，维护者审阅带宽成为当前项目的最关键瓶颈。安全与合规类议题（CVE 修复 #8519、Google STT API key 泄露修复 #10107、advisory 扫描失败 #10097）占据头条，反映出项目在供应链安全方向上持续发力。值得关注的是，有 14 条 PR 挂着 `do-not-merge` 标签且多数已存在 3 周以上，[#10003](https://github.com/zeroclaw-labs/zeroclaw/pull/10003) 与 [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) 等待维护者决策的时间已相当长，积压风险正在累积。

---

## 2. 版本发布

过去 24 小时无新版本发布。上一个版本周期（v0.8.0）的收尾工作仍在进行中，多个标记为 `status:blocked` 的遗留 Issue（如 #5626 关于 observability-prometheus 默认特性的团队决策、#5843 模型级 reasoning 配置）在今日被关闭，属于清理旧账。此外，零发布状态下的 `cargo audit` 失败（#10097）意味着当前 CI 门禁处于红色状态，但截至日报生成时该 issue 已关闭，未产生持续阻塞。

---

## 3. 项目进展

今日合并/关闭的 PR 数量有限，但个别合并意义重大：

- **[#10009](https://github.com/zeroclaw-labs/zeroclaw/pull/10009) fix(memory): key conversation autosave suppression on turn origin** — 已关闭（合并）。修复了对话自动保存逻辑中基于提示词前缀嗅探的过滤机制被心跳工作器绕过的缺陷，直接关联内存正确性与 token 消耗。这是 `distinguished contributor` JordanTheJet 的提交，修复了一个此前导致非用户回合被错误写入持久记忆的问题。

- **[#10097](https://github.com/zeroclaw-labs/zeroclaw/issues/10097) Advisory scan failed** — 已关闭。cargo-deny 扫描发现新的 advisory 后 CI 失败，审计人员（Audacity88）已关闭该 issue，暗示已处理或添加了 ignore 条目，但未见关联 PR 或说明。

- 关闭的 Issue 还包括 [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)（三个 agent turn 引擎统一 RFC，已通过 #7540 落地）、[#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059)（deny.toml 策略清理）、[#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542)（webhook 支持 agent 模式，呼声已久的请求终于关闭——但需注意是 CLOSED 而非标记为已实现）以及 [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069)（Twitter/X channel 在预编译二进制中不可用——关闭但未见修复 PR 关联）。

**风险观察**：上述多个 CLOSED Issue 未关联具体 fix PR，需确认是真实完成还是清理性关闭。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 关注点 |
|-------|----------|---------|--------|
| 1 | [#8303 RFC: Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 22 | 跨多轮 agent 对话的有界目标追踪，涉及控制面、重启交接、Web 与异步子任务 |
| 2 | [#7462 Windows 74 个测试失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 17 | Windows 11（简体中文，代码页 936）测试套件 74 项失败，CI 仅跑 Linux |
| 3 | [#7929 统一斜杠命令注册表](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | 8 | Web UI、ZeroCode TUI 与各 channel 的斜杠命令定义漂移 |
| 4 | [#8519 wasmtime-wasi CVE 修复](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 6 | cargo-audit 与 cargo-deny 忽略列表漂移，跟踪 wasmtime CVE 修复 |
| 5 | [#8563 SOP 在 Web 会话不可用](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | 5 | SOP 配置在 web dashboard 中不生效，S1 级工作流阻断 |

**深度解读**：

- **#8303（22 评论）** 是整个 issue 列表中最热门的讨论。它是一份 RFC，旨在为 ZeroClaw 引入"有界前台 Matrix 工作"模式——让 agent 能在多个回合中持久追求一个用户目标。早期提案因试图在同一交付中包含重启交接、广泛 channel 准入、Web 与异步子任务而过于膨胀，本次则缩小范围。2 个 👍 虽然不高，但 22 条评论说明了内部架构讨论的深度。此 RFC 若通过，将直接影响 agent runtime 的核心行为。

- **#7462（17 评论）** 暴露了**CI 覆盖盲区**——测试仅在 Linux 上执行，而 Windows 上 74 个测试失败，涉及 Unix-only 测试命令、路径语义和控制台编码问题。中文 locale（cp936）加剧了问题。缺乏 Windows CI 反馈环意味着此类回归会持续进入 master。与之相关的 PR [#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910)（为 self-update 路径增加 Windows 测试覆盖）仍处于 open 状态。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 严重（S1 — 工作流阻断）

- **[#8563 SOP 在 Web 会话不可用](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)** — S1，已关闭但未见标题性修复 PR 关联。配置在 `/zeroclaw-data/.zeroclaw/shared/sops` 的 SOP 文件无法被 web dashboard 会话中的 agent 识别。CLOSED 状态需回溯确认。

### 🟠 高（S2 — 行为降级）

- **[#7462 Windows 74 测试失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — S2。Linux-only 测试命令（如 `diff`、`grep` 的 Unix 语义）、路径分隔符、控制台编码。无对应修复 PR，`priority:p1` 已接受两个多月。

- **[#8410 channel 任务缺少"有意不回复"结果](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)** — S2。条件型 channel 任务（"有新邮件则通知，否则保持沉默"）在无新邮件时仍发出可见响应。无修复 PR。

- **[#8642 MCP/tool-schema 克隆导致 RSS 无限增长](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** — S1 已提升关注。从 #5542（WSL2 连续 OOM）拆分出的独立根因。agent 循环中 MCP/tool schema 的克隆导致内存无界增长。无修复 PR，`help wanted` 标签已挂出。

### 🟡 中（S3 — 功能缺失）

- **[#7069 Twitter/X channel 在预编译二进制中不可用](https://github.com/zeroclaw-labs/zeroclaw/issues/7069)** — S3，已关闭。源码存在 `channel-twitter` feature 与实现，但预编译二进制未启用。文档与实现漂移。

### 🟢 安全/合规

- **[#10107 Google STT API key 泄露至 URL](https://github.com/zeroclaw-labs/zeroclaw/pull/10107)** — 高优先级修复 PR（今日新开）。识别请求将 API key 放在 URL 中，导致代理日志、诊断和监控记录会捕获凭据。修复方案改为 `x-goog-api-key` header。**这是今天最重要的安全修复。**

- **[#8519 wasmtime-wasi CVE](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)** — cargo-audit 与 cargo-deny 使用不同的依赖解析范围，忽略列表有意图地不同。此为跟踪 issue，无直接修复，但 #8059（已关闭）做了部分工作。

- **[#10097 Advisory 扫描失败](https://github.com/zeroclaw-labs/zeroclaw/issues/10097)** — 已关闭，但关闭方式未附说明，需确认是已修复还是添加了 ignore 条目。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本

- **[#8303 Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — `status:accepted`，有 22 条评论深度讨论，但 `risk:high` 和 `type:rfc` 标签意味着实现路径仍需探讨。若通过，将成为 agent runtime 的核心能力扩展。

- **[#9998 Session-scoped persistent prompt attachments](https://github.com/zeroclaw-labs/zeroclaw/issues/9998)** — 8 月 14 日新建，4 天内已有 4 条评论。解决历史裁剪、daemon 重启后目标丢失的问题。`needs-maintainer-review` 待定。

- **[#7929 统一斜杠命令注册表](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)** — 8 条评论，涉及 Web UI、ZeroCode TUI 与 channel runtime 的命令定义漂移。`status:accepted`，实现将消除多个表面间的行为不一致。

- **[#8134 重置过期 channel 会话](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)** — 已接受的增强，将实现现有 `session_ttl_hours` 配置参数，自动截断过期会话历史以降低 token 消耗。

### 可能在下几个版本中排队

- **[#8410 channel 有意的 no-reply 结果](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)** — 涉及响应投递语义，需要 runtime 层面的协议变化。
- **[#8409 cron shell 任务支持原始 stdout](https://github.com/zeroclaw-labs/zeroclaw/issues/8409)** — 小的可用性改进，当前 `status=` wrapper 格式对脚本不友好。
- **[#8228 DingTalk 流式消息支持](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)** — channel 层面的体验优化，长时间生成响应的延迟问题。

### 值得关注的新 PR 信号

- **[#9109 原生 Hailo-Ollama 支持](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)**（size:XL，`needs-author-action`）— 新增 `[providers.models.hailo_ollama.<alias>]` 集成，适配 Hailo-Ollama 的 `/api/tags` 与 `/api/chat` 接口。边缘硬件推理方向。
- **[#9104 Grok Build ACP provider](https://github.com/zeroclaw-labs/zeroclaw/pull/9104)**（`do-not-merge`）— 新增 `grok_cli` 模型提供方，通过 JSON-RPC ACP 接口通信。prompt 走 stdin、不进 argv 的安全设计刻意为之。

---

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中提炼的用户声音：

**真实痛点：**

1. **"Windows 是二等公民"** — #7462 的 17 条评论印证了 Windows 用户的挫败感：74 个测试在 Windows 上失败但 CI 完全绿灯，因为测试只在 Linux 上运行。评论者指出这不仅影响贡献者（无法在本地跑通测试），也影响 Windows 部署的生产用户。

2. **"条件任务无法沉默"** — #8410 中用户明确表达了需求：channel 任务应该能够"有意地不回复"。当前实现即使没有新邮件也会发送一条可见消息，这在群聊场景下被多位用户视为噪音。

3. **"SOP 配了但看不到"** — #8563 用户按文档配置了 SOP 文件，但 agent 在 web 会话中完全感知不到。此类"文档与实现漂移"的反馈在本期出现多次（#7069 的 Twitter channel、#7929 的斜杠命令漂移），说明**文档-代码一致性**已成为用户信任的关键短板。

4. **"内存增长到 OOM"** — #8642 中用户报告 MCP tool schema 克隆导致 RSS 无界增长，在 WSL2 环境中尤其严重。这已从 #5542 拆分为独立 issue 并获得 `help wanted` 标签，社区期待修复。

**建设性意见：**

- #7462 评论中用户建议在 CI 中至少增加一个 Windows runner 的 smoke test（而非完整套件），以最低成本捕捉平台特定回归。
- #8410 评论提出了恢复"意图"概念的设计建议——区分"错误"与"有意的无响应"。

**积极信号：**

- 多个长期悬而未决的 issue（#3542 webhook agent 模式、#5833 会话所有权模型）今日关闭，虽未关联明显 PR，但社区感知到项目在"清账"。
- 安全响应速度值得肯定：#10097 在 24 小时内从创建到关闭，说明安全告警有专人跟进。

---

## 8. 待处理积压

### ⚠️ 需要维护者立即关注

| 项目 | 等待时间 | 状态 | 风险 |
|-------|----------|------|------|
| [#10003 fix: account Reliable rejected attempts exactly](https://github.com/zeroclaw-labs/zeroclaw/pull/10003) | 4 天 | `needs-maintainer-review` + `do-not-merge` + `size:XL` | 高 — 涉及 provider 用量计费正确性 |
| [#9013 refactor(config)!: move TodoWrite display config from daemon into zerocode](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) | >5 周 | `needs-maintainer-review` + `do-not-merge` + `size:XL` | 中 — 破坏性变更，影响配置迁移 |
| [#9194 feat(secrets): extract KeySource trait + FileKeySource backend](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) | >4 周 | `needs-maintainer-review` + `do-not-merge` + `size:XL` | 高 — 加密密钥基础设施变更，需安全审计 |
| [#9402 fix(runtime): avoid nesting Docker sandbox inside Docker runtime](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) | >3 周 | `needs-maintainer-review` + `do-not-merge` + `priority:p1` | 高 — 容器嵌套执行边界问题 |
| [#9420 fix(anthropic): support stored OAuth profiles](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | >3 周 | `needs-maintainer-review` + `do-not-merge` + `size:XL` | 高 — 认证基础设施变更 |

### 长期未解决的关键 Issue

| Issue | 创建时间 | 等待时长 | 备注 |
|-------|----------|----------|------|
| [#7462 Windows 74 个测试失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 2026-06-10 | **70+ 天** | `priority:p1`，`status:accepted`，无修复 PR |
| [#8519 wasmtime-wasi CVE](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 2026-06-30 | 50 天 | `priority:p1`，依赖上游修复 |
| [#8309 移除孤儿 SkillForge 引擎](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | 2026-06-25 | 55 天 | 需要"接线或删除"的二元决策 |
| [#8358 zerorelay 里程碑](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) | 2026-06-26 | 54 天 | NAT/CGNAT 穿透的中继节点，里程碑级 tracker |

### 观察到的问题模式

1. **`do-not-merge` 堆积严重** — 至少 10 个 PR 同时挂着 `needs-maintainer-review` 和 `do-not-merge` 标签。维护者需要一次集中 triage 会议清空队列。
2. **维护者审阅带宽不足** — 48 个待合并 PR 对 2 个合并/关闭的比例失衡，可能导致贡献者流失。
3. **Windows 支持长期缺位** — 无 Windows CI、无 Windows 测试覆盖，但社区反馈持续存在，这在项目成长阶段可能成为企业采用的门槛。

---

*本日报基于 2026-08-19 的 GitHub 数据自动生成。所有链接指向 zeroclaw-labs/zeroclaw 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*