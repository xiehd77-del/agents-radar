# OpenClaw Ecosystem Digest 2026-07-27

> Issues: 353 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-27 03:21 UTC

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

# OpenClaw Project Digest — 2026-07-27

## Today's Overview

OpenClaw shows a **highly active open-source project** with 353 issues and 500 PRs updated in the last 24 hours—indicating a healthy, fast-moving development cadence. The project has **348 merged/closed PRs** today, reflecting strong merge velocity, while **242 open issues** and **152 open PRs** suggest a significant triage and review backlog. No new releases were cut today, but the volume of bug reports (especially P1 and regression bugs) points to **acute stability challenges** following recent updates, particularly around session state, message loss, and channel-specific regressions. The maintainer team is actively pushing fixes, though many high-priority items remain open with `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision` tags.

---

## Releases

**No new releases today.** The latest available versions remain 2026.7.2-beta.4 (beta) and 2026.7.1-2 (stable), both of which have generated several regression reports in the last 24 hours.

---

## Project Progress

**348 PRs merged or closed today**, indicating substantial development throughput. Notable merged PRs include:

- **#114245** [closed] `refactor(channels): declare thread addressing as a channel trait` — steipete — An architectural refactor that consolidates channel-specific threading logic from three production sites into a declarative `ChannelTrait`, reducing code duplication for Slack/Telegram reply placement. ([PR #114245](https://github.com/openclaw/openclaw/pull/114245))
- **#114252** [closed] `fix(lisa): stop digest abort on opaque 2>&1 and Telegram code fences` — linktrend — Fixes Lisa morning digest delivery failures when model output contains `2>&1` or problematic Telegram code fences, a user-facing stability fix. ([PR #114252](https://github.com/openclaw/openclaw/pull/114252))
- **#114249** [closed] `docs: explain why steering waits for the current tool-call batch` — steipete — Documentation improvement addressing the most common feature request (#10960) by explaining the rationale behind mid-batch steering behavior. ([PR #114249](https://github.com/openclaw/openclaw/pull/114249))
- **#114248** [closed] `feat(dev): add cron fixtures to the Control UI mock server` — steipete — Developer tooling improvement for testing the Control UI's cron page and attention chips. ([PR #114248](https://github.com/openclaw/openclaw/pull/114248))
- **#114246** [closed] `fix(scripts): make the mock Control UI exec approval opt-in` — steipete — Improves developer experience by making exec approval modal opt-in rather than blocking on every startup. ([PR #114246](https://github.com/openclaw/openclaw/pull/114246))
- **#114138** [closed] `fix(memory): keep implicit embeddings recall available` — rubencu — Fixes a regression where implicit/default memory embedding providers could become unavailable after configuration changes. ([PR #114138](https://github.com/openclaw/openclaw/pull/114138))
- **#114251** [open] `refactor(config): record exact include ownership` — steipete — Config include write routing fix to resolve ambiguity in nested/array include graphs. ([PR #114251](https://github.com/openclaw/openclaw/pull/114251))

Advanced features in open PRs include:
- **#114250** [open] `fix(trajectory): bound runtime event retention` — steipete — Fixes unbounded growth of `trajectory_runtime_events` table (85% of agent database, 1.7 GB on production deployment). ([PR #114250](https://github.com/openclaw/openclaw/pull/114250))
- **#114247** [open] `refactor(meetings): close manual action state` — steipete — Consolidates meeting browser health tracking from three independently optional fields into a single structured state. ([PR #114247](https://github.com/openclaw/openclaw/pull/114247))
- **#114256** [open] `feat(runtime): run OpenClaw under Bun runtimes` — steipete — Removes the Bun rejection at startup now that Bun provides `node:sqlite`. ([PR #114256](https://github.com/openclaw/openclaw/pull/114256))

---

## Community Hot Topics

### Most Active Issues (by comment count)

1. **#75** [OPEN] "Linux/Windows Clawdbot Apps" — 115 comments, 80 👍 — The top community discussion requests desktop app support for Linux and Windows (macOS/iOS/Android already exist). This is a long-running feature request (created January 2026) with high demand. ([Issue #75](https://github.com/openclaw/openclaw/issues/75))

2. **#99241** [OPEN] "Tool outputs sometimes render as image attachments and become unreadable to the agent" — 24 comments — A critical P1 bug where ANSI-heavy tool output collapses into `(see attached image)` placeholders, making the output invisible to the agent. This is a session-state and message-loss impact issue affecting long-running workflows. ([Issue #99241](https://github.com/openclaw/openclaw/issues/99241))

3. **#102020** [OPEN] "Second message in a session fails with 'reply session initialization conflicted'" — 15 comments — A cross-channel P1 bug where sessions fail after the first turn, with fixes still under maintainer review. ([Issue #102020](https://github.com/openclaw/openclaw/issues/102020))

4. **#86996** [OPEN] "Active Memory + Codex app-server path causes long response latency" — 13 comments — A P1 performance bug affecting Telegram users with specific memory/context configurations, causing hook timeouts and gateway stalls. ([Issue #86996](https://github.com/openclaw/openclaw/issues/86996))

5. **#86519** [OPEN] "Agent repeats identical replies 2-10x on Telegram after 5.20 update" — 12 comments — A regression (5.20→5.22 still not fully fixed) causing duplicate replies, marked P1 with `fix-shape-clear` pending. ([Issue #86519](https://github.com/openclaw/openclaw/issues/86519))

6. **#92043** [OPEN] "180s compaction timeout is a single wall clock over the whole chunk pipeline" — 12 comments — A session-state/crash-loop P1 bug where long compactions fail identically every turn due to no partial-progress reuse. ([Issue #92043](https://github.com/openclaw/openclaw/issues/92043))

7. **#6615** [OPEN] "Add denylist support for exec-approvals" — 9 comments, 8 👍 — High-demand feature request for "allow everything except X" exec policies, complementing the existing allowlist. ([Issue #6615](https://github.com/openclaw/openclaw/issues/6615))

8. **#67419** [OPEN] "Session context bloat: bootstrap files re-injected every turn" — 11 comments — A P2 performance issue where 20-30% of context is wasted on repeated bootstrap file injection. ([Issue #67419](https://github.com/openclaw/openclaw/issues/67419))

### Most Active PRs

- **#114251** [open] `refactor(config): record exact include ownership` — steipete — Config write routing fix with "needs proof" status. ([PR #114251](https://github.com/openclaw/openclaw/pull/114251))
- **#114256** [open] `feat(runtime): run OpenClaw under Bun runtimes` — steipete — A forward-looking PR that could significantly broaden deployment options. ([PR #114256](https://github.com/openclaw/openclaw/pull/114256))

### Underlying Needs

The community is most vocal about:
- **Cross-platform parity** — Linux/Windows desktop apps are the #1 request (#75)
- **Session reliability** — Multiple bugs report silent message loss, duplicate replies, and stuck sessions, eroding user trust in long-running workflows
- **Performance under load** — Context bloat (#67419) and compaction timeouts (#92043) indicate scaling pain for power users
- **Safety controls** — Denylist support (#6615) and per-spawn tool restrictions show demand for fine-grained security

---

## Bugs & Stability

### Critical / P1 Bugs (with session-state, message-loss, or crash-loop impact)

| Issue | Title | Impact | Fix PR? |
|-------|-------|--------|---------|
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | "reply session initialization conflicted" on second message | Session-state, message-loss | Needs maintainer review |
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs render as invisible image attachments | Session-state, message-loss | Needs product decision |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex causes hook timeouts & gateway stalls | Message-loss, crash-loop, auth-provider | Needs product decision |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Duplicate replies 2-10x on Telegram (5.20 regression) | Session-state, message-loss | Fix-shape-clear, needs maintainer review |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 180s compaction timeout never succeeds on long histories | Session-state, crash-loop | Needs product decision |
| [#113434](https://github.com/openclaw/openclaw/issues/113434) | Codex sessions.reset reuses retired session ID, exhausts RAM (2026.7.2-beta.4) | Session-state, crash-loop | Needs maintainer review |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | Large SQLite transcript cleanup blocks gateway event loop | Session-state | Needs product decision |
| [#94251](https://github.com/openclaw/openclaw/issues/94251) | Ollama remote provider streaming not consumed | Session-state, message-loss, auth-provider | Has linked open PR (#? ) |
| [#106403](https://github.com/openclaw/openclaw/issues/106403) | Terminal-main reconciliation gate silently resets healthy session (mtime race) | Session-state | Fix-shape-clear |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram DM replies fall back after stale DM-scope cleanup (2026.7.2-beta.3 regression) | Session-state, message-loss | Needs maintainer review |

### Regressions (all P1)

- **#112906** — `richMessages: true` renders `` tags broken in v2026.7.1 ([Issue #112906](https://github.com/openclaw/openclaw/issues/112906))
- **#112696** — Control UI 2026.7.1-2: agent avatar + session list regressions in multi-agent setup ([Issue #112696](https://github.com/openclaw/openclaw/issues/112696))
- **#108473** — `cron` tool schema breaks llama.cpp tool-calling (2026.7.1 regression) ([Issue #108473](https://github.com/openclaw/openclaw/issues/108473))

### Fixes in Progress

- **PR #114250** — Bounds `trajectory_runtime_events` retention (fixes 85% DB bloat) ⏳ needs proof
- **PR #114245** — Thread addressing as channel trait (merged, closes 3 production bugs)
- **PR #114252** — Lisa digest abort fix (merged)
- **PR #112496** — Reject `sessions_send` to unknown agents ⏳ needs proof
- **PR #113011** — Retry TLS altname transport failures ⏳ needs proof

---

## Feature Requests & Roadmap Signals

### High Demand Features

1. **Linux/Windows Clawdbot Apps** (#75) — 80 👍, 115 comments. Predict next major release.
2. **Denylist support for exec-approvals** (#6615) — 8 👍, linked PR open. Likely in next beta.
3. **Per-agent dreaming configuration** (#67413) — 5 👍, has linked PR. Likely near-term.
4. **Per-spawn tool restrictions for sub-agents** (#15032) — 0 👍 but strong use case (prompt injection defense). Needs product decision.
5. **Mid-stream message injection (soft steer)** (#10960) — 2 👍, documentation PR #114249 explicitly addresses this. Likely to be addressed via improved docs first.
6. **WhatsApp sticker send support** (#7476) — 1 👍, needs maintainer review.
7. **Azure Foundry GPT Realtime Talk** (#87325) — 1 👍, needs security review.

### Roadmap Signals

- **Bun runtime support** (PR #114256) — Indicates the project is expanding runtime compatibility beyond Node.js.
- **Distributed Agent Runtime RFC** (#42026) — A long-standing proposal to split the monolithic gateway into control plane and agent runtime components.
- **Webhook session reuse** (#11665) — Multi-turn webhook support, linked PR open.
- **Pre-compaction notification/deferral** (#38520) — For safer handling of long stateful workflows.

---

## User Feedback Summary

### Pain Points

1. **Session reliability** is the #1 user frustration — silent message drops, duplicate replies, stuck sessions, and crash loops dominate the bug tracker. Users report that even simple Telegram conversations can fail.
2. **Update regressions** — The 5.20→5.22 and 6.11→7.1 upgrade paths have introduced multiple regressions, eroding trust in point releases.
3. **Performance and scaling** — Users with long sessions, local models, or complex workflows hit compaction timeouts, context bloat, and memory exhaustion.
4. **Cross-platform gaps** — Linux and Windows users feel excluded from the desktop app experience.

### Use Cases

- **Telegram direct messaging** is the most common deployment, with many bugs reported on this channel
- **Multi-agent setups** with sub-agents, spawning, and session sharing are increasingly common but expose race conditions
- **Long-running workflows** (cron, tool-heavy sessions, memory-intensive tasks) are the most stability-sensitive
- **Local/self-hosted** models (Ollama, llama.cpp, local LLMs) face unique streaming and compatibility issues

### Satisfaction Signals

- High engagement (115 comments on the Linux/Windows feature request) shows strong community investment
- Users actively filing detailed bug reports with reproduction steps indicates a technically sophisticated and engaged user base
- Multiple linked PRs show the community contributing fixes alongside maintainers

---

## Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Created | Last Update | Tags | Reason for Concern |
|-------|---------|-------------|------|--------------------|
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | 2026-05-22 | 2026-07-26 | stale, P1, needs-maintainer-review, needs-product-decision | Codex app-server silent wedge, 2+ months open, P1 with message-loss impact |
| [#77298](https://github.com/openclaw/openclaw/issues/77298) | 2026-05-04 | 2026-07-26 | stale, P2, needs-maintainer-review, needs-product-decision | Cron error counting bug inflates failure rates, 3+ months open |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | 2026-04-15 | 2026-07-27 | P2, needs-maintainer-review, needs-product-decision | Context bloat wastes 20-30% tokens, 3+ months, no resolution |
| [#42026](https://github.com/openclaw/openclaw/issues/42026) | 2026-03-10 | 2026-07-26 | stale, P2, needs-maintainer-review, needs-product-decision | Distributed Agent Runtime RFC, 4+ months with no maintainer decision |
| [#38520](https://github.com/openclaw/openclaw/issues/38520) | 2026-03-07 | 2026-07-26 | P2, needs-maintainer-review, needs-product-decision | Pre-compaction notification feature, 4+ months waiting |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | 2026-02-08 | 2026-07-26 | P2, needs-maintainer-review, needs-product-decision | Webhook session reuse not working as documented, 5+ months |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) | 2026-02-12 | 2026-07-27 | P2, needs-product-decision | Per-spawn tool restrictions, 5+ months |

### Open PRs Needing Proof or Review

| PR | Created | Status | Why Notable |
|----|---------|--------|-------------|
| [#114250](https://github.com/openclaw/openclaw/pull/114250) | 2026-07-27 | 📣 needs proof | Fixes 85% DB bloat from unbounded trajectory events |
| [#113866](https://github.com/openclaw/openclaw/pull/113866) | 2026-07-25 | 👀 ready for maintainer look | Large (XL) fix for Claude cache preservation during stalled CLI recovery |
| [#112496](https://github.com/openclaw/openclaw/pull/112496) | 2026-07-22 | 📣 needs proof | P1 security fix for `sessions_send` to unknown agents |
| [#109214](https://github.com/openclaw/openclaw/pull/109214) | 2026-07-16 | 👀 ready for maintainer look | Control UI agent switching sync fix |

### Assessment

The project's **backlog shows concerning accumulation of high-priority items** awaiting maintainer product decisions. Several P1 bugs (silent message loss, crash loops, session wedges) have been open for 1-2 months without fix PRs. The `clawsweeper:needs-product-decision` tag appears on ~30% of top issues, suggesting the maintainer team may be bottlenecked on architectural decisions. However, the **high merge velocity** (348 PRs today) and presence of regular maintainer activity (steipete active today across multiple PRs) is positive — the bottleneck appears selective rather than systemic.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem
**2026-07-27**

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a bifurcation between **production-scale reference implementations** (OpenClaw, ZeroClaw) and **specialized, opinionated agents** (Hermes Agent, NanoBot) targeting specific use cases. A clear pattern emerges: projects are moving beyond basic chat interfaces toward multi-agent orchestration, memory persistence, and cross-platform channel support. The ecosystem is **stabilizing through rapid iteration**—dozens of PRs merge daily across projects—but **backlog accumulation and regressions from major releases** signal that the velocity of feature development is outpacing quality assurance. Community engagement remains high, with users actively filing detailed bug reports and contributing fixes, though maintainer bandwidth is increasingly a bottleneck for architectural decisions.

---

## 2. Activity Comparison

| Project | Open Issues | Open PRs | Merged/Closed (24h) | Release Today | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 242 | 152 | 348 | None | ⚠️ **Strained** — High activity but significant P1/P2 backlog, regression waves |
| **ZeroClaw** | 50 | 48 | 2 | None | ⚠️ **Intense** — High code churn, S1 bugs accumulating, security incidents |
| **Hermes Agent** | 42 | 41 | 9 | None | ⚠️ **Growing backlog** — Community engaged but maintainer merge velocity modest |
| **NanoBot** | ~2 active | ~6 open | 25 | None | ✅ **Healthy** — Strong fix cycle, low open issue count, responsive team |
| **CoPaw/QwenPaw** | 15 | 14 | 6 | None | ⚠️ **Post-release stabilization** — v2.0.0 regressions being actively addressed |
| **IronClaw** | ~5 active | ~13 open | 6 | None | ✅ **High velocity** — Well-structured, disciplined engineering, low risk |
| **Moltis** | 0 updated | 7 open | 0 | None | ⚖️ **Moderate** — Features advancing but no community engagement today |
| **PicoClaw** | ~4 active | ~7 open | 1 | None | ⚖️ **Moderate** — Small team, external contributors, some stale PRs |
| **NanoClaw** | 2 new | ~8 open | 2 | None | ⚖️ **Stable but fragile** — Post-breaking-change stabilization |
| **NullClaw** | 1 active | 0 | 0 | None | 🔴 **Critical state** — Single S1 bug blocks ARM64 Telegram users |
| **LobsterAI** | ~1 active | 7 stale | 1 | None | 🔴 **Frozen** — No maintainer activity in months, PRs 3-4 months stale |
| **TinyClaw** | 0 | 0 | 0 | None | 💤 **Inactive** — No activity in 24h |
| **ZeptoClaw** | 0 | 0 | 0 | None | 💤 **Inactive** — No activity in 24h |

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of adoption**: 242 open issues and 500 PRs updated in 24h dwarfs all peers—OpenClaw is the ecosystem's most-used reference implementation by orders of magnitude
- **Merge throughput**: 348 PRs merged/closed daily is ~14x the next highest (NanoBot at 25) and ~40x most other projects
- **Channel breadth**: Slack, Telegram, Discord, DingTalk, Web, Control UI—the widest channel support in the ecosystem
- **Active memory/codex**: Embedding-based memory and context management is more mature than most peers

**Technical Approach Differences:**
- **Monolithic gateway**: Unlike IronClaw's componentized architecture or Moltis's protocol-oriented design, OpenClaw maintains a single-process gateway with extensive plugin channels
- **Session-first model**: Strong session state management with explicit compaction, unlike NanoBot's more ephemeral approach
- **Stable but regressing**: The 348 merged PRs/day paradoxically indicate *too much* change velocity—users report 2026.7.1 and 2026.7.2-beta.4 as introducing more regressions than fixes

**Community Size Comparison:**
- OpenClaw's 115-comment, 80👍 issue for Linux/Windows apps (#75) alone exceeds the entire active user base of LobsterAI, NullClaw, or TinyClaw
- Maintainer steipete alone authored or reviewed ~10 PRs today—more than most entire projects' daily activity

**Vulnerability:** The `clawsweeper:needs-product-decision` tag on ~30% of top issues suggests architectural decision-making is a bottleneck despite high merger velocity.

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **multiple projects today**, indicating ecosystem-wide priorities:

| Requirement | Affected Projects | Specific Need |
|---|---|---|
| **Session/Message Reliability** | OpenClaw, NanoBot, NanoClaw, NullClaw, ZeroClaw | Silent message drops, duplicate replies, stuck sessions, crash loops on channel initialization |
| **MCP/Protocol Interoperability** | Hermes Agent, CoPaw, Moltis, ZeroClaw | Streamable HTTP MCP transport support, keepalive across sleep/wake, provider-specific `$ref` normalization |
| **Cross-Platform Parity** | OpenClaw, ZeroClaw, NullClaw, LobsterAI | Windows/macOS/Linux desktop apps, ARM64 stack sizing, non-C: drive support, Wayland CPU issues |
| **Security & Credential Hardening** | Hermes Agent, ZeroClaw, PicoClaw, NanoBot | API key leaks in error messages, credential proxy daemons, redirect validation for downloads |
| **Memory/Context Management** | OpenClaw, NanoBot, ZeroClaw, CoPaw | Context bloat from repeated injection, compaction timeouts, embedding provider availability regressions |
| **Update Path Reliability** | OpenClaw (stable→beta), Hermes Agent (v0.19.0→), NanoClaw (explicit-destinations) | Regression-prone point releases, dependency downgrades on update, migration-incompatible breaking changes |
| **Fine-Grained Access Control** | OpenClaw, Moltis, PicoClaw, NanoBot | Per-spawn tool restrictions, exec denylists, per-account operator lists, remote exec approval |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | CoPaw |
|---|---|---|---|---|---|
| **Core Use Case** | Universal personal AI assistant | Production agent runtime | Developer toolchain agent | Lightweight channel bot | Qwen-ecosystem agent |
| **Target User** | End users, power users | DevOps, enterprise | Developers, researchers | Casual users, hobbyists | Qwen model users |
| **Architecture** | Monolithic gateway | Composable runtime | Plugin-based | Modular skills | Python/Qwen optimized |
| **Primary Channels** | Telegram, Slack, Web UI | Telegram, WhatsApp, Nextcloud | Discord, Telegram, WebUI | DingTalk, WebUI, Telegram | Console, Web, Matrix |
| **Memory System** | Active Memory + Codex | pgvector, embeddings | Mem0 plugin | Dream/memory provider | ReMe (v2.0 regression) |
| **Security Model** | Exec approvals, allowlists | Landlock sandbox, audit logs | Credential proxy (#4656) | Sandbox binds | Plugin isolation |
| **Community Engagement** | 353 issues/500 PRs/day | 50 issues/48 PRs/day | 50 issues/50 PRs/day | 10 issues/31 PRs/day | 22 issues/20 PRs/day |
| **Risk Profile** | Regression-prone | High churn, security incidents | Backlog accumulation | Low risk | Post-major-release risk |

**Key Differentiation:**
- **OpenClaw** wins on breadth and community adoption, but its high change velocity creates instability
- **ZeroClaw** leads on security (Landlock, attestation) but suffers cross-platform gaps
- **Hermes Agent** focuses on developer workflows (shell commands, A2A protocol) but has credential handling gaps
- **NanoBot** is the most stable/lightweight option, ideal for constrained deployments
- **CoPaw** is the only project tightly coupled to a model provider (Qwen), giving it unique optimization advantages
- **IronClaw** (NEAR AI) is architecturally the most disciplined—error recoverability, composition refactors—but is the least "consumer-ready"

---

## 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration (High Risk/High Reward)**
- **OpenClaw** — 348 PRs/day merged; ecosystem's center of gravity; stability eroding but community size ensures bugs get fixed
- **ZeroClaw** — 50 open PRs, security-focused maturation; cross-platform gaps are the biggest friction point
- **IronClaw** — Imminent release (PR #5598), Reborn initiative driving major architecture refactoring

**Tier 2: Stabilizing After Major Releases**
- **CoPaw** — v2.0.1 hotfix phase, actively whittling down regression reports (MCP transport, Matrix E2EE, cron reliability)
- **NanoClaw** — Post-breaking-change stabilization; destination-routing issues (#3140, #3136) need urgent maintainer attention
- **Hermes Agent** — Backlog growing faster than merges; maintainer bandwidth is the bottleneck

**Tier 3: Low Activity / Maintenance Mode**
- **Moltis** — Features advancing (ACP server, Slack improvements) but zero community engagement signals low organic adoption
- **PicoClaw** — Healthy external contributor flow but maintainer review cycle slow (PRs stale 7-26 days)
- **NanoBot** — Exceptionally healthy for its size: low open issues, responsive team, good security posture

**Tier 4: At Risk**
- **NullClaw** — Single S1 bug (SIGSEGV on ARM64) with no fix PR after 10 days; project effectively broken for key platform
- **LobsterAI** — No measurable maintainer activity; 7 PRs stale 3-4 months; project may be abandoned
- **TinyClaw, ZeptoClaw** — No activity at all; effectively dead

---

## 7. Trend Signals

**1. MCP is Becoming the Universal Integration Protocol (P0)**
Hermes Agent (#30268), CoPaw (#6470), Moltis (#1169), and ZeroClaw (#9418) all touched MCP connectivity today. The ecosystem is standardizing on MCP for tool integration, but transport choice (SSE vs. Streamable HTTP) and keepalive behavior remain fragmented. **Takeaway**: AI agent developers should invest in MCP-compliant tool interfaces; the ecosystem is converging on this as the "USB of agent tools."

**2. Breaking Changes Are Eroding User Trust**
OpenClaw (5.20→5.22, 6.11→7.1), Hermes Agent (v0.19.0 update path), and NanoClaw (explicit-destinations migration) all demonstrate that breaking changes without smooth migration paths cause disproportionate user dissatisfaction. **Takeaway**: Rolling releases and canary deployments will become table stakes for serious agent frameworks.

**3. Security is Moving from Optional to Required**
ZeroClaw (API key leak, Landlock sandbox), Hermes Agent (credential proxy #4656), PicoClaw (remote exec hardening PR #3297), and NanoBot (SSRF protection #5095) all shipped security fixes today. Credential handling, sandboxing, and execution authorization are no longer "nice-to-haves." **Takeaway**: Any agent service offered to end users must implement credential isolation and execution auditing by default.

**4. Cross-Platform Desktop is the Next Frontier**
OpenClaw (#75 — 80👍), ZeroClaw (#7527, #7462), NullClaw (#976 — ARM64), and LobsterAI (#273) all surface user demand for desktop apps beyond macOS. The community is tired of CLI-only or web-only experiences. **Takeaway**: The agent that delivers native desktop experiences across Windows, macOS, and Linux will capture significant market share.

**5. Memory/Context Management is the Scaling Bottleneck**
OpenClaw (#67419 — 20-30% context bloat, #92043 — compaction timeout), NanoBot (#5041 — Dream starvation), and ZeroClaw (#8642 — 2.5GB memory leak) all highlight that agent memory systems are not production-ready at scale. Users running long sessions or complex workflows are hitting fundamental limits. **Takeaway**: The project that solves "infinite context without infinite memory" will leap ahead in the ecosystem.

**6. Agent-to-Agent Communication is Emerging as a Priority**
Hermes Agent (#514 — A2A protocol, 28👍), Moltis (ACP agent server PR #1169), and ZeroClaw (agent composition patterns) are all exploring inter-agent protocols. The single-agent paradigm is giving way to multi-agent orchestration. **Takeaway**: Developers should build agents that can communicate with other agents, not just humans and tools.

---

**Bottom Line for Decision-Makers:**

The ecosystem is **healthy but fragmented**. OpenClaw remains the safest bet for broad compatibility, but its regressions warrant cautious upgrade timing. ZeroClaw is the most architecturally innovative but requires Windows/macOS CI investment. NanoBot offers the best "it just works" experience for simple deployments. Any project targeting production workloads must prioritize **MCP compliance, credential security, and smooth upgrade paths**—or risk being left behind as the ecosystem matures.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-27

## 1. Today's Overview
High-velocity day with 31 PRs updated and 10 issues touched, reflecting sustained maintenance momentum as the project heads toward its next release. **Eight of ten issues were closed**, indicating a healthy bug-fix cycle. Merge/close rate was strong at 25 PRs, and while no new releases were cut today, several high-severity fixes landed in `main`. The open issue count remains manageable (2 active of 10), though two long-stale feature requests continue without movement. WebUI polish, memory system hardening, and MCP tooling improvements dominated today's changelog.

## 2. Releases
**None.** No new tags or releases were created on 2026-07-27. Several fix batches appear ready for a future patch release.

## 3. Project Progress
**25 PRs merged or closed today**, covering critical bug fixes, security hardening, and incremental features:

- **Security:** [#5095](https://github.com/HKUDS/nanobot/pull/5095) — Harden generated image URL downloads with redirect validation, loopback/private IP rejection, and 32 MiB streaming cap.
- **Heartbeat/Unified Sessions:** [#4928](https://github.com/HKUDS/nanobot/pull/4928) — Route unified-session heartbeats to last known concrete channel; fix for `_pick_heartbeat_target_from_sessions` failure.
- **Memory/Dream:** [#5054](https://github.com/HKUDS/nanobot/pull/5054) — Advance Dream cursor past completed no-op batches so later history isn't starved. [#5056](https://github.com/HKUDS/nanobot/pull/5056) — Preserve accumulated output across length recovery segments.
- **MCP Tooling:** [#5057](https://github.com/HKUDS/nanobot/pull/5057) — Normalize local JSON Pointer `$ref`s to `#/$defs/` so strict providers (Kimi/Moonshot) don't reject the entire model.
- **CLI/Onboarding:** [#4939](https://github.com/HKUDS/nanobot/pull/4939) — Add Codex OAuth support to Quick Start flow, bypassing API key requirement.
- **Channels:** [#4446](https://github.com/HKUDS/nanobot/pull/4446) — DingTalk `disable_private_chat` flag and group-reply sender mention. [#5069](https://github.com/HKUDS/nanobot/pull/5069) — Ignore stale QR connection confirmations after user cancellation.
- **WebUI:** [#5100](https://github.com/HKUDS/nanobot/pull/5100) — Prevent long unbroken Markdown from widening mobile thread viewport.
- **Sandboxing:** [#4625](https://github.com/HKUDS/nanobot/pull/4625) — Configurable extra bind roots for `bwrap` shell sandbox (closes #4107).
- **Idle Performance:** [#5036](https://github.com/HKUDS/nanobot/pull/5036) — Make idle compaction scan interval configurable (Raspberry Pi users were seeing 30–40% CPU). [#5099](https://github.com/HKUDS/nanobot/pull/5099) — Preserve unprocessed Dream history during compaction.
- **Pending Messages:** [#5084](https://github.com/HKUDS/nanobot/pull/5084) — Preserve runtime context (sender/channel/chat) for queued mid-turn messages (related to #4064).

## 4. Community Hot Topics
- **#4924 — Unified session heartbeat failure** ([Issue](https://github.com/HKUDS/nanobot/issues/4924)) — 4 comments. Active discussion around `_pick_heartbeat_target_from_sessions` failing when `unifiedSession: true` with no explicit sessions. Fixed in [#4928](https://github.com/HKUDS/nanobot/pull/4928). *User need: reliable heartbeat delivery in unified-session deployments.*

- **#5102 — WebUI cron task silent delivery failure** ([Issue](https://github.com/HKUDS/nanobot/issues/5102)) — 2 comments. Japanese user reports cron tasks showing `lastStatus: "ok"` but never receiving push when WebUI tab was closed. Triggered investigation that confirmed data isn't lost (#5103 preserves UI unread state on reconnect). *User need: confidence that scheduled outputs are delivered even when UI is closed.*

- **#4792 — `/stop` discards pending queue messages permanently** ([Issue](https://github.com/HKUDS/nanobot/issues/4792)) — 2 comments, still open. Messages drained during `/stop` are never re-published to the message bus, unlike the `_dispatch` finally block. *User need: no silent message loss on interruption.*

- **#4107 — Additional bwrap bind mounts** ([Issue](https://github.com/HKUDS/nanobot/issues/4107)) — 2 comments, 👍1. Request for configurable sandbox mount points. Resolved in [#4625](https://github.com/HKUDS/nanobot/pull/4625). *User need: exposing user tool directories (`.local/bin`, `.cargo/bin`) inside sandboxed execution.*

## 5. Bugs & Stability
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#4064](https://github.com/HKUDS/nanobot/issues/4064) | Pending mid-turn messages lose runtime identity (sender/channel/chat) | Fixed in [#5084](https://github.com/HKUDS/nanobot/pull/5084) |
| **Critical** | [#5040](https://github.com/HKUDS/nanobot/issues/5040) | MCP tools with non-`#/$defs/` `$ref` disable entire model on Kimi/Moonshot | Fixed in [#5057](https://github.com/HKUDS/nanobot/pull/5057) |
| **High** | [#4792](https://github.com/HKUDS/nanobot/issues/4792) | `/stop` command permanently loses pending queue messages | **No fix PR yet** |
| **High** | [#5041](https://github.com/HKUDS/nanobot/issues/5041) | Completed no-op Dream batches starve later history indefinitely | Fixed in [#5054](https://github.com/HKUDS/nanobot/pull/5054) |
| **High** | [#5051](https://github.com/HKUDS/nanobot/issues/5051) | Length recovery `final_content` only contains last continuation segment | Fixed in [#5056](https://github.com/HKUDS/nanobot/pull/5056) |
| **Medium** | [#4924](https://github.com/HKUDS/nanobot/issues/4924) | Heartbeat target selection fails with unified sessions | Fixed in [#4928](https://github.com/HKUDS/nanobot/pull/4928) |
| **Medium** | [#5102](https://github.com/HKUDS/nanobot/issues/5102) | WebUI cron tasks show success but may not deliver when UI closed | Investigation by [#5103](https://github.com/HKUDS/nanobot/pull/5103) — confirmed delivery works, but UI unread indicator gap remains |

**Security alert:** [#5095](https://github.com/HKUDS/nanobot/pull/5095) landed today to prevent SSRF/redirect attacks via provider-returned image URLs — validate all redirect hops, reject private/loopback/metadata IPs, pin DNS for direct downloads.

## 6. Feature Requests & Roadmap Signals
- **Subagent Profiles** — [#1012](https://github.com/HKUDS/nanobot/issues/1012) — 4 months stale, 2 comments. Still no maintainer response. Would allow specialized agent types (research-only tools, coding-only tools) with pre-loaded skills. Predict: may be deferred or planned for v0.3.0 given current focus on stability.

- **Extension Platform** — [#5098](https://github.com/HKUDS/nanobot/pull/5098) — **New today, open.** A first-class, governed extension catalog with transactional lifecycle, Pi/OpenClaw compatibility. This signals a major architecture shift toward pluggability. Predict: likely to merge in 1–2 weeks given maintainer engagement.

- **Skills Cache** — [#4301](https://github.com/HKUDS/nanobot/pull/4301) — 6 weeks open with conflict label. Caches skill discovery/frontmatter to avoid repeated directory scans. Predict: close to merge after conflict resolution.

- **Idle Performance** — [#5036](https://github.com/HKUDS/nanobot/pull/5036) — Already merged. Makes compaction scan interval configurable, directly addressing resource-constrained deployments (Raspberry Pi). Indicates growing user base on low-power hardware.

## 7. User Feedback Summary
- **Satisfaction:** DingTalk channel operators get two quality-of-life improvements ([#4446](https://github.com/HKUDS/nanobot/pull/4446)) — private chat disable and sender mention in groups. Sandbox deployments get configurable bind mounts ([#4625](https://github.com/HKUDS/nanobot/pull/4625)).
- **Pain points:** WebUI cron task delivery confusion ([#5102](https://github.com/HKUDS/nanobot/issues/5102)) — user expected in-app notification but found only persisted data. Message loss on `/stop` ([#4792](https://github.com/HKUDS/nanobot/issues/4792)) remains unresolved, a reliability concern for power users. Raspberry Pi users frustrated by constant CPU usage ([#5036](https://github.com/HKUDS/nanobot/pull/5036)) — now addressed.
- **Use cases visible:** Unified-session deployments for multi-channel bots (heartbeat fixes), low-power edge devices (idle compaction config), MCP-integrated agents with strict providers (Kimi/Moonshot users), scheduled content delivery via WebUI cron.

## 8. Backlog Watch
- **#1012** ([Issue](https://github.com/HKUDS/nanobot/issues/1012)) — Subagent profiles, 4+ months stale, 2 comments, no maintainer response. Significant feature that would unlock agent specialization but has zero maintainer engagement. **Needs: triage label and either assignment or explicit roadmap deferral.**

- **#4792** ([Issue](https://github.com/HKUDS/nanobot/issues/4792)) — `/stop` message loss, 3 weeks open, 2 comments. No fix PR yet despite being flagged as a data-loss bug. **Needs: maintainer confirmation of reproduction and either assignment or workaround documentation.**

- **#4301** ([PR](https://github.com/HKUDS/nanobot/pull/4301)) — Skills cache, 6 weeks open with conflict label. Performance improvement for frequently queried skills. **Needs: conflict resolution guidance or rebase request from maintainers.**

- **#5098** ([PR](https://github.com/HKUDS/nanobot/pull/5098)) — Extension platform, opened today, labeled `priority: p1`. High signal that this is a priority for the project despite being a new addition. **Needs: timely review to avoid growing stale like #4301.**

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-27

## Today's Overview
Project activity is **very high** today, with 50 issues and 50 PRs updated in the last 24 hours. The open/active issue count (42) significantly outweighs closed items (8), indicating a growing backlog of reported problems and feature requests. The PR pipeline is similarly weighted toward open work (41 open vs 9 merged/closed), suggesting maintainers are actively reviewing but merging at a slower pace. No new releases were published today, but the sheer volume of high-quality bug reports and targeted fix PRs points to a project in an intense maintenance and refinement phase. The community is heavily engaged, with security, credential handling, and cross-platform compatibility emerging as dominant themes.

## Releases
No new releases were published in the last 24 hours. The latest stable release remains **v0.19.0 (2026.7.20)**.

## Project Progress
Nine PRs were merged or closed today. Notable advances include:
- **#44404 [CLOSED]** — Fix for `lazy-deps` false-positive activation causing unnecessary package downgrades. This was a significant config bug affecting the stability of plugin dependency resolution.
- **#53272 [CLOSED]** — Fix for `hermes update` not reinstalling Mem0 memory provider pip dependencies, ensuring the update path correctly preserves memory plugin functionality.
- **#60685 [CLOSED]** — Fix for `hermes update` downgrading CVE-pinned packages to stale exact versions, a critical update-path stability fix.
- **#69016 [CLOSED]** — Desktop renderer memory leak fix for Windows (render process OOM-killed every ~60s), resolved in the Electron app.

Several new fix PRs were opened today addressing high-priority bugs (see Bugs section).

## Community Hot Topics

- **#514 [OPEN] — A2A Protocol Support** (22 comments, 28 👍)
  [Issue](https://github.com/NousResearch/hermes-agent/issues/514) - The most upvoted feature request continues to generate discussion. Users are deeply interested in Google's Agent-to-Agent protocol for inter-agent discovery and communication. This has been open since March and remains a top community priority, signaling strong demand for Hermes to become a hub in a multi-agent ecosystem.

- **#4656 [OPEN] — Credential Proxy Daemon** (14 comments, 1 👍)
  [Issue](https://github.com/NousResearch/hermes-agent/issues/4656) - Despite low upvotes, this has sustained conversation around zero-knowledge credential brokering, indicating a niche but vocal group of security-conscious users pushing for agent credential isolation.

- **#7545 [OPEN] — Bang (!) Prefix for Shell Commands** (3 comments, 14 👍)
  [Issue](https://github.com/NousResearch/hermes-agent/issues/7545) - High reaction-to-comment ratio suggests strong silent demand for this Claude Code-inspired UX feature that would let users run shell commands directly from chat without LLM involvement.

- **#72298 [OPEN] — Passwords Leaking in Telegram Chat** (3 comments, 7 👍)
  [Issue](https://github.com/NousResearch/hermes-agent/issues/72298) - A security bug with high visibility due to the sensitive nature of credential exposure. Strong reaction count indicates user concern.

## Bugs & Stability
Numerous bugs were reported today. Ranked by severity:

### Critical / High Severity
- **#72298 [P2]** — Hermes shows passwords in Telegram chat (Bitwarden + Browserbase integration). No fix PR yet. High sensitivity.
- **#72348 [P2]** — Discord adapter allow/deny gates are process-global under `multiplex_profiles: true`, breaking per-profile isolation. **Fix PR #72427 opened today**.
- **#72421 [P2]** — Auxiliary Azure Foundry calls fail with HTTP 401 when using Microsoft Entra ID auth. No fix PR yet.
- **#72408 [P2]** — `vars(response)` crashes with TypeError on plain dict responses, masking real provider errors. No fix PR yet.
- **#72393 [P2]** — `hermes auth add anthropic --no-browser` is structurally unreachable, causing unattended OAuth to leak browser tabs. **Fix PR #72416 opened today**.
- **#72418 [P2]** — OpenRouter model names double-namespaced when provider prefix matches current provider. No fix PR yet.

### Medium Severity
- **#72389 [P2]** — `web_extract` truncation footer shows host-side cache path unreachable from Docker backend. **Fix PRs #72429 and #72428 opened today**.
- **#70689 [P3]** — Desktop `image_generate` renders duplicate `GeneratedImage` placeholder when assistant message also has text part. No fix PR yet.
- **#51882 [P3]** — Desktop Settings UI personality changes silently ignored (writes to `display.personality` but never `agent.system_prompt`). No fix PR yet.
- **#60962 [P2]** — Docker terminal backend on Windows fails for non-C: drives. No fix PR yet.
- **#54735 [P2]** — Unbounded model catalog response reads pose security risk. No fix PR yet.
- **#54786 [P2]** — Anthropic provider also has unbounded model fetch. No fix PR yet.

### Stability Issues
- **#30268 [P2]** — All connected MCP servers fail keepalive simultaneously after Mac sleep/wake. No fix PR yet.
- **#72174 [P3]** — Kanban `max-retries` exclusion of protocol violations allows more than N failed runs. No fix PR yet.

## Feature Requests & Roadmap Signals

Today's features suggest three roadmap priorities:

1. **Agent-to-Agent Interoperability** (#514): The ongoing A2A discussion, combined with the new MCP keepalive fix (#30268) and StreamableHTTP MCP bug report (#55469), signals that agent mesh networking is the next major horizon. Likely targeted for **v0.20.0**.

2. **Observability & Telemetry** (#67607): The NeMo Relay integration PR (open, ci-reviewed) introduces shared metrics and lifecycle event streaming. This appears close to merge and would be a **v0.19.x** patch candidate.

3. **Universal Rich Fallback Routes** (#72420): A new PR proposes bounded sequential LM Studio fallback transitions, suggesting the team is investing in provider reliability more than new providers.

4. **Remote Backend Probe Toggle** (#72423): Privacy-conscious users want opt-out for live remote-backend environment probes. This PR adds that toggle.

**Likely for next version (v0.19.1 or v0.20.0)**: A2A protocol base support (experimental), NeMo Relay observability, universal fallback routes, and the credential proxy daemon (#4656) if security momentum continues.

## User Feedback Summary

- **Pain Point: Credential & Password Handling** — Multiple issues (#72298, #4656, #72421, #72393) reveal widespread concern about how Hermes handles secrets across platforms. Users are reporting real credential leaks (Telegram), OAuth flow failures (Anthropic, Azure), and requesting zero-knowledge proxies. **Satisfaction is low** in this area.

- **Pain Point: Update Reliability** — Issues #60685 (downgrades) and #53272 (missing deps) show the update path is fragile. Users expect `hermes update` to be safe and incremental. **Moderate dissatisfaction** evident from the detail in bug reports.

- **Pain Point: Docker / Cross-Platform Compatibility** — Bugs #72389 (cache paths), #60962 (Windows drive letters), and #69016 (Windows memory leak) indicate multi-platform support is not yet production-grade. **Frustration is moderate**, especially from Docker users.

- **Pain Point: UI/UX Consistency** — #51882 (personality settings ignored) and #70689 (duplicate placeholders) show the desktop and TUI surfaces have configuration drift. **Mild dissatisfaction** reported.

- **Positive Signal: Feature Demand** — The 28 👍 on A2A and 14 👍 on bang commands indicate a healthy, engaged user base eager for advanced features. **Satisfaction is moderate-to-high** with the project's direction.

## Backlog Watch

Several important issues and PRs have been open for extended periods without maintainer response or clear resolution:

- **#23698 [OPEN since May 11]** — Feishu group message replies routed to sender's DM instead of group chat. P2, 1 comment. No maintainer engagement. This is a functional bug blocking a major Chinese platform integration.

- **#33548 [OPEN since May 28]** — Per-user profile routing for messaging platforms. P3 feature, 2 comments, no maintainer response. This would unlock multi-tenant gateways.

- **#380 [OPEN since March 4]** — Batch migration skill (parallel code migration). P3, 3 comments, no maintainer response despite being authored by a maintainer (teknium1). This suggests the idea is stalled or deprioritized.

- **#30268 [OPEN since May 22]** — All MCP servers fail keepalive after sleep/wake. P2, 1 comment. This is a recurring stability issue affecting many users of MCP tools, but has seen no maintainer triage.

- **#4656 [OPEN since April 2]** — Credential proxy daemon feature request. P3, 14 comments, labeled `needs-decision`. The maintainers have not given a clear yes/no, leaving the community in limbo on a high-investment feature.

- **#44404 [CLOSED today]** — This lazy-deps bug had been open since June 11 with no fix merged until today. The closure lag (6+ weeks for a P3 config bug) suggests maintainer bandwidth is stretched.

**Call to action:** Issues #23698 (Feishu routing) and #30268 (MCP keepalive) are P2 functional bugs with long dwell times. They need triage prioritization or a statement of non-support. The credential proxy (#4656) needs a `needs-decision` resolution to guide community contributions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-27

---

## 1. Today's Overview

Project activity is **moderate-to-high** today with 4 issues and 7 PRs updated in the last 24 hours. The repository shows a healthy mix of bug fixes (including a critical hang fix), security hardening, and new feature contributions. One issue was closed (a stale bug fix), and one PR was merged (a Go toolchain security bump). No new releases were published. The community is actively submitting both bug reports and feature PRs, indicating strong engagement from external contributors.

---

## 2. Releases

**No new releases today.** The last release remains unchanged.

---

## 3. Project Progress

**Merged/Closed PRs today:**

- **[#3248** [CLOSED]](sipeed/picoclaw/pull/3248) — **fix: bump Go to 1.25.12** to remediate two stdlib vulnerabilities (`GO-2026-5856` in `crypto/tls` and `GO-2026-4970` in `os`). This is a security-critical maintenance fix now applied to CI.

**Key open PRs advancing features:**

- **#3299** — **New native Exa web search provider** (contributed by `kesku`). Exposes Exa's auto-search API through PicoClaw's existing `tools.web` / `web_search` interface with time-range filter support.
- **#3297** — **Security hardening for remote prompt/exec** (contributed by `SiYue-ZO`). Keeps remote metadata in a normalized envelope rather than provider system instructions, disables remote exec by default, and enforces per-call approval.
- **#3295** — **Fix for `SplitMessage` hang** (contributed by `ErzerLP`). Prevents infinite loop when fenced-code info strings exceed split boundaries.
- **#3296** — **Czech language i18n completion** for code wrap labels (contributed by `KrtCZ`).

---

## 4. Community Hot Topics

**Most discussed Issues/PRs:**

1. **[Issue #3252** [CLOSED]](sipeed/picoclaw/issue/3252) — `splitKnownProviderModel` strips provider prefix incorrectly when model ID contains known provider alias. **2 comments.** This was a subtle bug that affected model configurations like `openai/gpt-4o` vs `gpt-4o-openai`. Closed as stale after 14 days, but the bug pattern may recur.

2. **[Issue #3264** [OPEN]](sipeed/picoclaw/issue/3264) — `SplitMessage` hangs forever on oversized fenced-code info strings. **1 comment.** Raised by `floze-the-genius`. The community need here is clear: message splitting must be robust against pathological markdown input. A fix PR (#3295) has already been submitted by `ErzerLP`, indicating active triage.

3. **[Issue #3298** [OPEN]](sipeed/picoclaw/issue/3298) — **Feature request for AI Router as a named provider preset.** Zero comments so far, but represents an external organization (AI Router) offering to contribute. Signals demand for easier discovery/configuration of routing services.

**Underlying needs:**
- Users want reliable message splitting without hangs, especially in multi-modal or code-heavy conversations.
- There's growing interest in web search integration and provider routing, suggesting the community is using PicoClaw for research/agent workflows, not just chat.

---

## 5. Bugs & Stability

**Bugs reported today (ranked by severity):**

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#3264](sipeed/picoclaw/issue/3264) | `SplitMessage` hangs indefinitely on fenced-code blocks with oversized info strings. **Potential for denial-of-service** in channel processing. | **PR #3295** submitted (under review) |
| **Medium** | [#3265](sipeed/picoclaw/issue/3265) | Gateway fails to start with `channel deltachat has unknown type deltachat` even when deltachat is not configured. Possibly a channel registry/config validation bug. | **No fix PR yet** |
| **Low** | [#3252](sipeed/picoclaw/issue/3252) | Provider prefix stripping bug in model ID parsing (closed). Fix likely already merged. | Resolved |

**Stability note:** The `SplitMessage` hang (#3264) is the most critical bug this week. It affects all channels that process long or complex messages. The existence of a PR (#3295) is encouraging, but it has not yet been reviewed.

---

## 6. Feature Requests & Roadmap Signals

**New feature requests today:**

- **[#3298** — **Add AI Router as an OpenAI-compatible provider preset**](sipeed/picoclaw/issue/3298): User `airouter-dev` requests a named preset so users can select "AI Router" instead of configuring a generic OpenAI provider with a custom `api_base`. Likely to be added in the next minor release, as it's a low-risk configuration change with clear user benefit.
- **[#3299** — **Native Exa web search provider**](sipeed/picoclaw/pull/3299): Already submitted as a PR with configuration schema and tests. This could land in the next release if reviewed promptly.

**Roadmap signals:**
- The security hardening PR (#3297) suggests upcoming schema v4 migration for configs, which would be a **breaking change** for users with v3 configs.
- Multiple PRs touching web search (#3299) and routing (#3298) indicate the project is evolving toward more capable agent/assistant use cases beyond simple chat.

---

## 7. User Feedback Summary

**Real pain points expressed:**
- **Configuration fragility:** Users report issues with provider name parsing (#3252) and unexpected startup failures due to unconfigured channels (#3265). Config validation could be tighter.
- **Message splitting reliability:** The hang bug (#3264) directly impacts users sending code blocks or long formatted messages.
- **Token refresh failures:** The Antigravity provider bug (#3267, with fix PR) frustrated users whose auth would fail silently after the initial token expired.

**Satisfaction signals:**
- External contributors are proactively fixing bugs (#3295, #3297) and adding features (#3299), indicating a healthy and motivated community.
- i18n contributions (Czech, #3296) show a global user base that values localization.

---

## 8. Backlog Watch

**Issues/PRs needing maintainer attention:**

1. **[PR #3202** [OPEN, stale since Jul 1]](sipeed/picoclaw/pull/3202) — **fix(routing): strip leading/trailing underscores in ID normalization.** Important for routing correctness; agent/account IDs with edge-case formatting would fail to match `^[a-z0-9]...` regex. Unreviewed for 26 days.

2. **[Issue #3265** [OPEN, stale since Jul 19]](sipeed/picoclaw/issue/3265) — Gateway startup fails with deltachat channel error. **No comments from maintainers.** This blocks users from even starting the gateway, so it should be prioritized.

3. **[PR #3267** [OPEN, stale since Jul 19]](sipeed/picoclaw/pull/3267) — **fix scope bug for refresh agent token** (Antigravity). Already has a fix author. Seven days without review—users of Antigravity are effectively locked out.

**Maintainer attention summary:** Two important PRs (#3202, #3267) have been open 26 and 7 days respectively without review. The critical hang bug (#3264) has a pending fix (#3295) that also needs review. These should be the top triage priorities for the next maintainer session.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-27

## Today's Overview

The NanoClaw project shows moderate activity with 8 pull requests updated in the last 24 hours, including 2 closed/merged, and 2 new open issues—both addressing critical destination-routing regressions from a recent breaking change. The core team is actively shipping fixes and features, with two closed PRs advancing duplicate-reply prevention and a per-agent-group timezone override. However, two open high-severity issues (#3140 and #3136) regarding silent message drops after the explicit-destinations migration remain unresolved, signaling a period of stabilization following a major API change. Overall project health is stable but warrants close monitoring of the destination-routing reliability.

## Releases

No new releases were published today. The last breaking change (explicit-destinations requiring `to` parameter in `send_message`/`send_file`) continues to generate regression reports.

## Project Progress

**Two pull requests were merged/closed today:**

- **#3028 - Fix: avoid duplicate replies after send_message** (merged) — A fix by `ogarciarevett` that captures the outbound message sequence at the start of each provider round, preventing a bare final summary from triggering a re-wrap nudge when `send_message` already wrote a chat reply. This addresses a common source of duplicate agent messages in multi-turn conversations.

- **#3125 - feat: per-agent-group timezone override** (merged) — A core-team feature by `Koshkoshinsk` that adds optional IANA timezone overrides per agent group via `container_configs` (migration 020). The resolution uses group override → install global, and grounds the group's time-of-day context, enabling localized agent behavior across different timezones.

## Community Hot Topics

- **#3140 - Explicit-destinations migration: pre-existing wirings have no own-chat destination** [OPEN, 0 comments] — The most critical open issue: after the breaking change requiring a `to` destination, existing chat groups silently drop all agent replies because their pre-update wiring has no destination. No comments yet, but this is a potential silent data-loss scenario affecting long-standing installations.

- **#3136 - `sendToDestination` stamps a foreign `in_reply_to` on outbound rows** [OPEN, 0 comments] — A detailed bug report showing that `sendToDestination()` falls back to the waking batch's `in_reply_to` when the destination has no inbound history, corrupting return-path routing for A2A messages. This compounds the destination-migration problem.

- **#3139 - Fix shared-number mode for WhatsApp** [OPEN] — Community contributor `grtwrn` has submitted a fix for shared-number mode where the owner's messages were being silently dropped, suggesting frustration with WhatsApp integration reliability.

- **#3122 - OpenCode main compatibility, custom-endpoint transport** [OPEN, core-team] — A substantive PR addressing OpenCode AI platform compatibility, indicating ongoing expansion to additional LLM provider backends.

**Underlying needs:** The community is grappling primarily with migration stability from the explicit-destinations API change, combined with message-routing correctness in WhatsApp and general agent communication channels.

## Bugs & Stability

| Severity | Issue | Description | Has Fix PR? |
|----------|-------|-------------|-------------|
| **Critical** | #3140 | Pre-existing wirings have no `own-chat` destination after update — replies silently dropped to zero | No |
| **High** | #3136 | `sendToDestination` stamps wrong `in_reply_to` on outbound rows, losing A2A return-path routing | No |
| **Medium** | #3139 (PR) | WhatsApp shared-number mode drops owner's `fromMe` messages | Yes (#3139 is a fix PR, open) |
| **Medium** | #3138 (PR) | Chat SDK falls back to `fetch(url)` when attachment has no `fetchData` | Yes (open fix PR) |
| **Low-Medium** | #3126 (PR) | Agent runner delivers silence and `<internal>` thinking | Yes (open fix PR) |

**Ranking rationale:** #3140 is highest severity because it represents silent data loss with no error feedback to users. #3136 compounds the issue by corrupting routing even when destinations exist but lack inbound history. The WhatsApp fix (#3139) and attachment fallback (#3138) have open PRs in progress.

## Feature Requests & Roadmap Signals

- **Timezone-override capability** — The merged #3125 PR signals that agent groups will soon support localized time-of-day awareness, enabling behavior like "don't reply after 10 PM in user's timezone."

- **Self-serve wiring controls** — PR #3137 (open, core-team) introduces letting group-scoped agents inspect their wirings and request approved engagement-policy updates, a significant user-empowerment feature likely to land in the next release.

- **Dial channel integration** — PR #3050 (open, 12 days old) adds Dial as a new channel in the setup wizard. This suggests ongoing expansion of supported communication platforms.

**Prediction for next version:** The per-agent-group timezone override (#3125) is already merged and will likely appear in the next release. Self-serve wiring controls (#3137) are core-team driven and may also ship soon. Fix PRs for critical routing issues (#3140, #3136) should receive priority attention from maintainers.

## User Feedback Summary

**Pain points (explicit):**
- Breaking change migration is causing message loss without user-visible errors (#3140)
- WhatsApp integration has reliability issues with shared number mode (#3139)
- Message duplication before the fix (#3028) — now resolved
- Agent runner leaks internal `<thinking>` tags and silence into user-facing channels (#3126, open fix)

**Satisfaction signals:**
- Community contributors are actively submitting fixes (#3139 by `grtwrn`, #3138 by `doodlemoonch`)
- Core team members are shipping substantial features (#3125 timezone, #3137 wiring controls)
- The `follows-guidelines` tag on multiple PRs indicates good contributor onboarding

## Backlog Watch

- **#3050 - Dial channel integration** (open since 2026-07-14, 13 days) — No maintainer response visible. This feature skill adds a new communication channel but has been idle; maintainer review would signal commitment to channel diversity.

- **#3122 - OpenCode compatibility** (open since 2026-07-23, core-team) — Still in review but core-team owned; no visible blockers.

**No issues appear to be long-abandoned.** The most concerning items are the two open routing-regression issues (#3140, #3136) which lack fix PRs and have no comments from maintainers yet, despite being reported 1 day ago. Given their severity, maintainer attention within 48 hours would be advisable.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-27

## 1. Today's Overview
The NullClaw project shows low activity over the past 24 hours, with only one open issue updated and no pull requests or new releases tracked. The single active issue (#976) is a critical crash bug affecting Telegram gateway functionality, representing a significant stability concern. No merged PRs or closed issues were recorded, suggesting a quiet period for development or maintainer attention. The project appears healthy in terms of community engagement on the critical issue, but lacks visible forward momentum in feature development or bug fixes today.

## 2. Releases
No new releases were published in the last 24 hours. The latest available release remains **v2026.5.29** from May 2026. Users should monitor for future releases that may address the critical crash described in Issue #976.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. No features advanced during this period. The project has no record of recent code contributions or resolved fixes.

## 4. Community Hot Topics
The single active issue dominates community attention:
- **Issue #976** — [SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976) — *Author: wonhotoss | Updated: 2026-07-26 | 3 comments, 0 reactions*
  - This issue describes a **critical crash** on aarch64 Linux (v2026.5.29) where each inbound Telegram message causes a segmentation fault due to a worker thread spawned with an insufficient (~512 KB) stack. The crash-loop prevents users from receiving replies.
  - Underlying need: Users require stable Telegram gateway operation. The 512 KB stack limit clearly violates the Telegram worker's actual stack depth requirements on ARM64, indicating an architecture-specific resource sizing regression.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#976](https://github.com/nullclaw/nullclaw/issues/976) | SIGSEGV on every inbound Telegram message due to insufficient stack size (~512 KB) on aarch64 | No |
| None other | — | No other bugs reported or updated today | — |

This is a **release blocker** severity bug: it makes the Telegram gateway completely non-functional on ARM64 (common in single-board computers and cloud ARM instances). Without a fix (e.g., increasing thread stack size to at least 2 MB), affected users cannot use Telegram integration at all.

## 6. Feature Requests & Roadmap Signals
No feature requests were submitted or updated in the last 24 hours. The project shows no user-driven feature demand in this period. Based on the critical stability issue, the **next version is likely to focus exclusively on a hotfix** (likely increasing the inbound worker thread stack size or making it configurable). No roadmap signals for new features are visible.

## 7. User Feedback Summary
- **Pain point**: The Telegram gateway crash is a **showstopper** for ARM64 Linux users (e.g., Raspberry Pi, AWS Graviton). The systemd `Restart=always` workaround results in message loss and infinite crash loops.
- **Use case affected**: Users relying on NullClaw as a Telegram personal AI assistant are completely unable to receive responses.
- **Satisfaction**: Likely very low among affected users. No positive feedback or workarounds were shared in the issue comments.
- **Dissatisfaction signals**: The 3 comments in #976 suggest users are actively discussing the problem but no maintainer response or workaround is visible yet.

## 8. Backlog Watch
- **Issue #976 (Critical, 10 days old)** — No maintainer comment or assignment as of the last update. This issue requires immediate maintainer attention to either:
  1. Confirm the bug and propose a fix (e.g., increasing stack size to `pthread_attr_setstacksize`).
  2. Provide a configuration workaround for affected users.
  3. Prioritize a hotfix release (v2026.7.x).

No other long-unanswered important items were detected in the current data window. The project’s health depends on swift resolution of this blocking crash.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for 2026-07-27.

---

## IronClaw Project Digest — 2026-07-27

### 1. Today's Overview
The project is in a high-velocity phase, with **19 PRs updated** and **5 active issues** in the last 24 hours. Activity is heavily concentrated on the **"Reborn" error-recoverability initiative** and a significant **architectural refactor of the composition layer**. There are no new releases today, but multiple large branches are converging on `main`, suggesting a release may be imminent. Despite the high volume of work, risk is generally rated low, indicating disciplined engineering processes.

### 2. Releases
**None.** No new versions or tags were published in the last 24 hours.

### 3. Project Progress (Merged/Closed PRs)
Six PRs were merged or closed today, representing significant feature advancement and cleanup:

- **#6684 (Merged/Closed):** A massive refactor collapsing five overlapping failure-kind enums into a single 35-variant `FailureKind` in `host_api`. This is a direct implementation target for the error-recoverability endgame (#6284). ([PR #6684](https://github.com/nearai/ironclaw/pull/6684))
- **#6677 (Merged/Closed):** Added a compile-forced recoverability conformance matrix with a classifier for seven error enums. This is the foundation for automated verification of the recoverability contract. ([PR #6677](https://github.com/nearai/ironclaw/pull/6677))
- **#6679 (Merged/Closed):** Hardened the "struct ratchet" system using `syn` parsing instead of line-oriented scanners, improving regression coverage, and removed the dead Gemini API code. ([PR #6679](https://github.com/nearai/ironclaw/pull/6679))
- **#6365 (Merged/Closed):** The reference PR for P2b per-user hosted-MCP discovery was closed (superseded by #6683, which is cleaner on top of `main`). ([PR #6365](https://github.com/nearai/ironclaw/pull/6365))
- **#6640 & #4032 (Merged/Closed):** Two large dependency bumps (31 and 2 updates respectively), keeping the project's dependency tree current. ([PR #6640](https://github.com/nearai/ironclaw/pull/6640), [PR #4032](https://github.com/nearai/ironclaw/pull/4032))
- **#5369 (Merged/Closed):** A bugfix from a new contributor suppressing Cranelift debug log floods in the Reborn host. ([PR #5369](https://github.com/nearai/ironclaw/pull/5369))

### 4. Community Hot Topics
- **Epic #6284 — Error Recoverability** (8 comments, updated today): This is the most active thread, acting as the central epic for ensuring the AI model can recover from 100% of errors. The community is deeply engaged in defining the "recoverability contract" (survival, visibility, action). This is driving multiple PRs (#6684, #6677). ([Issue #6284](https://github.com/nearai/ironclaw/issues/6284))
- **PR #6683 — Per-User Hosted-MCP Discovery (P2b)**: A large PR from relatively new contributor `kirikov` restructures how worker agents discover and use hosted MCP tools. This is a key feature for multi-tenant agent orchestration. ([PR #6683](https://github.com/nearai/ironclaw/pull/6683))

### 5. Bugs & Stability
- **High Severity — #6690: "Out of credits" hang**: When a user exhausts their NEAR AI credits, the chat interface hangs indefinitely on "thinking…" with no notification. This is a critical UX bug affecting the web channel. **No fix PR exists yet.** ([Issue #6690](https://github.com/nearai/ironclaw/issues/6690))
- **Medium Severity — #6575 (via PR #6652)**: The `systemd` unit file has a broken `WorkingDirectory=` setting (it was quoted, which is invalid for systemd Path-type directives). The fix in PR #6652 resolves this but remains open. ([PR #6652](https://github.com/nearai/ironclaw/pull/6652))
- **Low Severity — #6686: Dead Code**: The `DockerProcessSandboxBackend` is confirmed dead code and a PR for its removal is expected. ([Issue #6686](https://github.com/nearai/ironclaw/issues/6686))
- **Stability Regression — #6682**: The daily failure taxonomy for clawbench shows 82 non-passing tests, primarily dominated by "model-quality partial completions" rather than system bugs. This is a monitoring data point, not a regression. ([Issue #6682](https://github.com/nearai/ironclaw/issues/6682))

### 6. Feature Requests & Roadmap Signals
- **#6691 (Open PR): Composition Assembly Refactor**: A massive PR extracting hosting, authorization, triggers, and model-gateway wiring into focused builders. This signals the codebase is being prepared for cleaner composability and possibly external configurations. ([PR #6691](https://github.com/nearai/ironclaw/pull/6691))
- **#6689 (Open PR): Sandbox Credential Placeholder**: Introduces a `CredentialSession` minted just-in-time from a stable token, keeping real secrets out of the container. This is a security hardening feature that is "unwired" (not yet active in production). Expect it to be wired in the next version. ([PR #6689](https://github.com/nearai/ironclaw/pull/6689))
- **#6672 (Open PR): Attested Signing Phase B**: Implements "signed intent" and per-agent key lifecycle. This is the cryptographic attestation layer for agent transactions, a major feature for production trustworthiness. ([PR #6672](https://github.com/nearai/ironclaw/pull/6672))

### 7. User Feedback Summary
- **Pain Point — Silent Failures**: Issue #6690 reveals a critical frustration: users are left staring at "thinking…" with no feedback that they have run out of credits. This represents a violation of the project's own "recoverability contract" at the UX level.
- **Positive Signal — Automation**: The daily failure taxonomy (#6682) and mutation testing (#6681) show the team is investing in automated quality monitoring, which directly benefits users through improved reliability.

### 8. Backlog Watch
- **PR #5598 — Release PR (Open since July 3, updated today)**: This release PR proposes breaking changes to `ironclaw_common` (0.4.2 -> 0.5.0) and `ironclaw_skills` (0.3.0 -> 0.4.0). It has been open for 24 days with no merge or rejection. Given the velocity of changes to `main`, this release may be awaiting stabilization of the Reborn error-recoverability work. ([PR #5598](https://github.com/nearai/ironclaw/pull/5598))
- **PR #5664 — CI Dependency Bump (Open since July 5)**: Bumps 16 GitHub Actions (including `actions/checkout` from v4 to v7 and `anthropics/claude-code-action` from v1.0.88 to v1.0.183). While low-risk, stale CI actions can become a security surface. ([PR #5664](https://github.com/nearai/ironclaw/pull/5664))

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-27

## Today's Overview
Activity on LobsterAI remains **low** over the last 24 hours. Only 2 issues were updated (1 closed, 1 open/stale), and 8 pull requests were touched — all but one remain open and **7 are stale** (no author/maintainer activity since April 2026). No new releases exist. The project appears to be in a **sustained maintenance lull**, with most open work dating back 3–4 months and no recent merge or commit activity from maintainers. While a substantial feature backlog exists in the PR queue, there is no evidence of active integration or review.

## Releases
**None.** The latest release remains unknown – no new versions have been tagged or published today.

## Project Progress
Only 1 PR was closed/merged today, and it was **stale**:
- **PR #1325** (closed, merged) — *feat(ui): add hover tooltip to new conversation icon button* by 0xFLX. Added `title` attribute to the "new conversation" icon button across collapsed sidebar, Cowork view, Agents view, and MCP view. A small UX polish, but the only sign of forward movement today.

All other 7 updated PRs remain **open and stale** — last touched on 2026-04-01 or 2026-04-02. This suggests maintainers have not reviewed or merged significant work in months.

## Community Hot Topics
No issues or PRs received any new comments or reactions today. The most active items from historical data:

- **Issue #273** [CLOSED] — *[Suggestion] Ubuntu Linux support* by billyoungs. 2 comments, 0 reactions. The user request is closed, suggesting maintainers may have declined or deferred.
- **Issue #1243** [OPEN/STALE] — *BUG: qwen-portal-auth plugin config loop triggers gateway frequent restart* by gongzhi-netease. 1 comment, 0 reactions. A clear bug with high user impact, yet unanswered for nearly 4 months.

**Takeaway:** The community is largely silent. No new discussions, suggestions, or bug reports emerged today.

## Bugs & Stability
Only one bug report is active:

1. **Issue #1243** — *BUG: qwen-portal-auth plugin config loop triggers gateway frequent restart* (OPEN, **stale**)
   - **Severity:** **High** (gateway restarts every 5–20 minutes, "AI engine starting gateway" popup repeatedly displayed)
   - **Root cause:** `qwen-portal-auth` plugin configuration changes continuously, triggering OpenClaw gateway auto-restart
   - **Affects:** Windows 10/11 users on LobsterAI 2026.4.1
   - **Fix PR:** **None identified.** No PR links this issue. The bug has been open and untouched since April 1, 2026.

No new bugs were filed today.

## Feature Requests & Roadmap Signals
No new feature requests were filed today. The PR queue contains several unmerged, stale features that may or may not be destined for a future release:

- **PR #1256** — Natural language scheduling for timed tasks (cron expression from LLM parsing). High user value, but stale since April 1.
- **PR #1252 & #1258** — Unsaved changes confirmation dialogs for timed-task forms. Two separate PRs attempting the same fix — a sign of coordination issues.
- **PR #1247** — Fix OpenClaw model switch recovery after provider limits. A significant underlying infrastructure fix.
- **PR #1249** — Fix DiffView not rendering for Claude SDK & OpenClaw tool names. Affects use of Anthropic models and custom gateways.

**Prediction:** If maintainers return to active development, natural language scheduling (PR #1256) and gateway recovery (PR #1247) are high-impact features most likely to land in the next release. The duplicate unsaved-changes PRs need consolidation.

## User Feedback Summary
User signals are nearly absent today. Key signals from the backlog:

- **Pain point:** Linux users clearly want support (Issue #273), but the issue is closed without an explanation — may signal no plans for cross-platform support.
- **Pain point:** The gateway restart loop (Issue #1243) is actively degrading user experience on Windows, with no fix or workaround communicated. This is a **dissatisfaction risk**.
- **Positive UX signal:** The tooltip fix (PR #1325, merged) addresses a real discoverability issue — users were unsure of the icon button's function. This suggests attention to polish, though rare.

No other user feedback (👍, comments, reactions) was recorded today.

## Backlog Watch
The following items are **high priority but have received no maintainer attention in 3+ months**.

| Item | Type | Issue Date | Last Activity | Status |
|------|------|------------|---------------|--------|
| **Issue #1243** — qwen-portal-auth config loop triggering gateway restart | Bug | 2026-04-01 | 2026-04-01 | **No fix PR, no comment, no label update** |
| **PR #1252** — Unsaved changes confirmation (task form) | Feature | 2026-04-01 | 2026-04-01 | Stale, may conflict with PR #1258 |
| **PR #1256** — Natural language scheduling | Feature | 2026-04-01 | 2026-04-01 | Stale, high user-facing value |
| **PR #1247** — OpenClaw model switch recovery | Fix | 2026-04-01 | 2026-04-01 | Stale, core stability |
| **PR #1259** — Gateway bundling and dependency handling | Refactor | 2026-04-01 | 2026-04-01 | Stale, affects build pipeline |

**Verdict:** LobsterAI's backlog is **frozen** — no maintainer appears to be actively reviewing or merging PRs, and critical bugs remain unaddressed. The project's health is **fragile**; sustained inactivity risks code rot and contributor churn. If this pattern continues, the project may require community fork or maintainer change to remain viable.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-27

## Today's Overview
The project shows elevated activity with 7 open pull requests updated within the last 24 hours, though no new releases were published and no issues were updated. Development is concentrated on expanding Moltis’s reach beyond its traditional boundaries: a major push adds an ACP agent server (making Moltis usable as an agent by other tools), a new vector database memory backend (Zvec), and significant Slack integration improvements. The lack of any closed/merged PRs today suggests these features are still under active review and refinement.

## Releases
No new releases were published today. The last available release information remains unchanged.

## Project Progress
No pull requests were merged or closed in the last 24 hours. All 7 updated PRs remain open, indicating ongoing development without completed integrations today.

## Community Hot Topics
All 7 updated PRs received zero comments and zero reactions, making it impossible to gauge community engagement from quantitative signals. The most functionally significant PRs based on scope:

- **[PR #1158 — feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)** — A vibe-coded alternative memory backend using Zvec and redb, gated behind the `zvec` Cargo feature. This suggests community interest in self-hosted, lightweight vector storage as an alternative to existing backends.

- **[PR #1169 — feat(acp): expose Moltis as an ACP agent over stdio](https://github.com/moltis-org/moltis/pull/1169)** — Addresses the symmetric gap: Moltis only consumed ACP agents, now it can be consumed. This opens integration with Zed, buzz-acp, and custom runners.

- **[PR #1166 — feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit](https://github.com/moltis-org/moltis/pull/1166)** — Builds on prior work to make Slack bot UX production-grade, including Block Kit rendering and reconnect supervision.

The underlying need across these PRs is making Moltis a more flexible, interoperable platform — both as a consumer of external agents and as a provider of agent services to other tools.

## Bugs & Stability
One security-relevant fix was proposed:

- **[PR #1170 — fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)** — **Critical severity**. The `handle_sh` command (arbitrary host command execution) was accessible to any channel member who passed the group access gate. On Discord guilds or group chats, this meant any member could execute arbitrary shell commands on the host. The fix introduces a per-account operators list as an additional authorization layer.

**Status:** Fix PR is open but not yet merged.

## Feature Requests & Roadmap Signals
Though no explicit feature requests were filed as issues today, the submitted PRs signal the development direction:

1. **ACP agent server** — Likely to be in a near-term release given the implementation is complete and awaiting review.
2. **Push notification reliability** ([PR #1173](https://github.com/moltis-org/moltis/pull/1173)) — Fixes non-disruptive silent replacements in PWA notifications, suggesting upcoming PWA polish.
3. **Unified agent/client model picker** ([PR #1171](https://github.com/moltis-org/moltis/pull/1171)) — Moves ACP client selection into the chat model picker, streamlining UX.
4. **Zvec memory backend** — Experimental but fully implemented, may ship as an optional feature in a future release.

The pattern suggests the next release will focus on **ACP bidirectionality, Slack reliability, and memory backend diversity**.

## User Feedback Summary
No user feedback was captured today — zero issues were opened or updated, and zero comments were left on PRs. The PR authors’ commit messages indicate internal development priorities rather than user-reported pain points. The Slack acknowledgment reactions feature (PR #1166) and the PWA notification fix (PR #1173) address known UX gaps in those integration channels.

## Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified — the 24-hour window shows zero issues and 7 recently-updated PRs, none of which have gone stale. The oldest PR in the active set is #1158 (created July 17), which has received no comments, possibly awaiting maintainer review or testing.

**Notable watch item:** PR #1158 (Zvec memory backend, 10 days old) has no community feedback and may need a maintainer to guide its integration path or request testing from users running Zvec/redb setups.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the GitHub data for CoPaw (github.com/agentscope-ai/CoPaw) as of 2026-07-27, here is the project digest.

---

## CoPaw / QwenPaw Project Digest — 2026-07-27

### 1. Today's Overview

The project is in a period of **high activity and post-major-release stabilization**, following the launch of **v2.0.0** and the subsequent **v2.0.1** hotfix. Today saw 22 issues updated (15 still open) and 20 PRs updated (14 still open), indicating a healthy but busy triage cycle. The community is actively reporting regressions and missing features from the v2.0.0 upgrade, while maintainers are merging critical fixes for Windows compatibility, UI usability, and infrastructure bugs. The influx of `first-time-contributor` PRs suggests growing community engagement, though the volume of open bugs indicates the project is still managing the fallout of the significant v2.0.0 release.

### 2. Releases

No new releases were published today. The current latest version remains **v2.0.1**, which appears to be a hotfix release addressing issues found in the initial v2.0.0 launch.

### 3. Project Progress

Six PRs were merged or closed today, signaling progress on several fronts:

- **Critical Bug Fixes**:
    - [#6488](https://github.com/agentscope-ai/QwenPaw/pull/6488): **fix(console)**: Kept the sidebar settings gear visible when collapsed, solving a mobile UX issue.
    - [#6417](https://github.com/agentscope-ai/QwenPaw/pull/6417) & [#6415](https://github.com/agentscope-ai/QwenPaw/pull/6415): **test(integration/e2e)**: Added regression coverage for workspace-git, coding-project, and skill auto-sync features, strengthening the stability of v2.0.
    - [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365): **fix(console)**: Finally resolved a cross-platform issue preventing test scripts from running on Windows (related to [#6361](https://github.com/agentscope-ai/QwenPaw/issues/6361)).
- **Features**:
    - [#6426](https://github.com/agentscope-ai/QwenPaw/pull/6426): **feat(models)**: Allowed users to rename custom API providers, addressing a community feature request ([#6414](https://github.com/agentscope-ai/QwenPaw/issues/6414)).
- **Documentation**:
    - [#6477](https://github.com/agentscope-ai/QwenPaw/pull/6477): **docs(faq)**: Synced heading formatting between English and Chinese FAQ docs.

### 4. Community Hot Topics

The most active discussions reflect a community grappling with the transition to **QwenPaw v2.0** and demanding more robust infrastructure:

- **v2.0.0 Regression (The "Hottest" Topic)**: **[#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)** (CLOSED) & **[#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155)** (CLOSED) are the top-voted, deeply detailed reports of features "completely inaccessible" after upgrading. The primary complaints are about **SSH Offline** features returning 404s and **Embedding mapping bugs (ReMe)** that break local model usage. These were closed but the root cause for #5980 remains a high-priority concern.
- **MCP Connectivity Crisis**: **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)** (OPEN) has 4 comments and is a critical blocker for users relying on Streamable HTTP MCP servers. The driver is hardcoded to SSE, making a standard protocol unusable. This issue was duplicated three times ([#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468), [#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469)), indicating a widespread user impact.
- **Cron Task Reliability**: **[#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471)** (OPEN) describes cron tasks misfiring after idle periods, a systemic issue with the `AsyncIOScheduler`. A fix is in progress via [#6481](https://github.com/agentscope-ai/QwenPaw/pull/6481).
- **Linux Performance**: **[#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)** (OPEN) reports high CPU usage on Edge/Wayland, linked to large result sets and WebSocket replay. A proposed fix exists in [#6485](https://github.com/agentscope-ai/QwenPaw/pull/6485).
- **Localization**: **[#6478](https://github.com/agentscope-ai/QwenPaw/issues/6478)** (OPEN) shows strong community desire for Traditional Chinese support, which is already being implemented in PR [#6484](https://github.com/agentscope-ai/QwenPaw/pull/6484).

### 5. Bugs & Stability

Today's reports reveal a mix of high-severity regressions and ongoing stability issues.

**Critical (User-Blocking)**:
- **MCP Transport Hardcode** ([#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)): All Streamable HTTP MCP servers are broken. **A test PR exists ([#6483](https://github.com/agentscope-ai/QwenPaw/pull/6483)) to prevent regression.**
- **Plugin Failure on Desktop** ([#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473)): The "Agent Kanban" plugin fails to install due to a missing module (`qwenpaw.pawapp`).
- **Matrix E2EE Broken** ([#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476)): End-to-end encryption for the Matrix channel is completely non-functional due to a Python 3.12 dependency conflict. **A fix PR exists ([#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486)).**
- **Video DataBlock Dropped** ([#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474)): The `view_video` tool reports success but never sends video data to the LLM.

**High (Degrading User Experience)**:
- **Cron Misfire** ([#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471)): Scheduled tasks fail to fire. **A fix PR exists ([#6481](https://github.com/agentscope-ai/QwenPaw/pull/6481)).**
- **Unix Shell/`nohup` Hangs** ([#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)): Agents freeze indefinitely after using `nohup` or `&` in shell commands.
- **Console UI Freeze** ([#6482](https://github.com/agentscope-ai/QwenPaw/issues/6482)): Switching between chats/agents causes the UI to lock up.
- **Windows PATH Corruption** ([#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)): Semicolon separator is dropped when merging PATH variables, breaking npm global tools.

### 6. Feature Requests & Roadmap Signals

Several feature requests point to future direction:

- **Likely in Next Version (v2.1.0)**:
    - **Traditional Chinese (zh-TW) Support**: Issue [#6478](https://github.com/agentscope-ai/QwenPaw/issues/6478) is already implemented in PR [#6484](https://github.com/agentscope-ai/QwenPaw/pull/6484).
    - **Renamable Custom Providers**: Issue [#6414](https://github.com/agentscope-ai/QwenPaw/issues/6414) was merged today in PR [#6426](https://github.com/agentscope-ai/QwenPaw/pull/6426).
    - **Visual Context Compression (PawFocus)**: A large feature branch ([#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456)) for compressing long agent histories is open, suggesting a major UX improvement for complex tasks.

- **Potential Future Features**:
    - **Async Task Notifications ([#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475))**: A strong demand for a `notice_after_complete` tool to allow agents to handle multiple tasks concurrently.
    - **Cron Safety Defaults ([#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458))**: A request for more granular control over tool execution safety checks in automated tasks.
    - **Unified Browser SDK ([#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276))**: A large, open PR suggests a major refactor of the browser control subsystem.
    - **QwenPaw Creator App ([#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284))**: A new plugin for script-to-video creation is under review.

### 7. User Feedback Summary

- **Pain Points**: The dominant theme is **dissatisfaction with the v2.0.0 upgrade**. Users feel critical workflows (SSH, local embeddings) were broken. Other major annoyances include platform-specific issues (Windows PATH corruption, Linux high CPU, WSL2 cron failures) and infrastructure blocking (MCP transport, Matrix E2EE).
- **Use Cases**: Users are heavily invested in MCP tool integration, developer workflows (coding projects, git, shell commands), local model usage (Ollama, llama.cpp), and multi-modal capabilities (video). The "deep user" profile is an advanced developer operating in a multi-platform, cloud-to-local environment.
- **Satisfaction**: Satisfaction is low among users who immediately upgraded to v2.0.0. However, the rapid iteration to v2.0.1 and the maintainers' engagement with issues and PRs (especially welcoming first-time contributors) shows a strong commitment to recovery. The appearance of minor, cosmetic PRs (like [#6488](https://github.com/agentscope-ai/QwenPaw/pull/6488)) suggests the "firefighting" phase is beginning to slow.

### 8. Backlog Watch

While most critical issues are being actively discussed or have pending fix PRs, several long-standing system-level issues require attention:

- **Windows PATH Bug ([#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239))**: This issue, filed on July 18, is a silent killer for developer tools on Windows. It has no assigned fix PR and is generating frustration among users who rely on npm/Python globals.
- **Security & Sandbox Improvements**: Two significant, long-lived PRs, **[#6383](https://github.com/agentscope-ai/QwenPaw/pull/6383)** (Windows Sandbox) and **[#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276)** (Unified Browser), have been open for a week without being merged. These are foundational features, and their slow progress could indicate internal review bottlenecks or scope creep.
- **Website & GA Fixes ([#6330](https://github.com/agentscope-ai/QwenPaw/pull/6330))**: A large, open PR from July 22 aims to fix broken analytics and improve navigation. Its stagnation is a concern for project marketing and user onboarding metrics.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-27

## Today's Overview
ZeroClaw shows sustained high development velocity with 50 open issues and 48 open PRs updated in the last 24 hours, though no new releases were cut today. The project remains deeply engaged in production hardening, with a strong focus on Windows/macOS CI parity, security auditing, and cross-platform compatibility. The two merged/closed PRs today (PR #9233 and PR #9410) address critical runtime security and configuration issues, indicating active progress on the project's stability and safety roadmap. However, the sheer volume of open, high-priority bugs (particularly around tool execution, memory management, and sandboxing) suggests the codebase is under strain from rapid feature development outpacing some infrastructure hardening.

## Releases
**No new releases today.** The last public release appears to be v0.8.3, based on issue #9101 which references its attestation mechanisms. The pending release PR #9376 ("cut v0.8.4") remains open, suggesting v0.8.4 is imminent and includes crates.io publishing, changelog updates, and crate removals.

## Project Progress
Two PRs were closed/merged today:

- **[PR #9233](https://github.com/zeroclaw-labs/zeroclaw/pull/9233)** — **Merged**: `fix(runtime/security): Prevent landlock locks zeroclaw itself`. This critical fix ensures Landlock sandbox enforcement applies only to child processes (shell commands), not the daemon process itself, preventing ZeroClaw from locking itself out of system resources. Resolves a blocker for multiple sandbox-related issues.

- **[PR #9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410)** — **Merged**: `fix(security): default command audit logging to disabled`. A proactive security change that disables command audit logging by default for v0.8.4, removing the "YOLO" documentation and keeping existing configs intact. Fixes issue #9391.

Several other PRs (e.g., [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) Anthropic OAuth support, [#9418](https://github.com/zeroclaw-labs/zeroclaw/pull/9418) stdio MCP multiplexing) remain open but received updates today, indicating active review cycles.

## Community Hot Topics
The most active discussions center on **cross-platform compatibility** and **production reliability**:

- **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** (14 comments) — **74 test failures on Windows**: Unix-only test commands, path semantics, and console encoding. This is the highest-traffic issue and represents a systemic CI gap; the test suite only runs on Linux. The community is pressing for a platform matrix in CI (see related [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) feature request, 2 comments). **Underlying need**: Windows is a first-class deployment target for ZeroClaw, but the project lacks CI coverage for it, making Windows users de facto second-class.

- **[Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)** (7 comments) — **Consolidate release attestation mechanisms**: v0.8.3 shipped with three parallel signing mechanisms (cosign, GitHub artifact attestations, SLSA), creating redundancy and CI slowdown. The community is pushing for a single "signing story." **Underlying need**: Release engineering maturity; the current state is unsustainable for a project aiming at production workloads.

- **[Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** (6 comments) — **Telegram media groups not batched**: Sending multiple images triggers separate LLM requests instead of one multimodal turn. Users want natural group chat behavior. **Underlying need**: Channel parity — Telegram is a major integration, and this UX gap feels fundamental.

- **[Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)** (6 comments) — **Nextcloud Talk wrong bot API**: Reply construction uses wrong endpoint/authentication. An active PR [#9181](https://github.com/zeroclaw-labs/zeroclaw/pull/9181) is in review to fix this. **Underlying need**: Enterprise/collaboration users need self-hosted chat integrations to work reliably.

## Bugs & Stability
**Critical/High severity (S1/S2) bugs updated today:**

| Issue | Severity | Summary | Fix PR Exists? |
|-------|----------|---------|----------------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | S2 | 74 Windows test failures | No |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | **S1** (panic → SIGSEGV) | skill-review fork out-of-range slice | No |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | **S1** | Agents stop when exiting web dashboard | No |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | S2 | Landlock blocks shell on Fedora | Yes ([PR #9114](https://github.com/zeroclaw-labs/zeroclaw/pull/9114)) |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | **S1** | `browser_open` hangs turn indefinitely | No |
| [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | **S1** | pgvector panic on agent startup | No |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | **S1** | Docker gateway loopback-bound | No |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | **S1** | macOS app blank/no window | No |
| [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | S2 | Zombie MCP subprocesses | No |
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | **S1** (API key leak) | Gemini API key in error message leaks to chat | No |

**New today:** [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) — **Critical security bug**: A Gemini API key sent in the request URL query parameter survives `sanitize_api_error` and is posted into the originating chat. This is a data exposure vulnerability requiring immediate attention.

**Regression watch:** The combined S1 bugs around tool execution ([#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654), [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560), [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)) suggest the agent runtime's tool lifecycle management is fragile under load or edge cases.

## Feature Requests & Roadmap Signals
- **[#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)** — Run CI tests on Windows+macOS. Likely for v0.9.0 given linked blocking issue [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (74 Windows failures). This is the highest-impact requested feature for cross-platform users.
- **[#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409)** — Raw stdout output for cron shell jobs. Small change, likely for next minor release.
- **[#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099)** — Route `zeroclaw status` through CLI i18n. Low priority (p3) but signals growing interest in internationalization.
- **[#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)** (PR, still open) — Herdr agent observability integration. Large PR (XL size) but has no recent author action — may stall or need maintainer push.
- **[#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)** (PR) — Anthropic OAuth profile support. Likely for v0.8.4 or v0.9.0, given the release PR [#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) is actively being prepared.

**Prediction for next release (v0.8.4):** Likely includes Landlock fixes, audit logging defaults, Anthropic OAuth, MCP multiplexing, and Nextcloud Talk bot API fix. The Windows CI gap is a larger effort and likely deferred to v0.9.0.

## User Feedback Summary
- **Pain point (highest):** Windows users are effectively unsupported — 74 test failures, no CI coverage, install script selects wrong binary on Android/Termux ([#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)). This is the most consistently voiced frustration.
- **Pain point (production):** Users report agent processes crash from SIGSEGV ([#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)), memory leaks exceed 2.5GB in under an hour ([#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)), and zombie MCP processes accumulate ([#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)). Reliability for long-running agents is a major concern.
- **Pain point (security):** API key leaks into chat ([#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)) and configuration secrets giving no feedback after paste ([#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808)) show credential handling is shaky.
- **Satisfaction areas:** The community is actively contributing (50 open PRs), suggesting engagement is high. The quick response to the Landlock daemon-locking bug (PR #9233 merged same day as report?) indicates maintainer responsiveness on critical issues is good.
- **Usage contexts:** Telegram, WhatsApp Web, Nextcloud Talk, and web dashboard users are the most vocal. The project appears to attract both individual developers (via CLI/desktop) and enterprise-collaboration users (Nextcloud, OAuth).

## Backlog Watch
- **[Issue #7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)** (macOS app blank/no window, S1) — Created 2026-06-12, last updated 2026-07-26. **Status: blocked** (needs repro). Over 6 weeks without resolution; no fix PR. This is a significant user-facing issue for macOS users of the desktop app.
- **[Issue #6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)** (WhatsApp Web LID-based contact bypass, S2) — Created 2026-05-03, last updated 2026-07-26. In progress but nearly 3 months old. Silent message drops are a trust-destroying bug for WhatsApp users.
- **[Issue #7828](https://github.com/zeroclaw-labs/zeroclaw/issues/7828)** (UTF-8 char-boundary safety tracker) — Created 2026-06-17, last updated 2026-07-26. Low activity despite being a tracker for a class of bugs that caused panics.
- **[PR #8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)** (Herdr observability integration, XL size) — Last author action needed: no activity from author since creation (2026-06-26). Large PRs often stall; maintainers may need to decide on close or take over.
- **[Issue #7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)** (Android/Termux install broken) — Created 2026-06-18. No fix PR. Mobile users are ignored despite being a natural use case for agent assistants.

**Summary:** The project is in a high-activity, high-churn phase with strong community engagement but is carrying significant technical debt in cross-platform support, runtime stability, and security hardening. The next release (v0.8.4) should improve security posture significantly, but the Windows and macOS gaps will likely remain a source of friction for months.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*