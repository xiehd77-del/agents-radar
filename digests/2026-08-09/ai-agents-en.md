# OpenClaw Ecosystem Digest 2026-08-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-09 01:51 UTC

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

Based on the GitHub data for OpenClaw (github.com/openclaw/openclaw) from 2026-08-09, here is the project digest.

---

## OpenClaw Project Digest - 2026-08-09

### 1. Today's Overview

OpenClaw remains a highly active project with 500 issues and 500 PRs updated in the last 24 hours, indicating a very high volume of community engagement and development effort. The current activity is heavily focused on addressing a backlog of stability and reliability issues, particularly around session state management, message delivery failures, and memory leaks in the gateway process. Two new patch releases were published today, focusing on hardening browser and network boundaries. The maintainers are engaged, with numerous PRs awaiting review and a significant number of issues tagged as needing a product decision, suggesting a triage bottleneck.

### 2. Releases

Two new patch releases were published.

- **v2026.6.34**
    - **Highlights:** Focuses on **safer browser and network boundaries.** New safety measures include sandboxed browser routes, trusted DNS targets, custom browser origins, and loopback provider endpoints. These changes reject unsafe access paths to mitigate potential security risks.
    - **Credits:** Thanks to contributors @eleqtrizit, @brunowowk, @mosidevv, and @pgondhi987.

- **v2026.6.33**
    - **Highlights:** Focuses on **safer network and secret boundaries.** This release caps hostile response sizes for provider streams, Discord REST responses, browser fetches, and OAuth paths. It also ensures Telegram credentials are kept out of diagnostics.
    - **Credits:** Thanks to contributors @wangmiao0668000666 and @Alix-007.

No breaking changes or migration notes are listed for these releases.

### 3. Project Progress

Of the 500 PRs updated in the last 24 hours, 177 have been merged or closed. While the top PRs by comment count are mostly still open and awaiting review, the active merging indicates significant behind-the-scenes progress. Key areas of advancement include:

- **Stability and Fixes:** The high volume of closed PRs suggests a sustained effort to fix bugs. The most active PRs focus on core stability, including fixing gateway hangs on stalled requests ([PR #111313](https://github.com/openclaw/openclaw/pull/111313)) and preserving cleanup across fallback disconnects in cloud workers ([PR #120715](https://github.com/openclaw/openclaw/pull/120715)).
- **Feature Development:** A major feature in progress is the "Durable Core" stack, with a PR to "persist agent-turn front doors" ([PR #111343](https://github.com/openclaw/openclaw/pull/111343)) moving the architecture toward greater infrastructure-level reliability.
- **Feature Added:** The `openclaw resume` command was submitted to make attaching the TUI to a recent session far more ergonomic ([PR #120664](https://github.com/openclaw/openclaw/pull/120664)).
- **Fixes Across the Board:** Other merged/closed work covers areas such as Windows child process env overrides ([PR #120802](https://github.com/openclaw/openclaw/pull/120802)), MIME type handling in web UI ([PR #77875](https://github.com/openclaw/openclaw/pull/77875)), and per-agent `contextTokens` caps for embedded runs ([PR #120343](https://github.com/openclaw/openclaw/pull/120343)).

### 4. Community Hot Topics

The most active discussions highlight deep-seated user concerns about reliability and state management.

- **Critical Silent Failures:** The highest-engagement issue is a **P1 bug** where the DeepSeek v4 Flash model silently fails to generate replies, leading to a generic fallback message ([Issue #116277](https://github.com/openclaw/openclaw/issues/116277)). With 179 comments, this is a significant source of user frustration as it directly impacts core functionality and creates a poor UX.
- **Memory Leaks and Crashes:** A **P0 issue** details a severe gateway memory leak that grows from 350MB to 15.5GB over days, causing repeated OOM crashes and disrupting service ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588)). This is a major stability concern for long-running deployments.
- **Missing Replies and Lost State:** Multiple highly-commented issues revolve around messages being generated but not delivered, or agent runs failing silently. This includes a **P0 issue** where subagent completions are silently lost with no retry or notification ([Issue #44925](https://github.com/openclaw/openclaw/issues/44925)) and a **P1 issue** about cron announce delivery triggering a session takeover error when a user is actively chatting ([Issue #84583](https://github.com/openclaw/openclaw/issues/84583)). This cluster of issues suggests a systemic problem with the session state machine.

### 5. Bugs & Stability

The most severe bugs reported and updated today are predominantly in the `P0` and `P1` categories, focusing on crashes and message loss.

- **P0 - Critical:**
    - [**Memory Leak and OOM Crashes**](https://github.com/openclaw/openclaw/issues/91588): Gateway memory leak causing repeated OOM restarts.
    - [**Startup Migration Block**](https://github.com/openclaw/openclaw/issues/112395): An upgrade from 6.11 to 7.1 fails to start due to a migration preflight issue.
- **P1 - High:**
    - [**Gateway Update Fails to Start**](https://github.com/openclaw/openclaw/issues/108435): Update to 2026.7.1 causes gateway failure across systemd, ollama, and manual launch.
    - [**Subagent Completion Silently Lost**](https://github.com/openclaw/openclaw/issues/44925): Timeouts and failures in subagent orchestration result in lost work with no user notification.
    - [**OAuth Refresh Failures**](https://github.com/openclaw/openclaw/issues/86215): Codex OAuth refresh can wedge an agent for hours without clear alerting.
    - [**Loop Detection Not Ending Runs**](https://github.com/openclaw/openclaw/issues/106231): The loop detector blocks a stuck exec loop but fails to terminate the agent run, wasting resources.

**Fix PRs:** While most of these are open, some have linked PRs. For example, a PR to fix the gateway hang on stalled requests exists ([PR #111313](https://github.com/openclaw/openclaw/pull/111313)). Many other critical issues are tagged `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision`, indicating they are acknowledged but blocked on maintainer triage.

### 6. Feature Requests & Roadmap Signals

Several feature requests have gained significant traction, pointing toward future development priorities.

- **Enhanced Session & Memory Management:**
    - [Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707): A highly commented request to tag memory entries by trust level to prevent memory poisoning, a strong signal for a security-focused roadmap.
    - [Topic-Session Families](https://github.com/openclaw/openclaw/issues/90916): A proposal for one assistant with multiple isolated context lanes, suggesting a move toward more complex, multi-context interaction models.
- **Improved User Experience & Observability:**
    - [Production-readiness stability label](https://github.com/openclaw/openclaw/issues/73537): Users are asking for clearer signals on release stability, indicating a need for better communication around version reliability.
    - [Per-model usage logging](https://github.com/openclaw/openclaw/issues/13219): A request for cost tracking and a better understanding of model usage, pointing toward growing enterprise/advanced user needs.
    - [Persistent task-status surface](https://github.com/openclaw/openclaw/issues/52640): Users want a more transparent way to see the status of long-running tasks, especially on channels like Discord.
- **Platform & Config Enhancements:**
    - [OpenAI Realtime for Talk Mode](https://github.com/openclaw/openclaw/issues/71195): A request to bring speech-to-speech capabilities to macOS Talk Mode, indicating interest in lower-latency voice interactions.
    - [Dynamically discover models](https://github.com/openclaw/openclaw/issues/10687): There is a desire to move beyond static model catalogs to support fast-moving providers like OpenRouter.

**Prediction for Next Version:** Given the volume of P0/P1 issues, the next release will likely focus on stability. The "Durable Core" feature, with its focus on "infrastructure-level agent silence," is a prime candidate for inclusion. Features like the CLI `resume` command and the subagent `announceTarget` are ready for review and could land soon.

### 7. User Feedback Summary

User feedback is dominated by concerns over reliability and state management.

- **Pain Points:**
    - **Silent Failures:** The most significant pain point is the silent loss of messages, replies, or entire agent runs without retries, notifications, or clear errors.
    - **Memory Leaks & Crashes:** Users running long-lived gateways are experiencing OOM crashes and performance degradation over time, as highlighted by several issues.
    - **Message Delivery Inconsistency:** Users are frequently reporting that replies are generated and shown in the dashboard but never delivered to the original channel (Telegram, WhatsApp, etc.).
    - **Frustrating Recovery:** Recovery paths are often broken or non-intuitive, forcing users to use `/new` to reset sessions that remain wedged.
- **Use Cases:** The data shows a diverse user base, including:
    - **Family/Business Assistants:** Using OpenClaw for daily workflow management via Telegram and Home Assistant.
    - **Enterprise/Advanced Users:** Requesting features like per-model cost tracking, dynamic model discovery, and production-readiness labels.
- **Satisfaction/Dissatisfaction:** While there is clear frustration with the volume of bugs, the presence of numerous feature requests and a highly active community indicates strong overall engagement and satisfaction with the project's vision. The number of issues tagged `impact:ux-friction` suggests that the community cares deeply about the quality of the user experience, which is a positive long-term signal.

### 8. Backlog Watch

Many critical issues are blocked on maintainer review or product decisions, indicating a potential bottleneck. The following issues have been open for a long time and are likely high-impact based on their labels and activity.

- [**P1: AM embedded run aborts memory_search tool calls**](https://github.com/openclaw/openclaw/issues/74586) (Open since 2026-04-29): A Platinum Hermit-rated issue that needs a live repro and maintainer review. It causes tool calls to be aborted despite model completion.
- [**P1: Codex OAuth refresh failures can wedge an agent**](https://github.com/openclaw/openclaw/issues/86215) (Open since 2026-05-24): A Platinum Hermit-rated issue that can leave an agent unresponsive for hours.
- [**P1: "Cannot convert undefined or null to object" with google-vertex**](https://github.com/openclaw/openclaw/issues/38327) (Open since 2026-03-06): A long-standing regression that breaks a major provider, tagged as needing a live repro.
- [**P0: Upgrade fails to start gateway from 6.11 to 7.1**](https://github.com/openclaw/openclaw/issues/112395) (Open since 2026-07-21): Despite being a P0 release blocker, this issue is still open. A fix PR, [PR #120343](https://github.com/openclaw/openclaw/pull/120343), was closed but it is not clear if it fully resolves this issue.

These long-standing P0/P1 issues, some open for months, suggest that a significant portion of maintainer effort is being spent on triage, and there is a need to accelerate the resolution of these core reliability problems to build and maintain user trust.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem
**Date:** 2026-08-09

---

## 1. Ecosystem Overview

The personal AI assistant landscape is dominated by a **reliability crisis and consolidation phase**. Leading projects (OpenClaw, Hermes Agent, ZeroClaw, NanoBot, IronClaw) are all grappling with silent message delivery failures, memory leaks, and session state corruption — not feature gaps. The ecosystem is bifurcating into two architectural camps: **gateway-centric monoliths** (OpenClaw, Hermes, ZeroClaw, NanoBot) that prioritize multi-channel delivery, and **embedded workflow agents** (NanoClaw, PicoClaw, LobsterAI) that focus on tool orchestration and MCP connectivity. A clear **MCP (Model Context Protocol) standardization wave** is underway, with all active projects adding remote/HTTP/SSE server support. Community trust is fragile; users are consistently reporting "silent failures" and "update anxiety," making stability and transparency the primary differentiators for adoption.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Primary Phase |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 (177 closed) | 2 patches (v6.34, v6.33) | ⚠️ 6/10 — High activity, but P0/P1 backlog & triage bottleneck | Heavy stabilization |
| **Hermes Agent** | 50 | 50 (4 merged) | None | ⚠️ 6/10 — Rapid fixes, but no release to reach users | Cleanup & hardening |
| **IronClaw** | 80 | 80 (32 merged) | None | ✅ 8/10 — Strong merge velocity, proactive stress testing | Architectural migration (Reborn) |
| **ZeroClaw** | 50 | 50 (2 closed) | None | ⚠️ 5/10 — S0/S1 security bugs, backlog growing | Bug fixing & refactoring |
| **NanoBot** | 5 | 9 (4 merged) | None | ✅ 8/10 — Responsive, focused sprint | Observability sprint |
| **NanoClaw** | 8 | 6 (3 merged) | None | ✅ 7/10 — Healthy, new integrations | Maintenance & integration |
| **PicoClaw** | 3 | 4 (0 merged) | None | ⚠️ 5/10 — Review bottleneck, WhatsApp outage | Maintenance & hardening |
| **Moltis** | 2 | 1 (1 merged) | None | ✅ 8/10 — Clean pipeline, low backlog | Hardening |
| **CoPaw** | 19 | 50 (3 closed) | None | ⚠️ 5/10 — Beta instability, many regressions | Pre-release stabilization |
| **LobsterAI** | 1 | 3 (0 merged) | None | ❌ 3/10 — Stale backlog, low activity | Maintenance |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | None | ⚪ Inactive | Dormant |

---

## 3. OpenClaw's Position

**Advantages:**
- **Largest community by far** (500+ items/day vs. 5–80 for others). This gives it the fastest bug discovery and the richest feature-request signal.
- **Most formalized release pipeline** — 2 patch releases in 24 hours, with structured security hardening (sandboxed browser routes, response size caps).
- **Deepest channel ecosystem** — Discord, Telegram, WhatsApp, IRC, Matrix, and more, with active per-channel bug tracking.
- **"Durable Core" architecture** — Leading the ecosystem in infrastructure-level reliability features (persistent front doors, fallback disconnects).

**Technical Approach Differences vs. Peers:**
- Uses a **monolithic gateway** with a session state machine, whereas Hermes follows a **modular skill + profile** model, and IronClaw is migrating to a **"run acts as invoker"** architecture.
- Invests heavily in **TUI and CLI ergonomics** (`openclaw resume`), while peers focus more on web UIs or embedded agents.
- Tends toward **centralized memory trust tagging** (RFC), whereas NanoBot and ZeroClaw are exploring per-tool/per-agent isolation.

**Community Size Comparison:**
- OpenClaw's 500/500 daily updates are roughly **6–10x** the activity of Hermes or IronClaw, and **50–100x** that of smaller projects like LobsterAI. This is a **network-effect moat**, but also a **triage bottleneck risk** — many P0/P1 issues sit unaddressed for weeks.

---

## 4. Shared Technical Focus Areas

The following needs are emerging independently across **multiple projects**, signaling ecosystem-wide priorities:

| Need | Projects | Specific Pain Points |
|---|---|---|
| **Silent failure elimination** | OpenClaw, Hermes, ZeroClaw, NanoClaw | Subagent completions lost, messages undelivered, no retries, no notifications |
| **Memory & session isolation** | OpenClaw, Hermes, ZeroClaw, NanoBot | Trust tagging, per-agent context lanes, profile-scoped cron, compaction wiping history |
| **MCP remote/HTTP/SSE support** | NanoBot, NanoClaw, PicoClaw, CoPaw | OAuth for MCP, remote server config, schema budgeting, connection resilience |
| **Token/cost observability** | OpenClaw, NanoBot, Hermes | Per-iteration token logs, per-model usage, billing burn prevention |
| **Approval/security hardening** | ZeroClaw, NanoClaw, Hermes, CoPaw | Sender-scoped approvals, agent skill injection, secret leak via ANSI codes |
| **Container/sandbox lifecycle** | Moltis, NanoClaw, ZeroClaw | Docker cross-mount locks, attachment accessibility, state detection mismatches |
| **Update reliability & "update anxiety"** | Hermes, ZeroClaw, CoPaw | Docker compose permission errors, migration blockers, bricked installs |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture |
|---|---|---|---|
| **OpenClaw** | Multi-channel personal assistant, durable session state | Hobbyists to enterprises, channel-agnostic | Monolithic gateway + TUI/CLI + memory trust |
| **Hermes Agent** | Desktop app, skill-based extensibility, model switching | Desktop power users, multi-profile setups | Modular skill/profile system, cross-profile security |
| **IronClaw** | Web/desktop product, "Reborn" migration, debug inspector | Product-first, web UI, live QA | New architectural core, "run as invoker" |
| **ZeroClaw** | SOP/automation, plugin egress policy, small workspace | Automation & cron-heavy users, security-sensitive teams | Plugin ecosystem, consolidation to minimal crates |
| **NanoBot** | Token observability, lightweight gateway, MCP | Cost-conscious developers, Docker users | Minimal Go-style gateway, WebUI |
| **NanoClaw** | Modular skills, channel breadth (Mattermost, Strava) | Dev-centric, channel-extensible agents | Skill architecture, v2 ChannelAdapter |
| **PicoClaw** | Lightweight multi-channel, WhatsApp/IRC/Simplex | Embedded/small-device users | Minimal channel adapter, bolt-on MCP |
| **CoPaw** | Console UI, multi-agent, rebranded product | Beta testers, UI-heavy workflows | AgentScope lifecycle, Console frontend |
| **LobsterAI** | Tool determinism, SQLite performance | Chinese-speaking users, tool-heavy workflows | Local-first, tool config override |
| **Moltis** | Sandbox/container lifecycle, Apple support | macOS/Docker users | Sandboxed filesystem tools |

---

## 6. Community Momentum & Maturity

**Tier 1: High Momentum (Rapid Iteration, Risk of Burnout)**
- **OpenClaw** — Massive daily churn, but **170+ closed PRs/day** shows execution. Risk: P0/P1 triage bottleneck may erode trust.
- **IronClaw** — Strongest merge velocity (32 PRs closed), proactive stress testing, migration-driven. Healthiest large-project trajectory.
- **Hermes Agent** — Fast fix response, but **release starvation** ("update anxiety") is a clear satisfaction risk.

**Tier 2: Healthy & Stable (Moderate Activity, Clean Pipelines)**
- **NanoBot** — Focused sprint, responsive maintainers, strong issue-to-PR correlation.
- **NanoClaw** — Steady integration work, committed contributors, some review lag.
- **Moltis** — Clean pipeline, no stagnant backlog, effective issue-to-fix cycle.

**Tier 3: Stabilization Strain (High Bug Reports, Pre-Release)**
- **ZeroClaw** — S0/S1 security bugs, RFC process overhead, growing backlog. Needs triage acceleration.
- **CoPaw** — Beta instability with core workflow regressions (blocked conversations, UI freezes). Needs release discipline.

**Tier 4: At Risk (Stale, Low Engagement)**
- **PicoClaw** — WhatsApp outage unfixed for >1 day, PRs stale for weeks. Maintainer bandwidth is the bottleneck.
- **LobsterAI** — 4+ month backlog with zero merges — trending toward **inactive**.

---

## 7. Trend Signals

1. **Reliability > Features** — Across 7+ projects, the top issue is "silent failures." Users would trade new features for predictable delivery. AI agent developers should prioritize **observability, retries, and state persistence** before adding skills or channels.

2. **MCP is Becoming the Universal Standard** — Remote/HTTP/SSE support, OAuth flows, schema budgeting, and crash resilience are being built **simultaneously** in NanoBot, NanoClaw, PicoClaw, and CoPaw. Investing in MCP-compatible tool adapters is now table stakes.

3. **Token & Cost Control is the New Differentiator** — "Millions of tokens burned with no visible activity" is a recurring user complaint. Per-iteration token logs, daily usage dashboards, and cost caps will be **hygiene features** within 2 quarters.

4. **"Update Anxiety" is a Trust Killer** — Users report dreading updates that "brick everything." Projects that ship **stable releases, migration checks, and rollback paths** will win loyalty. This is a gap across the board.

5. **Security Boundaries Are Shifting** — From agent skill injection (Hermes) to approval spoofing (ZeroClaw) to cross-profile key leaks (Hermes), the ecosystem is realizing that **prompt-level security is insufficient**; infrastructure-level sandboxing and sender-scoped approvals are required.

6. **Multi-Context Sessions are Emerging** — Memory trust tagging (OpenClaw), session families (OpenClaw), and profile-scoped isolation (Hermes) point toward a future where **one assistant manages multiple isolated, long-lived contexts** — not a single chat history.

7. **Container & Sandbox Lifecycle is Under-Engineered** — Docker cross-mount locks (NanoClaw), Apple Container detection (Moltis), and sandboxed filesystem fallbacks (Moltis) indicate that **deployment environments are the hidden bottleneck** for agent reliability.

---

### Bottom Line for Technology Decision-Makers

- **Choose OpenClaw** for the richest ecosystem and channel coverage, but **budget for stability monitoring** — the P0/P1 backlog is real.
- **Choose IronClaw** for a product-first web experience with active architectural investment and the strongest merge discipline.
- **Choose NanoBot** for a lightweight, cost-observable gateway that’s responding fast to token burn concerns.
- **Avoid LobsterAI and PicoClaw** unless you can tolerate stale backlogs and unreviewed contributions.
- **Plan for MCP support and multi-context memory** in your own designs — both are becoming non-negotiable user expectations.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-08-09

---

## 1. Today's Overview

NanoBot is experiencing a moderate-to-high activity window, with 5 issues and 9 PRs updated in the last 24 hours. The project is currently in a **maintenance and observability sprint**, with a clear cluster of work centered on token consumption logging, WebUI enhancements, and bug fixes across deployment and MCP connectivity. Notably, 4 PRs were merged/closed today, including a substantial dead-code removal (19 units) and a WebUI fix, while 5 PRs remain open awaiting review. A significant community pain point has surfaced around unexplained high token consumption, which has already spawned two related PRs (#5293, #5299) — a strong sign of responsive maintainership. However, a critical MCP crash bug (#5300) and a P0-labeled PR (#5271) addressing session data races remain open, warranting attention.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The project appears to be in an inter-release development cycle.

---

## 3. Project Progress

Four PRs were merged/closed today, reflecting a focus on cleanup, fix, and feature work:

- **[#5293 — feat(usage): log per-iteration token diagnostics](https://github.com/HKUDS/nanobot/pull/5293) (CLOSED/MERGED):** Adds per-iteration token diagnostics, directly addressing issue #5266. This is a key step toward making token consumption auditable by agent execution, rather than only aggregated daily stats.

- **[#5296 — refactor: remove verified dead code](https://github.com/HKUDS/nanobot/pull/5296) (CLOSED/MERGED):** Removed 19 repository-internal dead-code units, 11 production-unreachable test-only seams, and orphaned frontend assets. This reduces maintenance surface and improves build clarity, while preserving six API-sensitive units for explicit compatibility decisions.

- **[#5294 — fix(webui): prevent image hover clipping](https://github.com/HKUDS/nanobot/pull/5294) (CLOSED/MERGED):** Fixes an image preview clipping bug in the WebUI by removing hover scaling/ring, retaining accessible focus behavior, and adding regression tests.

- **[#5252 — feat(webui): add temporary chat mode](https://github.com/HKUDS/nanobot/pull/5252) (CLOSED/MERGED):** Introduces a "Temporary Chat" mode in the WebUI, supporting multiple non-persistent conversations, created only after the first message, and excluded from normal/temporary conversation lists.

---

## 4. Community Hot Topics

- **[Issue #5266 — Logs about token consumption (13 comments)](https://github.com/HKUDS/nanobot/issues/5266):** The most active discussion, reporting "millions of tokens burned in 2 hours with no visible activity." This has strong community resonance (users are concerned about cost), and has already driven two PRs (#5293, #5299). This is likely the **top user concern** this week.

- **[Issue #5297 — MCP OAuth web authorization support (2 comments)](https://github.com/HKUDS/nanobot/issues/5297):** Users require OAuth web-flow support for MCP servers (e.g., xmind.com MCP). Currently unimplemented, this could unlock broader MCP ecosystem compatibility.

- **[PR #5271 — P0 session data race fix (conflict flag)](https://github.com/HKUDS/nanobot/pull/5271):** A priority-0 bug fix preventing stale background task saves from overwriting session data after `/new` command. Labelled with "conflict," it likely needs rebasing or maintainer review.

---

## 5. Bugs & Stability

Ranked by severity:

1. **[Issue #5300 — MCP crash: cancel scope cross-task RuntimeError](https://github.com/HKUDS/nanobot/issues/5300) (CRITICAL):** Gateway process crashes/hangs when a remote MCP server returns HTTP 530, triggering `RuntimeError: Attempted to exit cancel scope in a different task than it was entered in`. Symptoms include task leaks, CPU spikes, and un-recovered connections. No fix PR currently exists — *most urgent item for maintainers*.

2. **[PR #5271 — Stale session data overwrite (P0, open)](https://github.com/HKUDS/nanobot/pull/5271):** Background tasks can overwrite session state when user triggers `/new` mid-await. Fix proposed but open; labelled with "conflict," so merge may be blocked.

3. **[Issue #5295 — Docker Compose deployment fails: entrypoint.sh permission denied](https://github.com/HKUDS/nanobot/issues/5295):** Deployment issue blocking users following official docs. Likely a Dockerfile/file-mode regression; moderate severity given onboarding impact.

4. **[PR #5206 — Duplicate streamed response logging (open, P2)](https://github.com/HKUDS/nanobot/pull/5206):** Fixes duplicated 'Response to' log lines; functional fix for log hygiene.

5. **[Issue #5298 — Large MCP tool set context cost (enhancement)](https://github.com/HKUDS/nanobot/issues/5298):** Not a crash, but a systemic inefficiency — large MCP schemas bloat context. Appears to be an unsolved design challenge.

---

## 6. Feature Requests & Roadmap Signals

Strong signals point to **token observability** becoming a headline feature: two merged/in-flight PRs (#5293, #5299) are turning per-iteration token logs and WebUI-visible recent token usage into user-facing functionality — likely landing in the next release.

Other notable feature signals:
- **MCP OAuth web authorization (#5297)** — unlikely to be in next release (no PR yet), but a high-impact integration gap.
- **MCP schema budgeting (#5298)** — a design proposal, not yet implemented; needs architectural decision.
- **Model-agnostic computer use (PR #4276)** — still open since June 10, but periodically updated; indicates ongoing but slow-moving experimentation.
- **Matrix room-level reply threading (PR #5292)** — small, targeted Matrix integration fix, awaiting review.

---

## 7. User Feedback Summary

- **Token consumption is the #1 pain point.** One user reported "millions of tokens in 2 hours with no visible user activity," underscoring a serious cost-control issue. The community is actively seeking per-call attribution. The swift maintainer response (2 PRs within 24 hours) is a positive satisfaction signal.
- **Users are blocked by missing OAuth for MCP servers** — especially for popular HTTP/cloud MCP endpoints (e.g., xmind.com). This is a feature gap causing workflow friction.
- **Deployment friction exists**: the Docker Compose entrypoint.sh permission error (#5295) directly contradicts official docs, likely causing new-user churn and dissatisfaction.
- **MCP connection failures are destabilizing**: issue #5300 describes a multi-faceted crash (hang + CPU spike + task leak), which erodes trust in gateway stability when remote MCPs fail.
- **Positive sentiment around WebUI polish**: the temp chat feature (#5252) and image-clipping fix (#5294) were merged cleanly, indicating steady UX improvements.

---

## 8. Backlog Watch

Items needing maintainer attention:

- **[PR #4276 — Model-agnostic computer use](https://github.com/HKUDS/nanobot/pull/4276) (open since June 10, 60 days):** Ambitious feature (computer_use + browser tools) with periodic updates. Needs a clear decision: accept, request changes, or close.

- **[PR #5206 — Duplicate stream logging fix](https://github.com/HKUDS/nanobot/pull/5206) (open since Aug 1):** Simple, low-risk bug fix that has been idle for over a week. Should be merged or closed.

- **[Issue #5298 — MCP schema context budgeting](https://github.com/HKUDS/nanobot/issues/5298):** A forward-looking architectural discussion that seems under-appreciated; maintainers should weigh in to guide design.

- **[PR #5271 — P0 session data fix (conflict flag)](https://github.com/HKUDS/nanobot/pull/5271):** Given its P0 priority, this should be rebased and merged promptly to prevent data-loss regressions.

- **[Issue #5295 — Docker Compose entrypoint error](https://github.com/HKUDS/nanobot/issues/5295):** Onboarding blocker; should be escalated to a hotfix given deployment docs reference it.

---

*Digest generated from public GitHub data for HKUDS/nanobot as of 2026-08-09.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the GitHub data for Hermes Agent (github.com/nousresearch/hermes-agent) for 2026-08-09, here is the project digest.

---

# Hermes Agent Project Digest — 2026-08-09

## 1. Today's Overview
The project remains highly active, with a sustained high volume of community engagement (50 issues and 50 PRs updated in the last 24 hours). The maintainer team is moving quickly, with 13 issues closed and 4 PRs merged, while also actively "salvaging" (cherry-picking) and merging predecessor work, indicating a strong commitment to preserving community contributions. A significant portion of the current activity is focused on a backlog cleanup sprint, with multiple new PRs dedicated to fixing high-severity bugs involving security boundaries, session state management, and update reliability. The project shows a healthy balance of community bug reporting and a rapid maintainer response, although the lack of new releases this week leaves users with known `main`-branch issues awaiting a distribution update.

## 2. Releases
**None.** No new releases were published in the last 24 hours. Despite a high volume of fixes merged to `main`, users are facing issues on stable versions (e.g., npm 12 compatibility breaking Desktop, update failures) that still require a new release to be addressed.

## 3. Project Progress
Today's merged/closed PRs (4 total) and the broader wave of new PRs show a "cleanup and hardening" phase:
- **Model Switching & Auth (Closed):** PR [#67571](https://github.com/NousResearch/hermes-agent/pull/67571) (fix(model-switch)) was closed, addressing a critical bug where alias resolution (e.g., `opus`) picked older models (e.g., `claude-opus-4-20250514`) over newer ones (`claude-opus-4-8`) due to faulty date sorting.
- **Session Compaction (Closed):** Issue [#73624](https://github.com/NousResearch/hermes-agent/issues/73624) was closed, fixing the compression budget that was wasting 19-24% of the tail budget on stale reasoning data that no adapter replays.
- **Major Salvage/PR Pipeline (New):** A large influx of "salvage" PRs from `teknium1` indicates the core team is actively picking up and finishing community-submitted work. Key advances include:
    - [#82152](https://github.com/NousResearch/hermes-agent/pull/82152): Fixes FTS5 search sanitization, breaking silent zero-result queries.
    - [#82151](https://github.com/NousResearch/hermes-agent/pull/82151): Fixes a cross-profile security leak where one profile could adopt another's API keys during model switching.
    - [#82149](https://github.com/NousResearch/hermes-agent/pull/82149): Fixes pool entry ID staleness that caused rate-limit logic to quarantine healthy API keys.
    - [#82158](https://github.com/NousResearch/hermes-agent/pull/82158): Fixes the Desktop update blocker caused by a truncated process-list scan.

## 4. Community Hot Topics
The most active discussions highlight major pain points around security, reliability, and system integrity:
- **Agent Security Boundary:** Issue [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) (6 comments) is a high-visibility security concern: agent-written skills bypass the content guard and are then injected into every session's system prompt. This is a top priority security question the team must answer (`needs-decision`).
- **Update/Installation Fatigue (P1):** Issue [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) (6 comments) reflects growing user frustration ("scared to update because every other update bricks everything!"). This is tied to the lack of releases and the multiple P1/P2 update bugs (e.g., #75778, #82158).
- **Cron Profile Bug:** Issue [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) (6 comments) highlights a logic flaw where profile-scoped cron jobs reject scripts in the default profile directory, creating confusion for users with complex setups.
- **Data Loss Concerns:** Issue [#70846](https://github.com/NousResearch/hermes-agent/issues/70846) (5 comments, 1 👍) reports that context compaction wipes human-visible message history, making documentation and review impossible. This is a significant UX regression.

## 5. Bugs & Stability
Stability is the main theme today, with several P1 and P2 regressions reported and immediately addressed by new PRs:
- **Critical (P1):**
    - **Desktop Update Loop/Panic:** Issue [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) encompasses user fear of updates, linked to the duplicate `hermes-setup` process bug ([#75778](https://github.com/NousResearch/hermes-agent/issues/75778) and PR [#82158](https://github.com/NousResearch/hermes-agent/pull/82158)).
- **High (P2):**
    - **Session State Corruption/Data Loss:** Issues [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) (agent flush dies with misleading "full disk" error) and [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) (FTS index corruption on macOS). No fix PRs are open yet for these.
    - **Container/Security:** Issue [#82074](https://github.com/NousResearch/hermes-agent/issues/82074) (Podman + SELinux blocks skills directory) and [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) (ANSI codes defeat token redaction) are serious security-adjacent issues.
    - **Tool/Execution Failures:** Issue [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) (`lifecycle_guard` raises 'embedded null byte' on valid binary paths) and [#81162](https://github.com/NousResearch/hermes-agent/issues/81162) (TTS blocks text response).

## 6. Feature Requests & Roadmap Signals
The backlog signals a move toward deeper customization and control:
- **Child Agent Permissions:** PR [#82157](https://github.com/NousResearch/hermes-agent/pull/82157) adds per-child memory and toolset boundaries for delegations, suggesting a push toward more secure and isolated sub-agent orchestration.
- **Desktop Endpoint Flexibility:** PR [#82148](https://github.com/NousResearch/hermes-agent/pull/82148) adds support for Anthropic-compatible custom endpoints in the Desktop app, expanding provider support beyond the OpenAI-only assumption.
- **Memory Lifecycle Management:** Issue [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) requests first-class tooling for inspecting, deduplicating, and consolidating built-in memory stores—a sign that users are hitting limits with the current static files.
- **Loop Detection (RFC):** Issue [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) proposes a "ToolCallStormBreaker" to suppress runaway repeated tool-call loops, saving tokens and frustration.
- **Policy Enforcement:** PR [#81937](https://github.com/NousResearch/hermes-agent/pull/81937) aims to restore and enforce session-write and self-improvement policies, indicating a focus on governance and "safe agent" workflows.

## 7. User Feedback Summary
Real user pain points are heavily skewed toward trust and reliability:
- **"Update Anxiety":** Users feel the update process is risky and destructive ("I keep losing everything"). The lack of a stable release exacerbates this, forcing users onto a volatile main branch to get fixes. This is a clear satisfaction risk for Desktop users.
- **Fear of Data Loss:** Reports like #70846 (compaction wipes history) and #82001 (misleading disk-full error) erode confidence, making users wary of using long-running sessions or relying on the system for documentation.
- **Configuration Confusion:** Issues around cron script paths (#40801), TUI npm install loops (#66978), and memory status reporting wrongly saying "disabled" ([#81430](https://github.com/NousResearch/hermes-agent/issues/81430)) show users struggle with the configuration model's complexity and the reliability of its diagnostics.
- **Security Concerns:** The leak of credentials via ANSI codes (#81012) and the un-vetted agent skill injection (#78515) are anxiety points for users in security-sensitive environments.

## 8. Backlog Watch
These issues require maintainer attention and have not seen recent resolution:
- **Security/Architecture Decision:** Issue [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) (7 days old) regarding agent skill scanning remains an open `needs-decision`. This is a foundational security posture question that needs a clear answer.
- **Investigate Hang:** Issue [#39245](https://github.com/NousResearch/hermes-agent/issues/39245) (ACP prompt hang) remains open after over 2 months, flagged for session-state risk. The lack of progress on this core protocol bug is a concern.
- **Stalled MCP Spawn:** Issue [#81995](https://github.com/NousResearch/hermes-agent/issues/81995) describes a serious bug where a stalled MCP server holds a 300s timeout. It is awaiting reproduction (`needs-repro`). This needs attention to avoid long hangs in tool calls.
- **Update Risk (Windows):** Issue [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) is a P1 that likely won't be fully resolved until a new release is cut and tested. The existence of PR [#82158](https://github.com/NousResearch/hermes-agent/pull/82158) is a good sign, but this fix needs to reach users quickly.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-08-09

---

## 1. Today's Overview

PicoClaw shows a moderate level of activity over the last 24 hours, with 3 issues and 4 pull requests updated, though no new releases were published during this period. The project is in a maintenance-and-hardening phase: two recent PRs (#3320, #3321) address critical production issues around a WhatsApp client outage and LLM token caching efficiency, while older contributions (simplex channel support, deltachat refactor) remain open and pending review. One bug (high CPU usage in the chat input box) was closed, but a stale backlog of two significant PRs (#3222, #3193) signals a potential maintainer bandwidth bottleneck. Overall, the project is alive with contributor interest, but the lack of merged PRs in the last 24 hours suggests review and merge velocity may be a limiting factor.

---

## 2. Releases

No new releases were published in the last 24 hours. The latest known version remains **v0.3.1** (referenced in Issue #3292). Users and contributors should watch for an upcoming release that may bundle the pending WhatsApp fix (#3320) and the prefix-caching improvement (#3321).

---

## 3. Project Progress

**No PRs were merged or closed in the last 24 hours.** All four active PRs remain open for review:

- **[#3320]** *fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"* — A critical dependency bump to restore the native WhatsApp channel, which is currently dead due to rejection of the pinned client version by WhatsApp servers.
- **[#3321]** *fix(agent): move dynamic context after history to preserve prefix caching* — A performance/optimization fix that moves the per-request dynamic context block to the end of the prompt to preserve LLM prefix caching, reducing token costs and latency.
- **[#3222]** *refactor(deltachat): cleanup implementation, documentation -200LOC* — Code simplification, removal of legacy fallbacks, and improved documentation for the DeltaChat channel.
- **[#3193]** *Added simplex channel type* — New feature adding support for the SimpleX messaging protocol as a new channel type.

---

## 4. Community Hot Topics

The most active discussions revolve around feature requests and channel reliability:

- **[Issue #3287]** *[Feature] Better support long messages in IRC* (4 comments) — [Link](https://github.com/sipeed/picoclaw/issues/3287)
  Users need PicoClaw to correctly reassemble IRCv3 messages that exceed the 512-byte limit and are auto-split by clients. The underlying need is message integrity — multi-line or long messages are currently being interpreted as multiple independent messages, breaking conversation flow.

- **[Issue #3302]** *[Feature] Support OAuth 2.1 for MCP servers* (2 comments) — [Link](https://github.com/sipeed/picoclaw/issues/3302)
  A request to add OAuth 2.1 support for MCP servers, referencing a prior issue (#2546). This reflects growing enterprise adoption of MCP and a need for secure, modern authentication.

- **[PR #3320]** *WhatsApp "client outdated" fix* — [Link](https://github.com/sipeed/picoclaw/pull/3320)
  While not heavy in comments, this PR is a central point of user pain: the native WhatsApp channel is completely non-functional, and community members are likely awaiting this fix with high urgency.

---

## 5. Bugs & Stability

**Resolved:**
- **[Issue #3292]** *[CLOSED] CPU usage too high when focus on input box in chat interface* — [Link](https://github.com/sipeed/picoclaw/issues/3292)
  A reported high-CPU bug (v0.3.1, Firefox/Web) has been closed. Details of the root cause are not available in the digest, but closure suggests a fix or workaround was identified or the report was deemed invalid.

**Active (Severity: Critical):**
- **[PR #3320] / WhatsApp "client outdated (405)"** — The native WhatsApp channel is completely non-functional. User reports indicate the socket connects and is dropped ~5s later with no reconnect attempt. A fix PR is open but **not yet merged**, leaving users without a working WhatsApp bridge. This is the highest-severity stability issue at present.

**Active (Severity: Medium):**
- **[Issue #3287] / IRC long message handling** — Messages over 512 bytes are split by IRC clients and misinterpreted by PicoClaw, causing conversation fragmentation. No fix PR exists yet.

---

## 6. Feature Requests & Roadmap Signals

Two feature requests are currently open:

- **[Issue #3287]** *Better support long messages in IRC* — [Link](https://github.com/sipeed/picoclaw/issues/3287)
  The author explicitly notes this is likely not a core feature but an enhancement. It may be addressed by message-reassembly logic in the IRC channel layer.

- **[Issue #3302]** *Support OAuth 2.1 for MCP servers* — [Link](https://github.com/sipeed/picoclaw/issues/3302)
  Marked as "Nice-to-Have / Enhancement." While not aligned with the current roadmap, enterprise demand for secure MCP authentication may push this up the priority list in a future minor release.

**Predictions for next version:**
- The WhatsApp dependency bump (#3320) is a critical fix and will almost certainly land in the next patch release.
- The prefix-caching optimization (#3321) is low-risk and high-value for token cost reduction; likely to be included in the next minor or patch release.

---

## 7. User Feedback Summary

- **WhatsApp channel outage is the top pain point.** The channel is completely non-functional due to an outdated client version, and the fix PR has been open for over a day without being merged. Users relying on WhatsApp likely feel an urgent need for a patch release.
- **IRC message splitting is a usability issue.** Users sending long-form content via IRC face broken conversations, indicating the need for smarter message handling — a common requirement for bot frameworks that bridge multiple platforms.
- **Performance awareness is rising.** Both the CPU usage issue (now resolved) and the prefix-caching PR (#3321) indicate users and contributors are actively optimizing for resource efficiency and cost, likely in production deployments.
- **Channel diversity is desired.** The pending SimpleX and DeltaChat contributions (PRs #3222, #3193) suggest a community appetite for broader protocol coverage, though these PRs may be stalled awaiting maintainer feedback.

---

## 8. Backlog Watch

The following items have gone stale and require maintainer attention:

- **[PR #3222]** *refactor(deltachat): cleanup implementation, documentation -200LOC* — [Link](https://github.com/sipeed/picoclaw/pull/3222)
  **Open since:** 2026-07-03 (over 5 weeks) | **Last updated:** 2026-08-08
  This substantial refactor reduces code by ~200 lines and improves docs, but has not received comments or review. Maintainers should triage this to avoid losing contributor momentum.

- **[PR #3193]** *Added simplex channel type* — [Link](https://github.com/sipeed/picoclaw/pull/3193)
  **Open since:** 2026-06-27 (over 6 weeks) | **Last updated:** 2026-08-08
  A full new channel implementation has been pending for over a month and a half. If SimpleX support aligns with the project roadmap, this needs a maintainer response; otherwise, it should be formally declined to provide closure.

- **[Issue #3302]** *Support OAuth 2.1 for MCP servers* — [Link](https://github.com/sipeed/picoclaw/issues/3302)
  **Created:** 2026-07-30 | **Last updated:** 2026-08-08
  This legitimate enterprise-grade feature request has only 2 comments and no maintainer response. A public acknowledgment of feasibility and timeline would improve community trust.

**Health Assessment:** PicoClaw is technically active, but the gap between community contribution rate and maintainer review velocity is a key risk. Prioritizing the WhatsApp fix merge and responding to long-stale PRs would improve project health significantly.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-08-09

---

## 1. Today's Overview

NanoClaw shows **moderate to high activity** over the past 24 hours with **8 issues** and **6 pull requests** touched. The project is in a **healthy maintenance phase**, with 5 of 8 issues remaining open and 3 closed, while PR activity shows a balanced mix of merges and new contributions. Notably, the community is actively contributing new channel integrations (Mattermost, Strava, Telegram), and maintainers are processing contributions at a reasonable pace. However, **no new releases** were published, indicating that recent changes are still in the development pipeline. There are **two related Mattermost PRs** (#3202 and #3199) that should be reconciled, suggesting potential coordination friction.

---

## 2. Releases

**No new releases** were published in the past 24 hours. The last release remains the current published version. Contributors and users should monitor the main branch for upcoming changes, particularly around the Discord approval fix (#3185) and session database locking (#3177), which may be bundled into the next release.

---

## 3. Project Progress

**Merged/Closed PRs (3):**

- **[PR #2777 — feat: add /add-strava skill for official Strava MCP](https://nanocoai/nanoclaw PR #2777)** — Merged after nearly two months. Adds the official Strava MCP integration with a host-side OAuth flow and auto-refreshing token module. This significantly expands external service connectivity.
- **[PR #2776 — feat: support remote HTTP/SSE MCP servers](https://nanocoai/nanoclaw PR #2776)** — Merged alongside #2777. Extends `McpServerConfig` to support remote HTTP/SSE MCP servers in addition to stdio, and adds CLI flags (`--type`, `--url`, `--header`) to `ncl groups config add-mcp-server`. This is an architectural upgrade enabling cloud-based MCP connections.
- **[PR #3199 — Add Mattermost channel integration (v2 ChannelAdapter)](https://nanocoai/nanoclaw PR #3199)** — Closed and **superseded by #3202**. The v2-compatible Mattermost integration was submitted, but a newer version (#3202) was filed the next day, suggesting iteration or a formatting resubmission.

**[Issue #3177 — fix: resolve session database lock contention on Docker cross-mount filesystems](https://nanocoai/nanoclaw Issue #3177)** was also closed, indicating a fix for the 29,000+ readonly errors on Docker-mounted filesystems has been addressed.

---

## 4. Community Hot Topics

- **[Issue #3201 — Discord approval button clicks not registering](https://nanocoai/nanoclaw Issue #3201)** (Closed, 2 comments) — This was the **most-discussed bug** today. Users cannot approve config update requests via Discord buttons. Notably, the **fix PR #3185** exists and is open. The community discovered this through real-world usage, indicating the approval workflow is critical but fragile.
- **[Issue #3200 — "The Cartographer" cognitive processing architecture proposal](https://nanocoai/nanoclaw Issue #3200)** (Closed, 1 comment) — An unusual, highly conceptual submission describing an external cognitive framework. It was closed, but signals that some users are exploring advanced, philosophical applications of the agent platform.
- **[PR #3185 — fix(discord): strip \n delimiter in webhook interaction custom_id](https://nanocoai/nanoclaw PR #3185)** (Open) — This is the **key fix** for the Discord approval problem. It's been open for 4 days; the community is likely waiting for this to be reviewed and merged.
- **[PR #2877 — feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage](https://nanocoai/nanoclaw PR #2877)** (Open, 41 days old) — A long-pending feature request for Telegram's rich message rendering. Still open with no maintainer comments shown, which may be a concern.

---

## 5. Bugs & Stability

**Ranked by severity:**

1. **[HIGH] Discord approval button clicks not registering — owner role cannot approve config updates](https://nanocoai/nanoclaw Issue #3201)** — Critical workflow break: all Discord approvals are rejected even when clicking Approve. **Fix PR exists: #3185** (strip `\n` delimiter in webhook interaction custom_id). *Status: Issue closed (likely as duplicate or fixed), but PR open — verify merge.*

2. **[HIGH] Inbound attachments silently dropped on channels with path separators in message IDs (e.g. Google Chat)](https://nanocoai/nanoclaw Issue #3206)** — `isSafeAttachmentName()` rejects message IDs containing `/` or `\`, causing silent data loss for Google Chat. **No fix PR yet.** This is a regression risk for Google Chat users.

3. **[MEDIUM] Session database lock contention on Docker cross-mount filesystems](https://nanocoai/nanoclaw Issue #3177)** — Was causing 29,000+ readonly errors and intermittent delivery failures. **Status: Closed** — fix has been resolved or merged.

4. **[MEDIUM] Signal channel: image/PDF attachments unreachable from agent container](https://nanocoai/nanoclaw Issue #2528)** — **82 days old** and still open. Files arrive at the host but the agent container can't access them. Long-standing issue with no recent updates; may require container volume/privilege changes.

5. **[LOW] codex provider emits undeclared `file` ProviderEvent](https://nanocoai/nanoclaw Issue #3203)** — Typecheck failure on `main` and generated images dropped. This is a development pipeline issue affecting `/add-codex` functionality.

6. **[LOW] add-opencode skill still instructs Dockerfile ARG+RUN edits removed by refactor](https://nanocoai/nanoclaw Issue #3204)** — Documentation/skill lag after the `cli-tools.json` refactor; the skill and its test assert the old shape.

**Overall assessment:** The **Discord approval** and **Google Chat attachment** bugs are the most user-visible today. The Discord one has a fix in flight; the Google Chat one is new and needs maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

- **Remote HTTP/SSE MCP servers** ([PR #2776, merged](https://nanocoai/nanoclaw PR #2776)) — This is now merged and opens the door for users to add cloud-based MCP servers (like Strava). **Expect this in the next release.**

- **Mattermost channel integration** ([PR #3202, open](https://nanocoai/nanoclaw PR #3202) / [#3199, closed](https://nanocoai/nanoclaw PR #3199)) — Mattermost support is actively being added. The second PR suggests the author is iterating on the first submission. **High likelihood for next version.**

- **Strava integration** ([PR #2777, merged](https://nanocoai/nanoclaw PR #2777)) — Official MCP endpoint with OAuth. Now merged, so it will be in the next release.

- **Persistent group-scoped OneCLI secret assignment** ([Issue #3205, open](https://nanocoai/nanoclaw Issue #3205)) — This requests resolving a "design fork" for which vault secrets agents get at spawn. Multi-user environments need this for security. **Potential roadmap item** but requires architectural decisions.

- **Telegram native rich rendering** ([PR #2877, open](https://nanocoai/nanoclaw PR #2877)) — Bot API 10.1 `sendRichMessage` support has been pending for 41 days. The Telegram channel would get richer UI cards. **Slower velocity; may require maintainer review.**

---

## 7. User Feedback Summary

- **Frustration with Discord approvals failing** ([Issue #3201](https://nanocoai/nanoclaw Issue #3201)) — The approval workflow is a core trust feature, and its failure undermines user confidence. The root cause (custom_id delimiter) is a mundane but impactful bug.
- **Data loss on Google Chat** ([Issue #3206](https://nanocoai/nanoclaw Issue #3206)) — Silent attachment drops are worse than error messages because users don't know files were lost.
- **Active feature contributions** — Users are proactively building integrations (Mattermost, Strava, Telegram), suggesting a **highly engaged developer community** that values the modular skill architecture.
- **"Cartographer" cognitive framework** ([Issue #3200](https://nanocoai/nanoclaw Issue #3200)) — While closed, this signals power users are pushing the platform toward advanced multi-threaded thought management, beyond simple chat.
- **Cross-platform attachment pain** ([Issue #2528](https://nanocoai/nanoclaw Issue #2528), Signal) — Similar to the Google Chat issue, users expect attachments to be seamlessly accessible inside the agent container across all channels.

---

## 8. Backlog Watch

- **[Issue #2528 — Signal channel: image/PDF attachments unreachable from agent container](https://nanocoai/nanoclaw Issue #2528)** — **82 days old, zero comments.** A fundamental cross-container file access bug. Needs a maintainer response or architectural fix.

- **[PR #2877 — Telegram native rich rendering](https://nanocoai/nanoclaw PR #2877)** — **41 days open** with no maintainer interaction visible. The contributor followed the guidelines (labeled `[follows-guidelines]`), but the review is lagging.

- **[Issue #3205 — Persistent group-scoped OneCLI secret assignment](https://nanocoai/nanoclaw Issue #3205)** — New but architecturally significant. It flags "two open, contradictory directions" for secret assignment. This needs a maintainer decision to avoid community contributions going stale in different directions.

- **[Issue #3204 — add-opencode skill out of date](https://nanocoai/nanoclaw Issue #3204)** — Documentation lag that could mislead new contributors trying to add CLIs. Low severity but a contributor experience issue.

- **[PR #3185 — Discord approval fix](https://nanocoai/nanoclaw PR #3185)** — The highest-impact open fix. It's been open since 2026-08-04 (5 days). **This should be prioritized for merge** as it resolves the most complained-about bug.

---

**Overall health rating:** ✅ **Healthy** — active contributions, real bugs being found and fixed, and a growing ecosystem of integrations. The main risks are **review latency** (several PRs waiting 4-41 days) and **cross-channel attachment consistency** (Signal + Google Chat). No critical security or stability regressions observed in the last 24 hours beyond the Discord approval bug with an existing fix.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Based on the GitHub data for IronClaw (github.com/nearai/ironclaw) for 2026-08-09, here is the project digest:

---

## IronClaw Project Digest — 2026-08-09

### 1. Today's Overview
IronClaw is in a high-activity development phase, with 80 issues and PRs updated in the last 24 hours. The development focus is split between advancing the "Reborn" architectural migration (a significant rewrite of the product surface) and stabilizing the core runtime. A substantial portion of activity involves closing out legacy Reborn migration tracking issues and merging follow-up fixes from recent large PRs. The project is also heavily focused on hardening delivery reliability, improving CI gate stability, and shipping a new Web Debug Inspector feature.

### 2. Releases
No new releases were published in the last 24 hours. The project appears to be consolidating significant changes (like the "run acts as its invoker" architectural shift) before an upcoming release.

### 3. Project Progress
**Merged/Closed PRs (32):** The activity shows a strong focus on closing out follow-up work from larger PRs and improving test coverage and reliability.

- **Web Debug Inspector:** The feature is nearing completion, with browser and security coverage merged ([PR #7280](https://github.com/nearai/ironclaw/pull/7280)) and support for bounded verbose tool details completed ([PR #7225](https://github.com/nearai/ironclaw/issues/7225)). Issues related to browser, security, and documentation coverage ([#7226](https://github.com/nearai/ironclaw/issues/7226)) and localization were also closed.
- **Outbound Delivery & Reliability:** A substantial fix to restore durable delivery claims was merged ([PR #7029](https://github.com/nearai/ironclaw/pull/7029)).
- **Stress Testing & Live QA:** A new scripted tool-call workload for the stress harness was merged ([PR #7382](https://github.com/nearai/ironclaw/pull/7382)), and the live-qa lane was fixed to verify Slack delivery through the new two-lane contract ([PR #7389](https://github.com/nearai/ironclaw/pull/7389)).
- **Skill System:** A significant PR was merged that shifts skill selection authority from the host's keyword scoring to the model's explicit request ([PR #6938](https://github.com/nearai/ironclaw/pull/6938)).
- **Architectural Refactoring:** A large PR was merged implementing the "a run acts as its invoker" principle, removing shared-route subject binding ([PR #7377](https://github.com/nearai/ironclaw/pull/7377)).

### 4. Community Hot Topics
- **Web Push Notifications (PR #7398):** This large, open PR proposes making the web app a first-party notification channel, bringing it to parity with Slack and Telegram. The discussion likely centers on the complex standards involved (W3C Web Push, encryption, VAPID) and how this fits into the existing notification architecture. The active development and multi-author interest signal it's a highly desired feature for user experience.
- **Presence-Based Shared Conversations (PR #7397):** Another large, open PR builds on the recent "run acts as its invoker" change to enable shared conversations for Slack and Telegram. This suggests a core developer is iterating on making multi-user collaboration safe and seamless, a key differentiating feature for the platform.
- **SafetyLayer Dead Code (Issue #7391):** Opened by a community member (0xkurious), this issue points out that `SafetyLayer::validate_input` and `scan_inbound_for_secrets` have no callers on the live Reborn turn path, despite documentation describing a security data-flow. This has high visibility as it touches on a critical trust boundary and may challenge the project's documented security posture.

### 5. Bugs & Stability
- **Critical: Send-Claim TOCTOU Race (PR #7395):** A fix has been proposed for a critical time-of-check-to-time-of-use race condition in the outbound delivery claim process that could lead to misclassification of lost claims. This fix also allows for reopening failed rows, addressing a durability concern.
- **High: Dead Code on Security Path (Issue #7391):** As noted above, a community member flagged that critical inbound validation functions are not wired into the live Reborn turn path, contradicting documented security claims. This is a high-severity finding that undermines trust and requires immediate investigation.
- **Medium: CI Crate Prefix Hardcoding (PR #7394):** A fix is available for a CI script that hardcoded crate-root prefixes for `SANDBOX_DOCKER_EXACT_PATHS`, which would break as the project's crate structure evolves.
- **Medium: Live QA Lane Failures (PR #7389):** The `reborn-webui-v2-live-qa` lane failed consistently since a recent architectural change (#7157) due to a mismatch in delivery records, indicating a regression in test expectations that was subsequently fixed.

### 6. Feature Requests & Roadmap Signals
- **Migration Tool (Issue #6939):** A user feedback-driven request for a tool to port existing agent setups and memory from legacy products like "Hermes/Openclaw." This is a strong signal that the project is attracting users from other ecosystems and reducing friction will be key to adoption.
- **Web Debug Inspector (Epic #7218):** Close to completion, this operator-only feature will provide deep, real-time visibility into prompts, model usage, and tool execution, a critical tool for debugging and scaling.
- **Coding Tools Overhaul (Epic #7392):** A new epic was opened to replace first-party coding tools with an exact contract from an external project ("oh-my-pi"). This signals a strategic decision to align with an evolving standard and reduce maintenance burden.
- **Durable Write Stress Coverage (Issue #7360):** The project is proactively expanding its stress-testing harness to cover built-in capability writes, ensuring that regressions in these paths are caught by the nightly workloads.

### 7. User Feedback Summary
Direct user feedback is limited but highly impactful. The main pain point is **migration friction** ([Issue #6939](https://github.com/nearai/ironclaw/issues/6939)), where a user explicitly states that high switching costs could prevent them from adopting IronClaw. The feedback underscores the need for an official migration path to ensure they don't have to start over. This is a critical adoption blocker.

### 8. Backlog Watch
- **Reborn Migration Epics:** A significant number of issues related to the "Reborn" migration are being closed, but the top-level issues (like the recently closed #3280, #3288) have spawned numerous follow-ups. The breadth of this migration is immense, and tracking its completion via epics like #2987 and #3031 is crucial for the project's future.
- **Approval Parity (Epic #4539):** This epic, focused on bringing Reborn to feature parity with V1 approval workflows, was closed today. Verification that all sub-issues are complete and the user experience is seamless will be important.
- **Web Debug Inspector Dependencies:** While the feature is nearly complete, its finalization depends on the completion of the large, open PR #7291 which adds statistics, navigation, and localization. Maintainer attention is needed to review and merge this large PR to unblock the epic.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **2026-08-09**.

---

## 1. Today's Overview
LobsterAI is currently in a **low-activity maintenance phase**. Over the last 24 hours, only 1 issue and 3 pull requests were updated, with **zero new releases** and **zero merged pull requests**. The project shows signs of **stale backlog accumulation**, with the majority of items open for over 4 months without maintainer intervention. While the pipeline includes a valuable performance optimization (SQLite) and a useful feature (LiteLLM gateway), these are at risk of stagnation. The overall health is stable but trending toward **inactive community management**.

## 2. Releases
**No new releases** were published in the last 24 hours. There are no changelogs or migration notes to report for this period.

## 3. Project Progress
**No pull requests were merged or closed with a "merged" status today.** The only closed PR is **#2193 (closed, not merged)**, which proposed adding LiteLLM as an AI gateway provider. This suggests the maintainers may have rejected or shelved the feature. The other two PRs remain in a stale state without recent maintainer feedback.

## 4. Community Hot Topics
- **[Issue #1192: 自定义已有工具的默认配置](https://github.com/netease-youdao/LobsterAI/issues/1192)** — **1 comment**
  - The most active (and only) discussion online. The user wants to hard-code default configurations for existing tools (e.g., forcing headless mode for the browser tool) to bypass unreliable instruction-following from LLMs. This highlights a core pain point regarding **tool controllability and deterministic behavior**.
- **[PR #2193: feat: add LiteLLM as AI gateway provider](https://github.com/netease-youdao/LobsterAI/pull/2193)** — **2 comments**
  - Although closed, the discussion generated interest in **multi-provider routing**. The PR was rejected (likely due to scope or alternative solutions), but the underlying need for switching between 100+ providers remains a gap for users looking to reduce vendor lock-in.

## 5. Bugs & Stability
**No critical bugs or regressions were reported in the last 24 hours.** The only technical item is **[PR #1193](https://github.com/netease-youdao/LobsterAI/pull/1193)** which addresses a **High-severity performance issue**: SQLite write amplification caused by `db.export()` + `fs.writeFileSync()` on every row mutation. This is a known bottleneck that can cause severe performance degradation on large datasets, but no fix has been approved or merged yet.

## 6. Feature Requests & Roadmap Signals
- **Tool Default Configuration (Hard-coded overrides)** — From Issue #1192. Users require a way to force specific tool parameters (e.g., headless mode) regardless of LLM behavior. This is a strong signal for a **"Tool Settings" panel or initializer** that overrides LLM instructions.
- **AI Gateway Providers (LiteLLM support)** — From PR #2193. Even though the PR was closed, the concept of flexible API routing (beyond just OpenAI-compatible endpoints) is a recurring enterprise request. It is likely to reappear in a future iteration, possibly via a different implementation or config schema.

## 7. User Feedback Summary
- **Pain Point:** LLM instruction-following is unreliable. The user in Issue #1192 explicitly stated that "大模型的指令跟随经常不好" (LLM instruction following is often poor), leading them to request a bypass for memory-based configuration in favor of persistent user-set defaults.
- **Desire for Determinism:** Users want to control the agent's environment strictly without relying on natural language prompts to influence tool behavior.
- **Performance Sensitivity:** The PR activity around SQLite suggests users are hitting performance limits regarding data persistence, indicating **scale concerns** for users with extensive conversation histories.

## 8. Backlog Watch
The following items require immediate maintainer attention to prevent abandonment:

- **[PR #1193 (perf: sqlite debounce)](https://github.com/netease-youdao/LobsterAI/pull/1193)** — Open since **April 1st** (over 4 months). This is a substantial performance improvement that directly addresses a known bottleneck. It is at high risk of becoming obsolete due to merge conflicts if left untouched much longer.
- **[Issue #1192 (Tool default settings)](https://github.com/netease-youdao/LobsterAI/issues/1192)** — Open since **April 1st**. The user has received only one comment (likely automated) and is awaiting a response or workaround.
- **[PR #2294 (TakoAPI badge)](https://github.com/netease-youdao/LobsterAI/pull/2294)** — Open since **July 8th**. Although trivial (a documentation badge), it reflects the project's external marketing and discoverability; a quick review is warranted.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-09

## 1. Today's Overview

Moltis is in a steady maintenance phase with moderate activity: 2 issues and 1 PR were updated in the last 24 hours, with one longstanding Docker sandbox filesystem bug resolved via merged PR #1105. The project remains responsive to bug reports, with a clear trajectory from report to fix spanning roughly two months for the Docker-related issue. Notably, a newer, more nuanced Apple Container sandbox detection bug (#1185) was filed yesterday and remains open, indicating ongoing platform integration complexity. With no new releases this cycle, the team appears focused on hardening existing functionality across container and sandbox environments rather than delivering new features. Overall, project health is good, with a functioning issue-to-fix pipeline and no signs of maintainer bottleneck.

## 2. Releases

No new releases were published in the last 24 hours. No release notes, migration guides, or version-specific changes are available for this digest period.

## 3. Project Progress

One pull request was merged/closed in the last 24 hours:

- **PR #1105 — Fix Docker sandbox filesystem tool fallback** (merged, by penso)  
  [GitHub Link](https://github.com/moltis-org/moltis/pull/1105)  
  This PR resolves the long-standing issue where `Read`/`Write`/`Edit` tools failed inside Docker sandboxes. Key improvements include:
  - Added regression coverage for sandboxed filesystem operations on `/home/sandbox` and `workspace/data` paths.
  - Introduced a fallback mechanism: when the gateway process cannot access the host mount, Moltis now translates Docker host paths to container operations.
  - Preserved direct-host missing-list semantics while extending filesystem tool functionality inside containers.

This fix directly closes Issue #1096 (see Bugs & Stability) and represents a meaningful improvement to the core agentic tooling layer.

## 4. Community Hot Topics

Current activity is low in terms of discussion volume — neither open issue has comments or reactions at this time. The most significant community signals are the issues themselves:

- **Issue #1185 [OPEN]: Apple Container 1.x sandbox starts but Moltis treats it as not running**  
  Author: mikz | Created: 2026-08-08 | [GitHub Link](https://github.com/moltis-org/moltis/issues/1185)  
  This is the most recent and active item, reporting a state-detection mismatch between Apple Containers and Moltis. The underlying need is reliable lifecycle synchronization with native Apple sandboxing — critical for macOS users who rely on Container for isolation. The lack of comments suggests this is a fresh report awaiting triage.

- **Issue #1096 [CLOSED]: Read/Write/Edit tools don't work in Docker**  
  Author: IlyaBizyaev | [GitHub Link](https://github.com/moltis-org/moltis/issues/1096)  
  Now closed by PR #1105, this issue was the community's most impactful pain point related to Docker sandbox usability. Its closure represents a win for users running Moltis in containerized environments.

## 5. Bugs & Stability

One open bug and one newly resolved bug are relevant this cycle:

- **HIGH — Issue #1185 [OPEN]: Apple Container 1.x sandbox starts but Moltis treats it as not running**  
  [GitHub Link](https://github.com/moltis-org/moltis/issues/1185)  
  This is a functional-state detection bug: the sandbox is operational, but Moltis's internal tracking reports it as stopped. This can cause agents to restart containers unnecessarily, duplicate resources, or fail to execute tasks. No fix PR exists yet; requires maintainer triage and likely a fix in the container status-polling logic for Apple-specific implementations.

- **LOW — Issue #1096 (now resolved): Read/Write/Edit tools fail in Docker [CLOSED]**  
  [GitHub Link](https://github.com/moltis-org/moltis/issues/1096)  
  Previously blocking filesystem operations for Docker users; now fixed and closed via PR #1105. No residual stability concerns reported.

Overall stability posture is positive: one critical issue resolved, one new issue open with no regressions reported against existing functionality.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed in the last 24 hours. However, the trajectory of the two current issues points to roadmap signals:
- **Container lifecycle integration maturity**: The Apple Container state-detection bug (#1185) suggests that Moltis's container abstraction layer is expanding to more platforms (Apple Container 1.x), but needs more robust status synchronization. Expect future releases to include improved container-state verification and platform-specific lifecycle handling.
- **Sandbox filesystem tooling**: The Docker filesystem tool fix (PR #1105) indicates continued investment in sandboxed tool execution. Future work may extend these fallback mechanisms to other container runtimes or sandbox types, possibly including system-level path translation improvements.

Prediction: the next minor version is likely to include Apple Container compatibility fixes and general container lifecycle robustness improvements.

## 7. User Feedback Summary

User sentiment is mixed but generally constructive:

- **Pain point (resolved)**: Docker users experienced broken Read/Write/Edit tools, making agentic file operations impossible inside containers. This was a core workflow blocker, now resolved — expect high user satisfaction from the community segment relying on Docker-based deployments.
- **Pain point (active)**: Apple Container users encounter state-detection mismatches, causing workflow disruptions despite the sandbox running correctly. The reporter (mikz) noted they use the latest version, preemptively searched existing issues, and followed the bug reporting guidelines — indicating an engaged and technically proficient user who expects prompt resolution.
- **No complaints** about performance, feature gaps, or documentation were logged in this period, suggesting healthy baseline satisfaction.

## 8. Backlog Watch

The following item warrants maintainer attention:

- **Issue #1185 — Apple Container 1.x sandbox state detection**  
  [GitHub Link](https://github.com/moltis-org/moltis/issues/1185) | Created: 2026-08-08 (yesterday) | Open, 0 comments
  While not long-unanswered, this is the only open item and is both recent and unaddressed. Given that the Docker equivalent took ~2 months from report to fix, it would be prudent for maintainers to triage this early and set expectations — Apple Container support is likely newer and less battle-tested, so early engagement will prevent user churn on macOS.

No other issues or PRs have remained unanswered beyond reasonable timeframes; the backlog is effectively clean.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the provided GitHub data for CoPaw (agentscope-ai/QwenPaw), here is the project digest for 2026-08-09.

---

## CoPaw Project Digest: 2026-08-09

### 1. Today's Overview
Project activity is **high**, with 50 PRs and 19 issues updated in the last 24 hours, indicating a very active development cycle. The majority of activity is focused on stabilizing the `2.1.0` beta line, with a significant volume of bug reports targeting the Console UI, provider integrations (OpenAI, Google, DeepSeek), and MCP connectivity. Merged PRs are minimal today (3 closed/merged out of 50), suggesting maintainers are focused on reviewing a large queue of incoming fixes rather than pushing new merges. The issue tracker shows a steady stream of user-reported regressions, characteristic of a project in a heavy pre-release stabilization phase.

### 2. Releases
**None.** No new releases were published today. The project appears to be between `v2.1.0b2` and a stable `v2.1.0` release.

### 3. Project Progress
Merged or closed PRs are limited today. The most notable closings include:
- **[#4558]**: A long-standing issue about high CPU usage during long text output was closed, likely as a duplicate of the newer and more specific [#6828] (see Bugs section).
- **[#6756]**: A bug where the `run_tool_batch` tool failed with `No toolkit available in current context` was closed, indicating a fix was deployed.

The current focus is on code review for a large queue of open PRs targeting `2.1.0`, including:
- **Performance**: [PR #6636] adds pagination and GZip compression to chat history, and [PR #6381] reduces driver discovery latency.
- **Stability**: [PR #6652] enforces `max_iterations` server-side in Mission Mode, closing a critical billing-burn vulnerability.
- **Refactoring**: [PR #6779] aims to align Scroll and memory with the AgentScope lifecycle, cleaning up duplicated context management paths.

### 4. Community Hot Topics
The most active discussions revolve around reliability and user experience in the beta:
- **[Issue #6782] (9 comments)**: Users running the Docker version (2.0.1) cannot access plugin and application markets ("maintenance" error). This is a high-traffic issue blocking core functionality for Docker users.
- **[Issue #6811] (5 comments)**: A critical bug where OpenAI Responses continuation summaries ignore `disable_thinking` and cause a 60-second cancellation, blocking the main conversation.
- **[Issue #6490] (5 comments)**: A feature request for adding Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers, indicating community demand for broader, cost-effective model access.

### 5. Bugs & Stability
Today's reports show a cluster of issues, ranked by severity:

1.  **Critical - Blocking & Resource Exhaustion**:
    - **[Issue #6811]**: OpenAI continuation summary blocks main conversation for 60s and misreports errors.
    - **[Issue #6822]**: A transient MCP connection failure permanently blocks the active conversation after auto-reconnect. This is a significant reliability concern for users with remote tools.
    - **[Issue #6814]**: SIGBUS crash in `sqlite3WalFindFrame` when opening history.db on macOS, causes a hard crash of the application.

2.  **High - UI/Performance Degradation**:
    - **[Issue #6828]**: Console frontend uses ~20% CPU at idle due to infinite CSS animations, causing UI jank.
    - **[Issue #6820]**: Frontend UI fails to show streaming output (model output, tool calls, thinking) until the process is fully complete, severely hampering user experience.

3.  **Medium - Provider & Integration Failures**:
    - **[Issue #6821]**: Relay of `reasoning_content` fails for thinking-mode models (400 BadRequestError).
    - **[Issue #6812]**: Google API fails due to extra `$schema` field in tool schemas.
    - **[Issue #6813]**: `consume_model_response` raises `KeyError: '__aiter__'`, breaking auto-title generation.

4.  **Low - Platform-Specific & Cosmetic**:
    - **[Issue #6831]**: Whisper backend PATH excludes `/opt/homebrew/bin` on macOS.
    - **[Issue #6826]**: Incorrect display of assistant message end timestamps.

### 6. Feature Requests & Roadmap Signals
There is a clear push for more robust multi-agent and permission-control features:
- **[Issue #6838]**: User reporting that `spawn_subagent` doesn't allow switching models and has issues with shared workspaces. This signals a need for more granular control over sub-agent configurations.
- **[Issue #6832]**: Request to add descriptions for approval requests, so users can understand what an AI is asking permission to do. This is a strong usability signal for the security/permission model.
- **[Issue #6827]**: Request to optionally clean up temporary files created by agents when a chat is deleted, indicating user concern about workspace clutter.

These requests suggest the next version will likely see improvements in sub-agent management and the human-in-the-loop approval workflow.

### 7. User Feedback Summary
User pain points are concentrated on the instability of the `2.1.0` beta and missing features in the stable `2.0.1` version.
- **Beta Testers (v2.1.0b*)**: Are experiencing major regressions in core workflows, including blocked conversations (#6811, #6822) and broken UI feedback (#6820). There is frustration with the C++/backend exceptions surfacing as `Model 'unknown' execution failed`, which is confusing and unhelpful for end-users (#6812, #6821).
- **Stable Users (v2.0.1)**: The most critical complaint is the complete inaccessibility of plugin and application markets in Docker, rendering a significant portion of the software non-functional (#6782). Users are also experiencing installation and update failures due to file-locking issues (#6810).
- **Overall Sentiment**: The high number of bug reports and feature requests indicates a highly engaged user base. They are actively testing and providing feedback, but their patience may be tested by the volume of regressions, which suggests the `2.1.0` release candidate is not yet stable enough for production use.

### 8. Backlog Watch
The following items have been open for a while and need maintainer attention:
- **[PR #6398] (Under Review)**: Feature for reranker support in ReMe memory search, open since 2026-07-23. Requires review and potential merge.
- **[PR #6238] (Under Review)**: Performance improvement for concurrent driver handler initialization, open since 2026-07-18. This is a significant performance fix that seems stalled.
- **[Issue #6490] (Feature Request)**: Adding new providers (Volcengine, Xiaomi) has been open since 2026-07-27, with recent activity suggesting it's still relevant but not prioritized.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-09

## 1. Today's Overview

ZeroClaw shows a highly active open-source project with **50 issues and 50 PRs updated in the last 24 hours**, indicating strong community engagement and ongoing development. The project has **48 open issues and 48 open PRs**, with only 2 closed/merged in each category, suggesting a backlog that is growing faster than it is being resolved. A notable cluster of **security-related bugs** (S0–S1 severity) and **high-risk architectural RFCs** dominate the active queue, particularly around path restrictions, approval security, cost tracking, and leak detection. Two related RFCs to retire standalone crates (`aardvark-sys`, `zeroclaw-robot-kit`) are in progress, signaling a **consolidation effort toward a simpler workspace**. No new releases were published today, so the focus is on bug fixing and architectural refinement rather than feature delivery.

## 2. Releases

No new releases were published in the last 24 hours. The project appears to be between release cycles, with efforts concentrated on stabilizing existing functionality through bug fixes and refactoring PRs (e.g., #9853 removing deprecated crates, #9841 fixing headless SOP execution).

## 3. Project Progress

**Merged/Closed PRs (2 total):**

- **[#9494 — fix(sop): drive cron-started headless runs](https://github.com/zeroclaw-labs/zeroclaw/pull/9494)** — *Closed* — This large PR (size:XL) fixed a critical bug where cron-started SOP runs would strand at the first step (`ExecuteStep`) with no agent loop attached. It routed these runs through a shared headless run driver, addressing issue #9805. This is a significant fix for the cron/SOP delivery pipeline.
- **[#9798 — docs(sop): document which agent executes SOP steps](https://github.com/zeroclaw-labs/zeroclaw/pull/9798)** — *Closed* — Superseded by #9841; this docs-only patch captured behavior that the runtime fix eliminated, so it was closed in favor of the more comprehensive solution.

**Key active PRs advancing major features:**
- **[#9841 — fix(sop): drive headless SOP runs + 5 defects](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)** — Continuation of #9494, fixing four review findings plus a new defect. This PR is the canonical fix for the SOP auto-mode execution issue.
- **[#9822 / #9823 — Telegram tool progress + typing pause](https://github.com/zeroclaw-labs/zeroclaw/pull/9822)** and **[#9823](https://github.com/zeroclaw-labs/zeroclaw/pull/9823)** — Two channel improvements: showing tool-call progress in partial streaming drafts and pausing typing indicators during approval waits (fixes #9656).
- **[#9853 — remove aardvark-sys and zeroclaw-robot-kit](https://github.com/zeroclaw-labs/zeroclaw/pull/9853)** — Executes the consolidation proposed in RFCs #8043 and #9803, deleting two standalone crates to simplify workspace publishing.
- **[#9580 — move network guard primitives to zeroclaw-infra](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)** — Stage 1 of plugin egress policy work (ADR-013), refactoring network guard primitives.
- **[#9828 — agent-facing config authoring with policy previews](https://github.com/zeroclaw-labs/zeroclaw/pull/9828)** — Gives agents a validated, operator-approved path to author config, replacing raw `echo > config.toml` shell access.

## 4. Community Hot Topics

The most active discussions (by comment count) reveal three dominant themes:

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#8692 — Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 11 | Architecture process/coordination |
| [#8043 — Retire aardvark-sys](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | 11 | Workspace consolidation (closed) |
| [#8424 — Workspace-relative forbidden paths](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | 11 | Security: path restrictions |
| [#8054 — System prompt tool availability](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | 10 | Tool consistency across entry points |

**Underlying needs:**
- **Process efficiency (#8692, #9496):** Maintainers are actively seeking to streamline RFC discussion, voting, and assignment. The current process is described as "slower and more cumbersome than the decisions it is meant to support" — a signal that governance overhead is hindering velocity.
- **Security hardening (#8424, #9815, #9825):** Users want granular control over what agents can access (forbidden paths inside workspaces) and are hitting false positives from leak detection (public blockchain addresses being redacted). These are high-visibility UX/security tension points.
- **Workspace simplification (#8043, #9803, #9853):** The community supports removing standalone crates that complicate publishing and add no reverse dependencies. This is a healthy sign of housekeeping and focus.

## 5. Bugs & Stability

Today's queue shows a **concentration of high-severity (S0–S1) security and reliability bugs**:

| Severity | Issue | Summary |
|----------|-------|---------|
| **S0** | [#9855 — Matrix homeserver resolution failure](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | Matrix channel bypasses `.well-known/matrix/client` discovery; data loss/security risk |
| **S1** | [#8559 — Agents stop when exiting chat window](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web dashboard workflow blocked; agent loop interrupted by user exit |
| **S1** | [#9035 — Docker gateway loopback-bound](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Published port unreachable ("Connection refused") |
| **S1** | [#9387 — Approval responses from any chat member](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | Telegram/Slack/Lark/Matrix — interactive approvals not sender-scoped |
| **S1** | [#9390 — Emergency stop is dead code](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | CLI-only state file that no runtime path reads |
| **S1** | [#9340 — Cron jobs deliver to None](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI-created cron jobs discard output silently |

**Fix PRs in flight:**
- [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) fixes the SOP/cron headless execution bug (#9805).
- [#9823](https://github.com/zeroclaw-labs/zeroclaw/pull/9823) fixes Telegram typing indicator stuck during approval waits (#9656).
- [#9853](https://github.com/zeroclaw-labs/zeroclaw/pull/9853) removes two deprecated crates, simplifying the build.

No fixes are yet linked for the S0 Matrix issue or the S1 approval-spoofing issues.

## 6. Feature Requests & Roadmap Signals

Active feature requests and RFCs with high traction:

- **[#8550 — OpenAI-compatible chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)** (6 comments, in-progress) — Strong demand from users wanting to connect standard OpenAI clients (Open WebUI, LobeChat). This could be a **major adoption catalyst** if shipped.
- **[#9346 — Unified package/capability catalog](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)** (5 comments, RFC) — Consolidating plugin/package/config/runtime-state views into one contract. Ties to the workspace consolidation trend.
- **[#8424 — Workspace-relative forbidden paths + .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** (11 comments, RFC) — Users need to protect in-workspace sensitive files (`.env`, `config.yaml`). High-value security feature.
- **[#9824 — Simplify default web-tool surface](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)** (2 comments, in-progress) — Reduce five overlapping web tools to three (fetch/research/http). Cleaner default UX.
- **[#8445 — Telegram multi-message mode](https://github.com/zeroclaw-labs/zeroclaw/issues/8445)** (4 comments, in-progress) — Send each agent turn as a separate message instead of concatenating.
- **[#9580 — Plugin egress policy (ADR-013)](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)** — Network guard primitives moving to `zeroclaw-infra`; foundational work for plugin sandboxing.

**Prediction for next release:** The OpenAI-compatible endpoint (#8550) and the SOP headless fix (#9841) are the most likely candidates, given they address high-impact user pain points and have active PRs or clear implementation paths.

## 7. User Feedback Summary

**Pain points expressed with high emotional intensity:**

- **"Agents stop when I exit the chat window"** (#8559): A user reports being "completely blocked" from background work while agents run — a fundamental usability expectation that the web dashboard interrupts tasks on exit.
- **"Solana wallet addresses get redacted"** (#9486): An agent cannot state a wallet address to a user because the leak detector mangles it. The user's example shows a real dialog where the assistant is functionally crippled.
- **"Cron jobs run but output goes nowhere"** (#9340): Jobs are recorded as "ok" while results are silently discarded — a trust-destroying silent failure.
- **"Docker compose gateway unreachable"** (#9035): Published port returns "Connection refused" despite successful build — a common deployment frustration.
- **"SOP runs stick at step 1 forever"** (#9805): Runs hold concurrency slots forever, surviving daemon restarts — a resource leak that blocks the entire pipeline.

**Satisfaction signals:** The community shows strong engagement with maintainers (multiple "distinguished contributor" PRs), and the RFC process is actively used to make decisions. The existence of a maintainer decision tracker (#8692) at 11 comments indicates a healthy, responsive governance structure. The consolidation of crates (#9853) was driven by community feedback about publishing blockers — showing the team listens to packaging concerns.

## 8. Backlog Watch

**Items needing maintainer attention:**

- **[#7099 — Route `zeroclaw status` through i18n](https://github.com/zeroclaw-labs/zeroclaw/issues/7099)** (opened 2026-06-02, 2 comments, priority:p3) — Low priority but important for CLI consistency; has been idle for over 2 months.
- **[#6663 — Telegram tool-call progress during partial streaming](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)** (opened 2026-05-14, in-progress, 2 comments) — Dormant for weeks; PR #9822 now addresses it, so this may resolve soon.
- **[#8731 — Zombie MCP server processes](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)** (opened 2026-07-05, 2 comments, priority:p1) — S2 degradation with no linked fix PR; accumulating zombie processes under daemon PIDs. This is a reliability concern that deserves prioritization.
- **[#9340 — Cron jobs with `delivery.mode = "none"`](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)** (opened 2026-07-24, 3 comments, priority:p1) — Has a clear cause identified (`add_agent_job` takes `Option<DeliveryConfig>`); needs a simple fix that would eliminate silent output loss.
- **[#9571 — Remove WATI channel](https://github.com/zeroclaw-labs/zeroclaw/pull/9571)** (size:XL, priority:p0, needs-author-action) — Large removal PR that has been open since 2026-07-30; it's a heavy lift, but channel consolidation aligns with the workspace simplification trend.

**Process-level watch item:** The RFC process itself ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)) is under review to reduce overhead — if adopted, it could accelerate many of the large architectural changes currently queued.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*