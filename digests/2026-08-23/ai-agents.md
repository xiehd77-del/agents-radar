# OpenClaw 生态日报 2026-08-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-23 01:25 UTC

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

# OpenClaw 项目动态日报 — 2026-08-23

## 1. 今日速览

OpenClaw 项目在 2026-08-23 维持了极高的社区活跃度。过去 24 小时内有 500 条 Issue 更新和 500 条 PR 更新，其中新增/活跃 Issue 475 条、待合并 PR 437 条，呈现出大规模协作和密集开发的双重特征。然而，一个显著的信号是：**当日合并/关闭的 PR 仅 63 条（约 12.6%），大量 PR 处于待合并状态**，这可能反映出维护者审查带宽与提交速度之间存在差距。无新版本发布，项目仍停留在 v2026.8.1-beta.2 的验证阶段。值得关注的是，近期出现了两个 P0 级严重问题（`#126821` SQLite 递归损坏、`#124788` 事件循环周期性阻塞），且均与 beta.2 版本相关，发布验证工作（`#125626`）仍在进行中。与此同时，`clawsweeper-automation` 在持续产出修复 PR，项目整体保持着"高活跃度、高积压、高维护压力"的三高状态。


## 2. 版本发布

过去 24 小时内无新版本发布。当前最新版本仍为 **v2026.8.1-beta.2**，该版本的发布验证 Issue（[#125626](https://github.com/openclaw/openclaw/issues/125626)）正在由社区成员协同推进，且近期报告的 P0 级稳定性问题（`#126821`、`#124788`）均与该 beta 版本相关，后续正式版本发布可能因此推迟。


## 3. 项目进展

过去 24 小时合并/关闭了 63 条 PR。以下为重要合并/关闭条目，按影响面由高到低排列：

### 已合并/关闭

- **插件安装策略警告审核机制**（[#120900](https://github.com/openclaw/openclaw/pull/120900) 已关闭、[#116489](https://github.com/openclaw/openclaw/pull/116489) 已关闭）— 这是本周最具战略意义的改动之一：新增 `acknowledgeInstallPolicyWarning` 选项，管理员可在控制 UI 中审核并确认风险插件的安装；`security.installPolicy` 命令可返回 `warn` 级别。两 PR 合并后，**插件/技能安装的安全边界得到了实质性增强**，对供应链安全有直接价值。
- **控制 UI 中保留 Claude CLI OAuth**（[#125471](https://github.com/openclaw/openclaw/pull/125471) 已关闭）— 修复 Gateway 重启后 Claude CLI OAuth 因遗留 `auth.profiles` 配置导致刷新所有权丢失的问题，对使用 Claude 作为后端的用户有直接影响。
- **对话交付限定在 agent bindings 内**（[#126424](https://github.com/openclaw/openclaw/pull/126424) 已关闭）— 修复多 agent 操作者使用对话工具时消息可能逃逸到错误绑定的问题，覆盖 Discord、Slack、Telegram、Feishu 等全部主流渠道，**涉及 message-delivery 和 security-boundary 双重风险标注**。

### 仍处于开放状态的新兴修复

- **恢复 HTTP 子代理完成通知**（[#128068](https://github.com/openclaw/openclaw/pull/128068)）— 修复 `POST /v1/responses` 和 `POST /v1/chat/completions` 用户静默丢失子代理完成通知的问题，当前需要维护者审查。
- **隔离取消所有权契约**（[#127186](https://github.com/openclaw/openclaw/pull/127186)）— 针对 realtime Talk 的延迟/过期取消 RPC 可能取消替换轮次的深层问题。
- **Tool Search 模式修复**（[#126618](https://github.com/openclaw/openclaw/pull/126618)）— 修复 Tool Search `directory`/`tools` 模式导致 openai-completions 模型把普通 `read`/`exec` 调用为元 `tool_call` 导致卡死的问题。

**评述**：当日合并的 PR 多数是"防御性修复"（安全边界、OAuth 所有权、消息投递），项目整体在**稳定性加固和安全性硬化的方向上迈出了实质一步**，但大量修复性质的 PR（437 条）仍卡在审查环节，形成"修复积压"。


## 4. 社区热点

### 最受关注 Issue

| 排名 | Issue | 评论数 | 👍 | 核心诉求 |
|------|-------|--------|-----|----------|
| 1 | [#125626](https://github.com/openclaw/openclaw/issues/125626) — v2026.8.1-beta.2 发布验证 | 19 | 0 | 社区协作推进 beta 验证流程，确保发布质量 |
| 2 | [#68596](https://github.com/openclaw/openclaw/issues/68596) — 可配置流式看门狗超时 | 15 | 8 | 长思考模型（kimi-k2.5、DeepSeek-R1）触发频繁误报，用户需要可调阈值 |
| 3 | [#96834](https://github.com/openclaw/openclaw/issues/96834) — WhatsApp 图片消息阻塞主通道 | 14 | 1 | 多模态输入导致消息通道停顿约 3 分钟，影响实时交互体验 |
| 4 | [#51429](https://github.com/openclaw/openclaw/issues/51429) — 工作路径被 hardcode 合并发布 | 12 | 0 | 明显的代码审查事故，社区强烈不满（中文 Issue） |
| 5 | [#85030](https://github.com/openclaw/openclaw/issues/85030) — MCP 工具未注入子代理会话 | 12 | 6 | 配置了 `bundle-mcp` 和允许列表但子代理只收到内置工具，配置被完全忽略 |

**热点背后的诉求**：(1) 社区对**发布质量控制**高度关注，历史上有 hardcode 路径被合并的教训，因此对 beta 验证流程的参与度很高；(2) 长思考模型逐渐普及，**基础设施需要适配新的模型行为模式**（如流式输出间隔变长）；(3) 多模态输入是高频需求，但当前实现存在主通道阻塞问题。


## 5. Bug 与稳定性

### P0 级（严重）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | **SQLite 损坏在全新重建的数据库上 15-24 小时内递归复发**（5 天内 5 次，WSL2），并出现"瘫痪网关"模式，拒绝一切服务但不退出进程 | ⚠️ 无 fix PR |
| [#124788](https://github.com/openclaw/openclaw/issues/124788) | **Gateway 事件循环每约 10 分钟阻塞约 100 秒**（锚定定时器 + 字符串拼接 + 文件系统扫描），禁用所有内存插件后仍然存在，影响 WebSocket、HTTP 和 cron 调度 | ⚠️ 无 fix PR（均与 beta.2 相关） |

### P1 级（高优先）

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory 插件阻塞回复，QMD 启动初始化可能使多 agent 网关过载 | ❌ 无 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理完成通知在直接通知超时/排空/孤儿清理时可能丢失 | ❌ 无 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 刷新成功但 cron/心跳因 10 秒超时失败 | ❌ 无 |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | 未处理的 Playwright CDP 断言错误导致整个 Gateway 崩溃 | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未回收，僵尸进程累积导致运行时性能下降 | ❌ 无 |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | exec/read 工具在 Windows 上静默返回空输出（v2026.6.x 回归） | ❌ 无 |
| [#124284](https://github.com/openclaw/openclaw/issues/124284) | v2026.8.1-beta.2 新增流包装器与 vLLM openai-completions 冲突，子代理生成畸形 XML 工具调用 | ❌ 无 |
| [#108215](https://github.com/openclaw/openclaw/issues/108215) | 大工具输出后上下文使用率从 57% 静默降至 13%（无压缩） | ❌ 无 |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | 大工具输出超出上下文窗口，压缩无法恢复，会话进入失败循环 | ❌ 无 |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 拒绝 write 工具静默禁用内存持久化，agent 仍报告保存成功 | ❌ 无 |

**当前已有关联 fix PR 的 P1 问题**：
- [#117609](https://github.com/openclaw/openclaw/issues/117609) — 嵌入式助手阶段缺少瞬时错误重试 → 关联 PR 开放中
- [#112196](https://github.com/openclaw/openclaw/issues/112196) — memory_search 超时掩盖为持久性故障 → 关联 PR 开放中

**Bug 趋势总结**：会话状态管理（session-state）和消息丢失（message-loss）是影响面最大的两类问题。大量 P1 问题集中在子代理完成通知、上下文管理和多模态输入处理上。特别值得注意的是 P0 级 SQLite 数据库递归损坏问题（`#126821`），这是在全新重建、已验证完整性良好的数据库上复发的严重缺陷，暗示可能存在深层的写入逻辑问题。


## 6. 功能请求与路线图信号

### 可能纳入下一版本的功能

- **可配置流式看门狗超时**（[#68596](https://github.com/openclaw/openclaw/issues/68596)）：长思考模型的普及使得 30 秒固定超时不再适用。Issue 获得 8 个 👍，社区需求强烈。注释中的 `clawsweeper:needs-product-decision` 表明已进入产品决策阶段，是下一版本的高概率候选。

- **优雅网关重启与会话恢复**（[#57425](https://github.com/openclaw/openclaw/issues/57425)）：所有进行中的工作在被杀死时无通知、无恢复机制。需求本质是提高系统的容错性和可恢复性，对生产环境部署是刚需。

- **UI 质量更新**（[#75947](https://github.com/openclaw/openclaw/issues/75947)）：用户明确反馈"UI 看起来像 AI 生成的代码"，要求基于可访问性和人体工程学重新设计。此诉求与近年 UI 投入形成呼应，但未有明确 PR 指向。

### 已具备 fix PR、有望合入的功能

- **Tool Search 目录/工具模式修复**（[#126618](https://github.com/openclaw/openclaw/pull/126618)）
- **恢复 HTTP 子代理完成通知**（[#128068](https://github.com/openclaw/openclaw/pull/128068)）
- **插件持久会话状态暴露**（[#127982](https://github.com/openclaw/openclaw/pull/127982)）：外部插件无法读取自己的持久会话扩展状态，合入后将增强插件生态能力。


## 7. 用户反馈摘要

### 主要痛点

- **Windows 平台体验不完整**（`#105528`）：exec/read 工具静默返回空输出，基础功能不可用，说明 Windows 作为一等公民的承诺尚未兑现。
- **代码审查质量受到质疑**（`#51429`）：工作路径被 hardcode 合并发布的行为严重打击社区信任，用户用"居然被合并发布了"表达惊讶和不满。
- **安全边界的静默失效**（`#126906`）：拒绝某个工具后，agent 仍报告内存保存成功，用户无法感知持久化已被静默禁用，导致数据安全和可靠性隐患。
- **初始化速度与超时冲突**（`#82662`）：隔离 cron agentTurn 在所有 6 个备用模型上超时，且发生在 LLM 调用之前，说明调度/初始化链路存在瓶颈。

### 正面反馈

- **子代理 spawn 和会话管理相对稳定**，关于 ACP、嵌入式助手等扩展功能的 Issue 数量在下降，侧面对核心功能稳定性的认可。
- **社区对发布验证流程的广泛参与**：`#125626` 有 19 条评论，多位贡献者协作推进 beta 验证，体现出用户对这个项目的归属感和责任感。


## 8. 待处理积压

### 长期未响应或停滞的重要 Issue

| Issue | 创建时间 | 天数 | 问题简述 |
|-------|---------|------|----------|
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | 2026-03-19 | 157 天 | Plugin Hooks 缺少分布式追踪上下文（messageId、runId、parentSpanId），影响可观测性 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 2026-03-21 | 155 天 | 工作路径 hardcode 合并发布（已标记 stale，但用户强烈关注） |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | 2026-03-13 | 163 天 | Discord 路由/提及门控回归问题 |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | 2026-03-13 | 163 天 | 未处理的 Playwright 断言错误导致 Gateway 崩溃 |
| [#33102](https://github.com/openclaw/openclaw/issues/33102) | 2026-03-03 | 173 天 | TUI 缺少 `--deliver` 标志默认值配置支持 |
| [#68187](https://github.com/openclaw/openclaw/issues/68187) | 2026-04-17 | 128 天 | SSE 后端 MCP 会话在服务器重启后保持陈旧状态，报 "Session not found" |
| [#72370](https://github.com/openclaw/openclaw/issues/72370) | 2026-04-26 | 119 天 | 工作区 hooks 被拒绝为"无法覆盖由 openclaw 管理的 hook 代码"，被替换为空版本 |

### 需维护者注意的 PR 积压

- 大量 PR 标注 `merge-risk: 🚨 compatibility` 或 `🚨 security-boundary`，需要审查者特别关注，如 [#91268](https://github.com/openclaw/openclaw/pull/91268)（doctor 误报 trusted-proxy 未认证）、[#123046](https://github.com/openclaw/openclaw/pull/123046)（msteams 共享链接主机后缀匹配需点边界）等
- 部分 PR 标注 `⏳ waiting on author`（如 [#127186](https://github.com/openclaw/openclaw/pull/127186)、[#88908](https://github.com/openclaw/openclaw/pull/88908)、[#123975](https://github.com/openclaw/openclaw/pull/123975)、[#121603](https://github.com/openclaw/openclaw/pull/121603)），需作者回应或补充。

### 积压风险提示

- **已标记 stale 的 P1 问题**：`#85030`（MCP 工具未注入子代理，P1 + platinum hermit 评分）和 `#89278`（Codex OAuth 10 秒超时，P1）均已标记 stale 且无 fix PR，可能因长期搁置而丢失上下文。
- **P0 问题无及时响应**：`#126821`（SQLite 损坏）和 `#124788`（事件循环阻塞）均与 beta.2 相关且无 fix PR，这直接影响 v2026.8.1 正式版本能否按期发布。

---

## 横向生态对比

好的，这是基于您提供的各项目动态摘要生成的横向对比分析报告。

---

### 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**密集开发与架构转型并行**的高速成长期。头部项目（OpenClaw、Hermes Agent、ZeroClaw）通过大规模 PR 合并和 RFC 讨论，向**安全硬化、稳定性加固、架构插件化/模块化**方向纵深推进，同时普遍面临“高活跃度、高积压、高维护压力”的三高挑战。腰部项目（NanoBot、IronClaw、PicoClaw 等）则聚焦于**特定场景的体验优化与兼容性适配**，社区贡献者活跃，但 PR 审查周期和合并积压成为共性瓶颈。整体来看，生态正从“功能堆叠”转向“质量巩固与架构演进”，**长思考模型适配、多模态输入、跨平台一致性、上下文/成本管理**已成为跨项目的共同技术焦点。

---

### 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | 待合并 PR | Release | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 63 (12.6%) | 437 | v2026.8.1-beta.2 | **高活跃，高压**：合并率低，P0 bug 未修复，发布受阻。 |
| **Hermes Agent** | 50 | 50 | 7 (14%) | 43 | - | **高活跃**：多组PR集中修复同类问题，安全修复效率高。 |
| **ZeroClaw** | 50 | 50 | 7 (14%) | 43 | v0.8.3 | **架构转型期**：高比例 `risk:high` PR，关注合并积压与决策链。 |
| **IronClaw** | 30 (合计) | 30 (合计) | 5 | 25 | - | **高活跃，稳定**：无高危 Bug，CI 提速与后台子代理是重点。 |
| **NanoClaw** | 1 | 26 | 8 | 18 | - | **健康，积极**：系统性消化历史积压，设置向导与 Telegram 为焦点。 |
| **NanoBot** | 0 | 20 | 6 | 14 | - | **健康，迭代快**：核心开发聚焦 WebUI 与 Provider 架构重构。 |
| **PicoClaw** | 2 | 6 | 4 | 2 | - | **中等活跃**：清理积压中，但 MCP 挂起严重 Bug 待合并。 |
| **Moltis** | 1 | 3 | 0 | 3 | - | **温和**：聚焦外部生态兼容性适配，无核心风险。 |
| **CoPaw** | 7 | 4 | 0 | 4 | - | **良好**：无合并，但社区贡献质量高，功能增强方向明确。 |
| **LobsterAI** | 2 | 6 (含关闭) | 5 | 1 | - | **稳定，消化旧账**：集中于旧任务清理，无新需求涌入。 |
| **TinyClaw / NullClaw / ZeptoClaw** | 0 | 0 | 0 | 0 | - | **无活动** |

---

### 3. OpenClaw 在生态中的定位

OpenClaw 作为核心参照项目，在生态中扮演着**“基础设施级”平台**的角色，其定位与同类项目有显著差异：

- **社区规模与协作密度**：其单日 500 条 Issue/PR 更新的量级（是第二梯队项目的 10 倍）展现了绝对领先的社区规模和协作密度，这是其作为生态“中心枢纽”的体现。
- **技术路线差异**：相较于 Hermes Agent（侧重多 profile 与 SOUL 交接）和 ZeroClaw（侧重 Rust 原生与 WASM 插件化），OpenClaw 更侧重于**通用网关与多平台消息适配**（Discord、Slack、Telegram 等）以及 **Agent 核心运行时的稳定性**。其 P0 级 SQLite 递归损坏和事件循环阻塞问题，正是其作为高负载、长驻守网关所面临的独特且严峻的稳定性挑战。
- **安全边界与合规**：与 Moltis 关注安全钩子 fail-closed 策略不同，OpenClaw 本周的改动（如插件安装策略警告、对话交付隔离）更偏向于**平台级的供应链安全与多租户数据隔离**，体现了其为大规模、企业级应用场景铺路的意图。
- **痛点**：OpenClaw 庞大的 PR 积压（437条）和仅为 12.6% 的合并率，反映出其维护者审查带宽严重不足，已成为制约其快速迭代的主要瓶颈。相比之下，NanoClaw、PicoClaw 等轻量级项目的合并率更高，迭代节奏更轻快。

---

### 4. 共同关注的技术方向

多个项目不约而同地涌现出以下技术需求，反映了行业共性痛点：

| 技术方向 | 涉及项目 | 具体诉求 |
| :--- | :--- | :--- |
| **长思考模型适配** | OpenClaw, Hermes Agent | 流式输出间隔变长导致看门狗误报，需要 **可配置的流式超时** 机制。 |
| **上下文与成本管理** | OpenClaw, Hermes Agent, IronClaw | 长会话导致 Token 消耗激增、上下文压缩失效、会话死亡。IronClaw 提出“上下文压缩屏障”，OpenClaw 有“上下文使用率静默下降”等问题。 |
| **MCP 集成稳定性** | PicoClaw, Moltis, OpenClaw, Hermes Agent | MCP 服务器连接失败导致 Agent 挂起、客户端状态陈旧、配置（如 `bundle-mcp`）被忽略等。 |
| **跨平台一致性** | OpenClaw, Hermes Agent, ZeroClaw | Windows 平台功能缺失（Docker 路径、exec 工具、测试失败），桌面端安装/更新体验差。 |
| **安全边界硬化** | OpenClaw, Moltis, Hermes Agent, CoPaw | 安全钩子/策略在故障时静默失效、OAuth 凭据管理漏洞、反射型 XSS 等，要求“**宁可失败，不可绕过**”的默认安全值。 |
| **主动可观测性** | NanoBot, IronClaw, ZeroClaw | WebUI 需要展示 Token 用量、推理过程、工具调用等“可信”的可观测数据，后端需要统一用量契约。 |
| **后台/异步任务** | IronClaw, ZeroClaw | 引入后台子代理（subagent）、AfterTurn 钩子、WASM 插件等机制，实现异步任务处理与功能解耦。 |

---

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全渠道、多 Agent 网关，企业级稳定性和安全边界 | 中大型团队、开发者、企业用户 | **中心化网关**，丰富的消息适配器，插件化生态（技能），注重审计与安全策略。 |
| **Hermes Agent** | 多 Profile（SOUL）与多机器人流水线，OAuth 集成 | 高级开发者、自动化工作流设计者 | **Profile 驱动**的会话管理，强调与第三方服务（如 Anthropic、Codex）的深度集成。 |
| **ZeroClaw** | Rust 原生性能，WASM 插件化，SOP（标准操作程序）控制平面 | 对性能和可定制性有极致追求的技术用户 | **Rust 核心**，WASM 插件实现热插拔，配置和流程控制（SOP）高度灵活。 |
| **IronClaw** | Coding Agent 能力，CI/测试基础设施，成本控制 | 软件开发者、DevOps 团队 | 聚焦 **代码生成、工具链（`read/write/exec`）和沙箱安全**，基准测试驱动开发。 |
| **NanoBot/NanoClaw** | WebUI/Telegram 等单渠道的极致体验优化 | 个人用户、轻量级使用者 | **轻量级、开箱即用**，聚焦在特定交互入口（如 WebUI、Telegram）的打磨。 |
| **PicoClaw** | CLI 驱动的轻量级助手，Cron 自动化 | 开发者、个人自动化爱好者 | **Go 语言实现**，注重命令行交互与后台任务调度。 |
| **Moltis** | AI 代理无线自动化（wireless automation），OpenAI 兼容层 | 网络工程师、自动化脚本开发者 | **专注于代理间的无线通信与互操作**，适配 OpenAI 工具标准是核心策略。 |
| **CoPaw** | 高级用户定制，跨设备浏览器控制 | 开发者、需要复杂多模态交互的用户 | 支持 **局域网远程浏览器控制**，关注运行时（模型、媒体）资源的精细管理。 |
| **LobsterAI** | 会话管理与文本导出，Cowork 场景 | 内容创作者、知识工作者 | 偏向 **交互体验细节**优化，如会话重试、Markdown 导出、重命名反馈。 |

---

### 6. 社区热度与成熟度

- **快速迭代 & 架构演进期**：**OpenClaw**（高热度但被 P0 bug 和 PR 积压拖累）、**ZeroClaw**（RFC 和大型重构并行，处于 v0.9.0 关键转型期）、**IronClaw**（CI 提速和后台子代理多点开花）。这些项目功能更新快，但伴随较大的不稳定性和迁移成本。
- **质量巩固 & 体验优化期**：**NanoBot**（WebUI 重构与 Provider 架构优化）、**NanoClaw**（系统清理历史积压，聚焦设置向导和 Telegram 系列修复）、**Hermes Agent**（多 PR 集中修复同类问题，安全响应快）、**LobsterAI**（有序消化旧账，稳步引入新功能）。
- **稳定维护 & 兼容性适配期**：**PicoClaw**（合并旧 PR，处理 MCP 和 Telegram 等特定 Bug）、**CoPaw**（依赖社区 PR 稳步推进）、**Moltis**（主动适配外部生态变化，如 OpenAI 和 Browserless）。
- **停滞期**：**TinyClaw / NullClaw / ZeptoClaw** 无活动，可能已停止维护或处于休眠状态。

---

### 7. 值得关注的趋势信号

1.  **“上下文即成本”意识觉醒**：IronClaw 和 OpenClaw 的 Issue 表明，开发者开始将 Token 消耗作为**核心性能指标**来驱动架构优化，而不只是模型准确率。上下文压缩、预算提示注入等策略将成为下一代 Agent 框架的标配。
2.  **安全机制走向“Fail-Closed”**：从 Moltis 的“安全钩子失败阻断”到 OpenClaw 的“插件安装策略警告”，社区强烈要求安全机制在自身故障时**默认采用拒绝策略**，而非“优雅降级”，以防止安全边界“静默失守”。
3.  **MCP 集成成最大“摩擦点”**：MCP 的普及带来了一波新的稳定性挑战。连接失败、配置失效、客户端状态陈旧等问题跨项目频发，**MCP 客户端的健壮性和错误恢复机制**是当前最集中的技术痛点之一。
4.  **插件化与模块化成为架构演进主旋律**：ZeroClaw 的 WASM 插件化、IronClaw 的 AfterTurn 钩子、OpenClaw 的插件安装审核，都指向一个趋势：单体 Agent 正在向**运行时核心 + 可插拔能力**的架构演变，以实现功能解耦和生态共建。
5.  **对开发者体验（DX）的重视**：从 NanoClaw 的设置向导改进、ZeroClaw 的 CLI 行为可预期性（警告覆盖）、到 LobsterAI 的错误重试按钮，都体现了项目开始将**开发者/高级用户的配置和使用体验**提升到与核心功能同等重要的地位。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期**: 2026-08-23  
**数据统计周期**: 2026-08-22 00:00 - 2026-08-23 00:00 (UTC)

---

## 1. 今日速览

NanoBot 项目在过去 24 小时内保持高活跃度，虽然无新版本发布且 Issues 层面零更新，但 Pull Request 活动异常密集，共 20 条 PR 产生更新，其中 6 条已合并/关闭（含 3 条历史 PR 于今日关闭），14 条待合并。核心开发方向集中在 WebUI 体验优化（答案分段合并、Token 用量展示、文件预览、后续追问建议）与 Provider 层架构重构（类型化 LLM 用量契约、统一轨迹记录），同时有 4 条 PR 今日新开且已标记为存在合并冲突。整体来看，项目正处于 1.8k+ star 量级生态快速迭代阶段，社区贡献者参与度高，代码审查与合并节奏紧凑。

---

## 3. 项目进展

### 已合并/关闭 PR（6 条）

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#5488](https://github.com/HKUDS/nanobot/pull/5488) | docs: refresh team and contributor credits | ✅ 已合并 | 更新维护者信息（Xubin Ren、Yongru Chen），替换 contrib.rocks 图片为原生响应式头像墙，收录所有非机器人贡献者 |
| [#5486](https://github.com/HKUDS/nanobot/pull/5486) | feat(webui): unify turn observability | ✅ 已合并 | WebUI 每轮对话统一为一个答案面板，保留推理/工具/文件编辑分段，折叠已完成的实时活动，展示可信的每轮输入输出 Token 用量 |
| [#4430](https://github.com/HKUDS/nanobot/pull/4430) | feat(web): configure web_fetch provider | ✅ 已关闭（合并） | 将 `web_fetch` 从单一 `useJinaReader` 开关升级为可配置 provider（auto/tavily/jina/readability），在 WebUI 中提供显式选择 |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | fix(providers): DeepSeek message hardening | ✅ 已关闭 | 修复 DeepSeek 系列模型的三个问题：null content 导致 400 错误、"(empty)" 占位符泄漏到对话、assistant 文本被无条件丢弃 |
| [#3294](https://github.com/HKUDS/nanobot/pull/3294) | feat(dream): optional kill switch + custom template paths | ✅ 已关闭（合并） | Dream 自学习循环增加两个配置项：`enabled` 开关（默认 True）与自定义 Phase 1/2 模板路径 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram): recover from silently stalled polling | ✅ 已关闭（合并） | 修复 Telegram 轮询在网络闪断后永久静默的问题，增加自动恢复机制 |

**分析**: 今日合并的核心亮点是 **WebUI 可观测性统一**（#5486）与 **web_fetch provider 可配置化**（#4430），以及 **Telegram 稳定性修复**（#5156）——后者解决了生产环境中的长期隐患。另有3条 PR 为社区早期贡献（#3869、#3294、#4430），历经数月终获合并，说明维护者正在加速清理历史积压。

### 📌 值得关注的新进展

- **[#5480](https://github.com/HKUDS/nanobot/pull/5480)** refactor(providers): define typed LLM usage contract — Provider 层正在从动态字典切换为不可变类型化用量契约，统一 OpenAI/Anthropic/Bedrock 的 Token 语义。这是架构层面的重要重构。
- **[#5481](https://github.com/HKUDS/nanobot/pull/5481)** feat(trajectory): add unified provider usage backend — 基于 #5480 的叠加 PR，为每次重试管理的 Provider 尝试（含回退、错误、取消）记录轨迹行。

---

## 4. 社区热点

今日无高评论量 PR（所有 PR 评论数均为 undefined/0），但以下 PR 值得关注：

| PR | 关注点 | 分析 |
|---|---|---|
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | Provider 用量契约类型化重构 | 由核心贡献者 chengyongru 连续提交（#5480/#5481/#5490/#5491/#5469），涉及 Provider 层、Trajectory 层、WebUI 与 TUI 的全链路改动，属于当前开发的主线方向 |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | WebUI 追加追问建议 | 目标是匹配 DeerFlow 交互体验（空输入框直接发送、有草稿则追加），生成对话场域内的临时建议，已存在 5 天且带冲突标记 |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | WebUI Agent 活动本地化 | 覆盖 10 种语言，且切换语言时即时生效，保留原始工具值（路径/命令/URL 等）。已存在 9 天，同样带冲突标记 |

**分析**: 当前热点集中于 **WebUI 交互体验升级** 与 **Provider 用量统计架构**。三个 PR 带有合并冲突标记（#5408、#5367、#5487、#5469），说明 WebUI 端并行改动较多，需要维护者协调合并顺序。

---

## 5. Bug 与稳定性

### 🔴 高严重度

| 问题 | 状态 | 说明 |
|---|---|---|
| **Telegram 轮询静默卡死** | ✅ 已修复（[#5156](https://github.com/HKUDS/nanobot/pull/5156)） | 网络闪断后机器人永久停止接收消息，日志保持静默。生产环境已观测到。今日合并修复 |
| **DeepSeek null content 导致 400** | ✅ 已修复（[#3869](https://github.com/HKUDS/nanobot/pull/3869)） | tool/user 消息 content 为 null 时 API 直接拒绝；"(empty)" 占位符泄漏到对话中。今日关闭 |

### 🟡 中严重度（已有修复 PR 待合并）

| 问题 | 修复 PR | 说明 |
|---|---|---|
| 已删除会话被延迟消息重建 | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | 跨会话延迟消息在会话删除后仍可能触发重建，需标记消息为需存在会话 |
| MCP 业务错误未被识别 | [#5484](https://github.com/HKUDS/nanobot/pull/5484) | 某些 MCP 服务器在 `isError=false` 时通过内容嵌入错误负载，Agent 误判为成功 |
| 原生 Provider 丢失 LangSmith 追踪 | [#5485](https://github.com/HKUDS/nanobot/pull/5485) | LiteLLM→原生 SDK 迁移移除了 LangSmith 回调，需在原生客户端边界重新包装 |
| 临时运行未保持会话状态 | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | `run(ephemeral=True)` 文档声明不持久化，但实现仍修改了会话状态 |
| WebUI 答案文本隔离问题 | [#5491](https://github.com/HKUDS/nanobot/pull/5491) | 答案 → 工具 → 答案 多轮交替时，答案片段需合并为一个最终消息，推理/工具活动保留在活动面板 |
| 聚合轮次的 Token 用量不清晰 | [#5490](https://github.com/HKUDS/nanobot/pull/5490) | 聚合多 prompt-token 报告的轮次缺少模型调用次数显示，需在 tooltip 中展示最新请求上下文 |

### 🟢 低严重度

| 问题 | 修复 PR | 说明 |
|---|---|---|
| TUI 页脚显示错误上下文 | [#5469](https://github.com/HKUDS/nanobot/pull/5469) | 后端保留累计 Token 用量，但 TUI 空闲页脚应展示最新 provider 报的实际请求上下文 |

---

## 6. 功能请求与路线图信号

| 功能 | 相关 PR | 状态 | 纳入下一版本可能性 |
|---|---|---|---|
| **WebUI 追加追问建议** | [#5408](https://github.com/HKUDS/nanobot/pull/5408) | 待合并，有冲突 | ⭐⭐⭐ 高 — 明确对标 DeerFlow，体验提升显著 |
| **Agent 活动本地化（10 语言）** | [#5367](https://github.com/HKUDS/nanobot/pull/5367) | 待合并，有冲突 | ⭐⭐⭐ 高 — 国际化重要一步 |
| **文件预览面板增强** | [#5487](https://github.com/HKUDS/nanobot/pull/5487) | 待合并，有冲突 | ⭐⭐⭐ 高 — Markdown 渲染 + 系统打开 + 路径基准对齐 |
| **用户控制的轮次恢复** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) | 待合并 | ⭐⭐ 中 — 中断会话持久化侧车检查点，显式 Continue/Dismiss |
| **统一 Provider 用量后端** | [#5480](https://github.com/HKUDS/nanobot/pull/5480) + [#5481](https://github.com/HKUDS/nanobot/pull/5481) | 待合并，核心贡献者推进 | ⭐⭐⭐ 高 — 架构级重构，为后续可观测性打基础 |
| **Email 频道性能优化** | [#5489](https://github.com/HKUDS/nanobot/pull/5489) | 待合并 | ⭐⭐ 中 — 先取 headers 再取 body，用 UID SEARCH 跳过重复下载 |

---

## 7. 用户反馈摘要

- **DeepSeek 用户长期痛点终获修复**（#3869）：此前 400 错误与 "(empty)" 占位符泄漏会直接劣化对话质量，该 PR 已关闭。
- **Telegram 频道稳定性诉求**（#5156）：生产环境轮询静默失败是最严重的渠道问题之一，本次修复获得合并，用户反馈积极性高。
- **email 频道性能瓶颈**（#5489）：每次轮询全量下载 `UNSEEN` 消息体后才做过滤，且 rejected 消息会反复重新拉取。提交者 tilladam 明确指出"这是浪费"。
- **WebUI 可观测性诉求**（#5486/#5490/#5491）：用户在意的不仅是功能本身，而是每次对话的 Token 消耗、推理过程、工具调用是否足够透明。

---

## 8. 待处理积压

### ⚠️ 长期未合并的关键 PR

| PR | 标题 | 开放时间 | 状态与建议 |
|---|---|---|---|
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | feat(webui): localize agent activity（10 语言） | 10 天 | 今日有更新但存在冲突，需解决后合并 |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | feat(webui): add follow-up suggestions | 6 天 | 有冲突，WebUI 并行改动频繁，建议尽快协调 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(runtime): add user-controlled turn recovery | 5 天 | 无冲突但未获关注，功能完整性已具备 |

### ⚠️ 今日新开但已标记冲突的 PR（需尽快处理）

- [#5487](https://github.com/HKUDS/nanobot/pull/5487) — file preview fixes + subagent activity
- [#5469](https://github.com/HKUDS/nanobot/pull/5469) — TUI measured request context

### 📌 维护者关注建议

1. **#5480/#5481 依赖链**：chengyongru 的 Provider 重构系列是当前主线，建议优先评审以避免冲突扩大。
2. **冲突 PR 批量积压**：4 条 PR 同时带 conflict 标记，说明 WebUI 端共享代码改动频繁，建议维护者集中处理。

---

*报告生成时间: 2026-08-23 00:00 UTC | 数据来源: github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-23

## 1. 今日速览

今日 Hermes Agent 项目保持高活跃度。过去 24 小时 Issue 更新 50 条（新开/活跃 48 条，关闭 2 条），PR 更新 50 条（待合并 43 条，已合并/关闭 7 条）。社区提交的 Bug 报告集中在安装更新（Install/Update）、会话状态（Session State）和平台兼容性（Windows）三个高风险区域。值得关注的是，多组 PR 正在尝试修复同一类问题（如桌面端 Pin 同步、Windows Docker 挂载路径），表明社区正在对既有痛点进行集中攻坚。同时，两项社区贡献的 PR（OAuth 反射型 XSS 修复、用户自定义定价覆盖）已与原始 PR 合并叠加，体现出协作效率。项目整体处于**密集开发与快速迭代**状态，但大量待合并 PR（43 条）也意味着维护者的合并带宽可能成为瓶颈。

---

## 3. 项目进展

今日合并/关闭的 7 条 PR 中，以下 3 条对项目推进最为关键：

- **[PR #92610 — fix(gateway): preserve POSIX Docker mount paths on Windows (已关闭)](https://github.com/NousResearch/hermes-agent/pull/92610)**：由 `wodesiku` 提交，修复了 Windows 主机上 Docker 后端容器内媒体路径无法映射回宿主机的核心问题。此前 Docker agent 生成的文件（如 `/workspace/report.pdf`）无法在原生媒体投递中返回 `None`，直接导致文件无法发送给用户。该 PR 解决了 Windows + Docker 组合下的一个长期缺陷。

- **[PR #92612 — fix(security): OAuth callback page no longer reflects the error param as raw HTML (开启中, 叠加 #6723)](https://github.com/NousResearch/hermes-agent/pull/92612)**：由 `teknium1` 提交，是 #6723（`memosr` 的原始修复）的修复版。该 PR 修复了 MCP OAuth 回调页面的反射型 XSS 漏洞——攻击者可构造 `http://127.0.0.1:<port>/callback?error=<script>...` 在用户浏览器上下文执行脚本。本地机密回调页消除 XSS 是重要的安全加固。

- **[PR #92465 — fix(memory): serialize Honcho session flushes (已关闭)](https://github.com/NousResearch/hermes-agent/pull/92465)**：由 `1052326311` 提交，修复了 Honcho 会话刷新的竞态条件。原先读/发/标记序列对同一 Honcho 会话并发执行，异步写入与关停之间存在竞争窗口。该 PR 引入每会话序列化机制，并附带确定性双线程回归测试（修复 #92458）。这标志着在 Agent 记忆/会话一致性方面的实质性进展。

此外，`teknium1` 提交的 PR #92613（用户自定义定价）和 PR #92612（OAuth XSS）实质上是对社区原始 PR 的激活与合流，表明维护者正在主动整合社区贡献。

---

## 4. 社区热点

- **[Issue #66616 — Skills index is stale or degraded (78 条评论)](https://github.com/NousResearch/hermes-agent/issues/66616)**：由 `nousbot-eng` 自动创建的新鲜度探针报告，显示 Skills Hub 索引已过期 29.8 小时（限制 26 小时）。78 条评论的高热度表明该自动探针已多次触发降级告警，社区成员对于自动化管线（`skills-index.yml` 和 `deploy-site.yml`）为何无法按期重建索引存在大量讨论。**背后诉求：** 自动化基础设施的可靠性问题，以及监控告警本身能否起到守门作用。

- **[Issue #84834 — Webhook Feature Package — graph-gated repair (22 条评论)](https://github.com/NousResearch/hermes-agent/issues/84834)**：由 `andrexibiza` 发起的 Webhook 功能包跟踪元问题，计划对 Hermes 全部 Webhook 表面（入口、执行、投递、配置、管理 UI、部署、文档）进行"图形门控"（graph-gated）修复——即 5×2×3 修复矩阵。**背后诉求：** 社区希望将分散各处、各自打补丁的 Webhook 问题做一次系统性根因修复，而非继续零敲碎打。

- **[Issue #91277 — Fleet update reliability (14 条评论)](https://github.com/NousResearch/hermes-agent/issues/91277)**：由维护者 `teknium1` 发起的跟踪问题，明确指出"安装/更新是目前我们最不可靠的能力"——约 30 个开放 issue 和 15 个开放 PR 各自修补同一类问题的不同角落，但缺乏统一方案。**背后诉求：** 维护者对技术债的自我承认，以及社区对统一更新方案的强烈期待。

---

## 5. Bug 与稳定性

按严重程度排列：

### 高危

- **[Issue #92302 — 120s timeout connection (P2, Windows, 需复现)](https://github.com/NousResearch/hermes-agent/issues/92302)**：用户将环境变量从 `HERMES_STREAM_STALE_TIMEOUT` 修改后，后端连接出现 120 秒超时，对本地大模型（如 Qwen3.8-27B）和大型上下文场景而言过短。`needs-repro` 状态可能拖延修复。**已有 fix PR：否。**

- **[Issue #92271 — Windows Docker sandbox broken — session folder name contains ":" (P2, Windows)](https://github.com/NousResearch/hermes-agent/issues/92271)**：在原生 Windows 安装中，会话目录名包含冒号（如 `session:20260822_210946_71d78a`），Windows 文件系统禁止该字符，导致每个工具调用都抛出 `WinError 267`。该问题跨会话持续存在，即使升级后依旧。**已有 fix PR：否（PR #92610/#92614 修复相邻路径但非此根因）。**

- **[Issue #92606 — Anthropic OAuth stale credential file overwrites rotated token (P2, 安全边界)](https://github.com/NousResearch/hermes-agent/issues/92606)**：`hermes_pkce` 和 dashboard PKCE 流程写入的陈旧凭证文件会覆盖已轮换的 token，两个连接池行共享同一一次性刷新令牌，最终互相撤销并导致凭证池为空。**已有 fix PR：否。**

### 中危

- **[Issue #92095 — Broken .desktop Exec= on uv-based installs (P2, Linux)](https://github.com/NousResearch/hermes-agent/issues/92095)**：uv 安装中 `hermes desktop` 写入的 `Exec=` 指向裸 uv 解释器而非 venv python，点击图标静默失败。**已有 fix PR：否。**

- **[Issue #83832 — PKCE state cookie serialized with literal ';' breaks OIDC login (P2, 认证)](https://github.com/NousResearch/hermes-agent/issues/83832)**：`set_pkce_cookie` 将 payload（`provider=...;state=...;verifier=...;next=...`）以字面分号序列化，违反 RFC 6265，可能导致OIDC 登录失败。**已有 fix PR：否。**

- **[Issue #92553 — pre_tool_call shell hooks silently discard "approve" action (P2, 兼容性)](https://github.com/NousResearch/hermes-agent/issues/92553)**：Shell hook 返回 `{"action": "approve"}` 会被解析为 `None`，工具照常执行，且 `hermes hooks doctor` 仍报告健康。**已有 fix PR：否。**

- **[Issue #92554 — Writing config.yaml destroys all user comments (P2, 配置)](https://github.com/NousResearch/hermes-agent/issues/92554)**：任何写入 `config.yaml` 的命令都会重新序列化整个文件，导致用户注释全部丢失。**已有 fix PR：否。**

### 低危（精选）

- **[Issue #91710 — Desktop no unread state when inactive bot finishes (P3)](https://github.com/NousResearch/hermes-agent/issues/91710)**、**[Issue #92506 — profiles.list JSON-RPC never answers — WSTransport.write silently kills pool worker (P2, 需复现)](https://github.com/NousResearch/hermes-agent/issues/92506)**、**[Issue #92565 — MCP server never reconnected after credential change (P2)](https://github.com/NousResearch/hermes-agent/issues/92565)**。

---

## 6. 功能请求与路线图信号

- **[Issue #92091 — Gateway control socket: replace process-scan heuristics with a gateway-owned contract (P2, needs-decision)](https://github.com/NousResearch/hermes-agent/issues/92091)**：由 `teknium1` 提出，建议用网关自有的控制套接字取代"扫描进程表并匹配字符串"的管理方式。这一设计与 #91277（Fleet update reliability）直接呼应，指向"统一更新方案"的底层架构改良。若被采纳，将是重大架构调整。

- **[Issue #91230 — Task Completion Verification — exact-object completion as the sixth Hermes law (P3, needs-decision)](https://github.com/NousResearch/hermes-agent/issues/91230)**：由 `andrexibiza` 提出，将"精确对象完成验证"提升为 Hermes 的第六条执行法则（原五条覆盖权限透明化、证据等级、禁止自认证等）。这是纯架构讨论，目前停留在设计阶段。

- **[PR #91974 — Context-window budget hint injection (P3, needs-decision)](https://github.com/NousResearch/hermes-agent/pull/91974)**：由 `x7peeps` 从 openai/codex 移植的上下文窗口预算提示注入——当请求接近模型上下文上限时，在用户消息中附加一条建议行，引导模型保持聚焦，避免强制截断或丢失信息。这是一个低成本、高收益的增强，被纳入下一版本的可能性较大。

- **[PR #85370 — feat(hooks): add emit_waterfall — Cordis-style around-middleware dispatch (P3)](https://github.com/NousResearch/hermes-agent/pull/85370)**：引入瀑布式中间件分发模式，使网关事件钩子支持环绕（around）逻辑，类似 DeepSeek Harness 的工具执行管线。这属于中间件能力的结构性升级。

- **[Issue #91260 — Gateway + multi-profile: IM entry cannot drive a real multi-bot pipeline (P3)](https://github.com/NousResearch/hermes-agent/issues/91260)**：多 profile 架构下，单一 IM 入口无法驱动真正的多机器人流水线（SOUL 交接目前是"虚构"的）。这可能成为多代理协同能力的下一迭代方向。

- **[PR #92107 — feat(skills): add eli5 visual-explainer skill (P3)](https://github.com/NousResearch/hermes-agent/pull/92107)**：社区贡献的"用最简单的话讲清楚"技能，生成单文件 HTML（内联 CSS + SVG，无 CDN 无 JS），参考 Claude Code 社区模式。

---

## 7. 用户反馈摘要

- **安装与更新是最大痛点**：#91277 中 `teknium1` 坦承"安装/更新是我们目前最不可靠的能力"，#58593（Linux 桌面端更新反复失败并重置 Electron 沙箱权限，4 条评论）和 #92095（.desktop Exec= 损坏，5 条评论）分别从桌面端和命令行两个维度印证了这一点。社区投递了大量"更新按钮报成功但版本不动"的反馈。

- **配置注释丢失引发不满**：#92554 中用户明确表示"注释是记录配置原因的自然位置"，"每次运行 hermes 命令后我的注释都没了，这让我不敢再手改配置文件"。这是一个体验与信任层面的问题。

- **Windows 平台是重灾区**：今日报告中至少 4 个 Bug 标记了 Windows 平台（#92271 Docker 会话目录冒号、#92302 120s 超时、#92607 Wispr Flow 无法插入文本、#92506 profiles.list 无响应），其中 Docker 挂载路径问题（#92271）在 PR #92610/#92614 中被尝试修复，但根因仍是核心问题。

- **桌面端 pin 同步与 OAuth 启动逻辑的持续修复**：PR #92601/#92609/#74550 均针对"后端钉住的会话无法取消钉住"的同一问题，说明不同开发者各自打通了同一功能的修复路径。这既体现了社区活跃度，也暴露出主线分支上该问题的持续存在。

- **安全类反馈**：多个安全相关 issue 已附带对应 fix PR，#92551 被标记为重复（`computer_use` 审批绕过），#92606（Anthropic OAuth 覆盖）暂无修复，#92612（XSS）已叠加修复。安全反馈的处理速度整体较快。

---

## 8. 待处理积压

以下长期未响应、持续影响用户的重要 Issue 和 PR，提醒维护者优先关注：

- **[Issue #58593 — Linux Desktop in-app update repeatedly fails (P2, 创建于 2026-07-05)](https://github.com/NousResearch/hermes-agent/issues/58593)**：已开放 49 天，4 条评论，至今未有 fix PR。桌面端更新反复失败且重置沙箱权限是直接影响用户体验的高频问题，且与 #91277 的更新可靠性计划直接相关。

- **[PR #80041 — fix(update): --stay-on-branch so desktop product updates end on main (P2, 创建于 2026-08-06)](https://github.com/NousResearch/hermes-agent/pull/80041)**：已开放 17 天，解决"桌面版本更新后停留在非 main 分支"的根因，与 #58593 属于同一问题域，建议优先审阅合并。

- **[Issue #78981 — Session permanently dies after repeated context-compression hangs (P1, DeepSeek 500k token, 创建于 2026-08-05)](https://github.com/NousResearch/hermes-agent/issues/78981)**：P1 级别的会话死亡问题（132 次工具调用、约 500k token 的长会话在上下文压缩重复挂起后永久死亡），已开放 18 天，8 条评论，至今无 fix PR。此类"永久性会话死亡"问题直接导致用户工作流失，应列为最高优先级。

- **[PR #85370 — feat(hooks): add emit_waterfall (P3, 创建于 2026-08-13)](https://github.com/NousResearch/hermes-agent/pull/85370)**：已开放 10 天，具备明确的架构价值（Cordis 风格中间件分发），但尚未获得维护者评审意见。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-23

## 今日速览

过去24小时内，PicoClaw 项目保持中等活跃度：共产生 2 条 Issue 和 6 条 PR 更新，其中 4 条 PR 已合并/关闭，2 条仍待处理。值得注意的是，今日有两种关键 Bug 正在修复中：MCP 服务器连接失败导致 agent loop 挂起（Issue #3269），以及 Telegram 消息编辑动画失控导致 22.8 万次 API 调用（Issue #3343）。无新版本发布；7 月以来的多份 PR 正在被批量合并，显示项目维护者正在收拢积压工作、逐步清理技术债。项目整体健康度良好，但长期存在的 stale 标记（如 #714、#1083、#1545 等自 2-3 月起挂起后今日才被合并）提示存在较长的 PR 审查周期问题。


## 项目进展

今日合并/关闭 4 条 PR，多为积压数月的旧 PR 被集中处理，涵盖多项功能增强与 Bug 修复：

- **PR #714 — Skills 安装/重装 CLI 重构**（合并，创建于 2026-02-24，积压 6 个月）：新增从 GitHub 安装 skills 的完整支持，包括 `repo@branch` 语法、子路径校验、`reinstall` 子命令（强制覆盖），生产安装改为使用 GitHub Trees API 拉取完整目录结构。该 PR 属于 `type: enhancement, domain: skill`，极大增强了 skill 的分发/安装体验。
- **PR #1083 — Cron 循环任务执行后丢失计划**（合并，创建于 2026-03-04）：修复了循环 cron 任务（`every_seconds` / `cron_expr`）在首次执行后静默退化为一次性任务的严重 Bug（原 Issue #1043）。
- **PR #3319 — Exec 工具超时与布尔参数修复**（关闭）：修复了 `exec` 工具中 `timeout` 参数被忽略、以及 `background` 和 `pty` 被声明为字符串而非布尔值的问题。
- **PR #1545 — 积压修复批量合并**（关闭）：合并了来自 #1500、#1490、#1488、#1487、#1485 的 5 个修复 PR。

值得注意的是：多条 PR 从创建到合并间隔了 6-10 个月（#714 从 2 月到 8 月，#1083 从 3 月到 8 月），反映出较慢的 PR 审查周期。但它们最终被合并，显示维护者正在清空积压队列——这是项目向健康的信号。


## 社区热点

当前讨论焦点集中于 **MCP 集成稳定性**问题。

- **[Issue #3269 — MCP 服务器连接失败导致 agent loop 挂起](https://github.com/sipeed/picoclaw/issues/3269)**：7 月 20 日创建，累计 **6 条评论**，是过去 24 小时最活跃的 Issue。用户反馈 MCP 连接失败后 chat 界面完全停止回复，属于核心功能故障级 Bug（环境：PicoClaw nightly 2cf030d2 / Go 1.25.11 / Qwen3）。该 Issue 同时带有 `[stale]` 标记，说明已被维护者延期关注一段时间。**幸运的是已存在对应的待合并修复 PR #3337**（见下文），社区关注度与实际修复方案同步推进。

- **[PR #3337 — Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337)**（待合并）：该 PR 直接针对 Issue #3269 提出修复方案——此前 `ensureMCPInitialized` 返回错误（如 MCP 服务器不可达）时，`AgentLoop.Run` 会传播错误并退出，导致聊天界面完全停止响应。修复后 agent 可正确处理 MCP 初始化失败的场景。

- **[Issue #3343 — Telegram 消息编辑动画失控](https://github.com/sipeed/picoclaw/issues/3343)**（8 月 22 日新开）：单个 agent turn 停止推进后，tool feedback 动画仍持续每 3 秒调用 Telegram `editMessageText` 长达数日，产生 **超过 22.8 万次编辑请求**，触发 Telegram 服务端限流（`retry_after`）。该 Issue 尚无评论、暂无配套修复 PR，属于新发现的异常循环场景。


## Bug 与稳定性

| 严重程度 | Issue | 摘要 | 修复状态 |
|---------|-------|------|---------|
| **🔴 严重** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 agent loop 挂起，chat 界面完全停止回复，属核心功能阻断 | 已有修复 [PR #3337](https://github.com/sipeed/picoclaw/pull/3337)（待合并） |
| **🟠 高** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Telegram tool 动画无限循环编辑消息，22.8 万次 API 调用触发限流，消耗大量资源 | 无修复 PR |
| **🟡 中** | [PR #3319](https://github.com/sipeed/picoclaw/pull/3319)（已关闭） | `exec` 工具 `timeout` 参数被忽略、`background`/`pty` 类型声明错误，影响配置的准确性 | ✅ 已修复（今日关闭） |
| **🟡 中** | [PR #1083](https://github.com/sipeed/picoclaw/pull/1083)（已关闭） | 循环 cron 任务执行一次后丢失重复计划，静默降级为一次性任务 | ✅ 已修复（今日关闭） |

**稳定性评估**：MCP 挂起问题已存在约一个月，修复 PR 已提交但尚未合并，若该 bug 出现在生产环境将直接导致服务不可用，是当前最高优先级风险。Telegram 动画循环失控为新发现的问题，亟需关注。cron 静默退化与 exec 参数丢失为长期存在的隐性 Bug，今日已合并修复——此类"静默降级"类 Bug 在多个模块中出现，值得关注。对于 Telegram 限流问题，建议排查所有 tool 反馈动画的停止条件，设置最大尝试次数或超时退出机制。


## 功能请求与路线图信号

- **Skills 安装/重装 CLI 增强**（[PR #714](https://github.com/sipeed/picoclaw/pull/714) 今日合并）：支持 GitHub 仓库直接安装 skill、`repo@branch` 语法、重建与强制覆盖。这是一个明显的功能路线图推进——skill 生态的安装/分发链路从手工复制文件走向标准化、自动化的方向。结合该 PR 的 `type: enhancement` 标记，下一个版本极有可能包含此特性，且对 skill 开发者的使用体验有极大改善。
- **MCP 错误恢复能力**（[PR #3337](https://github.com/sipeed/picoclaw/pull/3337) 待合并）：修复 MCP 失败时 agent 不再整体崩溃，而是进入可恢复状态。这是一个健壮性增强信号——MCP 在架构中处于核心地位（issue #3269 证实），其容错能力将被持续强化。
- **deltachat 实现清理**（[PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 待处理）：删除遗留功能与旧测试（-200 LOC），从硬编码的 relay list 改为引用官方列表站点，密码配置改为必须放在 jsonrpc 文件中，新增 `join_invite_link` / `show_invite_link` API 以及完整的 deltachat 文档章节。属于架构精简 + 配置安全化方向，该 PR 偏 refactor 性质。
- **Cron 可靠性修复**（[PR #1083](https://github.com/sipeed/picoclaw/pull/1083) 今日合并）：修复了 cron 任务循环退化为一次性任务的重大问题，表明 cron 模块的可靠性在使用场景中越来越关键——部分用户可能将 PicoClaw 用于定时自动化工作流。


## 用户反馈摘要

- **MCP 故障即全停**（Issue #3269）：用户核心诉求是——MCP 连接失败时不应使整个 chat 界面停止回复。这反映了用户对于 PicoClaw 的定位期望：作为个人 AI 助手，即使部分工具不可用，核心对话能力也应保持在线。此痛点已获 1 👍，并已得到针对性修复 PR，说明维护者认可该项优先级。
- **Telegram 资源消耗失控**（Issue #3343）：`editMessageText` 每 3 秒调用一次，持续数日未停止，累计 22.8 万次请求直至触发限流。用户的使用场景是 Telegram 作为 PicoClaw 的远程前端；此反馈的关键在于：**tool 反馈动画缺少最大执行次数或强行终止机制**。这是一个真实的健壮性缺口，说明 PicoClaw 的 tool 动画/反馈控制需要额外的安全阀。
- **Cron 静默失败**（PR #1083 关联 Issue #1043）：循环任务执行一次后变为一次性，属于"无声中的失效"——没有报错、没有警告，只是任务不再重复执行。这类 Bug 对自动化场景的用户伤害最大，因为它们很难被及时感知。随着今日 PR 合并，此类问题已得到修复。


## 待处理积压

| 项目 | 类型 | 创建时间 | 最近更新 | 状态 | 备注 |
|-----|------|---------|---------|------|------|
| [#3337 Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337) | PR | 2026-08-14 | 2026-08-22 | 待合并 | 🔴 **最高优先级**：直接修复 Issue #3269（核心功能阻断），请维护者尽快审查合并 |
| [#3343 Telegram 消息编辑无限循环](https://github.com/sipeed/picoclaw/issues/3343) | Issue | 2026-08-22 | 2026-08-22 | 新开，无回复 | 🟠 高优先级：新报告的资源耗尽类 Bug，24 小时内已有 22.8 万次无效 API 调用，需尽快定位停止条件 |
| [#3222 deltachat 清理与文档](https://github.com/sipeed/picoclaw/pull/3222) | PR | 2026-07-03 | 2026-08-22 | 待审查，已 50 天 | 🟡 中：清理量较大（-200 LOC），建议尽快安排 review |
| [#3269 MCP 挂起](https://github.com/sipeed/picoclaw/issues/3269) | Issue | 2026-07-20 | 2026-08-22 | 带 `[stale]` 标记，已 34 天 | 🟡 已有对应 PR #3337，建议合并后立即关闭 |
| [#714 skills CLI](https://github.com/sipeed/picoclaw/pull/714) | PR | 2026-02-24 | 2026-08-22 | ✅ 已合并 | 从创建到合并历时 **6 个月**，关注长 review 周期问题 |
| [#1083 cron 修复](https://github.com/sipeed/picoclaw/pull/1083) | PR | 2026-03-04 | 2026-08-22 | ✅ 已合并 | 从创建到合并历时 **5.5 个月** |

**对维护者的提醒**：PR 平均审查周期为 2-6 个月，建议优化 review 流程或考虑引入更多维护者分担负载；同时 #3337 已等待 9 天且对应高优先级 Bug，建议优先处理。此外，今日合并 4 条旧 PR 可能带来回归风险，建议发布 nightly 版本进行充分验证后再合并 #3337 与 #3222。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-23

## 今日速览

NanoClaw 今日活跃度显著，过去 24 小时共产生 27 条更新（1 Issue + 26 PR），其中 8 个 PR 被合并或关闭，18 个 PR 待合并。值得关注的是，今日有多个长期悬而未决的 issue 获得了对应的修复 PR（如 Telegram 通道匿名身份门控问题 #2991、自动发送者误触发审批门控 #3235、组作用域参数覆盖警告 #2464），表明维护团队正在系统性消化历史积压问题。同时，围绕 Telegram 设置流程、Docker 镜像构建、Slack 审批卡片等方向出现了一批连续编号的 PR 系列，显示社区协作进入密集推进阶段。无新版本发布。项目整体健康度良好。

---

## 版本发布

今日无新版本发布。


## 项目进展

今日合并/关闭的 8 个 PR 中，有几个值得关注的变化：

### 🔀 合并/关闭的重要 PR

**#3443 [CLOSED] - build: drop better-sqlite3 from onlyBuiltDependencies — use its bundled prebuilds** (*gavrielc*)
- **状态**: 已关闭
- **概要**: 移除 better-sqlite3 的强制编译步骤，采用 npm 包内预编译绑定，显著简化构建流程。
- **意义**: 减少安装依赖链上的编译风险，使构建过程更快更稳，同时减小镜像体积。

**#3394 [CLOSED] - fix(slack): working manual-install fallback, delivered to the requester** (*Koshkoshinsk*)
- **状态**: 已关闭（core-team）
- **概要**: 修复当工作区应用审批策略阻止托管安装时，人工安装备用 URL 的 redirect_uri 校验失败及代理驱动的配置无恢复路径的问题。
- **意义**: 堵住了 Slack 部署路径上最后一个已知阻塞点。

**#3390 [CLOSED] - fix(setup): skip Slack auto-provisioning when a bot is already saved** (*Koshkoshinsk*)
- **状态**: 已关闭（core-team）
- **概要**: 修复取消 Slack 设置后重新运行 setup 会为同一 agent 创建第二个 Slack 应用的问题。
- **意义**: 消除了设置流程中因重复执行产生的资源冗余和配置冲突。

**#3445 [CLOSED] - Closing: wrong repository** (*kftaylor*)
- 非功能性 PR，误提交至错误仓库后主动关闭，无影响。

### 整体评估

从今日合入的 PR 看，项目在 **Slack 部署流程稳定性** 和 **构建系统简化** 两个方向有实质推进。尤其是 Slack 相关的两个修复 PR 均为长期存在的配置路径死角和恢复机制缺陷，合入后 Slack 通道的部署成功率应有明显提升。此外，构建依赖的精简也体现了对开发者体验的关注。


## 社区热点

今日社区活跃度集中在以下 PR 上（部分 PR 评论数据未显示，仅根据编号连续性、参与者和主题热度分析）：

### 🔥 热门主题一：Telegram 通道身份与消息可靠性（3 个 PR 连续提交）

**#3450 [OPEN] - Telegram: trust channel's own identity in sender_scope gate** (*wakqasahmed*)
- 修复 #2991：Telegram 广播频道帖子被视为未知发送者而触发审批门控的问题。
- 链接: [PR #3450](https://github.com/nanocoai/nanoclaw/pull/3450)

**#3449 [OPEN] - fix(telegram): pin explicit allowedUpdates to stop channel-post blackholing** (*wakqasahmed*)
- 修复 Telegram 服务端持久化 allowed_updates 导致通道帖子被吞掉的问题。
- 链接: [PR #3449](https://github.com/nanocoai/nanoclaw/pull/3449)

**#3431 [OPEN] - fix(telegram-setup): pairing card says 6 digits** (*amit-shafnir*)
- 修复配对卡片提示与实际码位数不一致的 UI 问题。
- 链接: [PR #3431](https://github.com/nanocoai/nanoclaw/pull/3431)

**分析**: Telegram 通道在本周成为社区集中发力的对象。三个 PR 分别从身份门控逻辑、消息接收可靠性、用户界面文案三个维度进行修复，反映出 Telegram 作为热门信使渠道在真实使用中暴露的问题较多，社区响应积极。

### 🔥 热门主题二：设置向导（Setup Wizard）功能扩展

**#3438 / #3437 / #3435 / #3434** (*amit-shafnir* 贡献的系列 PR)

- **#3438**: 设置向导支持 "添加另一个 Telegram bot" 选项
- **#3437**: 文档更新，覆盖 add-another-bot 路径和新实例感知配对逻辑
- **#3435**: 将适配器实例信息贯穿配对流程、初始化首个 agent 和 CLI 欢迎页
- **#3434**: 修复轮询适配器错误开启 webhook 服务器的问题

**分析**: 这组 PR 解决了设置向导在多 bot 实例场景下的可用性问题，使同一 agent 能对接多个 Telegram bot。该系列由同一贡献者密集提交，且标注了 `core-team`，表明是经过协调的推进方向。

### 🔥 热门主题三：核心基础设施修复

**#3447 - fix(circuit-breaker): scope crash strikes to the instance that earned them** (*gavrielc*)
- 修复熔断器在多个实例共享同一 data/ 目录时互相干扰的问题。

**#3448 - ncl: warn when group scope overrides an explicit auto-fill arg (#2464)** (*wakqasahmed*)
- 当组作用域自动填充覆盖了显式参数时输出警告，提升 CLI 行为的可预期性。

**#3318 - fix: force baseline (non-AVX2) Bun binary in agent image** (*wakqasahmed*)
- 修复 Docker 构建脚本根据构建机 CPU 而非运行机器 CPU 选择 Bun 二进制版本的问题。


## Bug 与稳定性

### 🟢 中等级别问题（已有修复 PR）

**Issue #3453 [OPEN] - stdin-json tests fail on Node 25+: tsx loader deprecation pollutes asserted stderr** (*witek*)
- **概要**: Node 25+ 中 `module.register()` 弃用警告污染 stderr，导致 stdin-json 测试断言失败。
- **影响**: 测试套件在 Node 25+ 环境下不稳定，阻塞 CI 升级。
- **状态**: 暂无关联修复 PR，作者正在调查。
- 链接: [Issue #3453](https://github.com/nanocoai/nanoclaw/issues/3453)

### 🟢 已修复/合入的稳定性问题

- **#3443 (better-sqlite3 预编译绑定)**: 解决安装时编译失败/耗时问题
- **#3394 (Slack 手动安装回退)**: 修复 redirect_uri 校验失败，恢复断掉的部署路径
- **#3390 (Slack 重复配置)**: 防止重复创建 Slack 应用
- **#3449 (Telegram allowedUpdates)**: 修复通道帖子被静默吞掉的问题
- **#3447 (熔断器多实例串扰)**: 防止一个实例的崩溃影响同 data/ 目录下的其他实例
- **#3434 (轮询适配器误开 webhook 服务器)**: 消除潜在的端口占用/安全暴露风险

### 🟡 潜在风险点

- **#3318 (Bun 二进制 ABI 不匹配)**: 当前 Docker 镜像可能在非 AVX2 的 CPU 上运行时崩溃（#3318 修复了构建时的选择逻辑，但已有镜像需要重建）。


## 功能请求与路线图信号

从今日 PR 可识别以下功能方向，可能被纳入后续版本：

| 功能方向 | 来源 PR | 状态 | 判断依据 |
|---------|---------|------|---------|
| **多 Telegram Bot 支持** | #3438、#3437、#3435 | 开放 | 系列 PR 带 `core-team` 标签，推动意图明确 |
| **Cursor Agent 集成** | #3355、#3356 (feat(providers)) | 开放 | 新增 provider 类型，属于路线图扩展 |
| **设置向导智能跳过** | #3438 ("add another bot" 选项) | 开放 | 从"只能配一个"到"可配多个"，属能力边界拓展 |
| **CLI 参数覆盖可见性** | #3448 (显式参数被覆盖时警告) | 开放 | 提升 CLI 交互可预期性，可能伴随 ncl 工具链调整 |
| **熔断器实例感知** | #3447 | 开放 | 多实例部署场景日趋普遍，此修复可能是规模化部署的基础设施铺垫 |

### 📊 版本方向研判

考虑到 Telegram 方向三个修复 PR + 设置向导系列同日出现，且均为 `core-team` 或 `follows-guidelines` 标签，**下一个 minor 版本很可能包含 Telegram 通道体验的整体优化**。Cursor Agent 集成则可能确认了对更广泛 AI 编程工具生态的兼容野心。


## 用户反馈摘要

今日 Issue/PR 中反映出的真实用户痛点包括：

**1. 部署/构建体验**

> "The script auto-selects the AVX2 build vs. the `-baseline` (SSE4.2 floor) build by probing the *build machine's* `/proc/cpuinfo`, not the machine the image will actually run on." — *PR #3318 (wakqasahmed)*

**2. Telegram 通道可靠性**

> "Telegram persists `allowed_updates` server-side, per bot token... omitting the parameter on `getUpdates` means 'the previous setting will be used.'" — *PR #3449 (wakqasahmed)*

**3. Slack 部署阻塞**

> "When a workspace's app-approval policy blocks managed Slack app installation, both recovery paths were broken: the manual-install fallback URL failed Slack's `redirect_uri` validation, and agent-driven provisioning dead-ended with no recovery surface." — *PR #3394 (Koshkoshinsk)*

**4. 多实例部署冲突**

> "The counter is keyed to nothing but the file's existence, so it silently belongs to whoever mounts `data/` next..." — *PR #3447 (gavrielc)*

**5. 审批门控误伤自动化发送方**

> "Bot/webhook senders... tripped the `request_approval` unknown-sender gate exactly like humans, producing an approval card the sender could never click through." — *PR #3446 (wakqasahmed)*


## 待处理积压

暂无长期未响应的阻塞性问题。以下为今日新增但尚未处理的条目：

| 条目 | 类型 | 创建日期 | 等待时间 | 说明 |
|------|------|---------|---------|------|
| [#3453](https://github.com/nanocoai/nanoclaw/issues/3453) | Issue | 2026-08-22 | 1 天 | stdin-json 测试在 Node 25+ 下失败，等待修复 PR |

**提醒**: 建议维护者关注 #3453 的 Node 25+ 兼容性问题。虽然发布时间尚短，但该问题直接影响 CI 在最新 Node 环境下的稳定性，若无对应修复，可能在 Node 25 正式成为 LTS 后对项目造成影响。

---

*本日报基于 GitHub 数据自动生成，供项目团队和社区参考。*
*数据截至 2026-08-23 24:00 UTC。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### IronClaw 项目动态日报 — 2026-08-23

---

#### 1. 今日速览

项目过去24小时活跃度**极高**，Issue与PR更新总量达30条，处于显著加速迭代期。核心方向集中在三块：**CI基础设施全面提速**（4条并行T1-T4轨道PR）、**沙箱安全与凭据管理**（GitHub CLI泛化中介方案）、**背景子代理（subagent）与内存管理**（AfterTurn钩子机制）。值得注意的是，PR #7491（核心工具链重构，XL级）的基准测试数据显示其输入Token消耗较旧基线暴涨4倍（227.7M vs 55.1M），成本翻两番（$10.31 vs $2.52），该PR引出的Issue #7824（上下文压缩屏障）直接反映了对成本优化的迫切需求。另有4条Issue在今日关闭，多为WebUI清理与通知生命周期硬化，整体项目健康度良好，但需警惕近期大量XL级PR对CI队列的长期压力。

---

#### 2. 版本发布

过去24小时无新版本发布。

---

#### 3. 项目进展（今日合并/关闭的PR）

今日共5条PR合并或关闭，主要来自 `italic-jinxin` 的WebUI清理系列，标志着 **WebUI基础架构整合的收尾**：

- **[#7773] refactor(webui): remove duplicate Settings and Extensions tabs**（合并）— 移除未使用的设置与扩展标签页及重复导航元数据，消除路由漂移，减少前端维护负担。
- **[#7774] test(webui): make automation presenter date assertions timezone-robust**（合并）— 修复测试对UTC的硬编码依赖，避免在 `Asia/Shanghai` 等时区下执行失败，提升CI跨时区稳定性。
- **[#7772] fix(webui): surface extension setup phase and blockers in Configure**（合并）— 将扩展设置API返回的权威 `phase` 与就绪 `blockers` 透传到UI，修复模态框错误报告“无需配置”的缺陷，提升扩展配置透明度。
- **[#7700] feat(notifications): publish authoritative run outcomes**（合并）— 基于Process Journal提交的转换记录发布计划运行完成/失败通知，替代之前的投递监视器，确保通知基于持久化事实而非猜测。该PR同时关闭了Issue #7691。
- **[#7076] Install the packages the catalog already publishes**（合并）— 重新基于最新main分支变基，解决三个月陈旧问题，安装catalog已发布的包。

**整体评估**：WebUI清理、通知可靠性加固、扩展配置透明化三项工作完成，项目向“结构化、确定性强”的方向又迈进了一步。CI侧暂无合并，但待合并队列庞大。

---

#### 4. 社区热点

今日讨论热度最高、最值得关注的Issue/PR：

1. **[Issue #7824] Context projection: Pi-style compaction barrier, structured summaries, overflow recovery**（开放，2评论）
   - 这是一条**数据驱动的痛点报告**，由核心贡献者 `serrrfirat` 创建，直接关联XL级PR #7491的基准数据：在PinchBench（147任务）上，新输入策略消耗227.7M Token（成本$10.31），而旧基线仅55.1M（成本$2.52）。**诉求本质**：模型性能提升了（54.4% vs 60.5%的准确率下降趋势下，成本却翻4倍），需要引入上下文压缩屏障来解决长会话token爆炸问题。

2. **[Issue #7815] Onboarding suggestions: 补全 connect → suggest → thread 流程**（开放，1评论）
   - 由 `rdisandro` 创建的**产品体验议题**，聚焦新用户引导流（OOBE）的收敛工作。背后是对“suggestions”功能从后端存储到前端UI完整闭环的验收拆解，与已合并的 #7693/#7694/#6994 配套。该Issue已催生PR #7816（前端补充刷新/连接入口）。

3. **[PR #7491] omp core-tool contract + engines + benchmark arm**（开放，XL级，评论数未显示但关联Issue #7824产生2条讨论）
   - 虽然评论数未明确展示，但从Issue #7824对该PR基准数据的引用，以及其XL规模（core contributor），**显然是近期技术讨论的核心载体**。该PR重构coding工具集为6个精确名称（`read/write/edit/glob/grep/bash`），删除了旧文件工具与混合表面，是长期架构演进的关键一步。

**分析**：社区热点集中在**成本和性能的平衡**（#7824）与**产品引导流程的完整性**（#7815）上，体现出项目在功能扩张后开始关注用户体验与资源效率。

---

#### 5. Bug 与稳定性

按严重程度排列，今日无高危或致命Bug（无崩溃、数据丢失类报告）：

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| **中等** | [#7823] Notion install fails in IronClaw | 用户通过Slack反馈（#x-ai-product-feedback渠道），Notion工具无法在IronClaw环境中安装，反馈时间戳为2026-07-28（今日刚录入系统，存在近一个月延迟）。 | 开放，未分类，**无修复PR** |
| **中等** | [#7822] Slack user: unable to set up Slack in IronClaw | Slink用户报告无法在IronClaw中设置Slack，并提到“与Notion问题相关”。两个集成交互依赖大概率指向同一个根本原因（凭证或沙箱网络配置）。 | 开放，未分类，**无修复PR** |
| **低** | [#7767]（已关闭）Automation presenter日期测试时区不稳 | 修复了 `Asia/Shanghai` 等时区下测试因UTC假设失败的问题。无发布风险。 | **已修复**（PR #7774合并） |
| **低** | [#7769]（已关闭）Configure中扩展设置phase及blockers未正确显示 | 模态框错误报告“无需配置”，实际存在blocker被丢弃。 | **已修复**（PR #7772合并） |
| **低** | [#7768]（已关闭）重复的Settings/Extensions标签页与路由元数据 | 代码腐化问题，影响可维护性。 | **已修复**（PR #7773合并） |

**潜在风险提示**：Issue #7822/#7823的反馈时间是7月28日，距今近一个月才被录入系统，**暴露了外部反馈渠道（Slack）到GitHub工作流之间的滞后问题**，建议维护者关注反馈摄入管道延迟。

---

#### 6. 功能请求与路线图信号

以下新Issue/PR释放了明确的路线图信号：

1. **[Issue #7824] Context projection（上下文压缩屏障）** — 强烈信号：**下一版本的核心优化方向**。该Issue提出三阶段方案：Pi-style压缩屏障、结构化摘要、溢出恢复。PR #7491虽然提升了工具抽象能力（6个裸名称），但增加了token开销，因此**引入“注意力成本”视角的上下文管理器成为必然趋势**。

2. **[Issue #7825] Sandbox egress auth: 原生iron-proxy配方与主机凭证代理** — 信号：**安全模型升级继续**。该Issue是对PR #7810（GitHub CLI凭据中介）的延伸，将GitHub特定逻辑泛化为provider-neutral的凭据绑定。表明项目正努力将“沙箱网络出口”做成通用能力，而非单点修补。

3. **[PR #7818] Background subagent: 接收后生成，逐子代理投递，激活，修复清扫（slices 2b+2c）** — 信号：**后台子代理功能进入生产阶段**。slice 2a（#7788）已落地但惰性，本PR将激活生产者端真实功能，是异步任务并行化的重要一步。

4. **[PR #7765] AfterTurn生命周期钩子 + 内存策展** — 信号：**持久化记忆与钩子机制是平台化核心**。该PR引入首个“act-capable”钩子点（AfterTurn），并为内存策展做准备（#7770 phase 1）。这将使IronClaw从“单次对话执行”走向“跨会话学习”。

5. **[PR #7255] APDD工具包评估与集成提案** — 信号：**治理框架规范化**。该PR评估了一套名为APDD（Agent Product Design & Development）的治理套件，表明项目开始关注“产品设计流程标准化”，而不仅是代码质量。

**预判下一版本（v0.x-next）可能包含**：上下文压缩（#7824）、通用凭据代理（#7825）、后台子代理完整生命周期（#7818）、首次钩子能力开放（#7765）。

---

#### 7. 用户反馈摘要

今日仅两条真实用户反馈（来自Slack渠道的Issue #7822/#7823），均为集成安装问题，且**反馈时间滞后约一个月**：

- **Notion安装失败**（#7823）：用户 `alejo.escriva` 报告Notion工具“不想安装”，严重程度标为medium，归类为 integration-install 。
- **Slack设置失败**（#7822）：同一位用户报告无法设置Slack，且认为与Notion问题相关。

**痛点提炼**：用户遇到的不是单一工具问题，而是**一个横断面的“沙箱网络出口 + 第三方OAuth”基础能力缺陷**。虽然项目方在PR #7810中已推进解决，但尚未合入main，且用户侧感知依旧是“装不上”。此外，来自核心贡献者 `serrrfirat` 的Issue #7824，以基准数据自称“measured, not hypothetical”，反映出**内部对成本模型的强烈关注**——这对运行长会话任务的目标用户来说是核心痛点。

---

#### 8. 待处理积压

以下Issue/PR长期未闭环，需要维护者关注：

| 项目 | 创建时长 | 状态 | 风险/建议 |
|------|---------|------|-----------|
| **[PR #7255] APDD治理框架评估** | 18天 | 开放，无近期实质进展 | 文档型提案，但可能影响团队流程，需明确是否采纳或关闭。 |
| **[PR #7257] WebUI设计系统提案与清单** | 18天 | 开放 | 与Epic #7038相关，但已衍生出#7781（Phase 2-3），建议将#7257标记为superseded以降低读者困惑。 |
| **[PR #7749] benchmark触发器（触发即关闭）** | 4天 | 开放，等待benchmark运行 | 临时PR，待基准运行完成后需手动关闭，存在被遗忘的风险。 |
| **[Issue #7815] Onboarding建议流程闭环** | 1天 | 开放 | 新Issue，已有关联PR #7816，预计短周期内可收敛，但涉及的suggestions API（#7694）尚未合入main，属于长期依赖。 |
| **Slack反馈渠道积压**（#7822/#7823） | 反馈于7/28，今日（8/22）才录入 | 开放 | 反馈管道存在近1个月的延迟，强烈建议检查自动化摄入流程，否则此类“漂移问题”会持续掩盖真实用户痛点。 |

**维护者行动建议**：
1. 优先关注PR #7491的评审进度，其合并将直接决定后续上下文压缩方案（#7824）的实现顺序。
2. 对#7822/#7823设置 `integration-install` 标签，并跟踪是否被PR #7810+全局凭据绑定覆盖。
3. CI四条轨道（#7821/#7817/#7819/#7820）今日集中提交，需协调评审资源，避免PR队列进一步膨胀。

---
**项目健康度综合评估**：`活跃度 A+，稳定性 B+（无高危Bug），架构演进方向明确（钩子机制、沙箱泛化、CI提速），但成本控制与反馈管道存在短板。`

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-08-23

> 项目健康度：🟢 活跃 | 社区互动：🟡 温和 | 维护响应：🟢 良好


## 1. 今日速览

过去24小时内 LobsterAI 完成了 **2 个 Issue 关闭** 与 **5 个 PR 合并/关闭**，均属于此前积压的 `[stale]` 标记项，说明项目正在有序处理历史遗留任务。当前 **1 个新 PR (#2452)** 仍在开放中，聚焦模型 ID 中 `/` 字符导致 provider 前缀丢失的边界问题，延续渲染端与后端数据一致性修复方向。今日无新版本发布、无新 Issue 报告，整体活跃度中等偏上——**吞吐集中在旧任务清理，而非新需求涌入**。

> 📊 今日吞吐数据：2 Issues 关闭 + 5 PRs 合入/关闭 + 1 PR 待合并


## 2. 版本发布

今日无新版本发布。


## 3. 项目进展

今日合并/关闭的 5 个 PR 中有 4 个实质推动：

- **PR #1208** — 新增 Cowork 会话错误气泡内联重试按钮，支持 429/瞬时故障一键重发，提升中断恢复体验（已合入）​
  https://github.com/netease-youdao/LobsterAI/pull/1208

- **PR #1212** — 自定义模型提供商上限从 10 提升至 20，并将 key 列表从硬编码重构为动态生成，解决配置扩展瓶颈（已合入）​
  https://github.com/netease-youdao/LobsterAI/pull/1212

- **PR #1214** — 会话详情新增「导出为 Markdown」功能，含工具调用摘要与结果截断处理，满足文本记录需求（已合入）​
  https://github.com/netease-youdao/LobsterAI/pull/1214

- **PR #1205** — 会话重命名失败不再静默，添加 toast 提示并保持输入框打开以供重试（已合入）​
  https://github.com/netease-youdao/LobsterAI/pull/1205

另外 **PR #1209** 固定了 web-search 的 Chrome flags 清理逻辑，排查了外部注入的 `--disable-blink-features=AutomationControlled` 导致的兼容问题。

> 🎯 **今日核心进展**：4 个功能/修复落地 — 会话重试机制、自定义模型扩展（10→20）、Markdown 导出、重命名错误反馈，覆盖易用性和配置边界两大方向。


## 4. 社区热点

今日评论最多为两个刚关闭的 Issue，各 2 条评论：

- **Issue #1206** — 「私有化部署的 kimi2.5 模型分析文档会重复处理或回复进度」，提交者描述当前任务必现的重复回复，切换模型恢复正常。属模型适配的特定问题。
  https://github.com/netease-youdao/LobsterAI/issues/1206

- **Issue #1213** — 建议会话详情增加 Markdown 导出，这正是已合入 PR #1214 的功能请求先声，请求方已给出完整实现方案（复用 `buildDisplayItems` + `dialog.saveInlineFile`），开发社区执行力强。
  https://github.com/netease-youdao/LobsterAI/issues/1213

> 💬 **信号解读**：Issue #1213 的用户提了详细代码级方案，实现了需求→PR→合入的成功闭环，说明反馈通道高效。


## 5. Bug 与稳定性

今日无新 Bug 报告，两个关闭的 Issue 均为积压项，严重程度如下：

| 严重程度 | Issue | 状态 | 说明 |
|---------|-------|------|------|
| ⚠️ 中 | #1206 kimi2.5 重复处理/进度回复 | 已关闭 | 模型切换可绕过，非致命，暂无修复 PR |
| 🟢 低 | #1205 重命名失败无反馈 | 已关闭 | 合入 PR #1205 修复（toast + 保持输入） |

> 今日无崩溃、回归或数据安全问题。未见需紧急修复的热点 Bug。


## 6. 功能请求与路线图信号

- **「导出为 Markdown」**（Issue #1213 → PR #1214 已合入）— 预计纳入下个版本，属于文本导出能力补全。
- **「手动重试按钮」**（PR #1208 已合入）— 针对瞬时错误（429/网络）​，低频但高频依赖，属错误恢复机制优化，建议纳入下个稳定版。
- **「自定义模型提供商上限提至 20」**（PR #1212 已合入）— 面向多模型接入的中长尾场景，轻微向企业/重度用户倾斜。

> 以上均为已合入 PR，**下一版本（预计 v2026.9.x）将完整包含这些功能**，当前路线图信号偏向**增强错误恢复 + 导出格式多样性 + 自定义配置自由度**。


## 7. 用户反馈摘要

- **痛点**：kimi2.5 私有化部署时重复回复当前动作，用户「不清楚是 bug 还是需要继续等待」，体验困惑；且「切换模型后正常」，指向模型适配兼容范围问题。
- **期待**：Markdown 导出需求的提出者明确表达「图片格式不便于后续编辑和检索」，说明**可编辑/可检索是文本/协作类用户的核心诉求**；而重试按钮提交者指出「只能手动重新输入上一条消息」是 429 场景下的主要摩擦点。
- **满意点**：两个 stale Issue 均被关闭，且 #1213 的需求已在当天得到实现（#1214 合入），用户诉求响应速率值得肯定。


## 8. 待处理积压

- **PR #2452** — 「fix(openclaw): preserve provider for slashed model ids」（创建于 2026-08-07，至今 16 天未合入）——修复 `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` 格式模型 ID 在存储时丢失 provider 前缀导致渲染端解析异常。属纵深数据一致性问题，涉及 OpenClaw 会话扩展场景，**建议关注 review 进展**。
  https://github.com/netease-youdao/LobsterAI/pull/2452

> ⏳ 其余已 stale 的 PR（#1205、#1208 等）均在本日处理完毕，积压负担较轻。


*报告生成时间：2026-08-23 | 数据窗口：2026-08-22 00:00 - 2026-08-22 24:00 (UTC)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-23

## 今日速览

Moltis 项目今日活跃度处于中等水平。过去 24 小时内共产生 1 条 Issue 更新（其中 1 条被关闭）和 3 条待合并的 PR，无新版本发布。值得关注的是，今日流入的 3 条 PR 全部聚焦于兼容性修复——包括 OpenAI 工具模式适配、MCP 服务器重启后的客户端解析、以及 Browserless v2 容器支持——表明项目正处于针对外部生态变化（尤其是 AI 工具链）的主动适配阶段。社区讨论热度较冷，但安全相关话题（Issue #1230）的收尾预示着项目在安全边界上进一步收紧。

---

## 版本发布

今日无新版本发布，此处省略。

---

## 项目进展

今日无 PR 被合并，但由于上一条 Issue #1230 被标记为已关闭，说明此前 PR 已合入，安全钩子（hooks）的 fail-closed 错误策略正式落地。项目在安全硬化的方向上向前推进了一步。

此外，今日活跃的 3 条待合并 PR 非常值得关注，均为功能性修复/增强，建议维护者尽快审阅合入：

| PR | 内容 | 核心价值 |
|----|------|----------|
| [#1232](https://github.com/moltis-org/moltis/pull/1232) fix(tools): make object schemas OpenAI-safe | 声明 cron 和 webhook 补丁字段，将 MCP 环境变量表示为固定 name/value 条目，以符合 OpenAI 严格工具模式的 `additionalProperties=false` 要求 | 解锁 Codex 等 OpenAI 兼容客户端与 Moltis 的完整工具互通，消除因 schema 不规范导致的空值/缺参问题 |
| [#1231](https://github.com/moltis-org/moltis/pull/1231) fix(mcp): resolve current client after server restart | 在 MCP 服务器重启后，工具桥接不再使用已关闭的旧客户端实例，改为实时解析当前连接 | 消除活跃对话在服务器重启后继续向失效客户端发起调用的隐患，提升长会话稳定性 |
| [#1229](https://github.com/moltis-org/moltis/pull/1229) fix(browser): support Browserless v2 containers | 完整支持 Browserless v2 容器协议（Base64 launch 查询参数、TIMEOUT/CONCURRENT），同时保留 v1 默认配置和公共 API 不变 | 兼容 Browserless 新版本部署，避免用户升级容器后出现启动失败 |

**综合评估**：如果上述 3 条 PR 均能顺利合入，Moltis 将在 OpenAI 兼容性、MCP 会话韧性和浏览器自动化部署三个维度同时获得质量跃升，对下一版本迭代具有明显加成。

---

## 社区热点

今日整体讨论热度较低，唯一产生评论的条目是 [#1230](https://github.com/moltis-org/moltis/issues/1230)（已关闭）。

该 Issue 讨论了安全钩子在运行时失败时默认继续执行（continuation）的漏洞——例如 shell-hook 超时导致策略形同虚设。提案引入了可以选择启用的 fail-closed 错误策略，使钩子失败时直接阻断工具调用。虽然仅有 1 条评论，但该话题触及 **AI 代理安全边界的底线问题**：当安全机制自身出故障时，系统究竟是“优雅降级”还是“宁停勿错”。该问题的关闭意味着回应了社区对核心安全语义收紧的期待，方向值得肯定。

---

## Bug 与稳定性

今日无新增 Bug 类 Issue，但 3 条 PR 反映了 3 个潜在的稳定性/兼容性问题：

| 严重程度 | 问题描述 | 状态 |
|----------|----------|------|
| 中 | **OpenAI 严格模式下字段丢失**（PR #1232）：由于缺少 `additionalProperties=false` 声明，Codex 在调用工具时发送 null 或空值，导致数据缺失 | 已有修复 PR 待合入 |
| 中 | **MCP 服务器重启后客户端失效**（PR #1231）：活跃对话持续向已关闭的客户端连接发送调用，直到下一轮重建 registry，存在会话中途静默失败的隐患 | 已有修复 PR 待合入 |
| 低 | **Browserless 新版本不兼容**（PR #1229）：v2 容器协议变化可能导致部署在较新容器环境中的用户无法正常启动浏览器会话 | 已有修复 PR 待合入 |

以上问题均属于外部依赖版本演进引发的适配问题，未发现项目自身的核心逻辑缺陷，整体稳定性良好。

---

## 功能请求与路线图信号

今日没有新提交的功能请求。结合待合入的 PR 与已关闭的 Issue，可提取两条路线图信号：

1. **安全钩子策略可配置**（Issue #1230 已关闭，已实现）：hook 失败默认继续 vs. 失败阻断将成为安全策略层面的一个可选项。后续版本大概率会围绕钩子安全边界继续深化（如超时检测、审计日志等）。
2. **外部生态兼容性优先**（PR #1232、#1229）：Moltis 正在同步适配 OpenAI 工具调用规范与主流无头浏览器服务（Browserless）的新版本协议，表明项目正积极拥抱 AI 原生工具链生态。后续版本中“对主流外部服务的即插即用兼容”可能是一个稳定的演进方向。

---

## 用户反馈摘要

今日在 Issue 讨论中收到的用户声音较少，但 Issue #1230 中包含了一个非常清晰的使用场景反馈：

**关键痛点**：一位用户将 Moltis 的 `BeforeToolCall` 钩子用作安全边界（例如执行自定义 shell 策略），但当钩子自身超时或崩溃时，工具调用仍会继续——这等同于安全防线出现“静默失守”，在自动化代理场景中不可接受。作者通过该 Issue 提议引入 fail-closed 错误策略，并得到了实现。

**用户诉求提炼**：对于将 Moltis 嵌入自动化/代理工作流（尤其是涉及敏感操作）的用户，**故障模式下的安全默认值** 比“总体成功率”更为重要。“宁可调用失败，也不可绕过策略”——这一诉求已被采纳并实现。

---

## 待处理积压

当前暂无长时间未响应或高价值的积压 Issue/PR。今日 3 条 PR 均为 22 日提交、23 日仍在等待审查中，时效性正常。建议维护者在下一个工作周期内优先处理这 3 条 PR 的 code review 与合入，以免适配成本随时间累积。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，我是您的 AI 智能体与个人 AI 助手领域开源项目分析师。根据 CoPaw 项目在 2026 年 8 月 23 日的 GitHub 数据，我为您生成了以下项目动态日报。

---

### CoPaw 项目动态日报 (2026-08-23)

**项目健康度评估：良好。** 项目社区活跃度较高，Issue 和 PR 的响应速度较快，且维护者积极参与讨论。虽然今日无新版本发布，但有多项功能改进和 Bug 修复在推进中，项目处于稳步迭代阶段。

---

#### 1. 今日速览

过去 24 小时内，CoPaw 项目共产生 7 条 Issue 更新和 4 条 PR 更新。其中，新增/活跃 Issue 6 条，关闭 1 条；4 个 PR 均在待合并状态，暂无新合并或关闭的 PR，也无新版本发布。社区讨论焦点集中在**界面可用性**（如推理过程折叠、输出空行问题）和**多模态/模型兼容性**（如 OpenRouter/OpenCode 模型显示、图片尺寸限制）。所有新提交的 PR 均来自社区贡献者（first-time-contributor），这显示出项目具有良好的社区吸引力和低门槛的贡献机制。

---

#### 2. 版本发布

**无。** 过去 24 小时内没有检测到新版本发布。

---

#### 3. 项目进展

今日**没有** PR 被合并或关闭，因此项目的核心代码库没有发生直接的变更。但 4 个处于开放状态的 PR 值得关注，它们分别推进了以下方向：

- **跨设备浏览器支持** ([#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054)): `feat(chrome): support remote bridge endpoint for LAN/network browsers`。该 PR 旨在让 Chrome 插件支持通过局域网连接非本机的浏览器，这将显著提升 CoPaw 在远程开发或复杂网络环境下的使用灵活性。
- **定时任务模型自定义** ([#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050)): `feat(console): add per-cron-job model override picker`。该 PR 为每个定时任务（Cron Job）增加了独立的模型选择器，允许不同任务使用不同的模型，而不再是“运行时就跟随 Agent 当前激活的模型”，这对于精细化管理工作流非常有价值。
- **配置文件显示修复** ([#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808)): `fix(console): show custom profile markdown files`。该 PR 修复了自定义 Markdown 配置文件在控制台界面无法显示的问题，解决了后端已返回数据但前端将其过滤掉的功能缺陷。
- **文档完善** ([#7214](https://github.com/agentscope-ai/QwenPaw/pull/7214)): `docs(readme): list Access Policy as the fifth security layer`。该 PR 修正了 README 文档中安全特性列表遗漏“Access Policy”的问题，使文档更加准确。

**点评**：尽管今日无合并，但这些高质量 PR 集中在功能增强和社区反馈修复上，表明项目正积极将社区贡献整合到未来版本中。

---

#### 4. 社区热点

今日最受关注的动态是 Issue [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196)，该问题获得 2 条评论和 1 个 👍。

- **Issue #7196: [Feature] 一直显示推理过程是严重的视觉干扰**：用户 `rerbin` 提出，默认显示推理过程（Reasoning）对关注工作进程造成了严重的视觉干扰，并建议参照 `hermes` 的做法，允许用户自定义折叠或隐藏推理过程。_分析_：此诉求反映了用户对 **GUI 界面信息密度和定制化** 的需求，高层次的用户希望界面简洁，只在他们需要调试时才显示详细过程。这可能是 UI/UX 设计上的一个重要改进方向。

---

#### 5. Bug 与稳定性

今日报告了 4 个新的 Bug，按严重程度排序如下：

- **(高) 图片尺寸超限导致会话崩溃** ([#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212)): 当内联的图片像素尺寸超过模型限制（虽然字节数小于 2MB），会导致请求抛出 `MODEL_EXECUTION_ERROR` 并结束会话。这属于**严重的稳定性问题**，将直接中断用户的工作流。目前**无**关联的 Fix PR。
- **(中) LLM 输出工具名被字符替换** ([#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216)): `execute_shell_command` 工具名在 LLM 输出中被间歇性替换（例如 `l` → `|`），导致调用失败。这是一个**间歇性的解析问题**，影响了核心工具的执行，目前**无**关联的 Fix PR。
- **(中) 中文 Windows 环境编码问题** ([#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043)): 此问题昨日已关闭。它要求增加一个选项，在启动时自动执行 `chcp 65001` 以切换到 UTF-8 环境，解决中文 Windows 下 Shell 工具的输出乱码问题。该问题的关闭表明维护者可能已通过某种方式解决，或已在内部处理。
- **(低) 添加模型后界面不显示** ([#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215)): 添加 OpenRouter 和 OpenCode 模型后端后，GUI 桌面端无法完整显示这些模型。这是一个**界面显示问题**，影响配置的可视化确认，目前**无**关联的 Fix PR。

---

#### 6. 功能请求与路线图信号

今日收到的功能请求主要集中在以下几个方面，结合现有的 PR 可以窥见项目未来的路线图方向：

- **界面定制化** ([#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196))：提议增加“折叠/隐藏推理过程”的选项。这代表了用户对更简洁、定制化 UI 的追求，很可能被提上日程。
- **多模态媒体限额细化** ([#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201))：提议将现有的统一 `max_inline_media_bytes` 限额拆分为针对图片、视频、音频的独立限额，并在 Provider 高级设置中暴露给用户。这说明用户对于 **不同模态资源的精细化控制** 有明确需求。
- **定时任务的模型自定义** ([PR #7050](https://github.com/agentscope-ai/QwenPaw/pull/7050))：虽然该 PR 仍待合并，但其内容本身就是一个强大的功能信号，意味着项目可能在后续版本中支持按任务粒度配置模型。

**路线图信号**：社区的活跃讨论和 PR 提交都指向了一个共同方向——**提升高级用户对运行时环境和资源管理的控制粒度**。无论是折叠推理过程、拆分媒体限额，还是定时任务模型覆盖，都体现了这一趋势。

---

#### 7. 用户反馈摘要

- **不满/痛点：**
  - **视觉干扰与输出杂乱**：用户 `rerbin` 认为“一直显示推理过程是严重的视觉干扰” ([#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196))。
  - **输出格式难以控制**：用户 `xiaohushi512` 抱怨“会话输出总是有无意义的空行”，即使多次要求也无法解决，给查看带来不便 ([#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213))。
- **使用场景：**
  - **深度开发与调试**：用户 `rerbin` 提到，只有在“调试 skill 或 agent 或排查异常时”才需要查看推理过程，这是一个典型的开发者场景。
  - **跨平台使用**：用户 `NicholaLau` 在使用 OpenRouter 等第三方模型后端时遇到界面显示问题，反映了用户对多模型服务集成的需求 ([#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215))。
- **正面反馈：**
  - 目前没有直接的正面反馈，但社区贡献者积极提交 PR（如修复文档、增加功能），从侧面说明他们对项目的未来抱有期待并愿意投入精力。

---

#### 8. 待处理积压

- **长期遗留的 PR**：以下 PR 创建时间较早且仍处于等待合并或审阅状态，建议维护者关注：
  - PR [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) `fix(console): show custom profile markdown files` (创建于 8 月 7 日)。
  - PR [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) 和 [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) (均创建于 8 月 15 日，且处于 "Under Review" 状态)。

- **历史遗留的 Bug**：虽然今日关闭了 [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043)（编码问题），但我们需要回顾是否有更早、未关闭的严重 Bug 积压，以免影响项目健康度。由于数据限制，此处无法列出更早的 Issue，但建议维护者定期审查积压列表。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-23

## 1. 今日速览

ZeroClaw 项目今日保持高活跃度，过去 24 小时内有 50 条 Issue 更新和 50 条 PR 更新，Issue 关闭率为 22%（11/50），PR 合并/关闭率为 14%（7/50），主要精力集中在 RFC 评审和大型 PR 的推进上。项目目前无新版本发布，正处于 **v0.9.0 里程碑的关键架构转型期**——多个高风险的 RFC（运行时会话所有权、内存生命周期解耦、wire protocol 一等公民等）和大型重构 PR（网关认证边界、WASM 插件化、SOP 控制平面）并行推进中。值得关注的是，**超过 60% 的活跃 PR 带有 `risk:high` 标签**（如 #9476、#10246、#9744 等），且多条 PR 处于 `needs-author-action` 状态，说明维护者正在密集审查中，但也存在一定的积压风险。新增 Issue 中出现了用户对会话管理的直接抱怨（#10141），以及一批测试稳定性问题（#10251），项目健康度整体良好但需关注合并积压。

## 2. 版本发布

过去 24 小时内没有新版本发布。当前最新版本为 v0.8.3。但有明确的 v0.9.0 里程碑在推进中（见 #7432 tracker），该版本将包含认证、安全加固、网关边界、A2A/多智能体边界等大量破坏性变更。

## 3. 项目进展

今日有 7 个 PR 被合并或关闭，整体推进了 配置事务性、桌面端 UX、SOP 可见性、依赖升级 等方向：

| PR | 标题 | 类型 | 状态 | 重要性 |
|---|---|---|---|---|
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | fix(config): roll back auto-created map aliases when config set fails | 修复 | 已合并 | 高 — 修复了 `config/set` 失败时自动创建的 map alias 会被残留的问题，改为事务性写入，避免配置污染。 |
| [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) | fix(cli): detect installed AppImage and use a working desktop download URL | 修复 | 已合并 | 中 — 解决了 `zeroclaw desktop` 命令无法检测已安装的 AppImage 且下载 URL 失效的问题（修复 #9202）。 |
| [#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) | feat(zerocode): expose the SOP pane as a read-only status view | 功能 | 已合并 | 中 — 将 Zerocode SOP 面板通过 `Mode::Sop` 暴露到标准 MODES 清单中，使键盘/模式栏导航可达（完成 #9682 的 MVP）。 |
| [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) | fix(sop): wire authenticated HTTP fan-in | 修复 | 已合并 | 高 — 为 SOP webhook 触发器增加认证的 `POST /sop/{*rest}` fan-in，未匹配时返回 404 且不降级到 chat/model fallback。 |
| [#9960](https://github.com/zeroclaw-labs/zeroclaw/pull/9960) | fix(quickstart): reject duplicate enabled webhook ports | 修复 | 已关闭 | 中 — 拒绝多个启用的 webhook 别名声明同一监听端口（默认 8090），防止一个 listener 静默失败。 |

**整体向前推进**：SOP 控制平面的认证和可见性两个专项在今天落地（#9203 和 #9694），`config set` 的事务性保障也已完成（#9281）。这些 PR 大多对应着 #8288（SOP 里程碑）、#9682（zerocode SOP 面板）等 tracker 的阶段性目标。依赖升级 PR #10196（47 个 Rust 依赖更新）仍在待合并状态。

## 4. 社区热点

### 🏆 最热 Issue（24 评论）

**[#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)**

这是当前社区讨论的绝对焦点。由 NiuBlibing 提出的架构级 RFC，已经历了 3 个 revision（7/28 → 8/03 → 8/23），讨论持续了近一个月。核心提案是将「会话所有权」从各渠道/网关上移到运行时统一管理，并引入传输表面适配器层。**这条 RFC 与 #9488/#9600 形成 ownership boundary 绑定**，意味着它是 v0.9.0 架构转型的核心决策点之一。24 条评论说明了社区对会话模型演进的高度关注——这直接关系到所有渠道集成方和下游开发者的迁移成本。

### 🥈 次热 Issue（19 评论）

**[#7462 — 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)**

一个悬置了 2 个多月的 Windows 测试失败问题（Unix-only 命令、路径语义、控制台编码），在今日仍然活跃。CI 只跑 Linux 导致该问题长期未被发现，反映了 **CI 覆盖不足** 的隐患。用户 NiuBlibing 持续跟进，社区对跨平台支持的呼声正在积累。

### 🥉 第三热（16 评论）

**[#6850 — RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)**
**[#8780 — RFC: Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)**

两条 RFC 各有 16 条评论。前者（#6850）是关于内存生命周期策略与存储后端解耦的架构提案，由 fanchanghu 提出，讨论了近 3 个月；后者（#8780）则是 Gemini Live 实时语音通道的 v2 重写，从最初的提案转型为 broker 合约设计。这两条反映了社区对 **模块化架构** 和 **实时语音交互** 两个方向的持续兴趣。

### 📌 跨 Issue 信号

社区讨论的核心诉求是：**ZeroClaw 正处于从「单体渠道集成」向「运行时统一抽象」转型的十字路口**。一方面，开发者希望架构更加模块化和可扩展（#9487、#6850、#8850）；另一方面，用户在实际使用中遇到了会话管理、Windows 兼容性、消息去重等直接体验问题（#10141、#7462、#9718）。

## 5. Bug 与稳定性

### 严重（S2 - degraded behavior / risk:high）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) | Telegram 渠道在模型同时返回 tool_call 和 content 时投递重复消息 | OPEN, in-progress | 无 |
| [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | `block_high_risk_commands = false` 不生效——allowlist 的高风险命令在父路径仍被硬阻断 | OPEN, accepted | 无 |
| [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) | 17 个 telegram listen_* 测试依赖墙钟超时断言，负载高时误报失败（同类 #9429） | OPEN | 无 |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 上 74 个测试失败（Unix-only 命令、路径语义、编码） | OPEN, accepted, p1 | 无（需 CI 扩展） |
| [#9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) | WASM 插件调用无墙钟超时，慢 HTTP 响应可无限期运行 | **CLOSED** | 已解决 |
| [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) | `config init` 生成的模板配置无法通过严格加载器——新配置天生降级 | **CLOSED** | 已解决 |

### 中等（S2/S3 - risk:medium/low）

- [#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) — 守护进程诊断日志丢失底层错误链（S2, accepted）
- [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) — 守护进程 stdout/stderr 日志无大小/数量上限（S2, in-progress）
- [#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) — 提供商 turn 失败被通用的 retry envelope 掩盖了原因诊断（S2, in-progress）
- [#9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) — `models refresh` 并发运行时可能丢失缓存条目（S2, in-progress）
- [#9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) — 文件系统监听器不是取消感知的，阻塞 idle receive 会阻止 supervisor 关闭（S2, p1, in-progress）
- [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) — `zeroclaw desktop` 使用失效下载 URL 且无法检测已安装 AppImage — **CLOSED**（由 #9291 修复）
- [#9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640) — WhatsApp Web 策略文档引用了不存在的 V2 key `allowed_numbers` — **CLOSED**
- [#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) — 远程 MCP 服务器不支持自定义 CA 信任 — **CLOSED**

## 6. 功能请求与路线图信号

### 需求端（来自 Issues）

| Issue | 功能请求 | 热度 | 状态 |
|---|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 运行时统一管理会话所有权 + 传输适配器 | 24 评论 | RFC 迭代中 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 内存生命周期策略与存储后端解耦 | 16 评论 | RFC 评审中 |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Gemini Live 实时语音通道（v2 broker 合约） | 16 评论 | RFC 评审中 |
| [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) | 会话功能可用性改进（复制、管理） | 3 评论 | accepted，等待实现 |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | 网关增加「无 agent 回合」的原文发送路由 | 4 评论 | RFC 评审中 |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | cron 任务增加确定性前置条件门控 | 5 评论 | accepted |

### 供给端（来自开放 PR）

以下 PR 正在实现中，大部分与上面的 RFC/需求对应，是下一版本（v0.9.0）的候选内容：

- **认证与安全**：[#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) 网关 webhook 认证边界（WhatsApp/Linq/Nextcloud Talk）；[#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) 命令审计默认关闭（对应 #9391）
- **架构转型**：[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) 可选渠道/工具从编译期 feature flag 迁移到 WASM 运行时插件（对应 PR [#9129](https://github.com/zeroclaw-labs/zeroclaw/pull/9129) 插件渠道配置服务）
- **SOP 控制平面**：[#9476](https://github.com/zeroclaw-labs/zeroclaw/pull/9476) 增加认证的操作者取消（对应 #8288 tracker）
- **供应商能力**：[#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) 模态解析器接入 capabilities_for_model；[#9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645) ZeroRouter 预设和设备流登录；[#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) Anthropic 未完成终端响应分类
- **配置/CLI**：[#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) TodoWrite 显示配置从 daemon 迁移到 zerocode（破坏性变更）；[#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) git 子命令在风险分类器中解析全局选项

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中提取的典型用户声音：

**😤 挫折点**

- **会话管理令人沮丧**（[#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141)）：用户 klonuo 直言「It's quite frustrating to get into previous session」，抱怨 zerocode 中复制会话/代码片段需要两个独立的 ascii 按钮，操作繁琐。这是一线用户对日常使用体验的直接反馈，获得 accepted 状态说明维护者认可了该问题。
- **高风险命令配置不生效**（[#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164)）：用户 rawlink 报告 `block_high_risk_commands = false` 即使配合 `allowed_commands` 也不生效。这是一个严重的配置信任问题——用户按文档配置却得到相反行为。
- **配置迁移受阻**（[#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436)）：用户 tw-360vier 指出 `config init` 生成的配置无法通过严格的加载器，新配置「天生降级」，`config migrate` 退出码为 1。此问题影响所有新用户的上手体验。

**💡 建议/期望**

- **确定性前置条件门控**（[#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)）：用户 scottgl9 建议 cron 任务支持 pre-hook 检查，exit 0 继续、exit 10 跳过、其他退出码报告失败。这种「便宜的先检查再跑」模式在运维场景中非常有价值。
- **自定义 CA 信任**（[#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339)）：用户对私有网络中的远程 MCP 服务器需要显式 CA 证书支持，说明 ZeroClaw 正在被更广泛地部署到企业内部网络中。

**📊 健康度信号**

- `needs-author-action` 标签在多个 PR 上出现（#9476、#9447、#9743、#9645、#9635），说明维护者已给出反馈等待作者更新，整体协作节奏健康。
- `no-stale` 标签大量存在（约 20 个 Issue/PR），说明这些议题虽然持续时间长但仍在活跃推进中，未出现被遗忘的现象。

## 8. 待处理积压

### ⚠️ 需维护者优先关注

| 项目 | 说明 | 等待时长 |
|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — Windows 74 测试失败 | p1 严重度，已 accepted 但 2 个多月无 fix PR。CI 仅覆盖 Linux 是结构性问题，需要扩展 CI 矩阵或修复 Windows 兼容性 | 74 天 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — 细粒度沙箱策略 RFC | needs-author-action 状态，已等待近 3 个月，涉及文件系统和网络限制，是 v0.9.0 安全加固的一部分 | 87 天 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — 维护者决策队列 tracker | 决策队列本身需要维护者持续投入，当前 13 条评论多为 RFC 链接 | 50 天 |

### ⏳ 长时间未合并的 PR

| PR | 标题 | 等待时长 | 风险 |
|---|---|---|---|
| [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) | refactor(config)!: TodoWrite 显示配置从 daemon 迁入 zerocode（破坏性变更） | 42 天 | high |
| [#9129](https://github.com/zeroclaw-labs/zeroclaw/pull/9129) | feat(plugins): 渠道组件的配置服务（WASM 插件化前置） | 36 天 | high |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | fix(anthropic): 未完成终端响应分类 | 27 天 | medium |
| [#10196](https://github.com/zeroclaw-labs/zeroclaw/pull/10196) | chore(deps): 47 个 Rust 依赖升级（含 tokio 1.52.3→1.57+）| 3 天 | 需尽快合并以消除旧依赖风险 |

### 🔗 相互依赖的决策链

当前存在一个需要维护者整体决策的链路：**#9487（会话所有权 RFC）→ #6850（内存生命周期解耦）→ #8850（WASM 插件化）→ #9129/PR（插件配置服务）**。这些决策相互影响，建议维护者安排一次集中评审以加速 v0.9.0 的架构定型，否则 `needs-maintainer-review` 状态的积压会继续扩大。

---

*本报告基于 2026-08-23 的 GitHub 数据自动生成。所有链接均指向 zeroclaw-labs/zeroclaw 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/xiehd77-del/agents-radar) 自动生成。*