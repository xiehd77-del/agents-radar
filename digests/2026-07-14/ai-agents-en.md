# OpenClaw Ecosystem Digest 2026-07-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 02:38 UTC

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

Here is the OpenClaw project digest for July 14, 2026, based on the provided GitHub data.

---

## OpenClaw Project Digest: 2026-07-14

### 1. Today's Overview

Today marks a high-activity day for the OpenClaw project, with **500 issues** and **500 pull requests** updated in the last 24 hours. This indicates a very active community and a maintainer team pushing through a significant workload. A new release, **v2026.7.1**, has landed, introducing new AI model providers and updating defaults. However, the project is grappling with a substantial regression burden, with several **P0 and P1 bugs** concerning data loss, session corruption, and critical startup failures. While the new release brings exciting features, the sheer volume of stability issues suggests the development cycle is currently prioritizing firefighting over new feature development.

### 2. Releases: v2026.7.1

- **New Release:** `v2026.7.1` (openclaw 2026.7.1)
- **Link:** [v2026.7.1 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1)

**Highlights:**
- **New Models & Providers:** Added support for Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, and the new ClawRouter.
- **Updated Defaults:** GPT-5.6 has become the new default model for fresh setups. This includes `/think ultra` mode for Sol and Terra agents and `max` for Luna agents.
- **Z.AI Support:** The system now honors the `max` reasoning setting for Z.AI provider models.
- **OAuth UX:** Model availability will now refresh correctly after an OAuth authentication flow.

**Implicit Migration Note:** Users with existing configurations should verify their default model settings, as the upgrade may not automatically switch them to GPT-5.6. The release also appears to have introduced a regression in the `models list` command (see Issue #106914).

### 3. Project Progress

A total of **225 PRs were merged or closed** in the last 24 hours. This indicates significant forward momentum on many fronts, despite the high bug count. Key areas of progress include:

- **Code Quality & Architecture:** Maintainer steipete has been actively refactoring core systems. Notable PRs include extracting session runtime logic (`#107008`), improving session catalog liveness for adopted sessions (`#107009`), and isolating provider hooks in tests for performance (`#107022`).
- **Platform & Channel Improvements:**
    - **macOS:** A major native-feel dashboard update is in progress (`#107004`), including instant reopen and route memory.
    - **Discord:** A significant feature to notify agents of voice participant changes (join/leave) is ready for review (`#107004`).
    - **Stability:** Critical fixes are moving through the pipeline, including fixes for Slack startup timeouts (`#105893`), Matrix message display (`#99057`), and MS Teams file upload timeouts (`#104120`).
- **Bug Fixing:** Several fix PRs are in the review queue, targeting a range of issues from Gmail watcher loops (`#106314`) to SQLite linkage diagnostics (`#106980`) and backtick overflow in markdown parsing (`#107019`).

### 4. Community Hot Topics

- **Issue #75: Linux/Windows Clawdbot Apps:** With **112 comments** and **81 reactions**, this long-standing feature request continues to be the community's most desired item. The demand for full desktop parity across all major operating systems is clear and persistent.
    - **Link:** [Issue #75](https://github.com/openclaw/openclaw/issues/75)

- **Issue #7707: Memory Trust Tagging by Source:** With **18 comments**, this feature request highlights a growing security consciousness among users. The community wants to prevent "memory poisoning" attacks by allowing the agent to trust or distrust memory based on its origin (user, web, etc.), showing a sophisticated understanding of AI security risks.
    - **Link:** [Issue #7707](https://github.com/openclaw/openclaw/issues/7707)

- **Issue #6615: Denylist Support for Exec-Approvals:** This request has **7 reactions** and seeks a "deny, unless allowed" policy for dangerous commands, complementing the current "allow, unless denied" model. This reflects a need for more granular and security-conscious control over agent actions.
    - **Link:** [Issue #6615](https://github.com/openclaw/openclaw/issues/6615)

### 5. Bugs & Stability

The project is currently under significant stability pressure, with several critical (P0) and high-priority (P1) bugs reported recently.

**Critical (P0) & High Priority (P1) Issues:**

- **P0 - Data Corruption:** Issue #104721: All tool results returning the literal string `"(see attached image)"`. This is a catastrophic regression that destroys the user experience and is considered a **release blocker**. (No linked fix PR).
    - **Link:** [Issue #104721](https://github.com/openclaw/openclaw/issues/104721)
- **P0 - Database Corruption:** Issue #101290: The CLI startup preflight health check can corrupt the live state database while the gateway is running, causing a "database disk image is malformed" error. (No linked fix PR).
    - **Link:** [Issue #101290](https://github.com/openclaw/openclaw/issues/101290)
- **P0 - Startup Blockers:** Issue #103076: Multiple legacy-state migration sources are blocking gateway startup, preventing the system from running at all. (No linked fix PR).
    - **Link:** [Issue #103076](https://github.com/openclaw/openclaw/issues/103076)
- **P1 - Session Context Loss:** Issue #104121: A new bug reported today involving subagent/parent delivery context leaking across different users in the same Telegram bot, a regression of a previously "fixed" issue.
    - **Link:** [Issue #104121](https://github.com/openclaw/openclaw/issues/104121)
- **P1 - Crash Loop:** Issue #76275: Users report a gateway restarting loop after specific updates. (Linked PR exists).
    - **Link:** [Issue #76275](https://github.com/openclaw/openclaw/issues/76275)
- **P1 - Data Loss:** Issue #77012: WebChat transcripts are overwritten on every turn, a regression from a major refactor. (No linked fix PR).
    - **Link:** [Issue #77012](https://github.com/openclaw/openclaw/issues/77012)
- **P1 - Regression:** Issue #77443: WhatsApp plugin blocks the Node.js event loop on Windows. (No linked fix PR).
    - **Link:** [Issue #77443](https://github.com/openclaw/openclaw/issues/77443)

### 6. Feature Requests & Roadmap Signals

The community's feature requests fall into three main categories, indicating the likely roadmap direction:

1.  **Platform Expansion:** The top priority remains **Linux/Windows support** (Issue #75). Next would likely be **mobile feature parity** and **Twilio RCS channels** (#105025).
2.  **Security & Sandboxing:** There is a strong push for **Filesystem Sandboxing** (#7722), **Memory Trust Tagging** (#7707), and **denylist-based exec approvals** (#6615). These are complex, high-impact features that would take time to design and implement.
3.  **Tooling & Configuration:** Users are requesting more robust tooling, such as a **`/models test-fallback` command** (#6599), **per-model timeouts** (#8724), and **cost tracking from providers** (#9016).

**Prediction for Next Release:** The next minor version (v2026.7.x) will likely focus almost entirely on **bug fixes and stability patches** for the critical P0/P1 regressions introduced in v2026.7.1 and previous versions. New feature work is unlikely until the stability crisis is under control.

### 7. User Feedback Summary

- **Pain Points:** The dominant user sentiment is frustration with **regressions**. Recent updates have introduced several high-impact bugs that break core functionality, such as seeing "see attached image" for all outputs, losing chat transcripts, and encountering database corruption. This creates a sense of instability and unreliability, even for stable channel users.
- **Satisfaction:** There is clear enthusiasm for the rapid addition of new models (Featherless, Claude Sonnet 5). The community appreciates the project's drive to stay on the cutting edge of AI model availability.
- **Use Cases:** Users are leveraging OpenClaw for complex multi-agent workflows, cross-channel management (Telegram, Discord, Slack, LINE), and developing custom plugins. The demand for features like Memory Trust Tagging and Exec-Approval Denylists shows users are deploying agents in production-like or security-sensitive environments.

### 8. Backlog Watch

Several important issues and PRs are at risk of stagnating, requiring maintainer attention:

- **Issue #10687: Fully Dynamic Model Discovery:** This has **10 comments** and has been open since February. It proposes a significant architectural change to model handling, making it a complex but important feature. It is currently awaiting a product decision.
    - **Link:** [Issue #10687](https://github.com/openclaw/openclaw/issues/10687)
- **PR #81857: Scope Tool Lookup to Loaded Plugins:** This PR, opened in May, has been ready for a maintainer review for two months. It addresses a critical bug where tool resolution can return zero tools for correctly loaded plugins.
    - **Link:** [PR #81857](https://github.com/openclaw/openclaw/pull/81857)
- **Issue #7722: Filesystem Sandboxing Config:** This 10-comment discussion on security sandboxing has been lingering since February, waiting for a product decision on a design that could significantly improve the security posture of the agent runtime.
    - **Link:** [Issue #7722](https://github.com/openclaw/openclaw/issues/7722)

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report, aggregating the intelligence from the individual project digests.

---

### Cross-Project Comparison Report: AI Agent Open-Source Ecosystem
**Date:** 2026-07-14

#### 1. Ecosystem Overview

The personal AI agent open-source landscape is characterized by intense, high-velocity development and increasing productionization. Projects are emerging from a phase of feature experimentation into a cycle of stability and security hardening, driven by real-world user deployment. A clear schism is emerging between "swiss-army-knife" generalists like OpenClaw and NullClaw, and more opinionated, workflow-focused platforms like ZeroClaw and CoPaw. The community’s top concerns have shifted from "can it do this?" to "can I trust it not to break and not to leak my data?" evidenced by a surge in bug reports, security advisories, and requests for configurable safety controls. While the ecosystem is diverse, there is a universal emphasis on multi-channel support (Telegram, Discord, Slack, WeChat), multi-agent collaboration, and sophisticated memory/context management.

#### 2. Activity Comparison

The table below provides a high-level activity snapshot of tracked projects over the last 24 hours, based on GitHub event counts. "Health Score" is a qualitative assessment based on the ratio of new features vs. critical bugs, responsiveness, and release cadence.

| Project | Issues Updated | PRs Updated | Release Status | Health Score | Primary Focus |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | v2026.7.1 released | 🔴 **Critical** | High regression burden, P0 data corruption bugs. |
| **ZeroClaw** | 50 | 50 | v0.8.3 closing | 🟡 **Moderate** | Active feature dev (SOP, memory), but several S1 bugs. |
| **Hermes Agent** | 50 | 50 | No new release | 🟢 **Good** | Heavy backlog cleanup (IME/input fixes), stabilizing. |
| **IronClaw** | 34 | 50 | No new release | 🟡 **Moderate** | Big bug bash underway; NEA-25 model being merged. |
| **NanoClaw** | 3 (closed) | 33 | No new release | 🟢 **Good** | High merge velocity; security fixes landed. Nearing release. |
| **NanoBot** | 14 | 44 | No new release | 🟢 **Good** | Rapid iteration on Dream subsystem & architecture. |
| **CoPaw** | 50 | 50 | v2.0.0.post1 released | 🔴 **Critical** | Stability crisis post v2.0; context compression broken. |
| **PicoClaw** | 0 | 4 | No new release | 🟡 **Moderate** | Low activity; one critical Gemini bug. |
| **LobsterAI** | 0 | 15 | No new release | 🟢 **Good** | High merge velocity; critical Windows & security fixes. |
| **NullClaw** | 0 | 11 | No new release | 🟢 **Good** | Healthy build-up phase; no regressions. |
| **Moltis** | 0 | 1 | No new release | 🟢 **Dormant** | Very low activity; one significant CalDAV bug. |
| **TinyClaw** | 0 | 0 | None | N/A | No activity. |
| **ZeptoClaw** | 0 | 0 | None | N/A | No activity. |

*Note: The high issue/PR numbers for some projects are partly due to GitHub's lumping of all events on the repo, but they still accurately reflect very high activity levels.*

#### 3. OpenClaw's Position

**Advantages:**
- **Scale & Integration Breadth:** OpenClaw leads in raw platform support (Discord, Slack, Telegram, MS Teams, LINE) and boasts the most advanced model provider catalog, rapidly adding models like Claude Sonnet 5 and Meta Muse Spark. Its "ClawRouter" ecosystem is a unique differentiator.
- **Feature Velocity:** The project ships new models and features (e.g., `/think` modes, Z.AI support) at an unmatched cadence.

**Technical Approach:**
- OpenClaw is a heavy, monolithic reference implementation. It prioritizes maximum configurability and feature density, which leads to the current stability challenges. Its architecture is less modular than ZeroClaw's plugin-based system.

**Community Size & Comparison:**
- While specific contributor counts are unavailable, OpenClaw's community is the largest and most vocal, generating the highest issue volumes. This is a double-edged sword: it provides immense pressure for features but also immense scrutiny on bugs.
- **Compared to:** OpenClaw is the **'Wild West' frontier town**—exciting, fast-growing, but crime-ridden (bugs). ZeroClaw is the **planned city** with stricter building codes (RFC process). CoPaw is the **recently renovated building** where the plumbing is now leaking.

#### 4. Shared Technical Focus Areas

Several critical requirements are emerging independently across multiple projects, indicating core industry needs.

- **Security Hardening & Safe Execution:**
    - **MCP Tool Allowlisting:** NanoClaw (#3037) and OpenClaw (#6615) are adding explicit allow/deny lists for tool execution.
    - **Filesystem Sandboxing:** OpenClaw (#7722), ZeroClaw (#8973, Landlock), and CoPaw (#5931, Windows sandbox) are all implementing OS-level sandboxing.
    - **Approval Flow Smuggling:** Both NanoClaw (#2827) and IronClaw (#5885) have reported bugs where users could be tricked into approving actions (MCP payloads, unknown tools).

- **Provider-Optimized Memory & Context Management:**
    - **Context Compression Breakage:** CoPaw (#5960) and Hermes Agent (#64072) suffer from severe regressions in their context compression logic that break tool call sequences. This is a shared, systemic problem.
    - **Persistent/Structured Memory:** NanoClaw (#3012) and OpenClaw (#7707) are moving towards typed, source-tagged, and provider-agnostic memory trees, moving beyond simple message logs.
    - **Rolling Caching:** PicoClaw (#3229) is specifically requesting "rolling cache breakpoints" for Anthropic to reduce token costs.

- **User Experience & Reliability Engineering:**
    - **CJK Text Handling:** Hermes Agent fixed a massive regression where Chinese/Japanese/Korean IME input was broken on the desktop app, a critical UX requirement for the global user base.
    - **Windows Platform Parity:** OpenClaw (#75, Linux/Windows app demand), LobsterAI (#2327, installer signing), and ZeroClaw (#9028, force-quit) are all fixing platform-specific issues, highlighting Windows as the most problematic deployment target.
    - **State & Data Corruption:** OpenClaw (#101290, database corruption), IronClaw (#5836, "No thread attached" routine failure), and CoPaw (#5960, session-breaking context compression) all suffer from fundamental state management bugs.

#### 5. Differentiation Analysis

| Feature Axis | OpenClaw / NullClaw | ZeroClaw / IronClaw | NanoBot / NanoClaw | CoPaw / LobsterAI |
|---|---|---|---|---|
| **Target User** | Early adopter / Hobbyist | Enterprise / Production | Developer / Tinkerer | Office / Personal productivity |
| **Architecture** | Monolithic, heavy | Modular, plugin/WASM | Lightweight, Pythonic | Application-centric, opinionated |
| **Core Philosophy** | Maximum features & integration | Scalability & governance | Simplicity & iteration | Specific workflow enablement |
| **Security Model** | Basic (sandbox emergent) | Formal (Landlock, SOP) | Reactive (fixing bugs) | Aggressive (sandbox-first) |
| **Major Innovation** | ClawRouter ecosystem | Work Lanes / SOP | Dream / Memory subsystem | Cowork (multi-agent) UI |

**Summary:**
- **ZeroClaw** is winning on governance and architecture by formalizing a Standard Operating Procedure (SOP) for automation.
- **NanoClaw** leads in raw security response, addressing MCP smuggling and silent message drops with rapid patches.
- **LobsterAI** is the most focused on desktop-native polish with its notification manager and Windows installer overhaul, positioning it for enterprise distribution.
- **CoPaw** has the most aggressive security posture (sandbox-on-by-default) but is paying the price in user backlash for breaking existing workflows.

#### 6. Community Momentum & Maturity

**Tier 1 (Rapidly Iterating & High Risk):**
- **OpenClaw:** Extremely high feature velocity, but this is causing critical stability regressions. The project is in a "move fast and break things" phase, and the breaks are starting to outweigh the moves in terms of user satisfaction.
- **CoPaw:** Experiencing the most pain of any project post-major-release. The v2.0.0 overhaul has created significant churn and user frustration. The next patch will be crucial for regaining trust.

**Tier 2 (Stable & Maturing):**
- **ZeroClaw:** Demonstrating disciplined release management (v0.8.x milestones) and architectural rigor. The project is maturing towards a stable, governable platform.
- **Hermes Agent:** Actively and effectively clearing a major backlog of desktop usability bugs, indicating a shift from feature growth to platform stability.
- **NanoClaw:** High merge velocity with a strong security focus. The project feels close to a stable release but is still adding features aggressively.

**Tier 3 (Steady State / Low Activity):**
- **LobsterAI:** A focused "burst" of fixes and features, suggesting a sprint towards a point release. Appears healthy but not scaling as fast as Tier 1.
- **NullClaw & NanoBot:** In a healthy, feature-building phase without major regressions. They represent the safe, iterative approach to agent development.

**Tier 4 (Dormant / At-Risk):**
- **Moltis:** Very low activity, a single critical bug unfixed. May be at risk of stagnation.
- **TinyClaw & ZeptoClaw:** No activity, effectively dormant or abandoned for now.

#### 7. Trend Signals

- **The Great Stability Backlash:** The ecosystem-wide user sentiment is shifting from "give me more models" to "stop breaking my setups." Projects that fail to prioritize reliability will see users defect to more stable, if less feature-rich, alternatives.
- **The Security Maturity Curve:** Projects are being forced to adopt formal security models (Landlock, SOP, allowlists) not just to prevent bad actors, but to prevent their own agents from making catastrophic mistakes (e.g., deleting files via a hallucinated shell command). Smart default policies are becoming a competitive advantage.
- **The Cost of Context:** There is a universal realization that the "infinite context" promise is broken in practice. The industry is groping for solutions: better caching (PicoClaw), intelligent compression (CoPaw), typed memory retrieval (ZeroClaw, NanoClaw). The project that solves this elegantly will win the next cycle.
- **The Rise of the Agent-First Desktop:** The steady stream of desktop app bugs and feature requests (IME, Windows signing, system tray, notifications) proves that the desktop is the definitive deployment target for personal AI agents. Mobile and web are secondary.

**Value for developers:** Building an AI agent today without robust state management, a formal security sandbox module, and a dedicated QA process for Windows and macOS desktop apps is a recipe for failure. The community has already written the spec for what a "minimum viable product" truly requires: security, stability, and sensible defaults over raw feature count.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-07-14

## Today's Overview

NanoBot shows **high development activity** with 44 pull requests updated in the last 24 hours (27 open, 17 merged/closed) and 14 issues updated (3 active, 11 closed). The project has no new releases today, but the intense PR volume—including infrastructure refactors, bug fixes, and feature work—indicates a **rapidly evolving codebase**. Key areas of focus include channel architecture decoupling, Dream subsystem fixes, session management, and documentation reorganization. The community is actively contributing, with several long-standing issues finally being addressed.

## Releases

No new releases were published today.

## Project Progress

Last 24 hours saw **17 merged/closed PRs** advancing multiple areas:

- **Infrastructure & Core**: [#4908](https://github.com/HKUDS/nanobot/pull/4908) (REFACTOR) moves channel setup and instance ownership to channels, decoupling architecture. [#4866](https://github.com/HKUDS/nanobot/pull/4866) (FEATURE) binds model presets to sessions, persisting LLM configuration per session.

- **Dream/Memory Subsystem**: [#4909](https://github.com/HKUDS/nanobot/pull/4909) fixes Dream ignoring line-ending-only memory diffs. [#4882](https://github.com/HKUDS/nanobot/pull/4882) (CLOSED) addressed empty file diff reporting. [#4894](https://github.com/HKUDS/nanobot/pull/4894) fixed base64-encoded session pruning.

- **Documentation**: [#4916](https://github.com/HKUDS/nanobot/pull/4916) reorganizes docs around user workflows. [#4913](https://github.com/HKUDS/nanobot/pull/4913) updates recent changes through July 12. [#4912](https://github.com/HKUDS/nanobot/pull/4912) removes broken Star History embed.

- **Internationalization**: [#4914](https://github.com/HKUDS/nanobot/pull/4914) adds Brazilian Portuguese (pt-BR) WebUI locale.

- **Audit & Observability**: [#4320](https://github.com/HKUDS/nanobot/pull/4320) (MERGED) adds `tools.audit` config and AuditTool for agent action tracking.

## Community Hot Topics

1. **[#1011](https://github.com/HKUDS/nanobot/issues/1011) - Mattermost Bot Request** (4 👍, Closed)
   - User requested Mattermost integration, comparing it favorably to Discord/Telegram/Slack. The 4 upvotes indicate sustained interest in an alternative channel beyond major platforms. *Closed as stale, but remains a potential future feature.*

2. **[#4864](https://github.com/HKUDS/nanobot/issues/4864) - Endless loop with `<tool_call>`** (3 comments, Open)
   - Critical bug: `complete_goal` tool repeatedly errors because gateway parses `recap` parameter as bare string instead of JSON. Impacts agent reliability directly. No fix PR linked yet.

3. **[#4897](https://github.com/HKUDS/nanobot/issues/4897) - Discord bot integration failure** (3 comments, Closed)
   - User reports bot shows online but receives no messages despite correct setup. Likely a configuration or authentication issue that was resolved via community help.

4. **[#1500](https://github.com/HKUDS/nanobot/issues/1500) - Forced Information-Flow Output** (1 👍, Closed)
   - Strong UX concern: User objects to mandatory verbose tool-call output. Proposes message-level filtering (info/warning/error) akin to logging systems. The "project had no updates, decided not to notify user" example highlights a broken mental model for users. *Closed, but the underlying need for output verbosity control remains.*

**Underlying Need Analysis**: The two highest-signal issues both touch the same pain point: **users want control over what their agent shows them**. #1500 asks for output verbosity tiers; #4864 reveals messy tool serialization that confuses both users and the system. This suggests the next release should prioritize **configurable output modes** and **saner default serialization** for tool parameters.

## Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) Endless loop in `complete_goal` due to gateway serialization bug | **Open** | None |
| **High** | [#4787](https://github.com/HKUDS/nanobot/issues/4787) Unbounded `Session.messages` list causes resource leak in long-running sessions | **Open** | None |
| **Medium** | [#4887](https://github.com/HKUDS/nanobot/issues/4887) Feishu tests fail because `lark-oapi` missing from dev deps | **Closed** | None listed |
| **Low** | [#4917](https://github.com/HKUDS/nanobot/issues/4917) Windows subprocess output shows embedded NUL bytes (UTF-16 decoding) | **Open** | [#4917](https://github.com/HKUDS/nanobot/pull/4917) |
| **Low** | [#4909](https://github.com/HKUDS/nanobot/issues/4909) Dream memory diffs report CRLF-only changes as modifications | **Closed** | [#4909](https://github.com/HKUDS/nanobot/pull/4909) |
| **Low** | [#4798](https://github.com/HKUDS/nanobot/issues/4798) Workspace file writes from concurrent sessions corrupt each other | **Open** | [#4888](https://github.com/HKUDS/nanobot/pull/4888) |

**Ranking Rationale**: [#4864](https://github.com/HKUDS/nanobot/issues/4864) is critical because it breaks core agent completion logic and produces infinite error loops. [#4787](https://github.com/HKUDS/nanobot/issues/4787) is high-risk for production deployments with long-lived sessions—unbounded memory growth will crash instances. The remaining bugs are milder but affect Windows users, Dream subsystem, and concurrent workflows.

## Feature Requests & Roadmap Signals

| Request | Issue/PR | Predicted Timeline |
|---------|----------|-------------------|
| **Mattermost channel support** | [#1011](https://github.com/HKUDS/nanobot/issues/1011) | Low priority (closed stale) |
| **Output verbosity control** | [#1500](https://github.com/HKUDS/nanobot/issues/1500) | Possibly next release — high user demand |
| **Heartbeat trigger command** | [#4620](https://github.com/HKUDS/nanobot/pull/4620) | Next release — PR open, addresses [#3437](https://github.com/HKUDS/nanobot/issues/3437) |
| **Model preset per session** | [#4866](https://github.com/HKUDS/nanobot/pull/4866) | Next release — PR merged |
| **WebUI settings parity** | [#4313](https://github.com/HKUDS/nanobot/pull/4313) | In progress — closes config.json ↔ WebUI gap |
| **Brazilian Portuguese locale** | [#4914](https://github.com/HKUDS/nanobot/pull/4914) | Next release — already merged |
| **Audit tool for agent actions** | [#4320](https://github.com/HKUDS/nanobot/pull/4320) | Already merged — available now |
| **Guarded tool gateway for channels** | [#4911](https://github.com/HKUDS/nanobot/issues/4911) | Next cycle — newly filed, design phase |

**Prediction**: The next release (likely v0.2.3 or v0.3.0) will ship **heartbeat trigger command**, **model preset per session**, **WebUI i18n parity improvements**, and likely **workspace write serialization** ([#4888](https://github.com/HKUDS/nanobot/pull/4888)). Output verbosity controls may appear if the maintainers prioritize UX polish, but the volume of Dream and infrastructure PRs suggests those take precedence.

## User Feedback Summary

**Pain Points (explicitly mentioned):**
- **Verbose tool output** (#1500): "I don't want to see detailed thinking steps every time" — UX frustration with mandatory info dump
- **Discord bot setup confusion** (#4897): Bot appears online but user receives no messages — likely authentication misunderstanding
- **Feishu file attachment issues** (#2352): Bot cannot access files sent via Feishu; attempts browser-based download instead of MCP interface
- **Developer friction** (#4887): Missing dev dependency breaks test suite for Feishu-related tests, hides CI failures

**Use Cases (revealed by issues):**
- **Scheduled monitoring** (#1500): Cron job checking for project updates — user wanted silent "no news" behavior but got full execution log
- **Long-running sessions** (#4787): Production deployments with unified sessions face unbounded memory growth
- **Multi-platform channel support** (#1011, #192, #2352): Users want Mattermost, WeChat, Feishu as alternatives to Discord/Telegram

**Satisfaction Signals:**
- High PR volume (44) suggests active contributor base satisfied with codebase quality
- Quick closure of most filed bugs (11/14 issues closed) indicates responsive maintainers
- Brazilian Portuguese locale contribution (#4914) shows community investing in the project's future

**Dissatisfaction Signals:**
- Three "stale" or "closed" issues (#192, #1011, #1500) without resolution could frustrate users who feel ignored
- Critical bugs (#4864, #4787) remaining open undermines reliability for production users

## Backlog Watch

| Issue/PR | Days Open | Last Updated | Why It Matters |
|----------|-----------|--------------|----------------|
| [#1599](https://github.com/HKUDS/nanobot/pull/1599) — Telegram streaming via `sendMessageDraft` | 130 days | 2026-07-13 | **Longest-open PR**. Adds real-time token streaming to Telegram. Has unresolved conflicts. Could unblock Telegram UX. |
| [#1500](https://github.com/HKUDS/nanobot/issues/1500) — Output verbosity control | 131 days | 2026-07-13 | Closed stale, but 1 👍 shows user demand. No resolution plan. |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) — Mattermost channel | 142 days | 2026-07-13 | 4 👍, closed stale. Community clearly wants it. |
| [#192](https://github.com/HKUDS/nanobot/issues/192) — WeChat integration | 158 days | 2026-07-13 | Closed stale, but WeChat remains a massive unmet platform. |
| [#2376](https://github.com/HKUDS/nanobot/issues/2376) — Two assistant messages at list end | 113 days | 2026-07-13 | Closed, but root cause not fully fixed — similar issues may recur. |
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) — Unbounded session messages | 8 days | 2026-07-14 | **High severity, recently filed**. No assignee or PR. Critical for production. |

**Maintainer Attention Required:**
1. **[[#1599]](https://github.com/HKUDS/nanobot/pull/1599)** needs conflict resolution — a maintainer review could land a highly-requested Telegram feature after 4+ months.
2. **[[#4787]](https://github.com/HKUDS/nanobot/issues/4787)** — unbounded `Session.messages` list is a ticking time bomb for any deployment with long-lived sessions. This should be triaged as P0.
3. **Long-stale channel requests** (#1011, #192) deserve a formal roadmap answer: is Mattermost/WeChat planned, or should community build it themselves?

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-14

## 1. Today's Overview

Hermes Agent shows extremely high activity today with 50 issues and 50 pull requests updated in the last 24 hours, indicating a major development push. The vast majority of issues (41 of 50) were closed, suggesting maintainers are clearing a substantial backlog of bug reports, primarily from early June. No new releases were published today. The open PR count (48) is unusually high, signaling a large batch of incoming changes that have not yet been merged. Overall, the project appears to be in a heavy maintenance and stabilization phase, with particular focus on desktop IME/input bugs, gateway routing fixes, and infrastructure hardening.

## 2. Releases

**No new releases today.** The latest release remains v0.15.2 (implied by issue references). Users on v0.15.1 are still being urged to upgrade to resolve known bugs.

## 3. Project Progress

Only 2 PRs were merged or closed today out of 50 updated, indicating most patches are still under review. However, 41 issues were closed, suggesting fixes landed via earlier merges or maintainer triage. Key areas of progress evidenced by closed issues:

- **Desktop IME/input fixes (closed):** Issues #39534, #39538, #39651, #39620, #39636, #39786 — all Chinese/Japanese/Korean IME composition bugs from early June appear to have been fixed on `main`.
- **CLI stability (closed):** Issues #39674, #39503, #39472, #39631, #39549 — `ModuleNotFoundError` for `dashboard_auth`, `--tui` argument regression, dashboard frontend 404 on macOS, and update abort with `ValueError` were all resolved.
- **Tool/vision fixes (closed):** Issues #39685, #39242 — Xiaomi API 400 errors on multimodal results and `computer_use` calling non-existent `screenshot` tool are fixed.
- **Security fix (closed):** Issue #39599 — auxiliary vision routing leaking `OPENAI_API_KEY` to Gemini backend was patched.

Open PRs submitted today target: SQLite pragma optimization (#64091), Telegram callback script bridge (#38793), late-steer fallback ack (#64083), pre-tool-use enforcement hooks (#64084), desktop async delegation display (#64094), macOS lock-screen agent suspension fix (#64098), and multiple bug fixes for Telegram infinite loops (#64082), MCP TimeoutError (#64072), DeepSeek API compatibility (#64087), and cron one-shot+repeat logic (#64088).

## 4. Community Hot Topics

**Most active issues (by comments):**

1. **[#39534 [Bug]: v0.15.1 Chinese prompt truncated in desktop chat window](https://github.com/NousResearch/hermes-agent/issues/39534)** — 8 comments, 0 👍. Describes a serious Chinese text display bug where typed input appears cut off. Now closed as fixed on main. This was clearly a high-pain issue for CJK users.

2. **[#39538 [Bug]: Desktop composer drops or fails to send CJK IME text on Enter](https://github.com/NousResearch/hermes-agent/issues/39538)** — 6 comments, 2 👍. Another IME bug affecting Japanese/Korean/Chinese users; pressing Enter fails to send. Closed with fix on main.

3. **[#56580 [Bug]: kanban creator-agent wake mis-routes for DM/thread task creators](https://github.com/NousResearch/hermes-agent/issues/56580)** — 4 comments, 0 👍. **Still open.** Hardcoded `chat_type="group"` breaks session routing for DM/thread creators. This is a gateway/cron bug with P2 severity and remains unaddressed.

4. **[#39549 [Bug]: `hermes update` aborts with ValueError; leaves half-updated state](https://github.com/NousResearch/hermes-agent/issues/39549)** — 3 comments, 5 👍. High user impact — update process leaves installation broken with no retry mechanism. Likely frustrating for users on slow connections. Now closed.

5. **[#39651 [Bug]: IME composition causes send button to show as voice button](https://github.com/NousResearch/hermes-agent/issues/39651)** — 4 comments, 0 👍. A visual/functional bug where short IME text triggers wrong UI state. Closed with fix.

**Analysis:** The overwhelming theme from community activity is **CJK/IME input dysfunction across the desktop app**. Users from Chinese, Japanese, Korean, and Vietnamese language backgrounds reported nearly identical bugs over a 1-week period (June 5-11), with maintained attention through July 14. The volume (7+ related issues) and consistent 2-8 comment counts suggest a coordinated user base encountering a recent regression (v0.15.1). These are now all closed, suggesting the maintainers prioritized this correctly.

## 5. Bugs & Stability

**Critical/P0 bugs opened today:**

| Issue | Severity | Component | Status |
|-------|----------|-----------|--------|
| [#64072: MCP spins on TimeoutError instead of surfacing](https://github.com/NousResearch/hermes-agent/pull/64072) | **P0** | comp/agent, tool/mcp | Fix PR open |
| [#64080: Stale housekeeping fallback on substantive tool-only turn](https://github.com/NousResearch/hermes-agent/pull/64080) | **P1** | comp/agent | Fix PR open (duplicate) |

**High severity (P2) bugs:**

| Issue | Component | Status |
|-------|-----------|--------|
| [#56580: kanban creator-agent wake mis-routes for DM/thread](https://github.com/NousResearch/hermes-agent/issues/56580) | comp/gateway, comp/cron | **Still open** — no fix PR |
| [#64082: Telegram infinite 409 conflict loop](https://github.com/NousResearch/hermes-agent/pull/64082) | platform/telegram | Fix PR open |
| [#64087: DeepSeek API 400 on empty assistant tool_calls messages](https://github.com/NousResearch/hermes-agent/pull/64087) | provider/deepseek | Fix PR open |
| [#64088: Cron one-shot+repeat>1 silently drops runs](https://github.com/NousResearch/hermes-agent/pull/64088) | comp/cron | Fix PR open |
| [#64081: Console windows flash on Windows despite hiding config](https://github.com/NousResearch/hermes-agent/pull/64081) | comp/tools, platform/windows | Fix PR open |
| [#27989: Azure Foundry /model picker shows 0 models](https://github.com/NousResearch/hermes-agent/issues/27989) | comp/cli, provider/openai | **Still open** — 2 👍, 1 comment, unresolved since May 18 |

**Medium severity (P3) bugs with fixes in PR today:**

| Issue | Component | Status |
|-------|-----------|--------|
| [#64074: Windows+WSL POSIX media paths fail to render](https://github.com/NousResearch/hermes-agent/pull/64074) | comp/desktop, platform/windows | Fix PR open |
| [#64069: Title generator shows workspace metadata instead of user prompt](https://github.com/NousResearch/hermes-agent/pull/64069) | comp/agent | Fix PR open |
| [#64070: UTF-8 corruption in Copilot ACP file handlers on Windows](https://github.com/NousResearch/hermes-agent/pull/64070) | comp/agent | Fix PR open |
| [#64071: Slack block_kit assert fails under python -O](https://github.com/NousResearch/hermes-agent/pull/64071) | platform/slack | Fix PR open |
| [#64077: Telegram callback TimedOut crashes polling loop](https://github.com/NousResearch/hermes-agent/pull/64077) | platform/telegram | Fix PR open |
| [#64085: Cron job output delivery failure causes silent data loss](https://github.com/NousResearch/hermes-agent/pull/64085) | comp/cron | Fix PR open |
| [#64086: TTS overlapping speech when new reply starts](https://github.com/NousResearch/hermes-agent/pull/64086) | tool/tts | Fix PR open |

**Today's zero-day regression risk:** The P0 MCP TimeoutError fix (#64072) addresses a bug where the agent hangs indefinitely spinning instead of surfacing a real timeout — this is a critical reliability issue for production MCP tool use.

## 6. Feature Requests & Roadmap Signals

**Features requested and implemented (now closed):**

| Issue | Feature | Status |
|-------|---------|--------|
| [#39768: Streamline review threads](https://github.com/NousResearch/hermes-agent/issues/39768) | Reduce LLM context bloat from review threads firing every 10 turns | Closed, implemented on main |
| [#39596: Profile switching in Desktop](https://github.com/NousResearch/hermes-agent/issues/39596) | Add ability to switch profiles from Desktop UI | Closed, implemented on main |
| [#39571: Chinese (Simplified) localization](https://github.com/NousResearch/hermes-agent/issues/39571) | Full Chinese UI translation contributed by community | Closed, implemented on main |
| [#39696 / #39699: WeChat messages visible in Web UI](https://github.com/NousResearch/hermes-agent/issues/39696) | Cross-platform session visibility for WeChat gateway | Closed, feature implemented |

**Features being actively worked on (open PRs today):**

| PR | Feature | Stage |
|----|---------|-------|
| [#38793: Telegram profile-local callback scripts](https://github.com/NousResearch/hermes-agent/pull/38793) | Custom Telegram inline button handlers | Open, needs decision |
| [#64083: Late-steer fallback with context-aware ack](https://github.com/NousResearch/hermes-agent/pull/64083) | Graceful handling of late steers | Open, review |
| [#64084: Pre-tool-use enforcement hooks](https://github.com/NousResearch/hermes-agent/pull/64084) | Programmatic prompt-level tool rules | Open, review |
| [#64094: Surface async process/delegation results in chat](https://github.com/NousResearch/hermes-agent/pull/64094) | Better visibility for background process completions | Open, review |
| [#64068: WhatsApp bridge persistent lifecycle events](https://github.com/NousResearch/hermes-agent/pull/64068) | Structured health monitoring for WhatsApp bridge | Open, review |

**Roadmap signals:** The influx of PRs addressing Telegram stability, WhatsApp bridge monitoring, and cron delivery reliability suggests the team is investing in **production-grade messaging gateway infrastructure**. The pre-tool-use hooks (#64084) indicate a move toward more **auditable and rule-governed agent behavior**. The lack of any vision/agent-core feature PRs today relative to the high volume of infrastructure fixes suggests the roadmap is currently in a **stability and hardening phase** rather than adding new capabilities.

## 7. User Feedback Summary

**Pain points (based on issues):**

- **CJK input is broken on Desktop (v0.15.1):** The most vocal group — Chinese (#39534, #39786, #39651, #39571), Japanese (#39538, #39620), Korean (#39538), and Vietnamese (#39636) users all experienced truncation, non-sending, or garbled text when using IMEs. Multiple users described the bug as "extremely weird" and a blocker for everyday use. All now closed.
- **Updates break installations:** User `eno0000` on #39549 (5 👍) described `hermes update` leaving the installation in a half-updated state with no recovery path — a reliability concern.
- **Zero models shown for Azure Foundry:** Issue #27989 (2 👍), open since May 18, frustrates Azure customers who cannot use `/model` picker.
- **Dashboard session deletion silently fails:** #39781 — deleting sessions in dashboard UI does nothing, no error shown.
- **Image editing fails:** #39658 — editing a message with images fails with "session busy" error.
- **Desktop sidebar horizontal overflow:** #39552 — sidebar breaks layout during thinking state.
- **DeepSeek API returns 400:** #39765 — HTTP 307 redirects cause failures for DeepSeek provider users.

**Positive signals:**

- The **Chinese localization contribution** (#39571) was well-received and merged — a volunteer completed 100% Simplified Chinese UI translation.
- **Quick fix turnaround:** The IME bugs filed June 5 were all closed by July 14, showing maintainers responded to the CJK regression with high priority.

## 8. Backlog Watch

**Issues needing maintainer attention (long-unresolved, high-impact):**

| Issue | Age | Severity | Last Activity | Status |
|-------|-----|----------|---------------|--------|
| [#27989: Azure Foundry /model picker shows 0 models](https://github.com/NousResearch/hermes-agent/issues/27989) | **57 days** (May 18) | P2 | Updated Jul 14 (no progress) | **No fix PR** — 2 👍 |
| [#56580: Kanban wake mis-routes for DM/thread creators](https://github.com/NousResearch/hermes-agent/issues/56580) | **13 days** (Jul 1) | P2 | Updated Jul 14 (4 comments) | **No fix PR** — hardcoded chat_type bug |

**Notable open PRs pending decision:**

| PR | Age | Component | Needs |
|----|-----|-----------|-------|
| [#38793: Telegram profile-local callback scripts](https://github.com/NousResearch/hermes-agent/pull/38793) | **40 days** (Jun 4) | platform/telegram | Needs maintainer decision — has `needs-decision` label |

**Observation:** The Azure Foundry issue (#27989) is the oldest open bug, dating to May 18, with probe code already written in `azure_detect.py` but not wired into the model picker. This is likely a low-priority edge case (Azure Foundry is less common than standard Azure OpenAI), but the 2 👍 and lack of fix for 8 weeks suggests it may be overlooked. The kanban wake issue (#56580) is only 13 days old but has clear severity (P2) and no PR yet — this may surface again as users adopt the kanban creator-agent feature.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-14

## 1. Today's Overview

PicoClaw shows moderate activity on 2026-07-14, with 4 open issues and 4 open pull requests updated in the last 24 hours, plus one PR merged. No new releases were published today. The project is engaged but currently grappling with a mix of bug fixes (Gemini API compatibility, model resolution logic) and deeper architectural requests (cryptographic library migration, conversation caching). The stale label on several high-value items signals a need for prioritization.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

One pull request was merged/closed today:

- **[PR #3253 – Feat/gateway webhook](https://github.com/sipeed/picoclaw/pull/3253)** (merged) by `tisoga`: Added a webhook feature for the gateway. Although the full description is brief, this appears to be a new feature landing for gateway event handling.

Additionally, one new open PR was opened today:

- **[PR #3254 – fix(agent): prefer verbatim model matches over provider-alias splits when resolving refs](https://github.com/sipeed/picoclaw/pull/3254)** by `fabdelgado`: Fixes a model resolution bug where a less-specific alias match could incorrectly override a verbatim model string match, improving provider alias behavior.

## 4. Community Hot Topics

The most active and commented issue this period is:

- **[Issue #3088 – Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)** – 8 comments, 2 👍. This long-standing feature request (created June 9) seeks to replace the unmaintained and insecure `libolm` with the official replacement `vodozemac`. The high priority and help-wanted label indicate maintainer interest, but the stale tag (last updated July 13) suggests stalled momentum. The community clearly values cryptographic security upgrades.

Other active but low-comment threads:

- **[Issue #3229 – Proposal: rolling conversation cache breakpoints for anthropic-messages](https://github.com/sipeed/picoclaw/issues/3229)** – 1 comment, by the author of the related PR #3228. This addresses a major cost/efficiency pain point for heavy agentic workloads. The underlying need is advanced caching for Anthropic users to avoid re-sending large conversation histories.

- **[Issue #3231 – SearXNG search with basic auth header](https://github.com/sipeed/picoclaw/issues/3231)** – 1 comment, a Chinese-language request for adding `basicauth` header support for SearXNG search integration.

## 5. Bugs & Stability

One bug was reported today:

- **[Issue #3230 – Function call missing thought_signature when calling Gemini API via OpenAI compat format](https://github.com/sipeed/picoclaw/issues/3230)** – **Severity: High**. Users sending tool-use requests to Gemini via Cloudflare AI Gateway (OpenAI compatibility layer) receive a missing `thought_signature` error. This affects versions 0.2.9 to 0.3.1. No fix PR exists yet. The issue blocks users who rely on OpenAI-compatible intermediaries for Gemini.

## 6. Feature Requests & Roadmap Signals

Several notable feature requests signal likely roadmap priorities:

- **Cryptographic library migration** (Issue #3088): Moving from `libolm` to `vodozemac` — a security-critical dependency replacement. Predicted to land in the next minor release if maintainers can resolve implementation blockers.

- **Advanced Anthropic conversation caching** (Issue #3229, PR #3228): Rolling cache breakpoints and volatile runtime context separation. The related PR #3228 (fix to enable `cache_control` on system blocks) is already open but stale. This likely targets the next version to reduce token costs for agentic users.

- **SearXNG basic auth support** (Issue #3231): A small but practical integration improvement for self-hosted search.

- **Webhook gateway feature** (PR #3253, just merged): Already landed — expect this in an upcoming release.

## 7. User Feedback Summary

Observed pain points:

- **Gemini compatibility friction**: Users report errors when routing Gemini through OpenAI-compatible gateways (Issue #3230). This indicates growing demand for multi-provider support with transparent API translation.
- **Token cost anxiety**: Heavy agentic workloads generate excessive input tokens, with users explicitly requesting advanced caching strategies (Issue #3229).
- **Security concerns**: Continued use of unmaintained `libolm` is a known pain point (Issue #3088), voiced by at least one contributor with 2 upvotes.
- **Self-hosting integration**: SearXNG users need basic auth support (Issue #3231), pointing to a security-conscious self-hosted user base.

No strong satisfaction signals were evident in this batch of issues, which skew toward problem reports.

## 8. Backlog Watch

Important items needing maintainer attention:

- **[Issue #3088 – vodozemac migration](https://github.com/sipeed/picoclaw/issues/3088)** – Stale since July 13, high priority, help wanted. 25 days unresolved. A security-sensitive dependency replacement that could affect all users of Matrix/OLM features.

- **[PR #3228 – Anthropic cache_control fix](https://github.com/sipeed/picoclaw/pull/3228)** – Stale since July 13, open for 8 days. This fix is a prerequisite for the caching improvements requested in Issue #3229. Lack of review blocks downstream cost-saving features.

- **[Issue #3230 – Gemini thought_signature bug](https://github.com/sipeed/picoclaw/issues/3230)** – Only 1 day old but lacking any assignment or acknowledgment. A significant user-facing bug affecting multiple versions.

- **[PR #3192 – Docker base image bump](https://github.com/sipeed/picoclaw/pull/3192)** – Stale since June 27 (16 days). Simple dependency update — low risk, should be quick to merge.

- **[PR #3191 – .gitignore duplicate cleanup](https://github.com/sipeed/picoclaw/pull/3191)** – Stale since June 27 (16 days). Trivial config cleanup.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-14

---

## Today's Overview

NanoClaw shows **very high activity** today with 33 pull requests updated and 26 merged/closed in the last 24 hours, indicating a major development push. Three security and bug-fix issues were all closed, signaling strong responsiveness from the core team. No new releases were published, but the volume of merged PRs suggests a release candidate may be approaching. The project is clearly in a stabilization and feature-completion phase, with significant improvements to channels, security hardening, and message delivery reliability landing this week.

---

## Releases

**No new releases** were published today. The project appears to be accumulating changes across multiple merged PRs before cutting a release.

---

## Project Progress

**26 pull requests were merged or closed today**, spanning security fixes, new channel support, and infrastructure improvements:

- **New Channel: Dial Integration (PRs #3032, #3033)** — Merged. A new channel adapter for [Dial](https://getdial.ai) providing real phone numbers for SMS/MMS and AI-handled voice calls. Includes setup wizard integration and an install skill (`/add-dial`). *Authors: OmriBenShoham*

- **Structured Skill Format (PR #3035)** — Merged by core-team. Channel install skills become the single source of truth; setup wizard now installs channels by applying the machine-applicable `SKILL.md` document, replacing bespoke per-channel wizard flows. *Author: gavrielc*

- **Scheduled Tasks in Templates (PR #3022)** — Merged by core-team. Templates can now define recurring cron-triggered tasks in `tasks/*.md` with script gates and agent prompts; tasks are created paused when the agent group is stamped. Includes a plain-language scheduled-tasks guide. *Author: amit-shafnir*

- **Memory System (PRs #3012, #3013)** — Open, core-team authored. A provider-agnostic persistent memory tree shared across agent providers, with Codex integration loading shared memory on session start/clear/compact. *Author: amit-shafnir*

- **Fix: Security – Full MCP Server Payload on Approval Card (PR #2998)** — Merged by core-team. The self-modification flow now renders the complete MCP server payload (`args` and `env`) on the approval card, closing two security advisories (#2762, #2827). *Author: glifocat*

- **Fix: Missing Adapter Retry Path (PRs #2226, #2996)** — Merged. Messages sent to offline/unregistered channel adapters now throw `MissingChannelAdapterError` and enter the retry loop rather than being silently marked delivered. Closes issue #2995. *Authors: kpscheffel, glifocat*

- **Fix: WhatsApp Group LID-Mode (PR #3038)** — Open. Fixes group sends getting stuck on "waiting" in LID-addressed WhatsApp groups by not translating group participants to phone JIDs. *Author: caburi00*

- **Default Agent Provider (PR #2906)** — Merged by core-team. New `DEFAULT_AGENT_PROVIDER` env var stamps provider onto group container config at creation time, simplifying multi-provider setups. *Author: Koshkoshinsk*

- **Fix: CLI Wirings Create (PR #2743)** — Merged. The `ncl wirings create` command now correctly creates the companion `agent_destinations` row, preventing agent messages to new chats from being silently dropped. *Author: sturdy4days*

- **Fix: Diagnostics Opt-Out (PR #1887)** — Merged. Diagnostics script honors `DO_NOT_TRACK` env var and skips anonymous PostHog events when `curl` is missing. *Author: Sanjays2402*

- **Container: MCP Tool Allowlist (PR #3037)** — Open. Adds optional `NANOCLAW_MCP_TOOL_ALLOWLIST` env var to restrict available MCP tools to a defined subset. *Author: romanbsd*

- **Fix: Agent Time Context (PR #3036)** — Open. Injects `current_time` and weekday into the context header to resolve agent confusion about day-of-week and hour, especially during scheduled-task turns. *Author: mcaldas*

---

## Community Hot Topics

The most active discussions today focused on security and reliability:

**#2998 – Fix: Render Full MCP Server Payload on Approval Card** *(CLOSED, core-team)*  
The highest-impact security fix this cycle. Addresses the root cause of two security advisories by ensuring `args` and `env` are visible to approvers. This PR received implicit community attention via the two linked security issues.  
🔗 [GitHub](https://github.com/nanocoai/nanoclaw/pull/2998)

**#3012 – Feat: Provider-Agnostic Persistent Memory** *(OPEN, 3 comments)*  
This open PR introduces a major architecture change with a shared memory tree. The discussion reflects interest in standardized memory behavior across providers (Claude, Codex, etc.), a long-requested feature.  
🔗 [GitHub](https://github.com/nanocoai/nanoclaw/pull/3012)

**#3038 – Fix: WhatsApp LID-Mode Group Sends** *(OPEN)*  
This PR addresses a frustrating user-facing issue where bot replies in WhatsApp groups never render for recipients. The author notes DMs work fine, but groups with phone-number-based addressing are broken. Active debugging discussion is anticipated.  
🔗 [GitHub](https://github.com/nanocoai/nanoclaw/pull/3038)

---

## Bugs & Stability

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High** | `add_mcp_server` approval flow hides runtime `args` and `env`, enabling approval smuggling | **CLOSED** (#2827, #2762) | ✅ Merged: #2998 |
| **High** | Outbound messages to offline channel adapters silently marked delivered without send | **CLOSED** (#2995) | ✅ Merged: #2996, #2226 |
| **Medium** | WhatsApp LID-mode group sends stuck on "waiting" for members | **OPEN** (inferred from #3038) | 🔄 Open: #3038 |
| **Medium** | CLI `wirings create` skips `agent_destinations` side effect, dropping agent sends | **CLOSED** | ✅ Merged: #2743 |
| **Medium** | Agent confuses day-of-week and hour, especially on scheduled tasks | **OPEN** (inferred from #3036) | 🔄 Open: #3036 |
| **Low** | Diagnostics `ph_event` doesn't honor `DO_NOT_TRACK` or handle missing `curl` | **CLOSED** | ✅ Merged: #1887 |

The most critical bugs (approval smuggling, silent message drops) have been fully addressed with merged fixes. The WhatsApp LID-mode and agent time confusion bugs remain open with active PRs.

---

## Feature Requests & Roadmap Signals

1. **Provider-Agnostic Persistent Memory (PRs #3012, #3013)** — This open core-team PR is shaping up to be a flagship feature for the next release. It enables shared memory trees across agents, regardless of provider. *Likely in next major release.*

2. **MCP Tool Allowlist (PR #3037)** — An operator-requested security feature to constrain which MCP tools are visible to agents. Simple env var toggle. *Likely in next point release.*

3. **Default Agent Provider (PR #2906, merged)** — Already merged, reduces operational overhead for multi-provider instances. *Will ship in next release.*

4. **Scheduled Tasks in Templates (PR #3022, merged)** — Templates can now define cron-triggered tasks. Enables autonomous agent workflows. *Will ship in next release.*

5. **Dial Channel (PRs #3032, #3033, merged)** — SMS and AI voice calls as a first-class channel. Indicates expansion beyond chat platforms. *Will ship in next release.*

---

## User Feedback Summary

**Common pain points being addressed:**

- **Approval security gaps** – Users reported that MCP server configuration could be smuggled past approval flows. Fixed in #2998.
- **Silent message failures** – Messages to offline channels (e.g., disconnected WhatsApp, missing credentials) marked as delivered without confirmation. Fixed in #2996/#2226.
- **WhatsApp group reliability** – Bot replies in LID-addressed groups fail to render for members. Addressed in open PR #3038.
- **Agent time awareness** – Agents hallucinate day-of-week and time, especially during cron-task turns. Open PR #3036 proposes injecting `current_time` into context headers.
- **Setup complexity** – The structured skill format (PR #3035) simplifies channel installation by replacing bespoke wizard flows with machine-readable `SKILL.md` documents.

**Satisfaction signals:**
- Strong core-team presence on PRs and issues (multiple commits from @glifocat, @amit-shafnir, @gavrielc, etc.)
- Rapid closure of security issues with detailed advisories
- Community contributors submitting high-quality PRs (Dial integration, WhatsApp LID fix, MCP allowlist)

---

## Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| **PR #2802 – `ncl` socket hardening (client timeout/cap + server fail-closed)** | 27 days (since Jun 17) | **OPEN** | No maintainer activity in last 24h. Addresses unbounded response buffers and unresolved promises on socket transport — a potential security and stability risk. Needs review. |
| **PR #1889 – Hard-fail cleanup-sessions on sqlite3 errors** | 84 days (since Apr 21) | **CLOSED** (no merge) | Marked closed but not merged. Silent-data-loss fix from April; unclear if resolved through alternative PR or abandoned. |
| **PR #2120 – Generalize provider output substitutions** | 76 days (since Apr 29) | **CLOSED** (no merge) | Per-provider `errorSubstitutions` feature closed without merge. May have been superseded or deemed out of scope. |

**🔴 Attention needed:** PR #2802 (socket hardening) has been open for nearly a month with no recent review activity. As a security-relevant change addressing unbounded buffers and unresolved promises in the `ncl` transport, it warrants prioritization.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-14

## 1. Today's Overview

The NullClaw project is in a **healthy build-up phase** with **11 open pull requests** updated in the last 24 hours, though no new code was merged today and no new releases were cut. Activity is concentrated on **quality-of-life improvements** for the agent REPL, **structured tool approval flows**, and **cross-platform stability** (Android curl fallback, Matrix sync persistence). No new issues were filed or updated, suggesting the community is focused on refining existing PRs rather than surfacing new problems. The project appears to be **preparing for a consolidated release** that bundles several long-running feature branches and bug fixes.

## 2. Releases

**No new releases** in the last 24 hours. The latest available release remains unchanged.

## 3. Project Progress

Zero pull requests were merged or closed today. All 11 open PRs were updated, indicating active iteration and review. Notable feature advancements include:

- **Agent REPL polish** (#970) — Allocation-free line editor for interactive CLI mode, adding arrow key navigation, history, and cursor control.
- **Two-turn tool approval flow** (#969) — Structured `approval_request` / `approval_response` mechanism for shell tools requiring user confirmation, with SSE event emission.
- **Streaming tool calls** (#964) — Enables native API-level tool call deltas to be preserved during streaming, allowing agents to execute tool responses mid-stream.
- **Memory recall controls** (#961) — Configuration for `auto_recall`, `recall_limit`, and `max_context_bytes` to tune memory injection behavior.
- **Cron tool token persistence** (#959) — `paired_token` now persisted to encrypted storage for scheduler tool access across restarts.
- **Anthropic provider documentation** (#962) — Full docs for native Anthropic API key and OAuth/Pro-Plan token usage.

## 4. Community Hot Topics

The most active items revolve around **agent usability** and **platform compatibility**:

- **[#970 — REPL arrow key handling](https://github.com/nullclaw/nullclaw/pull/970)** — The most recent PR (June 29) and a clear community pain point: the interactive agent CLI currently dumps control characters instead of navigating history. Underlying need: **professional-grade terminal UX** for daily agent users.

- **[#969 — Structured approval flow](https://github.com/nullclaw/nullclaw/pull/969)** — Implements a formalized approval UI for dangerous shell commands. Reflects demand for **safety-by-design** in autonomous agent operation.

- **[#966 — Android curl fallback](https://github.com/nullclaw/nullclaw/pull/966)** — Fixes DNS failures on `aarch64-linux-android` (Termux). Community signal: **Android/Termux is an important deployment target** that needs first-class support.

- **[#961 — Memory controls](https://github.com/nullclaw/nullclaw/pull/961)** — Configurable recall limits and auto-recall toggle. Shows **power users want finer control** over context window management.

## 5. Bugs & Stability

No new bugs reported today. Existing bug-fix PRs in progress (no regression reports):

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| Medium | [#966](https://github.com/nullclaw/nullclaw/pull/966) | DNS resolution failure on Android/Termux | Open PR with buffered curl fallback |
| Medium | [#968](https://github.com/nullclaw/nullclaw/pull/968) | Matrix `next_batch` cursor lost on restart → repeated initial syncs | Open PR to persist cursor to disk |
| Medium | [#958](https://github.com/nullclaw/nullclaw/pull/958) | MS Teams 403 errors: lowercase `serviceurl` JWT claim not accepted | Open PR adding case-insensitive parsing |

No crashes or regressions reported in the last 24 hours. The project appears **stable on supported platforms**.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today, but the open PRs signal **strong roadmap direction**:

- **Agent safety & UX** (#969, #970) — Two-turn approval and proper REPL controls are likely to land in the **next minor release (v0.x.1)**.
- **Memory & context management** (#961) — Configurable recall is a **high-probability inclusion**; missing is a broader semantic memory or vector store integration.
- **Platform expansion** (#966) — Android/Termux support is being actively shored up, suggesting official mobile support may be in the roadmap.
- **Provider diversity** (#962) — Native Anthropic documentation signals **first-class Anthropic support** (no proxy needed), likely targeting enterprise users with Pro plans.

**Prediction for next version:** Agent REPL improvements (arrow keys, history), structured approval flows, Matrix persistence, memory recall configuration, and Android HTTP stability fixes.

## 7. User Feedback Summary

No new user commentary in issues today. Observed pain points from the PR activity:

- **Pain point: Terminal UX** (PR #970) — Users working in the agent REPL expect standard terminal behavior (arrow keys, history, Home/End). The current behavior of printing control characters is a **daily frustration** for CLI-heavy users.
- **Pain point: Android instability** (PR #966) — Zig's stdlib HTTP path fails on Termux, forcing users to rely on curl. The community needs **consistent HTTP behavior** across platforms.
- **Pain point: Sync continuity** (PR #968) — Matrix channel users lose sync state on every restart, getting flooded with initial syncs. **Data loss on restart** is a moderate trust-buster for chat integration users.

## 8. Backlog Watch

No items are critically stale in the backlog — all PRs have been updated within the last 30 days. Items approaching longer review cycles:

- **[#956](https://github.com/nullclaw/nullclaw/pull/956) — Alpine 3.23 → 3.24 bump** (Created Jun 15, 29 days open) — Simple dependency update, likely awaiting conflict resolution or CI re-run.
- **[#964](https://github.com/nullclaw/nullclaw/pull/964) — Streaming tool calls** (Created Jun 18, 26 days open) — Architecturally significant feature; may need design review before merging.

**No maintainer-attention alerts:** The project shows a healthy PR review cadence with recent updates on all outstanding items.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest — 2026-07-14**

---

### 1. Today's Overview
Project activity is elevated, with 50 pull requests and 34 issues updated in the last 24 hours. A major bug bash is underway (issues tagged `bug_bash_P1`, `P2`, `P3`), contributing 20+ new bug reports filed yesterday alone, indicating a structured quality push ahead of a potential release candidate. No new releases were cut today, but six issues were closed and 16 PRs were merged or closed, suggesting steady forward momentum. The project remains in high-velocity development, balancing feature roll-ups (NEA-25 unified extension model) with hardening against regressions surfaced by the ongoing test campaign.

---

### 2. Releases
No new releases were published in the last 24 hours. The last release candidate is tracked in PR #5598 (still open), which proposes version bumps for `ironclaw_common` (0.4.2 → 0.5.0, breaking), `ironclaw_skills` (0.3.0 → 0.4.0, breaking), and `ironclaw` (0.24.0 → 0.29.1). That release has not yet merged.

---

### 3. Project Progress
16 PRs were merged or closed today. Notable advancements include:

- **NEA-25 unified extension model (Train A)** — PR #6061 opened as a single atomic roll-up of the 8-PR taxonomy stack, delivering the final intended state of the unified extension model on `main`. It supersedes PRs #5833–#5850.
- **Extension ownership migration** — PR #6058 merged, shipping the explicit extension-ownership migration binary in the Reborn runtime image, with cargo-chef caching for build efficiency.
- **OAuth and per-user extension lifecycle hardening** — PR #5957 closed, combining Slack OAuth activation fixes with generic extension-removal cleanup and an explicit ownership migration for production installs.
- **Matrix channel skeleton** — PR #6062 closed, adding a loadable WASM channel component shape, capability manifest, and CI build/test gate for the future Matrix integration.
- **Dependency updates** — Two dependency-bump PRs (#6021, #6063) updated 46 packages across the workspace, including `agent-client-protocol` (0.10.4 → 1.2.0) and `rustls` (0.23.41 → 0.23.42).
- **Storage error cause preservation** — PR #5971 merged, fixing a banned pattern where compaction summary persistence errors discarded the underlying `SessionThreadError`.

---

### 4. Community Hot Topics
The most active issues by comment count all originate from the bug bash campaign, authored by `joe-rlo`:

- **#5948** — *“Assistant incorrectly reports GitHub extension as activated when it is only installed”* (5 comments, open). The user expectation is clear: the UI and assistant status must be consistent. A false “activated” signal erodes trust.
- **#6050** — *“Conversation history error banner displayed despite successful chat response”* (2 comments, open). A persistent error banner after a successful response creates a false alarm; users perceive brokenness. A fix PR (#6064) was opened today.
- **#5640** — *“Harness gap: RecordingSecurityAuditSink double — hook_security_audit_sink always None in integration harness”* (2 comments, open). This wiring parity gap means integration tests may not fully cover security audit behavior, a potential regression vector.
- **#5741** — *“builtin.http.save can fail with OutputTooLarge instead of saving large responses”* (2 comments, open). Users trying to save large web pages (e.g., ESPN sports articles) hit a hard limit with no fallback.

The most active PRs include the NEA-25 stack (#6061), the per-user MCP registration store (#5970), and the v1-to-Reborn migration workflow (#5936), all indicating systemic architectural work alongside bug fixing.

---

### 5. Bugs & Stability
*Severe (P1):*
- **#5943** — *“Slack DM action posts to current channel instead of user's direct messages”* (0 comments, open). A core Slack integration bug that leaks direct message content into shared channels. No fix PR exists yet.

*High (P2) — Fix PRs exist for some:*
- **#6048** — *“Agent run fails because model attempts to call an unavailable tool”* (0 comments, open). Multi-step workspace tasks (Python file generation, CSV export) fail mid-execution due to tool unavailability.
- **#6045** — *“Agent diagnoses root cause instead of accomplishing the user's intent”* (0 comments, open). The agent correctly identifies a 403 (missing User-Agent header) but explains rather than auto-retrying with the fix.
- **#6047** — *“Task messages are processed and displayed out of chronological order”* (0 comments, open). Reversed message order breaks conversation flow.
- **#6044** — *“Enter key sometimes does not submit message in WebUI”* (0 comments, open). Intermittent keyboard shortcut failure degrades UX.
- **#6043** — *“GitHub connection flow fails with generic capability error instead of starting authentication”* (0 comments, open). After detecting 401, the help offer fails silently.
- **#6046** — *“Simple email-to-sheet workflow invokes excessive number of tools”* (0 comments, open). 124 tool invocations for a trivial task — an efficiency regression.
- **#5882** — *“Repeated Slack reconnect attempts leave authentication flow in broken state”* (0 comments, open). Only recovery is removal and reinstallation of the extension.
- **#5885** — *“Approval notification opens action without showing the approval message”* (2 comments, open). Users cannot approve or deny actions.
- **#5879** — *“Stale error banner remains visible after successful follow-up response”* (2 comments, open). Fix PR #6064 addresses a related stale-banner issue for history load errors.
- **#5836** — *“Routine fails on every scheduled run with 'No thread attached'”* (2 comments, open). 0% success rate for the `ironclaw-issues-slack-summary` routine — a systemic scheduling regression.

*Medium (P3):*
- **#6052** — *“Extensions Registry takes up to 10 seconds to load”* (0 comments, open). Skeleton placeholders make the page feel unresponsive.
- **#6051** — *“Large documents labeled with warning icon instead of informational status”* (0 comments, open). False alarm for Google Drive files that exceed inline limits but are still accessible.
- **#6049** — *“Extensions page displays persistent validation error when attempting to disconnect Gmail”* (0 comments, open). Gmail cannot be disconnected; generic “Validation” error with no details.
- **#6039** — *“Light theme has unreadable button and status colors”* (0 comments, open). Hard-coded dark-theme colors break light theme legibility.
- **#6037** — *“Chat connection status is hidden during disconnects and reconnects”* (0 comments, open). Users cannot tell if the chat is reconnecting or has permanently failed.
- **#6028** — *“MCP tab: stray '$' rendered before the 'Available MCP servers' heading”* (0 comments, open). A template-literal rendering leftover in JSX.

---

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today, but the following PRs signal roadmap priorities:

- **Per-user MCP registration store** — PR #5970 (T1 of a three-tier MCP registration stack) is under review, indicating imminent MCP infrastructure landing.
- **NEA-25 unified extension model** — PR #6061 (Train A roll-up) is the largest structural change in flight, consolidating 8 PRs into a single atomic unit. Once merged, the follow-on B and C trains will likely address remaining taxonomy and runtime changes.
- **Offline v1-to-Reborn migration** — PR #5936 adds a full offline migration workflow with plan, apply, resume, verify, and status subcommands. This strongly suggests an upcoming migration window and an intent to support legacy users.
- **Reborn system prompt enhancements** — PR #6027 adds verification, table-precision, and output-format guidelines to the default system prompt, indicating a push to reduce model hallucination and improve structured output fidelity.

Predicted for next release: unified extension model (Train A), per-user MCP registration store, v1-to-Reborn migration tooling, and the system prompt improvements.

---

### 7. User Feedback Summary
Real-user pain points from the bug bash and community reports include:

- **Integration lifecycle friction** — Users cannot deactivate, reconfigure, or uninstall the GitHub extension after activation (#6029). Gmail cannot be disconnected (#6049). Slack reconnection leaves authentication in an irrecoverable state (#5882). These indicate the extension management UX is immature.
- **False positives and ghosts** — The assistant falsely reports GitHub as activated (#5948). Error banners persist after success (#6050, #5879). The “Last completed” field shows an active-run timestamp (#5891). These erode user trust in system state indicators.
- **Agent inefficiency and unreliability** — 124 tool invocations for a simple email-to-sheet task (#6046). Agent diagnoses problems but does not fix them (#6045). Routine scheduling is completely broken (#5836). Users experience low-quality autonomous behavior.
- **Security disclosure blocked** — Issue #6000 reports that there is no `SECURITY.md`, private vulnerability reporting is disabled, and the reporter cannot find a safe channel. This is a serious omission for a production agent platform.
- **Stray UI artifacts** — A literal `$` rendered before MCP server headings (#6028), unreadable light-theme buttons (#6039), and hidden connection status (#6037) suggest frontend polish is lagging behind backend work.

---

### 8. Backlog Watch
- **#5640** — *“Harness gap: RecordingSecurityAuditSink double”* (created Jul 4, updated Jul 13, 2 comments). Important wiring parity gap that could allow security audit regressions to slip through integration tests. No fix PR yet; has been open for 10 days.
- **#5741** — *“builtin.http.save can fail with OutputTooLarge”* (created Jul 6, updated Jul 13, 2 comments). Users trying to save large web pages hit a hard limit with no graceful fallback. This is a daily-use tool; the 7-day lack of resolution is notable.
- **#6000** — *“How should security issues be reported?”* (created Jul 11, updated Jul 13, 1 comment). The reporter is blocked from responsibly disclosing a security finding because private vulnerability reporting is disabled entirely. This is a critical governance gap requiring immediate maintainer attention.
- **#6029** — *“GitHub extension cannot be deactivated, reconfigured, or uninstalled”* (created Jul 13, 1 comment). A one-way extension activation door with no lifecycle management — this is a fundamental usability regression for the extensions framework.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 14, 2026.

---

## LobsterAI Project Digest — 2026-07-14

**Project Health:** ⚡ High Activity (13 Closed/Merged PRs in 24h) | **Stability:** Improved (Critical Windows install/security bugfixes shipped)

### 1. Today's Overview
The project saw a massive spike in activity on July 13, with **15 PRs updated** and **13 merged/closed** within a single 24-hour window. This rapid pace suggests a concentrated release sprint or a hotfix rotation, primarily driven by maintainer **fisherdaddy**. The focus was overwhelmingly on **Windows stability** (signing, installer self-healing), **desktop notification upgrades**, and **cowork (multi-agent collaboration) UI/UX fixes**. No new releases were tagged, but the volume of merged code implies a pending version bump. No new issues were filed, indicating that the team is actively clearing the backlog rather than accumulating new bug reports.

### 2. Releases
**None.** No new releases were tagged in the last 24 hours. The high volume of merged PRs (including critical Windows installer fixes) strongly suggests a point release (e.g., v0.41.x) is imminent.

### 3. Project Progress — Merged/Closed PRs (13 items)
Today’s effort focused on three major pillars:

- **Windows Installer & Security (Critical):**
    - [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327): Fixed unsigned `LobsterAI.exe` by signing all Windows binaries via internal Youdao signing service (fixes AV false positives freezing installs).
    - [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326): Implemented self-healing for interrupted `win-resources.tar` extraction using system `tar.exe` with a 10-minute watchdog fallback.
- **OpenClaw & Agent Fixes:**
    - [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328): Serialized concurrent browser launch/search to prevent Chrome process leaks.
    - [#2320](https://github.com/netease-youdao/LobsterAI/pull/2320): Fixed missed cron jobs replaying on next tick by advancing timestamps on skip.
    - [#2324](https://github.com/netease-youdao/LobsterAI/pull/2324): Stream ordered thinking blocks for OpenClaw tool calls.
- **UI/UX & Cowork:**
    - [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318): Renamed `TaskCompletionNotifier` to `DesktopNotificationManager`; added waiting notifications for permission requests.
    - [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319): Revamped homepage quick-action scenarios (e.g., "文档写作" mapped to docx skill).
    - [#2325](https://github.com/netease-youdao/LobsterAI/pull/2325): Fixed badge/title descender clipping in cowork templates.
- **Build System:**
    - [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323): Added opt-in Windows web installer target (CDN download at install time).

### 4. Community Hot Topics
- [#1323 (Open, Stale)](https://github.com/netease-youdao/LobsterAI/pull/1323) — **"fix(cowork): narrow input-too-long error classification"**: This PR has been open since April 2 and was updated yesterday. It addresses a misleading error UX where any `max_tokens` error was displayed as "input too long," even for short inputs. The underlying need is clear: **users want accurate, actionable error messages** rather than generic context-limit warnings.
- [#1277 (Open, Dependabot)](https://github.com/netease-youdao/LobsterAI/pull/1277) — **"chore(deps-dev): bump the electron group"**: A cautious stasis—this PR attempts to upgrade Electron from v40 to v43 but remains unmerged for over 3 months, suggesting breaking changes or testing gaps in the package.
- [#1488 (Closed, Stale)](https://github.com/netease-youdao/LobsterAI/pull/1488) — **"feat(scheduledTask): UI overhaul"**: Although closed in the last 24h, this large feature (card grid, search, history filtering) had been sitting since April. Its merge signals that the **scheduled task module is now production-ready** for general use.

### 5. Bugs & Stability
| Severity | Bug | Fix |
|-----------|-----|-----|
| **Critical** | Windows AV false positives: Security software froze on unsigned `LobsterAI.exe` during install, causing hanging or broken installs. | Merged: [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) & [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) |
| **High** | Chrome process leaks: Concurrent browser launches left orphaned Chrome processes. | Merged: [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) |
| **Medium** | Recurring cron jobs: Skipping catch-up still allowed missed jobs to replay on next timer tick. | Merged: [#2320](https://github.com/netease-youdao/LobsterAI/pull/2320) |
| **Low** | macOS update failure: `hdiutil` command failing during app update. | Merged: [#2321](https://github.com/netease-youdao/LobsterAI/pull/2321) |

### 6. Feature Requests & Roadmap Signals
- **Windows Web Installer:** PR [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323) introduces an opt-in web installer (`nsis-web`) that downloads the app from a CDN. This signals a pivot toward **leaner distribution and faster first-run downloads**, likely targeting enterprise environments.
- **Desktop Notifications Upgrade:** PR [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318) extends notifications beyond task completion to cover waiting states for permission requests. Expect richer **ambient assistant interactions** in the next version.
- **Scheduled Task UI:** The merge of [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) (card grid, search, date filtering) indicates a push toward **power-user productivity features**, aligning with roadmaps for full autonomy.

### 7. User Feedback Summary
Direct user feedback is sparse in this sprint (0 open issues today), but the PRs reveal clear pain points:
- **Windows Users:** The swath of installer PRs indicates severe frustration with **broken installs due to overzealous antivirus software**. The team’s response (binary signing + self-healing extraction) suggests these were widespread production incidents.
- **Cowork Users:** The migration of skill selection to per-session state ([#1494](https://github.com/netease-youdao/LobsterAI/pull/1494)) and the narrowed error classification ([#1323](https://github.com/netease-youdao/LobsterAI/pull/1323)) show that users were confused by **global state bleeding between sessions** and **misleading error messages**.
- **Satisfaction:** The revamped homepage quick-actions ([#2319](https://github.com/netease-youdao/LobsterAI/pull/2319)) replacing "教育学习" with "文档写作" suggests user feedback drove a pivot toward **office/document workflows** over generic education.

### 8. Backlog Watch
- [#1277 (Open, April 2)](https://github.com/netease-youdao/LobsterAI/pull/1277) — **Electron v40→v43 bump**: Unmerged for 105 days. This dependency upgrade likely carries breaking changes for native modules (e.g., auto-updater, file dialogs). Risk: accumulating security debt in the Electron layer.
- [#1323 (Open, April 2)](https://github.com/netease-youdao/LobsterAI/pull/1323) — **Cowork error classification**: Open for 103 days despite a clear bug report and fix. This indicates a **bottleneck in code review for non-maintainer contributions** (author: kayo5994).
- **No new Issues filed today**: While this looks healthy, it may also indicate that users are hitting bugs silently without reporting them, or that the team is in a pre-release code freeze.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-14

## Today's Overview
Moltis shows a very quiet development day with no new issues, no merged pull requests, and no releases in the last 24 hours. One pull request remains open, addressing a significant bug in the CalDAV integration. The project appears to be in a low-activity period, with no community engagement metrics (comments, reactions) recorded for the single open PR. Overall project health is stable but dormant; maintainers may benefit from reviewing backlog items.

## Releases
**No new releases.** The latest release remains unchanged from prior periods.

## Project Progress
- **No pull requests were merged or closed today.** The repository shows 0 merged/closed PRs in the last 24 hours.
- One open PR (#1147) from July 11 remains under review, relating to a server-side CalDAV query fix.

## Community Hot Topics
The only active item is:
- **PR #1147** — `fix(caldav): honor time range in list_events via server-side calendar-query`  
  Created: 2026-07-11 | Updated: 2026-07-13  
  [Link](https://github.com/moltis-org/moltis/pull/1147)  
  - 0 comments, 0 reactions  
  - **Behind the request:** This PR addresses a fundamental functional bug—the `list_events` tool’s start/end parameters were silently ignored because the range parameter was bound but never used. The author (thoscut) replaces the naive full-fetch approach with a proper CalDAV calendar-query, which respects server-side filtering. This is a **correctness and performance improvement** that makes the tool actually behave as documented.

## Bugs & Stability
**Critical Bug (unaddressed):**
- **Range parameter ignored in CalDAV `list_events`** — The `_range` parameter was bound but never referenced in the underlying client call. As a result, all calls fetched every resource in the calendar regardless of the `start`/`end` arguments. This contradicts documentation and could cause unnecessary large data transfers, especially on calendars with many events.  
  - **PR #1147** provides the fix but remains open since July 11.  
  - **Severity: High** — functional regression against documented behavior; impacts usability for time-constrained queries.

No other bugs, crashes, or regressions were reported in the last 24 hours.

## Feature Requests & Roadmap Signals
No new feature requests were submitted today. The open PR hints at an ongoing need for **proper CalDAV protocol compliance**, which could be a signal that users are increasingly using Moltis for calendar-based automation. Future versions may include:
- Full support for server-side query filtering (already in progress via #1147)
- Potentially, expanded calendar event retrieval options (recurrence expansion, timezone handling)

## User Feedback Summary
No user comments, reactions, or feedback were recorded in the last 24 hours. The single active PR has no community discussion, suggesting either low awareness of the issue or a small active user base. The lack of feedback makes it difficult to gauge user satisfaction, but the existence of the bug itself may indicate some users experienced unexpected behavior with calendar queries.

## Backlog Watch
**No long-unanswered items to highlight.** The only open PR (#1147) has been active for only 3 days and received no responses; this is within normal review timelines. No issues are currently open in the repository.

---

*Generated from Moltis GitHub data (github.com/moltis-org/moltis) as of 2026-07-14.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw, based on the provided GitHub data.

---

### CoPaw Project Digest: 2026-07-14

#### 1. Today's Overview

CoPaw (the QwenPaw project) is experiencing a period of intense activity and significant churn following the major v2.0.0 release. The last 24 hours saw 50 Issues and 50 PRs updated, with a near 50/50 split between open/active and closed/merged items, indicating a highly engaged team working through a backlog of post-release feedback. While a patch release (v2.0.0.post1) was shipped today, the project is grappling with a severe stability regression in the v2.0.0 line, particularly related to tool call management and context compression, which is causing widespread user frustration. The community is very vocal, reporting critical bugs that break core workflows, and the team has responded by merging multiple fixes, though a key underlying issue remains under active development.

#### 2. Releases

- **v2.0.0.post1**: A minor patch was released to address immediate post-launch issues.
    - **Key Fixes:**
        - Resolved a bug where browser autofill blocked the provider search input (#5981).
        - Fixed a critical issue in the `_hint.py` module that caused `MODEL_EXECUTION_ERROR` (400 errors) by creating orphaned `ToolResultBlock` messages (#6007, #6011).
    - **Migration Note:** This is a hotfix release and should be applied to all v2.0.0 deployments via the standard upgrade path. No breaking changes are introduced.

#### 3. Project Progress

A significant number of PRs were merged/closed today, focusing on stabilizing the v2.0.0 release.

- **Critical Bug Fixes:**
    - **Tool Call Offload:** A fix ([#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058)) was merged to flatten the offload hint message, which was a root cause of the "orphan ToolResultBlock" error. However, the underlying offload mechanism was also **temporarily disabled** due to its instability.
    - **TUI Crashes:** A PR ([#6069](https://github.com/agentscope-ai/QwenPaw/pull/6069)) was opened to prevent the Textual TUI from crashing when clicking on streaming output.
    - **CLI Health Probe:** The `qwenpaw doctor` command was fixed ([#6053](https://github.com/agentscope-ai/QwenPaw/pull/6053)) to use the correct readiness endpoint.
    - **Message Queue:** A fix ([#6045](https://github.com/agentscope-ai/QwenPaw/pull/6045)) ensures the message queue is properly cleared when a user deletes a session in the Console UI.
- **Feature/Bug Fix PRs Under Review:**
    - **Sandbox:** A new restricted-token-based Windows sandbox ([#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931)) is under review, signaling a move toward more flexible security models.
    - **Governance:** A PR ([#6054](https://github.com/agentscope-ai/QwenPaw/pull/6054)) relaxing approval prompts and adding a global sandbox switch was merged.
- **Stability & Infrastructure:**
    - A comprehensive batch of 43 regression unit tests was submitted ([#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813)) to pin down issues related to install, tool-call loops, and security bypasses.
    - The tool result pruning logic was unified ([#5935](https://github.com/agentscope-ai/QwenPaw/pull/5935)) to resolve conflicts between different middleware components.

#### 4. Community Hot Topics

The community is highly engaged, primarily focused on bugs in the v2.0.0 release. The most discussed issues reveal a critical flaw in the new context compression logic.

- **Critical Context Compression Bug:** Issues [#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960), [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986), and [#5962](https://github.com/agentscope-ai/QwenPaw/issues/5962) all describe the same fundamental problem: the new context compression algorithm splits up paired `tool_call` and `tool_result` messages, breaking the required sequence and causing a permanent 400 error from the API. This effectively kills any session that triggers context compression, making the agent unusable for complex or long-running tasks. This is the single most impactful bug in the current release.
- **General v2.0 Instability:** Issues like [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) and [#6013](https://github.com/agentscope-ai/QwenPaw/issues/6013) express general frustration with v2.0.0's reliability, with users reporting agents getting stuck in infinite "write/delete/write" loops and a degradation in stability compared to the v1.x line.
- **Feature Backlash:** The removal of the "message queue" feature ([#6006](https://github.com/agentscope-ai/QwenPaw/issues/6006)) and the inability to disable the sandbox ([#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879)) have been major pain points, with community members calling them critical for their workflows.

#### 5. Bugs & Stability

The project is facing a stability crisis in the v2.0.0 release. Issues are ranked by severity:

- **Critical:**
    - **Session-Breaking Context Compression:** The bug documented in [#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960) and [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) is the most severe. It renders sessions unusable after context compression triggers. A fix PR ([#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068)) aims to preserve session IDs during migration, suggesting an ongoing effort to resolve the underlying issue.
    - **Orphaned Tool Result Blocks:** This manifests as a `400 BadRequestError` (Model 'unknown' execution failed) and is directly linked to the background offload mechanism (fixed in [#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058)), the hint message format (fixed in [#6052](https://github.com/agentscope-ai/QwenPaw/pull/6052)), and the broader context compression bug.
- **High:**
    - **Docker Container Issues:** Chromium fails in Docker due to dbus connection errors ([#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872)), and the sandbox prevents running tools like `electron` ([#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979)).
    - **Offload Mechanism Broken:** The background subprocess offload kills jobs immediately instead of letting them run ([#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056)). This feature was temporarily disabled in [#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058).
- **Medium:**
    - **Permissions & Governance:** Shell execution now requires user acknowledgement on every command ([#5982](https://github.com/agentscope-ai/QwenPaw/issues/5982)), and the new permission modes are disliked for being too noisy ([#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954)).
    - **Migration & Missing Features:** The update from v1.x to v2.0.0 broke features like SSH connectivity and caused 404 errors on Profiles ([#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)).

#### 6. Feature Requests & Roadmap Signals

- **Sandbox Controls:** The most popular feature request is the ability to disable or configure the sandbox ([#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879)). The existence of a PR for a restricted-token Windows sandbox ([#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931)) and a global sandbox switch in the governance PR ([#6054](https://github.com/agentscope-ai/QwenPaw/pull/6054)) strongly suggests this will be addressed in the next minor release.
- **Tool Whitelist Mode:** Users are requesting a "whitelist" permission mode for tools, where a user can approve a tool "once" or "forever," to reduce the number of approval prompts ([#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954)).
- **Tray Minimization:** A minor but popular QoL request is for the desktop app to minimize to the system tray instead of closing when the 'X' button is clicked ([#6057](https://github.com/agentscope-ai/QwenPaw/issues/6057)).

#### 7. User Feedback Summary

User sentiment has shifted negatively with the v2.0.0 release. Many long-time users are feeling the pain of a significant rewrite.

- **Pain Points:**
    - **Stability vs. Features:** The most common feedback is that v2.0.0 introduced many regressions, making it "much less stable than the v1.x version" ([#6013](https://github.com/agentscope-ai/QwenPaw/issues/6013)). Users feel that core functionality like message queues, SSH, and basic tool execution were removed or broken.
    - **Overly Aggressive Governance:** The new sandbox and permission system is seen as restrictive, hindering productivity for users on trusted machines. The agent is frequently "very controlling" and requires too many approvals for simple tasks.
    - **"Agent Hallucinations":** Users report the agent "adding content on its own," such as asking for AI news during a stand-up meeting, indicating the prompting or tool-use logic needs refinement ([#6034](https://github.com/agentscope-ai/QwenPaw/issues/6034)).
- **Use Cases:** The reported use cases are diverse, including administrative work (stand-ups), development (installing Python packages, running CLI tools), and communication channels (WeChat, Feishu). This highlights that the stability issues are affecting a broad user base.

#### 8. Backlog Watch

- **Long-standing Bug:** Issue [#2439](https://github.com/agentscope-ai/QwenPaw/issues/2439) about voice message transcription failing has been open since March. Its resolution is likely blocked by the more critical stability issues, but its long history suggests a persistent gap in a non-core feature.
- **Important Open Questions:**
    - [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) (Docker dbus/chromium): A blocker for users deploying CoPaw in containers. No dedicated fix PR is visible, but the sandbox PRs may indirectly resolve it.
    - [#5963](https://github.com/agentscope-ai/QwenPaw/issues/5963) (Hard-coded 60s shell command timeout): A regression that silently breaks long-running tasks. While a related fix was temporarily applied ([#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058)), the core issue of respecting user-configured timeouts remains open.
    - [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) (Missing SSH/Profiles in v2.0.0): A critical feature gap for users migrating from v1.x. There is no clear roadmap signal for its return.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-14

## Today's Overview

ZeroClaw is in a **high-activity maintenance and feature-completion phase**, with 50 issues and 50 PRs updated in the last 24 hours, reflecting heavy community and maintainer engagement. The project is actively wrapping up the **v0.8.3 milestone** (all six child trackers closed) while simultaneously advancing the **v0.8.4 maintenance train** and multiple high-impact trackers including the **SOP control plane** (tracker #8288), **zeroRelay secure transport** (#8358), and **persistent memory parity** (#8891). Two critical RFCs—on **work lanes/board automation** (#6808) and **local-first small model mode** (#5287)—remain in active discussion with significant community input. Bug velocity is elevated, with several S1 (workflow blocked) and S2 (degraded behavior) issues reported, though most have corresponding fix PRs in flight.

---

## Releases

**No new releases today.** The last release was v0.8.x series; v0.8.3 is in final validation/closeout (tracker #7320) and v0.8.4 is being planned with a July 31 target date (tracker #8357).

---

## Project Progress

**Merged/Closed PRs (2 today):** Low merge velocity in the last 24h, consistent with heavy review/iteration activity across 48 open PRs.

**Notable feature advancement (open PRs with high activity):**
- **[#8979 - SOP channel gate prompts with checkpoint edit/revise](https://github.com/zeroclaw-labs/zeroclaw/pull/8979)** — Large PR (XL) adding deterministic pipeline building blocks for approval-gated channel events without an agent turn. Part of the 5/5 SOP milestone.
- **[#8903 - SOP approval request delivery to configured channel](https://github.com/zeroclaw-labs/zeroclaw/pull/8903)** — Route-delivery layer over the approval broker; stacked on #8880 and #8848.
- **[#8897 - Opt-in retrieval cache decorator for agent memory](https://github.com/zeroclaw-labs/zeroclaw/pull/8897)** — XL-sized PR wiring a previously-dead `RetrievalPipeline` to an optional cache layer.
- **[#8895 - Gated rerank stage in memory-context injection](https://github.com/zeroclaw-labs/zeroclaw/pull/8895)** — Makes `[memory] rerank_enabled` functional (was schema-only since unmerged PR #4245).
- **[#8900 - Typed memory classification and gated typed-facts extraction](https://github.com/zeroclaw-labs/zeroclaw/pull/8900)** — First slice of the memory-types epic.
- **[#8852 - Run installed WASM channel plugins](https://github.com/zeroclaw-labs/zeroclaw/pull/8852)** — First real caller for channel plugin execution.
- **[#9011 - ZeroCode Dashboard shows active runtime context](https://github.com/zeroclaw-labs/zeroclaw/pull/9011)** — UX improvement showing daemon/config/endpoint/version directly.

**Closed trackers signaling milestone progress:** #8070 (gateway/web/onboarding), #8071 (runtime/agent loop), #8073 (observability/CI/docs), #8360 (provider serialization), #8362 (channel adapter parity), #8363 (config-driven policy) — all v0.8.3 child trackers now closed.

---

## Community Hot Topics

### Most Active Issues

1. **[#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (14 comments, maintained for 55 days)
   - **Underlying need:** Maintainers are seeking to reduce manual overhead in issue/PR triage. The RFC proposes automated board routing and label hygiene to keep the project manageable at scale. This indicates governance scaling pain as the project grows.

2. **[#6165 — RFC: Prefer lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** (9 comments, 78 days open)
   - **Underlying need:** Defines the boundary for keeping ZeroClaw core lean by moving long-tail integrations to skills/MCP/plugins. A foundational architecture debate that affects all future integration work.

3. **[#5287 — Local-First Mode for Small Models](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** (5 comments, 2 reactions, 101 days open)
   - **Underlying need:** Users running local models (Ollama) want compact prompts, strict parsing, and no prompt-leakage. This is the top-voted feature request and reflects a growing user segment that prioritizes privacy/offline use over cloud features.

4. **[#8973 — Landlock blocks shell access to required system files on Fedora](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)** (3 comments, 3 days old)
   - **Underlying need:** Security sandboxing (Landlock) is breaking basic shell tool functionality on Fedora. Users need the sandbox to be compatible with standard Linux filesystem layouts.

5. **[#9048 — RFC: Separate conversation history from agent-curated long-term memory](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** (1 comment, opened today)
   - **Underlying need:** The implementation still mixes session history and long-term memory despite documenting them as different lifecycle concepts. Freshly opened, likely to attract discussion.

### Most Active PRs
- **#8979** (SOP gates), **#8903** (SOP approval delivery), **#8895** (memory rerank), **#8897** (retrieval cache), **#8900** (typed memory) — all part of the **SOP/memory parity push** and all in `needs-author-action` state with no maintainer review yet.

---

## Bugs & Stability

### Critical (S1 - Workflow Blocked)
- **[#9035 — Docker Compose gateway loopback-bound behind published port](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)** (3 comments, 1 day old) — "Connection refused" after `docker compose up -d`. No fix PR yet.
- **[#9046 — models_cache.json is read but never written](https://github.com/zeroclaw-labs/zeroclaw/issues/9046)** (1 comment, 1 day old) — `/model` command always fails because the cache file is never created. No fix PR yet.

### High Severity (S2 - Degraded Behavior)
- **[#8973 — Landlock blocks shell access to required system files on Fedora](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)** (3 comments, 3 days old) — Shell tool fails when Landlock sandbox enabled because `sh` cannot access `/dev/null`. No fix PR yet.
- **[#9028 — Ctrl+C on Windows causes force quit](https://github.com/zeroclaw-labs/zeroclaw/issues/9028)** (1 comment, 1 day old) — Exit code 1073741510 on Windows. No fix PR yet.
- **[#6548 — Channel runtime command replies bypass Fluent localization](https://github.com/zeroclaw-labs/zeroclaw/issues/6548)** (3 comments, 66 days old) — Hard-coded English strings persist even with non-English locale configured. Unresolved for 2+ months.

### Medium Severity (S3 - Minor)
- None reported in last 24h.

### Fix PRs in Flight for Recent Bugs
- **[PR #8937](https://github.com/zeroclaw-labs/zeroclaw/pull/8937)** — Fixes stream-hash tool args in loop_detector (avoids per-call deep clone)
- **[PR #8964](https://github.com/zeroclaw-labs/zeroclaw/pull/8964)** — Strips leaked scratchpad XML blocks from Telegram outbound messages
- **[PR #8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)** — Fixes max context fallback to use provider `context_window` if no profile max is set
- **[PR #8975](https://github.com/zeroclaw-labs/zeroclaw/pull/8975)** — Tracks assistant threads in Slack polling mode
- **[PR #9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029)** — Fixes OpenAI Responses provider vision capability (addresses #9019)
- **[PR #9032](https://github.com/zeroclaw-labs/zeroclaw/pull/9032)** — Fixes macOS release sidecar to embed dashboard
- **[PR #9033](https://github.com/zeroclaw-labs/zeroclaw/pull/9033)** — Removes unused Tauri shell plugin capabilities (security hardening)
- **[PR #8741](https://github.com/zeroclaw-labs/zeroclaw/pull/8741)** — Validates browser screenshot destination path against workspace policy (security)

---

## Feature Requests & Roadmap Signals

### High-Probability for Next Release (v0.8.4, target July 31)
- **SOP control plane completion** (#8288) — Multiple stacked PRs in flight; may reach 5/5 capability status.
- **Persistent memory parity** (#8891) — Rerank, retrieval cache, typed memory extraction all in active PRs.
- **Slack Events API (HTTP Request URL) mode** (#9022) — User request for scale-to-zero deploys; currently in discussion.
- **GUI surface for channel pairing codes** (#8998) — Requested for Telegram/Wechat/Line channels; would simplify onboarding.
- **Separate conversation history from long-term memory** (#9048, opened today) — Fresh RFC, may attract implementation in v0.8.4.

### Lower Probability but Noteworthy
- **Warn on non-existent channel alias in peer_groups** (#8997) — Small UX improvement, likely fast to implement.
- **OpenAI default wire_api=responses** (PR #9021) — Simple config default change.
- **Narrow per-model vision catalog parsing** (PR #8878) — Enhancement for provider capability introspection.

### Strategic Direction Signals
- **Core lightness (#6165)** and **local-first mode (#5287)** remain open RFCs with no PRs yet—these are foundational architectural decisions rather than near-term features.
- **Work lanes/board automation (#6808)** has been in-progress since May 20—if accepted, it will change how the project manages its own issue tracking.

---

## User Feedback Summary

- **Positive signals:** Active contributor velocity is high; multiple first-time authors (perillamint, knoppix2, lynnkeele, kouhe3, christopher-blodgett) are reporting real bugs, indicating growing real-world deployment.
- **Pain points:**
  - **Windows stability:** Ctrl+C force quit (#9028) is a quality-of-life regression for Windows users.
  - **Container deployment:** Docker Compose port binding (#9035) blocks container-based usage.
  - **Fedora/Landlock:** Security sandboxing breaks basic functionality for Fedora users (#8973).
  - **Local model users:** Long-standing request (#5287, 101 days) for compact local mode with no prompt leakage—community patience may be wearing thin.
  - **Localization gaps:** Channel runtime replies in hard-coded English (#6548, 66 days unresolved) frustrates non-English users.
  - **Model cache never written:** Basic `/model` command broken (#9046) due to missing write path—regression in recent release.
- **Use cases emerging:**
  - Scale-to-zero deploys via Slack Events API HTTP mode (#9022)
  - Programmatic cron output consumption (PR #8438, `shell_output_format`)
  - WASM channel plugins (PR #8852) indicating interest in extensibility

---

## Backlog Watch

### Issues Over 30 Days Without Maintainer Response

| Issue | Age | Last Maintainer Action | Risk |
|-------|-----|------------------------|------|
| [#5287 — Local-First Mode for Small Models](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 101 days | Labeled `status:accepted` but no assignee or PR | High — top-voted feature, community patience may erode |
| [#6548 — Channel runtime replies bypass Fluent localization](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | 66 days | Labeled `status:accepted`, no PR | Medium — S3 but affects international users |
| [#6808 — RFC: Work Lanes, Board Automation](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 55 days | Author updates but no maintainer decision/merge | High — governance RFC, stalled for nearly 2 months |
| [#6165 — RFC: Prefer lighter core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | 78 days | No maintainer response since creation | High — foundational architecture decision |

### PRs Over 7 Days Without Maintainer Review
- **[#8741 — fix(browser): validate screenshot destination path](https://github.com/zeroclaw-labs/zeroclaw/pull/8741)** — 9 days, `needs-maintainer-review` — Security fix for arbitrary file write vulnerability.
- **[#8895, #8897, #8900, #8979, #8903, #8937, #8964, #8966, #8975, #9015]** — All tagged `needs-author-action`, meaning authors have been asked to make changes and have not yet responded. This may indicate review fatigue or high barrier to passing CI.

---

**Project Health: Moderate-High Activity, Moderate Risk.** The v0.8.3 closeout and v0.8.4 planning indicate disciplined release management, but the **backlog of unanswered RFCs** (especially #5287 and #6808) and **unreviewed security fixes** (#8741) are growing concerns. The high number of `needs-author-action` PRs suggests either strict quality gates or communication bottlenecks. The influx of real-world bug reports from diverse platforms (Windows, Fedora, Docker, Slack) signals growing adoption, but also creates **platform-specific support debt** that the small maintainer team must address.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*