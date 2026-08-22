# OpenClaw 生态日报 2026-08-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-22 01:17 UTC

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

# OpenClaw 项目动态日报 — 2026-08-22

---

## 1. 今日速览

OpenClaw 项目目前处于**高活跃度、高关注度**状态，过去 24 小时内 Issues 与 PR 各更新 500 条，但其中相当一部分为长期积压问题的持续讨论，而非新问题涌入（新开/活跃 485 条，关闭仅 15 条）。**严重性值得警惕的两个信号**：一是 3 个 P0 级问题（#91588 网关内存泄漏、#126821 SQLite 递归损坏、#125333 totalTokens 膨胀复现）同时在榜；二是 PR 合并/关闭率仅 24.6%（123/500），大量 PR 处于"等待作者"或"等待维护者"的胶着状态。社区讨论热度集中在**消息丢失、会话状态损坏、认证刷新失败**三大类可靠性问题上，这些也是延迟交付的核心症结。**项目健康度评估：活跃但承压**——修复产出在追赶问题报告，但 P0/P1 级别的可靠性问题持续消耗维护者注意力，发布节奏可能因此放缓。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

值得注意的是，`v2026.8.1-beta.2` 的发布验证 Issue（#125626）仍在进行中，且该 beta 版已被多个新报告指出**存在未解决的回归问题**（如 #126821 SQLite 损坏、#125333 totalTokens 膨胀）。**这意味着正式版发布可能被推迟，或需要先发布一个包含相关修复的补丁版本。** 建议关注 #125626 的验证结论。

---

## 3. 项目进展

过去 24 小时合并/关闭的 PR 中，值得关注的推进项包括：

### 🔧 重要合并

- **[PR #126003] fix(plugins): restore shipped channel compatibility** — 恢复了已发布稳定版 Slack、Discord、Signal、Microsoft Teams 包的废弃配置 schema 兼容层，对使用这些通道的生产环境是重要的稳定性修复。[查看 PR](https://github.com/openclaw/openclaw/pull/126003)

- **[PR #127732] fix(mac): keep node service aligned with the latest connection mode** — 修复 macOS 用户在本地/远程 Gateway 模式切换或应用更新后，node 服务可能处于错误模式的问题。[查看 PR](https://github.com/openclaw/openclaw/pull/127732)

### ⏳ 等待合并的高价值 PR

| PR | 解决的问题 | 风险等级 |
|---|---|---|
| [#127469](https://github.com/openclaw/openclaw/pull/127469) | 自动内存上下文尊重 provenance 所有者，避免引入已标记为不可信的内容 | 🚨 安全边界 |
| [#125707](https://github.com/openclaw/openclaw/pull/125707) | 修复 Codex 线程推理 effort 值在生命周期中的准确报告 | 🚨 会话状态 |
| [#125618](https://github.com/openclaw/openclaw/pull/125618) | 恢复非 owner 强制通道上的 `/new` 和 `/reset` 命令权限 | 🚨 安全边界 |
| [#124659](https://github.com/openclaw/openclaw/pull/124659) | 修复托管 Gateway 更新时 supervisor 与 updater 竞争创建继承进程的问题 | 🚨 自动化/可用性 |
| [#112932](https://github.com/openclaw/openclaw/pull/112932) | OAuth 刷新被永久拒绝后，仅从新 Codex 登录重新填充被 tombstone 的目标 | 🚨 认证/会话状态 |
| [#104691](https://github.com/openclaw/openclaw/pull/104691) | 修复 MS Teams 迁移后主动发送失败的兼容性问题 | 🚨 消息投递 |

> ⚠️ **维护者障碍**：上述高价值 PR 大多仍处于 `⏳ waiting on author` 状态，说明维护者已给出审查意见等待作者回应，而非单纯积压。加快这些对话的收尾应成为当前优先事项。

---

## 4. 社区热点

过去 24 小时讨论热度最集中的 Issue 与诉求：

### 🔥 热点 1：网关内存泄漏（#91588，23 条评论，P0）
RSS 从 350MB 增长至 15.5GB，导致 OOM 崩溃和反复重启。这是**当前最严重的可靠性问题**，已持续两个半月未修复，社区耐心在消耗。[查看 Issue](https://github.com/openclaw/openclaw/issues/91588)

### 🔥 热点 2：Codex PreToolUse 钩子 CPU 耗尽（#91009，22 条评论，P1）
钩子进程消耗 100%+ CPU，导致网关 RPC 阻塞。评级为"platinum hermit"，是"已知但难以复现/修复"的高难度问题。[查看 Issue](https://github.com/openclaw/openclaw/issues/91009)

### 🔥 热点 3：Codex 回合超时（#87744，18 条评论，P1）
Telegram 会话中 Codex 回合永远无法到达 `turn/completed`，用户拿不到最终回答。与 #87561 的"最终消息投递语义"问题直接相关。[查看 Issue](https://github.com/openclaw/openclaw/issues/87744)

### 🔥 热点 4：v2026.8.1-beta.2 发布验证（#125626，18 条评论）
发布验证流程本身成为社区关注焦点，侧面反映用户对 beta 质量信心不足。

> **分析**：社区讨论的重心已从功能讨论**全面转向可靠性讨论**——用户不再问"能不能加功能"而是问"什么时候能把稳定性修好"。这一信号值得产品团队认真对待。

---

## 5. Bug 与稳定性

按严重程度排列的今日活跃问题：

### 🔴 P0 — 必须立即处理

| Issue | 描述 | 修复状态 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏，RSS 350MB→15.5GB，OOM 崩溃循环 | ⚠️ 无新 fix PR |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 损坏在重建后 15-24h 内复发，出现"瘫痪网关"模式 | ⚠️ 无 fix PR |
| [#125333](https://github.com/openclaw/openclaw/issues/125333) | totalTokens 膨胀，#123065 的修复只覆盖 `api==="cli"`，内存 flush 路径仍会膨胀 | ⚠️ 无新 fix PR |

### 🟠 P1 — 高优先级

| Issue | 描述 | 修复状态 |
|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse 渲染 CPU-bound 钩子进程，阻塞网关 RPC | ⚠️ 无新 fix PR |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex 回合超时，Telegram 无法收到最终回答 | ⚠️ 无新 fix PR |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理完成消息在超时/drain/orphan 时丢失 | ⚠️ 无新 fix PR |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth 刷新失败导致代理数小时卡死 | ⚠️ 无新 fix PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 钩子/工具子进程泄漏为僵尸进程，导致运行时退化 | ⚠️ 无新 fix PR |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 持久化投递卡在 send_attempt_started，重启后丢失 | ⚠️ 无新 fix PR |
| [#108215](https://github.com/openclaw/openclaw/issues/108215) | 上下文使用率 57% 骤降 13% 无压缩记录（疑似静默丢失） | ⚠️ 无新 fix PR |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker 网关容器重启循环（Sandbox + /mnt 路径） | ⚠️ 无新 fix PR |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | anthropic:claude-cli OAuth 刷新在 2026.5.12 仍阻塞主通道 | ⚠️ 无新 fix PR |
| [#123799](https://github.com/openclaw/openclaw/issues/123799) | Codex compact 404 的生产环境安全升级指南缺失 | ⚠️ 无新 fix PR |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | Playwright CDP 未捕获断言崩溃整个网关 | ⚠️ 无新 fix PR |
| [#127176](https://github.com/openclaw/openclaw/issues/127176) | Windows 上 CLI 与 Node Host 交替设备元数据审批 | 🔧 **有 linked PR** |

### 🟡 P2 — 值得注意的回归

- **#126009 / #125540 相关**：PR #125618 正在修复通道权限回归（Feishu 非 owner 无法执行 `/new`、`/reset`）[PR 链接](https://github.com/openclaw/openclaw/pull/125618)
- **#120735 Telegram 贴纸**：以原始文件引用到达，无描述不落盘，agent 无法查看——已提交 PR [查看](https://github.com/openclaw/openclaw/issues/120735)
- **#97826 视频宽高比**：大视频发送后拉伸（≥16MB）——已有 PR 但需 live repro [查看](https://github.com/openclaw/openclaw/issues/97826)
- **#77930 Discord 通道加载**：2026.5.4 及 beta.2/beta.3 损坏，beta.1 正常——有 PR 修复 [查看](https://github.com/openclaw/openclaw/issues/77930)
- **#95759 ACP session 零字节**：opencode agentId 注册成功但产物为空——需 more info [查看](https://github.com/openclaw/openclaw/issues/95759)

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本

| Issue | 功能 | 信号强度 |
|---|---|---|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 可配置流式 watchdog 超时阈值 | ⭐⭐⭐ 16 评论 8 👍，与长时间推理模型（DeepSeek-R1/kimi）直接相关 |
| [#40982](https://github.com/openclaw/openclaw/issues/40982) | 提高/取消 CLI 3 分钟无输出 watchdog 上限 | ⭐⭐⭐ 有 linked PR，长期争论点 |
| [#88154](https://github.com/openclaw/openclaw/issues/88154) | Slack Modal 交互工作流支持 | ⭐⭐ 7 评论，提升 Slack 原生体验 |
| [#50199](https://github.com/openclaw/openclaw/issues/50199) | Skill 优先级配置 | ⭐⭐ 与多 skill 重叠场景相关 |
| [#87744 关联](https://github.com/openclaw/openclaw/issues/87744) | 持久化任务状态界面（长任务） | ⭐⭐ 8 评论，跨通道通用抽象需求 |

### 值得关注的长线信号

- **语音/实时对话**（#71195）：Mac Talk Mode 增加 OpenAI Realtime 通路，实现与电话插件一致的亚秒级对话体验。这是 Agent 交互范式的下一个前沿。
- **节奏感知限流**（#45771）：内置 API 速率限制感知机制，对自动化 agent 长跑至关重要。
- **优雅网关重启**（#57425）：会话恢复机制，解决重启即杀全部工作的问题。

---

## 7. 用户反馈摘要

### 核心痛点（高频出现）

1. **消息投递中断** — "Agent 回合完成但用户听到的是沉默"（#87561），"Telegram 回复卡在 send_attempt_started"（#126246）。用户对"最终回答永远到不了"的容忍度极低，这是最影响信任的问题。

2. **认证失败的"无声卡死"** — "Codex OAuth 刷新失败卡数小时无清晰告警"（#86215），"claude-cli OAuth 刷新仍未走运行时路径"（#83598）。用户需要**明确的失败状态和自动轮换机制**，而非无限重试。

3. **环境差异导致的隐性失败** — "NVM node 警告无法修复因为 launchd plist 总被重置"（#60612），"Docker 容器重启循环"（#86612）。用户希望 doctor 诊断后能**一键修复**或至少不被重复生成覆盖。

### 值得注意的声音

- **中文社区反馈**：用户对 `/activation mention` 模式切换失效（#50490）和硬编码路径"wangtao"事件（#51429）表达了明显不满，后者暴露出代码审查流程的漏洞。
- **生产环境用户的焦虑**："We are an affected production deployment and need operational guidance"（#123799）——企业用户需要的不只是修复，还有**安全升级路径和操作指导**。
- **对维护流程的期望**：多个 issue 被 auto-claw 标记为 `needs-live-repro` 后长期无人处理（如 #44502、#91009），用户需要看到**更清晰的进展时间线**。

---

## 8. 待处理积压

### 🔴 需要优先响应的长期 Issue

| Issue | 已持续 | 严重度 | 问题 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 74 天 | P0 | 内存泄漏 — 无新 fix PR，需要 live repro 和资源投入 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 154 天 | P2 | 硬编码路径已合并发布 — 暴露审查流程漏洞，用户积怨较深 |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | 162 天 | P1 | Playwright 未捕获异常崩溃 — 已被标记 not-repro，但用户环境可复现 |
| [#58957](https://github.com/openclaw/openclaw/issues/58957) | 143 天 | P2 | 模型切换静默失败（上下文过大时无错误提示） |
| [#69242](https://github.com/openclaw/openclaw/issues/69242) | 124 天 | P2 | exec 命令 SIGKILL 无诊断 — 需要更细致的平台环境信息 |

### ⚠️ 等待作者回应的关键 PR（阻塞合并）

| PR | 影响范围 | 等待时间 |
|---|---|---|
| [#112932](https://github.com/openclaw/openclaw/pull/112932) | OAuth 刷新 tombstone 修复 | 多日等待，涉及多通道认证稳定性 |
| [#124659](https://github.com/openclaw/openclaw/pull/124659) | 托管 Gateway 更新竞态条件 | 多日等待，有 Team 生产事故背景 |
| [#104691](https://github.com/openclaw/openclaw/pull/104691) | MS Teams 主动发送失败 | 多日等待，已标记"已修复但需确认"状态 |
| [#67946](https://github.com/openclaw/openclaw/pull/67946) | 清理子代理 lineage 元数据 | 长期等待，P1 级会话状态修复 |

### 📊 积压趋势判断

**PR 合并效率是当前最大瓶颈**。过去 24 小时 500 条 PR 更新仅 123 条被合并/关闭（24.6%），而 377 条仍待合并。大量 PR 处于 `waiting on author` 状态，意味着**维护者已给出反馈，但作者响应不及时**。解决这一问题需要双向努力：维护者可能需要明确反馈的截止时间，作者需要优先处理被阻塞的高风险 PR。

---

> **日报总结**：OpenClaw 项目处于活跃开发期，但可靠性问题构成了最大的健康度威胁。修复速度和问题增长速度基本持平，而 PR 合并率偏低是即将到来的瓶颈。建议优先处理 3 个 P0 内存/数据完整性问题和 2 个认证刷新问题，这些是用户信心下降的直接原因。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期**：2026-08-22  
**数据窗口**：过去 24 小时  
**分析范围**：14 个核心项目

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**从"功能竞争"转向"可靠性竞争"的关键转折期**。以 OpenClaw 为龙头的头部项目日均处理 500+ 条 Issue/PR，但 P0 级内存泄漏、数据损坏问题持续在榜，社区讨论重心已从"能不能加功能"全面转向"什么时候能把稳定性修好"。与此同时，NanoBot、NanoClaw、ZeroClaw 等中坚力量在记忆系统、多实例支持、安全策略等细分方向快速迭代，生态整体呈现"头部承压、腰部活跃、尾部分化"的格局。值得注意的是，**多项目不约而同地聚焦于会话状态持久化、认证刷新可靠性、异步任务生命周期管理**三大技术难题，这些已成为制约整个生态成熟度的共性瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 | 版本发布 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开 485 / 关闭 15） | 500（合并 123） | 24.6% | 无 | 🟡 活跃但承压 — 3 个 P0 在榜，PR 合并率偏低 |
| **NanoBot** | 5（新开 1 / 关闭 4） | 37（合并 23） | 62.2% | 无 | 🟢 健康 — 修复与功能推进均衡，合并效率高 |
| **Hermes Agent** | 47（活跃） | 48（合并 2） | 4.2% | v0.20.5（8/19） | 🟡 高讨论低合并 — 架构提案密集但落地慢 |
| **PicoClaw** | 1（新开 1） | 3（合并 3） | 100% | 无 | 🟢 稳定 — 存量清理完毕，无新 Bug |
| **NanoClaw** | 1（新开 1） | 24（合并 11） | 45.8% | 无 | 🟢 健康 — CI 管道顺畅，功能面扩张中 |
| **NullClaw** | 0 | 1（待合并 1） | 0% | 无 | 🟢 低频但稳定 — 平台扩展持续 |
| **IronClaw** | ~5（CI 系列） | ~9（合并 5+） | ~55% | 无 | 🟢 高活跃 — CI 重构 + 沙箱安全双线推进 |
| **LobsterAI** | 2（关闭 2） | 13（合并 12） | 92.3% | v2026.8.21 ✅ | 🟢 健康 — 版本发布含 12 条 PR 合入 |
| **TinyClaw** | 0 | 0 | — | 无 | ⚪ 无活动 |
| **Moltis** | 2（新开 2） | 8（合并 1） | 12.5% | 无 | 🟡 修补期 — 多方向修复推进但合并少 |
| **CoPaw** | 34 | 36 | ~30% | 无（beta.1） | 🟡 用户反馈密集 — Bug 报告占比高 |
| **ZeptoClaw** | 0 | 0 | — | 无 | ⚪ 无活动 |
| **ZeroClaw** | 50（新开 49 / 关闭 1） | 50（合并 2） | 4.0% | 无 | 🟡 高流量低合并 — S0/S1 问题持续 |
| **IronClaw** | 已并入上方 | — | — | — | — |

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态的绝对标杆与流量枢纽**，日均 Issue/PR 更新量（500+500）远超第二名 ZeroClaw（50+50）的 10 倍，社区规模遥遥领先。其优势在于：

- **通道覆盖广度**：Slack、Discord、Signal、MS Teams、Telegram、Feishu 等主流平台全支持，且保持向后兼容（见 PR #126003 恢复废弃配置兼容层）。
- **技术路线**：采用「网关（Gateway）+ 节点（Node）+ 代理（Agent）」三层架构，支持本地/远程混合部署，macOS/Windows/Docker 多环境覆盖（PR #127732 修复 mac 连接模式）。
- **AI 能力深度**：率先深度集成 Codex CLI，包括线程推理、OAuth 刷新、PreToolUse 钩子等细粒度控制。

**但痛点同样明显**：3 个 P0（网关内存泄漏 #91588、SQLite 递归损坏 #126821、totalTokens 膨胀 #125333）已持续 74 天以上未修复，PR 合并率仅 24.6%，且多个高价值安全 PR（#127469、#125618）卡在 waiting-on-author 状态。横向对比，NanoBot 的合并率达 62.2%、LobsterAI 达 92.3%，说明头部项目的**维护瓶颈正在侵蚀其技术优势**。当前 OpenClaw 的生态位象征意义大于实际交付效率——它定义了"全能型智能体"的天花板，但也让社区看到了"全能"背后的维护代价。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话状态持久化与恢复** | OpenClaw、NanoBot、CoPaw、ZeroClaw、LobsterAI | 进程退出/重启后会话丢失（ZeroClaw #10121 S0）；SQLite 损坏复发（OpenClaw #126821）；历史库膨胀至 7.6G（CoPaw #7168）；记忆游标不推进（NanoBot #5441） |
| **认证/OAuth 刷新的"无声卡死"** | OpenClaw、CoPaw | Codex OAuth 刷新失败卡数小时无告警（OpenClaw #86215）；claude-cli 刷新阻塞主通道（#83598）；MCP 后端重启后客户端无法自动恢复（CoPaw #6524） |
| **异步任务生命周期管理** | NanoBot、ZeroClaw、Hermes Agent | DingTalk 后台任务无终止观察器（NanoBot #5463）；agent-browser 子进程无界阻塞（ZeroClaw #10210）；macOS 睡眠/唤醒后半开 WebSocket 永久无响应（Hermes #89083） |
| **消息投递可靠性** | OpenClaw、NanoBot、Hermes Agent | 最终回答永远到不了（OpenClaw #87744/#87561）；流式半截回复不重试（NanoBot #5454）；Telegram 卡在 send_attempt_started（#126246） |
| **流式响应与超时 watchdog 可配置化** | OpenClaw、ZeroClaw | 长时间推理模型（DeepSeek-R1/kimi）触发 watchdog（OpenClaw #68596）；stream_mode 默认 partial（ZeroClaw #10166） |
| **安全边界与权限一致性** | ZeroClaw、OpenClaw、NanoClaw | 独立 delegate 绕过高风险命令拦截（ZeroClaw #10165 S0）；`send_card` 按钮被桥接层静默丢弃（NanoClaw #3426）；非 owner 通道权限回归（OpenClaw #125618） |
| **多实例/多机器人支持** | NanoClaw、Hermes Agent | Telegram 多实例 + 向导配置（NanoClaw #3436-#3438）；多 profile 舰队部署（Hermes #91260） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
|---|---|---|---|
| **OpenClaw** | 全能型个人助手，全渠道覆盖 + Codex 深度集成 | 个人/企业生产环境，多通道重度用户 | 网关-节点-代理三层，支持本地/远程混合 |
| **Hermes Agent** | 多平台对齐 + 桌面端体验 + 部署可靠性 | 桌面重度用户、多 profile 舰队部署 | 强调架构收敛（proof-carrying 状态、事务化部署） |
| **NanoBot** | 记忆系统（Dream）+ 技能生态 + WebUI 可观测性 | 开发者、知识管理场景 | Python 为主，cron + 记忆游标机制 |
| **NanoClaw** | 通道集成（Mattermost/Matrix/WhatsApp）+ 聊天内创建 Agent | 团队协作、多业务线隔离需求 | TypeScript 为主，registerChannelAdapter 模式 |
| **ZeroClaw** | 安全优先 + SOP 引擎 + 多运行时 | 企业级安全敏感场景 | Rust（ZeroRelay / ZeroRouter），策略围栏 + 世代身份 |
| **IronClaw** | CI 基建 + 沙箱安全 + Rust 生态 | Rust 开发者、自动化运维 | Rust（nearai），CI expedite 系列 + gh 凭证中介 |
| **LobsterAI** | 本地产物管理 + DSH 实验运行时 + Windows 集成 | 个人知识工作者（网易有道背景） | Electron 架构，Library 模块 + DSH 可观测性 |
| **CoPaw（QwenPaw）** | 自托管多用户 Hub + MCP 生态 + 任务审批 | 团队协作、MCP 重度用户 | 2.x 版本，console + hub + mailbox 模块 |
| **Moltis** | 渠道集成（WhatsApp/Slack）+ 定时任务 + 浏览器工具链 | 渠道自动化、微调运维 | TypeScript，Obscura sidecar + 渠道适配层 |
| **PicoClaw** | 轻量级工具增强 + Anthropic 原生协议 | 嵌入式/低资源环境 | Go，极简依赖 |
| **NullClaw** | OpenAI 兼容网关聚合（多上游路由） | 多供应商接入、数据主权关注者 | 统一适配层 + 零侵入扩展 |

---

## 6. 社区热度与成熟度分层

### 第一梯队：高流量、高关注、承压运行（快速迭代但维护瓶颈显现）
- **OpenClaw**：日更新 1000+ 条，但 P0 积压 + 合并率 24.6%，处于"规模红利"与"维护危机"的临界点
- **Hermes Agent**：日更新 100 条，架构讨论深度高但合并率仅 4.2%，"讨论热、落地慢"
- **ZeroClaw**：日更新 100 条，S0/S1 问题持续，合并率 4.0%，安全场景压力大

### 第二梯队：中高活跃、合并效率良好（质量巩固 + 功能拓展期）
- **NanoBot**：合并率 62.2%，记忆系统精修，社区满意度高
- **NanoClaw**：合并率 45.8%，功能面快速扩张，CI 稳定
- **IronClaw**：合并率约 55%，CI 重构 + 沙箱安全双线推进，管理效率高
- **LobsterAI**：合并率 92.3%，版本节奏稳定，技术债清理与产品化打磨并重
- **CoPaw**：用户反馈密集但 Bug 占比高，处于 2.1 版本稳定性爬坡期

### 第三梯队：低频但稳定（功能补全 / 存量清理期）
- **PicoClaw**：集中清理 5-6 个月存量 PR，无新 Bug，逐步进入维护模式
- **Moltis**：多方向修复推进，但合并节奏偏慢（12.5%），活跃度中低
- **NullClaw**：单 PR 提交，网关生态逐步扩展，社区互动少

### 第四梯队：休眠
- **TinyClaw**、**ZeptoClaw**：24h 无任何活动

---

## 7. 值得关注的趋势信号

### 信号一：可靠性已成为生态的"第一公民"
从 OpenClaw 的 3 个 P0、ZeroClaw 的 S0 级安全绕过，到 NanoBot 对记忆游标的精修、Hermes 的"假成功"缺陷分类提案，**多项目已将"可证明的状态"和"类型化完成证明"视为下一阶段的核心设计原则**（见 Hermes #90049、#90866）。对开发者的启示：**会话持久化、消息确认、认证状态机**应作为基础设施而非可选功能来设计。

### 信号二：认证/OAuth 的"无声失败"是最大的信任杀手
OpenClaw、CoPaw、Moltis 多个项目同时遭遇认证刷新失败后无告警、无自动恢复的痛点。用户对"卡死数小时无清晰提示"的容忍度极低。**开发者应优先实现：明确的失败状态展示、自动凭证轮换、以及 tombstone 机制**（OpenClaw PR #112932 提供了参考实现）。

### 信号三：异步任务的一生需要被"观察和排空"
NanoBot 的 DingTalk 后台任务泄漏、ZeroClaw 的子进程无界阻塞、Hermes 的 WebSocket 半开——**异步任务的创建、观察、排空、错误恢复正在成为新的技术债重灾区**。建议参考 Hermes 的"任务完成验证"提案（#91230）和 NanoBot 的"回合级可观测性"（#5420）来设计任务生命周期。

### 信号四：从"单机工具"走向"多实例/舰队部署"
NanoClaw 的 Telegram 多实例（#3436）、Hermes 的多 profile 舰队（#91260）、CoPaw 的自托管多用户 Hub（#7112），共同指向一个明确趋势：**AI 智能体正在从个人玩具演进为团队基础设施**。对开发者而言，"配置即代码"、"模板化创建"、"配额与权限隔离"将成为标配能力。

### 信号五：安全策略的"双向一致性"需求
ZeroClaw 的 S0 绕过（配置拦截却可绕过）与硬拦截（配置放行却被拦截）形成鲜明对比，这暴露了权限系统"行为与直觉相悖"的深层问题。OpenClaw 的"非 owner 通道权限回归"（#125618）同样属于此类。**权限策略的评估路径必须统一、可审计、可预测**。

### 信号六：UI/UX 的"减少干扰"运动
CoPaw 用户要求折叠推理过程、关闭工具调用显示；OpenClaw 社区要求"最终回答必须到达"；NanoBot 用户期望"无需全局重配置即可切换模型"。**用户的注意力正在成为稀缺资源**——智能体的输出应该更克制、更聚焦于结果，而非过程。

---

**总结**：AI 智能体开源生态正在经历从"功能军备竞赛"到"可靠性大考"的范式转换。头部项目通过规模定义了市场，但维护效率决定了谁能走得更远。对于技术决策者，建议重点关注：**会话持久化、认证状态机、任务生命周期管理**三大基础设施的选型；对于开发者，**"可证明的状态"与"类型化完成"** 将是未来 2-3 个版本的核心设计语言。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-08-22** | **数据源：HKUDS/nanobot GitHub 仓库**


## 1. 今日速览

NanoBot 项目今日保持**中高活跃度**：过去 24 小时共有 5 条 Issue 更新（4 条关闭、1 条新开）和 37 条 PR 更新（23 条合并/关闭、14 条待合并）。值得注意的是，**今日无新版本发布**，但合并的 PR 涵盖了从无头浏览器自动回复、Trajectory 记忆审计到 PWA 修复等多个领域，项目正围绕"记忆可靠性 + 渠道健壮性 + 前端体验"三条主线稳步推进。社区讨论热度主要集中在模型切换灵活性（#5198）和 DingTalk 后台任务管理（#5463）上，前者已关闭、后者仍待响应。整体健康度良好，但需关注积压的 14 条待合并 PR 的推进节奏。


## 2. 版本发布

今日无新版本发布。


## 3. 项目进展

今日共 23 条 PR 被合并/关闭，覆盖功能开发、Bug 修复与代码清理。以下是关键合并的 PR 及其意义：

### 核心功能推进

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#5407](https://github.com/HKUDS/nanobot/pull/5407) | fix(cron): retire persisted heartbeat/dream system jobs when disabled | 已合并 | **修复关键回归**：此前在 `gateway.heartbeat.enabled` 或 `agents.defaults.dream.enabled` 设为 `false` 后，已持久化的系统定时任务仍会继续执行并消耗 token。此 PR 确保禁用后任务被正确回收，避免资源浪费 |
| [#5442](https://github.com/HKUDS/nanobot/pull/5442) | fix(dream): advance cursor when tool errors were recovered, and report why a run did not complete | 已合并 | **修复 Issue #5441**：此前 Dream 运行中只要出现工具错误（即便模型已自行纠正），整个运行仍被判定为"未完成"，导致记忆游标不推进、后续运行重复处理同一批次。现改为：已恢复的错误不再阻塞游标推进，并新增运行未完成原因报告 |
| [#5474](https://github.com/HKUDS/nanobot/pull/5474) | feat(providers): support DeepSeek V4 Flash Vision | 已合并 | **新模型接入**：注册 `deepseek-v4-flash-vision-exp` 模型，支持 Responses API 路由及多模态内容处理，同时保持文本模型字符串强转的兼容性 |
| [#5476](https://github.com/HKUDS/nanobot/pull/5476) | feat(tui): render LaTeX as Unicode | 已合并 | **体验优化**：TUI 界面将常见 LaTeX 数学公式渲染为 Unicode 纯文本，支持流式、已整合及历史回复中的行内和展示分隔符 |
| [#5414](https://github.com/HKUDS/nanobot/pull/5414) | fix(slack): validate file downloads across redirects | 已合并 | **安全加固**：Slack 私有文件下载链接可能被重定向到恶意地址。此 PR 在完整重定向链上执行 URL 验证，并保持 DNS 解析与验证结果一致 |
| [#5477](https://github.com/HKUDS/nanobot/pull/5477) | fix(webui): keep iOS PWA controls inside safe area | 已合并 | **PWA 修复**：恢复 `viewport-fit=auto` 确保 iOS 安装后的 PWA 控件不被刘海屏/圆角遮挡，同时同步主题色与明暗模式 |

### 回溯合并的 PR

以下 PR 创建较早但于今日关闭，可能为合并或放弃，值得关注：

- [#1149](https://github.com/HKUDS/nanobot/pull/1149) — feat(safety): Add PromptGuard for prompt injection detection（2月25日创建）
- [#1592](https://github.com/HKUDS/nanobot/pull/1592) — feat: finalize Lumina Windows app + local stack installer flow（3月6日创建）
- [#2063](https://github.com/HKUDS/nanobot/pull/2063) — feat: add Tauri desktop app with PyInstaller sidecar（3月15日创建）
- [#1539](https://github.com/HKUDS/nanobot/pull/1539) — Add CrowPay skill — payment service for AI agents（3月5日创建）

这些 PR 从创建到关闭跨越近半年，其中包含 PromptGuard 安全模块、桌面应用支持、支付 skill 等功能。其最终关闭是合入主分支还是被放弃，需查看具体关闭原因。若已合并，则项目的功能边界已显著扩张。

### 整体评估

项目在记忆系统、渠道安全和模型接入三个维度均有实质推进。尤其是 #5442 对 Dream 记忆游标的修复和 #5407 对定时任务回收的修复，直接改善了系统在长时间运行下的可靠性和资源使用效率。


## 4. 社区热点

今日讨论最活跃的 Issue 为 **#5198（4条评论）**，其余 Issue 评论数均在 2 条以内。PR 方面无评论数异常突出的条目，讨论热度相对分散。

### ⭐ [Issue #5198：Not possible to change models in a specific session unless reconfiguring the entire instance](https://github.com/HKUDS/nanobot/issues/5198)（已关闭，4 条评论）

**核心诉求**：用户指出 NanoBot 始终将某个模型作为首选，其他模型仅作为 fallback 使用。聊天输入框附近的模型标识点击后**无法切换模型**（不同于云端 SaaS AI 的 UI），`/model` 命令配合其他模型 ID 使用时似乎也不生效——用户不得不在整个实例层面重新配置才能更换模型。

**背后分析**：这反映了用户对"会话级模型动态切换"的强烈需求。无论是测试不同模型效果，还是根据任务类型灵活选择模型，都属于 AI 聊天工具的高频使用场景。该 Issue 已关闭，可能已在某个 PR 或后续版本中解决，建议关注关闭时的关联提交。

### ⭐ [Issue #5463：DingTalk does not observe or drain inbound background tasks](https://github.com/HKUDS/nanobot/issues/5463)（新开，0 条评论）

**核心诉求**：DingTalk 流处理器将通过 `asyncio.create_task()` 将每个入站消息转发为后台任务，但任务生命周期**没有终止观察器**——```task.add_done_callback()``` 名为添加，但缺少实际的回调处理逻辑（报告未完整展示，但从标题判断）。这可能导致后台任务堆积、无法清理，影响系统稳定性。

**背后分析**：这是对渠道层异步任务管理的技术债修复请求，虽然当前无评论，但属于典型的稳定性隐患，值得维护者优先关注。


## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

### 🔴 P1 - 潜在系统性风险

**无**

### 🟡 P2 - 功能异常/回归

| 编号 | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#5441](https://github.com/HKUDS/nanobot/issues/5441) | Dream 运行中单个工具错误（如重试的 edit_file）永久阻塞记忆游标 | 已关闭 | ✅ 已合并 [#5442](https://github.com/HKUDS/nanobot/pull/5442) |
| [#5454](https://github.com/HKUDS/nanobot/issues/5454) | 流式提供商：一旦内容已流出，中途 `server_error` 不会触发重试 | 已关闭 | ✅ 已合并（具体 PR 需确认） |
| [#5463](https://github.com/HKUDS/nanobot/issues/5463) | DingTalk 不观察/不排空入站后台任务 | 新开 | ❌ 暂无 |

### 🟢 P3 - 配置/体验问题

| 编号 | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 无法在特定会话中切换模型，除非重新配置整个实例 | 已关闭 | 待确认 |
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Nanobot 连接 Notion MCP 失败 | 已关闭 | 待确认 |

**总结**：今日报告的主要 Bug 均已关闭（#5441、#5454），其中 #5441 有明确的修复 PR 并已合并。新开的 #5463 是当前最需关注的点——该问题涉及异步任务泄漏，长时间运行可能导致内存增长或消息丢失，建议尽快指派维护者响应。


## 6. 功能请求与路线图信号

### 从 Issues 中识别的新需求

| 需求 | 来源 Issue | 潜在价值 |
|---|---|---|
| **会话级模型动态切换** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 类似 Claude/ChatGPT 的 UI，用户可在聊天中随时切换模型，无需全局重配置。若已解决，建议在 Release Notes 中明确提及 |
| **DingTalk 后台任务生命周期管理** | [#5463](https://github.com/HKUDS/nanobot/issues/5463) | 渠道层异步任务的观察、排空与错误处理，属稳定性基建 |

### 从 PR 中识别的路线图信号

以下 PR 仍在开放状态，暗示了项目的下一步方向：

| PR | 功能 | 状态 | 推测价值 |
|---|---|---|---|
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | **支持仅手动调用的技能**（`disable-model-invocation: true`） | 开放 | 部署/发布类副作用技能需人工确认，不再由模型自动触发，提升安全性 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | **集成 MST 元搜索提供商**（Multi-Search Tool） | 开放 | 聚合 DuckDuckGo、Google、Brave、Bing 等多引擎结果，RRF 算法融合排序，比单一搜索覆盖率更高 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | **回合级可观测性与安全恢复**（WebUI） | 开放 | 将每轮对话映射为独立答案面，累积提供商用量统计，展示中断任务 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | **保留完整记忆整合输入** | 开放 | 确保 `history.jsonl` 的原始回退内容在整合过程中不丢失，避免记忆截断 |
| [#5457](https://github.com/HKUDS/nanobot/pull/5457) | **调度器异常边界收窄至消息处理** | 开放 | 防止单条出站消息异常导致整个 `_dispatch_outbound` 任务停止，避免邮件持续积压 |
| [#5478](https://github.com/HKUDS/nanobot/pull/5478) / [#5480](https://github.com/HKUDS/nanobot/pull/5480) / [#5481](https://github.com/HKUDS/nanobot/pull/5481) | **类型化 LLM 用量契约 + 统一提供商用量后端** | 多个 PR 已关闭，[#5480](https://github.com/HKUDS/nanobot/pull/5480)、[#5481](https://github.com/HKUDS/nanobot/pull/5481) 仍开放 | 将动态 usage 字典替换为不可变类型化契约，标准化 token 与缓存语义，为 WebUI 用量展示打基础 |

**判断**：从 PR 堆叠关系（多个 PR "stacked on" 上一个 PR）来看，项目正在推进一次**提供商抽象层重构**（#5480 → #5481），目标是为 WebUI 的用量展示与轨迹记录提供统一数据后端。同时，#5405 的技能手动调用模式与 #5234 的元搜索提供商，都指向"更可控、更安全、更全面"的产品演进方向，**下一版本有望纳入这些能力**。


## 7. 用户反馈摘要

### 正面反馈

- **#5441（Dream 记忆游标问题）**：该 Issue 虽为 Bug 报告，但用户 flobo3 在描述中展现了**对 Dream 功能的深入使用和精细观察**——他们清楚描述了 `memory/.dream_cursor` 的行为、cron job 的周期性处理方式，以及重复编辑导致的副作用。这反映了 Dream 记忆功能已被真实用户深度采用，并且用户在意其正确性。

### 痛点与诉求

| 用户 | 来源 | 痛点描述 |
|---|---|---|
| whisperity | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | **模型切换灵活性不足**——用户期望像云端 SaaS 一样在会话内自由切换模型，而当前必须全局重配置，体验割裂 |
| silence-breaker | [#1168](https://github.com/HKUDS/nanobot/issues/1168) | **Notion MCP 连接困难**——多次核查 API 配置仍无法连接，但 Claude 端可正常登录，说明 MCP 兼容性或配置引导存在问题 |
| akinolur | [#5454](https://github.com/HKUDS/nanobot/issues/5454) | **流式回退不彻底**——当内容已开始输出后遇到 `server_error`，系统不会重试，导致半截回复直接展示给用户 |

### 使用场景推断

- **#1168** 中连接 Notion MCP 的需求，表明用户正在将 NanoBot 用于**知识库交互/文档管理**场景。
- **#1539（CrowPay skill）** 虽为 PR 而非 Issue，但其存在暗示开发者对**自主支付/API 调用**场景有兴趣。


## 8. 待处理积压

以下为长期未响应或仍停留在开放状态的重要 PR/Issue，建议维护者关注：

### 🔴 需立即关注

| 编号 | 标题 | 创建时间 | 状态 | 说明 |
|---|---|---|---|---|
| [#5463](https://github.com/HKUDS/nanobot/issues/5463) | DingTalk does not observe or drain inbound background tasks | 08-21 | 开放，0 评论 | 新开且涉及异步任务泄漏风险，建议尽快指派 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(webui): add turn observability and safe recovery | 08-18 | 开放，标记 `[conflict]` | 存在合并冲突，若不及时解决可能进一步过时 |

### 🟡 长期开放的 PR（超过 5 天）

| 编号 | 标题 | 创建时间 | 状态 | 说明 |
|---|---|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent): integrate mst-python as a metasearch provider | 08-03 | 开放，19 天 | 功能型 PR，价值较高，建议安排代码审查 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | fix(memory): preserve full consolidation input | 08-13 | 开放，9 天 | 记忆完整性修复，与 #5441 同属记忆模块，建议优先合并 |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | feat(skills): support manual-only invocation | 08-16 | 开放，6 天 | 安全相关功能，等待评论 |

### 🟢 历史遗留（可选关注）

| 编号 | 标题 | 创建时间 | 说明 |
|---|---|---|---|
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Nanobot 连接 Notion MCP 失败 | 02-25 | 已关闭，但若关闭原因为"无法修复"，建议记录已知限制 |
| 更多历史 PR | [#1149](https://github.com/HKUDS/nanobot/pull/1149)（PromptGuard）等 | 02-03月 | 已关闭但未确认合入分支，建议核对 |

---

**项目健康度总结**：NanoBot 今日在 Bug 修复与功能推进上表现均衡，记忆系统（#5441/#5442）、资源回收（#5407）和渠道安全（#5414）均获实质改进。开放中的 PR 数量（14 条）属正常水平，但 #5420 的冲突需尽快解决，以避免有价值的 PR 因滞后而失效。整体来看，项目正处于积极迭代期，建议维持当前节奏并关注渠道层异步任务管理的技术债。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-22

**数据区间**：2026-08-21 ~ 2026-08-22（基于 2026-08-22 数据快照）


## 1. 今日速览

Hermes Agent 过去 24 小时保持**高活跃度**，共产生 100 条 Issue/PR 动态，其中新增/活跃 Issue 47 条、PR 48 条待合并，另有 1 个新 tag（v0.20.5）落地。值得关注的是，项目已迈入"**架构收敛期**"：由 @andrexibiza 主导的一批系统性架构议题（#90866 可观察状态 proof-carrying、#88683 事务化部署计划、#90049 假成功缺陷分类、#90145 世代身份围栏等）正在集中讨论，形成了一套贯穿 agent、gateway、desktop、sessions 的"**可靠性工程纲领**"。与此同时，Windows 平台更新链路（#91675、PR #84409、PR #91956）与 Gemini 标题生成缺陷（#91927、PR #91957）是今日修复热点，发布节奏稳定。

> **活跃度评级**：★★★★☆（高）— 议题讨论深度显著提升，架构级提案占比高，但合并/关闭数量偏低（PR 合并 2 条），存在"讨论热、落地慢"的迹象。


## 2. 版本发布

### v2026.8.19 — Hermes Agent v0.20.5（2026-08-19 发布）

- **性质**：Patch release，将 v0.20.4 以来约 **323 个 PR** 汇总为稳定 tag，供 Docker 镜像、托管部署及新安装使用。
- **内容**：涵盖 agent core、gateway、desktop、CLI、sessions/compression、Windows 更新链路等跨模块修复与功能累积。
- **破坏性变更**：无明确 breaking changes 记录。
- **迁移注意**：常规升级路径即可，无特殊步骤要求。

> 该 tag 紧跟 #84185 的 6 秒存活探测修复后发布，为下游用户提供了包含该修复的稳定基线（见 #91675 复现基于 v0.20.5）。


## 3. 项目进展 — 今日合并/关闭的重要 PR

今日仅 **2 条 PR 合并/关闭**，吞吐量偏低，但以下 2 条具有代表性：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#59934](https://github.com/NousResearch/hermes-agent/pull/59934) | fix(agent): honor NO_PROXY CIDR ranges | 已关闭（标记 duplicate） | 代理解析支持 CIDR 范围匹配；被标记为重复，相关修复可能已由其他 PR 覆盖 |
| [#88757](https://github.com/NousResearch/hermes-agent/pull/88757) | feat(desktop): git history review — graph, markers, ref filter, SCM rail grouping, worktree switcher | 已关闭（invalid） | 桌面端 git 历史审查界面（含提交图、引用过滤、worktree 切换器），被标记 invalid，可能因范围过大或与现有实现冲突 |

**项目整体推进评估**：
- 今日以 **架构讨论与 PR 提交** 为主，落地合并节奏偏慢。48 条待合并 PR 中，包含 #85644（webhook 多目标分发）、#84409（Windows schtasks 逃避父作业对象）等值入关键路径的修复。
- 在 **Windows 更新可靠性** 方向，PR #91956（为每个 profile 刷新网关启动器）与 #84409 形成互补，配合 #91675 的复现报告，该问题正在被系统性解决。
- **Gemini 标题生成缺陷** 已从 Issue 快速推进到 PR #91957（禁用 thinking tokens），响应周期 < 24 小时，效率较高。

> 注：今日无新版本发布（v0.20.5 为 8 月 19 日发布的数据，纳入本日报作为近期版本动态参考）。


## 4. 社区热点 — 高讨论度议题

| 排名 | Issue/PR | 评论数 | 主题 | 诉求分析 |
|---|---|---|---|---|
| 1 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647)（已关闭） | 78 | 大型文件分解 20/20 完成（god-file sharding epic） | 持续近 3 周的仓库级 god-file 分片工程收官，确立"**所有 god files 必须分片，禁止回退**"为常设政策。评论区反映了社区对代码可维护性的高关注 |
| 2 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 72 | Skills 索引陈旧（29.8h 超出 26h 限制） | 自动化探针持续告警，已挂起 35 天。社区对文档站点与技能索引的**及时性**有明确预期 |
| 3 | [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | 9 | **Discord 功能对齐战役**（API v10 / discord.py 2.7.1）— meta-issue | 系统性对齐 Discord 官方 API 的战役主议题，含子议题与 PR 导航。反映社区对**平台功能完整性**的持续诉求 |
| 4 | [#79890](https://github.com/NousResearch/hermes-agent/issues/79890) | 8 | **WhatsApp 功能对齐战役** — meta-issue | 与 Discord 战役同构，覆盖 whatsapp-web.js / Baileys / Business API 三种桥接。平台对齐已成为社区关注的固定主题 |
| 5 | [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | 7 | **Fleet 更新可靠性** — 单一部署计划（本地/多 profile/远程/镜像） | P1 优先级。社区共识：**安装/更新是最不可靠的能力**，约 30 个 Issue + 15 个 PR 各自修补同一类问题的不同角落，需要统一方案 |

**热点共性**：讨论集中在（1）**架构级可靠性**（部署计划、proof-carrying 状态），（2）**平台对齐战役**（Discord/WhatsApp/Slack 三大 meta-issue 合计 23 条评论），以及（3）**技能索引/文档新鲜度**。社区对"系统性问题需要系统性解决"的呼声明确。


## 5. Bug 与稳定性

### P1 - 严重

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | [Tracking] Fleet 更新可靠性 — 安装/更新是最不可靠能力（约 30 个 Issue + 15 个 PR） | 开放（P1） | 无单一修复，需架构级方案（见 #88683） |

### P2 - 中等

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#91675](https://github.com/NousResearch/hermes-agent/issues/91675) | **Windows**: 网关启动打印 ✓ 后 6 秒探测仍死亡；更新后冷启动只恢复活动 profile | 开放 | 关联 [#84409](https://github.com/NousResearch/hermes-agent/pull/84409)（schtasks 逃逸父作业）、[#91956](https://github.com/NousResearch/hermes-agent/pull/91956)（刷新每个 profile 的启动器） |
| [#91927](https://github.com/NousResearch/hermes-agent/issues/91927) | **Gemini** 会话标题生成因 thinking tokens 耗尽 max_tokens 预算而损坏 | 开放 | [#91957](https://github.com/NousResearch/hermes-agent/pull/91957)（禁用默认 thinking tokens） |
| [#89083](https://github.com/NousResearch/hermes-agent/issues/89083) | **桌面端**: macOS 睡眠/唤醒后半开 WebSocket 永久无响应 | 开放 | 暂无 |
| [#91684](https://github.com/NousResearch/hermes-agent/issues/91684) | **桌面端审批** 路由到非拥有网关时返回 4001 "session not found" | 开放 | 暂无 |
| [#88453](https://github.com/NousResearch/hermes-agent/issues/88453) | 安装/更新 E2E 仍失败 — npm TLS 握手高并发下被丢弃 | 开放 | 部分修复已合入（#88420），剩余失败待跟踪 |

### P3 - 低

| Issue | 标题 | 状态 |
|---|---|---|
| [#88758](https://github.com/NousResearch/hermes-agent/issues/88758) | compression: 保留原始持久化水位线（重放清理与交替修复） | 开放 |
| [#88740](https://github.com/NousResearch/hermes-agent/issues/88740) | compression: 跨 child/CLI/ACP 恢复保留持久化 row-ID 水位线 | 开放 |
| [#90200](https://github.com/NousResearch/hermes-agent/issues/90200) | **GitHub 自动化权限分裂**：metadata 写入成功但仓库对象写入 403 | 开放 |
| [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) | **安全**: 工具结果→提供商出口路径缺少精确值密钥脱敏 | 开放 |

**趋势判断**：Windows 更新链路是当前最集中的 Bug 簇（#91675 + #88453 + PR #84409/#91956/#920xx），且有活跃修复 PR 在推进；macOS 桌面端 WebSocket 半开问题（#89083）尚无人认领，建议优先关注。


## 6. 功能请求与路线图信号

### 已进入 PR 阶段（可能纳入下一版本）

| PR | 功能 | 说明 |
|---|---|---|
| [#91957](https://github.com/NousResearch/hermes-agent/pull/91957) | 为 Gemini 辅助标题生成禁用默认 thinking tokens | 直接修复 #91927，预计快速合入 |
| [#91963](https://github.com/NousResearch/hermes-agent/pull/91963) | 委托任务暴露持久化子代理归属 ID | 增强可观测性与审计能力 |
| [#91838](https://github.com/NousResearch/hermes-agent/pull/91838) | 自适应 WhatsApp 路由（快速通道 + DIRECT/AGENTIC 路由） | 面向低延迟场景的新能力 |
| [#90964](https://github.com/NousResearch/hermes-agent/pull/90964) | Discord 可配置富状态活动 | 提升 Discord 表面用户体验 |

### 架构级提案（需长期关注，有纳入路线图可能）

| Issue | 提案 | 信号强度 |
|---|---|---|
| [#90866](https://github.com/NousResearch/hermes-agent/issues/90866) | **可观察状态 proof-carrying**（从源头到副作用全程携带证明） | 高 — 由 @andrexibiza 主导，延续此前多个修复的收敛方向 |
| [#88683](https://github.com/NousResearch/hermes-agent/issues/88683) | **事务化部署计划**：安装/更新/引导遵循单一部署计划 | 高 — 直接回应 #91277 社区痛点 |
| [#90049](https://github.com/NousResearch/hermes-agent/issues/90049) | **假成功（false success）作为一等缺陷类**，引入类型化完成证明 | 中高 — 跨系统的设计模式统一 |
| [#90145](https://github.com/NousResearch/hermes-agent/issues/90145) | **恢复/拆除由持久化世代身份围栏保护** | 中高 — 同一架构收敛方向 |
| [#91230](https://github.com/NousResearch/hermes-agent/issues/91230) | **任务完成验证**作为 Hermes 第六法则（精确对象完成） | 中 — 延续"五法则"系列 |

### 平台对齐战役（三大 meta-issue）

| Meta-Issue | 平台 | 状态 |
|---|---|---|
| [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | Discord（API v10 / discord.py 2.7.1） | 活跃 |
| [#79890](https://github.com/NousResearch/hermes-agent/issues/79890) | WhatsApp（Business Cloud API + Baileys） | 活跃 |
| [#79772](https://github.com/NousResearch/hermes-agent/issues/79772) | Slack（Feature Parity & @Hermes Tag） | 活跃 |

**路线图信号总结**：项目正从"逐个修 Bug"转向"**统一架构原则**"阶段 — 多个提案共享同一内核：**状态必须可证明、权威必须单一、副作用必须匹配证明范围**。若这些提案进入实施，将在未来 2-3 个版本内显著提升系统可靠性。


## 7. 用户反馈摘要

### 真实痛点

1. **Windows 更新链路脆弱**（#91675）：用户 jrleal10 报告网关启动打印 ✓ 后仍死亡，且更新后仅恢复活动 profile。"每次更新都是一次冒险"已成为 Windows 用户的普遍体验。

2. **macOS 睡眠/唤醒后桌面端永久无响应**（#89083）：用户 lusc0529-collab 提到唯一恢复方式是开新窗口或重启应用。**该问题已开放 4 天且无认领者**，建议维护者优先关注。

3. **安装/更新整体不可靠**（#91277）：teknium1 在跟踪议题中直言"**安装/更新是我们最不可靠的能力**"，约 30 个 Issue 和 15 个 PR 各自修补同一问题的不同角落，缺乏统一方案。

4. **Gemini 标题生成损坏**（#91927）：用户 vorburger 描述标题变成 ```` ```json ```` 这样的未解析 markdown 残留，影响会话管理体验。已进入 PR 阶段，预计快速修复。

5. **WhatsApp 文档链接指向错误桥接**（#87041）：用户 uni5592427 指出桌面端"Open setup guide"链接指向 whatsmeow（Go），但实际桥接是 Node/Baileys。文档与实现不一致导致误导。

### 使用场景洞察

- **多 profile / 多机器人舰队部署**成为热门场景：用户 ShizkMoon 在 #91260 中描述了一个多 profile 舰队（一个带 IM 网关，其他为领域 worker，桌面 profile 禁用 terminal/browser/computer_use），发现当前 IM 入口无法驱动真实的"跨 profile 多机器人流水线"。
- **低延迟 WhatsApp 路由诉求**（PR #91838）：GASJW 的"快速通道"设计（使用 gemini-3.1-flash-lite 单次调用处理 DIRECT 路由）反映出用户对 IM 场景响应速度的期待。

### 满意点

- 大型文件分解 epic（#78647）以 20/20 完成收官，社区对此表示认可。
- 对 PR #91972（区分 I/O 错误与认证失败）的快速响应（Issue #91656 → PR 当日提交）获得好评，说明维护者对可操作性反馈响应及时。


## 8. 待处理积压

### 长期未响应（> 30 天无维护者互动）

| Issue/PR | 创建时间 | 标题 | 积压天数 |
|---|---|---|---|
| [#43054](https://github.com/NousResearch/hermes-agent/issues/43054) | 2026-06-09 | productivity/google-workspace: gmail get 仅返回顶层 MIME 部分 — 转发的嵌套邮件正文丢失 | 74 天 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 2026-07-18 | [skills-index-watchdog] Skills 索引陈旧或降级（当前：degraded，29.8h 超限） | 35 天 |
| [#50164](https://github.com/NousResearch/hermes-agent/pull/50164) | 2026-06-21 | test: 添加内存上下文验证报告 | 62 天 |
| [#58230](https://github.com/NousResearch/hermes-agent/pull/58230) | 2026-07-04 | fix(kanban): 去重 review 泳道与服务门禁 | 49 天 |

### 风险提示

1. **#43054** 已积压 74 天，是当前最久未响应的功能性 Bug，涉及 Google Workspace 技能嵌套邮件处理，建议安排版本排期。
2. **#66616** 的 Skills 索引告警已持续 35 天，说明索引重建流程存在系统性缺陷，且有自动化探针持续告警，需要人工介入修复根因（而非仅重置索引）。
3. **#77162**（安全：工具结果出口路径密钥脱敏缺失）虽评论不多但涉及安全合规，建议优先处理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-22** | **数据来源：github.com/sipeed/picoclaw**


## 1. 今日速览

过去24小时内，PicoClaw 项目活跃度**中等偏低**：共 1 条 Issue 新增、3 条 PR 更新（均为合并/关闭）、0 个新版本发布。值得关注的是，今日 3 条 PR 全部被合并/关闭，且均为积累了 **5-6 个月**的长期 PR（创建于今年 2-3 月），说明维护者正在进行一轮**集中清理**。新增的 1 条 Issue 为高质量功能请求（“after-turn steering mode”），涉及消息队列语义设计，值得后续跟进。整体来看，项目处于**存量合并期**，无新功能发布、无 Bug 报告，代码库趋于稳定。


## 2. 版本发布

今日无新版本发布。最近一次 Release 暂无记录，建议关注后续版本节奏。


## 3. 项目进展

今日共合并/关闭 3 个 PR，均为存量 PR（等待 5-6 个月后处理），覆盖面较广：

| PR | 类型 | 说明 | 等待时长 |
|---|---|---|---|
| [#647](https://github.com/sipeed/picoclaw/pull/647) | enhancement / tool | **WebFetchTool 文本提取增强**：新增 HTML 实体解码（`&amp;`、`&lt;` 等）+ 块级元素换行保留，提升抓取内容的可读性与结构完整性 | ~6 个月 |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | feat | **新增 `anthropic-messages` 协议前缀**，支持 Anthropic 原生 `/v1/messages` 端点。解决了 #269 —— 部分 Anthropic 兼容代理服务仅支持原生 API 格式而无法使用的问题 | ~5 个月 |
| [#1182](https://github.com/sipeed/picoclaw/pull/1182) | documentation | **优化 `AGENTS.md`**：改为原则导向（principle-first）而非刚性清单，明确以 `go.mod` 为 Go 版本唯一依据，降低 AI 代理/贡献者的理解成本 | ~5 个月 |

**评估**：这 3 个 PR 分别补强了工具能力（WebFetch）、模型兼容性（Anthropic 原生协议）和仓库可维护性（AGENTS.md），虽然没有革命性新功能，但实质性地消除了用户的兼容性痛点（#269 长期未决）。积压清理说明维护者正在收敛技术债，项目正在稳步走完本轮功能补全周期，进入稳定的维护阶段。


## 4. 社区热点

今日无高讨论量 Issue/PR，唯一新增 Issue（#3342）暂无评论和点赞，热度未起。PR 方面同样无评论互动。社区讨论处于**平静期**，但 #3342 代表了真实的使用场景痛点，建议主动邀请社区参与设计讨论。


## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归报告。项目稳定性良好，暂无需紧急修复的问题。


## 6. 功能请求与路线图信号

**[#3342](https://github.com/sipeed/picoclaw/issues/3342)（今日新增，OPEN）**：请求新增 **“turn 结束后（after-turn）转向模式”** —— 当 Agent 正在处理第一个任务时，用户发送第二条消息，当前设计会将其视为“中断指令”，跳过任务 #1 的剩余工具调用并注入消息 #2。该 Issue 请求一个 **opt-in 模式**，将消息 #2 放入队列，等待任务 #1 完成后再处理，适合“Agent 忙碌时用户不希望打断当前执行”的场景。

**路线图信号**：该请求与 LLM Agent 的“任务编排”语义密切相关，考虑到项目刚合入 Anthropic 原生协议支持（PR #1158），这条 Issue 如果被接受，将进入**对话管理模块**的改动，预计会需要调整调度器/会话队列逻辑。从当前维护节奏（集中清理存量）来看，短周期内纳入路线图概率不高，但建议维护者给出明确的 roadmap 回应，或标记 `future` 标签。


## 7. 用户反馈摘要

今日无 Issue/PR 评论可供提炼。仅能根据新增 Issue #3342 和合并 PR 推断：

- **中断 vs. 排队**（#3342）：真实用户使用场景中，Agent 处理中途被“二次指令”打断导致任务一的剩余步骤被跳过。用户认为当前默认行为过于激进，期望一个可选的“排队”行为，让 Agent 先完成当前任务再响应新指令。反映了用户对 **Agent 任务执行确定性/可控性**的更高要求。
- **Anthropic 代理兼容性**（#1158 fixes #269）：说明部分用户使用第三方代理服务（仅支持 Anthropic 原生 Messages API），因协议格式不匹配而无法连接。这一需求的修复直接提升了这类用户的可用性，预计会获得积极反馈。


## 8. 待处理积压

今日数据中未显示明显的长时间未响应的 Issue/PR。值得注意的是，今日 3 个合并 PR 均为 5-6 个月前的创建项——它们此前处于“待维护者处理”的悬置状态，如今才被合并。建议维护者关注：

- 是否有其他类似“创建已久、长期无响应”的 PR/Issue（如 #3342 若长时间不被回应，可能重蹈覆辙）
- 建议对 **PR 分配 Reviewer** 并设定处理时限（如 30/60/90 天），避免存量再次积累到半年以上


**项目健康度总结**：今日无新 Bug、无版本发布、3 个存量 PR 成功合并、1 个有质量的功能请求新增，整体项目状态**稳定、健康、略有进展**。最大的风险信号是“存量 PR 处理周期过长”（普遍 5-6 个月），可能影响贡献者积极性，建议优化 PR 响应流程。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：** 2026-08-22  
**数据窗口：** 过去 24 小时（截至 2026-08-22）

---

## 1. 今日速览

NanoClaw 过去 24 小时整体活跃度**高**。PR 流量显著（24 条），主要集中在 Telegram 多实例支持、设置向导增强和 Dial 通道的收尾修复上，其中 core-team 成员 amit-shafnir 贡献了 7 条相关 PR，显示项目正处于一次有组织的功能推进阶段。Issue 侧仅新增 1 条但指向一个值得注意的 UX 误报问题——`send_card` 的按钮承诺与桥接层实际行为不一致。合并/关闭 11 条 PR，说明 CI 和代码审查管道运转顺畅；无新版本发布，当前正处于下一版本的功能累积窗口期。

---

## 2. 版本发布

**无新版本发布。**

> 上一次发布窗口已过，当前 master 分支正在累积多项功能（Telegram 多实例、模板创建 Agent、Dial 通道等），预计下一次版本发布将包含较密集的 breaking changes 和迁移说明。

---

## 3. 项目进展

今日共 **合并/关闭 11 条 PR**，按贡献板块归类如下：

### 3.1 通道集成与修复
- **[#3202] Add Mattermost channel integration**（已合并）— 新增 Mattermost 通道，遵循与 `slack.ts` 相同的 `registerChannelAdapter` 模式，通过社区 `chat-adapter-mattermost` 包封装实现。[链接](https://github.com/nanocoai/nanoclaw/pull/3202)
- **[#3401] fix(whatsapp-cloud): keep skill payload compatible with main**（已合并）— 修复 add-whatsapp-cloud skill 在 main 分支组合时的注册依赖问题。[链接](https://github.com/nanocoai/nanoclaw/pull/3401)
- **[#3403] fix(matrix): use a refresh-safe ESM patch**（已合并）— 解决 Matrix 适配器在 Node 22 下 extensionless ESM imports 失败的问题（提交 pnpm patch 以便每次安装自动应用）。[链接](https://github.com/nanocoai/nanoclaw/pull/3403)
- **[#3402] fix(providers): accept provider file events**（已合并）— 使分支后端 provider 已发出的事件可以被接受，无运行时或投递变化。[链接](https://github.com/nanocoai/nanoclaw/pull/3402)

### 3.2 Dial 通道收尾
- **[#3050] feat(setup): add Dial to the channel picker + wizard/skills**（已关闭/合并）— 将 Dial 接入安装向导，基于 `runChannelSkill` 模型，经过长时间迭代后合入。[链接](https://github.com/nanocoai/nanoclaw/pull/3050)
- **[#3433] fix(add-dial-number): use nc directives**（已合并，zvi-fried）— 将 `/add-dial-number` 从 prose shell blocks 迁移到 nc directives，使 registry 发现机制能正确识别该 skill。[链接](https://github.com/nanocoai/nanoclaw/pull/3433)

### 3.3 Driver 架构
- **[#3429] feat(drivers): ratify the attach surface — a driver describes its exec argv**（已合并，core-team）— 引入 `SessionExecSpec { bin, argsTty, argsPlain }` 协议，使 driver 只声明 exec 参数而非执行操作，为交互式终端附加提供干净的契约层。[链接](https://github.com/nanocoai/nanoclaw/pull/3429)

### 3.4 CI 与依赖
- **[#3430] fix: restore stable CI required check**（已合并）— 修复 Node 22/24 matrix 导致的 CI 检查名变更，恢复 main ruleset 对精确 `ci` check 的要求。[链接](https://github.com/nanocoai/nanoclaw/pull/3430)
- **[#3424] ci: test registry-backed skills**（已合并）— 为所有从 channels/providers 拉取的 add-* skill 增加 registry 快照测试。[链接](https://github.com/nanocoai/nanoclaw/pull/3424)
- **[#3439] chore(container): bump claude-code to 2.1.238 and agent SDK to 0.3.238**（已合并）— 依赖版本升级。[链接](https://github.com/nanocoai/nanoclaw/pull/3439)

> **整体评估**：Mattermost 通道合入扩大了平台覆盖；driver attach surface 的确定是架构层面的重要一步，为未来交互式工具（如终端附加、调试）铺平道路。Telegram 多实例、模板创建 Agent 等核心新功能仍在待合并队列中，项目功能面正在快速扩张。

---

## 4. 社区热点

**Issue #3426（新开，Bug）** — [send_card docs promise callback buttons that the bridge drops since #2265](https://github.com/nanocoai/nanoclaw/issues/3426)

- **作者**：glifocat | **创建**：2026-08-21 | **评论**：0 | **👍**：0
- **核心矛盾**：`send_card` 文档声明支持 `actions`（带回调按钮），但自 #2265 起，桥接层会丢弃所有没有 `url` 的 action。Agent 只能看到 `fallbackText` 提示"平台不支持卡片"，于是向用户错误地解释为平台无法渲染按钮。
- **问题本质**：**文档-实现不一致**引发用户可感知的误导。Agent 在不知情的情况下将系统缺陷归咎于平台，损害用户信任。
- **评论分析**：目前无评论，但该问题直击 card/action 机制的核心契约，预计会引发 core-team 关注。

**PR #3396（待合并，Feature）** — [feat: create agents from templates in chat](https://github.com/nanocoai/nanoclaw/pull/3396)

- **作者**：amit-shafnir | **创建**：2026-08-20 | **更新**：2026-08-21
- **内容**：`create_agent` 工具新增可选 `template` 参数，支持通过聊天直接创建 Agent；新增只读 `ncl templates list` 指令，默认列出本地 `templates/` 目录，可选 `--registry` 参数访问公共 registry 索引（结构化缓存）。
- **关联热链**：同一作者的讨论串还包括 #3428、#3435、#3436、#3437、#3438，构成完整的功能块。

> **用户需求信号**：模板创建 Agent + 热门通道（Telegram）多实例支持，是当前最显著的用户偏好方向——降低配置门槛、支持多租户/多业务线隔离。这一组 PR 整体反映了"让用户通过对话配置系统"的趋势。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| **中** | [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) | `send_card` 的 `actions` 按钮被桥接层静默丢弃（自 #2265 回归），导致 Agent 向用户误报平台能力限制。当前无对应修复 PR。 | 待修复 |
| **低** | [#3431](https://github.com/nanocoai/nanoclaw/pull/3431) | Telegram 设置向导的配对卡片错误显示"6 位数字"（实际为其他位数），属 UI 文案错误。修复 PR 已提交。 | 修复已提交 |
| **低** | [#3434](https://github.com/nanocoai/nanoclaw/pull/3434) | polling 适配器（无 webhook）错误地打开了 webhook server，属 Chat SDK 行为不一致。修复 PR 已提交。 | 修复已提交 |
| **低** | [#3287](https://github.com/nanocoai/nanoclaw/pull/3287) | `getMessageIdBySeq()` 返回的 `messages_in.id` 未经转换，可能包含 agent-group 后缀，导致消息 ID 不匹配（修复 #3153）。PR 已提交。 | 修复已提交 |
| **低**（回归风险） | [#3430](https://github.com/nanocoai/nanoclaw/pull/3430) | Node 22/24 CI matrix 导致 required `ci` check 丢失，存在破坏 main 分支保护的风险——已通过恢复精确检查修复并合并。 | ✅ 已合入 |

> **健康度信号**：#3426 是需要警惕的信号——文档承诺与实际行为脱节会导致用户将系统缺陷归咎于平台，建议尽快修复或更新文档。

---

## 6. 功能请求与路线图信号

### 已有 PR 支撑的高概率功能（预计纳入近期版本）

| 功能 | PR | 状态 | 预测 |
|------|-----|------|------|
| **聊天内通过模板创建 Agent** | [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) | 待合并 | 高——core-team 标记 |
| **Telegram 多实例支持（TELEGRAM_INSTANCES）** | [#3436](https://github.com/nanocoai/nanoclaw/pull/3436) | 待合并 | 高——feature skill 标记 |
| **设置向导支持添加多个 Telegram 机器人** | [#3438](https://github.com/nanocoai/nanoclaw/pull/3438) | 待合并 | 高——与上条配对 |
| **配对流程 + 向导流程携带 adapter 实例** | [#3435](https://github.com/nanocoai/nanoclaw/pull/3435) | 待合并 | 高——依赖 #3436 |
| **Slack 创建流程携带模板引用** | [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) | 待合并 | 中——重新 port，序列正确 |
| **Telegram 新增实例的完整文档 + pairing** | [#3437](https://github.com/nanocoai/nanoclaw/pull/3437) | 待合并 | 高——文档随功能发布 |

### 路线图信号
- 上述 Telegram 相关 PR 形成一个**完整功能包**（#3436 → #3435 → #3438 → #3437），合并顺序明确（#3436 先行）。这一组功能完成度已较高，预计很快批量合入，构成下一版本的核心新特性。
- 当前无新增 Issue 功能请求，用户诉求集中在卡片文档与行为一致性（#3426），这可能推动修复或文档更新优先于新功能。

---

## 7. 用户反馈摘要

> 过去 24 小时 Issue 评论有限（#3426 无评论），故从 PR 内容和描述中提炼信号。

1. **卡片按钮行为不一致造成用户信任问题**
   - **来源**：[#3426](https://github.com/nanocoai/nanoclaw/issues/3426) — 用户观察到 agent 将平台能力不足归咎于外部，而非自身实现缺陷。这类问题直接影响"AI 助手可靠性"的感知，是产品层面的重要痛点。

2. **多实例/多机器人配置是真实需求**
   - **来源**：[#3438](https://github.com/nanocoai/nanoclaw/pull/3438) — 设置向导中"已配置一个 Telegram bot 时再添加另一个"的场景，暗示用户有多个业务线/环境需要隔离的机器人实例。这往往出自企业级使用，说明项目正从小众向团队/组织级场景扩展。

3. **简单直接的配置路径是核心诉求**
   - **来源**：[#3396](https://github.com/nanocoai/nanoclaw/pull/3396)（templates from chat）+ [#3437](https://github.com/nanocoai/nanoclaw/pull/3437)（文档）— 用户在对话中直接创建 Agent、通过向导逐步配置，说明目标用户期望**低门槛配置**，而非手工编辑配置文件。

4. **CI 稳定性是核心团队的优先级**
   - **来源**：[#3424](https://github.com/nanocoai/nanoclaw/pull/3424)（registry-backed skills 测试）+ [#3430](https://github.com/nanocoai/nanoclaw/pull/3430)（恢复 CI check）— 团队主动投入 CI 基础设施，反映对工程质量的高要求，对依赖该项目的下游团队（如容器化部署）友好。

5. **平台覆盖度持续扩展**
   - **来源**：[#3202](https://github.com/nanocoai/nanoclaw/pull/3202)（Mattermost 合入）— 用户社区对 Mattermost 的请求（#1379）最终落地，说明项目响应社区需求的节奏健康。

---

## 8. 待处理积压

### 长时间未响应/未合并的 PR

| PR | 创建时间 | 持续天数 | 备注 |
|----|---------|---------|------|
| [#3287](https://github.com/nanocoai/nanoclaw/pull/3287) fix: strip agent-group suffix from inbound platform message id | 2026-08-17 | **5 天** | 已关联 #3153，修复消息 ID 匹配 bug，无反对意见但迟迟未被合并，疑似等待 review。 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) feat(setup): add Dial to the channel picker + wizard/skills | 2026-07-14 | **39 天** | 今日已合并 ✅（移出积压）。 |

### 当前待合并队列（共 13 条，基于数据）
- [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) — templates from chat（core-team，待合入）
- [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) — Slack 模板引用（core-team，待合入）
- [#3436](https://github.com/nanocoai/nanoclaw/pull/3436) — Telegram 多实例（feature skill，待合入）
- [#3438](https://github.com/nanocoai/nanoclaw/pull/3438) — 向导多 bot 支持（feature skill，待合入）
- [#3435](https://github.com/nanocoai/nanoclaw/pull/3435) — adapter 实例贯穿配对流程（feature skill，待合入）
- [#3437](https://github.com/nanocoai/nanoclaw/pull/3437) — add-telegram 文档（docs，待合入）
- [#3431](https://github.com/nanocoai/nanoclaw/pull/3431) — 配对卡片位数修复（fix，待合入）
- [#3434](https://github.com/nanocoai/nanoclaw/pull/3434) — webhook server 修复（fix，待合入）
- [#3432](https://github.com/nanocoai/nanoclaw/pull/3432) — Dial 后续修复（fix，待合入）
- 其余待合入项请参考 PR 列表。

### 提醒
- **#3287 已等待 5 天**，涉及真实消息 ID 匹配 bug（可能影响消息去重/顺序），建议优先 review 合入。
- **#3432（Dial 后续修复）** 追踪前序 #3050 的合并后问题，建议尽快评估，避免功能合入后带着已知缺陷停留过久。
- **#3396 与 #3428 存在顺序依赖**：#3428 声明"supersedes #3397"并依赖 #3396 的 trunk 代码。需按序合并，保障功能完整。

---

*本日报由 AI 分析师自动生成，数据来源：[NanoClaw GitHub 仓库](https://github.com/nanocoai/nanoclaw)。所有链接指向 nanocoai/nanoclaw。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-22

> 数据来源：GitHub (github.com/nullclaw/nullclaw) | 统计区间：2026-08-21 至 2026-08-22

---

## 1. 今日速览

项目今日整体处于**低频活跃**状态：24小时内无新 Issue 产生、无版本发布，仅有**1条待合并 PR**（#990）提交。该 PR 延续了近期**多网关服务商接入**的路线，将 Eden AI 以 OpenAI 兼容网关的形式纳入支持体系，与上一个同类 PR（#922）在架构路线上保持一致。虽然没有新增 Bug 报告或功能讨论，但社区提交的 PR 方向明确、实现无侵入，暗示项目当前处于**稳定的平台扩展阶段**。对于由社区驱动为主的开源项目而言，单日低活跃度不构成健康度隐忧，但连续多日出现该情况则需引起关注（当前自上次合并 PR 后已过去约数日）。

---

## 2. 版本发布

**无新版本发布**（截至 2026-08-22，最新 release 仍为上一版本）。如有用户关注最新功能落地时间线，可关注 #990 合并后的发版计划。

---

## 3. 项目进展

### 今日合并/关闭 PR：无

### 待合并 PR 观察（进展信号）
| PR | 内容 | 状态 |
|---|---|---|
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | 新增 Eden AI 作为 OpenAI 兼容网关提供商 | ✅ 已提交待审查 |

**项目推进评估**：虽然今日没有实际合并动作，但 #990 的提交本身意味着项目在**网关生态覆盖度**上持续加宽——从 NEAR AI Cloud、Atlas Cloud（#922）拓展至 Eden AI，表明项目在“统一适配层”策略上得到社区认可并正向复用。该 PR 若合并，将为此前已有 OpenAiCompatibleProvider 的使用者提供**零成本**的新上游接入选项，项目整体向前迈进的幅度为**小幅迭代**（无核心架构变动）。

---

## 4. 社区热点

今日无讨论热度过高的 Issue/PR（#990 暂无评论和点赞）。可参考的信号是：

- [#990](https://github.com/nullclaw/nullclaw/pull/990) 的作者在摘要中特别强调了 **“EU based”** 这一属性，顺手将 Eden AI 与近期欧洲数据合规趋势关联。尽管未引发评论互动，但其动机暗示了部分用户关注**数据主权与地区合规性**的诉求——倾向于接入欧盟本地服务商，以规避美国云服务商的合规风险。
- 同类 PR #922（NEAR AI Cloud 与 Atlas Cloud 的接入方案）在合并时若无异议，则能侧面验证社区对“OpenAI 兼容网关聚合”方向的认可。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告、崩溃或回归问题。**

> 项目维持良好稳定性，无紧急修补需求。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**

结合已有 PR 分析，**网关类服务商扩展**是当前社区中最明确的路线图信号：

- #990（Eden AI）与 #922（NEAR AI Cloud、Atlas Cloud）共同指向一个趋势——**用户希望 NullClaw 作为统一出口，对接越来越多的 OpenAI 兼容第三方网关**。这种模式对最终用户的价值在于：通过一个 Key 路由到多家上游，规避单一上游故障或价格波动。
- 该方向若持续被接受，未来版本中很可能看到更多同类 PR（如接入其他欧洲/亚洲网关服务商），或者衍生出**网关健康度检测/自动容灾切换**等进阶功能。

**建议下一版本关注点**：网关的可用性监控与自动故障转移，这可能是从“接得进来”到“用得稳”的下一步需求。

---

## 7. 用户反馈摘要

今日无新增评论可供提炼。

参考 #990 的提交描述（唯一内容来源）：

- **使用场景**：开发者希望通过单一 Key 访问多家上游大模型厂商，减少多家签约和密钥管理的复杂度。
- **偏好信号**：对**欧盟本地服务商**的青睐（EU based），暗示部分用户存在数据出境顾虑或对欧盟 AI 法规（AI Act）的合规敏感性。
- **实现期望**：提交者明确遵循已有的 OpenAiCompatibleProvider 模式**不新增实现**，说明社区对现有抽象层满意，并愿意以最小侵入方式扩展生态。

---

## 8. 待处理积压

今日无长期未响应的重要 Issue 或 PR 需要重点关注。

**提示**：考虑到 #990 提交的 PR 已进入待审查队列，合并优先级建议上调——因其与 #922 结构高度一致，审查成本较低，且能尽快释放生态扩展信号，鼓励更多同类贡献。

---

*本日报由 AI 自动生成。数据口径以 GitHub 公开 API 实际返回为准，如有遗漏请以仓库实时页面为准。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-22

## 1. 今日速览

过去24小时项目活跃度极高。CI 基础设施重构成为绝对主线：由核心维护者 henrypark133 牵头发起的"CI expedite"系列（T1-T4，即 Issue #7798-#7801）从工具链统一、测试流水线、PR/队列收敛到规范门禁清单四个维度全面推进，且配套的 T4 实现 PR #7809 已提交。安全与沙箱领域亦有显著投入：针对 GitHub CLI 凭证中介的沙箱实现出现多个迭代版本（PR #7806、#7807、#7810，其中前两个已合并）。社区贡献保持活跃，新贡献者 kriptoburak 提交了首个 PR（#7811，Xquik 托管 MCP 集成）。值得注意的是，版本发布为零，且合并的 PR 大多是缺陷修复（workspace 根目录、clippy 1.98 lint、Telegram 配对问题），说明项目正处在密集的稳定化与内部重构阶段，而非新功能冲刺期。整体健康度良好，维护者对关键路径响应迅速。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

### 3.1 CI 基础设施（核心方向）

| PR | 说明 | 状态 |
|---|---|---|
| [#7804](https://github.com/nearai/ironclaw/pull/7804) | 将 `IRONCLAW_REBORN_WORKSPACE_ROOT` 工作区根目录覆写能力从 release/2026-08-11 前向移植到 main 与 release/2026-08-17 | ✅ 已合并 |
| [#7805](https://github.com/nearai/ironclaw/pull/7805) | 将 clippy 1.98 lint 修复前向移植至 1.3 分支，解除了所有 PR 进入 release/2026-08-17 的硬性阻塞 | ✅ 已合并 |
| [#7797](https://github.com/nearai/ironclaw/pull/7797) | 全仓库 agent-guidance 审计：修正漂移、精简 21.5k 行、统一测试目录至 AGENTS.md 约定（使用 13 个并行审计器） | ✅ 已合并 |
| [#7809](https://github.com/nearai/ironclaw/pull/7809) | T4 实现（Tasks 1-5）：`scripts/preflight-gates.sh` 成为唯一规范门禁清单，支持 worktree-safe hooks 与自打印 REPRO | 🟡 待合并 |

**评估**：CI 重构系列（Issue #7798-#7801）是当前项目最大的技术债清偿战役。T1-T3 的 Issue 已于昨日开启并进入活跃讨论，T4 的实现已落地。这套组合拳将统一 12 个 workflow 文件中的 43 处分散工具链调用、引入 nextest 并行测试、消除 PR 绿但队列红的发散问题。合并后 CI 耗时应大幅下降，且 REPRO 机制将显著改善 CI 失败的可调试性。

### 3.2 沙箱安全（重点）

| PR | 说明 | 状态 |
|---|---|---|
| [#7806](https://github.com/nearai/ironclaw/pull/7806) | 沙箱 GitHub CLI 凭证中介（v1）：直接可执行文件 + 参数向量执行，授权/审批后暂存一次性凭证 | ✅ 已合并 |
| [#7807](https://github.com/nearai/ironclaw/pull/7807) | 沙箱 GitHub CLI 凭证中介（v2）：增加取消支持，凭证从扩展声明解析，仅向 `gh` 暴露调用占位符 | ✅ 已合并 |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | 更完整的实现：支持每用户持久沙箱的出口管理与调用归因，`gh` 命令经 `builtin.shell` 授权流 | 🟡 待合并 |
| [#7796](https://github.com/nearai/ironclaw/pull/7796) | Railway 审计追加失败时 fail-closed，保留暂存数据以便重试 | ✅ 已合并 |

**评估**：三天内同一功能出现多个迭代版本并逐一合并，说明"GitHub CLI 凭证中介"是当前的安全重点。该机制让沙箱内的 `gh` 命令不再直接接触用户的真实凭证，而是通过宿主运行时进行授权、审批和一次性凭证注

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-22

> **数据窗口**：2026-08-21 00:00 – 2026-08-22 00:00（UTC）｜**数据来源**：GitHub API
> **分析视角**：AI 智能体与个人 AI 助手领域开源项目


## 1. 今日速览

今日 LobsterAI 完成了 **2026.8.21 版本的正式发布**，一次性合并了 12 条 PR（含 5 条核心功能/修复 PR），覆盖 DSH 运行时升级、代码库（Library）交互重构、DSH 使用分析埋点三个主要方向，是本周内规模最大的合并日。与此同时，2 条四月份提交的 Issues 和 6 条旧 PR 均在今日被系统标记关闭——一大部分属于 stale 自动清理，但也包括 #1223/#1224 这一组真实修复的收尾。值得警惕的信号是：**#1550 作为唯一的 OPEN PR，从 2026-04-07 提交至今已滞留 137 天**，且今日有新的代码更新，需要重点追踪。综合来看，项目主干迭代节奏健康，但 PR 队列中开始出现长时间悬挂的"孤儿 PR"，维护者注意分流处理。

- **合并活跃度**：★★★★☆（12 条 PR 合并/关闭，1 条仍开放）
- **Issue 活跃度**：★★☆☆☆（2 条关闭，0 条新开）
- **健康度风险**：低（无回归信号；#1550 悬挂超季度需关注）


## 2. 版本发布

### LobsterAI v2026.8.21（正式版）

> 合并 PR：[#2519 Release: 2026.8.21](https://github.com/netease-youdao/LobsterAI/pull/2519) — 将 `release/2026.8.21` 分支合入 `main`。

**更新要点**：

| 变更方向 | 说明 |
|---------|------|
| DSH 运行时升级 | 实验性 DeepSeek Harness (DSH) 运行时升级至 **v0.1.1-rc.1**（PR [#2516](https://github.com/netease-youdao/LobsterAI/pull/2516)） |
| DSH 使用分析 | 新增 DSH 启用开关和工作台打开行为的隐私友好型分析埋点（PR [#2515](https://github.com/netease-youdao/LobsterAI/pull/2515)） |
| Windows 集成 | 多项 Windows 平台可靠性改进 |
| 分析上报架构调整 | DSH 分析事件构建从主进程移入渲染进程（PR [#2518](https://github.com/netease-youdao/LobsterAI/pull/2518)），IPC 层不再承担数据组装职责 |

**评估**：本次版本以**技术债清理与可观测性补全**为主，无破坏性变更（BCR=0）。DSH 仍为实验性功能，升级到 rc 版本表明其逐步走向稳定。迁移上，由于分析事件构建移入 renderer，**使用 DSH 的开发者需注意渲染进程日志中新增 `dsh-analytics` 事件类型**，若依赖主进程日志过滤需调整规则。

**值得留意**：PR #2518 明确 **"Skip re-logging analytics beacon requests"**，即避免了发送分析请求时再次触发日志递归，这个细节体现了实现上的谨慎。


## 3. 项目进展

### 核心推进（今日合并）

| 模块 | PR | 内容 | 类型 |
|------|-----|------|------|
| **Library / 代码库** | [#2514](https://github.com/netease-youdao/LobsterAI/pull/2514) | 优化本地产物预览与操作体验：预览弹窗尺寸/溢出约束、移除文件删除入口、空状态/筛无结果区分、搜索框一键清空、修复发布额度弹窗占位符重复替换 | 功能 + 修复 |
| **Library / 文件分享** | [#2517](https://github.com/netease-youdao/LobsterAI/pull/2517) | 分享打包保留 Unicode 文件名、兼容历史文件名、收藏状态即时更新/失败回滚、避免收藏事件触发重复列表刷新、统一订阅/发布额度弹窗 | 功能 + 修复 |
| **DSH / 分析** | [#2518](https://github.com/netease-youdao/LobsterAI/pull/2518) | 分析上报逻辑从主进程移入渲染进程，新建 `dshAnalytics.ts` service | 重构 |
| **DSH / 运行时** | [#2516](https://github.com/netease-youdao/LobsterAI/pull/2516) | DSH 升级至 v0.1.1-rc.1 | 依赖升级 |
| **DSH / 文档** | [#2515](https://github.com/netease-youdao/LobsterAI/pull/2515) | 在 usage-analytics 设计规范中补充分析事件结构文档 | 文档 |

### 代表性"迟到"修复（4 月提交，今日关闭）

| PR | 内容 | 评估 |
|-----|------|------|
| [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) | 定时任务列表排序重构：不依赖 UUID 随机排序，改为有意义排序规则 | **高质量修复**，解决的是用户视角的排序混乱问题，且根因分析到位（UUID v4 与创建时间无关） |
| [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) | Cowork 会话列表/详情消除无效重渲染（`React.memo` + 合并 `useSelector`） | 性能优化，减少流式输出时的 CPU 占用 |
| [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) | 消除 `recentChats`/`conversationSearch` 的 **N+1 查询** | **重要性能修复**，对会话量大的用户改善显著 |
| [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) | 修复 `setConfig` 时 chat handler 未重建（平台凭据保存后 systemPrompt 等不生效） | 功能性 bug 修复 |
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | i18n 硬编码修复 + Agent 弹窗 Escape 关闭 + 删除防重复点击（对应 Issue #1223） | UX/i18n 修复 |

**整体判断**：项目在 **Library 模块（本地产物管理与分享）** 和 **DSH 可观测性** 两条线上有明显推进。Library 的优化兼顾了交互细节（弹窗、空状态）和数据正确性（Unicode 文件名、收藏回滚），体现产品化打磨的成熟度。性能类 PR（#1219、#1220）的合并对长期用户体验是隐性加分项。


## 4. 社区热点

今日活跃讨论较少，**仅 #1217 和 #1223 各 2 条评论**。从关注度看：

**[#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) — i18n 硬编码 + Agent 弹窗交互（2 评论）**

该 Issue 由社区用户 `MaoQianTu` 提交，**一个 Issue 涵盖三个 UX/i18n 问题**，并且全部在同一 PR #1224 中完成修复。这种"Issue 即任务单"的提法在开源社区中属于高效协作模式。从评论内容和修复速度看，这一组问题的优先级被维护者认可（当日即关闭）。

**背后诉求**：国际用户对**中英文混排**的敏感度很高。"输入文件"硬编码在 `CoworkPromptInput.tsx` 中会直接拼入发送给 AI 的提示词，这对非中文用户来说不仅是体验问题，还可能影响 AI 理解上下文。Escape 关闭弹窗和防重复点击则属于基础 UX 规范，能在 4 月被提交说明当时项目成熟度还不够高。

**[#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) — Windows 偶发网关重启（2 评论）**

用户 `blueb0ne` 报告在 Win10 环境下一天内 3-5 次偶发重启网关，提供了完整的日志压缩包。该 Issue 因 stale 被自动关闭，**但日志包仍保留在评论区**（`lobsterai-logs-20260401-180401.zip`），对后续维护仍有排查价值。


## 5. Bug 与稳定性

今日**无新报告 Bug**（0 条新开 Issue），2 条关闭的 Issue 均为旧问题或 stale 清理。按严重程度整理今日关闭的 Bug 类工作：

| 严重级别 | 问题 | 状态 | 说明 |
|---------|------|------|------|
| **中** | [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) `setConfig` 后 chat handler 未重建 | ✅ 已修复 | 仅平台凭据保存（如钉钉/Telegram 配置）时无 `settings` 键，导致 systemPrompt 等变更不生效 |
| **中** | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) Win10 偶发网关重启 | ⚠️ Stale 关闭 | 频率 3-5 次/天，日志已归档；无明确 fix PR，**建议维护者从日志中提取崩溃堆栈**，评估是否影响 2026.8.21 版本 |
| **低** | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) i18n 硬编码 + Escape 关闭 + 防重复点击 | ✅ 已修复（#1224） | 非功能性 bug，但影响英文用户体验 |
| **低** | [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) / [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) 渲染与查询性能 | ✅ 已修复 | N+1 查询和无效重渲染属于隐性性能 Bug |

**值得注意**：**#1217 的网关重启问题很可能依然存在于最新版本中**——stale bot 关闭不等于问题解决。如果该 Issue 是真实存在的崩溃，建议维护者在下一个版本中主动验证。


## 6. 功能请求与路线图信号

今日无新功能请求，但**从合并的 PR 可以读出清晰的路线图信号**：

- **DSH 从实验走向产品化**：`v0.1.1-rc.1` + 使用分析埋点 + 分析规范文档，三管齐下表明 DSH 不再是演示级功能，正在接受真实用户检验。下一步预期是 DSH 工作台的 UI 完善和错误处理精细化。
- **Library（代码库）体验打磨进入深水区**：#2514 + #2517 连续两条 PR 都在优化本地产物的**交互细节**（弹窗、占位符、收藏回滚、空状态），且都提到了"更新设计文档"，说明团队在按设计规范逐条落地。
- **隐私导向的分析设计**：PR #2515 明确"fire-and-forget, never throws"，#2518 将上报逻辑移入 renderer，在用户隐私和可观测性之间做了平衡，这个思路值得社区借鉴。
- **长尾遗留**：**#1550 定时任务"不通知"模式报错**是唯一悬挂的 PR，且已有根因分析（两种创建路径 delivery 对象构建方式不同），修复方案明确。理论上代码量不大，不确定为何滞留超季度，建议维护者评估是否近期合入。


## 7. 用户反馈摘要

今日评论量极少（共 4 条），结合 Issues 和 PR 内容提炼：

| 反馈来源 | 反馈要点 | 性质 |
|---------|---------|------|
| Issue #1223（提交者 MaoQianTu） | 英文用户发送附带文件的提示词中混入中文「输入文件」；Agent 弹窗在键盘流操作时无法 Escape 关闭；删除按钮在双击时可能重复触发 | **痛点明确**，英文用户国际化体验受损，交互细节缺少打磨 |
| Issue #1217（提交者 blueb0ne） | Windows 10 环境中网关每日偶发重启 3-5 次，影响正常使用 | **稳定性投诉**，频率较高但提供完整日志，配合度高 |
| PR #1218（提交者 gongzhi-netease） | 新建定时任务随机出现在列表中间，需要扫全列表才能找到 | **团队内部反馈**（内部开发者提交），用户视角的排序即"有意义排序" |
| PR #1218 根因分析 | Gateway 按 `nextRunAtMs` 升序、相同时间按 **UUID 字符串排序**（`447604ff < ...`），导致列表位置不可预测 | **技术债**，上游 Gateway 排序策略未考虑人类认知模式 |

**满意度判断**：用户反馈集中在**细节体验**层面（i18n、排序、弹窗交互），说明核心功能稳定性已获得基本信任；#1217 的偶发重启是此阶段最值得优先处理的稳定性短板。


## 8. 待处理积压

### 🔴 高优先级 — 建议尽快处理

**[PR #1550](https://github.com/netease-youdao/LobsterAI/pull/1550) — 定时任务"不通知"模式触发时报错（OPEN）**
- 提交于 **2026-04-07**，距今 **137 天**
- root cause 已分析清楚：两种创建路径（会话 vs UI 表单）构建 delivery 对象方式不一致，会话创建的任务在 mode=none 时仍携带 `channel/to` 字段
- 今日有新的代码更新，但状态仍是 OPEN
- **建议**：代码量小且修复方向明确，建议维护者安排 code review 并合入 2026.9.x 版本

### 🟡 中等优先级 — 建议关注

**[Issue #1217](https://github.com/netease-youdao/LobsterAI/issues/1217) — Windows 偶发网关重启（stale 关闭）**
- 日志已归档，若最新版本仍可复现，建议由维护者直接开启新 Issue 追踪或联系提交者确认

### ⚪ 低优先级 — 观察

- 今日 6 条 stale 清理的 PR（#1215、#1218、#1219、#1220、#1224）在关闭前已实际被合入或验证过修复效果，无实质积压风险
- 无长期无人响应的 Issues

---

> **日报小结**：LobsterAI 在本数据窗口内完成了 2026.8.21 版本的发布，DSH 技术栈和 Library 模块均有实质进展。项目整体健康度良好，唯一需要警惕的是 #1550 的长期悬挂可能反映出 PR 审查流程或资源分配存在瓶颈。建议维护者在下一轮规划中明确处理 #1550 的时间表，并在 2026.8.21 之后主动验证 #1217 的网关稳定性是否已随 Windows 集成改进得到缓解。

*报告生成时间：2026-08-22T00:00:00Z｜数据周期：24h*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-22

## 今日速览
过去24小时Moltis项目保持稳定活跃：新增2个Issue（均为Bug报告），8个PR获得更新（其中1个已合并关闭），无新版本发布。核心维护者rubenssoto今日集中提交了3个修复类PR（WhatsApp媒体持久化、浏览器隐身模式、定时任务投递），覆盖了渠道集成、浏览器工具链和定时调度三个方向；i18n领域也有社区贡献者PeterDaveHello提交了繁体中文翻译的大幅更新。整体来看，项目正处于多面修补期，以修复已知缺陷和提升集成完善度为主。

---

## 项目进展

今日仅1个PR被合并关闭：

- **[#1220] fix(whatsapp): render Markdown in outbound messages** — 将模型生成的Markdown转换为WhatsApp原生消息格式，在保持会话历史中原始Markdown不变的前提下，显著提升WhatsApp渠道出站消息的可读性。该PR今日合并，标志着WhatsApp渠道从"可用"向"好用"迈进了一步。

此外，多条活跃PR正在代码审查或CI验证阶段，项目正在以下方向推进：

- **WhatsApp渠道能力补全**（#1228，rubenssoto）：下载入站WhatsApp文档并持久化至本地，使本地工具能获得稳定的`local_path`，而非仅暴露文件名/MIME元数据。设置20MB大小上限并保持零额外依赖。
- **浏览器工具链增强**（#1227，rubenssoto）：默认启用Obscura sidecar的`--stealth`隐身模式，并新增`tools.browser.obscura_stealth`配置项（默认`true`）供需要标准网络行为的运维人员关闭。
- **定时任务投递修复**（#1226，rubenssoto）：增加`payload.deliver_to_current_chat`瞬态快捷方式，将定时任务的输出投递回发起聊天的原始目的地，同时保留线程/主题路由等规范外发行为。
- **Web端安全加固**（#1222，tsauvajon）：验证镜像引用和包名后才允许进行容器/Dockerfile操作，并将包检查和镜像构建限制为操作管理员角色。
- **台湾繁体中文i18n大幅改进**（#1225，PeterDaveHello）：重点重写扩充了`connectors.ts`翻译文件，同时修正多处术语与风格一致性。

---

## 社区热点

今日无高讨论度高评论量的Issue/PR浮现，社区互动集中在等待中的代码审查上，但仍有两个值得关注的信号：

- 两项PR（#1208和#1223）同时指向**heartbeat `active_hours` 配置完全失效**的问题——这在社区中已形成了一个"修复链"：Issue #1205此前被报告为bug，#1208 PR（Lstarsky0提交）声称Closes #1205；而新Issue #1223又指出了更深层的问题——`end: "24:00"`的默认值导致任何时间窗口都无法生效。这是一个功能从根上就没被调用的问题，且有两个独立贡献者一头扎进同一处修复。

- 新Issue #1224报告了**Slack共享频道（shared channels）中工具停止工作**的问题，在Issue主文中未指明是否已经附带上下文日志，目前零评论和零 👍，等待用户补充更多会话上下文。

---

## Bug 与稳定性

今日新增2条Bug报告，严重程度如下：

**中等问题：**

- **#1224 [Bug] Tools stop working in shared Slack channels**（affanshahid，0评论）— 在Slack共享频道中Moltis的工具调用失效，属于集成功能性回归或缺失。目前无对应fix PR，建议维护者尽快询问用户补充会话上下文以便复现。链接：https://github.com/moltis-org/moltis/issues/1224

- **#1223 heartbeat active_hours has no effect on a default config**（Lstarsky0，0评论）— `ActiveHoursConfig` 默认`end: "24:00"`时，`is_within_active_hours`永远不拦截任何时段的执行；用户设置的`end: "24:00"`同样失效。已有对应的PR #1208在Open状态，但该PR在今日更新时评论尚无内容。链接：https://github.com/moltis-org/moltis/issues/1223

无崩溃级别或阻塞性严重Bug。

---

## 功能请求与路线图信号

今日无全新的功能请求Issues，但从活跃PR中可以捕捉到路线图信号：

- **静默安全强化**：PR #1227为浏览器工具链默认开启`--stealth`隐身模式，PR #1222为Web端增加镜像包名验证和管理员权限限制——两者共同指向一个方向：在零配置下默认启用安全加固，而非依赖用户主动开启。
- **渠道亲和性设计**：PR #1226的`deliver_to_current_chat`瞬态字段，体现了"定时任务输出应流回触发它的对话"的产品思路，而非仅写往固定日志。同时PR #1228的WhatsApp媒体持久化也在为本地工具链打通渠道屏障。这些改进有望在下一版本（可能在v0.10.x或v0.11.0）中落地，值得关注。

---

## 用户反馈摘要

今日社区用户反馈有限，但从各渠道可提炼出以下信号：

- **对"配置不生效"的挫败感**：Lstarsky0在Issue #1223中不仅仅是报bug，而是深入源码指出了`is_within_active_hours`函数虽然已编写、已文档化、已测试，却从未在`heartbeat`调度中被调用——这类"静默不生效"的配置对用户的信任度伤害极大。该作者同时也提交了修复PR #1208，说明其是带着patch来报案的，是高质量的深度用户。
- **安全意识的潜在偏好**：Obscura隐身模式默认开启的PR，暗示有用户在反机器人检测场景中遇到了问题；但暂无Comment可佐证这是来自真实用户需求还是维护者自发的安全加固决策。

---

## 待处理积压

- **PR #468 [长期积压] fix(plugins): use cmd.exe on Windows for shell hooks**（jmikedupont2，2026-03-23创建，已积压5个月）— 修复Windows平台上`sh -c`不可用导致shell hooks失败的补丁，已在Windows 10和CI中验证通过，今日仍无审查动态。Windows用户长期受此问题困扰，此PR的合并将直接解锁Windows平台的插件能力。链接：https://github.com/moltis-org/moltis/pull/468

- **Issue #1223 / PR #1208 [配对处理中]** — 建议维护者将二者关联起来，并推进#1208的最终审查，同时确认#1223所揭示的`end: "24:00"`边界问题是否被#1208完整覆盖，若未覆盖则需补充修复或扩展测试。链接：https://github.com/moltis-org/moltis/pull/1208

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，我是 CoPaw 开源项目分析师。根据您提供的 GitHub 数据，我生成了以下 2026-08-22 的 CoPaw 项目动态日报。

---

# CoPaw 项目动态日报 | 2026-08-22

## 1. 今日速览

今日 CoPaw 项目活跃度较高，**Issue 和 PR 更新数量均在 30 条以上**，表明社区参与度和开发迭代节奏都相当积极。值得关注的是，**问题报告（共 34 条）与代码贡献（共 36 条）几乎持平**，且 Bug 类 Issue 占据了较大比例，反映出用户在使用 2.1.0 及 beta 版本时遇到了较多稳定性问题，项目维护者需重点关注并优先处理。好消息是，**有多个针对近期回归问题的修复 PR（如 #7205, #7209）已被合并或提出**，显示出团队对稳定性的快速响应。

## 2. 版本发布

**无新版本发布。**

> **观察**：项目当前处于 **v2.1.1-beta.1** 阶段（依据 Issue #7206 和 PR #7200），v2.1.0 版本中的问题（如 MCP 重连、历史库膨胀）尚未在正式版中修复。

## 3. 项目进展

今日合并/关闭的 PR 展示了项目在**质量保障、性能优化和功能完善**方面的持续努力。

- **关键回归修复已合并**：
    - **[PR #7205] fix(coverage): fix Windows integration coverage always reading 0**：修复了 Windows 集成测试覆盖率始终为 0 的静默问题，并增加了 fail-closed 保护。这显著提升了 CI 的可靠性，有助于未来更早地捕获回归。
    - **[PR #7176] perf(console): keep long chat sessions responsive**：优化了控制台在长对话场景下的性能，解决了流式响应和 Markdown 重渲染导致的卡顿问题，直接提升了核心用户体验。
    - **[PR #7200] chore: bump the version to v2.1.1b2**: 版本号推进，为下一个测试版做准备。

- **功能开发持续推进**：
    - **[PR #7112] feat(hub): add self-hosted multi-user Hub**（已关闭/合并）：引入了可选的 QwenPaw Hub 自托管多用户控制平面，这标志着项目从单机工具向**团队协作平台**方向迈出了重要一步，具有里程碑意义。

- **生态与内容建设**：
    - **[PR #7202] docs(mailbox): add mailbox management documentation**（已关闭/合并）：补齐了 Mailbox 功能的官方文档，有利于用户更好地使用该特性。

## 4. 社区热点

今日社区讨论最活跃、评论最多的当属 **[Issue #6524] --- MCP 后端重启后客户端无法自动恢复**，该问题获得了 6 条评论，是今日讨论焦点。

- **链接**: [Issue #6524](agentscope-ai/QwenPaw Issue #6524)
- **核心诉求**：用户在使用 `streamable_http` 连接 MCP 服务器时，如果服务器重启，客户端会因复用失效的 `mcp-session-id` 而无法自动恢复，必须手动执行 `list mcp` 才能重新连接。
- **背后分析**：随着 MCP 生态的普及，其连接稳定性成为用户核心痛点。该问题触及了动态环境（如服务器重启、网络闪断）下长连接会话管理的可靠性，用户期望的是更智能的自动重连机制，而非手动干预。这为项目在会话健壮性设计上提供了明确信号。

## 5. Bug 与稳定性

今日报告的 Bug 较多，按严重程度排列如下：

| 严重程度 | Issue 链接 | 标题与关键摘要 | Fix PR 状态 |
| :--- | :--- | :--- | :--- |
| **高** | [#6427](agentscope-ai/QwenPaw Issue #6427) | **WebView2 渲染进程崩溃**：桌面版启动约 7 秒后崩溃，疑似回归（post.3正常，post.4崩溃）。 | 无 |
| **高** | [#7168](agentscope-ai/QwenPaw Issue #7168) | **历史库膨胀**：`recall_history` 的 `expand` 将工具完整输出落库，导致 `history.db` 膨胀至 7.6G，且同一区间被重复落库。 | 已关闭，修复方案或已在某处实施 |
| **高** | [#7206](agentscope-ai/QwenPaw Issue #7206) | **`/compact` 功能失效**：在 `v2.1.1-beta.1` 上，当 `compact_threshold_ratio == 0.9` 时，手动`/compact`操作总是失败，并报 `pydantic ValidationError`，确认是**回归问题**。 | 无 |
| **中** | [#6780](agentscope-ai/QwenPaw Issue #6780) | **空闲卡死**：2.0.1 版在闲置几十分钟后会自动卡死，只能强制重启进程。 | 已关闭，可能已修复 |
| **中** | [#7016](agentscope-ai/QwenPaw Issue #7016) | **工具调用404**：流式会话时，页面调用 `offload` 接口返回 `Tool call not found`，导致功能不可用。 | 无 |
| **中** | [#7156](agentscope-ai/QwenPaw Issue #7156) | **Embedding Health Check 超时**：即使后端已预warm，启动时 health check 仍超时（硬编码5s），导致向量检索降级为 BM25，且无配置项。 | 无 |
| **中** | [#7210](agentscope-ai/QwenPaw Issue #7210) | **工具注入不一致**：工具在 `agent.json` 全部启用，但实际会话的函数 schema 未注入，导致工具不可用。 | 无 |
| **低** | [#7136](agentscope-ai/QwenPaw Issue #7136) | **文件名字符串乱码**：发送非 ASCII 文件名时，前端卡片显示 percent-encoded 乱码。 | 无 |
| **低** | [#7199](agentscope-ai/QwenPaw Issue #7199) | **daily_paper 任务崩溃**：PDF 含代理字符（U+D800-DFFF）时，`write_atomic` 写入崩溃。 | 无 |

## 6. 功能请求与路线图信号

今日用户提出了多个有价值的功能请求，其中一些与项目现有 PR 或近期方向高度契合，可能被纳入后续版本：

- **高潜力（已有对应 PR）**：
    - **[Issue #7197] MCP 工具授权规则无法选择自定义频道** → 直接对应 **[PR #7208] feat(dingtalk): support shared session context in group chats** 等渠道功能，但在自定义频道兼容性上存在问题。修复这个盲点将能完善渠道生态。
    - **[Issue #7204] 如何增加自定义自定义 tool** → 这是开发者最基础的需求，强化插件和工具开发的文档、SDK 或模板可能是下一阶段的重点。

- **中潜力（UI/UX 改进方向）**：
    - **[Issue #7196] 推理过程显示折叠** 与 **[Issue #7203] 工具调用信息显示开关**：这反映了用户对界面信息密度和专注度的追求，希望在正式工作时能**关闭“过程性”的干扰信息**。
    - **[Issue #7198] 任务模式审批优化**：用户希望简化执行过程中的产物审批，特别是在**无人值守的过夜任务**场景下，减少不必要的弹窗打扰。
    - **[Issue #7201] 媒体大小限制拆分**：用户希望将 `max_inline_media_bytes` 拆分为按图片、视频、音频的独立限制，并在设置界面暴露，以解决不同媒体的体量差异。

- **低潜力（边缘增强）**：
    - **[Issue #7201] 媒体大小限制拆分**：用户希望将 `max_inline_media_bytes` 拆分为按图片、视频、音频的独立限制，并在设置界面暴露，以解决不同媒体的体量差异。
    - **[Issue #7195] 全屏遮挡问题**：与具体平台交互细节相关的修复，优先级相对较低。

## 7. 用户反馈摘要

从今日的 Issues 评论中可以提炼出以下真实用户声音：

1.  **痛点：会话管理与稳定性仍是最大困扰**。用户的反馈集中在上文提到的各种 Bug 上（MCP 断连、数据库膨胀、WebView2 崩溃、空闲卡死等）。用户描述“只能关闭进程重新启动”、“我关注工作进程时…造成了严重的视觉干扰”，都显示他们在日常使用中遇到了明显的摩擦感。
2.  **期望：更强的自主性、更少的干扰**。用户多次提出希望**减少不必要的人工干预**（如 #7198 审批）和**视觉干扰**（如 #7196 推理过程、#7203 工具调用）。这表明用户期望 QwenPaw 能成为更可靠的“自动化工具”，让其从“陪伴”转向真正的“代理”。
3.  **社区反馈积极**：如 Issue #4816 用户抱怨会话排序不符合主流习惯，直接以“反人类设计”来评价，并主动调研了市面上所有主流产品的实现。用户在提出建议时给出了非常具体的场景和参考案例，这些反馈对项目改进非常有利。

## 8. 待处理积压

以下是长时间未响应或可能被忽略的重要问题，提醒维护者关注：

- **[Issue #6430] startup hang**: 创建于 7月24日，已近一个月。问题严重影响首次启动体验（约 85 秒卡顿），至今仍为 OPEN 状态。
    - **链接**: [Issue #6430](agentscope-ai/QwenPaw Issue #6430)
- **[Issue #6430] startup hang**: 创建于 7月24日，已近一个月。问题严重影响首次启动体验（约 85 秒卡顿），至今仍为 OPEN 状态。
    - **含义**：核心稳定性问题长期得不到解决，会加剧用户的负面反馈，风险较高。
- **[PR #5992] Add per-session model overrides**: 一个能够为单个 Agent 的不同会话指定不同模型的功能，自 7 月 12 日创建以来一直处于 “Under Review” 状态，耗时超过一个月。
    - **链接**: [PR #5992](agentscope-ai/QwenPaw PR #5992)
    - **含义**：这是一个呼声较高的 灵活配置功能，长时间未被审核可能会让潜在的贡献者感到挫败。
- **[Issue #4196] 历史对话排序问题**：用户对该问题的措辞相当激烈。虽然已有其他增强请求被关闭，但这一个仍为 OPEN，可能代表用户对此需求非常强烈。
    - **链接**: [Issue #4196](agentscope-ai/QwenPaw Issue #4196)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-22

## 1. 今日速览

ZeroClaw 在过去 24 小时保持高活跃度：共产生 50 条 Issue 更新（新开/活跃 49 条，关闭 1 条）和 50 条 PR 更新（48 条待合并，2 条已合并/关闭），日均流体量处于项目近期高位。Issue 池中 **S0/S1 级（数据丢失/工作流阻塞）问题持续存在**，尤其是 #10165（独立 delegate 绕过高风险命令拦截）和 #10066（SOP 引擎步骤顺序错乱），二者均被标记为 `risk:high` 且已有社区讨论但尚无对应修复 PR。今日无新版本发布，项目处于功能合并与问题修复并行的密集开发期。值得关注的是，多个长期悬而未决的高风险任务（#10164、#10199、#10202）均有对应 PR 在审（#10176、#10203、#10210），说明维护团队正在同步处理已知短板。

---

## 3. 项目进展

今日无 PR 被合并（1 条已关闭/合并的记录中无详细说明），但**大量高质量 PR 正在审查中**，多个直接对应已接受的 Issue：

| PR | 对应 Issue | 类型 | 状态 | 要点 |
|---|---|---|---|---|
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | #10121 | 修复 | 待合并 | **持久化 Code/ACP 中断的 turn 进度**，避免进程退出导致用户已见内容丢失（S0 级） |
| [#10210](https://github.com/zeroclaw-labs/zeroclaw/pull/10210) | — | 修复 | 待合并 | 为 agent-browser 子进程等待增加截止时间和 `kill_on_drop`，消除无界阻塞 |
| [#10203](https://github.com/zeroclaw-labs/zeroclaw/pull/10203) | #10202 | 修复 | 待合并 | **桥接 `log` facade 记录到 tracing 管线**，修复 whatsapp-rust 等依赖日志完全丢失的问题 |
| [#10209](https://github.com/zeroclaw-labs/zeroclaw/pull/10209) | — | 修复 | 待合并 | 将 pgvector 设置移入 postgres-memory-init 线程，避免 Tokio 运行时内 `block_on` 恐慌 |
| [#10208](https://github.com/zeroclaw-labs/zeroclaw/pull/10208) | — | 修复 | 待合并 | 修复 Windows 平台测试失败（路径转义、容器测试断言） |
| [#10096](https://github.com/zeroclaw-labs/zeroclaw/pull/10096) | #10086 | 功能 | 待合并 | ZeroCode Logs 文本可选可复制 |
| [#10201](https://github.com/zeroclaw-labs/zeroclaw/pull/10201) | #10200 | 功能 | 待合并（需作者操作） | WhatsApp Web 可从频道配置设置 `push_name` |

**架构级推进**：PR #10142（ZeroRelay 安全传输与浏览器注册入口）和 #10146（插件激活逻辑频道实例）均为 XL 级变更，若合并将显著增强远程安全和插件能力。

---

## 4. 社区热点

今日评论数最高的 Issue 集中在 **安全策略绕过** 和 **运行时上下文管理** 两大主题：

- **[#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)（3 评论）**: `independent delegate` 在自身 `risk_profile` 设置 `block_high_risk_commands = true` 时仍可执行 `rm` 等高风险命令。严重度 S0，`risk:high`，`r:needs-repro`。社区最关心的痛点在于**配置的安全策略存在绕过路径**，这直接动摇了对权限沙箱的信任。
- **[#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074)（3 评论，已关闭）**: SECURITY.md 引用了已删除的 CI job。已关闭但暴露了**文档与 CI 流程不同步**的问题。
- **[#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)（3 评论）**: 交互式 agent 会话的上下文窗口被硬编码为 32,000 tokens，忽略 `max_context_tokens = 131072` 配置。用户预期的高上下文配置未生效，影响长对话场景。
- **[#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)（3 评论）**: SOP 引擎在步骤输出 schema 校验失败后**仍先推进后续步骤**，再记录拒绝。S1 级，工作流可能执行了不应执行的步骤。

**PR 侧**：#10239（从任意配置别名读取 `interrupt_on_new_message`）为最新提交（8-22），修复了频道别名映射硬编码 `.get("default")` 的缺陷，是典型的配置健壮性改进。

---

## 5. Bug 与稳定性

按严重程度排列（S0 最高）：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| **S0** | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | 独立 delegate 绕过高风险命令拦截 | 开放，`r:needs-repro`，无对应 PR |
| **S0** | [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | Code/ACP 部分 turn 在进程退出时丢失 | 已有 PR [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) 待合并 |
| **S1** | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP 引擎在输出校验失败后仍推进后续步骤 | 开放，`status:accepted`，尚无 PR |
| **S1** | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Daemon 启动/重载时 Tokio worker 栈溢出 | 开放，`r:needs-repro` |
| **S2** | [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) | Google TTS API key 头未标记为敏感 | 开放，`status:accepted` |
| **S2** | [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | `block_high_risk_commands = false` + `allowed_commands` 仍被硬拦截 | 开放，`status:accepted`，无 PR |
| **S2** | [#10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202) | log 依赖记录从未到达 tracing subscriber | 已有 PR [#10203](https://github.com/zeroclaw-labs/zeroclaw/pull/10203) 待合并 |
| **S2** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | agent 会话上下文固定 32k，忽略配置 | 开放，`status:in-progress` |
| **S2** | [#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) | ZeroCode 在 daemon 退出后仍显示 Connected | 新开（8-22），无讨论 |

**稳定性信号**：多个 `r:needs-repro` 标签（#10165、#10230）表明部分高风险问题尚需可复现路径，维护者需要社区提供更多环境信息。

---

## 6. 功能请求与路线图信号

近期集中的功能请求揭示了三大方向，均有 PR 推动：

1. **流式响应与交互体验**（#10166 stream_mode 默认 partial、#10168 默认启用 stall watchdog、#10059 Option-Backspace） — 均已有 PR 或在 `status:accepted`。表明项目正在系统性地提升交互体验，下一版本很可能默认开启流式与超时保护。
2. **渠道能力补全**（#10200 WhatsApp push_name、#10140 iMessage 语音转写、#10138 Git Channel 进 Debian 镜像） — #10201 已在审查中，iMessage 转写尚无 PR。渠道生态正在向 Telegram/Slack/Discord 的对齐目标迈进。
3. **安全与合规深化**（#10173 Alpine 非 root 元数据 CI 强制、#10175 敏感头标记） — #10176 已提交 PR 对应前者。安全部门正在将文档中的承诺转化为 CI 硬性检查。

**路线图信号**：`zerorelay`（#10142，mTLS + CSR-only 签发）和 `zerorouter`（#9645，自托管 LLM 网关）两个 XL 级 PR 暗示项目正在建设**远程访问和企业级部署**能力，预计在后续版本中形成独立部署方案。

---

## 7. 用户反馈摘要

- **安全策略不一致**（来自 #10165、#10164）: 用户配置 `block_high_risk_commands = true` 发现可绕过，而配置 `false` + 白名单却仍被拦截 — 权限系统行为与直觉相悖，**双向不可信**。后续应统一策略评估路径。
- **长会话受限**（来自 #10068）: 用户明确配置 128k 上下文，交互界面仍显示 32k 上限并压缩。**配置不生效的体验严重削弱了对高级模型的使用价值**。
- **可复制性需求**（来自 #10086、#10058）: ZeroCode 日志文本无法选择复制、文件搜索无法用方向键移动 — 用户需要的是**基本的终端操作习惯**，而非全新交互范式。
- **部署与镜像维护**（来自 #10138）: Debian 镜像中 Git Channel 缺失，用户被迫自行编译。**多架构、多发行版的完整支持**仍是分发侧的缺口。

---

## 8. 待处理积压

| 项目 | 说明 | 等待时长 | 建议 |
|---|---|---|---|
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | S0 安全绕过，尚无 repro | 2 天 | 优先确认 repro 路径，考虑紧急修复分支 |
| [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | 白名单硬拦截，`status:accepted`，无 PR | 2 天 | 与 #10165 同属安全策略子系统，建议合并处理 |
| [#10161](https://github.com/zeroclaw-labs/zeroclaw/issues/10161) | 并行运行时测试 flaky，阻塞发布门禁 | 2 天 | 需在下一个 release 前稳定该测试 |
| [#10159](https://github.com/zeroclaw-labs/zeroclaw/issues/10159) | 发布工具链在原生 Linux/Windows 上未验证 | 2 天 | 发布门禁的前置条件，建议尽快安排验证 runner |
| [#10143](https://github.com/zeroclaw-labs/zeroclaw/issues/10143) | provider 调用计费生命周期不完整 | 3 天 | 对依赖用量计费的用户影响较大，建议纳入近期版本 |
| [#10061](https://github.com/zeroclaw-labs/zeroclaw/issues/10061) | 被拒图片污染后续 turn（S1） | 5 天 | 已有 `status:accepted`，长期未处理，建议排期 |

---

*报告生成时间：2026-08-22 | 数据源：ZeroClaw GitHub 仓库*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*