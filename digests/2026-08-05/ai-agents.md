# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 02:39 UTC

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

# OpenClaw 项目动态日报 — 2026-08-05

*数据来源：github.com/openclaw/openclaw | 统计窗口：2026-08-04 ~ 2026-08-05*


## 1. 今日速览

OpenClaw 项目连续多日维持超高活跃度：过去 24 小时累计更新 1,000 条 Issue/PR（总吞吐量满足统计上限），其中新开/活跃 Issue 449 条、待合并 PR 385 条，社区侧热度不减。**但项目健康度存在明显矛盾**：核心 Bug 主要集中在「子代理完成消息丢失」（#44925、#92433、#67777）、「会话状态卡死」（#115908、#111498）与「数据库迁移阻断」（#119263）等老问题上，且多数标记 `clawsweeper:needs-maintainer-review`，说明维护者人手对社区反馈的消化速度已开始追不上问题产生速度。同时值得注意的是，今日 PR 合并/关闭仅 115 条（占 PR 总量的 23%），大量 PR 滞留在 `needs proof` 或 `waiting on author` 状态。**需警惕吞吐量虚高掩盖的"重反馈、轻收敛"倾向。**


## 2. 版本发布

今日无新版本发布。最新可用版本为 **2026.7.2**（含 beta.7 等子版本），上一个主要版本线为 2026.7.1 / 2026.6.11。⚠️ 注意：#112395 报告从 2026.6.11 升级至 2026.7.1 后启动迁移被预检阻断，升级前请务必备份数据库。


## 3. 项目进展

今日合并/关闭的 PR 以**重构与测试基建**为主，新功能类 PR 多处于待合并阶段：

| 类型 | 代表 PR | 说明 |
|---|---|---|
| 🔧 重构 - 代码瘦身 | [#119409](https://github.com/openclaw/openclaw/pull/119409) | 合并 Gateway 用量报告与缓存逻辑，属维护者发起的生产代码 LOC 削减行动 |
| 🔧 重构 - 测试夹具收敛 | [#118563](https://github.com/openclaw/openclaw/pull/118563) / [#118559](https://github.com/openclaw/openclaw/pull/118559) | 分别收敛 stream normalizer 和 Android Wear 代理桥的重复测试桩 |
| 🔧 重构 - 冷启动优化 | [#119094](https://github.com/openclaw/openclaw/pull/119094) | 将 reload/recovery 机制移出 Gateway 冷启动路径，利好容器平台 |
| ⚡ 修复 - CLI 显示 | [#118801](https://github.com/openclaw/openclaw/pull/118801) | TaskFlow 列表支持 CJK/emoji 宽度对齐 |

**整体判断**：项目当前处于**维护巩固期**——大量工作围绕削减重复代码、提升测试复用、优化启动性能，而非快速堆叠新功能。方向健康，但若持续偏重重构而新功能落地缓慢，社区耐心可能消耗。


## 4. 社区热点

**🥇 #116277 DeepSeek v4 Flash 静默回复失败**（104 评论，已关闭，[链接](https://github.com/openclaw/openclaw/issues/116277)）
- 现象：模型层静默失败，用户仅收到 "No reply was generated" 兜底消息，无重试、无通知。
- 诉求：**失败必须可见、可重试**——用户对"静默吞掉"零容忍。

**🥈 #116201 实时语音会话无界状态保留**（58 评论，[链接](https://github.com/openclaw/openclaw/issues/116201)）
- 现象：慢速/突发 Provider 行为下，超期的 consul 工作、大帧、播放缓存等不被回收，资源无硬性上限。
- 诉求：**资源必须有上限**——用户担心长期运行后内存/状态膨胀拖垮 Gateway。

**🥉 子代理消息丢失家族**（#44925 23 评论 / #92433 9 评论 / #67777 10 评论，均为 P1 diamond lobster）
- 这一议题贯穿月余仍未闭环，三份报告分别覆盖：完成公告超时、steering 进入已结束的 run、direct-announce + drain 竞争——**根因是同一套子代理完成投递链在多个环节都能丢消息**。社区已表现出明显疲劳。

**趋势判断**：社区注意力高度集中在「可靠性三件套」——消息不丢、状态不卡、失败可见。


## 5. Bug 与稳定性

### 🔴 P0 级（阻断启动/升级）

| Issue | 问题 | 状态 |
|---|---|---|
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 6.11→7.1 升级后迁移预检空表阻断 Gateway 启动 | 已有 PR 跟进 |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | 7.1→7.2 Agent DB v14→v15 迁移失败（entry_valid 列缺失） | 已有 PR 跟进 |

### 🟠 P1 级（严重功能受损或消息丢失）

**无 fix PR 跟进：**

| Issue | 问题 |
|---|---|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话转录投影在持续写压下非收敛重建，主线程阻塞数十秒，所有通道停摆 |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Anthropic 认证恢复后，持久化工作区迁移阻塞主代理所有轮次（macOS） |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程从启动起即被插件元数据快照 + fs stat 打满，accept loop 饿死 |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默失败，仅发兜底消息（**已关闭**，修复方式待确认） |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | 隔离 cron 作业模型请求始终无法到达 Provider（usage.input=0） |

**已有 fix PR 跟进：**

| Issue | 问题 | 对应 PR |
|---|---|---|
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | 模型完成后 `chat.send` 因 stale `expectedLeafEntryId` 被拒 | #119378 等 |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker 永久抑制 Discord/WhatsApp，恢复路径失效 | 已关闭（修复合入） |

### 🟡 P2 级（值得关注）

- [#116010](https://github.com/openclaw/openclaw/issues/116010)：所有持久会话被硬性截断在 128k 上下文，无论模型上限（diamond lobster 评级）。
- [#97616](https://github.com/openclaw/openclaw/issues/97616)：hook/tool 子进程泄漏成僵尸，累积后运行时劣化。
- [#75380](https://github.com/openclaw/openclaw/issues/75380)：`provider-payload.jsonl` / `cache-trace.jsonl` 无上限增长，磁盘有被写满风险。


## 6. 功能请求与路线图信号

**高热度、高可行性的请求：**

| 请求 | 热度 | 信号 |
|---|---|---|
| [#42840](https://github.com/openclaw/openclaw/issues/42840) 控制 UI 支持 MathJax/LaTeX | 👍 10 | 学术用户刚需，前端渲染工作量可控 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) WebChat 语音走 Gateway（自托管 STT/TTS） | 👍 2，diamond lobster | 与 #119321（macOS Talk relay）方向一致，架构已铺路 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) 支持 YAML 配置格式 | 👍 2 | 呼声长期稳定，但维护者优先级不高 |

**已被 PR 覆盖、有望进入下一版本的信号：**

- **Talk / 实时语音系列**（#119321、#119212、#119211）——macOS 实时中继 + 会话保持 + 取消语义修正，说明**语音交互是下一阶段重点**。
- **xAI 插件性能优化**（[#119374](https://github.com/openclaw/openclaw/pull/119374)）——按需加载可选能力运行时，减少插件导入时间。
- **Slack 线程上下文保持**（[#119023](https://github.com/openclaw/openclaw/pull/119023)）——bot 开启回复线程时保留频道上下文。


## 7. 用户反馈摘要

**😡 不满意的声音（可靠性是最大痛点）：**

- 多处报告指向**"静默失败"**：#116277（DeepSeek 无回复）、#44925（子代理超时无通知）、#107873（工具失败后 WebChat 回合被中止而非重试）。一位用户在 #116277 中直言："失败可以被接受，但假装成功不可接受。"
- **升级恐惧**初现：#112395 和 #119263 连续两起迁移阻断，用户开始质疑 7.x 的升级安全性（"每次升级都像开盲盒"）。

**🙂 满意之处：**

- 负面反馈中几乎**无人抱怨功能缺失**，说明功能覆盖面已满足多数用户预期。
- 个别用户对浏览器工具（#44431）、移动端探索（#46058）表达了积极期待，愿意共建。

**💡 使用场景亮点：**

- 多人团队共享实例（#43747）出现**记忆管理行为不一致**——同版本不同机器上 chunking/embedding 行为各异，提示配置系统对用户来说仍有过高的隐式分支。
- 真实自动化压力测试（#44431：9+ 邮箱服务商注册）暴露出浏览器工具缺少 CSS 选择器等硬伤，说明**真实世界自动化仍依赖快照→ref 的冗长回路**。


## 8. 待处理积压 ⚠️

**长期未闭环的"钉子户"（创建 > 50 天仍 open）：**

| Issue | 创建时间 | 问题 | 警示 |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理完成静默丢失 | 3月13日 | 完成公告失败不重试、不通知 | 3 个同源 Issue 仍在扩散，**已严重影响社区信心** |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) 记忆管理混乱 | 3月12日 | 同版本不同机器记忆行为不一致 | 多人团队场景的核心痛点 |
| [#79285](https://github.com/openclaw/openclaw/issues/79285) （如存在） | — | — | — |

**最需维护者优先响应的 3 件事：**

1. **子代理消息丢失全链路审计**（#44925 / #67777 / #92433 合并视角）——修复必须系统性解决，而非逐点打补丁。
2. **数据库迁移测试补强**——连续两起迁移阻断（#112395 / #119263）表明**升级路径测试覆盖严重不足**。
3. **长尾 P1/P2 清理**——超 30 个 P1 级 Issue 标记 `needs-maintainer-review` 且无 PR 跟进，积压正在侵蚀社区信任。

---

*本报告由 AI 自动生成。所有数据均来自 OpenClaw 公共仓库，评级标签（P0-P3、diamond lobster 等）为仓库机器人自动标注，仅供决策参考。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向分析报告

**报告日期**: 2026-08-05 | **数据窗口**: 2026-08-04 至 2026-08-05


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**从功能竞争转向可靠性竞争**的关键转折期。头部项目（OpenClaw、ZeroClaw、IronClaw）日均吞吐量达 50-1000 条 Issue/PR，社区参与热情极高，但共同面临"重反馈、轻收敛"的挑战——待合并 PR 积压、P1 级 Bug 长期未闭环（OpenClaw 子代理消息丢失持续 5 个月、LobsterAI 安全漏洞搁置 4 个月）已成为普遍现象。安全边界加固（ZeroClaw 三起 S0 级漏洞、NanoBot API Key 泄漏）和"静默失败"问题（OpenClaw、CoPaw、Hermes 均被用户严厉批评）是当前最集中的技术债务。与此同时，语音交互（OpenClaw Talk 系列、NanoClaw Dial 渠道）和对外互操作性（ZeroClaw A2A 协议、Chat Completions profile）正在成为下一阶段创新的主战场。


## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | PR 合并/关闭 | Release | 健康度评估 |
|------|-----------|---------|-------------|---------|-----------|
| **OpenClaw** | 449 活跃 | 385 待合并 | 115 合并 | 无（最新 2026.7.2） | ⚠️ 吞吐量虚高，合并率仅 23%，P1 积压严重 |
| **IronClaw** | 50 | 50 | 多条关键 PR 已合并 | 无（冲刺 v1.1.0-rc.1） | ✅ 1.1.0 密集攻坚，修复推进迅速 |
| **ZeroClaw** | 50 | 50 | 仅 2 条合并 | 无 | ⚠️ 设计活跃但合并收敛极慢（48 条 PR 积压） |
| **Hermes Agent** | 50 | 50（新 PR 44 条） | 0 合并 | 无 | ⚠️ 大量修复 PR 就绪但未合并，处修复密集期 |
| **CoPaw** | 30（18 活跃） | 50（28 待合并） | 8 条合并 | 无 | ✅ 体验打磨、回归收敛阶段，社区贡献活跃 |
| **NanoBot** | 5 | 26 | 19 条合并 | 无 | ✅ 健康且快速演进，响应速度快 |
| **LobsterAI** | 少量 | 12 | 9 条合并 | 2026.8.3 合入 main | ⚠️ 安全隐患响应过慢（4 个月未修） |
| **PicoClaw** | 3 | 4 | 0（2 条 stale 清理） | 无（最新 v0.3.1） | ✅ 稳定，无重大回归 |
| **NanoClaw** | 0 新增 | 5 | 1 条核心 PR 合并 | 无 | ✅ 稳定活跃，Dial 渠道开发中 |
| **Moltis** | 0 | 1（Dependabot） | 0 | 无 | ✅ 安全窗口期，7.5/10 |
| **NullClaw** | 0 | 1 新增 | 0 | 无 | ✅ 低位平稳，无负面信号 |
| **TinyClaw** | 无活动 | 无活动 | 无活动 | 无 | ⚪ 静默 |
| **ZeptoClaw** | 无活动 | 无活动 | 无活动 | 无 | ⚪ 静默 |


## 3. OpenClaw 在生态中的定位

**社区规模与影响力**：OpenClaw 以日均 1,000 条 Issue/PR 的吞吐量遥遥领先（第二梯队为 50 条），是生态中当之无愧的**流量中心**。但其合并率仅 23%，且大量 P1 Issue 标记 `needs-maintainer-review` 无跟进，呈现"大而不稳"的特征。

**技术路线差异**：
- OpenClaw 采用**全渠道统一网关**架构，覆盖 Discord/WhatsApp/Telegram/WebChat 等渠道，插件生态丰富，但模块间耦合度高，导致子代理消息丢失、会话状态卡死等跨模块 Bug 难以根治。
- 同类项目（如 CoPaw、NanoBot）更注重**轻量化和快速迭代**，在响应速度和合并效率上显著优于 OpenClaw。
- OpenClaw 的"三件套"可靠性问题（消息不丢、状态不卡、失败可见）恰好是其在生态中口碑下滑的核心原因——用户最集中的负面反馈均指向"静默失败"和"升级如开盲盒"。

**对比优势**：功能覆盖面最广（浏览器工具、语音、cron 调度等）、社区贡献者基数大、路线图清晰（语音交互为下一阶段重点）。**对比劣势**：维护者带宽严重不足，社区信任正在被积压的 Bug 侵蚀。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **消息/任务可靠性** | OpenClaw、CoPaw、Hermes、ZeroClaw | 子代理消息丢失、审批不可见、Cron 挂起、静默失败——用户一致要求"失败必须可见、可重试" |
| **安全边界与凭据隔离** | ZeroClaw（3 起 S0）、NanoBot（API Key 泄漏）、LobsterAI（key 泄露）、OpenClaw | 多 agent 数据隔离、webhook 认证、key 不落环境变量、敏感操作分级审批 |
| **数据库迁移安全** | OpenClaw（连续 2 起阻断）、IronClaw（迁移门失效） | 升级路径测试覆盖严重不足，用户已产生"升级恐惧" |
| **Prompt 缓存** | OpenClaw（#116277）、Hermes（P0 缓存作用域）、ZeroClaw、CoPaw（GPT-5.6）、PicoClaw（cache token 日志） | 节省成本、降低延迟、作用域正确性是普遍需求 |
| **语音/实时交互** | OpenClaw（Talk 系列）、NanoClaw（Dial 渠道） | 自托管 STT/TTS、语音中继、会话保持——语音是下一阶段主战场 |
| **Cron/定时任务精细化** | ZeroClaw（前置条件门控）、IronClaw（run-now）、OpenClaw（cron 请求到达）、NanoClaw（运行时间修复） | 超时控制、手动触发、条件判断、状态持久化 |
| **长上下文管理** | CoPaw（自动压缩触发记忆）、OpenClaw（128k 硬截断）、IronClaw（记忆不可靠） | 上下文压缩策略、记忆召回质量、按需加载技能降 token 消耗 |
| **多渠道一致性** | CoPaw（#6655/#6695）、OpenClaw（Discord/WhatsApp 恢复）、NanoBot（Mattermost 线程） | 同一功能在不同渠道的体验一致性、审批/确认流程跨渠道可达 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|------|---------|---------|-------------|
| **OpenClaw** | 全渠道统一网关、语音交互、浏览器自动化、子代理编排 | 高级用户/团队，追求功能全 | 单体网关 + 插件生态，模块耦合度高，维护成本大 |
| **IronClaw** | Agent 工程质量、"Reborn" 架构重构、可恢复性 | 企业级 Rust 开发者/平台团队 | Rust 多 crate 工作区，强调类型安全和架构约束 |
| **ZeroClaw** | 对外互操作性（A2A 协议、Chat Completions profile）、Webhook 生态 | 追求外部工具链集成的开发者 | 网关 + RFC 驱动架构设计，评审流程重、迭代快 |
| **Hermes Agent** | 缓存作用域正确性、Cron 生命周期、插件接口扩展 | 桌面端 + 自托管用户，需要精细控制 | 网关 + 多 profile 模式，注重生命周期管理 |
| **CoPaw** | 多模型并行、文件管理、审批流程 | 中文用户？/团队协作，需要审批控制 | 融合 Qwen 生态，渠道适配（WeChat/iLink）差异明显 |
| **NanoBot** | 轻量快速迭代、WebUI UX、多 provider 兼容 | 开发者、偏好简单部署的个人用户 | Monorepo + 高频发布，维护者驱动型社区 |
| **LobsterAI** | 桌面客户端体验、运营活动（积分）、Artifact 预览 | 面向 C 端用户的桌面产品 | Electron 桌面端，注重登录转化率与用户增长 |
| **PicoClaw / NanoClaw / NullClaw** | 嵌入式/轻量场景、工具链复用 | 嵌入式开发者/CLI 爱好者 | 极简架构，新增 provider 成本低 |
| **Moltis** | （数据不足，仅依赖维护） | 未明确 | 依赖自动化依赖更新，社区互动极少 |

**核心差异维度**：**功能广度**（OpenClaw/ZeroClaw） vs **工程质量**（IronClaw） vs **迭代速度**（NanoBot） vs **产品化程度**（LobsterAI） vs **轻量极简**（PicoClaw/NullClaw）。


## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **L1 流量中心（但合并瓶颈）** | OpenClaw | 吞吐量极高，但合并率低、P1 积压重，社区信心受挫 |
| **L2 密集攻坚/质量巩固** | IronClaw（冲刺 1.1.0）、ZeroClaw（RFC 密集迭代）、Hermes（修复潮）、CoPaw（回归收敛） | 活跃度高，处于功能扩张或架构重构关键期 |
| **L3 快速演进/健康节奏** | NanoBot（19 条 PR 合并/天）、LobsterAI（版本合入 main） | 响应速度快，维护者主导 + 社区贡献活跃 |
| **L4 稳定/蓄力** | PicoClaw、NanoClaw、NullClaw、Moltis | 低活跃但无负面信号，依赖自动化维护 |
| **L5 静默** | TinyClaw、ZeptoClaw | 24 小时零活动，需关注是否已停止维护 |

**趋势判断**：生态正从"数量扩张"转向"质量收敛"——头部项目（OpenClaw、Hermes、ZeroClaw）的社区诉求已从"加功能"转变为"修可靠性"；而 NanoBot 等中型项目凭借快速响应正在积累差异化优势。


## 7. 值得关注的趋势信号

1. **"静默失败"成为用户零容忍红线**：OpenClaw（#116277）、CoPaw（#6655）、Hermes（#78932）、LobsterAI（PR #1205）均被用户批评"假装成功不可接受"。**对开发者**：在设计 agent 时，错误可见性（observability）应作为一等公民，与功能开发同等权重。

2. **安全边界是生产部署的最大门槛**：ZeroClaw 同日爆出 3 起 S0 级数据隔离漏洞、NanoBot 凭据泄漏 30 天未修复——企业采用前必须先过安全审计。**对开发者**：agent 数据所有权隔离、凭据隔离、webhook 认证应作为默认架构约束而非可选配置。

3. **升级路径正在成为信任瓶颈**：OpenClaw 连续两起迁移阻断（#112395/#119263）+ IronClaw 迁移门失效 + 用户"每次升级都像开盲盒"——**对开发者**：数据库迁移测试、自动化升级演练应纳入 CI 必选门禁。

4. **语音交互是下一阶段共识**：OpenClaw Talk 系列 3 个 PR + NanoClaw Dial 渠道（SMS+AI 语音）双线推进，且架构上已铺路——**对开发者**：音频流处理、实时中继、会话保持将是最新的人才/技术缺口。

5. **对外互操作性与协议标准化**：ZeroClaw A2A 客户端已实现 4 个工具 + Chat Completions profile 获 16 评论最高热度——**对开发者**：支持 OpenAI SDK 兼容接口、参与 A2A 等标准制定，是扩大生态影响力的有效路径。

6. **去中心化部署与隐私关注**：多个项目提及云平台容器化（OpenClaw 冷启动优化、Moltis undici 升级）与桌面端过度扫描争议（Hermes #53328 持续一个月）——**对开发者**：用户对数据主权和性能的敏感度在提升，本地优先/混合部署是差异化卖点。

7. **社区治理模式分化**：OpenClaw 的"高吞吐低收敛" vs NanoBot 的"快速响应" vs ZeroClaw 的"RFC 驱动"——项目健康度与社区满意度强相关。**对开发者**：建立清晰的 issue triage 流程、PR 合并节奏和贡献者反馈机制，比堆叠新功能更能维持社区活力。


**结语**：当前生态的竞争焦点已从"谁能接更多渠道/模型"转向"谁能保证消息不丢、状态不卡、失败可见"。对于技术决策者：选择 OpenClaw 意味着功能广度与可靠性风险的权衡；NanoBot、CoPaw 等中小型项目在响应速度上更胜一筹；IronClaw 适合对工程质量有极端要求的团队；ZeroClaw 则是追求外部互操作性的最佳观察标的。生态整体仍处于快速演进期，未来 3-6 个月"可靠性三件套"的解决程度将决定各项目的竞争格局。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-05

## 1. 今日速览

NanoBot 今日活跃度处于**高位**，过去 24 小时产生了 5 条 Issue 更新和 26 条 PR 更新，其中 19 条 PR 已合并/关闭，显示出维护团队正在高速推进功能迭代与问题修复。当前有 **1 个安全相关 Issue**（#4784，API Key 全局环境变量泄漏）和 **1 个 P1 级回归修复 PR**（#5238）值得重点关注，前者涉及凭据隔离，后者涉及会话工具访问控制。此外，Anthropic Opus 5 适配问题（Issue #5235 与 PR #5236）也在今日完成闭环修复。

**健康度评估**：项目活跃度高、响应速度快，核心维护者（chengyongru）参与的 PR 占据今日合并量的大部分，显示出稳定的开发节奏和清晰的代码治理。安全与稳定性问题均有及时响应，项目整体处于**健康且快速演进**的状态。


## 3. 项目进展

今日共有 19 条 PR 合并/关闭，覆盖功能新增、UI 打磨、Bug 修复等多个方面，主要集中在 WebUI、Telegram/Mattermost 渠道、以及 Anthropic 模型兼容性上：

- **Anthropic Opus 5 适配**（[PR #5236](https://github.com/HKUDS/nanobot/pull/5236)，已合并）：将硬编码的采样参数排除列表改为基于模型族版本的阈值判断，支持 Claude Opus 5 的 `output_config.effort` 控制，并保留旧模型的 `budget_tokens` 手动配置。对应修复了 Issue #5235 报告的 temperature 参数被拒绝问题。**破坏性变更**：需要 `anthropic>=某版本`，依赖声明已更新。
- **移除请求级会话访问授权**（[PR #5238](https://github.com/HKUDS/nanobot/pull/5238)，已合并）：删除了 #5211 引入的 request-scoped `Tool.available()` 层和 `SessionAccessScope` 抽象，恢复 `Tool.enabled()` 为唯一构建时开关。会话工具现在可以搜索和读取该用户拥有/可见的所有持久化会话。这是对 #5211 的回归修复与架构简化。
- **Mattermost 线程分组策略**（[PR #5233](https://github.com/HKUDS/nanobot/pull/5233)，已合并）：新增 `groupPolicyInThread` 配置字段，允许用户在线程和主频道设置不同的 @提及 要求，并在 WebUI 中暴露该选项。是对 #4459 的跟进。
- **WeCom 文件名清理兜底**（[PR #5223](https://github.com/HKUDS/nanobot/pull/5223)，已合并）：修复当入站文件名全是点/空格/不安全字符时清理结果为空、导致写入目标变成目录本身的问题。
- **Telegram 围栏代码保留**（[PR #5222](https://github.com/HKUDS/nanobot/pull/5222)，已合并）：修复语言标签含特殊字符（如 `c++`、`objective-c`）时围栏代码被截断损坏的问题。
- **WebUI 批量打磨**：今日合并了 8 条 WebUI 相关 PR——[#5240](https://github.com/HKUDS/nanobot/pull/5240)（统一浮动控件，合并，提及无关）、[#5241](https://github.com/HKUDS/nanobot/pull/5241)（内联 token 高亮 refine）、[#5242](https://github.com/HKUDS/nanobot/pull/5242)（拒绝非法斜杠命令，而非转发给 LLM）、[#5243](https://github.com/HKUDS/nanobot/pull/5243)（自动化标识移到时间戳旁）、[#5244](https://github.com/HKUDS/nanobot/pull/5244)（prompt 导轨预览渲染 Markdown）、[#5245](https://github.com/HKUDS/nanobot/pull/5245)（时间戳 tooltip 样式统一）、[#5239](https://github.com/HKUDS/nanobot/pull/5239)（集成 Vite dev 模式，`nanobot webui --dev` 一键起前端 HMR）、[#5210](https://github.com/HKUDS/nanobot/pull/5210)（可信代理 bootstrap 认证，支持 Cloudflare Tunnel + Access 场景）。
- **Telegram 自定义 Bot API**（[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)，仍开启）：为 Telegram 渠道支持自托管 Bot API 服务器或企业网关，新增 `api_base` 和额外头字段。


## 4. 社区热点

今日社区讨论热度最高的条目如下：

- **[PR #5238](https://github.com/HKUDS/nanobot/pull/5238) — 移除请求级会话访问授权**：该 PR 合并后关闭了 #5211 引入的回归问题。评论数显示其受关注程度高（评论数 undefined，但作为 P1 回归修复，且改动涉及会话工具的搜索与读取权限，社区关注度高）。
- **[PR #5233](https://github.com/HKUDS/nanobot/pull/5233) — Mattermost 线程分组策略**：作为对 #4459 的跟进，为 Mattermost 渠道提供了更精细的 @提及 控制，回应了用户对线程与主频道差异化管理的需求。
- **[PR #5234](https://github.com/HKUDS/nanobot/pull/5234) — 集成 mst-python 元搜索**：这一新 provider 聚合 DuckDuckGo、Google、Brave、Bing 等多个搜索引擎，使用 RRF 融合结果，旨在提供比单一引擎更丰富的覆盖。仍处于开启状态，社区讨论活跃。
- **[PR #4919](https://github.com/HKUDS/nanobot/pull/4919) — Telegram 自定义 Bot API**：自托管 Bot API 用户的需求已经开放三周，评论数不高但属于企业级部署场景的刚需。

**背后的诉求**：社区的需求集中在 **（a）更细粒度的渠道控制**（Mattermost 线程策略）、**（b）企业级部署的灵活性与安全性**（Telegram 自定义 API、可信代理认证）、**（c）搜索能力增强**（mst 元搜索），以及 **（d）对先前架构变更的回退/简化**（#5238）。


## 5. Bug 与稳定性

按严重程度从高到低排列今日报告的 Bug：

| 严重度 | Issue / PR | 描述 | 状态 |
|--------|-----------|------|------|
| **严重（安全）** | [#4784](https://github.com/HKUDS/nanobot/pull/4784)（开启） | `OpenAICompatProvider._setup_env()` 将 provider API Key 写入进程全局 `os.environ`，gateway 型 provider 会覆盖已有值，导致**不同 provider 之间的 API Key 互相泄漏**。 | 已开启约 30 天，2 条评论，尚无 fix PR |
| **高（功能回归）** | [#5235](https://github.com/HKUDS/nanobot/pull/5235)（已关闭） | Anthropic Opus 5 的 temperature 参数已被官方弃用，但 `omit_temperature` 列表缺少 `"opus-5"`，导致请求始终被 API 拒绝。 | **已修复**（[PR #5236](https://github.com/HKUDS/nanobot/pull/5236) 已合并） |
| **中（功能异常）** | [#5237](https://github.com/HKUDS/nanobot/pull/5237)（开启） | MCP 工具返回业务错误信封（如 `{"code": 404, "msg": "data not exist"}`）但 `isError=false` 时，nanobot 将其视为成功调用，LLM 无法得知失败而持续等待直到 tool_timeout。 | 已有 1 条评论，暂无 fix PR |
| **中（集成兼容）** | [#5247](https://github.com/HKUDS/nanobot/pull/5247)（开启） | Matrix 机器人被邀请进房间时不会自动加入，原因是 nio 的 `Api.join()` 发送空 POST body，Continuwuity 服务器以 `M_BAD_JSON` 拒绝。 | **已有对应修复 PR**：[#5248](https://github.com/HKUDS/nanobot/pull/5248)（开启，发送非空 body） |
| **低（体验问题）** | [#5246](https://github.com/HKUDS/nanobot/pull/5246)（开启） | `.gitignore` 规则 `!memory/` 和 `!memory/MEMORY.md` 导致 `memory/.cursor` 和 `memory/history.jsonl` 无法被忽略，工作区 Git 状态不干净。 | 无评论，暂无 fix PR |


## 6. 功能请求与路线图信号

今日 Issue 中 1 条为功能性增强请求，结合已有 PR 预判如下：

- **[Issue #5246](https://github.com/HKUDS/nanobot/pull/5246) — memory 目录 .gitignore 优化**：用户 whisperity 指出新工作区脚手架会遗留 `memory/.cursor` 和 `memory/history.jsonl` 未跟踪文件，破坏了 `git status` 整洁度。该问题相对轻微，但属于开箱体验的偷工减料，**很可能在下一迭代被顺手修复**。
- **Metasearch 提供方**（[PR #5234](https://github.com/HKUDS/nanobot/pull/5234)，开启）：mst-python 集成为新的 web 搜索 provider。该 PR 为 P1 优先级，社区讨论活跃，**有较大概率进入下一版本**。
- **Telegram 自定义 Bot API 地址**（[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)，开启）：用户 nolanchic 实现 #4702，支持自托管 Bot API 与 HTTP 头扩展。该 PR 已开放 3 周且持续更新，**属于企业部署刚需，可能在近期合入**。
- **WebUI Quick Chat 与临时会话**（[PR #5184](https://github.com/HKUDS/nanobot/pull/5184)，开启）：提供持久 Quick Chat 和内存级临时会话，标记为 conflict（与 #5238 提交冲突），**冲突解决后有望合入**。


## 7. 用户反馈摘要

从今日 Issue 与 PR 评论中提炼的用户声音：

- **对架构变更持谨慎态度**：PR #5238 移除了请求级访问授权层，说明 #5211 引入的会话访问控制对部分用户造成了使用障碍（会话工具无法读取应有的会话数据）。用户对授权模型的简化表示欢迎，但也提示开发者在引入复杂抽象前应充分评估。
- **对 MCP 错误处理体验不满意**：Issue #5237 指出，当 MCP 服务返回业务错误（如数据不存在）且 `isError=false` 时，agent 会陷入等待直至超时。用户认为 agent 应该能识别业务错误信封并重新规划工具调用，而非盲目重试或超时。
- **对 Matrix 集成不完善感到困扰**：用户 orrinwitt（同时提交 Issue #5247 和 PR #5248）描述了被邀请进房间后 bot 无法自动 join、且日志不会显式给出 M_BAD_JSON 错误的过程，体验上属于"静默失败"，对自建 Matrix 服务器用户影响明显。
- **对 Opus 5 适配速度表示肯定**：用户 whisperity 报告 Issue #5235 后，同一天内 PR #5236 被合并，回复速度令其满意。


## 8. 待处理积压

以下为长期未响应的重点条目，提醒维护者关注：

| 项目 | 开启时间 | 停滞时长 | 优先级 | 说明 |
|------|---------|---------|--------|------|
| [#4784](https://github.com/HKUDS/nanobot/pull/4784) — Provider API Key 全局 env 泄漏 | 2026-07-06 | **约 30 天** | 高（安全） | 涉及多 provider 并发时密钥互相覆盖，需尽快给出修复方案 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) — Telegram 自定义 Bot API | 2026-07-14 | **约 22 天**，期间有更新 | 中（P2） | 功能完整但仍未合入，需维护者 review |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) — Telegram 静默轮询停止恢复 | 2026-07-29 | 约 7 天 | 中（P2） | 解决了生产环境 bot 静默断连的严重问题，需要 review；已关联 Issue #5171 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) — WebUI Quick Chat & 临时会话 | 2026-07-30 | 约 6 天，标记 conflict | 中（P2） | 功能覆盖常见聊天需求，但需先解决与 #5238 的冲突 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，我是你的 AI 智能体与个人 AI 助手领域开源项目分析师。根据 Hermes Agent 在 2026-08-05 的 GitHub 数据，我生成了以下项目动态日报。

---

# Hermes Agent 项目动态日报 — 2026-08-05

## 1. 今日速览
今日仓库活跃度极高，24 小时内产生了 50 条 Issue 更新和 50 条 PR 更新，其中新 PR 高达 44 条，显示社区贡献热情高涨。当前开发重点集中在 **Prompt 缓存（Cache）作用域** 的正确性（多个 P0 级 Issue/PR）和 **Cron 生命周期守卫（lifecycle_guard）** 的崩溃与误报问题上。此外，关于**插件接口扩展（Plugin Interface Expansion）** 的长期规划讨论仍在持续，是社区关注的核心议题。虽然今日无新版本发布，但大量针对 P0/P1 缺陷的修复 PR 已就绪，预示着项目正处于一个密集的修复与稳定化周期。

## 2. 版本发布
**无**。过去 24 小时内没有新的 Release 发布。

## 3. 项目进展
今日没有 PR 被合并（合并/关闭的 6 条 PR 中，含 1 条关闭的调查类 PR `#79032`），但多个关键修复 PR 正在等待合并，标志着项目在以下方面取得了重大进展：

- **Prompt 缓存作用域修复（P0）**：PR `#78959` (fix(cache): scope prompt_cache_key by session) 和 PR `#79024` (fix(cache): scope prompt cache keys to conversation lineages) 旨在解决跨会话/跨分支共享缓存导致的上下文污染问题。这两个 PR 若能合并，将彻底修复一系列 P0 级别的缓存缺陷。
- **Cron 生命周期守卫加固**：PR `#79038` (fix: never crash lifecycle guard on NUL-byte paths) 针对 `#78942` 报告的空字节路径崩溃问题提供了修复方案，旨在提升网关的健壮性。
- **多路复用（Multiplex）模式消息去重**：PR `#78889` (fix(feishu): dedup inbound messages across multiplexed profiles) 解决了在开启多配置文件模式下，飞书消息因独立去重缓存而被重复处理的问题。
- **被拒媒体的透明化**：PR `#79033` (fix(gateway): surface rejected MEDIA delivery paths to the model) 旨在修复 Issue `#78932`，让模型不再“以为”媒体发送成功，提升系统的可观测性和可靠性。

上述修复覆盖了从核心 Agent 到网关、再到具体平台适配器的问题，项目正在向更稳定、更安全的方向迈进。

## 4. 社区热点
今日最受关注的讨论集中在**插件系统的演进**上。

- **Issue #64182** (Tracking: Plugin Interface Expansion) 获得 21 条评论，是今日讨论热度最高的 Issue。这是一个长期的跟踪议题，旨在从社区讨论中提炼需求，扩展核心 Agent 的插件接口，以便长期排队的功能 PR 能够稳定合入。
- **Issue #64231** (chore(plugins): lifecycle-event catalog...) 以 17 条评论紧随其后。该议题建议定义一套完整的生命周期事件目录和钩子（Hook）验收标准，并批量处理积压的钩子 PR，而不是零散地合入。

**分析**：这两个高热度 Issue 反映了社区对插件系统规范化、标准化和加速演进的核心诉求。维护者（teknium1）正在积极引导这一进程，这对于拥有大量待合入 PR 的项目来说至关重要。社区不满足于零散的功能添加，而是希望建立一个清晰的框架来指导未来的开发。

## 5. Bug 与稳定性
今日报告的 Bug 数量多且严重程度高，主要集中在缓存、稳定性与安全问题。

- **P0 - Prompt 缓存作用域问题**：
  - Issue `#79017` (prompt_cache_key loses continuity) 指出当前缓存键在上下文压缩后失效，导致缓存命中率低。
  - PR `#78959` 和 `#79024` 均尝试修复此问题，但 `#79024` 提出了更全面的方案，可能取代前者。相关调查 PR `#79036` 也开放征求意见。
- **P0 - Cron 任务因超时死亡**：Issue `#78862` 报告了使用推理模型的 Cron 任务在非流式调用挂起时，因 600 秒超时限制而失败，且备用/重试机制完全失效。
- **P1 - 配置数据损坏**：Issue `#18594` 今日关闭，该 Issue 指出 `get_hermes_home()` 在 profile 模式下会静默回退到 `~/.hermes`，导致跨 profile 数据损坏。此问题已修复并关闭。
- **P2 - 多个中等严重 Bug**：
  - `#78942`：NUL 字节路径导致生命周期守卫崩溃（已有修复 PR `#79038`）。
  - `#78980`：生命周期守卫对包含 `~/...` 路径字面量的 Python 脚本产生误报。
  - `#78932`：被拒绝的媒体投递对模型保持静默（已有修复 PR `#79033`）。
  - `#78975`：飞书 Cron 消息投递失败，因为使用了无效的 API 参数。
  - `#79029`：桌面端在 `hermes update` 后会话侧边栏为空。
- **P3 - 其他问题**：`#79023` (Codex 迁移的 MCP 配置问题)、`#79030` (可通过 shell 绕过 guardrail 编辑敏感配置) 等。

## 6. 功能请求与路线图信号
除了热议的插件接口扩展外，今日也有一些功能请求反映了用户对提升日常使用体验的期望。

- **Issue #79035** (Adopt related_skills frontmatter convention)：提出为技能（Skills）增加结构化的依赖声明方式，以便自动构建技能依赖关系图。
- **Issue #78997** ([Feature Request] Desktop app: display subscription/token usage)：用户希望在桌面应用状态栏实时显示 token 用量和订阅剩余额度，以便更好地管理成本。
- **Issue #54204** (Feature: Allow moving/rescoping existing sessions...)：用户希望能在不同项目（工作区）间移动现有会话，该需求获得了 3 个 👍。
- **Issue #64615** (Add option to disable automatic project/repo discovery)：用户希望增加选项来禁用桌面端的自动项目/仓库发现功能（与 `#53328` 的 Bug 相关）。

**路线图信号**：这些功能请求（如技能依赖图、会话管理优化）虽然目前多为 P3 级别，但结合插件接口的讨论来看，项目可能在下一阶段会关注于工作流和开发者体验的深度优化。

## 7. 用户反馈摘要
- **对“系统静默”的抱怨**：多个 Issue（如 `#78932`）反映了用户对系统在出现问题时“静默失败”的不满，认为模型或界面应该明确告知用户操作失败的原因，而不是让用户误以为一切正常。这可能是本次多个修复旨在提升可观测性的直接原因。
- **对配置复杂性的困扰**：Issue `#46199` 和 `#76457` 反映出用户在处理 Windows 部署和列表类型配置时遇到困难。这表明配置项的类型安全性和文档清晰度仍有提升空间。
- **对“自动发现”行为的反感**：`#53328` (Desktop scans entire home directory) 和 `#64615` (disable automatic project discovery) 获得 👍，说明不少用户对桌面端强制自动扫描整个主目录的行为感到不适，认为其缺乏隐私和性能考量。

## 8. 待处理积压
以下为长期开放、对项目健康度有较高影响但尚未被解决的关键议题：

- **Issue #53328** (Desktop scans entire home directory for git repos)：这是一个与隐私和性能直接相关的 Bug，自 6 月 26 日被报告，已持续一月有余，且与功能请求 `#64615` 直接相关。虽然 PR `#67823` 修复了导航作用域，但扫描行为的核心问题仍未解决。
- **Issue #54204** (Move sessions between projects)：该功能需求自 6 月 28 日起一直处于开放状态，有 3 个 👍，但未收到维护者的明确反馈。
- **Issue #18594** (get_hermes_home() data corruption)：感谢今日社区的努力，该 P1 级高影响 Bug 今日已被关闭。此积压项移除。

---

**总结**：Hermes Agent 项目正处在一个关键的质量巩固期。今日数据清晰地表明，社区和开发者正在集中精力解决由缓存、并发和平台差异带来的复杂稳定性问题。虽然新功能开发（如插件接口扩展）是长期焦点，但当前的首要任务是确保核心机制的可靠性，并提升系统故障的可见性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**: 2026-08-05  
**数据窗口**: 2026-08-04 至 2026-08-05（UTC）

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持中等活跃度：共产生 3 条 Issue 更新和 4 条 PR 更新，其中各有 2 条处于活跃状态。值得关注的是，两条长期未动的 PR（#3280、#3251）今日被标记为 stale 并关闭，表明维护团队正在执行积压清理；同时两条新 PR（#3299 Exa 搜索集成、#3317 缓存 token 日志）处于待合并状态，功能开发仍在推进。项目整体健康度良好，但两个与 **Web UI 输入延迟** 和 **MCP 连接失败导致挂起** 相关的 Bug 尚未有修复 PR 关联，需持续关注。今日无新版本发布。

---

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 **v0.3.1**（对应 Issue #3281 中用户报告的环境版本）。维护者近期未在 GitHub Releases 页面推送新 tag，尚不清楚下一个版本的预计发布时间。

---

## 3. 项目进展

今日无 PR 被合并（2 条已关闭均为 stale 清理），但有 2 条新 PR 处于待合并状态，代表了项目的下一批功能增量：

- **[PR #3299] Add native Exa web search provider** ([链接](https://github.com/sipeed/picoclaw/pull/3299))  
  作者: kesku | 创建: 2026-07-26 | 更新: 2026-08-04  
  为 `tools.web` / `web_search` 添加 Exa 作为原生搜索提供方，复用现有 `d`/`w`/`m`/`y` 时间范围过滤参数，并通过 `X-Api-Key` 头进行认证。这填补了 PicoClaw 在外部搜索服务集成上的空白，扩充了 web search 的 provider 选项。

- **[PR #3317] feat(providers): log prompt cache tokens in LLM response debug output** ([链接](https://github.com/sipeed/picoclaw/pull/3317))  
  作者: vmuliadi-astro | 创建: 2026-08-04 | 更新: 2026-08-04  
  针对 DeepSeek（通过 Cloudflare AI Gateway）等提供商在 `usage` 对象中返回缓存元数据的情况，该 PR 在网关的 "LLM response" 调试日志中补充记录 prompt cache token 数据，使运维人员能够观测缓存命中情况。

**评估**：两条被关闭的 stale PR（#3280 OAuth 修复、#3251 Anthropic provider 缓存 token 捕获）未能赶上合并窗口，但其代码工作可能已在其他分支/PR 中被覆盖或由维护者内部处理——目前无证据表明其功能已被替代实现，建议维护者确认这些修复是否仍然需要。

---

## 4. 社区热点

今日讨论热度最高的 Issue 均围绕**核心使用体验**展开：

- **[Issue #3182] [BUG] Android version** ([链接](https://github.com/sipeed/picoclaw/issues/3182))  
  作者: Monessem | 评论: 6 | 状态: CLOSED (stale)  
  该 Issue 自 6 月 26 日创建后持续了 39 天，期间积累了 6 条评论。用户报告在 Android 上无法启动服务、无法从设置中更改路径，并附有截图。今日被标记为 stale 并关闭——但问题本身是否已在某个版本中修复，关闭原因不明，建议维护者补充说明。

- **[Issue #3281] [BUG] Web UI chat input is very laggy when history has a little bit long** ([链接](https://github.com/sipeed/picoclaw/issues/3281))  
  作者: xpader | 评论: 3 | 👍: 1 | 状态: OPEN  
  用户报告在 Web UI 中，当单会话历史较长时，输入框打字会出现明显卡顿。涉及版本 v0.3.1、Go 1.25.11。这是目前唯一获得 👍 的活跃 Issue，反映用户对前端交互性能的敏感度较高。

- **[Issue #3269] [BUG] If the MCP server connection fails, the agent loop will hang** ([链接](https://github.com/sipeed/picoclaw/issues/3269))  
  作者: ruiyigen | 评论: 3 | 👍: 1 | 状态: OPEN  
  当 MCP 服务器连接失败时，agent 循环挂起，聊天界面完全停止回复。用户使用 nightly 构建（git 2cf030d2）+ Qwen3 模型复现。此问题直接阻断核心聊天功能，严重度较高。

**分析**：社区当前最关心的两个方向：一是 **前端交互性能**（长历史下输入卡顿），二是 **Agent 稳定性**（MCP 故障时的挂起行为）。二者共同指向"对话体验的流畅性与可靠性"这一核心诉求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有修复 PR |
|---------|-------|------|--------------|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败 → agent 循环挂起 → 聊天接口无响应 | ❌ 无关联 PR |
| 🟠 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史下输入延迟（v0.3.1） | ❌ 无关联 PR |
| ⚪ 低 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 无法启动服务/无法修改路径（已关闭，状态未知） | ⚪ 关闭原因不明 |

**分析**：#3269 的挂起问题可能涉及 agent loop 的错误处理逻辑，在没有 timeout 或重试机制的情况下，MCP 连接失败会阻塞整个对话循环，属于高优先级稳定性缺陷。建议维护者优先排查 agent loop 中 MCP client 的错误传播路径。

---

## 6. 功能请求与路线图信号

当前待合并的 2 条 PR 透露了下一版本的功能方向：

| PR | 功能 | 推测纳入版本 |
|----|------|-------------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 原生 Exa web search provider | 很可能纳入下一 minor 版本（v0.4.0） |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | LLM 响应日志中增加 cache token 记录 | 很可能纳入下一 patch/minor 版本 |

**信号解读**：项目正围绕 **provider 扩展** 和 **可观测性增强** 两个维度稳步迭代。Exa 的加入将使 PicoClaw 在 web search 场景中拥有更多选择（对标 Perplexity 等产品的搜索体验）；cache token 日志则面向自托管/企业用户，帮助他们理解 token 消耗结构和缓存效率。

**社区侧的功能诉求**：目前没有新的 Feature Request 类 Issue 出现，存量诉求主要集中在上述两个 Bug 的修复上。

---

## 7. 用户反馈摘要

- **Android 使用痛点**（#3182）: 用户无法在 Android 上启动服务，且设置中的路径不可修改。考虑到 Android 是 PicoClaw 官方支持的主要平台之一，此问题若未真正解决，会影响移动端用户体验。该 Issue 的关闭原因存疑，值得维护者确认。

- **Web UI 性能敏感**（#3281）: 用户对长对话历史下的输入响应速度有明确预期。从评论来看，用户认为输入体验的流畅度直接影响其对 PicoClaw 作为日常工具的使用意愿——"laggy" 是反馈中最常见的关键词。

- **对 nightly 版本的信任度**（#3269）: 用户主动使用 nightly 构建并在 MCP 失败场景下快速定位问题，说明社区中有一部分用户愿意为最新功能承担不稳定风险，并希望通过反馈帮助项目完善。

- **PR 作者的贡献质量**（#3299、#3317）: 两条新 PR 都包含详细的上下文说明（如 `cache token` 的具体 JSON 结构），说明外部贡献者对 PicoClaw 代码库的理解在加深，社区贡献质量趋于专业。

---

## 8. 待处理积压

- **[PR #3280] fix(auth): make browser OAuth login survive real-world callback conditions** ([链接](https://github.com/sipeed/picoclaw/pull/3280))  
  创建: 2026-07-21 | 状态: CLOSED (stale)  
  该 PR 针对 OAuth 登录在 headless/远程环境下失败的问题（授权码被消费后流程被迫重启），提出了 4 个独立原因的修复。由于涉及认证流程，属于高价值修复。已关闭但未说明是否被采纳，建议维护者明确答复作者。

- **[PR #3251] fix(providers): capture the prompt cache token usage in Anthropic providers** ([链接](https://github.com/sipeed/picoclaw/pull/3251))  
  创建: 2026-07-12 | 状态: CLOSED (stale)  
  与 #3317 功能类似但针对 Anthropic provider。#3317 的提交说明作者可能未意识到 #3251 的存在，两 PR 功能有重叠。建议维护者评估 #3317 的通用方案是否可以覆盖 Anthropic 场景，避免重复实现。

- **[Issue #3269] MCP 连接失败导致挂起** ([链接](https://github.com/sipeed/picoclaw/issues/3269))  
  创建: 2026-07-20 | 更新: 2026-08-04 | 评论: 3 | 👍: 1  
  核心稳定性问题已存在 16 天（含 2 天活跃讨论），目前仍无维护者回复或 PR 关联。按项目历史响应速度，建议维护者尽快给出 triage 结论。

---

*本报告由 AI 分析师基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：2026-08-05** | **数据来源：** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

**项目状态：稳定活跃，聚焦渠道扩展与 Bug 修复，社区贡献热度高。**

过去24小时内，NanoClaw 项目无新增 Issue 和新版本发布，但 Pull Request 活跃度较高（共5条更新，其中4条待合并）。核心动向集中在两方面：一是针对 Discord 审批流程的 Bug 修复，二是围绕 **Dial 渠道**（SMS + AI语音通话）的功能开发，后者有两条相关 PR 在持续迭代中。此外，一条关于**定时任务**修复的 PR 获得官方团队认可并已合并，整体项目健康度良好，社区贡献者的参与热情并未衰减。

---

## 3. 项目进展

**重要 PR 合并情况：**

### 🎉 [[core-team] fix(agent-runner): give scheduled tasks current run time](https://github.com/nanocoai/nanoclaw/pull/3154) — **已合并**
由官方核心团队成员 Koshkoshinsk 提交，于今日关闭。该 PR 修复了定时任务运行时 `time` 字段的错误：
- 现在会从实际运行时间（`process_after`）动态渲染任务的 `time`，并生成包含星期信息的任务专属 `current_time`
- 对旧数据保留创建时间戳作为回退，避免兼容性断裂

**项目推进意义：** 该修复完善了**定时任务与Agent-Group交互的一致性**，确保任务在到达 Agent 时能感知真实的时间上下文（包括星期几），这为后续更复杂的定时自动化场景（如工作日/周末差异化调度）打下了基础。项目在任务调度可靠性上又前进了一步。

---

## 4. 社区热点

今日社区讨论热度相对较低（无新增 Issue，PR 评论数均为 0），但长期视角下有两个值得关注的焦点：

### 🔥 [PR #3050: feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050)
- **状态：** 待合并（自 7月14日 创建，仍在活跃更新中）
- **关注点：** 在安装向导中集成 Dial 渠道选项，提升用户体验

### 🔥 [PR #3041: feat(channels): add Dial channel adapter (SMS + AI voice calls)](https://github.com/nanocoai/nanoclaw/pull/3041)
- **状态：** 待合并（与 #3050 同步推进）
- **关注点：** 新增 Dial 渠道适配器（支持短信+AI语音通话）

**分析：** Dial 渠道的引入是当前社区最核心的诉求之一。两条 PR 分工明确——#3041 负责底层渠道适配器实现，#3050 负责安装向导层的用户接入体验。这两条 PR 已持续迭代三周仍保持活跃，说明**社区对多渠道（尤其是语音/短信这类非传统聊天渠道）支持的需求较为强烈**，且该功能模块具有一定复杂度，需要精细打磨。

---

## 5. Bug 与稳定性

今日报告了 **1 个关键 Bug**，已附带修复 PR：

### 🔴 **严重 — Discord 审批流全线失灵**：[\#3185 [OPEN] fix(discord): strip \n delimiter in webhook interaction custom_id](https://github.com/nanocoai/nanoclaw/pull/3185)（作者: omerh）

- **Bug 描述：** 在 Discord 上，点击 `ask_question` 或审批卡片上的**任何按钮都会错误地解析为"拒绝"选项**——即使用户点击"批准"也无效
- **根本原因：** Chat SDK 桥接层的 HTTP 交互（webhook）路径在解码 `custom_id` 时，分隔符处理失误（未去除 `\n` 换行符），导致选项无法正常匹配
- **严重程度评估：** 🔴 高（直接阻断所有基于 Discord 的审批/确认交互，影响核心自动化流程）
- **修复方案：** 在 `custom_id` 解码时主动去除 `\n` 分隔符。作者已提交修复 PR，等待维护者审查合并

---

## 6. 功能请求与路线图信号

### 新增功能信号 — Dial 渠道整合

虽无新 Issues 提出需求，但结合现有活跃 PR，可明确以下路线图信号：

| 功能点 | 相关 PR | 当前状态 | 预计纳入版本 |
|---|---|---|---|
| Dial 渠道适配器（SMS + AI语音通话） | [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | 待合并（开发中） | 下一版本核心特性 |
| 安装向导集成 Dial 选项（runChannelSkill 模型） | [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 待合并（依赖 #3041） | 与 #3041 联动发布 |
| 技能拥有权的主机隔离（Skill-Owned Capabilities） | [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | 待合并（架构优化） | 未明确，但方向清晰 |

### 项目方向判断
两条 Dial 相关 PR（#3041 + #3050）的持续推进，**从代码到向导双管齐下**，基本可以确认 **Dial 渠道将是即将到来的下一个版本的重点功能**。同时，#3186 的作者 zvi-fried 提交的 "host seams for skill-owned capabilities" 重构，表明社区已开始考虑**更细粒度的权限隔离和宿主化机制**，这可能为未来的安全沙箱功能铺路。

---

## 7. 待处理积压

> **提示：** 以下 PR 已持续较长时间未合并，可能受限于复杂功能审查或等待依赖 PR 合并，建议维护者关注。

### ⚠️ [PR #3041: Dial 渠道适配器（已活跃 3 周）](https://github.com/nanocoai/nanoclaw/pull/3041)
- **创建：** 2026-07-14 | **最后更新：** 2026-08-04
- **积压原因：** 可能涉及大量底层代码改动，审查周期较长；需要与其配套向导 PR #3050 同步验收

### ⚠️ [PR #3050: 安装向导集成 Dial（已活跃 3 周）](https://github.com/nanocoai/nanoclaw/pull/3050)
- **创建：** 2026-07-14 | **最后更新：** 2026-08-04
- **积压原因：** 功能依赖 #3041，无法独立合并

**建议：** 建议维护者在下一个版本窗口前，重点评估这两条 PR 的合并计划，避免社区贡献者长时间等待导致动力流失。核心功能长期停留在待合并状态，也可能影响后续依赖这些能力的贡献者。

---

*本日报由 AI 分析师基于 [GitHub](https://github.com/qwibitai/nanoclaw) 公开数据自动生成，仅供项目维护与社区参考。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

过去24小时内，NullClaw 项目活跃度处于**低位平稳**水平：Issues 方面零新增、零关闭，说明社区讨论与问题报告暂歇；PR 方面有 1 条新提交（#981，为新增 xAI Grok CLI provider 的功能请求），目前仍处于待合并状态，尚无代码正式合入主干；无新版本发布。整体来看，项目正在经历一个**短时整合期**——既无新的问题爆发，也无代码合并动作，主要精力或集中在已有 PR 的评审与内部开发上。社区对新功能（Grok 集成）的期待是当前最值得关注的信号。

## 3. 项目进展

**今日无 PR 合并或关闭。** 唯一活跃的 PR 为新增功能请求，尚未进入合并流程：

- **[#981 [OPEN] feat(provider): add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)** — 作者 valonmulolli，创建于 2026-07-29，最后更新于 2026-08-04。该 PR 提议新增一个基于 CLI 的 provider，将请求委托给本地 `grok` 命令行工具（xAI Grok），设计模式完全对齐现有的 `codex-cli` / `gemini-cli` / `claude-cli` providers（即每次请求 spawn 一个子进程）。目前无评论、无合并动作，等待维护者评审。

**项目整体进度评估：** 处于功能扩展的候选阶段，尚未推动主线代码前进。若 #981 被合并，NullClaw 将正式支持 xAI 的 Grok 模型，成为继 Codex、Gemini、Claude 之后的第四个 CLI provider，进一步扩展多模型接入能力。

## 4. 社区热点

**当前唯一的社区热点即 PR #981**（[链接](https://github.com/nullclaw/nullclaw/pull/981)），虽暂无评论（评论数显示为 undefined），但其存在本身代表了两种社区诉求：

1. **多模型接入的持续需求**：用户希望 NullClaw 能对接更多主流 AI 服务，而非局限于当前的几家；
2. **本地 CLI 工具链的复用偏好**：选择以 `grok` CLI 作为 provider（而非直接调用 xAI API），说明用户倾向于利用已有的本地认证与配置，降低接入门槛——这与项目已有的 `*-cli` provider 设计哲学完全一致。

该 PR 已停留 7 天未有维护者回应，社区耐心可能在消耗中，建议维护者尽快表态。

## 5. Bug 与稳定性

**今日无新报告的 Bug、崩溃或回归问题。** 项目当前未暴露稳定性风险，无需紧急修复。

## 6. 功能请求与路线图信号

**今日唯一的功能信号来自 PR #981**（[链接](https://github.com/nullclaw/nullclaw/pull/981)），即增加 xAI Grok CLI provider。该 PR 采用与现有 provider 完全相同的实现模式，技术上成熟度高，被纳入下一版本（如 v0.x 的下一迭代）的可能性较大。是否纳入将取决于维护者对 xAI Grok 生态的重视程度，以及是否愿意在 provider 列表上继续做加法。

**路线图信号：** 项目正在从「核心功能完善期」向「生态扩展期」过渡——provider 的数量正在成为项目竞争力的重要维度。

## 7. 用户反馈摘要

今日无用户评论产生（PR #981 无评论，Issues 无更新）。基于该 PR 本身的内容与提交方式，可提炼的间接信息如下：

- **典型使用场景**：用户拥有本地 `grok` CLI 并已完成认证，希望在 NullClaw 中无缝使用 Grok 模型，而不需要额外的 API key 配置；
- **不满意点（潜在）**：PR 提交后 7 天未获任何回应，维护者响应速度可能成为社区不满的潜在来源；
- **满意的模式**：现有 `codex-cli` / `gemini-cli` / `claude-cli` 的 spawn-per-request 模式被社区认可并作为新贡献的模板，说明该架构设计清晰、易扩展。

## 8. 待处理积压

**当前唯一的待处理项即 PR #981**（[链接](https://github.com/nullclaw/nullclaw/pull/981)），该 PR 已开放 7 天，无任何维护者评论或标签操作。建议：

- 维护者应尽快进行代码评审（该 PR 技术风险较低，模式已有先例）；
- 若有意合并，可先请求作者补充 `grok` CLI 的安装与认证说明文档；
- 若暂不合并，应明确告知社区理由与后续计划，避免贡献者流失。

---

**项目健康度总结：** 代码库稳定无回归，社区有新的功能贡献但等待响应，项目活跃度暂时偏低但无负面信号。关键动作项为**评审 PR #981 并给予作者反馈**。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，我是你的 AI 智能体与个人 AI 助手领域开源项目分析师。根据 IronClaw 仓库（github.com/nearai/ironclaw）2026-08-05 的数据，以下是为您生成的项目动态日报。

---

# IronClaw 项目动态日报 - 2026-08-05

## 1. 今日速览

项目今日活跃度极高，处于 **1.1.0 版本的密集攻坚阶段**。过去 24 小时内，Issue 与 PR 更新双双达到 50 条，显示出强大的社区参与度和开发动力。核心工作流聚焦于：**解决 Windows 平台发布阻断问题**（PR #7200, #7197）、**确保 1.0.0-rc.1 到 1.1.0-rc.1 的迁移无损**（PR #7198, Issue #7178）、以及**大规模重构 "Reborn" 架构的收尾工作**（如 Waves 0-4 批次合并 PR #7181）。代码审查（CodeRabbit）发现了在重构过程中暴露的遗留缺陷（Issue #7144），同时 CI 强制检查的可靠性问题也被提上日程（Issue #7147）。总体来看，项目正在经历一个充满挑战但也卓有成效的重构与发布冲刺期。

## 2. 版本发布

无新版本发布。当前焦点是为 `v1.1.0-rc.1` 的发布扫清障碍。

## 3. 项目进展

今日合并/关闭的 PR 直接解决了发布冲刺中的关键问题，项目整体向 `v1.1.0-rc.1` 迈进了坚实的一步。

- **修复 Windows 平台发布阻断**：
    - [PR #7197 [CLOSED]](https://github.com/nearai/ironclaw/pull/7197)：修复了 CI 中未传递 Windows 身份变量导致预检失败的问题。
    - [PR #7200 [CLOSED]](https://github.com/nearai/ironclaw/pull/7200)：修复了 Windows 上 `icacls` 命令污染 CLI 标准输出的问题，这是第四个 Windows 阻断缺陷，成功攻克了发布路径上的一个关键障碍。
- **强化 CI 门禁**：
    - [PR #7167 [CLOSED]](https://github.com/nearai/ironclaw/pull/7167)：修复了 `cargo clippy` 在纯 bin crate 上因 `--lib` 参数而失败的问题，确保代码风格检查能真正生效。
    - [PR #7156 [CLOSED]](https://github.com/nearai/ironclaw/pull/7156)：针对四个曾让 CI 变绿的漏洞进行了加固，并进行了“破坏性测试”证明其有效性，确保架构约束能被严格落实。

## 4. 社区热点

讨论热度最高的议题揭示了开发者对系统鲁棒性和可调试性的深切关注。

- **[Issue #6284 [CLOSED] EPIC: error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)** (15 条评论)：该 Epic 的目标是让模型能从 100% 的错误中恢复。它强调了一个关键契约：错误信息必须让模型理解“失败原因”和“成功所需条件”。这表明社区对提升 AI Agent 自主修复能力的强烈渴望，这是评估其实际应用价值的重要指标。
- **[Issue #7119 [CLOSED] Code Style clippy is package-set-dependent](https://github.com/nearai/ironclaw/issues/7119)** (4 条评论)：`main` 分支因特定包组合而触发 clippy 报错，说明 CI 的稳定性问题会直接影响开发者的信心，社区对此高度敏感。
- **[Issue #7144 [OPEN] Pre-existing defects in the trace contribution pipeline](https://github.com/nearai/ironclaw/issues/7144)** (2 条评论)：CodeRabbit 在审查重构 PR 时发现了 29 个既有缺陷。这反映了大型重构中代码审查的重要性，以及技术债务对重构工作的潜在影响。

## 5. Bug 与稳定性

今日报告的问题集中在功能缺陷和系统稳定性两方面，其中部分已有修复 PR 或处于修复讨论中。

**严重（已有或正在修复 PR）**
- **实例删除失败与重新登录卡死**：[Issue #6752](https://github.com/nearai/ironclaw/issues/6752) - 用户删除实例时遇到错误，且重新登录时“Loading your agents...”卡住。这是一个严重阻碍用户操作的问题，需优先关注。
- **代理安装的技能不可见**：[Issue #7168 [CLOSED]](https://github.com/nearai/ironclaw/issues/7168) - 调用 `skill_install` 返回成功，但技能在设置界面和模型列表中均不可见，导致其无法被激活使用。

**高（影响模型行为与正确性）**
- **提取器返回错误状态**：[Issue #7104](https://github.com/nearai/ironclaw/issues/7104) - 当没有提取到文本时，返回“Failed”而非“Empty”，会误导模型对操作结果的判断。
- **内置时间工具解析错误**：[Issue #7191](https://github.com/nearai/ironclaw/issues/7191) - `builtin.time` 工具无法处理“24 hours ago”这样的相对时间偏移，也无法提供类型化的错误信息，导致基于时间的自动化任务无法正确配置。
- **记忆召回不可靠**：[Issue #7185](https://github.com/nearai/ironclaw/issues/7185) - 多个测试者反馈，模型在后续对话中无法可靠地回忆之前对话中建立的信息，这是影响用户体验的核心缺陷之一。
- **Web抓取不稳定**：[Issue #7180](https://github.com/nearai/ironclaw/issues/7180) - 用户反馈Web抓取功能时好时坏，模型可能选错工具（如使用http而非web_search）导致失败。

**中（影响系统健壮性与可观测性）**
- **`tracing` 日志过滤失效**：[Issue #7146](https://github.com/nearai/ironclaw/issues/7146) - 发现 121 处 `tracing` 宏错误使用 `target = "…"` 而非 `target: "…"`，导致日志过滤规则失效，增加问题排查难度。
- **文档描述的“数据迁移门”失效**：[Issue #7115](https://github.com/nearai/ironclaw/issues/7115) - `docker/reborn/entrypoint.sh` 脚本依赖一个已死的环境变量，导致用户按照文档操作时会跳过数据迁移。

## 6. 功能请求与路线图信号

多个新功能请求揭示了项目未来的演进方向，与 1.1.0 及后续版本的路线图紧密相关。

- **[PR #7198 [OPEN] fix(migration): preserve rc1 state during 1.1 startup](https://github.com/nearai/ironclaw/pull/7198)** & **[Issue #7178 [OPEN]](https://github.com/nearai/ironclaw/issues/7178)**：旨在实现 `1.0.0-rc.1` 到 `1.1.0-rc.1` 的无损迁移。这是 1.1.0 版本的一个重要特性，确保用户升级不丢失数据。
- **[Issue #7194 [OPEN] feat(outbound): admin-allowed shared channel as outbound target](https://github.com/nearai/ironclaw/issues/7194)**：允许将管理员允许的共享频道作为投递目标。这扩展了 Agent 的触达能力，对需要将结果主动推送给团队成员的协作场景至关重要。
- **[Issue #7193 [OPEN] feat(automations): add run-now (manual fire) across trigger domain](https://github.com/nearai/ironclaw/issues/7193)**：为自动化系统添加“立即运行”功能。这对于用户测试和按需触发任务非常重要，填补了当前功能矩阵中的空白。
- **[Issue #7183 [OPEN] feature request: per-user LLM model selection](https://github.com/nearai/ironclaw/issues/7183)**：允许普通用户选择 LLM 模型，而非由管理员统一配置。这反映了用户对个性化和可控性的需求，或称“BYOM”。
- **[Issue #7177 [OPEN] Improve deferred tool retrieval with schema-aware ranked search](https://github.com/nearai/ironclaw/issues/7177)**：改进工具检索机制，使其能理解工具 schema，而不仅仅是名称和描述。这意味着更智能的工具调用，能显著提升 Agent 在复杂任务中的表现。

## 7. 用户反馈摘要

从今日的 Issues 和评论中提炼出以下真实用户反馈：

- **对系统自我修复能力的极高期待**：[Issue #6284](https://github.com/nearai/ironclaw/issues/6284) 的 Epic 体现了用户希望 Agent 在运行中遇到错误时，不仅不崩溃，还能理解错误并自主纠正，这是对“AI 助手”形态的更高要求。
- **Web抓取体验不佳**：[Issue #7180](https://github.com/nearai/ironclaw/issues/7180) 的用户（Michael Kelly）反馈“Web scraping is hit-or-miss”，并且模型“uses http tool instead of web_search”，说明工具选择和可靠性是影响实际任务完成度的重要卡点。
- **对跨对话记忆的强烈需求**：[Issue #7185](https://github.com/nearai/ironclaw/issues/7185) 中，多位测试者（Devon、Tobias 等）一致发现“Memory not reliably recalled across conversations”，表明当前实现无法满足用户对连续性交互的期望。
- **希望有更细粒度的控制权**：[Issue #7183](https://github.com/nearai/ironclaw/issues/7183) 中，用户（Jeremy Koch）希望“per-user LLM model selection”，这反映出用户不仅满足于功能实现，还希望定制化底层技术参数。

## 8. 待处理积压

以下重要工作项长期未关闭，可能演进为项目瓶颈，建议维护者关注：

- **[Issue #3773 [OPEN] Epic: Land the IronClaw Target Crate Architecture](https://github.com/nearai/ironclaw/issues/3773)** - 创建于 5 月 19 日。这是一个宏大的架构目标，旨在统一 crate 布局、依赖关系和 CI 执行。考虑到近期大量的重构工作（如 #7144, #7147, #7151 等），这个已持续近三个月的 Epic 是许多问题的根源，其最终落地对项目长期健康至关重要。
- **[Issue #6947 [OPEN] classify-test-scope.sh: ironclaw_product mis-bucketed](https://github.com/nearai/ironclaw/issues/6947)** - 创建于 7 月 31 日。CI 脚本对 `ironclaw_product` crate 的分类错误，可能导致测试覆盖不完整或执行了错误的测试集，是 CI 可靠性的一个隐患。
- **[Issue #6731 [OPEN] Integrate IronHub into IronClaw](https://github.com/nearai/ironclaw/issues/6731)** - 创建于 7 月 27 日。将 IronHub（技能/工具市场）集成到 IronClaw 中。这是一个备受期待的功能，但目前进展缓慢。考虑到相关 PR #6965 (IronHub 文档) 已存在，集成工作可能正在进行中。

---
**数据来源**：nearai/ironclaw GitHub 仓库（https://github.com/nearai/ironclaw）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-05

---

## 1. 今日速览

项目今日活跃度**中等偏上**，核心开发力量集中在 2026.8.3 版本的收尾与合并工作。过去 24 小时处理了 12 条 PR（9 条已合并/关闭），主分支已成功合入版本发布分支，标志着 8 月 3 日发布周期正式收官。值得关注的是，一个关于 **agent 泄漏 model key 敏感信息的安全 Bug**（Issue #1202）仍在开放状态，且该 Issue 已存在 4 个月有余，建议维护团队提高优先级。此外，3 条 PR 仍在等待合并，其中包括一条为侧边栏广告添加永久隐藏开关的用户体验改进。整体来看，项目正处于**版本迭代稳定期**，功能推进有序，但安全隐患的响应速度有待提升。

---

## 2. 版本发布

过去 24 小时无新版本发布。但 PR #2430（已合并）确认了 **2026.8.3 版本**已从 release 分支合入 main，该版本包含以下重点变更：

- **原生积分奖励活动**（credit-reward activities）
- **首次运行登录流程优化**
- **新增 Artifact 自动预览控制开关**
- **模型错误处理改进**
- **Windows 安装程序可靠性提升**

> 合并 PR #2430 链接：https://github.com/netease-youdao/LobsterAI/pull/2430

---

## 3. 项目进展

今日合并/关闭的 PR 集中在以下方向：

### 🔄 版本合并（核心）
- **[#2430]** Release: 2026.8.3 — 将发布分支合并至 main，确认 8 月版本功能集（见上节）
  https://github.com/netease-youdao/LobsterAI/pull/2430

### 🎨 登录页优化与活动落地
- **[#2429]** Chore: optimize login page（登录页代码整理）
  https://github.com/netease-youdao/LobsterAI/pull/2429
- **[#2427]** feat(activity): bundle startup credit campaign artwork — 将启动积分活动海报与 CTA 素材打包进客户端本地资源，活动展示不再依赖远端图片
  https://github.com/netease-youdao/LobsterAI/pull/2427
- **[#2428]** fix: complete startup credit campaign analytics fields — 补齐活动分析埋点字段，包括未登录跳转 URL、服务端/网络/登录错误信息等
  https://github.com/netease-youdao/LobsterAI/pull/2428

### ⚙️ 功能改进
- **[#2425]** feat(settings): add artifact auto-preview toggle — 新增 Artifact 自动预览开关，用户可关闭自动打开文件预览（保留手动预览）
  https://github.com/netease-youdao/LobsterAI/pull/2425
- **[#2426]** feat(cowork): classify model capacity overload separately from rate limit — 将模型"过载/容量不足"错误从通用限流错误中拆分出来，避免误导用户立即重试
  https://github.com/netease-youdao/LobsterAI/pull/2426

### 📦 依赖更新（dependabot，批量关闭）
- **[#1282]** @headlessui/react 1.7.19 → 2.2.9（已关闭）
  https://github.com/netease-youdao/LobsterAI/pull/1282
- **[#1283]** react 18.3.1 → 19.2.4（已关闭）
  https://github.com/netease-youdao/LobsterAI/pull/1283
- **[#1284]** react-syntax-highlighter 15.6.6 → 16.1.1（已关闭）
  https://github.com/netease-youdao/LobsterAI/pull/1284

> 整体评价：2026.8.3 版本涉及**用户增长（积分活动）、体验优化（登录页/预览控制）和稳定性（错误分类/安装器）**三大维度，是一次较为全面的迭代。

---

## 4. 社区热点

**今日热点：无高讨论量 Issue/PR。** 唯一新活跃的 Issue #1202（安全 Bug）评论数仅 1，且创建于 4 个月前。

- **Issue #1202**（安全 · model key 泄漏）：https://github.com/netease-youdao/LobsterAI/issues/1202
  - 虽然讨论热度低，但安全影响等级高，值得关注（详见下节）。

> 社区参与度整体偏低，说明项目可能更依赖内部团队驱动，外部贡献者活跃度有限。

---

## 5. Bug 与稳定性

### 🟥 高严重度（安全隐患）
- **[Issue #1202] Agent 泄漏 model key 敏感信息**（Open · 4 个月未修复）
  - 复现路径：向 agent 询问 key 配置 → agent 回复配置/环境变量位置 → 进一步诱导可获取完整 key
  - 影响：涉及 API key 等敏感凭据泄露，可能造成账号盗用或额度滥用
  - 当前状态：无对应 fix PR，仅有 1 条评论
  - 链接：https://github.com/netease-youdao/LobsterAI/issues/1202

### 🟨 中低严重度（已修复）
- **[#2426] 模型过载错误被误报为限流**（已通过 PR 修复）
  - 原问题：provider 过载/容量不足被归入通用限流错误，误导用户立即重试
  - 修复：新增 ModelOverloaded 独立错误分类，并增加原始错误预览覆盖
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/2426

### 🟩 低严重度（待合并）
- **[#1205] 会话重命名失败时无提示**（Open · 4 个月）
  - 问题：重命名失败时输入框直接关闭，用户无任何反馈
  - 修复方案已就绪：try-catch 捕获后弹出 toast 并保持输入框可重试
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/1205

> 稳定性评价：安全隐患的响应周期过长（4 个月），建议将该 Issue 标记为 P0 并排期修复。

---

## 6. 功能请求与路线图信号

以下信号可能进入下一版本（2026.8.x 或 9.x）：

| 信号来源 | 功能诉求 | 状态 | 预测 |
|---------|--------|------|------|
| PR #2374（Open） | 侧边栏广告永久隐藏开关 | 等待合并 | **高概率纳入**，与 #2425 的"偏好设置"方向一致 |
| Issue #2342（被引用） | 广告条展示控制 | 已被 #2374 覆盖 | 随 #2374 合并而解决 |
| PR #2425（已合并） | Artifact 自动预览开关 | 已进入 2026.8.3 | 完成了"减少自动行为对用户的干扰"这一方向 |
| PR #2427（已合并） | 积分活动素材本地化 | 已进入 2026.8.3 | 暗示团队正在探索**增长/活动运营**方向 |

> 路线图信号：项目近期侧重**用户控制权增强**（预览开关、广告隐藏、重命名反馈）与**运营活动基础设施**（积分活动、埋点分析），预计 8 月下旬版本将延续这两条主线。

---

## 7. 用户反馈摘要

**基于现有 Issue 评论，提炼用户声音：**

- **对安全防护有较高期望**（Issue #1202）：用户认为 agent 应主动拒绝透露 key 配置信息，目前"没有做防护"不符合预期，且已提供完整复现日志（zip 附件），说明用户对问题确认足够认真
- **对静默失败高度敏感**（PR #1205 背景）：用户侧反馈重命名失败时"输入框关闭但标题没变"，这种"无提示失败"会显著降低可信度
- **对广告展示容忍度下降**（PR #2374 背景）：用户希望"永久隐藏"而非"暂时关闭"，暗示对重复手动关闭的疲劳

> 总体评价：用户反馈集中在**安全边界**和**操作反馈透明度**两方面，均为直接影响信任度的体验问题。

---

## 8. 待处理积压

以下 Issue/PR 长期未获响应，建议维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 积压原因 | 链接 |
|------|------|------|---------|---------|------|
| #1202 | Issue | [Bug] agent泄漏model key信息 | 2026-04-01 | 安全关键但 4 个月未处理，无 assignee | https://github.com/netease-youdao/LobsterAI/issues/1202 |
| #1205 | PR | fix: show error toast on rename failure | 2026-04-01 | 修复方案已就绪但未合并，可能被忽略 | https://github.com/netease-youdao/LobsterAI/pull/1205 |
| #2374 | PR | feat: hide sidebar ad banner permanently | 2026-07-21 | 等待 review，回应了 #2342 的用户诉求 | https://github.com/netease-youdao/LobsterAI/pull/2374 |
| #1277 | PR | bump electron 40.x → 43.x（dependabot） | 2026-04-02 | 大版本升级需谨慎评估，建议安排专人 review | https://github.com/netease-youdao/LobsterAI/pull/1277 |

> 特别提醒：Issue #1202 的安全问题已存在 4 个月，建议提升优先级并尽快制定修复方案；PR #1205 的修复工作已完成，仅差合并动作。

---

*本日报由 AI 生成，数据来自 LobsterAI GitHub 仓库，统计周期为 2026-08-04 至 2026-08-05。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-08-05

> 客观专业 · 数据驱动 · 项目健康度评估

---

## 1. 今日速览

项目在过去24小时内**活跃度处于低水平**。Issues 侧完全沉寂（0 条新增/关闭），PR 侧仅收到 1 条由 Dependabot 自动发起的依赖升级请求，暂无人工提交或合并动作。无新版本发布。项目正在**安全窗口期平稳运行**，无紧急事件或高热度社区讨论，整体状态健康但缺乏显著推进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

**今日无 PR 被合并或关闭**，主干代码未发生变更。

项目核心代码今日无实际推进。唯一动作是：

| PR | 说明 | 状态 |
|----|------|------|
| [#1184](https://github.com/moltis-org/moltis/pull/1184) | 依赖升级：`undici` 从 7.28.0 → 7.29.0（Web 站点目录） | 待合并 |

该 PR 为自动化依赖维护，不涉及功能变更或架构调整。其待合并状态已被记录（见第 8 节）。

**结语**：项目今日属于"蓄力日"，功能性进展待观察后续提交。

---

## 4. 社区热点

**今日无高热度讨论。** 唯一活跃项为 PR [#1184](https://github.com/moltis-org/moltis/pull/1184)，由 Dependabot 自动创建，无人工评论、无表情回应。

背后的诉求属于**例行安全合规**——`undici` 是 Node.js 生态常用的 HTTP 客户端库，升级至 7.29.0 通常涉及安全补丁或稳定性改进。由于无社区互动，暂无法提炼更深层用户诉求。

---

## 5. Bug 与稳定性

**今日无新报告的 Bug、崩溃或回归问题。**

项目稳定性指标良好，无需要紧急修复的缺陷。该状态验证了近期代码变更的可靠性。

---

## 6. 功能请求与路线图信号

**今日无新功能请求提交。**

唯一信号来自 PR [#1184](https://github.com/moltis-org/moltis/pull/1184)：`undici` 7.29.0 版本可能携带 HTTP/2 或连接池相关的改进，若被合并，将直接影响网站目录的持久连接性能和稳定性。该变更不涉及 API 变更，无破坏性风险，预计可顺利合入下一版本。

---

## 7. 用户反馈摘要

**今日无有效的用户反馈数据。** Issues 评论为零，PR 评论区为空，无法提取用户痛点、使用场景或满意度信号。

> 📊 数据提示：过去 24 小时内社区互动极少，建议结合上周数据综合评估用户情绪，避免单日判断。

---

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 等待时长 | 说明 |
|------|------|----------|----------|------|
| [PR #1184](https://github.com/moltis-org/moltis/pull/1184) | 依赖升级 | 2026-08-04 | ~1 天 | `undici` 7.28.0 → 7.29.0，Dependabot 自动创建，待维护者审核合并。属低风险变更，建议尽快处理以保持依赖链更新。 |

**当前无长期未响应的重要 Issue 或 PR**（等待时长均未超过 48 小时）。项目 backlog 状态良好。

---

**健康度评分：7.5/10**

- ✅ 无 Bug 报告，无回归事件
- ✅ 依赖自动化更新正常运作
- ⚠️ 社区互动低迷（无 Issues、无 PR 讨论）
- ⚠️ 代码推进缓慢，需关注后续提交节奏

*数据时间范围：2026-08-04 00:00 UTC ～ 2026-08-05 00:00 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-05

## 1. 今日速览

过去24小时内，CoPaw 项目保持高活跃度：共产生30条 Issue 更新（含18条活跃、12条关闭）和50条 PR 更新（含28条待合并、22条已关闭/合并）。社区关注焦点集中在**安全隐患审批提示在特定通道下不可达**（#6655、#6695）、**v2.1.0-beta.1桌面版引入的回归问题**（#6697、#6698）以及**文件管理体验**（#6643、#6642）。同时，多个针对已报告问题的修复 PR 已提交，包括 cron 状态持久化（#6691）、插件命名空间隔离（#6688）和自动压缩触发记忆流程（#6629）等。项目整体向稳定性和多通道兼容性方向推进。

---

## 3. 项目进展

> 说明：今日无新版本 Release，因此"版本发布"部分省略。

### 已合并/关闭的 PR（关键）

| PR | 标题 | 解决的问题 |
|---|---|---|
| [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) | fix(crons): persist enabled state on pause and resume | ✅ 已合并 — 修复 `pause/resume` 状态重启后丢失（对应 #6690） |
| [#6692](https://github.com/agentscope-ai/QwenPaw/pull/6692) | fix: avoid logging conversation command arguments | ✅ 已合并 — 日志不再记录 `/compact` 等命令的原始参数，防敏感信息泄露 |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | fix(scroll): use SystemMsg for compressed memory placeholder | ✅ 已关闭 — 修复压缩后 role=user 占位导致 DeepSeek API 报 400 错误（对应 #6541） |
| [#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) | fix(ci): install Playwright Chromium for the integration suite | ✅ 已合并 — 修复 CI 集成测试7个浏览器用例全平台失败 |
| [#6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) | test(integration): align import-local with #6487 and widen a flaky poll window | ✅ 已合并 — 修复测试确定性与 #6487 源守卫一致 |
| [#6682](https://github.com/agentscope-ai/QwenPaw/pull/6682) | fix(console): sync legacy max_iters when saving iteration limit | ✅ 已合并 — 同步旧字段 `max_iters` 与新 UI 配置 |
| [#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) | fix(timestamp): improve timestamp handling | ✅ 已合并 — 修复 naive UTC 时间戳时区转换（对应 #6301） |
| [#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) | test(integration): fix chrome contract mismatches | ✅ 已合并 — 补全 p-tier 标记，堵住 PR gate 覆盖漏洞 |

### 待合并的重要 PR（值得关注）

| PR | 标题 | 意义 |
|---|---|---|
| [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) | feat: unify project directories and harden file workspace | 🔄 进行中 — 统一项目目录解析，提升文件工作区安全性 |
| [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) | feat(channels): retry transient startup failures | 🔄 进行中 — 新增频道启动重试机制，对应 #6684（Matrix 断连问题） |
| [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) | fix(plugins): isolate bare absolute imports per plugin namespace | 🔄 首提贡献者 — 修复 #6683 插件加载失败 `No module named 'utils.env'` |
| [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) | fix(memory): trigger summarize on auto-compression | 🔄 进行中 — 修复 #6624 自动压缩不触发记忆流程 |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | feat: add reranker support for ReMe memory search | 🔄 进行中 + Under Review — 新增记忆搜索重排序，提升召回质量 |

**总结**：项目在24小时内合并了8个 PR，涵盖 CI 稳定性、权限安全、时间戳处理、配置同步等多个维度。社区贡献者的参与度提升（3个 first-time-contributor PR），且修复型 PR 居多，显示项目正处在"体验打磨、回归收敛"的阶段。

---

## 4. 社区热点

| 排名 | 条目 | 类型 | 评论数 | 主题 |
|---|---|---|---|---|
| 1 | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | Issue (enhan.) | 13 | GPT-5.6 prompt caching 参数支持（`prompt_cache_key` 等） |
| 2 | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | Issue (question, 已关闭) | 12 | Console 通道不渲染安全审批提示 → 被拦截命令静默超时 |
| 3 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Issue (enhan.) | 6 | 任务产出物不应堆积在 media 目录 |
| 4 | [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | Issue (bug) | 5 | DeepSeek 多轮思考模式 `reasoning_content` 缺失 |
| 5 | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | Issue (enhan., 已关闭) | 5 | 拖拽文件应直接读原路径而非上传复制 |

**热点分析**：

- **#6649 (GPT-5.6 prompt caching)** 是今日讨论度最高的 Issue，13条评论。用户希望支持 GPT-5.6 的 prompt cache 参数以降低多轮对话延迟和成本。说明社区对**大模型新特性的跟进速度**有较高预期。
- **#6655 (Console 通道审批不可见)** 引发12条讨论，是一个典型的**安全 UX 缺陷**——在非 Web UI 通道下，高风险命令的审批请求完全不可见，导致 agent 超时。与此同类的 #6695（WeChat 通道同样问题）也已报告。这已形成**跨通道的系统性缺陷**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | Console 通道安全审批不渲染 → 高风险命令静默超时 | 已关闭（问题确认，待修复） |
| 🔴 高 | [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) | WeChat iLink 通道同样无法触达审批对话框，5分钟自动拒绝 | 已关闭，**同类问题跨通道复现** |
| 🟠 中 | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 桌面版注入 `PYTHONHOME` → 所有 python 子进程崩溃（encodings ModuleNotFoundError） | OPEN，无 fix PR |
| 🟠 中 | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 Browser SDK `open()` 始终 WireProtocolError: Target crashed | OPEN，无 fix PR |
| 🟠 中 | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink 一次性 `context_token` 被 typing 指示消耗 → 回复被拒（ret=-2），"working" 卡住 | OPEN，无 fix PR |
| 🟡 低 | [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测错误覆盖文档声明能力为 false | OPEN，无 fix PR |
| 🟡 低 | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | 超大工具输出导致历史会话加载卡死 | OPEN，无 fix PR |
| 🟡 低 | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | cron pause/resume 状态不持久化 | ✅ 已有 #6691 fix PR 并合并 |

**已确认修复**：解决 #6690 的 PR 已合并；解决 #6683 和 #6624 的 PR 也已提交待合并。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 Issue | 对应 PR / 可能性 |
|---|---|---|
| **GPT-5.6 prompt caching 支持** | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 暂无 PR，但评论高热度（13条），可能进入近期规划 |
| **任务产出物按任务分目录** | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 与 #6642（拖拽文件直接读原路径）同一用户提出，两款文件管理体验优化，已被部分采纳（#6642 已关闭） |
| **多模型并行运行** | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | 无对应 PR，属于方向性架构改动，可能较长时间待议 |
| **Volcengine + Xiaomi MiMo 内置 provider** | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 无 PR，新增 provider 类需求通常实现成本较低 |
| **全局规则（类似 .agent/.claude）** | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) | 暂无 PR，但需求明确，用户要求可置顶全局 system prompt |
| **按需加载技能（On-Demand Skill Loading）** | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | 暂无 PR，用户指出27+技能占用25-30% system prompt token，诉求合理 |
| **频道启动重试** | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | ✅ 已有 #6689 PR 待合并 |
| **自动压缩触发 summarize** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | ✅ 已有 #6629 PR 待合并 |

**路线图判断**：文件管理体验（#6643、#6642）是同一用户的集中诉求，且 #6642 已被关闭（可能已纳入实现或内部讨论）；频道相关功能（#6684）在快速推进中；技能按需加载和全局规则是最受期待的新能力，有望在后续版本考虑。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实反馈：

| 反馈类型 | 用户描述 | 来源 |
|---|---|---|
| **痛点：审批不可达** | "在 console 通道下，审批请求没有渲染为终端可读的提示，用户完全看不到有人在等他审批。agent 侧等待 300 秒后超时被拒，整个过程用户无感知。" | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) |
| **使用场景：多模型并行核验** | "我在文件修改、事实核验等场景都需要多个模型分别独立跑……希望一个 agent 同时用多个模型，各自跑一次再汇总结果。" | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) |
| **对插件生态有期待** | "通过 App Center 安装 QwenPaw Creator 失败……插件被下载依赖也装好了，但加载阶段始终失败，报 `No module named 'utils.env'`。" | [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) |
| **免费模型限流困扰** | "免费版 deepseek-v4-flash 频繁 429 限流，导致任务中断。整体体验很好，但限流处理需要改进。" | [#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) |
| **技能数量膨胀的担忧** | "27+ 个技能时，技能描述消耗约 8000-10000 token（约占 system prompt 25-30%），每次请求都在重复消耗。" | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) |
| **目录整洁度诉求** | "任务的产出物全部堆积在 media 目录下，很混乱……希望能按任务新建目录放置。" | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) |

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 天数 | 状态 |
|---|---|---|---|---|
| Issue | [#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) — Playground 多代理 Kanban Board | 2026-06-03 | 63天 | OPEN，评论仅3条，进展缓慢 |
| Issue | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) — 多模型并行跑任务 | 2026-07-24 | 12天 | OPEN，无 PR，多人表达需求 |
| Issue | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) — 新增 Volcengine + Xiaomi MiMo provider | 2026-07-27 | 9天 | OPEN，无 PR |
| Issue | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) — 自动压缩不触发 summarize | 2026-08-01 | 4天 | OPEN，已有 #6629 PR，等待合并 |
| PR | [#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) — macOS 文件白名单机制 | 2026-05-13 | 84天 | Under Review，长期未合并，涉及安全机制，需要审慎评估 |

**提醒**：#4267 已停留 84 天，属于安全相关但长期滞后的 PR，建议维护者给出明确反馈或推动决策。

---

*报告生成时间：2026-08-05 | 数据来源：[github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-05

**数据窗口**：2026-08-04 至 2026-08-05（基于最近更新时间统计）


## 1. 今日速览

ZeroClaw 在过去 24 小时保持极高的社区活跃度：**50 条 Issue 更新**与 **50 条 PR 更新**几乎全部处于活跃讨论或实现推进状态，合并/关闭仅各 2 条，说明项目当前处于密集设计与开发并行阶段。讨论重心集中在 **安全边界加固**（多条 p0/p1 安全 Bug 获 maintainer 受理）、**架构统一**（RFC 系列持续迭代，A2A 协议落地取得实质进展）与 **存量 Bug 修复**（cron 超时、配置回滚、会话迁移等均有对应 PR 在途）。RFC 大版本修（Rev 3/Rev 7）密集出现，显示评审流程正高效运转。项目无明显阻塞，健康度良好，唯需注意**待合并 PR 积压（48 条）**。


## 2. 版本发布

过去 24 小时无新版本发布。当前最新发布版本请参考仓库 Releases 页面：https://github.com/zeroclaw-labs/zeroclaw/releases


## 3. 项目进展

过去 24 小时合并/关闭的 PR 数量较少（2 条），以下为社区讨论中最新出现的关键 PR（均处于合并前最后阶段），以及一个刚关闭的 RFC 设计提案：

- **[RFC #8568 已关闭]** Mixture-of-Agents（MoA）虚拟模型 Provider —— 设计讨论结束，进入实现决策阶段。该方案为多模型并行推理、聚合模型整合结果提供了标准接入路径，对复杂任务场景意义重大。 → https://github.com/zeroclaw-labs/zeroclaw/issues/8568
- **[PR #9757]** 修复 Anthropic Provider 工具结果图片无法送达模型的问题（`tool_result.content` 类型修正 + 多模态预处理增强）。 → https://github.com/zeroclaw-labs/zeroclaw/pull/9757
- **[PR #9754]** Slack 渠道生命周期本地化辅助函数按 feature gate 隔离，消除非 Slack 构建中的编译噪声。 → https://github.com/zeroclaw-labs/zeroclaw/pull/9754
- **[PR #9739]** ZeroCode 多会话窗格（agent 侧边栏 + 快速启动）—— 依赖 #9738 的栈式 PR，展示终端 UI 方向的重要迭代。 → https://github.com/zeroclaw-labs/zeroclaw/pull/9739

整体来看，项目正沿 **A2A 互操作、安全架构收敛、持久化记忆完善、CLI/终端体验打磨** 四条主线稳步推进。


## 4. 社区热点

过去 24 小时讨论热度最高的议题：

| 议题 | 类型 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#8603 RFC: Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC | 16 | 打通 OpenAI Chat Completions 协议，接入 Open WebUI/LobeChat/Continue.dev 等生态工具，显著降低接入门槛 |
| [#7155 高危 shell 命令分级确认](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC | 14 | 引入 allow/ask/deny 三级策略 + Claude Code 风格命令策略，Rev 3 已收窄范围，讨论趋于收敛 |
| [#8303 Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC | 14 | 有界前台任务模式，跨多轮 agent turn 追踪用户目标，工作流自动化关键能力 |
| [#9488 统一附件架构](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC | 13 | 统一 web chat 与各渠道的附件处理，消除 per-channel 重复实现 |

**共性诉求**：社区对 **协议标准化/接入便捷性** 与 **安全策略可控性** 的呼声最为集中。多个高热度 RFC（#8603、#7155、#9488）均落在网关层，目标都是让 ZeroClaw 更易嵌入既有工具链、同时让管理员对 agent 行为有更细粒度的管控。


## 5. Bug 与稳定性

当日活跃 Bug 按严重程度排列：

**🔴 S0 — 数据丢失/安全风险**

| Issue | 描述 | 状态 |
|---|---|---|
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | **网关 webhook 处理器未 fail-closed**（WhatsApp Cloud/Linq/WATI 三个渠道）：未认证调用者可将消息直接注入 agent，且为 p0 级别 | 已受理，in-progress |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | **知识图谱无 per-agent 归属**：任一 agent 可读写其他 agent 的知识，S0 级别 | 已受理（accepted） |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | **session/channel 读写工具缺少所有权隔离**：sessions_list/history/send、discord_search 等可从模型参数接收目标 ID 并直接操作，无归属校验 | 已受理（accepted） |

**🟠 P1 — 功能缺陷/数据一致性问题**

| Issue / PR | 描述 | 状态 |
|---|---|---|
| [PR #9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) | **浏览器截图任意文件写入逃逸**：`path` 参数未做路径校验即可写入 PNG → 已出 fix PR，待合并 | fix PR 待合并 |
| [PR #9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | **Cron 任务无 wall-clock 超时**：挂起的 agent run 永不释放 sqlite 锁 → 已出 fix PR | fix PR 待合并 |
| [PR #9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) | **微信渠道同步游标持久化时序缺陷**：批次入队前即保存游标，崩溃窗口内丢消息 → 已出 fix PR | fix PR 待合并 |

**🟡 其他修复（P2）**：DeepSeek 工具调用解析（[PR #9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723)）、`<tools>` 包裹的调用恢复（[PR #9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477)）、JSONL 会话迁移重试安全（[PR #9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715)）。

**风险提示**：#9565、#9647、#9646 三个安全级 Bug 虽已被受理，但目前仅 #9565 标记为 in-progress，其余两个尚未有对应 fix PR，需持续关注。


## 6. 功能请求与路线图信号

结合当日活跃的 RFC 与 PR，以下方向最有可能进入下一版本：

| 方向 | 依据 | 潜在版本 |
|---|---|---|
| **A2A 出站客户端** | [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) 已实现 4 个 `a2a_*` 工具 + 共享 v1.0 wire model，正在过 review | v0.9.x 可期 |
| **Chat Completions Profile** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) 讨论热度最高（16 评论），OpenAI SDK/LangChain 等客户端兼容是明确需求 | 需 maintainer 决策 |
| **高危命令分级策略（allow/ask/deny）** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Rev 3 已收敛范围，规范合约明确 | 需 maintainer 决策 |
| **统一附件架构** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 配合 #9487 session 所有权边界，处于架构设计后期 | 更远期，跨版本 |
| **Goal mode（有界前台任务）** | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) 有社区 +1，符合多轮任务编排需求 | 待定 |
| **Rust→Wasm 替换 React/Vite** | [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) 意图从构建链彻底移除 Node.js，社区有 +1 | 长期方向，风险高 |

**信号解读**：A2A（#9106）与 Chat Completions profile（#8603）共同指向 **对外互操作性是下一阶段的核心战场**。

另外值得注意：[#9600 Tracker: 会话持久化契约所有权与分层顺序](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) 正在协调四个独立工作流触碰同一契约的归属问题，说明 **会话持久化重构** 正处于关键的架构裁决窗口，可能影响多个后续 PR 的合并顺序。


## 7. 用户反馈摘要

从当日活跃 Issues/PRs 的评论与描述中提炼的真实声音：

- **安全性是第一焦虑点**：多位贡献者（如 #9565 的 JordanTheJet、#9647/9646 的 metalmon）对 webhook 未认证、agent 间数据无隔离提出 S0 级安全报告，措辞强烈（“attacker-controllable”、“any agent can read and mutate another agent's knowledge”），反映社区对 ZeroClaw 用于生产环境的慎重态度。
- **配置变更即时生效是刚需**：[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) 指出“保存配置≠配置生效”，安全策略/渠道变更必须 `/admin/reload` 才能生效，用户期待热更新能力。
- **终端体验细节被关注**：ZeroCode 的多会话窗格（#9739）、transient frame 渲染性能（#9317）、Quickstart 行宽适配（#9399）等 PR 表明 CLI 用户体验正在被认真打磨。
- **模型兼容性成本真实存在**：DeepSeek 的 DSML/`<tool_call|>` 信封、Qwen 的 `<tools>` 包裹、Anthropic 工具图片等问题说明 **多模型支持需要持续投入解析/适配层**。
- **Cron 任务可靠性有明确痛点**：[#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) 建议为 cron 增加前置条件门控（exit 0 → 继续，exit 10 → 跳过，其他 → 失败），说明用户对 cron 的精细化控制有期待。


## 8. 待处理积压

以下为长期未决、需要维护者/作者关注的重要问题：

| 项目 | 类型 | 创建时间 | 当前状态 | 备注 |
|---|---|---|---|---|
| [#6850 内存生命周期策略与存储后端解耦](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC | 2026-05-22 | 10 评论，needs-author-action | 已超 2 个月无实质推进 |
| [#7155 高危 shell 命令分级确认](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC | 2026-06-03 | 14 评论，needs-maintainer-review | 已迭代至 Rev 3，**需维护者拍板** |
| [#7141 可插拔入站认证](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC | 2026-06-03 | 10 评论，Rev 7，in-progress | 长线安全架构项目，需持续跟进 |
| [#7100 per-model 能力与上下文窗口配置](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | RFC | 2026-06-02 | 7 评论，needs-maintainer-review | P1 优先级的重要配置能力 |
| [PR #6622 WhatsApp LID allowlist 测试](https://github.com/zeroclaw-labs/zeroclaw/pull/6622) | PR | 2026-05-13 | 维护者已刷新分支 | 已滞留近 3 个月，建议尽快合入 |
| [#8692 RFC 维护者决策队列](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | 2026-07-04 | 活跃跟踪中 | 建议维护者列出决策时间表 |
| [#9246 ZeroCode 迁移时保留 Todo 配置](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC | 2026-07-21 | 6 评论，in-progress | 与 #9013 关联的迁移路径问题，建议明确验收标准 |


*本报告由 AI 分析师自动生成，数据基于 GitHub 公开信息，统计时间截至 2026-08-05。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*