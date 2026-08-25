# OpenClaw Ecosystem Digest 2026-08-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-25 01:20 UTC

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

# OpenClaw Project Digest — 2026-08-25

## 1. Today's Overview
OpenClaw is in a high-activity release-validation phase, with 500 issues and 500 PRs updated in the last 24 hours. The project shipped one new beta release (v2026.8.1-beta.3) and closed 26 issues and 73 PRs overnight. A notable portion of the issue tracker remains occupied by older, high-severity reliability defects around message delivery, session persistence, and process lifecycle (zombie children, orphaned workers) that predate this release window. Maintainer attention is broadly distributed across a large field-report backlog, with several P0/P1 issues awaiting product decision or maintainer review, suggesting a need for focused triage sprints.

## 2. Releases
- **v2026.8.1-beta.3** ([OpenClaw 2026.8.1-beta.3](https://github.com/openclaw/openclaw/releases))
  - **Highlights:** GPT-5.6 Sol, Terra, Luna, and Ultra reasoning support across OpenClaw and the Codex runtime; Control UI first-run setup extends verified model setup into Custodian and optional channel onboarding; Puppeteer-compatible CDP relay support for paired Chrome sessions.
  - **Known Blocker Addressed:** A release validation blocker for beta.3 was resolved via PR [#128371](https://github.com/openclaw/openclaw/pull/128371), authorizing a focused beta evidence manifest.
  - **Notes:** No explicit migration steps published in the release notes.

## 3. Project Progress
**Merged/Closed PRs (73 total) — Selected highlights:**
- **Claude CLI OAuth in Control UI** ([PR #125471](https://github.com/openclaw/openclaw/pull/125471)): fixed loss of refresh ownership after gateway restart when legacy auth profiles were present.
- **Install policy warnings in UI** ([PR #116489](https://github.com/openclaw/openclaw/pull/116489) and [#120900](https://github.com/openclaw/openclaw/pull/120900)): introduced `warn` state and `acknowledgeInstallPolicyWarning` for plugin/skill installs, with a video-proofed UI review.
- **Gateway conversation delivery within agent bindings** ([PR #126424](https://github.com/openclaw/openclaw/pull/126424)): multi-agent conversation tools no longer bypass agent ownership scope (closed; merge-risk flags noted).
- **Release telemetry consent handling** ([PR #128943](https://github.com/openclaw/openclaw/pull/128943), open): fixes onboarding stalls after the consent prompt.

## 4. Community Hot Topics
- **Release Validation v2026.8.1-beta.2** ([#125626](https://github.com/openclaw/openclaw/issues/125626), 18 comments): The formal validation worksheet for the prior beta remains the most-commented issue, indicating a structured public QA process is active and a key signal for release maturity.
- **Subagent completion delivery loss** ([#67777](https://github.com/openclaw/openclaw/issues/67777), 12 comments, P1): Long-standing reliability defect; community interest remains high due to impact on session state and message loss.
- **Zombie process accumulation from hooks/tools** ([#97616](https://github.com/openclaw/openclaw/issues/97616), 9 comments, P1): Community report includes concrete evidence; linked to broader process-lifecycle concerns.
- **Beta-tagged update leaves plugins on `latest`** ([#97680](https://github.com/openclaw/openclaw/issues/97680), 8 comments, P1): Packaging/update logic concern with broad operational impact.
- **Agent-triggered context compaction** ([#6757](https://github.com/openclaw/openclaw/issues/6757), 8 comments, P2): Recurring feature demand; community is actively pushing for agent-self-compaction tools.

## 5. Bugs & Stability
**Highest-severity/open issues (ranked):**
- **[P0] iOS app update breaks Talk Mode/chat** ([#108520](https://github.com/openclaw/openclaw/issues/108520)): Client-side blocker, currently `clawsweeper:needs-info`, stale but unresolved.
- **[P0] Skill Workshop Apply data loss** ([#107707](https://github.com/openclaw/openclaw/issues/107707)): `SKILL.md` overwritten verbatim; related P1 variant [#125570](https://github.com/openclaw/openclaw/issues/125570) reports description field overwrite breaking routing.
- **[P1] AgentSelectionRequiredError floods** ([#126360](https://github.com/openclaw/openclaw/issues/126360)): With explicit multi-agent ownership, logbook plugin, Control UI, and system turns all lack `agentId`; runs on `main`.
- **[P1] Telegram durable outbound stuck** ([#126246](https://github.com/openclaw/openclaw/issues/126246)): Deliveries remain in `send_attempt_started` and are lost on restart; fix PR in flight ([#128896](https://github.com/openclaw/openclaw/pull/128896)).
- **[P1] Compaction infinite loop** ([#126900](https://github.com/openclaw/openclaw/issues/126900)): `maxActiveTranscriptBytes` wedges the channel lane; fix PR open ([#128799](https://github.com/openclaw/openclaw/pull/128799) addresses sibling root-level anyOf schema issue).
- **[P1] Memory persistence silently disabled via deny** ([#126906](https://github.com/openclaw/openclaw/issues/126906)): Agent reports success for saves that never happen.
- **[P1] Sandbox bind-mount root-owned `/workspace`** ([#126631](https://github.com/openclaw/openclaw/issues/126631)): Sandbox user locked out; fix PR open ([#126618](https://github.com/openclaw/openclaw/pull/126618) related).
- **[P1] Feishu/Telegram dispatch failure** ([#114020](https://github.com/openclaw/openclaw/issues/114020)): `runChannelInboundEvent` requires `runDispatchLifecycle`.

**Fix PRs in flight:** Telegram private-topic resume ([#128896](https://github.com/openclaw/openclaw/pull/128896)), Codex child hooks preservation ([#128508](https://github.com/openclaw/openclaw/pull/128508)), tool-loop guard ([#121063](https://github.com/openclaw/openclaw/pull/121063)), CLI/Agent SDK binding preservation ([#128732](https://github.com/openclaw/openclaw/pull/128732)).

## 6. Feature Requests & Roadmap Signals
- **Self-hosted STT/TTS in webchat** ([#45508](https://github.com/openclaw/openclaw/issues/45508), P2, 7 comments): Strongly requested; likely candidate for next minor release given repeated community emphasis.
- **Pace-aware rate limiting** ([#45771](https://github.com/openclaw/openclaw/issues/45771), P3, 7 comments): Autonomous-loop API budget management; likely to gain traction as subagent usage grows.
- **Per-model generation timeout** ([#8724](https://github.com/openclaw/openclaw/issues/8724), P3): User request for timeout config; simple API addition, feasible for near-term.
- **Agent-triggered compaction** ([#6757](https://github.com/openclaw/openclaw/issues/6757), P2, 8 comments): High engagement; aligns with existing `/compact` command, making implementation likely.
- **Automatic Anthropic model catalog** ([#113411](https://github.com/openclaw/openclaw/issues/113411), P2): Lifecycle-visible capability-driven model discovery; likely roadmap item for model-provider scaling.

**Prediction for next version (2026.8.x stable):** Installation-policy warning acknowledgement, GPT-5.6 family model support (already in beta), Telegram reliability fixes, and possibly agent-triggered compaction or a first cut of self-hosted voice support.

## 7. User Feedback Summary
- **Reliability dissatisfaction:** Recurring themes of silent message loss, stuck Telegram deliveries, and restart recovery failures dominate recent field reports ([#126246](https://github.com/openclaw/openclaw/issues/126246), [#128067](https://github.com/openclaw/openclaw/issues/128067), [#67777](https://github.com/openclaw/openclaw/issues/67777)).
- **Context/UX friction:** Users repeatedly request visible acknowledgment, suppression of transient warnings, and human-readable session names ([#8285](https://github.com/openclaw/openclaw/issues/8285), [#39406](https://github.com/openclaw/openclaw/issues/39406), [#7406](https://github.com/openclaw/openclaw/issues/7406)).
- **Multi-agent orchestration pain:** Explicit ownership and Control UI gaps are documented with detailed repros ([#126360](https://github.com/openclaw/openclaw/issues/126360), [#52803](https://github.com/openclaw/openclaw/issues/52803)).
- **Provider integration friction:** OAuth refresh failures (MiniMax [#77467](https://github.com/openclaw/openclaw/issues/77467), Fastmail [#119914](https://github.com/openclaw/openclaw/issues/119914)), tool-schema normalization (Moonshot [#113130](https://github.com/openclaw/openclaw/issues/113130)), and custom-provider baseUrl conflicts ([#82020](https://github.com/openclaw/openclaw/issues/82020)) indicate a need for broader provider-config testing.
- **Positive signal:** Structured release-validation process with community participation shows an active, engaged user base willing to file well-scoped field reports.

## 8. Backlog Watch
Long-open, high-signal items needing maintainer attention:
- **#67777 — Subagent completion delivery loss** ([link](https://github.com/openclaw/openclaw/issues/67777)): Open since April 2026, P1, 12 comments, no fix PR linked.
- **#97616 — Zombie process accumulation** ([link](https://github.com/openclaw/openclaw/issues/97616)): Open since June, P1, 9 comments; related systemic issue persists despite prior fixes.
- **#45508 — Self-hosted STT/TTS in webchat** ([link](https://github.com/openclaw/openclaw/issues/45508)): Open since March, P2, 7 comments, 2 upvotes; no maintainer action visible.
- **#107707 — Skill Workshop data loss** ([link](https://github.com/openclaw/openclaw/issues/107707)): P0, stale since July; duplicate #125570 was filed and is active, but the original severity warrants closure or explicit deprecation.
- **#108520 — iOS app Talk Mode break** ([link](https://github.com/openclaw/openclaw/issues/108520)): P0, open since July, needs-info, 4 comments; unresolved client-side blocker.
- **#126246 — Telegram durable outbound stuck** ([link](https://github.com/openclaw/openclaw/issues/126246)): P1, 5 comments, fix PR in flight but not yet merged; watch for merge and follow-up validation.
- **#119914 — Fastmail MCP OAuth failure** ([link](https://github.com/openclaw/openclaw/issues/119914)): Open since August, P2, 4 comments, no maintainer response recorded — potential gap in third-party integration coverage.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem

**Date:** 2026-08-25  
**Data Window:** 2026-08-24 → 2026-08-25

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape is in a period of intense consolidation and hardening. Projects are increasingly focused on reliability (message delivery, session persistence, process lifecycle) rather than net-new features, with several shipping stability-focused releases and betas (OpenClaw v2026.8.1-beta.3, NanoClaw v2.3.0, CoPaw v2.1.1-beta.2). Multi-agent orchestration, provider portability, and channel integrations (Telegram, Slack, Feishu, Mattermost) dominate development attention, while community demand is shifting toward production-grade operations: cost control, observability, crash recovery, and self-hosted infrastructure compatibility. Architectural debt is being addressed at the structural level (unified deadline layers, durable coordination state, contract ownership trackers), signaling a maturing ecosystem moving from demo viability to daily-driver reliability.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release (24h) | Health Score* | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | v2026.8.1-beta.3 | 7/10 | High volume; large backlog of P0/P1 reliability defects awaiting triage |
| **NanoBot** | 8 | 26 (12 closed) | None | 9/10 | Exceptional throughput; 12h issue-to-ship cycles; 3 core maintainers driving |
| **Hermes Agent** | 50 | 50 (5 closed) | None (v0.20.5 latest) | 7/10 | Stability-hardening; fast bug→fix PR turnaround; architectural RFCs in flight |
| **PicoClaw** | 3 | 3 | None | 6/10 | Moderate; WebUI dev in progress; 2 stale blocking bugs unresolved |
| **NanoClaw** | ~50 | ~50 (3 closed) | **v2.3.0** | 7/10 | High velocity; Slack overhaul shipped; multi-channel strategy executing |
| **NullClaw** | 2 | 1 | None | 5/10 | Low activity; Dependabot PR stale 2+ months; no critical issues |
| **IronClaw** | 21 | 35 (17 closed) | None (v1.3.0 latest) | 8/10 | Strong sprint; dogfooding-driven; disciplined CI/probe culture |
| **LobsterAI** | 3 (closed via stale-bot) | 11 (10 closed) | None | 7/10 | Active merges; 3 stale-closed issues with zero maintainer response |
| **TinyClaw** | 0 | 0 | None | — | No activity in 24h |
| **Moltis** | 2 (both closed) | 10 (7 closed) | **20260824.01** | 8/10 | Productive; xAI Grok OAuth shipped; security hardening active |
| **CoPaw** | 50 | 47 | v2.1.1-beta.2 | 8/10 | High engagement; multi-agent UX pain points dominant; memory leak fixed |
| **ZeptoClaw** | 1 | 0 | None | 5/10 | Quiet; single UX enhancement request; clean backlog |
| **ZeroClaw** | 50 | 50 (5 closed) | None (v0.8.4 latest) | 7/10 | Architectural consolidation; S0 security bug open; RFC-driven |

*Health score is a qualitative assessment considering: issue-to-fix velocity, maintainer responsiveness, backlog hygiene, and release cadence.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Largest community and contributor base** — With 500 issues/PRs in 24h, OpenClaw dwarfs all peers in raw activity. The structured release-validation process (issue #125626 with 18 comments) demonstrates mature QA practices unmatched in the ecosystem.
- **Broadest provider/model coverage** — GPT-5.6 family (Sol, Terra, Luna, Ultra) support across OpenClaw and Codex runtime sets the standard for multi-provider readiness.
- **Comprehensive channel and platform support** — iOS, Telegram, Feishu, web UI, Control UI, and CDP relay for Chrome show unmatched surface area.
- **Ecosystem gravity** — As the "core reference" project (per the brief), OpenClaw's architectural decisions ripple across the landscape; several peers (NanoClaw, PicoClaw, ZeptoClaw) explicitly model their naming and structure after it.

**Technical approach differences:**
- OpenClaw emphasizes a **binding/ownership model** for multi-agent conversations (explicit `agentId` scope), where peers like CoPaw struggle with session-identity races and Hermes relies on channel bindings.
- Its **release-validation beta manifest** process (PR #128371) is unique — a formal evidence-based gating mechanism that creates a public QA artifact.
- OpenClaw's **Control UI** first-run setup (verified model setup into Custodian and optional channel onboarding) shows a focus on tiered onboarding, whereas peers like NanoBot and IronClaw are still building basic setup flows.

**Community size comparison:**
OpenClaw's 500/500 daily issue/PR volume exceeds any peer by 10× (NanoClaw and CoPaw—each ~50—are the nearest). Hermes and ZeroClaw (50/50 each) represent the second tier. This scale creates both a huge feedback corpus and a triage bottleneck: OpenClaw's P0/P1 backlog (iOS break, Skill Workshop data loss, Telegram stuck deliveries) shows the cost of scale without proportional maintainer bandwidth.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide priorities:

| Focus Area | Projects (Evidence) | Specific Needs |
|---|---|---|
| **Message Delivery Reliability** | OpenClaw (#67777 subagent loss, #126246 Telegram stuck), Hermes (#94248 gateway SIGSEGV), CoPaw (#7231 wrong-session delivery) | Durable outbound queues, retry semantics, crash recovery, delivery confirmation |
| **Session/State Persistence** | OpenClaw (#126906 memory silently disabled), Hermes (session-state fragility cluster), NanoClaw (#3508 durable coordination state), ZeroClaw (#9600 session-persistence ownership), CoPaw (#7237 session identity freeze) | Atomic state writes, restart-safe operations, cross-UI consistency |
| **Multi-Agent Orchestration** | OpenClaw (#126360 AgentSelectionRequiredError), CoPaw (#3224 Agent Teams, #6921 mid-task stops), Hermes (#85125 unified deadline layer), ZeroClaw (#10165 delegate sandbox bypass) | Ownership scoping, agent isolation, collaboration visibility, anti-hang guards |
| **Provider Portability** | OpenClaw (GPT-5.6 family, Moonshot schema issues), NanoBot (#5350 QwenCloud), Hermes (#86612 provider auto-discovery), NanoClaw (#2337/#2361 skill catalog parity), Moltis (#1240 xai-oauth) | Unified provider contracts, OAuth flows, model catalog discovery, schema normalization |
| **Cost Control & Observability** | NanoBot (#5504 retry lifecycle UI, #5510 zero-token triggers), OpenClaw (#45771 pace-aware rate limiting), Hermes (#94324 curator token burn), ZeroClaw (#10023 fallback model logging) | Per-call usage tracking, retry visibility, conditional triggers, heartbeat model override |
| **Security Hardening** | ZeroClaw (#10165 sandbox bypass, #9582 egress policy, #9977 filesystem confinement), Moltis (#1179 pairing signature verification, #1238 shared-channel tool controls), OpenClaw (#126631 sandbox root-owned workspace) | Sandbox containment, permission verification, fail-closed defaults |
| **Session/Conversation Performance** | NanoBot (#5507 FTS5 search), OpenClaw (#6757 agent-triggered compaction), Hermes (#85125 deadline layer) | Fast lookup, context compaction, timeout management |
| **Self-Hosted Infrastructure** | NullClaw (#993 Firecrawl endpoint config), OpenClaw (#45508 self-hosted STT/TTS), CoPaw (Docker marketplace), ZeroClaw (Raspberry Pi builds) | Configurable SaaS endpoints, local model support, edge deployment |
| **Windows/macOS Platform Reliability** | Hermes (5+ Windows desktop bugs), NanoClaw (macOS update defects, sqlite segfault), CoPaw (memory leak on Windows), OpenClaw (iOS break) | Platform-specific pathing, sandbox permissions, update-path correctness |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architecture Distinction |
|---|---|---|---|
| **OpenClaw** | Universal agent platform with Control UI, binding ownership | Power users, developers, multi-channel deployment | Agent bindings + explicit ownership scope; beta validation manifest process |
| **NanoBot** | Lightweight gateway with event-driven automation | Hobbyists, self-hosters, cost-conscious users | ConditionalTriggerRuntime (zero-token pre-filtering); FTS5 session search |
| **Hermes Agent** | Desktop-native agent with session grouping ("spaces") | Desktop Linux/macOS/Windows users | Desktop HUD, Spatial plugin, unified deadline layer proposal |
| **PicoClaw** | Lean Go-based agent with TUI | TUI enthusiasts, resource-constrained devices | Go single-binary; WebUI in refactoring |
| **NanoClaw** | Multi-channel agent with per-agent Slack provisioning | Team users, Slack/Mattermost-centric orgs | Per-agent provisioned Slack apps; template-driven agent creation |
| **NullClaw** | Zig-based micro-agent | Performance-sensitive self-hosters | Zig codebase, minimal footprint |
| **IronClaw** | NearAI platform agent with OOBE suggestions | AI platform users, GSuite-centric workflows | Dogfooding-driven QA; CI expedite lanes |
| **LobsterAI** | Desktop AI companion with library/artifacts | Interactive desktop users (Chinese market, NetEase) | Cross-platform thumbnails, cowork shared editing |
| **TinyClaw** | Ultra-minimal agent | Embedded/edge use cases | No activity this window |
| **Moltis** | Multi-sandbox agent (Apple, Docker, Coder) | Apple ecosystem users, security-conscious | Apple container driver; pairings with signature verification |
| **CoPaw** | Multi-agent collaboration (QwenPaw family) | Chinese-language users, multi-channel (Feishu/DingTalk) | Agent teams vision; cross-channel session identity |
| **ZeptoClaw** | CLI/REPL agent | Terminal-first users, scripters | Minimal surface area; REPL ergonomics |
| **ZeroClaw** | Security-first agent with sandboxing | Security-conscious, enterprise-evaluating users | Delegate sandbox with risk profiles; proxy strictness; WASM plugins |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (shipping multiple features/week, high community engagement):**
- **NanoBot** — 12h issue-to-ship; 3 core maintainers with clear roadmap; consolidating architecture while expanding automation.
- **NanoClaw** — 21 PRs/24h; shipped v2.3.0; executing multi-channel strategy; active macOS bugfixing.
- **IronClaw** — 17 PRs closed/24h; dogfooding-driven; disciplined CI; onboarding UX polish.

**Tier 2 — High-Velocity with Backlog Pressure (shipping but triage-constrained):**
- **OpenClaw** — Massive volume but P0/P1 backlog accumulating; release-validation process active but slow to clear.
- **CoPaw** — Fast bug-fix turnaround (memory leak, Docker marketplace); multi-agent UX pain points unresolved.
- **ZeroClaw** — RFC-driven; security hardening; decision-queue tracker signals bottleneck.
- **Hermes Agent** — Stability-hardening; fast bug→fix PR cycles but elderly feature requests aging.
- **Moltis** — Productive merges with strong security posture; smaller community but healthy.

**Tier 3 — Stabilizing/Moderate (maintenance cadence):**
- **PicoClaw** — WebUI dev in progress but stale blocking bugs (MCP hang, Slack media) unresolved.
- **LobsterAI** — Active merges but stale-closed issues with no maintainer response signal responsiveness gaps.
- **NullClaw** — Low activity; routine maintenance (Dependabot) stalled.

**Tier 4 — Quiet/Steady-State:**
- **ZeptoClaw** — Single issue, clean backlog; no active development.
- **TinyClaw** — No activity.

---

## 7. Trend Signals

### Trend 1: From "Chatbot" to "Event-Driven Agent Platform"  
**Evidence:** NanoBot's ConditionalTriggerRuntime (zero-token event pre-filtering), ZeroClaw's single-tool provider rounds RFC, NanoClaw's durable coordination state, CoPaw's Agent Teams vision.  
**Value for developers:** Agents that react to events (cron, MCP, webhooks) rather than waiting for user prompts are becoming the standard architecture. Build for event-driven patterns, not just conversational loops.

### Trend 2: Cost Visibility Is the New UX  
**Evidence:** NanoBot's retry lifecycle UI, ZeroClaw's fallback-model logging, OpenClaw's pace-aware rate limiting, Hermes' token-burn complaints, NanoBot's heartbeat model override.  
**Value for developers:** Users demand to see *where* tokens go and control *when* the LLM is invoked. Expose retry countdowns, per-attempt costs, and heartbeat model selection to build user trust.

### Trend 3: Session/State Persistence Is the #1 Reliability Battlefield  
**Evidence:** OpenClaw (#126906, #67777), Hermes (multi-P1 session-state cluster), NanoClaw (#3508), ZeroClaw (#9600), CoPaw (#7231, #7011).  
**Value for developers:** Cross-session identity confusion, lost messages, and crash-recovery gaps dominate user complaints. Atomic state writes, durable coordination, and aggressive compaction strategies differentiate reliable agents from toy demos.

### Trend 4: Security Hardening Is Moving from Nice-to-Have to Blocking  
**Evidence:** ZeroClaw's S0 sandbox bypass and egress/filesystem confinement PRs, Moltis' pairing signature verification and shared-channel tool controls, OpenClaw's sandbox root-owned workspace issue, Hermes' update-path integrity concerns.  
**Value for developers:** Sandbox containment, permission verification, and fail-closed defaults are becoming blocking requirements for enterprise evaluation. Security bugs now carry S0/S1 severity and stall feature releases.

### Trend 5: OpenAI Compatibility Is a Table-Stakes Gateway  
**Evidence:** ZeroClaw's Chat Completions RFC (#8603, 24 comments) and PR #8486, CoPaw's OpenAI Responses API video fix, NanoClaw's OpenAI-safe schemas PR.  
**Value for developers:** Users want to drop agents into existing LLM toolchains (Open WebUI, LobeChat, Continue.dev, Aider) without custom integrations. Implement OpenAI-compatible endpoints to unlock ecosystem tooling.

### Trend 6: Multi-Provider Portability Is Non-Negotiable  
**Evidence:** NanoBot's QwenCloud path bridge, Hermes' provider auto-discovery (4 new providers), Moltis' xAI Grok OAuth, NanoClaw's skill-catalog parity across providers, OpenClaw's Moonshot tool-schema normalization.  
**Value for developers:** Users refuse to be locked into a single provider. Normalize provider contracts at the wire boundary; support OAuth device-code flows; make provider-switching a config change, not a code change.

### Trend 7: Self-Hosting and Edge Deployment Grow  
**Evidence:** NullClaw's Firecrawl endpoint config, OpenClaw's self-hosted STT/TTS request, ZeroClaw's Raspberry Pi 5 builds, Moltis' Coder remote sandbox.  
**Value for developers:** Configurable SaaS endpoints, local model support, and ARM/edge builds expand the addressable market beyond cloud-connected setups.

### Trend 8: Contributor-Burnout Risk Is the Ecosystem's Silent Threat  
**Evidence:** Hermes' 4 stale PRs from contributor `kuehnberger` with zero comments, IronClaw's unanswered new-contributor PR (#7516), LobsterAI's stale-closed issues, PicoClaw's 30-day-stale Exa PR, NanoClaw's merge-order incidents.  
**Value for developers:** Maintainers who fail to triage external contributions lose their best community asset. Establish SLAs for first-response to PRs (especially first-time contributors) and visible decision-queue trackers (like ZeroClaw's #8692) to maintain contributor trust.

---

*Report compiled from community digest summaries of 13 projects in the personal AI assistant / agent open-source ecosystem for the 2026-08-25 data window. Metrics reflect issues/PRs updated in the preceding 24 hours.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-25

## 1. Today's Overview

NanoBot is in a period of **intense, sustained development**. With **26 PRs updated in the last 24 hours** (12 merged/closed, 14 open) and **8 open issues**, the project shows unusually high maintainer throughput and community engagement. The most recent batch of merged PRs focuses on **session search performance (FTS5 indexing)**, **zero-token conditional triggers**, and **unified provider usage tracking** — all signs of a project consolidating its architecture while expanding its automation and observability capabilities. Notably, three core maintainers (`chengyongru`, `yrxeva`, `Re-bin`) are driving the bulk of the activity, indicating strong ownership and a clear roadmap. No new releases were published in the last 24 hours.

## 2. Releases

No new releases published in the last 24 hours (as of 2026-08-25).

---

## 3. Project Progress

The following PRs were merged/closed in the last 24 hours. The headline story is a **three-PR architectural push toward a unified usage/observability layer**, plus **two performance features** delivered in a single day.

### Merged/Closed — Today's Wins

**🎯 Performance & Infra**

- **`#5507` — feat(session): SQLite FTS5 full-text search index for fast session search** — `yrxeva` — Closes issue `#5509`. Replaces linear JSONL scans with an SQLite FTS5 search mirror for near-instant conversation lookups, with backfill and safe fallback. *Delivered in ~12 hours from issue creation.*
- **`#5508` — feat(gateway): add ConditionalTriggerRuntime for token-free event pre-filtering** — `yrxeva` — Closes issue `#5510`. A pure-Python condition monitor that only wakes the LLM when a condition matches, saving token spend on heartbeat polling.

**📊 Unified Usage Layer (Stack: `#5480` → `#5481` → `#5518`)**

- **`#5480` — refactor(providers): define typed LLM usage contract** — `chengyongru` — Immutable typed `LLMUsage` contract across OpenAI, Anthropic, Bedrock; normalizes token/cache semantics at wire boundaries.
- **`#5481` — feat(usage): add unified provider usage backend** — `chengyongru` — One content-free usage row per retry-managed provider attempt across WebUI/TUI sessions.
- **`#5518` — fix(usage): record provider stream timing** — `chengyongru` — Isolutes TTFT and generation time per physical streaming attempt, fixing a timing-reporting gap.

> ⚠️ **Note:** The stack `#5480` → `#5481` → `#5518` represents a **cross-cutting refactor of the provider/usage contract**. While merged, this touches foundational layers; **watch for regressions in token-usage reporting** in existing installs.

**🐛 Bugfixes (Merged)**

- **`#5496` — fix(agent): time out no-tools model requests** — `chrischen-coder` — Closes a wall-clock timeout gap in `AgentRunner` where no-tools requests (malformed-call recovery, finalization) could hang turns indefinitely. *Regression fix.*
- **`#5517` — test(exec): remove Windows process timing races** — `chengyongru` — Fixes flaky Windows CI by using an explicit process root-exit handshake instead of timeout heuristics.
- **`#5506` — fix(agent): honor selected project workspace** — `Re-bin` — Exposes the WebUI-selected project as the model's CWD, closing a workspace-scope ↔ system-prompt seam.

---

## 4. Community Hot Topics

*Most-commented/reactive Issues and PRs in the last 24h:*

**#1 — `#5350` [ENHANCEMENT] QwenCloud provider path alongside DashScope** — *2 comments, open 13 days*
- Author: `evelyn-jialin-zhang` | [Issue #5350](https://github.com/HKUDS/nanobot/issues/5350)
- **Why it's hot:** Oldest open issue still active; a user/provider request for a **backward-compatible bridge** to QwenCloud while keeping DashScope (legacy international) configs alive. Demand for dual-path provider support signals **enterprise migration pain**.

**#2 — `#5512` [BUG] WebUI stalls in spinning state after Gateway restart** — *1 comment*
- Author: `yrxeva` | [Issue #5512](https://github.com/HKUDS/nanobot/issues/5512)
- **Why it's hot:** Critical UX regression. Fix PR `#5514` landed the same day — **this was the fastest bug→fix turnaround of the week**.

**#3 — `#5504` [PR] surface model retry lifecycle events in UI** — `chengyongru`
- [PR #5504](https://github.com/HKUDS/nanobot/pull/5504) — Pulls retry countdown/attempt progress into TUI and WebUI. Community demand for **transparent retry/fallback UX** is clear.

> **Underlying need analysis:** The three hottest threads (QwenCloud path, provider retry visibility, conditional triggers) all point to one theme: **production-grade operations** — multi-provider portability, failure visibility, and cost control.

---

## 5. Bugs & Stability

*Issues reported/active in last 24h, ranked by severity:*

| # | Issue | Severity | Status | Fix PR |
|---|-------|----------|--------|--------|
| 1 | `#5512` WebUI infinite spinner after Gateway restart (missing `goal_status: idle`) | **High** (hang-like UX) | Open | `#5514` — Open |
| 2 | `#5516` Telegram: rich messages never render when streaming enabled (legacy HTML fallback) | **Medium** (feature broken) | Open | *none yet* |
| 3 | `#5349` Tests fail deterministically in 5-hour daily window due to UTC vs. local timezone | **Low-Med** (CI flake, wrong output) | Open (PR `#5349` open) | `#5349` — Open |

**Recently merged bugfixes worth noting** (from Section 3): `#5496` (no-tools timeout gap) and `#5517` (Windows CI race). Both are stability-positive.

**⚠️ Watch item:** `#5518` modified usage timings — verify token-usage reporting accuracy after update.

---

## 6. Feature Requests & Roadmap Signals

*Strong signals for the next NanoBot version:*

| Feature | Source | Signal Strength | Prediction |
|---------|--------|-----------------|------------|
| **SQLite FTS5 session search index** | Issue `#5509` → Merged `#5507` | ✅ Shipped | vNext **includes** FTS5 search |
| **ConditionalTriggerRuntime (zero-token automation)** | Issue `#5510` → Merged `#5508` | ✅ Shipped | vNext **includes** conditional triggers |
| **QwenCloud provider path alias** | Issue `#5350` (2 comments, 13d old) | 🟡 Active, needs maintainer response | Likely vNext — backward-compatible alias |
| **Crash-safe task ledger (`tasks.json` atomic writes)** | Issue `#5511` | 🟢 New (24h) | Possible vNext — pairs with FTS5/trigger work |
| **Cron routing to configurable channels** | Issue `#5513` | 🟢 New (24h) | Likely vNext — follows trigger runtime |
| **AnySearch web-search provider** | Issue `#5505` | 🟢 New (24h), vendor-backed (PR promised) | Possible vNext — key-optional anonymous quota |

**Trend:** NanoBot is evolving from a simple chat gateway into an **event-driven agent platform** (triggers → tasks → search → routing). The merge velocity on this track (2/2 merged in 24h) confirms it's the **#1 roadmap priority**.

---

## 7. User Feedback Summary

**Distinct pain points raised this week (from issues):**

- 🔴 **"Agent resets are expensive"** — `#5510` & `#5511`: Two independent issue authors flag that Gateway restarts lose task state and that recurrent automation burns tokens on every tick. This is the **most common operational complaint** this week (cost + fragility).
- 🟡 **"Search is too slow at scale"** — `#5509`: Explicit "slow with hundreds of sessions" → addressed by FTS5 merge (shipped).
- 🟡 **"Telegram rich content is silently degraded"** — `#5516`: Mentions `rich_messages: true` vs `streaming: true` being mutually exclusive (a regression from `#4488`/`#4539` opt-in work).
- 🟢 **Provider fragmentation** — `#5350` (QwenCloud) and `#5505` (AnySearch): Users/vendors want **more pluggable providers** without losing existing configs.

**Satisfaction signals:** The **24-hour bug-to-fix cycle** on `#5512`→`#5514` and the **12-hour issue-to-ship** on `#5509`→`#5507` indicate a **highly responsive maintainer team** — a strong positive for contributor retention.

---

## 8. Backlog Watch

*Items that need maintainer attention (no recent activity or open beyond expected):*

| Item | Type | Age | Last Activity | Why It Matters |
|------|------|-----|---------------|----------------|
| **`#5344`** — fix(agent): warn on repeated identical tool calls | PR | 14 days | 2026-08-24 | Loop detection is **still open**. Stuck agents burning `max_iterations` silently is a top P2 UX bug. Needs review/merge. |
| **`#5349`** — fix(tests): pass `timezone_name` in settings tests | PR | 13 days | 2026-08-24 | Fixes deterministic 5-hour CI window failure. **CI stability debt.** |
| **`#5291`** — fix(agent): persist subagent conversation transcripts | PR | 18 days | 2026-08-24 | Subagent runs still leave **no trace**. Review is pending. |
| **`#4549`** — feat(heartbeat): model_override config for cheaper heartbeat model | PR | 60 days | 2026-08-24 | **The longest-open feature PR** (2 months). Cost-saving feature; conflicts/priority P2. Maintainer decision needed. |
| **`#5430`** — fix(agent): release completed task groups | PR | 7 days | 2026-08-24 | Memory-leak of empty task sets. Low-risk fix; needs merge. |

**⚠️ Maintainer-critical:** `#4549` (heartbeat model override, 60 days open) and `#5344` (tool-call loop detection, 14 days) are the items most likely to draw community frustration if left unattended — both are **cost/stability features users directly feel**.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-08-25

---

## 1. Today's Overview

Hermes Agent is experiencing a period of high activity with **50 issues** and **50 PRs** updated in the last 24 hours, though the project is clearly in a **stability-hardening phase** — the majority of new filings are `type/bug` with a strong emphasis on session state, desktop platform quirks, and gateway message-delivery integrity. The maintainer community is responding quickly, as evidenced by **multiple fix PRs filed within hours of their corresponding issue reports** (e.g., #94324→#94326/94330, #94328→#94329, #94319→#94332). **No new releases** were cut today; the last known version in circulation is v0.20.5. The biggest architectural conversation is a proposed **"unified deadline layer"** (#85125) aimed at systematically eradicating the project's 400+ timeout/hang bug backlog, signaling maintainers are shifting from patching symptoms to structural fixes.

---

## 2. Releases

**No new releases published in the last 24 hours.** The most recent version referenced in the issue tracker is **v0.20.5 (2026.8.19)**.

---

## 3. Project Progress

**Merged/Closed PRs (5 total):** The following PRs were closed or merged in the last day:

- **#60087** (CLOSED) — `feat(guardrails)`: Added a content-only repetition guard to detect tool-call loops where arguments vary but results never change. This strengthens anti-hang protections beyond signature-based detection.
- **#94333** (CLOSED) — `fix(desktop)`: Fixed HUD (Heads-Up Display) mode where the frost band went white-on-white during agent thinking, and improved enumeration logging for why the HUD cannot see background windows.
- **#87495** (CLOSED) — `feat(desktop)`: Added **Spatial** runtime plugin — an infinite pan/zoom canvas for project visualization, filtering, and drill-in/back with theme-token inheritance.
- **#59499** (CLOSED, issue referenced) — Kanban dispatcher `max_in_progress_per_profile` concurrency bug is now resolved (marked `sweeper:implemented-on-main`).
- **#92701** (CLOSED, issue referenced) — Docker backend exit 125 "too many colons" bug from unsanitized `task_id` is fixed.

**Notable Open PRs Advancing Today:**
- **#91248** — Session grouping into channel-bindable "spaces" (backend-owned, shared across Desktop/CLI) is actively iterating.
- **#86578 / #87302 / #86612** — A batch of developer-experience features from contributor `kuehnberger`: Anthropic prompt-cache signature tests, API response dumps alongside requests (`HERMES_DUMP_REQUESTS`), and auto-discovery for four new LLM providers (Mistral, Cohere, DeepInfra, SiliconFlow).

---

## 4. Community Hot Topics

The most active conversation by far is a structural architecture proposal:

- **[#85125 — Tracking: unified deadline layer (20 comments)](https://github.com/NousResearch/hermes-agent/issues/85125)** — This is the most strategically significant open thread. The author analyzed 400+ timeout/hang bugs and proposes a 4-phase architectural fix (unified timeout layer across tools, agents, and I/O). It has `needs-decision` label, and its proposal to eliminate entire bug classes is likely to influence the next major release's roadmap.

- **[#66616 — Skills index stale/degraded (91 comments)](https://github.com/NousResearch/hermes-agent/issues/66616)** — This automated freshness probe failure has become a long-running community magnet. While it appears to be a CI/CD pipeline issue (the `/docs/skills` index not rebuilding on time), the volume of comments suggests the community is invested in the Skills Hub's reliability as a primary documentation surface.

- **[#25833 — Self-created skills lack correctness guarantees (10 comments)](https://github.com/NousResearch/hermes-agent/issues/25833)** — Continues as a recurring theme: the skill auto-creation loop works, but users worry about consistency and verification of agent-generated skills.

- **[#90229 & #91245 — Desktop file tree stuck on skeleton (6+2 comments)](https://github.com/NousResearch/hermes-agent/issues/90229)** — Two separate reports of the same Windows boot bug; a clear UX pain point.

---

## 5. Bugs & Stability

**Critical (P1, 3 new today):**

- **[#94248 — Gateway SIGSEGV on macOS arm64 after delegate deadlines](https://github.com/NousResearch/hermes-agent/issues/94248)** — Crashes 17-72ms after 600s delegate worker deadlines during Codex SSL reads. 12 crash reports since Aug 19. **No fix PR yet.**

- **[#92145 — `hermes update` leaves stale `sys.modules` after failed restart](https://github.com/NousResearch/hermes-agent/issues/92145)** — An ImportError during auto-restart can strand running services on stale code. **No fix PR yet.**

- **[#94264 — Update restores invalid Python, reports success, remote lockout](https://github.com/NousResearch/hermes-agent/issues/94264)** — Related to #92145; update path can report success while every agent turn fails. **No fix PR yet.**

**High (P2, 10+ new today):**

- **Session-state cluster:** #94258 (SQLite transient NULL SystemError), #93888 (Desktop sends local runtime ID to remote gateway), #81051 (OAuth MCP connection "parked" permanently after lock race).
- **Recurring read-before-write bug:** **[#94324 — Curator guard never passes](https://github.com/NousResearch/hermes-agent/issues/94324)** — This breaks the background curator's ability to improve existing skills, burning tokens on retries. **Two duplicate fix PRs exist: #94326 and #94330** — a signal the maintainer team is converging on a fix.
- **Media duplication:** [#94328 — MEDIA tag sent twice when path has spaces](https://github.com/NousResearch/hermes-agent/issues/94328). **Fix PR #94329 filed same day.**

**Notable New Windows-Specific P2s:**
- #94304 — Terminal tool `init_session` hangs under `hermes acp` on Windows.
- #93981 — Desktop chat fails with non-loopback `dashboard.public_url`.
- #94058 — Linux desktop entry resolves venv symlink to bare interpreter.

---

## 6. Feature Requests & Roadmap Signals

**Most Likely in Next Release (`v0.21.x`):**

1. **Unified Deadline Layer (#85125)** — The `needs-decision` label and 20 comments suggest this is being actively debated; expect an RFC or implementation plan soon.
2. **Session Spaces (PR #91248)** — Backend-owned channel-bindable session grouping appears close to merge.
3. **Provider Registry Expansion (PR #86612)** — Low-risk, high-value additions (Mistral, Cohere, DeepInfra, SiliconFlow) are likely to land soon.
4. **API Response Dump (PR #87302)** — Debugging aid likely to merge; complements existing request dumps.

**Medium-Term Signals:**
- **Skills correctness guarantees (#25833)** — Mechanism-level validation for self-created skills is a repeated community ask.
- **Autoresearch skill (#5114)** — Autonomous git-based experiment loops for ML optimization remain requested.
- **i18n for gateway messages (#79757)** — Telegram/Discord/WhatsApp users want localized busy-ack messages.
- **Desktop browser element picker (RFC #90654)** — Closing the loop on the in-app browser for agent-in-the-page interactions.

---

## 7. User Feedback Summary

**Strongest Positive Signals:**
- Community contributors are actively filing **fix PRs immediately after reporting bugs** (e.g., #94329→#94328, #94326/#94330→#94324), indicating a healthy contributor-maintainer feedback loop.
- The "Spatial plugin" merge (#87495) suggests users value rich desktop visualization surfaces.

**Pain Points & Frustrations:**

- **Windows Desktop reliability is the #1 complaint cluster:** 5+ distinct bugs (file tree skeleton, maximize/restore loops, launcher crashes, right-rail dead at boot) surfaced in the last 2 days. Windows users are clearly a large segment.
- **Session state fragility after upgrades/gateway restarts** — multiple P1/P2s about lost sessions, stale state, and remote gateway mismatches suggest the persistence layer is a soft spot.
- **Background curator token burn (#94324)** — Users explicitly noted it "spams WARNING logs, and burns tokens" on every post-turn review.
- **"Duplicate message" issues** — Both Slack streaming (#93648) and MEDIA attachments (#94328) trigger user confusion about whether the duplication is "expected."

---

## 8. Backlog Watch

**Long-Open Issues Needing Maintainer Attention:**

- **[#66616 — Skills index "degraded" (91 comments, open 38 days)](https://github.com/NousResearch/hermes-agent/issues/66616)** — The high comment count but `P3` priority suggests it's a known annoyance; the underlying cron job reliability should be prioritized.

- **[#25833 — Skills correctness guarantees (open 103 days)](https://github.com/NousResearch/hermes-agent/issues/25833)** — 10 comments, `needs-decision` label, no resolution or clear roadmap.

- **[#5114 — Autoresearch skill (open 143 days)](https://github.com/NousResearch/hermes-agent/issues/5114)** — First requested in April; still no official response captured.

- **[#43731 — Honcho one-time migration re-runs (open 76 days)](https://github.com/NousResearch/hermes-agent/issues/43731)** — Duplicate facts flooding the deriver; impacts memory quality but has only 6 comments.

**Open PRs With No Recent Maintainer Activity:**
- **[#86578](https://github.com/NousResearch/hermes-agent/pull/86578), #87302, #86612** — Contributor `kuehnberger` has submitted three well-tested PRs (Aug 15) that remain open with zero comments. These are low-risk improvements that merit maintainer triage to avoid contributor burnout.

---

**Overall Health Assessment:** The project is in a **high-velocity stabilization sprint** — bugs are being filed and fixed at a remarkable pace, but the volume of P1/P2 session-state and Windows-specific defects suggests `v0.20.5` was released with outstanding stability debt. The community is engaged and helpful, though the backlog of "old" feature requests suggests maintainer bandwidth is concentrated on triage over long-term feature planning. The proposed unified deadline layer (#85125) is a promising sign that the root causes are being acknowledged at the architectural level.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-25

## 1. Today's Overview

PicoClaw shows **moderate activity** over the last 24 hours, with 3 issues and 3 pull requests touched. The project is in a **transitional phase** — the highest-priority open feature (WebUI support, #806) is noted as "Refactoring now," indicating active development work on the user interface front. No new releases were published during this window. Maintenance activity consists of two long-pending PRs finally being closed, demonstrating backlog clearing effort. However, two stale blocking bugs (MCP hang, Slack media upload) remain open, suggesting attention may be split between new development and stability fixes.

## 2. Releases

**No new releases** were published in the last 24 hours. The last known version referenced in issue reports is `picoclaw 0.3.x` (from #3338). No release notes, changelogs, or migration guides are available for this digest period.

## 3. Project Progress

Two pull requests were **closed/merged** across the last 24 hours, representing significant backlog maintenance:

- **[PR #1929 — fix: apply security credentials before config validation in web handlers](https://github.com/sipeed/picoclaw/pull/1929)** *(closed, type: bug, domain: config/go)* — This fix addresses a configuration-save validation failure in the web launcher. The root cause was that `validateConfig()` checked security-managed private fields (e.g., `Pico.Token`) before credentials from `.security.yml` were applied, resulting in false "token is required" errors even when tokens were properly stored. This is an important UX fix for web-based configuration workflows. *(Authored by KristjanKruusRIA)*

- **[PR #1551 — fix: merge PR #1428 #1422 #1417](https://github.com/sipeed/picoclaw/pull/1551)** *(closed)* — A consolidated merge incorporating fixes from three separate open PRs (#1428, #1422, #1417). This batch-merging approach suggests accumulated independent fixes were combined, likely containing one or more previously outstanding bug fixes. *(Authored by xuwei-xy)*

The **open PR** status is unchanged for the Exa web search provider (see Backlog Watch).

## 4. Community Hot Topics

The most active discussion this period centers around a **long-running feature request**:

- **[Issue #806 — [Feature]: Add webUI support (Refactoring now)](https://github.com/sipeed/picoclaw/issues/806)** — ⭐ **Most active** | 10 comments | 8 👍 reactions | High priority & roadmap-labeled
  - Status: Open; had activity as recently as 2026-08-24 (24h before digest).
  - **Analysis:** This is a clear **signal of strong community demand for non-technical user access**. The issue explicitly states the goal: lowering the entry barrier for "non-tech" users who are intimidated by TUI. The fact that it carries both `priority: high` and `type: roadmap` labels, and has seen recent activity, suggests **active development is underway** — the "Refactoring now" parenthetical indicates code changes are in progress. The 8 👍 over 6 months shows sustained but not explosive interest, it's a priority item rather than a viral feature request.

- **[Issue #3269 — MCP server connection failure causes agent loop hang](https://github.com/sipeed/picoclaw/issues/3269)** — 7 comments | 1 👍
  - Remains a reproducible-blocking issue for nightly users (see Bugs & Stability section).
  - **Analysis:** The comment count signals engaged debugging from both maintainers and users, but staleness indicates no resolution has landed. This issue likely represents a frequency-of-occurrence pain point for API-connected users over a niche concern.

## 5. Bugs & Stability

Two active bugs are in public view, ranked by severity:

**🐛 HIGH SEVERITY — [Issue #3269: Agent loop hangs on MCP server connection failure](https://github.com/sipeed/picoclaw/issues/3269)** *(stale, updated 2026-08-25, 7 comments)*

> *Symptom:* When the MCP server connection fails, the agent loop freezes, and the PicoClaw chat interface **stops replying entirely** — a complete blocking failure for affected users.
> *Environment:* nightly build (`2cf030d2`), Go 1.25.11, Qwen3 model.
> *Impact:* Total service unavailability for chat; no graceful degradation or error surfaced to the user.
> *Fix Status:* **NO FIX AVAILABLE** — no PR links in the issue.
> *Duration:* Open since 2026-07-20 (5+ weeks), marked stale.

**🐛 MODERATE SEVERITY — [Issue #3338: Slack does not attach image media content](https://github.com/sipeed/picoclaw/issues/3338)** *(stale, updated 2026-08-24, 1 comment)*

> *Symptom:* All Slack media uploads fail with `file.upload.v2: file size cannot be 0`. The `SendMedia` function builds `slack.UploadFileParameters` **without setting `FileSize`**, causing the slack-go SDK to reject every upload pre-network.
> *Environment:* picoclaw 0.3.x.
> *Impact:* Predictable, 100% failure for unknown-to-bug-report media attachment with Slack integration; deterministic and easily patchable.
> *Fix Status:* **NO FIX AVAILABLE** — no linked PR.
> *Duration:* Open since 2026-08-17 (8 days), marked stale.

The fact that both are stale while maintainers are focused on WebUI "Refactoring now" activities indicates that **stability bugs may be receiving lower priority** than new user-facing features at this time.

## 6. Feature Requests & Roadmap Signals

**Primary in-progress request:**

- **[Issue #806: Web UI support](https://github.com/sipeed/picoclaw/issues/806)** — The largest, most visible feature request (8 👍) with explicit `priority: high` and `type: roadmap` labels. The "Refactoring now" status indicates this is **very likely the next major user-facing version feature**. Expected in the next stable release following current refactoring work.

**In review but pending:**

- **[PR #3299: Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** *(open, stale since 2026-07-26)* — Implements Exa as a native `tools.web` / `web_search` provider with full API support (`type: "auto"`, `contents.highlights`, `X-Api-Key` auth, plus `d`/`w`/`m`/`y` date-range filters). This is a **feature-addition request by the community** (author: kesku) rather than a maintainer-driven change. It provides a search-provider alternative to the existing stack and has config-related additions implied. The staleness (30 days without update) suggests review has stalled, despite viability. If merged, this would expand PicoClaw's web-search capability — a frequent community extension axis.

**Prediction:** WebUI (from #806) will be the headline of the next minor release. The Exa provider PR (#3299) could slate into the same release if a maintainer review is scheduled soon; otherwise it risks being dropped.

## 7. User Feedback Summary

Real user pain points and use cases from the recent data:

- **WebUI desire (positive demand signal):** Users want a browser-based interface for managing PicoClaw instances, not just terminal access (#806). This indicates the current onboarding friction is a barrier to onboarding non-technical users. The motivation showcases a **growing user base that values accessibility over power features**.
- **Frustration with MCP-related stalls (pain point):** Nightly users report the system becoming unresponsive, with the chat interface appearing dead after MCP connection failures (#3269). The **"hang" condition is a trust-damaging bug** — no error message, no retry — users are left wondering if the system is broken vs. simply degraded.
- **Slack channel bug (pain point):** A deterministic media-upload failure on Slack (#3338) blocks a **concrete, easy use case**: sharing images through the channel. This is a functionality gap with an obvious fix path (setting `FileSize`), representing low-hanging fruit for maintainers.
- **Satisfaction trend:** The comment and reaction counts on the WebUI request (#806: 10 comments, 8 👍) compared to lower engagement on bug reports (#3269: 7 comments, 1 👍) hints that while users are vocal about what they **want to build next**, they are relatively quiet (but still impacted) about the current issues — possibly indicating a user acceptance of nightly-build breakage.

## 8. Backlog Watch

Items needing maintainer attention but showing no recent activity:

- **[PR #3299 — Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — ⛔ **30 days stale** (last activity 2026-07-26). The PR is well-scoped with a clear description, but zero maintainer comments. Server-side code review is necessary to either merge or request changes. ❗ This is the most viable open PR and its staleness looks like a missed opportunity.

- **[Issue #3269 — MCP server hang](https://github.com/sipeed/picoclaw/issues/3269)** — ⛔ **36 days stale** (last activity 2026-08-25; open since 07-20). While the issue is fresh in timeline today (last update), the *comments* stopped earlier. The bug blocks chat interfaces entirely for affected setups and is a **reproducibility goldmine** for a strong maintainer fix. Prioritize surfacing to maintainers.

- **[Issue #806 — WebUI (refactoring in progress)](https://github.com/sipeed/picoclaw/issues/806)** — ⚠️ Not stale, actively dev-driven, but needs **visibility of progress**. Since it's "Refactoring now," it may not need a lot of attention right now, but the community continues to +1 it; a progress update comment on the issue (even a brief one) would be valuable.

- **[Issue #3338 — Slack media upload fails](https://github.com/sipeed/picoclaw/issues/3338)** — ⛔ 8 days stale, technically not yet at the 30-day stale threshold, but no maintainer response in comments. Tiny fix, visible impact — a good candidate for a "good first issue" label or quick patch.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-25

## 1. Today's Overview

NanoClaw is in a high-velocity integration and hardening phase, with 21 PRs touched in the last 24 hours and a new v2.3.0 release featuring a significant Slack experience overhaul. Activity is concentrated on channel integrations (Mattermost, Dial, Telegram), the update/transaction controller, and foundational infrastructure (durable coordination state, Apple Container driver). The project is clearly executing on multi-channel strategy and reliability improvements, with several long-running provider-parity PRs (Codex, skill catalog) still in flight. Health signals are strong: active community contributions, systematic bug-fixing (especially around macOS), and clear architectural direction. The new Slack release gate marks a deliberate product evolution decision point.

## 2. Releases

**v2.3.0** — Slack Experience Overhaul (Breaking: Decision Gate, Not Forced Migration)

- **New:** Per-agent provisioned Slack apps; agent spawning directly from Slack; significant UX improvements
- **Breaking:** Existing single-bot Slack installs are asked to make a decision about the new model — **classic Slack continues to work unchanged**, so no immediate action is required
- **Migration:** New installs and non-Slack integrations are unaffected; the gate is an explicit choice for existing users, not a forced migration
- **Context:** This aligns with the broader push toward per-agent provisioning (see PR #3428 carrying template refs through Slack creation) and suggests a more distributed, template-driven agent management model

## 3. Project Progress

**Merged/Closed (3 total):**

- **#2767 (Issue, closed):** Telegram legacy-Markdown sanitizer obsoleted by `@chat-adapter/telegram@4.30.0` (native MarkdownV2) — upstream fix, so the workaround can be removed
- **#2474 (PR, closed):** AI-coding-CLI picker — setup flow can delegate to Claude Code or OpenAI Codex with a registry framework for future providers
- **#2475 (PR, closed):** Codex agents now see the same persona + skill catalog as Claude agents, making provider switching a config change

**Feature advancement (open PRs):**

- **#3508:** Durable host-coordination state — critical groundwork for restart safety (approval waiters, delivery retry counts, stop/respawn intent)
- **#3502/#3507:** Mattermost via NanoCo Chat SDK adapter + installation skill
- **#3503:** Apple Container session driver (macOS microVMs) — first overlay for the new driver seam
- **#3396/#3428:** Template-based agent creation in chat, carried end-to-end through Slack flow
- **#3501:** Dial channel now documented in README/changelog (in setup picker since #3050)

## 4. Community Hot Topics

The most active threads (by comment count, tied at ~0-1 comments each) cluster around **reliability and platform correctness**:

- **#3508 (PR):** Durable host-coordination state — the most architecturally significant open PR; addresses restart safety, poison-message retry loops, and stale finish-intent. Signals community concern about production resilience.
- **#2361 (PR, open since May 9):** Tightening Codex provider contracts — long-running effort to align with current Codex CLI JSON-RPC; indicates sustained interest in multi-provider support
- **#2337 (PR, open since May 7):** Surfacing Claude Code skill catalog to non-Claude providers — paired with #2361, community wants provider-agnostic skill reuse
- **#3497 (Issue):** `better-sqlite3` segfault on older Node 22 — environment pain point affecting setup reliability

**Underlying needs:** Production hardening (crash recovery, retry semantics), provider flexibility (Codex, non-Claude), and smooth onboarding across OS/platforms.

## 5. Bugs & Stability

Ranked by impact severity:

1. **HIGH — better-sqlite3 segfault on Node 22 < 22.14.0 (macOS)** — [Issue #3497](https://github.com/nanocoai/nanoclaw/issues/3497). `new Database()` crashes; declared floor `>=22` passes checks, then install has no database layer. No test can complete. **Mitigation:** Should either raise floor to `>=22.14.0` or add runtime version check. No PR filed yet.

2. **MEDIUM — Telegram legacy-Markdown sanitizer obsolete** — [Issue #2767](https://github.com/nanocoai/nanoclaw/issues/2767) (closed). Upstream adapter now resolves MarkdownV2 natively; workaround can be removed. Likely cleanup PR follows.

3. **MEDIUM — Update controller incorrect on macOS, six defects** — [PR #3506](https://github.com/nanocoai/nanoclaw/pull/3506) (open). Fixes symlink comparisons, path resolution, and shared-code defect affecting Linux fallback. All defects hit live on real macOS installs.

4. **MEDIUM — Update controller path comparisons fail with symlinks** — [PR #3499](https://github.com/nanocoai/nanoclaw/pull/3499) (open). Companion to #3506; resolves symlinks before comparing paths.

5. **LOW — Attachments not routed through selected mailbox mounts** — [PR #3505](https://github.com/nanocoai/nanoclaw/pull/3505) (open). Fix in review.

6. **LOW — OneCLI gateway default bind address incorrect** — [PR #3302](https://github.com/nanocoai/nanoclaw/pull/3302) (open, since Aug 17). Fixes #2903; gateway's docker-compose never receives discovered bind address.

## 6. Feature Requests & Roadmap Signals

Strong signals for the next release cycle:

- **Apple Container session driver** (#3503) — macOS microVMs as runtime overlay; enables isolated, Apple-silicon-native agent sessions
- **Mattermost channel support** (#3502/#3507) — enterprise chat platform demand; install skill + SDK adapter
- **Template-based agent creation from chat** (#3396/#3428) — user-facing feature making agent creation dynamic via `create_agent(template=...)` with registry lookup
- **Durable coordination state** (#3508) — architectural enabler for restart-safe operations; likely prerequisite for autoscaling/HA features
- **Skill catalog parity across providers** (#2337/#2361) — making skills portable means agents can move between Claude/Codex without rewriting content
- **Codex provider contract alignment** (#2361) — signals enterprise OpenAI/Codex users are evaluating NanoClaw

**Prediction:** v2.4.0 likely lands Mattermost, Apple Container driver, and the durable-state groundwork; template-driven agent creation may land as experimental (given #3428 supersedes an earlier attempt).

## 7. User Feedback Summary

- **Pain point — macOS update/reliability:** Multiple PRs (#3506, #3499, #3504) and the sqlite segfault issue indicate macOS users are actively hitting update-path bugs. One contributor notes all six defects were "hit live while updating a real macOS install," suggesting systemic fragility in the macOS update path that is now getting dedicated attention.
- **Pain point — silent setup failures:** The sqlite segfault (#3497) leaves an install with no working database and no clear error; comments note "an affected Node passes every check." Users want better runtime validation.
- **Positive — active contributor ecosystem:** 21 PRs in 24h, many with detailed contributing-guide compliance; releases shipping with clear decision gates rather than forced migrations. The "classic Slack keeps working" approach was explicitly framed as respectful of existing users.
- **Use-case signal — template reproducibility:** PR #3504 reconciles 7 locally-committed-unpushed branches against diverged main; 20 commits in independently buildable chunks. Indicates users are maintaining parallel workstreams and need better merge/rebase tooling or documentation.

## 8. Backlog Watch

Items needing maintainer attention (stale or high-value with no recent movement):

- **#2361 (PR, open since May 9):** Codex provider contract tightening — 3.5 months stale, but foundational for Codex parity. Needs rebase and review.
- **#2337 (PR, open since May 7):** Skill catalog for non-Claude providers — companion to #2361; both touch `agent-runner/src/providers/`, likely merge-order-sensitive.
- **#3302 (PR, open since Aug 17):** OneCLI gateway bind fix — addresses #2903; fix is small but has been open a week with no review activity. Gateway configuration bugs affect production installs.
- **#3497 (Issue, new):** sqlite segfault — needs immediate triage and likely a follow-up PR to raise Node floor or add runtime checks. High severity, no fix PR referenced yet.
- **#3396 (PR, open since Aug 20):** Template-based agent creation — core feature, but #3428 was noted as "superseding" an earlier attempt (#3397) that was merged ahead of order and reverted. These need coordinated review to avoid another merge-order incident.

**Maintainer attention priority:** #3497 (urgent), then #3302 (small, stale), then the Codex pair (#2361/#2337) before they drift further from trunk.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Based on the provided GitHub data for NullClaw on 2026-08-25, here is the project digest.

---

# NullClaw Project Digest | 2026-08-25

## 1. Today's Overview
NullClaw is currently in a **low-activity maintenance phase**, with only 3 total items updated in the last 24 hours (2 open issues, 1 open PR) and no new releases. The primary driver of activity is a dependency bump PR from Dependabot that has been lingering since June, suggesting maintainers may be prioritizing other tasks or facing review bottlenecks. The two new issues focus on **configuration flexibility** (self-hosted support) and **user-facing documentation/visibility** (pairing codes), indicating that while the codebase is stable, there is external pressure to improve deployment UX and debuggability. There are no signs of critical failures or regressions today.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
- **No PRs were merged or closed** in the last 24 hours.
- **Open PR [#956](https://github.com/nullclaw/nullclaw/pull/956) (dependencies/docker):** Dependabot has proposed bumping the base Docker image `alpine` from 3.23 to 3.24. While not merged, this is a standard security/stability refresh. The fact that it has been open since **June 15** (over 2 months) is a concerning signal regarding maintainer response time to routine maintenance.

## 4. Community Hot Topics
With no comments or reactions on the current issues, there is no "hot" thread based on engagement metrics. However, the opening of these two issues signals significant underlying user needs:

- **[Issue #992](https://github.com/nullclaw/nullclaw/issues/992) (Bug/UX):** A user is frustrated by the inability to retrieve a 6-digit pairing code for the Gateway API. This stems from a previous change (#535) that hid the token from stdout. The discussion implies a need for **clearer setup instructions** or a **fallback retrieval mechanism**.
- **[Issue #993](https://github.com/nullclaw/nullclaw/issues/993) (Enhancement):** A request to make the Firecrawl API endpoint configurable. This highlights a growing demand for **self-hosted infrastructure compatibility** rather than relying solely on cloud SaaS defaults.

## 5. Bugs & Stability
- **[Issue #992](https://github.com/nullclaw/nullclaw/issues/992) — Severity: Medium (Usability/Blocking).** The inability to view the pairing code prevents users from configuring the Gateway API, effectively blocking a setup path. While not a runtime crash, it is a **procedural regression** caused by a prior change (#535). There is currently **no fix PR** associated with this issue.

## 6. Feature Requests & Roadmap Signals
- **Self-Hosting Configuration (Issue [#993](https://github.com/nullclaw/nullclaw/issues/993)):** The request to make the Firecrawl endpoint configurable suggests a roadmap shift toward **enterprise/private deployments**. Given the explicit mention of `self-hosted`, it is highly likely that a configuration parameter (e.g., environment variable) will be introduced in the next minor release in the `src/tools/web_search_providers/firecrawl.zig` module.
- **Observability/UX (Issue [#992](https://github.com/nullclaw/nullclaw/issues/992)):** While framed as a bug, the underlying request is for a better onboarding experience. This might lead to a CLI flag like `--show-pairing-code` or logging to a file in a future patch.

## 7. User Feedback Summary
- **Pain Point:** Users are confused by the authentication/setup process. The change in Issue #535 that silenced the output was well-intentioned (security) but removed a necessary visibility tool for users, causing friction.
- **Use Case:** There is a clear, active user base attempting to run NullClaw in **self-hosted or custom environments** (implied by the Firecrawl request). They require the tool to be flexible enough to integrate with their existing infra, not just the default public APIs.

## 8. Backlog Watch
- **PR [#956](https://github.com/nullclaw/nullclaw/pull/956) (Alpine bump):** This routine dependency update has been waiting for review for over two months. **Action Needed:** This should be triaged and merged to ensure the Docker images remain secure and up-to-date, unless there is a specific reason to pin the version.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-25

## 1. Today's Overview

IronClaw shows strong development momentum with **21 issues and 35 PRs updated in the last 24 hours**, indicating a highly active engineering cycle. The project appears to be in a **consolidation and hardening phase**, with significant effort concentrated on CI infrastructure (T1–T4 expedite lanes), onboarding suggestion UX polish, and addressing a cluster of Telegram personal-account linking bugs. A weekly dogfooding/QA epic rotated (closing the 08/17–08/23 cycle and opening 08/24–08/30), which is driving a steady stream of bug reports and targeted fixes — roughly **half of the closed items (9 of 21) landed as fixes or completed refactors** in this window. Notably, the T1 CI work encountered repeated E2E failures on the Windows/WebUI lanes, prompting disciplined bisect and probe PRs — a sign of a mature team that isolates regressions before merging. No new releases were cut in this period.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent tagged version referenced in issues is **IronClaw 1.3.0** (deployed at `70795c16ed0cec21eb8cba16d2dcf851d25dc83d`), with milestone-labeled work targeting **v1.4.0** (e.g., issue #7849).

---

## 3. Project Progress

Seventeen PRs were merged or closed in the last 24 hours. Key completed work includes:

- **[#7833 — Suggestion generation reads user's connected tools](https://github.com/nearai/ironclaw/issues/7833)** — Closed "[#7812: Onboarding suggestions respect user-level tool permissions](https://github.com/nearai/ironclaw/issues/7812)". Suggestion cards are now grounded in the user's actual connected data (e.g., Gmail) under read-only, no-approval constraints, rather than hardcoded internal tools.
- **[#7821 — Single setup-rust CI composite action (T1)](https://github.com/nearai/ironclaw/pull/7821)** — Closed "[#7798: CI expedite T1](https://github.com/nearai/ironclaw/issues/7798)". Consolidated 43 scattered `dtolnay/rust-toolchain` invocations across 12 workflows into one composite action with pinned toolchain, `mold` linker, and centralized build profiles.
- **[#7857 — Fix conversations refresh after starting a suggestion](https://github.com/nearai/ironclaw/pull/7857)** — Closed "[#7845: Suggested task doesn't create thread entry](https://github.com/nearai/ironclaw/issues/7845)". Adds refresh to the non-polling conversations query post-thread creation.
- **[#7854 — Removed Gateway v2 login eyebrow](https://github.com/nearai/ironclaw/pull/7854)** — Cleaned stale UI copy and retired 11 unused locale keys.
- **[#7794 — Shared page shell and loading primitives](https://github.com/nearai/ironclaw/pull/7794)** — Closed "[#7792](https://github.com/nearai/ironclaw/issues/7792)". Introduced `PageScroll`, `PageStack`, `Skeleton`, and `SkeletonList` primitives, migrating Automations, Extensions, Admin, Workspace, and Settings routes.
- **[#7001 — Byte-stable cached system prefix](https://github.com/nearai/ironclaw/pull/7001)** — Closed "[#6985: Cache prompt prefix stability](https://github.com/nearai/ironclaw/issues/6985)". Moved loop-control nudges and timestamps out of the cached system block, eliminating prompt-cache invalidation on every model call.
- **[#7257 — WebUI design-system proposal docs](https://github.com/nearai/ironclaw/pull/7257)** and **[#7255 — APDD governance kit evaluation](https://github.com/nearai/ironclaw/pull/7255)** — Documentation-only PRs defining the north-star design-system program and evaluating the Agent Product Design & Development framework.
- **[#7851 — Fixed main branch CI failures](https://github.com/nearai/ironclaw/issues/7851)** — Closed as a dedicated fix.

Also closed: the prior weekly QA epic **#7685**, and **[#7793 — InlineNotice migration for Settings/Admin banners](https://github.com/nearai/ironclaw/issues/7793)**.

---

## 4. Community Hot Topics

The most active items (by comment count and topical clustering) reveal three distinct threads:

1.  **Telegram personal-account linking is broken (3 issues, 3+ PRs).** The cluster spans:
    - **[#7853 — Telegram setup cannot complete personal account link](https://github.com/nearai/ironclaw/issues/7853)** (2 comments) — Agent reports "no available tool for that step."
    - **[#7862 — Generic "Something went wrong" when `telegram_api_id/api_hash` unconfigured](https://github.com/nearai/ironclaw/issues/7862)** (0 comments, opened today) — Root-cause follow-up.
    - **[#7861 — Open PR restoring device-link setup guidance](https://github.com/nearai/ironclaw/pull/7861)** — Acknowledges the regression was **orphaned by #7766** and restores the missing guidance. This is the highest-activity cluster, and the bug affects any user who says "yes" to linking a personal Telegram account.

2.  **Onboarding suggestion flow (UX, 4 items).** The epic **[#7815 — Connect → suggest → thread flow](https://github.com/nearai/ironclaw/issues/7815)** and its sub-issues [#7812 (closed, tool grounding)](https://github.com/nearai/ironclaw/issues/7812), [#7845 (closed, thread rendering)](https://github.com/nearai/ironclaw/issues/7845), and the refresh UX PR **[#7816](https://github.com/nearai/ironclaw/pull/7816)** represent a coordinated push to make the OOBE zero-to-first-value path feel complete.

3.  **CI expedite program (4 PRs).** The T1–T4 lanes ([#7821 merged](https://github.com/nearai/ironclaw/pull/7821), [#7817 open T2](https://github.com/nearai/ironclaw/pull/7817), [#7858 probe](https://github.com/nearai/ironclaw/pull/7858), [#7852 bisect](https://github.com/nearai/ironclaw/pull/7852)) consumed significant reviewer attention. The transparent **"do not merge — probe/bisect"** PR pattern is a notable engineering-culture signal: the team is isolating a Windows E2E regression before letting T1 land on main.

---

## 5. Bugs & Stability

Ranked by severity and user impact:

| Severity | Issue | Status | Notes |
|---|---|---|---|
| **High** | **[#7853 — Telegram personal-account linking broken](https://github.com/nearai/ironclaw/issues/7853)** | Open | Flow advertises a capability that fails; fix PR **[#7861](https://github.com/nearai/ironclaw/pull/7861)** is open. |
| **High** | **[#7862 — Vague error masks unconfigured Telegram credentials](https://github.com/nearai/ironclaw/issues/7862)** | Open, today | Generic message hinders self-service diagnosis; observed while triaging #7853. |
| **Medium** | **[#7297 — Error messages stack up in UI after failed prompts](https://github.com/nearai/ironclaw/issues/7297)** | Open (since Aug 6) | Old `service_unavailable` and heartbeat errors accumulate indefinitely. QA-flagged P2. |
| **Medium** | **[#7856 — MCP discovery silently skips camelCase tool names](https://github.com/nearai/ironclaw/issues/7856)** | Open, today | Hosted MCP tools with camelCase names are silently dropped, breaking discovery contracts. |
| **Medium** | **[#7845 — Suggested-task activation doesn't render thread entry](https://github.com/nearai/ironclaw/issues/7845)** | **Closed** | Fixed by **[#7857](https://github.com/nearai/ironclaw/pull/7857)** — refresh added to non-polling conversations query. |
| **Low** | **[#7848 — Daily failure taxonomy (officeqa)](https://github.com/nearai/ironclaw/issues/7848)** | Open | 65 non-passing runs attributed to "genuine model-quality errors by DeepSeek-V4-Flash" over OCR input — not an IronClaw bug. |

**No regressions were reported** on main in this window beyond the T1 Windows E2E failures, which were isolated in the probe PRs (#7852, #7858) rather than shipping to users.

---

## 6. Feature Requests & Roadmap Signals

Three signal-worthy requests surfaced or advanced in the last 24 hours:

- **[#7849 — Bundle an agent-first GSuite CLI for Google Workspace](https://github.com/nearai/ironclaw/issues/7849)** — Labeled `suggested_P1`, `risk: high`, targeted at **v1.4.0**. The request is to replace thin MIME/base64 Gmail read/write mappings with a purpose-built CLI that returns model-friendly, capability-oriented results. This is a direct response to the "tooling is too wire-format-y" pain point.
- **[#7855 — Italian language support](https://github.com/nearai/ironclaw/issues/7855)** — A simple, low-cost i18n addition alongside the existing locale packs.
- **Onboarding suggestions cumulative work ([#7815](https://github.com/nearai/ironclaw/issues/7815))** — The epic lists net-new work to close the connect → suggest → thread loop; [#7816 (refresh + connect UI)](https://github.com/nearai/ironclaw/pull/7816) ships behind the `oobe_suggestions` flag.

**Prediction for next release (v1.4.0):** The GSuite CLI (#7849) is explicitly milestone-tagged and has a `suggested_P1`. The remaining onboarding-suggestion UX gaps from #7815 (refresh/connect are already in PR) are likely to land before the flag flips to default-on.

---

## 7. User Feedback Summary

- **Gmail setup friction (surfaced via Slack, tracked in [#6774](https://github.com/nearai/ironclaw/issues/6774)):** A user (deepak.jangir) reported that Gmail/Google Apps require terminal/CLI-based setup (`nearai` CLI) rather than the Extensions > Registry UI. The request to document this in the UI has been open since July 28 and was updated again this week — still awaiting a maintainer response. This is a recurring barrier for non-CLI users.
- **Telegram linking disappointment:** The strongest negative signal — the product explicitly offers personal-account linking, but the agent cannot complete it ("no available tool") and the fallback error is uninformative. Users who say "yes" to the offer hit a dead end.
- **Prompt-cache performance wins (via #6985/#7001):** Fixing byte-stable system prefix directly addresses user-facing latency by keeping the provider cache warm across model calls — a silent but meaningful improvement.

---

## 8. Backlog Watch

Items needing maintainer attention but showing low engagement:

- **[#6774 — Document Gmail terminal-based setup in Extensions UI](https://github.com/nearai/ironclaw/issues/6774)** — Open since **July 28** (~4 weeks), only 1 comment, created from Slack feedback. The underlying user request is simple (documentation in-context) but it has not received a maintainer response. Risk of user churn for non-technical Gmail users.
- **[#7297 — Error message accumulation in UI](https://github.com/nearai/ironclaw/issues/7297)** — Open since **August 6** (~3 weeks), P2 QA bug. No linked fix PR yet. It degrades UX over a long session and should be a candidate for the current dogfooding sprint.
- **[#7255 — APDD governance kit evaluation](https://github.com/nearai/ironclaw/pull/7255)** — **Closed** but worth watching: the evaluation references a **private** repo (`rdisandro/apdd-kit`), which may limit community review and transparency of the governance decision.
- **[#7516 — Operator surface for IronHub agent link (new contributor)](https://github.com/nearai/ironclaw/pull/7516)** — Open since August 12 with no comments; authored by a **new contributor** (`neo-sky`). An unanswered PR from a newcomer is a retention risk for the contributor community; it has been open for ~2 weeks without apparent review.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-25

## Today's Overview
LobsterAI saw a burst of activity on 2026-08-24, with 11 PRs moving (10 merged/closed, 1 stale open) and 3 issues closed via stale-bot. The project appears healthy with no fresh bug reports and a strong merge cadence across renderer, main, cowork, and library areas. The merged work focuses on UX polish (skill tabs, login guide, plugin install modal), file/library interaction improvements, and SQLite performance. All three recently updated issues were auto-closed as stale, suggesting maintainers are cleaning up the backlog rather than addressing outstanding user needs.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
Ten PRs were merged/closed, indicating a mature, active development sprint:

- **Library & Artifacts Polish** ([#2524](https://github.com/netease-youdao/LobsterAI/pull/2524)): Added a cross-platform thumbnail renderer supporting images, videos, PDFs, Office, and HTML; unified 16:9 sizing and caching; only shows local artifacts tied to valid tasks, hiding internal index entries. Includes service-side sync and redeployment guidance.
- **File Share & Favorite UX** ([#2522](https://github.com/netease-youdao/LobsterAI/pull/2522)): Preserves Unicode filenames in share bundles (only sanitizing unsafe chars), prefers original titles from legacy filenames, improves favorite-state immediacy and rollback, deduplicates refresh events, and harmonizes quota-limit modals.
- **Cowork Context Menu** ([#2521](https://github.com/netease-youdao/LobsterAI/pull/2521)): Shared editing context menu now appears on read-only selected text, while preserving selections before right-click/Ctrl-click to prevent the selected-text toolbar from clearing them.
- **Login Guide & Icons** ([#2525](https://github.com/netease-youdao/LobsterAI/pull/2525), [#2523](https://github.com/netease-youdao/LobsterAI/pull/2523)): New login-helper UI and IM kit icon updates.
- **Plugin Install Modal** ([#2520](https://github.com/netease-youdao/LobsterAI/pull/2520)): Modal now constrains to viewport, scrolls independently for logs/errors, adds a close button and guarded IPC error handling, with lightweight renderer diagnostics.
- **Skills & Settings UI** ([#2528](https://github.com/netease-youdao/LobsterAI/pull/2528), [#2527](https://github.com/netease-youdao/LobsterAI/pull/2527)): Credits-loading settings UI added; skill tab now defaults to marketplace and stops persisting last-selected tab.
- **Performance** ([#1193](https://github.com/netease-youdao/LobsterAI/pull/1193)): Eliminated SQLite write amplification by introducing debounce + batch transactions, replacing the "export entire in-memory DB to disk on every mutation" strategy.
- **Chore** ([#2526](https://github.com/netease-youdao/LobsterAI/pull/2526)): Updated several kit icon URLs.

## Community Hot Topics
The issues closed by stale-bot carry the most signal, each with 2–3 comments. They represent user-driven enhancement and bug requests now left to age:

- [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) (👍1, 3 comments) — **Context window configuration**: User hit `Context overflow` in DeepSeek and asks for settable context-window and output-token sizes at the API settings level. The silent stale-close suggests no maintainer discussion occurred.
- [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) (0 👍, 3 comments) — **Skill installation regression**: A self-built skill was installed to the OpenClaw skill directory and announced as successful, yet never appeared in LobsterAI's skills panel after restart. Windows 10, version 2026.3.26, always reproducible.
- [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) (0 👍, 2 comments) — **Default tool config**: User wants hard-set defaults for existing tools (e.g., browser headless mode) because LLM instruction-following is inconsistent — "write to memory" doesn't work reliably.

None of these issues received a maintainer response before being closed by the stale process, which could be a concerning signal for community engagement.

## Bugs & Stability
No new bugs were reported in the last 24 hours. The three issues mentioned above are now stale-closed and represent the **only recent bug reports**. No crash or regression reports landed today.

## Feature Requests & Roadmap Signals
Strong signals for upcoming versions based on the latest merged work and user requests:

- **Config-driven tool behavior** ([#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)): The request for "make headless mode the default" aligns with PRs that keep adding settings UIs (credits, skills). A "tool defaults" settings panel would be a natural next step.
- **Context-window configuration UX** ([#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)): `Context overflow` is effectively a hard blocker for deep-context models; the fix is straightforward (expose token/context settings per provider) but the issue was stale-closed. High chance this resurfaces if more users hit it.
- **Thumbnail/library lifecycle** ([#2524](https://github.com/netease-youdao/LobsterAI/pull/2524)): The cross-platform thumbnail work hints at broader file-artifact support—expect richer media preview and cloud-sync integration in upcoming versions.
- **Marketplace as default skill tab** ([#2527](https://github.com/netease-youdao/LobsterAI/pull/2527)): Signals a push toward skill discoverability and marketplace-first design.

## User Feedback Summary
Active users are hitting practical walls and leaving feedback that isn't being picked up by maintainers. The clearest pain points:

- **Self-built skills install but don't appear** — a real UX and functionality regression on Windows, constantly reproducible, and still unaddressed.
- **Context overflow with DeepSeek** — reflects a missing core configuration surface that affects a broad set of provider users.
- **LLM unreliability for enforcing persistent tool preferences** — users expect declarative config rather than conversational memory as a workaround.

Satisfaction signals are implicit: the active merge cadence suggests the project maintains velocity, but the three stale-closed issues with zero maintainer participation point to potential risk of declining responsiveness.

## Backlog Watch
The following items are unaddressed and should be re-opened or triaged by maintainers:

- **Issue #1195** — Skill installation "success" but no appearance in panel (verified bug, no response, stale-closed). Medium severity; blocks user trust in the skill system.
- **Issue #1187** — No UI to set context/output token sizes leading to `Context overflow` errors. Medium severity for model flexibility; stale-closed.
- **Issue #1192** — Custom default config for tools (headless browser etc.) requested. Low severity but high utility; stale-closed without discussion.
- **PR #1277** — Electron and electron-builder dependency bump (40.2.1 → 43.4.1) remains open since 2026-04-02, updated today, apparently waiting on maintainer review. Security and performance implications should be evaluated.

These are the strongest candidates for maintainer attention to prevent deterioration of community trust.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-25

## Today's Overview
Moltis saw a highly productive day, with **10 PRs updated** (7 merged/closed) and **2 issues resolved**, indicating strong forward momentum. The development focus was broad, covering provider integrations (xAI Grok OAuth), sandbox infrastructure (Apple container fixes, Coder support), and security hardening. Notably, a new release **20260824.01** was published. While no issues were documented as open, the high merge velocity and diversity of fixes suggest a healthy, active maintainer community and robust CI pipeline.

## Releases
- **20260824.01** ([Release](https://github.com/moltis-org/moltis/releases/tag/20260824.01)) — No specific changelog was provided in the data; however, given the volume of merges since the previous release, this build likely includes the xAI Grok OAuth provider (PR #1240), Apple container ID fixes (PR #1237), and Slack shared channel tooling controls (PR #1238). Users are advised to review the linked PRs for behavioral changes.

## Project Progress
Seven PRs were merged/closed today, representing three key areas of advancement:

1. **New Provider & Platform Support**
   - **xAI Grok OAuth** ([#1240](https://github.com/moltis-org/moltis/pull/1240)): Adds `xai-oauth` provider enabling SuperGrok / X Premium+ subscribers to use Grok via RFC 8628 device-code login, a major user-facing feature.
   - **Coder remote workspace sandbox** ([#1199](https://github.com/moltis-org/moltis/pull/1199), still open): Introducing a new Coder backend for ephemeral workspaces; while open, it shows active development toward broader sandbox options.

2. **Bug Fixes & Stability**
   - **Apple container IDs** ([#1237](https://github.com/moltis-org/moltis/pull/1237)): Resolved a critical startup failure where identifier limits were exceeded, using SHA-256 hashing for stable names.
   - **TTS false configuration** ([#1242](https://github.com/moltis-org/moltis/pull/1242)): Fixed the mis-flagging of the default Coqui TTS as configured, eliminating misleading warnings.
   - **Heartbeat scheduling** ([#1241](https://github.com/moltis-org/moltis/pull/1241)): Enforced `active_hours` and fixed the `24:00` end-of-day parsing edge case.
   - **WhatsApp media download bounds** ([#1233](https://github.com/moltis-org/moltis/pull/1233)): Finalized handling of inbound media downloads during streaming, superseded by a prior persistence implementation.

3. **Security & Compliance**
   - **Node pairing signature verification** ([#1179](https://github.com/moltis-org/moltis/pull/1179)): A critical security fix binding pairing verification to server-issued challenges, preventing caller-supplied key spoofing.
   - **Slack shared-channel tool security** ([#1238](https://github.com/moltis-org/moltis/pull/1238)): Introduces policy-based tool access controls for shared Slack channels, maintaining a fail-closed default.

## Community Hot Topics
- **xAI Grok OAuth Request** ([Issue #1239](https://github.com/moltis-org/moltis/issues/1239)) — *Closed, 2 comments*. This feature request demonstrated clear demand for using existing subscription OAuth rather than API keys. It was resolved within a day by PR #1240, showing excellent maintainer responsiveness.
- **Apple Container ID Bug** ([Issue #1137](https://github.com/moltis-org/moltis/issues/1137)) — *Closed, 1 comment*. A long-running bug (since June) was fixed today, likely a relief for Apple-sandbox users. The delay suggests it was a niche but persistent problem.

## Bugs & Stability
- **High Severity — Apple Container startup failure** ([#1137](https://github.com/moltis-org/moltis/issues/1137)): Exceeded 64-char identifier limit causing crashes. **Fixed** in PR #1237.
- **Medium — TTS false warning** ([#1114](https://github.com/moltis-org/moltis/issues/1114), referenced): Red "provider not configured" errors shown despite no configuration. **Fixed** in PR #1242.
- **Medium — Cron context loss for channel follow-ups** ([#1243](https://github.com/moltis-org/moltis/pull/1243), open): Follow-up messages in WhatsApp lost scheduled message context. A fix is proposed but not yet merged.
- **Low — Heartbeat `end=24:00` parsing** ([#1241](https://github.com/moltis-org/moltis/pull/1241)): Valid config caused always-active behavior. **Fixed** in PR #1241.

## Feature Requests & Roadmap Signals
- **OAuth-based Provider Expansion**: The rapid implementation of `xai-oauth` suggests a roadmap leaning heavily toward subscription-based provider authentication, potentially extending to other platforms (e.g., Anthropic, Gemini).
- **Remote/Ephemeral Sandboxing**: The open PR for Coder (`#1199`) signals a push toward remote, cloud-based workspace management alongside existing local sandboxes.
- **Tool Schema Strictness for OpenAI**: PR #1232 (open) addresses OpenAI's strict `additionalProperties` requirement, indicating proactive work to maintain compatibility with evolving API spec changes.

## User Feedback Summary
- **Positive**: The fast turnaround on the xAI OAuth request (Issue → merged PR in <24h) reflects high user trust and satisfaction with the project's velocity.
- **Pain Point**: Apple sandbox users faced a prolonged bug, though the detailed fix in PR #1237 suggests maintainers are paying attention to platform-specific quirks.
- **Security-Conscious Users**: The security fix in PR #1179, submitted by an external contributor, highlights a community actively auditing for hard security, which strengthens overall project trust.

## Backlog Watch
No critical open issues or PRs currently appear neglected. The longest-pending item is the **Coder sandbox support** ([PR #1199](https://github.com/moltis-org/moltis/pull/1199)), open since 2026-08-15, which is a significant feature addition and likely undergoing thorough review. Additionally, **OpenAI-safe schemas** ([PR #1232](https://github.com/moltis-org/moltis/pull/1232)) and **cron channel context** ([PR #1243](https://github.com/moltis-org/moltis/pull/1243)) are from the last few days and should be watched for maintainer feedback.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-25

## 1. Today's Overview

CoPaw (QwenPaw) is experiencing a period of intense community engagement and active development. With 50 issues and 47 PRs updated in the last 24 hours, the project demonstrates a healthy, high-velocity contribution pipeline. Activity is split roughly evenly between open/active items and closed/merged work, indicating steady project throughput. The release of v2.1.1-beta.2 brings incremental improvements to the console UI and video tool-result delivery. A notable cluster of community feedback centers around multi-agent collaboration ergonomics (session management, message routing, cross-agent visibility), while the maintainer team is actively shipping fixes for console session-identity races, a serious runtime memory leak, and test infrastructure reliability. The project remains highly responsive to user-reported bugs, with several issues opened and closed within the same day.

🔗 **[View all open issues](https://github.com/agentscope-ai/CoPaw/issues)** | **[View all open PRs](https://github.com/agentscope-ai/CoPaw/pulls)**

---

## 2. Releases

### v2.1.1-beta.2
- **Console**: Added artifacts display to assistant response cards
- **Video**: Fixed tool-result video delivery on the OpenAI Responses API
- **Browser**: (Partial description truncated; additional fixes bundled but not fully documented)

⚠️ **Note**: This is a **beta** release. No breaking changes or migration notes were included in the changelog. Users on stable branches should treat this as a pre-release candidate for testing new console and video features.

🔗 **[View v2.1.1-beta.2 release](https://github.com/agentscope-ai/CoPaw/releases)**

---

## 3. Project Progress

The following PRs were merged or closed in the last 24 hours, representing the most recent commits to the codebase:

| PR | Title | Status | Focus |
|----|-------|--------|-------|
| [#7234](https://github.com/agentscope-ai/CoPaw/pull/7234) | fix(memory): restore periodic ReMe index compaction | **Merged** (DO NOT MERGE tag was lifted) | Fixes a runtime memory accumulation issue by restoring the `optimize_index_cron` job that prevents BM25 index bloat. Directly addresses the long-running process memory leak reported in [#7222](https://github.com/agentscope-ai/CoPaw/issues/7222). |
| [#7248](https://github.com/agentscope-ai/CoPaw/pull/7248) | fix(ci): derive Docker boundary version from package | **Merged** | Removes hard-coded version boundaries in the Dockerfile, deriving the version from `__version__.py` to prevent CI/build drift. |
| [#7247](https://github.com/agentscope-ai/CoPaw/pull/7247) | fix(providers): stop sending media to SiliconFlow DeepSeek V4 | **Merged** (DO NOT MERGE tag was lifted) | Adds correctness guards preventing multimodal payloads being sent to text-only SiliconFlow models, addressing potential silent failures. |
| [#7245](https://github.com/agentscope-ai/CoPaw/pull/7245) | chore(console): remove desktop mode reminder | **Merged** | UI cleanup removing a now-obsolete desktop-mode prompt. |
| [#7173](https://github.com/agentscope-ai/CoPaw/pull/7173) | fix(e2e): re-anchor agents action cells and follow project-directory API rename | **Merged** | E2E test maintenance following a product-side API rename and UI column addition. |
| [#6067](https://github.com/agentscope-ai/CoPaw/pull/6067) | feat: more sensitive files & allow read global | **Merged** | Enhances the default sensitive-file policy and adds a global read allowance, likely related to permission/approval systems. |

**Key product advances from closed PRs**: The memory compaction restoration is the most impactful item — it addresses a class of "runtime memory grows unboundedly" bugs reported across multiple issues (#5720, #7222). The console session-identity fix (#7237) is still open but directly targets the widely-reported cross-session message routing bug (#7231, #7011).

---

## 4. Community Hot Topics

The most active and passionately discussed items reveal a community deeply invested in **multi-agent collaboration flows** and frustrated by **fragmented UX**:

1. **[#6921 — Agent stops mid-task without notice](https://github.com/agentscope-ai/CoPaw/issues/6921)** — *11 comments* (Open)
   - The most-discussed issue: agents frequently pause after announcing intent (e.g., "Let me do all three") but before executing, requiring a nudge ("继续") to resume. A significant UX blocker affecting task-mode reliability.

2. **[#6782 — Docker plugin/app marketplace stuck in "maintenance"](https://github.com/agentscope-ai/CoPaw/issues/6782)** — *9 comments* (Closed)
   - A v2.0.1 Docker deployment issue where the plugin and app marketplaces never load. High community visibility due to Docker being a primary install path. Now resolved (closed).

3. **[#338 — Request for webhook/API integration](https://github.com/agentscope-ai/CoPaw/issues/338)** — *8 comments, 1 👍* (Open)
   - Long-running feature request (created March 2026) for an external software integration channel: send messages to CoPaw via webhook, receive a callback key for async polling of results.

4. **[#7011 — Console stop request cancels an active Feishu session](https://github.com/agentscope-ai/CoPaw/issues/7011)** — *8 comments* (Open)
   - Evidence of **cross-session conflation**: multiple UI sessions can trigger identity-crossing events, causing a stop in the Console to kill a Feishu conversation. Related to [#7231](https://github.com/agentscope-ai/CoPaw/issues/7231).

5. **[#3224 — CoPaw Agent Teams: self-evolving multi-agent collaboration teams](https://github.com/agentscope-ai/CoPaw/issues/3224)** — *7 comments* (Open)
   - Ambitious vision for teams driven by natural language, with self-evolution capabilities. Signature of power users pushing the product beyond manual, siloed multi-agent setups.

---

## 5. Bugs & Stability

Newly surfaced or recently-active stability issues, ranked by severity:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#7222](https://github.com/agentscope-ai/CoPaw/issues/7222) | **qwenpaw-backend memory grows to 20.7GB+ over 2 days** with heavy document workloads. Runtime accumulation (not a startup leak) harms all users on long-lived processes. | **Fix merged** — [#7234](https://github.com/agentscope-ai/CoPaw/pull/7234) restores ReMe index compaction. |
| 🟠 **High** | [#7231](https://github.com/agentscope-ai/CoPaw/issues/7231) | **Console messages delivered to wrong session** when users switch sessions/pages while another is generating. Message loss and cross-contamination of conversations. | **Fix PR open** — [#7237](https://github.com/agentscope-ai/CoPaw/pull/7237) freezes session identity at send-time. |
| 🟠 **High** | [#6921](https://github.com/agentscope-ai/CoPaw/issues/6921) | **Agents stop mid-task with no notification**, requiring manual "continue" nudges. Occurs during multi-step planning phases. | No fix linked yet; matching the released v2.1.1-beta.2 console improvements. |
| 🟠 **High** | [#7221](https://github.com/agentscope-ai/CoPaw/issues/7221) | **`reload_agent()` drops plugin workspace-scoped registrations** (runtime hooks, modes) after any config change or zero-downtime reload. | **Closed** — resolve by `#7221` acknowledgment in 2.1.1 lineage. |
| 🟡 **Medium** | [#5720](https://github.com/agentscope-ai/CoPaw/issues/5720) | **Memory leak over 64 minutes** (150MB→580MB) in v1.1.12.post2 on Windows. Root causes: orphaned async plugin tasks + unreleased HTTP sessions. Caused config corruption on kill. | No fix linked on this old version; likely fixed by #7234 on current main. |
| 🟡 **Medium** | [#7199](https://github.com/agentscope-ai/CoPaw/issues/7199) | **`daily_paper` job crashes** on PDFs containing Unicode surrogate characters (U+D800–DFFF), killing the entire job. | No fix PR yet. |
| 🟡 **Medium** | [#6822](https://github.com/agentscope-ai/CoPaw/issues/6822) | **Transient MCP connection failure permanently blocks** the current conversation even after auto-reconnect. | No fix PR yet. |
| 🟡 **Medium** | [#7136](https://github.com/agentscope-ai/CoPaw/issues/7136) | **File card names show percent-encoded mojibake** for non-ASCII (Chinese) filenames sent via `send_file_to_user`. | **Closed** (fix included in a release). |
| 🔵 **Low** | [#7121](https://github.com/agentscope-ai/CoPaw/issues/7121) | Flaky nightly test: `test_sibling_sessions_run_without_serializing` timing assertion fails on macOS runners. | **Closed** — addressed by PR [#7246](https://github.com/agentscope-ai/CoPaw/pull/7246). |

---

## 6. Feature Requests & Roadmap Signals

Strong signals from the community indicate the following priorities:

**High-probability roadmap items (likely in next minor version):**
- **Workspace-scoped Skill preload policy** ([Issue #7182](https://github.com/agentscope-ai/CoPaw/issues/7182), [PR #7183](https://github.com/agentscope-ai/CoPaw/pull/7183)): Opt-in `preload` to eliminate a first-turn tool-call for session-critical Skills. Mirrors Claude Code precedent. Already has a first-time contributor attached.
- **Per-channel model configuration** ([Issue #7085](https://github.com/agentscope-ai/CoPaw/issues/7085)): 11 users want to decouple model choice by channel (DingTalk → GPT-4o, WeChat → Qwen-max, Console → local). Likely requires a config schema evolution for channel-level overrides.
- **Cross-session identity freezing** ([Issue #7231](https://github.com/agentscope-ai/CoPaw/issues/7231), [PR #7237](https://github.com/agentscope-ai/CoPaw/pull/7237)): Expected in the next patch release. Fixes the concurrency-sensitive message-routing defects.
- **All-agent LLM & tool-call trend chart in Token Usage** ([PR #7219](https://github.com/agentscope-ai/CoPaw/pull/7219)): New backend API + UI component; likely merged in the next minor.

**Longer-horizon signals:**
- **CoPaw Agent Teams** ([#3224](https://github.com/agentscope-ai/CoPaw/issues/3224)): A polished multi-agent team mechanism — natural-language team creation, self-evolution, and collaboration-in-one-window. Large scope, but heavy community interest.
- **Webhook support** ([#338](https://github.com/agentscope-ai/CoPaw/issues/338)): Long-standing ask (March 2026) for external programmatic messaging — has been silently tracked but no PR yet.
- **Aider CLI and Qwen_Code as third-party agent harnesses** ([#7224](https://github.com/agentscope-ai/CoPaw/issues/7224), [#7181](https://github.com/agentscope-ai/CoPaw/issues/7181)): Requests for external-coding-assistant integration (ACP).

---

## 7. User Feedback Summary

**Top pain points heard this week:**
- **Task interruption without visibility** (#6921): Users report agents "going quiet" mid-multi-step task, forcing resumption nudges. This erodes trust in autonomous operation.
- **Session confusion across UI boundaries** (#7011, #7231): Message routing to the wrong conversation creates anxiety around data integrity, especially when parallel agents run on Feishu and Console.
- **Memory degradation on long-running instances** (#7222, #5720): Users running 2-day processes see 20GB+ growth — forcing restart cycles contradicts "set-and-forget" promises of the agent model.
- **Multi-agent collaboration asynchrony** (#3013, #2420, #6925): "Blind-box" communication where results arrived on orphaned session threads, plus identity confusion when agents collaborate.

**Positive signals:**
- The team closed #6782 (Docker marketplace) and #7121 (flaky test) quickly — evidence of fast iteration on pressing issues.
- First-time contributors are actively engaged: #7183 (preload policy), #6960 (import flow from Codex/Qoder), #7253, #7251 (README improvements), #7066 (OAuth refresh token persistence), #7080 (PowerContext memory backend). This indicates good project onboarding quality.

**Satisfaction signals:** Adoption of the browser tool, memory card redesigns, and cross-UI improvements (token usage trends) show the roadmap is aligning with how power users deploy CoPaw, not just with basic chat flows.

---

## 8. Backlog Watch

Items requiring maintainer attention or with no recent owner activity:

| Issue/PR | Age | Why It Matters | Status |
|----------|-----|----------------|--------|
| [#338](https://github.com/agentscope-ai/CoPaw/issues/338) — Webhook/API integration | Created 2026-03-02 (~6 months) | Long-standing integration blocker for users wanting to wire CoPaw into external tooling (CRM, CI, custom bots). 8 comments, 1 👍 — still no implementation PR. | Waiting on design/prioritization. |
| [#3425](https://github.com/agentscope-ai/CoPaw/issues/3425) — Relational DB for config + MS Teams channel | Created 2026-04-15 (~4 months) | Enterprise-scale deployment signal: file-based config is a scaling bottleneck; Teams support opens a major org channel. 2 comments. | No activity for weeks. |
| [#2750](https://github.com/agentscope-ai/CoPaw/issues/2750) — Multi-agent info-leak isolation (permissions + filtering) | Created 2026-04-01 (~5 months) | Security-critical feature request for regulated environments. No linked PR or roadmap mention. | Needs formal design doc. |
| [#3224](https://github.com/agentscope-ai/CoPaw/issues/3224) — CoPaw Agent Teams | Created 2026-04-10 (~4.5 months) | Ambitious feature that would differentiate CoPaw in multi-agent orchestration. Currently 7 comments, no maintainer response. | Needs a product decision: commit or communicate a timeline. |
| [#6960](https://github.com/agentscope-ai/CoPaw/pull/6960) — Agent import flow (Codex/Qoder → CoPaw) | Open since 2026-08-13, no reviewer activity | High-value interop feature by a first-time contributor; stalled without a maintainer review. | Needs CI/reviewer assignment. |
| [#7066](https://github.com/agentscope-ai/CoPaw/pull/7066) — OAuth2 rotating refresh_token persistence | Under Review since 2026-08-16 | Fixes an auth-interruption bug (#7053) for remote MCP servers. Requires persistence across restarts; likely genuinely reviewable but has been pending ~9 days. | Needs reviewer sign-off. |

---

*Digest generated from GitHub activity for 2026-08-25. Metrics reflect issues/PRs updated in the preceding 24 hours.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-08-25

**Data Window:** 2026-08-24 → 2026-08-25 | **Source:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. Today's Overview

ZeptoClaw is experiencing a notably quiet day, with zero merged PRs, zero releases, and only one new issue opened in the last 24 hours. This low activity level suggests the project is in a steady-state maintenance phase rather than an active development sprint. The single newly filed issue, while not a bug, targets a meaningful UX refinement in the CLI REPL that addresses real-world usability friction. No regressions or crash reports were logged today, indicating the current codebase is stable. Overall project health appears stable; the quiet pipeline positions maintainers to give the open UX issue thorough consideration.

---

## 2. Releases

**No new releases** were published in the 24-hour window. There are no version updates, breaking changes, or migration notes to report.

---

## 3. Project Progress

**No pull requests** were merged, closed, or even opened during this period. There are no feature advancements or bug fixes landed to report in the last 24 hours.

---

## 4. Community Hot Topics

**The single active issue is the sole community touchpoint today:**

- **[#650 [OPEN] feat(cli): REPL UX hardening — safe Ctrl+C/Ctrl+D, lone '/' command table](https://github.com/qhkm/zeptoclaw/issues/650)** — Opened 2026-08-24 by *Suraware* (0 comments, 0 reactions).

**Analysis:** While the issue has not yet attracted comments or reactions, its substance signals a growing emphasis on production-grade CLI ergonomics for ZeptoClaw. The reporter identifies two distinct pain points in the interactive REPL: (1) accidental session termination — any Ctrl+C/Ctrl+D immediately and silently exits with `Err(Interrupted | Eof) => Goodbye!`, which can destroy an in-progress agent session with a single stray keystroke; and (2) a lone `/` input is treated as an unknown command rather than surfacing a command menu. The underlying need is for graceful interruption handling with confirmation prompts and a more discoverable command system — markers of a tool transitioning from demo/prototype reliability to professional daily-driver expectations.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions were reported** in the last 24 hours. The only new issue is an explicit feature/enhancement request, not a defect. No stability concerns are currently flagged in the open issue queue.

---

## 6. Feature Requests & Roadmap Signals

The community is actively requesting more resilient REPL behavior through **Issue #650**, which proposes two concrete enhancements:

1. **Interrupt-safe session handling** — Differentiate between a first Ctrl+C (likely accidental) and a deliberate second Ctrl+C, or require confirmation before exiting, preserving in-progress sessions.
2. **Underspecified-input response** — A lone `/` should render a command menu/help table rather than erroring out, improving discoverability for users unfamiliar with the full command set.

**Predictions:** These types of UX-hardening changes are moderate in scope and do not require architectural shifts. Given the issue's clarity and its direct impact on new-user onboarding (lone `/` command table) and safe operation (interrupt handling), it is a strong candidate for inclusion in the **next minor release (0.x bump)** or the following patch cycle. Both changes touch the same CLI module, making them efficient to bundle. The suggested design — a two-stage Ctrl+C or explicit confirmation — aligns with common patterns in mature CLIs (e.g., `gh`, `docker`), signaling the project is closing parity with mainstream developer tools.

---

## 7. User Feedback Summary

The sole data point today reveals a user expressing dissatisfaction with current REPL fragility:

- **Pain Point 1 (Safety):** The user characterizes the silent, immediate exit on any Ctrl+C / Ctrl+D as a flaw that *"destroys an in-progress session by accident."* This indicates users are running lengthy, stateful agent sessions where interruption is costly and recovery is nontrivial. The expectation is for the tool to compete with robust CLI standards where accidental exits are protected.
- **Pain Point 2 (Discoverability):** Submitting `/` and receiving `Unknown command: /` demonstrates that users expect slash-command conventions (familiar from tools like Slack and Discord) to be honored, including the "lone slash implies help" idiom.
- **Use Case:** The reporter references the interactive command `zeptoclaw agent`, confirming that the primary use case is interactive human-in-the-loop operation, not just batch/scripted execution.

No satisfaction signals, praise, or metrics on user count were present in the data window.

---

## 8. Backlog Watch

**No long-unanswered issues or PRs** are currently demanding maintainer attention. With only one open issue in the entire queue (#650) and it having been created yesterday, there is no stale backlog requiring triage. This is a healthy sign — low accumulated debt and an effectively clear inbox for maintainers to address the new UX proposal promptly.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-25

## 1. Today's Overview

ZeroClaw is in an active development and hardening phase, with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a strong open-to-closed ratio (43 open vs 7 closed issues; 45 open vs 5 merged/closed PRs), indicating sustained contributor engagement alongside a significant queue of accepted, in-progress work. The most prominent theme is architectural consolidation: tracking issues for session-persistence ownership (#9600), an RFC for an OpenAI-compatible Chat Completions endpoint (#8603), and a maintainer decision queue (#8692) are all highly active. Security remains a critical focus, with several high-severity bugs (notably S0 delegate sandbox bypass #10165) and a wave of security-hardening PRs (egress policy #9582, filesystem confinement #9977, browser automation opt-in #9830). While no new release shipped today, the volume of in-flight RFCs, trackers, and large (XL-size) PRs suggests a major feature-rich release is likely in the coming weeks.

## 2. Releases

No new releases were published in the last 24 hours. The latest available version remains **0.8.4**, which is referenced in issue #9820 as a prebuilt aarch64 build for Raspberry Pi 5.

## 3. Project Progress

Five PRs were merged or closed in the last 24 hours. The closed items reflect a mix of completed work and follow-up tasks:

- **#10251 [CLOSED]** — Follow-up on flaky Telegram `listen_*` tests asserting on wall-clock timeouts (same class as #9429). Closed likely after merging a fix for the parallel runtime test issue.
- **#10023 [CLOSED]** — Bug fix ensuring failure logs report the pinned fallback model rather than the requested model in `crates/zeroclaw-providers/src/reliable.rs`. This improves observability for multi-provider setups.
- **#9590 [CLOSED]** — Fixed a race condition in `zeroclaw models refresh` where concurrent runs could lose cache entries due to a non-atomic read-modify-write cycle.
- **#10106 [CLOSED]** — Fixed exact proxy selectors rejecting supported transcription services (`transcription.groq`, `transcription.openai`, etc.).
- **#10143 [CLOSED]** — Completed the provider-call accounting lifecycle contract introduced by PR #10003, ensuring each physical provider leaf is represented exactly once with correct metadata.

Notable active PRs advancing major features include: the OpenAI-compatible gateway endpoint (#8486), host-owned plugin egress policy (#9582), supervised shell approval routing across all channels (#10241), and filesystem mutation confinement to the workspace (#9977).

## 4. Community Hot Topics

The most active discussions reveal a community deeply engaged in architectural decisions and security:

1. **[RFC: ZeroClaw Chat Completions profile (#8603)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — 24 comments, 7 days of discussion. The community strongly desires OpenAI-compatible API surface to unlock ecosystem tools (Open WebUI, LobeChat, Continue.dev, LangChain, Aider). Implementation PR #8486 is already open, signaling this is a top priority.

2. **[Maintainer decision queue tracker (#8692)](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — 14 comments. Community members are actively pushing for clearer maintainer responses on RFCs and design issues. This suggests a need for faster decision cycles.

3. **[Session-persistence contract ownership tracker (#9600)](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)** — 11 comments. Multiple workstreams touching session persistence have created coordination friction; the community is rallying around formal ownership.

4. **[Pre-turn tool elicitation hints (#7431)](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)** — 6 comments. Users want more robust natural-language routing (`send_via`) without explicit calls.

5. **[Config metadata localization (#9363)](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)** — 4 comments. Non-English UI users report translation gaps in ZeroCode and web surfaces.

## 5. Bugs & Stability

The project is addressing several serious stability and security bugs:

- **[S0 — Delegate sandbox bypass (#10165)](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)** — An *independent* delegate ignores its own `block_high_risk_commands` risk profile (e.g., `rm` succeeds). This is a critical security vulnerability with no fix PR yet. **Highest priority.**
- **[S2 — Cross-agent cron race condition (#10324)](https://github.com/zeroclaw-labs/zeroclaw/issues/10324)** — Self-admitted as S2 (not S0) because exploitation requires precise timing, but consequences mirror the #9947 cross-agent boundary issue. Filed today; no fix PR yet.
- **[S2 — Context window capped at 32k (#10068)](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)** — Interactive sessions ignore `max_context_tokens = 131072`. Users with large contexts are impacted. Fix in progress.
- **[S2 — Provider fallback poisoned by model id mismatch (#9812)](https://github.com/zeroclaw-labs/zeroclaw/issues/9812)** — A correctly configured fallback can never fire and gets flagged for cooldown. Currently labelled `r:needs-repro`.
- **[S2 — Log storage policy regression (#10073)](https://github.com/zeroclaw-labs/zeroclaw/issues/10073)** — `StoragePolicy::Rolling` causes severe performance degradation under sustained event volume.

Several fix PRs are already in the queue: #10184 (terminal restore after SIGINT), #10183 (Termux binary selection), #10234 (provider terminal failure causes), and #10236 (bound daemon capture logs). The volume of accepted-but-unfixed bugs suggests the maintainers are triaging effectively but the queue is building.

## 6. Feature Requests & Roadmap Signals

**Predictions for next release (0.9.x):**

- **OpenAI-compatible Chat Completions endpoint** — The RFC (#8603) is accepted, and PR #8486 is open. This is the single largest feature in flight and will likely land in the next minor release. Expect support for Open WebUI, LobeChat, Continue.dev, and Aider.
- **Single-tool provider rounds (#10222)** — RFC proposed that would allow the model to regain control between tool calls in a single provider batch. Strongly requested by interactive-agent users; moderate complexity, likely scheduled.
- **Session-persistence contract ownership (#9600)** — Active tracker; once the ownership decision lands, expect consolidated persistence behavior.
- **Pre-turn routing hints (#7431)** — Small enhancement (size XS) with clear value; likely to ship soon.
- **Plugin install retryability (#10162)** — Make plugin install atomic and retryable; important for WASM plugin ecosystem adoption.

**Signals of emerging priorities:** The maintainers are clearly prioritizing security hardening (egress policy, filesystem confinement, browser opt-in). Expect more security-focused releases and mandatory security gates in CI.

## 7. User Feedback Summary

- **Strong desire for ecosystem compatibility** — The top-voted topics are all about OpenAI protocol compatibility, indicating users want ZeroClaw to drop into existing LLM toolchains without custom integrations.
- **Frustration with configuration friction** — Issues like #9812 (fallback never fires) and #10068 (context cap ignored) show users are hitting configuration that silently misbehaves, eroding trust.
- **Security anxiety** — The S0 sandbox bypass (#10165) and the volume of security-related labels across issues/PRs suggest a community that values ZeroClaw's security posture but is anxious about edge cases.
- **Positive traction on localization** — The localization issues (#9363, #10180) are relatively minor (S2/S3), suggesting the internationalization effort is working but incomplete.
- **Active contributor pipeline** — The presence of "distinguished contributor" and "principal contributor" labels on many PRs indicates a healthy, engaged contributor base beyond the core team.

## 8. Backlog Watch

Several significant items appear to be stalled or needing attention:

- **[PR #8486 — OpenAI chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** — Created June 29, still open with `status:blocked`. This is the single most requested feature; blocking seems related to architectural decisions (see RFC #8603 and tracker #8692).
- **[PR #9637 — Guard temporary React Router RSC exception](https://github.com/zeroclaw-labs/zeroclaw/pull/9637)** — Tagged `do-not-merge` and `needs-author-action`. The web/ TypeScript gate issue (#10306) references the same problem; this PR may be superseded.
- **[PR #9830 — Make browser automation opt-in](https://github.com/zeroclaw-labs/zeroclaw/pull/9830)** — Tagged `do-not-merge` and `status:blocked`. Security-sensitive change; stalled for over two weeks.
- **[Issue #9812 — Provider fallback model id mismatch](https://github.com/zeroclaw-labs/zeroclaw/issues/9812)** — Labelled `r:needs-repro` and `status:stale`. The analysis is clear; needs a maintainer to either reproduce or accept the diagnosis.

**Maintainer attention targets:** The decision queue (#8692) exists precisely to move these items forward. Recommend maintainers prioritize unblocking PR #8486, resolving the browser automation controversy (#9830), and triaging the S0 delegate bypass (#10165) as the top three focus areas.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*