# OpenClaw Ecosystem Digest 2026-08-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-26 01:23 UTC

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

Here is the OpenClaw project digest for August 26, 2026.

---

### 1. Today's Overview

OpenClaw is showing signs of a high-velocity, maintenance-heavy development cycle. While there are no new releases today, the repository saw extremely high activity with 500 issues and 500 PRs updated in the last 24 hours. With only 67 issues and 238 PRs being closed/merged in that period, the project is facing a significant and growing backlog of open work (433 issues, 262 PRs). The activity is heavily focused on bug fixing and stability improvements, particularly around message delivery, session state management, and data integrity, rather than on new feature development.

### 2. Releases

No new releases were published today (2026-08-26). The project is currently in the `v2026.8.1-beta.3` cycle, as referenced in the top issue (#125626).

### 3. Project Progress

Despite no new releases, the project made substantial progress through merged PRs. Key areas of advancement today include:

- **Security & Policy:** A large PR (#116489) was merged that requires explicit user acknowledgement for install policy warnings when installing plugins or skills, adding a new layer of security against malicious installs. A follow-up UI PR (#120900) to review these warnings in the Control UI was also closed.
- **Channel Reliability & Parity:** A significant fix (#129710) was merged to make seven group-capable channels (including LINE, Mattermost, and Twitch) honor their documented `historyLimit` settings, improving inbound context across channels.
- **Developer Experience & Tooling:** A PR (#123975) was merged to clean up `tsgo` compiler process trees on timeouts/signals, preventing wedged processes and improving the developer workflow.
- **Code Cleanup:** A large refactor (#129698) was merged to remove 388 lines of obsolete JSONL protocol code from the Reef Node, simplifying the codebase and reducing maintenance overhead.

### 4. Community Hot Topics

The most active discussions highlight critical reliability and design concerns, indicating where users are facing the most friction.

- **Beta Feedback (#125626):** The top issue with 19 comments is a dedicated feedback thread for the `v2026.8.1-beta`. This is a hub for testers to report regressions and issues, making it a crucial source of information for the maintainers.
- **QA Tool-Parity Concerns (#80319):** With 17 comments, this issue discusses a potential conflation between Codex-native tools and OpenClaw's dynamic tool parity in the QA suite. The analysis suggests it's a test harness issue, but it points to deep community interest in ensuring OpenClaw's tool ecosystem works perfectly with Codex.
- **Subagent Message Loss (#67777):** This P1 bug, with 14 comments, discusses a critical flaw where subagent completion delivery can be lost during timeouts or restarts. The underlying need is for bullet-proof reliability in complex, multi-agent workflows.
- **SQLite Growth & Data Integrity (#114612):** This issue with 8 comments flags an unbounded growth problem with the memory index database, a serious concern for long-running production instances that could fill up disk drives over time.
- **SQLite Corruption Recurrence (#126821):** This P0 regression with 8 comments is alarming, detailing recurring SQLite corruption even on pristine rebuilt databases in a WSL2 environment. This is a top-priority stability issue that undermines user trust in data persistence.

### 5. Bugs & Stability

Stability is the dominant theme today, with several high-severity bugs reported or actively discussed.

**High Severity (P0/P1):**
- **SQLite Corruption Recurs (#126821):** This P0 regression is the most critical issue, reporting that a pristine database becomes corrupted within 24 hours in some environments. This is an active investigation with no fix PR yet.
- **Subagent Completion Delivery Loss (#67777):** A P1 bug that can silently lose subagent task completions, posing a high risk for autonomous workflows.
- **Zombie Process Leak (#97616):** A P1 regression reporting that OpenClaw leaks unreaped child processes (hooks, tools), leading to zombie accumulation and degradation over time.
- **Gateway Wedge from Generation Churn (#127710):** A P1 bug describing two message-loss modes caused by a fail-closed design in the prepared-model-runtime, where a transient error can permanently wedge the gateway.
- **Prepared-Model-Runtime Fails Closed (#128067):** A field report listing six distinct reliability defect classes across persistence, delivery, and restart-recovery in beta.7.
- **Telegram Durable Delivery Stuck (#126246):** A P1 bug where Telegram replies can get stuck in a `send_attempt_started` state and be lost on restart.
- **Memory Search Timeout (#92633):** A P1 bug where searching all memory corpora times out, while searching individual corpora succeeds.

**Fix PRs in Progress:**
- **WhatsApp Blank Bubbles (#127948):** A P1 bug causing blank reply bubbles in WhatsApp groups has a linked open PR.
- **Sandbox Skills Permissions (#126631):** A P1 bug where sandbox skills create root-owned directories, locking out the user, has a linked open PR.
- **Compaction Infinite Loop (#126900):** A P1 bug where `maxActiveTranscriptBytes` triggers compaction forever, wedging the session, has a linked open PR.

### 6. Feature Requests & Roadmap Signals

While bugs dominate, several feature requests signal where the project is heading.

- **Per-Agent Dreaming Configuration (#67413):** Received 5 👍 and has a clear use case for memory management. The request to configure memory "dreaming" per agent rather than globally is likely to be addressed soon, as memory management and resource control are recurring themes.
- **Expose Backend Model in Session Status (#51441):** Users want to see the *actual* backend model used (e.g., through LiteLLM) to better understand agent behavior. This transparency feature is a strong candidate for a future release.
- **Graceful Sub-Agent Timeout (#6625):** The request for a pre-timeout warning to prevent work loss is a logical and popular improvement. Given the focus on reliability, this is a likely candidate for implementation.
- **Global Circuit Breaker (#79252):** Users are asking for a session-global circuit breaker to prevent agents from evading limits by switching tools. This indicates a strong need for more robust control and anti-loop safeguards.

### 7. User Feedback Summary

The community is actively using OpenClaw for complex, production-like workloads and is feeling the growing pains of a rapidly expanding system.

- **Reliability Pain:** The most significant dissatisfaction centers on reliability. Users are reporting message loss, crashes, data corruption, and stuck sessions, which are critical for any AI assistant.
- **Operational Friction:** Issues like unbounded database growth (#114612), zombie process leaks (#97616), and file descriptor exhaustion (#71335) suggest that long-running gateways require significant operational overhead to manage. This is a clear signal that more robust self-maintenance is needed.
- **Need for Transparency:** There is a strong desire for more visibility into the system's inner workings. This includes requests to expose the actual backend model (#51441) and OpenRouter cost data (#9016).
- **Accessibility Appreciation:** Positive feedback includes acknowledgment of accessibility improvements in the TUI (#95601), showing that the team's efforts in this area are recognized and valued.

### 8. Backlog Watch

Many older issues are stuck in a loop of "needs-product-decision" and "needs-maintainer-review," indicating a bottleneck in the triage process.

- **Onboarding Memory Setup (#16670):** Open since Feb, this P2 issue suggests making Memory/Embedding setup mandatory during onboarding to prevent user confusion.
- **YAML Config Support (#45758):** A popular request (2 👍) open since March, with maintainers needing to make a product decision on alternative config formats.
- **Per-Agent Dreaming (#67413):** This popular feature request (5 👍) has been open since April and is a prime candidate for implementation to help with resource management.
- **Image Batching/Media Groups (#39343):** Open since March, users request gateway-level buffering for media groups to prevent the agent from spamming the chat with N responses for N images.
- **Gateway-Side Circuit Breaker (#62615):** Open since April, this feature would help prevent sessions from becoming permanently wedged, a stability concern that would benefit the overall health of the platform.

These long-standing P2 and P3 issues, while not critical bugs, represent significant quality-of-life and robustness improvements. Their lack of forward movement, marked by the `clawsweeper-recovery-stuck` label, suggests they need a product-owner decision to proceed.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Open-Source Ecosystem — Cross-Project Comparison Report
**Date:** 2026-08-26

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a **mature growth phase**, characterized by high-velocity development, a strong emphasis on reliability hardening, and converging architectural patterns. Projects are moving beyond basic chat capabilities toward production-grade concerns: multi-agent orchestration, sandbox security, cross-platform reliability, and rich channel integrations. The ecosystem shows clear stratification — a core reference project (OpenClaw) with massive community engagement, several rapidly iterating mid-tier projects (NanoBot, IronClaw, ZeroClaw), and a long tail of niche or stabilizing projects. Common pain points across all projects include data integrity (SQLite corruption, message loss), process lifecycle management (zombie processes, stuck gateway states), and security boundaries (shell injection, cross-agent isolation). Notably, multiple projects are independently converging on **edge-compute and household mesh scenarios**, suggesting a significant roadmap shift toward distributed deployment.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health Score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 updated / 67 closed | 500 updated / 238 merged | None (v2026.8.1-beta.3) | **6/10** | High activity but growing backlog; P0 SQLite corruption, P1 message loss |
| **NanoBot** | ~5 active | 24 updated / 14 merged | None | **8/10** | Rapid fixes; all P1s addressed; strong contributor funnel |
| **Hermes Agent** | 50 updated / 8 closed | 50 updated / 8 merged | None (v0.4.3 / Desktop 0.20.5) | **7/10** | Mixed; responsive team but long-standing macOS permissions issue |
| **PicoClaw** | 4 open | 1 open | None (v0.3.1) | **5/10** | Low activity; 2 critical issues stale, 1 fix PR unmerged |
| **NanoClaw** | 5 open | 50 updated / 16 merged | None | **8/10** | Intense integration; core team consolidating; security focus |
| **NullClaw** | 1 open | 0 | None | **7/10** | Quiet but stable; architectural proposal signals direction |
| **IronClaw** | 37 updated | 24 updated / 10 merged | None | **8/10** | Strong execution; v1.4.0 epic on track; CI improvements shipping |
| **LobsterAI** | 1 open | 11 updated / 9 merged | ✅ 2 (2026.8.25, 2026.8.21) | **8/10** | High velocity; Library feature maturing; analytics push |
| **TinyClaw** | — | — | — | **N/A** | No activity |
| **Moltis** | 2 open | 5 updated / 2 merged | None | **7/10** | Steady; sandbox expansion theme; backlog PRs risk staleness |
| **CoPaw** | 33 updated / 14 closed | 50 updated / 29 merged | ✅ v2.1.1-beta.3 | **8/10** | Active release cycle; backlog clearing; critical bugs fixed |
| **ZeptoClaw** | — | — | — | **N/A** | No activity |
| **ZeroClaw** | 50 updated | 50 updated / 1 merged | None (0.8.4 → 0.9.0 in progress) | **7/10** | Review-heavy stabilization; security hardening; low merge rate deliberate |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale:** 500 issues/PRs updated in 24h — roughly 10× more activity than any peer (next: NanoBot/CoPaw at ~50). This reflects the largest contributor base and user footprint in the ecosystem.
- **Breadth:** Channels (Telegram, WhatsApp, LINE, Mattermost, Twitch, Slack), Codex integration, Reef Node, TUI/WebUI — a feature surface that eclipses most competitors.
- **Community gravity:** 19+ comments on beta feedback, dedicated QA tool-parity discussions, and a deep contributor pipeline — the project functions as the de facto reference implementation.

**Technical Approach Differences:**
- **TypeScript/full-stack** (tsgo compiler) vs. Python-heavy peers (Hermes, NanoClaw) and Rust elements (ZeroClaw).
- **JSONL protocol** (being simplified) and memory-index SQLite — a heavier but more capable runtime than NanoBot's or PicoClaw's lean implementations.
- **Sub-agent architecture** with multi-channel parity — more ambitious than CoPaw's session-based model but also more failure-prone (subagent message loss #67777).

**Community Size vs. Peers:**
- OpenClaw's 500-issue daily churn vs. NullClaw's 1 or PicoClaw's 4 indicates an order-of-magnitude community difference. However, this scale brings **backlog risk**: 433 open issues vs. 67 closed in 24h is a net-negative trajectory that peers (NanoBot, IronClaw) manage better relative to their size.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Reliability & Data Integrity** | OpenClaw, Hermes, CoPaw, ZeroClaw | SQLite corruption (#126821), message loss (#67777), memory leaks (#5720), cron workspace_dir misfires (#9206) — multi-agent workflows demand bulletproof persistence and delivery |
| **Sandbox/Security Hardening** | NanoClaw, ZeroClaw, IronClaw, Moltis, OpenClaw | Shell injection via user input (#3543), skill HTTP egress bounding (#10369), symlink race prevention (#10367), persistent sandboxes for state retention (#7732), Kubernetes/Coder backends (#1118, #1199) |
| **Multi-Agent Isolation** | ZeroClaw, OpenClaw, NanoClaw, CoPaw | Cross-agent cron authorization (#9947), delegate workspace isolation (#9872), background subagent lifecycle (#5529), per-agent tool scoping (#3532) |
| **Streaming/Message Delivery** | Hermes, CoPaw, OpenClaw, NanoBot | SSE loops/100% CPU (#7261), stream cancellation (#87697), rich messages vs. streaming (#5516), deferred tool invocation (#7892) |
| **Operational UX** | OpenClaw, Hermes, NanoClaw, PicoClaw, IronClaw | Update fragility (#3529), macOS permission fatigue (#52010), process leaks (#97616), unbounded DB growth (#114612), WebUI lag (#3281) |
| **Edge/Distributed Compute** | PicoClaw, NanoClaw, NullClaw, ZeroClaw | Household edge workers (#3345, #3538, #994), Hailo-Ollama provider (#9109), lightweight runtimes |
| **Channel Integration Depth** | OpenClaw, NanoBot, CoPaw, Moltis | Slack routing policies (#2431), WeChat privacy controls (#7258), Telegram media groups, WhatsApp context continuity (#1243) |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Full-featured reference assistant; channels + Codex + TUI | Power users, multi-channel operators | TypeScript monorepo, SQLite memory, Reef Node, JSONL protocol |
| **NanoBot** | Rapid feature iteration; TUI/WebUI polish; search/tools | Developer-tinkerers, self-hosters | Python, gateway + TUI, provider-agnostic (Codex, OpenAI) |
| **Hermes Agent** | Desktop app + local LLMs (Ollama) + MCP ecosystem | Desktop/enterprise users, macOS/iOS | Python, Electron desktop, MCP client, Slack/Teams |
| **PicoClaw** | Low-end hardware / edge devices | Embedded/edge pioneers | Lightweight runtime, nightly channel, RISC-V/ARM focus |
| **NanoClaw** | Containerized multi-agent workflows | DevOps/automation teams | Container-native, compose files, Claude Code/Codex/OpenCode adapters |
| **NullClaw** | Primitive-first architecture (Zig runtime, adapters) | Systems-level architects | Zig core, RuntimeAdapter/Peripheral vtables, WASM/Docker adapters |
| **IronClaw** | Notification/messaging infrastructure | Enterprise ops, Slack-centric teams | Rust-based, CI-heavy, WebUI design system, durable inbox |
| **LobsterAI** | Chinese-market desktop product, Library/Artifacts | Chinese-speaking professionals | Electron, React, sidecar "dsh", analytics-instrumented |
| **Moltis** | Sandbox isolation for untrusted code execution | Security-conscious enterprises | Rust, Kubernetes/Coder backends, MCP tools |
| **CoPaw** | Chinese-market all-in-one assistant | Chinese-speaking consumers | Python, AgentScope framework, WeChat channel, desktop app |
| **ZeroClaw** | Security-hardened multi-session gateway | Advanced operators, security reviewers | Rust, auth/RFC-driven, execution-tree budgets, multi-channel |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (high velocity, responsive):**
- **NanoBot** — 14 PRs merged/24h, all P1s fixed, active external contributors (AnySearch team). Effective backlog management.
- **CoPaw** — 29 PRs merged, beta release within 24h, critical bugs closed quickly. Strong Chinese-speaking community.
- **IronClaw** — 10 PRs merged, CI improvements, v1.4.0 epic execution. Predictable roadmap.

**Tier 2 — High Activity with Backlog Risk:**
- **OpenClaw** — Massive activity but net-negative closure rate (67 closed vs. 433 open). Risk of triage bottleneck; P0 SQLite corruption unresolved.
- **ZeroClaw** — 50 PRs in review but only 1 merged — deliberate stabilization, but could stagnate without merge decisions.
- **NanoClaw** — Intense integration push; 34 open PRs vs. 16 merged. Converging, but workstream needs consolidation.

**Tier 3 — Steady/Stabilizing:**
- **Hermes Agent** — Responsive fixes, but long-standing UX pain (macOS permissions, 8+ weeks) eroding trust.
- **Moltis** — Steady maintenance; backlog PRs (Coder, Fastmail) risk staleness.
- **NullClaw** — Quiet; architectural proposal may catalyze next phase.

**Tier 4 — Stalling/At-Risk:**
- **PicoClaw** — 2 critical issues stale for 1+ month, 1 fix PR unmerged for 9 days. Community frustration risk.
- **TinyClaw / ZeptoClaw** — Dormant (no activity). Consider archived or in deep stabilization.

---

## 7. Trend Signals

1. **From Chat to Distributed Compute:** Three separate projects (PicoClaw #3345, NanoClaw #3538, NullClaw #994) received proposals for **household edge meshes** in the same week. Users want to leverage idle hardware into a compute grid for AI agents. For developers: expect multi-host orchestration, signed receipts, and lightweight workers to become roadmap staples.

2. **Security Is the New Feature:** Cross-cutting hardening is no longer optional — shell injection via email strings (NanoClaw #3543), skill HTTP egress bounding (ZeroClaw #10369), and persistent sandboxes (IronClaw #7732) show that security is a **differentiator**, not a compliance checkbox. Expect "secure by default" to dominate release notes.

3. **Multi-Agent Reliability Is the Hard Problem:** Agent-to-agent workflows are breaking in production: cron cross-tenant authorization (ZeroClaw #9947), subagent message loss (OpenClaw #67777), background subagent waits (NanoBot #5529). Developers should prioritize **idempotent delivery, cross-agent isolation, and workspace scoping** as first-class architecture, not afterthoughts.

4. **Streaming UX Is Still Unsolved:** Rich messages vs. streaming conflict (NanoBot, Hermes), SSE CPU loops (CoPaw), deferred-tool never-invoked (IronClaw #7892), and streaming corruption in non-English text (Hermes #62774) — a clear pattern of **streaming state machines being under-engineered**. This is a high-impact area for differentiation.

5. **Operational Maturity Gap:** Long-running deployments suffer from unbounded database growth (OpenClaw #114612), zombie processes (OpenClaw #97616), and update fragility (NanoClaw #3529). **Self-maintenance and safe auto-update** are emerging as user demands across projects — a gap that matters for production adoption.

6. **Bottom Line for Developers:** The window for "good enough" assistants is closing. Users are deploying agents for real workloads and **punishing reliability failures** (message loss, crashes, permission resets). Focus on **data durability, graceful degradation, and multi-tenant safety** — these will be the moats of the next generation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**2026-08-26**

---

## 1. Today's Overview

NanoBot is experiencing a significant development surge, with 24 PRs active in the last 24 hours and 14 merged or closed. The project is in a rapid feature-advancement phase covering Telegram channels, TUI/WebUI polish, search/tools infrastructure, session management, and gateway reliability. Bug-fixing velocity is high, with several critical (P1) issues addressed promptly. Community engagement is moderate, with one new-feature proposal (AnySearch) attracting attention. Overall, the project remains healthy, responsive, and actively evolving.

---

## 2. Releases

No new releases were published in the last 24 hours. Current development activity focuses on continuous improvement ahead of the next versioned release.

---

## 3. Project Progress

**Merged/Closed PRs (14 total) — key highlights:**

| PR | Title | Impact |
|---|---|---|
| [#5541](https://github.com/HKUDS/nanobot/pull/5541) | **fix(telegram): attribute group messages to senders** | Fixes #1091; prefixes non-private Telegram messages with sender display name, falling back from first name → username → numeric ID. Adds regression tests. |
| [#5540](https://github.com/HKUDS/nanobot/pull/5540) | **fix(provider): stabilize Codex prompt cache routing** | Propagates stable session identity through provider context; derives OpenAI Codex `prompt_cache_key` exclusively from session identity, omitting it when absent. Improves cache reliability and fallback/image-retry paths. |
| [#5538](https://github.com/HKUDS/nanobot/pull/5538) | **refactor(tui): clarify active composer actions** | Replaces ambiguous "Steer this turn…" hint with explicit `Enter send now · Tab send next` placeholder, preserving both active-response actions. |
| [#5534](https://github.com/HKUDS/nanobot/pull/5534) | **feat(tui): autocomplete skill references** | Adds `$skill-name` picker with arrow navigation, Enter/Tab insertion, Escape dismissal, and caret-aware completion. Loads skills from the gateway. |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | **fix(tools): keep find_files scans responsive** | Runs scans in a worker; replaces pathlib metadata calls with budgeted `os.scandir`; stops path-sorted scans after pagination lookahead; bounds modified-sort retention; propagates cancellation. P1 performance fix. |
| [#5529](https://github.com/HKUDS/nanobot/pull/5529) | **fix(agent): wait for background subagents only at turn exit** | Keeps pending-message drains non-blocking; adds separate terminal rendezvous with 300-second shared deadline for background subagents. |
| [#5530](https://github.com/HKUDS/nanobot/pull/5530) | **style(tui): keep short transcripts and composer top-aligned** | Aligns short transcripts, runtime controls, and composer at top; expands transcript on overflow while preserving sticky scrolling. |
| [#5525](https://github.com/HKUDS/nanobot/pull/5525) | **feat: add demand-driven document retrieval** | Makes `grep` a demand-driven retrieval tool; adds incremental search for PDF/DOCX/XLSX/PPTX with stable locators, bypassing the 200K attachment-preview cap. |
| [#5526](https://github.com/HKUDS/nanobot/pull/5526) | **fix(agent): wait for exec sessions without polling** | Renames tool to `exec_session`; adds `until_exit` + `timeout_ms` controls; migrates legacy `write_stdin` calls. |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | **feat(webui): add drag-and-drop session organization** | Enables drag-and-drop reordering (standalone and in groups); supports creating groups by dragging one session onto another; works with latest pane-based layout. |

---

## 4. Community Hot Topics

| Issue/PR | Comments | Context |
|---|---|---|
| [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505) — **Add AnySearch as web search provider** | 3 | New external team proposing integration — signals growing ecosystem adoption. AnySearch offers API/MCP/Skill integration methods and key-optional anonymous quota. |
| [Issue #5532](https://github.com/HKUDS/nanobot/issues/5532) — **missing import of `mask_session_key` in autocompact.py** | 1 | Runtime crash from `uv` logs during memory-cleanup query. Suggests an import path regression in the agent loop. |
| [Issue #5516](https://github.com/HKUDS/nanobot/issues/5516) — **Telegram rich messages never render with streaming** | 1 | Details that `rich_messages` and `streaming` are mutually exclusive; Bot API 10.1–10.3 drafts proposed as fix. Correlates with PRs #5531 and #5528. |

**Underlying needs:** The community is pushing for (1) more search provider diversity, (2) end-to-end rich message support on Telegram despite streaming, and (3) robustness in session/memory handling.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **P1** | [#4072 related](https://github.com/HKUDS/nanobot/issues/4072) — **ExecTool can escape restricted shell via symlinks/shell expansion** (security) | Fix open | [PR #5536](https://github.com/HKUDS/nanobot/pull/5536) — fails closed when restricted shell lacks a sandbox |
| **P1** | [#5533 related](https://github.com/HKUDS/nanobot/pull/5533) — **find_files scans block agent and degrade performance** | Fix merged | [PR #5533](https://github.com/HKUDS/nanobot/pull/5533) — worker thread + budgeted scan |
| **P2** | [#5532](https://github.com/HKUDS/nanobot/issues/5532) — **missing `mask_session_key` import causes runtime exception in autocompact.py** | Open | None yet |
| **P2** | [#5527](https://github.com/HKUDS/nanobot/issues/5527) — **WebUI sidebar titles stay "Untitled" with unifiedSession** | Fix open | [PR #5528](https://github.com/HKUDS/nanobot/pull/5528) — projects generated titles onto per-chat sessions |

All P1 bugs have either been fixed or have an active PR. No new regressions reported without a fix path.

---

## 6. Feature Requests & Roadmap Signals

| Request | Signal Strength | Prediction |
|---|---|---|
| [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505) — **AnySearch web search provider** | High (external team, 3 comments, clear integration plan) | Likely for next minor release if the team submits the PR promptly. |
| [PR #5534](https://github.com/HKUDS/nanobot/pull/5534) — **TUI `$skill-name` autocomplete** | Merged | Landed into current development cycle. |
| [PR #5525](https://github.com/HKUDS/nanobot/pull/5525) — **Demand-driven document retrieval (PDF/DOCX/XLSX/PPTX)** | Merged | Aims to eliminate attachment-size cap friction — will be a headline feature. |
| [Issue #5524](https://github.com/HKUDS/nanobot/issues/5524) — **WebUI turn-completion notification sound** | New request (0 comments) | Nice-to-have, default-off; plausible for a UI polish release. |

**Roadmap prediction:** The next release will likely emphasize (1) external search provider pluggability, (2) deep document retrieval, and (3) WebUI session organization, aligning with current merged PRs.

---

## 7. User Feedback Summary

- **Pain point — resource cleanup complexity:** [Issue #5532](https://github.com/HKUDS/nanobot/issues/5532) shows a user exercising a complex "delete all resources + memories" command, which triggered a crash — indicates advanced power-user workflows stress-test the agent loop.
- **Pain point — rich Telegram messages vs streaming:** [Issue #5516](https://github.com/HKUDS/nanobot/issues/5516) expresses frustration that opt-in rich messages are effectively disabled by default-streaming. A fix PR ([#5531](https://github.com/HKUDS/nanobot/pull/5531)) upgrades streaming previews to rich in place at stream end.
- **Pain point — unifiedSession UX confusion:** [Issue #5527](https://github.com/HKUDS/nanobot/issues/5527) shows users confused when titles are generated on a session they never see. Fix PR [#5528](https://github.com/HKUDS/nanobot/pull/5528) addresses this directly.
- **Positive signal — community contribution surge:** Two external contributors ([AnySearch team](https://github.com/HKUDS/nanobot/issues/5505), [goodtiding5](https://github.com/HKUDS/nanobot/pull/5234) with mst-python metasearch) are actively building integrations — ecosystem trust is growing.

---

## 8. Backlog Watch

| Item | Age | Status | Why It Matters |
|---|---|---|---|
| [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) — **integrate mst-python as metasearch provider** | 23 days | Open, **P1**, `conflict` label | A metasearch provider using Reciprocal Rank Fusion. Needs maintainer rebase/attention; risk of stale if not reviewed soon. |
| [PR #5152](https://github.com/HKUDS/nanobot/pull/5152) — **fix(subagent): mark partial completion results** | 29 days | Open, `regression`, `conflict` | Addresses subagent result accuracy — older regression fix; likely requires conflict resolution. |
| [PR #5536](https://github.com/HKUDS/nanobot/pull/5536) — **fail closed when restricted shell lacks a sandbox** (sec) | New | Open, **P1** | Security-critical; should be prioritized for review over cosmetic PRs. |

**Maintainer guidance:** Two long-standing PRs ([#5234](https://github.com/HKUDS/nanobot/pull/5234), [#5152](https://github.com/HKUDS/nanobot/pull/5152)) need conflict resolution and review before they go stale. The new security PR [#5536](https://github.com/HKUDS/nanobot/pull/5536) deserves high-priority review given its P1 security implications.

---

*Digest generated from public NanoBot GitHub data on 2026-08-26.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-26

## 1. Today's Overview

High-activity day with 100 issues/PRs updated in the last 24 hours. The project shows a healthy mix of community-driven bug reports (50 issues, 84% open) and developer-submitted fixes (50 PRs, 86% open). No new releases were published today. The backlog shows persistent themes: macOS desktop permission regressions, session-state management across gateway/profile switches, Slack native-streaming concurrency, and MCP client robustness on Windows. A significant architectural proposal (#95028) linking twelve related defects into a single "Authority Execution Layer" refactor, with a companion PR (#95101), suggests the maintainers may be considering a deep architectural change in the coming weeks.

## 2. Releases

No new releases were published in the last 24 hours. The most recent releases referenced in issues are Hermes Desktop v0.20.5 (2026.8.19) and Hermes Agent v0.4.3.

## 3. Project Progress

Eight PRs were merged/closed today. Notable closures include:

- **[#95115] fix(checkpoints): unreadable files no longer disable checkpointing** (closed) — Fixes a critical stability issue where a single unreadable file (e.g. in `/tmp`) would fatally break `git add -A`, silently disabling all checkpointing for that workdir. Authored by semirkabir.
- **Seven issues closed**, including: Windows `hermes update` hang on cua-driver refresh (#87703), Desktop Bot Mode cron regression (#94516), WS-detached session message drop (#90428), Slack concurrent-turn stream clobbering (#93617), Desktop Routines pane crash (#94471), CRONJOBS pane stuck (#94483), and terminal tool line truncation (#16520).

Active PRs advancing features include: **feat(authority)** — manifest schema + compiler + conformance harness (#95101), implementing Phase 0.1–0.3 of the Authority Execution Layer; **fix(desktop)** — per-(connection, profile) state isolation across gateways (#95087), addressing multi-gateway session-state bugs; and **feat(voice)** — realtime provider session contract (#95147).

## 4. Community Hot Topics

The most active issue by far:

- **[#66616] Skills index watchdog: stale/degraded** (97 comments) — An automated freshness probe has been failing since July 18, with the index now 29.8h stale (limit 26h). This is a `sweeper:risk-automation` flagged issue affecting the Skills Hub documentation. The high comment count suggests ongoing but unresolved noise or investigation.

Other active discussions:

- **[#52010] macOS Full Disk Access revoked after every update** (21 comments) — Users are frustrated by a recurring permission revocation that requires manual re-granting after each Desktop update. This is a long-standing issue (since June 24) with no clear fix in flight.
- **[#95003] xAI rejects requests: function name `tool_search` is reserved** (9 comments, 8 👍) — A provider-specific incompatibility where xAI's API rejects Hermes' tool-search function name, making Grok providers unusable. High reaction count suggests this affects many users.
- **[#95028] "Hermes Authority Execution Layer — the twelve issues are one defect"** (9 comments) — A comprehensive architecture proposal from andrexibiza arguing that multiple recurring session/authority bugs share a single root cause. This is a strong signal from an engaged community member.
- **[#87697] Hermes cancels local LLM streams after ~1.5s (Ollama)** (11 comments) — Client-side cancellation bug breaking local Ollama backends.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **P1** | [#94906] Windows stdio MCP: every tool call fails ("subprocess has exited") | P1, 3 comments, marked duplicate | [#95144] Inverted liveness check fix (open) |
| **P2** | [#95003] xAI rejects `tool_search` — Grok unusable | Provider incompatibility, 8 👍 | None yet |
| **P2** | [#87697] Client cancels Ollama streams after ~1.5s | Local LLM streaming broken, needs-repro | None |
| **P2** | [#91115] macOS keychain prompt every launch (safeStorage rotation) | Post-update re-prompt, Electron code-signing issue | None |
| **P2** | [#52010] macOS FDA revoked every update | Long-standing (since June), 21 comments | None |
| **P2** | [#95078] Nested Hermes inherits stale `TERMINAL_CWD` | Wrong working directory for subprocesses | None |
| **P2** | [#94859] Multiple stdio MCP servers fail after gateway restart | Intermittent early-startup failures | None |
| **P2** | [#95054] Ollama fallback entries resolve to (None, None) silently | Redundancy silently non-existent | None |
| **P2** | [#93937] Gateway switcher leaks session ID → "session not found" | Dup of #79005 family | [#95087] fix(desktop) state isolation (open) |
| **P3** | [#94435] Slack appends to sealed stream → duplicate messages | Native streaming state bug | [#95142] link-preview suppression (open, adjacent) |

Also today: **[#95149] Python 3.14 breakage**: `DaemonThreadPoolExecutor` worker signature changed, breaking all tool calls — fix submitted as PR and open.

## 6. Feature Requests & Roadmap Signals

Strong signals for near-term roadmap:

- **Authority Execution Layer** ([#95028] + PR [#95101]) — A thorough architectural proposal to unify session-state, profile, and boundary security into a single manifest/compiler system. The companion PR is "intentionally incomplete" (Phase 0.1–0.3), suggesting maintainers may already be driving this.
- **Voice provider contract** ([#95147] PR) — Adds provider-neutral `RealtimeVoiceProvider` ABCs, the "smallest core seam" for persistent bidirectional voice from #77111. Likely a precursor to WebRTC voice plugins.
- **Adaptive explanation policy** ([#93382], 3 comments) — Proposes dynamic explanation policies for interactive learning artifacts, tied to open proposals (#7191, #61095, #74334). Needs-decision, could see traction with the `annotate_screen` HUD feature.
- **Portuguese (pt-BR) Desktop support** ([#40239], 3 👍) — Community wants full i18n; two related bugs (#26665 language reset, #62774 accented-text streaming) continue to block this.
- **Verified local cold archive** ([#91005]) — For soft-archived sessions; design for durable archival without losing search.
- **`annotate_screen` HUD tool** ([#94350] PR and [#93382]) — Agent draws on the user's screen; community interest in HUD/interactive modes.
- **Slack link-preview suppression** ([#95142] PR) — Community fix being shepherded in, covering both native and relay planes.

## 7. User Feedback Summary

**Recurring pain points:**

- **macOS permission fatigue**: Two separate issues (#52010 FDA, #91115 keychain) describe the same pattern — every Desktop update forces users to re-grant system permissions. This is a top frustration (21 comments, 8 weeks open) and reflects poorly on a "set-and-forget" desktop tool.
- **Provider fragmentation**: Ollama (2 issues), xAI (1), and MCP-on-Windows (1) failures create a "works on my machine" feel for self-hosters. Users are explicitly configuring fallback chains and their redundancy is silently not working (#95054).
- **Streaming text corruption**: [#62774] Portuguese accented text is severely truncated during streaming — plain ASCII between accents also eaten. For non-English users this makes the desktop app nearly unusable.
- **Session-state dropping**: [#90428] (closed), [#93937] (open), [#79005] (open) — users report messages silently dropped or "session not found" after reconnect/profile switch. Affects trust in reliability.

**Positive signals:**

- **Quick fix cycles**: Issues like [#16520] (line truncation) and [#94471] (Routines pane crash) were reported and closed within days, indicating a responsive maintainer team.
- **Community contributors**: Multiple one-off contributors (RelaxJonh, CyberBrown, tlakepresident, semirkabir, etc.) submitted surgical fixes today, suggesting a healthy contributor onboarding path.

## 8. Backlog Watch

Long-unanswered or at-risk issues needing maintainer attention:

- **[#52010] macOS Full Disk Access revoked after every update** — Open since June 24 (8+ weeks), 21 comments, no fix PR. This is arguably the single most damaging UX bug to desktop adoption on macOS.
- **[#66616] Skills index watchdog stale/degraded** — 97 comments, open since July 18, still unresolved. The automated probe keeps failing; requires human intervention or process fix.
- **[#26665] Desktop language setting resets to English** — Open since May 16 (14+ weeks), 4 comments, still reproducible on v0.4.3. Related to the stalled pt-BR support (#40239).
- **[#45777] feat(memory): regex 'patch' action** — PR open since June 13, flagged `sweeper:blast-massive`. Large blast radius but valuable; needs maintainer review decision.
- **[#76552] feat(skills): task-scoped disabled-skill grants** — Open since Aug 2, multi-sweeper flags (security-boundary, compatibility, blast-moderate). Security-sensitive; needs careful maintainer scrutiny.
- **[#87671] Kanban stop-nudge misfires; child escapes via env-marker bypass (7 prod incidents)** — Open since Aug 16, P3, but the bypass demonstrates a real security hole in delegation. Flagged `risk-session-state`; should be escalated.
- **[#64322] Tool loop guardrail hard-stop requires manual prompt** — Open since July 14, P3; models cannot recover from guardrail halts. Usability concern for long-running agents.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-26

## 1. Today's Overview

PicoClaw shows moderate activity over the past 24 hours, with 4 open issues and 1 open PR being updated—none of which were closed or merged. The project is in a "steady but slow" phase: no new releases were published, and no code was merged. However, the activity that did occur is meaningful: a new feature proposal (#3345) was filed, addressing an important use case for edge compute devices, and the Slack media upload fix (#3340) continues to move forward. The open issue count remains stable, with three issues flagged as stale, suggesting potential maintainer bandwidth constraints. Overall, the project health appears stable, with active community engagement on a handful of technical topics.

## 2. Releases

No new releases were published in the last 24 hours. The most recent stable version remains **PicoClaw 0.3.1**, with a nightly channel available for early adopters.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The only open PR, **#3340: fix(slack): set FileSize on media upload params** ([link](https://github.com/sipeed/picoclaw/pull/3340)), remains open and stale. This PR addresses the Slack media upload bug (#3338) by setting the `FileSize` field on upload parameters—a critical fix that unblocks all Slack image-sharing functionality. The PR has not received maintainer attention beyond the original author's submission, which is concerning given the directness of the fix.

## 4. Community Hot Topics

The most active discussions this cycle center on two issues, both with 7 comments:

- **#3281: Web UI chat input is very laggy with long history** ([link](https://github.com/sipeed/picoclaw/issues/3281)) — This issue has been open for over a month and continues to receive attention. Users report significant input lag in the Web UI as chat history grows, which is a core UX concern. The single 👍 reaction suggests moderate impact, but the persistence of the issue indicates it's a known pain point.

- **#3269: MCP server connection failure causes agent loop to hang** ([link](https://github.com/sipeed/picoclaw/issues/3269)) — Also open for over a month, this describes a critical failure mode: when an MCP server connection fails, the entire agent loop hangs and the chat interface stops responding. This is a reliability issue that affects production usage, highlighted by the use of Qwen3 and nightly builds.

The underlying need across these threads is clear: **users want PicoClaw to be more resilient and responsive**—both in UI interaction and in handling external service failures gracefully.

## 5. Bugs & Stability

Ranked by severity:

1. **Critical: Agent loop hang on MCP server failure** (#3269, [link](https://github.com/sipeed/picoclaw/issues/3269)) — When MCP connection fails, the entire agent loop hangs, making the chat interface unresponsive. This is a show-stopper for production use cases involving MCP servers. **No fix PR exists.**

2. **High: Web UI input lag with long history** (#3281, [link](https://github.com/sipeed/picoclaw/issues/3281)) — Input becomes laggy when chat history grows, degrading the core user experience. Likely a frontend rendering/performance issue. **No fix PR exists.**

3. **Medium: Slack media uploads always fail** (#3338, [link](https://github.com/sipeed/picoclaw/issues/3338)) — Slack image sharing is completely broken due to a zero-value `FileSize` parameter. The fix is straightforward and documented in PR **#3340** ([link](https://github.com/sipeed/picoclaw/pull/3340)), but remains unmerged.

## 6. Feature Requests & Roadmap Signals

A new feature proposal was filed today:

- **#3345: Lightweight PicoClaw worker mode for household edge compute** ([link](https://github.com/sipeed/picoclaw/issues/3345)) — Proposed by kvnloo, this requests a lightweight deployment mode that runs on low-cost RISC-V/ARM/MIPS boards, Raspberry Pis, and old Android phones with only 10–20 MB available memory. The premise is to use a stronger PC as the main agent while distributing worker roles across household edge devices. This is an architecturally significant proposal that aligns with PicoClaw's embedded roots and could shape the v0.4 roadmap.

There is no signal yet on whether this proposal will be adopted, but it's a strong candidate for inclusion in a future minor version—especially given PicoClaw's focus on low-end hardware.

## 7. User Feedback Summary

Real user pain points from this cycle include:

- **UI responsiveness matters**: Users are frustrated by lag in the Web UI as sessions grow long (#3281). This suggests the current approach to history management is not scaling well for conversational use.
- **External service failures must not be fatal**: The MCP hang (#3269) shows users depend on MCP server connectivity, and failures should be handled with timeouts/retries rather than deadlock.
- **Channel integrations are expected to "just work"**: The Slack upload failure (#3338) demonstrates that basic media sharing in Slack is broken—a blocker for team use cases.

No positive feedback was captured in this cycle, but the relatively low comment count overall suggests the community is engaged but not experiencing a crisis—with the exception of the two month-old critical issues that remain unresolved.

## 8. Backlog Watch

Three issues are flagged as stale and require maintainer attention:

- **#3281: Web UI lag** ([link](https://github.com/sipeed/picoclaw/issues/3281)) — Open since 2026-07-21, last updated 2026-08-25. Now stale. Needs a maintainer response or assignment.
- **#3269: MCP hang** ([link](https://github.com/sipeed/picoclaw/issues/3269)) — Open since 2026-07-20, last updated 2026-08-25. Now stale. This is a critical reliability bug that must be triaged.
- **#3340: Slack fix PR** ([link](https://github.com/sipeed/picoclaw/pull/3340)) — Open since 2026-08-17, last updated 2026-08-25. This PR has a clear, minimal fix for a known bug, yet has received no maintainer feedback. It's at risk of becoming a stale PR and the fix going unmerged.

**Recommendation**: Prioritize reviewing the Slack fix PR (#3340) as it's small, well-documented, and directly resolves a user-facing bug. Additionally, explicitly triage the two stale critical issues (#3281, #3269) to prevent community frustration from unacknowledged problems.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-26

## Today's Overview

NanoClaw is in a period of intense integration and hardening. The project shows **exceptionally high activity** with 50 PRs updated in the last 24 hours, dominated by a coordinated push from the core team to consolidate duplicated logic, fix security-sensitive shell handling, and introduce structured protocols for setup and health reporting. While **16 PRs were merged or closed**, a significant batch of 34 remain open, suggesting a large in-flight workstream. The issue tracker is comparatively quiet with 5 open issues, but they reveal consistent concerns around skill scoping, update reliability, and shell injection safety. **No new releases** were published today, indicating the project is in a stabilization phase between version tags.

---

## Releases

**No new releases** were published in the last 24 hours. The last release remains the previous tag; the high volume of merged PRs (16) suggests a substantial release may be imminent once the open integration branches converge.

---

## Project Progress

Today's merged/closed activity shows **core-team consolidation and targeted fixes**, not new feature work:

- **[PR #3536 — fix(compose): inline every instruction source into one project document](https://github.com/nanocoai/nanoclaw/pull/3536)** — *Merged.* Fixes a critical break where Claude Code's security gate blocked `@` imports resolving outside the working directory, which completely disabled capability instructions for agents. Now all instructions are inlined into a single project document.
- **[PR #3539 / #3537 — refactor(codex): keep the spec, drop the duplicated composer](https://github.com/nanocoai/nanoclaw/pull/3539)** — *Merged (two attempts).* Removes Codex's duplicate project-composition logic, using trunk's shared composer instead, eliminating drift between the two implementations.
- **[PR #3540 — fix(opencode): run the agent session in the agent workspace](https://github.com/nanocoai/nanoclaw/pull/3540)** — *Merged.* OpenCode agents previously inherited the runner's cwd (a sibling of their workspace), so their project-document walk could never resolve. Now they run in their own workspace.
- **[PR #3544 — fix(slack): add explicit room handoffs](https://github.com/nanocoai/nanoclaw/pull/3544)** — *Closed.* Adds explicit Slack room handoff tool with host-side mention resolution and validation; a duplicate of #3545 which remains open (likely superseded).
- **[PR #2656 — fix(add-mnemon): run mnemon setup in index.ts main(), not entrypoint.sh](https://github.com/nanocoai/nanoclaw/pull/2656)** — *CLOSED (merged).* Resolves an older bug where the host's ENTRYPOINT override prevented mnemon hooks from registering.

**Key theme:** The core team is actively **de-duplicating logic and fixing workspace-directory bugs** that silently broke agent functionality.

---

## Community Hot Topics

The most active PR (by recency/attention) is:

- **[PR #3528 — feat(runner): lease-id claimants, restart-overlap protection, and the incarnation gate](https://github.com/nanocoai/nanoclaw/pull/3528)** — *Open, core-team.* A substantial runner robustness PR stacking on three sibling lines (#3513, #3520/#3521, #3522) with base integration branch proven healthy at **425/425 tests**. This suggests the "durable host integration" is the primary engineering focus: preventing overlapping restarts and giving processes stable identity (lease IDs).

Community-submitted PRs (non-core-team) continue to target the **setup wizard and CLI UX**:

- **[PR #3452 — fix(update): give captured update commands a real output buffer](https://github.com/nanocoai/nanoclaw/pull/3452)** — *Open.* Addresses update commands losing output; a user-driven fix.
- **[PR #2431 — Conditional thread policy for Slack adapter (DM=top-level, channels=threaded)](https://github.com/nanocoai/nanoclaw/pull/2431)** — *Open since May 2026.* Community-requested Slack ergonomics improvement; still awaiting merge after three months.

**Underlying need:** Users want **more control and reliability in the operational layer** — from Slack message routing to ensuring updates don't hang.

---

## Bugs & Stability

Issues filed today reveal **security-critical shell handling and update-reliability** problems, ranked by severity:

1. **Critical — Shell injection via email in dial skills.** **[Issue #3543](https://github.com/nanocoai/nanoclaw/issues/3543)** — `{{owner_email}}` reaches `bash -c` **unquoted** in both dial skills, so apostrophes break sign-in and shell metacharacters pass validation. This is an injection vector. **No fix PR identified yet**; however, a related PR [#3525 "Fix the blind agent-scope prompt"](https://github.com/nanocoai/nanoclaw/pull/3525) (community) attempts to fix a related validation echo bug.
2. **High — Update routine breaks local adapters or overwrites them with no opt-out.** **[Issue #3529](https://github.com/nanocoai/nanoclaw/issues/3529)** — The update's skill refresh misidentifies user local channel imports as skills, blocking updates or clobbering user work. **No fix PR today**, though PR #3452 (output buffer) indirectly targets update reliability.
3. **High — `add-vercel` blocks spawn-time symlink sync.** **[Issue #3535](https://github.com/nanocoai/nanoclaw/issues/3535)** — Per-session skill copies (via rsync) pin groups to stale skills and block the intended symlink sync. **No fix PR yet.**
4. **Medium — Per-agent tool scoping misses later-created agents.** **[Issue #3532](https://github.com/nanocoai/nanoclaw/issues/3532)** — New agent groups get tools by default when the scoping was set earlier. **No fix PR yet.**
5. **Medium — `add-dial-tool` scoping incomplete** — same root cause as #3532; worth merging into one fix effort.

**Stability PRs in flight:** PR #3542 (container status drift at startup), PR #3483 (hardened uninstall), PR #3528 (restart-overlap protection) all directly address stability, though only #3542 is from a non-core contributor.

---

## Feature Requests & Roadmap Signals

Two significant roadmap signals emerged today:

1. **[Issue #3538 — Proposal: use isolated NanoClaw containers as opt-in household edge workers](https://github.com/nanocoai/nanoclaw/issues/3538)** — A user proposes extending NanoClaw's container model to run on idle home PCs, laptops, NAS boxes, or home servers instead of buying GPUs. This is a **distributed/edge-computing direction**—a major architectural signal. Given the current activity on "durable host integration" (#3528), this could be the next logical extension.
2. **[PR #3487 — feat(setup): accept a client timezone preseed (--tz)](https://github.com/nanocoai/nanoclaw/pull/3487)** — Alongside #3485 (structured setup driver protocol `nanoclaw.driver.v1`) and #3486 (catalog preseed), this PR family points to **headless/driver-based installation**—a strong signal for programmatic deployment and testing of NanoClaw.

**Prediction:** The setup driver protocol (nanoclaw.driver.v1) and structured host health (#3482) are likely to be **in the next release**, as they enable external management and automated QA; the edge-worker proposal is a longer-term roadmap candidate.

---

## User Feedback Summary

- **Pain point: Security of shell interpolation.** Users are constructing emails and pasting secrets, and both the setup wizard (PR #3484 — "keep pasted auth secrets out of argv") and dial skills (#3543) show that **NanoClaw currently handles secrets and user input carelessly on the command line**. Users are directly affected by API-key leaks via argv and by email-shell breakage.
- **Pain point: Update mechanism is fragile.** Issue #3529 explicitly states "local adapters fail validation **or get overwritten**, no opt-out" — a user's own adapter effectively blocks or breaks their update. This is a trust issue: **users feel they cannot safely auto-update**.
- **Pain point: Scoping tools to agents is not durable.** #3532 and #3535 both demonstrate that **tool/agent scoping isn't sticky** — it breaks the moment a new agent or session appears.
- **Positive: Community is engaged and capable.** Non-core-team contributors are submitting **thorough, guideline-compliant fixes** (#3452, #3542, #3525, #2431), indicating a healthy contributor funnel.
- **Satisfaction:** The rapid core-team fix of the Claude Code import-block issue (#3536, merged today) shows **good responsiveness to breaking upstream changes** — a positive signal.

---

## Backlog Watch

These items need maintainer attention:

1. **[PR #2431 — Slack conditional thread policy (DM=top-level, channels=threaded)](https://github.com/nanocoai/nanoclaw/pull/2431)** — *Open since May 12 (3+ months), 0 comments, 0 reactions.* A well-specified community feature that has been waiting over a quarter. It was updated on 2026-08-25, suggesting the author is still maintaining it. A decision (merge/reject/close) is overdue to avoid discouraging the contributor.
2. **[Issue #3538 — Edge workers proposal](https://github.com/nanocoai/nanoclaw/issues/3538)** — *New today, 0 comments.* The maintainer should respond with a roadmap position; it touches on multi-host deployment which intersects with the in-flight durable-host work.
3. **[Issue #3529 — update-nanoclaw local adapter destruction](https://github.com/nanocoai/nanoclaw/issues/3529)** — *Today, 0 comments.* This blocks user upgrades; it should be prioritized or explicitly de-scoped with a workaround.
4. **[PR #3452 — update output buffer](https://github.com/nanocoai/nanoclaw/pull/3452)** — *Open since Aug 22, has review comments;* if accepted, it partially relieves #3529.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-26

## 1. Today's Overview

NullClaw is in a **quiet but healthy maintenance state** as of 2026-08-26. The project saw minimal activity over the past 24 hours, with just **1 open issue** updated and **0 pull requests** merged or closed. No new releases were published, suggesting the team is likely in a stabilization or development sprint phase rather than a release cycle. The single issue posted today is a substantial architectural proposal for a household edge mesh, indicating that community members are actively thinking about advanced production use cases. Overall, the project appears stable, with low churn and no signs of critical regressions or urgent maintenance demands.

## 2. Releases

**No new releases** were published in the last 24 hours. The last release cycle appears to be dormant at this time. We will report on any version changes, breaking updates, or migration notes as soon as they appear.

## 3. Project Progress

**No pull requests** were merged, closed, or even updated in the last 24 hours. As such, there are no confirmed feature completions or bug fixes to report for this digest period. The project's momentum this week appears to be concentrated on design discussions and architectural proposals (see below) rather than code churn.

## 4. Community Hot Topics

**[Issue #994 — Household edge mesh using RuntimeAdapter workers and signed receipts](https://github.com/nullclaw/nullclaw/issues/994)**
- **Author:** kvnloo | **Created:** 2026-08-25 | **Updated:** 2026-08-25
- **Comments:** 0 | **Reactions:** 0

This is the **only active discussion** and the **single most significant signal** in the project today. The issue proposes leveraging NullClaw's unique foundational primitives — including the tiny **Zig runtime**, `RuntimeAdapter` and `Peripheral` vtables, Docker/WASM adapters, hardware discovery, tunnels, channels, and tools — to build a **household edge mesh**. The underlying need here is clear: users see NullClaw's architecture as uniquely positioned to turn idle personal computers into a decentralized, secure home compute grid. The mention of **signed receipts** indicates a desire for verifiable, tamper-evident computation across trust boundaries. While there are no comments yet, this issue represents a serious architectural vision from a community member who understands the project deeply, and it deserves maintainer attention as a potential **flagship use case** for the project.

## 5. Bugs & Stability

**No bugs, crashes, or regressions** were reported in the last 24 hours. The project appears stable with no open stability concerns surfacing in this digest window. Given the low activity level, this could indicate a mature and robust codebase, or simply a lull in community testing.

## 6. Feature Requests & Roadmap Signals

The only feature-adjacent signal today comes from **[Issue #994](https://github.com/nullclaw/nullclaw/issues/994)**, which effectively proposes a **major new product use case**: the **household edge mesh**. This is not a small feature request; it is an architectural blueprint that would leverage many existing components (RT runtime, adapter system, hardware discovery, channels) in a new orchestration layer.

**Prediction for next version:** If the maintainers embrace this direction, the next release could include early scaffolding for **multi-node orchestration**, **signed receipt verification primitives**, or enhanced **adapter-to-adapter trust mechanisms**. If not directly adopted, the issue may still catalyze smaller enhancements — such as improved inter-adapter communication or security features — that would benefit the mesh scenario. Given the author's focused and technically grounded proposal, there is a reasonable chance this becomes a roadmap item.

## 7. User Feedback Summary

While quantitative feedback (reactions, comments) is absent today, the **qualitative signal** from Issue #994 is highly informative:

- **Perceived Strengths:** The author explicitly praises NullClaw's "unusually good primitives," specifically calling out the tiny Zig runtime, flexible vtables, and multi-adapter support. This indicates satisfaction with the **technical architecture** and **core abstractions**.
- **Use Case Direction:** Users are looking to deploy NullClaw **outside the local single-device** context, moving toward **distributed, multi-tenant household infrastructures**. This suggests growing trust in the project's reliability for long-running, unattended operations.
- **Latent Pain Point:** The absence of a built-in mesh/receipt system implies that users currently **must build trust mechanisms and cross-device orchestration themselves**. The community may be craving more **batteries-included** support for distributed scenarios.

Overall, sentiment appears positive and construction-minded, with users viewing NullClaw as a strong foundation for ambitious projects rather than a source of frustration.

## 8. Backlog Watch

**No long-unanswered critical issues or stale PRs** were identified in the current data window. The project's backlog appears manageable, with no items visibly awaiting maintainer response for extended periods.

**Actionable recommendation for maintainers:** While there is no overdue item, **Issue #994** deserves a proactive response within the coming days. An initial reaction — even a comment acknowledging the architectural direction or outlining feasibility concerns — would signal strong community stewardship and potentially convert a lone proposal into a collaborative design thread.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-26

## 1. Today's Overview

IronClaw is in a period of high-intensity development, with 37 issues and 24 PRs updated in the last 24 hours, reflecting a sustained focus on hardening core infrastructure, shipping the WebUI design system, and expanding notification capabilities. Activity skews heavily toward engineering and UX polish rather than new feature exploration: the highest-traffic threads concern agent-loop performance bugs, extension capability payload bloat, and CI pipeline consolidation. Notably, 10 PRs were merged or closed, several of which complete multi-slice efforts in CI expediting and background subagents, indicating strong execution velocity. The project appears healthy and well-maintained, with a predictable roadmap cadence (v1.4.0 epic work is prominent) and an active contributor community including first-time contributors submitting security and UX improvements.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release context is absent, though the v1.4.0 epic milestone is actively receiving scoped work items.

## 3. Project Progress

Ten PRs were closed or merged in the last 24 hours, signaling meaningful advancement:

- **CI Pipeline Convergence (T2/T3):** PR #7817 (merged, closes #7799) replaces sequential per-binary test loops with cargo-nextest, providing per-test JUnit failure roll-up, full-failure signal, and modest PR unthrottle. PR #7819 (merged, closes #7800) converges PR/queue checks — adding planner drift guards and default-features clippy on PRs, killing three "queue-only failure" classes. PR #7820 (measurement-gated probe) evaluated scope-isolation suite consolidation, and PR #7809 established a canonical preflight gate list with worktree-safe hooks and self-printing REPRO.
- **CI Checkout Optimization:** PR #7894 (merged) reduces transfer in required-check scope jobs via partial-clone filters and depth-1 checkouts for the Tests (Reborn) workflow.
- **Notifications Inbox Completion:** PR #7846 (merged) removes the legacy `threads?needs_approval=true` fallback, making the durable inbox the exclusive source for notification rows, unread counts, and read state.
- **Background Subagents (Slices 2b+2c):** PR #7818 (merged) implements the producer half of background subagents, including receipt spawning, per-child delivery, activation, and healing sweeps, with an explicit deployment gate noted.
- **Extension Device-Link Fix:** PR #7861 (merged) restores device-link guidance on install/activate paths, fixing the agent's self-reported "no available tool" failure when users attempt to pair personal Telegram accounts.
- **OOBE Suggestion Drawer:** PR #7816 (merged) adds refresh and connect entries to the OOBE suggestion drawer, closing two gaps in the connect → suggest → thread flow.

## 4. Community Hot Topics

The most active threads reveal deep operational concerns regarding agent reliability and UX governance:

- **Epic: Persistent per-user sandbox (#7732, 9 comments)** — Despite being created a week ago, this epic on replacing ephemeral per-command Docker containers with a persistent per-user sandbox remains the most-discussed item. The community is clearly invested in eliminating container spin-up overhead and retaining state across sessions, with follow-through planned for v1.4.0.
- **CI Expedite T2 (#7799, closed, 4 comments)** — The nextest pipeline work generated enough discussion to warrant four comments, driven by the need to reduce CI wall clock and introduce full-failure signals. Its closure with PR #7817 confirms community pressure translated into shipping.
- **Design System Phase 1 (#7038, closed, 3 comments)** — The storybook integration and catalog epic generated discussion around governance and re-scoping, ultimately splitting into Phases 2–3 (#7781) and Phases 4–5 (#7782).
- **Device link failure with generic error (#7862, 3 comments)** — A user-facing bug with a vague error message sparked triage interest, linked to unconfigured Telegram API credentials.
- **The silent majority:** Most other threads have 0–2 comments, suggesting the project's issue tracker is well-partitioned into owned epics with clear owners. Comments are concentrated where cross-cutting concerns require coordination.

## 5. Bugs & Stability

Three bugs reported in the last 24 hours stand out, all with medium risk or higher:

- **Agent-loop deferred tool 15× never invoked (#7892, risk: medium, no fix yet)** — Three runs burned 79s, 86s, and 123s repeating tool calls without any terminating guard. The model issued 31 capability calls with only 4 distinct argument pairs and searched for `google-calendar.list_events` 15 times. This suggests an agent-loop exit-condition bug where deferred tools are never invoked and no sentinel triggers a fail-closed path. This is the most severe reliability issue reported today.
- **Extension capability payload bloat (#7891, risk: medium, fix PR open: #7896)** — Two Gmail calls (274ms and 290ms) resulted in a 19.7-second turn, with 19.2s spent on inference because 49,152 bytes of raw MIME headers were injected into the prompt unasked. The fix PR #7896 (bound model-visible previews, 4 KiB projection) is already open and addresses the root cause directly.
- **Logs hanging indefinitely (#7888)** — Users on two separate instances report that fetching logs never completes. This is a high-visibility operational issue; no PR is linked yet, and it needs maintainer triage.
- **Device-link generic failure (#7862, 3 comments)** — Low severity but poor UX; the generic "Something went wrong while linking" message obscures unconfigured `telegram_api_id/api_hash`. No dedicated fix PR yet; #7861 fixed the adjacent guidance path.

## 6. Feature Requests & Roadmap Signals

New feature requests cluster around three themes:

- **Slack as a primary surface (#7871 epic):** The proposal for a "Slack-to-console bridge + rich interactive Slack UX" signals user demand for Slack to evolve beyond thin chat transport into a durable control surface. Combined with the still-open Slack channel-routed agents epic (#4625), Slack integration is a clear roadmap priority for a future channel release.
- **Persistent automation memory (#7893):** The `ironclaw.memory.automation_lessons_set` proposal would inject per-automation operational lessons at fire time, addressing the "every run starts from zero" pain point. This aligns with the broader sandbox persistence epic (#7732).
- **Voice-to-text in the WebUI composer (#7867):** A straightforward UX gap — Slack and Telegram already support voice; the web UI doesn't. The ticket notes the blocker isn't model tier, which lowers implementation risk.
- **Personality editing in Settings (#7895):** Users report difficulty configuring agent.md; a dedicated Settings editor would lower friction for non-technical users.
- **Remote edge workers RFC (#7889):** An operator-facing request to extend the scheduler/orchestrator beyond single-host worker pools. This is a design-heavy RFC that likely requires discussion and planning before implementation.
- **Design system long tail:** Numerous small UX tickets (e.g., #7880 loading shell, #7879 shared controls, #7878 legacy panel replacement, #7890 tailwind alias removal) indicate a sustained effort to standardize the WebUI.

Likely next-version candidates: Slack bridge epic, voice-to-text, personality editor, and memory lessons all have visible user demand and moderate complexity, making them probable for v1.4.x or v1.5.0.

## 7. User Feedback Summary

Direct user feedback is limited in this window, but several signals emerge:

- **Frustration with setup friction:** The request for a personality editor (#7895) quotes a user's "me trying to set up personality with ironclaw," coupled with the device-link guidance gap (#7887, #7862), points to onboarding and configuration as the weakest UX area.
- **Critical agent-loop reliability concerns:** The stuck-thread runs (#7892) and repeated tool lookup failures would likely surface as user complaints about wasted time and unpredictable behavior; addressing this is the highest-impact stability win.
- **Positive CI trajectory:** The CI expediting work (T2/T3) is internal-facing but indirectly improves developer experience by cutting wall clock and providing full-failure signals.
- **Notification center maturity:** The shift to a durable inbox (closing #7687, #7706) and the ensuing expansion across run-bound events (#7872–#7876) suggests the team is proactively addressing user feedback about missing or transient notifications.

Overall sentiment appears cautiously optimistic: the project is shipping core reliability and UX improvements at a visible pace, but agent-loop escape bugs and setup friction remain user-facing pain points.

## 8. Backlog Watch

Several items warrant maintainer attention:

- **Issue #4625 — Slack channel-routed personal and team agents (open since 2026-06-09, 1 comment):** The long-running epic for channel-first Slack interaction is active in the roadmap but has not seen commits in several weeks; the newer #7871 epic suggests renewed intent, but #4625 deserves explicit status updates to avoid staleness.
- **PR #7491 — omp core-tool contract + engines (open since 2026-08-11, XL):** A substantial engineering PR consolidating six coding-tool surfaces, with no recent comments or reviews. Its static state for two weeks suggests it may be blocked on review capacity or design validation.
- **Issue #7888 — Logs hanging indefinitely:** No linked fix or assignee; this is a production-halting symptom that should be escalated.
- **Issue #7892 — Agent-loop deferred tool bug:** No fix PR yet; severity is medium but user-visible run waste is high. Directly addresses agent reliability and warrants prioritized effort.
- **No-recent-review PRs:** Several UX-focus PRs from italic-jinxin (#7877, #7881, #7882, #7883) and a first-time contributor PR (#7886, OpenSSF Scorecard) are open and could benefit from prompt review to keep momentum and avoid contributor abandonment.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-26

## 1. Today's Overview

LobsterAI shows strong development velocity with 11 PRs updated in the last 24 hours, 9 of which were merged or closed, plus 2 new releases (2026.8.25 and 2026.8.21) shipped within 4 days. The team is heavily focused on the **Library/Artifacts** module, with major work on cross-platform thumbnails, lifecycle management, and preview UX, alongside analytics instrumentation for the repository ("资料库") feature. The sidecar "dsh" component received dependency updates and usage analytics. Community activity is moderate — one user issue about WeChat group capacity surfaced, signaling growing user demand for community support channels. Overall, the project is healthy and actively iterating toward a more polished and instrumented product.

## 2. Releases

**LobsterAI 2026.8.25** (released 2026-08-25) — [View Release](https://github.com/netease-youdao/LobsterAI/releases)
Key changes included:
- **feat: library** — foundational library feature enablement (PR #2513)
- **feat(library): 增强跨平台缩略图与本地产物生命周期** — enhanced cross-platform thumbnails and local artifact lifecycle management (PR #2524)
- **feat(library): 优化本地产物预览与操作体验** — improved local artifact preview and interaction experience (PR #2513, part of the batch)

**LobsterAI 2026.8.21** (released 2026-08-21) — [View Release](https://github.com/netease-youdao/LobsterAI/releases)
Key changes included:
- **feat(dsh): add usage analytics for enable toggle and workbench open** — added analytics for feature toggles and workbench usage (PR #2515)
- **feat: update dsh to 0.1.1-rc.1** — sidecar component version bump (PR #2516)
- **refactor(dsh): move usage an...** — refactored usage analytics placement (truncated in source)

**Migration Note:** No breaking changes or migration steps were reported in either release; these are incremental feature and enhancement releases.

## 3. Project Progress

Nine PRs were merged or closed in the last 24 hours. The most significant contributions:

- **[PR #2535](https://github.com/netease-youdao/LobsterAI/pull/2535)** — `feat(settings): add plan model catalog` (renderer): Adds a plan model catalog to settings; complements PR #2530 which adds pricing catalog tabs and model cards.
- **[PR #2534](https://github.com/netease-youdao/LobsterAI/pull/2534)** — `Release/2026.8.20`: Release branch merge spanning renderer, docs, main, cowork, im, and artifacts areas.
- **[PR #2533](https://github.com/netease-youdao/LobsterAI/pull/2533)** — `fix(artifacts): 区分网页与本地服务的预览展示`: Separates HTML pages and local services into distinct preview types with appropriate icons (code icon for HTML, globe for local services), adds HTM file icon mappings, and updates design docs.
- **[PR #2532](https://github.com/netease-youdao/LobsterAI/pull/2532)** — `fix(sidebar): fade out login promo tip`: Promotion tips now fade after 5 seconds; timers cleaned when auth state changes — a UX polish item.
- **[PR #2531](https://github.com/netease-youdao/LobsterAI/pull/2531)** — `fix(library): 修复本地产物后台刷新闪烁`: Major fix for background refresh flicker in the library. Implements state splitting (first-load vs background vs pagination), batched ID-specific queries, in-place merging of added/changed/stale items, and preserves filter/page/scroll state.
- **[PR #2530](https://github.com/netease-youdao/LobsterAI/pull/2530)** — `feat(settings): add plan model catalog`: Adds a pricing catalog tab above custom model settings, loads text/image/video model data, and renders categorized cards with sticky headers.
- **[PR #2529](https://github.com/netease-youdao/LobsterAI/pull/2529)** — `feat(analytics): 完善资料库埋点与发布转化归因`: Comprehensive analytics for the library: exposure, filter, search, preview, favorite, refresh events; privacy-safe bucketed search metrics; 7-day attribution for publish CTA → paid subscription; retry logic for failed reports; removed standalone website entry, funneled management into library.

Dependency bumps from Dependabot (`actions/stale`, `actions/first-interaction`, and an Electron group update) were closed as stale, indicating good CI hygiene.

## 4. Community Hot Topics

- **[Issue #2536](https://github.com/netease-youdao/LobsterAI/issues/2536)** — "微信群已满人" (WeChat group is full): The only open issue updated in the last 24h, with 1 comment. User MurrayHubert requests an additional WeChat group. This is a **community capacity signal** — user demand for direct support channels is outpacing supply. While not a technical bug, it highlights a growth pain point the team should address by opening new groups or adding alternative channels (e.g., Discord, Telegram).

No PRs had significant comment counts or reactions in the last 24h; the community discussions are minimal compared to the volume of merged engineering work.

## 5. Bugs & Stability

No critical crash or security bugs were reported in the last 24h. Two notable fixes were merged:

- **[PR #2531](https://github.com/netease-youdao/LobsterAI/pull/2531)** — **Medium severity (UX)**: Fixed background refresh flicker in the Library, where the whole page fell back to a skeleton loader during background updates, destroying scroll position. The fix introduces granular state handling and in-place item merging.
- **[PR #2533](https://github.com/netease-youdao/LobsterAI/pull/2533)** — **Low severity (UX)**: Fixed ambiguous preview of HTML files vs. local services — both displayed identically before; now visually distinguished.

Both fixes are already merged, and the project appears stable with no open bug reports in the 24h window.

## 6. Feature Requests & Roadmap Signals

The biggest product signal is the **plan model catalog** (PRs #2530, #2535), suggesting an upcoming monetization/pricing showcase in the settings UI — users will likely see a catalog of available models tied to their subscription tier. This, combined with the **7-day conversion attribution analytics** (PR #2529), indicates a push toward **free-to-paid conversion optimization**.

The **Library feature** continues to mature rapidly (thumbnail, lifecycle, preview, refresh, analytics). Expect it to be a centerpiece in the next release, possibly with:
- Further polish on cross-platform file type support
- Integration with cowork sessions and IM sharing flows
- More granular publishing controls and per-asset analytics

**Potential next-version items** based on this momentum: a stable Library GA, refined model catalog with search/filter, and possibly collaboration features (session fork PR #1159 has been open since March — this may finally land).

## 7. User Feedback Summary

Direct user feedback on GitHub was sparse in this window (1 issue). The WeChat capacity issue (#2536) indicates:
- **Positive**: A healthy, growing user base actively seeking direct maintainer contact.
- **Pain point**: Difficulty in accessing real-time community support; users may feel underserved as project adoption outpaces support channels.

From PR descriptions and issue labels, inferred user pain points addressed this cycle:
- **Flickering UI during background refresh** (PR #2531) — direct UX complaint fixed.
- **Confusing preview semantics between HTML artifacts and local services** (PR #2533) — addressed.
- **Login promo nags** (PR #2532) — the team is consciously reducing intrusive promotional UI, which users typically dislike.

Overall, user sentiment trends positive given active UX polish and rapid iteration; the main friction is community support scalability.

## 8. Backlog Watch

- **[PR #1159](https://github.com/netease-youdao/LobsterAI/pull/1159)** — `feat(cowork): add session fork` (OPEN, created 2026-03-31, updated 2026-08-25): A well-specified feature for forking cowork sessions from the detail view action menu. It's been open for **nearly 5 months** with no maintainer response, despite being a complete implementation with clear motivation. This is the **longest-pending feature PR** and deserves maintainer attention — it overlaps with the collaboration features the team is actively shipping.
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — `chore(deps-dev): bump the electron group across 1 directory with 2 updates` (OPEN, created 2026-04-02, updated 2026-08-25): **Security-relevant dependency update** (Electron 40.2.1 → 43.4.1) that has been in review for **nearly 5 months**. Electron version gaps can carry security fixes; this should be prioritized to avoid accumulating technical debt and risk.

---

**Overall health:** LobsterAI is in a high-velocity development phase with strong attention to UX stability and product instrumentation. The main risks are the aging backlog items (session fork, Electron bump) and community channel saturation.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**2026-08-26**

---

## 1. Today's Overview

Moltis is showing steady, healthy activity, with 7 items updated in the last 24 hours (2 issues, 5 PRs). The project's focus remains on expanding sandbox infrastructure (Kubernetes backend, Coder remote workspace support) and hardening integration layers (Brave search, Fastmail OAuth, Slack). Two tooling-related fixes were merged today, indicating responsive maintenance of the agent tool ecosystem. No new releases were published this week, suggesting the project is in an accumulation phase ahead of a likely feature-packed release.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent release history can be tracked at [Moltis Releases](https://github.com/moltis-org/moltis/releases).

---

## 3. Project Progress

Two PRs were closed today, both focused on tool reliability:

### Merged/Closed PRs

**#1245 — [fix(tools): validate Brave search parameters](https://github.com/moltis-org/moltis/pull/1245)** *(closed)*
- Exposes Brave localization parameters only when the active search provider is Brave, preventing invalid tool schemas
- Normalizes country, search language, UI language, and freshness values before constructing the Brave request
- Falls back to `ALL` for unsupported markets

**#1243 — [fix(cron): preserve delivered channel context](https://github.com/moltis-org/moltis/pull/1243)** *(closed)*
- Fixes follow-up questions losing context from scheduled messages delivered to WhatsApp or other channels
- Cron execution stays isolated, but the final delivered text is now appended as an assistant message to the destination's conversation
- Resolves history by the exact channel ID, preventing cross-channel context leakage

**Net Progress:** These fixes resolve two quality-of-life issues that directly affected user workflows — search tool robustness with alternate providers and scheduled message follow-up continuity.

---

## 4. Community Hot Topics

The most active discussion item today is the **Kubernetes sandbox backend feature request**:

**#1118 — [[Feature]: Add Kubernetes-native sandbox backend with runtimeClassName support](https://github.com/moltis-org/moltis/issues/1118)**
- **Author:** AzgadAGZ | **Created:** 2026-06-12 | **Updated:** 2026-08-25
- **Comments:** 2 | **Reactions:** 1 👍 | **Status:** Open
- **Summary:** Requests a new `kubernetes` sandbox backend that spawns ephemeral Kubernetes pods for agent command execution, with `runtimeClassName` support for VM-level isolation via Kata Containers, gVisor, or any OCI-compatible runtime.

**Analysis:** This issue signals strong enterprise demand for hardened, VM-level isolation for untrusted LLM-generated code execution. The `runtimeClassName` design pattern shows users want flexibility to plug in their own isolation runtimes. Notably, this aligns with the project's direction — PR #1199 adds Coder remote workspace support (another sandbox backend), indicating the maintainers are actively building out this area.

---

## 5. Bugs & Stability

Only one bug report is active today:

**#1224 — [[Bug]: Tools stop working in shared Slack channels](https://github.com/moltis-org/moltis/issues/1224)** *(CLOSED — 2026-08-25)*
- **Author:** affanshahid | **Created:** 2026-08-21
- **Comments:** 0
- **Severity:** Medium (blocking tool usage in a common collaboration channel type)
- **Status:** Closed — no linked fix PR visible in the data, suggesting the issue may have been resolved, reproduced as a configuration problem, or fixed outside a dedicated PR

**Assessment:** The issue was closed without accumulating discussion, which could indicate a quick resolution or a user-side configuration fix. No other bugs were reported in the last 24 hours — a positive sign for stability.

---

## 6. Feature Requests & Roadmap Signals

Two significant feature signals are present:

### High Signal: Kubernetes Sandbox Backend (Issue #1118)
The request for a `kubernetes` sandbox backend with runtimeClassName support is the strongest roadmap signal this week. Key considerations:
- **Age:** Open since June 12 (2.5 months), suggesting maintainers may be weighing scope vs. demand
- **Alignment:** Complements the recently merged Coder workspace support (PR #1199), indicating sandbox backend diversity is an active development theme
- **Prediction:** Likely to land in the next minor or major release, possibly alongside the Coder backend in a broader "sandbox expansion" release

### Complementary: Coder Remote Workspace Support (PR #1199 — OPEN)
- **Author:** penso | **Created:** 2026-08-15 | **Status:** Open
- Adds Coder sandbox backend creating ephemeral workspaces via REST API with reconnecting PTY WebSockets
- Supports template IDs/names, presets, rich parameters, TTLs, environment aliases, and automatic backend selection

**Portfolio View:** The project is clearly moving toward a multi-backend sandbox architecture. Users wanting specific isolation levels (VM-level via Kubernetes runtimes, remote workspaces via Coder) will drive the next release's feature narrative.

---

## 7. User Feedback Summary

- **Enterprise isolation needs:** Users (via Issue #1118) explicitly request VM-level isolation for untrusted code execution, highlighting concerns about security boundaries in agent workloads.
- **Integration friction:** The closed Slack tools issue (#1224) points to pain around tool behavior in shared-channel contexts — a common enterprise collaboration pattern.
- **Cross-channel context matter:** The cron context fix (PR #1243) addresses a specific, real-world user frustration where follow-up questions lost conversational continuity when delivered to WhatsApp or other non-core channels.
- **Tool schema strictness:** The OpenAI-safe schema fix (PR #1232) indicates users hit compatibility issues when using Moltis with strict tool-schema providers like Codex, showing real-world multi-platform agent usage.

Overall, feedback skews positive — issues are being reported, addressed, and closed with reasonable turnaround.

---

## 8. Backlog Watch

**Open PRs needing attention (no recent maintainer activity):**

**#1199 — [Add Coder remote workspace sandbox support](https://github.com/moltis-org/moltis/pull/1199)**
- **Author:** penso | **Updated:** 2026-08-25 (10 days since creation)
- **Status:** Open, no comments visible — substantial feature PR with rich functionality; needs review and feedback.

**#1244 — [Fix Fastmail MCP OAuth scope registration](https://github.com/moltis-org/moltis/pull/1244)**
- **Author:** penso | **Updated:** 2026-08-25 (same day as creation)
- **Status:** Open, no comments — new PR needing initial review.

**#1232 — [fix(tools): make object schemas OpenAI-safe](https://github.com/moltis-org/moltis/pull/1232)**
- **Author:** IlyaBizyaev | **Updated:** 2026-08-25 (3 days since creation)
- **Status:** Open, no comments — fixes strict tool schema issues; relevant for Codex compatibility.

**Long-unanswered Issue:**

**#1118 — [Kubernetes sandbox backend](https://github.com/moltis-org/moltis/issues/1118)** *(2.5 months without maintainer response)*
- Despite being the most-discussed feature request, no maintainer acknowledgment or roadmap comment exists. This may warrant a status update or "planned" tag to manage community expectations.

---

**Project Health Summary:** Moltis is in a strong maintenance-and-expansion cycle — bugs are closed quickly, infrastructure features are emerging steadily, and the community is engaging with clear, strategic feature requests. The main risks are the two slow-moving open PRs from the same contributor (penso) and the unanswered Kubernetes sandbox request, which, if left too long, risks community frustration.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-26

## 1. Today's Overview

CoPaw is in an active release cycle with v2.1.1-beta.3 published, following a high-volume 24-hour period: 33 issues updated (19 open, 14 closed) and 50 PRs updated (21 open, 29 merged/closed). The project shows strong momentum with a mix of bug fixes, feature development, and quality-of-life improvements. Notably, several long‑standing PRs (some open since March–June) have been merged/closed, indicating that maintainers are clearing backlogs. Community engagement is high, with a majority of top issues originating from Chinese-speaking desktop users reporting UI/UX, performance, and configuration issues. The project maintains a disciplined release pipeline using automated release-duty verification checks.

## 2. Releases

**v2.1.1-beta.3** (published today)

- **chore(console):** pinned `@agentscope-ai/chat` to `1.1.72` (stability fix)
- **docs(loop-engineering):** fixed `PluginAPI` casing to `PluginApi`
- **test(integration):** expanded integration test coverage (details truncated in changelog)

No breaking changes or migration notes were mentioned. This is a maintenance/beta release building on the v2.1.1 line.

## 3. Project Progress

Today's merged/closed PRs (29) include both long‑pending work and fresh fixes:

- **Long-standing merges (backlog clearing):**
  - [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) — self-evolution skill (merged, after months in review)
  - [#5414](https://github.com/agentscope-ai/QwenPaw/pull/5414) — decoupled skill SOP and judgement rules
  - [#1228](https://github.com/agentscope-ai/QwenPaw/pull/1228) — `read_media` tool for image/video/audio processing
  - [#1525](https://github.com/agentscope-ai/QwenPaw/pull/1525) — cron isolation for invalid persisted schedules
  - [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) — MiniMax M3 model added to built-ins
  - [#2304](https://github.com/agentscope-ai/QwenPaw/pull/2304) — 404 from `models.list` treated as successful connection check
  - [#1552](https://github.com/agentscope-ai/QwenPaw/pull/1552) — custom provider `default_headers` support

- **Recent merges/updates:**
  - [#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300) — docs: updated Scroll context manager blog
  - [#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276) — dependency bump: agentscope to 2.0.7

- **Active PRs still in review (signal for upcoming features):**
  - [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) — `qwenpaw-data` PyPI runtime path + docker-compose one-shot demo
  - [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) — session-level thinking modes (Off/Low/Medium/High) with cross-device sync
  - [#7294](https://github.com/agentscope-ai/QwenPaw/pull/7294) — opt-in image resizing by pixel limit
  - [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293) — CI integration tests split into three parallel shards
  - [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) — +19 unit test files (+5.02pp coverage) and a safety_checks fix

## 4. Community Hot Topics

The most active discussions (by comment count) reveal a mix of feature requests, bug reports, and UX complaints:

1. **[#338](https://github.com/agentscope-ai/QwenPaw/issues/338) — Webhook feature (9 comments, 1 👍)** — Long-standing request to let external systems trigger CoPaw and receive async responses via a callback key. Demonstrates demand for better API/automation integration from external tools.

2. **[#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) — WeChat channel "show thinking" setting not honored (6 comments)** — Users complain that the "show thinking process" toggle is ignored in the WeChat channel, leaking chain-of-thought output they explicitly want hidden. This touches on privacy/behavioral control.

3. **[#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) — Memory leak (closed, 5 comments)** — Detailed root-cause analysis of a memory leak in v1.1.12.post2: orphaned async tasks + unreused HTTP sessions causing ~5.5 MB/min growth until process kill and config corruption.

4. **[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) — Windows installer lock-file conflicts (5 comments)** — NSIS installer can’t overwrite files in use by the browser extension (NM host), causing failures and rollback corruption.

5. **[#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) — "peer closed connection" on long inference (4 comments)** — Users hit incomplete chunked reads when inference exceeds ~130s, suspecting a timeout on CoPaw side.

6. **[#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) — SSE serialization loop / 100% CPU after agent-to-agent run (4 comments, closed)** — Critical stability bug where server becomes unresponsive with unbounded memory growth.

7. **[#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) — Unify task tracking and same-session concurrency (4 comments)** — Requests consistent semantics across entry points; API sometimes acknowledges a message but silently drops it.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix status |
|---|---|---|---|
| 🔴 Critical | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | Runaway SSE serialization loop → 100% CPU, memory exhaustion, unresponsive server (2.1.1b2) | Closed (fixed) |
| 🔴 Critical | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | Memory leak + config corruption on crash (older version, root caused) | Closed (fixed) |
| 🟠 High | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) | Long conversation UI freeze (whole PC lags, not just browser) — possibly related to stream rendering | Closed (fix presumably landed in b3) |
| 🟠 High | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | Desktop bundles OpenSSL 3.0.x (Python 3.11) — carrier DPI resets TLS handshakes; suggests bumping CI to Python 3.13 | Open, no fix PR yet |
| 🟠 High | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) | MCP legacy migration leaves dangling credential ref → every new session fails with `CredentialNotFoundError` | Open, no fix PR yet |
| 🟠 High | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses multi-turn fails on 2nd turn with "referenced reasoning item expired" on stateless upstreams | Open, no fix PR yet |
| 🟡 Medium | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | "peer closed connection" for long/thinking-heavy requests | Open, user reports provider-side timeout, CoPaw lacks config |
| 🟡 Medium | [#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129) | Console long-session + streaming → render frame drops (verified via WPR trace) | Closed (fix likely in b3) |
| 🟡 Medium | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | WeChat channel ignores "show thinking" setting | Open, no fix PR yet |
| 🟢 Low | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) | Large MCP results can bypass scroll-compaction and overflow model context | Open |
| 🟢 Low | [#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266) | SubAgent selects wrong project folder ("B" instead of "A") | Open |

## 6. Feature Requests & Roadmap Signals

- **Webhook API** ([#338](https://github.com/agentscope-ai/QwenPaw/issues/338)) — Indirect demand for an external, programmatic interface to CoPaw agents. Together with the mail-blog PR ([#7290](https://github.com/agentscope-ai/QwenPaw/pull/7290)), signals a push toward integration/automation features.

- **Workspace-scoped Skill preload policy** ([#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182)) — Advanced control over when skills are loaded (on-demand vs preload) for workspace-specific workflows. Likely to be scheduled in a mid‑term release.

- **UI/UX polish (top user demand):**
  - Collapsible/foldable thinking process by default ([#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196))
  - Auto-clear completed background tasks ([#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280))
  - Task-completion highlight in bottom bar (orange badge) ([#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263))
  - Use popups for multiple-choice (instead of prompting user to type) ([#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279))
  - Unified tools panel / web terminal in Chat ([#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) — closed, possibly merged or shelved)

- **Security hardening:**
  - Master key file permissions tightened ([#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) open PR) — active direction.

- **Platform/desktop improvements:**
  - Python 3.13 + OpenSSL 3.3 in desktop bundle ([#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298))
  - Installer robustness on Windows (terminate processes before file overwrite) ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810))

**Prediction:** The next minor release (v2.1.2 or v2.2.0) will likely include session-level thinking modes ([#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163)), image resizing ([#7294](https://github.com/agentscope-ai/QwenPaw/pull/7294)), and model-catalog refreshes ([#7277](https://github.com/agentscope-ai/QwenPaw/pull/7277)). The webhook request (#338) is a strong candidate for a follow-up feature given its age and consistent demand.

## 7. User Feedback Summary

- **Performance issues dominate:** Users on Windows/macOS report browser and even whole‑system freezes during long conversations and streaming — this is the #1 source of dissatisfaction (verified via WPR traces by one user, which was useful).

- **WeChat-specific UX gap:** The "show thinking" toggle is not honored — a concrete privacy/UI bug that undermines trust for channel users.

- **Update/install fragility:** NSIS lock-file errors and post‑crash config corruption make upgrades painful on Windows.

- **Positive response to agile release cycle:** Users promptly test betas and file detailed, high‑quality bug reports (including root-cause analysis, WPR traces, and model‑aware diagnostics).

- **Feature suggestions are well-received (reactions often 0–1 👍, but comment depth is high):** The community actively discusses design trade-offs (e.g., folder naming, background-task retention) and expects maintainers to respond.

## 8. Backlog Watch

These items need maintainer attention:

- **[#338](https://github.com/agentscope-ai/QwenPaw/issues/338)** — Webhook feature request open since March 2026 with 9 comments and active demand; no linked PR yet.

- **[#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)** — "peer closed connection" bug not yet triaged with a configured timeout; user is waiting for an official option.

- **[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)** — Windows installer lock-file issue still open; affects many desktop users upgrading from older betas.

- **Old PRs with no recent activity:**
  - [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) — master key `0o600` fix (security‑relevant) awaiting review since Aug 18.
  - [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) — reranker UI panel, open since July 23, still "Under Review".

- **Standing invitations for community help:**
  - [#7259](https://github.com/agentscope-ai/QwenPaw/issues/7259) — maintainers explicitly asking for Windows memory-leak reports ("Help Wanted") — indicates a known, unfixed critical issue that would benefit from more data.

*Overall assessment:* **Healthy, active project with strong community engagement and a disciplined release pipeline.** Main risks are performance (SSE/streaming under load), Windows-specific reliability, and a growing backlog of UX-level feature requests that need prioritization.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-26

---

## 1. Today's Overview

ZeroClaw shows strong, sustained activity with **50 issues and 50 PRs updated in the last 24 hours**, indicating a healthy, high-velocity development cycle. The project is in a **major hardening phase**, with a clear emphasis on security (sandboxing, SSRF, credential handling, symlink races), architectural refactoring (execution-tree budgets, TaskRecord lifecycle, MCP registry caching), and cross-platform reliability (Windows CI, portable tests). The governance process is functioning well: multiple RFCs are in review, a large maintainer decision queue (#8692) is shepherding proposals, and accepted trackers are being driven to implementation. The project has **no new formal releases this period**, and the recent 0.8.4-to-0.9.0 transition is well underway, with breaking changes tracked and coordinated via dedicated trackers (#7432).

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent release remains the **0.8.4** milestone, with the project actively tracking work toward **v0.9.0** (auth, security, gateway hardening, breaking changes) via tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

---

## 3. Project Progress

The project is **heavy on PR reviews and stacked feature work**, but the merge rate is **low (1 of 50 PRs closed/merged)** this period. This suggests a stabilization effort — the team is prioritizing review quality over merge volume, with many PRs carrying labels like `needs-author-action` or `do-not-merge`.

Key PRs and strategic directions (all open/under review):

- **PR [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351): Enforce execution-tree iteration budgets** — Implements a single aggregate iteration ceiling for foreground agent execution trees, directly addressing [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323).
- **PR [#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369): Bound skill HTTP egress** — A **breaking change** that restricts skill-defined HTTP tools to pre-approved destination addresses, disables ambient proxies/redirects, and caps response size at 1 MiB.
- **PR [#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370): Harden Copilot credential cache** — Replaces predictable fallback credentials and rejects symlinked/non-regular cache entries.
- **PR [#10367](https://github.com/zeroclaw-labs/zeroclaw/pull/10367): Prevent symlink races during skill install** — Uses file-handle-relative, no-follow opens to prevent symlink-based attacks.
- **PR [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350): Measure Windows test coverage** — Adds advisory CI jobs to collect Windows test selection/duration evidence.
- **PR [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527): Bump routine toolchains to Rust 1.98.0** — Maintains the 1.96.0 source floor while modernizing the build toolchain.
- **PR [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109): Native Hailo-Ollama provider support** — Adds an opt-in typed provider for edge AI workloads.

The **only closed PR** this period is PR [#10365](https://github.com/zeroclaw-labs/zeroclaw/pull/10365), a minor dependency cleanup (removing unused `tokio-socks`).

---

## 4. Community Hot Topics

The most active discussions center on **governance, architecture, and long-running trackers** rather than simple bug reports.

- **Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (24 comments)** — RFC: Work Lanes, Board Automation, and Label Cleanup. This is a ratified governance RFC (Rev. 26) in rollout. The community/maintcore is actively managing how work is labeled, routed, and tracked. High value because it improves the contributor experience across the board.

- **Issue [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) (14 comments)** — Maintainer decision queue for RFCs and design issues. This tracker acts as a public "to-do" for maintainers, improving transparency. The 14 comments reflect active triage of pending decisions.

- **Issue [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) (14 comments)** — RFC: Separate authoritative memory storage from optional enrichment connectors. A high-risk architectural proposal (marked `risk:high`) that has gone through a maintainer takeover and revision, indicating significant interest in decoupling the memory core from optional connectors.

- **Issue [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) (12 comments)** — RFC: Make wire protocol first-class in provider construction. A revision-heavy RFC (dated 2026.08.25) aimed at standardizing how providers are built and onboarded, which signals a push toward better third-party provider ergonomics.

The pattern suggests the community is **deeply engaged in architecture and governance**, not just surface-level feature requests.

---

## 5. Bugs & Stability

Three critical/high-severity bugs are currently **open and active**:

1. **Severity S0 (Data Loss / Security Risk)** — **Issue [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947)**: Cron tools are not scoped to the owning agent. Any agent can read, trigger, modify, or delete another agent's cron jobs by ID. A **direct cross-tenant authorization flaw**, `risk:high`, `priority:p1`, now `status:in-progress`.

2. **Severity S0 (Data Loss / Security Risk)** — **Issue [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206)**: Agent cron runs intermittently resolve `workspace_dir` to `/`. This **closed** bug is a data-loss-class root-directory misfire, but the resolution path is unclear from the issue itself.

3. **Severity S1 (Workflow Blocked)** — **Issue [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357)**: The tool execution error path discards the detailed error body, leaving agents with only a bare status like "HTTP 400". This is an **agent-observability** problem that blocks agents from self-correcting. Filed today, no fix PR yet.

**Other notable issues:**

- **Issue [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) (S2, `priority:p1`)**: Bounded delegate target resolves filesystem to delegator's workspace, breaking sandbox isolation for delegated agents.
- **Issue [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) (S0, closed)**: Agent cron intermittently resolves `workspace_dir` to `/`. The issue is closed, but the underlying severity highlights the fragility of workspace resolution under concurrency.

**Stability-focused PRs this period include** [#10362](https://github.com/zeroclaw-labs/zeroclaw/pull/10362) (portable cron workspace assertions), [#10368](https://github.com/zeroclaw-labs/zeroclaw/pull/10368) (stale local IPC cleanup test), and [#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042) (MSRV CI timeout fix, closed).

---

## 6. Feature Requests & Roadmap Signals

Strong signals for the **next release (0.9.x)**:

- **Multi-session gateway web chat** (Issue [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)) — Session sidebar with new/switch/rename/delete. A long-standing UX gap for power users.
- **Windows/macOS CI coverage** (Issue [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)) — With the measurement PR [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350) now in review, a required OS matrix is likely in 0.9.x.
- **Tool registry live refresh** (Issue [#10297](https://github.com/zeroclaw-labs/zeroclaw/issues/10297)) — Avoid full daemon restarts on config changes; improves operator UX.
- **Git Channel in dist/artifacts** (Issue [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) + PR [#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363)) — Purely additive, likely to ship soon.
- **TypeScript CI gate for `web/`** (Issue [#10306](https://github.com/zeroclaw-labs/zeroclaw/issues/10306)) — Will tighten the "master is broken" experience, a quality gate for the React/Vite migration.

**Predictions for 0.9.x:** the **execution-tree iteration budgets** ([#9323] + PR [#10351]) and **skill HTTP egress bounding** (PR [#10369]) are likely to land, as they are funded by the security hardening push. The **Hailo-Ollama provider** ([#9109]) is another likely near-term addition for edge/on-device users.

---

## 7. User Feedback Summary

**Pain points being expressed:**

- **Cross-agent isolation gaps** are a recurring theme: "[Bug]: Bounded delegate target resolves filesystem to delegator's workspace" ([#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)) and "[Bug]: cron tools are not scoped to the owning agent" ([#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947)). Both are **S0/S2 security/trust issues** that directly impact multi-agent deployments.

- **Agent UX and local-model friction**: "[Bug]: ZeroCode streamed user turns look like log/API payloads to small local models" ([#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)) and the **French/Spanish label misalignment** ([#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103)) show the community is probing usability and **internationalization**, not just core runtime features.

- **Configuration and deployment friction**: The RFCs on provider wire protocol ([#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)) and the Git Channel packaging request ([#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138)) suggest users want **lower-friction setup and a richer official artifact set**.

**Overall sentiment seems** constructive and engaged. The volume of high-quality, cross-cutting RFCs and the active maintainer decision queue indicate a **project that is governed coherently**, not one that is being pulled in contradictory directions.

---

## 8. Backlog Watch

- **PR [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)**: fix(gateway): keep agent turns alive after viewer disconnect. `needs-author-action`, high-risk, size XL. A major UX and reliability improvement that has been open since **July 11**, and is likely blocking other gateway work.
- **PR [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955)**: fix(telegram): batch media group attachments. Same `needs-author-action` status, open since **July 10**. Critical for a popular channel; likely a maintainer bandwidth bottleneck.
- **Issue [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)**: Evaluate Rust/WASM web UI prototype before React/Vite migration. **Open since June 22** with 9 comments — a significant architectural fork in the road; if it stalls, it will force an uncommitted, irreversible direction on the web stack.

These are the items most likely to become **stale blockers** without maintainer intervention.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*