# OpenClaw Ecosystem Digest 2026-08-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-02 02:55 UTC

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

Based on the GitHub data provided for OpenClaw on 2026-08-02, here is the project digest.

---

# OpenClaw Project Digest - 2026-08-02

## 1. Today's Overview

OpenClaw is experiencing a very high level of activity, with a massive surge in issues and pull requests being updated (500 each in the last 24 hours). However, the high issue count (461 open issues) and the prevalence of critical bug labels indicate a period of significant instability, likely stemming from the recent `2026.7.2-beta.6` release and ongoing architectural refactoring efforts.

The project is in active development, with maintainers merging or closing 100 PRs today and processing a large number of reported bugs. There is a clear focus on core stability, with numerous issues and PRs flagged as P0/P1 and related to session-state, message-loss, and crash-loops. While the volume is intense, the team is actively addressing these problems through a significant refactoring effort and targeted fixes.

## 2. Releases

**New Release:** `v2026.7.2-beta.6`
- **Focus:** "State safety and recovery."
- **Highlights:** This release introduces a **quarantine store** to protect persisted data, crash-recoverable SQLite snapshots, crash-durable filesystem publication, rejection of schema upgrades that would cause data loss, and rollback-writer snapshot recovery.
- **Impact:** This is a stability-focused beta release. Users should expect improvements in data integrity and recovery from crashes or database corruption. No breaking changes or migration notes were provided in the summary, but given the focus on state management, users on beta should closely monitor for issues after upgrading.

## 3. Project Progress

While no PRs were explicitly marked as merged in the top 30 by comments, the data shows **100 PRs were merged or closed today**. The most substantial progress can be seen in a large series of interconnected refactoring PRs aimed at fixing system-wide architectural issues. This batch, primarily authored by `vincentkoc`, focuses on removing the Gateway's tight coupling with core agent processes:

- **Refactoring for Local Runtime Ownership:**
  - `refactor(agents): centralize local turn lifecycle ownership` (#116403)
  - `refactor(sessions): move store ownership out of gateway` (#116437)
  - `refactor(agents): promote local agent host` (#116441)
  - `refactor(agents): scope approvals to local run hosts` (#116620)
  - `refactor(acp): run inbound sessions locally` (#116678)
  - `feat(acp): advertise the self-contained host contract` (#116690)
- **Impact:** This series of large, high-risk PRs addresses multiple reported bugs by moving session, approval, and turn lifecycle management out of the main Gateway process. This is a significant architectural shift that likely enables more robust local and embedded agent runs, but also carries a high risk of regressions that the team is actively managing.

Other notable fixes in flight include improvements to Telegram migration costs (#117759), memory-core provider recovery (#116562), and compaction logic (#117400).

## 4. Community Hot Topics

The most discussed issues (by comment count) reveal deep user frustration with reliability, particularly around **message loss and sessions getting stuck**.

- **#116277 - DeepSeek v4 Flash silent reply failure (73 comments):** A high-engagement P1 bug where the model fails to generate a reply, leaving users with no response. This suggests significant user reliance on this specific model and points to broader provider-compatibility issues.
- **#116201 - Realtime voice state retention (38 comments):** A P1 issue about unbounded state in realtime voice sessions, causing resource leaks and potential stalls. The technical depth of discussion suggests this is a complex and critical area.
- **#99241 - Tool outputs rendered as images (26 comments):** Despite being closed, this older issue has high engagement. It highlights a fundamental UX problem where long tool results become unreadable to the agent, undermining complex workflows.
- **#115326 - Crash-loop breaker suppresses Discord/WhatsApp (24 comments):** A critical P1 regression where a safety mechanism permanently disables channels, and the documented recovery path fails. This is a severe bug that traps users in a broken state.

## 5. Bugs & Stability

Today's data is dominated by serious stability issues, with a significant number of P0 and P1 bugs reported. The most severe are characterized by their potential for **message loss, data loss, and crash-loops**.

- **P0 (Blocker):**
    - **#115421 - Schema downgrade recovery must not quarantine/wipe state DB:** This is a critical data-loss bug where downgrading the software can lead to the loss of cron jobs. The issue is open with a linked PR (#116562).
    - **#48920 - Live Docs are ahead of release:** A P0 regression and docs mismatch causing user confusion. It remains open and is a release blocker.

- **P1 (High Severity):**
    - **#115326 (Discord/WhatsApp suppressed) & #116277 (DeepSeek silent failure):** As noted above, these are highly impactful bugs causing communication failures.
    - **#115908 - Session transcript projection livelock:** A core issue causing the main thread to stall, freezing all channel transports under sustained writes.
    - **#116010 - Persistent sessions capped at 128k context:** A major functional regression affecting user workflows, particularly for long-form tasks.
    - **#94939 - 6.x migration leaves conversation store empty:** A data-loss bug breaking MS Teams proactive sends.

- **Crash Loops & Memory:** Issues #115424 (Gateway V8 heap OOM) and #106231 (Loop detection doesn't terminate agent run) highlight ongoing instability and resource-management problems.

Several PRs are open to fix these issues, but **no explicit "fix PR" was listed for the P0 or the most severe P1 issues** in the top 30, suggesting many remain in the `needs-maintainer-review` or `needs-product-decision` stage.

## 6. Feature Requests & Roadmap Signals

Among the bugs, several user-driven feature requests signal where the project is heading:

- **#113251 [P2] - Add image viewing in the webchat file viewer:** A straightforward UX enhancement to improve the web client.
- **#114146 [P2] - Add `baseUrl` config for OpenAI Realtime-compatible providers:** A clear request for greater provider flexibility in the "Talk" voice feature, likely to support more cost-effective or local realtime models.
- **#95724 [P2] - Memory indexing by source directory, not agent:** A smart optimization to avoid duplicate vector stores, indicating user interest in more efficient memory management.
- **#112682 [P3] - Support config-defined reusable tool profiles:** A request for advanced configuration, suggesting a need for more sophisticated policy management for enterprise or power users.

**Prediction for Next Version:** The focus will heavily lean on **stability fixes** from the 2026.7.x betas, particularly around state management, crash recovery, and session handling. While the specific feature requests may be addressed, they are lower priority than the stability crisis. We can probably expect improvements to the "Talk" realtime feature and WebChat UI in a future release.

## 7. User Feedback Summary

The overall sentiment from users is a mix of high appreciation for the product's utility and growing frustration with recent instability.

- **Positive Sentiment:** Users like `Reneb-cafe` (#73537) describe OpenClaw as "genuinely become part of our daily workflow," highlighting successful use for business automation and home assistant control.
- **Negative Sentiment (Frustration):** The high comment counts on critical bugs and descriptions like "permanently freezing the cache" (#114234), "leaves a permanent fail..." (#115847), and "the session reports active work after run completed" (#116488) point to a serious reliability crisis. Users are encountering states that are difficult or impossible to recover from without manual intervention. Many bug reports are marked as "regression (worked before, now fails)", intensifying user frustration as previously reliable features break.

## 8. Backlog Watch

Several long-standing issues (created in March or earlier) remain open and require attention, indicating potential chronic problems:

- **#48920 [P0, Mar 17] - Live Docs are ahead of release:** This P0 release blocker has been open for over four months, suggesting a process issue between docs and release.
- **#50291 [P2, Mar 19] - Plugin Hooks: Missing trace context for observability:** An important feature for developers that has stalled for over 4 months.
- **#34528 [P2, Mar 4] - Feishu reaction message_id bug:** This issue is closed, but its age before closure suggests it was a long-running pain point.
- **#74378 [P2, Apr 29] - CLI commands remain alive on Windows:** A platform-specific bug affecting Windows users that has been open for three months.

These older issues, combined with the daily influx of new ones, suggest the maintainers are facing significant pressure from a growing backlog, potentially slowing the resolution of long-term or lower-priority items.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-02 | **Scope:** 14 projects in the personal AI assistant / agent open-source ecosystem

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing a period of intense, bifurcated activity. While the ecosystem's flagship project (OpenClaw) navigates a stability crisis from aggressive architectural refactoring, a second tier of projects (NanoBot, Hermes Agent, CoPaw, ZeroClaw) are shipping steady, high-velocity improvements with responsive maintainer engagement. The ecosystem shows clear convergence on several technical fronts — session-state reliability, provider compatibility (especially OpenAI-compatible APIs), security hardening around credential management and privilege boundaries, and memory architecture decoupling. However, the field is fragmenting on platform strategy: lightweight embedded agents (NanoBot, PicoClaw) prioritize channel breadth and low resource footprints, while full-featured assistants (OpenClaw, Hermes Agent, QwenPaw) compete on multimodal capabilities, desktop integration, and enterprise-ready features. Community sentiment is paradoxically both enthusiastic (high contributor velocity across all active projects) and frustrated (recurring reliability regressions, silent failures, and opaque update processes erode trust in rapid-release cycles).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score (1-10) | Notes |
|---------|-------------|------------|----------------|---------------------|-------|
| **OpenClaw** | 500 updated / 461 open | 500 updated / 100 merged | v2026.7.2-beta.6 | **4.5** | High volume, but P0/P1 crisis; refactoring turbulence |
| **NanoBot** | 5 touched (4 closed) | 25 updated (13 merged) | No new release (accumulating) | **8.5** | Steady, responsive maintainers; broad fix coverage |
| **Hermes Agent** | 50 updated | 50 updated | v0.19.1 / v2026.7.30 | **6.0** | Bug-storm triage; Windows stability crisis; rapid fix response |
| **PicoClaw** | 1 updated | 3 updated (1 merged) | v0.2.9 (latest known) | **7.0** | Stable; slow feature accumulation; Matrix old bug stale |
| **NanoClaw** | 2 updated (1 new) | 15 touched (5 merged) | **v2.1.54** (rolled up) | **7.5** | Active; iMessage unification shipped; some old PRs stalled |
| **NullClaw** | 0 | 0 | N/A | — | No activity |
| **IronClaw** | 8 closed/merged | 13+ PRs open (arch refactor) | v0.5.0 release PR stalled (3+ wks) | **6.5** | Heavy refactor; critical DB perf regression; release bottleneck |
| **LobsterAI** | 7 updated (6 stale-closed) | 2 PRs (both open, months stale) | No new release | **5.5** | Backlog cleanup; critical bugs open with no fixes |
| **TinyClaw** | 0 | 0 | N/A | — | No activity |
| **Moltis** | 0 | 3 (2 merged) | No new release | **7.5** | Quiet, deliberate; security + observability shipped |
| **CoPaw (QwenPaw)** | 9 updated | 11 updated (1 closed) | QwenPaw 2.0.1 / AgentScope 2.0.4.post1 | **7.0** | Healthy contributor base; first-time contributors; mixed bug fix rate |
| **ZeptoClaw** | 0 | 0 | N/A | — | No activity |
| **ZeroClaw** | 50 updated | 50 updated (0 merged) | v0.8.4 prepared; v0.8.2 latest | **6.5** | RFC-heavy; review bottleneck; eval harness initiative; security hardening |
| **IronClaw** (duplicate) | — | — | — | — | — |

**Health Score Legend:** Based on issue-to-fix ratio, maintainer responsiveness, merge velocity, critical bug density, and community sentiment.

---

## 3. OpenClaw's Position

### Advantages
- **Unmatched feature breadth**: Multimodal (voice, vision), broadest channel adapter suite (Telegram, Discord, WhatsApp, Slack, Feishu, Teams, Matrix, +), MCP support, realtime voice, and a rich plugin system.
- **Massive community**: 500+ issues/PRs per day — 10-100x engagement of any peer project; this drives rapid feature discovery and ecosystem gravity.
- **Pioneering architecture**: The ongoing refactoring toward local runtime ownership and session-state safety (quarantine stores, crash-durable snapshots) is an attempt to solve reliability at scale — a technical bet that, if successful, will set the standard for stateful agents.
- **High-profile integrations**: DeepSeek, OpenAI Realtime, memory providers (memory-core), and a flagship "Talk" feature position it as the most complete personal AI OS.

### Technical Approach Differences
- **Monolithic + modular**: A single core with a Gateway process — making it powerful but complex; peers lean lighter (NanoBot's Python simplicity, PicoClaw's Rust efficiency).
- **Refactoring-heavy**: OpenClaw is mid-migration to a new architecture; peers are shipping smaller, lower-risk increments.
- **State persistence depth**: Few peers match OpenClaw's investment in crash recovery, snapshotting, and data-integrity layers.

### Community Size Comparison
| Metric | OpenClaw | Hermes Agent | ZeroClaw | NanoBot |
|--------|----------|--------------|----------|---------|
| Daily issues+PRs | ~1,000 | ~100 | ~100 | ~30 |
| Daily merged | ~100 | ~1-2 | ~0-1 | ~13 |
| Release cadence | Beta every ~2 weeks | Monthly+ | Patch imminent | Roll-up imminent |
| Sentiment | Frustrated (reliability crisis) | Mixed (Windows pain) | Constructive (RFC-heavy) | Positive (responsive) |

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|-----------|---------|----------------|
| **Session-State Reliability** | OpenClaw, NanoBot, NanoClaw, CoPaw | Message loss, stuck sessions, crash recovery, stale-state isolation |
| **Credential/Security Hardening** | Hermes Agent, ZeroClaw, Moltis, NanoClaw | Token leaks (cross-profile), allowlist bypasses, credential expiry alerts, multi-factor privilege boundaries |
| **Provider Compatibility** | NanoBot (DeepSeek), CoPaw (Gemini thought relay), ZeroClaw (OpenAI Chat Completions), PicoClaw (Exa, OrcaRouter), IronClaw (OrcaRouter) | Harden null-content 400s, silent failures, model-hijacking, context-window limits; OpenAI-compatible adapters as lingua franca |
| **Memory Architecture Decoupling** | ZeroClaw, OpenClaw, PicoClaw | Separate conversation history from curated long-term memory; per-source indexing; lifecycle policy decoupled storage |
| **Developer/Contributor Friction** | IronClaw (CI gates), CoPaw (proof gate strips fenced blocks), OpenClaw (P0 docs mismatch) | CI reliability, documentation synced to release, contributor-friendly gates |
| **Observability & Instrumentation** | Moltis (Langfuse/OTLP), ZeroClaw (OTel correlation), NanoBot (trace context) | End-to-end tracing, token accounting, feedback collection, user-visible progress indicators |

---

## 5. Differentiation Analysis

| Project | Differentiator | Target User | Architecture |
|---------|---------------|--------------|---------------|
| **OpenClaw** | Full-featured personal AI OS | Power users, businesses | Monolithic + Gateway; Python/TS; heavy state management |
| **NanoBot** | Lightweight, channel-message-driven assistant | Individual devs, hobbyists; simple deployment | Python; minimal; chat-first |
| **Hermes Agent** | Desktop-first (macOS/Windows/Linux) with multiprofile | Enterprise power users; secure multi-account workflows | Node/TS; desktop apps; gateway sync |
| **PicoClaw** | Memory-efficient embedded assistant | Edge/IoT, resource-constrained | Rust; minimal deps |
| **NanoClaw** | Multi-platform broadcast + iMessage unification | Cross-platform users (iOS-focused) | Python; heavy on credential/credential-management |
| **IronClaw** | High-performance agent runtime for production | Developers of agent products | Rust workspace; advanced port/socket architecture; CI-heavy |
| **LobsterAI** | Studio HTTP/MCP for teams | Enterprise collaborative teams | JS/TS; studio UI |
| **Moltis** | Agent observability + security-facing channels | AI teams needing audit trails | Python; instrumentation-native |
| **CoPaw (QwenPaw)** | Qwen/AgentScope integration; Chinese-first UX | Chinese-speaking AI users | Python/AgentScope; Tauri desktop |
| **ZeroClaw** | Memory/security architecture research platform | Advanced devs; security researchers | TS/Node; RFC-driven design; heavy in-house security pipeline |

---

## 6. Community Momentum & Maturity

### Tier 1: High Momentum (Rapid Iteration)
- **NanoBot** (healthy, broad community contributions; fast merge cycles)
- **ZeroClaw** (intense feature development; eval harness; RFC culture; but review bottleneck)
- **CoPaw** (active first-time contributors; maintainer responsiveness)

### Tier 2: Heavy Turbulence (High Activity, Stability Risk)
- **OpenClaw** (extremely active but crippled by P0/P1s)
- **Hermes Agent** (active bug fixing; Windows pain; update-path regressions; mostly responsive)
- **IronClaw** (refactor-productive but DB performance crisis; release pipeline stalled)

### Tier 3: Steady/Stabilizing
- **PicoClaw** (slow, stable, low-risk)
- **Moltis** (quiet, deliberate security/observability gains)
- **NanoClaw** (shipped iMessage; younger ecosystem)

### Tier 4: Stagnant/Inactive
- **LobsterAI** (backlog cleanup; no fixes shipping)
- **NullClaw, TinyClaw, ZeptoClaw** (no activity)

---

## 7. Trend Signals

#### 1. **State Safety is the New Feature**
Users no longer accept silent failures; they demand crash recovery, quarantine stores, and visible progress. OpenClaw, NanoBot, NanoClaw are all investing in session-state and media-path preservation.

#### 2. **OpenAI-Compat as Interop Baseline**
Almost every project is either adding an OpenAI Chat Completions adapter (ZeroClaw, PicoClaw, OrcaRouter addition) or hardening an existing one (NanoBot, CoPaw). This is the ecosystem's interop lingua franca.

#### 3. **Credential Hygiene as a First-Class Concern**
Cross-profile token leaks, allowlist bypasses, credential expiry alerts, and per-account privilege separation are emerging as critical security features across Hermes Agent, Moltis, NanoClaw, and ZeroClaw.

#### 4. **The Personal AI OS is Maturing into a Platform**
Beyond chat, users now expect: memory lifecycle management (ZeroClaw), image viewing in WebUI (OpenClaw), per-session model switching (NanoBot), cleanup pages (QwenPaw), and global hotkeys/quick-access (QwenPaw). The era of single-turn chat is over; users want *composable workspaces*.

#### 5. **Memory is the Next Battleground**
Three projects (ZeroClaw, OpenClaw, PicoClaw) are actively rethinking memory architecture — separating history from curated long-term memory, decoupling lifecycle policy from storage, and indexing by source rather than agent. This will be the differentiator for long-term personalization.

#### 6. **Detached Process Handling is Broken**
Nohup/background command handling (CoPaw #6480) and Matrix sync reconnection (PicoClaw #3203) point to a systemic gap: agents don't handle asynchronous, out-of-band processes well. Expect a boom in "operations lifecycle" management features.

#### 7. **Distributed Multi-Agent Interop is Emerging**
Moltis (instrumentation), ZeroClaw (A2A outbound), Hermes (multiprofile), and IronClaw (product_contracts) are all moving beyond single-agent — toward agent-to-agent authorization, shared context, and cross-agent observability.

---

## Final Takeaway for Decision-Makers

The ecosystem is **vibrant but immature under pressure**. OpenClaw's sheer scale makes it a safe default for power users, but its current instability argues for pinning releases and waiting one patch-cycle before adopting new betas. NanoBot and Moltis represent low-risk, high-quality options for teams needing reliable, maintainable assistants. ZeroClaw and IronClaw are the picks for forward-looking infrastructure (memory, security, observability) with the caveat of review bottlenecks. **Hedge your bets**: adopt a provider-agnostic layer (OpenAI-compatible APIs) and demand crash-safe state management in any evaluation — these are now ecosystem minimum standards.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-02

## Today's Overview

NanoBot is in a highly active maintenance and feature-development phase, with 25 PRs updated in the last 24 hours (13 merged/closed, 12 open) and 5 issues touched (4 closed, 1 open). The project is shipping a steady stream of bug fixes across critical areas — memory handling, cron execution, session consolidation, and provider matching — while also advancing substantial WebUI and feature work (Quick Chat, cross-session search, trusted-proxy auth, subagent model presets). Notably, no new releases were published this period, despite the unusually high PR volume; this suggests a large merge window is being prepared. The overall signal is a well-maintained OSS project with responsive maintainers actively reviewing and merging community contributions.

## Releases

No new releases were published in the last 24 hours. The project appears to be accumulating a significant batch of merged fixes and features (13 merged/closed PRs today alone) that will likely constitute the next version bump. Users tracking specific fixes — particularly the cron completion-state bug, media-path preservation, and the malformed-session hardening — should watch for an imminent release.

## Project Progress

**Merged/Closed PRs (13)** represent a broad sweep of stability and feature work. Key items completed today:

- **Cron reliability fix:** [#5183](https://github.com/HKUDS/nanobot/pull/5183) *fix(cron): preserve manual run completion state* — resolves issue #5163 where manual cron runs lost their completion state when the WebUI reloaded the store mid-run. The fix protects the live cron store during both scheduled and manual executions, keeping scheduler lifecycle state independent.
- **Memory/session hardening:** [#5153](https://github.com/HKUDS/nanobot/pull/5153) *fix(memory): handle non-string timestamp and missing role in raw_archive* — closes the long-standing issue #4801, making `_format_messages` robust against malformed session-history entries.
- **DeepSeek provider fix:** [#3869](https://github.com/HKUDS/nanobot/pull/3869) — merged after 2.5 months open; solves null-content 400 errors, `"(empty)"` placeholder leakage, and assistant-text dropping for DeepSeek models.
- **Provider-matching bug:** [#3732](https://github.com/HKUDS/nanobot/pull/3732) — closes a silent model-hijacking path where local providers could claim cloud-hosted model keywords without an `api_base` check.
- **Message rate limiting:** [#5108](https://github.com/HKUDS/nanobot/pull/5108) *fix(channels): add per-sender message rate limiting* — adds missing per-user throttling across all channel adapters, addressing a token-spend vulnerability.
- **Response handling fixes:** [#5200](https://github.com/HKUDS/nanobot/pull/5200) preserves `wait_for` targets across response truncation; [#5201](https://github.com/HKUDS/nanobot/pull/5201) tolerates malformed persisted session summaries. Both include test coverage.
- **Responses API advancement:** [#5172](https://github.com/HKUDS/nanobot/pull/5172) preserves and replays the complete opaque Responses output-item chain (including encrypted reasoning), drawing on OpenAI's ARC-AGI-3 report.
- **Code quality:** [#5199](https://github.com/HKUDS/nanobot/pull/5199) narrows Pyright suppressions; [#5209](https://github.com/HKUDS/nanobot/pull/5209) refactors WebUI sidebar selection highlighting.

**Still open but active:** PRs on Dream cron cursor advancement ([#5208](https://github.com/HKUDS/nanobot/pull/5208)), streamed-response dedup logging ([#5206](https://github.com/HKUDS/nanobot/pull/5206)), and media-path preservation during consolidation ([#5139](https://github.com/HKUDS/nanobot/pull/5139)).

## Community Hot Topics

- **[Issue #5185](https://github.com/HKUDS/nanobot/issues/5185) "Nanobot returning tool calls code in responses"** — most-commented item this period (4 comments), closed as invalid/provider-related. The user's bot suddenly began leaking raw tool-call code into responses. This pattern (previously-working integration suddenly emitting tool-call syntax) suggests a provider-side API change or version mismatch, and attracted maintainer attention to verify correct behavior. *Updated Aug 1; closed.*

- **[PR #5210](https://github.com/HKUDS/nanobot/pull/5210) "feat(webui): support trusted proxy bootstrap auth"** — high-visibility new feature (tagged p1) enabling tokenless bootstrap authentication behind Cloudflare Tunnel/Access deployments via CIDR-matched trusted-proxy mode. Reflects growing enterprise/self-hosted deployment patterns behind reverse proxies.

- **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) "Not possible to change models in a specific session"** (currently open) — direct UX pain point: users cannot switch the active model per session; the `/model` command doesn't behave as expected, and the UI's model blip is non-interactive. Directly informs the open PR [#5202](https://github.com/HKUDS/nanobot/pull/5202) which replaces the hidden long-press gesture with a clickable model-preset menu.

- **[Issue #5205](https://github.com/HKUDS/nanobot/issues/5205) "No module named ensurepip"** when enabling the Feishu channel — environment-specific packaging failure (uv-managed install lacks ensurepip module). Demonstrates friction for users installing via uv without system Python integration.

## Bugs & Stability

Ranked by severity:

1. **[CRITICAL — FIXED] Missing rate limiting on all channels ([PR #5108](https://github.com/HKUDS/nanobot/pull/5108))** — previously any approved user could send unlimited messages consuming LLM tokens and spawning tool executions. Now fixed with per-sender throttling.

2. **[HIGH — FIXED] Silent local-provider model hijacking ([PR #3732](https://github.com/HKUDS/nanobot/pull/3732))** — cloud-hosted models could be silently stolen by local providers claiming similar keywords without an `api_base` check. Potentially caused wrong-model responses and incorrect cost behavior.

3. **[HIGH — FIXED] DeepSeek null-content 400 errors ([PR #3869](https://github.com/HKUDS/nanobot/pull/3869))** — null content fields caused API rejections, `"(empty)"` leak into conversation flow, and assistant text being dropped. Merged after 2.5 months, resolving a long-running provider pain point.

4. **[MEDIUM — FIXED] Cron manual-run state loss ([Issue #5163](https://github.com/HKUDS/nanobot/issues/5163) → [PR #5183](https://github.com/HKUDS/nanobot/pull/5183))** — a race condition between manual cron execution and concurrent WebUI store reads dropped completion status, leaving UI at stale "Failed" state.

5. **[MEDIUM — FIXED] Media path loss on session consolidation ([PR #5139](https://github.com/HKUDS/nanobot/pull/5139) open, fixing [#5118](https://github.com/HKUDS/nanobot/issues/5118) and [#5135](https://github.com/HKUDS/nanobot/issues/5135))** — media paths in `media[]` were dropped when archiving sessions, making files unrecoverable. PR is still open and flagged with conflicts.

6. **[MEDIUM — FIXED] Malformed session entries KeyError ([Issue #4801](https://github.com/HKUDS/nanobot/issues/4801) → [PR #5153](https://github.com/HKUDS/nanobot/pull/5153))** — `KeyError` on missing `role` keys; now tolerated during raw archiving.

7. **[LOW — FIXED] ensurepip failure ([Issue #5205](https://github.com/HKUDS/nanobot/issues/5205))** — uv-managed installs failed on `plugins enable feishu`; environment-specific packaging issue, closed.

8. **[LOW — OPEN] Weird tool-call injection in responses ([Issue #5185](https://github.com/HKUDS/nanobot/issues/5185))** — closed as invalid/provider-side, but may resurface if provider API changes persist.

9. **[LOW — OPEN] Streamed log duplication ([PR #5206](https://github.com/HKUDS/nanobot/pull/5206))** — duplicate 'Response to' log lines for every streamed message; fix pending review.

## Feature Requests & Roadmap Signals

- **Per-session model switching (strong signal):** Issue [#5198](https://github.com/HKUDS/nanobot/issues/5198) and companion PR [#5202](https://github.com/HKUDS/nanobot/pull/5202) indicate this UI/UX gap is a top user annoyance. The PR replaces the hidden long-press gesture with a discoverable click/tap model-preset menu — high likelihood of landing in the next version.
- **Cross-session search & mentions ([PR #5211](https://github.com/HKUDS/nanobot/pull/5211)):** adds `search_sessions`/`read_session` tools and `@`-mentions of other chats for the WebUI. Strong power-user demand for conversation discovery across sessions.
- **Quick Chat and Temporary Chat ([PR #5184](https://github.com/HKUDS/nanobot/pull/5184)):** adds fast-utility chat destinations and ephemeral connection-owned in-memory history. Signals a push toward ChatGPT-like convenience features.
- **Subagent model presets ([PR #5207](https://github.com/HKUDS/nanobot/pull/5207)):** optional `preset` parameter on the `spawn` tool — flexible subagent configuration without altering calling-session presets. Likely aligns with orchestration/multi-agent usage trends.
- **Trusted-proxy bootstrap auth ([PR #5210](https://github.com/HKUDS/nanobot/pull/5210)):** p1-tagged trusted-proxy tokenless auth for deployments behind Cloudflare Tunnel/Access — an emerging self-hosted deployment pattern worth supporting.
- **skills.sh well-known sources ([PR #5186](https://github.com/HKUDS/nanobot/pull/5186)):** expands skills discovery beyond GitHub repos to well-known hosts like `uizze.com` — community-driven skills ecosystem growth.
- **Dream cron cursor robustness ([PR #5208](https://github.com/HKUDS/nanobot/pull/5208)):** fixes reprocessing loops and is expected to merge soon.

## User Feedback Summary

- **Positive:** Maintainers actively closed a month-old memory bug (issue #4801, filed July 6) within the day; users are getting responsive attention. The rate-limiting addition addresses a silent cost-spend vulnerability that users likely hadn't yet reported but will welcome.
- **Pain points:** (1) Model-per-session switching is frustratingly undiscoverable and non-functional, pushing users to reconfigure whole instances; (2) uv-managed installs break plugin enablement, creating channel-extension friction; (3) WebUI polling causing stale cron state undermines trust in automation status visibility; (4) tool-call code leakage into responses (even if provider-side) causes confusion; (5) session consolidation data loss (media) — while a fix exists in PR #5139, its open/conflicted state leaves users vulnerable.
- **Satisfaction indicators:** High contributor velocity from multiple distinct community authors today (Re-bin, professionelle-hypnose, KDB-Wind, chengyongru, yu-xin-c, santhreal, amplifierplus, concertypin) signals a healthily collaborative ecosystem with low-barrier contribution paths.

## Backlog Watch

- **[PR #5139](https://github.com/HKUDS/nanobot/pull/5139) (media-path preservation, p1, conflicted):** fixes a data-loss bug for archived sessions; needs conflict resolution and merge. Given the severity (unrecoverable files), this deserves maintainer priority.
- **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) (per-session model switching):** open and actively driving a companion PR ([#5202](https://github.com/HKUDS/nanobot/pull/5202)); should be tracked to completion.
- **[PR #3869](https://github.com/HKUDS/nanobot/pull/3869) (DeepSeek hardening):** finally merged — the 2.5-month open time reflects either maintainer capacity limits or complexity. Worth reviewing the long tail of provider-specific hardening efforts.
- **[Issue #5185](https://github.com/HKUDS/nanobot/issues/5185) (tool-call leak in responses):** closed as invalid/provider-side, but a recurrence would warrant deeper investigation; watch for related provider updates.
- **skills.sh discovery ([PR #5186](https://github.com/HKUDS/nanobot/pull/5186))** — p2 open PR; not urgent, but the skills ecosystem expansion supports community growth.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is a structured project digest for Hermes Agent, generated from the provided GitHub data for 2026-08-02.

---

### 1. Today's Overview

As of 2026-08-02, the Hermes Agent project is in a highly active and turbulent state, with 50 issues and 50 PRs updated in the last 24 hours. The maintainers are aggressively triaging a large influx of bug reports, particularly targeting Windows platform stability, security boundaries, and the newly introduced cron/lifecycle guard subsystem. The velocity is high, with multiple critical P1 bugs being reported and immediately addressed by open PRs, indicating a responsive team working through a release-related bug storm. The community is deeply engaged, with users voluntarily submitting multiple fixes for the same issues, though the sheer volume of regressions suggests recent updates have introduced significant instability. No new releases were published today, but the merge queue is active with fixes for the most severe problems.

---

### 2. Releases

No new releases were published in the last 24 hours. The project is currently operating with versions up to `v0.19.1` and `v2026.7.30` in the wild, with the current `main` branch at `d33becd87`.

---

### 3. Project Progress

Activity is heavily focused on stabilizing the latest release. The most significant merged/closed items today (critical for restoring stability) include:

- **Security Fix for Cross-Profile Credential Leak:** Issue #51603, concerning a critical Anthropic token leak across profiles in multiplex mode, was closed. The PR (#70144) that denies sibling-profile credentials in media delivery is open and being finalized.
- **Desktop Fixes:** PR #76536 (closed/merged) corrects a UI copy glyph placement and notification behavior in the branch-bar path.
- **Critical Startup Fixes:** The fix for the Copilot token exchange stall (#76511, closed as `sweeper:implemented-on-main`) and the "implemented-on-main" fix for the kanban notifier issue (#76482) are now in the codebase.
- **Network Proxy Fix:** PR #76538 (open, but updated) replaces the deprecated `google-auth-httplib2` library, modernizing the Google Chat adapter's authentication.

---

### 4. Community Hot Topics

The most engaged discussions highlight deep dissatisfaction with the update and installation process, and worries about security.

- **[Bug]: issue with updates** (#75598 - 7 comments) - This is the hottest thread, describing a Windows update that broke the entire program and caused conflicting gateway instances. This is a clear signal of a regression in the update tooling that has eroded user trust.
- **Security Bugs by fangliquanflq** - This user has emerged as a leading security researcher this week, filing three highly important issues:
    - **Windows sensitive-path guard bypass** (#76246) - Allows writing to `/etc` and `docker.sock` on Windows.
    - **Bash ANSI-C quoting bypass** (#76218) - Allows `rm -rf /` to skip the approval floor via obfuscation.
    - **Sibling-profile credential leak** (PR #70144) - A critical privilege escalation issue.
    These threats are getting 3 comments each, showing active and serious engagement from the community and maintainers on security hardening.
- **Multi-Profile "Gateway" Confirmation:** Issue #76491 ("terminal executing locally rather than on gateway") shows a common point of confusion where the Desktop app isn't routing commands to the remote gateway as expected.

---

### 5. Bugs & Stability

The project is facing a stability crisis with a high volume of severe, newly introduced bugs.

**Priority 1 (P1 - Critical):**
- **Cron Watchdog Kill:** Issue #76502 reports that `cronjob(action='run')` blocks the calling turn, and the inactivity watchdog kills the parent agent. This data loss bug immediately spawned two open fix PRs (#76523, #76524), indicating a quick response.

**Priority 2 (P2 - High):**
- **Windows Update Failures:** Issue #75584 (`hermes.exe missing + node_modules ENOTEMPTY`) and #75598 (unstable after update) paint a grim picture of the Windows update process. PR #76459 is the major fix here, revamping the Node.js toolchain resolution.
- **Gateway Reconnect Loop:** Issue #76435 reports a reconnect loop causing Discord to reset the bot token (1,000+ attempts). PR #76537 fixes the restart-after-clean-exit behavior.
- **Credential Leaks (Security):** Issues #76246 and #76218 remain open and require immediate attention.
- **Framework Breakage:** Issue #76481 (Duplicate `web_search` tool with OpenRouter xAI) breaks compatibility with a popular provider, with PR #76496 already open to fix it.
- **Functionality Regression:** Issue #60845 shows queued responses in Telegram bypassing MEDIA extraction, delivering file paths as text.

**Priority 3 (P3 - Medium):**
- **npm Engine Block:** Issue #76486 highlights that the `package.json` requires npm >=12, blocking the stable Node 22 / npm 11 ecosystem. This is a significant adoption barrier.

---

### 6. Feature Requests & Roadmap Signals

The community is pushing for enhancements in extensibility and governance.

- **Plugin Lifecycle Management (Request #64229 - 3 comments):** A prominent user and maintainer (teknium1) proposes a structured plugin lifecycle with registration handles and `on_unload` callbacks. This is a mature, high-quality proposal that aligns with the current architecture and could be on the roadmap, though the bug storm may delay it.
- **Policy/Audit Authorization (Request #34992):** The community is still advocating for a policy-based tool authorization layer, indicating a desire for more granular control over agent actions.
- **Missing Plugin Slots:** Issue #76381 reports that three documented `PluginSlot` names (sidebar, footer) are never rendered. This indicates API documentation is ahead of implementation, a likely candidate for a quick fix once stability is restored.

---

### 7. User Feedback Summary

The dominant sentiment is frustration with the update and installation experience, particularly on Windows.

- **Pain Point: Breaks on Update:** Users are distressed by broken updates (#75598, #75584) where the program becomes unstable or unrecoverable.
- **Pain Point: Configuration Ignorance:** The TUI/CLI is failing to respect user configuration, such as the `HERMES_HOME` variable (#6729, 3 comments) and the active profile in the Desktop settings (#76359).
- **Positive: High Engagement from Pro Users:** The quick creation of PRs by the community (#76525, #76526, #76523) shows a healthy, knowledgeable user base willing to contribute fixes directly to the project.
- **Concern about Desktop Demo Clutter:** Users on the desktop app are unhappy with "dogfood" demo plugins (example counters, duplicate pills) being enabled by default (#76064, 1 👍).

---

### 8. Backlog Watch

Despite the current activity, two long-standing issues have gone unanswered for months and need maintainer attention.

- **Issue #6729 (Systemd installation ignores `HERMES_HOME`):** Created **2026-04-09** (3+ months). This operational bug consistently breaks installations for users on non-standard paths. It was updated recently due to the bug storm but remains open. This is a straightforward configuration fix that needs a maintainer.
- **Issue #32887 (Gateway heartbeat missing for idle gateways):** Created **2026-05-27** (2+ months). This causes false "down" alerts in cross-container WebUI setups and disrupts devops workflows. The lack of response while the team focuses on release bugs leaves the community in the dark.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-02

## 1. Today's Overview

PicoClaw is in a steady maintenance phase with a moderate level of activity. The project saw 1 issue and 3 pull requests updated in the last 24 hours, though one issue ([#3203](https://github.com/sipeed/picoclaw/issues/3203)) concerning Matrix sync reliability was flagged as stale. A significant localization PR ([#3261](https://github.com/sipeed/picoclaw/pull/3261)) providing Traditional Chinese (zh-TW) support was closed today after being open for over two weeks, marking a community-driven milestone. Meanwhile, two new provider integrations — Exa web search ([#3299](https://github.com/sipeed/picoclaw/pull/3299)) and OrcaRouter ([#3309](https://github.com/sipeed/picoclaw/pull/3309)) — remain open and fresh, indicating continued external interest in expanding the platform's connectivity. No new releases were published, and the project appears to be in a stable, feature-accumulation period rather than active debugging or rapid iteration.

## 2. Releases

No new releases were published in the last 24 hours. The latest known version remains **v0.2.9** (referenced in the Matrix sync bug report). Users waiting for the zh-TW localization or new provider integrations should expect these to land in a future release, likely v0.3.x.

## 3. Project Progress

One PR was merged/closed today:

- **[#3261 — Add zh-TW locale and Traditional Chinese translations](https://github.com/sipeed/picoclaw/pull/3261)** (closed, authored by PeterDaveHello). This PR adds Taiwanese terminology across the WebUI and documentation, extending the localized experience through setup and channel guidance. This is a pure community contribution that improves accessibility for Traditional Chinese speakers and suggests that the project's internationalization infrastructure is mature enough to accept additional locales with minimal friction.

Two PRs remain open and await review:

- **[#3299 — Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** (open, authored by kesku). Adds Exa as a native `tools.web` / `web_search` provider using Exa's `POST /search` API with `type: "auto"` and `contents.highlights`, supporting the existing `d`/`w`/`m`/`y` range filters via `startPublishedDate`.
- **[#3309 — feat(providers): add OrcaRouter as an OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3309)** (open, authored by jinhaosong-source). Adds OrcaRouter as a first-class OpenAI-compatible provider (`orcarouter`), speaking the OpenAI Chat Completions contract and addressing upstream models as `vendor/model` IDs.

## 4. Community Hot Topics

The most active item today is the **Matrix sync loop reconnection bug**:

- **[#3203 — [BUG] Matrix sync loop has no reconnection logic — silent death after network/server disruption](https://github.com/sipeed/picoclaw/issues/3203)**
  - Author: weissfl | Created: 2026-07-02 | Updated: 2026-08-01 | Comments: 7 | 👍: 2
  - Severity: High | Status: Open but flagged `[stale]`

This issue has attracted community attention because the failure mode is genuinely problematic: after any network disruption or homeserver restart, the Matrix `/sync` long-polling loop dies permanently without an automatic reconnection, and because the main process stays alive, systemd's `Restart=on-failure` does not trigger. The two 👍 reactions and seven comments indicate that users are either experiencing this issue directly or are watching for a fix. The core underlying need is **operational resilience** — users expect a self-healing system, not one that silently dies in the background. The `[stale]` flag suggests maintainers may have deprioritized it, but the severity of the failure mode warrants closer attention.

## 5. Bugs & Stability

One bug was discussed in the last 24 hours:

- **Medium-High Severity: [#3203 — Matrix sync loop silent death after network disruption](https://github.com/sipeed/picoclaw/issues/3203)**
  - **Impact:** Users on Matrix channels lose all synchronization silently. No alerts, no logs indicating failure, no auto-restart. The process appears healthy to systemd, hiding the failure.
  - **Root cause:** No reconnection logic in the long-polling loop; the loop simply terminates on any network error.
  - **Fix status:** No linked fix PR exists. The issue is currently tagged `[stale]`, meaning it may not receive immediate attention.

No other bugs, crashes, or regressions were reported in this window. The project appears broadly stable outside of this one significant reliability gap.

## 6. Feature Requests & Roadmap Signals

Two feature-level PRs are currently open and represent likely roadmap items:

1. **Native Exa web search provider ([#3299](https://github.com/sipeed/picoclaw/pull/3299))** — Adds a new search backend. This signals interest in expanding beyond whatever search providers are currently supported. Expected to land in a future release pending review.

2. **OrcaRouter as an OpenAI-compatible provider ([#3309](https://github.com/sipeed/picoclaw/pull/3309))** — Adds multi-vendor routing capability. This is likely a next-version inclusion, as OpenAI-compatible providers already exist and this follows a well-established pattern in the codebase.

3. **zh-TW localization ([#3261](https://github.com/sipeed/picoclaw/pull/3261))** — Now merged, this will ship in the next release and may signal that additional locales will follow, given the established i18n patterns.

**Prediction:** The next minor release (v0.3.x) will likely include the zh-TW locale, the Exa provider (if reviewed quickly), and possibly OrcaRouter. The Matrix reconnection fix may slip further given the staleness flag.

## 7. User Feedback Summary

The dominant user sentiment this week centers on **reliability pain**:

- **Pain point (explicit):** The Matrix sync failure mode ([#3203](https://github.com/sipeed/picoclaw/issues/3203)) is described in detail by the reporter, who notes the silent nature of the failure and the inability of systemd to detect and restart the process. This is a classic "works until it doesn't, then you find out days later" scenario that erodes trust in production deployments.
- **Pain point (implied):** The `[stale]` tag on this issue suggests that maintainers may not have responded with sufficient urgency, which could frustrate affected users.
- **Positive signals:** The rapid pickup of community contributions (zh-TW locale, new providers) indicates that the project has an active and engaged contributor base and that the architecture is open and extensible.

Satisfaction appears mixed: developers appreciate the extensibility, but production users are concerned about silent background failures.

## 8. Backlog Watch

The following item deserves maintainer attention:

- **[#3203 — Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203)** — Open since 2026-07-02, flagged `[stale]`. With 7 comments and 2 👍 reactions, this issue has community backing. The failure mode is severe (silent data loss in active channels) and the fix should be straightforward (add reconnection logic with exponential backoff). The `[stale]` flag is concerning — this should be prioritized, not deprioritized, given the operational impact. Additionally, the lack of any linked fix PR suggests this has fallen through the cracks.

**Recommendation:** Maintainers should address the staleness flag and either assign a fix or provide a timeline for resolution. This issue represents the single greatest reliability risk in the current codebase.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-02

## 1. Today's Overview

NanoClaw is in an active development cycle with a high volume of merged work: **5 PRs were merged or closed today**, including a major iMessage channel refactor and a setup-failure dispatch fix. The project shipped a new rollup release **v2.1.54**, which bundles 37 versions of accumulated changes since v2.1.17. While issue volume is low (2 updated, 1 newly reported), the project demonstrates healthy community engagement with 15 PRs touched in the last 24 hours. There is a clear dual-track of activity: **stabilization of release pipelines and credential management** on the merged side, and **backlog churn on long-standing PRs** (some open for over a month) on the open side. Overall, the project is shipping steadily while maintaining a clear focus on provider-dispatch correctness and infrastructure hardening.

## 2. Releases

**v2.1.54** (rolled up v2.1.18–v2.1.54) was released. Key highlight:

- [BREAKING] **iMessage unified into one `imessage` channel** with two backends via `/add-imessage`:
  - **Local**: uses the current Mac's `chat.db` via the Chat SDK
  - **Hosted**: uses native [Photon](https://photon.codes) via `spectru...` (truncated)

**Migration note:** Users with existing iMessage channel setup must reconfigure via `/add-imessage` to select the Local or Hosted backend. Any channel-specific configuration from prior `imessage-local`/`imessage-hosted` channel names will need to be migrated to the unified channel.

## 3. Project Progress

**Merged/Closed PRs today (5 total):**

- **[#3168] fix(release): close post-merge safety gaps** (closed) — Release pipeline hardening; ensures post-merge operations don't leave unsafe states.
- **[#3170] fix(setup): dispatch failure assist to the picked provider** (closed) — Addresses the critical setup-flow bug where failure assistance incorrectly prompted for Claude CLI even when a different provider was selected.
- **[#3167] feat(credentials): alert when a provider credential expires** (closed) — Adds proactive expiry notifications, preventing silent reconnection-failure chains like the one reported in the field.
- **[#2999] feat(channels): unify iMessage into a single `imessage` channel** (closed) — The major architecture feature consolidating local and hosted backends.
- **[#3164] Hosted iMessage (Photon): supersede #2999 with a working registration flow** (closed) — Follow-up that fixed the registration flow in the original #2999, making the hosted backend actually functional.

**Key advancement:** The iMessage unification (two PRs merged) is the headline feature this cycle, moving from a broken first attempt (#2999) to a working implementation (#3164). The credential-expiry alert (#3167) directly addresses a real-world failure reported by operators.

## 4. Community Hot Topics

- **[#3171 — "The two qodo skills depend on an integration nothing sets up"**](https://github.com/nanocoai/nanoclaw/issues/3171) (OPEN, created 2026-08-01) — Bundled skills `get-qodo-rules` and `qodo-pr-resolver` read an API key from `~/.qodo/config.json` that nothing provisions. This is a **configuration/tooling gap** where users cannot use bundled skills without manual, undocumented setup. **A fix PR already exists (#3172) to remove both skills.**

- **[#2956 — "suppress duplicate delivery when the final output repeats tool-sent content"**](https://github.com/nanocoai/nanoclaw/pull/2956) (OPEN, updated 2026-08-01, ~1 month old) — An agent that sends via `send_message` MCP tool and repeats the text in final output causes **double-delivery** to the user. This is a **user-facing message duplication bug** that could erode trust in the assistant. It has no comments/reactions recorded, suggesting it might be under-observed despite being impactful.

**Underlying needs:** Both topics point to **operational friction**: undocumented skill dependencies (Qodo) and visible output glitches (duplicate messages). The Qodo issue is already being removed by the maintainer; the duplicate-delivery fix is stalled and deserves attention.

## 5. Bugs & Stability

**Ranked by severity:**

1. **HIGH — [#3169] Setup failures always offer to install Claude CLI** (CLOSED) — When a non-Claude provider is selected (e.g., Codex), setup still prompts "Claude CLI is needed to diagnose this" with **Yes preselected**. If Claude exists but is not signed in, it starts an Anthropic sign-in flow. This is a **provider-dispatch bug** that could cause users to install/sign-in to the wrong CLI. **Fixed by merged PR #3170.**

2. **MEDIUM — [#3171] Qodo skills depend on unset-up integration** (OPEN) — Two bundled skills are non-functional out-of-the-box, reading a Qodo API key that nothing creates. This is a **broken default experience** for any user who tries these skills. **Fix PR #3172 (removal) is open.**

3. **LOW — [#3166] fix(migrate-v2): call insertTaskRow, not the removed insertTask** (OPEN) — A static ESM import of a removed function breaks the v2 migration step entirely, dying before any migration executes. **Fix PR #3166 is open and small** (one-line caller).

## 6. Feature Requests & Roadmap Signals

- **[#3167] Credential expiry alerts** (merged) — Proactive alerting for expiring provider credentials. This signals a broader roadmap theme: **reducing silent operational failures** by making the system self-monitoring.

- **[#3090] Prepend all top-level context Markdown** (OPEN, core-team) — Template-level feature to ensure all top-level context markdown is included, likely for better agent context injection.

- **[#3121] Make reaction delivery best-effort** (OPEN) — Resilience improvement to prevent a non-critical feature (message reactions) from failing the whole delivery path — a signal of a "fail-soft" roadmap for non-essential channel features.

**Predictions for next version:** Given the momentum on iMessage and setup-flow fixes, expect **v2.1.55+** to include the Qodo skills removal (#3172), the rootless Docker support (#3174), and the migration-script fix (#3166). The context-markdown feature (#3090) may land if maintainers prioritize template consistency.

## 7. User Feedback Summary

- **Pain point — Wrong-provider setup prompts:** Users selecting non-Claude providers (e.g., Codex) are still nagged to install the Claude CLI. This is **confusing and invasive**, especially with a **preselected "Yes"** that can trigger unwanted installs. (Issue #3169, CLOSED via fix #3170.)

- **Pain point — Silent credential expiry:** An operator watched their Codex ChatGPT credential expire and only saw "Read-only file system (os error 30)" errors with no actionable alert. The system **failed to communicate the root cause** — a direct usability failure. (Addressed by merged PR #3167, but the field report highlights how long this went unnoticed.)

- **Pain point — Non-functional bundled skills:** The Qodo skills are shipped but unusable without an undocumented config file. This creates **mistrust in "included" features** and adds manual setup burden. (Issue #3171, fix pending #3172.)

**Overall sentiment:** Users are technical operators who hit **operational edge cases** (rootless Docker, credential expiry, provider mismatches). The merge velocity on these fixes suggests maintainers are responsive, but the volume of open, older PRs (see Backlog Watch) may slow user-facing improvements.

## 8. Backlog Watch

- **[#2750 — fix: recover stale outbound.db journals after container kills**](https://github.com/nanocoai/nanoclaw/pull/2750) (OPEN since **2026-06-12**, ~7 weeks) — Addresses two related failure modes (#2516, #2640) of the host's `outbound.db` handles. Despite being well-diagnosed and having credit to reporters, this has **no recent comments** and remains unmerged — a **critical stability gap** for container-based deployments.

- **[#2801 — fix(router): harden untrusted router input**](https://github.com/nanocoai/nanoclaw/pull/2801) (OPEN since **2026-06-17**, ~6.5 weeks) — `safeParseContent` silently returns non-objects for primitive payloads, causing callers to read `undefined` instead of raw-text fallback. This is a **security-adjacent robustness fix** that has been open for over a month with no engagement signal.

- **[#2956 — fix(agent-runner): suppress duplicate delivery**](https://github.com/nanocoai/nanoclaw/pull/2956) (OPEN since **2026-07-05**, ~4 weeks) — User-visible message duplication bug. Lacks comments/reactions, indicating it may be under-reviewed despite clear user impact.

These three PRs share a pattern: **well-documented, clearly scoped, but unaddressed by maintainers for weeks.** The first two touch critical infrastructure (db handles, router input hardening) and deserve priority review to prevent accumulation of technical debt in the core scheduling and routing paths.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the **IronClaw Project Digest** for **2026-08-02**, generated from the provided GitHub activity data.

---

# IronClaw Project Digest (2026-08-02)

### 1. Today's Overview
The project is in a state of **high-intensity architectural refactoring** and **release hardening**. Wave 2 of the "Reborn" port-inversion refactor is actively being executed (13 open PRs), with the `product_contracts` workspace successfully inverted off `ironclaw_product`, a dependency that previously caused architectural leaks across 19+ production files. The team is also in a **performance recovery sprint** for a database regression, with two major blockers identified (5.6x latency regression in hosted Postgres and a 37-135s p95 bottleneck in libSQL stress tests). CI stability is a major focus, with follow-up issues tracking silent CI failures and structural workflow bugs. A substantial amount of work remains in the queue for Wave 2 (11/13 PRs are still open) and the large "Reborn queued-message steering" (PR #5981) is still pending review.

### 2. Releases
No new releases were published in the last 24 hours. The latest release attempt, PR #5598 (v0.5.0), remains open and is over a month old, indicating a potential bottleneck in the release pipeline.

### 3. Project Progress
Activity was high, with 8 PRs closed/merged. Key advancements include:

- **Architecture Refactor (Reborn Wave 2):** Two major contract refactors were merged (or closed), inverting dependencies onto `ironclaw_product_contracts`:
    - **WS2.1 Inversion (PR #6998):** `ironclaw_extension_host` now implements product contract ports instead of internal workflow errors, breaking the linchpin dependency.
    - **WS5 Inversion (PR #7002):** The webui and `openai_compat` surfaces were inverted onto `product_contracts`.
- **CI Gating Regression:** A significant fix (PR #6996) was closed, completing the sweep of path-keyed CI gates. This fix closes Issue #6963, finding and fixing eight gate defects that were blocking merges related to the prior refactor.
- **Docs Audit:** A "Wave 1 truth audit" (PR #6995) was merged, reconciling the architecture decision record with the actual shipped code.
- **Testing:** A new test (PR #6761) was added to cover generic outbound registration, providing a regression guard for previously untested behaviors.

### 4. Community Hot Topics
The most active discussion centers on infrastructure and developer experience, rather than user-facing features.

- **Path-keyed CI Gates (Issue #6963):** With 7 comments, this closed issue was the primary focus of maintainer `BenKurrek`. It highlights the friction of internal tooling, where leftover hard-coded paths from a previous refactor caused CI to fail silently. This shows a deep investment in build integrity.
- **libSQL Resource Exhaustion (Issue #6974):** This issue, split from the Postgres recovery effort, has 2 comments but represents a **critical blocker**. The nightly test suite cannot pass within the 20-minute CI timeout due to severe resource exhaustion (37-135s p95 response times) in tool-heavy scenarios.
- **Distributed Tracing (Issue #6973):** The linked PR to fix Postgres capacity is a large, active effort. The community (or team) is closely watching this performance regression, as it directly impacts hosted users experiencing severe latency.

### 5. Bugs & Stability
Multiple stability issues were addressed or reported, ranked by severity:

- **[CRITICAL] Hosted Postgres API Capacity Regression (Issue #6973):** A 5.6x latency regression (p95 3.74s → 12.0s) caused by PR #6696. **Fix: PR #6973 is open.**
- **[CRITICAL] libSQL "thread_store_writes" Pathology (Issue #6974):** The libSQL bottleneck suite is failing, with horrendous p95 latencies (37-135s) in tool-heavy cases. This is a direct blocker for nightly CI. No dedicated fix PR is explicitly linked, but it is being worked on.
- **[HIGH] Missing Runtime Context (Issue #6985):** Caused by a change in `system_block` timestamp. **Fix: PR #7001 is open.**
- **[MEDIUM] Structural Build Failure (Issue #6978):** `workflow_dispatch` runs for the reborn tests structurally fail the "Tests (Reborn)" roll-up because a required `critical-mutation` job is skipped. This is a CI logic bug, not a code bug.
- **[LOW] Locale-Dependent CI (PR #6992):** The `comm` command in a CI script was not pinned to a locale, causing failures under UTF-8 collation.
- **[LOW] False Negative Coverage Report (Issue #7006):** The steering-queue error paths are not covered by integration tests, leaving a gap in the coverage gate.

### 6. Feature Requests & Roadmap Signals
- **OrcaRouter Provider (Issue #7009):** A user requested adding OrcaRouter as a built-in LLM provider in `providers.json`, noting it's missing from the list of supported multi-provider gateways. **Prediction:** This is a low-effort, high-value addition likely to be merged in an upcoming patch release.
- **Backend for OOBE Prototype (Issue #6993):** A designer created a UI prototype for an OOBE automation-tasks feature, and this issue tracks wiring it to a real backend. **Prediction:** This signals a roadmap commitment to this onboarding feature, likely for an upcoming minor release.

### 7. User Feedback Summary
- **Performance Discontent:** The most significant pain point is performance, specifically the hosted Postgres regression (Issue #6973) causing 12-second p95 latency, and persistent issues with the libSQL backend (Issue #6974) failing to complete tasks within timeouts.
- **Developer Experience:** Internal friction is visible, with developers investing heavily in fixing CI gates and structural issues (Issues #6963, #6978) rather than shipping new features.
- **Provider Coverage:** Users want broader LLM provider support, specifically requesting OrcaRouter (Issue #7009).
- **Feature Requests:** The request for backend wiring for the OOBE prototype (Issue #6993) suggests a desire for better first-time user onboarding.

### 8. Backlog Watch
Several long-standing, large PRs are in danger of stalling and need attention:

- **Reborn Queued-Message Steering (PR #5981):** This is a massive, high-priority architecture PR. It was created on **July 11** and is still open after 3 weeks. It is the base for another large PR (#5982) on budget approval. This is a **critical blocker** for the entire "Reborn" roadmap.
- **Release Pipeline (PR #5598):** The auto-generated release PR has been open since **July 3** (4 weeks). This blocks new features from being semantically versioned and shipped.
- **Deep-link Register/Install Gateway (PR #6780):** A 700+ line PR from 4 days ago, awaiting review from maintainers (it was re-ported from an older PR).
- **Authenticated Preview Links (PR #6917):** This XL-sized webui fix for opening workspace files in authenticated views has been open for 3 days without comments, suggesting a possible review bottleneck.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-02

## 1. Today's Overview
LobsterAI shows **moderate activity** over the past 24 hours with 7 issues and 2 PRs updated, though **no new releases** were published. The majority of updated items (6 of 7 issues) were **closed as stale**, indicating an ongoing backlog cleanup effort rather than new feature development. All closed issues originated from early April, suggesting the maintainers are systematically addressing older reports or marking them resolved. The two open PRs — one for i18n hardening and one for session rename feedback — remain pending review, with the latter showing more recent activity from mid-July. Overall, the project appears in a **maintenance and stabilization phase**, with no critical regressions reported today.

## 2. Releases
**No new releases** were published in the last 24 hours. The project is likely between release cycles, with no version information to report.

## 3. Project Progress
No PRs were merged or closed today. However, two PRs remain open and represent **significant forward progress** awaiting review:
- **[PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358)** (open, updated 2026-07-18) — Adds localized feedback when session rename fails, fixing issue #670. This addresses a user-facing gap where failed renames provided zero indication.
- **[PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224)** (open, updated 2026-08-01) — Fixes i18n hardcoding in CoworkPromptInput, adds Escape key support for Agent modals, and prevents duplicate delete clicks. This bundles three UX improvements but has been stale for over 4 months.

## 4. Community Hot Topics
**Most discussed items today (all with 2 comments each):**
- **[Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293)** — Custom MCP (Model Context Protocol) for Studio HTTP not usable. Users report only SSE-based MCPs work with the OpenClaw engine. This has 1 upvote, indicating community interest in broader MCP protocol support.
- **[Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296)** — Uploading a 3MB long image breaks the page entirely. The error persists across new tasks, suggesting a state-management issue beyond just payload size.
- **[Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298)** — Model connection test passes, but even two-character prompts trigger "content exceeds model limits" errors. Points to a possible token-counting bug in the frontend rather than an API limitation.

**Underlying need:** Community feedback centers on **reliability and correctness** — MCP compatibility, robust image handling, and accurate token estimation — rather than new features.

## 5. Bugs & Stability
All 6 closed issues were **stale-closed**, not actively fixed today. Ranked by severity:
1. **[Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296)** — *High severity*: 3MB image upload crashes the page and makes subsequent tasks fail persistently. No fix PR identified.
2. **[Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298)** — *Medium severity*: False "content too long" errors for short prompts. Likely a frontend bug in request-size validation.
3. **[Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307)** — *Medium severity*: After closing and reopening a model provider config panel, other providers become read-only. This is a state-reset bug.
4. **[Issue #1305](https://github.com/netease-youdao/LobsterAI/issues/1305)** — *Low severity*: Scheduled task history shows wrong titles after task deletion.
5. **[Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293)** — *Low severity*: Custom MCP not recognized by OpenClaw engine (feature gap, not crash).

No fix PRs are currently in progress for any of these reported bugs.

## 6. Feature Requests & Roadmap Signals
- **[Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302)** — Feature request (closed stale): Line number toggle for code blocks in cowork spaces. Includes detailed expected behavior using react-syntax-highlighter. This developer-experience enhancement may resurface in future versions if community demand persists.
- **[Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293)** — Implicit feature request: Broader MCP protocol support (currently SSE-only in OpenClaw). This could become a roadmap item given the growing adoption of MCP.
- **PR #1224** implies ongoing work on **i18n completeness** and **modal UX standards** (Escape key support), which may hint at broader internationalization polish in the next release.

## 7. User Feedback Summary
User sentiment is **mixed, leaning toward frustration on stability issues**:
- **Pain point — Image handling:** A 3MB long-image upload crashes the entire page, permanently affecting the workspace ("页面返回报错，新开任务会一直报错，整体不可用了"). This is a significant reliability concern for document-heavy workflows.
- **Pain point — Model integration:** Users cannot use custom HTTP-based MCP servers, limiting flexibility for teams with internal tooling.
- **Pain point — Confusing validations:** False "input too long" errors for trivial prompts reduce trust in the system's feedback.
- **Positive signal:** The fact that issues from April are being closed suggests maintainers are actively triaging older backlog, which users may perceive as progress.

## 8. Backlog Watch
- **[PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224)** — Open for **4+ months** (created 2026-04-01) with no maintainer comments. It bundles three well-defined UX/i18n fixes and closes issue #1223, which tracks the same problems. This warrants maintainer attention to either merge or provide feedback.
- **[Issue #1223](https://github.com/netease-youdao/LobsterAI/issues/1223)** — The open issue paired with PR #1224. Still unresolved for English users encountering Chinese text in prompts.
- **[PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358)** — Open for 2 weeks without comments; addresses a real UX gap (no feedback on rename failure). Given it's a small, well-scoped fix, it could likely be merged quickly.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-02

## 1. Today's Overview

Moltis is in a steady maintenance and hardening phase. The project saw no new issues opened or updated in the last 24 hours (zero open/active), and no new releases were cut. However, activity centered on three pull requests, with two merged/closed and one still open, indicating ongoing bug-fixing and feature-completion work. The two merged PRs address significant security/privilege boundaries and introduce a substantial observability/feedback infrastructure layer. The one open PR tackles a session-management UX fix, suggesting the team is moving through a well-defined backlog of quality-of-life improvements. Overall, the project appears healthy with focused, deliberate progress rather than a burst of volatile changes.

## 2. Releases

No new releases were published in the last 24 hours. The project remains on its previously shipped version.

## 3. Project Progress

Two pull requests were merged/closed today, advancing both security hardening and observability:

- **[PR #1170 — fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)** (merged): This is a significant security fix. Previously, channel senders who passed an access allowlist could still reach privileged commands and host tools. The PR separates "access" from "privilege" by introducing an explicit per-account `operators` list, enforcing the boundary across commands, callbacks, queue replay, chat execution, and external interfaces. This closes a privilege-escalation vector.
- **[PR #1174 — Add instrumentation and feedback collection infrastructure](https://github.com/moltis-org/moltis/pull/1174)** (merged): This is a large infrastructure addition. It introduces backend-neutral agent instrumentation, Langfuse v4 export, operational OTLP backends, and end-user reaction feedback. It records immutable completion-only turns with streaming/non-streaming parity, provider failover attribution, cache-aware token usage, and reasoning details. This lays the groundwork for observability and user-driven product improvement.

## 4. Community Hot Topics

There is minimal community discussion activity today. The most notable item is the open PR:

- **[PR #1182 — fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182)** (open, by shixi-li): This PR addresses issue #1132, removing the "main session" guard so users can delete/archive it like any other session. The lack of comments or reactions suggests it is a low-controversy, high-utility fix. The underlying need appears to be user frustration with an unmanageable default session that cannot be cleaned up.

No other issues received comments or reactions in the last 24 hours.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported via issues today. However, the merged PR #1170 directly resolves a security vulnerability (privilege escalation) that could be categorized as high severity, though it was never filed as an issue. The open PR #1182 targets a functional limitation (inability to delete/archive the main session) rather than a crash-level bug. Overall stability signal is positive, with no reported regressions from the two merged PRs within the observation window.

## 6. Feature Requests & Roadmap Signals

While no new feature requests were filed today, the merged infrastructure PR #1174 signals a strong roadmap direction: **observability, telemetry, and user-feedback-driven development**. The addition of Langfuse/OTLP backends and end-user reaction feedback suggests the team is preparing for a phase focused on measuring agent performance and collecting direct user satisfaction signals. This may precede future releases that expose these metrics in dashboards or use them to tune default agent behavior. The open PR #1182 (main session management) is a likely candidate for the next patch release, given it is small, well-scoped, and already has a proposed implementation.

## 7. User Feedback Summary

There is no direct user feedback (comments, reactions) recorded in the last 24 hours. Indirect signals come from the PRs themselves: 
- **Pain point**: Users found the inability to delete/archive the "main" session restrictive (PR #1182 fix).
- **Pain point**: Channel users could inadvertently (or intentionally) access privileged commands despite allowlisting (PR #1170 fix, user safety/security concern).

Given the volume of infrastructure work (instrumentation, feedback collection) being merged, the team is proactively investing in understanding user experience rather than reacting to an influx of complaints. This suggests a proactive, product-driven team culture.

## 8. Backlog Watch

No long-unanswered issues or PRs were identified in the last 24 hours. The only open PR (#1182) is recent (created and updated yesterday) and has not yet been merged, but it does not appear to be stalled — it is waiting on review. The two larger PRs (#1174, #1170) that went through the review cycle were merged, indicating the maintainers are responsive. No senior-maintainer-attention items are currently flagged as at-risk.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-02

## 1. Today's Overview

CoPaw (QwenPaw) is showing a healthy level of development activity with 9 issues and 11 PRs updated in the last 24 hours. The project maintains a strong contributor base, with three first-time contributors submitting PRs (#6620, #6622, #6623) alongside returning contributors like BlackBox-Labs who submitted multiple fixes. The issue tracker shows a mix of bug reports, feature requests, and usage questions, with several reports containing detailed root-cause analysis—indicating a technically sophisticated user community. Notably, all open issues are receiving maintainer attention (each has at least one comment), suggesting a responsive maintainer team. No new releases were published in this period, but the steady flow of fixes suggests the project is in a stabilization phase between releases.

## 2. Releases

No new releases were published in the last 24 hours. The most recent public versions referenced in issues are QwenPaw 2.0.1 (desktop) and AgentScope 2.0.4.post1.

## 3. Project Progress

One PR was closed in the last 24 hours:

- **[#6598 [CLOSED] fix(skills): preserve plugin-sourced skill tags across reconcile cycles (#6537)](https://github.com/agentscope-ai/QwenPaw/pull/6598)** — This fix addresses the bug where skill tags set in the Skill Pool UI disappear after restart for plugin-sourced skills. The root cause was that `reconcile_pool_manifest()` and `reconcile_workspace_manifest()` unconditionally removed manifest entries when the on-disk directory was not found. A replacement PR (#6632) has been submitted to address the same issue, possibly with improvements over the closed version.

## 4. Community Hot Topics

The most active discussions this period revolve around feature requests and usage questions, each with 2 comments:

- **[#6593 [Feature] 增加统一且专业的qwenapw专用清理页面](https://github.com/agentscope-ai/QwenPaw/issues/6593)** — A detailed feature request for a dedicated cleanup page to handle accumulated agent data (auto-memory, tool outputs, backups, session history). The user notes that long-term usage makes QwenPaw "chaotic and bloated," and asks for manual selection + automation options, plus global scope rather than per-agent management. This reflects a real post-production pain point around data lifecycle management.

- **[#6480 [Question] 运行nohup命令agent都会卡住](https://github.com/agentscope-ai/QwenPaw/issues/6480)** — Shell commands that detach via `nohup` or trailing `&` never return to idle, causing the agent to hang. This is a significant usability issue for users automating background processes.

- **[#6568 [Feature] 全局快捷键唤出浮动快速输入框（豆包式）](https://github.com/agentscope-ai/QwenPaw/issues/6568)** — Request for a Raycast/Doubao-style global hotkey that opens a small floating input box. The user notes the current main window (1280×800) is too heavy for quick queries and has already inspected the Tauri console code.

## 5. Bugs & Stability

Seven bugs were reported in the last 24 hours. Ranked by severity:

**High severity:**

- **[#6619 "ToolCallBlock" object has no field "extra_content" — crash in openai_chat_model_compat (qwenpaw 2.0.1 + agentscope 2.0.4.post1)](https://github.com/agentscope-ai/QwenPaw/issues/6619)** — Crashes on every request when Gemini thought_signature relay is used. A fix PR exists: **[#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620)** by first-time contributor namphamdev, which relays thought_signature without mutating strict ToolCallBlock.

- **[#6625 ACP delegate_external_agent sometimes returns "completed without text output" when notifications race the prompt response](https://github.com/agentscope-ai/QwenPaw/issues/6625)** — Race condition causing text loss with external ACP agents. Fix PR: **[#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)** by first-time contributor cocoakekeyu.

**Medium severity:**

- **[#6624 2.0新版本嫩的自动压缩无法触发记忆](https://github.com/agentscope-ai/QwenPaw/issues/6624)** — Auto-compression (Scroll) fails to trigger `summarize_when_compact` memory flow, while manual `/compact` works. Fix PR: **[#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)** — triggers summarize on auto-compression when enabled.

- **[#6626 Real behavior proof gate strips fenced Evidence blocks entirely](https://github.com/agentscope-ai/QwenPaw/issues/6626)** — CI gate rejects PRs whose Evidence section contains only fenced code blocks (porting deviation from openclaw). Affects contributor workflow.

**Lower severity:**

- **[#6480 nohup/& commands hang the agent](https://github.com/agentscope-ai/QwenPaw/issues/6480)** — Shell commands that detach never return to idle; no fix PR yet.
- **[#6632 skill tag persistence fix](https://github.com/agentscope-ai/QwenPaw/pull/6632)** — Closed PR #6598 replaced by this new attempt; issue #6537 remains open.
- **[#6628 scroll context compression injects `[context compressed]` with role=user, causing HTTP 400 for OpenAI-compatible APIs](https://github.com/agentscope-ai/QwenPaw/pull/6628)** — Fix PR exists; root cause is incorrect message role assignment.

**Lowest severity:**

- **[#6630 empty model response silently fails](https://github.com/agentscope-ai/QwenPaw/pull/6630)** — Silent failure on empty model responses; fix PR reports the error to the user.

## 6. Feature Requests & Roadmap Signals

Three distinct signal areas emerge from community requests:

1. **Data Lifecycle Management** ([#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)) — A comprehensive cleanup page with global (not per-agent) data management, automatic pruning, and safe deletion of accumulated agent data. This is a systematic request that could become a major UI feature in the next minor version.

2. **Quick-Access UX** ([#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568)) — Global hotkey + floating mini-input for "随手问一句" (quick random questions). The user has already done code exploration in the Tauri console, suggesting this could be a straightforward addition for the desktop team.

3. **Multi-Agent Discoverability** ([#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)) — The user spent 50+ conversations before discovering that Default Agent doesn't automatically invoke other agents without explicit PROFILE.md instructions. Even after reading the official Multi-Agent docs, the behavior wasn't clear. This signals a gap between documentation and actual behavior that needs either auto-discovery improvements or prominent onboarding.

## 7. User Feedback Summary

- **Strong desire for data hygiene**: Users report QwenPaw becomes "chaotic and bloated" with long-term use (auto-memory, tool outputs, backups). The request for a cleanup page (#6593) suggests current manual deletion is insufficient and risky.

- **Frustration with hidden multi-agent behavior**: One user lost "a lot of invalid debugging time" because Default Agent doesn't auto-invoke other agents (#6621). The docs don't clearly state this limitation — a documentation + UX discovery failure.

- **Technical sophistication**: Users are performing root-cause analysis and even surveying the Tauri console code before filing issues (#6568), indicating a highly technical community that contributes constructively.

- **Nohup blocking is a real blocker**: The issue #6480 affects real automation workflows. Users need detached processes; current hang behavior forces workarounds.

## 8. Backlog Watch

- **[#6480 nohup/& detached processes never return to idle](https://github.com/agentscope-ai/QwenPaw/issues/6480)** — Open since 2026-07-26 (7 days), 2 comments, no fix PR yet despite being a clear functional bug for shell usage.

- **[#6302 feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — Open since 2026-07-21 (12 days) with no comments yet. Large architectural PR addressing #6167; needs maintainer review.

- **[#5490 feat(console): show tool-card images inline and add gallery navigation](https://github.com/agentscope-ai/QwenPaw/pull/5490)** — Open since 2026-06-24 (39 days), no comments. UI/UX improvement that replaces collapsed `<details>` image rendering with inline thumbnails and gallery navigation; pending maintainer review for a significant console UX improvement.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-08-02

---

## 1. Today's Overview

ZeroClaw is in a phase of intense architectural RFC activity, with a significant backlog of high-risk design proposals awaiting maintainer decisions. The project shows **very high open workload** with 50 issues and 50 PRs updated in the last 24 hours, but **zero merged PRs** today, indicating a bottleneck in review/merge capacity. The most pressing themes are security hardening (WhatsApp allowlist bypass, credential/key management), memory architecture decoupling, and interoperability (OpenAI Chat Completions adapter, A2A outbound client). A notable cluster of work comes from a single contributor (IftekharUddin) on an eval harness stack, suggesting a major testing infrastructure initiative in flight. Overall, the project is healthy but **review-constrained** — many large, high-risk PRs are waiting on `needs-author-action` or maintainer review.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent activity points to `v0.8.4` being prepared (see PR #9648 "chore(release): bump version to v0.8.4"), which suggests a patch release is imminent. The last known release remains `v0.8.2` (referenced in A2A context) with `v0.9.0` indicated as the next major milestone with auth/security breaking changes (tracker #7432).

---

## 3. Project Progress

**No PRs were merged or closed today** (0 merged/closed out of 50 updated). This suggests either heavy review load or CI/maintainer capacity constraints.

However, notable PR activity suggests advanced, large-scale work in progress:

- **[#9220, #9221, #9222, #9223, #9224, #9225, #9248]** — A series of stacked PRs by IftekharUddin building out an eval harness: run receipts, baseline regression gating, LLM-judge grading, JUnit XML output, memory seeding/assertions, and regression seeding from tracker failures. This is a substantial testing infrastructure effort likely tied to #7065.
- **[#9091]** — Adds native macOS, Linux X11, and Windows drivers for `computer_use` tool, addressing desktop control capability (relevant to RFC #6909).
- **[#9319]** — Refactors the turn engine's tool registry into a sealed `ScopedToolRegistry` type to better control tool access (relevant to security pipeline RFCs).
- **[#9080]** — Adds secure remote transport via inner mutual TLS and browser enrollment frontdoor for relay connections.
- **[#9571]** — Removes the WATI channel entirely, a cleanup consolidation.
- **[#9648]** — Version bump to v0.8.4 with release surface regeneration.

---

## 4. Community Hot Topics

The most active discussions center on architecture and security, with consistent engagement over time:

| Issue | Title | Comments | Theme |
|-------|-------|----------|-------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | Separate conversation history from agent-curated long-term memory | 16 | Memory architecture |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | OpenAI Chat Completions compatibility adapter | 13 | Interoperability (Open WebUI, LobeChat, etc.) |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | Abstract a `KeySource` trait for master-key material | 13 | Security/secrets management |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | Cross-turn conversation correlation to OTel export | 12 | Observability |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Per-execution confirmation tier for high-risk shell commands | 11 | Security/tool policy |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | Separate authoritative memory storage from enrichment connectors | 10 | Memory architecture |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | A2A outbound client (A2ATool) | 10 | Multi-agent interop |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Decouple memory lifecycle policy from storage backends | 9 | Memory architecture |

**Analysis:** The community strongly desires (a) a **clear memory architecture** that distinguishes history from curated long-term memory, (b) **broad client compatibility** via OpenAI-compatible APIs, and (c) **defense-in-depth security** around shell commands, secret storage, and inbound authentication. The A2A conversation indicates growing interest in multi-agent workflows.

---

## 5. Bugs & Stability

**S1 (Critical/Security):**

- **[#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)** — **WhatsApp Web mode = business answers every DM and group** despite a locked-down config. Empty `allowed_groups` permits all groups. Fix RFC drafted: [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) "Treat empty allowed_groups as permit-none" (in-progress). **High severity.**

**S2 (Degraded Behavior):**

- **[#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417)** — WhatsApp Cloud `request_approval` **leaks a live approval token** on send failure or cancellation. No fix PR yet. **High risk.**

**S1-adjacent (Functional, marked p1):**

- **[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)** — CLI-created cron jobs **hardcode delivery mode to None**, silently discarding output. In-progress, accepted.

**S3 (Minor):**

- **[#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)** — Nextcloud Talk uses wrong bot message API endpoint (URL format issue). In-progress.

**No new bugs reported in the last 24h** — the above are carried-over. No crash/regression reports today.

---

## 6. Feature Requests & Roadmap Signals

Strong next-version (v0.9.0) signals from recent RFCs:

1. **OpenAI Chat Completions adapter** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) — High demand, likely to land soon to reach ecosystem clients (Open WebUI, LangChain, etc.). **Prediction: In v0.9.0 if accepted.**
2. **A2A outbound client** ([#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)) — Complements existing A2AServer; enables proactive inter-agent calls. **Moderate likelihood for v0.9.0.**
3. **Memory architecture overhaul** ([#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048), [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850), [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)) — Three overlapping RFCs on separating history vs. long-term memory, decoupling lifecycle policy. **Likely coalesced into one design for v0.9.0.**
4. **OpenRouter prompt caching** ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)) — New (Aug 1), cost-saving via stable `session_id`. **Quick win, could land in v0.8.4.**
5. **Security pipeline RFCs** ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) pluggable auth, [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) decision pipeline, [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) UX defaults, [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) sandbox policy) — Multiple RFCs from the same author (singlerider) with revision histories. **Core of v0.9.0 security milestone.**

---

## 7. User Feedback Summary

Real user pain points expressed through issues:

- **"Locked-down config behaves fully open"** (belumume, #9348) — trust in config semantics is a major concern; users expect fail-safe defaults (empty allowlist = deny all).
- **"CLI cron silently discards output"** (AngryPacifist, #9340) — silent output loss undermines trust; run recorded as `ok` despite delivering nothing.
- **"Provider errors are opaque"** (wm0018, PR #9056) — generic "All providers failed" doesn't help debug routine problems (local server down, bad key).
- **"OpenRouter chat is unnecessarily expensive"** (OskarSwierad, #9631) — real cost pressure driving request for session caching.
- **"Slack turns look stalled without progress"** (abhinavmathur-atlan, PR #8985) — UX need for visible lifecycle progress during long agent runs.
- **"Skills consume prompt context eagerly"** (JordanTheJet, PR #8313) — context budget concern; compact injection is welcomed.

Overall sentiment is **constructive and feature-driven**; contributors are actively proposing RFCs and implementations rather than just complaining.

---

## 8. Backlog Watch

Items needing maintainer attention (long-open, high-risk, no clear action):

| Item | Age | Issue | Why it matters |
|------|-----|-------|----------------|
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) Nextcloud Talk bot API (S3) | ~3 months | Issue | Confirmed bug, accepted, in-progress but stalled |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Shell command approval tiers (p1) | ~2 months | RFC | Needs maintainer review; security-critical design |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) Per-model capability & context window (p1) | ~2 months | RFC | Needs maintainer review; touches config & UI |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) Pluggable inbound auth (p1) | ~2 months | RFC (Rev 5) | Core security milestone; in-progress but needs review |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) Unified capability catalog tracker | ~3 months | Tracker | Long-running roadmap; slow progress |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) Retire aardvark-sys crate | ~1.5 months | RFC | Needs maintainer review; cleanup consolidation |

**Risk flag:** 7 PRs are marked `stale-candidate` or `needs-author-action` with high risk (e.g., #8546, #8576, #8655, #9056), suggesting contributor momentum may be fading on those items. Maintainer decisions on the RFC decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) will unblock several threads.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*