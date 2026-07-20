# OpenClaw Ecosystem Digest 2026-07-20

> Issues: 345 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-20 03:21 UTC

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

Here is the project digest for the OpenClaw project, based on the provided GitHub data.

---

## OpenClaw Project Digest - 2026-07-20

### 1. Today's Overview
OpenClaw is under extremely high development pressure, with **500 pull requests** and **345 issues** updated in the last 24 hours. The project remains in a highly active state, dominated by a focused push to harden security and fix regression bugs introduced in recent releases. The volume of activity is significantly above average, indicating a major sprint or incident response, with core maintainers (steipete, snotty) driving critical fixes across the gateway, agents, and UI. Key themes include preventing agent credential leaks (masked secrets), improving subagent session reliability, and addressing a wave of regressions, particularly from the `2026.7.1` release.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
In the last day, **130 pull requests** were merged or closed. This represents a significant volume of bug fixes and feature integration. Key areas of progress include:
- **Foundation & Gateway:** Fixes to onboarding to preserve existing gateway settings on rerun ([PR #111569](https://openclaw/openclaw/pull/111569)), and a fix for running Windows exit watchers when the ComSpec variable is blank ([PR #111260](https://openclaw/openclaw/pull/111260)).
- **Agent Loop & Sessions:** A major fix was merged to prevent the agent from re-running tasks after a CLI-to-Gateway disconnect ([PR #111154](https://openclaw/openclaw/pull/111154), closing [#98200](https://openclaw/openclaw/issue/98200)). The context limit discovery system was improved to respect dynamically detected limits over static defaults ([PR #106930](https://openclaw/openclaw/pull/106930)).
- **Extensions & Security:** Multiple PRs were advanced to harden secret resolution across various providers, including Moonshot (Kimi) search ([PR #104812](https://openclaw/openclaw/pull/104812)), MiniMax search ([PR #104667](https://openclaw/openclaw/pull/104667)), and Gemini search ([PR #104672](https://openclaw/openclaw/pull/104672)).

### 4. Community Hot Topics
The most engaged conversation centers on a foundational platform need:
- **Multi-Platform Parity (Linux/Windows):** Issue [#75](https://openclaw/openclaw/issue/75) requesting Linux and Windows Clawdbot apps has **114 comments** and **80 reactions**, making it the single most discussed topic. This demonstrates a massive demand for the agent to be usable as a primary desktop application outside of macOS.
- **Telegram & Bot Ecosystem:** Issue [#79077](https://openclaw/openclaw/issue/79077) seeks support for Telegram's new "Guest Bots" and "Bot-to-Bot" features, with **11 comments** and **8 upvotes**. This shows the community is eager to stay on the cutting edge of messaging platform capabilities.
- **Approval & Policy Workflow:** Feature requests for "Pre-response enforcement hooks" ([#13583](https://openclaw/openclaw/issue/13583)) and "exec-approvals denylist" ([#6615](https://openclaw/openclaw/issue/6615)) have garnered **14** and **8 comments** respectively, highlighting a user need for more robust, programmable guardrails to control agent behavior in production-like scenarios.

### 5. Bugs & Stability
A significant wave of regressions was reported, primarily targeting the `2026.7.1` release.
- **Critical / P1 Regressions:**
    - **Telegram DM Fallback ([#111519](https://openclaw/openclaw/issue/111519)):** A regression in `2026.7.2-beta.3` causes Telegram DM replies to lose ownership and only be delivered through a fallback path.
    - **Session Context Overcount ([#108238](https://openclaw/openclaw/issue/108238)):** In `2026.7.1`, the session context window incorrectly counts cache reads, leading to false context-overrun errors and session compaction failures.
    - **Cron Tool Schema Incompatibility ([#108580](https://openclaw/openclaw/issue/108580)):** A `2026.7.1` regression breaks the cron tool schema for users of llama.cpp's strict grammar-constrained tool calling, causing all requests to fail.
    - **Gateway Crash Loop ([#85246](https://openclaw/openclaw/issue/85246)):** A "UI Update" button press can deadlock the Gateway process when installed globally via npm and managed by launchd.
- **High Severity / P2 Bugs:**
    - **Memory Dreaming Pegs Gateway ([#99910](https://openclaw/openclaw/issue/99910)):** The automatic "memory dreaming" task hangs the gateway's main thread for ~10 minutes, causing a total system outage for some users.
    - **Exec Tool Wedge ([#102006](https://openclaw/openclaw/issue/102006)):** A regression from PR #94412 causes the `exec` tool to hang indefinitely after a previous command is aborted. A fix is reportedly already shaped.
    - **Broken Browser Tool ([#44431](https://openclaw/openclaw/issue/44431)):** A comprehensive field report outlines 7 critical issues with the browser automation tool, including a lack of CSS selector support and unreliable element interaction.

### 6. Feature Requests & Roadmap Signals
This data suggests a heavy focus on **agent security and governance** in the near-term roadmap.
- **Next Version Likely Includes:**
    - **Secret Masking:** The "Masked Secrets" ([#10659](https://openclaw/openclaw/issue/10659), 4 👍) and "Memory Trust Tagging by Source" ([#7707](https://openclaw/openclaw/issue/7707)) features are likely candidates for the next release to address the core security concerns raised by the community.
    - **Subagent Reliability:** Patches to fix subagent delivery failures ([#92076](https://openclaw/openclaw/issue/92076)) and orchestration in cron ([#92369](https://openclaw/openclaw/issue/92369)) are critical for cron-based workflows and are likely being prioritized.
- **Future Roadmap Signals:**
    - **"Everything is a Cron" ([#110950](https://openclaw/openclaw/issue/110950)):** A proposal from a maintainer (steipete) to unify heartbeats, watchers, and scheduled automation into a single cron primitive signals a major architectural simplification.
    - **Skill Permission Standard ([#12219](https://openclaw/openclaw/issue/12219)):** The community is calling for a `skill.yaml` manifest to enforce permissions on third-party skills, indicating a move toward a more secure and manageable plugin ecosystem.

### 7. User Feedback Summary
User sentiment is a mix of frustration with current instability and high satisfaction with the project's potential.
- **Pain Points:**
    - **Instability on New Releases:** Users are expressing significant frustration over regression bugs in `2026.7.1`, with one user simply reporting "Agent failed before reply" ([#108075](https://openclaw/openclaw/issue/108075)). This suggests the release process may need more rigorous testing.
    - **Missing Desktop Support:** The overwhelming attention on Issue [#75](https://openclaw/openclaw/issue/75) for Linux/Windows apps shows a strong negative sentiment from users who feel locked out of the ecosystem.
    - **Hard-to-Diagnose Failures:** Bugs like the "silent subagent failure" ([#39248](https://openclaw/openclaw/issue/39248)) and the "memory narrative text being silently discarded" ([#87182](https://openclaw/openclaw/issue/87182)) are causing data loss with no error messages, leading to deep user frustration.
- **Use Cases:** Users are actively pushing OpenClaw into high-stakes domains (quant finance, operations) with feature requests for hard enforcement hooks ([#13583](https://openclaw/openclaw/issue/13583)) and external approval resolvers ([#97152](https://openclaw/openclaw/issue/97152)). This indicates an expanding user base that is moving beyond personal automation into professional and production workloads.

### 8. Backlog Watch
Several high-priority issues remain open without a clear fix, requiring maintainer attention.
- **[#70024](https://openclaw/openclaw/issue/70024) - Channel Stop Timeout (P1):** A known bug where a channel timeout leaves it permanently dead, with no recovery mechanism.
- **[#83337](https://openclaw/openclaw/issue/83337) - Plugin/Core Version Drift (P1):** Upgrading the core can silently break channel plugins if their versions don't align. This is a systemic risk for users managing multiple installations.
- **[#103198](https://openclaw/openclaw/issue/103198) - WebChat Image Attachments Broken (Bug):** Images sent via WebChat are not mapped to the correct file path, breaking a core feature of the web UI.
- **[#111506](https://openclaw/openclaw/issue/111506) - Session Lock Contention (P2):** A new bug report detailing rapid-fire requests causing session lock contention with large conversation histories on LM Studio, a popular local inference backend.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries for July 20, 2026.

---

### Cross-Project Ecosystem Report: Personal AI Assistant Open-Source Landscape
**Date:** 2026-07-20

### 1. Ecosystem Overview
The open-source personal AI assistant ecosystem is currently marked by a bifurcation between high-velocity, mainstream projects and a long tail of smaller or dormant efforts. The dominant themes are security hardening (credential masking, sandbox fallbacks), platform expansion (Windows/Linux parity), and architectural consolidation (moving from monolithic designs to multi-agent and plugin frameworks). Activity is concentrated in a handful of projects—**OpenClaw**, **IronClaw**, and **NanoClaw**—which are driving the ecosystem forward with aggressive bug-fixing sprints and significant refactoring. Meanwhile, projects like **Moltis**, **TinyClaw**, and **NullClaw** show minimal to no activity, highlighting a growing divergence between community-supported standards and experimental or abandoned forks.

### 2. Activity Comparison

| Project | Issues (Open/Updated) | PRs (Open/Merged-Closed) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | High (345 updated) | 500 updated / 130 merged | No new release | 9/10 – Extreme activity, focused on regressions |
| **NanoBot** | Low (7 updated) | 33 updated / 9 merged | No new release | 6/10 – Moderate activity, good throughput |
| **Hermes Agent** | High (50 updated) | 50 updated / 4 merged | No new release | 5/10 – High churn but low throughput, growing bottleneck |
| **PicoClaw** | Low (5 updated) | 3 updated / 0 merged | No new release | 4/10 – Low activity, growing stale backlog |
| **NanoClaw** | Moderate (data suggests active) | 30 updated / 15 merged | No new release | 8/10 – Strong core-team throughput, major cleanup |
| **NullClaw** | 0 | 0 | Stalled | 1/10 – Inactive |
| **IronClaw** | Low (7 active) | 50 updated / 30 merged | Pending (PR #5598) | 9/10 – High refactoring velocity, disciplined execution |
| **LobsterAI** | Low (3 updated) | 3 updated / 0 merged | No new release | 4/10 – Low activity, stale items |
| **TinyClaw** | 0 | 0 | Stalled | 1/10 – Inactive |
| **Moltis** | 0 | 0 | 1 maintenance release | 2/10 – Minimal community engagement |
| **CoPaw** | Moderate (15 updated) | 13 updated / 2 merged | Imminent (v2.0.1b1) | 7/10 – Active, growing backlog, welcoming first-time contributors |
| **ZeptoClaw** | 0 | 0 | Stalled | 1/10 – Inactive |
| **ZeroClaw** | High (34 updated) | 50 updated / 2 merged | No new release | 8/10 – High activity, focused on v0.9.0 security milestone |

*Health Score is a qualitative assessment based on activity volume, bug-fix velocity, release cadence, and community responsiveness (1=Inactive, 10=Highly Active & Healthy).*

### 3. OpenClaw's Position
OpenClaw retains its position as the **most active and central reference implementation** in the ecosystem. Its primary advantages are its **scale** (500 PRs and 345 issues in 24 hours) and its **community gravity**, which generates a high volume of bug reports and feature requests that drive the entire ecosystem forward. However, this scale is a double-edged sword: the project suffers from significant regression instability, particularly in its `2026.7.1` release, leading to user frustration. Technically, OpenClaw is pushing harder on **agent security (secret masking)** and **governance (enforcement hooks)** than its peers. While **IronClaw** is more disciplined in its architectural refactoring ("Reborn") and **NanoClaw** excels in platform integration (multiple channels), OpenClaw’s sheer volume of community feedback and feature requests gives it a unique ability to shape the broader ecosystem’s priorities, even if its own stability sometimes lags.

### 4. Shared Technical Focus Areas
Several common technical requirements are emerging across multiple projects, indicating industry-wide priorities:

- **Multi-Platform & Channel Expansion:** The demand for breaking out of a single ecosystem (e.g., macOS/Telegram) is universal.
    - **OpenClaw, Hermes Agent, ZeroClaw** are all actively fixing Windows-specific issues.
    - **NanoClaw** and **Hermes Agent** are aggressively adding new channels (WhatsApp, Telegram, Discord, WeChat, Teams).
- **Security & Governance:** Developers are demanding more robust guardrails for production use.
    - **OpenClaw, NanoBot, ZeroClaw** are all implementing credential masking, secret resolution hardening, and sandbox fallback mechanisms.
    - **OpenClaw** and **ZeroClaw** are addressing "confused deputy" problems where agents can bypass permissions.
- **Reliability & State Management:** Silent failures and infinite loops are a critical pain point.
    - **NanoBot** and **Hermes Agent** are patching channel hang/loop conditions.
    - **IronClaw** is overhauling turn-state durability for crash recovery.
    - **OpenClaw, CoPaw, PicoClaw** are fixing agent loop hangs and repetitive output bugs.
- **Plugin/Hook Standardization:** The ecosystem is moving toward formal, non-hacky extension systems.
    - **NanoClaw** (#3091) and **Hermes Agent** (#67798) are calling for composable, standardized hook interfaces for skills/plugins.
- **Prompt Caching & Performance:** Local model users are a vocal minority demanding parity with cloud providers.
    - **NanoBot** (#4867) is heavily discussing prompt caching for Ollama.
    - **PicoClaw** (#3251) is working on capturing prompt cache metrics for Anthropic.

### 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | NanoClaw | CoPaw |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Security, Governance, Core Stability | Architecture Refactoring, Platform Maturity | Multi-Channel Integration, MCP Infrastructure | Agent Behavior & Workflow UX |
| **Target User** | Production/AIOps teams, power users | Internal development team & early adopters | Community contributors, multi-channel bot operators | Developers, workflow automation users |
| **Technical Approach** | Monolithic reference with heavy modularization | Disciplined slice-based refactoring (feature flags) | Highly modular with MCP remote connection support | Agent-centric with sandbox & governance features |
| **Key Pain Point** | Regression instability in new releases | Slow to release (stale release PR) | Silent data loss in WhatsApp groups | Repetitive agent output, growing open PRs |

### 6. Community Momentum & Maturity

- **Tier 1: Rapidly Iterating & High Velocity**
    - **OpenClaw, IronClaw, NanoClaw, ZeroClaw** – These projects show a high volume of daily merges, active core teams, and clear roadmaps. They are shaping the ecosystem's future. IronClaw's disciplined "Reborn" refactoring is a standout example of structured engineering.
- **Tier 2: Active with Growing Needs**
    - **NanoBot, Hermes Agent, CoPaw** – Active development but with signs of bottleneck (slow PR review in Hermes, stale issues in NanoBot, growing PR wait times in CoPaw). They are transitioning from experimental to more formal project management.
- **Tier 3: Low Activity / Stalled**
    - **PicoClaw, LobsterAI** – Moderate activity with a growing backlog of stale items. These projects risk falling behind in security and compatibility.
- **Tier 4: Inactive / Ghost Towns**
    - **NullClaw, TinyClaw, ZeptoClaw** – Zero activity. These represent dead-ends for the ecosystem and pose a risk for users looking for active support.

### 7. Trend Signals
The community feedback across all projects points to several key trends that are valuable for AI agent developers:

1.  **The "Security Wall" is the New Bottleneck:** As agents move into production (quant finance, operations), the community's top concern has shifted from simple functionality to **hard enforcement hooks, credential masking, and policy-driven approval workflows**. This signals a maturation of the technology, where the core problem is no longer *can* the agent do it, but *should* the agent do it.
2.  **Agent Reliability is a Trust Issue:** The widespread reports of *silent failures* (WhatsApp groups, cron kanban workers, session lock contention) and *agent "laziness"* (non-execution of stated actions) are eroding user trust. **Resilience and observability** are no longer optional; they are fundamental requirements for user adoption.
3.  **The "Plugin Problem" is Universal:** Multiple projects are independently calling for a **standardized hook/plugin architecture** to replace fragile "string-patching" of core sources. This is a clear sign that the ecosystem is outgrowing its early, hacky extension patterns and needs a formal, safe, composable system.
4.  **Local-First is a Growing, Vocal Minority:** Despite the cloud-centric nature of many projects, users running models on **Ollama, LM Studio, and llama.cpp** are a significant and vocal group demanding performance parity (prompt caching) and support for local hardware quirks. Developers who ignore this segment risk alienating a core part of the open-source community.
5.  **Platform Agnosticism is a Competitive Advantage:** Projects actively expanding to **Windows, Linux, and a wide variety of messaging channels (Telegram, WeChat, WhatsApp, Discord)** are seeing the most positive community engagement and user growth. Single-platform projects are becoming niche.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-20

---

## 1. Today's Overview

NanoBot saw elevated activity on 2026-07-20, with **33 pull requests updated** (9 merged/closed) and **7 issues updated** (6 closed, 1 remaining open). Despite zero new releases, the project shows strong developer momentum across bug fixes, multi-agent architecture proposals, provider integrations, and channel reliability improvements. The maintainers appear actively reviewing PRs, with several high-priority fixes (P0/P1) progressing toward merge. Community engagement remains healthy, with substantive discussions around prompt caching and agent responsiveness.

---

## 2. Releases

**No new releases today.** The latest release remains at the version noted previously. Given the volume of merged PRs and resolved issues, a patch or minor release integrating multiple bug fixes and enhancements may be imminent.

---

## 3. Project Progress

**Merged/Closed PRs today (9 total):** While the digest lists 33 PRs, the data indicates 9 were either merged or closed. Notable advances include:

- **Security fix:** [#4987 [P0]](https://github.com/HKUDS/nanobot/pull/4987) — binds workspace validation to opened file handles, preventing TOCTOU (time-of-check/time-of-use) vulnerabilities in `read_file`, `write_file`, and `edit_file`. This is a critical security hardening for filesystem operations.

- **Channel reliability:** Several fixes targeting channel hang/loop conditions progressed, including [`#4982`](https://github.com/HKUDS/nanobot/pull/4982) (Feishu fallback text chunk hang) and [`#4981`](https://github.com/HKUDS/nanobot/pull/4981) (Telegram markdown split hang) — both address infinite loops with zero/negative limits.

- **Provider expansion:** PR [`#4965`](https://github.com/HKUDS/nanobot/pull/4965) adding ModelScope provider support and [`#4996`](https://github.com/HKUDS/nanobot/pull/4996) for Atlas Cloud provider were submitted, expanding the ecosystem of supported backends.

- **OAuth status visibility:** PR [`#4689`](https://github.com/HKUDS/nanobot/pull/4689) improves OAuth provider status display and token expiry warnings — addressing long-standing user pain points.

---

## 4. Community Hot Topics

### Most Active Issues

1. **[#4867 — Prompt caching enhancement (11 comments, closed)](https://github.com/HKUDS/nanobot/issues/4867)**  
   *Author: The-Markitecht*  
   This issue generated the heaviest discussion. The user reports that NanoBot adds *60 seconds per turn* when using Ollama, making local model execution "totally unusable." The core request is to **preserve exact prompt prefixes for prompt-caching**, enabling reused KV caches across turns. The closure suggests maintainers accepted this feedback, and companion PR [`#4998`](https://github.com/HKUDS/nanobot/pull/4998) documents Ollama prompt-cache diagnostics.

2. **[#1459 — Codex-5.3-codex "lazy" execution (open, 6 comments, 2 👍)](https://github.com/HKUDS/nanobot/issues/1459)**  
   *Author: intelliot*  
   A long-running issue (since March 2026) where the agent claims it will perform actions but never actually executes them. Users express frustration with agent reliability. The issue remains **open** — this is a **concern** for project credibility.

3. **[#4823 — WhatsApp group regression (closed, 4 comments)](https://github.com/HKUDS/nanobot/issues/4823)**  
   *Author: mxnbf*  
   A regression where all group responses arrive in every group, breaking the `group_id` allowlist. Closed, indicating the fix landed.

### Most Active Pull Requests (by update frequency / community engagement)

- [`#4995`](https://github.com/HKUDS/nanobot/pull/4995) — Dependency manifest migration (CI/CD, install reliability)
- [`#4768`](https://github.com/HKUDS/nanobot/pull/4768) / [`#4838`](https://github.com/HKUDS/nanobot/pull/4838) — Two competing QQ channel exponential backoff fixes
- [`#4964`](https://github.com/HKUDS/nanobot/pull/4964) — Live image generation settings in WebUI

### Underlying Needs
- **Performance parity** between local (Ollama) and cloud providers
- **Agent reliability** — users expect the agent to *actually execute* stated actions
- **Stable multi-group communication** — channel isolation is critical for production WhatsApp deployments

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR Exists? |
|----------|-------|--------|----------------|
| **P0 (Critical)** | [`#4987`](https://github.com/HKUDS/nanobot/pull/4987) — TOCTOU race condition in filesystem operations | **PR open** | ✅ Yes (same PR) |
| **P1 (High)** | [`#4995`](https://github.com/HKUDS/nanobot/pull/4995) — Incomplete channel dependency migration | PR open | ✅ Yes |
| **P1 (High)** | [`#4991`](https://github.com/HKUDS/nanobot/issues/4991) — Local triggers report success after target channel disabled (wasted inference) | **Closed** | ✅ |
| **P2 (Medium)** | [`#4975`](https://github.com/HKUDS/nanobot/issues/4975) — CLI apps lose UTF-8 output on Windows non-UTF-8 locales | **Closed** | ✅ |
| **P2 (Medium)** | [`#4980`](https://github.com/HKUDS/nanobot/issues/4980) — GitStore fails when workspace ≠ working directory | **Closed** | ✅ |
| **P2 (Medium)** | [`#4982`](https://github.com/HKUDS/nanobot/pull/4982) — Feishu channel hang on zero-length chunk limit | **PR open** | ✅ Yes |
| **P2 (Medium)** | [`#4981`](https://github.com/HKUDS/nanobot/pull/4981) — Telegram markdown split hang | **PR open** | ✅ Yes |
| **Unrated** | [`#4823`](https://github.com/HKUDS/nanobot/issues/4823) — WhatsApp group delivery regression | **Closed** | ✅ |

**Assessment:** Today's bug landscape is dominated by *channel hang/loop* conditions (3 separate instances) and *Windows locale encoding* (1). The P0 security fix for filesystem TOCTOU is the most urgent. All reported bugs have associated fix PRs — good signal for maintainer responsiveness.

---

## 6. Feature Requests & Roadmap Signals

### Approved / Merged This Period
- **Ollama prompt cache diagnostics** ([#4998](https://github.com/HKUDS/nanobot/pull/4998)) — tool-prompt cache guide for local models
- **Live image generation settings** ([#4964](https://github.com/HKUDS/nanobot/pull/4964)) — hot-apply provider/model/settings without restart

### Proposed This Period
1. **Multi-agent collaboration** ([#4999](https://github.com/HKUDS/nanobot/issues/4999)) — A substantial proposal to evolve the current subagent system into true multi-agent collaboration with persistent identities, shared task state, and agent-to-agent messaging. *Likely for next major version (e.g., v0.3 or v1.0).*

2. **Secure browser companion launch** ([#4997](https://github.com/HKUDS/nanobot/pull/4997)) — HttpOnly, SameSite session-backed WebUI companion for secure remote access.

3. **ModelScope provider** ([#4965](https://github.com/HKUDS/nanobot/pull/4965)) — Support for Chinese open-source models (Qwen, DeepSeek, Kimi, GLM via ModelScope API).

4. **Session-bound model presets** ([#4866](https://github.com/HKUDS/nanobot/pull/4866)) — Persist model selection per session, making `/model` truly session-scoped.

### Prediction for Next Release
The next release will likely include: ModelScope provider, Ollama cache diagnostics, multi-channel hang fixes, filesystem security hardening, and OAuth status improvements. The multi-agent proposal (#4999) is a longer-term roadmap signal.

---

## 7. User Feedback Summary

### Pain Points (Actionable)
- **"Totally unusable with Ollama + 32GB VRAM"** ([#4867](https://github.com/HKUDS/nanobot/issues/4867)) — Latency is the #1 complaint. Local model users feel abandoned. *Response: maintainers have responded with diagnostic documentation.*
- **"Nanobot is lazy and doesn't actually execute"** ([#1459](https://github.com/HKUDS/nanobot/issues/1459)) — Agent reliability trust issues. *Unresolved for 4+ months.*
- **"Group allow is broken"** ([#4823](https://github.com/HKUDS/nanobot/issues/4823)) — WhatsApp users frustrated by regression. *Now closed/fixed.*

### Use Cases Observed
- **Local LLM deployment** (Ollama, self-hosted models) — dominant use case in high-activity issues
- **Multi-group chat management** (WhatsApp, QQ, WeChat, Feishu, Telegram)
- **Windows deployment** — encoding issues suggest significant Windows user base
- **Cloud provider diversity** — requests for ModelScope, Atlas Cloud, Nimble indicate demand for alternative, lower-cost or regional providers

### Satisfaction Signals
- Several critical bugs closed within day(s) of reporting
- Active maintainer engagement on security (P0 fix same day)
- Community proposals receive prompt responses

---

## 8. Backlog Watch

| Issue/PR | Since | Status | Risk |
|----------|-------|--------|------|
| **[#1459](https://github.com/HKUDS/nanobot/issues/1459) — Codex agent "lazy" non-execution** | 2026-03-03 (4.5 months) | **Open** | **HIGH** — Eroding user trust in agent reliability. Most-commented open issue. Community has 2 upvotes. No maintainer comment visible. |
| **[#4300](https://github.com/HKUDS/nanobot/pull/4300) — Skill type requirements check** | 2026-06-11 (39 days) | **Open, conflicts** | **MEDIUM** — Feature has stalled with conflicts; community contributor waiting. |
| **[#4223](https://github.com/HKUDS/nanobot/pull/4223) — WeChat session reload after pause expiry** | 2026-06-06 (44 days) | **Open, conflicts** | **MEDIUM** — Fix for permanent WeChat silent failures. Blocked. |
| **[#4768](https://github.com/HKUDS/nanobot/pull/4768) — QQ exponential backoff** | 2026-07-06 (14 days) | **Open, conflicts** | **LOW-MEDIUM** — Competing with PR #4838; maintainer needs to pick one. |

### Watch List Summary
The most concerning backlog item is **Issue #1459** (agent non-execution), which has been open since March 2026 with no maintainer resolution. This is a **reputational risk** — the issue's title ("lazy and doesn't actually execute") is highly visible and represents a core functionality failure. Recommend maintainer triage and response within the next release cycle.

---

*Generated from GitHub data at github.com/HKUDS/nanobot | Date: 2026-07-20*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for **2026-07-20**.

---

## Hermes Agent Project Digest — 2026-07-20

### Today's Overview
The project is experiencing a high level of churn, with **50 issues** and **50 pull requests** updated in the last 24 hours, indicating a very active development and user community. However, only **5 issues** and **4 PRs** were closed/merged today, suggesting a significant bottleneck in review or a focus on bug triage rather than throughput. The backlog of open issues (45) and open PRs (46) is growing, with many new items filed today requiring decision or reproduction. No new releases were cut, but the volume of activity suggests a release may be imminent to address the accumulating bug fixes.

### Releases
No new releases were published in the last 24 hours.

### Project Progress
Only **4 PRs** were merged or closed today, reflecting a slow day for feature advancement. The closed items are not explicitly listed in the top items, but the following **merged/closed issues** were updated:
- **#44585** `[Bug]: Cron can inherit temporary paid provider state` (Closed) - A P1 billing bug was resolved.
- **#67320** `[Bug]: Desktop app calls non-existent /api/profiles/sessions/sidebar route` (Closed) - A critical P1 desktop startup crash was fixed.
- **#65650** `[Perf]: /model picker slow (~5s)` (Closed) - A P2 CLI performance regression was resolved.

Most open PRs are focused on critical bug fixes (e.g., **#67833** fixing MCP OAuth token refresh) and platform portability (e.g., **#63628** fixing WhatsApp on Windows). The **#67828** PR aims to suppress a false "Gateway is not running" warning that spams desktop users.

### Community Hot Topics
The most active discussions indicate deep concerns about architecture, billing, and desktop usability:

- **#34352** `[Feature] Solving the Multi-Tenant Hermes Problem` (10 comments)
    - This is the most discussed issue, with a user sharing a production fix for tenant isolation. It signals a strong enterprise demand for secure multi-agent deployments, which is currently blocked by core architecture limitations.
- **#67012** `[Bug] keepalive_expiry=20s breaks streaming` (7 comments)
    - A high-impact streaming regression caused by a recent commit that affects proxy providers like OpenRouter. Users are actively debugging the root cause with maintainers.
- **#46593** `[Bug] kanban: worker exits rc=0 without calling kanban_complete` (6 comments)
    - A significant workflow reliability bug for cron users, where silent failures of workers create undocumented "protocol violations" and blocked tasks.
- **#67798** `[Feature] Make lifecycle hooks a shared runtime contract` (New, 2 comments)
    - A feature request that addresses a core architectural gap: hooks are currently gateway-only, preventing plugins and other execution surfaces from using them.

### Bugs & Stability
Today saw a surge of new high-severity bug reports, primarily affecting the Desktop application and core agent logic.

- **Critical/High Severity:**
    - **#67821** `[Desktop] provider base URL / API key saved in Settings should apply to live sessions immediately` (P2) - Settings changes currently only affect new sessions, forcing restarts. Filed today.
    - **#67817** `[Telegram] Fails to connect: 'HTTPXRequest' object attribute is read-only` (P2) - A platform-level connection failure on startup, likely a dependency compatibility issue.
    - **#67825** `[Gateway] Clarify text-response interception bypasses gateway.message_timestamps prefix injection` (P2) - A subtle bug where user replies to clarify prompts lose temporal awareness.
    - **#67426** `[Write_File] Detect cwd-shaped relative paths missing leading slash` (P2) - An open PR (#67426) exists to fix a data loss risk where the tool can create files in the wrong directory.
- **Medium Severity:**
    - **#67829** `[Feature Request] Hard-block repeated identical tool call failures` (P2) - The tool loop detector only warns, not blocks, allowing runaway retries.
    - **#67815** `[Desktop] Anthropic-direct model picker doesn't show claude-sonnet-5` (P3) - A desktop UI incompatibility with Anthropic’s current model catalog.
    - **#67651** `[Desktop] Messages disappear after switching provider` (P3) - A UI state management issue causing data loss until a manual refresh.

### Feature Requests & Roadmap Signals
Several new feature requests point toward improving robustness, security, and platform maturity:

- **#67798** `Make lifecycle hooks a shared runtime contract`: Highly requested architectural change. Likely to be planned for a future `v0.19.0` if implementable without breaking the gateway.
- **#67831** `fix(providers): clarify Qwen Cloud PAYG billing lane`: A PR addressing confusion between different Alibaba billing models, indicating a need for better multi-provider billing clarity.
- **#67803** `Add VOICEVOX-compatible engine as a built-in TTS provider`: A request from the Japanese user community for localized TTS support, signaling expansion into non-English markets.
- **#67834** `feat(desktop): show running session cost in the desktop status bar`: A draft PR for cost visibility in the UI, directly addressing user desire for billing transparency.

### User Feedback Summary
- **Pain Points:**
    - **Desktop reliability is a major issue.** Users report hangs (#49920), updates that break the UI (#67320), messages disappearing (#67651), and broken model pickers (#67815). There is clear dissatisfaction with the desktop upgrade and session management stability.
    - **Stealth billing and silent failures.** The resolved #44585 bug (Cron inheriting paid providers) and the open #46593 (kanban silent failures) highlight a critical user fear: losing money or work to silent, non-transparent agent behavior.
    - **Windows support is fragile.** Multiple PRs (#63562, #63628, #63546) are dedicated solely to fixing edge cases on Windows, suggesting the platform is a secondary priority and suffers from integration issues.
- **Use Cases:**
    - **Enterprise Multi-Agent:** The #34352 discussion confirms users are running production multi-tenant workloads, demanding robust isolation.
    - **Workflow Automation (Cron/Kanban):** Users are pushing the cron system hard, exposing edge cases in worker lifecycle, billing inheritance, and error reporting.

### Backlog Watch
The following long-standing, important items lack recent maintainer attention or remain unresolved:
- **#30178** `[Bug]: LM Studio per-model context_length broken` (Created: 2026-05-22) - A P3 bug regarding context length regression for local LLM providers, untouched for nearly two months. Marked as `needs-repro`.
- **#39136** `[Bug]: Stale `hermes dashboard --tui` processes accumulate` (Created: 2026-06-04) - A medium-severity bug causing port conflicts over time, requiring a maintainer decision on cleanup strategy.
- **#53771** `[Bug]: Large chat-gateway sessions fail with 502` (Created: 2026-06-27) - A P2 bug causing sessions to fail non-gracefully due to Cloudflare limits, with a `needs-decision` label, indicating a lack of consensus on the fix approach.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-20

## 1. Today's Overview
Activity is moderate with 5 issues and 3 pull requests updated in the last 24 hours, though no releases or merges were published today. The project is addressing several provider-level bugs and agent-loop stability issues, while a cluster of stale PRs and issues remain open without maintainer response. A critical bug was reported where MCP server connection failures can freeze the agent loop entirely, demanding immediate attention. Overall, the project appears actively maintained but has a growing backlog of long-open items.

## 2. Releases
No new releases were published today. The most recent release remains unreported in this digest period.

## 3. Project Progress
No pull requests were merged or closed today. All three open PRs remain under review:

- **#3202** [OPEN] — fix(routing): strip leading/trailing underscores in ID normalization (stale since July 1)
- **#3251** [OPEN] — fix(providers): capture prompt cache token usage in Anthropic providers (stale since July 12)
- **#3267** [OPEN] — fix scope bug for refresh agy token (fresh, opened July 19)

No features or fixes advanced to completion in this window.

## 4. Community Hot Topics
- **#3182** — *[BUG] Android version* (4 comments): User cannot launch service on Android, reports full permissions granted but path setting unchangeable. This is the most-commented issue currently open, indicating continued mobile usage interest. [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)

- **#3252** — *splitKnownProviderModel strips provider prefix when model ID contains known provider alias* (1 comment): A subtle parsing bug that could break multi-provider setups. Underlying need is reliable provider routing. [Issue #3252](https://github.com/sipeed/picoclaw/issues/3252)

- **#3269** — *If the MCP server connection fails, the agent loop will hang* (0 comments but critical): Straightforward user report of a total chat freeze; likely to attract rapid attention. [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)

- **#3266** [CLOSED] — *Weixin channel passes images to non-vision model*: Closed without comments, suggesting maintainers acknowledged or fixed the underlying flow but did not elaborate.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 Critical | #3269 | MCP server connection failure hangs the entire agent loop, stopping all chat replies. No workaround mentioned. | None yet |
| 🟠 Medium | #3268 | `exec` tool requires `action` parameter with no default; AI calls fail unpredictably when LLM omits it. | None yet |
| 🟡 Low | #3252 | Provider model ID parsing strips prefix incorrectly when ID contains known alias. | None yet |
| 🟡 Low | #3266 | [CLOSED] Weixin channel sends images to non-vision models before file handling. | Closed (no details) |

No fix PRs exist today for any of these bugs, making #3269 the highest-priority stability threat.

## 6. Feature Requests & Roadmap Signals
- **Anthropic Prompt Cache Metrics (#3251)**: A stale PR seeks to expose prompt cache hit/miss and token metrics from Anthropic providers. This indicates operator demand for observable cost and caching behavior — likely to land in a future minor release if maintainers pick it up.
- **ID Normalization Fix (#3202)**: Longstanding PR to fix routing ID constraints. May be part of a broader routing stability improvement.
- **Android Launch Support (#3182)**: User pain point suggests demand for mobile/server-side Android deployments. Not yet reflected in any roadmap item.

**Prediction**: Prompt cache visibility (#3251) and the exec tool default (#3268) are the most likely candidates for the next patch release, given they address common operational friction.

## 7. User Feedback Summary
- **Dissatisfaction (Android)**: User `Monessem` unable to run the service on Android despite full permissions — service fails to launch and settings cannot be changed. [Issue #3182]
- **Dissatisfaction (MCP hang)**: User `ruiyigen` reports that PicoClaw becomes completely unresponsive after an MCP server failure — a show-stopper for agent workflows. [Issue #3269]
- **Frustration (exec tool)**: User `MrTreasure` reports AI agent calls fail unpredictably because the `exec` tool’s `action` parameter is required with no default. The user notes “almost never” should `action` be anything other than `"run"`. [Issue #3268]
- **Satisfaction (closed bug)**: Issue #3266 was closed quickly after report, suggesting the Weixin image handling bug was reproducible and addressed promptly.

Overall sentiment is positive for responsiveness on some items, but the MCP hang bug is likely to generate strong user backlash if not fixed rapidly.

## 8. Backlog Watch
- **#3182** — *[BUG] Android version* — Open since June 26, last updated today (July 20) but no maintainer response. User has provided logs and screenshots. Needs triage. [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)
- **#3202** — *fix(routing): strip leading/trailing underscores in ID normalization* — PR open since July 1, stale. No reviewer assigned. [PR #3202](https://github.com/sipeed/picoclaw/pull/3202)
- **#3251** — *fix(providers): capture the prompt cache token usage in Anthropic providers* — PR open since July 12, stale. [PR #3251](https://github.com/sipeed/picoclaw/pull/3251)
- **#3252** — *splitKnownProviderModel strips provider prefix* — Open since July 12 with only one comment. May be subtle but could cause silent misrouting. [Issue #3252](https://github.com/sipeed/picoclaw/issues/3252)

No maintainer has commented on these items in the last 48 hours, indicating a potential attention gap.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-20

## 1. Today's Overview
NanoClaw is in a **high-velocity integration and stabilization phase**, with **30 PRs updated in the last 24 hours — equally split between open (15) and merged/closed (15)**. The project shows strong core-team throughput, particularly from **amit-shafnir** (4 new fix/feature PRs) and **moshe-nanoco** (CLI improvements). Two new feature requests (#3091, #3089) surfaced from the community. The impressive batch of **15 closed PRs** represents a major cleanup of long-standing WhatsApp group encryption bugs, Telegram channel improvements, and MCP server support, indicating a **tightening release cycle** likely approaching a new stable version.

## 2. Releases
**No new releases** today.

## 3. Project Progress
The project closed or merged **15 PRs** in the last 24 hours, reflecting significant maturation across several subsystems:

**WhatsApp Stability (major cleanup)**
- [PR #3038](https://github.com/nanocoai/nanoclaw/pull/3038) — Fix LID-mode group sends stuck on "waiting" (by caburi00)
- [PR #3008](https://github.com/nanocoai/nanoclaw/pull/3008) — Remove `cachedGroupMetadata` that broke SKDM in LID groups (by gfnord)
- [PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870) — Keep native participant addressing for group encryption (by elancode)
- [PR #2688](https://github.com/nanocoai/nanoclaw/pull/2688) — Stop translating group participants to phone JIDs (by mcaldas)

These four PRs represent a **coordinated, multi-contributor effort** to fix the same underlying WhatsApp LID group addressing bug that has caused "silent delivery failures" — a critical UX issue where messages appear sent but never reach recipients.

**Channel Expansion (merged/closed)**
- [PR #1087](https://github.com/nanocoai/nanoclaw/pull/1087) — Telegram channel, voice transcription, and message deduplication (by hugwi)
- [PR #1921](https://github.com/nanocoai/nanoclaw/pull/1921) — WeChat channel via iLink bot protocol (by Clapeysron)
- [PR #1648](https://github.com/nanocoai/nanoclaw/pull/1648) — Microsoft Teams channel (by Aswinmcw)
- [PR #1594](https://github.com/nanocoai/nanoclaw/pull/1594) — WeChat channel skill (by grzhx)
- [PR #1517](https://github.com/nanocoai/nanoclaw/pull/1517) — Discord channel with image attachment support (by misterclarity)
- [PR #352](https://github.com/nanocoai/nanoclaw/pull/352) — Telegram as a channel, replacing WhatsApp as default (by iHamburg)

**MCP Infrastructure**
- [PR #2306](https://github.com/nanocoai/nanoclaw/pull/2306) — In-tree MCP server for yt-dlp (by CrAzyScreamx)
- [PR #2261](https://github.com/nanocoai/nanoclaw/pull/2261) — ffmpeg/ffprobe MCP server for media transformation (by CrAzyScreamx)
- [PR #2847](https://github.com/nanocoai/nanoclaw/pull/2847) — URL-based (remote) MCP servers (by grantland)

**Channel Permissions & Bugs**
- [PR #2278](https://github.com/nanocoai/nanoclaw/pull/2278) — Per-wiring channel permission (read | write | read+write) (by CrAzyScreamx)
- [PR #2276](https://github.com/nanocoai/nanoclaw/pull/2276) — URL fallback in bridge when adapter omits fetchData (by CrAzyScreamx)

## 4. Community Hot Topics
**Most active issues today:**
- **[Issue #3091](https://github.com/nanocoai/nanoclaw/issues/3091)** — "Standardize composable host extension hooks for skills" by ZappoMan. **Underlying need:** Community skill developers are hacking NanoClaw internals (router, delivery, runner) with string patches per skill. This creates conflicts when multiple skills patch the same component. The need is for a **formal hook/plugin system** that allows skills to extend host behavior without source-level monkey-patching.

- **[Issue #3089](https://github.com/nanocoai/nanoclaw/issues/3089)** — "Agent-driven skill learning" by cy83rc0llect0r. **Underlying need:** Users want the agent to self-generate skills based on repeated task patterns, rather than requiring manual skill authoring. This reflects demand for **metacognitive capabilities** — the agent evolving its own toolset.

**Most active PRs (open):**
- **[PR #3094](https://github.com/nanocoai/nanoclaw/pull/3094)** — Retry transient bot identity lookup for Telegram (core-team fix)
- **[PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — Support remote Streamable HTTP MCP servers (core-team feature)

## 5. Bugs & Stability
**High severity** — Two related WhatsApp LID group bugs have been fixed today via multiple merged PRs. These were **silent data loss bugs**: messages appeared delivered to the bot's host logs but recipients never received them. The root cause was inconsistent participant JID translation in group encryption metadata. Fixes: [#3038](https://github.com/nanocoai/nanoclaw/pull/3038), [#3008](https://github.com/nanocoai/nanoclaw/pull/3008), [#2870](https://github.com/nanocoai/nanoclaw/pull/2870), [#2688](https://github.com/nanocoai/nanoclaw/pull/2688).

**Medium severity** — Open PR [#3094](https://github.com/nanocoai/nanoclaw/pull/3094) fixes transient Telegram bot identity lookup failures. Open PR [#3093](https://github.com/nanocoai/nanoclaw/pull/3093) fixes chat typing indicator remaining active during processing turns — a UX annoyance where users could not see when the bot is "thinking" vs. idle.

**Low severity** — Open PR [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) fixes template context Markdown prepending, likely affecting formatting of prompts/responses.

## 6. Feature Requests & Roadmap Signals
**Likely in next release (based on active core-team PRs):**
- **Remote/Streamable HTTP MCP servers** ([PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)) — Allows agents to connect to MCP servers over HTTP/SSE, not just local stdio. This aligns with the pre-merged [#2847](https://github.com/nanocoai/nanoclaw/pull/2847) for URL-based MCP.
- **CLI approvals for unknown senders** ([PR #3088](https://github.com/nanocoai/nanoclaw/pull/3088)) — Surface sender approval holds in `ncl approvals list`.

**Community-requested (likely future):**
- **Composable host hooks** ([#3091](https://github.com/nanocoai/nanoclaw/issues/3091)) — A plugin/hook architecture for skills to extend host behavior. High-value for ecosystem growth.
- **Agent-driven skill learning** ([#3089](https://github.com/nanocoai/nanoclaw/issues/3089)) — Autonomous skill generation from experience. Highly ambitious; may require architectural changes.
- **Channel expansions** continue to be a theme — WeChat, Discord, Teams, Telegram are now all merged, suggesting NanoClaw is maturing into a **multi-channel AI gateway** rather than a single-channel bot.

## 7. User Feedback Summary
**Satisfaction signals:**
- High community engagement with **30 PRs in 24 hours** — contributors are actively submitting fixes and features.
- The **multi-contributor WhatsApp fix** (4 PRs from 4 different authors) shows a healthy, collaborative debugging culture.

**Pain points expressed:**
- **WhatsApp silent failures** — Users experienced messages "disappearing" with no error feedback. A critical trust issue for production deployments. (Now fixed in merged PRs.)
- **Skill development friction** — ZappoMan's issue (#3091) explicitly states that string-patching core sources is fragile and conflicts between skills. This is a **scaling bottleneck** for the skill ecosystem.
- **Manual skill authoring** — cy83rc0llect0r (#3089) implies that creating skills is still too labor-intensive for end users.

**Unmet needs:**
- No formal skill extension API — community workarounds are hacks.
- No auto-skill generation — users want the agent to learn from experience.

## 8. Backlog Watch
**No long-unanswered important issues or PRs identified** in the current data window. All items shown have activity within the last 24 hours. The project maintainers appear to be highly responsive. However, the following items are worth monitoring:

- **[PR #1087](https://github.com/nanocoai/nanoclaw/pull/1087)** — Telegram + voice transcription (by hugwi) was marked "Blocked" upon merge. It's now closed, but its dependency status suggests some features may still be pending integration.
- **[PR #352](https://github.com/nanocoai/nanoclaw/pull/352)** — Telegram as default channel (by iHamburg) was also marked "Blocked" and "Pending Closure" before being closed. This may indicate unresolved disagreements about default channel strategy.

**Maintainer attention needed:** None urgent, but the two feature requests (#3091, #3089) have zero comments or reactions from maintainers. Early acknowledgment could encourage community investment.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-20

## Today's Overview

IronClaw is in an intense refactoring sprint with a strong focus on the "Reborn" architecture overhaul. Activity is very high: 50 PRs were updated in the last 24 hours, with 30 merged or closed, while 7 issues remain active (none closed today). The core team—led by contributor `ilblackdragon`—is executing a systematic collapse of the `CapabilityOutcome` DTO layer into `host_api::Resolution`, along with feature-flag cleanup and turn-state durability improvements. No new releases were cut today, indicating ongoing active development rather than stabilization. The project appears to be executing against a well-defined roadmap of slices and stages (e.g., §5.2, §5.3, Slice C), reflecting disciplined, structured engineering.

## Releases

None.

## Project Progress

**30 PRs merged/closed today**, highlighting strong forward momentum. Key merges include:

- **Capability Resolution Collapse (Slice C):** PR #6299 merged, collapsing `capability_result` to `host_api::Resolution` and deleting `CapabilityOutcome`/mirror DTOs. This is the accumulated end-state of stacked PRs #6283 → #6287 → #6293.
- **Replay Payload Refactor:** PR #6271 moved raw gate/auth resume replay payloads host-side via `ReplayPayloadStore`, wiring real durable stores in production.
- **Full Capability Result Collapse:** PR #6293 deleted the `CapabilityOutcome` type entirely after migrating all producers to emit `Resolution` directly.
- **Compile-Time Feature Cleanup:** PR #6296 deleted 14 compile-time features (38→24), removing ~1,100 `#[cfg]` sites across 184 files with net -1,657 lines.
- **Chaos Testing & Crash Recovery:** PR #6295 landed a crash-consistency chaos suite for turn-state, surfacing and fixing two real crash-recovery defects.
- **Facade Freezing:** PR #6292 froze the `RebornServicesApi` facade method set as a test artifact per §5.2.5.
- **Developer Onboarding:** PR #6285 merged frictionless local-dev onboarding with auto-provisioning, REPL model wizard, and onboard launcher.
- **REPL UX Improvements:** PR #6289 (still open) adds a thinking spinner and markdown rendering; PR #6297 added the onboard launcher with browser auto-open.

## Community Hot Topics

The most active items by comment count and discussion depth:

- **[Issue #6263](https://github.com/nearai/ironclaw/issues/6263)** (9 comments) — **"§4.3 final store consolidation: retire InMemoryTurnStateStore"** — This is the organizing issue for the turn-state refactoring. The discussion centers on the final debt item after A1–A8 slices, the checkpoint cluster, and Slack test doubles. The comment count reflects careful architectural planning around the `InMemoryTurnStateStore` retirement with Slice 0 oracle requirements and no-livelock evidence.

- **[Issue #6189](https://github.com/nearai/ironclaw/issues/6189)** (3 comments) — **"Retryable stream error leaves completed response in failed state"** — User-facing confusion bug: a completed response still shows a red error banner. The `ironloopai[bot]` has addressed this with PR #6302, which treats completed replies as successful and ignores trailing retryable errors.

- **[Issue #6190](https://github.com/nearai/ironclaw/issues/6190)** (3 comments) — **"Multiple conflicting error messages displayed for a single failed request"** — UI/UX consistency issue where streaming errors and model context-limit errors appear simultaneously. Addressed by PR #6301, which consolidates error display and adds regression tests.

- **[Issue #6274](https://github.com/nearai/ironclaw/issues/6274)** (2 comments) — **"Finish DeploymentConfig as the main composition config"** — Discussion on completing `DeploymentConfig` as the Slice B artifact, with dependencies on §4.4/§5.6/§5.11 of the architecture document.

**Underlying needs:** The community is focused on architectural consolidation (removing unused types, reducing feature complexity), error-handling robustness (stream failures, UI error consolidation), and developer experience (onboarding, REPL improvements). The core team is methodically chipping away at a multi-slice architecture simplification plan.

## Bugs & Stability

**High Severity:**

- **[#6189](https://github.com/nearai/ironclaw/issues/6189) — Retryable stream error leaves completed response in failed state (P2 bug bash):** A completed response shows a confusing error banner. **Fix PR exists:** #6302 is open and addresses root cause (completed reply treated as success, trailing errors ignored).

- **[#6190](https://github.com/nearai/ironclaw/issues/6190) — Multiple conflicting error messages displayed for a single failed request (P2 bug bash):** Both streaming and context-limit errors shown simultaneously. **Fix PR exists:** #6301 is open and consolidates error display.

**Medium Severity:**

- **[#6257](https://github.com/nearai/ironclaw/issues/6257) / [#6290](https://github.com/nearai/ironclaw/issues/6290) — "Invalid value (attachments.mime_type)" when sending/generating PDF files:** Duplicate issue reports. Suspected to be a path-reading or missing-tool bug. No fix PR yet visible.

**Progress on crash recovery:** PR #6295 (merged today) found and fixed two real crash-recovery defects in the turn-state layer, and issue [#6284](https://github.com/nearai/ironclaw/issues/6284) tracks the goal of achieving 100% mid-run error recoverability—where every error is seen by the model and the model gets a turn to recover.

## Feature Requests & Roadmap Signals

Signal from the roadmap documents and issues:

- **DeploymentConfig completion ([#6274](https://github.com/nearai/ironclaw/issues/6274))** — The main composition config is functional but incomplete. Likely target for next release cycle.
- **Turn-state durability ([#6263](https://github.com/nearai/ironclaw/issues/6263))** — Retirement of `InMemoryTurnStateStore` in favor of async write-behind durability. Step 3 PR (#6298) is open.
- **Feature cleanup ([#6296](https://github.com/nearai/ironclaw/pull/6296))** — Completed today; moving from 38→24 compile-time features with libsql/postgres storage features remaining.
- **Error recoverability endgame ([#6284](https://github.com/nearai/ironclaw/issues/6284))** — Aspirational goal: model recovers from 100% of errors it sees. This signals a shift toward more resilient agent runtime behavior in future releases.

**Predictions for next version:** The next release is likely to include the complete `CapabilityOutcome`→`Resolution` collapse, the turn-state durability overhaul (async write-behind), the feature flag reduction, and the UI error consolidation fixes. The release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (stale since July 3, still open) shows version `0.29.1` pending, which suggests these changes may constitute a minor release bump.

## User Feedback Summary

**Pain points reported by real users (via Slack product feedback channels):**

- **PDF attachment errors** ([#6257](https://github.com/nearai/ironclaw/issues/6257), [#6290](https://github.com/nearai/ironclaw/issues/6290)) — User "Michael Kelly" (Slack #x-ai-product-feedback) reported a blocking bug when sending or generating PDF files. The `Invalid value (attachments.mime_type)` error prevents file operations entirely. This appears to be a regression or tool-configuration issue.
- **Confusing error UI** ([#6189](https://github.com/nearai/ironclaw/issues/6189), [#6190](https://github.com/nearai/ironclaw/issues/6190)) — Users cannot tell whether a request actually succeeded when error banners are misleading. The community is responding quickly with fixes.
- **Developer onboarding friction** — From PR #6285's motivation: users hitting a chain of dead ends during first-run onboarding (missing WebUI token, missing user ID). The team has responded with frictionless onboarding in the just-merged PR.

**Overall sentiment:** Active users are benefiting from a fast-moving team that responds quickly to bugs (same-day or next-day fixes for reported UI issues). The developer experience is improving with the onboarding and REPL UX work. The PDF file bug is the most notable unaddressed user blocker.

## Backlog Watch

- **[PR #5598](https://github.com/nearai/ironclaw/pull/5598) — Release PR (stale since July 3):** Still open with 0 comments, version bump to `0.29.1` with breaking changes in `ironclaw_common` (0.4.2→0.5.0) and `ironclaw_skills` (0.3.0→0.4.0). This has gone 17 days without merging or closing, likely waiting for the current refactoring waves to land before cutting a release.

- **[PR #6121](https://github.com/nearai/ironclaw/pull/6121) — Migration default legacy-free (stale since July 15):** Open with no comments for 5 days. Makes Reborn migration default to legacy-free extension-ownership path. An architecture regression test prevents re-introduction of legacy mode. This is a low-risk documentation-adjacent change that may be waiting on the broader migration strategy to stabilize.

- **[PR #4032](https://github.com/nearai/ironclaw/pull/4032) — WASM dependency bump (stale since May 25):** Oldest open PR, bumping `wit-component` and `wit-parser`. 56 days without merging. Likely blocked by WASM compatibility constraints or lower priority relative to the Reborn refactoring work. This may need maintainer attention to either merge or close.

**No issues tagged with `needs-maintainer` or showing signs of abandonment outside the normal priority queue.** The backlog is healthy with clear prioritization toward the Reborn architecture work.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-20

## 1. Today’s Overview
LobsterAI shows a low-activity period with no new releases and only stale items updated in the past 24 hours. Among the three issues and three pull requests updated, most are open and tagged *stale*, suggesting maintainer bandwidth may be limited or focus has shifted elsewhere. One issue was closed (#1352), likely resolved earlier but only recently updated. No new feature or bug-fix PRs were merged today, indicating a quiet development cycle.

## 2. Releases
- No new releases.

## 3. Project Progress
- No PRs were merged or closed today. The one closed item (#1350) was a pull request, not merged, but closed without merging.

## 4. Community Hot Topics
- **#1287** [OPEN] [bug] IM robot connectivity test accepts invalid credentials (appkey, appsecret, aes key all set to "1") — *1 comment, stale.*  
  URL: [netcase-youdao/LobsterAI Issue #1287](https://github.com/netease-youdao/LobsterAI/issues/1287)  
  *Underlying need:* Users expect validation logic for bot connectivity tests; the current behavior undermines trust in configuration verification.

- **#1289** [OPEN] [feat] Add collapsible code blocks for long code segments — *1 comment, stale.*  
  URL: [netcase-youdao/LobsterAI Issue #1289](https://github.com/netease-youdao/LobsterAI/issues/1289)  
  *Underlying need:* Users struggle with AI-generated code blocks spanning 15–200 lines that force excessive scrolling. This is a clear UX pain point.

- **#1352** [CLOSED] Task dialog: unable to upload attachments while task is running — *2 comments, closed.*  
  URL: [netcase-youdao/LobsterAI Issue #1352](https://github.com/netease-youdao/LobsterAI/issues/1352)  
  *Underlying need:* Users need the ability to interact with attachments during active tasks; the fix was apparently implemented and closed.

## 5. Bugs & Stability
- **Medium severity** — **#1287**: IM robot connectivity test wrongly passes when all credentials are invalid (“1” values). This is a validation gap that could lead to silent configuration failures.  
  Status: Open, stale, no fix PR identified.

- **Low severity** — **#1350** (PR, closed): Skills file generation blocks without progress feedback, and model understanding differs between LobsterAI and Openclaw with the same prompt. This was closed without merging, so the issue likely persists.  
  Status: Closed as PR; underlying problem may remain open.

## 6. Feature Requests & Roadmap Signals
- **#1289** — Collapsible code blocks (fold/unfold) is the most actionable feature request. It addresses a common UX complaint (long markdown code blocks) and has a technical proposal attached.  
  *Prediction:* Likely candidate for next minor release if maintainer cycles open up.

- **#1350** (closed PR) — Better intermediate state visualization during skills generation and improved model prompt alignment. Although this PR was closed, the user demand for progress visibility and reliability is clear.

## 7. User Feedback Summary
- **Pain points:**
  - Code blocks >15 lines make chat view unusable without scrolling (Issue #1289).
  - No progress indicator during long file generation (PR #1350).
  - Model behavior inconsistent between LobsterAI and Openclaw for identical prompts (PR #1350).
  - Attachment upload disabled during tasks (Issue #1352, now fixed).
- **Satisfaction signals:** Issue #1352 was closed, so at least one critical blocker was resolved.

## 8. Backlog Watch
- **#1287** (bug, IM connectivity test) — Open since April 2, stale for over 3 months. No maintainer reply or fix progress. This is a security/reliability concern that warrants attention.
- **#1289** (feature, collapsible code blocks) — Open since April 2, stale, but with a clear proposal. Community patience may wear thin if no response is given.
- **#1285** and **#1286** (dependency bumps for concurrently and tailwindcss) — Both open and stale since April 2. They are low-priority but indicate dependency drift that may eventually cause build issues.

---

**Project Health Assessment:** Low activity, several stale items, and a moderate backlog of UX and validation bugs. Maintainers should prioritize replying to or fixing the open bug #1287 and the well-defined feature #1289 to maintain community trust.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-20**.

---

## Moltis Project Digest – 2026-07-20

### 1. Today's Overview
The Moltis project shows **low activity** over the past 24 hours. No new issues or pull requests were created, updated, or resolved. A single internal release (`20260719.01`) was published, but without change notes or linked PRs, suggesting this may be a maintenance or metadata update. Overall, project momentum appears paused or in a quiet period with no observable community or development churn.

### 2. Releases
**New Release:** `20260719.01`
- **Tag:** [20260719.01](https://github.com/moltis-org/moltis/releases/tag/20260719.01)
- **Details:** No changelog, breaking changes, or migration notes were provided with this release. It is likely a package rebuild or internal version bump.

### 3. Project Progress
- **Merged/Closed PRs (today):** 0
- No features, fixes, or documentation changes were advanced in the last 24 hours.

### 4. Community Hot Topics
- **Active Issues/PRs with comments/reactions:** None (0 items).
- No discussion threads, feature requests, or bug reports were active today. The community has not raised any new topics or engaged with existing ones.

### 5. Bugs & Stability
- **New bugs reported:** 0
- **Regressions or crashes:** None reported.
- **Severity:** None to assess.
- **Fixing PRs:** None.

### 6. Feature Requests & Roadmap Signals
- **User-requested features:** None submitted or discussed in the last 24 hours.
- **Prediction:** Given the current inactivity, the next version (if any) will likely contain only internal fixes or dependencies updates. No new features are signaled.

### 7. User Feedback Summary
- No user feedback, pain points, or use cases were expressed today. The project appears to be in a low-engagement phase.

### 8. Backlog Watch
- **Long-unanswered Issues/PRs:** None currently open. The backlog is effectively empty.
- **Maintainer attention needed:** None at this time. No items require urgent maintainer response.

---

**Overall Health Assessment:** The Moltis project is currently **inactive** in terms of community interaction and development. The single release indicates some ongoing maintenance, but the lack of issues, PRs, and discussion suggests either a very stable state or reduced community engagement. No risks or blockers are visible.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-20

Generated from GitHub Activity (agentscope-ai/CoPaw)

---

## 1. Today's Overview

CoPaw (QwenPaw) is in a high-activity period with **15 issues** and **13 PRs** updated in the last 24 hours, indicating strong community engagement and active development. The project maintains **13 open active issues** and **12 open PRs**, with only **2 closures** total, suggesting a growing backlog that may require prioritization. No new releases were published today, but one chore PR bumps version to **2.0.1b1**, signaling an imminent minor release. The community is reporting several medium-to-high-severity bugs around agent behavior and model configuration, while feature requests focus on workflow orchestration and UI improvements.

---

## 2. Releases

**No new releases today.**  
The last available release remains `v2.0.0.post3` / `v1.1.12.post2` (pip).  
A version bump PR (#6266) to `2.0.1b1` was merged/closed today, suggesting a patch release is imminent.

---

## 3. Project Progress

### Merged/Closed PRs Today
- **#6266 — chore: bump version to 2.0.1b1** (CLOSED)  
  *Preparatory version bump for next release.*

### Key Open PRs Advancing Features or Fixes
| PR | Title | Status |
|----|-------|--------|
| #6248 | fix: distinguish offload vs cancel to prevent subprocess kill on deadline | OPEN — addresses critical process handling bug |
| #6238 | perf(drivers): initialize handlers concurrently | OPEN — parallel MCP driver init (fixes #6193) |
| #6232 | perf(console): cache and compress static assets | OPEN — Console performance optimization |
| #6256 | feat(governance): make sandbox-unavailable fallback action configurable | OPEN — first-time contributor fix for #6250 |
| #6243 | fix(embedding): expose use_dimensions toggle for OpenAI APIs | OPEN — first-time contributor fix for #6242 |
| #6237 | feat(scroll): improve exchange and date-aware history recall | OPEN — memory/history recall improvement |
| #6210 | refactor: make the default loop an agent mode | OPEN — architecture refactor, under review |
| #5796 | refactor(acp): decouple slash commands, extract safety checks | OPEN — under review, long-standing architectural change |

---

## 4. Community Hot Topics

### Most Active Issues (by comments/reactions)
| Issue | Comments | Reactions | Link |
|-------|----------|-----------|------|
| **#6193** — MCP drivers start sequentially instead of in parallel | 4 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6193) |
| **#6163** — Reusable Workflow Orchestration with Audit Trail | 3 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6163) |
| **#6241** — Agent continuous repeated output + memory_search infinite loop | 2 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6241) |
| **#6252** — Desktop mode zoom doesn't work on Linux | 2 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/6252) |

### Underlying Needs Analysis
- **Performance pain point**: Issue #6193 (MCP startup) resonated strongly — 8x improvement (40s → 5s) is a compelling motivator. PR #6238 directly addresses this.
- **Structured workflows**: #6163 requests reusable multi-step orchestration with audit trails, indicating enterprise/advanced users want higher-level abstractions beyond single-agent chat.
- **Agent reliability**: #6241 highlights a systemic issue where agents produce repetitive output without framework-level deduplication, eroding user trust.

---

## 5. Bugs & Stability

### High Severity
- **#6241 — Agent 连续轮次重复输出 + memory_search 死循环**  
  *Repetitive agent output, no deduplication at framework level.*  
  No dedicated fix PR yet. ⚠️ **Unresolved**

- **#6250 (CLOSED) — 沙箱不可用时 SANDBOX_FALLBACK 硬编码弹审批，无配置可跳过**  
  *Hardcoded approval prompt when sandbox unavailable, no config escape.*  
  ✅ **FIX PR #6256** (first-time contributor) — configurable fallback action.

### Medium Severity
- **#6242 — Console embedding dimensions not sent to OpenAI-compatible APIs**  
  *`use_dimensions` not exposed, causing dimension mismatches.*  
  ✅ **FIX PR #6243** (first-time contributor)

- **#6257 — Multiple tool calls produce identical thinking output**  
  *Each tool call's thinking block contains same repeated content.*  
  No fix PR yet. ⚠️ **Unresolved**

- **#6258 — openai 模型最大输出token不生效**  
  *Max output token setting not applied for OpenAI models.*  
  No fix PR yet. ⚠️ **Unresolved**

### Low Severity / System
- **#6239 — Windows backend drops ';' separator in PATH concatenation** — child processes lose npm globals  
- **#6252 — Desktop (Tauri) mode zoom shortcuts don't work on Linux**  
- **#6249 — TUI stuck at "warming" on source startup**  
- **#6261 — Offline code mode can't preview files (requires online resources)**  
- **#6255 — Chat error (BadRequestError, 400)**

### Regressions
- **#6241** appears to be a regression in agent loop reliability, with existing warning messages that don't prevent recurrence.

---

## 6. Feature Requests & Roadmap Signals

### High Likelihood for Next Release
| Feature | Issue PR | Status | Signal |
|---------|----------|--------|--------|
| **Parallel MCP driver init** | #6193 / #6238 | PR open | 8x startup speed improvement, maintainer-driven |
| **Configurable sandbox fallback** | #6250 / #6256 | PR open, first-time contributor | Explicit user request, simple config change |
| **Expose `use_dimensions` for embedding** | #6242 / #6243 | PR open, first-time contributor | Console UX gap, easy fix |

### Medium Likelihood
- **Reusable Workflow Orchestration with Audit Trail** (#6163) — complex feature, needs RFC
- **Per-agent auto-memory profiles** (#6263) — power-user feature
- **UI result folding** (#6260) — think/collapse tool calls, show final output
- **System tray minimize** (#6264) — nice-to-have UX improvement

### Lower Priority (Backlog)
- **CIDR support in no-auth host allowlist** (#6259) — security admin feature
- **One-click agent config copy** (#6262) — UI convenience
- **Desktop zoom on Linux** (#6252) — platform-specific

---

## 7. User Feedback Summary

### Common Pain Points
1. **Agent reliability**: Users report repetitive outputs (#6241) and same thinking blocks across tool calls (#6257), undermining confidence in autonomous agent behavior.
2. **Startup performance**: MCP driver serial initialization (#6193) creates frustrating wait times for multi-tool setups.
3. **Configuration opacity**: Options like `max_output_tokens` not taking effect (#6258), `use_dimensions` not exposed (#6242), sandbox fallback behavior hardcoded (#6250).
4. **Cross-platform gaps**: Linux desktop zoom (#6252), Windows PATH handling (#6239), offline mode broken (#6261).

### User Satisfaction Signals
- **First-time contributors** are actively submitting fixes (#6256, #6243, #6259), indicating good documentation and welcoming maintainer community.
- **High-quality bug reports** with root-cause analysis (see #6241 comparison table, #6250 hardcoded code reference).
- **Desire for professional features**: Workflow orchestration (#6163), audit trails, per-agent memory profiles (#6263) suggest the project is attracting enterprise/integration use cases.

### Dissatisfaction Signals
- Issue #6260 explicitly criticizes UI density: "思考和调用工具是否可以折叠起来...结果被淹没在执行的过程中" (thoughts and tool calls take full screen, results buried).
- Issue #6241 warns "该提示出现在 assistant 输出中，并不阻止下一轮重复调用" (warning message doesn't prevent recurrence) — frustration with partial fixes.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Created | Last Updated | Days Outstanding | Reason for Concern |
|-------|---------|--------------|------------------|--------------------|
| **#5796** — refactor(acp): decouple slash commands | 2026-07-06 | 2026-07-20 | 14 days | Under review, critical architectural PR, no maintainer merge decision |
| **#6195** — Refactor ring from chat end to console | 2026-07-16 | 2026-07-19 | 4 days | Ready for human review, no response from core team |
| **#6163** — Reusable Workflow Orchestration | 2026-07-16 | 2026-07-19 | 4 days | High-value feature request, no maintainer acknowledgement |
| **#6241** — Agent repeated output + infinite loop | 2026-07-18 | 2026-07-20 | 2 days | High severity bug, no fix PR, user report includes framework-level analysis |

### PRs Awaiting Review
| PR | Author | Last Push | Waiting Since |
|----|--------|-----------|---------------|
| #5796 — ACP refactor | XiuShenAl | 2026-07-20 | 14 days |
| #6195 — Chat ring refactor | yuanxs21 | 2026-07-19 | 4 days |
| #6210 — Default loop refactor | rayrayraykk | 2026-07-20 | 3 days |
| #6237 — Scroll history recall | niceIrene | 2026-07-20 | 3 days |
| #6248 — Offload vs cancel fix | feng183043996 | 2026-07-20 | 2 days |
| #6256 — Sandbox config fix | JOJOCrazy123 | 2026-07-20 | <1 day |

**Key observation**: Three first-time-contributor PRs (#6243, #6256, #6259) are pending review — prompt attention would encourage community growth. The long-standing #5796 (14 days) may require a maintainer decision to unblock architectural progress.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for July 20, 2026.

---

## ZeroClaw Project Digest — 2026-07-20

### 1. Today's Overview
ZeroClaw is in a high-velocity development phase, driven by the tail end of the v0.8.4 maintenance train and heavy parallel work on the v0.9.0 security and multi-agent milestone. Activity remains very high, with 34 issues and 50 PRs updated in the last 24 hours. The project is currently focused on hardening the Windows platform, advancing the persistent memory subsystem to parity, and pushing forward runtime plugin architecture (WASM) and security (confused deputy fixes). Three items were closed today, suggesting consistent delivery of fixes and minor features.

### 2. Releases
**No new releases were created in the last 24 hours.** The project is currently tracking toward the v0.8.4 maintenance release (target: July 31) and the larger v0.9.0 auth/security milestone.

### 3. Project Progress
Two pull requests were merged today:
- **[Bug fix] `fix(hardware): preserve inner error in serial and uno-q bridge timeout handlers`** ([PR #8499](https://github.com/zeroclaw-labs/zeroclaw/pull/8499)): Improves observability by retaining the inner `Elapsed` error in structured logs for hardware bridge timeouts.
- **[Bug fix] `fix(aardvark-sys): preserve inner error in LibraryNotFound error chains`** ([PR #8514](https://github.com/zeroclaw-labs/zeroclaw/pull/8514)): Fixes a unit variant that discarded the underlying `libloading` error, improving diagnostics for dlopen failures.

Additionally, issue **#8363** (v0.8.3 config-driven runtime policy tracker) and **#8958** (ACP agent selection via query param) were closed, indicating completion of those workstreams.

### 4. Community Hot Topics
- **RFC: Work Lanes & Board Automation** ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)): With 14 comments, this governance RFC is the most active discussion. It aims to reduce manual maintenance overhead for project maintainers by automating board routing and label cleanup.
- **Windows Test Failures** ([Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)): 10 comments on the critical bug report (74 failing tests on Windows). A companion feature request ([Issue #7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)) to add Windows/macOS to the CI matrix has 2 comments and is accepted. The community is pushing hard for first-class Windows support.
- **Turn-level OpenTelemetry Trace Correlation** ([Issue #6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)): 8 comments. A feature request aiming to nest LLM, tool, and memory spans under a single turn trace. This is a core observability improvement for debugging complex agent workflows.

### 5. Bugs & Stability
A **high-severity security bug** remains actively worked: **`execute_pipeline` bypasses per-agent tool gating** ([Issue #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947), S0 severity). This "confused deputy" vulnerability allows a pipeline to use tools the calling agent does not have permission to access. It is currently `in-progress` and in the v0.9.0 tracker.

Other notable bugs reported today:
- **JIT loading fails for Qwen3.6-35B-A3B** ([Issue #9177](https://github.com/zeroclaw-labs/zeroclaw/issues/9177)): Engine protocol startup aborts during JIT, but manual load works. Severity S2 (degraded behavior).
- **ZeroCode won't start on Windows without `ZEROCLAW_SOCKET`** ([Issue #9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117)): Severity S3 (minor), but blocks Windows developers. Fix likely coming as part of the Windows hardening wave.
- **Telegram channel cannot be configured** ([Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)): S1 severity (workflow blocked), currently accepted with no fix PR yet.

### 6. Feature Requests & Roadmap Signals
Several substantial features are moving toward the next release:
- **PowerShell as native shell on Windows** ([PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)): A fix for a long-standing blind spot where `runtime.shell` was silently ignored on Windows.
- **MCP embedded resource blob intake** ([Issue #9179](https://github.com/zeroclaw-labs/zeroclaw/issues/9179)): New feature to materialize binary content from MCP tool results for the model.
- **ACP `deliver_file` support** ([Issue #9178](https://github.com/zeroclaw-labs/zeroclaw/issues/9178)): Extension of the Agent Communication Protocol to support file delivery with URIs.
- **KeySource trait for secrets management** ([Issue #9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)): An accepted RFC to abstract master-key material by source/deployment form, crucial for production deployments.

These features are strong candidates for inclusion in the upcoming v0.8.4 or v0.9.0 milestones.

### 7. User Feedback Summary
- **Windows users are frustrated**: The combination of 74 test failures, silent `shell` config drops, and ZeroCode startup failures paints a picture of a still-immature Windows experience. The active fix for PowerShell support and the CI feature request indicate the maintainers have heard this.
- **Telegram channel setup** is a specific pain point—users following quickstart guides still get "channels not set up" errors, blocking a primary use case.
- **Positive sentiment on local models**: The `llama.cpp` model router feature ([Issue #7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)) shows appreciation for the tool but a clear request for easier switching between local models.

### 8. Backlog Watch
- **`fix(config): treat whitespace-only model_provider as non-dispatchable`** ([PR #8324](https://github.com/zeroclaw-labs/zeroclaw/pull/8324)): Open since June 25, this small, low-risk fix is stuck with a `needs-author-action` label. It fixes a config edge case where whitespace-only strings are incorrectly treated as dispatchable.
- **`feat(cron): add shell_output_format config`** ([PR #8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438)): Open since June 28, this medium-sized enhancement is also blocked on `needs-author-action`. It adds useful output formatting for cron jobs.
- **Persistent Memory Tracker** ([Issue #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)): While active, this large tracker has 21 open items (3 issues, 18 PRs) and represents the most significant coordinated effort. Maintainer attention is high but fragmented.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*