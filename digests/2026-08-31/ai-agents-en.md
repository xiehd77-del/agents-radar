# OpenClaw Ecosystem Digest 2026-08-31

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-31 04:19 UTC

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

Based on the provided GitHub data for OpenClaw (github.com/openclaw/openclaw) as of 2026-08-31, here is the project digest:

---

## OpenClaw Project Digest — 2026-08-31

### 1. Today's Overview
OpenClaw is in a period of very high activity, with 500 issues and 500 PRs updated in the last 24 hours. This coincides with the release of version 2026.8.1, which is a major update focused on reliability and session management. The project is heavily reliant on automated tooling, with "clawsweeper" bots triaging a significant portion of the backlog. While a large number of issues are being closed, a substantial core of high-severity bugs (P1) remain open, particularly around message delivery, session state integrity, and security, indicating a strong focus on hardening the platform's core infrastructure. The community is active and engaged, filing detailed bug reports and feature requests, and maintainers are actively merging fixes, especially for gateway and session-related regressions.

### 2. Releases
- **v2026.8.1** — This is the latest stable release.
    - **Highlights:** The primary feature is the ability to **search past conversations** by exact text and reopen the surrounding messages from the results.
    - **Major Theme:** The release appears to focus on enabling **"Sessions beyond your Gateway"**, allowing work to be run on paired devices or cloud workers, a major architectural shift for the project's portability and scalability.
    - **Migration/Breaking:** A critical bug (#133347) was filed immediately after release, reporting that the **2026.8.1 migration quarantines valid cron jobs as `invalid-schedule`**, silently dropping the active inventory. This is a severe regression that could affect users' automation setups.

### 3. Project Progress
While the provided data doesn't separate "merged today," the high volume of closed PRs (194) indicates active merging. Notable PRs that were recently closed (and likely merged) showcase a focus on stability and feature completeness:
- **`fix(gateway): keep conversation delivery within agent bindings` (#126424)**: A multi-channel fix ensuring messages are delivered only to the agent they were bound to, addressing a significant multi-agent reliability concern.
- **`fix(ui): avoid session catalog refresh storms` (#123535)**: Improves the responsiveness of the web UI by preventing redundant data fetches.
- **`fix(cli): resolve alias targets from the write snapshot` (#128223)**: Fixes an issue where aliases were resolved from stale data.
- **`fix(release): authorize focused beta evidence` (#128371)**: An internal tooling fix to unblock the release process.
- **`feat: make full session actions available from chat header` (#128995)**: Enhances the web UI by bringing important session management actions (pin, mark unread, etc.) directly to the chat header menu.
- **`feat(security): require acknowledgement for install policy warnings` (#116489)**: A significant security feature that introduces a new `warn` level for external install policies, requiring explicit user acknowledgement for potentially suspicious plugin or skill installs.

### 4. Community Hot Topics
The most-discussed issues reveal concerns about reliability, spending, and security in production use:
- **`[maintainer, P2] OpenClaw 2026.8.1 beta feedback` (#125626)**: This central feedback thread has 24 comments, showing the community is actively testing the new beta and reporting their experiences, making it a key source of qualitative data for the team.
- **`[P2] [Feature]: Per-agent cost budget enforcement at the gateway level` (#42475)**: With 22 comments and multiple 👍, this is a highly desired feature. Users want granular control over cloud costs for each agent to prevent runaway spending.
- **`[P1] [Bug]: embedded prompt cache breaks across room-event, policy, and Responses boundaries` (#102175)**: This complex bug (18 comments) involves core session management and performance, indicating a deep architectural issue.
- **`[P1] [Bug]: Codex-backed Telegram turns repeatedly time out waiting for turn/completed on 2026.5.27` (#87744)**: This popular issue (17 comments, 4 👍) highlights a major reliability problem with a specific provider (Codex), causing user-facing failures (messages not being delivered).

### 5. Bugs & Stability
There are several high-severity (P1) bugs open, but none reported "today" (2026-08-31) with a fix PR already in place. The most critical recent regressions include:
- **`[P1] 2026.8.1 migration quarantines valid cron jobs...` (#133347)**: Severity: **Critical**. This is a *new* bug (created 2026-08-30) affecting the latest release. It can silently disable a user's entire automation inventory. No fix PR is listed.
- **`[P0] Assistant generates fake "Human: [timestamp]" user messages...` (#108395)**: Severity: **Critical**. A security vulnerability where the AI can potentially author its own user messages, enabling self-authorization of actions. Open for over a month, waiting for maintainer review.
- **`[P1] Gateway drops concurrent in-process tool-to-gateway WebSocket connections (1006)...` (#100941)**: Severity: **High**. Causes failures under heavy parallel tool usage, leading to "Gateway-crashed" errors.
- **`[P1] Code Mode mutation recovery lacks a canonical effect-provenance contract across tools` (#131340)**: Severity: **High**. A new issue (created 2026-08-28) about incorrect state recovery in the Code Mode, a core daily-use feature.
- **`[Bug] 400: tools.30.custom.input_schema: JSON schema is invalid` (#105708)**: This recently closed P1 bug shows the team is actively resolving regressions introduced by tooling changes.

### 6. Feature Requests & Roadmap Signals
Those requests are likely candidates for upcoming minor versions:
- **Per-Agent Cost Budgets (#42475)**: The sustained interest suggests this is a major pain point for operators. It's a strong candidate for a future **.x** release.
- **Telegram's Guest Bots and Bot-to-Bot Communication (#79077)**: This issue requests support for new Telegram platform features (released May 2026). It has 8 👍 and is labeled P1, suggesting it's a desired integration that could be actively planned.
- **[Feature]: Catch up on missed inbound messages after gateway restart (#55792)**: This is a critical reliability feature for users who depend on channels like Discord and Telegram. Implementing this would solve a major pain point of message loss.
- **Capability-based permissions for skills/tools (#12678)**: This long-standing enhancement request aims to create a robust permission model for skills, addressing security concerns raised in multiple other issues and PRs.
- **Built-in headless browser (#53763)**: A request to bundle a headless browser as a tool, indicating a growing need for reliable web interaction in automated workflows.

### 7. User Feedback Summary
Across the issues and PRs, the community of "operators" (who run OpenClaw instances) expresses a mix of satisfaction with the platform's power and frustration with its complexity and instability:
- **Pain Point - Configuration/Update Risks:** Issues like the cron migration quarantine (#133347) and the `sudo openclaw update` ownership problem (#78493) show a fear and frustration that updates and configuration changes can break existing, working setups.
- **Pain Point - Message Reliability:** A recurring theme is message loss and delivery failures. Issues like #87744 (Codex timeouts), #96692 (Slack thread replies lost), and #55792 (no catch-up after restart) are seen as major blockers for using OpenClaw in production environments.
- **Satisfaction with Team Responsiveness:** The sheer volume of issues and PRs being processed daily, including triage from "clawsweeper" bots and maintainers, indicates a responsive development team that is actively addressing the reported problems.
- **Security Consciousness:** Users are actively probing the system's security boundaries, as seen in issues about fake "Human" messages (#108395), prompt injection via skills, and inconsistent media allow-lists (#110346). This suggests a community of technically sophisticated users pushing for enterprise-grade security.

### 8. Backlog Watch
Several long-standing issues have been open for months without a clear resolution or update:
- **`[P0] Assistant generates fake "Human: [timestamp]" user messages...` (#108395)**: A critical security bug with no recent maintainer activity since its creation over a month ago.
- **`[P1] [Feature]: Catch up on missed inbound messages after gateway restart` (#55792)**: This issue is 5 months old and critical for reliability. The lack of movement suggests it is a complex architectural challenge.
- **`[P1] [Bug]: Windows native CLI gateway Scheduled Task does not stay running` (#91144)**: Closed issues for other platforms but this remains open, indicating a persistent platform-specific reliability concern.
- **`[P2] [Feature]: Capability-based permissions for skills/tools` (#12678)**: Open for ~7 months, this is a significant architectural request. Its age suggests it's not on the immediate roadmap and may require a large effort.
- **`[P1] [Bug]: OpenClaw leaks unreaped hook/tool child processes...` (#97616)**: Open for 2 months, this is a fundamental process management issue that can cause long-term system degradation for all users. The open status suggests it's a difficult fix despite its severity.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent & Personal Assistant Open-Source Ecosystem

**Date:** 2026-08-31

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is undergoing a **stabilization-and-hardening phase** following a period of rapid feature expansion. Projects cluster into two tiers: enterprise-scale platforms (OpenClaw, Hermes Agent, ZeroClaw) investing heavily in reliability, security, and session-state integrity, and lightweight/embedded-focused assistants (PicoClaw, NanoClaw, Moltis) optimizing for constrained hardware and local-first usage. A dominant cross-project theme is **session and memory management** — several high-severity bugs across OpenClaw, Hermes, NanoBot, and ZeroClaw involve context compaction failures, message loss, or history poisoning, indicating this remains the hardest unsolved problem. The ecosystem is also converging on **provider abstraction and BYOK/local-model support** (NanoClaw, Hermes, ZeroClaw), while desktop UX polish (LobsterAI, CoPaw) and cost-control features (per-agent budgets, explicit recall) reflect growing production deployment demands.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 updated | 500 updated | v2026.8.1 (recent) | **Moderate-High** | Severe cron-migration regression; active triage via bots |
| **Hermes Agent** | 50 touched | 50 touched | v0.20.5 (12d old) | **High** | 10 issues closed; compression fixes landed; P0 session-id bug pending |
| **ZeroClaw** | 50 updated | 50 updated | No release (RFC phase) | **Moderate** | Heavy design phase; zero merges; review bottleneck on XL PRs |
| **CoPaw** | 23 updated | 26 updated | v2.2.0-beta.3 (verify) | **Moderate** | 6/6 closed split; beta regressions being actively fixed |
| **NanoBot** | 6 updated | 28 updated | No release (imminent) | **High** | 8 PRs merged; memory architecture refactor nearly complete |
| **IronClaw** | 0 | 11 updated (1 closed) | No release | **High** | Maintenance phase; CI/dependency work; no user-facing churn |
| **LobsterAI** | 7 updated (all stale) | 7 updated (4 closed) | No release | **Moderate** | New in-app browser PR; 5-month-old PRs still open |
| **NanoClaw** | 2 new | 25 updated (0 merged) | No release | **Moderate-High** | Large provider-contract refactor series in review |
| **Moltis** | 1 closed | 2 (1 merged) | 20260830.01 (yesterday) | **High** | Arm64 bug fixed after 3 months; clean, focused work |
| **PicoClaw** | 2 new | 1 updated | No release | **Low-Moderate** | Data-loss issue (#3351) critical; needs immediate triage |
| **NullClaw** | 0 | 0 | — | Inactive | No activity |
| **TinyClaw** | 0 | 0 | — | Inactive | No activity |
| **ZeptoClaw** | 0 | 0 | — | Inactive | No activity |

---

## 3. OpenClaw's Position

**Advantages:**
- **Scale leader**: 500 issues/PRs touched in 24h — an order of magnitude above peers. This reflects the largest contributor base and user community, likely the ecosystem's de facto reference implementation.
- **Broad channel coverage**: Gateway architecture supports messaging platforms, with per-agent binding fixes (#126424) emerging as a differentiator for multi-agent reliability.
- **Feature velocity**: v2026.8.1 ships conversation search, cross-device session portability ("Sessions beyond your Gateway"), and a security ack flow for install policies — substantive advances shipping on a regular cadence.

**Technical approach differences:**
- OpenClaw's **gateway-centric architecture** (message delivery, session management, and binding at the gateway layer) differs from Hermes' session-state-integrity focus and NanoClaw's provider-contract standardization. OpenClaw treats the gateway as the reliability boundary; peers treat the agent runner (NanoBot) or session storage as the hard problem.
- Heavy reliance on **automated triage bots** ("clawsweeper") to manage the massive backlog — a pragmatic but noisy signal; peers use smaller maintainer teams with more manual curation.

**Community size comparison:**
- OpenClaw's issue/PR volume (500) dwarfs Hermes (50) and ZeroClaw (50) by 10x, and exceeds Lighter-weight projects (NanoBot: 6 issues, PicoClaw: 2) by 50–250x. This confirms OpenClaw as the largest community, but also the highest maintenance burden and regression risk (e.g., #133347 cron quarantine).

**Key risk:** The scale advantage comes with a **stability debt** — severe regressions in the latest release (cron migration, gateway drops) risk eroding user trust despite the high feature velocity.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|---|---|---|
| **Session history integrity** | OpenClaw (#102175), Hermes (#98450, #98722), NanoBot (#5593), CoPaw (#7402), ZeroClaw (#10061), PicoClaw (#3351) | Compaction bugs, empty-block poisoning, permanent data loss on rewrite, provider-rejected content replaying |
| **Context/token cost discipline** | NanoBot (#5571, #5610), Hermes (#98626), ZeroClaw (#5287) | Explicit recall vs preload, cumulative summaries, token-efficient search defaults, local-model prompt bloat |
| **Provider abstraction & BYOK** | NanoClaw (contract refactor #3581–#3593), Hermes (Claude OAuth #25267), ZeroClaw (wire protocol #8396), CoPaw (Claude Code harness #7396) | Unified provider contracts, OAuth flows for subscription users, local/free model support |
| **Update/rollback safety** | OpenClaw (#133347, #78493), NanoClaw (#3684), CoPaw (beta regressions) | Migration quarantine bugs, symlink snapshot corruption, silent config loss |
| **Per-agent cost controls** | OpenClaw (#42475), Hermes (429 spinning #97315) | Gateway-level budgets, rate-limit backoff, credential rotation |
| **Channel reliability** | OpenClaw (#87744, #55792), NanoBot (DingTalk #5463, Telegram #5531), CoPaw (Feishu #7408) | Message catch-up after restart, no silent drops, OAuth for Microsoft email (LobsterAI #1745, NanoBot #5609) |
| **Web UI / Desktop UX** | PicoClaw (#3350), CoPaw (#7406), Hermes (#94405), LobsterAI (#2574) | Performance on low-end hardware, theming, in-app browser, Windows stability |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Broad messaging integration, gateway-based flows | Operators running multi-channel agents at scale | Gateway-centric; sessions portable across devices |
| **Hermes Agent** | Long-session reliability, compression pipeline | Power users with heavy conversational workloads | Session-state-first; heavy investment in compaction |
| **ZeroClaw** | RFC-driven architecture evolution, sandbox/security | Enterprise/security-conscious deployers | Spec-led design; high-risk XL changes gated |
| **NanoClaw** | Local-first, provider pluggability | Developers wanting BYOK/local models | Provider-contract refactor; Ollama/registry vision |
| **NanoBot** | Agent core refactoring, memory discipline | Developers integrating agent pipelines | Runner-centric; deferring responsibilities to AgentRunner |
| **CoPaw** | Multi-platform console (Codex/Qoder), enterprise chat | Chinese-market enterprise users | Beta with Tauri desktop + SDK |
| **IronClaw** | Internal quality, agent-loop safety | Foundational/library users | CI-focused; design systems; process hygiene |
| **LobsterAI** | Desktop shell + agent integration | Desktop-first productivity users | MCP bridge to OpenClaw; in-app browser |
| **PicoClaw / Moltis** | Embedded/lightweight | RISC-V/edge device users; Docker-sandbox users | Minimal footprint; low-resource optimization |
| **NullClaw / TinyClaw / ZeptoClaw** | — | — | Inactive |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating (high velocity, active maintainers):**
- **OpenClaw** — Massive throughput, but scale creates regression risk.
- **Hermes** — Excellent issue-closure velocity; compression subsystem improving quickly.
- **NanoBot** — Merging 8 PRs/day; memory architecture refactor near completion; imminent release.

**Tier 2 — Active design/refactor (moderate velocity, deep architectural work):**
- **ZeroClaw** — Heavy RFC process; zero merges today indicates review bottleneck; design maturity high but shipping slow.
- **NanoClaw** — Coordinated provider-contract series; batch merge expected; healthy cadence but stalled on review.
- **CoPaw** — Beta phase with active regression fixing; strong maintainer responsiveness (same-day fixes).

**Tier 3 — Stabilizing/maintenance (low external churn, internal quality focus):**
- **IronClaw** — CI/dependency hygiene; no user-facing features; health good.
- **Moltis** — Clean, focused fixes; arm64 resolved.

**Tier 4 — Lagging/at-risk:**
- **PicoClaw** — Only 2 issues, 1 PR in 24h; critical data-loss bug (#3351) with no maintainer response — community trust risk.
- **LobsterAI** — Stale-bot closures without maintainer follow-up; 5-month-old PRs pending.
- **NullClaw, TinyClaw, ZeptoClaw** — Inactive; no signals.

---

## 7. Trend Signals

1. **Session integrity is the #1 unsolved problem.** Across six projects, compaction/rewrite bugs cause permanent data loss, message poisoning, or infinite loops. This is the ecosystem's "glass jaw" — expect continued investment and talent demand.

2. **Memory discipline is becoming a first-class feature.** Explicit recall, cumulative summaries, and ephemeral context (NanoBot) indicate a shift away from "always preload everything" toward **cost-aware, opt-in persistence**. Token economics are driving architecture.

3. **Local/BYOK is a rising tide.** NanoClaw's Ollama work, Hermes' Claude subscription OAuth demand (53 👍), ZeroClaw's `local_small` profile, and CoPaw's harness requests all point to user desire for **provider choice without double-billing**.

4. **Update tooling is a liability.** Cron quarantine (OpenClaw), symlink corruption (NanoClaw), and silent config loss (CoPaw) show that update/rollback paths are the **most dangerous failure surface** — shipping code is easier than shipping updates safely.

5. **Enterprise security posture is maturing.** Capability-based permissions (OpenClaw #12678), SSRF guards (Hermes), mTLS transport (ZeroClaw), and credential rotation are being actively designed — the ecosystem is preparing for regulated deployments.

6. **Desktop is the weak platform.** Windows boot-loops (Hermes), macOS Intel breakage (Hermes), and performance on low-end hardware (PicoClaw) show **cross-platform desktop reliability is the biggest gap** across the board.

7. **Automation is both a blessing and a curse.** OpenClaw's bot-driven triage handles volume but lets critical bugs sit (P0 #108395 open a month). Projects with manual curation (NanoBot, Moltis) resolve issues faster despite lower volume.

---

**Bottom line for decision-makers:** The ecosystem is maturing from "feature rush" to "production hardening," with session-state integrity and safe updates as the **top adoption blockers**. OpenClaw leads in scale and capability, but its regression risk and backlog debt make it a **higher-operational-overhead choice**. Hermes and NanoBot offer the best **reliability-to-velocity ratio** today. For local-first or embedded deployments, NanoClaw and Moltis are healthy picks, while PicoClaw requires immediate maintainer intervention to retain trust.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-31

## 1. Today's Overview

NanoBot is in a period of intense, high-quality development activity. The repository shows 6 issues updated in the last 24 hours (4 closed, 2 open) and 28 pull requests updated in the same window (8 merged/closed, 20 open), signaling a mature project with strong contributor momentum. The majority of activity is concentrated on the agent core, particularly around session memory management, context compaction, and provider request fitting, with a clear architectural trend toward moving responsibilities (persistence, transcript assembly, compaction) from the session layer into the agent runner. No new releases were published today, but the PR queue contains several priority-p1 fixes and features that appear close to merge, suggesting a significant batch release may be imminent.

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

**Merged/Closed PRs (8 total)**

*Closed PRs by maintainer momentum:*

- **[#5608] refactor(agent): defer transcript assembly to runner** — Merged. Moves transcript assembly responsibility from `ContextBuilder` to `AgentRunner`, making persisted history + fresh turn an explicit `TranscriptInput` while preserving compatibility paths. This is a foundational refactor for the new agent pipeline.
- **[#5600] fix(agent): close native reasoning on cancellation** — Merged. Fixes a bug where canceling a streaming request after native reasoning started would leave the client without a `reasoning_end` signal. Cleans up reasoning stream and pauses generation timers on `CancelledError`.
- **[#5338] fix(mcp): preserve credentials when OAuth store read fails** — Merged. Security fix in the MCP layer: previously, a failed OAuth store read was treated as empty, allowing a later token update to overwrite credentials belonging to another server. Only genuine empty-store errors are now treated as empty.

**Key remaining open PRs showing architectural direction:**

- **[#5580] fix(session): move persistence off event loop (p1)** — Keeps `SessionManager` as the single manager but makes its cache and persistence transactions thread-safe via `asyncio.to_thread` adapters, addressing a long-standing concurrency concern.
- **[#5571] feat(memory): require explicit recall by default (p1)** — Changes default behavior so durable memory is no longer preloaded into every request; it is only retrieved via explicit recall, reducing token bloat.
- **[#5612] refactor(agent): unify runner request fitting (p1)** — Makes `AgentRunner` decide request pressure immediately before each provider call, using provider-reported context usage when decisive.

---

## 4. Community Hot Topics

**Most active discussion this week:**

- **[#5505] [OPEN] Add AnySearch as a web search provider** — 7 comments, 0 reactions. The AnySearch team proposes key-optional web search integration with anonymous quota. The accompanying PR [#5607](https://github.com/HKUDS/nanobot/pull/5607) is already open, following the existing Serper pattern. Underlying need: users want zero-configuration web search providers alongside the existing key-required options.

- **[#5582] [CLOSED] Cron jobs crash when created from WebUI quote/@mention turns** — Closed. Represents a frustrating edge case: the standard WebUI path (quoting an assistant response or @mentioning a session) attaches runtime-context blocks that crash cron scheduling at add-or-fire time. The issue is resolved, but signals user expectations around the WebUI as a primary interaction surface.

**Trend analysis:** Community interest is split between (a) expansion of integrations (AnySearch, Microsoft OAuth for Office365 email) and (b) reliability fixes around WebUI interactions and scheduled tasks.

---

## 5. Bugs & Stability

**Reported this 24-hour window (ranked by severity):**

1. **[#5593] Session message rate-limit state retains expired one-shot sessions (Closes: fixed)** — *Moderate.* The `SendSessionMessageTool` keeps per-source timestamp deques that are never pruned once a one-shot session expires, causing memory growth over time. Fixed today by PR (linked in the issue resolution).

2. **[#5463] DingTalk does not observe or drain inbound background tasks** — *Moderate.* The DingTalk stream handler spawns `asyncio.Task` objects with no terminal observer or done callback for exception handling/draining. This can leak tasks and suppresses errors silently. No open fix PR referenced yet.

3. **[#1697] [OPEN] Result not returned automatically; output incorrect** — *Low severity, long-standing.* User must ask multiple times before receiving query results. The report also asks about security configuration and full-access permissions, indicating potential confusion around the tool-permission model. This issue has been open since March 2026.

**Bugs fixed via PRs this window:**

- **Native reasoning cleanup on cancellation** ([#5600](https://github.com/HKUDS/nanobot/pull/5600)) — prevents missing `reasoning_end` clientside.
- **MCP OAuth credential preservation** ([#5338](https://github.com/HKUDS/nanobot/pull/5338)) — prevents cross-server credential overwrites.
- **Rejected WebUI messages leave saved attachments/WS subscriptions behind** — rolling back side effects on admission/dispatch failure ([#5601](https://github.com/HKUDS/nanobot/pull/5601) open).

---

## 6. Feature Requests & Roadmap Signals

**Strong signals for the next version:**

- **Ephemeral runtime context** — PR [#5615](https://github.com/HKUDS/nanobot/pull/5615) adds an opt-out `ephemeral` lifecycle to `RuntimeContextBlock`, preventing sensitive or noisy context from persisting into session history. This, combined with the memory refactors, suggests the 0.x roadmap is moving toward a more disciplined context/memory model where persistence is the exception, not the default.

- **Cumulative memory summaries** ([#5610](https://github.com/HKUDS/nanobot/pull/5610)) and **explicit recall by default** ([#5571](https://github.com/HKUDS/nanobot/pull/5571)) — Signs of a deliberate redesign: instead of always preloading durable memory, the agent will only reach for it when necessary, making the active checkpoint the primary continuity mechanism. This is a direct response to token-cost pressure from users.

- **AnySearch as key-optional web search provider** ([#5607](https://github.com/HKUDS/nanobot/pull/5607)) — With PR alongside issue, this looks close to merge. Low friction for users: anonymous quota, no API key required.

- **Microsoft delegated OAuth for Office365/Outlook email** ([#5609](https://github.com/HKUDS/nanobot/pull/5609)) — Direct response to Microsoft's deprecation of IMAP/SMTP basic auth. A necessary, forward-looking channel stability fix.

**Prediction:** the next NanoBot release will likely feature the new memory architecture (explicit recall + cumulative summaries + ephemeral context) alongside the AnySearch provider, a Telegram streaming rich-message fix ([#5531](https://github.com/HKUDS/nanobot/pull/5531)), and email-channel stability/aliasing improvements.

---

## 7. User Feedback Summary

- **Query reliability quirks persist ([#1697](https://github.com/HKUDS/nanobot/issues/1697))**: A user reports they must ask multiple times before the queried result is returned automatically. This is an old issue (March 2026) but still open—a notable gap in a core interaction loop (query → return data). The underlying need is for robust, automatically-returned execution results without prompting.

- **WebUI as a power-user surface ([#5582](https://github.com/HKUDS/nanobot/issues/5582))**: The crash at cron-add/fire time only occurs via the standard WebUI interaction path (quote/@mention). This indicates users increasingly use the WebUI for both casual conversations and operational automation (cron jobs), and expect them to work together seamlessly.

- **Rate limit and session hygiene ([#5593](https://github.com/HKUDS/nanobot/pull/electronic) — fixed)**: Users relying on one-shot sessions (run-once conversations) do not expect those sessions to leak state into the rate limiter.

- **Email setup friction (OAuth, alias filtering, `\Seen` mis-marking)** — PRs [#5609](https://github.com/HKUDS/nanobot/pull/5609), [#5606](https://github.com/HKUDS/nanobot/pull/5606), [#5605](https://github.com/HKUDS/nanobot/pull/5605) address a cluster of IMAP/OAuth issues. User pain is clear: as Microsoft deprecates basic auth, delegating OAuth is a table-stakes feature, and shared mailboxes (aliases) require recipient-alias filtering to avoid double-processing.

- **Context/token discipline** — The volume of PRs around context compaction ([#5568](https://github.com/HKUDS/nanobot/pull/5568)), cumulative summaries ([#5610](https://github.com/HKUDS/nanobot/pull/5610)), and explicit recall ([#5571](https://github.com/HKUDS/nanobot/pull/5571)) signals user complaints about prompt bloat and provider token costs, but the design direction suggests the project is responding with deliberate, architectural fixes.

---

## 8. Backlog Watch

**Long-unanswered / needing maintainer attention:**

- **[#1697] The result wasn’t returned and the output was incorrect** — Open since March 2026, only 1 comment in five months. The user asks two questions: why results aren't automatically returned, and how to configure full-access permissions. The lack of maintainer response on a core query-reliability issue is a concern.

- **[#5338] fix(mcp): preserve credentials when OAuth store read fails** — This PR was opened in August and just closed (merged) after 19 days. Its age suggests MCP-level credential handling is a fragile area, and maintainers should watch for follow-up issues. Consider a regression test.

- **[#5412] fix(gateway): flush background child output to logs** — Open since August 17, and still not merged. Startup messages from background processes can be lost due to block buffering, making debugging harder. This is low-risk but also low-urgency; maintainer attention would unblock debug-ability for gateway users.

- **[#5463] DingTalk does not observe or drain inbound background tasks** — Open since August 21, no comments, no linked fix. Silent task leaks can mask real errors in production. Worth flagging as an area where a contributor could provide value quickly.

---

*Signals overall project health: the core agent pipeline is mid-refactor with clear direction (context/memory discipline), the channel layer (Telegram, Email, DingTalk) is getting well-tested fixes, and new integrations are landing via contributors with strong issue-PR coupling. The main risks are long-lived bugs with no maintainer response (#1697) and slow merge times for gateway-security fixes (#5412).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-31

## 1. Today's Overview

Hermes Agent shows a **high-activity development day**, with exactly 50 issues and 50 PRs touched in the last 24 hours. While no new releases shipped, the project's momentum is clearly visible: 10 issues were closed/merged, and a burst of new PRs (several created and updated today, #99091–#99097) suggests active maintainers and community contributors. The issue tracker reveals a **concentrated effort on session-state integrity and context compression**, with at least five distinct issues today (#98722, #98450, #97488, #96775, #84371) touching the compaction pipeline. Notably, a long-running stale skills-index watchdog issue (#66616) hit 127 comments, indicating an ongoing automated infrastructure problem that may be consuming maintainer attention. Overall health appears **good but under strain** in the compression/session-state subsystem, which is the clear focal point of current stabilization work.

## 2. Releases

**No new releases today.** Version context from issues: current stable appears to be **v0.20.5 (2026.8.19)**.

## 3. Project Progress

Today's closed/merged items (2 PRs closed/merged, 10 issues closed) include:

- **#98450 [CLOSED, P1]** — Fix for in-place compaction commit never stamping `_DB_PERSISTED_MARKER`, which caused session transcripts to re-INSERT and regrow from ~58K to ~512K tokens. This is a **critical session-state fix** addressing a severe memory/context blowup.
- **#96775 [CLOSED, P1]** — Follow-up fix for stalled preflight compression; now introduces durable backoff so a stalled compression doesn't re-enter the same failing strategy.
- **#84371 [CLOSED, P2]** — Fixed a compaction dead-loop on `codex_responses` sessions where the tail-budget walk excluded preflight reasoning replay (middle_window_tokens=0).
- **#97488 [CLOSED, P2]** — Fixed lean compaction ceiling timeout that left detached workers and could falsely auto-reset sessions.
- **#48098 [CLOSED, P2]** — Desktop no longer shows stale "Summarizing thread" status after compaction resumes.
- **#93515 [CLOSED, P3]** — Desktop auto-speak no longer reads each reply twice (Edge TTS).

PRs merged or updated with progress: **#63009** (Codex GPT-5.6 autoraise extended to custom `codex_responses` providers) and **#93575/#93576** (compression preflight display-seed and lean tail budget fixes) remain open but were actively refined today.

## 4. Community Hot Topics

- **[#66616 — Skills index watchdog (OPEN, 127 comments)]** — Automated probe shows the skills index is degraded (29.8h old vs 26h limit). The high comment count suggests ongoing maintainer debugging of the CI cron pipeline. This is a **structural/automation issue**, not a user-facing bug, but it impacts documentation freshness.
  🔗 https://github.com/NousResearch/hermes-agent/issues/66616

- **[#25267 — Claude Agent SDK provider with subscription OAuth (OPEN, 53 👍, 17 comments)]** — **Most-upvoted open feature.** Users with Claude subscriptions want to use Hermes without paying double (subscription + per-token API). This is a strong demand signal for `anthropic` provider parity with the `codex`-style OAuth flow.
  🔗 https://github.com/NousResearch/hermes-agent/issues/25267

- **[#96811 — Per-response session ids churn conversation-affinity keys (OPEN, P0, 2 comments)]** — **Severity P0.** A host minting one `session_id` per response breaks prompt caching and sticky sessions. Maintainers are actively working a fix in **PR #98811** (deliberately not yet closed).
  🔗 https://github.com/NousResearch/hermes-agent/issues/96811 | PR: https://github.com/NousResearch/hermes-agent/pull/98811

- **[#97681 — Bot Group Chats should keep working after Desktop closes (OPEN, 6 comments)]** — Community request for headless operation of group chats. **PR #99094** (salvaged by @teknium1) directly addresses a related issue (paused bots visibility after reload), showing the team is listening.
  🔗 https://github.com/NousResearch/hermes-agent/issues/97681 | PR: https://github.com/NousResearch/hermes-agent/pull/99094

## 5. Bugs & Stability

Ranked by severity (most critical first):

1. **[P0] #96811 — Session-id churn kills prompt caching** — Breaks conversation-affinity keys (session_id, x-grok-conv-id) with no warm prefix. **Fix in progress:** PR #98811.
   🔗 https://github.com/NousResearch/hermes-agent/issues/96811

2. **[P1] #94405 — Windows desktop boot-loop** — `/api/ws` rejects session token; env-pinned `HERMES_DASHBOARD_SESSION_TOKEN` not reaching the spawned backend. Still **open, no fix PR yet** — Windows desktop remains broken for affected users (including issue reporter @mattgale87).
   🔗 https://github.com/NousResearch/hermes-agent/issues/94405

3. **[P1] #98722 — Continuous "Summarizing thread" loop** — Stale compression lock reclaimed; compression makes no progress for 600s and never escapes. **Open, no dedicated fix PR yet** (related to the cluster of compression fixes).
   🔗 https://github.com/NousResearch/hermes-agent/issues/98722

4. **[P1] #97315 — Sole-credential openai-codex pool spins on 429 usage_limit_reached** — Rotation-to-self at ~2 req/s for hours with no backoff, no attempt cap. **Open, no fix PR.**
   🔗 https://github.com/NousResearch/hermes-agent/issues/97315

5. **[P2] #99028 — Profile-scoped gateways execute default profile's cron jobs** — Cross-profile leakage: cron jobs from the default profile run in profile-scoped gateways and deliver via their own bot token. **Open, no fix PR.** High security/correctness implication.
   🔗 https://github.com/NousResearch/hermes-agent/issues/99028

6. **[P2] #98626 — `search_files` defaults to `content` mode costing 3.4x tokens** — Performance regression; should default to `files_only`. **Open, no fix PR.**
   🔗 https://github.com/NousResearch/hermes-agent/issues/98626

7. **[P3] #84127 — `hermes update` fails on macOS Intel** — `cryptography` no longer ships x86_64 wheels; install broken on older Macs. **Open, no fix PR.**
   🔗 https://github.com/NousResearch/hermes-agent/issues/84127

## 6. Feature Requests & Roadmap Signals

- **#85852 — Managed llama.cpp runtime (local models with one click)** — PR open from @jquesnelle: installs, supervises, picks builds, manages GPU memory. This is a **massive UX leap** for local-first users. Likely in the next minor or major release.
  🔗 https://github.com/NousResearch/hermes-agent/pull/85852

- **#98470 — Validated worker collaboration contracts** — Passive, JSON-safe contract layer inspired by Data/Borg analysis; fail-closed. Signals a **shift toward enterprise-grade multi-agent reliability**.
  🔗 https://github.com/NousResearch/hermes-agent/pull/98470

- **#25267 — Claude subscription OAuth** — **Highest user demand (53 👍)**. If the team implements `codex`-style OAuth for Anthropic, it could unlock a large subscriber base currently blocked on double-billing.
  🔗 https://github.com/NousResearch/hermes-agent/issues/25267

- **#375 — Inception Prompting (CAMEL-AI)** — Long-running feature request (since March) for hardened sub-agent delegation prompts. Low comments but community-supported.
  🔗 https://github.com/NousResearch/hermes-agent/issues/375

- **#99097 — Swedish UI locale** — Community PR adding a new dashboard locale; likely merged quickly (minor).
  🔗 https://github.com/NousResearch/hermes-agent/pull/99097

- **#99096 — Teams Adaptive Cards for slash-confirm and clarify** — PR improving Microsoft Teams integration: more interactive prompts instead of text fallbacks. Strong enterprise-communication signal.
  🔗 https://github.com/NousResearch/hermes-agent/pull/99096

## 7. User Feedback Summary

- **Satisfied:** Community contributors are actively salvaging/rebuilding PRs (#99093, #99094), indicating a **healthy, collaborative contributor base**. The rapid closing of several P1/P2 compression bugs today shows maintainers are responsive on session-state stability.

- **Frustrated (Windows):** Multiple Windows-specific issues (#94405 boot-loop, #99093 Git Bash, #84127 Intel wheels) suggest **Windows remains the weakest platform** for the Desktop app and CLI. The boot-loop is particularly damaging (app unusable).

- **Frustrated (Compression):** The recurring **"Summarizing thread" loop** (#98722, #48098, #98450) suggests users on long sessions are hitting a **visible, disruptive stall** that blocks conversation. Even though many fixes landed, the issue's recurrence pattern (multiple follow-ups) indicates the root cause is not fully tamed.

- **Requesting (Cost/UX):** The #25267 Claude subscription topic plus #98626 (search_files token cost) show users are **actively optimizing for cost-efficiency** in their Hermes workflows.

- **Data point:** Zero new releases today despite high activity suggests a **stabilization sprint** rather than new-feature velocity; this is a good sign for quality but may delay expected features like the llama.cpp runtime.

## 8. Backlog Watch

Long-unanswered items needing maintainer attention:

- **[#84127 — macOS Intel `hermes update` broken (since Aug 11, P2)]** — 20 days open, only 2 comments, no fix PR. Users on Intel Macs are stuck on old versions. This is a **platform-compat regression** that is easy to trigger for a nontrivial user population.
  🔗 https://github.com/NousResearch/hermes-agent/issues/84127

- **[#94405 — Windows desktop boot-loop (since Aug 25, P1)]** — 6 days open, P1 severity, no fix PR. **Highest-priority unaddressed user-facing bug** in the tracker right now.
  🔗 https://github.com/NousResearch/hermes-agent/issues/94405

- **[#25267 — Claude subscription OAuth (since May 13, 53 👍)]** — **Most-upvoted feature request** with zero maintainer comments visible. Needs a decision (feature-scope or rejection) to manage community expectations.
  🔗 https://github.com/NousResearch/hermes-agent/issues/25267

- **[#66616 — Skills index watchdog (since Jul 18, 127 comments)]** — Long-running automation failure, still degraded today. Even though it's a bot, the volume of activity indicates a **chronic infrastructure issue** in the CI/docs pipeline.
  🔗 https://github.com/NousResearch/hermes-agent/issues/66616

- **[#87106 — SSRF guard blocks public URLs when VPN uses 198.18.0.0/15 (since Aug 15, P2)]** — 16 days, low attention. Real-world VPN deployment scenario; blocks all `browser_exec` for affected users.
  🔗 https://github.com/NousResearch/hermes-agent/issues/87106

---

**Overall health assessment:** Hermes Agent is in a **stabilization-intensive period with excellent community contributor engagement**. The compression/session-state subsystem is receiving heavy concentrated fire, which is good. The **Windows/macOS Intel platform gap** and the **unresolved P1 Windows boot-loop** are the most urgent risks to user trust. The **#25267 Claude subscription demand** is a strategic roadmap opportunity that should not be ignored.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-31

## 1. Today's Overview

PicoClaw shows stable but low-activity status today, with only 2 issues and 1 PR updated in the last 24 hours. No new releases were published, and no PRs were merged or closed. Both open issues were created yesterday (August 30) and focus on critical user experience problems: persistent memory data loss and Web UI performance on low-end hardware. A long-dormant PR for DeltaChat refactoring (opened July 3) received a recent update, indicating some maintainer attention. Overall, the project appears to be in a maintenance phase with community-reported issues awaiting triage.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release information is unavailable in this data window.

## 3. Project Progress

No PRs were merged or closed today. The only updated PR is **#3222** (open), a refactoring effort for DeltaChat integration:
- [PR #3222: refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222) — Updated August 30; removes legacy features, drops password-based email config in favor of jsonrpc secrets, renames `invite_link` → `join_invite_link`, adds `show_invite_link`, and references official relay list website. The "stale" label suggests this PR has been open since July 3 and may require rebase or review.

## 4. Community Hot Topics

Both issues opened yesterday gained immediate attention but currently have no comments, indicating users report directly without much discussion yet:

1. **[Issue #3351 — Session Memory Data Loss After Auto-Compression](https://github.com/sipeed/picoclaw/issues/3351)** — A user reports that the automatic compression feature *physically rewrites* the `.jsonl` session file via `SetHistory → rewriteJSONL`, deleting original chat records permanently. After memory loss, there is no way to recover history, breaking the core promise of durable memory storage.

2. **[Issue #3350 — Web UI Input Lag on Low-Power Devices](https://github.com/sipeed/picoclaw/issues/3350)** — Typing in the chat input box causes severe lag on embedded devices (RV1106, RISC-V boards). The user notes CPU spikes increase with chat history length, suggesting an O(n) rendering or state propagation issue affecting every keystroke.

**Analysis**: Both issues highlight friction between PicoClaw's lightweight/embedded positioning and its user experience promises. The memory data loss issue is potentially a fundamental design flaw in the persistence layer, while the UI performance issue may require architectural changes (lazy rendering, virtualization, or debounced input handling).

## 5. Bugs & Stability

Two bugs reported today, both open with no fix PRs yet:

**High Severity:**
- **[Issue #3351 — Auto-compression physically deletes session originals](https://github.com/sipeed/picoclaw/issues/3351)** — The `JSONLStore` is not fully append-only; `rewriteJSONL` overwrites the file, causing permanent loss of history even after memory recovery. This is a data-integrity issue that undermines user trust. The user performed source-code analysis and pinpointed the exact function, providing actionable debugging information.

**Medium Severity:**
- **[Issue #3350 — Input lag proportional to chat history length](https://github.com/sipeed/picoclaw/issues/3350)** — UI responsiveness degrades with session size on low-perfomance devices. Not a crash but significantly impacts UX for small hardware, a core PicoClaw use case.

Neither issue has associated fix PRs at this time.

## 6. Feature Requests & Roadmap Signals

While neither issue is explicitly a feature request, both signal clear roadmap implications:

- **True append-only history / archive before compression** — Users demand a non-destructive memory system. A potential design: keep append-only raw logs, and only store a separate compressed/indexed view for context injection. This could be implemented as an optional archive configuration.
- **Progressive UI rendering** — The input lag issue suggests the Web UI needs lazy rendering, DOM virtualization, or asynchronous state throttling to support large histories on constrained hardware.

These pain points, if addressed, would strengthen both the data-resilience story and embedded-device viability — two key differentiators for PicoClaw.

## 7. User Feedback Summary

User feedback this period reveals two key frustrations:

1. **Memory loss is permanent — and hidden.** The user had to inspect raw `.jsonl` files to confirm data was physically deleted, not just visually hidden. This breaks the expectation that memory is "persistent storage" and suggests trust erosion in PicoClaw's core value proposition.

2. **Performance on small devices is a real issue.** For an embedded/RISC-V-focused assistant, lag in a basic chat input box is a blocker. The user explicitly notes that even Web UI input handling is affected by history size, making PicoClaw feel unsuitable for its intended hardware platforms.

No positive feedback was captured in this window. The project should monitor for escalation of these issues or PR attempts from the community to fix them.

## 8. Backlog Watch

One PR requires attention:

- **[PR #3222: deltachat refactoring (stale)](https://github.com/sipeed/picoclaw/pull/3222)** — Open since July 3 (about 2 months), now tagged `[stale]`. Significant cleanup effort (−200 LOC), referencing official relay lists, and updating API naming. Requires maintainer review: rebase needed, decisions on backward-compat of `invite_link` rename, and whether secrets-only configuration via jsonrpc is acceptable.

No issues appear to be long-abandoned at this time, as both new issues are less than 48 hours old.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-31

## 1. Today's Overview
NanoClaw is in an intense development sprint, with 25 open PRs receiving activity in the last 24 hours — a clear signal that core maintainers (primarily `zvi-fried`) are actively pushing a large provider-contract refactor series through review. While no PRs were merged or closed today, the volume of updated PRs indicates active iteration and CI re-runs. Issue activity is light (just 2 new items), but both are substantive: a feature request for a new provider gateway and a bug report about symlink mishandling in the update tooling. The project is clearly prioritizing architectural standardization (provider contracts, skill systems) over new releases, as evidenced by the zero new releases during this period.

## 2. Releases
No new releases were published in the last 24 hours. The project continues to operate on its previous release while substantial refactoring work is in flight on the `main` branch.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours, but the following active work is progressing toward merge:

- **Provider Contract Refactor Series**: A substantial block of PRs from `zvi-fried` (#3581, #3584, #3585, #3586, #3588, #3591) is implementing a standardized provider contract system — declaring runtime, host, setup, codex, and opencode provider contracts, plus core-owned instruction canon. This is a major architectural cleanup making provider integrations more portable and consistent.
- **Ollama / Local Model Stack**: `amit-shafnir` continues work on the Ollama provider payload (#3546), a one-command `ollama launch nanoclaw` installer (#3548), and engine seams for registry providers (#3547). The seam work (#3547) is particularly important as it unlocks the broader provider registry vision.
- **Local Web Chat Channel**: PR #3298 from `amit-shafnir` adds a local web chat channel, eliminating the need for external accounts on first use — a major onboarding improvement.
- **Skill System Upgrades**: Multiple PRs improve skill tooling — deterministic apply directives (#3676), parallelized CI composition checks (#3678), and test coverage for main/companion skills (#3677).
- **Slack Fixes**: `zvi-fried` is working on preserving human authorship for delegated uploads (#3686) and making agent-flow tests executable (#3675).

## 4. Community Hot Topics
The most active discussion centers on:

- **Provider Abstraction Layer** — The cluster of refactor PRs (#3581–#3593, #3547) represents the community's push toward a clean, pluggable provider ecosystem. These are all open and being shepherded by core-team members, suggesting a deliberate, coordinated architectural evolution rather than organic community demand.
- **Conifer Gateway (Issue #3685)** — A new feature request seeking first-class support for the [Conifer gateway](https://conifer.build), a universal provider that speaks both OpenAI and Anthropic wire formats and claims "genuinely free" local models. This signals user appetite for gateway-style providers that consolidate access to multiple models. [[Issue #3685](https://github.com/nanocoai/nanoclaw/issues/3685)]
- **Local-First Usage** — The ongoing Ollama work combines with issue #3685 to show a strong community desire for local, free, and BYOK model options.

## 5. Bugs & Stability
One bug was reported today, and while no official fixes were merged, PR #3682 directly addresses it:

- **HIGH — Symlink Snapshot Corruption in update-nanoclaw (Issue #3684)**: When `data/` or `groups/` are symlinked out of the checkout, the `/update-nanoclaw` mutable-state snapshot silently captures symlinks instead of content. The transaction then reports success, and `rollback` restores links that already point at live (possibly forward-migrated) data. This is a **data-safety and rollback-integrity bug** — the update tool can incorrectly restore symlinks and mislead users into thinking a rollback was successful when data could be lost. Reported by `dweekly`. [[Issue #3684](https://github.com/nanocoai/nanoclaw/issues/3684)]
  - **Related Test Fix**: PR #3682 from `glifocat` fixes a stale test in `scripts/skill-directives.test.ts` that was keeping `main` red — the test asserted an outdated file list for add-slack's copy fence. [[PR #3682](https://github.com/nanocoai/nanoclaw/pull/3682)]

## 6. Feature Requests & Roadmap Signals
- **Conifer Gateway Support (Issue #3685)** — This request seeks first-class support for Conifer as a model provider, covering all Conifer models, bring-your-own-key, and truly free local models. Given the gateway speaks both OpenAI and Anthropic wire formats, integration complexity appears low. **Prediction**: With the provider contract refactor underway, this could be a natural early adapter of the new architecture and may land in the next release cycle. [[Issue #3685](https://github.com/nanocoai/nanoclaw/issues/3685)]
- **Provider Registry Vision** — PR #3547 ("engine seams for registry providers that wrap the Claude path") is the enabler for a broader `providers` registry branch (starting with Ollama). The trajectory is clear: a plugin-style registry where users can point to any provider and have NanoClaw adapt. **Prediction**: This is likely a headline feature in the next minor release.
- **Local Web Chat (PR #3298)** — Aiming to eliminate the "need an account before you can try it" problem. Combined with Ollama work, this points toward a completely self-contained, zero-external-dependency NanoClaw experience.

## 7. User Feedback Summary
- **Onboarding friction is a real concern** — both the local web chat PR (#3298) and the Conifer request emphasize reducing setup complexity. The PR description in #3298 explicitly calls out "no way to reach an agent when you are sitting at" the machine, which is a clear user pain point.
- **Local models are desired** — The Ollama PRs highlight demand for running NanoClaw without any cloud dependency. The Conifer request further amplifies this, explicitly seeking "genuinely free" local usage.
- **Update reliability is critical** — The symlink bug (#3684) was filed by a user with a clear, detailed reproduction. It indicates that users deeply rely on `update-nanoclaw` and trust its rollback; the silent failure mode undermines that trust.
- **Provider fragmentation is being felt** — With codex and opencode having distinct contracts, users and maintainers are pushing toward consistency. The refactor series is a direct response to this friction.

## 8. Backlog Watch
None of the currently open items appear severely neglected — the project maintains a fast review cadence. The following warrant close attention due to their duration without merge:

- **PR #3298 — Local Web Chat** (open since 2026-08-17, ~2 weeks) — A major feature and one of the oldest open PRs. It has significant breadth and likely needs thorough review. Its `PR: Feature, PR: Skill` tagging suggests it may be waiting on skill-system changes to merge cleanly. [[PR #3298](https://github.com/nanocoai/nanoclaw/pull/3298)]
- **PR #3505 — Route attachments through selected mailbox mounts** (open since 2026-08-24) — A functional fix that has been in review for a week without being merged, yet remains actively updated. Worth monitoring to ensure it doesn't stall. [[PR #3505](https://github.com/nanocoai/nanoclaw/pull/3505)]
- **Provider Contract Series (#3581–#3593)** — These have been open 3–4 days and are part of a large interdependent block. None can merge until the whole series is coherent, so progress will come as a batch. Maintainers should watch for review bottlenecks as the series finalizes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-31

## 1. Today's Overview

IronClaw is in a steady maintenance phase with no new issues filed and no releases cut in the last 24 hours. Activity is concentrated entirely on the pull request front, with 11 PRs updated — 10 still open and 1 closed — though none merged today. The most notable signal is internal engineering depth: two `XL`-sized CI refactors and a design-system foundation PR are actively iterating, indicating real infrastructure investment. Two focused bug fixes from `standardtoaster` around error semantics in memory and tool-disclosure paths continue to move through review, suggesting a cleanup pass on error handling quality. Dependabot churn remains the baseline noise, with several batches pending for Rust crates, WASM, and GitHub Actions. Overall, the project looks healthy but quiet externally — the pulse is in CI, dependency hygiene, and internal correctness work rather than user-facing features.

## 2. Releases

**No new releases in the last 24 hours.** No release candidates, tags, or version bumps were published for IronClaw in this window. Users on the default branch should not expect any immediate changes to their workflow.

## 3. Project Progress

No PRs were merged in the last 24 hours. One PR was closed:

- **[#7959 — chore(deps): bump the everything-else group across 1 directory with 15 updates](https://github.com/nearai/ironclaw/pull/7959)** — Closed (not merged). This Dependabot batch (holding `uuid 1.25.0`, `base64 0.23.1`, `toml`, and 12 others) was closed, likely superseded by the newer open PR #7993 with 16 updates in the same group.

**Actively advancing (not yet merged):**

- **[#7988 — chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988)** — Automated nightly CI snapshot refresh from `ironclaw-ci[bot]`. Keeps the committed codebase-memory bootstrap fresh for agents; core plumbing only, no user-visible change.

- **[#7831 — Design System Phase 3a foundation — Chromatic lane + missing token axes](https://github.com/nearai/ironclaw/pull/7831)** — Large-scope contribution from `rdisandro`. Adds a non-blocking `webui-v2-chromatic` CI lane to publish Storybook snapshots for visual regression across the Phase 3 reskin, and fills missing design-token axes. Deliberately isolated from the main style roll-up so it cannot block unrelated PRs.

- **[#7992 — ci: unify bounded integration execution](https://github.com/nearai/ironclaw/pull/7992)** — Core-authored (`henrypark133`) unification of all inventory-selected integration test targets into a single `cargo nextest` run with a fixed concurrency ceiling of four. Removes the second shell projection and per-group runners.

- **[#7985 — fix(memory): a missing document is a domain failure, not a malformed request](https://github.com/nearai/ironclaw/pull/7985)** by `standardtoaster` — Corrects error classification so a well-formed read of a non-existent document maps to a domain-level failure with the right message instead of the misleading *"tool input could not be encoded"*.

- **[#7990 — fix(tool-disclosure): an unresolvable tool name is not an encoding error](https://github.com/nearai/ironclaw/pull/7990)** by `standardtoaster` — Splits a shared error helper so genuinely malformed input and an unresolvable tool name no longer share the same `FailureKind::InputEncode` misclassification.

## 4. Community Hot Topics

No issues are open, and none of today's PRs carry notable comment counts or reactions. The engagement signal is in authorship and scope rather than discussion volume:

- **[#7977 — fix(loop): terminate on dominant repeated output, cap interactive wall clock](https://github.com/nearai/ironclaw/pull/7977)** — A core-authored fix for unintended runaway agent loops. PR #7531 removed a digest-based terminator (firing after 3 consecutive `NoChange` batches), and since then nothing in the default loop family can end a run for non-progress. A production run (`e3513a4e`, 2026-08-27) hit **593 tool calls over 70 minutes** with no terminator. This is the highest-impact discussion topic by gravity: agent-loop termination policy directly affects cost, latency, and trust in autonomous runs.

- **[#7831 — Design System Phase 3a](https://github.com/nearai/ironclaw/pull/7831)** — Represents a sustained investment in web UI foundations. The deliberate choice to keep the new Chromatic lane non-blocking signals a cautious rollout strategy to avoid friction with existing landings.

- **[#7992 — CI unification](https://github.com/nearai/ironclaw/pull/7992)** — Another internally driven quality-of-life change; the explicit concurrency cap of four suggests prior test flakiness or resource contention under parallel execution.

## 5. Bugs & Stability

No bugs were formally reported via issues today, but two fix PRs are in flight that address user-visible misclassification bugs:

| Severity | Bug | Fix PR | Status |
|---|---|---|---|
| **Medium** | Agent loop cannot terminate on non-progress: a production run executed **593 tool calls over 70 minutes** because the `NoChange` digest terminator was removed in #7531 and not replaced with an equivalent guard. | [#7977](https://github.com/nearai/ironclaw/pull/7977) | Open, core-authored |
| **Low** | Memory read of a missing document is mislabeled as *"the tool input could not be encoded"* — quality-of-life UX error that actively misleads callers debugging real failures. | [#7985](https://github.com/nearai/ironclaw/pull/7985) | Open |
| **Low** | Tool-disclosure bridge misclassifies unresolvable tool names as `InputEncode` errors — same families of misleading diagnostic, different surface. | [#7990](https://github.com/nearai/ironclaw/pull/7990) | Open |

The `#7977` loop-termination issue is the most important stability item on the board. A 70-minute, 593-tool-call runaway run is exactly the kind of edge that erodes operator trust and inflates costs, and it deserves a fast, safe merge.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests appeared in the last 24 hours. Roadmap signals come from in-flight engineering work:

- **Design System Phase 3 (webui-v2)** — The Chromatic lane landing in [#7831](https://github.com/nearai/ironclaw/pull/7831) suggests a deliberate Phase 3 rollout with visual-regression safety nets. Expect token changes and component reskin to continue, likely across multiple Phases (3b, 3c, etc.), before webui-v2 is generally available.

- **Bounded, deterministic integration execution** — [#7992](https://github.com/nearai/ironclaw/pull/7992) unifies all integration targets under a single `cargo nextest` run. Implies that CI flakes and slow per-group runners were real pain; users benefit from predictable test latency.

- **Agent loop safety rails** — [#7977](https://github.com/nearai/ironclaw/pull/7977) caps interactive wall-clock time and adds a dominant-repeated-output terminator. The need for explicit termination policies is a strong signal that unbounded loops in production were a known cost/risk pain point.

Nothing user-requested is queued. The likely "next version" will carry improvements to agent loop hygiene, CI speed/predictability, and the first slice of the webui-v2 reskin — all features that ship as internal quality, not new product surface.

## 7. User Feedback Summary

No direct user feedback (issues, comments, or reactions) arrived in this window. Indirect signals from code and PR bodies:

- **Runaway loops are a real production pain.** A production run reaching 593 tool calls over 70 minutes without termination is cited directly as motivation for #7977. Operators need confidence that agents will stop when progress stalls; this is a trust-and-cost issue, not a nice-to-have.

- **Error messages are being audited for truthfulness.** Two PRs from `standardtoaster` (#7985, #7990) both fix the same class of problem: a domain failure masquerading as an encoding error. This implies users have hit misleading diagnostics that sent them hunting for input-format bugs when the real problem was semantic.

- **CI churn feels noisy.** Three Dependabot PRs (#7993, #7834, #7020) sit open across Rust, WASM, and tokio ecosystems, with #7959 closed as superseded. Batch-update hygiene is active, but the volume of open dependency PRs suggests a need to clear the board soon (or let automation handle it).

Satisfaction level is not measurable without issue volume; the absence of bug reports in 24h is neutral given the low overall activity.

## 8. Backlog Watch

No issues exist in the tracker, and no PR is stale enough to flag as abandoned. The closest to "watched" are long-lived dependency updates:

- **[#7020 — chore(deps): bump tokio-tungstenite 0.29.0 → 0.30.0](https://github.com/nearai/ironclaw/pull/7020)** — Open since **2026-08-02** (29 days). A `tokio`-ecosystem bump that has sat untouched for a month despite being small (S) and low risk. If the 0.30 API has breaking changes blocking a trivial merge, maintainers should either close it or call out the blockers.

- **[#7834 — chore(deps): bump the wasm group with 4 updates](https://github.com/nearai/ironclaw/pull/7834)** — Open since **2026-08-23** (8 days), `L`/medium risk. WASM package updates touch `wasmtime`, `wasmtime-wasi`, `wit-component`, and `wit-parser` — an area where silent breakage is expensive. Not urgent, but worth a review once current CI work lands.

- **[#7835 — chore(deps): bump the actions group with 5 updates](https://github.com/nearai/ironclaw/pull/7835)** — Open since **2026-08-23** (8 days). Includes `actions/setup-node` jumping `4.0.2 → 7.0.0` (a major-version step) and `claude-code-action` 1.0.183 → 1.0.208. Maintainers should verify a major Node setup action bump does not cascade into every CI job's behavior.

---

*Data source: IronClaw GitHub repository (nearai/ironclaw), snapshot taken 2026-08-31.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-31

## 1. Today's Overview

LobsterAI's activity on 2026-08-31 was modest but meaningful. Seven issues were updated (all closed), and seven PRs received updates — three still open and four closed/merged. All closed issues are legacy bug reports from April 2026 that were swept up by the stale-bot, indicating no new user-reported problems surfaced in the last 24 hours. However, the project shows active development momentum: a significant new PR (#2574) introducing an interactive in-app browser was opened today, and a UI improvement for unauthenticated chat flows (#2573) was closed. The GitHub backlog contains several long-standing open PRs (as old as 5 months) that could use maintainer attention, but the immediate code-review pipeline appears healthy. No new releases were published.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release information predates this digest window.

## 3. Project Progress

Four PRs were closed/merged today:

- **#2573 — feat(cowork): show login prompt before unauthenticated chat** (`area: renderer`, `area: cowork`) — Closed/merged. Adds a dedicated LobsterAI welcome modal for unauthenticated users attempting to chat without a configured custom model, with localized copy and diagnostics logging. This improves first-run UX and reduces confusion about login requirements.
- **#1769 — feat(ui): add skeleton loading screen for cowork initialization** (`area: renderer`, `area: cowork`) — Closed (stale). Replaces static loading text with animated shimmer skeletons during Cowork initialization, improving perceived performance.
- **#1770 — feat(ui): enhance empty states for skills and task run history** (`area: renderer`) — Closed (stale). Adds icons and subtitles to empty states in SkillsManager and TaskRunHistory, matching the richer style introduced in CoworkSessionList.
- **#1765 — chore(deps): bump @headlessui/react from 1.7.19 to 2.2.10** — Closed (stale, dependabot). Dependency upgrade for the UI component library.

A key new PR opened today:

- **#2574 — feat(browser): add interactive in-app browser** (`area: renderer`, `area: main`, `area: openclaw`, `area: cowork`, `area: artifacts`) — Open. Adds an interactive Agent Browser in the right-side artifact panel (retaining the independent window mode), routes OpenClaw browser tools through the LobsterAI MCP bridge for shared user/agent browsing, and persists the in-app browser profile. This is a substantial feature indicating deep integration between the agent and the desktop shell.

## 4. Community Hot Topics

The most active discussions in the updated set were tied at 4 comments each:

- **[#1698 — [stale] 有道龙虾启动状态下，安装智企帝王蟹必现gateway端口冲突和进程竞争](https://github.com/netease-youdao/LobsterAI/issues/1698)** (4 comments) — A deterministic port conflict and process race between LobsterAI and another enterprise product ("智企帝王蟹"). Both products compete for the same gateway port on macOS Tahoe. This underscores a need for configurable gateway ports and better coexistence with other tools in the ecosystem.

- **[#1744 — [stale] Bug report](https://github.com/netease-youdao/LobsterAI/issues/1744)** (4 comments) — A bug report that failed to upload its attached document (a `.docx` support letter). The inability to attach files properly is itself a UX concern.

Both were closed by automation today without visible maintainer intervention, which may leave users without clear resolution paths.

## 5. Bugs & Stability

No new bugs were reported in the last 24 hours. All seven issue updates were stale-closures of earlier reports. The **most severe historical bug** in the set remains:

- **[#1698 — Gateway port conflict with concurrent products](https://github.com/netease-youdao/LobsterAI/issues/1698)** — High severity. Deterministic failure when another agent product installs alongside LobsterAI (macOS). Blocks both products from functioning. **No fix PR yet exists.**

- **[#1783 — edit diff 失灵 after update](https://github.com/netease-youdao/LobsterAI/issues/1783)** — Medium severity. User root-caused the bug to `extractDiffFromToolInput` in `app.asar` only reading `oldText/newText` at top-level of `toolInput`, missing nested variants. The user provided a detailed analysis; worth flagging for maintainers to verify and fix.

- **[#1714 — Windows 11: white/invalid icons on install](https://github.com/netease-youdao/LobsterAI/issues/1714)** — Low-to-medium severity. Packaging/icon issue affecting a subset of Win11 users.

## 6. Feature Requests & Roadmap Signals

Two feature-oriented requests appeared in the stale-closed set:

- **[#1745 — Support OAuth2 / modern auth for Outlook email](https://github.com/netease-youdao/LobsterAI/issues/1745)** — User cannot connect Outlook email because LobsterAI doesn't support OAuth2/new-style authentication, and app passwords are disabled by Microsoft. **This is a strong signal for adding OAuth2 email support** in the next release.

- **[#1688 — Allow dynamic temperature adjustment in chat](https://github.com/netease-youdao/LobsterAI/issues/1688)** — User requests keyword-driven runtime adjustment of LLM `temperature`. This suggests power-user desire for granular model control.

The **in-app browser (#2574)** is the clearest forward-looking feature currently being built, and aligns with the broader trend of embedding agent web interaction directly into the desktop UI.

## 7. User Feedback Summary

- **Coexistence pain points**: Users running multiple AI agent products report conflicts (port/process), indicating a need for better isolation and configurability.
- **Model parameter control**: Advanced users want finer control over LLM inference parameters (temperature) without leaving the chat interface.
- **Email integration barrier**: Microsoft's security policies block LobsterAI mail integration for Outlook users — a real-world blocker for productivity workflows.
- **UI polish is noticed and appreciated**: PRs improving skeleton loaders and empty states (merged recently) show the team is actively responsive to UX quality.
- **Bug reporting friction**: One user's report was incomplete due to an upload failure, and stale-closure without maintainer follow-up may leave users feeling unheard.

## 8. Backlog Watch

Items that remain open and have been silent for a long time, needing maintainer attention:

- **[#1127 — fix(mcp): cancel force-close timer in stop() to prevent closing new server](https://github.com/netease-youdao/LobsterAI/pull/1127)** — Open for 5 months. A race-condition fix with a clear analysis and proposed patch. Unaddressed. Also a prerequisite for reliable MCP reconnection.

- **[#1130 — fix(api): Anthropic SSE streaming data loss due to missing line buffering](https://github.com/netease-youdao/LobsterAI/pull/1130)** — Open for 5 months, linked to a specific bug report (#922). Silent data loss is a serious correctness issue; this fix is straightforward and high-value.

- **Historical issue set (#1688, #1698, #1745, #1783)** — All were closed by the stale bot today, but none have visible fix PRs or maintainer responses. These may be "closed" but the underlying problems remain. Maintainers should consider reopening or explicitly commenting on them with status updates.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-31

## 1. Today's Overview

Moltis shows a quiet but healthy development cycle today. One issue was closed (resolving a long-standing arm64 Docker sandbox bug) and one PR was merged that addresses that same issue, while a new PR (#1248) targeting executor node selection semantics is now open for review. Activity levels are moderate with focused, high-quality changes rather than broad churn. The project released a new build (20260830.01) yesterday, indicating regular automated release cadence. Overall, the project appears stable with maintainers actively closing out backlog items.

---

## 2. Releases

**New release: `20260830.01`** (published 2026-08-30)

No detailed changelog was provided in the release notes. Given that the Docker sandbox fix for arm64 (PR #1247) was merged on the same date as this release, it is highly likely this build includes that fix. No breaking changes or migration notes were published. Users on arm64 (Apple Silicon) who have experienced Docker sandbox failures should upgrade to this build.

---

## 3. Project Progress

**Merged/Closed PR:**
- **#1247 — fix(sandbox): drop DMI sysfs masks on arm64 Docker daemons** ([link](https://github.com/moltis-org/moltis/pull/1247)) — *Closed (merged), by Saraswat123*
  - Fixes issue #1085. The PR addresses a bug in `crates/tools/src/sandbox/docker.rs` where Moltis incorrectly assumed Docker Desktop's Linux VM on macOS had a full sysfs, leading it to mask `/sys/class/dmi` and `/sys/devices/virtual/dmi`. These paths don't exist on arm64 (DMI is x86-only), causing runc mount failures. The fix makes the masking conditional and drops DMI masks on arm64.

**Open PR under review:**
- **#1248 — fix(exec): honor explicit null node selection** ([link](https://github.com/moltis-org/moltis/pull/1248)) — *Open, by mikemikimike*
  - Addresses a discrepancy where `ExecTool` was not honoring an explicit `node: null` parameter. The fix ensures null node selection routes to local execution, preserves configured defaults when `node` is omitted, and includes a regression test with a connected node provider.

---

## 4. Community Hot Topics

No issues or PRs generated significant discussion today — all items have zero comments and zero reactions. The most substantive activity is the open PR #1248 ([link](https://github.com/moltis-org/moltis/pull/1248)) which, while not heavily commented, touches on a real usability concern: users need a way to explicitly override node provider defaults and force local execution. The silent nature of these threads suggests either a small but engaged user base or that maintainers are handling issues directly without extended public discussion.

---

## 5. Bugs & Stability

**Resolved — Medium severity:**
- **#1085 — Docker sandbox fails on arm64: /sys/class/dmi mount error** ([link](https://github.com/moltis-org/moltis/issues/1085))
  - **Impact:** Docker sandbox completely unusable on Apple Silicon (arm64) — runc could not create mountpoints for nonexistent DMI paths.
  - **Status:** CLOSED today, fixed by PR #1247 ([link](https://github.com/moltis-org/moltis/pull/1247)), which was merged the same day. Fix is expected in release `20260830.01`.
  - **Note:** This issue was open for ~3 months (created 2026-05-29, fixed 2026-08-30), suggesting some delay in triage or fix effort. Users on arm64 who encountered this should upgrade promptly.

No new bugs, crashes, or regressions were reported today.

---

## 6. Feature Requests & Roadmap Signals

While no formal feature requests were filed today, the open PR #1248 ([link](https://github.com/moltis-org/moltis/pull/1248)) signals a roadmap direction around execution control. Specifically, it addresses a need for **more granular node selection semantics** — allowing users to explicitly force local execution even when a node provider is configured. This suggests the project is investing in making the local/remote execution boundary more predictable for users. Given that the PR includes regression tests and a clear root-cause analysis, it is likely to be merged soon and appear in a near-term release.

---

## 7. User Feedback Summary

The limited activity today makes broader sentiment analysis difficult, but two concrete signals emerge:

1. **arm64 users (Apple Silicon) were impacted for ~3 months:** Issue #1085 ([link](https://github.com/moltis-org/moltis/issues/1085)) went without a fix for 90+ days. This represents a real pain point for Mac users running containerized workloads. The fix is welcome, but the delay may have caused some users to seek workarounds or alternatives.

2. **Node selection UX needs clarity:** PR #1248 ([link](https://github.com/moltis-org/moltis/pull/1248)) highlights that the current behavior around `node: null` is confusing — users expected local execution but got provider-selected nodes. This points to a documentation or API semantics gap that the community is actively addressing.

Overall, sentiment appears neutral-positive: users are actively contributing fixes, and maintainers are responsive once issues surface. The lack of reactions or comments on today's items may also indicate that the project has a focused, technically deep user base rather than a large, vocal community.

---

## 8. Backlog Watch

No critical backlog items demand immediate maintainer attention today. The previously long-stalled arm64 Docker issue (#1085) has been resolved. The only open PR (#1248) is fresh (created today) and should be reviewed in a timely manner to keep momentum — given its clear scope, small diff, and regression test, a quick review cycle would maintain the positive trajectory. No other issues appear neglected or unanswered.

---

*All data sourced from the Moltis GitHub repository ([moltis-org/moltis](https://github.com/moltis-org/moltis)) as of 2026-08-31.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-31

## 1. Today's Overview

CoPaw (QwenPaw) is in an active pre-release phase, with the team preparing **v2.2.0-beta.4** (PR #7423) while the latest **v2.2.0-beta.3** undergoes installation verification (Issue #7394). Activity is high: 23 issues and 26 PRs were updated in the last 24 hours, with a 6/6 split between closed items in both categories. The project shows strong momentum across multiple fronts—dependency security patching (PRs #7425, #7427, #7429), core runtime stability fixes (PRs #7409, #7413, #7415), and platform-specific improvements for Windows (PR #7401) and Linux (Issue #7430). Notably, a **security/compliance-focused contributor** (guodaxia103) is driving a wave of vulnerability remediation and robustness improvements, signaling healthy maintainer engagement.

## 2. Releases

**No new releases in the last 24 hours.** The latest is **v2.2.0-beta.3**, currently undergoing release verification (Issue #7394). PR #7423 bumps the version to **2.2.0b4**, indicating the next beta is imminent. Users upgrading from 2.1.x to 2.2.0 betas should monitor Issue #7420 (stalls after upgrade) and Issue #7417 (duplicated stream chunks) for potential beta-specific regressions.

## 3. Project Progress

Six PRs were closed/merged today:

- **#7414** — `fix(pawapp): fail closed when chat runtime is unavailable` (under review): Removes synthetic chat fallback, replacing it with structured `AGENT_CHAT_RUNTIME_UNAVAILABLE` errors. Also closes Issue #7411.
- **#7403** — `Update README` (first-time contributor): Documentation update.
- **#7409** — `fix(agents): drop empty assistant text blocks` (closed): Addresses the "empty output_text" issue. This fix targets Issue #7402 by dropping empty `TextBlock(text="")` parts before persistence, preventing session history poisoning.
- **#7415** — `fix(pawapp-sdk): make stream cleanup non-blocking`: Makes stream cancellation idempotent and independent of stalled `reader.cancel` promises.
- **#7413** — `fix(runtime): preserve state when stream generator closes`: Persists interrupted runtime state on `GeneratorExit`, closing Issue #7410.
- **#7421** — `fix(yuanbao): restore protobuf decoding on protobuf 6+`: Removes the deprecated `including_default_value_fields` kwarg from `MessageToDict()`, fixing silent TypeError with protobuf 6.x/7.x.

**Other notable PRs in motion:**
- **#7423** — Version bump to 2.2.0b4 (by cuiyuebing).
- **#7372** — `fix(desktop): unify packaged Python runtime source` (ready for human review): Aligns Tauri desktop backend and bundled helper to the same pinned python-build-standalone runtime.
- **#7383** — `fix(plugins): avoid full module sweep after each load` (ready for human review): Fixes Windows startup performance by snapshotting `sys.modules` instead of canonicalizing every entry.

## 4. Community Hot Topics

**Most active issues (by comments):**

- **[#7420 — Tool results lost to agent + same command re-dispatched after write_file (doom-loop protection)](https://github.com/agentscope-ai/QwenPaw/issues/7420)** (4 comments): User reports 5 stalls in a single session on 2.2.0-beta.1 with a "doom-loop" trigger. *Underlying need: reliability of the tool-use loop and protection against retry storms.*

- **[#7402 — Empty assistant output_text blocks poison session history — Ark API 400](https://github.com/agentscope-ai/QwenPaw/issues/7402)** (3 comments): Empty text blocks in history cause every subsequent request to fail with `MissingParameter`. *Underlying need: robust session history serialization.* **Fix PR #7409 is closed/merged.**

- **[#7408 — Feishu channel config silently cleared; cron fails](https://github.com/agentscope-ai/QwenPaw/issues/7408)** (3 comments): Channel configuration mysteriously reset to defaults, causing `KeyError('channel not found: feishu')`. *Underlying need: data integrity in config persistence and clear error surfacing for cron jobs.*

- **[#6822 — Transient MCP streamable_http failure permanently blocks conversation](https://github.com/agentscope-ai/QwenPaw/issues/6822)** (3 comments, closed): An older bug recently closed—good sign of ongoing resolution.

- **[#7406 — Theming support request](https://github.com/agentscope-ai/QwenPaw/issues/7406)** (1 comment, enhancement): User manually edits `index.html` for custom theming because the desktop UI is locked to one orange accent (#f07e26). *Underlying need: desktop customization & CSS injection.*

- **[#7397 — Browser SDK spawns a new tab-group for every present()/open()](https://github.com/agentscope-ai/QwenPaw/issues/7397)** (1 comment): Every page open creates a separate tab-group rather than joining an existing one. *Underlying need: tab management in the browser SDK.*

## 5. Bugs & Stability

| Severity | Issue | Description | Status |
|---|---|---|---|
| **High** | [**#7402**](https://github.com/agentscope-ai/QwenPaw/issues/7402) | Empty assistant text blocks in session history poison every subsequent request → Ark API returns 400 | **Fix merged** (#7409) |
| **High** | [**#7420**](https://github.com/agentscope-ai/QwenPaw/issues/7420) | Tool results lost + same command re-dispatched after `write_file` triggers doom-loop protection (2.2.0-beta.1) | Open — no fix PR yet |
| **High** | [**#7408**](https://github.com/agentscope-ai/QwenPaw/issues/7408) | Feishu channel config silently cleared (enabled=false/app_id empty) → cron KeyError | Open — no fix PR yet |
| **Medium** | [**#7417**](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console shows large duplicated text chunks mid-stream, then consolidated copy at end (2.2.0b3) | Open — no fix PR yet |
| **Medium** | [**#7407**](https://github.com/agentscope-ai/QwenPaw/issues/7407) | Console messages silently drift to the wrong agent (chat-to-agent routing) | Open — awaiting user confirmation |
| **Medium** | [**#7397**](https://github.com/agentscope-ai/QwenPaw/issues/7397) | Browser SDK spawns new tab-group per present()/open() call | Open |
| **Low** | [**#7430**](https://github.com/agentscope-ai/QwenPaw/issues/7430) | Linux Tauri dependency glib 0.18.5 affected by GHSA-wrw7-89jp-8q8g (unsound iterator) | Open — tracking issue |

**Closed bugs today:** Step accordion collapsing all messages (#7418 and duplicate #7419 — closed as invalid), daily_users timestamp "UTC" confusion (#7399 — closed as design choice), PawApp runtime fallback (#7411 — fixed by #7414), MCP streamable_http block (#6822).

**Key takeaway:** The most severe open issue (#7420) involves a "doom-loop protection" mechanism misfiring, suggesting the retry guard introduced in recent betas may need tuning. The Feishu config loss (#7408) is a data-integrity concern that may require urgent attention before 2.2.0 stable.

## 6. Feature Requests & Roadmap Signals

- **[#7396 — Claude Code as a third-party agent harness — status?](https://github.com/agentscope-ai/QwenPaw/issues/7396)**: Codex and Qoder are supported in the console, but Claude Code remains "Coming soon" placeholder. Community asking for ETA. *Likely in next version given the harness registry already has placeholder.*

- **[#7405 — Plan Mode request](https://github.com/agentscope-ai/QwenPaw/issues/7405)**: User misses the plan mode to preview planned actions before execution; wants it alongside new mission/goal modes. *Possibly a candidate for 2.2.0 final.*

- **[#7406 — Official theming support (accent color, font, spacing)](https://github.com/agentscope-ai/QwenPaw/issues/7406)**: Desktop has no CSS injection point or config keys. User hacks the .app bundle. *Likely community favorite; could land in a minor release.*

- **[#7404 — Expose card_auto_layout in Console DingTalk settings](https://github.com/agentscope-ai/QwenPaw/issues/7404)**: Working backend option since #2238 but hidden from UI/docs. **First-time contributor kilowu has PR #7416 open to add the toggle.**

- **[#7163 — Session-level thinking modes (Off/Low/Medium/High)](https://github.com/agentscope-ai/QwenPaw/pull/7163)**: PR persists thinking level in chat metadata for cross-device sync. *Strong signal for 2.2.0.*

- **[#7183 — Workspace-scoped Skills preload configuration](https://github.com/agentscope-ai/QwenPaw/pull/7183)**: Opt-in preload for trusted/core Skills, following Claude Code subagent patterns.

**Prediction:** v2.2.0 final will likely include: Session-level thinking modes (#7163), DingTalk card_auto_layout toggle (#7416), Claude Code harness (placeholder exists, matching Codex/Qoder), and skils preload (#7183).

## 7. User Feedback Summary

**Positive signals:**
- Users acknowledge solid design choices: the daily_users timestamp "UTC" issue was closed as a deliberate AgentScope design decision (naive datetime = process local time), and the user agreed.
- The third-party agent harness (Codex/Qoder) is "a great addition" (#7396).

**Pain points:**
- **Tool-loop reliability** (#7420): "5 stalls in a single session" after upgrading to 2.2.0-beta.1 — a critical regression candidate. User explicitly notes stalls were *not* observed on 2.1.x.
- **Session history fragility** (#7402): One bad block permanently breaks an entire session — "every subsequent request fails."
- **Config data loss** (#7408): Feishu channel config "silently cleared" — user must manually restore `enabled: true`, `app_id`, `app_secret`.
- **Desktop customization gap** (#7406): "I've been customizing by editing index.html inside the .app bundle — it works, but every app update overwrites it."

**Overall:** Community is engaged and technical, providing detailed reproduction steps. The beta phase is clearly exposing real-world breakage, especially on Windows and with provider-specific edge cases (Ark, Yuanbao, ACP). The maintainer team is responsive, with same-day fix PRs for several reported issues.

## 8. Backlog Watch

Items needing maintainer attention (long-open or unaddressed):

- **[#7407 — Console messages drift to wrong agent](https://github.com/agentscope-ai/QwenPaw/issues/7407)**: Open since 2026-08-30, only 1 comment. AI-generated draft waiting for user confirmation. *At risk of being lost.*

- **[#7397 — Browser SDK tab-group behavior](https://github.com/agentscope-ai/QwenPaw/issues/7397)**: Open since 2026-08-28, only 1 comment. No maintainer response yet.

- **[#7405 — Plan Mode question](https://github.com/agentscope-ai/QwenPaw/issues/7405)**: Open since 2026-08-29, 2 comments, no maintainer reply visible.

- **[#5097 — Shield icon centering fix (CSS)](https://github.com/agentscope-ai/QwenPaw/pull/5097)**: PR open since **June 11 (82 days)** with zero comments since — a trivial frontend fix that appears blocked or forgotten. *Worth a look.*

- **[#7404 → #7416 — DingTalk card_auto_layout](https://github.com/agentscope-ai/QwenPaw/issues/7404)**: First-time contributor's PR #7416 is good but could use maintainer guidance to land successfully.

- **[#7420 — Doom-loop protection misfires](https://github.com/agentscope-ai/QwenPaw/issues/7420)**: Reported by MG1058 with 4 comments, no fix PR yet. This is the highest-priority **open** stability issue and should be picked up quickly.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-08-31

---

## 1. Today's Overview

ZeroClaw continues its intensive RFC-driven architecture evolution, with 50 issues and 50 PRs updated in the last 24 hours—the majority open and active. The project is in a heavy design phase, with no new releases and zero merged PRs today, indicating a focus on specification, review, and implementation maturation rather than shipping. High-severity bugs (S1 workflow blockers) are being actively tracked, and the project shows a healthy pattern of maintainer takeovers on long-running RFCs. The open PR queue is substantial, with several XL-sized changes awaiting review or author action, suggesting a bottleneck in the review pipeline. Overall, the project is in a "design and harden" phase rather than a "ship features" phase.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent activity appears to be the Rust 1.98.0 toolchain announcement (2026-08-20) referenced in PR #9527, which proposes bumping routine build toolchains while keeping the source floor at 1.96.0—suggesting a planned release may be pending that toolchain transition.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The open PR queue (50 items) includes several significant changes that are in flight:

- **[PR #10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142)** (XL, risk:high) — Secure transport with blind relay and native mTLS enrollment, superseding #9080. Requires author action.
- **[PR #10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412)** (XL, risk:high) — Extracts atomic session-ownership claim into a shared `SessionBackend` contract. Needs author action.
- **[PR #9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)** (XL, risk:high) — Per-agent ownership scoping for session tools and `discord_search`, closing check/use races.
- **[PR #9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)** (XL, risk:high, `do-not-merge`) — Credential rotation after rate limits; marked do-not-merge pending review.
- **[PR #9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** (XL) — Cron agent job wall-clock timeout that releases locks, addressing a likely deadlock/runaway scenario.
- **[PR #9326](https://github.com/zeroclaw-labs/zeroclaw/pull/9326)** (XL) — Signal Note to Self sync message processing.

Today's updates are concentrated on config fixes ([#10462](https://github.com/zeroclaw-labs/zeroclaw/pull/10462)), dependency gating ([#10454](https://github.com/zeroclaw-labs/zeroclaw/pull/10454), [#10467](https://github.com/zeroclaw-labs/zeroclaw/pull/10467)), and channel transcription fix ([#10487](https://github.com/zeroclaw-labs/zeroclaw/pull/10487)).

---

## 4. Community Hot Topics

The most active discussions are all RFCs with high risk and architecture impact:

1. **[Issue #9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** (28 comments) — This is the highest-activity item, now on revision 2. It proposes a major ownership boundary change: the runtime owns conversation sessions, with typed ingress envelopes at migration points. The sustained interest (28 comments over a month) suggests this is a contentious or highly consequential design decision.

2. **[Issue #6850 — RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** (23 comments) — A fundamental architecture boundary between memory storage and lifecycle policy. Long-running (since May) with ongoing interest.

3. **[Issue #9488 — RFC: Unified attachment architecture for web chat and channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** (22 comments) — Paired with #9487, this would unify attachment handling across all channels. The high comment volume and `needs-maintainer-review` tag indicate community engagement in shaping a critical surface.

4. **[Issue #6996 — RFC: Granular sandbox policy — filesystem and network restrictions](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** (17 comments) — Security-focused design for sandboxing; in-progress status.

5. **[Issue #8396 — RFC: Make wire protocol first-class in provider construction and onboarding](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)** (16 comments) — Ratified shape governed by FND-003 Rev. 15.

**Underlying need analysis:** The community is pushing for (a) clearer runtime/channel ownership boundaries, (b) consistent security and sandboxing, and (c) unified attachment handling. The recurring theme is architectural consolidation—reducing the number of places where a single policy is reimplemented per-channel or per-backend.

---

## 5. Bugs & Stability

Three S1 severity (workflow-blocked) bugs are active, ranked by risk:

1. **[Issue #10230 — Daemon startup or reload can overflow during agent initialization](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)** (S1, `r:needs-repro`, risk:high) — Stack overflow in Tokio worker when applying Quickstart config while daemon is running. No fix PR referenced yet; reproduction needed.

2. **[Issue #10061 — Provider-rejected image poisons later turns in a vision-capable session](https://github.com/zeroclaw-labs/zeroclaw/issues/10061)** (S1, in-progress) — Rejected image remains in conversation history and replays on every turn. **Fix PR exists:** [#10088](https://github.com/zeroclaw-labs/zeroclaw/pull/10088) (preserve attached images after source removal), addressing the related missing-image case.

3. **[Issue #9654 — Genuine operator denial reaches model with no semantics; model invents cause](https://github.com/zeroclaw-labs/zeroclaw/issues/9654)** (S1, risk:high) — Denial message is just "three words" with no semantics, causing hallucinated causes. Paired with PR #9423 fix for the "nobody was asked" half; this half still unaddressed.

Also notable:

4. **[Issue #9965 — Harden runtime-written executable test fixtures under parallel runtime gate](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** (p1, in-progress) — A test fixture failed due to writing after multithread.

5. **[Issue #9899 — bitmaps unmaintained advisory waiver (RUSTSEC-2026-0247)](https://github.com/zeroclaw-labs/zeroclaw/issues/9899)** (p1, blocked) — Security CI failing; blocked status.

6. **[Issue #10292 — ACP session tools cannot list/inspect Code sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/10292)** (S2, in-progress, follow-up).

---

## 6. Feature Requests & Roadmap Signals

The roadmap is heavily RFC-driven. High-signal signals from the most active items:

- **Runtime-owned session architecture** ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)) — Likely to land within 1–2 releases given its status and the ownership boundary ratification.
- **Unified attachment architecture** ([#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)) — Paired with #9487; likely coordinated landing.
- **Granular sandbox policy** ([#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996), in-progress status) — Expected soon; touches tool security.
- **Memory lifecycle decoupling** ([#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)) — Long-running; may land after the storage/enrichment boundary ([#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)) is settled.
- **Single-tool provider rounds** ([#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222)) — New RFC (Aug 21) for interactive agents; early stage but addresses a real UX gap.
- **Computer-use support** ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)) — Desktop screen interaction; still in RFC with maintainer takeover, indicates commitment.
- **WASM plugin runtime** ([#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)) — Composable plugin architecture; a v2 of the existing WASM host.

**Predicted next release candidates:** Those items with `status:in-progress` or `status:accepted` tags—[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) (sandbox), [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) (layer inversion), and [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (local_small profile).

---

## 7. User Feedback Summary

User pain points are concentrated in several areas:

- **Local-first usage is underserved**: [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (8 👍, most-liked issue) explicitly calls out prompt bloat, permissive fallback parsing, and system-instruction leakage into user-visible output when using compact local models. This has 8 reactions and strong advocacy.
- **Diagnostics discoverability**: [#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650) — Users cannot find the actual log path when Doctor/ZeroCode diagnostics fail.
- **Session isolation confusion**: [#9341](https://github.com/zeroclaw-labs/zeroclaw/pull/9341) and [#10292](https://github.com/zeroclaw-labs/zeroclaw/issues/10292) — Users see divergences between Code session history and persistent memory, and ACP session tools don't list Code sessions. This suggests user-facing naming/semantics need clarity.
- **Discord audio transcription failure**: [#9905](https://github.com/zeroclaw-labs/zeroclaw/issues/9905) — Transcription manager not bound to active provider; concrete degraded behavior for Discord users.
- **Vision session poisoning**: [#10061](https://github.com/zeroclaw-labs/zeroclaw/issues/10061) — A provider-rejected image breaks all subsequent turns; noisy and confusing.
- **ZeroCode keybinding semantics**: [#9171](https://github.com/zeroclaw-labs/zeroclaw/issues/9171) — Control chord behavior depends on key character (macOS Command detection); users want explicit configuration.

**Overall sentiment**: Users are engaged and providing detailed real-world failure reports. The most common emotional theme is frustration with invisible or misleading system behavior (denial text, log paths, session lists), not with core functionality itself.

---

## 8. Backlog Watch

Items that have been open long or are stuck and need maintainer attention:

- **[Issue #6850 — RFC: Decouple memory lifecycle policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** (opened May 22, 23 comments, `status:no-stale`) — Active but unresolved for 3+ months; the maintainer decision queue tracker ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) should prioritize a REVISE/ACCEPT vote.

- **[PR #9419 — Credential rotation after rate limits](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)** (opened Jul 26, `do-not-merge`, risk:high) — Marked do-not-merge for over a month; needs either review, scope reduction, or explicit close to unblock the contributor.

- **[PR #9341 — ZeroCode Code session-history isolation UI](https://github.com/zeroclaw-labs/zeroclaw/pull/9341)** (opened Jul 24, `do-not-merge`, risk:high) — Same situation; a UI disclosure that may be superseded by session architecture RFCs (#9487).

- **[Issue #9899 — RUSTSEC-2026-0247 advisory waiver](https://github.com/zeroclaw-labs/zeroclaw/issues/9899)** (p1, `status:blocked`) — Security CI failing; the blockage needs triage: a dependency removal or waiver decision. This is a security posture issue that may impact release gating.

- **[Issue #10230 — Daemon stack overflow](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)** (S1, needs-repro) — Needs a reproduction path to unblock a fix; no assignee linked yet.

- **Oldest active RFCs**: [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (computer-use, May 25), [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) (layer inversion, May 23, accepted) — Both have maintainer takeover but have been open 3+ months; the accepted one (#6864) especially needs implementation PRs.

---

*Report generated from ZeroClaw GitHub activity for 2026-08-31.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*