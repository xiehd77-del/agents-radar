# OpenClaw Ecosystem Digest 2026-07-21

> Issues: 353 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-21 02:49 UTC

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

# OpenClaw Project Digest — 2026-07-21

## Today's Overview

The OpenClaw project shows **high activity** with 353 issues and 500 pull requests updated in the last 24 hours. Of the issues, 224 remain open/active and 129 were closed; on the PR side, 382 are open and 118 were merged or closed. No new releases were published today. The project is processing a substantial volume of community contributions and bug reports, though the closure rate (approximately 37% for issues, 24% for PRs) suggests a **maintainer bottleneck**, particularly for items requiring product decisions or maintainer review. The top issues continue to revolve around **session stability, message delivery reliability, and security hardening**, indicating sustained focus on production-readiness.

## Releases

**No new releases** were published on 2026-07-21. The last tagged version remains **OpenClaw 2026.7.1** as referenced in several open bug reports (e.g., issues #108238, #109017).

## Project Progress

Today saw **118 merged/closed pull requests**. Key developments include:

- **Telegram streaming reliability**: PR #111065 fixes draft/preview stream delivery failure reporting, elevating silent failures to warn-level logging so operators can diagnose `sendMessage`/`editMessageText` rejections.
- **Route binding correctness**: PR #110001 fixes a bug where route identifiers containing tab/comma delimiters caused the agent cache to return the wrong cached agent.
- **Gateway restart robustness**: PR #111534 prevents D-Bus permission errors on Linux when the gateway refresh inherits another user's D-Bus environment (e.g., after `su`).
- **Turn timeout visibility**: PR #112022 (open) and PR #89965 (closed, rebased) add user-visible notices when agent turns time out during tool execution, addressing a long-standing complaint about silent agent failures.
- **Diagnostic tooling**: PR #93247 fixes idle ownerless session state after failed recovery; PR #110772 bounds legacy session store reads to prevent the CLI from blocking on FIFO substitutions.
- **Localization consolidation**: PR #111543 (XL, open) proposes consolidating governance and inventory for localization, following an RFC.

## Community Hot Topics

The most active conversations this week highlight **persistent reliability pain points**:

1. **Issue #99241** (23 comments) — Tool outputs collapsing into unreadable image attachments. The agent cannot read its own tool results in long-running/ANSI-heavy workflows. This is rated **platinum hermit** severity and has been open since July 2. [Link](https://github.com/openclaw/openclaw/issues/99241)

2. **Issue #88312** (22 comments, closed) — A regression (2026.5.27) where Codex app-server turn-completion stalls, failing with "Codex stopped before confirming the turn was complete." The community notes the same pattern was fixed once before (#85107) and has re-emerged. [Link](https://github.com/openclaw/openclaw/issues/88312)

3. **Issue #7707** (19 comments) — Memory Trust Tagging by Source. Community interest in preventing memory poisoning attacks from untrusted web scrapes and third-party skills. This is a long-running enhancement request (since February) needing maintainer and security review. [Link](https://github.com/openclaw/openclaw/issues/7707)

4. **Issue #87744** (17 comments) — Codex-backed Telegram turns repeatedly timing out without reaching `turn/completed`, causing Telegram sessions to fail silently. Users report this started with 2026.5.27. [Link](https://github.com/openclaw/openclaw/issues/87744)

5. **Issue #10659** (15 comments, upvoted 4×) — Masked Secrets system request: allow agents to *use* API keys without being able to *see* them. This is the highest-demand security feature this quarter. [Link](https://github.com/openclaw/openclaw/issues/10659)

6. **Issue #58450** (16 comments) — Agents promising follow-up actions without actually starting any background action. Users report the agent "gaslights" them into waiting for nothing. [Link](https://github.com/openclaw/openclaw/issues/58450)

## Bugs & Stability

### Critical / Platinum Hermit Severity

- **Tool outputs → unreadable image attachments** (Issue #99241) — Agent cannot read its own tool stdout/stderr in long-running workflows. Partial fix PRs exist but no complete solution shipped. [Link](https://github.com/openclaw/openclaw/issues/99241)
- **Codex turn-completion stall regression** (Issue #88312, closed) — Second occurrence of this regression. Closed but the underlying pattern may recur. [Link](https://github.com/openclaw/openclaw/issues/88312)
- **Repeated context-overflow auto-compaction loops** (Issue #78562) — In v2026.5.5, tool-heavy sessions hit compaction after compaction indefinitely. [Link](https://github.com/openclaw/openclaw/issues/78562)
- **Heartbeats swallowing in-progress replies** (Issue #64810) — Telegram topic sessions lose user replies when system events interrupt. [Link](https://github.com/openclaw/openclaw/issues/64810)
- **iOS/WebChat messages not triggering replies** (Issue #97983) — Official app messages append to transcript but don't reliably produce assistant replies. [Link](https://github.com/openclaw/openclaw/issues/97983)
- **Gateway event-loop freeze** (Issue #56733) — Gateway process alive but all HTTP requests silently timeout. Open since March. [Link](https://github.com/openclaw/openclaw/issues/56733)

### High / Diamond Lobster Severity

- **Subagent completion delivery failure** (Issue #92076) — Completion fails silently when requester session is evicted. [Link](https://github.com/openclaw/openclaw/issues/92076)
- **Active Memory + Codex latency cascade** (Issue #86996) — 10+ second hook timeouts, startup aborts, gateway stalls. [Link](https://github.com/openclaw/openclaw/issues/86996)
- **Context usage accounting bug** (Issue #108238, closed) — In 2026.7.1, `cacheRead` bytes incorrectly counted toward totalTokens, triggering false context-overflow and failed compaction. [Link](https://github.com/openclaw/openclaw/issues/108238)
- **Runtime tool surface returns blank** (Issue #99586) — Gateway-touching operations cause blank tool bodies; container restart only briefly clears. [Link](https://github.com/openclaw/openclaw/issues/99586)
- **Cron toolsAllow mismatch** (Issue #101349) — Agent-created crons inherit session toolsAllow; `toolsAllow: null` is a silent no-op; claude-cli backend then refuses the job. [Link](https://github.com/openclaw/openclaw/issues/101349)

### Regressions Noted

- Issue #88312: turn-completion stall regression (2026.5.27)
- Issue #99586: runtime tool surface blank regression
- Issue #86684: subagent wake compacting parent at low context usage
- Issue #71326 (closed): cross-exec stale file reads regression (2026.4.20)

### Fix PRs in Flight

- PR #112022 (open): user-visible notice on turn timeout
- PR #111812 (open): doctor clears legacy sandbox workspace state
- PR #110087 (open): prevent memory growth from completed session churn
- PR #111065 (merged): Telegram draft stream failure warnings
- PR #110001 (merged): route binding collision fix

## Feature Requests & Roadmap Signals

### High Community Demand (likely next-version candidates)

1. **Masked Secrets** (Issue #10659, 15 comments, 4 👍) — API key isolation from agents. This is the #1 security feature request and aligns with the "Secret-ref object" bug in Issue #88562.
2. **Memory Trust Tagging by Source** (Issue #7707, 19 comments) — Origin-based trust levels for agent memory entries. Addresses memory poisoning attack vectors.
3. **Skill Permission Manifest** (Issue #12219, 6 comments) — `skill.yaml` permission declarations for informed consent before installation.
4. **maxTurns/maxToolCalls config** (Issue #9912, 5 comments) — Prevent runaway tool iterations, especially for certain LLM providers.

### Medium-priority Signals

- **Model override in CommitmentsConfig** (Issue #80752, 6 comments) — Mirror active-memory/compaction precedent.
- **Per-model generation timeout** (Issue #8724, 5 comments) — Address Google Gemini Flash infinite thinking loops.
- **Antigravity CLI (agy) backend** (Issue #84527, 5 comments, 11 👍) — Google sunsetting Gemini CLI; community wants `agy` support before June 18 deadline.
- **Suppress sub-agent announce** (Issue #8299, 8 comments) — Config option to control sub-agent summary posts.
- **Suppress transient tool error warnings** (Issue #39406, 7 comments) — Cleaner UX when tool retries succeed.
- **session:end internal hook** (Issue #10142, 5 comments) — Integration with workflow orchestration systems (Temporal).

### Likely Timeline

The **trust/safety features** (Masked Secrets, Memory Trust Tagging, Skill Permissions) are the most organized cross-cutting concern and could appear in the **2026.8.x** release series. The **Antigravity CLI** migration has a hard external deadline (June 18) and should be a priority. **Session stability fixes** (turn-completion, compaction loops, heartbeat interference) are blocking production deployments and likely getting hotfix attention.

## User Feedback Summary

### Pain Points (high-frequency)

1. **"Agent goes silent"** — Multiple issues report agents that stop responding without error messages (#87744, #97983, #56733, #99241, #58450). This is the single largest class of complaints.
2. **"Regressions that were fixed before"** — Users express frustration that issues re-appear after being resolved (#88312, #86684, #71326).
3. **"Context compaction is breaking my workflow"** — Repeated auto-compaction loops (#78562, #63216, #59618) destroy user momentum and waste tokens.
4. **"Security feels bolted on"** — Community feedback on issues #7707, #10659, #58730, #12219 indicates users want security as a first-class design principle, not retrofitted.
5. **"Complex model/provider configuration"** — Issues like #109017 (Anthropic models disappearing from picker), #88562 (secrets as plain strings), and #94032 (LAN access diverging between exec and GUI) show configuration friction.

### Satisfaction Signals

- Positive reaction counts on security-related PRs and issues (4 👍 on #10659, 4 👍 on #9912, 11 👍 on #84527) show the community is engaged with the project's direction.
- Several closed issues (e.g., #108238, #79904, #79903, #79905) suggest the maintainer team is actively working through backlog.

### Thematic Insight

The user base is **shifting from experimentation to production deployment**. The dominant complaints are no longer about missing features, but about **reliability, predictability, and security** in persistent deployments. Users are running OpenClaw as a critical infrastructure component (Telegram bots, Slack integrations, cron jobs) and are sensitive to any behavior that makes the agent appear unreliable or unresponsive.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Severity | Age | Status |
|-------|----------|-----|--------|
| [#56733](https://github.com/openclaw/openclaw/issues/56733) — Gateway event-loop freeze | 🐚 Platinum Hermit | Since March 29 | Needs live repro |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging | 🦞 Diamond Lobster | Since February 3 | Needs maintainer review + product decision + security review |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets | 🦞 Diamond Lobster | Since February 6 | Needs maintainer review + product decision + security review |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) — Suppress sub-agent announce | 🦞 Diamond Lobster | Since February 3 | Needs maintainer review + product decision |
| [#78562](https://github.com/openclaw/openclaw/issues/78562) — Repeated compaction loops | 🦞 Diamond Lobster | Since May 6 | Needs maintainer review + product decision |
| [#58730](https://github.com/openclaw/openclaw/issues/58730) — exec() sandbox isolation | 🌊 Off-meta Tidepool | Since April 1 | Needs maintainer review + product decision + security review |

### PRs Needing Maintainer Review

| PR | Size | Age | Status |
|----|------|-----|--------|
| [#86450](https://github.com/openclaw/openclaw/pull/86450) — CLI daemon test coverage | L | Since May 25 | Ready for maintainer look |
| [#89155](https://github.com/openclaw/openclaw/pull/89155) — OpenRouter session_id forwarding | S | Since June 1 | Needs proof |
| [#93247](https://github.com/openclaw/openclaw/pull/93247) — Idle ownerless state fix | S | Since June 15 | Ready for maintainer look |
| [#108482](https://github.com/openclaw/openclaw/pull/108482) — Centralize skill write paths | L | Since July 15 | Ready for maintainer look |
| [#111543](https://github.com/openclaw/openclaw/pull/111543) — Localization governance | XL | Since July 19 | Needs proof |

### Notable

- **14 open issues** are tagged with `clawsweeper:needs-maintainer-review`, and **10** with `clawsweeper:needs-product-decision`. These blockers suggest decisions are waiting on a small set of maintainers.
- The **10 open items** with `clawsweeper:needs-security-review` (including the Masked Secrets and Memory Trust Tagging features) indicate that security review is a bottleneck for the project's trust/safety roadmap.
- PR #111901 (declarative tools and single-attempt completions) and #111905 (Nostr shutdown errors) are small, well-scoped contributions that could be merged quickly with a maintainer look.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

### Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
**Date:** 2026-07-21

### 1. Ecosystem Overview
The open-source personal AI assistant ecosystem is in a period of rapid maturation, characterized by a split between large, feature-complete frameworks undergoing architectural refactoring and smaller, specialized projects focused on niche integrations. There is a clear industry-wide pivot from experimental features toward **production reliability, security hardening, and cross-platform consistency**. The dominant themes across all active projects are session stability, persistent memory, and the need for robust tool execution, indicating that the market is shifting from "can it work?" to "can I rely on it?".

### 2. Activity Comparison
*Note: Health Score is a qualitative assessment based on merge velocity, issue response time, and release cadence.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 353 | 500 | Stale (v2026.7.1) | Moderate (Bottleneck) |
| **Hermes Agent** | 50 | 50 | Fresh (v0.19.0) | High (Post-Launch) |
| **NanoBot** | 7 | 29 | Stale | High |
| **PicoClaw** | 11 | 10 | Stale (v0.3.1) | Moderate |
| **NanoClaw** | 6 | 20 | Stale | High |
| **IronClaw** | 43 | 50 | Stale | Very High |
| **ZeroClaw** | 39 | 50 | Stale (v0.8.x) | Moderate (Growing Pains) |
| **CoPaw** | 24 | 40 | Stale | Moderate |
| **LobsterAI** | 0 | 15 | Stale | Moderate |
| **NullClaw** | 0 | 1 | Stale | Low (Dormant) |
| **TinyClaw** | - | - | - | Dormant (No Activity) |

### 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw remains the central reference implementation with the highest raw community volume (353 issues). Its greatest strength is its **mature multi-channel support** (Telegram, iOS) and deep feature set, which positions it as the most comprehensive solution for complex, multi-platform deployments.
**Technical Approach:** OpenClaw is the most **architecturally conservative**, focusing on incremental patches and stability fixes within an established framework, rather than the ground-up rewrites seen in IronClaw or ZeroClaw.
**Community Size & Bottleneck:** Despite the largest community, OpenClaw suffers from a significant **maintainer bottleneck** (24% PR closure rate). Its activity is high-volume but inefficient, with many high-priority issues (e.g., Memory Trust Tagging, Masked Secrets) stalled for months awaiting product decisions. Peers like NanoBot and IronClaw, with smaller communities, demonstrate faster triage and higher velocity.

### 4. Shared Technical Focus Areas
Several requirements are emerging as consensus problems across multiple projects:

- **Session & Agent Reliability:** **OpenClaw** (#99241, #87744), **NanoBot** (#4864, #4867), **CoPaw** (#6257, #6241), and **ZeroClaw** (#8837) all report agents going silent, getting stuck in infinite loops, or returning unreadable results. **The core agent loop is failing under real-world tool complexity.**
- **Security as a First-Class Feature:** **OpenClaw** (#10659, #7707), **NanoBot** (#4803), **Hermes Agent** (#66772), and **NanoClaw** (#3097-#3100) are all developing credential isolation, memory trust tagging, and role-based approval systems. The need for a **"Secret-ref object"** and **privilege separation** is now a universal requirement.
- **Multi-Platform Parity:** **ZeroClaw** (#7462), **PicoClaw** (#3182), and **Hermes Agent** (#4335) struggle with cross-platform session sharing, Windows compatibility, and Android/mobile deployment. **Users expect a consistent experience across all devices.**
- **Extensibility & Plugin Maturity:** **Hermes Agent** (#64900), **CoPaw** (#6274), and **ZeroClaw** (#3566) are seeking standardized plugin lifecycles, Human-in-the-Loop (HITL) tools, and Agent-to-Agent (A2A) protocols. **The community wants a governed "app store" experience, not just raw API access.**

### 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | CoPaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Target User** | Ops Teams, Power Users | Desktop Users, Devs | Production Deployers | Hobbyists, Devs | Enterprise, Research |
| **Feature Focus** | Channel Reliability | Desktop UX, Plugins | Architectural Purity | Tinkering, SOP Control | Agent Reasoning, Memory |
| **Architecture** | Modular, Incremental | Feature-Rich Monolith | Aggressive Refactor | Feature-Forward | Research-Oriented |
| **Key Strength** | Maturity & Breadth | Post-Launch Polish | Code Quality & Velocity | Innovation Speed | Agent Core Logic |
| **Key Weakness** | Maintainer Bottleneck | Release Quality (P1 Bug) | User Friction from Churn | Platform Parity Gaps | Agent Loop Stability |

### 6. Community Momentum & Maturity

- **Tier 1: Rapid Iteration / Architectural Churn:** **IronClaw** and **ZeroClaw** are in the highest velocity phase, executing major rewrites and adding complex new subsystems (SOP, Persistent Memory). This signals a focus on long-term architectural health but creates short-term user friction.
- **Tier 2: Feature Polish & Stabilization:** **NanoBot**, **NanoClaw**, and **Hermes Agent** are in a stabilization sprint, merging high volumes of bug fixes (12+ in 24h). These projects are closest to a "feature-complete" and reliable state for end-users.
- **Tier 3: Core Reference (Bottlenecked):** **OpenClaw** is the most mature project but is showing signs of slowing down. Its activity is reactive (bug reports) rather than proactive (feature releases). The community is large but frustrated.
- **Tier 4: Niche / Low Activity:** **PicoClaw** and **CoPaw** are active but focused on smaller, specific features. **LobsterAI** is a long-cycle product. **NullClaw** and **TinyClaw** are effectively dormant.

### 7. Trend Signals
Three key industry trends are emerging from the aggregated community feedback:

1.  **The "Agent Reliability Cliff":** Users are hitting a wall where agents fail not because of LLM limitations, but because of **runtime software bugs**—infinite loops, silent failures, and tool output corruption. The next competitive differentiator will be **deterministic and debuggable agent execution**, not just a bigger feature list.
2.  **Security is the New Feature Parity:** The demand for **Masked Secrets**, **Memory Trust Tagging**, and **Role-Based Approvals** is not just about safety; it’s about enabling trust for production use cases like financial transactions or privileged data access. A project without these features will be **"toy-grade"** for enterprise adopters.
3.  **Extensibility Governance:** The community is moving beyond "can I install a plugin?" to **"can I safely install a plugin?"** . The desire for permission manifests (CoPaw), skill security gates (ZeroClaw), and lifecycle standards (Hermes Agent) signals that the ecosystem is maturing from a collection of scripts to a governed platform requiring a security review pipeline.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-21

## 1. Today's Overview
NanoBot shows **moderate to high activity** over the past 24 hours, with 7 issues updated and a notable 29 PRs updated, 12 of which were merged or closed. The project continues to mature with a strong focus on **bug fixes, stability improvements, and deployment accessibility**. While no new releases were published, the maintainers have been actively merging fixes for session handling, provider image merging, and channel-specific infinite loops. A significant new feature—a **multi-agent collaboration proposal**—entered discussion at issue #5000, signaling growing interest in more advanced agent orchestration. The community remains engaged, though several long-standing enhancement requests (e.g., issue #1503) still await maintainer attention.

## 2. Releases
**No new releases** in the last 24 hours. The latest stable version remains unchanged.

## 3. Project Progress
**12 PRs were merged/closed today**, advancing several areas:

- **Session & Storage Fixes** — PR #5004 (closed) fixes an `EINVAL` error on directory `fsync` for shared filesystems, improving compatibility with network mounts.
- **Provider Fixes** — PR #5008 (closed) ensures all images are preserved when merging consecutive multimodal user messages for OpenAI-compatible providers, fixing a bug where multi-image album uploads lost all but the last image.
- **Subagent & Turn Lifecycle Refactoring** — PR #4993 (closed) unifies the internal turn lifecycle for system messages (including subagent results), eliminating a duplicated mini-loop and enabling consistent delivery timing. PR #4954 and PR #4992 (both open) build on this to keep late subagent results visible in the WebUI.
- **Channel Robustness** — PR #4768 (closed) adds **exponential backoff** to the QQ channel's WebSocket reconnect loop, fixing a log-flooding issue on DNS/network failures. PR #4981 and PR #4982 (both closed) fix infinite loops in Telegram and Feishu message splitting when `max_len` is set to 0 or negative.
- **Documentation & Security** — PR #5010 (open) proposes updates to SECURITY.md recommending environment-variable references over plaintext API keys. PR #4998 (closed) adds Ollama prompt-cache diagnostics documentation.
- **Deployment** — PR #4937 (closed) adds a **Render one-click deploy** blueprint. PR #5007 (open) adds a **Dokploy one-click deploy** template.

## 4. Community Hot Topics
| Issue/PR | Type | Comments | 👍 | Summary |
|----------|------|----------|----|---------|
| [#4867 — preserve exact prompt prefix for Ollama caching](https://github.com/HKUDS/nanobot/issues/4867) | Issue (closed) | 15 | 0 | User reports that NanoBot adds 60 seconds per turn with Ollama because prompt reordering breaks cache; closed as a follow-up to #2463. **Underlying need:** Performance optimization for local LLM inference, a critical UX blocker for self-hosted users with limited VRAM. |
| [#4864 — endless loop for `<tool_call> <function=complete_goal>`](https://github.com/HKUDS/nanobot/issues/4864) | Issue (open) | 4 | 1 | The `complete_goal` tool errors due to gateway parsing the `recap` parameter as a bare string instead of JSON. **Underlying need:** Tool parameter serialization broke in a recent update, breaking goal-completion workflows. |
| [#5000 — multi-agent collaboration proposal](https://github.com/HKUDS/nanobot/issues/5000) | Issue (open) | 1 | 0 | Proposes evolving subagents into persistent, collaborative agents with shared task state and agent-to-agent messaging. **Underlying need:** Users want more sophisticated multi-agent workflows beyond simple task delegation. |

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? | Description |
|----------|-------|--------|---------|-------------|
| **Critical** | [#4864 — endless loop on `complete_goal`](https://github.com/HKUDS/nanobot/issues/4864) | **Open** | No | Tool parameter serialization regression causes infinite tool-call loops; gateway parses JSON parameter as bare string. Affects any agent relying on goal completion. |
| **High** | [#4803 — API keys stored as plaintext](https://github.com/HKUDS/nanobot/issues/4803) | Open | PR #5010 (doc fix only) | `ProviderConfig.api_key` has `repr=False` but not `exclude=True`, so keys remain in `model_dump()` and config file. No code-level fix yet; only documentation guidance proposed. |
| **Medium** | [#4767 — QQ channel reconnect loop fixed](https://github.com/HKUDS/nanobot/issues/4767) | **Closed** | PR #4768 merged | Fixed exponential backoff for QQ WebSocket reconnects. |
| **Low** | [#4981/#4982 — infinite split loops](https://github.com/HKUDS/nanobot/pull/4981) | **Closed** | PRs #4981, #4982 merged | Telegram and Feishu message splitting hung on `max_len <= 0`. |

**Critical concern:** Issue #4864 has no fix PR yet and is a **gateway regression** breaking goal-completion functionality. The community upvoted it (👍1) and it's been open since July 9 with no assigned fix.

## 6. Feature Requests & Roadmap Signals
- **Multi-Agent Collaboration** (Issue #5000) — A detailed proposal to evolve subagents into persistent, collaborative agents with shared state and agent-to-agent messaging. This is likely too large for the next point release but signals a major roadmap direction.
- **Dokploy One-Click Deploy** (PR #5007, issue #1503 from March) — Now has a draft PR, likely to land in the next release, addressing a long-standing request for non-technical self-hosting.
- **Guarded Tool Gateway** (PR #5006) — A new opt-in protocol for channel plugins to execute tools under the same workspace context as agent turns. Targets improved channel security and is a strong candidate for the next minor release.
- **Feishu `groupPolicy: listen`** (PR #5009) — Allows Feishu bots to accumulate group context without LLM turn until `@mention`. Modest feature likely for next release.

**Prediction:** The next minor release will likely include Dokploy/Render templates, the tool gateway, Feishu listen mode, and the subagent lifecycle refactoring.

## 7. User Feedback Summary
- **Positive:** The community appreciates the rapid bug-fix cycle (12 merged PRs today) and the focus on deployment accessibility (Render, Dokploy). The subagent lifecycle refactoring (#4993) was well-received as a necessary architectural improvement.
- **Pain Points:**
  - **Ollama performance is broken** (Issue #4867) — Users report "totally unusable" performance with local models, adding 60 seconds per turn. This is a **major satisfaction risk** for self-hosted users.
  - **`complete_goal` regression** (Issue #4864) — A core agent workflow is broken by a recent update, causing infinite loops.
  - **Plaintext API keys** (Issue #4803) — Security concern persists despite `repr=False`; users want actual encryption or `exclude=True`.
- **Use Case Highlight:** A user (Issue #1503) explicitly offered a **temporary Dokploy environment** for the team to test templates, showing strong community willingness to contribute infrastructure for better deployment options.

## 8. Backlog Watch
| Issue | Created | Last Updated | Status | Why It Matters |
|-------|---------|--------------|--------|----------------|
| [#1503 — Template for Dokploy](https://github.com/HKUDS/nanobot/issues/1503) | 2026-03-04 | 2026-07-20 | Open, 1 comment | **4.5 months old** — User offered a test environment 4 months ago. A draft PR (#5007) was opened today, so this is finally moving, but no maintainer has engaged with the volunteer. |
| [#4803 — API keys in plaintext](https://github.com/HKUDS/nanobot/issues/4803) | 2026-07-06 | 2026-07-20 | Open, 1 comment | **Security issue** — Only a documentation PR (#5010) proposed; no code-level remediation. Maintainers should consider adding `exclude=True` or a migration to encrypted storage. |

**Maintainer attention needed:** Issue #1503 has languished for 4.5 months despite a user offering free testing infrastructure. The new PR #5007 needs review and likely needs the volunteer's test environment to be activated.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-21

## Today's Overview

Hermes Agent v0.19.0 ("The Quicksilver Release") launched yesterday with substantial momentum — 2,245 commits, ~3,300 issues closed, and 450+ community contributors since v0.18.0. Activity today is elevated: 50 issues updated (45 open), 50 PRs updated (43 open), and 7 PRs merged/closed. The project is processing a high volume of post-release bug reports and feature refinement, with 16 new issues opened today alone. Community engagement remains strong across both bug triage and feature proposals, though the P1 severity of the sdist test-suite shipping issue (#68311) signals a release quality gap needing immediate attention.

## Releases

**Hermes Agent v0.19.0 (v2026.7.20) — The Quicksilver Release** was published on July 20, 2026. Key metrics since v0.18.0:
- ~2,245 commits · ~1,065 merged PRs · ~2,465 files changed
- ~300,000 insertions · ~36,000 deletions
- **~3,300 issues closed** · **450+ community contributors**

**⚠️ Breaking Change / Migration Note:** Every published sdist from v0.13.0 through v0.19.0 ships `tests/test_live_system_guard_self_test.py` **without** `tests/conftest.py`. Running packaged tests executes `os.kill(-1, SIGTERM)` which kills the user's entire session. This is a critical packaging regression spanning 7 releases.

## Project Progress

**7 PRs merged/closed today:**
- **[#68340](https://github.com/NousResearch/hermes-agent/pull/68340)**: feat(docs): add Japanese README (README.ja.md) — closed
- **[#68301](https://github.com/NousResearch/hermes-agent/issues/68301)**: Native session bridging feature — closed as duplicate of #4335
- **[#66611](https://github.com/NousResearch/hermes-agent/issues/66611)**: Desktop "Already up to date" overlay close button — closed, bug confirmed fixed in pending #68331
- **[#67194](https://github.com/NousResearch/hermes-agent/issues/67194)**: Windows installer crash — closed as duplicate
- **[#4216](https://github.com/NousResearch/hermes-agent/pull/4216)**: README roadmap + visual enhancements — merged

**Key fixes advancing today:**
- **[#68345](https://github.com/NousResearch/hermes-agent/pull/68345)**: Kanban corrupt-DB quarantine backup cap (fixes #68336)
- **[#68332](https://github.com/NousResearch/hermes-agent/pull/68332)**: Signal gateway profile routing fix (gateway_runner missing on built-in adapters)
- **[#68333](https://github.com/NousResearch/hermes-agent/pull/68333)**: reasoning_content echo-back centralized for DeepSeek/Kimi/Xiaomi

## Community Hot Topics

**Most Active Issues:**

1. **[#4335](https://github.com/NousResearch/hermes-agent/issues/4335) — Cross-platform session context sharing (CLI ↔ Telegram)** (8 comments, 2 👍)
   - *Need:* Users want seamless conversation continuation across Telegram, CLI, and Desktop. Currently each platform has isolated session stores.
   - *Impact:* High — affects daily workflow for multi-platform users. Duplicate #68301 suggests growing demand.

2. **[#2788](https://github.com/NousResearch/hermes-agent/issues/2788) — Cron jobs never run or fail silently** (6 comments)
   - *Need:* Debugging cron job failures is nearly impossible — no logs, no error messages. P2 severity.
   - *Impact:* Blocks automation use cases (scheduled tasks, periodic skills).

3. **[#64900](https://github.com/NousResearch/hermes-agent/issues/64900) — Plugins extend send_message with platform-specific schema** (5 comments)
   - *Need:* Plugin authors cannot add platform-specific parameters (voice selection, structured metadata) without editing core code.
   - *Signal:* Points to plugin system maturity gap post-v0.19.0.

4. **[#64231](https://github.com/NousResearch/hermes-agent/issues/64231) — Lifecycle-event catalog + hook taxonomy** (5 comments)
   - *Need:* Pending hook PRs are accumulating without standards. Community wants clear plugin lifecycle documentation.

5. **[#68311](https://github.com/NousResearch/hermes-agent/issues/68311) — Every published sdist kills user session via os.kill(-1, SIGTERM)** (3 comments, P1)
   - *Need:* Urgent — packaging regression affecting all installs from v0.13.0 to v0.19.0. Running `pytest` after pip install kills terminal session.

**Most Active PRs:**
- **[#51445](https://github.com/NousResearch/hermes-agent/pull/51445)**: Cron silent-marker malformed delivery suppression (long-running, 28 days open)
- **[#45317](https://github.com/NousResearch/hermes-agent/pull/45317)**: BlueBubbles duplicate inbound turn fix
- **[#66772](https://github.com/NousResearch/hermes-agent/pull/66772)**: Credential pool env scoping to profiles (security-focused)

## Bugs & Stability

### Critical (P1)
- **[#68311](https://github.com/NousResearch/hermes-agent/issues/68311)**: Sdist ships kill-primitive test without guard — `os.kill(-1, SIGTERM)` kills user session when running packaged tests. **Affects all releases v0.13.0–v0.19.0.** No fix PR yet. **All users should avoid running `pytest` on pip-installed hermes-agent until fixed.**

### High (P2)
- **[#68261](https://github.com/NousResearch/hermes-agent/issues/68261)**: TUI skill credential prompts routed to wrong session — process-global callback issue in multi-session setups.
- **[#68339](https://github.com/NousResearch/hermes-agent/issues/68339)**: Mixed-batch tool execution (#66317) produces early-session behavior shift for enforcement-gated models (DeepSeek/Qwen).
- **[#68324](https://github.com/NousResearch/hermes-agent/issues/68324)**: Desktop assistant messages vanish when switching away and back (user messages remain) — data intact in DB, app restart restores.
- **[#68318](https://github.com/NousResearch/hermes-agent/issues/68318)**: v0.19.0 plugin handlers crash with `unexpected keyword argument 'task_id'` — affects all "single-args" handler shape plugins (e.g., kasio-notion).
- **[#68300](https://github.com/NousResearch/hermes-agent/issues/68300)**: Unguarded cross-module import makes releases non-atomic — `ImportError` possible between `system_prompt.py` and `prompt_builder.py`.

### Medium (P3)
- **[#68244](https://github.com/NousResearch/hermes-agent/issues/68244)**: After update, answering "No" to "Restore local changes?" breaks dashboard and agent restart.
- **[#68336](https://github.com/NousResearch/hermes-agent/issues/68336)**: Kanban corrupt-DB quarantine backups grow unboundedly with external writers.
- **[#66868](https://github.com/NousResearch/hermes-agent/issues/66868)**: Cron job primary model call fails 401 — provider collapses to "custom" outside runtime session.
- **[#55369](https://github.com/NousResearch/hermes-agent/issues/55369)**: Union `integer|string` tool args drop leading zeros ("007" → 7).

**Fix PRs existing for several bugs:** #68345 (kanban backup cap), #68331 (desktop session title/dragging), #68332 (Signal routing), #68333 (reasoning_content), #68334 (compression skip), #66772 (credential scoping).

## Feature Requests & Roadmap Signals

**New today:**
- **[#68341](https://github.com/NousResearch/hermes-agent/pull/68341)**: Machine hostname in environment hints — prevents self-SSH loops
- **[#68337](https://github.com/NousResearch/hermes-agent/pull/68337)**: Anthropic native web search and fetch tools
- **[#68330](https://github.com/NousResearch/hermes-agent/pull/68330)**: POSTURE.md rotating bets with MEMORY-style budget
- **[#68344](https://github.com/NousResearch/hermes-agent/pull/68344)**: Japanese README translation
- **[#4256](https://github.com/NousResearch/hermes-agent/issues/4256)**: Configurable keybindings (6 👍, long-standing UX request)
- **[#68301](https://github.com/NousResearch/hermes-agent/issues/68301)**: Native session bridging (closed as duplicate of #4335)

**Predicted for next release (v0.20.0):**
- **Cross-platform session sharing (#4335)** — community demand is high, duplicate filed today
- **Plugin lifecycle standard (#64231)** — maintainer has pending hook PRs to triage
- **MCP server management CLI (#690)** — 4 comments, long-standing feature request
- **Configurable keybindings (#4256)** — 6 👍, multiple conflicts reported with tmux/screen

## User Feedback Summary

**Satisfaction signals:**
- Active translation contributions (Japanese README) show international community engagement
- 7 PRs merged/closed today indicates responsive maintainer triage despite high volume
- 450+ contributors since v0.18.0 demonstrates healthy ecosystem growth

**Pain points (raw user reports):**
- **"Can't install Windows app"** (#67194, confirmed duplicate) — installer crash on Hermes-Setup.exe
- **"Assistant messages vanish in Desktop"** (#68324) — conversation fidelity broken mid-session
- **"Plugins crash after v0.19.0 update"** (#68318) — regressions in plugin handler API
- **"BlueBubbles duplicate iMessage processing"** (#34372) — every iMessage triggers two `handle_message` calls
- **"No context length shown for custom provider"** (#2513) — UX gap for provider configuration
- **"Cron silently fails"** (#2788) — automation confidence undermined
- **"TUI skill prompts go to wrong session"** (#68261) — multi-session usability regression

**Use cases highlighted:**
- Multi-platform users (Telegram + CLI + Desktop) wanting unified conversations
- Users running cron jobs for automation (scheduled skill execution)
- Plugin developers extending send_message for custom platforms
- International users (Japanese README translation contributors)
- Enterprise/homelab users with multi-host setups (hostname hint PR)

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

| Issue | Created | Age | Reason for Concern |
|-------|---------|-----|-------------------|
| [#2788](https://github.com/NousResearch/hermes-agent/issues/2788) — Cron silent failures | 2026-03-24 | ~4 months | P2, 6 comments, no fix PR |
| [#2228](https://github.com/NousResearch/hermes-agent/issues/2228) — System error role injection | 2026-03-20 | ~4 months | P2, impacts message integrity |
| [#2513](https://github.com/NousResearch/hermes-agent/issues/2513) — Custom provider context length | 2026-03-22 | ~4 months | P3, UX gap, 1 👍 |
| [#2975](https://github.com/NousResearch/hermes-agent/issues/2975) — WhatsApp macOS Node.js | 2026-03-25 | ~4 months | P3, macOS-specific blocker |
| [#690](https://github.com/NousResearch/hermes-agent/issues/690) — MCP server management CLI | 2026-03-08 | ~4.5 months | P3, feature request with community interest |
| [#4256](https://github.com/NousResearch/hermes-agent/issues/4256) — Configurable keybindings | 2026-03-31 | ~3.5 months | 6 👍, UX regression for tmux/screen users |

**Long-running PRs:**
- [#51445](https://github.com/NousResearch/hermes-agent/pull/51445) — Cron silent marker fix (28 days open, P2)
- [#26056](https://github.com/NousResearch/hermes-agent/pull/26056) — CLI status bar showing resolved model/provider (2+ months open, P3)

**Risk watch:** The 4-month backlog of P2 issues (#2788, #2228) combined with the P1 packaging regression (#68311) suggests the team may be stretched thin between release demands and core maintenance. The sdist test-packaging bug spanning 7 releases indicates a gap in CI/CD quality gates that should be addressed as a process-level fix.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-21

## 1. Today's Overview

PicoClaw shows **elevated maintenance activity** with 11 issues updated and 10 PRs updated in the last 24 hours—a significant uptick from typical daily volumes. The project closed 6 issues and 5 PRs, indicating a focused effort on regression fixes and infrastructure improvements. However, **5 open issues remain active**, including two new critical bugs affecting the Antigravity provider and the Launcher WebUI. No new releases were published today. The community is concentrated around **provider-specific regressions** (Antigravity OAuth blocked by Google, model config wiping) and **agent reliability problems** (MCP server failure hanging the agent loop). A **major fix PR (#3277)** for deferred MCP tool visibility was merged, addressing a long-standing session persistence bug.

## 2. Releases

**No new releases today.** The last tagged version remains **v0.3.1** (from early July 2026). Given the volume of recent fixes and feature additions (Japanese localization, DashScope TTS, model name refreshes), a v0.3.2 release may be imminent.

## 3. Project Progress

**Merged/closed PRs today (5 items):**

| PR | Summary | Impact |
|----|---------|--------|
| [#3277](https://github.com/sipeed/picoclaw/pull/3277) | fix(tools): deferred-tool visibility heal + sliding TTL + SSE tool-call index fix | **Critical fix** for MCP deferred tools disappearing after restart/TTL expiry |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | chore: bump goreleaser base images to alpine:3.23 | Infrastructure/security update |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | chore: remove duplicate build/ entry in .gitignore | Cleanup |
| [#276](https://github.com/sipeed/picoclaw/pull/276) | docs: polish README formatting and wording | Documentation quality |
| [#277](https://github.com/sipeed/picoclaw/pull/277) | feat: update `make deps` logic to prevent frequent dependency updates | Build system stability |

**Key feature advancement:** PR #3277 ([fix(tools): deferred-tool visibility heal](https://github.com/sipeed/picoclaw/pull/3277)) by m4n3z40 resolves a **major agent reliability bug** where deferred MCP tools would silently vanish from the agent's tool list after a process restart or TTL expiry. The fix introduces a healing mechanism and sliding TTL, ensuring session history with successful tool calls remains consistent.

**Note:** The infrastructure PRs #3192 and #3191 by chengzhichao-xydt were closed as stale (after 23 days without merging) — suggesting the maintainers may have intentionally deferred these or applied equivalent changes elsewhere.

## 4. Community Hot Topics

### Most Active Issues:

| Issue | Comments | Reactions | Topic |
|-------|----------|-----------|-------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | 4 | 0 | **Android launch failure** — user can't start service, file path settings broken |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | 3 | 1 👍 | **Matrix sync reconnection** — silent death after network disruption, no auto-reconnect |
| [#3274](https://github.com/sipeed/picoclaw/issues/3274) | 2 | 0 | **Antigravity regression** — `INVALID_ARGUMENT` on main branch |

### Underlying Needs:
- **Cross-platform parity**: The Android issue (#3182) signals user demand for mobile deployment, but PicoClaw's Android build remains broken — likely a packaging or permission model issue.
- **Resilience vs. monitoring gap**: Issue #3203 reveals a systemic gap — PicoClaw's Matrix bridge lacks reconnection logic, and systemd's restart policy doesn't detect silent process death. Users need either built-in health checks or automatic reconnection.
- **Regression anxiety**: Issue #3274 (Antigravity `INVALID_ARGUMENT`) shows that even with the `tool_schema_transform: "simple"` workaround, the main branch has regressed from v0.3.1 — worrying for users running `nightly`.

## 5. Bugs & Stability

### Critical (blocking user workflows):

| ID | Bug | Severity | Status | Fix PR Exists? |
|----|-----|----------|--------|----------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure hangs agent loop, stops chat replies | **Critical** | Open | No |
| [#3278](https://github.com/sipeed/picoclaw/issues/3278) | Google blocks Antigravity OAuth login — "doesn't comply with OAuth 2.0 policy" | **Critical** | Closed (pending upstream fix) | N/A |

### High:

| ID | Bug | Severity | Status | Fix PR Exists? |
|----|-----|----------|--------|----------------|
| [#3274](https://github.com/sipeed/picoclaw/issues/3274) | Antigravity `INVALID_ARGUMENT` regression on main branch | **High** | Closed (fixed? PR unclear) | Possibly |
| [#3275](https://github.com/sipeed/picoclaw/issues/3275) | Launcher config rewrites lose `api_keys` from `model_list` entries | **High** | Closed | Yes? |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop has no reconnection logic — silent death | **High** | Open, stale | No |

### Medium:

| ID | Bug | Severity | Status | Fix PR Exists? |
|----|-----|----------|--------|----------------|
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Missing `thought_signature` when calling Gemini via OpenAI compat format | **Medium** | Closed (stale) | Unclear |

**Analysis:** The Antigravity provider is undergoing a **crisis of reliability** — two separate regressions (#3274, #3278) reported in the same 48-hour window. The OAuth block (#3278) is particularly concerning as it breaks all new Antigravity authentications. The MCP hanging bug (#3269) is a **major UX killer** — once deployed, a misconfigured MCP server can permanently freeze the chat interface, requiring manual intervention.

## 6. Feature Requests & Roadmap Signals

### Requested features (open):

| Issue | Feature | Complexity | Likelihood for v0.3.2 |
|-------|---------|------------|------------------------|
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Launcher support for externally-managed gateway (systemd) + graceful handling of unknown channel types | Medium | **High** — submitted by honbou, who is active in main fixes |
| [#3272](https://github.com/sipeed/picoclaw/issues/3272) | Japanese localization for WebUI/Launcher | Low | **Very High** — PR #3273 already submitted (968-line full translation) |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | DashScope TTS provider + WeChat audio file sending | Medium | **High** — PR open and complete |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | Update default model names to 2026-07 latest (GPT-5.6, Claude 4.5, etc.) | Low | **Very High** — routine provider maintenance |

### Roadmap predictions:
- **v0.3.2 is likely imminent** — the combination of critical regression fixes (#3274, #3275), the Japanese i18n PR (#3273), model name refreshes (#3271), and the DashScope TTS feature (#3270) suggest a release candidate is being assembled.
- **The Launcher architecture** is evolving toward production headless deployments (#3276), signaling enterprise/server use cases are becoming a priority.
- **Reliability > features** — the influx of bug reports (11 issues in 24h) suggests maintainers may prioritize stability over new functionality in the next 1-2 weeks.

## 7. User Feedback Summary

### Pain Points:
- **Android deployment broken** (#3182): File path settings not working, service can't launch — user expresses frustration: "Also i have full permission to app / Can't change path from settings"
- **MCP server failures freeze the UI** (#3269): User reports the agent loop "hangs" and "the Picoclaw chat interface stops replying to users" — a critical UX failure
- **Matrix chat silent death** (#3203): "silent death after network/server disruption" — users lose chat without any error indicator
- **Config corruption** (#3275): honbou reports that "model_list entry loses api_keys (and other fields) after config rewrites via Launcher WebUI / auth login" — serious security concern if persisted

### Satisfaction Signals:
- **Japanese localization demand** (#3272): honbou explicitly notes the main docs already have Japanese translation, but the WebUI doesn't — shows community investment in internationalization
- **Active feature contributions**: Multiple contributors submitting complete PRs (honbou with i18n, MrTreasure with DashScope TTS, LeaderOnePro with model updates) indicates a healthy, engaged developer community

## 8. Backlog Watch

### Issues needing maintainer attention:

| Issue | Age | Last Update | Concerns |
|-------|-----|-------------|----------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) — Android launch failure | 25 days | 2026-07-20 | User provided screenshots, logs, and workarounds — no maintainer response visible |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) — Matrix sync no reconnection | 19 days | 2026-07-20 | Marked `stale`, but has 1 👍 indicating community agreement on importance |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) — SearXNG auth header support | 15 days | 2026-07-20 | Chinese-language request — may need triage by Chinese-speaking maintainer |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) — Model resolution fix | 8 days | 2026-07-20 | Open PR with no reviewer comments, losing "stale" label risk |

### Critical gap:
- **Android support (#3182)** has been open for 25 days with no visible maintainer engagement — this is the only mobile platform reported working, and its silence could drive users away.
- **The Matrix reconnection issue (#3203)** is marked `stale` despite being filed just 19 days ago, suggesting the maintainer triage process may be aggressive in marking issues as stale.

### Notable: 
- All 6 closed issues today were closed **without merged fix PRs** — they were either closed as stale or closed with a comment. This pattern raises questions about whether regressions are being properly tracked and resolved, or if the project is relying on "stale" labelling to reduce queue depth.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-21

## 1. Today's Overview

Project activity is **very high** today with 20 PRs and 6 issues updated in the last 24 hours, indicating a major push across multiple fronts. Six closed/merged PRs show strong forward momentum, while 14 open PRs suggest active development across security hardening, channel integrations, and bug fixing. The project is clearly in a period of intense quality assurance and feature expansion, with multiple core-team and community contributors shipping changes simultaneously. The burst of security-related issues from user `k-fls` signals a focused audit of the role and approval system.

---

## 2. Releases

**No new releases** were published today. No version bumps or changelog entries to report.

---

## 3. Project Progress

Six PRs were closed or merged today, reflecting significant progress:

- **#3110** (merged) — `feat(container): bake caldav-mcp into the agent image`: Pins `caldav-mcp@0.8.0` and installs it globally, enabling calendar tool integration out of the box.
- **#3108** (merged) — `fix(chat-sdk-bridge): rehydrate inbound attachments when adapters carry no fetchData`: Critical fix for attachment handling when adapters don't provide URL-based fetch methods.
- **#3107** (merged) — `fix(add-whatsapp-cloud): copy the adoption module and document the row re-key`: Companion fix for the WhatsApp Cloud instance re-key migration.
- **#3087** (merged) — `fix(whatsapp): engage mention-mode wirings on typed @-mentions in groups`: Enables proper mention-mode behavior for WhatsApp groups.
- **#1110** (merged) — `fix: update container-runtime tests to match implementation`: Test suite maintenance aligning tests with current code.
- **#2642** (merged) — `fix(add-telegram): pin chat-adapter to 4.26.0 to match installed chat`: Resolves peer dependency version mismatch in the Telegram skill.

**Key theme**: Today's merges lean heavily on **attachment handling fixes** (iMessage, Chat SDK bridge, WhatsApp) and **operational reliability** (container init, test maintenance, dependency pinning).

---

## 4. Community Hot Topics

The most active discussions today center on **security and role management**:

- **#3096 — `feat: Add /add-line skill for LINE Official Account channel`** (1 comment) — New channel adoption proposal for LINE, dominant in East Asian markets. The author notes there's no `@chat-adapter/line` package yet, so this requires a native adapter. Links to PR #2918 which has been open since July 3.

- **#3097, #3098, #3099, #3100** — Four issues from `k-fls` filed in rapid succession, all targeting **security flaws in the role/approval system**:
  - **#3097**: `Role grant silently confers GLOBAL admin when --group is omitted` — Accidental privilege escalation vector
  - **#3098**: `Approval cards echo raw command line, not the effect` — Poor UX for approvers
  - **#3099**: `Approval routing can route a role-change to its own target` — Self-approval loophole
  - **#3100**: `Revoking the sole remaining owner is not prevented` — Root of trust deletion

  All four issues have corresponding **fix PRs** (#3101–#3104) already open, showing rapid response from the community contributor. This represents a **coordinated security audit** of the approval system, likely stemming from a systematic review.

- **PR #2459 — `feat(skill): add /add-voice-transcription-chat-sdk`** — Still open since May 13, receiving updates today. On-device voice transcription for Chat SDK channels via whisper.cpp, with no cloud dependency. This long-running PR suggests careful review or technical complexity.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | #3100 | Revoking the sole remaining `owner` is not prevented — complete loss of administrative access | ✅ #3104 |
| **High** | #3099 | Role-change approval can route to the target user themselves, enabling self-approval of privilege changes | ✅ #3103 |
| **High** | #3097 | `ncl roles grant --role admin` without `--group` silently grants global admin | ✅ #3101 |
| **Medium** | #3105 | WhatsApp Cloud upgrade strands `messaging_groups` rows after instance re-key (#2913) — WhatsApp silently mutes on upgrade | ✅ #3106 (open) |
| **Medium** | #3098 | Approval cards show raw CLI commands instead of human-readable effect descriptions | ✅ #3102 |

**Key observation**: All four security issues were filed **the same day** and all four have **immediate fix PRs** from the same reporter (`k-fls`). The #3105 WhatsApp migration bug is handled by a separate PR (#3106) from `glifocat`. This suggests excellent issue-to-fix velocity in the project.

---

## 6. Feature Requests & Roadmap Signals

**High-probability near-term features** (evidenced by open PRs with recent activity):

1. **LINE Official Account Channel** — PR #2918 (open since July 3, updated today) adds a native `@chat-adapter/line` plus `/add-line` skill. Active interest from the community; LINE is dominant in Japan/Taiwan/Thailand. Likely to merge as the skill process completes.

2. **Dial Channel (SMS + AI Voice Calls)** — PRs #3041 and #3050 (both updated today) add Dial as a communication channel with SMS and AI voice call capabilities. The paired setup wizard PR suggests thorough integration.

3. **On-Device Voice Transcription** — PR #2459 (open since May 13, updated today) remains active despite its age, suggesting careful architectural review. Would bring whisper.cpp transcription to Discord, Slack, Teams, Webex, and Google Chat without cloud API dependency.

4. **WhatsApp Cloud Migration Fixes** — PRs #3106 and #3107 (both from today) fix the "stranded rows" bug on upgrade and document the migration. High priority given the user-facing impact on existing installations.

5. **iMessage Attachment Fix** — PR #3109 (open, updated today) adds HEIC→JPEG conversion for iMessage attachments in local mode, addressing a real-world pain point for macOS users.

**Predictions**: The LINE channel (#2918) and voice transcription (#2459) are strong candidates for the next minor release. The security fixes (#3101–#3104) may be fast-tracked as a patch release given their criticality.

---

## 7. User Feedback Summary

**Pain points expressed today:**

- **WhatsApp Cloud silent failure on upgrade** (#3105): User `glifocat` reports that existing installs picking up the re-keyed `whatsapp-cloud` bridge silently mute WhatsApp — Meta keeps POSTing but the agent never responds. This is a **regression** from the instance re-key fix in #2913, affecting production users.

- **Role/approval system frustrations** (issues #3097–#3100 from `k-fls`): A single user filed four systemic issues with role management, suggesting either a security audit or real-world operational pain:
  - "Accidental privilege escalation is easy" (global admin grant)
  - "The approver is asked to approve a raw command line" (poor approval UX)
  - "A higher-privileged action can be gated on a lower-privileged approver"
  - "No one can ever again approve an owner-level action" after revoking last owner

- **Attachment handling gaps**: Multiple PRs (#3108, #3109, #3044) address scenarios where attachments arrive without `fetchData` — affecting iMessage, Telegram voice notes, and any Chat SDK adapter using local file stores. User impact: agents see filenames but never get the actual file bytes.

**Satisfaction signals**: The rapid creation of companion fix PRs for reported issues (same-day for all security issues) indicates a responsive maintainer/contributor community. The structured "Type of Change" checklist in PR templates suggests good governance and review processes.

---

## 8. Backlog Watch

| Issue/PR | Age | Last Update | Concern |
|----------|-----|-------------|---------|
| **PR #2459** — `/add-voice-transcription-chat-sdk` | 69 days | Today (comment only) | Feature skill opened May 13, still not merged. The pairing with #2317 and on-device whisper.cpp integration may be awaiting architectural decisions. |
| **PR #1110** — `fix: update container-runtime tests` | 128 days | Merged today | This PR was **just merged** after being open since March 15. Previously may have been blocked by test flakiness or dependency concerns. |
| **PR #2950** — `Traditional Chinese README (README_zh-TW.md)` | 17 days | Updated today | Documentation translation from community member `joshm1230212`. Low-risk but still pending review. May be waiting for maintainer bandwidth. |
| **PR #3044** — `fix(channels): download inbound attachments that lost fetchData (#2888)` | 7 days | Updated today | Addresses a significant attachment handling hole (#2888). Open since July 14; may be awaiting the iMessage fix (#3109) as a companion. |

**No orphaned issues** — all open items have recent activity. The project appears well-maintained with reasonable triage velocity, though the 69-day age of PR #2459 is worth noting for community morale.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest — 2026-07-21**

**1. Today's Overview**  
Project activity remains minimal over the last 24 hours: no new issues were updated, and the single pull request update concerns a routine dependency upgrade. No new releases have been published, and no functional or feature-level work appears in the current data. The project appears to be in a low-activity maintenance phase, with the most recent development pulse being primarily automated dependency management.

**2. Releases**  
No new releases this period. (Latest release: none documented in the last 24h.)

**3. Project Progress**  
No pull requests were merged or closed today. The only PR updated is open and awaiting review/merge.

**4. Community Hot Topics**  
- **PR #956** – [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group  
  *Author: dependabot[bot] | Updated: 2026-07-20*  
  *Link:* [PR #956](https://github.com/nullclaw/nullclaw/pull/956)  
  This is the sole activity point. It is an automated dependency bump (Alpine base image). No community comments or reactions have been registered, indicating low community engagement on this particular update. The underlying need is keeping the Docker image up-to-date with the latest base image for security and compatibility.

**5. Bugs & Stability**  
No bugs, crashes, or regressions were reported today. No stability-related issues or fix PRs are present in the 24-hour window.

**6. Feature Requests & Roadmap Signals**  
No feature requests were filed or updated today. No signals of upcoming roadmap changes or new feature work can be derived from the available data.

**7. User Feedback Summary**  
No user feedback (comments, reactions, or discussions) is present on the single active item. No pain points, satisfaction signals, or use case descriptions are visible in the last 24 hours.

**8. Backlog Watch**  
- **PR #956** remains open (since 2026-06-15, ~36 days) with no maintainer action or comments. While it is a low-risk dependency bump, its open duration suggests it may be waiting for review or testing.  
  *Link:* [PR #956](https://github.com/nullclaw/nullclaw/pull/956)  

**Project Health Assessment:** The project is in a low-activity or dormant phase. No functional development, community discussion, or bug triage has occurred recently. The single open PR indicates that even routine maintenance tasks may be stalled. Maintainer attention is recommended, particularly for reviewing PR #956 and re-engaging with the project's development cycle.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-21

## 1. Today's Overview

IronClaw is in a period of exceptionally high refactoring velocity as it completes its "Reborn" architecture migration—the v1 legacy monolith (`src/`) has been deleted in PR #6375, with production deployments pointed at the Reborn stack. Activity is intense: 43 issues updated and 50 PRs updated in the last 24 hours, with 28 PRs merged or closed and 40 open issues actively being worked. Multiple critical refactors are stacked and landing in rapid succession, including deployment configuration consolidation, security policy unification into a single `authorize()` function, and removal of dead feature flags. The project is clearly on a stabilization-and-cleanup sprint toward a 1.0.0-rc.1 release, though the first tag push failed at the cargo-dist stage. The team is predominantly core contributors executing architectural cleanup while triaging a significant influx of bug-bash findings (P1/P2 severity) from external testers.

## 2. Releases

No new releases today.

## 3. Project Progress

The following PRs were **merged or closed** in the last 24 hours, representing substantial architectural progress:

- **#6375 (Merged)** — [refactor(tier-b): delete v1 legacy monolith (src/) and cut deploy over to Reborn](https://github.com/nearai/ironclaw/pull/6375) — The single largest structural change: the entire `src/` tree (`ironclaw-legacy` binary) deleted, and Railway/GCP/CI deploy configs repointed at Reborn. This is the culmination of the Tier B cleanup.
- **#6382 (Merged)** — [refactor(turns): simplify filesystem_store](https://github.com/nearai/ironclaw/pull/6382) — Removed a production-dead parallel store implementation, deduplicated transition/commit code, and decomposed giant files.
- **#6374 (Merged)** — [refactor(composition): eliminate local_trigger_access](https://github.com/nearai/ironclaw/pull/6374) — Removed the last `Local*` deployment-type leak from composition, eliminating a 1,464-LOC shadow store.
- **#6378 (Merged)** — [chore(runner): remove dead feature flags](https://github.com/nearai/ironclaw/pull/6378) — Trimmed `ironclaw_runner` from three feature flags to one.
- **#6377 (Merged)** — [chore(runner): remove dead libsql-secrets feature](https://github.com/nearai/ironclaw/pull/6377) — Removed the libSQL-backed secret store feature that was no longer used.
- **#6379 (Merged)** — [fix(tier-b): repair post-merge red main](https://github.com/nearai/ironclaw/pull/6379) — Fixed two CI workflows that referenced deleted packages after #6375 merged.
- **Multiple dependency bumps** merged: #6288, #6186, #6381—bumping tokio, futures, agent-client-protocol, serde, rustls, and dozens of other crates across the ecosystem.

**Features advanced today:**
- Deployment configuration (`DeploymentConfig`) adoption proceeding via PRs #6387 and #6388, shrinking the deployment-mode branching ratchet from 5 entries toward the target of 1
- Security policy consolidation into a single `authorize()` function (PR #6386) as the §5.3.2/§9 security milestone
- Streaming retry resilience coverage (PR #6376) adding programmable Python mock LLM faults

## 4. Community Hot Topics

The most active discussions are clustered around architectural gaps left by the Reborn migration and bug-bash findings:

- **#6274** (4 comments) — [Finish DeploymentConfig as the main composition config](https://github.com/nearai/ironclaw/issues/6274) — The central architectural issue driving many of today's refactors. Discusses how to complete §4.4/§5.6/§5.11 of the architecture simplification doc.
- **#6190** (4 comments) — [Multiple conflicting error messages displayed for a single failed request](https://github.com/nearai/ironclaw/issues/6190) — A bug-bash P2 finding that both a streaming error and model context limit error show simultaneously, obscuring root cause.
- **#6189** (4 comments) — [Retryable stream error leaves completed response in failed state](https://github.com/nearai/ironclaw/issues/6189) — A completed response shown with a false error banner saying "Replay unavailable."
- **#6369** (3 comments) — [Tier B follow-up: gaps left by v1 (src/) retirement](https://github.com/nearai/ironclaw/issues/6369) — Tracking capabilities lost with the v1 deletion that need Reborn replacements.

**Underlying needs:** The thread shows the community is actively testing the Reborn transition under real workloads and filing precise regressions. The clustering of streaming error issues (#6190, #6189, #6352) suggests the streaming infrastructure is a particularly rough edge post-migration. There is also clear interest in the Reborn extension install flow (#6320) and in-chat command coverage (#6384).

## 5. Bugs & Stability

A significant wave of bug-bash findings was filed today, mostly by external contributor joe-rlo. Severity breakdown:

### P1 (Critical)
- **#6360** — [Provider onboarding has no way to navigate back](https://github.com/nearai/ironclaw/issues/6360) — Once CLI prompts for API key, user cannot switch providers without cancelling entirely.
- **#6348** — [Gmail extension re-authorized without user consent after reinstall](https://github.com/nearai/ironclaw/issues/6348) — No OAuth prompt on reinstall; access is immediately granted. **Security concern.**

### P2 (High)
- **#6350** — [Assistant unexpectedly switches response language](https://github.com/nearai/ironclaw/issues/6350) — English prompt generated Ukrainian response. Likely model/system prompt issue.
- **#6351** — [Run fails with checkpoint unavailable/unreachable errors](https://github.com/nearai/ironclaw/issues/6351) — Multi-tool requests fail with temporary-unavailability errors.
- **#6353** — [Long assistant messages are truncated without expansion option](https://github.com/nearai/ironclaw/issues/6353) — Content simply ends with no "expand" affordance.
- **#6352** — [Streamed response replays in a loop after returning to page](https://github.com/nearai/ironclaw/issues/6352) — Stream chunks loop indefinitely; likely reconnection logic bug.
- **#6349** — [Telegram chat history rendered inconsistently in WebUI](https://github.com/nearai/ironclaw/issues/6349) — Fragmented layout, duplicated prompts, misplaced responses.
- **#6362** — [Duplicate "Test connection" and "Fetch models" flows](https://github.com/nearai/ironclaw/issues/6362) — UX confusion from redundant validation buttons.
- **#6359** — [Reborn trace test reads real $HOME state, fails locally](https://github.com/nearai/ironclaw/issues/6359) — Tests pass in CI but fail for developers with existing config.

### Closed bugs
- **#6178 (Closed)** — Automation error banner cannot be dismissed — fix appears to have landed.
- **#6179 (Closed)** — Settings import reports success when nothing was imported — fix appears to have landed.
- **#6335 (Closed)** — Host-authored capability remediation silently placeholder'd — fix appears to have landed.

**Fix PRs in progress:** No fix PRs are directly linked to these bugs yet, though PR #6376 (streaming retry resilience) may address the streaming error class. The bug-bash issues appear to be primarily triage and reproduction reports awaiting assignment.

## 6. Feature Requests & Roadmap Signals

Several enhancement-tagged issues signal near-term roadmap priorities:

- **#6320** — [IronHub extension install flow for Reborn](https://github.com/nearai/ironclaw/issues/6320) — Users discovering/installing/configuring extensions through Reborn surfaces. **Likely next version** given the Reborn migration completion.
- **#6325** — [Thread-scoped MCP sessions and programmatic MCP config](https://github.com/nearai/ironclaw/issues/6325) — Scoping MCP correctly to thread/run/product context. **Likely next version** as MCP is critical for agent delegation.
- **#6324** — [WebUI workspace redesign and chat-first onboarding](https://github.com/nearai/ironclaw/issues/6324) — Aligning first-screen experience with Reborn product model.
- **#6384** — [Prioritized backlog for in-chat command coverage](https://github.com/nearai/ironclaw/issues/6384) — Survey of commands Reborn is missing vs v1 legacy.
- **#2277** — [ACP-backed child thread backends for delegated external agents](https://github.com/nearai/ironclaw/issues/2277) — Long-standing (April 2026) feature request to delegate to Codex, Droid, OpenCode. Still active with 1 👍 and recent update.

**Prediction:** The IronHub extension install flow (#6320) and in-chat command coverage (#6384) are most likely for the next version, as the architecture simplification doc explicitly drives toward feature parity replacement of v1 functionality.

## 7. User Feedback Summary

Real user pain points evident from this week's data:

- **Confusing error handling:** Multiple users report being unable to tell whether a request actually failed or succeeded because of inconsistent/double error banners (#6190, #6189, #6178). This erodes trust in the system.
- **Language switching:** The assistant generating responses in an unexpected language (#6350) is a significant usability problem for users who write in English.
- **Checkpoint reliability:** Users hitting "temporarily unavailable" errors on multi-tool requests (#6351) suggests the checkpoint infrastructure may not be robust enough for production.
- **Streaming stability:** The stream looping bug (#6352) and truncated responses (#6353) are core UX issues for an AI chat product—users expect deterministic streaming.
- **Cross-platform inconsistency:** Telegram vs WebUI chat rendering (#6349) shows the multi-channel model still has integration gaps.
- **Provider onboarding friction:** Users cannot navigate back during CLI provider onboarding (#6360), an obvious UX failure that blocks first-time setup.
- **Privacy/security concern:** The Gmail extension re-authorization bug (#6348) would be alarming for any user concerned about consent—reinstalling an extension should always re-prompt.
- **Workspace navigation issues:** Multiple accessibility and UX complaints (#6334, #6332, #6333, #6330, #6331) about tree navigation, viewport jumping, stale admin data, and flickering dropdowns.

**Overall sentiment:** The user experience is clearly regressing during the Reborn transition. The architectural cleanup (deleting v1, unifying deployment config, consolidating security) is necessary technical debt work, but users are feeling the rough edges in streaming, error handling, and cross-platform consistency. The bug-bash program is effectively capturing these issues.

## 8. Backlog Watch

Issues and PRs that may need maintainer attention:

- **#2277 (2 comments)** — [ACP-backed child thread backends for delegated external agents](https://github.com/nearai/ironclaw/issues/2277) — Filed April 2026, last updated July 20. This is a significant feature (Codex/Droid/OpenCode delegation) that has been open for over 3 months with only 2 comments. Despite being labeled `scope: agent` and having 1 👍, it appears stuck.
- **#5598 (Open)** — [chore: release](https://github.com/nearai/ironclaw/pull/5598) — The release PR has been open since July 3 (18 days) and has not merged. It includes breaking API changes in `ironclaw_common` and `ironclaw_skills`. The presence of PR #6383 (release fix for 1.0.0-rc.1) suggests the release process is blocked.
- **#5664 (Open)** — [chore(deps): bump the actions group](https://github.com/nearai/ironclaw/pull/5664) — A dependency bump PR open since July 5 (16 days) with 16 action updates including major version bumps (actions/checkout 4→7). Stale dependency updates can accumulate security risk.
- **#6329 (0 comments)** — [Decompose extension_lifecycle.rs (8,789 lines)](https://github.com/nearai/ironclaw/issues/6329) — Filed yesterday, zero comments. This file is 8,789 lines—nearly 3× the project's own 3,000-line budget. Urgent maintainability concern.

**Note:** The release process appears to be in a state of flux—the first `v1.0.0-rc.1` tag push failed, and PR #6383 targets a detached release-fix branch deliberately based on a commit before the v1-deletion refactors. This suggests the team is making a judgment call about what to include in the RC. The release PR #5598 may need to be reconciled with this new release branch strategy.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-21**.

---

# LobsterAI Project Digest: 2026-07-21

## 1. Today's Overview
The project saw a high volume of merge activity today, with **10 PRs merged/closed** against **5 still open**, despite no new releases or new Issues. This indicates a strong push to stabilize the codebase and advance specific feature tracks. The development focus was heavily on the **Cowork collaboration suite**, the **built-in browser**, and **Windows distribution/update infrastructure**. While the open PR queue is low, three legacy dependency bump PRs remain stale, indicating a potential maintenance backlog.

## 2. Releases
**None.** No new versions were tagged or released in the last 24 hours.

## 3. Project Progress
The following enhancements and fixes were merged/closed today, indicating significant progress in several areas:

- **Cowork (Collaboration Suite):**
    - **Feat:** Support for multi-note attachments within the built-in browser ([#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) - *liugang519*). This adds a new browser annotation protocol, screenshot asset storage, and structured annotation context in message metadata.
    - **Fix:** Prevention of scroll jumps during session refresh ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) - *liuzhq1986*).
    - **Fix:** Prevention of periodic IM message flicker ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) - *liuzhq1986*).
    - **Fix:** Stabilized layout of the artifact preview panel and input area ([#2359](https://github.com/netease-youdao/LobsterAI/pull/2359) - *liugang519*).
- **AI Skins:**
    - **Feat:** Improved the AI skin creation flow, adding a persistent entry in Appearance settings and first-use onboarding ([#2361](https://github.com/netease-youdao/LobsterAI/pull/2361) - *btc69m979y-dotcom*).
- **OpenClaw (Config System):**
    - **Fix:** Delivered config hot-reload via RPC ack instead of file watching ([#2365](https://github.com/netease-youdao/LobsterAI/pull/2365) - *fisherdaddy*).
- **Build/Infrastructure:**
    - **Fix:** Added explicit channel entry points for Windows distribution builds to prevent env-var leaks ([#2367](https://github.com/netease-youdao/LobsterAI/pull/2367) - *fisherdaddy*).
    - **Fix:** Fixed a UI bug in the Cron scheduler ([#2362](https://github.com/netease-youdao/LobsterAI/pull/2362) - *fisherdaddy*).
- **Login & Auth:**
    - **Fix:** Preserved local callback server across login retries to prevent failures on repeated attempts ([#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) - *liuzhq1986*).

## 4. Community Hot Topics
No new Issues were created today, and total comment/reaction activity on existing items was negligible.

- **Active Open PRs:** The most active open PR is **#2368** (*fisherdaddy*), which adds silent Windows updates. This is immediately followed by the three stale dependency upgrade PRs (**#1277**, **#1282**, **#1283**) which are critical for core framework versions (Electron, React, Headless UI).
    - *Underlying Need:* There is a clear tension between shipping new features (like silent updates) and the long-deferred need to update the core framework stack from Electron 40 to 43 and React 18 to 19.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported as new Issues today. However, several existing stability concerns were addressed via the PRs listed above:

- **Medium (Fixed):** Cowork session scroll jumping and IM message flicker (PRs #2364, #2363).
- **Medium (Fixed):** Artifact preview panel layout instability (PR #2359).
- **Low (Fixed):** Cron UI display bug (PR #2362).
- **Low (Fixed):** Auth callback failure on repeated login attempts (PR #2360).

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the PR activity provides strong signals for the upcoming roadmap:

- **Next Version Candidates:**
    - **Silent Windows Updates:** PR #2368 is currently open and directly precedes the release cycle. It is highly likely to be included in the next Windows build.
    - **Multi-Annotation Browser:** PR #2366 was just merged. This is a major new capability for the browser/cowork integration and will likely be a headline feature in the next release.
    - **AI Skin Designer:** The UI flow for AI skin creation was improved (PR #2361), suggesting this feature is being polished for a wider rollout.

## 7. User Feedback Summary
No direct user feedback (comments, reactions, or new Issues) was captured today. The team appears to be in a "deep work" phase, merging internal fixes and features rather than responding to external input.

## 8. Backlog Watch
The most significant backlog items are the **three stale dependency bump PRs** opened on **April 2, 2026**:

- **PR #1277**: Bumps Electron from **40.2.1** to **43.1.1** (and electron-builder). This is a major version leap with potential for breaking changes, which may explain the hesitation.
- **PR #1282**: Bumps `@headlessui/react` from **1.7.19** to **2.2.9** (likely breaking).
- **PR #1283**: Bumps `react` from **18.3.1** to **19.2.4**.

These have been open for over 3 months and require maintainer attention to review and merge, or else the project will continue to fall behind on critical security and performance patches.

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

Here is your CoPaw project digest for **2026-07-21**.

---

## CoPaw Project Digest: 2026-07-21

### 1. Today's Overview
The project is in a period of **high-intensity development and stabilization**. Activity is extremely high, with **40 PRs** and **24 Issues** updated in the last 24 hours, indicating a mature project managing a significant feature pipeline alongside a substantial bug backlog. While no new releases were published today, the focus is clearly on preparing the next patch (suggested by commits targeting a `2.0.1b1` baseline), with heavy work on the **Agent reasoning layer**, **browser automation unification**, and a new **PawApp plugin ecosystem (QwenPaw Creator)**. Community engagement is robust, but the volume of recurring bugs (tool call repetition, infinite loops) suggests a need for structural improvements in the agent core.

### 2. Releases
**None.** No new releases were published on this date.

### 3. Project Progress
Nine PRs were merged or closed today, reflecting steady cleanup and feature finalization. Key highlights include:

- **Agent Configuration Replication (New Feature):** PR [#6262](https://github.com/agentscope-ai/CoPaw/pull/6262) adds a one-click "Copy Agent" config feature, allowing users to duplicate an agent's configuration files via the settings page.
- **Browser Extension & Infrastructure (Merged/Closed):** PR [#6150](https://github.com/agentscope-ai/CoPaw/pull/6150) (PawApp SDK + Kanban App) was closed, paving the way for the larger "unified browser" PRs (#6276, #6157) which remain open and under active review.
- **Observability Stability:** PR [#5922](https://github.com/agentscope-ai/CoPaw/pull/5922) was merged, fixing Langfuse trace ID formatting (removing dashes) and correctly propagating user/session metadata.
- **Memory & Indexing (Stability):** PR [#6235](https://github.com/agentscope-ai/CoPaw/pull/6235) refactored the ReMe Light memory index maintenance from an automatic startup task to an explicit manual operation, improving system resilience.

### 4. Community Hot Topics
The community is deeply engaged in two major areas: **Agent reasoning correctness** and **Desktop UI organization**.

- **#6257 [Open] - Multiple tool calls produce identical thinking output:**
    [Link](https://github.com/agentscope-ai/CoPaw/issues/6257) (13 comments)
    This high-engagement bug describes agents repeating the same "thinking" text across multiple tool calls in a single turn. This is a **critical UX issue** that wastes tokens and confuses users. PR [#6280](https://github.com/agentscope-ai/CoPaw/pull/6280) directly addresses this by fixing the shared formatter wrapper that was duplicating the first `ThinkingBlock`.

- **#5961 [Closed] - v2.0.0 Loop Execution Bug (Repeated Write/Delete):**
    [Link](https://github.com/agentscope-ai/CoPaw/issues/5961) (8 comments)
    This specific issue was resolved, but the underlying theme of agents getting stuck in loops persists with multiple open tickets (e.g., #6241, #4873). The community is deeply concerned with agent stability and determinism.

- **#6241 [Open] - Agent Repeated Output & `memory_search` Infinite Loop:**
    [Link](https://github.com/agentscope-ai/CoPaw/issues/6241) (2 comments)
    A variant of the loop problem, this issue specifically highlights a missing "repetition detection mechanism" in the framework, suggesting the existing warning is insufficient.

### 5. Bugs & Stability
The project is experiencing a significant number of bugs, primarily in the **agent execution core**.

- **Critical:** **Agent Reasoning Corruption.** Issues #6257, #6241, #6282, and #5961 all describe scenarios where the agent's reasoning process breaks down—either through duplicated thinking, infinite loops, or incorrect output. **Fix PRs exist:** PR [#6280](https://github.com/agentscope-ai/CoPaw/pull/6280) targets the duplicate thinking bug.
- **High:** **Windows Desktop Startup Hang (nvidia-smi).** Issue [#6197](https://github.com/agentscope-ai/CoPaw/issues/6197) reports that the frozen binary hangs on startup if the `nvidia-smi` process hangs. A fix PR [#6203](https://github.com/agentscope-ai/CoPaw/pull/6203) adds timeouts to Windows liveness probes.
- **High:** **Langfuse Integration Regression.** Issue [#6277](https://github.com/agentscope-ai/CoPaw/issues/6277) (and the related PR) fixes a regression where trace IDs with dashes were rejected by the Langfuse API, breaking observability.
- **Medium:** **File Name Too Long (Crash).** Issue [#6246](https://github.com/agentscope-ai/CoPaw/issues/6246) describes a crash (`OSError`) when a tool output matches a specific regex pattern, causing a file creation failure. A fix was closed/merged in #6246 itself.
- **Medium:** **Console Embedding Dimensions Bug.** Issue [#6242](https://github.com/agentscope-ai/CoPaw/issues/6242) reveals a configuration oversight where the `use_dimensions` setting is not exposed to the user, even though the UI asks for dimensions. This is a functional data integrity bug for memory features.

### 6. Feature Requests & Roadmap Signals
Several features requested this period point to future priorities for usability and extensibility.

- **High Likelihood (Next Version):** **Customizable Tool Descriptions.** Issue [#6286](https://github.com/agentscope-ai/CoPaw/issues/6286) requests disabling or customizing built-in tool descriptions to save tokens (8-10k per request). This is a high-impact optimization likely to be prioritized.
- **High Likelihood (Next Version):** **AIOnly Provider Support.** Issue [#6268](https://github.com/agentscope-ai/CoPaw/issues/6268) and PR [#6271](https://github.com/agentscope-ai/CoPaw/pull/6271) seek to add a new model provider aggregating 190+ models. Given the PR is already open and under review, this integration is likely imminent.
- **Medium Likelihood:** **Session Grouping / Folder Support.** Issues [#6289](https://github.com/agentscope-ai/CoPaw/issues/6289) and [#6287](https://github.com/agentscope-ai/CoPaw/issues/6287) independently request custom session grouping in the Desktop Console. Community demand is clear for better history management.
- **Medium Likelihood:** **Human-in-the-Loop (HITL) Tool.** Issue [#6274](https://github.com/agentscope-ai/CoPaw/issues/6274) suggests a new `ask_user_question` tool for safer agent execution. This aligns with enterprise-grade agent goals.
- **Low Likelihood:** **Mobile Web Console.** Issue [#6281](https://github.com/agentscope-ai/CoPaw/issues/6281) requests mobile support, which represents a major front-end re-architecture.

### 7. User Feedback Summary
User feedback is polarized between appreciation for rapid feature development and frustration with agent instability.

- **Pain Points:**
    - **Agent Loops & Repetition:** Users are frustrated by agents getting stuck in write/delete loops (#5961 or [Closed]) and repeating the same output (#6241, #6257). This is seen as a critical blocker for autonomous tasks.
    - **Token Wastage:** Advanced users are acutely aware of token consumption, requesting the ability to control tool descriptions (#6286) and pointing out wasted "thinking" tokens (#6257).
    - **Desktop UI Rigidity:** The lack of session grouping (#6287, #6289) and the inability to hide or reorder the default agent (#6289) are common UI frustrations.
- **Use Cases:**
    - Users are actively building complex workflows involving **multiple sub-agents** (#4873) and leveraging the **ReMe memory system** (#6222), indicating advanced adoption beyond simple chat.
    - There is significant interest in **agent configuration management**, with the one-click copy feature (#6262) being a direct response to this need.

### 8. Backlog Watch
These items require maintainer attention to prevent user confusion or abandonment.

- **#5688 [Open] - CSS Prefix Mismatch (`ant-` vs `qwenpaw-`):**
    [Link](https://github.com/agentscope-ai/CoPaw/issues/5688) (2 comments, last updated 2026-07-20)
    A long-standing UI issue (since July 1st) where CSS selectors clash. While minor, it indicates UI inconsistency that could break custom themes or third-party plugins.

- **#4873 [Open] - Sub-agent Polling & Feishu Interruption Bug:**
    [Link](https://github.com/agentscope-ai/CoPaw/issues/4873) (5 comments, last updated 2026-07-20)
    A critical bug from June 1st involving infinite polling with dual sub-agents, with a specific note that interruption does not work from the Feishu channel. This requires maintainer resolution to ensure the channel integration is reliable.

- **#6288 [Open] - All Local Model Downloads Fail:**
    [Link](https://github.com/agentscope-ai/CoPaw/issues/6288) (1 comment)
    A critical blocker for users relying on local models. The bug reporter notes zero downloads succeed in the UI. A fix PR ([#6290](https://github.com/agentscope-ai/CoPaw/pull/6290)) has been submitted, which is an excellent response time, but the issue itself should be prioritized as a P0.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — July 21, 2026

## Today's Overview
ZeroClaw is in a period of intense development activity, with **39 issues** and **50 pull requests** updated in the last 24 hours, signaling a highly engaged team and community. The project is actively pushing toward the **v0.9.0 release** with major work underway on the **SOP (Standard Operating Procedure) control plane**, **persistent memory subsystem**, and **security hardening**. However, the volume of open PRs (40) relative to merges (10) suggests a significant review bottleneck, and several **S1 (workflow-blocked)** bugs have been filed in the last 24 hours, indicating a period where stability is being stress-tested. No new releases were cut today, but the pipeline is heavy with feature work targeting milestones for 0.9.0.

## Releases
No new releases were published today. The project is operating between v0.8.3 and the upcoming v0.9.0 milestone.

## Project Progress
**10 PRs were merged or closed** in the last 24 hours. Notable advances include:

- **SOP infrastructure**: PR #8848 (feat: release the exec slot on HITL approval and enforce per-SOP admission policy) advances the SOP milestone tracker (#8288), adding admission policies (`Parallel` / `Hold` / `Coalesce` / `Drop`) and fixing a concurrency slot leak during human-in-the-loop approval.
- **Memory subsystem**: PR #8897 (feat: add an opt-in retrieval cache decorator over agent memory) and PR #8900 (feat: typed memory classification and gated typed-facts extraction) continue the persistent memory parity tracker (#8891), adding retrieval caching and memory-type classification.
- **Security fixes**: PR #8713 (fix: add `allowed_private_hosts` opt-in to `file_download` SSRF gate) closes a security audit finding from July 3.
- **Bug fixes closed**: Issues #9117 (ZeroCode won't start on Windows without `ZEROCLAW_SOCKET`), #8837 (history trimming occurs silently with pruning disabled), #9078 (serial transport desynchronization), and #8675 (malformed tool-call arguments sent to OpenAI-format providers) were resolved.

## Community Hot Topics
The following issues and PRs are generating the most community discussion and engagement:

1. **[RFC: Work Lanes, Board Automation, and Label Cleanup](#6808)** — *14 comments, by Audacity88*
   - A governance RFC proposing workflow automation for issue routing, board labeling, and label cleanup. Accepted and in rollout. This reflects the project's growing need for maintainer tooling as contributor volume increases.
   - 📎 [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)

2. **[Bug: 74 test failures on Windows](#7462)** — *10 comments, by NiuBlibing*
   - CI only runs on Linux, leaving a massive gap for Windows users. Highlights a critical platform parity gap that is blocking Windows adoption.
   - 📎 [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)

3. **[Feature: A2A Protocol Support](#3566)** — *9 comments, 7 👍 reactions, by 5queezer*
   - Long-standing feature request for Agent-to-Agent protocol support. High community interest (most upvoted in the last 24h). Being tracked as part of the v0.9.0 auth/security/gateway tracker (#7432).
   - 📎 [Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)

4. **[Tracker: Persistent Memory Parity](#8891)** — *6 comments, by Nillth*
   - Coordinates 18 open items (3 issues, 15 PRs) for bringing cross-session memory to parity with peers. This is the single largest ongoing effort visible in the data.
   - 📎 [Issue #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)

5. **[Feature: Agent Evaluation Harness](#7065)** — *4 comments, by mn13*
   - Request for `zeroclaw eval` with replay and live modes. Spawned three follow-up issues today (#9226, #9227, #9228) for dashboard, calibration, and memory seeding, indicating this feature is being actively scoped for an upcoming milestone.
   - 📎 [Issue #7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)

**Underlying needs**: The community is demanding cross-platform parity (Windows CI), agent interoperability (A2A), and production-grade evaluation tooling. The RFC and tracker discussions reveal a project scaling beyond its current governance and CI infrastructure.

## Bugs & Stability
**13 bugs were reported or updated in the last 24 hours.** Ranked by severity:

**S0 – Data Loss / Security Risk:**
- **[Cron job resolves workspace_dir to `/`](#9206)** — Intermittently, cron jobs execute with the workspace set to root, creating a severe data-loss and security risk. No fix PR yet.
  - 📎 [Issue #9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206)

**S1 – Workflow Blocked:**
- **[Landlock sandbox locks zeroclock itself](#9204)** — The Landlock sandbox backend locks the daemon process, breaking SQLite access and other operations. No fix PR.
  - 📎 [Issue #9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204)
- **[web_fetch returns garbage for compressed responses](#9207)** — Gzip/brotli/deflate responses are not decompressed, breaking tool output. No fix PR.
  - 📎 [Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207)
- **[shared_budget TOCTOU can wrap AtomicUsize; SopEngine::finish_run unwrap panics](#9192)** — Two runtime robustness holes: a concurrent-budget race condition and a panic under mutex. No fix PR.
  - 📎 [Issue #9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192)
- **[Comment-hygiene gate fails on master](#9216)** — CI lint gate broken on master due to stale issue references in comments. Blocking all merges. Fix PR #9230 was opened today.
  - 📎 [Issue #9216](https://github.com/zeroclaw-labs/zeroclaw/issues/9216)

**S2 – Degraded Behavior:**
- **[ZeroCode Copy includes Markdown fences](#8664)** — Copy button on code blocks copies backticks, breaking usability. *(Closed today)*
- **[ZeroCode completes Code turn with no visible output](#8644)** — Session output disappears despite successful runtime finish. *(Closed today)*
- **[History trimming occurs silently with pruning disabled](#8837)** — Agent loses context mid-session without explanation. *(Closed today)*
- **[Serial transport desynchronized after non-matching response ID](#9078)** — Hardware peripheral driver fails to drain buffer. *(Closed today)*

**S3 – Minor Issue:**
- **[`zeroclaw desktop` uses dead download URL and does not detect AppImage](#9202)** — Installation detection broken on Linux.
  - 📎 [Issue #9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202)
- **[Discord typing indicator stuck after daemon reload](#9198)** — UI artifact but potentially confusing for users.
  - 📎 [Issue #9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198)

**Key observation**: The S1 bugs filed today cluster around **sandboxing** (#9204), **tool output quality** (#9207), and **concurrency safety** (#9192)—all areas where the project is adding new capabilities (landlock support, web tools, SOP pipelines). This is expectable churn from active development but requires swift attention.

## Feature Requests & Roadmap Signals
**Active feature development is concentrated in three areas:**

1. **SOP (Standard Operating Procedures) Milestone** (#8288) — 13 capabilities to reach "5/5" parity. PRs #8880, #8848, #8979, #9030 are all in flight. Predict: SOP will be a headline feature in v0.9.0 or v0.8.4.

2. **Persistent Memory Parity** (#8891) — 18 open items. PRs #8897, #8900, #8984 are advancing retrieval caching, typed memory classification, and content screening. Predict: memory subsystem feature-complete by v0.9.0.

3. **Agent Evaluation Harness** (#7065) — New follow-ups today (#9226, #9227, #9228) for dashboard, calibration tooling, and memory seeding. Predict: `zeroclaw eval` may land in v0.9.0 or v0.10.0 given its scoping complexity.

**Other notable signals:**
- **OpenAI Chat Completions Endpoint** PR #8486 — Would enable compatibility with LangChain, Continue.dev, Aider. Long-requested (related #8550, #6850). Likely v0.9.0.
- **A2A Protocol** (#3566) — Tracked in v0.9.0 milestone. The most upvoted issue in the last 24h. High likelihood of inclusion.
- **Skill Install Security** PR #9084 — Adding supply-chain gating for third-party skills. Indicates the ClawHub ecosystem is nearing public readiness.

## User Feedback Summary
Real pain points expressed by users and community members:

- **Windows parity is a blocker**: User *NiuBlibing* filed #7462 detailing 74 test failures on Windows 11. CI is Linux-only. Several users report ZeroCode won't start without manual environment variable setup (#9117, closed). The Windows experience is clearly an afterthought.
- **History/context loss frustrates users**: User *susyabashti* in #8837 describes an agent that "suddenly loses its context without explanation" and starts doing "something else completely." The silent trimming is confusing and undermines trust.
- **Tool output failures block workflows**: User *jhugard* in #9207 reports `web_fetch` returning "garbage binary data" for gzip-compressed sites. This is a basic capability that agents rely on.
- **Installation friction on Linux**: User *ax-fe* in #9202 reports that the `zeroclaw desktop` command fails to detect an installed AppImage and points to a potentially dead download URL.
- **Sandboxing breaks core functionality**: User *perillamint* in #9204 (referencing prior #5153) notes that Landlock sandboxing locks zeroclaw itself, breaking SQLite and other local access.

**Satisfaction signals**: The high number of contributions (50 PRs, 39 issues updated) and the detailed RFC with community acceptance (#6808) indicate a healthy, engaged contributor base that trusts the governance process.

## Backlog Watch
Issues and PRs needing maintainer attention due to age or inactivity:

1. **[SOP HTTP fan-in not wired](#6685)** — Created May 15, 2026 (67 days old). Promised in documentation but never implemented. `status:in-progress` but no recent movement. Risk of documentation being misleading.
   - 📎 [Issue #6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685)

2. **[A2A Protocol Support](#3566)** — Created March 15, 2026 (128 days old). 7 upvotes, 9 comments. Status is `accepted` but no assigned milestone or in-progress label. Community interest is high; this may be waiting on v0.9.0 gateway work.
   - 📎 [Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)

3. **[Windows CI Test Failures](#7462)** — Created June 10, 2026 (41 days old). 10 comments. Status is `accepted` with `priority:p1`, but no associated fix PR. The number of failures (74) suggests this is a substantial undertaking.
   - 📎 [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)

4. **[PR: fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate](#8713)** — Created July 4 (17 days ago). Marked `needs-author-action`. This is a security fix from an internal audit — if it stalls, the SSRF vulnerability remains open.
   - 📎 [PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)

5. **[PR: fix(providers): make model vision capability configurable](#9099)** — Created July 16 (5 days ago). Marked `needs-author-action`. Fixes a text-only model crash. Important for provider compatibility.
   - 📎 [PR #9099](https://github.com/zeroclaw-labs/zeroclaw/pull/9099)

---

**Project Health Summary**: ZeroClaw is **under active, high-velocity development** with a clear roadmap toward v0.9.0, focused on SOP automation, persistent memory, and security. The project is experiencing **growing pains**—Windows parity, CI bottlenecks (PRs outpace merges 4:1), and the emergence of S1 bugs from new feature churn. The governance RFC (#6808) suggests the maintainers are aware they need better tooling to manage this scale. The backlog contains several long-unanswered, high-priority items that risk user frustration if not addressed in the next release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*