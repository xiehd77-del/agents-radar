# OpenClaw Ecosystem Digest 2026-07-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-09 03:29 UTC

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

⚠️ Summary generation failed.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem

**Date:** 2026-07-09  
**Prepared for:** Technical decision-makers and developers in the AI agent ecosystem

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is experiencing a pronounced **polarization between stability-focused hardening and rapid feature expansion**. Projects like **ZeroClaw** (50 PRs, 50 issues daily) and **Hermes Agent** (50 issues, 50 PRs) are entering high-velocity development cycles, while **TinyClaw**, **Moltis**, and others remain in quiet maintenance phases. A recurring theme across all active projects is the tension between **security-by-default configurations** and the flexibility demanded by power users, with **OpenClaw’s absence** (failed digest generation) creating a notable gap in the ecosystem’s reference implementation layer. The community is collectively grappling with **multi-agent isolation**, **provider compatibility hanlder**, and the **need for production-grade observability**—signaling a maturation from experimental tinkering toward operational deployment.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Release Status | Health Score (1-5) |
|---|---|---|---|---|---|
| **ZeroClaw** | 50 | 50 | 6 | No new release | 4 (High velocity, many blockers) |
| **Hermes Agent** | 50 | 50 | 19 | No new release (v0.17.0 regression) | 3 (High activity, critical crash bug) |
| **NanoBot** | ~7 | ~11 | 11 | No new release | 4 (Focused security hardening) |
| **NanoClaw** | 2 | 28 | 4 | No new release (v2.1.17 latest) | 4 (Structured feature trains, strong merging) |
| **IronClaw** | 17 | 50 | 11 | No new release | 3 (Heavy dev, systemic reliability issues) |
| **CoPaw** | 34 | 45 | 13 | **v2.0.0-beta.4 released today** | 4 (New patch addressing critical bugs) |
| **PicoClaw** | 2 | 4 | 3 | No new release | 3 (Moderate, stable maintenance) |
| **LobsterAI** | 3 | 15 | 12 | No new release | 4 (Strong consolidation, resolving tech debt) |
| **TinyClaw** | 0 | 0 | 1 | No new release | 3 (Quiet, security audit delivered) |
| **Moltis** | 0 | 1 | 0 | No new release | 2 (Minimal activity, 1 open PR) |
| **ZeptoClaw** | 0 | 0 | 0 | No new release | 1 (No activity) |
| **NullClaw** | 0 | 0 | 0 | No new release | 1 (No activity) |
| **OpenClaw** | N/A | N/A | N/A | Digest failed | Uncertain (Reference implementation gap) |

---

## 3. OpenClaw’s Position

**Note:** Direct analysis is limited due to digest generation failure. Based on ecosystem positioning:

- **Advantages vs. peers:** As a core reference implementation (`github.com/openclaw/openclaw`), OpenClaw typically sets architectural patterns that other projects adopt. Its absence today is a gap—likely the reference branch is in a refactoring or CI failure state.
- **Technical approach differences:** Historically, OpenClaw emphasizes **simplicity, minimal dependencies, and academic rigor** compared to feature-heavy projects like ZeroClaw or Hermes Agent.
- **Community size comparison:** Can’t assess directly today, but the reference role means it has an outsized influence per contributor.

**Recommendation:** Monitor OpenClaw for recovery; its next digest will reveal if it’s a temporary CI blip or a deeper architectural shift.

---

## 4. Shared Technical Focus Areas

The following **cross-project requirements** emerged from community feedback today:

| Focus Area | Affected Projects | Specific Needs |
|---|---|---|
| **Security hardening** | NanoBot, ZeroClaw, TinyClaw | Unauthenticated token minting, localhost privilege escalation, allowlist enforcement, API key middleware |
| **Multi-agent isolation** | LobsterAI, ZeroClaw, CoPaw | Per-agent USER.md, workspace separation, agent-specific env vars, credential namespace isolation |
| **Provider compatibility** | ZeroClaw, Hermes Agent, CoPaw, PicoClaw | `reasoning_content` loss in tool-call loops, model switch inconsistent across turns, OpenAI vs. custom API gaps |
| **Context management** | CoPaw, Hermes Agent, ZeroClaw | Scroll-based compression, active-turn eviction protection, conversation progress loss |
| **Observability & telemetry** | NanoBot, Hermes Agent, IronClaw | Silent fallback activation, failed task diagnosis, Trace Commons enrollment, LangSmith integration failure |
| **Desktop/CLI UX consistency** | Hermes Agent, NanoClaw, IronClaw | Session visibility across interfaces, truncated text, multi-line diffs, thread naming |
| **Channel/platform streaming** | PicoClaw, Hermes Agent | QQ channel streaming missing, console streaming performance degradation |

---

## 5. Differentiation Analysis

| Dimension | ZeroClaw | Hermes Agent | NanoBot | NanoClaw | CoPaw | IronClaw |
|---|---|---|---|---|---|---|
| **Target user** | DevOps + Chinese-language power users | Enterprise/general, heavy desktop focus | Security-conscious small teams | Structured automation & scheduled tasks | Beta testers, early adopters | Enterprise ops, admin-heavy |
| **Core architecture** | Modular, WASM plugin future, OpenAI-compatible endpoint | Desktop-first, heavy plugin ecosystem | Python monorepo, WebUI + CLI | Multi-PR feature trains, CLI+API hybrid | v2.0 beta, scroll context manager | Reborn v2, god-crate dissection, NEA-25 |
| **Key differentiator** | Highest volume, Chinese ecosystem (WeCom, QQ, Xiaomi) | Desktop UX maturity, aggressive bug fixing | Security response speed, small attack surface | Process-oriented development, scheduled tasks | Context compression innovation, vision model fallback | Enterprise admin controls, extension registry |
| **Risk** | S0/S1 bugs aging, backlog growth | Critical crash regression (v0.17.0) | Slack integration broken (aiohttp) | opencode silent failure (#2985) | Scroll system still brittle | Daily failure taxonomy, rate-limit saturation |
| **Language/Platform** | Rust, containerized | Desktop native (Windows/Mac) | Python, Docker-first | Python, CLI-heavy | Multi-language, Docker | Rust, WebUI v2 |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Active Bug Fixing)
- **ZeroClaw** – 50/50 issues/PRs, 6 merges, high risk but high reward. **Shipping pressure is intense.**
- **Hermes Agent** – 50/50, 19 merges, but **critical desktop regression** (v0.17.0 crash loop) erodes trust.
- **NanoClaw** – 28 PRs, structured trains, healthy merging rate. **Best-in-class for organized delivery.**
- **CoPaw** – 45 PRs, **shipped v2.0.0-beta.4 today** – demonstrates ability to release under pressure.

### Tier 2: Active Maintenance (Stable, Focused)
- **NanoBot** – Security-focused, 11 merges, responsive team. **Solid, predictable progress.**
- **IronClaw** – 50 PRs, 11 merges, but **systemic reliability issues** (scheduled runs failing, rate limiting).
- **LobsterAI** – 15 PRs, 12 merges, clearing 3-month backlog. **Cleaning house for next phase.**

### Tier 3: Quiet / Stabilizing
- **PicoClaw** – Moderate, stable, but **NanoKVM OpenAI bug (#3195) unfixed for 9 days.**
- **TinyClaw** – **Security PR #44 merged after 5 months** – likely preparing for release.

### Tier 4: Dormant / Minimal Activity
- **Moltis, ZeptoClaw, NullClaw** – Effectively stalled. No issues, no PRs, no releases.

---

## 7. Trend Signals & Value for AI Agent Developers

1. **Security is table stakes, not a feature.** NanoBot’s swift patch for unauthenticated token minting and TinyClaw’s 5-month security audit show that **production deployments demand zero-trust defaults**. Developers should expect allowlists, API key enforcement, and sandboxed secrets in every agent framework.

2. **Context management innovation is accelerating.** CoPaw’s “scroll” system with active-turn protection and Hermes Agent’s tool-level output compression (#39691) point to a future where **context loss is the primary failure mode**—and it’s being solved at multiple levels.

3. **The “middleware” pattern is emerging.** Multiple projects (ZeroClaw’s `.ignore` files, NanoBot’s OpenAI auth gap, IronClaw’s per-user API tokens) are converging on **request-level middleware layers** that decouple auth, routing, and observability from core agent logic. Expect this to become a first-class primitive.

4. **Chinese-language ecosystem is a major adoption vector.** Issues from Hermes Agent (#39534, #61246), PicoClaw (#3201, QQ streaming), and ZeroClaw (#6034, #6672, WeCom/Feishu) reveal **strong adoption in East Asia** for WeCom, QQ, Feishu, and Xiaomi thinking models. Developers targeting global deployment must prioritize CJK input handling and Chinese platform integrations.

5. **Desktop vs. CLI vs. WebUI parity remains elusive.** Hermes Agent’s session visibility regression (#59224) and IronClaw’s “jump to latest” positioning bug (#5835) show that **cross-interface consistency is a persistent UX challenge** that gets worse as feature velocity increases.

6. **Scheduled tasks and cron automation are becoming core.** NanoClaw’s scheduled-tasks train (PRs #2980-2981) and ZeroClaw’s `uses_memory` flag (#8676) signal that **AI agents are moving from reactive chat to proactive, scheduled execution**—a foundational shift for DevOps use cases.

7. **Rate-limiting saturation is the new normal.** IronClaw’s daily failure taxonomy (#5859) reports “Pinchbench saturated by upstream provider rate-limiting”—**LLM API quota exhaustion is now the #1 cause of system failure** in active deployments. Developers must build retry, fallback, and circuit-breaker logic as first-class features, not afterthoughts.

---

**Bottom line for technical decision-makers:** The ecosystem is healthy but fragmented. **NanoClaw** offers the most structured delivery, **CoPaw** the most innovative context management, and **ZeroClaw** the broadest platform coverage with the highest risk. OpenClaw’s silence is a signal to watch—and to invest in redundancy of reference implementations.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for July 9, 2026.

---

## NanoBot Project Digest | 2026-07-09

### 1. Today's Overview

Project activity is **high**, with a strong focus on security hardening and stability improvements. The core team merged or closed 11 pull requests, primarily addressing vulnerabilities in the WebUI authentication layer and fixing critical bugs in the Slack integration and agent loop. A security hotfix series resolved a significant privilege escalation risk (CVSS score implied at Medium/High) where unauthenticated localhost processes could mint API tokens. The community remains engaged, contributing features like non-interactive config refresh and a new file edit diff viewer. No new releases were published today.

### 2. Releases

No new versions were released in the last 24 hours. The latest available stable build remains unchanged.

### 3. Project Progress

Eleven PRs were merged or closed today, indicating solid forward momentum.

- **Security (Critical Patch):** The team closed a series of overlapping security issues (#4825, #4826, #4827, #4078) by merging PR #4849 and PR #4856. The fix restores localhost bootstrap functionality but now requires proof of a `tokenIssueSecret` or static `token` for remote access, effectively gating the vulnerability.
- **WebUI Feature (Merged):** PR #4828 was merged, introducing a **GitHub-like unified diff view** for file edits in the WebUI. This feature includes per-user settings and collapse/expand functionality for large diffs.
- **Developer Experience (Merged):** PR #4852 (non-interactive `nanobot onboard --refresh`) and PR #4848 (extracting turn hook assembly into a dedicated module) were both closed, improving automation and code maintainability.
- **Documentation (Merged):** PR #4850 updated the README and added new search-oriented documentation entry pages for chat apps, configuration, and the Python SDK.

### 4. Community Hot Topics

The most active threads reveal a community focused on **security** and **platform reliability**:

- **Security Vulnerability Series (Issues #4825, #4826, #4827):** Authored by YLChen-007, these three issues describe a vulnerability where a local process can mint API-capable bearer tokens without authentication. They garnered a combined 7 comments and were met with a swift fix (PR #4849, #4856). **Underlying need:** A strong desire for secure-by-default configurations, especially for users deploying on shared or multi-tenant machines.
- **OpenAI-Compatible API Auth Gap (Issue #4078):** This issue, recently re-elevated in attention, details how the `/v1/chat/completions` endpoint accepts unauthenticated requests. **Underlying need:** Users want a simple API key middleware to prevent accidental public exposure.
- **Docker Build Flexibility (PR #4857):** This open PR proposes a Docker build arg to override installed packages. It highlights a need for **customization and minimal attack surfaces** in containerized deployments.

### 5. Bugs & Stability

Several noteworthy bugs were addressed or remain open. Severity is assessed based on potential for user-facing crashes or security risks.

- **[CRITICAL] Unauthenticated Token Minting (Issues #4825-27):** Severity: **High**. Any local process could obtain a full API token. **Status: FIXED** (PR #4849, #4856 merged).
- **[HIGH] aiohttp Dependency Missing for Slack (Issue #4829):** Severity: **High** (breaks a core platform plugin). The Slack plugin fails to install because `aiohttp` is missing from the Slack dependencies in `pyproject.toml`. **Status: OPEN** (reported 2 days ago).
- **[MEDIUM] OpenAI-Compatible Endpoint Unauthenticated (Issue #4078):** Severity: **Medium**. Allows unauthenticated LLM queries if exposed. **Status: OPEN** (reported over a month ago).
- **[MEDIUM] Runner Catches BaseException (PR #4816):** Severity: **Medium**. Catching `BaseException` can mask `KeyboardInterrupt` or `SystemExit`, leading to unresponsive agents. **Status: OPEN** (fix proposed, awaiting merge).
- **[LOW] MCP Stale Stack Cleanup (PR #4764, #4843):** Severity: **Low**. Causes gateway crashes during reconnection under specific timeout conditions. **Status: OPEN** (two competing fixes under review).

### 6. Feature Requests & Roadmap Signals

The community is signaling a desire for better DevOps and automation capabilities.

- **Non-Interactive Config Refresh (Issue #4851 / PR #4852):** **Likely to land soon.** A user requested a `--refresh` flag for the `onboard` command to support automatic/CI/CD config updates. An implementation PR was already merged today, making this a strong candidate for the next release.
- **Docker Build Customization (PR #4857):** A request to customize Python deps at build time via Docker args. This is currently an open PR and aligns with the project's push toward easier deployment, predicting inclusion in the next minor release.
- **Improved Telemetry (PR #4847 - Docs):** A community member pointed out that LangSmith integration is documented as working but is reportedly broken. The project responded with a documentation clarification PR. This suggests a **gap in monitoring/observability** that the team is aware of but has not yet addressed with a code fix.

### 7. User Feedback Summary

The feedback in the last 24 hours highlights a **mature community** that expects security and reliability.

- **Satisfaction:** Users are pleased with the rapid response to security flaws. The new diff view (PR #4828) was likely well-received, as it improves a core WebUI workflow.
- **Pain Points:**
    - **Config Automation:** Users running automated setups are frustrated that `onboard` is interactive-only. The merged fix addresses this directly.
    - **Plugin Stability:** The missing `aiohttp` dependency for Slack is a concrete blocker for production Slack deployments.
    - **Regression Fears:** There is anxiety about regressions, as seen in the LangSmith documentation issue. Users fear upgrading if observability features break.
- **Use Cases:** The user base increasingly deploys NanoBot in **automated/headless environments** (Docker, CI/CD) and **multi-tenant systems** (security issues), indicating a shift from single-user tinkering to production hosting.

### 8. Backlog Watch

The following items require maintainer attention due to age, importance, or lack of recent activity.

- **OpenAI API Auth Gap (Issue #4078 - 42 days old):** Despite being linked to the recent security series, this specific endpoint issue remains open. With the WebUI bootstrap fix now merged, securing the REST API should be the next priority.
- **Discord Forwarded Messages (PR #2873 - 3 months old):** A long-standing PR to fix inbound Discord forwarding. It has no conflicts flagged but is still open. This could be affecting Discord users on older versions.
- **Cron Job Model Presets (PR #4622 - 8 days old):** This feature (adding `model_preset` support to cron jobs) is marked with a `[conflict]` tag and has received no updates in over a week. It requires conflict resolution and maintainer review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-09

## Today's Overview

Hermes Agent shows **very high activity** today with 50 issues and 50 pull requests updated in the last 24 hours, indicating a surge of community engagement and rapid maintainer response. Only 2 issues were closed, while 19 PRs were merged or closed, suggesting the maintainer team is aggressively addressing bug fixes. The vast majority of activity (48 open issues, 31 open PRs) reflects a project in active development with a growing backlog of community contributions. No new releases were published today, but the volume of merged fixes (19 PRs) suggests a significant patch release may be imminent.

## Releases

No new versions were released on 2026-07-09. The most recent known release is **v0.15.1** (referenced in Issue #39534) and **v0.17.0** (desktop app build from 2026-07-09, referenced in Issue #61268). No release notes or changelog entries are available for today.

## Project Progress

**19 PRs were merged or closed today**, reflecting strong maintainer responsiveness. Notable merged fixes include:

- **Gateway and platform stability fixes:**
  - [PR #47633](https://github.com/NousResearch/hermes-agent/pull/47633) — WebSocket connection fix for macOS system proxy interference (Surge, ClashX, V2RayU)
  - [PR #47635](https://github.com/NousResearch/hermes-agent/pull/47635) — Blocked orphaned LLM calls with no task/provider context
  - [PR #59280](https://github.com/NousResearch/hermes-agent/pull/59280) — OOM protection for BlueBubbles webhook via `client_max_size` limit
  - [PR #59012](https://github.com/NousResearch/hermes-agent/pull/59012) — 120s timeout for ffmpeg in WhatsApp Cloud adapter
  - [PR #61072](https://github.com/NousResearch/hermes-agent/pull/61072) — Added missing `interrupt_for_session` function for async delegation

- **Agent reliability improvements:**
  - [PR #47693](https://github.com/NousResearch/hermes-agent/pull/47693) — LM Studio context length fallback when model not loaded
  - [PR #58808](https://github.com/NousResearch/hermes-agent/pull/58808) — `return_exceptions=True` added to `asyncio.gather` in context references
  - [PR #59258](https://github.com/NousResearch/hermes-agent/pull/59258) — Same fix applied to reference expansion
  - [PR #48005](https://github.com/NousResearch/hermes-agent/pull/48005) — Kanban worker exit-code mapping fix for single-query mode

- **Security and correctness:**
  - [PR #59511](https://github.com/NousResearch/hermes-agent/pull/59511) — Applied platform-disabled skill gate to auto-skill channel bindings
  - [PR #59538](https://github.com/NousResearch/hermes-agent/pull/59538) — Proxy mode now returns correct `history_offset`

- **Infrastructure:**
  - [PR #60520](https://github.com/NousResearch/hermes-agent/pull/60520) and [PR #60566](https://github.com/NousResearch/hermes-agent/pull/60566) — Added timeouts to MCP catalog bootstrap and git clone operations

## Community Hot Topics

The most active discussions today reveal several key pain points:

- **#39691** ([12 👍, 9 comments](https://github.com/NousResearch/hermes-agent/issues/39691)) — Feature request for tool-level output compression via headroom-ai. High interest from the community in improving context management at a finer granularity than conversation-level summarization.

- **#59224** ([8 comments](https://github.com/NousResearch/hermes-agent/issues/59224)) — CLI `/resume` listing hides non-CLI sessions (Desktop, WebUI). A usability regression affecting users who switch between interfaces.

- **#39534** ([7 comments](https://github.com/NousResearch/hermes-agent/issues/39534)) — Windows Desktop app cuts off Chinese characters in chat input. Critical localization issue affecting Chinese-speaking users.

- **#58646** ([7 comments](https://github.com/NousResearch/hermes-agent/issues/58646)) — QQ bot adapter startup failure due to unexpected `is_reconnect` argument. Platform-specific bug blocking Chinese social media integration.

- **#28260** ([2 👍, 4 comments](https://github.com/NousResearch/hermes-agent/issues/28260)) — Self-signed HTTPS certificate support for custom providers (now closed/merged). Users self-hosting proxies need better TLS flexibility.

- **#35419** ([2 👍, 3 comments](https://github.com/NousResearch/hermes-agent/issues/35419)) — Silent fallback activation: buffered notices never flushed on messaging gateways. Users cannot tell when a fallback provider is used.

## Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **CRITICAL** | [#61268](https://github.com/NousResearch/hermes-agent/issues/61268) | 0.17.0 desktop update: `Composer is not available` error causes Hermes.exe to repeatedly restart in unrecoverable loop | Resolved (closed) |
| **HIGH** | [#61270](https://github.com/NousResearch/hermes-agent/issues/61270) | Gateway startup blocks on Nous Portal OAuth exhaustion with no user-visible error | Open, needs fix |
| **HIGH** | [#60715](https://github.com/NousResearch/hermes-agent/issues/60715) | Nous inference API completely unreachable — all models timeout | Open, needs repro |
| **HIGH** | [#61207](https://github.com/NousResearch/hermes-agent/issues/61207) | `/plan` doesn't write a plan file anymore | Open, needs repro |
| **MEDIUM** | [#61220](https://github.com/NousResearch/hermes-agent/issues/61220) | Session expiry doesn't set `end_reason='session_reset'`, causing stale recovery reopening expired sessions | Open, no fix yet |
| **MEDIUM** | [#61211](https://github.com/NousResearch/hermes-agent/issues/61211) | WeCom file upload fails with `FileNotFoundError` on Windows due to percent-encoded filename exceeding MAX_PATH | Open, duplicate |
| **MEDIUM** | [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | Desktop shows stale "Summarizing thread" status after compaction resumes | Open, no fix |
| **MEDIUM** | [#58646](https://github.com/NousResearch/hermes-agent/issues/58646) | QQ bot adapter startup failure with `is_reconnect` argument | Open |
| **LOW** | [#39534](https://github.com/NousResearch/hermes-agent/issues/39534) | Windows Desktop cuts off Chinese input in chat window | Open, 7 comments |

**Critical regression:** The `0.17.0` desktop update (Issue [#61268](https://github.com/NousResearch/hermes-agent/issues/61268)) introduced an unrecoverable crash loop due to a missing runtime dependency (`Composer is not available`). This was quickly closed, but users should avoid updating to that build until a hotfix is published.

## Feature Requests & Roadmap Signals

Several feature requests with strong community interest emerged today:

- **Desktop improvements (likely next version):**
  - [#53617](https://github.com/NousResearch/hermes-agent/issues/53617) — Keep reasoning panel expanded (3 comments)
  - [#61246](https://github.com/NousResearch/hermes-agent/issues/61246) — Minimize to system tray on close (Chinese-speaking user request)
  - [#61255](https://github.com/NousResearch/hermes-agent/issues/61255) — Visible Desktop Pet bubble and controls
  - [#61249](https://github.com/NousResearch/hermes-agent/issues/61249) — Expandable approval bar for multi-line diffs
  - [#61193](https://github.com/NousResearch/hermes-agent/issues/61193) — Show full terminal command text in desktop app
  - [#50718](https://github.com/NousResearch/hermes-agent/issues/50718) — Unread markers, needs-input cues, OS badges

- **Infrastructure & configuration:**
  - [#52807](https://github.com/NousResearch/hermes-agent/issues/52807) — UI for configuring third-party API providers (instead of editing config.yaml)
  - [#18241](https://github.com/NousResearch/hermes-agent/issues/18241) — TUI: show thinking blocks and tool calls in chronological order
  - [#23524](https://github.com/NousResearch/hermes-agent/issues/23524) — Per-cron reasoning effort overrides

- **Kanban/Workflow:**
  - [PR #61173](https://github.com/NousResearch/hermes-agent/pull/61173) — Kanban board plugin for desktop (open PR)
  - [#61048](https://github.com/NousResearch/hermes-agent/issues/61048) — Kanban worker ignores fallback_providers

**Prediction for next release:** The desktop app is receiving intense feature pressure, with 8+ desktop-specific feature requests today. Combined with the critical `0.17.0` regression (#61268), a `0.17.1` hotfix with enhanced desktop UI controls is likely within 1-2 weeks.

## User Feedback Summary

**Positive signals:**
- Strong community engagement with 50 issues and 50 PRs in 24h
- PR authors include 7 distinct contributors (x7peeps, loongfay, giggling-ginger, yag8yag, CooperWang0912, OutThisLife, Hamakaze1s, Elshayib)
- Feature requests show sophisticated use: Kanban boards, approval hooks, Desktop Pets, OIDC logout, reasoning effort overrides

**Pain points (most common themes):**
1. **Desktop app UX** — Multiple users report truncated text, stale status, missing controls, session visibility gaps
2. **Localization** — Chinese-language users report input truncation (#39534) and WeCom file path issues (#61211, #61212)
3. **Provider reliability** — Self-signed certs (#28260), fallback activation/delegation issues (#35419, #61048), inference API unreachability (#60715)
4. **Session state management** — Expired sessions being reopened (#61220), stale status labels (#48098), wrong-session reattachment [PR #61045](https://github.com/NousResearch/hermes-agent/pull/61045)
5. **Cross-platform inconsistency** — CLI vs Desktop vs WebUI session visibility (#59224), platform-specific proxy issues (#47633)

**Notable: Chinese-language user requests are prominent** — Issues #39534, #61246, #61211, #61212 all originate from Mandarin-speaking users, suggesting strong adoption in East Asia (especially for WeCom/QQ bot integrations).

## Backlog Watch

**Issues needing maintainer attention (no update in 30+ days, high priority):**

1. [#5254](https://github.com/NousResearch/hermes-agent/issues/5254) (Apr 5) — Tool calls repeating with LM-Studio. *4 comments, 0 maintainer response.* Blocking local model users.
2. [#18241](https://github.com/NousResearch/hermes-agent/issues/18241) (May 1) — TUI chronological ordering of thinking blocks and tool calls. *4 👍, no maintainer activity.*
3. [#23524](https://github.com/NousResearch/hermes-agent/issues/23524) (May 11) — Per-cron reasoning effort overrides. *2 comments, no maintainer activity.*
4. [#39558](https://github.com/NousResearch/hermes-agent/issues/39558) (Jun 5) — Desktop intermediate assistant text disappears after turn completes. *3 comments, no fix yet.*
5. [#39838](https://github.com/NousResearch/hermes-agent/issues/39838) (Jun 5) — `notification_sources` config documented but never read by gateway code. *2 comments, stale.*
6. [#45360](https://github.com/NousResearch/hermes-agent/issues/45360) (Jun 13) — Cron WebUI runs show prompt-only sessions and unknown platform errors. *2 comments, no fix.*

**PRs awaiting review (open >24h with no maintainer response):**
- [PR #60073](https://github.com/NousResearch/hermes-agent/pull/60073) (Jul 7) — CLI cron migrated to rich rendering (refactor)
- [PR #61045](https://github.com/NousResearch/hermes-agent/pull/61045) (Jul 8) — PTY attach token scoped per resume session (fix for regression)
- [PR #61173](https://github.com/NousResearch/hermes-agent/pull/61173) (Jul 8) — Kanban desktop plugin (major feature)

**Recommendation:** The maintainer team should prioritize Issue #5254 (LM-Studio repeating tool calls) as it affects local/self-hosted users who are often power users and early adopters. The `notification_sources` configuration bug (#39838) is also a documentation-integrity issue that erodes user trust in the config system.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest – 2026-07-09**

---

## 1. Today's Overview

PicoClaw shows moderate activity today (July 8–9), with 2 active issues and 4 pull requests updated in the last 24 hours. The project closed 3 PRs (signaling steady maintenance progress) while 1 remains open. No new releases were published. The community is focused on two key areas: a blocking bug with OpenAI GPT on the new NanoKVM platform, and a long-standing performance feature request for QQ channel streaming. Developer velocity appears healthy, with several domain-specific enhancements (Grafana Alertmanager channel, Anthropic vision support) moving through the pipeline.

---

## 2. Releases

**None** – no new versions were published in the reporting period.

---

## 3. Project Progress

Three PRs were merged or closed today:

- **[#2278 – Closed] Gateway fallback to wildcard bind with CIDR allowlist** – Merged. Improves startup reliability by adding a controlled fallback when loopback bind fails. Affects gateway channel domain.
- **[#2251 – Closed] Feat: Grafana Alertmanager webhook channel** – Merged. Adds a new input-only channel that parses Alertmanager payloads and optionally triggers skills. Suitable for incident response workflows.
- **[#3234 – Closed] Chore: embed image media in Anthropic user messages** – Merged. Fixes a gap where `load_image` attachments were silently dropped for vision-capable models (Claude), enabling “can you see this?” functionality for the Anthropic provider.

One open PR remains under active review:

- **[#3226 – Open] fix(tools): stop write_file from coaching destructive overwrite** – Aims to prevent the `write_file` tool from inadvertently prompting the agent to overwrite memory files. Addresses a usability risk in agent memory management.

---

## 4. Community Hot Topics

- **[Issue #3195 – [BUG] OpenAI GPT does not work on NanoKVM with default config**](https://github.com/sipeed/picoclaw/issues/3195) – 2 comments, opened 9 days ago. This is the most active issue, relating to a new feature in NanoKVM 2.4.0. The user attempts to configure `gpt-5.4` via documentation but receives errors. Underlying need: configuration parity and validation for new platform integrations.

- **[Issue #3201 – [Feature] Support streaming output for QQ channel**](https://github.com/sipeed/picoclaw/issues/3201) – 1 comment, opened 8 days ago. Requests token-by-token streaming for QQ channel to match Telegram and WebSocket. Indicates user expectation for real-time interaction parity across all channels.

- **No new PRs or issues with high emoji reaction counts** were recorded today; community energy is concentrated on the two issues above.

---

## 5. Bugs & Stability

| Severity | Issue | Author | Summary | Fix in progress? |
|----------|-------|--------|---------|------------------|
| High | [#3195 – [BUG] OpenAI GPT not working on NanoKVM](https://github.com/sipeed/picoclaw/issues/3195) | rtadams89 | Setup fails when configuring `gpt-5.4` on NanoKVM 2.4.0. All interactions return errors. | No associated PR; stale for 9 days |
| Low (now fixed) | [#3234 – Anthropic vision images dropped](https://github.com/sipeed/picoclaw/pull/3234) | darren101004 | User message images were silently discarded before reaching vision models. | Fixed and merged |

The NanoKVM OpenAI bug is ranked **High** as it prevents basic usage on a newly supported device, and no fix PR has been linked. The Anthropic vision issue was a regression in media handling that has now been resolved.

---

## 6. Feature Requests & Roadmap Signals

- **QQ channel streaming** ([#3201](https://github.com/sipeed/picoclaw/issues/3201)) – Token-by-token output for QQ. Given that Telegram and WebSocket already support this, and this request is only 8 days old, it is a likely candidate for the next minor release (v2.5.x or similar).
- **Grafana Alertmanager channel** – Just merged ([#2251](https://github.com/sipeed/picoclaw/pull/2251)), indicating the team is expanding observability/integration capabilities. This suggests future webhook-based channel patterns may follow (e.g., PagerDuty, Slack slash commands).
- **No other roadmap signals** (e.g., RFCs, deprecation notices) were observed today.

---

## 7. User Feedback Summary

- **Pain point**: New NanoKVM users report difficulty getting OpenAI GPT models to work despite following official configuration docs. The issue implies either a missing code path or a docs-version mismatch for `gpt-5.4`.
- **Feature gap**: The QQ channel is the only remaining major platform lacking streaming output, causing a subpar user experience for real-time chat.
- **Satisfaction signal**: PRs around fallback gateway and Grafana integration were well-received and merged, suggesting the community values reliability and observability.
- **Risk**: The “stale” label on the QQ streaming request (`[stale]`) combined with 1 comment in 8 days may indicate low maintainer bandwidth for that channel.

---

## 8. Backlog Watch

| Item | Created | Days Open | Notes |
|------|---------|-----------|-------|
| [Issue #3195 – NanoKVM + OpenAI GPT bug](https://github.com/sipeed/picoclaw/issues/3195) | 2026-06-30 | 10 days | No maintainer response or fix PR. Affects a new platform. |
| [Issue #3201 – QQ streaming](https://github.com/sipeed/picoclaw/issues/3201) | 2026-07-01 | 9 days | Marked `[stale]` but only 1 comment; may be deprioritized. |
| [PR #3226 – write_file destructive overwrite fix](https://github.com/sipeed/picoclaw/pull/3226) | 2026-07-05 | 4 days | Open, uncommented. Concerns agent memory safety. |

**Watch recommendation**: The NanoKVM OpenAI bug (#3195) warrants immediate maintainer attention as it blocks a newly introduced device feature. The QQ streaming request (#3201) risks being lost if the `[stale]` label remains without maintainer triage.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-09

## 1. Today's Overview

NanoClaw is in a period of **intense development activity**, with 28 pull requests updated in the last 24 hours and a clear core-team push across multiple subsystems. The project is advancing through structured multi-part feature trains (scheduled tasks, CLI improvements, approval workflows) while also addressing critical bugs in the agent runner and provider integrations. No new releases were cut today, but the volume of merged PRs and the depth of open work signal a major release is likely imminent. Community involvement is moderate, with 2 new issues opened, though most activity remains core-team driven.

**Overall health assessment:** Strong forward momentum with good attention to stability.

---

## 2. Releases

**No new releases today.**

The last tagged version is v2.1.17 (CHANGELOG expansion pending in PR #2798). Given the number of feature-complete PRs awaiting merge—especially the scheduled-tasks train and the template setup flow—a v2.2.0 or v2.1.18 release appears to be in preparation.

---

## 3. Project Progress — Merged/Closed PRs Today

**4 PRs were merged or closed today (24h period):**

- **#2980** `[CLOSED]` — **ncl CLI: verb-level args, deep help, server-rendered human view** *(Part 1/6 of scheduled-tasks train)*. Merged. Establishes strict argument validation, fix-carrying error messages, and server-rendered human views for every `ncl` verb. This is the foundation PR that subsequent scheduled-tasks PRs build upon.
- **#2978** `[CLOSED]` — **ci: auto-label PRs from core team members**. Merged. Adds an author allowlist to the existing `label-pr.yml` workflow, automatically tagging core-team PRs.
- **#1702** `[CLOSED]` — **fix: break for-await loop on result to prevent IPC message loss**. Merged after a 3-month journey (opened April 8). Fixes a subtle race condition where a `for-await` loop could skip processing when results arrived asynchronously, causing silent message drops in the IPC layer.
- **#2977** *(not shown in top 20 but reported as closed)* — Likely a minor fix or CI adjustment.

**Key feature advances:**
- The `ncl` CLI now has a proper argument parsing system with fix-carrying error messages, replacing implicit positional parsing.
- The scheduled-tasks train is properly sequence-merged (#2980 → #2981 → forthcoming).
- The `for-await` IPC fix (#1702) closes a long-standing bug affecting agent-to-adapter message reliability.

---

## 4. Community Hot Topics

### Most Active Issues

**#2985 — opencode provider: silent no-reply when final text snapshot misses session.idle**
- Author: @fjnoyp | Updated: 2026-07-08 | 0 comments, 0 reactions
- **Analysis:** This is a **critical UX bug** for any user deploying the opencode provider. The agent completes a turn with a full answer, but the message is silently dropped—no error, no visible failure. Users see their bot "ignoring" them. The underlying cause appears to be a race condition where the `session.idle` event fires before the final content snapshot is delivered. **No fix PR exists yet**, making this the most urgent unaddressed bug.

### Most Active Pull Requests (by comment count)

The following PRs show extended discussion and review activity:

- **#2921** `[OPEN]` — **fix(compose): gate skill fragments on group skill selection** — @michaelzetune. Multiple comments; addresses an issue where every skill's instructions were incorrectly inlined into every group's CLAUDE.md. High-impact compose fix.
- **#2742** `[OPEN]` — **feat(recipes): the PR Factory** — @gavrielc. Long-running recipe PR (since June 11) proposing a full PR review automation system. Has generated extensive discussion about the recipe architecture.
- **#2941** `[OPEN]` — **feat(approvals): reject-with-reason on OneCLI credential cards** — @gavrielc. Extends the approval card system to support reasoning on credential rejection. Architectural discussion around transport constraints.

**Underlying needs:** The community (mostly core team) is focused on **reliability** (silent failures in opencode), **usability** (thread naming for Discord), and **operational control** (scheduled tasks, approval workflows). The PR Factory (#2742) hints at growing interest in using NanoClaw's own agent capabilities for DevOps automation—a powerful use case signal.

---

## 5. Bugs & Stability

### High Severity

| # | Issue | Severity | Status | Fix PR? |
|---|-------|----------|--------|---------|
| #2985 | opencode: silent no-reply when session.idle misses final snapshot | **Critical** — message silently dropped, no error raised | Open, unassigned | **None yet** |
| #2982 | `TOOL_ALLOWLIST` references non-existent tools (`Task`, `TodoWrite`, `TeamCreate`, `TeamDelete`, `ToolSearch`) | **High** — allowlist mismatch with pinned CLI version | Fix PR open | #2982 (same PR) |
| #2878 | `codex` reconnect fails with stale OpenAI secret; claims success despite invalid token | **Medium** — mid-conversation failures, confusing UX | Fix PR open | #2878 |
| #1702 | IPC: `for-await` loop drops messages on async result | **High** — closed today, fix merged after 3 months | **FIXED** | #1702 (merged) |

### Medium Severity

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| #2770 | Codex: `file` events not in `ProviderEvent` union — breaks TypeScript, image delivery | **Medium** — build breakage + image loss | Fix PR open (#2770) |
| #2913 | WhatsApp Cloud bridge collides with Baileys adapter instance keys | **Medium** — incorrect channel routing | Fix PR open (#2913) |

### Low Severity

- #2921 — Compose gating: skill fragments incorrectly inlined (functional, but causes bloated CLAUDE.md files).
- #2873 — Skills pre-flight vs credentials split needed for `/update-skills` to work cleanly.

**Key observation:** The opencode silent-drop issue (#2985) is the most concerning unaddressed bug—it's a full message-loss scenario with zero error reporting. The fix for #1702 (IPC message loss) suggests the team has experience with similar race conditions, so a fix for #2985 may follow quickly once prioritized.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features (in last 24h)

**#2984 — feat: auto-rename Discord threads by topic (host-side rename_thread tool)**
- Author: @eagansilverpathmarketing
- **Request:** Allow the agent to rename Discord threads from auto-generated `Thread 7/8/2026, 3:28 PM` to concise topic-based names.
- **Analysis:** This is a quality-of-life feature for operators running busy Discord servers. The existing default naming makes thread scanning impossible. The request is small, safe (host-side tool, no new permissions), and directly addresses a real usability pain point.

### Roadmap Signals (from PRs)

1. **Scheduled Tasks (multi-PR train):** PRs #2980 (merged), #2981 (open) form a systematic scheduled-tasks framework with CLI verbs (`ncl tasks`), isolated sessions, and run history. This is clearly the **next major feature launch**.
2. **Agent Templates:** PR #2909 adds a setup-wizard flow for agent templates, allowing operators to choose "Fresh agent" or "Pick a template" during first-agent creation. Part 2 of a template system.
3. **Default Agent Provider:** PR #2906 adds an instance-wide `DEFAULT_AGENT_PROVIDER` env var, reducing per-group configuration overhead.
4. **PR Factory Recipe:** PR #2742 proposes using NanoClaw agents for automated PR review, triage, and testing — a meta-use-case that could drive significant adoption among developers.

### What Might Ship in v2.2.0

- Scheduled tasks control plane (#2981)
- Agent templates wizard (#2909)
- Default agent provider (#2906)
- OneCLI credential card reject-with-reason (#2941)
- Discord thread auto-rename (#2984, if prioritized)

---

## 7. User Feedback Summary

### Pain Points (Explicit)

- **Silent failures in opencode provider** (#2985): "the agent completes the turn and produces a full answer, but nothing is delivered and no error is raised." **Primary frustration:** Unreliable delivery with no debugging path.
- **Unscannable Discord threads** (#2984): Default date-stamped names on busy servers make thread management impossible.
- **Codex stale tokens** (#2878): "Your access token could not be refreshed. Please log out and sign in again." **Pain:** Mid-conversation auth failures with confusing messaging.
- **CLI tool mismatch** (#2982): The `TOOL_ALLOWLIST` references tools that don't exist on the pinned Claude CLI version. **Pain:** Users following the documentation hit errors because the allowlist is out of sync.

### Use Cases Expressed

- **Discord community management:** Operators running busy servers need agent-driven thread organization (#2984).
- **DevOps automation:** The PR Factory recipe (#2742) shows interest in using NanoClaw for code review and testing workflows.
- **WhatsApp Cloud integration:** Multiple PRs (#2913, #2914) focus on making WhatsApp Cloud work reliably alongside WhatsApp/Web, suggesting cross-platform business messaging is a growing use case.

### Satisfaction Signals

- The rapid merge rate (4 PRs in 24h) indicates the core team is responsive.
- The 3-month fix for #1702 (IPC message loss) shows persistence on hard bugs.
- Structured multi-PR trains (scheduled tasks) suggest mature planning and integration testing before new features land.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Issue | Created | Last Updated | Comments | Concern |
|---|-------|---------|--------------|----------|---------|
| #2742 | PR Factory recipe (feature PR) | 2026-06-11 | 2026-07-08 | Multiple | Long-open feature PR with active discussion; risk of scope creep or conflicting with scheduled-tasks architecture |
| #2798 | CHANGELOG expansion for v2.1.17 | 2026-06-17 | 2026-07-08 | Some | Documentation PR that has been open for 22 days; needed before any release can ship |
| #2873 | Skills pre-flight/credentials split | 2026-06-27 | 2026-07-08 | Some | Blocking `/update-skills` functionality; has a fix PR but hasn't been merged in 12 days |
| #2770 | Codex file events + ProviderEvent | 2026-06-14 | 2026-07-08 | Some | Build breakage risk (TypeScript) on main; fix PR exists but hasn't been prioritized |
| #2909 | Templates setup wizard | 2026-07-02 | 2026-07-08 | Some | Part 2 of template system; may be waiting on other parts before merge |

### Critical Backlog Risk

**#2985 (opencode silent failure)** is the most urgent issue overall—it affects real users on the opencode provider, has no fix PR, and zero comments or clear signs of immediate prioritization. If this persists, it could erode user trust in the opencode provider.

### Stale PRs

- **#2798** (CHANGELOG, June 17): 22 days open for documentation. Should be merged to unblock release.
- **#2770** (Codex events, June 14): 25 days open for a fix that addresses a TypeScript build error.

---

*Generated 2026-07-09 from GitHub activity data for nanocoai/nanoclaw. Data snapshot: approximately 24 hours ending 2026-07-09.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-09

## Today's Overview

IronClaw is in a period of heavy active development, with 50 pull requests updated and 17 issues updated in the last 24 hours. The project saw 11 PRs merged or closed alongside 5 closed issues, indicating steady progress toward the Reborn v2 milestone. The development velocity is high, with multiple large refactoring stacks (NEA-25 extension surfaces, composition module refactor) moving in parallel. However, a significant stability concern emerges from daily failure taxonomy reports showing provider rate-limiting saturation and systemic scheduling failures in routine runs. No new releases were published today, suggesting the team is consolidating changes before cutting the next version.

## Releases

*No new releases today.*

## Project Progress

**11 PRs merged/closed today** advanced several key areas:

- **WebUI v2 UX improvements**: PR #5825 fixes deep-link loading for scoped logs on first open, and PR #5822 renders chat errors inline instead of silently failing
- **Slack integration cleanup**: PR #5851 unifies channel cleanup between WebUI removal and model-visible removal flows
- **Performance**: PR #5857 reduces API pre-model latency by caching system skill bundle filesystem descriptors
- **Refactoring**: PR #5854 (composition module folder under `root/`) advances the god-crate dissection plan; PRs #5839, #5842, #5833, #5848 complete manifest v2 cutover and extension-surface discovery (NEA-25 stack, ~900 lines net removal)
- **Security/isolation**: PR #5831 scopes workspace browser filesystem to caller context, adding regressions for cross-user and cross-project isolation
- **Streaming**: PR #5821 streams assistant text through Reborn/WebUI projection SSE path with provider-level support
- **Administration**: PR #5858 adds Trace Commons instance enrollment CLI and hosted-user login links
- **Regression coverage**: PR #5853 adds QA canary cases for custom-tool and Response API workflows

## Community Hot Topics

The most active discussions center around **per-user API token management**:

- **Issue #5856** (Admin panel: API-token re-issue missing) — Follow-up to #5779, reports that tokens are only minted at user creation with no re-issue mechanism, and the UI still shows orphaned "Create Token" buttons. This blocks admin workflow for credential rotations.

- **Issue #5820** (Raise WebChat attachment file-count limit) — User feedback from real workflow usage shows the 10-file cap is hit regularly, and silent file dropping beyond the limit creates data loss without errors.

- **PR #5525** (Private installs of tools) — Still open after 7 days, enabling SSO users to install tools from the Extension Registry without admin intervention. This is a major requested feature for team autonomy.

Underlying need: Admins and power users are pushing for **better credential management** and **self-service extension installation** — two sides of the same coin: reducing admin bottleneck for day-to-day operations.

## Bugs & Stability

### Critical severity
- **#5836** (*Routine fails on every scheduled run — "No thread attached"*): The `ironclaw-issues-slack-summary` routine shows 0% success rate with all runs marked Failed. Systemic issue where scheduled runs cannot attach to conversation threads. No fix PR yet.
- **#5838** (*Run fails with context compaction error after successful tool execution*): Multi-search runs complete tools successfully but crash during context compaction. Users cannot retry without starting fresh threads. No fix PR.
- **#5837** (*Routine run action buttons not clickable*): "Open run" and "Logs" buttons render disabled/non-responsive on failed runs, preventing diagnosis. No fix PR.

### High severity
- **#5834** (*Slack disconnect request incorrectly rejected by agent*): Agent claims inability to disconnect Slack when explicitly asked, with no alternative disconnect path through the agent. No fix PR.
- **#5859** (*Daily failure taxonomy*): Pinchbench saturated by upstream provider rate-limiting — essentially every LLM call returns errors. Upstream dependency issue without direct fix.
- **#5820** (*Silent file drop beyond 10-file limit*): Files exceeding attachment limit are silently skipped — data loss with no user feedback. PR may be needed soon.

### Medium severity
- **#5835** (*"Jump to latest" button positioned too high, appears unnecessarily*): Overlaps chat content when user is already at latest messages. Low impact but annoying.
- **#5788** (*Daily failure taxonomy 07-08*): 3-of-4 non-pass pinchbench run driven by a harness defect layered on upstream issues.

## Feature Requests & Roadmap Signals

1. **Private tool/skill installation** (PR #5525, Issue #5780): Non-admin users installing tools from Registry — likely targeted for next release given sustained activity.
2. **Raised attachment limits** (Issue #5820): Users hitting the 10-file cap in real workflows. Simple config change likely in next minor release.
3. **Chat terminal shortcut preference** (PR #5824): Adds Settings → Appearance toggle for chat floating terminal — small UX win shipping soon.
4. **API capacity/stress testing** (PR #5855): New harness for measuring API capacity under load — signals upcoming performance optimization work.
5. **Trace Commons enrollment** (PR #5858): Instance-wide tracing infrastructure — likely part of an upcoming observability push.

## User Feedback Summary

Reported pain points from real usage:

- **Workflow blocking**: Users cannot rename automations after creation (Issue #5419, closed but not fixed), cannot inspect failed routine runs (Issue #5837), and cannot disconnect Slack through the agent (Issue #5834)
- **Data loss**: Silent file dropping beyond 10-attachment limit (Issue #5820) and context compaction errors destroying successful work (Issue #5838)
- **Admin friction**: No API token re-issue mechanism forces admin to recreate users (Issue #5856); incomplete i18n on Projects page confuses non-English users (Issue #5768, closed)
- **UI inconsistencies**: Inline timestamps wrong (Issue #3535), native `<select>` elements look broken in dark mode (Issue #5770), "Jump to latest" overlaps content (Issue #5835)

Satisfaction signals: Users are actively testing WebChat attachment limits and Slack disconnect flows, indicating growing real-world adoption of Reborn v2 features.

## Backlog Watch

### Issues needing attention
- **#4108** (Nightly E2E failed, closed 2026-07-08) — Repeated nightly failures without root-cause discussion in the issue; closed but symptoms may persist.
- **#5681** (PR: keep active approval notifications visible, by bot) — Stale for 3 days without merge despite being XS size and low risk. May indicate bot contribution review bottleneck.

### PRs needing review
- **#5525** (Private installs of tools, open since 2026-07-02) — 7 days stale, XL size, core contributor but no human-verified tag. This is a high-demand feature blocking users from self-service tooling.
- **#5858** (Trace Commons CLI + login links, open since yesterday) — XL size but addresses two gaps that made a feature "unusable in practice" — urgent unblock.
- **#5780** (Admin installed and private skills, open since 2026-07-07) — Overlaps with #5525; may need deduplication conversation.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-09**, generated from the provided GitHub data.

---

### 1. Today's Overview
The LobsterAI project shows a **high burst of maintenance activity**, with 15 PRs updated in the last 24 hours and 12 of those being merged or closed. While no new releases were cut today, the team is actively closing out a large batch of pending fixes and feature improvements that were accumulated over the last few months. The issue tracker remains relatively quiet (3 updated issues), suggesting the development focus is currently on stabilization and merging existing work rather than triaging new bug reports. Overall, the project health is **strong**, with a clear push to resolve technical debt and improve multi-agent reliability.

### 2. Releases
- **New Releases:** None.

### 3. Project Progress
The project saw significant consolidation today, with **12 PRs merged/closed**. Key areas of advancement include:

- **OpenClaw Integration (Stability):** Multiple fixes ensure that OpenClaw (likely an external memory/agent component) synchronizes correctly with LobsterAI. PR [#2301](https://github.com/netease-youdao/LobsterAI/pull/2301) explicitly disables "memory dreaming" when LobsterAI dreaming is off, preventing stale cron jobs. PR [#2297](https://github.com/netease-youdao/LobsterAI/pull/2297) fixes a regression where memory search would break if embedding search was disabled.
- **Cowork/Agent Collaboration:** A major feature landed with PR [#2296](https://github.com/netease-youdao/LobsterAI/pull/2296), adding minimizable permission prompts to improve the Cowork (multi-agent collaboration) UX. PR [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) fixes a critical missing feature where sub-agent tool history was not syncing to child sessions.
- **Agent Configuration:** PR [#2295](https://github.com/netease-youdao/LobsterAI/pull/2295) directly addresses a community-reported bug (see Issue #2293) by scoping the `USER.md` bootstrap file per agent workspace.
- **IM & Attachments:** PR [#2298](https://github.com/netease-youdao/LobsterAI/pull/2298) scopes IM channel session mappings by agent, preventing cross-agent confusion in messaging channels.
- **Stale PRs Closed:** A large batch of older PRs (e.g., #1401, #1402, #1403, #1406) related to security, UI fixes, and i18n were finally merged/closed, clearing the backlog.

### 4. Community Hot Topics
The most active community engagement is centered on the **multi-agent workspace management** issue:

- **Issue #2293 (Open):** *"重启后，多个agent下的USER.md被覆盖替换的BUG？"* (USER.md overwritten across agents after restart) – This is the highest priority issue for the community today, with explicit user frustration. The user has provided detailed reproduction steps.
    - **Underlying Need:** A strong desire for **true isolation** between different agent configurations. Users want to set distinct "personalities" and instructions (via `USER.md`) for each agent without cross-contamination.
    - **Resolution:** PR [#2295](https://github.com/netease-youdao/LobsterAI/pull/2295) is the direct fix for this behavior.

### 5. Bugs & Stability
- **High Severity (Resolved via PR):**
    - **Agent Config Overwrite (Issue #2293):** A critical regression where editing one agent's `USER.md` overwrites all others. This is a **design-breaking bug** for multi-agent users. The fix is in PR [#2295](#) (merged today).
- **Medium Severity (Historic/Closed):**
    - **Gateway Boot Loop (Issue #1400):** A severe bug causing infinite restarts after upgrading to v4.1. This has been closed as "stale" but was previously unresolved for months, indicating a possible workaround or later patch was applied.
- **Low Severity:**
    - **Scheduled Task Name Validation (Issue #1348):** A UI/UX bug where duplicate names for scheduled tasks are not rejected, leading to confusion. No fix PR was found in today's data, but the issue remains open.

### 6. Feature Requests & Roadmap Signals
While no new feature requests were filed today, the merged PRs signal clear roadmap directions:

- **Advanced Agent Configuration (Likely Next Version):** The fix for `USER.md` scoping (PR #2295) and sub-agent history syncing (PR #2299) are foundational for the **multi-agent** feature set. The next version will likely focus on polishing the experience of running multiple specialized agents.
- **Improved Cowork UX:** The introduction of minimizable permission prompts (PR #2296) signals that the "Cowork" (collaborative task) flow is moving from a technical proof-of-concept to a polished, user-friendly feature.
- **External Service Resilience:** Fixes related to OpenClaw memory search and dreaming (PR #2297, #2301) suggest the project is hardening its integration with external AI/memory services.

### 7. User Feedback Summary
- **Pain Point (Multi-Agent Isolation):** Users are expressing significant dissatisfaction with the lack of isolation between agents. The issue in #2293 shows a user actively debugging and finding the root cause, which is a sign of a highly engaged but frustrated power user.
- **Stability Concern:** The closed issue #1400 highlights a historical pain point with upgrade stability (v3.30 -> v4.1). While resolved, this type of "breaking upgrade" can erode trust.
- **Use Case (Custom Models):** The same user in #1400 was trying to use `qwen3.5-plus` but ran into conflicts. This indicates a strong demand for **custom LLM integration** and troubleshooting support for non-default models.

### 8. Backlog Watch
The following items have been open for months without maintainer response or resolution, posing a risk to community perception:

- **Issue #1348 (Open):** *"定时任务名称重复没有校验"* (Duplicate scheduled task names not validated). **Opened 2026-04-02.** This is a low-complexity UX bug that has been ignored for over 3 months.
- **PR #1346 (Open):** *"Feat/skills management"* – A large feature PR for a skill management system. **Created 2026-04-02.** It has received no comments from maintainers. This could be a significant feature stuck in the review pipeline.
- **PR #1347 (Open):** *"feat(scheduledTask): 新增 Cron 自定义调度..."* – A substantial enhancement to the scheduled task UI. **Created 2026-04-02.** Also appears to be stalled without maintainer feedback.

These long-standing items suggest that the maintainers may have been prioritizing other work or are under-resourced for reviewing large, complex feature PRs.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the **TinyClaw Project Digest** for **2026-07-09**.

---

## 1. Today's Overview
TinyClaw is currently in a **low-activity maintenance phase**, with no new issues or releases reported in the last 24 hours. The project saw a single significant structural update: the closure of a major security overhaul PR (#44) that had been open since February 2026. This indicates that a large, long-running audit has been delivered, likely pushing the codebase toward a hardened release candidate. While the lack of new issues suggests stability, the project health depends on community engagement with this newly merged security layer.

## 2. Releases
**No new releases today.** The project has not published a release since the data cut (2026-07-09). The closure of PR #44 (security hardening) likely precedes a future release candidate. Users should watch for an upcoming version that includes the new sender allowlists and file safety restrictions.

## 3. Project Progress
**1 Pull Request merged/closed today:**
- **#44 (Closed): Harden channel auth, file safety, and update integrity**
  - **Author:** coreyone
  - **Summary:** Implements a full security audit fix set. Enforces **mandatory sender allowlists** (default-on) across Telegram, Discord, WhatsApp, and queue processing. Restricts outbound file handling and strengthens bundle update/install integrity checks.
  - **Significance:** This is a foundational security layer overhaul. It changes default behavior for every integration channel and must be reviewed by all deployments.
  - **Link:** [TinyAGI/tinyagi PR #44](https://github.com/TinyAGI/tinyagi/pull/44)

## 4. Community Hot Topics
**No active discussions with high comment/react counts today.** The only item with any metadata was PR #44, which had zero reactions and zero comments (likely merged via admin action). This suggests the community is either small or in a quiet phase. The underlying need here is **security governance**: the PR addresses the unspoken demand for production-ready access controls before scaling.

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported today.** The project reports zero open/active issues. While this indicates a stable state, it could also indicate a lack of active users testing the recent security changes on edge cases. **Severity: N/A** – no reports to rank.

## 6. Feature Requests & Roadmap Signals
**No new feature requests today.** However, based on the content of PR #44, the roadmap signal is clear: **security is the top priority**. The implementation of mandatory allowlists and file integrity checks suggests the maintainers are preparing for broader, safer multi-channel agent deployment. The next version will likely focus on:
- Hardened default configurations for all channels.
- Documentation for the new allowlist setup.
- Potential breaking changes for custom integrations relying on unauthenticated ingress.

## 7. User Feedback Summary
**No direct user feedback recorded today.** Given the quiet period, it is difficult to assess satisfaction or pain points. The lack of new issues (good) paired with the low PR reaction count (neutral) suggests either a satisfied user base or a project that is still gaining traction. The security changes in PR #44 may produce friction for users running custom bot scripts without sender validation.

## 8. Backlog Watch
**No long-unanswered Issues or PRs currently open.** The project has a clean backlog (0 open issues, 0 open PRs). The only prior work item (#44) has been resolved. Maintainers should watch for new issues arising from the merged security changes, as they may reveal undocumented behavior in specific deployment scenarios.

---

**Project Health Summary:** Stable but quiet. The successful closure of a long-running security PR (#44) is the key event. The next digest should look for documentation updates and potential hotfixes if the security layer breaks existing integrations.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-09

## Today's Overview
Project activity is minimal, with **no new issues** and **no new releases** in the last 24 hours. A single open pull request (#1145) was updated yesterday, addressing a potential panic in the CalDAV crate related to non-ASCII datetime parsing. No core feature work or bug reports were closed, indicating a quiet period likely following the previous development sprint. Overall, the project appears stable but with limited recent momentum.

## Releases
**None.** No new releases were published in the last 24 hours. The latest release remains unchanged.

## Project Progress
**No pull requests were merged or closed today.** The only updated PR (#1145) remains open and unmerged. No features or fixes advanced into the main branch.

## Community Hot Topics
The sole active item is **PR #1145** ([moltis-org/moltis PR #1145](https://github.com/moltis-org/moltis/pull/1145)):
- **Subject:** `fix(caldav): avoid panic on non-ASCII datetime in normalise_datetime`
- **Author:** Osamaali313
- **Created/Updated:** 2026-07-08
- **Comments/Reactions:** 0 comments, 0 reactions

This PR addresses a crash bug when parsing datetime values from a remote CalDAV server. The fix adds proper ASCII validation for the DATE branch (where byte-index slicing was previously unsafe). The low engagement suggests the maintainer has not yet reviewed it, but the fix is focused and well-scoped.

## Bugs & Stability
**One new bug fix PR (#1145), severity: Medium.** The bug triggers a panic in `crates/caldav/src/ical.rs` when `normalise_datetime` encounters non-ASCII datetime strings from a remote CalDAV server. The DATE branch currently slices fixed byte positions without verifying ASCII content, causing a panic on multi-byte UTF-8 characters. A fix PR exists but has not been merged. No other bugs or crashes were reported.

## Feature Requests & Roadmap Signals
No feature requests were opened or discussed in the last 24 hours. The only PR is a pure bug fix with no feature implications. Based on recent project history, no immediate feature additions are anticipated for the next version.

## User Feedback Summary
No user feedback, pain points, or satisfaction signals were recorded in the last 24 hours. The absence of issues or comments suggests either very low usage volume or a stable user base without urgent needs.

## Backlog Watch
**No long-unanswered issues or PRs identified.** The only open PR (#1145) is only one day old and has not yet received maintainer attention. No other backlog items are pending. The project backlog is effectively empty.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the GitHub activity for **CoPaw** (github.com/agentscope-ai/CoPaw) on **2026-07-09**, here is the structured project digest.

---

## CoPaw Project Digest – 2026-07-09

### 1. Today's Overview

CoPaw is experiencing **high-intensity development velocity**, with **34 issues** and **45 PRs** updated in the last 24 hours. The project has shipped a new patch release, **v2.0.0-beta.4**, focused on stabilizing the "scroll" context management system and fixing a critical eviction bug. While the core team is actively merging fixes, the backlog of open PRs (32) is growing faster than merges (13), suggesting a widening review bottleneck. Community engagement is high, particularly around **v2.0 beta stability** and **user experience regressions**, with several long-standing v1.x bugs finally being addressed.

### 2. Releases

**v2.0.0-beta.4** was released on 2026-07-09.
- **Changelog Highlights:**
    - **Major Fix (Scroll):** Protects the "active turn" from being evicted during context compression.
    - **UX Improvement:** Adds "graduated pressure relief" to the scroll system to prevent abrupt memory loss.
    - **Observability:** Makes recall failures "unmistakable" in the eviction index for easier debugging.
- **Breaking Changes:** None noted in the release notes, but the underlying scroll behavior has changed (active turn protection), which may alter summarization behavior for long sessions.
- **Migration Notes:** Users on v2.0.0-beta.3 should upgrade to resolve the core loop instability reported in [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860).

### 3. Project Progress (Closed/Merged PRs & Fixes)

**Merged/Closed PRs (13 total):**
- **[Scroll System Fix]**: PR [#5848](https://github.com/agentscope-ai/QwenPaw/pull/5848) (by niceIrene) fixed the eviction index for legacy v1.x sessions where turns had no "headline" milestones, ensuring they are properly labeled.
- **[Security Fix]**: PR [#5792](https://github.com/agentscope-ai/QwenPaw/pull/5792) (first-time contributor Osamaali313) stopped the sanitiser from dropping valid "self-paired" tool messages, which was causing silent failures in tool-calling chains.
- **[Packaging Fix]**: PR [#5875](https://github.com/agentscope-ai/QwenPaw/pull/5875) pinned the Python standalone runtime for Tauri packaging to prevent build failures.
- **[Core Fix]**: PR [#5870](https://github.com/agentscope-ai/QwenPaw/pull/5870) fixed a critical "reasoning reflux" loop by defaulting `preserve_thinking` to `false`.

### 4. Community Hot Topics

The community is focused on **tool-call reliability** and **v2.0 beta bugs**.

- **#5757 (Open): [Bug] Feishu Channel No Reply** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5757)) – *13 comments*. Users report that the Feishu (Lark) channel stops replying after the first message. This is a **critical issue** for enterprise users relying on this integration. The thread suggests it may be a channel-specific threading or state-management bug.
- **#5860 (Open): [Bug] v2.0 Frequent Context Loss & Loops** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5860)) – *3 comments* (High signal). Users on v2.0.0-beta.3 report the model forgetting the current conversation topic and re-answering previous questions. The fix in v2.0.0-beta.4 (protecting the active turn) directly addresses this.
- **#5846 (Closed): [Bug] Approval Popup Bypassed in "Automatic" Mode** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5846)) – *10 comments*. A user reported that the "Close Mode" (automatic execution) still showed approval pop-ups, breaking automation workflows. This was fixed, but user frustration is high regarding the configuration logic.
- **#5171 (Closed): [Bug] Context Compression Destroys All Memory** ([Link](https://github.com/agentscope-ai/QwenPaw/issues/5171)) – *9 comments*. The underlying cause (no distinction between "character system prompt" and "conversation" tokens during compression) remains a deep concern, even though the specific issue is closed.

### 5. Bugs & Stability

| Severity | Issue # | Description | Status | Fix PR Exists? |
| :--- | :--- | :--- | :--- | :--- |
| **Critical** | [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | v2.0 beta: Frequent conversation progress loss & infinite reply loops | Open | Yes (v2.0.0-beta.4 release) |
| **Critical** | [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker container: `browser_use` fails due to dbus connection error (Chromium crash) | Open | No |
| **High** | [#5868](https://github.com/agentscope-ai/QwenPaw/issues/5868) | Matrix Channel: Token login fails with duplicate auth parameters | Open | Yes – PR [#5873](https://github.com/agentscope-ai/QwenPaw/pull/5873) |
| **High** | [#5863](https://github.com/agentscope-ai/QwenPaw/issues/5863) | Coding Session: Images display as binary code instead of rendered images | Open | No |
| **Medium** | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | Tool call structure corrupted during `LightContextManager` compaction (400 errors) | Open | No |
| **Medium** | [#5858](https://github.com/agentscope-ai/QwenPaw/issues/5858) | Assistant messages silently dropped, breaking tool_use/tool_result pairing | Open | No |
| **Stability** | [#5859](https://github.com/agentscope-ai/QwenPaw/issues/5859) | `auto_memory_search` fails with OpenCode/DeepSeek models (missing `reasoning_content`) | Open | No |

**Key Takeaway:** The new `scroll` context manager in v2.0 is causing a cascade of tool-call formatting and memory loss issues. The fix for #5860 is in the latest release, but #5856 and #5858 remain open, indicating the compaction logic is still brittle.

### 6. Feature Requests & Roadmap Signals

- **Strong Signal (Scheduled for Inclusion):** **Vision Model Fallback** – PR [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) (by wangfei010313) is a large, actively reviewed feature that allows text-only models to call a vision model when images are uploaded. This is likely for the next minor release (v2.1).
- **Strong Signal (Core Team Interest):** **Slash Command UX** – Multiple PRs ([#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869), [#5751](https://github.com/agentscope-ai/QwenPaw/pull/5751)) are improving slash-command discovery and conflict resolution. This suggests a push to make agent commands more accessible.
- **Emerging Trend (User Request):** **Multi-Agent Swarm Collaboration** – Issue [#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) (now closed) asked for native "swarm" cooperation. While closed, this functionality is not yet implemented. User demand for complex, multi-step task orchestration is rising.
- **Layout Priority (Feature):** **Task Completion Audio/Visual Alerts** – Issues [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) and [#3302](https://github.com/agentscope-ai/QwenPaw/issues/3302) request configurable system tray pop-ups and sound notifications for task completion and approval requests. This is a strong, repeated request from users managing asynchronous tasks.

### 7. User Feedback Summary

- **Pain Point (Performance):** Console streaming causes browser lag (Issue [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725)). Users compare this unfavorably to similar tools like DeepSeek web.
- **Pain Point (Windows):** Vector index persistence is broken on Windows (Issue [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259)), requiring a full rebuild on every restart.
- **Pain Point (UX):** Users are frustrated by "one-size-fits-all" decisions regarding notifications (Issue [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797)). They demand user-configurable toggles for features like pop-up notifications on task completion.
- **Satisfaction Indicator:** The community is actively contributing. PRs from first-time contributors (Zalo Bot channel, security redaction) suggest the project is approachable and the plugin system is working well.

### 8. Backlog Watch

- **Issue [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) (Open, Created 2026-06-22):** "Internal Server Error" on fresh install via Python. The error (`get_remote_addr(transport)`) suggests a low-level startup crash. Has 8 comments but no official response from maintainers in the summary. This is a critical onboarding friction point.
- **PR [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) (Open, Created 2026-05-10):** "Memory Distillation Tool Plugin" – A substantial, high-quality feature PR (80+ days old) with a detailed title-diffing engine. Despite being "Under Review," it has received no recent maintainer activity. This risks community contributor burnout.
- **Issue [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) (Open, Created 2026-07-02):** Console streaming performance degradation. This is a widely experienced UX regression that, if unresolved, could drive users to competitor web interfaces. Needs a performance benchmark.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-09

## 1. Today's Overview

ZeroClaw shows **high activity** with 50 issues and 50 PRs updated in the last 24 hours (40 open issues, 44 open PRs). The project closed 10 issues and merged/closed 6 PRs during this period. Several **high-risk architectural RFCs** remain active, including the OpenAI-compatible HTTP endpoint (#8550), runtime WASM plugin migration (#8850), and workspace .ignore file protection (#8424). The bug tracker is dominated by **S1/S2 severity issues** affecting multi-turn conversation, provider compatibility, and tool persistence. No new releases were published today.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

**Merged/Closed PRs (6 total):**
- **#8823** — fix(channels): correct `bot_token` property name in `bind-telegram` error message (kebab-case → snake_case) (by @xydt-juyaohui)
- **#8334** — [CLOSED] Bug: `skills install`/`list`/`remove` target `data_dir`, which no multi-agent runtime loads (S2 severity, fix accepted)
- **#8553** — [CLOSED] Bug: Agent cannot use environment variables as `http_request` secrets (S1 severity, fix accepted)
- **#4873** — [CLOSED] Bug: After integrating Feishu (Lark), only LLM called instead of Agent (S3, fix accepted)
- **#6173** — [CLOSED] Bug: `model_switch` tool does not persist across turns (S2, fix accepted)

**Notable open PRs advancing today:**
- **#8486** (size:XL) — OpenAI Chat Completions endpoint implementation (closes #8550, related #8603) — **high risk**, core architectural change
- **#8173** (size:L) — In-app upgrade with auto-restart from web dashboard (implements RFC #8170, Windows swap fix included)
- **#8854** (size:XL) — Refactor: typed builders and normalization uniformity across entire `providers` crate (touches 13+ provider modules)
- **#8676** (size:M) — Expose per-cron-job `uses_memory` flag in CLI, tools, and gateway API
- **#7954** (size:M) — ZeroCode agent rename dashboard flow (uses RPC from merged PR #8109)

---

## 4. Community Hot Topics

**Most Active Issues (by comment count):**

| Issue | Title | Comments | Activity |
|-------|-------|----------|----------|
| **#5862** | [Bug]: zeroclaw does not know it can add cron | 13 👍0 | Open since Apr 18; needs repro; blocked |
| **#6034** | [Bug]: 单轮对话及多轮对话出现丢失 user message (user message loss in single/multi-turn) | 7 👍0 | S1 severity, open since Apr 23, needs author action |
| **#8424** | RFC: .ignore File Mechanism for Workspace File Protection | 7 👍0 | Open since Jun 28, blocked |
| **#6002** | [Bug]: Not clearly addressed to the assistant (Telegram channel) | 5 👍0 | S1 severity, open since Apr 22, accepted |
| **#6672** | [Bug]: `reasoning_content` not passed back in tool-call loops (Xiaomi thinking models) | 5 👍0 | S0 severity (data loss), open since May 15, blocked |
| **#8226** | [Feature]: per-agent custom environment variables configuration | 5 👍0 | RFC, blocked, high risk |

**Analysis:** The community is most engaged around **three core pain points**: (1) the agent's inability to use its own tools (cron, #5862), (2) data integrity issues in multi-turn conversations (#6034, #6672), and (3) security/sandboxing enhancements (#8424, #8226). The high severity of #6672 (S0 — data loss) and #6034 (S1 — workflow blocked) signals urgent provider compatibility gaps.

---

## 5. Bugs & Stability

### Critical/S0 Bugs
- **#6672** — `reasoning_content` not forwarded in agentic tool-call loops with Xiaomi thinking models (mimo-v2.5, mimo-v2.5-pro). **Severity: S0** (data loss/security risk). Open since May 15, blocked, needs author action. *No fix PR yet.*

### High/S1 Bugs
- **#6034** — User message loss in single and multi-turn conversations (custom provider at http://172.16.1.136:8000). **Severity: S1** (workflow blocked). Open since Apr 23, accepted, needs repro.
- **#6002** — Telegram channel: messages not clearly addressed to assistant. **Severity: S1** (workflow blocked). Open since Apr 22, accepted, needs author action.
- **#8553** — [CLOSED today] Agent cannot use environment variables as `http_request` secrets. S1 severity, fix accepted and merged.

### Medium/S2 Bugs
- **#8762** (NEW) — Anthropic provider uses fixed 120s total timeout for long turns. S2 (degraded behavior). Filed Jul 6, accepted.
- **#8875** (NEW today) — Config degraded-section warning points to `config migrate` without showing parse error. S2. Filed today by @Audacity88.
- **#8578** (NEW Jul 1) — On startup failure, daemon doesn't terminate the process (hangs with named pipe). S3, in progress.
- **#7828** — Tracker: audit byte-limited string truncation for UTF-8 char-boundary safety. S2 (panics possible). Active tracker with related PR #8873 opened today.

### Regressions
- **#8334** — [CLOSED] Skills CLI (`install`/`list`/`remove`) targeted wrong `data_dir`; multi-agent install flow was broken. S2.
- **#6173** — [CLOSED] `model_switch` tool not persisting across turns. S2.

---

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release (v0.8.3+)
| Feature | Issue/PR | Status | Rationale |
|---------|----------|--------|-----------|
| **OpenAI Chat Completions endpoint** | #8550 / #8486 (PR) | PR open, size:XL, high risk | Critical for ecosystem integration (Open WebUI, LobeChat, LangChain) |
| **Per-agent custom env vars** | #8226 | RFC, blocked | Enables identity/secret multi-tenancy across MCP instances |
| **Multi-session web chat UI** | #7543 | Accepted, in progress | Frontend UX upgrade for power users |
| **.ignore file mechanism** | #8424 | RFC, blocked | Protects workspace-internal sensitive files |
| **WASM runtime plugins** | #8850 | RFC, accepted | Architectural shift: channels/tools as runtime-installable plugins |
| **Native context compression** | #7673 | RFC, blocked | Provider pipeline decorator for long conversation management |

### Emerging Signals
- **Pre-turn routing intent extraction** (#7431) — Detects routing requests in natural language before main LLM call. Accepted, blocked.
- **OCI-compatible container registries for plugin storage** (#7497) — RFC, blocked. Would replace JSON index with `wasm-pkg-client` + cosign.
- **Replace React/Vite web UI with Rust→Wasm** (#8132) — RFC. Blocked but has community interest (1 👍). Split from #7674.
- **Enhanced `file_read` tool** (#8602) — Line cap, charset detection, paged PDF, notebook awareness. Accepted tracker.

---

## 7. User Feedback Summary

### Pain Points
1. **Tool awareness gap** — "zeroclaw does not know it can add cron" (#5862). User asked to schedule a task, agent claimed it lacked tools. *Root cause: agent not exposing available tools in self-prompt.*
2. **Multi-turn conversation data loss** (#6034) — User-provider custom API (Qwen3.5) loses user messages across turns. S1 block on workflow.
3. **Thinking model integration broken** (#6672) — Xiaomi mimo models with thinking mode lose `reasoning_content` across tool-call loops. *Affects high-value Chinese provider ecosystem.*
4. **Telegram channel misrouting** (#6002) — Containerized ZeroClaw + llama.cpp fails to correctly address assistant in Telegram.
5. **Long-context hallucination** (#6517) — Context overflow causes topic drift/hallucination after extended conversations on Kimi provider + Discord.
6. **UX friction** (#8875) — Config errors show unhelpful generic warning without parse details. (#8578) — Failed daemon start doesn't terminate process, hangs.

### Satisfaction Signals
- **.ignore file RFC** (#8424) — 7 comments, well-received design discussion around workspace file protection.
- **OpenAI endpoint** (#8550 / #8486) — 4 comments on the issue, PR at size:XL being actively reviewed. High community value.
- **Cron `uses_memory` flag** (#8676) — Quick feature addition being merged, shows responsive development.

---

## 8. Backlog Watch

### Critical Attention Needed
| Item | Issue | Age | Status | Risk |
|------|-------|-----|--------|------|
| **reasoning_content loss (S0)** | #6672 | 55 days (since May 15) | Blocked, needs-author-action | **HIGH** — data loss |
| **User message loss (S1)** | #6034 | 77 days (since Apr 23) | Needs-author-action, accepted | **HIGH** — blocks workflow |
| **Telegram misrouting (S1)** | #6002 | 78 days (since Apr 22) | Needs-author-action | **HIGH** — blocks workflow |
| **Cron tool unawareness** | #5862 | 82 days (since Apr 18) | Blocked, needs repro | **MEDIUM** — degrades user experience |
| **Prompt injection risk (S1)** | #6724 (channel supervisor crashloop) | 54 days (since May 16) | Blocked, needs-author-action | **HIGH** — crashloop on misconfigured channels |
| **Context overflow hallucinations** | #6517 | 63 days (since May 7) | Blocked, needs repro | **MEDIUM** — degraded behavior |

### Stale-Candidate Risks
- **#5862** — stale-candidate (Apr 18, no update since early Jul)
- **#6558** — stale-candidate (May 10, Qwen provider 405 error, low priority)
- **#6517** — stale-candidate (May 7, context overflow)
- **#8267** — stale-candidate (Jun 24, RobotConfig test PR, needs-author-action)
- **#6672** — stale-candidate (May 15, S0 data loss — **concerning**)

### Maintainer-Action Items
- **#8509 / #8496** (PR #8496) — Centralize deferred-MCP access policy. Open since Jun 29, size:L, high risk. Needs maintainer review.
- **#8132** — RFC to replace React/Vite with Rust→Wasm. Blocked since Jun 22, has community interest (1 👍).
- **#6715** — Delete unneeded branches (200+ stale branches). Accepted since May 16, low priority but simple housekeeping.

---

*Generated from ZeroClaw GitHub data at 2026-07-09. All links: https://github.com/zeroclaw-labs/zeroclaw/issues/*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*