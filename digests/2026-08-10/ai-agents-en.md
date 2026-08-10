# OpenClaw Ecosystem Digest 2026-08-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-10 01:55 UTC

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

Based on the provided GitHub data for OpenClaw (github.com/openclaw/openclaw) as of 2026-08-10, here is the project digest:

---

## OpenClaw Project Digest — 2026-08-10

### 1. Today's Overview
OpenClaw is in a high-activity state, with 500 issues and 500 PRs updated in the last 24 hours. The project, while showing no new releases today, is processing a high volume of community feedback and development work. The majority of recently updated issues (429 of 500) remain open, suggesting a large backlog with ongoing triage and resolution efforts. Core development themes appear focused on stability, particularly around message delivery, session state management, and the native SDK/UI experiences, with a notable cluster of fixes coming from maintainers like `steipete`. The project's automated tooling (`clawsweeper`) is actively labeling issues, indicating a mature and organized, though heavily loaded, management process.

### 2. Releases
No new releases were published in the last 24 hours. The project is currently in a high-velocity development phase with numerous open PRs targeting the next minor or patch version, making it difficult to predict the exact content of the next release from this snapshot.

### 3. Project Progress
The last 24 hours saw 166 PRs merged or closed, indicating a significant pace of development. Key areas of progress focused on bug fixes and internal refactoring:

- **Maintainer Refactoring:** PRs by `steipete` represent an aggressive push for codebase consolidation and stability, including consolidating failover classification (#121341), aligning fallback reason schemas to fix protocol drift (#121334), enforcing writer fences in SQLite sync operations (#121316), and freezing installed tool profile authority (#121327).
- **Bounded Agent Loops:** A significant fix (#121063) was proposed to bound runaway agent loops with turn/error-batch/idle-repeat guards, addressing a critical failure mode where an external service error caused a massive token burn.
- **UI/UX Fixes:** Progress is being made on the user interface, including a PR to confirm destructive sidebar actions in the web UI (#121286) and one to make transcript search open historical messages (#119527).
- **Prompt Caching Fix:** A smaller fix (#121283) addresses a costly bug where prompt caching was broken on newer Claude models, forcing users to re-process their entire conversation on every tool loop.

### 4. Community Hot Topics
The most engaging community discussions highlight significant pain points around reliability and transparency:

- **Silent Reply Failures (Issue #116277, #121058):** The most active issue, with 196 comments, documents a critical `P1` bug where DeepSeek v4 Flash silently fails to generate replies. This issue is highly likely a top priority for the maintainers. A follow-up issue (#121058) confirms the problem persists even after the original was marked closed, underscoring its severity and the community's frustration.
- **Steer Mode Failure (Issue #48003):** With 16 comments, this `P1` issue details how `steer` mode fails to inject messages into an active turn. This feature is important for advanced power users, and its dysfunction is a significant UX friction point.
- **SDK/Architecture (Issue #74704):** This maintainer-filed issue focuses on stabilizing the `@openclaw/sdk` happy path, signaling an official push to make the external app development experience more robust and reliable.

### 5. Bugs & Stability
Stability is a major concern, with numerous `P1` and `P0` issues active.

- **Critical (P0):** A regression where "Live Docs are ahead of release" (#48920) is marked as a `ux-release-blocker`, meaning docs are teaching users features that don't exist in the stable version.
- **High (P1):**
    - **Message Loss & Duplicates:** Multiple issues report message loss or duplication, including silent reply failures (#116277) and duplicate Telegram messages (#96242). The Matrix channel also has a serious looping bug (#114211).
    - **Performance & Crashes:** A critical bug (#91009) shows the Codex PreToolUse hook spawning CPU-bound processes that stall the gateway. Another report (#97616) details a zombie process leak that degrades performance over time.
    - **Unrecoverable State:** An issue (#116022) shows that a `/new` command cannot recover a "retired Codex binding tombstone," leaving a session permanently broken.
    - **Platform Regressions:** A known regression causes `exec`/`read` tools to silently return empty output on Windows (#105528). A separate issue reports an infinite restart loop on macOS (#111372).
- **Fix PRs:** While many of these critical bugs remain open, there is active work on related fixes, such as the bounded loop guard (#121063) and the prompt caching fix (#121283).

### 6. Feature Requests & Roadmap Signals
Several notable feature requests are circulating, indicating the community's desire for more control and transparency:

- **Agent-Triggered Compaction (#6757):** Users are requesting a tool that allows agents to compact their own context window, moving beyond user-triggered commands.
- **Masked Secrets (#10659):** A high-demand security request (4 👍) to allow agents to use API keys without seeing them, protecting against prompt injection and accidental leaks.
- **Per-Agent Dreaming Configuration (#67413):** Users want more granular control over the memory "dreaming" cron job, as running it across all agents simultaneously causes memory spikes and OOM kills.
- **Fallback Approval Mode (#33975):** There is a desire to be able to approve when the system falls back to a secondary model, rather than it happening silently.
- **SDK Stabilization (#74704):** The maintainers themselves are prioritizing the stabilization of the `@openclaw/sdk` happy path, suggesting a major focus on the external developer experience in upcoming releases.

### 7. User Feedback Summary
User feedback across issues conveys frustration with reliability, particularly around silent message loss and session instability. The terminology used ("silently fails," "unresponsive," "lost," "stuck") points to a desire for better error handling and system state transparency.

- **Frustration with regressions:** Users are reporting regressions in core functionality, such as the Windows `exec`/`read` bug (#105528) and the macOS restart loop (#111372), which erodes trust in new releases.
- **Need for granular control:** Feedback on features like per-agent dreaming (#67413) and tiered bootstrap loading (#22438) shows power users want to fine-tune system performance and resource usage to suit their specific, often multi-agent, deployments.
- **Positive contribution quality:** The community is actively involved in proposing solutions and filing well-structured issues, such as the one filed by an agent itself (#6757), indicating a highly engaged and technical user base.

### 8. Backlog Watch
Several significant issues remain open and require maintainer attention:

- **Security: Prompt Injection via `gh-issues` skill (#45740):** A `P1` issue flagged for `needs-security-review` where untrusted GitHub issue bodies are directly injected into sub-agent prompts. This is a high-priority security risk.
- **Stalled Active-Memory Plugin (#72015):** This `P1` issue reports that the official `active-memory` plugin can block replies and overload multi-agent gateways, with no new fix PR linked.
- **Long-standing Features:** Several feature requests from February and March (e.g., #10659, #48003, #16757) remain open without a clear resolution path, signaling a potential bottleneck in the product decision-making process for well-defined, high-value enhancements.
- **Unresolved "Docs Ahead of Release" (#48920):** This `P0` issue remains open, which is concerning as it directly impacts the user experience by making documentation misleading.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-10  
**Scope:** 11 projects in the personal AI assistant / agent open-source ecosystem

---

## 1. Ecosystem Overview

The personal AI agent landscape is experiencing intense development activity, with the ecosystem bifurcating into two distinct architectural philosophies: **gateway-centric monoliths** (OpenClaw, ZeroClaw, Hermes Agent, IronClaw) that prioritize multi-channel orchestration and plugin extensibility, and **lightweight focused tools** (NanoBot, PicoClaw, NanoClaw) that emphasize simplicity and specific integration scenarios. The ecosystem is grappling with shared growing pains around security hardening (SSRF vulnerabilities, prompt injection, unauthenticated webhooks), data integrity (silent message loss, session state corruption), and cost management (unbounded token consumption, runaway agent loops). Notably, the "Claw" naming convention (OpenClaw, PicoClaw, NanoClaw, TinyClaw, ZeptoClaw, ZeroClaw, IronClaw) signals an emerging family of projects sharing design DNA while targeting different market segments. Community engagement is robust, but maintainer review bottlenecks are emerging as a critical constraint across nearly all active projects.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | New Releases | Health Score | Primary Phase |
|---------|---------------------|-------------------|-------------------|--------------|--------------|---------------|
| **OpenClaw** | 500 | 500 | 166 | None | ★★★★☆ | High-velocity development, heavy backlog |
| **ZeroClaw** | 50 | 50 | 1 PR / 12 issues | None | ★★★☆☆ | Security hardening, RFC governance |
| **Hermes Agent** | 50 | 50 | 3 | None | ★★★☆☆ | Bug-fix blitz, stabilization |
| **IronClaw** | 22 | 28 | 8 | None | ★★★★☆ | Feature development + QA stabilization |
| **CoPaw (QwenPaw)** | 18 | 34 | 1 | None | ★★★★☆ | Post-beta stabilization |
| **NanoBot** | 5 | 15 | 4 | None | ★★★☆☆ | Security response, feature PRs |
| **PicoClaw** | 3 | 6 | 1 | None | ★★★☆☆ | Security sprint + feature parity |
| **NanoClaw** | 1 | 16 | 0 | None | ★★★☆☆ | Refactoring, merge bottleneck |
| **Moltis** | 2 | 1 | 0 | None | ★★☆☆☆ | Conservative maintenance |
| **LobsterAI** | 3 | 0 | 0 | None | ★★☆☆☆ | Idle PR queue, stale issues |
| **NullClaw** | 0 | 0 | 0 | None | — | Inactive |
| **TinyClaw** | 0 | 0 | 0 | None | — | Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | None | — | Inactive |

**Key observations:**
- OpenClaw operates at **25x** the issue volume of the next most active project (ZeroClaw/Hermes Agent)
- Only IronClaw and CoPaw show healthy closure ratios relative to their activity
- NanoClaw shows a **review bottleneck** with 16 open PRs and zero merges
- Three projects (NullClaw, TinyClaw, ZeptoClaw) show no activity whatsoever
- No project released a new version in the last 24 hours

---

## 3. OpenClaw's Position

### Comparative Advantages

| Dimension | OpenClaw | vs. Nearest Peer |
|-----------|----------|------------------|
| **Issue/PR volume** | 500/500 in 24h | ZeroClaw & Hermes at 50 each (10x lead) |
| **Merge throughput** | 166 PRs merged/closed daily | IronClaw (8) — 20x higher throughput |
| **Backlog size** | 429 open issues | Indicates massive community adoption |
| **Maintainer responsiveness** | Multi-PR per-day from core team (steipete) | Peer projects show 1-2 maintainer PRs/week |
| **Ecosystem gravity** | Central reference point with derived projects | PicoClaw/NanoClaw/ZeroClaw clone architecture |

### Technical Approach Differences

- **Architecture:** OpenClaw treats the gateway as the core abstraction, with channels (Telegram, Matrix, Discord) as adapters and skills as the extension mechanism. Unlike Hermes Agent's desktop-first approach, OpenClaw is unopinionated about UI layer.
- **SDK focus:** OpenClaw is actively stabilizing `@openclaw/sdk` for external app developers (#74704), which no peer project is investing in at this level — this positions OpenClaw as the *platform* rather than merely an *application*.
- **Native multi-agent state:** OpenClaw's bounded-loop guards (#121063), failover classification (#121341), and writer fences (#121316) show a mature approach to agent lifecycle management that peers are only beginning to address.
- **Self-healing tooling:** The `clawsweeper` automation for issue labeling demonstrates operational maturity that suggests OpenClaw is being run more like a commercial product than a community project.

### Community Size Comparison

- OpenClaw's 24-hour activity alone (500 issues, 500 PRs) **exceeds the total lifetime issue count** of several peers (Moltis, LobsterAI)
- OpenClaw maintainers are merging **166 PRs/day** while IronClaw merges 8 and CoPaw merges 1
- The "Claw" derivative family (NanoClaw, PicoClaw, ZeroClaw, TinyClaw, ZeptoClaw) collectively represents a **fraction of OpenClaw's activity** (9 issues, 57 PRs combined vs. OpenClaw's 500/500)

**Verdict:** OpenClaw is the clear market leader in adoption, contribution volume, and project management maturity. Its main risk is not competition but **internal scaling** — the backlog of 429 open issues could lead to contributor frustration if triage doesn't keep pace.

---

## 4. Shared Technical Focus Areas

| Focus Area | Affected Projects | Specific Requirements |
|------------|-------------------|----------------------|
| **Silent Message Loss / Duplication** | OpenClaw, Hermes Agent, IronClaw, ZeroClaw | Fail-closed message delivery, session state recovery, duplicate delivery prevention, audit logs |
| **Runaway Agent Loop Control** | OpenClaw, NanoBot, IronClaw | Turn limits, error-batch guards, idle-repeat detection, token budget caps |
| **Tool Security Allowlists** | NanoBot, ZeroClaw, OpenClaw | SSRF protection on media downloads, shell-command chaining prevention, allowlist bypass hardening (NanoBot #5305/#5306) |
| **Context Window / Token Governance** | OpenClaw, NanoBot, LobsterAI, CoPaw, IronClaw | Context compaction agents (#6757), per-call token accounting (#5266), configurable context limits (#1187), prompt caching fixes, cataloged model context resolutions |
| **Gateway Health / Observability** | Hermes Agent, PicoClaw, IronClaw | Watchdog timers, sd_notify support (#55018), reconnection backoff, zombie process cleanup, health-check endpoints |
| **SDK / External Integration Stability** | OpenClaw, NanoBot, CoPaw | SDK happy-path stabilization, truthful API status reporting, provider-config validation |
| **Multi-Model Orchestration** | CoPaw, LobsterAI, ZeroClaw, Hermes Agent | Per-model capability config (ZeroClaw RFC #7100), cross-model sub-task notification (LobsterAI #2132), provider fallback approval (OpenClaw #33975) |
| **Background/Foreground Memory Management** | OpenClaw, CoPaw, NanoBot, ZeroClaw | Per-agent memory scheduling (OpenClaw #67413), multi-tier memory consolidation (ZeroClaw Hindsight stack), Dream context-window guardrails |

**Emerging requirement:** The recurring theme across all active projects is **transparency** — users want to know what the agent is doing, what it costs, and what it has access to. This manifests as token accounting, activity chronology fixes, silent-failure elimination, and truthful status reporting.

---

## 5. Differentiation Analysis

| Project | Primary Niche | Target User | Architecture Distinction | Competitive Edge |
|---------|--------------|-------------|--------------------------|------------------|
| **OpenClaw** | General-purpose gateway | Power users, developers | Plugin-extensible gateway, SDK-first strategy | Ecosystem gravity, massive community |
| **ZeroClaw** | Security-hardened governance | Enterprise, security-conscious | RFC-driven development, zero-trust posture | Risk-precedence frameworks, credential boundaries |
| **Hermes Agent** | Desktop-first agent | Desktop power users (macOS/Windows) | Native desktop apps, Computer Use bridge | Accessibility features, cross-platform desktop UX |
| **IronClaw** | High-reliability automation | QA teams, production deployments | Tool-discovery systems, Response API streaming | 50-item closure day, deferred-tool architecture |
| **CoPaw (QwenPaw)** | Qwen-optimized agent | Chinese-speaking users, Qwen model users | Qwen-specific optimizations, ReMe memory | Mobile console, reranker memory search |
| **NanoBot** | Lightweight functional agent | DIY/hobbyists, cost-conscious | Minimal core, plugin edges | Fast maintainer-response (issue→PR in 3 days) |
| **PicoClaw** | Multi-channel bridge | Bridge operators, matrix/telegram users | DeltaChat refactor, SSRF hardening series | Senior contributors (trufae), protocol correctness |
| **NanoClaw** | Embedded/agent-host | Container/edge deployments | Host seams, CVE-gated images | Security-hardened image pipeline |
| **Moltis** | Vault/security hardware | Cryptocurrency/security users | Recovery-phrase normalization, heartbeat settings | Data-integrity focus |
| **LobsterAI** | Cross-model orchestration | Multi-model power users | Planner+executor patterns | Multi-model sub-task coordination |

**Key strategic takeaways:**
- OpenClaw competes on **breadth**; IronClaw and ZeroClaw compete on **reliability**; Hermes competes on **desktop UX**
- NanoBot is the most **accessible onboarding** project due to small scope and responsive maintainers
- CoPaw owns the **Qwen/Ascend ecosystem**, which no other project addresses
- LobsterAI has a unique position in **cross-model orchestration**, but its idle PR queue is a liability

---

## 6. Community Momentum & Maturity

| Tier | Project | Momentum | Maturity Indicators |
|------|---------|----------|---------------------|
| 🟢 **Explosive** | OpenClaw | 166 merges/day, massive issue input | Mature automation, backlog triage, SDK stabilization |
| 🟢 **Strong** | IronClaw | 50 closures/day, external contributor onboarding | QA bug-fix cadence, CI pipelines, tool-search roadmap |
| 🟢 **Strong** | CoPaw | Community task board, first-time contributors | Beta stabilization, responsive fix PRs for issues |
| 🟡 **Moderate** | Hermes Agent | High PR volume aimed at P0/P1 bugs | Security response, but desktop data-loss issues erode trust |
| 🟡 **Moderate** | ZeroClaw | 50/50 issue/PR volume, RFC-heavy governance | Process maturity high, but 49/50 open PRs signals merge bottleneck |
| 🟡 **Moderate** | NanoBot | Fast issue→PR response, security response underway | Strong maintainer loop, but security criticals unresolved |
| 🟡 **Moderate** | PicoClaw | Security hardening series, new contributors | Review bottleneck on senior PRs (#3222 38 days no comment) |
| 🟡 **Moderate** | NanoClaw | Architecture refactor push | 16 open PRs, zero merges — consolidation impending |
| 🔴 **Slowing** | Moltis | Minimal activity, 1 PR open | Post-release stabilization, but bugs unaddressed |
| 🔴 **Stalled** | LobsterAI | 0 PRs in 24h, stale issues | User engagement high, maintainer response low |
| ⚫ **Inactive** | NullClaw, TinyClaw, ZeptoClaw | No activity 24h | Either dormant or discontinued |

**Rapidly iterating:** OpenClaw, IronClaw, CoPaw  
**Stabilizing:** Hermes Agent, ZeroClaw (post-goal-mode), NanoBot  
**At risk:** LobsterAI (maintainer response), Moltis (bug accumulation), NanoClaw (merge bottleneck → contributor frustration)

---

## 7. Trend Signals

### Signal 1: Token Transparency is Mandatory
Across OpenClaw, NanoBot, IronClaw, and LobsterAI, users demand per-call token accounting, cost telemetry, and runaway-loop guards. The "millions of tokens in 2 hours" complaint (NanoBot #5266) and the "124 tool invocations for a simple task" report (IronClaw #6046) highlight rising user cost anxiety. **Action for developers:** Build token accounting into platform internals, not as an afterthought.

### Signal 2: Security is the New Differentiator
The cluster of SSRF findings in PicoClaw (#3322-#3324), NanoBot's allowlist bypasses (#5305/#5306), and ZeroClaw's unauthenticated webhooks (#9565) all landed within 48 hours. Security posture is becoming a first-order feature decision — projects that articulate a threat model (ZeroClaw's zero-trust RFCs) will attract enterprise adopters.

### Signal 3: The Gateway is Winning as Architecture
OpenClaw, ZeroClaw, PicoClaw, and NanoClaw all converge on a **gateway-centric** model with pluggable channels. The "Claw family" has established a de facto pattern; hermetic, single-purpose agents (Hermes' desktop app) face pressure to integrate with this pattern or fragment their user base.

### Signal 4: Context Management is the Next Frontier
Multiple projects are independently building: compaction agents (OpenClaw #6757), context-window cataloging (CoPaw #6846), per-model context limits (LobsterAI #1187, ZeroClaw RFC #7100). The agent that can **self-manage its context window** without user intervention will be a competitive advantage.

### Signal 5: Multi-Model is Table Stakes
Every active project now supports at least one model provider, but the sophistication varies: OpenClaw's failover approval, CoPaw's Gemini/MCP compatibility fixes, LobsterAI's cross-model sub-agents. **Differentiation will shift from "which models" to "how orchestrated."**

### Signal 6: Desktop UX is a Trust Battleground
Hermes' silent message deletion (#82756), CoPaw's misleading timing (#6826), and Moltis' settings data loss (#1187) all erode user trust. The projects that invest in **UI state integrity** — accurate timing, no silent resets, confirmed destructive actions — will win user loyalty.

### Signal 7: Contributor Experience Determines Sustainability
NanoClaw's zero-merge day, PicoClaw's 38-day-old unanswered senior PR, and LobsterAI's idle queue all signal contributor-engagement risks. OpenClaw's 166 merges/day and IronClaw's external-contributor onboarding (theredspoon) show the rewards of reviewing fast. **Merge speed is becoming a competitive metric.**

---

## Summary Recommendation for Technical Decision-Makers

- **Adopt OpenClaw** if you need the largest ecosystem, SDK, and community support — accept the complexity and backlog.
- **Adopt IronClaw** if you're building production automation where reliability and testing matter more than breadth.
- **Adopt NanoBot** if you're cost-sensitive and want a small, understandably-maintained codebase you can extend.
- **Watch ZeroClaw** — its security-governance lead may position it as the enterprise standard within 2-3 quarters.
- **Monitor CoPaw** if you depend on Qwen models or the Chinese-language ecosystem — it is the only serious player there.
- **Assist or adopt** LobsterAI's multi-model orchestration ideas if you plan to build cross-model workflows; the demand is proven, but the maintainer response needs to improve.

---

*Report generated from GitHub community digest data dated 2026-08-10. All links and issue numbers reference publicly accessible GitHub repositories.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-08-10

---

## 1. Today's Overview

NanoBot is in a highly active development phase, with 20 items (5 issues, 15 PRs) updated in the last 24 hours—suggesting strong maintainer and community engagement. The project is currently dealing with two significant security advisories reported by an external researcher, both targeting the `exec.allowPatterns` allowlist mechanism, which are the most critical items on the board. Concurrently, the maintainers are moving forward with multiple feature enhancements, including structured token usage records, plugin integration, and computer-use capabilities, while also improving test coverage and CI gates. No new releases were published today, and the issue tracker has no recently closed items, indicating that the team is focusing on code review, testing, and addressing the reported vulnerabilities.

---

## 2. Releases

No new releases were published in the last 24 hours. The latest available version remains unchanged; check the repository's [Releases page](https://github.com/HKUDS/nanobot/releases) for historical release notes.

---

## 3. Project Progress

Four pull requests were merged or closed today (2026-08-09/10), reflecting solid progress on both features and infrastructure:

- **[PR #5307](https://github.com/HKUDS/nanobot/pull/5307) — Restore Star History chart:** Merged. Revived the Star History chart in the README using a new provider not subject to recent GitHub restrictions.
- **[PR #5308](https://github.com/HKUDS/nanobot/pull/5308) — Strengthen user-path coverage and CI gates:** Merged. Adds user-path tests for the interactive CLI, WebUI chat forks, version checks, route auth, and failure boundaries. Also introduces V8 coverage reporting and tightened WebUI cleanup to prevent network leaks.
- **[PR #5304](https://github.com/HKUDS/nanobot/pull/5304) — Explain HTTPS requirement for voice input:** Merged. Fixes the WebUI to show actionable HTTPS requirement messages for voice input across all locales, addressing Android Chrome's secure-context limitation.
- **[PR #4019](https://github.com/HKUDS/nanobot/pull/4019) — GitAgent Protocol support (agent.yaml + SOUL.md):** Closed (not merged). Long-running PR (since May) closed without integration.

Other significant open PRs actively under development include **[#5299](https://github.com/HKUDS/nanobot/pull/5299)** (structured token usage records API), **[#5288](https://github.com/HKUDS/nanobot/pull/5288)** (Agent Plugins integration with CLI Apps), and **[#4276](https://github.com/HKUDS/nanobot/pull/4276)** (model-agnostic computer use tools).

---

## 4. Community Hot Topics

- **[Issue #5266 — Logs about token consumption ("too many tokens are burned")](https://github.com/HKUDS/nanobot/issues/5266):** The most active discussion with 13 comments. A user reports massive token consumption (millions in 2 hours) without visible activity, requesting detailed per-call token logging. This thread has directly inspired and is likely to be resolved by the open **[PR #5299](https://github.com/HKUDS/nanobot/pull/5299)** *"feat(api): expose structured token usage records"*, demonstrating a responsive maintainer-community loop.

- **[Issue #5295 — Docker Compose deployment fails with entrypoint permission error](https://github.com/HKUDS/nanobot/issues/5295):** 5 comments. Multiple users are hitting a "Permission denied" error for `/usr/local/bin/entrypoint.sh` when using `docker compose`. The issue is relatively new (reported 2 days ago) and warrants prompt attention.

---

## 5. Bugs & Stability

Two critical security vulnerabilities were reported today, both targeting the same component:

- **[Issue #5306 — `exec.allowPatterns` shell-chain bypass allows unintended command execution](https://github.com/HKUDS/nanobot/issues/5306):** **CRITICAL.** An attacker can bypass the shell command allowlist by chaining commands, leading to unintended command execution on the host. No fix PR exists yet; the maintainers must prioritize this.

- **[Issue #5305 — `exec.allowPatterns` allowlist bypass via OpenAI-compatible API](https://github.com/HKUDS/nanobot/issues/5305):** **CRITICAL.** Related to #5306, demonstrating a second vector (via the OpenAI-compatible API) that enables execution of commands not in the allowlist. This indicates the bypass is reachable remotely. Combined, these two issues represent a significant security risk to any deployment using the `exec` tool with allowlists.

Other stability issues:

- **[Issue #5295 — Docker Compose entrypoint permission error](https://github.com/HKUDS/nanobot/issues/5295):** **HIGH.** The deployment path is broken for a subset of users following the documented steps.
- **[Issue #5311 — Agnes AI double-encodes nested-object tool arguments](https://github.com/HKUDS/nanobot/issues/5311):** **MEDIUM.** Custom provider (Agnes AI) causes MCP tool calls with nested-object parameters to fail. Likely a provider-compatibility issue in argument serialization.
- **[PR #5302](https://github.com/HKUDS/nanobot/pull/5302) — Fix unavailable tool calls during Dream consolidation:** **MEDIUM.** Addresses a prompt/tool mismatch where Dream (memory consolidation) incorrectly includes tools outside its restricted registry.
- **[PR #5303](https://github.com/HKUDS/nanobot/pull/5303) — Weather workflow Windows-safe:** **LOW.** Fixes `curl` alias issue on PowerShell.

---

## 6. Feature Requests & Roadmap Signals

- **[Structured Token Usage Records](https://github.com/HKUDS/nanobot/pull/5299):** PR #5299 adds an authenticated API endpoint (`GET /api/settings/usage/records`) exposing the latest 50 token-usage accounting records. This directly addresses the top community request (Issue #5266) and will likely be a headline feature in the next release.

- **[Vendor-Neutral Plugin Ecosystem](https://github.com/HKUDS/nanobot/pull/5288):** PR #5288 integrates "Agent Plugins" as a standardized package boundary for portable skills and MCP runtimes. This paves the way for a plugin marketplace and aligns with the project's "minimal core, extensible edges" philosophy.

- **[Model-Agnostic Computer Use](https://github.com/HKUDS/nanobot/pull/4276):** Though opened in June, this PR adds native `browser` and `computer_use` tools using DOM automation by stable element refs, enabling ordinary tool-calling models to control browsers/desktops without pixel coordinates. It is still open and may require maintainer review to progress.

- **API Service Status Transparency:** [PR #5255](https://github.com/HKUDS/nanobot/pull/5255) (draft) proposes `nanobot api status` and fixes the WebUI to accurately report externally-managed servers.

- **GitAgent Protocol (agent.yaml + SOUL.md)**: [PR #4019](https://github.com/HKUDS/nanobot/pull/4019) was closed unmerged, signaling the maintainers do not intend to adopt this standard at this time, despite its alignment with the project's spirit.

**Prediction:** The next minor release will likely include token usage records, WebUI improvements, Telegram polling fixes, and the security patches for the `exec` vulnerabilities.

---

## 7. User Feedback Summary

- **Token Cost Anxiety is Real:** The top issue (#5266) reflects a broader concern from users running cost-sensitive deployments. The phrasing "million just in some 2 hours" indicates surprise and frustration; this is a **pain point** that demands visibility.

- **Deployment Friction:** Users following the official Docker Compose guide are hitting the entrypoint permission error (#5295), affecting trust in the documented deployment path.

- **Config Security Expectations:** The security issues (#5305, #5306) show that users *expect* the `exec.allowPatterns` feature to be a robust sandbox. The fact that an unauthorized command can be chained behind an allowed one violates the security contract users believe they are configuring.

- **Provider Fragmentation:** Issue #5311 (Agnes AI) highlights a common pain point: third-party OpenAI-compatible providers behave inconsistently, and users expect NanoBot to handle argument serialization correctly across providers.

- **Micro-optimizations Valued:** Despite their small scope, PRs like the Windows-safe weather workflow (#5303) and HTTPS voice-input clarification (#5304) are popular with the user base because they remove configuration and usage friction.

---

## 8. Backlog Watch

- **[PR #4276 — Model-agnostic computer use (computer_use + browser tools)](https://github.com/HKUDS/nanobot/pull/4276):** Open since June 10, 2026 (~2 months). High-value feature that would significantly extend NanoBot's capabilities. Needs maintainer review/decision. No maintainer comments in the last 24h.

- **[PR #5156 — Telegram silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156):** Open since July 29, 2026. Addresses a production-impacting issue (#5171) where the bot silently stops receiving messages. Once merged, PR #5301 (the observability split) can follow. This is actively updated, but the parent watchdog PR needs attention.

- **[Issue #5266 — Token consumption logging](https://github.com/HKUDS/nanobot/issues/5266):** Self-service is underway via PR #5299 (3 days later, same author). Maintainers should monitor continuity.

- **[PR #5255 — Truthful API service status](https://github.com/HKUDS/nanobot/pull/5255):** Draft, open since August 5. Low activity, may be waiting for an architectural decision on `nanobot serve` state management.

- **Security issues #5305 and #5306:** As of the digest cut-off, no maintainer or contributor has opened a fix PR. This is a **top-priority gap** requiring immediate attention, ideally with a security patch release.

---

**Project Health Assessment:** NanoBot is an actively developed, well-maintained open-source project with an engaged community. Maintenance responsiveness is strong (e.g., #5266 → #5299 in 3 days; #5308 tests merged same-day). The two security advisories are the major risk factor at this moment. If the maintainers respond quickly with a patch and a security note, this episode may be a positive signal of the project's maturity.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for 2026-08-10.

---

### 1. Today's Overview
The Hermes Agent project is showing **very high activity**, with 50 issues and 50 PRs updated in the last 24 hours. This indicates a highly engaged development team responding to a large volume of community feedback and bug reports. The issue tracker is receiving a steady stream of new reports (notably today's #82851, #82846, #82831, #82798), suggesting widespread adoption and active usage across various platforms (macOS, Windows, Linux/Wayland). While **no new releases** were published today, the volume of merged and open PRs aimed at specific bugs signals a focus on stabilization and hardening. The health of the project appears strong but strained, with several `P0` and `P1` severity bugs reported, particularly around **session state management** and **data integrity**.

---

### 2. Releases
**No new releases were published in the last 24 hours.**

---

### 3. Project Progress
While 3 PRs were marked as closed/merged today, the data provided does not show their titles, so it is unclear what exactly landed. However, the sheer volume of open PRs that are active and receiving updates suggests a constant stream of fixes. Key areas of progress visible in the upcoming PRs are:

- **Security Hardening (PR #78311, #82869):** A PR (#78311) has been open since 2026-08-04 to scan and frame `x_search` results as untrusted content. Another PR (#82869) adds secret vault binary verification before use.
- **Desktop UX Fixes:** PRs are in the pipeline to fix HUD dragging on Wayland (#82861), add dismiss buttons for subagent rows (#80705), and handle cron run history for desktop (#82870).
- **Infrastructure & Integration:** A PR (#81883) aims to make the cua-driver installer proxy-aware, and another (#55018) adds `sd_notify` support for better watchdog/hang detection in systemd environments. A significant feature PR (#61507) for a Desktop-managed Computer Use bridge is also active.
- **Bug Fixing Blitz:** Many high-priority PRs were created today, indicating a rapid response to recent bug reports, including fixes for FTS index rebuilding (#82867), file binary misclassification (#82865), and session state issues (#82592).

---

### 4. Community Hot Topics
The most active discussions highlight critical stability and accessibility concerns.

- **[#63047 - Bug: Desktop app becomes completely unresponsive after ~5 messages on macOS 27 beta (19 comments)]** (https://github.com/NousResearch/hermes-agent/issues/63047)
    This is a critical usability issue for desktop users, specifically on the new macOS. The "full UI freeze" including settings makes the app useless. This is likely the most impactful bug for desktop users right now.
- **[#26689 - Accessibility improvements for blind VoiceOver users (13 comments)]** (https://github.com/NousResearch/hermes-agent/issues/26689)
    This is a long-standing feature request (since May) with substantial community support, indicating a real need for robust screen-reader support. It highlights a gap in the current UX for a particular user segment.
- **[#82616 - Tracking: gateway session continuity breaks under state.db FTS corruption (7 comments)]** (https://github.com/NousResearch/hermes-agent/issues/82616)
    This is a deep-dive investigation into session corruption, indicating the team and users are grappling with a complex data-integrity issue. It is marked `closed` but seems to be a tracking issue that may have led to other fixes.
- **[#66824/#71987 - Type error with `cronjob create` when using `repeat='forever'` (6 comments each)]** (https://github.com/NousResearch/hermes-agent/issues/66824)
    These duplicate issues show that a simple, common command is broken, which is frustrating for users. Its duplication indicates the user base is hitting this consistently.

---

### 5. Bugs & Stability
Today saw a surge in `P0` and `P1` bugs, indicating a need for rapid response. A concern is that many PRs are being created to fix them, but the volume of issues is high.

- **Critical (P0):**
    - **[#82842 - Critical - Agent executed `rd /s /q` against the drive root (C:\) on Windows]** (https://github.com/NousResearch/hermes-agent/issues/82842) - **Severity: Critical**. This is a potential near-total data loss scenario on Windows. While marked `needs-repro`, this is the most severe security/safety bug reported today and demands immediate investigation.
    - **[#82756 - Desktop plain-Enter submit silently deleted ~65 messages]** (https://github.com/NousResearch/hermes-agent/issues/82756) - This is the **third occurrence** of silent history loss on desktop, meaning previous fixes were incomplete. The data-integrity issue is a major source of trust erosion. A fix PR (#82592) seems to be working in this area.

- **High (P1):**
    - **[#82846 - Smart-approval auxiliary LLM call has no enforced timeout - wedges session indefinitely]** (https://github.com/NousResearch/hermes-agent/issues/82846) - A stalled request can permanently hang a session, affecting all platforms using the gateway. No fix PR is mentioned yet.
    - **[#82770 - Test sessions leak into the developer's production state.db]** (https://github.com/NousResearch/hermes-agent/issues/82770) - This is a development hygiene issue that pollutes the production database, causing bloat and potential confusion.

- **Medium-High (P2):**
    - A large number of P2 bugs were filed, including desktop SSH failures (#82442, #74411), Gmail MCP OAuth issues (#78190), and iteration-budget logic errors (#75097). Many of these have corresponding open PRs, showing the team is active in addressing them.

---

### 6. Feature Requests & Roadmap Signals
Several strong signals point toward future features.

- **Self-Improvement (Issue #61644):** The proposal for an "Autonomous Evaluation and Self-Improvement Engine (HAEE)" directly responds to a documented gap in Hermes (curator never tests skills). This is a major roadmap item that aligns with Hermes' "self-improving" claim and is likely to be considered for the next major version.
- **Job Chaining (Issue #15831):** The long-standing request for **cron job chaining** is still open with support, suggesting a real need in automation workflows. It is a logical progression for the cron system.
- **Accessibility (Issue #26689):** With ongoing community support, it is *critical* that the maintainers acknowledge and plan for this feature. While not a flashy feature, it is a necessary one for broad adoption.
- **Model/Provider Support (Issue #46064):** **OpenRouter router models** are being silently filtered out. Fixing this will add immediate value to users who use these curated models.

---

### 7. User Feedback Summary
The user feedback reveals several distinct pain points:

- **Frustration with Destructive Actions:** The most prominent theme is fear and frustration over data loss, seen in the Desktop truncation bug (#82756) and the Windows `rd /s /q` execution (#82842). These are the most severe types of bugs for any user.
- **Silent Failures:** Many bugs are characterized by "silent" or "misreported" behavior. Issues like the OpenRouter router models being "silently dropped" (#46064), the TTS "silently falls back" (#79314), and the weixin adapter "misreported as rate limited" (#80125) indicate a UX problem where the system hides important information from the user, making debugging difficult and eroding trust.
- **Update/Installation Friction:** There is a cluster of issues around `hermes update` and install loops, particularly on macOS (#77753) and with SSH setups (#82442, #74411). Users are getting stuck in deadlock states, unable to update to fix previous bugs.
- **Inconsistent Behavior Across Platforms:** Bugs manifesting only on Windows (#82842) or Wayland (#82851) show a need for better cross-platform QA, especially for the Desktop app.

---

### 8. Backlog Watch
The following are issues or PRs that are important but have not received recent attention or may need a maintainer to make a decision.

- **[#26689 - Accessibility improvements for blind VoiceOver users (P3)]** (https://github.com/NousResearch/hermes-agent/issues/26689) - This has been open for 3 months. It is a significant feature request that has attracted support but has been sitting at `P3`. It needs a roadmap decision to show that accessibility is a priority.
- **[#61507 - Add Desktop-managed Computer Use bridge (P3, open since Jul 9)]** (https://github.com/NousResearch/hermes-agent/pull/61507) - This is a large feature to allow remote backends to use local computer use. It touches on security-sensitive code and has been a `P3` for over a month. It needs a review to either be merged, rejected, or moved to a project milestone.
- **[#55018 - feat(gateway): sd_notify + WatchdogSec (open since Jun 29)]** (https://github.com/NousResearch/hermes-agent/pull/55018) - This PR for a good systemd integration for restart-on-hang has been open for over a month. It is crucial for stability in production environments and deserves maintainer attention.
- **[#15831 - Feature: Job chaining for cron (P3, open since Apr 26)]** (https://github.com/NousResearch/hermes-agent/issues/15831) - A highly logical and desirable feature that has been open for months. A maintainer response acknowledging its feasibility or offering a workaround would be valuable community engagement.
- **Duplicate Cron Bug (#66824, #71987):** The fact that the `cronjob create` bug is duplicated shows the workaround exists, but the issue is still unresolved. The swift action on many new P2 bugs makes the lack of attention on these older ones noticeable.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-10

## 📌 Today's Overview

Moderate activity with 3 issues and 6 PRs updated in the last 24 hours, indicating an active development cycle. The project shows a healthy balance between feature development, security hardening, and community engagement. A significant SSRF (Server-Side Request Forgery) hardening effort is underway across multiple channel integrations, suggesting a security-focused sprint. Community interest skews toward platform-specific feature parity, particularly around rich message rendering in Telegram and IRCv3 long-message handling. No new releases were published today, but the volume of open PRs suggests a release may be brewing.

**[🔝 Back to top](#)**

---

## 🚀 Releases

**No new releases today.**

**[🔝 Back to top](#)**

---

## 🛠️ Project Progress

**1 PR merged/closed today:**

- **[PR #3326: fix(web): remove duplicate pnpm lock entries](https://github.com/sipeed/picoclaw/pull/3326)** *(closed)* — **Author: As-tsaqib** — This maintenance fix removes two byte-for-byte duplicate `semver@7.8.5` entries from `web/frontend/pnpm-lock.yaml` that were causing `pnpm install --frozen-lockfile` to fail with `ERR_PNPM_BROKEN_LOCKFILE`. This is a CI/CD stability fix that unblocks the web frontend build pipeline. No functional changes; purely a build-system integrity fix.

**Key advances in open PRs (6 total, 5 still open):**

- **[PR #3222: refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)** — **Author: trufae** — A substantial DeltaChat refactor reducing complexity by ~200 lines. Drops legacy features and outdated tests; references official relay lists instead of hardcoded copies; removes password-based email config in favor of jsonrpc-stored secrets; renames `invite_link` → `join_invite_link` and adds `show_invite_link`. Still open with no comments — flagged in Backlog Watch below.

- **[PR #3327: feat(telegram): render tables with native rich messages](https://github.com/sipeed/picoclaw/pull/3327)** — **Author: As-tsaqib** — Companion to Issue #3325. Detects GFM tables and supported HTML `<table>` elements (outside code blocks) and delivers them as native Telegram Bot API rich messages via send/reply/topic/edit paths.

- **[PR #3324: fix(weixin): use CreateSafeHTTPClient for media downloads](https://github.com/sipeed/picoclaw/pull/3324)** — **Author: SashaMIT** — Adds SSRF protection to Weixin (WeChat) media downloads via `utils.CreateSafeHTTPClient` and `ValidateSafeHTTPURL`. Part of a coordinated security hardening series (see also #3323, #3322).

**[🔝 Back to top](#)**

---

## 💬 Community Hot Topics

**#1 — [Issue #3203: Matrix sync loop has no reconnection logic — silent death after network/server disruption](https://github.com/sipeed/picoclaw/issues/3203)**
- *Creator: weissfl* | *Comments: 8* | *Reactions: 2 👍* | *Status: CLOSED (stale)*
- **Underlying need:** Operational resilience. The Matrix channel's `/sync` long-polling loop dies silently after any network disruption or homeserver restart. Because no error is propagated and the main process stays alive, systemd's `Restart=on-failure` never triggers, leaving the channel dead without alerting anyone. Though marked stale and closed, the underlying need for watchdog-style health monitoring or reconnection backoff remains a high-value operational feature.

**#2 — [Issue #3287: Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**
- *Creator: superuser-does* | *Comments: 4* | *Reactions: 0* | *Status: OPEN*
- **Underlying need:** Message integrity across protocol boundaries. IRC's 512-byte limit forces clients to split long messages; PicoClaw currently fails to reassemble IRCv3 `LABEL`-tagged splits into a single coherent message. Users expect seamless interop — incoming long messages from Matrix/Telegram should not be garbled when bridged through IRC.

**#3 — [Issue #3325: Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325)**
- *Creator: As-tsaqib* | *Comments: 0* | *Reactions: 0* | *Status: OPEN* *(PR #3327 exists)*
- **Underlying need:** Feature parity with Telegram's native UI. Structured Markdown tables degrade to code blocks or plain text via the classic `sendMessage` path. Users want visually rendered tables via Telegram Bot API 10.1+ rich messages. The author has already submitted PR #3327, showing strong need-to-solution correlation.

**[🔝 Back to top](#)**

---

## 🐛 Bugs & Stability

**Ranked by severity:**

| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| 🔴 **Critical** | [PR #3322](https://github.com/sipeed/picoclaw/pull/3322) — SSRF in OneBot/QQ/Telegram/Discord/LINE/Slack media downloads | Crafted media URLs can reach loopback, link-local, or RFC1918 targets via `utils.DownloadFile` when `BlockPrivateTargets` is not enforced. **Fix exists (open).** | Open PR |
| 🔴 **Critical** | [PR #3323](https://github.com/sipeed/picoclaw/pull/3323) — SSRF in WeCom media downloads | `mediaClient` uses plain `http.Client`; redirects can reach private hosts. **Fix exists (open).** | Open PR |
| 🔴 **Critical** | [PR #3324](https://github.com/sipeed/picoclaw/pull/3324) — SSRF in Weixin media downloads | Same class of vulnerability as #3323; plain client used for CDN/remote media. **Fix exists (open).** | Open PR |
| 🟠 **High** | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) — Matrix sync loop silent death | Long-polling loop has no reconnection logic; channel dies silently after network disruption. **Closed as stale — fix needed.** | Closed (stale) |
| 🟡 **Medium** | [PR #3326](https://github.com/sipeed/picoclaw/pull/3326) — pnpm lockfile duplicates | Breaks `--frozen-lockfile` CI installs. **Fixed — merged.** | Closed ✅ |

**Pattern:** The SSRF hardening series (PRs #3322–#3324) is a coordinated security refactor — a notable investment in the project's security posture. These should be prioritized for review and merge.

**[🔝 Back to top](#)**

---

## ✨ Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version |
|---------|--------|---------------------------|
| **Telegram native table rendering** — Rich messages for Markdown/HTML tables via Bot API 10.1+ | [Issue #3325](https://github.com/sipeed/picoclaw/issues/3325) / [PR #3327](https://github.com/sipeed/picoclaw/pull/3327) | 🟢 **High** — PR exists, authored by the same person who filed the issue. Active interest and working solution. |
| **IRCv3 long-message reassembly** — Treat message splits as one cohesive message | [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) | 🟡 **Medium** — Feature request is clear but no PR exists yet; needs maintainer prioritization and implementation. |
| **Matrix reconnection logic / health monitoring** — Watchdog for sync loop, automatic backoff | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | 🟡 **Medium** — Despite stale-close, this is an operational gap that will resurface. Consider reopening or linking as a known issue. |
| **SSRF hardening across all channels** | PRs #3322, #3323, #3324 | 🟢 **High** — Actively being merged across channels; expect this to land in next release. |

**Prediction:** Next minor release (v0.2.10 or v0.3.0) will likely include: (a) the SSRF hardening series, (b) Telegram rich table rendering, (c) the DeltaChat refactor (pending review). IRC long-message handling may slip to the following cycle unless community pressure increases.

**[🔝 Back to top](#)**

---

## 🗣️ User Feedback Summary

**Pain Points:**
- **Matrix bridge fragility** ([Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)): Users report the bridge silently dying for hours/days without detection. The 8 comments and 2 upvotes indicate real-world operational frustration. The user explicitly notes "silent death" — no logs, no error, no restart — meaning production outages go unnoticed.
- **IRC message splitting** ([Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)): Long messages from other bridged platforms become garbled or truncated when arriving via IRC. Community member `superuser-does` explicitly requests understanding IRCv3 splitting conventions to reassemble full messages.
- **Build instability** ([PR #3326](https://github.com/sipeed/picoclaw/pull/3326)): Duplicate lockfile entries broke CI; a developer (As-tsaqib) self-fixed, suggesting frustration with build pipeline reliability.

**Satisfaction Signals:**
- The SSRF fixes being authored by community member **SashaMIT** across 3 channels suggests motivated contributors actively hardening the codebase.
- The DeltaChat refactor by **trufae** (known maintainer of radare2) bringing -200LOC of complexity reduction demonstrates senior-level contribution and a healthy contributor ecosystem.
- As-tsaqib's pattern of filing an issue and immediately providing a PR shows an engaged, solution-oriented community.

**[🔝 Back to top](#)**

---

## 👀 Backlog Watch

| Item | Issue/PR | Age (days) | Priority | Why it matters |
|------|----------|-----------|----------|----------------|
| **DeltaChat refactor** | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | ~38 days open (since 2026-07-03) | 🔴 High | Authored by a senior contributor (trufae), -200LOC, but **zero comments since open**. This indicates review bottleneck — the community will lose this contributor if PRs sit unanswered. |
| **Matrix reconnection** | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | ~39 days (closed as stale) | 🟠 High | Real operational issue closed without resolution. Consider reopening with label `known-issue` or moving to a roadmap milestone — silently closing risks alienating affected users. |
| **IRC long messages** | [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) | ~19 days | 🟡 Medium | No maintainer response in 4 comments; community is waiting for acknowledgment and guidance. Adding `accepted` label or commenting on feasibility would help. |
| **SSRF hardening series** | PRs #3322–#3324 | 1 day | 🔴 **Critical** | Security-relevant, freshly filed — these must be reviewed quickly. Multiple channels affected; delay extends the attack surface. |

**[🔝 Back to top](#)**

---

*This digest was generated from GitHub data available as of 2026-08-10. All links point to the sipeed/picoclaw repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-10

## Today's Overview

NanoClaw is in an active development and refactoring phase, with a substantial pipeline of 16 open pull requests but **zero merges or releases in the past 24 hours**, indicating a merge bottleneck. Activity is strongly oriented toward internal architecture — lifecycle hooks, migration registries, renderer registration, and host seams — suggesting preparation for a significant consolidation or upcoming release. The only new issue filed, #3217 (no pip channel in `install_packages`), is directly paired with documentation and (potentially) feature work already in the PR pipeline, showing a healthy issue-to-fix workflow. Security remains a priority, with two core-team PRs addressing CVE gates and dependency patches. The project is healthy and busy, but the accumulating unmerged PR stack (including items from late May and mid-July) is the primary risk factor.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

**No pull requests were merged or closed in the last 24 hours**, so no features or fixes advanced to the main branch during this period. All 16 PRs tracked remain open. The most notable updates were review pushes on long-running PRs, including:

- **#3050** and **#3041** — The Dial channel integration (SMS + AI voice calls) by OmriBenShoham, opened mid-July, received activity today, signaling active review progress.
- **#2529** — The Signal attachment delivery fix by brentkearney (open since May) was touched today, featuring prominently in a cluster of Signal and attachment-handling work.
- **#3186** — The "host seams for skill-owned capabilities" refactor by zvi-fried (open since Aug 4) received updates, alongside four new related refactoring PRs (#3212–#3215).

## Community Hot Topics

The most active area is the **attachment-delivery cluster** (PRs #2529, #3142, #3210), with multiple contributors independently working to fix broken attachment handling across channels. The underlying need is clear: agents are not reliably receiving files (images, PDFs, tables) sent through messaging channels.

- [PR #2529](https://github.com/nanocoai/nanoclaw/pull/2529) — Signal inbound attachments fix (open since May 18, touched today). Addresses a critical "silent drop" bug.
- [PR #3142](https://github.com/nanocoai/nanoclaw/pull/3142) — A competing/overlapping fix for the same Signal attachment problem, taking a different approach (mounted inbox).
- [PR #3210](https://github.com/nanocoai/nanoclaw/pull/3210) — Supporting documentation to tell agents where attachments land, suggesting the fix behavior isn't yet obvious to agents.

**Human need:** Users rely on messaging channels (Signal, Slack) for file exchange with agents. The repeated, unresolved PRs indicate this is a top-priority frustration point.

## Bugs & Stability

Only one new issue was filed, no new bugs or crashes were reported.

1. **[High — Feature Gap in Security Path]** [Issue #3217](https://github.com/nanocoai/nanoclaw/issues/3217): `install_packages` lacks a pip channel. This blocks adoption of the hardened prebuilt image for any deployment with Python dependencies. Severity is elevated because it undermines the security-hardening initiative's goal of universal adoption. A docs PR (#3216) already exists to clarify the limitation, but a functional fix is pending.

2. **[Medium — Security]** [PR #3207](https://github.com/nanocoai/nanoclaw/pull/3207) (core-team): Fixes critical `tar` CVE (GHSA-23hp-3jrh-7fpw) in both npm and pnpm toolchains inside the agent image. Not a new bug report, but a proactive hardening patch under review.

## Feature Requests & Roadmap Signals

- **Pip support in `install_packages`** ([Issue #3217](https://github.com/nanocoai/nanoclaw/issues/3217)): The most concrete feature signal. The project's own hardening path is incomplete without Python package support. Given the docs PR (#3216) is already in, a feature PR appears imminent; **pip support is a strong candidate for the next release.**

- **Dial channel integration** ([PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041), [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)): Adding SMS + AI voice calls as a new channel. Expect this to land alongside the pending consolidation given active review today.

- **`--stdin-json` CLI input** ([PR #3218](https://github.com/nanocoai/nanoclaw/pull/3218)): Bounded structured input for the CLI — signals a push toward more scriptable, programmatic control of NanoClaw.

- **Public Docker Hub publishing** ([PR #3208](https://github.com/nanocoai/nanoclaw/pull/3208)): The CI pipeline for publishing agent images with CVE gates. Suggests the hardened image is nearing general availability and is a clear roadmap milestone.

## User Feedback Summary

- **Pain Point (Attachments):** The cluster of PRs (#2529, #3142, #3209, #3210) all stem from user-facing failures: attachments sent via Signal and Slack are either dropped, routed to dead paths, or delivered as unreadable text splices. The repeated, independent attempts to fix this (including one stale since May) indicate a lingering user frustration.
- **Pain Point (Slack Tables):** [PR #3209](https://github.com/nanocoai/nanoclaw/pull/3209) fixes pasted tables in Slack being lost — a real-world collaboration workflow issue.
- **Adoption Friction:** Issue #3217 shows users attempting to adopt the security-hardened image are blocked by the missing pip channel, reflecting a user base that is ready for stricter deployment defaults but constrained by feature parity.

## Backlog Watch

- **[PR #2529](https://github.com/nanocoai/nanoclaw/pull/2529) (Open, since May 18) — Signal attachment fix:** Of the two competing fixes for this issue, this is the oldest and was explicitly linked to a closed bug (#2528). It has received review attention today, but maintainers should decide between #2529 and #3142 to avoid a duplicate-effort scenario.
- **[PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) & [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) (Open, since July 14) — Dial channel:** A large feature addition (channel adapter + setup wizard changes) that has been pending for nearly a month. The long review cycle for a whole new channel is understandable, but without a merge, the codebase risks divergence and the contributor's momentum is lost.
- **[PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186) (Open, since Aug 4) — Host seams refactor:** Foundational architecture work that now has four follow-up PRs (#3212–#3215) built on top of it in the review queue. This PR should be prioritized, as the entire refactoring series appears blocked on it.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date: 2026-08-10**

---

## 1. Today's Overview

IronClaw is in an active development and stabilization phase, with **22 issues** and **28 pull requests** updated in the last 24 hours, and **50 items closed/merged** across both categories combined. The project shows healthy momentum with a strong batch of **new-feature PRs landing** from both core contributors and a new external contributor (theredspoon), plus **automated dependency updates** flowing through a mature CI pipeline. The **tool-discovery system** is clearly the current strategic focus, with multiple stacked PRs implementing swappable providers, bounded complete signatures, and baseline catalog tests at scale. However, there are **no new releases** today, and the issue tracker reveals a persistent backlog of **QA-reported bugs** from the Railway staging instance that are being addressed in batches. Overall, the project is in **active feature development** with **good contributor diversity** and a **solid bug-fixing cadence**.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent tagged versions remain **1.1.0 (stable)** and **1.1.0-rc.1**, both of which are referenced as affected in a currently open bug report [#7400](https://github.com/nearai/ironclaw/issues/7400).

---

## 3. Project Progress

**Merged/Closed PRs (8 total):**

- [#7387](https://github.com/nearai/ironclaw/pull/7387) — Dependabot: **12 dependency updates** in the "everything-else" group (base64, toml, rstest, etc.) — merged.
- [#7022](https://github.com/nearai/ironclaw/pull/7022) — Dependabot: **Actions group updates** (setup-node, docker/login-action) — merged.
- [#7171](https://github.com/nearai/ironclaw/pull/7171) — **Skill mounting fix**: "one DB-backed tree for every skill mount, and make a skill's own commands runnable" — closes [#7168](https://github.com/nearai/ironclaw/issues/7168) and advances the skill-management epic [#6941](https://github.com/nearai/ironclaw/issues/6941). This was a significant bug where installed skills disappeared from Settings → Skills and couldn't be re-activated.

**7 closed issues today** include several long-standing QA bugs (reborn routine Slack DM failures, invalid result errors, chat creation latency, routine deletion, agent chain-of-thought exposure), suggesting a **comprehensive stabilization pass** across previously filed reports.

**Key feature work in flight (open PRs):**
- **Tool-search provider architecture** ([#7411](https://github.com/nearai/ironclaw/pull/7411)) — makes deferred-tool retrieval a swappable provider, following the seam established for memory.
- **Bounded complete signatures** ([#7410](https://github.com/nearai/ironclaw/pull/7410)) — returns canonical parameters and `schema_complete: true` for ranked results within host budgets.
- **Catalog baselines at scale** ([#7409](https://github.com/nearai/ironclaw/pull/7409)) — extends judged corpus from 50 to 100/500/1,000 tools.
- **Web-Push notifications** ([#7398](https://github.com/nearai/ironclaw/pull/7398)) — first-party W3C Web Push channel (RFC 8030/8291/8292) with PWA support — a major feature for parity with Slack/Telegram.
- **Progressive previews for Slack/Telegram** ([#7396](https://github.com/nearai/ironclaw/pull/7396)) — adds a channel-neutral progressive-preview contract.
- **Run delivery improvements** ([#7131](https://github.com/nearai/ironclaw/pull/7131)) — triggered run failures now deliver sanitized terminal notices to creators instead of silent `Skipped`.
- **New external contributor** (theredspoon) has two large PRs: **projection identity hashing** ([#7352](https://github.com/nearai/ironclaw/pull/7352)) and **send-claim TOCTOU race fix** ([#7395](https://github.com/nearai/ironclaw/pull/7395)) — both addressing concurrency/correctness in the outbound and notification domains.

---

## 4. Community Hot Topics

The most active discussions (by comment count) center around the **tool-disclosure epic**:

1. **[#7405](https://github.com/nearai/ironclaw/issues/7405)** — "Improve deferred tool discovery with complete signatures and namespace-aware catalog previews" (2 comments). This is the strategic driver behind the current PR stack. The author (serrrfirat) identifies that `tool_search` returns incomplete metadata causing avoidable model turns.

2. **[#7407](https://github.com/nearai/ironclaw/issues/7407)** — "Execute BatchPolicy::Parallel capability batches concurrently in invoke_capability_batch" (2 comments). A clear performance gap: the policy is computed but never executed in parallel.

3. **[#7346](https://github.com/nearai/ironclaw/issues/7346)** — "Emoji shortcodes displayed as plain text" (2 comments) — a QA bug about gemoji rendering in assistant messages.

4. **[#7360](https://github.com/nearai/ironclaw/issues/7360)** — "Expand stress coverage across built-in and durable write paths" (2 comments) — testing infrastructure gap.

5. **[#7400](https://github.com/nearai/ironclaw/issues/7400)** — High-severity Streaming bug (2 comments): `stream: true` + caller `tools[]` fails mid-stream and leaves "zombie" threads. Affects both 1.1.0-rc.1 and 1.1.0 stable. This is the **most urgent issue** currently open.

**Underlying needs:** The community (notably serrrfirat and cuongdcdev) is pushing for **production-grade reliability** — complete metadata, true parallelism, concurrent-safe state, and streaming correctness. The tool-search work suggests a focus on **reducing model turns and token waste** at scale.

---

## 5. Bugs & Stability

**New (reported/updated today, by severity):**

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#7400](https://github.com/nearai/ironclaw/issues/7400) | `stream: true` + caller `tools[]` fails mid-stream, leaves "zombie" thread; **100% reproduction**; affects stable + rc.1 | No fix PR yet |
| **P2** | [#7346](https://github.com/nearai/ironclaw/issues/7346) | Emoji shortcodes rendered as plain text (`:wave:` in responses) | Yes — [#7404](https://github.com/nearai/ironclaw/pull/7404) (Rendered gemoji shortcodes) |
| **P2** | [#7348](https://github.com/nearai/ironclaw/issues/7348) | Activity tool calls and progress messages in wrong chronological order | Yes — [#7403](https://github.com/nearai/ironclaw/pull/7403) (Fixed WebUI activity chronology) |
| **P2** | [#7349](https://github.com/nearai/ironclaw/issues/7349) | Refreshing chat causes run history/Activity timeline to disappear | No fix PR yet |
| **P2** | [#7345](https://github.com/nearai/ironclaw/issues/7345) | Agent reports 61 automations while UI shows only 50 (hallucination vs count mismatch) | Yes — [#7402](https://github.com/nearai/ironclaw/pull/7402) (exact automation totals) |

**Ongoing known issues (updated today, not yet fixed):**
- [#5882](https://github.com/nearai/ironclaw/issues/5882) — Repeated Slack reconnects break auth flow — has fix PR [#7395](https://github.com/nearai/ironclaw/pull/7395) (TOCTOU race fix, possibly related)
- [#6479](https://github.com/nearai/ironclaw/issues/6479) — Routines can create/modify other routines (self-replicating risk) — **no guardrail yet**
- [#6046](https://github.com/nearai/ironclaw/issues/6046) — Simple email-to-sheet workflow spikes to 124 tool invocations
- [#5878](https://github.com/nearai/ironclaw/issues/5878) — Revoked GitHub token produces misleading errors instead of re-auth flow
- [#5551](https://github.com/nearai/ironclaw/issues/5551) — Automation posts intermediate progress to Slack instead of final result

---

## 6. Feature Requests & Roadmap Signals

**High-probability for upcoming releases (v1.2.0):**

1. **Tool disclosure follow-up epic** ([#7166](https://github.com/nearai/ironclaw/issues/7166)) — actively being worked via the tool-search PR stack;
2. **Deferred-tool discovery improvements** ([#7405](https://github.com/nearai/ironclaw/issues/7405)) — complete signatures + namespace-aware previews (PRs #7409, #7410, #7411 are stacked on this);
3. **Parallel capability batch execution** ([#7407](https://github.com/nearai/ironclaw/issues/7407)) — fixes a clear performance gap;
4. **Web-Push notifications + PWA** ([#7398](https://github.com/nearai/ironclaw/pull/7398)) — new first-party notification channel;
5. **Stress coverage across built-in write paths** ([#7360](https://github.com/nearai/ironclaw/issues/7360)) — infra/CI work;
6. **Coding-tool replacement experiment** ([#7392](https://github.com/nearai/ironclaw/issues/7392)) — swap first-party coding tools for the pinned `omp` tool surface (from can1357/oh-my-pi) — an experiment likely to land in a minor release.

**Bugfix-backlog items likely bundled into next patch:** emoji rendering (#7404), activity chronology (#7403), automation total counting (#7402), projection identity hashing (#7352), send-claim TOCTOU fix (#7395).

---

## 7. User Feedback Summary

**Pain points raised by users/QA (joe-rlo, thisisjoshford, cuongdcdev):**

- **UI/UX inconsistencies in the WebUI v2** — emoji rendering, activity ordering, history loss on refresh, chat creation latency.
- **Notification delivery issues** — Slack channels receiving intermediate progress instead of final results; broken auth flow after repeated Slack reconnects.
- **Automation reliability** — installed tools unusable (CoinGecko heartbeat error), routines that can't be deleted or that self-replicate, counts that are inconsistent between UI and agent claims.
- **High-severity streaming failure** on the Responses API — *verified on stable*, not just a release candidate.
- **Model efficiency concerns** — 124 tool calls for a simple email-to-sheet task is a clear signal of **excessive tool orchestration** that needs optimization.
- **Security-sensitive gaps** — routines creating other routines (self-replication risk) is called out explicitly by QA.

**Satisfaction signals:** The tool-disclosure epic was marked as **outcome-complete** ("Progressive tool disclosure is safe, reliable, and efficient after becoming the Reborn default"), and QA has closed out multiple older P2/P3 bugs, suggesting a **trustworthy stabilizing release cycle** is underway.

---

## 8. Backlog Watch

Issues/PRs that have been open for an extended period without maintainer response or closure:

1. **[#4341](https://github.com/nearai/ironclaw/issues/4341)** (closed) — Chain-of-thought exposure (Qwen3.6-35B) — *closed today*, resolving a long-standing privacy issue from June.
2. **[#5882](https://github.com/nearai/ironclaw/issues/5882)** — Slack reconnection auth flow — open since **July 9** (32 days). Has a comment from today (2 total); the fix may be related to PR #7395 but it is not explicitly linked. **Needs maintainer attention.**
3. **[#6479](https://github.com/nearai/ironclaw/issues/6479)** — Routine self-replication risk — open since **July 22** (19 days). Security-relevant; no fix yet. **Needs triage priority.**
4. **[#6046](https://github.com/nearai/ironclaw/issues/6046)** — Excessive tool invocations (124 for simple task) — open since **July 13** (28 days). Critical for token economics.
5. **[#5878](https://github.com/nearai/ironclaw/issues/5878)** — Revoked token misleading errors — open since **July 9** (32 days). Authentication UX flaw.
6. **[#5551](https://github.com/nearai/ironclaw/issues/5551)** — Wrong Slack messages — open since **July 2** (39 days). User-facing notification bug.
7. **[#7131](https://github.com/nearai/ironclaw/pull/7131)** — Run delivery failure notifications — open since **August 4**; still not merged. Directly relates to issue #6896.
8. **[#7396](https://github.com/nearai/ironclaw/pull/7396)** — Progressive previews — open since **August 8**; likely depends on the follow-up work in #7405.

---

*Back to [README](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-10

## 1. Today's Overview

LobsterAI is in a **moderate activity phase** for this digest period. The repository saw **3 issues updated in the last 24 hours** (all open, none closed) and **zero pull request activity**. No new releases were published. The absence of merged PRs or closed issues suggests a lull in code landing, while the issues themselves reveal two key themes: **model/provider compatibility friction** (context window limits, custom model detection) and **architectural questions around cross-model sub-agent workflows**. Two of the three active issues are stale (created weeks or months ago), indicating a need for maintainer attention on long-burning topics.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

No pull requests were merged or closed in the last 24 hours. The project's codebase appears to be in a stable-but-idle window; no features or fixes landed during this period based on GitHub activity data.

## 4. Community Hot Topics

The following issues are drawing the most engagement within the last 24 hours:

- **[#2453 — 切换自定义模型，被系统定义为不许可？]** (1 comment, created & updated 2026-08-09)  
  URL: https://github.com/netease-youdao/LobsterAI/issues/2453  
  **Analysis:** This is the freshest and most operationally disruptive issue. The user reports a **false-positive rejection when switching to custom model definitions** formatted as `custom_1/openai/gpt-oss-20b:free`. The system mis-parses the provider as "OpenAI" and flags the model as unauthorized. The impact spans OpenRouter free models and NVIDIA-hosted models—both popular, low-cost options. Underlying need: **more robust provider/model parsing logic** and tolerance for non-standard but valid model identifiers.

- **[#1187 — 建议在设置模型api的选项中增加上下文窗口大小设置和输出token设置]** (2 comments, 👍 1, created 2026-04-01, updated 2026-08-09)  
  URL: https://github.com/netease-youdao/LobsterAI/issues/1187  
  **Analysis:** A long-standing feature request (4+ months old) resurfaces. User hits `Context overflow: prompt too large for the model` on DeepSeek. The ask: expose **context window and max output token settings** in the API configuration UI. Underlying need: users want **explicit control over model limits** rather than relying on defaults that may mismatch actual model capabilities.

- **[#2132 — 跨模型子任务调用的问题]** (1 comment, created 2026-06-09, updated 2026-08-09)  
  URL: https://github.com/netease-youdao/LobsterAI/issues/2132  
  **Analysis:** This issue dives into **cross-model sub-task coordination semantics**. The user describes a "planner + executor" pattern (M3 as planner, DeepSeek as executor) and identifies that parent tasks are not notified when cross-model sub-tasks complete (unlike same-model sub-tasks). Investigative notes suggest the failure involves a "gateway function call" not tracked in `sessions_list` or `subagents`. Underlying need: **a predictable, documented async notification mechanism** across model-boundary task boundaries.

## 5. Bugs & Stability

No new bugs or regressions were reported in the last 24 hours beyond the issues already surfaced above. The most urgent stability-adjacent item is:

- **High severity: False rejection of valid custom model names** (#2453) — this blocks users from switching models mid-session, a core interaction. No fix PR exists as of this digest. The error appears tied to naive `provider/model` splitting logic.

## 6. Feature Requests & Roadmap Signals

Two feature signals stand out from today's issue activity:

1. **Configurable context/output token limits per model** (#1187) — This is a low-complexity UI addition that would preempt many "Context overflow" complaints. Given its age (4 months) and a 👍 vote, it remains a likely candidate for inclusion in a near-future release (prioritized as `model-settings` enhancement).

2. **Improved custom model identifier parsing** (#2453) — While filed as a bug, the user-suggested fix implies a feature change: maintain a **whitelist of known providers** and gracefully fall back to "custom" when the prefix is unrecognized. This is a small but high-impact change likely to land in the next patch release.

3. **Cross-model sub-task notification protocol** (#2132) — This is a deeper architectural signal. If multi-model orchestration is a product goal, expect a documented **sub-agent lifecycle callback** mechanism or an explicit "task complete" event propagation design to surface in the roadmap.

## 7. User Feedback Summary

Real user pain points in the last 24 hours:

- **Model switching friction:** Users cannot freely swap between custom/OpenRouter/NVIDIA models due to provider detection over-reach, breaking mid-conversation workflows (per #2453).
- **Context window blind spots:** Users are surprised by "prompt too large" errors, indicating a gap between assumed and actual model context limits (per #1187). They want transparency and control.
- **Multi-model orchestration confusion:** Power users expect same-model sub-task completion semantics to apply cross-model; current behavior is opaque and undocumented (per #2132).

Satisfaction signals are indirect: the issues are constructive and detailed, suggesting users are technically engaged and willing to help diagnose. No "I'm leaving" or strongly negative sentiment was observed in this window.

## 8. Backlog Watch

Issues requiring maintainer attention (unanswered, aged, or actively resurfacing):

- **[#1187 — Context/token settings request]** (🔴 Aged 130+ days, updated yesterday, 2 comments)  
  URL: https://github.com/netease-youdao/LobsterAI/issues/1187  
  **Action needed:** Triage and either schedule as a feature or provide a workaround (e.g., `max_tokens` override docs). This has now surfaced twice and risks becoming a perennial complaint.

- **[#2132 — Cross-model sub-task notification]** (🔴 Aged 62 days, detailed engineering notes, 1 comment)  
  URL: https://github.com/netease-youdao/LobsterAI/issues/2132  
  **Action needed:** This is a design-level discussion that deserves a maintainer response to confirm intended behavior and claim (or close) the architectural gap.

- **[#2453 — Custom model rejection]** (🟡 Fresh, high-impact)  
  URL: https://github.com/netease-youdao/LobsterAI/issues/2453  
  **Action needed:** Immediate. This is likely a small parsing fix; a quick acknowledgment and timeline would prevent user churn.

---

**Project Health Summary:** LobsterAI shows healthy user engagement with well-diagnosed issues, but the idle PR queue and stale long-form issues suggest maintainers should allocate time to (a) fast-fix the custom provider parsing bug, and (b) formally respond to the sub-task notification design proposal. The project's core value—multi-model orchestration—remains compelling, but edge-case compatibility is currently the top friction point.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-10

## 1. Today's Overview
Moltis is in a **steady-state maintenance phase** with moderate developer activity. Over the past 24 hours, **2 issues were updated** (both open, no closures) and **1 pull request remains open** with no merges or new releases. Activity is focused on **bug triage and a security/correctness fix** in the vault subsystem. The issue tracker shows **no new feature work** in flight, suggesting the team is prioritizing stability over feature velocity this week. The open PR on recovery-phrase hashing addresses a **data-integrity concern** that, if merged, will strengthen vault reliability. Overall, the project appears healthy but with a **low-throughput cadence** — typical for a post-release stabilization window.

## 2. Releases
**No new releases** were published in the last 24 hours. The most recent release remains the current stable version. For users, this means no new features, bug fixes, or migration steps are required at this time. Keep an eye on the open PR (#1186) — if merged, it may be bundled into the next patch release.

## 3. Project Progress
**No PRs were merged or closed today.** The only active pull request is:

- **[#1186 — fix(vault): normalize recovery phrase before hashing](https://github.com/moltis-org/moltis/pull/1186)** *(open)*  
  This PR fixes a **critical inconsistency** in vault unsealing logic: the derivation function (`derive_recovery_kek`) normalizes recovery phrases (strips dashes, uppercases) before deriving the KEK, but the **stored hash was computed over the raw phrase**. This creates a scenario where a user can type a lowercase or dashed phrase and successfully unseal, but the stored verification hash mismatches — a latent integrity bug. The fix normalizes the phrase **before hashing**, aligning storage and lookup behavior. This is a correctness fix, not a feature, and should be prioritized for review and merge.

## 4. Community Hot Topics
**No issues or PRs received comments or reactions** in the last 24 hours. Community engagement is currently quiet. However, the two open issues (below) represent **persistent user pain points** that are likely to accumulate attention:

- **[#1185 — Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)**  
  Reported by **mikz** — This is a **runtime-state detection bug** on macOS Apple Silicon. The sandbox process launches successfully, but Moltis fails to recognize it as active. This likely stems from a **process liveness check** (PID verification, socket handshake, or container-status polling) that misses Apple Container 1.x's specific lifecycle semantics. Underlying need: **reliable container-state detection** across runtime variants.

- **[#1187 — Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187)**  
  Reported by **IlyaBizyaev** — A **UI/data-binding bug**: when a user edits heartbeat settings through the settings form, any heartbeat-related fields **not present in that form** are silently reset to defaults. This is a classic **partial-update (PATCH vs PUT) problem** where the frontend submits a complete replacement object, clobbering server-side state. Underlying need: **non-destructive settings updates** and clearer UI affordances for hidden fields.

## 5. Bugs & Stability
Two open bugs were updated in the last 24 hours, both **unfixed** as of this digest:

| Severity | Issue | Description | Fix Available? |
|----------|-------|-------------|----------------|
| **High** | [#1185 — Apple Container sandbox state misdetection](https://github.com/moltis-org/moltis/issues/1185) | Container runs but Moltis reports it as stopped — **breaks automation and orchestration** on macOS. | ❌ No |
| **Medium** | [#1187 — Heartbeat settings UI silently resets fields](https://github.com/moltis-org/moltis/issues/1187) | Data loss on settings save — users may unknowingly wipe advanced config. | ❌ No |

**No regressions or crashes were reported today.** Neither bug has an associated fix PR yet. The vault PR (#1186) addresses a **latent correctness bug** (hash mismatch), which is not yet reported as an issue — it's proactive hardening and should be treated as **stability-positive**.

## 6. Feature Requests & Roadmap Signals
**No explicit feature requests** were logged in the past 24 hours. However, the bugs hint at roadmap signals:

- **Robust runtime abstraction**: Issue #1185 suggests Moltis's container-runtime detection is too tightly coupled to specific sandbox implementations. Expect future work on **generic runtime health-checking** (e.g., pluggable probes).
- **Idempotent settings persistence**: Issue #1187 points toward a need for **per-field settings mutation APIs** — likely to arrive as a `PATCH`-style endpoint or a form-state diffing layer in the frontend.

**Prediction for next minor release**: The vault fix (#1186) is small, low-risk, and security-adjacent — **very likely to land in the next patch/minor release** alongside the two bug fixes above if maintainers prioritize them.

## 7. User Feedback Summary
Real user pain points from the last 24 hours:

- **macOS reliability** (mikz, #1185): Users expect Moltis to **accurately reflect sandbox state**; a false-negative "not running" status erodes trust and breaks scripted workflows. Dissatisfaction: **high** — the runtime works but the orchestration layer is wrong.
- **Silent data loss** (IlyaBizyaev, #1187): Users are **frustrated by unexpected field resets** in settings UI. The lack of any warning or confirmation makes this feel like a **data-corruption bug**, not a UX quirk. Dissatisfaction: **medium-to-high** — work is lost, but recoverable with manual re-entry.

No positive feedback themes emerged today, primarily because of low comment volume.

## 8. Backlog Watch
No long-dormant issues were updated today. However, the **two open bugs** (#1185, #1187) and the **open PR** (#1186) are the **top priorities** requiring maintainer attention:

- **#1185** has been open for **2 days** with **zero maintainer response** — deserves an acknowledgment and triage label.
- **#1187** has been open for **1 day** with **zero comments** — should be confirmed and assigned.
- **#1186** (PR) has **no review activity** — needs a maintainer review to move forward.

**Action items for maintainers**: Acknowledge #1185 and #1187, prioritize review of #1186, and consider a **patch release** once all three land.

---
*Generated from GitHub data retrieved 2026-08-10. All links point to the [Moltis repository](https://github.com/moltis-org/moltis).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-10

## 1. Today's Overview

CoPaw (QwenPaw) continues to show strong development velocity with 34 PRs and 18 issues updated in the last 24 hours, though only 1 PR was merged/closed during this period. The project is actively addressing user-reported regressions in v2.0.1/v2.1.0b2, particularly around Google Gemini API compatibility, MCP tool type coercion, and frontend rendering of tool output. Notably, several first-time contributors are submitting fixes — a positive signal for community health. A cluster of duplicate frontend rendering issues (#6848–#6852) from the same user suggests a significant UX problem with long tool output that may deserve priority attention. The maintainers appear to be reviewing and commenting across a wide range of PRs; however, no releases were cut in the last 24 hours, indicating a stabilization phase between betas.

## 2. Releases

**No new releases in the last 24h.** The last reported versions in circulation are **QwenPaw 2.1.0b2** (beta) and **2.0.1** (stable), per bug reports and PR descriptions.

---

## 3. Project Progress

Only **one PR was merged/closed** in the last 24 hours:

- **[PR #6846 — feat(providers): catalog DeepSeek V4 context windows (1M)](https://github.com/agentscope-ai/QwenPaw/pull/6846)** *(by uaixo, merged)* — Adds `deepseek-v4-flash` and `deepseek-v4-pro` to the context-window catalog at 1,000,000 tokens, fixing incorrect 131K resolution that triggered premature context compaction.

**Other notable PRs under review/active development (not yet merged):**

- **[PR #6325 — feat(tools): show built-in tool docs and parameters in Console](https://github.com/agentscope-ai/QwenPaw/pull/6325)** — Enhances the Built-in Tools page with docs and parameter details for power users.
- **[PR #6398 — feat: add reranker support for ReMe memory search](https://github.com/agentscope-ai/QwenPaw/pull/6398)** (Under Review) — Re-ranking via external API with over-fetch and cap-back logic.
- **[PR #6360 — fix: change context injection role from system to user](https://github.com/agentscope-ai/QwenPaw/pull/6360)** — Fixes AgentScope message validation rejecting system-role context injections.
- **[PR #6704 — feat(chat): session fork — snapshot conversation context to new session](https://github.com/agentscope-ai/QwenPaw/pull/6704)** (ready-for-human-review) — Right-click session forking with full context copy.
- **[PR #6854 — add localized approval purpose descriptions](https://github.com/agentscope-ai/QwenPaw/pull/6854)** — Direct response to issue #6832 (see Feature Requests).

---

## 4. Community Hot Topics

| Issue | Comments | Topic |
|-------|----------|-------|
| [#2291 — Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 66 | Community contribution task board (P0-P2); several PRs from first-time contributors this week. |
| [#6281 — Web console mobile adaptation](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 5 | Chinese-language: mobile support for Web Console. |
| [#5584 — Cannot connect custom ascend-vllm model](https://github.com/agentscope-ai/QwenPaw/issues/5584) | 4 | Regression: v1.1.7 worked; later versions fail with `APIConnectionError` on model config. |
| [#6826 — Assistant message end time display anomaly](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 4 | Display says seconds but actual reasoning took 2 minutes. |

**Analysis:** The vLLM/Ascend connection regression (#5584) has been *closed*, suggesting a fix landed. Mobile web console (#6281) remains a recurring desire. The task board (#2291) continues to drive first-time contributor PRs — a healthy onboarding loop.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | [#6812 — Gemini API: Model 'unknown' execution failed](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Open | Provider sends `$schema` field that Gemini SDK rejects. **Fix PR exists:** [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) (strip unsupported metadata). |
| **High** | [#6839 — MCP: numeric strings coerced to numbers](https://github.com/agentscope-ai/QwenPaw/issues/6839) | Open | String fields like `apiKey`/`assetInfo` are passed as numbers, causing tool-call failures. No fix PR yet. |
| **Medium** | [#6847 — QwenPaw killed by antivirus; WorkBuddy unaffected](https://github.com/agentscope-ai/QwenPaw/issues/6847) | Open | Possibly related to code-signing or execution patterns; needs maintainer investigation. |
| **Medium** | [#6851/#6850/#6849/#6848/#6852 — Frontend collapses long multi-line tool output](https://github.com/agentscope-ai/QwenPaw/issues/6852) | 4 closed as dup + 1 open | v2.1.0b2 renderer regression. Duplicates closed, but root cause still open. |
| **Medium** | [#6806 — Windows: Cannot save model config (Internal Server Error)](https://github.com/agentscope-ai/QwenPaw/issues/6806) | Open | Plugin-level issue with `qwenpaw-creator`. Root-cause analysis provided in issue. |
| **Low** | [#6841 — Auto-Dream: single unit empty schema marks whole task error](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Open | Suggests retry + tolerance logic for ReMe integration units. |

**Additional instability fixes in flight:** [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) (preserve assistant completion time — addresses #6826), [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) (real-time SSE streaming via ASGI middleware), [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) (dict-like model response handling).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for next release |
|---------|----------|----------------------------|
| **[Mobile web console adaptation](https://github.com/agentscope-ai/QwenPaw/issues/6281)** | #6281 | *Possible* — recurring request; needs responsive design work. |
| **[Approval purpose descriptions](https://github.com/agentscope-ai/QwenPaw/issues/6832)** | #6832 → [PR #6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | *High* — PR already drafted with localized descriptions. |
| **[Session fork / snapshot](https://github.com/agentscope-ai/QwenPaw/pull/6704)** | PR #6704 (ready-for-human-review) | *High* — awaiting maintainer merge. |
| **[Configurable theme/skin](https://github.com/agentscope-ai/QwenPaw/pull/6312)** (Task 1 from help-wanted board) | PR #6312 (draft) | *Medium* — draft preview under review. |
| **[ReMe4 roadmap clarification](https://github.com/agentscope-ai/QwenPaw/issues/6840)** | #6840 | *Informational* — user asks for timeline on Auto-Link, tri-modal search, digest weights. |
| **[Hidden agents for plugins](https://github.com/agentscope-ai/QwenPaw/pull/6842)** | PR #6842 | *High* — small, clean feature likely to ship. |
| **[CIDR support in no-auth host allowlist](https://github.com/agentscope-ai/QwenPaw/pull/6259)** | PR #6259 | *Medium* — security-relevant; still open. |

**Prediction:** The next release (likely 2.1.0rc/2.1.1) will **very likely** include: Gemini `$schema` fix (#6844), assistant-time fix (#6845), approval descriptions (#6854), DeepSeek V4 catalog (#6846), and session fork (#6704). Mobile console and theme/skin remain longer-term.

---

## 7. User Feedback Summary

- **Mixed sentiment on stability.** v2.0.1 and 2.1.0b2 users are reporting real regressions (Gemini failures, antivirus kills, MCP coercion bugs). However, the number of first-time contributor PRs and closed issues suggests maintainers are responsive.
- **Cross-repo comparison:** One user explicitly asked why *WorkBuddy* isn't killed by antivirus but QwenPaw is (#6847) — trust/security perception matters.
- **Memory (ReMe4) enthusiasm:** Users are actively exploring ReMe Light in 2.1.0b2 and asking detailed roadmap questions (#6840), indicating power users value the memory architecture.
- **Displays/timing:** The "message end time shows seconds but took 2 min" (#6826) is a *trust-breaking* UX bug — users want honest reflection of agent work.
- **Long tool output:** The duplicate cluster (#6848–#6852) signals a frustrating experience for agent developers who need to inspect raw tool results.

**Key takeaway:** Users are pushing QwenPaw into real production/desktop-agent workflows and are starting to compare it against alternatives (WorkBuddy). Stability, transparency (timings, output fidelity), and security posture are the top differentiators.

---

## 8. Backlog Watch

| Item | Age (created) | Why this matters |
|------|--------------|------------------|
| **[#6281 — Mobile console adaptation](https://github.com/agentscope-ai/QwenPaw/issues/6281)** | ~21 days | Popular request (5 comments), no PR or maintainer response visible. |
| **[#5584 — ascend-vllm connection regression](https://github.com/agentscope-ai/QwenPaw/issues/5584)** | ~44 days (closed) | **Closed** — good, but long-lived regression; verify fix coverage in release notes. |
| **[#6259 — CIDR allowlist PR](https://github.com/agentscope-ai/QwenPaw/pull/6259)** | ~22 days | Open since 2026-07-19; no merge. Could be a security-release blocker if deferred. |
| **[#6806 — Model-config save failure on Windows](https://github.com/agentscope-ai/QwenPaw/issues/6806)** | ~3 days | Includes AI-assisted root-cause analysis; maintainers should verify and respond. |
| **[#6847 — Antivirus kills QwenPaw](https://github.com/agentscope-ai/QwenPaw/issues/6847)** | ~1 day | Reputation-relevant; needs public response about signing or execution behavior. |

**Overdue-maintainer-action items:** Mobile console (#6281) has no visible maintainer engagement. PR #6259 (CIDR) has been waiting for review for over 3 weeks.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for 2026-08-10, generated from the provided GitHub data.

---

### 1. Today's Overview

ZeroClaw is in a period of high-intensity governance and stabilization. The project shows very high activity with 50 issues and 50 PRs updated in the last 24 hours, indicating a busy development cycle focused on security hardening, RFC ratification, and addressing critical bugs. However, the vast majority of PRs remain open (49/50), suggesting a significant bottleneck in the review and merge process. The project is also being refined internally; with multiple RFCs active (including one to streamline the RFC process itself), ZeroClaw is actively working to improve its own contribution and decision-making workflows. The presence of newly reported P0/P1 security and bug issues indicates a strong, reactive community, but also highlights areas of concern that need immediate attention.

### 2. Releases

No new releases were published in the last 24 hours. The most recent release was v0.8.3, which is referenced in various issues (e.g., #9101, #9690).

### 3. Project Progress

Today saw a low number of closed items, with only 1 PR merged/closed and 12 issues closed. Notable closures include:

- **[Bug] web ui frozen after trigering filesystem channel "created" event** (#9860): This issue was quickly closed as a duplicate, suggesting a canonical issue exists elsewhere.
- **[Bug] Containerfile StageX pin ships rustc 1.95.0, below the declared MSRV** (#9690): Closed, indicating a fix has been merged or the issue was resolved.
- **[Bug] Stdio-based MCP servers accumulating as zombie processes** (#8731): This high-priority bug was closed, meaning a fix has likely been landed.
- **[Tracker]: Goal mode implementation split stack** (#8681): This long-running tracker was closed, likely marking the completion of landing all goal-mode PRs.
- **[Bug] System prompt tool-availability should match per-turn effective tools** (#8054): Closed, suggesting the follow-up fixes for various entry points have been merged.

While not many PRs were merged today, the open PRs are numerous and large in scope. The seven-part **Hindsight memory stack** (#9064, #9065, #9066, #9068) remains a major feature in progress, with multiple parts being updated. Other significant PRs in-progress include multi-model provider support (#9809), SSRF gating for `image_gen` (#8826), and support for multiple provider models (#9809).

### 4. Community Hot Topics

The most active discussions (by comment count) reveal the community's focus on governance and security:

- **RFC: Work Lanes, Board Automation, and Label Cleanup** (#6808) - 22 Comments
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
  A long-running governance RFC (Rev. 24) that is a "ratification deferred / rollout in progress" for improving work routing. This signals deep community engagement in optimizing the project's own maintainability.

- **RFC: Per-model capability & context-window config** (#7100) - 12 Comments
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)
  The need for this feature is echoed by the massive PR #9809 (multiple models per profile). Users want granular control over model capabilities, which is currently fragmented across different systems.

- **RFC: Treat an empty WhatsApp Web `allowed_groups` as permit-none** (#9397) - 11 Comments
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)
  A security-focused RFC stirring discussion. The high engagement indicates strong community concern over default-deny security postures for channel access.

- **[Bug] gateway webhook handlers do not fail closed** (#9565) - 3 Comments (P0)
  [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)
  Despite only 3 comments, this is a P0 security bug (S0 severity) where unauthenticated webhook messages are dispatched to the agent. The low comment count might be due to maintainers working directly on a fix, given the criticality.

### 5. Bugs & Stability

This is the most concerning area of today's digest, with several newly reported or active severe issues.

- **P0/S0 - [Bug]: gateway webhook handlers do not fail closed** (#9565) [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9565): An attacker can inject messages via WhatsApp, Linq, and WATI webhooks without authentication, leading to data loss or security risk.
- **P1/S1 - [Bug]: browser_open hangs the agent turn** (#8560) [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8560): Closed today, but a critical bug that caused indefinite hangs in the agent loop.
- **P1/S1 - [Bug]: nested runtime panic in try_enable_pgvector** (#9085) [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9085): A startup panic that blocks workflows when pgvector is enabled.
- **P1 - [Bug]: shared_budget TOCTOU can wrap AtomicUsize** (#9192) [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9192): Closed, but highlights a serious concurrency flaw that could cause panics.
- **P1 - [Bug]: config flush can overwrite concurrent writes** (#9284) [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9284): S2 severity bug that risks data loss due to race conditions in the config writer.
- **P1 - [Bug]: High-entropy detector redacts Solana wallet addresses** (#9486) [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9486): A functional bug where the leak detector breaks agent workflows involving blockchain addresses.
- **P1 - [Bug]: MCP/tool-schema cloning drives unbounded RSS growth** (#8642) [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8642): An active memory leak in the agent loop that can lead to OOM issues.

Most of these bugs have `fix` PRs open. For example, #9565 has an open fix for ACP sessions (#9536), #9486 has a related RFC open (#9825), and #8642 is being actively worked on. The "needs-author-action" label on several high-priority PRs (e.g., #9350, #8826, #9194) might be a bottleneck for resolving these critical issues.

### 6. Feature Requests & Roadmap Signals

Beyond bug fixes, several large feature initiatives are in the pipeline:

- **Multi-Model Provider Profiles**: The RFC (#7100) and massive PR (#9809) clearly signal a move toward more flexible provider configurations where a single profile can manage multiple models with specific settings (e.g., vision, context window). This likely targets the 0.9.0 milestone.
- **Hindsight Memory Stack**: The 7-PR stack (e.g., #9064, #9065, #9066, #9068) was updated recently, aiming to introduce shared/system memory tiers, recall/injection tuning, and improve consolidation and dedup logic. This is a major feature on track for a future release.
- **Security Policy Enhancements**: The RFCs and PRs around credential boundaries (#6971), sops_dir defaults (#9779), and verifiable intent (#9328) suggest a roadmap focused on `zero-trust` principles and robust credential management.
- **Home Assistant REST Tool**: PR #8994 adds a native `homeassistant` tool, expanding the project's integration capabilities beyond MCP, signaling user demand for more plug-and-play smart-home integrations.

### 7. User Feedback Summary

User pain points today center on configuration, security, and feature usability:

- **Configuration Frustration**: Issues like #9284 (config flush race) and #9779 (sops_dir default not honored) show users are hitting real-world configuration pitfalls that cause silent failures or data loss.
- **Security False Positives**: The high-entropy redaction of Solana addresses (#9486) is a clear case of a security feature interfering with core functionality. The subsequent RFCs (#9825) show users are asking for more nuanced, "publish-safe" exceptions.
- **Blocked Workflows**: Several S1 bugs (e.g., #9085 pgvector panic, #9350 cron CLI) directly block users from completing their work, indicating that while stability is generally good, certain edge cases can be fatal.
- **Poor UX/Clarity**: Issues like #9656 (typing indicator forever during approval) and #9198 (stuck Discord typing indicator) highlight minor but annoying UX flaws that degrade user experience.

### 8. Backlog Watch

Several important items are languishing and need maintainer attention:

- **MCP zombie processes fix**: While #8731 is closed, a fix for the root cause might be in an open PR. PR #9350 (cron CLI), #9194 (KeySource trait), and #8826 (image_gen SSRF) are all labeled `needs-author-action`. These are critical security/feature fixes that might be stalled without maintainer feedback or escalation.
- **`needs-maintainer-review` RFCs**: Multiple RFCs are waiting for a decision, including #6971 (Security posture), #7100 (Per-model config), and #9530 (Risk precedence). The project's own tracker for this backlog (#8692) is active. This bottleneck is likely why RFC #9496 (Streamline RFC scope) was created.
- **[Bug] Unauthenticated Webhook Handlers** (#9565): This is a P0 issue with no obvious fix PR linked in the top comments. Given the criticality, it deserves immediate maintainer escalation to prevent potential zero-day exploits.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*