# OpenClaw Ecosystem Digest 2026-08-11

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-11 01:51 UTC

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

# OpenClaw Project Digest — 2026-08-11

## 1. Today's Overview

OpenClaw remains extremely active, with **500 issues** and **500 PRs** updated in the last 24 hours. The project shows a healthy open/closed ratio (413 open vs 87 closed issues; 332 open vs 168 merged/closed PRs), indicating steady progress and maintained issue throughput. Notably, no new releases were published today, and the major focus is on resolving long-standing reliability and security issues rather than shipping new features. The sustained high volume of P1-tagged bugs—many spanning weeks and with recurring themes like duplicate message delivery and session state corruption—reveals that while the project is feature-rich, stability under real-world load remains the single biggest challenge. Maintainers are active, but the sheer volume of `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels suggests a backlog bottleneck on decision-making.

## 2. Releases

**None.** No new releases were published in the last 24 hours. The latest available versions remain those from the 2026.7.x beta line (e.g., v2026.7.2-beta.7) and the stable 2026.5.x/2026.6.x branches.

## 3. Project Progress

While no new releases shipped, the merged/closed PRs (168 total) indicate significant code movement. Key themes from PR activity:

- **Codex/Claude CLI Reliability:** Multiple PRs target Codex session handling, including [#121668](https://github.com/openclaw/openclaw/pull/121668) (kill-switch for native hook relay) and [#120197](https://github.com/openclaw/openclaw/pull/120197), which addresses required-preflight compaction to prevent "Context is too large" errors from silently dropping turns.
- **Security Hardening:** PRs like [#121599](https://github.com/openclaw/openclaw/pull/121599) (centralizing provider diagnostic redaction) and [#121327](https://github.com/openclaw/openclaw/pull/121327) (freezing installed tool profile authority) show a strong push to tighten security boundaries around provider data and tool access.
- **Architecture Cleanup:** A series of refactor PRs by maintainer `steipete` ([#114388](https://github.com/openclaw/openclaw/pull/114388), [#121715](https://github.com/openclaw/openclaw/pull/121715), [#121768](https://github.com/openclaw/openclaw/pull/121768), [#121536](https://github.com/openclaw/openclaw/pull/121536)) focus on making multi-agent ownership explicit, migrating internal callers to typed facades, eliminating export name collisions, and removing legacy SQLite naming. This suggests a deliberate effort to reduce technical debt and make the codebase more maintainable.
- **UX/Cleanup in Control UI:** Smaller PRs like [#121712](https://github.com/openclaw/openclaw/pull/121712) (pinned session sidebar group) and [#121721](https://github.com/openclaw/openclaw/pull/121721) (fixing session mutation races) address immediate operator pain points in the web UI.

## 4. Community Hot Topics

- **[#121058 — Silent reply failures still recurring](https://github.com/openclaw/openclaw/issues/121058)** — *48 comments, 0 👍*. The single most active issue. A "closed" fix (#116277) demonstrably did not resolve the problem, with the monitoring cron logging new occurrences. **Analysis:** This is a symptom of insufficient root-cause analysis and a lack of regression testing tied to the specific fix. The community's frustration is high because the issue keeps recurring, undermining trust in the fix process.
- **[#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** — *34 comments, 0 👍*. A long-running feature request (since Feb 2026) focused on security—tagging memory by origin to prevent memory poisoning attacks. **Analysis:** The high comment count indicates a deep ongoing discussion about threat modeling for agent memory, likely due to its security implications and the complexity of implementing a trust hierarchy.
- **[#86519 — Duplicate Telegram replies after 5.20 update](https://github.com/openclaw/openclaw/issues/86519)** — *15 comments, 1 👍*. A critical, widely-reported regression. Severity was reduced but not eliminated. **Analysis:** The issue links to a family of related duplicate-message bugs ([#96242](https://github.com/openclaw/openclaw/issues/96242), [#49381](https://github.com/openclaw/openclaw/issues/49381), [#114690](https://github.com/openclaw/openclaw/issues/114690)), indicating a systemic flaw in message delivery deduplication logic across multiple channels (Telegram, Feishu, Discord).
- **[#42475 — Per-agent cost budget enforcement](https://github.com/openclaw/openclaw/issues/42475)** — *14 comments, 1 👍*. A request for gateway-level cost caps. **Analysis:** This reflects a growing enterprise adoption signal—operators want governance and cost-control mechanisms as they scale deployments.
- **[#22438 — Tiered bootstrap file loading](https://github.com/openclaw/openclaw/issues/22438)** — *18 comments, 0 👍*. A performance/context optimization request. **Analysis:** Users are hitting LLM context window limits and token costs with large workspaces, indicating a need for more sophisticated session memory management than "load everything."

## 5. Bugs & Stability

The project is facing a significant reliability challenge, with multiple P1 regressions reported. Ranked by severity:

**Critical (P1):**
- **[#121058](https://github.com/openclaw/openclaw/issues/121058) — Silent reply failures recurring (48 comments).** No fix PR identified. Persistent bug, high community visibility.
- **[#115908](https://github.com/openclaw/openclaw/issues/115908) — Session transcript projection livelock under sustained writes.** Core/sessions. Blocks all channel transports by stalling the Node event loop. No fix PR.
- **[#47975](https://github.com/openclaw/openclaw/issues/47975) — Subagent sessions persist, main session unresponsive.** Leads to resource exhaustion. No fix PR.
- **[#40001](https://github.com/openclaw/openclaw/issues/40001) — Write tool overwrites shared files in isolated cron sessions.** Silent data loss. No fix PR.
- **[#97983](https://github.com/openclaw/openclaw/issues/97983) — iOS/WebChat messages don't trigger replies.** Channel-specific reliability gap. No fix PR.

**High (P1/P2):**
- **[#112932](https://github.com/openclaw/openclaw/pull/112932) — Tombstoned OAuth targets not re-seeded correctly.** Fix PR exists, awaiting proof.
- **[#97616](https://github.com/openclaw/openclaw/issues/97616) — Zombie process leak from hooks/tools (7 comments).** Degrades performance over time. No fix PR.
- **[#119087](https://github.com/openclaw/openclaw/issues/119087) — Gateway cold start regressed ~2.5x.** P1 performance regression. No fix PR.
- **[#100941](https://github.com/openclaw/openclaw/issues/100941) — Gateway drops concurrent WebSocket connections under load.** Misleading "Gateway-crashed" error. No fix PR.

**Trend Analysis:** The most common failure themes are (1) **duplicate message delivery** across channels, (2) **session state corruption/data loss**, and (3) **OAuth/provider auth lifecycle issues**. While many PRs aim to fix these, the recurrence in issues like #121058 suggests the fixes may be addressing symptoms, not the underlying state machines.

## 6. Feature Requests & Roadmap Signals

Several impactful features are under discussion, with the following likely candidates for next versions:

- **Short-Term (likely in next beta):**
    - **Per-agent cost budgets ([#42475](https://github.com/openclaw/openclaw/issues/42475))** — Gateway-level enforcement is a high-demand enterprise feature.
    - **Memory Trust Tagging ([#7707](https://github.com/openclaw/openclaw/issues/7707))** — Given the focus on security hardening in recent PRs, this could be picked up soon, though it's complex.
    - **`announceTarget` for sub-agents ([#27445](https://github.com/openclaw/openclaw/issues/27445))** — Enhances orchestration capabilities, a core V2 feature.
- **Medium-Term (next stable or two):**
    - **Tiered bootstrap loading ([#22438](https://github.com/openclaw/openclaw/issues/22438))** — Addresses LLM token cost and context window efficiency.
    - **`silentReply` policy fix ([#119401](https://github.com/openclaw/openclaw/issues/119401))** — Small but important for local/small model users.
    - **Context window % in system prompt ([#38568](https://github.com/openclaw/openclaw/issues/38568))** — Simple, high-value improvement for agent self-awareness.
- **Longer-Term / Strategic:**
    - **Per-spawn tool restrictions ([#15032](https://github.com/openclaw/openclaw/issues/15032))** — Security-critical for multi-agent DMZ workflows.
    - **Sub-agent cascade circuit breaker ([#66010](https://github.com/openclaw/openclaw/issues/66010))** — Important for production reliability of multi-agent teams.

## 7. User Feedback Summary

- **Frustration with Recurring Bugs:** The dominant sentiment is dissatisfaction with regressions that appear fixed but resurface. Issue #121058 is the clearest example, with users and maintainers engaging in long threads without resolution. The "silent failure" nature also erodes user trust, as errors are invisible until it's too late.
- **Pain Points with Message Delivery:** Duplicate/silent replies on Telegram, Feishu, and Discord are a top complaint. These are not edge cases but core UX failures (e.g., #86519, #96242).
- **Enterprise Governance Needs:** Requests for cost budgets (#42475), backup exclusions (#40786), and gateway lifecycle warning routing (#45565) show a user base that is deploying OpenClaw beyond hobby use and needs operational controls.
- **Security-Conscious Users:** The popularity of the memory poisoning defense (#7707) and per-spawn tool restrictions (#15032) indicates growing concern about prompt injection and agent autonomy.
- **Performance on Modest Hardware:** The cold start regression (#119087) and TTFT overhead (#80131) are affecting users on smaller VPS/containers, a segment OpenClaw needs to keep happy.

## 8. Backlog Watch

Several important issues and PRs are at risk of being lost in the noise due to the `clawsweeper:no-new-fix-pr` and `needs-maintainer-review` states:

- **[#92516](https://github.com/openclaw/openclaw/issues/92516) — Self-hosted channel plugins blocked (Containerized deploys can't use msteams).** *10 comments, P2.* This is a blocker for a specific deployment model but has a clear path. Needs a maintainer decision on trust model.
- **[#33413](https://github.com/openclaw/openclaw/issues/33413) — Slack tool-level progress in thread status.** *8 comments, 3 👍.* A small UX enhancement that has been open since March. High community interest, low implementation complexity, but stuck.
- **[#121534](https://github.com/openclaw/openclaw/issues/121534) — Cron edit bug (blank command payload).** *Young issue, but clear flaw identified.* Needs quick triage.
- **[#28300](https://github.com/openclaw/openclaw/issues/28300) — Theme Customization System.** *6 comments, 5 👍.* A popular, low-risk UI feature request open since February. Could be a quick win for community morale.
- **PR [#117184](https://github.com/openclaw/openclaw/pull/117184) — Clean empty staged media dirs.** *Size L, P2.* Needs proof but addresses a long-standing resource leak. Stalled for over a week.
- **PR [#110429](https://github.com/openclaw/openclaw/pull/110429) — Bound Comfy workflowPath reads.** *Ready for maintainer look.* Addresses a security issue with a 2-week staleness. Should be prioritized.

---

**Overall Health Assessment:** OpenClaw is a vibrant and rapidly evolving project with a massive community. However, the project is currently in a **stability-critical phase**. The high volume of recurring P1 bugs and the significant backlog of maintainer decision items indicate that the team is stretched thin between feature development and firefighting. The next few releases should focus on hardening the core session/delivery state machines and clearing the security debt before adding new surface features, to ensure user trust is maintained.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem
**Date:** 2026-08-11

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is in a **stability-critical maturation phase**. Across the seven active projects analyzed, the dominant themes are message-delivery reliability, session-state integrity, and security hardening against prompt injection and secret leakage. Projects are converging on common architectural patterns — unified channel adapters, typed runtime facades, and memory systems with provenance tracking — while differentiating on target platforms (desktop, web, embedded, multi-agent orchestration). The ecosystem shows strong community engagement with high issue/PR volumes, but **review capacity is the binding constraint** across nearly all projects, with several XL-sized strategic PRs stalled for weeks. Enterprise adoption signals (cost budgets, governance controls, multi-tenancy) are increasingly visible, suggesting the ecosystem is transitioning from hobbyist tooling to production infrastructure.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Releases (24h) | Latest Release | Health Score* |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 168 | None | v2026.7.2-beta.7 | ⚠️ **Stability-critical** (recurring P1s, backlog bottleneck) |
| **NanoBot** | 4 | 24 | 10 | None | — | ✅ **Healthy** (responsive, rapid fixes) |
| **Hermes Agent** | 50 | 50 | 6 | None | v0.20.0 (2026.8.3) | ⚠️ **Windows regression cluster** + FD leaks |
| **PicoClaw** | 4 | 9 | 7 | None | v0.3.1 | ✅ **Steady** (clearing debt, security pass) |
| **NanoClaw** | 3 | 20 | 10 | None | 2026-06-06 | ⚠️ **Silent-failure bugs** + long-open critical issue |
| **NullClaw** | 1 | 1 | 0 | None | — | ✅ **Stable** (consolidation phase) |
| **IronClaw** | 50 | 50 | 17 | **v1.1.1-rc.1** | v1.1.1-rc.1 | ✅ **Healthy** (disciplined release mgmt) |
| **LobsterAI** | — | 34 | 20 | None | 2026.4.1 | ✅ **Active sprint** (high merge velocity) |
| **Moltis** | 3 | 2 | 0 | None | — | ⚠️ **Apple-backend bugs** (triage phase) |
| **CoPaw** | 39 | 50 | 17 | None | v2.1.0 (imminent) | ✅ **Pre-release stabilization** |
| **ZeroClaw** | 50 | 50 | 1 | None | v0.8.3 | ⚠️ **Reviewer bottleneck** + S0 security backlog |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | None | — | ⚪ Inactive |

*\*Health score: qualitative assessment based on bug severity, fix velocity, backlog health, and community sentiment.*

---

## 3. OpenClaw's Position

**Advantages:**

- **Scale leader:** By far the largest community (500 issues/500 PRs daily) — 10-50x the activity of most peers. This creates a robust feedback loop: more users → more bugs found → more fixes → more trust.
- **Multi-channel maturity:** Supports the widest range of platforms (Telegram, Feishu, Discord, iOS, WebChat) with deep integration quality.
- **Security hardening momentum:** Active PRs on diagnostic redaction, tool profile authority freezing, and memory trust tagging show a deliberate security roadmap.
- **Architecture cleanup:** Maintainer-led refactors (typed facades, explicit multi-agent ownership) signal sustainable technical debt management.

**Technical approach differences:**

- **State machine complexity:** OpenClaw's session/delivery state machines are more elaborate than peers, which is simultaneously its strength (rich features) and weakness (recurring duplicate/silent message bugs — #121058, #86519).
- **Plugin ecosystem:** The `clawsweeper` triage system and plugin architecture are more sophisticated than most peers.

**Community size comparison:**

| Metric | OpenClaw | CoPaw | ZeroClaw | Hermes |
|---|---|---|---|---|
| Daily issue updates | 500 | 39 | 50 | 50 |
| Daily PR updates | 500 | 50 | 50 | 50 |
| P1 bug count (active) | ~8 | ~7 | ~12 | ~5 |

**Key risk:** OpenClaw's scale is its vulnerability — the volume of `needs-maintainer-review` labels and recurring fixes that "don't stick" (#121058) suggests decision-making throughput hasn't scaled with community size.

---

## 4. Shared Technical Focus Areas

Across the ecosystem, five requirements consistently emerge:

### 4.1 Message Delivery Reliability (All projects)
- **Duplicate replies:** OpenClaw (#86519, Telegram/Feishu/Discord), NanoClaw (#3226, inbound drops), NanoBot (#5327, repetition during reasoning)
- **Silent failures:** OpenClaw (#121058), NanoClaw (#3226, #3223), LobsterAI (#2470 fix)
- **Common root cause:** Inadequate deduplication state machines and failure observability.

### 4.2 Session State Integrity (OpenClaw, NanoBot, IronClaw, Moltis)
- Session corruption/livelock: OpenClaw (#115908, #47975)
- Stale background-task overwrites: NanoBot (#5271)
- Main-session deletion guarded: Moltis (#1182)
- Steering replay dedup: IronClaw (#7336)

### 4.3 Security Hardening (All projects)
- **Secrets in child processes:** Hermes (epic #83565), NanoBot (credential redaction)
- **Memory poisoning defense:** OpenClaw (#7707), ZeroClaw (#9647 knowledge graph isolation)
- **SSRF/egress control:** ZeroClaw (#8713), NanoClaw (remote exec hardening), PicoClaw (#3297)
- **Channel auth gaps:** ZeroClaw (LINE #9392, Bluesky/Reddit #9393), NanoBot (WebUI mutation security #5317)

### 4.4 Tool-Loop & Cost Guards (OpenClaw, NanoBot, PicoClaw, LobsterAI)
- Infinite/runaway loops: NanoBot (#5324, 10M tokens), PicoClaw (#3311), LobsterAI (#2454)
- **Cost budgets:** OpenClaw (#42475), NanoBot (token usage records #5299)

### 4.5 Context/Memory Management (OpenClaw, ZeroClaw, CoPaw, IronClaw)
- Context window pressure: OpenClaw (#22438 tiered bootstrap), CoPaw (ReMe memory system)
- Memory provenance: OpenClaw (#7707), ZeroClaw (#9647)
- Durable profile-agnostic storage: IronClaw (#7467)

---

## 5. Differentiation Analysis

| Project | Primary Target | Architecture Focus | Key Differentiator |
|---|---|---|---|
| **OpenClaw** | Power users, multi-channel | Session state machines, plugin ecosystem | **Scale + channel breadth** |
| **NanoBot** | Privacy-first, local | MCP-native, WebUI | **MCP OAuth support** (Xmind/Notion presets) |
| **Hermes Agent** | Desktop (macOS/Windows) | God-file refactoring, FD-leak hardening | **Multi-tenant ambitions** (#34352) |
| **PicoClaw** | Embedded (Raspberry Pi), constrained hw | Security defaults, schema migrations | **Resource efficiency + remote exec hardening** |
| **NanoClaw** | Docker/WSL2 deployments | Host/filesystem seams, channel plugins | **Operational reliability focus** |
| **NullClaw** | A2A protocol federation | Client/server agent comms | **Agent-to-agent interoperability** |
| **IronClaw** | Post-Reborn consolidation | Unified channel model, doc-truth CI | **Architecture discipline + release cadence** |
| **LobsterAI** | Multi-agent workspace (CoWork) | Electron renderer, gateway stability | **CoWork rich UI** (file cards, group collapse) |
| **Moltis** | Browser-based agents | CDP screencast, Apple Container sandbox | **Interactive browser viewing** (PR #531) |
| **CoPaw** | Memory-centric (ReMe) | Reranker memory search, marketplace | **Memory system as differentiator** |
| **ZeroClaw** | Governance + security | RFC process, audit-wave fixes | **Enterprise-grade security posture** |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (high velocity, merging fast)
- **LobsterAI** — 20 PRs merged in 24h; sprint-mode with clear ownership.
- **NanoBot** — Same-day fixes for P0 bugs; highly responsive maintainers.
- **CoPaw** — Pre-release sprint for v2.1.0; 17 PRs merged; strong first-time contributor pipeline.

### Tier 2: Scale with Friction (high volume, delivery issues)
- **OpenClaw** — Massive volume but decision bottleneck; fixes don't always stick.
- **ZeroClaw** — S0 security backlog + only 1 merge vs 50 PRs; reviewer capacity critical.
- **Hermes Agent** — Active but Windows regression cluster indicates quality-control gaps in release process.

### Tier 3: Consolidation (moderate activity, clearing debt)
- **IronClaw** — Disciplined RC cadence, closing epics, good doc-truth process.
- **PicoClaw** — Clearing March-era PRs, security pass; steady but not sprinting.
- **NanoClaw** — Heavy refactoring (Agent Plugins migration), addressing silent-failure bugs.

### Tier 4: Stabilization/Low Activity
- **NullClaw** — Minimal activity; A2A issue closed suggests convergence on a solution.
- **Moltis** — Triage phase; Apple-backend bugs being characterized.
- **TinyClaw / ZeptoClaw** — Inactive (no activity in 24h).

**Maturity insights:**
- **Process innovation:** ZeroClaw (RFC streamlining), IronClaw (doc-truth CI), and OpenClaw (clawsweeper triage) are experimenting with governance — a sign of ecosystem maturity.
- **First-time contributor health:** CoPaw and NanoBot are onboarding new contributors effectively; ZeroClaw has recognized "distinguished" contributors but risks attrition from long review cycles.

---

## 7. Trend Signals

### 7.1 Security as the #1 Differentiator (2026 H2)
All projects are investing in security hardening: secret scrubbing (Hermes), memory provenance (OpenClaw, CoPaw), SSRF gates (ZeroClaw), channel auth (NanoBot). **Value for developers:** prioritize threat modeling for prompt injection and memory poisoning in your agent designs; expect security defaults to become non-negotiable in future releases.

### 7.2 MCP Standardization is Winning
NanoBot's MCP OAuth (#5316) and SDK v2 migration, NanoClaw's Streamable HTTP servers, and ZeroClaw's MCP CA trust (#9339) show **MCP is the de facto integration standard**. **Value:** build against MCP-capable tools for future-proofing; watch for OAuth-as-default for remote MCP access.

### 7.3 Enterprise Governance Demands are Rising
Cost budgets (OpenClaw #42475), token usage records (NanoBot #5299), multi-tenancy (Hermes #34352), and audit logging (ZeroClaw #9391) all point to **production scale requirements**. **Value:** design for observability and cost control from day one.

### 7.4 Silent Failures are the Trust Killer
The most damaging bug class across all projects is **silent failure**: messages silently dropped (NanoClaw #3226), replies silently not sent (OpenClaw #121058), audit logs silently empty (ZeroClaw #9391). **Value:** implement fail-fast, observable failures; silent degradation erodes user trust faster than explicit errors.

### 7.5 Agent-to-Agent Communication is Emerging
NullClaw's A2A issue closure, OpenClaw's multi-agent ownership refactors, and CoPaw's CoWork UI all signal movement toward **federated agent topologies**. **Value:** design for inter-agent communication now; A2A protocol implementations will become a feature checklist item in 2027.

### 7.6 Memory Systems are the New Battleground
CoPaw's ReMe (reranker, auto-link, daily paper), OpenClaw's memory trust tagging, and ZeroClaw's knowledge-graph isolation all treat memory as a **first-class architectural pillar**. **Value:** memory provenance, trust hierarchy, and cost-aware context management will separate winning agents from also-rans.

### 7.7 Review Capacity is the Ecosystem's Bottleneck
ZeroClaw (1 merged vs 50 PRs) and OpenClaw (needs-maintainer-review backlog) both show **maintainer bandwidth is the critical constraint**. **Value:** if building on these projects, contribute reviews as well as code; expect strategic PRs to take weeks, not days, to land.

---

*Report generated: 2026-08-11 | Data window: 2026-08-10 to 2026-08-11 | Sources: GitHub activity across 11 projects*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-11

## Today's Overview
NanoBot shows a notably high-velocity development day with 24 PRs updated in the last 24 hours (14 open, 10 merged/closed) and 4 issues updated (3 closed, 1 open). The project is in a strong security and stability hardening phase, with 5 PRs carrying security labels and multiple P0/P1 priority fixes. A major MCP OAuth feature (#5316) was merged and closed, alongside several WebUI architecture refactors by contributor chengyongru. No new releases were published today, but the volume of merged work suggests a release may be imminent. All four updated issues were addressed or closed within the same day, indicating a responsive maintainer team.

## Releases
No new releases were published in the last 24 hours. The project appears to be accumulating merged PRs (10 closed/merged) toward a future release.

## Project Progress
Ten PRs were merged or closed today. The most significant advances:

- **MCP OAuth Support (#5316)** — Merged: Adds browser-based OAuth for remote Streamable HTTP and SSE MCP servers, with one-click Xmind, Notion, and Linear presets. This directly addresses the long-standing #5297 feature request.
- **WebUI Security Hardening (#5317)** — Merged: Moved all WebUI mutations from GET/query-string/custom-header HTTP calls to authenticated WebSocket request/reply frames, a P1 security fix.
- **Bug Fix: No-op Edit Rejection (#5325)** — Merged: Rejects `edit_file` calls with identical old/new text, directly resolving infinite-loop bug #5324.
- **Refactor: Runtime State Access (#5319)** — Merged: Replaced reflective loop-state wrapper with an explicit `RuntimeControl` protocol, improving type safety and credential redaction.
- **Refactor: Settings Backend (Three PRs: #5318, #5321, #5323)** — Merged/Open: Series of WebUI architecture refactors extracting deterministic event projection helpers, making gateway own settings services, and splitting settings backend by domain.
- **Weixin QR Login Fix (#5310)** — Merged: Honored forced QR login behavior across CLI and WebUI.
- **WebUI UX Improvements (#5315)** — Merged: Improved recovery and empty states for workspace-scoped chat creation failures.

## Community Hot Topics
The most active discussions today centered on:

1. **Dream Memory Infinite Loop (#5324)** — Closed bug with 2 comments: The Dream memory consolidation task ran for 23 minutes consuming over 10M tokens (~half a month's usage) after accepting a no-op edit. Same-day fix PR #5325 was merged. [Issue](https://github.com/HKUDS/nanobot/issues/5324) | [Fix PR](https://github.com/HKUDS/nanobot/pull/5325)

2. **MCP OAuth Feature Request (#5297)** — Closed with 3 comments: User requested browser OAuth support for MCP servers requiring web authorization (e.g., Xmind). Users needed gateway-based remote authorization. This was directly fulfilled by PR #5316. [Issue](https://github.com/HKUDS/nanobot/issues/5297)

3. **MCP Connection Failure Isolation (#5300)** — Closed with 0 comments: Remote MCP failures (HTTP 530) caused gateway crashes and CPU spikes due to anyio cancel scope bugs. No explicit public discussion, but MCP SDK v2 migration (#5179) and OAuth work address the transport layer. [Issue](https://github.com/HKUDS/nanobot/issues/5300)

4. **Message Repetition Bug (#5327)** — Open with 1 comment: Nanobot randomly repeats the same message multiple times during reasoning. The maintainer has not yet responded. [Issue](https://github.com/HKUDS/nanobot/issues/5327)

## Bugs & Stability
Ranked by severity:

1. **P0 — Stale Background Task Saves (#5271, Open PR)**: Background tasks can overwrite fresh session data if user runs `/new` during an await. Fix PR by yorkhellen adds staleness checks.
2. **P0 (via regression) — Dream Memory Infinite Loop (#5324, Closed)**: 10M+ token consumption in 23 minutes. **Fixed** in #5325 by rejecting no-op edits.
3. **P1 — MCP Connection Failure Cascade (#5300, Closed)**: Gateway crash/carousel + CPU spike on remote MCP 530 errors. Related to anyio cancel scope bug. Addressed through broader MCP SDK v2 migration (#5179).
4. **P1 — WebUI Mutation Security (#5317, Merged)**: State-changing operations over unauthenticated GET/header requests. **Fixed** by moving to authenticated WebSocket frames.
5. **P1 — Docker Capability Missing (#5320, Open PR)**: Container fails privilege drop due to missing required capabilities removed by `cap_drop: ALL`.
6. **P2 — Message Repetition During Reasoning (#5327, Open)**: Random duplicated messages; root cause not yet identified by maintainers.
7. **P2 — Workspace Boundary Bypass (#5329, Open PR)**: `ExecTool` path extraction misses bare `~` and `~user` tilde expansions, allowing escape from workspace boundaries.

## Feature Requests & Roadmap Signals
The key roadmap signals this week:

- **MCP OAuth (Landed ✅)**: Browser-based OAuth for remote MCP servers (#5316) with presets for Xmind, Notion, and Linear. This was the top user-requested feature from #5297.
- **MCP SDK v2 Migration (#5179 — Open, P1)**: Migration from v1 `ClientSession` API to v2 high-level `Client` API with legacy compatibility. Likely to merge soon given the OAuth work depends on it.
- **OrcaRouter Gateway Provider (#5328 — Open)**: New named gateway provider bringing 150+ models from OpenAI, Anthropic, Google, DeepSeek, Qwen, MiniMax, and xAI behind one endpoint. Signals continued multi-provider expansion.
- **Tabbed Pane Workbench (#5322 — Open)**: Significant WebUI enhancement allowing each topic to contain 1-4 pane sessions with switchable layouts. Shows active investment in the WebUI as a power-user tool.
- **Structured Token Usage Records (#5299 — Open)**: Persisting the latest 50 token-usage records with day-scoped API endpoints, addressing need for cost diagnostics.

## User Feedback Summary
- **Positive**: The Xmind MCP integration (#5297) was acknowledged and resolved within 2 days with a full OAuth implementation — the fastest feature turnaround visible in this window.
- **Pain point — Token waste**: The Dream memory infinite loop (#5324) cost a user half a month's token quota; the team's same-day fix shows awareness of cost sensitivity.
- **Pain point — MCP reliability**: Users hitting Cloudflare-backed MCP endpoints faced gateway crashes (#5300); the anyio cancel scope crash signals transport-layer fragility being addressed by the v2 migration.
- **Pain point — UX consistency**: Users reported Matrix room-level responses not threading back to the initiating message (#5292); WeChat forced QR login being bypassed (#5310); both now have fixes.
- **Open concern**: Message repetition during reasoning (#5327) remains unfixed, which could erode trust if it occurs frequently with production workloads.

## Backlog Watch
Items needing maintainer attention:

- **#5327 — Message Repetition Bug (Open, 1 comment)**: No maintainer response yet; may warrant investigation into streaming/concatenation logic.
- **#5288 — Agent Plugins with CLI Apps (Open, no comments)**: Larger architectural PR that's been open for 4 days without maintainer response; silent attention could stall plugin ecosystem development.
- **#5179 — MCP SDK v2 Migration (Open, P1, conflicts)**: High-priority migration with conflicts unaddressed for 12 days; blocking the long-term MCP stability work.
- **#5292 — Matrix Threading Fix (Open, no comments)**: Small UX fix for Matrix integration open for 3 days; straightforward merge candidate.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-11

## 1. Today's Overview

Hermes Agent is in a high-activity phase with **50 issues and 50 PRs updated in the last 24 hours**, reflecting an active community and development cadence. The project shows a clear focus on **stability hardening**, particularly around Windows Desktop regressions, file descriptor leaks, and child-process credential isolation — a recurring security theme. While 6 PRs were merged/closed today, a substantial number of open PRs (44) suggests a growing review backlog. Notably, zero new releases were published, placing attention on pending fixes and the ongoing repo-wide god-file refactoring epic that anchors architectural work. Overall, the project is healthy but grappling with a cluster of Windows-specific post-update regressions and several deep security/privacy issues that are receiving sustained community attention.

## 2. Releases

No new releases were published in the last 24 hours. The most recent tagged version referenced across issues is **Hermes Agent v0.20.0 (2026.8.3)**, which is implicated in several Windows startup regressions (see Bugs & Stability).

## 3. Project Progress

Six PRs were merged or closed today. Notable items:

- **[#83570 — Closed (experimental change not pursued)](https://github.com/NousResearch/hermes-agent/pull/83570)**: An experimental agent change was explicitly closed, signaling scope control.
- **[#83397 — SQLite file descriptor leak fix (closed)](https://github.com/NousResearch/hermes-agent/pull/83397)**: Addressed leak of SessionDB connections on exception and shutdown paths, a direct fix for the FD exhaustion class of bugs.
- **[#83011 — fix(gateway): preserve prose during native clarify (closed)](https://github.com/NousResearch/hermes-agent/pull/83011)**: Improved gateway conversation handling during multi-choice clarify flows.

Open PRs actively moving the needle today include:
- **[#83600 — Strip empty tool_calls at wire boundary for DeepSeek compatibility](https://github.com/NousResearch/hermes-agent/pull/83600)**: Direct fix for the critical session-wedging bug [#83312](https://github.com/NousResearch/hermes-agent/issues/83312).
- **[#83590 — Detect updater self-lock on Windows + repair uv-managed venvs](https://github.com/NousResearch/hermes-agent/pull/83590)**: Addresses the Windows update self-lock root cause from [#83569](https://github.com/NousResearch/hermes-agent/issues/83569).
- **[#83490 — Bound gateway database and output handles](https://github.com/NousResearch/hermes-agent/pull/83490)**: Replaces per-thread SQLite readers with a fixed lease pool — a robust fix against FD exhaustion.

## 4. Community Hot Topics

The most active threads (by comments/reactions) reveal deep architectural and security concerns:

- **[#78647 — Epic: Shard all 20 god files (66 comments)](https://github.com/NousResearch/hermes-agent/issues/78647)**: The highest-traffic issue, codifying a standing policy to break up monoliths like `mcptool.py` (7,230 lines). This signals significant maintainability pressure and upcoming architectural churn.
- **[#34352 — Solving the Multi-Tenant Hermes Problem (21 comments, 2 👍)](https://github.com/NousResearch/hermes-agent/issues/34352)**: A long-running, feature-rich request for true multi-tenant isolation. The author reports memory operations bypassing the hook system, requiring a core fork. High interest with no maintainer decision yet.
- **[#75269 — SessionDB WAL reader FD leak (9 comments, now closed)](https://github.com/NousResearch/hermes-agent/issues/75269)**: A P1 bug that tied into the broader FD-leak crisis; community feedback across [#81547](https://github.com/NousResearch/hermes-agent/issues/81547) and [#78872](https://github.com/NousResearch/hermes-agent/issues/78872) suggests this issue is widespread in production.
- **Security Cluster (Child-env credential scrubbing)**: Issues [#77164](https://github.com/NousResearch/hermes-agent/issues/77164), [#77463](https://github.com/NousResearch/hermes-agent/issues/77463), [#82936](https://github.com/NousResearch/hermes-agent/issues/82936), and the meta-epic [#83565](https://github.com/NousResearch/hermes-agent/issues/83565) converge on a painful systemic flaw: secrets leaking into untrusted child processes. The cluster is a top priority for maintainers based on activity and the "Campaign EPIC" designation.

## 5. Bugs & Stability

Today's bug reports skew heavily toward **Windows Desktop regressions** post-v0.20.0, plus a critical provider bug. Ranked by severity (P1 highest):

- **[#83312 — DeepSeek 400: empty `tool_calls:[]` wedges sessions (P1)](https://github.com/NousResearch/hermes-agent/issues/83312)**: A permanent session failure on a mainstream provider. **Fix in progress**: PR [#83600](https://github.com/NousResearch/hermes-agent/pull/83600) today.
- **[#83569 — Windows `hermes update` self-locks `cryptography._rust.pyd` (P2, 100% failure)](https://github.com/NousResearch/hermes-agent/issues/83569)**: The updater process holds a mapped DLL, making any cryptography bump fail with OS error 5. **Fix**: PR [#83590](https://github.com/NousResearch/hermes-agent/pull/83590) addresses root cause.
- **[#83555 — Windows Desktop: root `hermes serve` self-exits instantly on uv trampoline venvs (P2)](https://github.com/NousResearch/hermes-agent/issues/83555)**: Post-update backend never becomes ready, blocking boot. Related active cluster — see also [#83548](https://github.com/NousResearch/hermes-agent/issues/83548).
- **[#83548 — Hermes Desktop doesn't start after last update (P2)](https://github.com/NousResearch/hermes-agent/issues/83548)**: Same class of Windows regression, distinct environment.
- **[#83562 — Windows update leaves Desktop unable to start backend (P2)](https://github.com/NousResearch/hermes-agent/issues/83562)**: Third independent report of post-update Windows boot failure.

**Cross-cutting FD leak fixes** continue to land via PRs [#83490](https://github.com/NousResearch/hermes-agent/pull/83490) and [#83397](https://github.com/NousResearch/hermes-agent/pull/83397)` — closed today. The consensus is that `RLIMIT_NOFILE` exhaustion is a systemic issue.

## 6. Feature Requests & Roadmap Signals

- **Child-process credential-isolation solution (Epic #83565)**: Given the "Campaign EPIC" label and the large cluster of related issues, this is the strongest roadmap signal — expect deep changes to environment handling in the agent core.
- **Built-in gateway self-healing (#83522)**: A community proposal to auto-restart cleanly terminated gateways and detect dead WebSockets. Practically motivated and likely to be prioritized.
- **Windows packaging & updater hardening**: With 3+ Windows boot failures filed in 48 hours, expect a dedicated pass on update/install flows.
- **Desktop UX**: [#83479](https://github.com/NousResearch/hermes-agent/issues/83479) requests a "New session" button in the Home chat list — low complexity, high daily-DAU value.
- **Multi-tenant support (#34352)**: Although long-unanswered, the high engagement and "lead the market" positioning suggest this is a vNext candidate, but requires significant refactoring.

## 7. User Feedback Summary

- **Strong consensus on FD leaks**: Users running long-lived Desktop or Dashboard sessions (especially on macOS) report "Too many open files" crashes that force manual restarts — a major trust-damaging bug that appears to be near a resolution.
- **Windows Post-Update Uncertainty**: Multiple users report “backend exited (0)” and "Repair install" not fixing the issue — a frustrating upgrade experience.
- **Desire for higher-level automation**: Requests for gateway self-heal and multi-tenancy signal a community ready to run more production-critical workloads.
- **Frustration with silent failures**: The Langfuse plugin placeholder-key issue (#60961) is illustrative of a broader desire for fail-fast, observable configuration over silent degradation.

## 8. Backlog Watch

Issues and PRs that would benefit from maintainer eyes:

- **[#34352 — Multi-Tenant Hermes Problem (open since May 29)](https://github.com/NousResearch/hermes-agent/issues/34352)**: 21 comments, 2 👍, no maintainer decision. High community value.
- **[#38079 — WhatsApp bridge env scrub (open since Jun 3)](https://github.com/NousResearch/hermes-agent/issues/38079)**: A security issue at High CVSS v4 severity awaiting attention, likely eclipsed by the newer child-scrub campaign.
- **[#67934 — Ollama native tags (blocked, no checks)](https://github.com/NousResearch/hermes-agent/pull/67934)**: PR is MERGEABLE but BLOCKED with no review; needs maintainer triage.
- **[#5908 — Kimi-coding base_url resolution (open since Apr 7)](https://github.com/NousResearch/hermes-agent/issues/5908)**: 2 👍, P2, silent provider misconfiguration issue, unaddressed for months.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-11

## Today's Overview

PicoClaw shows steady maintenance activity with 9 PRs updated in the last 24 hours (7 merged/closed) and 4 issues touched (2 closed). The backlog is being actively cleared, with several older PRs from March and July finally merged or closed, suggesting maintainers are working through accumulated technical debt. Two open bugs remain under active investigation, including one production-impacting silent failure issue. Channel-specific improvements (Telegram rich message rendering, Czech i18n) and security hardening (remote exec boundaries, schema v4 migration) indicate a balanced focus on both UX polish and defensive architecture. No new releases were cut in this window.

## Releases

No new releases in the last 24 hours. The last known release is v0.3.1 (per issue reports), and PR #3297 references a schema v4 migration for configs, which may indicate an upcoming release with breaking config changes.

## Project Progress

Seven PRs were merged or closed. Key highlights:

- **[#3297 — fix(security): harden remote prompt and exec boundaries](https://github.com/sipeed/picoclaw/pull/3297)** (merged): Major security pass — remote exec now defaults to disabled, requires per-call approval when enabled, enforces origin policy at execution time, and migrates configs to schema v4. This is the single most significant change in this window.
- **[#3327 — feat(telegram): render tables with native rich messages](https://github.com/sipeed/picoclaw/pull/3327)** (merged): Telegram now detects GFM/HTML table blocks outside code examples and sends native rich-message tables instead of monospaced code blocks. Improves readability significantly for data-heavy replies.
- **[#3326 — fix(web): remove duplicate pnpm lock entries](https://github.com/sipeed/picoclaw/pull/3326)** (merged): Fixes a broken CI/dev-environment locking issue (`ERR_PNPM_BROKEN_LOCKFILE`).
- **[#3295 — fix(channels): prevent SplitMessage hang on oversized fence headers](https://github.com/sipeed/picoclaw/pull/3295)** (merged): Fixes a hang when opening fenced-code info strings exceed `maxLen`; adds regression coverage.
- **[#3296 — i18n: complete Czech code wrap labels](https://github.com/sipeed/picoclaw/pull/3296)** (merged): Localization completion.
- **[#1547 — fix: merge PR #1466 #1465](https://github.com/sipeed/picoclaw/pull/1547)** (closed): Merge of two open fixes — long-pending, good to see cleared.
- **[#2132 — feat(config): support model-specific max_tokens and fix config key co…](https://github.com/sipeed/picoclaw/pull/2132)** (closed): Decouples lookup key from runtime ID, prevents `Defaults.ModelName` overwrite, allows per-model `max_tokens` overrides. This was open since March — resolution is a meaningful victory.

## Community Hot Topics

- **[#3301 — /clear and session auto-compression broken with dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)** (3 comments): Users on Raspberry Pi running v0.3.1 with Discord/Telegram channels + dispatch rules report that `/clear` and auto-compression silently no-op. This is an active bug with a real workflow impact — session management is core to daily use.
- **[#3298 — Add AI Router as a provider preset](https://github.com/sipeed/picoclaw/issues/3298)** (2 comments, closed): An affiliated maintainer proposes a named provider preset for AI Router (OpenAI-compatible). The ask is small (config ergonomics) but signals a pattern: users want first-class provider presets, not just generic `openai` fallbacks.

The dispatch-rules session bug (#3301) is the strongest signal — it couples routing, session lifecycle, and compression, three features power users combine — and it’s currently workaround-free.

## Bugs & Stability

1. **[#3311 — Repeated identical tool failure loops silently to max_tool_iterations](https://github.com/sipeed/picoclaw/issues/3311)** — *High severity.* In production (Telegram), a turn can spin for minutes on a repeating tool error (e.g., `git` without credentials) and the user gets no answer. This is a silent degradation that wastes compute and erodes trust.
   - **Fix exists**: [#3312 — stop turn early on repeated identical tool failure](https://github.com/sipeed/picoclaw/pull/3312) is open (stale). Needs review/merge.
2. **[#3301 — /clear and session auto-compression fail with dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)** — *Medium-High.* Session-management commands silently no-op in dispatch-rule-routed chats. No linked fix PR yet.
3. **[#3294 — /list models only shows current model](https://github.com/sipeed/picoclaw/issues/3294)** — *Low-Medium.* Command name implies “all configured models,” but shows only active. Closed as stale; fix may be merged elsewhere.
4. **[#3314 — customAllowPatterns ignored: default deny takes precedence](https://github.com/sipeed/picoclaw/pull/3314)** — *Medium.* Reported by j-v: `git push` blocked despite being allow-listed. Fix PR is open (stale) and needs attention.

## Feature Requests & Roadmap Signals

- **[#3298 — AI Router provider preset](https://github.com/sipeed/picoclaw/issues/3298)**: Low-effort, high-reach ergonomics win. The PR template and “I maintain this service” framing make this likely to land if maintainers adopt the pattern (future presets for other gateways may follow).
- **PR #2132 (model-specific `max_tokens` + config key decoupling)** was just closed — expect its functionality to surface in a coming release. This is a config-power-user win and signals the project is investing in multi-model workflows.
- **Security hardening in PR #3297** implies a roadmap focus on remote/agent-exec safe defaults — watch for a follow-up release with documented config-migration notes (schema v3 → v4).

## User Feedback Summary

- **Pain points**: Users on constrained hardware (Raspberry Pi) actively combine dispatch rules, Telegram/Discord, and compression; breakage there (#3301) is a real workflow killer, not a corner case. The silent tool-failure loop (#3311) undermines confidence in unattended agents.
- **Frustrations**: `/list models` semantics (#3294) and `customAllowPatterns` precedence (#3314) show that configurability gaps are the second-most common complaint — users want their explicit config to be authoritative.
- **Satisfaction signals**: The Telegram rich-table change (#3327) and Czech i18n (#3296) are community-driven enhancements, indicating maintainers are responsive to UX and locale requests. The long-awaited resolution of PR #2132 (March → August) will be positively received by multi-model config users.

## Backlog Watch

- **[#3312 — fix(agent): stop turn early on repeated identical tool failure](https://github.com/sipeed/picoclaw/pull/3312)** — Open, stale. Fixes a production-silent failure (#3311). *Highest priority for maintainer review; the issue is actively affecting users.*
- **[#3314 — fix: agent unable to execute shell commands added to customAllowPatterns](https://github.com/sipeed/picoclaw/pull/3314)** — Open, stale. Blocks intended shell usage (e.g., `git push`); contradicts documented behavior. Needs review.
- **[#3301 — Session management broken with dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)** — No linked fix PR. The trio of #3301/#3311/#3314 all touch core agent-execution or session logic; consider batching for a stability patch release.

---

*Data window: 2026-08-10 to 2026-08-11. Source: github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-08-11

---

## 1. Today's Overview

NanoClaw is experiencing a high-activity period, with a substantial 20 pull requests updated in the last 24 hours (10 merged/closed, 10 still open) and 3 active issues. The project is in a heavy refactoring and hardening phase, with a clear focus on host/filesystem architecture, channel integrations (particularly Telegram), and input handling (CLI stdin/JSON). A notable cluster of fixes targeting silent message drops, security hardening, and privacy-safe logging indicates a response to recent community bug reports. The core-team is actively driving larger features, including a major migration of agent templates to "Agent Plugins" and support for remote Streamable HTTP MCP servers. Overall, the project shows strong momentum with a healthy mix of proactive architectural improvements and reactive bug fixes.

---

## 2. Releases

No new releases were published in the last 24 hours. There is also no release candidate or pre-release activity visible in the current data. The most recent official release remains the one tagged at commit `2d9375531b1e52574b6b61861c4153b26f2ae68a` (from 2026-06-06), which is mentioned in Issue #3075.

---

## 3. Project Progress

**Merged/Closed PRs (10 total)** show a week of intense refactoring and bug-fixing, led mainly by contributor `zvi-fried`:

- **Refactoring & Architecture:** A series of closed PRs indicate a systematic cleanup of the codebase, likely consolidated this week:
  - [#3212](https://github.com/nanocoai/nanoclaw/pull/3212): Added a module migration registry.
  - [#3213](https://github.com/nanocoai/nanoclaw/pull/3213): Refactored channel question renderers for better modularity.
  - [#3214](https://github.com/nanocoai/nanoclaw/pull/3214): Unified module lifecycle hooks.
  - [#3215](https://github.com/nanocoai/nanoclaw/pull/3215): Redacted DM resolution logs for privacy.
  - [#3216](https://github.com/nanocoai/nanoclaw/pull/3216): Documented `install_packages` limitations in the hardened-image guide.
- **Bug Fixes & Security:**
  - [#3228](https://github.com/nanocoai/nanoclaw/pull/3228): Fixed deduplication of turn-scoped chat delivery, a core reliability fix.
  - [#3222](https://github.com/nanocoai/nanoclaw/pull/3222): Added opt-in privacy-safe DM logs, a security/privacy feature.
- **Miscellaneous:**
  - [#3219](https://github.com/nanocoai/nanoclaw/pull/3219): A fix related to Telegram and container environment variables.
  - [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) and [#3211](https://github.com/nanocoai/nanoclaw/pull/3211): A refactor to add host seams for skill-owned capabilities, and a docs update defining a single-responsibility integration rule.

These closures suggest that the maintainers are working through a significant list of internal improvements ("hygiene" work) while also addressing user-reported issues.

---

## 4. Community Hot Topics

The most significant community discussion activity is focused on two critical reliability bugs:

- **[Issue #3075](https://github.com/nanocoai/nanoclaw/issues/3075) - Silent log loss + inbound message duplicate-insert errors after long uptime** (Updated: 2026-08-10, 1 comment): This long-standing open issue (since July 17) highlights severe operational pain points: logs silently disappear and the system begins dropping inbound messages after extended uptime. The reporter also notes the lack of a systemd unit for proper service management. The prolonged silence from maintainers on this critical issue is a growing concern.

- **[Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226) - Inbound messages silently dropped when a platform reuses a message id** (Created: 2026-08-10): A precise, well-articulated bug report that explains the alarming user experience: "the agent ignored me." User `dweekly` has paired this with a fix PR ([#3224](https://github.com/nanocoai/nanoclaw/pull/3224)), showing strong community engagement. The underlying need is for **guaranteed message delivery**, even under edge-case platform behaviors.

A secondary, but growing theme is the **security hardening of Telegram pairing**:
- PRs [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) and [#3225](https://github.com/nanocoai/nanoclaw/pull/3225) both address the use of `Math.random()` for pairing code generation, replacing it with CSPRNG. This indicates proactive community-driven security improvements.

The activity signals a community that is actively debugging, providing high-quality bug reports, and even submitting fix PRs, which is a strong indicator of project health.

---

## 5. Bugs & Stability

New reports this period are all related to **silent data loss** and are ranked by severity:

1.  **High: Issue [#3226](https://github.com/nanocoai/nanoclaw/issues/3226)** - Inbound messages are silently dropped if a platform reuses a message ID. This is a reliability regression that makes the agent appear unresponsive. **Fix PR [#3224](https://github.com/nanocoai/nanoclaw/pull/3224) is already open**, which is a great sign.
2.  **High: Issue [#3223](https://github.com/nanocoai/nanoclaw/issues/3223)** - Scheduled-task errors are silently dropped, meaning operators are never alerted to failures. This is a significant observability gap for automation scenarios. No fix PR is linked yet.
3.  **Medium: Issue [#3075](https://github.com/nanocoai/nanoclaw/issues/3075)** - A long-standing issue combining silent log loss and duplicate-insert errors after long uptime spans Matrix channel usage in Docker. The remains a critical stability issue, though it has been silent for a while.

Additionally, the **Telegram pairing code security flaw** (using `Math.random()`) is a security bug being actively patched via PRs [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) and [#3225](https://github.com/nanocoai/nanoclaw/pull/3225). Even though it was filed as a fix, the underlying vulnerability is severe (predictable, brute-forceable pairing codes).

---

## 6. Feature Requests & Roadmap Signals

The roadmap is clearly being driven by the core-team, with several major features in flight:

- **Agent Plugins Migration (PR [#3220](https://github.com/nanocoai/nanoclaw/pull/3220)):** The transition of "Agent Templates" to "Agent Plugins 1.0.0" is a major format migration. This is a significant architectural evolution that is currently open, indicating the next version will break from the old template format.
- **Remote Streamable HTTP MCP Servers (PRs [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) & [#3221](https://github.com/nanocoai/nanoclaw/pull/3221)):** This is a major feature that will allow users to connect to MCP servers over HTTP, not just stdio. PR #3221 extends support to codex and opencode providers, showing an active push to finish this functionality.
- **CLI Bounded JSON input (PR [#3218](https://github.com/nanocoai/nanoclaw/pull/3218)):** A request to accept bounded JSON from stdin for the `ncl` client is open, improving developer ergonomics for scripting.
- **Template Setup Flow (PR [#2909](https://github.com/nanocoai/nanoclaw/pull/2909)):** This long-pending PR (from July 2) adds the "first-agent" wizard flow, which will likely be a headline UX feature in the next release.

**Prediction:** The next minor/major release will almost certainly include the **Agent Plugins migration** and **Remote MCP Server support**, given they are large, core-team-branched PRs that have been active recently.

---

## 7. User Feedback Summary

- **Pain Point - Silent Failures:** The most common theme in user feedback is distrust due to **silent failures**. Users cannot tell if the agent is ignoring them or if a system error occurred. Issues #3226 and #3223 directly highlight this, describing how a bug looks like the agent is "ignoring" the user or "silently dropping" messages. This is a critical UX and trust issue.
- **Pain Point - Operational Complexity:** Issue #3075 points to real-world operational friction: hard-to-debug log loss, duplicate-insert errors on the Matrix channel, and the lack of a systemd unit for proper process supervision in a Docker/WSL2 environment.
- **Positive Sentiment - Security Awareness:** The community is not just reporting bugs but also proactively finding and patching security vulnerabilities themselves (e.g., the Telegram `Math.random` issue by `chiptoe-svg` and `dweekly`). This shows a mature, security-conscious user base actively contributing to the project's safety.

---

## 8. Backlog Watch

- **[Issue #3075](https://github.com/nanocoai/nanoclaw/issues/3075) - Silent log loss + inbound message duplicate-insert errors**: This critical issue has been open since July 17 and has only one comment. It is directly related to the more recent issue #3226 (duplicate-insert errors) but has gone unanswered. With the recent focus on message-dedup fixes, a maintainer should address this issue and link it to the appropriate fix, as it appears to be a related root cause.
- **[PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) - Template setup flow in the wizard**: This large, core-team feature PR has been open for over a month (since July 2). While it's likely next in line, its progress should be tracked as it seems outside the typical review cadence of the other merged PRs.
- **[PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) - Support remote Streamable HTTP MCP servers**: This is a highly requested feature that has been open since July 19. While the companion PR #3221 shows it's being actively worked on, the longer open time suggests a potential bottleneck in review or implementation complexity.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-11

## 1. Today's Overview

NullClaw's development activity is moderately quiet, with 2 total items updated in the last 24 hours (1 issue, 1 PR) and no new releases. Notably, issue #700, which requests an A2A client-side tool, has been **closed** — indicating maintainers are likely converging on a solution or have declined the proposal. The single active PR is an automated dependency bump (Alpine 3.23 → 3.24), which signals ongoing infrastructure maintenance but no feature-level commits. Overall project health appears stable, though the low activity suggests the team may be in a consolidation or planning phase rather than heavy feature development.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release is not listed in this data window. Observers should check the repository releases page for the latest tagged version.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The only PR activity is #956 (open), an automated Dependabot update for the `docker-images` group, bumping the Alpine base image from 3.23 to 3.24. This is a routine infrastructure dependency refresh with no functional changes expected.

**Notable closure:** Issue #700 (see Section 4) was closed after roughly 5 months of being open. While the PR is not in this data set, the closure suggests maintainers either integrated the feature, resolved it differently, or declined it — worth checking the issue thread for the resolution rationale.

## 4. Community Hot Topics

**[Issue #700 — "Add a2a_call client tool for calling remote agents"](https://github.com/nullclaw/nullclaw/issues/700)** *(CLOSED)*  
- Author: georgeglarson | Created: 2026-03-23 | Updated: 2026-08-10 | Comments: 1 | 👍: 1

**Analysis:** This issue requested a client-side implementation of the A2A protocol (v0.3.0) so the agent can send `message/send` JSON-RPC requests to remote agents. The author described running two NullClaw instances (a public "doorman" and a private personal agent) — a clear multi-agent orchestration use case. The single 👍 and the closure date aligned with today's digest suggest this was a valid, recognized need. The underlying demand is for **inter-agent communication and federation** — users want NullClaw to not only *serve* but also *consume* other agents' capabilities. This is a strong signal for the project's roadmap toward multi-agent ecosystems.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. No stability-related issues are tracked in this data window. The current baseline appears stable.

## 6. Feature Requests & Roadmap Signals

The only feature signal in this window is **Issue #700 (closed)** — the A2A client tool. Its closure implies one of three outcomes:

1. **Implemented** — the feature landed in a recent release or PR (check merge history for `a2a_call`).
2. **Superseded** — a better approach was adopted (e.g., a more general client abstraction).
3. **Deferred** — maintainers acknowledged but postponed it.

**Prediction:** Given the strategic importance of A2A interoperability (likely aligned with industry trends toward agent-to-agent protocols), the request for client-side capabilities is a plausible candidate for the **next minor version** (e.g., v0.4.0 or v1.x). Users should watch for release notes mentioning "A2A client" or "remote agent calling."

## 7. User Feedback Summary

**Use cases revealed:**
- **Multi-instance orchestration:** The author of #700 runs two NullClaw instances (public-facing + personal), indicating real-world deployments beyond single-agent setups.
- **Federated agent workflows:** The desire to have NullClaw initiate calls to other agents (not just respond) points to a need for **hub-and-spoke or peer-to-peer agent topologies**.

**Pain points:**
- **Incomplete protocol stack:** NullClaw implements A2A server-side but lacks client-side, forcing users to write custom JSON-RPC connectors. This is a friction point for advanced users.

**Satisfaction signal:** Low comment volume (1) suggests the community is small but engaged. The lack of complaints in this window indicates no immediate dissatisfaction blockers.

## 8. Backlog Watch

**[PR #956 — "ci(deps): bump alpine from 3.23 to 3.24"](https://github.com/nullclaw/nullclaw/pull/956)** *(OPEN)*  
- Author: dependabot[bot] | Created: 2026-06-15 | Updated: 2026-08-10 | Comments: 0 | 👍: 0

**Watch status:** ⚠️ **Needs maintainer attention.** This PR has been open for nearly **2 months** with zero comments and no merge action. Dependency bumps are low-risk, but prolonged unmerged updates can lead to security gaps (Alpine 3.23 may reach EOL) and increasingly complex merge conflicts. Maintainers should review and merge this promptly, or configure Dependabot to auto-merge patch/minor updates in the docker-images group.

---

*Digest generated: 2026-08-11 | Data sources: GitHub (NullClaw repo) | Activity level: **Low***

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-11

## 1. Today's Overview

IronClaw shows healthy, sustained velocity: 50 issues and 50 PRs were updated in the last 24 hours, with an even split of open/closed issues (25/25) and 17 PRs merged or closed. A new release candidate, **v1.1.1-rc.1**, shipped as an urgent patch for the 1.1 line addressing channel delivery, MCP compatibility, and upgrade safety. Activity is concentrated in two areas: a large "unified channel model" refactor (#7477) and a doc-truth verification pipeline (#7317, #7381), reflecting continued post-Reborn consolidation of architecture and quality gates. The queue of high-risk items is real but well-managed — several XL-size PRs are open and under active review.

## 2. Releases

**ironclaw-v1.1.1-rc.1 (2026-08-10)** — An urgent patch candidate for the 1.1 line, with release notes focusing on:
- **Channel delivery and pairing** fixes
- **IronHub/custom MCP compatibility** improvements
- **WebUI streaming stability**
- **Durable retrieval** fixes
- **Safe upgrades** from both supported stable predecessors (1.0.0 and 1.1.0)

**Migration note (critical):** Users upgrading from 1.0.0 are instructed to **"Stop all writers"** before upgrading — a destructive/downtime-requiring migration path. This is a significant operational caveat that should be highlighted to all operators.

---

## 3. Project Progress

**Merged/Closed PRs (highlights):**

- **#7381** (closed) — Docs: Doc-truth pipeline design record (PR 5/5 of the doc-truth series). Formalizes the answer to #7317: a deterministic pipeline with a `docs-live` deployment branch, no Mintlify versions.
- **#7336** (closed) — Loop-host: dedup consumed steering replays. Preserves a bounded durable identity window for consumed steering messages, preventing duplicate assistant replies from delayed queued-message replays.
- **#7376** (closed) — CI: check-guidance reference gate extended to the `docs/` surface (PR 2/5 doc-truth series). The public tree previously had **zero** path validation; this closes that gap.

**Notable advances from PR descriptions:**
- **#7477** (open, XL) — Unified channel model: one `ChannelAdapter` per channel for inbound, replies, and notifications, implementing design doc §12 items 1–11 plus §13 enforcement. This is a foundational refactor.
- **#7474** (open, XL) — QA fix batch: stops the agent asserting unverified state across three Railway-QA bugs (#7246, #7247, #7294), one commit per issue.
- **#7475** (open, L) — Fixes connect-nudge throttle release on ref-less delivery (web push, Slack without `ts`).

**Closed epics (portfolio cleanup):** Several large epics were closed this cycle — Telegram Product Completeness (#6483), Canonical Messaging Operations (#6484), Channel-Aware Canonical Conversations (#6485), and the Reborn ten-family crate layout move (#6926) — indicating substantial feature work has landed.

---

## 4. Community Hot Topics

- **#7137 — Live-canary shard artifact size (12 comments, open)** — [Issue Link](https://github.com/nearai/ironclaw/issues/7137)
  Shard uploads of 700MB–1.5GB each, >5GB total, are burning GitHub Actions storage quotas and slowing triage. The underlying need is CI efficiency and triage-ability. A fix PR (#7466, "Trim live-QA shard artifacts") is already open and directly addresses this.

- **#7145 — Extension host → loops re-layer sizing (4 comments, closed)** — [Issue Link](https://github.com/nearai/ironclaw/issues/7145)
  Architectural follow-up correctly identifying that the original issue (#7092) sized work from file count, not the actual four-port residue constraint. Signals a mature architecture-review culture catching its own methodology errors.

- **#7317 — Doc-Truth Verification Pipeline (3 comments, closed)** — [Issue Link](https://github.com/nearai/ironclaw/issues/7317)
  Community-raised, concrete evidence of breaking changes shipped without doc updates (e.g., `origin_gate_matrix` becoming mandatory). Closed by PR #7381 with a full design record. Good example of community feedback → process change.

- **#6257 — `attachments.mime_type` invalid value for PDFs (3 comments, open)** — [Issue Link](https://github.com/nearai/ironclaw/issues/6257)
  User-reported from Slack (Michael Kelly). Suspected type mismatch. Still open — likely a candidate for v1.1.1-rc validation.

---

## 5. Bugs & Stability

**New reports today (2026-08-10/11), ranked by severity:**

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **High** | [#7476](https://github.com/nearai/ironclaw/issues/7476) | `classify_delivery_outcome` ignores `Failed`'s `vendor_message_refs`, hiding partial-send evidence from the model (same gap #7475 fixes for notices) | Companion to [#7475](https://github.com/nearai/ironclaw/pull/7475) — not yet linked |
| **High** | [#7473](https://github.com/nearai/ironclaw/issues/7473) | Post-notice collapses "delivered with no vendor ref" into "not delivered," causing duplicate connect-nudges to already-nudged users | Yes — [#7475](https://github.com/nearai/ironclaw/pull/7475) open |
| **Medium** | [#7467](https://github.com/nearai/ironclaw/issues/7467) | Reborn storage is profile-indexed; a profile change makes deployments appear empty, stranding secrets/history | Yes — [#7456](https://github.com/nearai/ironclaw/pull/7456) open |

**Previously reported, still open:**

- **#6257** — PDF `mime_type` validation error (user-reported, 3 comments) — [Link](https://github.com/nearai/ironclaw/issues/6257)
- **#3762** — AGENTS.md edits in web UI don't update system prompts (suggested P1, open since May) — [Link](https://github.com/nearai/ironclaw/issues/3762)
- **#5882** — Repeated Slack reconnect breaks auth flow (bug_bash_P2, closed — but worth confirming the fix landed in 1.1.1-rc).

**Merged bug fixes:** #7336 (dedup steering replays) addresses a real user-visible duplicate-reply bug, closed this cycle.

---

## 6. Feature Requests & Roadmap Signals

**Clear roadmap signals for v1.2/v1.3 (from active epics):**

- **Epic #7467** — Profile-agnostic durable state + legacy profile root migration. This is a **breaking storage model change**; watch for migration tooling gaps.
- **Epic #7354** (v1.3.0) — Extensions vNext: Web Push, Rich Messaging, Telegram User Sessions, Signal channel. Target date 2026-08-14 (this week). High momentum, many PRs in flight (#7464 Telegram linked-device).
- **Epic #7038** (v1.3.0) — Storybook + AI-first Design System. Full proposal in PR #7257.
- **Epic #7046** — Admin-from-chat: configure tools/channels/extensions via AI. Strong "AI-first admin" signal.

**Predictions for next minor release (v1.2.0):**
- Unified channel model (#7477) — foundational, likely to land first
- Extensions vNext episode (#7354) — web push + Signal are concrete, shippable
- Durable memory parity matrix (#7426) and memory profile-agnosticism (#7467) — storage hardening is clearly on the critical path

**Community-initiated feature:**
- **#7317** — Doc-Truth pipeline (community-raised, closed, accepted). Demonstrates community feedback directly shaping CI/process investment.

---

## 7. User Feedback Summary

- **Pro:** The doc-truth issue (#7317) — raised by `cuongdcdev` with real, citeable examples of doc/code drift — got a complete pipeline design and closure within 4 days. This is a strong signal of a responsive maintainer team.
- **Pro:** Release candidate cadence is disciplined; the urgent 1.1.1-rc with explicit migration note ("stop all writers") shows operational care.
- **Con:** PDF generation is broken (`mime_type` error, #6257). This is a visible, reproducible failure on a core file type — likely to be a top user complaint.
- **Con:** AGENTS.md edit → system prompt drift (#3762) has been open since May (P1 suggested). Identity-file behavior is core to the "personal AI" value prop; three months without a fix is a pain point.
- **Con:** Slack and Telegram auth flows have had multiple failures (#5882, #6834) — channel reliability is a recurring theme, which the 1.1.1-rc specifically claims to address.

---

## 8. Backlog Watch

- **#3762 — Editing AGENTS.md does not update system prompts** — [Link](https://github.com/nearai/ironclaw/issues/3762)
  Open since May 18, P1-suggested, customer-facing. This is a core product-loop bug that has outlived two release cycles. Needs explicit ownership and a target version.

- **#5101 — Reuse cargo-component installer in live-canary** — [PR Link](https://github.com/nearai/ironclaw/pull/5101)
  Open since June 20, only 3 comments, scope: CI. Low risk, S-size, yet stale for ~2 months. Unblock or close.

- **#6257 — `Invalid value (attachments.mime_type)` on PDF** — [Link](https://github.com/nearai/ironclaw/issues/6257)
  Open 3+ weeks with no linked fix PR. User-reported with a clear repro. Candidates for the 1.1.1-rc validation checklist.

- **#7147, #7149, #7150, #7151** — Cluster of "architecture ratchet is not sound" issues (all closed). These were closed without visible linked PRs in this window — worth verifying that the underlying CI/arch guards were actually repaired, not just closed as "known gaps."

---

**Overall health:** High. Actively consolidating Reborn architecture, responsive to community-raised process gaps, disciplined release management. Watch the storage migration (#7467) and the channel reliability fixes in 1.1.1-rc as the two most user-visible risk areas.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-08-11:

---

## LobsterAI Project Digest — 2026-08-11

### 1. Today's Overview

LobsterAI is in a highly active development cycle, with 34 pull requests updated in the last 24 hours—a significant surge suggesting an intensive sprint or release-preparation phase. The vast majority of this activity (20 PRs) was merged/closed, indicating strong forward momentum and efficient maintainer throughput. Development focus is heavily concentrated on the CoWork agent-activity UI (context menus, file attachments, shortcuts) and on OpenClaw gateway stability (tool-loop guards, provider error handling, Python runtime fixes). Dependency updates (Vite, React, Mermaid) are being churned through rapidly, with several older PRs (April) finally being actioned.

### 2. Releases

No new releases were published in the last 24 hours. The most recent tagged version remains **2026.4.1**, referenced in the environment section of the latest bug report.

### 3. Project Progress

The majority of merged PRs today came from contributor **fisherdaddy**, focusing on both feature development and bug fixes:

- **CoWork UI Features (Renderer):**
    - [#2471](https://github.com/netease-youdao/LobsterAI/pull/2471): Non-image file attachments submitted to CoWork are now rendered as rich, clickable file cards instead of raw text paths, significantly improving the review experience.
    - [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469): Added a "collapse-agent-tasks" keyboard shortcut and enabled modifier shortcuts (e.g., Ctrl/Cmd+) to work while typing, improving power-user workflows.
    - [#2468](https://github.com/netease-youdao/LobsterAI/pull/2468): Refactored and unified streaming loading indicators into a single component, likely standardizing UI feedback across the app.
    - [#2472](https://github.com/netease-youdao/LobsterAI/pull/2472): Added group collapse functionality for CoWork activity, allowing users to tidy up long agent task lists.
- **OpenClaw (Core Engine) Fixes:**
    - [#2454](https://github.com/netease-youdao/LobsterAI/pull/2454): Fixed a critical issue where the "tool-loop guard" mistakenly terminated long-running legitimate polling operations.
    - [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470): Real provider/LLM runtime failures (e.g., idle timeout failover) are no longer swallowed by the app's stale-chat-error handler, meaning users will now see proper error messages instead of silent failures.
    - [#2467](https://github.com/netease-youdao/LobsterAI/pull/2467): Fixed broken pip shims on Windows that could persist after runtime upgrades, ensuring Python environments remain healthy.
- **Architecture:**
    - [#2466](https://github.com/netease-youdao/LobsterAI/pull/2466): Fixed a renderer initialization IPC stall with a retry mechanism, likely addressing rare startup hangs on slower systems.

### 4. Community Hot Topics

- **[Issue #1243: [BUG] qwen-portal-auth plugin crash loop](https://github.com/netease-youdao/LobsterAI/issues/1243)**
    - **Status:** Closed (stale) | **Comments:** 2
    - **Analysis:** This was the most notable user-facing issue in the digest. The bug describes a severe problem where the `qwen-portal-auth` plugin's configuration is continuously rewritten, causing the OpenClaw gateway to restart every 5-20 minutes, disrupting all users regardless of their model choice. While the issue was automatically closed by the stale bot, its underlying cause may still be relevant. The lack of a linked fix PR in the recent activity suggests this might be an environment-specific or legacy issue that was not reproduced on the latest codebase.

### 5. Bugs & Stability

| Severity | Bug Description | PR/Issue | Status |
| :--- | :--- | :--- | :--- |
| **High** | **OpenClaw tool-loop guard killing legitimate polling**—the safety mechanism was too aggressive, terminating valid long-running operations. | [#2454](https://github.com/netease-youdao/LobsterAI/pull/2454) | **Fixed** (Merged) |
| **Medium** | **Provider runtime failures silently swallowed**—users were not notified when the AI engine failed during chat, leading to confusing UI states. | [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470) | **Fixed** (Merged) |
| **Medium** | **Render init IPC stall**—potential startup hang on certain systems due to an IPC handshake failure. | [#2466](https://github.com/netease-youdao/LobsterAI/pull/2466) | **Fixed** (Merged) |
| **Low** | **Stale pip shims on Windows**—Python runtime upgrades could leave behind broken `pip` executables, causing environment errors. | [#2467](https://github.com/netease-youdao/LobsterAI/pull/2467) | **Fixed** (Merged) |
| **Low** | **Plugin config loop (qwen-portal-auth)**—gateway restarts reported by a user on v2026.4.1. | [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | **Closed** (Stale, no fix verified) |

### 6. Feature Requests & Roadmap Signals

No explicit user feature requests were filed in the last 24 hours. However, the merged PRs signal the developer's roadmap focus:

- **Rich AI Session Management:** The CoWork UI enhancements (file cards, context menus, group collapsing) point toward making the multi-agent workspace more of a first-class citizen, rivaling standalone agent UIs.
- **Power-User Pro Features:** The addition of modifier shortcuts while typing and a collapse shortcut indicates a focus on keyboard-driven, high-efficiency workflows.

Given the rapid merge of `fisherdaddy`'s PRs, these CoWork enhancements are the most likely candidates for inclusion in the next release.

### 7. User Feedback Summary

The only direct user feedback in this period was the bug report regarding the `qwen-portal-auth` plugin loop. The user's tone indicated frustration, specifying a high-frequency disruption (restarts every 5-20 mins) and listing it as a significant impact on their experience. The issue was closed as stale without explicit public confirmation of a fix, though the broader stability fixes in the core engine (PRs #2454, #2470) are likely to address many such gateway-level instabilities. No positive feedback or specific use-case descriptions were logged in the past 24 hours.

### 8. Backlog Watch

- **[Issue #1243 (qwen-portal-auth plugin loop)](https://github.com/netease-youdao/LobsterAI/issues/1243):** Though the issue was closed by the stale bot, it represents a significant stability complaint from a real user. Maintainers may want to verify that the recent OpenClaw fixes (e.g., provider error handling in #2470) cover the class of issues that caused this plugin loop, or it may resurface on future versions.
- **[PR #2452: Preserve provider for slashed model IDs](https://github.com/netease-youdao/LobsterAI/pull/2452) (Open):** This PR has been open since **2026-08-07** and addresses a potentially confusing bug where model IDs containing `/` (e.g., `deepseek-ai/DeepSeek-V4-Flash`) lose their provider prefix, leading to model/provider misinterpretation. It targets core session persistence and has not been merged for several days. Given the high priority of this bug class, it warrants maintainer attention.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-11

## 1. Today's Overview

Moltis is in a steady maintenance and stabilization phase. Activity over the last 24 hours shows a **moderate but focused** effort: 3 open issues and 2 open pull requests were updated, with **no new releases published**. The project is currently dealing with a cluster of bugs centered around the **Apple Container 1.x sandbox backend**, including detection, resource limits, and build failures. On the feature front, a long-running PR for interactive browser viewing (opened March 31) is still actively being worked on, alongside a sessions-management fix awaiting review. Notably, **all reported issues remain open with no new merges or closures**, suggesting maintainers are in a triage-and-fix cadence rather than a release-cyclo stage. No critical regressions or community escalations are visible; the project appears healthy but with a backlog of pending fixes.

## 2. Releases

No new releases were published in the last 24 hours. 

*(The latest release remains the previous version; no changelogs, migration notes, or breaking changes to report.)*

## 3. Project Progress

No pull requests were merged or closed in the last 24 hours. However, two PRs received updates, indicating active work:

- **[PR #1182 — fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182)** *(updated 2026-08-11)* — This fix addresses issue #1132 by removing the `main` session guard, allowing users to delete and archive the primary session like any other. The PR is still open, and its update suggests the author is refining the change, likely in response to review feedback.

- **[PR #531 — feat(browser): interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531)** *(updated 2026-08-10)* — This long-running feature PR (opened March 31) is still being actively developed. It adds a full browser management UI with CDP screencast, per-agent cookie isolation, and session history. The recent update indicates continued progress on a flagship feature, though no merge is imminent.

## 4. Community Hot Topics

The most actively discussed item this period is the **oldest and most commented** issue:

- **[Issue #1185 — [Bug]: Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)** — **3 comments**, created by *mikz* on Aug 8, updated Aug 10. This is the highest-engagement item in the current batch. The underlying need: **reliable sandbox lifecycle detection**. Users expect Moltis to correctly reconcile the actual sandbox process state with its internal tracking. The issue has been open for 3 days and is the community's top pain point right now.

The remaining issues and PRs have **zero comments**, indicating they are newly filed and awaiting triage rather than sparking discussion.

## 5. Bugs & Stability

Three bugs are currently open, all filed in the last 48 hours. Ranked by severity:

1. **[Issue #1185 — Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)** *(created Aug 8)* — **High severity.** This is a false-negative in sandbox state detection, which can cause workflow hangs, blocked commands, or unnecessary restarts. It undermines core reliability on Apple platforms. No fix PR exists yet.

2. **[Issue #1188 — [Bug]: resource limits not applied for apple-container backend](https://github.com/moltis-org/moltis/issues/1188)** *(created Aug 10 by holgzn)* — **Medium severity.** Resource limit configuration (CPU/memory quotas) is silently ignored on the apple-container backend, meaning users can't cap sandbox resource usage — a safety and cost concern. No fix PR exists yet.

3. **[Issue #1189 — [Bug]: Sandbox build failing due to wrong gogcli github URL](https://github.com/moltis-org/moltis/issues/1189)** *(created Aug 10 by holgzn)* — **Low–Medium severity.** A build dependency (gogcli) references an incorrect GitHub URL, breaking sandbox builds. This is likely a quick fix but blocks new sandbox creation entirely for affected users.

**Pattern**: All three bugs are Apple-container-specific, suggesting the Apple sandbox path is the current weak spot and likely receiving focused maintainer attention next.

## 6. Feature Requests & Roadmap Signals

- **[PR #531 — Interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531)** — The highest-visibility feature in flight. Expect this to land within the next 1–2 releases if the updated code passes review. It will significantly enhance browser-based agent workflows, real-time monitoring, and multi-agent isolation.

- **[PR #1182 — Main session delete/archive allowed](https://github.com/moltis-org/moltis/pull/1182)** — A user-requested UX improvement (from issue #1132) that will be a welcome addition in the next minor release, though not a major roadmap item.

- *No new feature requests were filed in this 24-hour window.* The community's current attention is on **stability and Apple-backend correctness** rather than new capabilities.

## 7. User Feedback Summary

The active user sentiment is **mixed with mild frustration** focused on Apple Container backend reliability:

- Users report **silent misbehavior** (sandbox running but reported as down; resource limits silently ignored) rather than hard crashes, which is arguably more damaging because it's harder to diagnose and doesn't produce obvious error messages.
- Issue #1185's author followed a **proper preflight checklist** but still encountered a state-tracking discrepancy — a sign that the issue may be systemic, not user error.
- The two new issues from *holgzn* (both Apple-backend, both filed on the same day) suggest an active user is stress-testing this backend and hitting multiple pain points in quick succession.
- No positive feedback or success stories were captured in this window.

**Overall**: Dissatisfaction is concentrated and backend-specific, not generalized; the community isn't expressing broad concerns about the project's direction.

## 8. Backlog Watch

- **[PR #531 — Interactive browser UI](https://github.com/moltis-org/moltis/pull/531)** — **4+ months old** (since March 31). This is the most significant item in the backlog. While *updated* recently, it still needs a maintainer to perform a final review and merge, or provide clear guidance on remaining blockers. The long gestation of a flagship feature risks community patience.

- **[PR #1182 — Main session deletion fix](https://github.com/moltis-org/moltis/pull/1182)** — Open since Aug 1 (10 days) with recent updates. A relatively simple fix that resolves a user-reported issue (#1132); it should be prioritized for review to prevent it from stagnating.

- **No long-unanswered issues** were found in the current window; the oldest open issue is only 3 days old, indicating healthy triage responsiveness.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-11

## 1. Today's Overview

CoPaw (QwenPaw) shows a **high-velocity, healthy development cycle** heading into the v2.1.0 release. Activity is very strong: **39 issues** and **50 PRs** were updated in the last 24 hours, with a solid closure rate (5 issues closed, 17 PRs merged/closed). The project appears to be in a **pre-release stabilization phase**, with PR #6875 (release notes for v2.1.0) and PR #6870 (large Creator plugin aggregate) both in flight. Community engagement is vibrant, particularly around Docker deployment, MCP tool compatibility, and memory-system (ReMe) functionality. A notable pattern: **Chinese-language users are heavily represented** in both issue reporting and PR contributions, reflecting strong adoption in the China market.

## 2. Releases

**No new releases** were published in the last 24 hours. However, **PR #6875 ("chore: update release notes for v2.1.0")** is actively preparing the v2.1.0 release with English and Chinese release notes, README updates, and documentation refresh — indicating **v2.1.0 is imminent**. Users are already running `2.1.0b2` (beta), and multiple issues reference this version.

## 3. Project Progress

**17 PRs were merged or closed** in the last 24 hours. Key developments:

- **Reranker support for ReMe memory search (backend)** — PR #6398 (closed/merged) adds re-ranking to memory search: over-fetching candidates, external reranker API integration, and answer-text rebuild. A companion UI config panel (PR #6399) is under review.
- **Sanitize Chat Completions content for strict providers** — PR #6809 (closed/merged) fixes the StepFun 400 error by stripping internal runtime envelope fields and Responses-API text types from outbound chat requests — directly addressing issue #6803.
- **Corrupted agent config handling** — PR #6615 (closed/merged) catches `UnicodeDecodeError`/`JSONDecodeError` in `load_agent_config()` with a clean fallback.
- **Unified marketplace** — PR #6880 consolidates apps, plugins, and skills under a single `/market` page with tab navigation, preserving existing business logic.
- **CI gating on tests** — PR #6764 adds a ruleset so red test runs block merges to main (requires admin import of the ruleset).
- **Qoder harness test skips** — PR #6886 guards tests with `pytest.importorskip` for clean collection without the optional SDK.
- **Hidden-folders toggle** in project directory picker (PR #6878).
- **Auto-Dream integration hardening** — PR #6884 (first-time contributor) makes single-unit failures tolerant: successful units remain successful, failed units are isolated rather than failing the whole task.
- **Approval purpose descriptions** — PR #6854 (first-time contributor) adds localized, user-facing explanations to approval requests.

## 4. Community Hot Topics

The most commented issues reveal **two dominant pain clusters**: deployment/installation friction and MCP compatibility.

1. **[#6782 — Docker plugin/app market stuck in "maintenance" (9 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6782)** — Docker v2.0.1 users cannot access plugin/app marketplaces. This is the top pain point, blocking core functionality for containerized deployments.

2. **[#6803 — OpenAI-compatible requests rejected by strict providers (6 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6803)** — StepFun's `step-3.5-flash` returns 400 due to Responses-API `input_text` content type + raw streaming fields being sent as Chat Completions. **Fix landed**: PR #6809 (merged) sanitizes outbound message content.

3. **[#6811 — OpenAI Responses continuation summary ignores `disable_thinking` (5 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6811)** — Scroll eviction triggers a synchronous summary call to a reasoning model, blocking the main conversation and misreporting 60-second cancellation as malformed output.

4. **[#6826 — Assistant message end-time display anomaly (5 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6826)** — UI shows seconds for a 2-minute assistant response. **Fix in review**: PR #6845 preserves actual completion time on history reload.

5. **[#6814 — SIGBUS crash in sqlite3WalFindFrame on macOS (4 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6814)** — Scroll `history.db` (WAL mode) crashes with SIGBUS during page lookup. Critical for macOS users.

**Top PR by recency**: [#6890 — Preserve long multiline tool output](https://github.com/agentscope-ai/QwenPaw/pull/6890) (fixes #6852), addressing rendering issues with long assistant/tool output by preserving source line breaks and avoiding the #5596 blank-line regression.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 Critical | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | **SIGBUS crash** in SQLite WAL page lookup on macOS when opening Scroll history.db — data access issue | No fix PR yet |
| 🔴 Critical | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | v2.0.1 **freezes after 30–60 min idle**, requires process kill+restart | No fix PR |
| 🟠 High | [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) | OpenAI-compatible requests rejected (400) by **strict providers (StepFun)** due to invalid content types | ✅ PR #6809 merged |
| 🟠 High | [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) | **`reasoning_content` relay failure** for thinking-mode models → 400 BadRequestError on multi-turn | No fix PR |
| 🟠 High | [#6867](https://github.com/agentscope-ai/QwenPaw/issues/6867) | **Gemini compaction error**: missing `thought_signature` in functionCall parts | No fix PR |
| 🟠 High | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | **MCP tools report "Tool not found"** after v2.0 upgrade for Docker users | No fix PR |
| 🟡 Medium | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP tool calls **convert numeric strings to numbers**, breaking APIs | No fix PR |
| 🟡 Medium | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | Console frontend **~20% CPU at idle** from infinite CSS animations (antd load-more spinner, ai-copilot-blink) | No fix PR |
| 🟡 Medium | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows installer fails with NSIS "cannot open file" errors; **browser extension NM host locks files** | No fix PR |
| 🟡 Medium | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | **Antivirus kills QwenPaw** during task execution; competitor WorkBuddy is not affected | No fix PR |
| 🟡 Medium | [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | **Chinese IME compositionEnd crashes** message queue in v2.1.0b2 | ✅ PR #6889 (fix: preserve textarea target for IME events) |

## 6. Feature Requests & Roadmap Signals

**Strong roadmap signals** — several feature requests have active implementation PRs:

1. **[#4237 — In-chat observability for running shell commands](https://github.com/agentscope-ai/QwenPaw/issues/4237)** — See, kill, or extend timeout per command. Core UX gap for long-running tasks; no PR yet but high value.
2. **[#6724 — Configurable MCP tool-call timeout](https://github.com/agentscope-ai/QwenPaw/issues/6724)** — `MCPClientConfig` lacks a timeout field; hung MCP servers stall turns indefinitely. Likely in next minor release.
3. **[#6841 — Auto-Dream single-unit failure tolerance](https://github.com/agentscope-ai/QwenPaw/issues/6841)** — Empty schema from LLM marks the whole dream task as error. **✅ PR #6884 addresses exactly this.**
4. **[#6585 — Toggle for dynamic character-count display](https://github.com/agentscope-ai/QwenPaw/issues/6585)** — Users want to disable the flickering "chars received" counter.
5. **[#6876 — Collapse background-task panel](https://github.com/agentscope-ai/QwenPaw/issues/6876)** (closed) — Background task cards fill the chat window; suggest default-collapse to a separate area. UX enhancement likely picked up.
6. **[#3681 — Auto-refresh session title after auto-memory update](https://github.com/agentscope-ai/QwenPaw/issues/6881)** — Small quality-of-life fix.

**Notable roadmap discussion**: [#6840 — ReMe Light timeline for full ReMe4 roadmap](https://github.com/agentscope-ai/QwenPaw/issues/6840) — users are asking about Auto-Link, tri-modal search, and 4-category digest weights. The ReMe memory system is a **major differentiator** and roadmap focus. Active PR work includes embedding hot updates, Daily Paper (PR #6772), and reranker configuration (PR #6398/#6399).

## 7. User Feedback Summary

**Real user pain points:**

- **Memory system (ReMe) is a differentiator but has rough edges**: [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) reveals `prompts.py` lies to agents — the "dream" process never syncs digests into MEMORY.md despite claiming to. Users notice these inconsistencies.
- **Docker users are underserved**: Marketplace stuck in "maintenance" (#6782), MCP tool failures (#6405) — two separate Docker-specific or Docker-reported issues.
- **Windows installer quality**: File-lock conflicts during update (#6810) and the qwenpaw-creator plugin failing to install from App Center (#6683) both impact Windows users.
- **Chinese-language users are actively engaged**: Multiple issues in Chinese, several Chinese-language PRs, and specific issues around Chinese IME (#6885) — the team should ensure Chinese-first QA.
- **Security/antivirus friction**: [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) — AV software kills QwenPaw during tasks; a competitor comparison suggests something about QwenPaw's behavior triggers heuristics.
- **UI polish**: Task panels occupying chat (#6876), flickering character count (#6585), idle CPU burn (#6828), and delayed output display (#6820) all point to console-frontend UX needing attention before v2.1.0 GA.

**Positive signals**: First-time contributors are landing fixes (Auto-Dream resilience #6884, approval descriptions #6854), indicating a welcoming community. The project is attracting diverse contributors.

## 8. Backlog Watch

**Issues needing maintainer attention (tracked for extended periods):**

1. **[#4237 — In-chat observability for running shell commands](https://github.com/agentscope-ai/QwenPaw/issues/4237)** — Opened **2026-05-12** (91 days ago), 4 comments, no assignee. High-value UX feature.
2. **[#4634 — Window size/position memory](https://github.com/agentscope-ai/QwenPaw/issues/4634)** — Opened **2026-05-22** (81 days ago), 2 comments. Simple quality-of-life fix for Desktop.
3. **[#6780 — Freeze after idle on v2.0.1](https://github.com/agentscope-ai/QwenPaw/issues/6780)** — Opened 2026-08-07, critical stability bug, no fix PR yet.
4. **[#6814 — SIGBUS crash on macOS](https://github.com/agentscope-ai/QwenPaw/issues/6814)** — Opened 2026-08-08, data-loss-class crash, no fix PR yet.

**Open PRs with long review times:**

1. **[#5992 — Per-session model overrides](https://github.com/agentscope-ai/QwenPaw/pull/5992)** — First-time contributor, opened **2026-07-12** (30 days), no reviewer activity since 2026-08-10. This is a config-feature PR with potential merge conflicts given the codebase velocity.
2. **[#6399 — Reranker UI config panel](https://github.com/agentscope-ai/QwenPaw/pull/6399)** — Under review since 2026-07-23; backend PR was merged. Needs attention.

---

**Overall assessment**: CoPaw is a **healthy, actively-developed project** with strong community contribution. The v2.1.0 release is near; key fixes (strict-provider sanitization, IME crash, Auto-Dream resilience) are landing. MacOS stability (SIGBUS) and Windows installer reliability remain the top quality risks.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-11

## 1. Today's Overview

ZeroClaw shows **very high activity** with 50 issues and 50 PRs touched in the last 24 hours. The project is firmly in its 0.8.x lifecycle (current version references up to v0.8.3), with substantial work converging on **security hardening (S0/S1-class bugs), channel integration maturity (Matrix, Telegram, WhatsApp, LINE, Bluesky/Reddit)**, and **governance/process improvements** for the RFC pipeline itself. A notable **security audit wave** (issues #9389–#9397, filed 2026-07-26) continues to drive high-priority bug fixes, while a large backlog of XL-sized PRs (OpenAI-compatible gateway endpoint, PowerShell support, DAG planning tool) awaits review. Only one PR was merged today — a small hardware test — suggesting reviewers are bottlenecked relative to contribution volume. Momentum is strong but **review capacity appears to be the critical constraint**.

## 2. Releases

No new releases were published in the last 24 hours. The most recent known release line is **v0.8.3** (referenced in bug reports). The project is running a public **0.8.0-beta-1 → 0.8.3** rollout with governance RFCs still in deferred/ratification status.

## 3. Project Progress

**Merged today:**
- **[PR #8301](https://github.com/zeroclaw-labs/zeroclaw/pull/8301) — `test(hardware): cover catalog tool name format`** (by WeeLi-009) — Adds a regression test asserting all catalog tool names are lower_snake_case ASCII identifiers. Test-only, no production code change.

**Active near-merge work** (updated today, no author action required):
- **[PR #9904](https://github.com/zeroclaw-labs/zeroclaw/pull/9904) — chore(security): ignore RUSTSEC-2026-0247 (bitmaps unmaintained)** (by tidux) — Small, non-controversial, unblocks the `Security` CI job.
- **[PR #9903](https://github.com/zeroclaw-labs/zeroclaw/pull/9903) — fix(hardware): clean up Arduino flash temp dirs** (by cakeni) — Proper `TempDir` lifetime management; small scope.
- **[PR #9583](https://github.com/zeroclaw-labs/zeroclaw/pull/9583) — ci(lint): gate rustdoc warnings via config and lint job** (by tidux) — Implements the acceptance criteria of issue #9545; strict rustdoc by default.

**Significant stalled PRs** (awaiting author action, high risk, XL size — these represent major roadmap items):
- **[PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — OpenAI Chat Completions endpoint** (by REL-mame) — Largest integration ask; blocked on `needs-author-action`.
- **[PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) — PowerShell native shell on Windows** (by NiuBlibing). 
- **[PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — SSRF gate for file_download** (by wangmiao0668000666) — security-relevant, XL.

## 4. Community Hot Topics

The top issues by engagement cluster into three themes:

**A. Governance & Process (the loudest conversation)**
- **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, Label Cleanup** (23 comments) — Long-running (since May) governance overhaul. Rev 24, ratification deferred, rollout in progress. Signals maintainers are actively re-engineering how work is tracked.
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue tracker** (12 comments) — The operational queue for clearing RFC backlogs.
- **[Issue #9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) — Streamline RFC scope, discussion, voting** (7 comments) — Direct response to the slowness of the 7-day discussion/unanimity requirements. Expect process simplification in 0.9.x.

**B. Security Audit Fallout (by belumume)**
- **[Issue #9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — WhatsApp empty `allowed_groups` = permit-none** (12 comments) — Security default change, high priority (p1).
- **[Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — Per-model capability config RFC** (13 comments) — Longest-running feature RFC; core to multi-provider correctness.

**C. Tooling / Platform Strategy**
- **[PR #9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) — DAG plan execution tool** (by jxxralf, high risk, L size) — Agents need structured multi-step planning; community actively building this capability.

**Reactions:** Minimal 👍 usage (only 1 on issue #9545) — the community communicates via comments, not reactions.

## 5. Bugs & Stability

The project is dealing with a **concentrated cluster of S0/S1 security bugs**, mostly from the late-July audit. No fixes landed today, and several are still awaiting author action.

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **S0** | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | Knowledge graph has no per-agent attribution — any agent reads/mutates another's knowledge | None yet — **needs design work** |
| **S0** | [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | Matrix channel bypasses `.well-known/matrix/client` discovery, breaks delegated homeservers | None yet |
| **S0** | [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | Git write verbs bypass risk classifier via `-C` / `--git-dir` global options | None yet |
| **S1** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Running SOP jobs have no operator cancellation path | None yet (needs dashboard work) |
| **S1** | [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | `web_fetch` returns garbage for gzip/brotli/deflate responses | None identified |
| **S1** | [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Docker Compose gateway can remain loopback-bound behind published port | None identified |
| High | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `sops_dir` documented default not honored — SOPs silently never load | None yet |
| High | [#9383](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) | `npm audit` failed with 6 high/critical findings (auto-filed) | None yet — **dependency risk** |
| High | [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) | WASI HTTP egress has no destination policy / config knob | None yet |
| High | [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | Bluesky and Reddit have no sender authorization | None yet |
| High | [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) | LINE group messages skip allowlist + pairing handshake | None yet |
| High | [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) | Unauthenticated `/api/pair` keys lockout on attacker-supplied header | None yet |
| High | [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) | Command audit logging defaults to enabled but writes nothing | None yet |

**Regression watch:** [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) — daemon reload is not on SIGUSR1, and the degraded-security warning tells operators to send a signal that **kills** the daemon (S2, accepted).

## 6. Feature Requests & Roadmap Signals

**Strong signals for next release(s):**

1. **OpenAI-compatible gateway endpoint ([PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486))** — Closes #8550. Most-requested interoperability feature (LangChain, Continue.dev, Aider, OpenAI SDK). XL-sized, needs author action. **Likely headline feature for 0.9.x.**
2. **Per-model capability & context-window config ([Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100))** — Accepted RFC, high risk. Fixes misreported vision support and 32k context fallback bugs.
3. **DAG-based planning tools ([PR #9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554))** — New tool class for structured multi-step execution with parallelism.
4. **PowerShell as native Windows shell ([PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182))** — Major Windows parity win.
5. **Custom CA trust for remote MCP servers ([Issue #9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339))** — Enterprise/private-network adoption blocker.
6. **Process reform ([Issue #9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496))** — If RFC streamlining lands, expect faster velocity on all other roadmap items.

**Release prediction:** The 0.9.x line will likely bundle: OpenAI endpoint, per-model capabilities, DAG tool, and PowerShell support — plus the security audit fixes (which may be backported to 0.8.x as a security patch release).

## 7. User Feedback Summary

**Pain points expressed by users:**

- **Security defaults are footguns (multiple S0/S1 reports).** Knowledge graph cross-agent leakage (issue #9647), WhatsApp default-allow behavior (#9397), and bypassable risk classifier for git (#9627) all indicate trust boundaries require operator vigilance rather than safe defaults.
- **Instrumentation quality below expectations:** Command audit logging silently writes nothing (#9391); ZeroCode CPU metric mislabels daemon CPU as local CPU (#9844).

**Community-driven improvements:**
- **Telegram heavy hitters:** Media group batching (PR #8955) and multi_message streaming (PR #8561) both XL and from the same contributor cluster — strong community investment in Telegram UX.
- **Email threading matters:** PR #9523 adds proper RFC 5322 References chains — a **distinguished contributor** effort, indicating user demand for real email workflows.

**Process fatigue is visible:** Multiple RFCs (## 6808, #8692, #9496, #9530) are explicitly about making the governance process faster and lighter. The community is telling maintainers: *the process is the bottleneck.*

**Positive signals:** Zero-rustdoc-warning state (PR #9583, #9545) shows community pride in code quality. The `distinguished contributor` and `principal contributor` labels indicate a recognized, growing contributor core.

## 8. Backlog Watch

**Long-unanswered / stalled items needing maintainer attention:**

| Item | Age | Issue | Why it matters |
|---|---|---|---|
| **PR #8486** — OpenAI endpoint | ~43 days | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | Highest-demand integration; blocked on `needs-author-action` despite closing #8550 |
| **PR #8713** — SSRF gate with `allowed_private_hosts` opt-in | ~38 days | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | Security-relevant (S0 surface); held on author action |
| **PR #9320** — Cron job wall-clock timeout | ~19 days | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Fixes stuck-job lock leaks; **high risk, p1**; XL-size review burden |
| **PR #9002** — Keep agent turns alive after viewer disconnect | ~31 days | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | Core UX fix for dashboard reliability |
| **Issue #9393/#9392/#9389/#9391** — Audit-found channel/gateway bugs | ~16 days | [9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393), [9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392), [9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389), [9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) | All p1, risk:high, `help wanted` — **no PRs attached yet** |
| **PR #8443** — Matrix single-message progress drafts | ~44 days | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | Stale-candidate risk; XL refactor of Matrix chat UX |

**Structural risk:** The volume of XL-sized PRs (at least 8) with `needs-author-action` suggests contributors are being asked for large rebases/reworks without timely maintainer feedback loops. The 50 active PRs vs. 1 merge trend indicates **the maintainer queue (Issue #8692) is the critical path**. If the RFC streamlining effort (issue #9496) lands, this may self-correct; otherwise expect contributor attrition on the largest items.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*