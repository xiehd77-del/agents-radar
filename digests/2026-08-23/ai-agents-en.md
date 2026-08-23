# OpenClaw Ecosystem Digest 2026-08-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-23 01:25 UTC

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

Based on the GitHub data provided for OpenClaw (github.com/openclaw/openclaw) for 2026-08-23, here is the structured project digest:

---

### 1. Today's Overview

OpenClaw remains highly active with a significant volume of triage work; 500 issues and 500 PRs were updated in the last 24 hours. The repository reflects a project in a heavy maintenance and stabilization phase, with a large backlog of open bugs and feature requests awaiting maintainer review (over 430 open PRs). While no new releases were published today, the activity is dominated by addressing regressions and critical bugs, particularly around the recently released `v2026.8.1-beta.2`. The number of open issues requiring product decisions and maintainer review suggests that while the community is very engaged, the maintainer team may be a bottleneck in processing feedback and fixes.

### 2. Releases

No new releases were published in the last 24 hours. The most recent release appears to be `v2026.8.1-beta.2`, which is currently the subject of validation and several bug reports.

### 3. Project Progress

Today's data shows a mix of merged/closed and still-open PRs. There were 63 merged/closed PRs in the last day. Key changes that have been addressed or are in progress include:

- **Security & Platform Integrity**: PR #126424 (closed) "fix(gateway): keep conversation delivery within agent bindings" aims to fix a multi-agent security boundary issue. PR #116489 and #120900 (closed) touch on requiring acknowledgement for install policy warnings, enhancing security around plugin installation.
- **Critical Bug Fixes in Flight**: Several PRs target specific regressions and stability issues, including #128071 "fix: continue code mode with read-only recovery", #125299 "fix(doctor): report unavailable plugin manifests", and #127793 which focuses on UI simplification (#127793).
- **Channel & Infrastructure**: PR #123046 "fix(msteams): require dot boundary for shared-link host suffix match" closes a security vulnerability related to malicious look-alike URLs. Additionally, work is ongoing to fix HTTP subagent completion announces (#128068) and recover embedded channel runs in the chat startup projection (#123189).

### 4. Community Hot Topics

The most active discussions reveal deep technical pain points from power users:

- **Release Validation (#125626)**: The top issue is the community-driven validation of the `v2026.8.1-beta.2` release, indicating a structured process for quality assurance that is actively engaging testers.
- **Streaming Watchdog Timeout (#68596)**: With 8 👍, users are requesting a configurable timeout for the streaming watchdog, driven by models that perform extended reasoning (e.g., DeepSeek-R1, kimi-k2.5) and often trigger false-positive warnings.
- **WhatsApp Multimodal Wedge (#96834)**: This "platinum hermit" issue details a severe bug where inbound images on WhatsApp block the main message lane for ~3 minutes, causing session state issues. It highlights the fragility of multimodal processing.
- **Subagent Session Isolation (#85030)**: With 6 👍, this P1 bug reports that MCP tools are not injected into subagent sessions, meaning users cannot leverage their custom tools in parallel tasks. This is a core functionality gap for complex automations.

### 5. Bugs & Stability

The project is facing numerous stability challenges, with several P0 and P1 regressions reported. The most severe are:

- **P0: SQLite Corruption Recurs (#126821)**: A critical regression where pristine databases become corrupted within 15-24 hours of operation on WSL2, leading to crashes and a "paralyzed gateway" mode. No fix PR is linked currently.
- **P0: Event Loop Blocking in beta.2 (#124788)**: A critical performance bug in the latest beta where the event loop blocks for ~100 seconds every 10 minutes, causing widespread timeouts and service stalls.
- **P1: Memory Search Failures (#112196)**: A bug where transient sync timeouts are misdiagnosed as persistent provider failures, rendering memory features unavailable until restart.
- **P1: Silent Memory Persistence Failure (#126906)**: A dangerous bug where denying the `write` tool silently disables memory persistence, leading to data loss without any user warning.
- **P1: Context Overflow Failure Loop (#113701)**: Sessions enter an unrecoverable failure loop when large tool outputs exceed the context window, showing that context management is a critical pain point.
- **P1: Process Leaks & Zombies (#97616, #115450)**: Multiple reports of child processes (hooks, tools) not being properly reaped, leading to zombie accumulation and eventual runtime degradation.

Many of these issues have the `clawsweeper:needs-maintainer-review` label but lack a `linked-pr-open`, suggesting that fixes are not yet available for the most critical bugs.

### 6. Feature Requests & Roadmap Signals

These requests indicate where the community wants OpenClaw to evolve:

- **Configurable Streaming Watchdog (#68596)**: Users need flexibility to handle long-thinking models. This is a low-risk config addition and a likely candidate for a future release.
- **Graceful Gateway Restart with Session Recovery (#57425)**: A highly requested feature to preserve in-flight work across restarts. This is a complex architectural change but crucial for reliability and is likely on the long-term roadmap.
- **Per-Turn Send Budget Guard (#120491)**: An open PR for a guard to prevent duplicate-answer storms from message tools. This suggests a focus on improving agent behavior and preventing loops.
- **Durable Plugin Session State (#127982)**: An open PR to enable plugins to read their own state across turns/restarts, opening the door for more sophisticated plugin workflows.
- **UI/UX Overhaul (#75947)**: A request to redesign the UI based on UX scoring, indicating dissatisfaction with the current interface's density and navigability.

### 7. User Feedback Summary

User sentiment is mixed; while there is high engagement, it is largely driven by frustration with regressions and stability issues.

- **Frustration with Data Loss**: The hardest complaints center around silent failures that cause data loss, such as issues #126906 (memory persistence) and #48810 (compaction creating orphan forks).
- **Reliability Concerns**: The recurring `P0`/`P1` crashes and event-loop blocking issues (#124788, #126821) are severely impacting user trust in the platform's stability, especially on the beta channel.
- **Feature Gaps Hinder Advanced Use**: Power users are hitting walls with subagent capabilities, specifically the lack of MCP tool injection (#85030) and lost completions (#67777), limiting the potential for complex, multi-agent automations.
- **Praise for Security Focus**: The community is actively contributing security-related fixes (e.g., #123046), showing a collaborative effort to harden the platform. However, the `merge-risk: 🚨 security-boundary` label on many PRs indicates these changes are treated with appropriate caution.

### 8. Backlog Watch

Several long-standing, high-impact issues remain unaddressed, requiring maintainer attention:

- **Plugin Hooks: Missing Trace Context (#50291)**: Open since March 19, 2026. This P2 issue is crucial for observability and debugging distributed traces but has received no new fixes.
- **Hardcoded Workspace Path (#51429)**: Open since March 21, 2026. This bug report (albeit in Chinese) suggests a hardcoded user path was merged, causing incorrect workspace creation. The fact that it remains open and needs a product decision is concerning.
- **Subagent Session MCP Injection (#85030)**: Open since May 21, 2026. This P1 issue severely limits subagent capabilities and has strong community interest (6 👍) but is still waiting for a maintainer review and fix.
- **Supervisor Mode EADDRINUSE Loop (#89791)**: Open since June 3, 2026. This installation bug can cause a 30-second error loop on startup for users with dual-plist installs. It's labeled as `not-repro-on-main` and needs maintainer investigation.
- **Backup Verification Failure (#89257)**: Open since June 1, 2026. This P1 bug causes the `backup create --verify` command to fail and leave corrupt archives, directly impacting users' ability to manage data safely.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-23 | **Data Window:** Last 24 hours

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is characterized by **high-velocity iteration with a strong emphasis on stabilization** across all major projects. The dominant themes are reliability (crash fixes, timeout handling, memory persistence), security hardening (hook fail-closed policies, OAuth fixes, sandbox egress controls), and cross-platform parity (Windows-specific bugs, timezone-robust tests). The ecosystem is bifurcating into two development modes: **core infrastructure projects** (OpenClaw, ZeroClaw, Hermes Agent) are wrestling with architectural scale and technical debt, while **niche and specialized agents** (NanoBot, IronClaw, CoPaw, PicoClaw) are rapidly shipping feature-complete experiences with tighter scopes. User feedback across all projects shows a consistent demand for **configurable visibility, graceful failure modes, and predictable behavior under extreme conditions** (long contexts, large images, unreachable backends). The space is mature enough that UX polish and data integrity are now as critical as raw agent capability.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Open PRs | Releases (24h) | Merged/Closed PRs | Health Score* |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 430+ | None | 63 | ⚠️ **Strained** — massive backlog, P0 regressions unpatched |
| **ZeroClaw** | 50 | 50 | — | None | 7 | ✅ **Good** — responsive merges, active triage |
| **Hermes Agent** | 50 | 50 | 43 | None | ~10 | ⚠️ **Strained** — fix-heavy, technical debt, meta-issues |
| **NanoClaw** | 1 | 26 | 18 | None | 8 | ✅ **Excellent** — low issue count, high PR throughput |
| **NanoBot** | — | — | 14 | None | 6 | ✅ **Good** — maintainer-led, quick closures |
| **IronClaw** | 5 | 16 | 16 | None | 5 | ✅ **Good** — structured, phased work |
| **PicoClaw** | 2 | 6 | — | None | 4 | ⚠️ **Moderate** — stale bot flags, critical fix pending |
| **LobsterAI** | — | 6 | — | None | 5 | ✅ **Good** — backlog pruning, UX fixes |
| **CoPaw** | 7 | 4 | 4 | None | 0 | ⚠️ **Moderate** — 16-day-old contributor PRs unreviewed |
| **Moltis** | 1 | 3 | 3 | None | 0 | ✅ **Stable** — mid-cycle review phase |
| **NullClaw** | — | — | — | — | — | 💤 Inactive |
| **TinyClaw** | — | — | — | — | — | 💤 Inactive |
| **ZeptoClaw** | — | — | — | — | — | 💤 Inactive |

*\*Health Score = qualitative blend of merge velocity, backlog age, unresolved critical bugs, and contributor responsiveness.*

---

## 3. OpenClaw's Position

**OpenClaw remains the undisputed reference implementation** for personal AI assistants, evidenced by its sheer scale: 500 issues and 500 PRs updated in a single day—an order of magnitude beyond any peer. This dominance creates a double-edged dynamic:

- **Advantages:** Largest contributor base, deepest integration surface (WhatsApp, MSTeams, multi-agent security boundaries), and most mature release validation process (community-driven beta validation per #125626). It is the default template from which many other projects (PicoClaw, NanoClaw, CoPaw, etc.) are derived or inspired.
- **Technical approach:** OpenClaw favors a **gateway-centric, binding-based multi-agent architecture** with a unified runtime. It is the most ambitious in scope, attempting to manage agents, channels, plugins, and memory as a cohesive distributed system.
- **Achilles' heel:** The maintainer team is a bottleneck. 430+ open PRs, P0 regressions without linked fixes (SQLite corruption #126821, event-loop blocking #124788), and long-standing P1s (MCP subagent injection #85030) suggest the **complexity budget is exceeded**. Competitors with tighter scopes (ZeroClaw's WASM plugin model, NanoBot's native provider stack) may offer superior stability-per-feature.
- **Community size:** The engagement data (👍 counts, comment volumes) shows OpenClaw's user base is vast but **increasingly vocal about stability**. The platform's reputation is at risk if P0s persist across releases.

---

## 4. Shared Technical Focus Areas

**Cross-project patterns identify five universal requirements emerging from user demand:**

| Focus Area | Projects Affected | Specific Need |
|---|---|---|
| **Graceful degradation on backend failure** | OpenClaw, PicoClaw, CoPaw, Moltis, ZeroClaw | MCP server unreachable, provider timeouts, or oversized images must not hang the agent loop or kill the session. Fail-closed vs. fail-open policies (Moltis #1230) are being debated. |
| **Context & memory lifecycle management** | OpenClaw, IronClaw, ZeroClaw, Hermes Agent, NanoBot | Large token budgets (DeepSeek 500k, 227M token runs) cause cost blowups, context-compression hangs, and silent memory persistence failures. This is the most expensive pain point across the ecosystem. |
| **Timeout & watchdog configurability** | OpenClaw, Hermes Agent, ZeroClaw, PicoClaw | Long-thinking models (DeepSeek-R1, kimi-k2.5) trigger false-positive streaming watchdogs. Local models need 120s+ timeouts. A universal need for configurable, per-model timeout tuning. |
| **Cross-platform parity (Windows/Linux)** | Hermes Agent, ZeroClaw, IronClaw, CoPaw | Windows-specific bugs (Docker mount paths, broken .desktop files, UTF-8 encoding) and timezone-dependent test failures are forcing projects to invest in platform-agnostic CI and runtime behavior. |
| **Observer pattern / retry UX** | LobsterAI, OpenClaw, NanoBot, IronClaw | Users want visible, actionable error states: retry buttons, clear blocker descriptions in setup wizards, and surface of root-cause errors instead of generic envelopes. |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---|---|---|---|---|
| **OpenClaw** | Full-featured personal assistant gateway | Power users, multi-agent automation | Gateway + bindings (channels), agent runtime, plugin system | **Breadth of integrations** — the only project attempting universal platform coverage |
| **Hermes Agent** | Fork/derivative with heavy desktop focus | Individual professionals, long-session users | Desktop app + gateway, fleet update management | **Desktop-first experience** (Windows/macOS) and multi-device sync ambitions |
| **ZeroClaw** | Stability-focused reimplementation | Production, security-conscious users | Runtime-owned sessions, WASM plugin distribution | **WASM plugin isolation** and strong security hardening (authenticated fan-in, CA trust) |
| **NanoBot** | Research-grade, observable agents | Developers, LLM-integration builders | Native provider stack, trajectory/usage telemetry | **Unified usage contracts** and deep LangSmith/observability integration |
| **IronClaw** | Autonomous coding agent | Developers, CI/CD automation | Sandbox with egress auth, omp core-tool contract, lifecycle hooks | **Engineering rigor** — sized/risk-rated PRs, benchmark-gated changes |
| **NanoClaw** | Lightweight, adapter-centric assistant | Hobbyists, small deployments | Chat adapter connectors (Telegram, Slack), setup wizard | **Setup simplicity** and multi-bot/telegram-first UX |
| **PicoClaw** | Single-binary assistant runtime | Embedded/edge users, tinkerers | Unified agent loop, exec/cron tooling | **Low footprint** and skills-as-dependency-manager evolution |
| **CoPaw** | Task-focused AI assistant | Chinese-speaking users, desktop GUI | Docker deployment, chron jobs, media-rich payloads | **Multi-modal handling** and GUI-first UX |
| **LobsterAI** | Studio/cowork collaboration assistant | Teams, workflow automation | Cowork sessions, web-search, custom providers up to 20 | **Collaboration-centric** (Cowork module) and Markdown export focus |
| **Moltis** | Mini-agent for policy enforcement | Security-conscious devs | Hooks (BeforeToolCall), browser automation, MCP | **Security boundary focus** — the only project explicitly debating fail-closed policies |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (Feature-forward, High Throughput):**
- **NanoClaw** (8 merges/24h, 1 open issue): Effectively "unblocked" — community is catching bugs before users do. Mature.
- **IronClaw** (5 merges, 4 parallel workstreams): Structured, measurement-gated development. Process maturity is infrastructure-grade.
- **ZeroClaw** (7 merges, 11 issue closures): Fast triage and RFC-driven architecture. Healthiest balance of design and execution.
- **NanoBot** (6 merges): Maintainer-led velocity with long-pending items finally resolved.

**Tier 2 — Stabilizing (Fix-heavy, Consolidation):**
- **OpenClaw** (63 merges but 430+ open PRs): Processing, not progressing. High churn on regressions.
- **Hermes Agent** (~10 merges, meta-issues on fleet reliability): Acknowledged systemic problems, corner-patch approach.
- **PicoClaw** (4 merges, backlog clearance): Cleaning spring backlog; critical fix still hanging.
- **LobsterAI** (5 merges, stale-closure focus): Healthy but low-volume — perhaps team-constrained.

**Tier 3 — Stagnant/Dormant:**
- **Moltis** (review phase, stable semantics): Not stalled but quiet.
- **CoPaw** (0 merges, 16-day-old PRs unreviewed): Contributor momentum at risk.
- **NullClaw, TinyClaw, ZeptoClaw** (no activity): Effectively frozen.

---

## 7. Trend Signals

**For AI agent developers, these are the extractable industry signals:**

1. **Stability is the new feature** — Across OpenClaw, Hermes, and ZeroClaw, the highest-severity issues are regressions, corruption, and silent failures. Users prefer fewer features that *work* over more features that *break*. Invest in compaction barriers, memory integrity, and graceful degradation.

2. **Token economics are a product constraint** — IronClaw's 4x token-bloat measurement (227.7M input tokens, $10.31 for one run) is the first quantified data point, but OpenClaw's context-overflow failure loops and Hermes's compression hangs tell the same story. **Cost-efficient context management is the next competitive moat.**

3. **Windows parity is now table-stakes** — Docker path translation, encoding, and installer bugs (Hermes, ZeroClaw, CoPaw) indicate a global user base that expects first-class non-Linux support. Projects ignoring this are bleeding users.

4. **Security hardening is accelerating** — Moltis's fail-closed hook debate, ZeroClaw's WASM isolation and authenticated fan-in, OpenClaw's security-boundary labels, and Hermes's OAuth fixes all point to a maturity phase where **deploys are production-adjacent** (fleet management, gateways).

5. **Multi-agent and multi-instance support is emerging as a requirement** — OpenClaw's subagent MCP injection, IronClaw's background subagents, NanoClaw's multi-bot/telegram flows, and ZeroClaw's runtime-owned sessions all signal a shift from single-agent to **agent-mesh** topologies.

6. **Configurability without complexity is the UX battleground** — Every project is adding toggles (timeouts, visibility, retry, media caps), but OpenClaw's config-init corruption bug and Hermes's config-file comment destruction show that **configuration systems themselves are a failure point** when not designed as first-class UX.

7. **Benchmark-gated development is the emerging standard** — IronClaw's measurement-gated /benchmark trigger, OpenClaw's community release validation, and NanoBot's telemetry-driven provider contracts represent a shift from "merge and hope" to **empirical, data-backed changes**.

---

*Report compiled from GitHub activity data collected on 2026-08-23. All metrics are 24-hour snapshots unless otherwise noted.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Based on the GitHub data for NanoBot (HKUDS/nanobot) on 2026-08-23, here is the project digest:

---

# NanoBot Project Digest — 2026-08-23

## 1. Today's Overview
Development activity remains **high** with
a significant focus on the WebUI, core runtime, and provider
abstractions. The project saw **6 PRs merged/closed** and **14 PRs
still open**, indicating a strong feature-development and bug-fixing
cadence. Notably, the maintainer team (Xubin Ren and Yongru Chen) is
active in **hardening telemetry, turn observability, and provider
usage contracts**, suggesting a push toward stability and
observability. No new releases were published today, with the last
release presumably being an earlier version. The backlog is healthy,
with most issues getting addressed through targeted PRs, although a
few long-running PRs (e.g., #3294, #4430) have been recently closed,
clearing the queue.

## 2. Releases
**No new releases were published on 2026-08-23.**
 There are no changelogs, breaking changes, or migration notes to report.

## 3. Project Progress
Six PRs were merged or closed today, reflecting a mix of
housekeeping, new features, and long-pending items being resolved:

-   **Docs & Credits (#5488, CLOSED)**: Refreshed the team and
    contributor credits on the repository landing page.
-   **WebUI Observability (#5486, CLOSED)**: Merged a significant
    feature unifying turn observability in the WebUI, projecting user
    turns into single answer surfaces while preserving ordered
    reasoning/tool segments.
-   **Web Fetch Provider (#4430, CLOSED)**: Resolved a long-pending
    feature to make the `web_fetch` provider configurable (supporting
    `auto`, `tavily`, `jina`, and `readability` modes).
-   **Dream Loop Config (#3294, CLOSED)**: Resolved a feature for the
    self-learning loop, adding a kill switch and custom template paths.
-   **DeepSeek Hardening (#3869, CLOSED)**: Closed a fix that
    sanitizes null/empty content and preserves assistant text for
    DeepSeek providers.
-   **Telegram Stability (#5156, CLOSED)**: Merged a fix for
    recovering from silently stalled Telegram polling.

## 4. Community Hot Topics
There are no issues with comments/reactions tracked in this data.
The most active PRs by discussion and review activity are primarily
authored by the maintainers (`chengyongru`, `Re-bin`), indicating a
tight development loop focused on architectural changes.

-   **[#5481 feat(trajectory): unified provider usage backend
    ](https://github.com/HKUDS/nanobot/pull/5481)** — a stacked PR
    part of a native stack, indicating a major refactoring effort is
    underway.
-   **[#5480 refactor(providers): define typed LLM usage
    contract](https://github.com/HKUDS/nanobot/pull/5480)** — also
    part of that same refactoring stack, signaling the core
    provider layer is undergoing significant internal changes.
-   These PRs represent an underlying need for **accurate telemetry
    and unified usage tracking** across different providers.

## 5. Bugs & Stability
Several bugs and regressions are being actively addressed. The
highest severity issues include:

-   **Session Deletion Bug (#5483, OPEN)**: High severity. A bug where
    delayed cross-session messages could recreate a deleted session.
    A fix PR is open.
-   **LangSmith Tracing Regression (#5485, OPEN)**: Medium severity.
    The migration to native providers broke LangSmith tracing. A fix
    PR is open to restore it.
-   **MCP Error Handling (#5484, OPEN)**: Medium severity. A bug where
    business-error envelopes from MCP servers are not flagged,
    causing the agent to treat failures as successes.
-   **Ephemeral SDK Runs (#5471, OPEN)**: Medium severity. The
    `ephemeral=True` flag does not currently leave session state
    unchanged, violating documented behavior.
-   **WebUI Answer Shell Bug (#5491, OPEN)**: Medium severity. A bug
    where answer text is incorrectly kept outside the reasoning shell
    across multiple tool-answer turns.

## 6. Feature Requests & Roadmap Signals
The project is clearly moving toward **enhanced observability and
user control**. Predicting the next version features, we see a strong
signal in the following PRs:

-   **Native Provider Stack (#5480, #5481, #5482)**: A unified typed
    usage contract and a full trajectory backend are almost
    certainly landing in the next release. This will enable a
    significant upgrade to how usage is tracked and displayed.
-   **Turn Recovery (#5420)**: User-controlled continuation of
    interrupted turns is a major UX feature that will likely be
    merged soon.
-   **Follow-up Suggestions (#5408)**: A feature to generate
    ephemeral, chat-scoped follow-up suggestions in the WebUI,
    similar to the DeerFlow interaction.
-   **WebUI Localization (#5367)**: Localizing agent activity labels
    across all 10 supported locales confirms a push for broader
    accessibility.

## 7. User Feedback Summary
The data shows an **active and engaged user base** submitting
specific bug reports and feature requests:

-   **Pain Point: Silent Failures** — Users are reporting
    stability issues like silently stalled Telegram polling (#5156)
    and MCP servers returning error envelopes without signaling errors
    (#5484). This suggests a need for more robust error surfacing and
    failover in production.
-   **Pain Point: DeepSeek Compatibility** — The community is
    actively working on issues where DeepSeek's API rejects messages
    with null content (#3869), indicating that DeepSeek is a popular
    provider and integration needs to be hardened.
-   **Feature Desire: Configuration Control** — Users want control
    over their setup, as seen in the expansion of the `web_fetch`
    provider configuration (#4430) and the Dream module's kill switch
    (#3294).
-   The maintainers appear to be highly responsive, quickly closing
    out long-pending items and actively addressing these community
    concerns.

## 8. Backlog Watch
The following PRs have been open for an extended period and may
require maintainer review or conflict resolution to be merged:

-   **[#5367 feat(webui): localize agent
    activity](https://github.com/HKUDS/nanobot/pull/5367)** — Open
    since 2026-08-13, flagged with `conflict`.
-   **[#5408 feat(webui): add follow-up
    suggestions](https://github.com/HKUDS/nanobot/pull/5408)** — Open
    since 2026-08-17, flagged with `conflict`.
-   **[#5420 feat(runtime): add user-controlled turn
    recovery](https://github.com/HKUDS/nanobot/pull/5420)** — Open
    since 2026-08-18, not flagged but has been open for a few days.
-   **[#5469 fix(tui): show measured request
    context](https://github.com/HKUDS/nanobot/pull/5469)** — Open
    since 2026-08-21, flagged with `conflict`.

These PRs are part of the broader WebUI and runtime improvements and
will likely need a rebase to resolve merge conflicts before they can
be merged.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the provided GitHub data for Hermes Agent (github.com/nousresearch/hermes-agent), here is the project digest for 2026-08-23.

---

### 1. Today's Overview

Hermes Agent is showing a high level of activity with 50 issues and 50 PRs updated in the last 24 hours. However, the "vibe" is distinctly fix-and-stabilize rather than feature-forward; today's PRs lean heavily toward bug fixes (especially in the Desktop app, install/update reliability, and platform-specific issues), security patches, and configuration preservation. Community engagement is intense, with several long-running, high-comment issues finally seeing PRs that address specific corner cases like auth failures, session state corruption, and cross-platform incompatibilities. While no new releases were cut today, the sheer volume of open PRs (43) suggests a substantial batch of improvements is likely imminent. The project is healthy in terms of throughput but is currently wrestling with technical debt and a complex multi-platform codebase.

---

### 2. Releases

No new releases were published on 2026-08-23.

---

### 3. Project Progress

This section covers PRs merged or closed today, focusing on the fixes and features they advanced.

- **Windows Docker Sandbox Fix (PR #92610, PR #92614 - Closed via #92610):** A critical fix for Windows users. The PR preserves POSIX Docker mount paths, allowing the agent to correctly translate container-side file paths (e.g., `/workspace/report.pdf`) back to host files for media delivery. This directly resolves a broken functionality for native Docker backend users on Windows.
- **Configuration Preservation (PR #92554 - Closed):** While this issue was closed (status `CLOSED`), the data suggests it was likely closed in tandem with a fix. The issue highlighted that writing `config.yaml` destroyed user comments. A fix here would be a significant quality-of-life improvement for users who rely on comments to document their setup.
- **Duplicate Security Fix (PR #92551 - Closed):** A duplicate issue regarding `computer_use` approval failing on gateway surfaces was closed, likely consolidated into a primary issue for tracking.
- **Honcho Memory Race Condition (PR #92465 - Closed):** A PR fixing a race condition in the Honcho memory provider was closed/merged. It serializes session flushes to prevent data corruption.

---

### 4. Community Hot Topics

These are the issues and PRs drawing the most attention and discussion, revealing key user pain points.

- **[Issue #66616: Skills Index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616) (78 comments):** This automated freshness probe has the highest comment count by a wide margin. The Skills Hub index is not being rebuilt fast enough (29.8h old vs. 26h limit). The high volume of comments likely represents users and bots discussing pipeline reliability and potentially the impact of a unavailable skills index on agent performance.
- **[Issue #84834: Webhook Feature Package — graph-gated repair](https://github.com/NousResearch/hermes-agent/issues/84834) (22 comments):** A meta-issue acting as a tracker for a massive repair of the entire webhook surface (ingress, execution, delivery, config, UI, etc.). The ongoing discussion indicates this is a complex, multi-faceted problem that the community is deeply engaged in architecting.
- **[Issue #91277: Fleet update reliability tracker](https://github.com/NousResearch/hermes-agent/issues/91277) (14 comments):** A P1 priority issue created by a core maintainer (`teknium1`) that consolidates the "spaghetti" of ~30 open issues and ~15 PRs around updating a fleet of Hermes installations. This signals that update reliability is an acknowledged, critical pain point being actively re-architected.
- **[Issue #78981: Session permanently dies after context-compression hangs](https://github.com/NousResearch/hermes-agent/issues/78981) (8 comments):** A P1 bug where a long-running DeepSeek session permanently dies after context compression stalls. The severity (P1) and the complexity (streaming, compression, Windows desktop) make this a hot topic for users running very long, token-heavy sessions.

---

### 5. Bugs & Stability

Analysis of bugs reported today, ranked by severity, with reference to any fix PRs.

- **Critical / P1:**
    - **[Issue #78981: Session permanently dies after context-compression hangs (DeepSeek)](https://github.com/NousResearch/hermes-agent/issues/78981):** The session never recovers after a stalled compression stream. No fix PR today.
    - **[Issue #91277: Fleet update reliability is our least reliable capability](https://github.com/NousResearch/hermes-agent/issues/91277):** A meta-issue codifying a systemic failure mode. Multiple PRs today, such as [#80041](https://github.com/NousResearch/hermes-agent/pull/80041) (`--stay-on-branch`), are attempting to address related causes.
- **High / P2:**
    - **[Issue #92606: Anthropic OAuth stale credential file overwrites rotated token -> 401 -> empty pool](https://github.com/NousResearch/hermes-agent/issues/92606):** A security and reliability bug where OAuth credentials become permanently revoked. No fix PR yet.
    - **[Issue #92095: Desktop writes broken .desktop Exec= on uv-based installs](https://github.com/NousResearch/hermes-agent/issues/92095):** A compatibility bug causing silent launch failures on Linux for a popular install method. A fix is slated for the `install-update` area.
    - **[Issue #92302: 120s timeout too small for local models](https://github.com/NousResearch/hermes-agent/issues/92302):** The stream timeout is too aggressive for local, large-context models, causing unwanted warnings. No fix PR yet.
    - **[Issue #92271: Windows Docker sandbox broken - ":" in folder name](https://github.com/NousResearch/hermes-agent/issues/92271):** A hard failure for Docker backend on Windows. Fix PRs ([#92610](https://github.com/NousResearch/hermes-agent/pull/92610), [#92614](https://github.com/NousResearch/hermes-agent/pull/92614)) were submitted today.
    - **[Issue #92553: pre_tool_call shell hooks silently discard "approve" action](https://github.com/NousResearch/hermes-agent/issues/92553):** A security-relevant bug where approval directives from hooks are ignored, and the doctor tool reports them as healthy. No fix PR yet.
- **Medium / P3:**
    - **[Issue #92607: Wispr Flow cannot insert text into Desktop composer on Windows](https://github.com/NousResearch/hermes-agent/issues/92607):** An accessibility issue for Windows users.
    - **[Issue #92608: Hindsight memory daemon boot failure under multiplexing](https://github.com/NousResearch/hermes-agent/issues/92608):** A feature breaking when a specific configuration (multiplexing) is enabled.
    - **[Issue #92506: profiles.list JSON-RPC never answers - server silently kills worker](https://github.com/NousResearch/hermes-agent/issues/92506):** A silent failure in the UI layer causing eternal loading spinners.

---

### 6. Feature Requests & Roadmap Signals

User-requested features that are gaining traction or suggest future direction.

- **[Issue #92568: Azure Foundry: native cross-process token admission](https://github.com/NousResearch/hermes-agent/issues/92568):** Requests a more robust, provider-owned token management plane for Azure, moving beyond the current single-process approach. Active PR ([#92604](https://github.com/NousResearch/hermes-agent/pull/92604)) suggests this is in active development.
- **[Issue #92091: Gateway control socket](https://github.com/NousResearch/hermes-agent/issues/92091):** A design proposal to replace process-scanning heuristics with a proper, gateway-owned control socket. This is a foundational architectural improvement that could resolve many fleet-related bugs.
- **[Issue #91230: Task Completion Verification as a "sixth law"](https://github.com/NousResearch/hermes-agent/issues/91230):** An architecture/doc proposal to add exact-object completion verification as a core principle for agents. This is a visionary feature request that could significantly change how agents validate their own work.
- **[Issue #74816: Multi-device session sync](https://github.com/NousResearch/hermes-agent/issues/74816):** A popular request (2 👍) to make sessions follow the user across devices in real-time. This is a major feature request, and while no PR exists today, its repeated surfacing indicates a persistent desire for a more "stateful" experience.

---

### 7. User Feedback Summary

- **Frustration with Uneven Quality:** Users report encountering numerous P2/P3 bugs that break core workflows, such as silent failures in hooks, configuration changes destroying user data, and broken installers. This indicates a need for a more rigorous QA pass before release.
- **Platform Parity Issues:** Windows users are disproportionately affected by issues ranging from Docker sandbox failures to input method (Wispr) problems and broken installers, suggesting a need for more focused Windows testing.
- **Install and Update Pain is Real:** The high engagement on the Meta-Issue #91277 confirms that users and maintainers alike are frustrated with the current update mechanism. The existence of many "corner-patch" PRs points to a fragile system.
- **Power Users Pushing Limits:** Users running very long sessions with large context (e.g., DeepSeek 500k) are hitting stability cliffs, indicating that features like context compression and streaming need to be more robust at extreme scales.
- **Desire for Control:** Users want predictable behavior and control over their environment, whether it is by keeping comments in config files, disabling preview tools, or needing reliable approval flows (e.g., OAuth, hooks).

---

### 8. Backlog Watch

Important issues and PRs that have been open a long time and need maintainer attention to resolve or provide a decision.

- **[Issue #83832: PKCE state cookie serialized with literal ';' breaks OIDC login](https://github.com/NousResearch/hermes-agent/issues/83832):** Open since 2026-08-11. This is a clear, spec-violation auth bug that has no associated fix PR. It breaks OIDC login for affected users and is over a week old without a fix.
- **[Issue #40391: Desktop Remote Gateway - connects to REST but fails WebSocket](https://github.com/NousResearch/hermes-agent/issues/40391):** Open since 2026-06-06 (closed today). This long-running bug was closed, which is good news. However, it's worth verifying the fix is truly in place, as it's a common use case that was broken for over 2 months.
- **[PR #6723: fix(security): escape OAuth error parameter in callback HTML](https://github.com/NousResearch/hermes-agent/pull/6723):** Opened on 2026-04-09 and still open, though a salvage PR ([#92612](https://github.com/NousResearch/hermes-agent/pull/92612)) was created today. The original PR has been stale for months despite being a simple, critical security fix. The maintainers should close the original in favor of the salvage to reduce confusion.
- **[PR #22614: feat(pricing) support user-supplied pricing_overrides](https://github.com/NousResearch/hermes-agent/pull/22614):** Opened on 2026-05-09 and still open. A new salvage PR ([#92613](https://github.com/NousResearch/hermes-agent/pull/92613)) was created today to push this feature. The original being open for over 3 months suggests it needs a decision or review to close the loop, even if its successor is accepted.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-23

## 1. Today's Overview

PicoClaw shows a moderate activity day with 6 PRs updated and 2 issues updated in the last 24 hours, though no new releases were published. The project remains in a stabilization phase, with several long-standing PRs (from as early as February and March) finally being merged/closed this period. Notably, the most critical open issue — a hang in the agent loop when MCP servers fail (#3269) — now has an associated fix PR (#3337) under review, signaling active maintenance of the core agent runtime. However, the presence of a stale bot marking the fix PR and several other items suggests maintainers may be working through a backlog. Two new bugs surfaced related to Telegram message loops and exec tool timeout handling, the latter of which had a fix merged today.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Four PRs were merged or closed today, though their creation dates span several months:

- **[PR #1545 — "fix: merge PR #1500 #1490 #1488 #1487 #1485"](https://github.com/sipeed/picoclaw/pull/1545)** (merged, created Mar 14) — A consolidated merge of five earlier open PRs containing assorted fixes, helping clear accumulated backlog from the spring period.

- **[PR #3319 — "fix(tools): honor exec timeout and boolean run options"](https://github.com/sipeed/picoclaw/pull/3319)** (closed, created Aug 7, by MrTreasure) — Corrects the `exec` tool so it respects per-run `timeout` arguments instead of silently falling back to the global timeout. Also fixes the schema to properly declare `background` and `pty` as booleans rather than strings. This is a meaningful usability fix for users scripting tool calls.

- **[PR #714 — "skills: install/reinstall CLI and refactor into skillsCmd"](https://github.com/sipeed/picoclaw/pull/714)** (closed, created Feb 24, by seanly) — A large feature PR that substantially overhauls the skills command: adds `InstallFromGitHubEx` with `repo@branch` and subpath support, introduces a `reinstall` subcommand for force overwriting, and switches production installs to the GitHub Trees API for full directory retrieval. Includes a refactor consolidating install CLI logic into a `skillsCmd` structure (approx. −200 LOC).

- **[PR #1083 — "fix(cron): preserve recurring job schedule after execution"](https://github.com/sipeed/picoclaw/pull/1083)** (closed, created Mar 4, by liugangjian) — Fixes a regression where recurring cron jobs (`every_seconds` / `cron_expr`) silently degraded into one-time "at" tasks. Root cause was `computeNextRun()` returning `nil` on invalid expressions; the fix preserves recurrence across executions.

## 4. Community Hot Topics

- **[Issue #3269 — MCP server failure causes agent loop hang](https://github.com/sipeed/picoclaw/issues/3269)** — *6 comments, 1 👍* — The most-discussed item. User reported that an unreachable MCP server causes `AgentLoop.Run` to propagate an error and exit entirely, leaving the chat interface unresponsive with no way to recover. The issue has been open for over a month and is marked stale, but a fix PR (#3337) now exists.

- **[Issue #3343 — Telegram tool feedback infinite edit loop](https://github.com/sipeed/picoclaw/issues/3343)** — *New today, 0 comments* — A user discovered that tool feedback animation sent `editMessageText` every 3 seconds continuously for days after an agent turn stopped progressing, totaling 228,000+ edit attempts and triggering Telegram's rate limit. This reveals a missing termination check in tool feedback animation logic.

- **[PR #3337 — "Fix/mcp failure hangs agent loop"](https://github.com/sipeed/picoclaw/pull/3337)** — *Directly addresses #3269* — The fix changes agent loop behavior so MCP initialization failures no longer terminate the loop; instead, the loop continues with a degraded state. Created Aug 14, marked stale but updated today — likely needs maintainer review.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue/PR | Description | Fix status |
|----------|----------|-------------|------------|
| **Critical** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP connection failure hangs agent loop; chat completely unresponsive until manual intervention | PR #3337 open, pending review |
| **High** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Telegram tool feedback loop runs indefinitely post-failure; 228k API edits; triggers rate limits | No fix PR yet |
| **Medium** | [#3319](https://github.com/sipeed/picoclaw/pull/3319) | `exec` tool ignores per-run timeout, uses global instead; schema types wrong for boolean options | Fix closed today |
| **Low** | [#1083](https://github.com/sipeed/picoclaw/pull/1083) | Recurring cron jobs became one-time after invalid expressions | Fix closed today |

## 6. Feature Requests & Roadmap Signals

The merged skills overhaul ([#714](https://github.com/sipeed/picoclaw/pull/714)) signals several roadmap priorities for the skills domain:

- **Versioned skill installs** (`repo@branch` syntax) — a step toward reproducible skill environments
- **Reinstall/force-overwrite command** — addresses developer workflow friction when iterating on local skills
- **GitHub Trees API adoption** — more robust, atomic installs for full skill directories

These enhancements suggest the skills system is evolving toward a production-grade dependency manager. Given the breadth of this PR and that it was authored by a long-time contributor (seanly), expect a formal release soon that may include breaking changes to skill CLI flags (e.g., `invite_link` → `join_invite_link` in the related deltachat refactor #3222) and new subcommands.

## 7. User Feedback Summary

- **Pain point — MCP resilience (most urgent):** Users depend on PicoClaw's chat interface remaining responsive even when backend MCP servers are unreachable. The current behavior — hard exit of the agent loop — renders the tool useless until external infrastructure is restored. The explicit ask is for graceful degradation.

- **Pain point — Background task runaway:** The Telegram edit loop demonstrates that users run long-lived agent turns expecting termination guarantees. More than 228k unintended API calls creates both reputational and rate-limit costs for real deployments.

- **Satisfaction signal:** The two bugfix PRs closed today (exec timeout, cron recurrence) address complaints that would otherwise silently degrade workflows. The relatively low comment counts on these items suggest they were caught early by attentive users.

- **Community engagement note:** The stale bot is actively flagging items (e.g., PR #3337, #3222, #3319, #714), indicating maintainer bandwidth is limited. Users submitting high-quality patches (like MrTreasure) may experience delayed merge times.

## 8. Backlog Watch

These items need maintainer attention:

- **[PR #3337 — Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337)** — *Direct fix for the most critical open issue; marked stale. Needs merge or feedback.*
- **[PR #3222 — refactor(deltachat): cleanup implementation, documentation](https://github.com/sipeed/picoclaw/pull/3222)** — *Open since Jul 3, −200 LOC cleanup; stale. The refactor introduces breaking changes (rename of `invite_link` → `join_invite_link`), meaning long review cycles increase migration risk for downstream users.*
- **[Issue #3269 — MCP failure hang](https://github.com/sipeed/picoclaw/issues/3269)** — *Open since Jul 20, stale, with a fix PR waiting. If PR #3337 is not merged soon, this risk persists in every deployment.*

---

*Digest generated from PicoClaw GitHub activity. Metrics based on last 24 hours of issue/PR updates as of 2026-08-23.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-23

## Today's Overview

NanoClaw is in a period of **high-velocity stabilization and integration hardening**, with 26 pull requests updated in the last 24 hours (8 merged/closed, 18 remain open) against just 1 open issue. The activity is heavily concentrated on **chat adapter reliability** (Telegram, Slack), **setup wizard improvements**, and **infrastructure fixes** (container builds, dependency management, installer behavior). Notably, the merge queue (8 PRs closed) shows steady progress, with several core-team fixes landing for Slack provisioning and SQLite build configurations. The low open-issue count (1) combined with a dense PR pipeline suggests a mature project where most problems are being caught and fixed internally rather than reported by users. No new releases were published, indicating that work is being batched toward a future release point.

## Releases

No new releases were published in the last 24 hours. The last release remains unpublished, with the current activity likely being batched toward the next version bump.

## Project Progress

**[Closed/Merged PRs — 8 total]** 

Key merges and closures from the last 24 hours include:

- **#3394 — `[core-team] fix(slack): working manual-install fallback, delivered to the requester`** — Closed. This is a significant fix addressing two broken recovery paths: the manual-install fallback URL failing Slack's `redirect_uri` validation, and agent-driven provisioning dead-ending with no recovery path. This resolves a critical UX failure for Slack installations under restrictive app-approval policies.
- **#3390 — `[core-team] fix(setup): skip Slack auto-provisioning when a bot is already saved`** — Closed. Fixes a re-run scenario where setup would provision a *second* Slack app for the same agent name after a previous run was cancelled post-creation. This prevents duplicate-resource bugs.
- **#3443 — `[core-team] build: drop better-sqlite3 from onlyBuiltDependencies — use its bundled prebuilds`** — Merged. Removes the `node-gyp rebuild` install step, relying on v13's bundled prebuilt binaries. This should **significantly reduce install friction** across platforms and speed up CI/installation.
- **#3445 — `Closing: wrong repository`** — Closed. A misdirected PR (opened against the wrong upstream), no code impact.

**Notable open but advanced themes (updated in last 24h):**

- **Telegram hardening** (#3449, #3450): Pinning explicit `allowed_updates` to stop "channel-post blackholing" and trusting the channel's own identity in the sender_scope gate (fixing #2991). These address anonymous channel posts being dropped or misrouted.
- **Setup wizard UX** (#3438, #3435, #3431, #3437): A series of PRs adding "add another Telegram bot" flows, carrying the adapter instance through pairing, and fixing the pairing card to show the correct digit count (a 6-digit vs. actual-length bug).
- **New provider support** (#3355, #3356): Adding a **Cursor Agent SDK** payload and an `/add-cursor` agent provider skill — an entirely new integration.

No breaking changes were observed in the merged set.

## Community Hot Topics

**Most Active (by comments/reactions — all PRs show minimal comment counts, indicating code-review-focused rather than community-discussion traffic):**

1. **#3318 — `fix: force baseline (non-AVX2) Bun binary in agent image`** (Open, Author: wakqasahmed) — The install script probes the *build machine's* CPU, not the runtime machine, causing AVX2 selection on CI runners that breaks on older target hosts. This is a **critical infrastructure bug** — silent deployment failures for users on older CPUs. The 0 👍 suggests it's mostly internal prioritization, but the impact is broad.

2. **#3447 — `[core-team] fix(circuit-breaker): scope crash strikes to the instance that earned them`** (Open, Author: gavrielc) — The circuit-breaker counter is keyed to a file, not an instance. If multiple instances mount `data/`, they share crash history incorrectly, delaying one instance's start due to another's failures. A subtle but important **multi-tenancy/HA correctness fix**.

3. **#3453 — `[OPEN Issue] stdin-json tests fail on Node 25+: tsx loader deprecation pollutes asserted stderr`** (Created: 2026-08-22) — The *only* open issue. A forward-compatibility problem: Node 25+ emits a deprecation warning to stderr, breaking strict assertions. Indicates the project is testing against future Node versions.

**Analysis:** The "hot topics" are all **engineering-driven** (bugs caught in tests, infrastructure edge cases) rather than user-community feature discussions. This signals a project where the maintainers/contributors are the primary QA force, and the community follows via the PR pipeline.

## Bugs & Stability

**Ranked by severity:**

1. **Critical: AVX2/Bun binary mismatch in Docker image (#3318)** — The container build selects an AVX2-optimized Bun binary based on the *build* machine's CPU. Images built on modern CI runners will **crash at startup** on older servers (SSE4.2-only), causing an outage for users pulling the image to aging hardware. **Fix PR open.**

2. **High: Slack manual-install fallback and agent-provisioning dead-end (#3394)** — Both recovery paths were broken; users could not complete Slack setup under restrictive policies. **Fix PR merged (closed) today.** Resolved.

3. **Medium: Telegram channel-post "blackholing" (#3449)** — Persistent `allowed_updates` server-side state caused messages from channels to be silently dropped when the polling adapter didn't re-specify update types. Silent data loss for broadcast-channel messages. **Fix PR open.**

4. **Medium: Telegram anonymous sender gate failure (#3450)** — Channel-post identities (`chat:<id>`) never matched `agent_members` in the sender_scope gate, blocking legitimate anonymous broadcasts. **Fix PR open (fixes #2991).**

5. **Low: Node 25+ stderr pollution breaking tests (#3453)** — Test infrastructure issue; not a runtime bug, but blocks future Node compatibility. **No fix PR yet.**

6. **Low: Slack setup duplicate provisioning on re-run (#3390)** — Data-integrity bug creating duplicate apps. **Fix PR merged (closed) today.** Resolved.

7. **Low: Circuit-breaker crash counter shared across instances (#3447)** — Incorrect startup delay attribution in shared-disk deployments. **Fix PR open.**

8. **Low: Setup wizard pairing card shows "6 digits" when actual count differs (#3431)** — Cosmetic/UX bug. **Fix PR open.**

## Feature Requests & Roadmap Signals

**New capabilities in the pipeline:**

- **Cursor Agent SDK integration (#3355, #3356)** — A brand-new provider type. This is a strong roadmap signal: NanoClaw is expanding beyond its current chat adapters to support **code-assistant agent providers** (Cursor), which could enable AI-agent-to-AI-agent workflows.

- **Multi-bot Telegram support (#3438)** — The setup wizard will offer "add another Telegram bot" when one exists. Suggests a roadmap move toward **multi-instance and multi-tenant** support within a single deploy.

- **Instance-aware pairing and wiring (#3435, #3437)** — Companion work to multi-bot, carrying the adapter instance through the whole setup flow. Reinforces the multi-instance direction.

**Prediction for next version:** The Telegram multi-bot + Cursor provider features (all currently open) are the most likely candidates for the next minor release. The Bun binary fix (#3318) and the Slack fixes (#3394 already merged) should be in any near-term patch release.

## User Feedback Summary

**Pain points actively addressed (from PR descriptions):**

- *"Cancel a Slack setup run after the bot/agent was created, rerun setup: the flow reused the Slack login but did not recognize the existing agent — it would provision a second Slack app."* — Setup idempotency is a real friction point for users who abort/retry wizards. (#3390)
- *"When a workspace's app-approval policy blocks managed Slack app installation, both recovery paths were broken."* — Enterprise Slack policies break workflows unless fallbacks are rock-solid. (#3394)
- *"Telegram persists allowed_updates server-side... Omitting the parameter means 'the previous setting will be used'."* — Users experienced silent message drops from channels with no error. (#3449)
- *"Telegram broadcast-channel posts are anonymous... That identity is never a member of agent_members."* — Legitimate channel broadcasts were blocked by the approval gate with no way to approve. (#3450)
- *"Under group scope, dispatch() auto-fills agent_group_id... When a caller explicitly passes a differing value..."* — Developers using the CLI are hitting implicit-override footguns that silently discard explicit arguments. (#3448)

**Satisfaction signals:** The project is **fixing bugs fast** (8 closed in 24h), and contributors are seasoned enough to write precise regression descriptions. The low issue count suggests users find the software stable in practice. No negative community feedback (e.g., complaints or frustration) is visible in the data.

## Backlog Watch

**Items needing maintainer attention (unanswered, aging, or held):**

- **#3445 — PR closed as "wrong repository"** — The contributor is already resolved; no action needed.

- **#3453 — Node 25+ stderr test failures** — The only open issue, and it has **0 comments** since creation on 2026-08-22. This is a forward-compatibility signal: either the project pins Node versions (in which case the test should be skipped on old versions) or it should adopt a fix. **Recommendation: triage within a week** to avoid a breaking release when Node 25 hits LTS.

- **#3318 — Bun AVX2 packaging error** — Open since 2026-08-18 (5 days). This is infrastructure-critical (broken images for a class of users) and touches only the Dockerfile. It has been open for several days with no merge, which is notable given the fast turnaround on other fixes. **Recommendation: prioritize** for the next patch release, as it affects all users pulling the image on non-AVX2 hardware.

- **#3355/#3356 — Cursor provider + skill** — Open since 2026-08-19, not merged yet. These are bigger feature additions, so longer review time is expected, but they are **stale in review** (last updated 08-22). Maintainers should confirm if blocking on design decisions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Digest Date:** 2026-08-23  
**Data Window:** 2026-08-22 – 2026-08-23

---

## 1. Today's Overview

IronClaw is in a **high-velocity development phase**, with 5 open issues and 16 open PRs actively progressing. The day's activity clusters around **four major workstreams**: (1) a **sustained CI infrastructure overhaul** (four parallel tracks T1–T4 aimed at eliminating "green locally, red in CI" failures), (2) **agent runtime enhancements** (core-tool contracts, lifecycle hooks, background subagent modes), (3) **WebUI polish** (onboarding suggestions, extension configuration UX, and duplicate-tab cleanup), and (4) **sandbox egress security** (GitHub CLI credential mediation via a generic broker). Notably, 4 issues were closed and 5 PRs merged today — predominantly **maintenance and stability work** (codebase knowledge graph refresh, timezone-robust tests, tab deduplication) with no new releases published. The project shows strong engineering rigor: PRs are explicitly sized (XS–XL), risk-rated, and frequently broken into phased slices with clear dependencies.

---

## 2. Releases

**No new releases were published in the last 24 hours.**  
The most recent release activity remains the ongoing PR #7491 (the "omp core-tool contract" XL-size change), which is still open and not yet cut into a release. Notably, PR #7076 ("Install the packages the catalog already publishes") was rebased onto current `main` after being three months stale, indicating the project continues to accumulate significant unreleased changes.

---

## 3. Project Progress

**Merged/Closed PRs (5 total):**

| PR | Title | Size | Summary |
|----|-------|------|---------|
| [#7773](https://github.com/nearai/ironclaw/pull/7773) | refactor(webui): remove duplicate Settings and Extensions tabs | L | Removes unused tab components and duplicate navigation metadata inventories (closes #7768) |
| [#7774](https://github.com/nearai/ironclaw/pull/7774) | test(webui): make automation presenter date assertions timezone-robust | M | Replaces UTC-dependent date assertions with browser-local formatter expectations (closes #7767) |
| [#7772](https://github.com/nearai/ironclaw/pull/7772) | fix(webui): surface extension setup phase and blockers in Configure | L | Propagates authoritative setup `phase` and `blockers` through `useExtensionSetup` with localized explanations (closes #7769) |
| [#7700](https://github.com/nearai/ironclaw/pull/7700) | feat(notifications): publish authoritative run outcomes | XL | Materializes run completion/failure notifications from Process Journal transitions; excludes foreground/child/ownerless runs (closes #7691) |
| [#7076](https://github.com/nearai/ironclaw/pull/7076) | Install the packages the catalog already publishes | XL | Contributor's first merged PR; rebased three-month-old work onto `main` with fixture fixes for prompt-artifact refactor |

**Key features advanced by merged work:**
- **Notification lifecycle hardening** (#7700) — run outcomes now derive from authoritative Process Journal state rather than delivery watchers, and delivery failures generate actionable notifications.
- **Extension setup UX** (#7772) — Configure modal now surfaces all blocker kinds (not just Hosted MCP auth selection), preventing false "no configuration required" reports.
- **Codebase memory refresh** ([#7814](https://github.com/nearai/ironclaw/pull/7814)) — nightly CI workflow committed an updated bootstrap snapshot of the codebase knowledge graph.

---

## 4. Community Hot Topics

**Top discussion threads (by engagement):**

- **[Issue #7824 — Context projection: Pi-style compaction barrier](https://github.com/nearai/ironclaw/issues/7824)** (2 comments, 0 reactions) — The most substantive architectural discussion. Author `serrrfirat` presents **hard measurement data**: PinchBench run `949991b5` consumed **227.7M input tokens ($10.31)** vs. a 60.5%-accuracy baseline at 55.1M tokens ($2.52). The issue proposes structured summaries and compaction barriers to address a **4x token-bloat problem**.

- **[Issue #7815 — Onboarding suggestions: cumulative net-new work](https://github.com/nearai/ironclaw/issues/7815)** (1 comment) — Tracks the connect → suggest → thread flow across three prior PRs (#7693, #7694, #6994). The linked frontend PR [#7816](https://github.com/nearai/ironclaw/pull/7816) adds refresh and connect entries to the OOBE suggestion drawer.

- **[PR #7491 — omp core-tool contract + engines + benchmark arm](https://github.com/nearai/ironclaw/pull/7491)** — Open since Aug 11, this XL change unifies the coding-tool surface to six exact names (`read`, `write`, `edit`, `glob`, `grep`, `bash`), removing legacy `builtin__*` spellings. Cross-referenced by issue #7824 as the source of token bloat, making this the **highest-leverage review currently in flight**.

**Underlying needs:** The token-cost discussion reveals a **unit-economics concern** — the project's own benchmark shows the new tool surface costs ~4x more input tokens for ~6pp lower accuracy. The CI tracks (T1–T4) address developer velocity pain, while the WebUI work targets first-run user experience.

---

## 5. Bugs & Stability

**Active bugs (ranked by severity):**

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **High (user-blocking)** | [#7823 — Notion install fails](https://github.com/nearai/ironclaw/issues/7823) | Users cannot install the Notion integration in IronClaw | Open, triaged from Slack feedback; no fix PR yet |
| **High (user-blocking)** | [#7822 — Unable to set up Slack](https://github.com/nearai/ironclaw/issues/7822) | Slack setup fails; reporter notes correlation with Notion failure | Open, triaged from Slack feedback; no fix PR yet |
| **Medium (quality)** | [#7767](https://github.com/nearai/ironclaw/issues/7767) | Automation presenter tests fail in non-UTC timezones (e.g., Asia/Shanghai) | **Fixed** by PR #7774 (merged) |
| **Low (UX defect)** | [#7769](https://github.com/nearai/ironclaw/issues/7769) | Configure modal discards non-auth blockers, incorrectly reporting "no configuration required" | **Fixed** by PR #7772 (merged) |
| **Low (cleanup)** | [#7768](https://github.com/nearai/ironclaw/issues/7768) | Duplicate Settings/Extensions tabs and route metadata drift | **Fixed** by PR #7773 (merged) |

**Notable:** The two integration-install failures (#7822, #7823) are user-reported via Slack product-feedback channel and represent the only **unresolved user-facing bugs**. Both were filed on 2026-07-28 but only triaged into GitHub on 2026-08-22 — a **26-day lag** worth monitoring. No regression-level defects were reported today.

---

## 6. Feature Requests & Roadmap Signals

**Active feature work indicating near-term roadmap:**

1. **Context projection / token economy ([#7824](https://github.com/nearai/ironclaw/issues/7824))** — Pi-style compaction barriers and structured summaries. The measured 4x cost increase from PR #7491 makes this a **likely next-cycle priority** to restore cost parity.

2. **Sandbox egress auth ([#7825](https://github.com/nearai/ironclaw/issues/7825))** — Generalizes the GitHub CLI credential mediation (PR #7810) into a provider-neutral broker with `iron-proxy` sidecar substitution. This is an **active design discussion** (filed today, 0 comments) that could land in the next 2–4 weeks given the pattern of rapid follow-ups.

3. **AfterTurn lifecycle hook ([#7765](https://github.com/nearai/ironclaw/pull/7765))** — Phase 1 of memory curation (#7770); introduces the first act-capable hook point with privilege enforcement. Signals a **platform-level shift toward programmatic agent behavior extension**.

4. **Background subagents ([#7818](https://github.com/nearai/ironclaw/pull/7818))** — Slices 2b+2c of the R2 background subagent work (producer half: receipt spawns, per-child delivery, healing sweeps). The deployment gate warning suggests **breaking changes for consumer-facing APIs** are in flight.

5. **CI expedite program (T1–T4)** — Four parallel lanes (#7821, #7817, #7819, #7820, #7809) targeting measured "queue-only failure" classes. These are **internal-quality investments** that will likely land first (T3 explicitly "closes" three failure classes).

**Prediction:** The next release will likely include the CI consolidation (T1/T3 merge earliest), the `AfterTurn` hook, and the OOBE suggestion drawer refresh. The context-projection work (#7824) is the **most strategically urgent** but is still in design discussion.

---

## 7. User Feedback Summary

**Direct user-reported issues (via Slack #x-ai-product-feedback):**

- **Notion integration cannot install** ([#7823](https://github.com/nearai/ironclaw/issues/7823)) — Reported by `alejo.escriva` on 2026-07-28. Medium severity, integration-install category.
- **Slack setup blocked** ([#7822](https://github.com/nearai/ironclaw/issues/7822)) — Same reporter, same day. The user explicitly notes "a related issue with Notion not installing," suggesting a **common root cause** in the integration-installation path (possibly OAuth or extension-manifest handling).

**Implied pain points from engineering activity:**
- **Cost sensitivity:** The token-bloat benchmark in #7824 suggests **input token cost is a user-visible pain point** — the team is actively measuring and optimizing.
- **Onboarding friction:** Three merged/active PRs on OOBE suggestions (#7815, #7816, #6994) indicate **first-run experience is a prioritized UX concern**.
- **Timezone robustness:** The test fix (#7774) acknowledges **global developer distribution** — failures in Asia/Shanghai TZ validate that the contributor base is international.

**Satisfaction signals:** The rebase-and-merge of newcomer PR #7076 (after 3 months) shows community contributions are valued and carried to completion. The `human-verified` tag on merged PRs suggests **deliberate QA review** for user-facing changes.

---

## 8. Backlog Watch

**Items needing maintainer attention:**

| Item | Age | Why it matters |
|------|-----|----------------|
| [PR #7076](https://github.com/nearai/ironclaw/pull/7076) (merged today) | 20 days to merge | **Warning sign:** sat 3 months stale before rebase. This is a **first-time contributor** — the long tail-time risks discouraging new contributors. Consider faster triage for new-contributor PRs. |
| [Issue #7822 / #7823](https://github.com/nearai/ironclaw/issues/7822) (integration installs) | 26 days from report to triage | User-reported blocker for two major integrations (Slack, Notion). The **triage lag** (July 28 → Aug 22) is concerning for product trust. No linked fix exists. |
| [PR #7491](https://github.com/nearai/ironclaw/pull/7491) (omp core-tool contract) | Open 12 days, XL size | **Highest-leverage open review.** Directly implicated in the 4x token-cost regression (#7824). Long-open XL PRs accumulate merge conflicts; given it's the foundation for the context-projection fix, this should be prioritized. |
| [PR #7255](https://github.com/nearai/ironclaw/pull/7255) (APDD governance evaluation) | Open 18 days, docs-only | Docs-only PR evaluating an external governance framework. Low-risk but low-urgency; consider whether it should be merged (it's a proposal, not a change) or explicitly parked. |
| [PR #7749](https://github.com/nearai/ironclaw/pull/7749) (benchmark trigger) | Open 4 days, intentionally transient | Opened solely to trigger `/benchmark`; the comment says "close after run finishes." **Should be closed** — it's noise in the open-PR list. |

**Project health assessment:** IronClaw demonstrates **strong process maturity** (sized/risk-rated PRs, phased implementations, measurement-gated probes), but faces a **growing cost-efficiency challenge** in its core agent loop and a **user-facing integration reliability gap** that has lingered untriaged for nearly a month. The CI-expedite program is well-targeted at real developer-velocity frictions.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-08-23

---

## 1. Today's Overview

LobsterAI activity is **moderate-to-quiet** today, with no new releases but a meaningful cluster of merged PRs (5 of 6 updated items were closed/merged) addressing usability, error handling, and feature gaps. The two stale issues closed today are both from early April, indicating the maintainers are actively pruning old backlogs. One long-running PR (#2452) remains open in the `openclaw` area, suggesting continued development on provider/model handling. Overall, the project shows healthy forward momentum with a clear focus on reducing user friction in the Cowork module and expanding export capabilities.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

Five PRs were merged/closed today, all originally created in April and only now finalized. Key highlights:

- **[PR #1208 – Manual Retry Button for Cowork Errors](https://github.com/netease-youdao/LobsterAI/pull/1208)** (`feat(cowork)`)
  Adds an inline **Retry** button to error toast bubbles in Cowork sessions, allowing users to instantly resend their last message after rate-limit (429), network, or server errors. Introduces a `RETRYABLE_ERROR_KEYS` classification for transient faults.

- **[PR #1214 – Export Session as Markdown](https://github.com/netease-youdao/LobsterAI/pull/1214)** (`feat`)
  New "Export as Markdown" option in the `CoworkSessionDetail` context menu. Generates `.md` files with user messages, tool-call summaries (truncated at 300 chars), and assistant replies. Closes issue #1345.

- **[PR #1212 – Support up to 20 Custom Model Providers](https://github.com/netease-youdao/LobsterAI/pull/1212)** (`fix(model)`)
  Raises the hard-coded cap from 10 (`custom_0`–`custom_9`) to 20, addressing user friction when rotating providers.

- **[PR #1205 – Rename Failure Toast](https://github.com/netease-youdao/LobsterAI/pull/1205)** (`fix(cowork)`)
  Shows a localized toast (via `app:showToast`) when session rename fails, keeping the input open for retry.

- **[PR #1209 – Fix Unsupported Chrome Flag in Web Search](https://github.com/netease-youdao/LobsterAI/pull/1209)** (`fix(web-search)`)
  Removes the external `--disable-blink-features=AutomationControlled` flag, which becomes invalid in Chrome 130+, causing web-search skill failures.

---

## 4. Community Hot Topics

- **[Issue #1206 – Kimi 2.5 Duplicate Processing](https://github.com/netease-youdao/LobsterAI/issues/1206)** *(closed/stale, 2 comments)*  
  User-reported bug where the Kimi 2.5 model repeatedly re-sends the same action message while analyzing documents (private deployment). Switching models resolves it. Likely tied to model-specific streaming behavior; no fix PR linked.

- **[Issue #1213 / PR #1214 – Markdown Export](https://github.com/netease-youdao/LobsterAI/issues/1213)** *(closed/stale, 2 comments)*  
  User-requested feature, now implemented via PR #1214. Demonstrates strong demand for **text-based, post-processing-friendly** exports over screenshot-only workflows.

- **[PR #2452 – OpenClaw Provider Prefix Preservation](https://github.com/netease-youdao/LobsterAI/pull/2452)** *(open, area: main)*  
  Fixes a bug where model IDs containing `/` (e.g., `deepseek-ai/DeepSeek-V4-Flash`) lose their provider prefix when persisted as separate fields. Critical for multi-provider setups.

---

## 5. Bugs & Stability

No **new** critical bugs were reported today. The following stale items were closed out:

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| Medium | Kimi 2.5 private deployment duplicate action messages ([#1206](https://github.com/netease-youdao/LobsterAI/issues/1206)) | Closed (user worked around by switching models) | None | 
| Low | Web-search Chrome flag incompatibility after Chrome 130+ | Fixed | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) |
| Low | Session rename failures silently swallowed | Fixed | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) |

**Stability verdict:** No crash-level regressions. Error-handling UX is being improved (retry button, rename toasts), which should reduce support noise.

---

## 6. Feature Requests & Roadmap Signals

- **Export as Markdown** – Now shipped (#1214). Strong signal that users want **structured, editable** artifacts from sessions, not just images. Expect follow-ups like CSV/JSON export or "export selected branch" soon.
- **Retry on transient errors** – Shipped (#1208). Points to broader investment in **session resilience** (auto-retry, backoff schemes).
- **Higher custom provider limits** – Shipped (#1212, 10→20). The cap bump implies a growing power-user segment running many provider configs.

**Prediction for next minor release:** PR #2452 (provider prefix preservation) is the most likely candidate to merge next.

---

## 7. User Feedback Summary

- **Kimi 2.5 users on private deployments** are seeing duplicated action messages, degrading trust in the agent loop. Workaround (model switch) indicates a **model-adaptation gap** rather than a hard crash.
- **Markdown export demand** (issue + PR both authored by same user) signals frustration with image-only exports — users want **reusability and searchability**.
- **Silent UI failures** (rename, send errors) were a source of confusion. Both got UX fixes today, which should improve perceived responsiveness.

Overall sentiment: **positive** — the project is listening to UX and resilience complaints, and shipping fixes quickly once prioritized.

---

## 8. Backlog Watch

- **[PR #2452 – OpenClaw provider prefix fix](https://github.com/netease-youdao/LobsterAI/pull/2452)** *(open since Aug 7, updated Aug 22)*  
  No comments yet. This silently corrupts provider/model mapping for slashed model IDs, a **correctness bug** for `custom_*` + external models. Needs a reviewer.
- **[Issue #1206 – Kimi 2.5 duplicate messages](https://github.com/netease-youdao/LobsterAI/issues/1206)** *(closed as stale)*  
  Closed without a fix. If Kimi 2.5 remains a supported model, the underlying duplication pattern should be tracked internally.
- **Exported session format** – No open issue yet, but expect user requests for **copy-as-Markdown**, **partial export**, or **export with images embedded**.

No issues appear to have been silently ignored beyond the normal stale lifecycle.

---

*Data sourced from the [LobsterAI GitHub repository](https://github.com/netease-youdao/LobsterAI) on 2026-08-23.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-23

## 1. Today's Overview
Moltis shows moderate development activity today with 1 issue and 3 PRs touched in the last 24 hours, all created yesterday and updated today. The project entered a quiet consolidation phase: no new releases, no merged PRs, and the only issue closed today was a feature proposal (#1230) rather than a bug fix. However, the activity that did occur is strategically important — it focuses on hardening the security boundary (hook fail-closed policy), fixing OpenAI strict-schema compatibility, and resolving MCP client lifecycle issues after server restarts. The PR queue is entirely open, indicating that maintainers are reviewing rather than merging, which is typical for a mid-cycle integration period.

## 2. Releases
**No new releases** were published in the last 24 hours. The most recent release remains the one preceding this window; no version changes, breaking changes, or migration notes are available for this digest.

## 3. Project Progress
No PRs were merged or closed today, so no features advanced to mainline. However, three PRs are actively under review:  
- **[#1232: fix(tools): make object schemas OpenAI-safe](https://github.com/moltis-org/moltis/pull/1232)** — addresses strict schema compatibility that was forcing Codex to send `null`/empty values for under-specified patch and map schemas.  
- **[#1231: fix(mcp): resolve current client after server restart](https://github.com/moltis-org/moltis/pull/1231)** — fixes stale client references in MCP tool bridges after server restarts by resolving the live client dynamically.  
- **[#1229: fix(browser): support Browserless v2 containers](https://github.com/moltis-org/moltis/pull/1229)** — adds complete Browserless v2 protocol support while preserving v1 defaults, including Base64 launch args and new `TIMEOUT`/`CONCURRENT` options.

These fixes target core reliability areas (schema correctness, client lifecycle, browser integration), suggesting a stability-focused development cycle.

## 4. Community Hot Topics
The most active item today is the closed feature proposal:  
**[#1230: feat(hooks): add an opt-in fail-closed error policy for modifying security hooks](https://github.com/moltis-org/moltis/issues/1230)** — created by *kantorcodes*, updated today, with **1 comment**.  
The underlying need is well-articulated: Moltis supports `BeforeToolCall` hooks for policy enforcement with an explicit `Block` result, but **runtime hook failures currently degrade to continuation** (fail-open behavior). For security-conscious deployments, a shell-hook timeout or crash should *not* silently allow the protected action — users need an opt-in fail-closed policy. This issue was closed, which could mean it was rejected, implemented elsewhere, or converted to a task; without merge/PR linkage, the resolution is unclear, but the demand is real for security-boundary use cases.

## 5. Bugs & Stability
No bugs or regressions were reported today; all open PRs are pre-merge fixes rather than responses to filed bugs. The issues updated today were feature-oriented, not defect reports. This indicates a stable runtime state for the current mainline, with improvements queued for review.

## 6. Feature Requests & Roadmap Signals
The only feature signal today is **Issue #1230** (fail-closed hook policy). If the closure represents acceptance into the roadmap (rather than rejection), this feature is a strong candidate for the next minor release because it is: well-specified, security-motivated, and additive (opt-in, non-breaking). Given that the related implementation would touch hook execution logic, it could ship alongside the MCP client-fix (#1231) in a reliability-minded release. No other user-requested features appeared in this window.

## 7. User Feedback Summary
The single comment on #1230 highlights a real user concern: **security hooks must be trustworthy under failure conditions**. A shell-hook timeout today could silently bypass policy, which is unacceptable for security boundaries. This suggests users are deploying Moltis in serious production environments where policy enforcement failures must be loud, not silent. No praise/complaints about usability, performance, or documentation surfaced in this window, so overall sentiment appears neutral-to-positive, with users focused on hardening rather than missing features.

## 8. Backlog Watch
No issues or PRs in this window appear to be long-stale or abandoned. All items were updated within the last 48 hours. The PRs (#1229, #1231, #1232) have been open for roughly 1 day without comments from maintainers — if this silence persists beyond 3–5 days, maintainers should respond to keep contribution momentum, especially for contributor *rubenssoto* (Browserless v2 support) and *IlyaBizyaev* (two concurrent fixes).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-23

## 1. Today's Overview

CoPaw (formerly QwenPaw) is showing a steady maintenance cadence with **7 issues and 4 PRs updated in the last 24 hours**, but notably **zero new releases** and **zero merged PRs** during this window. The project is fielding a healthy mix of user-facing bug reports (5 open), feature requests (2 open), and a backlog of first-time-contributor PRs awaiting review (4 total, all still open). Notably, three of the four open PRs are from first-time contributors, signaling an active onboarding funnel but also potential reviewer bandwidth constraints. The issue tracker reveals a clear pattern: users are actively using the product in production-like settings and hitting real UX and reliability friction points—from rendering artifacts to model provider integration gaps.

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent known version referenced in issue reports is **v2.1.0** (including a Docker image tagged `v2.1.0f1`). No changelog, breaking-change notes, or migration guidance is available for this digest period.

## 3. Project Progress

| PR | Title | State | Notes |
|---|---|---|---|
| [#7214](https://github.com/agentscope-ai/QwenPaw/pull/7214) | docs(readme): list Access Policy as the fifth security layer | Open | First-time contributor; no comments yet |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | feat(chrome): support remote bridge endpoint for LAN/network browsers | Open, Under Review | First-time contributor; waiting on review since 08-15 |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | feat(console): add per-cron-job model override picker | Open | First-time contributor; no merge activity |
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | fix(console): show custom profile markdown files | Open | First-time contributor; no merge activity |

**No PRs were merged or closed** in the last 24 hours. All four open PRs remain in limbo, with the oldest (#6808) dating back to 2026-08-07—now 16 days without a merge decision. This suggests either maintainer review bandwidth is stretched, or these contributions require more iteration cycles before acceptance.

## 4. Community Hot Topics

| Issue | Title | Comments | Reactions | Status |
|---|---|---|---|---|
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | 一直显示推理过程是严重的视觉干扰 (Always showing reasoning is a severe visual distraction) | **2** | **1 👍** | Open |
| [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | Tool name intermittently corrupted in LLM output (`l→|`), causing ToolNotFoundError | 1 | 0 | Open |
| [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | Interface does not display after adding OpenRouter/OpenCode backends | 1 | 0 | Open |
| [#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213) | Session output always has meaningless blank lines | 1 | 0 | Open |
| [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | Add option to run `chcp 65001` at startup for UTF-8 on Windows | 1 | 0 | **Closed** |

**Analysis:** The most-discussed issue [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) reflects a broader UX concern: users want **configurable visibility of the reasoning trace**, with a strong preference for collapsed-by-default, similar to the pattern used by "hermes". This is a signal that default-on verbose reasoning is a friction point for task-focused users, not just a niche preference. The issue mentions a proposed solution pattern that the maintainers could adopt from an existing competitor/framework. Issue [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) is potentially **serious**, as occasional tool-name corruption in LLM output can cause non-deterministic tool-call failures—this type of intermittent bug is notoriously hard to reproduce and debug. The closed [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) shows the maintainers did address the Windows UTF-8 shell environment issue, though the specific resolution method is not visible in this digest.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🟥 **High** | [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | `execute_shell_command` tool name intermittently corrupted in LLM output (`l→|`), causing `ToolNotFoundError`. Non-deterministic failure undermines tool-call reliability. | **None identified** |
| 🟥 **High** | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | Inlining an image whose pixel dimensions exceed the provider's limit **crashes the entire request** (`MODEL_EXECUTION_ERROR`) and ends the conversation instead of degrading gracefully. Affects Docker deployment (v2.1.0). | **None identified** |
| 🟨 **Medium** | [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | OpenRouter and OpenCode model backends not fully rendered in the GUI desktop interface after being added; display truncation. | **None identified** |
| 🟨 **Medium** | [#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213) | Session output consistently contains meaningless blank lines despite user instructions to stop; persistent UX annoyance in v2.1.0. | **None identified** |
| 🟩 **Low** | [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | Windows shell tool doesn't load `$PROFILE`, so UTF-8 encoding is not applied in `pwsh` (`chcp 65001` not run). | **Closed** (resolution unknown from digest) |

**No fix PRs exist** for any of the open bugs. The two high-severity items (#7216, #7212) are both reliability/robustness issues that could cause user churn if left unaddressed.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood of Next Release |
|---|---|---|
| **Collapsible reasoning trace** default-off, with per-user setting | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | **High** — strong community support (2 comments, 1 👍), simple config change, clear competitor precedent |
| **Per-provider media byte caps** split (`max_image_bytes`, `max_video_bytes`, `max_audio_bytes`) with advanced settings UI | [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | **Medium** — well-specified and directly coupled to the pixel-limit crash (#7212), could be bundled |
| **Startup `chcp 65001` option** for Windows UTF-8 | [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | **Already closed** — resolved |

**Prediction:** The maintainers appear responsive to issues that pair a clear config option with a concrete UX pain point (#7196, #7043). The reasoning-collapse setting (#7196) is the strongest candidate for the next minor release since it has the most traction and a low implementation cost. The **per-provider media caps** (#7201) also look plausible, especially as a mitigation for the crash reported in #7212.

## 7. User Feedback Summary

- **Reasoning trace is visually overwhelming** — users monitoring task progress are distracted by default-visible reasoning; they want it collapsed unless debugging. This is the single strongest signal of user dissatisfaction with default behavior.
- **Docker users are hitting hard crashes** — image dimension over-limit aborts the whole conversation with no graceful fallback, which is a frustrating dead-end in production-like workflows.
- **Intermittent tool name corruption** — a "sometimes it fails" bug in a core tool (`execute_shell_command`) undermines user trust in the agent's reliability.
- **Windows-first users report persistent encoding friction** — the closed issue (#7043) suggests this was acknowledged, but no announcement of the fix approach is visible.
- **UI polish gaps** — blank-line noise in session output (#7213) and incomplete rendering of third-party model providers (#7215) point to a product that is functionally strong but not yet fully polished.

## 8. Backlog Watch

| Item | Age | Type | Why It Matters |
|---|---|---|---|
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) — fix(console): show custom profile markdown files | **16 days open** | PR (first-time contributor) | Longest-pending PR; backend already returns custom markdown but the UI filters them out. First-time contributor engagement could be lost if this stagnates. |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) — feat(chrome): remote bridge endpoint for LAN browsers | **8 days open** | PR (first-time contributor) | Marked "Under Review" but no visible movement; LAN-browser support is a meaningful capability for team deployments. |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) — feat(console): per-cron-job model override | **8 days open** | PR (first-time contributor) | Backend contract already exists; only frontend picker is missing. Contributes to multi-agent operational flexibility. |
| [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) — Intermittent tool-name corruption | **1 day old** | Issue (bug) | New but high-severity; no triage or acknowledge message visible. The longer it sits unaddressed, the more users may hit it independently. |

**Maintainer attention needed:** The backlog of first-time-contributor PRs (especially #6808, now 16 days old) is the most concerning signal for project health—contributor momentum can stall permanently if reviews don't land in a timely manner. The high-severity bug #7216 also deserves an immediate confirmation comment and triage label at minimum.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-08-23

---

## 1. Today's Overview

ZeroClaw is in a period of sustained high activity. The project saw 50 issues and 50 PRs updated in the last 24 hours, with 11 issues closed and 7 PRs merged/closed, indicating a healthy and responsive maintainer team. The bulk of activity revolves around significant architectural RFCs, security hardening, and substantial bug fixes. Key areas of focus include runtime-owned conversation sessions, memory lifecycle decoupling, realtime voice channels, and a major effort to move optional components from compile-time features to runtime WASM plugins. The high number of open, active issues (39) combined with a strong stream of merged PRs suggests a project in active and rapid development, balancing new feature design with fixing reported stability and security issues.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent tagged version referenced in issues is **v0.8.3**. No release notes or migration guides to report.

---

## 3. Project Progress

Several significant pull requests were merged or closed today, advancing important fixes and features.

**Key Merged/Closed PRs:**

- **[PR #9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) (CLOSED):** `fix(config): roll back auto-created map aliases when config set fails`. This fix ensures that a failed `config set` operation doesn't leave behind corrupted config state, improving data integrity for the CLI.
- **[PR #9960](https://github.com/zeroclaw-labs/zeroclaw/pull/9960) (CLOSED):** `fix(quickstart): reject duplicate enabled webhook ports`. Prevents a silent failure in the quickstart wizard where multiple webhook listeners could claim the same port.
- **[PR #9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) (CLOSED):** `fix(cli): detect installed AppImage and use a working desktop download URL`. Resolves the reported bug where the `zeroclaw desktop` command couldn't detect a properly installed AppImage and used a dead download link.
- **[PR #9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) (CLOSED):** `feat(zerocode): expose the SOP pane as a read-only status view`. Makes the SOP (Standard Operating Procedure) status visible in the zerocode TUI, addressing a feature request for live run status.
- **[PR #9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) (CLOSED):** `fix(sop): wire authenticated HTTP fan-in`. Adds an authenticated HTTP endpoint for SOPs, a security enhancement from a distinguished contributor.

These merges directly resolve several open issues tracked previously, including #9202, #9436, and #9682.

---

## 4. Community Hot Topics

The most active discussions are around major architectural proposals and high-impact bugs.

### Active & Highly Discussed

1.  **[Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (RFC): Runtime-owned conversation sessions and transport surface adapters.**
    - **Activity:** 24 comments, updated today.
    - **Analysis:** This is the single most active discussion. It proposes a major architectural shift to make sessions runtime-owned and introduces transport adapters. The high visibility and need for maintainer review signal this is a foundational design decision for the project's future.

2.  **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (Bug): 74 test failures on Windows.**
    - **Activity:** 19 comments, updated recently.
    - **Analysis:** A significant cross-platform stability problem. It has been open for over two months, and the community is actively discussing fixes for Unix-only test commands, path semantics, and console encoding. This indicates a need for better cross-platform support and could be a blocker for some users.

3.  **[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (RFC): Decouple memory lifecycle policy from storage backends.**
    - **Activity:** 16 comments, updated today.
    - **Analysis:** Another major architectural RFC aimed at cleaning up the memory subsystem. The long discussion history (since May) suggests it's a complex issue that the community is heavily invested in.

4.  **[Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) (RFC): Realtime speech-to-speech channel for Gemini Live.**
    - **Activity:** 16 comments, updated today.
    - **Analysis:** A highly anticipated feature for realtime voice interaction. The community is engaged with the broker contract design proposal. This suggests strong user demand for voice-based interfaces.

### Newly Surfaced Discussion

- **[Issue #10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) (RFC): Verbatim channel send over the gateway, without an agent turn.** Opened recently, this RFC is already gathering attention with 4 comments, proposing a new gateway route. This is a clear signal of users wanting more granular control over channel messaging.

---

## 5. Bugs & Stability

The project is actively addressing several bugs, with fixes in progress for the most critical ones.

### High Severity (P1) — Active & Fixed

- **[Issue #10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) (P1):** `block_high_risk_commands = false` is not honored. A critical security-policy bug where allowlisted high-risk commands are still blocked. **No fix PR found yet.**

- **[Issue #9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) (P1):** `config init` writes invalid template sections, leaving fresh configs degraded. **Resolved by [PR #9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281).**

- **[Issue #9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) (P1):** Added feature to support custom CA trust for remote MCP servers. This was a feature request but closed as completed.

- **[Issue #9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640) (P1):** Incorrect WhatsApp Web policy documentation. **Resolved.**

- **[Issue #9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) (P1):** WASM plugin calls have no timeouts; a dripping HTTP response can run unbounded. This is a serious runtime safety issue that was closed, but the resolution is not detailed in the digest.

### Medium Severity (P2) — Active

- **[Issue #9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) (P2):** Telegram channel delivers duplicate messages when model emits both tool_call and content.
- **[Issue #9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) (P2):** Provider failures bury the root cause under a generic error envelope, making debugging hard.
- **[Issue #10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) (P2):** Daemon diagnostics drop the underlying error chain.
- **[Issue #9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) (P2):** Daemon service launcher logs are unbounded.
- **[Issue #9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) (P3):** Concurrent `models refresh` runs can lose cache entries.

### Test/CI Flakiness

- **[Issue #10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251):** 17 Telegram tests are flaky on loaded CI runners due to wall-clock time assertions. This indicates a need for mocking timeouts in tests.

---

## 6. Feature Requests & Roadmap Signals

Several prominent feature requests are either actively being implemented or strong candidates for the next release.

**Active Implementations (Open PRs):**

- **[PR #9487](https://github.com/zeroclaw-labs/zeroclaw/pull/9487) & [Issue #10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050):** The RFCs on runtime-owned sessions and verbatim channel sends are the clearest signals for near-term architectural features.
- **[PR #9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635):** Fixes git subcommand resolution in the risk classifier.
- **[PR #9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013):** `refactor(config)!`: This is a breaking change that moves TodoWrite display config from daemon. This suggests the next version (likely v0.9.0) will have breaking config changes.

**Strong Roadmap Indicators:**

- **[Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780):** The realtime speech-to-speech channel is a major feature with an active PR, pointing to it being in the next major release.
- **[Issue #8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850):** The move to runtime WASM plugins is a massive undertaking that will reshape how channels and tools are distributed. This is a long-term roadmap item.
- **[Issue #7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790):** Bringing web-dashboard operator surfaces to zerocode is an ongoing effort for feature parity.
- **Security Hardening:** Several PRs (e.g., [#9476](https://github.com/zeroclaw-labs/zeroclaw/pull/9476), [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203), [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744)) focus on adding authentication and operator control, signaling that security is a top priority for v0.9.0.

---

## 7. User Feedback Summary

- **Cross-Platform Support:** The long-standing Windows test issue (#7462) is a major pain point for Windows users, causing degraded functionality.
- **Session Usability:** **Issue #10141** ("Please make sessions usable") is a direct plea from a user for better session management, finding the current approach frustrating. This is a clear UX concern.
- **Configuration Clarity:** The bug where `config init` creates a broken config (#9436) shows that onboarding can be a frustrating experience for new users.
- **Security Policy Confusion:** The bug (#10164) where users cannot allowlist high-risk commands is a source of confusion and friction, making it harder for power users to configure the tool.
- **Duplicate & Unclear Errors:** Multiple bugs (#9718, #9001) highlight issues with duplicate messages and unclear error reporting, which erode user trust and complicate debugging.

---

## 8. Backlog Watch

These issues are long-standing or critical and need maintainer attention.

- **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (Windows test failures):** This has been open since June 10 and is a P1. It has 19 comments and a clear repro. Despite the activity, there is no associated PR, indicating it may be blocked on a maintainer decision or a larger CI overhaul.
- **[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (Memory lifecycle RFC):** Open since May 22nd, this is a critical architectural RFC with 16 comments but no linked PR. It appears stalled pending design approval.
- **[Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (Granular sandbox policy):** An RFC open since late May, the discussion is ongoing, but it's marked `needs-author-action`, suggesting the author needs to respond to community feedback.
- **[Issue #9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645) (ZeroRouter preset):** This is a high-impact PR adding a new provider and device-flow login. It has been open since August 1st and is labeled `needs-author-action`. Maintainer review is needed to move this forward.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*