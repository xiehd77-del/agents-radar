# OpenClaw Ecosystem Digest 2026-07-31

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-31 02:56 UTC

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

Based on the provided GitHub data for OpenClaw (github.com/openclaw/openclaw) for the period ending 2026-07-31, here is the project digest:

---

## OpenClaw Project Digest - 2026-07-31

### 1. Today's Overview

OpenClaw is in a phase of intense maintenance and hardening, evidenced by an extremely high volume of activity with 500 issues and 500 PRs updated in the last 24 hours. However, this activity is primarily focused on an extensive backlog of long-standing, complex bugs rather than new feature development or releases, as no new versions were published. The open issue tracker is dominated by critical (`P0`/`P1`) stability, security, and session-state integrity problems, many of which have been open for months and are awaiting maintainer review or product decisions. While the volume of merged/closed PRs (90) indicates ongoing progress, the sheer backlog suggests maintainers are juggling a heavy load of difficult architectural and reliability challenges.

### 2. Releases

No new releases were published in the last 24 hours. The latest version observed in the issues is `2026.6.1`.

### 3. Project Progress

Today saw 90 PRs merged or closed, signaling steady, if not rapid, progress on fixing bugs. Notable closed PRs include:

- **[PR #116625](https://github.com/openclaw/openclaw/pull/116625) (Closed):** Prevents cached plugin tools from being exposed after a user's authentication is removed, addressing a security boundary issue.
- **[PR #116628](https://github.com/openclaw/openclaw/pull/116628) (Closed):** A routine maintenance PR to refresh native app locale files.

Several new fix PRs were opened today, signaling immediate work on known issues:
- **[PR #116509](https://github.com/openclaw/openclaw/pull/116509):** Fixes a data-loss bug in the `edit` tool where fuzzy matching could rewrite unrelated bytes.
- **[PR #116635](https://github.com/openclaw/openclaw/pull/116635):** Fixes media-bearing replies losing code indentation and blank lines.
- **[PR #116636](https://github.com/openclaw/openclaw/pull/116636):** Ensures explicit `main` session aliases resolve to the configured session.

### 4. Community Hot Topics

The most active discussions highlight deep user frustration with core reliability, a desire for more granular control, and security-consciousness:

- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) - Text between tool calls leaks to messaging channels (39 comments):** A high-severity UX and privacy issue where internal agent processing text is being broadcast to users on messaging platforms. This is a top concern.
- **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) - Critical: Gateway Memory Leak (22 comments):** A `P0` issue describing a severe memory leak that causes the gateway's memory to grow from 350MB to 15.5GB and crash repeatedly. This indicates significant stability problems for long-running deployments.
- **[Issue #91009](https://github.com/openclaw/openclaw/issues/91009) - Codex hook relay spawns CPU-bound processes (18 comments):** A `P1` performance issue where the Codex integration spawns processes that consume 100%+ CPU, stalling the gateway.
- **[Issue #22438](https://github.com/openclaw/openclaw/issues/22438) - Tiered bootstrap file loading (17 comments):** A popular feature request to reduce token consumption by allowing users to control which files are loaded into context for different session types.
- **[Issue #39604](https://github.com/openclaw/openclaw/issues/39604) - Allow private network access for web_fetch (13 comments, 12 👍):** A heavily upvoted feature request for an opt-in setting to allow the `web_fetch` tool to access private network addresses, reflecting advanced user needs.

### 5. Bugs & Stability

The project is facing a significant number of critical bugs related to resource management, security, and session state. They are ranked by severity:

- **P0 (Critical):**
    - **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588):** Gateway Memory Leak causing OOM crashes.

- **P1 (High):**
    - **[Issue #91009](https://github.com/openclaw/openclaw/issues/91009):** Codex hook relay consuming 100% CPU and stalling the gateway.
    - **[Issue #29387](https://github.com/openclaw/openclaw/issues/29387):** Bootstrap files in `agentDir` are silently ignored, a security and configuration bug.
    - **[Issue #43996](https://github.com/openclaw/openclaw/issues/43996):** Sandbox containers exit immediately when `no-new-privileges` is applied.
    - **[Issue #69118](https://github.com/openclaw/openclaw/issues/69118):** Claude CLI sessions reset on every turn in group channels due to a hash drift.
    - **[Issue #102175](https://github.com/openclaw/openclaw/issues/102175):** Embedded prompt cache breaks across session boundaries, leading to inefficiency and potential context issues.

- **Fix PRs:** Notable PRs addressing bugs include [PR #116509](https://github.com/openclaw/openclaw/pull/116509) (edit tool data loss), [PR #113663](https://github.com/openclaw/openclaw/pull/113663) (xAI HTTP 426 error), and [PR #116244](https://github.com/openclaw/openclaw/pull/116244) (dashboard session exec config inheritance). Many of these are still "needs proof" or "ready for maintainer look", indicating a slow review pipeline.

### 6. Feature Requests & Roadmap Signals

The community is requesting significant architectural changes and granular controls, indicating a maturing user base with complex needs. The most prominent signals are:

- **Multi-Agent Orchestration:** Multiple issues (e.g., #43367, #35203, #27445, #22438) express a strong desire for more stable and powerful multi-agent workflows, including better routing, control, and cost governance. This is likely a major focus for future releases.
- **Advanced Networking & Customization:** Requests like [Issue #39604](https://github.com/openclaw/openclaw/issues/39604) (private network access) and [PR #114631](https://github.com/openclaw/openclaw/pull/114631) (rich setup controls) show users want to integrate OpenClaw into more complex environments.
- **Security & Governance:** Features like per-agent cost budgets ([Issue #42475](https://github.com/openclaw/openclaw/issues/42475)) and skill-defined setup hooks ([Issue #80213](https://github.com/openclaw/openclaw/issues/80213)) point toward a need for enterprise-grade control and lifecycle management.

### 7. User Feedback Summary

Real user sentiment is mixed, with frustration and concern being the dominant themes:

- **Frustration with Instability:** Users are reporting numerous "crash-loop," "data-loss," and "message-loss" issues, particularly in multi-agent and always-on configurations. The critical memory leak and CPU-bound processes severely impact user trust.
- **Concern Regarding Security:** Numerous `P1` security issues regarding data leaks (text leaks to channels, echo contamination) and authentication are causing users to worry about what their agents are exposing.
- **Desire for More Control:** Users are actively requesting more granular control over memory, context, costs, and network access, suggesting they are hitting the limits of the current configuration.
- **Positive Engagement:** The high number of upvotes on feature requests (e.g., #39604 with 12 👍) and detailed field reports (#41372) show a dedicated and sophisticated user base actively contributing to the project's direction.

### 8. Backlog Watch

A significant number of critical issues have been open for months and are tagged with `clawsweeper:no-new-fix-pr` and `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision`. These are at risk of stalling and require immediate maintainer attention:

- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (P1, open since 2026-02-24):** Text leaking between tool calls to messaging channels.
- **[Issue #29387](https://github.com/openclaw/openclaw/issues/29387) (P1, open since 2026-02-28):** Bootstrap files silently ignored.
- **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001) (P1, open since 2026-03-08):** Write tool lacks append mode, leading to data loss.
- **[Issue #91009](https://github.com/openclaw/openclaw/issues/91009) (P1, open since 2026-06-06):** Codex hook relay CPU-bound issue.
- **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) (P0, open since 2026-06-09):** Critical gateway memory leak.

The high volume of old `P1` issues suggests that the "clawsweeper" automation is correctly identifying problems, but the human review and decision-making process is a significant bottleneck for the project's health.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date: 2026-07-31**

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is characterized by intense maintenance activity, with core projects processing 100+ issues and PRs daily. The ecosystem is bifurcating into two architectural camps: **monolithic gateway platforms** (OpenClaw, Hermes, ZeroClaw) that prioritize channel integration and multi-agent orchestration, and **lightweight specialized agents** (NanoBot, PicoClaw, ZeptoClaw) optimized for resource-constrained deployments. Across all projects, **security hardening**, **configurability**, and **observability** dominate community discussions, while established platforms struggle with technical debt from rapid feature expansion. Notably, the ecosystem shows strong cross-pollination—projects like IronClaw and ZeroClaw are building migration tools specifically for OpenClaw/Hermes users, indicating a maturing market with recognized switching costs.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Release Status | Health Score (1-10) |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 90 | No new release (v2026.6.1 current) | 6.5 |
| **Hermes Agent** | 50 | 50 | 3 | **v0.19.1** (Jul 30) | 6.0 |
| **NanoBot** | 48 | 48 | 29 | No new release | 7.5 |
| **IronClaw** | 38 | 50 | 21 | No new release; release train stalled | 7.5 |
| **CoPaw** | 20 | 43 | 21 | v2.0.1 current | 7.5 |
| **ZeroClaw** | 14 | 50 | **0** | v0.8.3 current | 7.0 |
| **PicoClaw** | 7 | 17 | 5 | No new release (v0.3.1 current) | 8.0 |
| **NanoClaw** | 2 | 15 | 4 | No new release | 7.5 |
| **LobsterAI** | 0 | 9 | 7 | **2026.7.29** | 8.0 |
| **Moltis** | 2 | 4 | 1 | No new release | 8.0 |
| **ZeptoClaw** | 0 | 1 (active) | 0 | No new release | 8.5 |
| **NullClaw** | 0 | 0 | 0 | N/A | N/A |
| **TinyClaw** | 0 | 0 | 0 | N/A | N/A |

**Key observations:**
- **OpenClaw** shows the highest raw activity (500 issues/PRs) but struggles with a massive backlog of critical bugs, including a P0 memory leak.
- **Hermes Agent** has a concerning merge bottleneck (3 merges vs 47 open PRs) despite a fresh patch release.
- **ZeptoClaw** and **LobsterAI** demonstrate the healthiest balance: low bug volume, focused PR queues, and deliberate release cadence.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Dominant community size**: 500 issues/PRs daily is 10x the nearest competitor (Hermes at 50), indicating unmatched user adoption and contributor engagement.
- **Broadest channel integration**: WhatsApp, Telegram, Slack, messaging platforms with audio/media support.
- **Active security fixes**: Multiple PRs addressing auth boundary issues, plugin tool exposure, and data-loss bugs.

### Technical Approach Differences
- **Gateway-centric architecture** with session-state integrity as a core concern (vs. NanoBot's SQLite-persistent approach or IronClaw's crate-family modularization).
- **Plugin/tool ecosystem** with bootstrap file loading and tiered context management—more granular than Hermes' bundled plugins.
- **Multi-agent orchestration** is a stated roadmap priority, similar to ZeroClaw's delegation boundaries but more mature.

### Community Size Comparison
| Metric | OpenClaw | Hermes | ZeroClaw | NanoBot |
|---|---|---|---|---|
| Daily Issue Volume | 500 | 50 | 14 | 48 |
| Community Sentiment | Frustrated (stability/security) | Config fragility | Local-first, engaged | Mobile-first, responsive |
| Contributor Access | High (500 PRs) | Moderate (50 PRs) | Low-moderate (50 PRs) | Moderate (48 PRs) |

**Assessment**: OpenClaw is the ecosystem's **community anchor**, but its massive backlog (P0/P1 issues open for months) poses a **retention risk**—users may migrate to more stable alternatives like IronClaw or PicoClaw if reliability issues persist.

---

## 4. Shared Technical Focus Areas

The following requirements emerge **independently** across multiple projects, indicating strong market demand:

| Technical Focus | Projects | Specific Needs |
|---|---|---|
| **Session/Memory Isolation** | OpenClaw, IronClaw, Hermes, ZeroClaw | Prevent cross-user memory leaks; separate conversation history from curated long-term memory; clean session boundaries |
| **OAuth 2.1 + MCP Server Support** | PicoClaw, ZeroClaw, Hermes, CoPaw | Dashboard-driven OAuth-protected MCP server configuration; non-technical user flows |
| **Multi-Agent Orchestration & Governance** | OpenClaw, ZeroClaw, IronClaw, Hermes | Per-agent cost budgets, delegation boundaries, approval flows, stable routing |
| **Configuration Fragility** | Hermes, ZeroClaw, OpenClaw | Silent key drops, misresolved aliases, unreproducible builds |
| **Observability & Instrumentation** | IronClaw, ZeroClaw, Moltis | OTel correlation, Langfuse export, cross-turn tracing |
| **Local/Edge Model Support** | ZeroClaw, CoPaw, OpenClaw | Prompt-budget contracts, `local_small` profiles, compact injection modes |
| **Resource Lifecycle Management** | ZeptoClaw, NanoClaw, OpenClaw | Process-tree reaping, secret scrubbing, orphan container cleanup |
| **Channel Feature Parity** | Moltis, PicoClaw, NanoClaw, Hermes | Interactive buttons (Slack Block Kit, Telegram inline), session management in chat UIs |

**Priority recommendations**: Cross-project consensus suggests **session/memory isolation** and **OAuth for MCP servers** are the highest-value investments—essential for enterprise adoption and user trust.

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architecture |
|---|---|---|---|
| **OpenClaw** | Multi-agent gateway, channel integration, plugin ecosystem | Developers, power users | Monolithic gateway, extensive tool/plugin system |
| **Hermes Agent** | Provider flexibility, desktop parity, skills system | Enterprise, multi-provider users | Rollup release cadence (1,000+ PRs), heavy config normalizer |
| **NanoBot** | Mobile-first (Termux), WebUI polish, platform reliability | Mobile developers, hobbyists | SQLite-persistent, lightweight runner |
| **IronClaw** | Ten-family crate architecture, skill reliability, E2E testing | Production deployments, security-conscious teams | Modular Rust crates, hermetic testing focus |
| **CoPaw** | Computer Use desktop automation, memory compression, MCP tooling | Desktop automation users | Native GUI + sandboxed execution |
| **ZeroClaw** | Local-first model support, OpenAI-compatible adapter, runtime profiles | Local-model enthusiasts, privacy-focused | RFC-driven, source-inspection audits |
| **PicoClaw** | Cost-efficient ($10 hardware, <10MB RAM), lightweight gateway | Tinkerers, edge deployments | Go, minimal resource footprint |
| **NanoClaw** | Container/image hardening, scheduled tasks, v2 skills migration | Self-hosters, infrastructure-focused | Container-optimized, registry-driven skills |
| **LobsterAI** | Enterprise entitlements, co-work features, Windows installer reliability | Enterprise teams, Chinese ecosystem | Account-isolated auth, iOS/desktop apps |
| **Moltis** | Channel interactivity (Slack/Telegram buttons), security boundaries | Interactive channel users | Channel-first, operators-list access control |
| **ZeptoClaw** | Subprocess isolation, secret scrubbing, security hardening | Security-conscious small deployments | Minimal surface, zero open issues |

**Key takeaway**: **OpenClaw** and **Hermes** compete for the same "comprehensive assistant" space, while **PicoClaw** and **ZeptoClaw** emphasize efficiency and security—a different value proposition. **IronClaw** is positioning as the enterprise-hardened successor, with migration tools explicitly targeting OpenClaw/Hermes users.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, High Risk)
| Project | Signal | Risk |
|---|---|---|
| **OpenClaw** | 500 issues/PRs daily | Backlog bottleneck; P0/P1 issues aging |
| **Hermes Agent** | v0.19.1 rollup, 47 open PRs | Merge limiting; config regressions |
| **ZeroClaw** | 20 new issues, 50 open PRs, security focus | Zero merges in 24h; RFC overload |
| **CoPaw** | 21 merges/24h, active MCP fixes | Performance regression (#6307) unresolved |

### Tier 2: Stabilizing (Controlled Growth)
| Project | Signal | Confidence |
|---|---|---|
| **NanoBot** | SQLite migration, CI stabilization | High—responsive to Termux/mobile issues |
| **IronClaw** | Target-architecture program, E2E coverage | High—structured restructuring |
| **NanoClaw** | Image hardening, v2 skills enforcement | High—core team responsive |
| **LobsterAI** | Enterprise isolation, new release | High—polished release cadence |

### Tier 3: Mature/Quiet (Low Churn)
| Project | Signal | Confidence |
|---|---|---|
| **PicoClaw** | 5 merges/24h, dependabot churn | High—stable niche |
| **Moltis** | Deep review cycles, security-first | High—small active community |
| **ZeptoClaw** | Zero open issues, single active PR | Very high—mature codebase |

**Critical bottleneck**: **Review/merge capacity** is the universal constraint—projects with high submission volume (OpenClaw, Hermes, ZeroClaw) risk losing contributors if PRs stall, while smaller projects (ZeptoClaw, PicoClaw) demonstrate that focused queues yield faster innovation.

---

## 7. Trend Signals

1. **From "Chatbot" to "Composable Infrastructure"**: Users demand OAuth-protected MCP servers, session export/import, observability exports—treating agents as part of a larger stack, not standalone tools.

2. **Local-First is a Real Segment**: ZeroClaw's `local_small` profile (7 comments, 👍 2) and CoPaw's performance regression (#6307) show a vocal user base that prioritizes hardware constraints and data sovereignty over cloud convenience.

3. **Security is the New Differentiator**: ZeptoClaw's secret scrubbing, OpenClaw's auth boundary fixes, ZeroClaw's webhook fail-closed, and Moltis's operators-list all signal that security isn't optional—it's a top adoption driver.

4. **Verification/Trust Gap**: Issues like Hermes' #54722 (agent claims success on failed evidence) and IronClaw's recoverability epic (#6284) indicate an industry-wide push for **provable correctness**—not just functional output.

5. **Enterprise Migration Pathways**: IronClaw's migration tool request (#6939) and OpenClaw's global adoption indicate the market is **consolidating**—users will choose platforms with clear upgrade paths, not just features.

6. **Desktop/Channel Parity is Table Stakes**: Hermes' desktop lag (#65601) and PicoClaw's session management in Telegram (#3307) both highlight that users expect **consistency across surfaces**—the "app" is no longer just CLI or just GUI.

7. **Performance Regressions Erode Trust**: CoPaw's 2s overhead (#6307) and NanoBot's Telegram stall (#5171) show that even minor degradations cause vocal backlash; performance budgets should be enforced in CI.

---

## Conclusion

The ecosystem is healthy but **fragmented by scale**: a few dominant platforms (OpenClaw, Hermes) struggle with pipeline bottlenecks while smaller projects (ZeptoClaw, PicoClaw, Moltis) demonstrate the benefits of focused scope. For developers choosing a platform: **OpenClaw offers the richest feature set but demands tolerance for instability**; **IronClaw and ZeroClaw are the most technically promising for production**; **ZeptoClaw and PicoClaw are ideal for constrained or security-critical environments**. Cross-project investments in memory isolation, OAuth for MCP, and policy-driven governance will define the next wave of platform leadership.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Based on the GitHub activity data for NanoBot (HKUDS/nanobot) on 2026-07-31, here is the project digest.

---

## NanoBot Project Digest — 2026-07-31

### 1. Today's Overview

NanoBot is in a phase of high-intensity bug fixing and internal refactoring. The core team has pushed forward significant improvements in WebUI interactions (e.g., Quick Chat, sidebar UX) and reliability (CI/CD, cron state preservation). While there is a storm of activity (*48 PRs updated*), a notable portion of the backlog is aging with **conflict** tags, indicating drift between open contributions and the main branch. Community feedback centers heavily on platform-specific bugs (Termux, Telegram polling) and robustness issues (audio output, token limits). The recent focus appears to be stabilizing the core architecture (moving to SQLite) while sanitizing the codebase against edge-case crashes.

### 2. Releases

**None.** There were no new releases published within the last 24 hours.

### 3. Project Progress

The project saw a high volume of merged/closed PRs (29), focusing on immediate fixes and feature rollouts.

- **WebUI/UX:** The team streamlined the frontend by merging [PR #5181](https://github.com/HKUDS/nanobot/pull/5181) and [PR #5182](https://github.com/HKUDS/nanobot/pull/5182) to add "Persistent Quick Chat" and unify sidebar selection logic. A follow-up, [PR #5184](https://github.com/HKUDS/nanobot/pull/5184), is open to add "Temporary Chat".
- **AI Logic:** The runner now correctly handles `finish_reason='length'` when tool calls are present, routing it to length recovery instead of an empty-response retry ([PR #5136](https://github.com/HKUDS/nanobot/pull/5136)).
- **Context & Memory:** [PR #5172](https://github.com/HKUDS/nanobot/pull/5172) was merged to preserve and replay the complete Responses output-item chain (including encrypted reasoning), improving multi-turn context compaction.
- **Core Refactor:** The team merged [PR #5173](https://github.com/HKUDS/nanobot/pull/5173), migrating session storage from JSONL to SQLite, structuring `sessions.db` as the primary runtime store while retaining JSONL files as rollback backups.
- **CI/CD:** [PR #5145](https://github.com/HKUDS/nanobot/pull/5145) was merged to stabilize the CI pipeline, replacing timing-dependent tests with robust handshakes and batching dependency installs.

### 4. Community Hot Topics

The most active discussions revolve around migration and specific bug triage.

- **[Issue #5149: "no audio ?"](https://github.com/HKUDS/nanobot/issues/5149)** (3 comments): Users are reporting that WhatsApp audio files received by the bot are not being sent out. This is a high-utility bug for users relying on media-rich interactions.
- **[Issue #5185: "Nanobot returning tool calls code in responses"](https://github.com/HKUDS/nanobot/issues/5185)** (1 comment): A user reports seeing raw tool-call code injected into the final chat response, breaking the conversational flow. This indicates a possible serialization or rendering bug in the UI/Agent output.
- **Backlog Conflicts:** Several older features sit on the "conflict" list, meaning they need rebasing or resolution. This includes `Session export/import` ([PR #1565](https://github.com/HKUDS/nanobot/pull/1565)) and `Skill status command` ([PR #1319](https://github.com/HKUDS/nanobot/pull/1319)). The community demand for these is high, but they are stalled.

### 5. Bugs & Stability

Several critical bugs have surfaced recently, with fixes in progress:

- **P0 / Critical: Silent Telegram Polling Stall ([Issue #5171](https://github.com/HKUDS/nanobot/issues/5171)).** After a proxy glitch, the bot permanently stops receiving messages without logging an error. This is a severe availability issue. **Fix:** [PR #5156](https://github.com/HKUDS/nanobot/pull/5156) exists to add recovery mechanisms.
- **P1 / High: Termux Incompatibility ([Issue #5187](https://github.com/HKUDS/nanobot/issues/5187)).** The bot fails to start on Termux due to missing system timezone data. **Fix:** [PR #5189](https://github.com/HKUDS/nanobot/pull/5189) patches this by installing the `tzdata` package as a fallback.
- **P1 / High: Token Limit Misrouting ([Issue #5133](https://github.com/HKUDS/nanobot/issues/5133)).** When a response hits the max token length with a truncated tool call, the bot erroneously triggers an empty-response retry. **Status:** *Closed* (Fixed via PR #5136).
- **P2 / Medium: Tool Call Code Leak ([Issue #5185](https://github.com/HKUDS/nanobot/issues/5185)).** Unwanted tool-call code appears in output. **Status:** Open, under triage.

### 6. Feature Requests & Roadmap Signals

The roadmap is moving towards deeper customization and infrastructure stability.

- **Provider Flexibility:** Users are pushing for custom Telegram API endpoints ([PR #4919](https://github.com/HKUDS/nanobot/pull/4919)) to support self-hosted gateways, a clear signal of enterprise/secure deployment needs.
- **Session Management:** [PR #1565](https://github.com/HKUDS/nanobot/pull/1565) wants to add session export/import/search/stats—indicative of advanced users treating NanoBot as a data layer.
- **WebUI Enhancements:** The Quick Chat and Temporary Chat features ([PR #5181](https://github.com/HKUDS/nanobot/pull/5181), [#5184](https://github.com/HKUDS/nanobot/pull/5184)) suggest a shift toward making the WebUI a more polished, standalone messaging product.
- **Configuration Sanity:** The fix for timezone data on minimal hosts ([PR #5189](https://github.com/HKUDS/nanobot/pull/5189)) suggests a push to make the tool "just work" across all environments, including mobile coding apps.

### 7. User Feedback Summary

Users are pushing NanoBot to act as a production-grade service but are facing friction with infrastructure edges. The core dissatisfaction stems from stability under adverse network conditions (proxies, mobile data) rather than the core AI logic. Specific pain points include:
- **"It broke silently"** (Telegram polling stall) is the highest friction point.
- **"It doesn't work here"** (Termux timezone issues) highlights a desire for broader OS support.
- **"It stopped listening"** (Audio issues on WhatsApp) indicates a gap in multi-modal handling.
- **Positive Signals:** The merge of SQLite storage and persistent Quick Chat suggests the maintainers are listening to "speed" and "interface" feedback, aiming for a snappier and more responsive dashboard.

### 8. Backlog Watch

Maintainers should prioritize resolving merge conflicts on high-value, long-standing PRs or explicitly closing them if they are no longer aligned with the roadmap.

- **[PR #1656: fix(validation): handle None value in string schema validation](https://github.com/HKUDS/nanobot/pull/1656)** (Open since March 2026). This is a simple, likely critical fix for crash prevention that is gathering dust due to conflicts.
- **[PR #1565: feat(session): add session export, import, search and stats commands](https://github.com/HKUDS/nanobot/pull/1565)** (Open since March 2026). High user demand for data portability. Needs rebasing.
- **[PR #1319: feat: add skill status command](https://github.com/HKUDS/nanobot/pull/1319)** (Open since February 2026). A UX tool that would help users diagnose why installed skills fail. Needs maintainer review.
- **[Issue #3106: "I completed the tool steps but couldn't produce a final answer"](https://github.com/HKUDS/nanobot/issues/3106)** (Open since April 2026). An unresolved AI loop bug affecting specific models (GPT); this has bounced around for months and deserves either a fix or a workaround guide.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-31

## 1. Today's Overview

Hermes Agent is in a period of sustained high activity: **50 issues** and **50 PRs** were updated in the last 24 hours, with **47 PRs still open** and only **3 merged/closed** — indicating a heavy review pipeline that may be outpacing merge throughput. Notably, **~20 new issues were filed today** (including #75130, #75129, #75137, #75142, #75144, #75146, #75147, #75149), signaling healthy community engagement but also a growing triage burden. The most telling signal is the **high concentration of configuration, credential, and compatibility bugs** hitting users immediately after the v0.19.1 patch release (July 30), suggesting the rollup may have introduced regressions or surfaced latent issues now receiving attention. A single new release (v0.19.1) was cut yesterday, but **zero PRs were merged today**, which is notable — either maintainers are focused on review, or merge capacity is a bottleneck.

---

## 2. Releases

### v2026.7.30 — Hermes Agent v0.19.1 (Patch)

**Released:** July 30, 2026

This patch release **rolls up ~1,000+ PRs merged since v0.19.0** into a stable tagged release for downstream consumers (Docker images, hosted deployments, fresh installs).

**Key Points:**
- **No breaking changes** documented — this is a stabilization rollup.
- **Adds install-path fixes** for `hermes-agent` and `hermes-acp` launchers on PATH (PR #74895).
- **No migration notes** provided; upgrade path is drop-in replacement.

**Recommendation:** Users on v0.19.0 should upgrade to pick up ~1,000 fixes accumulated over ~10 days. However, users on custom providers and multi-provider setups should watch for the configuration and credential issues detailed in Section 5, as several may be regressions from the rollup.

---

## 3. Project Progress

**Only 3 PRs closed/merged in the last 24h** (all listed as merged/closed, but details are sparse). Based on the open-PR pipeline, the following areas have active fixes in flight:

### Active Fixes Advancing (in review, not yet merged):

| Area | PR | Status |
|------|-----|--------|
| **Install/Update** | [#74895](https://github.com/NousResearch/hermes-agent/pull/74895) — expose `hermes-agent` and `hermes-acp` launchers on PATH | P1, open |
| **Update safety** | [#75154](https://github.com/NousResearch/hermes-agent/pull/75154) — preserve local-only commits instead of `git reset --hard` discarding them | Open |
| **Windows stability** | [#74904](https://github.com/NousResearch/hermes-agent/pull/74904) — handle Windows reserved-device-name files during autostash | P2, open |
| **MCP reliability** | [#75149](https://github.com/NousResearch/hermes-agent/pull/75149) — normalize stdio args when config writers serialize as JSON scalar | P2, open |
| **Anthropic auth** | [#75146](https://github.com/NousResearch/hermes-agent/pull/75146) — disambiguate Claude Code keychain lookup by account | P2, open |
| **Security redaction** | [#55467](https://github.com/NousResearch/hermes-agent/pull/55467) — add Google OAuth (`ya29.`/`1//`) token prefixes to redaction | P3, open |
| **WeChat/WeCom** | [#70892](https://github.com/NousResearch/hermes-agent/pull/70892) — add POST `/api/weixin/send` endpoint; [#65688](https://github.com/NousResearch/hermes-agent/pull/65688) — stale session detection | P2, open |

### Notable: **Zero merges today** — review bottleneck is a concern.

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Title | Comments | Signal |
|-------|-------|----------|--------|
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | Custom provider `max_output_tokens` silently dropped by config.py normalizer | 9 | **Highest engagement.** Despite being filed May 7, still unresolved after ~3 months. Core config bug affecting custom providers. |
| [#13265](https://github.com/NousResearch/hermes-agent/issues/13265) | Skills system five architectural defects (no quality control) | 4 | 7 👍 — community strongly agrees. Skills system is a strategic priority. |
| [#48731](https://github.com/NousResearch/hermes-agent/issues/48731) | `/model` switch prefers native provider over current reseller | 4 | Provider selection logic bugs affect multi-provider users. |
| [#57283](https://github.com/NousResearch/hermes-agent/issues/57283) | Desktop app: MoA dispatches to OpenRouter with preset name as model ID | 4 | Two-layer bug (backend + desktop) — affects desktop users. |
| [#38349](https://github.com/NousResearch/hermes-agent/issues/38349) | Can't start Docker image after update (s6 init / podman) | 3 | **P1** — Docker compatibility regression. |

### Analysis

The community is converging on **three pain themes**:
1. **Configuration normalization bugs** (#21498, #48731, #55153, #75091) — config keys silently dropped or misresolved, affecting custom providers and multi-provider setups.
2. **Desktop app parity gaps** (#57283, #65601, #41531) — desktop lags CLI in features and has session-isolation bugs.
3. **Skills system quality** (#13265, #75130) — users want better governance over what becomes a Skill.

---

## 5. Bugs & Stability

### P1 — Critical

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#38349](https://github.com/NousResearch/hermes-agent/issues/38349) | **Docker image broken** — s6 init fails to grab PID 1 under podman; users cannot start after recent update. **Affects all Docker users.** | No fix PR yet |

### P2 — High

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#74879](https://github.com/NousResearch/hermes-agent/issues/74879) | **Quota exhaustion reported as "auth failed"** — auth pattern tested before rate-limit pattern → misleading error | No fix PR |
| [#75091](https://github.com/NousResearch/hermes-agent/issues/75091) | **Provider-scoped `extra_body` leaks onto fallback provider** — baked once at init, never re-resolved on failover | No fix PR |
| [#65601](https://github.com/NousResearch/hermes-agent/issues/65601) | **Desktop new session reuses existing context** — no session isolation; `/new` doesn't bypass | No fix PR |
| [#63357](https://github.com/NousResearch/hermes-agent/issues/63357) | **computer_use on Windows**: blank "capture failed: " after ~30s timeout; `raise_window=True` silent no-op | No fix PR |
| [#64573](https://github.com/NousResearch/hermes-agent/issues/64573) | **SQLite lock** leaves cron sessions as `source=unknown`, exposed in user session lists | No fix PR |
| [#16979](https://github.com/NousResearch/hermes-agent/issues/16979) | **QQ Bot**: file attachments silently dropped when download fails | No fix PR |

### P3 — Medium

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#54722](https://github.com/NousResearch/hermes-agent/issues/54722) | Agent reports "verified success" after **failed/unverified tool evidence** | No |
| [#54214](https://github.com/NousResearch/hermes-agent/issues/54214) | Pet sprites blurry — LANCZOS scaling destroys pixel art | No |
| [#54753](https://github.com/NousResearch/hermes-agent/issues/54753) | Mattermost REST helpers read response bodies **without size cap** | No |
| [#55128](https://github.com/NousResearch/hermes-agent/issues/55128) | Image-generation providers buffer **unbounded JSON responses** | No |
| [#54009](https://github.com/NousResearch/hermes-agent/issues/54009) | Platform plugins **silently disabled** after migration to bundled plugins | No |

**Assessment:** Several P2 bugs are **compounding risks** — credential leaks, session-state corruption, and unbounded memory reads. The #54722 issue (agent claiming success on failed evidence) is a **trust/verification risk** that should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

### High Community Interest (by 👍)

| Issue | Request | 👍 | Likely in next version? |
|-------|---------|----|-------------------------|
| [#13265](https://github.com/NousResearch/hermes-agent/issues/13265) | Skills system quality control (validation, metabolism, retirement) | 7 | **Yes** — architectural, high-signal |
| [#49806](https://github.com/NousResearch/hermes-agent/issues/49806) | Telegram live-location background handling | 1 | Maybe |
| [#41531](https://github.com/NousResearch/hermes-agent/issues/41531) | TUI/Desktop support for `display.timestamps` | 1 | Likely (parity) |
| [#59260](https://github.com/NousResearch/hermes-agent/issues/59260) | Plugin tool approval prompts over gateway bridge (headless) | 1 | **Yes** — security-relevant |
| [#26109](https://github.com/NousResearch/hermes-agent/issues/26109) | `post_assistant_turn` plugin hook (bot-to-bot mirroring) | 0 | Possible — plugin ecosystem expansion |
| [#52264](https://github.com/NousResearch/hermes-agent/issues/52264) | HTTP APIs for MCP/Skills hot-reload | 0 | **Possible** — enterprise integration demand |
| [#54011](https://github.com/NousResearch/hermes-agent/issues/54011) | Per-credential `base_url` override for multi-account same-provider rotation | 0 | **Yes** — Cloudflare Workers use case is compelling |

### Prediction for v0.20.0:

1. **Skills governance** — quality validation and proposal-queue fixes (#13265, #75130)
2. **Provider configuration normalization overhaul** — fixes for #21498, #48731, #75091, #55153
3. **Headless approval flow** for gated plugins (#59260)
4. **Credential pool enhancements** (#54011 — per-credential `base_url`)

---

## 7. User Feedback Summary

### Recurring Pain Points

1. **Configuration is fragile.** Multiple reports of "silently dropped," "silently disabled," or "leaks onto fallback" config keys — users cannot trust that their `config.yaml` is honored. This is the **#1 theme** across both issues and PRs.

2. **Desktop app lags CLI.** Session isolation (#65601), MoA dispatch (#57283), timestamp support (#41531), and copy/selection on mobile (#50075) — desktop users feel like second-class citizens.

3. **Misleading error messages.** Quota reported as auth failure (#74879), silent file drops on QQ (#16979), blank "capture failed" on Windows (#63357) — errors don't guide users to correct actions.

4. **Update process anxiety.** Docker image broken (#38349), local commits discarded on update (#75154), Windows autostash failures (#74904) — users are scared to update.

5. **Verification trust gap.** #54722 (agent claims success on failed tool evidence) — a small but vocal set of users are concerned about the agent's factual reliability.

### Positive Signals

- Active community **submitting fix PRs** (19 open fix PRs today) — healthy contributor pipeline.
- Security-focused contributors stepping up (redaction PR #55467, dependency patching #75037) — community cares about security posture.

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Filed | Age | Why It Matters |
|-------|-------|-----|----------------|
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | May 7, 2026 | **~3 months** | Most-commented issue; config normalization bug affecting all custom-provider users. 0 maintainer response visible. |
| [#13265](https://github.com/NousResearch/hermes-agent/issues/13265) | Apr 21, 2026 | **~3.5 months** | 7 👍; architectural critique of Skills system. Filed as "bug" but is a design roadmap item. |
| [#38349](https://github.com/NousResearch/hermes-agent/issues/38349) | Jun 3, 2026 | **~2 months** | **P1 Docker regression** — users cannot start the agent. No fix PR. This blocks all Docker-based deployments. |
| [#16979](https://github.com/NousResearch/hermes-agent/issues/16979) | Apr 28, 2026 | **~3 months** | QQ Bot silently drops attachments — silent data loss. |
| [#27653](https://github.com/NousResearch/hermes-agent/issues/27653) | May 17, 2026 | **~2.5 months** | `/history` only in CLI, not gateway platforms — feature parity request. |

### Backlog Health Assessment

**Negative:** The #1 most-commented issue (#21498) has been open for **3 months** with no visible fix — this is a **community trust risk**. The P1 Docker bug (#38349) is 2 months old and blocks an entire install path.

**Positive:** Many issues filed today (#75130, #75091, #75129) have **same-day fix PRs** (#75129, #75137, #75149) — the maintainers and community are responsive to new reports.

### Maintainer Action Recommendation

1. **Immediately** triage #38349 (Docker/P1) — either fix or document a workaround.
2. **This week** — address #21498 (config normalization) — it's the top community pain point.
3. **Acknowledge** #13265 (Skills architecture) — even a roadmap comment would defuse frustration.
4. **Monitor** merge throughput — 47 open PRs with 0 merged today suggests a bottleneck.

---

*Data source: GitHub (NousResearch/hermes-agent), snapshot taken 2026-07-31.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-31

## 1. Today's Overview

Activity is moderate-to-high, with 7 issues and 17 PRs updated in the last 24 hours. The project shows a healthy open-source cadence: 3 issues were closed, 5 PRs were merged/closed, and 12 PRs remain open for review. No new releases were published this period. The dependency bot (dependabot) continues to drive steady churn in the PR queue, while community feature requests around OAuth 2.1 for MCP servers are surfacing repeatedly, indicating strong user demand for that capability. The maintainer team appears responsive, with several stale issues and PRs being resolved.

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent known version referenced in issues is **PicoClaw 0.3.1** (from git commit `2cf030d2`), which remains current.

## 3. Project Progress

**Merged/Closed PRs (5):**

- **#3163** *(merged)* — **feat(bedrock): leverage Converse prompt caching via cache points** by loafoe. This is a significant cost-optimization feature: it adds cache points in `system`, `tools`, and `messages` for AWS Bedrock's Converse API, reducing read costs to ~0.1× input and write costs at standard rates for cached prefixes. This is a major win for AWS deployers with long conversations.

- **#3290** *(closed)* — **build(deps): bump aws-sdk-go-v2/config to 1.32.31** (dependabot). Dependency bump, superseded by newer #3306.

- **#3288** *(closed)* — **build(deps): bump aws-sdk-go-v2/service/bedrockruntime to 1.56.0** (dependabot). Superseded by newer #3305.

- **#3262** *(closed)* — **build(deps): bump actions/setup-go from 6 to 7** (dependabot). CI tooling update.

- **#3263** *(closed)* — **build(deps): bump actions/setup-node from 6 to 7** (dependabot). CI tooling update.

**Notably, three bugs/features were closed as issues today:**
- **#2546** (closed) — OAuth 2.1 + PKCE for MCP servers (feature, marked stale — likely deprioritized or folded into #3302)
- **#3258** (closed) — Process Hook `before_tool` modify bug: decision field discarded, args misparsed due to deserialization defect
- **#3257** (closed) — Stateless/no-history mode for gateway sessions feature

## 4. Community Hot Topics

- **Issue #3308** — "[Code Review] Concurrency hazards, goroutine leaks, and memory/speed optimizations in SeaHorse, Channel Manager, and Hooks" by Rehanasharmin. *New today, 0 comments yet.* This is a community-driven code audit touching core infrastructure. The reviewer is clearly an experienced Go engineer. High-value review that should be triaged by maintainers — it could surface real stability issues.

- **Issue #2546** — "[Feature] Support OAuth 2.1 + PKCE for MCP servers, addable from dashboard" by rameshnetsys. *6 comments, closed (stale).* The most-commented issue in the window. The use case is strong: non-technical users want to add OAuth-protected MCP servers via a dashboard URL form (like Claude.ai's "Add connector"). Note: this was closed as stale on 2026-07-30, *but* issue **#3302** was opened the same day re-requesting the same feature — suggesting community demand is persistent and the feature is not dead.

- **PR #3222** — "refactor(deltachat): cleanup implementation, documentation -200LOC" by trufae. *Open for ~4 weeks.* Simplifies the DeltaChat integration by removing legacy features and password-based email config in favor of JSON-RPC secrets. Slow to merge, may need a maintainer review nudge.

- **PR #3271** — "chore(providers): update default model names to 2026-07 latest" by LeaderOnePro. Updates model IDs across 9 providers (e.g., OpenAI `gpt-5.6-terra`/`luna`/`sol`, Anthropic latest). This is the kind of routine but critical housekeeping that keeps PicoClaw current with the fast-moving model landscape. Needs review and merge.

## 5. Bugs & Stability

**No new critical bugs were reported today.** The two closed bugs were resolved prior to this window:

- **#3258** (closed, severity: medium) — Hook `before_tool` deserialization defect: `decision` field was discarded and args misparsed. This could cause incorrect tool-call decisions. Fix appears to have landed (closed today).

- **#3308** — Code review raising concerns about **concurrency hazards, goroutine leaks, and memory/speed**. This is a *pending audit*, not a confirmed bug, but the reviewer's expertise suggests the maintainers should escalate this. Potential severity: medium-to-high if the leak claims hold.

- **PR #3279** (open) — "fix(seahorse): prevent tool-call format leakage into LLM summaries" by MrTreasure. This fixes a real bug class where tool-call format strings leak into user-visible messages. It references a "same symptom" from a prior fix — suggesting this is a recurring pattern. Open for 10 days, needs review/merge.

- **PR #3283** (open) — "fix(dingtalk): support picture/image message inbound" — feature-fix for DingTalk channel image handling, including token caching.

## 6. Feature Requests & Roadmap Signals

**Strong signal — OAuth 2.1 for MCP servers:** 
- **#3302** (open, new today) — "Support OAuth 2.1 for MCP servers" (referencing #2546). The re-filing of a recently-closed issue indicates this is a *must-have* for a segment of users. The roadmap alignment checkbox was marked as "Nice-to-Have," but the duplicate filing suggests it may deserve promotion to core.

- **#3307** (open, new today) — "session list/switch command for Telegram (and other chat channels)" — users want parity between the Web UI's session management and chat-channel UX. This is a UX parity gap that will likely gain traction.

- **#3257** (closed) — Stateless/no-history mode for gateway sessions — closed, presumably not on the immediate roadmap.

- **PR #3200** (open, 30 days) — "feat(models): add configurable default fallback chain" — a long-pending UI/backend feature for model fallback configuration. This has been open for a month; if merged, it's a strong quality-of-life improvement.

- **PR #3270** (open) — "feat: add DashScope TTS provider and WeChat audio file sending" — multimodal outreach, adds Alibaba Cloud TTS and WeChat voice support. Region-specific but valuable for the Chinese ecosystem.

**Prediction for next minor release:** Expect merging of #3270 (DashScope TTS), #3283 (DingTalk images), and #3279 (seahorse fix), along with the model-name refresh in #3271. OAuth 2.1 (#3302) may land in the release after, as a headline feature.

## 7. User Feedback Summary

- **Positive sentiment** — The community respects the project's constraints (native Go, runs on $10 hardware, <10MB RAM, sub-second boot) as noted in #3308's opening praise. The active contribution of third-party PRs (DingTalk, DashScope, WeChat) shows strong external engagement.

- **Pain point: MCP server setup friction.** Repeated requests (#2546, #3302) for OAuth-protected MCP support indicate that users on cloud VMs with public URLs need a no-shell, dashboard-driven flow. The current state forces technical workarounds.

- **Pain point: chat-channel feature disparity.** Web UI has session management; Telegram doesn't (#3307). Users increasingly use PicoClaw as a gateway/AI assistant in chat apps, not just CLI, and expect parity.

- **Quality concern:** The seahorse bug (#3279) and hook bug (#3258) suggest occasional brittleness in tool-call handling and summarization paths. Users are catching these and contributing fixes, which is healthy.

- **Overall:** Project is viewed as powerful and cost-effective, with some rough edges in edge-case channel integrations and a growing appetite for enterprise-grade OAuth support.

## 8. Backlog Watch

These items are at risk of being forgotten and need maintainer triage:

- **PR #3222** (deltachat refactor, -200 LOC) — open since 2026-07-03, stale-flagged. A clean simplification that also removes a security concern (password-based email config). Should be reviewed; it's low-risk and improves the codebase.

- **PR #3200** (model fallback chain) — open since 2026-07-01, stale-flagged. Inactive for 30 days. This is a valuable UX feature with a clear implementation. Either assign a reviewer or communicate status.

- **PR #3271** (default model names refresh) — open 10 days. As model names change rapidly, this PR becomes out-of-date quickly. Merge or close soon to avoid churn.

- **Issue #3308** (concurrency/leak code review) — new, 0 comments. Should be picked up or acknowledged quickly; high-quality community reviews lose momentum if left silent.

- **Issue #3287** (IRC long-message coalescing) — open, stale. Minor channel feature, but for IRC users this is fundamental correctness. Low effort, worth fast-tracking.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**2026-07-31**

---

## 1. Today's Overview

NanoClaw shows a **high-velocity, healthy development cycle** with 15 PRs updated in the last 24 hours (4 merged/closed, 11 active) and 2 new issues opened. The core team is actively shipping infrastructure hardening (image repinning, layer optimization) and fixing critical runtime bugs (container duplication, message ID handling, scheduled task timing). Community contribution remains strong with external PRs like #3157 (symlink handling) and #3124 (MCP server reporting) moving through the pipeline. Notably, **no new releases were cut today**, suggesting the project is in a stabilization and consolidation phase before the next tag. The project appears to be mid-migration to a v2 skills architecture, with explicit compatibility gates being enforced across the codebase.

---

## 2. Releases

**No new releases published today.** The project is likely between release cycles, with multiple closed PRs (#3160, #3159, #3122, #2682) queued as candidates for the next version bump.

---

## 3. Project Progress

Four PRs were merged or closed in the last 24 hours:

| PR | Description | Status |
|---|---|---|
| [#3160](https://github.com/nanocoai/nanoclaw/pull/3160) | **versions: repin the agent image to hardened-2026-07-30** — New image reduces size from 781MB→611MB and layers from 18→8, with a focus on reducing largest single layer (39%→27%) to speed up pulls | ✅ Merged |
| [#3159](https://github.com/nanocoai/nanoclaw/pull/3159) | **container: make the Vercel CLI opt-in** — Removed Vercel CLI from the baked image (reducing bloat and attack surface); now added via `/add-vercel` skill | ✅ Merged |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | **fix(opencode): main compatibility, custom-endpoint transport, memory parity** — Brings opencode integration up to date with main branch features and fixes transport issues | ✅ Merged |
| [#2682](https://github.com/nanocoai/nanoclaw/pull/2682) | **fix(update-skills): skip v1-only skill branches** — Adds a v2 compatibility check so outdated v1 skills are cleanly skipped during updates rather than breaking the process | ✅ Merged |

**Key takeaway:** The project is actively **hardening its container/image pipeline** (smaller layers, opt-in CLIs, verified signatures) and **enforcing the v2 skills migration** — both signs of a mature infrastructure phase.

---

## 4. Community Hot Topics

The most active discussions today, ranked by activity:

### [#3153 — add_reaction / edit_message always fail on inbound messages](https://github.com/nanocoai/nanoclaw/issues/3153)
**Comments: 1 | Author: TO-maschenborn | Created: 2026-07-30**
This issue has significant user impact: reaction and edit operations fail on every inbound message because the agent-group suffix isn't stripped from the platform message ID. The author reports Slack returns `message_not_found` with 3 retries before failing. This is a **foundational messaging bug** that affects all channel integrations where agent groups are used.

### [#3155 — Registry branches drifted from main; provider payloads fail install gates](https://github.com/nanocoai/nanoclaw/issues/3155)
**Comments: 0 | Author: glifocat | Created: 2026-07-30**
A contributor found that the `providers` registry branch (at f2b75837) has drifted from `main` (at 0b034342), and applying skills from the registry to main fails the skill's own typecheck gate. This points to a **process gap in the registry update pipeline** — branches aren't being kept in sync, breaking the install experience.

### [#3119 — Reconcile untracked orphan containers to prevent duplicate spawns](https://github.com/nanocoai/nanoclaw/pull/3119)
**Comments: Undefined | Author: robbyczgw-cla | Open since 07-23**
A long-running production issue where a single agent group reached **3 concurrent containers** polling the same DB, caused by orphan containers not being reconciled. Updated today — this is a **high-priority reliability fix** for continuously-running hosts.

**Underlying need:** Users are running NanoClaw in production with 24/7 uptime and hitting **state-management and identity bugs** that only surface under sustained operation. The project needs more robust reconciliation and ID normalization.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 High — [#3153: add_reaction/edit_message always fail for inbound messages](https://github.com/nanocoai/nanoclaw/issues/3153)
Agent-group suffix is not stripped from platform message IDs before calling `add_reaction`/`edit_message`, causing all such operations to fail (Slack returns `message_not_found`, 3× retries, then `failed`). **No fix PR exists yet** — this blocks core interaction features for group-channel users.

### 🔴 High — [#3155: Registry branches drifted from main; installs fail](https://github.com/nanocoai/nanoclaw/issues/3155)
Provider registry payloads at `f2b75837` fail to build against `main` at `0b034342`. Skill installation is broken for the reported path. **Process gap in registry sync** — no fix PR open.

### 🟡 Medium — [#3119: Duplicate per-group container spawns](https://github.com/nanocoai/nanoclaw/pull/3119)
Untracked orphan containers cause a single agent group to accumulate multiple containers polling the same session DB. Fix PR is open but not merged. Trigger was a `*/15` cron schedule on a 5-day uptime host.

### 🟡 Medium — [#3158: Signature verification silently skipped](https://github.com/nanocoai/nanoclaw/pull/3158)
The verification gate from #3150 referenced non-existent env vars (`AGENT_IMAGE_SIGNER_IDENTITY`/`_ISSUER`), meaning every image verification is skipped and auto-merge can never fire. **Fix PR is open** and wires in the real Sigstore publisher identity.

### 🟢 Low — [#3157: Dangling symlinks break template skill materialization](https://github.com/nanocoai/nanoclaw/pull/3157)
`fs.statSync` follows symlinks, and shared-skill links pointing at container paths cause failures during materialization. **Fix PR is open.**

---

## 6. Feature Requests & Roadmap Signals

Several open PRs signal incoming features:

- **[#3156 — Channel attachments as structured parts](https://github.com/nanocoai/nanoclaw/pull/3156)** — Carrying channel attachments to providers as structured parts. Improves provider interoperability for rich content.

- **[#3154 — Scheduled tasks get current run time](https://github.com/nanocoai/nanoclaw/pull/3154)** — Tasks render their `time` from effective scheduled occurrence, with a fallback for legacy rows. Fixes a temporal correctness bug in task scheduling.

- **[#2301 — GitHub polling mode (Mode B)](https://github.com/nanocoai/nanoclaw/pull/2301)** — No-port-required GitHub integration for operators behind NAT/firewalls. Long-open (since May 6), but still active.

- **[#2317 — Free local voice transcription skill](https://github.com/nanocoai/nanoclaw/pull/2317)** — `/add-voice-transcription-free-whisper` supporting both `openai-whisper` (GPU) and `whisper.cpp` (CPU-only). Addresses privacy/cost needs.

- **[#2634 — AWS credential proxy skill (paws4claws)](https://github.com/nanocoai/nanoclaw/pull/2634)** — Bearer-token-based AWS credential proxying, supporting mount-from-outside patterns.

**Predictions for next version:** Based on merged PRs today, the next release will include the **hardened agent image** (#3160), **opt-in Vercel CLI** (#3159), and **v2 skill compatibility enforcement** (#2682). Watch for #3156 and #3154 to land soon given active core-team attention.

---

## 7. User Feedback Summary

**Real pain points surfacing today:**

- **Message ID handling is fragile:** The #3153 issue shows that when agent groups are used, platform integrations break for reactions/message edits. This is a daily-driver feature for channel users.
- **Infrastructure drift is real:** The registry drift issue (#3155) frustrates contributors — a contributor (glifocat) did the mechanical work correctly but the registry itself was out of sync.
- **Production reliability concerns:** The orphan container duplication (#3119) and image verification skipping (#3158) both undermine trust in long-running deployments.
- **Image bloat is being noticed:** Users see value in the layer-size optimization (PR #3160 reducing largest layer from 39%→27%) — this directly impacts deployment speed for image pull.

**Satisfaction signals:** The project has a **strong core-team response cadence** — issues opened today received PRs within hours (#3154, #3156, #3158 all created 07-30). This responsiveness is appreciated by the community.

---

## 8. Backlog Watch

Items that have been open a long time and need maintainer attention:

| Item | Age | Status | Why It Matters |
|---|---|---|---|
| [#2301 — GitHub polling mode](https://github.com/nanocoai/nanoclaw/pull/2301) | ~86 days | Open, active | Unlocks GitHub integration for NAT/firewalled deployments; a major addressable market |
| [#2685 — Signal group typing, outbound reactions, quote-reply docs](https://github.com/nanocoai/nanoclaw/pull/2685) | ~57 days | Open, updated today | Documents completed Signal features — docs debt blocking release notes |
| [#2537 — Pre-commit hooks (prettier, eslint, typecheck, vitest)](https://github.com/nanocoai/nanoclaw/pull/2537) | ~74 days | Open, updated today | Quality-of-life for all contributors; reduces review friction |
| [#2317 — Free voice transcription skill](https://github.com/nanocoai/nanoclaw/pull/2317) | ~85 days | Open, updated today | Privacy/cost-driven feature; likely popular once merged |
| [#2634 — paws4claws AWS credential proxy](https://github.com/nanocoai/nanoclaw/pull/2634) | ~64 days | Open, updated today | Security-sensitive credential handling; needs careful review |

**Maintainer action needed:** The **ira-at-work** authored PRs (#2685, #2301, #2317, #2634, #2537) are all being updated recently (within last 24h) but have been open for 2–3 months. This suggests an **insufficient maintainer bandwidth for reviewing** long-running community contributions, despite active core-team engineering work. A dedicated review pass on these would clear the backlog.

---

*Data collected from nanocoai/nanoclaw GitHub on 2026-07-31.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date: 2026-07-31**

---

## 1. Today's Overview

IronClaw is experiencing a period of intense architectural restructuring and quality-hardening activity. The project saw 38 issues and 50 pull requests updated in the last 24 hours, with a strong emphasis on refactoring the crate layout into a ten-family target architecture ([#6920-#6927](https://github.com/nearai/ironclaw/issues/6920)), improving skill discovery and activation ([#6937](https://github.com/nearai/ironclaw/pull/6937), [#6938](https://github.com/nearai/ironclaw/pull/6938)), and fixing UI/UX defects in the WebUI. Notably, a multi-day release train (PR #5598) has been stalled since early July, suggesting possible release-blocking concerns. No new releases were published in the last 24 hours. The project shows healthy velocity with a mix of core-contributor architectural work, community bug reports, and automated dependency maintenance.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

The open release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (created 2026-07-03) continues to stall, with breaking changes pending in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). These version bumps are likely waiting on completion of the target-architecture workstream.

---

## 3. Project Progress

### Merged/Closed PRs (21 total)

**Key closures:**

- **#6934** ([closed](https://github.com/nearai/ironclaw/pull/6934)): **refactor(host_api): de-wildcard the contract prelude (WS0)** — Removed the flat `pub use <mod>::*;` prelude consisting of 45 modules, requiring consumers to reach contracts through module paths. This is the first step in the target-architecture program (epic #3773).
- **#4636** ([closed](https://github.com/nearai/ironclaw/issues/4636)): **Standalone SSO session and multi-user isolation E2E coverage** — Hermetic end-to-end test scenario for OAuth routes, session exchange, and logout through the shipping binary.
- **#6771** ([closed](https://github.com/nearai/ironclaw/issues/6771)): **Stabilize Reborn Playwright runtime and served-API coverage** — Addressed failures across the legacy-runtime and served-api-routes portions of the nightly matrix.

### Active architectural workstream (target-architecture program)

Ten new issues (#6919-#6927) were opened by **BenKurrek** as a coordinated multi-wave restructuring program to enforce the ten-family crate layout. These include:

- **#6919**: Ratify the target crate architecture north star
- **#6920**: Establish baselines, prerequisite cleanup, and exception ratchets
- **#6921**: Extract neutral loop, extension, and product contracts
- **#6922**: Restructure extension packages and invert product-facing ports
- **#6923**: Narrow kernel, execution lanes, and loop hosting
- **#6924**: Complete composition/app/domain ownership evictions
- **#6925**: Delete verified dead surface and enable workspace dead-code ratchets
- **#6926**: Move crates into the ten-family layout
- **#6927**: Finish enforcement, guidance, and migration verification

This is accompanied by PR [#6936](https://github.com/nearai/ironclaw/pull/6936) which arms baseline metrics and shrink-only exception ratchets.

### Skill system improvements

- **#6937** (open): Word-boundary keyword matching + measured activation threshold — fixes #5417
- **#6938** (open): Explain activation refusals, enforce requirements — the "unusable skill" half of epic #6565
- **#6745** (open): Make installed/agent-authored skills selectable, installable, and complete

### Infrastructure fixes

- **#6935** (open): Fix libSQL cancelled-transaction recovery and history migration 503s
- **#6930** (open): Register hosted MCP servers in tenant runtime
- **#6933** (open): Bind IronHub installs to verified package identity (SHA-256 digest)

---

## 4. Community Hot Topics

### Most active: [#6284 — Error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)
**15 comments** | Created 2026-07-19 | Author: serrrfirat

This epic-level issue defines the "recoverability contract": every mid-run error must (a) not kill the run, (b) be visible to the model, (c) include the cause and success criteria, (d) allow a recovery turn, and (e) never report success incorrectly. This is a foundational quality metric — the ability to recover from 100% of errors — that signals deep investment in production reliability for agentic runs.

### [#6524 — Hermetic capability and journey testing platform](https://github.com/nearai/ironclaw/issues/6524)
**4 comments** | Created 2026-07-22 | Author: serrrfirat

Epic asking for mechanical verification that "every supported capability and critical user journey" has deterministic coverage. Related to the closed #4636 (SSO E2E) and #6771 (Playwright stabilization).

### [#6565 — Reliable Skill Discovery, Routing, and Activation](https://github.com/nearai/ironclaw/issues/6565)
**2 comments** | Created 2026-07-23 | Author: serrrfirat

Epic covering the full skill lifecycle — finding, selecting, activating — with a corrected diagnosis published 2026-07-25. Two PRs (#6937, #6938) directly address this epic.

**Analysis:** The active issues cluster around three themes: (1) making the agent reliably recoverable, (2) making skills/workflows reliably discoverable and activatable, and (3) proving everything through hermetic E2E testing. This suggests the team is preparing for broader production adoption and hardening.

---

## 5. Bugs & Stability

### High severity

- **[#6900](https://github.com/nearai/ironclaw/issues/6900) — Cross-user memory leak (security, suggested_P0)**: Shared-channel default subject binding collapses all users into the operator's memory namespace. Any memory read/write from an unrouted shared conversation risks leaking into another actor's namespace. **No fix PR yet.**

- **[#6866](https://github.com/nearai/ironclaw/issues/6866) — Same home directory shared across users (security)**: All users see all workspaces — a privacy violation. **No fix PR yet.**

### Medium severity

- **[#6940](https://github.com/nearai/ironclaw/issues/6940) — IronHub skill CTA returns 404**: Every skill's call-to-action leads to a 404 page. Likely related to the ongoing IronHub refactoring (#6780, #6933). **Fix in progress via #6780/#6933.**

- **[#6752](https://github.com/nearai/ironclaw/issues/6752) — Instance deletion fails; "Loading your agents..." stuck on re-login**: User-facing bug reported via Slack. **No fix PR yet.**

- **[#6834](https://github.com/nearai/ironclaw/issues/6834) — Slack integration setup fails (near.foundation account)**: Auth flow does not complete. **No fix PR yet.**

### Low severity (UI/UX)

- **#6916** — Markdown rendered as plain text in preview modal
- **#6915** — Workspace file links in messages don't open files (fix PR: **#6917**)
- **#6904** — Logs page cannot load entries beyond page 1 (pagination)
- **#6903** — Admin users list cannot load beyond first page (pagination)
- **#6902** — Projects page displays fabricated metrics as real data (fix PR: **#6906**)

---

## 6. Feature Requests & Roadmap Signals

### Explicit user requests

- **[#6939](https://github.com/nearai/ironclaw/issues/6939) — Migration tool for legacy agent setup** (p2, feature): Users of legacy products (Hermes/Openclaw) face switching costs; a migration path for setup/configuration/memory would reduce barrier to adoption. **Likely candidate for near-term planning.**

- **[#6905](https://github.com/nearai/ironclaw/issues/6905) — Keyless cosign signing for releases** (community): Enables verification for Linux packages (AUR). **Simple, high-value infrastructure win.**

- **[#6839](https://github.com/nearai/ironclaw/issues/6839) — Immutable caching for content-hashed JS/CSS** (perf): Improves repeat-visit WebUI performance. **Low-risk, likely to merge.**

- **[#6910](https://github.com/nearai/ironclaw/issues/6910) — Shared Switch component** for settings controls: Component consolidation for consistency and accessibility. **Internal quality work.**

- **[#6909](https://github.com/nearai/ironclaw/issues/6909) — Migrate Admin deletion flows to shared ConfirmDialog**: Consistency/accessibility improvement.

### Roadmap insight

The target-architecture program (issues #6919-#6927) is the dominant roadmap item — a multi-wave restructuring of the entire crate layout. This is a 1-2 month effort at current pace. The Reborn skill system (epic #6565) is actively being implemented. The error-recoverability endgame (#6284) is a long-running quality north-star.

**Prediction for next minor release:** The stalled release train (#5598) will likely ship once #6920/WS0 baselines land, possibly within 1-2 weeks. Key features likely included: IronHub deep-link registration (#6780), hosted MCP servers (#6930), attachment cross-channel flows (#6364).

---

## 7. User Feedback Summary

### Real reported pain points

| Pain point | Source | Severity |
|---|---|---|
| **Privacy violation**: same home directory across users, all workspaces visible | #6866 (tobias.holenstein) | Critical |
| **Memory leak across users** on shared channels | #6900 | Critical |
| **Migration cost**: can't port from Hermes/Openclaw | #6939 | High |
| **IronHub CTA broken** → 404 everywhere | #6940 | Medium |
| **Slack setup fails** (near.foundation) | #6834 | Medium |
| **Instance deletion fails**; stuck on re-login | #6752 | Medium |
| **UI pagination broken** (logs, admin users) | #6904, #6903 | Low |
| **Fabricated metrics** shown as real | #6902 | Medium (trust issue) |

### Satisfaction signals

- Active skill-scoring fixes (#6937, #6938) responding to benchmark failures show responsiveness to quality issues.
- The closed SSO E2E (#4636) and Playwright stabilization (#6771) indicate investment in test reliability.

---

## 8. Backlog Watch

### Stale important issues needing maintainer attention

1. **[#5598](https://github.com/nearai/ironclaw/pull/5598) — Release PR (stalled since July 3)**: Breaking changes pending in `ironclaw_common` and `ironclaw_skills`. This blocks downstream consumers and package maintainers. **Needs a release coordinator decision.**

2. **[#3773](https://github.com/nearai/ironclaw/issues/3773) — Target Crate Architecture epic (created May 19)**: Now subdivided into actionable workstreams (#6919-#6927), but the epic has been open for 2+ months. Active progress is now happening; monitor.

3. **[#6900](https://github.com/nearai/ironclaw/issues/6900) — Cross-user memory leak (P0 suggestion, no fix assigned)**: Security issue with no assigned fix. Created 2026-07-30. **Needs immediate triage.**

4. **[#6866](https://github.com/nearai/ironclaw/issues/6866) — Shared home directory privacy leak**: Reported 2026-07-29, no response. **Needs triage and fix planning.**

5. **[#6752](https://github.com/nearai/ironclaw/issues/6752) — Instance deletion failure**: Reported 2026-07-28 via Slack, 1 comment, no fix. **User-facing and blocking.**

---

## Summary

IronClaw is in a period of significant internal restructuring (target-architecture program) with healthy parallel work on skill reliability, UI fixes, and security hardening. The project shows strong contributor diversity (core, new, and community members). Two security issues are outstanding and need immediate attention. The stalled release train is the most pressing process concern.

**Health assessment: 7.5/10** — Active, well-managed, but security issues and release stalls temper the score.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-07-31.

---

# LobsterAI Project Digest - 2026-07-31

## 1. Today's Overview

LobsterAI is showing robust activity following the release of version 2026.7.29, with 9 pull requests updated in the last 24 hours. The development velocity is high, marked by 7 closed/merged PRs covering new features, enterprise-grade stability fixes, and UI polish. The release itself focuses on enhancing the collaborative workspace and expanding model support. While there are no new open issues today, the project continues to solidify its architecture, particularly around the `/btw` co-work feature and account isolation for enterprise deployments.

## 2. Releases

**LobsterAI 2026.7.29** was released on July 29, 2026.

- **New Features:** Added selected text tags to the side chat within the co-work feature ([PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405)). Added support for the **Kimi K3** model ([PR #2381](https://github.com/netease-youdao/LobsterAI/pull/2381)).
- **Stability & Security:** Hardened session lifecycle and token refresh logic to improve authentication robustness.
- **Migration Notes:** No breaking changes or specific migration steps were mentioned in the release notes. Users are encouraged to update to gain access to new model integrations and stability improvements.

## 3. Project Progress

The majority of the merged work in the last 24 hours centers on the `/btw` side-chat feature and UI/UX standardization.

- **Co-Work Enhancements:** The `/btw` feature is now fully isolated from the main conversation with its own editable, floating side-chat panel ([PR #2397](https://github.com/netease-youdao/LobsterAI/pull/2397)). Input handling was also improved to accumulate selected text excerpts and remove the question length limit ([PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406)).
- **Enterprise & Auth Isolation:** A significant refactor was merged to isolate authentication, media, queued follow-ups, sharing, and deployment state by user account. This prevents stale async responses from leaking between accounts and enforces enterprise entitlements ([PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)).
- **UI Polish & Consistency:**
    - Added a unified sidebar carousel for daily check-ins and banners ([PR #2411](https://github.com/netease-youdao/LobsterAI/pull/2411)).
    - Aligned the Sites page layout with other management views for a more consistent user experience ([PR #2410](https://github.com/netease-youdao/LobsterAI/pull/2410)).
- **Windows Installer Fix:** Addressed a bug in the NSIS installer where it might fail to kill lingering processes during uninstall/upgrade, ensuring cleaner teardowns ([PR #2412](https://github.com/netease-youdao/LobsterAI/pull/2412)).

## 4. Community Hot Topics

There were no new issues created today, and the activity on existing PRs has been focused. The most active PRs by recent updates are [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) and [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411), which are both in this release cycle. The PRs [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) and [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) are old, stale PRs that received no new comments but were updated in the last 24 hours, likely due to automated stale-bot checks. The underlying need in the community appears to be focused on **enterprise-readiness** (account isolation, entitlement enforcement) and **usable, polished features** (the `/btw` side-chat, check-in banners).

## 5. Bugs & Stability

- **High:** **Windows Installer Survivor Process** ([PR #2412](https://github.com/netease-youdao/LobsterAI/pull/2412)): The NSIS installer could fail to kill a process during upgrades/uninstalls if its teardown was slow. A fix was merged that re-issues the kill command on every polling round and logs detailed survivor information for better diagnostics.
- **Medium:** **Email Attachment Path Traversal** ([PR #2389](https://github.com/netease-youdao/LobsterAI/pull/2389)): A security vulnerability in the email skill that could have allowed a malicious attachment filename to write outside the intended download directory. A fix was merged to sanitize filenames and enforce directory boundaries.
- **Medium:** **Cross-Account Data Leakage** ([PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)): A race condition where async responses from a previous account could be delivered to a newly signed-in account. This was addressed by isolating account state completely.

## 6. Feature Requests & Roadmap Signals

There are no new user feature requests logged today. However, the PRs merged today strongly signal the immediate roadmap:

- **Next Up (Likely in 2026.8):** The `/btw` side-chat is being actively developed. Further refinements to this UI and its execution context are likely.
- **Medium-Term:** The heavy focus on account isolation and enterprise entitlements suggests that multi-account and enterprise/team versions are a priority.
- **UI Standardization:** The work to align the Sites page with Skills and MCP views suggests an ongoing effort to clean up and unify the management interface UX.

## 7. User Feedback Summary

There is no direct user-visible feedback (issues or comments) to summarize for today. The key signals come from the developer responses to implicitly reported problems:

- **Pain Point (Addressed):** Users were experiencing potential failed upgrades on Windows due to lingering processes. The fix in [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) directly addresses this.
- **Pain Point (Addressed):** Security-conscious users had a potential risk in the email skill, now patched in [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389).
- **Requested Feature (Implemented):** The desire for a quick, isolated way to ask about selected text ("/btw") and get a follow-up answer without cluttering the main conversation has led to the new side-chat feature ([PR #2397](https://github.com/netease-youdao/LobsterAI/pull/2397)).

## 8. Backlog Watch

Two pull requests are marked as `[stale]` and are in need of maintainer attention:

- **[PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228) (feat(cowork): 新增会话「标记为未读」功能)**: This PR adds a "Mark as Unread" feature for sessions in the co-work area. It has been open since April 1, 2026, and is quite detailed. The maintainers have not yet responded, suggesting they need to decide whether to review/merge it or propose changes. This is a common user need that would improve workflow management.
- **[PR #1231](https://github.com/netease-youdao/LobsterAI/pull/1231) (fix(agent): AgentCreateModal 支持 Escape 键关闭)**: This PR proposes UX fixes for the `AgentCreateModal`, including closing on Escape and resetting the form on reopen. Open since April 1, 2026, it's a low-risk fix that improves consistency but is not critical. A response is needed to either merge or close it out to reduce the stale PR count.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-07-31

---

## 1. Today's Overview

Moltis is in an active development phase with moderate community engagement. The project is processing a steady stream of pull requests (4 in the last 24 hours) and has only 2 new issues, both filed yesterday. Development is heavily focused on channel integrations (Slack, Telegram) and operational infrastructure, including instrumentation, feedback collection, and security hardening. While no new releases were cut this period, two mature PRs (#1170, #1174) are close to merge and represent significant architectural improvements. The project appears healthy, addressing both feature expansion and security concerns in parallel.

---

## 2. Releases

No new releases were published for Moltis during this 24-hour window. The latest release remains the previous published version; no breaking changes or migration notes are available for this period.

---

## 3. Project Progress

One PR was closed (merged) in the last 24 hours:

- **[#1166: feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit](https://github.com/moltis-org/moltis/pull/1166)** *(merged, by penso)* — This substantial feature shipment advances the Slack integration by building on acknowledgment reactions from #1165. It adds a reaction-based receipt/progress lifecycle that is safe under queueing, cancellation, retries, callback bursts, and delivery failures. The PR also introduces phase tracking (e.g., received/processing/done), reconnect supervision, and Block Kit support. This directly improves user trust by giving visible feedback when the agent is processing in channels where typing indicators are unavailable.

Two other PRs remain open and are being actively refined:

- **[#1174: Add instrumentation and feedback collection infrastructure](https://github.com/moltis-org/moltis/pull/1174)** — Open, updated today. Adds backend-neutral agent instrumentation, Langfuse v4 export, operational OTLP backends, and end-user reaction feedback.
- **[#1170: fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)** — Open, updated today. Fixes a privilege escalation path by separating access from operator privileges.

---

## 4. Community Hot Topics

There are no issues or PRs with significant comment counts or reactions in this 24-hour window—all items show 0 comments. However, the most substantive discussions are happening in the code itself, as evidenced by the active iteration on PRs #1174 and #1170. The underlying needs signaled include:

- **Cross-channel consistency:** The project is clearly pushing for feature parity across Slack, Telegram, and web. The Telegram inline button for agents (#1178) is the direct complement to the newly merged Slack Block Kit action support (#1166).
- **Security posture:** The operators-list PR (#1170) and the vault authentication bug report (#1177) both address the same concern: the project is growing in channel surface area and requires a hard security boundary.

---

## 5. Bugs & Stability

One bug was reported today, and it is high severity:

- **[#1177: Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)](https://github.com/moltis-org/moltis/issues/1177)** — *High severity* — This reports that vault unlock and recovery endpoints are missing authentication, a CWE-306 (Missing Authentication for Critical Function). This is a potentially critical credential-management flaw. No associated fix PR has been linked yet; however, the recently updated operators-list PR (#1170) may be relevant to the broader access-control pattern.

No other crashes, regressions, or reliability issues were reported in this window.

---

## 6. Feature Requests & Roadmap Signals

One feature request was submitted:

- **[#1178: Let agents send Telegram inline buttons and receive structured callback responses](https://github.com/moltis-org/moltis/issues/1178)** — The user (`eddyvlad`) requests that agents be able to generate Telegram inline buttons and receive structured callback data in response. This is a natural progression of the interactivity work merged recently for Slack (Block Kit with callback/action support). It is highly likely this will land in the upcoming version, as it aligns with the existing trajectory of rich interactive message support.

---

## 7. User Feedback Summary

The following user signals emerged:

- **Vault/security anxiety:** The vault auth bug (#1177) suggests users may be self-hosting Moltis at scale and are concerned about unauthorized credential access. The fact that the issue notes "I am using the latest version" indicates this is a live production concern, not a stale one.
- **Interactive channel expectations:** The Telegram inline button request (#1178) signals that users expect agent-driven UI in-session (buttons, callbacks), not just text replies. They treat the agent as a first-class interactive app, consistent with the Slack work that is being merged.
- **Satisfaction indicators:** The code-driven culture and prompt merging of user-facing features (ack reactions, markdown export) suggests maintainers are highly responsive to user requests, which likely bolsters overall satisfaction.

---

## 8. Backlog Watch

No issues or PRs in the current window display long-dormant or unanswered maintainer needs. There are several older PRs (e.g., #1166 created 2026-07-24 and only now merged) that took about a week to land, but that reflects a careful review process rather than neglect.

One item to track: **PR #1174** (instrumentation + feedback) has been open for 4 days and was updated today; given the breadth of the change (OTLP, Langfuse, token usage attribution), it may require further maintainer review, and no opposing feedback has surfaced. This is not warning-indicative, but its merge deserves attention in the coming days as it is a foundational observability layer for the next version.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-31

## 1. Today's Overview

CoPaw (QwenPaw) 2.0.1 is in active maintenance with substantial momentum: 43 PRs were updated in the last 24 hours (22 open, 21 merged/closed), and 20 issues were touched (15 active, 5 closed). No new releases landed today, but the repository is processing a steady flow of bug fixes and enhancements concentrated in MCP connectivity, memory/compression integrity, sub-agent session handling, and Computer Use desktop automation. While core workflows are stabilizing, several performance regressions (notably a ~2s fixed overhead in v2.0) and UI/UX pain points are drawing community attention. The project overall appears healthy with sustained external contributor engagement.

---

## 2. Releases

No new releases were published on 2026-07-31. The latest available version remains **v2.0.1** (referenced in multiple issues).

---

## 3. Project Progress

**21 PRs merged/closed in the last 24h**, representing a mix of fixes and feature completions:

| PR | Description | Status |
|---|---|---|
| [#6594](https://github.com/agentscope-ai/CoPaw/pull/6594) | English & Chinese beginner docs for Computer Use, exposed in website navigation | Merged |
| [#6590](https://github.com/agentscope-ai/CoPaw/pull/6590) | Fix macOS Screen Recording permission by reusing desktop identity for Computer Use helper | Merged |
| [#6582](https://github.com/agentscope-ai/CoPaw/pull/6582) | Sandbox cleanup handling fix | Merged |
| [#6556](https://github.com/agentscope-ai/CoPaw/pull/6556) | QwenPaw Creator: creation checkpoints, home redesign, media recovery, export/import, bilingual guide | Merged |
| [#6562](https://github.com/agentscope-ai/CoPaw/pull/6562) | First-time contributor fix for 3 bugs (#6533 `/mission` TypeError, #6506 approval inheritance, another bug) | Closed |
| [#6424](https://github.com/agentscope-ai/CoPaw/pull/6424) | Native desktop GUI automation (Computer Use) for Windows & macOS — accessibility-first + Tauri control mode | Closed |
| [#6486](https://github.com/agentscope-ai/CoPaw/pull/6486) | Fix Matrix E2EE by probing vodozemac backend (works on Python 3.12, legacy `olm` fails) | Closed |
| [#6256](https://github.com/agentscope-ai/CoPaw/pull/6256) | Make sandbox-unavailable fallback action configurable | Closed |

**Key feature area:** Computer Use desktop automation appears to have landed and is now being incrementally polished (permission fixes, docs). The Creator plugin also received a substantial iteration.

---

## 4. Community Hot Topics

The most engaged issues in the last 24h:

| Issue/PR | Comments | Topic | Analysis |
|---|---|---|---|
| [#6307](https://github.com/agentscope-ai/CoPaw/issues/6307) | 7 | **v2.0 introduces ~2s fixed overhead per reply** vs v1.x | Highest-traffic issue; performance regression with architectural root cause. Likely a systemic concern deterring upgrades. |
| [#6563](https://github.com/agentscope-ai/CoPaw/issues/6563) | 5 | CI `real-behavior-proof` workflow **blocks all fork PRs** | Contributor-experience blocker; affects all external contributions — high visibility friction. |
| [#6524](https://github.com/agentscope-ai/CoPaw/issues/6524) | 5 | **MCP session recovery** after server restart | Recurring MCP reliability theme; users need auto-reconnect without manual `list mcp`. |
| [#6578](https://github.com/agentscope-ai/CoPaw/issues/6578) | 2 (closed) | Cron `dispatch.mode: "final"` ignored — events pushed real-time | Workflow control gap; closed, but signals need for delivery-mode options. |

**Underlying theme:** MCP reliability (stale sessions, tool-name validation) and performance regressions are the two dominant community concerns. The fork-PR CI issue also indicates maturing contributor funnel friction.

---

## 5. Bugs & Stability

**Ranked by severity:**

**🔴 High — #6307 (Open): 2s fixed overhead per reply in v2.0**
Architectural regression from v1.x; model-independent latency penalty on every simple reply. No fix PR seen yet. Performance-sensitive users may be stuck on v1.x.

**🟠 High — #6589 (Open): `execute_shell_command` large stdout freezes UI**
Frontend renders all output at once, blocking main thread; on Windows 11. No fix PR yet. Related to #6512 (truncation at >30KB) — two sides of same scalability problem.

**🟠 High — #6555 (Open): Memory compression loses early-session events**
Dream/memory generation misses events if context scrolls out before daily md generation. **Fix PR [#6592](https://github.com/agentscope-ai/CoPaw/pull/6592)** open to flush Auto-Memory before Scroll eviction.

**🟠 High — #6557 (Open): MCP tool names starting with `-` rejected by strict LLM APIs (Kimi 400)**
Schema violation breaking entire requests. **Fix PR [#6561](https://github.com/agentscope-ai/CoPaw/pull/6561)** open to ensure tool names start with a letter.

**🟡 Medium — #6588 (Open): `spawn_subagent` single-task mode unusable**
`batch` incorrectly exposed as required; schema validation blocks single-task. **Fix PR [#6595](https://github.com/agentscope-ai/CoPaw/pull/6595)** uses empty-string coercion.

**🟡 Medium — #6524 (Open): MCP client can't auto-recover after server restart**
Stale session IDs reused, tool queries fail. **Fix PR [#6586](https://github.com/agentscope-ai/CoPaw/pull/6586)** detects `Session terminated` and recovers.

**🟡 Medium — #6512 (Open): `execute_shell_command` output truncation >30KB**
Result cut off or `Internal error`; needs file write or streaming mechanism.

**🔵 Resolved today:** #6533 (`/mission` TypeError, fixed by #6562), #6506 (approval_level inheritance, fixed by #6562), #6578 (cron dispatch mode — closed), #6476 (Matrix E2EE — fixed by #6486).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for v2.1 |
|---|---|---|
| **Unified cleanup/data-management page** (auto-memory, workspace files, backups) | [#6593](https://github.com/agentscope-ai/CoPaw/issues/6593) | Medium-high — addresses long-term install bloat; aligns with Creator plugin direction |
| **Workflow / strong-logic flow engine** (like Dify) for permission-gated steps | [#6571](https://github.com/agentscope-ai/CoPaw/issues/6571) | Medium — security-relevant (prevent privilege escalation); Skills insufficient |
| **Session fork grouping** — tree/hierarchy view, collapse, trigger labels | [#6559](https://github.com/agentscope-ai/CoPaw/issues/6559) | Medium — UX pain but not core functionality |
| **kill switch for character-count live indicator** in chat input | [#6585](https://github.com/agentscope-ai/CoPaw/issues/6585) | Low / trivial — likely fast track |
| **Multi-line display of dragged-in filenames** | [#6583](https://github.com/agentscope-ai/CoPaw/issues/6583) | Low / trivial |
| **Rename "QwenPaw Desktop" → "QwenPaw"** | [#6587](https://github.com/agentscope-ai/CoPaw/issues/6587) | Low / trivial |

**Pattern:** Users are pushing toward **(a)** workflow determinism for security-critical flows and **(b)** better information hygiene (memory, files, sessions). Small UX polish items (#6585, #6583, #6587) have simple precedent and could ship quickly.

---

## 7. User Feedback Summary

- **Community sentiment is generally positive** — multiple first-time contributors submitting PRs; issue #6585 opens with "非常不错的项目" (very good project).
- **Upgrade hesitancy risk:** The 2s overhead regression (#6307) may keep v1.x users pinned; no workaround mentioned yet.
- **MCP + complex tooling is the main value driver:** Users are deploying real workloads (stock analysis scripts, TeslaMate migration, batch DB queries) but hitting output handling limits (#6512, #6589).
- **Chinese-language UX gaps:** Uploaded CJK filenames are mangled (#6453, fix PR #6567 in review); multimodal warning is too blunt (#6452) — Localization/UX polish needed.
- **Security-minded users** want deterministic permission gating before MCP tool calls (#6571, #6506 resolved).
- **Contributor friction:** CI blocking all fork PRs (#6563) is a serious onboarding barrier — likely to be fixed quickly given its blast radius.

---

## 8. Backlog Watch

| Item | Age | Status | Why it matters |
|---|---|---|---|
| [#6563](https://github.com/agentscope-ai/CoPaw/issues/6563) — CI blocks all fork PRs | 2 days | Open, no fix yet | Critical contributor-flow blocker; every external PR currently fails CI. Needs urgent maintainer action. |
| [#6307](https://github.com/agentscope-ai/CoPaw/issues/6307) — 2s overhead regression | 10 days | Open, 7 comments, no PR | Highest-impact performance regression; unresolved main-thread complaint. |
| [#6561](https://github.com/agentscope-ai/CoPaw/pull/6561) — MCP tool-name sanitization | 2 days | Open, needs review | Fixes a breaking issue for Kimi/Moonshot users (#6557). No reviewer activity noted. |
| [#6595](https://github.com/agentscope-ai/CoPaw/pull/6595) — `spawn_subagent` empty-string coercion | 1 day | Open, needs review | Unblocks single-task mode; small scope, quick win. |
| [#6592](https://github.com/agentscope-ai/CoPaw/pull/6592) — Auto-Memory flush before context eviction | 1 day | Open, needs review | Fixes data-loss issue (#6555) in long sessions. |
| [#6312](https://github.com/agentscope-ai/CoPaw/pull/6312) — Configurable theme/skin module | 10 days | Open draft, awaiting maintainer direction | Stalled draft; no feedback from maintainers. If theme customization is on roadmap, maintainers should respond. |
| [#6302](https://github.com/agentscope-ai/CoPaw/pull/6302) — Unified provider discovery/model metadata/routing | 10 days | Open, large PR | Review-heavy but addresses 7 provider pain points; needs maintainer time. |

---

*Digest generated 2026-07-31 from CoPaw GitHub activity.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-31

## 1. Today's Overview

ZeptoClaw is in a quiet but focused maintenance phase. No new releases or issues were recorded in the last 24 hours, and no issues are currently open, indicating a stable issue tracker. Activity is concentrated on a single open pull request (#645) addressing runtime security and process lifecycle robustness. This PR has been updated recently (yesterday) and appears to be nearing readiness for merge. Overall, the project shows healthy signs of deliberate, security-conscious development with low bug-report volume.

---

## 2. Releases

**None.** No new releases were published in the reporting period. The project appears to be between release cycles, with pending changes accumulating in the open PR queue.

---

## 3. Project Progress

**No PRs were merged or closed** in the last 24 hours. However, one significant PR is actively progressing:

- **[#645 — fix(runtime): scrub subprocess secrets and reap timed-out process trees](https://github.com/qhkm/zeptoclaw/pull/645)** — *Open, last updated 2026-07-30*
  - **What it addresses:** Two critical runtime issues:
    1. **Secret leakage:** Subprocess shell commands were inheriting ZeptoClaw's full process environment, exposing provider API keys and other credentials to model-authored commands.
    2. **Process cleanup:** Runtime timeouts were not consistently terminating and reaping child process trees, potentially leaving orphaned processes behind (notably in Docker environments).

This is a core security and stability fix that strengthens the runtime's isolation guarantees.

---

## 4. Community Hot Topics

**No community discussion activity** was recorded in the reporting period. The only active item is PR #645, which has no comments or reactions logged. The project appears to have a small, maintainer-driven community with engagement concentrated on code contributions rather than public discussion threads.

---

## 5. Bugs & Stability

**No new bugs, crashes, or regressions were reported** in the last 24 hours. The open issue count is zero.

**Known pending fix (from ongoing PR):**

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Subprocess commands inherit full process env, leaking provider keys/credentials to model-authored commands | Open (no issue filed; addressed directly) | [#645](https://github.com/qhkm/zeptoclaw/pull/645) |
| **Medium** | Runtime timeouts drop futures without terminating/reaping descendant processes (incl. Docker containers) | Open (no issue filed; addressed directly) | [#645](https://github.com/qhkm/zeptoclaw/pull/645) |

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** were filed in the reporting period. However, the substance of PR #645 signals roadmap priorities:

- **Security hardening** — isolating runtime subprocesses from host environment secrets is a foundational security requirement. Expect continued work on privilege separation and credential management.
- **Resource lifecycle management** — the emphasis on process-tree reaping (including Docker) suggests the project is moving toward more robust containerized execution environments.
- **Predictive outlook:** The next minor release (likely 0.x) will almost certainly include these runtime fixes. Additional hardening around sandboxing or environment allow-listing could follow.

---

## 7. User Feedback Summary

**No direct user feedback** (comments, reactions, or issue reports) was recorded in the last 24 hours. With zero open issues, the user base appears satisfied or small in volume. The silent period may reflect:

- A stable, mature codebase from the user's perspective.
- A small early-adopter user base where feedback flows through maintainer channels rather than public issues.

---

## 8. Backlog Watch

**No long-unanswered issues or PRs require maintainer attention** at this time. The only open PR (#645) has been actively updated within the last day, indicating it is receiving proper attention. The zero-issue state of the project suggests a well-maintained backlog with no neglected items.

---

**Overall Health Assessment:** 🟢 **Healthy.** Low bug volume, active security-critical development, and no backlog debt. The project is in a controlled, forward-moving state with security as a clear priority.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-31

## 1. Today's Overview

ZeroClaw is in a **high-activity development and hardening phase**. The project saw 14 issues and 50 pull requests updated in the last 24 hours, with **zero closed or merged items**, indicating a heavy review and iteration pipeline rather than a merge-focused day. The current backlog is dominated by **high-risk architectural RFCs** (memory separation, OpenAI adapter, OTel correlation, Gemini Live channel, Mixture-of-Agents) and a **cluster of security-critical bug reports** filed today (webhook fail-open, command allowlist case-sensitivity, Tokio stack overflow) that all have **matching fix PRs already open**. Notably, the project is self-aware about its security posture: maintainers are actively triaging issues with `needs-maintainer-review` labels and there is a visible push to improve CI reliability (rustdoc gates, label recalculation). The volume of open PRs (50) with zero merges suggests a bottleneck in review capacity rather than a lack of contributions.

## 2. Releases

No new releases were published in the last 24 hours. The most recent user-reported version in the issues is **v0.8.3**.

## 3. Project Progress

**No PRs were merged or closed in the last 24 hours.** The project is in a "packaging" state, with 50 PRs waiting for review or author action. Key PRs that advanced or are pending include:

- **Security Fixes (High Priority):**
  - **#9569** — `fix(gateway): fail closed when a WhatsApp Cloud or Linq webhook cannot be verified` (fixes S0 issue #9565)
  - **#9568** — `fix(security): match command allowlist entries case-insensitively on Unix` (fixes S2 issue #9566)
  - **#9410** — `fix(security): default command audit logging to disabled` (implements honesty about inert audit settings)
- **Channel Maintenance:**
  - **#9571** — `chore(channels): remove the WATI channel` (entire module, config, CI, and docs removal)
  - **#9567** — `feat(channel/email): address multiple To/Cc/Bcc recipients in one message`
- **Provider Fixes:**
  - **#8943** — `fix(providers): exclude Nova 2 from Bedrock prompt caching`
  - **#8927** — `fix(providers): remove unconditional strip_think_tags from compatible provider`
- **Large Architectural Features (Still Open):**
  - **#8688** — `feat(runtime): add trusted goal tools and delegation boundaries`
  - **#9126** — `feat(plugins): validate typed instance config`
  - **#9244 / #9248** — eval memory seeding and append-only run-history receipts
  - **#8313** — `feat(skills): default to compact injection, deprecate full mode`

## 4. Community Hot Topics

**Most Discussed Items (by comment count):**

- **#9048** — *RFC: Separate conversation history from agent-curated long-term memory* (12 comments, 👍 0)
  - **Author:** Audacity88 | **URL:** [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)
  - **Analysis:** This is the top pain point: users and maintainers recognize that ZeroClaw's docs treat session history and long-term memory as distinct concepts, but the runtime implementation does not. The need is for **architectural clarity** to prevent memory bloat and context pollution, which directly impacts local-model performance (#5287).

- **#8603** — *RFC: OpenAI Chat Completions compatibility adapter* (7 comments)
  - **Author:** REL-mame | **URL:** [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)
  - **Analysis:** Strong ecosystem pull. Users want to plug ZeroClaw into **existing OpenAI-compatible clients** (Open WebUI, LobeChat) without building custom bridges. This signals a need for ZeroClaw to become a drop-in backend, lowering adoption friction.

- **#8933** — *RFC: Add cross-turn conversation correlation to OTel export* (7 comments)
  - **Author:** FTDGRT | **URL:** [Issue #8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)
  - **Analysis:** Observability is a growing priority. Users need to trace a single conversation across multiple turns in their monitoring stack using standard `gen_ai.conversation.id` semantic conventions, aligning with OpenTelemetry ecosystem standards.

- **#5287** — *[Feature]: define a compact local_small runtime profile and prompt-budget contract* (7 comments, 👍 2)
  - **Author:** ThirDecade2020 | **URL:** [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)
  - **Analysis:** The only issue with reactions (👍), indicating **broad user endorsement**. Local-first users are being hurt by prompt bloat and leaking system instructions. This, combined with #9048 and #7951 (effort-based routing), indicates a strong **local-model-first user base** that needs ZeroClaw to respect hardware constraints.

## 5. Bugs & Stability

**S0 (Data Loss / Security Risk):**
- **#9565** — *[Bug]: gateway webhook handlers do not fail closed (WhatsApp Cloud, Linq, WATI)*
  - **Author:** JordanTheJet | **URL:** [Issue #9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)
  - **Details:** Attacker-controllable messages can be dispatched into the agent without authentication. **Fix PR exists: #9569.**

**S2 (Degraded Behavior):**
- **#9572** — *[Bug]: debug gateway WebSocket turns can overflow the default Tokio worker stack*
  - **Author:** NiuBlibing | **URL:** [Issue #9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572)
  - **Details:** Process aborts intermittently during dashboard WebSocket turns under the default dev profile. **No fix PR yet.**
- **#9566** — *[Bug]: uppercase allowed_commands entries never match on Unix*
  - **Author:** JordanTheJet | **URL:** [Issue #9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566)
  - **Details:** Regression from #4552; commands are silently denied. **Fix PR exists: #9568.**

**S3 (Minor):**
- **#8847** — *bug(ci): cargo test --doc fails with duplicated rustdoc theme flag*
  - **Author:** Audacity88 | **URL:** [Issue #8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847)
  - **Details:** CI tooling breaks under Rust 1.96. **No fix PR yet.**

**Stability Trend:** The security bugs filed today are all **source-inspection findings**, suggesting the community is actively auditing the codebase. The existence of immediate fix PRs (#9569, #9568) demonstrates a **fast incident-response loop**, which is a positive health signal.

## 6. Feature Requests & Roadmap Signals

**High-Probability Roadmap Items (active RFCs with maintainer interest):**

1. **Memory Architecture Overhaul (#9048):** Separating conversation history from curated memory is the most commented issue and directly enables better local-model performance. Likely to be scheduled for an upcoming minor release.
2. **OpenAI API Compatibility Adapter (#8603):** Strong ecosystem pressure. This is a **fast-follow candidate** that could be a headline feature for the next version, as it dramatically expands client compatibility.
3. **Effort-Based Local/Cloud Model Routing (#7951):** Complements the `local_small` profile (#5287). The combination of these two would make ZeroClaw a serious local-first agent platform.
4. **Gemini Live Realtime Channel (#8780):** Backend-agnostic realtime speech-to-speech is ambitious but the RFC is detailed; likely to be a **long-horizon** feature.
5. **CI/Label Automation (#9345, #9545):** Internal tooling improvements that suggest the maintainers are preparing for scale, automating label recalculation and enforcing doc quality.

## 7. User Feedback Summary

**Pain Points:**
- **Local Model UX (Loudest voice):** Users on Ollama/local models suffer from prompt bloat, internal instruction leakage (#5287), and streamed turns being misread as log payloads (#9325 PR explains the fix).
- **Config Footguns:** Silent failures from typos (`peer_groups` channel refs, #9311 PR) and Ollama endpoint misconfiguration (#8953 PR) waste operator time.
- **WebChat Auto-Scroll (#9562):** A support question with a "how-to" nature, but referencing upstream fixes, indicates users are actively reading history while streaming.
- **Security Anxiety:** The number of user-reported security issues (webhooks, allowlist) indicates a **security-conscious user base** that is actively testing boundaries.

**Satisfaction Signals:** The community is deeply engaged: they are filing RFCs, doing source audits, and providing detailed reproduction steps. The zero-merge day is likely a reflection of maintainers triaging this wave of security PRs, not a slowdown.

## 8. Backlog Watch

**Long-Pending Issues/PRs Needing Maintainer Attention:**

- **#5287** — *[Feature]: local_small runtime profile* (Created 2026-04-04, 👍 2, 7 comments, Labeled `status:accepted` but no PR). **Outstanding for ~4 months.** Despite acceptance, no implementation has landed; this is the community's most desired feature.

- **#8688** — *feat(runtime): add trusted goal tools and delegation boundaries* (PR, Created 2026-07-04, `needs-author-action`). **A large, high-risk XL PR** touching tool, delegate, and gateway channels, waiting on author response for ~3.5 weeks.

- **#8313** — *feat(skills): default to compact injection, deprecate full mode* (PR, Created 2026-06-25, high risk). An accepted direction with a sizeable PR waiting for review; it has been open for **over a month**.

- **#9048** — *RFC: memory separation* (Created 2026-07-14). The most active RFC with **no clear owner or assigned milestone**; maintainers are tagged but no definitive accept/reject has been posted.

- **PR Review Bottleneck:** With 50 open PRs (many `needs-author-action`), the project is in danger of a **stale queue**. PRs like #9268 (eval receipts) and #9275 (eval memory) are tagged `needs-author-action` and `follow-up`, suggesting reviewers are waiting, but the sheer volume risks losing context. Maintainers should prioritize triaging the **security fix PRs (#9569, #9568)** to closure first.

---

**Health Verdict:** ZeroClaw is **actively hardening and expanding** its architecture. The velocity of issue discovery and PR submission is high, but **review/merge throughput is the critical bottleneck**. The community is professional, security-focused, and deeply invested in the local-first vision, which will define the project's competitive edge.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*