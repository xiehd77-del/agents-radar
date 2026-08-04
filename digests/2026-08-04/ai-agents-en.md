# OpenClaw Ecosystem Digest 2026-08-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-04 02:41 UTC

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

# OpenClaw Project Digest — 2026-08-04

## 1. Today's Overview

OpenClaw continues to demonstrate high-velocity development with 500 issues and 500 PRs updated in the last 24 hours, though the overwhelming majority of activity is concentrated long-standing bugs and feature discussions rather than new work. The project released two patch versions (`v2026.7.1-1`, `v2026.7.1-2`) with focused fixes for Codex progress replies, Memory Core startup, and npm plugin updates. However, the project health is mixed: a significant portion of the most active issues are P1/P2 message-loss and session-state reliability bugs, many of which have been open for months and lack linked fix PRs. Notably, 35 issues were closed and 148 PRs were merged/closed today, indicating ongoing triage and stabilization work. The critical-path concerns cluster around subagent completion delivery, Codex-backed turns timing out, and voice/real-time state retention—areas that will likely dominate the next stabilization cycle.

## 2. Releases

Two patch releases shipped within the last 24 hours:

- **`v2026.7.1-2`** — Fixes npm plugin updates: accepts singleton-array metadata from newer npm clients so tracked official plugins can install and update to correction releases. (#108336)
- **`v2026.7.1-1`** — Two fixes:
  - **Codex progress replies:** keeps app-server turns running after delivered progress messages so GPT/Codex reaches its authoritative terminal response instead of stopping mid-turn. (#106961, #108487) Thanks @joshavant.
  - **Memory Core startup repair:** recovers derived legacy-index and cache state at startup.

No breaking changes or migration notes were mentioned in either release.

## 3. Project Progress

The following PRs were merged/closed today (from the top-30 list by comments):

- **fix(qa): provision ffmpeg for Playwright scenarios** (#119064, closed) — Installs Playwright's ffmpeg binary so `recordVideo` scenarios don't fail on clean runners.

Active PRs ready for maintainer review (high-signal, waiting on maintainer, not author):

- **fix(whatsapp): retry transient inbound media download failures through the ingress drain** (#117719) — Fixes permanent attachment loss on transient download failures.
- **fix(restart): stop treating a failed pending check as proof of idleness** (#118053) — Prevents gateway restart during live work when the idle-check probe itself fails.
- **fix(gateway): route system-agent approvals off the exec channel bus** (#118960) — Fixes `system-agent` approval misclassification due to payload shape ambiguity.
- **fix: Ask OpenClaw reports no API key when the provider uses a file SecretRef** (#116302) — Fixes false "No API key found" for file-based secrets.
- **fix(ui): explain replace-mode filtering in model picker** (#104569) — Adds clarity to why models are absent under `models.mode: "replace"`.
- **feat(tools): support batched tool search queries** (#118623) — Multi-surface capability discovery.

New PRs filed today that address well-known issues: **fix(daemon): keep Windows gateway running after foreground window closes** (#119052, fixes #91144), **fix(cli): avoid repeated migration scans during local agent turns** (#119051), **fix(error when gateway port is busy but process cannot be identified)** (#119068).

## 4. Community Hot Topics

1. **#116277 — DeepSeek v4 Flash silent reply failure** (CLOSED, **100 comments**) — [Link](https://github.com/openclaw/openclaw/issues/116277) — The single hottest issue, now closed. "Diamond lobster" rated with impact:message-loss. Silent failure with generic fallback on Telegram. The 100-comment thread signals both severity and a long debugging/verification arc.

2. **#116201 — Realtime voice work can retain unbounded provider and consult state** (OPEN, **52 comments**) — [Link](https://github.com/openclaw/openclaw/issues/116201) — A P1 maintainer-tagged issue about realtime voice sessions not having hard ownership bounds, leading to retained superseded consult work, large provider frames, pre-ready audio. This is a design-level resource-governance problem, not a one-line fix.

3. **#7707 — Memory Trust Tagging by Source** (OPEN, **24 comments**) — [Link](https://github.com/openclaw/openclaw/issues/7707) — P2 feature discussion about tag-by-trust to prevent memory poisoning. Community interest remains high.

4. **#44925 — Subagent completion silently lost** (OPEN, **23 comments**, 👍2) — [Link](https://github.com/openclaw/openclaw/issues/44925) — P1, "diamond lobster" with three distinct failure patterns where subagent results vanish. See Bugs section for cross-reference with the newer, related issue #67777.

5. **#48788 — Centralized filename encoding utility** (OPEN, **20 comments**) — [Link](https://github.com/openclaw/openclaw/issues/48788) — Architectural follow-up to a Feishu filename UTF-8 fix. Still awaiting maintainer decision.

Underlying need: the community is pushing hardest on **reliability of delivered replies** (no silent loss on any channel) and **memory trust/security**. Voice-state issues are emerging as a new P1 category.

## 5. Bugs & Stability

Ranked by severity with cross-referenced fix PRs:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0** | [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env generator double-quotes values, breaking AWS_REGION hostname; **ux-release-blocker** | None linked (linked-pr-open flagged) |
| **P1** | [#116022](https://github.com/openclaw/openclaw/issues/116022) | `/new` reuses stable session ID, cannot recover retired Codex binding tombstone | None (linked-pr-open) |
| **P1** | [#115037](https://github.com/openclaw/openclaw/issues/115037) | Synthetic "No response requested." on resume triggers model fallback, silently downgrading the user turn | None (linked-pr-open) |
| **P1** | [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock never releasable after restart that reuses owner PID (containers), permanently freezing cache | None (linked-pr-open) |
| **P1** | [#116010](https://github.com/openclaw/openclaw/issues/116010) | All persistent sessions capped at 128k context regardless of model | None (linked-pr-open) |
| **P1** | [#111010](https://github.com/openclaw/openclaw/issues/111010) | Detached Codex subagents lose hook relay when parent turn releases | None |
| **P1** | [#117956](https://github.com/openclaw/openclaw/issues/117956) | `claude-cli` produced metered Anthropic API usage despite CLEAR_ENV scrubbing (~13.7M tokens billed) | None (security-review, needs-info) |
| **P1** | [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` rejected "thread switched branches" — stale expectedLeafEntryId | None (linked-pr-open) |
| **P1** | [#92633](https://github.com/openclaw/openclaw/issues/92633) | `memory_search corpus=all` times out while individual corpora succeed | None |
| **P1** | [#89315](https://github.com/openclaw/openclaw/issues/89315) | Gateway heap grows unbounded, killed by cgroup OOM on systemd --user | None (needs-info) |
| **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) / [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion silently lost (two related issues) | None |
| **P2** | [#91144](https://github.com/openclaw/openclaw/issues/91144) | Windows Scheduled Task gateway not staying running | ✅ **#119052** (fix filed today) |
| **P2** | [#112906](https://github.com/openclaw/openclaw/issues/112906) | `` tags render broken in v2026.7.1 (rich messages regression) | None |
| **P2** | [#118785](https://github.com/openclaw/openclaw/issues/118785) | QA: primary proof for containers and external app SDK (maintainer-tagged) | N/A (tracking) |

**Notable win:** The **Windows Scheduled Task bug (#91144)**—open since June with 7 comments and a "diamond lobster" rating—has a fix PR filed the same day (#119052). This is the fastest bug-to-fix turnaround observed today.

**Danger zone:** The **subagent completion silent-loss cluster** (#44925, #67777, #87561) represents a systemic reliability gap. Multiple issues describe similar failure modes (direct-announce timeout, drain, orphan prune) yet none have a linked fix PR. This is the most significant unresolved stability theme.

## 6. Feature Requests & Roadmap Signals

Strong signals for near-term inclusion:

1. **Memory Trust Tagging by Source (#7707)** — 24 comments, P2, open since Feb. Repeated "needs-maintainer-review" and "needs-product-decision" labels. This is likely to reach a product decision soon given security implications.
2. **Session snapshots — `/session save|load` (#13700)** — P2, open since Feb. Community value is clear (branching, rollback, A/B testing). No movement yet; candidates for next milestone.
3. **Self-hosted STT/TTS provider support in webchat (#45508)** — P2, 👍2, 8 comments. Would route webchat TTS through the gateway instead of the browser Speech API. Aligns with the realtime-voice work happening in #116201.
4. **Batched tool search queries (#118623)** — PR already open and "👀 ready for maintainer look" — most likely to land in the next release of any feature here.
5. **YAML config support (#45758)** — P3, 👍2. Quiet but persistent; low-risk additive change.
6. **Provider fallback by failure class (#47910)** — P2, gold shrimp. Quarantining auth-broken providers would directly mitigate the "billing error death spiral" community-reported in #39807.
7. **Expose resolved backend model in session_status (#51441)** — P2, platinum hermit. Would give agents visibility into LiteLLM routing.

Prediction: the **next release** (v2026.7.2 or v2026.8.x) will likely include batched tool search, the Windows daemon fix, and possibly the audit execution-identity inspection (#117034). The **Memory Trust Tagging** decision is more likely a roadmap item than a next-release feature.

## 7. User Feedback Summary

- **Reliability frustration is systemic.** Users report silent message loss, truncation (~1000-1100 chars in #84516), timeouts, and "No reply generated" fallbacks across Telegram, Discord, WhatsApp, and Feishu. The 100-comment DeepSeek thread (#116277) reflects how severely a silent failure erodes trust.
- **Anthropic billed 13.7M tokens through scrubbed `claude-cli` (#117956).** This is the most economically painful report today and will likely drive immediate security-review action.
- **Unbounded heap growth in long-running gateways (#89315)** — 👍3. Users on systemd `--user` deployments are getting OOM-killed after days/weeks. This validates the need for better memory governance.
- **Windows native CLI users** continue to be underserved: Scheduled Task non-persistence (#91144) finally has a fix, but the GitHub Copilot auth-ordering bug (#46031) remains open since March.
- **Memory is in "chaos" (#43747)** — different teammates' instances store memory in different ways. This is a "worked before, now fails" regression rated platinum hermit.
- **Positive sentiment:** The two quick patch releases (v2026.7.1-1/-2) were well targeted, and maintainer-labeled PRs like #118998 (block terminal controls in TUI) show that security hygiene is improving.

## 8. Backlog Watch

Issues needing maintainer attention (long-open, high-impact, no clear path):

1. **#7707 — Memory Trust Tagging by Source** (since Feb 3, 24 comments, needs-product-decision + needs-security-review) — [Link](https://github.com/openclaw/openclaw/issues/7707) — Security-relevant and community-endorsed; has been pending for 6 months.
2. **#67777 + #44925 — Subagent completion delivery loss** (April + March, both P1 diamond lobster) — [67777](https://github.com/openclaw/openclaw/issues/67777), [44925](https://github.com/openclaw/openclaw/issues/44925) — No fix PR after months. This is the #1 reliability gap.
3. **#84516 — Codex long replies truncated ~1000-1100 chars** (since May 20, P1 platinum hermit) — [Link](https://github.com/openclaw/openclaw/issues/84516) — Silent truncation with `stop=null, aborted=false`; no upstream action visible.
4. **#117956 — claude-cli billed 13.7M tokens despite CLEAR_ENV** (2 days old, P1 gold shrimp, needs-security-review) — [Link](https://github.com/openclaw/openclaw/issues/117956) — New but extremely high priority for cost/security; needs maintainer triage ASAP.
5. **#103804 — service-env double-quote AWS_REGION** (P0, ux-release-blocker) — [Link](https://github.com/openclaw/openclaw/issues/103804) — P0 label already; a fix PR is marked "linked-pr-open", but this should be merged in the next hotfix.
6. **#39807 — 402 billing death spiral (5,206 failed runs)** (closed today, but root-cause fix not merged except in #116302) — [Link](https://github.com/openclaw/openclaw/issues/39807) — Ensure the auth-cooldown redesign is not lost.

**Overall assessment:** Healthy velocity, clearly responsive maintainers (48% of PRs merged/closed today), but the backlog shows a concentration of unresolved P1 reliability bugs that have been open for months. The project would benefit from a dedicated stabilization sprint targeting the subagent-completion and Codex-turn-completion paths.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem
**Date:** 2026-08-04

---

## 1. Ecosystem Overview

The open-source AI agent/assistant landscape is characterized by intense, high-velocity development with a shared focus on reliability, multi-provider support, and real-world deployment robustness. Projects are shifting from feature-chasing to stabilization, with message-loss prevention, MCP ecosystem integration, and memory integrity emerging as universal priorities. A notable divide exists between large, actively-refactored codebases (OpenClaw, IronClaw, ZeroClaw) and smaller, community-driven projects (PicoClaw, NanoClaw, Moltis) that are more focused on niche integrations and rapid bug fixes. The most successful projects demonstrate both strong maintainer responsiveness and a structured approach to managing large-scale architectural evolution, with "silent failures" in messaging and subagent completions being the most significant trust-eroding issue across the board.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Health Score | Primary Phase |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ✅ v2026.7.1-1, -2 (same day) | ⚠️ **Mixed** (high velocity, P1 backlog) | Stabilization / Bug-fixing |
| **NanoBot** | 3 | 32 | ⏳ No new release | 🟢 **Excellent** (24h bug-to-fix) | Feature + Bug-fixing |
| **Hermes Agent** | 50 | 50 | ✅ v0.20.0 (major, 8/3) | 🟢 **Good** (active triage) | Post-major-release stabilization |
| **PicoClaw** | 8 | 5 | ⏳ No new release (v0.3.1) | 🟡 **Moderate** (stale-bot closures) | Community-driven maintenance |
| **NanoClaw** | 1 | 9 | ⏳ No new release | 🟢 **Good** (clean, responsive) | Hardening / Feature work |
| **NullClaw** | 1 | 5 | ⏳ No new release | 🟡 **Moderate** (long-standing scheduler bug) | Maintenance / Network hardening |
| **IronClaw** | 47 | 50 | ⏳ Release PR pending (Wed) | ⚠️ **Mixed** (heavy refactor, CI friction) | Architectural refactoring |
| **LobsterAI** | 2 | 12 | ⏳ No new release (v2026.3.30) | 🟡 **Moderate** (stale April PRs) | Release stabilization |
| **TinyClaw** | 0 | 0 | — | — | Inactive |
| **Moltis** | 0 | 1 | ⏳ No new release | 🟢 **Good** (quiet, focused) | Focused feature development |
| **CoPaw** | 20 | 50 | ✅ v2.1.0-beta.1 | ⚠️ **Mixed** (high velocity, 12 open bugs) | Release / Bug-fixing |
| **ZeroClaw** | 50 | 50 | ⏳ Pre-release (v0.9.0 pending) | ⚠️ **Mixed** (RFC-heavy, review bottleneck) | Architectural RFCs / Security |
| **ZeptoClaw** | 0 | 0 | — | — | Inactive |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of Community:** With 500 issues/PRs updated in 24 hours, OpenClaw has by far the largest community engagement — ~10x that of its closest peers (IronClaw, CoPaw, ZeroClaw at ~50). This create compounding network effects for integrations, bug discovery, and community support.
- **Responsive Release Cadence:** Shipping two patch releases in a single day (v2026.7.1-1, -2) demonstrates exceptional maintainer responsiveness, outpacing all peers.
- **Broad Channel Support:** Active development across Telegram, WhatsApp, Discord, Feishu, and voice demonstrates a commitment to universal coverage, matching Hermes Agent but outpacing others.
- **Mature Voice/Realtime:** OpenClaw is one of the few projects with a dedicated P1 realtime voice workstream (#116201), representing a frontier area.

**Technical Approach Differences:**
- OpenClaw's architecture separates **agent** (Codex/GPT-backed) from **gateway** (channel routing), similar to Hermes Agent but with more explicit subagent lifecycle semantics. It relies heavily on **Codex-derived turn completion**, which is both a differentiator (high-quality completions) and a liability (timeouts/silent failures on Codex-backed turns).
- Uses a **Memory Core** with derived indexes, positioning it closer to hermes-agent's memory/skill/user stores but more structured.
- Its "system-agent" approval routing through the exec channel suggests a tighter integration between gateway and model, potentially more opinionated than peer architectures.

**Community Size Comparison:**
- OpenClaw is the clear #1 by raw volume. IronClaw/ZeroClaw/CoPaw represent the "architectural tier" with moderate-but-substantial communities. Hermes Agent is a strong #2 with a focus on desktop and Windows parity. NanoBot shows exceptional community contribution quality relative to its size. PicoClaw/NanoClaw/NullClaw represent the long-tail.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Subagent/Session Reliability** | OpenClaw, NullClaw, IronClaw | Preventing silent loss of subagent completions; robust session state recovery; avoiding dead sessions |
| **MCP Ecosystem & Security** | NanoBot, PicoClaw, IronClaw, Moltis, NanoClaw | Error propagation (MCP `isError` envelopes); remote MCP server support; lifecycle management; `destructiveHint` default ambiguity |
| **Config & Credential Management** | OpenClaw, Hermes, NanoClaw, CoPaw | File-based secrets, OAuth scopes, profile isolation (data privacy), no duplicate keys |
| **Provider Version-Agnosticism** | NanoBot, OpenClaw, CoPaw | New models (Opus 5, DeepSeek v4) breaking hardcoded assumptions; need declarative capability systems |
| **Windows Desktop Parity** | Hermes, OpenClaw, CoPaw, LobsterAI | Installer edge cases, daemon persistence, native experiences, WebView2 reliability |
| **Message Delivery Integrity** | OpenClaw, Hermes, ZeroClaw, CoPaw, PicoClaw | No silent drops; no duplicates; correct channel parsing (Markdown/Topic support); approval visibility in all channels |
| **Memory Trust & Governance** | OpenClaw, Hermes, NanoBot | Trust tagging by source, self-improvement class misclassification, cross-session memory searches |
| **AI Cost Control** | OpenClaw, CoPaw, Hermes | Billing de-escalation, prompt caching, token burn awareness, cost-conscious defaults |
| **Performance & Resource Governance** | OpenClaw, IronClaw, Hermes, PicoClaw | Unbounded heap growth, streaming efficiency, "reconnecting" flash, shell output flooding |
| **Self-Service & Autonomy** | NanoClaw, IronClaw, OpenClaw | Agents inspecting/requesting their own wiring/skills; goal-mode; OOBE onboarding |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target User | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Universal channel gateway, voice/realtime focus, codex-backed completions | Developers / power users needing high reliability, multi-platform parity | Codex/GPT-based agent + standalone gateway/daemon; Memory Core with derived indexes |
| **NanoBot** | Provider breadth (Eden, ModelScope, MST) + WebUI i18n polish | Chinese-speaking users (CJK/IME), universal provider access | Code/API-first, gateway-core, provider capability abstraction |
| **Hermes Agent** | Desktop app (Electron) parity (macOS/Windows), cloud-independent hooks, self-improvement "brain" | Desktop-centric users demanding perfect native UX | Electron shell + config-store + Python agent core; detailed per-platform installers |
| **PicoClaw** | Multi-agent dispatch rules, Telegram topics, systemd deployment | Multi-channel community operators running bots at scale | Agent-routing core designed for async channels, community edition of OpenClaw philosophy |
| **NanoClaw** | Session lifecycle management, hardened security images, group-scoped agent wiring | Optimized for predictable remote sessions + self-hosted agents | Git-ops/hardening focus, robust session state engine |
| **NullClaw** | Self-hosted LLM friendliness (Ollama), proxy/network hardening, streaming tool calls | Self-hosters using local/private models (RTX 3090 setups) | Minimalist core, full SSE parser functionality, provider-agnostic |
| **IronClaw** | Rust re-architecture ("Wave 3"), error-recoverability, OTelemetry, model self-skilling | Enterprise/platform builders needing extreme reliability and low-level control | Rust crates, sandbox lanes, WIT contracts, WASM extensions, weekly releases |
| **ZeroClaw** | Security (auth, SSRF gates, audit trails), RFC-driven governance, Goal Mode | Security-conscious organizations, teams needing audited AI ops | Obsessive process/security governance, aggressive gatekeeping, decision-queue tracker |
| **CoPaw** | Enterprise messaging (Feishu/WeChat), bundled Python for desktop, multi-agent workflows | Business users in Chinese SMBs/enterprises relying on messaging platforms | Python-first, heavily integrated with agentscope SDK, high-touch UX (wobbles, popups) |
| **Moltis** | MCP server lifecycle management (managed repo bundles) | MCP adopters needing first-class server provisioning/rollback | Lean/focused MCP-centric architecture, end-to-end MCP lifecycle |

---

## 6. Community Momentum & Maturity

### Tier 1: High Momentum (Rapidly Iterating)
- **OpenClaw** — Velocity unmatched, responsive maintainers, but faces a "too many bugs" challenge. Critical work on message reliability.
- **NanoBot** — Exceptional responsiveness (bug-to-fix < 24h), clear feature direction, smart architectural moves (declarative capabilities).
- **CoPaw** — High merge rate, shipping betas, but accumulating open bug debt, particularly around silent failures.
- **IronClaw** — Very high engineering discipline, strategic refactoring, strong forward-looking vision (error-recoverability), but CI friction and refactor risk.

### Tier 2: Active Stabilization
- **Hermes Agent** — Post-major release regression handling, focused on desktop/Win parity and configuration robustness.
- **ZeroClaw** — Heavy RFC/process activity, security gatekeeping, but PR review bottleneck and needs-author-action label proliferation.

### Tier 3: Steady Maintenance
- **PicoClaw** — Community-driven, low-maintainer bandwidth, mostly responsive to contribution PRs but stale bot auto-closes important bugs.
- **NanoClaw** — Efficient, clean backlog, fast PR handling, small but disciplined team.
- **NullClaw** — Slow-moving for non-essential features, scheduled task bug unresolved for months.
- **LobsterAI** — Shipping incremental improvements, but 4-month-old PRs indicate review queue stagnation.
- **Moltis** — Quiet, focused single-track workstream; minimal community engagement.

### Tier 4: Inactive
- **TinyClaw, ZeptoClaw** — No activity in the last 24 hours.

---

## 7. Trend Signals for AI Agent Developers

1. **Reliability > Features** — Across every project, the highest-severity issues are "silent failures": messages lost, subagent completions vanishing, approvals invisible. The market is screaming for **trustworthy execution**, not raw capability. Developers should treat "no output" as the worst possible outcome and design for explicit terminal states.

2. **The MCP Ecosystem is Boiling Over** — Every project is touching MCP: error envelopes, remote servers, lifecycle management, and security classification. A **universal MCP error-propagation spec** and **standardized remote server management** are urgent gaps. Build for the MCP ecosystem early or be an island.

3. **Provider Version-Agnosticism as a Pillar** — New model releases (Opus 5, DeepSeek v4, qwen3.6) constantly break hardcoded assumptions. The winning architecture is **declarative capability profiles** (e.g., NanoBot's `ResponsesCapabilities`, OpenClaw's adaptive sampling) that evolve independently of released model names.

4. **Windows Parity is a Differentiator** — Projects investing in native Windows experiences (Hermes, LobsterAI, OpenClaw) are being rewarded with dedicated user base and bug reports. The long-tail of installer/daemon/venv issues is a huge UX surface that, once polished, creates lock-in.

5. **Cost-Consciousness Is a Feature** — Billing errors death spirals (OpenClaw), 44M token burns (CoPaw), and prompt caching requests (CoPaw) show that AI agents are now operating at scale where **cost surfaces as a UX and security issue**. Building cost controls (cache keys, fallback policies with cooldowns, spend tracking) is table stakes.

6. **Memory & Data Governance Is the Next Frontier** — Trust tagging by source (OpenClaw), self-improvement misclassification (Hermes), cross-session memory (NanoBot/NanoClaw) — all point to the same need: **agents need a context graph they can trust and inspect**, not just a chat history vector.

7. **Architecture Maturity Separates the Haves from the Have-Nots** — IronClaw/ZeroClaw's Rust re-architecture and RFC-driven governance indicate a pattern: as agents scale, they demand more predictability (WIT contracts, sandbox lanes) and fewer runtime surprises. Meanwhile, all projects struggle with **CI gating and release discipline** — a shared bottleneck that deserves engineering investment.

---

*Data compiled from 2026-08-04 community digest summaries across 13 projects.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-04

## 1. Today's Overview

NanoBot remains in an intense development cycle, with 32 pull requests updated in the last 24 hours—20 of which were merged or closed—and just 3 issues touched, indicating strong throughput and a well-maintained backlog. The project is clearly prioritizing multi-provider compatibility and WebUI polish, with several P1 fixes shipping around Anthropic Opus 5 support, DeepSeek reasoning payloads, and Gemini tool-call handling. No new releases were cut today, so the recent string of merged fixes will presumably roll into the next tagged version. Overall, the project shows a healthy balance between active feature work (Mattermost group policies, cross-session search, new metasearch provider) and bug-fixing stability work.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

The project has shipped a substantial volume of merged fixes and features in the past day, spanning provider robustness, WebUI behavior, and developer tooling.

**Provider fixes (High value):**
- **[PR #5236 (OPEN)](https://github.com/HKUDS/nanobot/pull/5236)** — Fixes Opus 5 support by replacing hard-coded Anthropic sampling-parameter exclusions with model-family version thresholds, including sending adaptive thinking and `output_config.effort` for adaptive-only Claude models. This is the companion fix to issue #5235.
- **[PR #5214 (MERGED)](https://github.com/HKUDS/nanobot/pull/5214)** — Keeps DeepSeek reasoning items wire-valid, addressing serde-style deserialization errors in the OpenAI Responses API path.
- **[PR #5230 (OPEN)](https://github.com/HKUDS/nanobot/pull/5230)** — Drops unsigned tool calls when replaying conversation history to Gemini, preventing `400 INVALID_ARGUMENT` on mid-conversation model switches.

**WebUI fixes (All merged):**
- **[PR #5228](https://github.com/HKUDS/nanobot/pull/5228)** — Shows actual local trigger messages in the session popover instead of fallback command text.
- **[PR #5227](https://github.com/HKUDS/nanobot/pull/5227)** — Completes WebUI i18n audit with correction of Simplified/Traditional Chinese terminology (网页 → 网络/网络搜索).
- **[PR #5229](https://github.com/HKUDS/nanobot/pull/5229)** — Stabilizes thread/textarea behavior during IME composition input (important for CJK users).
- **[PR #5226](https://github.com/HKUDS/nanobot/pull/5226)** — Dismisses mobile keyboard after send on touch-primary devices.

**Core platform fixes (All merged):**
- **[PR #5215](https://github.com/HKUDS/nanobot/pull/5215)** — Closes agent resources (exec sessions, MCP subprocesses) deterministically to eliminate asyncio teardown noise on gateway stop.
- **[PR #5213](https://github.com/HKUDS/nanobot/pull/5213)** — Falls back to `uv` when `pip` is unavailable in `uv tool` environments.
- **[PR #5141](https://github.com/HKUDS/nanobot/pull/5141)** — Validates cron expression syntax before persistence.

**New capabilities (Open PRs of note):**
- **[PR #5234 (OPEN)](https://github.com/HKUDS/nanobot/pull/5234)** — Integrates mst-python as a metasearch provider (aggregating DuckDuckGo, Google, Brave, Bing).
- **[PR #5211 (OPEN)](https://github.com/HKUDS/nanobot/pull/5211)** — Cross-session search and mentions in the WebUI.
- **[PR #5231 (OPEN)](https://github.com/HKUDS/nanobot/pull/5231)** — Archives idle sessions so Dream's memory processing receives input even for short sessions.

## 4. Community Hot Topics

**Issue #5235 [OPEN — 1 comment]: Opus 5 temperature bug**
> https://github.com/HKUDS/nanobot/issues/5235

The most pressing discussion centers on Anthropic's newest model (Claude Opus 5, released 2026-07-24): NanoBot's `omit_temperature` substring list does not include `"opus-5"`, causing every request to send a deprecated temperature parameter. The underlying need is rapid model life-cycle tracking—NanoBot needs a maintainable mechanism for version-aware parameter exclusions, not just a string list to patch. A fix is already in flight via **[PR #5236](https://github.com/HKUDS/nanobot/pull/5236)**, which replaces hard-coding with version thresholds.

**Issue #5237 [OPEN — 0 comments]: MCP business error envelopes swallowed by agent** 
> https://github.com/HKUDS/nanobot/issues/5237

A user reports that when an MCP server returns a business error envelope (e.g., `{"code": 404, "msg": "data not exist", "data": null}`) inside `CallToolResult.content` with `isError = False`, NanoBot treats it as success. The agent never learns of the failure, waits until the tool timeout fires, and cannot diagnose the root cause. This is a design gap in error propagation semantics for MCP tools.

**PR #1550 [MERGED — 0 comments]: OpenAI Codex dual-mode (OAuth + custom Responses)**
> https://github.com/HKUDS/nanobot/pull/1550

An older PR from March finally merged. It adds support for custom Responses mode in `openai_codex` when `api_base`/`api_key` are configured, otherwise falling back to OAuth. This significantly increases Codex flexibility for users with alternative endpoints.

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|---|---|---|---|
| **High** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Opus 5 request rejection due to stale temperature exclusion list | Fix in PR #5236 |
| **High** | [PR #5230](https://github.com/HKUDS/nanobot/pull/5230) | 400 INVALID_ARGUMENT when replaying tool calls from other providers to Gemini | Fix open; needs review |
| **Medium-High** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP error envelopes (`isError=False`) are not propagated to the agent — leads to timeouts and poor UX | No fix PR yet |
| **Medium** | [PR #5222](https://github.com/HKUDS/nanobot/pull/5222) | Telegram fenced code with special chars in language (e.g., `c++`, `objective-c`) gets corrupted | Fix open |
| **Low/Resolved** | [#5190](https://github.com/HKUDS/nanobot/issues/5190) | MIME type `text/plain` blocking module script loading | Closed |

Notably, the MIME type issue (#5190) was closed—it is unclear whether that was resolved or abandoned; maintainers may want to confirm the underlying serving configuration.

## 6. Feature Requests & Roadmap Signals

The clearest roadmap signals for the next NanoBot release:

1. **Cross-session memory & context** — PR #5211 (cross-session search and @mentions) and PR #5231 (Dream idle-session archiving) both push toward richer session-to-session memory, suggesting a stronger "conversational memory" narrative is being built out.
2. **Provider breadth and flexibility** — Multiple providers are landing at once: ModelScope (PR #5038, merged), Eden AI (PR #4861, merged), MST metasearch (PR #5234, open), and Codex dual-mode (PR #1550, merged). The project is clearly betting on being a universal gateway.
3. **Declarative provider capability system** — PR #5204 moves away from provider-name hardcoding toward declarative `ResponsesCapabilities` profiles. This is an architectural signal: future provider support should get easier to reason about and more maintainable.
4. **Mattermost thread policies** — PR #5233/#5232 (separate group policy for threads vs. main channels) signals that collaboration-tool parity (Slack vs. Mattermost vs. Telegram) is an active concern.

## 7. User Feedback Summary

**Pain points:**
- **Provider churn is exhausting users** — The Opus 5 issue is a classic example: newly released models break existing hardcoded assumptions. Users want version-agnostic handling (addressed by PR #5236's threshold approach).
- **MCP error surface is too opaque** — The user in #5237 explicitly notes the agent "cannot recognize the real cause" — a trust problem for tool-using setups.
- **IME and mobile input issues** — The WebUI fixes around IME composition (#5229) and mobile keyboard dismissal (#5226) show real-world usage on CJK-capable touch devices is actively being experienced. These were both quick-turnaround fixes, which should be positively received.

**What users clearly value:**
- Fast iteration: the gap between issue report (#5235, Aug 3), fix PR (#5236, Aug 4), and merge is under 24 hours.
- Broad provider support: the volume of new providers (Eden AI, ModelScope, MST) indicates respect for heterogeneous deployments.

## 8. Backlog Watch

The following items may warrant maintainer attention:

- **[Issue #5237](https://github.com/HKUDS/nanobot/issues/5237) (OPEN, Aug 4)** — MCP error envelope propagation gap. Only a day old but touches a core architectural behavior; worth assigning soon.
- **[PR #5204](https://github.com/HKUDS/nanobot/pull/5204) (OPEN, flagged `conflict`)** — Refactors provider capability declarations. A long-lived refactor with a conflict flag; if it lingers too long it may rot against other provider changes landing in the same files.
- **[PR #5232 vs #5233](https://github.com/HKUDS/nanobot/pull/5232)** — These two Mattermost PRs (one closed, one open) are duplicates with near-identical titles; maintainers should close or supersede correctly to avoid contributor confusion.
- **[PR #1550](https://github.com/HKUDS/nanobot/pull/1550) (MERGED, Aug 3)** — Took nearly 5 months from creation to merge. Worth reviewing the merge process to understand why so much lag, as it may signal maintainer bandwidth constraints for non-P1 contributions.
- **[PR #5038](https://github.com/HKUDS/nanobot/pull/5038) — ModelScope docs** merged after ~2 weeks, and **[PR #4861](https://github.com/HKUDS/nanobot/pull/4861) — Eden AI** after ~1 month; community additions are being processed, but with noticeable latency.

---

**Overall health assessment:** NanoBot is in an active, engaged state—high merge velocity, rapid bug-response time (24h from bug report to fix PR for Opus 5), and healthy community contributions from multiple distinct authors (chengyongru, arcdrake22, goodtiding5, Re-bin, Maaayhan, amir-rezaei, santhreal). The main risks are (1) the growing complexity of provider-specific behaviors without a unified capability model, and (2) the backend/agent error-propagation semantics for MCP tools, which could become a trust bottleneck in agentic workflows.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the GitHub data provided for Hermes Agent (github.com/nousresearch/hermes-agent) on 2026-08-04, here is the project digest:

---

# Hermes Agent Project Digest: August 4, 2026

## 1. Today's Overview

Hermes Agent is experiencing a period of high activity, with 50 issues and 50 pull requests updated in the last 24 hours, indicating a healthy and responsive development cycle. The project recently shipped a major release, v0.20.0, and the majority of current work is focused on bug fixing and stabilization, with a significant cluster of issues and PRs targeting configuration handling and Telegram gateway reliability. While there is a substantial open backlog (43 open issues), the high volume of triage and the rapid creation of fix PRs for newly reported bugs (e.g., #78052, #78071) suggest an active and engaged maintenance process. The community is deeply involved in testing and reporting edge cases, particularly around the Desktop app and Windows platform, which are key areas for quality assurance this sprint.

## 2. Releases

- **v2026.8.3 (Hermes Agent v0.20.0)** was released on August 3, 2026. This is a major release ("The Herald Release") with a massive diff: ~3,650 commits, ~1,400 merged PRs, and ~1,200 issues closed since v0.19.0.
  - **Note:** No explicit breaking changes or migration steps were detailed in the provided release notes excerpt. However, the volume of changes suggests users should review the full changelog. Community issues suggest the new version is being tested for regressions, particularly in configuration parsing (e.g., #78072) and message delivery (e.g., #78052).

## 3. Project Progress

Only 3 PRs were merged/closed in the last 24 hours, indicating a period of code review and stabilization rather than large feature merges. The closed items show active maintenance:

- **#78107 (Closed):** A test fix for an intermittent CI failure in the stream consumer, addressing a monotonic-epoch assumption. This is a housekeeping task to improve development infrastructure reliability.
- **#78099 (Closed):** A fix for the Desktop app silently exiting when a zombie Electron process holds the SingletonLock on Linux/X11.
- **#78071 (Closed):** A fix for `sanitize_api_messages` not catching tool messages with missing or empty `tool_call_id`, which was a follow-up to another corruption-path fix.

These closures, combined with the active open PRs, indicate a focus on robustifying the codebase and addressing regressions introduced in v0.20.0 (e.g., #76886 and #71047 appear as "regression" reports).

## 4. Community Hot Topics

The most active discussions reveal critical pain points and bugs:

- **[Issue #66589: Telegram startup notification fails with send_path_degraded after planned restart](https://github.com/NousResearch/hermes-agent/issues/66589)** (7 comments): This is a high-severity bug (P2) involving a race condition in the Telegram gateway, impacting core message delivery reliability.
- **[Issue #30220: Background Self-Improvement Review misclassifies content between memory/skill/user stores](https://github.com/NousResearch/hermes-agent/issues/30220)** (7 comments): A significant P2 bug in the core agent logic that could lead to corrupted user memory and skills, undermining a key feature.
- **[Issue #76886: read_file reports valid UTF-8 text as binary](https://github.com/NousResearch/hermes-agent/issues/76886)** (7 comments): A P2 regression in a fundamental tool (read_file) that breaks the core workflow of accessing text files, especially for users with large notes.
- **[Issue #71047: `hermes config set` duplicates top-level key + Telegram streaming duplicates final message](https://github.com/NousResearch/hermes-agent/issues/71047)** (6 comments): This P2 bug affects both configuration management and message delivery, causing duplicated output in Telegram and config file corruption.
- **[PR #63298: fix: preserve queued prompt boundaries end to end](https://github.com/NousResearch/hermes-agent/pull/63298)** (Open, high community interest): This PR addresses a long-standing issue with queued prompts in the Desktop app and is a complex fix touching multiple components.

**Analysis:** The community is heavily focused on configuration file handling, session/message integrity, and the reliability of platform adapters like Telegram. There is a clear demand for robust and predictable behavior in these areas.

## 5. Bugs & Stability

Several significant bugs and regressions were reported or updated today, ranked by severity:

1.  **P0: WebUI user messages lose workspace prefix on replay, nuking prompt cache every turn** - [Issue #77320 (Closed)](https://github.com/NousResearch/hermes-agent/issues/77320). This was a high-impact performance bug that was quickly closed, presumably with a fix. It caused performance degradation by invalidating the prompt cache on every user turn.
2.  **P1: Telegram gateway connect hangs forever in v0.20.0 inside gateway process only** - [Issue #78052 (Closed)](https://github.com/NousResearch/hermes-agent/issues/78052). This is a critical platform bug that was closed, indicating a fix may have been identified or it was a duplicate.
3.  **P2: read_file reports valid UTF-8 text as binary** - [Issue #76886 (Open)](https://github.com/NousResearch/hermes-agent/issues/76886). A functional regression in a core tool. The bug is due to a faulty 1000-byte sample that can cut a multibyte character. No fix PR is listed, so maintainers may still be working on a solution.
4.  **P2: `hermes config set` duplicates top-level key + Telegram streaming duplicates final message** - [Issue #71047 (Open)](https://github.com/NousResearch/hermes-agent/issues/71047). A complex bug affecting config and Telegram. Note that [PR #71076](https://github.com/NousResearch/hermes-agent/pull/71076) is open and aims to fix this issue.
5.  **P2: uv installed but not found** - [Issue #69216 (Open)](https://github.com/NousResearch/hermes-agent/issues/69216). A setup/install bug for new Windows users. A fix is in progress with [PR #78116](https://github.com/NousResearch/hermes-agent/pull/78116) which falls back to GitHub when the installer host is blocked.
6.  **P2: Windows venv-blocker preflight aborts desktop Update** - [Issue #78089 (Open)](https://github.com/NousResearch/hermes-agent/issues/78089). An installation/update bug with a known root cause (truncated command line) but no clear fix mentioned.
7.  **P2: Windows Desktop update button self-destructs venv via pyd file lock** - [Issue #78084 (Open)](https://github.com/NousResearch/hermes-agent/issues/78084). Another Windows installer bug causing environment corruption.

**Overall Stability:** The number of multi-component bugs and regressions suggests that while v0.20.0 is a large release, it has introduced some instability in specific areas like config handling, Windows installers, and message delivery. The team is actively responding with fix PRs, but the volume indicates a need for more integration testing.

## 6. Feature Requests & Roadmap Signals

Several feature requests were updated today, indicating future roadmap directions:

- **[Issue #29771: Extend credential pool to search backends (Tavily / Exa)](https://github.com/NousResearch/hermes-agent/issues/29771)**: Users are requesting a unified authentication mechanism for all external services. This is a strong signal for improving the security and usability of provider integration.
- **[Issue #75026: feat(gateway): add a sessionless registered-plugin command RPC](https://github.com/NousResearch/hermes-agent/issues/75026)**: A request for a more granular control interface for authenticated dashboards, allowing specific plugin commands without a full agent session. This is an advanced API/architecture request.
- **[Issue #78061: Feature request: let a tool consume the output of a previous tool without the model re-emitting it](https://github.com/NousResearch/hermes-agent/issues/78061)**: This is a significant and highly requested feature that would allow for more efficient and reliable binary data handling between tools, bypassing token limits and potential corruption.
- **[Issue #77367: Comprehensive OMP Analysis — LSP, AST, xd://, Security, SQLite, Conflict Detection](https://github.com/NousResearch/hermes-agent/issues/77367)**: A community member has performed a deep-dive comparison with a similar project and proposes a large set of features, including LSP support and security improvements.
- **[PR #77317: feat(desktop): add hermes-achievements as a native desktop plugin](https://github.com/NousResearch/hermes-agent/pull/77317)**: A gamification feature is being added to the desktop app.

**Prediction:** The request to enable tool-to-tool data passing without model re-emission (#78061) is a powerful and complex feature that could be a roadmap priority for major version updates, given its potential performance and capability impact. The credential pool extension (#29771) is a simpler quality-of-life improvement that is likely to be implemented soon.

## 7. User Feedback Summary

Real user pain points and use cases are clear from the issue tracker:

- **Pain Point: Installation and Updates on Windows (High Volume).** Many issues today relate to Windows-specific install failures (#69216, #78921, #78084, #78089). The user `BitBernd` reported a blocked install, while others report system "bricking" during updates. This is a major source of dissatisfaction for Windows users.
- **Pain Point: Configuration Management is Error-Prone (High Volume).** Issues like #71047, #60551, #78103, and #78072 show that `hermes config set` is behaving inconsistently, creating duplicate keys, writing string literals for lists, and misassigning provider names. Users are frustrated that explicit configurations are being silently ignored or corrupted.
- **Pain Point: Message Delivery and Session Integrity (Medium Volume).** Reports of duplicated Telegram messages (#71047) and "ghost" sessions or lost draft text in the Desktop app (#78105, #74855) point to ongoing challenges with maintaining a consistent and reliable user experience across sessions.
- **Pain Point: Desktop App Gaps.** Users report minimal bugs like #77618 (can't run on macOS 15) and UX issues like duplicated status indicators (#78078), indicating a need for more polish.
- **Positive Signals:** The community is proactive in creating detailed bug reports with reproduction steps and even contributing PRs (#78118, #78121). The proposal for the OMP analysis (#77367) shows users are deeply invested in the project's evolution and are willing to do comprehensive gap analysis.

## 8. Backlog Watch

Several long-standing issues and PRs remain open and require maintainer attention:

- **[PR #4914: fix(model-metadata): fall back to LITELLM_KEY for endpoint metadata](https://github.com/NousResearch/hermes-agent/pull/4914)** (Opened: 2026-04-04): This PR has been open for 4 months, aiming to fix Issue #4913 about unauthenticated `/models` calls. It touches a critical area of the agent's configuration and security. Its long wait suggests it may be blocked on decisions or require more complex integration.
- **[Issue #10376: Profile isolation is incomplete: --clone copies memory, and agents can read across profile boundaries](https://github.com/NousResearch/hermes-agent/issues/10376)** (Opened: 2026-04-15): This is a core data-privacy and security concern. Profile isolation is a key feature, and this bug breaks the documented guarantee, posing a potentially high risk if users are relying on it to separate contexts.
- **[Issue #4913: [Bug]: custom endpoint metadata lookup can hit /models without auth](https://github.com/NousResearch/hermes-agent/issues/4913)** (Opened: 2026-04-04): This is the bug that PR #4914 is trying to fix. Its long history and open status make it a critical security backlog item.
- **[Issue #30220: Background Self-Improvement Review misclassifies content](https://github.com/NousResearch/hermes-agent/issues/30220)** (Opened: 2026-05-22): This P2 bug has been open for over 2 and a half months. It affects the integrity of the agent's "brain," potentially mixing up memories and skills, which is a core feature.

These items have been outstanding for months and represent significant technical debt or unresolved design decisions. Their age and severity (particularly the security/privacy issues) suggest they should be prioritized for a future sprint.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-04

## 1. Today's Overview

PicoClaw shows moderate activity with 8 issues and 5 PRs updated in the last 24 hours. Notably, 5 issues were closed (likely via the stale bot) and 3 remain open, while 2 PRs are open and 3 were merged/closed. The project is in a **steady maintenance phase** with community contributions driving bug fixes and feature additions. Two new open PRs (#3316, #3315) address significant functionality gaps in context management and Telegram topic support, indicating active community-driven development. No new releases were published today, with the latest stable version remaining at 0.3.1.

## 2. Releases

**No new releases** were published in the last 24 hours. The latest stable version remains **0.3.1** (referenced in recent issues). Users interested in unreleased fixes (e.g., MCP hang mitigation, exec tool improvements) would need to build from the nightly branch (git: 2cf030d2).

## 3. Project Progress

Three PRs were merged/closed today, representing solid community contributions:

- **[PR #3202](https://github.com/sipeed/picoclaw/pull/3202) (merged, stale) — fix(routing): strip leading/trailing underscores in ID normalization** — Corrects `NormalizeAgentID`/`NormalizeAccountID` to properly strip underscores, ensuring IDs match the documented `^[a-z0-9][a-z0-9_-]{0,63}$` pattern. Closes a correctness gap in routing logic.
- **[PR #3267](https://github.com/sipeed/picoclaw/pull/3267) (merged, stale) — fix scope bug for refresh agy token** — Resolves an Antigravity token-refresh failure caused by an incorrectly passed scope, fixing intermittent auth errors (`PERMISSION_DENIED: insufficient authentication scope`). This is the fix for the token-refresh regression community members encountered.
- **[PR #3273](https://github.com/sipeed/picoclaw/pull/3273) (merged, stale) — feat(webui): add Japanese (ja) localization** — Implements full Japanese localization for the WebUI as requested in issue #3272. All 968 lines of `en.json` were translated, and `dayjs/locale/ja` was registered.

## 4. Community Hot Topics

- **[Issue #3281 — Web UI chat input laggy with long history](https://github.com/sipeed/picoclaw/issues/3281)** (*3 comments, 1 👍*) — Reports severe input lag in the Web UI when a session accumulates a long chat history. Most-commented issue today, pointing to a potential performance bottleneck in the frontend rendering pipeline. No PR linked yet; needs maintainer investigation of the Web UI's history-handling logic.

- **[Issue #3301 — /clear and auto-compression fail on routed agents](https://github.com/sipeed/picoclaw/issues/3301)** (*1 comment*) — Newly reported (2026-07-29) but already has a fix attempt: **[PR #3316](https://github.com/sipeed/picoclaw/pull/3316)**. Highly relevant to users leveraging dispatch rules for multi-agent/community setups.

- **[PR #3316 — fix: routed-agent context management](https://github.com/sipeed/picoclaw/pull/3316)** *(open)* — Addresses routed-agent sessions ignoring history, summarization, compression, and seahorse bootstrap. Such context-management failures are significant issues for downstream integrations.

## 5. Bugs & Stability

**Ranked by severity:**

1. **High — Agent loop hangs on MCP server connection failure** ([Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)) — If an MCP server is unreachable, the agent loop hangs and the chat interface stops replying entirely. This is a **critical availability issue** with no fix PR attached. Notably, users continue to use the nightly build with this issue upvoted. Recommended: urgent investigation.

2. **High — /clear and auto-compression broken for routed agents** ([Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)) — Users on Discord/Telegram with dispatch rules cannot clear history or trigger auto-compaction; sessions never forget context. A fix is proposed in [PR #3316](https://github.com/sipeed/picoclaw/pull/3316), but it is not yet merged.

3. **Medium — Web UI input lag on long-history sessions** ([Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)) — Performance degrades as history grows; a UX annoyance but not a crash. No fix PR submitted yet.

4. **Low — SplitMessage infinite loop on oversized fenced-code info string** ([Issue #3264](https://github.com/sipeed/picoclaw/issues/3264)) — A subtle edge case where a long fenced-code fence header causes an infinite loop in message splitting. Closed by the stale bot, but the underlying bug appears unfixed — worth reopening.

## 6. Feature Requests & Roadmap Signals

The following requested features were closed by the stale bot (issues had no maintainer response within the window):

- **[Issue #3276 — Externally-managed gateway (systemd) support + non-fatal unknown channel types](https://github.com/sipeed/picoclaw/issues/3276)** — Headless-server users want the launcher to detect an externally managed gateway and not crash on unknown channel types. This reflects a need for **better headless/server deployments** and more resilient config parsing.
- **[Issue #3272 — Japanese localization](https://github.com/sipeed/picoclaw/issues/3272)** — Merged PR #3273 addresses this; localized WebUI will likely land in the next release.
- **[Issue #3268 — exec tool `action` parameter should default to "run"](https://github.com/sipeed/picoclaw/issues/3268)** — Improves agent reliability by removing a required field that LLMs often omit. Not yet implemented despite being logical, low-risk improvement.

Two open PRs point to upcoming features:
- **[PR #3315 — Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)** — Telegram integration fix; likely to be merged soon given community interest.
- **[PR #3316 — Routed-agent context management](https://github.com/sipeed/picoclaw/pull/3316)** — If merged, this will materially improve multi-agent/dispatch-rule UX.

**Roadmap signal:** The community increasingly deploys PicoClaw as a **multi-channel, multi-agent infrastructure** — evidenced by dispatch rules, Telegram topics, and systemd integration requests. Expect greater focus on scaling, resilience, and operational deployment features in upcoming releases.

## 7. User Feedback Summary

- **Positive sentiment around i18n and routing fixes** — Users appreciate localization additions and routing corrections; PRs #3202, #3273, and #3267 were merged with no complaints.
- **Dissatisfaction with stability in multi-agent/community setups** — Issues #3301 and #3269 indicate critical failures when using dispatch rules or MCP, both critical for advanced users.
- **Performance concerns on the web UI** — Issue #3281 highlights that long chat sessions degrade input responsiveness, which is a core UX issue for all web users.
- **Pain point: external auth reliability** — Issue #3267's fix addresses Inflection/Antigravity token scope problems — an integration-related pain point that has now been resolved.

**Overall:** The community is actively contributing fixes and features, but there is an **escalating need for maintainer attention to context-management, resilience to external service failures (MCP), and server-oriented deployment flows**.

## 8. Backlog Watch

No new critical items are ageing unconsumed; however, the following deserve attention:

- **[Issue #3269 — MCP connection failure hangs agent loop](https://github.com/sipeed/picoclaw/issues/3269)** — 2+ weeks old, critical bug, no linked fix PR. Needs maintainer prioritization.
- **[Issue #3264 — `SplitMessage` infinite loop on fenced-code info string](https://github.com/sipeed/picoclaw/issues/3264)** — Marked stale and closed, but the root cause was never fixed. Should be reopened and triaged.
- **[PR #3315 — Telegram private chat topics support](https://github.com/sipeed/picoclaw/pull/3315)** — Opened today; awaiting maintainer review/merge.

*Digest generated from public GitHub data for sipeed/picoclaw, covering 2026-08-03 to 2026-08-04.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Based on the GitHub data for NanoClaw on 2026-08-04, here is the project digest:

---

## NanoClaw Project Digest — 2026-08-04

### 1. Today's Overview
NanoClaw had a **healthy, high-velocity day**: 9 pull requests were updated, with 6 closing/merging and 3 remaining open. The core team was highly active, handling infrastructure repins, bug fixes, and feature work. While no new releases were published, the project is clearly in a **stabilization and hardening phase**, marked by image security repins, bug fixes for session management, and regression fixes. Activity was focused on reliability for cold sessions, iMessage opt-in flows, and approval card UX. The single new issue—a runtime error in a dependency—was opened by a community member, but the low issue count suggests a stable baseline.

### 2. Releases
**No new releases** were published in the last 24 hours. The project remains in a continuous delivery mode via PRs, with the most recent release prior to this window likely carrying the `hardened-2026-08-02` agent image (see PR #3182 below).

### 3. Project Progress
The following PRs were **closed/merged** today, advancing the platform's stability and feature set:

- **[#3182] versions: repin the agent image to hardened-2026-08-02** ([link](nanocoai/nanoclaw PR #3182)): **Core infra**. Updated the agent base image to a hardened build (2026-08-02), but confirmed via the upstream digest that the NanoClaw content is identical. This is a **security hardening push** without feature changes.
- **[#3180] fix(update): surface hardened image migration** ([link](nanocoai/nanoclaw PR #3180)): **Operational skill**. Ensures users are notified about the hardened image migration, likely to avoid confusion during the repin.
- **[#3137] Fix engagement consistency and expose self-serve wiring controls** ([link](nanocoai/nanoclaw PR #3137)): **Feature + fix**. Agents can now inspect their wirings and request engagement-policy updates, while accumulated messages are kept as context without triggering warm-container turns. Also rejects invalid JS engagement regexes. This is a **major UX/control enhancement** for group-scoped agents.
- **[#3181] fix(imessage): opt in via first message to the assigned line** ([link](nanocoai/nanoclaw PR #3181)): **Fix**. Simplifies iMessage channel onboarding by allowing opt-in via the first message to the assigned line.
- **[#3143] Preserve resolved approval card content** ([link](nanocoai/nanoclaw PR #3143)): **Fix**. Terminal approval cards now retain their title and details, showing a muted decision/actor status instead of losing the context. Improves auditability and UX.
- **[#3178] Closed — opened against wrong repository** ([link](nanocoai/nanoclaw PR #3178)): **Housekeeping**. No upstream change.

**Key Takeaway**: The team is **hardening security and ensuring migration paths** (image repin) while **improving agent self-service** (engagement wiring) and **polishing UX** (approval cards).

### 4. Community Hot Topics
The most active items today (by comments/reactions) are:

- **[Issue #3179] SyntaxError: The requested module 'node:util' does not provide an export named 'styleText'** ([link](nanocoai/nanoclaw Issue #3179)): 1 comment. A user hit a **Node.js version mismatch** where `node:util`'s `styleText` is missing (likely Node < 20.12). This is a classic environment/dependency incompatibility, indicating a need for **clearer Node version documentation** or a fallback in the `@clack/core` dependency.

- **[PR #3184] fix(claude): rotate on missing transcript instead of resuming into a dead session** ([link](nanocoai/nanoclaw PR #3184)): **Open and well-scoped**. This fix directly addresses a frustrating sticky error (`No conversation found with session ID`) that occurs when a stored continuation's transcript file is deleted. It is a high-value fix for users with long-lived sessions.

**Underlying Need**: Users are running into **session lifecycle bugs** (dead transcripts) and **environment setup hurdles** (Node version compatibility). The community is actively supplying robust PRs for these, showing a **strong contributor base**.

### 5. Bugs & Stability
**One new issue** was logged today, ranked by severity:

- **[Medium] Issue #3179: SyntaxError: Missing 'styleText' export from 'node:util'** ([link](nanocoai/nanoclaw Issue #3179)): **Blocker for the user**, but likely an **environment issue** (Node < 20.12) rather than a core NanoClaw bug. The fix is likely a dependency bump or a README note on required Node versions. **No fix PR exists yet.**

**Stability PRs in motion (Open):**
- **[#3183] fix(group-init): pin cleanupPeriodDays so retention cleanup can't reap cold sessions** ([link](nanocoai/nanoclaw PR #3183)): Addresses a **data-loss bug** where 30+ day quiet sessions were being cleaned up, causing raw errors. This is a **High severity fix** that directly prevents user-facing errors and potential data loss.
- **[#3184] fix(claude): rotate on missing transcript instead of resuming into a dead session** ([link](nanocoai/nanoclaw PR #3184)): Addresses a **Medium severity bug** (session stuck in a dead state with confusing errors).

**Overall**: The project is **stable** with no new regressions reported. The active bugs are focused on session lifecycle edge cases, and **fix PRs are already open** for both.

### 6. Feature Requests & Roadmap Signals
The most significant feature signal today comes from **open PRs**:

- **[#3092] feat: support remote Streamable HTTP MCP servers** ([link](nanocoai/nanoclaw PR #3092)): **Still open** since July 19. This is a major feature that would allow NanoClaw to connect to **remote MCP servers** over HTTP, expanding the agent's ecosystem. It is a **strong candidate for the next minor version** (likely `v2.x`).

- **[#3137] Self-serve wiring controls** ([link](nanocoai/nanoclaw PR #3137)): **Merged today**. This is a **major step** towards giving group-scoped agents (and their owners) more **autonomy and observability**, indicating a roadmap focus on **self-service configuration**.

**Prediction**: The next release will likely bundle the **hardened image** (already shipped via #3182) with the **session reliability fixes** (#3183, #3184). The **remote MCP server support** (#3092) is a strong candidate for inclusion if it gets merged soon.

### 7. User Feedback Summary
- **Pain Point (Environment)**: Issue #3179 highlights that users are hitting **Node.js version-specific errors** (`styleText` missing). This points to a need for **clearer system requirements** in the README or an automated check during setup.
- **Pain Point (Session Lifecycle)**: PRs #3183 and #3184 are both driven by users hitting **confusing "No conversation found" errors** due to deleted/failed session transcripts or cleanup policies. The underlying sentiment is **frustration with dead ends** but the community is collaboratively providing fixes, indicating **high engagement and satisfaction** with the contribution process.
- **Satisfaction (Core Experience)**: The merging of #3137 (engagement consistency) and #3143 (approval card quality) shows a team **actively polishing the interactive experience**, which should increase overall user satisfaction with agent conversations and approvals.

**Overall Sentiment**: The user base is **technical and engaged**, actively submitting high-quality fixes for real bugs they encounter. The maintainers are **responsive and efficient**, clearing 6 PRs in a day.

### 8. Backlog Watch
- **[PR #3092] feat: support remote Streamable HTTP MCP servers** ([link](nanocoai/nanoclaw PR #3092)): **17 days old** and still open. While not stale, this is a **significant feature** that has been waiting for review/merge. It needs **maintainer attention** to either merge or provide feedback to avoid it going stale.

- **Issue #3179**: Only 1 day old, so **not yet a backlog concern**, but it is the **only open issue** and has no associated fix PR yet. It should be triaged soon to confirm whether it's a README fix or a dependency patch.

No other issues or PRs appear to be unreasonably unanswered. The backlog is **clean**, with the MCP feature being the primary item that needs a decision.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Based on the GitHub data from NullClaw (github.com/nullclaw/nullclaw) for 2026-08-04:

---

## 1. Today's Overview

NullClaw shows a focused but moderate level of activity in the last 24 hours. The project has one open issue awaiting resolution (a scheduler authorization problem) and a notable set of five pull requests being updated, of which two have been merged/closed and three remain in review. A significant portion of recent activity centers on hardening the network and proxy handling layers, with PRs targeting both the main provider transport and Telegram Bot API integrations. The two closed PRs signal progress on streaming tool-call functionality, a core feature area. Overall, the project appears to be in a steady maintenance and hardening phase, with community contributions playing a key role in advancing reliability.

## 2. Releases

No new releases were published in the last 24 hours. The project's latest release information is not available in the provided data.

## 3. Project Progress

Two PRs were closed/merged, both focused on improving streaming tool-call support:

- **[PR #964: Enable native API-level tool calls during streaming](https://github.com/nullclaw/nullclaw/pull/964)** – This PR addresses a critical limitation where streaming requests could include API-level tools, but structured tool-call deltas were not preserved in `StreamChatResult`. This fix enables the Agent to execute pure streamed tool responses, which is a foundational improvement for tool-using agents.

- **[PR #965: Structured streaming tool-call support for SSE parser](https://github.com/nullclaw/nullclaw/pull/965)** – A companion fix that builds on #964. It handles servers that leave model-emitted XML in `delta.content` by enabling `tools[]` + `tool_choice: "auto"` in streaming requests, making the SSE parser more robust across different provider implementations.

Together, these merged PRs advance the core agent streaming experience and expand compatibility with various LLM providers.

## 4. Community Hot Topics

- **[Issue #915: [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)** – This is the most active topic, with 4 comments and 1 reaction. The user is running NullClaw on Ubuntu with an external Ollama host (qwen3.6:27b on an RTX 3090) and reports the scheduler not working in both Telegram chats and other contexts, despite general tool calling functioning. The issue has been open since May 15 and was last updated just yesterday, indicating sustained but unresolved community interest. This appears to be a significant pain point for users who rely on scheduled tasks.

## 5. Bugs & Stability

**Active Bug:**
- **Issue #915: Scheduler unauthorized** – [GitHub Link](https://github.com/nullclaw/nullclaw/issues/915). The scheduler component fails to work, returning unauthorized errors. Severity: **Medium-High**, as it affects a core feature (scheduled tasks) and has gone unresolved for several months (created May 15, still open). No fix PR has been linked to this issue.

**Stability Improvements (via PRs, not bug reports):**
- **PR #983**: Fixes proxied provider requests to use a pinned curl path, avoiding credential exposure in argv.

## 6. Feature Requests & Roadmap Signals

The open PRs provide strong signals for roadmap direction, particularly around **proxy/network configuration hardening**:

- **PR #982**: Telegram proxy support via curl transport – enables users to route Telegram Bot API through explicit proxies.
- **PR #983**: Pinned curl path for provider proxy requests – improves security and reliability for proxied LLM provider connections.

These indicate that **advanced network configurations (proxies, custom hosts)** are a growing use case. Given the [dependabot PR for Alpine 3.24](#956) is still open, a container base image upgrade is also on the horizon. It is likely that the next release will include refined proxy support for both Telegram and provider endpoints.

## 7. User Feedback Summary

The only direct user feedback in the last 24 hours is via Issue #915, which reveals a specific real-world pain point:

- **Pain Point:** The scheduler feature fails for users with external Ollama hosts. Even when the core LLM and tool-calling work fine, the scheduler does not function – creating a frustrating experience for automation-driven use cases.
- **Use Case:** Users are running self-hosted models (Qwen3.6:27b) on dedicated GPU hardware (RTX 3090) and expect NullClaw to be a reliable orchestrator for both interactive and scheduled tasks.
- **Satisfaction:** The user appears mostly satisfied with general tool calling but is blocked on scheduled automation, suggesting a gap in feature parity between interactive and scheduled modes.

## 8. Backlog Watch

- **[Issue #915: Scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)** – Open since 2026-05-15 (nearly 3 months), with 4 comments and recent activity. This is a long-standing bug affecting a core feature and deserves maintainer attention, as it appears to be a replication/authorization issue specific to certain configurations (external Ollama hosts).

- **[PR #956: Bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956)** – Open since 2026-06-15, this automated dependency update has been pending for nearly 2 months. For a Docker-based deployment, staying on a slightly older base image could carry security or compatibility implications. It warrants a maintainer review and decision.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-04

## 1. Today's Overview

IronClaw is in an intense phase of architectural refactoring (the "Wave 3" restructuring), with 47 issues and 50 PRs updated in the last 24 hours. The project is actively executing a multi-wave re-architecture plan (WS1–WS8) focused on crate re-layering, dependency tightening, and eliminating cross-crate violations. A notable bug-bash QA session surfaced six user-facing issues (P1/P2 severity) across Google OAuth, Telegram formatting, and streaming status, indicating active user testing on the Railway-hosted QA instance. CI tooling is strained — the Reborn scope classifier (an automated PR test planner) has multiple gaps that are blocking merges, which several PRs are working around. Despite high activity, no releases were cut in the last 24 hours; the project is targeting a **weekly Wednesday release** (per PR #7049), so the next cut is expected imminently.

---

## 2. Releases

**None.** No new versions were published in the last 24 hours. The project has a release PR open (#5598) pending for `ironclaw_common` (0.4.2 → 0.5.0, API-breaking) and `ironclaw_skills` (0.3.0 → 0.4.0, API-breaking), and a new **weekly Wednesday release strategy** was merged (#7049). Expect a release this Wednesday with breaking changes in `ironclaw_common` and `ironclaw_skills`.

---

## 3. Project Progress

**Merged/Closed PRs (18 total in last 24h)** — key items:

| PR | Description | Status |
|---|---|---|
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | **WS3/WS4**: Shed model gateway and tool disclosure into `loop_host` — move-only, zero tests lost | ✅ Closed |
| [#7088](https://github.com/nearai/ironclaw/pull/7088) | Expose custom MCP registration as model-visible `builtin.extension_register_hosted_mcp` tool | ✅ Closed |
| [#7023](https://github.com/nearai/ironclaw/pull/7023) | Dependency bump group (base64, toml, rstest) | ✅ Closed |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | Resolve custom MCP auth during registration, before admitting package | ✅ Closed |
| [#7040](https://github.com/nearai/ironclaw/pull/7040) | Close WS2 strays and WS2.1 follow-ups (2 of 3 rows had stale claims — corrected) | ✅ Closed |
| [#7049](https://github.com/nearai/ironclaw/pull/7049) | **Weekly Wednesday release strategy** — new process documented | ✅ Closed |

**Active large refactors in flight:**
- [#7065](https://github.com/nearai/ironclaw/pull/7065) — Sandbox lane merge + `ironclaw_mcp` contracts flip (XL)
- [#7084](https://github.com/nearai/ironclaw/pull/7084) — Move `wit/` inside owning crate (XL, unblocked after fixing planner gap)
- [#7090](https://github.com/nearai/ironclaw/pull/7090) — Split `obligations.rs` into three chartered owners (XL)
- [#7094](https://github.com/nearai/ironclaw/pull/7094) — Close Wave 2: registry re-layer, include_str! kills, coverage (XL)
- [#7096](https://github.com/nearai/ironclaw/pull/7096) — Route operator secrets through a `product_contracts` port (XL, security-sensitive)

---

## 4. Community Hot Topics

| Item | Type | Comment Count | Topic |
|---|---|---|---|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Epic (closed) | 15 | **Error-recoverability endgame** — model recovers from 100% of errors it sees. Defines a 5-part recoverability contract (survive, see, carry cause+fix, get a turn, no false non-success). |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Epic (closed) | 4 | **Hermetic capability and journey testing platform** — mechanically answer "does every capability have deterministic coverage?" |
| [#7087](https://github.com/nearai/ironclaw/issues/7087) | Bug (open) | 3 | **Reborn PR test planner hard-fails** on Dockerfile, `.githooks/`, `.claude/`, `crates/AGENTS.md` — CI blocks all PRs touching these paths |
| [#7100](https://github.com/nearai/ironclaw/issues/7100) | Bug (closed) | 2 | **Crate-family map unreachable** — any PR editing `crates/AGENTS.md` fails before tests run (fixed in #7084) |

**Underlying dynamics:** The community (core contributors) is deeply engaged in the Wave-3 re-architecture. The #6284 epic indicates a strategic push toward **error-resilient agents** — a product-quality bet. The CI planner issues (#7087, #7100) are the most operationally painful topics — they block *all* merges touching common files and are actively being patched by contributors.

---

## 5. Bugs & Stability

**Ranked by severity:**

### P1 (Critical)
1. **[#7074](https://github.com/nearai/ironclaw/issues/7074) — Multi-tool meeting research fails** after retrieving calendar data; model calls an unavailable function. *No fix PR yet.*
2. **[#7069](https://github.com/nearai/ironclaw/issues/7069) — Google services require repeated authentication** despite completed OAuth flow. **Fix PR exists: [#7077](https://github.com/nearai/ironclaw/pull/7077)** (one vendor authorization covers every installed extension sharing the account — verified bug, closes #7069).

### P2 (Moderate)
3. **[#7075](https://github.com/nearai/ironclaw/issues/7075) — Agent ignores follow-up question after failed run** — resumes failed task instead of answering new request. *Related to #6284 error-recoverability epic.*
4. **[#7072](https://github.com/nearai/ironclaw/issues/7072) — Telegram renders raw Markdown** instead of formatted text.
5. **[#7071](https://github.com/nearai/ironclaw/issues/7071) — "Reconnecting" status flashes on every streaming chunk**.
6. **[#7073](https://github.com/nearai/ironclaw/issues/7073) — Agent leaks internal tool names and routing logic** in user-facing responses.

### P2/P3 (Architecture + CI)
7. **[#7085](https://github.com/nearai/ironclaw/issues/7085) — `check-version-bumps.sh` silently skips WIT cross-check on macOS** (BSD sed incompatibility).
8. **[#7081](https://github.com/nearai/ironclaw/issues/7081) — Docker fail-closed test gate wired to nothing** — `IRONCLAW_REQUIRE_DOCKER_TESTS` never set, so sandbox tests silently skip (security-relevant gap).
9. **[#7082](https://github.com/nearai/ironclaw/issues/7082) — `builtin.skill_install`: inline multi-file installs unreachable, URL installs silently drop files/source/source_url** — input gate rejects supported shapes, accepts shapes it discards.
10. **[#7068](https://github.com/nearai/ironclaw/issues/7068) — MCP spec `destructiveHint` defaults to `true` when omitted, but code reads `false`** — absent-and-destructive tools are misclassified as safe. *Security-relevant.*
11. **[#7041](https://github.com/nearai/ironclaw/issues/7041) — WASM guest diagnostics can expose detectable secrets** through runtime, model causes, and tracing (QA security review).

### CI Infrastructure Bugs (Blocking)
12. **[#7087](https://github.com/nearai/ironclaw/issues/7087) — Reborn planner hard-fails** on Dockerfile, `.githooks/`, `.claude/`, `crates/AGENTS.md`, `test-tools/`, scripts/`. **Worked around in #7084.**
13. **[#7100](https://github.com/nearai/ironclaw/issues/7100) — Planner fails on `crates/AGENTS.md`** — crate-family map unreachable. **Closed** (fixed in #7084 #7100).
14. **[#7060](https://github.com/nearai/ironclaw/issues/7060) — Platform-owned WIT and extension package changes fail the Reborn scope classifier.**

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Signal Strength |
|---|---|---|
| **[#7097](https://github.com/nearai/ironclaw/issues/7097) — Billing support escalation pathways** on billing page (P2, feedback, feature). User uncertainty about who owns NEAR AI billing issues. | sergeiest (user feedback) | Weak — likely WebUI QoL |
| **[#7044](https://github.com/nearai/ironclaw/issues/7044) — Onboarding to channel-first approach** — WebUI opens to blank slate; users don't know what to do. Epic: OOBE for General Assistant use case. | sergeiest | Strong — OOBE prototype PR [#6994](https://github.com/nearai/ironclaw/pull/6994) is open (UI-only carousel, inline cards, agent-mode pill) — **likely lands next release**. |
| **[#6941](https://github.com/nearai/ironclaw/issues/6941) — Epic: skills the model can self-create, find, choose, use** (subset of #6565, fully measured). | pranavraja99 | Strong — strategic roadmap item; ties to #6284 error-recoverability. |
| **[#7098](https://github.com/nearai/ironclaw/issues/7098) — Retire `local_runtime` misnomer** (191 occurrences, 6 public API symbols). | BenKurrek | Internally planned (WS6) |
| **[#7093](https://github.com/nearai/ironclaw/issues/7093) — 17 cross-crate `include_str!` sites remain** — needs owners to reach `REPORT_ONLY=false`. | BenKurrek | Internally planned (WS2) |
| **[#7091](https://github.com/nearai/ironclaw/issues/7091) — 3 callerless public builder methods on `HostRuntimeServices`** — dead code to remove. | BenKurrek | Internally planned |
| **[#7095](https://github.com/nearai/ironclaw/issues/7095) — `ironclaw_extension_manager` holds direct `ironclaw_secrets` edge** — layer violation (§8.2). | BenKurrek | Internally planned (WS8) |

---

## 7. User Feedback Summary

**Pain points from the Railway QA bug-bash (real user instances):**

1. **Authentication friction (P1):** Users must re-authenticate Google services repeatedly — one OAuth flow should cover all extensions sharing the account. *Fix in review (#7077).*
2. **Agent reliability (P1/P2):** Runs fail mid-task after successful retrieval; the agent then ignores follow-up questions and resumes the failed task — poor recovery behavior. This is exactly what the #6284 error-recoverability epic aims to fix.
3. **Transparency vs. usability (P2):** The agent leaks internal tool names and routing logic instead of explaining simply (#7073), while Telegram output is unformatted raw Markdown (#7072) — users expect clean, human-readable output.
4. **Streaming UX (P2):** "Reconnecting" status flashes on every chunk, undermining trust in the connection (#7071).
5. **Onboarding (General):** New users land on a blank WebUI with no guidance — adoption friction (#7044). OOBE prototype (#6994) directly addresses this.
6. **Billing clarity (P2):** Users don't know who handles billing issues or how to escalate (#7097).

**Satisfaction signals:** The Wave-3 refactoring shows disciplined engineering (move-only PRs with zero test edits, measurable verification). The community is responsive — bugs filed during bug-bash are getting fix PRs within 24h (#7069 → #7077).

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|---|---|---|
| **[#5598](https://github.com/nearai/ironclaw/pull/5598) — Release PR** (ironclaw_common 0.5.0, ironclaw_skills 0.4.0, API-breaking) | Open since **2026-07-03** (32 days) | Long-pending release with breaking changes. New weekly-Wednesday strategy (#7049) should force this out. |
| **[#6957](https://github.com/nearai/ironclaw/pull/6957) — IronHub installed package lifecycle** (receipts, `ironhub.status`, `ironhub.update`) | Open since 2026-07-31, updated 08-03 | Large feature (XL) not yet commented on by maintainers; may need review scheduling. |
| **[#6994](https://github.com/nearai/ironclaw/pull/6994) — OOBE automation-tasks prototype** | Open since 2026-08-01, updated 08-04 | UI prototype waiting for design review; no comments yet from core team. Potential next-release feature. |
| **[#7087](https://github.com/nearai/ironclaw/issues/7087) — Reborn planner hard-fails** on common paths | Filed 08-03 | Despite workaround in #7084, the planner gap itself is not fixed — will continue to block future PRs. |
| **[#7081](https://github.com/nearai/ironclaw/issues/7081) — Docker gate wired to nothing** | Filed 08-03 | Security-relevant: sandbox tests silently skip in CI; a single env-var fix would close this. |
| **[#7041](https://github.com/nearai/ironclaw/issues/7041) — WASM diagnostics may leak secrets** | Filed 08-03 | Security review finding; no fix PR yet. Stacked PR #7048 is in context. |

---

## Project Health Assessment

**Overall: Healthy but under heavy refactoring pressure.**

- **Velocity:** Very high — 50 PRs updated in 24h, 18 merged/closed.
- **Quality discipline:** Strong — move-only PRs with zero-test-loss guarantees, dated amendments for stale claims (#7040), explicit risk tags.
- **Risk areas:** (1) CI planner gaps are eroding trust in automated gating; (2) 6 P1/P2 user-facing bugs from QA bash are not all fixed; (3) The Wave-3 refactor spans 8+ large PRs simultaneously — merge conflicts and integration risk are non-trivial.
- **Forward-looking:** The Wednesday release (#7049) and error-recoverability epic (#6284) are the two biggest product bets. Expect 0.5.0/0.4.0 releases with breaking changes within days.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-04

## Today's Overview

LobsterAI shows **moderate-to-high activity** on 2026-08-04, with 12 PRs updated in the last 24 hours and 2 active issues. The project is in a **release stabilization and polish phase**: 7 PRs were merged/closed (including a revert and a hotfix) while 5 remain open, and no new releases were tagged. Notably, the activity cluster centers on **Windows-specific fixes (NSIS installer process cleanup)**, **credit campaign restorations**, and **UI/UX enhancements (sidebar filters, Markdown export)**. The presence of multiple reverts and re-opened PRs (#2421, #2422, #2423) suggests some branch churn, but the overall health is good — the team is actively addressing regressions and shipping incremental improvements. Long-stale PRs from April (e.g., #1208, #1209, #1212) remain unmerged, indicating a possible maintainer bottleneck.

## Releases

**No new releases** were published in the last 24 hours. The most recent version referenced in issue reports is **v2026.3.30** (from March 30, 2026), suggesting the project is in a period between releases, likely preparing for the next tagged version.

---

## Project Progress

**7 PRs were merged/closed today**, reflecting three main themes:

### 1. Windows Stability & Installer Fixes
- **[#2420 — fix(nsis): re-kill survivor processes on every stop poll round](https://github.com/netease-youdao/LobsterAI/pull/2420)** *(closed)* — A Windows-specific fix where `Stop-Process` was only issued once before polling, allowing survivor processes to escape the shutdown gate. The fix re-issues `Stop-Process` on every poll round and adds per-process logging (name/pid/path) for timeout diagnostics.

### 2. Credit Campaign & Monetization
- **[#2419 — feat(activity): add startup credit campaign](https://github.com/netease-youdao/LobsterAI/pull/2419)** *(closed)* — Adds a configurable startup credit campaign popup for the NetEase user acquisition campaign, including persistent entry on the new-conversation page, login continuation, and credit claim flows.
- **[#2424 — fix(activity): restore active credits campaign](https://github.com/netease-youdao/LobsterAI/pull/2424)** *(closed)* — A **direct revert** of commit `aced16fc` to restore the credits campaign while still active, including the 500-credit claim flow for eligible non-subscribers (IPC, UI, and assets). This suggests the campaign was accidentally disabled and is now restored.

### 3. Sidebar UX Enhancement
- **[#2418 — feat(sidebar): add multi-agent task activity filter](https://github.com/netease-youdao/LobsterAI/pull/2418)** *(closed)* — Adds a Codex-inspired task activity filter button to the sidebar (hidden when collapsed, blue indicator when active) to help users find tasks across multiple agents.

### 4. Reverts & Branch Housekeeping
- **[#2423 — Revert "Liuzhq/fix btw tools"](https://github.com/netease-youdao/LobsterAI/pull/2423)** *(closed)*, **[#2422](https://github.com/netease-youdao/LobsterAI/pull/2422)**, **[#2421](https://github.com/netease-youdao/LobsterAI/pull/2421)** — Three closed PRs around the "fix btw tools" work, likely branch churn and final merge.

---

## Community Hot Topics

### Most Active Issues (by comments)

1. **[#1206 [Bug] 私有化部署的kimi2.5模型分析文档会重复处理或回复进度](https://github.com/netease-youdao/LobsterAI/issues/1206)** — 1 comment
   - **Author**: ze23sw | **Created**: 2026-04-01 | **Updated**: 2026-08-03
   - **Context**: A self-hosted kimi2.5 deployment repeats actions/replies when analyzing documents. The user reports it's 100% reproducible but **switching models resolves it**, pointing to a model-specific compatibility bug.

2. **[#1213 [Feature Request] 为会话详情添加「导出为 Markdown」功能](https://github.com/netease-youdao/LobsterAI/issues/1213)** — 1 comment
   - **Author**: MaoQianTu | **Created**: 2026-04-01 | **Updated**: 2026-08-03
   - **Context**: A feature request for exporting conversation details to Markdown instead of only images, citing poor editability and searchability of screenshots. The user even provided an implementation approach referencing existing `saveInlineFile` IPC.

### Analysis of Underlying Needs
- **Model compatibility resilience**: Issue #1206 highlights that self-hosted deployments (kimi2.5) may have integration gaps that commercial models handle well. This signals a need for better model-agnostic error handling.
- **Export & portability**: Issue #1213 + PR #1214 confirm a real user need for **text-based conversation export**. The fact that both issue and PR exist (still open/stale) suggests the feature is ready but blocked on review/merge.

---

## Bugs & Stability

| Severity | Issue/PR | Description | Fix Available? |
|----------|----------|-------------|----------------|
| **High** | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | Kimi2.5 (self-hosted) **repeats actions/replies indefinitely** when analyzing documents — 100% reproducible, blocks workflow | No fix PR referenced; model switching works around it |
| **Medium** | [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) | Windows NSIS uninstaller could leave **survivor processes** running after shutdown polls | ✅ Fixed in PR #2420 (merged today) |
| **Medium** | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | Web search skill fails if Chrome is launched with `--disable-blink-features=AutomationControlled` (external injection via user-data-dir / config / env vars) | PR #1209 exists but **stale (since April)** |
| **Low** | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | Cowork session interruptions (429/network/server errors) require manual re-typing; error bubbles lack retry buttons — UX friction, not data loss | PR #1208 exists but **stale (since April)** |

**Regression note**: PR #2423 (Revert "fix btw tools") and PR #2424 (restore credits campaign) indicate a recent regression in the credits campaign was caught and reverted same-day — good incident response.

---

## Feature Requests & Roadmap Signals

### Active Requests (with PRs pending merge)
1. **Export conversation as Markdown** ([Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) + [PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214)) — Complete implementation exists (generates `.md` with user prompts, tool calls, assistant replies; truncates long tool outputs at 300 chars). **Strong candidate for next release** if maintainers merge the 4-month-old PR.

2. **Manual retry button in Cowork sessions** ([PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208)) — Adds a retry button in error bubbles for rate-limit (429), network, and server errors. Well-designed error classification (`RETRYABLE_ERROR_KEYS`). **Candidate for next release**; also stale since April.

3. **Increase custom model providers from 10 → 20** ([PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212)) — Removes hard-coded `custom_0` through `custom_9` cap. Low-risk, high-value for power users. **Stale since April**.

4. **Sidebar multi-agent activity filter** ([PR #2418](https://github.com/netease-youdao/LobsterAI/pull/2418)) — **Merged today.** Feature is now live (Codex-inspired).

### Likely Next Version Content
Based on today's merges: **startup credit campaign** (#2419) and **sidebar task filter** (#2418) are already in. The three April PRs (#1208, #1209, #1212) are the strongest candidates for the next release burst if the team clears the review backlog.

---

## User Feedback Summary

### Real Pain Points Expressed
1. **Self-hosted model reliability** (#1206): Users deploying private models (e.g., kimi2.5) experience **repetitive actions and stuck progress indicators** — a showstopper for enterprise/offline deployments. The tone suggests confusion ("is this a bug or should I keep waiting?") and relief that switching models works.
2. **Export limitations** (#1213): Users find image-only export insufficient for citation, editing, and search. The request is **concrete and measured** — the user proposed a specific implementation path, indicating a power-user with clear workflow needs.
3. **Manual retry friction** (#1208 PR description): Users lose context when Cowork sessions fail mid-conversation; re-sending the last message manually is tedious and error-prone.

### Satisfaction Signals
- **Fast regression handling**: The credits campaign revert (PR #2423→#2424) shows the team **catches and fixes regressions within days**.
- **Windows installer polish**: PR #2420 demonstrates attention to edge-case process cleanup, improving uninstall reliability.

### Dissatisfaction Signals
- **Stale PRs**: Four PRs from April 2026 remain open for ~4 months (as of Aug 2026). Users who contributed implementations (e.g., #1214) may feel their work is ignored.
- **No official releases** in the observation window, despite substantial merged work — users on v2026.3.30 may be waiting for bug fixes (e.g., #1206) to ship.

---

## Backlog Watch

### Long-Open PRs Needing Maintainer Attention (all ~4 months old, since 2026-04-01/02)
| PR | Description | Risk if Ignored |
|----|-------------|-----------------|
| [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | Cowork manual retry button | UX pain persists for all rate-limited users |
| [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | Fix web-search Chrome flag block | Web-search skill remains broken for some environments |
| [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | Allow 20 custom providers (from 10) | Power users blocked from adding more providers |
| [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | Export conversation to Markdown | User-requested feature with issue support remains unavailable |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot: Electron 40.x → 43.x | **Security/compat risk**: Electron 40 is likely EOL; delaying upgrades increases vulnerability exposure |

### Long-Open Issue Needing Response
- **[#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) (kimi2.5 repetition bug)**: Opened April 1, last activity August 3 (stale). No acknowledged fix. This affects **private/enterprise deployments**, a key differentiator for LobsterAI. If unaddressed, it risks churn from self-hosted users.

---

*Data source: GitHub (netease-youdao/LobsterAI) | Digest generated: 2026-08-04*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-04

## 1. Today's Overview

Moltis is in a quiet but purposeful development phase. Activity over the last 24 hours was minimal, with zero issues updated and only one Pull Request open and pending review. No new releases were published, and no issues were closed, indicating that the team is likely consolidating recent work rather than rapid-fire shipping. The single open PR (#1183) proposes a substantial enhancement to the MCP (Model Context Protocol) server management capabilities, suggesting that the project's focus is on expanding its server lifecycle and onboarding functionality. Overall, the project health appears stable, with development momentum concentrated in the MCP domain.

## 2. Releases

No new releases were published in the last 24 hours. The most recent public release remains the previous version; no changelog, migration notes, or breaking changes to report at this time.

## 3. Project Progress

No Pull Requests were merged or closed in the last 24 hours. The sole open PR (#1183) is awaiting review and represents the current primary workstream.

## 4. Community Hot Topics

**PR #1183 — feat(mcp): add managed repository bundles** — [Link](https://github.com/moltis-org/moltis/pull/1183)
- Author: penso | Opened: 2026-08-02 | Updated: 2026-08-03
- Comments: 0 | 👍: 0

While this PR has no comments or reactions yet, its scope is significant. It introduces managed Git repository bundles for MCP servers, covering discovery, preview, installation, updates, rollback, and removal. It also adds HTTPS credential support, a pinned managed SSH transport, vault lifecycle integration, and imported repository-backed configurations. The stated goal of simplifying the web onboarding experience suggests a strategic push to lower the barrier for new users adopting MCP servers through Moltis.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported or fixed in the last 24 hours. There are no stability concerns to rank or track at this time.

## 6. Feature Requests & Roadmap Signals

The most prominent roadmap signal comes from PR #1183, which, if merged, would deliver:

- Managed repository bundles for MCP server lifecycle (discover → preview → install → update → rollback → remove)
- HTTPS credential handling and pinned SSH transport for secure, reliable Git operations
- Vault lifecycle integration, tying secret management into server provisioning
- Imported repository-backed MCP configurations, enabling configuration-as-code

These features point toward a next release focused on enterprise-ready MCP management, with an emphasis on secure credential handling and simplified onboarding. The "web onboarding" simplification hints that a user-facing web UI iteration may accompany this change.

## 7. User Feedback Summary

No direct user feedback (issues, comments, or reactions) was recorded in the last 24 hours. However, the nature of PR #1183 implies user pain points around on-premises/private MCP server discovery and lifecycle management, as well as friction in initial setup. The emphasis on HTTPS credentials and pinned SSH suggests users have encountered authentication hurdles in secure environments. The rollback capability implies a need for safety nets when updating MCP servers, likely driven by prior update failures or configuration regressions.

## 8. Backlog Watch

No long-unanswered issues or stale PRs are currently visible in the backlog. The only open PR (#1183) was updated within the last day and appears to be actively moving through the review pipeline. No items require immediate maintainer attention beyond the standard review of the pending MCP feature.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date: 2026-08-04**

---

## 1. Today's Overview

CoPaw is in a **high-velocity release phase**, with the team shipping **v2.1.0-beta.1** and processing significant pull request volume (50 PRs updated in 24h, ~48% merged/closed). Issue resolution rate is moderate (5 of 20 closed), but the backlog contains **12 open bugs** indicating stability concerns, particularly around agentic execution (shell commands blocking sessions, output flooding, silent failures). Release engineering appears to be a current focus, evidenced by release-duty verification and CI pipeline fixes. Community engagement is active with substantive bug reports and feature suggestions, suggesting healthy real-world adoption.

---

## 2. Releases

**v2.1.0-beta.1** (published 2026-08-03) — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.1)

Key changes:
- **fix(chat):** Prevent stale channel identity leaking into new chats ([PR #6382](https://github.com/agentscope-ai/QwenPaw/pull/6382))
- **feat(inbox):** Sidebar inbox wobbles on new approvals with color-coded badge dots ([PR via @lalaliat](https://github.com/agentscope-ai/QwenPaw/pull/6382))

**Breaking changes:** None documented.

**Migration notes:** None provided. A [release-duty verification issue](https://github.com/agentscope-ai/QwenPaw/issues/6656) suggests installation verification is in progress.

---

## 3. Project Progress

**Notable merged/closed PRs (24 today):**

**Core stability & fixes:**
- [PR #6203](https://github.com/agentscope-ai/QwenPaw/pull/6203): Bounded/hidden Windows tasklist liveness probe (`command_runner.py` timeout fix)
- [PR #6653](https://github.com/agentscope-ai/QwenPaw/pull/6653): Fence-aware section extraction in real-behavior-proof CI gate (fixes [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626))
- [PR #6654](https://github.com/agentscope-ai/QwenPaw/pull/6654): Cap Playwright below 1.62 to unblock macOS desktop verify (release-blocking)
- [PR #6579](https://github.com/agentscope-ai/QwenPaw/pull/6579): Use bundled Python for script execution (desktop)

**spawn_subagent schema fixes** — addressed via [PR #6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) and [PR #6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) (normalize empty batch placeholders).

**CI/Infrastructure:**
- [PR #6661](https://github.com/agentscope-ai/QwenPaw/pull/6661): Platform publish workflow for manual dispatch

---

## 4. Community Hot Topics

**Highest engagement today:**

1. **[Issue #6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) — GPT-5.6 prompt caching (8 comments)** — Request to support `prompt_cache_key`, `prompt_cache_options`, `prompt_cache_breakpoint` for multi-turn cost reduction. Strong signal that users are hitting token-cost ceilings.

2. **[Issue #6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) — spawn_subagent batch placeholder bug (6 comments)** — Three-PR saga (#'s 6595, 6609, 6658) converging on solution. *Resolved by merged PRs.*

3. **[Issue #6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) — Independent Python environment (4 comments, closed)** — User requested bundled Python for script execution; **fixed by PR #6579**.

4. **[Issue #6555](https://github.com/agentscope-ai/QwenPaw/issues/6655) — Console channel approval silent timeout (3 comments, closed)** — Security approvals not rendered in console channel; agent waits 300s silently.

**Underlying needs:** Users demand (a) cost controls for multi-turn agent loops, (b) robust desktop/console UX, and (c) predictable runtime isolation. The focus on silent failures suggests trust is the key adoption barrier.

---

## 5. Bugs & Stability

**Ranked by severity:**

| Severity | Issue | Summary | Status |
|----------|-------|---------|--------|
| 🔴 Critical | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | Long-running shell commands block Feishu session **1.5 hours**, orphan subprocess on cancel | Open, no fix PR |
| 🔴 Critical | [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) | WeChat cron push **silently never delivered** (ret=-2, context_token invalid), burned 44M tokens | Open, no fix PR |
| 🟠 High | [#6647](https://github.com/agentscope-ai/QwenPaw/pull/6635) | Desktop UI **fully black** when WebView2 crashes (0xc0000006); no recovery | Open, no fix PR |
| 🟠 High | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) | Console pages fail on slow networks (MB responses vs 30s timeout) | Open, no fix PR |
| 🟠 High | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | `execute_shell_command` huge output **freezes UI** | Closed |
| 🟡 Medium | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP delegate returns "no text output" on notification race | Fix PR #6623 open |
| 🟡 Medium | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | Crash: "ToolCallBlock" has no field "extra_content" (agentscope 2.0.4.post1 incompat) | Open; related to #6612 |
| 🟡 Medium | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | qwenpaw 2.0.1 incompatible with agentscope 2.0.4.post1 (crashes + deadlock) | Open, no fix PR |
| 🟢 Low | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Auto-compression doesn't trigger `summarize_when_compact` (manual `/compact` works) | Open, no fix PR |

---

## 6. Feature Requests & Roadmap Signals

**Requested features (likelihood of inclusion in v2.1):**

| Feature | Issue | Likelihood | Rationale |
|---------|-------|------------|-----------|
| Per-task output directories (media dir cleanup) | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 🟢 High | Simple change, high UX value |
| Direct file-path reading (no upload-copy) for desktop drag-drop | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | 🟢 High | Aligns with desktop UX expectations; ties to bundled Python work |
| Multi-line filename display in chat composer | [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583) | 🟢 High | **Fix PR #6662 open** |
| GPT-5.6 prompt caching | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 🟡 Medium | Tied to providers; likely requires upstream support |
| Model fallback with cooldown | [#2199](https://github.com/agentscope-ai/QwenPaw/pull/6659) / [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | 🟢 High | PR open, fixes 3 issues |

**Roadmap signal:** [PR #6645](https://github.com/agentscope-ai/QwenPaw/pull/6645) "Feat/os enhancements" (marked **Do not merge**) explores full-screen desktop, menu bar, Dock, window management — a potential future desktop-OS integration layer.

---

## 7. User Feedback Summary

**Positive signals:**
- Users actively building on QwenPaw (Java services, multi-agent workflows, API automation).
- Community submits detailed root-cause analyses with reproduction steps (e.g., [Issue #6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) token-burn report).

**Key pain points:**

1. **Silent failures erode trust** — WeChat delivery showing `success` with zero delivery ([#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614)); console approvals invisible ([#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)); sandbox constraints unenforced ([#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657)).

2. **Version compatibility fragility** — Multiple reports of qwenpaw breaking with agentscope updates ([#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612), [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619)) — a systemic risk.

3. **Desktop UX gaps** — WebView2 crash black-screens, frozen UI on large outputs, script execution relying on system Python ([#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160), fixed in #6579).

4. **Multi-agent discoverability** — "50+ rounds before discovering Default Agent doesn't auto-invoke other agents" ([#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)) — documentation not enough; guided onboarding needed.

---

## 8. Backlog Watch

**Long-unanswered issues needing maintainer attention:**

| Issue | Age | Status | Why it matters |
|-------|-----|--------|----------------|
| [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199) — Model fallback PR | 133 days (since Mar 24) | Open | **Duplicated by PR #6659** — two implementations of the same feature; needs consolidation decision |
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) — agentscope incompat | 4 days | Open, no maintainer response | Blocks users on latest agentscope; systemic dependency risk |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) — Shell blocking sessions | 4 days | Open, no maintainer response | Critical: session hijacking for 1.5hr |
| [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) — WeChat silent failure | 4 days | Open, no maintainer response | Silent delivery failure with token waste |
| [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) — Multi-agent guidance gap | 3 days | Open, no maintainer response | UX/discoverability issue affecting new users |

**Recommendation:** Prioritize responses to [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) and [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) — both have direct impact on production users. Resolve the [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199)/[#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) PR duplication to avoid wasted effort.

---

*Digest generated 2026-08-04 from CoPaw GitHub activity data.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Based on the GitHub data for ZeroClaw from 2026-08-04, here is the project digest.

---

## ZeroClaw Project Digest — 2026-08-04

### 1. Today's Overview
ZeroClaw is in a highly active state, with 50 issues and 50 PRs updated in the last 24 hours. The project is currently processing a significant amount of architectural discussion and review, as evidenced by the high number of open RFCs (Goal mode, Unified attachments, SOP contracts). While there are 47 open PRs awaiting review or author action, only 3 were merged/closed today, suggesting the maintainers are focusing more on refinement and review than on merging large features. The backlog contains several high-priority bugs (P1) related to security and workflow blocking, but the community remains engaged in detailed discussions, and the maintainer decision tracker (#8692) indicates a structured process to keep this momentum moving forward.

### 2. Releases
No new releases were published in the last 24 hours. The project appears to be in a pre-release phase for v0.9.0, with a dedicated tracker (#7432) coordinating auth, security, and breaking-change work for that milestone.

---

### 3. Project Progress
Only 3 PRs were merged or closed today. The merged/closed items include:
- **#6641** (Closed): Feature for turn-level OTel trace correlation was closed, likely as completed or superseded by the larger observability RFC (#7232).
- **#9162** (Closed): A pure refactor extracting duplicated OAuth-refresh retry loops into a shared helper (`oauth_common`).
- **#7113** (Closed): A feature to show visible lifecycle progress in Slack while the agent is working.

The majority of PR activity remains in review status. Key PRs under active development but not yet merged include a large A2A outbound client implementation (#9324), a security fix to authorize approval responders across channels (#9574), and an enforcement of response cache request boundaries (#9720).

---

### 4. Community Hot Topics
The most discussed items reflect deep technical planning and design debates on ZeroClaw's core architecture.

- **Issue #8303 (11 comments): RFC: Goal mode v1** — VRurg's proposal for bounded foreground work is the most active thread. This indicates strong community interest in making the agent more proactive and capable of handling multi-turn objectives, a key feature for any advanced agent platform.
- **Issue #8692 (8 comments): Maintainer decision queue** — This tracker is central to project governance, highlighting the community's awareness of the review bottleneck and the need for maintainers to make decisions on the many open RFCs.
- **Issue #9488 (8 comments): RFC: Unified attachment architecture** — With 8 comments, this proposal to standardize attachments across web chat and channels is a hot topic, likely because it touches on user experience and cross-platform interoperability.
- **Issue #6641 (8 comments): OTel trace correlation** — Although closed, this issue about observability had high engagement, showing a strong user desire for better debugging and monitoring capabilities.

---

### 5. Bugs & Stability
Today's data shows several significant bugs, with active fix PRs available for some.

- **#7301 (High Severity):** **macOS desktop app blank window** — This P1 workflow-blocking bug continues to plague the desktop experience. It lacks a fix PR and is marked `needs-repro`, making it a critical point of user friction.
- **#9642 (High Severity):** **Approval timeout falsifies audit trail** — This recently filed security bug is severe because it records a timeout as an explicit user denial. The issue is marked as `in-progress`, indicating a fix is likely being worked on.
- **#9718 (Medium Severity):** **Telegram duplicate messages** — A newly reported bug where messages are delivered twice when a model emits both tool calls and content. It was created today, and no fix PR is attached yet.
- **#9724 (High Priority):** **`always_ask` ignored in Full autonomy mode** — A P2 bug where user-configured risk overrides are bypassed. A fix PR (#9724) was opened today to address it.

---

### 6. Feature Requests & Roadmap Signals
The projects roadmap is dominated by architectural RFCs and significant features.

- **Likely in v0.9.0:** The extensive v0.9.0 security/gateway tracker (#7432) and the related RFCs on SOP authorization (#9598) and staged product telemetry (#9621) are likely targets.
- **Strong Candidates:** The RFC for "Goal mode v1" (#8303) and "Unified attachment architecture" (#9488) have high community interest and are likely evolution targets.
- **Infrastructure Shift:** The RFC to replace React/Vite with a Rust→Wasm framework (#8132) suggests a desire to eliminate Node.js from the build/runtime, though it's currently priority P3 and awaiting author action.

---

### 7. User Feedback Summary
User pain points are focused on reliability, security, and procedural transparency.

- **Reliability and Trust:** The S1 bugs like the macOS blank window (#7527) and the falsified audit trail (#9642) are significant trust-breakers for users. The community is actively addressing these.
- **Configuration and Granularity:** Users are pushing for more granular control, with RFCs on forbidden path patterns (#8424) and the `always_ask` fix (#9724) showing a need for flexible, secure configuration.
- **Frustration with the Review Process:** The existence of a "Maintainer decision queue" tracker (#8692) and the large number of PRs labeled `needs-author-action` suggests some user frustration with the pace and complexity of getting changes merged, although the community is working to formalize the process.

---

### 8. Backlog Watch
Several critical items appear to be waiting for contributor or maintainer attention.

- **PR #9574 (High Priority, `needs-maintainer-review`):** The fix to authorize approval responders across channels addresses a significant security vulnerability and should be prioritized.
- **PR #8713 (High Risk, `needs-author-action`):** The long-pending SSRF gate fix for `file_download` adds a crucial security opt-in and has been open over a month. It is a `stale-candidate` for inactivity.
- **Issue #6157 (High Risk, `status:blocked`):** The Nextcloud Talk bot message API bug has been open since April and is blocked. This is a compatibility issue that may be impacting users of that integration.
- **Issue #8431 (Open Tracker):** The audit of temporary artifact lifecycle is an accepted cleanup task but hasn't seen recent activity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*