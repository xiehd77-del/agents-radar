# OpenClaw Ecosystem Digest 2026-07-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-08 02:51 UTC

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

# OpenClaw Project Digest — 2026-07-08

## Today's Overview

OpenClaw remains in a state of intense development activity with 500 issues and 500 pull requests updated in the last 24 hours. The project has 376 active open issues alongside 356 open PRs, with 124 issues resolved and 144 PRs merged or closed today — indicating a strong throughput of fixes and contributions. Despite zero new releases today, the volume of triaged work, including P1 security and stability items, suggests the team is deep in a maintenance and reliability phase following the earlier 2026.5.x release cycle. Community engagement is high, with numerous multi-comment discussions on critical bugs affecting message delivery, session state, and agent orchestration.

## Releases

No new releases today. The last recorded version on the issue tracker references **OpenClaw 2026.5.20** (May 20, 2026) and **2026.3.x** series versions. Users are actively testing and reporting regressions between incremental builds.

## Project Progress

Today's merged/closed PRs (144 total) reflect meaningful progress across several domains:

- **Cron & scheduling fixes**: PR #101977 addresses cron jobs with `sessionTarget: "main"` being incorrectly skipped when heartbeat scheduling is unconfigured, fixing silent task drops.
- **Unicode safety**: PR #101976 ensures background-task summaries in ACP are UTF-16 safe at truncation boundaries, preventing corrupted emoji/astral characters.
- **Browser stability**: PR #101933 (closed) fixes Chrome launch stderr pipe error handling in the browser extension.
- **Config parsing robustness**: PR #101972 (closed) prevents `parseKeyedAnswers` from splitting URLs, Windows paths, and time strings, a meaningful UX fix.
- **Logging improvements**: PR #101504 (closed) preserves JSON parse error causes in `decodeParams`, making malformed payloads debuggable.

## Community Hot Topics

### Most Active Issues (by comment count)

1. **[#25592 — Text between tool calls leaks to messaging channels](https://openclaw/openclaw/issues/25592)** (33 comments, P1, security/message-loss)
   - **Underlying need**: Users need clean separation between internal agent processing and user-facing output. This is a core UX and privacy concern.

2. **[#44925 — Subagent completion silently lost](https://openclaw/openclaw/issues/44925)** (21 comments, P1, session-state/message-loss)
   - **Underlying need**: Reliable subagent orchestration. Users cannot trust complex workflows when results vanish without retry or notification.

3. **[#11829 — Security Roadmap: Protecting API Keys](https://openclaw/openclaw/issues/11829)** (20 comments, security)
   - **Underlying need**: Enterprise-grade secret management. Multiple attack vectors for API key leakage are well-documented.

4. **[#22676 — Signal daemon stop() race condition](https://openclaw/openclaw/issues/22676)** (17 comments, P1, crash-loop)
   - **Underlying need**: Reliable gateway restarts. Orphaned processes and port contention break Signal integration.

5. **[#85333 — openclaw doctor --fix performance regression](https://openclaw/openclaw/issues/85333)** (15 comments, P1, performance)
   - **Underlying need**: Users expect consistent CLI performance. A 4-5x slowdown between point releases (55s → 229s+) is a serious regression.

### Most Active PRs

- **[#97888 — fix(android): require installed-apps disclosure consent](https://openclaw/openclaw/pull/97888)** — P1, critical for Google Play compliance, addresses app rejection risk.
- **[#99905 — fix(channels): honor configured read target policies](https://openclaw/openclaw/pull/99905)** — Large XL PR touching 12+ channels; essential for multi-channel reliability.
- **[#99417 — fix(matrix): add mm: namespace prefix to THINKING_TAG_RE](https://openclaw/openclaw/pull/99417)** — Fixes MiniMax reasoning tag recognition in Matrix monitor replies.

## Bugs & Stability

### Critical/P1 Bugs (Active)

| Issue | Summary | Severity | Fix PR? |
|-------|---------|----------|---------|
| [#25592](https://openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | Security, Message-loss | No (needs product decision) |
| [#44925](https://openclaw/openclaw/issues/44925) | Subagent completion silently lost on timeout | Session-state, Message-loss | No (needs maintainer review) |
| [#22676](https://openclaw/openclaw/issues/22676) | Signal daemon race condition on SIGUSR1 restart | Crash-loop, Message-loss | No (linked PR open) |
| [#85333](https://openclaw/openclaw/issues/85333) | doctor --fix 4-5x slower (55s → 229s+) | Performance regression | No (needs live repro) |
| [#29387](https://openclaw/openclaw/issues/29387) | Bootstrap files in agentDir silently ignored | Session-state, Security | No (linked PR open) |
| [#43367](https://openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable — session-lock failures | Session-state, Message-loss | No (linked PR open) |
| [#31583](https://openclaw/openclaw/issues/31583) | `exec` tool doesn't inherit `env` variables | Security, Regression | No (linked PR open) |
| [#99241](https://openclaw/openclaw/issues/99241) | Tool outputs render as unreadable image attachments | Session-state, Message-loss | No (needs live repro) |
| [#37634](https://openclaw/openclaw/issues/37634) | Sandbox isolated workspace mounted read-only | Session-state, Security | No (needs security review) |
| [#31331](https://openclaw/openclaw/issues/31331) | Docker + Sandbox can't workspaceAccess at all | Session-state, Security | No (needs security review) |
| [#43747](https://openclaw/openclaw/issues/43747) | Memory management inconsistent across users | Regression, UX friction | No (needs product decision) |

### Regressions Noted Today
- **Memory management chaos** (Issue #43747): Three colleagues report completely different memory store behavior — chunking/embedding vs. raw storage vs. SQLite dump — suggesting a silent divergence in memory subsystem behavior.
- **Avatar endpoints broken** (Issues #38439, #41201): `/avatar/{agentId}` returns 404 even with valid IDENTITY.md, a regression in the webchat UI.

## Feature Requests & Roadmap Signals

### High-Impact User Requests (by reaction count)

| Issue | Feature | Reactions | Likely Next Version? |
|-------|---------|-----------|---------------------|
| [#39604](https://openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` | 👍11 | High — clear security boundary config |
| [#42840](https://openclaw/openclaw/issues/42840) | MathJax/LaTeX support in Control UI | 👍9 | Medium — UX polish, low risk |
| [#37634](https://openclaw/openclaw/issues/37634) | Keep isolated sandbox workspace writable | 👍7 | High — directly affects sandbox usability |
| [#20786](https://openclaw/openclaw/issues/20786) | Telegram Business Bot support | 👍6 | Medium — niche but clear demand |
| [#28300](https://openclaw/openclaw/issues/28300) | Theme customization system | 👍5 | Medium — cosmetic, low priority vs bugs |
| [#27445](https://openclaw/openclaw/issues/27445) | `announceTarget` for subagent routing | 👍5 | High — improves multi-agent orchestration |

### Roadmap Signals

The **RFC for Distributed Agent Runtime** (Issue #42026, 7 comments) proposes splitting the monolithic gateway into a lightweight control plane and per-agent runtime processes. This is a significant architectural signal that the project is considering horizontal scalability and isolation improvements.

The **Tiered Bootstrap File Loading** proposal (Issue #22438, 17 comments) addresses a major token budget waste concern — users with large workspaces want progressive context control rather than loading all files into every session.

## User Feedback Summary

### Positive Signals
- High community engagement: 500 issues and 500 PRs updated in 24h indicates an active, contributing user base.
- Users actively filing detailed bug reports with reproduction steps, environment details, and expected behavior — a sign of mature, invested users.
- Multiple users contributed fixes today (PRs from wangmiao0668000666, chenyangjun-xy, MonkeyLeeT, etc.) showing strong external contribution.

### Pain Points (Recurring Themes)
1. **Message loss/reliability** — The most common P1 theme across 8+ high-comment issues. Text leaks between tool calls, subagent results vanish, tool outputs degrade to "(see attached image)" placeholders, and delivery failures plague multi-channel setups.
2. **Multi-agent orchestration fragility** — Concurrent agent add/config overwrites, session-lock failures, detached child work, and duplicate messages when agents communicate bidirectionally.
3. **Security concerns** — API key leakage vectors, sandbox workspace mount issues, bootstrap file loading bypasses, and environment variable inheritance gaps.
4. **Performance regressions** — The `doctor --fix` 4-5x slowdown is a high-visibility regression that erodes user confidence in CLI tooling.
5. **Memory inconsistency** — Multiple users report wildly different memory store behavior with no configuration differences, suggesting a subtle state management bug.

### User Satisfaction Indicators
- Several feature requests have 5-10 👍 reactions, indicating strong desire but also active community prioritization.
- Users are filing detailed RFCs (e.g., #35203 on multi-agent collaboration) suggesting they see OpenClaw as their long-term platform.
- The 124 closed issues and 144 merged/closed PRs today show the team is responsive to bug reports.

## Backlog Watch

### Long-Unanswered Important Issues (Needing Maintainer Action)

| Issue | Created | Days Open | Tags | Reason for Concern |
|-------|---------|-----------|------|---------------------|
| [#11829](https://openclaw/openclaw/issues/11829) | 2026-02-08 | 150 | security, bug | Security roadmap with 20 comments — foundational to enterprise adoption |
| [#25592](https://openclaw/openclaw/issues/25592) | 2026-02-24 | 134 | P1, security, message-loss | Diamond lobster rating, 33 comments — still needs product decision |
| [#22438](https://openclaw/openclaw/issues/22438) | 2026-02-21 | 137 | P2, session-state | Feature with 17 comments, linked PR open — progressive context loading |
| [#20786](https://openclaw/openclaw/issues/20786) | 2026-02-19 | 139 | P2, security | Telegram Business support, linked PR open — waiting on security review |
| [#39604](https://openclaw/openclaw/issues/39604) | 2026-03-08 | 122 | P2, security | 11 👍 — wants `allowPrivateNetwork` toggle, needs product decision |

### PRs Needing Maintainer Review

| PR | Created | Status | Concern |
|----|---------|--------|---------|
| [#101832](https://openclaw/openclaw/pull/101832) | 2026-07-07 | needs proof | Gemini thinking clamp fix — affects all Google model users |
| [#101715](https://openclaw/openclaw/pull/101715) | 2026-07-07 | needs proof | Model fallback retry loop fix — critical for model-switching reliability |
| [#101399](https://openclaw/openclaw/pull/101399) | 2026-07-07 | needs proof | Gateway auth token env-var placeholder detection — P0 security |
| [#97888](https://openclaw/openclaw/pull/97888) | 2026-06-29 | ready for maintainer look | Android disclosure consent — P1, blocking Google Play compliance |

### Aging Stale Issues with Active Impact
- **Issue #85333** — `doctor --fix` performance regression (stale, P1, 15 comments) — last updated 2026-07-07, still no maintainer action on the 4-5x slowdown.
- **Issue #85334** — `doctor --fix` circular plugin warning (stale, P2, 7 comments) — auto-modification bug that persists on every doctor run.
- **Issue #90370** — PostgreSQL storage support (closed, 12 comments) — user interest in replacing SQLite, but closed as stale. May need revival for enterprise users.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report.

---

## Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date:** 2026-07-08

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is currently in a **high-velocity, late-beta maturation phase**, characterized by intense bug-bashing, security hardening, and production-readiness preparation. The "big three" projects—**OpenClaw**, **Hermes Agent**, and **ZeroClaw**—are processing hundreds of issues and PRs daily, indicating massive community investment and real-world deployment pressure. A significant wave of **coordinated security disclosures** across multiple projects (LobsterAI, TinyClaw, NanoBot) has exposed a common vulnerability pattern: unauthenticated localhost control-plane APIs. Simultaneously, the ecosystem is converging on shared technical challenges—multi-agent orchestration reliability, memory persistence, and MCP (Model Context Protocol) tool stability—suggesting the community is actively solving for enterprise-grade dependability rather than raw feature velocity.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score | Assessment |
|---------|----------------------|-------------------|----------------|--------------|------------|
| **OpenClaw** | 500 | 500 | No new release; maintenance phase post-2026.5.x | **Stable/High** | High throughput, 124 issues closed, strong triage |
| **NanoBot** | 12 | 31 | v0.2.2 (last); pre-0.2.3 | **Moderate/Risky** | 3 critical security advisories unfixed; high bug density |
| **Hermes Agent** | 50 | 50 | v0.18.1 (July 7) | **Stable/High** | 660 PRs bundled; strong release cadence |
| **PicoClaw** | 7 | 4 | Stale (v0.2.8–v0.3.1) | **Low** | Low activity; unresolved bugs for 16+ days |
| **NanoClaw** | 1 | 23 | v2.1.38 (last) | **Stable/Moderate** | Heavy doc fix cycle; 1 critical security vuln |
| **NullClaw** | 0 | 0 | N/A | **Inactive** | No activity in 24h |
| **IronClaw** | 32 | 50 | Pre-release stabilization | **Stable/High** | Slack OAuth migration complete; bug-bash active |
| **LobsterAI** | 1 | 16 | 2026.7.7 (July 7) | **Moderate/Risky** | 3 critical security issues; high fix throughput |
| **TinyClaw** | 9 | 0 | Unknown | **Critical** | 9 security advisories, zero maintainer response |
| **Moltis** | 0 | 0 | N/A | **Inactive** | No activity in 24h |
| **CoPaw** | 16 | 38 | v2.0.0-beta.3 (July 7) | **Stable/High** | Pre-GA polish sprint; strong contributor engagement |
| **ZeptoClaw** | 0 | 0 | N/A | **Inactive** | No activity in 24h |
| **ZeroClaw** | 22 | 50 | v0.8.2 (latest); v0.8.3 in progress | **Moderate/Stable** | 45 open PRs; review bottleneck; 2 P1 bugs 52 days old |

**Key observations:**
- **OpenClaw, Hermes Agent, and IronClaw** lead in raw activity and stability
- **TinyClaw, NanoBot, LobsterAI** are in security review phases with unfixed critical vulnerabilities
- **NullClaw, Moltis, ZeptoClaw** show no activity—potential dead projects
- **ZeroClaw** has strong momentum but is accumulating technical debt (52-day-old P1 bugs)

### 3. OpenClaw's Position

**Advantages vs Peers:**
- **Community scale:** 500+ issues/PRs updated in 24h dwarfs all peers; 376 open issues and 124 closed today demonstrate unmatched community engagement
- **Triage throughput:** Closes 124 issues and merges 144 PRs daily—more than most projects handle in a week
- **Maturity:** Deep in maintenance/reliability phase after 2026.5.x cycle, focusing on P1 security and stability—a sign of production readiness
- **Bug visibility:** Comprehensive bug tagging and cross-referencing (e.g., linking P1 issues to fix PRs) shows mature project management

**Technical Approach Differences:**
- OpenClaw's **distributed agent runtime RFC** (#42026) proposes splitting the monolithic gateway into a control plane + per-agent processes—a more ambitious architectural vision than peers' incremental refactors
- **Tiered bootstrap file loading** (#22438) addresses context window management at a fundamental level, a problem most peers haven't tackled
- Multi-agent orchestration issues (session-lock failures, subagent completion loss) are more deeply discussed than in any other project—OpenClaw is the **reference implementation** for this pattern

**Community Size Comparison:**
- **10x+ the daily activity** of the next busiest project (Hermes Agent, 50 issues/50 PRs)
- The only project with a "Diamond Lobster" bug rating system (#25592)
- Users file detailed RFCs (e.g., #35203 on multi-agent collaboration) suggesting long-term platform commitment

**Vulnerability:** Despite high throughput, OpenClaw has 11 unresolved P1 bugs, including message-loss issues that have been open for 134 days (#25592). This suggests the volume of incoming issues may outpace even their aggressive triage.

### 4. Shared Technical Focus Areas

The following requirements are emerging across *multiple* independent projects, indicating ecosystem-wide priorities:

| Focus Area | Affected Projects | Specific Needs |
|------------|-------------------|----------------|
| **Multi-Agent Orchestration Reliability** | OpenClaw, Hermes Agent, CoPaw, LobsterAI | Subagent completion loss, session-lock failures, agent config sync bugs, user isolation in DM sessions |
| **Memory Persistence & Consistency** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | Inconsistent memory store behavior, cron agents losing write capability, state loss across agent rebuilds, per-agent identity isolation |
| **MCP Tool Stability & Filtering** | ZeroClaw, NanoBot, OpenClaw | Tool schema clone churn (memory leaks), tool_filter_groups bypass, registry/prompt divergence, preference set loss |
| **Security: Localhost Auth Bypass** | TinyClaw, LobsterAI, NanoBot, NanoClaw | Unauthenticated control-plane APIs, token replay, path traversal, file exfiltration via media flows |
| **UI/UX Polish for Production** | ZeroClaw, IronClaw, CoPaw, OpenClaw | Web dashboard UX gaps, missing i18n, broken Telegram onboarding, context loss on stop |
| **Performance Regressions** | OpenClaw, ZeroClaw, IronClaw | CLI 4-5x slowdown, memory growth from tool schema cloning, large session crashes |
| **Cross-Platform Gaps** | Hermes Agent, ZeroClaw, CoPaw, PicoClaw | Windows port binding, macOS gateway crash, ffmpeg discovery, Electron sandbox ACL corruption |
| **Provider Reliability** | Hermes Agent, PicoClaw, OpenClaw | Model fallback retry loops, provider connection drops, tool call leak with specific providers |

**Analysis:** The convergence on **memory consistency, MCP reliability, and security hardening** suggests the ecosystem is transitioning from "can it work?" to "can we trust it?"—a hallmark of enterprise maturation.

### 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | ZeroClaw | CoPaw | IronClaw | NanoBot |
|-----------|----------|--------------|----------|-------|----------|---------|
| **Primary Focus** | Core reference / universal agent | Production deployment & security | Tools & safety governance | Plugin ecosystem & GA polish | Slack integration & UI refinement | Lightweight agent for messaging |
| **Target User** | Power users, developers, enterprise | Production ops teams | Security-conscious developers | Plugin developers, GA adopters | Slack-heavy teams | Messaging-first casual users |
| **Architecture** | Monolithic gateway → distributed (RFC) | Modular with production hardening | Single-binary with web dashboard | Plugin-channel system, Tauri desktop | Rust backend, WebUI v2 | Python-based, messaging-focused |
| **Release Cadence** | Major cycles (2026.5.x) + patch | Fast patch (v0.18.1 after v0.18.1) | In-progress v0.8.3 | Beta track (v2.0.0-beta.3) | Pre-release stabilization | Stalled at v0.2.2 |
| **Security Posture** | Proactive (P1 tracking) but backlogged | Strong (production hardening merged) | Weak (52-day-old P1 bugs) | Moderate (pre-release bugs identified) | Moderate (bug-bash active) | Critical (3 unfixed security advisories) |
| **Key Differentiator** | Scale & community; distributed runtime vision | Security-first; 660 PRs bundled in patch | SOP authoring surface; skill management | Plugin channel system; Windows GUI automation | Slack OAuth migration; bug-bash infrastructure | Provider web search; WhatsApp fix speed |
| **Weakness** | Message-loss regressions; 134-day-old P1 | Review bottleneck; delegation quality | MCP tool filtering debt; locale gaps | Large session crashes; Windows sandbox | P1 timestamp bug open 57 days | Security disclosures; stalled release |

**Strategic Insight:** The ecosystem is fragmenting into two tiers: **infrastructure projects** (OpenClaw, IronClaw) focused on reliability and scale, and **application-layer projects** (CoPaw, NanoBot) focused on user-facing features. ZeroClaw sits in the middle, trying to be both—which may explain its accumulated technical debt.

### 6. Community Momentum & Maturity

**Tier 1: High Momentum / Rapid Iteration**
- **OpenClaw** — Highest absolute activity; ecosystem reference point
- **ZeroClaw** — 50 PRs/day; v0.8.3 in active development; strong contributor base
- **IronClaw** — 50 PRs/day; Slack OAuth migration completed; systematic bug-bash
- **CoPaw** — 38 PRs/day; pre-GA sprint; first-time contributors active
- **Hermes Agent** — Stable patch release; production hardening prioritized

**Tier 2: Stabilizing / Maintenance**
- **NanoClaw** — Heavy documentation fix cycle; point release likely imminent
- **LobsterAI** — High fix throughput but compromised by security discoveries

**Tier 3: Stalled / At Risk**
- **PicoClaw** — Low activity; unresolved bugs aging; maintainer bandwidth stretched
- **NanoBot** — Release stalled; critical security issues unfixed
- **TinyClaw** — Active security disclosure but zero maintainer response—most at-risk project
- **NullClaw, Moltis, ZeptoClaw** — Likely dead; no activity

**Maturity Indicators:**
- **Security response:** IronClaw and ZeroClaw patched RUSTSEC advisories same-day; TinyClaw and LobsterAI have zero maintainer responses to critical disclosures
- **Release hygiene:** Hermes Agent bundles ~660 PRs per patch; OpenClaw has clear version tracking; NanoBot has stalled at v0.2.2
- **Community investment:** OpenClaw and ZeroClaw have recurring contributor names filing detailed issues; PicoClaw's ADB tool PR shows engaged but smaller community

### 7. Trend Signals

1. **Security: The "Localhost Control-Plane" Vulnerability Pattern** — Five projects (TinyClaw, LobsterAI, NanoBot, NanoClaw, ZeroClaw) received reports of unauthenticated localhost APIs allowing token replay, file exfiltration, or agent behavior modification. This is the most significant ecosystem-wide security pattern. **Takeaway:** Any project exposing a local API without authentication is vulnerable. Expect a rapid patch cycle or coordinated disclosure response.

2. **MCP as the Universal Tool Protocol — But Unstable** — MCP tool filtering, schema cloning, and registry divergence are recurring themes across ZeroClaw, NanoBot, and OpenClaw. The protocol is winning adoption but causing systemic reliability issues. **Takeaway:** Standardizing MCP initialization/safety patterns across projects would benefit the entire ecosystem.

3. **Multi-Agent Orchestration is the Hardest Problem** — OpenClaw, Hermes Agent, CoPaw, and LobsterAI all report session-lock failures, subagent completion loss, and agent identity isolation bugs. No project has fully solved this. **Takeaway:** Expect this to be the defining architectural challenge for the next 12-18 months, with RFCs like OpenClaw's distributed runtime gaining traction.

4. **Enterprise Readiness Requires Memory Consistency** — Multiple users report memory store behavior diverging silently across sessions. Cron agents losing write capability is a production blocker. **Takeaway:** Memory persistence is the top UX-reliability gap. Projects that solve this (Hermes Agent's feedback routing, CoPaw's usage-aware search) will have an advantage.

5. **Windows and macOS Remain Second-Class Platforms** — ZeroClaw's zombie port binding, Hermes Agent's macOS gateway crash, and CoPaw's sandbox ACL corruption show that cross-platform QA is lagging. **Takeaway:** For enterprise adoption, Windows/macOS parity needs dedicated attention. Linux-first development is creating platform debt.

6. **Documentation Drift is an Ecosystem-Wide Problem** — NanoClaw's 4-doc rewrite batch, ZeroClaw's Telegram documentation errors, and PicoClaw's stale architecture docs suggest maintaining accurate docs at high velocity is a shared challenge. **Takeaway:** Projects should invest in doc-generation tooling or commit to a "documentation sprint" per release cycle.

7. **Community Contributors are Willing but Bottlenecked** — ZeroClaw has 45 open PRs; OpenClaw has 356 open PRs. Multiple projects have first-time contributors whose PRs languish. **Takeaway:** Maintainer review bandwidth is the ecosystem's most constrained resource. Projects that implement automated CI gating or rotation-based reviews will ship faster.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for **2026-07-08**.

---

### 1. Today's Overview
NanoBot is experiencing **very high activity**, with 31 PRs and 12 Issues updated in the last 24 hours—indicating a major push toward stability and security. The project shipped no new releases today, but a large batch of closed PRs (11) suggests maintainers are clearing a significant bug backlog. However, a surge of **three high-severity security reports** regarding the WebUI token bootstrap process demands immediate attention. The community is actively contributing fixes for regressions (WhatsApp, MCP, and shell zombie processes), reflecting a healthy but pressured development cycle.

### 2. Releases
No new releases were published today. The most recent version remains **0.2.2**, which was reported as introducing the WhatsApp group regression (Issue #4823).

### 3. Project Progress
Several key fixes and features advanced to closure today:
- **Goal System Refactoring**: PR #4833 (closed) and PR #4844 (open) gate persistent goals behind a dedicated runtime mode, preventing tool clutter in normal chat.
- **Provider Web Search**: PR #3743 (closed) now supports provider-hosted web search (e.g., Azure OpenAI) with a local fallback, a feature requested since May.
- **MCP Stability**: PR #4763 (closed) adds session dividers for Feishu. PR #3378 (camera capture) and PR #3517 (WeChat token refresh) were also merged after long reviews.
- **Shell & Subprocess**: PR #4840 (open) aims to fix zombie process reaping across all exit paths, a critical reliability fix for long-running agents.

### 4. Community Hot Topics
- **WhatsApp Group Regression (Issue #4823)**: 3 comments. Users report that post-0.2.2, group responses are sent to *every* group the bot is in, breaking `allowFrom` filters. A fix PR (#4834) is already open.
- **Multimodal Crash (Issue #4800)**: 1 comment. High-profile bug where `.strip()` is called on list-form `msg.content`, crashing on image/audio messages. PR #4837 is tagged as a fix.
- **MCP Reconnect Crash (Issue #4764)**: 0 comments but high activity. A complex conflict over how to handle `AsyncExitStack` cleanup during MCP gateway reconnects. PR #4843 is a competing fix attempting a more elegant solution.

### 5. Bugs & Stability
**Severity: Critical**
- **Security: WebUI Token Leak (Issues #4825, #4826, #4827)**: Three related reports from YLChen-007 detail that any localhost process can call `/webui/bootstrap` to mint API bearer tokens *without authentication*. No fix PR yet. **High risk for multi-user servers.**
- **WhatsApp Group Spam (Issue #4823)** [OPEN]: A regression that breaks group segmentation. Fix PR #4834 is open.

**Severity: High**
- **Multimodal Crash (Issue #4800)** [OPEN]: Unhandled `AttributeError` on non-string content. Fix PR #4837 is open.
- **Tool Validation Silent Failure (Issue #4805)** [OPEN]: `suppress(Exception)` hides tool validation errors. Fix PR #4837 is open.
- **MCP Stale Stack Crash (Issue #4843)** [OPEN]: Gateway crash on reconnect. Fix PR #4843 is open.

**Severity: Medium**
- **aiohttp Missing for Slack (Issue #4829)** [OPEN]: Dependency error.
- **Matrix Device Untrusted (Issue #4841)** [OPEN]: Missing cross-signing support.

**Severity: Low**
- **WebUI Landing Message Race (Issue #4835)** [OPEN]: Message sent to wrong chat. Fix PR #4836 is open.

### 6. Feature Requests & Roadmap Signals
- **Provider-Hosted Web Search (PR #3743)**: Merged. Expect this in the upcoming release as an opt-in feature for Azure OpenAI users.
- **WebUI File Edit Diff View (PR #4828)**: Open P2 feature. Suggests the team is polishing the WebUI for code-generation workflows.
- **Goal Runtime Gating (PR #4844)**: Signals a shift toward cleaner agent state management—tools should only appear when relevant.
- **MCP Server Idle Timeout (PR #4506)**: An enhancement for resource management, likely to land in 0.2.3.

### 7. User Feedback Summary
- **Dissatisfaction (High)**: Users are frustrated by the WhatsApp group regression (Issue #4823), calling it "broken." The stream stall error (Issue #4013) also caused significant workflow disruption.
- **Satisfaction (Moderate)**: Users appreciate the speed of fixes. PR #4837 and #4843 show the team is responsive to crashes and security reports.
- **Pain Point**: Security reports are piling up. The three WebUI token reports suggest the bootstrap API was designed for convenience but lacks authentication guards.

### 8. Backlog Watch
- **DNS Rebinding SSRF (Issue #4611)**: Closed today, but the fix was only a one-line comment update. The underlying TOCTOU issue (resolved IP changing between validation and request) may still be exploitable. Needs a second look.
- **Stream Stall Timeout (Issue #4013)**: Closed, but the root cause (hardcoded 90s timeout) was not addressed—only a workaround was applied. Long-running goals may still fail.
- **Camera Capture (PR #3378)**: Took 2.5 months to merge; requires maintainer bandwidth for complex hardware integrations.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — July 8, 2026

## Today's Overview
The Hermes Agent project shows very high activity, with 50 issues and 50 PRs updated in the last 24 hours, indicating a vibrant development cycle. The release of **v0.18.1 (v2026.7.7)** on July 7 serves as a major stability checkpoint, rolling up approximately 660 PRs since v0.18.0. However, the project is also accumulating fresh bugs at a rapid pace, with 38 active issues and 46 open PRs, suggesting that while core maintainers are shipping fixes, the scope of community-reported problems is growing. The project remains in a **high-velocity development phase** with strong community engagement but some pressure on stability and responsiveness.

---

## Releases

### ⚡ Hermes Agent v0.18.1 (v2026.7.7)
- **Release Date:** July 7, 2026
- **Type:** Patch release
- **Changelog:** This tagged release consolidates ~660 merged PRs since v0.18.0 (July 1) — including bug fixes, hardening, and in-progress feature work — into a stable build for downstream consumers (Docker images, hosted deployments, PyPI).
- **Breaking Changes:** None indicated (patch release).
- **Migration Notes:** Users should update Docker images or pip install to `hermes-agent==0.18.1`; no manual migration steps reported.

---

## Project Progress
### Merged/Closed PRs Today (4 total)
1. **#60643** — `fix(whatsapp): unpin Baileys from git commit, use published 7.0.0-rc13`  
   Dramatically improves WhatsApp bridge install speed (~3 seconds vs ~3 minutes) by switching from a pinned git source to the published npm release.

2. **#60636** — `feat: Harden Hermes for production deployment` (merged)  
   Adds API server security hardening (hashed bearer-token revocation, optional cookie auth with CSRF, production Dockerfile/docker-compose).

3. **#58460** — `feat: add Codex operations support` (merged)  
   Adds Codex operations plugin/CLI for safer observable workflows, Repomix context-packaging guidance, and Discord channel prompt carryover into voice turns.

4. **Multiple closed issues** (12 total) — Key fixes addressed today include:
   - **#60596** (UI alignment on Windows — fixed via PR or cherry-pick)
   - **#60584** (`hermes chat -q` clears scrollback — closed)
   - **#50199, #18946, #57930** (delegation/base_url config persistence bugs — all closed, suggesting a consolidated fix)
   - **#16725, #32263** (Discord thread bypass and config field bugs)

**Key advances:** WhatsApp UX is now production-ready on install times; production security hardening landed; delegation config staleness appears fixed; Discord platform bugs are being actively eliminated.

---

## Community Hot Topics

### Most Active Issues (by comment count)

1. **[#34390] — Feature: dashboard --allowed-hosts flag for reverse-proxy/Tailscale** (11 comments)  
   *URL:* [NousResearch/hermes-agent Issue #34390](https://github.com/NousResearch/hermes-agent/issues/34390)  
   **Underlying need:** Users running Hermes Dashboard behind reverse proxies (Tailscale, nginx) cannot currently bypass host-header validation. This is a blocker for remote/team deployments.

2. **[#19986] — Make non-core bundled skills optional** (9 comments, 3 👍)  
   *URL:* [NousResearch/hermes-agent Issue #19986](https://github.com/NousResearch/hermes-agent/issues/19986)  
   **Underlying need:** Users want a minimal default install to reduce update weight and maintenance burden. Many never use the bundled skills.

3. **[#6838] — MiniMax provider connection drops after switch from OpenClaw** (7 comments)  
   *URL:* [NousResearch/hermes-agent Issue #6838](https://github.com/NousResearch/hermes-agent/issues/6838) — **CLOSED**  
   **Underlying need:** Provider reliability is critical for production users; this was a serious migration blocker that has been addressed.

4. **[#3506] — Durable Feedback Routing for memory/skills/follow-up planning** (3 comments)  
   *URL:* [NousResearch/hermes-agent Issue #3506](https://github.com/NousResearch/hermes-agent/issues/3506)  
   **Underlying need:** Users want Hermes to learn from feedback more consistently — the primitives exist but the routing logic is incomplete.

5. **[#38647] — Cron agents silently lose memory write capability** (2 comments, 2 👍)  
   *URL:* [NousResearch/hermes-agent Issue #38647](https://github.com/NousResearch/hermes-agent/issues/38647)  
   **Underlying need:** Automated tasks (cron) cannot persist data—a significant reliability gap for scheduled workflows.

6. **[#27438] — Emoji Reaction Reinforcement** (2 comments)  
   *URL:* [NousResearch/hermes-agent Issue #27438](https://github.com/NousResearch/hermes-agent/issues/27438)  
   **Underlying need:** Users want emoji reactions (👍/❤️/👎) to serve as training feedback, not just decoration.

### Most Active PRs (today)
- **#60636** (Harden for production) — merged, indicating maintainer prioritization of security.
- **#60643** (WhatsApp Baileys fix) — merged; high impact on install UX.
- **#60644** (fix /compress command for Desktop) — opened today, addressing a recent regression.

---

## Bugs & Stability

### Today's New/Active Bugs (by severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1** | [#60525](https://github.com/NousResearch/hermes-agent/issues/60525) | `write_file()` commits to disk before syntax check — invalid content reported as success | No |
| **P1** | [#60631](https://github.com/NousResearch/hermes-agent/pull/60631) | Gateway/cron shutdown not draining in-flight cron work (PR open) | Yes — [#60631](https://github.com/NousResearch/hermes-agent/pull/60631) |
| **P2** | [#60603](https://github.com/NousResearch/hermes-agent/issues/60603) | `/compress` command not recognized in Desktop TUI | Yes — [#60644](https://github.com/NousResearch/hermes-agent/pull/60644) |
| **P2** | [#60543](https://github.com/NousResearch/hermes-agent/issues/60543) | `/steer` race condition — out-of-band messages lost between tool batch drain and API call | No |
| **P2** | [#60572](https://github.com/NousResearch/hermes-agent/issues/60572) | Dashboard spawns MCP server processes unnecessarily | No |
| **P2** | [#46944](https://github.com/NousResearch/hermes-agent/issues/46944) | `delegate_task(background=true)` silently degrades to synchronous | No |
| **P2** | [#46960](https://github.com/NousResearch/hermes-agent/issues/46960) | `background` parameter dropped for OpenRouter provider | No |
| **P2** | [#60635](https://github.com/NousResearch/hermes-agent/issues/60635) | QQAdapter crashes on reconnect (missing `is_reconnect` param) | Yes — [#60641](https://github.com/NousResearch/hermes-agent/pull/60641) (duplicate PR) |
| **P2** | [#45454](https://github.com/NousResearch/hermes-agent/issues/45454) | Gateway crashes with `SystemExit: 75` on macOS (persistent across versions) | No |
| **P2** | [#60597](https://github.com/NousResearch/hermes-agent/issues/60597) | Gemini provider — UI wrapper crash on streaming response | No |
| **P3** | [#60616](https://github.com/NousResearch/hermes-agent/issues/60616) | `hermes -z` crashes with SIGABRT when `memory.provider=honcho` | No |
| **P3** | [#60624](https://github.com/NousResearch/hermes-agent/issues/60624) | Discord ffmpeg not auto-discovered on Windows | No |

**Notable:** Two **P1** bugs were reported today — one in `write_file()` (data integrity issue) and one in gateway/cron shutdown (production reliability). Both need maintainer attention.

---

## Feature Requests & Roadmap Signals

### New Feature Requests (today)
- **#60638** — Contribution-driven shell on layout-tree model (PR #60638 — opened today, non-trivial architectural change)
- **#60640** — Add Italian locale for Desktop app
- **#60446** — Sequential/auto-incrementing IDs for pending skill/memory writes (simpler UX)

### Ongoing High-Impact Feature Requests
1. **#34390** — Dashboard `--allowed-hosts` for reverse proxy — **blocker for production deployments**, likely to land in v0.19.x
2. **#19986** — Optional bundled skills — would reduce default install by ~40-60%, strong community support
3. **#3506** — Durable Feedback Routing — foundational for learning agents, likely a **v0.20.0 candidate**
4. **#27438** — Emoji Reaction Reinforcement — relatively simple to implement, could be a fast v0.19.x feature
5. **#38647** — Cron memory write capability — critical for scheduled agent workflows; likely to be fixed soon

**Prediction for next release (v0.19.x, ~July 15):** The production hardening PR (#60636) and WhatsApp fix (#60643) are already in v0.18.1. Next likely features: Dashboard `--allowed-hosts`, `/compress` fix, and possibly the cron memory fix.

---

## User Feedback Summary

### Recurring Pain Points (from today's issues)
- **Configuration staleness:** Multiple users reported that `hermes config set` changes don't take effect in running processes (#18946, #50199, #57930, #51435) — this appears to be a systemic CLI_CONFIG caching issue.
- **Delegation inconsistencies:** `delegate_task(background=true)` silently fails across multiple providers (#46944, #46960), degrading async to synchronous.
- **Cross-platform issues:** Windows users report console window flashing (#60647), ffmpeg missing (#60624), and UI alignment bugs (#60596).
- **Platform adapter gaps:** QQ Bot crashes on reconnect (#60635); Discord config not profile-isolated (#50404).
- **Memory/cron reliability:** Cron agents silently lose write capability (#38647); Honcho plugin crashes on oneshot mode (#60616).

### Positive Signals
- The v0.18.1 release bundles ~660 fixes — maintainers are actively addressing the backlog.
- WhatsApp bridge install time reduced from 3 minutes to 3 seconds — a massive UX win.
- Italian locale being contributed (#60640) shows growing international user base.
- Security hardening PR was quickly merged, indicating maintainer commitment to production use cases.

### Dissatisfaction Indicators
- Persistent crashes on macOS Telegram gateway (#45454) from v0.14.0 through v0.16.0 — no fix in sight.
- The `/compress` command not working in Desktop (#60603) after it was advertised suggests a QA regression.
- Multiple delegation bugs suggest the feature is still "beta quality" despite being core functionality.

---

## Backlog Watch

### Long-unanswered Important Issues (needing maintainer attention)

1. **[#45454] — Gateway crashes with SystemExit: 75 on macOS** *(opened June 13; 1 comment)*  
   *URL:* [NousResearch/hermes-agent Issue #45454](https://github.com/NousResearch/hermes-agent/issues/45454)  
   **Status:** No fix proposed. Affects macOS users across multiple versions. Likely a Python async shutdown issue.

2. **[#3506] — Durable Feedback Routing** *(opened March 28; 3 comments)*  
   *URL:* [NousResearch/hermes-agent Issue #3506](https://github.com/NousResearch/hermes-agent/issues/3506)  
   **Status:** No PR. Core architectural feature that would differentiate Hermes from competitors — getting no traction.

3. **[#19986] — Optional bundled skills** *(opened May 5; 9 comments, 3 👍)*  
   *URL:* [NousResearch/hermes-agent Issue #19986](https://github.com/NousResearch/hermes-agent/issues/19986)  
   **Status:** No PR. Strong community demand but no maintainer signal.

4. **[#34390] — Dashboard --allowed-hosts** *(opened May 29; 11 comments)*  
   *URL:* [NousResearch/hermes-agent Issue #34390](https://github.com/NousResearch/hermes-agent/issues/34390)  
   **Status:** No PR. Highest comment count of any open issue — production deployment blocker.

5. **[#27438] — Emoji Reaction Reinforcement** *(opened May 17; 2 comments)*  
   *URL:* [NousResearch/hermes-agent Issue #27438](https://github.com/NousResearch/hermes-agent/issues/27438)  
   **Status:** No PR. Low-hanging fruit for user retention on messaging platforms.

6. **PR #24302 — Redact sensitive MCP URL query values** *(opened May 12; no comments from maintainers)*  
   *URL:* [NousResearch/hermes-agent PR #24302](https://github.com/NousResearch/hermes-agent/pull/24302)  
   **Status:** Open for 57 days — security-sensitive PR languishing.

### Top Priority for Maintainers
- The **P1 write_file() syntax check bug** (#60525) — data integrity issue should be fixed within 24h.
- The **delegation config staleness** cluster (3 closed issues + 2 open) needs a systemic fix rather than point patches.
- **MacOS gateway crash** (#45454) — affects a major platform with no workaround.

---

**Summary Assessment:** Hermes Agent is in a **high-velocity but somewhat chaotic** development phase. The v0.18.1 release is a strong stability signal, but the project is adding bugs faster than it's closing them (38 open vs 12 closed today). Community engagement is excellent, with users actively testing, reporting, and even contributing features (Italian locale, Codex support). However, the backlog of unanswered feature requests (some over 2 months old) and unmerged PRs suggests maintainers are overwhelmed. The project would benefit from a **dedicated triage week** to close the delegation/config staleness issues and address the top-voted feature requests before they go stale.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-08

## Today's Overview
Project activity is moderate with 7 issues updated in the last 24 hours (5 open, 2 closed) and 4 pull requests updated (3 open, 1 closed). No new releases were published today. The maintainer team is actively reviewing PRs, with two backward-compatibility and refactoring PRs now open, though several older bugs remain open across versions v0.2.8–v0.3.1. Community engagement is stable but modest, with most issues receiving limited comments and reactions.

## Releases
No new releases were published on 2026-07-08.

## Project Progress
- **PR #3157 (CLOSED/merged)** — `feat: add Android ADB remote operations tool` (sipeed/picoclaw/pull/3157). Adds experimental ADB-backed tool for Android device control (screenshots, UI hierarchy, tap/swipe/text input). Fixed primitives, no arbitrary shell execution.
- **PR #3222 (OPEN)** — `refactor(deltachat): cleanup implementation, documentation -320LOC` (sipeed/picoclaw/pull/3222). Drops legacy features, removes hardcoded relay list in favor of official website, drops password-based email config, renames `invite_link` → `join_invite_link`.
- **PR #3233 (OPEN)** — `Fix pr 3222 backward compat` (sipeed/picoclaw/pull/3233). Ensures backward compatibility for the refactored DeltaChat implementation.
- **PR #3226 (OPEN)** — `fix(tools): stop write_file from coaching destructive overwrite (#3150)` (sipeed/picoclaw/pull/3226). Prevents the `write_file` tool from encouraging model overwrites of `memory/MEMORY.md`.

## Community Hot Topics
- **Issue #3093 [CLOSED]** — *"I need SimpleX or tox"* (sipeed/picoclaw/issues/3093). 5 comments, 1 👍. User requests new protocol integrations (SimpleX, Wire, Tox). Closed as stale—signal that maintainers may not prioritize this.
- **Issue #3153 [OPEN]** — *"Volcengine Doubao Seed tool calls occasionally leak as <seed:tool_call> text"* (sipeed/picoclaw/issues/3153). 3 comments. Unresolved bug affecting `doubao-seed-2.0-pro`—raw tool call text returned instead of execution. Not yet pinned by maintainers.
- **Issue #3195 [OPEN]** — *"OpenAI GPT does not work on NanoKVM with default config"* (sipeed/picoclaw/issues/3195). 2 comments. Setup issue on NanoKVM 2.4.0—new feature integration pain point.
- **Issue #3232 [NEW, OPEN]** — *"Rate limiting doesn't work if no fallback models is configured"* (sipeed/picoclaw/issues/3232). Reported today. Configuration logic bug in v0.3.1—rate limiting ineffective without fallback models. No comments yet.

Underlying community needs: Protocol expansion (SimpleX/Tox), platform compatibility (NanoKVM), reliable tool execution (leaking `seed:tool_call`), and config robustness (rate limiting).

## Bugs & Stability
- **HIGH** — Issue #3232: Rate limiting ineffective without fallback models (sipeed/picoclaw/issues/3232). Affects v0.3.1, GPT-5.5. No fix PR yet. Configuration bug could cause API overuse for users with single-model setups.
- **MEDIUM** — Issue #3153: Tool calls leak as raw `<seed:tool_call>` text with Volcengine Doubao (sipeed/picoclaw/issues/3153). Affects v0.2.8+. Unresolved since June 22. Could break agent workflows when using Coding Plan models.
- **MEDIUM** — Issue #3159: Task repetition bug (Chinese report) (sipeed/picoclaw/issues/3159). Model repeats previous task before new one. v0.2.9, DeepSeek. Closed as stale—no fix identified.
- **LOW** — Issue #3195: OpenAI GPT fails on NanoKVM (sipeed/picoclaw/issues/3195). Setup/config issue. Not a core code bug but impacts new device support.
- **LOW** — Issues #3196 and #3197: Codex and Antygavity OAuth login not working (sipeed/picoclaw/issues/3196, #3197). Duplicate reports on same auth failure. v0.2.9. No maintainer response.

## Feature Requests & Roadmap Signals
- **Requested:** SimpleX, Wire, and Tox protocol gateways (Issue #3093). Low likelihood for next release—closed as stale.
- **Added (merged):** Android ADB remote operations tool (PR #3157). Likely to appear in next release as experimental.
- **Refactored:** DeltaChat cleanup (PR #3222, #3233). Likely to land in next version with backward compatibility fixes.
- **Predicted next version features:** ADB tool, cleaned DeltaChat module, `write_file` safety fix, rate limiting bug fix.

## User Feedback Summary
- **Pain points:** Setup friction on new hardware (NanoKVM), OAuth login failures (Codex/Antygavity), task repetition, raw tool call leaks, and rate limiting misconfiguration.
- **Use cases:** Single-model API usage, multi-step agent task execution, remote device control (ADB), non-English workflow (Chinese reports), protocol diversity desire.
- **Satisfaction indicators:** Moderate—active contributions (ADB tool PR, write_file fix) suggest engaged community, but several unresolved bugs and stale issues indicate maintainer bandwidth is stretched.

## Backlog Watch
- **Issue #3153** (sipeed/picoclaw/issues/3153) — Tool call leak with Volcengine Doubao. Open 16 days, no maintainer assignment, 3 comments. Should be triaged as it affects a major provider.
- **Issue #3196/#3197** (sipeed/picoclaw/issues/3196, #3197) — Duplicate OAuth login failures. Both open 8 days, no maintainer response. Identical reports suggest widespread auth regression.
- **Issue #3232** (sipeed/picoclaw/issues/3232) — Rate limiting bug. Reported today—needs immediate triage as it affects production API usage limits.
- **PR #3226** (sipeed/picoclaw/pull/3226) — `write_file` destructive overwrite fix. Open 3 days, no merge status update. Important safety improvement for memory file management.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — July 8, 2026

## 1. Today's Overview
Project activity is **elevated**, with 23 PRs updated and 1 new security issue raised in the last 24 hours. The project is in a **heavy documentation and fix cycle**: 7 closed PRs included a coordinated batch of documentation rewrites (`#2961`–`#2964`) plus important runtime fixes for agent-runner error handling and rate-limit detection. A **High severity security vulnerability** opened as Issue `#2970` (unauthorized action forgery via unauthenticated loopback webhook) is the most significant risk item. No new releases were cut, but the volume of merged fixes suggests a point release (v2.1.39+) may be imminent.

## 2. Releases
**No new releases** in the last 24 hours. Last stable tag remains at v2.1.38 (08a1ac9). Given the volume of security and correctness fixes merged today, maintainers may cut a patch release soon.

## 3. Project Progress
**9 PRs were merged or closed** today:
- `#2965` — **Fixed rate-limit event parsing**: `translateEvents` now matches `rate_limit_event` as a top-level SDK message type (SDK 0.3.x compatibility)
- `#2964` — **SDK deep-dive doc rewritten** to match pinned `@anthropic-ai/claude-agent-sdk` 0.3.197 (~6700-line `sdk.d.ts`)
- `#2963` — **`architecture.md` and `agent-runner-details.md`** rewritten from stale schematics to current code
- `#2962` — **DB schema docs synced** with migrations 010–018 (messaging_group_agents columns, trigger_rules → trigger_ruleset)
- `#2961` — **Mechanical doc fixes** across README, CONTRIBUTING, CLAUDE.md (removed solicited skills, updated export paths)
- `#2919` — Large PR test (metadata-only)
- `#2922` — **Discord forwarded-message snapshots unwrapped** so agents see forwarded content
- `#2804` — **CLI `ncl messaging-groups create` fixed** (was throwing `NOT NULL constraint failed`)

**Notable:** The `#2961`–`#2964` series represents a systematic staleness sweep of 4 key documentation files, bringing them in line with the v2.1.38 codebase.

## 4. Community Hot Topics
The most active discussion topics today focus on **security hardening and operational correctness**:

- **Issue `#2970`** (Security, 0 comments, 0 reactions) — *Local action forgery via unauthenticated forwarded gateway loopback webhook*. The core claim: NanoClaw's localhost webhook trusts incoming forwarded gateway events without authentication, enabling an attacker on the same machine to forge arbitrary agent actions. **No fix PR exists yet**; this is newly opened.
- **PR `#2873`** (Open, fix: skill pre-flight split) — Separates credential validation from skill-code refresh so `/update-skills` can refresh channel skills without re-prompting for secrets. 9 total comment threads span multiple days, indicating careful design review.
- **PR `#2800`** (Open, security: folder validation + image pinning) — Addresses CWE-22 path traversal in `ncl groups create --folder` and enforces `--image-tag` pinning. Comments are undefined in the data, but 23 total PRs updated suggests deep review overhead.

**Underlying need:** The community is demanding **defense-in-depth for local webhooks** (gateway loopback) and **input validation hardening** in CLI group management — both areas where a local attacker or misconfigured skill could escalate privileges.

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| **High** | Issue `#2970` | Unauthenticated gateway loopback webhook — local attacker can forge arbitrary actions | New, no fix |
| **Medium** | PR `#2966` (Draft) | Provider errors recorded as `completed` instead of `failed`; mirrored failed acks needed | Open, in discussion |
| **Medium** | PR `#2804` (Merged) | CLI `messaging-groups create` dead code — always throws due to missing `instance` column | Fixed today |
| **Low** | PR `#2974` (Open) | Race condition: approvals handler can run twice without claiming the row first | Fix proposed |
| **Low** | PR `#2969` (Open) | `/add-rtk` mount fails on v2 due to relative `containerPath` + missing `PATH` | Fix proposed |

**Security rank:** Issue `#2970` is the most critical — no mitigation exists yet. `#2800` (path traversal fix) remains open.

## 6. Feature Requests & Roadmap Signals
- **PR `#2909`** — Template-based agent setup wizard: users can stamp a first agent from a template during `pnpm setup`. Part 2 of the template system (part 1: `#2890`). This signals **templates as a prioritized UX improvement** — likely to land in next minor release.
- **PR `#2958`** — Microsoft Teams skill rebuilt on Structured Skill Format (SSF), replacing 7-step Azure portal walk with a single `teams login` + `teams app create` flow. **SSF is becoming the canonical skill format**, reducing setup friction for proprietary channels.
- **PR `#1598`** — Long-lived add-remote-storage skill (WebDAV/S3 via rclone + systemd, with `ncl groups config add-mount/remove-mount`). Open since April 2 — still awaiting final design review. Would enable **persistent external storage mounts for agent groups**.
- **PR `#2971`** — New utility skill `ncc`: host operational and health CLI for monitoring agent runtime.

**Prediction:** The next minor release (v2.2.0) will include the template wizard (`#2909`), SSF-based Teams skill (`#2958`), and may ship the remote-storage skill (`#1598`) if the design review completes.

## 7. User Feedback Summary
- **Pain point: CLI `messaging-groups create` completely broken** (fixed in `#2804`). The `NOT NULL constraint failed` error made the CLI's primary group-creation path unusable since migration 016 landed.
- **Pain point: Discord forwarded messages invisible to agents** (fixed in `#2922`). Message snapshots from forwarded channels were unwrapped at null, causing agents to see empty input.
- **Pain point: Setup wizard lacks template support** (addressed by `#2909`). Users currently must create first agent from scratch; the template system reduces this to one selection.
- **Pain point: Documentation drift** — 4 core docs had fallen out of sync with v2.1.x code (fixed in today's `#2961`–`#2964` batch). Users reported confusion from stale architecture diagrams and SDK references.

## 8. Backlog Watch
| Item | Age | Issue/PR | Why It Matters |
|------|-----|----------|----------------|
| **PR `#1598`** — Remote storage skill | 97 days (April 2) | Open, needs design sign-off | Would unblock persistent agent storage (WebDAV/S3); growing use case for CI/CD agents |
| **PR `#2729`** — add-telegram docs correction | 27 days (June 11) | Open, 0 comments | Telegram pairing walk references non-existent status blocks; new users hit dead ends |
| **Issue `#2970`** — Webhook authentication | 1 day | New, 0 comments | **Highest urgency** — unauthenticated loopback can be exploited for local action forgery |
| **PR `#2800`** — Folder validation + image pinning | 21 days (June 17) | Open, needs maintainer review | Path traversal + security hardening for groups CLI — could block security release |

**Call to action:** The backlog has one **stale feature** (remote storage, 97 days), one **stale documentation fix** (Telegram, 27 days), and one **critical unpatched vulnerability** (Issue `#2970`). Maintainers should prioritize Issue `#2970` for a hotfix release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-08

## Today's Overview

IronClaw is entering a high-activity consolidation phase with 32 issues updated and 50 PRs touched in the last 24 hours, reflecting significant engineering momentum around Slack integration refactoring and test infrastructure improvements. The team closed 10 issues and merged/closed 10 PRs today, including completing a major multi-PR Slack OAuth migration stack (PRs #5643–#5646, #5668, #5773) that retires the legacy pairing system. However, the project remains under sustained bug-bash pressure with 22 open active issues, including several P2-severity blockers affecting GitHub integration, tool visibility, and error handling. The `bug_bash_P2` and `bug_bash_P3` tags dominate new issue creation, indicating an ongoing QA-driven stabilization push ahead of a likely release candidate.

---

## Releases

No new releases in the last 24 hours. The last tagged release remains v0.27.0/v0.28.1 era based on issue context, with the project currently in a pre-release stabilization cycle.

---

## Project Progress

**Merged/Closed PRs today (10):**

- **Slack OAuth Migration Complete** — The multi-PR "Slack personal OAuth" stack reached merge/close:
  - [#5280](https://github.com/nearai/ironclaw/pull/5280) — **Trace Commons**: instance-wide enrollment, per-user profiles, and trace inspection (DB migration). This massive PR (all scopes) adds client-side support for a broader trace sharing ecosystem.
  - [#5644](https://github.com/nearai/ironclaw/pull/5644) — Slack personal OAuth foundations (77 files, dormant additive layer).
  - [#5645](https://github.com/nearai/ironclaw/pull/5645) — Swap Slack pairing codes for personal OAuth (121 files, deletion-dominated, breaking change).
  - [#5646](https://github.com/nearai/ironclaw/pull/5646) — Reject legacy Slack config fields at `serve` startup (breaking change).
  - [#5668](https://github.com/nearai/ironclaw/pull/5668) — Slack bot channel remodel + installable tools extension.
  - [#5773](https://github.com/nearai/ironclaw/pull/5773) — Fix Slack OAuth live canary setup (fixed CI harness for new config rejection).
  - [#5643](https://github.com/nearai/ironclaw/pull/5643) — CI overhaul: run all WebUI v2 JS tests in CI (CI-only slice of OAuth stack).

- **Bug Fixes:**
  - [#5694](https://github.com/nearai/ironclaw/pull/5694) — Fixed `clientActionId()` crash on insecure origins (plain HTTP) that broke all mutating v2 requests.
  - [#5696](https://github.com/nearai/ironclaw/pull/5696) — Hid unsupported operator-config fields from WebUI v2 Inference settings (Embeddings, Temperature) to prevent invalid API calls.
  - [#5698](https://github.com/nearai/ironclaw/pull/5698) — Surface tool permission save failures in WebUI v2 Settings Tools tab.
  - [#5554](https://github.com/nearai/ironclaw/pull/5554) — Fixed mobile chat layout horizontal overflow.

**Open PRs of note today:**
- [#5782](https://github.com/nearai/ironclaw/pull/5782) — Fix unavailable-capability guard misfiring on Python code references (e.g., `use playwright.sync_api`), causing false-positive tool suppression.
- [#5791](https://github.com/nearai/ironclaw/pull/5791) and its stack of 10+ child PRs (#5798–#5809) — Adding default-backed builder setters across resource structs, config sections, and test fixtures. An extensive refactoring effort to reduce boilerplate and make future field additions less noisy.

---

## Community Hot Topics

**Most active issues:**

1. **[#5702](https://github.com/nearai/ironclaw/issues/5702) — GitHub issue search/create fails with HTTP 403** (4 comments)
   - *Analysis:* This is the highest-comment issue and a P2 blocker. The agent's GitHub integration is completely non-functional for its core issue management use case, returning `operation_failed` status. For an AI agent platform, GitHub integration is a primary workflow — this is likely blocking internal QA and external user automation scripts alike. No fix PR linked yet.

2. **[#5705](https://github.com/nearai/ironclaw/issues/5705) — Terminal icon has no disable option** (2 comments)
   - *Analysis:* A consistent minor UI complaint — users who don't use the terminal feature want to remove the persistent icon. Related to but distinct from the floating button overlap issue (#5555). Signals a need for UI customization/density controls.

3. **[#5747](https://github.com/nearai/ironclaw/issues/5747) — No way to unpair Slack on built-in host-beta mount** (2 comments)
   - *Analysis:* Directly related to the Slack OAuth migration — this issue highlights that the legacy pairing system had no "disconnect" path. The just-merged OAuth migration (PRs #5644–#5646, #5668) should address this, but it's unclear if the new OAuth flow includes an unlink mechanism. Users are stuck once paired.

4. **[#5557](https://github.com/nearai/ironclaw/issues/5557) — Logs deep link requires double opening** (2 comments)
   - *Analysis:* A persistent navigation bug where deep links to specific log entries don't load on first click. This degrades the debugging UX for routine runs — users expect to click once and see their logs.

5. **[#5701](https://github.com/nearai/ironclaw/issues/5701) — Activity panel hides tool details** (2 comments)
   - *Analysis:* During active runs, the activity panel collapses to "Activity - N tools" without showing tool names or results. Combined with no real-time updates, this creates a transparency gap for power users monitoring complex agent workflows.

**Most active PR (by nature of stack discussion):**
- The [#5798–#5809](https://github.com/nearai/ironclaw/pulls?q=author%3Ailblackdragon) default-setter refactoring stack has 10 PRs all created today by core contributor `ilblackdragon`, indicating a coordinated, systematic cleanup of resource struct construction patterns.

---

## Bugs & Stability

**New critical/blocker bugs reported today:**

| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#5776](https://github.com/nearai/ironclaw/issues/5776) | **P2** — User-blocking | Long-output prompts cause repeated model timeouts, degraded into generic "invalid result" error. Agent doesn't break the loop. | None linked |
| [#5788](https://github.com/nearai/ironclaw/issues/5788) | **Monitoring** | Daily failure taxonomy — 3 non-pass in pinchbench, all gws_* integration tasks scoring 0 | N/A (analysis) |
| [#5787](https://github.com/nearai/ironclaw/issues/5787) | **Flaky test** | `slack_pairing_redeem_rejects_expired_code` — paused tokio clock vs wall-clock TTL race causing intermittent CI failure | None linked |

**Existing high-severity bugs still open:**

| Issue | Severity | Age | Summary | Status |
|-------|----------|-----|---------|--------|
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | P2 | 2 days | GitHub issue search/create HTTP 403 | No fix PR |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | P2 | 2 days | Activity panel hides tool details | No fix PR |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | P2 | 6 days | Approval notifications disappear | No fix PR |
| [#5708](https://github.com/nearai/ironclaw/issues/5708) | P2 | 2 days | Error banners outside chat stream | No fix PR |
| [#3535](https://github.com/nearai/ironclaw/issues/3535) | **P1** | 2 months | UI timestamps incorrect for conversations | No fix PR |

**Bugs fixed today:**
- [#5694](https://github.com/nearai/ironclaw/issues/5694) — `clientActionId()` crashing on HTTP origins (all mutating v2 requests broken).
- [#5698](https://github.com/nearai/ironclaw/issues/5698) — Tool permission save failures silently ignored in UI.
- [#5696](https://github.com/nearai/ironclaw/issues/5696) — Invalid operator-config fields rendered and causing API failures.
- [#5554](https://github.com/nearai/ironclaw/issues/5554) — Mobile chat horizontal overflow.

---

## Feature Requests & Roadmap Signals

**Notable feature signals in recent issues:**

1. **Slack personal OAuth + bot channel remodel (PRs #5644–#5646, #5668)** — Just merged. This is a major architectural shift: retiring the pairing-code system in favor of OAuth, making the bot channel the entrypoint. This likely prepares for Slack marketplace/app distribution.

2. **Trace Commons integration (PR #5280)** — Just merged. Instance-wide enrollment, per-user contributor profiles, and trace inspection. This suggests IronClaw is building toward a shared trace repository for debugging and collaboration, possibly a commercialization step.

3. **OpenRouter upstream provider exposure (Issue #5786)** — User request to surface which upstream model provider (e.g., Fireworks, Parasail) OpenRouter routed to in `ToolCompletionResponse`. This signals growing demand for provider-level observability and debugging of multi-provider setups.

4. **Reborn dropdown UI improvements (Issue #5770)** — Request to replace browser-native `<select>` with custom dropdown for tool permissions. A polish/look-and-feel improvement that suggests the WebUI v2 is nearing final UI refinement.

5. **Reborn Projects page i18n (Issue #5768)** — Incomplete localization for Chinese-language users. Indicates the team is preparing for international deployment.

**Predictions for next release:**
- The Slack OAuth complete migration will likely be the headline feature.
- Bug-bash P2 fixes (GitHub 403, activity panel, approval notifications) are probable blockers for release.
- The default-setter refactoring stack (#5791 et al.) suggests an upcoming minor release with few breaking changes.

---

## User Feedback Summary

**Pain points expressed across recent issues:**

1. **Lost visibility during agent runs** — Users report that the activity panel collapses tool details (#5701) and error banners float outside the message stream (#5708), making it hard to understand what the agent is doing or why it failed.

2. **Persistent UI customization gaps** — The terminal icon cannot be disabled (#5705), automation names cannot be edited (#5419), and the Portfolio extension shows a misleading "Configure" button with no configuration options (#3081).

3. **Integration reliability issues** — GitHub integration is completely broken (403 errors, #5702), approval notifications disappear (#5553), and the Logs deep link requires multiple clicks to work (#5557).

4. **First-time setup friction** — Users cannot unpair Slack (#5747), and disconnected state shows misleading error messages (#4338).

5. **Performance under load** — Long prompts cause model timeouts with confusing generic errors (#5776), and the sidebar shows raw thread IDs when the instance is lagging (#5706).

**Satisfaction signals:**
- The daily failure taxonomy reports (e.g., #5788) show a systematic approach to tracking regressions, indicating the team has strong CI/test infrastructure.
- The completion of the Slack OAuth stack (6 PRs) suggests the team can execute large, multi-PR refactors efficiently.

---

## Backlog Watch

**Issues needing maintainer attention (long-unanswered or stuck):**

| Issue | Age | Summary | Concerns |
|-------|-----|---------|----------|
| [#3535](https://github.com/nearai/ironclaw/issues/3535) | 57 days | UI timestamps incorrect for conversations | **P1** severity, no activity in 2 months. This affects all conversations and was tagged P1. Likely requires coordination between frontend and backend timestamp handling. |
| [#3083](https://github.com/nearai/ironclaw/issues/3083) | 70 days | User Management allows duplicate user creation | **P2**, no fix PR. Needs frontend debounce + backend validation. |
| [#3081](https://github.com/nearai/ironclaw/issues/3081) | 70 days | Portfolio extension misleading "Configure" button | **P2**, no fix PR. Small UI fix but has been open since v0.27.0. |
| [#5419](https://github.com/nearai/ironclaw/issues/5419) | 9 days | No option to rename an automation | **P3**, no fix PR. Feature request that falls below P2 priority but affects daily usability. |
| [#4338](https://github.com/nearai/ironclaw/issues/4338) | 36 days | Disconnected state shows misleading execution driver error | **P2**, no fix PR. Affects user trust during network issues. |

**PRs needing review attention:**
- [#5550](https://github.com/nearai/ironclaw/pull/5550) — Dependabot dependency bump (13 updates) — stale (6 days), needs rebase review to avoid accumulating dependency drift.
- The large default-setter stack (#5798–#5809) — All created today, requires coordinated review; any merge conflict in the base (#5791) would cascade.

**Observation:** The P1 timestamp bug (#3535) remaining open for 57 days is concerning for a project that's otherwise actively bug-bashing. If the bug-bash initiative is targeting a release, this should be a top priority. The Slack migration consumed significant engineering bandwidth recently (6 merged PRs in the stack), so it's plausible that the P1 bug has been deprioritized intentionally during the refactor.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 8, 2026.

---

### LobsterAI Project Digest
**Date:** 2026-07-08
**Data Source:** github.com/netease-youdao/LobsterAI

### 1. Today's Overview
LobsterAI saw extremely high development activity on July 7, with a major release (2026.7.7) and a significant cluster of 15 closed PRs. The core team focused heavily on stability and performance, merging a backlog of 11 "stale" fix PRs today alongside new feature work. However, a critical security advisory was opened, reporting three distinct vulnerabilities (Path Traversal and Token Replay), which represents the most significant risk to the project this period. While feature development continues on Agent collaboration and scheduled tasks, the project's health is compromised by the introduction of these high-severity security issues.

### 2. Releases
- **LobsterAI 2026.7.7** (Released 2026-07-07)
    - **What's Changed:**
        - **Scheduled Tasks:** Redesigned task list card with status chips, toggle controls, and optimistic UI feedback.
        - **Providers:** Added xAI (Grok) OAuth login support.
    - **Breaking Changes:** None documented.
    - **Migration Notes:** None required.

### 3. Project Progress
16 PRs were updated today, with 15 being merged or closed. This indicates a significant push to resolve long-pending issues and stabilize the codebase.

- **Feature Advancements:**
    - **Agent Collaboration:** Merged a major feature allowing users to configure delegated subagent collaboration, materializing sub-agent runs as Cowork child sessions. ([PR #2285](https://github.com/netease-youdao/LobsterAI/pull/2285))
    - **Scheduled Tasks:** Added user-selectable notification targets. ([PR #2290](https://github.com/netease-youdao/LobsterAI/pull/2290))
    - **Email Skill:** Added multi-account support for the IMAP/SMTP skill, including account management UI. ([PR #2275](https://github.com/netease-youdao/LobsterAI/pull/2275))
- **Bug Fixes & Stability (Stale PRs Merged):**
    - **Security:** Fixed missing request body size limit in the OpenClaw Token Proxy. ([PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407))
    - **Reliability:** Fixed unhandled Promise rejections in the MCP Bridge Server. ([PR #1408](https://github.com/netease-youdao/LobsterAI/pull/1408))
    - **Performance:** Fixed SQLite synchronous disk writes with debounced batch writes. ([PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410))
    - **Data Integrity:** Fixed migration race condition where the completion flag was set before a transaction committed. ([PR #1415](https://github.com/netease-youdao/LobsterAI/pull/1415))
    - **IM:** Fixed NIM group type enumeration mapping error. ([PR #1419](https://github.com/netease-youdao/LobsterAI/pull/1419))
    - **Cron:** Fixed concurrent re-entry and ghost events in `CronJobService.pollOnce()`. ([PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420))
    - **Performance:** Added caching for `buildUserMemoriesXml()` to reduce DB load. ([PR #1421](https://github.com/netease-youdao/LobsterAI/pull/1421))
- **Other Fixes:** Analytics reporting, Cowork UX, and usage analytics edge cases. ([PR #2292](https://github.com/netease-youdao/LobsterAI/pull/2292), [PR #2245](https://github.com/netease-youdao/LobsterAI/pull/2245), [PR #2268](https://github.com/netease-youdao/LobsterAI/pull/2268))

### 4. Community Hot Topics
The most significant community activity revolves around the new security disclosures.

- **Security Advisories:** Three issues were opened by user `YLChen-007` detailing critical security vulnerabilities: local file disclosure via symlinks ([#2288](https://github.com/netease-youdao/LobsterAI/issues/2288)), file exfiltration via NIM media flow ([#2287](https://github.com/netease-youdao/LobsterAI/issues/2287)), and an unauthenticated local token proxy allowing API replay ([#2286](https://github.com/netease-youdao/LobsterAI/issues/2286)). These represent a fundamental investigation into the application's security model.
- **Agent Profile Sync Bug:** Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) reports a confusing UX bug where modifying the "About You" setting for one Agent unexpectedly syncs the change to all other Agents. This highlights a user need for true per-agent identity isolation.

### 5. Bugs & Stability
Today’s report introduces significant stability and security concerns.

- **Critical (3 Issues):**
    - **Local File Disclosure (Path Traversal):** The HTML preview server follows symlinks, allowing disclosure of arbitrary local files. (Issue [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288))
    - **Local File Exfiltration:** The NIM integration can be tricked into sending arbitrary local files to remote servers. (Issue [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287))
    - **Unauthenticated Token Replay:** A local process can replay the user's server-model API tokens via an unauthenticated proxy. (Issue [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286))
    - **Analysis:** No fix PRs have been created for these three issues yet.

- **Medium (1 Issue):**
    - **Agent Profile Sync:** Changing the "About You" section in one Agent changes it in all others ([#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)). No fix PR exists yet.

### 6. Feature Requests & Roadmap Signals
- **Agent Isolation:** Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) strongly signals a user need for fully independent Agent profiles and memories. This is a top candidate for the next release, as the newly merged sub-agent collaboration feature ([PR #2285](https://github.com/netease-youdao/LobsterAI/pull/2285)) makes per-agent identity even more critical.
- **Email Skill Enhancement:** The merged multi-account email skill ([PR #2275](https://github.com/netease-youdao/LobsterAI/pull/2275)) suggests the project is prioritizing productivity integrations. Future features may include calendar or contact management.
- **Scheduled Task UX:** The redesign of the scheduled task list ([PR #2273](https://github.com/netease-youdao/LobsterAI/pull/2273)) indicates a user desire for better management and feedback for automation features.

### 7. User Feedback Summary
- **Pain Points:**
    - **Confusing Agent Sync:** Users expect agent configurations to be completely independent. The syncing behavior creates a major usability issue for users managing multiple specialized agents. ([#2293](https://github.com/netease-youdao/LobsterAI/issues/2293))
    - **UI Spacing Issues:** Internationalization (i18n) awareness for layouts is poor; English text causes overlapping and broken UI. ([#1416](https://github.com/netease-youdao/LobsterAI/issues/1416))
- **Satisfaction:** The high volume of merged "stale" fixes suggests that long-standing user complaints about performance (SQLite writes) and reliability (Cron, async errors) are being actively addressed, likely improving user satisfaction.

### 8. Backlog Watch
- **Open Security Advisories (Critical):** The three security issues ([#2286](https://github.com/netease-youdao/LobsterAI/issues/2286), [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287), [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288)) require immediate maintainer attention. They have **zero comments** from maintainers as of this digest, which is a critical communication gap.
- **Stale Dependabot PR:** PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (updating Electron from 40.x to 43.x) has been open since April 2, 2026. This has security implications and should be reviewed and merged.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the project digest for **TinyAGI (TinyClaw)** for **2026-07-08**.

---

## TinyAGI Project Digest – 2026-07-08

### 1. Today's Overview
The project is currently in a **high-alert security review phase**. Today saw zero development activity (no new releases, no merged or closed PRs), but 9 critical security advisories were opened within a 24-hour window by a single researcher. All issues remain open and uncommented, indicating a likely coordinated disclosure of vulnerabilities. The project's core API surface—including control-plane routes, pairing management, and event streams—is exposed without authentication, creating systemic risk for any deployed instance.

### 2. Releases
No new releases or tags were published today. The latest stable release remains unknown based on this data.

### 3. Project Progress
**Merged/Closed PRs:** 0  
No pull requests were merged or closed today. There is no visible progress on fixes or feature work in the current window.

### 4. Community Hot Topics
All 9 open issues were filed by a single researcher (YLChen-007) and currently have **zero comments and zero reactions**. While there is no community engagement yet, these issues represent the most active surface of the project today. The underlying theme is a **complete lack of authentication on the local control-plane API**, which allows an attacker on the same host to:
- Overwrite system prompts (e.g., changing an AI agent's behavior)
- Restart daemons
- Modify persistent settings
- Exfiltrate arbitrary files
- Spoof operator logs via terminal escape injection

**Links:**
- #286 – Local Control API auth bypass: [Link](https://github.com/TinyAGI/tinyagi/issues/286)
- #288 – Event stream leakage: [Link](https://github.com/TinyAGI/tinyagi/issues/288)
- #289 – File exfiltration via attachments: [Link](https://github.com/TinyAGI/tinyagi/issues/289)

### 5. Bugs & Stability
All 9 reported issues are security bugs, none of which have associated fix PRs. They are ranked by severity as follows:

| Issue | Severity | Summary |
|-------|----------|---------|
| #294 | **Critical** | System prompt overwrite + daemon restart via unauthenticated routes |
| #293 | **Critical** | Path traversal via agent `id=..` escapes workspace root |
| #292 | **Critical** | Persistent settings and agent prompt modification via API |
| #291 | **Critical** | Anthropic Adapter suppresses dangerous-tool confirmation flag |
| #289 | **Critical** | Arbitrary local file exfiltration via `files[]` in unauthenticated API |
| #290 | **High** | Terminal escape injection allows log spoofing |
| #288 | **High** | Unauthenticated local control plane leaks live events |
| #287 | **High** | Pairing management API allows arbitrary approval of pending senders |
| #286 | **High** | Local control API allows settings + prompt mutation + event stream access |

No crash or regression data was reported.

### 6. Feature Requests & Roadmap Signals
No feature requests were opened today. However, the current security disclosure strongly signals that the next releases must focus on **authentication/authorization middleware**, **input sanitization** (path traversal, escape sequences), and **outbound channel access controls**. Expect a rapid patch cycle once the maintainers respond.

### 7. User Feedback Summary
No user feedback was recorded today. The current data suggests the project is in a quiet operational state prior to a likely security response from maintainers.

### 8. Backlog Watch
No long-unanswered issues exist in today's data, as all 9 items were opened on 2026-07-07. However, if the maintainers do not reply within 48–72 hours, these open security reports will become backlog items requiring community escalation.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — July 8, 2026

## Today’s Overview
CoPaw activity remains exceptionally high, with 38 PRs and 16 Issues updated in the last 24 hours. The **v2.0.0 beta track** continues to attract the most developer attention — the `v2.0.0-beta.3` release landed, and a `v2.0.0b4` version bump PR was already merged. The project is clearly in a **pre-GA polish sprint**, with over 10 open issues tagged as pre-release bugs. A notable 15 PRs were merged or closed, including a major plugin channel registration system, a Matrix streaming mode feature, and multiple security- and correctness-focused fixes. Community engagement is healthy, with first-time contributors submitting 4 PRs this cycle.

## Releases
**v2.0.0-beta.3** was released on July 7. Key changes:
- **CI fix**: Guard empty `extra_flags` expansion for bash 3.2 compatibility on macOS ([PR #5743](https://github.com/agentscope-ai/QwenPaw/pull/5743))
- **Auth enhancement**: Multi-dimensional rate limiting protection ([PR #5738](https://github.com/agentscope-ai/QwenPaw/pull/5738))

No breaking changes or migration notes were documented. This is an incremental beta release targeted at stabilizing the 2.0.0 pre-release pipeline.

## Project Progress
15 PRs were merged or closed in the last 24 hours. Significant advances include:

- **Plugin-based custom channels** — PR #4693 (closed) replaces the legacy directory-based channel system with `PluginApi.register_channel()` + schema-driven config UI, a major architectural change for the plugin framework
- **Matrix streaming mode** — PR #5585 (closed) adds real-time streaming output to Matrix channel, matching Discord’s streaming UX
- **Memory improvements** — PR #5820 (closed) adds usage-aware auto search, backend-specific embeddings, and simplifies memory query generation around the latest user intent
- **Three-bug fix batch** — PR #5786 (closed) fixed cross-provider model matching (#5784), confirm dialog orientation (#5773), and environment variable handling (#5709)
- **ACP Node runtime bundling** — PR #5814 (open) bundles Node.js runtime with Tauri desktop to enable `npx`-driven ACP agents without separate Node installs
- **Desktop path detection** — PR #5836 (open) auto-detects local file/directory paths in chat output and opens file explorer on click (closes #4830)
- **Release duty verification** — `v1.1.12.post3` (PR #5819 closed) and `v2.0.0-beta.3` (Issue #5833 open) installation checks were run

## Community Hot Topics

**Most active issue:** [#5401 — Console crashes on large tool-use history](https://github.com/agentscope-ai/QwenPaw/issues/5401) (15 comments)  
- Root cause: `agentscope_msg_to_message()` converts `tool_use`/`tool_result` to `DataContent` blocks the frontend cannot render
- Underlying need: Robust frontend handling of large, multi-tool-turn conversations — a critical UX blocker for power users

**Pre-release tracker:** [#5273 — v2.0.0 Pre-release Bug Tracker](https://github.com/agentscope-ai/QwenPaw/issues/5273) (10 comments, 1 👍)  
- Central dispatch for all 2.0.0 regressions; community is actively contributing edge cases

**Large session crash:** [#5479 — Sessions >500KB crash on open](https://github.com/agentscope-ai/QwenPaw/issues/5479) (6 comments)  
- Users effectively lose access to their conversation history once it crosses ~500KB

**Tool-call JSON recovery:** [PR #5841 — Recover whitespace-prefixed tool-call JSON](https://github.com/agentscope-ai/QwenPaw/pull/5841) (open)  
- Addresses a subtle but recurrent tool-call parsing failure that silently drops agent actions

## Bugs & Stability

**Critical severity:**
1. [#5829 — Windows AppContainer sandbox corrupts system directory ACLs](https://github.com/agentscope-ai/QwenPaw/issues/5829) — AppContainer ACE with inherited flags (`(OI)(CI)`) is applied to `C:\`, `C:\Users`, causing Hermes Desktop Electron’s GPU process to crash. **No fix PR yet.**
2. [#5842 — file_guard: `find -delete` bypasses out-of-workspace deletion check](https://github.com/agentscope-ai/QwenPaw/issues/5842) — Security bypass of workspace file protection. **Fix PR #5843** submitted by same author.
3. [#5835 — `/stop` lacks user-level isolation in DM sessions](https://github.com/agentscope-ai/QwenPaw/issues/5835) — Cross-user task cancellation in DingTalk. **No fix PR yet.**

**High severity:**
4. [#5401 — Large tool-use history renders white screen](https://github.com/agentscope-ai/QwenPaw/issues/5401) — Frontend crash on `type: "data"` blocks. No fix PR yet.
5. [#5789 — Context compression crashes when model output exceeds JSON Schema `maxLength`](https://github.com/agentscope-ai/QwenPaw/issues/5789) — `jsonschema.validate()` fails on `next_steps` field. No fix PR yet.
6. [#5775 — Auto-memory never triggers because state is lost across agent rebuilds](https://github.com/agentscope-ai/QwenPaw/issues/5775) — Memory persistence broken for `auto_memory_interval > 1`. (Closed)

**Medium severity:**
7. [#5759 — Plan mode repeatedly reads the same file](https://github.com/agentscope-ai/QwenPaw/issues/5759) — `extract_reports.py` read 5 times without content change.
8. [#5774 — Google Gemini channel endpoint error](https://github.com/agentscope-ai/QwenPaw/issues/5774) — Traceback in GoogleGemini endpoint. (Closed)
9. [#5821 — Granular `rejects_media` capability](https://github.com/agentscope-ai/QwenPaw/issues/5821) — One media type failure strips all media types.

## Feature Requests & Roadmap Signals

**Likely for v2.0.0 GA:**
- **Desktop minimize-to-tray** (#5312, 2 comments) — Point close → minimize to system tray; heavily requested behavior matching WeChat/QQ/DingTalk
- **Notification toggle for scheduled tasks** (#5797, 4 comments) — User-configurable pop-up on/off per task, with dismiss timeout
- **Avatar field for agent profiles** (PR #5826, open) — Per-agent custom avatars; frontend already supports it
- **Desktop local path click-to-open** (PR #5836) — Auto-detect and open file paths in chat; already PR’d
- **`grep_search` improvements** — Multiple PRs (#5834, #5840) fixing pipe-separated literals and adding `show_file` option

**Possible next-cycle:**
- **Qwen3-rerank for memory search** (PR #5669, under review) — Precision re-ranking stage for ReMe hybrid search
- **Plugin-registered custom channels** (PR #4693, just merged) — Major ecosystem expansion enabler
- **Windows GUI automation with UIA** (PR #5187, open) — Full `computer_use` tool for Windows desktop control

## User Feedback Summary

**Pain points:**
- *“I need the notification pop-up back”* — Issue #5797 notes that PR #4803 removed scheduled task pop-ups entirely, but many users want the choice. User explicitly asked: *“Don't throw the baby out with the bathwater.”*
- *“Large sessions are unusable”* — Multiple users (#5401, #5479) report that conversations exceeding ~500KB or containing many tool turns become completely inaccessible (white screen or crash).
- *“Can't select hidden folders in coding mode”* — #5785 (closed, fixed) — user wanted to choose folders starting with `.`
- *“Windows sandbox broke my Electron apps”* — #5829 reports that enabling `APPCONTAINER` sandbox corrupts system ACLs, crashing Hermes Desktop GPU process.
- *“Stop command cancels other users’ tasks”* — #5835 describes a multi-tenant usability issue where `/stop` in DingTalk DM sessions lacks user isolation.

**Satisfaction signals:**
- First-time contributors are active (4 PRs this cycle from new usernames)
- The v2.0.0-beta.3 release and rapid version iteration (bump to `b4` already PR’d) signals maintainers are responsive
- The plugin channel system (#4693) and Matrix streaming (#5585) address long-standing ecosystem gaps

## Backlog Watch

**High priority for maintainer attention:**
1. [#5829 — Windows AppContainer sandbox ACL corruption](https://github.com/agentscope-ai/QwenPaw/issues/5829) — Critical security/stability issue affecting Windows users; no fix PR yet. Needs immediate triage.
2. [#5835 — `/stop` cross-user task cancellation](https://github.com/agentscope-ai/QwenPaw/issues/5835) — Multi-tenant isolation bug for DingTalk. No fix PR yet.
3. [#5789 — Context compression crash on schema validation](https://github.com/agentscope-ai/QwenPaw/issues/5789) — Blocks long-running conversations. No fix PR yet.
4. [#5312 — Desktop minimize-to-tray](https://github.com/agentscope-ai/QwenPaw/issues/5312) — Heavily requested UX feature, open for ~3 weeks; PR #5836 (desktop path detection) shows the team is actively working on desktop improvements
5. [#5401 — Large tool-use history frontend crash](https://github.com/agentscope-ai/QwenPaw/issues/5401) — Critical UX issue, open for 2 weeks; should be prioritized before v2.0.0 GA

**Stale issue watch:** No issues older than 30 days remain open, indicating good maintainer responsiveness. The v2.0.0 tracker (#5273) serves as an effective triage hub.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-08

## 1. Today's Overview

ZeroClaw is in a period of **high-intensity development**, with 22 issues and 50 pull requests updated in the last 24 hours — well above typical daily activity. The project shows **strong forward momentum** with 4 closed issues and 5 merged/closed PRs today, but is also accumulating significant technical debt: 18 of 22 updated issues remain open, and several carry **high-risk** and **priority:p1** tags. The team is actively addressing **two critical bug clusters** — memory growth from MCP tool schema cloning (#8642) and an approval-gate bypass in the SOP engine (#8678) — while also landing substantial new features like the OpenAI-compatible channel (#8710) and the SOP authoring surface (#8590). A security-focused CI failure (RUSTSEC advisory) was quickly patched (#8782), reflecting a responsive maintainer team. However, the volume of open PRs (45 of 50) suggests a **bottleneck in review throughput** that may slow delivery of the v0.8.3 milestone being tracked in #8073.

## 2. Releases

**No new releases** in the last 24 hours. The latest tagged release remains **v0.8.2** (inferred from the web dashboard version label visible in issue #8791).

## 3. Project Progress

**5 pull requests merged or closed today**, representing meaningful progress across several subsystems:

- **[CLOSED] #8813** — `fix(zerocode): add Global Settings entry to Channels config for root fields` — Adds discoverability of root-level channel settings in the zerocode configuration UI. [PR #8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813)

- **[CLOSED] #8820** — `Fix 8757 channels root settings` — Follow-up fix addressing channel root settings configuration. [PR #8820](https://github.com/zeroclaw-labs/zeroclaw/pull/8820)

- **[CLOSED] #8822** — `add discoverable Global Settings entry to Channels config section (#8757)` — Duplicate approach to the same channel settings discoverability issue. [PR #8822](https://github.com/zeroclaw-labs/zeroclaw/pull/8822)

- **[CLOSED] #8782** — `fix(audit): bump crossbeam-epoch 0.9.18 -> 0.9.20 to clear RUSTSEC-2026-0204` — Security fix addressing a RUSTSEC advisory for an invalid pointer dereference vulnerability. All open PRs re-pulling the lockfile were blocked on this. [PR #8782](https://github.com/zeroclaw-labs/zeroclaw/pull/8782)

- **[CLOSED] #8815** — `[Feature]: skill_manage.create action so agents can save new skills as bundles` — Enables agents to create new skills as proper bundles instead of loose `.md` files. [Issue #8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815)

**Note:** 4 of 5 merged PRs (#8782, #8813, #8820, #8822) were authored or co-authored by `yaotukeji` and `wangmiao0668000666`, suggesting these are maintainer- or close-collaborator submissions processed quickly.

## 4. Community Hot Topics

**Zero issues or PRs received any "thumbs up" reactions** in the last 24 hours, which is unusual for a project of this scale. However, the most active discussions by comment count reveal significant community engagement:

- **#6699** (9 comments) — `tool_filter_groups is a no-op for real MCP tools` — This **high-risk, priority:p1** bug has been open since May 16 with 9 comments, indicating extensive back-and-forth. The root cause — a prefix-check bug in the dispatch-time filter — touches the core of how MCP tools are filtered. [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)

- **#7155** (6 comments) — `RFC: Add a per-execution confirmation tier for high-risk shell commands` — A long-running RFC (since June 3) proposing a Claude Code-style allow/ask/deny policy. This is the most conceptually ambitious feature under discussion and has attracted sustained community input. [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)

- **#7952** (5 comments) — `[Feature]: publish full-channel prebuilt assets alongside default prebuilts` — A practical request from a user (`Audacity88`) who runs into confusion when channels they configure aren't included in the prebuilt binary. The issue is **blocked** pending maintainer review. [Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)

**Underlying needs:** These active discussions reveal a community that is **pushing for MCP reliability (#6699)**, **safety governance (#7155)**, and **better distribution packaging (#7952)**. All three represent foundational concerns rather than surface-level polish.

## 5. Bugs & Stability

**7 new bug reports filed today** (July 7-8), with several carrying S1/S2 severity:

### S1 — Workflow Blocked
- **#8794** — `[web dashboard ui] stopping the agent mid work erases the tool calls and his thinking from the context` — Stopping an agent during tool execution causes the entire step to be lost from context, making the next user message start from scratch. **No fix PR exists yet.** [Issue #8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794)

### S2 — Degraded Behavior (with fix PRs)
- **#8800** — `Windows: killed zeroclaw process leaves port bound (zombie LISTENING/CLOSE_WAIT)` — After running agent-browser tasks over WebSocket on Windows 11, killing the daemon leaves the port in a zombie state, preventing restart. **No fix PR yet.** [Issue #8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800)

- **#8804** — `skills prompt advertises a callable-tool set that doesn't match the registry` — The skills system-prompt renderer diverges from what the registry actually registers (MCP tools missing, target-less elevation over-listed). **Fix PR #8805** is open. [Issue #8804](https://github.com/zeroclaw-labs/zeroclaw/issues/8804) | [PR #8805](https://github.com/zeroclaw-labs/zeroclaw/pull/8805)

- **#8787** — `skill-registered tools bypass allowed_tools/excluded_tools` — Skill-defined tools are registered without consulting the agent's `SecurityPolicy`, allowing tools through that should be blocked. **Fix PR #8788** is open. [Issue #8787](https://github.com/zeroclaw-labs/zeroclaw/issues/8787) | [PR #8788](https://github.com/zeroclaw-labs/zeroclaw/pull/8788)

- **#8797** — `bind-telegram setup instructions reference an unknown configuration property` — The CLI error message suggests a kebab-case property name that doesn't match the actual config key. **Fix PR #8823** is open. [Issue #8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) | [PR #8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823)

- **#8810** — `Documentation is wrong - Telegram example` — User reports incorrect Telegram documentation with a frustrated tone ("slop remains slop"). **Fix PR #8825** is open. [Issue #8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | [PR #8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825)

### S3 — Minor Issues
- **#8791** — `Left sidebar has incorrect width causing horizontal scrollbar` — CSS issue in the web dashboard. [Issue #8791](https://github.com/zeroclaw-labs/zeroclaw/issues/8791)
- **#8792** — `Left sidebar is missing a Skills navigation entry` — The Skills page exists at `/skills` but has no left-nav link. [Issue #8792](https://github.com/zeroclaw-labs/zeroclaw/issues/8792)

### Recently Fixed (S2/S1)
- **#8678** (CLOSED) — `advance_step has no run-status guard — a driver can bypass an approval gate via sop_advance` — Security bug: SOP engine allowed bypassing approval gates. Fix included the fix PR that closed this. [Issue #8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)

## 6. Feature Requests & Roadmap Signals

**Features proposed today (July 7-8):**

| Issue | Feature | Category | Likely in v0.8.3? |
|-------|---------|----------|-------------------|
| #8803 | Collapse completed turn's intermediate steps into single group in web dashboard | UX improvement | Possible |
| #8798 | Consolidate /ws/chat and /acp onto a single wire protocol | Architecture RFC | Unlikely — complex |
| #8815 | skill_manage.create action for saving skills as bundles | Runtime enhancement | Likely — already merged |

**Roadmap signals from open PRs advancing v0.8.3:**

- **#8821** — `feat(runtime): meter the max-iteration graceful summary via run_model_query` — Adds iteration-limit metering to the runtime agent loop (stacked on #8806). [PR #8821](https://github.com/zeroclaw-labs/zeroclaw/pull/8821)
- **#8817** — `fix(runtime): Arc-share tool schemas to stop per-iteration clone churn (#8642)` — Memory optimization for MCP tool schema handling. [PR #8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817)
- **#8784** — `refactor(runtime): split-history loop contract for Agent entry points (PR-1 of #7846 rework)` — Major refactor of the agent loop's history management, a rework of a previous failed PR. [PR #8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784)
- **#8235** — `feat(skills): add runtime-profile prompt_injection_mode override` — Allows per-agent override of prompt injection protection mode. [PR #8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235)
- **#8736** — `[Task]: Track SOP authoring surface (feat/sop-authoring, #8590)` — Tracks the SOP authoring feature (node-graph editor, live overlays, validation engine). [Issue #8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736)

**Prediction:** v0.8.3 is shaping up to be a **tools-and-safety release** focused on: (1) MCP tool reliability and memory fixes, (2) the SOP authoring interface, (3) skills enhancement (create action, prompt injection modes), and (4) improved config UIs for channels and logging.

## 7. User Feedback Summary

**Real user pain points expressed in the last 24 hours:**

- **"Slop remains slop"** — `cr3a7ure` on #8810 expressed significant frustration with Telegram documentation being incorrect, directly criticizing the project's quality control. This is a strong signal that the Telegram channel setup experience is broken for new users.

- **Workflow interruption** — `susyabashti` on #8794 reported that stopping an agent mid-task **destroys all context**, forcing them to start conversations over. For a tool positioned as an AI assistant, this is a fundamental workflow blocker.

- **Windows port binding** — `NiuBlibing` on #8800 reported that the ZeroClaw daemon on Windows leaves zombie ports after being killed, requiring manual intervention to restart. This affects Windows users disproportionately.

- **Tool filtering confusion** — Multiple users (`Nillth`, `JordanTheJet`) are encountering cases where tools they've configured to exclude are still visible to the model (#8787, #8804), undermining their trust in the security model.

- **Onboarding friction** — `Moulde` on #8797 encountered a Telegram setup that literally tells users the wrong configuration property name. Combined with #8810, the Telegram channel has a **broken onboarding flow**.

**Signals of satisfaction:** The lack of positive reactions (0 👍 on all items) is notable — either the community is not using the reaction feature, or there is genuine dissatisfaction in the air. However, the sheer volume of contributions from recurring community members (`NiuBlibing`, `Audacity88`, `IftekharUddin`, `Nillth`) suggests a **committed user base actively trying to improve the project**.

## 8. Backlog Watch

**Issues requiring maintainer attention due to age or blocking status:**

- **#7952** (June 19, 18 days old) — `[Feature]: publish full-channel prebuilt assets alongside default prebuilts` — Marked **status:blocked** and **needs-maintainer-review** for 18 days. This is a relatively straightforward packaging request that would reduce user confusion, yet it has languished without a maintainer decision. [Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)

- **#6698** (May 16, 52 days old) — `[Bug]: Fluent locale files lag English app-string sources` — Chinese locale (`zh-CN`) is missing entire files present in English (`tools.ftl`). This has been open for **52 days** with no fix PR. As ZeroClaw appears to have international users (evidenced by Chinese-named authors and WeChat channel support), this is a significant accessibility gap. [Issue #6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698)

- **#6699** (May 16, 52 days old) — `tool_filter_groups is a no-op for real MCP tools` — **Priority:P1** but open for 52 days with 9 comments. The complexity of the fix (touches dispatch logic, deferred loading, MCP tool specification) is making this drag, but the issue directly undermines the MCP tool filtering feature that is a core selling point of the project. [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)

**PRs needing maintainer review:** The 45 open PRs include several marked `needs-maintainer-review` or `risk:high` that have been open for 5-10+ days:
- **#8496** (June 29, 9 days) — `fix(tools/mcp): centralize deferred-MCP access policy` — High-risk, large change to MCP tool filtering that could unblock #6699. [PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496)
- **#8710** (July 4, 4 days) — `feat(channels): Add OpenAI channel` — XL-sized feature adding OpenAI API compatibility. This has broad implications for the ecosystem but hasn't received maintainer review yet. [PR #8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710)

**Overall health assessment:** ZeroClaw is actively developed with strong community engagement, but is suffering from **review bottleneck** (45 open PRs) and **accumulated technical debt** in the MCP tool filtering system specifically. The two 52-day-old P1 bugs (#6698, #6699) are the most visible symptoms. The rapid response to the RUSTSEC advisory (#8782 closed same-day) shows good security hygiene, but the contrast with slow-moving UX bugs (locale, Telegram onboarding) suggests the team prioritizes infrastructure over user experience.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*