# OpenClaw Ecosystem Digest 2026-08-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-06 02:41 UTC

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

Based on the GitHub data for OpenClaw (github.com/openclaw/openclaw) for 2026-08-06, here is the project digest.

---

## OpenClaw Project Digest — 2026-08-06

### 1. Today's Overview
The project is in an extremely active triage and stabilization phase. A massive influx of issues and PRs (500 each updated in the last 24 hours) shows a high level of community engagement and a heavy maintainer workload. The focus remains on addressing a significant backlog of bugs, with a clear emphasis on session-state integrity, message delivery reliability, and provider/auth stability. While no new releases are out today, the volume of open work indicates an upcoming release is likely in a hardening phase. The high ratio of open-to-closed items suggests active investigation, but many issues are stalled awaiting maintainer review or product decisions.

### 2. Releases
No new releases were published in the last 24 hours. The project remains in a development/hardening cycle, with the most recent known version references in issues pointing to `2026.7.2-beta.7` and `2026.7.2`.

---

### 3. Project Progress
Given the high volume of PRs (500 total), a significant number are open and waiting for review. Of the 63 closed/merged PRs in the last 24 hours, the focus appears to be on small, targeted fixes. Key areas of advancement visible in the top-commented PRs include:

- **Automated Fixing & Safety**: A significant portion of PRs are open by `clawsweeper[bot]` (e.g., #119737, #118806), indicating an automated system is actively attempting to triage and fix issues, though many are stalled waiting for author confirmation or maintainer review, which could be a bottleneck.
- **Reliability & Stability**: PRs addressing resource exhaustion, such as bounding CLI processes (#119146), snapshot rendering (#119217), and REST client timeouts (#104006), are in the queue.
- **Security & Redaction**: Fixes are working to prevent credential leakage in logs and errors across voice-call (#117304) and Codex supervision tools (#116260).
- **Platform Fixes**: Targeted fixes are being prepared for Slack message receipts (#119737), Feishu video previews (#98458), and WhatsApp identity rendering (#117174).

---

### 4. Community Hot Topics
The most active discussions highlight deep frustrations with reliability and resilience in agent orchestration.

1.  **[Issue #116201] Realtime voice work can retain unbounded provider and consult state** (58 Comments)
    - This is a P1 bug and the most hotly debated issue today, concerning memory leaks and state bloat in voice sessions, leading to unbounded sesssion growth.
    - **Link:** https://github.com/openclaw/openclaw/issues/116201

2.  **[Issue #7707] Memory Trust Tagging by Source** (27 Comments, 2+ years old)
    - This remains a hot topic with strong interest. Users are concerned about **memory poisoning attacks** and want a way to tag memory entries by trust level based on their origin (e.g., user vs. web-scraped). This indicates a rising demand for stronger security postures from AI agents.
    - **Link:** https://github.com/openclaw/openclaw/issues/7707

3.  **[Issue #44925] Subagent completion silently lost** (25 Comments)
    - Another P1 bug where subagent task results are silently lost, with no retry or notification, which is a major blocker for complex workflows and automation.
    - **Link:** https://github.com/openclaw/openclaw/issues/44925

4.  **[Issue #106779] Issue with local llama.cpp provider** (12 Comments, 3 👍)
    - Users are experiencing failures with local LLM providers (llama.cpp) that previously worked, specifically a "400 Unable to generate parser" error for templates. This is a concern for users relying on local, private AI setups.
    - **Link:** https://github.com/openclaw/openclaw/issues/106779

---

### 5. Bugs & Stability
The project is dealing with several high-severity P0 and P1 issues that are actively impacting users. The most critical ones are:

- **P0: Agent DB v14->v15 migration fails** (#119263, 6 Comments): After updating, a database migration fails with `no such column: entry_valid`, preventing the gateway from starting. This is a major upgrade blocker. Fix PRs are being discussed (#118506), but none merged as of today. **Link:** https://github.com/openclaw/openclaw/issues/119263

- **P0: Persistent file-based provider cooldown** (#70903, 6 Comments): Users are locked out of paid providers for hours after a billing recovery, blocking them even after topping up credit. Related to #115642. **Link:** https://github.com/openclaw/openclaw/issues/70903

- **P0/P1: Managed media cleanup fails open** (#119090, 8 Comments): A data-loss bug where unreadable session stores (permissions, corruption) lead to the permanent deletion of a session's generated media. This is a serious data integrity issue. **Link:** https://github.com/openclaw/openclaw/issues/119090

- **P1: Gateway main thread saturated** (#118846, 19 Comments): A performance bug causing the main thread to peg at 100% CPU from boot, starving the accept loop and killing local RPC connections. **Link:** https://github.com/openclaw/openclaw/issues/118846

- **P1: Duplicate replies on Telegram** (#86519, 13 Comments): A regression causing the agent to repeat identical replies 2-10x, frustrating users on the channel. **Link:** https://github.com/openclaw/openclaw/issues/86519

---

### 6. Feature Requests & Roadmap Signals
The community is not just reporting bugs; they are pushing the product towards greater control, security, and interoperability.

- **Security & Control:**
    - **Memory Trust Tagging** (#7707, 27 Comments): High demand for a trust-based memory system to defend against prompt injection and data poisoning.
    - **Denylist support for exec-approvals** (#6615, 11 Comments, 8 👍): Users want to define "allow everything except X" policies for command execution, indicating a desire for flexible security policies over rigid allowlists.

- **UX & User Interface:**
    - **MathJax/LaTeX Support in Control UI** (#42840, 9 Comments, 10 👍): A clear need for rendering scientific and mathematical content properly in the UI for professional/educational use.

- **Platform and Deployment:**
    - **Comprehensive AWS deployment guide** (#13597, 7 Comments, 4 👍): A strong signal for enterprise and cloud-native adoption, as users seek official guidance for deploying on EC2/ECS/Lambda.

- **Performance:**
    - **Session context bloat** (#67419, 10 Comments, 2 👍): Users are concerned about token waste due to constant re-injection of large system files.

---

### 7. User Feedback Summary
User feedback today is a mix of frustration with regressions and praise/requests for new features.

- **Pain Points:** The overwhelming theme is a lack of reliability in asynchronous operations. Users are frustrated by **silently lost subagent completions** (#44925) and **undelivered messages on Slack** (#96692) and **Telegram duplicates** (#86519). The **provider cooldown bug** (#70903) is also a major pain point as it stops work entirely even after users have fixed the root cause.
- **Bugs Impacting Trust:** Issues like the **hardcoded work path** (#51429) and **repeated bot replies** (#86519) erode user trust in the software's core functionality.
- **Feature Demand:** There is significant demand for features that give users more granular control—over security policies (#6615), memory trust (#7707), and channel behavior (#45475).

---

### 8. Backlog Watch
Several long-standing issues remain open, waiting for maintainer action, and are at risk of stalling further.

- **[Issue #7707] Memory Trust Tagging by Source** (From 2026-02-03): Despite 27 comments and clear security implications, it is still marked as `needs-maintainer-review` and `needs-product-decision`, with no fix PR in progress.
    - **Link:** https://github.com/openclaw/openclaw/issues/7707

- **[Issue #6615] Add denylist support for exec-approvals** (From 2026-02-01): This feature has high community support (8 👍) but is stuck without a decision on scope.
    - **Link:** https://github.com/openclaw/openclaw/issues/6615

- **[Issue #42840] MathJax/LaTeX Support to Control UI** (From 2026-03-11): A popular request (10 👍) that has not attracted a fix PR.
    - **Link:** https://github.com/openclaw/openclaw/issues/42840

- **[Issue #70903] Persistent file-based provider cooldown** (P0, From 2026-04-24): This is a severe bug that is still open and appears to be a leading cause of user frustration with auth providers. It requires an urgent fix.
    - **Link:** https://github.com/openclaw/openclaw/issues/70903

---
The project's "clawsweeper" automation system is actively generating fix PRs for a high volume of issues, which is positive for scale but is creating a bottleneck at the maintainer review stage. The backlog of high-severity bugs, particularly around state management and provider reliability, remains the project's most critical challenge.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-06 | **Data Window:** Last 24 hours

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is in a **post-hype maturation phase**, characterized by intense stabilization efforts, security hardening, and architectural refactoring rather than greenfield feature blitzes. Across the nine active projects, the dominant themes are **reliability of asynchronous operations** (subagent result delivery, message delivery across channels), **memory safety and trust** (prompt injection defenses, memory poisoning concerns), and **MCP ecosystem integration** as the universal tool-interop standard. Projects are converging on similar architectural patterns—god-file decomposition, single-writer database invariants, bounded resource management—indicating a shared set of operational lessons being learned across the ecosystem. Community expectations are rising: users demand declarative configuration, audit trails, and graceful failure modes, signaling that agent frameworks must now compete on operational maturity, not just model capabilities.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Primary Phase |
|---------|-------------|-----------|----------------|--------------|---------------|
| **OpenClaw** | 500 updated | 500 updated (63 closed) | Dev/hardening (last: v2026.7.2) | ⚠️ **Critical** | Triage/stabilization |
| **NanoBot** | 4 active | 6 closed | No release | 🟡 **Moderate** | Feature development |
| **Hermes Agent** | 50 updated | 50 updated (1 merged) | 0.20.0 (with regression) | 🟡 **Moderate** | Refactoring + bug fixing |
| **PicoClaw** | 0 new | 4 open, 1 merged | No release | 🟢 **Stable** | Feature pending review |
| **NanoClaw** | 2 old bugs | 12 updated (2 merged) | No release | 🟢 **Healthy** | Feature + hardening |
| **NullClaw** | 0 new | 2 open (critical fixes) | No release | 🟢 **Stable** | Maintenance/hardening |
| **IronClaw** | 43 updated | 50 updated (18 merged) | v1.1.0-rc.1 | 🟡 **Moderate** | RC hardening/QA |
| **LobsterAI** | 3 new | 12 merged | **v2026.8.5** | 🟢 **Healthy** | Active shipping |
| **ZeroClaw** | 50 updated | 50 updated (1 merged) | No release | ⚠️ **Concerning** | Security stabilization |
| **CoPaw** | 22 updated | 50 updated (22 merged) | 2.0.1/2.1.0b2 | 🟢 **Healthy** | Consolidation |
| **Inactive:** TinyClaw, Moltis, ZeptoClaw | — | — | — | ⚪ Dormant | No activity |

**Scale note:** OpenClaw's 500/500 issue/PR volume dwarfs all peers, indicating either a vastly larger user base or an automated triage system (confirmed: "clawsweeper" bot) generating high throughput.

---

## 3. OpenClaw's Position

**Advantages:**
- **Unmatched community scale:** 500 issues + 500 PRs updated in 24h demonstrates a user base 10-50x larger than peers (next-closest: IronClaw at 93 total, ZeroClaw at 100).
- **Automated triage infrastructure:** The "clawsweeper" bot system autonomously generates fix PRs, creating a scalable triage pipeline no other project has replicated.
- **Channel breadth:** Active development across Slack, Telegram, WhatsApp, Feishu, and voice channels—peer projects handle 1-3 channels by comparison.
- **Active P0/P1 bug discovery:** 5+ critical-severity bugs under active investigation signals deeper real-world usage stress-testing.

**Technical approach differences:**
- OpenClaw employs **automated bot-driven issue resolution** at scale, while peers rely on human maintainer review—a scalability differentiator but creates a review bottleneck (many bot PRs stall).
- Session-state integrity is treated as a first-class concern (voice state retention, subagent completion tracking), an area peers are only beginning to address.

**Community size comparison:** OpenClaw's daily activity (1,000 combined issue/PR events) exceeds the **combined total of all other active projects** (approximately 400 combined events). This is likely the reference implementation in the space.

**Key risk:** The bot-driven pipeline risks overwhelming maintainers—a significant number of bot PRs are "stalled waiting for author confirmation or maintainer review."

---

## 4. Shared Technical Focus Areas

| Focus Area | OpenClaw | NanoBot | Hermes | IronClaw | ZeroClaw | CoPaw | NanoClaw | LobsterAI | PicoClaw |
|------------|:-------:|:-------:|:------:|:--------:|:--------:|:-----:|:--------:|:---------:|:--------:|
| **Subagent/async reliability** | ✅ P1 bug | — | — | — | — | ✅ | — | — | — |
| **Message delivery guarantees** | ✅ P1 bugs | ✅ | ✅ | ✅ | — | — | ✅ | — | — |
| **Memory safety/trust** | ✅ High-demand | — | ✅ | — | ✅ | — | — | — | — |
| **MCP integration** | — | ✅ Bug | — | ✅ | — | ✅ Critical | ✅ | — | — |
| **Model fallback/routing** | — | — | — | — | — | ✅ Merged | — | — | ✅ PR open |
| **Config-as-code/declarative** | — | — | — | ✅ Epic | — | — | — | ✅ Request | — |
| **Provider auth robustness** | ✅ P0 bugs | — | ✅ | ✅ P1 | ✅ S1 | ✅ | — | — | — |
| **Security hardening** | ✅ | — | ✅ | ✅ | ✅ **Primary** | — | — | — | — |
| **God-file/architecture refactor** | — | — | ✅ **Primary** | ✅ | — | — | — | — | — |
| **Shell/exec safety policies** | ✅ Feature req | — | ✅ | — | ✅ RFC | — | — | — | — |

**Emerging cross-project requirements:**
1. **Model fallback chains** (CoPaw, PicoClaw) — users want automatic failover between providers
2. **Trust-tiered memory** (OpenClaw, Hermes) — protect against prompt injection via memory poisoning
3. **Declarative, auditable configuration** (IronClaw, LobsterAI) — replace hand-edited JSON/env
4. **MCP tool error transparency** (NanoBot, CoPaw, IronClaw) — business errors must not be swallowed
5. **Channel attachment reliability** (NanoClaw, CoPaw, IronClaw) — cross-boundary file delivery
6. **Bounded resource management** (OpenClaw, ZeroClaw, CoPaw) — prevent unbounded state/log growth

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architecture |
|---------|---------------------|-------------|--------------|
| **OpenClaw** | Scale + channel breadth; bot-driven triage | Power users, multi-channel ops | Monolithic core + channel adapters + automated agents |
| **NanoBot** | WebUI-first experience; privacy-focused temp chats | Developer toolers, web-centric | Lightweight, WebUI-centric, MCP client |
| **Hermes Agent** | Methodical code-quality discipline; god-file decomposition policy | Enterprise/enterprise-adjacent teams | Monolithic (20 god files) → modular refactor |
| **IronClaw** | Extension marketplace (IronHub); Reborn architecture | Enterprise, extensibility-focused | Modular architecture, WASM skills |
| **ZeroClaw** | Security & governance focus; RFC-driven roadmap | Security-conscious enterprises | Service/daemon architecture, SOP automation |
| **CoPaw** | Chinese-language UX; agent-first desktop app | Chinese-speaking users, agent workflows | Tauri desktop + console, OpenClaw runtime |
| **NanoClaw** | Channel flexibility + skills ecosystem | Self-hosters, channel aggregators | Agent-runner + channel skills |
| **LobsterAI** | Desktop app polish; enterprise auth; activity features | End-users, enterprise via desktop | Electron-like desktop over OpenClaw runtime |
| **NullClaw** | Minimalist, focused maintenance | Users wanting stable "set-and-forget" | Lightweight runtime |
| **PicoClaw** | Auth flexibility (OAuth), model configuration | Anthropic/API-heavy users | CLI + backend |

**Architecture trend:** Two competing philosophies are emerging—**monolithic reference implementations** (OpenClaw, Hermes, ZeroClaw) vs. **modular composable platforms** (IronClaw, NanoBot, NanoClaw). The monolithic camp is actively decomposing their codebases (Hermes's 20 god-file policy, OpenClaw's bot-assisted slicing), while the modular camp is integrating standard protocols (MCP) as their extension mechanism.

---

## 6. Community Momentum & Maturity

| Tier | Project | Assessment |
|------|---------|-----------|
| **Tier 1: Hyper-active, high-velocity** | **OpenClaw** | Massive throughput but strain evident; automated triage masked by manual review bottleneck |
| | **ZeroClaw** | Intense security stabilization; RFC-driven process mature but risk of maintainer burnout (49 open high-risk PRs) |
| **Tier 2: Active, shipping** | **LobsterAI** | Most releases shipped (v2026.8.5); strong iterative cadence |
| | **CoPaw** | High merge throughput (22 PRs closed); consolidating toward stable release |
| | **IronClaw** | RC phase with rigorous QA; 18 PRs merged in 24h |
| **Tier 3: Moderate, feature-building** | **NanoBot** | Strong single-project momentum; notable missing: no recent releases |
| | **Hermes Agent** | Heavy refactoring; Telegram campaign is well-organized |
| | **NanoClaw** | Healthy feature + hardening; modest scale |
| **Tier 4: Stable, low-activity** | **PicoClaw** | Healthy PR queue but slow (5-month avg time-to-merge); resource-constrained |
| | **NullClaw** | Maintainer-driven, minimal community input; critical fixes pending |
| **Tier 5: Dormant** | **TinyClaw, Moltis, ZeptoClaw** | No activity; likely abandoned or frozen |

**Rapidly iterating:** OpenClaw, LobsterAI, CoPaw, IronClaw
**Stabilizing:** PicoClaw, NullClaw
**At risk:** ZeroClaw (volume strain), OpenClaw (bottleneck on bot PRs), PicoClaw (contribution pipeline slowness)

---

## 7. Trend Signals

### For AI Agent Developers

1. **Reliability is the new frontier.** Consensus across OpenClaw (P1: silent subagent loss), NanoBot (MCP errors stalling agent), IronClaw (agent hallucinates state), CoPaw (tool protocol violations) — the #1 user pain is not model quality but **deterministic execution of async operations**. Winning projects will invest in idempotency, retry semantics, and explicit failure surfacing.

2. **Memory is becoming a security surface.** OpenClaw's 2-year-old "Memory Trust Tagging" issue now has 27 comments; Hermes is adding memory lifecycle UX; ZeroClaw's SOP automation raises questions about what the agent "remembers." Expect **trust-tiered, provenance-tracked memory** to become a default feature in 2027.

3. **MCP is the interop standard, but immature.** Four projects (NanoBot, IronClaw, CoPaw, NanoClaw) reported MCP reliability issues in 24 hours—error envelope handling, stale registries, environment variable gaps. The protocol needs **ecosystem-level tooling** (debuggers, health checks, timeout config) to reach production-grade.

4. **Model fallback is table stakes.** CoPaw and PicoClaw both shipped/are-shipping fallback chains. Users refuse to be blocked by a single provider outage. Expect **automatic routing** (CoPaw's #6436) to become standard.

5. **"Silent failure" is the most damaging failure.** Whether it's OpenClaw's lost subagent results, ZeroClaw's cron SOPs not working, or CoPaw's MCP tools going stale—**failures without explicit error surfacing destroy user trust**. Developers should instrument agents to always report status changes, even (especially) for background operations.

6. **Configuration needs structure.** IronClaw's config-as-code epic, LobsterAI's config overwrite bug, ZeroClaw's config CLI inconsistencies—**users want declarative, version-controlled, auditable configuration** with schema validation and diffs.

7. **Security policies need granularity, not binary toggles.** OpenClaw's denylist request, ZeroClaw's "allow/ask/deny" shell tiers, Hermes's lifecycle-guard hardening—**the community is pushing for Claude Code-style interactive permission systems** over rigid allowlists.

8. **Architecture debt is the cost of speed.** Hermes's 12,599-line god file, ZeroClaw's 6,400-line service, OpenClaw's session-state leaks—**all projects that scaled fast are now paying decomposition costs**. Early investment in modularity (IronClaw's WASM, NanoClaw's seams) appears to be paying dividends in maintainability.

---

*Report compiled from 12 project digests spanning GitHub activity from 2026-08-05 to 2026-08-06. All metrics are as-reported by project-specific analysis; "inactive" projects showed zero activity in the window.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-06

## 1. Today's Overview

NanoBot shows strong, sustained development momentum. Activity is centered on the WebUI, with two major feature tracks — Temporary Chat mode and a shared interactive project terminal — currently in active PR review. The merge queue is processing steadily, with six PRs closed today spanning bug fixes, UI polish, and the integration of a new metasearch provider (mst-python). However, project health is tempered by four open bugs, including a high-severity MCP error-handling flaw that causes the agent to stall until timeout, and a newly reported goal-loop issue where a single `/goal` command triggers dozens of repetitive replies.

## 2. Releases

No new releases were published today. The project continues to deliver improvements through incremental PRs rather than versioned releases.

## 3. Project Progress

Six PRs were merged or closed today:

- **feat(agent): integrate mst-python as a metasearch provider** (#5234) — A new web search provider aggregating results from DuckDuckGo, Google, Brave, and Bing via Reciprocal Rank Fusion, offering richer coverage than single-engine providers.
- **fix(whatsapp): detect outbound media content before dispatch** (#5203) — Fixes audio delivery failures by identifying file types from actual content rather than trusting filename extensions, with proper fallback to document sending for unsupported formats.
- **feat(webui): add provider-native request switches** (#5254) — Adds WebUI toggles for OpenAI Codex Fast mode, OpenAI/DeepSeek web search, and xAI Grok X Search via raw provider request field editing.
- **fix(webui): feather clipped activity edges** (#5250) — Improves visual fade effects on clipped activity panes with direction-aware rendering.
- **refactor(webui): improve visual consistency** (#5249) — Standardizes menus, popovers, and dialogs with a two-level elevation system; includes automatic timezone detection.
- **feat(webui): add Quick Chat and Temporary Chat** (#5184) — Closed due to conflicts; superseded by the newer, stacked PRs #5252 and #5259.

## 4. Community Hot Topics

The most active discussions center on functional bugs affecting real-world usage:

- **Issue #5149: "no audio?"** (4 comments) — Users report NanoBot fails to send audio messages on WhatsApp while receiving them works fine. The log trace points to a `neonize.utils.ffmpeg WARNING`, suggesting a codec conversion issue. Underlying need: reliable, cross-platform media delivery.
- **Issue #5237: MCP tool error envelope handling** (2 comments) — A technical deep-dive on how NanoBot treats business-error responses from MCP servers as success (`isError=False`), causing the agent to wait pointlessly until timeout. Underlying need: proper error propagation from external tool calls.
- **PR #5259: enforce memory-only temporary sessions** — A stacked PR clarifying the contract for temporary chats: no persistence to session history, WebUI transcripts, or automatic memory. Active review signals community interest in privacy-focused chat modes.

## 5. Bugs & Stability

Four issues were active today, ranked by severity:

1. **Issue #5237: MCP tool "data not found" causes agent stall** (Open, P1-equivalent) — The agent misinterprets business error envelopes as success, then waits for tool_timeout before recognizing failure. This is a correctness issue in the core agent loop that degrades MCP-based workflows significantly. A direct fix could draw on the pattern from PR #5257 (bounding continued execution). **No fix PR yet.**
2. **Issue #5256: `/goal` message produces dozens of repeated replies** (Open, P1) — A loop condition where the agent keeps injecting goal-continuation nudges while waiting for user input, burning tokens until intervention. **Fix ready: PR #5257** bounds sustained-goal continuation when the turn goes idle.
3. **Issue #5149: WhatsApp outbound audio missing** (Open, P2) — Media delivery regression despite a related PR (#5203) being merged. Worthy of verification that the fix actually resolves the reported case.
4. **Issue #5251: MCP Apps host support missing** (Open, P1) — While a feature request, it also represents a platform gap: MCP call results (e.g. interactive UIs) are not surfaced to the WebUI. This limits the value of MCP-connected tools.

## 6. Feature Requests & Roadmap Signals

Several clear roadmap signals emerged today:

- **Temporary Chat mode (PR #5252, #5259)** — Connection-owned, in-memory sessions with restricted workspace access; a deliberate privacy-first feature. Likely to land in the next release given the stacked PRs and active review.
- **Shared interactive project terminal (PR #5253)** — A persistent project-scoped PTY shared between WebUI and agent (xterm.js dock). High-value for developer workflows; likely in next-next release.
- **MCP Apps host support (Issue #5251)** — Integration of `io.modelcontextprotocol/ui` to render interactive MCP app UIs inside WebUI. This is a logical extension of the MCP client investment and could be the next major feature.
- **Truthful API service status (PR #5255, draft)** — Honest reporting for externally-managed `nanobot serve` instances plus a `nanobot api status` command. Low complexity, high trust value.
- **Metasearch provider (merged #5234)** — Signals continued investment in search provider flexibility; expect more provider-specific switches and modes (e.g. Fast mode, web search).

## 7. User Feedback Summary

User pain points cluster around three themes:

- **Media reliability on messaging channels** — WhatsApp audio delivery failures (Issue #5149) frustrate users relying on bot-based communication. The merged content-detection fix shows maintainers are listening, but verification is needed.
- **Agent loop control** — The `/goal` runaway loop (Issue #5256) highlights a need for stronger agent self-regulation and idle detection; users want predictable behavior without constant intervention.
- **Tool error transparency** — MCP business errors being swallowed (Issue #5237) undermines trust in agent decision-making; users expect explicit failure signals so the agent can retry or report rather than stall.

Satisfaction signals are positive: the Quick Chat/Temporary Chat feature set is actively reviewed and iterated (PR #5184 → #5252/#5259), and UI polish PRs keep landing.

## 8. Backlog Watch

No long-neglected critical issues are visible today. All open items have been updated within the last 24–48 hours. Notable items for maintainer attention:

- **Issue #5149 (audio)** — Active since July 28; despite PR #5203 merging, the issue remains unconfirmed as fixed. Recommend closing the loop with the reporter.
- **PR #5255 (draft: API service status)** — Draft state; a low-risk, high-transparency improvement that could be shepherded to completion.
- **PR #5253 (shared terminal)** — Large surface area (PTY, ConPTY, xterm.js); needs careful review to avoid performance or security regressions.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-06

## 1. Today's Overview
Hermes Agent is undergoing a systematic, repo-wide god-file decomposition campaign (epic [**#78647**](https://github.com/NousResearch/hermes-agent/issues/78647)), with **6 refactoring PRs** opened today slicing `hermes_cli/main.py` (12,599 lines) into focused modules (`cmd_facades`, `node_runtime`, `npm_toolchain`, `custom_provider_config`, `main_oneshot_exit`). Concurrently, several **P1/P2 stability bugs** were reported and immediately met with fix PRs: a Linux gateway staleness bug after `hermes update` (P1), a desktop app bottom-panel regression in 0.20.0 (P1), and a lifecycle-guard crash on NUL-bearing paths (P2) with **three** competing fix PRs (#79837, #79838, #79835). The Telegram feature-parity campaign (#78791) generated **15 open meta-issues** covering Bot API 10.2 gaps. Activity is high and healthy: 50 issues and 50 PRs updated in 24h, with maintainer attention visible on every critical path.

## 2. Releases
No new releases today. The last release was **0.20.0**, which introduced a regression (see Bugs & Stability: #79407 Desktop bottom panel missing).

---

## 3. Project Progress (Merged/Closed PRs)
Only **1 PR merged/closed** today:
- [**#79102**](https://github.com/NousResearch/hermes-agent/pull/79102) — **fix(gateway): treat virtual model alias as unset in API server sessions** (by blazzbyte, closes bug #79101). Sessions created without an explicit `model` now store `NULL` and fall back to the gateway's configured default model, rather than persisting the advertised virtual alias like `"hermes-agent"` as a real model ID.

**Active (not yet merged) PRs** that represent near-term progress:
- **God-file decomposition series** (epic #78647): PRs #79844–#79848 extract clusters from `hermes_cli/main.py` — oneshot hard-exit, custom-provider persistence, npm toolchain, node runtime leaf, and command facades. Also [**#79126**](https://github.com/NousResearch/hermes-agent/pull/79126) extracts `web_server.py` slice R1-C6 into `web_schema.py`.
- [**#79632**](https://github.com/NousResearch/hermes-agent/pull/79632) — **fix(tui): harden resize and scroll recovery**: serializes resize settle output, adds bounded late recovery, reserves pending-wrap column, repairs physical scroll region.
- [**#79159**](https://github.com/NousResearch/hermes-agent/pull/79159) — **feat(memory): inherit Hermes LLM in Hindsight embedded** — routes Hindsight `local_embedded` completion through a loopback OpenAI-compatible bridge to Hermes' host LLM.
- [**#78143**](https://github.com/NousResearch/hermes-agent/pull/78143) — **fix(kanban): count dry-run spawns toward global cap** (fixes #78117).

---

## 4. Community Hot Topics (Most Active Issues)
- [**#78647** — Epic: Shard all 20 god files (14 comments)](https://github.com/NousResearch/hermes-agent/issues/78647): The standing policy is "all god files are sharded, never reverted." Community members are actively extracting slices; 6 PRs today alone. Underlying need: maintainability of an ever-growing codebase (main.py at 12.6K lines, gateway/run.py at 858KB).
- [**#77780** — lifecycle_guard crashes on `ValueError: embedded null byte` (12 comments)](https://github.com/NousResearch/hermes-agent/issues/77780): Crashes break **all** terminal commands. Three fix PRs landed today (#79837, #79838, #79835) — see Bugs section. Underlying need: robust guard against malicious/weird shell tokens; also reveals heredoc parsing gaps in `shlex`.
- [**#54962** — Extract Gateway Platform Routing from gateway/run.py (11 comments)](https://github.com/NousResearch/hermes-agent/issues/54962): 858KB file; community pushing for decomposition into platform-specific routing modules.
- [**#78791** — Telegram Feature Parity meta-issue (5 comments)](https://github.com/NousResearch/hermes-agent/issues/78791): 15 child issues covering Bot API 10.2 — paid broadcasts, managed-bot APIs, business accounts, callback-query answering, inline-button variants, etc. Underlying need: feature parity with the Telegram Bot API 10.2 surface; many filed as "folding into identity draft" — suggesting a coherent Telegram revamp is being planned.
- [**#71941** — Delegated child context persists through shared terminal snapshots (5 comments)](https://github.com/NousResearch/hermes-agent/issues/71941): `HERMES_DELEGATED_CHILD_CONTEXT` leaks into subsequent agent invocations due to terminal caching — a session-isolation bug.

---

## 5. Bugs & Stability
Ranked by severity:

**P1 — Critical**
- [**#78574** — Linux default gateway can stay stale after `hermes update`, causing ImportError](https://github.com/NousResearch/hermes-agent/issues/78574): `hermes update` skips restarting the running systemd user gateway → mixed old/new module state → ImportError on next turn. No fix PR yet — **requires maintainer attention** (this breaks every Linux user on update).
- [**#79407** — [0.20.0 Regression] Desktop bottom operation panel completely missing](https://github.com/NousResearch/hermes-agent/issues/79407): 0.20.0 turned desktop into a "viewer-only shell" — missing Command Center entry, Gateway controls, sub-agent status. No fix PR yet. **High urgency regression.**

**P2 — High**
- [**#77780** — lifecycle_guard crashes on `ValueError: embedded null byte`](https://github.com/NousResearch/hermes-agent/issues/77780): Breaks **all** terminal commands. **Fix PRs exist:** [#79837](https://github.com/NousResearch/hermes-agent/pull/79837) (NUL path guard), [#79838](https://github.com/NousResearch/hermes-agent/pull/79838) (bound shlex scan against binary/oversized input, e.g. 166MB ELF), [#79835](https://github.com/NousResearch/hermes-agent/pull/79835) (heredoc body false-positives). Three overlapping fixes — needs consolidation/review.
- [**#79562** — Weixin `/approve` text fallback stops working after first approval (timing race)](https://github.com/NousResearch/hermes-agent/issues/79562): Dangerous-command approval works once per turn, then silently ignored. Message-delivery risk.
- [**#79220** — Cost label formats at 2dp, sub-cent turns show `$0.00`](https://github.com/NousResearch/hermes-agent/issues/79220): Display bug, not calculation. Low effort fix.
- [**#79459** — Local TTS (Piper + KittenTTS) ignore configured/requested voice](https://github.com/NousResearch/hermes-agent/issues/79459): Silently renders default voice.
- [**#71941** — Delegated child context persists through shared terminal snapshots](https://github.com/NousResearch/hermes-agent/issues/71941): Session-isolation leak.

**Other bugs today:**
- [**#79101**](https://github.com/NousResearch/hermes-agent/issues/79101) — Virtual model alias stored as real model (**fixed** by merged PR #79102).
- [**#78784**](https://github.com/NousResearch/hermes-agent/issues/78784) — Telegram bot short-description clobbered with online/offline status text (documented-behavior conflict).
- [**#78788**](https://github.com/NousResearch/hermes-agent/issues/78788) — Telegram callback queries with unknown/no data never answered → client spinner never resolves.
- [**#79820**](https://github.com/NousResearch/hermes-agent/issues/79820) (closed duplicate) — DeepSeek server-side native web_search via Responses API (feature, marked duplicate).

---

## 6. Feature Requests & Roadmap Signals

**Strong roadmap signals (multiple related PRs/issues):**

| Signal | Evidence |
|---|---|
| **God-file decomposition is a hard policy** | Epic #78647, 6 PRs today (#79844–#79848, #79126). Next targets: `gateway/run.py` (#54962), remaining 20 god files. |
| **Telegram Bot API 10.2 parity is an active campaign** | Meta-issue #78791 with 15 sub-issues (paid broadcasts, managed bots, business accounts, inline button variants, menu buttons, command scopes, batch deleteMessages, forward/copy multi-message, link preview options, reactions upgrades, suggested-post approval). Several marked "folded into identity draft" — a coherent Telegram overhaul PR is likely next. |
| **Memory lifecycle management** | [**#78307**](https://github.com/NousResearch/hermes-agent/issues/78307) — Add lifecycle management & maintenance UX for built-in memory (health, dedup, consolidation, conflict detection). Paired with #79159 (Hindsight LLM inheritance). Memory is a growing first-class surface. |
| **Guardrails hardening** | Loop-detection for read-only shell commands ([#79839](https://github.com/NousResearch/hermes-agent/pull/79839) — 517 identical terminal calls in one turn), lifecycle-guard hardening (3 PRs), heredoc parsing fix. |
| **Desktop UX polish** | Minimize-to-tray (Win/Linux, [#79803](https://github.com/NousResearch/hermes-agent/pull/79803)), zoom reassert on focus + numeric UI Scale ([#75495](https://github.com/NousResearch/hermes-agent/pull/75495)), preview links routed through file tabs ([#41736](https://github.com/NousResearch/hermes-agent/issues/41736)), activation-outcome reporting ([#79828](https://github.com/NousResearch/hermes-agent/pull/79828)). |

**Likely next-version features:** Telegram 10.2 parity batch (campaign pending), memory lifecycle UX, TUI resize fix, guardrail loop-detection, email splitting fix.

---

## 7. User Feedback Summary

**Pain points (real-user-reported):**
- **Update process is fragile on Linux** (#78574): "hermes update updated the shared checkout but silently skipped restarting the running default-profile systemd user gateway… next Telegram turn loaded a mixture of old in-memory modules and newly updated source files and failed with ImportError." — *User expectation: update should be atomic — restart gateway or warn.*
- **Desktop 0.20.0 regression is severe** (#79407): "The entire bottom operation panel is missing… the desktop app becomes a viewer-only shell." — *High frustration: a major version bump broke core workflow.*
- **Terminal guard crashes block everything** (#77780): "The crash propagates out of contains_gateway_lifecycle_command_or_referenced_script… breaks all terminal commands." — *Zero-tolerance for a guard that takes down the whole terminal subsystem.*
- **Micro-cost readout is misleading** (#79220): "Every cost readout shows ~$0.00 even though the computed amount is correct and non-zero." — *Users want real per-turn costs, even below $0.01.*
- **Delegated context leaks** (#71941): Child context persists in shared terminal snapshots — leads to confusion about which lineage a command runs under.
- **WeChat approval is flaky** (#79562): "Approving a dangerous command works once per turn, then subsequent approval attempts are silently ignored." — *Frustrating: a safety mechanism that randomly stops working is worse than none.*
- **Local TTS voice is ignored** (#79459): "Silently renders the default voice regardless of the configured or per-call voice argument."

**Satisfaction signals:** Community members are actively contributing (user-authored feature requests: DeepSeek web_search #79820, Hindsight LLM inheritance #79159, desktop tray #79803). The god-file decomposition campaign has high engagement — users are filing structured, methodology-driven issues (the "5×2×3 methodology").

---

## 8. Backlog Watch (Needs Maintainer Attention)

| Item | Age | Why it needs attention |
|---|---|---|
| [**#78574** — P1 Linux stale gateway after update → ImportError](https://github.com/NousResearch/hermes-agent/issues/78574) | 2 days | P1, affects all Linux users on `hermes update`, **no fix PR yet**. |
| [**#79407** — P1 Desktop 0.20.0 regression (viewer-only shell)](https://github.com/NousResearch/hermes-agent/issues/79407) | 1 day | P1 release-blocker regression, **no fix PR yet**. |
| [**#54962** — Extract Gateway Platform Routing from gateway/run.py](https://github.com/NousResearch/hermes-agent/issues/54962) | 38 days | 858KB god-file; epic policy says "never reverted," but no slice PRs yet for this file. Needs a champion. |
| [**#41736** — Route assistant-message Preview links through file tabs](https://github.com/NousResearch/hermes-agent/issues/41736) | 59 days | Opened 2026-06-08, only 3 comments; desktop preview routing inconsistency persists. |
| [**#78647** — God-file sharding epic](https://github.com/NousResearch/hermes-agent/issues/78647) | 2 days | 20 god files; need clear tracking of which are done, which remain, and acceptance criteria for "sharded." |
| [**#77780** — lifecycle_guard NUL-byte crash](https://github.com/NousResearch/hermes-agent/issues/77780) | 3 days | **Three** fix PRs (#79837, #79838, #79835) — needs maintainer to consolidate/review, pick one or merge approaches. |
| [**#78689–#78693, #78781–#78791** — 15 Telegram parity issues](https://github.com/NousResearch/hermes-agent/issues/78791) | 2 days | One meta-issue, 15 children — many marked "duplicate" or "folded." Need triage and a consolidated implementation plan; currently scattered. |

---

*Data window: 2026-08-05 → 2026-08-06. Sources: NousResearch/hermes-agent issues #79848–#41736 and PRs #79848–#78143.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-08-06

---

## 1. Today's Overview

PicoClaw is in a **moderately active development phase** despite showing zero new issue activity in the last 24 hours. The project currently has **4 open pull requests** receiving updates, indicating ongoing feature development, though community engagement via issues appears dormant. Notably, an older PR (#926) was merged/closed today, representing the completion of a significant authentication feature that had been in the pipeline for over five months. The long-lived nature of several PRs (spanning 2–5 months) suggests maintainers may be resource-constrained, but the eventual merge of #926 signals that work does make it through the pipeline. The repository shows a healthy balance of domain-level features (auth, models) and infrastructure improvements (build tooling, lockfile fixes).

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent release remains unspecified; there is no associated changelog data to report.

---

## 3. Project Progress

**Merged/Closed PR:**

- **[#926 — feat(auth): add Anthropic OAuth setup-token login](https://github.com/sipeed/picoclaw/pull/926)** — Closed on 2026-08-05, created 2026-02-28 by BallerIsLeet.
  - **What it brings:** Support for Anthropic OAuth setup tokens (`sk-ant-oat01-*`) as an alternative to traditional API keys. Includes a new `--setup-token` CLI flag and an interactive login menu option, integration with Anthropic's usage endpoint for 5-hour and 7-day utilization tracking in `auth status`, and streaming support for OAuth tokens.
  - **Impact:** This is a substantial enhancement that improves authentication flexibility and user visibility into token usage. The 5-month gap between creation and merge suggests a thorough review process or potential dependency on upstream Anthropic API stability.

**Active PRs (still open, updated today):**

- **No new non-documentation development was merged today**; the remaining three open PRs are awaiting review (see Community Hot Topics).

---

## 4. Community Hot Topics

While no PRs have recorded comment counts or significant reactions, the four updated PRs represent the current community activity. Analysis of the underlying needs:

- **[#3200 — Configurable default fallback chain (Models)](https://github.com/sipeed/picoclaw/pull/3200)** by lc6464 — This feature directly addresses a user need for resilient model workflows. Users evidently want the ability to define a primary model and automatically fall back to alternatives when the primary fails. This suggests real-world reliability concerns with model providers being a primary pain point. The PR persists this configuration via the backend API in a dedicated models-page workflow.

- **[#3318 — Repair unparseable pnpm-lock.yaml](https://github.com/sipeed/picoclaw/pull/3318)** by nuestraai — This is a critical build-blocking bug fix. The lockfile contains duplicate mapping keys, rendering the entire frontend unbuildable (`ERR_PNPM_BROKEN_LOCKFILE`). The urgency here is high for any developer attempting to work on the web frontend.

- **[#1951 — Move installation scripts from docs to main repo](https://github.com/sipeed/picoclaw/pull/1951)** by lc6464 — This operational improvement indicates a desire to centralize installation tooling within the primary repository for better discoverability and version alignment. Its 4-month age hints at back burner status.

- **[#926 — (merged, see above)](https://github.com/sipeed/picoclaw/pull/926)** — While now closed, this generated engagement when active, evidenced by its long review lifecycle. The OAuth support is an anticipated feature for Anthropic users preferring SSO-style authentication.

**Underlying needs:** Users are primarily concerned with **reliability** (fallback chains), **authentication flexibility** (OAuth), and **developer experience** (lockfile resolution, script centralization).

---

## 5. Bugs & Stability

Only one bug/issue has been identified, ranked by severity:

1. **[#3318 — Broken pnpm-lock.yaml (HIGH severity)](https://github.com/sipeed/picoclaw/pull/3318)** — *Status: Fix PR proposed, open.*
   - **Affected component:** `web/frontend/pnpm-lock.yaml`
   - **Issue:** YAML duplicate mapping key for `semver@7.8.5` under both `packages:` and `snapshots:`, causing pnpm to reject the lockfile entirely, making the frontend impossible to install/build.
   - **Reproduction context:** Any `pnpm install` on the frontend will fail immediately.
   - **Fix PR exists:** Yes, #3318 removes the duplicate entry. This PR **should be prioritized** for merge as it is a total blocker for frontend development workflows.

No other crashes, regressions, or runtime bugs were reported in the last 24 hours.

---

## 6. Feature Requests & Roadmap Signals

Two PRs strongly indicate upcoming roadmap direction:

- **Anthropic OAuth Setup-Token Authentication (#926, now merged):** Expect this in the next release. Look for expanded provider authentication options in the future (e.g., Google, OpenID Connect) as a natural extension of this pattern.

- **Configurable Model Fallback Chain (#3200, open):** Likely to land in the next stable release once reviewed. This signals a broader product direction toward **operator-reliability** and **DR (disaster-recovery) configurations**. Given the persistence mechanism introduced by the PR, expect additional model-to-provider routing features in future versions.

- **Installation Scripts Consolidation (#1951, open):** Indicates focus on improving **onboarding UX** and reducing friction in environment setup. This may be bundled with a "quickstart" overhaul in a future minor version.

**Predicted next minor version features:** OAuth token support (merged), model fallback chain configuration (pending), and installation script unification (pending).

---

## 7. User Feedback Summary

Direct user comments are sparse in this snapshot, but PR intent and descriptions reveal the following:

- **Pain point (Anthropic users):** API key management is friction; OAuth setup tokens are preferred for enterprise environments. The successful merge of #926 directly addresses this.
- **Pain point (Frontend devs):** The unbuildable lockfile (#3318) represents a recent regression caused by a version bump. This indicates a possible lack of CI enforcement for lockfile integrity or a manual merge oversight once model fallback changes landed.
- **Pain point (Provider reliability):** Requests for fallback chains (#3200) show dissatisfaction with single-provider outages and a desire for configurable redundancy.
- **Satisfaction signals:** The active development on the models page and auth UX suggests users are getting better tooling. The low comment counts across all PRs suggest early-stage review with little blocker-level disagreement — a generally healthy sign.

---

## 8. Backlog Watch

These items require maintainer attention due to their age and ongoing relevance:

- **[#1951 — Installation scripts centralization (PR, open since 2026-03-24)](https://github.com/sipeed/picoclaw/pull/1951)** — **High priority.** 4+ months without merge. This feature is low-risk and widely useful (it pulls in docs repo content referenced in sipeed/picoclaw_docs#14). If it's blocked on internal processes, those blockers should be resolved or the scope narrowed.

- **[#3200 — Configurable fallback chain (PR, open since 2026-07-01)](https://github.com/sipeed/picoclaw/pull/3200)** — **Medium-high priority.** Over a month old, directly addresses user reliability needs. The feature is self-contained per the description. Maintainer review is needed to prevent the branch from drifting from main.

- **[#3318 — Lockfile fix (PR, open since 2026-08-05)](https://github.com/sipeed/picoclaw/pull/3318)** — **Immediate priority from a build stability perspective.** A 1-day-old PR but should be merged as an urgent hotfix to unblock contributors.

These three items represent the current bottleneck: maintainers have roughly 3 open PRs awaiting action, the oldest of which predates recent development cycles. All are non-controversial or enhancive in nature, so expedited review would materially improve project velocity and health.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-06

## 1. Today's Overview

NanoClaw is in a period of sustained, high-velocity development. With 12 pull requests updated in the last 24 hours (10 open, 2 merged/closed), the project shows a strong pulse of community contributions covering fixes, refactors, and new skills. Activity is concentrated on hardening the core agent runtimes, improving container/session isolation, and expanding the ecosystem of channel and utility skills. Notably, there are currently no new releases, and the two active issues on record are older, lower-urgency bugs. The overall project health appears robust, with a healthy ratio of new contributions and a clear focus on architectural correctness (e.g., database single-writer invariants) and stability.

## 2. Releases

**None.** No new versions were published in the last 24 hours.

## 3. Project Progress

**Merged/Closed PRs (2):**

- **[#3187 — fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works](https://nanocoai/nanoclaw PR #3187)** (Merged/Closed). This fix removes a conflict where a built-in `SendMessage` tool was interfering with the ability for agents to message each other, unblocking inter-agent communication paths.
- **[#3175 — fix: route command-gate denials through the delivery adapter, not outbound.db](https://nanocoai/nanoclaw PR #3175)** (Closed). This PR addresses a significant architectural issue where the host process was directly writing to a session's `outbound.db` database, violating the project's single-writer rule. The fix routes these denial notices through the proper delivery adapter. Note: an updated version of this PR, **#3192**, remains open (likely superseding #3175).

**Active PRs Advancing Features (10 open):**

- **Skills Ecosystem:** New utility skills proposed include a **[Tavily MCP tool skill](https://nanocoai/nanoclaw PR #3190)** and an **[add-why skill](https://nanocoai/nanoclaw PR #3189)** to explain agent message outcomes.
- **Channel Integrations:** PR **[#3050](https://nanocoai/nanoclaw PR #3050)** adds the "Dial" channel to the setup wizard and channel skills.
- **Core Stability:** PRs addressing WhatsApp reconnection timeouts (**[#3191](https://nanocoai/nanoclaw PR #3191)**), structured attachment handling for providers (**[#3156](https://nanocoai/nanoclaw PR #3156)**), and MCP server environment variable forwarding (**[#3188](https://nanocoai/nanoclaw PR #3188)**).
- **Refactoring:** PR **[#3186](https://nanocoai/nanoclaw PR #3186)** adds host seams for skill-owned capabilities, preparing for cleaner skill integrations.

## 4. Community Hot Topics

The most actively discussed items (including comments and updates over the last day) show a focus on integration robustness and core architecture:

- **[Issue #2528: Signal channel: image/PDF attachments unreachable from agent container](https://nanocoai/nanoclaw Issue #2528)** — While this issue is old (May), it was recently updated. The underlying problem is a channel/container integration gap: attachments land on the host but are not accessible to the sandboxed agent. This is a classic isolation boundary issue and is likely a top priority for UX. The recently opened PR **[#3156](https://nanocoai/nanoclaw PR #3156)** ("carry channel attachments to providers as structured parts") may be the direct fix for this, connecting attachment handling across the boundary.

- **[PR #3192: fix: route command-gate denials through the delivery adapter, not outbound.db](https://nanocoai/nanoclaw PR #3192)** — The continuation of the closed PR #3175, this is a "hot" topic due to its architectural significance. It highlights the maintainers' and community's vigilance in adhering to the project's own invariants (single-writer rule) and database integrity.

## 5. Bugs & Stability

**Reported/Active Bugs (Ranked by Severity):**

1.  **[High: #2528] Signal Channel Attachments Unreachable** — As noted, the agent container cannot access image/PDF attachments sent via Signal. This is a significant functional gap for a core channel. *Potential Fix:* PR **[#3156](https://nanocoai/nanoclaw PR #3156)** aims to restructure how attachments are carried to providers.

2.  **[Medium: #2006] Docker socket permission denied on fresh Debian 12 LXC install** — The setup script adds the user to the `docker` group but subsequent steps fail due to permission issues. This points to a group-membership timing issue (requires re-login) or a need to use `newgrp` in the script. This is a moderate onboarding friction for a specific but common environment (Proxmox). *No open fix PR found.*

3.  **[Medium: #3191] WhatsApp setup() can hang host startup when logged out** — The unbounded promise waiting for a connection event can freeze the entire host startup if the session requires re-authentication. *Fix proposed in PR: **[#3191](https://nanocoai/nanoclaw PR #3191)**.*

4.  **[Low: #3188] MCP servers missing proxy/CA environment variables** — Spawned MCP servers start with a bare environment, lacking `HTTPS_PROXY` or CA trust variables. This can break network-dependent tools behind proxies. *Fix proposed and open in PR **[#3188](https://nanocoai/nanoclaw PR #3188)**.*

## 6. Feature Requests & Roadmap Signals

- **Agent-to-Agent Messaging Capability (PR #3187):** The recent fix to enable proper inter-agent messaging is a strong signal that this is an actively developed feature area. Expect more capabilities around multi-agent workflows in future releases.
- **Expansion of the Skills Ecosystem (PRs #3190, #3189):** The frequent introduction of new utility skills (e.g., Tavily MCP, add-why) suggests the project is heavily investing in making NanoClaw extensible. The community is actively contributing to this ecosystem.
- **New Channel Integrations (PR #3050):** The addition of the "Dial" channel in the setup wizard indicates the roadmap is focused on broadening communication defaults. We can predict that the "Dial" integration will be finalized and released soon.
- **Host/Container Seams (PR #3186):** The refactoring to add host seams for skill-owned capabilities points toward a more sophisticated and flexible architecture in the near future, allowing for more powerful skill integrations that can interact with the host system.

## 7. User Feedback Summary

- **Pain Point (Onboarding):** The Debian 12 LXC Docker permission issue (Issue #2006) is a clear frustration point, affecting users attempting to self-host in a popular virtualized environment.
- **Pain Point (Core UX):** The inability to use attachments in the Signal channel (Issue #2528) is a direct user-facing functional gap between prompt-based and richer, multi-modal interactions.
- **Positive Signal (Reliability):** The community's responsiveness to architectural issues (like the outbound.db single-writer problem) shows a mature user base that values long-term stability and code quality over quick patches, which reflects well on the project's management and direction.

## 8. Backlog Watch

- **[Issue #2006: Fresh install on Debian 12 LXC: docker socket permission denied — recovery path doesn't fire](https://nanocoai/nanoclaw Issue #2006)** — Created in late April, this issue has been open for over three months and was updated today but has no linked fix PR. While the "recovery path doesn't fire" adds complexity, this initial setup bug is a barrier to adoption for many users. It warrants maintainer attention to either fix the script (e.g., using `newgrp` within the script) or improve the troubleshooting documentation.

- **[PR #2346: fix(formatter): treat unknown slash commands as normal chat](https://nanocoai/nanoclaw PR #2346)** — Opened in early May, this PR addresses a silent user-facing failure (responses being dropped). It has been open for three months without being merged or receiving a final review. This could be a candidate for review or could be superseded by newer formatter changes; either way, it needs closure.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-08-06**.

---

## NullClaw Project Digest — 2026-08-06

### 1. Today's Overview
NullClaw is in a **low-activity maintenance phase**. There were zero new issues and no releases in the last 24 hours, but the project is not dormant. Two critical bug-fix Pull Requests (#984, #985) were submitted, targeting specific runtime stability and channel reliability issues. Both PRs remain open, suggesting the maintainers are actively reviewing, but community engagement (comments/reactions) is currently minimal. Overall project health is stable, with focus shifting from feature development to hardening the core agent runtime and integrations.

---

### 2. Releases
No new versions or releases were published in the last 24 hours. No changelog or migration notes to report.

---

### 3. Project Progress
No PRs were merged or closed today. However, two significant open PRs represent substantial forward progress on stability fixes:
- **PR #985** (fix(runtime)): Addresses a root cause where the agent's turn path stack size was incorrectly aliased to the heavy runtime stack size. This fix aims to prevent stack overflows in the `SessionManager` and `Agent.turn()` execution paths by allocating a dedicated, larger stack (16 MiB) for these threads.
- **PR #984** (fix(channels)): Targets a persistent bug where Telegram and Matrix channels silently die after idle periods. The fix modifies the supervision loop to detect and age out dead polling threads, preventing the need for manual gateway restarts.

---

### 4. Community Hot Topics
There is currently **no active discussion** on any issues or PRs. The two open PRs (#984, #985) have zero comments and reactions, indicating they are likely being worked on in a focused manner by the author and maintainers without external community input. The underlying needs signaled (preventing channel deadlocks and runtime crashes) suggest a strong desire for "set-and-forget" reliability among users.

---

### 5. Bugs & Stability
Two specific, high-severity bugs are being addressed:
- **Bug A: Gateway Channel Shutdown (High Severity)** — Reported in Issue #972, Telegram and Matrix pollers go silent after idle periods. This affects core functionality (messaging) and requires a full restart. **Fix In Progress:** PR #984 is open.
- **Bug B: Turn Path Stack Overflow (High Severity)** — Reported in Issue #976, the agent's turn execution path is underallocated memory (aliased to 2 MiB), risking crashes during complex agent sessions. **Fix In Progress:** PR #985 is open.

*Note: While both issues (#972, #976) are referenced as closed by the respective PRs, the fixes have not yet been merged.*

---

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were submitted today. However, the focus on fixing the supervision loop (PR #984) and stack allocation (PR #985) signals a roadmap priority on **operational robustness**. The next minor version will likely focus on long-running agent resilience (preventing memory/resource exhaustion) and zero-downtime gateway operations rather than new user-facing features.

---

### 7. User Feedback Summary
While there is no direct community feedback in the last 24 hours, the existence of these PRs implies specific pain points:
- **Pain Point:** Users experience "silent failures" in messaging channels, where the agent appears online but doesn't respond.
- **Pain Point:** The agent crashes or errors during complex tasks, likely due to stack overflow in the conversational context (turn) handling.
- **Satisfaction:** The speed at which the maintainer (raskevichai) identified deep structural root causes (aliasing constants and monitoring loops) suggests a proactive maintainer, which likely contributes to overall positive user sentiment despite the bugs.

---

### 8. Backlog Watch
There are **no long-unanswered issues** currently in the backlog. The only items in flux are the two new PRs from today. **Attention Required:** Maintainers should prioritize reviewing and merging **PR #984** and **PR #985**, as both address critical stability bugs that are impacting production users. Specifically, the solution in **PR #984** (aging out dead polling threads) is a structural change to the supervision logic that warrants careful code review and testing to ensure it doesn't introduce false-positive thread terminations.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-06

## 1. Today's Overview

IronClaw is in a highly active development phase, with 93 issues and PRs updated in the last 24 hours (43 issues, 50 PRs). Activity is concentrated on the v1.1.0 release candidate cycle, stability hardening, and the "Reborn" architecture initiative. The project shipped release candidate `v1.1.0-rc.1` on August 3, with a strong focus on extension reach (MCP servers, IronHub integration, Slack slash commands) and failure legibility. A significant QA bug-bash wave has produced numerous P1/P2 bug reports from a Railway test instance, indicating a rigorous pre-release testing effort. Ten issues were closed and 18 PRs were merged/closed in the last 24 hours, demonstrating healthy throughput despite the high volume of open work.

## 2. Releases

**`ironclaw-v1.1.0-rc.1` (2026-08-03)**

The first release candidate since 1.0.0. Headline features:
- **Extension reach**: Registration of arbitrary hosted MCP servers, installation from IronHub deep links
- **Durable file attachments** that cross channels
- **Slack `/ironclaw` slash commands**
- A broad pass on making failures more legible

This is a release candidate (not final), so no specific breaking changes or migration notes have been formally documented yet. Projects integrating with IronClaw should review the RC for API changes, particularly around MCP server registration and attachment handling.

## 3. Project Progress

The following PRs were merged or closed in the last 24 hours:

- **[#7261](https://github.com/nearai/ironclaw/pull/7261)** (closed, size S): Fixed zero-job failure in the tag-only release workflow introduced by #7256, resolving canary evidence directory path resolution from `$RUNNER_TEMP`.
- **[#6831](https://github.com/nearai/ironclaw/pull/6831)** (closed, size XL): Merged the standardized messaging framework — host-owned standard ops with enforced canonical contracts (16 core operations, 13 reserved operation names, canonical JSON Schemas, 12-code error taxonomy).
- **[#7196](https://github.com/nearai/ironclaw/pull/7196)** (closed): Dependency bump for the wasm group (wasmtime-wasi, wit-component, wit-parser).
- **Closed issue epics**: [Dogfooding & QA bug fixing 07/27-07/31](https://github.com/nearai/ironclaw/issues/6892), [Dogfooding & QA 07/20-07/24](https://github.com/nearai/ironclaw/issues/6394), [Close remaining Reborn WebUI e2e gaps](https://github.com/nearai/ironclaw/issues/4632), [Close Critical E2E Coverage Gaps](https://github.com/nearai/ironclaw/issues/7053), and [Add Automation Lifecycle E2E](https://github.com/nearai/ironclaw/issues/7056) were all closed, indicating completion of significant QA/testing milestones.
- **UI fix**: [#7204](https://github.com/nearai/ironclaw/issues/7204) closed — composer focus behavior fixed in WebChat v2.

## 4. Community Hot Topics

- **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036) — Configuration-as-Code for IronClaw Reborn (7 comments, 1 👍)**: The most-discussed issue, an epic requesting tenant blueprints and use-case harnesses for declarative configuration. Users want schema, diff, and audit trail for config instead of hand-edited `.env` files and settings JSON. This is a long-running epic (since April) with sustained interest.

- **[Issue #7194](https://github.com/nearai/ironclaw/issues/7194) — Admin-allowed shared channel as outbound delivery target (3 comments)**: Agents can post to Slack channels but cannot designate them as sanctioned outbound delivery targets. This is a governance + capability gap.

- **[Issue #6257](https://github.com/nearai/ironclaw/issues/6257) — PDF MIME type error (2 comments)**: Users report `Invalid value (attachments.mime_type)` when sending/generating PDFs. Reported from Slack #x-ai-product-feedback.

- **[PR #6938](https://github.com/nearai/ironclaw/pull/6938) — "The model chooses the skill, not a keyword scorer"**: Large PR (size XL) active in the skills epic, changing the core skill-activation philosophy from host-side keyword scoring to model-driven selection.

**Underlying needs**: The community is pushing for (a) declarative, auditable configuration; (b) more granular control over where agents can deliver messages; (c) reliable file handling across formats; and (d) making the agent's tool selection more intelligent.

## 5. Bugs & Stability

A substantial bug-bash wave from the Railway test instance (ironclaw-qa-testing-libsql.up.railway.app) produced several high-severity reports:

**P1 (High):**
- **[#7247](https://github.com/nearai/ironclaw/issues/7247) — Agent falsely claims GitHub is already connected**: The agent states GitHub is connected without verifying auth state; the very next GitHub request fails. Severe trust issue.
- **[#7246](https://github.com/nearai/ironclaw/issues/7246) — Agent hallucinates automation status**: Agent claims an automation is running and sending to Telegram when the Automations page shows "No automations yet." Fabricated state is a critical reliability problem.

**P2 (Medium):**
- **[#7249](https://github.com/nearai/ironclaw/issues/7249) — Slack DM execution result delivered to Telegram**: Cross-channel leakage of execution summaries with Slack-specific metadata.
- **[#7251](https://github.com/nearai/ironclaw/issues/7251) — Agent guesses MCP auth type instead of discovering/initiating auth**: Agent asks user to choose auth type and speculates rather than inspecting the endpoint.
- **[#7250](https://github.com/nearai/ironclaw/issues/7250) — DeepWiki MCP reports misleading auth guidance for network failures**: Speculates about auth/URL/unreachable rather than reporting actual network errors.
- **[#7248](https://github.com/nearai/ironclaw/issues/7248) — Invalid custom MCP endpoint accepted, then fails run**: Unverified endpoints are registered as "successfully installed," then cause run failures.

**Other notable bugs:**
- **[#6257](https://github.com/nearai/ironclaw/issues/6257) — PDF MIME type validation error** (open, no fix yet)
- **[#7254](https://github.com/nearai/ironclaw/issues/7254) — Cannot access files attached to Slack feedback threads** (new, triage workflow broken)
- **[#7209](https://github.com/nearai/ironclaw/issues/7209) — CI regression gate cannot see node:assert style**, failing correct frontend PRs (infrastructure bug)
- **[#7231](https://github.com/nearai/ironclaw/issues/7231) — Review comments saying "APPROVE" never submit real GitHub approval**, leaving PRs merge-blocked (process bug)

**Assessment**: The bug-bash findings cluster around agent hallucination/state-integrity issues and MCP connection reliability — both areas are clearly being actively worked given the volume of related PRs (e.g., outbound delivery recovery, proxy handling). No fix PRs are linked yet for the P1 hallucination bugs, which should be a priority.

## 6. Feature Requests & Roadmap Signals

Strong signals for the next version (v1.1.0+):

- **[IronHub Integration epic #6731](https://github.com/nearai/ironclaw/issues/6731) — v1.1.0**: Turning the agent's tool/skill set into an extensible marketplace with runtime install, signed and provenance-checked. This is flagged `v1.1.0` and is a major differentiator.
- **[Skills epic #6941 — v1.1.0](https://github.com/nearai/ironclaw/issues/6941)**: Self-created, self-selected skills that measurably pay off. Multiple large PRs (#6938, #6745, #7171) are actively advancing this.
- **[Configuration-as-Code epic #3036](https://github.com/nearai/ironclaw/issues/3036) — Reborn**: Tenant blueprints and use-case harnesses. High community interest, long-running, likely to land post-1.1.0.
- **[Web Debug Inspector epic #7218](https://github.com/nearai/ironclaw/issues/7218)**: New epic for operator-only debugging of prompt construction, model usage, and tool execution. Infrastructure investment for AI-agent observability.
- **[Storybook + AI-first Design System epic #7038](https://github.com/nearai/ironclaw/issues/7038)**: Proposal-backed (PR #7257), with phased PRs (#7039, #7043) already open.
- **[Admin-Managed Agents as UserId Subjects epic #6578](https://github.com/nearai/ironclaw/issues/6578)**: Tenant administrators creating non-human subjects without a second identity hierarchy.
- **[PR #7214 — Docker and Railway user sandbox profiles](https://github.com/nearai/ironclaw/pull/7214)**: Explicit per-platform sandbox profiles scoping workspaces to tenant+user in non-root workers. Security-focused hardening.

**Prediction**: The v1.1.0 release will likely include IronHub integration, the skills model-choice rework, and sandbox profile hardening. Configuration-as-Code and Web Debug Inspector are more likely targeted at v1.2.0+.

## 7. User Feedback Summary

The recent bug-bash and Slack feedback reveal several concrete user pain points:

1. **Trust in agent state reporting** (P1): Agents fabricating connection status (GitHub) and automation state is the most damaging issue — users cannot trust what the agent claims without manual verification.
2. **MCP endpoint onboarding friction** (P2): Users struggle with custom MCP endpoints — the agent guesses auth types, accepts invalid endpoints, and provides misleading diagnostics. The MCP experience is not yet polished for non-expert users.
3. **File handling gaps**: PDF generation fails with a validation error ([#6257](https://github.com/nearai/ironclaw/issues/6257)), and files attached to Slack feedback threads cannot be read ([#7254](https://github.com/nearai/ironclaw/issues/7254)) — file workflows are a known weak spot.
4. **Cross-channel delivery correctness**: Slack DMs being delivered to Telegram ([#7249](https://github.com/nearai/ironclaw/issues/7249)) breaks channel isolation expectations.
5. **Configuration complexity**: The long-running config-as-code epic shows users are frustrated with hand-editing `.env`, `.system/` docs, and settings JSON — a strong demand for declarative, auditable config.

Satisfaction signals are mixed: the project is shipping rapidly (RC out), but the QA wave is surfacing user-visible reliability issues that need to be addressed before final v1.1.0.

## 8. Backlog Watch

Issues/PRs that may need maintainer attention:

- **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036) — Configuration-as-Code epic**: Open since April with only 7 comments and no assignee visible in the data. High community interest (1 👍, most-commented issue) but seemingly slow progress.
- **[Issue #741](https://github.com/nearai/ironclaw/issues/741) — Bedrock streaming support via `converse_stream()`**: Opened March 2026, no comments since creation, and recently closed (2026-08-05) — verify it was actually implemented or intentionally punted.
- **[PR #5101](https://github.com/nearai/ironclaw/pull/5101) — Reuse cargo-component installer in live canary**: Open since June 20, medium risk, with no comments in the data. Over six weeks without visible progress suggests it may be stale.
- **[Issue #7203](https://github.com/nearai/ironclaw/issues/7203) — Expose virtual filesystem as real mount**: New but important architectural gap (skills can be read but not executed); surfaced from PR #7171 and needs a clear owner.
- **[Issue #7245](https://github.com/nearai/ironclaw/issues/7245) — Decompose `reborn_services.rs` (>6,400 lines)**: Tracking issue for an arch-violating large file, needs assignment.

---

*Data source: GitHub (nearai/ironclaw), retrieved 2026-08-06.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-06

## Today's Overview

LobsterAI is in a **healthy, high-velocity state** today. A new patch release (2026.8.5) shipped with progress on the startup credit campaign, enterprise auth isolation, and a native daily check-in feature. Merge activity is strong: **12 PRs merged/closed in 24 hours** across renderer, main process, and OpenClaw runtime areas, demonstrating active maintenance. However, **3 open issues emerged today**, two of which are potentially serious: duplicate system-prompt injection and a silent skill-toggle configuration failure. While the bug report volume is moderate, the quality and specificity of the reports (with reproduction data) are high, indicating an engaged and technically sophisticated user base.

## Releases

**LobsterAI 2026.8.5** (released 2026-08-05)

**What's Changed:**
- **feat(activity):** Added a native daily check-in experience (PR #2408)
- **feat(enterprise):** Isolated account-scoped auth and service flows (PR #2409)
- **style:** General styling updates

**Breaking Changes / Migration Notes:** None explicitly listed. The enterprise auth isolation may require re-authentication for enterprise users.

## Project Progress

Twelve PRs were merged or closed today. Key merged contributions:

- **Renderer / Activity (btc69m979y-dotcom):** Series of fixes for the startup credit campaign—replaced poster artwork (twice, #2438, #2439), polished the experience by cropping white gutters and improving claim error handling (#2433), and disabled an automatic final reward popup (#2432). This suggests an active marketing campaign with iterative UI refinement.
- **Main Process / Stability (fisherdaddy):**
  - **#2437:** Hardened window lifecycle and shutdown. Bounded shutdown of the OpenAI-compat proxy and HTML preview server with a drain timer and hard deadline, preventing keep-alive sockets from stalling app exit. Also gates main window activation on first-render to handle queued show requests gracefully.
  - **#2436:** Fixed two races that could poison the OpenClaw single-instance lock file, causing gateway respawns to fail for up to 30 seconds. This is a significant reliability fix for the OpenClaw integration.
- **Cowork / UI (liuzhq1986):**
  - **#2435:** Added a title-bar conversation search button, reusing the sidebar search workflow. This improves discoverability and accessibility of the search feature.
- **Dependency Updates:** Merged long-pending Dependabot PRs for `cross-env` (10.1.0), `react-dom` (19.2.4), and `vite` (8.0.9). Modernizing the dependency tree.

## Community Hot Topics

The most active items today are the newly reported bugs, which are generating discussion and analysis:

- **[Issue #2441: Skill toggle silent failure & OpenClaw config overwrite](https://github.com/netease-youdao/LobsterAI/issues/2441)** — This is the hottest topic. It's a detailed two-part report: a reproducible bug where skill toggles are written by directory name but matched by frontmatter name in OpenClaw, causing them to silently fail, and a design gap where `openclaw.json` is overwritten entirely, leaving no persistent user customization. The underlying need is clear: **users want persistent, fine-grained control over their system prompts without fighting the tool.**

- **[Issue #2440: Duplicate system prompt injection](https://github.com/netease-youdao/LobsterAI/issues/2440)** — A high-quality bug report with concrete data showing 78% of the injected `[LobsterAI system instructions]` block duplicates the content in `AGENTS.md`. This represents wasted tokens and potential model confusion.

- **[Issue #1200 / PR #1201: NIM superTeam group name bug](https://github.com/netease-youdao/LobsterAI/issues/1200)** — The long-standing issue about hardcoded `teamTypeNum` values causing incorrect group name resolution in NIM messages. The associated PR (#1201) remains open and is now 4 months old.

## Bugs & Stability

Three bugs were reported/updated today. Ranked by severity:

1.  **Duplicate System Prompt Injection (Issue #2440) — High:** Injects ~4,425 duplicated characters into every new session on the desktop channel. This is a correctness and cost issue, potentially degrading model performance due to conflicting or redundant instructions. **No fix PR is linked yet.**
2.  **Skill Toggle Silent Failure (Issue #2441) — High:** Misconfiguration causes user settings to be silently ignored, leading to a poor experience where users can't control their context. The secondary issue of `openclaw.json` being overwritten is a design flaw that erodes user trust. **No fix PR is linked yet.**
3.  **NIM Group Name Hardcoding (Issue #1200) — Medium:** Existing bug, still open after 4 months. It causes incorrect group names in @-mentions for NIM superTeam/group messages. **A fix PR exists (#1201) but is also stale and unmerged.**

**Stability fixes that did land today (from PRs #2436, #2437):**
- Fixed OpenClaw gateway lock poisoning from restart races, which could cause 30-second stalls.
- Fixed app shutdown hangs caused by lingering server sockets.

## Feature Requests & Roadmap Signals

- **Persistent User Configuration Control (from Issue #2441):** The request for a persistent, user-editable channel for `openclaw.json` and a robust skill-switching mechanism is a strong signal. Users want to treat LobsterAI as a customizable platform, not a black box. Given the clear bug and the detailed use case, a fix is likely to be prioritized in the next minor release.
- **Native Activity Features (from PR #2408):** The addition of a daily check-in feature suggests the team is investing in in-app engagement mechanics, possibly for gamification or user retention.
- **Conversation Search in Title Bar (from PR #2435):** The continued refinement of the cowork interface indicates a focus on making the core conversation experience more efficient.

## User Feedback Summary

- **Pain Point — System Prompt Bloat:** Users are actively analyzing the system prompts sent to the model and are concerned about duplication and bloat. This indicates they are conscious of cost and prompt quality. The report from `fujingzhai` is a prime example of a power user hitting a wall.
- **Pain Point — Configuration Friction:** The skill-switching bug represents a broken promise: the UI says a skill is on/off, but the runtime doesn't reflect it. This is more damaging than a missing feature.
- **Positive Signal:** The swift merging of the window lifecycle and lock-file fixes shows responsiveness to stability issues, which should build confidence.

## Backlog Watch

- **[PR #1201 / Issue #1200: NIM teamTypeNum fix](https://github.com/netease-youdao/LobsterAI/pull/1201)** — This one-line fix has been open for over 4 months. It's a straightforward correction with a clear explanation. Its long dormancy is concerning and suggests either a lack of maintainer bandwidth for the NIM integration or a deeper internal disagreement. This needs attention.
- **Dependency Bot PRs (#1279, #1280, #1281):** These were closed today, likely as `stale` or merged. The fact that `vite` and `react-dom` updates took this long to clear is a sign of a significant dependency update debt that was just paid down. Worth watching for follow-up regressions.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-06

## 1. Today's Overview

CoPaw (QwenPaw) is exhibiting moderate-to-high development activity with 50 PRs and 22 issues updated in the last 24 hours. The project is processing a substantive pull-request queue (28 open, 22 merged/closed) with no new releases cut today, suggesting the team is consolidating toward a 2.0.2/2.1 stable milestone. The issue tracker shows a healthy mix of user-reported bugs (11 open), UX enhancement requests (8), and feature proposals (3), with maintainers actively closing out older items. Notably, the community is highly engaged with the product's Chinese-language UX and desktop application polish, while the core team is focused on provider reliability, MCP tooling robustness, and multi-turn conversation fidelity. No critical regressions were introduced in this window, though several long-standing provider and channel issues remain triaged as open.

## 2. Releases

**No new releases were published in the last 24 hours.** The most recent tags referenced in the issue tracker are `2.0.1` and the `2.1.0b2` beta, with users reporting against the Tauri desktop build (`qwenpaw.exe --version` → `QwenPaw, version 2.0.0`). No migration or breaking-change notes are applicable for this window.

## 3. Project Progress

The following PRs were merged or closed in the reporting window, representing concrete forward progress:

- **[PR #5597] feat(backend): per-agent and global LLM model fallback with safe retry boundaries** ([link](https://github.com/agentscope-ai/QwenPaw/pull/5597)) — Merged: Backend support for automatic model fallback; retries stay within the active model, fallback only triggers on transient/permission failure after retry exhaustion.
- **[PR #5598] feat(console): add LLM fallback configuration UI** ([link](https://github.com/agentscope-ai/QwenPaw/pull/5598)) — Merged: Console UI for configuring fallback candidate lists per-agent or globally, with enable/disable, add/remove/reorder controls.
- **[PR #6670] docs(checkpoint): add checkpoint usage documentation in commands page** ([link](https://github.com/agentscope-ai/QwenPaw/pull/6670)) — Merged: Checkpoint/snapshot/restore documentation consolidated into Magic Commands page.
- **[PR #6675] fix: force relay reasoning_content for DeepSeek models (fixes #6667, #6541)** ([link](https://github.com/agentscope-ai/QwenPaw/pull/6675)) — Closed/merged: Forces `reasoning_content` on every assistant wire message for DeepSeek thinking-mode APIs, addressing multi-turn rejection after context compaction strips `ThinkingBlock`s.
- **[PR #3874] feat(model): refine retry logic** ([link](https://github.com/agentscope-ai/QwenPaw/pull/3874)) — Merged after long review: General model retry logic refinement.
- **[PR #6701] fix(website): website add blog** ([link](https://github.com/agentscope-ai/QwenPaw/pull/6701)) — Closed: Website content addition.
- **[PR #5447] fix(channel): yield failed AgentResponse on console errors to unblock UI** ([link](https://github.com/agentscope-ai/QwenPaw/pull/5447)) — Closed: Prevents console UI from hanging on model/runtime errors.
- **[PR #5462] feat(console): add global responsive utility classes** ([link](https://github.com/agentscope-ai/QwenPaw/pull/5462)) — Closed: Shared responsive utilities in `layout.css`.

## 4. Community Hot Topics

Most active discussions by recent engagement, reflecting deep user investment in agentic workflow reliability:

- **[Issue #6726] [Bug]: Long console session with heavy tool usage fails with 400 "tool must follow tool_calls"** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6726)) — 2 comments, 2 updates in 24h. Users hitting multi-turn protocol violations after 20–30+ accumulated `tool_call`/`tool_result` pairs. This is a top-priority conversation-correctness defect.
- **[Issue #6731] [Bug]: execute_shell_command crashes when model passes sandbox_config** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6731)) — 1 comment. A trivial-seeming code path (`replace()` on wrong dataclass type) causes a hard tool crash; expects quick upstream fix.
- **[Issue #6732] [Bug]: mcp工具规律性失效 (MCP tools fail periodically)** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6732)) — 2 comments. Users report MCP tool registry going stale after hours; Docker container restart is the only recovery. Signals a memory-leak or re-registration bug in the MCP bridge.
- **[PR #6514 (via #6714)] fix(providers): retry SSE errors with status codes in messages** ([link](https://github.com/agentscope-ai/QwenPaw/pull/6714)) — Open with active discussion. Fixes `[503]` embedded in SSE stream error messages not being retried; tied to [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708).
- **[PR #6525] feat: user context transparent pass-through (Chat API → Agent → Tool → MCP → SKILL CLI)** ([link](https://github.com/agentscope-ai/QwenPaw/pull/6525)) — Long-running feature PR (since 07-28) still open; identity propagation is a high-demand enterprise feature.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue/PR | Description |
|----------|----------|-------------|
| **Critical** | [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | Tool-call protocol violation (400) after heavy tool use; breaks long sessions entirely. No fix PR yet. |
| **High** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP tools silently go stale after hours; requires container restart. No fix PR yet. |
| **High** | [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | `execute_shell_command` crashes on `sandbox_config` arg; hard tool failure. No fix PR yet. |
| **Medium** | [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | 503 in SSE stream not retried → request fails. Fix PR exists: [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714) (open). |
| **Medium** | [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | 400 `invalid_request_error` when thinking-mode history contains tool calls; `reasoning_content` relay fails. Fix PR: [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) (closed/merged). |
| **Medium** | [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | Background fork subagent reports "completed" when worktree finalization fails. Fix PR: [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) (open). |
| **Low** | [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | `nohup`/`&` detached shell processes never return tool to idle. No fix yet; design limitation. |

Two stability-fix PRs remain open but are approaching merge-readiness: [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714) and [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725).

## 6. Feature Requests & Roadmap Signals

Strong signals for what lands next:

- **[#6436] Automatic Model Routing** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6436)) — Route each message to the best model (local/small for simple turns, vision model for images, large model for hard reasoning). High-value, multi-comment, plausibly next-milestone.
- **[#6724] Configurable MCP tool-call timeout** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6724)) — `MCPClientConfig` missing timeout; slow MCP servers stall turns indefinitely. Likely to be a hotfix in 2.0.2.
- **[#6728] WeChat approval prompts in Chinese** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6728)) — Localization of approval actions ("Approve"/"Deny") for Chinese users.
- **[#6730] Live artifact canvas** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6730)) — Render agent-generated HTML (dashboards, reports) in a Console side panel. Product-differentiating, plausibly on the Product/UX roadmap for 2.1+.
- **[#6525] User-context pass-through** ([link](https://github.com/agentscope-ai/QwenPaw/pull/6525)) — Open PR; enterprise-grade tenant/user identity propagation. Likely intended for 2.1.

## 7. User Feedback Summary

Real user pain points observed:

- **Desktop UX polish is being actively scrutinized.** User `rerbin` filed three UX items this week: rename "QwenPaw Desktop" → "QwenPaw" ([#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587)), add a "Copy" context menu for selected text ([#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454)), and relabel "New Chat" → "New Task" ([#6734](https://github.com/agentscope-ai/QwenPaw/issues/6734)). All closed or triaged quickly — the maintainers are responsive to this.
- **The "Full Mode" vs. "Simple Mode" split is confusing.** [#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413) argues it should just be a settings button; closed after discussion.
- **Long-running agentic sessions degrade badly.** The tool-call protocol bug ([#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726)) and oversized tool output freezing history ([#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700), closed) are the same class of problem: unbounded growth. Users want truncation and pagination.
- **MCP reliability is a top community concern.** Two distinct MCP-failure reports in under 48 hours ([#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732), [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724)) suggest the MCP bridge needs a dedicated maintainer pass.

Satisfaction signals are good: users are proactively filing detailed reproduction cases with environment specifics, and the maintainers are closing UX items within 1–2 days.

## 8. Backlog Watch

Items needing maintainer attention:

- **[Issue #6480] `nohup`/`&` detached shell never returns to idle** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6480)) — Open since 07-26 with no maintainer response. Common pattern in production agent usage; should at least be documented as a known limitation.
- **[Issue #6436] Automatic Model Routing** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6436)) — Open since 07-24, 3 comments, no label or milestone. High community value; should be scheduled or explicitly deferred.
- **[PR #6504] feat: unify project directories and harden file workspace** ([link](https://github.com/agentscope-ai/QwenPaw/pull/6504)) — Open since 07-27 with no maintainer commentary; large, structural change that needs a reviewer.
- **[PR #6525] User-context pass-through** ([link](https://github.com/agentscope-ai/QwenPaw/pull/6525)) — Third week open with no maintainer response. High-value enterprise feature; silence risks contributor churn.
- **[Issue #6717] Test patrol bot spam** ([link](https://github.com/agentscope-ai/QwenPaw/issues/6717)) — Bot-created placeholder ("test") polluting the tracker; consider suppressing patrol-bot issue creation.

---

*Digest compiled from 22 issues and 50 PRs updated in the 24h window ending 2026-08-06. Source: github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-06

## 1. Today's Overview

ZeroClaw is in a period of intense, security-focused stabilization. Activity remains at a high level with 50 issues and 50 PRs updated in the last 24 hours, though the number of new items is modest. The project is clearly preparing for a significant milestone, with a heavy concentration of RFCs and high-risk fixes targeting authentication, tool-call parsing, and channel security. A notable pipeline of community-contributed security hardening is building, with several PRs from contributors waiting for author action. No new releases were published today, indicating a focus on consolidating existing work rather than shipping.

## 2. Releases

None published in the last 24 hours.

## 3. Project Progress

Only 1 PR was merged/closed in the last 24 hours:

- **[PR #9750](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) — `fix(service): bound launcher-owned daemon logs`** (closed): This large, high-risk PR proposed replacing unbounded fixed-file daemon redirection with a shared service supervisor that keeps capture files bounded to 8 MiB. Its closure suggests the approach may have been superseded by the newer **[PR #9773](https://github.com/zeroclaw-labs/zeroclaw/pull/9773)**, which implements a more scoped solution specifically for macOS launchd with the same 8 MiB bound.

Newly opened PRs today indicating active forward progress include:

- **[PR #9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) — `fix(runtime): validate WebAuthn assertion data`**: adds critical validation, including rpIdHash binding and User Present flag checks.
- **[PR #9778](https://github.com/zeroclaw-labs/zeroclaw/pull/9778) — `docs(foundations): reconcile revision histories`**: a housekeeping item to keep governance documentation consistent.
- **[PR #9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) — `fix(channels): accept Signal source UUID senders`**: addresses identity resolution for phone-number-private users.
- **[PR #9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) — `feat(security): extend forbidden_paths with workspace-relative glob patterns`**: directly implements the long-discussed RFC from issue [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424).

## 4. Community Hot Topics

The most active discussions revolve around strategic architecture and security governance. The top issues by comment count are:

- **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — "RFC: Work Lanes, Board Automation, and Label Cleanup"** (18 comments): A long-running (since May) governance RFC focused on triage workflow. It indicates maintainers are actively trying to manage a high volume of work and standardize how issues are labeled and routed.

- **[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — "RFC: Goal mode v1 — bounded foreground Matrix work"** (18 comments): A high-priority request from a user to enable durable, multi-turn agent work toward a bounded objective. The community is engaged in scoping this feature carefully, with the author revising to avoid coupling it with other, more complex features.

- **[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — "RFC: ZeroClaw Chat Completions profile"** (16 comments): This is a strong interoperability signal. The community is asking for an OpenAI-compatible API surface (Chat Completions) to allow ZeroClaw to work with mainstream client tools like Open WebUI, LobeChat, and LangChain.

- **[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — "RFC: Add a per-execution confirmation tier for high-risk shell commands"** (16 comments): A key safety feature request. The community wants a Claude Code-style "allow/ask/deny" policy for shell execution, indicating a need for finer-grained, interactive control over high-risk agent actions.

**Analysis:** The high comment counts on these RFCs show a mature community deeply invested in the roadmap. The underlying needs are clear: improved operator workflow (Work Lanes), better task execution (Goal mode), ecosystem interoperability (Chat Completions), and enhanced safety controls (shell policy).

## 5. Bugs & Stability

Today saw a concerning cluster of new bug reports, including two S1 (workflow blocked) and several S2 (degraded) issues:

**Critical/High:**
- **[Issue #9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) — [Bug]: OpenRouter streaming requests drop provider_extra** (S1, workflow blocked): A significant config bug where custom `provider_extra` headers are silently stripped during streaming requests. This breaks users' custom setup with OpenRouter. *No fix PR is open yet.*

- **[Issue #9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) — [SOP]: cron-triggered SOPs cannot do network work** (New): Cron-triggered SOPs are documented as the way to build "watch-loops," but they lack the HTTP capability to perform any network work, and the `shell.exec`/`notify.channel` capabilities are unsatisfiable placeholders. This makes a core documented use-case unusable.

- **[Issue #9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — [SOP]: sops_dir: documented default is not honoured by the daemon** (New): The SOP system silently fails to load if the operator relies on the documented default for `sops_dir`. It fails with no error or warning, making it a "silent outage" for unattended cron jobs.

**Moderate:**
- **[Issue #9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) — [Bug]: daemon reload is not on SIGUSR1, and the degraded-security warning tells operators to send a signal that kills the daemon** (S2): Operators following the advice in a security warning could inadvertently halt their daemon. This is a documentation and implementation mismatch with severe consequences.

- **[Issue #9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) — [Task]: make the withheld-capability notice visible when log persistence is disabled**: A follow-up task to ensure security-related operator notices aren't lost when logging is configured down.

## 6. Feature Requests & Roadmap Signals

Beyond the RFCs highlighted in Hot Topics, several signals point to the roadmap:

- **[Issue #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) — Send stable session_id to OpenRouter for prompt-cache savings**: Users are requesting cost optimization. This is a straightforward, high-value addition that would likely make a minor release soon.

- **[Issue #9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) — RFC: Define the unified package/capability/config/runtime-state catalog contract**: This is a foundational step towards a richer plugin ecosystem, though it is a large architectural undertaking.

- **[PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — feat(matrix): add single-message progress drafts**: A large feature for Matrix users, showing continuous improvement for specific channel experiences.

**Rapid Success Candidate:** The workspace-relative forbidden path patterns from issue [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) appears primed to land, as PR [#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) was created today to implement it. This is a highly requested security feature by expert users.

## 7. User Feedback Summary

**Pain Points:**
- **Silent Failures**: Multiple reports ([#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779), [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780)) highlight user frustration with features that fail silently, especially for unattended automated tasks like cron jobs.
- **Security Settings Blindspots**: Users struggle with sensitive workspace-internal files (like `.env`) being accessible to the agent, driving the request for better path control ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)).
- **Inefficient LLM Usage**: Users are feeling the cost of repeated system prompts and tool schemas with certain providers, as seen in the OpenRouter caching request ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)).
- **Inconsistent Config CLI**: A bug where `config set` rejects cron keys with hyphens, while `config get`/`list` accept them, creates confusion for users in CLI workflows. ([#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652)). This has been closed, indicating a fix or label change.

**Satisfaction/Use Cases:**
- The community is heavily invested in using ZeroClaw as a robust automation platform, demonstrated by the demand for "Goal mode" ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) and richer "work lanes" ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)).
- The push for OpenAI-compatibility ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) suggests users want to integrate ZeroClaw with existing, popular AI front-ends and development tools like Continue.dev and Aider.

## 8. Backlog Watch

Several issues are showing signs of stagnation and require maintainer attention to keep the project healthy:

- **Blocked PRs (Needs Author Action)**: A significant number of high-risk PRs are blocked awaiting response from their authors, including **[PR #9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723)** (DeepSeek parser), **[PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)** (SSRF gate for file_download), and **[PR #9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)** (Bluesky/Reddit authorization). These represent a large amount of community contribution that needs to be either merged or sent back for revision to unblock the pipeline.

- **[Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — RFC: Workspace-relative forbidden path patterns**: While a PR has now been opened, this issue had been sitting for over a month in `needs-author-action`, suggesting a bottleneck in the review cycle.

- **[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — RFC: Computer-use support for desktop**: This feature request has bounced back to `needs-author-action` for over two months. It's a complex, high-effort feature, but maintainers should formally decide on its future (defer, reject, or find a new champion) to provide clarity to the community.

- **[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP/tool-schema cloning drives unbounded RSS growth**: This is an S1-level memory leak that has been accepted as a bug and marked in-progress since early July. The longevity of this severe bug should be addressed with a status update or escalated priority.

The steady state of 49 open high-risk PRs alongside a constant stream of new bugs suggests the team is managing a high-complexity project at its limits, and a focus on merging/triage will be critical for long-term health.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*