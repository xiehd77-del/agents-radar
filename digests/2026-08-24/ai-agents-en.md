# OpenClaw Ecosystem Digest 2026-08-24

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-24 01:22 UTC

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

# OpenClaw Project Digest — 2026-08-24

## 1. Today's Overview

OpenClaw maintains a high-velocity development cadence with 500 issues and 500 PRs updated in the last 24 hours. Issue resolution is active with 48 issues closed (roughly 10% of the active set), while 95 PRs were merged or closed. The project shows strong maintainer engagement with numerous PRs tagged "ready for maintainer look," including a burst of UI and infrastructure improvements from prolific contributor `steipete`. No new releases shipped today; the most recent validation target is `v2026.8.1-beta.2`, currently undergoing release validation (issue #125626). A notable signal: the project is producing an increasing number of issues filed by AI agents (e.g., #124911 filed by Scott Hanselman's agent, #108520 by an agent for user ESF), indicating real-world adoption and agent-driven use cases. Overall health appears robust with active triage, frequent fixes, and a healthy mix of platform, channel, and core improvements.

## 2. Releases

No new releases were published in the last 24 hours. The latest release candidate, `v2026.8.1-beta.2`, is in active validation per issue [#125626](https://github.com/openclaw/openclaw/issues/125626), with 18 comments from testers following the release validation worksheet. No breaking changes or migration notes available for this period.

## 3. Project Progress

While no PRs were explicitly merged today (merge data shows 95 closed/merged in aggregate), several significant PRs are in the pipeline awaiting review or proof:

**UI/UX Improvements (from `steipete` today):**
- [#128426](https://github.com/openclaw/openclaw/pull/128426) — Fixes Safari sidebar menu opening bug (Filter & sort, account/settings) — XL, P1, ready for maintainer look
- [#128432](https://github.com/openclaw/openclaw/pull/128432) — User-selectable accent color for Control UI, surfacing the previously hidden `ui.seamColor` option — XL
- [#128397](https://github.com/openclaw/openclaw/pull/128397) — Terminal messages no longer trigger full session roster reloads, reducing fan-out on large stores — S, P2
- [#128431](https://github.com/openclaw/openclaw/pull/128431) — Mattermost inbound DM replies skip redundant channel rediscovery (removes 2 extra API calls per cold reply) — L, P2

**Infrastructure / Feature Work:**
- [#128447](https://github.com/openclaw/openclaw/pull/128447) — Optional container isolation for node-hosted worker sessions, addressing a parked milestone-6 item from `docs/plan/runners.md` — XL
- [#128444](https://github.com/openclaw/openclaw/pull/128444) — New `sessions` API capability: detached sibling sessions (no parent-bound lineage), closing #128233 — L
- [#128421](https://github.com/openclaw/openclaw/pull/128421) — Automatic device placement for `sessions.dispatch` when no explicit `{profileId}` or `{deviceId}` is given — XL
- [#127982](https://github.com/openclaw/openclaw/pull/127982) — Durable plugin session state readback across turns and restarts, closing #127977 — M, proof sufficient

**Bug Fixes with Strong Evidence:**
- [#127338](https://github.com/openclaw/openclaw/pull/127338) — Retry incomplete model streams with partial output (fixes #127272), addressing truncated Bedrock streams — M, P1, proof sufficient
- [#127382](https://github.com/openclaw/openclaw/pull/127382) — Preserve model latency and memory ranges in OpenTelemetry histograms (default buckets maxed at 10,000, making absolute diagnosis impossible) — S, proof sufficient
- [#126818](https://github.com/openclaw/openclaw/pull/126818) — Release rejected webhook connections after answering them with proper HTTP status (was: bare TCP reset) — L, P1, proof sufficient, covers 8 channels

## 4. Community Hot Topics

The most active discussions reveal systemic concerns around message delivery reliability and session-state integrity:

**#1 — Release Validation v2026.8.1-beta.2** ([#125626](https://github.com/openclaw/openclaw/issues/125626), 18 comments) — Coordinated testing effort with multiple testers verifying gateway upgrades. Normal release process, but the high comment count shows engaged community participation.

**#2 — Windows vitest teardown EBUSY** ([#119796](https://github.com/openclaw/openclaw/issues/119796), 15 comments, closed) — SQLite handle not released on Windows causing test failures. Closed with linked PR, demonstrating effective triage.

**#3 — Cron agent stalls on DeepSeek** ([#121953](https://github.com/openclaw/openclaw/issues/121953), 13 comments) — The `[cron:<jobId>]` user-message prefix triggers DeepSeek's lower-priority edge serving, causing tens-of-seconds to minutes of stall. Notably a **provider-edge behavior**, not an OpenClaw bug per se — but OpenClaw's prefix design triggers it. Community discussing whether to change prefix format or add provider-specific workarounds.

**#4 — Codex turn interruption after delegated tool result** ([#109490](https://github.com/openclaw/openclaw/issues/109490), 12 comments, closed as duplicate) — Client-delegated dynamic tools with `terminate:true` interrupt Codex turns, so agents say "I'll do X now" then never execute. Closed as duplicate — tracker hygiene is working, but the underlying issue remains active elsewhere.

**#5 — A2A sessions_send duplicate messages** ([#39476](https://github.com/openclaw/openclaw/issues/39476), 12 comments, open since March) — **Longest-running open discussion.** Agent A→B via `sessions_send`, then B→A response creates duplicate delivery. Still open with linked PR. This is a design-level issue around A2A protocol semantics and channel delivery dedup.

**Community pattern**: Message-loss and session-state issues dominate the highest-engagement threads. Users are pushing OpenClaw into production multi-agent patterns (gatekeeper agents, A2A, sessions_send) and hitting real-world race conditions.

## 5. Bugs & Stability

**Critical (P0):**
- [#108520](https://github.com/openclaw/openclaw/issues/108520) — iOS app update breaks Talk Mode and chat entirely (gateway connects, no functionality). P0, stable maturity, filed by an agent for an end user. **No linked fix yet** — this is the highest-severity open item.

**High (P1) — Message Loss / Session State:**
- [#126246](https://github.com/openclaw/openclaw/issues/126246) — Telegram durable outbound deliveries stuck in `send_attempt_started`, lost on restart. No fix PR linked.
- [#111944](https://github.com/openclaw/openclaw/issues/111944) — Codex commentary not delivered to Telegram progress/block streaming (regression in 2026.7.2-beta.3). No fix PR.
- [#127948](https://github.com/openclaw/openclaw/issues/127948) — WhatsApp group replies render as BLANK bubbles when quote cache expires (10-min TTL) — valid quoted key with empty body. Linked PR open.
- [#126900](https://github.com/openclaw/openclaw/issues/126900) — `maxActiveTranscriptBytes` loops compaction forever when compacted transcript stays above threshold, wedging the channel. Linked PR open.
- [#111857](https://github.com/openclaw/openclaw/issues/111857) — CLI budget reopens full compacted JSONL branch, inflating prompt estimates, repeatedly compacting low-context parent sessions. No fix PR.
- [#108215](https://github.com/openclaw/openclaw/issues/108215) — Context usage drops from 57% to 13% without compaction after large tool output — unexplained state loss. No fix PR.
- [#126906](https://github.com/openclaw/openclaw/issues/126906) — Denying the write tool silently disables memory persistence; agent reports success for saves that never happened. No fix PR.

**High (P1) — Resource Leaks:**
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes accumulate as zombies, degrading runtime. No fix PR.
- [#125344](https://github.com/openclaw/openclaw/issues/125344) — memory-core embedding workers and codex app-servers leak with no idle TTL, strangling production cgroup. No fix PR.

**High (P1) — Auth/Platform:**
- [#89278](https://github.com/openclaw/openclaw/issues/89278) — Codex OAuth refresh succeeds on probe but cron/heartbeat fail with 10s auth refresh timeout (regression). Linked PR open.
- [#127176](https://github.com/openclaw/openclaw/issues/127176) — CLI and Node Host alternate device metadata on Windows, confusing device identity. Linked PR open.

**Emerging (new this week):**
- [#126631](https://github.com/openclaw/openclaw/issues/126631) — Sandbox skills bind-mount creates root-owned `/workspace/.openclaw`, locking out uid 1000. Linked PR open.
- [#126458](https://github.com/openclaw/openclaw/issues/126458) — Custom openai-completions omitted maxTokens still defaults to 8192; thinking truncates tool-call JSON mid-object. Linked PR open.

**Positive signal**: 3 issues closed as `already-fixed` today (#112246, #111745, #111969) and several closed as duplicates — the triage and fix pipeline is functioning.

## 6. Feature Requests & Roadmap Signals

Strong signals from user requests and PRs this week:

**Near-term (likely next release):**
- **Detached sibling sessions** ([#128444](https://github.com/openclaw/openclaw/pull/128444)) — Agents need independent sessions without spawn lineage. Closes #128233, maintainer-reviewed, XL — likely v2026.8.1 or v2026.9.
- **Automatic device placement** ([#128421](https://github.com/openclaw/openclaw/pull/128421)) — "Run on any available node" for `sessions.dispatch`. The missing piece for multi-node session distribution. XL, maintainer-tagged.
- **Container isolation for node-hosted workers** ([#128447](https://github.com/openclaw/openclaw/pull/128447)) — Addresses milestone-6 parked work; security-conscious operators want more than env-allowlist hardening.
- **User-selectable accent color** ([#128432](https://github.com/openclaw/openclaw/pull/128432)) — Makes the existing `ui.seamColor` discoverable; small UX win.

**Moderate-term signals:**
- **Per-agent MCP server scoping** ([#72591](https://github.com/openclaw/openclaw/issues/72591), dedupe:parent, open since April) — With 12 agents × 10 MCP servers = 120 spawned processes, users need per-agent MCP filtering. Long-standing ask, high value.
- **Synchronous `sessions_send` option** ([#115400](https://github.com/openclaw/openclaw/issues/115400)) — Gatekeeper-agent pattern users want a sync wait option instead of async announce + duplicate-delivery dance.
- **Kubernetes/Helm documentation overhaul** ([#91455](https://github.com/openclaw/openclaw/issues/91455)) — Current docs awkward; user wants Helm support. Enhancement, P3.
- **Global pre-routing interception** ([#109353](https://github.com/openclaw/openclaw/issues/109353)) — Plugin-level inbound message interception before agent runs. Closed as duplicate but shows plugin-author demand.

**Wildcard:**
- **Anonymous Ox Alpha for OpenCode** ([#127248](https://github.com/openclaw/openclaw/pull/127248)) — Adds anonymous OpenAI-compatible model route; if merged, could broaden free-tier adoption.

## 7. User Feedback Summary

**Real pain points emerging from issues:**

- **Message delivery reliability is the #1 friction**: Multiple channels (Telegram, WhatsApp, Slack, QQBot) losing replies, blank bubbles, stuck `send_attempt_started` states. Users report "agent runs complete successfully, but reply never arrives" — the worst kind of failure because it's silent.

- **The `sessions_send`/A2A pattern is popular but fragile**: Users building gatekeeper patterns ([#115400](https://github.com/openclaw/openclaw/issues/115400)), front-agent/back-agent architectures, and cross-agent spawning hit duplicate messages, silent webchat delivery ([#111358](https://github.com/openclaw/openclaw/issues/111358)), and transcript-less sessions ([#95759](https://github.com/openclaw/openclaw/issues/95759)).

- **Resource leaks are hurting production users**: Two separate reports of process leaks (zombies [#97616], embedding workers [#125344]) "strangling" production cgroups. These are long-tail degradation issues that erode trust.

- **OAuth/timeout issues plague cron and background work** ([#89278](https://github.com/openclaw/openclaw/issues/89278)): Auth "succeeds" but 10s refresh timeout kills background tasks.

- **Positive feedback markers**: 
  - The diagnostic-OTel fix (#127382) was driven by operators who "could not diagnose model latency or process memory in absolute terms" — now fixed.
  - Safari fix (#128426) addresses a "silently broken" experience that Chrome users didn't see.
  - Several `already-fixed` closures today indicate responsive maintainers.

- **Agent-filed issues are increasing**: #124911 (Hanselman's agent), #108520 (Dagmar for user ESF). These tend to be well-reasoned and detailed; the project seems to be attracting agent-driven development workflows, which is a testament to OpenClaw's own capabilities being used on itself.

## 8. Backlog Watch

Issues open for extended periods needing maintainer attention:

| Issue | Age | Priority | Status |
|-------|-----|----------|--------|
| [#39476](https://github.com/openclaw/openclaw/issues/39476) — A2A sessions_send duplicate messages | **5.5 months** | P1, diamond lobster | Open, linked PR exists but no movement |
| [#72591](https://github.com/openclaw/openclaw/issues/72591) — Per-agent MCP server scoping | **4 months** | P2, diamond lobster, dedupe:parent | Open, needs product decision, security review |
| [#54157](https://github.com/openclaw/openclaw/issues/54157) — Doubao/BytePlus cacheRead/cacheWrite pricing = 0 | **5 months** | P2 | Open, linked PR open since March |
| [#60612](https://github.com/openclaw/openclaw/issues/60612) — Doctor warns about NVM node, can't fix (launchd plist regenerates wrong path) | **4.7 months** | P3 | Open, not-repro-on-main (likely env-specific but frustrating) |
| [#108520](https://github.com/openclaw/openclaw/issues/108520) — **iOS app P0 breakage** | **5.5 weeks** | P0, UX release blocker | Open, no fix PR — **needs urgent maintainer action** |
| [#102380](https://github.com/openclaw/openclaw/issues/102380) — Slack button interactions dispatch heartbeat not reply turn | **6.5 weeks** | P1, diamond lobster, recovery-stuck | Open, needs product decision + maintainer review |
| [#112668](https://github.com/openclaw/openclaw/issues/112668) — sessions_yield abort-settle still drops announce (post-SQLite rework) | **5 weeks** | P1, diamond lobster, recovery-stuck | Open, needs maintainer + product decision |

**Key takeaway for maintainers**: The P0 iOS issue (#108520) has sat without a linked fix for over a month — users with auto-updated iOS apps are completely blocked. The recovery-stuck tagged issues (#112668, #102380, #110153) represent known message-loss scenarios that haven't received fixes despite detailed repros. The dedupe:parent (#72591) MCP scoping request has broad community value and 4 months of demand.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent & Personal Assistant Ecosystem
**Date:** 2026-08-24

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing a bifurcation between **general-purpose multi-channel assistants** (OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, ZeroClaw) and **specialized or early-stage alternatives** (IronClaw, Moltis, CoPaw, LobsterAI). Across all mature projects, three dominant themes emerge: **message-delivery reliability** is the #1 user pain point, **session-state integrity** (persistence, recovery, context preservation) is the top technical investment area, and **multi-agent orchestration** (sessions_send, A2A, detached siblings) is the fastest-growing use case. Security hardening—particularly SSRF mitigation and credential management—has become a baseline requirement rather than a differentiator. The ecosystem is productionizing rapidly, with users deploying these tools for real business workflows and hitting enterprise-grade reliability expectations.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Issues Closed | PRs Merged/Closed | Release Status | Health Score* |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 48 | 95 | v2026.8.1-beta.2 (validation) | ★★★★★ |
| **NanoBot** | 2 | 19 | 1 | 5 | No release (consolidating) | ★★★★☆ |
| **Hermes Agent** | 50 | 50 | 27 | 20 | v0.20.5 (Aug 19) | ★★★★☆ |
| **PicoClaw** | 2 (closed) | 7 | 2 | 5 | None | ★★★★☆ |
| **NanoClaw** | 6 | 50 | 0 | 20 | v2.3.0 (Aug 23, stopgap repin) | ★★★☆☆ |
| **NullClaw** | 1 | 0 | 0 | 0 | 2026.8.22 | ★★☆☆☆ |
| **IronClaw** | 12 | 23 | 0 | 5 | None (v1.4.0 epic in progress) | ★★★★☆ |
| **LobsterAI** | 4 (all stale-closed) | 3 | 4 | 3 | None | ★★★☆☆ |
| **TinyClaw** | 0 | 0 | 0 | 0 | — | ★☆☆☆☆ |
| **Moltis** | 2 | 10 | 0 | 9 | None | ★★★★☆ |
| **CoPaw** | 5 (all open) | 15 | 0 | 8 | v2.1.0 | ★★★☆☆ |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | — | ★☆☆☆☆ |
| **ZeroClaw** | 50 | 50 | 12 | 5 | None (RFC-driven) | ★★★★☆ |

*\*Health Score: composite of responsiveness, fix throughput, community engagement, and backlog cleanliness.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Scale leader by order of magnitude** — 500 issues/PRs updated in 24h vs. 50 for the nearest peer (Hermes, ZeroClaw). This reflects both a larger user base and a more active contributor pool (e.g., prolific contributor `steipete` shipping UI/UX fixes daily).
- **Most comprehensive channel coverage** — 8+ channels with active development, including fixes for WeChat, WhatsApp, Telegram, Mattermost, Slack, QQBot (via community PRs).
- **Strong maintainer responsiveness** — 10% of active issues closed in 24h; multiple `already-fixed` closures; healthy duplicate-detection hygiene.
- **Agent-driven development workflows** — Issues filed by AI agents (Hanselman's agent, Dagmar) signal dogfooding and external adoption at a level no peer matches.

**Technical Approach Differences:**
- **Most mature multi-agent primitives** — `sessions_send`, detached sibling sessions (PR #128444), automatic device placement (PR #128421) go beyond what peers offer (NanoBot lacks A2A; CoPaw has no cross-agent protocol).
- **Deeper infrastructure investment** — OTel histograms for model latency, container isolation for workers, durable plugin state readback.
- **Provider-edge behavior handling** — Actively diagnosing provider-specific issues (DeepSeek cron stalls, Bedrock stream truncation).

**Community Size Comparison:**
| Metric | OpenClaw | Hermes | ZeroClaw | NanoBot |
|---|---|---|---|---|
| Daily issue/PR churn | 1,000 | 100 | 100 | 21 |
| Active comment threads | 5+ (10-18 comments) | 5+ (7-9) | 6 (12-25) | 2 (2) |
| Release velocity | Beta monthly | ~Weekly patches | RFC-driven | Consolidating |
| Ecosystem gravity | **Reference implementation** | Strong power-user base | Architect-focused | Developer-friendly |

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|---|---|---|
| **Message delivery reliability** | OpenClaw, NanoClaw, Hermes, Moltis, CoPaw | Duplicate delivery (#39476 OpenClaw, #2404 NanoClaw), silent drops, stuck `send_attempt_started`, blank bubbles, lost replies |
| **Session-state persistence & recovery** | OpenClaw, Hermes, NanoClaw, ZeroClaw, CoPaw | "Session not found" errors, state loss after restart, turn-recovery checkpoints (NanoBot #5420), context rehydration, conversation replay bugs (CoPaw #7217) |
| **Multi-agent orchestration** | OpenClaw, ZeroClaw, CoPaw | A2A protocol semantics, gatekeeper patterns, detached/distributed sessions, cross-agent credential propagation |
| **LLM cost optimization** | OpenClaw, PicoClaw, CoPaw | Prefix caching placement (PicoClaw #3321), token usage accounting, OTel metric buckets (OpenClaw #127382) |
| **Security hardening** | PicoClaw, ZeroClaw, IronClaw, OpenClaw | SSRF mitigation in media downloads (PicoClaw #3322-24), sandbox egress auth (IronClaw #7810), plugin private egress (ZeroClaw #10250), API key leakage (LobsterAI #1202) |
| **Docker/installer reliability** | NanoBot, Hermes, NanoClaw | OAuth persistence (#5444), installer fragility (#83529, #93063), hardened image repins (#3496) |
| **Resource leak management** | OpenClaw, CoPaw, NanoBot | Zombie processes (#97616), embedding worker leaks (#125344), unbounded memory growth (#7222), task group retention (#5430) |
| **MCP ecosystem maturity** | OpenClaw, NanoBot, CoPaw, NullClaw | Per-agent MCP scoping (#72591), MCP server lifecycle/deadlock (NullClaw #991), schema budgeting (#5388), metadata preservation (#5386), OAuth refresh persistence (#7066) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architecture Distinctives |
|---|---|---|---|
| **OpenClaw** | Universal AI assistant gateway | Power users, multi-channel operators, production deployments | Most mature A2A/session primitives; deep channel coverage; plugin ecosystem |
| **NanoBot** | Developer-friendly assistant framework | Developers, team deployments | Unified config editor (in-progress); process identity naming; native Linear channel (in-progress); WebUI/TUI parity |
| **Hermes Agent** | Desktop-centric agent | Desktop power users, macOS/Linux | Bot Mode; `/review` command; registry connections with OAuth; Docker sandbox |
| **PicoClaw** | Lightweight multi-channel assistant (Go) | Self-hosters, security-conscious users | SSRF-hardened; LLM prefix-cache optimization; WhatsApp via whatsmeow |
| **NanoClaw** | Chat SDK-driven assistant | Node.js developers, Discord/Telegram users | Chat SDK lockstep upgrades; pnpm-gated releases; macOS install friction |
| **ZeroClaw** | Architect-driven assistant framework (Rust) | Developers, system architects | RFC-driven design; WASM plugin roadmap; granular sandbox policy; channel expansion program |
| **IronClaw** | Enterprise agent platform | NEAR Foundation, enterprise | Persistent per-user sandboxes; iron-proxy credential brokerage; background subagents; CI infrastructure overhaul |
| **Moltis** | Stabilization-focused assistant | Users needing reliability | Browserless v2 support; WhatsApp document persistence; TTM translation; stealth-mode default |
| **CoPaw** | Agent framework with skill system (QwenPaw) | Chinese/English devs, MCP users | Dynamic skill loading/unloading; auto-title-sync; session-scoped projects; OAuth token rotation |
| **LobsterAI** | NIM-integrated assistant | Chinese enterprise, NetEase ecosystem | Model-level context/token config; NIM supergroup chat; lightweight footprint |

---

## 6. Community Momentum & Maturity

### Tier 1 — High-Velocity Production (rapid iteration, large user base)
**OpenClaw, Hermes Agent, ZeroClaw, NanoBot** — These projects close 20-95 PRs daily, address issues within days, and are shipping production-grade features. OpenClaw leads in absolute volume; Hermes shows excellent issue-to-fix turnaround; ZeroClaw is architecturally ambitious with RFC-driven development; NanoBot is consolidating for a feature-rich next release.

### Tier 2 — Sustained Development (steady progress, narrowing focus)
**PicoClaw, Moltis, IronClaw, NanoClaw, CoPaw** — Active but more targeted. PicoClaw delivered 5 security/performance fixes today; Moltis merged 9 stability PRs; IronClaw is executing a coordinated infrastructure overhaul; NanoClaw is fixing release-cadence issues; CoPaw balances community first-time contributors with core maintenance.

### Tier 3 — Quiet/Stabilizing (low activity, cleanup mode)
**LobsterAI, NullClaw** — LobsterAI is closing stale backlog items; NullClaw has one critical concurrency bug but otherwise minimal activity. Both may be in maintenance-hold between releases.

### Tier 4 — Inactive
**TinyClaw, ZeptoClaw** — No activity in 24h. Likely abandoned or feature-complete projects with no active contributor base.

---

## 7. Trend Signals

1. **Reliability > Features** — Across every active project, message-loss, session-state, and duplicate-delivery bugs generate the most community engagement. Users are willing to tolerate fewer features if the core loop (receive → process → deliver) is bulletproof. **For developers:** prioritize idempotent delivery, durable session checkpoints, and transparent error surfacing over new features.

2. **Multi-agent orchestration is the killer use case** — OpenClaw's A2A/sessions_send discussions (5.5 months, unresolved), ZeroClaw's session-ownership RFC #9487, and NanoBot's turn-recovery checkpoint all point to a common need: **agents managing agents**. Expect cross-agent protocols to standardize within 12 months. **For developers:** design for agent-to-agent communication from day one; session lineage and detached execution are table stakes.

3. **Security is becoming a selling point, not a checkbox** — SSRF hardening, sandbox egress credential brokerage, private egress carveouts, and OAuth token rotation are being actively developed across PicoClaw, ZeroClaw, IronClaw, and CoPaw. Enterprise adoption depends on verifiable security controls. **For developers:** implement safe-by-default HTTP clients, proxy-mediated credentials, and least-privilege sandbox policies before seeking enterprise users.

4. **LLM cost optimization is a competitive differentiator** — PicoClaw's prefix-cache fix and OpenClaw's OTel histogram improvements show users care about token spend and diagnosability. **For developers:** measure model latency/cost as first-class metrics; design prompts to maximize provider prefix caching.

5. **Provider lock-in is the new vendor lock-in** — OpenClaw's DeepSeek stall, NanoClaw's Codex TLS regression, and CoPaw's DeepSeek catalog refresh all highlight the fragility of single-provider dependencies. **For developers:** abstract providers cleanly, implement retry/fallback logic, and expose provider-agnostic interfaces (NanoBot's typed LLM usage contract is a model to follow).

6. **Self-hosters want first-class Docker/macOS support** — Docker OAuth persistence (NanoBot), macOS install friction (NanoClaw), and installer robustness (Hermes) are recurring themes. **For developers:** test non-root container execution and macOS symlink paths from the start.

7. **Agent-filed issues are the new frontier** — OpenClaw is receiving well-reasoned bugs from AI agents operating on behalf of users. This validates the technology but also creates new triage workflows. **For developers:** consider how your project will handle agent-filed issues, automated repros, and bot quality expectations.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date: August 24, 2026**

---

## 1. Today's Overview

NanoBot shows strong development momentum with 19 pull requests updated in the last 24 hours, reflecting a highly active maintainer community. The project is processing substantial refactoring work, particularly around provider abstraction and configuration systems, alongside targeted bug fixes. Community activity is moderate with 2 issues, one enhancement request and one recently resolved OAuth authentication bug. The absence of new releases suggests the team is consolidating features for a future version. Overall, the project exhibits healthy, sustained development across web UI, TUI, agent runtime, and channel integrations.

---

## 2. Releases

No new releases were published in the last 24 hours. The last several days of merged PRs suggest an upcoming release may be in preparation, particularly around provider architecture improvements and config system unification.

---

## 3. Project Progress

**5 PRs merged/closed in the last 24 hours:**

### Merged/Closed PRs

| PR | Title | Component | Impact |
|----|-------|-----------|--------|
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(runtime): add user-controlled turn recovery | Runtime/Agent | **Feature complete:** Persists interrupted WebSocket turns via sidecar checkpoint; adds explicit Continue/Dismiss recovery in WebUI and TUI without auto-resume |
| [#5491](https://github.com/HKUDS/nanobot/pull/5491) | fix(webui): keep answer text outside reasoning shell | WebUI | Fixes answer rendering across tool-turn boundaries; preserves media-only answers and fork boundaries |
| [#5492](https://github.com/HKUDS/nanobot/pull/5492) | feat(cli): expose nanobot process identities | CLI | Names processes `nanobot-agent`, `nanobot-webui`, `nanobot-gateway`, `nanobot-tui` for better observability |
| [#5475](https://github.com/HKUDS/nanobot/pull/5475) | refactor: remove remaining dead code | Core | Removes zero-consumer helpers, unused `websocket-client` dependency, narrows exports |
| [#5445](https://github.com/HKUDS/nanobot/pull/5445) | fix(docker): persist OAuth client data | Docker | Fixes [#5444](https://github.com/HKUDS/nanobot/issues/5444); directs XDG data to mounted instance dir; credentials persist across container replacement |

**Notable project advances:**

- **Source checkout as PR #5445 closes long-standing Docker OAuth persistence issues (#5444)** — a direct fix for a user-reported Docker authentication failure (discussed below).
- **Process identity & observability:** PR #5492 introduces a major observability improvement by giving each NanoBot process a distinct, recognizable name. This is significant for operators running multiple instances.

---

## 4. Community Hot Topics

The most active discussion in the last 24 hours centers around a **bug report on Docker OAuth login** and an **enhancement request for document previews**.

### [#5444](https://github.com/HKUDS/nanobot/issues/5444) [CLOSED] [bug] Failed to login OpenAI via OAuth in Docker
- **Author:** Bennett-Yang | **Created:** Aug 19 | **Comments:** 2
- **Community attention:** Medium (2 comments, actively discussed)
- **Root cause & resolution:** Non-root user in Docker could not write OAuth client data to the default XDG directory. **This issue was resolved today via PR #5445**, which redirects XDG application data to the mounted instance directory and documents persistence across container replacement. The closure of this issue demonstrates responsive maintainer action.

### [#5493](https://github.com/HKUDS/nanobot/issues/5493) [OPEN] [enhancement] Requesting preview support for HTML, .txt, .md files
- **Author:** john00010 | **Created:** Aug 23 | **Comments:** 0 (new)
- **Community attention:** Low (new issue, few comments)
- **Request:** A user requests native preview for HTML, text, and Markdown files directly in the UI. They propose a native `iframe + srcdoc` solution with sandbox isolation for HTML.
- **Underlying need:** Users need to access and review file contents within the chat interface, rather than downloading files. The proposal reflects a common need for **richer document handling in conversational AI workspaces**.

**Analysis:** The community is actively engaged in usability improvements. The resolution of the Docker OAuth issue within 4–5 days of report is a very good sign for project health. The feature request for file previews signals an emerging need for broader document-type support in the WebUI, with a focus on security (sandboxing).

---

## 5. Bugs & Stability

**Bugs reported/updated in the last 24 hours:**

| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| **High** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) | Hard failure: Docker users cannot login via OpenAI OAuth — blocks core functionality. | **CLOSED via PR #5445** |
| **Medium** | [#5500](https://github.com/HKUDS/nanobot/pull/5500) | **Regression (performance):** OpenAI Codex provider builds TLS contexts per request, causing 10-second stalls under concurrency. | Open fix PR available |
| **Medium** | [#5496](https://github.com/HKUDS/nanobot/pull/5496) | **Regression (stability):** No-tools model requests in `AgentRunner` bypass timeout protection; stalled calls could hold session locks. | Open fix PR available |
| **Medium** | [#5430](https://github.com/HKUDS/nanobot/pull/5430) | **Memory leak:** Completed task groups retain empty session entries in long-running agent loops. | Long-standing open fix PR (since Aug 18) |

**Stability assessment:** Two performance/stability regressions remain open (Codex TLS context reuse, no-tools request timeouts), but both have active fix PRs under development. The Docker OAuth bug is resolved. The project shows quick turnaround on blockers yet some older stabilization PRs (like the task-group release from Aug 18) remain in the queue.

---

## 6. Feature Requests & Roadmap Signals

The most prominent feature signals come from the developer team itself, with several substantial features in active PRs, alongside the community request for file previews.

### Community-Driven Features

- **File/HTML/Markdown previews ([#5493](https://github.com/HKUDS/nanobot/issues/5493)):** As discussed above, the WebUI channel lacks native preview for different file types. The proposal for sandboxed HTML preview is security-conscious and feasible.

### Maintainer Roadmap Signals (in open PRs — highly likely for next release)

These are significant features being actively developed by the core team, pointing to a major version bump:

1. **Unified Configuration Editor ([#5498](https://github.com/HKUDS/nanobot/pull/5498), [#5497](https://github.com/HKUDS/nanobot/pull/5497)):** Introduces a transport-neutral, full-schema config editor with secret-redaction and optimistic revisions. This is a major UX improvement for configuration management across the TUI and WebUI.

2. **Native Linear Agent Channel ([#5495](https://github.com/HKUDS/nanobot/pull/5495)):** Adds a dedicated channel for the Linear issue-tracking platform with OAuth, webhooks, and activity publishing.

3. **MCP Improvements ([#5388](https://github.com/HKUDS/nanobot/pull/5388), [#5386](https://github.com/HKUDS/nanobot/pull/5386)):** Ongoing work to budget schemas and preserve metadata in MCP Apps.

4. **Typed LLM Usage Contract ([#5480](https://github.com/HKUDS/nanobot/pull/5480)):** A provider-agnostic refactor to standardize token usage.

**Prediction:** The next NanoBot release will likely include the unified config editor and Linear channel, alongside the typed LLM usage contract refactor and MCP metadata preservation. The consistent push on configuration UX suggests a focus on enterprise/team deployments.

---

## 7. User Feedback Summary

- **Pain Point: Docker OAuth persistence.** The user Bennett-Yang ([#5444](https://github.com/HKUDS/nanobot/issues/5444)) reported that OpenAI OAuth was impossible in Docker, preventing use of core functionality. This was **satisfactorily resolved** by the maintainers within days. The root cause (XDG data not being persistent when switching to non-root user) is a common Docker pitfall, and the fix documents the persistence behavior.

- **Pain Point: Awkward file handling.** User john00010 ([#5493](https://github.com/HKUDS/nanobot/issues/5493)) highlights the friction of not being able to preview documents (HTML, txt, md) directly in the WebUI. The user demonstrates sophistication by proposes a security-centric solution (sandboxed iframe).

- **General satisfaction:** The high volume of PRs with test coverage, documentation updates, and regression tests indicates a mature and well-maintained project. Users are getting responsive support and continuous improvements.

---

## 8. Backlog Watch

The following items have been open for an extended period and may require maintainer attention:

### Older PRs (Lingering)

| PR | Created | Title | Concern |
|----|---------|-------|---------|
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | Jul 28 | fix(subagent): mark partial completion results | Unmerged for ~4 weeks. Important for multi-task agent correctness (preventing the model from inferring unfinished results). |
| [#5385](https://github.com/HKUDS/nanobot/pull/5385) | Aug 13 | fix(matrix): complete Element SAS request flow | Unmerged for ~11 days. Adds critical security verification flow for Matrix; missing `done` handshake is a functional gap. |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | Aug 13 | feat(agent): budget model-visible MCP schemas | Unmerged for ~11 days. Opt-in feature but important for controlling model context bloat. |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | Aug 13 | feat(mcp): preserve MCP Apps result metadata | Unmerged for ~11 days. Improves MCP App integration data flow. |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | Aug 18 | fix(agent): release completed task groups | Unmerged for ~6 days. Memory leak fix for long-running agent loops. |

**Maintainer Action Suggested:** The subagent partial completion fix ([#5152](https://github.com/HKUDS/nanobot/pull/5152)) is the most stale and has correctness implications. The Matrix SAS verification flow ([#5385](https://github.com/HKUDS/nanobot/pull/5385)) is also a security-relevant fix that should be prioritized.

---

## Summary

| Metric | Value |
|--------|-------|
| Overall Health | **Excellent** — active development, responsive maintainers, steady flow of merged PRs |
| Blocking Bugs | 0 (Docker OAuth resolved) |
| Open Regressions | 2 (Codex TLS, agent timeout) — both with active fixes |
| Major Features in Pipeline | Unifying config editor, Linear channel, typed provider contract, MCP metadata |
| Community Sentiment | Positive — issues resolved quickly, feature requests welcome |
| Key Turnaround Time | Issue → Fix (Docker OAuth): ~4-5 days |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-08-24

---

## 1. Today's Overview

Hermes Agent shows high activity with **50 issues** and **50 PRs** updated in the last 24 hours. The project maintains a healthy open/closed balance (23 open vs. 27 closed issues, 30 open vs. 20 merged/closed PRs), indicating active triage and resolution. The dominant theme this week is **session-state reliability** across Desktop, gateway, and CLI surfaces — with several related bugs closed and new fixes landed. One critical **P1** issue was reported regarding parallel tool calls losing all results when batch size is ≥4. No new releases were published today, suggesting the team is consolidating fixes before the next version cut.

---

## 2. Releases

No new releases were published in the last 24 hours. The latest known version remains **v0.20.5** (2026.8.19) per issue references.

---

## 3. Project Progress

**Merged/Closed PRs today (20 total)** — key highlights:

| PR | Title | Impact |
|---|---|---|
| [#93390](https://github.com/NousResearch/hermes-agent/pull/93390) | feat: review model selectable from every aux picker | `/review` subagent model now configurable from Desktop, dashboard, and CLI; includes zh-Hans docs mirrors |
| [#93400](https://github.com/NousResearch/hermes-agent/pull/93400) | fix(desktop): route remote attachments by connection | Fixes remote Preview/download requests selecting wrong backend with multiple connections |
| [#92194](https://github.com/NousResearch/hermes-agent/pull/92194) | feat(desktop): OAuth sign-in for registry connections | Native OAuth for registry connections; connection-bound actions handled by #90006 |
| [#93279](https://github.com/NousResearch/hermes-agent/pull/93279) | fix(desktop): boot-time source restore keeps All-profiles preference | Persists user's "Show all profiles" toggle across restarts |
| [#91339](https://github.com/NousResearch/hermes-agent/pull/91339) | fix(bot-mode): send @mention handoffs via query files | Security fix: eliminates shell injection risk in bot-to-bot handoffs |
| [#92274](https://github.com/NousResearch/hermes-agent/pull/92274) | Fix remote gateway fallback caused by auth-less liveness and registry drift | Stops Desktop from dropping authenticated remote connections |
| [#90520](https://github.com/NousResearch/hermes-agent/pull/90520) | feat(gateway): let a deployment tune the loop-watchdog budget | Configurable loop-liveness watchdog timing for host-specific filesystem characteristics |

**Open PRs worth watching (30 total):**
- [#93405](https://github.com/NousResearch/hermes-agent/pull/93405) — Closes last orphan-reaper storm path for fresh Bot Chats
- [#93408](https://github.com/NousResearch/hermes-agent/pull/93408) — Stops remote gateways from snapping back to local backend
- [#93411](https://github.com/NousResearch/hermes-agent/pull/93411) — Security: closes dot-sourced and NUL-padded script bypasses of lifecycle guard

---

## 4. Community Hot Topics

The most active discussions today reveal three clustering themes:

### 4.1 Session-State Reliability (Dominant cluster)
Multiple issues with high comment counts share the same root symptom — **"session not found"** on Desktop:

- [#75756](https://github.com/NousResearch/hermes-agent/issues/75756) *(9 comments, CLOSED)* — Editing earlier messages fails on Desktop; rewind lacks resume+retry
- [#83529](https://github.com/NousResearch/hermes-agent/issues/83529) *(9 comments, OPEN, P1)* — `hermes update` catastrophically breaks installation on Debian Trixie
- [#93063](https://github.com/NousResearch/hermes-agent/issues/93063) *(9 comments, OPEN)* — Fedora 44 installation fails via the curl|bash installer
- [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) *(8 comments, OPEN)* — macOS keychain prompts after every update due to ad-hoc re-signing (proof-carrying safeStorage rotation)

### 4.2 Bot Mode Reliability Program
- [#93091](https://github.com/NousResearch/hermes-agent/issues/93091) *(7 comments, OPEN, needs-decision)* — Systematic proposal: typed failure reasons, envelope TTL, attention badges, leader-routed rooms, retry policy

### 4.3 Skills Index Health (Bot-monitored)
- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) *(84 comments, OPEN)* — Automated freshness probe: skills index is 29.8h old (limit 26h). This is a bot-created issue with unusually high comment count, suggesting sustained internal discussion despite being a mechanical degradation.

**Underlying need:** Users consistently report that **Desktop sessions silently break** after network events, sleeps, or updates. The community strongly desires **session resilience** — auto-reconnect, retry-on-resume, and clear error reporting rather than silent drops.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 P1 — Critical
| Issue | Title | Status |
|---|---|---|
| [#93251](https://github.com/NousResearch/hermes-agent/issues/93251) | Parallel tool batches of ≥4 calls lose **ALL** results ('Result unavailable' for every call) | CLOSED |
| [#83529](https://github.com/NousResearch/hermes-agent/issues/83529) | `hermes update` destroys hermes (Debian Trixie) | OPEN — installer robustness failure |

### 🟠 P2 — High
| Issue | Title | Notes |
|---|---|---|
| [#93087](https://github.com/NousResearch/hermes-agent/issues/93087) | Malformed SQLite schema escapes WAL-reset probe, disables persistence | CLOSED |
| [#93404](https://github.com/NousResearch/hermes-agent/issues/93404) | Tool results unavailable when SDK id ≠ call_id after normalization | **OPEN, READY FOR IMPLEMENTATION** — reproduced on main |
| [#93044](https://github.com/NousResearch/hermes-agent/issues/93044) | Docker sandbox fails on session IDs with colons ("invalid mode: /root") | CLOSED |
| [#93056](https://github.com/NousResearch/hermes-agent/issues/93056) | `session.list` exact-title lookup drops archived rows → Bot Mode mints duplicate greetings | CLOSED |
| [#92984](https://github.com/NousResearch/hermes-agent/issues/92984) | Langfuse SDK plugin: placeholder API key silent failure (no telemetry emitted) | CLOSED |

### 🟡 P3 — Moderate
| Issue | Title | Notes |
|---|---|---|
| [#93107](https://github.com/NousResearch/hermes-agent/issues/93107) | Mattermost cross-platform sync stalls (cursor drift skips messages) | CLOSED |
| [#87025](https://github.com/NousResearch/hermes-agent/issues/87025) | `doctor` reports npm vulns on main (nanoid 3.3.18 + vite 8.2.1 minimal fix) | OPEN |

**Regression cluster:** Multiple closed bugs confirm the team is systematically fixing **Desktop session persistence** — specifically the `ws_orphan_reap` and "session not found" family (#90428, #89083, #82872, #91684, #85578, #83716, #79635). These appear to be a coordinated fix campaign.

---

## 6. Feature Requests & Roadmap Signals

### Strong candidates for next version:
1. **`/review` command (AI code review)** — [#4251](https://github.com/NousResearch/hermes-agent/issues/4251): Requested since March; PR #93390 now makes the review model selectable, suggesting the core feature already landed.
2. **Bot Mode reliability program** — [#93091](https://github.com/NousResearch/hermes-agent/issues/93091): Detailed proposal awaiting decision; if approved, likely ships en masse in the next minor release.
3. **`hermes chat-z` CLI routed through running Desktop** — PR [#92981](https://github.com/NousResearch/hermes-agent/pull/92981): Fire-and-accept CLI submit through the renderer, bundled with a skill.

### Signals from today's PRs:
- **OAuth sign-in for registry connections** ([#92194](https://github.com/NousResearch/hermes-agent/pull/92194)) — infrastructure for secure multi-gateway auth
- **Tunable loop-watchdog budget** ([#90520](https://github.com/NousResearch/hermes-agent/pull/90520)) — deployment flexibility for heterogeneous hosts

---

## 7. User Feedback Summary

**Pain points voiced today:**

| Pain | Evidence | Frequency |
|---|---|---|
| **"Session not found" is the #1 user-facing failure** | 10+ issues across Desktop/TUI/gateway with this message | Very high |
| Silent message drops after WS disconnect | [#90428](https://github.com/NousResearch/hermes-agent/issues/90428): messages show as "sent" but never answered, no error | High |
| Update/installer fragility breaks working setups | [#83529](https://github.com/NousResearch/hermes-agent/issues/83529) (Debian), [#93063](https://github.com/NousResearch/hermes-agent/issues/93063) (Fedora 44) | Medium |
| macOS keychain prompts on every update | [#91115](https://github.com/NousResearch/hermes-agent/issues/91115): re-signed binary invalidates ACL | Medium |
| Docker sandbox incompatible with Telegram session IDs | [#93044](https://github.com/NousResearch/hermes-agent/issues/93044): colon in path breaks bind mount | Medium |

**Satisfaction signals:** The team is closing bugs rapidly (27 closed issues today), with PRs landing same-day for many reports. Users are actively using advanced features (Bot Mode, Mattermost sync, remote gateways over Tailscale), indicating a mature power-user base.

---

## 8. Backlog Watch

### ⚠️ Needs maintainer attention:

| Issue | Age | Why it matters |
|---|---|---|
| [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) — Duplicate skill names disagree across list/prompt/skill_view | **41 days** | Inconsistent behavior across three surfaces; marked `needs-decision`; no PR linked |
| [#69940](https://github.com/NousResearch/hermes-agent/issues/69940) — Desktop WS disconnects every ~17 min (code 1012), chats lost | **32 days** | Oldest open session-reliability issue; marked `needs-repro` — may be superseded by newer fixes |
| [#87025](https://github.com/NousResearch/hermes-agent/issues/87025) — `doctor` reports npm vulns on main | **9 days** | Security debt; minimal fix identified (nanoid + vite) but unassigned |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index stale/degraded | **37 days** | Bot-monitored freshness probe failing; 84 comments but no resolution — possible process issue rather than code bug |

### Potential stale PR:
- [#73844](https://github.com/NousResearch/hermes-agent/pull/73844) — fix(desktop): stop reporting transient token-refresh failures as expired sessions — **26 days open** with no recent maintainer action.

---

## Project Health Assessment

**Overall: Very good.** The team is shipping fixes at pace, closing the majority of filed issues, and demonstrating systematic root-cause analysis (multiple PRs reference the same underlying mechanism). The session-reliability campaign is thorough — today alone saw 5+ PRs/closed issues in that cluster. Watch items: the **P1 installer fragility** and the **long-unresolved duplicate skill names** decision.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-24

## 1. Today's Overview

PicoClaw saw moderate activity over the past 24 hours with **2 closed issues** and **7 PRs updated** (2 still open, 5 closed/merged). The day was dominated by **bug-fix merges** targeting security vulnerabilities (SSRF in media downloads across multiple channels) and **performance optimizations** (LLM prefix caching). Two feature requests (OAuth 2.1 for MCP servers, Telegram rich table rendering) were closed as stale. No new releases were published during this window. The project remains in a healthy maintenance phase, with active community contributions addressing both security hardening and UX improvements.

## 2. Releases

**None.** No new releases were published in the past 24 hours. The last release remains unindicated in this data window.

## 3. Project Progress

Five PRs were closed/merged today, representing meaningful improvements across three areas:

**Security Hardening (SSRF Mitigation) — 3 PRs:**
- **[#3324](https://github.com/sipeed/picoclaw/pull/3324) [fix(weixin)]**: Pinned WeChat media downloads to `utils.CreateSafeHTTPClient` and `ValidateSafeHTTPURL`, preventing redirects to loopback/private hosts during CDN/remote media fetches.
- **[#3323](https://github.com/sipeed/picoclaw/pull/3323) [fix(wecom)]**: Same SSRF fix applied to WeCom's `mediaClient`, protecting both `storeRemoteMedia` (inbound) and `downloadRemoteMediaToTemp` (outbound) operations.
- **[#3322](https://github.com/sipeed/picoclaw/pull/3322) [fix(channels)]**: Extended `BlockPrivateTargets` hardening to QQ, Telegram, Discord, LINE, and Slack inbound attachment downloads — previously only OneBot was protected.

**Performance — 1 PR:**
- **[#3321](https://github.com/sipeed/picoclaw/pull/3321) [fix(agent)]**: Moved the per-request dynamic context block (`Current Time`, `Runtime`, `Current Session`, `Current Sender`) from within the system message to *after* conversation history. This is a **significant LLM-cost optimization** — prefix caching is positional, and the old placement invalidated the cache on every request. New placement preserves cached prefixes across turns.

**Dependency Fix — 1 PR:**
- **[#3320](https://github.com/sipeed/picoclaw/pull/3320) [fix(deps)]**: Bumped `go.mau.fi/whatsmeow` to resolve WhatsApp's `Client outdated (405)` rejection, restoring the native WhatsApp channel (which was dead due to version pinning).

## 4. Community Hot Topics

The most commented items in the last 24h were both **stale-closed feature requests**, indicating waning but previously active interest:

**Issue [#3302](https://github.com/sipeed/picoclaw/issues/3302) — OAuth 2.1 support for MCP servers** (4 comments): Community member `sunboy0523` requested OAuth 2.1 for MCP servers, cross-referencing older issue #2546. This reflects a broader ecosystem trend toward OAuth 2.1 adoption. Interest appears moderate (no 👍 reactions), and the issue was marked stale — suggesting it's a "nice-to-have" rather than a blocker.

**Issue [#3325](https://github.com/sipeed/picoclaw/issues/3325) — Telegram rich table rendering** (2 comments): User `As-tsaqib` requested leveraging Telegram Bot API 10.1's native table UI instead of degrading Markdown tables to monospaced code blocks. This points to **growing user expectations for richer, native messaging experiences** rather than plain-text fallbacks. Also closed as stale.

## 5. Bugs & Stability

No new bugs were reported in the last 24h. The issues closed were pre-existing feature requests, not defect reports. However, the **day's PR merges directly addressed prior-reported stability/security bugs**:

| Severity | Issue | Fix | Status |
|----------|-------|-----|--------|
| **High (SSRF)** | Crafted media URLs could reach loopback/private hosts in QQ/Telegram/Discord/LINE/Slack | [#3322](https://github.com/sipeed/picoclaw/pull/3322) | ✅ Merged |
| **High (SSRF)** | WeChat CDN redirects could reach loopback/private hosts | [#3324](https://github.com/sipeed/picoclaw/pull/3324) | ✅ Merged |
| **High (SSRF)** | WeCom media client followed redirects to unsafe hosts | [#3323](https://github.com/sipeed/picoclaw/pull/3323) | ✅ Merged |
| **Medium (Service outage)** | WhatsApp channel dead — `Client outdated (405)` no-reconnect | [#3320](https://github.com/sipeed/picoclaw/pull/3320) | ✅ Merged |
| **Medium (Cost/performance)** | Dynamic context ahead of history invalidated LLM prefix cache every request | [#3321](https://github.com/sipeed/picoclaw/pull/3321) | ✅ Merged |

**Assessment**: All five bugs had fix PRs merged within this window — strong maintainer responsiveness.

## 6. Feature Requests & Roadmap Signals

| Request | Status | Likelihood for Next Release |
|---------|--------|----------------------------|
| **[#3302](https://github.com/sipeed/picoclaw/issues/3302)** — OAuth 2.1 for MCP servers | Closed stale (0 👍) | **Low** — no community traction, maintainers let it lapse |
| **[#3325](https://github.com/sipeed/picoclaw/issues/3325)** — Telegram native table rendering | Closed stale | **Low-Medium** — improves UX but low urgency; may resurface if more users hit plain-text tables |

**Prediction**: Neither stale-closed feature is likely to appear in the next release. More probable: **DeltaChat refactor (#3222)** and **Build Remote Agent phone pairing (#3344)** — both currently open PRs with active work — will land in upcoming versions, along with the already-merged security/performance fixes.

## 7. User Feedback Summary

- **Pain point (security)**: Multiple channels (WeChat, WeCom, QQ, Telegram, Discord, LINE, Slack) were vulnerable to SSRF via media downloads. Community PRs (#3322–#3324) fixed these — likely prompted by security researchers or power users.
- **Pain point (reliability)**: WhatsApp channel silently dying to `Client outdated (405)` was a **user-facing outage** — no reconnect logic meant the native channel stayed dead until manual intervention. Fix (#3320) restores service.
- **Pain point (cost)**: The prefix-cache invalidation issue (#3321) suggests users care about **LLM API costs** — the fix meaningfully reduces token spend for conversational agents.
- **Use case (new)**: [#3344](https://github.com/sipeed/picoclaw/pull/3344) adds a **Build Remote Agent phone-pairing adapter** (`gbr/1` protocol) allowing phones to spectate the desktop agent — a use case that broadens PicoClaw from pure chat to **remote observability/monitoring**.
- **Satisfaction signal**: No negative feedback or complaints appeared in the window; the only user requests (OAuth 2.1, Telegram tables) were closed stale, implying maintainers judged them out of scope for now.

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — DeltaChat refactor (-200 LOC) | Open since **2026-07-03** (~7 weeks) | Reviewer attention needed. Open PR with substantial cleanup (drop legacy features, reference official relay list, rework invite links). Low risk, should be mergeable. |
| **[PR #3344](https://github.com/sipeed/picoclaw/pull/3344)** — Build Remote Agent phone pairing | Open since 2026-08-23 (1 day) | New protocol (`gbr/1`), needs security review of the pairing flow (QR + 8-char code). |

**Notable**: Both closed issues (#3302, #3325) were closed due to staleness — maintainers may want to add a `later`/`backlog` label to preserve good ideas from being auto-garbage-collected.

---

**Overall Health Assessment**: 🟢 **Healthy** — strong bug-fix throughput, good security posture improvements, active community contributors, and a visible cost-optimization focus. Main watch items: stale-label handling for feature backlog and reviewing the two open PRs in a timely manner.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-24

## 1. Today's Overview

NanoClaw's development velocity has been **high** over the last 24 hours, with 50 PRs updated (30 open, 20 merged/closed) and 6 issues touched. The most significant activity is a coordinated, multi-PR effort around the Chat SDK 4.32.0 lockstep bump and a `minimumReleaseAge` pnpm gate fix, forming a three-PR stacked chain on `main` (#3490 → #3491 → #3492). A critical release, **v2.3.0 (#3495)**, was merged today, which packages a stopgap hardening image repin to unblock failed installs. However, several concerning issues were raised over the weekend: two **high-severity** bugs (a watchdog killing legitimate turns, and a Discord approval-button corruption) and new macOS-specific setup failures. The project is clearly maintaining a strong release cadence, but the spike in platform-specific setup bugs and a critical delivery bug suggest the recent release may need further hotfixes.

---

## 2. Releases

**No new releases were published today.** The last release remains **v2.3.0**, which was merged as PR [#3495](https://nanocoai/nanoclaw/PR/3495) on 2026-08-23. Notably, the core team had to merge a "stopgap" PR [#3496](https://nanocoai/nanoclaw/PR/3496) to repin container images to a hardened build because **new hardened installs have been failing setup since 2026-08-21** — this is a patch outside the normal release channel. Operators on affected versions should track this repin.

---

## 3. Project Progress

The 20 merged/closed PRs indicate a very productive day, dominated by the **core team** finalizing a multi-part dependency upgrade:

- **Chat SDK 4.32.0 lockstep upgrade:** Merged the engine-side PR [#3466](https://nanocoai/nanoclaw/PR/3466) which bumps chat core and pins all Chat SDK channel skills to it.
- **Per-channel typing indicator cadence:** Merged [#3467](https://nanocoai/nanoclaw/PR/3467), allowing channel adapters to declare their typing-indicator lifetime (e.g., WhatsApp Cloud at 25 seconds).
- **pnpm minimumReleaseAge gate fix:** Merged [#3469](https://nanocoai/nanoclaw/PR/3469) which hoists the gate out of the `pnpm:` key and adds a regression test.
- **Release v2.3.0:** Merged [#3495](https://nanocoai/nanoclaw/PR/3495).
- **Critical install fix:** Merged [#3496](https://nanocoai/nanoclaw/PR/3496) which repins to `hardened-2026-08-23` images to bypass the broken setup.

Beyond these, there is an active stack on `main` (still open): [#3490](https://nanocoai/nanoclaw/PR/3490) (Chat SDK bump) ← [#3491](https://nanocoai/nanoclaw/PR/3491) (typing lifetime) ← [#3492](https://nanocoai/nanoclaw/PR/3492) (release age gate). These are re-opened twins of the merged PRs, retargeted correctly for proper CI on `main`.

---

## 4. Community Hot Topics

Issues with the most engagement (comments/reactions) were:

1. **#2404 — Double delivery bug** ([link](https://nanocoai/nanoclaw/Issue/2404))
   - **4 comments.** The most discussed issue. Users are hitting duplicate messages when an agent uses both the `send_message` MCP tool and `<message>` blocks in the same turn. The discussion centers on root-cause analysis (the MCP server runs as a separate subprocess). *Underlying need:* Reliable single-delivery semantics for multi-channel output.

2. **#3498 — macOS update controller no-op** ([link](https://nanocoai/nanoclaw/Issue/3498))
   - **New issue, 0 comments.** Raised by `brentkearney`; highlighted the `update-nanoclaw` controller failing due to symlinked tmpdirs on macOS.

3. **#3456 — Discord approval button corruption** ([link](https://nanocoai/nanoclaw/Issue/3456))
   - **Closed today.** High-severity bug; the fix was quick, but the issue was a major pain point for Discord users as it made approval cards entirely unusable.

---

## 5. Bugs & Stability

Several bugs were reported or remained active today. Ranked by severity:

| Severity | Issue | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **High** | [#3455](https://nanocoai/nanoclaw/Issue/3455) | **Claim-stuck watchdog kills busy turns.** The `host-sweep` watchdog measures elapsed time, but since the heartbeat isn't touched between claim and first SDK event, a legitimately busy turn gets killed. **No self-recovery**; permanently blocks replies. | **No fix PR yet** (filed 2026-08-23) |
| **High** | [#3456](https://nanocoai/nanoclaw/Issue/3456) | **Discord approval cards unusable.** Redundant `value` param corrupted the custom_id, causing silent-reject + duplicate resend. | **Resolved today** (closed 2026-08-23) |
| **High** | [#3497](https://nanocoai/nanoclaw/Issue/3497) | **better-sqlite3 segfaults on macOS.** Requires Node >=22.14.0, but the declared floor allows outdated Node, leading to a broken install with no working DB. | **No fix PR yet** (filed 2026-08-24) |
| **Medium** | [#3457](https://nanocoai/nanoclaw/Issue/3457) | **`insertMessage()` UNIQUE-constraint crash.** On a retried delivery with the same message id, the plain `INSERT` crashes, contributing to duplicate-message symptoms. | **No fix PR yet** (filed 2026-08-23) |
| **Medium** | [#3498](https://nanocoai/nanoclaw/Issue/3498) | **update-nanoclaw no-op on macOS.** `path.resolve()` vs realpath on symlinked tmpdir breaks the entrypoint guard. | **No fix PR yet** (filed 2026-08-24) |

---

## 6. Feature Requests & Roadmap Signals

Active feature work signals a strong focus on **multi-agent observability** and **platform robustness**:

- **Build Remote Agent (Phone Pairing):** Open PR [#3494](https://nanocoai/nanoclaw/PR/3494) adds a `gbr/1` pairing-device adapter, allowing a phone to spectate/attach to a desktop agent via QR/code pairing. This suggests a move toward "remote control" use cases.
- **Cursor Agent SDK Integration:** A two-part feature (setup skill [#3355](https://nanocoai/nanoclaw/PR/3355) + provider payload [#3356](https://nanocoai/nanoclaw/PR/3356)) is still open, bringing Cursor as a first-class provider.
- **Codex Setup-Driver Auth:** PR [#3489](https://nanocoai/nanoclaw/PR/3489) adds structured setup-driver authentication for the Codex provider, indicating continued investment in the "providers" ecosystem.
- **GitHub Polling Mode:** Long-standing PR [#2301](https://nanocoai/nanoclaw/PR/2301) adds a NAT/firewall-friendly polling mode for GitHub integration — a constant request from self-hosters.

*Prediction:* The next minor release (v2.4.0) will likely land the **Chat SDK 4.32.0 lockstep** and the **typing-indicator lifetime** feature, as they are already stacked and in review. The **Cursor** provider may follow shortly after.

---

## 7. User Feedback Summary

- **Frustration with duplicate messages:** Issue #2404 is top-of-mind for users, indicating that message de-duplication is a core reliability expectation that is currently being violated.
- **Discord UX is a priority:** The prompt fix of #3456 and the severity label ("high — approval/ask_question cards on Discord are unusable") shows that Discord is a first-class channel for the community, and broken interactive cards are unacceptable.
- **Setup friction on macOS:** Issues #3497 and #3498, both filed today by the same user, paint a picture of a poor out-of-box experience on macOS compared to Linux. This is a common self-hoster pain point.
- **Self-recovery expectations:** The tone of issue #3455 ("no self-recovery") suggests users expect the system to be resilient to transient hangs, not just retry forever.

---

## 8. Backlog Watch

These items are either long-queued or critical and need maintainer attention:

- **PR #3142 — Signal attachment forwarding fix** ([link](https://nanocoai/nanoclaw/PR/3142)) — **Open since 2026-07-27.** Fixes a dead path for image/file attachments in the Signal adapter. A month-old fix with no merge activity may indicate a bottleneck or the need for review.
- **PR #2301 — GitHub polling mode** ([link](https://nanocoai/nanoclaw/PR/2301)) — **Open since 2026-05-06.** A popular feature for NAT/firewall users; likely warrants a decision (merge, refine, or close with guidance).
- **PR #2537 — Pre-commit hooks CI** ([link](https://nanocoai/nanoclaw/PR/2537)) — **Open since 2026-05-18.** An infrastructure improvement that has been idle for months; maintainers should determine if it conflicts with current CI strategy.
- **Issue #3455 — Claim-stuck watchdog bug** ([link](https://nanocoai/nanoclaw/Issue/3455)) — **High severity, no fix PR.** Filed yesterday; this is a critical stability issue and should be prioritized for a hotfix.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-08-24**.

---

### 1. Today's Overview
Project activity is **minimal**, indicating a low-velocity day for the NullClaw repository. The last 24 hours saw a single issue updated (#991) and zero pull request activity or releases, suggesting maintainers may be focused on stabilization rather than feature development. The only active discussion revolves around a **critical concurrency bug** involving MCP server deadlocks, signaling that while the project is quiet, reliability remains a primary concern. Overall, project health is stable but requires attention to the emerging deadlock issue to prevent user friction.

### 2. Releases
**No new releases** were published in the last 24 hours. The most recent version remains **2026.8.22** (referenced in the issue context). Users are advised to monitor the releases page for the next patch that likely addresses the stability issue mentioned below.

### 3. Project Progress
- **PRs Merged/Closed:** 0
- **Features Advanced:** None detected. There is no evidence of new feature implementation or bug fixes being merged in this window, indicating a pause in code integration cycles.

### 4. Community Hot Topics
- **[#991: MCP stdio calls can hang indefinitely behind the Proxmox launcher lock](https://github.com/nullclaw/nullclaw/issues/991)**
  - *Activity:* 2 comments, 0 reactions.
  - *Analysis:* This is the sole active discussion. The underlying need here is **process isolation and resource locking integrity**. Users are running a lightweight `nullclaw agent` CLI command alongside a persistent `nullclaw-gateway.service`, and the two are conflicting over the stdio transport for MCP servers. The core demand is for the agent to either detect the lock gracefully with a clear error message or spawn an isolated MCP process without blocking.

### 5. Bugs & Stability
- **[Severity: High] #991 – MCP stdio deadlock**
  - *Symptoms:* Standalone `nullclaw agent` invocations hang indefinitely when the configured stdio MCP server (a read-only Proxmox bridge with 148 tools) is already owned by the long-lived gateway daemon.
  - *Impact:* Blocks any CLI-based automation or one-off queries when a gateway is active. This can break cron jobs or scripts relying on `nullclaw agent`.
  - *Status:* **Open**; no linked fix PR exists at this time. Maintainers have not yet provided a workaround in the thread.

### 6. Feature Requests & Roadmap Signals
There are **no explicit new feature requests** in the current issues list. However, the nature of the current bug suggests a potential roadmap item: **Improving the MCP Server lifecycle manager**. We predict the next minor version (2026.9.x) may include a reworked lock acquisition mechanism that introduces timeouts or non-blocking "spawn-on-demand" modes for MCP bridges to prevent head-of-line blocking.

### 7. User Feedback Summary
- **Pain Point:** The primary user (locke1979) is frustrated by the **lack of non-blocking concurrency** between the gateway daemon and the CLI agent. The system currently treats the MCP server as a singleton resource without adequate lock handling for short-lived processes.
- **Use Case:** The user operates a **Proxmox environment** with a large MCP bridge (148 tools). They rely on the gateway for long-running sessions but also need the CLI for ad-hoc commands—a standard power-user workflow that is currently broken.
- **Satisfaction:** Neutral-to-negative. Since the issue was created yesterday and has gained attention, users are awaiting a maintainer response. The silence is likely to increase dissatisfaction if not addressed promptly.

### 8. Backlog Watch
- **#991 (Open, Created 2026-08-23):** While not "long-unanswered" by historical standards, this issue is **high-priority** due to its severity. It requires immediate maintainer triage within the next 48 hours to provide a workaround (e.g., using a different transport or disabling the gateway temporaily) or to acknowledge the bug and set a fix timeline. Failure to respond will likely result in duplicate reports.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-24

## Today's Overview

IronClaw is in a period of sustained high activity, with 12 open issues and 23 pull requests updated in the last 24 hours—a significant volume that reflects active development across multiple fronts. The project is currently executing a coordinated CI infrastructure overhaul (labeled T1–T4) alongside a major sandbox architecture initiative centered on persistent per-user environments with the iron-proxy sidecar. Notably, several user-reported integration setup failures (Slack, Gmail, Notion, Telegram) have surfaced from product feedback channels, indicating that while core infrastructure progresses well, third-party connection reliability remains a pain point. A cluster of small-to-medium dependency bumps (Rust, wasm, GitHub Actions) are cycling through, suggesting healthy maintenance hygiene. No new releases were published today, but the volume of merged and open PRs signals that a substantial update may be imminent.

---

## Releases

No new releases were published in the last 24 hours. The last release tag remains unchanged, and the project appears to be mid-cycle between version bumps, with the v1.4.0 epic (epic issue #7732) still in active development.

---

## Project Progress

**Merged/Closed PRs (5 total today):**

- **[PR #7730](https://github.com/nearai/ironclaw/pull/7730) — chore(deps): bump the everything-else group (6 updates)** — Routine Rust dependency refresh covering uuid, base64, toml, and others; low-risk maintenance merge.
- **[PR #7406](https://github.com/nearai/ironclaw/pull/7406) — chore(deps): bump the actions group (4 updates)** — GitHub Actions dependency updates including claude-code-action, setup-node, rust-cache, and docker/login-action.
- **[PR #7262](https://github.com/nearai/ironclaw/pull/7262) — chore(deps): bump the wasm group (2 updates)** — Updates to wit-component and wit-parser from the wasm-tools ecosystem.

**Key Feature Advances (open but actively progressing):**

- **[PR #7810](https://github.com/nearai/ironclaw/pull/7810)** — The sandbox egress auth work is advancing: manifest-declared direct-exec credential bindings behind the managed proxy. This completes the per-user persistent sandbox runtime with per-user managed egress. GitHub CLI (`gh`) is the first credential-mediated tool, with a one-shot secret substitution model that never exposes the real token to the command itself.
- **[PR #7833](https://github.com/nearai/ironclaw/pull/7833)** — Closes issue #7812: suggestion generation now runs against the user's actual connected, read-only tools with no-approval permissions, grounding suggestions in real user data rather than a hardcoded four-capability allowlist.
- **[PR #7818](https://github.com/nearai/ironclaw/pull/7818)** — Background subagent mode (slices 2b+2c): receipt spawns, per-child delivery, activation, and healing sweeps. This is the producer half that turns on the surface from slice 2a.

**CI Infrastructure (4 parallel tracks):**

- **T1 (PR #7821)** — Single setup-rust composite action: toolchain pin, mold linker, centralized build profiles.
- **T2 (PR #7817)** — nextest test pipeline with full-failure signal and PR unthrottle; two THROWAWAY branches (#7839, #7838) are exercising CI arms for this.
- **T3 (PR #7819)** — PR/queue check convergence: planner drift guard, default-features clippy on PRs.
- **T4 (PR #7809)** — Canonical preflight: one gate list, worktree-safe hooks, self-printing REPRO.

---

## Community Hot Topics

The most active discussions center on persistent sandbox architecture and onboarding quality:

### 1. [Issue #7732](https://github.com/nearai/ironclaw/issues/7732) — Epic: Persistent per-user sandbox with iron-proxy (9 comments, 0 reactions)
> **The v1.4.0 epic** — the single most-commented issue today. It outlines the long-term vision: Reborn already routes `builtin.shell` through Docker, but currently creates/removes a container per command. The goal is a persistent per-user computer with `/workspace` persisting per `(tenant, user)`. This represents the architectural core of IronClaw's next major release, with the iron-proxy sidecar serving as the managed egress point.

### 2. [Issue #7812](https://github.com/nearai/ironclaw/issues/7812) — Onboarding suggestions: respect user-level tool permissions (3 comments, 0 reactions)
> Suggestion generation currently only has internal search tools, so onboarding cards aren't grounded in the user's actual data. The community/team is pushing for connected tools during suggestion generation, respecting user-level permissions with read-only access. **PR #7833 is actively addressing this.**

### 3. [PR #7810](https://github.com/nearai/ironclaw/pull/7810) — Sandbox egress auth: native iron-proxy recipes (high activity)
> The credential-binding mechanism for `gh` CLI through the sandbox proxy is a hot topic, touching security architecture — the command sees a random placeholder; only the proxy substitutes the real secret, and only for the exact authorized invocation.

**Underlying needs analysis:** The pattern is clear — IronClaw is shifting from per-command sandboxing toward persistent user environments with careful credential management. The community and core team are aligned on: (a) persistent workspaces, (b) least-privilege credential exposure via proxy mediation, and (c) grounding AI suggestions in real connected user data.

---

## Bugs & Stability

**Ranked by severity:**

### High Severity

1. **[Issue #7842](https://github.com/nearai/ironclaw/issues/7842) — Generic "invalid result" error during request execution**
   - **Reported:** 2026-08-24 (today), source: x-ai-product-feedback
   - **Impact:** A user's request stopped with a generic, unhelpful error. No reproduction details, no fix PR yet.
   - **Concern:** Generic errors are hard to diagnose; this may indicate an unhandled edge case in execution.

2. **[Issue #7841](https://github.com/nearai/ironclaw/issues/7841) — Telegram setup dead-ends on "admin must configure"**
   - **Reported:** 2026-08-24 (today), source: x-ai-product-feedback
   - **Impact:** Telegram integration setup terminates with an admin-configuration error, effectively blocking the channel.

### Medium Severity

3. **[Issue #7829](https://github.com/nearai/ironclaw/issues/7829) — Gmail setup fails in web UI with auth popup disappearing**
   - **Reported:** 2026-07-28 (via Slack), filed 2026-08-23
   - **Impact:** The Google auth popup appears for ~1 second then disappears, making OAuth flow unusable in the web UI.

4. **[Issue #7830](https://github.com/nearai/ironclaw/issues/7830) — Notion extension fails to install**
   - **Reported:** 2026-07-28 (via Slack), filed 2026-08-23
   - **Impact:** Notion integration installation fails without a clear error path.

5. **[Issue #7828](https://github.com/nearai/ironclaw/issues/7828) — Slack setup blocked in NEAR Foundation account**
   - **Reported:** 2026-07-28 (via Slack), filed 2026-08-23
   - **Impact:** Slack setup appears blocked for at least one NEAR Foundation account specifically — possibly a tenant-level configuration issue.

### Low Severity

6. **[Issue #7840](https://github.com/nearai/ironclaw/issues/7840) — Slack: connect guidance gap**
   - **Reported:** 2026-08-24 (today)
   - **Impact:** The app does not clearly guide users to connect Slack — a UX/onboarding deficiency rather than a hard failure.

**Fix PR Status:** No fix PRs exist yet for these bugs; they are freshly filed or recently triaged. The [PR #7826](https://github.com/nearai/ironclaw/pull/7826) ("Install the packages the hub publishes") touches on catalog install failures broadly and may indirectly address the Notion/extension install path.

---

## Feature Requests & Roadmap Signals

### Explicit Requests / Signals:

1. **[Issue #7836](https://github.com/nearai/ironclaw/issues/7836) — Tool advertisement: filter by availability**
   - **Signal:** The model-visible tool surface advertises capabilities that can't execute in the current deployment. The request is to filter by installed + activated + credential-ready + authorized. **This directly targets model-call success rates** and was measured on PinchBench — suggesting this is grounded in benchmark data. **Likely v1.4.0 candidate.**

2. **[Issue #7825](https://github.com/nearai/ironclaw/issues/7825) — Sandbox egress auth: retire GitHub-specific carve-out**
   - **Signal:** PR #7810 mediates GH credentials, but the team wants to generalize this. Native iron-proxy recipes with a host credential broker, replacing the GitHub-specific carve-out with a general pattern. **Architectural maturation signal.**

### Ecosystem Signals (from PRs):

3. **[PR #7516](https://github.com/nearai/ironclaw/pull/7516) / [PR #7826](https://github.com/nearai/ironclaw/pull/7826) — IronHub agent link operator surface**
   - A WebUI surface for the IronHub agent link is being added — operators can only do this via CLI today. Combined with hub-published package installation fixes, this signals the WebUI is becoming a complete operational surface.

4. **[PR #7831](https://github.com/nearai/ironclaw/pull/7831) — Design System Phase 3a foundation**
   - A Chromatic visual-regression lane plus missing design-token axes — the first step toward a larger reskin. Non-blocking by design, suggesting cautious rollout.

### Prediction for Next Release (v1.4.0):
- Persistent per-user sandbox with iron-proxy (epic #7732)
- Tool advertisement filtering by real availability (#7836)
- Suggestion generation grounded in user-connected tools (#7812, PR #7833)
- General sandbox egress auth via host credential broker (#7825)
- Background subagent mode (PR #7818)

---

## User Feedback Summary

**Pain Points (from #x-ai-product-feedback triage):**

1. **Integration Setup Failures (dominant theme):** Five of the twelve active issues are setup failures: Slack (×2 accounts), Gmail (auth popup disappearing), Notion (install failing), Telegram (admin-config dead-end). Users are blocked connecting the tools they need. The Gmail popup issue is particularly concerning — auth flows are broken in the web UI.

2. **Generic Errors:** One user hit a generic "invalid result" error, which is unactionable and frustrating.

3. **Onboarding Gaps:** Users aren't guided to connect Slack — the app doesn't make the path to integration obvious.

**Positive Signals:**
- Users are actively trying to install and configure integrations, indicating real adoption.
- The NEAR Foundation account being affected by Slack setup suggests internal dogfooding is active.

**Satisfaction Assessment:** Neutral-to-mixed. Core functionality likely works, but the integration setup wall is a significant barrier — until these channel-connection flows are stable, new users will churn.

---

## Backlog Watch

### Issues Needing Maintainer Attention:

1. **[Issue #7732](https://github.com/nearai/ironclaw/issues/7732) — Epic: Persistent per-user sandbox (v1.4.0)** — 6 days old, 9 comments — actively worked but epic-scale; needs ongoing grooming.

2. **[Issue #7827 / #7832 — Slack feedback triage loops](https://github.com/nearai/ironclaw/issues/7827)** — These scheduled triage passes are creating multiple overlapping sub-issues (7827, 7828, 7829, 7830, 7832). Watch for duplicate-issue fatigue — the team should consolidate related setup failures (Slack, Gmail, Notion, Telegram) into a single "integration setup stability" epic.

### PRs Needing Eyes:

3. **[PR #7255](https://github.com/nearai/ironclaw/pull/7255) — Evaluate APDD governance kit** — 19 days old, open, no reviewer comments visible. Long-running governance evaluation that may be stuck; needs either a decision or an explicit de-prioritization.

4. **[PR #7020](https://github.com/nearai/ironclaw/pull/7020) — tokio-tungstenite bump (0.29.0 → 0.30.0)** — 22 days old, open. A minor dependency bump that's been lingering — likely blocked on a breaking-change review or merge conflict resolution.

5. **[PR #7516](https://github.com/nearai/ironclaw/pull/7516) — WebUI operator surface for IronHub agent link** — 12 days old from a new contributor (`neo-sky`). New-contributor PRs need timely review to maintain contributor morale; the contributor has a second PR (#7826) also waiting.

### Dependency Bumps to Watch:
- **[PR #7834](https://github.com/nearai/ironclaw/pull/7834)** — wasmtime/wit-component bumps (medium risk, 4 updates)
- **[PR #7837](https://github.com/nearai/ironclaw/pull/7837)** — base64 0.22.1 → 0.23.1 (major version jump; needs scrutiny for API changes)
- **[PR #7835](https://github.com/nearai/ironclaw/pull/7835)** — actions/setup-node 4.0.2 → 7.0.0 (major Node.js setup action jump; may change default Node versions in CI)

---

*Digest generated from IronClaw GitHub activity for 2026-08-24. All links point to nearai/ironclaw issues and PRs.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-08-24

---

## 1. Today's Overview

LobsterAI shows a quiet period with 4 issues and 3 PRs updated in the last 24 hours, all of which are now closed/merged. All items carry the `[stale]` tag, indicating they are older issues/PRs (created in April 2026) that have only now been recently updated or closed, rather than fresh activity. There were no new releases and no active open items in the last 24 hours. The project appears stable but with reduced recent momentum, and the closing of these stale items suggests maintainers are cleaning up the backlog.

---

## 2. Releases

No new releases were published in the last 24 hours. The "Latest Releases" section is empty.

---

## 3. Project Progress

All three PRs updated in the last 24 hours were closed/merged:

- **[PR #1199 – feat(model): add context window and token settings](https://github.com/netease-youdao/LobsterAI/pull/1199)** — Added per-model `contextWindow` and `maxTokens` settings, persistence and export of these fields, and propagation into Cowork/OpenClaw config. This is a meaningful feature that improves model-level configuration flexibility.

- **[PR #1201 – Fix: NIM teamTypeNum hardcoding bug (supergroup name issues)](https://github.com/netease-youdao/LobsterAI/pull/1201)** — A one-line fix for incorrect `teamTypeNum` enum values in `nimGateway.ts`, resolving a bug where supergroup names were not correctly resolved when @-mentioning bots in NIM supergroups. This is a targeted bug fix.

- **[PR #1197 – Agent management page interaction optimization](https://github.com/netease-youdao/LobsterAI/pull/1197)** — Improves UX by reducing interaction depth for deletion operations and improving sidebar behavior. This was noted to have merge conflicts with the main branch but has since been closed.

---

## 4. Community Hot Topics

All four issues updated in the last 24 hours have exactly 2 comments and 0 👍 reactions — none stand out heavily in terms of community engagement. However, the most substantive discussions were:

- **[Issue #1202 – Agent leaks model key information (security risk)](https://github.com/netease-youdao/LobsterAI/issues/1202)** — A concerning security issue where the agent fails to protect model API keys when asked about configuration. This is the most critical item from a security perspective despite low engagement numbers.

- **[Issue #1196 – Don't force creation of AGENTS.md and other system files in working directory](https://github.com/netease-youdao/LobsterAI/issues/1196)** — Users are frustrated with the forced creation of 6 system files in each working directory. This reflects a desire for cleaner workspace management.

The low reaction/comment counts suggest these are actively being reviewed and closed by maintainers rather than generating sustained community discussion.

---

## 5. Bugs & Stability

Two bugs were addressed/closed in the last 24 hours, ranked by severity:

1. **[HIGH – Issue #1202 – Agent leaks model API key information](https://github.com/netease-youdao/LobsterAI/issues/1202)** — Security vulnerability where the agent discloses sensitive key configuration details when prompted. This is the most severe issue, with significant security implications. No fix PR was observed for this yet.

2. **[MEDIUM – Issue #1200 → Fixed in PR #1201 – NIM teamTypeNum hardcoding bug](https://github.com/netease-youdao/LobsterAI/issues/1200)** — Incorrect enum values caused wrong group name resolution in NIM supergroups. A one-line fix in [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201) has resolved this.

3. **[LOW/UX – Issue #1198 – Gateway restart progress disappears, unreliable status message](https://github.com/netease-youdao/LobsterAI/issues/1198)** — Progress bar disappears during gateway restart, and misleading "browser service unavailable" messages confuse users. No specific fix PR identified.

---

## 6. Feature Requests & Roadmap Signals

The following features/signals emerged from closed items:

- **[Model-level context window and token settings](https://github.com/netease-youdao/LobsterAI/pull/1199)** — Now merged, this confirms a roadmap direction toward more granular model configuration. Expect this to be included in the next release.

- **[Agent management page interaction improvements](https://github.com/netease-youdao/LobsterAI/pull/1197)** — UX optimization for agent management is now closed. Likely to be included in upcoming releases.

- **[Flexible system file placement (Issue #1196)](https://github.com/netease-youdao/LobsterAI/issues/1196)** — Users want the option to use a global `agents.md` instead of forced per-directory system files. This shows an interest in more configurable workspace management.

---

## 7. User Feedback Summary

Real user pain points highlighted in the last 24 hours:

- **Workspace clutter (Issue #1196):** Users find the forced creation of 6 system files (AGENTS.md, USER.md, etc.) in every working directory messy and annoying. They want a global/centralized alternative or hidden directory placement.

- **Misleading error messages (Issue #1198):** The gateway restart UX is confusing — the progress bar disappears, and the system reports "browser service unavailable" despite Chrome being open. Users want clearer status communication.

- **Security trust concerns (Issue #1202):** The agent leaking model API keys undermines user trust in the system's security posture.

Overall, users appear to value configuration control and clear system communication but are dissatisfied with current defaults around file management and error messaging.

---

## 8. Backlog Watch

No issues currently require maintainer attention, as all items updated in the last 24 hours have been closed. However, looking ahead:

- The **[security issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202)** regarding key leakage was closed as stale, but this is a serious concern that should be tracked for future fixes.

- The **[gateway restart UX issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198)** was closed as stale, but poor user experience around status communication may resurface if not addressed.

All other issues and PRs appear to have received appropriate attention and closure.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**2026-08-24**

---

## 1. Today's Overview

Moltis is in a high-velocity stabilization phase, with 10 pull requests updated in the last 24 hours and 9 of them merged or closed. The team is systematically addressing infrastructure robustness across multiple connectors (WhatsApp, Browserless, Slack), memory subsystem safety, and build packaging issues. No new releases were published today, but the sheer volume of merged fixes indicates a consolidated effort to harden the codebase. The two open issues—a long-standing TLS/WebSocket bug and a newer Slack shared-channel failure—remain the primary user-facing concerns. Overall, the project shows strong maintainer responsiveness and healthy engineering momentum.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

Nine PRs were merged or closed today, covering a broad range of fixes:

- **Cron Delivery Fix** ([#1226](https://github.com/moltis-org/moltis/pull/1226)): Scheduled output now correctly delivers to the originating chat via a transient `payload.deliver_to_current_chat` shortcut, preserving explicit delivery fields and thread/topic routing.
- **Traditional Chinese Locale Improvement** ([#1225](https://github.com/moltis-org/moltis/pull/1225)): Major rewrite and expansion of the `connectors.ts` translation file, plus terminology consistency passes across multiple modules.
- **Obscura Stealth Mode by Default** ([#1227](https://github.com/moltis-org/moltis/pull/1227)): Browser stealth mode is now enabled by default, with a new `tools.browser.obscura_stealth` config flag (default `true`) for operators to opt out.
- **WhatsApp Inbound File Persistence** ([#1228](https://github.com/moltis-org/moltis/pull/1228)): Inbound documents are now downloaded and persisted (20 MB limit) so local tools receive a stable `local_path` instead of only metadata.
- **Browserless v2 Container Support** ([#1229](https://github.com/moltis-org/moltis/pull/1229)): Full support for Browserless v2 container protocol (Base64 launch arguments, `TIMEOUT`/`CONCURRENT`), while retaining v1 as default.
- **MCP Client Reconnection Fix** ([#1231](https://github.com/moltis-org/moltis/pull/1231)): Resolves the issue where tool bridges kept dispatching through closed MCP client instances after a server restart.

- **Recursive Bundled Sidecar Materialization** ([#1234](https://github.com/moltis-org/moltis/pull/1234)): Fixes a packaging bug where recursive bundled skill sidecars (e.g., `scripts/quick_validate.py`) reported "not found" in pre-built releases and Docker images.
- **Memory Backend Config Normalization** ([#1235](https://github.com/moltis-org/moltis/pull/1235)): Normalizes the built-in memory runtime name from `sqlite` to the editable config value `builtin`, with Rust round-trip and e2e regression tests.
- **Embedding Encoder Batch Bounding** ([#1236](https://github.com/moltis-org/moltis/pull/1236)): Bounds local GGUF embedding encoder batches to prevent process termination when tokenized chunks or queries exceed 512 tokens.

---

## 4. Community Hot Topics

- **Issue #245 — h2 ALPN breaks WebSocket** ([link](https://github.com/moltis-org/moltis/issues/245)): With 2 comments, this issue describes a TLS negotiation bug where advertising `h2` as the first ALPN protocol causes WebSocket connections to fail on fresh browser sessions (page refresh or new tab), while existing tabs survive via h1.1 session reuse. The issue has been open since February and remains unaddressed.

- **Issue #1224 — Tools stop working in shared Slack channels** ([link](https://github.com/moltis-org/moltis/issues/1224)): Opened 3 days ago, this bug report is still without comments. Users report tool failures in shared Slack channels despite following the preflight checklist. The novelty and lack of traction suggest it may need maintainer triage.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | [#245](https://github.com/moltis-org/moltis/issues/245) — TLS h2 ALPN breaks WebSocket on fresh connections | Open, no fix PR | Critical UX regression for browser-based WS; open for 6 months; needs prioritization |
| **Medium** | [#1224](https://github.com/moltis-org/moltis/issues/1224) — Tools fail in shared Slack channels | Open, no fix PR | Recently reported; no maintainer response yet |
| **Medium** | Embedding process crash (fixed in [#1236](https://github.com/moltis-org/moltis/pull/1236)) | **Fixed today** | Local GGUF embeddings could terminate the entire process on long inputs (>512 tokens) |
| **Medium** | MCP dispatch via stale client (fixed in [#1231](https://github.com/moltis-org/moltis/pull/1231)) | **Fixed today** | After server restart, chat turns used closed client instances until next registry rebuild |
| **Low** | Bundled sidecar "not found" (fixed in [#1234](https://github.com/moltis-org/moltis/pull/1234)) | **Fixed today** | Affected pre-built releases and Docker images only |

---

## 6. Feature Requests & Roadmap Signals

- **WhatsApp Document Ingestion (opt-in)** — Open PR [#1233](https://github.com/moltis-org/moltis/pull/1233) proposes a per-account `download_inbound_documents` option. This builds on the already-merged persistence fix ([#1228](https://github.com/moltis-org/moltis/pull/1228)) and adds granular control. Given the momentum, this is likely to merge soon and appear in the next release.

- **Browserless v2 Support** — Already merged ([#1229](https://github.com/moltis-org/moltis/pull/1229)). Look for v2 container compatibility in upcoming releases, possibly alongside updated documentation.

- **Obscura Stealth Toggle** — Merged ([#1227](https://github.com/moltis-org/moltis/pull/1227)), but the config flag suggests the team anticipates operators needing to disable stealth. This may become a documented deployment consideration.

---

## 7. User Feedback Summary

- **Pain Point — WebSocket reliability:** Issue #245 describes a subtle and frustrating failure mode (works on first load, breaks on refresh). The 6-month open period with no fix is a concern for user trust, especially for browser-based workflows.
- **Pain Point — Slack shared-channel breakage:** Issue #1224 represents an integration failure in a common enterprise use case (shared channels). The lack of comments and triage is notable.
- **Satisfaction — Rapid bug fixes:** The volume and breadth of today's merged PRs (cron, i18n, browser, WhatsApp, MCP, memory) signals that reported issues are being addressed quickly, which likely boosts community confidence.

---

## 8. Backlog Watch

- **Issue #245 — h2 ALPN WebSocket breakage** ([link](https://github.com/moltis-org/moltis/issues/245)): **Open for 6 months**, 2 comments, no fix PR, no maintainer response visible. This is the **most critical backlog item** — it is a reproducible, version-specific bug affecting a core feature (WebSocket over TLS). It needs a fix or at least an explicit workaround/documentation update.

- **Issue #1224 — Slack shared channel tools failure** ([link](https://github.com/moltis-org/moltis/issues/1224)): **Open for 3 days**, no comments, no triage. While new, the lack of any response suggests it may be overlooked. Needs a maintainer acknowledgment or repro attempt.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-24

## 1. Today's Overview
CoPaw (QwenPaw) is in a busy maintenance-and-feature-development phase, with 15 PRs updated in the last 24 hours (a 2:1 ratio of open-to-merged/closed work) and 5 active issues, all still open with no closures — indicating a growing accumulation of unresolved user reports. No new releases were published today; the project is operating on v2.1.0. The open PR backlog contains several `first-time-contributor` submissions (5 of 7 open PRs), suggesting active community engagement but a potential bottleneck in maintainer review throughput. The issue tracker shows a concentration of runtime stability concerns (memory leaks, connection drops, state contamination bugs) that deserve immediate maintainer attention.

## 2. Releases
No new releases were published in the last 24 hours. The project is on v2.1.0, and there are no release candidates, changelogs, or pre-release artifacts to report.

## 3. Project Progress
Eight PRs were merged or closed in the last 24 hours, indicating meaningful progress across several areas:

- **[PR #6220] (fix, closed)** — `fix(token_usage): don't persist an unseeded cache on shutdown`: Fixes a token-usage accounting bug where an empty disk cache was written on shutdown, potentially corrupting usage metrics. Contributed by Yigtwxx.
- **[PR #6203] (fix, closed)** — `fix(utils): bound and hide the Windows tasklist liveness probe`: Adds a missing timeout and suppresses the console window for the Windows `tasklist` subprocess probe in `command_runner.py`, preventing hangs and UI flashes. Contributed by Yigtwxx.
- **[PR #6616] (fix, closed)** — `fix(cli): build a valid user message for the headless task command`: Fixes the `qwenpaw task` command, which never actually ran tasks due to a type mismatch (`str` vs `list[ContentBlock]`) in the `Msg.content` field on the pinned `agentscope==2.0.4.post1`. Contributed by Yigtwxx.
- **[PR #7033] [PR #7031] (feature, closed)** — `feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix`: Merges a runtime skill lifecycle system enabling dynamic loading/unloading of skills and fixes frontmatter/lazy-skill path bugs. Submitted by Ferrum360 (duplicate PRs, both closed, indicating the branch was consolidated).
- **[PR #7032] [PR #7030] (feature, closed)** — `feat(auto-title-sync): auto-memory linked chat title refresh + observability`: Implements dynamic chat title updates driven by auto-memory events, replacing static first-message truncation placeholders. Submitted by Ferrum360 (also consolidated duplicates).
- **[PR #7027] (feature, closed)** — `feat: auto-title-sync + skill-system cleanup`: Combined commit (from Ferrum360) that includes both landscape features plus cleanup of backup/lock files, presumably the actual merged canonical version.

**Key advancement**: The skill-system lifecycle work (dynamic loading/unloading + frontmatter fixes) is a substantial infrastructure improvement that enables runtime skill management — likely to be featured in the next release.

## 4. Community Hot Topics
The most actively discussed items today (with greatest comment activity) are:

- **[Issue #7221] — Feature Request: `reload_agent()` drops plugin workspace-scoped registrations** (3 comments). The user's config-change reload silently loses runtime hooks, modes, and slash commands registered by plugins. This touches a core reliability concern: zero-downtime reloads should preserve, not forget, plugin state. The underlying need is for a stable "workspace-scoped plugin lifecycle" API.

- **[Issue #7222] — Performance: Long-running backend memory grows to 20GB+** (2 comments). A running process accumulates memory over 2+ days of heavy usage, unrelated to the startup leak tracked in #9. The expectation is that long-running agents should have stable memory footprints; this is a high-priority stability complaint.

- **[Issue #7218] — Bug: Peer closed connection incomplete chunked read** (1 comment). Intermittent connection drops with long-context/inference-heavy workloads; the user suspects a missing timeout setting (their custom model side reports ~130–140s exits despite a 180s config). This is an integration/robustness concern.

- **[Issue #7217] — Bug: Task interruption causes full conversation replay** (1 comment). After stopping a task mid-run, the next conversation replays the previous turn's full context and thinking. This indicates a stale-agent-state bug, potentially related to the same lifecycle concerns as #7221.

The common thread across these topics: **state management and lifecycle reliability** — both for plugin registrations, memory limits, and agent resets. This suggests the community is increasingly stress-testing CoPaw's long-session performance and plugin pattern.

## 5. Bugs & Stability
Ranked by severity (high → low):

1. **[Issue #7222] — Unbounded memory growth (20GB+)** — High severity. A 2-day runtime leak that degrades host performance, and it's distinct from the previously reported startup leak (#9). No fix PR is open. Needs a heap-profile investigation and a memory-bounding strategy (e.g., cache eviction caps, per-agent token buffers).
2. **[Issue #7221] — Plugin workspace-scoped registrations dropped on reload** — High severity for plugin users. A zero-downtime reload silently discards runtime hooks/modes/commands. No fix in flight; the plugin lifecycle needs a serialization/restoration protocol.
3. **[Issue #7217] — Conversation replay after mid-run stop** — Medium severity. Stale agent state causes a full rerun of prior reasoning — breaks user trust and wastes tokens; suggests a missing context-clearing on interruption.
4. **[Issue #7218] — Incomplete chunked read / peer closed connection** — Medium severity. Unstable long-inference connections; may be a client-side timeout issue (configurable, not found in UI).
5. **[Issue #7224] — HELP: integrate Aider CLI — Question** — Low severity (support query).

**Mitigation status**: No bug-fix PRs are specifically open today for the above issues, but the merged PRs (#6203 Windows probes, #6220 TokenUsage, #6616 CLI task) address adjacent stability concerns. The team should prioritize a "state-lifecycle" refactor (#7221, #7217) and a memory-retention review (#7222).

## 6. Feature Requests & Roadmap Signals
- **Session-scoped multi project directories** ([PR #6976], Open): One chat bound to an ordered project-list with a primary `cwd`. This is a strong signal for multi-repo workflows and will likely land if the maintainer deems the API stable.
- **Workspace-scoped always-on skills** ([PR #7183], Open): An opt-in mode to preload core Skills before the model's first decision — reduces latency on specialized agents. Fits the theme of "runtime skill management" from #7033/#7031, suggesting an "always-on mode" might complement the new dynamic lifecycle.
- **All-agent LLM & tool-call trend chart** ([PR #7219], Open): Adds a Token Usage trend visualization in Settings, leveraging existing `by_date` counters. A nice observability addition, likely to be merged if the backend endpoint is lightweight.
- **Reject oversized image dimensions** ([PR #7220], Open): Hardens vision input by enforcing pixel-limit checks (not just byte limits) — a practical fix for large-image workflows; small, valuable change.
- **Persist rotated refresh_token for OAuth2 providers** ([PR #7066], Open): Fixes MCP server re-auth loop for rotating tokens (e.g., XMind). Important for long-running MCP integrations.

**Predictions for next version**: The most probable inclusions are the `skill-system` dynamic lifecycle (already merged into main), `auto-title-sync` (merged), `multi project directories` (#6976) if reviewed favorably, and `oversized image rejection` (#7220). The OAuth refresh-token persistence (#7066) is also under review and small enough to land.

## 7. User Feedback Summary
Real pain points reported by users:

- **Long-session instability**: Users running continuous workloads hit memory leaks (20GB+, #7222) and connection drops on inference-heavy calls (#7218). They expect hours-to-days stability without process restart.
- **Plugin/hook state loss**: When reloading config, plugin-scoped registrations vanish — forcing a restart to restore functionality. This frustrates power users who rely on runtime hooks/commands (#7221).
- **Interrupted sessions corrupt next turn**: Stopping a task mid-run causes the next conversation to replay the previous context + thinking verbatim, disrupting workflows and consuming extra tokens (#7217). Users expect a clean state reset.
- **CLI headless task usability**: Prior bug (#6616, now merged) where `qwenpaw task` never ran — a silent failure — is fixed; users can expect better headless CI integration.
- **Onboarding gaps**: A Russian-speaking user asks how to integrate Aider CLI as an agent (#7224) — indicates the plugin-agent extension docs and discovery are currently insufficient.
- **Custom model timeouts**: Confusion about client-side timeout settings (#7218) suggests the timeout config needs better discoverability/documentation.

**Satisfaction signal**: The steady stream of `first-time-contributor` PRs (5 of 7 open) and the broad community input (issues in English, Chinese, and Russian) indicate a healthy, engaged community — but also a widening gap between user-reported expectations and maintainer response capacity.

## 8. Backlog Watch
Items that need maintainer attention (awaiting response, review, or decision):

- **[PR #6976] — session-scoped multi project directories** (Open, 11 days): A structural API change, currently unreviewed. Needs an explicit maintainer decision or feedback to avoid community effort going stale.
- **[PR #7066] — OAuth2 refresh_token persistence** (Open, 8 days, "Under Review"): Fix for MCP re-auth loops — if maintainers don't prioritize, integrations like XMind will keep breaking.
- **[PR #7183] — workspace-scoped always-on skills** (Open, 4 days): A useful complement to the just-merged skill-system; waiting for initial review signal.
- **[PR #7223] — DeepSeek catalog refresh** (Open, 1 day): Small maintenance fix (removing retired models, updating pricing) — trivial to review, but important for users on aging DeepSeek API versions.
- **[Issue #7217] — task interruption replay bug** (Open, 1 day): No maintainer response yet. Given its severity (state bleed), a triage label and/or workaround guidance is overdue.

**Backlog action recommendation**: Maintainers should (1) at minimum comment on #6976 and #7183 to set review expectations, (2) fast-track merge of #7223 (tiny, high impact), and (3) start a triage conversation on #7222 (memory leak) to coordinate a fix across the agent-state lifecycle work. The convergence of #7221, #7217, and #7222 suggests a systemic "runtime state management" refactor would address multiple pain points at once.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-24

## 1. Today's Overview

ZeroClaw is in a period of intense architectural consolidation, with a significant focus on RFC-driven design decisions across runtime ownership, session persistence, and security hardening. The project shows strong momentum with 50 issues and 50 PRs updated in the last 24 hours, though the open-to-close ratio (38 open vs. 12 closed issues; 45 open vs. 5 merged/closed PRs) suggests a growing review queue. Notably, three new PRs were opened today (#10288, #10289, #10246) alongside continued activity on the substantial RFC documents #9487 and #9488, indicating maintainers are actively driving both new work and long-running design discussions forward. No new releases were published this period.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

**Merged/Closed PRs (5 total):** The digest data does not show explicit merge metadata for individual PRs beyond the aggregate count. Closed issues include:

- **#9666 — `fix(channels): make the filesystem listener cancellation-aware`** (closed): Resolved an idle blocking receive that could prevent supervisor shutdown or reload — a meaningful stability improvement for channel lifecycle management.
- **#2503 — `[Feature]: where is napcat channel`** (closed): Request for NapCat/OneBot 11 channel support was closed, presumably resolved with the feature delivered.
- **#2467 — `[Feature]: Webhook transforms`** (closed): Custom webhook path/transform support for arbitrary payload inspection appears to have landed.
- **#7099 — `[Feature]: Route zeroclaw status output through CLI i18n`** (closed): User-facing `println!` strings moved to the i18n layer.
- **#7314 — `[Tracker]: WASM plugin program`** (closed): The broad WASM plugin tracker has been closed, likely delegating its scope to more specific follow-up trackers.

**Active PRs advancing key areas:** While these remain open, several significant contributions progressed:

- **#10289 (new today)** — Retires the unused legacy HMAC node transport, simplifying the runtime crate architecture.
- **#10284 (new today)** — Cleans up 40 dead paths in GitHub labeler configuration.
- **#10072/#10075** — The stacked `file_download` SSRF hardening work continues: NAT64 prefix classification and threading live config through the gateway to the tool registry.
- **#10253** — Preserves scheduler workspace policy for cron jobs, fixing a security-policy bypass vector.
- **#10252** — Adds category-scoped cross-agent memory grants (an enhancement to memory isolation).
- **#10250** — Contains plugin private egress carveouts to only allow destinations already covered by `egress_hosts`.
- **#10256** — Redacts duplicate idempotency keys from structured logs, a security/privacy improvement.
- **#10241** — Restores supervised shell approval routing for channel-driven calls, fixing a denied-by-default regression.
- **#10258** — Fixes cron `update --command` patching to correctly map onto agent job prompts.

## 4. Community Hot Topics

The most active discussions revolve around foundational architecture, indicating a community deeply invested in ZeroClaw's long-term direction:

- **[#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** (25 comments) — The highest-activity thread. This RFC proposes a significant shift in session ownership, moving toward runtime-authorized, durable admission semantics via `InboundAction`. The discussion spans architecture, security, and gateway/channel boundaries, and is closely linked with #9488 and #9600.

- **[#9488 — RFC: Unified attachment architecture for web chat and channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** (19 comments) — Companion RFC to #9487, focused on standardizing how attachments flow through all channels, reducing per-channel duplication.

- **[#6850 — RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** (17 comments) — Addresses a clear architectural debt: the `Memory` trait bundles storage with consolidation/governance logic. The community is pushing for a cleaner separation of concerns.

- **[#8780 — RFC: Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)** (17 comments) — A v2 rewrite of this proposal turned it into a broker contract for realtime voice channels, with Gemini Live as the first implementation target. High interest in voice interfaces.

- **[#8692 — Tracker: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** (13 comments) — This tracker itself is active, suggesting the volume of design issues may be straining the maintainer review process. The tracker's existence signals a need for process formalization.

- **[#8424 — RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** (12 comments) — Users need to protect workspace-internal sensitive files (e.g., `.env`, config files) from agent access; the current `forbidden_paths` mechanism only covers external paths.

**Underlying needs analysis:** The dominant theme is a community pushing for *architectural maturity*. The most-commented issues are RFCs about ownership boundaries (sessions, memory, attachments) rather than isolated features. This indicates ZeroClaw's user base includes serious operators and developers who want a stable, well-structured core that supports their deployment scenarios (voice, SMS, multi-channel, secure file handling).

## 5. Bugs & Stability

Several bugs were reported or actively worked this period, with security implications being the most prominent:

**High Severity:**

- **[#10075 — fix(runtime): thread live config through gateway chat to the tool registry](https://github.com/zeroclaw-labs/zeroclaw/pull/10075)** — Part of the SSRF hardening stack; fixes a path where the tool registry could use stale config, potentially allowing SSRF through `file_download`. Fix PR exists but is open and depends on #10072.

- **[#10241 — fix(channels): restore supervised shell approval routing](https://github.com/zeroclaw-labs/zeroclaw/pull/10241)** — A regression fix where channel-driven shell calls were being denied before any operator approval could occur. Fix PR is open.

- **[#10253 — fix(cron): preserve scheduler workspace policy](https://github.com/zeroclaw-labs/zeroclaw/pull/10253)** (open PR) — Prevents cron-run agents from re-resolving `SecurityPolicy`, which could bypass the intended workspace restrictions.

- **[#6105 — [Bug]: Agent doesn't have context of the cron job it's run](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)** (open, status:blocked) — An agent triggered by a cron job has no reference to its own scheduled message, making reminder-style use cases fail. This is blocked, likely waiting on session-context work from the RFCs.

**Medium Severity:**

- **[#10272 — [Bug]: correlate Hailo log assertions under parallel tests](https://github.com/zeroclaw-labs/zeroclaw/issues/10272)** (open, 2 comments) — Nondeterministic test failures in the Hailo provider integration target due to parallel test interference. Related PR #9109 is open; the bug may need to be resolved before that PR lands.

**Closed/Resolved:**

- **[#9666 — filesystem listener cancellation-aware](https://github.com/zeroclaw-labs/zeroclaw/issues/9666)** (closed) — The shutdown-blocking bug was fixed.

## 6. Feature Requests & Roadmap Signals

The RFC-heavy environment provides strong signals for the near-term roadmap:

**Likely in next releases:**

- **New Channels (high community demand):** The `channel` feature requests are numerous and specific. Issues for **[Twilio SMS](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)** , **[Zulip](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)** , **[Rocket.Chat](https://github.com/zeroclaw-labs/zeroclaw/issues/6435)** , **[Mastodon](https://github.com/zeroclaw-labs/zeroclaw/issues/6423)** , and **[Lemmy](https://github.com/zeroclaw-labs/zeroclaw/issues/6441)** are all `status:accepted` with `priority:p2`. These are "same shape, different protocol" additions that have been landing steadily. Expect these to ship incrementally as the channel architecture stabilizes.

- **WASM plugin program:** The closure of the broad **#7314 tracker** combined with the new **[RFC #10076 — Comprehensive WASM plugin architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)** signals a shift from broad vision to concrete design. A more extensible "everything is a plugin" model is on the horizon, though this is a large effort likely targeted for a major version bump.

- **SSRF Hardening:** The stacked PRs (**#10070, #10072, #10075**) on `file_download` indicate a coordinated effort to close security holes in tool networking. This is active, in-flight work.

**Possible / Longer-term:**

- **Realtime voice channel (#8780):** V2 of the RFC is well-formed but this is a complex feature with high risk. It could land behind a feature flag for Gemini Live users, but likely not in the immediate next release.

- **Agent Plugins (#9810), `.zeroclawignore` (#8424), and `ver` channel send (#10050):** These are valuable, well-scoped enhancements that could be picked up after the current architectural RFCs land.

- **Rust→Wasm web UI (#8132):** A major rewrite of the web frontend. The 👍 reaction and RFC status suggest support, but this is a large effort with `priority:p3`; expect it to remain on the back burner while core runtime work proceeds.

## 7. User Feedback Summary

Real pain points and use cases are surfacing clearly through the issue tracker:

- **Security is the top concern.** Issues and PRs around SSRF (file_download), sandbox policy (filesystem/network restrictions #6996), plugin egress (PR #10250), and idempotency key redaction (PR #10256) show operators are running ZeroClaw in sensitive environments and need strict, verifiable controls.

- **Operators need more channel options.** The flood of channel requests (Twilio, Mastodon, Zulip, Rocket.Chat, Lemmy, NapCat) indicates users want to meet their agents where their communities already are. The repeated "sibling to just-merged channel X" phrasing suggests this is a well-understood pattern that delivers immediate value.

- **The core agent loop needs to be more context-aware.** Bug #6105 (cron context) and the session-persistence tracker #9600 highlight a user need: the agent should know *why* it was triggered and *what* it was doing. The intense discussion around RFCs #9487 and #9600 shows this is a critical missing piece.

- **Configuration and path safety are confusing.** RFC #8424 (workspace-relative forbidden paths) and the granular sandbox policy RFC #6996 both point to users hitting hard limits with the current, simple `forbidden_paths` mechanism. They need finer-grained controls that match their real workspace layouts.

- **Positive signal:** The number of `status:accepted` issues (e.g., Twilio, Zulip, Rocket.Chat, Slack Events #9022, ACP pairing #6754) indicates maintainers are actively triaging and committing to new features, which should be reassuring to the community.

## 8. Backlog Watch

Several important issues and PRs appear to be at risk of stalling without maintainer attention:

- **[#6105 — Cron job context bug](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)** — Open since April 25, now marked `status:blocked`. This is a real user-facing bug (agents can't reference their own scheduled messages) that depends on the session-persistence RFCs. Maintainers should explicitly link its status to the RFC progress in #9600 to set expectations.

- **[#6996 — RFC: Granular sandbox policy (filesystem and network)](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** — Open since May 28, marked `status:in-progress` and `needs-maintainer-review`. The long review cycle on security-related RFCs suggests either understaffing or a very careful process. This is critical for enterprise adoption.

- **[#6850 — RFC: Decouple memory lifecycle policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** — High comment count (17) and open since May 22. A decision needs to be made; the longer this stays in RFC limbo, the more churn it causes in the memory/storage layers.

- **[#9743 — fix(providers): wire modalities parser into capabilities_for_model](https://github.com/zeroclaw-labs/zeroclaw/pull/9743)** — Open since August 4, labeled `needs-author-action`. The fix is important for provider capability detection, but the author may need maintainer guidance to complete it.

- **The "channel land rush"** — Issues #6427 (Twilio), #6437 (Zulip), #6435 (Rocket.Chat), and #6423 (Mastodon) are all accepted but appear to be awaiting implementation volunteers. While they're not blocked, they represent a backlog of user demand that could be a good target for "good first issue" labeling to attract new contributors.

- **[#10169 — docs(adr): file ADR-014 plugin egress authority](https://github.com/zeroclaw-labs/zeroclaw/pull/10169)** — Marked `status:blocked`; documentation for a proposed security decision. It's low-risk and likely depends on a related security decision, but it's worth a maintainer comment to unblock the documentation process.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*