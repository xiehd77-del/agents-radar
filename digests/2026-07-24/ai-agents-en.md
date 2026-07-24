# OpenClaw Ecosystem Digest 2026-07-24

> Issues: 302 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-24 02:47 UTC

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

## OpenClaw Deep Dive

Here is the OpenClaw project digest for July 23, 2026.

---

### 1. Today's Overview

OpenClaw is in a phase of intense development and maintenance, with high activity across both bug fixes and feature work. The project tracked 302 updated issues and 500 pull requests in the last 24 hours, though a significant portion of these are long-standing items receiving maintainer attention. Critical stability concerns remain, particularly around silent subagent failures, session state corruption, and regressions introduced in recent releases. The community is actively reporting blockers, and the maintainers are responding with targeted PRs, though a high backlog persists.

### 2. Releases

**No new releases** were recorded for this date. The most recent version in circulation appears to be `2026.7.2-beta.3`, which has introduced a notable Telegram regression.

### 3. Project Progress

The project is actively resolving issues, with 184 PRs merged/closed and 93 issues resolved in the last 24 hours. Key areas of progress include:

- **Agent Stability & Refactoring:** PR [#113201](https://github.com/openclaw/openclaw/pull/113201) refactors embedded attempt terminal outcomes to prevent contradictory states. PR [#113190](https://github.com/openclaw/openclaw/pull/113190) fixes deadlock in subagent completion after `sessions_yield`.
- **Platform & Provider Support:** PR [#111696](https://github.com/openclaw/openclaw/pull/111696) updates the MiniMax coding-plan API usage parsing. PR [#112976](https://github.com/openclaw/openclaw/pull/112976) fixes the Novita model selector showing zero models after configuration.
- **Security & Approvals:** PR [#113193](https://github.com/openclaw/openclaw/pull/113193) adds bold formatting to approval prompts for iMessage and other rich-text channels. PR [#92307](https://github.com/openclaw/openclaw/pull/92307) provides a startup warning when host approvals clamp exec security policies.
- **Developer Experience:** PR [#111457](https://github.com/openclaw/openclaw/pull/111457) introduces a new `openclaw browser batch` CLI subcommand. PR [#112991](https://github.com/openclaw/openclaw/pull/112991) allows the gateway to continue trusted HTTP trace contexts from external orchestrators.

### 4. Community Hot Topics

The community is most engaged with issues that directly impact reliability and core usability:

- **Silent Subagent Failures ([#44925](https://github.com/openclaw/openclaw/issues/44925))** – This is the top issue by comment count (22), detailing how subagent tasks are silently lost on timeout without retry or notification. This represents a fundamental trust-breaking bug for users relying on multi-agent workflows.
- **Cross-Channel Session Conflict ([#102020](https://github.com/openclaw/openclaw/issues/102020))** – With 15 comments, this bug causes the second message in a session to fail with "reply session initialization conflicted," affecting both Signal and other channels. The high engagement suggests this is a widespread user experience blocker.
- **Compaction Pipeline Timeout ([#92043](https://github.com/openclaw/openclaw/issues/92043))** – Users are discussing the impact of a reduced 180s compaction timeout that fails identically on each turn for legitimate long-running summarizations, effectively bricking sessions for users with long histories.
- **Thinking Block Corruption ([#94228](https://github.com/openclaw/openclaw/issues/94228))** – With 14 comments, this issue describes how replaying historical `thinking` blocks on the native Anthropic path permanently bricks long tool-use threads, a significant provider-specific regression.

### 5. Bugs & Stability

The project is facing several high-severity (P0, P1) bugs and regressions.

**Critical (P0):**
- **Gateway Startup Failure ([#108435](https://github.com/openclaw/openclaw/issues/108435)):** Users are unable to start the gateway after updating to `2026.7.1`, with a regression causing startup failure across systemd, ollama, and manual launch.
- **Cron Store Migration ([#90378](https://github.com/openclaw/openclaw/issues/90378)):** Upgrading from 5.28 to 6.1 silently migrates the cron store to SQLite and sets new jobs to `delivery.mode=announce`, causing channel errors.

**High (P1):**
- **Subagent Completion Loss ([#44925](https://github.com/openclaw/openclaw/issues/44925)):** Silent loss of subagent results on timeout.
- **Compaction Timeout ([#92043](https://github.com/openclaw/openclaw/issues/92043)):** Legitimate long compactions fail repeatedly due to a brute-force timeout.
- **Cron Schema Incompatibility ([#108580](https://github.com/openclaw/openclaw/issues/108580)):** The cron tool schema in `2026.7.1` breaks llama.cpp grammar-constrained tool calling, causing all chat requests to fail.
- **MCP Transport Failure ([#98435](https://github.com/openclaw/openclaw/issues/98435)):** After gateway restart, the MCP loopback transport does not re-handshake, causing silent tool-call failures despite a successful recovery message.

**Regressions (Notable):**
- **Telegram DM Scoping ([#111519](https://github.com/openclaw/openclaw/issues/111519)):** A regression in `2026.7.2-beta.3` causes Telegram DM replies to fall back to stale DM-scope cleanup, delaying delivery.
- **Tool Result Empty ([#99481](https://github.com/openclaw/openclaw/issues/99481)):** On `2026.7.1-beta.1`, the tool result channel becomes empty after several calls, meaning the agent no longer sees its own actions.
- **Control UI Avatars ([#112696](https://github.com/openclaw/openclaw/issues/112696)):** Workspace-relative file avatars not loading after upgrade to `2026.7.1-2`.

**Fix PRs Exist For:** A PR is open to resolve the Novita provider model listing issue ([#103532](https://github.com/openclaw/openclaw/issues/103532)). A fix for the WhatsApp voice transcript trust issue is in PR [#113111](https://github.com/openclaw/openclaw/pull/113111).

### 6. Feature Requests & Roadmap Signals

Several feature requests show signs of being actively considered or under development:

- **Unified Cron Automation ([#110950](https://github.com/openclaw/openclaw/issues/110950)):** A proposal to unify heartbeat, watchers, and scheduled automation into a single "cron" primitive. This was recently closed, perhaps as a duplicate or superseded by internal work, indicating it's on the roadmap.
- **Session TTL / Rotation ([#45390](https://github.com/openclaw/openclaw/issues/45390)):** A popular request for configurable maximum session lifetimes to prevent context bloat. This is a direct response to the compaction timeout issues, making it a likely candidate for the next release.
- **First-Class Session Chain Tracking ([#11040](https://github.com/openclaw/openclaw/issues/11040)):** Users are requesting DAG tracing of subagent executions. This is a core need for debugging complex agent interactions and is growing in priority.
- **RBAC & Team Deployments ([#43673](https://github.com/openclaw/openclaw/issues/43673)):** A comprehensive request for org/team deployment scaffolding, RBAC, and deployment manifests. Signals a push toward enterprise adoption.

**Prediction:** The **Session TTL** and improvements to the **compaction pipeline** are the most likely features to appear next, as they directly address the most painful current stability issues.

### 7. User Feedback Summary

**Dissatisfaction & Pain Points:**
- **Silent Failures:** The most vocal sentiment is frustration with "silent" failures (e.g., subagents, MCP transport). Users want *any* notification or retry mechanism, not just a lost result.
- **Upgrade Regressions:** Several users express a fear of upgrading, as recent versions have introduced regressions that break gateways, cron jobs, or specific provider integrations. The "worked before, now fails" label is appearing frequently.
- **Context Bloat:** Users running long sessions are actively hitting provider limits and timeouts, with no graceful way to rotate or prune context without losing history. The [refusal of `pruning: off` settings](https://github.com/openclaw/openclaw/issues/48579) to actually stop compactions is a particularly confusing pain point.
- **Configuration Blind Spots:** Users are confused by conflicting diagnostics (e.g., [doctor says "memory disabled" but it's running](https://github.com/openclaw/openclaw/issues/87637)) and silent migration of critical stores like the cron DB.

**Use Cases & Satisfaction:**
- **Complex Automation:** Users are pushing OpenClaw hard in production, using it for multi-agent orchestration, cron-based automation, and cross-channel management (Telegram, Discord, WhatsApp, Matrix).
- **Platform Agnosticism:** There is strong desire for equal feature support across all channels (e.g., MCP tools not working on Discord, approval formatting missing on iMessage). The breadth of channels (11+ distinct channels in issue labels) shows a highly diverse user base.

### 8. Backlog Watch

Several critical issues remain in the backlog without clear maintainer action (marked `needs-maintainer-review`):

- **Context Bloat ([#67419](https://github.com/openclaw/openclaw/issues/67419)):** Opened April 15, this issue describes how bootstrap files waste 20-30% of context on every turn. It has 9 comments but is still awaiting a product decision.
- **All LLM API Calls Timeout ([#43374](https://github.com/openclaw/openclaw/issues/43374)):** Opened March 11, this critical bug causes all concurrent agent API calls to fail simultaneously. It is labeled `needs-live-repro` but remains open, limiting multi-agent scalability.
- **Group Session Consolidation ([#7524](https://github.com/openclaw/openclaw/issues/7524)):** A highly requested feature (+4 reactions) to allow group chats to be consolidated into the main session, similar to `dmScope: "main"`. No PR has been linked.
- **Windows/WSL Flaky Tests ([#7057](https://github.com/openclaw/openclaw/issues/7057)):** This issue, opened in February, documents reproducible test failures on WSL. It has linked PRs but remains open, suggesting a persistent platform stability problem.
- **Cron `status` Non-determinism ([#81514](https://github.com/openclaw/openclaw/issues/81514)):** The status of isolated cron jobs oscillates between `ok` and `error` for identical inputs. This is a serious reliability issue for any automation that monitors job health.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

## Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-07-24

### 1. Ecosystem Overview

The personal AI agent open-source landscape is characterized by intense, high-velocity development driven by a shared set of critical challenges: security hardening, session reliability, and multi-agent interoperability. The ecosystem is bifurcating between monolithic, feature-rich "core" projects (like OpenClaw and Hermes Agent) and a growing number of specialized, lightweight forks (like NanoClaw, PicoClaw, and TinyClaw) that prioritize specific deployment scenarios like edge devices or constrained environments. A clear trend is the community's demand for production-grade stability, with many projects actively addressing regressions introduced by rapid feature iteration. The emergence of the A2A (Agent-to-Agent) protocol in projects like ZeroClaw signals that the next major architectural wave will focus on inter-agent communication and orchestration.

### 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status (24h) | Health / Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 302 | 500 | None | 🟡 High activity, high regression risk, large backlog |
| **NanoBot** | 3 | 38 | None | 🟢 Very high activity, strong fix velocity, stable |
| **Hermes Agent** | 50 | 50 | None | 🟡 High activity, growing issue backlog (39 open) |
| **IronClaw** | 31 | 50 | None | 🟢 Pre-launch intensity, high fix rate, many blockers |
| **CoPaw** | 30 | 50 | v2.0.1-beta.2 | 🟡 Rapid iteration, critical v2.0 regressions |
| **ZeroClaw** | 50 | 50 | None | 🟡 Very high activity, S0 data-loss bugs, intensive |
| **PicoClaw** | 2 | 8 | None | 🟢 Moderate, stable, dependency maintenance |
| **NanoClaw** | 1 | 10 | None | 🟢 Moderate, healthy maintenance phase |
| **Moltis** | 2 | 5 | 20260723.02/03 | 🟢 Stable maintenance, targeted enhancements |
| **LobsterAI** | 0 | 50 | None | 🟢 High-velocity cleanup sprint, zero open PRs |
| **ZeptoClaw** | 2 | 1 | None | 🟡 Moderate, focused on critical safety fixes |
| **NullClaw** | 0 | 0 | N/A | ⚪ Inactive |
| **TinyClaw** | 0 | 0 | N/A | ⚪ Inactive |

**Notes:**
- **Health Score:** 🟢 = Healthy (stable, resolving issues, merged PRs); 🟡 = Watch (high activity but regressions or backlog); ⚪ = Inactive.
- **Activity:** "Issues/PRs Updated" includes both new and existing items. OpenClaw's high numbers are partially due to backlog grooming.

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale & Community:** OpenClaw is by far the largest project in the ecosystem, with 302 issues and 500 PRs updated daily, suggesting a massive user base and contributor pool. It supports 11+ distinct messaging channels.
- **Architecture:** It acts as the "core reference" implementation, with other projects (e.g., LobsterAI) actively backporting its runtime patches. Its ecosystem is the most comprehensive.
- **Feature Depth:** OpenClaw's feature set—including multi-agent orchestration, cron-based automation, and platform-agnostic channel support—is the broadest.

**Technical Approach Differences:**
- While projects like NanoBot and IronClaw are moving towards modular "optional-skill" architectures (reducing bloat), OpenClaw remains a monolithic core. This gives it feature parity but creates higher regression risk, as evidenced by the P0 errors in recent releases.
- OpenClaw's development is heavily reactive to a large user base, leading to a high volume of bug reports and a "fix-forward" dynamic similar to CoPaw.

**Community Size Comparison:**
- OpenClaw's daily volume (802 total items) dwarfs even the next most active projects (Hermes, IronClaw, ZeroClaw at ~100 each). This indicates a community that is an order of magnitude larger. The "fear of upgrading" sentiment within its community is a direct consequence of this scale and rapid release cadence.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide priorities.

| Requirement | Projects Affected | Specific Need |
| :--- | :--- | :--- |
| **Session State Reliability** | OpenClaw, Hermes Agent, ZeroClaw, CoPaw | Preventing data loss from compaction, coroutines, or channel cursor errors. |
| **Silent Failure Handling** | OpenClaw, ZeroClaw | Retry/notification for lost subagent results (OpenClaw #44925) or channel messages (ZeroClaw #9188). |
| **Context/Long Session Management** | OpenClaw, Hermes Agent, CoPaw | Requesting session TTL, compaction improvements, and memory pruning to avoid provider limits. |
| **Channel Feature Parity** | OpenClaw, ZeroClaw, Moltis | Equal support for typing indicators, approvals, media, and self-messages across all chat platforms (Telegram, Signal, Discord, etc.). |
| **Security Hardening (Tool Exec)** | ZeptoClaw, NanoBot, ZeroClaw | Scrubbing subprocess environments, preventing shell injection, and enforcing workspace isolation. |
| **Multi-Agent Interoperability** | ZeroClaw, CoPaw, OpenClaw | A2A protocol adoption; desire for one agent to call/invoke another from a different project. |

### 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | "Reference" implementation; widest channel and feature support | Power users, multi-channel deployers | Monolithic core |
| **NanoBot** | Rapid, strongly-reviewed PRs; focus on WebUI & channel reliability | Developers, feature adopters | Modular, optional skills |
| **Hermes Agent** | Strong "MoA" (Mixture-of-Agents) feature; desktop UI focus | Desktop power users, creative use cases | Modular, skill-centric |
| **IronClaw** | Pre-launch, enterprise-focused; heavy QA & testing | Ops teams, enterprise deployers | Extension lifecycle model |
| **ZeroClaw** | A2A protocol pioneer; security & config hardening | Multi-agent orchestration teams | Config-driven, security-first |
| **CoPaw** | Fastest iteration; aggressive v2.0 migration | Chinese ecosystem, MCP users | Rapid iteration, beta releases |
| **PicoClaw** | Lightweight Go implementation; embedded/edge | Edge devices (NanoKVM), resource-constrained | Minimal, dependency-light |
| **NanoClaw** | Matrix-native E2EE focus; OpenCode compatibility | Matrix ecosystem users, security-conscious | Fork of NanoBot, focused |
| **Moltis** | Stable maintenance; Slack/enterprise proxy support | Enterprise Slack users, Sysadmins | Security-conscious, targeted |
| **LobsterAI** | Backporting OpenClaw patches; Windows installer hardening | Windows users, Chinese enterprises | Niche, platform-specific |

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (High Momentum, High Bugs)**
- **OpenClaw, ZeroClaw, CoPaw, LobsterAI**: These projects show the highest daily activity and are shipping fixes and features daily. They operate in a "fix-forward" mode, accepting regressions in favor of velocity. **Risk:** User trust can be eroded by upgrade fear and critical bugs (P0 data loss in OpenClaw/ZeroClaw).

**Tier 2: Stabilizing (Moderate Momentum, Increasing Maturity)**
- **IronClaw, Hermes Agent, NanoBot**: These projects are in or approaching a stabilization phase. IronClaw is in a pre-launch quality push. Hermes Agent has a growing backlog that needs clearing. NanoBot is merging PRs aggressively, suggesting a release candidate is imminent.

**Tier 3: Mature & Steady (Low Momentum, Stable)**
- **NanoClaw, PicoClaw, Moltis**: These are in a healthy maintenance phase, focusing on targeted fixes and dependency updates. They are reliable but not pushing major features.

**Tier 4: Inactive**
- **NullClaw, TinyClaw**: No activity in the last 24 hours. These may be abandoned or paused.

### 7. Trend Signals

The following industry trends can be extracted from the community feedback and development patterns across these projects:

1.  **Security is the #1 Infrastructure Concern:** Across ZeptoClaw, NanoBot, ZeroClaw, and Moltis, the most critical patches are for process isolation, credential leaking, and config race conditions. **Value for developers:** Building safe tool-execution sandboxes and environment scrubbing is no longer optional; it is a prerequisite for any multi-agent or third-party plugin ecosystem.

2.  **The "Agent-to-Agent" (A2A) Era is Beginning:** ZeroClaw's high-engagement tracker and CoPaw's support for third-party backends signal that the next major evolution is inter-agent communication. **Value for developers:** Future-proof your agent architecture by separating agent logic from transport, as A2A protocols will demand it.

3.  **Data Loss is the Deal-Breaker:** Silent failures in subagents (OpenClaw), message cursors (ZeroClaw), and compaction (OpenClaw, Hermes) are the most painful bugs. Users will tolerate slow features but not lost work. **Value for developers:** Implement proper retry logic, atomic commits for all state changes, and explicit error notifications.

4.  **"Bleeding Edge" has Painful Consequences:** The "fear of upgrading" expressed by OpenClaw users and the v2.0 regressions in CoPaw show that rapid releases without robust QA alienate power users. **Value for developers:** Invest in a hermetic testing platform (as IronClaw is doing with #6524). Automated CI is not enough; deterministic, model-based journey testing is required for production confidence.

5.  **WebUI Maturity is a Key Differentiator:** Projects like NanoBot and CoPaw are investing heavily in WebUI polish (session topics, model presets, file preview). A poor desktop/UI experience (Hermes Agent's session switching bug, ZeroClaw's unstuck reconnection) directly drives user frustration. **Value for developers:** The WebUI is the "front door" for non-CLI users; its reliability is as important as the core runtime.

6.  **Platform Agnosticism is Expected:** Users expect feature parity across Telegram, Signal, Discord, WhatsApp, and WeChat. The number of issues about missing features on specific platforms (approval formatting, typing indicators, media handling) is very high. **Value for developers:** Treat each channel adapter as a first-class integration, not an afterthought. An abstraction layer for common features (typing, approvals, reactions) is a worthwhile investment.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-07-24.

---

## NanoBot Project Digest — 2026-07-24

### 1. Today's Overview
NanoBot shows **very high activity**, driven by a concentrated effort to stabilize the codebase ahead of a likely release. Over 38 pull requests were updated in the last 24 hours, with a remarkable 32 closed or merged, indicating a strong maintainer push to clear the queue. Open issues remain stable (3 active), suggesting that the team is successfully keeping up with bug reports. The activity is heavily focused on fixing regressions, hardening security (workspace containment), and improving the WebUI user experience (model presets, topic management). No new releases were cut today, but the volume of merged fixes suggests a release candidate may be imminent.

### 2. Releases
**None.** No new versions were released in the last 24 hours.

### 3. Project Progress
The project made significant progress across several areas, driven by merged PRs:

- **WebUI Overhaul:** Multiple PRs improved the user interface. **PR #5070** introduced a new "Topics" concept for chats. **PR #5061** refactored model preset settings into a reusable workflow. **PR #5060** polished responsive layouts and settings search. **PR #5058** unified dark mode surfaces.
- **Channel Reliability:** **PR #5069** prevents connection state corruption after a user cancels a QR-code login (WeChat/Feishu). **PR #5055** fixed a hang when splitting long code fences in Telegram messages.
- **Workspace Security:** **PR #5065** fixed a critical gap where the WebUI file preview failed on the media directory when `restrictToWorkspace` was enabled. **PR #4594** closed a shell injection-like bypass for absolute paths in the ExecTool guard.
- **Session & Execution Stability:** **PR #5066** ensures stale exec sessions are retained after a cleanup failure for a retry attempt. **PR #5068** makes session listing tolerant of concurrent file removal. **PR #4901** fixed transcript corruption by replacing fragile JSON round-trips with `deepcopy`.
- **Testing & CI:** **PR #5064** fixes test portability by using `python3` instead of `python` in workspace tests, addressing Debian/Ubuntu compatibility.

### 4. Community Hot Topics
- **#5051 [OPEN] AgentRunner length recovery data loss:** This issue has high potential impact. The user reports that when a model response is truncated, the final concatenated output only keeps the last segment, losing earlier recovered text. It is a regression in the core agent loop. *Underlying need:* Users need deterministic, lossless recovery of long model outputs.
- **#5028 [OPEN] Media path vs. workspace conflict:** A user reports that files uploaded via Feishu are saved outside the workspace restriction and then become inaccessible. This touches on the core tension between convenience (upload media) and security (workspace isolation).

### 5. Bugs & Stability
Bugs are the dominant theme today, with fixes actively in progress.

- **Critical:** **Issue #5051** (AgentRunner length recovery data loss). The fix is in review via **PR #5056**.
- **High:** **Issue #5028** (Media/workspace conflict). A fix was merged today (**PR #5065**), resolving the WebUI preview part of the problem, but the root cause of file placement mentioned in the issue remains a concern.
- **High:** **Issue #5062** (Test fails on Debian/Ubuntu due to `python` vs `python3`). Fixed and merged via **PR #5064**.
- **Medium:** **Issue #4592** (ExecTool path bypass via `=` sign). Fixed and merged via **PR #4594**.
- **Medium:** **Issue #4940** (Legacy session metadata lost after restart). Fixed and merged.

### 6. Feature Requests & Roadmap Signals
- **Per-Conversation Model Override (#4253):** A closed enhancement request that suggests users want to dynamically switch between a fast, cloud model and a private, local model on a per-chat basis. Given the heavy recent work on model presets (**PR #5061**), this is a strong candidate for a future release. The new preset system provides the infrastructure for this feature.
- **Browser Support (#5059):** A Chinese user asked which browser versions are supported. While closed with low activity, it signals a demand for clearer documentation on the WebUI’s compatibility matrix (likely Chromium/Electron-based).
- **MCP Tool Lifecycle Refactor (#4858):** An open issue to decouple MCP server management from the core `AgentLoop`. This is a significant architectural improvement that will improve stability and extensibility. It is likely on the medium-term roadmap.

### 7. User Feedback Summary
- **Positive:** Users appreciate the move towards a more polished WebUI, specifically the new "Topics" view and the simplification of model settings. The rapid turnaround on the media/workspace bug fix was well-received.
- **Pain Points:** The most significant user pain is **data loss** during long model responses (Issue #5051). This is a regression that undermines trust in the core agent. The second major pain point is the **conflict between file uploads and workspace restrictions** (Issue #5028), which disrupts workflows for users integrating with enterprise chat tools like Feishu.
- **Use Case:** A user (rombert) describes a common AI agent use case: alternating between a paid, fast cloud model for time-sensitive tasks and a free, slower local model for private data.

### 8. Backlog Watch
- **PR #4987 [OPEN] (Security, P0):** This PR aims to prevent TOCTOU (time-of-check-time-of-use) race conditions in the filesystem tools by binding workspace validation to opened file handles. This is a critical security patch that has been open for 5 days. It should be prioritized for review and merge to close a potential privilege escalation vector.
- **PR #5042 [OPEN] (Bug, P1):** A fix for the cron scheduler where a null schedule value on one job can crash the entire cron store. Marked with a `conflict` label, suggesting it needs a rebase or code review to resolve merge conflicts.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-24

---

## 1. Today's Overview
Hermes Agent is in a period of **high activity** with 50 issues and 50 pull requests updated in the last 24 hours. The project has a healthy mix of bug fixes and feature development, with 20 PRs merged/closed today. However, the open issue count is elevated (39 open/active issues), suggesting a growing maintenance burden. No new releases were published, indicating the team is likely preparing for a v0.20.0 milestone. Community engagement remains strong, with several long-running feature requests and critical bugs receiving sustained attention.

---

## 2. Releases
**None.** No new releases were published in the last 24 hours. The latest stable version remains **Hermes Agent v0.19.0** (2026.7.20).

---

## 3. Project Progress
Today **20 PRs were merged or closed**, with several notable advancements:

**Skills & Optional Features:**
- **PR #70456** (merged): Moved `yuanbao` skill to optional-skills — a Tencent Yuanbao group chat guide, too niche for default installs.
- **PR #70434** (merged): Moved `segment-anything` (SAM image segmentation) to optional-skills per "when in doubt, optional" policy.
- **PR #70453** (merged): Moved `heartmula` and `audiocraft` (GPU-bound music generation) to `optional-skills/creative/`.
- **PR #70452** (merged): Major restructure of the `hermes-agent` hub skill — reduced from 51KB to ~12KB, routing into 18 reference files, absorbing four Hermes-specific skills.
- **PR #70428** (merged): Moved `dogfood` skill into the `software-development` category for proper autocomplete organization.

**Safety & Platform Fixes:**
- **PR #70484** (merged): Desktop app now shows exact timestamps in tooltips for message/session ages.
- **PR #70492** (merged): Added **pulse-buttons** plugin for PR digest next-step actions in Slack.

**MoA & Context Engine:**
- **PR #15498** (merged): Core `ContextEngine` ABC now supports `ingest_message()` and `after_turn()` lifecycle hooks for perpetual gradual tightening.
- **PR #58261** (merged): Fixed `max_tokens` forwarding to Gemini-native provider, enabling MoA `reference_max_tokens` to apply.

---

## 4. Community Hot Topics

**#66875 — [Bug]: Latest session does not switch after navigating to Plugins/Artifacts tab and back** (8 comments)
- **Link:** [Issue #66875](https://github.com/NousResearch/hermes-agent/issues/66875)
- **Analysis:** A persistent desktop UI regression — clicking the most recent session after viewing non-chat tabs does nothing. Mentioned by multiple users in related issues. Workaround known (click second-last session), but core UX broken.

**#69314 — [Bug]: Telegram gateway behind healthy HTTP proxy gets stuck retrying with CLOSE_WAIT sockets** (7 comments)
- **Link:** [Issue #69314](https://github.com/NousResearch/hermes-agent/issues/69314)
- **Analysis:** A production-affecting stability issue for Telegram gateways behind proxies. The process stays alive but enters a permanent degraded state with hundreds of CLOSE_WAIT sockets. Only full restart recovers. No fix PR yet.

**#12238 — Feature Request: Built-in Automatic Backup & Version Control for Agent Data** (6 comments, 19 👍)
- **Link:** [Issue #12238](https://github.com/NousResearch/hermes-agent/issues/12238)
- **Analysis:** The most-upvoted open feature request. Users want native backup/version control for `~/.hermes/` to prevent data loss. No maintainer response yet. Strong indicator for v0.20.0 consideration.

**#36765 — [RFC]: Treat "context selection/routing" as first-class ContextEngine concern** (5 comments)
- **Link:** [Issue #36765](https://github.com/NousResearch/hermes-agent/issues/36765) *(closed—maybe merged)*
- **Analysis:** An architectural RFC that appears to have been resolved today, aligning with PR #15498's new lifecycle hooks. Suggests active design work on context engine architecture.

---

## 5. Bugs & Stability

### Critical (P1):
- **#70401 — OAuth credential pool enters unbounded 401 retry loop** (opened today)
  - **Link:** [Issue #70401](https://github.com/NousResearch/hermes-agent/issues/70401)
  - **Severity:** High — self-sustaining API retry loop that ignores stop signals; requires external process kill. Affects Nous OAuth token users with failed key hints. No fix PR yet.

### High (P2):
- **#66875 — Latest session does not switch after tab navigation** (updated today, 8 comments)
  - **Link:** [Issue #66875](https://github.com/NousResearch/hermes-agent/issues/66875)
  - Desktop UI regression, likely related to session state management.

- **#69551 — Desktop SSH remote mode broken with non-default profile** (updated today, 5 comments)
  - **Link:** [Issue #69551](https://github.com/NousResearch/hermes-agent/issues/69551)
  - Token-path validation resolves against profile-scoped `HERMES_HOME` while client hardcodes `~/.hermes/desktop-ssh`. Affects remote mode users with custom profiles.

- **#69512 — fix(anthropic): sanitize empty/whitespace-only text blocks** *(closed today, fix PR exists)*
  - **Link:** [Issue #69512](https://github.com/NousResearch/hermes-agent/issues/69512)
  - **Fix:** PR likely merged today. Prevents permanent HTTP 400 from Anthropic API after compression produces empty text blocks.

- **#70481 — Copilot Responses replays connection-bound encrypted reasoning** (opened today)
  - **Link:** [Issue #70481](https://github.com/NousResearch/hermes-agent/issues/70481)
  - **Fix:** PR #70486 opened concurrently — prevents replay of connection-bound ciphertext. Co-authored by same reporter.

- **#70480 — Docker image ships WAL-reset-vulnerable SQLite** (opened today)
  - **Link:** [Issue #70480](https://github.com/NousResearch/hermes-agent/issues/70480)
  - Debian trixie ships `libsqlite3 3.46.1` vulnerable to WAL-reset corruption. No image path for fixed SQLite. Needs decision.

### Medium (P3):
- **#69925 — Desktop app boot loop when CLI runs simultaneously** (updated today, 1 comment)
  - Windows-specific, needs reproduction.
- **#70489 — Compact token displays round to 1000K instead of 1M** (opened today)
  - Minor UI formatting bug.
- **#70473 — Git plugin updates invalidate callbacks on running gateway** (opened today)
  - Reliability issue for plugin hot-reload scenarios.

---

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release (v0.20.0):
- **Context Engine lifecycle hooks** — PR #15498 merged today; this is a foundational change that will enable more intelligent context management.
- **MoA improvements** — PR #58261 (max_tokens for Gemini) and feedback on privacy filters (#59959, closed today) suggest mature MoA features.
- **Optional-skills migration** — The pattern of moving niche skills out of default install is now established (5 PRs today). Expect more skills to be refactored.

### Strong User Demand:
- **#12238 — Automatic Backup & Version Control** (19 👍, 0 maintainer response) — Longest-standing high-demand feature. With 4 months open, may need community implementation or maintainer prioritization.
- **#69532 — In-session message navigation sidebar** (2 comments, feature request) — Mirror of DeepSeek's UI pattern. Likely to be implemented if a contributor picks it up.

### Trending:
- **#70488 — Memory tool needs pre-write gate** (opened today) — Structural vulnerability where memory persistence has lower friction than skill management. Indicates need for better tool governance.

---

## 7. User Feedback Summary

**Pain Points:**
- **Desktop UI regressions** dominate feedback: session switching broken (multiple reports), zoom setting resets, PageUp layout breakage, stale chat switcher. Suggests desktop app needs QA stabilization.
- **Gateway stability** under proxy (Telegram CLOSE_WAIT issue) and authentication edge cases (OAuth retry loop) frustrate power users.
- **Profile support** has gaps: analytics doesn't work with custom profiles, SSH remote mode broken, paths hardcoded to `~/.hermes`.

**Satisfaction Signals:**
- **MoA feature** is getting positive traction — users want toggles for individual models and privacy filters, suggesting active adoption.
- **Git plugin system** is used enough that callback invalidation on update is a real concern.

**Use Cases:**
- **Power users** running multiple profiles, remote SSH, custom install paths — pushing the project's configuration system.
- **Enterprise/ops teams** using Docker with Telegram gateways — reliability under proxy matters.
- **Creative users** leveraging MoA and music generation skills — want more granular control and visibility.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:
| Issue | Age | Priority | Why |
|-------|-----|----------|-----|
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) — Backup & Version Control | 3 months | P3 (19 👍) | Most-upvoted feature, zero maintainer engagement |
| [#52669](https://github.com/NousResearch/hermes-agent/issues/52669) — System prompt hardcodes `~/.hermes` | 4 weeks | P3 | Blocks non-standard installs; documented as only 1 maintainer comment |
| [#45148](https://github.com/NousResearch/hermes-agent/issues/45148) — Analytics broken with custom profiles | 6 weeks | P3 | Affects profile feature credibility |
| [#61003](https://github.com/NousResearch/hermes-agent/issues/61003) — False-positive systemd warning | 2 weeks | P3 | Spams logs on every startup, undermines trust in diagnostics |

### Stale PRs:
- **#50053** (feature: additive grounding hooks, opened June 21) — Competes conceptually with today's merged #15498. Needs closure or integration.
- **#70490** (fix: cron script PATH inheritance, opened today) — Fresh and important for systemd-managed gateways.

---

**Overall Assessment:** Hermes Agent is **actively developed** with strong community engagement, but the growing issue backlog (39 open) and desktop stability complaints suggest a **quality release focused on bug fixes and UI polish** may be warranted before adding major new features. The skills-optionalization trend is healthy. The coming weeks should clarify whether v0.20.0 targets the Context Engine overhaul or stability improvements.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026-07-24**

---

## **Today's Overview**
Project activity remains **moderate** with a focus on dependency maintenance and infrastructure cleanup. No new releases were published in the last 24 hours. Two stale issues and six stale PRs were closed, indicating ongoing housekeeping of the backlog. Eight open PRs, including three that arrived today, suggest active development on dependency upgrades and a new model fallback chain feature. Overall, the project appears stable with no critical regressions reported.

---

## **Releases**
None

---

## **Project Progress**
**Merged/Closed PRs (6):**
- **[#3237](https://github.com/sipeed/picoclaw/pull/3237)** (closed): Bump golang.org/x/sync from 0.21.0 to 0.22.0 (dependency update)
- **[#3236](https://github.com/sipeed/picoclaw/pull/3236)** (closed): Bump github.com/github/copilot-sdk/go from 0.2.0 to 1.0.6 (dependency update)
- **[#3238](https://github.com/sipeed/picoclaw/pull/3238)** (closed): Bump github.com/aws/aws-sdk-go-v2/config from 1.32.25 to 1.32.29 (dependency update)
- **[#3235](https://github.com/sipeed/picoclaw/pull/3235)** (closed): Bump github.com/pion/rtp from 1.10.2 to 1.10.3 (dependency update)
- **[#3118](https://github.com/sipeed/picoclaw/pull/3118)** (closed): Add remote Pico WebSocket mode to `picoclaw agent` – enables optional WebSocket remote control without affecting local behavior
- **[#3115](https://github.com/sipeed/picoclaw/pull/3115)** (closed): Fix inline data URL media extraction – prevents session-history corruption when text tool output contains base64-encoded data strings

**Open PRs requiring attention:**
- **[#3222](https://github.com/sipeed/picoclaw/pull/3222)** (open, 20d): refactor(deltachat): cleanup (-200 LOC) – drops legacy features, simplifies configuration
- **[#3200](https://github.com/sipeed/picoclaw/pull/3200)** (open, 23d): feat(models): add configurable default fallback chain – enables users to set default model, reorder fallbacks, and persist via backend API (web UI support)
- Three new dependency PRs opened today: **[#3291](https://github.com/sipeed/picoclaw/pull/3291)** (copilot-sdk to 1.0.8), **[#3290](https://github.com/sipeed/picoclaw/pull/3290)** (aws config to 1.32.31), **[#3289](https://github.com/sipeed/picoclaw/pull/3289)** (pion/rtp to 1.10.5)

---

## **Community Hot Topics**
- **[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)** (now closed, 7 comments, stale): User reported that multi-turn conversations in chat history only show the last user message. Community discussion focused on message compression behavior vs. display completeness. Closed as stale without resolution – underlying usability concern remains unaddressed.
- **[Issue #3195](https://github.com/sipeed/picoclaw/issues/3195)** (now closed, 4 comments, stale): OpenAI GPT integration failure on NanoKVM (new feature in 2.4.0). User followed official docs but got errors. Closed as stale – potential documentation or compatibility gap persists.

**Analysis:** Both hot topics involve **stale-closed issues** where community participation did not lead to resolution. The history truncation bug (Issue #2796) is particularly significant as it affects core UX of multi-turn conversations.

---

## **Bugs & Stability**
- **No new bugs were opened today.** The two closed issues (##2796, ##3195) were already stale and not re-opened.
- **Fixed:** **[PR #3115](https://github.com/sipeed/picoclaw/pull/3115)** (merged) resolved a session-history corruption issue where `data:image/...;base64,...` strings in generic tool output (e.g., `read_file`, `exec`) were incorrectly treated as media attachments. This fix prevents data loss in tool-generated content.

**Severity assessment:** No critical bugs active. The history truncation issue (##2796) remains latent but unreproduced in its closed state.

---

## **Feature Requests & Roadmap Signals**
- **Configurable default fallback chain** ([PR #3200](https://github.com/sipeed/picoclaw/pull/3200), open 23d): Introduces a dedicated workflow on the models page to set default model, add/reorder fallbacks, and persist via backend API. This aligns with user demand for greater model management flexibility.
- **Remote Pico WebSocket mode** ([PR #3118](https://github.com/sipeed/picoclaw/pull/3118), merged): Adds optional `--remote` flag to `picoclaw agent` for WebSocket remote control, enabling headless/remote agent operation.
- **DeltaChat cleanup** ([PR #3222](https://github.com/sipeed/picoclaw/pull/3222), open 20d): Significant refactor dropping legacy features and password-based config – likely aimed at simplifying the DeltaChat integration for maintainability.

**Prediction for next release:** The fallback chain feature (##3200) and DeltaChat cleanup (##3222) are strong candidates for inclusion, as they represent user-facing improvements and technical debt reduction respectively.

---

## **User Feedback Summary**
- **Pain point:** Multi-turn conversation history only shows last user message (##2796) – users expect full message preservation when browsing history, even if context compression is applied for LLM inputs.
- **Pain point:** OpenAI GPT setup failures on NanoKVM despite following documentation (##3195) – indicates potential documentation gap or compatibility issue for this particular hardware integration.
- **Satisfaction indicator:** No new negative feedback was posted in the last 24 hours. The media extraction fix (##3115) addresses a prior community-reported issue.

---

## **Backlog Watch**
- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** – open 23 days, no reviewer activity. This feature (configurable fallback chain) has significant user impact and should be prioritized for review.
- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** – open 20 days, no reviewer activity. Major refactor of DeltaChat integration; maintainer attention needed to avoid bit-rotting.
- **[Issue #2977](https://github.com/sipeed/picoclaw/issues/2977)** (not shown in data, but noted as a pattern) – Potential long-open issues that may have been closed as stale without resolution. Suggest maintainer audit of stale-closed issues for re-evaluation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-24

## Today's Overview
NanoClaw saw moderate activity today with 10 PRs updated and 1 open issue. The core team was highly engaged — 4 PRs were merged or closed, addressing critical stability and compatibility concerns, particularly around Gmail API routing, matrix encryption, and Telegram threading. The project remains in a healthy maintenance phase with active hardening work, though the single open bug (#2466, a 70-day-old container race condition) suggests some long-standing architectural issues are still being worked through. No new releases were cut today.

## Releases
No new releases were published today. The last release remains unknown; the project appears to be in a phase of incremental fixes rather than coordinated versioned releases.

## Project Progress
**4 PRs merged/closed today**, signals increasing production readiness:

- **#2844** [CLOSED] — `feat(matrix): native persistent E2EE adapter via matrix-bot-sdk` (author: avri-schneider). Replaces the Chat SDK WASM bridge with a native Rust-based crypto stack using `matrix-bot-sdk` and `@matrix-org/matrix-sdk-crypto-nodejs`. This is a substantial architectural upgrade for Matrix E2EE reliability.
- **#2892** [CLOSED] — `fix(telegram): enable thread support` (author: avri-schneider). Flips `supportsThreads: true` for the Telegram adapter so forum/topic threads are tracked.
- **#3115** [CLOSED] — `fix(onecli): block legacy Gmail API routes` (author: Koshkoshinsk). Adds idempotent global OneCLI blocks for Gmail traffic through `www.googleapis.com` to prevent policy bypasses.
- **#3120** [CLOSED] — `fix: keep typing indicator alive through a single long tool call` (author: vlsmt). Handles UX regression where typing indicator would drop during expensive tool calls.

**6 PRs remain open** today, including the long-standing #2346 (slash command formatting, opened in May) and newer fixes like #3121 (best-effort reaction delivery) and #3122 (opencode compatibility).

## Community Hot Topics
The strongest signal today is **container lifecycle hardening**, driven by two related efforts:

- **#3122** [OPEN] — `fix(opencode): main compatibility, custom-endpoint transport, memory parity` (author: glifocat). A broad fix touching OpenCode main branch compatibility, custom transport endpoints, and memory parity. No comments but labeled `core-team`, suggesting strategic importance.
- **#3119** [OPEN] — `fix(container-runner): reconcile untracked orphan containers to prevent duplicate per-group spawns` (author: robbyczgw-cla). Directly addresses the duplicate container problem reported in #2466. Provides detailed root cause analysis: one agent group reached **3 concurrent containers** due to overlapping cron-triggered and host-triggered sweeps.
- **#2971** [OPEN] — `Add ncc utility skill: host operational and health CLI` (author: zivisaiah). A utility skill that adds CLI tooling for host operations — no comments but received updates yesterday, suggesting active development.
- **#3090** [OPEN] — `fix(templates): prepend all top-level context Markdown` (author: amit-shafnir). Template formatting fix, updated yesterday, suggests ongoing polish of prompt engineering infrastructure.

The **Matrix E2EE rewrite (#2844)** is the most impactful feature merged recently, though it had zero comments — likely because it was a straightforward drive-by from a core contributor.

## Bugs & Stability
**1 active bug**, medium-to-low severity:

- **#2466** [OPEN] — **"Duplicate container spawn race on wakeContainer when script and host sweep run concurrently"** (author: glifocat, priority: Low, severity: Hardening). Root cause: simultaneous script-triggered `wakeContainer` and host sweep create two containers for the same agent group. **Fix PR exists: #3119** (reconcile untracked orphan containers). While labeled "low priority," the PR's description reveals reality — one agent group reached **3 concurrent containers** on a continuously running host with 5d uptime. This is a resource leak that could cause duplicate message processing and cost inflation.

Other stability efforts seen today:
- **#3121** [OPEN] — `fix: make reaction delivery best-effort`. Reduces failure surface for non-critical message reactions.
- **#3120** [CLOSED] — Typing indicator keep-alive during tool calls. Small UX regression fixed.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the following signals indicate near-term roadmap direction:

- **OpenCode main branch compatibility** (#3122) — The project appears to be aligning with upstream OpenCode changes, requiring transport and memory parity fixes. Expect this to merge soon.
- **Matrix native E2EE** (#2844, merged) — This suggests the project is moving away from third-party bridge dependencies; further Matrix-native improvements likely.
- **NCC utility CLI** (#2971) — A new host operational skill in development. If merged, it will provide a CLI for health checks, container management, and operational debugging — likely targeting self-hosters and DevOps users.

**Prediction for vNext**: Matrix E2EE stabilization, OpenCode compatibility, and container lifecycle hardening (due to #2466's long tail).

## User Feedback Summary
No new user feedback or comments were posted on issues or PRs today. The silence could indicate:

- **Satisfaction**: Users are not hitting blockers (~1 line response expected)
- **Or low engagement**: The project may lack a mechanism for collecting user satisfaction data

The only bug (#2466) has **2 comments**, both presumably from the author/team investigating. No end-user frustration expressed publicly.

## Backlog Watch
**Long-unanswered critical items needing attention:**

- **#2346** [OPEN] — `fix(formatter): treat unknown slash commands as normal chat` (created: 2026-05-08, **77 days old**). Author: SidhayaPravda618. This PR fixes a bug where unknown slash commands are silently dropped (categorized as `passthrough`, causing the Agent SDK to interpret them as Claude Code slash commands, producing broken output). No comments from maintainers and not labeled `core-team`. This is a **production-impacting bug** that can cause user messages to be lost. Given its age and lack of engagement, it may need escalation. [Link](https://github.com/nanocoai/nanoclaw/pull/2346)

- **#3090** [OPEN] — `fix(templates): prepend all top-level context Markdown` (created: 2026-07-19, **5 days old**). Author: amit-shafnir, labeled `core-team`. Updated yesterday but still unmerged. This is a formatting fix for context templates — likely low risk but should be reviewed promptly to avoid merge conflicts with other template changes. [Link](https://github.com/nanocoai/nanoclaw/pull/3090)

- **#2466** [OPEN] — The duplicate container bug (70 days old). Though fix PR #3119 exists, the original bug report has no maintainer response. The fix PR's detailed root cause analysis suggests the fix is ready for review. [Bug](https://github.com/nanocoai/nanoclaw/issues/2466) | [Fix PR](https://github.com/nanocoai/nanoclaw/pull/3119)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-24

## 1. Today's Overview

The IronClaw project remains in an intense pre-launch stabilization phase, with 31 issues and 50 PRs updated in the last 24 hours, signaling a very high level of active development and quality assurance activity. The v1-launch-checklist continues to drive the most urgent work, with multiple critical blockers surfaced around hosted deployment configuration (Slack OAuth, Telegram setup, Google OAuth) and WebUI stability (rate-limiting, reconnection loops). Two notable architectural threads are progressing in parallel: the "drop Reborn branding" initiative, which saw three companion PRs opened to rename crates, environment variables, and user-facing UI elements, and the extension lifecycle refactor (#6520) whose post-merge fallout is being actively repaired across testing infrastructure and live QA. No new releases were cut today, but six issues were closed, including several v1-launch-checklist items.

---

## 2. Releases

**No new releases today.** The most recent release remains the one prepared in PR #5598 (still open), which would bump `ironclaw_common` from 0.4.2 → 0.5.0 (breaking API changes) and `ironclaw_skills` from 0.3.0 → 0.4.0 (breaking API changes).

---

## 3. Project Progress

**19 PRs were merged or closed today**, including several high-impact fixes:

- **PR #6520** (`[size: XL, risk: medium] fix(reborn): make extension readiness and channel delivery generic`) — The flagship refactor of the day, this large PR collapsed the extension lifecycle to manifest-derived states (`uninstalled`, `setup_needed`, `active`) and separated tenant admin configuration from per-user membership. This is the foundation for the new extension model.
- **PR #6594** (`[size: XL] retire legacy extension sources`) — Removed the legacy `tools-src/` and `channels-src/` source trees, completing the migration to the new architecture.
- **PR #6592** (`[size: XL] fix(webui): stop WebChat 'Disconnected' lockout`) — Fixed the "Disconnected" badge getting stuck, addressing two independent bugs (server-side rate-limit budget charging and client-side SSE reconnection thrash).
- **PR #6602** (`[size: XS] fix(live-qa): operator extension-configuration values as a sequence`) — Fixed a 422 error in Slack admin bootstrap where configuration values were sent as a map instead of a sequence.
- **PR #6603** (`[size: S] test(playwright): reconcile suite to merged #6520 lifecycle`) — Three Playwright shards that broke post-#6520 were reconciled.
- **PR #6606** (`[size: M] fix(live-qa): map setup values onto declared admin-group handles`) — Fixed bare setup-source names being sent instead of resolved handles.
- **PR #6607** (`[size: M] fix(automations): inherit implicit source channel target`) — Resolved opaque conversation bindings through active channel binding services.
- **PR #6601** (`[size: L] ops: add admin-config-preserving extension reset`) — Added a script to reset extension state while preserving tenant admin configuration.

**Closed issues** (6 total):
- **#6389** — Phase 4 runtime assembly collapse (build_local_runtime + build_production_shaped unified)
- **#6274** — DeploymentConfig completion (§4.4/§5.6/§5.11)
- **#6544** — v1-launch-checklist: Slack OAuth redirect URL configuration (now solved)
- **#6543** — Move ProductSurface contract to host_api
- **#6548** — Hosted staging preview-auth wall blocking webhook delivery
- **#6462** — Sidebar thread list pagination bug

---

## 4. Community Hot Topics

The most active conversations this week center on **v1-launch-blocking configuration gaps** and **post-refactor testing fallout**:

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#6389] (closed) | 11 | Phase 4 runtime assembly: collapsing two build paths into one `build_runtime(cfg)`. Closed — implemented. |
| [#6274] (closed) | 5 | DeploymentConfig as main composition config. Closed — implemented. |
| [#6524] (open) | 3 | **Epic: Hermetic capability and journey testing platform** — A foundational testing gap: IronClaw cannot mechanically answer whether every capability and user journey has deterministic coverage. This suggests the project is scaling beyond its current testing capacity. |
| [#6544] (closed) | 2 | Slack OAuth redirect URI cannot be configured via UI/CLI — a v1-blocker that was solved today. |
| [#4548] (open, 46 days) | 2 | **Duplicate `model` field in DeepSeek requests when tools are present** — Long-standing provider bug blocking DeepSeek users. Not yet addressed. |

**Underlying needs**: The volume of configuration/onboarding issues (Telegram, Slack, Google OAuth) indicates that IronClaw's self-service setup experience is still immature despite the v1 launch push. The #6524 epic signals a growing recognition that testing coverage must become systematic before the project can confidently ship to production.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#6581] | **429 Too Many Requests** on agent-stg WebChat SSE endpoint under normal multi-thread usage — users see "Disconnected" badge that gets stuck even after reload. | **PR #6592 merged** — two root causes identified and fixed (rate-limit budget & SSE reconnection thrash). |
| **Critical** | [#6604] (open) | **Telegram delivery dead after extension removal mid-run** — A user says "can you uninstall telegram", the run completes, then cannot deliver the goodbye reply because the channel was removed. | **PR #6604 open** — falls back to web-app delivery when channel is gone. |
| **High** | [#6605] (open) | **Telegram inbound silently dead after extension reinstall** — Reinstalling Telegram without going through full setup submit leaves no `telegram_webhook_secret` in channel config. | Fix not yet identified. |
| **High** | [#6590] (open) | **Windows users blocked** — `ironclaw serve` fails on Windows in `local-dev` and `local-dev-yolo` profiles due to "workspace root must not overlap default skill root". | No fix PR yet. |
| **High** | [#6575] (open) | **systemd service error after `ironclaw onboard`** on Ubuntu — `systemctl --user status` shows error immediately after setup. | No fix PR yet. |
| **Medium** | [#6591] (open) | **`ironclaw service restart` doesn't work on hosted VMs** — users must use NI remote agent UI as workaround. | No fix PR yet. |
| **Medium** | [#6541] (open) | **WebUI constantly showing "Reconnecting"** — No functional impact but UI is confusing. | Separate from #6581 (which was the stuck version of this). |
| **Medium** | [#6522] (open) | **No Telegram setup instructions** — Users don't know how to configure Telegram locally or on hosted. | Needs documentation. |
| **Low** | [#6521] (open) | **`ironclaw` CLI not available on agent staging** — Can't restart services from SSH. | Workaround exists (UI restart). |
| **Low** | [#6534] (open) | **Google OAuth config can't be applied in hosted deployments** — Operator can save but config doesn't propagate. | No fix PR yet. |

**Testing infrastructure issues** (documented in [#6572] daily failure taxonomy):
- `clawbench` run shows 77 non-pass tests dominated by model shortfalls (partial credit on scoring).
- Coverage-lane crash (`reborn_integration_extension_delivery` SIGABRT with stack overflow under llvm-cov) — PR #6609 open to fix.
- Playwright shards went red after the #6520 merge — PR #6603 fixed them today.

---

## 6. Feature Requests & Roadmap Signals

Several structural epics provide strong roadmap signals:

| Signal | Evidence | Prediction |
|--------|----------|------------|
| **"Drop Reborn" rebranding** | [#6556], [#6559], [#6552], [#6551], [#6550] — Five PRs/Issues opened today to rename crates, env vars, CLI output, WebUI labels, and documentation to present as "IronClaw" only. | Will land in the next minor release (likely 0.5.0). |
| **Heartbeat/trigger scheduling** | [#6569], [#6570], [#6571] — Three issues opened to define heartbeat contract, implement durable scheduling, and add delivery suppression/deduplication. | Next version will include optional periodic heartbeat capability for production monitoring. |
| **Hermetic testing platform** | [#6524] (epic) — Systematic deterministic coverage for every capability and user journey. | This is a long-term infrastructure investment, likely 2-3 releases out. |
| **Admin-managed agents** | [#6578] (epic) — Tenant administrators creating non-human subjects for product agents and automations. | This is a significant new identity model, likely post-v1. |
| **Reliable skill discovery/routing** | [#6565] (epic) — Model-directed skill selection is unreliable; needs structured discovery and routing. | Expect incremental improvements over next releases; full solution is complex. |
| **Legacy test removal** | [#6560], [#6561], [#6562] — Migrate live-canary and Python E2E scenarios to IronClaw-native harness, delete legacy fixtures. | Completes within this week. |

---

## 7. User Feedback Summary

User pain points surfaced this week cluster into three themes:

1. **Configuration friction (v1-launch-checklist)** — Users cannot configure Slack OAuth redirect URIs ([#6544]), need CLI/UI to persist them; Telegram setup has no instructions ([#6522]); Google OAuth config saves but doesn't propagate ([#6534]). The project ships with good defaults but self-service onboarding is incomplete.

2. **Hosted environment issues** — The preview auth wall on staging blocks webhook delivery from Telegram and Slack ([#6548], closed). The `ironclaw` CLI isn't available on hosted VMs ([#6521], [#6591]), forcing users to bounce between SSH and the NI remote UI.

3. **Stability under real usage** — The "Reconnecting" WebUI badge ([#6541]) and the rate-limit "Disconnected" lockout ([#6581], fixed today) both eroded user confidence even though the agent continued working. The post-#6520 extension lifecycle changes introduced real regressions (Telegram dead after reinstall [#6605], delivery crash after channel removal [#6604]) that affected users who experimented with extensions.

Satisfied signals: Users acknowledge the agent works fine underneath the UI glitches ("No impact on the actual workflow, but the notification is confusing" — [#6541]).

---

## 8. Backlog Watch

The following important items have gone unaddressed for extended periods:

| Issue | Age | Priority | Reason for Concern |
|-------|-----|----------|-------------------|
| [#4548] — **DeepSeek duplicate `model` field** | **46 days** | High | Blocks all DeepSeek users from using tools. No PR, no assignment. This is the longest-standing open bug affecting a major provider. |
| [#5598] — **Release PR** | **21 days** | Medium | This PR preps breaking changes to `ironclaw_common` and `ironclaw_skills` but remains open. It blocks downstream consumers and crates.io release. The rebranding work (#6556, #6559) may have superseded it, but `chore: release` should be resolved. |
| [#3997] — **Attested signing PR13** | **61 days** | High | This huge feature branch (NEAR/WC provider registration + durable composition) was force-pushed with a fresh port 24 hours ago. The base has been dormant since May. Its long wait suggests architectural dependency challenges or strategic deferred prioritization. |
| [#6361] — **serde/serde_json dependency bump** | **4 days** | Low | 2 dependency updates; no urgency but should not languish. |

**Maintainer attention needed**: The DeepSeek bug (#4548, 46 days) is the most concerning gap — it's a clear provider interoperability failure that affects real users and has no visible activity. The release PR (#5598, 21 days) is blocking ecosystem consumers.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the provided GitHub data for **LobsterAI** (netease-youdao/LobsterAI) as of **2026-07-24**, here is the structured project digest.

---

## LobsterAI Project Digest — 2026-07-24

### 1. Today's Overview
Today marks an exceptionally high-velocity cleanup day for LobsterAI. A total of **50 Pull Requests** were merged or closed within the last 24 hours, with zero open PRs remaining, indicating a successful and aggressive merge sprint. This activity was concentrated on critical bug fixes, build infrastructure hardening, and upstream OpenClaw compatibility patches. Issue activity was low (3 open, stale items), suggesting the team is prioritizing the reduction of technical debt and instability over new feature work. The lack of new releases suggests these points represent a stabilization phase prior to a planned version cut.

### 2. Releases
**None.** No new releases were published in this period.

### 3. Project Progress
The **50 merged/closed PRs** demonstrate intense progress in the following areas:
- **Build & Platform Stability:** Multiple PRs hardened the Windows installer workflow. PR #2327 fixed unsigned EXE binaries that caused security software to freeze the installer. PR #2326 added a self-healing mechanism for interrupted `win-resources.tar` extraction using a watchdog timer and a fallback to the system `tar.exe`.
- **OpenClaw Runtime Patching:** A significant backporting effort for the OpenClaw `v2026.6.1` runtime was evident. Key patches include: **tool-loop termination** (PR #2331), **stop-loop on aborted tool runs** (PR #2330), **cwd/workspace separation** (PR #2260), **plugin permission routing** (PR #2217), and **DeepSeek prompt cache stabilization** (PR #2258).
- **Cowork & Subagent UX:** PR #2264 improved large session rendering performance by reducing collapsed tool-result formatting from 64K to 16K and added a raw diagnostics ZIP export for debugging. PR #2305 fixed subagent display names. PR #2261 repaired broken timestamps on subagent panels.
- **Scheduled Task Fixes:** A chain of PRs (#2231, #2306, #2314) repaired IM group routing for scheduled tasks, restored gateway-backed run history, and fixed casing issues for WeCom and DingTalk group IDs.
- **Concurrency Fix:** PR #2328 serialized concurrent browser launches to prevent Chrome process leaks.

### 4. Community Hot Topics
All three open issues are **stale** (last updated July 23, but created April 2), indicating low current community engagement or neglected reports.

- **#1263 – Duplicate scheduled tasks with API rate limit errors**  
  *URL: [Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263)*  
  User reports the UI showing two identical scheduled tasks, both hitting API rate limits. The underlying need is for **deduplication logic** in the task scheduler UI and better handling of rate-limit feedback to users.

- **#1265 – Per-agent IM bot and model binding**  
  *URL: [Issue #1265](https://github.com/netease-youdao/LobsterAI/issues/1265)*  
  A feature request to allow different agents to bind different IM bots and models (e.g., a scheduling bot vs. a coding bot). This reflects a strong desire for **multi-agent orchestration** and specialization within a single workspace.

- **#1273 – SQLite WASM memory corruption crash**  
  *URL: [Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273)*  
  High-severity bug report describing `memory access out of bounds` crashes in the WASM-based SQLite engine under high frequency writes. The user also notes non-atomic `fs.writeFileSync` leading to database corruption.

### 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **Critical** | #1273 | WASM SQLite memory corruption + non-atomic save causing permanent DB damage. | **No fix PR in this batch.** Remains a critical open risk. |
| **High** | PR #2327 | Windows binary unsigned, causing security software to freeze the installer. | **Fixed** – Added internal signing workflow. |
| **High** | PR #2328 | Concurrent browser launches causing Chrome process leaks. | **Fixed** – Serialized launch/search. |
| **Medium** | #1263 | Duplicate scheduled tasks in UI + missing rate-limit feedback. | **No fix PR in this batch.** Stale issue. |
| **Medium** | PR #2264 | Large Cowork sessions causing rendering lag. | **Fixed** – Reduced formatting size & added memoization. |
| **Medium** | PR #2306 | Scheduled tasks routing to wrong IM groups. | **Fixed** – Added filtering and migration. |

### 6. Feature Requests & Roadmap Signals
- **Multi-Agent Specialization (#1265):** The request to bind different IM bots/models to different agents is likely to gain traction. Given the intense recent work on subagent panels (#2305, #2261) and tool history (#2299), this fits the "agent team" roadmap trajectory. **Prediction:** Likely in the next minor release.
- **Diagnostics Export (#2264):** The new "Diagnostics package" export is a strong signal the team is investing in **user-facing debugging tools**, which improves community support capabilities.
- **Build & Installer Hardening:** The extensive Windows installer fixes suggest **platform maturity** is a high priority for the next official release.

### 7. User Feedback Summary
- **Pain Points:** Users are frustrated by **duplicate UI elements** (#1263) and **silent data corruption** (#1273). The `API rate limit` error appearing as a duplicate task is confusing and degrades trust in the scheduler.
- **Wishes:** Users express a clear need for **multi-agent teams** with distinct roles and models (#1265). Power users want specialized bots for orchestration vs. content generation.
- **Satisfaction:** The rapid merge of 50 PRs indicates a responsive maintainer team, but the lack of feedback on the stale critical bugs (created April 2) may cause dissatisfaction among reporters.

### 8. Backlog Watch
- **Issue #1273 – WASM SQLite Crash & Corruption**  
  *URL: [Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273)*  
  **Status: Critical & Stale.** This is the highest-risk item in the backlog. The bug describes a total application crash and permanent database damage. Despite being opened on 2026-04-02, no fix PR has been merged. A maintainer response or mitigation plan is urgently needed.

- **Issue #1263 – Duplicate Tasks & Rate-Limit UI Bug**  
  *URL: [Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263)*  
  **Status: Medium & Stale.** While less severe than #1273, the duplicate display and lack of rate-limit feedback confuse users and degrade scheduling reliability. Needs triage or closure.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-24

## 1. Today's Overview
The Moltis project shows **moderate activity** over the past 24 hours, with 2 issues updated and 5 pull requests merged/closed—all without any open PRs remaining. Two new releases were published yesterday (20260723.02 and 20260723.03), indicating a healthy release cadence. The team resolved five PRs, focusing on Slack integration fixes, UI improvements, and dependency updates. One bug remains open (Podman compatibility), while a date-display bug in the web UI was fixed. Overall, the project appears in **stable maintenance mode** with targeted feature enhancements and security-conscious Slack proxy support.

## 2. Releases
Two releases were published on **2026-07-23**: `20260723.02` and `20260723.03`.  
- No detailed changelogs or migration notes were provided in the data.  
- Based on merged PRs, these releases likely include:  
  - Context command support for chat turns (PR #1124)  
  - Fix for session date display in the web UI (PR #1162)  
  - Slack API base URL allowlisting and OTP self-approval for non-allowlisted DMs (PRs #1163, #1164)  
  - Dependency bump: Astro from 7.0.9 to 7.1.3 for the docs site (PR #1161)  
- Operators should review the new `MOLTIS_SLACK_API_BASE_URL_ALLOWLIST` environment variable and the revised Slack allowlist semantics (empty lists now deny instead of allowing open access).

## 3. Project Progress
All 5 PRs updated in the last 24 hours were **merged or closed**:

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#1124](https://github.com/moltis-org/moltis/pull/1124) | Add context command support for chat turns | gptme-thomas | ✅ Merged |
| [#1161](https://github.com/moltis-org/moltis/pull/1161) | chore(deps): bump astro from 7.0.9 to 7.1.3 | dependabot[bot] | ✅ Merged |
| [#1162](https://github.com/moltis-org/moltis/pull/1162) | fix(web): show dates for older sessions | shixi-li | ✅ Merged |
| [#1163](https://github.com/moltis-org/moltis/pull/1163) | fix(slack): challenge unknown allowlist DMs with OTP | penso | ✅ Merged |
| [#1164](https://github.com/moltis-org/moltis/pull/1164) | fix(slack): allow operator-approved api base hosts | penso | ✅ Merged |

**Key feature advances:**
- **Context command injection** (PR #1124): Deployments can now run a configurable command before each chat turn and inject its stdout into the prompt context, enabling dynamic runtime awareness without manual pasting.
- **Slack security hardening** (PRs #1163, #1164): Operator-controlled allowlisting for Slack API base URLs, plus OTP-based self-approval for non-allowlisted DM users. Empty allowlists now correctly block access (previously opened access).
- **UI polish** (PR #1162): Session list now shows dates for older sessions instead of only times.

## 4. Community Hot Topics
- **Issue #1095** – *[Bug]: Podman is not working via moltis* 💬 1 comment  
  Updated 2026-07-23, still open. Author [RokkuCode](https://github.com/moltis-org/moltis/issues/1095) reports Podman container runtime incompatibility. This is the **only open bug** and has been active for ~7 weeks. No fix PR exists yet. Underlying need: Moltis should support Podman as a first-class container runtime, not only Docker.

- **Issue #1108** – *[Bug]: Session list shows times but not dates* – **CLOSED** via PR #1162 on 2026-07-23. No comments, but the fix was responsive (same-day resolution from PR creation to merger). This indicates good maintainer attention to UI usability issues.

No issues or PRs had reactions (👍) or more than 1 comment.

## 5. Bugs & Stability
| Bug | Status | Severity | Fix PR? |
|-----|--------|----------|---------|
| Podman not working (Issue #1095) | Open | 🔴 High – blocks users on Podman | None yet |
| Session list date display (Issue #1108) | Fixed | 🟡 Low – cosmetic/informational | PR #1162 (merged) |
| Empty allowlist bypass in Slack, Teams, Signal, Matrix (PR #1163) | Fixed | 🔴 High – security misconfiguration | PR #1163 (merged) |
| Slack API base URL unrestricted (PR #1164) | Fixed | 🟠 Medium – potential SSRF/proxy abuse | PR #1164 (merged) |

**Notable fix:** Two Slack-related security fixes were merged today, addressing a potentially serious gap where empty allowlists would grant open access instead of denying. Operators should upgrade immediately to avoid unintended access.

## 6. Feature Requests & Roadmap Signals
- **Dynamic context injection** (PR #1124) – recently merged feature that opens the door for richer agent-environment interactions. Future versions may expand `chat.context_command` to support multiple commands, conditional execution, or integration with external monitoring tools.
- **Podman support** (Issue #1095) – with no fix yet, this is a **likely candidate** for the next release, especially if the community or maintainers prioritize container runtime diversity.
- **Slack proxy/enterprise support** (PR #1164) – the addition of `MOLTIS_SLACK_API_BASE_URL_ALLOWLIST` signals interest in enterprise Slack deployments with internal proxies. Future versions may add similar allowlisting for other chat platforms.

**Prediction for next release:** Podman fix (Issue #1095) if triaged; possibly additional Slack allowlist refinements or audit logging.

## 7. User Feedback Summary
- **Positive signals:** Quick turnaround on the session date display bug (Issue #1108 → PR #1162 in ~1 day) shows responsiveness to UI usability feedback.
- **Pain point:** Podman user (Issue #1095) reports that Moltis does not work with Podman, a popular Docker alternative. This has been open since June 3, 2026, with no activity from maintainers—a potential source of dissatisfaction for container-native users.
- **Security-conscious users:** The two Slack fixes (PRs #1163, #1164) address real enterprise security concerns (unrestricted API hosts, open allowlists). The addition of an operator-controllable allowlist and OTP self-approval aligns with feedback from security-minded deployments.
- **No negative feedback** was observed in closed issues or comments; the community appears satisfied with the latest releases.

## 8. Backlog Watch
- **Issue #1095** – *Podman not working* – Open since **2026-06-03** (7 weeks), last updated 2026-07-23 with no maintainer response. This is the **most important backlog item** needing attention. @RokkuCode reported a clear bug; a fix would benefit Podman-using users and prevent fragmentation.

- **No stale PRs** – All PRs were handled promptly. No PRs remain open.

**Recommendation:** Assign Issue #1095 to a maintainer and triage for the next release to close the gap between Docker and Podman support.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-24

## 1. Today's Overview

CoPaw continues to show very high development activity, with **30 issues** and **50 pull requests** updated in the last 24 hours, alongside a new **beta release (v2.0.1-beta.2)**. The project is in a rapid iteration phase following the v2.0 launch, with a clear focus on stabilizing the new architecture, addressing migration pain points, and expanding the built-in tool ecosystem. The community is actively contributing first-time patches and feature PRs, indicating healthy external engagement. However, the volume of open bugs and regressions suggests the team is in a "fix-forward" mode as users migrate from v1.x.

## 2. Releases

- **v2.0.1-beta.2** (pre-release, published 2026-07-24)
  - **What's Changed:**
    - Unified release orchestrator gating web on desktop build ([PR #6329](https://github.com/agentscope-ai/QwenPaw/pull/6329))
    - Fixed runtime rotation of text messages on new reasoning blocks ([PR #6310](https://github.com/agentscope-ai/QwenPaw/pull/6310))
  - **Migration Notes:** This is a pre-release beta. Users on v2.0.0.post3/post4 should test before upgrading to production. No breaking changes noted vs. other v2.0.0.post releases.
  - **Installation verification** is being tracked in [Issue #6400](https://github.com/agentscope-ai/QwenPaw/issues/6400).

## 3. Project Progress

**Merged/Closed PRs (20 total):** Key advancements include:

- **Model Provider Expansion:** [PR #6268](https://github.com/agentscope-ai/QwenPaw/issues/6268) added **AIOnly** as a built-in model provider (aggregating 190+ models).
- **Security & Governance Fixes:** [PR #6368](https://github.com/agentscope-ai/QwenPaw/pull/6368) fixed governance policy to honor `audit_level=none` before persisting events. [PR #6354](https://github.com/agentscope-ai/QwenPaw/issues/6354) addressed a UI design risk where the "Always Allow" button was overly prominent in approval dialogs.
- **Memory Improvements:** [PR #6351](https://github.com/agentscope-ai/QwenPaw/pull/6351) added recovery guidance for failed MEMORY.md edits — directly addressing the user-reported issue [#3015](https://github.com/agentscope-ai/QwenPaw/issues/3015) about repeated token-wasting edit attempts.
- **Desktop Stability:** [PR #6219](https://github.com/agentscope-ai/QwenPaw/issues/6219) fixed the desktop app's force-kill behavior on shutdown (replaced with graceful shutdown).
- **CI/Release Infrastructure:** Multiple chore PRs around version bumping and release automation (v2.0.1 readiness).

## 4. Community Hot Topics

Most active discussions (by comments/reactions):

- **#6307** [OPEN] [Performance: v2.0 ~2s overhead per reply](https://github.com/agentscope-ai/QwenPaw/issues/6307) — 6 comments. This is the most impactful performance regression report. Users migrating from v1.x are experiencing a consistent 2-second fixed overhead on all replies, independent of model latency. The community actively investigating the root cause in the request pipeline. **Risk:** Could block enterprise adoption until resolved.

- **#6407** [OPEN] [ReAct Agent tool_result context corruption](https://github.com/agentscope-ai/QwenPaw/issues/6407) — 2 comments. Multi-turn tool calls being merged into single `role:assistant` blocks, causing OpenAI API validation failures on context restore. Affects users of ReAct agents with persistence.

- **#6392** [OPEN] [Feature request: agent-level token statistics](https://github.com/agentscope-ai/QwenPaw/issues/6392) — 2 comments. Users want granular per-conversation and per-agent token tracking rather than aggregated totals.

**Underlying need:** The community is demanding production-grade observability (token usage, latency breakdowns) and reliable state persistence, especially as multi-agent and MCP-based workflows become more common.

## 5. Bugs & Stability

**Critical/High Severity (active, no fix PR yet):**
- **#6407** — ReAct Agent context corruption (tool_result mixed into assistant messages). Breaks any session restore with tool calls.
- **#6307** — 2s fixed overhead per reply in v2.0. Architectural regression; may affect all v2.0 users.
- **#6405** — MCP tools reporting "Tool notfound" after upgrade to v2.0. Affects all MCP users on Docker.
- **#6386** — Repeated tool calls (file send) looping infinitely with GGUF local models on v2.0.0.post4.
- **#6401** — Scheduled tasks overwrite existing user session history when reusing sessions.

**Medium Severity (fix PRs exist or in review):**
- **#6363** [CLOSED] — Markdown fences/XML tags in tool_call arguments breaking execution (GLM-5, DeepSeek-V3). A fix pattern is emerging (see #6409).
- **#6406** — Windows multiline PowerShell commands collapsed into single line. **Fix PR exists:** [#6412](https://github.com/agentscope-ai/QwenPaw/pull/6412) by a first-time contributor.
- **#6239** — Windows PATH concatenation drops semicolons, breaking npm globals in child processes.

**Recent Fixes (merged/shown in data):**
- **#6354** — Accidental permanent permission grants via UI design (approval dialog fix).
- **#6368** — Governance audit_level=none now correctly skips persistence.
- **#6351** — Failed memory edits now include recovery guidance for agents.

## 6. Feature Requests & Roadmap Signals

**Likely to land in next release (v2.0.1 or v2.1):**
- **Reranker support for ReMe memory search** — Both backend ([PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)) and UI ([PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)) are open and under review.
- **On-demand channel dependency installation** — [PR #6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) removes heavy SDKs from core and installs only when needed.
- **Safe model discovery infrastructure** — [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) reduces manual model ID entry across providers.
- **Unified browser SDK** — [PR #6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) brings any-backend browser control under one SDK.
- **Staged memory compaction** — [PR #6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) redesigns Scroll context management for durability.

**User-requested features with traction:**
- **#6408** — Undo/rewind support for previous conversation turns (like Cherry Studio). Growing demand.
- **#6413** — UI simplification: remove confusing "Full Mode" / "Compact Mode" toggle in desktop client.
- **#6414** — Ability to rename custom provider names after initial setup.
- **#6403** — RobotFramework syntax highlighting in Coding Mode web IDE.
- **#6392** — Agent-level token usage statistics.

**Speculative (might appear in v2.1):**
- **QwenPaw Creator app** — [PR #6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) adds video creation workflow (script → assets → storyboard). Suggests a push toward multimodal content generation.
- **Extensible third-party agent backends** — [PR #6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) adds Codex and Qoder backends, architecture is provider-neutral.
- **#6377** — Expose agents as HTTP APIs with defined request/response formats (enterprise integration use case).
- **#6344** — Docker web hot-update to preserve runtime environment on rebuild.

## 7. User Feedback Summary

**Satisfaction Signals:**
- First-time contributors are active ([PR #6412](https://github.com/agentscope-ai/QwenPaw/pull/6412), [PR #6351](https://github.com/agentscope-ai/QwenPaw/pull/6351)), suggesting a welcoming community.
- Users appreciate the rapid iteration cycle ("仅7月就已经发布十余个小版本") — though some on HDD find updates painful ([Issue #6380](https://github.com/agentscope-ai/QwenPaw/issues/6380)).
- The MCP ecosystem and tool integration is being actively adopted despite early friction.

**Pain Points:**
1. **v2.0 Performance Regression** — The 2s overhead per reply (#6307) is the single largest blocker for v1.x users considering migration.
2. **Docker Update Burdens** — Users on HDD/NAS report 1.5-hour update times (#6380). Combined with the request for web hot-update (#6344), this points to operational scaling pain.
3. **MCP Tool Discovery** — Tools being reported as "not found" after upgrade (#6405) and repeated registration causing task cancellation (#2999) suggest MCP reliability is a top user frustration.
4. **UI Confusion** — Desktop client's "Full Mode" vs "Compact Mode" toggle is widely misunderstood; users expect a standard settings icon (#6413).
5. **Migration Complexity** — Multiple issues about v1.x → v2.x behavioral differences, especially around tool handling and session management.

## 8. Backlog Watch

**High-priority items requiring maintainer attention:**

1. **#2999** [OPEN since April 2026] — *Repeated MCP client registration leads to task cancellation*. Updated 2026-07-24 but no fix. Affects MCP reliability for all users. **Age: 109+ days.**

2. **#6239** [OPEN since 2026-07-18] — *Windows PATH semicolon dropping breaks npm globals*. Blocking Windows development workflows. No maintainer response yet.

3. **#6401** [OPEN] — *Scheduled tasks overwrite user session history*. Critical for users relying on cron-like agent persistence.

4. **#6380** [OPEN] — *HDD update process taking 1.5 hours*. Community is requesting incremental updates. No fix in progress.

5. **#6407** [OPEN] — *ReAct Agent context corruption*. Directly impacts multi-turn agent persistence. No fix PR exists.

**PRs needing review:**
- **[#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)** — Windows desktop GUI automation (UIA + Tauri Control Mode). Open since June 14, 2026; 40 days without merge. Large feature, high value for Windows power users.
- **[#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323)** — Staged memory compaction (Scroll redesign). Under review but not yet merged — this is a foundational memory improvement.
- **[#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397)** — Third-party agent backends (Codex, Qoder). Significant architecture change; needs careful review.

---

**Project Health Assessment:** 🟡 **High activity with growing stability concerns.** The project is shipping features rapidly (beta releases, new providers, reranker support), but the v2.0 migration has opened critical performance and compatibility regressions. The maintenance team should prioritize the 2s overhead (#6307) and MCP reliability (#2999, #6405) to avoid stalling adoption by enterprise users and Docker deployers.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-24

## 1. Today's Overview
The ZeptoClaw project shows moderate activity with **2 open issues** and **1 open pull request** updated in the last 24 hours, both authored by the maintainer (qhkm). No releases were published today, and no PRs were merged. The activity is focused entirely on **critical safety improvements** and **CI hygiene**, indicating a shift toward hardening the runtime environment and restoring build reliability. Project velocity currently centers on addressing high-severity bugs rather than new features.

## 2. Releases
No new releases were published today. The latest release remains unchanged.

## 3. Project Progress
- **No PRs were merged or closed today.** The only open PR (#645) is still under review.

## 4. Community Hot Topics
Both issues and the sole PR are authored by the project maintainer, with **zero comments and zero reactions** across all items. There is no visible community discussion today.

**Active items (all by qhkm):**
- **Issue #646** — [OPEN] [chore, area:safety, P1-critical] Restore Clippy and cargo-deny checks on current toolchain.  
  ([Issue #646](https://github.com/qhkm/zeptoclaw/issues/646))  
  *Underlying need:* Fixing CI regressions exposed by PR #645 to ensure code quality and dependency vulnerability scanning resume.
- **Issue #644** — [OPEN] [bug, area:safety, P1-critical] Scrub subprocess environments and terminate process trees on timeout.  
  ([Issue #644](https://github.com/qhkm/zeptoclaw/issues/644))  
  *Underlying need:* Preventing credential leaks from model-authored commands and ensuring clean process reaping.
- **PR #645** — [OPEN] fix(runtime): scrub subprocess secrets and reap timed-out process trees.  
  ([PR #645](https://github.com/qhkm/zeptoclaw/pull/645))  
  *Underlying need:* Implementation fix for Issue #644; also includes Docker container pruning.

## 5. Bugs & Stability
**Two critical-severity bugs** were reported today (both P1-critical):

### P1-Critical
- **Issue #644** — Subprocess environment scrubbing and process tree termination on timeout.  
  **Severity:** Critical — exposes user credentials to shell commands; risk of orphan processes.  
  **Fix PR exists:** Yes — PR #645 directly addresses this issue.
- **Issue #646** — CI failures: 5 new Clippy warnings in Rust 1.97.1, and two vulnerable dependencies (quick-xml 0.39.2, lopdf 0.40.0) rejected by cargo-deny.  
  **Severity:** Critical — blocks pipeline validation, could mask future regressions.  
  **Fix PR exists:** No dedicated fix PR yet; Issue #646 references PR #645 as exposing the problem.

No crashes, regressions, or user-reported bugs appeared today.

## 6. Feature Requests & Roadmap Signals
No user feature requests were submitted today. Both issues and the PR are maintainer-driven **safety and infrastructure improvements**, not user-requested features. However, these safety fixes (subprocess isolation, credential scrubbing, Docker cleanup) are foundational for any future multi-agent or third-party plugin ecosystem. Expect these to land in the **next minor version** (likely v0.x or v1.x depending on release cadence) as they are prerequisites for secure model-driven code execution.

## 7. User Feedback Summary
No user feedback, comments, or reactions were recorded today. The absence of community engagement may indicate:
- The project is in a pre-release or early-stage phase.
- Users are not yet actively testing or reporting issues.
- The maintainer is driving the roadmap without external contributions currently.

No pain points, use cases, or satisfaction signals were captured.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified. All items in today's digest are recent (created/updated on 2026-07-23) and are already being acted upon by the maintainer. The project has no visible stale items.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-24

## Today's Overview

ZeroClaw shows **very high activity** across 50 updated issues and 50 updated PRs in the last 24 hours, with an open-to-closed ratio of ~9:1 (45 open vs. 5 closed issues). No new releases were published. The project is in an **intensive development phase** focused on **security hardening, channel reliability, config correctness, and the A2A protocol interoperability milestone**. Multiple S0/S1 severity bugs (data loss, TOCTOU races, sandbox breaks) are being actively patched. The community is heavily engaged on tracker issues for v0.9.0 and A2A integration, with maintainers pushing high-risk fixes across runtime, channels, and config layers.

## Releases

**None** — No new releases in the last 24 hours. The latest stable version referenced is v0.8.3 (noted in bug #9290). The v0.9.0 milestone tracker (#7432) consolidates breaking-change work for auth, security, and multi-agent boundaries.

## Project Progress

**Closed/merged today:**
- **#4721** (fix: zeroclaw logs to stderr instead of stdout) — *closed*
- **#2767** (Feature: Multi-Agent Routing) — *closed*
- **#4832** (Config option to disable LeakDetector high-entropy token redaction) — *closed*
- **#4721** also re-closed as complete

**Active fix PRs in review:**
- **PR #9324** — A2A outbound client config + wire model (phase 1 of RFC #9106)
- **PR #9325** — Fix small local models misinterpreting ZeroCode streamed turns as log payloads
- **PR #9320** — Wall-clock timeout for cron agent jobs to prevent stuck locked_at rows
- **PR #9321** — Send unauthorized notices for Telegram media messages (was silently dropped)
- **PR #9310** — Propagate nested `set_prop` value errors instead of masking as "unknown property"
- **PR #9297** — Fix `save_dirty` resolving map keys containing dots (e.g., `gpt-4.1`)
- **PR #9295** — Repair package publishing workflows (Scoop, idempotent releases)
- **PR #9291** — Detect installed AppImage and fix desktop download URL
- **PR #9203** — Authenticated HTTP fan-in for SOP webhook triggers
- **PR #9201** — Harden shared_budget TOCTOU race with atomic `fetch_update`

## Community Hot Topics

### Highest Engagement (Comments + Reactions)

1. **[#3566] A2A Protocol Interoperability Tracker** — 9 comments, 7 👍  
   https://github.com/zeroclaw-labs/zeroclaw/issues/3566  
   *Core multi-agent communication standard; foundational for v0.9.0 roadmap.*

2. **[#9127] RFC: Abstract KeySource trait for master-key material** — 7 comments  
   https://github.com/zeroclaw-labs/zeroclaw/issues/9127  
   *Architecture discussion on credential encryption classification; high security impact.*

3. **[#2767] Multi-Agent Routing (Closed)** — 7 comments, 9 👍  
   https://github.com/zeroclaw-labs/zeroclaw/issues/2767  
   *Most upvoted issue; resolved routing for isolated agents + multiple channel accounts.*

4. **[#9228] Add eval results dashboard and trend tracking** — 2 comments  
   https://github.com/zeroclaw-labs/zeroclaw/issues/9228  
   *Deferred from #7065; community wants longitudinal pass-rate visualization.*

5. **[#9158] Signal "Note to Self" message processing** — 1 comment  
   https://github.com/zeroclaw-labs/zeroclaw/issues/9158  
   *Signal Channel gap—only reacts to dataMessage envelopes, missing self-messaging.*

### Underlying Needs

- **A2A Interoperability** (#3566) is the dominant community desire—agents talking to other agents (ZeroClaw, NanoClaw, OpenClaw) via open protocol.
- **Security simplification** (#9127) shows power users want clearer master-key management without deep internal knowledge.
- **Longitudinal metrics** (#9228) indicates advanced users want to track agent quality over time, not just single-run evals.
- **Channel completeness** (#9158, #9188) reveals expectations for full chat-feature parity across all messaging platforms.

## Bugs & Stability

### Critical Severity (S0 — Data Loss / Security Risk)

| Bug | Description | Status | Fix PR |
|-----|-------------|--------|--------|
| **#9188** | Telegram long-poll advances offset before processing, losing messages on parse failure | Open, in-progress | None yet |
| **#9187** | WeChat sync cursor persists before message enqueue — crash loses inbound messages | Open, in-progress | None yet |

### High Severity (S1 — Workflow Blocked)

| Bug | Description | Status | Fix PR |
|-----|-------------|--------|--------|
| **#9207** | web_fetch returns garbage for gzip/brotli/deflate responses | Open, in-progress | None yet |
| **#9192** | shared_budget TOCTOU atomic wrap + SopEngine finish_run unwrap panic | Open, in-progress | **PR #9201** (harden shared budget) |
| **#9191** | Cron agent jobs lack wall-clock timeout; locks persist until process restart | Open, in-progress | **PR #9320** (adds timeout) |
| **#9204** | Landlock sandbox restricts the daemon itself (SQLite, policy conflicts) | Open, in-progress | None yet |
| **#9236** | Fresh Telegram aliases dropped after config reload | Open, in-progress | None yet |
| **#9284** | Config flush overwrites concurrent writes (read-then-write race) | Open, in-progress | None yet |
| **#9290** | Windows desktop installer fails with missing TaskDialogIndirect | Open | None yet |

### Medium Severity (S2 — Degraded Behavior)

| Bug | Description | Status |
|-----|-------------|--------|
| **#8999** | ZeroCode streamed turns look like log/API payloads to small local models | Open, in-progress |
| **#9092** | ZeroCode keystroke lag in long sessions (full history renders) | Open, in-progress |
| **#9119** | ZeroCode session picker selects wrong row after scrolling | Open |
| **#9285** | Nested `set_prop` masks invalid values as unknown properties | Open, in-progress |
| **#9202** | `zeroclaw desktop` uses dead download URL, misses installed AppImage | Open, in-progress |

### Key Observations
- **Channel data-loss bugs** (#9188, #9187) affect Telegram and WeChat — S0 severity, no fix PRs yet.
- **Config race conditions** (#9284, #9191) show the runtime needs better concurrency guards.
- **Web fetch compression bug** (#9207) is S1 but no fix in progress — surprising for such a core tool.
- **PR #9310** directly fixes #9285 (nested set_prop error masking) — ready for merge.

## Feature Requests & Roadmap Signals

### Likely for v0.9.0 (tracker #7432)
1. **A2A Protocol Interoperability** (#3566) — Phase 1 landing today via PR #9324
2. **KeySource Trait** (#9127) — Architecture RFC, progressing toward implementation
3. **Multi-Agent Routing** (#2767) — Closed, likely shipped in current master
4. **TOTP for cross-channel approval** (#3767) — P1 security feature for admin operations
5. **Schema-validated tool calls for memory consolidation** (#4760) — Improves reliability

### Notable Community Requests
- **Eval results dashboard** (#9228) — Deferred; might land as a web dashboard feature post-v0.9.0
- **Signal "Note to Self"** (#9158) — Low effort, high user-value; could ship in next patch
- **Peer group channel validation** (#8997) — Config UX improvement, low risk
- **Workspace file change history** (#3672) — Major feature for agent self-modification audit trail

### Roadmap Signal
The **A2A protocol push** (#3566 + PR #9324) and **KeySource security refactor** (#9127) are the two dominant architectural themes. v0.9.0 appears to be an **architectural release** focused on multi-agent communication and credential security, not just incremental features.

## User Feedback Summary

### Pain Points
- **Windows Desktop installer broken** (#9290) — New users on Windows hit a launch blocker with v0.8.3
- **Small local model misinterpretation** (#8999) — Ollama users get "protocol commentary" instead of conversation
- **Data loss anxiety** (#9188, #9187) — Power users worried about dropped Telegram/WeChat messages
- **Logs on stdout break piping** (#4721, now fixed) — CLI users previously couldn't cleanly dump config schema
- **False positive redaction** (#4832, now fixed) — Legitimate high-entropy content (MD5 hashes) was incorrectly redacted

### What Users Want
- **Multi-profile, multi-channel operation** (#2767, closed) — Running multiple agents in one gateway with isolated workspaces
- **External hooks** (#3696) — Integration with external logging, memory, automation systems
- **Safer tool execution** (#3767) — 2FA gating for destructive commands across all channels
- **Better Telegram/WeChat parity** — Full feature set including self-messages, typing indicators, media handling

### Satisfaction Signals
- High engagement on A2A tracker (7 👍) and multi-agent routing (9 👍) shows users are **excited about architecture**
- Active contributions from 10+ distinct authors in the last 24 hours (dependabot excluded)
- Trusted/principal contributors submitting large features (Telegram multi-message streaming PR #8561 — size XL)

## Backlog Watch

### Stale High-Importance Issues (No Stale Tag)
- **#3696** — Configure external commands for message lifecycle hooks (since March 16, 4 comments, no PR)
- **#3767** — Require TOTP for cross-channel approval (since March 17, P1, no PR yet)
- **#3672** — Workspace file and memory change history (since March 16, no PR)
- **#4760** — Schema-validated tool calls for memory consolidation (since March 26, no PR)

### PRs Needing Author Action
- **PR #8561** (Telegram multi-message streaming, XL size) — needs-author-action since June 30
- **PR #8966** (RPC model_context_window separation) — needs-author-action  
- **PR #8838** (Shared SSE streaming transport for providers) — needs-author-action since July 8
- **PR #8438** (Cron shell_output_format config) — needs-author-action since June 28
- **PR #9182** (PowerShell native shell on Windows) — needs-author-action
- **PR #9201** (shared_budget hardening) — needs-author-action (critical fix)
- **PR #9300** (Parity harness test evidence) — needs-author-action

### Concern
Multiple **high-risk, size-XL PRs** are stalled with `needs-author-action` tags, including core Telegram improvements (#8561) and provider streaming (#8838). These represent significant community contributions that risk bit-rotting if maintainers cannot review promptly. The shared SSE streaming fix (#8838) has been awaiting author action for **16 days** — high risk of merge conflicts.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*