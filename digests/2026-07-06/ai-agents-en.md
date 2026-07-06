# OpenClaw Ecosystem Digest 2026-07-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-06 15:02 UTC

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

Based on the provided GitHub data from OpenClaw, here is the project digest for **July 6, 2026**.

---

## OpenClaw Project Digest: 2026-07-06

### 1. Today's Overview

OpenClaw is experiencing a day of **extremely high community activity**, with 500 issues and 500 pull requests updated in the last 24 hours. This volume indicates a highly engaged user base and a rapidly developing project. While there are no new official releases today, the development pace is furious, with numerous open PRs targeting stability (stream error handling, race conditions), new mobile features (TTS, multi-gateway pairing), and security hardening. The project is clearly in a major "feature push" phase for its mobile and UX landscape, but is simultaneously battling a volume of bugs, particularly around tool output rendering, session state, and message delivery. OpenClaw appears healthy but strained by its own success in adoption.

### 2. Releases

- **No new releases were published on 2026-07-06.**

### 3. Project Progress

A significant number of pull requests were merged or closed today, indicating strong forward momentum. Key areas of progress include:

- **Mobile & App Features:**
    - A major UI redesign for the Control UI chat composer was advanced (PR #100461), aiming for a more compact and integrated experience.
    - iOS is receiving substantial attention, with PRs adding voice note recording (#100946) and a "Listen" action for TTS (#100771, #100770).
    - The Android app is gaining support for pairing with multiple gateways and switching between them, a highly requested feature (#100947).
    - A new "multi-pane split view" for the Control UI chat was developed and closed, allowing operators to monitor multiple sessions simultaneously (#100754).

- **Stability & Bug Fixes:**
    - Multiple fixes were merged to handle unhandled stream errors in the shell snapshot and sandbox media components, preventing agent crashes (#100859, #100861, #100744).
    - A fix was submitted for the session sharing database (ACP) to properly close connections on shutdown, preventing file descriptor leaks and file locking (#100691).
    - An important fix for Discord ensures that fresh final messages are sent instead of editing intermediate previews, which was causing a regression (#99711).
    - Work is ongoing to fix the `/steer` command during active runs (#100803).

- **Infrastructure & Compliance:**
    - A security audit enhancement was added to flag risky configurations (open group policies, plugin commands) to help operators harden their deployments (#100945).
    - The Discord gateway was hardened by bounding incoming WebSocket payload sizes to prevent potential attack vectors (#99998).

### 4. Community Hot Topics

The most engaged discussions highlight a community focused on cross-platform compatibility, security, and advanced agent orchestration.

- **Cross-Platform Client Demands:** The most discussed issue is **#75**, a long-standing request for **Linux and Windows Clawdbot Apps**, with 110 comments and 81 👍. This remains a top community priority, indicating a significant portion of the userbase is not on macOS/iOS.
- **Android APK Releases:** **Issue #9443** (26 comments) requests **prebuilt Android APK releases**. This is a substantial barrier to entry for users who want a simple mobile companion app without compiling from source.
- **Memory and Security Architecture:** There is intense discussion around agent security and state management.
    - **#98416** (18 comments) reveals a critical bug where a fix for session initialization was broken in a published build, affecting message delivery.
    - **#7707** and **#10659** discuss memory trust tagging and masked secrets, signaling a strong desire from the community for a more sophisticated and secure permission model to prevent prompt injection and credential leaks.
- **Agent Orchestration:** Users are pushing for more control over multi-agent workflows. Issues like **#27445** (sub-agent announce routing) and **#22358** (post-subagent hooks) are heavily commented, with users wanting to build complex, chain-of-thought workflows.

### 5. Bugs & Stability

Project stability is a primary concern today, with several high-severity (P0/P1) bugs actively being discussed.

- **🔴 Critical (P0/P1):**
    - **[#98416] Published Dist Missing Reentrancy Guard:** A critical bug in the `v2026.6.11` release where a committed fix for reply session initialization was not included in the published build. This causes reply sessions to conflict, leading to message loss. **Resolved by PR #100861 (stderr handling) and #100859 (stdout handling) - both merged/closed today.**
    - **[#22676] Signal Daemon Race Condition:** A P1 bug causing orphaned processes and send failures during gateway restarts. This is a deep-seated infrastructure issue without a clear fix PR yet.
    - **[#99241] Tool Outputs Rendering as Images:** A critical P1 bug that makes the agent "blind" to its own tool outputs in long-running sessions, breaking its ability to proceed with complex tasks. An active, high-priority area of concern.
    - **[#96857] Tool Outputs Degrading to Placeholders:** A related bug to #99241, where normal text outputs become invisible to the agent. This is a systemic problem with how large outputs are handled.
    - **[#91363] Isolated Cron Fails:** P1 bug where cron jobs fail with "LLM request failed" before even reaching the provider, severely impacting automation reliability.

- **🟡 High (P2):**
    - **[#53408] Silently Dropped Tool Parameters:** A perplexing bug where `write` and `exec` tools lose their parameters after long conversations, causing silent failures.
    - **[#87711] Empty Assistant Delivery:** A bug on Telegram where the first turn after a `/new` command results in a message with no content, just a usage footer.
    - Numerous bugs tied to multi-agent state, including session initialization issues and message loss during recovery after restart.

### 6. Feature Requests & Roadmap Signals

The data strongly suggests that the next major OpenClaw release will focus on **mobile parity and a refined UX**.

- **Mobile Consideration:** The sheer volume of PRs for iOS and Android today suggests a **"Mobile Blitz" is imminent**. Features like voice input, TTS output, and multi-gateway support are being actively built, not just requested.
- **UX Overhaul:** The "redesign chat composer controls" PR (#100461) and the "multi-pane split view" (#100754) point to a significant UI overhaul for the Control UI, likely targeting power users.
- **Predicted Next Features:**
    1.  **Mobile-First Features:** Gateway TTS, voice notes, multi-gateway pairing on Android.
    2.  **Session State Management:** Better tools for handling long conversations, like the session snapshot feature (#13700).
    3.  **Security Hardening:** Masked secrets (#10659) and pre-response enforcement (#13583) are likely high on the roadmap given the community's intense interest and the project's corporate/finance user base.
    4.  **Sub-Agent Orchestration:** The community is clearly pushing for more sophisticated sub-agent workflows. Features like `announceTarget` (#27445) and `post_subagent_complete` hooks (#22358) are strong candidates for near-term release.

### 7. User Feedback Summary

The feedback is a mix of deep satisfaction and frustration.

- **Pain Points (Dissatisfaction):**
    - **Lack of Linux/Windows Clients (#75):** This is the single biggest unmet need and a constant source of friction.
    - **Agent "Blindness":** The systemic issue of tool outputs becoming unreadable to agents is a major source of frustration for power users running complex, multi-step tasks.
    - **Stability of Core Infrastructure:** The race condition on restart (#22676) and the silent dropping of tool parameters (#53408) erode trust in the system's core reliability.
    - **Configuration Complexity:** Users are calling for easier setup (Memory/Embedding in wizard #16670), better backup utilities (#13616), and simplified deployment guides (#13597).

- **Use Cases & Desires:**
    - **Multi-Environment Management:** Users want to run OpenClaw across home and work or staging/production environments, demanding better migration paths and cross-gateway support.
    - **High-Stakes Automation:** Users in quant/finance and security operations are demanding "hard gates" and enforcement hooks, not just soft instructions, for critical workflows.
    - **A "Pro" Agent:** The community is using OpenClaw for very sophisticated work (A/B testing sessions, parallel branching) and wants the tool to support complex development and operational patterns.

### 8. Backlog Watch

These are high-value issues and PRs that appear to be stalled or waiting for maintainer attention, presenting a risk of being forgotten.

- **🚩 [#75] Linux/Windows Clawdbot Apps:** The single most popular feature request. Stalled since January. **Action:** Needs a roadmap commitment or triage on feasibility.
- **🚩 [#16670] Memory Setup in Onboarding:** A key onboarding friction point. An easy win to reduce user confusion and frustration.
- **🚩 [#92451] System Prompt Bloat:** A regression report from June 12 with no fix PR. This is actively harming users of smaller models. Needs maintainer review.
- **🚩 [#53599] Chrome Extension Browser Relay Removed:** A regression that broke a workflow for managed hosting providers. **Action:** Needs a product decision on a replacement strategy.
- **🚩 [PR #100772 & #100771] iOS/Android "Listen" Action:** These are stacked on the still-open gateway TTS PR (#100770). If the core `tts.speak` PR is blocked, these mobile features will never ship.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries for **2026-07-06**.

---

## Cross-Project Comparison Report: Personal AI Assistant Ecosystem
**Date:** 2026-07-06

### 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing a **rapid bifurcation** between high-velocity, feature-rich platforms and specialized, stable tools. The ecosystem is dominated by intense development on mobile parity, agent orchestration (SOPs, goal-mode), and security hardening. A clear trend is the community's demand for **production-grade reliability**—manifesting as frustration with silent failures, context limit crashes, and the need for deterministic workflow tools. Projects like OpenClaw, NanoBot, and ZeroClaw are pushing the envelope on agentic capabilities (sub-agent orchestration, stream handling, memory architectures), while others like NullClaw and TinyClaw are in maintenance or dormant states. The ecosystem is healthy but strained, with a clear split between "feature factories" and "stabilizers."

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (Today) | Health Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | None | **Very High Activity** – Rapid feature push & bug fix cycle |
| **NanoBot** | 47 | 500 | None | **High Activity** – Post-security-audit fixing phase |
| **Hermes Agent** | 50 | 50 | None | **High Activity** – Stabilization & feature development |
| **PicoClaw** | 3 | 7 | None | **Moderate Activity** – Focused on Anthropic caching fixes |
| **NanoClaw** | 2 | 7 | None | **Moderate Activity** – Documentation overhaul, stalled merges |
| **NullClaw** | 0 | 1 | None | **Low Activity** – Maintenance mode, community silent |
| **IronClaw** | 29 | 50 | None | **High Activity** – Bug-bash & performance sprint |
| **LobsterAI** | 0 | 13 (12 merged) | None | **Very High Activity** – Rapid feature closure & stabilization |
| **TinyClaw** | 0 | 0 | None | **Inactive** – No changes in 24h |
| **Moltis** | 0 | 5 (3 merged) | None | **Low Activity** – Maintenance & dependency updates |
| **CoPaw** | 33 | 49 | **Yes (v1.1.12.post3)** | **Very High Activity** – Patch release & heavy feature work |
| **ZeptoClaw** | 0 | 0 | None | **Inactive** – No changes in 24h |
| **ZeroClaw** | 43 | 50 | None | **Very High Activity** – Major feature PRs & version milestone work |

### 3. OpenClaw's Position

OpenClaw holds a **dominant, but strained, position** as the ecosystem's core reference implementation.

- **Advantages vs. Peers:**
    - **Community Scale:** With 500+ issues and PRs updated daily, it has the largest active user base and most prolific contributor network, far exceeding peers like Hermes Agent (50/50) or CoPaw (33/49).
    - **Feature Breadth:** It is the only project aggressively shipping **mobile parity features** (iOS TTS, Android multi-gateway) alongside complex orchestration (sub-agent routing, multi-pane split view). This dual focus is unique.
    - **Security Posture:** It is actively integrating security audit findings (masked secrets, risky config flags), whereas NanoBot is still *responding* to its audit, and ZeroClaw is *designing* its security overhaul.

- **Technical Approach Differences:**
    - **Agent "Blindness" Crisis:** OpenClaw's systemic bug where tool outputs become unreadable (Issues #99241, #96857) is a unique, high-severity problem not reported in other projects. This suggests a fundamentally different (and more fragile) approach to agent state management.
    - **Mobile-First:** OpenClaw is the clear leader in mobile client development. No other project in this report shows comparable iOS/Android PR activity.

- **Community Size Comparison:**
    - **Demand:** OpenClaw's single most requested feature (Linux/Windows client, #75) has 81 👍. This is roughly 4-5x the top request in Hermes Agent (18 👍 for Auto Backup) and 40x the top request in PicoClaw (2 👍 for vodozemac). This confirms OpenClaw's user base is an order of magnitude larger.
    - **Pain Points:** The community's frustration is proportionally higher, focusing on cross-platform client availability and core stability. This is a sign of a mature project where users hit scaling limits, not basic functionality gaps.

### 4. Shared Technical Focus Areas

Several cross-cutting requirements are emerging across multiple projects, signaling industry-level needs.

| Focus Area | Projects Involved | Specific User Needs |
| :--- | :--- | :--- |
| **Mobile/Client Parity** | **OpenClaw**, **NanoClaw**, **Hermes Agent** | Linux/Windows clients (OpenClaw #75), Android APK releases (OpenClaw #9443), remote client onboarding (Hermes #36970). |
| **Agent Memory & Context Management** | **OpenClaw**, **Hermes Agent**, **CoPaw**, **PicoClaw**, **ZeroClaw** | Memory re-ranking (CoPaw PR #5669), Progressive Disclosure (Hermes #59570), memory trust tagging (OpenClaw #7707), conversation cache breakpoints (PicoClaw #3229). |
| **Security & Access Control** | **NanoBot**, **OpenClaw**, **Hermes Agent**, **IronClaw**, **ZeroClaw** | Plaintext API key storage (NanoBot #4803), SSRF protection (ZeroClaw #8713), reboot replay attacks (Hermes #59607), Slack least-privilege (IronClaw #5670). |
| **Agent Orchestration & Workflows** | **OpenClaw**, **ZeroClaw**, **CoPaw**, **Hermes Agent** | SOP/Goal-mode (ZeroClaw #8590, #8689), sub-agent hooks (OpenClaw #22358), external agent orchestration (NanoBot #3436), Kanban review transitions (Hermes #42896). |
| **Provider Compatibility** | **PicoClaw**, **NanoBot**, **ZeroClaw**, **Hermes Agent**, **LobsterAI** | Anthropic prompt caching (PicoClaw #2191, #3228), OpenAI-compatible text-format tool calls (NanoBot #4061), xAI/Grok OAuth (LobsterAI #2276), Bedrock Nova caching (ZeroClaw #8720). |
| **Chat/Channel Integration** | **Hermes Agent**, **CoPaw**, **ZeroClaw**, **IronClaw** | Rocket.Chat (Hermes #3725), Feishu failures (CoPaw #5757), Git forge channels (ZeroClaw #8609, #8611), Slack durability (IronClaw #5693). |

### 5. Differentiation Analysis

The projects are diverging along clear architectural and user-target lines.

| Dimension | OpenClaw | NanoBot / Hermes Agent | ZeroClaw | LobsterAI / CoPaw | PicoClaw / Others |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary User** | Power users, developers, quant/finance | Developers, security-conscious ops | Enterprise workflow engineers | General users, Chinese market | Embedded/resource-constrained users |
| **Feature Focus** | Mobile parity, sub-agent orchestration, UX overhaul | Security hardening, cross-platform gateways | Deterministic SOPs, goal-mode, Git forge | UI polish, cost control, email, MCP | Anthropic caching, protocol compliance |
| **Key Architecture** | **Monolithic reference** (core + mobile clients) | **Gateway-centric** (multi-platform, plugin-based) | **SOP-centric** (visual authoring, fan-in) | **Desktop app** (Electron-based) | **Lightweight** (Rust, minimal dependencies) |
| **Maturity Stage** | Feature Factory (strained by adoption) | Post-Audit Stabilization | Pre-Release Feature Push | Rapid Feature Closure | Mature, Focused |
| **Risk Profile** | High – systemic "blindness" bugs, mobile regressions | High – security vulnerabilities, race conditions | Medium – approval gate bypass, new feature bugs | Low – stable core, UI polish | Low – focused bug fixes |

### 6. Community Momentum & Maturity

Activity can be segmented into four distinct tiers.

- **Tier 1: Hyper-Active (Feature Factories)**
    - **OpenClaw, NanoBot, ZeroClaw, LobsterAI, CoPaw.** These projects are processing 50+ issues/PRs daily, shipping major features, and demonstrating high contributor engagement. They are the ecosystem's innovation leaders but also carry the most risk of regressions. **Recommendation for adopters:** Stable for bleeding-edge users; require thorough testing before production.

- **Tier 2: High-Activity (Stabilization + Features)**
    - **Hermes Agent, IronClaw.** These projects show strong development velocity but are prioritizing bug triage and stabilization over new flagship features. They are good candidates for users seeking a balance of new capabilities and reliability. Hermes Agent's reboot replay bug (#59607) is a critical outlier.

- **Tier 3: Moderate/Low Activity (Maintenance)**
    - **PicoClaw, NanoClaw, Moltis, NullClaw.** These projects are either in a maintenance cycle, a documentation phase, or a pre-release lull. They offer stability but not cutting-edge features. **Recommendation for adopters:** Safe for stable deployments where the specific feature set is sufficient.

- **Tier 4: Inactive (Dormant)**
    - **TinyClaw, ZeptoClaw.** No activity in 24h. These represent a risk for new adopters due to potential project abandonment.

### 7. Trend Signals

Based on aggregated community feedback and project activity, key industry trends are:

1.  **The Shift from "Chatbot" to "Orchestrator":** Users are no longer satisfied with single-turn Q&A. The demand for **SOPs, goal-mode, sub-agents, and parallel session management** (OpenClaw, ZeroClaw, CoPaw) signals a shift toward building deterministic, multi-step workflows. The ecosystem is competing to be the "Kubernetes for AI agents."

2.  **Security as a First-Class Feature, Not an Afterthought:** The volume of security-related issues and PRs (NanoBot's 35-finding audit, ZeroClaw's SSRF fixes, OpenClaw's masked secrets, Hermes Agent's reboot replay) indicates the community is treating security as a **competitive differentiator**, not just a compliance checkbox. "I can run a bot securely" is becoming a key value proposition.

3.  **The "Mobile Gap" is the Biggest Barrier to Mass Adoption:** OpenClaw's massive pent-up demand for Linux/Windows clients and Android APKs reveals a critical insight: the ecosystem is **desktop/mobile-first**, but the user base is **cross-platform**. Projects that ship native mobile clients first (LobsterAI, CoPaw) may capture users frustrated by platform lock-in.

4.  **Context Management is the New "Gold Rush":** The frequency of bugs and feature requests around context limits, memory, caching, and compression (PicoClaw #3228, Hermes #57275, CoPaw #5789, OpenClaw #99241) shows that managing long-running conversations is the **single biggest technical bottleneck** for advanced agent use. Solutions that solve "agent blindness" will win.

5.  **The Rise of "Agent Workflow" as a Product:** The introduction of **visual SOP authoring** (ZeroClaw #8590) and **Progressive Disclosure Memory** (Hermes #59570) marks a shift from coding agents to **configuring agent behavior**. This lowers the barrier for non-developer operators and points toward a future where "agents as a service" tools will abstract away the underlying LLM plumbing.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — July 6, 2026

## Today's Overview
NanoBot is experiencing a period of intense activity, with 500 pull requests and 47 issues updated in the last 24 hours. The project is at a critical juncture following a comprehensive deep-code security audit that surfaced 35 findings covering command injection, path escape, authentication bypass, and concurrency bugs. While no new releases were published today, the community and maintainers are moving aggressively to address vulnerabilities, with several high-priority fix PRs already filed. The volume of open PRs (495) suggests substantial development momentum, though it also indicates a growing review backlog that may require maintainer attention.

## Releases
No new releases today.

## Project Progress
Five PRs were merged or closed today:
- **#4818** *(fix/runtime)* — Guarded `web_fetch` signature against None URL to prevent spurious cache entries blocking subsequent fetches
- **#4770** *(fix/gateway)* — Resolved a CI regression from the state refresh patch (#4547) by reading runtime config path from the config loader instead of a non-existent field
- **#4017** *(fix/providers)* — Added parsing of openai-compatible text-format tool_calls (e.g., Xiaomi MiMo provider)
- **#4547** *(fix/gateway)* — Self-heal state file PID on server startup, fixing Windows `/restart` behavior
- **#4765** *(bug)* — Closed after addressing async context manager protocol support in the Python SDK

## Community Hot Topics
**Most Active Issues (by comments):**
- **#4061** *(6 comments)* — OpenAI-compatible text-format tool calls not parsed [CLOSED]  
  [Issue Link](https://github.com/HKUDS/nanobot/issues/4061) — Root cause analysis identified that some providers emit tool calls as plain text markup rather than structured `tool_calls`, causing Nanobot to fail dispatching tools and showing raw markup to users.
- **#4511** *(4 comments)* — Windows gateway `--background` state inconsistency after `/restart` [CLOSED]    
  [Issue Link](https://github.com/HKUDS/nanobot/issues/4511) — PID tracking in state files diverges from actual process ID on Windows due to new PID allocation (vs. POSIX `os.execv` preserving PID).
- **#4544** *(3 comments)* — Inconsistent shell semantics on Windows: `cmd.exe` for single-line, PowerShell for multi-line  
  [Issue Link](https://github.com/HKUDS/nanobot/issues/4544) — The `exec` tool's split shell selection creates agent confusion, as `cmd.exe` lacks cross-platform-friendly semantics.
- **#3436** *(3 comments)* — Call external agent (OpenCode/Codex integration) [OPEN]  
  [Issue Link](https://github.com/HKUDS/nanobot/issues/3436) — User request to delegate work to external frameworks instead of Nanobot's internal agent, reflecting a desire for interoperability.

**Underlying needs:** The community is focused on provider compatibility (especially non-standard OpenAI implementations), cross-platform consistency (Windows vs. POSIX), and extensibility through external agent orchestration.

## Bugs & Stability
**Critical severity:**
- **Leaked CancelledError silently swallowed** (#4804) — MCP integrations using AnyIO can leak `CancelledError` into the main agent loop, dropping current iteration without recovery. A fix PR (#4814) is open with `priority: p1`.
- **No channel-level rate limiting** (#4791) — Any paired user can flood the agent with no cooldown, debounce, or throttling. No fix PR yet filed.
- **Unprotected message['role'] dict access** (#4801) — `KeyError` on malformed session entries. Fix PR #4812 is open with `priority: p2`.
- **`.strip()` on list-form `msg.content`** (#4800) — Crashes on multimodal messages. Fix PR #4813 is open with `priority: p1`.

**High severity:**
- **Token budget returns spurious 128t when context window disabled** (#4802) — When `context_window_tokens=0`, the fallback produces a 128-token budget instead of disabling budgeting. Fix PR #4817 is open for regression testing.
- **External lookup signature creates false entry for None URLs** (#4799) — Blocks subsequent fetches via `web_fetch:none` cache entry. Fix PR #4818 was merged today.
- **Concurrent file writes from different sessions** (#4798) — No file-level locking, risking data corruption. No fix PR yet.
- **No resource limits on shell subprocesses** (#4797) — `ExecTool` doesn't apply ulimit/cgroups, allowing LLM-driven fork bombs. No fix PR yet.
- **Streaming LLM calls bypass wall-clock timeout** (#4795) — `outer_timeout_s` set to `None` for streams, allowing indefinite resource consumption. No fix PR yet.
- **Exec sessions have no shutdown cleanup** (#4794) — Orphaned child processes accumulate across restarts. No fix PR yet.
- **Global ExecSessionManager singleton** (#4793) — Cross-session data visibility between concurrent agent loops. No fix PR yet.
- **`/stop` silently discards pending queue messages** (#4792) — Permanent message loss during mid-turn stop. No fix PR yet.
- **`prepare_call` exceptions silently swallowed** (#4805) — Tool validation errors hidden by `suppress(Exception)`. Fix PR #4811 is open with `priority: p2`.

**Medium severity:**
- **`BaseException` catch in tool execution** (#4816 PR) — Fix narrows to `Exception` to prevent catching `KeyboardInterrupt`, `SystemExit`. Open with `priority: p1`.
- **WeakValueDictionary consolidation locks** (#4819 PR) — Concurrent consolidation races when GC collects locks. Open with `priority: p2`.

**Closed today:** #4061, #4511, #4544, #4765, #4619, #4068, #4655

## Feature Requests & Roadmap Signals
- **External agent orchestration** (#3436) — User requests Nanobot delegate to OpenCode/Codex instead of internal agent. Likely to influence roadmap toward interoperability with other agent frameworks.
- **OAuth status and expiry warnings** (PR #4689) — Adds provider status visibility and proactive token expiry across CLI/WebUI/runtime. This is a `priority: p1` PR and could land in the next point release.
- **Document attachments in WebUI** (PR #4771) — Extends attachment support beyond images to PDFs and other documents. Already has backend/frontend tests.
- **Weather skill contribution** (PR #4145) — A new example skill for weather lookup, with skill markdown and tests.
- **QQ channel WebSocket reconnect backoff** (PR #4768) — User-contributed exponential backoff to reduce error floods. Signals community investment in Chinese social platform integration.

**Prediction for next version:** OAuth enhancements (#4689), document attachment support (#4771), and the MCP crash protection (#4701) are strong candidates for the next minor release.

## User Feedback Summary
**Pain points:**
- Windows users experience persistent shell inconsistency (#4544) and gateway state corruption (#4511) — both closed today but highlight ongoing platform parity gaps.
- Telegram long message rendering failures (#4637) where markdown trunks fail to display — user submitted a screenshot showing blank message segments.
- Feishu (Lark) users find `/new` session messages visually indistinct (#4619) and requested system-level new-session markers.
- The Python SDK's async context manager example from docs immediately throws an error (#4765) — a significant documentation/first-time-user friction point.
- Long/multi-step goals fail with missing `SKILL.md` file (#4655) — a system prompt inconsistency where the generated prompt references a non-existent skill path.

**Satisfaction signals:**
- Active community contributions with 500+ PRs updated in 24h suggests strong engagement.
- Security audit (#4815) with 35 findings was well-received (though no reactions yet) and has already generated several targeted fix PRs.
- External contributor PRs for weather skill (#4145) and QQ channel improvements (#4768) indicate healthy community participation.

## Backlog Watch
**Long-unanswered items needing maintainer attention:**
- **#3436** *(Call external agent)* — Created April 25, last updated today by maintainer activity but still open. Deserves roadmap guidance.
- **#4145** *(Weather Skill)* — PR from June 1 with no updates since maintainer interactions. Needs review/merge to keep contributor momentum.
- **#4701** *(MCP crash protection)* — PR from July 5 with `priority: p1` and `security` tag. Critical for stability, yet not merged after one day.
- **#4689** *(OAuth status/expiry)* — PR from July 3, high visibility feature with no merge decision yet.

**Security concerns with no fix PR yet (from audit #4815):**
- `restrict_to_workspace` defaults to `False` (#4796) — full filesystem exposed by default
- API keys stored as plaintext in config (#4803) — `repr=False` but not `exclude=True` from serialization
- No per-user rate limiting (#4791) — DoS vector

These security issues, particularly the plaintext API key storage and unrestricted filesystem access, should be prioritized for the next release to prevent data leakage.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-06

## Today's Overview

Hermes Agent shows **high development activity** today, with 50 issues and 50 PRs updated in the last 24 hours, alongside sustained community engagement. Open issues outnumber closed ones (43 vs 7), suggesting the maintainers are prioritizing triage over rapid closure. The PR pipeline is similarly active with 38 open PRs and 12 merged/closed. Despite the high volume, **no new releases** were published today — the project appears to be in an intensive development and stabilization phase rather than a release cycle. The backlog includes several **P1 and P2 bugs** reported today, particularly around gateway resilience and session state integrity, indicating ongoing stability challenges.

## Releases

**No new releases today.** The project last shipped v0.17.0 on June 19, 2026. Given the volume of bug fixes and features in the PR pipeline, a v0.18.0 release may be imminent.

## Project Progress

**12 PRs merged or closed today**, including several notable fixes and features:

- **[#59683]** — **feat(moa): support one-shot preset selection** — Merged. Adds `/moa <preset> <prompt>` syntax for quick preset selection in the MOA (Mixture of Agents) feature, with a TUI picker for interactive use. This improves agent orchestration workflows.
- **[#59424]** — **fix: Daytona backend now honors env_passthrough** — Merged (duplicate of #59687). Resolves a configuration gap where environment variables were silently dropped in Daytona sandboxes.
- **[#58870]** — **docs(openviking): refresh setup guidance** — Merged. Updates documentation for the OpenViking memory provider to match the current CLI setup flow.
- **[#47445]** — **fix: preserve session source and thread metadata across cross-thread interrupts** — Closed. Fixes session routing corruption when an agent session is interrupted by a message from a different thread.
- **[#5000]** — **Qodo AntiSlop scan found 27 issues** — Closed (sweeper:cannot-reproduce). The automated code quality scan was evaluated but the issues could not be reproduced.
- **[#7921]** — **Bug: Telegram users receive internal system messages** — Closed. Fixes leakage of internal status messages (home-channel setup text, interrupt status) to Telegram users.
- **[#44212]** — **gateway: post-/stop interrupted state silently swallows next user message** — Closed. Fixes a regression where empty responses after `/stop` were dropped without notification.
- **[#36949]** — **Feature: 1Password secret source backend** — Closed. Adds support for 1Password as an external secrets provider alongside existing Bitwarden integration.
- **[#59570]** — **feat: Progressive Disclosure Memory Architecture (Three-Tier)** — Closed (proposed, not merged). A community proposal for smarter memory injection that loads context selectively rather than flat-injecting all memory every turn.

## Community Hot Topics

### Most Active Issues by Comment Count

1. **[#3725 — Rocket Chat support (14 comments, 13 👍)](https://github.com/NousResearch/hermes-agent/issues/3725)** — The most upvoted open feature request, now with a companion PR [#30463](https://github.com/NousResearch/hermes-agent/pull/30463) that implements Rocket.Chat as a bundled platform plugin. The strong demand signals that **multi-platform chat integration is a top community priority**.

2. **[#44456 — Desktop /compress returns error (9 comments, 1 👍)](https://github.com/NousResearch/hermes-agent/issues/44456)** — A usability bug in the Desktop TUI where built-in slash commands like `/compress` are not properly dispatched, causing a "not a quick/plugin/skill command" error. Users are frustrated by a core workflow (session compression) being broken in the desktop client.

3. **[#38061 — Can't connect to Remote Gateway via Tailscale (7 comments, 1 👍)](https://github.com/NousResearch/hermes-agent/issues/38061)** — Network connectivity regression where test connections succeed but actual remote gateway connections fail. The "works in test but not in production" pattern is especially concerning for remote workers relying on Tailscale for secure access.

4. **[#36970 — Desktop: first-class remote-client onboarding (6 comments, 3 👍)](https://github.com/NousResearch/hermes-agent/issues/36970)** — Users want to install the Desktop app as a *client* to an existing Hermes backend without bootstrapping a second local install. This reflects growing adoption of Hermes in client-server deployments where the desktop is a thin client.

5. **[#53004 — Projects paradigm broke folder → session → sidebar flow (6 comments)](https://github.com/NousResearch/hermes-agent/issues/53004)** — A regression from the "first-class projects" UI overhaul (#49037) that broke the core workflow of selecting a folder, starting a session, and seeing it in the sidebar. This is a **critical UX regression** affecting all desktop users.

### Underlying Need Analysis

The community is signaling three consistent themes:
- **Cross-platform connectivity**: Users want Hermes to work with their existing communication tools (Rocket.Chat, Telegram, WeChat) and network setups (Tailscale, remote gateways).
- **Desktop reliability**: The desktop client, while promising, has multiple UX regressions and crashes that erode trust.
- **Memory and context management**: The high interest in the Progressive Disclosure Memory proposal (#59570) and the Qwen thinking context loss bug (#56004) show users are hitting context window limits and want smarter memory handling.

## Bugs & Stability

### Critical / P1 Bugs (Reported Today)

- **[#59607 — gateway restart re-triggers previously confirmed shutdown/reboot command (P1)](https://github.com/NousResearch/hermes-agent/issues/59607)** — **Most dangerous bug reported today.** A confirmed high-risk reboot command executed *again* after host reboot when the user sent an unrelated follow-up message. This is a **resume/replay safety gap** around interrupted gateway turns involving host-level commands. No fix PR exists yet. **This warrants immediate attention** as it could cause unintended server reboots.

### High Severity / P2 Bugs (Reported or Updated Today)

- **[#59594 — Gateway process fails to recover from network interruption — CLOSE_WAIT sockets (P2)](https://github.com/NousResearch/hermes-agent/issues/59594)** — After VPN/temporary network drops, the gateway enters a state where all API calls fail due to stuck CLOSE_WAIT sockets. No automatic recovery mechanism. **Severity is high** for production deployments.
- **[#59662 — WeChat adapter uses os.getenv() instead of get_secret() — credential collision (P2)](https://github.com/NousResearch/hermes-agent/issues/59662)** — Security bug: the WeChat adapter reads the bot token from environment variables rather than the secure secrets store, causing credential leakage in multiplex mode. Tagged `sweeper:risk-security-boundary`. Fix unclear.
- **[#59612 — AGENTS.md Silent Threat-Scanner Block — No User Notification (P2)](https://github.com/NousResearch/hermes-agent/issues/59612)** — When the threat pattern scanner blocks a project context file (AGENTS.md, CLAUDE.md), the user receives **no notification** — content is silently replaced. This violates the principle of least surprise and could hide security actions from users.
- **[#56004 — Qwen3.6 / vLLM: prior-turn reasoning (preserve_thinking) stripped on replay (P2)](https://github.com/NousResearch/hermes-agent/issues/56004)** — Multi-turn thinking context is lost with Qwen models, breaking conversations that depend on chain-of-thought reasoning. 3 👍 indicates community impact.
- **[#56704 — computer_use capture fails on Linux/WSL: int(None) on pid/window_id (P2)](https://github.com/NousResearch/hermes-agent/issues/56704)** — Crashes on Linux when `list_windows` returns `pid: null`. Prevents computer-use functionality on Linux entirely.
- **[#57275 — always exceeds context limits, crashes models (P2)](https://github.com/NousResearch/hermes-agent/issues/57275)** — A user tested models from 32k to 256k context and Hermes *always* exceeds the limit, crashing until a new session is started. No compaction appears to work.
- **[#59626 — dashboard --status falsely reports running servers (P3)](https://github.com/NousResearch/hermes-agent/issues/59626)** — Wrapper/sandbox commands are misidentified as running dashboard servers.
- **[#59568 — MCP reconnect: lifetime retries counter never resets on successful reconnect (P2)](https://github.com/NousResearch/hermes-agent/issues/59568)** — Remote MCP servers permanently give up after 5 total drops because the retry counter is never reset. Breaks long-running MCP integrations.

### Fix PRs for Bugs

Several bug fixes were submitted today:

| Bug Issue | Fix PR | Status |
|-----------|--------|--------|
| [#59600 — patch write silently skipped](https://github.com/NousResearch/hermes-agent/issues/59600) | [#59680](https://github.com/NousResearch/hermes-agent/pull/59680) | Open |
| [#58993 — dashboard WebSocket uses 0.0.0.0 in Docker](https://github.com/NousResearch/hermes-agent/issues/58993) | [#59682](https://github.com/NousResearch/hermes-agent/pull/59682) | Open |
| [#56906 — doctor: vertex provider misidentified as broken](https://github.com/NousResearch/hermes-agent/issues/56906) | [#59679](https://github.com/NousResearch/hermes-agent/pull/59679) | Open |
| [— delegate_task: tasks parameter nullable](https://github.com/NousResearch/hermes-agent/pull/59684) | [#59684](https://github.com/NousResearch/hermes-agent/pull/59684) | Open |
| [#59600 — file write blocked by partial-read guard](https://github.com/NousResearch/hermes-agent/issues/59600) | [#59685](https://github.com/NousResearch/hermes-agent/pull/59685) | Open |
| [#59584 — git credential stripping in _is_fork()](https://github.com/NousResearch/hermes-agent/issues/59584) | [#59686](https://github.com/NousResearch/hermes-agent/pull/59686) | Open |
| [— Daytona env_passthrough honor](https://github.com/NousResearch/hermes-agent/pull/59687) | [#59687](https://github.com/NousResearch/hermes-agent/pull/59687) | Open |
| [— old plugin hook signature detection](https://github.com/NousResearch/hermes-agent/pull/59688) | [#59688](https://github.com/NousResearch/hermes-agent/pull/59688) | Open |

## Feature Requests & Roadmap Signals

### High-Community-Interest Feature Requests

1. **Rocket.Chat support** ([#3725](https://github.com/NousResearch/hermes-agent/issues/3725), 13 👍) — Still the top community request. PR [#30463](https://github.com/NousResearch/hermes-agent/pull/30463) implements this as a bundled plugin. Likely to land in next release.

2. **Automatic Backup & Version Control** ([#12238](https://github.com/NousResearch/hermes-agent/issues/12238), 18 👍) — Users want native git-like versioning for agent data (memory, skills, conversations). Highest upvoted open feature request. No PR yet.

3. **Remote client onboarding** ([#36970](https://github.com/NousResearch/hermes-agent/issues/36970), 3 👍) — Desktop as a thin client to existing Hermes backends. PR activity suggests this is in development.

4. **Kanban review workflow transition** ([#42896](https://github.com/NousResearch/hermes-agent/issues/42896)) — Kanban has a `review` status but no supported way to move tasks into it. This blocks automated review pipelines.

5. **1Password secret source** ([#36949](https://github.com/NousResearch/hermes-agent/issues/36949), 4 👍) — **Now closed/merged.** This feature has landed, expanding secret source backends beyond Bitwarden and env vars.

### Predictions for Next Release

- **Rocket.Chat platform adapter** — The PR is mature and community-vetted.
- **1Password secret source** — Already merged, will ship.
- **KeePassXC secret source** — PR [#59690](https://github.com/NousResearch/hermes-agent/pull/59690) submitted today. Could be fast-tracked.
- **MCP catalog as desktop connectors** — PR [#59692](https://github.com/NousResearch/hermes-agent/pull/59692) submitted today; aligns with desktop UX improvements.
- **Selective skill gating** — PR [#58540](https://github.com/NousResearch/hermes-agent/pull/58540) adds `skills.write_approval.only/.exclude`, allowing users to approve/deny specific skills rather than all-or-nothing. This addresses a common security/usability complaint.

## User Feedback Summary

### Pain Points

1. **Desktop client is unreliable**: Multiple users report crashes, broken slash commands, sidebar flow regressions, and network resume failures ([#44456](https://github.com/NousResearch/hermes-agent/issues/44456), [#53004](https://github.com/NousResearch/hermes-agent/issues/53004), [#56835](https://github.com/NousResearch/hermes-agent/issues/56835)). The desktop experience is the primary interface for many users, and these regressions are eroding trust.

2. **Context limit crashes are a blocker**: User @francogp ([#57275](https://github.com/NousResearch/hermes-agent/issues/57275)) tested models from 32k to 256k and Hermes *always* exceeded the limit, crashing every session. The compaction mechanism appears non-functional for this user.

3. **Network resilience is poor**: Multiple reports of gateway failures after network interruptions — persistent CLOSE_WAIT sockets ([#59594](https://github.com/NousResearch/hermes-agent/issues/59594)), Tailscale connectivity issues ([#38061](https://github.com/NousResearch/hermes-agent/issues/38061)), desktop crashes on network resume ([#56835](https://github.com/NousResearch/hermes-agent/issues/56835)).

4. **Security and transparency concerns**: The silent threat-scanner block ([#59612](https://github.com/NousResearch/hermes-agent/issues/59612)) and the reboot replay bug ([#59607](https://github.com/NousResearch/hermes-agent/issues/59607)) highlight gaps in user-facing safety mechanisms.

### Satisfaction Signals

- **Active community contributions**: 8 unique PR authors submitted fixes today (SquabbyZ, webtecnica, kyssta-exe, guolizi, UlysseTRIN, latipun7, AndreasHiltner, ashgupta236-commits), indicating a healthy contributor ecosystem.
- **Memory architecture interest**: The Progressive Disclosure proposal ([#59570](https://github.com/NousResearch/hermes-agent/issues/59570)) was well-received and closed with a detailed design that may influence future memory system architecture.
- **Plugin ecosystem growing**: Third-party providers are contributing (Cloud Temple, OpenViking, KeePassXC), showing the plugin model is attracting external developers.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Reason for Concern |
|-------|-----|----------|-------------------|
| [#12238 — Auto Backup & Version Control](https://github.com/NousResearch/hermes-agent/issues/12238) | ~80 days | P3, 18 👍 | Highest upvoted open feature. No maintainer response. Community is waiting for a decision. |
| [#42896 — Kanban review transition](https://github.com/NousResearch/hermes-agent/issues/42896) | ~27 days | P3 | Blocks automated review pipelines. No activity from maintainers. |
| [#38962 — Desktop app hung during installation](https://github.com/NousResearch/hermes-agent/issues/38962) | ~32 days | P2 | Installer hangs for hours on macOS. No resolution or workaround provided. |
| [#38161 — hermes update reports success after interrupted npm install](https://github.com/NousResearch/hermes-agent/issues/38161) | ~33 days | P2 | Silent corruption risk. No integrity check on npm install. Maintainers have not responded. |
| [#39838 — notification_sources config documented but never read](https://github.com/NousResearch/hermes-agent/issues/39838) | ~31 days | P2 | Documented feature does nothing. Users may rely on a non-functional config option. |
| [#59231 — Monetization suggestion via x402 micropayments](https://github.com/NousResearch/hermes-agent/issues/59231) | ~1 day | P3 | Marked `invalid` — appears to be a spam/self-promotion post. Consider closing. |
| [#5000 — Qodo AntiSlop 27 issues](https://github.com/NousResearch/hermes-agent/issues/5000) | ~93 days | P2 | Closed with `sweeper:cannot-reproduce`, but no detailed response on the specific findings. The 27 reported issues (e.g., Misattributed PID killing on MCP shutdown) may warrant a second look. |

### PRs Needing Review

- **[#30463 — Rocket.Chat platform adapter](https://github.com/NousResearch/hermes-agent/pull/30463)** — 45 days old. This is the implementation of the #1 community feature request. It has no comments from maintainers. The community is waiting.
- **[#58540 — Selective skill gating](https://github.com/NousResearch/hermes-agent/pull/58540)** — 2 days old. Well-designed security feature. Should be fast-tracked given community requests for better access control.

### Overall Health Assessment

Hermes Agent is in a **high-activity, high-churn phase** with strong community engagement but notable stability regressions. The project is successfully attracting external contributors, which is a positive signal for long-term sustainability. However, the **accumulation of P2 bugs without fixes** — particularly around network resilience, desktop UX, and security safety gaps — suggests the maintainers may be stretched thin. The reboot replay bug ([#59607](https://github.com/NousResearch/hermes-agent/issues/59607)) is especially concerning and should be treated as a **critical safety incident** requiring immediate fix. The next release should prioritize these stability fixes before shipping new features.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-06

## 1. Today's Overview

Project activity is **moderate and well-focused**, with 3 issues updated and 7 pull requests touched in the last 24 hours. The community is heavily engaged around provider-level caching improvements for Anthropic, with two related issues and one fix PR appearing today. The maintainer team has been responsive: one fix PR was merged today, and a long-standing bug (#2191) now has a concrete fix submitted. No new releases were cut today, but several blocking fixes are approaching merge-ready status.

## 2. Releases

No new releases published today.

## 3. Project Progress

**Merged/Closed PR today (1 item):**
- **PR #3227** (merged) – *fix(providers): resolve tool_use name/args from Function on reloaded history* — Both Anthropic providers now correctly restore `tool_use` blocks after chat history round-trips through session files. Previously, runtime-only fields (`ToolCall.Name`, `ToolCall.Arguments`) were lost on reload, breaking tool call continuity.

**Notable open PRs advancing:**
- **PR #3228** (OPEN) – Fixes #2191 by sending `SystemParts` as proper system blocks with `cache_control` markers on the `anthropic-messages` provider (submitted today).
- **PR #3226** (OPEN) – Fixes `write_file` tool to stop coaching destructive overwrites; changes framing from "replace" to "update" for existing files.
- **PR #3118** (OPEN) – Adds remote WebSocket mode for the `picoclaw agent` — enabling agent sessions over `ws://` endpoints (still in review after 24 days).
- **PR #3115** (OPEN) – Prevents session-history corruption when `data:image/...;base64,...` strings appear inside plain text tool output (generic tool output no longer mis-identified as media).

## 4. Community Hot Topics

**Most Active Issue:**
- **#3088** [OPEN] *[Feature] use vodozemac instead of libolm* — **6 comments, 2 👍** — Discussion around migrating from the unmaintained `libolm` to its official Rust-based replacement `vodozemac`. The community is pushing for compile-time optional libolm support.  
  [Link →](https://github.com/sipeed/picoclaw/issues/3088)

**Most Active PR (by recent activity):**
- **#3228** [OPEN] *fix(anthropic-messages): send SystemParts as system blocks with cache_control* — Submitted today by AayushGupta16, directly addressing the 3-month-old bug #2191. This fix is critical for Anthropic prompt caching to work correctly on the `anthropic-messages` provider.  
  [Link →](https://github.com/sipeed/picoclaw/pull/3228)

**Underlying need:** The community is demanding **proper Anthropic prompt caching support** — both for system prompts (PR #3228) and for conversation history (new proposal #3229). This points to users running agentic workloads with very long context windows where caching saves significant cost and latency.

## 5. Bugs & Stability

**High Severity:**
- **#2191** (CLOSED) – *anthropic_messages provider ignores SystemParts, breaks Anthropic prompt caching* — Closed today via PR #3228. This was a **critical bug** for anyone relying on Anthropic's prompt caching feature. 0% cache hit rate due to flat-string system message handling. **Fix PR exists and is open (#3228).**

**Medium Severity:**
- **PR #3115** (OPEN) – *Fix inline data URL media extraction* — Session-history corruption bug when generic tools return text containing base64 data URLs. Agent could misinterpret code/log output as media attachments. Fix is in review.

- **PR #3226** (OPEN) – *stop write_file from coaching destructive overwrite* — `write_file` consistently recommended destructive replacement of existing files (including `memory/MEMORY.md`). Fix reframes to "update" rather than "replace". Related to #3150.

**Low Severity:**
- **PR #3227** (MERGED) – Tool call history persistence bug — non-catastrophic but broke multi-turn tool use after session reload.

## 6. Feature Requests & Roadmap Signals

**High-signal requests likely for next version:**

1. **vodozemac migration** (#3088) — Strong community demand (👍2, active discussion). The project's security posture depends on replacing the unmaintained `libolm`. Likely target for a point release.

2. **Conversation cache breakpoints** (#3229) — New proposal today: rolling `cache_control` breakpoints for conversation history in `anthropic-messages`, keeping volatile runtime context out of the cached prefix. This extends yesterday's fix #3228 for agentic workloads. Highly likely to see implementation.

3. **Remote agent WebSocket mode** (#3118) — A significant new capability (24 days old, still open). Suggests the roadmap includes distributed agent operation.

4. **System prompt caching** (#3228) — Already submitted as a fix PR; will likely merge in days.

**Prediction for next release:** A patch version (vX.Y+1) containing #3227, #3228, and possibly #3226. A minor version bump may include #3118 and #3088 if those merge.

## 7. User Feedback Summary

**Pain points voiced:**
- "libolm is unmaintained and insecure" — user calling for a security-critical dependency swap (#3088)
- Anthropic prompt caching "defeated" on `anthropic-messages` provider — users unable to benefit from cost-saving caching feature (#2191)
- Agent tool output misinterpreting data URLs — causes session corruption and unexpected behavior (#3115)
- `write_file` coach agent toward destructive overwrites — user assets at risk of accidental deletion (#3226)

**Positive signals:**
- Community members *personally contributing* fixes (AayushGupta16, ACMYuechen, jp39) — strong health indicator for an open-source project.
- The conversation cache proposal (#3229) shows users are building *sophisticated agentic workloads* on PicoClaw and investing in its caching infrastructure.

## 8. Backlog Watch

**Items needing maintainer attention:**

1. **#3088** — *vodozemac migration* — Open for 27 days, no maintainer response visible. This is a security dependency that should not languish. Priority: **Critical**.

2. **#3118** — *remote WebSocket mode* — Open for 24 days with no comments from maintainers. Significant feature PR without review signal. Priority: **High**.

3. **#3115** — *data URL media extraction fix* — Open for 24 days, no maintainer response. Session-history corruption bug. Priority: **High**.

4. **#3192 & #3191** — Docker image base bump and `.gitignore` cleanup — Low-urgency chores but open for 9 days without merge. Priority: **Low**.

**Longest-unanswered items of concern:**
- Issue #2191 was open for **98 days** before a fix PR appeared today — long turnaround on a high-severity Anthropic bug. Users may benefit from faster triage.

---

*Digest generated 2026-07-06 from GitHub activity at github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — 2026-07-06**

**1. Today's Overview**
Project NanoClaw shows moderate activity today with 7 open PRs and 2 issues, but **no code merges or releases**. A major documentation overhaul is underway, driven by contributor *glifocat*, who submitted 4 PRs to resolve staleness across key docs (architecture, SDK, DB schema, README). A proposal for a live Zoom voice agent with K-ai KB integration was reviewed and closed, while a new feature request for image generation remains open. The lack of any merged commits this week suggests maintainer bandwidth is focused on review rather than integration.

**2. Releases**
No new releases today. Last known version remains v2.1.38 (referenced in PR descriptions).

**3. Project Progress**
- **PR #2964** — *[OPEN]* docs: update SDK deep-dive from 0.2.x to 0.3.197 (glifocat) — re-verifies SDK documentation against current pinned package.
- **PR #2963** — *[OPEN]* docs: rewrite architecture.md and agent-runner-details.md (glifocat) — rewrites stale sections to match code at v2.1.38.
- **PR #2962** — *[OPEN]* docs: sync DB schema and entity docs with migrations 010–018 (glifocat) — updates messaging_group_agents columns and entity field docs.
- **PR #2961** — *[OPEN]* docs: fix stale claims across README, CONTRIBUTING, CLAUDE.md (glifocat) — batch correction of small factual errors, removed references to deprecated `/add-signal` and `/add-matrix`.
- **PR #2958** — *[OPEN]* add-teams: Teams-CLI-first credentials flow in SSF directive grammar (Koshkoshinsk) — rebuilds the add-teams skill using structured-skill-format.
- **PR #2949** — *[OPEN]* feat(skill): /add-litellm — minimal model router (local servers + optional OpenAI) (javexed) — utility skill for model routing.
- **PR #2909** — *[OPEN]* feat(setup): template setup flow in the wizard and first-agent stamping (amit-shafnir) — adds template-based setup flow and first-agent stamping in the wizard.
- **No PRs were merged or closed today.** All work remains in review.

**4. Community Hot Topics**
- **Issue #2960 [CLOSED]** — *Proposal: Live Zoom voice agent + K-ai KB integration* (vishalsachdev, 1 comment) → This proposal for a Zoom RTMS voice agent using Azure OpenAI Realtime API was closed same-day after review. The underlying need is for real-time meeting intelligence — ingestion, transcription, and KB querying — which aligns with NanoClaw's agent-runner framework.  
  [GitHub](https://github.com/nanocoai/nanoclaw/issues/2960)
- **PR #2909 [OPEN]** — *feat(setup): template setup flow* (amit-shafnir, 0 comments, 4 days open) → Second part of the template loader (#2890). This is a significant feature for user onboarding. No maintainer feedback yet.  
  [GitHub](https://github.com/nanocoai/nanoclaw/pull/2909)

**5. Bugs & Stability**
- **No bugs, crashes, or regressions reported today.** All recent issues are feature proposals or image-generation requests — not defect reports. The documentation refresh PRs (#2961, #2962) correct stale claims but do not fix runtime bugs.

**6. Feature Requests & Roadmap Signals**
- **Issue #2959 [OPEN]** — *Image generation* (rajpoot713) → User requests logo generation for "Dream Design." This is a low-effort entry point for a basic image-generation skill. Likely to be picked up if a contributor wants a small utility skill (style of existing `/add-litellm`).
- **Issue #2960 (closed)** — *Zoom voice agent* → Though closed, the proposal signals community interest in real-time voice + KB integration, which could become a roadmap item for v2.2 or v3.0.
- **PR #2909** — *Template setup flow* → If merged, this will be a core UX improvement for new users. Expect it in the next release (v2.2.0?) after docs are stable.

**7. User Feedback Summary**
- **Positive signal**: Contributor *glifocat* is systematically fixing documentation drift, indicating community trust in the project's accuracy.
- **Pain point**: No merged code this week — active contributors may be waiting on maintainer approvals. Documentation-only PRs suggest users find docs the primary friction.
- **Use case**: User *vishalsachdev* described a practical enterprise use case (Zoom + K-ai KB), indicating demand for enterprise meeting integration.
- **Satisfaction**: Neutral. No praise or complaints in comments. The low comment count on PRs (0 per PR) suggests low engagement or that reviews happen offline.

**8. Backlog Watch**
- **PR #2909** (template setup flow, opened 2026-07-02, 4 days open) — No comments or approvals. This is a high-impact feature for user onboarding; lack of feedback risks staleness.
- **PR #2949** (/add-litellm skill, opened 2026-07-04, 2 days open) — No comments. Requires maintainer review to ensure it fits the SSF (structured-skill-format) pattern.
- **Issue #2959** (image generation, opened today) — No response from maintainers. A simple "this is out of scope" or "contributions welcome" reply would manage expectations.
- **No issues older than 1 week** are unanswered, so the backlog is short, but attention is needed on the two open PRs from last week.

**Overall Health**: Stable but stalled. Documentation is catching up to code, but no progress on feature integration or release. Maintainer response time needs improvement to keep contributors engaged.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-06

## 1. Today's Overview
The NullClaw project is in a **low-activity, maintenance-focused** period. No new issues were opened or closed in the last 24 hours, and no new releases were published. A single pull request (#956) remains open, representing a routine dependency update. Project health appears stable but quiescent, with no signs of active feature development or community engagement. The lack of issue or PR activity suggests the project may be in a steady-state or pre-release lull.

## 2. Releases
**No new releases today.** There are no releases to report for 2026-07-06.

## 3. Project Progress
- **Merged/closed PRs today:** 0
- **Open PRs updated:** 1
  - **#956 (OPEN) — ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**  
    Author: dependabot[bot]  
    Created: 2026-06-15 | Updated: 2026-07-06  
    Summary: Automated dependency bump for the Docker base image `alpine` from version 3.23 to 3.24.  
    Link: [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

No features or fixes were merged today. The only PR activity is a non-functional CI dependency update.

## 4. Community Hot Topics
**No active community discussions.** There are zero issues with any comments or reactions. The sole PR (#956) has no comments (undefined) and zero upvotes, indicating no community engagement.

**Analysis:** The project currently lacks any forum for user discussion or feedback. This may indicate either a very mature project with few unresolved questions, or a project with limited active user base.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** There are no open or closed issues, and no bug-related PRs. Stability metrics are unavailable due to absence of data. Project stability cannot be assessed from today's activity alone.

## 6. Feature Requests & Roadmap Signals
**No feature requests were submitted today.** The absence of any new issues provides no signals for upcoming features or roadmap direction.

## 7. User Feedback Summary
**No user feedback or pain points recorded today.** There are no issues, comments, or reactions to analyze. The project appears to have zero publicly expressed user sentiment in the last 24 hours.

## 8. Backlog Watch
**No long-unanswered items identified.** There are zero open issues beyond the 24-hour window. The only open PR (#956) has been pending review for 21 days, which warrants attention:
- **PR #956** — Docker Alpine bump (3.23 → 3.24)  
  Created: 2026-06-15, last updated: 2026-07-06  
  Status: Open, no maintainer action  
  Risk: Low (minor version bump for base image)  
  Link: [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

**Recommendation:** This PR is a low-risk dependency update that has been open for three weeks. A maintainer should review and merge it to keep CI consistent, or close with an explanation if deferred.

---

**Overall Project Health Assessment:**  
🔴 **Low activity** — The project shows minimal pulse with no issues, no releases, and only automated PR maintenance. While stable, the absence of community engagement or new contributions likely indicates either a mature project nearing completion or one that has entered a dormant state.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project digest for **IronClaw** for **July 6, 2026**.

---

## 1. Today's Overview
The IronClaw project is experiencing a high-velocity **bug-bash** cycle, with 29 issues and 50 PRs updated in the last 24 hours. **P2** severity bugs dominate the active issue queue, focusing on UI/UX regressions in the "Reborn" WebUI v2, including notification failures, error banner placement, and mobile layout breaks. On the infrastructure side, the core team is pushing a major performance overhaul, filing 10 dedicated performance issues (e.g., N+1 queries, excessive cloning) and merging a large collapsed "no-borking-failures" recoverability stack. While no new releases were cut today, the volume of merged PRs (11) indicates rapid stabilization and feature integration.

## 2. Releases
**None.** No new releases were published today.

## 3. Project Progress (Merged/Closed PRs & Features)
*11 items moved to closed/merged status.*
- **Recoverability Stack (PR #5692):** A large *merged* PR titled "reborn: no run-borking failures" integrated a collapsed stack of 5 critical PRs (#4841, #5389, #5390, #5403, #5613). This is a major stability milestone, adding a FailureLane classifier, retry dispositions, and model-visible failure detail.
- **NEAR SSO (PR #4284):** The long-running feature to add NEAR wallet login to WebChat V2 was successfully closed/merged, completing the final leg of the SSO epic.
- **Slack Least-Privilege (PR #5670):** A feature was *merged* that reduces OAuth grants per Slack capability, moving from a single "union of all scopes" to per-tool scoping (separating `chat:write` from read-only tools).
- **WebUI Fixes (PR #5699, #5697, #5685, #5682):** Several critical UI fix PRs were *merged* today, including surfacing tool permission save errors, hiding unsupported inference config fields, preventing mobile chat overflow, and adding i18n coverage for shell/Chat/Extensions.

## 4. Community Hot Topics
- **Performance Audit (#5671-#5680):** A coordinated batch of 10 performance issues was filed by `serrrfirat` across the entire stack (WASM linker, LLM schemas, event projections, WebUI streaming). **Analysis:** This signals a dedicated sprint to reduce latency and resource waste, likely in preparation for scaling or the "Hosted Single Tenant" (HST) Postgres effort.
- **"No run-borking failures" Stack (#5692):** The largest open PR today (contributor: core) with a massive scope covering agent, channel, tool, and sandbox. **Analysis:** This is a foundational architectural change to ensure runs degrade gracefully instead of crashing, signaling a shift from "fail fast" to "fail soft" for production reliability.
- **Slack Least-Privilege & Durable Bindings (#5669, #5670, #5693):** A 3-PR stack by `BenKurrek` tackling slack tool security and state durability. **Analysis:** The high activity on Slack tooling suggests growing demand for enterprise Slack integration where OAuth scoping and conversation persistence are blockers.

## 5. Bugs & Stability (Ranked by Severity)

### Critical (User-Blocking)
- **Routine fails with generic errors (#5703 - P2):** Users see "invalid internal instruction" instead of root cause. *Fix PR:* No direct fix yet, but part of the broader #5692 recoverability PR.
- **GitHub API 403 errors (#5702 - P2):** Issue search/create capabilities return HTTP 403 despite integration being configured. *Fix PR:* Likely requires a platform/integration fix; no specific PR linked.
- **Approval notifications disappear (#5553 - P2):** Notifications flash and vanish, preventing user approval of network capabilities. *Fix PR:* None yet; issue remains open.

### High (Functional Impairment)
- **Console/UI Regressions (#5701, #5708, #5707):** Activity panel hides tool details; error banners float outside chat stream; routine creation leaks internal implementation details (cron syntax, raw IDs).
- **Mobile chat horizontal overflow (#5554 - P2):** Long text causes page-level horizontal scroll on mobile. *Fix PR:* **Merged** today via #5682.
- **Bad failure UX (#5507 - P2, CLOSED):** Failed runs show "No thread attached," blocking debugging. *Fix PR:* Was closed today, indicating a fix has been merged or verified.

### Moderate (Inconvenience)
- **UI Polish (#5705, #5704, #5706 - P3):** Terminal icon has no disable option; image previews turn transparent during processing; sidebar shows raw thread IDs under load.
- **Logs deep link broken (#5557 - P3):** Requires two clicks to load selected conversation.

## 6. Feature Requests & Roadmap Signals
- **Trace Commons (PR #5280):** A massive PR (XL, DB Migration) adding instance-wide enrollment and per-user trace inspection. This is likely a next-major-version feature for debugging and auditability.
- **HST Postgres Latency Parity (PRs #5689-#5691):** This 4-part stack adds row-store turn state and latency evidence harnesses. Expect this to land soon, significantly improving performance for hosted/single-tenant users.
- **Durable Slack Bindings (#5693):** The final piece of the Slack remodel ensures conversation bindings survive restarts, signaling a push toward production-grade messaging integrations.

## 7. User Feedback Summary
- **Pain Point: Silent Failures.** Users are frustrated when operations fail silently. The *Tool permission save fails* (#5698) and *Error banners outside chat* (#5708) issues both highlight a UI that doesn't provide clear, in-band notification of errors.
- **Pain Point: Debugging Opacity.** The *Routine fails with generic errors* (#5703) and *Activity panel hides details* (#5701) issues show that users are unable to self-diagnose problems, forcing them to rely on support.
- **Pain Point: Security & Privacy.** The *Slack least-privilege* (#5669) and *Routine creation leaks implementation details* (#5707) issues indicate growing sensitivity to overprivileged integrations and data exposure.
- **Satisfaction Signals:** The rapid closure of the NEAR SSO (#4284) and the *mobile overflow* fix (#5682) suggest the team is responsive to community-reported bugs.

## 8. Backlog Watch
- **Nightly E2E Failure (#4108):** Opened 2026-05-27 (40 days ago). This bot-reported failure has zero maintainer comments and affects the "web-regressions" pipeline. **Risk:** High. If unaddressed, it indicates a regression gap that could mask future breaking changes.
- **Design System / Playground (PR #5563):** A new contributor PR (XL, risk: low) from `achalvs` opened on 2026-07-02. While it has been updated recently, it carries no reviews or comments. This represents a significant design investment that may be stalled awaiting maintainer buy-in.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-06

## Today's Overview

Today marks an exceptionally high-activity day for LobsterAI, with 12 pull requests merged or closed and 1 open PR continuing from earlier work. No new issues were filed in the last 24 hours, suggesting the team is deeply engaged in feature completion and stabilization rather than triaging new bug reports. The development velocity is strong across multiple areas: the OpenClaw agent engine, Cowork collaboration features, MCP tool integration, provider ecosystem (xAI/Grok OAuth), email skill enhancements, and UI polish. The single open PR (#1277) is a long-standing dependency update that remains unresolved after three months, which is a notable exception to today's otherwise rapid closure cadence. Overall, project health appears robust with systematic attention to both new features and regression fixes.

## Releases

No new releases were published today. The last release remains undetermined from this snapshot.

## Project Progress

The following 12 pull requests were merged or closed today:

- **#2283** (CLOSED, fisherdaddy) — **UI optimization across skill, MCP, memory, and mail panels**. This broad UI chore improves consistency and user experience across four key interface areas.
- **#2256** (CLOSED, tsonglew) — **Two critical fixes**: scheduled-task notification channel "不通知" (no notification) was not persisting after save, and a white screen crash when deleting an active chat model. Both are now resolved.
- **#2282** (CLOSED, fisherdaddy) — Appears to be a re-application or backport of PR #2256 fixes, likely for a different branch or release stream.
- **#2281** (CLOSED, liuzhq1986) — **Cowork stability fix**: prevents stale final sync from restarting context maintenance after chat errors, with regression coverage for timeout races.
- **#2280** (CLOSED, fisherdaddy) — **Heartbeat cost-control policy**: adds managed heartbeat policy prompt, removes proactive-heartbeat guidance from bundled agent templates, and repairs legacy HEARTBEAT.md files.
- **#2279** (CLOSED, btc69m979y-dotcom) — **Plugin sync fix**: hides the bundled xAI provider plugin from user plugin sync to avoid duplication or configuration conflicts.
- **#2278** (CLOSED, btc69m979y-dotcom) — **Heartbeat toggle setting**: adds a Settings > Agent Engine toggle for OpenClaw heartbeat (enabled by default), persisting preference through Cowork config.
- **#2277** (CLOSED, btc69m979y-dotcom) — **MCP config fix**: normalizes MCP server config to clear stale transport config (headers/env/args) when editing or switching transport types.
- **#2276** (CLOSED, fisherdaddy) — **xAI/Grok OAuth login**: implements browser PKCE login against auth.x.ai with device-code fallback, integrates into OpenClaw auth-profiles store, and registers xAI as a selectable provider.
- **#2275** (CLOSED, liuzhq1986) — **Email skill overhaul**: adds multi-account support, email account management UI (enable/disable, default account, provider presets, connectivity testing), while preserving legacy single-account compatibility.
- **#2274** (CLOSED, fisherdaddy) — **Cowork home screen enhancement**: adds time-aware greeting, recent tasks for one-click resume, and improved hover/focus feedback on quick actions.
- **#2273** (CLOSED, fisherdaddy, yesterday) — **Scheduled task list redesign**: card-based UI with status chips, toggle, search, and optimistic UI feedback.

## Community Hot Topics

There are no issues with substantial comment threads in this snapshot—no issues were created or updated in the last 24 hours. The only open PR receiving attention is:

- **#1277** (OPEN, dependabot[bot]) — *chore(deps-dev): bump the electron group across 1 directory with 2 updates* — This PR has been open since **2026-04-02** (over 3 months) and is still pending review/merge. It proposes upgrading Electron from 40.2.1 to 43.0.0 and electron-builder. The lack of maintainer action on a routine dependency bump suggests either blocking concerns (breaking changes in the major version jump) or insufficient review bandwidth. **[Link](https://github.com/netease-youdao/LobsterAI/pull/1277)**

## Bugs & Stability

No new bugs were reported today. However, two significant bugs were *fixed* in PR #2256 (merged today):

| Bug | Severity | Fix Status |
|-----|----------|------------|
| Scheduled task "不通知" (no notification) channel not persisting after save | **High** — feature non-functional | ✅ Fixed in #2256 |
| White screen crash when deleting active chat model | **Critical** — renders app unusable | ✅ Fixed in #2256 |

Additionally, PR #2281 fixed a subtle cow worker race condition where stale final syncs could incorrectly restart context maintenance after chat errors. This was a concurrency/stability concern, not a crash, but could lead to inconsistent agent behavior.

## Feature Requests & Roadmap Signals

Today's merged PRs strongly signal the following roadmap priorities:

1. **xAI/Grok provider integration** (#2276) — Full OAuth support with device-code fallback makes LobsterAI compatible with Grok models. Expect this in the next release.
2. **Heartbeat cost control** (#2278, #2280) — The team is actively managing model call costs by adding user-configurable heartbeat toggles and policy prompts. This addresses feedback about unexpected API costs.
3. **Multi-account email** (#2275) — Enterprise/workflow users needing multiple email accounts will benefit from the new management UI. The legacy compatibility path suggests cautious rollout.
4. **Cowork home screen personalization** (#2274) — Time-aware greetings and recent tasks improve daily user engagement. This is a UX polish feature likely targeted at retention.
5. **MCP config normalization** (#2277) — Stale transport config cleanup reduces configuration errors for MCP tool users.

None of these appear to be user-requested features in the traditional sense; they are developer-driven improvements. The pattern suggests an upcoming minor release with new provider support, cost controls, and UX refinements.

## User Feedback Summary

No new user feedback (issues, comments, reactions) was captured today. Based on the PR descriptions, the following pain points were addressed:

- **Unexpected API costs**: The heartbeat cost-control policy and toggle (#2278, #2280) directly address user complaints about model calls occurring even when HEARTBEAT.md was empty or missing.
- **Configuration confusion**: MCP stale transport config issues (#2277) and plugin sync duplication (#2279) were likely causing user frustration with setup.
- **Email workflow limitations**: Single-account email skill was insufficient for power users; multi-account support (#2275) addresses a clear scalability need.
- **White screen crashes**: The fix in #2256 for deleting active chat models addresses a severe stability issue.
- **Task notification failures**: The "不通知" not persisting fix (#2256) addresses a broken feature in scheduled tasks.

Satisfaction signals are indirect: no new bug reports suggest stable behavior after recent fixes, and the rapid PR closure rate indicates strong engineering momentum.

## Backlog Watch

The sole item requiring maintainer attention:

- **PR #1277** (dependabot[bot], opened 2026-04-02) — *Bump electron from 40.2.1 to 43.0.0 and electron-builder* — **3+ months open**. This is a cross-cutting dependency update that likely requires careful testing due to the major version jump (40→43). The prolonged stalling could block other features or security patches. The team should either merge and test, or explicitly close with reasoning. **[Link](https://github.com/netease-youdao/LobsterAI/pull/1277)**

No other issues or PRs in this snapshot show signs of neglect—today's 12 PRs were all processed within hours or days, indicating active triage.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-06

## Today's Overview
The Moltis project shows low activity today with no new issues or releases, but a burst of PR merge/closure activity (3 PRs closed/merged out of 5 updated). Two open PRs remain—one bugfix and one routine dependency bump—indicating maintainers are clearing the queue. The project appears in a post-feature stabilization phase, with the WhatsApp LID migration now merged and a Telegram streaming hotfix closed. No critical regressions emerged, but the absence of new community discussion suggests a temporary lull in user engagement.

## Releases
No new releases were published today. The latest stable release is the prior version (not specified in this snapshot).

## Project Progress
Three pull requests were merged or closed today, advancing fixes and dependency hygiene:

- **#1122** (CLOSED) — **fix: drop VOLUME declarations that shadow the home bind mount**  
  Author: sayotte | [PR #1122](https://github.com/moltis-org/moltis/pull/1122)  
  Fixes a deployment bug where Docker `VOLUME` declarations prevented bind-mount overrides for the home directory. This resolves a pathological case affecting users who mount `./moltis-home:/home/moltis`.

- **#1113** (CLOSED) — **hotfix(telegram): stream final replies without completion notify**  
  Author: s-salamatov | [PR #1113](https://github.com/moltis-org/moltis/pull/1113)  
  Fixes an edge case where Telegram's edit-in-place streaming failed to deliver the final answer when completion notifications were disabled. Restores expected streaming behavior introduced in #1099.

- **#1144** (CLOSED) — **feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6 with LID-native addressing**  
  Author: juanlotito | [PR #1144](https://github.com/moltis-org/moltis/pull/1144)  
  Major WhatsApp integration update: upgrades `whatsapp-rust` from v0.5 to v0.6, enabling LID (Long-term Identity) addressing. Fixes outbound DM failures after WhatsApp's peer migration to LID, and ensures inbound messages with LID numbers are not lost. Pinned to a merge commit of the upstream LID-migration gate.

## Community Hot Topics
No issues or PRs received comments or reactions in the last 24 hours, and no new issues were filed. The most substantial ongoing discussion may be on the open PR #1120 (MCP OAuth fix), but it has not seen new engagement today.

## Bugs & Stability
No new bugs, crashes, or regressions were reported today. The two closed PRs (#1122, #1113) address pre-existing bugs that could have caused runtime issues:

- **Docker VOLUME shadowing (PR #1122)** — Medium severity: prevented bind-mount overrides for home directory in Docker deployments, potentially confusing users with conflicting file locations. Now fixed.
- **Telegram streaming missing final reply (PR #1113)** — Low severity: affected users who enabled streaming but disabled completion notifications. Core functionality now restored.

No open bug reports remain on the issue tracker.

## Feature Requests & Roadmap Signals
No feature requests were filed today. The merging of WhatsApp LID-native addressing (PR #1144) signals the team is prioritizing cross-platform messaging parity. A likely next target is stabilizing the MCP OAuth flow, given that fix (PR #1120) remains open. No new roadmap signals emerged from today's activity.

## User Feedback Summary
No explicit user feedback was captured in the last 24 hours. The closed fixes address two silent pain points: Docker deployment confusion (home directory shadowing) and Telegram streaming inconsistency. The WhatsApp LID migration was likely a user-facing blocker that is now resolved, suggesting satisfaction among WhatsApp users.

## Backlog Watch
- **PR #1087** (OPEN, updated 2026-07-06) — **[dependencies, rust] chore(deps): bump tar from 0.4.45 to 0.4.46**  
  Author: dependabot[bot] | [PR #1087](https://github.com/moltis-org/moltis/pull/1087)  
  A routine dependency bump that has been open since May 29, 2026 (38 days). While low-risk, failing to merge this could accumulate security or compatibility debt. Needs maintainer review/merge.

- **PR #1120** (OPEN, updated 2026-07-06) — **fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate**  
  Author: xzavrel | [PR #1120](https://github.com/moltis-org/moltis/pull/1120)  
  This MCP OAuth fix for Notion/Linear has been open for 23 days. It addresses a functional regression (#1119) and likely affects users integrating with those services. Recommended for prioritization in the next release cycle.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for **CoPaw** (GitHub: `agentscope-ai/CoPaw`) based on the provided data for **2026-07-06**.

---

## CoPaw Project Digest | 2026-07-06

### 1. Today’s Overview
Project activity remains very **high**, with **33** issues and **49** pull requests updated in the last 24 hours. A new patch release (`v1.1.12.post3`) was cut to address a critical compatibility regression with the Agent Communication Protocol (ACP). The community is heavily engaged in reporting bugs across v1.x and v2.0 beta, with significant focus on memory systems, context compression, and console frontend performance. The project is currently processing a high volume of contributions, with **24 open PRs** under review and a notable influx of unit test contributions.

### 2. Releases
- **New Release: v1.1.12.post3** — A patch release for the 1.1.x line.
  - **Change:** Pinned the `agent-client-protocol` (ACP) dependency to `>=0.9.0,<0.11.0` to resolve a breaking import error (`SetSessionModelResponse`) in newer ACP versions that caused QwenPaw 1.x to fail at startup.
  - **Note:** Users on the `1.x` stable branch are strongly encouraged to upgrade to this version. Users on `v2.0.0` branches are not affected by this specific issue.
  - **PR:** [v1.1.12.post3 release PR (#5818)](https://github.com/agentscope-ai/QwenPaw/pull/5818)

### 3. Project Progress (Merged/Closed PRs Today)
**25** PRs were merged or closed in the last 24 hours. Key advances include:

- **Core/Backend:**
    - **CI Automation:** A new AI code review bot was merged ([PR #5736](https://github.com/agentscope-ai/QwenPaw/pull/5736)) to automate PR analysis using QwenPaw itself.
    - **DingTalk Channel:** A critical fix for DingTalk delivery failures was merged, preventing silent failures and empty notifications ([PR #5654](https://github.com/agentscope-ai/QwenPaw/pull/5654)).
    - **Tool Registration:** A PR to register `spawn_subagent` as a standard tool in the Runtime 2.0 discovery system was closed ([PR #5524](https://github.com/agentscope-ai/QwenPaw/pull/5524)).
- **Console (Frontend):**
    - **Security:** The plugin market details link now routes through the console's secure external-link guard ([PR #5750](https://github.com/agentscope-ai/QwenPaw/pull/5750)).
    - **Timezone Fix:** A bug causing naive datetime strings in memory file listings was fixed by explicitly passing `timezone.utc` ([PR #5768](https://github.com/agentscope-ai/QwenPaw/pull/5768)).
- **Testing:** A significant push for testing is underway with three new PRs adding unit tests for the `inbox` module, Console API modules, and React hooks ([PR #5809](https://github.com/agentscope-ai/QwenPaw/pull/5809), [PR #5807](https://github.com/agentscope-ai/QwenPaw/pull/5807), [PR #5808](https://github.com/agentscope-ai/QwenPaw/pull/5808)).

### 4. Community Hot Topics
- **[Issue #5757]: [Bug] Feishu (飞书) messages not being replied to** — The most active issue today (11 comments). Users running Docker images report that after the first interaction, Feishu bots stop responding entirely. This suggests a state management issue in the Feishu channel handler.
- **[Issue #5401]: Console crash with large tool-use history** — A critical frontend bug (8 comments) where the Console white-screens when opening sessions with many tool calls. The root cause is a mismatch between backend data types and frontend rendering components.
- **[Issue #5782]: Google Gemini embedding compatibility** — Closed quickly (3 comments), highlighting the team's responsiveness. This was a silent failure where `index=None` from the OpenAI-compatible endpoint disabled vector search without user warning.
- **[PR #5669]: Memory re-ranking** — A first-time contributor is working on wrapping ReMe search results with `qwen3-rerank`, signaling strong community interest in improving memory recall precision. This is being tracked alongside a similar effort from another contributor ([PR #5692](https://github.com/agentscope-ai/QwenPaw/pull/5692)).

### 5. Bugs & Stability
Several high-severity bugs were reported today.

| Severity | Issue | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **High** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | Feishu (飞书) channel stops replying after first message. | Looking for maintainer input |
| **High** | [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775) | Auto-memory intervals never trigger in v2.0.0b3 because state is lost on agent rebuild. | Looking for maintainer input |
| **Medium** | [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) | Context compression crashes when `next_steps` exceeds JSON Schema `maxLength`. | Looking for maintainer input |
| **Medium** | [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | Debug logs in `model_factory.py` are using `WARNING` level, causing log flooding. | Open |
| **Medium** | [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | Loading animation does not clear after an Agent finishes its response. | Open |
| **Low-Medium** | [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) | Frontend displays wrong compression threshold for models with same name but different providers. | Open |

### 6. Feature Requests & Roadmap Signals
- **Memory System Improvements:** Multiple requests point to memory as a key area for v2.0. The addition of a reranker ([PR #5669](https://github.com/agentscope-ai/QwenPaw/pull/5669)) and recency-aware ranking ([Issue #5316](https://github.com/agentscope-ai/QwenPaw/issues/5316) — closed) are likely candidates for the next minor release.
- **Multi-User Management:** Issue [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) explicitly requests a team/multi-user account system to replace the current single-bot auth model. This is a significant architectural request that could shape a future v2.x feature.
- **User Interface Customization:**
    - **Cron Job Notifications:** Users are demanding a toggle to control popup notifications for cron job results ([Issue #5797](https://github.com/agentscope-ai/QwenPaw/issues/5797)).
    - **Timestamps:** A request to make message timestamps permanently visible (not just on hover) is gaining traction ([Issue #5793](https://github.com/agentscope-ai/QwenPaw/issues/5793)).
- **New Channel:** A user is requesting official support for **Zalo Bot**, the dominant messaging platform in Vietnam ([Issue #5168](https://github.com/agentscope-ai/QwenPaw/issues/5168)).

### 7. User Feedback Summary
- **Pain Points (High Volume):**
    - **Reliability:** Users on v1.1.x are frustrated with channel-specific failures (Feishu, DingTalk) where bots go silent after initial messages.
    - **Performance:** Console streaming output causes significant browser lag, particularly on long or complex tool-call sessions, hindering the user experience for power users.
    - **Configuration Confusion:** Bugs like the provider matching issue ([#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784)) show that multi-provider configuration is a source of user confusion.
- **Satisfaction Signals:**
    - The team’s quick fix for the ACP compatibility issue (released today as `v1.1.12.post3`) demonstrates responsiveness to critical regressions.
    - The community is actively contributing features (memory re-ranking, cron updates) and testing infrastructure (unit tests), indicating a healthy and invested user/developer base.

### 8. Backlog Watch
- **Issue #5273: v2.0.0 Pre-release Bug Tracker** — This is the central tracker for the next major version and has been open since June 17. It currently has 5 comments but no official response from the core team on the status of the beta or roadmap to GA. The community is asking for a status update.
- **Issue #5567: GitHub Issue Feedback Skill** — This user-created tool to help format bug reports on GitHub is getting positive reactions (👍2). It’s a community-driven quality-of-life improvement that the core team could consider integrating or promoting to standardize incoming bug reports.
- **PR #5210: `cron update` CLI Command** — This first-time contributor PR has been "Under Review" since June 15. While the backend supports updating cron jobs, the CLI lacks it. This appears stuck, and a maintainer decision (merge, request changes, or close) is overdue.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-06

## Today's Overview

ZeroClaw is undergoing sustained high-velocity development, with 43 issues and 50 PRs updated in the last 24 hours. The project is actively shipping toward **v0.8.3** and **v0.9.0** milestones, with major feature work landing across SOP (Standard Operating Procedures), goal-mode, Git forge channels, and the zerocode TUI. Activity is centered on two large feature trains—SOP visual authoring (PR #8590, size:XL) and goal-mode implementation (PRs #8689, #8688, size:XL)—alongside a steady stream of bug fixes and security hardening. Three issues and 11 PRs were closed/merged today. No new releases were published.

- **Open Issues:** 40 | **Closed Issues Today:** 3
- **Open PRs:** 39 | **Merged/Closed PRs Today:** 11
- **Key Trackers:** v0.8.3 (6 child trackers), v0.9.0 (auth/security/gateway tracker)

---

## Releases

No releases were published today.

---

## Project Progress

Today's merged/closed PRs advanced several significant feature areas:

**New Features Landed:**
- **[#8525](https://github.com/zeroclaw-labs/zeroclaw/pull/8525)** (merged) — `feat(delegate): await background sessions` — Adds `action="await_sessions"` to the delegate tool, enabling callers to wait on multiple background delegate result files in a single tool call. This closes a long-standing usability gap for orchestrators.
- **[#8618](https://github.com/zeroclaw-labs/zeroclaw/pull/8618)** (merged) — `docs(channels): add Git channel + SOP fan-in pages` — Comprehensive documentation landing for new Git forge channel and SOP routing capabilities.
- **[#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611)** (merged) — `feat(channels): add Gitea/Forgejo provider for the Git forge channel` — Extends Git forge channel provider support beyond GitHub.
- **[#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609)** (merged) — `feat(channels): add Git forge channel (GitHub provider) with SOP ingress` — New channel integration allowing agent interaction through GitHub/Git forge webhooks, with SOP-powered workflow ingress.
- **[#7882](https://github.com/zeroclaw-labs/zeroclaw/issues/7882)** (closed) — Closed issue tracking the `await_sessions` feature, now delivered.

**Current Open PRs (size:XL) Still In Flight:**
- [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) — SOP visual authoring with channel fan-in (beta testers called)
- [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) — zerocode Code pane consolidation
- [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) — Goal command admission across channels
- [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) — Goal delegation boundaries and trusted tools
- [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) — Schema V4 config breaking cut (first slice)

---

## Community Hot Topics

**Most Active Issues (by comment count):**

1. [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (13 comments) — *RFC: Work Lanes, Board Automation, and Label Cleanup* — Governance RFC improving how work items are categorized and routed. Rev. 11, rollout in progress. **Analysis:** This reflects growing project maturity as scale demands better triage tooling.

2. [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) (8 comments) — *[Tracker]: Goal mode implementation split stack* — Coordinates splitting the goal-mode feature into reviewable PRs. **Analysis:** Goal-mode is the hottest active feature area; this tracker is the coordination point for its production delivery.

3. [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (5 comments) — *RFC: Pluggable security enforcement provider interface* — Architecture RFC for v0.9.0 security overhaul. **Analysis:** Security architecture is drawing sustained engagement as the project hardens for production deployments.

**Most Active PRs (by content):**
- [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) — SOP visual authoring (beta tester call) — The largest PR in flight, touching every major subsystem. Calls community testers for SOP workflows.

**Underlying Needs:** The community is actively driving toward three capabilities: (1) deterministic SOP-based workflows for enterprise use cases, (2) goal-mode for longer-running agent tasks, and (3) Git forge integration for developer-first agent deployment patterns.

---

## Bugs & Stability

**New Bugs Reported Today (2026-07-06):**

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#8762](https://github.com/zeroclaw-labs/zeroclaw/issues/8762) | Anthropic provider uses a fixed 120s timeout for long turns | S2 - degraded behavior | None yet |
| [#8760](https://github.com/zeroclaw-labs/zeroclaw/issues/8760) | Daemon-owned agent output leaks into daemon stdout (zerocode) | S2 - degraded behavior | None yet |

**Bugs Reported Previously, Still Open (updated today):**

| Issue | Title | Severity | Priority |
|-------|-------|----------|----------|
| [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) | `advance_step` bypasses approval gates via `sop_advance` | S2 - approval integrity | **p1** — Fix PR [#8747](https://github.com/zeroclaw-labs/zeroclaw/pull/8747) submitted |
| [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) | `zeroclaw config init` ships template rejected by daemon (local_whisper) | S2 - silent transcription break | **p1** — No fix PR yet |
| [#7872](https://github.com/zeroclaw-labs/zeroclaw/issues/7872) | QQ group replies rejected without `msg_id` | S2 - channel broken | **p1** — No fix PR yet |

**Security Fixes In Flight:**
- [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — SSRF gate fix: `file_download` tool lacked host classifier on operator-configured URLs (closes third SSRF surface from internal security audit)
- [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) — Deferred-MCP access policy consolidation (security hardening)

**Testing Fixes:**
- [#8756](https://github.com/zeroclaw-labs/zeroclaw/pull/8756) — Makes media marker assertions portable on Windows (fixes CI breakage)
- [#8747](https://github.com/zeroclaw-labs/zeroclaw/pull/8747) — Fixes the SOP `advance_step` approval-gate bypass (#8678)

---

## Feature Requests & Roadmap Signals

**New Feature Requests from Today:**
- [#8719](https://github.com/zeroclaw-labs/zeroclaw/issues/8719) — **SOP routing improvement**: A false `when` condition should advance to the next step rather than ending the run. Enables multi-phase SOPs with loops followed by finalize steps. **Likely next version:** Yes — directly relates to active SOP development in v0.8.3.

**Active Design RFCs Requiring Maintainer Attention:**
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Active RFC review queue tracker (maintainer attention needed for open RFCs)
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — RFC: OpenAI Chat Completions compatibility adapter. **Status:** needs-maintainer-review

**Roadmap Predictions:**
- **v0.8.3 (current milestone):** WASM plugin program, SOP authoring, goal-mode split, Discord channel parity, provider serialization fixes
- **v0.9.0 (next major):** Pluggable security enforcement (#7142), auth/gateway hardening (#7432), OpenAI API compatibility adapter (#8603)

---

## User Feedback Summary

**Pain Points (from open issues):**
1. **Bedrock Nova caching errors** (#8720) — User cannot disable cachePoint for Bedrock model via config file, causing random failures. Seeking a simple configuration toggle.
2. **Config template rejection** (#8718) — Fresh installs have silently broken voice transcription because the shipped config template is rejected by the daemon. This creates a poor onboarding experience.
3. **Anthropic timeout failures** (#8762) — Long document-synthesis tasks fail after ~120 seconds due to fixed total timeout, even when work is progressing.
4. **SOP routing confusion** (#8719) — Users building multi-phase SOPs find that false `when` conditions terminate runs instead of advancing, preventing loop-finalize patterns.

**Satisfaction Signals:**
- High engagement with SOP visual authoring beta (PR #8590) suggests strong interest in deterministic workflow tooling
- Goal-mode implementation (#8681) has multiple contributors actively splitting and reviewing feature PRs, indicating healthy collaborative velocity
- Security audit finding response is swift — SSRF fix PRs submitted within 3 days of internal audit

---

## Backlog Watch

**Issues Needing Maintainer Attention:**
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (Jul 2) — *RFC: OpenAI Chat Completions compatibility adapter* — Labeled `needs-maintainer-review` for 4 days. This is a high-impact feature request that could unlock many third-party integrations.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) (Jul 4) — *Active RFC review queue* — Tracker itself requires maintainer engagement to unblock stalled design decisions.

**Long-Standing Accepted Issues (risk:high, no PR yet):**
- [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) (Jul 4, p1) — Config init template bug — **Silent degradation for fresh installs.** No PR after 2 days.
- [#7872](https://github.com/zeroclaw-labs/zeroclaw/issues/7872) (Jun 17, p1) — QQ channel broken — **No PR after 19 days.** Denies Telegram's competitive channel coverage.

**Stalled Trackers (risk:high, updated but inactive):**
- [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) (Jun 6) — v0.8.3 WASM plugin program — Status: accepted, no active PRs. This was a headline feature for v0.8.3 and may need schedule reassessment.
- [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) (Jun 26) — zerorelay NAT relay milestone — No active PRs for the relay implementation itself.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*