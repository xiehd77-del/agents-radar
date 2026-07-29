# OpenClaw Ecosystem Digest 2026-07-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-29 02:46 UTC

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

Here is the OpenClaw project digest for **2026-07-29**.

---

### 1. Today's Overview

OpenClaw is in a highly active maintenance and stabilization phase, with **500 issues and 500 PRs** updated in the last 24 hours. While the project released a new beta (v2026.7.2-beta.5) focused on data safety and recovery, the community is experiencing significant turbulence from regressions introduced in recent versions. The issue tracker is dominated by **session-state corruption, memory leaks, and LLM provider compatibility problems**, indicating that while new features are being built, the underlying stability of the gateway and agent execution loops requires immediate attention. The volume of `P0` and `P1` critical bugs suggests the project is under strain to deliver a stable release.

### 2. Releases

A new beta release, **v2026.7.2-beta.5**, was published today. The primary highlights focus on **state safety and recovery**:
- **Quarantine Store:** Protects persisted data in the event of primary database damage.
- **Crash-Recoverable SQLite Snapshots:** Improves resilience for session state.
- **Crash-Durable Filesystem Publication:** Reduces risk of data loss during write operations.
- **Schema-Upgrade Data-Loss Rejection:** Prevents data loss during migrations.
- **Rollback-Writer Snapshot Recovery:** Provides a path to recover from failed writes.

This release appears to be a direct response to the ongoing issues with session corruption and crash loops (#91588, #113434). No breaking changes or specific migration notes were released.

### 3. Project Progress (Merged/Closed PRs & Features)

The maintainers were highly productive, closing 268 PRs today. Key advancements include:

- **Agent Execution & Stability:**
    - `#114500` / `#114531`: Fixed `NO_REPLY` sentinel leaks in auto-reply and added a core fallback for empty model completions, addressing silent reply failures (#103735).
    - `#114514`: Consolidated recovery and send fixtures in the gateway test suite, improving maintainability.
    - `#114652`: Prevented Windows shell startup from bypassing automatic execution review, closing a security hole.
    - `#114607` / `#114581` / `#114562`: Restored various prerelease validation gates and fixed integration test contracts.
- **LLM Provider & Schema Fixes:**
    - `#108469`: Fixed the `cron` tool schema to be compatible with `llama.cpp`'s grammar-constrained tool calling, a major regression for local model users.
    - `#114582`: Fixed several local model provider issues (LM Studio retries, Ollama discovery, credential boundaries).
- **Infrastructure & Config:**
    - `#111491`: Added validation to prevent configuring gateway ports outside the valid TCP range.
    - `#114476`: Reused gateway lifecycle metadata and isolated plugin state to prevent configuration pollution between agents.

### 4. Community Hot Topics

The most active discussions reveal deep-seated concerns about **data integrity, security, and cross-platform support**.

- **#75 - [OPEN] Linux/Windows Clawdbot Apps** (115 comments, 80 👍): The single most requested feature. This is a clear signal that the community is tired of being limited to macOS/iOS for full-featured agents. The underlying need is for *platform parity* and a *native experience*.
- **#7707 - [OPEN] Feature Request: Memory Trust Tagging by Source** (23 comments): A highly intelligent proposal to tag memories by trust level (user vs. web scrape). This addresses a growing fear of *memory poisoning* and *prompt injection attacks*, showing users are thinking about security at the system architecture level.
- **#91588 - [OPEN] Critical: Gateway Memory Leak** (20 comments, 👍 1): A `P0` "platinum hermit" issue with a severe memory leak from 350MB to 15.5GB. Users are reporting daily OOM crashes that render the gateway useless. This is a **top stability issue**.
- **#96857 - [CLOSED] Normal tool text outputs degrade** (15 comments, 4 👍): A frustrating UX bug where text outputs are replaced by `(see attached image)` placeholders, making the agent "blind." The community's relief at this being closed is palpable.

### 5. Bugs & Stability

Stability is the project's biggest challenge today, with several critical and high-priority regressions.

- **P0 (Critical):**
    - **#91588 - Gateway Memory Leak (RSS growth 350MB -> 15.5GB):** The most severe bug. The fix is likely being tracked in refactoring PRs like `#114515`, but a direct fix is not yet merged.
- **P1 (High Priority):**
    - **#115326 - Crash-loop breaker permanently suppresses Discord/WhatsApp:** A regression where the safety mechanism becomes a permanent block with a broken recovery path. No fix PR linked.
    - **#108075 - LLM request failed (regression in 2026.7.1):** A generic but widespread provider rejection that blocks agent replies.
    - **#113434 - Codex RAM exhaustion (2026.7.2-beta.4):** A beta-specific bug where session management can exhaust RAM, making the gateway crash.
    - **#108580 - cron tool schema incompatible with llama.cpp (regression):** **Fix PR is open** (#108469), which is being actively reviewed.
    - **#98790 - Session tree fork leads to permanent corruption:** A complex issue where concurrent agent turns corrupt transcripts irreparably.
    - **#102268 - Silent empty tool results:** A hard-to-debug issue in long-running Sonnet 5 sessions.
- **P2 (Medium):**
    - **#115001 - Hybrid memory search returns spurious 1.0 similarity scores:** A data quality bug affecting agent recall.
    - **#10687 - Dynamic model discovery needed:** Lack of real-time model lists is a regression in user experience for OpenRouter users.
    - **#74378 - CLI processes remain alive on Windows:** A platform-specific stability issue.

### 6. Feature Requests & Roadmap Signals

The roadmap appears to be pivoting toward **security hardening and platform expansion**.

- **Likely in Next Version:**
    - **Memory Trust Tagging (#7707) and Masked Secrets (#10659):** With the recent focus on security (permit/deny lists, sandboxing), these two features are the logical next step. They address the #1 unspoken fear: *"My agent will betray me."*
    - **Linux/Windows Clawdbot Apps (#75):** This remains the top community ask. The silence on this suggests it requires a major engineering push, but its demand is undeniable.
- **Predicted for Future Roadmap:**
    - **Mid-stream message injection/soft steer (#10960):** A power-user feature for real-time control of agents.
    - **Filesystem Sandboxing (#7722):** Following the auto-review and denylist PRs, absolute filesystem sandboxing is the ultimate goal for security.
    - **Azure Foundry GPT Realtime Talk (#87325):** Indicates growing enterprise interest.

### 7. User Feedback Summary

The community's sentiment is a mix of **deep appreciation for the project's potential** and **frustration with its fragility**.

- **Pain Points:**
    - **"It worked before, now it's broken."** This is the single most common phrase, indicating a lack of regression testing before releases. Users feel like beta testers.
    - **"My data and sessions are unreliable."** The constant battle with crash loops, memory leaks, and transcript corruption is eroding trust.
    - **"I can't run it on my preferred OS."** The absence of native Windows/Linux apps is a major barrier to adoption, leaving many users feeling like second-class citizens.
- **Use Cases:**
    - Users are heavily invested in **Telegram/WhatsApp integration** for family, business, and Home Assistant control (#73537).
    - **Software development** via `sessions_send` and multi-agent setups is a common advanced use case (#98790).
- **Satisfaction:**
    - When it works, users like `Reneb-cafe` (#73537) report it has "genuinely become part of our daily workflow."
    - The core idea of a secure, personal AI agent is **highly valued**, but the execution (especially security boundaries and data integrity) is seen as incomplete.

### 8. Backlog Watch

Several high-impact issues remain unresolved for extended periods, risking user churn.

- **#10687 - Dynamic Model Discovery (P2, Open since Feb 2026):** This is a massive UX regression for users of providers like OpenRouter (which change models weekly). The "static" model list is a constant source of friction. **Needs maintainer decision.**
- **#8299 - Suppress sub-agent announce (P2, Open since Feb 2026):** A highly requested UX improvement for multi-agent setups. The current workaround (ANNOUNCE_SKIP) is unreliable.
- **#9986 - Trigger fallback on context length exceeded (P2, Open since Feb 2025):** A critical resilience feature. Currently, hitting the context window is a hard error instead of a graceful fallback. **Needs product decision.**
- **#7722 - Filesystem Sandboxing (P2, Open since Feb 2026):** This is a fundamental security feature. The related PR (#114652) only fixes a *bypass*, not the lack of the feature itself. **Needs security review & product decision.**

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-29 | **Prepared by:** Senior Analyst, AI Agent & Personal AI Assistant Ecosystem

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing a **fragmented maturation phase**, characterized by high-velocity development across multiple competing architectures, but with significant stability regressions exposing the tension between feature velocity and production readiness. While the ecosystem's core value proposition—secure, autonomous, multi-platform AI agents—remains highly attractive to developers and power users, **data integrity, session reliability, and cross-platform support** have emerged as universal pain points. Projects are converging on multi-provider routing, memory security, and plugin-based extensibility, but diverging sharply on execution models (WASM plugins vs. native runtime vs. gateway architecture) and target deployment profiles (desktop-first vs. server/headless). The landscape is marked by **strong community engagement but fragile releases**, with several projects suffering from maintainer bottlenecks and regression-heavy release cycles.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Release Status | Health Score |
|---------|---------------------|-------------------|------------------------|----------------|--------------|
| **OpenClaw** | 500 | 500 | 268 | v2026.7.2-beta.5 (beta) | ⚠️ **Fragile** — High output but P0/P1 regressions |
| **NanoBot** | 7 | 40 | 21 | No new release | ✅ **Active** — Strong fix velocity, moderate bugs |
| **Hermes Agent** | 50 | 50 | 7 | No new release | ⚠️ **Strained** — CI broken on `main`, high bug count |
| **PicoClaw** | 4 | 10 | 3 | No new release | ✅ **Stable** — Balanced fixes, low bug load |
| **NanoClaw** | 1 | 10 | 4 | No new release | ✅ **Healthy** — Targeted fixes, production-tested feature |
| **ZeroClaw** | 49 | 50 | 0 | v0.8.3 (latest) | 🔴 **Bottlenecked** — 50 PRs open, 0 merged today |
| **IronClaw** | 50 | 50 | 15 | No new release | ✅ **High Momentum** — Epic-driven, systematic progress |
| **CoPaw** | 13 | 50 | 15 | QwenPaw 2.0.1 | ✅ **Productive** — Sprinting with rapid bug responses |
| **Moltis** | 1 | 8 | 2 | No new release | ✅ **Healthy** — Low bugs, focused feature work |
| **LobsterAI** | 3 | 5 | 5 | No new release | ✅ **Maintenance** — Low engagement, effective fixes |
| **ZeptoClaw** | 0 | 2 | 1 | No new release | 🟢 **Dormant** — Dependency-only maintenance |
| **NullClaw** | 0 | 0 | 0 | No activity | 🟢 **Inactive** |

**Key Insight:** OpenClaw dominates by raw volume but suffers from critical stability bugs. ZeroClaw has the most concerning health profile—high development velocity but zero code landing, indicating a **maintainer review bottleneck**.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Community Scale:** With 500+ issues and PRs updated daily, OpenClaw has the largest active contributor base by far—approximately **10x the activity** of the next most active project (NanoBot).
- **Feature Riches:** The breadth of integrations (Telegram, WhatsApp, Home Assistant, Slack, Discord) and advanced features (multi-agent collaboration, session forking, memory tagging) outpaces all peers.
- **Security Hardening:** Recent betas focus on data safety (quarantine stores, crash-recoverable SQLite, schema-upgrade data-loss prevention) that is more sophisticated than any peer project's approach.

### Technical Approach Differences
- **Gateway Architecture:** OpenClaw's gateway-centric model (separating provider orchestration from agent execution) is architecturally distinct from NanoBot's integrated loop or IronClaw's microkernel approach.
- **Session Model:** OpenClaw's tree-based session forking is unique and powerful, but also the source of its most complex bugs (#98790 — permanent session corruption).
- **Deployment Scope:** OpenClaw targets desktop-first (macOS/iOS) with significant community demand for Linux/Windows (#75 — most-upvoted feature request).

### Community Size Comparison
| Measure | OpenClaw | Next Largest (IronClaw) |
|---------|----------|------------------------|
| Daily issue/PR activity | ~1,000 updates | ~100 updates |
| Feature request upvotes | 80 👍 (#75) | 8 👍 (#49031, Hermes) |
| Critical bugs open | 5+ P0/P1 | 2 P1 |
| Core maintainer responsiveness | Good (268 PRs merged) | Good (15 PRs merged) |

**Verdict:** OpenClaw is the **ecosystem leader by community size and feature scope**, but its fragility—especially memory leaks and session corruption—gives competitors an opportunity to capture stability-conscious users.

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **multiple projects**, indicating ecosystem-wide priorities:

| Requirement | Affected Projects | Details |
|-------------|------------------|---------|
| **Multi-provider routing / fallback** | OpenClaw (#108075), NanoBot (#1332), Hermes Agent (#5435), PicoClaw (#3200), NanoClaw (#3057), CoPaw (#6529) | Users demand automatic fallback between LLM providers (Claude→Codex, GPT→Claude) and configurable retry backoff |
| **Session & data integrity** | OpenClaw (#91588, #98790), NanoBot (#5118), Hermes Agent (#73297, #61761), PicoClaw (#3300), ZeroClaw (#9284) | Memory leaks, transcript corruption, and silent data loss are the #1 reliability pain point across the ecosystem |
| **Windows/Linux desktop apps** | OpenClaw (#75, **80 👍**), Hermes Agent (#70544, #73163), CoPaw (#6534, #6520) | Community strongly demands platform parity beyond macOS; Windows-specific bugs (installer, Smart App Control, WSL) are common |
| **Memory security & trust** | OpenClaw (#7707), NanoBot (#5153), Hermes Agent (#26977), IronClaw (#6814), CoPaw (#6461) | Memory poisoning, prompt injection, and cross-agent data leakage are growing security concerns |
| **Tool-calling & schema compatibility** | OpenClaw (#108580), PicoClaw (#3254), ZeroClaw (#9418), Hermes Agent (#72797) | Grammar-constrained tool calling (llama.cpp, Ollama) breaks frequently; providers have inconsistent schema support |
| **Plugin/extensibility architecture** | NanoBot (#5098), ZeroClaw (#8850), IronClaw (#6512), CoPaw (#6525) | Projects are migrating from monolithic to plugin-based architectures (WASM, MCP, native extensions) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|-------|----------|
| **Target User** | Power users, desktop | Developers, server | Enterprise, multi-platform | Production, QA-focused | Social/messaging, gaming | Security-conscious, headless |
| **Primary Platform** | macOS/iOS (desktop) | Web UI, CLI | Desktop, Telegram, IRC | Web UI, Slack, Telegram | QQ, Web, Telegram | CLI, MCP, headless |
| **Architecture** | Gateway + agent loop | Integrated agent loop | Microkernel with plugins | Epic-driven, microkernel | Monolithic + plugins | Runtime + WASM plugins |
| **LLM Providers** | Claude, GPT, OpenAI, local | OpenAI, Claude, MCP | Multiple (provider agnostic) | OpenAI, Claude, MCP | Qwen, Anthropic | Claude, GPT, MCP, Ollama |
| **Differentiator** | Session forking, memory tags | Skill marketplace, WebUI velocity | Nostr transport, LSP integration | Hermetic testing, error recoverability | Agent isolation, computer_use | Config atomicity, MCP multiplexing |
| **Weakest Area** | Stability (memory leaks, session corruption) | Token waste, silent failures | Windows support, CI reliability | Release pipeline stalled (26 days) | Windows installer, config corruption | Maintainer bottleneck (0 PRs merged today) |

**Key Insight:** No project dominates all dimensions. OpenClaw leads in **community and features** but lags in **stability**. IronClaw leads in **systematic engineering quality** but has a stalled release pipeline. ZeroClaw leads in **architectural ambition** but cannot land code.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Moderate Stability)
These projects are shipping features fast but accumulating technical debt:
- **OpenClaw** — 268 PRs merged today, but P0 memory leak and P1 session corruption
- **IronClaw** — 15 PRs merged, epic-driven progress, but 26-day release stall
- **CoPaw** — 15 PRs merged, sprinting toward v2.1.0, rapid bug responses

### Tier 2: Stabilization & Maintenance (Targeted Fixes, Lower Velocity)
These projects are consolidating after feature pushes:
- **NanoBot** — 21 PRs merged, fixing WebUI regressions, preparing for stable release
- **NanoClaw** — 4 PRs merged, production-tested dual-engine fallback, healthy fix queue
- **Moltis** — 2 PRs merged, building observability and ACP infrastructure
- **LobsterAI** — 5 PRs merged, fixing Windows installer, low engagement

### Tier 3: Strained / Bottlenecked (High Activity, Low Output)
- **ZeroClaw** — 50 PRs open, 0 merged today; maintainer bandwidth is the critical constraint
- **Hermes Agent** — 50 PRs open, only 7 merged; CI broken on `main`, high bug count

### Tier 4: Dormant / Maintenance-Only
- **PicoClaw** — Low activity but healthy fixes; no new releases in window
- **ZeptoClaw** — Dependency-only updates; no community engagement
- **NullClaw** — Zero activity

---

## 7. Trend Signals

### Industry Trends from Community Feedback

1. **Multi-Provider Resilience is Non-Negotiable**  
   Users across OpenClaw, NanoBot, Hermes, PicoClaw, NanoClaw, and CoPaw demand automatic fallback between LLM providers. The days of single-provider agents are ending—users want **cost optimization, quota management, and failover** without manual intervention.

2. **Security is Shifting from Access Control to Trust Boundaries**  
   Memory tagging (#7707), agent isolation (#6461), and content denylist hardening (#6814) show the ecosystem moving beyond simple authentication toward **architectural trust models**—users want guarantees that agents cannot be poisoned or leak data across sessions.

3. **Desktop Platform Parity is a Barrier to Adoption**  
   The overwhelming demand for Linux/Windows apps (OpenClaw #75 — 80 upvotes) and the systemic Windows bugs across Hermes, CoPaw, and LobsterAI indicate that **macOS-first development is excluding a majority of potential users**. The project that solves cross-platform deployment first gains a significant market advantage.

4. **Plugin-Driven Architecture is the Future**  
   ZeroClaw's WASM plugin migration (#8850), NanoBot's extension platform (#5098), and IronClaw's policy-driven extension lifecycle (#6512) all point to a future where agent capabilities are **dynamically loaded, sandboxed, and versioned** rather than compiled in.

5. **Error Recoverability is the Next Quality Frontier**  
   IronClaw's error-recoverability epic (#6284) and OpenClaw's crash-recovery features represent a shift from "does it work?" to **"does it survive failure?"** Explicit contracts for retry, fallback, and graceful degradation are becoming differentiators.

6. **Observability for Agent Behavior is Emerging**  
   Moltis's Langfuse integration, NanoBot's CI/CD improvements, and IronClaw's analytics logging request (#6837) suggest that **production AI agent deployments require monitoring, tracing, and debugging infrastructure**—a need that will grow as agents become more autonomous.

### Value for AI Agent Developers
- **Build for multi-provider from day one** — The architecture decision to support arbitrary LLM backends with transparent fallback is becoming table stakes.
- **Invest in Windows/Linux support early** — The community demand is clear; delaying cross-platform support creates an opening for competitors.
- **Design for failure** — Session corruption, memory leaks, and silent data loss are the most frustrating user experiences. Crash-recoverable state and explicit error contracts will separate trusted agents from toys.
- **Prioritize plugin extensibility** — The ecosystem is moving away from monolithic agents toward composable, sandboxed capabilities. WASM and MCP are the leading standards.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-29

## Today's Overview

NanoBot is in an **intense development phase**, with 40 pull requests updated in the past 24 hours — 19 still open and 21 merged or closed — signaling a major feature push. The project's maintainers are aggressively addressing regressions from recent architectural changes, particularly around the WebUI, session management, and provider integrations. Community engagement remains strong with 7 open issues, though several bug reports suggest the latest release cycle introduced notable regressions. The team appears to be preparing for a stable release by converging on fixes for critical WebUI and agent loop issues.

## Releases

No new releases were published today. The absence of releases amid 40 active PRs suggests the team is consolidating multiple fixes and features into a pending release, likely in the coming days.

## Project Progress

21 PRs were merged or closed today, reflecting significant forward momentum. Key areas of advancement include:

- **WebUI Stability (High Priority)**: Multiple P1 fixes were merged to address critical UX regressions. PR [#5140](https://github.com/HKUDS/nanobot/pull/5140) keeps streaming tail visible during generation. PR [#5142](https://github.com/HKUDS/nanobot/pull/5142) ensures threads open at the latest message. PR [#5143](https://github.com/HKUDS/nanobot/pull/5143) animates reasoning drawer transitions. PR [#5130](https://github.com/HKUDS/nanobot/pull/5130) reconciles chats properly after browser resume. PR [#5113](https://github.com/HKUDS/nanobot/pull/5113) stabilizes repeated model preset rows.

- **Configuration & Provider Updates**: PR [#5148](https://github.com/HKUDS/nanobot/pull/5148) adds image-aware model presets with tri-state `supportsImageInput` handling, a significant feature for multimodal workflows. PR [#5119](https://github.com/HKUDS/nanobot/pull/5119) applies minor UI polish to model selectors.

- **Agent Loop Fixes**: PR [#5134](https://github.com/HKUDS/nanobot/pull/5134) prevents gateway crashes when stopping active tasks, addressing a regression from a previous list-to-set refactor.

- **CI/CD Improvements**: PR [#5144](https://github.com/HKUDS/nanobot/pull/5144) scopes PR path detection to head changes, preventing incorrect CI skipping.

## Community Hot Topics

- **[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) — Multi-agent Collaboration Proposal** (5 comments, opened July 20): This enhancement proposal critiques the current subagent system as merely "background task delegation" and argues for persistent subagent identities and shared task state. It remains open with no maintainer response, suggesting the community is pushing architectural evolution beyond the current design.

- **[Issue #5](https://github.com/HKUDS/nanobot/issues/5) — `uv install` Documentation** (7 comments, 3 👍, CLOSED): A user successfully argued for `uv` install instructions, which were added. This shows the community values faster, more stable installation methods.

- **[Issue #1332](https://github.com/HKUDS/nanobot/issues/1332) — High Token Consumption** (4 comments, CLOSED): A Chinese-language issue reports consuming 5,000+ input tokens for "hello" and 30,000 for a skill install query. The stale closure status without visible resolution may indicate a known optimization gap.

- **[Issue #5118](https://github.com/HKUDS/nanobot/issues/5118) — Session Consolidation Drops Media Paths** (2 comments): A well-documented bug where uploaded media files become unrecoverable after archive. This affects 6 of 17 channels, indicating systemic data loss risk.

## Bugs & Stability

**Critical (Data Loss Risk)**:
- **[Issue #5118](https://github.com/HKUDS/nanobot/issues/5118) — Session consolidation drops uploaded media paths**: Absolute file paths stored only in `media[]` fields are silently lost during consolidation. Affects 6/17 channels. No fix PR yet. **Severity: High**.

**High (Functional Regression)**:
- **[Issue #5133](https://github.com/HKUDS/nanobot/issues/5133) — `finish_reason='length'` with tool_calls misrouted**: When an LLM response hits token limits while also containing tool calls, the response is incorrectly retried as empty rather than handled via length recovery. No fix PR yet. **Severity: High**.
- **[Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) — No audio on WhatsApp**: The bot can receive but cannot send audio messages. Likely a platform-specific bug. No fix PR yet. **Severity: High (platform feature)**.

**Medium (Operational)**:
- **[Issue #5138](https://github.com/HKUDS/nanobot/issues/5138) — MCP SDK v2 migration needed for stdio shutdown bugs**: Cancel-scope teardown errors and stdout protocol pollution during MCP sessions. Tracked but not yet fixed. **Severity: Medium**.
- **PR [#5151](https://github.com/HKUDS/nanobot/pull/5151) — Idle session lock leak**: Open PR fixing memory leak where `AgentLoop._session_locks` retains every session key indefinitely. **Fix available (open)**.
- **PR [#5150](https://github.com/HKUDS/nanobot/pull/5150) — Buffered session output unbounded**: Open PR fixing unbounded stdout/stderr accumulation in exec sessions. **Fix available (open)**.

**Operational (Pairing/Store)**:
- **PR [#5155](https://github.com/HKUDS/nanobot/pull/5155) — Null approved map crash**: Open PR fixing `AttributeError` when pairing store has `"approved": null`. **Fix available (open)**.
- **PR [#5154](https://github.com/HKUDS/nanobot/pull/5154) — Primitive items in Responses API parser**: Open PR fixing `TypeError` from `vars(item)` on primitive list items. **Fix available (open)**.
- **PR [#5153](https://github.com/HKUDS/nanobot/pull/5153) — Non-string timestamps in memory archiving**: Open PR fixing raw archive crashes from `None` timestamps or missing roles. **Fix available (open)**.

**Critical Connectivity**:
- **[PR #5156](https://github.com/HKUDS/nanobot/pull/5156) — Telegram polling stall (OPEN)**: After transient network issues, Telegram polling silently stops with no logs. The bot appears alive but receives no messages. **Fix available (open)**.

## Feature Requests & Roadmap Signals

- **Multi-Agent Evolution ([Issue #5000](https://github.com/HKUDS/nanobot/issues/5000))**: A detailed proposal to transform subagents from independent task executors into full multi-agent collaborators with persistent identities and shared state. This is the most substantial architectural feature request and could shape the next major version.

- **Image-Aware Model Presets ([PR #5148](https://github.com/HKUDS/nanobot/pull/5148), MERGED)**: Migrates legacy config settings into named presets with `supportsImageInput` tri-state support. Likely foundational for multimodal workflows in v2.x.

- **Skill Marketplace ([PR #5116](https://github.com/HKUDS/nanobot/pull/5116), OPEN)**: Adds a WebUI Discover view for browsing and installing skills from skills.sh and SkillHub, with install-history sparklines. This feature is already coded and reviewed, making it highly likely for the next release.

- **Unified Extension Platform ([PR #5098](https://github.com/HKUDS/nanobot/pull/5098), OPEN)**: Introduces a native Python extension boundary for capabilities not covered by skills, apps, or MCP. Another large feature likely targeting the next minor version.

- **Stable Resource Path Aliases ([PR #5131](https://github.com/HKUDS/nanobot/pull/5131), OPEN)**: Adds canonical resource views at `<config-dir>/resources/<view-id>/`, which could simplify agent and skill configuration management.

## User Feedback Summary

**Pain Points (High Signal)**:
- **Token waste** (Issue #1332): Users experience excessive token consumption for trivial queries (5,000+ for "hello"). Though stale, this indicates systemic prompt optimization is not meeting user expectations.
- **Data loss anxiety** (Issue #5118): The session consolidation bug means uploaded media can become permanently unrecoverable — a trust-breaking issue for production users.
- **Silent failures** (PR #5156): Telegram polling silently stops working after network blips, making the bot appear functional while not receiving messages. This erodes user confidence in reliability.
- **Platform incompleteness** (Issue #5149): WhatsApp audio send is missing, limiting the bot's utility on a major messaging platform.

**Satisfaction Signals**:
- The rapid response to WebUI regressions (multiple P1 fixes merged in a single day) demonstrates strong team responsiveness.
- The `uv` install improvement (Issue #5) shows maintainers listen to installation ergonomics feedback.

**Dissatisfaction Risks**:
- No maintainer response on the multi-agent proposal (Issue #5000) after 9 days may discourage architectural contributions.
- The stale issue #1332 about token waste, closed without visible resolution, may frustrate users on constrained budgets.

## Backlog Watch

- **[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) — Multi-Agent Collaboration Proposal**: Open for 9 days with no maintainer response. This is the highest-impact community architectural proposal. Without acknowledgment, the community may hesitate to submit detailed proposals.

- **[Issue #1332](https://github.com/HKUDS/nanobot/issues/1332) — High Token Consumption**: Closed as stale but unresolved. Users paying per-token will continue to experience excessive consumption. A documented optimization path would reduce churn.

- **[PR #5098](https://github.com/HKUDS/nanobot/pull/5098) — Unified Extension Platform**: Open since July 26 with merge conflicts. This is a large feature PR that likely needs maintainer guidance to resolve conflicts and progress toward merge.

- **[PR #5116](https://github.com/HKUDS/nanobot/pull/5116) — Skill Marketplaces**: Open since July 27 with no visible review comments despite significant code. May be blocked pending resolution of PR #5098's extension platform.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-29

---

## Today's Overview

Hermes Agent is experiencing an extremely active day with 50 open issues and 43 open pull requests updated in the last 24 hours, alongside 7 merged/closed PRs. The project shows high community engagement but also a substantial bug-fixing and maintenance workload, with critical stability issues affecting Windows platform, session state, and message delivery paths. While no new releases were published today, the volume of activity suggests the team is in a major stabilization and refactoring phase. Several high-priority regressions on the `main` branch are blocking CI for all open PRs, indicating ongoing response to emergent problems.

---

## Releases

No new releases were published today. The last release information is not available in this data snapshot.

---

## Project Progress

**7 Pull Requests** were merged or closed today, reflecting active bug fixing and feature advancement:

- **PR #73341** (Merged) — *fix(gateway): flush pending memory writes before session teardown (#73297)* — P1 severity fix preventing `/reset` from silently dropping memory writes, ensuring `MEMORY.md` is consistent across sessions ([PR #73341](https://github.com/NousResearch/hermes-agent/pull/73341))

- **PR #73756** (Closed) — *fix(wake): coerce dead onnx→tflite on macOS ARM64; clear stale voice turn-timeout* — Resolves wake-word model incompatibility on Apple Silicon and prevents hands-free voice chat from deactivating prematurely ([PR #73756](https://github.com/NousResearch/hermes-agent/pull/73756))

- **PR #73800** (Open) — *fix: replace assert statements with runtime guards* — Proactive hardening across 3 files to prevent production crashes from stripped assertions ([PR #73800](https://github.com/NousResearch/hermes-agent/pull/73800))

- **PR #73794** (Open) — *fix(lsp): add idle subprocess reaper to reclaim memory (#25016)* — Addresses long-standing memory leak where LSP subprocesses (pyright, rust-analyzer) accumulated indefinitely ([PR #73794](https://github.com/NousResearch/hermes-agent/pull/73794))

- **PR #73798** (Open) — *fix(photon): unblock main — restore U+FFFC deferral, mock deps check in runtime-record tests* — Critical fix for breaking CI on `main` branch ([PR #73798](https://github.com/NousResearch/hermes-agent/pull/73798))

Major feature advances with ongoing PRs include a **Nostr WebSocket inbound transport** with NIP-42 auth ([PR #73761](https://github.com/NousResearch/hermes-agent/pull/73761)), a **WhatsApp version resolution fix** preventing bridge pairing failures ([PR #73795](https://github.com/NousResearch/hermes-agent/pull/73795)), and config-driven external plugin discovery ([PR #38698](https://github.com/NousResearch/hermes-agent/pull/38698)).

---

## Community Hot Topics

The most active discussions today reflect deep concerns about agent behavior, platform stability, and silent failures:

1. **[Issue #58619] Process accumulation on reconnection (6 comments)** — Desktop spawns unbounded `serve` processes without cleanup when model API errors occur, accumulating ~1 process per 15-30 minutes. This is a significant stability concern for long-running Desktop users ([Issue #58619](https://github.com/NousResearch/hermes-agent/issues/58619))

2. **[Issue #5435] Structured provider error classification (4 comments, open since April)** — The community is pushing for robust API error handling that doesn't rely on brittle string matching against provider error messages. This long-running issue signals frustration with silent failures across different LLM providers ([Issue #5435](https://github.com/NousResearch/hermes-agent/issues/5435))

3. **[Issue #69495] Silent injection in cron prompts (3 comments)** — The `[SILENT]` preamble injected into cron jobs can cause LLM agents to bail without executing tasks, and there's no way to customize the injected preamble. This affects scheduled automation reliability ([Issue #69495](https://github.com/NousResearch/hermes-agent/issues/69495))

4. **[Issue #73207] Desktop /branch session branching bug (3 comments)** — Typing `/branch` inside a session tile branches the wrong (foreground) chat instead of the tile where the command was entered, causing incorrect parent-child relationships ([Issue #73207](https://github.com/NousResearch/hermes-agent/issues/73207))

5. **[Issue #72797] XML-like tag stripping in file tools (3 comments, 1 👍)** — File tools silently strip XML-like tags from content, forcing agents to use workarounds like `chr(60)/chr(62)`. This is a subtle but impactful transport bug affecting agents generating HTML/XML content ([Issue #72797](https://github.com/NousResearch/hermes-agent/issues/72797))

6. **[Issue #49031] Configurable retry backoff for 429 errors (3 comments, 8 👍)** — The most-upvoted feature request this period asks for configurable rate-limit backoff, highlighting pain with providers having strict concurrent-request limits ([Issue #49031](https://github.com/NousResearch/hermes-agent/issues/49031))

---

## Bugs & Stability

### Critical (P1)
- **CI on `main` is broken** — Two photon platform regressions (U+FFFC salvage + runtime-record tests needing sidecar-deps mock) are failing required test slices across all open PRs ([Issue #73783](https://github.com/NousResearch/hermes-agent/issues/73783)). A fix PR (#73798, #73799) is already open.

### High (P2)
- **WSL VM crash from path scraping** — `_build_wsl_interop_paths` scrapes all `/mnt/` paths, causing Plan 9 overload → WSL VM crash on Windows ([Issue #73163](https://github.com/NousResearch/hermes-agent/issues/73163))
- **Memory writes dropped on `/reset`** — Fixed by PR #73341 (merged): pending memory writes were silently lost during session teardown
- **Desktop /branch branches wrong chat** — Session tile branching targets the foreground chat instead of the active tile ([Issue #73207](https://github.com/NousResearch/hermes-agent/issues/73207))
- **Checkpoints ignored in one-shot sessions** — `checkpoints.enabled` config is ignored when using `hermes -z` ([Issue #69737](https://github.com/NousResearch/hermes-agent/issues/69737))
- **Output-cap retry never converges** — Per-retry input token drift can erase the retry margin, causing infinite loops ([Issue #61761](https://github.com/NousResearch/hermes-agent/issues/61761))
- **`delegate_task` loop cap miscounts** — JSON batches and rejected spawns are mischarged against loop limits ([Issue #72550](https://github.com/NousResearch/hermes-agent/issues/72550))
- **False-positive truncation on Ollama Cloud GLM** — Compound bug with session stream not propagating `partial` status ([Issue #72316](https://github.com/NousResearch/hermes-agent/issues/72316))
- **Test state leakage** — `test_dashboard_auth_gate.py` leaks state causing dependent tests to fail ([Issue #70017](https://github.com/NousResearch/hermes-agent/issues/70017))
- **Windows Smart App Control blocks local builds** — Locally-built Desktop executables are blocked as unsigned ([Issue #70544](https://github.com/NousResearch/hermes-agent/issues/70544))
- **Weixin iLink protocol outdated** — Version 2.2.0 vs required 2.4.3 causes missing mobile features ([Issue #24989](https://github.com/NousResearch/hermes-agent/issues/24989))

### Medium (P3)
- **XML-like tags stripped in file tools** — Agents must use chr(60)/chr(62) workarounds ([Issue #72797](https://github.com/NousResearch/hermes-agent/issues/72797))
- **Duplicate "Summarizing thread" timers** — Multiple running assistant bubbles cause UI rendering issues ([Issue #68634](https://github.com/NousResearch/hermes-agent/issues/68634))
- **Reasoning disclosure re-renders** — Desktop truncates streamed reasoning to 500 chars on replace events ([Issue #64995](https://github.com/NousResearch/hermes-agent/issues/64995))
- **OIDC auth provider misclassification** — Non-JWT tokens reported as "IDP unreachable" instead of "not my token" ([Issue #70947](https://github.com/NousResearch/hermes-agent/issues/70947))
- **MCP guardrail never fires** — Hardcoded tool names predate `mcp__server__tool` naming convention ([Issue #71585](https://github.com/NousResearch/hermes-agent/issues/71585))
- **Idle LSP subprocess memory leak** — Fixed by PR #73794; pyright (~200MB) and rust-analyzer (~300MB) per server leaked ([PR #73794](https://github.com/NousResearch/hermes-agent/pull/73794))
- **Desktop update error submission** — Clicking "Update" causes recurring errors ([Issue #73797](https://github.com/NousResearch/hermes-agent/issues/73797))

---

## Feature Requests & Roadmap Signals

The most notable feature requests today point toward improved reliability and platform expansion:

1. **Configurable rate-limit backoff** ([#49031](https://github.com/NousResearch/hermes-agent/issues/49031), 8 👍) — Highest user demand; currently hardcoded ~5s base, 120s cap. Likely to land in next release given community appetite and existing reference implementation.

2. **IRC `observe_unmentioned_group_messages`** ([#39903](https://github.com/NousResearch/hermes-agent/issues/39903)) — Parity with Telegram platform, enabling IRC agents to observe all group messages without explicit mentions.

3. **AI assistant for documentation** ([#15793](https://github.com/NousResearch/hermes-agent/issues/15793)) — User request for an AI-powered docs search to navigate the deep documentation more efficiently.

4. **Telegram `pre_callback_query_dispatch` plugin hook** ([#21469](https://github.com/NousResearch/hermes-agent/issues/21469)) — Enables plugin interception of inline keyboard callbacks before built-in prefix checks.

5. **Web-based QR onboarding for WeChat** ([PR #50044](https://github.com/NousResearch/hermes-agent/pull/50044), open since June) — Brings WeChat setup to parity with Telegram's dashboard-based flow, eliminating terminal requirements.

6. **Copy text buttons for Telegram** ([PR #59445](https://github.com/NousResearch/hermes-agent/pull/59445)) — Adds `COPY_BUTTON: label | text` markers rendering as Bot API inline buttons.

7. **Terminal webhook delivery metadata** ([PR #73559](https://github.com/NousResearch/hermes-agent/pull/73559)) — Adds versioned delivery envelope for webhook-origin turns with server-owned immutable delivery IDs.

**Prediction**: The configurable retry backoff (#49031) and the Telegram copy text buttons (#59445) have strong community support and reference implementations, making them likely candidates for the next release.

---

## User Feedback Summary

**Satisfaction Signals:**
- Community continues to file detailed, well-researched bug reports with reproduction steps and bisected root causes (e.g., #73163, #73783, #61761)
- Multiple feature PRs from new contributors (#73801, #73795, #73782, #73755) indicate healthy onboarding and ecosystem engagement
- The prompt response to the `main` branch CI breakage (#73783) with two concurrent fix PRs (#73798, #73799) shows active maintenance

**Pain Points:**
- **Windows experience is notably poor**: Smart App Control blocks local builds (#70544), WSL VM crashes (#73163), stale build artifacts cause launch failures (#73687), and Desktop update errors (#73797) — Windows users face persistent friction
- **Silent failures and data loss**: Memory writes dropped on `/reset` (now fixed), cron jobs silently failing (#69495), XML content silently truncated (#72797) — multiple bugs where the system fails without notification
- **Provider compatibility**: Ollama Cloud GLM truncation false-positives (#72316), hardcoded retry backoff (#49031), fragile provider error matching (#5435) — users running diverse LLM backends experience inconsistent behavior
- **Session state confusion**: Duplicate rendering timers (#68634), wrong branching targets (#73207), reasoning content re-rendering (#64995) — Desktop UI reliability issues erode trust

---

## Backlog Watch

Several critical issues and PRs require maintainer attention:

1. **[Issue #5435] Structured provider error classification** (open since April, 4 comments) — This refactor has been dormant for nearly 4 months. The current brittle string matching causes silent failures across providers, and the issue has substantial community engagement.

2. **[Issue #37862] Couldn't launch the desktop app** (open since June, 3 comments) — No clear resolution or reproduction steps confirmed; likely affecting new users.

3. **[Issue #26977] Multi-word instruction-override variants miss in skill/context scanners** (open since May, 3 comments) — Security issue around prompt injection detection that may be bypassed by simple word insertion.

4. **[PR #38698] Config-driven external plugin paths** (open since June 4) — Has 6 sweeper risk tags including security-boundary and compatibility. This is a significant feature with broad blast radius that may need careful review before merging.

5. **[PR #27368] Silence bandit B324 warnings** (open since May 17) — Low-priority but has been open for over 2 months with no maintainer response on the 19 reported weak-hash warnings.

6. **[Issue #24989] Weixin iLink version outdated** (open since May 13, 1 comment) — Missing mobile features due to outdated protocol version; may affect WeChat users' experience.

7. **[Issue #29371] Tool-progress drops last event** (open since May 20, 1 comment) — Subtle but reliable data loss during throttle windows in delivery.

---

*Generated from GitHub data retrieved 2026-07-29. All links reference the NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-29

## Today's Overview
Project activity remains moderate with **4 issues updated** (1 open, 3 closed) and **10 PRs updated** (7 open, 3 merged/closed) in the last 24 hours. No new releases were tagged. Maintainer responsiveness is evident, with several stale items finally being resolved or progressing, including a high-priority feature request closed after 7 weeks. The project continues to mature through targeted fixes (auth, media types, model resolution) while expanding functionality (Exa web search, fallback chains) — signaling balanced attention to stability and growth.

## Releases
**No new releases.** The latest tagged release precedes the data window; no migration notes or breaking changes to report.

## Project Progress
**3 PRs merged/closed today** (all stale items finally resolved):

- **#3256** (merged): Fix Feishu audio/video delivery — audio and video files now sent as native playable message types instead of generic file downloads. *Domain: messaging (Feishu)*
- **#3254** (merged): Fix model resolution priority — `lookupModelConfigByRef` now prefers verbatim model name matches over provider-alias splits, preventing incorrect model selection when names overlap. *Domain: agent/model resolution*
- **#3228** (merged): Fix Anthropic Messages provider — `SystemParts` are now sent as proper system blocks with `cache_control`, enabling prompt caching on this provider (was previously flattened to a string, breaking cache). *Domain: providers (Anthropic)*

Additionally, **7 PRs remain open** and continue to evolve, notably the Exa web search provider (#3299) and configurable fallback chain (#3200).

## Community Hot Topics
1. **#3088** [CLOSED] — *Feature: use vodozemac instead of libolm*  
   +10 comments, +2 👍  
   **Analysis:** This high-priority, 7-week-old request was finally closed, aligning PicoClaw with upstream security best practices by replacing the unmaintained libolm with its official successor. The underlying community need: elimination of supply-chain risk and cryptographic maintenance debt.  
   *Link: https://github.com/sipeed/picoclaw/issues/3088*

2. **#3182** [OPEN] — *BUG: Android version cannot launch service*  
   +5 comments, 0 👍  
   **Analysis:** A long-running (33 days) Android bug with no resolution. User reports full permissions granted but service fails to launch and settings path cannot be changed. Low reaction count suggests limited Android user base, but lack of response from maintainers risks alienating mobile adopters.  
   *Link: https://github.com/sipeed/picoclaw/issues/3182*

3. **#3200** [OPEN] — *feat: configurable default fallback chain*  
   **Analysis:** This 28-day-old PR by lc6464 represents significant UX investment — allowing users to set model fallback chains via the web UI. High architectural relevance for reliability-conscious deployments. Needs review to merge.  
   *Link: https://github.com/sipeed/picoclaw/pull/3200*

## Bugs & Stability
**3 bugs reported (all closed):**

| Issue | Severity | Description | Fix/Status |
|-------|----------|-------------|------------|
| #3300 | High | Toolset missing `read_file` causes deadlock — system prompts cannot read `RULES.md`, breaking the agent loop | Closed (same day, no fix PR visible) |
| #3255 | Medium | DingTalk chat preview always shows "PicoClaw" instead of actual message content | Closed (PR #3256 fixed related Feishu issue; DingTalk fix may be pending) |
| #3182 | Low (stale) | Android service launch failure, permission denied despite full permissions | **Still open** — no fix PR identified |

**Notable fix improvements from merged PRs:**
- **#3280** (open) addresses four distinct OAuth login failures in headless/remote setups, preventing auth code burn without user feedback — critical for server deployments.
- **#3279** (open) prevents seahorse summaries from leaking tool-call format markers into user-facing messages — a data leakage bug with potential UX confusion.

## Feature Requests & Roadmap Signals
- **#3299** (open PR) — *Exa native web search provider*: Adds `tools.web` support via Exa API with date-range filtering. Likely next release candidate — already has open PR with configuration support.
- **#3200** (open PR) — *Configurable fallback chain*: Backend/frontend for default model fallback ordering. Strong candidate for inclusion in next release given UX impact and length of wait.
- **#3251** (open PR) — *Anthropic prompt cache metrics*: Capture cache-enabled/disabled/cache-read tokens from Claude responses. Would improve cost observability for production users.
- **#1951** (open PR, long-running) — *Move installation scripts to repo*: Consolidates documentation and setup. Low complexity, high impact for new users.

**Prediction:** Next release likely includes Exa provider (#3299) and fallback chain (#3200). Anthropic cache metrics (#3251) may also land if maintainer bandwidth allows.

## User Feedback Summary
- **Positive signal:** Feishu media fix (#3256) addresses a concrete "file vs playable" frustration; model resolution fix (#3254) solves silent mis-routing of model requests.
- **Pain point (unresolved):** Android launch failures (#3182) remain unaddressed after 33 days — multiple comments but no maintainer response. Mobile strategy appears low priority.
- **User behavior pattern:** Chinese-language issues (#3255, #3300) suggest significant East Asian user base (DingTalk, Feishu integrations), warranting continued i18n and platform-specific attention.
- **Workaround culture:** Issue #3300 user created `RULES.md` workaround that deadlocked — indicates strong demand for extensible system prompt composition, currently a missing feature.

## Backlog Watch
| Item | Type | Age | Status | Risk |
|------|------|-----|--------|------|
| **#3182** — Android service launch failure | Bug | 33 days | Open, stale | **High** — unaddressed platform bug may deter mobile adoption |
| **#1951** — Move install scripts to repo | Enhancement | 127 days | Open, stale | **Medium** — contribution left unreviewed for 4+ months, risks contributor churn |
| **#3280** — OAuth survival for headless setups | Bug fix | 8 days | Open | **Medium** — complex, touches auth flow; needs careful review |
| **#3299** — Exa search provider | Feature | 3 days | Open | **Low** — recent, maintainer may still be evaluating |

**Call to action:** Issue #3182 (Android) and PR #1951 (install scripts) represent the most concerning backlog items — one a platform-critical bug, the other a low-complexity, high-value contribution languishing for months.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-29

## Today's Overview
NanoClaw is in a **high-output maintenance and stabilization phase** today, with 10 pull requests updated in the last 24 hours (4 closed/merged, 6 open) and 1 active issue. The project is processing a wave of targeted fixes from multiple contributors — zombie process reaping in containers, webhook port configuration, database migration gaps, and broken development scripts — alongside incremental but high-impact feature work from the dual-engine quota fallback branch (PR #3057) which has been **battle-tested in production for three weeks**. Community activity is substantial, though the single open issue (#1350) for GitHub Copilot SDK integration remains active with clear demand. No new releases are published today, suggesting the team is consolidating for a future cut.

- Activity level: **High** (10 PRs, 1 issue, strong merge throughput)
- Open/closed balance: Healthy — 4 PRs merged/closed, 1 issue active

---

## Releases
**None today.** No new releases were published in the last 24 hours.

---

## Project Progress

Four pull requests were closed or merged today, advancing bug fixes and architectural improvements:

### Merged/Closed PRs

1. **[PR #3060 — fix(container): add --init to agent container spawn args]** — Closed/Merged. Fixes zombie process accumulation in container agents by adding `--init` flag to `docker run` args, ensuring PID 1 properly reaps orphaned child processes. Also corrects documentation in `docs/build-and-runtime.md` that previously acknowledged this gap. **Impact**: Stability improvement for long-running agent containers.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/3060)

2. **[PR #1255 — feat: add MiniMax OAuth as model provider]** — Closed. After a long review cycle (since March 18), this feature adding MiniMax OAuth support (Coding Plan) as an alternative to Anthropic API/Claude OAuth has been merged. Adds `src/minimax-oauth.ts` with PKCE S256 device-code flow and a `minimax-login.ts` script. **Impact**: Expands provider diversity — users can now run NanoClaw without any Anthropic credential.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/1255)

3. **[PR #2197 — fix(update-nanoclaw): guard merge state]** — Closed. Fixes a subtle Git merge bug where `/update-nanoclaw` could silently produce single-parent commits on customized forks, losing the true merge history. **Impact**: Safety improvement for users running forked/patched instances.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2197)

4. **[PR #1136 — feat(update-nanoclaw): auto-merge audit and container smoke test]** — Closed. Adds two safety checks to the `/update-nanoclaw` skill: an audit that catches silent code drops from upstream restructures, and a container smoke test post-merge. **Impact**: Reduces risk of regressions during self-updates.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/1136)

---

## Community Hot Topics

### Most Active Issue

- **[#1350 — Add GitHub Copilot SDK as alternative AI backend]** (👍 8, 3 comments)  
  Opened March 22, updated today. A user requests native integration of GitHub Copilot SDK (GPT-4.1, etc.) as an alternative to the current exclusive Anthropic Claude Agent SDK support. With 8 upvotes and a detailed motivation, this is the highest-signal feature request in the tracker. **Underlying need**: Provider diversity and cost flexibility — users want to route agent tasks through their existing Copilot subscriptions rather than paying separately for Claude API.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/issues/1350)

### Most Active Pull Requests (by recency + discussion volume)

- **[PR #3057 — Dual-engine quota fallback: Claude→Codex overflow, handoff recaps, proactive quota warning]**  
  Open since July 15, updated yesterday. This is a major feature branch providing automatic fallback from Claude to GitHub Codex on quota exhaustion, with handoff recaps and proactive warnings. **Battle-tested since July 6 on a live WhatsApp deployment.** High community interest — the most architecturally significant open PR.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/3057)

- **[PR #3143 — Preserve resolved approval card content]**  
  Open since yesterday. Fix ensures approval cards retain their title, request details, and a muted decision/actor after resolution, with terminal persistence for timeout status.  
  [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/3143)

---

## Bugs & Stability

Three bugs fixed today, one new open fix. Severity ranking:

### 🔴 Severity: Medium

1. **[PR #3060 — Zombie processes in agent containers]** — Fixed (merged). Without `--init`, child processes could become zombies, accumulating memory and exhausting PID space. **Fix: merged.**  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/3060)

2. **[PR #3148 — WEBHOOK_PORT ignored from .env]** — Open fix. The webhook server did not follow NanoClaw's normal configuration precedence for `WEBHOOK_PORT` (env > .env > default), always falling back to port 3000. **Fix: open, good first contributor experience.**  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/3148)

3. **[PR #3145 — Missing destinations for existing messaging-group wirings]** — Open fix. Database migration 021 is needed to backfill channel destinations for existing wiring configurations that lack them, preserving existing destinations and custom names. **Severity: Medium-High** — affects data integrity for messaging group users.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/3145)

### 🟡 Severity: Low

4. **[PR #3147 — Destination reply context leak in agent-runner]** — Open fix. Keeps destination reply context local to prevent cross-conversation contamination.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/3147)

5. **[PR #3146 — Two dev scripts rotted against architecture]** — Open fix. `scripts/test-v2-host.ts` dies before spawning containers; `scripts/validate-dispatch.ts` fails due to migrated data structures. **Impact**: Developer experience degradation only.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/3146)

6. **[PR #2197 — Silent single-parent merge commits on forks]** — Fixed (merged). Potential silent loss of merge history during `/update-nanoclaw`.  
   [GitHub Link](https://github.com/nanocoai/nanoclaw/pull/2197)

---

## Feature Requests & Roadmap Signals

### Top Community Feature Request

- **GitHub Copilot SDK integration** (Issue #1350, 👍 8) — Users clearly want provider diversity beyond Claude. This is the single most-upvoted open issue.  
  **Prediction**: Likely to land in the next 1–2 releases, especially given momentum from the MiniMax OAuth merge (PR #1255) and dual-engine fallback work (PR #3057). The infrastructure for multiple backends is being built now.

### Near-Roadmap Features (from open PRs)

- **Dual-engine quota fallback** (PR #3057) — Automatic fallback Claude→Codex on quota exhaustion with handoff recaps. **Probable next major feature** — already production-tested.  
- **MiniMax OAuth provider** (PR #1255) — Now merged, expanding provider choice without Anthropic dependency.

### Potential Future Direction

The combination of MiniMax OAuth (merged), Copilot SDK (requested), and Claude→Codex fallback (in progress) signals that **multi-provider agent routing** is becoming a core architectural theme for NanoClaw in 2026.

---

## User Feedback Summary

### Pain Points (addressed today)

- **Zombie processes in containers** — Users running long-lived agents would experience resource leaks. Now fixed via `--init` (PR #3060).
- **Webhook port misconfiguration** — Users relying on `.env` for `WEBHOOK_PORT` would silently get port 3000 instead. Fix incoming (PR #3148).
- **Missing messaging destinations** — Users with existing messaging group wirings would see broken or missing channel destinations. Migration fix incoming (PR #3145).

### Satisfaction Signals

- The dual-engine quota fallback (PR #3057) has been **"battle-tested in production since 2026-07-06 on a live WhatsApp deployment"** — strong evidence of real-world robustness and user satisfaction.
- MiniMax OAuth merge (PR #1255) reduces dependency friction for users without Anthropic accounts.

### Use Cases Observed

- Production WhatsApp deployment (PR #3057)
- Customized forks with local changes (PR #2197)
- Developer workflow testing (PR #3146)

---

## Backlog Watch

### Issues and PRs Requiring Maintainer Attention

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#1350 — GitHub Copilot SDK](https://github.com/nanocoai/nanoclaw/issues/1350) | 129 days (since March 22) | Open, 8 👍 | High community demand; no maintainer response evident. |
| [#3057 — Dual-engine quota fallback](https://github.com/nanocoai/nanoclaw/pull/3057) | 14 days (since July 15) | Open, 0 comments | Large feature branch, no recent maintainer review activity. |
| [#3148 — WEBHOOK_PORT fix](https://github.com/nanocoai/nanoclaw/pull/3148) | <1 day | Open, awaiting review | Simple fix, good for quick merge. |
| [#3145 — DB migration backfill](https://github.com/nanocoai/nanoclaw/pull/3145) | <1 day | Open, awaiting review | Data integrity issue for messaging users. |
| [#3147 — Reply context locality](https://github.com/nanocoai/nanoclaw/pull/3147) | <1 day | Open, awaiting review | Correctness fix for agent-runner. |

### Observations

- **Most critical backlog item**: Issue #1350 (Copilot SDK) — despite being the most-upvoted feature request at 8 reactions, it has seen no maintainer response in over 4 months. With MiniMax now merged and dual-engine work progressing, the team should either assign or comment on timeline.
- **High-velocity fix queue**: Four fix PRs submitted in the last two days — the maintainers should prioritize review to avoid accumulating technical debt.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-29

## Today's Overview
IronClaw shows exceptionally high activity with 50 Issues and 50 PRs updated in the last 24 hours, signaling intense engineering momentum. The project closed 15 Issues and merged/closed 15 PRs today, primarily driven by systematic work on the Reborn architecture, error-recoverability endgame, and the new Hermetic testing platform (Epic #6524). Two P1 production bugs — intermittent `service_unavailable` errors and a Notion tool installation failure — emerged from real user deployments, alongside a critical security issue where the agent reaches for unsigned catalog URLs. The project appears to be in a heavy stabilization and integration phase, with multiple large refactoring PRs targeting filesystem security, extension lifecycle normalization, and tool-disclosure hardening.

## Releases
No new releases today. The last release pipeline is tracked in open PR #5598, which was last updated 2026-07-03 and proposes breaking changes to `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). The release appears stalled, possibly waiting on the current wave of integration PRs to land.

## Project Progress
**15 Issues closed today**, all part of systematic epic-driven work:
- **Critical-journey testing platform** (#6524 Epics): Closed workstream items for journey catalog (#6516), evidence tiers (#6517), and release gates (#6518)
- **Extension policy & lifecycle**: Defined policy precedence (#6512), tenant API/UI (#6511), per-user credential binding (#6509)
- **Channel integration**: Canonical external-conversation binding (#6506), channel provenance in WebUI (#6507), Slack tool migration (#6502), messaging manifest opt-in (#6501), messaging profiles (#6500), Telegram lifecycle gate (#6497), provider event sync (#6508)
- **Extension persistence**: Normalized installation into lifecycle records (#6729), corrected memory provider lifecycle (#6730)

**Merged/closed PRs (15):**
- **Critical**: #6816 — Centralized channel ingress and scoped manifest commands, a security-hardening merge for Slack/Telegram command allowlisting
- **Testing infrastructure**: #6794 — Fuzzing untrusted boundaries (Retry-After, prompt tokens, LLM message count, tool-call ranking depth)
- **Bug fixes**: #6824 — Fixed silent retry-burn where model-stage failures were incorrectly retried; #6826 — Fixed LLM rate limits misclassified as auth failures
- **Workstream completions**: #6823 (persistence backend inventory coverage), #6825 (fault-profile x failure-fate crossing tests), #6828 (extension webhook ingress gating), #6832 (recovery bounded per run, not per stage)

**Key architectural PRs still open (active development):**
- #6691 — Refactoring composition assembly into focused builders (-9,421 lines)
- #6740 — TLS termination seam for sandbox egress proxy
- #6746 — Docker-connect retry, egress allowlist, shell limits (unwired to main)
- #6780 — Deep-link IronHub register/install gateway + private manifest source
- #6831 — Standardized messaging framework (host-owned ops with canonical contracts)

## Community Hot Topics
1. **[#6284: EPIC — error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)** (15 comments, 7 days old)
   The central quality initiative: every mid-run error must satisfy a five-part recoverability contract. Remains the most active issue, driving multiple PRs (#6824, #6826, #6832). The community/team need is clear: the model must never silently fail or waste retries on permanent errors. This epic is the project's top reliability priority.

2. **[#6820: IronHub reaches for unsigned catalog URL](https://github.com/nearai/ironclaw/issues/6820)** (2 comments, 1 day old)
   A trust-boundary issue where the agent fetches an unsigned catalog URL when `ironhub_search` returns empty results — the agent then trusts arbitrary external content. Filed separately from the IronHub port work (#6754) because it is a security incident, not a discovery bug. High attention likely.

3. **[#6810: Progressive tool disclosure as default](https://github.com/nearai/ironclaw/issues/6810)** (1 comment, 1 day old)
   Enhancement request to make progressive tool disclosure the safe default for Reborn, keeping large capability surfaces within bounded prompt budgets. Signals community desire for performance optimization without degrading usability.

4. **[#6814: Third-party skills trip prompt content denylist](https://github.com/nearai/ironclaw/issues/6814)** (1 comment, 1 day old)
   User-reported regression on 1.0.0 release: third-party skills containing "API key" in description fail every run. Follow-up to #5169/#5258 which only exempted certified skills. Demonstrates a gap in the denylist exception model.

## Bugs & Stability

### P1 (Production-critical)
- **[#6805: Instance intermittently returns service_unavailable ~every 30 min](https://github.com/nearai/ironclaw/issues/6805)** — Railway QA instance becomes unavailable for all requests. Likely related to the turn-state store latching issue (#6815, see below). **No fix PR yet.**
- **[#6815: Turn-state store latches degraded forever after write-behind flush failure](https://github.com/nearai/ironclaw/issues/6815)** — Observed on libSQL QA deploy; caused 30+ minutes of 503 errors until restart. Root cause identified: write-behind flush failure leaves store in permanent degraded state. **No fix PR yet**, but directly linked to #6805.

### P2 (Functional blockers)
- **[#6833: Notion tool fails to install](https://github.com/nearai/ironclaw/issues/6833)** — User reports installation failure/hang without clear error messaging. **No fix PR yet.**
- **[#6834: Slack setup fails in IronClaw](https://github.com/nearai/ironclaw/issues/6834)** — Auth flow does not complete, leaving extension unusable. **No fix PR yet.**
- **[#6806: Automations don't show in web chat](https://github.com/nearai/ironclaw/issues/6806)** — P2 bug_bash; automation output only visible on Automations page, not in chat. **No fix PR yet.**
- **[#6814: Third-party skills trip prompt content denylist](https://github.com/nearai/ironclaw/issues/6814)** — "API key" description kills every run on 1.0.0. **No fix PR yet.**

### Security
- **[#6820: IronHub reaches for unsigned catalog URL](https://github.com/nearai/ironclaw/issues/6820)** — Trust-boundary violation; agent fetches unsigned content after empty search results. **Fix being tracked in PR #6780.**
- **[#6807: NetworkTargetPattern host-pattern validators not enforced at type level](https://github.com/nearai/ironclaw/issues/6807)** — 92 construction sites bypass opt-in validators. **No fix PR yet.**
- **[#6835: MCP auth failures never raise re-auth gate](https://github.com/nearai/ironclaw/issues/6835)** — `McpError::AuthRequired` classified as `Client` error, preventing re-auth flow. **No fix PR yet.**

### Other bugs
- **[#6829: Telegram forum-topic delivery has no whole-path coverage](https://github.com/nearai/ironclaw/issues/6829)** — Missing `message_thread_id` could cause message misrouting. **Coverage gap identified; fix PR #6828 addresses related webhook ingress.**

## Feature Requests & Roadmap Signals
- **Progressive tool disclosure default** (#6810): Strong signal for Reborn architecture optimization. Likely to land in the next minor release given it's tagged `reborn` and `performance`.
- **Growth/usage analytics logging** (#6837): New epic filed today requesting minimal `info!`-level logging. Currently zero analytics signals exist in `ironclaw_telemetry`. Likely for v1.1 planning.
- **IronHub deep-link install flow** (PR #6780): Porting IronHub to Reborn with private manifest source. Stacked on #6754; likely to merge in current sprint.
- **Standardized messaging framework** (PR #6831): Host-owned standard ops with canonical contracts for Slack, Telegram, future channels. Major architecture piece; likely for next release.
- **Hermetic testing platform** (#6524): The epic is generating multiple workstream PRs (WS3/WS4/WS6/WS8 closed today). This is foundational infrastructure for release confidence.

## User Feedback Summary
- **Pain point — Denylist overreach**: Users on 1.0.0 cannot run third-party skills mentioning "API key" (#6814). This is a regression from #5258's fix, which only covered certified skills. Users want consistent denylist exemption for all skills.
- **Pain point — Installation failures**: Notion tool (#6833) and Slack (#6834) cannot be set up. The lack of clear error messaging compounds frustration — users see failure/hang with no actionable guidance.
- **Pain point — Visibility gaps**: Automations running invisibly (#6806) forces users to navigate away from chat to see results, disrupting workflow.
- **Pain point — Reliability**: Intermittent `service_unavailable` every 30 minutes (#6805) makes the service unreliable for production use. The turn-state store latching (#6815) suggests a fundamental resilience gap.
- **Pain point — Incomplete search results**: IronHub search returning 3 tools instead of 18 (#6821) or free-text matches read as complete catalog (#6821) — users cannot trust discovery results.

## Backlog Watch
- **[#5598: Release PR](https://github.com/nearai/ironclaw/pull/5598)** — Open since 2026-07-03 (26 days). Stalled release proposing breaking changes. The project has accumulated many fixes and features since then; this PR may need a refresh or a new release preparation branch.
- **[#5659: Tool-disclosure security fix](https://github.com/nearai/ironclaw/pull/5659)** — Open since 2026-07-05 (24 days). Fixes three leak vectors in tool-disclosure surface. Tagged `size: XL, risk: low`. Appears to be awaiting review or merge conflicts resolution.
- **No long-untouched issues**: All open issues were updated within the last 24 hours, indicating active triage. The project's maintainers are highly responsive.

---

*Project health: High activity with systematic epic-driven progress, but two P1 production bugs and a security trust-boundary issue require urgent attention. The stalled release pipeline (26 days) suggests the team is prioritizing architecture work over shipping.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **2026-07-29**.

---

## 1. Today's Overview
Today was a high-velocity day for the LobsterAI project, featuring **5 merged pull requests** against **3 open issues**. Activity was concentrated on the **renderer**, **OpenClaw runtime**, and **Windows installer** domains. While no new releases were cut today, the project demonstrated strong maintenance momentum, addressing both a long-standing configuration bug and a critical Windows installer backup logic flaw. The three active issues remain relatively low in community engagement, suggesting a focused development cycle rather than widespread user friction.

## 2. Releases
No new releases were published today. The most recent tagged release remains unspecified in this data window.

## 3. Project Progress
Five pull requests were merged/closed today, advancing several areas:

- **Runtime Safety (PR #2400):** Merged. Enforces a "safety-contract gate" at startup to ensure the bundled OpenClaw runtime only runs under LobsterAI's managed run-safety policy. Prevents "false-stop token burn" and retires the prompt-exposure-budget terminal kind. *[Link](https://github.com/netease-youdao/LobsterAI/pull/2400)*
- **Side Chat Feature (PR #2397):** Merged. Introduces a new `/btw` isolated floating side-chat panel for selected assistant text. Supports dragging, 8-direction resizing, and follow-up questions. The side-chat execution is isolated from the main conversation and routed through the OpenClaw utility stream path. *[Link](https://github.com/netease-youdao/LobsterAI/pull/2397)*
- **UI Refinement (PR #2399):** Merged. Hides the "Sites" navigation entry outside test mode, reducing UI clutter for production users. *[Link](https://github.com/netease-youdao/LobsterAI/pull/2399)*
- **Windows Installer Fix (PR #2398):** Merged. Fixes a critical bug where the Skills backup step misclassified a "no user skills" exit 0 as a successful backup, later surfacing as a spurious legacy-restore-backup-missing degraded installation state. Outcome is now driven by PowerShell helper exit codes. *[Link](https://github.com/netease-youdao/LobsterAI/pull/2398)*
- **Docs Fix (PR #2402):** Merged. Fixes Windows installer redirect handling to reject redirects instead of trusting `response.url`. *[Link](https://github.com/netease-youdao/LobsterAI/pull/2402)*

## 4. Community Hot Topics
Community engagement is currently low, with most issues receiving only single comments. The most discussed items:

- **#2401 – Skill Commercial Usage (1 comment):** A user is asking whether the PDF/Docs/PPTX/XLSX skills are from Anthropic's official set and whether those skills are commercially licensable. This signals a growing user base evaluating LobsterAI for production/business deployment. *[Link](https://github.com/netease-youdao/LobsterAI/issues/2401)*
- **#1236 – Plugin ID Mismatch Warning (1 comment, stale):** A long-standing configuration issue where `mcp-bridge` plugin entry keys don't match manifest IDs, producing warnings on every gateway restart. Active since April 2026 – represents user frustration with noise in startup logs. *[Link](https://github.com/netease-youdao/LobsterAI/issues/1236)*

## 5. Bugs & Stability
**Medium Severity:**
- **Plugin ID Mismatch Warning (#1236):** Every gateway restart produces unnecessary "Config warnings" for the `mcp-bridge` plugin. No associated fix PR exists. **Status:** Stale (3+ months). *[Link](https://github.com/netease-youdao/LobsterAI/issues/1236)*
- **Scheduled Task Creation Error (#2071):** User reports an unhandled error (with screenshot) when creating timed tasks on version 2026.5.27. No description beyond the image. **Status:** Stale (1 month). *[Link](https://github.com/netease-youdao/LobsterAI/issues/2071)*

**Low Severity (Fixed Today):**
- **Windows Installer – Corrupted Backup State (PR #2398):** Fixed. Spurious installation degradation state from misclassification of "no user skills." *[Link](https://github.com/netease-youdao/LobsterAI/pull/2398)*

## 6. Feature Requests & Roadmap Signals
- **Model Provider UX Enhancement (PR #1233 – Open, Stale):** A comprehensive feature to add official website links and "Get API Key" quick-links for each model provider, plus i18n support. This PR has been open since April and includes a fix for a duplicate URL table. If merged, it would significantly improve the onboarding experience for new model integrations. *[Link](https://github.com/netease-youdao/LobsterAI/pull/1233)*
- **Commercial Licensing Clarification (#2401):** The question about Anthropic skill commercial usage suggests users are hitting compliance boundaries. This may trigger a documentation update or formal licensing FAQ in the next release.

## 7. User Feedback Summary
- **Pain Points:**
  - **Configuration noise:** The `mcp-bridge` plugin ID warning (#1236) adds unnecessary startup friction.
  - **Scheduled task reliability:** A user encountered an error creating timed tasks without resolution (#2071).
  - **Windows installer flakiness:** Prior to today's fix, users experienced spurious "restore backup missing" warnings due to misclassified PS1 exit codes.
- **Use Cases:**
  - **Commercial document processing:** #2401 indicates users are deploying LobsterAI for PDF/Office skill pipelines in production environments.
  - **UI exploration:** The new `/btw` side chat panel (#2397) suggests demand for non-blocking, parallel interaction with AI output.
- **Satisfaction:** Generally neutral; the project is fixing bugs rapidly but users with stale issues may feel unheard.

## 8. Backlog Watch
The following items require maintainer attention:

1. **Issue #1236 – Plugin ID Mismatch Warning:** Open since April 1, 2026 (119 days). A trivial configuration alignment that generates visible warnings. High annoyance-to-effort ratio. *[Link](https://github.com/netease-youdao/LobsterAI/issues/1236)*
2. **Issue #2071 – Scheduled Task Error:** Open since May 28, 2026 (62 days). No maintainer response; user reported a visible error with screenshot. Likely a real functional blocker. *[Link](https://github.com/netease-youdao/LobsterAI/issues/2071)*
3. **PR #1233 – Model Provider UX Enhancement:** Open since April 1, 2026 (119 days). Contains a well-scoped feature with i18n support and a pre-existing fix. Risk of bit-rot. *[Link](https://github.com/netease-youdao/LobsterAI/pull/1233)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-29**.

---

## Moltis Project Digest – 2026-07-29

### 1. Today's Overview
The project is in a **high-velocity development phase**, with eight Pull Requests updated in the last 24 hours (two merged/closed, six open) against only one closed Issue. Activity is heavily concentrated on expanding Moltis’s surface area: instrumentation, external agent protocols (ACP), Slack integrations, and PWA reliability. The single bug fix merged today (archived cron sessions in the Web UI) resolves a recently reported UX issue. Maintainer bandwidth appears strong, though a backlog of six open PRs indicates sustained forward momentum.

### 2. Releases
**None.** No new versions were published in the reporting window.

### 3. Project Progress (Merged/Closed PRs)
Two PRs advanced to closure:

- **PR #1172 (merged):** *fix(web): hide archived cron sessions by default* – Addresses the bug reported in Issue #1111. Added a Playwright regression test for the fix. ([moltis-org/moltis #1172](https://github.com/moltis-org/moltis/pull/1172))
- **PR #1171 (merged):** *Move ACP selection into the chat model picker* – Consolidates the ACP client selector and removes the historical header selector, streamlining the composer interface. ([moltis-org/moltis #1171](https://github.com/moltis-org/moltis/pull/1171))

### 4. Community Hot Topics
No issues or PRs attracted significant comment or reaction volume in the last 24 hours. The most notable ongoing work is **PR #1169**, which exposes Moltis as an ACP agent via stdio—a foundational architecture change that enables cross-agent workflows. While silent in community engagement, this PR represents a major roadmap signal. [[PR #1169](https://github.com/moltis-org/moltis/pull/1169)]

### 5. Bugs & Stability
One bug was resolved in this window:

- **Issue #1111 (closed):** *Archiving a cron session has no visible effect* – **Severity: Low.** Users reported that toggling the archive state on a cron session in the Web UI did not visually hide the session. The UI lacked the shared archive-state preference for the Cron tab. Fix merged today via PR #1172. ([Issue #1111](https://github.com/moltis-org/moltis/issues/1111))

No new crashes, regressions, or high-severity bugs were reported.

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed as Issues, but the open PRs strongly signal the project’s next features:

- **Agent-to-agent protocol (ACP):** PR #1169 adds ACP stdio support, positioning Moltis as both an ACP client and host. Likely to land in the next release. ([PR #1169](https://github.com/moltis-org/moltis/pull/1169))
- **Observability infrastructure:** PR #1174 adds Langfuse v4 export, OTLP backends, and end-user reaction feedback. This suggests Moltis is preparing for production deployments requiring traceability. ([PR #1174](https://github.com/moltis-org/moltis/pull/1174))
- **Slack reliability:** PR #1166 adds per-message acknowledgment, delivery phases, and Block Kit support—a deep investment in Slack bot robustness. ([PR #1166](https://github.com/moltis-org/moltis/pull/1166))
- **CLI benchmarking:** PR #1175 adds a `moltis-ctl chat` runner designed for Harbor/Terminal-Bench, indicating a focus on headless evaluation and testing. ([PR #1175](https://github.com/moltis-org/moltis/pull/1175))

### 7. User Feedback Summary
- **Pain point resolved:** The archived cron sessions bug (Issue #1111) was a low-severity but visible UX friction. The user who reported it was using the latest version and included a thorough checklist, indicating an engaged but frustrated user.
- **Silent satisfaction:** No negative feedback was logged on the major open PRs, suggesting the maintainer-driven development is aligned with user expectations so far. The closed PR #1171 (moving ACP selection) likely resolves a workflow efficiency issue for users who frequently switch between provider and ACP-backed models.

### 8. Backlog Watch
- **PR #1170 (open, 3 days):** *fix(channels): gate /sh and privileged tools behind a per-account operators list* – A security-critical change that has not yet been reviewed. Separation of access from privilege is a hardening measure; delay could expose users to privilege escalation. Should be prioritized for review. ([PR #1170](https://github.com/moltis-org/moltis/pull/1170))
- **PR #1173 (open, 3 days):** *feat(pwa): make push notifications reliable and non-disruptive* – Enhances reliability for mobile/web PWA users. No reviewer activity in the last 24 hours. ([PR #1173](https://github.com/moltis-org/moltis/pull/1173))

No long-abandoned Issues or PRs (older than 7 days with no activity) were observed.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw project digest for July 29, 2026.

---

## CoPaw Project Digest — 2026-07-29

### 1. Today's Overview
CoPaw (QwenPaw 2.0.1) saw extremely high contributor activity on July 29, with 50 PRs updated in the last 24 hours (15 merged/closed) and 13 active issues. The community is focused on robustness and multi-tenant isolation, with major feature PRs landing for agent context compression and security. While no new releases were cut today, the project is clearly in a sprint, with critical bug fixes being submitted simultaneously with large architectural changes. The maintainer team appears responsive, with several PRs receiving “ready-for-human-review” labels and quick closures on straightforward fixes.

### 2. Releases
**No new releases.** The latest stable version remains QwenPaw 2.0.1. A pre-release version `2.1.0b1` is referenced in compatibility tooling, indicating an upcoming minor release is in active preparation.

### 3. Project Progress
15 PRs were merged or closed today, covering testing, stability, and infrastructure:

- **Testing infrastructure:** [#6489](https://agentscope-ai/QwenPaw/pull/6489) (merged) adds unit tests for the Driver subsystem and enforces a 50% coverage gate, closing a previous CI loophole.
- **Website & documentation:** Five PRs from contributor `yuluo1007` were merged, fixing Google Analytics tracking ([#6330](https://agentscope-ai/QwenPaw/pull/6330), [#6212](https://agentscope-ai/QwenPaw/pull/6212), [#5758](https://agentscope-ai/QwenPaw/pull/5758)), updating homepage copy for v2.0 ([#5940](https://agentscope-ai/QwenPaw/pull/5940)), and adding a blog ([#5825](https://agentscope-ai/QwenPaw/pull/5825)). A long-standing website UI fix for contributor styles was also closed ([#3332](https://agentscope-ai/QwenPaw/pull/3332)).
- **Plugin compatibility:** [#6532](https://agentscope-ai/QwenPaw/pull/6532) (merged) temporarily disables the upper-bound version check to fix plugin loading after the v2.1.0b1 bump.

### 4. Community Hot Topics
Several issues are drawing significant attention, reflecting core user pain points around isolation and usability:

- **Agent isolation (privacy):** Issue [#6461](https://agentscope-ai/QwenPaw/issues/6461) (👍2) describes a serious privacy leak where QQ-bound agents on the same server can read each other’s memories and settings. Issue [#6509](https://agentscope-ai/QwenPaw/issues/6509) follows up with a specific request for session-level workspace isolation using UUID-based directories. This is the top-voted active feature request.
- **MCP session recovery:** Issue [#6524](https://agentscope-ai/QwenPaw/issues/6524) reports that after an MCP server restart, the client cannot reconnect until the user manually runs `list mcp`. This blocks long-running server scenarios.
- **Systematic config corruption:** Issue [#6520](https://agentscope-ai/QwenPaw/issues/6520) details a Windows-exclusive `agent.json` corruption (BOM, missing quotes, double-encoding) that causes total system failure. The fix PR [#6528](https://agentscope-ai/QwenPaw/pull/6528) was submitted the same day, indicating rapid response.

### 5. Bugs & Stability
**Critical:**
- **`agent.json` corruption (Windows):** [#6520](https://agentscope-ai/QwenPaw/issues/6520) — systemic corruption across 20+ fields. **Fix PR exists:** [#6528](https://agentscope-ai/QwenPaw/pull/6528) submitted by `mohitdebian`. Status: open.
- **`/mission` command crash:** [#6533](https://agentscope-ai/QwenPaw/issues/6533) — TypeError from a mismatched function signature. Reported without a fix PR yet.

**High:**
- **NSIS installer infinite loop:** [#6534](https://agentscope-ai/QwenPaw/issues/6534) — Windows installer wrongly detects itself as “still running,” making installation impossible. **No fix PR yet.**
- **Skill tags lost on restart:** [#6537](https://agentscope-ai/QwenPaw/issues/6537) — Regression of a previously fixed bug. **No fix PR yet.**
- **ACP protocol missing models field:** [#6529](https://agentscope-ai/QwenPaw/issues/6529) — blocks external clients like Multica from discovering available models. **Fix PR exists:** [#6531](https://agentscope-ai/QwenPaw/pull/6531). Status: open by `niuda-kok`.

**Medium:**
- **MCP session recovery:** [#6524](https://agentscope-ai/QwenPaw/issues/6524) — No fix PR yet.
- **`view_video` silently drops video:** [#6474](https://agentscope-ai/QwenPaw/issues/6474) (closed) — fixed, but highlights a code-path gap in multimodal handling.
- **`execute_shell_command` output truncation:** [#6513](https://agentscope-ai/QwenPaw/issues/6513) / [#6514](https://agentscope-ai/QwenPaw/issues/6514) (both closed) — acknowledged as a known limitation.

### 6. Feature Requests & Roadmap Signals
The following high-signal feature requests point to short-term priorities:

- **Agent-level isolation:** [#6461](https://agentscope-ai/QwenPaw/issues/6461), [#6509](https://agentscope-ai/QwenPaw/issues/6509) — Likely to be addressed in the next minor release (2.1.0). A large PR [#6525](https://agentscope-ai/QwenPaw/pull/6525) already implements identity context propagation, a prerequisite for full isolation.
- **Visual context compression:** The draft PR [#6456](https://agentscope-ai/QwenPaw/pull/6456) (“Visual Compact”) introduces compression for long agent histories, which aligns with user requests for better context management.
- **Desktop GUI automation:** The massive PR [#6424](https://agentscope-ai/QwenPaw/pull/6424) adds native Windows/macOS automation via `computer_use`, suggesting a major feature push for desktop control.

### 7. User Feedback Summary
- **Pain Points:**
  - **Privacy/Security:** Users running multi-agent server setups report unintentional cross-agent memory leakage, which is a blocker for production deployment.
  - **Windows stability:** The NSIS installer bug and systematic config corruption are frustrating Windows users and preventing installation entirely.
  - **Reliability:** MCP disconnection and output truncation break automated workflows.
- **Satisfaction:**
  - The rapid closure of bugs like `view_video` and `execute_shell_command` truncation (acknowledged, if not fixed) shows that maintainers are listening to user reports.

### 8. Backlog Watch
- **[#6403](https://agentscope-ai/QwenPaw/issues/6403) — RobotFramework syntax highlighting** (July 23): A clean, low-effort UX enhancement for coding mode. No maintainer response. **Priority: Low, but easy win.**
- **[#6461](https://agentscope-ai/QwenPaw/issues/6461) — Agent isolation** (July 25): High community interest (👍2, 2 comments). No maintainer label or assignment, but the related PR [#6525](https://agentscope-ai/QwenPaw/pull/6525) and sub-issue [#6509](https://agentscope-ai/QwenPaw/issues/6509) indicate work is underway.
- **Large PRs needing review:**
  - [#6424](https://agentscope-ai/QwenPaw/pull/6424) (computer_use tool, +many files) — opened July 24, no reviewer activity yet.
  - [#6269](https://agentscope-ai/QwenPaw/pull/6269) (checkpoint management) — opened July 20, last updated July 29 but no merge.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-29

## 1. Today's Overview
ZeptoClaw shows light activity today with zero new issues and two dependency-related pull requests updated in the last 24 hours. No new releases were published. Project momentum remains low, primarily driven by automated dependency maintenance rather than feature development or community contributions. The open PR count suggests infrastructure upkeep is ongoing, but the lack of issues and community discussions indicates a quiet phase for the project.

## 2. Releases
None.

## 3. Project Progress
One pull request was closed/merged in the last 24 hours:
- **#613 [CLOSED]** — `chore(deps): bump rust from 1.95-slim-trixie to 1.96-slim-trixie`  
  *Author: dependabot[bot]* | [View PR](https://github.com/qhkm/zeptoclaw/pull/613)  
  A routine Docker base image update for the Rust toolchain, advancing from Debian Trixie-based slim image 1.95 to 1.96. This is a non-functional change ensuring the build environment stays current.

No feature work, bug fixes, or community-contributed code was merged today.

## 4. Community Hot Topics
No issues or PRs have generated comments or reactions in the last 24 hours. The only active pull request is:
- **#649 [OPEN]** — `chore(deps): bump rust from 1.95-slim-trixie to 1.97-slim-trixie`  
  *Author: dependabot[bot]* | [View PR](https://github.com/qhkm/zeptoclaw/pull/649)  
  This is a further dependency bump just opened, continuing the incremental Rust toolchain updates. No maintainer or community engagement detected.

Underlying need: The project appears to be in an automated maintenance cycle, with no active user discussions or feature debates.

## 5. Bugs & Stability
No bugs, crashes, or regressions reported today. The dependency bump PRs carry compatibility checks (via Dependabot) and show no reported failures. Project stability appears undisturbed.

## 6. Feature Requests & Roadmap Signals
No user-submitted feature requests or roadmap signals were observed in the last 24 hours. The absence of new feature discussions suggests the current focus is on dependency upkeep rather than new capabilities. No predictions for upcoming versions can be made from available data.

## 7. User Feedback Summary
No user feedback, pain points, or satisfaction signals were captured today. The project has zero open or recently updated issues, and no comments on PRs. This may indicate either a stable, satisfied user base or low community engagement.

## 8. Backlog Watch
- **No long-unanswered items identified.** The only open item (#649) was created within the last 24 hours and requires no immediate action beyond review. The project backlog appears clean.

---

**Overall Health Assessment:** ZeptoClaw is currently in a low-activity, maintenance-only phase. No community-driven development, bugs, or feature requests are visible. The project remains stable but lacks signs of active growth or user engagement.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-29

## Today's Overview

ZeroClaw shows **extremely high development velocity** today, with 49 active issues and 50 open pull requests updated in the last 24 hours — though notably **zero PRs were merged or closed**, indicating a bottleneck at the review/merge stage. The project is in a major architecture refactoring phase, with multiple RFCs proposing fundamental changes to session lifecycle ownership, attachment handling, and plugin architecture. A single contributor (@IftekharUddin) authored the majority of open PRs, suggesting a concentrated development effort that may be waiting on maintainer bandwidth. Security and stability remain top concerns, with high-risk bugs open in config flush consistency, test flakiness, and credential management.

---

## Releases

**No new releases today.** The latest binary version remains `0.8.3` (reported in Issue #9357). No release notes or changelogs were published in the 24-hour window.

---

## Project Progress

**Zero PRs were merged or closed today.** The project has 50 open PRs and 0 merged/closed, representing a complete standstill in terms of landed code. Key PRs awaiting review include:

- **#9418 (fix/mcp: multiplex stdio calls without replaying unknown outcomes)** — Critical MCP multiplexing fix for concurrent stdio calls, currently the largest open PR (size:XL) with `needs-author-action`
- **#9319 (refactor: seal the engine tool registry as ScopedToolRegistry)** — Architecture change from `&[Box<dyn Tool>]` to `&ScopedToolRegistry`, affecting the entire turn engine (size:XL)
- **#8985 (feat/slack: show visible lifecycle progress)** — Adds six typed agent lifecycle states for long-running Slack turns (size:XL)
- **#9281 (fix: roll back auto-created map aliases when config set fails)** — Transactional config mutation fix (size:S)
- **#9405 (feat: per-server custom CA trust for MCP)** — Adds `tls_ca_cert_path` for HTTP/SSE MCP transports (size:M)

**Issues closed today (7 total):**
- **#9357** — Cargo test flaky mutex poisoning poisoning (bug, CI, runtime)
- **#9474** — Auth profile store fails after `provider`→`model_provider` rename (bug, provider, security)
- **#9471** — Retire dormant cron test module (task)
- **#9380** — Vendored wit/v0 drifts fail silently at registration (bug, plugins)
- **#9178** — ACP embedded resource blob + deliver_file (feature, closed implemented)
- Two additional smaller items

---

## Community Hot Topics

### Most Active Issues

1. **#9127 — RFC: Abstract a `KeySource` trait (8 comments)**  
   *[zeroclaw-labs/zeroclaw Issue #9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)*  
   Proposes classifying master-key material by source/deployment form for ZeroClaw's `enc2:` ciphertext format. The 93 `#[secret]` annotated fields and 5 credential classes suggest this is foundational for enterprise deployment security models.

2. **#6157 — Nextcloud Talk wrong bot message API (6 comments)**  
   *[zeroclaw-labs/zeroclaw Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)*  
   Long-running (since April 27) bug where the bot secret is passed incorrectly in the Nextcloud Talk API URL. Marked `status:in-progress` but continues accumulating comments — suggests a stubborn integration issue.

3. **#9357 — CI flaky test poisoning global mutex (6 comments, now closed)**  
   *[zeroclaw-labs/zeroclaw Issue #9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)*  
   Despite being closed, this was today's highest-severity resolved issue. The `zeroclaw-runtime` lib test fails in 19 of 20 runs due to a flaky assertion that poisons a global mutex.

4. **#8654 — skill-review fork panics on out-of-range slice (5 comments)**  
   *[zeroclaw-labs/zeroclaw Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)*  
   Process-killing panic (SIGSEGV under `panic=abort`) after tool-heavy turns. Still open and `in-progress` — this is a stability blocker for users with multi-tool workflows.

5. **#9487 — RFC: Runtime-owned conversation sessions (3 comments, created today)**  
   *[zeroclaw-labs/zeroclaw Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)*  
   Proposes making `zeroclaw-runtime` the single owner of conversation execution, with WebSocket, dashboard, channels, and ACP becoming thin transport adapters. This is a major architectural shift.

### Analysis
The community is deeply engaged in architectural RFC discussions (sessions, attachments, plugin migration) while simultaneously reporting severe stability bugs (SIGSEGV, mutex poisoning, credential failures). There's a tension between forward-looking design and maintaining production stability.

---

## Bugs & Stability

### Critical (P1, S1-S2)
- **#9397 — WhatsApp empty `allowed_groups` admits all groups (P1, security)** — Default empty list currently permits every group; fix proposed but RFC still `needs-maintainer-review`
- **#9474 — Auth profile store fails after rename (P1, S1, now closed)** — `AuthProfile` now requires `model_provider` but older stores have `provider` — completely blocked authentication (resolved)
- **#9492 — `auth refresh` dead-ends on rotated OpenAI refresh token (P1)** — Single-use tokens from external CLI create unrecoverable state
- **#9357 — CI test flakes poison global mutex (P1, now closed)** — 95% failure rate on `master`
- **#9284 — Config flush overwrites concurrent writes (P1)** — Race condition in `RpcDispatcher::flush_config`

### High (P2, S2)
- **#8654 — skill-review fork SIGSEGV** — Process-killing panic after tool-heavy turns
- **#9332 — Multimodal context meter undercounts image-heavy requests** — Undercounts images, then spikes and collapses
- **#9486 — High-entropy detector redacts Solana wallet addresses** — Telegrams blocks legitimate crypto addresses despite `high_entropy_tokens=false`
- **#8760 — Daemon-owned agent output leaks to daemon stdout** — User-facing model output mixed with daemon logs
- **#6724 — Empty Signal/Voice channel credentials crashloop supervisor** — 2-second restart cycle

### Medium (P3)
- **#6724 (noted above)** — Empty credential crashloop

### Fix PRs Available
- **#9478** — Fix: notify sender when precheck declines (addresses #9465)
- **#9401** — Fix: preserve shell cwd across sandbox wrappers (security)
- **#9418** — Fix: MCP stdio multiplexing (critical for concurrent tool calls)
- **#9405** — Per-server custom CA trust (enhancement with security implications)
- **#9299** — Fix: default `context_compression.enabled` to false

---

## Feature Requests & Roadmap Signals

### Likely ahead of next release
1. **#8850 — Move optional channels/tools to runtime WASM plugins** — Tracker for the major plugin migration initiative; this would dramatically reduce binary size
2. **#9487 — Runtime-owned conversation sessions** — Architectural shift to single-owner session lifecycle
3. **#9488 — Unified attachment architecture** — Common handling for web chat and channel attachments
4. **#9521 — Map MCP image content to vision pipeline** — Bridges MCP `type:image` blocks into multimodal vision providers
5. **#9171 — ZeroCode modifier semantics independent of key characters** — Making macOS Command key behavior explicit

### Predictions
The **runtime plugin migration** (#8850) and **session unification** (#9487) RFCs are the two most significant architectural changes on the roadmap. If these land, they will fundamentally change how channels, tools, and web interfaces interact with the core runtime. Given the volume of open RFCs and PRs, the next release will likely include:
- MCP stdio multiplexing fix (#9418)
- Config flush atomicity fix (#9281)
- Auth profile migration fix (#9474, already closed)
- Per-server CA trust for MCP (#9405)

---

## User Feedback Summary

### Pain Points
1. **Telegram channel broken for crypto users** — High-entropy detector blocks legitimate wallet addresses with no admin bypass; user koshak01 reports agent "cannot state a wallet address" ([#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486))
2. **Auth failures after provider rename** — Multiple users (JordanTheJet, #9474) blocked by `model_provider` field requirement with no migration path; still affecting `auth refresh` with rotated tokens (#9492)
3. **Channels silently fail** — User ZiBibro reports channel messages that pass precheck but fail to deliver text, showing only an emoji reaction ([#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465))
4. **Context exhaustion but no terminal status** — Long-running tasks stop without clear user-facing reason (#8758)
5. **ZeroCode modifier confusion** — macOS users struggle with Control vs Command key semantics (#9171)
6. **Agent crashes on tool-heavy turns** — SIGSEGV after complex multi-tool interactions (#8654)

### Satisfaction Signals
- The RFC process is well-used (7+ RFCs active) with clear templates and maintainer sponsorship
- Contributors are actively submitting fixes for reported bugs (IftekharUddin alone has ~15+ open PRs)
- The architecture discussions show a maturing project that is planning for scale

### Underlying Themes
Users want **reliable authentication**, **clear error messages** (especially in channels), **crypto-friendly content handling**, and **stable long-running agent behavior**. The shift toward runtime plugins and session unification suggests the maintainers recognize the complexity burden of compile-time features.

---

## Backlog Watch

### Stale High-Impact Issues
1. **#6157 — Nextcloud Talk wrong bot message API**  
   *[Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)*  
   Open since April 27 (3+ months), 6 comments, `status:in-progress`. Integration blockers for Nextcloud users.
   
2. **#7904 — always-inject SKILL.md frontmatter broken in compact mode**  
   *[Issue #7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904)*  
   Open since June 17 (6 weeks), only 1 comment. Marked `in-progress` but no associated PR.

3. **#8691 — Restore ADR baseline and audit RFC decision records**  
   *[Issue #8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)*  
   Tracker for architectural decision records; open since July 4 with no activity since July 6.

4. **#8692 — Maintainer decision queue for RFCs and design issues**  
   *[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)*  
   Meta-issue for maintainer attention; open since July 4 with no substantive updates.

### PRs Awaiting Maintainer Review (no updates >7 days)
- **#9329** — Refactor ZeroCode slash commands to shared catalogue (since July 24, `needs-author-action`)
- **#9296** — JSON envelopes for config patch errors (since July 23)
- **#9281** — Roll back auto-created map aliases on config set failure (since July 23)
- **#9323** — Execution-tree iteration budget ownership RFC (since July 24)

### Concern
The **50 open PRs and 0 merged** today, combined with several issues languishing for 3+ months, suggests a significant maintainer bottleneck. The `needs-maintainer-review` tag appears on several high-risk RFCs (#9127, #9397, #9464) and the maintainer decision queue (#8692) has been open for 25 days without resolution. This backlog could slow adoption if critical bugs remain unpatched.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*