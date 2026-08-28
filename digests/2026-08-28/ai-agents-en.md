# OpenClaw Ecosystem Digest 2026-08-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-28 10:08 UTC

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

# OpenClaw Project Digest — 2026-08-28

## 1. Today's Overview
OpenClaw is in a high-activity maintenance phase heading into the **2026.8.1 stable release**. The last 24 hours saw **500 issues** and **500 PRs** updated (67% and 65% open respectively), signaling a heavily engaged triage and review process. Key themes dominate the backlog: **session-state integrity, message-delivery reliability, and auth-provider robustness**, particularly around the Codex runtime and multi-account channel configurations. A significant batch of merged PRs (#126424, #116489, #123535, #128371, #125471, #128223) rolled out fixes spanning gateway delivery scoping, security acknowledgements, UI refresh storms, and release automation. The project shows healthy forward motion with maintainers actively reviewing PRs (10+ labeled "ready for maintainer look") and new contributors surfacing targeted fixes (e.g., grep OOM, NVIDIA thinking levels).

## 2. Releases
**No new releases** were published in the last 24 hours. The project is mid-beta cycle for **v2026.8.1-beta.3**, as tracked by release validation issue #125626.

## 3. Project Progress
Six PRs were **merged/closed today**, indicating focused feature and fix advancement:

- **#126424** *(merged, P1, XL)* — **fix(gateway): keep conversation delivery within agent bindings** by `joshavant`. Closes a multi-agent security/session-state bug where conversation tools could deliver messages outside configured agent bindings. High-risk merge flagged for compatibility, message-delivery, and security-boundary.
- **#116489** *(merged, P1, XL)* — **feat(security): require acknowledgement for install policy warnings** by `jesse-merhi`. Adds an external `security.installPolicy` command that can return `warn`, requiring an authorized operator to review and confirm before plugin/skill installs proceed. Directly improves the install security posture.
- **#123535** *(merged, P2, S)* — **fix(ui): avoid session catalog refresh storms** by `jesse-merhi`. Prevents redundant sidebar refreshes on focus, presence, and startup events that cannot change underlying inventory. Reduces UI jank and network noise.
- **#128371** *(merged, P1, XL)* — **fix(release): authorize focused beta evidence** by `vincentkoc`. Resolves a beta.3 release blocker by allowing focused-group validation manifests when a frozen candidate's changes are limited and prior full-group failures have been rerun successfully.
- **#125471** *(merged, P2, XL)* — **fix(models): keep Claude CLI OAuth available in Control UI** by `VACInc`. Fixes a post-gateway-restart OAuth refresh ownership loss when a legacy auth profile entry contradicted the actual provider mode, and removes a contradictory empty "anthropic: missing" row.
- **#128223** *(merged, P2, S)* — **fix(cli): resolve alias targets from the write snapshot** by `8exgh` (closes #127618). `openclaw models aliases add` now resolves alias targets from the consistent written snapshot rather than a potentially stale read.

## 4. Community Hot Topics
The most active discussions reveal deep operator pain points around **reliability under load, session-state integrity, and silent failures**:

- **#42475 — [Feature]: Per-agent cost budget enforcement** (23 comments, 👍1) — `hkochar` proposes gateway-level daily/monthly caps to prevent runaway spend. Underlying need: enterprises lack guardrails without external monitoring. Likely product-decision pending.
- **#125626 — OpenClaw 2026.8.1 beta feedback** (22 comments) — `Patrick-Erichsen` maintains a rolling feedback thread for beta testing. Central coordination point for pre-release validation and blocker identification.
- **#91009 — Codex PreToolUse hook spawns CPU-bound processes** (21 comments, 👍2) — **P0, crash-loop, platinum hermit**. Spawning `openclaw-hooks` processes at ~100% CPU stalls the gateway. Highest-severity open issue, with no fix PR yet — needs immediate maintainer attention.
- **#48003 — Steer mode fails to inject messages mid-turn** (20 comments, 👍4) — **P1, diamond lobster**. Session-state UX friction caused by `KeyedAsyncQueue` implementation. High user desire for true mid-turn steering.
- **#87744 — Codex Telegram turns time out on 2026.5.27** (18 comments, 👍4) — **P1, message-loss**. Turns do work but never reach `turn/completed`, failing Telegram delivery. Widespread reliability impact.

## 5. Bugs & Stability
No new first-party bugs were filed today, but several existing high-severity issues remain **critical and unaddressed**, while a new PR today targets a crash bug:

- **🔴 P0 — #91009** *(platinum hermit, 21 comments)* — Codex hook CPU-bound processes stall gateway RPC. **No fix PR open.**
- **🔴 P1 — #100941** *(platinum hermit)* — Gateway drops concurrent in-process WebSocket connections (1006) under parallel tool fan-out; misleading "Gateway-crashed" error. **No fix PR.**
- **🔴 P1 — #131150** *(diamond lobster, opened 2026-08-27)* — **NEW: Slack DMs silently dropped after gateway restart** for all 19 Slack accounts; `prepareSlackMessage` returns null pre-gate. Immediate release-blocker candidate for 2026.8.1.
- **🟠 P1 — #129314** *(silver shellfish, opened 2026-08-25)* — **NEW: Hidden "next-turn runtime context" occasionally dispatched as a visible standalone turn**. Intrusive UX bug, no fix PR.
- **🟠 P1 — #87109** *(silver shellfish)* — Gateway heap grows to 1073MB+ at idle on macOS; cron jobs fail silently. No fix PR, but **PR #131621** (new today) addresses a related OOM vector.

**Fix PRs landed today** for existing bugs:
- **PR #131621** (new) — `grep` with context OOMs the gateway on oversized (~2GB) files. P1 fix ready for maintainer look.
- **PR #131704** (new) — `/think` levels ignored or downgraded on NVIDIA Nemotron models; P1 fix submitted.
- **PR #130993** (open) — Responses sessions now compact before reaching context limit; fixes 6 long-session compaction failures.
- **PR #127950** (open) — Prevents queued channel messages from being dead-lettered when a busy session runs past the 5-minute ingress watchdog.

## 6. Feature Requests & Roadmap Signals
Active feature work signals trajectory for upcoming releases:

- **Multi-agent & identity breadth** — #71058 (multiple Azure/Teams bots per gateway), #131638 (Control UI locale refresh), and multiple Slack/Telegram fixes point to enterprise-scale multi-channel hardening.
- **Cost & usage governance** — #42475 (per-agent cost budgets) is a strong candidate for an upcoming version given its 23-comment discussion and operator demand. Gateway-level enforcement is a natural next step after session-level cost tracking.
- **UI & UX investment** — #28300 (theme customization system), #52640 (persistent task-status surface), #88154 (Slack Modal support), and the merged UI refresh-storm fix (#123535) indicate sustained Control UI polish. New PR #131716 persists Sessions view preferences, and #123356 (explicit command activation plans) is likely in the next feature batch.
- **Memory architecture evolution** — #60572 (multi-slot memory) and #90354 (bounded pre-compaction flush) remain active, though lower priority now.
- **Release-process automation** — Merged #128371 and new PR #131715 (Convex-leased Telegram userbot for e2e proof) show infrastructure investment in validation pipelines for the upcoming stable release.

## 7. User Feedback Summary
Real-world usage reveals both loyalty and pain:

- **Passionate adoption**: #73537 (production-readiness label) author describes running OpenClaw as a family/business assistant (Telegram, automations, cron, Home Assistant) — it has "genuinely become part of our daily workflow."
- **Channel reliability is the top pain point**: Multiple issues (#87744, #106760, #131150, #41165) report Telegram/Slack messages either timing out, being silently dropped, misrouted, or text blocks erased. This is eroding trust for users whose primary interface is chat.
- **Silent failures frustrate operators**: #87109 (cron silently fails), #53408 (tool params silently dropped), and #129314 (internal context message leaks as visible) all describe failures without errors, making debugging lengthy.
- **Session/state integrity matters**: 4 of top-10 issues involve session-state misbehavior (#48003 steer, #87744 turn completion, #41165 routing, #118185 duplicate transcript writes). Users need predictable, inspectable sessions.
- **Positive UX signals**: UI refresh-storm fix and alpha-quality locale refresh show dedication to polish, but TUI scroll-jump (#44130) and sessions panel sorting (#51028) remain open frictions.

## 8. Backlog Watch
Issues and PRs requiring maintainer attention:

- **#91009 (P0, platinum hermit, 21 comments)** — Codex hook CPU stall. This is a release-blocker quality issue and has been open since **June 6** with no fix PR. Needs immediate prioritization.
- **#53408 (P1, silver shellfish, 12 comments)** — Write/exec tool parameters silently dropped after long conversations. Unaddressed since **March 24**; causes undetected state corruption.
- **#86215 (P1, diamond lobster, 11 comments)** — Codex OAuth refresh failures wedge agents for hours without alerting or profile rotation. Open since **May 24**, no fix linked.
- **#48003 (P1, diamond lobster, 20 comments, 👍4)** — Steer mode mid-turn injection failure. High community demand; linked PR open but needs maintainer review decision.
- **#53008 (P1, diamond lobster, 6 comments)** — Memory compaction blocks main processing lane for 10+ minutes, freezing the bot. Open since **March 23**; impacts availability significantly.
- **#87744 (P1, diamond lobster, 18 comments, 👍4)** — Codex Telegram turn timeout regression. Unresolved for 3 months with widespread channel impact.

**PRs awaiting maintainer review** (labeled "ready for maintainer look"):
- #131638 (locales), #131301 (plugin consent preservation), #131621 (grep OOM fix), #131704 (NVIDIA think levels), #127241 (shared session history preservation), #122067 (agent schema v17 migration), #127950 (channel message dead-letter fix).

**Long-standing PRs needing a decision**:
- #82519 (stabilize red CI tests; open since **May 16**, status "needs proof")
- #80176 ([Codex×Pi parity Phase 5] JSONL session-replay harness; open since **May 10** with 6 comments, needs product-decision)

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem

**Date:** 2026-08-28

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **consolidation phase** marked by intense engineering activity across multiple projects, with enterprise-grade reliability, session-state integrity, and multi-channel delivery emerging as the dominant concerns. Projects are converging on shared architectural patterns—**producer-boundary normalization**, **explicit session ownership contracts**, and **context compaction economics**—while differentiating on target users (developer-centric CLI, consumer desktop, enterprise multi-tenant, embedded/IoT). The community is actively contributing bug fixes and feature PRs at scale (500+ PRs touched in OpenClaw alone), but maintainer bandwidth remains the primary bottleneck, with numerous high-severity issues (P0/P1, weeks old) awaiting review. Notably, **Windows parity** and **channel reliability** (Telegram, Slack, Discord) are persistent cross-project pain points, while **cost governance** and **memory durability** are emerging as competitive differentiators.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed (24h) | Releases (24h) | Health Score | Primary Phase |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 6 PRs | None (beta.3) | ⭐⭐⭐⭐ | Stabilization / pre-stable |
| **NanoBot** | ~5 | 26 | 11 PRs | None | ⭐⭐⭐⭐ | High-velocity refactor |
| **Hermes Agent** | ~50 | 50 | 7 PRs | **v0.20.6** (Aug 27) | ⭐⭐⭐ | High volume, triage strain |
| **PicoClaw** | 3 (1 active) | 7 (1 open) | 6 PRs (deps) | None | ⭐⭐⭐ | Steady maintenance |
| **NanoClaw** | 10 | 50 (1 merged) | 4 PRs | None | ⭐⭐⭐ | Provider architecture refactor |
| **NullClaw** | — | — | — | — | — | **Inactive** |
| **IronClaw** | 33 | 48 | **31 PRs** | None | ⭐⭐⭐⭐⭐ | High-velocity execution |
| **LobsterAI** | ~2 | ~12 | 12 PRs | **v2026.8.26** | ⭐⭐⭐⭐ | Release-candidate cycle |
| **TinyClaw** | — | — | — | — | — | **Inactive** |
| **Moltis** | 0 | 2 | 2 PRs | None | ⭐⭐⭐⭐ | Consolidation / zero backlog |
| **CoPaw** | 46 | 48 | 20 PRs | **v2.2.0-beta.2** | ⭐⭐⭐⭐ | Pre-v2.2.0 launch |
| **ZeptoClaw** | — | — | — | — | — | **Inactive** |
| **ZeroClaw** | 22 | 50 | 2 PRs | None (v0.8.5 due Aug 30) | ⭐⭐⭐⭐ | Architecture RFC / stabilization |

---

## 3. OpenClaw's Position

**Advantages:**

- **Community scale:** 500 issues + 500 PRs updated in 24h is 10x–100x larger than any peer; unmatched contributor depth and triage engagement.
- **Multi-agent architecture maturity:** Session-state integrity, per-agent bindings, and mid-turn steering (#48003) are advanced beyond peers (NanoClaw, ZeroClaw are only now designing session-ownership contracts).
- **Ecosystem breadth:** Telegram, Slack, Discord, Matrix, IRC, web, plus Codex/OAuth integrations—broader channel coverage than most peers, with active bug-fix throughput.
- **Security posture investment:** Install-policy acknowledgements (#116489) and security-boundary fixes (#126424) suggest enterprise-grade governance features in progress.

**Technical approach differences:**

- OpenClaw uses a **gateway-centric, agent-binding model** with release automation and evidence-based beta validation (focused-group manifests, Convex-leased e2e userbots)—a more disciplined release process than most peers.
- Largely **TypeScript/Node**, while peers split between Rust (ZeroClaw, IronClaw), Go/TypeScript (NanoClaw, PicoClaw), and Python (CoPaw).

**Community size comparison:**

- Clear **#1 in raw engagement** (500/500 vs. next closest at 50/50 — Hermes, ZeroClaw, NanoClaw, CoPaw).
- But **maintainer bandwidth is strained**: 10+ PRs await "ready for maintainer look," and 3-month-old P0 issue (#91009, Codex CPU stall) remains unfixed — a risk that peer projects with tighter triage (IronClaw, Moltis) do not exhibit.

**Verdict:** OpenClaw is the **ecosystem leader by community and feature breadth**, but its **release-velocity and maintainer-response latency** lag IronClaw and Moltis, creating an opening for disciplined competitors.

---

## 4. Shared Technical Focus Areas

| Area | Projects | Specific Needs |
|---|---|---|
| **Session/Message Integrity** | OpenClaw, NanoClaw, ZeroClaw, IronClaw, CoPaw | Mid-turn steering, turn-completion signals, silent message drops, duplicate-run prevention, session-ownership CAS, transcript fidelity after trimming |
| **Context Compaction / Token Economics** | OpenClaw, NanoBot, IronClaw, CoPaw, ZeroClaw | Compaction barriers, budgeted tool schemas, oversize tool-result bounding, context_compact_ratio tied to model window, measured 4.1× token cost reduction |
| **Channel Reliability / Attachment Handling** | OpenClaw, NanoClaw, IronClaw, ZeroClaw, PicoClaw, CoPaw | IRC 512-byte fragmentation, Slack DM drops, Discord attachment fetch, Telegram reply-thread memory, Feishu streaming cards, silent dead-lettering |
| **Windows Parity** | Hermes, IronClaw, NanoBot, LobsterAI, CoPaw | SCM enumeration failures, os.kill semantics, cookie encryption, WinError 32 on delete, os.replace retry, CI coverage gaps |
| **Provider Abstraction & Multi-Model** | NanoClaw, ZeroClaw, CoPaw, NanoBot, IronClaw | Unified provider contracts, per-session model overrides, model-negotiation alignment, served-vs-requested model in errors, fallback routing |
| **Security & Governance** | OpenClaw, Moltis, LobsterAI, NanoBot | Install-policy acknowledgements, sandbox image validation, forced-sandbox UX friction, credential preservation |
| **Cost / Usage Governance** | OpenClaw, LobsterAI | Per-agent cost budgets, credit-drain visibility, silent-cost transparency |
| **Observability / Error Reporting** | OpenClaw, ZeroClaw, IronClaw, NanoClaw | Silent failures (cron, tool params, attachments), error dedup/backoff, actionable config validation, served-model error names |

---

## 5. Differentiation Analysis

| Project | Primary Target User | Core Differentiator | Architecture | Risk Profile |
|---|---|---|---|---|
| **OpenClaw** | Power users / operators | **Community depth + multi-agent orchestration** | TypeScript, gateway-centric | Maintainer latency on P0s |
| **NanoBot** | Developer / API-first | **Architectural agility** — rapid refactoring, clean boundaries | Go/TypeScript | PR-conflict accumulation, no release to consolidate |
| **Hermes Agent** | Individual desktop users | **Desktop UI + browser tooling** | TypeScript/Electron | Windows second-class-citizen, ~525-PR release delta |
| **PicoClaw** | IRC / Matrix / self-hosters | **Protocol nuance** (IRCv3-aware) | Go | Stale-bot auto-closing feature requests |
| **NanoClaw** | Channel-integrated agents | **Provider contract unification** + skill registry | Go/TypeScript | Attachment/liveness bugs unresolved |
| **IronClaw** | Enterprise / automation | **Disciplined engineering + memory/learning pipeline** | Rust | High-risk sandbox refactor (#7903), Windows outage |
| **LobsterAI** | Consumer desktop (CN) | **Release discipline + installer hardening** | Electron | Cost-transparency trust issue |
| **Moltis** | Agent backend / infra | **Security + OpenAI-schema compatibility** | (unclear) | Zero backlog, small scope |
| **CoPaw** | Consumer desktop (CN) + enterprise | **Multi-tenant Hub + Python 3.13/OpenSSL 3.5 modernization** | Python/Electron | UI/UX polish debt |
| **ZeroClaw** | Developer / protocol-rigor | **RFC-driven architecture, WASM plugin runtime** | Rust | RFC backlog, author-action bottleneck |

**Key differentiation axes:**

- **Target user:** OpenClaw/IronClaw/ZeroClaw → operator/automation; Hermes/LobsterAI/CoPaw → consumer desktop; NanoClaw/PicoClaw → channel-integrated self-hosters; Moltis → agent backend.
- **Engineering philosophy:** ZeroClaw and IronClaw are **RFC- and data-driven** (measured token costs, CAS contracts); NanoBot is **agile-refactor-driven**; OpenClaw is **community-driven**; LobsterAI/CoPaw are **release-ops-driven**.
- **Language:** Rust (IronClaw, ZeroClaw) signals performance/safety focus; TypeScript (OpenClaw, Hermes) signals ecosystem breadth; Go (NanoClaw, PicoClaw) signals channel-integration pragmatism.

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|---|---|---|
| **Tier 1 — Rapid Iteration (high momentum, high risk)** | OpenClaw, IronClaw, CoPaw, NanoClaw, ZeroClaw, NanoBot | 26–500 PRs/day, active RFCs, architectural refactors, frequent beta releases. **OpenClaw** leads volume; **IronClaw** leads execution quality; **CoPaw** accelerates toward v2.2.0; **ZeroClaw** executes a finite stabilization line. |
| **Tier 2 — Steady State (healthy cadence, stable)** | PicoClaw, Moltis, LobsterAI | Moderate activity, disciplined releases, few new bugs. **Moltis** has zero open issues/PRs — unusual but spotless. |
| **Tier 3 — At Risk (high volume, strained triage)** | Hermes Agent | High contributor volume but maintainer-bandwidth strain, 3-month-old issues, Windows breakage clusters. |
| **Tier 4 — Inactive** | NullClaw, TinyClaw, ZeptoClaw | No activity in 24h; likely dormant or low-priority forks. |

**Rapidly iterating:** OpenClaw (volume), IronClaw (execution), CoPaw (feature velocity), NanoClaw/ZeroClaw (architecture).

**Stabilizing:** LobsterAI (release-candidate cycle), Moltis (consolidation), ZeroClaw (v0.8.5 freeze).

---

## 7. Trend Signals for AI Agent Developers

1. **Session-state integrity is the new frontier.** Across OpenClaw, ZeroClaw, NanoClaw, CoPaw: users demand deterministic session ownership (CAS claims), mid-turn steering, and turn-completion guarantees. Developers should treat session-state as a **first-class distributed-systems problem**, not a UI concern.

2. **Token economics are product economics.** IronClaw's measured 4.1× token-cost inflation on full-history replay, plus compaction-ratio work across 5 projects, proves that context-window hygiene is a **cost-of-goods issue** — agents must expose compaction, bounded tool schemas, and oversize-result handling by default.

3. **Tool-output normalization is mandatory.** Gmail/GitHub/MCP base64 payloads, oversized MIME headers, and camelCase tool-name skips are causing silent inference slowdowns and data loss. Producers must normalize output **before** it reaches the model — a pattern now adopted in IronClaw, Moltis, and CoPaw.

4. **Channel reliability defines user trust.** Silent message drops (Slack, Discord, Telegram, Feishu), IRC fragmentation, and attachment-byte gaps are the #1 complaint across 6+ projects. If your agent's primary interface is chat, **bytes-must-flow** and **failures-must-surface**.

5. **Windows is the canary.** Hermes, IronClaw, NanoBot, and CoPaw all report Windows-specific breakage (SCM, os.kill, file-locking, cookie encryption) — users are increasingly deploying agents on Windows desktops, and parity failures cause outsized frustration.

6. **Provider abstraction is converging, not fragmenting.** Unified provider contracts (NanoClaw), per-session model overrides (CoPaw), and served-model error reporting (ZeroClaw) signal a move toward **verifiable, core-owned provider definitions** — a mature pattern that all multi-provider agents will need.

7. **Cost governance is an emerging feature, not a nicety.** Per-agent budgets (OpenClaw), credit-drain visibility (LobsterAI), and error-notice dedup (NanoClaw) reflect real user pain: operators want **guardrails before spend**, not post-hoc warnings.

8. **RFC-driven architecture is winning.** ZeroClaw's RFC process (27-comment runtime-owned-session RFC) and IronClaw's measured cost data (PinchBench benchmarks) show that **data-backed design debates** produce better outcomes than rapid merge-queue churn — a lesson for teams navigating large architectural changes.

---

**Bottom line:** The ecosystem is healthy, competitive, and converging on a common set of engineering challenges (session integrity, token economics, channel reliability, provider contracts). **OpenClaw** has the community and breadth; **IronClaw** has the execution discipline; **CoPaw** and **ZeroClaw** are the ones to watch for the next architectural leaps. Developers should prioritize **session-state design, token budgeting, and Windows parity** in their own agent projects.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-28

## 1. Today's Overview

NanoBot is in a period of **high-velocity engineering activity** (26 PRs updated in 24h), with the maintainer team (primarily `chengyongru`) driving a **major architectural refactoring wave** across session persistence, agent memory, and provider routing. The current focus is split between **stability hardening** (event-loop blocking, Windows clipboard race conditions, Herdr pane rendering) and **architectural simplification** (extracting tool execution boundaries, removing deprecated config options). The project shows **strong momentum** toward a more modular and robust agent core, though Feature request #5567 (fixed) awaits initial triage. The backlog shows signs of **PR conflict accumulation** (4 PRs marked with `conflict`), indicating stale branches may need rebasing. No new releases were published today.

## 2. Releases

None — no new releases were published in the last 24 hours.

## 3. Project Progress

11 PRs were merged or closed today. Key advancements that landed:

- **[#5579 — fix(session): move persistence off event loop](https://github.com/HKUDS/nanobot/pull/5579)**: A critical refactor adding cancellation-safe async `SessionManager` APIs while preserving synchronous callers and third-party contract compatibility. The companion PR opened as [#5580](https://github.com/HKUDS/nanobot/pull/5580).
- **[#5572 — fix(agent): default request concurrency to unlimited](https://github.com/HKUDS/nanobot/pull/5572)**: Changes the default inbound concurrency from capped to unlimited, addressing WebUI hangs. Users can opt back into a cap via the environment variable.
- **[#5574 — refactor(providers): make fallback attempts explicit](https://github.com/HKUDS/nanobot/pull/5574)**: Introduces a deterministic `ProviderAttempt` routing resolution before execution, decoupling retry and fallback policy from the `AgentRunner` loop.
- **[#5569 — refactor(agent): extract tool execution boundary](https://github.com/HKUDS/nanobot/pull/5569)**: Removes tool-call preparation, execution, batching, and classification from `AgentRunner`, introducing a functional execution boundary without new state containers.
- **[#5575 — refactor(memory): remove consolidation ratio](https://github.com/HKUDS/nanobot/pull/5575)**: Simplifies archival: deterministic one-prefix / eight-message retention replaces ratio-driven loops, with an `[ephemeral]` working-state handoff.
- **[#5577 / #5576 — fix(tui): preserve full UI in Herdr panes](https://github.com/HKUDS/nanobot/pull/5577)**: Uses alternate-screen TUI layout in Herdr panes, removing intrusive metadata reporting. Also addressed Windows clipboard UI test flakiness ([#5578](https://github.com/HKUDS/nanobot/pull/5578)).

## 4. Community Hot Topics

- **[Feishu streaming card consolidation (#5567)](https://github.com/HKUDS/nanobot/issues/5567)** — 2 comments. Request from the China-based Feishu channel community to collapse multi-message agent output (progress, final reply) into **one streaming card**. The underlying need is a consistent “one user message → one agent message” response model across channel integrations. This will likely drive a unified output-session design across all channels.

- **[Custom provider thinking style (#4429, closed)](https://github.com/HKUDS/nanobot/issues/4429)** — 2 comments. The maintainers concluded this feature request; custom providers now need to align with NanoBot’s standard model negotiation parameters. Closed issue suggests the functionality may be covered by the new provider-routing refactor.

- **Active architectural PRs cluster** (by same author, `chengyongru`), including:
  - [Explicit recall by default (#5571)](https://github.com/HKUDS/nanobot/pull/5571)
  - [Pluggable recall backend (#5570)](https://github.com/HKUDS/nanobot/pull/5570)
  - [Runner-owned context compaction (#5568)](https://github.com/HKUDS/nanobot/pull/5568)

  These PRs reflect a **renewed focus on durable-memory ergonomics** — moving recall from a system-prompt-heavy approach to a tool-behind-an-explicit-tool model. This signals a shift toward **cleaner token budgets and deterministic memory behavior**.

## 5. Bugs & Stability

Sorted by severity:

- **[HIGH — Session persistence blocking the event loop (#5579)](https://github.com/HKUDS/nanobot/pull/5579)** — P1 bug: synchronous `SessionManager` calls were executed on the event loop, risking gateway-wide stalls. **Fix merged today**; linked follow-up open as [#5580](https://github.com/HKUDS/nanobot/pull/5580) for further API stabilization.
- **[MEDIUM — Windows clipboard-status race in TUI tests (#5578)](https://github.com/HKUDS/nanobot/pull/5578)** — Flaky CI on Windows; fixed by waiting on a stable observable (composer placeholder) rather than the transient status line.
- **[MEDIUM — Empty provider fallback leaks `image_url` path (#4346)](https://github.com/HKUDS/nanobot/pull/4346)** — Closed after image-stripping fallback was found to leak image paths to the provider instead of marking them unviewable.
- **[LOW — TUI rendering broken in Herdr panes (#5576/#5577)](https://github.com/HKUDS/nanobot/pull/5576)** — Merged fix: restore alternate-screen layout, confine integration to title set/clear.
- **[WAIT — Deleted sessions recreated by delayed cross-session messages (#5483)](https://github.com/HKUDS/nanobot/pull/5483)** — Open fix PR, awaiting review and merge.

## 6. Feature Requests & Roadmap Signals

- **Feishu single-card responses (#5567)** — High relevance for Chinese-market channel users; not yet merged or addressed. A roadmap item that could jump to P1 given the volume of Feishu MCP integrations.

- **Explicit agent memory recall by default (#5571)** — Aligns with a broader privacy-driven AI-agent trend. This feature is technically ready and grouped with the memory backend refactor (#5570); likely to land in the **next minor or patch release**.

- **Per-spawn model presets (#5561)** — Open PR (#5561, resolves #4231) with a clear design path. May enter next version after the current refactor wave stabilizes.

- **Budgeted MCP tool schemas (#5388)** — Opt-in byte-budget for model-visible tool schemas helps fit longer contexts. Low risk to existing deployments.

## 7. User Feedback Summary

- **Deliverables visibility is a pain point**: Feishu users report seeing too many messages (tools, progress, final reply) instead of one coherent response card. This reflects a broader desire for channel-native output opacity and structured streaming.

- **Windows users hit runtime crashes**: The `os.replace()` transient `WinError 5` on session save crashed the gateway twice in the same `gateway.log`; a fix PR (#5382) is open but also flagged with a `conflict` marker.

- **WebUI users experience hangs under default concurrency** (context: #5572). The fix lands today as a **better default (unlimited)** with clearer documentation and regression coverage.

- **Config deprecation is thoughtful**: Removed `consolidationRatio` without breaking the long-term memory prompt, offering a deterministic archive pattern. This suggests **careful backward-compatible evolution** of the config surface.

## 8. Backlog Watch

- **[#5382 — fix(session): retry os.replace() on transient Windows PermissionError](https://github.com/HKUDS/nanobot/pull/5382)** — Open for 15 days (P2 bug, crash-confirmed on Windows). Needs review and merge; the fix is targeted and low-risk for non-Windows systems.

- **[#5338 — fix(mcp): preserve credentials when OAuth store read fails](https://github.com/HKUDS/nanobot/pull/5338)** — Open 17 days; actively supersedes a thread around MCP credential safety.

- **[#5388 — feat(agent): budget model-visible MCP schemas](https://github.com/HKUDS/nanobot/pull/5388)** — Open 15 days, blocked by conflict; needs rebase and a maintainer decision.

- **[#5483 — fix(session): prevent deleted sessions from being recreated by delayed messages](https://github.com/HKUDS/nanobot/pull/5483)** — Open 6 days; important for session-lifecycle semantics, needs initial review.

---

**Overall Health Signal**: NanoBot is **actively evolving, with fast-merge turnaround and a focus on core stability and architectural quality**. The primary risk is **technical-debt velocity from the sheer number of open refactor PRs** from the same author (`chengyongru` with 8+ of the last 24h PRs). Without a release to consolidate findings, external and downstream developers may find the main branch hard to track.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-28

## 1. Today's Overview

Hermes Agent remains highly active with 50 issues and 50 PRs updated in the last 24 hours — a sustained high-volume contribution pattern consistent with the ~525 PRs rolled into the v0.20.6 patch release yesterday. Issue traffic skews heavily toward bug reports (≈30 of 50), with a notable cluster of Windows-specific compatibility problems and desktop app regressions. PR activity is healthy, with 7 merged/closed and 43 open, and today's commits target desktop performance, session-state correctness, and MCP/terminal scoping. The project shows strong community engagement but also signs of maintainer bandwidth strain, as numerous issues carry `needs-repro` or `needs-decision` labels awaiting triage.

## 2. Releases

**v2026.8.27 — Hermes Agent v0.20.6** (released August 27, 2026)

This patch release consolidates ~525 PRs merged since v0.20.5 into a stable tagged release for downstream consumers (Docker images, hosted deployments, fresh installs). No detailed changelog was included in the release notes; the description is truncated mid-sentence. Users upgrading from v0.20.5 should expect a large delta, and one new bug report (#96925) attributes tool-call duplication with GitHub Copilot to this update, suggesting possible regressions in the provider layer.

## 3. Project Progress

Seven PRs were merged/closed today, representing meaningful progress across several areas:

- **PR #97043 (Closed)**: `feat(execute_code): stdout spillover` — recovers truncated output instead of re-running, porting the web_extract cache pattern to code execution. This addresses a long-standing data-loss issue where the middle 20% of output was permanently discarded.
- **PR #96997 (Closed)**: `refactor(execute_code): schema diet` — reduces schema size from 712 → 654 tokens/call by weaving persistence into the tool's core story rather than bolting it on. Part of a broader kernel-adoption arc (#95681).
- **PR #96970 (Closed)**: Feature request for vault-backed model-blind browser login/fill (ported from OpenInstinct) — closed, likely merged or superseded.

Open PRs showing steady progress include desktop route chunk warmup (#97037), interactive-shell-before-hydration (#97027), backend-before-window setup (#97032), and ACP null-response cancellation handling (#97047).

## 4. Community Hot Topics

The most-discussed items today reveal two core community concerns: desktop reliability and architectural decision-making.

- **[Issue #96282 (Closed, 14 comments)](https://github.com/NousResearch/hermes-agent/issues/96282)**: Desktop boot timeout caused by a `tui_gateway.server` stdout redirect regression from commit `6d4e851d8`. High engagement suggests desktop startup stability is a widespread pain point.
- **[Issue #77111 (Open, 10 comments, 2 👍)](https://github.com/NousResearch/hermes-agent/issues/77111)**: RFC for a `RealtimeVoiceProvider` ABC to unify four competing duplex-voice PRs. The community is pushing for architectural abstraction over merge-queue collision — a signal that voice I/O is a high-demand roadmap item.
- **[Issue #90477 (Open, 9 comments)](https://github.com/NousResearch/hermes-agent/issues/90477)**: Desktop profile switching on SSH remotes spawns a local backend, falls back to the wrong profile, and reconnects to a different host. Complex multi-host profile routing remains a top confusion source.

Underlying needs: users want deterministic desktop/SSH/profile behavior and cleaner convergence paths for overlapping feature PRs.

## 5. Bugs & Stability

Ranked by severity, today's bug reports include:

**High severity — desktop breakage or data loss:**
- **[#96282 (Closed)](https://github.com/NousResearch/hermes-agent/issues/96282)**: Desktop boot timeout from stdout redirect regression — *already fixed* (closed).
- **[#97017 (Open, duplicate)](https://github.com/NousResearch/hermes-agent/issues/97017)**: Desktop force-injects `desktop_ui` toolset into every request, causing severe latency on constrained/local inference backends.
- **[#96993 (Open)](https://github.com/NousResearch/hermes-agent/issues/96993)**: Windows real-profile cookie copy purged on first launch (Chrome 151/152 app-bound encryption) — copy browser always starts signed-out.
- **[#96731 (Open)](https://github.com/NousResearch/hermes-agent/issues/96731)**: `browser_exec` 420s timeout on Windows desktop with `use_real_profile` — same path runs in ~7s standalone.

**Medium severity — cross-platform and session-state:**
- **[#97019 (Open)](https://github.com/NousResearch/hermes-agent/issues/97019)**: `host_supervisor` uses `os.kill(pid, 0)` for liveness, which on Windows sends `CTRL_C_EVENT` — unsafe.
- **[#95188 (Open)](https://github.com/NousResearch/hermes-agent/issues/95188)**: Deleted desktop profile resurrects via stale `lastProfileByConnection` + cron-ticker shell.
- **[#96995 (Open)](https://github.com/NousResearch/hermes-agent/issues/96995)**: #96155 fix misses mid-turn pre-API guard; Codex still false-triggers 600s compression.
- **[#97004 / #96360 (Open, duplicates)](https://github.com/NousResearch/hermes-agent/issues/97004)**: `hermes update` aborts on Windows when any third-party service is PAUSED or in `STOP_PENDING` — SCM enumeration fails.
- **[#97001 (Open, duplicate)](https://github.com/NousResearch/hermes-agent/issues/97001)**: Reasoning effort clamp missing on turn-restore path; GLM/Z.ai rejects `medium`.
- **[#96925 (Open)](https://github.com/NousResearch/hermes-agent/issues/96925)**: Copilot duplicates tool calls after v0.20.6 update.

**Low severity:**
- **[#97011 / #97020 (Open)](https://github.com/NousResearch/hermes-agent/issues/97011)**: Desktop mouse-wheel scrolling stops while thinking chain expanded; TUI loses reasoning/Fast status display.

Fix PRs exist for several items: #97040 scopes terminal config to active profile (#96992), #97041 preserves active Codex streams, #97042 fixes per-profile remote override routing (#90477), #97030 retains session owner in search results.

## 6. Feature Requests & Roadmap Signals

- **Voice infrastructure (Issue #77111)**: The four competing duplex-voice PRs and the RFC for a `RealtimeVoiceProvider` ABC strongly signal voice I/O is a near-term roadmap priority. Expect an abstraction + first-party provider in the next 1–2 releases.
- **Browser credential vault (PR #96970, Closed)**: Vault-backed model-blind login/fill ported from OpenInstinct — likely merging soon given sudden maintainer attention.
- **Task-scoped async closeout (PR #97039)**: Background delegation closeout barrier for durable work groups — advanced delegation semantics are being explored.
- **Abbreviated reply resolution (Issue #96954)**: Users want native `clarify` prompts to accept `1번`, `첫 번째`; minor UX polish likely to be picked up.
- **Kanban attachment previews (PRs #84297, #84299)**: Desktop kanban UX is maturing; these open PRs may land in the next minor release.
- **stdout spillover for execute_code (PR #97043, Closed)**: Data-recovery pattern for truncated code output — clearly maintainer-endorsed and merged.

## 7. User Feedback Summary

Real pain points surfacing consistently:

- **Windows remains a second-class citizen**: Multiple reports of Windows-specific breakage (SCM enumeration, `os.kill` semantics, cookie encryption, WinError 32 on profile delete) suggest inadequate Windows CI coverage. Users are hitting these daily.
- **Desktop/CLI divergence**: Provider/model routing, profile handling, and session behavior differ between Desktop and CLI (#75128), confusing users who switch contexts.
- **SSH/multi-profile complexity**: Profile switching with remote backends is fragile and produces surprising fallbacks (#90477, #95188) — advanced users are hitting edge cases faster than fixes land.
- **Browser tooling instability**: Real-profile browsing, CDP tab leaks (#21532), and cookie handling issues span weeks — this area feels under-maintained.
- **Performance on local inference**: Desktop toolset injection (#97017) and unused reasoning display (#97020) degrade constrained setups.
- **Satisfaction signals**: High community contribution volume, rapid fix turnaround on some items (e.g., #96282 closed within a day), and maintainer-directed campaigns (e.g., execute_code refactor) indicate the project is responsive when issues clear triage.

## 8. Backlog Watch

Long-unanswered items needing maintainer attention:

- **[#31980 (Open, since May 25)](https://github.com/NousResearch/hermes-agent/issues/31980)**: Background terminal processes lose tracking after gateway restart — OS processes survive but Hermes can't poll/kill them. Three months old with 1 comment, no fix PR.
- **[#21532 (Open, since May 7)](https://github.com/NousResearch/hermes-agent/issues/21532)**: CDP browser mode never closes tabs on cleanup — leaks accumulate in user Chrome instances, leading to memory exhaustion. Three+ months old.
- **[#61184 (Open, since July 8)](https://github.com/NousResearch/hermes-agent/issues/61184)**: `agent.disabled_toolsets` doesn't block MCP server tools in `-z` oneshot; silent fallback to disabled servers. ~7 weeks old, marked `needs-repro`.
- **[#78007 (Open, since August 3)](https://github.com/NousResearch/hermes-agent/issues/78007)**: A2A plugin: client timeout (120s) dies before server reply window (300s); long tasks can never complete. ~4 weeks old.
- **[#87761 (Open, since August 16)](https://github.com/NousResearch/hermes-agent/issues/87761)**: `hermes profile delete` on Windows fails with WinError 32 — `_cleanup_gateway_service` has no Windows branch. 12 days old, no PR.
- **[#75511 (Open PR, since July 31)](https://github.com/NousResearch/hermes-agent/pull/75511)**: MCP functional errors should not trip the transport breaker — solid, scoped fix awaiting review for ~4 weeks.

These items represent cumulative technical debt in terminal lifecycle, browser cleanup, MCP isolation, and Windows parity that will likely resurface as user friction grows.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-28

## Today's Overview

PicoClaw is in a steady state with moderate activity: **3 issues** were updated in the last 24 hours (1 active, 2 closed as stale), and **7 PRs** were updated (1 open, 6 merged/closed). The project is actively maintaining its dependency ecosystem — **4 dependency bump PRs (AWS SDK, Anthropic SDK, Mautrix)** were all merged today, reflecting a healthy maintenance cadence. User-driven feature requests remain focused on **model flexibility and protocol nuance** (IRC long-message handling, Whisper transcription flexibility, dynamic model overrides in subagent tools). One notable new contribution is a **UI/UX fix for chat lag**, submitted by a non-TypeScript developer, which signals growing community participation beyond core maintainers. No new releases were published in this window.

## Releases

**None** — no new releases were published today. Projects maintains a regular release cadence, so this is not a cause for concern.

---

## Project Progress

All merged/closed PRs today were **dependency updates** and one long-pending fix merge:

- **[PR #3336](https://github.com/sipeed/picoclaw/pull/3336) — Merged:** `build(deps): bump aws-sdk-go-v2/service/bedrockruntime 1.53.3 → 1.57.1` — Updates the AWS Bedrock Runtime client, improving support for the latest Bedrock model APIs.
- **[PR #3335](https://github.com/sipeed/picoclaw/pull/3335) — Merged:** `build(deps): bump aws-sdk-go-v2/config 1.32.25 → 1.32.35` — Config-layer AWS SDK update.
- **[PR #3334](https://github.com/sipeed/picoclaw/pull/3334) — Merged:** `build(deps): bump anthropic-sdk-go 1.55.1 → 1.62.0` — Significant bump (7 minor versions) for Anthropic SDK, likely adding new Claude model support and API improvements.
- **[PR #3333](https://github.com/sipeed/picoclaw/pull/3333) — Merged:** `build(deps): bump maunium.net/go/mautrix 0.27.0 → 0.29.0` — Matrix protocol library updated two minor versions.
- **[PR #3332](https://github.com/sipeed/picoclaw/pull/3332) — Merged:** `build(deps): bump aws-sdk-go-v2 1.42.0 → 1.43.4` — Core AWS SDK update.
- **[PR #1555](https://github.com/sipeed/picoclaw/pull/1555) — Closed:** `fix: merge PR #1390 #1389 #1383 #1381` — A consolidated merge of four older fixes. Closed after a long lifecycle (created March 2026), this likely indicates the fixes were either folded in or superseded. **Worth a maintainer note** to confirm the underlying fixes landed.

**Note:** All closed dependency PRs are flagged `[stale]` by the bot, suggesting they were auto-closed. The team should verify these updates actually merged into the mainline.

---

## Community Hot Topics

The most active discussion this window is the **only open issue**:

- **[Issue #3287 — [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)** — **8 comments**, created 2026-07-22, updated 2026-08-27. The community is actively engaging with this feature request. The core problem: IRC's 512-byte limit causes messages to be split by clients, but PicoClaw treats each line as a separate message, breaking conversational context. Users want PicoClaw to recognize IRCv3 message tags to reassemble fragmented messages into coherent units before processing by the AI model. The prolonged discussion suggests this is **a real pain point for IRC-using users**, and the fix is non-trivial (requiring IRCv3 protocol awareness).

Two other issues were closed as stale (see Backlog Watch below), indicating community submissions were reviewed but not actioned within the 14-day window.

---

## Bugs & Stability

**No critical bugs, crashes, or regressions were reported in the last 24 hours.**

The only stability-related item is the following new fix, which is still **open**:

- **[PR #3347 — fix laggy interface](https://github.com/sipeed/picoclaw/pull/3347)** — Open, created 2026-08-27. Addresses a **web UI performance bug** where the chat interface becomes sluggish with a large amount of text. The author claims the fix eliminates lag in both desktop and mobile browsers (tested in Brave). **This is a user-facing quality-of-life fix that warrants maintainer review**, especially since the author explicitly notes they are not a TS/Node developer, so the fix may need expert review for robustness.

---

## Feature Requests & Roadmap Signals

Three feature requests surfaced in this window:

| Issue | Status | Requested Feature | Likelihood |
|-------|--------|-------------------|------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | **Open** | IRCv3 long-message reassembly | **High** — actively discussed, concrete use case, protocol-standard approach |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | **Stale/Closed** | Non-Whisper `/audio/transcriptions` endpoint support | **Medium** — user wants model-agnostic speech-to-text; would address a real limitation |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | **Stale/Closed** | Dynamic model override in `delegate`/`spawn`/`subagent` tools | **High** — aligns with power-user needs for per-task model selection |

**Prediction:** [#3287] (IRC long messages) is the most likely candidate for the next minor release, given the sustained community interest and the fact that it defines a concrete, standard-based solution (IRCv3 tags). [#3330] (dynamic model override) is architecturally simple (passing a model param through tool calls) and would likely follow shortly, as it unlocks significant flexibility for advanced agent orchestration workflows.

---

## User Feedback Summary

**Pain points expressed this week:**

1. **IRC message fragmentation** ([#3287](https://github.com/sipeed/picoclaw/issues/3287)): Users relying on IRC as their chat frontend are seeing conversation coherence break because PicoClaw treats split IRC fragments (due to 512-byte protocol limit) as distinct messages. This undermines the agent's ability to understand context in long exchanges.

2. **Model flexibility gaps** ([#3331](https://github.com/sipeed/picoclaw/issues/3331), [#3330](https://github.com/sipeed/picoclaw/issues/3330)): Two distinct groups of power users are asking for more control over model selection — one for speech-to-text (wanting to use modern non-Whisper models with `/audio/transcriptions` endpoints) and one for agent tools (wanting to specify different models for different subagent tasks at call time).

3. **Web UI performance** ([PR #3347](https://github.com/sipeed/picoclaw/pull/3347)): A user reported visible lag in the web chat interface with long conversation histories. **Positive signal**: the same user submitted a fix, showing high engagement, but the fact that they had to fix it themselves indicates maintainers haven't prioritized UI polish.

**Overall satisfaction** appears neutral-to-positive — dependency updates are flowing, community members are contributing fixes, but the **stale-bot auto-closing** of feature requests may cause some user frustration (see below).

---

## Backlog Watch

The following items need maintainer attention:

1. **[Issue #3330 — Dynamic model override in delegate/spawn/subagent tools](https://github.com/sipeed/picoclaw/issues/3330)** — Created 2026-08-13, **closed as stale after 14 days with only 2 comments**. This is a well-specified feature request from a power user with clear use cases. If auto-closed by the stale bot without maintainer triage, it may unfairly bury a valuable roadmap item. **Recommendation**: Reopen or acknowledge the request and migrate to a roadmap tracking issue.

2. **[Issue #3331 — Non-Whisper audio transcription endpoint support](https://github.com/sipeed/picoclaw/issues/3331)** — Same pattern: created 2026-08-13, closed as stale. The user clearly identified the root cause (`asr.go` hardcodes Whisper model selection) and proposed a config flag. **Recommendation**: Similar to #3330 — either fast-track or formally defer with a comment so the user isn't left in limbo.

3. **[PR #1555 — Merge of four older fixes](https://github.com/sipeed/picoclaw/pull/1555)** — This PR was created in **March 2026** and only now closed without any explicit merge indication. The underlying PRs (#1390, #1389, #1383, #1381) fixed real issues. **Recommendation**: Verify whether these fixes have been incorporated into the codebase through other means; if not, this is a **silent regression risk** for users depending on the fixes.

4. **[PR #3347 — UI lag fix](https://github.com/sipeed/picoclaw/pull/3347)** — Open for less than 24 hours, but given that it's from a non-expert contributor and addresses a visible UX problem, it should be reviewed promptly to either merge (with cleanup) or provide feedback to avoid contributor discouragement.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-28

## 1. Today's Overview
NanoClaw shows sustained, high-velocity development activity with **50 PRs updated and 10 issues touched in the last 24 hours**. The project is in a clear consolidation phase around its **provider architecture** — a coordinated refactor of provider contracts (runtime, host, setup, codex, opencode) advanced across 7+ PRs this week, suggesting a deliberate move toward a more modular and verifiable multi-provider foundation. However, a cluster of **recurring channel-layer defects** (Discord attachment drops, WhatsApp image handling, rate-limit feedback storms, queue starvation) signals operational maturity gaps in the chat-sdk-bridge and agent-runner that are now receiving focused attention. One PR was merged and three closed overall. No new releases were cut today.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Only one PR was merged in the window; the majority of merged/closed items were deliberate PR closures. The most significant architectural progress is visible in the **open PR portfolio**, particularly the provider refactor series led by `zvi-fried`:

- **Provider contract series (PRs #3581–#3593):** Seven coordinated refactor PRs — runtime provider contract (#3581), host provider contract (#3585), setup provider contract + install verifier (#3586), codex provider contract (#3584), opencode provider contract (#3588), core-owned tone/speed inference (#3592), and core tone/speed mapping onto Codex personality (#3593) — collectively moving provider implementations onto a single source-of-truth contract.
- **Task failure accounting (#3594):** Fixes #3223, making errored scheduled tasks visible as `FAILED` runs instead of being silently conflated with "ran and chose not to message."
- **Cross-session status (#3595):** CLI teaching agents to look up status across sessions.

Other long-running feature PRs continue to mature without merging — notably Gemini provider support (#2136), the local-LLM `/add-local-llama` skill for OpenCode (#1995), and Codex custom-endpoint routing (#1994), all still open with recent updates.

## 4. Community Hot Topics
The most active discussion this period centers on **chat-sdk-bridge attachment handling**, with a high-severity Discord bug drawing the most engagement:

- **#3456 — Discord approval/ask_question cards corrupt (5 comments):** A redundant `value` param breaks Discord's `custom_id`, causing every click to resolve to the wrong option — making approval flows unusable. High severity, actively discussed for four days. [Issue #3456](https://github.com/nanocoai/nanoclaw/issues/3456)
- **#2888 — Discord drops image/file attachments (2 comments):** Agents only see filenames, never content, because `messageToInbound` never fetches attachment bytes via `fetchData`. Root cause identified; Telegram works correctly. Open since June 30. [Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888)
- **#3572 — Silently dropped attachments (closed, 2 comments):** Filed as a complementary bug: adapter supplies `url`, consumers require `fetchData`, and the drop is silent. Though marked closed, it underpins the still-open #2888 and the gap is not yet fixed. [Issue #3572](https://github.com/nanocoai/nanoclaw/issues/3572)

The underlying need across all three: **a unified attachment contract** for inbound media across all adapters, with byte fetch semantics enforced rather than incidental.

## 5. Bugs & Stability
Several reliability bugs are active, ranked by severity:

- **High — #3568: Pending `system` rows starve the inbound queue.** Once `maxMessagesPerPrompt` (default 10) system rows accumulate ahead of real traffic, the agent silently stops responding to every message. A severe liveness issue that will affect any long-lived session. No fix PR yet. [Issue #3568](https://github.com/nanocoai/nanoclaw/issues/3568)
- **High — #3456: Discord approval cards corrupted by duplicate `value` param.** Functional breakage of approval/ask_question UX on Discord. [Issue #3456](https://github.com/nanocoai/nanoclaw/issues/3456)
- **Medium — #3576: Rate-limit turns flood channels with duplicate error notices.** `deliverErrorResult` has no backoff/dedup, and every retry re-notifies the user. A real-install noise storm, but not data-loss. [Issue #3576](https://github.com/nanocoai/nanoclaw/issues/3576)
- **Medium — #3575: Opaque WhatsApp downscale fix.** One large inbound image (>2000px) wedges the entire session with a permanent "image in conversation too large" state until a manual `/clear`. A fix PR exists and is open (#3575). [Issue #3575](https://github.com/nanocoai/nanoclaw/issues/3575)
- **Medium — #2888/#3572: All inbound attachments drop on Discord.** Bytes never fetched; agent sees only metadata. Root-caused and well understood, no merged fix yet. [Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888)

No security regressions or data-loss bugs surfaced in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
The clearest roadmap signal is the **provider contract unification series** (#3581–#3593) — zvi-fried's coordinated refactor implies NanoClaw is positioning for a **multi-provider future with verifiable, core-owned provider definitions**, possibly ahead of the Cursor Agent SDK payload (#3356) and structured Codex auth (#3489) landing. The Gemini provider PR (#2136, open since April) has seen recent updates and is the most likely next big provider to land.

User-feature signals:
- **#3577**: Auto-wire the sole eligible agent group instead of prompting "Choose an agent" every time — a UX-quality improvement that likely ships soon as it reduces friction on installs with one agent group. [Issue #3577](https://github.com/nanocoai/nanoclaw/issues/3577)
- **#3579**: Prevent `nc:copy` lists from drifting from channels/providers payloads — an integrity request. The fact that a user is explicitly asking for drift-guardrails corroborates that registry-backed skills are multiplying faster than their maintenance tooling. [Issue #3579](https://github.com/nanocoai/nanoclaw/issues/3579)

Expect a minor version bump once the provider-contract refactor merges, with attachment-contract fixes riding along.

## 7. User Feedback Summary
Reported pain centers on **attachment handling (missed content)**, **session liveness (dead sessions requiring `/clear` or manual intervention)**, and **approval-flow integrity**. The strongest recurring dissatisfaction is that failures are **silent** — no error, no warning, no fallback — whether it's invisible attachment drops (#2888), image-size session wedges (#3575), or queue starvation (#3568). Users' favorite direction is **predictability**: auto-wiring single agent groups (#3577), visible task failures (#3578), and deduplicated error notices (#3576). The "update-nanoclaw skill refresh overwrites local adapters" report (#3529) is used by contributors who write their own adapters and are unhappy that skill reflection can't tell local changes from skill-installed ones.

## 8. Backlog Watch
Several items need maintainer attention:

- **#2888 (attachment drop) — open since Jun 30, still unfixed**, despite root-cause clarity. A merged fix is overdue; #3572 being closed without a fix may be premature.
- **#1995 / #1994 (local LLM + custom endpoints) — open since April**, but both are large feature PRs presumably gated on the provider-contract refactor. They need an explicit decision: merge-then-refactor or refactor-then-merge.
- **#3529 (local adapters overwritten by skill refresh)** — a real trust-breaker for self-hosting contributor workflows. Needs a design decision: opt-out flag vs. provenance tracking.
- **#2878 (Codex reconnect with stale OpenAI secret) — open since June 28.** Reconnect failure is a recurring support burden; the fix appears ready but has not merged.
- **#2136 (Gemini provider) — open since April 29.** Longest-running provider feature; needs either a merge target or an explicit deferral notice to avoid expectation drift.

Overall, the project is **architecturally healthy but operationally stretched** — the provider refactor confidence is high, but the channel-layer and liveness bugs continue to accumulate user friction, and several long-validated fixes are waiting for maintainer bandwidth.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-28

---

## 1. Today's Overview

IronClaw is in a period of **intense, high-velocity development**, with 33 issues and 48 PRs updated in the last 24 hours, and 31 PRs merged or closed during that window. The project is clearly mid-execution on two major strategic tracks: **the Reborn runtime** (persistent sandboxing, memory/learning pipelines, context compaction) and **model capability/metadata preservation** (NEAR AI modalities, Gmail/MCP result normalization). The open issue list shows a well-organized roadmap with clear epics (#7864) and phased implementation plans, suggesting strong maintainer coordination. However, the high volume of `risk: medium` and `risk: high` items, particularly around the learning/memory pipeline (#7903, #7947–#7952), indicates the project is pushing significant architectural change through a large surface area. Performance remains a recurring concern, with a notable bug (#7891) showing 19.7-second inference turns caused by unprojected payloads. No new releases were published today, so users remain on the previous stable version while the main branch accumulates substantial changes.

---

## 2. Releases

**No new releases** were published in the last 24 hours (0 new releases). The project appears to be in a pre-release stabilization phase, with many PRs targeting `main` for the next cycle. Users should expect a significant version jump once the current Reborn/memory/learning work converges.

---

## 3. Project Progress

**31 PRs were merged or closed today**, indicating strong execution throughput. Key merged work:

| PR | Scope | What Advanced |
|----|-------|----------------|
| **#7944** ([link](https://github.com/nearai/ironclaw/pull/7944)) — `feat(gmail): surface semantic message output` | Gmail tooling | Normalizes `gmail.get_message` responses into semantic Markdown, decodes base64url body data, and truncates/validates HTML — directly addressing the performance bug in #7891. |
| **#7954** ([link](https://github.com/nearai/ironclaw/pull/7954)) — `feat(threads): add cumulative compaction context barrier` | Context compaction | Implements cumulative, persistent compaction barriers that fold into summarization across loop runs — a core component of the context-projection work (#7824). |
| **#7907** ([link](https://github.com/nearai/ironclaw/pull/7907)) — `fix(memory): reject stale full-document rewrites` | Memory safety | Adds `expected_content_hash` to memory writes, resolving the half-true CAS claim in #7776; prevents silent multi-writer overwrites. |
| **#7963** ([link](https://github.com/nearai/ironclaw/pull/7963)) — `feat(github): decode repository file content` | GitHub tooling | Decodes GitHub Contents API base64 payloads at the producer boundary before the model sees them — similar normalization pattern as the Gmail work. |
| **#7943** ([link](https://github.com/nearai/ironclaw/pull/7943)) — `ci: compile integration batches once` | CI efficiency | Consolidates PR and merge-group integration lanes into a single compilation unit, reducing CI time and resource usage. |

**Also notable (merged/closed):** #7906 (dependency bump group), #3278 (MissionService/TurnCoordinator integration — closed after long life), #5671 (LeakDetector perf fix), #7920 (learned-skill extraction settings), #4491 (Slack AI streaming decision), and #7893 (per-automation lessons file).

The **dominant architectural theme** across merged work is **producer-boundary normalization**: converting raw tool output (Gmail, GitHub, MCP) into safe, semantic, model-ready structures **before** it enters the durable observation path. This is a defensive pattern that prevents prompt pollution and hallucination risk.

---

## 4. Community Hot Topics

| Issue/PR | Comments | Discussion Theme |
|----------|----------|------------------|
| **#7891** ([link](https://github.com/nearai/ironclaw/issues/7891)) — *perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference* | 10 | **The most active issue of the day.** Two Gmail calls (274ms and 290ms tool latency) resulted in a 19.7-second turn, with 19.2s spent on model inference. Root cause: 49,152 bytes of raw MIME headers pushed into the prompt, forcing the model to reprocess irrelevant data. This is the clearest real-world performance signal in recent history and highlights the cost of **not projecting capability payloads** before they reach the model. |
| **#7824** ([link](https://github.com/nearai/ironclaw/issues/7824)) — *Context projection: Pi-style compaction barrier, structured summaries* | 4 | Measured cost comparison on PinchBench: with full history replay (run `949991b5`), IronClaw used **227.7M input tokens / $10.31** vs. baseline **55.1M / $2.52**. This 4.1× cost multiplier is the economic argument behind context projection and compaction. |
| **#3278** ([link](https://github.com/nearai/ironclaw/issues/3278)) — *MissionService integration with TurnCoordinator* | 3 | Closed after a 3-month life; is a parent-tracker for the Reborn migration, and its closure likely signals completion of that integration slice. |
| **#6590** ([link](https://github.com/nearai/ironclaw/issues/6590)) — *serve fails on Windows: workspace root overlaps default skill root* | 3 | Cross-platform regression — `ironclaw serve` is completely broken on Windows in local-dev profiles. Long-lived (since July 23), still open, and Windows users are blocked. |

**Underlying community needs:** The #7891 thread reflects a **performance-expectation gap** — users measure tool latency (sub-300ms) but experience multi-second model inference because of hidden prompt bloat. The #7824 data shows the **tokens-are-money** reality for API users, making context compaction a first-class economic feature, not just an efficiency nicety.

---

## 5. Bugs & Stability

| Severity | Issue | Status & Notes |
|----------|-------|----------------|
| **High** | **#7903** ([link](https://github.com/nearai/ironclaw/issues/7903)) — *Persistent per-user sandboxed executor behind trusted host kernel* | **Risk: high.** Architectural decision spike: moving the canonical agent loop out of the trusted host process into the sandbox would change the security boundary. Not a crash, but a security-relevant refactor. |
| **Medium** | **#7891** ([link](https://github.com/nearai/ironclaw/issues/7891)) — *Unprojected capability payloads → 14.3s of wasted inference* | Fix direction exists: #7944 (Gmail semantic output) directly addresses the root cause. |
| **Medium** | **#7960** ([link](https://github.com/nearai/ironclaw/issues/7960)) — *Gmail: enforce HTML complexity during DOM construction* | Related hardening for the same code path; `htmd` builds complete `RcDom` before validation, which is a DoS vector on crafted emails. |
| **Medium** | **#6590** ([link](https://github.com/nearai/ironclaw/issues/6590)) — *`serve` fails on Windows (workspace/skill root overlap)* | Open since July 23. No linked fix PR yet. Windows developers are fully blocked on local dev. |
| **Medium** | **#7938** ([link](https://github.com/nearai/ironclaw/issues/7938)) — *WebUI streams large thread-artifact downloads* | Downloads are assembled fully in server memory, serialized twice, and parsed as a complete JS object — bounded by fixed byte ceilings, likely causing silent failures on large threads. |
| **Low-Medium** | **#7856** ([link](https://github.com/nearai/ironclaw/issues/7856)) — *MCP tool discovery silently skips camelCase tool names* | Silent data loss: tools like `myTool` are invisible to the agent because they fail a direct-usability check. Users only notice via missing capability. |
| **Low-Medium** | **#7940** ([link](https://github.com/nearai/ironclaw/issues/7940)) — *MCP OAuth: missing resource indicator, prefers DCR over CIMD* | Interoperability gaps with current MCP spec (2026-07-28); affects federated MCP servers that require modern OAuth features. |
| **Low** | **#7955** ([link](https://github.com/nearai/ironclaw/issues/7955)) — *Telegram personal-account linking shows generic error* | Admin misconfiguration (missing `api_id`/`api_hash`) surfaces as an opaque "Something went wrong" — unclear diagnostic path. |
| **Low** | **#7956** ([link](https://github.com/nearai/ironclaw/issues/7956)) — *Unpaired Telegram `/start` gets command inventory, not pairing notice* | First-run UX defect: user should see connect/pairing instructions, not an irrelevant command list. |

**New bugs opened today (Aug 28):** #7971, #7970, #7969 (all model-capability UI/backend gaps, see Section 6), and several from Aug 27 that remain open.

---

## 6. Feature Requests & Roadmap Signals

**Strongest roadmap signal — The "Self-Learning Write Pipeline" and shared memory architecture:**
A cluster of issues (#7864 epic, plus #7947, #7948, #7949, #7950, #7951, #7952, #7953) lays out a **full memory/learning pipeline**: deterministic admission (explicit requests, corrections, confirmed facts), configurable auto-promotion or Inbox approval, stable commit/feedback/forget capabilities, provider adapters (native, mem0, Mnesis), bounded active recall, skill distillation routing, and observability gates. The corresponding PR **#7958** (`feat(learning): add shared review router`) is **open** and large (XL). **Prediction:** This is the dominant feature batch for the next version — the issue titles read like a PR checklist already.

**Second signal — Model capability transparency:**
Three new issues today (#7969, #7970, #7971) all from `italic-jinxin` ask for NEAR AI model modalities (text-only vs. image-input vs. image-output) to survive discovery and render in the WebUI across providers, workspaces, and selectors. This is a **user-facing quality-of-life feature** likely targeting the next minor release, and small in scope.

**Third signal — Context projection (from earlier this week):**
#7824 lays out the Pi-style compaction barrier with measured 4.1× token reduction. #7954 (merged) implements the first slice. Expect follow-ups on overflow recovery and structured summaries, driven by the cost data in that issue.

**Fourth signal — Automation lessons (#7893, closed):** Per-automation lessons file with fire-time injection was shipped; a logical next step is surfacing those lessons in the WebUI or exposing them via an API for operators.

---

## 7. User Feedback Summary

- **"Tool latency is not the problem — prompt bloat is."** (#7891) The Gmail case is the clearest user-visible gap: sub-300ms tool calls convert to ~20s turns because raw MIME and headers flood the context. Users experience **model slowdowns caused by tool-output ingestion** rather than by model or API issues.
- **"Tokens are money."** (#7824) Parallel measurements show 4.1× input-token inflation on PinchBench when full history is replayed (227.7M vs 55.1M). API-billed users will feel this directly — context projection is not an abstract optimization but a **cost-of-goods issue** for power users.
- **"Windows is still blocked."** (#6590) Open for 35 days with minimal progress. Windows developers cannot use `ironclaw serve` in local-dev modes at all. This is the longest-lived high-impact user-facing bug.
- **"Silent failures are the worst failures."** (#7856, #7964) MCP server owners discovered that camelCase tool names were skipped *silently*, and a large tool catalog published *zero* tools when exceeding a limit (no truncation, no warning). The MCP community values predictable degradation over implicit omission.
- **"Configuration errors need diagnostics."** (#7955) Telegram admins get "Something went wrong" without a hint that `api_id`/`api_hash` are missing — a pattern that suggests IronClaw should audit configuration completeness at startup and emit actionable validation errors.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| **#6590** ([link](https://github.com/nearai/ironclaw/issues/6590)) — *Windows `serve` failure* | **36 days** (since Jul 23) | Most-commented critical platform bug with no linked fix. Windows is a first-class supported platform; a 5-week outage is a platform-credibility risk. |
| **#3278** ([link](https://github.com/nearai/ironclaw/issues/3278)) — *MissionService/TurnCoordinator* | 3.5 months | Closed today — long-running parent tracker, finally resolved. Good outcome, but the 3-month lifecycle suggests integration trackers can stall. |
| **#5671** ([link](https://github.com/nearai/ironclaw/issues/5671)) — *LeakDetector per-key rebuild during redaction* | 53 days | Closed (perf fix landed). Watch for regressions in redaction throughput for large capability outputs. |
| **#4491** ([link](https://github.com/nearai/ironclaw/issues/4491)) — *Slack AI streaming* | 84 days | Closed today as a stopgap vs. full streaming. If users still complain about "thinking..." placeholders, a follow-up issue may be needed. |
| **Dependabot PRs** — #7835 (actions group, 5 updates), #7959 (everything-else group, 15 updates) | 5–6 days | Both open and touching `base64`, `uuid`, `toml`. The 0.23 `base64` major-bump may carry breaking changes; needs review given how central base64 is to MIME/Gmail handling. |
| **#7939** ([link](https://github.com/nearai/ironclaw/issues/7939)) — *Salvage work from superseded abbyshekit PRs* | 1 day | 10 stale PRs contain possibly valuable tests/requirements. This is a **tech-debt triage task** — low urgency but important to avoid losing institutional knowledge. |

**Overall assessment:** IronClaw is executing at high velocity on a well-structured roadmap, with measurable progress on context compaction, memory safety, and tool-output normalization. The main risks are (1) the Windows platform outage, (2) the security-relevant sandbox refactor (#7903) moving at risk:high, and (3) the broad surface area of the learning/memory pipeline introducing subtle regressions in the next release. Project health is **strong** — near-perfect PR hygiene (labels, size estimates, scopes), closed-loop issue tracking (bugs → fix PRs same-day), and data-driven performance work (tokens/$ measurements) all indicate mature engineering practices.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-28

## 1. Today's Overview

LobsterAI is in a healthy release-candidate cycle, with 12 PRs merged/closed in the last 24 hours and a fresh patch release (2026.8.26) shipped. Activity is focused on the renderer (UI) and main process, with notable work on model-list collapsing, account menu phone-masking fixes, and Windows installer hardening. A batch of stale issues from March was closed via automated cleanup, while a single new issue (#2562) raises a concerning credit-drain complaint. The project shows disciplined release management with multiple release-branch merge PRs landing today.

## 2. Releases

**LobsterAI 2026.8.26** (released 2026-08-26)

Changes:
- `fix(installer)`: support silent upload-first web builds (#2511)
- `fix(installer)`: hide banner for dictbind silent package (#2512)
- Additional unspecified fixes (release notes truncated)

No breaking changes or migration notes were announced. This appears to be a minor patch release focused on installer behavior for silent/automated deployment scenarios.

## 3. Project Progress

12 PRs were merged/closed today, all in the renderer, main, build, and docs areas:

**UI/UX Improvements:**
- **PR #2568** (`feat: collapse more models and sync sidebar banner schedules`, merged): Groups optional models into a default-collapsed "More Models" section and adds server-synchronized sidebar banner scheduling with client-version gating, local expiry, cache handling, and refresh recovery. Merged into release/2026.8.24.
- **PR #2565** (`fix(library): 优化列表查询切换与重新加载状态`, merged): Improves library list query switching — preserves content during query switches to avoid flicker/repeated skeleton screens, prevents stale query/cursor contamination, adds refresh progress indicators and accessible loading states, plus tests for query loading phases.

**Bug Fixes:**
- **PR #2570** (`fix(account): resolve phone masking merge conflict`, merged): Merges release account menu updates while preserving shared phone masking (136****7834) and replacing real phone test data with synthetic fixtures.
- **PR #2569** and **#2567** (`Liuzhq/fix phone nickname` / `Liuzhq/fix 2026.8.24`, merged): Additional account menu fix merges.
- **PR #2551** (`fix: app update preserve ready state`, merged): Fixes app update flow to preserve ready state.
- **PR #2566** (`fix: win installer truncated payload hardening`, merged): Windows installer hardening against truncated payloads.

**Stale PRs closed (from March):**
- PR #1163 (scheduled-task "run now" interaction feedback + optimistic updates + Gateway state sync)
- PR #1165 (75 Vitest unit tests for `openclawMemoryFile` and `openclawLocalTimeContextPrompt`)
- PR #1166 (prevent duplicate custom agent names)

## 4. Community Hot Topics

The most active discussion today was **Issue #1179** ("3.31版本强制沙箱怎么关？", 3 comments, closed as stale) — a user asking how to disable the forced sandbox introduced in v3.31, noting rollback to v3.30 worked. This reflects friction around security hardening being perceived as user-hostile.

**Issue #2562** (open, 0 comments, 0 reactions) — "drains 200 credits each I lost around 800 credits just releasing some f*ck you words" — a new complaint about excessive credit consumption. Despite zero engagement metrics, this is the only currently-open issue and deserves immediate attention given the financial impact reported.

The older batch of stale issues (all closed) centered on sandbox enforcement, uninstall behavior leaving processes running (#1173), and gateway restart loops when editing custom agents (#1180) — indicating March 2026's release had notable stability and trust concerns.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix status |
|----------|-------|-------------|------------|
| **High** | #2562 | Credit drain (~200 credits per event, 800+ lost) with profanity filter concerns | No fix PR; needs investigation |
| Medium | #1179 | Forced sandbox in v3.31 cannot be disabled via UI; rollback to 3.30 works | Closed as stale; no fix identified |
| Medium | #1180 | Editing custom agent icon triggers gateway restart loop; deleting agent resolves | Closed as stale; root cause unclear |
| Low | #1173 | Uninstalled app continues running and can still send messages (no "backdoor" found) | Closed as stale; likely uninstall UX issue |
| Low | #2551 | App update ready state not preserved | Fixed in PR #2551 (merged) |
| Low | #2566 | Windows installer truncated payload | Fixed in PR #2566 (merged) |

No new regressions reported today beyond #2562. The installer and update fixes suggest ongoing hardening of the Windows distribution path.

## 6. Feature Requests & Roadmap Signals

- **Multiple custom model providers** (#1174, closed as stale): User requested ability to maintain multiple custom model providers simultaneously (rather than replacing the existing one). The new "More Models" collapse feature in PR #2568 suggests the model management area is active — this request may resurface naturally.

- **Model list organization** (PR #2568): The collapse of optional models into a "More Models" section indicates a UX push to simplify the model picker; expect further refinements here.

- **Sandbox configurability** (#1179): Strong user pushback on forced sandboxing. If not already configurable, this may become a roadmap item for enterprise/advanced users.

- **Scheduled task interaction feedback** (PR #1163): The stale-but-merged PR for "run now" button feedback suggests the team values UX polish on automation features; watch for continued investment here.

## 7. User Feedback Summary

Mixed sentiment overall:

- **Frustration with enforced changes**: The forced sandbox (#1179) and uninstall behavior (#1173) generated user distrust, with one user explicitly asking if the app "left a backdoor" — a trust issue worth monitoring.
- **Stability concerns**: Gateway restart loops when editing custom agents (#1180) erode confidence in agent customization workflows.
- **Credit consumption anxiety**: Issue #2562 highlights a user losing real money (credits) with no clear explanation — a high-stakes UX failure in cost transparency.
- **Positive trajectory on polish**: Recent PRs (list query stability, model collapse, phone masking hygiene) show attention to detail and testing discipline.

## 8. Backlog Watch

- **Issue #2562** (open, created 2026-08-27): Credit-drain complaint. No maintainer comment yet. **Needs immediate triage** — financial impact claims escalate quickly in community perception.

- **All stale issues from March were closed today**, which is healthy housekeeping, but it also means several unresolved user concerns (sandbox disabling #1179, custom agent gateway loop #1180, uninstall behavior #1173) are now closed without public answers. Consider posting resolution summaries to preserve community trust.

- **No long-unanswered PRs** are currently visible; all 12 PRs were merged/closed, indicating a well-maintained PR queue.

---

**Project health assessment:** Good. Ship cadence is steady, PR review velocity is high (12 closed in 24h), and release discipline (release branches, merge PRs, installer hardening) is evident. Main risk is user trust around cost transparency (#2562) and the perception that security features (sandbox) are imposed without consent. The team's pattern of closing stale issues without detailed public explanations may compound this.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-28

## 1. Today's Overview

Moltis is in a steady consolidation phase following a burst of mid-August activity. While no new issues were filed or updated in the last 24 hours and no releases shipped, the project saw two important pull requests merged, both targeting critical integration and security gaps. Both PRs were authored by different contributors (tsauvajon and IlyaBizyaev), indicating healthy external collaboration. The focus of recent merged work — sandbox security hardening and OpenAI tool-schema compatibility — suggests the maintainers are prioritizing production readiness and ecosystem interoperability over new feature velocity. Overall, the project appears stable, with moderate activity and no outstanding open PRs or issues requiring immediate triage.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release timeline is unchanged from prior periods.

## 3. Project Progress

Two pull requests were merged/closed since the last digest, both representing meaningful quality improvements:

- **[#1222 — fix(web): validate sandbox image requests](https://github.com/moltis-org/moltis/pull/1222)** (merged, by tsauvajon) — This change adds validation for image references and package names before container or Dockerfile execution. It also restricts package checks and image builds to operator administrators, while preserving full administrative access for password, passkey, and trusted loopback identities. This is a security-hardening PR that reduces the attack surface of the web sandboxing layer.

- **[#1232 — fix(tools): make object schemas OpenAI-safe](https://github.com/moltis-org/moltis/pull/1232)** (merged, by IlyaBizyaev) — This addresses a compatibility issue where OpenAI's strict tool schemas (which require `additionalProperties: false`) caused Codex to send null or empty values for unspecified patch and map schemas. The fix explicitly declares webhook patch fields and represents MCP environment variables as fixed name/value entries. This is a critical interoperability fix for users leveraging Moltis tools with OpenAI-based agents.

## 4. Community Hot Topics

No issues or PRs are currently open with notable discussion activity. Both merged PRs had zero comments and zero reactions on the public thread, suggesting focused, low-controversy work. However, the underlying themes of these PRs point to two community-driven needs:

- **AI-agent interoperability** (PR #1232) — The need to align Moltis's tool schemas with OpenAI's strict requirements indicates growing adoption of Moltis as a backend for AI agents (notably Codex). Users are actively integrating Moltis tools into agentic workflows and hitting schema-contract friction.
- **Sandbox/security trust boundaries** (PR #1222) — The emphasis on restricting image builds to administrators and validating package names suggests community usage patterns that pushed the security envelope, prompting proactive hardening.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported in the last 24 hours. The two merged PRs can be considered **preventive fixes** rather than responses to live incidents:

- **Medium severity (preventive):** Unvalidated image/package references in sandboxed container execution (addressed by #1222). No CVE was reported, but the fix eliminates a potential path for malicious image or package injection.
- **Medium severity (functional):** OpenAI/Codex clients sending malformed payloads due to missing `additionalProperties: false` handling (addressed by #1232). This was a functional bug affecting tool-calling reliability for AI agent users, not a system crash or data-loss issue.

Both are now resolved via merged PRs; no follow-up fixes are pending.

## 6. Feature Requests & Roadmap Signals

No explicit new feature requests were filed in the last 24 hours. However, the two merged PRs provide directional signals:

- **AI-native tooling alignment** — The OpenAI-schema fix suggests that Moltis is (or should be) positioning itself as a first-class tool provider for LLM agents. Future versions may include deeper MCP (Model Context Protocol) integration, more strict-schema-compliant tool definitions, and possibly agent-specific configuration surfaces.
- **Operator-level security controls** — The sandbox restriction work hints at a roadmap toward **role-based access control (RBAC)** for infrastructure operations. Future releases may introduce more granular admin/operator distinctions beyond the current identity classes (password, passkey, trusted loopback).

Given the fast merge-to-close cycle (both PRs merged within days of creation), these improvements are likely candidates for the next minor or patch release.

## 7. User Feedback Summary

With no new issues filed, direct user feedback in the last 24 hours is minimal. Indirect signals from merged PRs suggest:

- **Pain point:** Users integrating Moltis with OpenAI/Codex experienced silent data corruption (null/empty values) in API calls, which likely caused confusing agent behavior. The fix (#1232) addresses a real, reproducible workflow break.
- **Satisfaction signal:** The rapid acceptance and merge of contributor PRs (both non-maintainer authored) indicates an open, responsive maintainer team. Contributors returned to fix issues without pushback, which is a positive health indicator.
- **Use case insight:** The combination of sandbox security work and AI-schema compatibility suggests Moltis is being used in **multi-tenant or untrusted-user environments where AI agents (Codex) drive container operations** — a powerful but security-sensitive deployment pattern.

## 8. Backlog Watch

There are currently **zero open issues and zero open pull requests** in the Moltis repository. The backlog is effectively empty, which is unusual for an active project and indicates either very disciplined triage or a small issue volume. Maintainers should monitor whether this is a natural lull or a sign that users are not reporting issues through GitHub (e.g., using Discord or other channels). No items require maintainer attention at this time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-28

## 1. Today's Overview

CoPaw (QwenPaw) is in a high-velocity development phase, with 46 issues and 48 PRs updated in the last 24 hours. The project is actively preparing for the v2.2.0 release, with a new beta (v2.2.0-beta.2) shipped today. Notably, 29 issues were closed and 20 PRs merged/closed, indicating strong maintainer responsiveness. The release notes PR for v2.2.0 is already open, signalling that the final release is imminent. The community discussion around the upcoming QwenPaw Hub (multi-tenant edition) is generating significant engagement, setting the strategic direction for the project's next major evolution.

## 2. Releases

**v2.2.0-beta.2** was released, containing two changes:

- **fix(workspace):** Make startup failure cleanup cancellation-safe ([PR #7194](https://github.com/agentscope-ai/QwenPaw/pull/7194))
- **test(e2e):** Boost console coverage with 23 targeted cases + extended assertions ([PR #7327](https://github.com/agentscope-ai/QwenPaw/pull/7327))

**Migration notes:** No breaking changes or migration steps were mentioned in the release notes. However, given the rapid release cadence (beta.2 following beta.1), users on older 2.1.x versions may want to review the full changelog when v2.2.0 final lands. A release notes PR ([#7348](https://github.com/agentscope-ai/QwenPaw/pull/7348)) is currently open, suggesting the final v2.2.0 changelog is being prepared.

## 3. Project Progress

Today saw significant merged/closed PRs addressing both new features and critical fixes:

- **TLS stack modernization:** [PR #7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) was merged, bumping bundled Python from 3.11 to 3.13 in both desktop and Docker distributions, moving from OpenSSL 3.0.x to 3.5.x. This directly fixes the carrier DPI handshake issue reported in [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298).
- **Console API fix:** [PR #7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) was closed/merged, fixing the silent message-dropping bug in `POST /api/console/chat` when an agent is busy, addressing issue [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344).

**Actively advancing PRs (still open) include:**

- **Per-session model overrides:** [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) — opt-in per-session model switching, addressing the fallback-model demand.
- **MCP tool call timeout:** [PR #6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) — adds configurable `tool_call_timeout` (default 300s).
- **MCP session RPC hardening:** [PR #7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) — aborts hung session RPCs on teardown and recovers stale `list_tools`.
- **Provider model discovery fix:** [PR #7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) — restores reliable model discovery for custom OpenAI-compatible providers.
- **Context bound for oversized tool results:** [PR #7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) — bounds oversized single-line tool results with artifact recovery.
- **Chat history pagination:** [PR #7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) — adds frontend support for paginated chat history to prevent transcript freezes.
- **Test suite optimization:** [PR #7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) — cuts suite wall clock by 41%, removing zero-value tests.

## 4. Community Hot Topics

The most active discussions this week reflect both strategic and tactical community interests:

1. **QwenPaw Hub (Multi-Tenant Edition)** — [Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (10 comments, open): The community discussion about what to build in the multi-tenant Hub is the most active thread. It signals strong demand for team/enterprise collaboration features. Underlying needs include: admin-managed skills, multi-user access control, and team deployment tooling. This aligns with the project's roadmap and is likely to shape v2.2.0+ feature priorities.

2. **OpenSSL 3.0.x TLS stack issue** — [Issue #7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) (8 comments, open): The carrier-induced TLS handshake failure on desktop/Docker deployments had significant community attention. This was resolved by the merged [PR #7328](https://github.com/agentscope-ai/QwenPaw/pull/7328), which will ship in the next release.

3. **Context optimization for tool returns** — [Issue #7316](https://github.com/agentscope-ai/QwenPaw/issues/7316) (4 comments, open): A design discussion about an LLM-driven tool that prunes/simplifies noisy tool outputs during the reasoning loop. This connects with the merged [PR #7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) that bounds oversized tool results — the community is clearly wrestling with context-window hygiene.

4. **Fallback model support** — [Issue #4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) (4 comments, closed) and [Issue #5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) (3 comments, closed): The demand for auto-switching/fallback models when the primary LLM fails or hits rate limits has been closed, with the per-session model override PR ([#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)) presumably addressing this.

## 5. Bugs & Stability

Ranked by severity:

1. **Silent message drops on busy agents** — [Issue #5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) (closed): `POST /api/console/chat` returned 200 but dropped messages when the agent was busy. **Fix:** [PR #7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) now rejects conflicting chat payloads instead of silently discarding them. Severity: High (data loss).

2. **OpenSSL TLS handshake failure on carrier networks** — [Issue #7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) (open): Desktop and Docker bundles shipped OpenSSL 3.0.x, causing carrier DPI to reset handshakes. **Fix:** [PR #7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) merged, upgrading to Python 3.13/OpenSSL 3.5.x. Severity: High (connectivity failure).

3. **Chinese filename PDF processing error** — [Issue #7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) (open, new today): Long Chinese filenames cause a "No connection adapters were found" error. Severity: Medium (functional failure).

4. **OpenAI Responses multi-turn failure on stateless upstreams** — [Issue #7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) (closed): Second turn fails with "Referenced reasoning item not found or has expired" on OpenCode Zen/Go Muse Spark. Severity: Medium.

5. **Concurrent cron task races** — [Issue #4217](https://github.com/agentscope-ai/QwenPaw/issues/4217) (closed): Two cron tasks with `share_session=true` triggered simultaneously produced empty replies. Severity: Medium.

6. **DingTalk stream hangs** — [PR #7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) (open): Adds bounded timeouts to stream SDK requests and improves health checks. Severity: Medium.

7. **GPT-5.x max_tokens error** — [Issue #2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) (closed): Hardcoded model list and max_tokens parameter issues. Severity: Low-Medium.

## 6. Feature Requests & Roadmap Signals

Strong signals for upcoming releases:

- **QwenPaw Hub multi-tenant** (v2.2.0): The community discussion ([#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)) and the release notes PR indicate this is landing in v2.2.0. Expect multi-user access, admin-managed skills, and team deployment features.

- **Per-session model overrides** ([PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)): In review, likely for v2.2.0 or v2.2.1. This addresses the long-standing fallback-model demand.

- **Native mobile experience** ([PR #7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) — DO NOT MERGE draft): A draft Expo/React Native client for Android/iOS. Early stage, but indicates mobile is on the roadmap.

- **Deferred startup architecture** ([PR #7384](https://github.com/agentscope-ai/QwenPaw/pull/7384)): Aims to make the app "Ready" as soon as the default agent can chat, with health checks before full Python import completes. Performance-focused.

- **Workspace-scoped skill preload** ([PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)): Opt-in preloading for frequently used skills, following Claude Code sub-agent patterns — under review.

- **Session grouping/folder support**: Multiple closed issues ([#3187](https://github.com/agentscope-ai/QwenPaw/issues/3187), [#6287](https://github.com/agentscope-ai/QwenPaw/issues/6287), [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507)) requested conversation grouping, filtering of sub-agent sessions, and archiving. These closed together suggest a consolidated implementation may be planned.

- **Context optimization tool** ([#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316)): Community-proposed design for pruning tool outputs during reasoning loops — likely to be evaluated for a future release.

## 7. User Feedback Summary

**Pain points:**

- **Conversation list sorting:** Multiple users ([#4817](https://github.com/agentscope-ai/QwenPaw/issues/4817), [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770)) report the session list should sort by last activity time, not creation time. One user called it "anti-human design" compared to competitors like Workbuddy, Trae, or OpenClaw.

- **Desktop file access friction:** [Issue #6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) — users must manually navigate to `~\.qwenpaw\workspaces\` to access agent outputs. Requested: one-click access/direct download from the desktop window.

- **Lack of real-time interaction feedback:** Multiple issues ([#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865), [#4986](https://github.com/agentscope-ai/QwenPaw/issues/4986), [#2829](https://github.com/agentscope-ai/QwenPaw/issues/2829)) report that tool calls like `write_file` or shell commands show no streaming output, making the UI appear frozen during long generations.

- **Mobile browser input limitation:** [Issue #7355](https://github.com/agentscope-ai/QwenPaw/issues/7355) — Android Chrome users can't insert newlines in the chat input because Enter triggers submit.

- **Deployment upgrade black box:** [Issue #7366](https://github.com/agentscope-ai/QwenPaw/issues/7366) — the web deployment platform lacks visible version numbers; users report clicking "upgrade" but staying on the same version.

- **Sub-agent session clutter:** [Issue #6507](https://github.com/agentscope-ai/QwenPaw/issues/6507) — spawned sub-agent sessions pollute the chat history list.

**Satisfaction signals:**

- The high issue-closure rate (29 closed in 24h) and rapid beta iterations indicate active, responsive maintenance.
- Community members are actively proposing design improvements (context optimization, skill preloading), suggesting a technically sophisticated and engaged user base.

## 8. Backlog Watch

Items that may need maintainer attention:

- **[PR #6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) — MCP tool call timeout** (open since 2026-08-10, 18 days): This is a straightforward, configurable fix for MCP timeouts addressing issue [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724). It remains unreviewed despite being functionally complete.

- **[Issue #7241](https://github.com/agentscope-ai/QwenPaw/issues/7241) — Codex agent locked to GPT-5.5** (open, tagged "Cannot Reproduce"): Users report the Codex agent can only use GPT-5.5, not 5.6, possibly due to a Business license not being loaded into the workspace. Unclear if it needs more debugging or a documented workaround.

- **[Issue #7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) — API-first custom integrations** (created 2026-08-25): If this issue (not in the top-30 list) has been open for several days without engagement, it may need a maintainer to confirm whether to prioritize API surface expansion for third-party integrations.

- **[PR #7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) — user-local bin dirs in subprocess PATH** (open since 2026-08-15, 13 days, marked "ready-for-human-review"): Addresses a real deployment pain for systemd/Docker users where installed CLIs (gh, cmake, lark) aren't found. Waiting on maintainer review.

---

**Project health summary:** CoPaw is healthy and accelerating toward v2.2.0. The maintainer team is responsive, closing issues at a high rate. The strategic pivot toward multi-tenant Hub and the draft mobile client signal a clear expansion beyond single-user desktop assistant. The primary risk areas are UI/UX polish (streaming feedback, conversation sorting, file access) and deployment reliability (TLS stack, version visibility on the web platform) — all of which have active or recently merged fixes.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-28

## 1. Today's Overview

ZeroClaw remains in an intense stabilization and architecture refinement phase, with **22 issues** and **50 PRs** actively updated in the last 24 hours. The project is executing its **v0.8.5 finite weekly stabilization line** (through August 30), with RFC activity dominating the issue tracker — particularly around **runtime-owned sessions (#9487)**, **unified attachment architecture (#9488)**, and a suite of design proposals under maintainer review. The PR queue shows significant contributor depth: **NiuBlibing, Audacity88, minato32, and kckylechen1** are all driving large, cross-cutting changes (multi-model provider profiles, context compaction ratios, session-backend contracts), though several PRs remain blocked on author action (`needs-author-action`). No new releases were published today; the project is clearly in a "batten down the hatches" mode ahead of the v0.8.5 milestone, with a hard intake freeze already in effect.

---

## 2. Releases

**No new releases published in the last 24 hours.**

The most recent milestone tracker ([#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)) indicates v0.8.5 weekly cuts are shipping ready work through August 30, 2026, with intake frozen as of August 4. The next release window is imminent.

---

## 3. Project Progress

Only **2 PRs** were merged/closed today; the bulk of the queue remains open as maintainers review a heavy RFC backlog. Notable structural and feature work advancing:

- **Session ownership contract** — [PR #10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) (open, `needs-maintainer-review`): Extracts the atomic session-ownership claim into a shared `SessionBackend` trait, with a compare-and-set `claim_session_agent_alias` method returning `Claimed` / `Conflict` / `NeedsMigration`. This directly addresses the concurrency bugs in #10408 and #10324.

- **Context compaction anchored to model window** — [PR #9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) (open): Adds `runtime_profiles.<name>.context_compact_ratio` so trim budgets derive from the *selected* model's window instead of a fixed 32K token number — a durability fix for multi-model deployments.

- **Multi-model provider profiles** — [PR #9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) (open, large/XL): Adds a `[providers.models.<family>.<alias>.models.<model_alias>]` subtable, letting one credential set host multiple model IDs with per-model tuning — eliminating duplicate provider blocks.

- **A2A outbound client (Phase 1)** — [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) (open, large/XL): Implements the A2A v1.0 wire model, four working `a2a_*` tools, and a default-closed `[a2a.client]` config block per the RFC (#9106).

- **Entry-count log rotation** — [PR #10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214): Adds `log_persistence_max_entries_per_segment` and multi-segment log queries to prevent unbounded segment growth.

- **Rust 1.98.0 CI bump** — [PR #9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) updates routine builders while keeping the source floor at 1.96.0, aligning with the published StageX toolchain.

- **Windows test measurement** — [PR #10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350): Adds advisory-only Windows test jobs to collect selection/duration/cache evidence before any decision to make Windows CI required.

---

## 4. Community Hot Topics

The most heavily discussed items reveal a community deeply engaged in architecture and durability debates:

- **[#9487 — RFC: Runtime-owned conversation sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — *27 comments, open since July 28, updated today.* Revision 3 ratifies ownership boundaries across #9487/#9488/#9600 and adds durable admission semantics. The community is converging on a typed ingress envelope for all migrated entry points. Risk: high, needs maintainer review.

- **[#9488 — RFC: Unified attachment architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — *21 comments, updated today.* Revision 9. Defines how web chat and channel attachments should flow through the system uniformly. Underlying need: heterogeneous channel attachment behavior (Telegram vs web vs WhatsApp) is a recurring source of bugs and scope creep.

- **[#8396 — RFC: Wire protocol first-class in provider onboarding](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)** — *15 comments, open since June 27, updated today.* Long-running proposal to make wire protocol an explicit provider-construction concern. The sustained activity suggests this is foundational for the multi-model provider work in #9809.

- **[#8692 — Maintainer decision queue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — *14 comments.* The community's self-organized queue for RFCs and design issues awaiting maintainer sign-off. A signal that the RFC process is working but backing up.

- **[#9600 — Session-persistence contract ownership tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)** — *14 comments.* Orchestrates the four independent workstreams touching conversation persistence to prevent contract drift.

---

## 5. Bugs & Stability

**No new crash/regression bugs were filed today**, but several S2 (degraded behavior) bugs are actively being diagnosed:

- **[#10324 — Cron check-then-act race across agent rename](https://github.com/zeroclaw-labs/zeroclaw/issues/10324)** — *S2, P1, accepted.* Filers deliberately kept this S2 vs S0 because the race window requires an operator rename mid-window; agents cannot rename jobs. High risk, security-adjacent.

- **[#10408 — Parallel agent run on second message during active turn](https://github.com/zeroclaw-labs/zeroclaw/issues/10408)** — *S2, open, 1 comment.* A user message sent mid-turn starts a duplicate agent run → duplicate work and duplicate replies. Root cause is missing session-lock admission, directly addressed by the `SessionBackend::claim_session_agent_alias` CAS in [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412).

- **[#10186 — Terminal fallback text bypasses live delivery](https://github.com/zeroclaw-labs/zeroclaw/issues/10186)** — *S2, follow-up.* `run_tool_call_loop` exhaustion and malformed-internal-protocol paths return display-safe strings that skip the live delivery contract (e.g., session persistence, SSE).

- **[#10286 — Restored ZeroCode transcripts omit trimmed turns](https://github.com/zeroclaw-labs/zeroclaw/issues/10286)** — *S2, in-progress.* After `max_history_messages` trimming, restored transcripts lose the trimmed turns entirely. Follow-up: [#10421](https://github.com/zeroclaw-labs/zeroclaw/issues/10421) proposes bounded pagination of persisted transcripts.

- **[#10237 — Telegram reply-threads fragment memory](https://github.com/zeroclaw-labs/zeroclaw/issues/10237)** — *Medium.* Per-thread history buckets cause lost multi-turn context across reply threads.

- **[#10329 — Resilient wrapper shadowing loop-level recovery](https://github.com/zeroclaw-labs/zeroclaw/issues/10329)** — *S2, **closed**.* Wrapper truncation hides context-overflow errors from the loop-level recovery path for OpenAI-compatible providers. Fix confirmed.

- **[#8720 — Bedrock Nova 2 Lite cachePoint disable request](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)** — *Closed.* Config-file path to disable caching on Bedrock Nova 2 Lite resolved.

- **[#10326 — Reliable streaming errors report wrong model](https://github.com/zeroclaw-labs/zeroclaw/issues/10326)** — *S3, accepted.* Error events name the requested model, not the served pinned model — observability noise for multi-model deployments.

---

## 6. Feature Requests & Roadmap Signals

- **[#10419 — SSE streaming from POST /webhook](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)** — Users of hosted Path A workers want cumulative assistant tokens streamed via SSE when `stream: true`, instead of awaiting one JSON `{ response }`. Filed today, 1 comment — likely a high-velocity add given the webhook path is the primary hosted interface.

- **[#10422 — Run SOP as heartbeat](https://github.com/zeroclaw-labs/zeroclaw/issues/10422)** — Filed today. User wants `heartbeat.sop = "<name>"` config to bypass the `HEARTBEAT.md → sop_execute` indirection. Low-risk, deterministic improvement for cron/heartbeat users.

- **[#10244 — Agent deletion & bulk cleanup in ZeroCode](https://github.com/zeroclaw-labs/zeroclaw/issues/10244)** — In-progress, P2. Fills a functionality gap in the ZeroCode dashboard (list/detail/rename exist, delete does not) using the guarded lifecycle path.

- **[#10076 — Composable WASM plugin runtime](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)** — Open RFC, 4 comments. Extends the WASM Component Model host beyond tools/channels/memory/skills to arbitrary Rust `HookHandler`-style extension classes. This is a **strong v0.9+ candidate** given the architecture-first momentum.

- **[#10405 — Session-scoped prompt attachments](https://github.com/zeroclaw-labs/zeroclaw/issues/10405)** — Accepted-tracker; implementation of #9998 across durable sessions, ACP, tooling, and lifecycle. Confirmed roadmap item.

- **[#10421 — Paginate persisted ACP transcript restoration](https://github.com/zeroclaw-labs/zeroclaw/issues/10421)** — Filed today as a follow-up to PR #10380; keeps ZeroCode rendering bounded while preserving full navigation. Likely lands with the in-progress transcript work.

---

## 7. User Feedback Summary

Signal from users is overwhelmingly around **durability, determinism, and multi-model correctness**:

- **Session races are a live pain point:** [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) (second message → parallel run) and the S2 rename-race in [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) show users are hitting concurrency edges in real deployments, not just synthetic tests.

- **Transcript fidelity matters:** [#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286) and the companion fix [#10421](https://github.com/zeroclaw-labs/zeroclaw/issues/10421) reflect frustration that persisted transcripts diverged from what the model actually saw after trimming. The `HistoryTrimmed` notice was not sufficient.

- **Provider pinning confusion:** [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) shows that with multiple models per provider profile, error messages must report the *served* model — not the requested one — or debugging multi-model setups becomes guesswork.

- **Channel-specific memory fragmentation:** [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) — Telegram reply-threads breaking context continuity is a functional degradation users notice immediately.

- **Positive signal:** The volume of high-quality, architecture-level PRs from a *distributed* contributor base (NiuBlibing, Audacity88, minato32, kckylechen1, REL-mame) indicates sustained community investment and a healthy review culture — despite the `needs-author-action` backlog on 10+ PRs.

---

## 8. Backlog Watch

Items that have been open a long time or are at risk of stalling:

- **[#8396 — RFC: Wire protocol first-class in provider construction](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)** — Open since **June 27** (63 days), 15 comments, `needs-maintainer-review`, risk: high. The maintainer decision here gates the multi-model provider work in #9809.

- **[#10076 — RFC: Composable WASM plugin runtime architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)** — Open 10 days, 4 comments, `needs-maintainer-review`, risk: high. Undersubscribed relative to its architectural weight; needs maintainer eyes.

- **[#8561 — Telegram multi_message streaming mode](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)** — Open since **June 30** (59 days), labeled `needs-author-action`, risk: medium, size: XL. One of the oldest large PRs; blocked on author response, and is a prerequisite for Telegram feature parity with Discord/Matrix.

- **[#9527 — Rust 1.98.0 CI bump](https://github.com/zeroclaw-labs/zeroclaw/pull/9527)** — Open 30 days, `needs-maintainer-review`, risk: manual. Routine toolchain bumps that sit unreviewed create CI drift and block dependent PRs.

- **[#9819 — Pixel-level image validation](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)** — Open 21 days, by NiuBlibing, `needs-author-action`, risk: high. Addresses corrupt-image provider failures across all multimodal providers; blocked on author turnaround.

- **[#8692 — Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — The queue itself shows **12 issue/PR references** needing decisions; author attention is the bottleneck on 10+ PRs, while maintainer review is the bottleneck on 5+ RFC-grade issues. With v0.8.5 cut on August 30, the next decision batch will largely determine what lands in the weekly window vs. slips to v0.9.0.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*