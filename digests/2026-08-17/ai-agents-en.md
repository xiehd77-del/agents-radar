# OpenClaw Ecosystem Digest 2026-08-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-17 01:20 UTC

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

Based on the provided GitHub data for OpenClaw on 2026-08-17, here is the project digest:

---

### 1. Today's Overview

OpenClaw is exhibiting a very high level of activity, with 500 issues and 500 PRs updated in the last 24 hours. This indicates a highly engaged community and an active development cycle. The issue tracker shows a significant backlog of open items (459), with a heavy concentration of `P1` priority bugs and long-standing issues flagged for maintainer review and product decisions, suggesting a bottleneck in the maintenance workflow. While there is a steady stream of new PRs aiming to fix critical bugs in session state, message delivery, and memory management, many are stalled awaiting author feedback or proof, contributing to the backlog. The single new release is a performance artifact for a specific PR, not a public software update.

---

### 2. Releases

- **pr-124528-profiles**: This is not a standard software release, but a data artifact. It contains CPU profiles captured from a bounded three-node Gateway test rig for [PR #124528](https://github.com/openclaw/openclaw/pull/124528). The profiles provide "before" and "after" data for an event-loop hotspot comparison, serving as evidence for that specific pull request's performance claims.

---

### 3. Project Progress

Of the 122 closed/merged PRs in the last 24 hours, the `top 30` by comment count show no merge activity, indicating they are still in review. However, several impactful PRs are ready for review or waiting on the author, targeting significant fixes:

- **Web UI Performance:** [PR #123535](https://github.com/openclaw/openclaw/pull/123535) aims to fix session catalog refresh storms, while [PR #123482](https://github.com/openclaw/openclaw/pull/123482) prevents the session list from stalling while loading workspace state. These target opening several session pages and scanning coding-session transcripts.
- **Agent Reliability:** [PR #112623](https://github.com/openclaw/openclaw/pull/112623) proposes injecting "Recently Completed Subagents" into the parent prompt to prevent re-spawning of finished work. Relatedly, [PR #121309](https://github.com/openclaw/openclaw/pull/121309) prepares to retain completion receipts for delete-cleanup subagents.
- **Memory Core Fixes:** [PR #121287](https://github.com/openclaw/openclaw/pull/121287) fixes a bug where the memory core would report promotion candidates that its own "apply boundary" was guaranteed to reject.
- **Security & State:** [PR #115447](https://github.com/openclaw/openclaw/pull/115447) makes `doctor repair` fail closed on newer schemas to prevent state file corruption. [PR #120987](https://github.com/openclaw/openclaw/pull/120987) aims to keep the Gateway rollback-compatible after additive SQLite columns.

---

### 4. Community Hot Topics

The most discussed issue is a clear sign of user frustration:

- **[Issue #121058](https://github.com/openclaw/openclaw/issues/121058)** (97 comments): "Silent reply failures still recurring after #116277 closed" — This is a critical `P1` issue indicating that a previously "fixed" bug is still causing message loss, undermining user trust in the system's reliability.

Other actively discussed topics, all `P1` and long-standing, revolve around reliability and data integrity:

- **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** (31 comments): "Subagent completion silently lost — no retry, no notification, no auto-restart on timeout" — This `diamond lobster` rated issue highlights multiple failure modes where work is lost without user knowledge.
- **[Issue #42475](https://github.com/openclaw/openclaw/issues/42475)** (26 comments): "[Feature]: Per-agent cost budget enforcement at the gateway level" — This points to a strong operational need for cost control, likely from enterprise or power users.
- **[Issue #48003](https://github.com/openclaw/openclaw/issues/48003)** (21 comments): "Steer mode does not inject messages mid-turn for main sessions" — This is a core functionality issue (`P1`, `diamond lobster` rating) affecting the agent's ability to be steered dynamically.

The underlying theme is a demand for reliability and control: users need to be certain tasks are completed, messages are delivered, and costs are manageable.

---

### 5. Bugs & Stability

The issue tracker is dominated by `P1` bugs, many of which are long-standing and have no new fix PRs. High-severity areas include:

- **Message Loss & Delivery Failures:**
    - [Issue #121058](https://github.com/openclaw/openclaw/issues/121058) (P1, 97 comments) - Recurring silent reply failures.
    - [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) (P1, 31 comments) - Subagent completions silently lost.
    - [Issue #87744](https://github.com/openclaw/openclaw/issues/87744) (P1, 17 comments) - Codex-backed Telegram turns timeout waiting for `turn/completed`.
    - [Issue #96834](https://github.com/openclaw/openclaw/issues/96834) (P1, 15 comments) - WhatsApp images wedge the message lane for ~3 minutes.
    - [Issue #50093](https://github.com/openclaw/openclaw/issues/50093) (P1, 12 comments) - WhatsApp backfill missed messages after reconnection.
- **Session State & Blocking:**
    - [Issue #115908](https://github.com/openclaw/openclaw/issues/115908) (P1, 14 comments) - Session transcript projection can livelock, blocking the event loop.
    - [Issue #112423](https://github.com/openclaw/openclaw/issues/112423) (P1, 11 comments) - Large SQLite transcript cleanup blocks the gateway event loop.
    - [Issue #53408](https://github.com/openclaw/openclaw/issues/53408) (P1, 11 comments) - Write/exec tool parameters silently dropped after long conversations.
- **Regressions & Configuration:**
    - [Issue #38327](https://github.com/openclaw/openclaw/issues/38327) (P1, 14 comments) - "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview.
    - [Issue #46786](https://github.com/openclaw/openclaw/issues/46786) (P1, 8 comments) - `tools.elevated.enabled: true` breaks exec routing logic (security-impacting).
    - [Issue #45494](https://github.com/openclaw/openclaw/issues/45494) (P2, 10 comments) - Cron agent jobs time out during API outages instead of fast-failing.

Fix PRs do exist for some of these. For instance, [PR #124910](https://github.com/openclaw/openclaw/pull/124910) addresses image artifact delivery, and [PR #124953](https://github.com/openclaw/openclaw/pull/124953) fixes recording interrupted trajectory endings for restart-marked sessions.

---

### 6. Feature Requests & Roadmap Signals

Several recurring themes in feature requests point toward the project's future direction:

- **Cost Management & Observability:** The demand is high for tools to control and monitor spend, led by [Issue #42475](https://github.com/openclaw/openclaw/issues/42475) (per-agent cost budgets). The CPU profile release is evidence that the team is actively investigating performance bottlenecks.
- **Enhanced Channel & UI Capabilities:** Users are requesting more sophisticated integrations, such as [Issue #88154](https://github.com/openclaw/openclaw/issues/88154) (Slack Modals) and [Issue #45508](https://github.com/openclaw/openclaw/issues/45508) (self-hosted STT/TTS in webchat). A significant PR, [PR #124864](https://github.com/openclaw/openclaw/pull/124864), adds a UI workflow for managing cloud worker profiles and machine selection, which is a major feature addition.
- **Agent Autonomy & Context Management:** [Issue #6757](https://github.com/openclaw/openclaw/issues/6757) (agent-triggered context compaction) and [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) (tiered bootstrap file loading) show a desire for agents to manage their own context windows more intelligently.

---

### 7. User Feedback Summary

The primary sentiment is frustration with **reliability and data integrity**. The most common pain points are:

- **Silent Failures:** Agents aborting, messages being dropped, or tasks completing without the user knowing.
- **Blocking/Stalling:** The system or channels freezing or becoming unresponsive for significant periods.
- **Configuration Pitfalls:** Features breaking due to config choices (e.g., elevated tools, allowlists) or updates requiring migration steps.
- **Mobile/Desktop Inefficiency:** UI elements like streaming reasoning content or canvas resets failing to work as expected.

While there is satisfaction with the ambition of the platform, these recurring issues on core mechanisms (delivery, state, event loop) are eroding user confidence and creating "alert fatigue" and a perception of instability.

---

### 8. Backlog Watch

A significant number of high-priority issues have been open for months and are stalled with tags like `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision`. These are not receiving new fix PRs and appear to be waiting for a maintainer to make architectural decisions or acknowledge them.

- **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** (P1, Diamond Lobster, since Mar 13): Subagent completion silently lost. A core reliability issue that has been open for 5 months.
- **[Issue #48003](https://github.com/openclaw/openclaw/issues/48003)** (P1, Diamond Lobster, since Mar 16): Steer mode cannot inject messages mid-turn. A core feature that is not functioning as documented for months.
- **[Issue #87561](https://github.com/openclaw/openclaw/issues/87561)** (P1, Diamond Lobster, since May 28): Defines durable final fallback delivery semantics across channels. This is a foundational design decision for the message-loss problems and has been awaiting a decision for months.
- **[Issue #46786](https://github.com/openclaw/openclaw/issues/46786)** (P1, Diamond Lobster, since Mar 15): `tools.elevated.enabled: true` breaks exec routing logic. A significant architectural and security-impacting bug with no clear path to fix.

These issues represent a substantial architectural debt. The project is generating a high volume of fixes for immediate symptoms, but the volume of `P1` issues labeled `no-new-fix-pr` and `needs-product-decision` suggests a need for the maintainers to pause and address the underlying systemic issues to improve overall project health.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report
**Date:** 2026-08-17

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing a bifurcation between **enterprise-grade reliability demands** and **rapid feature experimentation**. Across all active projects, the dominant pain points remain consistent: token consumption management, message delivery reliability, and context window optimization. Projects are increasingly investing in security hardening (SSRF protections, egress policies, allowlist enforcement) as adoption moves beyond hobbyist use cases. A significant architectural shift is visible toward **pluggable, extensible agent frameworks** with standardized provider abstractions, multi-channel support, and interoperability with existing AI ecosystems. The ecosystem is maturing from "chatbot wrappers" to **infrastructure platforms**, with cost observability and granular control emerging as critical differentiators.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Release Status | Health Score (1-10) |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 122 | 1 artifact (PR evidence) | **6.5** |
| **NanoBot** | 15 | 500 | 1 | None | **5.5** |
| **Hermes Agent** | 50 | 50 | ~397 (rolled into patch) | v0.20.2 (patch) | **7.0** |
| **PicoClaw** | 3 | 5 | 1 | None | **7.5** |
| **NanoClaw** | 1 | 32 | 13 | None | **8.0** |
| **IronClaw** | 1 | 9 | 2 | None | **7.0** |
| **LobsterAI** | 10 | 17 | 9 | None | **6.0** |
| **Moltis** | 3 | 6 | 5 | None | **7.5** |
| **CoPaw** | 10 | 11 | 2 | None | **7.0** |
| **ZeroClaw** | 48 | 50 | 6 (2 issues, 4 PRs) | None | **8.0** |
| **NullClaw** | 0 | 0 | 0 | None | **N/A (inactive)** |
| **TinyClaw** | 0 | 0 | 0 | None | **N/A (inactive)** |
| **ZeptoClaw** | 0 | 0 | 0 | None | **N/A (inactive)** |

*Health Score is a composite of merge-to-open ratio, maintainer responsiveness, and severity-weighted bug resolution rate.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Dominant community size** — 500 issues/PRs updated daily is 10x the nearest competitor (Hermes Agent at 50), indicating the largest user base and contribution pipeline.
- **Active bug-fixing velocity** — 122 merged/closed PRs in 24 hours demonstrates exceptional throughput, even with a significant open backlog.
- **Most comprehensive channel/agent feature surface** — from Telegram to WhatsApp, web UI to steam mode, OpenClaw offers the broadest integration catalog.
- **Performance engineering focus** — Release infrastructure includes CPU profiling artifacts for optimization work, an unusual investment for a community project.

### Technical Approach Differences
- **Gateway-based event loop architecture** — OpenClaw centralizes message routing, unlike NanoBot's direct channel integrations or Moltis's memory-centric design.
- **"Core + Claws" module model** — The primary extension framework vs. Go-based plugins (IronClaw) or WASM plugins (ZeroClaw).
- **Session state projectors** — Persistent transcript projection to UI, a unique design that several projects have not attempted.

### Community Size Comparison
| Project | Daily Issue Volume | Daily PR Volume | Relative Community Size |
|---|---|---|---|
| **OpenClaw** | 500 | 500 | **10x leader** |
| Hermes Agent | 50 | 50 | 1x |
| NanoBot | 15 | 500 | Large (but PR-stalled) |
| ZeroClaw | 48 | 50 | 1x |

### Key Risk
OpenClaw shows signs of **maintenance bottleneck** — P1 issues with `needs-product-decision` tags that have been open for 5+ months (#44925, #48003) suggest architectural debt may accumulate faster than governance can resolve.

---

## 4. Shared Technical Focus Areas

### Emerging Requirements Across Projects

| Requirement | Projects | Specific Need |
|---|---|---|
| **Token/Cost Management & Observability** | OpenClaw (#42475: per-agent budgets), NanoBot (#5266: million-token burn), CoPaw (#7003: memory solution), ZeroClaw (RFC #6971) | Granular per-call/per-agent cost tracking, auto-consolidation, and budget enforcement |
| **Config Reliability & Round-Trip Integrity** | NanoBot (#1073: unknown config keys dropped), CoPaw (#7048: cron updates silently fail), OpenClaw (elevated tools break routing) | Config changes must persist correctly and never fail silently |
| **Channel Parity & UX Consistency** | PicoClaw (Slack media, Telegram tables), OpenClaw (WhatsApp wedging), Hermes Agent (Feishu reconnects), CoPaw (C#/shader support) | Feature parity across messaging platforms and richer file/format support |
| **Message Delivery Reliability** | OpenClaw (#121058: silent reply failures), Hermes Agent (Telegram gateway cold-start), PicoClaw (SSRF hardening on download) | Atomic delivery guarantees, retry semantics, no-silent-drop invariants |
| **Memory & Context Management** | NanoBot (#2463: prompt-prefix persistence), NanoClaw (cross-session context engine), CoPaw (ViBo proposal), ZeroClaw (attachment unification RFC) | Durable multi-session memory, context compaction, standardized persistence |
| **Security Hardening** | OpenClaw (executing allowlists), NanoBot (exec bypass), PicoClaw (SSRF on media), ZeroClaw (egress policies), LobsterAI (IPC key-level access) | Default-deny boundaries across agents, tools, and channels |
| **Provider Flexibility & Interop** | ZeroClaw (OpenAI Chat Completions profile), CoPaw (#6302 provider unification), Hermes Agent (Devin ACP), Moltis (MiniMax agent) | Standardized provider abstractions, drop-in compatibility with ecosystem tools |
| **Enterprise Multi-Tenancy** | ZeroClaw (#9772: per-user Telegram group session), CoPaw (#7052: plugin system_prompt hide from end-users), LobsterAI (agent template import/export) | White-labeling, user-scoped isolation, and collaborative workflows |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw | Moltis |
|---|---|---|---|---|---|---|
| **Primary Language** | TypeScript (Node.js) | Python | TypeScript | Rust | Python | Rust |
| **Target User** | Power users, wide channel coverage | Enterprise, multi-platform | Desktop-first, plugin users | Security-conscious infrastructure teams | Game dev / data science, Chinese market | Privacy-focused, self-hosters |
| **Architecture** | Gateway event loop with session projectors | Channel adapters + consolidation engine | Desktop app + gateway daemon | WASM plugins + network guard | Async Python with plugin API | Memory-centric runtime |
| **Key Differentiator** | Broadcast channel support + web UI | Voice/skills + Discord emphasis | Multi-agent orchestration + ACP | Security posture + egress policy | DataPaw desktop runtime | CalDAV + vault + activity visibility |
| **Extension Model** | Claws (TypeScript modules) | Skills (Python) | Plugins (TypeScript) | WASM plugins | Plugin API (Python) | Crates + integration APIs |
| **Monetization Signal** | Cloud worker profiles (PR #124864) | MCP Apps host support | Hosted deployments | No clear path | Enterprise white-labeling | No clear path |

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — High Velocity (Active sprinting):**
- **OpenClaw** — 122 PRs merged daily; the most active project in the ecosystem, though maintenance debt is accumulating.
- **Hermes Agent** — 397 PRs rolled into a patch release; steady throughput and active regression response.
- **NanoClaw** — 13 PRs merged, coordinated core-team landings, and a strong architectural roadmap (cross-session context).

**Tier 2 — Moderate Activity (Feature development + stabilization):**
- **ZeroClaw** — Security-first RFC-driven development; egress rollout is a major architectural investment.
- **Moltis** — 5 PRs merged in a stabilization sprint; resolved release-blocking CI issue.
- **CoPaw** — Community-driven fixes with two competing PRs for the same bug; actively folding in first-time contributors.
- **IronClaw** — Stable maintenance; dependency bumps + targeted UX fixes.
- **LobsterAI** — Security hardening and UX polish; a maturing Electron app.

**Tier 3 — Moderate/Low (Consolidation or dormancy):**
- **NanoBot** — 499 open PRs with a 1-PR merge rate signals a **serious maintainer bottleneck**. The codebase is evolving but not merging.
- **PicoClaw** — Small but healthy; security PRs are pending review.

**Tier 4 — Inactive (No activity in 24h):**
- **NullClaw**, **TinyClaw**, **ZeptoClaw** — Either dormant or in a quiet period. No public activity to assess.

### Rapid Iterators vs. Stabilizers
- **Rapidly iterating:** OpenClaw, Hermes Agent, NanoClaw (daily feature merges)
- **Stabilizing:** Moltis (addressing CI + test flakiness), IronClaw (maintenance mode)
- **Blocked on review:** NanoBot (merge bottleneck), PicoClaw (pending security PRs)

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **"Silent success, no effect" is the highest-trust killer.** Repeated across CoPaw (#7048), OpenClaw (#121058), and NanoBot (#5266) — users are most frustrated when tools return `rc=0` but nothing changed. Expect a move toward **explicit verification/receipts** in agent tool outputs.

2. **Token cost observability is the #1 unmet need for production deployment.** Million-token burns (#5266), latent consolidation bugs (#5402), and per-agent budget requests (#42475) all point to a shared gap: **cost introspection**.

3. **Memory is moving from optional to required.** Cross-session context engines (NanoClaw), prompt-prefix persistence concerns (NanoBot), and memory solutions (CoPaw) indicate that **long-horizon agent behavior** needs durable, structured memory beyond scrolling buffers.

4. **OpenAI-protocol compatibility is becoming a baseline requirement.** ZeroClaw's RFC #8603 (Chat Completions profile) mirrors the broader industry push for **drop-in replacement backends**. Interop with Open WebUI, LobeChat, Continue.dev, and LangChain is a stated need.

5. **Security licensing shifts from "nice-to-have" to "must-ship."** SSRF hardening (PicoClaw), egress deny-by-default (ZeroClaw), and key-level IPC access (LobsterAI) all landed or advanced this week. **Default-deny is becoming the expected posture** for agent frameworks.

6. **Channel UX parity is the silent growth lever.** The steady stream of channel-specific fixes (WhatsApp wedge, Telegram tables, Slack uploads) indicates that **users onboard via one channel but stay for cross-channel reliability**.

7. **Low-code agent team configuration is an emerging demand.** ZeroClaw's swarm RFC (ephemeral TUI-based teams) and CoPaw's per-agent `reasoning_effort` overrides suggest a shift from "config surgery" to **runtime-driven agent orchestration**.

---

### Value for AI Agent Developers

**Immediate action:** Audit your tool-call verification semantics — users will not trust agents that say "done" when they aren't.

**Short-term roadmap:** Add token-count-based consolidation with **verified estimation** (the root cause of NanoBot's bug) and per-agent cost budgets with alerting.

**Long-term investment:** Design for **standards compliance** (OpenAI protocol, MCP) and **default-deny security**, as both are becoming non-negotiable for enterprise adoption. Prepare for **memory as a first-class infrastructure service** separate from the context buffer.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-17

## 1. Today's Overview

NanoBot is in a period of sustained high activity with **15 issues updated** in the last 24 hours and a remarkable **500 PRs updated** (499 still open), indicating a very large backlog of pending contributions. The bulk of the PR activity consists of older, conflict-tagged contributions that have gone stale (many from Feb–May), pointing to a **maintainer bandwidth bottleneck** despite active community development. No new releases were published today, and the core team appears focused on triage and addressing a cluster of token-management, consolidation, and security issues. Overall, the project is thriving in community engagement but faces growing pressure to merge long-standing PRs and stabilize recent regressions.

## 2. Releases

No new releases were published during this period. The last tagged versions (0.1.4post5) are associated with a known regression affecting Gemini 3 Flash Preview (Issue #2185), which may be motivating maintainers to hold off on new tags until fixes land.

## 3. Project Progress

Only **1 PR was merged/closed** in the last 24 hours, with 499 remaining open — indicating that merge throughput is currently extremely low relative to inflow. The single closed PR is #4329, a major CLI feature (native TypeScript terminal UI) that was **mistakenly marked merged and reverted**; a follow-up PR #5406 has been opened to carry the same work forward. Notable advanced work in the pipeline includes:

- **PR #5406** — Native TypeScript terminal UI (new attempt after #4329 revert)
- **PR #5358** — WebUI session collaboration via `@mentions`, enabling peer-session referencing in the composer
- **PR #1306** — Reusable voice/audio support for Discord including TTS replies and audio transcription

## 4. Community Hot Topics

The most active discussions this week center on **resource consumption and architectural correctness**. The two highest-engagement threads are:

- **[Issue #2463](https://github.com/HKUDS/nanobot/issues/2463) (15 comments)** — Architectural concern that conversation history is not persisted in the exact form sent to the model, conflicting with OpenAI-style prompt-prefix expectations. This is a deep architectural issue with significant design implications.

- **[Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) (14 comments)** — Users report **million-token burn within two hours** with no visible activity, requesting per-call token logging to trace runaway consumption. This is likely the single biggest user pain point this week.

Other significant discussions include the **complete_goal endless-loop bug** ([#4864](https://github.com/HKUDS/nanobot/issues/4864), 6 comments, 1 reaction) and a **security advisory on the exec allowlist bypass** ([#5305](https://github.com/HKUDS/nanobot/issues/5305), 3 comments) — both receiving active maintainer attention.

## 5. Bugs & Stability

Multiple stability issues surfaced in the last 24 hours. Ranked by severity:

**High:**
- **[#5305 — Security: exec.allowPatterns allowlist bypass](https://github.com/HKUDS/nanobot/issues/5305)** — API users can chain shell commands beyond the allowlist, enabling unauthorized execution. Closed, but check the linked fix commit for verification.
- **[#5402 — Token consolidation never triggers](https://github.com/HKUDS/nanobot/issues/5402)** — tiktoken consistently underestimates API token counts by a large margin, so consolidation never fires; users suffer unbounded context growth.
- **[#5377 — Consolidation truncates archive input but advances past full batch](https://github.com/HKUDS/nanobot/issues/5377)** — Messages removed by truncation are skipped permanently, causing silent data loss.

**Medium:**
- **[#4864 — Endless loop for complete_goal tool call](https://github.com/HKUDS/nanobot/issues/4864)** — Gateway parses `recap` parameter as bare string instead of JSON object, causing repeated errors.
- **[#5373 — Cron scheduler dies permanently after persistence failure](https://github.com/HKUDS/nanobot/issues/5373)** — A single disk-full/permission error kills the scheduler forever because timer re-arming is outside the try/finally block. Closed in the last day.

**Regression:**
- **[#2185 — 0.1.4 → 0.1.4post5 breaks gemini-3-flash-preview](https://github.com/HKUDS/nanobot/issues/2185)**

Fix PRs targeting these issues are not yet visible in the merged set.

## 6. Feature Requests & Roadmap Signals

Clear roadmap signals from this week's requests:

- **[#5404](https://github.com/HKUDS/nanobot/issues/5404) — `disable-model-invocation` for skills**: Users want user-only skills that the model cannot auto-invoke. Patterned after PI, Cursor, and Claude Code. Small, self-contained — **likely to land in next minor version**.

- **[#5251](https://github.com/HKUDS/nanobot/issues/5251) — MCP Apps host support in WebUI**: Let MCP servers attach interactive UI components (`io.modelcontextprotocol/ui`) rather than being treated merely as text/image artifacts. Medium scope; signals growing MCP ecosystem demand.

- **[#5298](https://github.com/HKUDS/nanobot/issues/5298) — Budget MCP tool schemas for large tool sets**: Reduce context cost when embedding many tool definitions. Relevant to enterprise deployments.

- **[#5289](https://github.com/HKUDS/nanobot/issues/5289) — Telegram stickers and agent-initiated reactions**: Channel parity feature, moderate complexity.

- **[#4467](https://github.com/HKUDS/nanobot/issues/4467) — Dream should update existing workspace skills instead of creating duplicates**: Users want iterative skill refinement. Quality-of-life improvement.

**Most probable candidates for next release:** #5404 (small, high-demand), consolidator fixes from #5402/#5377 (correctness-critical), and skills deduplication from #4467.

## 7. User Feedback Summary

Users are expressing both strong satisfaction with the project's breadth and clear frustration on two fronts:

- **Token consumption is the #1 complaint** ([#5266](https://github.com/HKUDS/nanobot/issues/5266)): Users report million-token burn without visible activity, and the consolidation system that should mitigate this is broken in two independent ways (#5402, #5377). This combination is likely eroding trust in the project's efficiency story.

- **Constant context-rebuild costs**: PR #1037 (moving the time string to the end of the system prompt) and Issue #2463 (prompt-prefix persistence) both reflect users actively trying to optimize against provider-side prompt caching. The community is clearly running production workloads and measuring token costs carefully.

- **Power users want control**: Requests for user-only skills (#5404), per-call token logging (#5266), and config round-trip preservation (#1073) all point to experienced users customizing NanoBot deeply and expecting configuration to be honored and observable.

- **Channel-specific UX gaps**: Telegram stickers (#5289), Matrix threads (#5275), and Discord sender attribution (#1147) show users integrating NanoBot into daily workflows across many platforms and wanting parity.

## 8. Backlog Watch

These items have remained unresolved for extended periods and need maintainer attention:

- **[PR #1073 — preserve unknown config keys when saving](https://github.com/HKUDS/nanobot/pull/1073)** (Feb 23): Fixes silent data loss of custom provider configs (e.g., `openai-codex`). Open **6 months**, zero merge activity. Directly matches community demand in #1023.

- **[PR #1025 — persist OAuth tokens and preserve unknown fields](https://github.com/HKUDS/nanobot/pull/1025)** (Feb 23): Same root cause (config round-trip drops fields); also open 6 months.

- **[PR #1037 — move current time to end of system prompt](https://github.com/HKUDS/nanobot/pull/1037)** (Feb 23): Helps implicit prompt caching. Simple change, 6 months stale; relates to active user concerns about token costs (#5266).

- **[PR #1128 — fix 163.com IMAP ID command](https://github.com/HKUDS/nanobot/pull/1128)** (Feb 24): Compatibility fix for a major Chinese email provider; 6 months stale.

- **[Issue #2185 — Gemini 3 Flash Preview regression](https://github.com/HKUDS/nanobot/issues/2185)** (Mar 17): Tagged `regression`; closed as of yesterday, but verify the linked fix commit resolves the problem for all users.

- **[PR #4329 — TypeScript terminal UI revert](https://github.com/HKUDS/nanobot/pull/4329)**: Marked merged in error, then reverted; follow-up #5406 carries the work, but the confusion around the revert process may warrant a maintainer note.

**Overall health assessment**: NanoBot has a vibrant, technically sophisticated community and a broad feature surface. The primary risks are (a) the merge bottleneck (499 open PRs), (b) two independent token-consolidation bugs that compound into a costly user-facing problem, and (c) some stale-but-relevant configuration/data-loss fixes that have lingered for months. Addressing the consolidator bugs and the config round-trip PRs would resolve the most significant user-visible pain points in the near term.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the GitHub data provided for Hermes Agent (github.com/nousresearch/hermes-agent) on 2026-08-17, here is the project digest:

---

## Hermes Agent Project Digest — 2026-08-17

### 1. Today's Overview
Project activity remains **very high**, with a steady stream of 50 issues and 50 PRs updated in the last 24 hours alongside a new patch release. The project is in active development with a strong focus on **bug fixing and hardening**, evidenced by the high number of bug reports across desktops, gateways, and plugins. While engagement is robust, the project faces pressure from a significant volume of open defects, particularly concerning session state management, platform-specific issues (Windows, Telegram), and desktop localization. A new patch release (v0.20.2) was published, rolling up a large number of merged changes for downstream stability.

### 2. Releases
**v2026.8.16 (Hermes Agent v0.20.2)**

This is a **patch release** designed for stability, rolling up the ~397 PRs merged since v0.20.1 into a stable tagged release for downstream consumers (Docker images, hosted deployments, fresh installs). No breaking changes or migration notes were provided in the release description.

### 3. Project Progress
Today's merged/closed PRs tackle a variety of fixes and improvements:
- **Desktop UI Fix:** [PR #62300](https://github.com/NousResearch/hermes-agent/pull/62300) was closed, fixing the bug where the elapsed-time counter would reset when navigating away from the chat view, ensuring it continuously tracks the in-flight turn.
- **Security & Dependency Updates:** [PR #73703](https://github.com/NousResearch/hermes-agent/pull/73703) and [PR #73662](https://github.com/NousResearch/hermes-agent/pull/73662) were closed, addressing npm audit advisories and pinning patched versions of `brace-expansion` and PostCSS in JS workspaces to reduce the project's vulnerability surface.

### 4. Community Hot Topics
The most discussed issues reveal significant and varied pain points. The top three by comment count are all critical bugs reported in the last day:
- **[#87559: ACP-provided MCP servers registered but tools never reach the callable tool catalog](https://github.com/NousResearch/hermes-agent/issues/87559)** (5 comments): A Windows-specific bug where tools from ACP-provided MCP servers are registered but not callable, effectively breaking core functionality for users on that setup.
- **[#62158: Desktop chat elapsed-time counter resets to ~1s when navigating away and back](https://github.com/NousResearch/hermes-agent/issues/62158)** (4 comments): A long-standing and visible UI bug that was just fixed by PR #62300.
- **[#87093: Debian installation broken; uv.lock & npm install failed](https://github.com/NousResearch/hermes-agent/issues/87093)** (4 comments): A P1 issue blocking new users on Debian from installing Hermes Agent, which is a critical barrier to adoption.

### 5. Bugs & Stability
The sheer number of open bugs is a concern for project stability. Notable issues reported today, ranked by severity:
- **High (P1):** [Issue #88033](https://github.com/NousResearch/hermes-agent/issues/88033) reports that `hermes serve` leaks file descriptors, leading to complete agent unusability (`EMFILE`). **A fix PR exists:** [PR #88048](https://github.com/NousResearch/hermes-agent/pull/88048) adds context-manager support to `SessionDB`.
- **High (P1):** [Issue #87093](https://github.com/NousResearch/hermes-agent/issues/87093) reports a broken installation script for Debian 13.6, preventing new users from installing.
- **Medium (P2):** [Issue #87594](https://github.com/NousResearch/hermes-agent/issues/87594) shows that `hermes update` on Windows fails to pause the gateway due to a bug in ancestor-exclusion logic.
- **Medium (P2):** [Issue #87598](https://github.com/NousResearch/hermes-agent/issues/87598) describes a Telegram gateway cold-start bug that strands the module entity and never self-heals, requiring a full restart.

### 6. Feature Requests & Roadmap Signals
Several open PRs hint at upcoming features and improvements:
- **Devin ACP Provider Integration:** [PR #88027](https://github.com/NousResearch/hermes-agent/pull/88027) proposes making Devin (Cognition) a first-class Hermes provider, indicating a focus on expanding the supported agent ecosystem.
- **MacOS FileProvider Handling:** [PR #88052](https://github.com/NousResearch/hermes-agent/pull/88052) addresses macOS iCloud/FileProvider path handling in the terminal lifecycle guard, showing attention to platform-specific edge cases.
- **Improved Cron Job Reliability:** [PR #88050](https://github.com/NousResearch/hermes-agent/pull/88050) and [PR #80752](https://github.com/NousResearch/hermes-agent/pull/80752) focus on strengthening the cron system, addressing retry storms and providing nudges for repeatedly failing jobs.

### 7. User Feedback Summary
User feedback today surfaces **significant frustration with reliability and platform compatibility**. Pain points include broken installations on Debian, critical bugs in the ACP integration on Windows, unstable Telegram gateway connections, and file descriptor leaks in long-running servers. There is also a clear theme of **incomplete internationalization (i18n)** , with three separate issues from one user ([mugualucheshen](https://github.com/mugualucheshen)) reporting untranslated UI elements in the zh-CN locale. A positive signal is the active release of patches and rapid engagement from maintainers on many of these issues.

### 8. Backlog Watch
Several long-standing issues and PRs require maintainer attention due to their potential impact and age:
- **[Issue #31367: Feishu WebSocket disconnect causes full gateway restart every ~30min](https://github.com/NousResearch/hermes-agent/issues/31367)** (since 2026-05-24): A critical bug for Feishu users that remains open after three months, causing frequent disruptions.
- **[Issue #85391: WhatsApp pairing wizard writes to wrong session dir](https://github.com/NousResearch/hermes-agent/issues/85391)** (since 2026-08-13): A configuration bug that breaks WhatsApp pairing for some users, flagged as needing reproduction.
- **[PR #63187: Stop standing-goal loop after a failed provider turn](https://github.com/NousResearch/hermes-agent/pull/63187)** (since 2026-07-12): A fix for a potentially costly and frustrating loop has been open for over a month.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-17

## 1. Today's Overview

PicoClaw shows moderate activity with 3 issues and 5 PRs updated in the last 24 hours. The project remains healthy with a steady stream of community contributions, though no new releases are available. Notably, all three open issues are feature requests or bug reports from different contributors, indicating ongoing community engagement. The stale labeling on several older PRs and issues suggests maintainers may need to prioritize backlog cleanup. Security-focused PRs (SSRF hardening across channels) continue to advance, reflecting a strong emphasis on hardening the platform.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release referenced in issue #3338 is picoclaw 0.3.x, but no changelog or version details are available in this data window.

## 3. Project Progress

- **[PR #3193 — Added simplex channel type (CLOSED/MERGED)](https://github.com/sipeed/picoclaw/pull/3193)** — The first new channel integration in over 6 weeks from contributor `dim`. This feature adds Simplex as a supported messaging channel, expanding PicoClaw's multi-channel capabilities. There are no breaking-change notes in the PR description.

Other PRs that remain open but were updated today include SSRF-hardening fixes for Weixin (#3324), WeCom (#3323), and cross-channel inbound media downloads (#3322). While not yet merged, these represent a coordinated security improvement effort.

## 4. Community Hot Topics

- **[Issue #3302 — OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302) — 3 comments** — Most active discussion. Community members are pushing for modern OAuth 2.1 support to match newer MCP ecosystem requirements. This is a "nice-to-have" per the author's label, but the underlying need is for enterprise-grade authentication when connecting to external MCP servers.

- **[Issue #3325 — Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325) — 1 comment** — Asks for native Telegram table rendering using Bot API 10.1 features instead of degrading to markdown/code blocks. This points to UX polish needs for structured data output from agents.

- **[PR #3299 — Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — Extended discussion period (open since July 26) on integrating Exa as a web search backend. This would diversify search options beyond current defaults.

## 5. Bugs & Stability

- **[HIGH] Issue #3338 — Slack media uploads fail with "file size cannot be 0"** (reported 2026-08-17) — [Link](https://github.com/sipeed/picoclaw/issues/3338). `SendMedia` builds `slack.UploadFileParameters` without setting `FileSize`, causing the slack-go SDK to reject uploads pre-network. This breaks all media attachments to Slack. **Fix status:** No fix PR exists yet; issue was just reported.

- **[MEDIUM] SSRF vulnerabilities on media downloads (PRs #3322, #3323, #3324)** — [PR #3322](https://github.com/sipeed/picoclaw/pull/3322) / [PR #3323](https://github.com/sipeed/picoclaw/pull/3323) / [PR #3324](https://github.com/sipeed/picoclaw/pull/3324). QQ/Telegram/Discord/LINE/Slack inbound media downloads could be redirected to loopback/private hosts. Fixes exist but remain unmerged, leaving several channels potentially exposed to SSRF attacks.

## 6. Feature Requests & Roadmap Signals

- **Exa web search provider (PR #3299)** — Ready but unmerged. If merged soon, likely lands in the next minor release.
- **OAuth 2.1 for MCP servers (#3302)** — Marked as enhancement, not core. Older related request in #2546 suggests sustained demand. Likely candidate for future roadmap, especially as MCP ecosystem matures.
- **Telegram rich table rendering (#3325)** — Targets a narrow UX improvement. Given low complexity, could be picked up quickly by a contributor or maintainer.
- **Simplex channel (#3193, merged)** — Recently merged, so it will likely appear as a new channel option in the next release.

**Prediction:** The next version will likely include Simplex as a channel and possibly the Exa search provider, with SSRF hardening fixes if maintainers merge the pending security PRs.

## 7. User Feedback Summary

- **Pain point: Slack media broken** — The Slack upload failure (issue #3338) is a concrete, reproducible UX regression blocking a common workflow. Severity is high because media attachments are a primary Slack use case.
- **Pain point: security hardening awareness** — The SSRF PRs (#3322–#3324) indicate users/contributors are actively probing and fixing security weaknesses in media handling.
- **Desire: broader integration choices** — The Exa provider and Simplex channel requests show user appetite for expanding native integrations rather than relying on workarounds.
- **Desire: modern auth standards** — The OAuth 2.1 request (though a "nice-to-have") hints that some users are hitting limitations with older auth flows in enterprise MCP setups.

## 8. Backlog Watch

- **[PR #3299 — Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — Open since July 26 (3+ weeks). Stale labeling is absent, but the PR has not received maintainer feedback. With a complete config addition, this needs review or explicit deferral.

- **[Issue #3302 — OAuth 2.1 support](https://github.com/sipeed/picoclaw/issues/3302)** — Marked `[stale]` though only 3 comments and 0 reactions. The link to #2546 (likely older) suggests this is a recurring ask that has not been acknowledged by maintainers.

- **[Issue #3325 — Telegram table rendering](https://github.com/sipeed/picoclaw/issues/3325)** — Open for 8 days, marked `[stale]`. Low-complexity UX improvement that could be quickly addressed, but no maintainer response yet.

- **[PR #3193 — Simplex channel, now merged](https://github.com/sipeed/picoclaw/pull/3193)** — Was open for ~50 days before merge. This suggests maintainers may take 1–2 months to review non-trivial feature PRs.

No security-critical issues appear to have been ignored by maintainers beyond the pending SSRF PRs, which remain unmerged for 7+ days.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-17

## 1. Today's Overview
NanoClaw is in a high-velocity development stretch. 32 pull requests were updated in the last 24 hours, with 13 merged/closed — a strong sign of sustained momentum. The majority of merged work clusters around the `core-team` label, indicating coordinated multi-PR feature landings rather than scattered maintenance. Key areas of activity include a cross-session context engine, a unified mid-turn streaming delivery model, and a series of modular "seam" extensions (A1–A4) for channel, delivery, permissions, and agent lifecycle. The public issue tracker is surprisingly quiet — only one issue was updated, and it was filed in error — suggesting the project's day-to-day problem tracking is happening in internal or private repositories, with the public tracker serving as a formal release note channel.

## 2. Releases
**No releases published in the last 24 hours.** The most recent public release appears to be v2.1.54 (referenced in PR #3281). No breaking changes or migration notes for today.

## 3. Project Progress
Thirteen PRs were merged/closed today. The dominant theme is deep infrastructure work led by `gavrielc`, with a supporting cast of focused fixes from external contributors.

**Core platform work (merged):**
- **#3284 — Mid-turn streaming as the single delivery door.** This PR defines a new invariant: for providers that emit mid-turn text, streaming is *the only* content delivery path — the final result never sends content again. Includes DB-backed echo suppression to prevent duplicates across segments.
- **#3262 — Chat SDK bridge DM surface.** Extends the bridge so DM threads are normalized, client-side app-context is captured and cached, and a new `dm-opened` hook fires. Closes tickets A8 and C4.
- **#3263 — Channel registry hot-start.** `startChannelAdapter(key)` replays the same four-step boot sequence as init, allowing newly registered adapters to start without a full reboot (A1).
- **#3264 — Delivery batch preview hook.** `registerDeliveryBatchPreview` lets modules inspect undelivered batches before delivery — the motivating use case is expensing-related prefetch (A2).
- **#3265 — Agent creation flag. `suppressCreatedNotify`** silences the terminal "Agent created" message while preserving error notifications (A3).
- **#3266 — Channel card interceptor seam.** A module can register an interceptor per channel type to pre-empt or handle registration cards before they're built (A4).

**Wizard and tooling fixes (merged):**
- **#3259 — Skill-apply fixes.** Strips leading heading ordinals (e.g., "2." / "2)") from SKILL.md captions, surfaces headless-browser URLs, and adds inherit-script extraction.
- **#3260 — `decline_notify` unknown-sender policy.** A fourth policy option: the bot politely declines unknown DMs and sends the owner a one-line FYI, avoiding both silent drops and high-friction approval cards.

**Open-source contributions (merged):**
- **#3283 — Preserve structured chat links.** The shared formatter now appends deduplicated URLs from `links[]` when platform display text is shortened.
- **#3278 — `save_document` MCP tool.** Story 1.1 of the Document Memory epic: persists Word/PDF attachments to agent group durable memory.
- **#1251 — `/add-openmail` skill.** Grants NanoClaw agents email via OpenMail, with three modes: channel, tool+notify, and (implied) standalone.

**Still in review (open):** The four core-team PRs (#3254–#3257) land a cross-session context module, a `detached_at` migration, a sender-channel resolution fix, and a two-phase inbound batch selection. Two of these — #3254 and #3255 — address subtle correctness bugs that could cause missed or mis-routed work, and deserve priority in review.

## 4. Community Hot Topics
The GitHub data shows no threads with meaningful comment counts this cycle (most PRs have 0 comments), which is unusual and suggests discussion is happening on internal channels or in attached design docs. The strongest signals come from PR titles and summaries:

- **Cross-session context fan-out (#3257)** — The most architecturally significant PR in flight. It introduces *session-echo* context rows, DM backfill, and a new `ncl sessions history` surface. This is a major capability step — enabling agents to carry context across parallel sessions — and its 32-item PR list accompaniment suggests it is the centerpiece of the current sprint.
- **Mid-turn streaming as a single content door (#3284)** — Closed today. The declared invariant (one content door, no persistent dedupe state) is a design decision the community will likely test against providers that stream, and it affects how future providers are built.
- **Document Memory epic (#3278)** — A user-facing feature that makes agent memory tangible (actual Word/PDF files in memory/documents/files). The reference to `spec-document-memory` indicates a formal spec is driving this work; since this is Story 1.1, watch for follow-on stories.

## 5. Bugs & Stability
Ranked by severity:

1. **(High) Cross-session context backlog can starve real work** (#3254, open/being fixed). `getPendingMessages` selected the newest N rows regardless of trigger flag — meaning a backlog of context rows could exceed the cap and push a due task row out. The fix introduces two-phase selection. This is a silent correctness issue that could cause missed task execution.
2. **(High) Multi-instance sender resolution is ambiguous** (#3255, open/being fixed). `deliverMessage` resolved the target group by platform address alone, picking an *arbitrary* row when multiple bot identities share the same room. Outbound replies could land in the wrong conversation instance.
3. **(Medium) Discord inbound attachments never reach the agent** (#2752, open since June 12). Files arrive as bare `[file: message.txt]` with no bytes or path. The fix stages attachments that expose only a URL. This is a long-running bug with an open PR — 66 days and counting.
4. **(Medium) Legacy sessions are invisible to agent-scoped `ncl tasks`** (#3281, open, fix PR submitted). Since v2.1.54, `findTaskSessions()` only matched sessions with `messaging_group_id IS NULL AND thread_id LIKE 'syst...'`, meaning pre-existing sessions are untracked. The fix PR #3281 is in review.
5. **(Low) `ncl groups config update` cannot unset nullable scalars** (#3280, open, fix PR submitted). Setting `--model ""` stored an empty string instead of `NULL`, which then gets materialized into `container.json` and handed to the runtime.
6. **(Low) Telegram pairing code with spaces rejected** (#3282, open, fix PR submitted). The six-digit code displays with spaces in the setup card; a fix collapses internal whitespace.

Six bugs reported today — four already have fix PRs in flight, which is a healthy ratio. The two high-severity issues (#3254, #3255) are actively patched by the core team.

## 6. Feature Requests & Roadmap Signals
The most prominent roadmap signals are the explicitly numbered ticket references embedded in PR titles:

- **A1–A4 (landed today):** Channel hot-start, delivery batch preview, agent-creation suppression, channel-card interception — these four seams form a coherent "pluggability" theme: making the core loop introspectable and interceptable.
- **A8 + C4 (landed today, #3262):** DM surface normalization and `dm-opened` hooks — this is infrastructure for richer DM experiences across platforms.
- **Document Memory epic (#3278, Story 1.1):** The `save_document` MCP tool is the first slice. Expect Story 1.2+ (likely retrieval, search, or edit-in-place given the epic name) in upcoming PRs.
- **OpenMail email channel (#1251):** Email is a new modality for NanoClaw agents; this is a meaningful expansion of the "channel" concept beyond chat.
- **`detached_at` migration (#3256, open):** A soft-delete/suspension concept for messaging groups — signals more robust lifecycle management for agent–platform relationships.
- **Cross-session context (#3257, open):** The `ncl sessions history` surface and session-echo rows are groundwork for multi-turn, multi-session agent memory.

**Predictions for the next version:** Expect the four open core-team PRs (#3254–#3257) to merge this week, bringing the cross-session context module and the `detached_at` migration into 2.1.55. The Document Memory epic will continue with retrieval/search stories. Seam extensions (A-series) may continue — the pattern suggests an intentional "extension points" roadmap for NanoClaw v2.

## 7. User Feedback Summary
The public feedback stream is thin — no comment chains to analyze. What we can infer from PR summaries:

- **External contributors are filing precise bug-fix PRs** (#3281, #3282, #3283, #3280): These are small, well-scoped, user-facing fixes (pairing codes, config clearing, legacy sessions, chat links) — an indicator that real users are hitting these issues and choosing to fix them rather than file tickets.
- **The `add-openmail` skill (#1251) was authored by a non-core contributor** — that contributor took a 3-month-old PR and updated it today to get it merged. Active external engagement with a long-lived feature PR is a positive sign for contributor retention.
- **No explicit satisfaction/dissatisfaction signals** (no 👍 reactions, no complaints in issue text) — the community is quiet, and the project appears to operate mostly in internal channels.

## 8. Backlog Watch
These items need maintainer attention:

1. **#2752 — Discord inbound attachments (open 66 days).** The longest-standing open PR in today's data. The bug (attachments invisible to the agent) is a real user-facing issue on a major platform. No core-team label, no comments from maintainers visible in the summary. Needs a review and a merge decision.
2. **#3257 — Cross-session context (open, core-team).** This is the largest PR in flight (32 companion PRs), and it's still open after 2 days. High architectural surface area — worth a public design review.
3. **#1251 — Add `/add-openmail` (open since March 18; updated today).** 152 days old. It was merged/closed today, but the sheer lifespan warrants noting — if this is representative of external PR turnaround, it may be a contributor friction point.
4. **#3281 — Legacy session bug fix (open, 1 day).** Root cause is clearly explained and the fix PR is small; it should land quickly to avoid version-skew confusion.
5. **#3282 — Telegram pairing code fix (open, 1 day).** Same — trivial fix, should merge fast.

The low issue volume (one errant issue, zero real tickets) combined with very active PR flow suggests NanoClaw's public tracker is not the primary channel for user feedback or bug reports. Maintainers should consider whether the community knows how (or where) to report issues — or whether this is intentional project hygiene.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for 2026-08-17.

---

# IronClaw Project Digest — 2026-08-17

## 1. Today's Overview

IronClaw is in a stable maintenance phase, with the majority of activity focused on automated dependency bumps and a targeted UX fix for the Slack integration. The project saw 9 PRs updated in the last 24 hours, but only 2 were closed/merged, both of which were housekeeping items (a dependency bump and the removal of a retired config reference). The single most substantive piece of work is PR #7682, which is an active fix for a user-facing privacy and onboarding bug detailed in Issue #7681. Overall, the project appears healthy with a steady stream of low-risk dependency updates flowing in, though the velocity on feature work is currently low.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release remains unspecified in the current data window.

## 3. Project Progress

The project merged two PRs today, both aimed at improving internal stability and maintenance.

- **[PR #7683 — chore: remove retired IronLoop network settings (Closed)]**
  Contributor: `hanakannzashi` | Size: XS | Risk: Low
  This was a clean-up patch that removed obsolete `network_access` fields from the trusted IronLoop repository configuration, ensuring the existing Implement, Tester, and Review automation schemas are retained. This suggests the team is keeping the agent configuration schema lean as the IronLoop protocol evolves.
  [Link to PR](https://github.com/nearai/ironclaw/pull/7683)

- **[PR #7632 — chore(deps): bump the everything-else group with 4 updates (Closed)]**
  Contributor: `dependabot[bot]` | Size: M | Risk: Low
  A standard dependency update including `base64`, `toml`, `rstest`, and `jsonschema`. The closure of this PR indicates the Rust dependency tree is being kept up-to-date with minimal friction.
  [Link to PR](https://github.com/nearai/ironclaw/pull/7632)

## 4. Community Hot Topics

The most active discussion (though lacking comments) revolves around the **Slack Onboarding UX**, which is the only open Issue updated in the last 24 hours.

- **[Issue #7681 — Slack: unlinked-user connect message is public and requires a manual round trip]**
  Author: `sergeiest` | Status: Open
  This issue highlights two significant pain points in the current Slack flow: privacy (connect notices are visible to the entire channel) and friction (the user must navigate a manual multi-step process). While it has no comments yet, the fact that a fix PR was opened within hours of the issue being filed indicates it is a high-priority UX concern for the maintainers.
  [Link to Issue](https://github.com/nearai/ironclaw/issues/7681)

The immediate response to this is **PR #7682**, which is the largest open PR thread by scope (Size: L) and directly addresses the issue with a proposed one-click connect link solution.
  [Link to PR](https://github.com/nearai/ironclaw/pull/7682)

## 5. Bugs & Stability

**Severity: Medium (UX/Privacy)**

- **[Issue #7681 — Slack: unlinked-user connect message is public and requires a manual round trip]**
  The only bug reported today is a privacy leak in shared Slack channels. The bot currently posts a connection instruction message that is visible to all channel members, and the instructions require the user to manually type a link back to the bot.
  - **Fix in Progress:** Yes. **PR #7682** (opened by the issue author) proposes delivering the nudge privately via ephemeral message and includes a one-click link.
  [Link to Issue](https://github.com/nearai/ironclaw/issues/7681)

## 6. Feature Requests & Roadmap Signals

- **Private In-Channel Connect Flow (Likely Next Version):** The active work in PR #7682 suggests that the next minor release will likely include a feature where unlinked users receive an ephemeral (private) Slack message with a direct, authenticated connect link. This removes the need for a manual "round trip" (where the user has to copy-paste text back to the bot).
  [Link to PR](https://github.com/nearai/ironclaw/pull/7682)

- **Automation Determinism (In Progress):** PR #7651 (opened by `serrrfirat`) is a large feature (Size: XL) aimed at adding "deterministic no-result suppression" to automations. This suggests the team is working to make the AI agent's reporting behavior more predictable based on explicit user intent (e.g., only notify on changes) rather than relying on model interpretation. This is a strong signal that the roadmap is focusing on enterprise-grade control over agent outputs.
  [Link to PR](https://github.com/nearai/ironclaw/pull/7651)

## 7. User Feedback Summary

While there are no direct user satisfaction quotes in this data, the underlying feedback from Issue #7681 is clear:

- **Pain Point (Privacy):** Users are concerned that bot responses in shared channels expose their onboarding status to their team. This is a social embarrassment and a privacy risk in sensitive work environments.
- **Pain Point (Friction):** Users find the current multi-step process ("message me here again" / manual round trip) confusing and a barrier to entry. The reporter explicitly ends the thread asking "what's the link to connect you?" indicating the instructions are not clear.

The **remedy** proposed in PR #7682 (ephemeral messages + one-click link) aligns with standard Slack best practices, indicating the maintainers are responsive to these usability critiques.

## 8. Backlog Watch

The following PRs have been open for over a week and require maintainer review. While they are auto-generated dependency updates, they are critical for security and keeping the Rust toolchain on supported versions.

- **[PR #7020 — chore(deps): bump tokio-tungstenite from 0.29.0 to 0.30.0]**
  Age: 15 days | Status: Open | Size: S
  This update has been waiting since **August 2**, 2026. While it is a minor version bump, waiting this long can accumulate security patches for WebSocket handling.
  [Link to PR](https://github.com/nearai/ironclaw/pull/7020)

- **[PR #7262 — chore(deps): bump the wasm group with 2 updates]**
  Age: 12 days | Status: Open | Size: M
  Updates `wit-component` and `wit-parser` to newer versions. While not urgent, this is part of the WebAssembly component toolchain and should be kept current to avoid larger migration headaches later.
  [Link to PR](https://github.com/nearai/ironclaw/pull/7262)

- **[PR #7406 — chore(deps): bump the actions group with 4 updates]**
  Age: 8 days | Status: Open | Size: M | Risk: **Medium**
  This is a bump to the GitHub Actions (including `claude-code-action`). Risk is flagged as medium, but the version lag suggests maintainers should review this soon, as CI actions often include breaking changes if left too long.
  [Link to PR](https://github.com/nearai/ironclaw/pull/7406)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-17

## 1. Today's Overview

LobsterAI shows moderate activity over the last 24 hours with **10 issues** and **17 PRs** touched, though the majority are stale items being swept by the stale-bot rather than fresh activity. **9 PRs** were merged or closed, with a notable cluster of security hardening PRs (`#1831`–`#1835`) and UI/UX improvements now landing. No new releases were published, and the newest PR (`#2452`) is only 10 days old, suggesting a possible lull in feature development. The project maintains a healthy ratio of merged-to-open PRs (9:8), though several long-stale PRs from early April remain open, potentially signaling maintainer bandwidth constraints. Community engagement is low, with no issue exceeding 8 comments and only one issue receiving a positive reaction.

## 2. Releases

**No new releases were published in the last 24 hours.** The most recent release activity remains undisclosed in this data window.

## 3. Project Progress

Nine PRs were merged or closed in the last 24 hours. Three of these are actual merged feature/fix work (the remaining were closed as stale):

- **Security hardening (3 PRs, area: main):** A coordinated batch of security fixes from `kayo5994` landed, addressing sensitive data exposure:
  - [`#1831`](https://github.com/netease-youdao/LobsterAI/pull/1831): Redacts sensitive logging in main process and IM modules (Bearer tokens, API keys, auth codes) previously written to `electron-log` files.
  - [`#1832`](https://github.com/netease-youdao/LobsterAI/pull/1832): Adds key-level access control to `store:*` IPC channels, closing a vulnerability where XSS-compromised renderer code could read/write `auth_tokens` and `github_copilot_github_token`.
  - [`#1833`](https://github.com/netease-youdao/LobsterAI/pull/1833): Restricts `shell.openExternal` to a scheme whitelist, blocking `file:`, `javascript:`, `data:` schemes that could leak local files or execute malicious payloads.

- **DX/UX fixes (2 PRs):**
  - [`#1835`](https://github.com/netease-youdao/LobsterAI/pull/1835): Removes duplicate system error messages when `continueSession` fails, cleaning up a confusing double-error UX.
  - [`#1690`](https://github.com/netease-youdao/LobsterAI/pull/1690): Adds a confirmation modal before deleting IM instances (DingTalk, Feishu, QQ), preventing costly misconfiguration loss.

- **Feature work (1 PR):** [`#1760`](https://github.com/netease-youdao/LobsterAI/pull/1760): Agent avatars now support images alongside emoji, improving multi-agent recognizability.

- **Agent lifecycle (1 PR):** [`#1691`](https://github.com/netease-youdao/LobsterAI/pull/1691): Agent templates can now be imported/exported as `.agent.json` files, enabling cross-device sharing of custom agents.

## 4. Community Hot Topics

- [`#1813`](https://github.com/netease-youdao/LobsterAI/issues/1813) (closed, 8 comments) — **DeepSeek V4 fails with "provider rejected the request schema or tool payload."** This is the most-commented issue, indicating a real interoperability problem with a major model provider. The issue is now closed via stale-bot, which may prematurely bury an unresolved integration bug.

- [`#1698`](https://github.com/netease-youdao/LobsterAI/issues/1698) (open, 3 comments) — **Gateway port conflict with "智企帝王蟹" (a companion product).** Reproducible 100% on Tahoe OS; closing LobsterAI resolves the conflict. This suggests a port-reservation or process-isolation issue that could affect other companion products.

- [`#1797`](https://github.com/netease-youdao/LobsterAI/issues/1797) (closed, 2 comments, 1 👍) — **Request for batch conversation deletion** to keep context clean. Positive reaction signals multiple users want this.

- [`#1744`](https://github.com/netease-youdao/LobsterAI/issues/1744) — Bug report attachment failed to upload ("技术支持联系函.docx"), a minor meta-issue but indicates users are hitting barriers to reporting bugs.

## 5. Bugs & Stability

| Severity | Issue | Status | Analysis |
|----------|-------|--------|----------|
| **High** | [`#1813`](https://github.com/netease-youdao/LobsterAI/issues/1813) — DeepSeek V4 tool-schema rejection | Closed by stale-bot, **NOT fixed** | A flagship model is unusable; the issue was closed without resolution, which is a red flag for integration maintenance. |
| **High** | [`#1796`](https://github.com/netease-youdao/LobsterAI/issues/1796) — Write/Edit tools always fail | Closed by stale-bot, **NOT fixed** | Core editing functionality broken for days; user updated the app with no improvement. Root cause never identified in-thread. |
| **Medium** | [`#1714`](https://github.com/netease-youdao/LobsterAI/issues/1714) — Windows 11: white/invalid install icon frequently | Open, stale | Installer branding/validity issue on Win11; likely packaging-related but unaddressed for 4 months. |
| **Medium** | [`#1783`](https://github.com/netease-youdao/LobsterAI/issues/1783) — Diff display broken after update (misaligned `oldText`/`newText` lookup) | Open, stale | User provided a root-cause analysis pinning the bug to `extractDiffFromToolInput` in `app.asar`; no maintainer response visible. |
| **Low** | [`#1751`](https://github.com/netease-youdao/LobsterAI/issues/1751) — Scheduled task notification text incorrect | Open, stale | Cosmetic but confuses users; likely a template string bug. |

**Notable:** The two highest-severity bugs (`#1813`, `#1796`) were both closed by the stale-bot without resolution — a process failure worth flagging to maintainers.

## 6. Feature Requests & Roadmap Signals

- **Batch conversation deletion** ([`#1797`](https://github.com/netease-youdao/LobsterAI/issues/1797), 👍 1) — User wants to bulk-delete invalid conversations to keep context windows clean. Simple to implement; likely candidates for next minor release given the project's active UX iteration cadence.

- **Email OAuth2 support** ([`#1745`](https://github.com/netease-youdao/LobsterAI/issues/1745)) — Outlook requires modern auth; LobsterAI apparently lacks OAuth2, blocking a common use case. This is a roadmap-significant feature that may require an auth-layer change.

- **Dynamic temperature control** ([`#1688`](https://github.com/netease-youdao/LobsterAI/issues/1688)) — User wants in-chat keyword-based `temperature` adjustment. Low-cost quality-of-life feature; could be a quick win for power users.

- **Text-to-speech for AI replies** ([`#1682`](https://github.com/netease-youdao/LobsterAI/pull/1682), open PR) — A full-featured TTS PR using the browser-native Web Speech API is ready; likely to land in the next version.

- **Agent template import/export** ([`#1691`](https://github.com/netease-youdao/LobsterAI/pull/1691), merged) — Now supports cross-device agent sharing; a sign the project is leaning into multi-instance/power-user workflows.

## 7. User Feedback Summary

**Pain points:**
- **Tool/write reliability** is the loudest complaint (`#1796`): core edit tools failing makes the product unusable for entire workflows.
- **Model-provider compatibility** (`#1813`) breaks trust when a major model (DeepSeek V4) is rejected outright.
- **Introductory friction**: users struggle with IM setup (deletion confirmation PR `#1690` addresses the fallout), model configuration (`#1693` improves the empty-state path), and error feedback clarity (`#1835` deduplicates error messages).

**Satisfaction signals:** The project's active security hardening and UX polish (skeleton screens, better empty states, avatar images) suggests a maturing product. The fact that issues are largely in Chinese with the team responsive to i18n bugs (e.g., `#1773` fixing a missing translation key) indicates a well-maintained localization process.

**Frustration: unresolved critical bugs closed as stale.** Users who spent time reporting root-cause analyses (e.g., `#1783`) receive no acknowledgment before the issue is swept — this is demotivating for a community already small.

## 8. Backlog Watch

These issues/PRs need maintainer attention:

- [`#1783`](https://github.com/netease-youdao/LobsterAI/issues/1783) — Diff regression with a **user-provided root cause**; open for ~4 months, zero maintainer response. Reopen or fix promptly.
- [`#1796`](https://github.com/netease-youdao/LobsterAI/issues/1796) — Core Write/Edit tools broken; closed by stale-bot without resolution. Severe user-facing regression.
- [`#1813`](https://github.com/netease-youdao/LobsterAI/issues/1813) — DeepSeek V4 schema rejection; closed as stale without follow-up. Integration bug blocking a major provider.
- [`#1698`](https://github.com/netease-youdao/LobsterAI/issues/1698) — Gateway port conflict with companion product; reproducible and severe for affected users. Needs an architectural fix or coexistence strategy.
- [`#1765`](https://github.com/netease-youdao/LobsterAI/pull/1765) — Dependabot PR for `@headlessui/react` major bump (1.7.19 → 2.2.10) still open after nearly 4 months. Major-version upgrades carry breaking-change risk, but leaving it stale accumulates security risk.
- [`#1707`](https://github.com/netease-youdao/LobsterAI/pull/1707) — Agent-switch input-clearing fix has been open since April with no review; small but user-visible draft-confusion bug.

**Project health assessment:** LobsterAI is a fast-moving, community-supported Electron AI assistant with strong security awareness and active UX iteration. However, the stale-bot is prematurely closing unresolved high-severity bugs, and a backlog of un-reviewed PRs from April suggests funnel congestion. The security PR batch (kayo5994) demonstrates strong attention to attack surface; maintaining that pace is critical as the ecosystem grows.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-17

## 1. Today's Overview

Moltis is in a **high-activity stabilization sprint**. Six pull requests were updated in the past 24 hours, five of which were merged or closed, including two critical build fixes that restore compilation on `main`. One new feature PR (MiniMax Code agent) is open and ready for review. A previously reported flaky test was resolved via a deterministic clock-based approach, and a long-running CalDAV improvement finally landed. A recurring theme this week is **CI health and code maintainability**, including a format gate failure that remains unaddressed. The project is healthy but requires maintainer attention to clear the CI gate and review the pending feature.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent release remains unchanged.

---

## 3. Project Progress

Five pull requests were merged or closed today, representing significant progress across several subsystems:

- **[PR #1201 — fix(gateway): thread start_background_tasks into the memory runtime builder](https://github.com/moltis-org/moltis/pull/1201)** — **Critical build fix.** Restores compilation on `main` after a refactor (#1158) moved runtime setup out of the init path but missed a symbol reference. This was blocking all other work.

- **[PR #1203 — test(gateway): run the push fanout test on a paused clock](https://github.com/moltis-org/moltis/pull/1203)** — **Resolves flaky test #1193.** Rewrites the fanout timeout test to use a deterministic clock, eliminating race conditions under full-suite load. Stacked on #1201; will drop the test-fix commit once the base lands.

- **[PR #1147 — fix(caldav): honor list_events time ranges](https://github.com/moltis-org/moltis/pull/1147)** — **Long-awaited CalDAV correctness fix.** Replaces full-calendar fetching with RFC 4791 `calendar-query` REPORTs, normalizes ISO 8601 bounds to UTC, and preserves strict RFC overlap semantics. A significant improvement for recurring event handling.

- **[PR #1186 — fix(vault): normalize recovery phrase before hashing](https://github.com/moltis-org/moltis/pull/1186)** — **Security/UX consistency fix.** Aligns the stored hash computation with the existing normalization (strip dashes, uppercase) used during KEK derivation, so phrases typed in lowercase or with dashes now unseal consistently.

- **[PR #1093 — Add channel activity log visibility settings](https://github.com/moltis-org/moltis/pull/1093)** — **Feature completed.** Adds per-account, per-channel, and per-user activity log visibility controls (`all`, `errors_only`, `off`) with a well-defined override priority chain, covering both normal and attachment-based messages.

---

## 4. Community Hot Topics

Minimal discussion activity today; no comments or reactions were recorded on any issues or PRs in the last 24 hours. The most substantive conversation-adjacent work is happening in PRs rather than issue threads:

- **[PR #1204 — feat: add MiniMax Code ACP agent](https://github.com/moltis-org/moltis/pull/1204)** (open) — Adds a named `acp-minimax-code` external-agent kind, auto-detection, and documentation. This is the only open PR and represents active feature development. The author is likely awaiting maintainer review.

- **[Issue #1193 — Flaky test: push fanout timeout assertion races](https://github.com/moltis-org/moltis/issues/1193)** (closed) — Was a source of CI pain over the past week; resolution came via deterministic clock testing rather than timing adjustments.

The overall low comment/reaction volume suggests a healthy contributor-led workflow where issues are filed concisely and resolved via PRs with minimal back-and-forth.

---

## 5. Bugs & Stability

Three bug-related items are active today, ranked by severity:

1. **[HIGH] Gateway build failure on main (resolved by PR #1201)](https://github.com/moltis-org/moltis/pull/1201)** — `moltis-gateway` did not compile on `main` (E0425) due to a missing `start_background_tasks` symbol after a runtime refactor. This was a **release-blocking regression**. Fixed and merged.

2. **[MEDIUM] Format CI gate red on main ([Issue #1202](https://github.com/moltis-org/moltis/issues/1202))** — **Unresolved.** Two files exceed the 1500-line limit: `crates/memory-zvec/src/store.rs` (1799 lines) and `crates/gateway/src/methods/services/admin.rs` (1531 lines), both introduced by commit `9b47001a`. The `Format` job is failing on main. **No fix PR exists yet.** This is a process issue introduced by a prior merge and requires either file splitting or an exception.

3. **[LOW] Heartbeat runs continuously ignoring active hours ([Issue #1205](https://github.com/moltis-org/moltis/issues/1205))** — **Newly filed, unaddressed.** The heartbeat background task ignores configured active-hours windows. This is an operational/energy-efficiency bug with no comments or assignee yet.

4. **[RESOLVED] Flaky push fanout test ([Issue #1193](https://github.com/moltis-org/moltis/issues/1193))** — Fixed in #1203 that was merged today.

---

## 6. Feature Requests & Roadmap Signals

- **[PR #1204 — MiniMax Code agent](https://github.com/moltis-org/moltis/pull/1204)** is the clearest roadmap signal: the maintainers are actively broadening the external-agent ecosystem. Given the PR is ready and the project has been merging PRs at a high cadence, expect this to land within a week if review proceeds quickly.

- **[Issue #1205 — Heartbeat active-hours support](https://github.com/moltis-org/moltis/issues/1205)** is a behavioral expectation that active-hours configuration should apply to all background tasks, not just chat delivery. Given the issue was filed by a member of the core team (IlyaBizyaev), this is likely to be scheduled for the next minor release.

- **[PR #1093 — Activity log visibility settings](https://github.com/moltis-org/moltis/pull/1093)** (merged today) signals a roadmap focus on **per-user privacy and visibility controls** — a theme likely to continue in upcoming releases.

---

## 7. User Feedback Summary

- **CI friction is the loudest pain point.** The flaky test (#1193) and the current red Format gate (#1202) both originate from contributor-visible process friction: oversized files merge without gate checks, and timing-based tests fail under load. The maintainers responded quickly with a deterministic clock fix, which is positive.

- **CalDAV time-range correctness has been a long-standing issue** (PR #1147 open for over a month) — users presumably experienced expanded calendar resources and incorrect recurring-event filtering. The merge today directly addresses this.

- **Vault recovery phrase handling** (PR #1186) suggests user confusion around lowercase/dashed phrase entry — a usability fix that will make recovery less error-prone.

- **Heartbeat active-hour behavior (#1205)** implies users in resource-constrained environments (or those paying for compute) are surprised by background activity outside configured windows. This is an ongoing operational concern.

Overall satisfaction appears high — issues are being filed with preflight checks completed, and fixes are landing quickly.

---

## 8. Backlog Watch

- **[Issue #1202 — Format CI gate red on main](https://github.com/moltis-org/moltis/issues/1202)** — **Needs urgent attention.** The Format job is failing on main, which blocks all future merges or requires force-merges that bypass quality gates. No PR exists. A maintainer should either split the two oversized files or explicitly waive the limit with a tracked exception.

- **[Issue #1205 — Heartbeat ignores active hours](https://github.com/moltis-org/moltis/issues/1205)** — Filed by a core team member but unaddressed with zero comments. Given prior PRs are moving quickly, this should be triaged and assigned soon.

- **[PR #1204 — MiniMax Code agent](https://github.com/moltis-org/moltis/pull/1204)** — Open for a day with no reviewer. Given the project’s merge velocity, this needs active review to keep momentum.

No long-dormant issues (30+ days with no update) are visible in the current activity window, which indicates a healthy, well-maintained triage process.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-08-17

---

## 1. Today's Overview

CoPaw is in a **high-activity, bug-fixing sprint** mode today with 10 issues and 11 PRs updated in the last 24 hours. The project maintains a healthy **6:4 open-to-closed ratio** on issues and **9:2 open-to-merged** on PRs, indicating active community contribution and maintainer responsiveness. A notable cluster of work centers on the **CLI cron update bug (#7048)** which saw two competing PRs (#7064, #7055) submitted by different contributors—a sign of a well-scoped issue attracting community ownership. The most significant architectural advancement is the ongoing **provider unification PR (#6302)** which has been under review for nearly a month, suggesting maintainers are taking a careful, deliberate approach to large-scale refactoring. Overall, the project appears **healthy and responsive**, with a strong pipeline of community-driven fixes and a small but steady stream of feature requests reflecting real-world enterprise and game-dev use cases.

---

## 2. Releases

**No new releases today.**

The last release was `v2.1.0` (referenced in bug reports #7063, #7065). No RC or beta announcements are present in the current activity window.

---

## 3. Project Progress

**Merged/Closed PRs Today (2):**

1. **[PR #7064 (Closed) — fix(cli): sync top-level text on cron update --text for agent jobs](https://github.com/agentscope-ai/QwenPaw/pull/7064)** — First-time contributor `suantea` fixes Issue #7048 where `qwenpaw cron update --text` returned success but didn't actually update the prompt for agent-type jobs. The root cause was a mismatch: only `request.input[0].content[0].text` was updated, while the top-level `text` field (which `cron list`/`cron get` renders) kept its stale value.

2. **[PR #7055 (Closed) — fix(cli): sync top-level text on agent cron --text update (#7048)](https://github.com/agentscope-ai/QwenPaw/pull/7055)** — A second, independent fix for the same #7048 bug from contributor `lcq225`. This is a redundancy worth monitoring — the maintainers now have two solutions to reconcile or pick from.

**Key open PRs advancing major features (not yet merged):**
- **[PR #6302 — feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — A 4-week-old, large-scale architectural PR introducing catalog-driven provider models, runtime model discovery, capability-aware routing, and fallback support. This is the most structurally significant change in flight and is likely a major version bump candidate once merged.
- **[PR #6940 — feat(pawapp): add native DataPaw app runtime](https://github.com/agentscope-ai/QwenPaw/pull/6940)** — Adds a native desktop app runtime with a durable analysis workspace, positioned for data-science workflows.

---

## 4. Community Hot Topics

**Most active discussions today (by comment count):**

1. **[Issue #7063 (3 comments) — Agent crashes on every tool call (`TypeError` coroutine vs async-gen)](https://github.com/agentscope-ai/QwenPaw/issues/7063)** — Closed. A definitive bug: `_execute_tool_call` uses `async for` on a coroutine. High severity (crashes every tool call), confirmed and closed. The user also leaked a third-party dependency name ("agentscope") in the summary, which is worth noting from a brand/architecture standpoint.

2. **[Issue #7003 (3 comments) — Memory for QwenPaw agents: ViBo proposal, "97.5% fewer tokens"](https://github.com/agentscope-ai/QwenPaw/issues/7003)** — Closed (likely promoted or declined). A marketing-ish pitch from `vnbochkarev-netizen` referencing the project's 33,748 stars and proposing an external encrypted memory solution. Signals: users feel the **default no-memory behavior is a real cost burden** for production deployments.

3. **[Issue #7048 (2 comments) — `cron update --text` silently fails for agent jobs](https://github.com/agentscope-ai/QwenPaw/issues/7048)** — Closed via two PRs (#7064, #7055). The highest-signal operational bug of the day: **silent failure with rc=0**, the worst kind for automation trust.

**Underlying needs:** The community is (a) demanding **memory persistence** at scale (token-cost driven), (b) depending on **cron/reliability semantics** for production automation, and (c) pushing for **game-dev friendly tooling** (C#/shader support).

---

## 5. Bugs & Stability

**Ranked by severity:**

| Rank | Issue | Severity | Status | Notes |
|------|-------|----------|--------|-------|
| 1 | [#7063 — Crash on every tool call (`async for` on coroutine)](https://github.com/agentscope-ai/QwenPaw/issues/7063) | **Blocker** (consistent crash) | Closed | The `_acting()` method returns a coroutine but callers use `async for`. Critical runtime flaw; closed on 08-16, need to verify the fix commit. |
| 2 | [#7074 — UI "crash" requiring refresh, high frequency](https://github.com/agentscope-ai/QwenPaw/issues/7074) | **High** (frequent, user-facing) | Open | Windows, `session.py:454` state-loading error loop. Session state dict JSON may be corrupted or unreadable. No fix PR linked today. |
| 3 | [#7065 — Chat history truncated after ~7 rounds](https://github.com/agentscope-ai/QwenPaw/issues/7065) | **Medium-High** (data visibility) | Open | v2.1.0. User can't scroll to earlier messages. Likely virtualization or lazy-loading bug. No fix PR linked. |
| 4 | [#6471 — Cron misfire after long idle (APScheduler event loop)](https://github.com/agentscope-ai/QwenPaw/issues/6471) | **Medium** (automation reliability) | Open (since 07-26, updated 08-16) | AsyncIOScheduler on WSL2. Long-running event loop inactivity causes missed triggers. Needs maintainer attention (3 weeks old). |

**Fix PRs available today:**
- #7064 and #7055 both address cron-update-text bug (#7048) — resolved.
- [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071) fixes hardcoded 2MB video cap (Issue #7060).
- [#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070) fixes silent `view_video` failure on OpenAI Responses API (Issue #7059).
- [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) fixes broken image thumbnails on session reload (Issue #7051).
- [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) fixes OAuth2 refresh-token rotation persistence (Issue #7053).

---

## 6. Feature Requests & Roadmap Signals

**New requests today:**

1. **[#7052 — Plugin API `system_prompt` permission](https://github.com/agentscope-ai/QwenPaw/issues/7052)** — Corporate use case: hide company prompts from end-users in the chat UI. Signals **enterprise/white-label demand**. Moderate effort; likely if plugin security is a roadmap pillar.

2. **[#7068 — File viewer: C# and shader (.shader/.gdshader/.hlsl) support](https://github.com/agentscope-ai/QwenPaw/issues/7068)** — Game-dev workflow gap. Low-effort (language list addition), high-joy for Unity/Godot users. **Predict: likely in next minor version.**

3. **[#7062 — Per-agent / per-session `reasoning_effort` override](https://github.com/agentscope-ai/QwenPaw/issues/7062)** — Users want different models for quick-qa vs deep-research roles. This connects to the broader **provider/model-config unification in PR #6302** — if that merges, per-agent overrides may ride along. Watch this pairing.

4. **[#7073 — Skill name deduplication (workspace vs built-in)](https://github.com/agentscope-ai/QwenPaw/pull/7073)** — Prevents duplicate skill loading. Addressed via PR, not just an issue — signals roadmap absorption of skill-system hardening.

5. **[#7072 — Background chat task list API](https://github.com/agentscope-ai/QwenPaw/pull/7072)** — Multi-agent coordination needs a list endpoint for tasks. Introduced by `suantea` (first-timer), worth watching for maintainer pickup.

**Prediction for next version:** Expect a **v2.2.0** or **v3.0.0 (if #6302 merges)** that includes: (a) the provider unification layer, (b) cron update fixes, (c) the DataPaw desktop runtime, and (d) file-viewer language expansion.

---

## 7. User Feedback Summary

**Real pain points observed today:**

- **Silent config failures erode trust.** Issue #7048 (cron update returns OK but does nothing) and #7059 (video "loaded" but frames never sent) both show a pattern: **the tool says success, but nothing happened.** This is the #1 complaint class in today's data.
- **Context/cost anxiety is real.** The ViBo proposal (#7003) and the `reasoning_effort` request (#7062) both come from cost-conscious users who want to **tune memory and thinking depth per use-case** rather than pay for a one-size-fits-all model.
- **Enterprise white-labeling is an emerging requirement.** #7052 (hide system prompts from end-users) suggests the tool is being embedded in customer-facing products.
- **Game-dev workflows are being attempted.** #7068 indicates Unity/Godot developers are using CoPaw for shader and C# work — an early niche with growth potential (and clear UX gaps).
- **Data loss on history reload is a satisfaction killer.** #7065 and #7069 (broken thumbnails) both concern **losing view of past work**, which undermines confidence in long-running sessions.

**Sentiment:** Constructive, engaged, but **frustrated by silent failures and missing data visibility**. Users appreciate the ecosystem enough to file detailed reproduction steps (good sign), but the "rc=0 but nothing changed" class of bugs needs systemic fixes.

---

## 8. Backlog Watch

**Items requiring maintainer attention:**

- **[Issue #6471 — Cron misfire after long idle (closing in on 1 month old, updated 08-16)](https://github.com/agentscope-ai/QwenPaw/issues/6471)** — APScheduler `AsyncIOScheduler` silently stops triggering after long idle. This affects cron reliability at scale. No fix PR linked. **Should be escalated.**

- **[PR #6302 — Provider unification (4 weeks open, updated 08-16)](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — Blocking the biggest roadmap item. Needs a maintainer decision: merge, request changes, or split into smaller PRs. Community is waiting.

- **[PR #6940 — DataPaw app runtime (5 days, ready-for-human-review)](https://github.com/agentscope-ai/QwenPaw/pull/6940)** — Substantial new desktop runtime; needs a review assignment. If maintainers are stretched, this may linger.

- **[Issue #7052 — Plugin `system_prompt` security (2 days, 2 comments)](https://github.com/agentscope-ai/QwenPaw/issues/7052)** — Enterprise-relevant; no maintainer response yet. Even an "under consideration" label would close the loop.

- **Competing PRs #7064 vs #7055 for the same bug (#7048)** — Both closed today, which is odd: either one was merged under the hood or both were closed in favor of a maintainer-authored fix. Clarify which landed in the changelog to avoid contributor confusion.

---

*Data source: GitHub activity for agentscope-ai/CoPaw (via QwenPaw), window: 2026-08-16 to 2026-08-17.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-17

## 1. Today's Overview

ZeroClaw is in a **high-activity architecture expansion phase** with 48 issues and 50 PRs updated in the last 24 hours, driven heavily by RFC discussions and a multi-stage plugin security rollout. The project shows **very healthy community engagement** — the top 4 RFCs each have 13–23 comments, indicating deep collaborative design review rather than shallow bug reports. Maintainers are actively triaging a small but important cluster of parallel-runtime test flakiness issues (P1 severity) while the massive plugin egress policy work (PRs #9580, #9582, #9584, #9137) continues through its staged rollout. Only 2 issues and 4 PRs were closed/merged in this period, suggesting the project is in a holding pattern of review and refinement before a significant multi-feature merge wave. No new releases were cut today.

## 2. Releases

No new releases were published in this period.

## 3. Project Progress

Two PRs were closed today:

- **[#9580 (merged) — fix(security): harden built-in HTTP egress on the shared network guard](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)** — This is a **major security milestone**. It hardens the built-in HTTP egress boundary while extracting shared network-classification primitives into `zeroclaw-infra::net_guard` for reuse by the plugin egress work. This PR was a dependency for the larger plugin egress foundation (#9137), so its merge unblocks that chain.
- **[#9416 (closed) — docs(tools): document that AllToolsResult.tools is the pre-filter registry](https://github.com/zeroclaw-labs/zeroclaw/pull/9416)** — A smaller documentation fix clarifying the semantics of the `AllToolsResult.tools` field, resolving ambiguity with the "unfiltered" sibling field.

## 4. Community Hot Topics

The most active discussions reveal a **core tension between security hardening and architecture consolidation**:

- **[#6808 (23 comments) — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — Governance/process RFC in rollout. Ratified but still active. Community is deeply engaged in restructuring maintainer workflow.
- **[#8603 (22 comments) — RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — High demand for OpenAI-protocol compatibility to let existing tools (Open WebUI, LobeChat, Continue.dev, Aider, LangChain) use ZeroClaw. **Signals a strong ecosystem-integration pull**.
- **[#9488 (17 comments) — RFC: Unified attachment architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — Proposed, not yet accepted. Drafted with Codex, reflects desire to unify a fragmented attachment story across web/channels.
- **[#6954 (14 comments) — RFC: Internal agent turn provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** — Ratification-corrected and actively revised. Focused on cron/internal-sourced turns needing proper conversation identity and reply contracts.
- **[#6971 (14 comments) — RFC: Security posture & universal ingress policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** — A broad security posture RFC with demand for operator visibility into active controls.
- **[#6165 (14 comments) — RFC: Lighter core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — A push to **de-bloat the core**; paired with PR #9853 removing `aardvark-sys` and `zeroclaw-robot-kit` (zero reverse deps), this is actively being executed.

**Underlying need:** Users want ZeroClaw to be a composable, standards-compliant agent platform — with OpenAI-compatible APIs, lighter core, flexible channel attachments — while maintainers add security guardrails (egress policy, credential boundaries) to make that safe.

## 5. Bugs & Stability

Ranked by severity (P1 = highest):

| Issue | Component | Severity | Impact |
|-------|-----------|----------|--------|
| [#10013 — Edge TTS cancellation test flake](https://github.com/zeroclaw-labs/zeroclaw/issues/10013) | channel/tts | P1 (S1) | Intermittent CI failure; fake child not writing sidecar under parallel load. Accepted, but no fix PR yet. |
| [#10006 — endpoint_lock test flake](https://github.com/zeroclaw-labs/zeroclaw/issues/10006) | runtime/rpc | P1 | Failures on unrelated PRs block merges. **In progress**, no fix PR linked. |
| [#9811 — /health reports healthy never-connected channel](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | gateway/health | P1 | Telegram with bad token → daemon polls + gets 404, but `/health` lies. Accepted — **root cause and fix needed**. |
| [#9655 — Approval cards indistinguishable before tap](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) | agent/channel | P1 (S1) | Telegram: multiple pending cards look identical. Accepted; **UX-critical fix**. |
| [#9953 (closed) — SOP double-encoded output rejection](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) | runtime/sop | P2 (S2) | **Fixed and closed.** Schema validation now unwraps double-encoded JSON. |
| [#10037 — POST /api/cron silently stores invalid session_target](https://github.com/zeroclaw-labs/zeroclaw/issues/10037) | gateway/api | P2 (S2) | Silent data corruption; `cron_add` tool rejects but API doesn't. In progress. |
| [#10020 — Independent delegates ignore thinking policy](https://github.com/zeroclaw-labs/zeroclaw/issues/10020) | runtime/daemon | P2 (S2) | Agentic mode="independent" doesn't apply target's `thinking` config. In progress. |

**Pattern:** The most urgent bugs are **test flakiness under the parallel runtime gate** (3 of the P1s) rather than runtime user-facing failures — a sign that the codebase has good coverage but the CI harness itself needs hardening. Notably, the ETXTBSY fixture issue (#9965) and its sibling tasks (#10006, #10011) are all accepted and being methodically addressed.

## 6. Feature Requests & Roadmap Signals

Several large features are in flight and likely candidates for the **next minor release**:

1. **Plugin egress policy (stage 3 of ADR-013)** — PRs #9584, #9582, #9137. After #9580 merged, the chain to deny-by-default egress for WASM plugins is progressing. High-priority security feature.
2. **OpenAI Chat Completions compatibility (#8603)** — 22 comments, strong demand. If accepted, would let ZeroClaw be a drop-in backend for popular AI frontends.
3. **Hailo-Ollama native provider (#9109)** — PR open with `needs-author-action`; adds native edge-hardware support. Could be merged for a hardware-focused feature release.
4. **Per-user Telegram group sessions (#9772)** — 18 comments, fixes a real collaboration limitation for teams using shared group channels.

**Roadmap signals:** The "lighter core" RFC (#6165) is increasingly looking like a release goal — PR #9853 makes concrete progress by removing dead crates that block `crates.io` publishing (#9381).

## 7. User Feedback Summary

- **Collaboration frustration:** Telegram group chats force single shared session (`Sender` scope) — multiple users can't maintain distinct conversations in one chat. This is a **high-demand quality-of-life fix** (#9772).
- **Interop demand:** Users want to use ZeroClaw with standard OpenAI-protocol frontends, not just native WebSocket/channel interfaces (#8603). Desire to **reduce vendor lock-in for clients**.
- **Security anxiety:** Operator questions about actionable knowledge of active controls (credential boundaries, ring policy, sandboxing) are driving the RFC #6971.
- **Complexity complaints:** Users feel setup friction from static config for multi-agent workflows — the swarm RFC (#10025, filed yesterday) proposes an ephemeral TUI-based agent teams drive as a response to "config surgery" for simple use cases.
- **Health-check trust:** Users have lost trust in `/health` reporting for never-connected channels (#9811); this is a basic observability expectation being violated.

## 8. Backlog Watch

Issues/PRs that have been open long and need maintainer attention:

- **#6808 (created May 20) — Work Lanes RFC** — 23 comments, accepted, but rollout has been in progress for 3 months; status unclear.
- **#6165 (created April 27) — Lighter core RFC** — 14 comments, needs-maintainer-review. **Longest-open RFC** on the list; maintainer decision needed.
- **#8692 (created July 4) — Maintainer decision queue tracker** — An active tracker itself; a sign that RFCs may be piling up faster than maintainers can review.
- **PR #9126 (created July 18, `needs-author-action`) — Plugin config type validation** — Large (XL) security-relevant feature; pending 1 month.
- **PR #9212 (created July 20, `needs-author-action`) — CI replay regression gate** — Medium-size, would strengthen CI; pending ~1 month.
- **PR #9109 (created July 17, `needs-author-action`) — Hailo-Ollama** — Large feature; author needs to respond to review.

---

*Generated from ZeroClaw GitHub activity on 2026-08-17. ZeroClaw shows a healthy, security-first development cycle with active RFC debate, significant architectural investment in egress hardening, and a backlog being methodically addressed — though maintainer review bandwidth appears to be a current bottleneck.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*