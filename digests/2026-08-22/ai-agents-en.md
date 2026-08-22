# OpenClaw Ecosystem Digest 2026-08-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-22 01:17 UTC

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

Based on the GitHub data provided for OpenClaw (github.com/openclaw/openclaw) on 2026-08-22, here is the project digest:

---

### 1. Today's Overview

OpenClaw is maintaining a high volume of activity with 1,000 issues and PRs updated in the last 24 hours. The project is in a heavy stabilization phase, with a significant portion of the backlog focused on critical reliability issues (P0/P1) related to memory leaks, session state recovery, and message delivery across various channels (Telegram, Discord, Feishu). While no new releases were published, the high number of active PRs (377) and the presence of release-validation issues indicate an upcoming release (v2026.8.1) is being prepped. The "clawsweeper" automated triage system is actively tagging issues, many of which are awaiting maintainer review and product decisions, suggesting a bottleneck in human review rather than a lack of community reporting.

### 2. Releases

No new releases were published in the last 24 hours. The most recent release candidate is `v2026.8.1-beta.2`, which is currently undergoing community validation (Issue #125626).

### 3. Project Progress

The project is primarily in a bug-fixing and hardening phase rather than adding new features. Key merged or closed PRs today (from the top 30 by comment count) include:

- **macOS fix:** `fix(mac): keep node service aligned with the latest connection mode` (#127732) - Fixes an issue where macOS users could end up with the node service running in the wrong mode after switching between local and remote Gateways or after an app update.
- **Plugin Compatibility:** `fix(plugins): restore shipped channel compatibility` (#126003) - Aims to restore deprecated channel config schemas for stable Slack, Discord, Signal, and Microsoft Teams packages, indicating a potential regression in a recent refactor.

Several other high-priority PRs are open and awaiting review or author attention, indicating ongoing work but not yet merged.

### 4. Community Hot Topics

The most active community discussions are centered around severe reliability and stability problems:

- **Critical Gateway Memory Leak** (#91588): With 23 comments, this is the hottest topic. Users report RSS memory growing from 350MB to 15.5GB, causing OOM crashes and restart loops. This is a major blocker for production users.
- **Codex PreToolUse Hook CPU Spikes** (#91009): A P1 issue with 22 comments where native hook relays spawn CPU-bound processes, stalling the gateway RPC. This highlights friction with the Codex integration.
- **Codex-Backed Telegram Turn Timeouts** (#87744): A P1 issue with 18 comments where Telegram turns never reach completion, resulting in no final answer being delivered.
- **Configurable Streaming Watchdog** (#68596): With 16 comments and 8 👍, this is a popular feature request. Users want to configure the timeout for models with extended reasoning, as the current 30s limit causes false positive warnings.

**Analysis:** The community is overwhelmingly focused on the same pain points: **message loss, session state corruption, and gateway crashes**. The underlying need is for a more robust and reliable runtime, particularly when integrating with other AI tools like Codex.

### 5. Bugs & Stability

Bugs and stability issues are the dominant theme today. The most severe (P0/P1) issues include:

- **P0: SQLite Corruption Recurrence** (#126821): A critical regression on `2026.8.1-beta.2` where pristine SQLite databases develop corruption within 15-24 hours, leading to a "paralyzed gateway" mode. This is a release blocker.
- **P0: Gateway Memory Leak** (#91588): Critical memory leak causing OOM crashes and restart loops. No fix PR is currently linked.
- **P0: totalTokens Inflation** (#125333): A data integrity bug where token usage is inflated, with the previous fix being incomplete. This distorts usage billing/reporting.
- **P1: Telegram Outbound Deliveries Stuck** (#126246): Agent runs complete but replies are stuck in `send_attempt_started` and lost on restart.
- **P1: Unhandled Playwright Assertion Crash** (#45224): An unhandled error in a CDP session crashes the entire Gateway.
- **P1: Zombie Process Leak** (#97616): Unreaped child processes accumulate over time, causing runtime degradation.
- **P1: Context Usage Drop** (#108215): Context usage inexplicably drops without compaction, suggesting potential state loss.

Many of these high-severity issues remain open without linked fix PRs, indicating that the core stability issues are still being investigated.

### 6. Feature Requests & Roadmap Signals

While bug fixes dominate, several feature requests signal future roadmap directions:

- **Durable Delivery Semantics** (#87561): A maintainer-led issue to define final fallback delivery semantics across all channels, suggesting a deep architectural effort to solve message loss problem definitively.
- **Configurable Streaming Watchdog** (#68596): Likely to be implemented soon as it's a simple configuration change that addresses a common pain point.
- **Skill Priority Configuration** (#50199): Users want more control over which skill is used when overlaps exist.
- **Persistent Task-Status Surface** (#52640): A request for a first-class status UI for long-running tasks, indicating a desire for better observability.
- **Slack Modal Support** (#88154): A request to enrich interactive workflows within Slack.

**Prediction:** The next stable release (v2026.8.1) will likely focus almost exclusively on stability fixes for the P0/P1 issues above. Features like the configurable watchdog and durable delivery semantics are strong candidates for subsequent releases, but may be too risky to include in the current stabilization cycle.

### 7. User Feedback Summary

User sentiment is a mix of frustration and urgency, primarily driven by production incidents:

- **Frustration with instability:** Many P1 issues describe production-degrading failures, such as OOM crashes (#91588), silent message drops (#126246, #87744), and account lockouts due to OAuth failures (#86215, #83598).
- **Need for better diagnostics:** Users report silent failures where they cannot tell if the problem is context overflow (#58957), a watchdog timeout (#68596), or a provider outage (#69242). The lack of actionable diagnostics is a recurring theme.
- **High praise for the system:** Feature requests like MathJax support (#42840) with 10 👍 show users are using OpenClaw for complex, high-value tasks and want the UI to catch up with their workflow.
- **Concern from production users:** One production user explicitly requested guidance on safe upgrade paths after being affected by a bug (#123799), highlighting the risk of deploying unstable versions in critical environments.

### 8. Backlog Watch

Several older, high-severity issues remain open and require maintainer attention. These have yet to receive a clear fix or product decision, even with the "clawsweeper" bot actively tagging them:

- **Hardcoded Working Path** (#51429): An older bug (from March) where a developer's personal path was merged into the code, causing user directories to be created in the wrong place. The issue is marked `needs-maintainer-review` and `needs-product-decision`.
- **Incident: OpenClaw Error Handling** (#53408): A bug where `write`/`exec` tool parameters are silently dropped after long conversations. This has been open since March and is marked for maintainer review.
- **Subagent Completion Delivery Loss** (#67777): A P1 issue from April where subagent completions can be lost, causing stalled sessions. Marked for maintainer review.
- **Feishu Bot Identity Race Condition** (#77717): A P1 issue from May causing permanent bot disconnection, which has a linked PR but is stalled.
- **Codex OAuth Refresh Dead-End** (#83598): A P1 issue from May where OAuth refresh failures can wedge an agent, despite a previous fix, indicating the fix was incomplete.

These issues, some untouched for months, represent a significant risk to user trust and indicate that **maintainer bandwidth is a primary bottleneck** in the project's ability to resolve critical bugs quickly.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-22

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is undergoing a critical maturation phase characterized by a shift from feature velocity to reliability hardening. Projects across the spectrum—from core reference implementations like OpenClaw to specialized tools like NanoBot and CoPaw—are grappling with the same foundational challenges: message delivery guarantees, session state persistence, memory integrity, and cross-platform consistency. The ecosystem shows active community contribution across all tiers, but maintainer bandwidth appears to be a genuine bottleneck, with issues waiting weeks for decisions and PRs lingering in review. There is a clear bifurcation emerging: large general-purpose platforms (OpenClaw, NanoBot, IronClaw) focusing on architectural consolidation and stability, while smaller projects (PicoClaw, NullClaw) iterate rapidly on feature breadth. Security and data-privacy concerns (prompt injection, credential leakage, external data egress) are becoming first-class concerns, signaling enterprise adoption pressure.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merge/Close Rate | Release Status | Health Score* |
|---------|:---:|:---:|:---:|:---:|:---:|
| **OpenClaw** | 1,000 updated | 377 open | Not tracked | v2026.8.1-beta.2 (in validation) | ⭐⭐ (maintainer bottleneck) |
| **NanoBot** | 5 updated | 37 updated | 62% (23/37) | No release in window | ⭐⭐⭐⭐⭐ (healthy velocity) |
| **Hermes Agent** | 50 updated | 50 updated | 16% (5/100) | **v0.20.5 (released)** | ⭐⭐⭐ (active but plateaued) |
| **PicoClaw** | 1 new | 3 closed | 100% | No release in window | ⭐⭐⭐⭐⭐ (focused & efficient) |
| **NanoClaw** | 1 filed | 24 updated | 46% (11/24) | Pre-release cycle | ⭐⭐⭐⭐ (coordinated push) |
| **NullClaw** | 0 | 1 open | — | No release in window | ⭐⭐⭐⭐⭐ (quiet but stable) |
| **IronClaw** | 15 updated | 36 updated | 44% (16/36) | No release in window | ⭐⭐⭐⭐ (CI-focused sprint) |
| **LobsterAI** | 0 new | 12 merged | 100% | **2026.8.21 (tagged)** | ⭐⭐⭐⭐ (healthy cleanup) |
| **TinyClaw** | — | — | — | — | ⭐ (no activity) |
| **Moltis** | 2 filed | 8 updated | 13% (1/8) | No release in window | ⭐⭐⭐ (needs review capacity) |
| **CoPaw** | 34 updated | 36 updated | 71% (15/21) | v2.1.1-beta.2 (bump merged) | ⭐⭐⭐⭐ (accessible & active) |
| **ZeptoClaw** | — | — | — | — | ⭐ (no activity) |
| **ZeroClaw** | 50 updated | 50 updated | 4% (2/50) | No release in window | ⭐⭐ (large backlog, security focus) |

*Health Score is a qualitative assessment based on merge velocity, response latency, and backlog health—not an objective metric.

---

## 3. OpenClaw's Position

**Advantages:**
- **Scale & Community Dominance**: 1,000+ issues/PRs updated in 24h—an order of magnitude beyond any peer. This represents the largest user base and most active contributor community in the ecosystem.
- **Channel Breadth**: Telegram, Discord, Feishu, Slack, Signal, Microsoft Teams—a wider integration matrix than most peers (only NanoClaw approaches this breadth).
- **Feature Richness**: The volume of feature requests (7,000+ issues) demonstrates a mature, widely-adopted platform that users build real workflows on.

**Technical Approach Differences:**
- OpenClaw is a **monolithic orchestration layer** integrating multiple AI tools (Codex, Claude, etc.) rather than a single-model agent. It treats channels as first-class reliably-delivered surfaces (with durability semantics being a P0 architectural initiative).
- In contrast, NanoBot is **provider-agnostic with a typed abstraction layer** (LLMUsage contract, trajectory backend), suggesting less emphasis on channel reliability and more on model diversity.
- Hermes Agent takes a **laws/invariants-driven architecture** approach (proof-carrying state) — a deeply opinionated reliability philosophy whereas OpenClaw is more pragmatic/empirical.

**Community Size Comparison:**
- OpenClaw: ~1,000 issues/PRs updated/24h → massive
- ZeroClaw / CoPaw: ~50/36 each → large
- NanoBot / IronClaw: ~37/36 PRs → medium-large
- PicoClaw / NullClaw / Moltis: <10 items each → small but engaged

**Key Challenge**: OpenClaw's greatest advantage—scale—is also its bottleneck. The "clawsweeper" bot tags issues, but human maintainer review is the gating factor, leaving P0/P1 issues (memory leaks, SQLite corruption) unaddressed for weeks.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|-----------|----------|----------------|
| **Message Delivery Reliability** | OpenClaw, NanoBot, Moltis | Durable delivery semantics, no silent drops, retry logic, delivery ordering |
| **Session State Integrity** | OpenClaw, Hermes, CoPaw, ZeroClaw | Watermark preservation, session recovery after restarts, state persistence across crashes |
| **Memory/Context Management** | NanoBot, CoPaw, ZeroClaw, IronClaw | Cursor advancement, context compaction, storage growth control (CoPaw's 7.6GB DB) |
| **Update/Deployment Reliability** | Hermes, LobsterAI, OpenClaw | Windows-specific upgrade paths, post-update gateway health, transactional deployments |
| **Security/Trust Hardening** | NanoBot, IronClaw, ZeroClaw, Moltis | Prompt injection detection (PromptGuard), credential egress control, subprocess isolation, redirect-chain validation |
| **Cross-Platform Consistency** | LobsterAI, CoPaw, ZeroClaw, Moltis | Windows/macOS/Linux parity in desktop apps, platform-specific hooks (shell, clipboard) |
| **Configuration Discoverability & Honor** | CoPaw, ZeroClaw, Moltis, Hermes | Config values silently ignored, hardcoded limits vs. user-configured values |
| **Observability & Diagnostics** | OpenClaw, ZeroClaw, NanoBot | Embedding health checks, tool-result truncation visibility, actionable error messages |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architecture |
|---------|-------------|---------------|--------------|
| **OpenClaw** | Multi-channel orchestration, tool integration | Production users, multi-platform automation | Monolithic gateway with driver-based channel abstraction |
| **NanoBot** | Model-agnostic provider abstraction | Developers wanting LLM flexibility | Typed provider contracts, tiered memory system |
| **Hermes** | Reliability via formal invariants | Enterprise/ops-focused deployments | "Laws" architecture, proof-carrying state, fleet management |
| **PicoClaw** | Lightweight protocol service | Service providers, API consumers | Minimalist core with expandable protocol support |
| **NanoClaw** | Multi-instance, multi-channel breadth | Power users managing many bots | Skill registry, driver contracts, named bot instances |
| **NullClaw** | Provider gateway aggregation | Users needing multi-provider failover | OpenAI-compatible provider pattern, aggregation gateways |
| **IronClaw** | Sandbox credential mediation, CI health | Developer platform teams | One-persistent-sandbox-per-user, CI infrastructure investment |
| **LobsterAI** | Desktop library/file management + DSH | Enterprise Windows/Mac users | Desktop-first, DSH (DeepSeek Harness) runtime |
| **Moltis** | Integration reliability (WhatsApp, Slack) | Chat-heavy workflows | Channel-focused fixes, cron/scheduler hardening |
| **CoPaw** | Desktop UX, tool-call visibility | Professional users, research workflows | Desktop WebView2 app, Qwen-model-centric, MCP integration |
| **ZeroClaw** | Security policy enforcement | Security-conscious deployments | SOP engine, risk-blocking commands, plugin isolation |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (High Velocity):**
- **NanoBot**: 62% merge rate; new features (DeepSeek V4 Flash Vision, PromptGuard) land within days of PR.
- **NanoClaw**: Coordinated multi-channel push; core team actively driving registry/driver standardization.
- **CoPaw**: 15 PRs closed today, including a major testing-debt payoff (12 milestones closed) and Hub infrastructure.
- **LobsterAI**: Healthy release cycle with 2026.8.21; effective backlog cleanup (April-era items finally merged).

**Tier 2 — Stabilizing with Dedicated Sprint:**
- **OpenClaw**: Stabilization phase for v2026.8.1; high issue volume but limited merge velocity.
- **Hermes**: Rolling-patch strategy (v0.20.5) with architectural refactoring (large-file decomposition complete).
- **IronClaw**: CI expedite sprint; 16 merges today, forward-porting regressions, sandbox v3 iteration.
- **ZeroClaw**: Security hardening sprint; 2 merges but many PRs in review.

**Tier 3 — Quiet / Maintenance Mode:**
- **PicoClaw**: Small, efficient merges; no open issues to address.
- **NullClaw**: Single PR in review; no active issues.
- **Moltis**: Active PRs, but slow merge cadence points to maintainer bandwidth constraints.

**Inactive:**
- **TinyClaw**, **ZeptoClaw**: No activity in 24h; may be dormant.

---

## 7. Trend Signals

**Signal 1: Reliability is the new feature.**
Communities across projects demand "quietly correct" behavior over new features. Silent failures (config ignored, messages dropped, sessions lost) are the #1 user pain point. The next competitive differentiator will be **invisible correctness and transparent diagnostics** rather than model support.

**Signal 2: Multi-provider and model-switching ergonomics.**
NanoBot (typed LLM contract), NullClaw (Eden AI gateway), and CoPaw (per-session model overrides PR stuck in review) all point to a shared user need: **switching models at runtime** without config edits or restarts. The UI-accessible model picker is becoming table stakes for AI assistants.

**Signal 3: Security is the price of enterprise adoption.**
Cross-project investment in prompt injection detection (NanoBot), subprocess isolation (ZeroClaw), credential egress controls (IronClaw), and redirect-chain validation (NanoBot) signals the enterprise door opening. **Vendors that cannot demonstrate security posture will stall in the enterprise segment.**

**Signal 4: Memory is the last frontier.**
Memory cursor bugs (NanoBot), 7.6GB history.db bloat (CoPaw), context window caps ignoring configs (ZeroClaw), and memory data-egress privacy (IronClaw) all underscore that **memory management is the most technically challenging, least solved problem** — a massive differentiation opportunity for whoever converges on a robust, private, and correct memory subsystem.

**Signal 5: The AI assistant category is quietly becoming a developer platform.**
"Hub" infrastructure (CoPaw's QwenPaw Hub), fleet management (Hermes #91277), multi-tenant multi-bot instances (NanoClaw), and persistent sandboxes (IronClaw) indicate the next wave is **deploying at scale** — not single-user tinkering. This is where the winner-takes-most battle will be fought.

**Signal 6: Desktop quality and UX polish differentiate.**
Projects with desktop clients (LobsterAI, CoPaw, Hermes, NanoClaw) report consistent platform-specific complaints: Windows WebView2 crashes, macOS unresponsive windows after sleep, and taskbar obscuring fullscreen. As AI assistants move beyond the terminal, **desktop-native quality will be a critical adoption gate** for non-developer users.

---

*Report generated from community digest data for 2026-08-22. Health scores are qualitative assessments based on merge velocity, response latency, and backlog health.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-22

## 1. Today's Overview

NanoBot is in a period of high development velocity, with 37 pull requests updated in the last 24 hours and a 62% merge/close rate (23 of 37). The project shows strong maintainer engagement, though no new releases were published in this window. The active PR pipeline is substantial with 14 open PRs, suggesting a significant batch of improvements in flight. Bug-fix activity focuses on reliability concerns — cron job persistence, streaming retry semantics, and memory cursor advancement — while feature work explores typed provider contracts, new search providers, and provider-specific model support. Community issue volume is moderate (5 updated issues), with all but one resolved, indicating a healthy triage process.

## 2. Releases

No new releases were published in the last 24 hours. No changelog, migration notes, or version-specific information to report.

## 3. Project Progress

**23 merged/closed PRs** moved through the pipeline today. Key merged work includes:

- **[#5407 — fix(cron): retire persisted heartbeat/dream system jobs when disabled](https://github.com/HKUDS/nanobot/pull/5407)** — Resolves a regression where setting `gateway.heartbeat.enabled` or `agents.defaults.dream.enabled` to `false` did not actually stop previously persisted cron jobs, which continued firing and burning tokens.
- **[#5442 — fix(dream): advance cursor when tool errors were recovered](https://github.com/HKUDS/nanobot/pull/5442)** — Fixes the memory cursor stuck-state (Issue #5441); a Dream run with recovered tool errors is now considered complete and progress is persisted.
- **[#5478 / #5479 — typed LLM usage contract + unified provider usage backend](https://github.com/HKUDS/nanobot/pull/5478)** — Replaces dynamic provider usage dictionaries with an immutable typed `LLMUsage` contract and adds a trajectory backend that records every provider attempt (incl. fallbacks, errors, cancellations).
- **[#5476 — feat(tui): render LaTeX as Unicode](https://github.com/HKUDS/nanobot/pull/5476)** — Improves TUI readability of mathematical content while preserving code blocks and pathological formulas verbatim.
- **[#5474 — feat(providers): support DeepSeek V4 Flash Vision](https://github.com/HKUDS/nanobot/pull/5474)** — Registers `deepseek-v4-flash-vision-exp` for the DeepSeek Responses API, with structured multimodal content preserved for vision models.
- **[#5477 — fix(webui): keep iOS PWA controls inside safe area](https://github.com/HKUDS/nanobot/pull/5477)** — Resolves PWA layout issues on iOS with correct `viewport-fit` and theme-color synchronization.
- **[#5414 — fix(slack): validate file downloads across redirects](https://github.com/HKUDS/nanobot/pull/5414)** — Security hardening: validates Slack file downloads across the full redirect chain to prevent crafted-URL redirect attacks.
- **[#1149 — feat(safety): Add PromptGuard for prompt injection detection](https://github.com/HKUDS/nanobot/pull/1149)** — A long-running feature (from Feb 2026) finally merged: detects system-prompt overrides, role confusion, and tool-call JSON injection attempts.
- **[#1592 / #2063 — Lumina Windows app + Tauri desktop shell](https://github.com/HKUDS/nanobot/pull/1592)** — Desktop app finalization: local-first installer flow, PyInstaller sidecar, and Windows build fixes. Both closed today.

## 4. Community Hot Topics

- **[#5198 — "Not possible to change models in a specific session"](https://github.com/HKUDS/nanobot/issues/5198)** (4 comments, closed) — The most discussed issue this window. Users expect to switch models via the UI blip, not only through `/model` commands. The current architecture treats the primary model as fixed per instance, with others as fallback only. This points to a UX expectation gap vs. cloud AI interfaces.

- **[#1168 — Notion MCP connection failure](https://github.com/HKUDS/nanobot/issues/1168)** (2 comments, closed) — A user unable to connect NanoBot to Notion's MCP server despite valid API keys, while the same credentials work in Claude. Suggests an MCP compatibility or handshake issue specific to NanoBot's MCP client implementation.

- **[#5441 — Dream cursor permanently blocked by recovered tool errors](https://github.com/HKUDS/nanobot/issues/5441)** (0 comments, closed) — This issue (fix merged as #5442 today) highlights a subtle but impactful bug: valid memory edits were being silently discarded because an earlier tool error marked the whole run as failed. The underlying concern is persistence integrity in autonomous memory systems.

- **[#5234 — mst-python metasearch provider (PR, open)](https://github.com/HKUDS/nanobot/pull/5234)** — A new search provider aggregating DuckDuckGo, Google, Brave, Bing via Reciprocal Rank Fusion. Signals community interest in multi-engine search quality.

## 5. Bugs & Stability

Ranked by severity:

1. **[HIGH] #5441 — Dream cursor permanently blocks on recovered tool errors (fixed)](https://github.com/HKUDS/nanobot/issues/5441)** — Memory system could stall indefinitely, duplicating edits on every subsequent run. **Fix merged: PR #5442**.
2. **[HIGH] #5407 — Disabled heartbeat/dream jobs keep firing (fixed)](https://github.com/HKUDS/nanobot/pull/5407)** — Configuration changes silently ignored, causing ongoing token consumption. **Fixed and merged today**.
3. **[MEDIUM] #5454 — Streaming providers skip retry once content streamed (fixed)](https://github.com/HKUDS/nanobot/issues/5454)** — Mid-stream `server_error` events after initial content are not retried, producing truncated responses. **Fix in the works; issue closed**.
4. **[MEDIUM] #5463 — DingTalk does not drain background tasks (open)](https://github.com/HKUDS/nanobot/issues/5463)** — Inbound messages on DingTalk fire `asyncio.Task` objects without terminal observers; a task set may never be drained, risking unbounded task accumulation and leaked resources.
5. **[MEDIUM] #5457 — Channel dispatcher exception stops outbound delivery (PR open)](https://github.com/HKUDS/nanobot/pull/5457)** — A single outbound message error kills the dispatcher task; all further delivery halted until restart. Fix proposed and under review.

## 6. Feature Requests & Roadmap Signals

- **Model switching at runtime (Issue #5198)** — Users clearly expect the ability to switch the active model mid-conversation from the UI. The `/model` command exists but appears incomplete. Given the issue's visibility, this is a strong candidate for a near-term UI enhancement.
- **Manual-only skill invocation (PR #5405, open)** — Community-driven proposal to add `disable-model-invocation: true` for side-effect-heavy skills (deployment, publishing). Signals a need for safer skill governance; likely to merge given maintainer activity.
- **Unified typed provider contract (PR #5480/#5481, stacked)** — The trajectory/usage backend refactor suggests NanoBot is investing in observable, tested provider behavior — a prerequisite for better cost management and debugging.
- **Metasearch provider (PR #5234, open)** — Aggregated search results via RRF would materially improve research-driven agent workflows. Author has a full test suite; may land soon.
- **Turn observability in WebUI (PR #5420, open)** — Projecting one answer surface per turn with ordered reasoning and tool activity suggests a notable UX upgrade for debugging agent behavior.
- **DeepSeek V4 Flash Vision support (merged)** — Follows the trend of rapid support for new model families; community can expect more provider-specific model additions as vendors release.

## 7. User Feedback Summary

- **Feature-gap frustration**: The most commented-on issue (#5198) reflects frustration that NanoBot doesn't match cloud AI model-switching ergonomics. Users want UI-level control, not config-level.
- **MCP compatibility pain**: The Notion MCP failure (#1168) shows MCP server interoperability remains a rough edge, particularly for non-OpenAI MCP servers. This is a real onboarding friction point.
- **Autonomy trust concerns**: The Dream cursor bug (#5441) — where valid memory edits were silently rejected — would undermine user confidence in autonomous memory features. The quick fix (1 day) demonstrates maintainers take this seriously.
- **Silent configuration failures**: The cron job persistence bug (#5407, user-visible token burn) surfaced another instance of "config says disabled but behavior says enabled" — a class of issue that erodes trust in declarative settings.

## 8. Backlog Watch

- **[#5234 — mst-python metasearch provider (PR, open since Aug 3)](https://github.com/HKUDS/nanobot/pull/5234)** — Ready with comprehensive tests; a maintainer review/merge decision is overdue (19+ days).
- **[#5405 — Manual-only skill invocation (PR, open since Aug 16)](https://github.com/HKUDS/nanobot/pull/5405)** — Small, well-scoped change; waiting for review.
- **[#5379 — Memory consolidation input preservation (PR, open since Aug 13)](https://github.com/HKUDS/nanobot/pull/5379)** — Addresses potential data loss in history consolidation; rebased onto current flow but still awaiting merge.
- **[#5420 — Turn observability in WebUI (PR, open since Aug 18, flagged conflict)](https://github.com/HKUDS/nanobot/pull/5420)** — Valuable UX work but marked with a conflict — needs maintainer rebase/assistance.
- **[#5463 — DingTalk background task leak (issue, open)](https://github.com/HKUDS/nanobot/issues/5463)** — No maintainer response or fix PR yet; could indicate an async-resource leak if confirmed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-22

## 1. Today's Overview

Hermes Agent is in a phase of intense architectural consolidation and reliability hardening. The project remains highly active with 50 issues and 50 PRs updated in the last 24 hours, though the volume shows a plateau of open work (47 open issues and 48 open PRs) rather than rapid closure. Activity is dominated by a deliberate campaign to codify "executable laws" and "proof-carrying" invariants across subsystems—repeatable patterns addressing false success, session-state watermarks, update reliability, and platform parity (Discord, Slack, WhatsApp). A new patch release (v0.20.5) was tagged, rolling up ~323 PRs, but several high-priority bugs (P2) in Windows update, desktop session handling, and provider-specific title generation remain open and are actively being worked. The community is highly engaged, with long-running meta-issues (e.g., #78647 with 78 comments) serving as central coordination points for large refactoring efforts.

## 2. Releases

**v2026.8.19 — Hermes Agent v0.20.5 (Patch Release)**

This rolling patch release, tagged August 19, consolidates ~323 PRs merged since v0.20.4 into a stable tagged version for downstream consumers. Key characteristics:

- **Stability-focused:** This is a patch release designed to provide a stable anchor point; no breaking changes or migration notes are indicated in the release description.
- **Consolidation:** It acts as a rollup of accumulated bug fixes, performance improvements, and feature work that landed over the preceding period, serving as a reliable install target for Docker images and hosted deployments.
- **Context:** The release was tagged just before a new wave of architectural issues and PRs were filed, meaning v0.20.5 is the stable base against which the current reliability campaigns are being built.

## 3. Project Progress

While only 3 issues and 2 PRs were closed/merged in the last 24 hours, the development pipeline is full of active work. Notable closed items include the major refactoring epic **#78647 (Large-file decomposition: 20/20 done)** and a PR restack for dependency security (**#91906**). Key advances in active PRs include:

- **Windows Gateway Reliability:** PR **#84409** addresses the second half of the Windows post-update spawn bug (#84185) by escaping the parent job via Task Scheduler. PR **#91956** further hardens this by refreshing the gateway launcher for every profile, not just one, healing stale `pythonw.exe` launchers.
- **Provider-Specific Fixes:** PR **#91957** directly targets the Gemini session title bug (#91927) by disabling thinking tokens by default for auxiliary title generation. PR **#91965** fixes graded `reasoning_effort` emission for `glm-5.3` models on the opencode-go profile.
- **Delegation & Context Isolation:** PR **#91970** fixes `max_spawn_depth: 0` being silently coerced to `1`, enabling "parent-only" mode. Concurrent PRs **#91968** and **#91971** both address context isolation for the embedded Kanban dispatcher to prevent ContextVar leakage into child processes.
- **Desktop UX:** PR **#91966** adds a confirmation dialog for guarded model switches, fixing a UX gap where a successful `config.set` with `confirm_required: true` was ignored.
- **Feature Work:** PR **#91838** introduces an opt-in adaptive WhatsApp routing fast lane using a lighter model for DIRECT responses, and PR **#91963** exposes durable child attribution IDs (delegation_id, subagent_id) in task results for better observability.

## 4. Community Hot Topics

The most active discussions reveal a strong community focus on core reliability and vision alignment.

- **#78647 — Large-file decomposition (78 comments, CLOSED):** This now-closed epic was the most engaged topic, underscoring a community-wide consensus and policy on sharding god-files. Its completion marks a significant milestone in code maintainability.
- **#66616 — Skills index degradation (72 comments, OPEN):** A persistent, nagging infrastructure issue where the Skills Hub's index becomes stale (29.8h old vs. 26h limit). The high comment count indicates this is a recurring operational headache for the team and automated tooling, not just a theoretical concern.
- **#91277 — Fleet update reliability (7 comments, OPEN):** Filed this week as a P1 tracking issue, it consolidates ~30 open issues and ~15 open PRs under one umbrella: "updating a fleet is imperative-per-platform spaghetti." The community is directly requesting a unified deployment plan to replace piecemeal fixes.
- **Platform Parity Campaigns:** Meta-issues for **Discord (#79564)** and **WhatsApp (#79890)** continue to accumulate comments, serving as a central ledger for bringing these surfaces into full alignment with their respective official APIs (Discord API v10, WhatsApp Business Platform Cloud API).
- **Architecture Vision:** Issues like **#90866 (Proof-carrying state)** and **#91230 (Exact-object completion as sixth law)** are generating focused discussion on evolving Hermes's core laws, indicating a community deeply invested in the project's long-term architectural integrity.

## 5. Bugs & Stability

Several high-priority (P2) bugs were filed or updated this week, with fix PRs often materializing rapidly.

- **Windows Gateway Startup Liveness (P2):** **#91675** reports the gateway still prints ✓ then dies after the 6s liveness poll on cold-start. The fix is being pursued in PR **#84409** (schtasks escape) and **#91956** (launcher refresh for all profiles).
- **Desktop Unresponsiveness on macOS Wake (P2):** **#89083** reports a permanently unresponsive chat window after sleep/wake due to undetected half-open WebSockets, with reconnect guarded by `gatewayOpen()`. No fix PR is linked yet.
- **Session Title Mangled on Gemini (P2):** **#91927** was filed and fixed within the same day by PR **#91957**, demonstrating an efficient bug-fix loop for provider-specific issues.
- **Session & Compression Watermarks (P2):** **#88758** and **#88740** both address critical bugs where durable row-ID watermarks are lost during replay cleanup or child restores. These are complex, architectural fixes with active discussion but no merged PR yet, representing a high-risk area for session state integrity.
- **Approval Routing Error (P2):** **#91684** reports a `4001 "session not found"` error when desktop approval is routed to a non-owning local gateway, indicating a profile-routing defect in multi-profile setups.
- **Installer E2E Failures (P2):** **#88453** tracks persistent failures in the Install & Update E2E workflow due to npm TLS handshakes dropping under high concurrency. A fix has been identified for part of the issue.
- **Other Notable P2s:** **#88758** (raw durable watermark preservation), **#82200** (split authority in GitHub automation), and **#88453** (installer failure) round out the stability concerns.

## 6. Feature Requests & Roadmap Signals

Clear signals point to Hermes's immediate roadmap focusing on **architecture over new endpoints**.

- **Unified Transactional Deployment Plan:** The convergence of **#91277 (Tracking)** and **#88683 (Architecture)** strongly suggests that the next version will feature a single, transactional, and verifiable deployment/update plan, replacing the current fragmented approach. This is the project's #1 identified reliability gap.
- **Proof-Carrying State & Completion:** The series of issues from andrexibiza (e.g., #90866, #90145, #90144, #90049, #91230) advocate for making state and completion *provably correct*. This is less a feature and more a set of deep architectural invariants that will likely be codified in coming refactors, especially around session state, message delivery, and tool execution.
- **Platform Parity is Nearing Completion:** The extensive meta-issues for Discord, Slack, and WhatsApp suggest these campaigns are maturing. We predict the next releases will see these platforms reaching feature parity, with the focus shifting from "gap analysis" to "alignment" and maintenance.
- **Bot Mode Control Plane:** Issue **#91911** proposes a unified control plane for Bot Mode identity, capability, delivery, and cancellation, hinting at a more robust multi-bot architecture in the near future.
- **Desktop Git History Review:** PR **#88757** was closed as invalid, but the *desire* for a rich git history review pane (with graphs, markers, ref filters) in the desktop app is a clear user want, likely to be resubmitted or picked up in a future roadmap cycle.

## 7. User Feedback Summary

User feedback centers on **frustration with system reliability and opaque failure modes**, but also shows a sophisticated user base willing to engage deeply with the architecture.

- **Pain Point — Update & Install:** The most significant pain point is the update/install process, especially on Windows. Users like jrleal10 report cryptic "✓ then dies" failures ( #91675 ), and there is a general feeling that the process is "imperative-per-platform spaghetti" (#91277). The community is not satisfied with patches; they are explicitly requesting a unified plan.
- **Pain Point — Session Management:** Issues like the disappearing session tab bar (#88534) and the permanently unresponsive desktop window after wake (#89083) point to a fragile session-state architecture that degrades user trust.
- **Pain Point — Feature Breakage:** Users have filed bugs where the documentation doesn't match reality (WhatsApp setup guide linking to the wrong bridge, #87041) and where features silently don't work (Guarded model switch in desktop, #91966; GLM-5.3 reasoning dropped, #91965). These "silent failures" are particularly damaging to user confidence.
- **Positive Engagement:** The community is highly constructive. Users are filing detailed, reproducible bug reports and are actively collaborating on large-scale refactoring efforts (e.g., #78647, Discord/WhatsApp parity campaigns). They see the value in the "proof-carrying" architecture direction and are contributing PRs to bring it to life.
- **Feature Need — Delegation & Multi-Profile Control:** Users like ShizkMoon (#91260) highlight that the multi-bot pipeline is currently "fiction" when using a messaging gateway with separate worker profiles, indicating a strong desire for more robust orchestration and SOUL handoff capabilities. The delegation attribution IDs in PR **#91963** are a direct response to this need for better lineage and control.

## 8. Backlog Watch

Several issues and PRs have gone stale or require maintainer decision, representing growing technical debt.

- **#58230 — Kanban review lane dedupe (OPEN since Jul 4):** This PR has been open for over a month with "Approved Phase 2F implementation" in its summary. It touches critical files in the CLI and plugins. Its long duration without merge suggests a complex review process or staleness; it needs active attention or closure.
- **#66616 — Skills index is stale/degraded (OPEN since Jul 18):** Despite being flagged `degraded` and having 72 comments, this automated infra issue remains open. The high-touch nature suggests the fix is not trivial, but it remains a festering operational wart that needs a permanent solution.
- **#50164 — Memory context validation reports (OPEN since Jun 21):** This test-focused PR has been open for two months with no recent comments. It may have been superseded by other memory-related work, but it needs a decision to either rebase, merge, or close.
- **#76385 — Buzz gateway offline presence bug (OPEN since Aug 1):** This bug report (agent appears offline while connected) is marked P3 and has not received a response from maintainers in the data. It's a smaller platform, but the lack of acknowledgment might discourage contributions in that area.
- **Dependency Security (PR #91906, #59934):** While PR **#91906** is being restacked, PR **#59934** (honor NO_PROXY CIDR) was closed this week as a duplicate. The depth of the dependency-security backlog is evident; ensuring the restacked **#91906** lands is critical.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-22

## 1. Today's Overview
Moderate activity day with 3 PRs closed and 1 new feature request opened. The project continues to mature with core protocol expansion (Anthropic Messages API) and tooling quality improvements (WebFetchTool text extraction). Documentation improvements for AI agent contributors are also moving forward. The absence of new releases suggests a stabilization phase, with recent merged work likely accumulating toward the next version. Maintainer responsiveness appears strong given the consistent merge cadence.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
All three PRs closed today represent meaningful feature and quality advancements. Notably, PR **#1158** merged the `anthropic-messages` protocol prefix, enabling native Anthropic API format support via `/v1/messages` endpoints for providers that only support that RFC-compliant schema. This closes issue #269 and directly expands the service compatibility matrix. PR **#647** improved WebFetchTool text extraction by adding HTML entity decoding and block-level newline preservation, improving scraped content fidelity and readability. PR **#1182** refined the `AGENTS.md` file to be more principle-based, enabling LLM agents to understand build architecture more efficiently without outdated Go version requirements.

- [PR #1158 — anthropic-messages protocol](https://github.com/sipeed/picoclaw/pull/1158)
- [PR #647 — WebFetchTool text extraction improvements](https://github.com/sipeed/picoclaw/pull/647)
- [PR #1182 — agents.md documentation overhaul](https://github.com/sipeed/picoclaw/pull/1182)

## 4. Community Hot Topics
The single open issue today, **#3342**, introduces a highly interesting design proposal: opt-in queueing of busy-session messages instead of the current interrupting behavior. While it has no comments yet, the architectural implication is significant—it blurs the line between synchronous steering and asynchronous task queues, potentially enabling a new multi-task execution model. The lack of reactions or comments may simply reflect that the issue is less than a day old; it has the potential to spark meaningful architecture debate given its impact on task orchestration semantics.

- [Issue #3342 — Opt-in after-turn steering mode](https://github.com/sipeed/picoclaw/issues/3342)

## 5. Bugs & Stability
No explicit bug reports, regression issues, or crash reports surfaced today. The merged PRs were purely feature/quality improvements and documentation. The WebFetchTool enhancement technically addresses correctness issues in extraction (entity parsing, structure retention), so that could be considered an implicit quality fix, but no severity ranking is warranted as no open bug issues exist in the 24-hour window.

## 6. Feature Requests & Roadmap Signals
Issue **#3342** is the clearest roadmap signal today: a proposed "after-turn steering mode" that queues user messages while the agent is mid-turn, deferring interruption until the current task completes. The term "opt-in" suggests this would preserve the default steering semantics while adding a new configuration option. Given the recent focus on protocol adaptation (Anthropic Messages) and reliability improvements, this feature aligns with a trend toward more robust, non-disruptive multitasking experiences. It is plausible this lands in the next minor release if accepted and implemented with configurable behavior, perhaps as a session-level or model-level setting.

## 7. User Feedback Summary
The feature request in issue #3342 highlights a real pain point: users sending follow-up messages mid-task currently experience abrupt cancellation of tool sequences ("Skipped due to queued user message"). The proposal's framing implies a subset of users prefer letting the current turn complete and having their message queued—suggesting that for some use cases (e.g., batch processing, complex chain-of-thought execution), interrupting the pipeline is more harmful than helpful. The user's design emphasizes control and determinism, which echoes broader sentiment in the community around agent reliability and task completeness.

## 8. Backlog Watch
None of the issues or PRs in today's dataset appear stale or unanswered. All closed items were merged promptly, and the one active issue was opened yesterday. There are no long-unanswered items visible in the 24-hour window that require maintainer attention.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for 2026-08-22.

---

## NanoClaw Project Digest — 2026-08-22

### 1. Today's Overview
NanoClaw is in a period of intense, high-velocity development, with **24 PRs** updated in the last 24 hours and **11 merged or closed**. The focus is clearly on breadth and usability: expanding multi-channel support (Telegram multi-bot, Mattermost), formalizing the "registry-backed skills" architecture, and refining the developer experience. The core team (`core-team` label) has been extremely active, handling nearly all of the day's merges. A single, low-volume bug report was filed today, but the primary signal is a tightly-run, well-coordinated push to standardize the skill and driver surfaces, with extensive CI and follow-up work to ensure stability.

### 2. Releases
- **No new releases** were published in the last 24 hours. The project is currently operating in a heavy pre-release development cycle.

### 3. Project Progress
Today saw the merging of a significant chunk of infrastructure work, mainly focused on channel integrations and CI hardening.

- **New Channel & Integration Hardening (Merged):**
    - **Mattermost Support Added** ([PR #3202](https://nanocoai/nanoclaw/pull/3202)): A long-awaited feature, adding Mattermost as a new Chat SDK channel, mirroring the existing Slack implementation.
    - **Dial Channel Setup** ([PR #3050](https://nanocoai/nanoclaw/pull/3050)): The substantial feature adding Dial to the channel picker and wizard was closed out.
    - **WhatsApp Cloud Compatibility** ([PR #3401](https://nanocoai/nanoclaw/pull/3401)): Fixed a dependency issue that made the WhatsApp skill incompatible with the main branch.
    - **Matrix Adapter Fix** ([PR #3403](https://nanocoai/nanoclaw/pull/3403)): Resolved a bug where the Matrix adapter failed under Node 22 due to extensionless ESM imports, using a refresh-safe pnpm patch.
- **Drivers & Tooling (Merged):**
    - **`SessionExecSpec` Contract** ([PR #3429](https://nanocoai/nanoclaw/pull/3429)): A new core abstraction was ratified. Drivers now describe their exec argv (`bin`, `argsTty`, `argsPlain`) to enable interactive terminal attach, a key step for future tooling.
    - **Dependency Bump** ([PR #3439](https://nanocoai/nanoclaw/pull/3439)): Bumped Claude Code CLI and Agent SDK to `2.1.238`/`0.3.238`.
- **Bug Fixes & Refactors (Merged):**
    - **`/add-dial-number` Refactor** ([PR #3433](https://nanocoai/nanoclaw/pull/3433)): Converted the skill to use "nc directives" for consistency with registry-backed skill discovery.
    - **Message ID Integrity** ([PR #3287](https://nanocoai/nanoclaw/pull/3287)): Fixed `getMessageIdBySeq()` to strip the agent-group suffix from inbound platform message IDs, resolving a long-standing data integrity issue.
- **CI & Process (Merged):**
    - Several PRs by `zvi-fried` are now closed, indicating a hard push to stabilize the build: **Registry CI** ([#3424](https://nanocoai/nanoclaw/pull/3424)), **Provider File Events** ([#3402](https://nanocoai/nanoclaw/pull/3402)), and **Stable CI Check** ([#3430](https://nanocoai/nanoclaw/pull/3430)) which fixed the required `ci` check name. This suggests the team is preparing for a release or major stabilization point.

### 4. Community Hot Topics
*Analysis is based on recent activity and direct user reports; comment counts were unavailable in the data.*
- **Template-based Agent Creation** ([PR #3396](https://nanocoai/nanoclaw/pull/3396) & [PR #3428](https://nanocoai/nanoclaw/pull/3428)): The ability to create agents from templates in chat is a major feature in progress. A community PR author, `amit-shafnir`, has multiple related PRs open, indicating high community interest and contribution in this area. The careful re-porting of `#3428` suggests a complex and important feature.
- **Telegram Multi-Bot Setup** ([PR #3436](https://nanocoai/nanoclaw/pull/3436) & [PR #3438](https://nanocoai/nanoclaw/pull/3438)): The push for named bot instances and a wizard that offers to add another bot is a strong signal that users are actively deploying NanoClaw in non-trivial, multi-agent configurations.

### 5. Bugs & Stability
- **HIGH: Card Actions (Buttons) Silently Dropped** ([Issue #3426](https://nanocoai/nanoclaw/issues/3426)): A single, but critical, bug reported today. The `send_card` function's documentation promises interactive `actions` (buttons), but the bridge drops any action without a `url`. This leads to a poor user experience where buttons disappear and agents mistakenly blame the platform. This is a significant issue with the agent-communication contract, as it breaks user trust and causes incorrect agent behavior. No fix PR is linked yet.
- **LOW: Telegram Setup Card Text** ([PR #3431](https://nanocoai/nanoclaw/pull/3431)): An open fix for a minor UX issue where the pairing card instructs users to enter a 6-digit code instead of a 4-digit one.

### 6. Feature Requests & Roadmap Signals
The open PRs authored by `amit-shafnir` strongly signal the project's immediate roadmap focus:
- **Multi-Channel, Multi-Instance Support:** The serial of PRs covering "another Telegram bot" ([#3438](https://nanocoai/nanoclaw/pull/3438)), "named bot instances" ([#3436](https://nanocoai/nanoclaw/pull/3436)), and carrying "the adapter instance" through setup ([#3435](https://nanocoai/nanoclaw/pull/3435)) paints a clear picture: the next version will likely feature first-class support for running multiple adaptive instances of the same channel (e.g., multiple Telegram bots) within a single product or server. This is a crucial step for managing complex, multi-tenant environments.
- **`create_agents` from templates in chat** ([PR #3396](https://nanocoai/nanoclaw/pull/3396) and #3428): A significant usability upgrade. Expect a formal public registry for agent templates in subsequent releases.

### 7. User Feedback Summary
- **Pain Point: Platform Blame on Configuration Failure:** The bug report on card actions ([#3426](https://nanocoai/nanoclaw/issues/3426)) reveals a specific user frustration beyond just a missing feature. The issue is that NanoClaw's own agent *misdiagnoses the problem* (blaming the platform) based on misleading docs, turning a configuration issue into a logic/reasoning fail. This suggests users need clearer, self-consistent documentation and platform capabilities reports.
- **Satisfaction: Active Community & Maintainers:** The volume of work and the collaborative nature of the PR process indicate a healthy and responsive maintainer team, which is a positive signal for project trust and velocity.

### 8. Backlog Watch
- **Templates from Chat - Core Dependency:** While PR #3396 is open, PR #3428 was explicitly reverted and re-filed because the trunk lacked the foundational code from `#3396`. This shows these PRs are a critical path for the upcoming release. The maintainers are working on this in tandem; external community members should wait for these to merge before basing new work on them.
- **Mattermost Integration:** While PR #3202 was closed (presumably merged according to the stats), it's a significant enough new channel that follow-ups might be expected. Watching for any bug reports related to its stability in the coming days would be prudent.
- **Interactive Tooling:** The merge of the `SessionExecSpec` contract ([PR #3429](https://nanocoai/nanoclaw/pull/3429)) lays the foundation for interactive terminal sessions. A logical next step would be a PR to add an "attach" tool to the `ncl` CLI, and backlog watchers should look for this high-impact feature.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for 2026-08-22.

---

# NullClaw Project Digest
**Date:** 2026-08-22

### 1. Today's Overview
Project activity is relatively low today, with no new releases or issue updates in the last 24 hours. The primary focus is a single open Pull Request (#990) that proposes adding a new AI provider gateway, indicating ongoing work in the integrations space. While there is no new code merged today, the pipeline shows a steady, if quiet, development cadence. Overall, the project appears stable, with maintainers likely reviewing the pending feature contribution.

### 2. Releases
No new versions were released in the last 24 hours.

### 3. Project Progress
- **No merged or closed PRs** were recorded today.
- **Active Development:** PR #990 remains open, seeking to add **Eden AI** as an OpenAI-compatible gateway provider. While not merged, its existence indicates active feature development for expanding provider integrations.

---

### 4. Community Hot Topics
- **[PR #990: feat(providers): add Eden AI as an OpenAI-compatible gateway](https://github.com/nullclaw/nullclaw/pull/990)**
    - **Activity:** The only item updated today, authored by MVS-source.
    - **Context:** This PR is the community's current focus. The author proposes adding Eden AI, which aggregates multiple upstream vendors behind a single API key and is EU-based. The implementation leverages the existing `OpenAiCompatibleProvider` class, following the precedent set by PR #922 (NEAR AI Cloud and Atlas Cloud).
    - **Need:** The underlying demand here is for **aggregation and redundancy**. Users want a single key to access multiple models (e.g., for failover or cost optimization) and are looking for providers with specific regional data residency (EU). This suggests a desire for more flexible routing options beyond single-vendor endpoints.

---

### 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. The project appears to be in a stable state regarding known issues.

---

### 6. Feature Requests & Roadmap Signals
- **Provider Ecosystem Expansion:** The submission of PR #990 signals a clear community interest in broadening the supported provider list.
- **"Gateway" Pattern:** Since this is the third PR following the pattern of adding OpenAI-compatible gateways, it is likely the maintainers will accept this PR to align with the existing architecture. We predict that **Eden AI support will be included in the next release**, possibly alongside other gateway providers.
- **Future Direction:** The focus on gateways like Eden AI suggests that future releases may prioritize **multi-provider routing and management** features rather than core logic changes.

---

### 7. User Feedback Summary
- **Positive Sentiment:** The active contribution of a new provider PR suggests that the contributor base finds the current extension process (via `OpenAiCompatibleProvider`) simple and effective enough to build upon.
- **Pain Points (Implicit):** The author of PR #990 specifically mentions the EU-based nature of Eden AI. This often implies a pain point for European users regarding **data privacy (GDPR) compliance**, as many US-based providers may not always offer clear data residency options.
- **Use Case:** Users are clearly seeking to simplify their infrastructure by reducing the number of API keys they manage and gaining access to a wider variety of models without changing their code significantly.

---

### 8. Backlog Watch
- **No items are currently flagged for maintainer attention.** With 0 open issues and no stalled PRs beyond the active one, the project does not have a backlog.
- **Note:** While there is nothing to watch today, maintainers should ensure timely feedback on PR #990 to keep the contributor engaged and maintain this healthy contribution flow.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-22

## 1. Today's Overview

IronClaw is in a high-velocity CI infrastructure stabilization sprint, with a cluster of four coordinated "CI expedite" tracks (Issues #7798–#7801) driving much of the current activity. The project saw 15 issues updated in the last 24 hours and a notably high 36 PRs updated, with 16 merged/closed — indicating a strong merge cadence. The primary focus areas are consolidating CI tooling, fixing regressions on release branches (notably 1.3-era forward-ports), and advancing the sandbox credential mediation and notification-center workstreams. No new releases were published in this period.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

Sixteen PRs were merged or closed today. Key advances:

**CI Infrastructure (Core Focus):**
- **#7805** — [fix(ci): forward-port the clippy 1.98 lint fixes to 1.3](https://nearai/ironclaw PR #7805) — Fixed a blocking CI failure on `release/2026-08-17` where `chunks_exact` lints were failing every PR, regardless of scope.
- **#7797** — [docs(guidance): repo-wide agent-guidance audit](https://nearai/ironclaw PR #7797) — Massive documentation cleanup pruning 21.5k lines, executed by 13 parallel auditors across the repo's guidance layer.

**Sandbox Credential Mediation (Advanced):**
- **#7807** and **#7806** — [feat(sandbox): mediate GitHub CLI credentials](https://nearai/ironclaw PR #7806) — Both merged iterations implementing direct-executable sandbox execution, one-shot credential staging, and invocation-scoped material for `gh` commands. A third, refactored iteration (#7810) remains open, likely superseding these with per-user managed egress.

**Workspace & Telegram Fixes:**
- **#7804** — [fix(workspace): honor IRONCLAW_REBORN_WORKSPACE_ROOT on 1.3](https://nearai/ironclaw PR #7804) — Forward-ported the workspace-root override that had landed on a release branch but never reached `main` or `release/2026-08-17`.
- **#7803** — [fix(telegram): keep paired channels ready and collapse reply drafts](https://nearai/ironclaw PR #7803) — Keeps paired Telegram bots active even when personal credentials are absent; stopped projecting bot pairing as personal auth.

**Stability:**
- **#7796** — [fix(sandbox): preserve failed Railway audit appends](https://nearai/ironclaw PR #7796) — Fail-closed behavior for audit-record append failures with retry preservation.

**Notifications:**
- **#7699** — [feat(notifications): publish actionable run gates](https://nearai/ironclaw PR #7699) — Closed; publishes approval-required/authentication-required/blocked-run events into the durable user inbox with stable IDs.

---

## 4. Community Hot Topics

The most active discussions are clustered around the CI expedite initiative:

- **#7801** [CI expedite T4: canonical preflight gate list](https://nearai/ironclaw Issue #7801) — 3 comments, 2 days old. Active planning with companion PR #7809. Addresses the pain of scattered gate checks across CI and local workflows.

- **#7799** [CI expedite T2: nextest pipeline, full-failure signal, PR unthrottle](https://nearai/ironclaw Issue #7799) — 3 comments, 2 days old. Aims to replace sequential per-binary `cargo test` loops with cargo-nextest, enabling per-test failure roll-ups and faster PR iteration.

- **#7664** [Pluggable memory over MCP: wire the provider, land Mnesis as first consumer](https://nearai/ironclaw Issue #7664) — 2 comments, 8 days old. Long-running epic for external memory binding with Mnesis Core as the first downstream consumer. This drives the related security work in #7808.

- **#7800** [CI expedite T3: PR/queue convergence](https://nearai/ironclaw Issue #7800) — 2 comments. Targets the divergence between green PR runs and red queue runs, with drift guards and missing default-features clippy.

**Underlying need:** The project is tackling developer-experience friction head-on — reducing CI runtime, fixing false-failure signals, and making pre-push checks equivalent to CI checks. This reflects scale pain: 43 scattered toolchain invocations, sequential test binaries, and PR-vs-queue divergence are classic symptoms of a project that has outgrown its original CI setup.

---

## 5. Bugs & Stability

Rising severity order:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#7808](https://nearai/ironclaw Issue #7808) | Memory write path egresses verbatim conversation content; redaction + taint metadata required before ANY external provider binds — a data-privacy blocker for the Mnesis integration | Blocking; no fix PR yet. Prerequisite for #7664 |
| **Medium** | [#7813](https://nearai/ironclaw Issue #7813) | UI regression: "What do you need help with?" heading crops when "Suggested for you" panel appears — layout reflow broken | No fix PR; reported today |
| **Medium** | [#7783](https://nearai/ironclaw Issue #7783) (CLOSED) | LLM timeout policy: non-streaming client can't measure TTFT; 75s finalization deadline kills runs before retry completes — a transport stall destroys the run | Closed today |
| **Medium** | [#7715](https://nearai/ironclaw Issue #7715) (CLOSED) | Telegram connection flow lacks bot-vs-personal-account consent/selection; user not informed which mode they're connecting | Closed today |
| **Low** | [#7805](https://nearai/ironclaw PR #7805) | Clippy 1.98 lint failure on ALL PRs into `release/2026-08-17` — blocked merges | Fixed & merged today |

**Regression patterns:** The `release/2026-08-17` branch continues to be a migration hotspot — both the workspace-root forward-port (#7804) and the clippy fixes (#7805) were needed there. These are likely symptoms of branch-based release drift.

---

## 6. Feature Requests & Roadmap Signals

Several signals point to near-term roadmap priorities:

**Strong signals (already in-progress):**

- **#7792 + #7794** — [Shared page-shell and loading primitives](https://nearai/ironclaw PR #7794) — Open PR migrating 5+ routes to shared `PageScroll`, `PageStack`, and `Skeleton` components. Likely lands this week.
- **#7793** — [Migrate remaining Settings/Admin feedback banners to InlineNotice](https://nearai/ironclaw Issue #7793) — Cleanup of inconsistent UI feedback patterns; small scope.
- **#7812** — [Onboarding suggestions: respect user-level tool permissions](https://nearai/ironclaw Issue #7812) — Enable connected tools during suggestion generation with read-only access. Pairs with #7802 (OOBE suggestions always-on, PR open).

**Design system initiative (long-running):**
- **#7257** + **#7750** — [WebUI design system with Storybook](https://nearai/ironclaw PR #7750) — Phase 1 integration recreated off current `main`, superseding the tangled #7039. Large but stable work; may land as a squashed single commit.

**Sandbox evolution (XL-scoped):**
- **#7810** — [feat(sandbox): mediate GitHub CLI credentials (v3)](https://nearai/ironclaw PR #7810) — Completes the one-persistent-sandbox-per-user runtime with per-user managed egress and invocation attribution.

**Potential next-version candidates:** The CI expedite tracks (T1–T4) are each scoped as independent mergeable units. T1 (#7798, setup-rust composite) and T4 (#7801, canonical preflight) may land earliest as they're largely mechanical. T2 (nextest) is higher-risk and may take a follow-up cycle.

---

## 7. User Feedback Summary

- **Telegram connection confusion** — Users don't know if they're connecting a Telegram bot or their personal account, and there's no consent/selection at the point of connection (Issue #7715, closed in the last day → a bug-bash QA report; fix merged).

- **UI layout regression** — Heading text gets visually cropped when the suggestions panel renders; that panel is being made "always on" (#7802), which makes this regression more impactful (Issue #7813).

- **Onboarding suggestions not grounded in user data** — Today suggestions only use internal search tools, so they're "not grounded in the user's actual data" (Issue #7812). Users want suggestions informed by their connected tools and permissions.

- **CI pain (developer-facing)** — Frequent false failures on release branches (clippy lints failing on every PR regardless of scope) and slow sequential test runs are direct developer-experience complaints driving the expedite tracks.

- **Memory data-privacy concern** — The write path egressing verbatim conversation content to an external provider is a real security concern flagged as a blocking prerequisite (Issue #7808).

---

## 8. Backlog Watch

Items that have gone a long time without closure or maintainer action:

- **#7456** — [fix(reborn): make durable storage profile-agnostic](https://nearai/ironclaw PR #7456) — 12 days open, last updated today. Core refactor of the durable storage layout with security-envelope persistence; risk-medium, size-XL. No reviewers requested visible. This is a foundational tenancy/storage change.

- **#7491** — [feat(coding): omp core-tool contract + engines + benchmark arm](https://nearai/ironclaw PR #7491) — 11 days open, risk-medium, size-XL. Defines the single coding-tool surface (`read`, `write`, `edit`, `glob`, `grep`, `bash`); removes legacy mixed surfaces. Significant API-consolidation work that touches model-facing contracts.

- **#7516** — [feat(webui): operator surface for the IronHub agent link](https://nearai/ironclaw PR #7516) — 10 days open, new contributor (@neo-sky). Adds the IronHub register URL and hub-minted shared key surface to the Extensions page — a deployment-completing UI gap. New-contributor submissions often need maintainer review prioritization.

- **#7257** — [docs(design-system): proposal & plan for WebUI design system](https://nearai/ironclaw PR #7257) — 17 days open, docs-only with low risk. A north-star proposal that several other PRs depend on conceptually; likely waiting on program-level decision rather than code review.

**Maintainer attention flags:** The two XL/risk-medium PRs (#7456, #7491) are the most time-sensitive — both have been open over a week and neither has visible reviewer activity. Given the CI cadence push, these should be either assigned reviewers or explicitly deprioritized to avoid stale-branch drift.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date: 2026-08-22**

---

## 1. Today's Overview

LobsterAI shipped a major release (**2026.8.21**) today, merging 12 pull requests and closing 2 stale issues. The project is in a healthy release cycle, with significant focus on the experimental DeepSeek Harness (DSH) runtime, Windows integration reliability improvements, and a substantial initiative to polish the library/file management experience (`feat(library)` series). Development activity is high, with a large batch of older April-era PRs and issues being officially closed as stale, indicating a successful backlog cleanup effort. The single open PR (#1550) regarding scheduled task delivery modes remains the only unresolved item from today's activity.

---

## 2. Releases

**No new releases tagged in the last 24 hours.** However, PR #2519 ("Release: 2026.8.21") was merged into `main`, signaling an imminent release. Key highlights from this release branch:

- **DeepSeek Harness (DSH) runtime updated** to `0.1.1-rc.1` (PR #2516)
- **Windows integration reliability improvements**
- **Privacy-conscious analytics added** for DSH enablement and workbench usage tracking (PR #2515, #2518)

**Migration Note:** The analytics event architecture was refactored—event building for DSH enable-toggle and workbench opening moved from main-process IPC handlers to a renderer-side service (`src/renderer/services/dshAnalytics.ts`). Developers with custom analytics hooks should verify their integrations target the new renderer service.

---

## 3. Project Progress

**12 PRs merged/closed today**, with several key themes:

### 💠 DeepSeek Harness (DSH) Advancements
- **PR #2516** — Updated DSH runtime to `0.1.1-rc.1`
- **PR #2515** — Added usage analytics for enable toggle and workbench open (fire-and-forget reporting, never throws into IPC callers)
- **PR #2518** — Refactored analytics reporting from main to renderer process for better architectural separation

### 📚 Library & File Management Polish (Major Theme)
- **PR #2514** — Optimized local artifact preview and operations: adjusted preview modal dimensions/overflow for safe-area compliance, removed file deletion entry points to simplify local artifact operations, distinguished empty-state vs. filter-no-results states, added one-click clear for search boxes, and fixed duplicate placeholder replacement in publish quota modals
- **PR #2513** — Feat/2026.8.17 library branch merged with related fixes (`Fixes #(issue number)` placeholder suggests connection to #2514/#2517 work)
- **PR #2517** — Enhanced file sharing and favorites: Unicode-safe filename preservation in share packages, backward compatibility with legacy filenames, improved favorite state instant-updates with rollback on failure, prevented duplicate list refetches, unified quota-limit modal styling/focus/close behavior, plus added constants and automated tests

### 🐛 Stale PR Cleanup (April-era fixes finally merged)
- **PR #1215** — `fix(im)`: Always rebuild chat handler on `setConfig` to avoid stale IM settings (fixes platform-specific credential saves like DingTalk/Telegram never refreshing systemPrompt/sk settings)
- **PR #1218** — `fix(定时任务)`: Reconstructed scheduled task list sorting to solve new tasks appearing randomly in the middle of the list (root cause: UUID v4 string sorting, replaced with meaningful ordering)
- **PR #1219** — `perf(cowork)`: Eliminated invalid re-renders in session list and detail pages (added `React.memo` to `CoworkSessionItem`/`CoworkSessionList`, consolidated 4 independent `useSelector` calls in `CoworkSessionDetail`)
- **PR #1220** — `perf(cowork)`: Eliminated N+1 queries in `recentChats()` and `conversationSearch()` (each session previously triggered 2 separate queries; now batched)
- **PR #1224** — `fix(agent)`: Fixed i18n hardcoding (replaced `'输入文件'` with `i18nService.t('coworkInputFileLabel')`), added Escape key support for `AgentCreateModal`/`AgentSettingsPanel`, and added duplicate-click protection for delete actions

---

## 4. Community Hot Topics

**No issues or PRs with significant comment/reaction activity today** (all items show 0 👍). The most substantive community-driven work was the `feat(library)` series (PRs #2514, #2517), which appears to be ongoing product polish. The stale cleanup closures (#1215–#1224) represent months-old community bug reports and performance fixes finally reaching the release train—these generated zero comments today, but their closure suggests the maintainers are clearing technical debt.

**Analysis:** Low community engagement in the last 24h may indicate a mature user base or a quiet period; however, the volume of merged PRs (12) suggests active maintainer velocity.

---

## 5. Bugs & Stability

**No new bugs reported in the last 24 hours.** Two stale bugs were closed:

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Medium** | **#1217** — Intermittent gateway restarts (3–5 times/day on Windows 10, version 2026.3.26), logs provided by user `blueb0ne` | Closed (stale) | None linked — likely fixed by the Windows reliability improvements in release 2026.8.21 |
| **Low** | **#1223** — i18n hardcoding (`'输入文件'` in prompts for English users), missing Escape key on Agent modals, no duplicate-click protection on delete | Closed (stale) | **#1224** (merged) |

The gateway restart issue (#1217) is worth monitoring—its closure as stale doesn't confirm a fix, but the 2026.8.21 release notes explicitly mention "Windows integration reliability" improvements, which may address it.

---

## 6. Feature Requests & Roadmap Signals

No explicit new feature requests landed today. However, the merged PRs reveal these active roadmap directions:

- **DeepSeek Harness (DSH) maturation** — The `0.1.1-rc.1` update plus analytics instrumentation indicates DSH is moving toward stability, likely preparing for general availability. Expect more DSH-adjacent features (fine-tuning, model switching, cost controls) in upcoming releases.
- **Library/artifact experience overhaul** — The `feat(library)` series (preview polish, deleted file-entry points, empty-state distinction, search UX) suggests a **focus-group-driven UX cleanup** of the artifacts library. Future iterations may add filtering, batch operations, or cloud-sync improvements.
- **Analytics framework** — Moving reporting to renderer-side with documented event shapes (usage-analytics design spec) indicates a **formalized product-analytics pipeline**—expect more product metrics (feature adoption, retention) in later releases.

---

## 7. User Feedback Summary

**Direct user feedback in the last 24h: minimal.** Two stale issues closed today provide the latest signals:

- **Windows reliability is a recurring pain point** — Issue #1217 reported intermittent gateway restarts (3–5×/day) on Windows 10. The 2026.8.21 release addresses Windows integration, but users should monitor for regression.
- **i18n quality matters** — Issue #1223 highlighted that English users were receiving Chinese characters (`输入文件`) embedded in AI prompts. This was fixed by PR #1224, but highlights an ongoing need for i18n audits beyond just UI strings.
- **Scheduled task UX friction** — PR #1218 (merged) fixed a real user pain: newly created cron tasks appeared at random positions in the list due to UUID sorting. This suggests task management workflow was confusing for power users.

**Satisfaction signals:** No complaint threads or negative feedback in the last 24h; the stale closure of multiple April-era issues suggests the maintainers are committed to addressing community-reported pain points, albeit with a lag.

---

## 8. Backlog Watch

**Open PR needing attention:**

- **PR #1550** — `fix(scheduledTask): 投递模式为"不通知"时，去除发送给网关的 channel/to 字段` (Author: `gongzhi-netease`, open since **2026-04-07**)
  - **Status:** Open, last updated 2026-08-21 (today), 0 comments
  - **Issue:** Scheduled tasks created via chat/IM with delivery mode "no notification" (mode=none) trigger Gateway validation errors at runtime ("Channel is required when multiple channels are configured"), while UI-created tasks work fine. Root cause: both creation paths build the delivery object differently.
  - **Why it matters:** This is a **4+ month-old functional bug** affecting a core workflow. The PR appears ready with a clear root-cause analysis. If it has been updated today, perhaps it's pending final review for the next release cycle. Maintainers should prioritize merging this to avoid another stale closure.

---

*Data source: GitHub (netease-youdao/LobsterAI) — snapshot taken 2026-08-22*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-22

## 1. Today's Overview
Moltis shows a **high-velocity development day** with 8 PRs updated and 2 issues filed within the last 24 hours. The project maintains a strong open-source contributor base, with three distinct contributors (rubenssoto, tsauvajon, PeterDaveHello) actively pushing fixes across integrations, security, and localization. A notable focus on **WhatsApp integration improvements** (2 PRs) and **cron/heartbeat reliability** (2 PRs) indicates these are priority areas. One PR was closed/merged, while 7 remain open — suggesting active review cycles. The absence of new releases suggests work is consolidating toward a future version rather than a point release.

## 2. Releases
No new releases in the last 24 hours. The project appears to be accumulating fixes for a future patch/minor release.

## 3. Project Progress
**Merged/Closed today:**
- [#1220 [CLOSED] fix(whatsapp): render Markdown in outbound messages](https://github.com/moltis-org/moltis/pull/1220) — Converts model-generated Markdown to WhatsApp-native markup before delivery, preserving original formatting in session history/web UI. Applied to text messages and media captions.

**Active/Open fixes (advanced):**
- [#1228 fix(whatsapp): persist inbound files for local tools](https://github.com/moltis-org/moltis/pull/1228) — Downloads documents, persists photos/documents via session media interface for `local_path` access. 20MB limit, sanitized filenames.
- [#1227 fix(browser): enable Obscura stealth mode by default](https://github.com/moltis-org/moltis/pull/1227) — New `tools.browser.obscura_stealth` config (default `true`); validated across config/browser crates.
- [#1226 fix(cron): deliver scheduled output to the originating chat](https://github.com/moltis-org/moltis/pull/1226) — Adds `payload.deliver_to_current_chat` shortcut resolving origin destination via gateway-owned channel context.
- [#1225 fix(i18n): update and improve zh-TW Traditional Chinese locale](https://github.com/moltis-org/moltis/pull/1225) — Major rewrite of `connectors.ts`, terminology/style corrections across modules.
- [#1222 fix(web): validate sandbox image requests](https://github.com/moltis-org/moltis/pull/1222) — Restricts image/package validation to admin operators (security hardening).
- [#1208 fix(cron): honor heartbeat active hours when the scheduler fires](https://github.com/moltis-org/moltis/pull/1208) — Fixes `active_hours` never being called by the heartbeat cron job.

## 4. Community Hot Topics
All issues and PRs currently have **zero comments and zero reactions**, indicating a review bottleneck rather than discussion-driven activity. The most notable patterns:

- **Heartbeat/active-hours** ([#1223](https://github.com/moltis-org/moltis/issues/1223), [#1208](https://github.com/moltis-org/moltis/pull/1208)): Both a bug report and fix PR exist for the same root cause — config has no effect. Active coordination between reporter and fixer suggests this is being resolved.
- **WhatsApp file handling** ([#1228](https://github.com/moltis-org/moltis/pull/1228), [#1220](https://github.com/moltis-org/moltis/pull/1220)): Two connected PRs from the same author address inbound/outbound media integrity.

## 5. Bugs & Stability
**Ranked by severity:**

1. **Tools stop working in shared Slack channels** ([#1224](https://github.com/moltis-org/moltis/issues/1224)) — *High severity.* Functional failure in a popular enterprise integration. No assignee or linked fix PR yet.
2. **`active_hours` has no effect** ([#1223](https://github.com/moltis-org/moltis/issues/1223)) — *Medium severity.* Config silent failure; users cannot schedule off-hours. **Fix exists:** PR [#1208](https://github.com/moltis-org/moltis/pull/1208) closes the issue.
3. **Windows shell hooks fail** ([#468](https://github.com/moltis-org/moltis/pull/468)) — *Medium (platform-specific).* Long-standing (since March) cross-platform bug with a complete fix awaiting review.

## 6. Feature Requests & Roadmap Signals
No formal feature requests today. Signals from PRs suggest near-term roadmap focus on:
- **Stealth browser mode** (default-on) — Anti-detection is a deliberate product direction ([#1227](https://github.com/moltis-org/moltis/pull/1227)).
- **Multi-channel media parity** — Both WhatsApp PRs indicate a push toward first-class file/media support across channels.
- **Scheduled output routing** ([#1226](https://github.com/moltis-org/moltis/pull/1226)) — Enabling conversational delivery for cron output.

## 7. User Feedback Summary
- **WhatsApp integration is actively used and breaking** — User reported tools silently failing in shared channels; the rapid PR fixes (Markdown rendering, file persistence) indicate real-world usage pain.
- **Configuration discoverability gap** — `ActiveHoursConfig` documented "midnight = always on until end of day" but the implementation parses `end` before special-casing; users trust docs and get silent misbehavior.
- **No praise/positive feedback captured** in this window.

## 8. Backlog Watch
**Needs maintainer attention:**

1. **[PR #468](https://github.com/moltis-org/moltis/pull/468) — Windows cmd.exe fix (5 months old)** — Fully tested, Windows CI passes, closing a major platform gap. Stale since March; no reviewer activity despite being referenced today.
2. **[Issue #1224](https://github.com/moltis-org/moltis/issues/1224) — Slack shared-channel tool failure** — No assignee, no linked PR, no maintainer response in 24h. High-impact bug requiring triage.
3. **[PR #1208](https://github.com/moltis-org/moltis/pull/1208) — Heartbeat active-hours fix** — Open for 5 days; closes a confirmed bug (#1205, #1223). Should be prioritized before it conflicts with other cron refactors.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-22

## 1. Today's Overview

CoPaw (QwenPaw) shows **high sustained activity** with 34 issues and 36 PRs updated in the last 24 hours. The project is in a **stabilization and feature-expansion phase** following the v2.1.0 release, with a v2.1.1-beta.2 version bump merged today ([#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200)). Notable activity clusters around **bug fixes for the v2.1.1-beta.1 regression** ([#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206)), **MCP server reconnection reliability** ([#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)), and a **large batch of user experience feature requests** related to UI control over tool-call visibility. The PR pipeline is robust with 21 open PRs including several **first-time-contributor** submissions, suggesting healthy community engagement. The backlog of long-running test-coverage PRs (from June) finally appears to be closing out.

## 2. Releases

**No new releases today.** The latest version remains **v2.1.0** (stable) with **v2.1.1-beta.1** and **v2.1.1-beta.2** in the beta channel. Version bump PR [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) to v2.1.1b2 was merged today, indicating an upcoming beta release. No migration notes have been published.

## 3. Project Progress

**Merged/closed PRs today (15 total):**

- **Bug fixes:**
  - [#7205](https://github.com/agentscope-ai/QwenPaw/pull/7205) — **Fix Windows integration coverage reading 0 every night** (silent failure since June 26)
  - [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) — **Console responsiveness for long chats** (Markdown reparse optimization + streaming improvements)
  - [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) — **Version bump to v2.1.1b2**

- **Feature work completed:**
  - [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) — **QwenPaw Hub**: self-hosted multi-user control plane running isolated app instances (significant infrastructure addition)
  - [#7202](https://github.com/agentscope-ai/QwenPaw/pull/7202) — **Mailbox management documentation** aligned with implementation from #6800

- **Closed test-coverage milestones**: Multiple long-running PRs from the frontend/backend unit testing initiative finally closed today, including [#5580](https://github.com/agentscope-ai/QwenPaw/issues/5580) (app-infra backend tests), [#5437](https://github.com/agentscope-ai/QwenPaw/issues/5437) (Inbox + 11 API modules), [#5433](https://github.com/agentscope-ai/QwenPaw/issues/5433) (M1 Agent hooks), [#5419](https://github.com/agentscope-ai/QwenPaw/issues/5419) (runner module), plus the M1–M4 frontend testing milestones ([#5005](https://github.com/agentscope-ai/QwenPaw/issues/5005)–[#5007](https://github.com/agentscope-ai/QwenPaw/issues/5007)). This indicates **a major testing debt payoff** is being wrapped up.

- **Closed enhancements**: Multi-file drag-drop upload for Windows ([#4855](https://github.com/agentscope-ai/QwenPaw/issues/4855)), remove upload size limits on desktop ([#4854](https://github.com/agentscope-ai/QwenPaw/issues/4854)), and session sorting by latest activity ([#4816](https://github.com/agentscope-ai/QwenPaw/issues/4816)).

## 4. Community Hot Topics

- **[#6524 — MCP backend restart breaks client auto-reconnect](https://github.com/agentscope-ai/QwenPaw/issues/6524)** (6 comments, open since Jul 28) — The most active discussion. When a remote MCP Server restarts, QwenPaw reuses stale `mcp-session-id` and fails to query tools until manual `list mcp` is executed. This is a **core reliability issue** affecting production workflows.

- **[#6780 — Idle timeout/hang after ~30 min](https://github.com/agentscope-ai/QwenPaw/issues/6780)** (4 comments, closed) — Users report QwenPaw 2.0.1 becomes unresponsive after being idle for tens of minutes, requiring process restart. Closed but likely addressed by recent stability work.

- **[#7168 — history.db ballooned to 7.6GB](https://github.com/agentscope-ai/QwenPaw/issues/7168)** (2 comments, closed) — Critical storage issue: `ToolResultCapMiddleware` writes full tool outputs to `conversation_history`, and `recall_history` expand logic causes the same interval to be stored repeatedly. This represents a **significant data-management bug** for long-running agents.

- **[#7016 — Tool call 404 on streaming sessions](https://github.com/agentscope-ai/QwenPaw/issues/7016)** (3 comments, open) — `/api/tool-calls/{id}/offload` returns "Tool call not found" during streaming, indicating session state synchronization issues.

- **[#7156 — Embedding health check timeout even when warm](https://github.com/agentscope-ai/QwenPaw/issues/7156)** (3 comments, open) — Hardcoded 5s timeout causes false negatives (actual 10.4s elapsed), degrading vector recall to BM25-only. User explicitly calls out **hardcoded timeouts without config options** as a design flaw.

**Underlying community needs**: MCP session lifecycle management, long-running session stability, data storage hygiene, and configuration flexibility.

## 5. Bugs & Stability

**Ranked by severity:**

1. **[#7206 — Manual /compact fails with pydantic ValidationError (v2.1.1-beta.1 regression)](https://github.com/agentscope-ai/QwenPaw/issues/7206)** — **HIGH**: Regression from v2.1.0 when `compact_threshold_ratio == 0.9` with scroll context strategy. Confirmed via rollback testing. Active beta blocker.
2. **[#7168 — history.db grows to 7.6GB with duplicate content](https://github.com/agentscope-ai/QwenPaw/issues/7168)** — **HIGH**: Storage exhaustion for long-running agents. Closed but the underlying issue merits a permanent fix (no fix PR identified).
3. **[#6524 — MCP session not restored after server restart](https://github.com/agentscope-ai/QwenPaw/issues/6524)** — **HIGH**: Requires manual intervention; breaks unattended workflows.
4. **[#6427 — WebView2 crash on startup (~7s) in v2.0.0+post.4](https://github.com/agentscope-ai/QwenPaw/issues/6427)** — **MEDIUM**: Windows desktop "flash exit" — regression from post.3, likely frontend change triggered WebView2 bug.
5. **[#6430 — Startup hang ~85s in desktop build](https://github.com/agentscope-ai/QwenPaw/issues/6430)** — **MEDIUM**: Consistent delay on every launch.
6. **[#7156 — Embedding health check false timeout](https://github.com/agentscope-ai/QwenPaw/issues/7156)** — **MEDIUM**: Silent degradation of retrieval quality; hardcoded timeout.
7. **[#7016 — Tool call 404 during streaming](https://github.com/agentscope-ai/QwenPaw/issues/7016)** — **MEDIUM**: Session state desync.
8. **[#7136 — File card shows percent-encoded mojibake for Chinese filenames](https://github.com/agentscope-ai/QwenPaw/issues/7136)** — **LOW**: Display-only issue.
9. **[#7199 — daily_paper crashes on surrogate chars in PDF](https://github.com/agentscope-ai/QwenPaw/issues/7199)** — **LOW**: Edge case in PDF text extraction.
10. **[#7210 — Tools enabled but not injected into function schema](https://github.com/agentscope-ai/QwenPaw/issues/7210)** — **NEW**: Tool exposure inconsistency in sessions.

**Fix PRs available**: None of the above issues have explicitly linked fix PRs yet, though #[7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) (v2.1.1b2) may carry fixes.

## 6. Feature Requests & Roadmap Signals

**Strong signals for next release:**

- **[#7203 — Toggle to hide tool-call info display](https://github.com/agentscope-ai/QwenPaw/issues/7203)** — User wants to hide tool-call noise during contract review/research work. References Hermes-style UX.
- **[#7196 — Collapsible reasoning/thinking display](https://github.com/agentscope-ai/QwenPaw/issues/7196)** — Related UX complaint; default-hidden reasoning process, show only when debugging.
- **[#7198 — Smarter approval logic for intermediate artifacts](https://github.com/agentscope-ai/QwenPaw/issues/7198)** — Auto-approve operations on process-generated files; only require approval for pre-session files. Important for unattended/夜间 automation.
- **[#7201 — Separate per-provider media size caps](https://github.com/agentscope-ai/QwenPaw/issues/7201)** — Split unified `max_inline_media_bytes` into independent image/video/audio limits with UI exposure.
- **[#7204 — Custom tool addition guide](https://github.com/agentscope-ai/QwenPaw/issues/7204)** — Community asking for how to add custom tools (only built-in visible) — potentially docs gap.
- **[#7195 — Fullscreen chat window obscured by taskbar icons](https://github.com/agentscope-ai/QwenPaw/issues/7195)** — Desktop UI polish.

**Signals from open PRs** (likely in next release): Session-scoped multi-project directories ([#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)), token-usage attribution by agent ([#7207](https://github.com/agentscope-ai/QwenPaw/pull/7207)), DingTalk shared session context ([#7208](https://github.com/agentscope-ai/QwenPaw/pull/7208)), global-hotkey quick-input window ([#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607)), and the large Creator 1.1.0 feature bundle ([#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167) — Anthropic/Gemini protocols, image/video providers, 2GB uploads).

## 7. User Feedback Summary

**Pain points:**
- **Visual noise**: Multiple users (rerbin) consistently complain about tool-call info and reasoning display being visual noise during professional work (contract review, research reports). References to "hermes" as a UX benchmark indicate community awareness of competitor UX patterns.
- **Unattended operation**: [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) highlights that overnight/automated tasks are "a disaster" — approval popups block progress. User expects the agent to finish the job by morning, not sit at an approval dialog.
- **Memory/context confusion**: [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) reports cross-session memory bleed where the agent searches and acts on another session's content after resuming tasks.
- **File handling on desktop**: Historical complaints ([#4855](https://github.com/agentscope-ai/QwenPaw/issues/4855), [#4854](https://github.com/agentscope-ai/QwenPaw/issues/4854)) about drag-drop and upload limits on Windows were resolved in this cycle — positive signal for responsiveness.

**Satisfaction indicators**: The closing of 15 issues today (including several from June) and the test-coverage milestone completion suggests the team is **actively addressing backlog**, which should improve user confidence.

## 8. Backlog Watch

**Issues/PRs needing maintainer attention:**

- **[#5992 — Per-session model overrides (PR, open since Jul 12, "Under Review")](https://github.com/agentscope-ai/QwenPaw/pull/5992)** — A significant opt-in feature for multi-conversation LLM routing. Stuck in review for over a month with no comment activity.
- **[#6399 — Reranker UI config panel (PR, open since Jul 23, "Under Review")](https://github.com/agentscope-ai/QwenPaw/pull/6399)** — Complements backend reranker feature; waiting for review for 3+ weeks.
- **[#6607 — Global-hotkey quick-input window (PR, open since Jul 31)](https://github.com/agentscope-ai/QwenPaw/pull/6607)** — Implements #6568, Doubao-style floating input; no review comments since opening.
- **[#6427 — WebView2 crash (issue, open since Jul 24)](https://github.com/agentscope-ai/QwenPaw/issues/6427)** — Only 2 comments and still unresolved; affects Windows desktop users on post.4+.
- **[#6430 — Startup hang (issue, open since Jul 24)](https://github.com/agentscope-ai/QwenPaw/issues/6430)** — 85s startup delay; reported alongside #6427, no fix PR linked.
- **[#6808 — Custom profile markdown files (first-time PR, open since Aug 7)](https://github.com/agentscope-ai/QwenPaw/pull/6808)** — First-time contributor contribution from ump45nose, no maintainer response for 2 weeks.

**Notable risk**: The "Under Review" label on PRs that have been waiting 2–4 weeks without comment is a **review bottleneck signal**. With the v2.1.1-beta.2 bump today, these older PRs may be at risk of merge conflicts if not addressed soon.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date: 2026-08-22**

---

## 1. Today's Overview

ZeroClaw is showing high activity with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a strong open-source momentum with 49 active issues and 48 open PRs remaining in review. Community engagement is robust, with contributors like Audacity88, JordanTheJet, and NiuBlibing driving security hardening, runtime stability improvements, and plugin infrastructure enhancements. The project's backlog remains significant, with several high-priority (P0/P1) security and data-loss issues (#10066, #10165) actively being addressed. No new releases were published this period, indicating the team is consolidating significant feature work before the next version cut.

---

## 2. Releases

No new releases were published in the last 24 hours. The project appears to be in an active development phase, with multiple large pull requests (size:XL) in flight, including the ZeroRelay secure transport implementation (#10142), plugin activation re-cut (#10146), and ACP interrupted-turn persistence (#10197).

---

## 3. Project Progress

Only 2 PRs were merged/closed in the last 24 hours (out of 50 updated), indicating most effort is in review and iteration rather than landing changes. Key trends observed in open PRs:

- **Security hardening is a primary focus**: Multiple PRs target security policy enforcement, including Alpine non-root image metadata checks (#10176), plugin subprocess isolation (#10093), and ZeroRelay mutual TLS implementation (#10142).
- **Runtime stability improvements are consistent**: The team is working on bounded subprocess waits (#10210), daemon capture log boundaries (#10236), and Windows platform test fixes (#10208).
- **Cross-platform support is being actively matured**: PR #10208 addresses Windows-specific test failures, indicating broadening platform support beyond Linux/macOS.
- **First-time contributors are emerging**: PRs from sunlit-deng, vikng-dev, and grrowl show an accessible contribution process.

---

## 4. Community Hot Topics

The most active discussions center on security policy enforcement and runtime stability:

- **[Issue #10165 — Independent delegate bypasses `block_high_risk_commands`](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)** (3 comments, S0 severity) — High-risk command execution bypasses security policy through independent delegates, sparking discussion on the delegation model's risk implications.

- **[Issue #10074 — SECURITY.md documents removed CI job](https://github.com/zeroclaw-labs/zeroclaw/issues/10074)** (3 comments, closed) — Documentation accuracy matters to the community; the issue was resolved, showing responsive maintainers.

- **[Issue #10068 — Interactive agent context capped at 32K tokens](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)** (3 comments, P2) — Users need the full 131K context window they configure; current hardcap limits agent effectiveness.

- **[Issue #10066 — SOP engine runs steps before recording output-schema rejection](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)** (3 comments, P0) — Workflow correctness is critical for SOP reliability; later steps shouldn't execute before validation failures are recorded.

- **[Issue #10059 — Option-Backspace word deletion in ZeroCode](https://github.com/zeroclaw-labs/zeroclaw/issues/10059)** (3 comments, P3, good first issue) — Cross-platform UX consistency matters; macOS users expect standard editing shortcuts.

The underlying need across these threads is trust: users need security policies that hold under delegation, workflows that behave deterministically, and tools that match platform conventions.

---

## 5. Bugs & Stability

**Critical (S0 — data loss/security):**
- [Issue #10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) — Independent delegate bypasses high-risk command blocking (P1)
- [Issue #10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) — Partial Code/ACP turns disappear on process exit (P1)

**High (S1 — workflow blocked):**
- [Issue #10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) — SOP engine promotes steps before recording output-schema rejection (P0)
- [Issue #10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) — Daemon startup stack overflow during agent init with Quickstart config (P1)
- [Issue #10061](https://github.com/zeroclaw-labs/zeroclaw/issues/10061) — Provider-rejected image poisons later turns in vision-capable session (P1)

**Medium (S2 — degraded behavior):**
- [Issue #10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) — Interactive session ignores configured max_context_tokens (P2)
- [Issue #10114](https://github.com/zeroclaw-labs/zeroclaw/issues/10114) — Fixed 50K `max_tool_result_chars` unrelated to model context window (P1)
- [Issue #10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115) — Tool-result truncation invisible outside model's context (P1)
- [Issue #10116](https://github.com/zeroclaw-labs/zeroclaw/issues/10116) — Oversized tool results cut byte-wise middle-out (P1)
- [Issue #10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) — `block_high_risk_commands=false` ignored on parent path (P1)

**Fix PRs in flight:** PR #10197 addresses Issue #10121 (ACP turn persistence); PR #10210 bounds subprocess waits for browser tools; PR #10203 bridges log-facade records (Issue #10202). No fix PR is yet linked for the P0 SOP issue (#10066).

---

## 6. Feature Requests & Roadmap Signals

Strong signals for the next minor release include:

- **Streaming by default** — [Issue #10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) proposes making `stream_mode = partial` the default for channels (P2).
- **Stall watchdog enabled by default** — [Issue #10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) suggests a conservative non-zero `stall_timeout_secs` default.
- **WhatsApp Web bot display name** — [Issue #10200](https://github.com/zeroclaw-labs/zeroclaw/issues/10200) with PR #10201 implementing `push_name` config; this appears close to landing.
- **iMessage voice transcription** — [Issue #10140](https://github.com/zeroclaw-labs/zeroclaw/issues/10140) asks for parity with Telegram/Slack/Discord transcription support.
- **Git Channel in Docker image** — [Issue #10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) requests compiled Git Channel in the `zeroclaw:debian` image.

These requests cluster around **parity and lowering time-to-value**: making features work out of the box (streaming, watchdog) and extending existing capabilities (transcription) to all channels.

---

## 7. User Feedback Summary

- **Security policy confidence is eroding**: Users report the policy system behaves inconsistently — delegates bypass `block_high_risk_commands`, while `allowed_commands` on the parent path is ignored. This is the most severe trust issue in the current backlog.
- **Config values are being honored inconsistently**: The context window cap of 32K ignoring configured 131K is a visible example of configuration not being respected.
- **Cross-platform friction is real**: macOS users expect Option-Backspace; Windows test failures show platform support is still maturing.
- **The community values documentation accuracy**: SECURITY.md referencing a removed CI job was flagged and closed quickly.
- **Log visibility is a shared need**: Users want selectable/copyable ZeroCode logs (#10142) and visibility into tool-result truncation (#10115) — observability is a recurring theme.

---

## 8. Backlog Watch

Issues needing maintainer attention:

- **[Issue #10066 — SOP engine ordering bug (P0)](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)**: S0/S1 severity, accepted and no-stale, but no linked fix PR after 5 days. This should be prioritized given workflow-blocking impact.

- **[Issue #10061 — Rejected image poisons vision session (P1)](https://github.com/zeroclaw-labs/zeroclaw/issues/10061)**: Accepted, no-stale, follow-up — but no fix in sight. A session-blocking bug in vision workflows needs attention.

- **[PR #9637 — Guard temporary React Router RSC exception](https://github.com/zeroclaw-labs/zeroclaw/pull/9637)**: Marked `needs-author-action` and `do-not-merge`; it's been 3 weeks. This CI fix is blocking dependency-review enforcement.

- **[PR #10117 — Exact transcription proxy selectors](https://github.com/zeroclaw-labs/zeroclaw/pull/10117)**: P2, small (XS), from a new contributor, in review since 2026-08-19 — a good candidate for quick merge to encourage contributor momentum.

- **[Issue #10238 — ZeroCode stale Connected state](https://github.com/zeroclaw-labs/zeroclaw/issues/10238)**: Freshly filed (0 comments), but it undermines the TUI's trustworthiness after daemon restarts; worth early triage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*