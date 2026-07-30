# OpenClaw Ecosystem Digest 2026-07-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-30 02:31 UTC

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

# OpenClaw Project Digest — 2026-07-30

**Generated from GitHub activity data retrieved 2026-07-30**

---

## 1. Today's Overview

OpenClaw continues to exhibit extremely high community engagement and a heavy maintenance burden, with **500 issues** and **500 pull requests** updated in the last 24 hours. Of those issues, **447 remain open/active** and **53 were closed**. The PR pipeline shows **403 open PRs** versus **97 merged/closed**, reflecting a strong but potentially choked contribution review process. No new releases were published today, though significant stabilization work is visible across dozens of PRs targeting memory corruption, subagent lifecycle bugs, channel delivery reliability, and systemd recovery. The project's high-ticket count (many P1/P2 issues tagged with impact: message-loss, crash-loop, and session-state) suggests a sustained focus on hardening core runtime reliability over new feature velocity.

---

## 2. Releases

**No new releases today.** The last known stable release from the data is `2026.6.1` (reference in issue #90595), with several reported regressions against `2026.5.x` and `2026.6.x` still unresolved.

---

## 3. Project Progress

**Closed/Merged PRs today (97 total).** Notable highlights include:

- **#500** [CLOSED] `fix(agents): throw CompactionError when summarization fails` – wangmiao0668000666. Compaction runs that silently fell back to size-limit when all summarization attempts failed now throw a clear `CompactionError`.  
  [PR #115500](https://github.com/openclaw/openclaw/pull/115500)

- **#116172** [CLOSED] `fix(macos): prevent stale remote tunnel recreation` – vincentkoc. Prevents duplicate SSH tunnel creation after lifecycle switches on macOS Gateway connections.  
  [PR #116172](https://github.com/openclaw/openclaw/pull/116172)

- **#116076** [CLOSED] `fix(test): isolate ACP startup output stream` – vincentkoc. Fixes `MaxListenersExceededWarning` noise in ACP startup tests.  
  [PR #116076](https://github.com/openclaw/openclaw/pull/116076)

- **#115932** [CLOSED] `fix(agents): deny all tools when scheduled authority names a removed account` – yetval. Security fix preventing widened tool access when a channel account is revoked but scheduled automations still reference it.  
  [PR #115932](https://github.com/openclaw/openclaw/pull/115932)

- **#115500** [CLOSED] `fix(agents): throw CompactionError` – wangmiao0668000666. Real failure causes now surface instead of generic size-limit fallback.  
  [PR #115500](https://github.com/openclaw/openclaw/pull/115500)

Several other maintenance PRs closed include dependency bumps (#113927), test bounding (#115696), and isolated ACP output fixes (#116076).

---

## 4. Community Hot Topics

The most active conversations reveal deep frustration with core reliability issues, particularly around Codex integration, memory/caching, and subagent message delivery:

1. **#115326** — *"Crash-loop breaker suppresses Discord/WhatsApp permanently and documented recovery (channels.start) fails with WebSocket 1006"* (18 comments, 0 👍). A regression where the crash-loop breaker permanently disables channels and the documented recovery path fails, effectively bricking communication for those users.  
   [Issue #115326](https://github.com/openclaw/openclaw/issues/115326)

2. **#91009** — *"Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes and stalls gateway RPC"* (18 comments, 2 👍). Diamond-lobster severity: CPU-bound processes from Codex tool calls stalling the entire gateway.  
   [Issue #91009](https://github.com/openclaw/openclaw/issues/91009)

3. **#86996** — *"Active Memory + Codex app-server path causes long response latency, hook timeouts, startup aborts, and gateway event-loop stalls"* (15 comments, 2 👍). Memory integration with Codex causing cascading failures and timeouts. 9-week-old unresolved high-severity issue.  
   [Issue #86996](https://github.com/openclaw/openclaw/issues/86996)

4. **#91363** — *"Isolated cron consistently fails with 'LLM request failed' on model-call-started phase"* (10 comments, 6 👍). Highly upvoted: isolated cron jobs fail before even reaching the provider, regardless of timeout settings.  
   [Issue #91363](https://github.com/openclaw/openclaw/issues/91363)

5. **#115908** — *"Session transcript projection reconcile can livelock under sustained writes, blocking the main thread and stalling all channel transports"* (6 comments). A brand-new critical bug (opened 2026-07-29) causing complete stall of all channel transports under sustained write load.  
   [Issue #115908](https://github.com/openclaw/openclaw/issues/115908)

**Underlying need:** The community is urgently asking for **reliable message delivery**, **stable memory/cache performance**, and **graceful recovery paths**. Many top-voted issues involve "works sometimes, then permanently breaks" scenarios with no clear operator intervention path.

---

## 5. Bugs & Stability

### Critical/P0 Crash-Loop & Data-Loss Severity

| Issue | Summary | Severity | Fix PR? |
|-------|---------|----------|---------|
| #115908 | Transcript projection livelock blocking main thread | Crash-loop, message-loss | None yet |
| #115326 | Crash-loop breaker permanently suppresses Discord/WhatsApp | Crash-loop, permanent channel loss | None yet |
| #91009 | Codex hooks spawn CPU-bound processes stalling gateway | Crash-loop, message-loss | None yet |
| #89315 | Gateway heap grows unbounded, killed by cgroup OOM | Crash-loop | None yet |
| #91144 | Windows Scheduled Task doesn't stay running | Crash-loop | None yet |

### High-Severity (P1, message-loss, session-state)

| Issue | Summary | Impact | Fix PR? |
|-------|---------|--------|---------|
| #92433 | Subagent completion silently dropped when announce steers into ending run | Message loss | None yet |
| #90944 | `sessions_yield` resume reply not delivered — user gets child summary instead | Message loss | None yet (#108553 open) |
| #91456 | Telegram DM lane guarded after send timeout, dropping messages | Message loss | None yet |
| #89095 | Sub-agent timeout does not notify parent session | Message loss | None yet |
| #86214 | Codex app-server client closes mid-turn during image/tool requests | Message loss | None yet |
| #86034 | Media generation succeeds but completion delivery fails | Message loss | None (#110377 open) |
| #87756 | Prompt-launched Lobster workflow hangs on nested `/tools/invoke` | Crash-loop | None yet |
| #87327 | Isolated agent runs stall in runtime-plugins phase | Message loss | None yet |
| #97616 | Leaked child processes from hook/tool execution — zombie accumulation | Runtime degradation | None yet |
| #90692 | Thinking tags leak and truncation on heartbeat interrupt | Data corruption | None yet |
| #105528 | `exec`/`read` tools return empty output on Windows (regression) | Data loss | None yet |
| #112423 | Large SQLite transcript cleanup blocks gateway event loop | Crash-loop | None yet |

### Notable Regressions (marked as "Regression (worked before, now fails)")

- #115326 — Crash-loop breaker regression
- #89278 — Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout
- #87756 — Prompt-launched Lobster workflow hangs
- #90361 — `memory_search` "index metadata is missing" despite valid index
- #97616 — Zombie process accumulation (was working before)
- #105528 — `exec`/`read` empty output on Windows
- #90711 — `launchd` plist hardcodes stderr to `/dev/null` (5.28 regression)
- #88657 — DeepSeek V4 Flash incomplete turns (2026.5.27/28 regression)

---

## 6. Feature Requests & Roadmap Signals

**Highest interest features (by comments/reactions):**

1. **#81061** — *Hook: before_route_inbound_message — pre-routing interception for channel bridging/proxying* (8 comments, 3 👍). Still open for 80 days, needs product decision. Enables architecture patterns like channel-to-channel bridging.  
   [Issue #81061](https://github.com/openclaw/openclaw/issues/81061)

2. **#13219** — *Per-model usage logging for cost tracking* (7 comments, 1 👍). Persistent request (since Feb 2026) for native cost tracking per model.  
   [Issue #13219](https://github.com/openclaw/openclaw/issues/13219)

3. **#8299** — *Config option to suppress sub-agent announce* (7 comments, 1 👍). 5-month-old request: operators want control over sub-agent summary posts.  
   [Issue #8299](https://github.com/openclaw/openclaw/issues/8299)

4. **#88154** — *Slack Modal Support for Interactive Workflows* (7 comments, 1 👍). First-class Slack modal support for structured user input.  
   [Issue #88154](https://github.com/openclaw/openclaw/issues/88154)

5. **#43454** — *Gateway lifecycle hooks (onSubagentComplete, onToolCallThreshold, onTurnComplete)* (8 comments, 1 👍). Closed but relevant: workspace hooks at lifecycle points.  
   [Issue #43454](https://github.com/openclaw/openclaw/issues/43454)

6. **#85461** — *Capture image-generation provider usage metadata* (6 comments, 1 👍). Better observability for image generation cost.  
   [Issue #85461](https://github.com/openclaw/openclaw/issues/85461)

**Likelihood for next release:** Given the heavy P1/P2 bug burden and the 97 closed PRs today, the next release is likely to be a **stability-focused hotfix release** rather than feature-dense. Features like **#81061** (pre-routing hooks) and **#8299** (sub-agent announce suppression) have linked PRs and product-decision tags, suggesting they could make a minor release soon. The **per-model cost tracking** (#13219) remains low-priority (P2, stale) and unlikely in next release.

---

## 7. User Feedback Summary

**Pain Points (high-frequency complaints):**

- **"Recovery doesn't work"** — Multiple issues (#115326, #98435, #86996) describe recovery paths that fail, making crash events permanent and requiring manual intervention.
- **"Random message loss"** — A recurring theme: messages that are processed correctly but never delivered (#92433, #90944, #86034, #89095). Particularly painful for production deployments.
- **"Regressions after upgrades"** — Several issues marked as "regression" indicate that cutting-edge releases (2026.6.x) introduced new bugs that didn't exist in 2026.5.x or earlier.
- **"Memory/cache performance collapse"** — Users report 99.9%→22% cache hit rate drop (#91223), unbounded memory growth (#89315), and `memory_search` timeouts (#92633).
- **"No operator visibility"** — Complaints about crash-loop breaker suppressing channels with no alerting, cron failures without clear diagnostics, and zombie processes accumulating silently.

**Satisfaction Signals:**

- Active community engagement with 500+ items updated daily shows high adoption despite bugs.
- Several PRs from community contributors (yetval, vincentkoc, wangmiao0668000666) suggest a healthy contributor pipeline.
- Closed PRs today show maintainers actively merging fixes for signal channel issues, macOS tunnel problems, and compaction error handling.

---

## 8. Backlog Watch

**High-Severity Issues Without Recent Maintainer Action (stale or needs-review >30 days):**

1. **#86996** — *Active Memory + Codex app-server path causing gateway stalls* (65 days open, P1, diamond lobster, needs maintainer review, recovery stuck). Multiple users affected, remains unassigned.  
   [Issue #86996](https://github.com/openclaw/openclaw/issues/86996)

2. **#86063** — *Anthropic 1h cache invalidates conversation prefix every turn* (67 days open, P2, diamond lobster). Two independent mechanisms both invalidating cache — significant cost impact for Anthropic users.  
   [Issue #86063](https://github.com/openclaw/openclaw/issues/86063)

3. **#86215** — *Codex OAuth refresh failures wedge agent for hours without alerting* (67 days open, P1, platinum hermit, needs live repro). Silently degrades agents with no operator notification.  
   [Issue #86215](https://github.com/openclaw/openclaw/issues/86215)

4. **#883** — *Feature: Gateway lifecycle hooks* (140+ days open, closed but stale). Feature request with linked PRs that never merged.  
   [Issue #43454](https://github.com/openclaw/openclaw/issues/43454)

5. **#81061** — *before_route_inbound_message hook* (79 days open, P2, diamond lobster). Stale with linked PR open, awaiting product decision.  
   [Issue #81061](https://github.com/openclaw/openclaw/issues/81061)

6. **#8299** — *Config option to suppress sub-agent announce* (177 days open, P2). Longest-stale feature request with maintainer attention needed.  
   [Issue #8299](https://github.com/openclaw/openclaw/issues/8299)

7. **#69086** — *attempt-execution: scope session-history guard and expose retry-prompt hook* (102 days open, P2, diamond lobster). Needs maintainer review for a production-crippling retry logic bug.  
   [Issue #69086](https://github.com/openclaw/openclaw/issues/69086)

**PRs Stuck in Review (open >30 days with needs-proof or waiting-on-author):**

- **#82572** — *feat(queue): persist followup queues across gateway restarts* (75 days open, P1, needs proof). Critical for message durability across restarts.  
   [PR #82572](https://github.com/openclaw/openclaw/pull/82572)

- **#95847** — *fix(subagents): credit requester-consumed descendant completions* (38 days open, P1, needs proof). Fixes subagent lifecycle accounting gap.  
   [PR #95847](https://github.com/openclaw/openclaw/pull/95847)

- **#110633** — *fix(agents): stop runs at critical tool-loop threshold* (12 days open, P1, needs proof). Prevents infinite token consumption.  
   [PR #110633](https://github.com/openclaw/openclaw/pull/110633)

---

### Project Health Summary

| Metric | Value | Assessment |
|--------|-------|------------|
| Open Issues | 447 of 500 active | Red — very high open bug count |
| Open PRs | 403 of 500 open | Yellow — high review burden |
| Merged/Closed PRs today | 97 | Green — active merging |
| P0/P1 unresolved | ~30+ | Red — many critical bugs unaddressed |
| Stale high-severity items | 7+ | Yellow — risk of community frustration |
| New releases | 0 | Yellow — no recent stabilization release |

**Overall assessment:** OpenClaw is highly active but **stressed** — the community reports severe production issues daily, and the maintainer team is actively merging fixes but the backlog of high-severity issues (especially around Codex integration, memory systems, and crash recovery) remains large. The project needs a **stabilization release** to address the most common P1 regressions before continuing feature work.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Period:** 2026-07-30 | **Projects Analyzed:** 11 active projects

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **divergent maturity trajectories**. The core reference implementation (OpenClaw) sustains massive community throughput (500+ daily updates) but struggles with reliability debt, while mid-tier projects like NanoBot, CoPaw, and ZeroClaw demonstrate productive stabilization cycles with focused feature delivery. A long tail of smaller projects (TinyClaw, ZeptoClaw) shows no recent activity, indicating consolidation around a few dominant architectures. Across the ecosystem, three shared pain points are driving development: **production-grade reliability** (message delivery guarantees, crash recovery), **multi-provider resilience** (automatic failover, quota management), and **cross-agent interoperability** (MCP, A2A protocols). The gap between enthusiastic adoption and production readiness remains the defining challenge.

---

## 2. Activity Comparison

| Project | Issues (Open/Total) | PRs (Open/Total) | Merged/Closed Today | Release Status | Health Score |
|---------|---------------------|------------------|---------------------|----------------|--------------|
| **OpenClaw** | 447/500 | 403/500 | 97 merged | Last: 2026.6.1 | 🟡 Stressed |
| **NanoBot** | ~5/5 | 17/34 | 17 merged | None today | 🟢 Productive |
| **Hermes Agent** | 31/50 | 36/50 | 14 merged | Last: unknown | 🟡 Bug-bash |
| **PicoClaw** | 1/1 | 2/2 | 0 merged | v0.3.1 | 🟢 Quiet |
| **NanoClaw** | 1/1 | 3/9 | 6 merged | None today | 🟢 Healthy |
| **NullClaw** | 1/1 | 2/4 | 2 merged | None today | 🟢 Steady |
| **IronClaw** | ~22/50 | 38/50 | 12 merged | None today | 🟡 Intensive |
| **LobsterAI** | 0/0 | ~3/7 | 13 merged | None today | 🟢 High-velocity |
| **TinyClaw** | N/A | N/A | N/A | N/A | ⚫ Inactive |
| **Moltis** | 0/0 | 3/5 | 2 merged | None today | 🟢 Steady |
| **CoPaw** | 20/27 | 31/47 | 16 merged | v2.0.1 | 🟢 Active |
| **ZeptoClaw** | N/A | N/A | N/A | N/A | ⚫ Inactive |
| **ZeroClaw** | 40/50 | 43/50 | 7 merged | v0.8.2 | 🟡 Intensive |

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Unmatched community scale**: 500 daily updates vs. median ~30 for peers — 16x more active issue/PR traffic than the next busiest project (CoPaw/ZeroClaw)
- **Contributor pipeline**: 3 unique community authors merged PRs today (yetval, vincentkoc, wangmiao0668000666) vs. 0-2 in other projects
- **Feature surface area**: Only project with built-in channel bridges (Discord, WhatsApp, Telegram), Codex app-server integration, and Active Memory — breadth unmatched by any peer

**Technical approach differences:**
- **Granular lifecycle model**: Subagent/session management with compaction, crash-loop breakers, and channel-level recovery — more complex state machine than NanoBot's simpler cron-based architecture
- **Heavier runtime**: Processes run as persistent services with systemd integration, vs. NanoClaw/CoPaw's containerized deployments or IronClaw's WebSocket-centric design
- **Monolithic core**: Centralized gateway vs. ZeroClaw's plugin/runtime separation; higher maintenance burden but tighter integration

**Community size comparison:**
- **Issues**: OpenClaw (447) > Hermes (31) > CoPaw (20) — **14x more open issues** than the next busiest project
- **PR velocity**: 97 merges today vs. next highest (NanoBot, 17) — **5.7x more throughput**
- **Risk**: The 403 open PRs represent a 4:1 ratio of open-to-merged — review bottleneck is 2-3x worse than peers (NanoBot: 2:1, ZeroClaw: 6:1)

---

## 4. Shared Technical Focus Areas

| Need | Projects Affected | Specific Requirements |
|------|-------------------|-----------------------|
| **Message delivery guarantees** | OpenClaw, NanoBot, NullClaw, CoPaw, ZeroClaw | Subagent completion drops, cron output loss, MCP timeout fixes, session recovery |
| **Multi-provider fallback** | NanoClaw, IronClaw, ZeroClaw | Claude→Codex auto-failover, Gemini OAuth fixes, token quota management |
| **Cross-agent protocols** | Moltis, ZeroClaw, CoPaw | A2A outbound client, MCP session recovery, ACP stdio exposure |
| **Session persistence & recovery** | OpenClaw, Hermes, CoPaw, PicoClaw | Crash-loop breaker resets, state.db corruption on non-Linux FS, flash crash history loss |
| **Structured context management** | ZeroClaw, Hermes, NanoClaw | Memory/compression architecture RFCs, conversation vs. curated memory separation |
| **Desktop/Web UI reliability** | Hermes, IronClaw, CoPaw | Windows updater false positives, High CPU on Wayland, Edge optimization |
| **Windows platform compatibility** | Hermes, CoPaw, NullClaw, ZeroClaw | Windows NSIS installer infinite loop, PowerShell 5.1 encoding, verbatim path prefixes |
| **Observability & cost tracking** | OpenClaw, ZeroClaw, Hermes | OTel cross-turn correlation, per-model usage logging, Semgrep PR comments |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | CoPaw | ZeroClaw | IronClaw |
|-----------|----------|---------|-------|----------|----------|
| **Target User** | Power users, production deployers | Developers, automation users | Chinese-market consumers | Enterprise, multi-agent ops | QA/security engineers |
| **Primary Architecture** | Monolithic gateway + service daemon | Python web app + WebUI | Desktop app + Electron | Plugin runtime + SOP adapters | Rust Reborn + WebSocket |
| **Channel Strategy** | 8+ native channels (Discord, Telegram, WhatsApp, etc.) | Telegram, WebUI | Feishu, QQ, DingTalk, Web | Email, Telegram, Web, MCP | WebUI-centric, Codex integration |
| **Memory Approach** | Active Memory + compaction + Codex | Session-based with consolidation | Checkpoint workspace (Git-based) | RFC phase: separating conversation/curated | Not yet addressed in data |
| **Community Model** | Open, high-friction review | Closed cores, active contributors | Chinese-first, global ambitions | RFC-heavy, design-by-proposal | Bug-bash sprint, QA-driven |
| **Differentiator** | **Broadest integration surface** | **Fastest bug-fix cycle** (hours) | **Best Chinese ecosystem support** | **Most formal architecture process** | **Highest test coverage rigor** |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (productive bug-bash)**
- **IronClaw**: 50 issues/50 PRs updated, 12 merged — clearly in a stabilization sprint toward release candidate
- **ZeroClaw**: 50 issues/50 PRs updated, 7 merged — intense RFC design phase, architecture consolidation
- **LobsterAI**: 13 PRs merged today — highest feature velocity relative to team size, new release branch created

**Tier 2 — Stable Growth (balanced feature/bug work)**
- **NanoBot**: 34 PRs updated, 17 merged — healthy contributor pipeline, quick triage cycles
- **CoPaw**: 47 PRs updated, 16 merged — strong community engagement, active first-time contributor onboarding
- **NanoClaw**: 9 PRs updated, 6 merged — production-tested features (dual-engine fallback), steady integration

**Tier 3 — Low Activity (maintenance phase)**
- **PicoClaw**, **NullClaw**, **Moltis**: 1-5 daily updates, 0-2 merges — either stable or resource-constrained
- **Hermes Agent**: 50 items updated but 31 issues open — high maintenance burden, burning down backlog

**Tier 4 — Dormant**
- **TinyClaw**, **ZeptoClaw**: Zero activity — consider archived or inactive

---

## 7. Trend Signals

**1. Multi-provider resilience is becoming table stakes**
All projects targeting production use (OpenClaw, NanoClaw, ZeroClaw, IronClaw) are investing in automatic provider failover, quota exhaustion warnings, and credential pool management. The era of single-provider agents is ending.

**2. Cross-agent protocols are the next frontier**
Moltis (ACP stdio), ZeroClaw (A2A outbound client), and CoPaw (MCP depth) are racing to standardize agent-to-agent communication. Expect a de facto standard to emerge within 3-6 months — likely A2A given ZeroClaw's formal RFC process and Google/Convivial backing.

**3. OpenClaw's bottleneck is a warning for the ecosystem**
447 open issues and 403 open PRs at a 4:1 ratio is unsustainable. The core reference project is signaling that **monolithic architecture + open contribution + insufficient maintainer bandwidth** creates a reliability crisis. Successors (NanoClaw, ZeroClaw) are deliberately choosing plugin/runtime separation and RFC-driven design to avoid this trap.

**4. Windows and macOS are second-class citizens**
State.db corruption on APFS/ZFS (Hermes), Windows updater bugs (Hermes, CoPaw), PowerShell encoding (NanoBot), and verbatim path prefixes (ZeroClaw) reveal Linux-first development. Cross-platform compatibility is a top pain point but not a priority investment — signaling that Linux deployments dominate production use.

**5. Memory is the unresolved architecture**
OpenClaw (Active Memory), ZeroClaw (RFC #9048 on conversation vs. curated memory), and Hermes (cache invalidation bugs) are all struggling with memory as a system design problem. No project has a clean solution — expect this to be the defining technical challenge of 2027 for AI agent infrastructure.

**6. Community frustration with regression cycles**
Multiple projects (OpenClaw, CoPaw, Hermes) have re-opened previously fixed bugs, indicating insufficient test coverage or architectural fragility. IronClaw's WS11 coverage enforcement (85.11% aggregate, per-crate floors) represents the most mature response — expect other projects to follow with CI coverage ratchets.

**7. Ecosystem consolidation toward 3-5 dominant forks**
With TinyClaw and ZeptoClaw inactive, and PicoClaw/NullClaw showing minimal activity, the ecosystem is naturally consolidating around OpenClaw (reference), NanoBot (developer UX), CoPaw (Chinese market), and ZeroClaw (enterprise architecture). New developers should evaluate these four before considering smaller alternatives.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-30

## 1. Today's Overview

The NanoBot project showed **high development velocity** today with 34 PRs updated in the last 24 hours (19 merged/closed) and 5 Issues updated. The maintainer team is **intensely focused on stability and polish**, closing out regressions in the WebUI, session consolidation, PowerShell encoding, and type safety infrastructure. Community engagement remains steady with several open feature proposals awaiting review, particularly around multi-agent collaboration and durable goal planning. The project appears to be in a **rapid iteration phase** following recent feature releases, prioritizing bug fixes and architectural hardening.

## 2. Releases

**No new releases today.** The project has no new release tags to report.

## 3. Project Progress

### Merged/Closed PRs (17 of 34 updated PRs were closed today)

**Stability & Bug Fixes:**
- **[#5164]** `fix(webui): prevent redundant thread and media reloads` – Treats hidden system-command completion as metadata-only, stops model switches from hydrating threads, and cancels superseded thread requests
- **[#5165]** `fix(webui): avoid false microphone silence errors` – Prevents silent MediaRecorder output from being sent to transcription when only waveform samples are silent
- **[#5160]** `fix(shell): preserve UTF-8 native input on PowerShell 5` – Configures `$OutputEncoding` on Windows PowerShell 5.1 to fix corrupted non-ASCII pipeline input
- **[#5162]** `feat(webui): track optimistic message delivery status` – Adds `sending`, `accepted`, and `failed` states for user messages with inline failure UI

**Type System & Quality Infrastructure:**
- **[#5158]** `refactor: enforce BasedPyright strict type checking` – A **major infrastructure milestone**: all 273 Python modules are now strict-clean with BasedPyright on Python 3.11

**Other Merged:**
- **[#5118]** Bug fix for session consolidation dropping media paths (closed with fix in #5139)
- **[#5159]** Bug fix for Windows PowerShell 5.1 non-ASCII input corruption

## 4. Community Hot Topics

### Most Active Discussion

**[#5000 – Enhancement: Multi-Agent Collaboration Proposal](https://github.com/HKUDS/nanobot/issues/5000)**
*Comments: 6 | Author: bingqilinweimaotai | Open since: 2026-07-20*

This is the **most commented and strategically significant open discussion**. The proposal argues that the current subagent system is merely "background task delegation" rather than genuine multi-agent collaboration. Key gaps identified:
- Subagents lack persistent identities
- No shared task state exists between agents
- Subagents cannot observe or coordinate with each other

**Analysis:** This reflects a deeper community desire for **agent-to-agent communication patterns**, which would enable complex workflows like chain-of-thought delegation, consensus-based decision making, and parallel goal decomposition.

### Notable Long-Running Feature PRs

- **[#5034] feat(goal): add durable state-graph planning and recovery** – Open 8 days, 0 comments, but represents a significant architectural enhancement for long-running goals
- **[#4919] feat(telegram): support custom Bot API base URL** – Open 16 days, 0 comments, pending maintainer review

## 5. Bugs & Stability

### High-Severity (Fix PR Exists or In Review)

| Issue | Description | Fix PR | Status |
|-------|-------------|--------|--------|
| [#5163](https://github.com/HKUDS/nanobot/issues/5163) | Manual cron runs lose completion state when WebUI polling reloads store | _Filed today_ | 🔴 Unresolved, no fix PR yet |
| [#5118](https://github.com/HKUDS/nanobot/issues/5118) | Session consolidation drops uploaded media paths – files unrecoverable after archive | [#5139](https://github.com/HKUDS/nanobot/pull/5139) | ✅ Closed, fix pending merge |
| [#5159](https://github.com/HKUDS/nanobot/issues/5159) | Windows PowerShell 5.1 corrupts non-ASCII pipeline input | [#5160](https://github.com/HKUDS/nanobot/pull/5160) | ✅ Closed, fix merged |

### Medium-Severity (Open or In Progress)

- **[#5167]** `fix(session): preserve history during idle compaction` – Open PR, prevents data loss when auto-compaction runs on idle sessions
- **[#5151]** `fix(agent): release idle session locks` – Open PR, prevents memory leak from retained session locks
- **[#5150]** `fix(exec): bound buffered session output` – Open PR, prevents unbounded memory growth from exec session output

### Severity Assessment

The **most critical unresolved bug** is **#5163** (cron completion state loss) because it causes **silent data loss** – jobs execute successfully but status remains "Failed" in both `jobs.json` and the WebUI. No fix PR exists yet, making this the highest-priority stability concern.

## 6. Feature Requests & Roadmap Signals

### Strong Likelihood for Next Release

1. **Durable State-Graph Planning** ([#5034](https://github.com/HKUDS/nanobot/pull/5034)) – Adds structured execution plans with dependency tracking and recovery paths for long-running `/goal` flows. Has been open 8 days, likely to be reviewed soon given the author's activity.

2. **Multi-Agent Collaboration** ([#5000](https://github.com/HKUDS/nanobot/issues/5000)) – The most strategically important roadmap item. The community wants agents that can **observe each other's state, share context, and coordinate** rather than just delegate sub-tasks. Expect a design document or RFC in 1-2 releases.

3. **Skill Marketplaces** ([#5116](https://github.com/HKUDS/nanobot/pull/5116)) – Already merged today. Enables Discover view with skills.sh and SkillHub search, trending lists, and one-click install. This signals **NanoBot's move toward an app-store ecosystem**.

4. **Custom Telegram Bot API** ([#4919](https://github.com/HKUDS/nanobot/pull/4919)) – Self-hosted Bot API support has been waiting 16 days. Given Telegram's popularity in self-hosted deployments, expect this to land soon.

### Emerging Predictions

- **Type safety culture** – The BasedPyright strict mode (#5158) suggests the team is prioritizing **compile-time correctness**. Future contributions will require strict type annotations.
- **Optimistic UI patterns** – The merged message delivery status tracking (#5162) signals a UX push toward **real-time feedback** rather than silent background operations.

## 7. User Feedback Summary

### Pain Points

- **Windows PowerShell 5.1 encoding** – Multiple users reported corrupted non-ASCII input on Windows. This was a **GitHub-only reproduceable bug** affecting international users. Fix merged today.
- **Session consolidation data loss** – Users who archived sessions lost uploaded media permanently. The fix in #5139 addresses this but highlights a **systemic fragility** in how message state is persisted across storage layers.
- **Silent Telegram polling stalls** – Production users observed the bot permanently stopping message receipt with zero log output after transient network blips. PR #5156 is open but unmerged.

### Use Cases Highlighted

- **Production monitoring/cron automation** – Users are clearly running NanoBot in production-grade automation scenarios (evidenced by cron bugs and Telegram polling issues)
- **International/UTF-8 environments** – Non-English users are actively encountering encoding edge cases
- **Long-running goals** – The goal-planning feature (#5034) indicates users want NanoBot for **multi-hour or multi-day tasks** that survive conversation compaction

### Satisfaction Signals

- Active community contributions from **10+ unique authors** in the last 24 hours (chengyongru, yu-xin-c, Re-bin, QQQ300kuai, santhreal, woaiwang, KDB-Wind, ZhouJ-sh, syphrpunk, axelray-dev)
- Quick triage cycle – Bugs filed on 2026-07-29 (e.g., #5159, #5163) received PRs within hours

## 8. Backlog Watch

### Critical Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) – Multi-agent collaboration proposal | 10 days | **Highest strategic value**. No maintainer response yet. Community is waiting for direction on whether this is accepted or needs revision. |
| [#5034](https://github.com/HKUDS/nanobot/pull/5034) – Durable goal planning | 8 days | Large architectural change (state-graph planning). Needs review to avoid merge conflicts with other session changes. |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) – Custom Telegram Bot API | 16 days | **Longest open feature PR**. Community contribution with no comments. Risk of stalemate. |
| [#5094](https://github.com/HKUDS/nanobot/pull/5094) – Canonical OpenRouter app URL | 4 days | Low complexity but involves external partner attribution. Needs sign-off. |

### Stale Issues with Community Impact

- **[#4812](https://github.com/HKUDS/nanobot/pull/4812) – Malformed message KeyError in MemoryStore** – Open 24 days. A straightforward defensive-coding fix for a crash on malformed history entries. The long review cycle for such a simple fix may frustrate first-time contributors.

### Recommendation

The maintainers should **prioritize reviewing** #5000 (multi-agent) and #5034 (goal planning) within the next 72 hours, as both represent major roadmap decisions that other contributors' work may depend upon. The stale #4812 fix should be merged or commented on within the week to avoid contributor attrition.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the GitHub activity data for Hermes Agent (NousResearch/hermes-agent) covering the period up to 2026-07-30, here is the structured project digest.

---

### Hermes Agent Project Digest — 2026-07-30

### 1. Today's Overview

Today marks a period of **very high, focused maintenance activity**. With 50 issues and 50 PRs updated in the last 24 hours, the project is in a state of intense bug fixing and stability hardening. The majority of closed issues were bugs (e.g., #73939, #73771, #73109), and a significant portion of new PRs address critical P1 bugs related to authentication, session state, and data integrity. The 14 merged/closed PRs today show active progress, but the high volume of open issues (31) and PRs (36) indicates a backlog under active siege. There are no new releases, suggesting the team is consolidating fixes for a future patch.

### 2. Releases

**None.** No new releases were recorded today.

### 3. Project Progress

Today saw 14 PRs merged or closed, reflecting progress in several key areas:

- **Delegation & Worker Approval:** The long-running fix for worker approval callbacks in gateways was finalized with PRs [#65325](https://github.com/NousResearch/hermes-agent/pull/65325) and [#65415](https://github.com/NousResearch/hermes-agent/pull/65415).
- **Desktop & Kanban Stability:** A critical fix for the Desktop UI normalizing subagent statuses (PR [#73859](https://github.com/NousResearch/hermes-agent/pull/73859)) and a fix for the Kanban scheduled task retry logic (PR [#61817](https://github.com/NousResearch/hermes-agent/pull/61817)) were merged.
- **Documentation & Configuration:** Documentation was updated in PR [#65131](https://github.com/NousResearch/hermes-agent/pull/65131) to clarify the scope of the `max_tokens` configuration.
- **Test Isolation:** Multiple PRs (e.g., [#65276](https://github.com/NousResearch/hermes-agent/pull/65276)) were merged to improve test isolation, a recurring theme in the project's recent history.

### 4. Community Hot Topics

The most active discussions this period reveal deep-seated architectural pain points:

- **State.db Corruption on Non-Linux FS:** The most commented issue this week is a cluster of bugs around SQLite database corruption on **macOS (APFS/virtiofs)** and **ZFS**. Issue [#69551](https://github.com/NousResearch/hermes-agent/issues/69551) (12 comments) and the closed [#68545](https://github.com/NousResearch/hermes-agent/issues/68545) (6 comments) are the highest-traffic items. **Underlying need:** A cry for a cross-platform, robust filesystem abstraction that goes beyond the current Linux-centric WAL/`checkpoint_fullfsync` assumptions.
- **Rate Limiting & Credential Reliability:** Issue [#7489](https://github.com/NousResearch/hermes-agent/issues/7489) (5 👍, 6 comments) about RPM-based pre-emptive throttling is the most upvoted open issue. Combined with [#44799](https://github.com/NousResearch/hermes-agent/issues/44799) on OAuth refresh chain exhaustion, the community is clearly demanding more intelligent credential pool management that can handle multi-day provider quotas gracefully.

### 5. Bugs & Stability

Today’s reports focus on **P1/P2 regressions and platform-specific failures**:

- **[P1] Credential Pool Write-Through Regression:** Issue [#74339](https://github.com/NousResearch/hermes-agent/issues/74339) reports that a recent fix (#48415/#43589) for credential sync now **disables itself after the first refresh per profile** due to an unconditional state save. A fix PR [#74542](https://github.com/NousResearch/hermes-agent/pull/74542) has already been opened by the community.
- **[P1] Platform Disconnection Bug:** Issue [#74494](https://github.com/NousResearch/hermes-agent/issues/74494) reveals a critical bug where the gateway drops a platform (e.g., Telegram) after a retryable fatal error because the disconnect process cancels the handler task. No fix PR exists yet.
- **[P1] Windows Desktop Updater Falsely Detects Running Processes:** Issue [#74267](https://github.com/NousResearch/hermes-agent/issues/74267) blocks Windows users from updating due to a false positive lock check. This is a high-severity blocker for Windows users.
- **[P1] Distribution Payload Not Constrained by Ownership:** Issue [#74373](https://github.com/NousResearch/hermes-agent/issues/74373) is a potential security/stability concern where profile distribution copies can overwrite files even if the user is not listed as an owner.
- **[P2] Order-Dependent SQLite Clamping:** PR [#74541](https://github.com/NousResearch/hermes-agent/pull/74541) fixes a P2 bug where negative `limit` values in session API routes bypassed page-size limits, leading to potential unbounded data reads.

### 6. Feature Requests & Roadmap Signals

- **A Tiered Delegation Model:** Issue [#71727](https://github.com/NousResearch/hermes-agent/issues/71727) proposes "named delegation profiles" to allow users to define coherent model/endpoint pairs, preventing misconfiguration in multi-model workflows. This is a strong candidate for the next minor release.
- **A Global PR Dashboard:** Issue [#62352](https://github.com/NousResearch/hermes-agent/issues/62352) requests a GitHub Pull Requests dashboard for the Desktop app. This is a popular quality-of-life feature that would integrate Hermes with a core developer workflow.
- **Off-the-Shelf RPM Throttling:** Issue [#7489](https://github.com/NousResearch/hermes-agent/issues/7489), the most upvoted feature, seeks to implement a client-side RPM limiter using provider headers. This is a mature, well-understood problem and could be implemented quickly.
- **Granular Codex Turn Termination Data:** Issue [#73939](https://github.com/NousResearch/hermes-agent/issues/73939) requests richer metadata in agent lifecycle hooks. This signals a user community building custom monitoring/analytics on top of Hermes.

### 7. User Feedback Summary

- **Stability is the dominant pain point.** The cluster of db corruption issues on macOS and ZFS is the loudest signal. Users on these platforms are experiencing session-breaking failures.
- **Desktop users are frustrated.** Issues with the updater on Windows ([#74267](https://github.com/NousResearch/hermes-agent/issues/74267)) and profile switcher failures on macOS ([#70679](https://github.com/NousResearch/hermes-agent/issues/70679)) show that the Desktop client, while advanced, has platform-specific rough edges.
- **Power-users want more control.** Requests for configurable `journal_mode` ([#57820](https://github.com/NousResearch/hermes-agent/issues/57820)) and RPM throttling ([#7489](https://github.com/NousResearch/hermes-agent/issues/7489)) show that users are willing to configure the system for optimal performance, but the current defaults are failing them.
- **Test quality is a concern.** A recurring theme in closed issues is "tests that fail on customer machines but pass in CI," leading to false confidence. Users are acting as a secondary test suite, which is unsustainable.

### 8. Backlog Watch

- **Multiple Desktop & Update Backlog Items:** Issues for the Desktop on Windows ([#62792](https://github.com/NousResearch/hermes-agent/issues/62792)), macOS ([#48158](https://github.com/NousResearch/hermes-agent/issues/48158)), and the global remote profile switcher bug ([#70679](https://github.com/NousResearch/hermes-agent/issues/70679)) have been sitting for weeks without a fix. They represent a growing technical debt in the desktop client.
- **The Stale `voice_server` Gateway (PR #27040):** This large feature PR (for a generic voice platform) has been open since May 2026. It has been updated today but remains unmerged, suggesting it is a complex, long-term initiative with no clear immediate priority.
- **Order-Dependent Vision Test Flake (Issue #61597):** This bug (vision tests failing order-dependently) has been reported since early July and is still open. It is a classic sign of a "test smell" that can mask regressions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-30

**Source:** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Analysis Date:** 2026-07-30

---

## 1. Today's Overview

PicoClaw shows **low activity** over the last 24 hours, with only 1 issue updated and 2 pull requests (none merged or closed). No new releases were published. The single open issue reports a **moderate-severity bug** in dispatch-rule-based chat routing, affecting session auto-compression and `/clear` commands. Two long-standing PRs remain open: a DingTalk image message feature (#3283) and a build infrastructure migration (#1951), both stale with no recent commits. The project appears to be in a quiet maintenance phase with no active feature integration.

---

## 2. Releases

**No new releases** in the last 24 hours.  
The latest stable release remains **PicoClaw v0.3.1** (2cf030d2), which is referenced in the reported bug.

---

## 3. Project Progress

**No PRs were merged or closed today.**  
- **PR #1951** (opened March 24, 2026) and **PR #3283** (opened July 22, 2026) remain open, both updated recently but with no new commits.
- No feature advancements or fixes were integrated.

---

## 4. Community Hot Topics

**Most Active Issue:**  
- **#3301** [OPEN] — `/clear` and session auto-compression don't work in chats routed to non-default agent via dispatch rules  
  Author: j-v | Updated: 2026-07-29 | Comments: 0 | 👍: 0  
  [Issue Link](https://github.com/sipeed/picoclaw/issues/3301)  
  **Analysis:** This is the only issue currently active. It highlights a functional gap in multi-agent dispatch workflows — users running non-default agents cannot clear or auto-compress chat sessions. The absence of comments suggests the issue has not yet been triaged or discussed by the community. The underlying need is **reliable session management across dispatch routes**, which is critical for production deployments using multi-agent or routing logic.

**Most Active PRs:**  
- **#3283** [OPEN] — fix(dingtalk): support picture/image message inbound  
  Author: MrTreasure | Updated: 2026-07-29 | Comments: undefined | 👍: 0  
  [PR Link](https://github.com/sipeed/picoclaw/pull/3283)  
  **Analysis:** This PR adds image message support for the DingTalk channel, with token caching and graceful degradation. It has been open for 8 days without review or merge, indicating maintainer bandwidth may be constrained.

- **#1951** [OPEN] — chore: move installation scripts from docs repo to here  
  Author: lc6464 | Updated: 2026-07-29 | Comments: undefined | 👍: 0  
  [PR Link](https://github.com/sipeed/picoclaw/pull/1951)  
  **Analysis:** This infrastructure PR has been open over 4 months. Its age and lack of progress suggest it may be blocked by documentation repo dependencies or maintainer review cycles.

---

## 5. Bugs & Stability

**Bug Report (1 total, moderate severity):**  
- **#3301** — `/clear` and session auto-compression broken for non-default agents in dispatch rules  
  - **Severity:** **Moderate** — affects core chat session functionality (clearing history, auto-compression) but does not crash the system.  
  - **Impact:** Users with dispatch rules routing to non-default agents lose session management capabilities.  
  - **Fix PRs:** None exist yet. The issue was opened less than 24 hours ago, so no fix has been proposed.  
  - **Root cause suspected:** Likely related to session context mapping when dispatch rules override the default agent — the session-ID or agent-ID mapping may not propagate to the auto-compression and clear commands.

No crashes, regressions, or security bugs reported.

---

## 6. Feature Requests & Roadmap Signals

**No new feature requests** in the last 24 hours.

**Ongoing signals:**  
- **DingTalk image support** (PR #3283) is the only feature-level contribution in the pipeline. If merged, it would extend PicoClaw's multi-channel capabilities, particularly for Chinese-market collaboration tools.  
- **Installation script consolidation** (PR #1951) suggests the project is trying to simplify onboarding and reduce cross-repo dependencies, likely targeting v0.4.0 or later.

**Prediction:** The next minor release (v0.3.2) will likely focus on **bug fixes** (especially #3301) and **DingTalk image handling**, if PR #3283 is reviewed and merged soon.

---

## 7. User Feedback Summary

**Pain Points:**
- **Session management with dispatch rules is broken** — the only user-reported issue today indicates a real-world use case (multi-agent routing via Discord/Telegram) is partially broken. This may frustrate users running complex agent topologies on Raspberry Pi (the reported OS).
- **Slow PR review cycle** — the DingTalk PR (#3283) and installation-script PR (#1951) have been waiting for maintainer attention for 8 days and 4+ months respectively, which may reduce contributor motivation.

**Use Cases:**
- Multi-channel agent deployment (Discord, Telegram, DingTalk)
- Dispatch rule-based routing to specialized agents
- Raspberry Pi-based self-hosted AI assistants

**Satisfaction Indicators:** Low activity suggests either project stability (few bugs) or low community engagement. The single bug report indicates users are actively using dispatch rules and encountering issues.

---

## 8. Backlog Watch

**PR #1951** — chore: move installation scripts from docs repo to here  
- Opened: **2026-03-24** (129 days ago)  
- Last Updated: **2026-07-29**  
- Status: Open, 0 comments, no recent commits  
- [PR Link](https://github.com/sipeed/picoclaw/pull/1951)  
- **Risk:** This PR is stale and blocked (likely by the docs repo PR link in description). Without it, installation scripts live in a separate repo, complicating versioned releases and new-user onboarding.

**No long-unanswered critical issues** — the only open issue (#3301) was filed less than 24 hours ago, so it is not yet backlogged.

---

**Overall Health:** PicoClaw is in a **low-activity maintenance phase**. The project has no recent releases, no merged PRs, and one active bug that affects multi-agent workflows. The open DingTalk feature PR shows community interest in expanding channel support, but slow maintainer responsiveness may hinder progress. Action needed: triage and fix #3301, review and merge #3283, and unblock #1951 to restore contributor confidence.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-30

## Today's Overview
NanoClaw shows **moderate activity** today with 9 PRs updated in the last 24 hours (6 merged/closed, 3 open) and 1 active issue. The **maintainer team is actively reviewing and merging contributions**, including a documentation improvement (#3152), a polling-loop fix, and a Slack thread history repair. A significant **dual-engine quota fallback feature** (#3057) remains open and under review, indicating ongoing architectural expansion. One high-priority bug (#3151) was reported around Telegram Bot API 10.1 compatibility — empty message ingestion — which is currently unassigned and needs triage.

## Releases
**No new releases** were published today. The project is currently between releases, with several important fixes and features merged but not yet packaged (including polling-loop session routing fixes and Slack thread reliability improvements).

## Project Progress
Six PRs were merged or closed today, reflecting solid progress across multiple subsystems:

| PR | Description | Status |
|---|---|---|
| [#3152](https://github.com/nanocoai/nanoclaw/pull/3152) | Links architecture docs from README (docs-only) | **Merged** |
| [#2476](https://github.com/nanocoai/nanoclaw/pull/2476) | `feat/restart-no-nanoclaw` — utility skill addition | **Merged** |
| [#3014](https://github.com/nanocoai/nanoclaw/pull/3014) | Fix: `hasIdenticalSend` bound to the correct turn in agent-runner | **Merged** |
| [#3150](https://github.com/nanocoai/nanoclaw/pull/3150) | Setup fetches hardened agent image from registry (Echo rebuilds) | **Merged** |
| [#2440](https://github.com/nanocoai/nanoclaw/pull/2440) | Fix: poll-loop session routing + pre-compaction notification | **Merged** |
| [#2904](https://github.com/nanocoai/nanoclaw/pull/2904) | Fix: Slack thread history reload on @mention for `engage_mode: 'mention'` wirings | **Merged** |

Key outcomes: **Agent session routing during container restarts** is now more robust; **Slack `@mention` mode** now correctly loads full thread context; **poll-loop logic** uses `session_routing` as the authoritative reply channel, eliminating stale first-message bugs.

## Community Hot Topics
**Most active items today:**

- 🟡 [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) — **[PR: Fix]** Migration 021 to backfill channel destinations for existing wirings. Has remained open for 2 days with no comments, suggesting it may be ready for maintainer review.

- 🟢 [#3057](https://github.com/nanocoai/nanoclaw/pull/3057) — **Dual-engine quota fallback (Claude→Codex)** with handoff recaps and proactive quota warnings. This is a **large feature branch** battle-tested in production since July 6, 2026 on a live WhatsApp deployment. It introduces `container_configs.fallback_provider` (migration 017). Still open with no comments — likely undergoing internal review.

- 🔴 [#3151](https://github.com/nanocoai/nanoclaw/pull/3151) — **Telegram Bot API 10.1 `rich_message` inbound silently dropped.** Reported yesterday, **no comments, no reactions**. This is the only open issue and has received zero community engagement or maintainer response so far. The underlying need is clear: users pasting rich/formatted Telegram content get a completely empty agent response.

## Bugs & Stability
### Critical (1)
- **[Issue #3151](https://github.com/nanocoai/nanoclaw/issues/3151)** — **Telegram rich message content silently dropped** (no text, no attachments, no error). This is a **regression** triggered by Bot API 10.1 (June 11, 2026 update). Any paste of formatted web content into Telegram reaches the agent as an empty message. **No fix PR exists** — this is unassigned and uncommented. **Risk: High** — affects all Telegram users of the project.

### Resolved (4)
- **Slack thread history** → Fixed by PR [#2904](https://github.com/nanocoai/nanoclaw/pull/2904) (merged today). Previously, `engage_mode: 'mention'` wirings couldn't see prior human messages in a thread.
- **Poll-loop session routing** → Fixed by PR [#2440](https://github.com/nanocoai/nanoclaw/pull/2440) (merged). Container restarts with pending inbound messages could send approval notifications instead of user messages as the first response.
- **Agent-runner timing** → Fixed by PR [#3014](https://github.com/nanocoai/nanoclaw/pull/3014) (merged). `hasIdenticalSend` now correctly scoped to the current turn.
- **Missing channel destinations** → PR [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) addresses existing wirings missing channel destinations (via migration 021). Still open, awaiting review.

## Feature Requests & Roadmap Signals
The following are **strong candidates** for the next release based on merged or near-merge activity:

1. **Dual-engine quota fallback** ([#3057](https://github.com/nanocoai/nanoclaw/pull/3057)) — Enables automatic Claude→Codex failover when quota is exhausted, with proactive warnings. **Prediction**: Likely to be merged within 1–2 weeks, as it has been battle-tested in production.

2. **Hardened prebuilt agent images** ([#3150](https://github.com/nanocoai/nanoclaw/pull/3150)) — Users can now fetch a hardened image from the NanoClaw registry (built by Echo AI), rather than building locally. **Reduces deployment friction and improves security posture**.

3. **Read-write mounts via CLI** ([#3149](https://github.com/nanocoai/nanoclaw/pull/3149)) — Adds `--rw` flag to `groups config add-mount` for writable mounts. Open, near-merge.

4. **CLI channel destination backfill** ([#3145](https://github.com/nanocoai/nanoclaw/pull/3145)) — Migration 021 for existing wirings. Minor but necessary for DB consistency.

## User Feedback Summary
- **Pain point (Telegram)** — Users pasting formatted content from web pages into Telegram receive no response. This is **silent failure** (no error, no logs). Reported by `jonnychesthair-crypto`. No workaround documented.
- **Pain point (Slack)** — Fixed today: `@mention` mode previously couldn't see prior thread context. User `gergokekesi` identified and fixed this via PR #2904.
- **Pain point (deployment)** — Building agent images locally was a barrier. PR #3150 (merged today) adds a prebuilt hardened image option, directly addressing deployment friction.
- **Positive signal** — The dual-engine fallback (#3057) has been running **in production on live WhatsApp since July 6**, suggesting the project is being used in real-world, customer-facing applications.

## Backlog Watch
Items needing maintainer attention:

1. ⚠️ **[Issue #3151](https://github.com/nanocoai/nanoclaw/issues/3151)** — **Telegram Bot API 10.1 regression.** No assignee, no comments, 0 reactions. This is a **high-impact, user-facing bug** that has been open for 24 hours with zero maintainer response. **Urgency: High.**

2. 🟡 **[PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)** — DB migration for missing channel destinations. 2 days old, no review. **Medium priority** — without this, existing wirings may have incomplete channel configurations.

3. 🟡 **[PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149)** — CLI `--rw` flag for mounts. 1 day old, no review. **Low-medium priority** — a quality-of-life improvement for users needing writable mounts.

4. 🟢 **[PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057)** — Dual-engine fallback. 15 days old, 0 comments. This is a large, production-tested feature. **It may be awaiting final architecture review or test sign-off** — would benefit from maintainer status update.

---

**Project Health Summary:** NanoClaw is in **good health** with strong merge activity today. The main risk is the **unaddressed Telegram API 10.1 regression**, which should be prioritized given it's the only open issue and affects a core channel. The dual-engine fallback feature signals the project is moving toward more **production-grade, multi-provider resilience**.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest — 2026-07-30**

---

## Today's Overview
The NullClaw project shows moderate activity in the last 24 hours, with 4 pull requests updated and 1 issue receiving attention. Two PRs were merged/closed, indicating steady feature integration. However, there are no new releases, and one open bug remains unresolved for over two months. The project appears to be in a stable development phase, with focused contributions around provider expansion, memory configurability, and scheduler reliability.

---

## Releases
None in the last 24 hours. No new versions to report.

---

## Project Progress
Two PRs were merged/closed today:
- **PR #981** *(closed, merged)* — `feat(provider): add grok-cli provider for xAI Grok CLI` by valonmulolli. Adds a new CLI-based provider that delegates to the local `grok` CLI, following the same spawn-per-request pattern as the existing `codex-cli` provider. [View PR](https://github.com/nullclaw/nullclaw/pull/981)
- **PR #961** *(closed, merged)* — `feat(memory): add configurable auto-recall, recall_limit, max_context_bytes` by valonmulolli. Adds three new JSON config keys under `memory`: `auto_recall` (bool, default true), `recall_limit` (u32, default 5), and `max_context_bytes` (u32, default 8192). [View PR](https://github.com/nullclaw/nullclaw/pull/961)

Two additional PRs remain open:
- **PR #980** (open) — `fix(scheduler): persist paired token to disk during /pair` — directly addresses the long-standing scheduler authentication bug. [View PR](https://github.com/nullclaw/nullclaw/pull/980)
- **PR #979** (open) — Duplicate of PR #961 (already merged), likely a stale branch. [View PR](https://github.com/nullclaw/nullclaw/pull/979)

---

## Community Hot Topics
- **Issue #915** — `[bug] Problem with scheduler unauthorized` — This is the most active issue with 3 comments and 1 reaction. Opened on 2026-05-15, last updated 2026-07-29. The user reports scheduler failure in Telegram chat and CLI when using an external Ollama host with Qwen3.6:27b. The core complaint is that the `/pair` token is not persisted to disk, causing all scheduled tasks to fail authentication. [View Issue](https://github.com/nullclaw/nullclaw/issues/915)
- **PR #980** — `fix(scheduler): persist paired token to disk during /pair` — Directly addresses the root cause of Issue #915. This PR has received no comments yet, but is the likely solution the community has been waiting for. [View PR](https://github.com/nullclaw/nullclaw/pull/980)

*Underlying need:* Users require reliable scheduled task execution in production environments, particularly when using external LLM providers. The scheduler authentication flow has a design gap where tokens are ephemeral (in-memory only) but the scheduler tool reads from disk.

---

## Bugs & Stability
**High severity:**
- **Issue #915** — `[bug] Problem with scheduler unauthorized` — The scheduler fails to operate in Telegram chat and CLI when an external Ollama host is configured. Token is generated during `/pair` but never written to disk, making `readPairedToken()` return `null` and the gateway admin route fails.  
  *Status:* Open since 2026-05-15.  
  *Fix PR:* **PR #980** is open and targets this exact bug.  
  [View Issue](https://github.com/nullclaw/nullclaw/issues/915)

No other bugs, crashes, or regressions reported in the last 24 hours.

---

## Feature Requests & Roadmap Signals
- **Memory configuration** (merged in PR #961): Users can now disable auto-recall, limit the number of recalled memory entries, and cap context bytes. This gives operators control over token usage and performance when memory enrichment is too expensive or irrelevant for certain use cases.
- **xAI Grok CLI provider** (merged in PR #981): Enables use of the local `grok` CLI as a backend provider. This expands provider diversity and may appeal to users who prefer or require xAI's models.

*Prediction for next release:* The scheduler token persistence fix (PR #980) is likely to be merged soon, as it directly addresses a painful bug. Memory configuration and Grok CLI support are already merged and will appear in the next release.

---

## User Feedback Summary
- **Pain point:** The scheduler is unreliable when using external LLM backends (Ollama). One user on Ubuntu with a RTX 3090 and Qwen3.6:27b reports that scheduling works neither in Telegram nor CLI, making the feature effectively unusable in their setup.
- **Use case:** Running NullClaw with a local Ollama host on a separate network-accessible GPU server is a common deployment pattern; scheduler failure undermines automation workflows.
- **Satisfaction:** No positive feedback noted in the last 24 hours. The scheduler issue has remained open for 76 days with only one reaction, suggesting low vocal engagement but a persistent problem.

---

## Backlog Watch
- **Issue #915** — `[bug] Problem with scheduler unauthorized` — Open for 76 days without maintainer response. The user reported the bug on 2026-05-15 and the last update was a community comment. While PR #980 now exists, the issue itself has not been assigned or triaged. This warrants maintainer attention to confirm the fix path and communicate with the reporter. [View Issue](https://github.com/nullclaw/nullclaw/issues/915)
- **PR #979** — Duplicate of PR #961 (which was already merged). Should be closed to avoid confusion. [View PR](https://github.com/nullclaw/nullclaw/pull/979)

No other long-unanswered items identified in the current data window.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-30

## Today's Overview

IronClaw is in an intensive bug-bash and stabilization phase for the Reborn architecture, with 50 issues and 50 PRs updated in the last 24 hours. The project shows high activity around QA testing, WebUI improvements, and security hardening, with 29 issues closed and 38 open PRs. The team is addressing intermittent service degradation, tool-calling bugs across LLM providers, and gaps in the Reborn skill system, while concurrently shipping new WebUI features like role-filtered command palettes. Overall project health is active but strained by reliability issues on the QA deployment, with a clear prioritization of bug fixes and coverage enforcement over new feature work.

## Releases

No new releases today.

## Project Progress

**12 PRs merged/closed today**, with notable completions:

- **#6691** (Closed, XL): Refactored composition assembly into focused builders, reducing `ironclaw_reborn_composition` by **9,421 lines** — splitting monoliths into focused modules and moving workflow ownership to proper contract owners.
- **#6890** (Closed, S): Fixed Windows clippy failure for legacy skill backfill imports by gating with `cfg(all(test, unix))`.
- **#6776** (Closed, XS): Added WebUI v2 smoke coverage for tool dispatch, tool results, run cancellation, approval-gate resolution, and auth-gate resume through real `ironclaw serve` HTTP/SSE.
- **#6889** (Open, XL): Enforced WS11 coverage (85.11% aggregate Reborn ratchet) with numerator-backed floors for 15 critical production crates plus strict branch coverage gates — CI enforcement of shipping quality standards.

**Key features advanced:**
- **Signing infrastructure (Groups 5-8/8)**: Multi-tenant isolation, trust registration, KMS ship-gate, Ledger clear-signing product with intent/review/ceremony/sidecar, and attested gate resolve on capability-dispatch model — all stacked PRs from @zmanian.
- **WebUI command palette (PR-2)**: Role-filtered slash commands sharing channel door's policy authorizer (#6891).
- **@ironclaw/ui workspace refactor**: Clean re-derivation of WebUI design system as proper workspace package (#6836).

## Community Hot Topics

1. **[#6786 — Gemini tool-calling 400s](https://github.com/nearai/ironclaw/issues/6786)** (3 comments, QA-bug)  
   *Critical production blocker for Gemini users*: Builtin tool schemas ship empty `"type"` to `functionDeclarations`, causing 400 errors on every tool call. Needs urgent fix.

2. **[#6790 — Codex authorization blocks WebUI](https://github.com/nearai/ironclaw/issues/6790)** (2 comments)  
   Restart during pending device authorization traps the WebUI in a CLI form, making the gateway unavailable. Identified as a startup-sequence failure needing state-machine rework.

3. **[#6880 — gemini_oauth 400s on tool calls](https://github.com/nearai/ironclaw/issues/6880)** (0 comments, new)  
   Companion issue to #6786: tool schemas bypass `shape_tool_schema` entirely for the OAuth variant of Gemini provider.

4. **[#6879 — Automation runs execute as chat turns](https://github.com/nearai/ironclaw/issues/6879)** (0 comments, new)  
   Structural issue where stored automation triggers execute as plain interactive chat turns instead of unattended runs — particularly fails on small models like DeepSeek V4 Flash.

5. **[#6745 — Skills unusable fix](https://github.com/nearai/ironclaw/pull/6745)** (XL, open)  
   Two critical bugs found via self-improvement benchmarking: skill bodies never injected into system prompt, and agent-authored skills failed to load due to author-identity mismatch. Both opt-in fixes with defaults preserved.

## Bugs & Stability

### Critical/High Severity
- **[#6786] Gemini tool-calling 400s** — Empty schema `"type"` field breaks all tool calls. No fix PR yet.
- **[#6880] gemini_oauth tool schema bypass** — Related failure on second Gemini provider variant.
- **[#6815] Turn-state store latches degraded** — Single write-behind flush failure causes permanent 503 service unavailable until manual restart. Observed on QA deploy.
- **[#6805] Intermittent service_unavailable every 30 min** — Railway QA instance drops all requests cyclically. Bug_bash_P1 priority.

### Medium Severity
- **[#6720] Cancel button fails to stop execution** — Long-running tasks (>15 min) cannot be cancelled through UI. Bug_bash_P1.
- **[#6790] Codex auth blocks WebUI** — Device authorization startup race condition traps gateway.
- **[#6879] Automation runs as chat turns** — Structural misrouting of trigger pipeline.
- **[#6887] Reborn composition test suite flaky** — Intermittent timeouts under parallelism (0-13 failures per run), not code defects.

### Low Severity
- **[#6806] Automation output hidden from web chat** — Users must manually navigate to automations page. Bug_bash_P2.
- **[#6348] Gmail auto-authorization after reinstall** — OAuth consent skipped on extension reinstall.

## Feature Requests & Roadmap Signals

- **[#6524] Hermetic capability testing platform** (Epic, open): Long-running effort to mechanically verify every supported capability and critical user journey has deterministic, meaningful coverage. Indicates maturation toward QA automation infrastructure.
- **[#6892] Dogfooding & QA bug fixing sprint** (New epic, 07/27-07/31): Formalized week-long QA push suggests imminent release or RC candidate.
- **Signing infrastructure (Groups 5-8)**: Multi-tenant KMS isolation, Ledger clear-signing, trust registration — points toward production-grade cryptographic key management for agent transactions.
- **WebUI command palette (PR-2)**: Role-filtered slash commands indicate expansion beyond basic chat toward power-user productivity features.
- **WS11 coverage enforcement (#6889)**: 85.11% aggregate Reborn coverage ratchet with per-crate floors — suggests approaching release quality gate.

**Likely next version inclusions**: Gemini tool-calling fixes, automation pipeline fix, WebUI command palette, CI coverage enforcement gates, signing store durability.

## User Feedback Summary

- **Gemini users blocked**: Both `gemini` and `gemini_oauth` provider IDs produce 400 errors on tool calls — a critical pain point for multi-provider deployments.
- **QA deploy reliability concerns**: Cyclic 503 errors, permanent turn-state latching, and stuck cancellation all reported from the Railway QA instance — indicating the deployment infrastructure needs hardening before public release.
- **Automation predictability low**: Users report automation runs are "hit-or-miss" with small models, and results don't surface in the expected chat location.
- **WebUI regressions**: Approval state leaks across tool calls ("Always allow" incorrectly persists), and user must navigate away from chat to see automation results.
- **Security concern**: Gmail extension reinstall bypasses OAuth consent — a trust boundary violation that erodes user confidence in extension safety model.

## Backlog Watch

- **[#3577 — Track v1 channel ports for legacy channels](https://github.com/nearai/ironclaw/issues/3577)** (Open since May 13, 1 comment): Classifies every v1 channel surface for Reborn porting. No recent activity — porting may be blocked on higher-priority items.
- **[#5598 — Release PR](https://github.com/nearai/ironclaw/pull/5598)** (Open since July 3): Bumps `ironclaw_common` 0.4.2→0.5.0 (breaking) and `ironclaw_skills` 0.3.0→0.4.0 (breaking). No reviewer activity for 27 days — release likely blocked by current bug-bash sprint.
- **[#5712 — tool_search discloses full capability catalog](https://github.com/nearai/ironclaw/issues/5712)** (Closed July 29): Security issue where tool search leaks unnarrowed capability catalog under narrowed allow sets. Fixed — worth verifying the fix is included in next release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 30, 2026.

---

## LobsterAI Project Digest – 2026-07-30

### 1. Today's Overview
Activity surged today as the maintainers closed 13 pull requests, primarily targeting stability and user experience for the `cowork` (side chat) module. A number of long-standing PRs, some dating back to April, were cleared from the backlog. While no new releases were cut, a new release branch (`release/2026.7.30`) was targeted by the day’s largest feature PR. The project is currently in a high-velocity integration phase, with a focus on hardening the release candidate.

### 2. Releases
None. No new versions were published today.

### 3. Project Progress
Thirteen PRs were merged or closed today, reflecting significant stabilization and feature work:

- **Feature (Native Check-in):** **[PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408)** (OPEN) introduces a native daily check-in experience with login-aware state, gift visuals, and a remote H5 activity container. This is a major UX addition.
- **Feature (Cowork – Context Tags):** **[PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405)** (CLOSED) adds selected text as removable context tags in the side chat, supporting direct sending and follow-up editing.
- **Fix (Cowork – Input Handling):** **[PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406)** (CLOSED) improves side chat input by accumulating selected text across panel opens, removing the product-level length limit, and retaining bounded context safety.
- **Stability (Cowork):** Fixed scroll jumps on session refresh ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364)), IM message flicker ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363)), and stale export modal rendering ([#2376](https://github.com/netease-youdao/LobsterAI/pull/2376)).
- **Auth Fix:** **[PR #2360](https://github.com/netease-youdao/LobsterAI/pull/2360)** (CLOSED) ensures local callback servers are preserved across login retries, preventing failures during repeated or concurrent login attempts.
- **Revert & Refactor:** A problematic Run Safety feature was reverted ([#2403](https://github.com/netease-youdao/LobsterAI/pull/2403)) due to release-blocking issues involving receipt identity keying and byte accounting. A major refactoring of the Kimi K3 auto-only compatibility layer was also merged ([#2404](https://github.com/netease-youdao/LobsterAI/pull/2404)).
- **Housekeeping:** The automatic update check interval was reduced from 12 to 2 hours ([#2347](https://github.com/netease-youdao/LobsterAI/pull/2347)), and Windows caption button hover colors were aligned with the theme ([#2355](https://github.com/netease-youdao/LobsterAI/pull/2355)).

### 4. Community Hot Topics
All open issues are resolved, and there are no community issues with substantial comments or reactions today. The most actively discussed thread is the following long-dormant bug fix:

- **[PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232)** [OPEN][stale]: Fixes a bug where a scheduled task’s first execution results are never pushed to the UI. The PR has been open since April without maintainer interaction. This highlights a latent user pain point regarding task scheduling reliability.

### 5. Bugs & Stability
No new bugs were reported today. However, several high-severity bugs were fixed in this sprint:

- **Medium (Cowork):** Scroll jumps on session refresh ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364)) and periodic IM message flicker ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363)) were both resolved.
- **High (Auth):** Login retry failures ([#2360](https://github.com/netease-youdao/LobsterAI/pull/2360)) have been patched, improving stability for users with intermittent network connections.
- **Critical (Reverted Feature):** The Run Safety contract gate ([#2403](https://github.com/netease-youdao/LobsterAI/pull/2403)) was reverted after introducing release-blocking issues. This prevents token burn problems but restores the previous (non-safe) behavior.

### 6. Feature Requests & Roadmap Signals
- **Native Daily Check-in:** The addition of a daily check-in flow ([PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408)) suggests the team is building gamification and user retention mechanics into the client.
- **Enhanced Side Chat Context:** The cowork module is receiving significant UX investment. The addition of selected text tags ([PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405)) and improved input handling ([PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406)) signal a roadmap push toward making the side panel a richer secondary workspace.
- **Faster Updates:** Reducing the update check interval from 12 to 2 hours ([PR #2347](https://github.com/netease-youdao/LobsterAI/pull/2347)) indicates a desire to push fixes to users more quickly.

### 7. User Feedback Summary
No direct user feedback (comments, reactions) was logged in issues or PRs today. Based on the fixes merged, the following pain points are being addressed:
- **Intermittent content loss:** Earlier fixes for scroll jumps and message flicker suggest users were losing their reading position or seeing UI stutter during chat refreshes.
- **Login friction:** The fix for auth callback preservation implies users were experiencing frustrating login failures, especially in low-connectivity scenarios.
- **Visual polish:** The alignment of Windows hover colors ([#2355](https://github.com/netease-youdao/LobsterAI/pull/2355)) indicates attention to visual consistency, likely driven by user complaints about mismatched UI elements on Windows.

### 8. Backlog Watch
- **PR #1232 (Stale – Scheduled Task Bug):** This PR, open since April 1, fixes a significant usability issue where the first execution of a scheduled task never updates the UI. It has received no maintainer feedback or review. This is a high-risk item to leave dormant, as it directly impacts task reliability for users who rely on cron-like workflows. [Link](https://github.com/netease-youdao/LobsterAI/pull/1232)
- **PR #1277 (Dependency Update):** An automated dependency bump for the Electron group (Electron 40.x to 43.x) has been open since April 2. While dependency updates are routine, the major version jump (40 to 43) is significant and may introduce breaking changes or require migration work. [Link](https://github.com/netease-youdao/LobsterAI/pull/1277)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-30

## Today's Overview
The Moltis project shows moderate activity today, with no new releases or issues but five pull requests updated in the last 24 hours. Two PRs were merged/closed, advancing key infrastructure work. The three open PRs focus on Slack reliability, security hardening of privileged commands, and a major instrumentation and feedback collection feature. The project appears in a steady development cadence with no critical bug reports or regressions surfaced.

## Releases
No new releases were published today.

## Project Progress
Two pull requests were merged/closed:

- **PR #1169 (Closed)** — *feat(acp): expose Moltis as an ACP agent over stdio* — Adds the `moltis acp` command to expose Moltis as an ACP agent via stdio, routing through the cancellable `LiveChatService` with session isolation, bounded concurrency, and final-text reconciliation. This is a significant milestone for interoperability, allowing other tools to interact with Moltis over a standard protocol.
  
  [GitHub: moltis-org/moltis PR #1169](https://github.com/moltis-org/moltis/pull/1169)

- **PR #1173 (Closed)** — *feat(pwa): make push notifications reliable and non-disruptive* — Improves PWA push notifications to be reliable, private, ordered, and non-disruptive across tabs and devices. Includes re-alerting for newer messages, privacy-safe titles, stripped rich formatting, and app-wide unread badge management.
  
  [GitHub: moltis-org/moltis PR #1173](https://github.com/moltis-org/moltis/pull/1173)

## Community Hot Topics
No issues are currently open, and all PRs have zero comments and reactions. The most actively discussed area is the instrumentation and feedback collection infrastructure:

- **PR #1174 (Open)** — *Add instrumentation and feedback collection infrastructure* — This is the largest feature PR currently open, adding backend-neutral instrumentation, Langfuse v4 export, OTLP backends, and end-user reaction feedback. It touches streaming/non-streaming parity, provider failover, cache-aware token usage, and reasoning tracking. The scope suggests it will be a highly visible change for operators and developers.
  
  [GitHub: moltis-org/moltis PR #1174](https://github.com/moltis-org/moltis/pull/1174)

## Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The project has no open issues, indicating either excellent stability or low community engagement on issues.

## Feature Requests & Roadmap Signals
No explicit feature requests were made by users today. However, the three open PRs signal the project's current development priorities:

1. **Slack interaction lifecycle** (PR #1166) — Reliable acknowledgment reactions, phases, reconnect supervision, and Block Kit support for Slack bots.
2. **Security hardening** (PR #1170) — Introducing per-account `operators` lists to gate privileged commands and host tools, separating access from privilege.
3. **Observability** (PR #1174) — Comprehensive instrumentation and feedback infrastructure, likely targeting release in the next version given its backend-neutral design.

All three are authored by the same maintainer (`penso`), suggesting focused internal development rather than community-driven requests.

## User Feedback Summary
No user feedback, pain points, or satisfaction signals were recorded in the data today. There are zero open issues and zero comments on PRs, making it difficult to assess user sentiment. The lack of community interaction could indicate that users are not encountering problems, or that feedback is being collected through other channels not reflected in GitHub.

## Backlog Watch
There are no unanswered issues or PRs requiring maintainer attention. All three open PRs were updated within the last 24 hours and are being actively worked on. No items are flagged as stale or abandoned.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for CoPaw (QwenPaw / AgentScope) based on the provided GitHub data.

---

# CoPaw Project Digest — 2026-07-30

## 1. Today's Overview
The project is showing **signs of a healthy, high-traffic open-source ecosystem**, with 27 issues and 47 PRs updated in the last 24 hours. A total of 16 PRs were closed or merged, indicating active maintenance velocity. However, the absence of a new release suggests the team is in a **stabilization and feature-bundling phase** rather than shipping on a fixed cadence. The community is highly engaged, particularly around MCP (Model Context Protocol) integrations, session management bugs, and Windows installer issues. The maintainer team appears to be responsive, but several "blocker" bugs remain open without immediate fix PRs, warranting attention.

## 2. Releases
**No new releases were published today.** The latest available version remains **v2.0.1** (Desktop) as referenced in many bug reports.

## 3. Project Progress
The following PRs were closed or merged today, indicating tangible progress:
- **#6553 (CLOSED)** feat: redesign app center — Tabbed App Center (My Apps, Official, Market) with improved discovery UX.
- **#6269 (CLOSED)** feat(checkpoints): add workspace checkpoint management — Git-based shadow store for recoverable conversation history.
- **#6479 (CLOSED)** fix: sync MiniMax model lineup with current platform (first-time contributor merged).
- **#6496 (CLOSED)** fix: Legacy plugin compatibility on QwenPaw 2.0+.
- **#6056 (CLOSED)** fix: Background offload killing subprocess immediately.
- **#6408 (CLOSED)** feat: support undo/redo (similar to Cherry Studio).
- **#6245 (CLOSED)** fix: Session permanently blocked by shell command deadline regression.

**Key insight:** The merged checkpoint and App Center PRs suggest a **focus on infrastructure and user-facing UI polish**, preparing for a stable v2.0.2.

## 4. Community Hot Topics
The most active discussions (by comments and urgency) reveal deep user engagement:

| Issue/PR | Comments | Topic | Analysis |
|----------|----------|-------|----------|
| [#6537](https://agentscope-ai/QwenPaw Issue #6537) | 9 | Skill tags disappear on restart (regression) | **High confidence bug** — user sentiment indicates frustration with data loss on a core configuration feature. |
| [#6460](https://agentscope-ai/QwenPaw Issue #6460) | 4 | High CPU on Edge+Wayland (large session rendering) | **Performance pain point** — likely a WebSocket or DOM re-render issue affecting Linux power users. |
| [#6524](https://agentscope-ai/QwenPaw Issue #6524) | 3 | MCP session recovery after server restart | **Integration quality** — users relying on remote MCP servers face downtime when their backend restarts. |
| [#6542](https://agentscope-ai/QwenPaw Issue #6542) | 3 | Dialog flash crash causes history loss | **Data integrity concern** — the JSONL log file is not flushed in real-time. |
| [#6541](https://agentscope-ai/QwenPaw Issue #6541) | 2 | DeepSeek error due to `role=user` in context compression | **Provider-specific bug** — affects all users of DeepSeek models with scroll compression. |
| [#6563](https://agentscope-ai/QwenPaw Issue #6563) | 2 | CI blocks all fork PRs | **Open source contributor friction** — this is a critical community blocker. |

**Underlying need:** Users are demanding **reliability and consistency** — they want features to persist across restarts, sessions to survive crashes, and MCP connections to auto-recover.

## 5. Bugs & Stability
Bugs reported today, ranked by **severity**:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#6542](https://agentscope-ai/QwenPaw Issue #6542) | Flash crash → dialog history lost permanently | No fix PR yet |
| **Critical** | [#6537](https://agentscope-ai/QwenPaw Issue #6537) | Skill tags silently disappear on restart (regression #3270) | No fix PR yet |
| **High** | [#6524](https://agentscope-ai/QwenPaw Issue #6524) | MCP session dead after remote server restart | No fix PR yet |
| **High** | [#6565](https://agentscope-ai/QwenPaw Issue #6565) | `execute_shell_command`: newline-to-space breaking multi-line commands + PIPE hang | **Fix PR**: [#6566](https://agentscope-ai/QwenPaw PR #6566) |
| **High** | [#6534](https://agentscope-ai/QwenPaw Issue #6534) | Windows installer infinite loop (NSIS process self-match) | No fix PR yet |
| **High** | [#6551](https://agentscope-ai/QwenPaw Issue #6551) | Aliyun coding plan model mismatch | No fix PR yet |
| **Medium** | [#6541](https://agentscope-ai/QwenPaw Issue #6541) | DeepSeek error due to `role=user` in compressed context block | No fix PR yet |
| **Medium** | [#6544](https://agentscope-ai/QwenPaw Issue #6544) | Feishu audio silent transcription failure | No fix PR yet |
| **Medium** | [#6547](https://agentscope-ai/QwenPaw Issue #6547) | Coding Mode misplaced cursor (UI) | No fix PR yet |
| **Medium** | [#6533](https://agentscope-ai/QwenPaw Issue #6533) | `/mission` command TypeError | **Fix PR**: [#6562](https://agentscope-ai/QwenPaw PR #6562) |
| **Low** | [#6558](https://agentscope-ai/QwenPaw Issue #6558) | Session switch causes message loss / instruction drift | No fix PR yet |

**Worst offender:** The **skill tags regression (#6537)** is particularly concerning because it was already fixed once (#3270) and has reappeared — indicating a test coverage gap or architectural fragility in the skill manifest reconciliation logic.

## 6. Feature Requests & Roadmap Signals
New feature requests from the community that may influence the next release:

| Issue | Request | Likelihood for v2.0.2 |
|-------|---------|----------------------|
| [#6542](https://agentscope-ai/QwenPaw Issue #6542) | **Auto-save** dialog history on every user turn | **High** — data loss is a blocker |
| [#6475](https://agentscope-ai/QwenPaw Issue #6475) | `notice_after_complete` tool for background task + parallel chat | **Medium** — requires architectural change to agent loop |
| [#6421](https://agentscope-ai/QwenPaw Issue #6421) | QQ channel streaming output support | **Medium** — aligns with existing platform parity efforts |
| [#6559](https://agentscope-ai/QwenPaw Issue #6559) | Session forking with **tree/hierarchy** UI (parent-child) | **High** — repeated UX feedback on session chaos |
| [#6560](https://agentscope-ai/QwenPaw Issue #6560) | **Chat UX improvements** (copy, undo, ESC stop, mission mode) | **High** — low-hanging usability wins |
| [#6525](https://agentscope-ai/QwenPaw PR #6525) | **User context transparent penetration** (Chat API → MCP → SKILL CLI) | **Very High** — this PR is already open and under review |

**Prediction:** v2.0.2 will likely include **auto-save, session hierarchy, and UX improvements** as core features, along with the user context penetration PR (#6525) which is a foundational change for multi-tenant deployments.

## 7. User Feedback Summary
Real user pain points and satisfaction signals from today’s data:

- **😠 Frustration:** *"Skill tags disappear on restart (regression of #3270)"* — [#6537](https://agentscope-ai/QwenPaw Issue #6537) — Users are reporting **regression fatigue**.
- **😠 Frustration:** *"Windows installer infinite loop — installation impossible"* — [#6534](https://agentscope-ai/QwenPaw Issue #6534) — A **showstopper for new Windows users**.
- **😠 Frustration:** *"Dialog flash crash → history lost"* — [#6542](https://agentscope-ai/QwenPaw Issue #6542) — **Data loss erodes trust** in desktop mode.
- **😠 Frustration:** *"MCP backend restart → client dead"* — [#6524](https://agentscope-ai/QwenPaw Issue #6524) — Integration-heavy users are **blocked**.
- **😊 Satisfaction:** Active community contributors are merging first-time PRs (e.g., [#6479](https://agentscope-ai/QwenPaw PR #6479), [#6566](https://agentscope-ai/QwenPaw PR #6566)) — **positive signal for community health**.
- **😊 Satisfaction:** The merged **App Center redesign (#6553)** and **workspace checkpoints (#6269)** show the team is listening to UX feedback.

**Overall Sentiment:** Users are **excited about the product’s capabilities** (MCP, multi-platform chat, shell integration) but **frustrated by stability regressions and data persistence issues**.

## 8. Backlog Watch
Issues and PRs that remain open and have not received maintainer responses in a timely manner:

| Item | Topic | Days Open | Risk |
|------|-------|-----------|------|
| [#6460](https://agentscope-ai/QwenPaw Issue #6460) | High CPU on Edge+Wayland | **5 days** | Performance regression affecting Linux users |
| [#6421](https://agentscope-ai/QwenPaw Issue #6421) | QQ streaming support | **6 days** | Platform parity gap |
| [#6383](https://agentscope-ai/QwenPaw PR #6383) | Unelevated sandbox for Windows | **7 days** | Security risk unclear — needs review |
| [#6312](https://agentscope-ai/QwenPaw PR #6312) | Configurable theme/skin module (Draft) | **9 days** | Low risk — draft needs guidance |
| [#6325](https://agentscope-ai/QwenPaw PR #6325) | Show built-in tool docs in Console | **8 days** | User-facing improvement, blocked on review |
| [#6529](https://agentscope-ai/QwenPaw Issue #6529) | ACP `new_session` response missing `models` field | **2 days** | Blocks external agent clients |
| [#6510](https://agentscope-ai/QwenPaw Issue #6510) | Chinese path URL encoding breaking Feishu file access | **2 days** | Blocks Chinese users on Feishu |

**Call to action:** The **CI blocker for fork PRs (#6563)** is the highest priority backlog item — it prevents new contributors from validating their work, which harms community growth. The **High CPU on Wayland (#6460)** is also aging and should be triaged.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-30

## Today's Overview

ZeroClaw remains highly active with 50 issues and 50 PRs updated in the last 24 hours (40 open issues, 10 closed; 43 open PRs, 7 merged/closed). The project is in an intense design-and-refactor phase, with five high-risk RFCs under active maintainer review and multiple large feature branches (including the OpenAI Chat Completions endpoint at PR #8486 and the goal controller at PR #8687) still open and awaiting author action. No new releases were cut today; the focus is on architectural consolidation, security hardening, and closing critical bugs. The maintainer decision queue (Issue #8692) remains active with several unratified RFCs.

---

## Releases

No new releases were published today. The latest release remains v0.8.2 (which shipped the A2AServer inbound support). Users should expect a future release once the current batch of large PRs (OpenAI adapter, SOP control plane, runtime plugin architecture) lands.

---

## Project Progress

**7 PRs were merged or closed today**, with the following notable changes:

- **#9542** — `docs(security): document untrusted review input` (merged): Adds explicit prompt-injection hygiene doctrine for AI PR-review skills, treating all GitHub-sourced text as untrusted.
- **#9508** — `[Feature]: Harden AI PR-review skills against prompt injection` (closed): Support issue documenting the need for untrusted-input handling in review protocols.
- **#9495** — `fix(channels): resolve aliases for one-off sends` (merged): Fixes `zeroclaw channel send --channel-id discord.governance` failing with "Unknown channel" by properly resolving dotted `<type>.<alias>` identifiers.
- **#9278** — `[Bug]: context_compression.enabled defaults true while runtime ignores it` (closed): Confirmed and accepted bug — the default is misleading.
- **#9239** — `[Bug]: config patch --json emits plaintext errors on two failure paths` (closed): Fixes error output consistency in the config CLI.
- **#9422** — `[Bug]: zeroclaw-config unit tests cannot compile on Windows` (closed): Windows compilation fix merged.
- **#9186** — `[Bug]: MCP stdio: response id not matched, 30s hard timeout...` (closed): Three interacting defects in stdio MCP path fixed.
- **#9263** — `[Bug]: CI Docker publish step fails when no new Docker tags are produced` (closed): CI infrastructure fix.
- **#8581** — `feat(sop): centralize SOP ingress adapters for fan-in sources` (closed): Core architecture change merged.
- **#9205** — `feat(sop): centralize fan-in ingress adapters` (merged): Delivery of the SOP ingress adapter layer.

**Key architectural advances**: The SOP (Standard Operating Procedure) fan-in ingress adapter layer (#8581/#9205) is now complete, providing a shared adapter for multiple channel sources. The Windows compilation fix (#9422) improves cross-platform support.

---

## Community Hot Topics

The following issues and PRs generated the most community discussion (by comment count) in the last 24 hours:

### Most Active Issues

1. **#9048** — `RFC: Separate conversation history from agent-curated long-term memory` (11 comments) — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)
   - **Analysis**: The most-discussed topic centers on a fundamental architectural decision: should conversation history and curated long-term memory share the same storage backend? Commenters are debating lifecycle semantics, migration paths, and whether `MemoryCategory::Conversation` is a leaky abstraction. This signals growing concern about memory scaling and data separation as deployments grow.

2. **#9127** — `RFC: Abstract a KeySource trait — classify master-key material by source/deployment form` (9 comments) — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)
   - **Analysis**: Security-conscious users and maintainers are pushing for a formal abstraction over how master key material is sourced (env vars, files, cloud key stores, TPMs). The discussion reveals tension between flexibility and complexity — the proposed `KeySource` trait would touch 93 `#[secret]` fields across the config schema.

3. **#9106** — `RFC: A2A outbound client (A2ATool)` (6 comments) — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)
   - **Analysis**: The next step in ZeroClaw's Agent-to-Agent protocol — enabling proactive outbound calls to external A2A-compliant agents. Commenters are discussing whether the A2ATool should be a built-in tool or a plugin, and how to handle cross-agent auth.

4. **#8603** — `RFC: OpenAI Chat Completions compatibility adapter` (6 comments) — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)
   - **Analysis**: Tied to PR #8486, this RFC is attracting ecosystem integrators who want to connect Open WebUI, LobeChat, and IDE tools. The debate centers on whether to implement a full pass-through proxy or a semantic translation layer.

5. **#8933** — `RFC: Add cross-turn conversation correlation to OTel export` (6 comments) — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)
   - **Analysis**: Observability-focused contributors want an opaque `gen_ai.conversation.id` in OpenTelemetry spans so multi-turn conversations can be traced across LLM calls in dashboards like Grafana.

### Most Active PRs

- **#8486** (OpenAI Chat Completions endpoint) — [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — Blocked on author action (REL-mame), missing high-priority dependency review. This is the largest PR in the queue (size:XL).

- **#9423** — `fix(runtime): stop reporting an unanswerable approval as a user denial` (size:XL) — [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9423) — Critical fix for approval-gate UX; when no channel can answer an approval request, the runtime currently logs a denial, misleading operators. Needs author action.

---

## Bugs & Stability

### Critical/Priority P1 Bugs (unfixed)

| Issue | Title | Status | Impact |
|-------|-------|--------|--------|
| #9340 | CLI-created cron jobs deliver to nowhere (`delivery.mode = "none"`) | OPEN, accepted | Cron jobs silently discard output — users get `ok` status with zero results |
| #9497 (PR) | Windows verbatim path prefix breaks `grep` in file tool | OPEN, needs author action | Windows users cannot search files with `content_search` |
| #9186 | MCP stdio: response id mismatch + 30s hard timeout | CLOSED (merged) | Was blocking MCP tool integrations; fix merged yesterday |

### High-Severity Bugs (P2)

| Issue | Title | Status | Notes |
|-------|-------|--------|-------|
| #9486 | High-entropy detector redacts Solana wallet addresses; `high_entropy_tokens=false` ignored on channel path | OPEN, accepted | Crypto/P2P use cases blocked — users cannot discuss wallet addresses |
| #9506 | Email channel cannot preserve CC recipients or send Reply All | OPEN, in progress | Basic email functionality gap |
| #6724 | Empty credentials cause channel orchestrator crashloop | OPEN, accepted | Dashboard UX still allows creating channel blocks without credentials |
| #9462 | zeroclaw-plugins lib unit tests never execute in CI | OPEN, in progress | CI blind spot for WASM plugin component tests |
| #9511 | Semgrep findings only in Security tab, not PR comments | OPEN, blocked | Security findings invisible to most contributors |

### Fixed Today

- #9186 — MCP stdio three-defect bug (response id mismatch, hard timeout, mutex hold) — **merged**
- #9422 — Windows compilation failure in zeroclaw-config — **merged**
- #9239 — config patch --json plaintext error leaks — **merged**
- #9278 — context_compression.enabled defaults true but runtime ignores it — **closed**

---

## Feature Requests & Roadmap Signals

### High-Signal (Likely Next Release)

1. **OpenAI Chat Completions Endpoint (#8550/#8603)** — PR #8486 is XL and blocked on author action, but is the most-requested integration feature. **Prediction**: Once REL-mame addresses review comments, this will land in v0.9.0.

2. **Separate Memory Storage from Connectors (#9103)** — RFC with 5 comments and "in-progress" status. The conflation of authoritative storage (PostgreSQL, SQLite) and enrichment connectors (Lucid, vector DBs) is causing real configuration pain. **Prediction**: Likely accepted and partially implemented in next release.

3. **Runtime-Owned Conversation Sessions (#9487)** — Proposed by a core contributor (NiuBlibing). This would make `zeroclaw-runtime` the single owner of conversation state, with WebSocket/dashboard/channels as transport adapters. **Prediction**: Long-term architecture shift; unlikely to land before v0.10+.

### Medium-Signal (Future Versions)

- **Mixture-of-Agents virtual provider (#8568)** — 3 comments, no PR yet. Enables running multiple models in parallel with an aggregator. Could be a differentiator for complex reasoning.
- **Realtime speech-to-speech for Gemini Live (#8780)** — 4 comments, no PR. Would require new channel + transport architecture.
- **Unified attachment architecture (#9488)** — Proposed by NiuBlibing, addresses web chat and channel attachment handling.
- **Goal controller/verifier (#8687)** — PR #8687 is open but blocked on author. This adds structured goal admission and completion verification.

### New Request Today

- **#9511** — Surface diff-aware Semgrep findings as advisory PR comments (not just SARIF in Security tab). Community-driven security transparency request.

---

## User Feedback Summary

### Pain Points (Urgent)

1. **"My cron jobs run but I never get results"** (#9340) — CLI cron creation hardcodes `delivery.mode = "none"`. Users are running automated workflows thinking they work, but discarding all output. This is a significant trust-eroding bug.

2. **"My agent can't talk about crypto wallets"** (#9486) — High-entropy detector false-positive on Solana addresses. User message: "An agent with a Solana MCP server cannot state a wallet address." The `high_entropy_tokens=false` config flag is ignored on channel paths, leaving no workaround.

3. **"I can't connect my favorite LLM frontend"** — Multiple users across #8550/#8603 request OpenAI-compatible API. Underlying need: ecosystem compatibility with Open WebUI, LobeChat, Continue.dev, Aider.

4. **"MCP tools timeout after 30 seconds even with 5-minute tool budgets"** (#9186, now fixed) — User was blocked from using any MCP tool that takes longer than 30 seconds. Now resolved.

### Satisfaction Signals

- **SOP fan-in consolidation (#8581/#9205) closed** — Community contributors (IftekharUddin, Audacity88) delivered the shared ingress adapter layer, received positive maintainer response.
- **Docs hygiene improved** — Issue #7269 (docs build warning noise) was closed, and #8810 (wrong Telegram example) was fixed. Community responsive to documentation quality.

### Underlying Needs

1. **Simpler deployment** — Multiple RFCs (#9127 KeySource, #9103 memory storage) suggest users find configuration complex and error-prone.
2. **Ecosystem plugability** — OpenAI-compatible endpoint and A2A protocol are top requests for interoperability.
3. **Observability for production** — Cross-turn OTel correlation (#8933) and Semgrep PR comments (#9511) indicate growing operational use.

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Created | Days Open | Notes |
|-------|---------|-----------|-------|
| #6724 | 2026-05-16 | **75 days** | Channel crashloop with empty credentials — accepted but no PR |
| #6864 | 2026-05-23 | **68 days** | Invert zeroclaw-channels → zeroclaw-runtime dependency — RFC accepted but no movement |
| #8288 | 2026-06-24 | **36 days** | SOP milestone tracker — 1 comment, no maintainer update in weeks |
| #8568 | 2026-07-01 | **29 days** | MoA virtual provider — needs maintainer review (p2, risk:high) |
| #8550 | 2026-06-30 | **30 days** | OpenAI-compatible endpoint feature request — accepted but blocked on PR #8486 |

### PRs Needing Maintainer Review

| PR | Created | Days Open | Notes |
|----|---------|-----------|-------|
| #8486 | 2026-06-29 | **31 days** | OpenAI endpoint — needs-author-action, XL size, principal priority |
| #8687 | 2026-07-04 | **26 days** | Goal controller — needs-author-action, XL size |
| #8689 | 2026-07-04 | **26 days** | Goal command admission for channels — needs-author-action, XL size |
| #8943 | 2026-07-10 | **20 days** | Bedrock Nova 2 prompt caching fix — needs-author-action |
| #9208 | 2026-07-20 | **10 days** | Stop per-iteration tool-schema deep clones — needs-author-action, P1 |

### Concern: Stalled High-Value Work

PR #8486 (OpenAI Chat Completions) and PR #8687 (Goal Controller) are both size:XL, both marked `needs-author-action`, and both have been open for over 25 days. These represent major features that the community is waiting on. The maintainers may need to either assign co-maintainers or set a deadline for author responses to unblock roadmap progress.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*