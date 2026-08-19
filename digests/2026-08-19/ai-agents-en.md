# OpenClaw Ecosystem Digest 2026-08-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-19 01:19 UTC

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

# OpenClaw Project Digest
**2026-08-19**

---

## 1. Today's Overview

OpenClaw is in a period of intense stabilization and refactoring, with activity dominated by large-scale bug fixing and architecture hardening. The project maintains a very high issue and PR volume (500+ touched in both categories in 24 hours), but the presence of long-lived, heavily-commented "diamond lobster" rated issues suggests that chronic, deep-seated stability problems are consuming maintainer attention. The "Clawsweeper" automation is actively working issues, but many critical bugs remain stuck in a feedback loop between needing product decisions and awaiting maintainer review, pointing to a potential bottleneck in human triage. There are no new releases today, indicating the team is likely in a hardening phase between versions rather than pushing new features.

## 2. Releases

No new releases were published in the last 24 hours. The project is likely in a stabilization sprint between version 2026.7.1 and a future release.

## 3. Project Progress

*Since there are no merged PRs explicitly marked for today, this section reflects the 98 PRs that were merged/closed in the last 24 hours based on the activity data.*

Despite no new releases, the volume of PR activity (98 merged/closed) signals continuous integration effort. Key areas of progress visible in the open PR queue include:

- **Auth and Security Hardening:** PR [#126096](https://github.com/openclaw/openclaw/pull/126096) (closed) fixes atomicity in guided auth, ensuring credentials aren't persisted if agent creation fails. PR [#120900](https://github.com/openclaw/openclaw/pull/120900) (closed) adds a UI for reviewing install-policy warnings, enhancing the plugin security model.
- **Process Resiliency:** A series of PRs by `jesse-merhi` ([#123979](https://github.com/openclaw/openclaw/pull/123979), [#123976](https://github.com/openclaw/openclaw/pull/123976), [#123975](https://github.com/openclaw/openclaw/pull/123975)) target deep infrastructure issues: build heap limits, frozen worker processes, and hanging typechecks.
- **UI/UX Refinements:** PRs like [#125740](https://github.com/openclaw/openclaw/pull/125740) (Skill Workshop descriptions) and [#126032](https://github.com/openclaw/openclaw/pull/126032) (New Session folder picker usability) are iterating on the dashboard experience.
- **Gateway Stability:** PR [#126087](https://github.com/openclaw/openclaw/pull/126087) improves user experience during restart-recovery, and PR [#126073](https://github.com/openclaw/openclaw/pull/126073) reduces SQLite contention from idle channel monitors.

## 4. Community Hot Topics

The most active discussions highlight deep frustration with session management, data loss, and voice/realtime features.

- **[#116201 - Realtime Voice State Retention (60 comments, 🦞 Diamond Lobster)](https://github.com/openclaw/openclaw/issues/116201):** This is the most discussed issue. Users are reporting that realtime voice sessions can retain unbounded provider and consult state, leading to memory bloat and performance degradation. The issue is flagged as P1 and "needs-product-decision," suggesting a fundamental design flaw that requires a product-level solution rather than a simple patch.
- **[#77598 - Live Dev Agent Tracking (23 comments)](https://github.com/openclaw/openclaw/issues/77598):** A running observational log of a dev agent, this issue serves as a community-driven watchdog on agent behavior, revealing real-world performance and decision-making patterns.
- **[#112423 - SQLite Transcript Cleanup Blocks Gateway (16 comments, 🦞 Diamond Lobster)](https://github.com/openclaw/openclaw/issues/112423):** A specific and severe performance bug where cleanup of large transcript files freezes the entire gateway, stalling all channels. This is a top-priority stability issue.
- **[#101290 - CLI Startup Corrupts Live DB (15 comments, P0, Closed)](https://github.com/openclaw/openclaw/issues/101290):** While closed as "not reproducible on main," this issue about health-check commands corrupting the state DB on macOS attracted significant attention and was labeled P0, highlighting the severity of potential data loss.
- **[#38327 - "Cannot convert undefined or null" in 2026.3.2 (14 comments, 3 👍)](https://github.com/openclaw/openclaw/issues/38327):** A long-running regression issue with a specific provider setup, indicating ongoing compatibility struggles with third-party services.

## 5. Bugs & Stability

Stability remains the project's biggest challenge, with several P0/P1 issues open.

High Severity:

- **[P0] [#112395 - Startup Migration Preflight Blocks Gateway After Upgrade](https://github.com/openclaw/openclaw/issues/112395):** A hard blocker for users upgrading from 6.11 to 7.1, where the gateway refuses to start due to empty migration tables. This is critical and requires immediate attention.
- **[P0] [#101290 - CLI Startup Can Corrupt Live State DB (Closed/unrepro)](https://github.com/openclaw/openclaw/issues/101290):** Though closed, the potential for data corruption remains a significant concern.

Critical Stability (P1, 🦞 Diamond Lobster):

- **Session State and Data Loss:** Issues like [#115908](https://github.com/openclaw/openclaw/issues/115908) (transcript projection livelock), [#115546](https://github.com/openclaw/openclaw/issues/115546) (CLI-budget compaction failures), and [#94939](https://github.com/openclaw/openclaw/issues/94939) (6.x migration leaves conversation store empty) all point to fragile session-state handling that can lead to data loss or complete gateway stalls.
- **Crash Loops:** [#83959](https://github.com/openclaw/openclaw/issues/83959) (Codex app-server startup) and [#91144](https://github.com/openclaw/openclaw/issues/91144) (Windows Scheduled Task) show recurring crash-loop scenarios in different deployment contexts.
- **Message Loss:** Issues like [#88657](https://github.com/openclaw/openclaw/issues/88657) (DeepSeek incomplete turns) and [#92186](https://github.com/openclaw/openclaw/issues/92186) (Foreground reply fence cancels delivery) are causing unreliable message delivery, a core functionality problem.

Many of these critical issues have linked PRs in progress (e.g., `clawsweeper:linked-pr-open`), but they remain open, indicating the fixes are complex and not yet ready for merge.

## 6. Feature Requests & Roadmap Signals

There's a strong push for more granular control and observability.

- **Agent Self-Management:** The request for an agent-triggered context compaction tool ([#6757](https://github.com/openclaw/openclaw/issues/6757)) is a significant roadmap signal, suggesting a move toward more autonomous agent behavior.
- **Storage & Data Architecture:** Requests for companion-friendly SQLite seams ([#79902](https://github.com/openclaw/openclaw/issues/79902)) and indexing memory by source directory rather than agent ([#95724](https://github.com/openclaw/openclaw/issues/95724)) show a desire for a more robust and transparent data layer.
- **Voice & UI/UX:** Self-hosted STT/TTS support ([#45508](https://github.com/openclaw/openclaw/issues/45508)) and a major UI quality update ([#75947](https://github.com/openclaw/openclaw/issues/75947)) are popular pending requests.

**Prediction:** The P1/P0 stability issues will likely take precedence over new features. The next version will probably focus on hardening the SQLite-backed state management and fixing the core session-state bugs. Features like agent-triggered compaction might be pushed further out as the team works to stabilize the foundation.

## 7. User Feedback Summary

- **Pain Point – Session State Fragility:** A dominant theme across the most-active issues is that session state is a source of significant pain. Users experience everything from silent message loss to complete gateway freezes, undermining trust in the system's reliability.
- **Pain Point – Upgrade and Migration Woes:** Several critical issues stem from version upgrades (e.g., [#112395](https://github.com/openclaw/openclaw/issues/112395), [#94939](https://github.com/openclaw/openclaw/issues/94939), [#90378](https://github.com/openclaw/openclaw/issues/90378)). Users are consistently encountering broken migrations that either block startup or silently lose data, creating high dissatisfaction.
- **Pain Point – Notification and UX Fatigue:** Issues like "alert fatigue" from cron failures ([#90595](https://github.com/openclaw/openclaw/issues/90595)) and "fallback spam" in Telegram groups ([#116348](https://github.com/openclaw/openclaw/issues/116348)) indicate that the system's communication with users is often noisy and unhelpful.
- **Sentiment:** The heavy use of "🦞 Diamond Lobster" ratings on issues (5 of the top 10) signifies criticality and frustration. While users are actively engaged, the focus is overwhelmingly on fixing frustrating bugs rather than celebrating new functionality.

## 8. Backlog Watch

Several important issues and PRs appear to be stuck in a waiting state, requiring maintainer or product-decision input.

- **Long-Standing P1s Awaiting Decisions:** Many high-priority issues are labeled `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` (e.g., [#116201](https://github.com/openclaw/openclaw/issues/116201), [#115908](https://github.com/openclaw/openclaw/issues/115908), [#113306](https://github.com/openclaw/openclaw/issues/113306)). These are complex issues where a fix has not been straightforwardly identified, but a decision is needed to unblock progress.
- **Unresolved Regression Issues:** [#38327](https://github.com/openclaw/openclaw/issues/38327) (March 2026) and [#112248](https://github.com/openclaw/openclaw/issues/112248) (July 2026) have been open for months, suggesting that certain provider-specific or plugin-related regressions are difficult to diagnose and fix without a live repro.
- **Stalled PRs Needing Proof:** Several PRs are marked with `status: 📣 needs proof` (e.g., [#111237](https://github.com/openclaw/openclaw/pull/111237) for Venice context limits, [#111020](https://github.com/openclaw/openclaw/pull/111020) for Codex final messages). These fixes are ready for review but haven't yet provided sufficient evidence they solve the problem, leaving them in limbo.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent & Personal Assistant Open-Source Ecosystem
**Date:** 2026-08-19 · **Data window:** Last 24 hours

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is in a **stabilization-heavy phase**, with the most active projects (OpenClaw, Hermes Agent, CoPaw, ZeroClaw) prioritizing bug fixes and architectural hardening over new feature velocity. Session-state integrity, data-loss prevention, and cross-platform reliability are the dominant engineering concerns across the board. A clear two-tier market is emerging: **general-purpose agent platforms** (OpenClaw, Hermes, CoPaw, ZeroClaw) competing on breadth of integrations and reliability, alongside **specialized or lightweight entrants** (NanoBot, PicoClaw, Moltis) targeting specific niches or simplicity. Windows-specific breakages and silent failure modes are the most recurring user pain points, while database modernization and driver abstraction layers signal a maturing architectural phase.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Releases (24h) | Health Score* | Velocity Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 500+ | 500+ | None | ⚠️ **3/10** — P0/P1 stability cluster; diamond-lobster issues; migration blockers | High but churning |
| **Hermes Agent** | 50 | 50 | **v0.20.4** (patch) | 🟡 **6/10** — Healthy cadence; Windows gaps; session-state sweepers | Steady, well-managed |
| **CoPaw (QwenPaw)** | 45 | 50 | None | 🟡 **6/10** — Strong contributor pipeline; silent data-loss risks; security questions | High-velocity hardening |
| **ZeroClaw** | 50 | 50 | None | 🟡 **5/10** — Review bottleneck (2 merges); Windows test failures; CVE backlog | High author output, gated review |
| **NanoBot** | 10 | 27 | None | 🟢 **7/10** — Active merges; conflict-label friction; security PR pending | Rapid iteration |
| **IronClaw** | 21 | 40 | **v1.3.0-rc.2** | 🟢 **7/10** — Mature QA pipeline; RC hotfixes; architectural work | RC cycle + roadmap build |
| **PicoClaw** | 6 | 4 | None | 🟡 **5/10** — WebUI push; stale PRs; provider-compat issues | Moderate, feature-focused |
| **Moltis** | 0 | 6 | **2 releases** | 🟢 **8/10** — All known bugs fixed; clean backlog | Small but healthy |
| **LobsterAI** | 0 (9 stale) | 16 merged/closed | **2026.8.18** | 🟠 **4/10** — 4-month-old P0/P1 crashes unresolved; release cadence outpaces fixes | High feature ship, low issue closure |
| **NanoClaw** | 3 | 39 | None | 🟢 **7/10** — Disciplined DB refactor; low bug backlog; breaking change pending | Architectural rollout |
| **NullClaw** | — | — | — | N/A (inactive) | — |
| **TinyClaw** | — | — | — | N/A (inactive) | — |
| **ZeptoClaw** | — | — | — | N/A (inactive) | — |

*\*Health score is a composite of: issue closure rate, severity of open bugs, backlog age, release stability, and maintainer responsiveness (1–10).*

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale of community:** The 500+ issues/PRs touched daily dwarfs every other project (next closest: ~50). This is the reference implementation with the largest contributor base and most extensive channel/integration ecosystem.
- **Breadth:** Deepest integration surface (channels, providers, plugins, skills) and the most mature automation (Clawsweeper bot) for issue triage.
- **Install-policy security model and guided auth** are ahead of peers (NanoBot's `restrict_to_workspace` and CoPaw's shell-evasion defaults are catching up).

**Technical approach differences:**
- OpenClaw uses a **SQLite-backed state store with aggressive compaction**; peers are splitting between SQLite-deferred (ZeroClaw, LobsterAI) and async-portable DB ambitions (NanoClaw's Postgres seam, IronClaw's Reborn refactor).
- **Dispatch-rule routing** (PicoClaw, OpenClaw) vs. **session-per-agent** models elsewhere — OpenClaw's approach risks state fragmentation (see #3301 in PicoClaw for a similar bug pattern).
- **Monorepo / core-heavy** vs. NanoBot's lightweight adapter-focused design and Moltis's micro-app approach.

**Community size comparison:**
- OpenClaw: **~10x the daily activity** of Hermes Agent (next largest general-purpose player) and ~5x CoPaw/ZeroClaw. Its issue volume (500+/day) indicates either extreme adoption or acute instability — likely both.

**Key risk:** The **P0/P1 stability cluster** (migration blockers, session-state data loss, SQLite freezes) is the #1 user complaint. If unresolved, it opens a window for Hermes Agent (with its stable v0.20.4 and clean release cadence) or IronClaw (enterprise-focused) to pull frustrated users.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects (Examples) | Specific Needs |
|---|---|---|
| **Session-state integrity** | OpenClaw (#115908, #115546), Hermes (#89346), CoPaw (#7011), PicoClaw (#3301), NanoClaw (#3338) | Silent message loss, session identity crossing, hang-on-idle, unbounded state retention |
| **Upgrade/migration safety** | OpenClaw (#112395, #94939), LobsterAI (#1626), IronClaw (rc.2 crash-fix), NanoClaw (#3334, breaking DB) | Broken migrations, crash-on-upgrade, silent data loss, config incompatibilities |
| **MCP & provider reliability** | CoPaw (#6470, #5900, #7053), NanoBot (#2493), OpenClaw (#38327), IronClaw (#7726) | Transport config ignored, no auto-reconnect, OAuth token rotation, provider regressions |
| **Windows support** | Hermes (#89599, #89586), CoPaw (#6775, #7074), ZeroClaw (#7462), NanoBot (#5417) | Updater self-lock, profile-switch hangs, test failures, malware false positives |
| **Resource/cost management** | NanoBot (#4797, #5409), OpenClaw (#116201), IronClaw (#7673), CoPaw (#7110) | Shell subprocess limits, budget controls, unbounded memory, spend firewalls |
| **Observability & debugging** | IronClaw (#7735), Hermes (#66616), OpenClaw (#77598), CoPaw (#7072) | Evidence-backed run artifacts, skills index health, live agent tracking, background task APIs |
| **Database modernization** | NanoClaw (async/portable DB), IronClaw (Reborn), OpenClaw (SQLite contention), ZeroClaw (memory growth) | Move beyond SQLite, async seams, portable SQL, prevent single-write-connection starvation |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---|---|---|---|
| **OpenClaw** | Broad general-purpose agent platform | Power users, self-hosters, community at scale | Monolithic core, SQLite state, channel-agnostic gateway |
| **Hermes Agent** | Consumer-grade desktop + gateway | Desktop-first users, non-technical | Multi-profile multiplexing, desktop wrapper, Nix packaging |
| **CoPaw (QwenPaw)** | Chinese-market + multi-channel agent | Prosumers, enterprise (China/APAC), Feishu/Matrix users | Multi-agent console, sandboxed shell, MCP-heavy |
| **ZeroClaw** | Developer/workflow agent with SOPs | Developers, devops, automation | Runtime engines, SOPs, goal-mode RFC, Docker sandbox |
| **IronClaw** | Enterprise agent with QA discipline | Enterprises, regulated industries | Reborn durable state, extensions vNext, evidence-based automation |
| **NanoBot** | Lightweight, secure agent | Hobbyists, security-conscious | `restrict_to_workspace` security posture, WebUI focus, cross-session messaging |
| **PicoClaw** | TUI-first, single-node agent | IRC/terminal users, lightweight deployments | TUI + gateway, dispatch rules, WebUI in progress |
| **Moltis** | Application-embedded agent | Developers embedding agents in products | Files library, Podman support, API routing, micro-apps |
| **LobsterAI** | Multi-engine desktop client | Users wanting engine choice (OpenClaw, dsh, hermes) | Engine-agnostic shell, OpenClaw gateway dependency, scheduled tasks |
| **NanoClaw** | Hosted/multi-tenant agent | Teams, infrastructure operators | Async portable DB, driver seam (Docker), fail-closed sign-ins |

**Key differentiators to watch:**
- **OpenClaw** — scale of integrations + community, but stability risk.
- **Hermes** — desktop polish + Nix distribution, weakest on Windows.
- **IronClaw** — enterprise QA + roadmap discipline; strongest evidence-based automation.
- **NanoBot** — security-first defaults; best lightweight option.
- **NanoClaw** — architectural modernization (async DB) as a competitive edge if it lands cleanly.

---

## 6. Community Momentum & Maturity

**Tier 1 — Scale leaders (high activity, high expectations):**
- **OpenClaw** — Massive community, but the P0/P1 cluster and diamond-lobster issues indicate the platform is **churning rather than advancing**. Maturity is high (5+ years implied), but reliability is the constraint.
- **Hermes Agent** — Steady, well-managed cadence. Release v0.20.4 (74 PRs) shows discipline. **Stabilizing** with a focus on Windows/multi-profile gaps.
- **CoPaw** — **Rapidly iterating** with a healthy first-time-contributor pipeline. Velocity is high, but silent data-loss paths (#7118, #7110) could undermine trust.
- **ZeroClaw** — **High author output, gated by maintainer review.** 48 open PRs and 15 `risk:high` labels suggest the team is deliberately quality-gating large changes, but the 3-week `do-not-merge` backlog is a contributor risk.

**Tier 2 — High-velocity mid-size:**
- **IronClaw** — **Stabilizing through RC cycle**, with a mature QA pipeline (failure-taxonomy reports, benchmark runs). Positioned for enterprise.
- **NanoBot** — **Rapid iteration** with 27 PRs today; conflict-label friction is the main drag.
- **NanoClaw** — **Disciplined architectural rollout** (DB refactor series); low bug backlog indicates a healthy team.

**Tier 3 — Targeted/niche:**
- **PicoClaw** — Moderate activity; WebUI push is the main momentum driver.
- **Moltis** — Small but healthy; all known bugs resolved in 24h; **cleanest backlog in the ecosystem**.
- **LobsterAI** — **High feature ship cadence but struggling with issue resolution** (4-month-old P0/P1 crashes). Risk of user churn.

**Inactive (watch for revival):** NullClaw, TinyClaw, ZeptoClaw.

---

## 7. Trend Signals for AI Agent Developers

1. **Silent failures are the #1 trust killer.** Across seven projects, the most recurring user complaint is operations that appear successful but silently fail (CoPaw's envs.json corruption, NanoClaw's `/update-nanoclaw` false success, OpenClaw's migration data loss). **Developer takeaway:** Design for fail-loud-by-default; add health-check verifications after multi-step operations.

2. **Session-state integrity is the new security frontier.** Data loss, state crossing, and unbounded retention are surfacing as P0/P1 issues across OpenClaw, Hermes, CoPaw, and PicoClaw. **Takeaway:** Build session state as a first-class durable entity with explicit lifecycle management (TTL, transactions, crash recovery).

3. **The MCP ecosystem is fragile.** Transport config ignored, no auto-reconnect, OAuth token rotation gaps — these are blocking real users (CoPaw #6470, #5900, #7053; NanoBot #2493). **Takeaway:** Treat MCP client reliability as a core feature: support `streamable_http`, honor `Retry-After`, persist rotated tokens.

4. **Windows remains underserved.** Four projects have open Windows-specific bugs (updater self-lock, test failures, hangs, malware false positives). **Takeaway:** CI on Windows, self-update testing, and code-signing are differentiators.

5. **Database modernization is the next architectural wave.** NanoClaw's async portable DB, IronClaw's Reborn refactor, and OpenClaw's SQLite contention all point to a **sector-wide pivot away from SQLite as the default state store**. **Takeaway:** Design state layers with a portable SQL seam from day one.

6. **Evidence-backed observability is becoming table stakes.** IronClaw's run artifacts with per-tool timings and OpenClaw's community watchdog issues (#77598) signal demand for **deterministic, data-backed agent behavior** rather than "it should work." **Takeaway:** Instrument agent runs with structured evidence (tool calls, timings, outcomes) exposed to users.

7. **Cost/budget controls are emerging as a feature category.** NanoBot's Spend Firewall (#5409), IronClaw's BudgetLedger (#7673), and OpenClaw's voice-state bloat (#116201) show **economic sustainability is a user requirement**, not a nice-to-have. **Takeaway:** Ship budget limits, spend telemetry, and provider cost optimization early.

8. **WebUI is the adoption gate.** PicoClaw's #806 (8 👍) and NanoBot's WebUI enhancements highlight that **TUI/CLI-only is a barrier** for non-technical users. **Takeaway:** A browser-based management surface is now a baseline expectation for agent platforms.

9. **Security hardening is moving to defaults.** CoPaw's shell-evasion checks default-on (#7120) and NanoBot's proposed `restrict_to_workspace: True` default signal a **shift from opt-in to secure-by-default**. **Takeaway:** Default to secure; make privilege elevation explicit.

10. **Community contribution velocity is a health metric.** CoPaw's 8 first-time contributors and IronClaw's 15 merged PRs indicate healthy ecosystems; ZeroClaw's 3-week review queue and LobsterAI's stale issue backlog are **warnings of contributor burnout or user churn**.

---

**Bottom line for decision-makers:** Choose OpenClaw for maximum integration breadth if you can absorb stability risk; Hermes for desktop UX with managed releases; IronClaw for enterprise-grade reliability; NanoBot for security-first lightweight deployments. The sector's next 6 months will be defined by who ships reliable session-state and observable agent behavior, not who ships the most features.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-19

## 1. Today's Overview
NanoBot is in a period of sustained, high-velocity development. The project saw 10 issues updated in the last 24 hours (7 open, 3 closed) and a substantial 27 PRs updated (21 open, 6 merged/closed), indicating strong contributor activity. Focus areas include the `AgentLoop` lifecycle, WebUI observability, proxy compatibility, and Windows-specific fixes. The absence of new releases suggests the project is accumulating changes for a future, likely significant, version. Maintainers are actively reviewing and merging PRs, though several open PRs are flagged with "conflict" labels and require rebasing, which is a point of friction.

## 2. Releases
No new releases were published in the last 24 hours. The project is in an active development phase, with changes being merged towards the next version.

## 3. Project Progress
- **Closed/merged PRs (6 total)**: Key stability and quality-of-life fixes were merged/closed, notably from `chengyongru`:
    - **fix(tui): refresh expired API credentials**: Resolves TUI auth failures with a refresh and retry mechanism.
    - **fix(tui): keep composer visible and focused**: Fixes focus loss, which is a critical UI/UX annoyance.
    - **fix(tui): wait deterministically for truncation output**: Fixes a flaky test on Windows.
    - **feat(webui): add lightweight cross-session messaging**: Introduces `@handle`s for persisted sessions, enabling new cross-session communication capabilities.
- **Advanced Security & Reliability**: PR #4880 has been updated, proposing to default `restrict_to_workspace` to `True` to prevent security escapes (linked to Issue #4797). This is a major security posture shift if merged.
- **Agent Loop Lifecycle**: Two new PRs (#5430, #5431) were opened by `yu-xin-c` to fix memory leaks in `AgentLoop` by releasing completed task groups and reporting background task failures.

## 4. Community Hot Topics
The most active discussions are centered on regressions and proposed features.

- **#2493: LANGSMITH regression (Open)** - [Link](https://github.com/HKUDS/nanobot/issues/2493)
    - *Activity*: 7 comments, 1 👍. This is a long-standing (since March) user issue about a broken integration after a provider removal. A PR has finally been opened (#5436) to fix it, but the PR is still open.
    - *Need*: Stability for existing integrations. The lack of support for long-standing issues is a major user pain point.
- **#5149: No audio on WhatsApp (Open)** - [Link](https://github.com/HKUDS/nanobot/issues/5149)
    - *Activity*: 6 comments. Users are reporting broken audio output functionality on WhatsApp.
    - *Need*: Core functionality is expected to work across channels. This is a "works on my machine" type bug that hasn't been resolved.
- **#5420, #5408: WebUI Enhancements (Open PRs)** - [Link to #5420](https://github.com/HKUDS/nanobot/pull/5420), [Link to #5408](https://github.com/HKUDS/nanobot/pull/5408)
    - *Activity*: Both PRs have received the "conflict" label. These propose major new features: turn observability/recovery and follow-up suggestions.
    - *Need*: Users want a modern, feature-rich WebUI akin to commercial products. However, the conflict labels suggest they need rebasing.

## 5. Bugs & Stability
Bugs are reported consistently, with a notable focus on Windows-specific issues and process isolation.

- **[HIGH] #4797: No resource limits on shell subprocesses** - [Link](https://github.com/HKUDS/nanobot/issues/4797)
    - *Severity*: High. This is a security/availability risk. An LLM could crash the host. The fix is likely covered by PR #4880, which is still open with a conflict.
- **[MEDIUM] #2493: LANGSMITH regression** - [Link](https://github.com/HKUDS/nanobot/issues/2493)
    - *Severity*: Medium-High for affected users. A broken integration that has persisted for months. Fix PR #5436 is open but currently only touches documentation, which seems inadequate for a code regression.
- **[MEDIUM] #5417 (Closed): Windows WebUI exit on PID handoff** - [Link](https://github.com/HKUDS/nanobot/issues/5417)
    - *Severity*: Medium (Windows-only). A critical dev-mode crash. Related fix PR #5415 is open to adopt the Windows venv child process.
- **[LOW-MEDIUM] #5149: No audio on WhatsApp** - [Link](https://github.com/HKUDS/nanobot/issues/5149)
    - *Severity*: Medium. Operational feature broken for WhatsApp channel.
- **Agent Loop Leaks (#5428, #5429)**: Memory/resource leak issues. Fixed in PRs #5430 and #5431, which are open.

## 6. Feature Requests & Roadmap Signals
The most promising features are being developed in open PRs.

- **WebUI Enhancements (Next Version likely)**:
    - **Follow-up Suggestions** (#5408): Predicts follow-up prompts after a turn, enhancing user experience.
    - **Turn Observability** (#5420): Improves debugging and user trust by showing tool usage and reasoning context in the UI.
- **Metasearch Provider (`mst-python`)** via PR #5234: Aims to aggregate results from multiple search engines for richer quality, indicating a push towards more powerful agent research.
- **Spend Firewall / Budget Controls** (#5409, #5388): Both a feature request and design proposals to cap LLM spending and optimize context. This signals a move towards production-scale usage and cost management.
- **Cross-Session Messaging** (#5358 - merged): The groundwork has been laid for a more connected experience between sessions.

## 7. User Feedback Summary
- **Pain Points**: The most vocal pain points are regressions (#2493) and platform-specific bugs (#5417, #5341, #5149). Users are frustrated when features are removed without a clear migration path. There is also a concern about security (#4797).
- **Feature Desires**: Users are actively proposing integrations (ViBo memory #5372) and architectural improvements (Spend Firewall #5409).
- **Overall Sentiment**: The project is seen as "impressive" (#5372) with a lot of potential, but the influx of PRs and issues suggests a rapid pace that might be hard to keep stable. Users are concerned about long-standing issues (like #2493) and the cost of running agents (#5409).

## 8. Backlog Watch
These issues/PRs need urgent maintainer attention to unblock contributors and address technical debt.

- **#2493: LANGSMITH Regression (Open since March)** - High priority. Needs a proper code fix, not just a documentation change. The open PR #5436 is a blocker.
- **#4880: Security Restriction (Open since July)** - Security-critical. Needs review to default `restrict_to_workspace` to `True` and resolve the merge conflicts.
- **#4797: Subprocess Resource Limits (Open)** - Directly related to #4880. Needs to be addressed in tandem.
- **"Conflict" Label PRs**: #5408, #5420, #5257, #5212, #5341, #5415, #5411. Maintaining a clean main branch is essential. These need to be rebased to progress.
- **#5149: WhatsApp Audio (Open)** - Responding to this issue would build user trust, as it is a core functionality bug.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** August 19, 2026
**Data Window:** Last 24 hours

---

## 1. Today's Overview

Hermes Agent is in a high-activity maintenance and stabilization phase, with **50 issues** and **50 PRs** updated in the last 24 hours. The project shipped a patch release (**v0.20.4**) that rolls up ~74 PRs, indicating a steady, well-managed release cadence. Activity is heavily weighted toward bug fixes across the desktop app, gateway, CLI, and multi-profile/session-state management, with a notable cluster of community-contributed fixes (isatty guards, draft clearing, skills index). The `needs-decision` label on a Nix Home Manager feature suggests some roadmap decisions are pending, but overall the project shows strong community engagement and responsive maintainers.

---

## 2. Releases

### v2026.8.18 — Hermes Agent v0.20.4 (Patch Release)
**Release Date:** August 18, 2026

- **Scope:** Patch release; rolls up ~74 PRs merged since v0.20.3 into a stable tagged release.
- **Purpose:** Provides a stable checkpoint for downstream consumers including Docker images, hosted deployments, and fresh installs.
- **No breaking changes or migration notes** were included in the release notes; this appears to be a pure stability roll-up.

---

## 3. Project Progress (Merged/Closed PRs)

**13 PRs closed/merged in the last 24 hours** — a healthy mix of community contributions and maintainer fixes:

| PR | Title | Area |
|---|---|---|
| [#9087](https://github.com/NousResearch/hermes-agent/pull/9087) | feat(nix): add home-manager module for per-user hermes-agent service | Nix packaging |
| [#84178](https://github.com/NousResearch/hermes-agent/pull/84178) | feat(nix): home-manager module, shared with the NixOS module | Nix packaging |
| [#89532](https://github.com/NousResearch/hermes-agent/pull/89532) | fix(tui): hydrate cold-profile secret sources before the session's agent build | TUI / auth |
| [#86255](https://github.com/NousResearch/hermes-agent/pull/86255) | fix(skills): preserve document modes during atomic writes | Skills system |
| [#89546](https://github.com/NousResearch/hermes-agent/issues/89546) | fix(desktop): hide hover close buttons on persistent nav tabs | Desktop UI |

**Key advances:**
- **Nix Home Manager** support has finally landed after months of discussion (issues [#9056](https://github.com/NousResearch/hermes-agent/issues/9056)), enabling user-level declarative installs for per-user agents.
- **Secret hydrations** in TUI cold-profile builds are now fixed, preventing first-turn auth failures.
- **Skills document permissions** regression was fixed — atomic writes will no longer strip file modes.

---

## 4. Community Hot Topics

### Most Discussed Issue
**[#66616 — Skills index watchdog: stale/degraded automated probe](https://github.com/NousResearch/hermes-agent/issues/66616)** (54 comments, open)
- **Status:** The Skills Hub index is 29.8h old against a 26h freshness limit.
- **Analysis:** This long-running issue has the highest engagement and was flagged again today. It is draining community attention because the watchdog keeps surfacing the same problem without a root-cause fix. A fix PR ([#89608](https://github.com/NousResearch/hermes-agent/pull/89608)) was opened today — worth watching closely.

### Most "Liked" Issues
- **[#9056 — Nix Home Manager module request](https://github.com/NousResearch/hermes-agent/issues/9056)** (12 👍) — Now resolved via merged PRs.
- **[#74933 — Hindsight provider scope bug](https://github.com/NousResearch/hermes-agent/issues/74933)** and **[#89346 — Shared primary profile history split](https://github.com/NousResearch/hermes-agent/issues/89346)** (1 👍 each) — reflect deep multi-profile/session-state concerns among power users.

### High-Comment Bug Report
**[#88275 — Desktop renderer burns 40–70% CPU at idle on macOS Intel](https://github.com/NousResearch/hermes-agent/issues/88275)** (9 comments) — Users are seeing severe thermal throttling on Intel Macs; a related issue [#53902](https://github.com/NousResearch/hermes-agent/issues/53902) (fontations/temporal_rs loop) is still open; no definitive fix has been announced.

**Underlying needs:** Users are pushing for (a) a stable skills index pipeline, (b) proper multi-profile session isolation, and (c) desktop performance fixes on Intel Macs.

---

## 5. Bugs & Stability

### High Severity (P2) — Reported Today

| Issue | Title | Fix PR? |
|---|---|---|
| [#89586](https://github.com/NousResearch/hermes-agent/issues/89586) | **Desktop: profile switching hangs silently on Windows** after gateway switch refactor | No fix yet |
| [#89599](https://github.com/NousResearch/hermes-agent/issues/89599) | **Windows: `hermes update` can never succeed** — updater self-locks its own launcher exe (WinError 32) | No fix yet — critical for Windows users |
| [#89600](https://github.com/NousResearch/hermes-agent/issues/89600) | **`hermes plugins enable` hangs forever when stdout is redirected** — no isatty guard | Two competing PRs: [#89605](https://github.com/NousResearch/hermes-agent/pull/89605) and [#89604](https://github.com/NousResearch/hermes-agent/pull/89604) |
| [#89576](https://github.com/NousResearch/hermes-agent/issues/89576) | **Desktop MCP health probe evicts the live session** (Slack MCP) | No fix yet |
| [#89579](https://github.com/NousResearch/hermes-agent/issues/89579) | **Telegram startup notification not sent after crash/reboot** (only on planned restarts) | No fix yet |

### Medium Severity (P2) — Carried Over
- **[#88715 — Multiplex profile identity is late-bound across transport/session/storage](https://github.com/NousResearch/hermes-agent/issues/88715)** — architectural issue, needs maintainer decision.
- **[#89346 — Shared primary profile routes load history from root store](https://github.com/NousResearch/hermes-agent/issues/89346)** — fix PR [#89379](https://github.com/NousResearch/hermes-agent/pull/89379) is open.

### Notable Trend
The **Windows platform** is showing a cluster of unresolved issues (update self-lock, profile-switch hang, approval timeouts) — this may indicate a gap in maintainer testing on Windows.

---

## 6. Feature Requests & Roadmap Signals

### Strong Signals (likely in next releases)
- **[#89467 — `clarify` tool: ask multiple independent questions in one call](https://github.com/NousResearch/hermes-agent/pull/89467)** — reduces round-trips, high value for agent workflows.
- **[#89526 — Multi-agent PR convergence skill](https://github.com/NousResearch/hermes-agent/pull/89526)** — derived from real orchestration audits; likely to be appealing for power users.
- **[#89595 — xAI Grok Imagine 1080p video support](https://github.com/NousResearch/hermes-agent/pull/89595)** — simple allow-list expansion; docs already list 1080p.

### Medium-term Candidates
- **[#18885 — Memory provider tools in cron jobs via `allow_memory` flag](https://github.com/NousResearch/hermes-agent/issues/18885)** — still open but has a clear use case; may gain traction as memory plugins mature.
- **[#89304 — Desktop profile alias for remote gateway profiles](https://github.com/NousResearch/hermes-agent/issues/89304)** — natural next step after the profile-multiplexing work.
- **[#88307 — Always-visible connection picker in status bar](https://github.com/NousResearch/hermes-agent/issues/88307)** — UX improvement, low risk.

### Pending Decision
- **Nix Home Manager module** — both PRs ([#9087](https://github.com/NousResearch/hermes-agent/pull/9087), [#84178](https://github.com/NousResearch/hermes-agent/pull/84178)) are merged/closed, so this is **resolved**; watch for a follow-up on the `needs-decision` label.

---

## 7. User Feedback Summary

**Satisfaction signals:**
- Community is actively contributing fixes (isatty guard, draft clearing, skills index) — a sign of a healthy, engaged user base.
- Nix users finally got their requested Home Manager module.

**Pain points (recurring):**
1. **Windows reliability** — self-locking updater, silent profile-switch hangs, approval timeouts on remote Windows desktop; Windows users are clearly underserved.
2. **Desktop performance on Intel Macs** — two separate issues (#88275, #53902) with no fix in sight; long-running CPU burn is affecting daily usability.
3. **Session-state integrity** — multiple issues around interrupted turns, hidden messages, and profile history splits; the session-state sweeper (risk-session-state) is the most-tagged sweeper across issues, indicating a systemic weakness.
4. **Skills index staleness** — the 54-comment issue (#66616) is draining community visibility and trust in the skills hub.

---

## 8. Backlog Watch

These items are long-open or high-impact and need maintainer attention:

| Item | Age | Why It Matters |
|---|---|---|
| [#17157 — Discord slash command sync timeout](https://github.com/NousResearch/hermes-agent/issues/17157) | ~4 months | Repeated timeout on a popular platform; no clear resolution path. |
| [#18421 — `/goal` judge false positives on claimed file writes](https://github.com/NousResearch/hermes-agent/issues/18421) | ~4 months | Undermines trust in goal verification; should be prioritized. |
| [#9056 — Nix Home Manager](https://github.com/NousResearch/hermes-agent/issues/9056) | ~4 months | **Resolved** — merged in PRs; keep on watch for regressions. |
| [#66616 — Skills index watchdog](https://github.com/NousResearch/hermes-agent/issues/66616) | ~1 month | Highest engagement (54 comments); fix PR opened but not merged. Long-standing staleness undermines docs reliability. |
| [#88715 — Multiplex profile identity late-binding](https://github.com/NousResearch/hermes-agent/issues/88715) | 2 days | Architectural, tagged `needs-decision`; will affect all future profile work. |
| [#53902 — Renderer fontations/temporal_rs loop](https://github.com/NousResearch/hermes-agent/issues/53902) | ~2 months | GPU 98% active, 13W sustained power draw — severe for laptop users; no fix PR. |

---

**Overall Assessment:** Hermes Agent is in a healthy state with strong community contribution velocity. The flagship desktop app remains a stability bottleneck, particularly on Windows and Intel macOS, and the session-state/profile-multiplexing architecture is showing growing-pains bugs. The current cluster of sweepers (`risk-session-state`, `risk-message-delivery`, `risk-compatibility`) suggests maintainers are aware and systematically addressing these areas. The Nix Home Manager feature closure is a win for the distribution story, and the expected merge of the `clarify` multi-question PR would be a meaningful agent-behavior improvement.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-19

## Today's Overview
PicoClaw remains highly active with 6 issues and 4 PRs updated in the last 24 hours, indicating steady community engagement and ongoing development. The project's most significant initiative is the long-running WebUI refactoring effort (Issue #806, open since February with 9 comments and 8 👍), which continues to generate interest as the team works to lower the barrier for non-technical users. Two PRs were closed today — one adding native Anthropic Messages API support after a 5-month journey, and another improving token usage logging for providers like DeepSeek — while two older PRs addressing custom allow patterns and configuration validation remain open and labeled as stale. Three other issues have been flagged as stale, suggesting maintainers may be deprioritizing some older bug reports in favor of feature work. Overall, the project appears healthy with a mix of feature development, bug fixing, and community-driven improvements, though some technical debt around configuration handling persists.

## Releases
No new releases were published in the last 24 hours. The most recent known version is v0.3.1, as referenced in several open bug reports.

## Project Progress
Two PRs were closed during this period, one successfully merged and one closed without merging:

- **[PR #1158 — feat: add anthropic-messages protocol for native Anthropic API format](https://github.com/sipeed/picoclaw/pull/1158) (MERGED, closes #269):** After 5 months of development, this substantial feature adds support for the `anthropic-messages` protocol prefix, enabling PicoClaw to work with LLM services that only support Anthropic's native Messages API format (`/v1/messages` endpoint). This addresses a real compatibility gap for users relying on proxy services that don't expose OpenAI-compatible endpoints. The merge expands PicoClaw's provider ecosystem meaningfully.

- **[PR #3317 — feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/pull/3317) (MERGED):** Enhances the gateway's LLM response debug logging to include cache metadata from the `usage` object, which providers like DeepSeek (via Cloudflare AI Gateway) report. This gives users better visibility into prompt caching behavior and helps with cost tracking and debugging.

## Community Hot Topics

- **[Issue #806 — Add webUI support, Refactoring now](https://github.com/sipeed/picoclaw/issues/806)** — 9 comments, 8 👍, priority: high, roadmap: Currently the most-discussed issue in the project. The community strongly supports a browser-based interface, with suggestions for extension frameworks like [OpenWebUI tools](https://github.com/sipeed/picoclaw/issues/806#issuecomment-X). The author Zepan has marked it as "Refactoring now," signaling active work. The underlying need is clear: non-technical users need a GUI to manage PicoClaw instances, and the TUI alone is a barrier to broader adoption.

- **[Issue #3287 — Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)** — 6 comments: Active discussion about how PicoClaw handles IRCv3 messages exceeding the 512-byte limit. Users want PicoClaw to treat split messages as one cohesive message rather than separate ones. This is a practical UX issue for IRC-heavy users who regularly send or receive longer text.

- **[Issue #3301 — /clear and session auto-compression fail in dispatch-routed chats](https://github.com/sipeed/picoclaw/issues/3301)** — 4 comments: Users report that session management commands don't work when chats are routed to non-default agents via dispatch rules. This points to a deeper issue with how dispatcher routing interacts with per-session state.

## Bugs & Stability
Three bugs with open/updated issues, ranked by severity:

1. **[Issue #3339 (HIGH) — Antigravity (Google) returns generic 429 despite valid auth](https://github.com/sipeed/picoclaw/issues/3339):** Google Antigravity authentication and model discovery work, but every generation request fails with a generic `RESOURCE_EXHAUSTED` 429 error. This completely blocks Antigravity users, though it's unclear whether this is a PicoClaw bug or a provider-side issue needing investigation. No fix PR exists yet.

2. **[Issue #3301 (MEDIUM) — /clear and auto-compression break with dispatch-routed chats](https://github.com/sipeed/picoclaw/issues/3301):** Session management commands fail silently when chats are routed to non-default agents via dispatch rules. The user reports the commands simply don't work in this configuration. Particularly impactful for users relying on multi-agent setups with Discord and Telegram. No fix PR in progress; worth noting this is one of two issues from user j-v (see PR #3314 below).

3. **[Issue #3328 (MEDIUM) — line.settings.webhook_host/webhook_port are inert](https://github.com/sipeed/picoclaw/issues/3328):** The LINE channel's `webhook_host` and `webhook_port` settings are declared, defaulted, and env-bound but never read, so configuring them has no effect — and no warning. This is a configuration correctness issue that undermines user trust. **Fix PR exists: [PR #3329](https://github.com/sipeed/picoclaw/pull/3329)** (open, stale) proposes warning users instead of silently ignoring these settings.

## Feature Requests & Roadmap Signals
- **(Major) Web UI for PicoClaw** — Issue #806, marked `priority: high, roadmap`. The author has explicitly stated work is underway. This is the clearest near-term feature signal and will likely be a headline feature for the next major release.
- **Native Anthropic Messages protocol** — Now merged into the codebase, expanding provider compatibility (closes #269). This addresses a dedicated segment of users using Anthropic-native proxies.
- **IRC long-message handling (Issue #3287)** — Strong use case from IRCv3 users; the fix is a significant UX improvement for IRC-heavy communities. Unlikely to require a major release.
- **Prompt cache token logging** — Merged today, improving visibility for cost-sensitive users on providers like DeepSeek.

**Likely next-version candidates:** WebUI (in progress), IRC message reassembly, and possibly the `customAllowPatterns` fix if PR #3314 is merged.

## User Feedback Summary
- **Strong desire for a Web UI** with 8 upvotes and the highest comment count in the project suggest broad frustration with TUI-only access. Users explicitly want browser-based management for non-technical operators.
- **Dispatch-rule bugs frustrate multi-agent users:** Issue #3301 (j-v) and PR #3314 (j-v) show a power user hitting real functional regressions — allowing shell commands in one case and broken session commands in another. These are credibility-hurting regressions for advanced users.
- **Configuration trust issue:** Issue #3328 user qing-wang found documented settings that do nothing. Silent non-functional config reduces confidence in PicoClaw's configuration surface.
- **Provider compatibility remains a priority:** Issue #3339 (Antigravity) and the merged Anthropic protocol PR show users are adopting a wide range of LLM providers, and proxy gateways (Cloudflare AI Gateway, etc.) are common in their stacks.

## Backlog Watch
The following items need maintainer attention:

1. **[PR #3329 — fix(line): warn on inert webhook_host/webhook_port](https://github.com/sipeed/picoclaw/pull/3329)** — Open since 2026-08-11, now stale. Merging (or closing) this would resolve a nagging config-silent-failure issue and improve trust.

2. **[PR #3314 — Fix: agent not able to execute shell command with customAllowPatterns](https://github.com/sipeed/picoclaw/pull/3314)** — Open since 2026-08-03, now stale. This blocks a power user's workflow (from j-v, who also reported the related dispatch-route bug). Denying merged tests due to a guard-logic regression is a significant correctness problem that should be prioritized.

3. **[Issue #3287 — IRC long-message support](https://github.com/sipeed/picoclaw/issues/3287)** — Open since 2026-07-22 with 6 comments, no maintainer response. A concrete UX improvement with clear scope that has gone unacknowledged.

4. **[Issue #806 — WebUI](https://github.com/sipeed/picoclaw/issues/806)** — Community's #1 ask for 6 months. Users are waiting; even a progress update would be valuable.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-19

## 1. Today's Overview

NanoClaw is in a high-velocity stabilization and hardening phase. The project saw substantial infrastructure work in the last 24 hours with 39 PRs updated (17 merged/closed, 22 open) and 3 issues touched (1 still open). The dominant theme is **database modernization** — a large, carefully staged refactor toward an async, portable central database (the `refactor(db)` series), alongside a parallel effort introducing a session-runtime driver seam for the host. Activity is heavily concentrated among core-team members (gavrielc, moshe-nanoco), suggesting disciplined, multi-PR architectural rollouts rather than community-driven feature sprints. Only one new issue remains open, indicating a healthy, low-bug backlog overall, but the 10-minute Codex WebSocket stall (Issue #3338) is a notable user-facing reliability concern.

## 2. Releases

No new releases were published in the last 24 hours. The project appears to be gearing up for a major release given the volume of breaking-change-adjacent refactors in flight (PR #3334 is explicitly tagged `[BREAKING]`).

## 3. Project Progress

**Key merged/closed PRs (17 total)** — the database portability push is the clear center of gravity:

- **Central DB portability series (moshe-nanoco):** A multi-PR effort landed to decouple the central database from SQLite-specific code paths:
  - `refactor(db): centralize the central database path` (#3321)
  - `refactor(db): make central SQL portable` (#3323)
  - `refactor(db): add async central database seam` (#3324)
  - `fix(db): close async concurrency races` (#3326)
  - `test(db): run central suites through the driver` (#3330)
- **Claude rate-limit fix (#3077, merged):** Corrects a critical bug where the SDK's telemetry `rate_limit_event` (informational `allowed` status) was mapped as a terminal `quota` error, aborting health checks. Closes issue #3016.
- **Driver seam architecture (gavrielc):** The `src/drivers/` seam (#3306) is the foundation; the host's session lifecycle routing (#3307) and group-over-folder data-loss refusals (#3308) are stacked on top.

**Still open but advanced:** The remaining DB refactor PRs (#3332–#3335, #3337) and the Slack/approvals/hosting fixes (#3339–#3342) are all in active review.

## 4. Community Hot Topics

The most-discussed issue in the last 24 hours reveals a **real end-user pain point around silent failures**:

- **Issue #3338 (OPEN)** — "Codex WebSocket idle retry is hidden until NanoClaw's 10-minute turn timeout" (2 comments). Root cause: Codex CLI silently retries its own 5-minute WebSocket idle timeout internally, but `codex app-server` never surfaces that failure to NanoClaw, leaving users staring at a blank chat for 10 minutes. The underlying need is **transparent error propagation** from subprocesses/CLI tools up to the agent host — a broader architectural concern than just this one bug.

The now-closed Issues #2868 and #3194 (both about silent success on update flows) reinforce this pattern: users are repeatedly hitting cases where operations *appear* successful (or hang) without real feedback during multi-step flows.

## 5. Bugs & Stability

Ranked by severity:

1. **HIGH — Codex WebSocket silent stall (Issue #3338, OPEN):** A simple Telegram request can hang up to 10 minutes when the Codex WebSocket stalls. The internal retry is invisible to NanoClaw. **No fix PR yet** — needs attention from the Codex integration maintainers.
2. **MEDIUM — `/update-nanoclaw` stamps success without recoverable cutover (Issue #3194, CLOSED today):** Rollback only protects Git, leaving the SQLite DB, gitignored config, and external components exposed across four failure windows. Closed, but the fix approach isn't visible in today's PR list — monitor for an update-safety PR.
3. **MEDIUM — `/update-skills` silent no-op (Issue #2868, CLOSED today):** Pre-flight skips code/deps refresh for installed channels; the documentation migration said to re-run `/add-<channel>`, which silently didn't work. Fixed and closed.
4. **LOW — Claude rate_limit vs quota misclassification (#3077, MERGED):** Purely telemetric — fixed, improves health-check accuracy and reduces false-positive quota failures.

**Security/robustness hardening in review:** PR #3339 (fail-closed on unverifiable stored sign-ins) and PR #3341 (Slack service derived from credential issuer) address pairing and validation gaps in the provisioning flow.

## 6. Feature Requests & Roadmap Signals

The roadmap is clearly being driven by architectural direction rather than user feature requests right now:

- **Async & portable database (strong signal):** Six PRs in one series (`central database seam`, `portable SQL`, `backend composition`, `await` fixes, `BREAKING` adoption) indicate a deliberate move toward supporting remote/async database backends (e.g., Postgres) alongside SQLite. Expect this to land soon; a **breaking DB-config change** appears imminent (PR #3334).
- **Session-runtime driver seam (strong signal):** `src/drivers/` with Docker as the first realization means the host can eventually support other session runtimes (containers, VMs, local processes) without rewriting the session lifecycle. The refusal to create groups over undisposed folders (#3308) adds data-safety guarantees.
- **New channel adapters (inbound):** Webex polling adapter (#3343) for enterprises behind NAT/firewalls, plus a You.com MCP tools utility skill (#3322) — the ecosystem continues to grow.

## 7. User Feedback Summary

The dominant user pain this cycle is **silent failure modes**:

- Users cannot distinguish "the bot is thinking" from "the bot silently stalled" (Issue #3338) — the 10-minute wait is described as the *only* signal that something is wrong.
- CLI-driven updates (`/update-nanoclaw`, `/update-skills`) report success even when the runtime doesn't match the checkout — a trust-damaging experience documented in Issues #3194 and #2868.
- The fix direction (e.g., #3308's refuse-to-clobber, #3339's fail-closed posture) and the rate-limit telemetry fix suggest maintainers are converging on a "fail loudly and safely by default" philosophy.

## 8. Backlog Watch

- **Issue #3338** — 1 day old, but the complexity of "Codex internal retry is opaque to app-server" could easily stall. Should be routed to the Codex integration owner.
- **The `[BREAKING]` DB refactor (#3334)** — needs careful review and a migration note before merge; it's the kind of PR that should not sit in limbo for weeks, as #3321–#3330 already landed and depend on it.
- **Driver-seam stack (#3307, #3308)** — the host *consumption* PR is referenced but not present in today's update list; keep an eye on the next check alongside #3306.
- **No long-languishing issues (30+ days)** are visible in today's activity window, indicating the maintainers are keeping the backlog triaged.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-19

## 1. Today's Overview

IronClaw is in a period of high activity with 21 issues and 40 PRs updated in the last 24 hours. The project is progressing through the v1.3.0 release candidate cycle (rc.2 out yesterday) while major v1.4.0 roadmap work — including Reborn durable-state refactoring, an extensions vNext program, and a new coding-tool surface — is actively being developed. Daily failure-taxonomy reports and benchmark runs indicate a mature QA pipeline driving steady stabilization. The PR pipeline is robust with 25 open PRs and 15 merged/closed, though the sheer number of XL-sized PRs suggests substantial architectural change underway. Release-candidate hotfixes and several closed bugs show good responsiveness to stability issues. Overall project health appears strong, with a balanced mix of feature work, stabilization, and documentation efforts.

---

## 2. Releases

**ironclaw-v1.3.0-rc.2** (2026-08-18) — Release candidate for v1.3.0

**Fixes included:**
- **Upgrade crash-fix:** Upgrades from v1.2 now correctly accept and preserve the released extension `activation_state` field, resolving a crash-loop on startup during migration.
- **Runtime image fix:** The canonical Reborn runtime image again supports opt-in, public-key-only SSH for workers on port 2222.

**Migration notes:** The `activation_state` preservation fix is critical for v1.2 → v1.3 upgrades — anyone on that path should upgrade to rc.2 before attempting migration. No breaking changes were identified in this release candidate.

---

## 3. Project Progress

**Merged/closed PRs today (15 total):**

- **[#7734 — refactor(loop): finish two abandoned test-module extractions](https://github.com/nearai/ironclaw/pull/7734)** [CLOSED, XL, core] — Relocated 317 tests from two files (12,790 + 11,302 lines) into dedicated `tests/` directories with zero production-line changes. Significant test-maintainability win.

- **[#7713 — test: exercise /benchmark on qa-automation-preview](https://github.com/nearai/ironclaw/pull/7713)** [CLOSED, XS, CI] — First end-to-end run of an enterprise-type suite through the `/benchmark` path on the new CI preview environment.

**Other notable closed items:**
- **#7714 (closed)** — libSQL single-write-connection starvation bug (see Bugs & Stability).
- **#7638, #7639 (closed)** — WebUI toast notifications replacing `window.alert()` and shared `InlineNotice` component (UX consistency work).
- **#7185 (closed)** — Memory-not-reliably-recalled-across-conversations bug closed (see Bugs & Stability).
- **#7465, #7165 (closed)** — Epics for "Company Brain FDE" and "Customer Feedback Remediation" closed (likely completed or collapsed into other work).

**Key PRs advancing (open but active):**
- **#7491 — omp core-tool contract** (issue #7392): unifies coding tools to six bare names (`read`, `write`, `edit`, `glob`, `grep`, `bash`), removing old file tools and mixed surfaces. This is a major model-visible API change.
- **#7650 — automation run outcomes from runtime evidence**: replaces semantic judging with deterministic, evidence-backed assessment.
- **#7686 — centralized capability outcome processing**: PR 1 of the capability-response-normalization plan, behavior-preserving refactor.
- **#7711 — wasm typed tool response and guest migration**: final PR of the capability-response-normalization stack.
- **#7735 — run timing evidence in downloadable artifacts**: adds per-iteration inference and per-tool duration data to exported run JSON.
- **#7697 — durable user inbox and product APIs**: moves notification ownership into a dedicated domain.

---

## 4. Community Hot Topics

**Most active issues (by comments):**

1. **#7185 — Memory not reliably recalled across conversations** ([issue](https://github.com/nearai/ironclaw/issues/7185)) — 2 comments, CLOSED. Multiple testers independently observed cross-conversation memory failures. A flagship UX-reliability issue reported during weekly community check-in. Closing suggests a fix landed.

2. **#6879 — Automation runs are hit-or-miss** ([issue](https://github.com/nearai/ironclaw/issues/6879)) — 1 comment, OPEN (epic, v1.3.0, v1.4.0). Structural problem: trigger-fire executes as plain interactive chat turns, especially on small models. The audit finding suggests trigger→run pipeline needs architectural attention, not just model tuning.

3. **#7673 — BudgetLedger accounting refinements** ([issue](https://github.com/nearai/ironclaw/issues/7673)) — 1 comment, OPEN. Truncated-launch windows double-charge invocations and charge-durability gaps. Both err conservative (over-count → earlier stop), which is the "right direction" for cost control but needs refinement.

**Analysis:** The community's underlying needs are reliability-focused: consistent memory, dependable automation execution, and predictable cost accounting. These are the "does the thing actually work when I'm not looking" concerns that matter most to power users. The closed memory bug and the evidence-based automation judging PR (#7650) directly address these themes.

---

## 5. Bugs & Stability

**Ranked by severity:**

1. **[#7714 — libSQL single write-connection starvation](https://github.com/nearai/ironclaw/issues/7714)** [CLOSED, risk: medium] — Under bench load (147 tasks), the single shared write connection stalled the resource-governor journal ~40s, cascading into authority invalidation, journal replacement, durable-state reloads, and permanent reservation leaks. **Fix status:** closed; root cause addressed.

2. **[#7185 — Memory not reliably recalled across conversations](https://github.com/nearai/ironclaw/issues/7185)** [CLOSED] — Cross-conversation context loss reported by multiple independent testers. **Fix status:** closed; the fix is likely tied to the Reborn storage/profile work (#7467).

3. **[#7727 — Catalog `capabilities` artifact mandatory but never read](https://github.com/nearai/ironclaw/issues/7727)** [OPEN] — Downloads and digest-verifies a required artifact that is never used, including for manifest v3 tools. Dead weight and potential security surface.

4. **[#7726 — `IRONHUB_MANIFEST_URL` configurable but hardcoded](https://github.com/nearai/ironclaw/issues/7726)** [OPEN] — Self-hosted catalogs rejected because host must be on a compile-time allowlist. Config knob appears to work but doesn't in practice.

5. **[#7447 — Agent fails after calling too many tools](https://github.com/nearai/ironclaw/issues/7447)** [OPEN, epic, v1.3.0, v1.4.0] — Agent stuck in redundant fetch-retry loops (4 near-duplicate GitHub queries) rather than paginating, burning the run's tool-call budget. Model-behavior issue compounded by tool-surface design.

6. **[#7673 — BudgetLedger double-charge on truncated launches](https://github.com/nearai/ironclaw/issues/7673)** [OPEN] — Charging visible calls before invocation could double-count; conservative (over-count) direction but needs fixing for cost accuracy.

---

## 6. Feature Requests & Roadmap Signals

**Active roadmap epics:**

- **#7467 — Reborn durable state profile-agnostic migration** (v1.4.0, risk: high) — Profile changes can strand conversation history, secrets, and workspaces. This is foundational for upgrade safety.

- **#7354 — Extensions vNext: Unified Channels, Rich Messaging, Signal** (v1.3.0) — Web push and Telegram delegated-device work split into their own programs; this epic focuses on channel unification and Signal production-readiness.

- **#7392 — Replace first-party coding tools with pinned omp tool surface** (v1.4.0) — The experiment (PR #7491) removes old tools and ships six bare-name coding tools. This is a major model-visible change likely to be user-facing in v1.4.0.

- **#7732 — Sandboxing solution with CLIs** (v1.4.0, new) — E2e sandboxing in progress; signals enterprise/security direction.

- **#7731 — Mnesis Spike** (v1.4.0, new) — Integrating Mnesis as a memory provider. Directly addresses the memory-reliability theme (#7185).

- **#7733 — DESIGN.md governance and theme reskin phases 2–3** (v1.4.0, new) — Authoring design governance; theming/data-theme contract; accessibility bar. Tied to design-system epic #7038.

- **#6837 — Minimal info-level logging for growth/usage stats** (v1.4.0) — Zero `info!` calls in analytics currently; 52 total `info!` calls across workspace are all infrastructure.

**Prediction for v1.4.0:** The memory-provider spike (Mnesis), omp coding-tool surface, and Reborn profile-agnostic storage are the most likely feature blocks. The design-system governance (DESIGN.md) and Slack UX improvements are shippable incrementally.

---

## 7. User Feedback Summary

**Pain points:**
- **Memory inconsistency** (#7185): "The agent doesn't have access to information" established in prior conversations — flagged in weekly community check-in by multiple testers.
- **Automation unreliability** (#6879): "The same stored prompt sometimes succeeds and sometimes produces nothing useful" — especially on smaller models like DeepSeek V4 Flash. Users expect unattended runs to behave deterministically.
- **Tool-loop degradation** (#7447): Agent burning its entire budget on redundant retries instead of paginating — a frustrating failure mode for complex multi-step tasks.
- **Slack onboarding friction** (#7681): Unlinked-user connect messages are public in shared channels and require manual multi-step work with no context carried between steps.

**What users are reacting well to (based on PR activity):**
- **Evidence-backed run artifacts** (#7735): Timings per iteration, per-tool, and run totals in downloadable artifacts — directly addresses "it felt slow" complaints with hard data.
- **Private Slack connect nudge with one-click link** (#7682): Fixes both visibility and multi-step friction.
- **OAuth-first login** (#7304): Moving OAuth provider buttons above the gateway token form on the login card.

---

## 8. Backlog Watch

**Issues/PRs needing maintainer attention:**

1. **#3676 — docs: rework the security section** ([PR](https://github.com/nearai/ironclaw/pull/3676)) — Open since **May 15** (95+ days). Originally written against the v1 monolith, rebuilt from current main. An experienced contributor has put in significant effort; this needs a review decision soon.

2. **#7727 — Catalog `capabilities` artifact mandatory but never read** ([issue](https://github.com/nearai/ironclaw/issues/7727)) — New but touches security surface (downloads + digest-verifies unused artifacts). Should be triaged quickly.

3. **#7726 — `IRONHUB_MANIFEST_URL` configurable but hardcoded** ([issue](https://github.com/nearai/ironclaw/issues/7726)) — Config knob that doesn't actually work; breaks the self-hosting story. Needs decision: honor the knob or remove it.

4. **#6837 — Zero info-level logging for growth/usage stats** ([issue](https://github.com/nearai/ironclaw/issues/6837)) — Open since July 29, no comments. Analytics has no log-based signal at all; might be de-prioritized but has been silent.

5. **#6994 — OOBE automation-tasks prototype** ([PR](https://github.com/nearai/ironclaw/pull/6994)) — Open since August 1, gated behind off-by-default flag. The design+integration plan is done; implementation needs review attention before it can be flagged on.

6. **#7673 — BudgetLedger accounting refinements** ([issue](https://github.com/nearai/ironclaw/issues/7673)) — Double-charging on truncated launches and charge-durability gaps; conservative direction but needs a fix owner.

---

*Data source: nearai/ironclaw GitHub repository (github.com/nearai/ironclaw), snapshot 2026-08-19.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-19

## 1. Today's Overview

LobsterAI is in a **high-velocity release phase**, with the project shipping version `2026.8.18` and consolidating a significant feature branch into `main` via PR #2510 (23 commits, +7,004/−39 lines). Activity is dominated by **integrations, UI/UX polish, and stability fixes** rather than net-new architecture. Notably, 16 PRs were merged or closed in the last 24 hours, including several long-stale PRs from April (e.g., #1583, #1597, #1615, #1626) that were finally merged into the codebase, clearing backlog debt. The issue tracker remains static for the most part: **9 open issues are all marked "stale"** with zero closed in the last day. The project shows healthy momentum but a **degree of community concern about stability**, as the 9 open issues are all from April and reflect crash, UX, and functional bugs.

---

## 2. Releases

**LobsterAI 2026.8.18** — released 2026-08-18

**What's Changed:**
- **feat: dsh engine integration** — initial integration of the DeepSeek Harness (dsh) engine (PR #2502)
- **feat: update dsh to rc.7** — engine dependency bumped to release candidate 7 (PR #2509)
- **feat: dsh process launcher** — adds process-level launcher for the dsh engine (PR #2502, continued)

**Notes for Users:**
- dsh is an **opt-in experimental integration** (confirmed by release branch notes PR #2510)
- Version `2026.8.17` release branch was merged into `main`, implying **all 2026.8.17 fixes are now in this release**
- Model loading, scheduled-task history, and other **stability improvements** from the release branch are included

**Potential Migration Note:** The new dsh engine may conflict with custom configuration files, similar to the OpenClaw gateway config issue seen in #1626 (where removed fields `skipMissedJobs` caused P0 crashes). Users upgrading from earlier versions should verify gateway config compatibility.

---

## 3. Project Progress (Merged/Closed PRs — 16 total)

### Major Features Shipped

| PR | Title | Impact |
|----|-------|--------|
| [#2510](https://github.com/netease-youdao/LobsterAI/pull/2510) | Release: 2026.8.17 | Final merge of release branch: 23 commits, 57 files |
| [#2481](https://github.com/netease-youdao/LobsterAI/pull/2481) | feat(sidebar): move task search to header actions | UX improvement, icon-only search entry with diagnostics |
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | feat(settings): add artifact auto-preview toggle | User control over auto-preview behavior |
| [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | feat(sidebar): add multi-agent task activity filter | Codex-inspired filter for multi-agent task triage |
| [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | feat(scheduledTask): push system notifications | OS-native notifications on task completion (default off, permission guided) — closes #1620 |
| [#1629](https://github.com/netease-youdao/LobsterAI/pull/1629) | feat(avatar): add user avatar settings | Avatar picker/uploader, 6 preset SVG avatars |
| [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) | feat(mcp): quick add templates | One-click templates for File System, SQLite, Brave Search |
| [#1583](https://github.com/netease-youdao/LobsterAI/pull/1583) | feat(skills): recently used tab w/ usage count | Tracks auto-routed skill usage; closes long-standing gap |

### Key Fixes Merged

| PR | Fix |
|----|-----|
| [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508) | **Auth/model load retry** — backoff retries so transient fetch failures don't empty plan model groups |
| [#2507](https://github.com/netease-youdao/LobsterAI/pull/2507) | **Scheduled task cron history** — cap page size to gateway limit, prevent large-history crashes |
| [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) | **P0 OpenClaw gateway fix** — removed `skipMissedJobs` field causing gateway unable to start for all users |
| [#1597](https://github.com/netease-youdao/LobsterAI/pull/1597) | **SQLite foreign keys enabled** — fixed cascade delete for `cowork_messages` and `user_memory_sources` |
| [#1615](https://github.com/netease-youdao/LobsterAI/pull/1615) | **Session export quality** — localized role names, timestamps, copy-to-clipboard, removed truncation |
| [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | Copy success feedback for site URLs |

---

## 4. Community Hot Topics

The most active discussion items this cycle are **feature requests and long-standing stability pains**:

1. **[#1614 — "Add hermes-agent as AI engine"**](https://github.com/netease-youdao/LobsterAI/issues/1614) (2 comments, open since April)
   *User wants hermes-agent added as optional engine, similar to OpenClaw.*
   → Underlying need: **engine diversity and optionality**; this pairs well with the dsh integration pattern just shipped.

2. **[#1620 — "Scheduled task completion notifications"**](https://github.com/netease-youdao/LobsterAI/issues/1620) (1 comment, closed)
   *Feature request — now shipped in 2026.8.18 via PR #1621.*
   → Demonstrates the team's **responsiveness to user-requested features** within ~4 months.

3. **[#1622 — "Cannot add custom models"**](https://github.com/netease-youdao/LobsterAI/issues/1622) (2 comments, open)
   *User reports model addition failure with screenshot.*
   → High impact: **blocks users from using their own models**; likely a configuration or validation issue.

4. **[#1627 — "Complex tasks crash the client"**](https://github.com/netease-youdao/LobsterAI/issues/1627) (2 comments, open)
   *Crash on complex tasks, logs point to OpenClaw/ws event handling.*
   → Likely a **memory or event-loop overload** during multi-step tasks.

---

## 5. Bugs & Stability

**No new bugs reported in the last 24h** (all 9 issues are stale from April). However, a significant **bug backlog** remains:

### High Severity (P0/P1)

1. **[#1587 — Latest version crashes on startup after update**](https://github.com/netease-youdao/LobsterAI/issues/1587)
   *First-launch crash, full log attached.* — **Open since April 9, unfixed.** This is a launch blocker for some users, likely tied to the 2026.04.08 build.

2. **[#1589 — Session and scheduled task features both broken**](https://github.com/netease-youdao/LobsterAI/issues/1589)
   *macOS Intel, version 2026.04.08.* — **Open since April, no fix PR linked.** Both core workflows (sessions, scheduled tasks) fail.

3. **[#1626 (PR) — OpenClaw gateway P0 blocker**](https://github.com/netease-youdao/LobsterAI/pull/1626)
   *Gateway failed to start for all users after OpenClaw upgrade.* — **FIXED and merged.** Root cause: removed `skipMissedJobs` config field. This was 100% reproducible and is now resolved.

### Medium Severity

4. **[#1627 — Client crashes on complex tasks**](https://github.com/netease-youdao/LobsterAI/issues/1627) — no fix PR visible.

5. **[#1617 — Deleted skills still displayed after deletion**](https://github.com/netease-youdao/LobsterAI/issues/1617)
   *Front-end state not synced after backend delete on Skills page; persists after restart.* — **Fix not yet identified.**

6. **[#1586 — Language switching incomplete**](https://github.com/netease-youdao/LobsterAI/issues/1586)
   *Terms and tool style sections remain Chinese in English mode.* — **Still open.**

### Stability Signals
- The **OpenClaw gateway config validation** in the latest version is **strict** — any removed field will crash the app. Teams using custom config should validate against new schema.
- The **release cadence** (weekly) appears faster than the **issue resolution cadence**, creating an accumulation of stale bugs.

---

## 6. Feature Requests & Roadmap Signals

### Explicit User Requests

| Request | Status | Prediction |
|---------|--------|-----------|
| **Hermes-agent as optional engine** (#1614) | Open | **Likely next** — team is actively integrating multiple engines (deepseek/dsh just shipped), hermes-agent fits this pattern |
| **Artifact auto-preview toggle** (#2425) | Shipped | — |
| **Scheduled task notifications** (#1620) | Shipped | — |
| **Skill usage tracking ("recently used")** (#1583) | Shipped | — |

### Roadmap Patterns (from PRs)

1. **Multi-agent task management UX** — the sidebar activity filter (#2418) and global search (#1634) show the team investing in **multi-agent orchestration workflows**.
2. **Engine abstraction** — dsh integration confirms LobsterAI is becoming an **engine-agnostic shell**; expect more engine choices in future versions.
3. **System-level integrations** (notification, avatar, MCP templates) — **consumer-grade polish** remains a focus.

### Next-Release Predictions

- **Global search fix & UX upgrade** (PR #1634, currently open) — high probability to land in 2026.8.19/20.
- **Model selector UI improvements** (PR #1628) — also open; likely merges soon.
- **Hermes-agent support** — if community interest grows (only 2 comments so far), the team may prioritize it.

---

## 7. User Feedback Summary

**Positive Signals:**
- **Response time to feature requests is good**: #1620 (notification request, April 10) was shipped by August 18; ~4 months turnaround.
- **UI/UX polish is well-received**: PRs like sidebar search (#2481) and avatar features (#1629) show user-facing improvements being actively pursued.
- **Cascading/related fixes are happening**: PR #1597 (foreign keys) fixes data integrity; PR #1615 (export quality) improves collaboration output — these address real user-reported pain points.

**Negative Signals:**
- **The April bug backlog is concerning**: 9 open stale issues include 2 crash-level bugs (#1587, #1589) with no visible fix PRs, spanning over 4 months.
- **Feature toggles are accumulating without proper onboarding**: e.g., scheduled-task notifications default OFF (per #1621) may lead to user confusion about why tasks don't notify.
- **The OpenClaw upgrade broke all users at one point** (P0 #1626), raising **trust concerns regarding upgrade stability** for the user base.

**Overall Sentiment:** Mixed. The community sees rapid feature growth, but long-outstanding crashes (startup crash, session failures) may drive users to alternative tools if not addressed soon.

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Item | Age | Severity | Why It Matters |
|------|-----|----------|----------------|
| **[#1587 — Startup crash on latest version**](https://github.com/netease-youdao/LobsterAI/issues/1587) | 4+ months | **P0** — app won't launch for some users | Longest-standing crash bug, no assigned PR, may be blocking a subset of users (likely Windows/macOS-specific) |
| **[#1589 — Sessions & scheduled tasks broken (macOS Intel)**](https://github.com/netease-youdao/LobsterAI/issues/1589) | 4+ months | **P1** — core workflows unusable | Platform-specific (Intel Mac), may indicate CPU architecture regression |
| **[#1622 — Cannot add custom models**](https://github.com/netease-youdao/LobsterAI/issues/1622) | 4+ months | **P1** — blocks BYO-model users | Model integration is core to the product; this may be driving users to competitors |
| **[#1617 — Skill deletion UI stale state**](https://github.com/netease-youdao/LobsterAI/issues/1617) | 4+ months | **P2** — data visibility mismatch | Small bug, but the **"restart doesn't fix it"** aspect suggests a deeper caching issue |
| **[#1632 — Local model mode breaks installed skills**](https://github.com/netease-youdao/LobsterAI/issues/1632) | 4+ months | **P1** — feature-degrading | Users switching to local models lose all skills; docs unclear on installation path |

### Stale PRs to Consolidate

| PR | Title | Concern |
|----|-------|---------|
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | Model selector UI refactor (open) | Long-running, risks merge conflicts with current release cadence |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | Global search fix & UX upgrade (open) | **Important fix and UX improvement** — double-filter bug in searches; wait, this is actively needed by users |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot electron group bump | Stale for 4+ months; electron 40→43 bump has security implications — should be merged or closed explicitly |

---

## Project Health Summary

| Metric | Assessment |
|--------|-----------|
| **Velocity** | 🟢 **High** — 16 PRs closed in 24h, weekly releases |
| **Backlog Hygiene** | 🟡 **Moderate** — 9 stale issues, 3 stale PRs |
| **Stability** | 🟠 **Needs attention** — 2 P0/P1 startup/functional bugs unresolved for 4+ months |
| **Community Sentiment** | 🟡 **Mixed** — responsiveness to features is good; crash backlog undermines confidence |
| **Roadmap Alignment** | 🟢 **Strong** — engine-agnostic strategy is clear; UX polish is consistent |

**Top Recommendation:** Prioritize startup crash (#1587) and Intel Mac session bugs (#1589) in the next release; these have been open for over 4 months and directly undermine core product reliability.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Based on the GitHub data from Moltis (moltis-org/moltis) for 2026-08-19, here is the project digest:

---

## Moltis Project Digest — 2026-08-19

### 1. Today's Overview
Moltis shows a strong, healthy development velocity. The project saw 6 Pull Requests updated within the last 24 hours, with a substantial majority (5) being merged or closed. Activity was concentrated on infrastructure fixes and feature expansion, particularly around containerization (Podman), API routing, and a new Files library. Two pre-existing bug reports were closed during this period, indicating an effective triage process. Two new releases were cut, signaling confidence in the stability of recent changes.

### 2. Releases
Two new releases were published, both versions `20260818.06` and `20260818.08`. 
- **Details:** The provided data does not include specific changelog details for these releases.
- **Analysis:** The cadence of two releases in one day suggests that `20260818.06` may have contained the core features (e.g., the Files library), while `20260818.08` was a hotfix release to address a regression or critical bug found immediately after the first deploy (likely related to the `heartbeat.update` fix in PR #1209).
- **Note:** No explicit migration or breaking change notes are available in the provided data.

### 3. Project Progress
Five PRs were merged/closed, advancing several key areas:
- **Containerization (Podman) Fix:** [PR #1106](https://github.com/moltis-org/moltis/pull/1106) was merged, adding explicit escape hatches and improving diagnostics for Podman sandboxes. This closes the long-standing bug [#1095](https://github.com/moltis-org/moltis/issues/1095).
- **API Stability:** [PR #1209](https://github.com/moltis-org/moltis/pull/1209) fixed a critical bug where `heartbeat.update` parameters were treated as a full config replacement instead of a patch, resolving issue [#1187](https://github.com/moltis-org/moltis/issues/1187).
- **AI Routing:** [PR #1198](https://github.com/moltis-org/moltis/pull/1198) improved AI integration by routing OpenAI reasoning tool calls through the Responses API while preserving compatibility for other providers.
- **New Feature Base:** [PR #1206](https://github.com/moltis-org/moltis/pull/1206) introduced a persistent Files library with authenticated API endpoints and a settings browser, expanding Moltis beyond simple chat.
- **Documentation/Repo Health:** [PR #1211](https://github.com/moltis-org/moltis/pull/1211) restored the broken star history chart in the README.

### 4. Community Hot Topics
- **Podman Support (Resolved):** [Issue #1095](https://github.com/moltis-org/moltis/issues/1095) about Podman not working had 2 comments and remained open for over two months before being closed. The underlying need was for robust container support outside of Docker, which was finally addressed by the merge of PR #1106.
- **Configuration Patching (Resolved):** [Issue #1187](https://github.com/moltis-org/moltis/issues/1187) regarding the Settings UI silently resetting fields was a UX/data-loss concern. It highlighted the need for predictable configuration management, now fixed via PR #1209.

### 5. Bugs & Stability
- **High Severity - Config Data Loss (Fixed):** `heartbeat.update` was overwriting the entire config with defaults for unspecified fields, leading to silent data loss. ***Status:*** Fixed by [PR #1209](https://github.com/moltis-org/moltis/pull/1209).
- **Medium Severity - Container Runtime Failure (Fixed):** Podman interaction was broken, preventing users on that runtime from using the tool. ***Status:*** Fixed by [PR #1106](https://github.com/moltis-org/moltis/pull/1106).
- **Low Severity - Documentation (Fixed):** Broken star history chart in the README. ***Status:*** Fixed by [PR #1211](https://github.com/moltis-org/moltis/pull/1211).
- **Assessment:** All known bugs have been addressed within 24 hours of alert, indicating an excellent and responsive stability posture.

### 6. Feature Requests & Roadmap Signals
- **Files Library:** The merge of [PR #1206](https://github.com/moltis-org/moltis/pull/1206) introduces a new "Files" feature that allows users to manage a persistent data directory. This is a major signal that Moltis is evolving from a chat-only interface to a full AI agent workspace with data management capabilities.
- **Tesla Fleet API Connector:** The proposal for a [Tesla Fleet API connector (PR #1210)](https://github.com/moltis-org/moltis/pull/1210) is currently open. This suggests the roadmap is looking at specialized tool integrations for real-world device data sync, moving towards broader IoT and lifestyle integrations.
- **Prediction:** The next versions will likely focus on stabilizing the Files library based on user feedback and resolving the open Tesla connector PR for inclusion in a future release.

### 7. User Feedback Summary
- **Pain Points:** Users were actively frustrated by the lack of Podman support and the configuration persistence bug. The issue [#1095](https://github.com/moltis-org/moltis/issues/1095) was open for over 2 months, indicating a specific demand for non-Docker containerization. The silent reset behavior of the settings UI ( [#1187](https://github.com/moltis-org/moltis/issues/1187)) is a classic "data integrity" concern that erodes user trust.
- **Satisfaction:** The rapid closing of both issues suggests high responsiveness to core user needs. Furthermore, the willingness of a contributor (CrustyMozarella) to fix the README chart indicates a healthy community spirit.
- **Use Cases:** Users are utilizing Moltis for complex development workflows (requiring Podman) and are highly sensitive to configuration stability, which is critical for production use.

### 8. Backlog Watch
- **[PR #1210: Tesla Fleet API connector](https://github.com/moltis-org/moltis/pull/1210) (OPEN):** This is the only open PR in the latest batch. It proposes a substantial new feature. It is likely waiting for final review or CI validation before merge.
- **No Stale Critical Issues:** There are no unresolved critical bugs visible in the provided data that have been left unanswered by maintainers. The project backlog appears clean regarding recent user-facing defects.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-19

## 1. Today's Overview

CoPaw (QwenPaw) is showing a **high-velocity development cycle**. In the last 24 hours, 45 issues and 50 PRs were updated, with 16 issues and 19 PRs reaching closed/merged state — a healthy 35% closure rate for issues and 38% for PRs. The project has **no new releases** today, with stable `2.1.0` being the current version (referenced in most bug reports). Development activity is heavily focused on **stability fixes** (sandbox, MCP transport reliability, OAuth2 token rotation), **security hardening** (shell evasion, key file permissions, malware false positives), and **quality-of-life improvements** (skill pool search, message deletion, file preview options). The volume of **first-time-contributor PRs** (8 of the top 20) is a strong indicator of a healthy, welcoming open-source community, though it also means maintainers are spending significant time on review. Notably, several issues reference an `agentscope-ai/QwenPaw` URL convention rather than the `CoPaw` repo name, suggesting the project may have been rebranded or forked into the AgentScope organization.

## 2. Releases

**No new releases** were published in this 24-hour window. The stable version remains `v2.1.0` (referenced by most current bug reports seeking ≥2.1.0 fixes). Users running `2.0.1` are reporting issues that appear fixed in `2.1.0` (e.g., tool-call crashes, local model connectivity). There is no migration note available. Beta channel (`2.1.0b2`) appears active, and users running `main` branch builds are helping test upcoming fixes.

## 3. Project Progress

**Key merged/closed PRs (17 total):**

| PR | Title | Type | Significance |
|---|---|---|---|
| [#7122](https://github.com/agentscope-ai/QwenPaw/pull/7122) | Feature/biz kb | New feature (first-time) | Business knowledge base integration |
| [#6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) | fix(providers): honor Retry-After cap on streaming retry | Bug fix | Rate-limit/streaming reliability; addresses issues around task freezing (#7102) and retry storms |
| [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) | feat(console): add background chat task list API | Feature (first-time) | Foundational API for multi-agent coordination; minimal path of issue #7056 |
| [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) | fix(cli): sync top-level text on cron update --text for agent jobs | Bug fix | CLI consistency fix |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers | Bug fix | **Critical for remote MCP reliability** — fixes #7053 (XMind OAuth) |
| [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) | fix(console): render data-URL images in historical messages on session reload | Bug fix | UI/UX: restores chat history image display |
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Agent tool-call crash (inspected) | Bug fix | `async for` over coroutine TypeError — **critical bug that caused consistent crashes on tool calls**, reportedly fixed in latest 2.1.0 patch |

Additional closed/merged PRs: shell evasion enhancements (#7120 — now default-on), video tool-result delivery for OpenAI Responses API (#7061), `view_video` cap configurable (#7071), remote bridge endpoint for Chrome plugin (#7054), skill-bound de-duplication (#7097), and workspace-over-builtin skill precedence.

**Architecture/progress signals:** PRs #7112 (local QwenPaw Pro control plane) and #6990 (file cache to reduce I/O at scale) indicate the team is investing in **multi-tenancy and performance at scale**, positioning QwenPaw beyond personal assistant use.

## 4. Community Hot Topics

The most active discussions reveal **where users struggle the most**:

1. **[#6684 — Channel auto-retry/health-check (10 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6684)** — Using self-hosted Matrix, QwenPaw connects before Matrix is ready at boot, and there's no retry or health-check to recover. User must manually re-save the channel each boot. *Underlying need: self-healing infrastructure for channel integrations; resilient startup sequencing.*

2. **[#6921 — Agent stops mid-task after "planning" statements, needs prompt to continue (8 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6921)** — Multi-step tasks halt silently (e.g., after "Now 2.1, 3.1, 3.2. Let me do all three.") with no user-visible signal. *Root cause appears related to the coroutine-vs-async-generator crash (#7063) that was fixed — worth verifying if the fix resolves this issue.*

3. **[#7102 — Freeze >10min with GLM 5.3 (7 comments)](https://github.com/agentscope-ai/QwenPaw/issues/7102)** — User reports total unresponsiveness (no tokens, no thinking). Attributed in comments to provider/streaming issues rather than local.

4. **[#7011 — Console "stop" request kills active Feishu session (7 comments)](https://github.com/agentscope-ai/QwenPaw/issues/7011)** — Cross-session identity leak: session ID values crossed between two UI sessions, causing one console stop request to cancel an unrelated live conversation. *Critical for multi-session power users.*

5. **[#6470 — MCP driver ignores transport config, hardcodes SSE (5 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6470)** — `streamable_http` servers fail because `_setup_transport` uses `sse_client` regardless of YAML config. *Related: #5900 (no auto-reconnect). This is a two-part MCP reliability problem.*

## 5. Bugs & Stability

**Ranked by severity:**

| Severity | Issue | Description | Fix status |
|---|---|---|---|
| **Critical** | [#7063](https://github.com/agentscope-ai/QwenPaw/pull/7063) | Consistent crash on any tool call — `async for` over coroutine → `TypeError` | Fixed (merged; in 2.1.0) |
| **High** | [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | An undownloadable image URL in context **kills the entire session** (irrecoverable except `/clear`) | No fix PR yet — **should be a top priority** |
| **High** | [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) | Corrupt `envs.json` silently discards all env vars, then overwrites them permanently (silent data loss) | PR #7119 addresses key-file permissions, but this data-loss path itself appears unpatched |
| **High** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console stop request cancels active Feishu session (session identity crossing) | No fix PR yet |
| **High** | [#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) | Pydantic error: `_StructuredOutputDynamicClass is not fully defined` — blocks console channel agent startup | No fix PR yet |
| **Medium** | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) + [#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900) | MCP: transport config ignored (hardcoded SSE); no auto-reconnect — servers "permanently skipped" | No fix PR merged yet |
| **Medium** | [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | High-frequency crashes requiring page refresh to restart | Investigating (need-info) |
| **Medium** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Silent mid-task stops | Likely fixed by #7063, pending user verification |
| **Medium** | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | Freeze >10min with GLM 5.3 | No fix PR yet |
| **Low** | [#7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) | Flaky nightly test (timing assertion on macOS runners) | CI infra issue |

**Security:**
- [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) — MalwareBytes flags the Windows desktop build as "Trojan Loader." Community is split on false positive vs real (user uninstalled pending verification). **Needs an official maintainer response.**
- [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) — Master key file created with broad permissions (not 0o600 as documented); **security fix merged** via PR.
- [#7120](https://github.com/agentscope-ai/QwenPaw/pull/7120) — All 7 shell-evasion security checks now **enabled by default** — substantial hardening win.

## 6. Feature Requests & Roadmap Signals

**High-signal requests from the last 24h:**

1. **[#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) — Skill pool search/filter** — interactive `skills config` is unusable with hundreds of skills (checklist without search). *Likely to land in the next minor release (2.1.x) as a UX quick win.*

2. **[#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) — Plugin API: `system_prompt` override permission** — enterprise users need to hide their system prompt from end users after submission.

3. **[#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) — Per-agent/per-session `reasoning_effort` override** — currently model-global; different roles require different thinking depth. *Fits the multi-agent Pro direction.*

4. **[#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) — Isolated local QwenPaw Pro control plane** — draft PR; multi-user account management, tenant-scoped runtimes. *Strong signal: the project is moving upmarket toward enterprise/organization deployment.*

5. **[#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) — Delete single messages in chat history** — closed (resolved), so the feature likely shipped in 2.1.0.

6. **[#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) — Collapsible tool-call/thinking sections** — closed with the result being improved presentation. Users still ask for result-first presentation (outcome over process).

**Predictions for next version:** Skill pool search (#7090) and `reasoning_effort` overrides (#7062) are cheap, high-value features likely in `2.1.x`. The Pro control plane (#7112) is a larger directional bet, likely for a dedicated `3.x` line. The high volume of first-time contributor activity suggests the team may batch small fixes into a `2.1.1` patch soon.

## 7. User Feedback Summary

- **Workflow disruption from silent agent stops:** Multiple users (rerbin, wheza99) report the agent planning the next step then halting without feedback. Even with the #7063 fix, the absence of progress/status UI signals remains a UX gap (#6260, closed, asked for collapsible result-first UI).
- **Matrix/self-host resilience frustration:** For users self-hosting Matrix and feeding QwenPaw via custom bridges, the lack of retry/health-check on startup (issue #6684) forces repeated manual intervention — undermines "set-and-forget" automation value.
- **MCP ecosystem pain is significant:** Three separate MCP issues in the top comment count (#6470, #5900, #7053) all concern transport/reconnection/OAuth reliability. Users adopting remote MCP services (XMind, custom Streamable HTTP) are hitting hard walls. The merged 🔑 token-rotation fix (#7066) is a meaningful step.
- **Windows desktop build is actively watched:** MalwareBytes false-positive reports (#6775) are not yet officially dismissed, which could erode trust for Windows users. The frequent "freeze/restart" incidents (#7074) compound this.
- **Positive sentiment on 2.1.0 improvements:** Users explicitly noted "公式显示正常了" (formula display fixed) and general improvement ("很多改善") in the 2.1.0 upgrade despite the new-session bug (#7039).
- **Admin tooling appetite:** Responses to the task list API (#7072) and background task improvements reveal demand for programmatic control (cron jobs, CLI consistency fixes).
- **Data-loss concerns are surfacing:** envs.json corruption (#7118), image-URL session death (#7110), and chat history not loading (#7065) all represent invisible, silent failure modes — these erode trust fastest.

## 8. Backlog Watch

**Issues/PRs likely needing maintainer attention:**

1. **[#6470 — MCP transport config ignored (opened 2026-07-26, 5 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6470)** — 24 days unresolved; paired with #5900 (no auto-reconnect) this blocks an entire class of MCP servers.
2. **[#6775 — Malware false positive (opened 2026-08-07)](https://github.com/agentscope-ai/QwenPaw/issues/6775)** — Unanswered security concern on Windows builds; user has uninstalled. Needs an official statement on signing/hash for verification.
3. **[#6684 — Matrix channel auto-retry (opened 2026-08-04)](https://github.com/agentscope-ai/QwenPaw/issues/6684)** — Multiple upvotes/activity; self-managed channel reliability is a core value proposition for self-hosters.
4. **[#7005 — Shabox blocks uv cache writes (opened 2026-08-13)](https://github.com/agentscope-ai/QwenPaw/issues/7005)** — A policy `Write(~/.cache/uv/**)` workaround that doesn't work — PR #7116 (expand `~` / `${VAR}` in policy mounts) directly addresses this and should be reviewed and merged.
5. **[#6800 — Intelligent email management assistant PR (opened 2026-08-07)](https://github.com/agentscope-ai/QwenPaw/pull/6800)** — First-time-contributor, no maintainer response in 11 days. Either assign a reviewer or auto-close with guidance to keep contributor morale.
6. **[#6515 — Volcengine Agent Plan & MiMo V2.5 providers (opened 2026-07-28)](https://github.com/agentscope-ai/QwenPaw/pull/6515)** — Large provider addition; needs attention to avoid blocking registry changes.
7. **[#7118 — envs.json corruption data loss (opened 2026-08-18 — yesterday)](https://github.com/agentscope-ai/QwenPaw/issues/7118)** — New but severe; silent data-loss path needs an immediate maintainer confirmation and fix.
8. **[#7082 — Pydantic `_StructuredOutputDynamicClass` failure (opened 2026-08-17)](https://github.com/agentscope-ai/QwenPaw/issues/7082)** — Blocks console channel entirely for affected users; new but needs priority triage.

---

**Overall assessment:** The project is **healthy and fast-moving**, with a strong contributor pipeline and clear focus on hardening (security defaults, MCP/OAuth reliability, crash fixes). The main risk areas are **silent data-loss paths** (#7118, #7110) and **unaddressed security communications** (#6775). The directional bet on multi-agent enterprise features (#7112, #7062, #7072) suggests a major version on the horizon, but the community's day-to-day pain is infrastructure reliability (MCP, Matrix, sandbox). Maintaining velocity on those stability fixes will preserve the trust that is driving community growth.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-19

## 1. Today's Overview

ZeroClaw remains highly active, with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a steady cadence of public discussion (31 open/active issues vs. 19 closed) and a strong PR pipeline (48 open PRs), though only 2 PRs were merged/closed today, indicating a review bottleneck rather than a slowdown in author output. A high volume of `risk:high` labels on both issues (14) and open PRs (15) suggests the team is actively working through complex architectural and security-sensitive changes. Notably, many open PRs carry `do-not-merge` and `needs-maintainer-review` labels, suggesting a deliberate, quality-gated approach to merging large (size:L/XL) changes. No new releases were published today.

## 2. Releases

No new releases were published in this reporting window. The latest release remains unchanged.

## 3. Project Progress

Two PRs were merged or closed today:

- **fix(memory): key conversation autosave suppression on turn origin** ([#10009](https://github.com/zeroclaw-labs/zeroclaw/pull/10009)) by JordanTheJet — Fixed a position-dependent filter that sniffed prompt prefixes to decide what conversation data to autosave. The heartbeat worker was defeating the filter, causing unwanted autosaves. This is a `priority:p1` bug fix for the memory subsystem.

- **ci: Advisory scan failed — 2026-08-18** ([#10097](https://github.com/zeroclaw-labs/zeroclaw/issues/10097)) — A dependency advisory scan failed; the issue was closed, suggesting the team quickly addressed or triaged the advisory (likely adding an ignore entry or updating a dependency).

Several high-activity features advanced through the PR pipeline this week, though none were merged: native Hailo-Ollama support ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)), Grok Build ACP model provider ([#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104)), and HTTP fan-in for SOPs ([#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203)).

## 4. Community Hot Topics

The most active and commented items reveal key community concerns:

1. **RFC: Goal mode v1 — bounded foreground Matrix work** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — 22 comments, 1 👍. Users are intensely debating how ZeroClaw should handle multi-turn bounded objectives. The community is pushing back on scope creep (restart handoff, broad channel admission, Web, async child work) and wants a focused, durable goal-tracking mechanism.

2. **74 test failures on Windows** ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) — 17 comments. A significant pain point; the test suite is broken on Windows 11 (Simplified Chinese, code page 936) and CI only runs on Linux. This is a priority:p1 bug that undermines cross-platform credibility.

3. **Unify slash-command registries across surfaces** ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)) — 8 comments. Users want consistent slash commands across web UI, ZeroCode TUI, and channel runtime; the current drift causes inconsistency and maintenance burden.

4. **Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs** ([#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)) — 6 comments. Security-conscious users are tracking the audit/deny drift and unresolved wasmtime CVEs.

5. **SOPs not available through web dashboard** ([#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)) — 5 comments, closed (S1 workflow blocked). The agent runtime was not detecting configured SOPs; this was a workflow-blocking bug that has been resolved.

## 5. Bugs & Stability

Issues reported or active today, ranked by severity:

- **priority:p1 (S1 — workflow blocked):**
  - **SOPs not available to agent via web dashboard chat** ([#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)) — CLOSED. Agent runtime did not detect configured SOPs. Resolved.
  - **MCP/tool-schema cloning drives unbounded RSS growth** ([#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)) — OPEN, help wanted. Memory leak in agent loop; split from the OOM tracker #5542. Fix PR #8633 addresses the restart-storm component, but this memory path remains open.
  - **Channel tasks need a no-reply outcome** ([#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)) — OPEN. Conditional channel tasks still send visible responses when silence is intended.

- **priority:p1 (S2 — degraded behavior):**
  - **74 test failures on Windows** ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) — OPEN. Unix-only test commands and path semantics break the suite on Windows.

- **Security-related (risk:high):**
  - **wasmtime-wasi CVEs / cargo-audit drift** ([#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)) — OPEN. Multiple wasmtime CVEs are still un-remediated.
  - **Advisory scan failed on 2026-08-18** ([#10097](https://github.com/zeroclaw-labs/zeroclaw/issues/10097)) — CLOSED. Likely triaged by adding a deny.toml ignore entry.

Fix PRs in flight for stability issues: `fix(runtime): avoid nesting Docker sandbox inside Docker runtime` ([#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402)), `fix(runtime): capture skill-review fork messages instead of slicing trimmed history` ([#9515](https://github.com/zeroclaw-labs/zeroclaw/pull/9515)), and `fix(providers): rotate live credentials after rate limits` ([#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)) — all awaiting maintainer review.

## 6. Feature Requests & Roadmap Signals

Strong signals for near-term features:

- **Goal mode (multi-turn bounded objectives)** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — Likely a v0.9 or v1.0 pillar; the RFC is under heavy community discussion and needs scope trimming.
- **Session-scoped persistent prompt attachments** ([#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998)) — Fresh RFC (created 4 days ago) addressing objective loss after history trimming/restart; highly relevant to production users.
- **Unified slash-command registries** ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)) — A quality-of-life architectural cleanup that will likely land as a refactor PR.
- **New model providers in flight:** Hailo-Ollama ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)) and Grok Build ACP ([#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104)) — These suggest the roadmap is broadening hardware (Hailo) and frontier-model (Grok) support.
- **Anthropic stored OAuth profiles** ([#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)) — Enterprise-grade auth is clearly a roadmap item.
- **KeySource trait + FileKeySource** ([#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194)) — Master-key provisioning abstraction, likely for compliance/enterprise.
- **DingTalk streaming support** ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)) — Point solution for latency-sensitive channel users.

Predictions for the next minor release: Goal mode v1 (scoped), session TTL enforcement ([#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)), and slash-command unification.

## 7. User Feedback Summary

User sentiment is generally positive with strong engagement on RFCs and design discussions, but several concrete pain points emerge:

- **Cross-platform reliability:** Windows test failures (17 comments) and Windows self-update path breakage signal that the project is perceived as Linux-first. Users are actively requesting Windows coverage ([#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910)).
- **Session persistence and context loss:** Multiple issues ([#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998), [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)) indicate users are running real production workloads and need durable, bounded task execution.
- **Memory growth in long-running agents:** The OOM split ([#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)) is a "help wanted" issue; the community is engaged but needs maintainer support to fix the RSS growth.
- **Config and capability discoverability:** [Feature] #8367 (derived capability readiness) and #8383 (show active runtime context in ZeroCode Dashboard) show users want better visibility into what the runtime can actually do.
- **Secret/policy management:** The push for OAuth profiles, KeySource, and the Google STT API key fix ([#10107](https://github.com/zeroclaw-labs/zeroclaw/pull/10107)) demonstrate a security-conscious user base deploying in production.

## 8. Backlog Watch

Items needing maintainer attention:

- **RFC: Unify the three agent turn engines** ([#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)) — Closed, but the underlying consolidation (PR #7540) continues to generate follow-up bugs (#8642). Maintainers should track the fallout carefully.
- **wasmtime-wasi CVE remediation** ([#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)) — Open since June 30 with only 6 comments; security-critical and needs a decision on upgrade path.
- **Windows runtime test coverage for self-update** ([#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910)) — Open since June 18, priority:p3, but the underlying bug was priority:p1. Low activity; may be deprioritized.
- **Trackers for cleanup/audit:** Drift audit ([#8858](https://github.com/zeroclaw-labs/zeroclaw/issues/8858)) and zerorelay milestone ([#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)) are long-running with minimal recent discussion.
- **Large, do-not-merge PRs awaiting review:** Many XL-sized PRs (e.g., [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104), [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194), [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)) are sitting with `needs-maintainer-review` and `do-not-merge` for 3+ weeks. The maintainer team appears to be the bottleneck; this could slow feature velocity and frustrate contributors (5 PRs have `needs-author-action` in response to review feedback).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*