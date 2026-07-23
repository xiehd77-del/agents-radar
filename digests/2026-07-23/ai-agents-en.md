# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 458 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-23 02:53 UTC

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

Here is the OpenClaw project digest for July 23, 2026.

---

## OpenClaw Project Digest: 2026-07-23

### 1. Today's Overview
OpenClaw is in a period of **extremely high activity** and **significant maintenance burden**. In the last 24 hours, 458 issues were updated and 500 pull requests (PRs) saw activity, with 203 of those PRs being merged or closed. The project is processing a high volume of reported bugs and feature requests, particularly around regressions in the latest releases. While no new releases were published today, the community's focus is heavily on resolving performance slowdowns, crash loops, and security concerns introduced in recent updates, alongside large infrastructure refactors like localization and plugin lifecycle serialization.

### 2. Releases
**No new releases were published today (2026-07-23).**

The most recent releases, `2026.7.1` and `2026.7.2`, are the current focus of stability efforts. Many regressions and bugs in this digest reference these versions.

### 3. Project Progress
With **203 PRs merged or closed today**, progress is substantial across multiple fronts:
- **Refactoring & Architecture:** A major move to shift Telegram and iMessage config schemas away from the core and into their respective plugins is underway ([PR #112850](https://github.com/openclaw/openclaw/pull/112850)). A new canonical lineage model for sessions is being introduced to improve fork/ancestry tracking ([PR #111861](https://github.com/openclaw/openclaw/pull/111861)).
- **UI & Experience:** A new reactive controller for sidebar session data has been merged to fix synchronization issues ([PR #112853](https://github.com/openclaw/openclaw/pull/112853)), and a fix to prevent phantom iPad nodes on Apple Silicon Macs has been applied ([PR #112744](https://github.com/openclaw/openclaw/pull/112744)).
- **Infrastructure & Localization:** The large localization initiative continues, with a PR adding a locale context and message rendering system now open ([PR #111541](https://github.com/openclaw/openclaw/pull/111541)). A major feature adding "standard hosting profiles" and readiness conditions is still open and pending review ([PR #107765](https://github.com/openclaw/openclaw/pull/107765), [PR #104018](https://github.com/openclaw/openclaw/pull/104018)).
- **Automation:** A new CI watcher script for monitoring PR mergeability has been merged ([PR #112821](https://github.com/openclaw/openclaw/pull/112821)).

### 4. Community Hot Topics
The most active community discussions reveal deep frustration with regressions and a strong desire for more robust tooling.

- **🚀 Most Active Issue:** **[Issue #75: Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**
    - *Comments: 115, Reactions: 80*
    - **Analysis:** This remains the top community demand by a wide margin. Users are dissatisfied with the lack of desktop apps for Windows and Linux, which is the single biggest barrier to adoption outside the Apple ecosystem.

- **🔒 High-Security Demand:** **[Issue #13583: Pre-response enforcement hooks](https://github.com/openclaw/openclaw/issues/13583)**
    - *Comments: 16, Reactions: 2*
    - **Analysis:** Users in high-stakes fields (quant/finance, security ops) are vocal about the need for "hard gates"—mechanical enforcement of tool-call rules, not just soft prompt instructions. This is a critical feature for enterprise adoption.

- **🤖 Most Controversial Bug:** **[Issue #91009: Codex hook CPU stall](https://github.com/openclaw/openclaw/issues/91009)**
    - *Comments: 15, Reactions: 2*
    - **Analysis:** A severe performance bug where a native Codex integration spawns CPU-bound processes that stall the gateway. This is a "diamond lobster" severity issue, generating significant heat due to its impact on production systems.

- **🛡️ Security Concern:** **[Issue #10659: Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)**
    - *Comments: 15, Reactions: 4*
    - **Analysis:** The community is proactively requesting a system to prevent agents from reading raw API keys. This is driven by a real fear of prompt injection attacks leading to credential theft.

### 5. Bugs & Stability
The project is dealing with a wave of regressions, particularly from the `2026.7.1` and `2026.7.2` releases. Here are the highest-severity items:

- **🔴 P0 - Gateway Start Failure (Regression):** **[Issue #108435](https://github.com/openclaw/openclaw/issues/108435)**
    - *Status: Open.* Update to `2026.7.1` causes the gateway to fail to start with an error, blocking all users.
- **🔴 P0 - Mac App Install Crash:** **[Issue #98674](https://github.com/openclaw/openclaw/issues/98674)** (Closed)
    - *Status: Closed.* A critical bug where the macOS .dmg installer was unscalable, making it impossible to click the install icon.
- **🟠 P1 - Compaction Timeout Death Spiral :** **[Issue #92043](https://github.com/openclaw/openclaw/issues/92043)**
    - *Status: Open.* A 180-second compaction timeout causes a permanent failure loop for legitimate long-running summarizations. No new-fix PR exists.
- **🟠 P1 - Session State / Crash Loop:** **[Issue #85333](https://github.com/openclaw/openclaw/issues/85333)**
    - *Status: Open.* The `doctor --fix` command is 4-5x slower due to a session snapshot path traversal bottleneck.
- **🟠 P1 - Codex Hook CPU Stall:** **[Issue #91009](https://github.com/openclaw/openclaw/issues/91009)**
    - *Status: Open.* Linked PR exists. Spawns CPU-bound processes that stall the gateway RPC.
- **🟠 P1 - Cron Schema Incompatibility (2026.7.1):** **[Issue #108580](https://github.com/openclaw/openclaw/issues/108580)**
    - *Status: Open.* A regression in `2026.7.1` where the cron tool's schema breaks compatibility with `llama.cpp` grammar-constrained tool calling, causing all chat requests to fail.
- **🟠 P1 - Agent Context Degradation:** **[Issue #96857](https://github.com/openclaw/openclaw/issues/96857)**
    - *Status: Open.* Normal tool text outputs are being replaced with `(see attached image)` placeholders, making the agent "blind".

### 6. Feature Requests & Roadmap Signals
The community is pushing for more robust security and developer tooling.

- **Defenses & Controls:** The demand for "hard gates" ([Issue #13583](https://github.com/openclaw/openclaw/issues/13583)) and "masked secrets" ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659)) is strong. A `maxTurns` config option ([Issue #9912](https://github.com/openclaw/openclaw/issues/9912)) is also being requested to curb runaway tool-call loops.
- **Platform Parity:** The call for Linux and Windows apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75)) is the loudest feature request overall.
- **Developer Experience:** A `session:end` hook event ([Issue #10142](https://github.com/openclaw/openclaw/issues/10142)) is requested to integrate with external workflow orchestrators like Temporal.
- **Prediction for Next Release:** Given the "diamond lobster" and "platinum hermit" severity ratings, the **Masked Secrets** and **Pre-response enforcement hooks** systems are likely to be fast-tracked. The "Standard Hosting Profiles" PRs ([#107765](https://github.com/openclaw/openclaw/pull/107765), [#104018](https://github.com/openclaw/openclaw/pull/104018)) are large, well-structured changes that are "ready for maintainer look" and could land soon.

### 7. User Feedback Summary
User sentiment is currently **mixed, with a strong undercurrent of frustration**.
- **Pain Points:** The most common pain points are **performance regressions** (the 4x slowdown in `doctor --fix`), **crash loops** (the gateway not starting), and **silent failures** (the agent getting "image placeholders" instead of text). Users are reporting **data loss** and **session state corruption**.
- **Satisfaction:** There is satisfaction with the project's scope and ambition, but dissatisfaction with the rapid pace of breaking changes. Users appreciate the "diamond lobster" severity system, indicating they feel heard on prioritization.
- **Use Cases:** The user base is clearly diverse, ranging from individual hobbyists (building agents on macOS) to high-stakes enterprise users (quant/finance, security operations). The pain points are greatest for the latter group, who are most sensitive to stability and trust.

### 8. Backlog Watch
These issues and PRs are important but have been stuck for a while without maintainer action.

- **🔴 P1 - Stuck for 72+ days:** **[Issue #41199: Agent-to-Agent Communication Tools Have Parameter Conflicts](https://github.com/openclaw/openclaw/issues/41199)**
    - *Status: Open.* Created March 9. A systematic parameter conflict in `sessions_send` and `message` tools breaks agent-to-agent communication. A linked PR is open but "needs-maintainer-review".
- **🔴 P1 - Stuck for 2+ months:** **[Issue #39807: Billing error infinite retry death spiral](https://github.com/openclaw/openclaw/issues/39807)**
    - *Status: Open.* Created March 8. A 402 error causes a 6-hour retry spiral, burning API credits. A PR exists but "needs-maintainer-review" and "needs-product-decision".
- **🔴 P1 - Open for 2+ months:** **[Issue #65538: Screen reader accessibility](https://github.com/openclaw/openclaw/issues/65538)**
    - *Status: Open.* Created April 12. Screen readers announce every single token, making the UI unusable for visually impaired users. The fix is clear (change `aria-live`), but it's stuck at "needs-product-decision".
- **🔴 P3 - Abandoned?:** **[Issue #38568: Feature Request - Inject Context Window % ](https://github.com/openclaw/openclaw/issues/38568)**
    - *Status: Open.* Created March 7. A very simple, high-value feature request (injecting context usage into the system prompt) that has 6 comments and 2 👍's, but is completely stalled with no fix PR or security review.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digests.

---

## Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (2026-07-23)

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing a bifurcation into two distinct phases: rapid feature iteration and production stabilization. High-activity projects like **OpenClaw**, **ZeroClaw**, and **IronClaw** are in intense pre-launch or stability sprints, merging hundreds of PRs while simultaneously battling regressions. Conversely, projects like **Moltis**, **TinyClaw**, and **NullClaw** show minimal activity, indicating either maturity or stalled community engagement. A dominant theme across all active projects is the community's demand for **hard security gates** (e.g., pre-response enforcement, masked secrets, per-sender RBAC) and **cross-platform parity** (Linux/Windows desktop apps, mobile support), signaling a shift from hobbyist experimentation to enterprise-adjacent and production-grade use cases. The ecosystem is maturing, but the rapid pace is creating a "move fast and break things" tension that is increasingly frustrating users dependent on stability.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (Today) | Health Score (Qualitative) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 458 | 500 | None | 🟡 **Mixed** (High velocity, high regression burden, "diamond lobster" severity issues) |
| **ZeroClaw** | 50 | 50 | None | 🟡 **Busy** (Massive feature push, 0 PRs merged today, significant platform bugs) |
| **IronClaw** | 50 | 50 | None | 🟢 **Intense** (Pre-v1.0 launch sprint, high merge rate, systematic refactoring) |
| **CoPaw** | 28 | 50 | v2.0.0.post4 | 🟡 **Stabilizing** (Active patch cycle, user frustration with v2.0 regressions) |
| **Hermes Agent** | 50 | 50 | None | 🟢 **Strong** (High merge rate, unified PRs for long-standing issues) |
| **NanoBot** | 5 | 62 | None | 🟢 **High** (Excellent velocity, 39 PRs merged, responsive bug fixes) |
| **PicoClaw** | 4 | 5 | None | 🟡 **Moderate** (Stable maintenance, but several stale PRs) |
| **NanoClaw** | 1 | 3 | None | 🟡 **Low/Stable** (No merges, review bottleneck) |
| **NullClaw** | 1 | 1 | None | 🟢 **Healthy** (Critical bug fixed and merged within the day) |
| **LobsterAI** | 0 | 5 | None | 🟢 **Healthy** (Backlog cleaning, high-value feature merges) |
| **Moltis** | 0 | 1 | None | 🟢 **Stable** (Very low activity, no open issues) |

### 3. OpenClaw's Position

**OpenClaw** remains the ecosystem's central, most active project, acting as a core reference for many others. Its key advantages are:

- **Unmatched Community Scale:** With 458 issues and 500 PRs updated daily, its community is an order of magnitude larger than any other project in this analysis. This drives a massive feature pipeline but also a proportional maintenance burden.
- **Comprehensive Platform:** It targets a full-stack solution (macOS/iPad/visionOS apps, browser extension, voice mode) far beyond the CLI or single-channel focus of many peers.
- **Technical Depth:** Features like session lineage models, plugin lifecycle serialization, and a native Codex integration are more architecturally complex than simpler alternatives like **NanoBot** or **PicoClaw**.

**Its key weaknesses are:**
- **Stability Regressions:** The high number of P1 bugs and user frustration with "phantom" nodes, crash loops, and 4x slowdowns in core commands undermines user trust. This is the price of its rapid, aggressive release cycle.
- **Platform Gap:** The single most requested feature (Issue #75) is Linux/Windows desktop apps, a gap that **IronClaw** (with its pre-launch focus) may be better positioned to fill.
- **Configuration Complexity:** The number of ignored config keys and lost environment variables suggests a configuration system that is less robust than **ZeroClaw**’s more modular approach.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, pointing to ecosystem-wide priorities:

- **Strict Security Controls:** Communities are demanding proactive security, not just prompt engineering.
    - **Pre-response enforcement / Hard Gates:** **OpenClaw** (#13583), **ZeroClaw** (#5982 - RBAC)
    - **Masked Secrets / Credential Isolation:** **OpenClaw** (#10659), **NanoClaw** (#3118)
- **Multi-Platform & Multi-Channel Parity:** Users want their agent to work everywhere.
    - **Desktop Apps (Linux/Windows):** **OpenClaw** (#75), **CoPaw** (#6344 - hot updates)
    - **Rich Messaging Support:** **ZeroClaw** (Matrix voice transcription), **NanoClaw** (Telegram rich rendering), **PicoClaw** (IRC long messages)
- **Advanced Agent Orchestration:** Moving beyond simple task delegation.
    - **Multi-Agent Collaboration / Goal System:** **NanoBot** (#5000), **ZeroClaw** (Goal framework PRs #8687-8689), **CoPaw** (Creator app, mission system)
- **Performance & Context Optimization:**
    - **Context Window Management:** **ZeroClaw** (#5808 - deferred schemas), **Hermes Agent** (#62708 - silent overflow), **OpenClaw** (#38568 - context injection)
    - **OOM Prevention:** **LobsterAI** (PR #2375), **CoPaw** (#5218 - freeze on compaction)
- **Developer Experience & Tooling:**
    - **Plugin/Config Hot-Reload:** **ZeroClaw** (#7897), **CoPaw** (#6344)
    - **Verifiable Testing & CI:** **IronClaw** (#6535, #6537), **ZeroClaw** (#9212)

### 5. Differentiation Analysis

| Feature Axis | OpenClaw | ZeroClaw | IronClaw | NanoBot | Hermes Agent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Target User** | Power users, early adopters, Apple ecosystem | Enterprise, multi-tenant, security-focused | Managed hosting, enterprise, blockchain | Hackers, tinkerers, single-instance | Power users, developers, CLI-first |
| **Architecture** | Monolithic core with plugin system | Modular, "everything is a plugin" | Trait-based (`ProductSurface`), microservices-ish | Simpler, provider/channel model | CLI+TUI+Gateway, async delegation |
| **Platform Focus** | Apple (macOS/iPad/visionOS) | Cross-platform (Linux native) | Cloud & Staging (`agents-stg.near.ai`) | Cross-platform CLI + WebUI | Desktop (CLI/TUI) + Mobile (Slack/Telegram) |
| **Primary Strength** | Community size, feature breadth | Unification & modularity | Stability & production readiness | Velocity & developer velocity | Consolidation of legacy PRs |
| **Primary Weakness** | Stability regressions, platform gap | Zero PRs merged, blocked tests | Missing channels (Telegram broken) | Low community engagement | Silent failures, fragile sessions |
| **Risk Profile** | High churn, high reward | High potential, slow to merge | Low risk, methodical | Low risk, simple | Moderate risk, state management issues |

### 6. Community Momentum & Maturity

- **Tier 1: High Intensity / Pre-Launch**
    - **IronClaw:** Highest momentum of any project. The v1.0 launch campaign is a clear, focused goal. The systematic refactoring (ProductSurface) and test infrastructure buildout suggest this team is operating like a startup close to shipping.
    - **ZeroClaw:** Massive feature development (Goal system, provider unification) but zero PR mergers today indicate a potential review bottleneck. The Windows test failures (#7462) could become a launch blocker.
- **Tier 2: Rapid Iteration / Stabilizing**
    - **OpenClaw:** Extremely high activity but struggling with regressions. The project is iterating *on* features while simultaneously trying to stabilize *for* users, leading to a mixed sentiment.
    - **CoPaw:** In a clear stabilization phase post-v2.0 launch. The rapid patch cycle (v2.0.0.post4) shows responsiveness but the user frustration with the ~2s overhead and feature crashes is a risk.
    - **Hermes Agent:** Efficiently consolidating multiple community contributions into single, unified PRs. This indicates a mature review process and good project hygiene.
- **Tier 3: Healthy / Maintenance**
    - **NanoBot:** High velocity with good bug management (fix PRs opened same day). This project is the most "sustainable" in terms of contributor throughput vs. community size.
    - **LobsterAI:** Backlog cleaning and merging of long-standing feature PRs suggests a healthy, if slower, cycle. The OOM fix is critical for power users.
- **Tier 4: Low Activity / Stable**
    - **PicoClaw, NanoClaw, NullClaw, Moltis, TinyClaw, ZeptoClaw:** These projects show very low activity. While not necessarily "dead," they represent a stable but stagnant part of the ecosystem. Their value lies in specific, narrow use cases (e.g., NullClaw's Discord focus) rather than broad ecosystem development.

### 7. Trend Signals

The following industry trends are extracted from the community feedback and activity across projects. These are valuable for AI agent developers:

1.  **The "Security Hard Gate" is the new "Killer Feature".** The demand for mechanical enforcement of security rules (pre-response hooks, masked secrets, per-sender RBAC) across **OpenClaw**, **ZeroClaw**, and **NanoClaw** shows that the ecosystem is moving beyond prompt engineering as a security strategy. For developers, this means building agent systems that can guarantee an API key is never leaked, rather than just "asking nicely" with a system prompt.

2.  **Context Management is the Core Performance Bottleneck.** The issues of silent overflow (**Hermes**), first-turn budget overruns (**ZeroClaw**), and compaction freezes (**CoPaw**, **OpenClaw**) all point to the same problem: current LLM context windows are a fundamental scaling constraint. The winning platform will be the one that manages this limitation transparently and efficiently. Developers should prioritize tools and APIs for fine-grained context control (e.g., injection %, deferred schemas).

3.  **The "Silent Failure" is the Most Toxic Bug.** Users are more frustrated by an agent that lies silently (fabricated results, image placeholders) or silently fails (context overflow, broken OAuth config) than by a hard crash. This is evident in **Hermes**, **OpenClaw**, and **CoPaw**. For developers, designing for transparency and fail-stop behavior is more important than raw functionality.

4.  **The Ecosystem is Fracturing on Platform.** **OpenClaw**’s dominance in Apple-native UX pits it against **ZeroClaw** and **IronClaw**'s more Linux/cloud-native approaches. There is no clear leader in the Windows space. A project that delivers a high-quality Windows experience could capture a massive underserved audience.

5.  **Standards are Still Fragile.** The issues with MCP schema incompatibility (**NanoBot** #5040), tool call formatting (**CoPaw** #6363), and cron schema problems (**OpenClaw** #108580) show that common integration standards are still immature, forcing each project to create workarounds. This is a high-cost area for the entire ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-23

## 1. Today's Overview
NanoBot shows **high activity** over the past 24 hours, with **62 PRs updated** (23 open, 39 merged/closed) and **5 issues updated** (4 open, 1 closed). The project is in an **intensive development phase**, with major cross-cutting enhancements landing across providers, channels, WebUI, and agent internals. OAuth integration, multi-bot support, and performance optimization for the WebUI are dominant themes. No new releases were published today. Community engagement is moderate, with several bug-triage PRs from a single contributor indicating a focused effort on stability.

## 2. Releases
**None.** No new versions were tagged today.

## 3. Project Progress (Merged/Closed PRs)
**39 PRs were merged or closed today** (most closed by merge). Notable advances:

- **[PR #4866] feat(agent): make model presets session-scoped** – Makes model-preset selection per-session, with consistent `LLMRuntime` per turn, improving multi-turn provider handling. *Status:* Merged.
- **[PR #4948] WebUI loses visibility when a late subagent completion starts a system turn** – Closed as completed; fixes a WebUI lifecycle bug where late subagent output created invisible system turns.
- **[PR #5009] feat(feishu): add groupPolicy listen for context-only group ingest** – Merged; enables Feishu bots to passively accumulate group context and reply only on `@mention`.
- **[PR #5018] feat(skills): support explicit context loading** – Merged; fixes `skill_names` being ignored in `ContextBuilder`.
- **[PR #5033] feat(telegram): support multiple bot instances in WebUI** – Merged; adds backward-compatible multi-telegram-bot configuration with validation and dedup.
- **Multiple bug-fix PRs from `santhreal` merged** (see Bugs & Stability section).
- **Multiple backlog PRs closed** (e.g., #2584, #4439, #4446, #4494, #4689, #4988) — long-standing feature branches cleaned up, though several were closed without merge.

## 4. Community Hot Topics

### Most Active Issues
- **[#5000] [OPEN] Proposal: evolve the current subagent system toward multi-agent collaboration**
  *Author: bingqilinweimaotai* | **4 comments** | [View Issue](https://github.com/HKUDS/nanobot/issues/5000)
  *Analysis:* The highest-engagement issue. Proposes a fundamental architecture shift from task-delegation subagents to persistent, state-sharing multi-agent collaboration. This signals community desire for more advanced agent orchestration. Likely to become a roadmap item.

### Most Active PRs
- **[#5035] feat(providers): add xAI Grok OAuth with capability-gated X Search**
  *Author: chengyongru* | [View PR](https://github.com/HKUDS/nanobot/pull/5035)
  *Analysis:* Large feature PR adding native OAuth + PKCE for xAI Grok, including proactive token refresh and capability-gated X Search. High priority (p1), reflects the project's investment in premium LLM provider integrations.
- **[#5017] feat(webui): show the actual fallback model**
  *Author: chengyongru* | [View PR](https://github.com/HKUDS/nanobot/pull/5017)
  *Analysis:* Improves WebUI transparency when model fallback occurs. Users have long requested visibility into which model is actually serving each response.
- **[#5003] perf(webui): index conversation history in SQLite**
  *Author: chengyongru* | [View PR](https://github.com/HKUDS/nanobot/pull/5003)
  *Analysis:* High-impact performance PR replacing JSONL reads with indexed SQLite. Targets WebUI responsiveness for users with large conversation histories.

## 5. Bugs & Stability

### High Severity (with fix PRs)
| Issue | Bug Description | Severity | Fix PR |
|-------|-----------------|----------|--------|
| [#5041](https://github.com/HKUDS/nanobot/issues/5041) | Completed no-op Dream batches starve all later history (`.dream_cursor` not advancing) | **Critical** – can cause indefinite Dream stagnation | Fix pending |
| [#5040](https://github.com/HKUDS/nanobot/issues/5040) | MCP tool schema with non-`#/$defs/` `$ref` disables entire model on Kimi/Moonshot | **High** – breaks model usage on strict providers | Fix pending |
| [#5044](https://github.com/HKUDS/nanobot/pull/5044) | `pairing.json` with `null` approved channel lists crashes `is_approved` | **Medium** – crashes on load | PR #5044 (open) |
| [#5043](https://github.com/HKUDS/nanobot/pull/5043) | Null `runHistory` elements in `jobs.json` raise TypeError, quarantine store | **Medium** – drops sibling jobs | PR #5043 (open) |
| [#5042](https://github.com/HKUDS/nanobot/pull/5042) | Null `schedule` in `jobs.json` quarantines entire cron store | **Medium** – drops sibling jobs | PR #5042 (open) |

### Medium Severity (with fix PRs)
- **PR #5046** – Feishu: fenced markdown tables incorrectly rendered as card `table` elements (fix open)
- **PR #5045** – Slack: fenced markdown tables rewritten to key/value lines (fix open)

### Low Severity / Infra
- **PR #5036** – Idle compaction scan on Raspberry Pi consumes 30-40% CPU; adds configurable interval (enhancement/fix open)

### Regression Watch
- **PR #4988** (merged today): fix(agent): keep background turns silent when model ends empty – addressed regression where cron/local-trigger turns emitted unwanted placeholder messages.

## 6. Feature Requests & Roadmap Signals

### Likely Next-Release Features
1. **xAI Grok OAuth integration** (PR #5035) – high priority p1, near-complete, likely to land next.
2. **Multi-Team/Org Telegram support** (PR #5033) – merged today, will be in next release.
3. **WebUI SQLite indexing** (PR #5003) – performance-critical, nearing completion.
4. **Parallel Search MCP preset** (PR #5047) – low complexity, community sought-after feature (free web search MCP).

### Roadmap Signals
- **Multi-agent evolution** (Issue #5000) – The highest-engagement issue proposes persistent subagent identities, shared state, and inter-agent communication. This architectural change would be a major version milestone if accepted.
- **Feishu groupPolicy:listen** (PR #5009, merged) – Signals expansion of enterprise IM bot capabilities.
- **OAuth status/expiry UX** (PR #4689, still open but active) – Improving OAuth lifecycle management across CLI/WebUI/runtime.

## 7. User Feedback Summary

### Pain Points Expressed
- **Configuration conflicts** (Issue #5028): Feishu-media path vs workspace restrictions cause file access failures when workspace limits are enabled. Users report "several similar instances" of not being able to read previously uploaded files.
- **Model visibility** (PR #5017 motivation): Users want to know which actual model is serving after fallback.
- **Resource consumption on edge hardware** (PR #5036): Users report 30-40% CPU usage on Raspberry Pi during idle, requesting configurable compaction intervals.
- **MCP schema incompatibility** (Issue #5040): Kimi/Moonshot providers reject tools with non-standard `$ref` schemas, disabling entire model categories.

### Satisfaction Signals
- High velocity of PR merges (39 merged/closed today) indicates responsive maintainers.
- Several user-submitted PRs merged (e.g., #5009 from `bllackhu`, #5044-5046 from `santhreal`), showing healthy community contribution.
- The `feat(webui): PWA support` PR (#4494) from `zpljd258` remains open but active, indicating continued community investment in mobile UX.

## 8. Backlog Watch

### Important Issues Needing Maintainer Attention
| Issue | Age | Type | Risk |
|-------|-----|------|------|
| [#2584](https://github.com/HKUDS/nanobot/pull/2584) – Xiaozhi voice gateway support | **117 days** (since Mar 28) | Feature PR | Stale; major feature that may need rebasing |
| [#4439](https://github.com/HKUDS/nanobot/pull/4439) – `search_history` tool | **31 days** (since Jun 21) | Feature PR | Modest feature; may have merge conflicts |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) – DingTalk private chat gate | **31 days** (since Jun 22) | Enhancement PR | Actively updated but not merged |
| [#4494](https://github.com/HKUDS/nanobot/pull/4494) – WebUI PWA support | **29 days** (since Jun 24) | Enhancement PR | Community interest in mobile; conflicts noted |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) – OAuth status & expiry warnings | **20 days** (since Jul 3) | Feature PR | Overlaps with new OAuth PRs (#5035); risk of redundancy |
| [**#5000**](https://github.com/HKUDS/nanobot/issues/5000) – Multi-agent collaboration proposal | **3 days** (since Jul 20) | Feature Request | Growing community attention; needs maintainer response |
| [**#5040**](https://github.com/HKUDS/nanobot/issues/5040) – MCP schema breaks Kimi/Moonshot | **1 day** (since Jul 22) | Bug (High) | New; no fix PR yet; affects users of strict providers |

### Unresolved Long-Standing Issues
- **#4055** (referenced in #5041) – Related Dream cursor bug; #5041 is a distinct but related issue.
- **#4479** (referenced in #4494) – Underlying UX request for WebUI mobile improvements; partially addressed by PR #4494.

---

**Project Health Assessment:**
- **Velocity:** 🟢 Very high (62 PRs updated / 39 merged in 24h)
- **Bug management:** 🟢 Excellent (multiple new bugs have fix PRs opened same day)
- **Community engagement:** 🟡 Moderate (4 comments on top issue, but many PRs from repeat contributors)
- **Backlog hygiene:** 🟡 Improving (several long-open PRs being closed, but 117-day-old PR still active)
- **Risk areas:** 🟡 New high-severity bugs (#5041, #5040) without pending fixes; multi-agent proposal (#5000) may grow if not addressed soon.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for July 23, 2026.

---

## Hermes Agent Project Digest: 2026-07-23

### 1. Today's Overview
Project activity remains very high, with 50 issues and 50 PRs updated in the last 24 hours. The team is actively merging fixes and consolidating multiple community contributions into unified solutions, demonstrating strong project velocity. A significant number of closed/merged PRs (18) show efficient resolution of backlog items. However, the high volume of open issues (11 new open issues today) indicates rapid community growth and feature demand, alongside persistent stability concerns regarding session state and message delivery.

### 2. Releases
No new releases were published today. The latest version on the repository remains **v0.19.0 (2026.7.20)**.

### 3. Project Progress
The following high-impact features and fixes were advanced via merged or closed PRs:

- **Clarify Timeout Unification (PR #69774):** A new PR has been opened to supersede and consolidate five separate PRs (#42974, #51993, #68986, #52031, #49767) that attempted to fix the fragmented clarify timeout logic across CLI, TUI, and Gateway. This signals a move toward a single, canonical solution after weeks of parallel efforts.
- **Gateway Message Ordering Fix (PR #69775):** A fix addressing the race condition where a `clarify` prompt appears *above* the assistant's explanation text has been rebased and opened for merge.
- **Late Response Handling (PR #69773):** A consolidated fix for `tui_gateway` has been created to handle late `clarify` and `terminal.read` responses after a timeout, superseding two previous attempts.
- **Slack Relay Restoration (PRs #69716, #69747):** Two merged PRs restore streaming delivery, command execution, and status clearing for Slack traffic routed through an authenticated relay. PR #69747 is a salvage of the previous attempt to resolve merge conflicts.
- **Async Delegation Fabrication Fix (PR #69777):** A new PR was opened to fix a critical bug where weak/local models fabricate results after dispatching a background task, preventing silent data corruption.

### 4. Community Hot Topics
The following issues and PRs generated the most discussion, highlighting key community friction points and desired features:

- **[Issue #4335] Feature Request: Cross-platform session context sharing (CLI ↔ Telegram) (9 comments, 4 reactions):** This long-standing request for session continuity across different messaging platforms (CLI, Telegram, Discord) remains a top community desire. The discussion reflects a need for the agent to have a unified "memory" of a conversation thread, regardless of the input channel.
- **[Issue #66875] [Bug]: Latest session does not switch after navigating to Plugins/Artifacts tab and back (7 comments):** A high-friction UI/UX bug in the desktop app. Users report that the primary workflow of clicking back to the latest chat session fails after viewing other panels, making the application feel broken.
- **[Issue #62708] Silent context-overflow: no warning when compression is blocked (3 comments):** This P1 bug highlights a critical user experience failure. When context compression fails, the agent silently drifts toward a provider token limit crash, giving the user no warning or progress indicator. The community is concerned about unpredictability.
- **[Issue #69551] Desktop SSH remote mode broken with non-default profile (3 comments):** A newly filed, high-energy report (3 comments in one day) detailing a broken workflow for remote SSH desktop usage. The token-path resolution bug makes this feature unusable for users with multiple profiles.

### 5. Bugs & Stability
Several significant bugs and regressions were reported today, with a clear pattern of session-state and platform-specific issues. Fix PRs exist for some.

- **High Severity:**
    - **[Issue #69776] Async delegation dispatch note tells the model to "just continue," so weak models fabricate the result:** A critical bug causing silent data corruption. **Fix PR #69777 is open.**
    - **[Issue #69764] Host Path Leakage in File Attachment Orchestration (v0.19.0):** A high-severity bug that exposes host file paths to the agent in Docker/WSL2 environments, representing a security and sandboxing concern.
- **Medium Severity:**
    - **[Issue #69738] [Bug]: /reload deletes container-supplied env config:** The `/reload` command breaks Docker deployments by deleting environment variables that were set via `docker -e` or `env_file`.
    - **[Issue #69737] [Bug]: checkpoints.enabled is ignored in one-shot sessions (hermes -z):** A configuration option (`checkpoints.enabled`) is completely ignored in one-shot CLI sessions.
    - **[Issue #69709] supports_vision override not resolved for CLI --provider with named custom_providers:** Custom provider configuration for vision models fails to apply correctly via CLI.
- **Low Severity (Desktop UI):**
    - **[Issue #69660] Queued messages appear in thread history with timer instead of queue drawer:** A desktop UI regression where queued messages are displayed poorly in the thread history.
    - **[Issue #69638] Desktop: queued large image reconnect-loops:** A bug causing WebSocket reconnection loops and excessive localStorage usage when queuing large images.

### 6. Feature Requests & Roadmap Signals
The features requested today indicate a strong push for configurability, platform parity, and better user control over the agent's internal processes.

- **Per-Task Model Selection (Issue #69694 - CLOSED):** A request to allow `delegate_task` to assign different LLMs to different sub-agents for parallel tasks (e.g., code review). This was closed, likely as a duplicate or low priority, but the use case is clear.
- **WhatsApp Channel Skill Bindings (Issue #69726):** A request to extend the `channel_skill_bindings` feature (currently available for Discord and Slack) to WhatsApp. This signals a push for feature parity across all supported messaging platforms.
- **ACP Tool Scoping (Issue #45955):** A request to honor the `--toolsets` flag in the ACP adapter, allowing users to scope which tools are available per-session. Currently, this flag is parsed but ignored.
- **Browser Tool Gating (Issue #66393):** A feature request for the `agent-browser` tool to gracefully notify users when it's not installed, rather than failing silently or returning confusing errors. This is likely to be a quick usability win.

### 7. User Feedback Summary
Real user pain points today center on **state fragility** and **scalability**.

- **Fragile Sessions:** The recurring theme of bad session state (e.g., Issue #66875, Issue #68302, Issue #57775) frustrates users. The desktop app's inability to reliably switch sessions or handle long threads (Issue #68979) is a significant pain point, creating a broken UI experience.
- **Silent Failures:** Users are unhappy with the "black box" nature of certain failures. The silent context overflow (Issue #62708) and the fabricated async delegation results (Issue #69776) show a demand for more transparency from the agent about its internal state and decisions.
- **Configuration Complexity:** The number of bugs related to config keys being ignored (e.g., `checkpoints.enabled` in Issue #69737) or environment variables being lost (Issue #69738) suggests that the configuration system is becoming a source of user friction and confusion.

### 8. Backlog Watch
The following long-standing issues may require maintainer attention to avoid community frustration:

- **[Issue #4335] Cross-platform session context sharing (CLI ↔ Telegram):** (Opened 2026-03-31, 9 comments) This is a major feature request that has not seen recent maintainer activity. The lack of a roadmap signal (e.g., "needs-decision" label remains) could be seen as neglectful.
- **[Issue #21341] [Bug]: nixosModule `documents` option installs files to wrong paths:** (Opened 2026-05-07, 5 comments) This bug for NixOS users is over two months old with no fix PR. It blocks a clean NixOS deployment for new users.
- **[Issue #12651] .env sanitizer does not remove documented KEY=*** placeholders:** (Opened 2026-04-19, 3 comments) A security-related config bug (treating `***` as a real credential) that has been open for three months.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-23

## 1. Today's Overview
PicoClaw continues active development with moderate activity over the past 24 hours. Four issues remain open, all receiving recent updates, while five pull requests were touched — two were merged or closed, and three remain open. No new releases were published today. The project appears in a stable maintenance phase with a focus on bug fixes, documentation cleanup, and incremental feature additions across supported messaging channels. Community engagement is moderate, with several stale items awaiting maintainer review.

## 2. Releases
No new releases this period.

## 3. Project Progress
Two pull requests were merged/closed today:

- **[PR #3286 — fix: update Go and x/text for govulncheck](https://github.com/sipeed/picoclaw/pull/3286)** — A bug fix that updates Go dependencies and the `x/text` library to address vulnerabilities flagged by `govulncheck`. This is a security/maintenance improvement, not a feature addition.
- **[PR #3285 — docs: remove picopaw](https://github.com/sipeed/picoclaw/pull/3285)** — A documentation cleanup that reverts a previous addition (likely removing stale or incorrect references to "picopaw").

Additionally, one open PR advanced with updates:
- **[PR #3222 — refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)** — Significant refactoring of the DeltaChat integration, including dropping legacy features, removing hardcoded relay lists, removing password-based email configuration, and renaming `invite_link` → `join_invite_link`. This reduces code by 200 lines and improves maintainability.

## 4. Community Hot Topics

1. **#3203 — [BUG] Matrix sync loop has no reconnection logic**  
   - 5 comments, 2 👍  
   - [GitHub Issue](https://github.com/sipeed/picoclaw/issues/3203)  
   - This is the most active issue. The Matrix `/sync` long-polling loop silently dies after network/server disruptions with no auto-reconnect, and systemd's restart-on-failure doesn't trigger because the main process stays alive. The user essentially loses the Matrix channel until manual restart. Underlying need: robust network resilience for long-polling transport channels.

2. **#3163 — [OPEN] feat(bedrock): leverage Converse prompt caching**  
   - Open since June 23, stale  
   - [GitHub PR](https://github.com/sipeed/picoclaw/pull/3163)  
   - This PR introduces AWS Bedrock prompt caching via explicit cache points, which could significantly reduce costs for users with long system prompts or tool-heavy contexts. Despite being open for a month, it has no comments from maintainers — likely awaiting review.

## 5. Bugs & Stability

**High severity:**  
- **#3203 — Matrix sync loop silent death** — [Issue](https://github.com/sipeed/picoclaw/issues/3203)  
  - No reconnection logic after network/server disruption. Main process stays alive so systemd doesn't restart it. Workaround: manual restart. No fix PR exists yet.

**Medium severity:**  
- **#3258 — Process Hook `before_tool` modify not working** — [Issue](https://github.com/sipeed/picoclaw/issues/3258)  
  - Decision field discarded, args misparsed due to deserialization defect in the hook system. This impacts tool execution workflows that rely on pre-tool processing. Marked stale.

**Low severity:**  
- **#3287 — IRC long message support** — [Issue](https://github.com/sipeed/picoclaw/issues/3287)  
  - New issue (1 day old). PicoClaw treats split IRCv3 messages (due to 512-byte limit) as separate messages instead of one cohesive message. Currently has no comments or fix PRs.

## 6. Feature Requests & Roadmap Signals

- **#3257 — Stateless/no-history mode for gateway sessions** — [Issue](https://github.com/sipeed/picoclaw/issues/3257)  
  - User requests the ability to create fresh conversations in gateway mode without state persistence. Currently only the `agent` subcommand supports `--session` key overrides. This is a moderate-effort UX improvement likely to land in an upcoming minor release (v0.3.x).

- **#3287 — Better long message support in IRC** — [Issue](https://github.com/sipeed/picoclaw/issues/3287)  
  - User wants PicoClaw to reassemble split IRCv3 messages into cohesive inputs. This is a channel-specific feature request, likely prioritized for the next maintenance release if the IRC maintainer picks it up.

- **#3163 — Bedrock prompt caching** — [PR](https://github.com/sipeed/picoclaw/pull/3163)  
  - If merged, this would be a significant cost optimization for AWS Bedrock users. Its staleness suggests either maintainer hesitation or the need for additional testing. Likely candidate for v0.3.2 or v0.4.0.

## 7. User Feedback Summary

- **Pain points:** Silent failure of Matrix sync (most urgent); tool hook deserialization defects breaking automation workflows; inability to statelessly use gateway mode for one-off queries; IRC long-message fragmentation.
- **Use cases:** Multi-channel AI assistant deployment (Matrix, Telegram, IRC, DingTalk); automated tool/integration workflows; cost-sensitive AWS Bedrock deployment.
- **Satisfaction:** Moderate — users are actively reporting bugs and requesting features, indicating engagement. However, the high number of stale issues and PRs (3 open PRs tagged `[stale]`) suggests maintainer bandwidth may be a bottleneck.
- **Dissatisfaction signs:** The Matrix reconnection issue (#3203) has been open for 21 days with 5 comments but no fix or acknowledgment from maintainers. Users may be running custom workarounds or considering alternatives.

## 8. Backlog Watch

**Critical items needing maintainer attention:**

1. **#3203 — Matrix sync reconnection** (21 days open, no maintainer response)  
   - [Issue](https://github.com/sipeed/picoclaw/issues/3203) — Silent channel death is a high-severity bug affecting all Matrix users.

2. **#3163 — Bedrock prompt caching PR** (30 days open, stale)  
   - [PR](https://github.com/sipeed/picoclaw/pull/3163) — Significant cost-saving feature awaiting review/merge.

3. **#3222 — DeltaChat refactor PR** (20 days open, stale)  
   - [PR](https://github.com/sipeed/picoclaw/pull/3222) — Substantive code cleanup and documentation improvement with -200LOC.

4. **#3258 — `before_tool` hook defect** (8 days open, stale)  
   - [Issue](https://github.com/sipeed/picoclaw/issues/3258) — Breaks tool execution workflows for users relying on hook modifications.

The accumulation of 3 stale PRs and several unaddressed issues suggests the project may benefit from a dedicated triage session or increase in maintainer capacity to prevent contributor burnout and user frustration.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-23

## Today's Overview
Project activity remains moderate with 3 pull requests updated in the last 24 hours, all remaining open with no merges. A single open issue (#3118) was filed yesterday raising a security documentation concern about credential isolation claims. No new releases or merges occurred today, indicating a period of review and refinement rather than rapid feature pushes. The project shows steady community contribution activity, with two feature-oriented PRs (#3117, #2877) moving through the review pipeline. Overall project health appears stable but with a slight accumulation of open PRs that could benefit from maintainer bandwidth.

---

## Releases
None — no new releases were published in the last 24 hours. The latest stable release remains unchanged.

---

## Project Progress
No pull requests were merged or closed in the last 24 hours. Three PRs remain open and under review:

- **#3070** *(open, 7 days old)* — Fixes WhatsApp sender identity divergence between Baileys and Cloud channel paths. Resolves a data integrity issue where the same phone number maps to different user IDs depending on the channel backend. This is a stability-critical fix for multi-channel WhatsApp deployments. [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070)

- **#3117** *(open, 1 day old)* — New utility skill `add-omarchy-statusbar` providing a Waybar status indicator for NanoClaw. This is a community-contributed utility with no source code changes, aimed at desktop Linux users. [PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117)

- **#2877** *(open, 25 days old)* — Long-standing feature PR adding native Telegram rich rendering via Bot API 10.1's `sendRichMessage`. This is an older, more substantial PR that may be blocked or awaiting review. [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)

---

## Community Hot Topics
Only one issue and three PRs were updated, with no comments or reactions recorded today. However, based on recency and subject matter:

- **#3118 – SECURITY.md overclaims per-group credential isolation** *(0 comments, 0 reactions, filed yesterday)* raises a meaningful security documentation accuracy concern. The reporter notes that OAuth connections on self-hosted OneCLI are account-level, not per-group, contradicting the documentation. This could confuse self-hosters configuring multi-tenant setups. [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118)

- **#2877 – Telegram rich rendering** *(25 days open, no comments visible)* remains the oldest active PR, suggesting either complexity in review or maintainer bandwidth limitations. Community interest in Telegram-native rendering is likely high given Telegram's popularity as a chat platform. [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)

There are no high-activity discussions today — the community appears to be in a low-engagement phase.

---

## Bugs & Stability
One notable issue was filed, but no crash or regression reports are present today:

- **Medium severity** — Issue #3118 reports a documentation inaccuracy in `docs/SECURITY.md` under "Credential Isolation." The document claims OAuth connections are per-group isolated, but the reporter (bradfeld) asserts that on self-hosted OneCLI, OAuth connections are actually account-level. This is not a runtime crash but could lead to security misconfiguration in multi-tenant deployments. No fix PR exists yet. [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118)

- **Low-medium severity** — PR #3070 addresses a persistent bug (Issue #3069) where WhatsApp sender identity diverges across channel paths (Baileys vs. Cloud), causing duplicate user IDs for the same phone number. This is an open fix awaiting review. [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070)

No crashes, regressions, or data loss reports were filed today.

---

## Feature Requests & Roadmap Signals
- **Telegram rich rendering** — PR #2877 implements native `sendRichMessage` support via Bot API 10.1. Given the PR is 25 days old without comments, it may be waiting on API compatibility review or contributor revisions. Likely candidate for v0.12.x or v0.13 if accepted. [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)

- **Waybar status indicator** — PR #3117 is a lightweight utility skill for desktop Linux users running Wayland-based compositors. This signals growing demand for desktop integration and operational tooling beyond core chat channels. [PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117)

- **OAuth isolation clarification** — Issue #3118, while a doc bug, reveals a deeper user need: clear, accurate documentation for self-hosters managing multi-group OAuth policies. Future roadmap may include true per-group OAuth credential isolation or clearer warnings in security docs.

---

## User Feedback Summary
No direct user feedback or satisfaction signals were captured today. The only user-submitted content is:

- **Pain point**: Inaccurate security documentation (Issue #3118) — user discovered a mismatch between docs and actual self-hosted behavior, which could lead to misconfiguration.
- **Use case**: Multi-tenant group isolation for OAuth — user appears to be a self-hoster running multiple NanoClaw groups with distinct credential policies.
- **Community contribution**: Two utility/feature PRs from community members (robbyczgw-cla, mmneimne, QuantumBreakz), indicating active contributor engagement despite low maintainer merge activity.

No satisfaction/dissatisfaction signals are available from today's data.

---

## Backlog Watch
- **PR #2877** — Telegram rich rendering (25 days open, last updated today) — This is the most significant backlog item. Its age without comments or updates suggests it may be stuck. Maintainers should triage: either assign a reviewer, request changes, or provide timeline expectations to the contributor. [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)

- **PR #3070** — WhatsApp sender identity fix (7 days open) — A targeted bugfix that should be lower-risk. If reviewed soon, could be merged quickly. [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070)

- **Issue #3118** — Filed yesterday, no response yet. Security documentation issues should be triaged promptly to prevent self-hosters from following incorrect guidance. [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118)

- **PR #3117** — Waybar skill (1 day old) — Low complexity, likely ready for review soon. [PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-23

## 1. Today's Overview

Project activity is very low today, with only one issue and one pull request updated in the last 24 hours, both of which have been closed or merged. No new releases were published. The community’s attention is sharply focused on a critical Discord gateway bug (Issue #977), which causes the bot to go permanently deaf after processing just one message; a fix is found in the merged PR #978. Overall, the project appears stable but with a single, high-priority stability concern being actively resolved.

## 2. Releases

No new releases were published today.

## 3. Project Progress

One pull request was merged/closed today:

- **PR #978 (merged)** — *discord: run typing thread on the heavy runtime stack*  
  Author: Tetraslam  
  Fixes a crash caused by the Discord typing-indicator thread running on a 512KB auxiliary stack (`AUXILIARY_LOOP_STACK_SIZE`) while performing HTTPS requests. The `std.crypto.tls` library does large inline memcpy that overflows the small stack, aborting the process. The fix moves the typing thread to the heavy runtime stack.  
  [GitHub PR #978](https://github.com/nullclaw/nullclaw/issues/978)

## 4. Community Hot Topics

The most active discussion today is centered on the only open/updated issue:

- **Issue #977 (closed)** — *Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE*  
  Author: Tetraslam | 1 comment  
  This issue documents a 100% reproducible bug where the bot handles exactly one incoming message, replies, then never dispatches another event while heartbeats still flow. The community’s underlying need is clearly for reliable, continuous Discord event processing — this is a critical usability and trust issue for any production bot.  
  [GitHub Issue #977](https://github.com/nullclaw/nullclaw/issues/977)

## 5. Bugs & Stability

| Severity | Bug | Status |
|----------|-----|--------|
| **Critical** | Discord gateway goes permanently deaf after one `MESSAGE_CREATE` (Issue #977) | Fixed by PR #978 |

The critical bug described in Issue #977 has been resolved by the merged PR #978. The root cause was not a gateway protocol issue but a stack overflow in the typing-indicator thread. No other regressions or crashes were reported today.

## 6. Feature Requests & Roadmap Signals

No new feature requests were made today. The current activity is entirely focused on stability — specifically, fixing the Discord integration’s message handling and crash resilience. Given the low activity, the next release will likely be a hotfix release containing only the PR #978 change.

## 7. User Feedback Summary

While direct user feedback is minimal today, the issues raised strongly indicate user dissatisfaction with the reliability of Discord event processing. The existence of a 100% reproducible deafness bug suggests testing for long-running bot sessions may have been insufficient. The community likely expects this bug to be patched urgently in a point release. No positive feedback or feature praise was recorded.

## 8. Backlog Watch

No long-unanswered issues or PRs were identified in today’s data. The project appears to have kept up with its limited open workload. However, project maintainers should consider whether similar stack-overflow risks exist in other auxiliary-threaded operations across the codebase.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-23

## Today's Overview
IronClaw shows **intense pre-launch activity** with 50 issues and 50 PRs updated in 24 hours, strongly suggesting a **v1.0 launch campaign** is underway. The `v1-launch-checklist` label appears on multiple critical bugs (#6523, #6534, #6522), and a `release-fix-1.0.0-rc.1` branch is being actively patched. The project resolved 14 issues and merged/closed 25 PRs today, while introducing a major new architectural initiative: the `ProductSurface` routing refactor (PRs #6536, #6538, #6480, #6441). The **absence of a new release** despite this velocity indicates the team is in a stabilization sprint before cutting a launch tag.

## Releases
**None.** No new releases were published in the last 24 hours.

## Project Progress
**Key merged/closed PRs today (25 total):**
- **ProductSurface Refactor**: `#6538` — Route OpenAI-compatible APIs through ProductSurface; `#6480` — Convert operator, project, admin, and automation APIs to ProductSurface; `#6529` — Move outbound preferences facade out of composition
- **Testing Infrastructure**: `#6535` — Add Slice 0 reference model oracles for turn/run lifecycle; `#6540` — Mask ambient NEARAI env in test runs; `#6537` — Run full Reborn E2E gates on `release-fix-*` branches
- **CI/CD Fixes**: `#6537` (above) — Critical for release branch confidence; previously release-fix branches only ran smoke/lint checks
- **Foundation Completions**: Multiple "Completed foundation" issues closed (`#6519`, `#6515`, `#6514`, `#6513`, `#6510`, `#6505`, `#6499`, `#6498`, `#6495`, `#6494`, `#6493`, `#6489`) — covering Telegram support, extension runtime, OAuth hardening, and configuration management delivered in prior weeks
- **Bug Fixes**: `#6533` (open) — Container-supervised mode for hosted deployments (partial fix for #6534); `#6531` (open) — Admin OAuth config runtime application

**Architecture note**: The `ProductSurface` pattern now covers WebUI (`#6441`), operator config (`#6480`), OpenAI-compat (`#6538`), and channel ingress (`#6536`). This is a **major refactor** replacing direct `ProductWorkflow` dependencies with a trait boundary.

## Community Hot Topics
1. **#6284** — [EPIC] Error-recoverability endgame (4 comments) — Ensures 100% of mid-run errors survive, are visible to the model, and actionable. This is a **launch-blocking reliability goal**.
2. **#6105** — Extension/channel lifecycle state-machine test (3 comments) — Addresses recurrent Slack connectivity regressions across four QA bug-bash waves. The underlying need is **predictable lifecycle reliability**.
3. **#5459** — Configurable skills and tools (2 comments) — Admin/user installation parity for WASM tools and skills. **Long-standing roadmap feature** since June 30.
4. **#3288** — Production/scoped capability lifecycle admin parity (2 comments, since May 6) — Extension/skill/MCP lifecycle under typed services. **Architecture debt** still unresolved.

## Bugs & Stability
**High Severity (v1-launch-checklist, P1):**
- **#6523** (Agent fails to create if testing flag set) — Docker deployment error. **No fix PR yet.**
- **#6534** (Google OAuth config can't be applied in hosted deployments) — Config saves but is not consumed. **Partial fix** in PR #6533 (container-supervised mode), but WebUI config path and saved-but-unread issues remain.
- **#6475** (Telegram `/pair` command not recognized, pairing loop) — Agent treats `/pair` as ordinary text. **No fix PR yet.**
- **#6474** (Telegram delivery channel not configurable in Delivery Defaults) — Only "Web app only" option exposed. **No fix PR yet.**
- **#6478** (Agent redirects to Slack auth when Telegram is connected) — Channel routing confusion. **No fix PR yet.**
- **#6522** (No Telegram setup instructions) — Missing documentation for operator setup. **No fix PR yet.**

**Medium Severity:**
- **#6521** (CLOSED) — `ironclaw` CLI missing on staging agents. Likely a deployment issue, already resolved.

**Regressions Tracked**: Issue #6105 confirms Slack connectivity has regressed across **4 QA waves** despite multiple fixes. The new channel lifecycle tests (PRs being reviewed) aim to end this pattern.

## Feature Requests & Roadmap Signals
1. **Attested Signing (#6532, new today)** — Ledger hardware-wallet clear signing for blockchain transactions. This is a **Phase A plan/design** — IronClaw would enable agents to transact without unilateral fund movement. **Likely v1.1 or v2.0 feature.**
2. **Hermetic Testing Platform (#6524, new today, epic)** — Would answer *"Does every capability have deterministic coverage?"* Consolidates existing test pieces into a single framework. **Likely post-launch priority.**
3. **Configurable Skills/Tools (#5459)** — Admin/user installation parity. Still open since June 30 with only TODOs. **Might slip past v1 launch.**

## User Feedback Summary
**Pain Points (mostly from QA/staging users):**
- **Telegram onboarding is broken** (#6475, #6474, #6478) — Users cannot complete pairing, aren't routed correctly, and cannot configure Telegram delivery. This forms a **blocking user experience gap** for Telegram adopters.
- **OAuth configuration is non-functional in hosted deployments** (#6534) — Google Suite/Gmail connections cannot be set up by operators on `agents-stg.near.ai`. Core feature for enterprise use.
- **Agent creation fails with test flag** (#6523) — Blocks developers who want to test builds before deploying to production.
- **Missing instructions** (#6522) — Users don't know how to set up Telegram, while Google has setup instructions. Inconsistent UX across channels.
- **Slack lifecycle regressions persist** (#6105) — Known issue, but still affecting users after fixes.

**Satisfaction Signals**: The "Completed foundation" closure series (12 issues retroactively closed today) suggests the team is **finalizing delivery documentation** for previously shipped work, which is good project hygiene ahead of launch.

## Backlog Watch
1. **#2246** (since April 10) — Unify extension model: MCP tools as single-tool extensions. 1 comment. **Long-standing architecture unification** needed before MCP ecosystem scales. Still open.
2. **#1330** (since March 18) — Tool schema: expose message routing/attachment semantics. 1 comment. **On hold**. Blocks model understanding of channel-specific contracts.
3. **#1519** (since March 21) — Routine notifications lack context in user's chat thread. 1 comment. **Routine notification UX debt** — notifications go to isolated conversations, not user threads.
4. **#3288** (since May 6, "reborn") — Production/scoped capability lifecycle admin parity. 2 comments. **Architecture debt blocking** extension/skill/MCP lifecycle unification.

**Attention needed**: Several issues older than 30 days (#2246, #1330, #1519, #3288) have only 1-2 comments and no recent activity despite being labeled as architecture-blocking or enhancement. The launch push may be delaying these foundational improvements.

---

*Report generated from 100 updated GitHub items (50 issues + 50 PRs) in the last 24 hours.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 23, 2026.

---

## LobsterAI Project Digest — 2026-07-23

### 1. Today's Overview
The project shows a healthy, active development cycle focused primarily on stability, hardening, and merging long-standing feature branches. Activity was high for a single day, with **5 pull requests merged** and **1 issue closed**. While there were no new releases, the team resolved critical vulnerabilities, including a fix for out-of-memory (OOM) crashes and an installer hardening for Windows. The closure of several old "stale" PRs (from April 2026) indicates a successful backlog cleanup and integration of previously deferred features.

### 2. Releases
No new releases were published on this date.

### 3. Project Progress
Five pull requests were merged/closed today, reflecting progress across four key areas:

- **Windows Installer Hardening (PR #2377):** Feature merged to improve security during the Windows update installation process. *Area: Renderer & Main*.
- **Co-work Export UI Fix (PR #2376):** Fixed a rendering bug where the export options modal was incorrectly positioned behind the sidebar. The fix mounts the modal via a body portal to resolve z-index conflicts. *Area: Renderer & Co-work*.
- **OOM Crash Guard (PR #2375):** Major stability improvement. Added guards to prevent crashes when loading oversized transcripts (text-to-speech or conversation data). The fix also addresses zombie reconnections after a heap-out-of-memory restart. *Area: Renderer, Docs, Main, & OpenClaw*.
- **Skills Management Feature (PR #1346):** A long-dormant feature PR was merged, implementing skills management improvements based on official requirements linked to PR #846.
- **Scheduled Task Enhancement (PR #1347):** Another stale PR merged, delivering a significant feature: Cron custom scheduling, Agent selectors for scheduled tasks, and UX improvements. This includes a visual Cron builder and raw expression input modes.

### 4. Community Hot Topics
The only issue updated today (#1348) was a closed bug report. The most significant activity was on the **Scheduled Task Enhancement (PR #1347)** and **Skills Management (PR #1346)**, which were both several months old. Their closure suggests strong internal prioritization of:
- **User Automation Needs:** The Cron scheduling feature directly addresses a popular user demand for flexible, programmable automation rather than fixed schedules.
- **Customization/Agency:** The ability to bind specific Agents (or AI models) to individual scheduled tasks signals a trend toward user-empowerment and granular control.
- **Link:** [PR #1347: Feat(scheduledTask): Custom Cron scheduling and Agent Selection](https://github.com/netease-youdao/LobsterAI/pull/1347)

### 5. Bugs & Stability
One stability issue was addressed today, ranked as **High Severity**:

- **Out-of-Memory (OOM) Crash (PR #2375):** A critical bug causing the application to crash when processing extremely large transcripts (text-to-speech or conversation logs) has been fixed. The fix not only blocks oversized data from entering the gateway but also handles "zombie" client reconnections that occur after a crash.
- **UI Rendering Bug (PR #2376):** A medium-severity visual bug where the export modal was hidden behind the sidebar was fixed.
- **Closed Issue (#1348):** A stale issue regarding duplicate name validation for scheduled tasks was closed, likely resolved by the new scheduled task UI introduced in PR #1347.

### 6. Feature Requests & Roadmap Signals
The merging of PR #1347 signals a clear roadmap direction:

- **Next Version Features:** The scheduled task module is now much more powerful. Users can expect full Cron expression support (visual and raw), allowing for advanced scheduling like "every 15 minutes" or "last day of the month."
- **Predictions:** Given the focus on installer hardening (PR #2377) and OOM crash fixes (PR #2375), the next release (v1.x or v2.x) will likely be a **stability and security patch**. The internal "Skills Management" feature (PR #1346) may be a precursor to a larger public launch of an Agent customization or a "Skills Marketplace."

### 7. User Feedback Summary
While direct user comments were limited, the data reveals clear pain points and use cases:

- **Pain Point: Complexity of Scheduling:** The extensive work on a visual Cron builder (PR #1347) indicates feedback that the original scheduling interface was too limiting or confusing for non-developers.
- **Pain Point: Stability:** The OOM crash fix (PR #2375) shows that users handling long conversations or large text-to-speech files were experiencing crashes. This fix directly improves reliability for power users.
- **Use Case: Automation of AI Agents:** The binding of Agents to Cron schedules shows a growing use case: users want to run specific AI workflows automatically (e.g., "Every morning at 9 AM, use Agent X to summarize the news").

### 8. Backlog Watch
Significant progress was made in clearing the backlog today. Both PR #1346 and PR #1347 (stale since April) were finally merged. **No new critical or long-unanswered Issues or PRs currently require maintainer attention**, indicating a healthy state of project hygiene. The only updated issue (#1348) was already closed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-23

## 1. Today's Overview
The Moltis project is in a very low-activity period today, with no new issues reported and no releases published. A single open pull request (#1162) was updated within the last 24 hours, addressing a user-facing improvement for session date display. The absence of new bug reports or feature requests suggests a stable baseline, but the lack of any closed work or merged PRs indicates development velocity is currently minimal. Overall project health appears quiet but not concerning, pending review of the pending PR.

## 2. Releases
No new releases were published today. The latest available release remains unchanged. No migration notes or breaking changes are applicable.

## 3. Project Progress
No pull requests were merged or closed today. The only PR activity is an open PR awaiting review:

- **#1162 [OPEN]** `fix(web): show dates for older sessions` — Author: shixi-li — This PR aims to improve the session list UI by keeping localized `HH:MM` labels for today's sessions, showing "yesterday" and weekday labels for recent prior days, and displaying full calendar dates (including year) for older sessions. It also adds browser test coverage for all four date buckets. This is a user-facing polish fix with no breaking changes.  
  [GitHub: PR #1162](https://github.com/moltis-org/moltis/pull/1162)

## 4. Community Hot Topics
There are no issues with active comments or reactions today. The only active discussion item is the open PR #1162, which has no comments yet. Community engagement appears very low; the PR's author has not received any feedback or reviews. No underlying needs can be inferred beyond the PR's stated improvement to session date readability.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The project has zero open/active issues. Stability appears good based on this data, though the low activity may mask dormant issues. No fix PRs are currently addressing stability concerns.

## 6. Feature Requests & Roadmap Signals
No new feature requests were submitted today. Based on the single open PR (#1162), the only signal for the next version is an improved date-labeling system for the session history UI. This is a minor enhancement rather than a major roadmap change. No user-requested features are visible in the data.

## 7. User Feedback Summary
No user feedback (comments, reactions, or direct reports) was captured today. Pain points and satisfaction levels cannot be assessed from the available data. The project has no open issues or discussions to analyze.

## 8. Backlog Watch
No long-unanswered issues or pull requests require maintainer attention. The only open item (PR #1162) was created yesterday and is still fresh. The project's backlog is effectively empty, which may be healthy or may indicate that users are not actively engaging with the repository.

---

**Overall Assessment:** Low activity with a single pending PR. Project appears stable but may benefit from increased maintainer responsiveness to avoid the PR stagnating. No urgent items identified.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-23

## 1. Today's Overview

CoPaw shows **high activity** with 50 PRs and 28 Issues updated in the last 24 hours, and a new patch release v2.0.0.post4. The v2.0 line continues to see adoption-related feedback, but also brings **significant stability regressions** — multiple users report process freezes, response truncation, and ~2s fixed overhead compared to v1.x. A strong wave of **first-time contributors** (most notably `patrick-andstar` submitting 8+ fixes) signals growing community involvement. The project is in a **stabilization phase** after the v2.0 launch, with maintainers actively merging fixes for race conditions, token tracking, and tool execution bugs. However, user frustration is visible: one user explicitly called for pre-release load testing after a `loop` feature crashed their main process.

## 2. Releases

- **v2.0.0.post4** *(new)* — Changelog: "Optimized agent reasoning to mitigate redundant thinking loops and duplicate tool invocations."
  - **Migration note**: No breaking changes reported, but users upgrading from v1.x should be aware of the ~2s overhead issue (#6307). The release addresses a critical freeze bug (#5218) and loop-related crashes.

## 3. Project Progress

**15 PRs merged/closed today** (out of 50 updated). Key advances:

- **Token usage persistence**: `patrick-andstar` merged fix `#6375` to retry token writes after transient failures, preventing silent data loss.
- **Context injection fix**: PR `#6359` (closed) and its replacement `#6360` (open) correct a `system` role placement that broke GLM/OpenAI APIs. The fix changes injection role to `user`.
- **Tool call parsing**: PR `#6364` strips markdown fences and XML tags from tool_call arguments, fixing JSON decode errors for GLM-5-Turbo and DeepSeek-V3 users.
- **Approval UI safety**: PR `#6357` re-prioritizes "Once" over "Always Allow" in the console approval card to prevent accidental permanent permission grants.
- **Docker hot-update request**: Feature request `#6344` for web-based hot updates (inspired by AstrBot) was filed — no implementation yet.

Major feature PRs still open:
- `#6302` — Safe model discovery infrastructure (first provider integrations)
- `#6284` — QwenPaw Creator app (video creation workflow)
- `#6323` — Staged Scroll compaction and durable task continuity

## 4. Community Hot Topics

| Issue/PR | Title | Comments | Status |
|----------|-------|----------|--------|
| [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218) | [Bug] 子Agent触发上下文压缩时进程冻结 | 18 | **CLOSED** |
| [#6322](https://github.com/agentscope-ai/CoPaw/issues/6322) | platform域名跳转广告页面 | 8 | **CLOSED** |
| [#6314](https://github.com/agentscope-ai/CoPaw/issues/6314) | RemoteProtocolError: peer closed connection | 8 | **OPEN** |
| [#6307](https://github.com/agentscope-ai/CoPaw/issues/6307) | v2.0 ~2s fixed overhead per reply | 4 | **OPEN** |
| [#6376](https://github.com/agentscope-ai/CoPaw/issues/6376) | loop功能导致主进程挂掉 (call for load testing) | 2 | **OPEN** |
| [#6362](https://github.com/agentscope-ai/CoPaw/issues/6362) | MiniMax-M3 图片识别完全失败 | 2 | **OPEN** |

**Underlying needs**: Users are demanding **stability in the v2.0 migration** — the overhead (#6307) and freeze (#5218) issues are likely blockers for v1.x holdouts. The MiniMax-M3 vision bug (#5135 reopened via #6362) is a long-standing pain point. Advertising domain hijacking (#6322) on mobile networks is a serious security concern.

## 5. Bugs & Stability

**High severity** (process crashes / data loss):

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6376](https://github.com/agentscope-ai/CoPaw/issues/6376) | v2.0.0.post3/post4 `loop` feature crashes the main process. User demands pre-release load testing. | None yet |
| [#6374](https://github.com/agentscope-ai/CoPaw/issues/6374) | Token usage persistence silently drops data on transient write failures | [#6375](https://github.com/agentscope-ai/CoPaw/pull/6375) **(merged)** |
| [#6372](https://github.com/agentscope-ai/CoPaw/issues/6372) | Idle cleanup removes a newly recreated queue state, causing consumer loss | [#6373](https://github.com/agentscope-ai/CoPaw/pull/6373) (open) |

**Medium severity** (functional regressions / incorrect behavior):

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6307](https://github.com/agentscope-ai/CoPaw/issues/6307) | ~2s fixed overhead in v2.0 vs v1.x per reply | None yet |
| [#6363](https://github.com/agentscope-ai/CoPaw/issues/6363) | Tool_call arguments polluted with markdown/XML — breaks all tool execution for GLM, DeepSeek | [#6364](https://github.com/agentscope-ai/CoPaw/pull/6364) (open) |
| [#6358](https://github.com/agentscope-ai/CoPaw/issues/6358) | Context injection as `system` role in mid-conversation breaks multiple API providers | [#6360](https://github.com/agentscope-ai/CoPaw/pull/6360) (open) |
| [#6362](https://github.com/agentscope-ai/CoPaw/issues/6362) | MiniMax-M3 image recognition returns hallucinations | None yet |
| [#6324](https://github.com/agentscope-ai/CoPaw/issues/6324) | Response truncation with MiniMax-M3 (v2.0.0.post3/post4) | None yet |
| [#6354](https://github.com/agentscope-ai/CoPaw/issues/6354) | Approval dialog UI prioritizes "Always Allow" over "Once" (risk of accidental permanent grants) | [#6357](https://github.com/agentscope-ai/CoPaw/pull/6357) (open) |

**Low severity** (developer tooling / platform-specific):

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6361](https://github.com/agentscope-ai/CoPaw/issues/6361) | Console test scripts don't run on Windows | [#6365](https://github.com/agentscope-ai/CoPaw/pull/6365) (open) |
| [#6366](https://github.com/agentscope-ai/CoPaw/issues/6366) | Console coverage test can time out under V8 instrumentation | [#6367](https://github.com/agentscope-ai/CoPaw/pull/6367) (open) |
| [#6370](https://github.com/agentscope-ai/CoPaw/issues/6370) | Downloader fallback incomplete after timeout | [#6371](https://github.com/agentscope-ai/CoPaw/pull/6371) (open) |

**Stability note**: Three "first-time-contributor" tagged fix PRs (#6371, #6369, #6373) from `patrick-andstar` are addressing critical concurrency and data-loss bugs in the channels, governance, and file-handling subsystems.

## 6. Feature Requests & Roadmap Signals

**Likely to land in next release (v2.0.1-beta / v2.0.0.post5):**

- **Per-job model overrides for cron** — PR #6353 is open and addresses community request [#6316](https://github.com/agentscope-ai/CoPaw/issues/6316)
- **Safe model discovery** — PR #6302 is under review; would reduce user burden of manual model ID entry
- **Docker web-side hot update** — Issue #6344 requests AstrBot-style "reload without container rebuild"; no implementation yet

**Hot user demand signals:**

1. **Multi-tenant / enterprise deployment** — Issue #6335 asks if CoPaw supports multiple user accounts sharing one instance for company agents. Currently no multi-account support, but this is a common enterprise prerequisite.
2. **API exposure for agents** — Issue #6377 requests forming agent capabilities into HTTP APIs with structured request/response formats for external service integration.
3. **Drag-and-drop file upload** — Issue #6297 (closed as existing feature?) requested direct image/PDF/Office document drag-and-drop in conversations — critical for contract review workflows.

**Longer-term signals:**
- **Audio-native interaction** — The `qwenpaw-creator` app (#6284) hints at multimedia content creation direction
- **Qwen3.8 model support** — PR #6293 adds the latest Aliyun model to token plans

## 7. User Feedback Summary

**Satisfaction drivers:**
- High iteration speed (multiple patch releases in July) is appreciated but also criticized as destabilizing
- Community responsiveness to bugs (multiple fixes up within 24h of issue creation)
- Rich plugin ecosystem (Creator app, mission system, cron)

**Major pain points:**
- **v2.0 migration is painful** — the ~2s overhead (#6307) is a clear regression; users may feel forced to stay on v1.x
- **Feature quality is inconsistent** — "Most updates only change business code/frontend resources, but Docker updates destroy runtime environments" (#6344)
- **Model compatibility is fragile** — MiniMax-M3 vision bugs persist across multiple versions (#5135 reopened as #6362); tool call formatting issues with GLM/DeepSeek
- **Process stability is degraded** — "loop function causes main process to crash" (#6376); "context compaction freezes the app" (#5218)

**Specific quotes reflecting sentiment:**
> "v2.0 introduces ~2s fixed overhead per simple conversational reply vs v1.x" — #6307
> "发布前不能测试一些么，最好压力测试一些啊" (Can't you test before release? Should do some load testing!) — #6376

## 8. Backlog Watch

| Issue | Age (days since creation) | Last Update | Reason for Watch |
|-------|--------------------------|-------------|------------------|
| [#5135](https://github.com/agentscope-ai/CoPaw/issues/5135) | 42 | 2026-07-23 | **Reopened** — MiniMax-M3 vision bug (1 👍). Closed in v1.1.11, reappeared in v2.0.0.post4 with new issue #6362. Root cause still unaddressed. |
| [#6342](https://github.com/agentscope-ai/CoPaw/issues/6342) | 1 | 2026-07-22 | ReMe (RAG memory) configuration verification — user cannot confirm embedding is working. No maintainer response yet. |
| [#6338](https://github.com/agentscope-ai/CoPaw/issues/6338) | 1 | 2026-07-22 | **Release duty** — v2.0.0.post4 installation verification; 0 comments, no checklist status visible. Release may not be fully validated. |

**Maintainer attention needed:**
- The **MiniMax-M3 ecosystem** has 3 open issues (#6362, #6324, #6358) with no fix PRs — users on this model path are experiencing the most regressions.
- Long-standing issue [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218) (process freeze on context compaction) was closed — the fix in v2.0.0.post4 should be verified by the reporter.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for 2026-07-23.

---

## ZeroClaw Project Digest — 2026-07-23

### 1. Today's Overview
The ZeroClaw project is in a period of **very high activity**, with 50 Issues and 50 PRs updated in the last 24 hours. While no new releases were cut, the project is deep in development for a major upcoming version (v0.8.0). Key themes include a massive push for a new **Goal-based agentic workflow system** (multiple XL-sized PRs), continued work on **provider architecture unification**, and urgent **cross-platform stability** fixes. The maintainer team (`Audacity88`, `vrurg`, `NiuBlibing`) is highly engaged, driving large architectural changes while also addressing critical regressions and security advisories.

### 2. Releases
**None** — No new releases have been published today. The last significant release milestone was likely pre-v0.8.0 preparations, as the project is currently in a heavy feature-development and refactoring phase.

### 3. Project Progress
**Zero Merged/Closed PRs:** All 50 updated PRs remain **open**. This indicates that either the team is working through a large batch of code or the review process is bottlenecked on a few critical, interdependent stacks.

- **Major Goal System Push:** A trio of PRs from contributor `vrurg` (PRs [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687), [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688), [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)) introduces a complete "Goal" framework: a goal controller, verifier, channel admission commands (`/goal`, `/start`, `/objective`), and trusted delegation tools. This is the largest feature in development.
- **Fixing Goal Stability:** PR [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) and [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) are fixing critical regressions in the new Goal system, preventing goal loops and preserving running goals across daemon reloads.
- **Provider Refactoring:** PR [#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) surfaces native Anthropic refusals as typed errors, a crucial UX improvement. PRs [#9056](https://github.com/zeroclaw-labs/zeroclaw/pull/9056) and [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) improve provider failure diagnostics and add native support for Hailo-Ollama hardware inference.
- **Security & Infrastructure:** A fast fix for the npm audit (PR [#9270](https://github.com/zeroclaw-labs/zeroclaw/pull/9270)) directly addresses the critical `ISSUE #9235`. New CI gates for regression testing (PR [#9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212)) and a new Dependabot config for the web UI (PR [#9269](https://github.com/zeroclaw-labs/zeroclaw/pull/9269)) have been opened.

### 4. Community Hot Topics
The most active discussions highlight deep architectural needs and user friction:

- **#5937 — Unified Provider Architecture ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5937), 12 comments):** The highest-commented issue calls for a massive refactor to unify the `providers` module and `reqwest` client management. This reflects a clear technical debt that is causing "inconsistent usage" and "fragmented configuration" across ZeroClaw's many supported backends.

- **#7462 — 74 Windows Test Failures ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7462), 12 comments):** A severe cross-platform blocker. The test suite is essentially broken on Windows due to Unix-only commands and path assumptions. The community is frustrated that CI only runs on Linux, leaving Windows users as second-class citizens.

- **#5982 — Per-sender RBAC ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5982), 10 comments):** High demand from the enterprise and multi-tenant community. Users want to run a single ZeroClaw instance securely isolated for different user classes (customers vs. operators). This is a clear signal for a production-grade security feature.

- **#5808 — Deferred Tool Schemas ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5808), 9 comments):** A major performance pain point. The first turn of a conversation immediately exceeds the context budget due to hardcoded tool schemas, with the issue reporting a 3.3x budget overrun. This is blocking workflows for many users.

### 5. Bugs & Stability
Several critical bugs were reported or updated today, indicating ongoing stability churn:

- **CRITICAL: #9235 — npm Audit Failure ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9235)):** The CI pipeline is broken by 3 high-severity npm vulnerabilities. **Fix PR #9270 is open**, pinning `@redocly/openapi-core` and other deps.
- **HIGH: #7462 — 74 Windows Test Failures ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)):** A major platform regression. No fix PR is currently linked. This is a high-priority `p1` item.
- **HIGH: #5869 — RUSTSEC Advisory Cluster ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)):** 4 security advisories are blocked by a single transitive dependency (`rumqttc v0.25.1`). Status is `blocked`, awaiting upstream dependency update.
- **HIGH: #6724 — Channel Crashloop ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)):** An empty or disabled Signal/Voice channel configuration can cause the supervisor to crashloop (restarting every ~2 seconds), creating a denial-of-service scenario for the daemon.
- **MEDIUM: #9153 — Matrix Voice Messages Not Transcribed ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9153)):** A functional bug where inbound Matrix voice messages are completely ignored.

### 6. Feature Requests & Roadmap Signals
The activity strongly signals that **v0.8.0** will be a major release focused on three pillars:

1.  **The "Goal" System (PRs #8687, #8688, #8689):** This adds structured, long-running agent tasks with budgets, objectives, and pause/resume. This is the most advanced feature in the pipeline.
2.  **Architecture Unification:**
    - **Providers:** The refactor in Issue #5937 is likely a hard requirement for v0.8.0.
    - **Plugins:** Issue #6489's vision of "Everything is a Plugin" is a long-term roadmap signal, aiming to collapse all integrations into a unified catalog.
3.  **Enterprise Security:**
    - **Per-sender RBAC (#5982):** Highly requested for multi-tenant deployments.
    - **Zero-Downtime Config Reloads (#7897):** An RFC for applying security and config changes without restarting the daemon, a critical production feature.

New requests this week include **cursor navigation in the Zerocode config editor** (Issue #7467) and **renaming non-agent aliases** (Issue #7468), indicating the ZeroCode UI is maturing.

### 7. User Feedback Summary
The data reveals a few clear patterns of user satisfaction and frustration:

- **Pain Point: Single-Platform CI.** The Windows test failures (Issue #7462) are a recurring source of frustration. Users feel the project neglects non-Linux environments, as "CI does not catch this because the Test job only runs on Linux."
- **Pain Point: Context Window Economics.** The first-turn budget overrun (Issue #5808) hurts usability. Users are forced to artificially inflate context limits just to have a normal conversation start.
- **Pain Point: High Barrier to Entry.** The feature request for a `zeroclaw node add <url>` CLI (Issue #6390) and the quickstart validation (Issue #6416) show that setting up multi-machine or even local configurations is still too complex.
- **Positive Signal: Ecosystem Growth.** Requests for Xcode MCP bridge (Issue #6065) and LM Studio URL config (Issue #6260) show users are trying to deeply integrate ZeroClaw into their specific workflows.

### 8. Backlog Watch
Several important items are languishing:

- **Issue #5869 - RUSTSEC Advisory Block ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)):** Blocked by a transitive dependency for over three months. This is a security landmine that needs a maintainer decision (fork, patch, or replace `rumqttc`).
- **Issue #6157 - Nextcloud Talk Wrong API ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)):** Status is `in-progress`, but the fix was opened months ago and is not seeing activity. This is blocking a specific, named channel integration.
- **Issue #6715 - Branch Housekeeping ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6715)):** A low-effort maintenance task (deleting 200+ stale branches) that has been open for two months. It signals a lack of repository triage bandwidth.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*