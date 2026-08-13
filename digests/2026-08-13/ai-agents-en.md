# OpenClaw Ecosystem Digest 2026-08-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-13 02:06 UTC

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

Based on the GitHub data provided for OpenClaw (github.com/openclaw/openclaw), here is the project digest for 2026-08-13.

---

# OpenClaw Project Digest - 2026-08-13

## 1. Today's Overview

OpenClaw continues to operate at a very high activity level, with 500 issues and 500 PRs updated in the last 24 hours. The majority of issues remain open (405) and active, indicating a substantial backlog and ongoing community engagement. There were no new releases today, so focus is entirely on development and issue triage. The most prominent theme is **reliability and message integrity**, particularly around subagent orchestration, with multiple open high-severity issues tracking silent message loss and delivery failures. A significant number of feature requests remain in maintainer review, suggesting a bottleneck in product decisions and prioritization.

## 2. Releases

No new releases were published on 2026-08-13. The latest available version remains 2026.7.1-2, as referenced in the issue #114154.

## 3. Project Progress

While no new releases were cut, the activity on pull requests indicates active merging and closing of features and fixes. In the last 24 hours, 144 PRs were either merged or closed. Key fixes that have been merged or closed include:

- **#79405** (Merged/Closed): A fix to **harden subagent completion fallback delivery** was merged, attempting to address a class of critical reliability issues around lost subagent results. This directly targets issues like #67777 and #92433.
- **#110796** (Closed): A fix to **page SQLite transcript visits for `sessions.files.list`**, improving the performance and stability of the Control UI when dealing with large transcripts.
- **#81829** (Open, waiting on author): A fix to make **`openclaw doctor` exit non-zero on invalid config**, a small but important fix for CI/CD pipelines.
- Other PRs (e.g., #122912, #122879) focus on internal tooling and CI, such as preserving plugin inventory during updates and preventing test timeouts.

This shows steady progress on improving the core reliability of the platform, complementing the ongoing work visible in the open issue tracker.

## 4. Community Hot Topics

The most active discussions highlight **severe reliability frustrations** and a desire for more control over the agent's behavior.

- **[#121058 - Silent reply failures still recurring](https://github.com/openclaw/openclaw/issues/121058)** (91 comments): This is the most active issue by far. Despite a previous fix being closed, users report the silent reply failure is still occurring. The high comment count on a regression indicates significant user frustration and a potential failure in the previous resolution. **(Open, 0 likes)**
- **[#7707 - Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** (45 comments): A long-standing, highly-requested security feature. Users want the ability to tag memory entries by trust level to prevent memory poisoning attacks from untrusted web content or third-party skills. It is tagged with multiple labels including `needs-product-decision` and `needs-security-review`. **(Open, P2)**
- **[#44925 - Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)** (26 comments): Users report multiple failure modes where subagent task results are silently lost without retry or notification. This is listed as a P1 bug impacting data and message loss. **(Open, 2 likes)**
- **[#57901 - Safeguard compaction ignores model config](https://github.com/openclaw/openclaw/issues/57901)** (15 comments): A bug where the designated `compaction.model` config is ignored, causing the system to use the session's main model instead, potentially leading to unexpected costs or performance. **(Closed)**
- **[#39604 - Feature: Allow private network access for web_fetch](https://github.com/openclaw/openclaw/issues/39604)** (14 comments, 12 likes): The most-liked feature request. Users want an opt-in config key for `web_fetch` to allow it to reach private/internal network addresses, enabling interaction with local tools and services. **(Closed)**

## 5. Bugs & Stability

The bug landscape continues to be dominated by **P1 reliability issues** around session state and message loss. The most critical, as evidenced by `issue-rating: 🦞 diamond lobster` and `impact:message-loss`, are:

- **#96975 / #92433 / #67777 / #47975 / #54488**: A cluster of related issues chronicling **subagent completion failures**, including completions being dropped, delivered to dead runs, or lost due to lane starvation. These are arguably the project's top production pain point. While PR #79405 was merged, several of these issues remain open with `needs-maintainer-review`, indicating the fix may not have covered all cases.
- **[#111498 - Main agent blocked by persistent workspace-state migration](https://github.com/openclaw/openclaw/issues/111498)**: A regression on macOS where the agent refuses all turns due to a stuck workspace-state migration, effectively bricking the main agent for affected users.
- **[#97983 - iOS/WebChat messages do not trigger replies](https://github.com/openclaw/openclaw/issues/97983)**: Messages append to the transcript but do not deliver or trigger assistant replies, breaking core functionality on mobile and web clients.
- **[#43367 - Multi-agent orchestration is unstable](https://github.com/openclaw/openclaw/issues/43367)**: A cluster of failures including config overwrites, session-lock failures, and detached child work when running multiple agents concurrently.
- **[#91363 - Isolated cron consistently fails](https://github.com/openclaw/openclaw/issues/91363)**: Cron jobs in isolated sessions consistently fail with "LLM request failed," with model requests never reaching the provider, rendering this feature unusable.
- For several of these, including #92433, #96975, and #43367, linked PRs are open (e.g., #79405, #122747), but the fact that they remain in "needs proof" or "waiting on author" suggests that the fixes are either incomplete or not yet validated.

## 6. Feature Requests & Roadmap Signals

Beyond the pressing bugs, there is a clear backlog of valuable feature requests awaiting product decisions:

- **Security and Trust:**
    - **Memory Trust Tagging (#7707):** High community demand for a hardened memory system.
    - **Skill Installation Security (#45031 - Closed):** The project is already addressing this, likely via ecosystem tools.
- **Model & Cost Control:**
    - **Expose OpenRouter cost (#9016):** Users want per-message cost visibility for better expense tracking.
    - **Pace-aware rate limiting (#45771):** A desire for built-in guardrails to prevent agents from burning through API rate limits.
- **Configuration & Customization:**
    - **YAML config support (#45758):** A simple, widely-requested quality-of-life feature for many users.
    - **`session.resetPrompt` (#45501):** The ability to override the hardcoded session startup message.
    - **Skill Priority Configuration (#50199):** To resolve ambiguity when multiple skills can perform the same task.
- **User Experience:**
    - **Self-hosted STT/TTS support in webchat (#45508):** An important feature for privacy-focused users who want to use open-source/local voice models, and it has high engagement (2 likes).

**Prediction for Next Version:** Given the urgency and focus on reliability, the next release will likely prioritize fixes for the subagent completion loss cluster and the OAuth/10s timeout issue (#89278). In terms of features, "YAML config support" (#45758) is a low-risk, high-requested item that could easily be included. "Memory Trust Tagging" (#7707) is a larger architectural change, so it is less likely to appear in the immediate next release.

## 7. User Feedback Summary

- **User Pain Points:** The overwhelming sentiment is frustration with **silent failures**. Issues like #121058, #44925, #97983, and #91363 show that users cannot trust the agent to execute reliably, especially with subagents or background tasks. This is a critical trust deficit for an AI agent product.
- **Use Cases:** Users are actively using OpenClaw for:
    - **Multi-agent orchestration** (#43367): Parallel coding tasks, highlighting the need for concurrent stability.
    - **Automated browser workflows** (#44431): A field report on real-world automation, showing active use in complex tasks like email provider signups.
    - **Mobile and web interaction** (#97983, #46058): Clear demand for reliable and feature-rich mobile experiences.
    - **Autonomous cron-and-heartbeat-driven tasks** (#91363): Users depend on the agent to run unattended, and failures here are particularly problematic.
- **Satisfaction/Dissatisfaction:** Overall satisfaction is likely **low** due to the "Regressions" and "Behavior bugs" (likely stemming from the project's rapid churn) breaking core workflows. However, there is high engagement for improvement, with detailed field reports (#44431) and feature proposals (#9016), indicating a dedicated and technically savvy user base that wants the product to succeed.

## 8. Backlog Watch

Several critical issues are awaiting maintainer action, creating long-running stability risks:

- **[#7707 - Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)**: Open since 2026-02-03, this security-focused feature has 45 comments and is still waiting on maintainer and product decisions. Its age and criticality make it a priority.
- **[#44925 - Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)**: Open since 2026-03-13, this P1 bug with 26 comments remains unaddressed in the "fix" pipeline, despite PR #79405 being merged. The recurring theme in today's "hot topics" suggests this entire category needs a more comprehensive fix.
- **[#121058 - Silent reply failures still recurring](https://github.com/openclaw/openclaw/issues/121058)**: The fact that this issue is the most active and open suggests the maintainers' previous "fix" (#116277) did not work. This needs urgent and deep investigation.
- **[#107814 - gpt-5.3-codex-spark emits empty arguments](https://github.com/openclaw/openclaw/issues/107814)**: This API stability issue could affect all users of this model and is tagged `needs-live-repro`, but it may be blocked on an external provider bug.
- **[#97616 - OpenClaw leaks unreaped child processes](https://github.com/openclaw/openclaw/issues/97616)**: A slowly accumulating infrastructure issue that will degrade stability over time, and is still in the `needs-info` stage after over a month.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Ecosystem
**Date:** 2026-08-13
**Prepared for:** Technical decision-makers and developers

---

## 1. Ecosystem Overview

The open-source AI agent landscape is characterized by **high-velocity development with a shared focus on reliability engineering**. Across all active projects, the dominant themes are **silent message loss prevention**, **subagent orchestration stability**, and **cross-platform desktop reliability**. The ecosystem is bifurcating into two architectural camps: **monolithic reference implementations** (OpenClaw, ZeroClaw) that prioritize feature breadth and plugin extensibility, and **channel-first assistants** (NanoBot, CoPaw, IronClaw) that optimize for multi-platform messaging integration and lightweight deployment. A notable trend is the emergence of **security hardening as a top priority** across projects, with multiple SSRF, path traversal, and credential-leak fixes landing in a single 24-hour window. The ecosystem is actively transitioning from "demo-ware" to **production-grade infrastructure**, evidenced by the proliferation of observability integrations, CI matrix expansion, and enterprise-oriented features.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Notes |
|---------|:------------:|:---------:|:--------------:|:-------------:|-------|
| **OpenClaw** | 500 | 500 | None (latest: 2026.7.1-2) | ⚠️ **Medium** | High volume but 81% issues open; critical reliability bugs unresolved |
| **NanoBot** | 8 | 36 | None | ✅ **High** | 47% PR closure rate; rapid security fixes; strong contributor engagement |
| **Hermes Agent** | 50 | 50 | None (v0.20.0 recent) | ⚠️ **Medium** | Plugin expansion active; Windows regressions unresolved |
| **PicoClaw** | 2 | 3 | None | 🔴 **Low-Medium** | Stale issues; no maintainer responses; PRs unreviewed for weeks |
| **NanoClaw** | 4 | 10 | None | ⚠️ **Medium** | Agent Plugin refactor critical path; review bottleneck |
| **IronClaw** | 41 | 50 | **2 RCs shipped today** | ✅ **High** | Fast iteration (rc.2→rc.3 in 24h); QA-focused |
| **LobsterAI** | 6 | 9 | None (2026.8.12 recent) | ✅ **High** | 78% closure rate; cross-platform polish |
| **CoPaw (QwenPaw)** | 30 | 44 | **v2.1.0-beta.4 today** | ⚠️ **Medium-High** | Rapid beta cycle but systemic stability issues |
| **ZeroClaw** | 50 | 50 | None (v0.8.3) | ✅ **High** | 40% PR closure; strong security posture |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | — | — | — | ⚪ **Inactive** | No activity |

***Health Score** is a qualitative composite of closure rates, maintainer responsiveness, severity of open issues, and release cadence.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Unmatched feature breadth**: OpenClaw's 500-issue/500-PR daily volume reflects the largest feature surface and plugin ecosystem in the cohort
- **Established community**: The 91-comment thread on #121058 demonstrates a deeply engaged user base that actively stress-tests the platform
- **Market-leading integrations**: Control UI, subagent orchestration, and session management go beyond what NanoBot or PicoClaw offer

### Technical Approach Differences
- **Monolithic core + plugin architecture** vs. NanoBot's lightweight channel-first Python design
- **Subagent orchestration as a first-class concept** — peers (CoPaw, IronClaw) are just beginning to address multi-agent stability that OpenClaw has wrestled with for months
- **Config-driven model routing** (with known gaps like #57901) vs. NanoBot's per-provider declarative profiles

### Community Size & Trust Deficit
- **Largest community** by volume (500 issues/day vs. NanoBot's 8), but this is a double-edged sword — the sheer backlog creates maintainer bottleneck
- **Critical trust gap**: The recurring "silent reply failure" (#121058) is the most-commented issue across ALL projects today, and the previous fix (#116277) failed. This is OpenClaw's #1 risk
- **Competitive vulnerability**: While OpenClaw wrestles with P1 reliability issues, NanoBot and IronClaw are shipping fixes within days. If OpenClaw doesn't resolve the subagent-message-loss cluster soon, users may migrate to lighter, more reliable alternatives

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|------------|-------------------|----------------|
| **Silent failure elimination** | OpenClaw, CoPaw, Hermes, PicoClaw, NanoClaw | Subagent results lost, tasks stalling mid-plan, messages appended but not delivered |
| **MCP reliability & security** | NanoBot, PicoClaw, ZeroClaw, Hermes, CoPaw | Connection failures hanging loops, OAuth credential loss, tool name collisions, access policy gaps |
| **Cross-platform desktop stability** | Hermes, IronClaw, ZeroClaw, LobsterAI, CoPaw | Windows installer failures, macOS blank windows, console flashing, file icon issues |
| **Context/memory integrity** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Compaction ignoring model config, session transcript loss, memory docs not matching behavior |
| **Security hardening** | NanoBot, ZeroClaw, CoPaw, Hermes | SSRF gates, path traversal in browser tools, credential redaction, plugin permission models |
| **Provider/cost management** | OpenClaw, ZeroClaw, CoPaw, Hermes | Per-model thinking levels, OpenRouter cost visibility, lazy tool schema loading to reduce tokens |
| **CI & test infrastructure** | ZeroClaw, NanoBot, IronClaw, Hermes | Windows/macOS matrices, stress coverage for tool paths, timezone-sensitive test determinism |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Differentiator |
|---------|--------------|-------------|------------------------|----------------|
| **OpenClaw** | Feature-breadth agent platform | Power users, developers | Monolithic core + plugin registry | Unmatched feature surface; subagent orchestration |
| **NanoBot** | Channel-first lightweight assistant | Individual users, small teams | Python gateway, MCP-centric | Security-hardened channel access; rapid fix cycle |
| **Hermes Agent** | Desktop + plugin extensibility | Desktop-centric developers | Desktop app + gateway model | Plugin hook taxonomy; desktop workspace control |
| **PicoClaw** | Multi-channel routing | Team infra deployments | Discord/Telegram routing | Routed-agent context management; topic threading |
| **NanoClaw** | Mobile messaging reliability | Mobile/WhatsApp/Signal users | Baileys-based channels | Channel-specific delivery validation |
| **IronClaw** | Release-hardened orchestration | Self-hosters, DevOps | NEAR-based, containerized | Fast RC iteration; orchestrator integration |
| **LobsterAI** | Cross-platform desktop polish | Desktop consumers | Renderer/Main process split | Windows/macOS UX consistency; plugin install robustness |
| **CoPaw (QwenPaw)** | Chinese-market assistant | Chinese-speaking users | Console + SIP channels | Computer-use automation; bilingual community |
| **ZeroClaw** | Enterprise-ready agent platform | Enterprise teams | Docker/WASM/Cron ecosystem | Security-first; WASM sandboxing; observability |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration / Feature Shipping
- **IronClaw** — Two RCs in 24 hours; aggressive QA bug-bash cycle; release-focused
- **CoPaw (QwenPaw)** — Beta.4 following beta.3 in 2 days; high PR closure (16/44); active community
- **NanoBot** — Strong security cluster merged; WebUI features landing; 47% PR closure rate

### Tier 2: High Volume with Reliability Challenges
- **OpenClaw** — Massive activity but struggling with regression management; feature-rich but trust-eroding
- **ZeroClaw** — Mature governance (RFC tracker); security fixes landing; but backlog items linger
- **Hermes Agent** — Plugin expansion progressing; Windows regressions threatening desktop users

### Tier 3: Steady with Backlog Concerns
- **LobsterAI** — Consistent cross-platform fixes; but March-era issues unresolved (trust concerns)
- **NanoClaw** — Active refactor (Agent Plugins 1.0) but review bottleneck on 3-month-old PRs

### Tier 4: At Risk / Stagnating
- **PicoClaw** — Stale issues without maintainer response; PRs unreviewed for 2+ weeks — **contributor attrition risk**
- **NullClaw, TinyClaw, Moltis, ZeptoClaw** — No activity; effectively dormant

---

## 7. Trend Signals

### For AI Agent Developers

**1. Reliability is the new feature.** Across every active project, the top complaint is silent failures — tasks stalling, messages lost, sessions freezing. Users will accept fewer features over unreliability. **Action:** Build observable execution traces and explicit failure notifications into your agent loop.

**2. MCP is becoming the integration backbone, but security is lagging.** Multiple projects are fixing MCP-related vulnerabilities (credential loss, tool collisions, access policy gaps) and reliability issues (connection failure hangs). **Action:** Treat MCP servers as untrusted dependencies; implement credential isolation and fault isolation.

**3. Subagent orchestration is the hard problem.** OpenClaw's months-long struggle with subagent message loss and CoPaw's silent task abandonment (#6921) both point to a systemic challenge. The LongHorizon-Harness pattern (#6923) may be a design direction worth exploring. **Action:** Design subagent result delivery as a guaranteed-message system with retries and dead-letter queues, not fire-and-forget.

**4. Desktop is a first-class citizen now.** Windows/macOS reliability issues span Hermes, IronClaw, ZeroClaw, and LobsterAI. The era of "Linux-only" agents is over. **Action:** Add Windows/macOS CI from day one; test installers and file system operations cross-platform.

**5. Security is table stakes for adoption.** SSRF, path traversal, and credential leaks were fixed across NanoBot, ZeroClaw, and CoPaw in a single day. The community is security-aware and will publicly flag issues. **Action:** Implement SSRF gates, path validation, and credential redaction as core architectural principles, not afterthoughts.

**6. Cost visibility and control drive feature demand.** Lazy tool schema loading (Hermes #6839, 18👍), OpenRouter cost exposure (OpenClaw #9016), per-model thinking levels (LobsterAI #2475), and generic thinking/effort control (IronClaw #7537) all reflect a maturing user base managing token budgets. **Action:** Expose per-call token costs and allow per-session model overrides.

**7. Voice and local models are the next frontier.** TTS requests (NanoBot #4010, CoPaw MiniMax TTS PR, Hermes Xiaomi MiMo-V2.5) and self-hosted STT (OpenClaw #45508) indicate growing demand for privacy-preserving voice interaction. **Action:** Architect voice as a pluggable provider layer, not a hardcoded integration.

**8. WebUI and mobile experiences are increasingly critical.** Multiple projects (IronClaw, NanoBot, LobsterAI, PicoClaw) are investing in WebUI refactors, session collaboration, and mobile client reliability. Users expect to manage agents from anywhere. **Action:** Treat WebUI as a core surface, not an afterthought; ensure session state syncs across platforms.

---

*Report generated from 2026-08-13 community digest data across 13 projects. For granular details, refer to individual project digests.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Digest Date: 2026-08-13**

---

## 1. Today's Overview

NanoBot is experiencing a **high-velocity development period**, with 36 PRs updated in the last 24 hours — a roughly **4.5:1 PR-to-issue ratio** that indicates strong contributor engagement. The project saw **17 PRs merged or closed** (47% closure rate on updated PRs), with active work concentrated in security hardening (Docker capabilities, ExecTool path guards, credential redaction for remote fetchers) and WebUI experience improvements (session collaboration, setup flow redesign, QR-login persistence). A notable refactoring wave is underway, with PRs moving provider capabilities to declarative profiles and separating MCP lifecycle from the core AgentLoop. Issue activity was lighter (8 items, 4 closed), with several older bugs (docker permission, reasoning duplication) now resolved. **Overall project health is strong**, with a healthy mix of community-driven bug fixes and maintainer-led architectural improvements.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Project Progress

**Security-hardening cluster (merged):**
- **[PR #5329](https://github.com/HKUDS/nanobot/pull/5329)** — `fix(exec): guard bare and named-user home paths` — Fixes workspace-boundary bypasses in ExecTool tilde expansion, closing multiple attack vectors including input redirection (`<~root/.bashrc`) and assignment values.
- **[PR #5258](https://github.com/HKUDS/nanobot/pull/5258)** — `fix(web): keep credential-bearing URLs away from the remote Jina reader` — Resolves the **[#4884 security issue](https://github.com/HKUDS/nanobot/issues/4884)** by routing userinfo/token-bearing URLs through local readability path.
- **[PR #5320](https://github.com/HKUDS/nanobot/pull/5320)** — `fix(docker): restore capabilities for privilege drop` — Fixes Docker Compose deployment failure (`entrypoint.sh: Permission denied`), closing **[#5295](https://github.com/HKUDS/nanobot/issues/5295)**.
- **[PR #5218](https://github.com/HKUDS/nanobot/pull/5218)** — `fix(tools): treat redirection and grouping delimiters in ExecTool path guard`.

**Session/state management:**
- **[PR #5279](https://github.com/HKUDS/nanobot/pull/5279)** — `fix(session): store session history outside the agent workspace` — Closes the reachability problem where workspace-scoped tools could access session transcripts.

**Provider compatibility:**
- **[PR #5362](https://github.com/HKUDS/nanobot/pull/5362)** — `feat(providers): support DeepSeek V4 Pro Responses` — Adds routing for `deepseek-v4-pro` through the native Responses API.
- **[PR #5230](https://github.com/HKUDS/nanobot/pull/5230)** — `fix(gemini): preserve imported tool calls with signature fallback` — Fixes Gemini 3 rejecting replayed function-call steps from providers without signatures.

**Architecture/refactoring (open, active):**
- **[PR #5204](https://github.com/HKUDS/nanobot/pull/5204)** — Declarative `ResponsesCapabilities` profile for OpenAI, GitHub Copilot, DeepSeek.
- **[PR #5291](https://github.com/HKUDS/nanobot/pull/5291)** — Persist subagent conversation transcripts for reviewability.

---

## 4. Community Hot Topics

**Most active discussion:**
- **[#5327: "Nanobot repeats multiple times the same message while reasoning"](https://github.com/HKUDS/nanobot/issues/5327)** (11 comments, closed) — This was the highest-engagement item. Users reported random repetition of phrases like *"Good points, let me investigate the issue"* during reasoning. The issue is now closed, suggesting a fix landed.
- **[#5295: Docker Compose deployment failure](https://github.com/HKUDS/nanobot/issues/5295)** (5 comments, closed) — Permission denied on entrypoint.sh; fixed by PR #5320 restoring required capabilities.

**Underlying needs analysis:**
The high engagement on the message-duplication bug indicates users heavily rely on NanoBot for **iterative investigation workflows** (step-by-step problem analysis), and subtle output glitches damage trust in conversation flow. The Docker issue shows **deployment friction** is still a critical adoption barrier; the rapid fix (2 days from report to merged PR) demonstrates good maintainer responsiveness. The MCP-related issues and PRs (#4858 refactor, #5338 credential preservation) signal that **MCP reliability is a top community priority** as users build increasingly complex multi-server setups.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Notes |
|----------|----------|--------|-------|
| **P0** | **[#5271: Stale background task saves overwrite session data](https://github.com/HKUDS/nanobot/pull/5271)** (open PR) | 🟡 In progress | Prevents session corruption after `/new`; no merge yet |
| **P1** | **[#5329: ExecTool tilde path boundary bypass](https://github.com/HKUDS/nanobot/pull/5329)** (merged) | 🟢 Fixed | Security-critical workspace escape vector |
| **P1** | **[#5320: Docker Compose entrypoint permission](https://github.com/HKUDS/nanobot/pull/5320)** (merged) | 🟢 Fixed | Closed issue #5295 |
| **P1** | **[#5258: Credential-bearing URLs sent to Jina](https://github.com/HKUDS/nanobot/pull/5258)** (merged) | 🟢 Fixed | Closed issue #4884 |
| **P2** | **[#5357: Cancel active turn before deleting sessions](https://github.com/HKUDS/nanobot/pull/5357)** (open PR) | 🟡 In progress | Prevents resurrection of deleted sessions |
| **P2** | **[#5360: MCP tool name collisions for non-ASCII input](https://github.com/HKUDS/nanobot/pull/5360)** (open PR) | 🟡 In progress | e.g., `"获取天气"` collapses to `_` |
| **P2** | **[#5338: MCP OAuth credentials lost on store read failure](https://github.com/HKUDS/nanobot/pull/5338)** (open PR) | 🟡 In progress | Read-failure treated as empty store leads to overwrites |
| **Issue** | **[#5348: Token-usage tests fail in 5hr/day timezone window](https://github.com/HKUDS/nanobot/issues/5348)** | 🔴 New | Test determinism issue, not yet addressed |

---

## 6. Feature Requests & Roadmap Signals

**Active feature work:**
- **[PR #5358: WebUI session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358)** — Stable `@name` for sessions, peer-session picking in composer. **Likely in next release.**
- **[PR #5356: Improved setup flows across chat channels](https://github.com/HKUDS/nanobot/pull/5356)** — Organized channel config fields with actionable unconfigured toggles. **Likely in next release.**
- **[PR #5361: Persist WeChat QR-login token to config.json](https://github.com/HKUDS/nanobot/pull/5361)** — Critical for WeChat channel reliability. **Likely in next release.**

**High-community-interest proposals:**
- **[#4010: Text-to-speech / voice output support](https://github.com/HKUDS/nanobot/issues/4010)** (3 👍, 3 comments, open since May) — Voice input exists but no voice output on native-voice channels. Growing interest; might be picked up after channel-setup UX work completes.
- **[#5350: Backward-compatible QwenCloud provider alongside DashScope](https://github.com/HKUDS/nanobot/issues/5350)** (open, 1 comment) — International users need QwenCloud path without breaking existing DashScope configs.

**Product-direction signals:**
The WebUI is clearly the primary focus surface right now — three PRs target WebUI UX/functionality. The MCP refactoring (#4858, #5338, #5360) suggests NanoBot is positioning itself as a **multi-MCP orchestration platform**, and the security cluster (4 merged security PRs) signals that **enterprise-readiness is a priority** as the agent gains file-system and subprocess powers.

---

## 7. User Feedback Summary

- **Pain: Reasoning output unreliability.** Repeated message duplication (issue #5327) surfaced as the most-commented item this period — users use NanoBot for deep investigation workflows and expect faithful reasoning traces.
- **Pain: Deployment friction.** The Docker permission issue (#5295) shows that even documented deployment paths break across environments. Users need CI-tested Docker images.
- **Pain: Session data loss anxiety.** Two PRs (#5271, #5357) address session-overwrite/corruption scenarios, indicating users have reported data-loss incidents.
- **Gap: Voice output missing.** The TTS request (#4010, 3 👍) highlights that voice-first channels (WeChat, Telegram) feel incomplete without spoken responses.
- **Positive:** The swift closure of both the Docker and Jina-credential issues within days demonstrates strong maintainer attention; users are getting their reported issues resolved quickly.
- **Usability need:** The WebUI setup-flow PR (#5356) and MCP OAuth handling (#5338) indicate users struggle with complex configuration — guidance and error recovery are being prioritized.

---

## 8. Backlog Watch

- **[#4010: Text-to-speech / voice output support](https://github.com/HKUDS/nanobot/issues/4010)** — Open since **2026-05-26** (79 days). 3 👍, only 3 comments. Unaddressed; community interest is slowly growing. Needs a maintainer feasibility assessment or at least a comment acknowledging the roadmap impact.
- **[#4878: Auto-discovery mechanism for agent hooks](https://github.com/HKUDS/nanobot/pull/4878)** — Open since **2026-07-10** (34 days), marked `conflict`. Likely needs a rebase; the feature (pkgutil + entry_points hook registration) would meaningfully simplify custom-hook workflows.
- **[#4329: Native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/4329)** — Open since **2026-06-13** (61 days), marked `conflict`. A large-scale UX improvement that keeps getting pushed; if this stalls, it may diverge irreconcilably from the Python gateway.
- **[#5275: Matrix "reply in thread" should form dedicated context](https://github.com/HKUDS/nanobot/issues/5275)** — Open since **2026-08-06**. Related PR #5292 addresses the outbound side (reply to room-level event). Thread-context semantics still need a deeper design decision.
- **[#5348: Test timezone window failures](https://github.com/HKUDS/nanobot/issues/5348)** — New but important CI reliability issue; recording token usage in UTC while settings payload reads configured timezone. Will cause daily CI failures; should be triaged promptly.

---

*Digest generated from GitHub activity data for HKUDS/nanobot, covering 2026-08-12 to 2026-08-13.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-13

## 1. Today's Overview

Hermes Agent is in a period of **high activity and rapid feature expansion**. Both issue and PR densities are at capacity (50 each updated in 24h), with a healthy open-to-closed ratio of approximately 3.4:1 for issues and 2.1:1 for PRs. The project is currently processing a **large backlog of plugin-interface expansion PRs (#64182)** and a **Webhook Repair Campaign meta-issue (#84834)**, indicating a concerted push on architectural extensibility. Simultaneously, **desktop stability and Windows reliability** are emerging as critical areas, with multiple P1-severity regressions reported this week. While no formal release was cut today, the volume of merged work and the aggregation of fixes suggests a release is imminent.

## 2. Releases

No official releases were published in the last 24 hours. Given the recent tagging of v0.20.0 and the significant merge activity (16 PRs closed/merged), a **patch or minor release (likely v0.20.1 or v0.21.0)** is expected imminently to address desktop and Windows regressions.

## 3. Project Progress

While no PRs were merged today, 16 PRs transitioned to closed/merged status, with vital progress across feature backlogs:

- **Plugin Interface Expansion (Tracker #64182):** The core roadmap advanced significantly. The `pre_transcription` hook for STT prompts (#65632, #84934) was closed, addressing a longstanding gap for plugin-driven speech recognition. The batch disposition of pending hook PRs (#64231) also closed, signaling the maintainers have standardized the hook taxonomy.
- **Desktop Improvements:** `#42525` — [feat(desktop): allow changing workspace/directory from Hermes Desktop UI](https://github.com/NousResearch/hermes-agent/issues/42525) — was closed, delivering a highly-requested quality-of-life feature.
- **Streaming & Event Architecture:** The streaming LLM output observer hooks (#64161) and inter-plugin event bus (#64164) were closed, marking the finalization of core plugin streaming interfaces.
- **Registry & Context:** Additive-only redaction patterns (#65449) and plugins registering custom `@`-prefix context references (#26193) were closed, expanding agent extensibility.

## 4. Community Hot Topics

Active discussions reveal a community focused on **efficiency, scalability, and robust configuration**.

1.  **[#6839 — Lazy Tool Schema Loading (Feature, 39 comments, 18 👍)](https://github.com/NousResearch/hermes-agent/issues/6839)**: Highly engaged. The community is feeling the token burn of 50+ toolsets injected every call, especially on local models. The demand for two-pass injection is high, making this a likely candidate for near-term implementation.
2.  **[#64182 — Plugin Interface Tracking (33 comments)](https://github.com/NousResearch/hermes-agent/issues/64182)**: The nerve center for the plugin expansion. High engagement aligns with the heavy PR volume targeting this tracker, showing a developer-centric community eager to contribute.
3.  **[#66616 — Skills Index Watchdog Degraded (19 comments)](https://github.com/NousResearch/hermes-agent/issues/66616)**: A bot-reported infrastructure issue with high engagement, likely from maintainers, highlighting concerns about documentation site automation stability.
4.  **[#83683 — Windows Desktop Gateway Not Relaunching (P1, 10 comments)](https://github.com/NousResearch/hermes-agent/issues/83683)**: A critical regression affecting production users (WeChat/QQ/Telegram going silent) is gaining traction, reflecting the severity of desktop reliability issues.

## 5. Bugs & Stability

Several critical bugs are actively impacting users, particularly on Windows:

- **P1: Windows Gateway and Update Failures**
  - **[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)**: Desktop restart kills live gateway, never relaunches. **Fix Status:** No PR linked yet; unassigned.
  - **[#84185](https://github.com/NousResearch/hermes-agent/issues/84185)**: Gateway cold-started after `hermes update` dies silently with no logs. **Fix Status:** No PR linked; unassigned.
  - **[#53479](https://github.com/NousResearch/hermes-agent/issues/53479)**: CLI updater uses unreliable `rev-list` counts for shallow installs. **Fix Status:** No PR linked.
  - **Fix Available:** **PR #81039** (closed) resolved the Windows console-flash-on-spawn issue.
- **P2: Session, Auth, and Runtime Crashes**
  - **[#77505](https://github.com/NousResearch/hermes-agent/issues/77505)**: [Severe scroll jitter](https://github.com/NousResearch/hermes-agent/issues/77505) in Desktop sessions list. A follow-up (dead-zone) issue **#84964** was filed, indicating the problem persists. **Fix Status:** No conclusive PR; #77328 flagged as insufficient.
  - **[#83427](https://github.com/NousResearch/hermes-agent/issues/83427)**: `browser_exec` crashes due to `pydantic_core` ModuleNotFoundError when desktop sets PYTHONPATH.
  - **[#84959 (PR)](https://github.com/NousResearch/hermes-agent/pull/84959)**: A security hardening PR was submitted to block `execute-code` process bypasses from the gateway.
  - **[#81039](https://github.com/NousResearch/hermes-agent/issues/81039)** (closed): Windows console windows flash on every subprocess spawn. Fixed by PR [#81039](https://github.com/NousResearch/hermes-agent/issues/81039).

## 6. Feature Requests & Roadmap Signals

The project's roadmap is clearly steering toward modularity and context/cost optimization.

- **Context Efficiency (High Priority):** **#6839** (Lazy Tool Schema Loading) remains the top signal. The project is likely to prioritize this given the vocal user base and token-cost implications for local models.
- **Kubernetes Native Support (Emerging):** [PR #84962](https://github.com/NousResearch/hermes-agent/pull/84962) added a Kubernetes session-pod terminal backend, indicating enterprise/DevOps use cases are being addressed.
- **Advanced Speech & Media:** The closure of STT `pre_transcription` hooks (#64168) and requests for native **Xiaomi MiMo-V2.5** TTS/ASR support (#46257) show growing demand for richer, multi-lingual speech integration.
- **Multi-Gateway Desktop:** #45779 (multi-gateway tabs in Desktop) has strong upvotes (7) and remains open, reflecting a need for managing multiple agents.
- **Data Formatting & Config:** The TUI fix for prompt cleanup (#84970) and configurable quota thresholds (#84946) are being actively implemented, showing responsiveness to configuration and UX feedback.

## 7. User Feedback Summary

- **Frustration on Windows:** The combination of crashing gateways, silent update failures, and console flashing (even if fixed) points to a perception that Windows is a second-class citizen. Users are reporting production downtime (WeChat/QQ bots going silent).
- **Hybrid Platform Needs:** Users are running Hermes across VPS, home servers, and Macs (#45779), demanding multi-gateway desktop views.
- **Data Handling Gaps:** Users are hitting legacy encoding walls (`@file` with GBK/Shift_JIS — #84206) and want configurable URL autolinking (#84921), highlighting a desire for enterprise-friendly data loading.
- **Positive Sentiment on Extensibility:** The high volume of community-submitted PRs to the plugin tracker (#64182) demonstrates a robust and welcoming contributor ecosystem.

## 8. Backlog Watch

These items have persisted or are blocked and require imminent maintainer attention:

- **[#53479](https://github.com/NousResearch/hermes-agent/issues/53479) — Shallow/Diverged Install Update Bug (P1):** Open since June 27, this updater reliability issue remains critical for correct versioning but has no linked PR or assignment.

- **[#67934](https://github.com/NousResearch/hermes-agent/pull/67934) — Ollama Model Discovery (Blocked):** A P2 PR marked `MERGEABLE / BLOCKED` for a month. It fixes local model discovery for Ollama users but is stuck waiting for checks/review. Needs maintainer triage.

- **[#71056 & #72671 — Kanban/Gateway Test PRs (Blocked):** These PRs are also marked `MERGEABLE / BLOCKED`, waiting for CI or review. They are foundational test improvements that should be merged to improve project health.

- **[#70667 — Kanban CLI Refusal Test (Blocked):** Similar to the above, this test coverage PR has been waiting since July 24 for attention.

- **[#38193 — OAuth MCP Server Deadlock (P2):** First reported June 3, this is a complex concurrency bug with a recently submitted fix PR ([#84963](https://github.com/NousResearch/hermes-agent/pull/84963)) — requires immediate review priority as the issue has persisted for 2+ months.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Digest Date: 2026-08-13**
**Data Window: 2026-08-12 – 2026-08-13**

---

## 1. Today's Overview

PicoClaw is in a period of moderate activity with 2 issues and 3 pull requests updated in the last 24 hours, all remaining open. While no new releases were published, there is meaningful development momentum in the PR pipeline, particularly around routed-agent context management, Telegram topic support, and a new web search provider. The two stale issues (both marked `[stale]`) concerning web UI input lag and MCP server connection failures continue to attract community engagement but have not received maintainer responses, suggesting a potential bottleneck in issue triage. Overall, the project is stable but showing signs that maintainer bandwidth may be stretched thin relative to incoming contributions.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. However, three pull requests remain active and show ongoing development:

- **[PR #3299 — Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** (updated 2026-08-12): This contribution adds Exa as a native `tools.web` / `web_search` provider, leveraging Exa's `POST /search` API with `type: "auto"` and `contents.highlights`. It supports existing date-range filters via `startPublishedDate`. This is a notable feature expansion that would diversify the project's web search capabilities beyond existing providers. The PR has been open since July 26 and appears to be making incremental progress.

- **[PR #3316 — fix: routed-agent context management](https://github.com/sipeed/picoclaw/pull/3316)** (updated 2026-08-12): This fix addresses a significant defect where routed agents (via dispatch rules to Discord channels) were not respecting history, summarization, compression, or seahorse bootstrap settings. The bug report includes an important detail: auto-compaction never triggered regardless of message count, meaning long-running routed sessions could experience unbounded context growth. This fix is critical for users relying on multi-channel routing.

- **[PR #3315 — Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)** (updated 2026-08-12): This enhancement extends Telegram topic handling to private bot chats. Previously, PicoClaw only recognized topics when `Chat.IsForum` was true (which works for forum supergroups) but missed `IsTopicMessage` in private bot chats, causing topic metadata to be lost in those contexts.

*Note: The absence of merged PRs in this window could indicate either slower review cycles or that these PRs are still undergoing refinement.*

---

## 4. Community Hot Topics

The most active discussions in the last 24 hours (both with 4 comments each):

- **[Issue #3281 — Web UI chat input is very laggy with long history](https://github.com/sipeed/picoclaw/issues/3281)** (created 2026-07-21, updated 2026-08-12, 1 👍): This performance issue reports that typing in the web UI becomes increasingly unresponsive as chat history grows in a session. The reporter notes this in version 0.3.1. The engagement over ~3 weeks suggests this is a reproducible pain point affecting day-to-day usability. **Underlying need:** Users expect smooth, near-instant input experiences regardless of session size; this suggests a potential frontend rendering or DOM management issue that may need architectural attention.

- **[Issue #3269 — MCP server connection failure hangs agent loop](https://github.com/sipeed/picoclaw/issues/3269)** (created 2026-07-20, updated 2026-08-12, 1 👍): When an MCP server connection fails, the entire agent loop hangs, causing the chat interface to stop replying to users entirely. Reported against the nightly build with Qwen3 as the AI model provider. **Underlying need:** Robust fault isolation — a failure in one external dependency should degrade gracefully rather than halt the entire agent. This is a critical reliability concern for production deployments.

Both issues remain open and are marked `[stale]`, yet continue receiving comments — indicating ongoing user pain that hasn't been resolved or explicitly acknowledged by maintainers.

---

## 5. Bugs & Stability

**Critical:** 

- **[Issue #3269 — MCP server connection failure hangs agent loop](https://github.com/sipeed/picoclaw/issues/3269)** — This is the most severe stability issue currently open. A single failed MCP connection halts all agent processing, preventing the chat interface from responding. This constitutes a denial-of-service vector and a production availability risk. No fix PR currently exists; the issue has been open for over 3 weeks.

**High:**

- **[Issue #3281 — Web UI chat input lag with long history](https://github.com/sipeed/picoclaw/issues/3281)** — Performance degradation affecting the primary user interface. While not a crash, it significantly impairs usability in normal workflows (long conversations). No fix PR has been linked.

**Medium (in progress):**

- **[PR #3316 — Routed-agent context management bug](https://github.com/sipeed/picoclaw/pull/3316)** — Correctly identifies and fixes that routed agents (via dispatch rules) fail to respect history, summarization, and compression settings, leading to unbounded context growth. The `bug` label is implicit in the PR description. This is a fix-in-progress and not a newly reported regression.

**Assessment:** No new bugs were introduced in the last 24 hours, but the two long-standing critical/high issues remain unaddressed at the maintainer level.

---

## 6. Feature Requests & Roadmap Signals

- **[PR #3299 — Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** is the clearest roadmap signal. If merged, it would add a third web search provider option, increasing choice and flexibility for users who prefer Exa's API. The PR is advanced enough to include config hooks and API integration, suggesting the author expects it to land.

- **[PR #3315 — Telegram topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)** signals a broader requirement for platform parity — users deploying PicoClaw in Telegram private bot chats expect the same topic-based threading available in forum supergroups. This reflects a growing trend of using AI assistants in non-forum Telegram contexts.

- **No explicit feature requests** were raised in new issues during this window, but the demand for smooth web UI at scale (Issue #3281) and graceful MCP failures (Issue #3269) will likely drive internal architectural improvements rather than new features.

**Prediction:** The Exa provider and Telegram topic fix are strong candidates for the next version. Both have been open for several weeks with ongoing iteration, suggesting they remain priority contribution areas.

---

## 7. User Feedback Summary

- **Pain Point — Production reliability:** Issue #3269 highlights that PicoClaw's agent loop has zero fault tolerance for MCP server failures. For users running PicoClaw in production or with flaky external MCP dependencies, this is a showstopper. The reproduction with a nightly build and Qwen3 suggests this affects both stable and cutting-edge configurations.

- **Pain Point — UI responsiveness degradation:** Issue #3281 reveals that long sessions — a sign of successful, continued usage — directly degrade the input experience. This is a "victim of its own success" problem; as users engage deeply, the interface punishes them.

- **Positive signal:** The existence of PR #3316 (routed-agent context management) indicates that contributors are using PicoClaw in complex multi-channel configurations (Discord routing with per-channel memory expectations). This suggests adoption beyond single-channel hobby setups into more serious team/infrastructure deployments.

- **Themes:** Users are pushing PicoClaw into production-like scenarios (multiple channels, external MCP dependencies, long-lived sessions). Their complaints center on reliability (exit-failure modes) and performance at scale (UI responsiveness), both typical of a project transitioning from "works in demo" to "works under load."

- **Satisfaction:** Mixed — no explicit praise was captured in the issue window, but the continued contribution of quality PRs (topic handling, web search providers) suggests a healthy contributor community that values the project's extensibility.

---

## 8. Backlog Watch

Items requiring maintainer attention, ranked by urgency:

1. **[Issue #3269 — MCP connection failure hang](https://github.com/sipeed/picoclaw/issues/3269)** (open since 2026-07-20, marked stale 2026-08-12): Critical reliability bug with zero maintainer acknowledgement in 3 weeks. This is the highest-priority unaddressed item. The stale marker combined with continued user comments suggests the community is still affected.

2. **[Issue #3281 — Web UI input lag](https://github.com/sipeed/picoclaw/issues/3281)** (open since 2026-07-21, marked stale 2026-08-12): High-impact usability regression. No maintainer comment or linked fix on the issue thread.

3. **[PR #3299 — Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** (open since 2026-07-26, no reviewer comments visible): A complete feature implementation awaiting review for over 2 weeks. Silently letting this linger risks contributor attrition.

4. **[PR #3316 — Routed-agent context fix](https://github.com/sipeed/picoclaw/pull/3316)** (open since 2026-08-03, ~10 days): A bug fix with clear reproduction steps and impact. No reviewer interaction captured in the metadata.

**Pattern:** New contributors are submitting high-quality PRs, but there is no evidence of maintainer review cycles. The `stale` bot appears to be the only automated process interacting with old issues, and it may be doing more harm than good by labeling unresolved-but-relevant issues as stale. Maintainers should prioritize triage and response to prevent community burnout and signal PR abandonment.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Based on the GitHub data for NanoClaw (github.com/qwibitai/nanoclaw) on 2026-08-13, here is the project digest:

---

## NanoClaw Project Digest — 2026-08-13

### 1. Today's Overview
The project shows moderate activity with **4 open issues** and **10 pull requests** updated in the last 24 hours. Development is heavily focused on the **"Agent Plugins" format migration** (PR #3220) and its dependent work, indicating an ongoing substantial refactor. One PR was closed, but the majority of the open PRs are mature items that have been in review for weeks or months, suggesting a potential bottleneck in the review/merge process. The issue tracker is active with two new bug reports and a feature proposal, all created yesterday.

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Project Progress
One PR was closed today:
- **[#3086 [CLOSED] fix(whatsapp): validate recipient exists before sending**](https://github.com/nanocoai/nanoclaw/pull/3086) — This fix addresses a critical bug where WhatsApp messages to unregistered numbers were falsely reported as "delivered." By validating the recipient's existence via Baileys before sending, this prevents silent message loss and improves reliability for the WhatsApp channel.

The most significant ongoing effort is the **Agent Plugins 1.0.0** overhaul (PR #3220), which is transforming agent templates into a new standardized directory format. This foundational change is being coordinated with the setup wizard flow (PR #2909) and provider config updates (PR #3231).

### 4. Community Hot Topics
- **[Issue #2504: `ncl status` command proposal](https://github.com/nanocoai/nanoclaw/issues/2504)** (1 comment) — The oldest discussed item, requesting a lightweight operational health check. The issue notes that existing tools either lack health signals (`ncl sessions list`) or require external dependencies (`/add-dashboard`). This addresses an operational pain point for users monitoring their instances.

- **[PR #3220: Agent Plugins 1.0.0 (core-team)](https://github.com/nanocoai/nanoclaw/issues/3220)** — Despite its complexity, this PR is the centerpiece of current development. Multiple other PRs (#2909, #3231) are explicitly stacked on it, making it the critical path for several features.

- **[PR #2689: Signal DM platform ID consistency](https://github.com/nanocoai/nanoclaw/pull/2689)** — A long-running fix (since June) addressing message delivery issues on the Signal channel. It fixes dropped first messages and group registration problems, indicating real-world reliability issues on this platform.

### 5. Bugs & Stability
Two new bugs were reported yesterday (2026-08-12), both with medium-to-high severity:

1. **[#3234: Template-based agent groups get bare UUID IDs, breaking OneCLI](https://github.com/nanocoai/nanoclaw/issues/3234)** — **High severity**. Agent groups created via `--template` get IDs without the required `ag-` prefix, causing OneCLI's `ensureAgent` to reject them. This is likely a regression from the Agent Plugins work and could break agent spawning entirely.

2. **[#3233: Agent-scoped tasks are blind to pre-2.1.54 recurring tasks](https://github.com/nanocoai/nanoclaw/issues/3233)** — **Medium severity**. After migration to 2.1.54, agents cannot see or manage existing recurring tasks. This is a data migration issue that breaks task management for existing installs.

**No fix PRs exist for these two new bugs yet.**

### 6. Feature Requests & Roadmap Signals
- **[#3232: Proposal: add QwenCloud provider skill](https://github.com/nanocoai/nanoclaw/issues/3232)** — A request to add QwenCloud as an optional provider skill, following the pattern of existing modular providers. Given the maintainers' pattern of accepting such integrations, this has a good chance of being added in a future release.

- **[#2504: `ncl status` command](https://github.com/nanocoai/nanoclaw/issues/2504)** — A request for a native operational health check command. The issue has been open since May, and the feature is likely still on the backlog.

- **[PR #3189: `add-why` skill](https://github.com/nanocoai/nanoclaw/pull/3189)** — A utility skill to explain what happened to a single message, improving debuggability. This is a smaller feature with clear value.

### 7. User Feedback Summary
- **Operational visibility**: Users want a simple, built-in way to check instance health without external tools (Issue #2504).
- **Provider flexibility**: There is appetite for more model providers (QwenCloud), suggesting users want choices beyond the default set.
- **Migration pain points**: The recurring tasks migration issue (#3233) indicates that upgrades can break existing functionality, a significant source of user friction.
- **Channel reliability**: Fixes for WhatsApp (#3086) and Signal (#2689) highlight that multi-channel messaging is a critical feature with real-world reliability concerns that users depend on.

### 8. Backlog Watch
- **[PR #2346: fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346)** — Open since **May 8** and unreviewed for over 3 months. This fixes a bug where unrecognized commands cause responses to be silently dropped, a confusing user experience. This deserves maintainer attention.

- **[PR #2689: Signal DM platform ID consistency](https://github.com/nanocoai/nanoclaw/pull/2689)** — Open since **June 4** (over 2 months). Directly addresses message loss on Signal, a critical reliability issue.

- **[PR #2909: Template setup flow in wizard (core-team)](https://github.com/nanocoai/nanoclaw/pull/2909)** — Blocked on #3220, but the dependency chain should be clearly communicated to avoid further delays.

- **[Issue #2504: `ncl status` command](https://github.com/nanocoai/nanoclaw/issues/2504)** — Open since **May 15** with community interest; the feature is small and appears to have clear requirements. It may be a good candidate for a quick win.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Based on the provided GitHub data for IronClaw (nearai/ironclaw) on 2026-08-13, here is the project digest:

---

## IronClaw Project Digest — 2026-08-13

### 1. Today's Overview
Project activity is **high and release-focused**. With 41 issues and 50 PRs updated in the last 24 hours, the team is heavily engaged in stabilizing the `v1.2.0` release line while aggressively addressing a large volume of QA findings from a recent bug bash. The primary areas of focus are Telegram channel reliability, WebUI/UX improvements, and hardening the core agent loop (context management, token estimation, and capability execution). Two release candidates (`rc.2`, `rc.3`) were shipped within 24 hours to address critical deployment blockers, indicating a fast iteration cycle driven by operational feedback.

### 2. Releases
Two new release candidates were published on 2026-08-12:
- **[ironclaw-v1.2.0-rc.3](https://github.com/nearai/ironclaw/releases)** : Focused on critical runtime infrastructure. It fixes the container image missing `curl`, which was preventing orchestrator healthchecks from running and causing containers to never be marked as healthy/ready.
- **[ironclaw-v1.2.0-rc.2](https://github.com/nearai/ironclaw/releases)** : Addresses Windows platform-specific issues, including using native atomic rename semantics for file publication on first start (instead of hard links) and preserving Windows account identity for secrets key security.

**Migration Notes:** While no explicit breaking changes are listed, operators on `rc.1` are advised to test the healthcheck fix (`rc.3`) immediately, as it is required for orchestrated deployments to function properly.

### 3. Project Progress
The project saw significant progress, with roughly **19 PRs merged/closed** in the last 24 hours. Key advancements include:
- **[Core Loop Stability](https://github.com/nearai/ironclaw/pull/7551)** : A fix was merged to repair unavailable capability calls without aborting entire agent runs. The solution removes the faulty prompt-text guard that suppressed valid provider calls and treats unresolved calls as one-shot repairable output.
- **[Release Infrastructure](https://github.com/nearai/ironclaw/issues/7560)** : Fixed a release pipeline failure by adding retry logic for the `cargo-dist` installer download, addressing a local network failure that blocked the `rc.3` build.
- **[Docker Healthcheck Fix](https://github.com/nearai/ironclaw/pull/7555)** : Merged the forward-port of the `curl` installation fix (see Releases) to the main release branch.
- **[Admin UI/UX](https://github.com/nearai/ironclaw/pull/7550)** : Merged a feature adding per-field help text to admin configuration forms, improving operator clarity, and rewrote channel setup documentation.
- **[WebUI Refactor](https://github.com/nearai/ironclaw/pull/6836)** : The massive `@ironclaw/ui` workspace refactor, re-deriving the design system cleanly from main, has been closed, likely paving the way for further design-system phases.

### 4. Community Hot Topics
The most active discussions are centered on architecture and performance:
- **[#7360: Expand stress coverage](https://github.com/nearai/ironclaw/issues/7360)** : This enhancement request is the most commented on issue. It highlights a critical gap in testing: the nightly stress harness doesn't exercise tool-call paths, meaning regressions in built-in capability writes can slip through. This signals a strong push to improve CI and testing robustness.
- **[#7407: Parallel capability batches](https://github.com/nearai/ironclaw/issues/7407)** : This issue (now closed) requested that multi-tool-call turns be executed concurrently rather than sequentially to improve performance. The discussion around it highlights the need for optimizing agent throughput.
- **[#7439: Per-user model preferences](https://github.com/nearai/ironclaw/pull/7439)** : This large PR is active in review, indicating significant user demand for allowing end-users to control their model choice.

### 5. Bugs & Stability
A significant wave of QA bugs was filed, primarily from the Railway instance, with five rated as high priority (**P1**):
- **[#7536: Multi-user access broken](https://github.com/nearai/ironclaw/issues/7536)** (P1): New users created via Admin UI get an "Invalid secret" error. This is a critical identity and access issue.
- **[#7535: Telegram webhook not activated](https://github.com/nearai/ironclaw/issues/7535)** (P1): Telegram bots do not work after saving config until a full redeploy, with "Forbidden" errors in logs.
- **[#7538: Telegram agent stuck after GIF/sticker](https://github.com/nearai/ironclaw/issues/7538)** (P1): Sending a GIF or sticker causes the agent session to become completely unresponsive, blocking all future messages.

**Other notable bugs (P2)** include:
- File delivery via Telegram failing ([#7541](https://github.com/nearai/ironclaw/issues/7541)).
- Conversation flow appearing out of order in the UI ([#7539](https://github.com/nearai/ironclaw/issues/7539)).
- The agent leaking internal reasoning/planning to the user ([#7544](https://github.com/nearai/ironclaw/issues/7544)).

**Root Cause Analysis:** The volume of Telegram-specific issues suggests a systemic problem with Telegram integration, particularly around media handling and state management.

### 6. Feature Requests & Roadmap Signals
There are clear signals for the upcoming **v1.3.0/v1.4.0** releases:
- **[Generic thinking/effort control](https://github.com/nearai/ironclaw/issues/7537)** : A proposal for per-request model "thinking" effort, triggered by verbose outputs from DeepSeek V4 Flash. This will likely be a major LLM-path feature in the next version.
- **[Onboarding to channel-first approach](https://github.com/nearai/ironclaw/issues/7044)** (Epic): The goal is to reduce user adoption friction by suggesting use-cases and channels upfront, instead of presenting a blank slate.
- **[AI-first Design System](https://github.com/nearai/ironclaw/issues/7038)** (Epic): The project is methodically building a new UI foundation with multiple phases. Phase 2 ([#7042](https://github.com/nearai/ironclaw/issues/7042)) is active, while a Phase 3 scaffold ([#7558](https://github.com/nearai/ironclaw/pull/7558)) has been opened.
- **[Staking path for Google/GitHub logins](https://github.com/nearai/ironclaw/issues/7517)** : Users want to attach a NEAR wallet to their existing OAuth accounts to stake for inference, rather than being forced to use credits via Stripe.

### 7. User Feedback Summary
Real user pain points are centered on **telegram reliability, transparency, and security**:
- **Frustration:** Users are dissatisfied with the agent leaking internal planning and offering features (like Telegram delivery) that don't work reliably.
- **Confusion:** The recent Telegram bugs causing messages to be missed, stuck sessions, or asking for credentials unnecessarily are severely degrading the user experience and trust.
- **Security:** The broken multi-user access flow is a blocker for collaboration, and users are demanding more flexible staking options for inference.
- **Usability:** The WebUI is still presenting too much technical detail (e.g., aggressive error messages for tool failures, verbose reconnect notifications) that needs to be de-emphasized.

### 8. Backlog Watch
- **[#5508: Slack delivery target not found](https://github.com/nearai/ironclaw/issues/5508)** : This is a QA bug from **mid-June 2026** that appears to be closed. However, given the current Telegram delivery bugs, this area needs close observation to ensure Slack doesn't regress.
- **[#5503: Compact Google extension capabilities](https://github.com/nearai/ironclaw/pull/5503)** : An experimental PR from July 1st that aims to improve context efficiency for Gmail/Calendar. It was closed, but the underlying goal is crucial for long-context management. Maintenance should revisit this to see if the features made it into the final codebase.
- **[#7044: Onboarding epic](https://github.com/nearai/ironclaw/issues/7044)** : The backend wiring is in progress, but this large epic needs consistent maintainer attention to keep it moving forward.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date: 2026-08-13**

---

## 1. Today's Overview

LobsterAI is showing steady development activity with 9 PRs updated in the last 24 hours, of which 7 were merged or closed — indicating a healthy, fast-moving release cycle. The project appears to be in a release stabilization phase shortly after the 2026.8.12 release window, with multiple targeted bug fixes landing around plugin installation on Windows, macOS/Windows file icon handling, and model selector UX improvements. Issue activity is relatively quiet (6 items), predominantly consisting of older stale issues from March–May that received brief maintainer touches. The team is actively addressing cross-platform compatibility (Windows junctions, macOS icon sizing) and UI polish, showing strong attention to desktop client robustness.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent release was **2026.8.12**, tracked via merged PR [#2480](https://github.com/netease-youdao/LobsterAI/pull/2480).

---

## 3. Project Progress

**7 PRs merged/closed in the last 24 hours:**

| PR | Area | Description |
|----|------|-------------|
| [#2482](https://github.com/netease-youdao/LobsterAI/pull/2482) | Renderer | **Skills Manager**: Split "Mine" vs "Built-in" tabs — improving skills management organization |
| [#2481](https://github.com/netease-youdao/LobsterAI/pull/2481) | Renderer/Cowork | **Sidebar UX**: Moved task search to header actions, replacing labeled entry with icon-only action; aligned appearance across macOS and Windows with regression coverage |
| [#2480](https://github.com/netease-youdao/LobsterAI/pull/2480) | Main/Renderer | **Release/2026.8.12** — release branch merge |
| [#2479](https://github.com/netease-youdao/LobsterAI/pull/2479) | Main | **Windows plugin install fix**: Preserve junctions during install — stages plugin installs on same volume, atomic rename to avoid `EPERM` symlink failures, with manifest validation and rollback |
| [#2478](https://github.com/netease-youdao/LobsterAI/pull/2478) | Main | **Shell icon fix**: Avoid unsupported large file icon size on macOS/Windows — now uses 'large' only on Linux, 'normal' elsewhere |
| [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) | Renderer | **Model selector fix**: Each model now has its own thinking level — previously global, causing conflicts when switching models |
| [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) | Model | **Model provider links**: Added official website links and API Key acquisition guides per provider; fixed duplicate URL tables; adds i18n support |

**Key takeaway:** The project is shipping systematic quality-of-life improvements — particularly around Windows stability (#2479) and model configuration granularity (#2475).

---

## 4. Community Hot Topics

The most-discussed items this cycle are all older issues with 1–2 comments each — no single issue has generated significant new discussion:

- **[#1179 — Forced sandbox in v3.31](https://github.com/netease-youdao/LobsterAI/issues/1179)** (2 comments) — User reports forced sandboxing after updating to 3.31 with no way to disable it; rolling back to 3.30 works. Underlying need: **configuration control and opt-out options** for security features.

- **[#1236 — Plugin ID mismatch warning](https://github.com/netease-youdao/LobsterAI/issues/1236)** (2 comments) — `mcp-bridge` plugin entry key mismatches manifest-declared ID, causing startup warnings. Underlying need: **proper plugin config validation and consistent ID resolution**.

- **[#2071 — Scheduled task creation error](https://github.com/netease-youdao/LobsterAI/issues/2071)** (2 comments) — Error when creating scheduled tasks in v2026.5.27. Underlying need: **reliable cron/task scheduling** (note: this may be related to the open PR #1181 that hides OpenClaw main agent sessions which handle cron routing).

- **[#1173 — App still runs after uninstall](https://github.com/netease-youdao/LobsterAI/issues/1173)** (1 comment) — User alarmed that LobsterAI continues running after uninstall and can still send messages; suspects a backdoor. Underlying need: **clean uninstall behavior and user trust** — this one deserves a maintainer response to reassure users.

**Analysis:** Community activity is low — likely a quiet period. The most pressing topic is trust-related (#1173), which could become a reputational issue if not addressed.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) — Forced sandbox in v3.31 | Open | Users cannot disable; workaround exists (rollback). No fix PR yet. |
| **High** | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) — App runs after uninstall | Open | Potential trust/privacy concern; needs maintainer clarification. |
| **Medium** | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) — Gateway restart loop when modifying custom agent | Open | Triggered by changing agent icon; deleting agent resolves. Reported in 3.31. |
| **Medium** | [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) — Scheduled task creation error | Closed (stale) | Was reported in v2026.5.27; related to cron routing concerns addressed in PR [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181). |
| **Low** | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) — Plugin ID mismatch warning | Closed (stale) | Cosmetic warning, not blocking. |

**Recent fixes that improve stability:**
- Windows plugin install junction preservation ([#2479](https://github.com/netease-youdao/LobsterAI/pull/2479))
- macOS/Windows file icon size fix ([#2478](https://github.com/netease-youdao/LobsterAI/pull/2478))

---

## 6. Feature Requests & Roadmap Signals

- **[#1174 — Multiple custom model providers](https://github.com/netease-youdao/LobsterAI/issues/1174)** (Open, stale) — Users want to maintain multiple custom model providers simultaneously. Given the recent focus on model selector improvements (#2475), this aligns well with roadmap direction and **is likely to be prioritized** in an upcoming release.

- **Per-model thinking levels** ([#2475](https://github.com/netease-youdao/LobsterAI/pull/2475)) — Already shipped; shows the team is actively investing in model configuration granularity.

- **Model provider official links** ([#1233](https://github.com/netease-youdao/LobsterAI/pull/1233)) — Shipped; improves model onboarding UX.

- **Skill management tabs** ([#2482](https://github.com/netease-youdao/LobsterAI/pull/2482)) — "Mine vs Built-in" split signals growing emphasis on personalization in the skills ecosystem.

**Prediction:** The next version will likely include multi-provider custom model support, building on the current UX foundation.

---

## 7. User Feedback Summary

- **Sandbox forcing frustrates users**: v3.31's forced sandbox without an opt-out is a point of friction; users actively downgrade to avoid it. Open question: is this intentional security hardening or a missing toggle?
- **Trust concerns around uninstall**: Issue #1173 reflects user anxiety about background operation. An official response explaining process behavior would go a long way.
- **Plugin configuration warnings annoy developers**: Repeated ID mismatch warnings at every gateway start create noise for users configuring plugins.
- **Model configuration granularity is appreciated**: The team already shipped per-model thinking levels — users want more flexibility (multi-provider).
- **Windows stability is improving**: Users on Windows are getting targeted fixes (junctions, icon sizes), indicating active Windows support prioritization.

**Overall sentiment:** Mildly positive — users are engaged but there are clear friction points around control (sandbox, uninstall behavior) that need clarification.

---

## 8. Backlog Watch

The following items have been open for **4+ months** and need maintainer attention:

- **[#1179 — Forced sandbox opt-out](https://github.com/netease-youdao/LobsterAI/issues/1179)** — Open since March 31; marked stale but never resolved. High impact for users. **Needs official response or fix.**

- **[#1173 — Uninstall behavior inquiry](https://github.com/netease-youdao/LobsterAI/issues/1173)** — Open since March 31; user accused the app of keeping a backdoor. **Needs official communication to defuse.**

- **[#1174 — Multiple custom model providers](https://github.com/netease-youdao/LobsterAI/issues/1174)** — Open since March 31; feature request with clear demand. Likely roadmap candidate.

- **[#1180 — Gateway restart loop](https://github.com/netease-youdao/LobsterAI/issues/1180)** — Open since March 31; a genuine bug affecting stability.

- **[PR #1181 — Hide OpenClaw main agent sessions](https://github.com/netease-youdao/LobsterAI/pull/1181)** — Open since **April 1** (4.5 months); has a fix ready but hasn't been merged. Given its ties to cron/session confusion, merging this could also help with #2071.

---

## Summary

LobsterAI is in a healthy development rhythm with consistent cross-platform fixes and UX polish. The team is responsive and shipping regularly. The main risks are **unresolved March-era issues** that — while stale — touch on user trust and control. Addressing #1173 and #1179 with either fixes or official stances should be a priority, and merging PR #1181 (hiding internal OpenClaw sessions) would close a long-pending improvement.

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

# CoPaw Project Digest — 2026-08-13

## 1. Today's Overview

CoPaw (QwenPaw) is in an active beta cycle with **v2.1.0-beta.4** released today, following beta.3 just two days prior — indicating rapid iteration toward a stable 2.1.0. The project shows high community engagement with 30 issues and 44 PRs updated in the last 24 hours. Activity is weighted toward bug fixes and stabilization rather than new features, with notable PRs addressing chat history timestamps, IME input handling, tool argument type coercion, and memory prompt accuracy. A concerning pattern of Chinese-language users reporting crashes, freezes, and task interruptions suggests stability is the primary barrier to wider adoption. The maintainer team is responsive, with 7 issues and 16 PRs closed/merged in the period.

**Links:** [Releases](https://github.com/agentscope-ai/QwenPaw/releases) | [Issues](https://github.com/agentscope-ai/QwenPaw/issues) | [PRs](https://github.com/agentscope-ai/QwenPaw/pulls)

---

## 2. Releases

**v2.1.0-beta.4** ([Release page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.4)) was published on 2026-08-12/13 with three changes:

- **fix(files):** repair previews and dark mode styling ([PR #6915](https://github.com/agentscope-ai/QwenPaw/pull/6915))
- **fix(tools):** correct `read_file` tool description ([PR #6898](https://github.com/agentscope-ai/QwenPaw/pull/6898))
- **chore:** bump version to 2.1.0b4

**No breaking changes or migration notes** were included. This is a patch-level beta release. The rapid cadence (beta.4 two days after beta.3) suggests the team is closing out a stabilization sprint ahead of 2.1.0 GA. Note: [Issue #6946](https://github.com/agentscope-ai/QwenPaw/issues/6946) tracks installation verification for this release; [Issue #6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) for beta.3 was closed, indicating that verification passed.

---

## 3. Project Progress

**Merged/Closed PRs today (16 total):**

- **Revert "fix(chats): handle dict-like model responses (#6813)"** ([PR #6956](https://github.com/agentscope-ai/QwenPaw/pull/6956)) — The earlier fix for the `KeyError: '__aiter__'` issue was reverted, suggesting the fix introduced regressions. This is notable; the original issue [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) was closed but may need reopening.
- **chore: update release notes for v2.1.0** ([PR #6944](https://github.com/agentscope-ai/QwenPaw/pull/6944)) — Release notes prep for 2.1.0.
- **fix(computer-use): improve macOS element activation** ([PR #6913](https://github.com/agentscope-ai/QwenPaw/pull/6913)) — Fixes macOS Computer Use for transient menus and composite accessibility elements; stops window raising from dismissing context menus.
- **fix(agents): sanitize tool messages before model calls** ([PR #6540](https://github.com/agentscope-ai/QwenPaw/pull/6540)) — Fixes [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407); orphan tool results no longer reach OpenAI-compatible providers after context compression.
- **fix(chats): handle dict-like model responses** ([PR #6816](https://github.com/agentscope-ai/QwenPaw/pull/6816)) — Originally fixed auto-title generation failure; now reverted (see above).

**Key advances in open PRs under review:**

- **fix(console): preserve textarea target for IME events** ([PR #6889](https://github.com/agentscope-ai/QwenPaw/pull/6889)) — Fixes Input Method Editor composition issues in the chat input.
- **fix(console): group daily memory notes by path date** ([PR #6941](https://github.com/agentscope-ai/QwenPaw/pull/6941)) — Fixes [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883); daily view now correctly groups notes under date directories.
- **fix(#6826): display actual assistant reply completion time** ([PR #6938](https://github.com/agentscope-ai/QwenPaw/pull/6938)) — Fixes misleading timestamps when tool calls take minutes.
- **fix(providers): coerce string-typed tool args emitted as JSON numbers** ([PR #6936](https://github.com/agentscope-ai/QwenPaw/pull/6936)) — Fixes [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839).
- **feat(channels): add MiniMax TTS support** ([PR #6954](https://github.com/agentscope-ai/QwenPaw/pull/6954)) — Adds MiniMax text-to-speech to SIP channel.
- **perf: stabilize LLM prefix cache by sorting tool schemas** ([PR #6953](https://github.com/agentscope-ai/QwenPaw/pull/6953)) — First-time contributor improving KV cache hit rates.
- **feat(pawapp): add native DataPaw app runtime** ([PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)) — Large addition: QwenPaw-Data as a native application with durable analysis workspace.

---

## 4. Community Hot Topics

Most active discussions (by comments/reactions) in the last 24h:

1. **[#6853 — "prompts.py lies to agents" — Memory Digest Writing Bug](https://github.com/agentscope-ai/QwenPaw/issues/6853)** (5 comments)
   - The `prompts.py` claims the "dream" process syncs digests to `MEMORY.md`, but this was never implemented. The memory system docs don't match reality — a significant trust issue for the agent memory pipeline.
   - **Addressed by** [PR #6942](https://github.com/agentscope-ai/QwenPaw/pull/6942) which simplifies memory guidance and closes this issue.

2. **[#6921 — Tasks silently stop after planning; user must say "continue"](https://github.com/agentscope-ai/QwenPaw/issues/6921)** (5 comments)
   - Multi-step tasks halt after the model announces its plan (e.g. "Now 2.1, 3.1, 3.2. Let me do all three.") without actually executing. Requires explicit user nudge to resume.
   - **Related:** [#6927](https://github.com/agentscope-ai/QwenPaw/issues/6927) reports multi-subagent tasks entering infinite loops. These two issues point to orchestration stability as a top user pain point.

3. **[#6780 — Idle for tens of minutes leads to freeze; must kill process](https://github.com/agentscope-ai/QwenPaw/issues/6780)** (4 comments, open since Aug 7)
   - Long-running idle processes freeze. No response from maintainers yet on this long-standing issue.

4. **[#6928 — History scrolling broken + input bar editing bug](https://github.com/agentscope-ai/QwenPaw/issues/6928)** (4 comments)
   - Users cannot scroll back to yesterday's messages, and text selection editing deletes trailing content. Directly affects daily usability.

5. **[#6826 — Assistant message completion time shows wrong duration](https://github.com/agentscope-ai/QwenPaw/issues/6826)** (4 comments)
   - 2-minute real thinking time displayed as seconds. **Fix in review:** [PR #6938](https://github.com/agentscope-ai/QwenPaw/pull/6938).

---

## 5. Bugs & Stability

**High severity:**

1. **[#6921 — Silent task abandonment mid-plan](https://github.com/agentscope-ai/QwenPaw/issues/6921)** — Multi-step tasks stop after announcing the next plan with no error or prompt. Requires manual user intervention. Root cause unclear; no fix PR yet. High impact on trust.

2. **[#6780 — Idle freeze](https://github.com/agentscope-ai/QwenPaw/issues/6780)** — Process dies after idle; user must restart. Open for 6 days without maintainer response. High impact for always-on usage.

3. **[#6932 — No auto-reconnect after transient network loss](https://github.com/agentscope-ai/QwenPaw/issues/6932)** — Network recovery doesn't restore LLM API connectivity; manual restart required. Reproduced twice in one day. Critical for reliability.

4. **[#6955 — Random startup crashes (v2.0.1 pip)](https://github.com/agentscope-ai/QwenPaw/issues/6955)** — Probabilistic crash at startup/shutdown. Windows asyncio errors in the trace. Related to [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) which was closed as invalid, but the crash pattern persists.

**Medium severity:**

5. **[#6951 — Scroll compression hides pre-compression transcript](https://github.com/agentscope-ai/QwenPaw/issues/6951)** — After `/compact`, chat history shows only eviction indices, not the original messages. User-visible transcript should persist even when model context is compressed.

6. **[#6918 — Inter-agent messages spawn new sessions per message](https://github.com/agentscope-ai/QwenPaw/issues/6918)** — Agent-to-agent communication fragments context; "shadow instances" cause duplicated work.

7. **[#6926 — sync.py imports under random AgentState UUID (closed)](https://github.com/agentscope-ai/QwenPaw/issues/6926)** — 18–50% of history rows orphaned per agent due to wrong session_id usage. Closed (presumably fixed) but the data repair path is unclear.

**Low severity / recent:**

8. **[#6928 — History scroll + input IME bugs](https://github.com/agentscope-ai/QwenPaw/issues/6928)** — UI issues. IME fix in review ([PR #6889](https://github.com/agentscope-ai/QwenPaw/pull/6889)).

9. **[#6957 — Upgrades reset per-plugin configurations](https://github.com/agentscope-ai/QwenPaw/issues/6957)** — Upgrade forces reconfiguration of tools/plugins, a friction point in the release cadence.

10. **[#6948 — Console timezone shows UTC regardless of user config](https://github.com/agentscope-ai/QwenPaw/issues/6948)** — Minor but annoying.

**Regression concern:** The revert of [PR #6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) (fix for auto-title generation, issue [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813)) means the `KeyError: '__aiter__'` bug is back in main. No replacement fix has been proposed yet.

---

## 6. Feature Requests & Roadmap Signals

**In-flight features:**

- **Native DataPaw app** ([PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)) — A durable analysis workspace as a native app. Infrastructure repo at `agentscope-ai/QwenPaw-Data`. This is a significant product expansion.
- **MiniMax TTS** ([PR #6954](https://github.com/agentscope-ai/QwenPaw/pull/6954)) — Extending SIP channel voice options.
- **Per-session model overrides** ([PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)) — Open since July 12, under review. Enables different LLMs for different conversations on a single agent.

**Top user-requested features this week:**

1. **[#6929 — Folder-based project conversations & file-to-context selection](https://github.com/agentscope-ai/QwenPaw/issues/6929)** (closed as enhancement) — Users want codex-style folder contexts, file preview selection to inject into conversations, and ability to reference agent conversation snippets. This signals desire for a more structured "workspace" workflow.

2. **[#6917 — Agents should push reports to an Inbox](https://github.com/agentscope-ai/QwenPaw/issues/6917)** — User wants a fixed, non-scrolling inbox with unread badges for agent-delivered reports, not just chat messages that scroll away. This aligns with persistent notification patterns in other assistants.

3. **[#6925 — Multi-agent collaboration in a single session window](https://github.com/agentscope-ai/QwenPaw/issues/6925)** — Currently multi-agent collab spawns new sessions per exchange, forcing users to switch agents to follow conversations. Users want one unified view.

4. **[#6923 — LongHorizon-Harness suggestion](https://github.com/agentscope-ai/QwenPaw/issues/6923)** — External suggestion to adopt a goal-maintenance harness pattern for sustained tasks, addressing the task-abandonment problem seen in [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921).

5. **[#6945 — "Smart mode" sandbox writes fail outside sandbox](https://github.com/agentscope-ai/QwenPaw/issues/6945)** — Clarification needed on whether "smart" mode is approval-only or should execute writes.

**Prediction for v2.1.0 GA:** The next release will likely include: memory prompt fixes ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942)), IME fix ([#6889](https://github.com/agentscope-ai/QwenPaw/pull/6889)), timestamp fix ([#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938)), tool arg coercion ([#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936)), and prefix cache stabilization ([#6953](https://github.com/agentscope-ai/QwenPaw/pull/6953)). Per-session model overrides ([#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)) may land if review completes.

---

## 7. User Feedback Summary

**Positive signals:**
- Community building tools around QwenPaw: an agent auto-filed a well-structured bilingual bug report ([#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918)), a first-time contributor submitted a performance optimization matching the project's architectural direction ([#6953](https://github.com/agentscope-ai/QwenPaw/pull/6953)), and a QPQAT-style automated repairer ("狄仁杰·Repairer") is now submitting fixes with issue links — signs of an engaged ecosystem.
- The long-term memory blog documentation effort ([PR #6949](https://github.com/agentscope-ai/QwenPaw/pull/6949)) and Files workspace blog rewrite ([PR #6950](https://github.com/agentscope-ai/QwenPaw/pull/6950)) for non-technical audiences are positive trajectory markers.

**Negative signals:**
- **7 of 30 issues this week are in Chinese**, reflecting a large Chinese-speaking user base, but also a possible documentation/localization gap for these users.
- **Antivirus conflicts** ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)) — QwenPaw triggers antivirus and gets killed; a competing product (WorkBuddy) does not. This could be a false-positive issue or a real behavior problem (e.g. unusual execution patterns). Either way, it adds user friction.
- **Silent failures are the top frustration** — tasks stalling mid-plan, freezes without error, network failures without auto-recovery. Users can't tell if the agent is thinking, stuck, or dead.
- **"升级导致重新配置"** ([#6957](https://github.com/agentscope-ai/QwenPaw/issues/6957)) — Upgrades reset user configurations, adding friction to every release.
- **Security concern raised:** plugins can silently create cron jobs and inject messages without approval ([#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916)). This is a permission-model gap with medium-high severity and may delay enterprise adoption.

---

## 8. Backlog Watch

Items needing maintainer attention:

1. **[#6780 — Idle freeze](https://github.com/agentscope-ai/QwenPaw/issues/6780)** — Open since Aug 7, 4 comments, no maintainer response. This is a critical reliability bug; one week without acknowledgment is concerning.

2. **[#6921 — Silent task abandonment](https://github.com/agentscope-ai/QwenPaw/issues/6921)** — High impact, no fix PR. Combined with [#6927](https://github.com/agentscope-ai/QwenPaw/issues/6927) (infinite loops), orchestration stability is the biggest blocker to user trust. The LongHorizon-Harness suggestion ([#6923](https://github.com/agentscope-ai/QwenPaw/issues/6923)) may offer a design direction.

3. **[#6916 — Plugins can silently create cron jobs (Security)](https://github.com/agentscope-ai/QwenPaw/issues/6916)** — Open since Aug 11, 1 comment, no maintainer response. Security issues should be triaged fast.

4. **[#5992 — Per-session model overrides](https://github.com/agentscope-ai/QwenPaw/pull/5992)** — Open PR since July 12, still "Under Review". This feature has clear user demand and likely needs a maintainer decision.

5. **[#5869 — System commands in slash autocomplete](https://github.com/agentscope-ai/QwenPaw/pull/5869)** — Open since July 8, "Under Review". Long wait for a UI polish feature.

6. **[#6623 — ACP final text loss on notification race](https://github.com/agentscope-ai/QwenPaw/pull/6623)** — Open since Aug 1, first-time contributor. The description mentions a race condition with concrete reproduction; needs maintainer review.

7. **Regression: auto-title generation fix reverted** — The revert of [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) without a follow-on fix means the `KeyError: '__aiter__'` bug ([#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813)) is back. A new solution is needed, likely one that probes streaming status without triggering `dict.__getitem__`, e.g. checking `type(response).__name__` or using `try/except`.

---

**Overall health assessment:** CoPaw is actively developed with strong community engagement and a healthy PR pipeline, but the 2.1.0-beta cycle is surfacing systemic stability issues — silent task failures, idle freezes, and network recovery gaps — that will need to be resolved before users can treat the platform as reliable for unattended multi-step work. The maintainer team is responsive (16 PRs closed/merged in 24h) but backlogs on 5+ issues without comment suggest capacity is stretched. The next 7 days will be telling: if beta.5 or 2.1.0 GA lands with orchestration fixes, the project can convert current user frustration into momentum.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-13

## 1. Today's Overview

ZeroClaw shows a high-velocity, mature open-source project with significant maintainer engagement. The project processed 50 updated issues and 50 updated PRs in the last 24 hours, with a healthy mix of open (45/30) and closed/merged (5/20) items. There were no new releases today, suggesting the team is in a stabilization and feature-development phase between version bumps. The issue tracker reveals a strong focus on cross-platform reliability (Windows/macOS CI), security hardening (SSRF, credential rotation, WASM sandboxing), and architectural consolidation (single source of truth for policies, unified registries). The PR queue includes several security-critical fixes and substantial features, indicating active, security-conscious development.

## 2. Releases

No new releases were published on 2026-08-13. The most recent release remains v0.8.3, which is referenced in issues regarding Windows installer problems and release attestation consolidation.

## 3. Project Progress

Twenty PRs were merged or closed today. Notable closures include:

- **PR #9956** (CLOSED, merged): WeChat channel sync cursor persistence fix — ensures the cursor is only advanced after the inbound batch is enqueued, preventing message loss on crash. This touches nearly all project areas, indicating a comprehensive fix.
- **PR #8496** (CLOSED): Centered the deferred-MCP access policy as a single source of truth, addressing an access-policy omission in tool discovery.
- **PR #9362** and **PR #8741** (both CLOSED): Both fix the same critical browser tool arbitrary file write vulnerability in the `screenshot` action by enforcing workspace policy validation. The duplicate PRs indicate a rapid, collaborative response to a security issue.
- **PR #9695** and **PR #9037** (both CLOSED): Fix leaking provider terminal markers (`<eom>`) into transcripts, persisted history, and channel deliveries across streaming and non-streaming paths.

Closed issues include **#9340** (CLI-created cron jobs discarding output), **#9684** (zerocode SOP pane live status icons), and **#9796** (invalid cron CLI help examples).

## 4. Community Hot Topics

- **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** (14 comments): A critical bug report on 74 Windows test failures due to Unix-only commands and encoding. This is the top-voted issue and signals a major pain point for Windows contributors and users. Linked to **#7461** (CI matrix for Windows/macOS), highlighting a demand for cross-platform support.
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** (13 comments): Maintainer decision tracker for RFCs and design issues, showing the project's structured approach to governance.
- **[Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)** (9 comments): Feature proposal for a plugin-owned Kanban board for agent work, suggesting a move toward more complex agent-orchestration workflows.
- **[Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)** (9 comments): Proposal to consolidate release attestation mechanisms (from 53 to ~20 assets), reflecting a focus on CI efficiency and supply-chain security.

The underlying issues span cross-platform tooling, agent workflow management, and release engineering, indicating a community of advanced users pushing for enterprise-grade features.

## 5. Bugs & Stability

Several bugs were actively discussed today, ranked by severity (S1: High, S2: Medium, S3: Low):

- **S1 — Windows Installer Failure ([#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290))**: The Windows desktop installer from v0.8.3 fails at launch with a missing `TaskDialogIndirect` error, completely blocking use.
- **S1 — macOS Blank Window ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527))**: The desktop app can reopen blank or lose its window after a restart, blocking workflow for affected users. Needs a reproduction case (`r:needs-repro`).
- **S1 — Compressed Response Garbage ([#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207))**: `web_fetch` returns binary garbage for gzip/brotli/deflate responses, making the tool unusable on many sites. Status is in-progress.
- **S2 — Windows Test Failures ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))**: 74 failures on Windows. Fix is tracked via **#7461** (add Windows/macOS CI), but no PR is open yet.

Security fixes were prominent today: **PR #8713** (file_download SSRF gate), **PR #9403** (WASM wall-clock deadline), **PR #9362/#8741** (browser screenshot path traversal).

## 6. Feature Requests & Roadmap Signals

Prominent feature requests that may land in the next version (v0.9.0):

- **Windows/macOS CI support ([#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461))**: High demand following the Windows test failures. Essential for project health.
- **Hailo-Ollama provider support ([PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109))**: A large, feature-complete PR awaiting review. Indicates expansion to new hardware/backends.
- **Langfuse observability backend ([PR #9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556))**: Adds a popular LLM observability platform, indicating focus on production monitoring.
- **Plugin-owned Kanban board ([#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832))**: A significant RFC that could change how agent work is coordinated and visualized.
- **LSP support for ZeroCode ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907))**: A long-standing request to improve coding workflow, leveraging language servers to reduce hallucination.

The roadmap signals a push toward enterprise readiness: comprehensive observability, hardware support, and robust cross-platform behavior.

## 7. User Feedback Summary

- **Windows Users**: Significant frustration with testing gaps and installer bugs. The wait for official Windows CI is a key pain point.
- **Security-Conscious Users**: The community actively reports and fixes serious vulnerabilities (SSRF, arbitrary file write), showing a strong security posture.
- **Agent Autonomy Users**: Feedback indicates a desire for better control (`always_ask` being ignored, [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) fixes this) and for ensuring long-running agent turns survive client disconnects (**PR #9002**).
- **Observability Needs**: Users are requesting more telemetry (Langfuse, Herdr reporting), indicating use in production environments where monitoring is crucial.

## 8. Backlog Watch

- **[Issue #6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653)**: Host-architecture policy for emulated installs. Created 2026-05-14, needs author action, and has been open for 3 months.
- **[Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)**: LSP support for ZeroCode. Open since April, needs author action, but is a highly requested feature for coding workflows.
- **[Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)**: Complete SearXNG configuration and web-search recovery. Open since April, accepted, but no recent activity. Could be a good candidate for contributors.
- **[Issue #7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)**: macOS blank window bug. Waiting for a reproduction case since June, blocking a potential fix.

The last 24 hours show no major new, unaddressed issues. The maintainer queue appears active, but these older items require attention to clear the backlog and address long-standing user needs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*