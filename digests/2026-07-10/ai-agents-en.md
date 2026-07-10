# OpenClaw Ecosystem Digest 2026-07-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-10 03:31 UTC

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

Here is the OpenClaw project digest for **2026-07-10**.

---

## 1. Today's Overview
Activity remains at a sustained, high velocity. In the last 24 hours, 500 issues and 500 PRs were updated. Of these, 307 issues remain open, while 210 PRs were merged or closed, indicating strong progress through the development pipeline. The project has no new releases today, but the sheer volume of contributions (including 7 PRs filed within the last hour) suggests the development team is focused on the upcoming milestone. Key concerns remain centered around session-state integrity, message reliability, and security hardening.

## 2. Releases
**None.** No new versions were published in the last 24 hours.

## 3. Project Progress
The team merged or closed 210 PRs today. Notable changes advancing the codebase include:
- **Support for new models:** PR [#103316](https://github.com/openclaw/openclaw/pull/103316) adds support for Grok Imagine Video 1.5, closing a feature gap for xAI users.
- **Stability Fixes:** PR [#103312](https://github.com/openclaw/openclaw/pull/103312) fixes a memory/listener leak by ensuring child process listeners are released after a promise settles in agent tool execution.
- **CLI Diagnostics:** PR [#103252](https://github.com/openclaw/openclaw/pull/103252) ensures the `openclaw status` command remains read-only, preventing crashes on read-only state mounts.
- **Platform clients:** The Android app is gaining agent avatar support (#103248) and cron job management controls (#101882, closed). A large refactor enforces Swift formatting rules for iOS/macOS builds (#103313).

## 4. Community Hot Topics
The following issues are generating the most discussion and reactions:
- **Subagent Silent Failure (Issue #44925 - Diamond Lobster):** This remains the most discussed bug, with 21 comments. Users report that subagents can time out or fail silently during orchestration, losing results. The high engagement indicates this is a critical reliability blocker for complex workflows.
- **Slack Block Kit (Feature Request #12602):** With 14 comments, the community is actively requesting richer Slack message formatting (CRM summaries, action confirmations). This is a recurring request for enterprise users.
- **Per-Agent Memory Vaults (Issue #63829 - Diamond Lobster):** Garnering 10 reactions, users strongly desire isolated knowledge bases for different agents in a multi-agent setup, moving beyond the current single global vault.

## 5. Bugs & Stability
The project is actively battling several high-severity bugs. Priority 1 (P1) issues are heavily concentrated on data loss and session reliability:
- **Critical (P1):** A regression (#102175) forces messages to `message_tool_only` even when `visibleReplies` is set to automatic, destabilizing prompt caching. No fix PR linked.
- **Critical (P1):** WhatsApp sessions stall on long model calls (#84569), leading to incomplete turns where the reply is never delivered. No fix PR linked.
- **Critical (P1):** A gateway memory leak (#54155) can balloon from 389MB to 14.7GB over four days due to session accumulation.
- **High (P1):** OAuth refresh for Codex (#89278) works for standalone probes but fails with a 10-second timeout during cron/heartbeat operations, breaking scheduled tasks.
- **Resolved (P1):** A bug where agent heartbeats routed to the wrong agent's session (#99912) was closed, indicating a recent fix was deployed.

## 6. Feature Requests & Roadmap Signals
- **Per-Agent Memory Isolation:** Feature request #63829 (already a Hot Topic) is a strong candidate for the next release. The high reaction count and the maintainer’s `needs-product-decision` tag suggests it is under active evaluation.
- **UI/UX Improvements:** Requests for Slack Block Kit (#12602) and a persistent task-status surface for long-running turns (#52640) point toward a focus on improving user feedback and interactivity in the next iteration.
- **Configuration Flexibility:** The request to support YAML config files (#45758) and a configurable session startup prompt (#45501) suggest a desire for more DevOps-friendly and customizable deployment options.

## 7. User Feedback Summary
- **Satisfaction:** Users actively building with OpenClaw appreciate its extensibility, as seen in feature requests for richer integrations (Slack Block Kit, Signal setup wizards).
- **Dissatisfaction & Pain Points:** The most significant pain points are reliability and transparency. Users express frustration with "silent" failures: subagent completions lost without notification (#44925), cron jobs hallucinating output instead of failing cleanly (#49876), and tool outputs being rendered as unreadable image attachments (#99241). The opaque error `Failed to optimize image` when `sharp` is missing (#73148) highlights a need for better dependency management.
- **Security Concerns:** Multiple reports (e.g., #45740, #45049) highlight a lack of input sanitization (LLM injection via issue bodies) and enforcement of real tool calls, indicating a community desire for a stricter security posture.

## 8. Backlog Watch
Several critical issues remain without a linked fix PR and require maintainer attention to prevent escalation:
- **Issue #44925 (Subagent silent loss) - Requiring a maintainer review.** This is the most commented-on bug and has been open for four months with no fix in sight.
- **Issue #43996 (Sandbox container exits with `operation not permitted`) - Needs product decision and security review.** This blocks containerized deployments with security-hardening profiles.
- **Issue #50739 (System event priority/bypass-queue mode) - Needs security and product review.** This feature request, if implemented, would fix the root cause of many session-stall scenarios.
- **Issue #92516 (Containerized deploys can't use external channel plugins) - Needs security review.** This blocks self-hosted users from using official channel plugins like the MSTeams integration.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**2026-07-10**

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a **rapid maturation phase**, with four major projects (OpenClaw, Hermes Agent, NanoBot, CoPaw) showing sustained high-velocity development alongside several niche/specialized variants. Activity is heavily concentrated on **reliability infrastructure** (session integrity, message delivery guarantees, security hardening) and **channel support expansion** (Slack, Telegram, WhatsApp, enterprise platforms), suggesting the ecosystem is shifting from proof-of-concept to production-ready deployments. Two projects (NullClaw, TinyClaw, ZeptoClaw) show zero activity, indicating either feature-complete status or stalled development. The ecosystem is fragmenting around architectural decisions — centralized session management (OpenClaw) versus lightweight gateway approaches (NanoBot, PicoClaw) — but converging on common pain points around silent failures, sandbox limitations, and multi-agent orchestration reliability.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Releases Today | Health Score (1-5) | Velocity Signal |
|---------|---------------|-------------|----------------|-------------------|-----------------|
| **OpenClaw** | 500 | 500 | None | ★★★★☆ (4.2) | High — sustained 500+ item velocity, 210 PRs merged |
| **CoPaw (QwenPaw)** | 33 | 50 | v2.0.0-beta.5 | ★★★★★ (4.8) | Very High — active releases, 31 PRs merged |
| **Hermes Agent** | 50 | 50 | None | ★★★★☆ (4.0) | High — 23 PRs merged, strong team throughput |
| **ZeroClaw** | 34 | 50 | None | ★★★★☆ (3.8) | High — 11 PRs merged, deep milestone tracking |
| **IronClaw** | 32 | 50 | None | ★★★★☆ (3.7) | High — 27 PRs merged, post-bug_bash |
| **NanoBot** | 25 | 20 | None | ★★★☆☆ (3.5) | Moderate — 3 PRs merged, strong issue triage |
| **NanoClaw** | 9 | 18 | None | ★★★★☆ (4.4) | High — intensive feature train (5-part) |
| **LobsterAI** | 0 | 12 | None | ★★★☆☆ (3.2) | Moderate — 10 PRs merged, polish phase |
| **PicoClaw** | 3 | 16 | None | ★★★☆☆ (3.0) | Moderate — 4 PRs merged, dependency-focused |
| **Moltis** | 0 | 1 | None | ★★☆☆☆ (2.0) | Low — single PR for GPT-5.6 support |
| **NullClaw** | 0 | 0 | None | ★☆☆☆☆ (1.0) | Inactive |
| **TinyClaw** | 0 | 0 | None | ★☆☆☆☆ (1.0) | Inactive |
| **ZeptoClaw** | 0 | 0 | None | ★☆☆☆☆ (1.0) | Inactive |

**Health Score Criteria:** Issue/PR throughput, release cadence, maintainer responsiveness, community engagement, backlog management.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale:** 500 issues/PRs updated daily dwarfs competitors — Hermes (50), ZeroClaw (34), CoPaw (33). OpenClaw commands 10x the community engagement of the next most active project.
- **Ecosystem breadth:** Supports 15+ chat platforms natively (Slack, WhatsApp, Telegram, Discord, Matrix, WeChat, Feishu, QQ, etc.) versus Hermes (6-8) and NanoBot (8-10).
- **Enterprise readiness:** Subagent orchestration (#44925), per-agent memory vaults (#63829), and Slack Block Kit (#12602) indicate focus on complex enterprise workflows.

**Technical Approach Differences:**
- **Session model:** OpenClaw uses a persistent session-state model with heartbeat monitoring, while NanoBot and PicoClaw use lightweight connection-per-request patterns. OpenClaw's approach provides richer context but creates memory leak risks (see #54155 — 14.7GB leak).
- **Plugin architecture:** OpenClaw's external channel plugin system (containerized) faces security review blockers (#92516), while Hermes and ZeroClaw use embedded channel adapters with tighter integration.
- **AI model support:** OpenClaw added Grok Imagine Video 1.5 today; CoPaw is shipping GPT-5.6 support; NanoBot focuses on lightweight model switching — different coverage strategies.

**Community Size Comparison:**
- **Contributors:** OpenClaw has 7 PRs filed in the last hour, suggesting a very large contributor base. Hermes and ZeroClaw also have active contributors but at 1/10th the volume.
- **Discussion depth:** OpenClaw's most active issue (#44925) has 21 comments vs. Hermes (#52914, 17 comments) and ZeroClaw (#5862, 13 comments). OpenClaw generates deeper discussion per issue.

**Weaknesses vs. Peers:**
- **Memory leaks and session bloat** (14.7GB in 4 days) is a class of problem that NanoBot's stateless model avoids entirely.
- **Bug fix velocity** on P1 items is slower than Hermes — OpenClaw has multiple P1 issues with no linked fix (session stall #84569, memory leak #54155), while Hermes fixed its P1 cron bug within 24 hours.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide priorities:

| Focus Area | Affected Projects | Specific Needs | Ecosystem Severity |
|-----------|------------------|----------------|-------------------|
| **Silent Failure Elimination** | OpenClaw (#44925), NanoBot (#4864), NanoClaw (#2989, #2985) | Subagent timeouts silent, goal completion loops, Telegram blackhole, missing delivery confirmation | 🔴 **Critical** — core reliability |
| **Sandbox Configuration Flexibility** | CoPaw (#5879), NanoBot (#940), NanoClaw (#2827) | Cannot disable sandbox on trusted devices; blocks package installation, skill creation, media processing | 🔴 **Critical** — power user blocker |
| **Multi-Agent Memory Isolation** | OpenClaw (#63829), ZeroClaw (#8290), NanoBot (#936) | Per-agent/tenant memory vaults, session separation, multi-tenant gateways | 🟠 **High** — enterprise prerequisite |
| **Channel Delivery Reliability** | Hermes (#52914 QQ loop), IronClaw (#5877 Slack wrong user), NanoClaw (#2989 Telegram blackhole) | Delivery guarantees across all chat platforms; retry, idempotency, correct routing | 🔴 **Critical** — cross-platform trust |
| **Tool Call Structured Preservation** | CoPaw (#5856), ZeroClaw (#6699), OpenClaw (PR #103312) | Context compaction must not flatten tool_call/tool_result objects; LLM compatibility | 🟠 **High** — agent workflow reliability |
| **Security/Authorization Hardening** | ZeroClaw (#8044), Hermes (#61806), NanoClaw (#2998) | Per-sender authz, session hook bypass, MCP server runtime smuggling | 🟠 **High** — production security |
| **Telegram/WhatsApp Stability** | NanoBot (#4823), NanoClaw (#2989, #2990, #2991), OpenClaw (#84569) | Group filtering, token migration, allowed_updates persistence, reconnection | 🟠 **High** — top channels fragile |
| **Documentation Accuracy** | ZeroClaw (#8810), NanoBot (#4860), Hermes (Windows path issues) | CLI commands mismatch docs, Telegram docs wrong, Windows-specific config gaps | 🟡 **Medium** — user onboarding friction |
| **Multi-Tenant/Group Architecture** | OpenClaw (#63829), NanoBot (#936), ZeroClaw (#8290), Hermes (#18715) | Per-group memory, per-tenant gateways, remote agent+local tools | 🟡 **Medium** — scaling need |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoBot | CoPaw | ZeroClaw | IronClaw |
|-----------|----------|-------------|---------|-------|---------|----------|
| **Target User** | Enterprise teams, power users | Developers, multi-platform | Hobbyists, SMBs | Developers, desktop users | Advanced users, self-hosters | Enterprise automation |
| **Primary Platform** | Multiple channels (15+) | Telegram, Discord, QQ | WhatsApp, Telegram, Matrix | Desktop + channels | CLI + channels (16+) | Slack + automation |
| **Architecture** | Monolithic session server | Distributed gateway | Lightweight gateway | Desktop monolith | Plugin-based runtime | Reborn runner + Postgres |
| **Deployment** | Docker, containerized | Docker, pip | Docker, pip | Desktop installer | Manual, Docker | Kubernetes, Postgres |
| **Memory Model** | Global vault + session | Profile-scoped | Session-scoped | Compaction-based | Context + persistence | CAS + Postgres |
| **Key Differentiator** | Largest channel ecosystem | Remote agent + local tools | Task-specific model config | Desktop-native UX | Plugin capability catalog | Enterprise Slack automation |
| **Release Cadence** | Weekly (hotfix) | Daily (bug fixes) | Weekly | Beta weekly (v2.0) | Milestone-based | Sprint-based |
| **Language Stack** | Python + TypeScript | Rust + TypeScript | Python | TypeScript | Rust + Python | Rust |

**Key Architectural Differences:**
- **OpenClaw** prioritizes breadth (15+ channels) and deep agent orchestration (subagents, memory vaults) at the cost of memory efficiency.
- **Hermes Agent** is pioneering "split architecture" — remote agent brain with local tool execution (#18715), a pattern no other project fully supports.
- **NanoBot** and **PicoClaw** compete on lightweight deployment — Docker-friendly, minimal config, fast iteration. NanoBot's session-scoped model config (PR #4866) is unique.
- **CoPaw (QwenPaw)** is the only project pushing desktop-native experience with Tauri, Windows title bars, and rich UX — targeting developer productivity inside the IDE.
- **ZeroClaw** is building the most sophisticated plugin/extension system (capability catalog, TCP channels, MCP integration) — aiming to be the "WordPress of AI agents."
- **IronClaw** is the most enterprise-slanted — Postgres-backed CAS storage, Reborn runner, formal bug_bash quality campaigns, and Slack automation focus.

---

## 6. Community Momentum & Maturity

**Activity Tiers:**

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **🔥 Rapidly Iterating** | CoPaw, NanoClaw, Hermes Agent | Multiple releases/week, large feature trains, aggressive bug fixing |
| **🏗️ High-Volume Development** | OpenClaw, ZeroClaw, IronClaw | Massive throughput but slower bug-fix velocity; managing large backlogs |
| **⚙️ Stabilizing/Polishing** | NanoBot, LobsterAI | Fewer features, focused on UX polish and reliability hardening |
| **🔄 Maintenance Mode** | PicoClaw, Moltis | Single PRs, bottlenecked reviews, dependency bumps |
| **💤 Inactive/Stalled** | NullClaw, TinyClaw, ZeptoClaw | Zero activity — likely feature-complete or abandoned |

**Maturity Indicators:**
- **CoPaw** (v2.0.0-beta.5) is shipping the fastest release cadence — 2 beta releases in 24 hours — and has the best bug fix turnaround (same-day closure for many issues).
- **OpenClaw** has the largest contributor pool but slower P1 fix velocity, suggesting review bandwidth is strained by sheer volume.
- **Hermes Agent** and **IronClaw** show the most disciplined sprint structure (bug_bash, priority tagging, milestone trackers).
- **NanoClaw** is in an intense 5-part feature train (scheduled tasks) with core-team PRs, suggesting a v2 milestone is imminent.
- **ZeroClaw** has the most mature milestone tracking (v0.8.3, v0.9.0, multi-user) but many long-blocked issues (some 60-80 days stale).

**Risk to Ecosystem:**
- The `needs-author-action` pattern across ZeroClaw (5 issues) and OpenClaw (many) suggests reporters are not providing reproduction steps, or issue triage communication is insufficient.
- Three inactive projects (NullClaw, TinyClaw, ZeptoClaw) fragment the "Claw" naming without active development, potentially confusing new users.
- **No project has solved silent failures** — this is the ecosystem's #1 reliability gap across OpenClaw, NanoBot, NanoClaw, and IronClaw.

---

## 7. Trend Signals

**1. The "Split Architecture" is Emerging**
Hermes Agent's #18715 (remote agent + local tools, 20 👍) and NanoClaw's PR #3118 (remote WebSocket mode) indicate a clear trend: users want agent brains in the cloud but tool execution local (for latency, security, access to filesystem/hardware). This is the most significant architectural signal in the ecosystem — expect more projects to adopt this pattern.

**2. Sandbox is the #1 User Experience Blocker**
CoPaw (#5879), NanoBot (#940), and NanoClaw (#2827) all report users blocked by sandbox restrictions on trusted devices. The ecosystem needs a **configurable sandbox model** (granular: none/basic/strict) — users accept security restrictions on untrusted devices but demand flexibility on personal machines.

**3. Telegram and WhatsApp are the Critical Failure Points**
Multiple projects (NanoBot #4823, NanoClaw #2989/#2990/#2991, OpenClaw #84569, Hermes #52914) report regressions in Telegram and WhatsApp channels. These are the most widely used consumer platforms, and instability there erodes user trust in the entire ecosystem. **Investment in channel testing infrastructure** is the highest-ROI reliability investment.

**4. Agent Self-Awareness is an Expected Feature**
ZeroClaw (#5862) users expect agents to proactively know and offer their capabilities. This mirrors OpenClaw's subagent orchestration (#44925) — the ecosystem is converging on **agents that can introspect their own tool set and orchestrate themselves**. Second-generation agent frameworks will need built-in capability discovery.

**5. MCP Protocol Maturation is Accelerating**
NanoBot (#4843 MCP reconnect), ZeroClaw (#5903 MCP stdio leaks), Hermes (#5344 MCP OAuth), and CoPaw (#5900 MCP streamable_http) all show active MCP integration work. The Model Context Protocol is becoming the **de facto plugin architecture** — expect all major projects to converge on MCP within 6 months.

**6. Tiny/Specialized Models Need Different Handling**
ZeroClaw (#5287 Local-First Mode) and OpenClaw (Grok Imagine Video 1.5 support) point to a growing need: the ecosystem must support **models from 1B to 500B parameters** with different prompting regimes, context windows, and inference patterns. No project has a unified model abstraction layer — this is a gap.

**7. Documentation Quality is a Competitive Weakness**
ZeroClaw (#8810 inaccurate Telegram docs), NanoBot (#4860 missing CLI commands), and Hermes (Windows-specific path issues) all report documentation gaps. As the ecosystem matures, **accurate, versioned documentation** will become a key differentiator for onboarding new users and retaining contributors.

**8. "Silent Failure" is the Ecosystem's Biggest Trust Deficit**
Across 6 active projects, the most damaging bugs share a pattern: the system looks normal but data is lost (messages dropped, tools fail without error, subagent results lost, reminders not delivered). This is more damaging than crashes — users can't trust the system. **Transparent failure reporting** (error messages, delivery confirmations, log correlation) is the single highest-impact reliability investment any project can make.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-10

## 1. Today's Overview

NanoBot shows high activity with 25 open issues and 20 open PRs receiving updates in the past 24 hours, indicating a healthy development cadence. The project closed 10 issues and 3 PRs in the same period, suggesting maintainers are effectively processing the backlog. No new releases were tagged today, with energy concentrated on bug fixes, MCP infrastructure improvements, and feature development for session-scoped model configuration and automation. The community engagement remains strong, with several long-dormant stale issues receiving renewed attention.

## 2. Releases

No new releases were published today. The last known release remains at v0.2.2 (referenced in bug reports).

## 3. Project Progress

Three PRs were merged or closed today:

- **#4857** (closed) — Enhances Dockerfile with `NANOBOT_EXTRAS` build arg to allow users to override optional Python dependencies at build time, supporting customized container builds without source modifications.
- **#4859** (closed) — Fixes Matrix channel image handling: preserves `mxc://` image source URLs in Mistune's HTML renderer while maintaining existing sanitization policies, resolving a regression where Matrix markdown broke in v0.2.2+.
- **#4629** (closed) — Hardens `exec` tool security by blocking relative symlink workspace escapes, preventing restricted commands from following symlinks outside the workspace while preserving existing safety guard behavior.

## 4. Community Hot Topics

**Most Active Issues:**

- **#4823** (4 comments) — WhatsApp group responses bleeding into all groups post-v0.2.2; the `group_allow` functionality is broken. Users urgently need group-scoped filtering restored.
- **#912** (5 comments, 3 👍) — Long-running request for task-specific model configuration (conversation vs. tool use vs. browser use). This is the most-upvoted open feature request and a clear roadmap priority.
- **#4860** (2 comments) — Installation confusion: `nanobot onboard` and `nanobot webui` commands referenced on the website don't exist in the CLI help output. Indicates documentation-coverage gap for new users.
- **#4864** (0 comments, newest) — Endless `complete_goal` loop caused by tool parameter serialization change in the gateway — a fresh regression affecting goal-based workflows.

**Most Active PRs:**

- **#4866** (new, 0 comments) — High-priority feature binding model presets to sessions, persisting model selection in session metadata. This is the execution arm of issue #912.
- **#4844** (still open) — Replaces `long_task`/`complete_goal` with clearer `create_goal`/`update_goal` lifecycle, requiring explicit trigger quote for user opt-in — a major UX improvement.
- **#4843** (still open) — Fixes MCP reconnect crash by deferring stale stack cleanup, directly addressing a server restart/expiry crash class.

## 5. Bugs & Stability

**High Severity (regressions affecting core functionality):**

- **#4864** (new, 2026-07-09) — `complete_goal` endless loop: gateway parses the `recap` parameter as a bare string instead of a JSON object. No fix PR yet. **Severity: Critical** — blocks goal completion.
- **#4823** (open, 2026-07-07) — WhatsApp group responses broadcast to all groups, not just those with `group_allow`. Regression in v0.2.2. **Severity: High** — multi-group users cannot operate.
- **#4860** (new, 2026-07-09) — Missing `onboard` and `webui` CLI commands despite website documentation. **Severity: Medium** — new-user onboarding friction.
- **#4840** (open PR) — Shell subprocess zombie processes not reaped on all exit paths. Fix PR exists and is under review.

**Medium Severity:**

- **#4863** (open PR) — `npm ci` fails in Docker build from fresh clone because `package-lock.json` is out of sync with `package.json`. Fix PR submitted (SIDD-KIDD).
- **#4832** (open PR) — CLI terminal regression: Shift+Enter dumps raw escape sequences instead of inserting newlines. Follow-up fix for multiline input feature.

**Low Severity / Stale:**

- **#896** (stale) — Telegram/Discord media files never cleaned up, causing unbounded disk growth.
- **#940** (stale) — AI agent cannot access host filesystem behind sandbox, blocking skills creation and media processing.

**Bug Fix PRs Currently Open:**
- #4843 — MCP reconnect crash (priority: p1, author: flyzstu)
- #4840 — Zombie process reaping (priority: p1, author: macroadster)
- #4816 — Narrow `BaseException` catch in tool execution (priority: p1, conflict)
- #4832 — CLI Shift+Enter regression (priority: p2, author: m11y)
- #4862 — Isolate exec session managers per loop (author: yu-xin-c)
- #4845 — Add Red Hat certificate path support for Node sandbox (priority: p1, author: luojiaaoo)

## 6. Feature Requests & Roadmap Signals

**Top User-Requested Features:**

- **#912** (3 👍) — Task-Specific Model Configuration: separate models for conversation, tool use, and browser use. **Likely in next version:** PR #4866 directly addresses this by binding model presets to sessions.
- **#936** — Multi-Tenant Gateway: single gateway instance manages multiple agents to reduce resource usage. Low activity but a clear need for production deployments.
- **#240** (3 👍) — SimpleX Chat channel support: decentralized, encrypted alternative to Telegram. Niche but passionate.
- **#990** — Pre-handler hook for zero-token message routing (e.g., `#日记` bypasses LLM). Token cost savings are a recurring theme.
- **#1006** — Control plane MVP for subagents: `list`/`kill` commands for operators to manage runaway tasks.
- **#931** — Native Sandbox Interface for untrusted plugin execution using `deno` or `firecracker`.

**Signals from PRs:**
- **#4866** (model presets per session) and **#4622** (cron job model presets) together point toward a major configuration flexibility push — users want per-task model selection without restarting agents.
- **#4855** (guided channel setup flows) suggests a UX overhaul for onboarding, potentially integrating setup wizards for WhatsApp, Feishu, and Matrix.
- **#4861** (Eden AI provider) — New provider contributions are coming in steadily, lowering the bar for multitenant AI access through a single EU-hosted endpoint.
- **#4853** (nano_timer core tool) — Adds timezone-aware time/calendar utility, filling a gap for skills that need local time context.

**Prediction:** The next release (v0.3.x) will likely include session-scoped model presets, the goal lifecycle redesign, and the MCP reconnect fix — all tagged `priority: p1`.

## 7. User Feedback Summary

**Pain Points:**

- **"zhipu provider does not work"** (closed #1267) — Insufficient balance detection is confusing; user had subscribed but could not use. Resolved, but indicates poor error messaging.
- **"Too many hallucinations in exec tool"** (closed #937) — User stopped evaluation because essential code execution tool was unreliable across multiple LLMs. This is a **core trust issue** — if the exec tool hallucinates, the entire agent framework loses credibility.
- **"AI Agent Cannot Access Host Filesystem"** (#940) — The sandbox isolation blocks real-world skill creation and media processing. Users want agent autonomy but hit security boundaries.
- **"no such command 'onboard' or 'webui'"** (#4860) — Documentation mismatch. New users hit friction on first interaction.
- **"cron job automatically added back"** (closed #1100) — AI ethics alerts interfering with user-created cron jobs; user felt loss of autonomy.

**Use Cases:**
- WhatsApp group management (multi-group filtering)
- Scheduled reminders ("drink water" cron jobs)
- Multi-tenant agent deployments (enterprise)
- Skill writing and media processing (power users)
- Headless automation with webhook/web server integration

**Sentiment:**
Users appreciate the framework's ambition but express frustration with regressions (WhatsApp groups, MCP connections) and sandbox limitations. The high rate of stale issues (12 of 22 updated in last 24h are marked `[stale]`) suggests either a backlog of unresolved problems or a triaging process that keeps issues alive long past initial reporting. The exec tool hallucination complaint (#937) is particularly concerning — a user stopped evaluation entirely.

## 8. Backlog Watch

**Issues Needing Maintainer Attention:**

- **#896** (stale, 2026-02-20) — Unbounded media file growth in Telegram/Discord. A known resource leak with no fix PR. **Impact:** disk exhaustion in long-running instances.
- **#940** (stale, 2026-02-21) — Sandbox isolation prevents skill creation and media processing. **Impact:** blocks a core value proposition (agent-written skills).
- **#931** (stale, 2026-02-21) — Proposal for native sandbox interface for untrusted plugins. No one has picked this up — it's a major security infrastructure item that will become critical as the plugin ecosystem grows.
- **#990** (stale, 2026-02-22) — Pre-handler hook for zero-token routing. **Impact:** token cost savings are a recurring user demand; this could be a differentiator.
- **#1006** (stale, 2026-02-22) — Subagent control plane (list/kill). With subagents already supported, missing operational controls are a risk.
- **#936** (stale, 2026-02-21) — Multi-tenant gateway. Repeatedly requested for production deployments. No maintainer response visible.

**PRs Needing Attention:**

- **#4696** (since 2026-07-04, conflict) — Smooth WebUI streaming Markdown reveal. Has conflicts, not yet resolved by author.
- **#4769** (since 2026-07-06, conflict) — Centralize native runtime access in WebUI. Also has conflicts.
- **#4816** (since 2026-07-06, conflict) — Narrow `BaseException` catch. Conflicts waiting resolution.

**General Health Note:**
The `[stale]` tag on 12 issues suggests the project has a healthy grooming process, but the age of many stale items (up to 5 months) indicates that either these are low-priority or the team lacks bandwidth for non-critical features. The number of open PRs (20) versus merged/closed (3 in 24h) suggests the review pipeline may be a bottleneck.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-10

---

## 1. Today's Overview

Project activity is **very high** today, with 50 issues and 50 PRs updated in the last 24 hours — a strong sign of an active and responsive development cycle. The team closed 15 issues and merged/closed 23 PRs, indicating good throughput on bug fixes and feature work. No new releases were cut today, but the volume of merged PRs (including several P2 bug fixes) suggests a release may be imminent. The community is highly engaged, with users filing detailed bug reports and feature requests across desktop, gateway, and agent components.

---

## 2. Releases

**None** — no new releases were published today.

---

## 3. Project Progress

**23 PRs were merged or closed today**, including several significant fixes:

| PR | Component | Description |
|---|---|---|
| [#61835](https://github.com/NousResearch/hermes-agent/pull/61835) | Config | Fixed null `web:` / `known_plugin_toolsets:` config values crashing tools and web components |
| [#61818](https://github.com/NousResearch/hermes-agent/pull/61818) | Cron (P1) | Isolated profile cron stores to stop cross-profile `jobs.json` overwrite — **highest priority fix** |
| [#61731](https://github.com/NousResearch/hermes-agent/pull/61731) | Agent | Merged three-layer time awareness subsystem (dormancy perception, heartbeat rhythm, lifecycle anchoring) |
| [#60406](https://github.com/NousResearch/hermes-agent/pull/60406) | Agent/CLI/Gateway/Dashboard | Mac Studio safe-update refresh with gateway/session stability and security audit |
| [#61142](https://github.com/NousResearch/hermes-agent/pull/61142) | Web | Fixed crash on null `web/backend` config value |
| [#53196](https://github.com/NousResearch/hermes-agent/pull/53196) | CLI/Config | Guarded against `None` in `known_plugin_toolsets` config |
| [#53321](https://github.com/NousResearch/hermes-agent/pull/53321) | Windows | Repaired stale pre-#45610 cmd.exe gateway autostart launchers |

**Feature advancement:** The time awareness subsystem ([#61731](https://github.com/NousResearch/hermes-agent/pull/61731)) adds continuous temporal perception — a notable architectural enhancement.

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Comments | Focus |
|---|---|---|
| [#52914](https://github.com/NousResearch/hermes-agent/issues/52914) [CLOSED] | 17 | **QQBot infinite retry loop** — `QQAdapter.connect()` missing `is_reconnect` parameter |
| [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) [OPEN] | 8 | **Remote agent + local tool execution** — highly upvoted (👍 20), strong demand |
| [#9756](https://github.com/NousResearch/hermes-agent/issues/9756) [OPEN] | 6 | **WeChat multi-account support** — repeated community request |
| [#7675](https://github.com/NousResearch/hermes-agent/issues/7675) [OPEN] | 6 | **Feishu integration issues** — card interaction, approval buttons, streaming |
| [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) [OPEN] | 5 | **WhatsApp message template support** for re-engagement outside 24h window |

### Most Upvoted

| Issue | 👍 | Analysis |
|---|---|---|
| [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) | **20** | **Remote Hermes with local tool execution** — clear signal for split-architecture demand |
| [#52914](https://github.com/NousResearch/hermes-agent/issues/52914) | 6 | High-severity bot adapter regression |
| [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) | 4 | Production WhatsApp use case |

**Underlying need:** Users increasingly want **hybrid deployments** (remote intelligence, local tools) and **multi-platform gateway support** (WeChat, Feishu, WhatsApp). The remote + local pattern in #18715 is particularly significant — it suggests enterprise users want to centralize agent brains while keeping tool execution local for security/latency.

---

## 5. Bugs & Stability

### Critical / High Severity (P1-P2)

| Issue | Component | Severity | Status | Fix PR |
|---|---|---|---|---|
| [#61818](https://github.com/NousResearch/hermes-agent/issues/61818) | Cron | **P1** – cross-profile `jobs.json` overwrite | **CLOSED** | ✅ [#61818](https://github.com/NousResearch/hermes-agent/pull/61818) |
| [#52914](https://github.com/NousResearch/hermes-agent/issues/52914) | QQBot Gateway | **P2** – infinite retry loop, cannot connect | **CLOSED** | ✅ |
| [#60715](https://github.com/NousResearch/hermes-agent/issues/60715) | Nous Inference API | **P2** – all models timeout, API unreachable | **OPEN** | No fix PR |
| [#61806](https://github.com/NousResearch/hermes-agent/issues/61806) | Dashboard (shell hooks) | **P2** – security hooks bypassed in `hermes serve` | **OPEN** | No fix PR |
| [#5344](https://github.com/NousResearch/hermes-agent/issues/5344) | MCP OAuth | **P2** – port collision + redirect URI mismatch | **OPEN** | No fix PR |
| [#51685](https://github.com/NousResearch/hermes-agent/issues/51685) | Desktop | **P3** – pinned sessions disappear from sidebar | **OPEN** | No fix PR |
| [#61839](https://github.com/NousResearch/hermes-agent/issues/61839) | Context engine | **P3** – `context_chunking` not found on first init | **OPEN** | No fix PR |

### P2 Config-Related Crashes (Notable Pattern)

A cluster of P2 bugs was fixed today around **YAML null handling**:

| Issue | Crash condition | Status |
|---|---|---|
| [#61835](https://github.com/NousResearch/hermes-agent/pull/61835) | Null `web:` / `web.backend:` | ✅ Fixed & merged |
| [#53196](https://github.com/NousResearch/hermes-agent/pull/53196) | Null `known_plugin_toolsets:` | ✅ Fixed & merged |
| [#61833](https://github.com/NousResearch/hermes-agent/pull/61833) | Accented username short paths (Windows) | **OPEN** – fix PR exists |

**Windows-specific issues** are a recurring theme, with 3+ PRs today addressing platform-specific crashes (build, autostart, path handling).

---

## 6. Feature Requests & Roadmap Signals

### Strong Demand Signals

| Feature | Issue | 👍 | Likelihood for Next Version |
|---|---|---|---|
| Remote agent + local tool execution | [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) | **20** | **High** — frequent demand, aligns with split-architecture trend |
| WeChat multi-account support | [#9756](https://github.com/NousResearch/hermes-agent/issues/9756) | — | **Medium** — repeated request, gateway maturation |
| WhatsApp message templates | [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) | 4 | **Medium** — clear production use case |
| Gemini via Antigravity | [#52657](https://github.com/NousResearch/hermes-agent/issues/52657) | 3 | **Low-Medium** — niche provider request |
| Native SUGGESTION button rendering | [#61825](https://github.com/NousResearch/hermes-agent/issues/61825) | — | **Medium** — eliminates hook workaround with 4 reported bugs |
| IdP logout (RP-initiated logout) | [#35410](https://github.com/NousResearch/hermes-agent/issues/35410) | 1 | **Medium** — OIDC compliance, security best practice |

**Prediction:** The remote agent + local tool execution pattern (#18715) is the strongest roadmap signal. It aligns with the merged time awareness subsystem and session handoff PRs — Hermes is clearly evolving toward a **distributed agent architecture**.

### New Today

- **Native SUGGESTION button support** ([#61825](https://github.com/NousResearch/hermes-agent/issues/61825)) — inline keyboard for Telegram/other platforms
- **Session handoff** ([#61840](https://github.com/NousResearch/hermes-agent/pull/61840)) — auto-load continuity files between sessions (merged)
- **Time awareness subsystem** ([#61837](https://github.com/NousResearch/hermes-agent/pull/61837)) — three-layer temporal perception (new PR)

---

## 7. User Feedback Summary

### Satisfaction Signals

- **Fast bug turnaround:** Multiple users had their P2 bugs fixed within hours or days (QQBot loop, config crashes)
- **Feature additions welcome:** The time awareness and session handoff features directly address user pain points around continuity
- **Telegram SUGGESTION workaround pain:** User reports "4 bugs in one session" from custom hook workarounds ([#61825](https://github.com/NousResearch/hermes-agent/issues/61825))

### Key Pain Points

| Pain Point | Evidence | Impact |
|---|---|---|
| **Config crashes on null values** | Multiple P2 bugs today ([#61835](https://github.com/NousResearch/hermes-agent/pull/61835) et al.) | High — poor developer experience for fresh installs |
| **Agent rule violations** | [#60429](https://github.com/NousResearch/hermes-agent/issues/60429) — "agent keeps violating rules" | Medium-High — core reliability issue |
| **Windows build failures** | [#61832](https://github.com/NousResearch/hermes-agent/pull/61832), [#61833](https://github.com/NousResearch/hermes-agent/pull/61833) | Medium — Windows users blocked from desktop app |
| **Desktop UI staleness** | [#61820](https://github.com/NousResearch/hermes-agent/issues/61820) — todo list stays 0/N after work done | Low-Medium — cosmetic but annoying |
| **Intermediate streaming text discarded** | [#61802](https://github.com/NousResearch/hermes-agent/issues/61802) — desktop replaces vs CLI preserves | Medium — loss of generation history |
| **Session hook bypass** | [#61806](https://github.com/NousResearch/hermes-agent/issues/61806) — `pre_tool_call` hooks silent in serve mode | **HIGH** — security boundary vulnerability |

### Use Cases Expressed

- **Family use:** WeChat multi-account for household (Chinese-language request)
- **Production business:** WhatsApp Cloud API for customer re-engagement
- **Remote work:** Hybrid agent deployment (local tools + remote intelligence)
- **Enterprise OIDC:** Self-hosted identity provider logout compliance

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age (Created) | Component | Reason for Concern |
|---|---|---|---|
| [#5344](https://github.com/NousResearch/hermes-agent/issues/5344) | 2026-04-05 (3+ months) | MCP OAuth | **P2** — port collision makes multi-server OAuth impossible; no fix PR yet |
| [#7675](https://github.com/NousResearch/hermes-agent/issues/7675) | 2026-04-11 (3 months) | Feishu Gateway | **P2** — three unresolved bugs in a major chat platform |
| [#9756](https://github.com/NousResearch/hermes-agent/issues/9756) | 2026-04-14 (3 months) | WeChat Gateway | Popular feature request, no official response |
| [#9763](https://github.com/NousResearch/hermes-agent/issues/9763) | 2026-04-14 (3 months) | Cron | Hardcoded `skip_memory=True` blocks external memory providers |
| [#51685](https://github.com/NousResearch/hermes-agent/issues/51685) | 2026-06-24 (16 days) | Desktop | Pinned sessions silently disappear — UI regression |

### PRs Stalled

| PR | Age | Component | Status |
|---|---|---|---|
| [#57835](https://github.com/NousResearch/hermes-agent/pull/57835) | 2026-07-03 (7 days) | Agent | **OPEN** — decay protected summaries after restart, P2 severity ⚠️ |
| [#61583](https://github.com/NousResearch/hermes-agent/pull/61583) | 2026-07-09 (1 day) | Agent | **OPEN** — keep retained subagents below continuations |

### Overall Backlog Health

- **P1-P2 backlog:** Small; the team has been aggressive about closing high-severity bugs today
- **Long-latency items:** A handful of issues from April (3 months old) remain unanswered, particularly around MCP OAuth and non-English platforms (Feishu, WeChat)
- **Windows platform:** Multiple open PRs and issues — improving Windows support appears to be an ongoing effort

---

*Digest generated from GitHub data for Hermes Agent (github.com/nousresearch/hermes-agent) on 2026-07-10.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-10

## Today's Overview
PicoClaw is in a moderate activity window with 3 open issues and 16 pull requests updated in the last 24 hours. The project shows sustained community contribution with 4 merged/closed PRs and 12 open PRs under review, alongside 5 automated dependency bumps. No new releases were published today. Overall project health is stable, with ongoing focus on channel reliability, configuration migration fixes, and expanding platform support.

## Releases
No new releases were published today. The latest stable version remains v0.2.9 (git 2992...). Users experiencing issues should verify they are on this version before reporting.

## Project Progress
**Merged/Closed PRs (4):**
- [#3171](https://github.com/sipeed/picoclaw/pull/3171) — **fix(line)**: Added `ok` checks for `sync.Map` type assertions in LINE channel's `Send` method, preventing potential panics from unexpected map value types. *Merged after 14 days.*
- [#3213](https://github.com/sipeed/picoclaw/pull/3213) — **deps**: Bumped `aws-sdk-go-v2/config` to v1.32.27 (automated).
- [#3207](https://github.com/sipeed/picoclaw/pull/3207) — **deps**: Bumped `copilot-sdk/go` from v0.2.0 to v1.0.5 (automated).
- [#3226](https://github.com/sipeed/picoclaw/pull/3226) — **fix(tools)**: Prevented `write_file` from coaching destructive overwrite behavior when targeting memory files; the overwrite guard no longer actively guides the model toward replacing existing content. *Closes [#3150](https://github.com/sipeed/picoclaw/issues/3150).*

## Community Hot Topics

1. **Most Active Issue** — [#3201](https://github.com/sipeed/picoclaw/issues/3201) [Feature] Support streaming output for QQ channel (2 comments, 0 👍). The community is requesting parity with Telegram and WebSocket channels, which already support real-time token-by-token streaming via `StreamingCapable`. **Underlying need:** QQ channel users want immediate feedback during LLM interactions rather than full-response latency. **Likelihood:** Moderate — would require implementing the streaming interface for a proprietary protocol.

2. **Most Discussed PR** — [#3118](https://github.com/sipeed/picoclaw/pull/3118) Add remote Pico WebSocket mode to `picoclaw agent` (open 28 days). This long-running PR would introduce `--remote ws://...` connectivity, enabling agent usage from external hosts. **Community interest:** High, as it addresses remote deployment scenarios without local agent hosting.

## Bugs & Stability

**High Severity:**
- [#3206](https://github.com/sipeed/picoclaw/issues/3206) — **v2→v3 config migration fails** on fresh install with "unknown field(s): build_info, session.dm_scope". Affects all commands that load config (`picoclaw status`). **Status:** No fix PR identified yet. Workaround may involve manual config cleanup. *Severity: Critical — blocks basic usage on upgrade.*
- [#3203](https://github.com/sipeed/picoclaw/issues/3203) — **Matrix sync loop silent death** after network disruption. The `/sync` long-polling loop dies permanently without reconnection, and because the main process stays alive, systemd `Restart=on-failure` does not trigger. **Status:** No fix PR yet. *Severity: High — affects Matrix channel reliability in production.*

**Low/Medium Severity:**
- [#3163](https://github.com/sipeed/picoclaw/pull/3163) — **Bedrock prompt caching PR** (open 17 days) would add cache points for AWS Converse API, but may introduce edge-case behavior with non-caching models. Under review.
- [#3180](https://github.com/sipeed/picoclaw/pull/3180) — **CLI tool calls with invalid JSON arguments** — fix in review to skip malformed tool calls rather than dropping entire response batches.

## Feature Requests & Roadmap Signals

**From Issues:**
- [#3201](https://github.com/sipeed/picoclaw/issues/3201) — QQ channel streaming output support (requested July 1). Likely next release candidate if contributor bandwidth permits.

**From Open PRs (likely to merge soon):**
- [#3205](https://github.com/sipeed/picoclaw/pull/3205) — Linux ARMv7 build target + 9router gateway response fixes. *High demand* from Raspberry Pi users — likely v0.3.0 target.
- [#3118](https://github.com/sipeed/picoclaw/pull/3118) — Remote Pico WebSocket agent mode. *Long-running, high community interest.*
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) — DeltaChat refactor: -320 LOC, updated documentation, renamed invite link methods. Likely to merge soon given cleanup scope.
- [#3163](https://github.com/sipeed/picoclaw/pull/3163) — AWS Bedrock prompt caching via cache points. Attractive for cost-sensitive Bedrock users.

**Dependency bumps (automated):** 5 open dependabot PRs for AWS SDK, Copilot SDK, RTP library, and golang.org/x/sync — all low-risk.

## User Feedback Summary
- **Pain points:** Configuration migration breaking on fresh install (Issue #3206); Matrix channel unreliability in production (Issue #3203); lack of streaming on QQ channel (Issue #3201).
- **Use cases:** Raspberry Pi deployments via 9router gateway (PR #3205); remote agent usage (PR #3118); cost optimization via AWS Bedrock prompt caching (PR #3163).
- **Satisfaction:** Positive community engagement with 4 merged PRs from external contributors (chengzhichao-xydt, ACMYuechen, dependabot). No negative sentiment expressed.
- **Frustration signals:** The stale tag on Issues #3206, #3203, and #3205 indicates they have been open 7–8 days without maintainer response. Users may feel unsupported.

## Backlog Watch

**Critical attention needed:**
- [#3206](https://github.com/sipeed/picoclaw/issues/3206) — v2→v3 config migration bug (8 days stale). **Blocks all users** on upgrade or fresh install. No fix PR exists. Maintainer action required urgently.
- [#3203](https://github.com/sipeed/picoclaw/issues/3203) — Matrix sync loop silent death (8 days stale). **Production stability issue** for Matrix users. No fix PR.
- [#3118](https://github.com/sipeed/picoclaw/pull/3118) — Remote WebSocket agent mode (28 days open). Needs maintainer review and decision; high community interest.

**Long-standing open (stale >30 days):** None identified in current data window, but #3118 at 28 days is approaching this threshold.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-10

## Today's Overview

NanoClaw shows **heavy development activity** today with 18 PRs updated in the last 24 hours (15 open, 3 merged/closed) and 9 open issues. The project is in an **intense feature and stabilization cycle**, with a clear focus on scheduled tasks infrastructure (multiple PRs in a 5-part train), Telegram channel fixes, and security hardening. No new releases were published today. The core team is highly engaged, with multiple PRs carrying the `core-team` label, suggesting maintainers are actively pushing toward a v2 milestone. The 9 open issues are all recent (created within the last 2 days), indicating rapid user feedback ingestion.

## Releases

No new releases were published today. The last release remains the previous version — no changelog or migration notes are available for this digest period.

## Project Progress

**3 PRs were merged/closed today:**

- **#2981 [Merged]** — *Scheduled tasks: ncl tasks control plane, isolated sessions, script gate* — Part 2/5 of the scheduled-tasks train (author: omri-maya). Ships the full `ncl tasks` resource with create/update/run/append-log, per-series isolated sessions, run history, and the pre-task script gate. This is a major infrastructure piece for recurring automation.
- **#2993 [Closed]** — *Make NanoClaw resilient to a down container runtime* (author: shiranLupo). Fixes a crash-on-boot when Docker Desktop isn't running — previously caused silent disconnection of Discord and failure of scheduled tasks.
- **#2621 [Closed]** — *chore: add .gitattributes to enforce LF line endings for shell scripts* (author: GarethWright). A cross-platform compatibility fix ensuring shell scripts always use Unix line endings.

**Key open PRs advancing the codebase:**
- **#2988** — *Tasks: one-door delivery* (omri-maya, Part 3/5) — restricts task fire delivery to `send_message` tool only, making final-text blocks inert in task sessions.
- **#2986** — *Guard seam: one decision function for every privileged action* (moshe-nanoco) — Phase 2 of guarded-actions, centralizing all container/channel boundary decisions into a single `guard()` function.
- **#2987** — *feat: /add-audit skill* (moshe-nanoco) — Opt-in local audit log for the ncl command surface with SIEM-shaped NDJSON output.
- **#2983** — *per-group harness capability toggles* (gabi-simons) — Extends harness disablement (cron/scheduling) with per-group configuration.
- **#2998** — *fix(self-mod): render full MCP server payload on the approval card* (glifocat) — Addresses the security issue where `args` and `env` were hidden during approval.

## Community Hot Topics

**Most Active Issues:**
- **#2989** [1 comment] — *Telegram: channels silently blackholed when bot token previously polled with narrower allowed_updates* — **Critical discovery**: Telegram's server-side persistence of `allowed_updates` means switching consumers silently breaks message delivery. No fix PR yet, but **#2544** (open PR) touches related `allowedUpdates` configuration.
- **#2985** [1 comment] — *opencode provider: silent no-reply when final text snapshot misses session.idle* — Agentic turns produce complete answers that never get delivered. This is a high-impact silent failure for production deployments.
- **#2997** [0 comments] — *hasIdenticalSend matches sends from previous fires, recurring reminders stop arriving* — A subtle deduplication bug that makes recurring reminders fire only once. The fix likely needs to scope `hasIdenticalSend` checks to the current session.

**Most Active PRs:**
- **#1598** (updated today, opened April 2) — The long-running *add-remote-storage skill* PR (WebDAV/S3 via rclone) continues to receive updates, suggesting it's nearing completion after months in review.
- **#2544** (updated today, opened May 18) — *feat(telegram): enable message_reaction + callback_query in allowedUpdates* — Directly related to issue #2989's root cause; this PR may need to incorporate a fix for the `allowed_updates` persistence problem.

**Underlying needs:** Users are struggling with **silent failures** — the system appears to work but messages are dropped, reminders don't arrive, and outbound sends are silently marked delivered. Multiple issues (#2989, #2985, #2995, #2997) share this pattern, indicating a systemic reliability gap in the delivery pipeline.

## Bugs & Stability

**Bugs reported today, ranked by severity:**

**🔴 Critical — Silent data loss:**
- **#2989** — *Telegram: channels silently blackholed* — Messages disappear without error when `allowed_updates` mismatch. No fix PR yet, but #2544 is relevant.
- **#2985** — *opencode provider: silent no-reply* — Complete agent answers never delivered on long turns. No fix PR yet.
- **#2995** — *Outbound messages to offline channel adapter marked delivered* — The delivery loop signals success without actually sending. **Fix exists**: #2996 (open, by glifocat) routes missing-adapter messages into the retry path, and #2226 (open, by kpscheffel) throws an error instead of silently dropping.

**🟡 High — Functional regressions:**
- **#2997** — *Recurring reminders stop after first fire* — `hasIdenticalSend` cross-contamination between fires. No fix PR yet.
- **#2992** — *Scheduled tasks invisible across sessions of same agent group* — Task management tools are per-session, not per-group. No fix PR yet.
- **#2991** — *Telegram: channel wirings with sender_scope='known' never engage* — Channel posts are anonymous, so `known` scope never matches. No fix PR yet.
- **#2990** — *Telegram: bot doesn't react to being added to a chat* — `my_chat_member` updates silently dropped. No fix PR yet.

**🟡 Security — Approval flow bypass:**
- **#2827** / **#2762** — *add_mcp_server approval hides runtime args and env* — Approved servers can smuggle arbitrary arguments. **Fix exists**: PR #2998 renders full payload on the approval card.

## Feature Requests & Roadmap Signals

**Explicitly requested features from issues/PRs:**
- **Unified iMessage channel** — PR #2999 proposes a single `imessage` channel with local (Chat SDK) and hosted (BlueBubbles) backends. This addresses a common user request for cross-platform iMessage support.
- **Per-group harness capability toggles** — PR #2983 allows disabling Claude Code's built-in cron/scheduling per agent group, enabling NanoClaw to fully own the task scheduling path.
- **Native rich rendering for Telegram** — PR #2877 leverages Bot API 10.1's `sendRichMessage` for formatted content delivery (in progress since June 28).
- **Multimodal/voice/PDF attachment support** — PR #2618 restores v1 capabilities (image, voice, PDF, reactions) that were dropped in the v2 trunk (open since May 25).

**Prediction for next release:** The 5-part scheduled-tasks train (PRs #2980, #2981, #2988, and likely #2989/#3000) appears ready to be merged as a cohesive feature. The `guarded-actions` phase 2 (#2986) and the audit skill (#2987) signal a **security-focused release** is approaching. Expect a v2.x release within 1-2 weeks consolidating: scheduled tasks, audit logging, unified guard seams, and Telegram stability fixes.

## User Feedback Summary

**Pain points (high frequency):**
1. **Silent failures** dominate user frustration — the system gives no error when messages are dropped, reminders fail, or channels go dark. Multiple users report "the bot ignored the message" or "nothing was delivered."
2. **Telegram integration fragility** — Three Telegram-specific issues today (#2989, #2991, #2990) plus two Telegram PRs (#2544, #2877) indicate this channel adapter is the most problematic and actively being reworked.
3. **Session isolation broken** — Scheduled tasks (#2992) and recurring reminders (#2997) both suffer from cross-session state contamination, making persistent automation unreliable.

**Positive signals:** The `core-team` PRs and rapid fix turnaround (#2996 opened same day as #2995, #2998 opened quickly after #2827) show maintainers are responsive. The delegation-to-FeiShu notification (#2994, in Chinese, "solves the problem of agents working silently without reporting to users") indicates the project is attracting international, enterprise-focused users.

## Backlog Watch

**Long-unanswered important items needing maintainer attention:**

- **PR #1598** (opened April 2, 2026) — *add-remote-storage skill (WebDAV/S3)* — Has been under review for over 3 months. Received an update today, suggesting movement, but this is the longest-open PR. High value for production deployments needing persistent storage.
- **PR #2226** (opened May 3) — *fix(host): throw on missing channel adapter* — Directly fixes issue #2995 (reported today). This PR has been open for 2+ months with no merge; the fact that #2995 was reported as a new bug indicates the fix hasn't been applied. **Risk: duplicate effort.**
- **PR #2802** (opened June 17) — *ncl socket hardening* — Security fix for the host socket transport (no timeout, unbounded buffer). Updated today but still open. Given the parallel security focus (#2986, #2998), this should be fast-tracked.
- **Issue #2827/#2762** (opened June 14/21) — *MCP server approval smuggling* — Security advisories with a fix PR (#2998) now available. Needs maintainer sign-off and merge.
- **PR #2618** (opened May 25) — *Multimodal v1 restoration* — A large feature PR with 10+ files changed that's been languishing for 6 weeks. Users wanting image/voice support may be blocked on this.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-10

## Today's Overview

IronClaw is in a period of high-intensity bug fixing and stabilization following a significant `bug_bash` quality campaign. Activity is elevated with 32 issues updated and 50 PRs touched in the last 24 hours, reflecting a coordinated push to address regressions in the Slack integration layer and automation runtime before the next release. The project closed 27 PRs (a high merge rate) while opening 23 new ones, indicating sustained contributor momentum. The absence of new releases suggests the team is batching fixes for a forthcoming cut. Core contributors are advancing a multi-PR refactor to default-backed builders and consolidating the Reborn runner control plane, signaling continued architectural maturation alongside tactical bug fixes.

## Releases

No new releases this digest period. The last release wave (PR #5598, still open) would version `ironclaw` from 0.24.0 → 0.29.1 with breaking API changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). No migration notes are available yet as the release PR is not merged.

## Project Progress

**27 PRs merged/closed** in the last 24 hours, spanning:
- **Build & Linting**: PR #5652 (closed) — Denied `unused_must_use` as a workspace-wide compile error; zero existing fires verified.
- **Code Health**: PRs #5791, #5799, #5811, #5812 (all closed) — Consolidated default-backed builder setters across Reborn crates, converting test fixtures and config sections to `::default().set_*()` chains.
- **Tech Debt Cleanup**: PRs #5826, #5827 (closed) — Removed legacy v1 coverage-focused test binaries and their orphaned trace fixtures, reducing CI maintenance burden.
- **Agent Infrastructure**: PR #5900 (open) — Added hosted Postgres API capacity nightly CI job; PR #5901 (open) — Co-located and renamed the Reborn runner control plane for Wave 4.
- **Slack Fixes**: PR #5898 (open) — Roots-caused and fixed three recurring Slack automation failures (wrong-channel delivery, ID→name enrichment, single-delivery contract) with test-first coverage.
- **Core Fixes**: PR #5876 (open) — Stabilized Postgres CAS delete race under concurrent transactions; PR #5902 (open) — Fixed context compaction error (#5838) by keeping LocalDev tool results out of model context.

## Community Hot Topics

1. **#5553** [OPEN] — *Approval notifications disappear instead of remaining in notification history* (4 comments)  
   *Link*: nearai/ironclaw Issue #5553  
   The highest-activity open issue. Users report that approval notifications flash and vanish, making it impossible to review or act on pending approvals. This is a persistent UX frustration with no fix PR yet.

2. **#5747** [OPEN] — *Reborn: No way to unpair Slack on the built-in host-beta mount* (3 comments)  
   *Link*: nearai/ironclaw Issue #5747  
   Users cannot disconnect Slack once paired; the `/pair` command refuses new codes and the UI offers no disconnect. An important UX gap for the Slack integration.

3. **#5701** [OPEN] — *Activity panel hides tool details and does not update during active run* (3 comments)  
   *Link*: nearai/ironclaw Issue #5701  
   The activity panel collapses tool calls into a summary line without real-time updates, forcing users to wait until a run completes to see tool-level detail. A transparency complaint from power users.

## Bugs & Stability

The `bug_bash` campaign produced a concentrated cluster of **17 new issues** filed on 2026-07-09 alone, most at **P2 severity**:

### P1 (Critical)
- **#5877** — Slack notification delivered to the wrong user. Sensitive workflow results misrouted. No fix PR yet.  
- **#5504** (closed) — Routine creation hangs indefinitely without result. Likely resolved.

### P2 (High)
- **#5886** — Pending approval blocks subsequent automation runs; scheduler stalls.  
- **#5887** — Run hits maximum action limit and discards accumulated progress (101 tools, 30 failed).  
- **#5878** — Revoked GitHub token produces misleading errors instead of re-auth flow.  
- **#5885** — Approval notification opens action without showing the approval message; no way to approve/deny.  
- **#5884** — Routine loses credentials after external token revocation.  
- **#5883** — Generic "model output could not be used" error after successful tool execution.  
- **#5882** — Repeated Slack reconnect attempts leave auth flow broken; requires extension reinstall.  
- **#5881** — Auth notification sent to wrong Slack app/channel (Google Drive DM instead of IronClaw).  
- **#5880** — Slack auth completed externally is not reflected in Web UI approval flow; duplicate auths.  
- **#5879** — Stale error banner remains visible after successful follow-up response.  
- **#5838** — Context compaction error despite successful tool execution. **Fix PR #5902 exists** (open).  
- **#5836** — Routine fails every 5 minutes with "No thread attached"; 0% success rate.

### P3 (Medium)
- **#5891** — "Last completed" shows active run timestamp instead of last finished execution.  
- **#5890** — Slack notifications use inconsistent sender identity (bot vs. user).  
- **#5889** — "Load older messages" button does not load additional activity.  
- **#5888** — Cannot delete old threads from thread list; UI lacks delete action.

## Feature Requests & Roadmap Signals

1. **CLI/TUI for Managing Secrets** (#2601, opened 2026-04-18, 1 comment) — A long-standing request from user `ek775` for better secret management documentation and a terminal interface. Still unanswered by maintainers. Likely to be addressed in a future automation/security iteration.

2. **WASM Tool Install from Zip** (PR #5499, open) — Adds the foundation for configurable tools in Reborn, including REST-based install and environment-provisioned tenant-shared credentials. This infrastructure PR signals a near-term push to support third-party plugins.

3. **JMT x402 Agent Tools** (PR #5903, open, new contributor) — A community contribution adding 25 paid x402 endpoints on Base mainnet. Demonstrates growing external developer interest in the tool ecosystem.

## User Feedback Summary

The bug_bash issues reveal several acute pain points:

- **Notification and approval UX is broken**: Approvals vanish, don't render, block subsequent automations, and sometimes arrive in wrong channels. Users cannot trust the approval workflow.
- **Slack integration is unreliable**: Three distinct wrong-delivery bugs (#5877, #5881, #5890), an irrecoverable auth flow (#5882), and no way to unpair (#5747) make Slack a significant source of user frustration.
- **Error messages are misleading**: Revoked tokens produce encoding errors instead of auth prompts (#5878); successful tools followed by generic model errors (#5883); stale error banners persist (#5879). Users lose trust in error reporting.
- **Routine/recurring execution is unstable**: Routine creation hangs (#5504), scheduled runs fail with "No thread attached" (#5836), progress is discarded on action limit (#5887), and credentials are lost mid-execution (#5884).
- **UI lacks basic affordances**: Cannot delete threads (#5888), "Load more" is non-functional (#5889), real-time tool detail is hidden (#5701), and the terminal icon cannot be disabled (#5705).

Satisfaction signals: The high rate of merged PRs (27 closed) and active contributor engagement (new community PR #5903, multiple human-verified fixes) indicate a responsive core team, even as user-facing stability lags.

## Backlog Watch

| Item | Age | Status |
|------|-----|--------|
| #2601 — CLI/TUI for Managing Secrets | 83 days (since Apr 18) | No maintainer response; 1 comment | 
| #5553 — Approval notifications disappear | 8 days (since Jul 2) | 4 comments; no fix PR; highest-traffic open issue |
| #5747 — No way to unpair Slack | 3 days (since Jul 7) | 3 comments; no fix PR |
| #5701 — Activity panel hides tool details | 4 days (since Jul 6) | 3 comments; no fix PR |

The three oldest high-activity open issues (#2601, #5553, #5701) share a common thread: **user-facing feedback and control**. None have associated fix PRs, suggesting the core team is prioritizing backend stability (context compaction, Slack delivery, runner control plane) over UX polish in the current sprint.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **2026-07-10**.

---

## LobsterAI Project Digest – 2026-07-10
**Period:** 2026-07-09 00:00 UTC – 2026-07-10 00:00 UTC  
**Data Source:** github.com/netease-youdao/LobsterAI

---

## 1. Today's Overview
The project saw a burst of development activity on **2026-07-10**, with **10 out of 12** updated Pull Requests being merged or closed. The majority of these merged PRs (#2302 through #2309) focus on **infrastructure reliability** (null-byte sanitization, build compatibility, agent-scoped tooling) and **UI refinements** (sidebar pagination, Windows title bar, prompt mode UX). However, **4 open Issues** from early April remain stale (last updated 3+ months ago), indicating a backlog of user-facing feature requests that have not yet been prioritized. No new releases were cut today. Overall, the project is in a **high-velocity maintenance and polish phase**, with the core team addressing technical debt and UX feedback from the April 2026 feature wave.

## 2. Releases
- **None.** No releases were published today. The last stable release remains the version associated with the April 2026 feature set.

## 3. Project Progress (Merged/Closed PRs)
Today, **10 PRs** were merged or closed, demonstrating strong engineering throughput.

| PR # | Title / Summary | Area |
|---|---|---|
| #2306 | **fix(scheduled-task): repair IM group task routing** – Filters same-peer fake entries and normalizes legacy IM announce jobs. | Core / Scheduling |
| #2309 | **fix(build): keep null-byte stripping ES2020-compatible** – Replaces `String.replaceAll` with a global regex for broader compatibility. | Build |
| #2308 | **fix(cowork): strip null bytes from prompts before openclaw gateway send** – Prevents hard-rejects from the gateway due to NUL characters. | Reliability |
| #2307 | **fix(cowork): refine prompt modes and steer follow-up handling** – Removes Plan Mode switch, moves status bars, refines Steer queue. | UX / Cowork |
| #2305 | **fix(cowork): prefer agent display names for subagents** – Syncs agent names into OpenClaw entries for consistent chips/titles. | Naming / Consistency |
| #2304 | **feat(sidebar): improve task pagination and agent ordering** – Adds incremental loading, expand/collapse controls, and DnD-based sorting. | UI / Sidebar |
| #2303 | **fix(openclaw): support agent-scoped local tools** – Allows `AskUserQuestion` and media tools for non-main desktop agents and child sessions. | Tooling |
| #2302 | **feat: Windows title bar** – Adds branded title bar with native controls and collapsed-sidebar actions. | UI / Platform |
| #1396 | **feat: enhanced uninstall UX** – Cleans AppData and handles running application during NSIS uninstall. | Installer |
| #1397 | **fix(cowork): localize compact time suffixes** – Replaces hardcoded English (`26m`, `17h`) with language-aware text. | i18n / UX |

**Notable Fix:** PR #2308 addresses a **critical reliability bug** where null bytes in prompts caused gateway hard-rejects, affecting all chat.outbound payloads.

## 4. Community Hot Topics
Most community discussion today centered on **stale UX issues** from April, which continue to accumulate user interest.

- **Issue #1339 (OPEN)** – **"Missing timestamp on message bubbles"** (1 comment, stale since Apr 2). While a fix PR (#1340) exists and is open, it has not been merged for 3 months. This suggests a **blocker on review capacity** or a **styling/design disagreement** that has stalled a relatively small UI change.
- **Issue #1341 (OPEN)** – **"Input field does not support up/down arrow history"** (1 comment, stale since Apr 2). A fix PR (#1342) also exists. The underlying need is **developer productivity**: users want shell-like keyboard navigation to iterate quickly on multi-step tasks.
- **Issue #1343 (OPEN)** – **"Search only supports title search, not full-text"** (1 comment). Users need to find sessions by remembered keywords, not titles. This is a **high-impact UX gap** for any knowledge worker.

**Observation:** All community hot topics are feature requests, not bug reports. The community is actively shaping the product's *usability* layer, but reviews are not keeping pace with contributions.

## 5. Bugs & Stability
**No new bugs were filed in the last 24 hours.** However, two stability-related PRs were merged:

| Issue | Severity | Description | Status | Fix PR |
|---|---|---|---|---|
| **Null-byte injection in prompts** | **Critical** | `U+0000` in prompts caused `openclaw gateway` to hard-reject `chat.send` payloads. Data could re-enter via continuity capsule or evidence bridges. | **Fixed (merged)** | #2308 |
| **Build break due to ES2020 incompatibility** | **Medium** | `String.replaceAll` is not available in older Electron sandbox contexts. | **Fixed (merged)** | #2309 |

**No regressions or crashes were reported today.**

## 6. Feature Requests & Roadmap Signals
The following user-requested features have open PRs (#1340, #1342) but remain unmerged, signaling that the core team is deferring them despite community demand.

| Feature Request | PR # | Likelihood for Next Version |
|---|---|---|
| User message timestamps (HH:MM) | #1340 | **Medium** – Small, isolated change; but 3-month delay suggests low priority vs. infrastructure. |
| Up/Down arrow history in input | #1342 | **Medium** – High developer value, but requires careful multi-line cursor handling. |
| Full-text search across message content | #1343 | **Low** – No PR exists; architectural work (async search, caching) non-trivial. |
| Export session as Markdown | #1345 | **Low** – No PR; depends on `saveInlineFile` IPC which is still maturing. |

**Prediction:** Timestamps (#1340) and arrow-key history (#1342) have the highest chance of landing in the next **0.x minor release**, given that PRs exist and the core team is currently polishing Cowork UX.

## 7. User Feedback Summary
- **Pain Point (High):** Users who rely on the *scheduled task system* report that non-repeating tasks are permanently deleted after a single execution (#1394). The expectation is that tasks should remain editable for future reuse. This was closed (marked stale) but the underlying behavior frustrates power users.
- **Pain Point (Medium):** Chinese-language users report that time abbreviations (e.g., "26m") remain in English even when the UI is localized. This is now **fixed** via PR #1397 (merged today).
- **Satisfaction Signal:** The strong response to the April feature requests (timestamp, history, search) indicates that **LobsterAI users are power users** who want terminal-like efficiency and deep search, not just chat.

## 8. Backlog Watch
The following open items have not received maintainer attention for **3+ months**:

| Item | Age | Stale Since | Risk |
|---|---|---|---|
| **Issue #1339** – Missing timestamps (+ PR #1340) | 99 days | Apr 2, 2026 | **High** – Community has contributed a ready-to-merge fix. Continued neglect may discourage future contributors. |
| **Issue #1341** – Arrow-key history (+ PR #1342) | 99 days | Apr 2, 2026 | **High** – Same risk as above; duplicate effort if core team writes their own. |
| **Issue #1343** – Full-text search | 99 days | Apr 2, 2026 | **Medium** – No PR, but a major UX gap. New features (sidebar pagination, PR #2304) will compound this issue by making it harder to find deep sessions. |
| **Issue #1345** – Export to Markdown | 99 days | Apr 2, 2026 | **Low** – Workaround exists via screenshot/OCR. Not critical for current users. |

**Recommendation:** The maintainer team should prioritize merging PRs #1340 and #1342 within the next 7 days to re-incentivize community contributions and clear the oldest UX debt.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-10**.

---

## Moltis Project Digest – 2026-07-10

### 1. Today's Overview
Moltis is currently in a **low-activity phase**, with no new releases, no issue updates, and only a single Pull Request updated in the last 24 hours. The project appears to be in a maintenance or planning lull, as no bug reports or community discussions were initiated today. However, the one active PR signals that the team is preparing to support the latest frontier models. The project health is stable but quiet, with no regressions or blockers reported.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress
- **No PRs merged or closed today.** The single open PR (#1146) remains open and represents the only code-related activity.

### 4. Community Hot Topics
- **[PR #1146: Add GPT-5.6 model support](https://github.com/moltis-org/moltis/pull/1146)** (Open, updated 2026-07-09)
  - **Analysis:** This is the only piece of activity. The PR adds support for GPT-5.6 variants (Sol, Terra, Luna) to the OpenAI and Codex fallback catalogs. It also implements the documented 1.05M context window and the backend 372K limit. This suggests the core team is actively adapting Moltis to the latest generation of AI models, which is critical for staying competitive.

### 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** The project has zero open issues, indicating a clean slate in the tracker.

### 6. Feature Requests & Roadmap Signals
- **No new feature requests opened today.** However, looking at PR #1146, the following prediction can be made:
  - **Prediction:** Support for GPT-5.6 is the most likely feature to land in the next minor release. Given that the PR is already drafted and documented, it may merge within 1–3 days if tests pass. This suggests Moltis is prioritizing compatibility with the latest Large Language Model APIs.

### 7. User Feedback Summary
**No direct user feedback or pain points were recorded today** (zero comments on PRs/issues, zero reactions). In the absence of data, the primary inferred user need is for **up-to-date model catalog support**, as demonstrated by the ongoing work on PR #1146.

### 8. Backlog Watch
**No long-unanswered issues or PRs detected.** The project had zero open/active issues prior to today, and the only open PR was created yesterday. The maintainer response time appears to be lean and fast.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-10

## Today's Overview

CoPaw is experiencing **high activity** heading into the v2.0.0-beta release cycle, with 33 issues, 50 PRs updated in the last 24 hours, and a new beta release (v2.0.0-beta.5) pushed. The project shows a strong **3:2 ratio of merged/closed items to open items**, indicating healthy velocity. A new release v2.0.0-beta.5 has shipped with two bug fixes in the scroll/eviction index system. Notably, the **open issue count is growing** (18 open issues updated today) alongside active development, suggesting the community is actively stress-testing the v2.0 beta. Maintainer response time appears swift, with many issues receiving same-day closure. The project is also seeing a **major testing push** from contributor `hanson-hex`, with multiple PRs adding comprehensive unit and regression test suites.

---

## Releases

**New: v2.0.0-beta.5** (Released 2026-07-09/10)

**What's Changed:**
- `fix(scroll)`: Label un-headlined evicted spans in the eviction index (@niceIrene, PR #5848)
- `fix(scroll)`: Anchor the live turn with a seam banner in the eviction index (@niceIrene, PR #58)

**Breaking Changes:** None noted in changelog.

**Migration Notes:** No migration guide published for this patch release. Users on v2.0.0-beta.x should be able to upgrade directly via pip — `pip install qwenpaw==2.0.0b5`.

**Context:** This is a minor bugfix release focused on the scroll/eviction index UI, likely part of the ongoing v2.0 stabilization sprint. A PR to bump to v2.0.0-beta.6 (PR #5915) was already **merged today**, suggesting another release is imminent.

---

## Project Progress

**Total merged/closed PRs today:** 31, including:

| PR # | Description | Author | Status |
|------|-------------|--------|--------|
| #5915 | **chore: bump version to 2.0.0b6** | cuiyuebing | ✅ Merged |
| #5895 | Sprint 4.1 integration tests: tool-calls lifecycle + chat/task | yutai78786 | ✅ Merged |
| #5812 | Channels module unit tests (176 cases) | hanson-hex | ✅ Merged |
| #5905 | Fix runtime error envelope: use structured Error object for SDK | rayrayraykk | ✅ Merged |
| #5904 | chore: fix MCP version | qbc2016 | ✅ Merged |
| #5899 | Update docs for QwenPaw 2.0 | cuiyuebing | ✅ Merged |
| #5346 | Tool run in Docker | pclin1212 | ✅ Merged |

**Key feature/quality advances:**
- **Runtime v2 error handling**: PR #5905 fixes a regression where the Envelope pipeline changed `response.error` from a structured `{code, message}` object to a plain string, breaking the frontend SDK's ability to display error messages. Now re-structured for compatibility.
- **Massive test expansion**: PR #5812 adds 176 unit tests for the channels backend (schema, ACL, command_registry, streaming chunk splitting). PR #5895 adds 21 integration tests for tool-calls lifecycle and background task endpoints.
- **Docker tool support**: PR #5346 (merged) adds ability to run tools inside Docker containers — important for sandboxed execution.
- **Docs refresh**: PR #5899 updates documentation for v2.0 features.

---

## Community Hot Topics

**#1: 🐾 Help Wanted: Open Tasks (#2291) — 64 comments**
- Author: cuiyuebing | Updated: 2026-07-09
- Link: [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)
- **Analysis:** This is the project's primary **community contribution hub** — a meta-issue listing P0-P2 tasks for external contributors. Comments include 2 recent design proposals (theme/skin module — #5909, claimed by `nolanchic`). This indicates the maintainers are actively onboarding community contributors for v2.0 features. **Underlying need:** Scalable community contribution pipeline.

**#2: 🛑 Sandbox limitation blocks agent capabilities (#5879) — 6 comments**
- Author: MCQSJ | Updated: 2026-07-09
- Link: [Issue #5879](https://github.com/agentscope-ai/QwenPaw/issues/5879)
- **Analysis:** A user on a trusted personal device reports that the v2.0 sandbox **cannot be disabled**, preventing agents from installing Python packages or performing legitimate system operations. **Underlying need:** Granular sandbox configuration (toggle/whitelist/custom rules), not just on/off.

**#3: 🐢 Agent thinking gets stuck (#5328) — 5 comments** (CLOSED)
- Author: bob-geek11 | Updated: 2026-07-09
- Link: [Issue #5328](https://github.com/agentscope-ai/QwenPaw/issues/5328)
- **Analysis:** Using DeepSeek, the agent frequently freezes in the "thinking" phase across all interfaces (Web, Console, Tauri). User must manually stop and continue. **Likely root cause:** Incomplete streaming of reasoning content — the model sends thinking tokens, but the frontend doesn't terminate the thinking state properly when output arrives.

**#4: Context compaction breaks tool_call structure (#5856) — 3 comments**
- Author: quanrennsxsb | Updated: 2026-07-08
- Link: [Issue #5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)
- **Analysis:** A **critical structural bug**: `LightContextManager.pre_reasoning()` converts structured tool_call/tool_result blocks to plain text via `format_msgs_to_str`, permanently losing the structured data the model needs. Results in 400 errors post-compaction. **Underlying need:** Context compaction must preserve the `tool_use`/`tool_result` message structure for LLM consumption.

**#5: Doom loop anti-repetition false positive (#5906) — 2 comments**
- Author: MCQSJ | Updated: 2026-07-09
- Link: [Issue #5906](https://github.com/agentscope-ai/QwenPaw/issues/5906)
- **Analysis:** The "prevent duplicates" feature incorrectly triggers a "Doom loop" stop on normal conversations. Related to PR #5916 (open) which resets gate state on new user turns. **Underlying need:** Smarter repetition detection that accounts for legitimate repeated tool calls or rephrased user input.

---

## Bugs & Stability

### Critical Bugs (fix available or in progress)

| Severity | Bug | Status | Fix |
|----------|-----|--------|-----|
| 🔴 **Critical** | Auto Memory Search generates malformed `function_call` history for OpenAI Responses API (#5910) | **Open** | PR #5913 (open) — `fix(agents): preserve Responses API function_call names` |
| 🔴 **Critical** | Context compaction loses tool_call structure → 400 errors (#5856) | **Open** | No fix PR yet |
| 🔴 **Critical** | Windows AppContainer sandbox ignores configured shell (#5911) | **Open** | No fix PR yet |
| 🟠 **High** | DoomLoopGate state persists after conversation reset (#5884) | **Open** | PR #5916 (open) — `reset gate state on new user turn` |
| 🟠 **High** | Docker: browser_use fails due to dbus connection error (#5872) | **Open** | No fix PR yet |

### Moderate Bugs (closed or in review)

| Bug | Impact | Fix |
|-----|--------|-----|
| Image display broken in Coding Session (#5863) | Medium — images show as binary code | **CLOSED** (fix likely part of Tauri offline preview PR #5889) |
| OneBot channel enabled by default → watchdog restart loop (#5898) | High — instance unresponsive | **CLOSED** |
| Matrix channel token login fails "M_MISSING_TOKEN" (#5868) | Medium — channel broken after upgrade | **CLOSED** |
| WeChat Work QR code generation broken (greedy regex) (#5893) | Medium — enterprise users blocked | **CLOSED** (fix: non-greedy regex) |

### Regression Pattern
Issue #5910 is particularly concerning: **Auto Memory Search (Beta) + OpenAI Responses API** causes 502 errors from Cloudflare. The root cause (malformed `function_call` names due to a shared formatting code path) was introduced in v2.0.0b5. PR #5913 is actively fixing this.

---

## Feature Requests & Roadmap Signals

| Feature | Issue | Likely Next Version? |
|---------|-------|---------------------|
| **Configurable sandbox toggle** — disable/whitelist sandbox on trusted devices | #5879 | **v2.0.0-beta.x** — high user demand, fundamental limitation |
| **Multiple conversation grouping + import/export** | #5879 (also) + #5903 | **Future** — UX enhancement, not critical for 2.0 GA |
| **Built-in browser preview** for Coding mode | #5891 | **Future** — "nice to have" |
| **MCP streamable_http auto-reconnect** | #5900 | **v2.0.0-beta.x** — stability issue, user-reported |
| **Token usage per session** | #4767 (closed) | **Likely v2.0.x** — community upvoted, monitoring value |
| **Theme/skin module** | #5909 (claimed from #2291) | **v2.0.x** — contributor working on it (P0) |
| **Memory search reranker (ReMe 0.4)** | PR #5692 (Under Review) | **v2.0.0-beta.x** — already in PR review |

**Prediction:** The **configurable sandbox** (#5879) is likely to appear highly prioritized — it's a blocker for users who want to install packages or run arbitrary commands. Expect a `sandbox.mode: "none" | "basic" | "strict"` config option soon.

---

## User Feedback Summary

### Pain Points (High Urgency)

1. **"Cannot disable sandbox on my own device"** (MCQSJ, #5879): *"The sandbox severely limits agent capability and cannot be turned off. I can't even install Python libraries."* — **This is the #1 user complaint this week.**

2. **"Context compaction destroys tool calls"** (quanrennsxsb, #5856): *"Structured tool_call data is permanently lost, causing 400 errors."* — **Critical for any agent using tools.**

3. **"Auto Memory Search breaks with OpenAI Responses API"** (BLUE0818, #5910): *"Enabling Auto Memory Search causes Cloudflare 502 errors on every request."* — **Beta feature regression.**

4. **"'Max iterations reached' on normal conversations"** (MCQSJ, #5896): *"The iteration count starts from the last trigger, not from the new message. I ask one question and after a few tool calls it says 'Max iterations reached'."* — **UX-blocking.**

5. **"'Doom loop' false positive on normal replies"** (MCQSJ, #5906): *"Normal conversation and reading history triggers false '6 consecutive repetitions' stops, but the conversation is not repeating."* — **Same user, compounding frustration.**

### Satisfaction Signals

- **High maintainer responsiveness**: Many issues closed within 24 hours (e.g., #5898, #5893, #5905).
- **Active community contributions**: `hanson-hex` submitting major test infrastructure PRs; `nolanchic` claiming theming task.
- **v2.0 excitement**: User `wheza99` actively testing across releases (issues #5863, #4767).
- **Documentation improvement**: PR #5899 updating v2.0 docs suggests maintainers are preparing for broader adoption.

---

## Backlog Watch

### High-Impact Issues Without Maintainer Response

| Issue | Created | Days Stale | Impact |
|-------|---------|------------|--------|
| [#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900) — MCP streamable_http no auto-reconnect | 2026-07-09 | **1 day** | High — session permanently skips MCP client after blip; no recovery path exists |
| [#5887](https://github.com/agentscope-ai/QwenPaw/issues/5887) — Command-triggered ReMe auto-memory runs without session_id | 2026-07-09 | **1 day** | Medium — `/new` command in QQ triggers auto-memory error in inbox |
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) — Docker browser_use fails: dbus connection error | 2026-07-09 | **1 day** | High — Docker agents cannot use browser tools at all |

### Stale Issues Needing Triage

| Issue | Days without activity | Notes |
|-------|----------------------|-------|
| [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) — `model_factory.py` WARNING log spam | 6 days | Fix PR #5908 is open and assigned to `wananing` — should be merged soon |
| [#5528](https://github.com/agentscope-ai/QwenPaw/issues/5528) — Browser tool fails on Linux with IME-wrapped browser | 15 days | Affects all Linux desktop users; root cause identified (`_get_linux_default_browser()` regex) |

### Notable: PRs Awaiting Review

| PR | Since | Assignee | Urgency |
|----|-------|----------|---------|
| [#5913](https://github.com/agentscope-ai/QwenPaw/pull/5913) — fix Responses API function_call names | Today | jinliyl | **High** — fixes critical #5910 regression |
| [#5916](https://github.com/agentscope-ai/QwenPaw/pull/5916) — reset gate state on new user turn | Today | rayrayraykk | **High** — fixes #5896 and #5906 iteration/doom-loop bugs |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) — memory search reranker (ReMe 0.4) | July 1 (9 days) | lecheng2018 | **Medium** — feature, but under review for 9 days |
| [#5739](https://github.com/agentscope-ai/QwenPaw/pull/5739) — text selection + auto-copy in chat | July 2 (8 days) | RerankerGuo | Low — UX enhancement, first-time contributor |

---

*Generated from GitHub data on 2026-07-10. Note: This project uses the repository `agentscope-ai/QwenPaw`, though CoPaw appears to be an alternate/umbrella project name for the same codebase.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-10

## 1. Today's Overview

ZeroClaw saw elevated activity today with **34 issues updated** (23 open/active, 11 closed) and **50 PRs updated** (39 open, 11 merged/closed) in the last 24 hours. No new releases were cut today, but the project shows strong forward momentum across v0.8.3 milestone work, security hardening, and the new plugin/capability catalog system. The maintained 23:11 open-to-closed issue ratio and 39:11 open-to-closed PR ratio indicate a healthy but busy triage pipeline, with significant contributor activity on the plugin subsystem (PRs #8923, #8909) and runtime fixes (PRs #8921, #8928). The project appears to be in an active development sprint with several high-risk feature PRs still open.

## 2. Releases

**No new releases today.** The most recent release work appears to be tracked under the v0.8.3 milestone (tracker #8073), with no artifacts published in the last 24 hours.

## 3. Project Progress

**11 PRs were merged or closed today**, representing meaningful progress:

**Bug Fixes:**
- **[PR #7836]** (closed) — `fix(channels/orchestrator): use resolved agent config for strict_tool_parsing and parallel_tools` — Fixed channel per-message tool-loop reads returning default `false` values instead of actual config values ([zenith issue #7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809))
- **[PR #8872]** (closed) — `fix(zerocode): use runtime profile max_context_tokens for context meter` — Fixed ZeroCode context meter showing incorrect token counts ([zenith PR #8872](https://github.com/zeroclaw-labs/zeroclaw/pull/8872))
- **[PR #8833]** (closed) — `fix(config): widen config-set alias auto-materialization past providers.*` — Fixed `config set` failing to auto-create dynamic-map aliases for sections other than `providers.*` ([zenith PR #8833](https://github.com/zeroclaw-labs/zeroclaw/pull/8833))
- **[PR #8873]** (closed) — `fix(cli): UTF-8-safe stdin cap in exit prompt + audit trail (#7828)` — Systematic audit and fix of byte-budget UTF-8 truncation bugs across runtime-reachable paths ([zenith #7828](https://github.com/zeroclaw-labs/zeroclaw/issues/7828))
- **[PR #8875]** (closed) — `bug(config): degraded-section warning improvement` — Fixed startup warning pointing users to `config migrate` without showing parse errors ([zenith #8875](https://github.com/zeroclaw-labs/zeroclaw/issues/8875))
- **[PR #8652]** (closed) — `fix(zerocode): transcript highlight dismiss on blank side clicks` — Fixed highlight not dismissing on blank horizontal space clicks ([zenith #8652](https://github.com/zeroclaw-labs/zeroclaw/issues/8652))
- **[PR #8760]** (closed) — `fix(runtime): keep daemon-owned agent output out of daemon stdout` — Fixed internal agent output leaking to the daemon stdout stream ([zenith #8760](https://github.com/zeroclaw-labs/zeroclaw/issues/8760))
- **[PR #8881]** (closed) — `fix(cron): expose wechat, signal, email in cron delivery schema` — Added missing channels to the cron delivery schema static enum ([zenith PR #8881](https://github.com/zeroclaw-labs/zeroclaw/pull/8881))

**Security Fix:**
- **[PR #8044]** (closed) — `fix: Harden /model --agent scope with per-sender authorization` — Closed a critical authorization gap where any chat sender could change the effective model for all agent users ([zenith #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044))

## 4. Community Hot Topics

**Most Active Issues (by comments):**

1. **[Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** (13 comments) — **[Bug]: zeroclaw does not know it can add cron** — *Open since April 18.* User reports the agent fails to recognize its own `cron` capability, responding "I don't have the tools" instead of configuring scheduled tasks. Marked `stale-candidate` and `needs-author-action` — suggesting the reporter may not have responded to maintainer questions.

2. **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (13 comments) — **RFC: Work Lanes, Board Automation, and Label Cleanup** — *Accepted, rollout in progress.* A governance RFC with 14 revisions that proposes a new workflow automation system to reduce manual triage overhead. Indicates the project is scaling beyond what volunteer maintainers can handle.

3. **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** (9 comments) — **tool_filter_groups is a no-op for real MCP tools (prefix-check bug)** — *Closed.* Two distinct bugs found in the tool filter system — a prefix mismatch in the filter gate and missing integration with `deferred_loading`. Represents high-risk (labeled `risk:high`) documentation vs. implementation discrepancy.

**Most Active PRs (by comment count):** All top 20 PRs show `undefined` comments in the data, suggesting a data collection limitation. However, the most significant open PRs by scope include:

- **[PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** — `feat(gateway): add OpenAI chat completions endpoint` — XL-sized, aims to add OpenAI-compatible HTTP endpoint for broader LLM tool ecosystem compatibility
- **[PR #8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)** — `fix(goal): stop active goal self-resume loops` — XL-sized, fixes potential infinite loop in the goal command system
- **[PR #8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)** — `feat(channels): add goal command admission` — XL-sized, adds `/goal` command support to all chat channels

**Underlying Needs:**
- **Self-awareness gap:** Users expect the agent to know its own capabilities and proactively suggest them (Issue #5862)
- **Complexity management:** The project is adding RFCs for workflow automation (Issue #6808), suggesting maintainer bandwidth is a growing concern
- **Protocol interoperability:** Strong community desire for OpenAI-compatible endpoints (PR #8486) — users want to use ZeroClaw with existing LLM tools and frameworks

## 5. Bugs & Stability

**Critical/High Severity Bugs (active):**

| Issue | Severity | Component | Status | Summary |
|-------|----------|-----------|--------|---------|
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | S0 - data loss | tooling/ci | **Open, blocked** | `reasoning_content` not forwarded in agentic tool-call loops with Xiaomi thinking models; blocked on author action |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | S0 - data loss | runtime/daemon | **Open, blocked** | `providers erro` — API returns 405 Method Not Allowed for DashScope endpoint; blocked on author action |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | S2 - degraded | runtime/daemon | **Open, blocked** | Context overflow causes hallucination/topic drift in long conversations; blocked on author action |
| [#8871](https://github.com/zeroclaw-labs/zeroclaw/issues/8871) | Not rated | runtime/tool | **Open, blocked** | Third-party API 429 rate-limit responses not handled explicitly |
| [#8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929) | S2 - degraded | runtime/daemon | **Open** | Streamed narration duplicated when final display text is trimmed (reported today) |
| [#8915](https://github.com/zeroclaw-labs/zeroclaw/issues/8915) | S2 - degraded | runtime/daemon | **Open, in-progress** | `agent_start`/`agent_end` events never emitted for channel/process_message turns |
| [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | S2 - degraded | channel | **Open, in-progress** | Telegram documentation is wrong |
| [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) | S0 - data loss | runtime/daemon | **Closed** | Anthropic provider from Quickstart unavailable in chat until reset |

**New Bugs Reported Today (2026-07-10):**
- **[Issue #8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929)** — "streamed narration can be duplicated when final display text is trimmed" — S2 severity, runtime/daemon component. During streamed tool-use turns, narration already forwarded live is emitted a second time. **No fix PR yet.**
- **[Issue #8925](https://github.com/zeroclaw-labs/zeroclaw/issues/8925)** — Support request for Amazon Bedrock configuration
- **[Issue #8871](https://github.com/zeroclaw-labs/zeroclaw/issues/8871)** — "Handle third-party API 429 rate-limit responses explicitly" — remaining task from previous SSRF work

**Bugs with Existing Fix PRs:**
- **[Issue #7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809)** — Channel turns ignore runtime-profile strict/parallel tool flags → **Fixed by PR #7836** (closed today)
- **[Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)** — reasoning_content not forwarded → No fix PR yet (blocked on author action)
- **[Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)** — MCP stdio child processes accumulate on daemon → **Fix in progress via PR #8866** (open)

## 6. Feature Requests & Roadmap Signals

**Active Feature Requests (today's updates):**

- **[Issue #8919](https://github.com/zeroclaw-labs/zeroclaw/issues/8919)** — "Add a right-click context menu to ZeroCode chat" — P2, low risk. Adds Copy as menu action for chat messages and code blocks.
- **[Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** — "Local-First Mode for Small Models" — P2, high risk. Compact prompting mode, strict parser option, no prompt-leakage. Has 2 👍 reactions. Accepted but no implementation PR yet.
- **[Issue #8866](https://github.com/zeroclaw-labs/zeroclaw/issues/8866)** — MCP registry sharing across heartbeat ticks — Fix PR open, addressing the MCP process leak (Issue #5903)
- **[Issue #8923](https://github.com/zeroclaw-labs/zeroclaw/issues/8923)** — "host-mediated outbound raw TCP (+TLS) for channel plugins" — XL-sized, enables network-capable plugins for Discord, Telegram, Matrix

**Roadmap Trackers (active):**
- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** — v0.9.0 auth, security, gateway — 111 open items (10 PRs, 101 issues)
- **[#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)** — v0.8.3 observability, CI, docs, dependencies
- **[#8290](https://github.com/zeroclaw-labs/zeroclaw/issues/8290)** — Multi-user milestone: per-principal isolation + per-sender authz
- **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** — Persistent memory curation, relevance, and operability planes
- **[#7831](https://github.com/zeroclaw-labs/zeroclaw/issues/7831)** — Discord channel interaction-surface parity (embeds, slash options, components, voice)

**Predictions for v0.8.3 / v0.9.0:**
- OpenAI-compatible HTTP endpoint (PR #8486) is likely for v0.8.3 given high adoption interest
- Plugin capability catalog (PR #8909, #8923) — core architectural change, likely for v0.9.0
- Multi-user isolation (#8290) — foundational for enterprise deployments, tracked for v0.9.0
- Matrix channel single-message drafts (PR #8443) — likely included in next minor release
- Discord features (#7831) — scattered across multiple PRs, gradual rollout

## 7. User Feedback Summary

**Pain Points (from issues and support requests):**

1. **Agent self-awareness gap** (Issue #5862): Users expect the agent to proactively offer its own capabilities (cron scheduling) instead of claiming it lacks tools. Suggests need for a self-introspection mechanism.

2. **Configuration complexity** (Issue #8925): User struggling with Amazon Bedrock setup, trying documentation, Gemini, and other tools unsuccessfully. Documentation for cloud provider configurations needs improvement.

3. **Incorrect documentation** (Issue #8810): Telegram documentation is wrong, with the reporter expressing frustration: "if not implemented correctly, slop remains slop." Documentation quality is a pain point for new users.

4. **Context window management** (Issue #6517, #8872): Long conversations degrade with hallucination/topic drift. The context meter fix (#8872) addresses visibility but the core issue remains.

5. **Provider compatibility** (Issues #6558, #6672, #8094): Multiple reports of provider integration failures, especially with non-OpenAI-compatible endpoints and thinking mode models. Users want broader provider support with fewer workarounds.

6. **Rate limiting** (Issue #8871): Third-party API rate limiting not handled gracefully — users experience unhandled 429 responses.

**Satisfaction Signals:**
- Active community of contributors with 39 open PRs — developers are investing time in the project
- Multiple PRs from the same contributors (wangmiao0668000666, tidux, JordanTheJet, vrurg, yanchenko) — indicates engaged developer community
- The project is receiving external feature requests (e.g., Agent Skills client logo, Issue #5262), indicating third-party ecosystem interest

## 8. Backlog Watch

**Long-unanswered Issues Needing Maintainer Attention:**

| Issue | Age | Priority | Risk | Status | Reason for Concern |
|-------|-----|----------|------|--------|-------------------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | ~83 days | P2 | Medium | **Stale-candidate** | Core usability bug — agent doesn't know its own capabilities. 13 comments, but marked `needs-repro` and `needs-author-action` with no resolution. |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | ~64 days | P2 | Medium | **Stale-candidate** | Context overflow → hallucination. Marked `needs-repro` and `needs-author-action`. This is a common user complaint across LLM platforms. |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | ~61 days | P3 | Low | **Stale-candidate** | DashScope (Alibaba Cloud) provider returns 405 — blocked on author action. Likely API URL configuration confusion. |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | ~56 days | P2 | **High** | **Stale-candidate** | `reasoning_content` not forwarded in tool-call loops — S0 severity (data loss). Critical for Xiaomi thinking model users. Blocked on author action. |
| [#8871](https://github.com/zeroclaw-labs/zeroclaw/issues/8871) | ~2 days | P3 | Medium | Needs author action | 429 rate-limit handling — identified during security review, still unaddressed. |

**Long-open PRs Needing Attention:**
- **[PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** — OpenAI chat completions endpoint — Open since June 29, with `needs-author-action` label. This is one of the most community-requested features (related to #8550, #8603).
- **[PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)** — Matrix single-message progress drafts — Open since June 28, `needs-author-action`. Adds important UX improvement for Matrix users.
- **[PR #8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)** — Stop active goal self-resume loops — Open since July 5, XL-sized PR covering multiple components.

**Observation:** Several long-standing issues (86, 64, 61, 56 days) are blocked on `needs-author-action` — meaning the project maintainers have requested reproduction steps or additional information from reporters who haven't responded. This suggests either (a) users reporting issues then losing interest, (b) reporters finding workarounds independently, or (c) insufficient issue triage communication. The project could benefit from a stale-issue closing policy or automated reminders to reduce backlog noise.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*