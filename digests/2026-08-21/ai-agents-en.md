# OpenClaw Ecosystem Digest 2026-08-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-21 01:22 UTC

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

Based on the provided GitHub data for OpenClaw on 2026-08-21, here is the project digest:

---

## OpenClaw Project Digest: 2026-08-21

### 1. Today's Overview
OpenClaw is exhibiting a high level of activity with a large volume of issues and pull requests being updated, indicating a robust and actively maintained project. The issue tracker is heavily backlogged, with a significant majority of the 500 updated issues remaining open, suggesting maintainers are prioritizing triage over closure. The project is in a beta validation cycle (`v2026.8.1-beta.2`), with several P0 and P1 bugs reported against both recent stable and beta releases. The sheer number of open items, many marked with `clawsweeper-recovery-stuck`, indicates ongoing efforts to triage and reproduce a large influx of community bug reports.

### 2. Releases
No new releases were published in the last 24 hours. However, the project is actively validating a beta release, `v2026.8.1-beta.2`, with a dedicated open issue for the process. Several P1 bugs have been reported against this beta, suggesting the release is still in a hardening phase.

### 3. Project Progress
Despite a large number of open PRs, several important fixes were merged or closed today, demonstrating forward progress.
- **Security & Policy:** The `feat(security): require acknowledgement for install policy warnings` PR [#116489](https://openclaw/openclaw/issues/116489) was closed, advancing the project's security posture by allowing operators to review and acknowledge potentially suspicious installs.
- **Setup & Repair:** The `fix(setup): preserve chat handoff during inference repair` PR [#109938](https://openclaw/openclaw/issues/109938) was closed, fixing a bug in the interactive setup flow.
- **Channel Reliability:** A fix to ensure delivery after preview cleanup for Discord, Slack, and Mattermost was closed in PR [#126922](https://openclaw/openclaw/issues/126922), resolving an issue that could cause false failure reports.
- **User Interface:** The `fix(models): keep Claude CLI OAuth available in Control UI` PR [#125471](https://openclaw/openclaw/issues/125471) was closed, addressing a critical authentication issue in the web UI.
- **Core Features:** A significant new feature proposal, `feat: centralized filename encoding utility` [#48788](https://openclaw/openclaw/issues/48788), is a top-activity issue, indicating community demand for a more robust architectural solution to filename handling across multiple channels.

### 4. Community Hot Topics
The most active discussions highlight significant pain points around cost control, complex bugs, and release reliability.
- **Cost Governance and Complex Bugs:** The top-trending issues are not simple feature requests but complex, systemic problems. `[Feature]: Per-agent cost budget enforcement at the gateway level` [#42475](https://openclaw/openclaw/issues/42475) (23 comments) asks for operational controls to prevent runaway spending. Two other high-comment issues involve deep infrastructure problems: a P0 crash-loop on startup after update [#108435](https://openclaw/openclaw/issues/108435) (14 comments, 3 👍) and a complex regression with Google Vertex `gemini-3.1-pro-preview` [#38327](https://openclaw/openclaw/issues/38327) (14 comments). These top issues show the community is most engaged when facing reliability or governance concerns that threaten production use.
- **Release Validation:** The `Release validation: v2026.8.1-beta.2` issue [#125626](https://openclaw/openclaw/issues/125626) with 17 comments demonstrates an active community participation in the beta testing process.

### 5. Bugs & Stability
The bug tracker is dominated by P0 and P1 regressions and reliability issues, indicating significant churn and potential instability across recent versions.
- **Critical (P0):**
    - **Gateway Startup Failure:** A critical regression causing a crash-loop on startup after updating to 2026.7.1 [#108435](https://openclaw/openclaw/issues/108435).
    - **Data Integrity:** A P0 bug where file tools strip leading `@` from paths, leading to silent writes/deletes to the wrong files [#119270](https://openclaw/openclaw/issues/119270).
    - **Silent Message Loss:** Another P0 issue where gateway holds stale module paths after updates, silently dropping inbound messages [#92241](https://openclaw/openclaw/issues/92241).
- **High (P1):**
    - **Message Delivery:** Several P1 bugs report silent message loss across different channels, including Telegram stuck in `send_attempt_started` [#126246](https://openclaw/openclaw/issues/126246) and WhatsApp LID-addressed chats being dropped [#119475](https://openclaw/openclaw/issues/119475).
    - **Agent Functionality:** Critical issues include image attachments failing for named agents [#123273](https://openclaw/openclaw/issues/123273), subagent spawn failures with vLLM [#124284](https://openclaw/openclaw/issues/124284), and a session-state bug where the usage-cost refresh lock can freeze permanently in containers [#114234](https://openclaw/openclaw/issues/114234).
    - **Reliability:** A P1 issue describes how the `active-memory` plugin can block replies and overload gateway boot on multi-agent setups [#72015](https://openclaw/openclaw/issues/72015).

The volume of these severe bugs indicates a challenging period for stability, though the quick closure of some PRs today shows the team is actively addressing them.

### 6. Feature Requests & Roadmap Signals
Beyond bug fixes, the community is requesting significant features that point toward better operational control and developer ergonomics.
- **Budget Enforcement:** Per-agent cost budgets enforced at the gateway level [#42475](https://openclaw/openclaw/issues/42475) is a highly-requested feature for operators, making it a strong candidate for an upcoming release.
- **Provider Failover Logic:** The request for `feat: provider fallback by failure class` [#47910](https://openclaw/openclaw/issues/47910) suggests a desire for smarter, context-aware provider management.
- **Developer Experience & UI:** Requests like configurable upload limits in the UI [#71142](https://openclaw/openclaw/issues/71142) and confirmation steps for `/new` and `/reset` [#45564](https://openclaw/openclaw/issues/45564) highlight a focus on improving user-friendliness and preventing data loss.

### 7. User Feedback Summary
A clear sentiment emerges from user-reported issues: while the platform is powerful, recent updates have introduced a significant number of regressions and bugs that impact core functionality and trust.
- **Pain Points:** Users are frustrated by silent failures, such as messages being dropped without user-visible errors [#112259](https://openclaw/openclaw/issues/112259), duplicated assistant replies [#124751](https://openclaw/openclaw/issues/124751), and a lack of clear errors when context is too large [#58957](https://openclaw/openclaw/issues/58957).
- **Reliability Concerns:** The number of reports concerning data integrity (SQLite snapshot issues [#113306](https://openclaw/openclaw/issues/113306)) and state corruption (tasks registry restore failure [#71689](https://openclaw/openclaw/issues/71689)) is concerning. Users expect their conversation history and task states to be durable.
- **Positive Engagement:** Despite the bugs, users are actively involved in triage, reporting issues with detailed repro steps and participating in beta validation [#125626](https://openclaw/openclaw/issues/125626), showing a strong, technically-savvy community.

### 8. Backlog Watch
A large number of issues remain open and have been flagged with `clawsweeper-recovery-stuck`, suggesting the maintainers' automated triage is struggling to make progress on them. These are critical to watch as they represent unresolved bugs that continue to affect users.
- **Unresolved P0/P1 Regressions:** Several severe regressions from earlier in the year (March, April, May) remain open without a clear fix PR, such as `[Bug]: Memory management is in chaos` [#43747](https://openclaw/openclaw/issues/43747) and the Google Vertex issue [#38327](https://openclaw/openclaw/issues/38327). These long-standing systemic issues could be a source of user attrition.
- **Stale Critical Bugs:** The P0 gateway startup failure from July [#108435](https://openclaw/openclaw/issues/108435) and the P0 file-tool path bug from August [#119270](https://openclaw/openclaw/issues/119270) remain open, which is a significant risk for users on those versions. These should be prioritized for immediate fixes.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-21

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is in a **hyper-active stabilization phase**, characterized by rapid iteration on reliability, security, and extensibility. Projects are moving beyond basic chat functionality toward production-grade concerns: cost governance, multi-provider resilience, persistent sandboxes, and plugin architectures. There is a clear bifurcation between **general-purpose agent frameworks** (OpenClaw, ZeroClaw, IronClaw) and **specialized assistants** (NanoBot, PicoClaw, Moltis) targeting specific workflows or channels. Community engagement is technical and sophisticated — users are filing CWE-classified security reports and participating in architectural RFCs, indicating a mature developer-user base. The most significant pain points across all projects are **silent message loss, update-induced regressions, and configuration complexity** — suggesting that reliability, not features, is the current competitive battleground.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Status | Health Score* |
|---------|----------------------|-------------------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | (high) | Several | Beta validation (v2026.8.1-beta.2) | ⚠️ **Challenged** — many P0/P1 bugs, heavy backlog |
| **NanoBot** | 5 | 29 | 12 | None | ✅ **Healthy** — responsive maintainers, low backlog |
| **Hermes Agent** | 50 | 50 | ~10 | v0.20.4 (stale) | ⚠️ **Stabilizing** — data-loss bugs, Windows install issues |
| **PicoClaw** | 3 | 9 | 4 (pending) | v0.3.1 (stale) | ✅ **Healthy** — low incoming bugs, steady progress |
| **NanoClaw** | 3 | 50 | 15 | Pre-release window | ✅ **Healthy** — strong review discipline |
| **NullClaw** | 0 | 0 | 0 | — | ⚪ Inactive |
| **IronClaw** | 21 | 33 | 14 | None (pre-v1.4.0) | ✅ **Healthy** — fast CI recovery, strong engineering |
| **LobsterAI** | 2 | 7 | 6 | None | ✅ **Healthy** — UX polish phase |
| **TinyClaw** | 0 | 0 | 0 | — | ⚪ Inactive |
| **Moltis** | 1 | 8 | 4 | **20260820.01** (shipped) | ✅ **Healthy** — security-focused, responsive |
| **CoPaw** | 28 | 50 | 28 | **v2.1.1-beta.1** (shipped) | ✅ **Healthy** — fast-moving, autonomy bug watch |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ Inactive |
| **ZeroClaw** | 50 | 50 | 2 | None | ⚠️ **Review-bottlenecked** — high churn, low merges |

*Health score is a qualitative assessment based on bug severity, maintainer responsiveness, merge velocity, and backlog health.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest community engagement** — 500 issues updated in 24h dwarfs all peers, indicating the widest user base and the most active ecosystem.
- **Broad channel support** — Discord, Slack, Mattermost, Telegram, WhatsApp, with deep integration fixes landing consistently.
- **Rapid beta validation** — Active community participation in v2026.8.1-beta.2, signaling a disciplined release process.
- **Gateway-level architecture** — The gateway concept (message routing, provider abstraction) is more mature than peers; its per-agent cost budget and provider failover features are roadmap differentiators.

**Technical approach differences:**
- OpenClaw's **gateway-centric design** contrasts with NanoBot's **provider-pluggable Python framework** and CoPaw's **desktop-first console**. It treats channels as first-class citizens, which is evident in the granular per-channel fixes (Telegram LID, WhatsApp session isolation).
- The **`clawsweeper` automated triage system** is unique — no other project has an automated issue-recovery mechanism, though its struggle with 500 open items suggests it's both a strength and a bottleneck.

**Community size comparison:**
- OpenClaw's issue volume (500/day) is **10x NanoClaw and ZeroClaw** (50/day each), **100x NanoBot** (5/day), and effectively incomparable to PicoClaw (3/day). This is the clear leader in raw community engagement, but it's a double-edged sword — the backlog is the largest, and the P0/P1 count is concerning.

**Verdict:** OpenClaw is the **category leader by adoption** but is currently **losing the reliability war** — its bug count and severity are the highest in the ecosystem. Its position is strong, but a failure to clear the P0/P1 backlog (especially the P0 startup crash and file-tool path bug) could erode user trust.

---

## 4. Shared Technical Focus Areas

The following requirements appear **concurrently across multiple projects**, indicating strong market demand:

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Provider Reliability & Failover** | OpenClaw, NanoBot, Hermes, IronClaw, CoPaw | Mid-stream error retry logic (NanoBot #5454), provider fallback by failure class (OpenClaw #47910), automatic network recovery (CoPaw #6932), Vertex AI 404 handling (Hermes #32678) |
| **Update-Induced Regressions** | OpenClaw, Hermes, NanoClaw, ZeroClaw | Windows updates deleting apps (Hermes #83846), gateway holding stale module paths (OpenClaw #92241), installer crashes after version bumps |
| **Cost Governance** | OpenClaw, CoPaw, NanoClaw | Per-agent budget enforcement (OpenClaw #42475), token usage tracking (NanoClaw #3270), automatic model routing for cost optimization (CoPaw #6436) |
| **Streaming Stability** | NanoBot, OpenClaw, CoPaw | Retry after partial content, stream drop handling, mid-stream disconnect recovery |
| **Persistent Sandbox / Environment** | IronClaw, ZeroClaw, OpenClaw | Per-user persistent workspaces (IronClaw #7732), ephemeral swarms (ZeroClaw #10025), workspace-scoped tools (CoPaw #7182) |
| **Security Hardening** | Moltis, ZeroClaw, CoPaw, NanoClaw | CWE-306 fix (Moltis #1216), master key permissions (CoPaw #7119), shell command policy (ZeroClaw #7155), supply-chain pinning (Moltis #1221) |
| **Windows Platform Support** | Hermes, Moltis, CoPaw, ZeroClaw | Self-update reliability, shell hooks (Moltis #468), path encoding (OpenClaw #48788) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture |
|---------|--------------|-------------|--------------|
| **OpenClaw** | Universal gateway with broad channel support | Power users deploying agents across multiple chat platforms | Gateway-centric, plugin-based, channel-first |
| **NanoBot** | Python framework with extensive provider support | Developers building custom agent workflows | Provider-pluggable, lightweight, MCP-integrated |
| **Hermes Agent** | Desktop app + skills hub + Kanban integration | Knowledge workers managing tasks in a UI | Desktop-first, SQLite-backed, skills ecosystem |
| **PicoClaw** | Lightweight CLI + web UI, Go-based | Developers wanting a fast, minimal agent | Single-binary Go, CLI-first, multi-agent framework emerging |
| **NanoClaw** | Skill-based ecosystem for nano-agents | Users who install "skills" like apps | Skills-installable, channel adapters, OAuth flows |
| **IronClaw** | Rust-based agent with WebUI design system | Engineers needing high-performance agent + clean UI | Rust core, sandboxed execution, hooks lifecycle |
| **LobsterAI** | Desktop app for content generation & IM | Enterprise users (NetEase Youdao) | Electron + Python engine, productivity-focused |
| **Moltis** | Multi-channel gateway with security focus | Enterprises deploying branded agents | Rust-based gateway, vault encryption, WhatsApp-first |
| **CoPaw** | Desktop console with Chinese ecosystem support | Power users in China (QQ, DingTalk) | Electron console, Qwen-centric, ReMe memory |
| **ZeroClaw** | Extensible agent framework with WASM plugins | Enterprise integrators needing custom security postures | Rust core, WASM plugin sandbox, RFC-driven design |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (high velocity, responsive maintainers):**
- **NanoClaw** — 15 PRs merged in 24h, core-team PR stacks with clear labels, fast triage.
- **CoPaw** — 28 PRs merged, shipped a beta release, 13 issues closed. Very high energy.
- **IronClaw** — 14 PRs merged, CI fixed within hours of toolchain breakage, disciplined engineering.

**Tier 2 — Stabilizing / Consolidating (active but focused on hardening):**
- **NanoBot** — 12 PRs merged, significant stability fixes in flight, low bug volume.
- **Moltis** — Security-focused release shipped, WhatsApp issues resolved, 3-week security response time.
- **Hermes Agent** — High issue volume but actively fixing data-loss bugs; Windows reliability is a known gap.
- **PicoClaw** — Steady, low-bug environment; multi-agent framework on the cusp of merging.

**Tier 3 — High Churn / Bottlenecked:**
- **ZeroClaw** — Massive RFC and PR activity (50/day) but only 2 PRs merged; `do-not-merge` labels on critical security work. Risk of review bottleneck stalling momentum.
- **OpenClaw** — High activity (500 issues/day) but P0/P1 bugs accumulating; the backlog and `clawsweeper-recovery-stuck` flags indicate triage struggling to keep pace.

**Tier 4 — Low Engagement:**
- **LobsterAI** — Moderate activity, UX polish phase, no major events.
- **NullClaw, TinyClaw, ZeptoClaw** — Inactive; no community presence.

---

## 7. Trend Signals

The following industry trends emerge from cross-project community feedback, valuable for AI agent developers:

### 1. Reliability is the new feature
Across all projects, users are **not asking for new features — they're demanding that existing ones stop failing.** Silent message drops, mid-stream disconnects, and update-caused regressions are the top complaints. **Actionable signal:** Investment in retry logic, idempotent operations, and transactional update mechanisms will yield outsized retention returns.

### 2. Enterprise adoption is driving security hardening
CWE-classified reports, supply-chain pinning, sandbox egress policy, and shell command confirmation tiers are all appearing simultaneously. **Signal:** Enterprise buyers are evaluating open-source agents; security posture is a competitive differentiator. The "secure-by-default" movement (ZeroClaw's WASM plugin sandbox, CoPaw's master key permissions) will become table stakes.

### 3. Cost observability is a top-3 community ask
Per-agent budgets (OpenClaw), token usage tracking (NanoClaw, CoPaw), and automatic model routing are all gaining traction. **Signal:** As agents become production workloads, CFOs want spending limits. Build cost telemetry and enforcement into agent frameworks from day one.

### 4. Windows support is the Achilles' heel
Every major project has Windows-specific bugs: update failures, path corruption, shell incompatibilities. **Signal:** This is a massive opportunity for differentiation. A project that delivers a first-class, reliable Windows desktop experience will capture the enterprise long-tail.

### 5. Multi-agent orchestration is the next battleground
PicoClaw's multi-agent framework, OpenClaw's subagent (with bugs), and ZeroClaw's ephemeral swarms all point to the same direction: **agents coordinating with agents.** The demand for dynamic model override and per-task routing indicates users want heterogeneous agent teams, not just bigger single models.

### 6. Voice and real-time interaction is emerging
ZeroClaw's Gemini Live speech-to-speech RFC and CoPaw's voice features suggest the next major UX shift. **Signal:** Agent frameworks should abstract audio I/O early; retrofitting it later is costly.

### 7. The "agent-as-a-service" economy is nascent
NanoBot's closed paid-scan MCP integration and Moltis's branded multi-bot deployments hint at monetization and commercial embedding. **Signal:** Frameworks that support multi-tenant, billed, or white-labeled agents will serve a future marketplace.

---

**Bottom line for developers:** Build for reliability first, observe costs from the start, support Windows properly, and architect for multi-agent orchestration — these are the cross-project requirements that will define the next 12 months of AI agent development.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-08-21

---

## 1. Today's Overview

NanoBot is in a robust development cycle with high community engagement. Over the past 24 hours, the project saw 5 issues updated (3 open, 2 closed) and 29 pull requests updated (17 open, 12 merged/closed), indicating a healthy triage and contribution pipeline. The focus areas are clearly stability—with multiple bug fixes targeting provider error handling, stream resilience, and channel dispatch—and connectivity, driven by a prominent feature request for a native Google Vertex AI provider. No new releases were published in this window, but the volume of merged PRs suggests a significant batch of improvements is being prepared for the next version.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

The repository saw substantial merging activity, with 12 PRs merged/closed. Key advances and fixes that landed include:

- **[refactor(webui): unify floating controls](#5240)** — Merged. Centralizes shared floating-surface styling across command menus, rich panels, and searchable choices, standardizing selected and destructive states without migrating ordinary menus.
- **[feat(tui): print resume command on exit](#5452)** — Merged. Improves session management UX by printing a ready-to-run `nanobot agent --session websocket:<id>` command after the TUI terminal is restored. Includes renderer and terminal smoke tests.
- **[fix(cli): workaround 'Event loop is closed' on linux (issue #550)](#1203)** — Merged. Resolves the long-standing `RuntimeError: Event loop is closed` that surfaced on Linux (Python 3.11) during shutdown, addressing a community-reported issue from issue #550.

Notably absent from today's merged set were the major provider-robustness fixes (e.g., fallback policy for raised errors, Codex streaming retries), which remain in the open review queue, signaling active iteration on these critical areas.

---

## 4. Community Hot Topics

The most active and consequential discussions this week revolve around provider reliability and architectural expansion:

- **[PR #5420: feat(webui): add turn observability and safe recovery](https://github.com/HKUDS/nanobot/pull/5420)** — A comprehensive WebUI feature that projects each user turn into a single answer surface, retains ordered reasoning/tool activity, and provides safe recovery for interrupted work. Its size and scope have kept it in review since Aug 18, indicating it is a substantial, high-impact change for UX and debugging.

- **[Issue #5454: Streaming providers: mid-stream server_error skips retry once content has streamed](https://github.com/HKUDS/nanobot/issues/5454)** — This bug report highlights a sharp edge case in the retry logic for streaming providers (specifically OpenAI Codex): if a `server_error` arrives after any content has streamed, the retry is skipped. A fix PR (#5455) was submitted within hours, showing an aggressive response to streaming reliability.

- **[Issue #5459: Feature request: Add native Google Vertex AI provider for Claude models](https://github.com/HKUDS/nanobot/issues/5459)** — Filed just yesterday, this is the top new feature ask. The user (xuayan-nokia) provides a clear rationale: while NanoBot ships many providers (Anthropic direct, OpenAI, Bedrock, Copilot, etc.), enterprises increasingly procure Claude via Google Vertex AI, creating a significant adoption gap.

**Underlying needs analysis:** The community is pushing for (1) enterprise-grade infrastructure paths (Vertex AI) and (2) bulletproof streaming behavior for production workloads. The observability PR (#5420) also points toward users requiring deeper operational visibility into their agent turns.

---

## 5. Bugs & Stability

Several bugs were reported, with fixes already in flight for most. Ranked by severity:

1.  **Mid-stream server_error skips retry (Issue #5454)** — *High severity.* Streaming responses can silently fail mid-generation without a retry, degrading reliability for conversational workloads. A fix (**PR #5455**) adds `"server_error"` to `_TRANSIENT_ERROR_MARKERS`, but the PR scope is limited to failures before the first delta, leaving a partial gap. *Status: Fix proposed, in review.*

2.  **OAuth login failure in Docker (Issue #5444)** — *High severity for Docker users.* The `localhost` redirect flow fails in a containerized environment, blocking OpenAI OAuth integration entirely. *Status: Open, no fix PR yet; likely requires documentation or code change for host networking/redirect URI handling.*

3.  **ChannelManager outbound dispatch halt (PR #5457)** — *High severity.* An unexpected exception in processing one outbound message stops the entire background dispatch task, causing all subsequent messages to be silently dropped until process restart. The fix scopes the exception boundary to individual message processing. *Status: Fix proposed, in review.*

4.  **Legacy `socks://` proxy URL support (Issue #5425)** — *Medium severity.* Custom OpenAI-compatible providers fail pre-request if the proxy URL uses the common `socks://` alias. *Status: Closed—indicates either a fix was merged or a workaround was provided.*

5.  **Matrix error logs missing context (PR #5458)** — *Low severity.* Loguru `%s` placeholders prevented filenames/room IDs from appearing in error diagnostics, hampering debugging. *Status: Fix proposed, in review.*

6.  **Background gateway output block-buffered (PR #5412)** — *Low severity.* Startup logs from background gateway processes are delayed or lost due to Python block-buffering on non-TTY outputs. *Status: Fix proposed (flush timing), in review.*

---

## 6. Feature Requests & Roadmap Signals

- **Native Google Vertex AI Provider (Issue #5459)** — The clearest roadmap signal. Given the existing breadth of providers (OpenAI, Bedrock, Copilot, xAI), adding Vertex AI is the natural next enterprise-integration step. Expect this to be prioritized for the next minor release; it is a strong candidate for community contribution as well.

- **Paid Security-Scan MCP Integration (Issue #5447)** — This was closed, suggesting the maintainers declined or deferred this integration. However, the underlying signal is that users are exploring agentic revenue and external service monetization (Solana x402 micropayments). NanoBot may not chase this path now, but the "agent-as-service" use case could influence future MCP billing/credential abstractions.

- **WebUI Turn Observability (PR #5420)** — Merging this will set a baseline for richer UX. Expect follow-ups: usage cost breakdowns, history export, and turn-replay features.

---

## 7. User Feedback Summary

- **Pain Point — Retry reliability with streaming:** Users (akinolur) are hitting real-world faults with OpenAI Codex streaming; the current retry logic is too narrow. This is a production-grade reliability complaint, and the community visibility is driving rapid iteration.

- **Pain Point — Docker OAuth flows:** Bennett-Yang's report signals friction for containerized deployments. The redirect URL `localhost:1455` works on a host but breaks in a container, echoing a common open-source deployment hurdle.

- **Satisfaction Signals:** The fast turnaround on bug reports (e.g., #5454 → #5455 within hours) demonstrates a responsive maintainer team. The breadth of contributor activity (multiple first-time authors like morandot, Shizoqua) indicates low onboarding friction and healthy community citizenship.

- **Use Case Expansion:** Users are actively integrating NanoBot into diverse ecosystems: Matrix (PR #5458), Telegram stickers (PR #5387), SenseNova (PR #5453), and now enterprise clouds (Vertex AI). The project is being used as a universal agent hub, not just a personal assistant.

---

## 8. Backlog Watch

Several long-running PRs are flagged with `[conflict]` labels and need maintainer attention to resolve merge conflicts or make a final decision:

- **[PR #5179: Migrate MCP integration to SDK v2 with legacy compatibility](https://github.com/HKUDS/nanobot/pull/5179)** — Open since Jul 30, flagged `priority: p1`. This is a major architectural migration with a competing draft (#5180). The sheer size and risk are keeping it in limbo; a maintainer decision is overdue to avoid staleness.

- **[PR #5180: chore(mcp): evaluate minimal SDK v2 migration](https://github.com/HKUDS/nanobot/pull/5180)** — The evaluation counterpart to #5179. Both branches risk divergent edits to the same subsystem.

- **[PR #5338: fix(mcp): preserve credentials when OAuth store read fails](https://github.com/HKUDS/nanobot/pull/5338)** — Open since Aug 11, with `[conflict]`. This is a data-safety fix (preventing credential overwrites); prolonged conflicts here could lead to subtle credential-loss bugs.

- **[PR #5379: fix(memory): preserve full consolidation input](https://github.com/HKUDS/nanobot/pull/5379)** — Open since Aug 13, with `[conflict]`. Memory consolidation is core to long-running agent behavior; the fixes need to merge soon to avoid regression risk.

---

**Overall Health Assessment:** NanoBot is a vibrant, well-maintained project with a healthy influx of community contributions. The maintainers are responsive, and the rate of merged PRs (12 in 24h) is strong. The primary risk areas are the accumulating `[conflict]`-labeled PRs in the MCP subsystem and the unresolved Docker OAuth issue. There is no release in flight, but the next version will likely bundle significant stability fixes (streaming retries, channel dispatch resilience) and possibly the Vertex AI provider.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-21

## 1. Today's Overview

Hermes Agent is in a period of intense, healthy maintenance activity. The project saw a high volume of issue and PR updates (50 each in the last 24 hours), indicating an active maintainer community and a steady stream of user engagement. The majority of activity centers on stabilizing the installer, update mechanisms, and desktop application across platforms, particularly Windows, alongside a wave of fixes for the Kanban/cron subsystem. While there were **no new releases** today, the rapid merge cycle of bug-fix PRs suggests a forthcoming patch release is being assembled. Overall project health appears robust with a strong triage and response rate, though a cluster of long-standing, unresolved issues around session-state persistence and SQLite corruption remains a key stability focus.

## 2. Releases

**No new releases were cut today.** The most recent version referenced across issues is **v0.20.4 (2026.8.18)**.

## 3. Project Progress

Activity on the main branch was focused on stabilization, with several critical bug fixes merged today. Key PRs that advanced the codebase include:

- **`fix(logging): recover from POSIX rollover backup races`** ([#91210](https://github.com/NousResearch/hermes-agent/pull/91210)): Addresses the long-standing multi-process logging race condition documented in issue #27649, preventing `FileNotFoundError` crashes during log rotation.
- **`fix(agent): ignore null errors in structured tool results`** ([#91209](https://github.com/NousResearch/hermes-agent/pull/91209)): Fixes issue #91166, where a `null` error field in a tool result would trigger a fallback text parser, discarding valid JSON data.
- **`fix(desktop): preserve commas while editing list settings`** ([#91160](https://github.com/NousResearch/hermes-agent/pull/91160)): Resolves a UI bug where users couldn't type multiple entries in list settings due to over-aggressive value parsing.

These merges, alongside a continuous stream of open PRs for Kanban stability and Windows installation fixes, indicate a clear focus on addressing reported regressions and hardening core systems ahead of the next version bump.

## 4. Community Hot Topics

The most active discussions highlight significant pain points in deployment and reliability:

- **Skills Index Watchdog** — [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) (**66 comments, 45 days open**): The top issue is an automated alert for a stale skills index. The sustained commentary suggests this is a critical dependency for users relying on the Skills Hub, and the reliability of its auto-rebuild process is a major concern.
- **Windows ZIP Fallback Deletes Desktop App** — [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) (**13 comments, 10 days open**): A severe bug where the update process on Windows silently deletes the desktop app and then refuses to rebuild it. High engagement underscores the anxiety of a broken update path for desktop users on Windows.
- **`hermes update` Orphans Dashboards** — [#73379](https://github.com/NousResearch/hermes-agent/issues/73379) (**5 comments, 24 days open**): The update process fails to properly handle dashboards supervised by non-systemd solutions, leaving the system in a broken state. This highlights a compatibility gap with user-configured environments.

The underlying need across these hot topics is for a **robust, transactional, and platform-agnostic update and deployment process**, a theme echoed in the architecture proposals below.

## 5. Bugs & Stability

Today's issue log reveals a significant number of high-priority bugs, with a strong concentration on **Windows-specific installation and update failures** and **SQLite session-state corruption**. All newly reported issues are listed in the data overview above; the most critical are highlighted here:

- **P0 — `apply_anthropic_cache_control` Non-Idempotency** ([#90971](https://github.com/NousResearch/hermes-agent/issues/90971)): While the original overflow scenarios were disproven, the issue remains open, requiring careful review.
- **P1 — `state.db` Corruption on Busy Hosts** ([#89293](https://github.com/NousResearch/hermes-agent/issues/89293)): Production user data loss three times in eight days due to a complex chain of lock storms and WAL reversion. This is the most critical stability issue.
- **P1 — Contended WAL Append Failure** ([#85079](https://github.com/NousResearch/hermes-agent/issues/85079)): A direct consequence of concurrency, causing session failures. An open PR addressing session state is pending.
- **P1 — Windows Gateway Stale Planned-Stop Marker** ([#34597](https://github.com/NousResearch/hermes-agent/issues/34597)): An old bug, now closed, but serves as an example of the platform-specific issues that keep recurring.

A new class of P2 bugs related to the **update/rebuild process on Windows** is prominent, including failures due to `Constrained Language Mode` ([#89857](https://github.com/NousResearch/hermes-agent/issues/89857)), `node_modules` corruption ([#90829](https://github.com/NousResearch/hermes-agent/issues/90829)), and environmental conflicts with system Node ([#82309](https://github.com/NousResearch/hermes-agent/issues/82309)). Multiple open PRs directly address these install-time failures.

## 6. Feature Requests & Roadmap Signals

The community and maintainers are signaling a push toward more robust architecture and user control:

- **Transactional Deployment Plans** ([#88683](https://github.com/NousResearch/hermes-agent/issues/88683)): An architecture proposal to unify the install/update/bootstrap logic. This aligns perfectly with the cluster of update failures and is a likely candidate for future versions.
- **Proof-Carrying Observable State** ([#90866](https://github.com/NousResearch/hermes-agent/issues/90866)): A deeper architectural vision to make state changes verifiable end-to-end, aiming to fix whole classes of bugs rather than individual instances.
- **Approval Workflow for Memory/Skills** ([#91202](https://github.com/NousResearch/hermes-agent/issues/91202)): A requested feature to gate agent-initiated modifications to memory and skills, reflecting a growing demand for stricter agent guardrails.
- **Desktop Preview Backend Proxy** ([#91149](https://github.com/NousResearch/hermes-agent/issues/91149)): A proposal to route preview pane traffic through remote backends, a UX enhancement for SSH users.
- **Localhost Routing for Remote Backends** ([#91149](https://github.com/NousResearch/hermes-agent/issues/91149)): Enhance the preview pane by routing localhost dev servers through the harness when connected to a remote/SSH backend.
- **Kanban Initial-Status Blocked Not Respected** ([#91178](https://github.com/NousResearch/hermes-agent/issues/91178)): A bug reported where `--initial-status blocked` tasks are still promoted and spawned, defeating a documented activation-gate use case.

## 7. User Feedback Summary

Users are expressing frustration with update mechanisms that break their environment, with rapid-fire issues filed today about Windows updates failing and leaving the desktop app in an unusable state ([#90829](https://github.com/NousResearch/hermes-agent/issues/90829), [#91021](https://github.com/NousResearch/hermes-agent/issues/91021)). The severity of the `state.db` corruption reports illustrate the high cost of failure in production deployments. Data-loss incidents are generating significant concern. On the positive side, the maintainers are quick to acknowledge and correct their own misdiagnoses (e.g., in #90971), which is a positive signal for community trust. The volume of duplicate issues being filed (e.g., #91178, #91176) and subsequent PRs referencing the correct canonical issues suggests a highly active user base encountering new edge cases, but also indicates a need for better discoverability of existing fixes.

## 8. Backlog Watch

The following issues have been open for extended periods and remain critical for user confidence and system stability, requiring continued maintainer focus:

- **GCP Vertex AI 404 Error** ([#32678](https://github.com/NousResearch/hermes-agent/issues/32678)) — **87 days open**: An unresolved provider-compatibility issue. Long-standing and user-facing, it represents a gap in provider support.
- **Telegram Proxy Bypass** ([#47188](https://github.com/NousResearch/hermes-agent/issues/47188)) — **66 days open**: A P2 bug affecting a popular platform integration. Its long tenure suggests a lack of prioritization.
- **Skills Index Watchdog** ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)) — **45 days open**: The highest-comment issue on the board. The automated freshness probe is failing, and the community is awaiting a definitive fix.
- **Hermes Update Orphans Dashboards** ([#73379](https://github.com/NousResearch/hermes-agent/issues/73379)) — **24 days open**: A P2 issue that leaves systems in a broken state, and a key pain point for users with non-standard supervision setups.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for 2026-08-21.

---

# PicoClaw Project Digest — 2026-08-21

## 1. Today's Overview
Activity is moderate, with 3 issues and 9 PRs touched in the last 24 hours across a 2–6 day window, indicating sustained, steady development rather than a burst of new work. Notably, all 4 closed PRs represent significant functional milestones (skill management, Anthropic API compatibility, multi-agent frameworks), but none were merged today—they are pending final review or CI. The queue is dominated by 4 pending Dependabot PRs for core dependencies (AWS SDK, Anthropic SDK, Matrix client), which are marked as stale and may require maintainer action or version-conflict resolution. No new releases were published, and no new issues were filed in the last day, suggesting a low-incoming bug environment. Overall, the project is in a healthy state with promising features on the cusp of integration, though a growing backlog of dependency updates needs triage.

## 2. Releases
No new releases were published in the last 24 hours. The latest tagged version remains **v0.3.1**, which is cited in the open bug #3281.

## 3. Project Progress
Four closed/merged PRs are under review or have been merged, representing substantial feature work:

- **Skill Management Overhaul (PR #714)**: Implements a full skills install/reinstall CLI subsystem. It adds `ParseInstallSpec`, `InstallFromGitHubEx`, and tree-fetching utilities to support `repo@branch` and subpath installation. A new `reinstall` subcommand forces overwrites, and install errors now offer a hint when a skill already exists. This significantly improves reproducibility for user skill sharing.
- **Native Anthropic Messages API (PR #1158)**: Closes issue #269 by adding an `anthropic-messages` protocol prefix, allowing users to connect to Anthropic-compatible proxy services that only support the native `/v1/messages` format, rather than the legacy `/v1/complete` endpoint.
- **Multi-Agent Collaboration Framework (PR #423)**: A WIP build of a base framework including a thread-safe shared context "Blackboard," agent handoff, and discovery tools, building on the provider protocol refactor (#213) and model fallback chain (#131). This is foundational work for complex agentic workflows.
- **Web Build Fix (PR #3318)**: Resolves a critical web-frontend build issue by fixing a duplicated mapping key in `pnpm-lock.yaml` that rendered the lockfile unparseable.

## 4. Community Hot Topics
- **[Issue #3281: Web UI Chat Input Lag](https://github.com/sipeed/picoclaw/issues/3281)** (6 comments, 1 👍): The most active discussion focuses on severe input latency once a session's history reaches moderate length. Users report a direct correlation between history size and UI responsiveness, indicating a front-end rendering or state-management bottleneck. The issue is tagged `stale`, suggesting the maintainers have not yet provided a timeline for a fix.
- **Dynamic Model Override (Issue #3330)**: Users are requesting the ability to specify a model at call time for `delegate`, `spawn`, and `subagent` tools. This is a strong signal that users are pushing PicoClaw into more complex orchestration workflows where static model configuration is too rigid.

## 5. Bugs & Stability
- **High Severity — Web UI Input Lag (Issue #3281)**: The performance degradation is a direct UX blocker for users with longer sessions. It is active, community-flagged with a `BUG` label, and appears to be a front-end performance regression or missing virtualization. No associated fix PR exists yet; this should be a top priority for maintainers given its “very laggy” impact on daily use.

## 6. Feature Requests & Roadmap Signals
- **Flexible Audio Transcription (Issue #3331)**: Users want to use any model capable of `/audio/transcriptions`, not just the old `*-whisper-*` models. The proposal suggests a `whisper-transcription` config flag to force the proper code path in `asr.go`. This aligns with the broader community trend of integrating faster/cheaper generic transcription models.
- **Dynamic Model Override (Issue #3330)**: This feature would allow runtime model selection in subagent tools, enabling use cases like cost-saving via `haiku` for simple tasks or routing to a high-capability model for complex reasoning. Given the multi-agent framework in PR #423 is nearly ready, this feels like a natural, high-value next release feature.
- **Anthropic Native API Support (PR #1158)**: With the fix for #269 in review, support for a wider array of Anthropic-compatible gateways is imminent, expanding the provider ecosystem.

## 7. User Feedback Summary
- **Pain Point (Performance)**: Users are actively frustrated by the web UI lag (Issue #3281), which hamstrings the core interactive experience.
- **Pain Point (Flexibility)**: The requests for dynamic model override and generic transcription endpoints show a user base that wants to optimize for cost and speed and is frustrated by hard-coded model associations.
- **Positive Signals**: The fact that PRs for the Anthropic Messages API and the multi-agent framework have reached a closed state indicates that feature velocity is aligned with user interests in interoperability and sophisticated agent topologies.

## 8. Backlog Watch
- **Dependency Update Backlog (PRs #3332, #3333, #3334, #3335, #3336)**: A set of Dependabot PRs for the AWS SDK v2, Anthropic SDK, and `mautrix` (Matrix client) have been open since August 13 and are now marked `stale`. These updates are important for security and feature parity, particularly the Anthropic SDK bump (1.55.1 → 1.62.0) which may be a prerequisite for the native API work. Maintainers should review these to prevent major version drift.
- **WIP Multi-Agent PR (#423)**: This PR is in a closed/WIP state, but given its breadth and the community interest in dynamic model routing (#3330), it is a critical piece of the roadmap that needs a clear timeline for completion and merge. It could become stale if not actively shepherded.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-21

## 1. Today's Overview

NanoClaw is in a phase of accelerated maintenance and hardening, with **50 PRs touched in the last 24 hours** (35 open, 15 merged/closed) and three issues updated (two active). A significant pattern this period is the **twelve-PR stack** from core-team member `gavrielc` (PRs #3408-3420) that represents a comprehensive audit-and-repair sweep of existing skills (`add-dashboard`, `add-ollama-tool`, `add-atomic-chat-tool`, `add-clidash`, `add-tavily-tool`, `add-anydoc`, `add-macos-statusbar`, and more). Concurrently, `zvi-fried` is driving channel and provider fixes (WhatsApp Cloud, Matrix ESM patch, Codex file delivery, Cursor Agent SDK). The project shows strong code-review discipline with clear labels (`core-team`, `follows-guidelines`) and explicit stacking. No new releases cut today; the focus is entirely on correctness and ecosystem polish ahead of the next version.

## 2. Releases

No new releases in the last 24 hours. The project appears to be in a pre-release stabilization window, with the large skill-audit PR stack (#3408-3420) likely destined for the next version bump.

## 3. Project Progress

**Merged/Closed PRs (15 total)** — highlights:

- **[#3421 — docs+setup: announce one-click Slack agents](https://github.com/nanocoai/nanoclaw/pull/3421)** *(closed/merged)* — Documentation and setup announcement for the one-click Slack agent flow, stacking on #3404. This is a significant UX milestone: app + avatar + workspace install in one step.

- **[#1311 — Feature create new session](https://github.com/nanocoai/nanoclaw/pull/1311)** *(closed/merged)* — A long-lived feature-skill PR (opened March 21, merged today after ~5 months of review) that adds new-session creation capability.

**Active Fixes and Features in review (35 open PRs)** — notable new work:

- **[#3402 — fix(codex): deliver provider-generated files](https://github.com/nanocoai/nanoclaw/pull/3402)** — Adds provider-generated file events with explicit path and ownership contracts, reuses safe outbox staging, and resolves destination/thread correctly for file delivery.

- **[#3403 — fix(matrix): use a refresh-safe ESM patch](https://github.com/nanocoai/nanoclaw/pull/3403)** — Matrix adapter uses extensionless ESM imports that fail under Node 22; the skill now registers a committed pnpm patch before installation so it reapplies on every refresh.

- **[#3356 + #3355 — Cursor Agent SDK provider + /add-cursor setup skill](https://github.com/nanocoai/nanoclaw/pull/3356)** — A new provider integration for Cursor's Agent SDK with an installer skill (`/add-cursor`), expanding NanoClaw's provider support.

- **[#3270 — feat/ncl token usage](https://github.com/nanocoai/nanoclaw/pull/3270)** *(teran13, still open)* — Token-usage tracking feature for the `ncl` CLI, in review since August 16.

**Audit-and-repair stack (core-team, all open)**: The `gavrielc` stack (#3414-#3420 plus stacked #3408) is fixing systemic issues across existing skills: dead configuration surfaces (env vars read from `process.env` that NanoClaw never populates — #3415, #3416), install-scope leaks (`bare ncl` resolving to wrong install — #3419), hardcoded launchd labels — #3420, refresh fan-out caps — #3414, missing `REMOVE.md` documentation — #3417, and no-op smoke tests — #3418.

## 4. Community Hot Topics

The most active discussions (top by comment count on issues):

- **[#2715 — Inbound WhatsApp media unreachable by agent (OPEN)](https://github.com/nanocoai/nanoclaw/issues/2715)** — 1 comment. Files save to an unmounted `DATA_DIR/attachments` instead of the session inbox; the agent is handed a `/workspace/attachments/...` path that doesn't exist in the container. This is a **fundamental data-flow bug** with high production impact.

- **[#3369 — mention-sticky engages without a mention (OPEN)](https://github.com/nanocoai/nanoclaw/issues/3369)** — New issue (created today) reporting that `engage_mode: 'mention-sticky'` + `ignored_message_policy: 'accumulate'` causes a Slack agent to start replying in threads it was never mentioned in. The accumulate path creates a session row that becomes the subscription. **A fix PR already exists: [#3422 — mention-sticky subscribes on a mention, not on a session](https://github.com/nanocoai/nanoclaw/pull/3422)** by `teran13`.

- **[#2606 — engage_mode='always' silently drops all messages (CLOSED today)](https://github.com/nanocoai/nanoclaw/issues/2606)** — Closed after a long run. `evaluateEngage()` in `src/router.ts` lacked a case for `'always'`, silently dropping all messages with `no_agent_engaged`.

The underlying need across the open items is **engagement-mode reliability and predictable behavior** — the community cares deeply about when (and only when) their agents are triggered.

## 5. Bugs & Stability

**Ranked by severity:**

1. **[HIGH — #2715: Inbound WhatsApp media is unreachable](https://github.com/nanocoai/nanoclaw/issues/2715)** — Files persist to a host directory not mounted into the agent container; agent gets a non-existent path. No fix PR yet. Production-impacting for WhatsApp channel users. Open since June 8.

2. **[MEDIUM-HIGH — #3369: mention-sticky engages without a mention](https://github.com/nanocoai/nanoclaw/issues/3369)** — Agent replies in threads where never mentioned when `accumulate` is set. Active today. **Fix PR #3422 open.**

3. **[MEDIUM — #3403 (PR): Matrix adapter broken under Node 22](https://github.com/nanocoai/nanoclaw/pull/3403)** — Extensionless ESM imports fail; fix is a committed pnpm patch, still open.

4. **[MEDIUM — #3420 (PR): add-macos-statusbar watches dead launchd label](https://github.com/nanocoai/nanoclaw/pull/3420)** — Hardcoded `com.nanoclaw` vs. actual `com.nanoclaw-v2-<installSlug>`; statusbar watches a service that doesn't exist on current installs.

5. **[MEDIUM — #3414 (PR): add-clidash refresh fan-out DoS](https://github.com/nanocoai/nanoclaw/pull/3414)** — ~29 concurrent `bin/ncl` processes on a 2-vCPU host: 27 timed out, nearly every tab errored.

6. **[LOW-MEDIUM — #2606: engage_mode='always' silently drops messages — CLOSED](https://github.com/nanocoai/nanoclaw/issues/2606)** — Root cause was missing switch-case in `evaluateEngage()`; closed as fixed today.

## 6. Feature Requests & Roadmap Signals

- **Cursor Agent SDK provider** ([#3356, #3355](https://github.com/nanocoai/nanoclaw/pull/3356)) — New provider integration with an installer skill. Strong signal that NanoClaw is expanding beyond OpenAI/Anthropic ecosystems toward code-assistant SDKs.

- **One-click Slack agents** ([#3421](https://github.com/nanocoai/nanoclaw/pull/3421)) — The announcement and setup flow shipped (merged). Expect this to be a headline feature in the next release's changelog.

- **Token usage tracking** ([#3270](https://github.com/nanocoai/nanoclaw/pull/3270)) — `ncl` CLI token-usage reporting; likely lands as a utility with the next minor version.

- **`add-why` skill** ([#3189](https://github.com/nanocoai/nanoclaw/pull/3189)) — Explains what happened for a single message; a debugging/observability tool that complements the token-usage feature.

- **New-session creation** ([#1311](https://github.com/nanocoai/nanoclaw/pull/1311)) — Merged today after long review; enables programmatic session lifecycle.

**Prediction for next release**: A minor version bump (v2.x) will include the one-click Slack announcement, the Cursor Agent SDK integration, the full skill-audit repair stack, and the two engagement-mode bug fixes (#3422, #3247). The token-usage and add-why skills may follow in the same release or the immediate next.

## 7. User Feedback Summary

- **Frustration with WhatsApp attachment handling** (#2715) — Users send media via WhatsApp, agents cannot see it. The unmounted-directory bug means the promise of "agent reads your images/docs/audio" is broken for this channel. No workaround documented; sustained pain since June.

- **Inline mentions not respected** (#3369) — Users on Slack expect mention-sticky to mean exactly that: the agent replies only in threads where mentioned. The accumulate policy crossing that boundary violates documented semantics.

- **Engagement modes are fragile** (#2606) — The `'always'` mode silently dropping messages indicates the routing logic (evaluateEngage) can fail closed, which erodes trust. The project's response (fix + test coverage) suggests the maintainers are taking this class of bug seriously.

- **Self-inflicted DoS in add-clidash** (#3414) — Users installing the dashboard skill faced a UI that errored on nearly every tab due to refresh fan-out. The audit PR stack acknowledges the problem and caps concurrency; this will materially improve the first-run experience for new users.

- **Positive signals** — The rapid triage and fix-PR-for-every-open-issue pattern (especially #3422 for #3369 within 24 hours, and #3247 for malformed cron handling) shows a responsive core team.

## 8. Backlog Watch

- **[#2715 — WhatsApp media unreachable](https://github.com/nanocoai/nanoclaw/issues/2715)** — Open **74 days** (June 8 → August 20) with only one comment and **no fix PR**. This is the most critical open issue by user-impact. The data-flow fix involves volume mounting and path remapping; it needs a maintainer assignment. High risk of becoming "the issue that never gets fixed."

- **[#3247 — Malformed cron string re-errors every sweep tick](https://github.com/nanocoai/nanoclaw/pull/3247)** — Open 6 days. Fix is ready but unreviewed: retire a malformed cron string instead of logging and re-erroring each sweep. This is a recurring-log-noise bug with a ready patch; it should be merged promptly.

- **[#3270 — ncl token usage](https://github.com/nanocoai/nanoclaw/pull/3270)** — Open 5 days, no comments, flagged `follows-guidelines`. A waiting-for-review feature that community members likely want (cost observability). Needs maintainer eyes.

- **Skill-audit PR stack (#3414-#3420)** — All authored by core-team member `gavrielc`, stacked on #3408, opened today. These are ready-to-review fixes for systemic issues across twelve skills. The stack is large (7 PRs) and will benefit from a maintainer dedicating review time to the whole chain, as they share a common foundation.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-21

## 1. Today's Overview

IronClaw saw moderately high activity over the past 24 hours with 21 issues and 33 PRs updated, strongly concentrated in three areas: the WebUI design-system program (epics #7038/#7781/#7782), the new `AfterTurn`/hooks lifecycle work (#7770 phase 1), and an urgent Rust 1.98 clippy lint cascade that broke all-branch CI. Two CI-unblocking PRs (#7777, #7778) were merged today; one PR (#7786) shipped a SEV fix for OpenAI-backed suggestion generation. Fourteen PRs were merged or closed overall, while 19 remain open. The project is shipping steadily with no new releases cut, but the design-system epic and lifecycle-hook expansion both signal a near-term v1.4.0 feature wave.

## 2. Releases

**None.** No new releases were published in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs Today — 14 PRs)

**CI & Toolchain (2 merged)**
- **#7777** — `fix(ci): clear the clippy 1.98 lint cascade blocking the merge queue` (M). Rust stable 1.98 promoted several lints at once; this PR unblocked a red `main`.
- **#7778** — `fix(lints): Rust 1.98 clippy migration (unbreaks all-branch CI)` (M). Companion fix: four new lints (`chunks_exact_to_remainder`, etc.) cleaned workspace-wide under `-D warnings`.

**Automations (merged, closes issue #7193)**
- **#7729** — `feat(automations): add run-now across trigger domain and WebUI` (M). Adds atomic manual-fire path preserving schedule, domain-separated fire identity, exposed via first-party capability, product service, WebUI API, and localized UI. **Closes #7193.**

**WebUI / Design System (2 merged)**
- **#7257** — `docs(design-system): proposal, plan & checklist for the WebUI design system (Epic #7038)` (M). Shared north-star docs under `docs/internal/reborn/design-system/`.
- **#7304** — `refactor(webui): place OAuth sign-in above the gateway token form on login` (M). Better sign-in UX.

**Docs (merged)**
- **#7763** — `docs(subagent): consolidate seven design docs into one canonical README` (M). Net **−9,713 lines**, collapsing three generations of contradictory subagent docs into a single source of truth.
- **#7738** — `feat(slack): per-field help text on Slack deployment config card` (M). Adds `description` on all `[admin_configuration]` fields.

**SEV fix (merged)**
- **#7786** — `fix(assistant): unbreak suggestion generation on OpenAI models, drop dead allowlist ids, gate cards on connected extensions` (M). `uniqueItems: true` on the suggestions output schema broke OpenAI strict structured output; also cleans up dead IDs.

**Closed / superseded (not merged)**
- **#7703** — superseded by #7711 (wasm typed tool response stack).
- **#7039** — superseded by #7750 (Storybook integration, recreated off clean main).

**Open but notable (awaiting review)**
- **#7779** — `feat(sandbox): route user-sandbox egress through a managed per-user proxy` — Step 2 of the #7732 epic.
- **#7765** — `feat(hooks): AfterTurn lifecycle point + memory curation` — Phase 1 of #7770.
- **#7711** — Final PR of the capability-response-normalization stack (#7627), wasm typed tool response + guest migration.

## 4. Community Hot Topics

1. **Epic #7732** (8 comments, updated 08-20) — *"Epic: Persistent per-user sandbox with iron-proxy"*. The most-commented issue this window. The current Docker-per-command implementation is a stopgap; the epic targets a persistent per-user computer. **Underlying need:** users want a stable, persistent workspace, not a container that vanishes after every command. PR #7779 is actively landing Step 2 (managed per-user proxy for egress).

2. **Epic #7770** (3 comments, updated 08-20) — *"Epic: hook the agent lifecycle"*. The new hooks expansion (after-turn, before-turn, compaction, tool-result seams). Phase 1 (PR #7765, AfterTurn) is up for review. **Underlying need:** extension authors want lifecycle seams instead of core-engine edits.

3. **Epic #7038** (2 comments) — *"Epic: Design System Phase 1 — Storybook integration & design-system catalog"*. Being actively re-scoped: Phase 2–3 moved to #7781, Phases 4–5 split into #7782. **Underlying need:** the WebUI is accruing UI debt; the team is formalizing governance before the reskin.

4. **Issue #7783** (1 comment, updated 08-21) — *"LLM timeout policy: finalization can't measure TTFT, and the retry budget can't fit the deadline"*. Fresh bug from today, high signal for reliability.

## 5. Bugs & Stability (ranked by severity)

1. **SEV: OpenAI suggestion generation broken** — `uniqueItems: true` on `schemas/suggestions.output.json` fails OpenAI strict structured output. **Fixed in PR #7786 (merged today)** — `16f7237d9` is cherry-pick-ready.

2. **CI red on main: Rust 1.98 clippy cascade** — Floating stable toolchain promoted 4+ lints that fail `-D warnings` on every branch. **Fixed in #7777 + #7778 (both merged).**

3. **LLM timeout policy (Issue #7783, open)** — Structured-output finalization runs on the non-streaming client; a stalled provider is invisible until a 60s cap, and the 75s finalization deadline kills retries. Severity: medium-high — a single transport stall destroys a run. No fix PR yet.

4. **memory.write lacks expected-version mode (Issue #7776, open)** — Full-document rewrites (`append: false`) are read-modify-write; CAS protects against torn writes but not against silent overwrite of concurrent writes. Severity: medium. Found by review on #7765 (IronLoop High).

5. **Hosted MCP OAuth registration for Attio fails (Issue #7308 — closed)** — Invalid scope cannot be corrected. Closed; likely fixed.

6. **Timezone-robustness (Issue #7767)** — Automation presenter date tests fail in `Asia/Shanghai` TZ. Fix PR #7774 is open.

## 6. Feature Requests & Roadmap Signals

- **Persistent per-user sandbox (#7732)** — the flagship v1.4.0 feature. Step 2 (proxy-managed egress, PR #7779) is up; this is a multi-step epic with clear direction.
- **Agent lifecycle hooks (#7770)** — AfterTurn (PR #7765) is in review; follow-ups already tracked: #7780 (scheduler-side failure terminalization bypass), #7775 (unbound-runs gate posture), #7776 (CAS semantics for memory.write). This will likely land across v1.4.0.
- **Design System Phases 2–5 (#7781, #7782)** — DESIGN.md governance, theme reskin, agentic components, information architecture. Purely an internal roadmap signal, but the docs PR (#7257) is merged.
- **Run-now for automations (#7193)** — shipped in #7729; users can now fire automations on demand from model, WebUI, and product surface. Expect follow-ups around scheduling + manual-fire interplay.
- **Notifications with run gates (#7699/#7698)** — two large open PRs; the generic notification center is the base for run-gate events.

## 7. User Feedback Summary

- **Automation users:** previously had no way to fire automations on demand — this is the #1 user-facing capability shipped this window. Expect adoption feedback to land soon.
- **Slack operators:** per-field help text on the config card (merged) addresses a documented confusion about what each admin field does.
- **MCP extension users (Attio):** the hosted MCP OAuth failure was a real pain point for extension installs; the issue is closed, though the underlying scope/validation should be watched.
- **Non-UTC timezone devs/test environments:** the Automation presenter tests were a quiet bug affecting devs in APAC; fix PR open.
- **No explicit user complaints captured this window** — more internal/engineering driven activity.

## 8. Backlog Watch

- **PR #7491** — `feat(coding): omp core-tool contract + engines + benchmark arm` — open since **08-11** (10 days), size XL, core contributor. This is the coding-tool unification ("six exact bare names: read, write, edit, glob, grep, bash") — important, stable, needs review.
- **Issue #7042** — *Design System Phase 2: DESIGN.md governance & guidelines* — open since **08-03**; part of the reshuffled epic #7781, but no dedicated PR yet.
- **PR #7699 / #7698** — Notifications gateway + WebUI generalization — open since **08-17**; two large PRs, medium risk, no recent reviewer comments. The feature is described, but these need attention before the v1.4.0 window closes.
- **Issue #7755** — *Collapse two duplicated turn/subagent vocabulary types* — being deliberately held until #7752 merges; good hygiene, but the dependency chain is worth watching.

---

### Project health summary

IronClaw is in a **stable-heavy-channel** state: CI was briefly red (toolchain drift), but both fixes landed in the same day. The merge queue consumed two large XL PRs, the design-system program is being actively re-structured into clean phases, and the hooks/sandbox work is progressing in explicit steps with documented follow-ups. No new releases this window, but the delta between merged PRs and open feature work suggests a v1.4.0 cut is 1–2 weeks away.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-21

## 1. Today's Overview
Activity on LobsterAI remains moderate but shows a healthy mix of bug fixes and feature work. In the last 24 hours, 2 issues are open/active with no new closures, while 7 PRs were updated—6 of which are merged/closed and 1 remains open. Notably, 4 of the 6 closed PRs are marked as `[stale]`, indicating a batch of older work is being cleaned up or merged. There were no new releases today. The most significant merged work appears to be a feature PR (#1553) that delivers file card and split-preview functionality, which also closes an open issue (#1552). Overall, the project shows steady progress on UX/UI improvements and developer-experience fixes, though the stale tagging on older PRs suggests some backlog is being resolved.

## 2. Releases
No new releases were published in the last 24 hours. None are currently pending for the project.

## 3. Project Progress
Six PRs were merged/closed in the past 24 hours. Highlights include:

- **File card previews for AI outputs** — [PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553) from **noransu** closes issue #1552. It adds an inline FileCard for Write tool calls (showing file name, path, type, and size) and a resizable right-side preview panel (320-900px) that supports Markdown rendering, HTML sandbox iframes, SVG inline, image display, and code syntax highlighting. Read tool results remain standard summaries to avoid visual clutter.
- **Agent skill sync fix** — [PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545) from **stone333** fixes an issue where updating a current agent's skills did not immediately update the active skill badges in the UI without having to switch agents and back. The root cause was that `activeSkillIds` was not synced with the Redux `skillIds` update.
- **Engine startup overlay UX** — [PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546) from **0xFLX** adds two escape-hatch buttons ("Cancel Startup" and "View Logs") to the full-screen overlay that appears during agent engine startup. These appear after 30 seconds, preventing users from being stuck waiting through a 5-minute hard timeout.
- **macOS packaging fix** — [PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555) from **liulingfeng** fixes a `npm run dist:mac:x64` build failure caused by macOS not supporting `sha256sum`; the build script now uses `shasum` as a compatible alternative.
- **Settings panel search** — [PR #1557](https://github.com/netease-youdao/LobsterAI/pull/1557) from **kayo5994** adds a search box to the settings sidebar to filter categories, with NFKC normalization, AND-based multi-keyword matching, and auto-fallback to the first visible tab if the current one is filtered out.
- **Agent switch regression fix** — [PR #1560](https://github.com/netease-youdao/LobsterAI/pull/1560) from **flowell** fixes a bug where clicking the currently-selected agent after editing it would not return to its chat view, due to an early-return when `agentId === currentAgentId`.

One PR remains open: [PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547) from **gongzhi-netease**, which fixes a bug where a scheduled task's notification channel could not be changed back to "No Notification" after selecting an IM channel.

## 4. Community Hot Topics
The most commented-on items in the last 24 hours are still relatively quiet, with few reactions:

- **Issue #1556 — IM bot configuration guide 404** ([link](https://github.com/netease-youdao/LobsterAI/issues/1556)): Reported by **darkSheep404** with 2 comments. The linked documentation at `lobsterai.youdao.com` returns a 404, breaking the user experience for IM integration setup. This is a documentation credibility issue that likely needs a quick link fix.
- **Issue #1552 — Markdown preview and file card support** ([link](https://github.com/netease-youdao/LobsterAI/issues/1552)): Opened by **noransu** with 1 comment. A well-scoped feature request related to Write tool output previews. It has since been addressed via the merged [PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553).

The discussion patterns here reflect a desire for a more usable and polished file/writing workflow, plus reliable documentation. These are user-experience "quality of life" topics, not core engine/architecture controversies.

## 5. Bugs & Stability
No new critical regressions were reported in the last 24 hours. Ranked by severity:

- **[Medium] Agent edit → switch regression** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1502) / [PR #1560](https://github.com/netease-youdao/LobsterAI/pull/1560)): After editing an agent, clicking the same agent wouldn't return to its chat view. This is now fixed and merged.
- **[Medium] Scheduled task notification reset** ([PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)): Users cannot revert notification channels to "No Notification" after saving a change. This is a lingering bug with a fix PR still open.
- **[Low] macOS packaging failure** ([PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555)): `npm run dist:mac:x64` fails on macOS due to missing `sha256sum`. Fix merged.
- **[Low] Engine startup hang UX** ([PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)): Users could not cancel or diagnose a stuck engine startup. Now addressed with added buttons.

No crashes or security-related bugs were filed today.

## 6. Feature Requests & Roadmap Signals
- **File preview panel for AI outputs** ([Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)) is now implemented via [PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553). This suggests the maintainers are listening to workflow efficiency feedback around agent-generated artifacts.
- **Settings search** ([PR #1557](https://github.com/netease-youdao/LobsterAI/pull/1557)) was delivered, improving long-term usability for the growing settings surface.
- **Engine startup cancellation/logging** ([PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)) adds control and diagnosability, which is a positive signal for handling network/compile/environment failures gracefully.

These are incremental UI/UX improvements, which suggests the roadmap is in a polish-and-ergonomics phase, not a major core-feature phase. The IM bot documentation 404 issue (#1556) is likely to be fixed quickly and is a candidate for the next minor patch release.

## 7. User Feedback Summary
- **Frustration with agent-generated file visibility**: Users cannot easily preview files created by agents in-app. They must either ask the agent to read the file into the chat or manually open the file manager. The merged file-card/preview PR directly addresses this pain point.
- **Configuration friction**: The 404 on the IM bot configuration guide ([#1556](https://github.com/netease-youdao/LobsterAI/issues/1556)) breaks the onboarding flow for IM integration. This is a content/link regression that undermines the official docs.
- **Control during startup**: Users reported being stuck waiting up to 5 minutes on a hung engine startup with no escape. The new Cancel/View Logs buttons address this shutdown-and-recovery frustration.
- **Agent switching confusion**: Editing an agent then failing to switch back to its chat view (fixed in [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560)) caused a confusing navigation dead-end.

Overall feedback is positive—users are actively working and requesting "quality of life" changes rather than reporting fundamental broken functionality.

## 8. Backlog Watch
- **Issue #1556 — IM bot configuration guide 404** ([link](https://github.com/netease-youdao/LobsterAI/issues/1556)): Still open, with 2 comments. The link is 404 and the doc is missing. This has been open since April 2026 and is now marked `[stale]`. A quick doc fix is needed.
- **Issue #1552 — Markdown preview and file card support** ([link](https://github.com/netease-youdao/LobsterAI/issues/1552)): Resolved via merged PR #1553. Will be closed shortly.
- **PR #1547 — Scheduled task notification reset** ([link](https://github.com/netease-youdao/LobsterAI/pull/1547)): A small bug fix (2-line change) that has been open since April 2026. It has no comments or reviews, indicating it may have been overlooked. This needs a maintainer review and merge, as the root cause analysis appears clear.

No issues or PRs have been left unresponded-to for an excessive amount of time; the backlog is generally healthy.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-21

---

## 1. Today's Overview

Moltis is in a healthy state marked by steady security hardening and WhatsApp integration refinement. Activity today included 8 PRs (4 open, 4 merged/closed) and 1 issue closure, plus a new release (20260820.01). The project is actively addressing both security vulnerabilities (CWE-306 fix for vault endpoints, supply-chain mitigation for agent scans, image validation) and user-facing behavioral correctness (WhatsApp mention/reply handling, push-name display). The single issue updated in the last 24 hours was closed, indicating the maintenance pipeline is keeping pace with reported bugs. Momentum is concentrated on the gateway, web, and WhatsApp channel layers, suggesting these are the most actively developed surfaces.

---

## 2. Releases

**New version: 20260820.01** (published 2026-08-20)

No explicit changelog was attached to this release in the provided data. Based on the PRs merged around this window, the release likely includes:
- WhatsApp fix: stop hardcoding push name to "Moltis" (PR #1218)
- WhatsApp fix: treat replies to the bot as addressing it in groups (PR #1217)
- HTTPd fix: require authentication for vault unlock/recovery endpoints (PR #1216, fixes CWE-306)
- Channels fix: make the untrusted-turn tool ceiling configurable (PR #1219)

**No known breaking changes or migration notes** were reported for this release. Users on prior versions should be able to upgrade directly.

---

## 3. Project Progress

**Merged/Closed PRs (4):**

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#1216](https://github.com/moltis-org/moltis/pull/1216) | HTTPd / Security | **Require authentication for vault unlock and recovery endpoints** — fixes CWE-306 (critical unauthenticated brute-force exposure). `is_public_path()` was allowlisting the entire `/api/auth/` prefix, bypassing `auth_gate` for these two sensitive routes. | ⭐ Security fix, merged |
| [#1217](https://github.com/moltis-org/moltis/pull/1217) | WhatsApp | **Treat a reply to the bot as addressing it** in group chats when `mention_mode = "mention"`. Previously, replies (via `ContextInfo.quoted_message`) were dropped if no explicit `@mention` was present. Now both `mentioned_jid` and reply context count as addressing the bot. | ✔️ Behavior fix |
| [#1218](https://github.com/moltis-org/moltis/pull/1218) | WhatsApp | **Stop hardcoding push name to "Moltis"** — the push name rides the presence stanza, so a bot configured as "Ada" appeared as "Moltis" in group chats for users who don't have the number saved. Uses the correct builder hook. | ✔️ Behavior fix |
| [#1219](https://github.com/moltis-org/moltis/pull/1219) | Channels / Tool Policy | **Make the untrusted-turn tool ceiling configurable** — PR #1170's hardcoded deny-all policy for non-operator turns inadvertently removed 3 public-audience tools and made policy layers 4–5 unreachable in shared contexts. Now configurable per deployment. | ✔️ Config flexibility |

**Open PRs (4) — in review/testing:**

| PR | Area | Summary |
|----|------|---------|
| [#1220](https://github.com/moltis-org/moltis/pull/1220) | WhatsApp | Render Markdown in outbound messages (convert to WhatsApp-native markup for text and captions; preserve original Markdown in history/UI). |
| [#1221](https://github.com/moltis-org/moltis/pull/1221) | Gateway / Security | Pin Snyk Agent Scan to 0.5.17 via `uvx`; remove standalone `mcp-scan` fallback; require `uv` — mitigates supply-chain attacks. |
| [#1222](https://github.com/moltis-org/moltis/pull/1222) | Web / Security | Validate sandbox image references and package names; restrict package checks and image builds to operator admins. |
| [#468](https://github.com/moltis-org/moltis/pull/468) | Plugins | Use `cmd.exe /C` on Windows for shell hooks (instead of `sh -c` which is unavailable on Windows). Long-running PR (opened 2026-03-23) — Windows compat fix. |

---

## 4. Community Hot Topics

- **[Issue #1177 — Vault unlock/recovery missing auth (CWE-306)](https://github.com/moltis-org/moltis/issues/1177)** — Reported 2026-07-30, closed 2026-08-20. This was the most significant community report, identifying a critical unauthenticated remote attack surface. **Response time: ~3 weeks** from report to fix (PR #1216). Demonstrates a strong maintainer OSS security response pipeline.

- **[PR #468 — Windows shell hooks fix](https://github.com/moltis-org/moltis/pull/468)** — Opened 2026-03-23, still open after 5 months. This is the longest-standing open PR, suggesting either low maintainer bandwidth for Windows platform support or maintenance concerns about the fix. High latent user demand (Windows deployment is a common ask).

- **Three WhatsApp PRs in-flight simultaneously** (#1217, #1218, #1220) indicate a cluster of user-reported issues around group chat behavior — mention handling, display names, and Markdown rendering. This signals WhatsApp integration is the most actively iterated surface this week.

---

## 5. Bugs & Stability

**Ranked by severity:**

| Severity | Issue | Status |
|----------|-------|--------|
| 🔴 **Critical (CWE)** | **Vault unlock/recovery endpoints lacked authentication** — any unauthenticated remote caller could brute-force vault credentials (Issue [#1177](https://github.com/moltis-org/moltis/issues/1177)). | ✔️ **Fixed** in PR [#1216](https://github.com/moltis-org/moltis/pull/1216), merged 2026-08-20. |
| 🟠 **High (Supply Chain)** | **Snyk Agent scan not pinned** — `mcp-scan` fallback and unpinned invocation create supply-chain attack surface (PR [#1221](https://github.com/moltis-org/moltis/pull/1221)). | 🔄 Fix proposed, not yet merged (validations pending). |
| 🟠 **Medium (Injection)** | **Sandbox image/package data not validated** — image references and package names used in container/Dockerfile contexts without validation; requires admin restriction (PR [#1222](https://github.com/moltis-org/moltis/pull/1222)). | 🔄 Fix proposed, not yet merged. |
| 🟡 **Medium (Regression)** | **Tool-policy regression** — hardcoded deny-all policy from #1170 removed 3 public-audience tools and blocked layers 4–5 in shared contexts (PR [#1219](https://github.com/moltis-org/moltis/pull/1219)). | ✔️ **Fixed**, merged. |
| 🟡 **Low (Platform)** | **Shell hooks fail on Windows** — `sh -c` unavailable (PR [#468](https://github.com/moltis-org/moltis/pull/468)). | 🔄 Still open after 5 months; unclear maintainer priority. |

**Assessment:** No new critical bugs reported in the last 24h. The critical CWE-306 issue has been fully resolved and shipped in the 20260820.01 release. Remaining security hardening (image validation, scan pinning) is in-flight.

---

## 6. Feature Requests & Roadmap Signals

- **WhatsApp Markdown rendering (PR #1220)** — Users want model-generated Markdown (bold, italics, headers) to render properly in WhatsApp outbound. The PR preserves original Markdown in history/UI while emitting native WhatsApp markup. *Likely to merge soon (in review with validations)* → next patch release.

- **Configurable tool ceilings (PR #1219)** — Operators want deployment-specific control over which tools run in untrusted/shared contexts. This suggests a broader roadmap trend toward granular audit/permission policy configuration. *Merged already* — watch for documentation on configuration knobs.

- **Configurable push name (PR #1218)** — Branding/bot identity flexibility for multi-bot deployments. Users want their bot's public-facing identity to match its configured name. *Merged* — already in the release.

- **Windows support (PR #468)** — Implicit demand for first-class Windows deployment of Moltis (shell hook execution). The 5-month open window signals this may need to be prioritized by maintainers or that community members should test and vouch.

**Predicted next version contents:** Auth hardening for remaining `/api/auth/*` routes, Snyk agent pin (if tests pass), sandbox image validation, WhatsApp Markdown rendering, and likely follow-up polish on the untrusted-turn policy configuration.

---

## 7. User Feedback Summary

- **Security consciousness is high** — Issue #1177 was already reported with a CWE classification and preflight checklist; users are actively searching prior issues before filing. This suggests a technically skilled user base.

- **WhatsApp group behavior is a pain point** — Three distinct fixes (push name, mention handling, Markdown) in one week all trace back to user-reported frustrations in group deployments. Users expect the bot to behave like a native participant (correct identity, correct addressing semantics, readable formatting).

- **Multi-bot/multi-identity deployments are real** — #1218's push-name issue arises specifically when a bot is configured with a custom name but the WhatsApp client ignored it. This signals users are deploying many distinct bot personas, not just a single "Moltis" instance.

- **Operators want control, not hardcodes** — #1219 shows frustration with one-size-fits-all security policies that break legitimate public-audience tool use. The demand is for **configurable, layered security policies**, not rigid ceilings.

- **Overall sentiment: positive** — All reported issues were either fixed quickly (security issue in 3 weeks) or have active PRs with clear ownership. No open complaints about maintainer responsiveness in this window.

---

## 8. Backlog Watch

> 🚨 **Items needing maintainer attention:**

1. **[PR #468 — Windows shell hook support](https://github.com/moltis-org/moltis/pull/468)** — **Open since 2026-03-23 (5+ months).** Authored by jmikedupont2, includes Windows CI tests and field testing. This is the single most stale PR and represents a known platform gap (Windows deployment friction). **Recommendation:** Either assign a maintainer to review, request more targeted validation, or provide an explicit "not currently planned" status so contributors aren't left in uncertainty.

2. **[PR #1221 — Pin Snyk Agent Scan](https://github.com/moltis-org/moltis/pull/1221)** — Validations incomplete (`cargo test` for `snyk_agent_scan` pending). Since this addresses an active supply-chain concern and touches `mcp-scan`, it should be prioritized for completion before the next release window.

3. **[PR #1222 — Validate sandbox image requests](https://github.com/moltis-org/moltis/pull/1222)** — Also pending full test completion. This is a security boundary change with operator-role implications; ensure a maintainer with auth/roles context reviews the role-restriction logic before merge.

---

## Summary Dashboard

| Metric | Value |
|--------|-------|
| Issues updated (24h) | 1 (0 open, 1 closed) |
| PRs updated (24h) | 8 (4 open, 4 merged) |
| New releases | 1 (20260820.01) |
| Critical security fixes this window | 1 (CWE-306 fully resolved) |
| Security PRs in-flight | 2 (pin scan, image validation) |
| WhatsApp fixes | 3 merged (identity, addressing, policy) |
| Longest-open PR | #468 (5 months+, Windows) |
| Maintainer response time (critical issue) | ~3 weeks (report → merged fix) |

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-21

## 1. Today's Overview

CoPaw (QwenPaw) is in a period of **high development velocity**, with 28 issues and 50 PRs updated in the last 24 hours. The project just shipped **v2.1.1-beta.1**, a stability-focused release that includes console editor improvements and rate limiter log-level fixes. The community is actively collaborating: 13 issues and 28 PRs were closed/merged today, spanning core stability fixes (streaming errors, env corruption, downloader timeouts), security hardening (master key permissions), and new features (workspace-scoped always-on skills, artifact display in responses). A notable first-time contributor pattern is emerging, with new contributors tackling security and video-pipeline fixes. The overall health is strong, though several systemic issues around memory/database growth and network resilience remain open and recurring.

## 2. Releases

**v2.1.1-beta.1** was released with the following changes:
- `feat(console)`: Improve editor tab overflow navigation ([PR #6983](https://github.com/agentscope-ai/QwenPaw/pull/6983))
- `fix(providers)`: Lower rate limiter init log level ([PR #6988](https://github.com/agentscope-ai/QwenPaw/pull/6988))
- Chore: update release notes

**Migrations/Notes:** No breaking changes or migration notes were flagged in this release. However, release verification is ongoing via [Issue #7180](https://github.com/agentscope-ai/QwenPaw/issues/7180), tracking installation verification across platforms.

## 3. Project Progress

**Merged/Closed PRs (28 total) highlight several areas of advancement:**

- **Memory & Context System:** [PR #7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) updates ReMe to 0.4.1.8, adding configurable per-attempt timeout for embedding connection tests, exposed in the agent config UI. This directly addresses the health-check timeout issues raised in [Issue #7156](https://github.com/agentscope-ai/QwenPaw/issue/7156).

- **Environment Config Resilience:** [PR #7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) fixes corrupt `envs.json` preservation and adds atomic writes, addressing the data-loss bug in [Issue #7118](https://github.com/agentscope-ai/QwenPaw/issues/7118).

- **Console & UX:** [PR #7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) adds artifacts to assistant response cards; [PR #7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) improves long chat session responsiveness (synchronous Markdown parsing eliminated during streaming); [PR #7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) initializes persistent drivers concurrently, reducing cold-start time.

- **Packaging/Frozen builds:** [PR #7166](https://github.com/agentscope-ai/QwenPaw/pull/7166) bundles the qwenpawmail MCP as a standalone sidecar so it survives in frozen builds.

- **Skill System:** [PR #7073](https://github.com/agentscope-ai/QwenPaw/pull/7073) adds skill name deduplication to prevent duplicate loading of workspace and built-in skills.

- **Channel Fixes:** [PR #7169](https://github.com/agentscope-ai/QwenPaw/pull/7169) isolates QQ conversation sessions and preserves reply routes; [PR #7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) adds artifacts to assistant response cards.

- **File handling:** [PR #6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) fixes the fallback chain continuation on downloader timeout (wget → curl → urllib), closing a long-standing issue from July.

## 4. Community Hot Topics

The most active discussion centers on **agent autonomy and reliability**:

- **[#6921 — Agent stops mid-task without user prompt](https://github.com/agentscope-ai/QwenPaw/issues/6921)** (10 comments, 1 day) — Top activity. Users report agents repeatedly stopping after saying "I will do X, Y, Z" without actually executing and without visible error; user must say "continue" to resume. The output pattern ("Now 2.1, 3.1, 3.2. Let me do all three.") suggests the model is *planning* but not *executing* — a critical autonomy regression. This is the single most significant UX complaint right now.

- **[#7102 — Freeze >10 minutes](https://github.com/agentscope-ai/QwenPaw/issues/7102)** (9 comments, closed today) — A freeze on GLM 5.3 where no tokens arrive for extended periods; closed as resolved but a signal that provider-specific stalls need better timeout handling.

- **[#6643 — Task artifacts should be organized by task folder](https://github.com/agentscope-ai/QwenPaw/issues/6643)** (6 comments, closed) — Community strongly wants per-task artifact organization rather than a flat `media/` directory.

- **[#6436 — Automatic model routing](https://github.com/agentscope-ai/QwenPaw/issues/6436)** (4 comments, 1 reaction) — A well-reasoned request to route simple turns to local/fast models and hard reasoning to large models. This is a power-user feature that could be a roadmap signal for the next major version.

- **[#7013 — Unified tool panel with web preview & terminal](https://github.com/agentscope-ai/QwenPaw/issues/7013)** (3 comments) — Request for a "workbench" view combining artifacts, diff, web preview, and interactive terminal; a strong "agent IDE" signal.

## 5. Bugs & Stability

Ranked by severity:

- **[CRITICAL] history.db corruption to 7.6GB** ([#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168)) — `recall_history` expand path duplicates same intervals into `conversation_history`, causing unbounded storage growth to multi-GB for long-running agents. No fix PR yet; serious production stability concern.

- **[HIGH] Agent silently stops mid-execution** ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)) — reproducibility not yet isolated; no fix PR identified. Recurring across versions (2.1-beta2 reported, but likely still present).

- **[HIGH] Stream drop yields UNKNOWN_AGENT_ERROR** ([#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162)) — `httpx.ReadError` (mid-stream disconnect) not in `_get_httpx_retryable()`; closed as fixed, presumably by a retry logic change.

- **[MEDIUM] Network recovery not automatic** ([#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932)) — After transient network loss, all LLM requests fail with timeout until manual restart. Open, no fix PR; impacts desktop users on unstable connections.

- **[MEDIUM] Un-downloadable image breaks entire session** ([#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110), closed) — An un-fetchable image URL in context bricks the conversation until `/clear`. Closed, but a strong signal that media fetching needs robust failure isolation.

- **[MEDIUM] Embedding health check timeouts** ([#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156)) — Hardcoded 5s timeout, but warm Ollama embedding typically takes ~0.5s; actual elapsed 10.4s confirms a bug in timeout handling (likely a retry-with-reset issue). Fix lands with ReMe 0.4.1.8 in [PR #7133](https://github.com/agentscope-ai/QwenPaw/pull/7133).

- **[LOW] Corrupt envs.json silently wipes user env vars** ([#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118), closed) — Fixed via atomic-write strategy in [PR #7135](https://github.com/agentscope-ai/QwenPaw/pull/7135).

- **[LOW] Master key created with default permissive permissions** ([#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119), open PR) — Fernet master key file created without `0o600`; security fix PR under review.

## 6. Feature Requests & Roadmap Signals

- **Workspace-scoped "always-on" skills** ([#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) + [PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)) — Contributor-backed; likely lands in 2.1.x. PR already drafted.

- **Session-level thinking modes** ([PR #7163](https://github.com/agentscope-ai/QwenPaw/pull/7163)) — Off/Low/Medium/High thinking levels per session, persisted in chat metadata. In review; likely next minor.

- **Agent-level cross-session recall toggle** ([#7184](https://github.com/agentscope-ai/QwenPaw/issues/7184)) — Privacy-control feature to disable Scroll cross-session recall; clearly scoped proposal.

- **Qwen_Code harness support** ([#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181)) — Low-network users requesting qwen_code as a third-party harness.

- **Automatic model routing** ([#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436)) — Power-user request; no PR yet, but a strong architectural signal that could reshape provider defaults in v2.2.

- **Unified tool panel / Web terminal** ([#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013)) — Agent-IDE vision; consistent with "Hub" work in [PR #7112](https://github.com/agentscope-ai/QwenPaw/pull/7112), suggesting a larger "agent workspace" theme.

- **QQ scheduled pushes & DingTalk shared group context** ([#7159](https://github.com/agentscope-ai/QwenPaw/issues/7159), [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158)) — Channel-side enterprise automation; mid-term direction.

- **OAuth documentation for remote MCP** ([#7185](https://github.com/agentscope-ai/QwenPaw/issues/7185)) — Docs gap; should be fast-tracked.

## 7. User Feedback Summary

- **Autonomy is the #1 pain point** — Users repeatedly see the agent *plan* but not *execute*, requiring "continue" prompts. This is the most-upvoted complaint and undermines trust in the tool's "autonomous agent" value proposition.

- **Storage hygiene is a growing concern** — `history.db` ballooning to 7.6GB and artifacts mixing in a single `media/` dir are both actively complained about; both suggest a need for workspace-level lifecycle management.

- **Windows desktop experience gets mixed reviews** — File paths with Chinese names mangled in prompts ([#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453)), VPN/network resilience issues ([#6974](https://github.com/agentscope-ai/QwenPaw/issues/6974), [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932)), and a cluttered media folder are everyday frictions for desktop users.

- **Satisfaction signals** — Users actively contributing feature PRs (skills, memory, console perf) suggest developer-user overlap is high and engaged. The 13 closed issues in 24h show the maintainers are responsive.

- **Power users want modularity** — Model routing, per-task artifact folders, OAuth for MCP, and unified tool panels all signal that early adopters are pushing QwenPaw toward a "pro tool" not just a chat UI.

## 8. Backlog Watch

- **[#6436 — Automatic model routing](https://github.com/agentscope-ai/QwenPaw/issues/6436)** — Created 2026-07-24, only 4 comments & 1 reaction. High architectural value; silent because it needs a design doc. Watch for spec.

- **[#6921 — Agent stops mid-execution](https://github.com/agentscope-ai/QwenPaw/issues/6921)** — Likely a model-behavior interaction; maintainers should reproduce with a minimal harness and add a regression test.

- **[#6932 — Automatic network recovery](https://github.com/agentscope-ai/QwenPaw/issues/6932)** — Open since 8/12, no fix PR. Should be prioritized: desktop users on Wi-Fi will keep stalling.

- **[#7168 — history.db 7.6GB](https://github.com/agentscope-ai/QwenPaw/issues/7168)** — Opened today; needs maintainer triage urgently due to data-growth severity.

- **[#7119 — master key permissions](https://github.com/agentscope-ai/QwenPaw/pull/7119)** — Security PR under review since 8/18; should not drift.

**Overall Assessment:** CoPaw is a healthy, fast-moving open-source project with strong community engagement and frequent releases. The current focus on stability (envs, memory, console performance) plus a second wave of "agent-IDE" features (Hub, tool panels, always-on skills) suggests the project is maturing beyond a chat interface toward a full agent development platform. The autonomy regression (#6921) is the most urgent quality gate — addressing it will directly impact user trust.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-21

## 1. Today's Overview

ZeroClaw is in a period of intense architectural evolution and security hardening. Activity remains very high, with 50 issues and 50 PRs updated in the last 24 hours, though only 2 PRs were merged/closed and 5 issues were resolved, indicating a heavy load of in-progress work rather than rapid merges. The project is dominated by large-scale, high-risk RFCs and stacked PRs addressing plugin architecture (WASM egress policy), sandboxing, shell command policies, and provider reliability — a clear signal that the maintainers are prioritizing production-grade security and extensibility. Notably, there are **zero new releases** despite the high churn, and a significant number of PRs carry `do-not-merge`, `needs-author-action`, or `needs-maintainer-review` labels, suggesting a bottleneck in the review pipeline. The emergence of "tracker" issues for maintainer decision queues and technical debt remediation indicates a maturing project that is actively managing its own governance.

## 2. Releases

No new releases were published in the last 24 hours. Based on the volume of merged and in-flight changes (e.g., Windows self-update fixes in #7910, the plugin egress policy in #9582), the next release is likely to be a minor or patch bump with significant security enhancements. Users and downstream packagers should monitor the `master` branch for breaking changes related to the plugin permission model and configuration defaults, as several RFCs (e.g., #8398, #10076) are nearing acceptance.

## 3. Project Progress

Only two PRs were closed/merged in the last 24 hours, which is low compared to the overall activity.

- **#10194 (Closed):** [Bug]: PR reviewer publishes in-flight results after the PR merges. The issue was closed, implying a fix or mitigation was applied to the CI tooling to prevent the AI reviewer from commenting on already-merged PRs.
- **#9016 (Closed):** [Bug]: OpenAI tool turns fail when Chat Completions rejects reasoning effort. This long-running issue (since July) was closed, likely resolved by provider-side changes that handle `reasoning_effort` more gracefully.

No new features have been fully merged today. The project's progress is largely concentrated in open PRs that are advancing through review. Noteworthy PRs that have seen recent updates and represent significant feature work include:
- **[#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)** and **[#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582):** The stacked plugin egress policy (Stage 2 and 3) — a huge security feature.
- **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809):** Multi-model support per provider profile, a much-requested config improvement.

## 4. Community Hot Topics

The most engaging issues and PRs are dominated by deep architectural RFCs, not simple bug reports. The high comment counts (20+) indicate that the community is heavily involved in design discussions.

- **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — RFC: Per-execution confirmation tier for high-risk shell commands (23 comments)**: This is the hottest topic. The community is deeply engaged in defining a Claude-Code-style `allow/ask/deny` policy for shell commands. It touches on config, runtime, and security and is the cornerstone of the project's security posture. The underlying need is for user safety and control when the agent executes potentially destructive commands.
- **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — RFC: Runtime-owned conversation sessions and transport surface adapters (22 comments)**: A large architectural proposal to change how the runtime manages sessions across different channels (web, ACP). This indicates the community wants a more unified and robust conversation model.
- **[#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) — Tracker: Rust anti-slop policy debt remediation (16 comments)**: A community-led effort to clean up 307 code-quality candidates across 1,078 Rust files (production panics, unwraps, etc.). This shows strong community investment in code quality and long-term maintainability.
- **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — RFC: Decouple memory lifecycle policy from storage backends (14 comments)**: A key architectural discussion for separating "how" memory is stored from "when" it is consolidated/governed.
- **[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — RFC: Realtime speech-to-speech channel for Gemini Live (14 comments)**: Significant interest in voice-based interaction, specifically featuring Gemini Live.

## 5. Bugs & Stability

Several bugs were reported today, with a mix of severities. None of the new bugs today have explicit fix PRs linked in the top 30 data, but most are tagged with `status:in-progress`, suggesting they are being actively worked on.

**High Priority (P1):**
- **[#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) (Closed):** CI bug where the AI reviewer comments on PRs after they merge. Fixed/Closed.
- **[#10033](https://github.com/zeroclaw-labs/zeroclaw/pull/10033) (Open PR):** Fixes config defaults for channel `approval_timeout_secs`, which were misaligned with `serde` defaults. This is a P1 security-relevant bug.

**Medium Priority (P2/S2):**
- **[#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068):** Interactive agent session caps context at 32,000 tokens, ignoring the configured `max_context_tokens = 131072`. This is a potential performance/usability regression.
- **[#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074):** `SECURITY.md` documents a CI job for container checks that was removed. This is a docs/process bug leading to a false sense of security.
- **[#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106):** Exact proxy selectors reject supported transcription services. This breaks configurations that rely on specific transcription providers.

**Low Priority (P3/S3):**
- **[#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103):** ZeroCode Health status values misalign in French and Spanish due to fixed-width padding.

There is strong PR activity on stability fixes, including a **fix for Windows boot issues** ([#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111), closed as duplicate) and a PR to make **agent-scoped cron mutations atomic** ([#10177](https://github.com/zeroclaw-labs/zeroclaw/pull/10177)).

## 6. Feature Requests & Roadmap Signals

The roadmap is clearly steering toward a **"secure-by-default, plugin-everything"** architecture.

- **Plugin Ecosystem:** The biggest signal is the push for a **comprehensive WASM plugin architecture** ([#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)) and moving optional tools/channels to runtime plugins ([#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)). This will be a massive change for the next major release.
- **Security & Control:** Beyond the shell-confirmation RFC (#7155), there is a clear desire for **granular sandbox policies** ([#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)) and a better **plugin permission model** ([#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)). The **verbatim channel send** feature ([#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)) is a small but highly practical request for gateway integration.
- **Usability & Onboarding:** The community frequently requests **better defaults**. PRs to enable the stall watchdog ([#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168)), stream modes by default ([#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166)), and text-selectability in ZeroCode Logs ([#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086)) show a desire for a more polished out-of-the-box experience.
- **Extensibility:** **Agent portability** ([#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069)) and **ephemeral agent swarms** ([#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025)) are ambitious features aimed at power users.

**Prediction:** The next minor release will likely focus on the **shell command policy** (#7155) and **plugin egress security** (#9582/#9584) as they are near-accepted. The **MariaDB memory backend** ([#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668)) is a long-standing request that could be included as it provides a major concrete benefit for self-hosters.

## 7. User Feedback Summary

The user base is sophisticated, comprising both individual self-hosters and enterprise integrators who are actively shaping the product through RFCs rather than just reporting bugs.

- **Pain Point — Configuration Complexity:** There are multiple RFCs and PRs aimed at simplifying configuration, multi-model setup, and agent portability. The request for better defaults (e.g., streaming on by default, non-zero stall timeouts) signals that users find the initial setup and behavior "too hidden" or "disabled by default."
- **Pain Point — Windows Reliability:** Issues like the Windows desktop `TaskDialogIndirect` entry point missing ([#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111)) and the extensive work on the Windows self-updater ([#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910)) highlight that the Windows experience is still a source of friction.
- **Satisfaction — Strong Security Focus:** The community actively participates in high-level security design, which is a strong positive signal. They trust the project's direction.
- **Use Case — Voice and Realtime:** The RFC for Gemini Live Speech-to-Speech ([#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) shows a market pull for real-time, voice-based agent interactions beyond simple text chat.

## 8. Backlog Watch

Several long-running, high-importance issues and PRs are still awaiting maintainer action. These are the critical blockers to watch:

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer Decision Queue Tracker:** This is the meta-issue that tracks all other RFCs needing a decision. The fact that it is open and being updated indicates a backlog of undecided proposals.
- **[#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) — MariaDB Memory Support (Created March 2026):** This simple, concrete feature request has been open for ~5 months with only 2 comments. It's a clear unmet user need and relatively simple, so its languishing status is curious.
- **[#10033](https://github.com/zeroclaw-labs/zeroclaw/pull/10033) — Config defaults fix (P1):** This high-priority bug fix PR is marked `do-not-merge` and `needs-maintainer-review`. The longer it sits, the more users could be exposed to default configs that may fail in production.
- **[#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) & [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) — Plugin Egress Policy Stage 2 & 3:** The `do-not-merge` label and `size:XL` imply these are massive, risky changes that require careful review. They represent a huge security win but carry a high risk of regressions.
- **[#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) — Telegram per-user sessions (Size:XL):** A highly requested feature for Telegram groups (collaborative use), but it's been open since the start of August without a merge and is marked `do-not-merge`.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*