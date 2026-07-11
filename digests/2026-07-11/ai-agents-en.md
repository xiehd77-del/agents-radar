# OpenClaw Ecosystem Digest 2026-07-11

> Issues: 433 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-11 02:47 UTC

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

Here is the OpenClaw project digest for **2026-07-11**.

---

## OpenClaw Project Digest
**Date:** 2026-07-11

### 1. Today's Overview
Activity remains **high**, with 433 Issues and 500 PRs updated in the last 24 hours. The project shows a healthy mix of bug fixes and feature development, though the number of open issues (244) slightly outweighs merged/closed PRs (179). No new releases were published today, indicating the team is likely in a stabilization phase between version tags. Key areas of focus include session-state integrity, memory management, and cross-platform delivery reliability.

### 2. Releases
**None.** No new releases were published today.

### 3. Project Progress
**Merged/Closed PRs Today:** 179
Significant progress was made across several fronts:
- **Platform Stability (Android):** PR [#103862](https://github.com/openclaw/openclaw/pull/103862) fixes Android's automatic resending of commands after ambiguous sends, requiring explicit user retry instead.
- **Telegram UX:** PR [#97828](https://github.com/openclaw/openclaw/pull/97828) fixes a bug where reasoning previews would remain visible indefinitely after a new message rotation (`forceNewMessage()`).
- **Agent Recovery:** A fix for session worktree leasing (PR [#103263](https://github.com/openclaw/openclaw/pull/103263)) prevents in-flight workspace files from being garbage-collected during resumed runs.
- **Agent Diagnostics:** A PR for silently swallowed context engine failures ([#103904](https://github.com/openclaw/openclaw/pull/103904)) ensures operators receive diagnostic signals when the context engine fails.
- **Infrastructure:** A fix for Web Push broadcasts ([#103607](https://github.com/openclaw/openclaw/pull/103607)) prevents outbound request spikes during broadcasts.

### 4. Community Hot Topics
The most active discussions this week revolve around **session state, security boundaries, and memory leaks**:
- **Prompt Cache Issues:** Issue [#102175](https://github.com/openclaw/openclaw/issues/102175) (16 comments, P2) describes how embedded prompt caches break across various session boundaries, a regression impacting long-lived agents.
- **Memory Leak Crisis:** Issue [#91588](https://github.com/openclaw/openclaw/issues/91588) (15 comments, P0) details a severe memory leak in the gateway that grows from 350MB to 15.5GB before crashing.
- **Security & Secrets:** The long-running feature request for "Masked Secrets" ([#10659](https://github.com/openclaw/openclaw/issues/10659), 15 comments, P1) continues to be a top community demand, driven by concerns over prompt injection and credential leaks.
- **WhatsApp Stalls:** Issue [#84569](https://github.com/openclaw/openclaw/issues/84569) (10 comments, P1) reports that WhatsApp sessions stall on long model calls, leaving messages undelivered.
- **Multi-Turn Webhooks:** Issue [#11665](https://github.com/openclaw/openclaw/issues/11665) highlights that multi-turn conversations via webhooks are broken because a new session is always generated instead of reusing an existing `sessionKey`.

### 5. Bugs & Stability
**Severity P0/Critical:**
- **Gateway Memory Leak (OOM):** Issue [#91588](https://github.com/openclaw/openclaw/issues/91588) remains the top stability concern. RSS grows to 15.5GB, forcing OS-level OOM kills. No specific fix PR linked today.
- **Hosted Model Selector:** Issue [#101763](https://github.com/openclaw/openclaw/issues/101763) (P0) reports that the model selector on `usemolty.com` fails to persist, sending invalid model IDs to the API.

**Severity P1/High:**
- **Worktree Lease Loss:** Fixed in PR [#103263](https://github.com/openclaw/openclaw/pull/103263). Addresses a mid-run worktree deletion that destroys in-flight workspace files.
- **Codex App-Server Retries:** Issue [#83959](https://github.com/openclaw/openclaw/issues/83959) describes retry exhaustion before a replacement server is ready, leading to silent failures.
- **Broadcast Spike:** Fixed in PR [#103607](https://github.com/openclaw/openclaw/pull/103607) — prevents request spikes during Web Push broadcasts.
- **Codex Usage Limit:** PR [#103868](https://github.com/openclaw/openclaw/pull/103868) addresses a bug where Codex-backed turns hit usage limits but fail to trigger a model fallback.

### 6. Feature Requests & Roadmap Signals
High-demand features trending toward implementation include:
- **Execution Approval Deny-List:** PR [#101276](https://github.com/openclaw/openclaw/pull/101276) is a significant, nearly-ready PR adding a deny-list for exec approvals, complementing the existing allow-list. Likely for the next minor release.
- **Supervising Codex Sessions:** PR [#104045](https://github.com/openclaw/openclaw/pull/104045) (XL size) enables users to open, continue, and manage native Codex sessions from the gateway, bridging a major UX gap.
- **Durable Offline Chat (Android):** PR [#104089](https://github.com/openclaw/openclaw/pull/104089) (XL) adds a durable outbox for Android, preventing message loss/loss during process death and network reconnection.
- **Native Announce Targets:** PR [#101248](https://github.com/openclaw/openclaw/pull/101248) allows subagent completions to be routed back to the parent session instead of the channel, a core need for orchestrator patterns.
- **Portable Table Blocks:** PR [#103583](https://github.com/openclaw/openclaw/pull/103583) adds first-class support for structured tabular results across all channels and the CLI.

### 7. User Feedback Summary
- **Pain Points:**
    - **Memory Leaks:** Users report severe OOM crashes on both macOS and desktop, noting that cron jobs and background tasks fail silently under memory pressure ([#87109](https://github.com/openclaw/openclaw/issues/87109)).
    - **Silent Failures:** A common theme is agents failing without diagnostic signals, such as context engine failures ([#913904](https://github.com/openclaw/openclaw/pull/913904)) and long WhatsApp model calls ([#84569](https://github.com/openclaw/openclaw/issues/84569)).
    - **Billing & Cooldown:** Persistent file-based provider cooldowns block users for hours even after they top up credit, causing frustration ([#70903](https://github.com/openclaw/openclaw/issues/70903)).
- **Satisfaction & Use Cases:**
    - **Sub-agent Patterns:** Users are actively building multi-agent orchestration workflows and need better routing (announce targets) and visibility into queue status ([#9797](https://github.com/openclaw/openclaw/issues/9797)).
    - **Rich Messaging:** Users on Slack, Telegram, and Feishu are requesting richer message formats (Block Kit, configurable reasoning blocks, table rendering) to align with platform capabilities.

### 8. Backlog Watch
The following important issues remain stale or lack maintainer action:
- **Feature: Masked Secrets** ([#10659](https://github.com/openclaw/openclaw/issues/10659)) — P1, 15 comments, 4 👍. **No new fix PR.** This is a high-impact security feature that has been open since February.
- **Filesystem Sandboxing** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) — P2, 11 comments, 4 👍. **No new fix PR.** Users need granular file access controls for safety.
- **Per-Agent Memory Wiki** ([#63829](https://github.com/openclaw/openclaw/issues/63829)) — P1, 13 comments, 10 👍. **Closed.** This high-demand feature request for multi-agent isolation was unexpectedly closed today without a fix being merged.
- **Webhook Multi-Turn Support** ([#11665](https://github.com/openclaw/openclaw/issues/11665)) — P2, 11 comments. **No new fix PR.** The documented feature does not work; a linked PR exists but is still open.
- **Node-Registered Agent Tools** ([#8287](https://github.com/openclaw/openclaw/issues/8287)) — P2, 6 comments. **No new fix PR.** This enhancement for node extensibility has been gathering dust.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries for July 11, 2026.

---

## Ecosystem Overview

The open-source personal AI agent ecosystem is experiencing a phase of high-velocity maturation, characterized by a bifurcation between architectural stabilization (new releases and foundation refactors) and rapid feature iteration (model flexibility, multi-agent orchestration, and security hardening). The landscape is dominated by two major architectural families—the "Claw" lineage (OpenClaw, NanoClaw) and specialized frameworks (Hermes, IronClaw, CoPaw)—which are converging on shared requirements for context management, session-state integrity, and platform interoperability. Community feedback across projects consistently prioritizes reliability (memory leaks, silent failures, session misrouting) over new features, signaling a market that values production-grade stability for autonomous workflows. While no single project has achieved market dominance, the ecosystem as a whole is growing in sophistication, with deeply engaged power users driving requests for advanced features like per-conversation model routing and cross-session episodic memory.

---

## Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Health Score (Est.) |
|---------|----------------------|-------------------|----------------|---------------------|
| OpenClaw | 433 | 500 | 0 | High (Active dev, large community) |
| NanoBot | 42 | 42 | 0 | High (High velocity, bottleneck risk) |
| Hermes Agent | 50 | 50 | 0 | Medium (High regression fix activity) |
| PicoClaw | 3 | 18 | 0 | Medium (Focused fixes, low issue count) |
| NanoClaw | 3 | 26 | 0 | High (Major refactoring, many merges) |
| NullClaw | 2 | 0 | 0 | Low (Zero merged PRs, net-zero progress) |
| IronClaw | 36 | 50 | 0 | High (Intense stabilization, 15 merges) |
| LobsterAI | Not specified | 10 | 1 | High (New release, rapid bug fixes) |
| Moltis | 0 | 1 | 0 | Low (Quiet day, single open PR) |
| CoPaw | 43 | 45 | 3 | High (Major v2.0 release, release-day surge) |
| TinyClaw | 0 | 0 | 0 | Inactive |
| ZeptoClaw | 0 | 0 | 0 | Inactive |
| ZeroClaw | 19 | 50 | 0 | High (Intense dev sprint, 5 merged) |

**Notes:** `Health Score` is qualitative, based on PR merge rate, issue closure ratio, release cadence, and community engagement. Projects with zero activity (TinyClaw, ZeptoClaw) are effectively dormant.

---

## OpenClaw's Position

**Advantages vs. Peers:**
- **Scale:** With 433 issues and 500 PRs updated in 24h, OpenClaw operates at 10x the raw activity volume of any peer. This translates to a larger contributor base, faster bug triage, and broader ecosystem support.
- **Maturity:** OpenClaw is in a stabilization phase between version tags, addressing systemic issues (memory leaks, session-state integrity) that define production readiness. Its backlog includes high-demand features (Masked Secrets, #10659) that signal deep community trust.
- **Platform Depth:** OpenClaw has dedicated cross-platform delivery (Android durable outbox, PR [#104089]), rich messaging (Telegram, Slack, Feishu), and orchestration patterns (sub-agent routing, PR [#101248]).

**Technical Approach Differences:**
- OpenClaw emphasizes **explicit session management** with worktree leasing (PR [#103263]) and Web Push broadcast control (PR [#103607]), contrasting with Hermes Agent's concurrent but less structured session isolation.
- OpenClaw's **context engine diagnostics** (PR [#103904]) are more advanced than peers like NanoBot, which lacks analogous tooling (Issue [#4867]—cache miss adds 60s delay with no diagnostic).

**Community Size Comparison:**
- OpenClaw's community is an order of magnitude larger than any single peer (500 PRs vs. ~50 for Hermes/IronClaw). This creates a virtuous cycle of faster bug discovery and resolution, but also a higher noise-to-signal ratio in issue tracking (244 open issues).

---

## Shared Technical Focus Areas

Multiple projects are converging on the following requirements, indicating ecosystem-wide priorities:

1. **Session State & Data Integrity** (OpenClaw, Hermes Agents, IronClaw, CoPaw, ZeroClaw):  
   - *Need:* Session misrouting (Hermes #54527), worktree garbage collection (OpenClaw #103263), session isolation for A2A routes (NullClaw #974).  
   - *Value:* Reliable multi-session workflows are essential for production agent deployments.

2. **Memory & Context Optimization** (OpenClaw, NanoBot, Hermes Agent, IronClaw, CoPaw):  
   - *Need:* Prompt cache breaks across session boundaries (OpenClaw #102175), KV-cache preservation for Ollama (NanoBot #4867), two-phase context management (Hermes #513), compaction recovery (IronClaw #5895), context loss on tool-heavy turns (ZeroClaw #8654).  
   - *Value:* Reducing token waste and improving long-context reliability is the #1 performance bottleneck.

3. **Security & Authorization** (OpenClaw, NanoBot, NullClaw, IronClaw, CoPaw):  
   - *Need:* Masked secrets (OpenClaw #10659), unauthenticated `/restart` command (NanoBot #4776), A2A route authorization (NullClaw #974), MCP sub-tool allow/deny enforcement (CoPaw #5947), Slack DM misrouting (IronClaw #5943).  
   - *Value:* As agents gain autonomous capabilities, credentials and data access controls become non-negotiable.

4. **Cross-Platform Reliability** (OpenClaw, PicoClaw, Hermes Agent, LobsterAI):  
   - *Need:* Android durable outbox (OpenClaw #104089), WhatsApp WebSocket reconnection (PicoClaw #3179), Telegram channel resilience (NullClaw #972), WeCom/DingTalk group task routing (LobsterAI #2306).  
   - *Value:* Enterprise users demand reliable agent behavior across messaging platforms.

5. **Multi-Agent Orchestration** (OpenClaw, NanoBot, PicoClaw, IronClaw, LobsterAI):  
   - *Need:* Sub-agent announce targets (OpenClaw #101248), subagent model overrides (NanoBot #4623), agent collaboration bus (PicoClaw #2937), episodic memory for cross-session continuity (IronClaw #5974), delegated subagent collaboration (LobsterAI v2026.7.10 release).  
   - *Value:* Hierarchical task decomposition and memory persistence across sub-agents unlock complex autonomous workflows.

---

## Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|-------|----------|
| **Primary Focus** | Core reference platform, cross-platform delivery | Lightweight local/cloud model flexibility | Desktop UX, session routing | Production resilience, architectural refactoring | Multi-agent collaboration, enterprise IM | Plugin ecosystem, web gateway, protocol convergence |
| **Target User** | Enterprise power users, orchestration developers | Individual developers, local model enthusiasts | Power users with concurrent sessions | Production-grade agent operators | Chinese enterprise users, multi-agent workflows | DevOps/infrastructure engineers, content creators |
| **Architecture** | Monolithic with plugin channels | Modular, lightweight core | Session-centric Desktop app | Reborn runtime (v1 retirement planned) | AgentScope 2.0 foundation | Plugin-based, ACP protocol |
| **Key Strength** | Scale, maturity, orchestrator patterns | Model flexibility (per-conversation overrides) | Desktop session reliability | Data-driven resilience (benchmark gap analysis) | Enterprise IM integration, Chinese localization | Plugin ecosystem, multi-arch deployment |
| **Key Weakness** | Memory leak crisis (#91588), high backlog volume | Performance with local models (Ollama 60s delay) | High regression density post-feature releases | Benchmark gap (30% vs. 65% on SWE-bench) | v2.0 regression density, upgrade path unclear | Multiple S1 blockers (Gemini, SIGSEGV), maintainer bandwidth stretched |

---

## Community Momentum & Maturity

**Tier 1: High Momentum (Rapidly Iterating)**
- **OpenClaw, NanoClaw, IronClaw, ZeroClaw:** These projects show intense PR activity (50+ updated per day), significant architectural work (refactors, new releases, protocol consolidation), and high community engagement. They are moving from "early adopter" to "production readiness."

**Tier 2: Release-Driven Momentum**
- **CoPaw, LobsterAI:** Both shipped major releases (v2.0.0, 2026.7.10) today, triggering a surge in bug reports and rapid patch cycles. They are in a "stabilize the new foundation" phase.

**Tier 3: Stabilizing / Low Activity**
- **Hermes Agent:** High activity from regression fixing, but the project appears reactive—fixing bugs introduced by recent feature releases (Desktop Projects Paradigm). Velocity is high but primarily defensive.
- **PicoClaw, NanoBot:** Moderate activity with focused PR trains (OAuth, performance). Both have clear feature roadmaps but lower community engagement than Tier 1.

**Tier 4: Quiescent / Dormant**
- **NullClaw, Moltis, TinyClaw, ZeptoClaw:** Low to zero activity. NullClaw (2 open issues, 0 PRs) and Moltis (1 stale PR) may be at risk of stagnation. TinyClaw and ZeptoClaw show no activity and should be considered dormant until proven otherwise.

---

## Trend Signals

1. **Model Flexibility is the #1 Feature Request:** Across NanoBot (#4253, per-conversation models), PicoClaw (#3200, configurable fallback chain), and ZeroClaw (#8563, ComfyUI support), users demand the ability to dynamically route tasks to different models (cloud vs. local, cheap vs. expensive). The ecosystem is moving toward "model as a configurable resource," not a hard-coded dependency.

2. **Security is Becoming Non-Negotiable:** Multiple projects are seeing user-driven security requests (masked secrets, per-caller A2A authorization, unauthenticated commands, MCP policy enforcement). As agents gain tool access and autonomous execution, security is shifting from "nice-to-have" to "blocker for production use."

3. **Multi-Agent Orchestration is the Killer App:** OpenClaw (sub-agent announce targets), LobsterAI (delegated subagent collaboration), PicoClaw (agent collaboration bus), and IronClaw (episodic memory) all point to a convergent architecture: agents that can compose, delegate, and hand off tasks across sessions. This is the ecosystem's strongest signal for "what comes next."

4. **Context and Memory are the Bottleneck:** Cache misses, tool-heavy context explosions, session-level memory breaks, and compaction failures appear across every active project. The ecosystem is still searching for a standard solution to long-context reliability—whoever solves this gains a significant competitive advantage.

5. **Desktop/Web UI is the New Frontier:** Hermes Agent (Desktop Projects Paradigm, Kanban), CoPaw (v2.0 WebUI refresh), and ZeroClaw (web gateway, in-app upgrades) are investing in rich user interfaces. The CLI-only era is ending; users expect visual session management, approval workflows, and real-time progress indicators.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for July 11, 2026.

---

## NanoBot Project Digest – 2026-07-11

### 1. Today's Overview
The NanoBot project remains exceptionally active, with 42 pull requests updated in the last 24 hours, indicating a high-volume development cycle. While the 17 merged/closed PRs suggest strong progress, a significant portion of the 25 open PRs remain in conflict or awaiting review, signaling a potential bottleneck. The community is focused on two major themes: improving model flexibility (per-conversation, subagent, and cron model overrides) and automating agent workflows (eager memory consolidation, goal queuing, and syntax highlighting). There were no new releases today.

### 2. Releases
**None.** No new versions of NanoBot were released in the last 24 hours.

### 3. Project Progress (Merged/Closed PRs)
The following significant features and fixes were merged or closed today, reflecting a focus on code quality, user interaction, and tool reliability:

- **Code Quality & Stability:**
    - [#4876](https://github.com/HKUDS/nanobot/pull/4876) **feat(webui): guide queued prompt with second Enter** – Improves WebUI input handling.
    - [#4877](https://github.com/HKUDS/nanobot/pull/4877) **feat(webui): highlight file previews and diffs** – Adds syntax highlighting to diffs and previews.
    - [#4832](https://github.com/HKUDS/nanobot/pull/4832) **fix(cli): handle CSI-u Shift+Enter instead of dumping raw escapes** – Fixes a CLI regression related to terminal handling.
- **Feature Validation & Refactoring:**
    - [#4635](https://github.com/HKUDS/nanobot/pull/4635) **fix(tools): enforce exact edit_file line hints** – Tightens the `edit_file` tool to use line hints as a strict consistency guard, addressing a major failure mode in editing benchmarks.
    - [#4873](https://github.com/HKUDS/nanobot/pull/4873) **fix(dream): skip no-op periodic commit attempts** – Prevents empty commits from the Dream feature, a direct fix for issue [#4872](https://github.com/HKUDS/nanobot/issues/4872).
- **Conflicted/Deferred:**
    - [#4623](https://github.com/HKUDS/nanobot/pull/4623) **feat(subagent): allow spawn model override** – Closed (conflict) despite promising significant flexibility.
    - [#4622](https://github.com/HKUDS/nanobot/pull/4622) **feat(cron): support job model presets** – Closed (conflict) alongside the subagent model override, suggesting these two features share a common integration challenge.

### 4. Community Hot Topics
Most active discussions revolve around **model flexibility** and **performance bottlenecks**:

- **Model Override Requests (High Activity):**
    - [#4253](https://github.com/HKUDS/nanobot/issues/4253) *“support overriding model per conversation”* (6 comments): A detailed user story from `rombert` requesting the ability to switch between fast cloud models and private local models based on task needs.
    - [#4231](https://github.com/HKUDS/nanobot/issues/4231) *“feat: Add model parameter to spawn tool for subagent model override”* (2 comments): Complements the above, requesting model selection for sub-agents.
    - **Analysis:** The community consensus is that users require fluid control over model allocation. The fact that the related PRs ([#4623](https://github.com/HKUDS/nanobot/pull/4623), [#4622](https://github.com/HKUDS/nanobot/pull/4622)) were closed due to conflicts indicates this is a complex architectural change that maintainers are still deliberating.

- **Performance & Caching:**
    - [#4867](https://github.com/HKUDS/nanobot/issues/4867) *“Preserve exact prompt prefix to enable caching in Ollama and others”* (3 comments): User `The-Markitecht` reports a severe performance regression where NanoBot adds 60 seconds to every turn with Ollama, making it "totally unusable." The solution involves preserving prompt prefixes for KV-cache hit rates.

### 5. Bugs & Stability
Several stability issues were reported or addressed today, ranked by severity:

- **High Severity:**
    - **[#4776](https://github.com/HKUDS/nanobot/issues/4776) (Security): /restart command has zero authorization** – Any paired user can crash the entire bot process. No fix PR linked yet. **Critical.**
    - **[#4867](https://github.com/HKUDS/nanobot/issues/4867) (Performance): Ollama cache miss adds 60s delay** – Reported as making the agent unusable with local models. No linked fix PR. **High.**
- **Medium Severity:**
    - **[#4835](https://github.com/HKUDS/nanobot/issues/4835) (Bug - Closed): WebUI landing message sent to wrong chat** – A race condition where a user's first message could be misrouted to a previous chat. This was marked closed with a fix.
    - **[#4634](https://github.com/HKUDS/nanobot/issues/4634) (Closed - Fixed): edit_file target disambiguation** – The dominant failure in the edit benchmark was resolved today via PR [#4635](https://github.com/HKUDS/nanobot/pull/4635).
- **Fix PRs in Queue:**
    - **[#4842](https://github.com/HKUDS/nanobot/pull/4842) (fix: MCP shutdown CancelledError)** – A fix for crashes during MCP server shutdown (Priority: p1).
    - **[#4843](https://github.com/HKUDS/nanobot/pull/4843) (fix: MCP reconnect crash)** – A fix for gateway crashes during MCP session reconnection (Priority: p1).

### 6. Feature Requests & Roadmap Signals
Based on recent PRs and issues, the following features are likely candidates for the next release:

- **Dynamic Model Routing:**
    - **Per-Conversation Models:** [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) suggests this is a top priority.
    - **Subagent Model Override:** [Issue #4231](https://github.com/HKUDS/nanobot/issues/4231) is closely related. While the PRs conflicted, the demand is clear.
    - **Cron Job Presets:** [Issue #4378](https://github.com/HKUDS/nanobot/issues/4378) (linked to the conflicted PR [#4622](https://github.com/HKUDS/nanobot/pull/4622)).
- **Agent Workflow & UX:**
    - **Eager Memory Consolidation:** [PR #4626](https://github.com/HKUDS/nanobot/pull/4626) (opt-in, append-only archiving) is a strong candidate for the next minor release as it improves long-term recall.
    - **Guided Input & Syntax Highlighting:** Features merged in [PR #4876](https://github.com/HKUDS/nanobot/pull/4876) and [PR #4877](https://github.com/HKUDS/nanobot/pull/4877) suggest a push toward a more polished WebUI.
- **Safe Automation:**
    - **Gated Sustained Goals:** [PR #4879](https://github.com/HKUDS/nanobot/pull/4879) and PR [#4844](https://github.com/HKUDS/nanobot/pull/4844) indicate a strong move toward making autonomous agent behavior opt-in and user-authorized.

### 7. User Feedback Summary
User sentiment is mixed: high enthusiasm for new features is tempered by significant frustration with core reliability and usability.

- **Pain Points:**
    - **Performance:** The 60-second delay with Ollama ( [#4867](https://github.com/HKUDS/nanobot/issues/4867) ) is a severe impediment for users running local models.
    - **Security:** The unauthenticated `/restart` command ( [#4776](https://github.com/HKUDS/nanobot/issues/4776) ) is a risk for multi-user environments.
    - **Wasted Workflow:** The "Dream" feature creating empty commits ( [#4872](https://github.com/HKUDS/nanobot/issues/4872) ) is a nuisance that was quickly addressed.
- **Satisfaction:**
    - Users are actively requesting advanced features (model routing, syntax highlighting, guided inputs), indicating deep engagement and a desire to use NanoBot for complex, production-like tasks.
    - The prompt fix for the Dream feature ([PR #4873](https://github.com/HKUDS/nanobot/pull/4873)) shows maintainers are responsive to concrete pain points.

### 8. Backlog Watch
The following items require maintainer attention due to age, criticality, or lack of resolution:

- **[#4588](https://github.com/HKUDS/nanobot/pull/4588) (Open - Performance): Context compression** – A performance optimization PR that is 12 days old and marked with a "conflict" tag. Given the community's performance concerns ( [#4867](https://github.com/HKUDS/nanobot/issues/4867) ), this PR is essential for unblocking local model users.
- **[#4205](https://github.com/HKUDS/nanobot/pull/4205) (Open - Feature): Mailbox-backed subagent results** – A fundamental refactor of the subagent system. This PR is 40 days old and has no recent maintainer comments, suggesting it may be stalled.
- **[#4776](https://github.com/HKUDS/nanobot/issues/4776) (Open - Security): /restart authorization** – A security vulnerability with high impact. It has received only 1 comment and has no linked PR. This is a critical backlog item.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for **Hermes Agent** on **July 11, 2026**.

---

## Hermes Agent Project Digest: 2026-07-11

### 1. Today's Overview
The project is experiencing a **high-velocity maintenance cycle**, with 50 issues and 50 PRs updated in the last 24 hours, indicating sustained engineering focus. Activity is heavily weighted toward squashing regressions in recent features (session routing, desktop UX) and hardening session-state consistency. No new releases were cut today, suggesting the team is consolidating "hotfix"-level patches before an upcoming stable milestone. The high volume of `sweeper:risk-session-state` and `sweeper:risk-message-delivery` tags suggests a focused effort on data integrity.

### 2. Releases
**No new releases were published today.** The last known version appears to be `v0.18.2` (referenced in issue #62394).

### 3. Project Progress
Seven PRs were merged or closed today, reflecting a push to stabilize session management and platform interoperability.
- **Session Routing (Critical Fix):** Multiple PRs (#62134, #62144, #62413) were merged to address session misrouting (#54527) in the Desktop app, ensuring user input remains bound to the correct session during rapid context switches.
- **Auth & Config:** PR #62423 fixed `--ignore-user-config` to properly bypass user-configured memory plugins (e.g., Honcho).
- **Context Management:** PR #62422 introduced logic to preserve original message history instead of dropping it when context compression quotas are exhausted.
- **Desktop UX:** PR #62409 was opened to fix inline image thumbnails by stripping markdown emphasis from `MEDIA:` paths.

### 4. Community Hot Topics
- **[Bug] Session Misdirection (#54527):** The highest-traffic issue today, generating 3 concurrent fix attempts (#62134, #62144, #62413). Users report prompts typed in one Desktop session being lost or appearing in another.
    - [Issue #54527](https://github.com/NousResearch/hermes-agent/Issue/54527)
    - [PR #62134](https://github.com/NousResearch/hermes-agent/PR/62134)
    - [PR #62413](https://github.com/NousResearch/hermes-agent/PR/62413)
- **[Feature] Codex Compaction API (#33130):** A user request to leverage the native OpenAI Codex Compaction API instead of Hermes’ internal compression logic. Closed as a feature request, indicating it was evaluated or slated.
    - [Issue #33130](https://github.com/NousResearch/hermes-agent/Issue/33130)
- **[Feature] Volatile Skills (#36656):** A request for one-turn-only skill loading to reduce context overhead, receiving 2 upvotes.
    - [Issue #36656](https://github.com/NousResearch/hermes-agent/Issue/36656)

**Underlying Need:** The #54527 cluster highlights a core UX demand for **reliable state isolation** in the Desktop app, especially as users run concurrent sessions for different projects.

### 5. Bugs & Stability
The project is currently addressing a significant number of **P1/P2 regressions**.

- **Critical (P1):**
    - **Proxy Support (#5454):** Closed today. Users behind corporate proxies could not route API calls. Fix was likely included in a prior release.
    - **Telegram/Desktop Compaction Stuck (#48098):** Desktop UI shows stale "Summarizing thread" status.
    - **Bedrock Wizard Bug (#28156):** Wizard accepts incomplete credentials (Bearer-only) which fail at runtime.
    - **Gateway Message Routing (#54527):** Fixed via merged PRs.
- **High (P2):**
    - **Stale TUI Content (#62170):** Switching sessions in v0.18.1 shows outdated content.
    - **TUI Stuck on Busy (#54756):** UI remains spinning after task completion when the final response is empty.
    - **MCP Process Leaks (#60385):** Stdio processes for MCP servers accumulate on reconnect, wasting memory.
    - **LSP Leaks (#25016):** Idle Language Server subprocesses are never reaped, accumulating ~200MB per server.

### 6. Feature Requests & Roadmap Signals
Several feature requests signal the community's push toward **context efficiency** and **multi-agent coordination**.
- **Context Optimization:** Two-Phase Context Management (#513) and Volatile Skills (#36656) both aim to reduce token waste, a clear UX priority for power users.
- **Concurrency:** Per-tab CDP routing (#62338) and tab leasing (#62339) for the browser tool suggest the team is enabling concurrent agent operations.
- **Roadmap Prediction:** Given the number of open PRs addressing session handling and state resumption, the **next minor release (v0.18.3 or v0.19.0)** will likely focus on stabilizing the Desktop/Sidebar "Projects Paradigm" launched in late June.

### 7. User Feedback Summary
- **Satisfaction:** Users are engaging deeply with the new **Kanban** and **Projects Paradigm** features, but the high volume of regressions in session switching is causing frustration.
- **Pain Points:**
    - **Data Integrity:** Multiple users reporting prompts being lost or misrouted (#54527). Fix is in review.
    - **UI/UX Gaps:** The desktop approval bar truncates diffs (#61249); email subjects are hardcoded (#46947).
    - **Platform Issues:** Users on Windows (TUI routing) and Linux (NVIDIA driver crashes #40077) report specific compatibility friction.
- **Positive Signals:** The community is actively contributing high-quality test fixes (#62421) and refactoring for production safety (#62425, `assert` replacement).

### 8. Backlog Watch
The following important issues remain unaddressed or are pending maintainer action:

- **#25016: LSP Subprocess Leak** (P2, Updated 2026-07-11): Idle LSP servers are never reaped. On a 24/7 gateway, this leads to a slow memory leak. No PR linked.
    - [Issue #25016](https://github.com/NousResearch/hermes-agent/Issue/25016)
- **#27284: Prompt Injection Scanner Gaps** (P3, Updated 2026-07-11): The security scanner for memory/MCP tools misses multi-word `ignore ... instructions` variants. This is a security hardening item with no PR activity.
    - [Issue #27284](https://github.com/NousResearch/hermes-agent/Issue/27284)
- **#513: Two-Phase Context Management** (P3, New 2026-03-06): A highly requested feature from the community leader (teknium1) that remains open with no PR despite being 4 months old.
    - [Issue #513](https://github.com/NousResearch/hermes-agent/Issue/513)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-11

## Today's Overview

PicoClaw shows **moderate activity** today with 3 issues updated and **18 pull requests** in motion, indicating a healthy development cycle. The project is seeing focused work on **OAuth provider compatibility**, **WhatsApp channel improvements**, and **security hardening** — with 8 PRs filed just today. One issue was closed (a stale WhatsApp WebSocket bug), and one PR was merged (also a WhatsApp fix), suggesting the team is actively closing out older items while pushing forward with new refinements. The **agent collaboration bus** feature (PR #2937) remains open and is the longest-running structural addition in flight.

---

## Releases

**No new releases** were published since the last digest. The latest stable version remains **v0.2.9** (referenced in issue #3178). Users awaiting the fallback chain UI (#3200) and agent collaboration (#2937) features should expect a future v0.3.x release.

---

## Project Progress

**Merged/Closed PRs today:**

- **#3179 — fix(whatsapp): reconnect after websocket drops** — *CLOSED/MERGED*. This fix (authored by Alix-007) reconnects the WhatsApp WebSocket bridge after read failures, configures read deadlines and ping/pong handlers, and dispatches inbound messages asynchronously. Directly addresses the same class of failures reported in a now-closed issue.

**Notable newly opened PRs advancing code quality and security:**

- **#3248 — fix: bump Go to 1.25.12** — Remediates `crypto/tls` and `os` stdlib vulnerabilities in CI; expected to merge quickly.
- **#3246 — fix: security/robustness hardening** — Verifies MQTT TLS by default (was `InsecureSkipVerify: true`), adds HTTP client timeouts for OAuth, and caps search reads.
- **#3245, #3244, #3243** — Three `refactor` PRs by `corporatepiyush` reducing string allocations in `skills/loader.go` and `seahorse` summary assembly via `strings.Replacer` and `strings.Builder`. Performance tuning for heavy-load paths.
- **#3242 — feat(whatsapp): add native typing presence** — Implements `channels.TypingCapable` for WhatsApp, sending `composing`/`paused` presence.
- **#3241 — fix(auth): make OAuth refresh provider-correct and concurrency-safe** — New companion PR to issue #3239, switching OpenAI to JSON body, enforcing 30s timeouts, and making refreshes atomic.

---

## Community Hot Topics

1. **#3240 — Add typing presence to WhatsApp native replies** (0 comments, but linked to *PR #3242* which implements it) — [Open Issue](sipeed/picoclaw Issue #3240).  
   Users report the WhatsApp channel gives no feedback during multi-second processing delays. The underlying need is **user experience parity** with other chat platforms.

2. **#3239 — OAuth refresh requests use incompatible provider semantics and can race** (0 comments) — [Open Issue](sipeed/picoclaw Issue #3239).  
   Paired with **PR #3241** already filed by the same author. The problem — OpenAI requires JSON body but code uses form-encoded payloads — is being fixed reactively. Indicates a need for **provider-aware middleware** in the auth layer.

3. **#3205 — fix: support 9router gateway responses and add Linux ARMv7 build target** (open 9 days) — [PR](sipeed/picoclaw PR #3205).  
   A Raspberry Pi user reports 9router (an OpenAI-compatible gateway) returns nonstandard responses. Need: **broader hardware support** and **gateway response tolerance**.

4. **#2937 — Agent Collaboration Bus** (open 49 days, 0 comments) — [PR](sipeed/picoclaw PR #2937).  
   This is the most ambitious open PR: durable inter-agent mailboxes, collaboration threads, permission-aware specs. Low engagement may indicate need for **design review or API discussion**.

---

## Bugs & Stability

**Medium Severity**

- **#3239 — OAuth refresh race and provider mismatch** (OPEN)  
  *Impact:* Multi-provider setups (OpenAI + Google) experience token refresh failures under concurrent checks. Fix available in PR #3241.  
  *Risk:* Auth failures under moderate concurrency.

**Low Severity / Fixed Today**

- **#3178 — WhatsApp WebSocket timeout** (CLOSED) — Marked `[stale]`, resolved via PR #3179.  
- **#3248 — Go stdlib CVEs (`crypto/tls`, `os`)** — CI-only; PR filed to bump toolchain from 1.25.11 → 1.25.12.  
- **#3246 — MQTT InsecureSkipVerify** — Hardening fix removes `InsecureSkipVerify: true` from MQTT channel. No known exploit reported.  
- **#3165 — Seed XML tool calls not recovered** (stale, OPEN) — Volcengine Doubao users see raw XML in responses. PR exists but not merged.

---

## Feature Requests & Roadmap Signals

- **WhatsApp typing presence** (PR #3242): Likely lands in **next patch release**. Directly addresses user pain point.
- **Configurable default fallback chain** (PR #3200): High-value UI feature for model management; candidate for **v0.3.0**.
- **Simplex channel** (PR #3193): New communication channel type; early-stage integration.
- **Agent Collaboration Bus** (PR #2937): Longest-running feature PR — if merged, would be a **major architectural upgrade** enabling multi-agent workflows.
- **Linux ARMv7 build target** (PR #3205): Enables Raspberry Pi 3+/Zero support. Signals growing demand for **edge device deployment**.

---

## User Feedback Summary

- **Satisfaction**: The WhatsApp reconnection fix (#3179) was well-received — closed the day it was updated. The Czech locale contribution (#3247) suggests a positive i18n contributor experience.
- **Pain points**:
  - *WhatsApp UX:* No typing indicator during response generation (Issue #3240) — users see "dead air" for several seconds.
  - *OAuth reliability:* Multi-provider setups risk silent auth failures (Issue #3239).
  - *Gateway compatibility:* 9router users on non-x86 hardware face parsing errors (PR #3205).
  - *Performance in large conversations:* String-concatenation patterns in seahorse compaction cause O(n²) allocations (addressed by PRs #3243–3245).

---

## Backlog Watch

The following items have been open for **extended periods** without maintainer response or merge:

1. **#2937 — Agent Collaboration Bus** (open 49 days, untouched by maintainers) — [PR](sipeed/picoclaw PR #2937).  
   *Risk:* Major feature risks growing stale without architectural feedback.

2. **#3165 — fix(openai_compat): recover Seed XML tool calls** (open 17 days, `[stale]`) — [PR](sipeed/picoclaw PR #3165).  
   *Risk:* Volcengine Doubao users continue seeing raw XML in streaming responses.

3. **#1951 — chore: move installation scripts from docs repo** (open 110 days) — [PR](sipeed/picoclaw PR #1951).  
   *Risk:* Low priority, but signals documentation fragmentation.

4. **Dependabot PRs #3211, #3208** — Both marked `[stale]` after 9 days open. Routine dependency bumps (eslint, mautrix) that block downstream CI if left unresolved.

**Project Health Indicator**: 17 open PRs + 2 open issues = active triage needed. Maintainers are responsive to security fixes (same-day PRs for CVE bumps and TLS hardening), but the backlog of feature PRs suggests a **capacity bottleneck for architectural review**.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-11

## Today's Overview

NanoClaw shows **high maintenance velocity** with 26 PRs updated in the last 24 hours (15 open, 11 closed/merged) and 3 issues updated (1 open, 2 closed). The project is in a **major refactoring phase** with several coordinated PR trains advancing concurrently: provider-agnostic memory systems, channel behavior declarations, timestamp convention standardization, and scheduled-tasks architecture improvements. No new releases were cut today, but the volume of merged work (11 PRs) suggests a release may be imminent. The core team (especially gavrielc with 6 PRs merged today alone) is driving systematic improvements across container formatting, exchange archives, and channel defaults.

## Releases

**No new releases today.** The active PR velocity and merged work suggest a release candidate may be forming.

## Project Progress

11 PRs were merged or closed today, representing significant infrastructure advances:

**Infrastructure & Architecture:**
- **[#3011]** feat(channels): ChannelDefaults declarations for all adapters + WhatsApp shared-number fix (merged) — every adapter now declares wiring-time defaults rather than relying on core heuristics
- **[#3010]** feat: adapter-declared channel defaults (engage mode, threading, sender policy) (merged) — refactors core judgment heuristics into per-channel configuration
- **[#3009]** Move channel formatting skills (whatsapp, slack) from trunk to the channels branch (merged) — prevents channel-specific formatting from being shipped to all agents
- **[#3004]** Context preview tool: render the exact agent context per scenario (merged) — adds `scripts/context-preview.ts` for debugging what agents actually see

**Timestamp Standardization Work:**
- **[#3007]** fix: exchange archives stamp local time (merged) — Codex/OpenCode archives now use install timezone instead of raw UTC
- **[#3006]** fix: ISO storage + local-time display for all timestamps (merged) — enforces repo-wide convention: storage in UTC, display in local time
- **[#3005]** fix: stamp task rows with ISO timestamps (merged) — fixes `<task time>` rendering hours off from chat timestamps

**Documentation & Developer Experience:**
- **[#3003]** docs(agent-browser): require bounded waits for custom conditions (merged) — prevents unbounded wait loops when conditions never resolve
- **[#3015]** fix: preserve phase context in live progress (merged) — fixes E2E test progress display when tool events arrive before phase explanations

**Channel Fixes:**
- **[#3011]** WhatsApp shared-number fix (merged, combined with ChannelDefaults work)

## Community Hot Topics

**Most Active Discussions:**

1. **Issue #3001** — [OPEN] Groups created before shared-skills refactor keep stale skill copies — 0 comments but critical as it's a newly filed (2026-07-10) regression affecting upgrade paths for existing installations

2. **PR #2996** — [OPEN] fix(delivery): route missing-adapter messages into the retry path — core-team fix from glifocat, addressing silent message drops when an adapter becomes temporarily unavailable

3. **PR #2988** — [OPEN] Tasks: one-door delivery — send_message is the only path (part 3/5 of scheduled-tasks train) — omri-maya advancing the major scheduled-tasks refactoring, with explicit destination enforcement

4. **PR #2999** — [OPEN] feat(channels): unify iMessage into a single `imessage` channel (local + hosted backends) — underthestars-zhy's channel unification with two pluggable backends

5. **PR #2877** — [OPEN] feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage — robbyczgw-cla's feature to leverage Telegram's new rich message API, open since 2026-06-28

## Bugs & Stability

### Critical
- **Issue #3001** — Groups created before shared-skills refactor keep stale skill copies that silently block managed symlinks (OPEN, filed 2026-07-10). **Fix exists**: PR #3002 (warn when a real entry blocks a shared skill symlink) is open and awaiting review. This is a silent data loss bug — updated skills never reach affected groups.

### Medium
- **Issue #2415** — `ncl groups create` skips `container_configs` row, causing first spawn to fail (CLOSED, fixed). Classic "new user can't get started" bug — CLI creates group but omits required DB row.
- **Issue #2389** — Wirings created via `bin/ncl` don't auto-create destinations (CLOSED, fixed). Agent generates responses but they're silently swallowed — no destination registered.
- **PR #2998** — [OPEN] fix(self-mod): render full MCP server payload on the approval card — glifocat fixing incomplete MCP server configuration display in approval UI
- **PR #2996** — [OPEN] fix(delivery): route missing-adapter messages into the retry path — glifocat addressing silent message drops when adapter is missing
- **PR #3008** — [OPEN] fix(whatsapp): remove cachedGroupMetadata that breaks SKDM in LID groups — gfnord fixing WhatsApp LID group encryption key distribution

### Low
- **PR #2966** — [OPEN] fix(agent-runner): log when an errored batch is acked completed — improves observability for silently-failed batches

## Feature Requests & Roadmap Signals

### Likely in Next Version:
1. **Provider-agnostic persistent memory** — PR #3012 (amit-shafnir) adds a shared memory tree across agent providers; PR #3013 adds Codex counterpart. This is a major architectural change enabling cross-provider continuity.
2. **Scheduled tasks architecture (parts 3-5)** — PR #2988 advances the train, with one-door delivery enforcement. The full 5-part train suggests this is a priority.
3. **Unified iMessage channel** — PR #2999 consolidates two iMessage implementations into one with pluggable backends (local Chat SDK vs hosted).
4. **Telegram rich messages** — PR #2877 leverages Bot API 10.1's native rich rendering, reducing the need for custom formatting.

### Roadmap Signals:
- The **ChannelDefaults** work (merged today) resets how channel behavior is configured, making it more extensible for new channel integrations
- **Context preview tool** (merged today) signals focus on developer debugging experience
- The **shared-skills refactor regression** (Issue #3001) suggests the refactor was significant and the team is still catching edge cases

## User Feedback Summary

**Pain Points Addressed:**
- "Container config not found" on first spawn after CLI group creation (Issue #2415, fixed) — onboarding friction resolved
- "Agent silently drops messages" because no destination is registered (Issue #2389, fixed) — a dangerous silent failure for production use
- "Task time renders hours off" (PR #3005, fixed) — timestamp inconsistency confused users monitoring agent activity
- "MCP server payload doesn't render on approval card" (PR #2998, open) — self-mod approval workflow is incomplete

**Unresolved Pain Points:**
- **Silent skill staleness** (Issue #3001, open) — groups created before April 21st refactor never receive skill updates; no user-facing warning exists
- **Missing-adapter messages silently dropped** (PR #2996, open) — when an adapter temporarily disappears, messages vanish without any log or retry

**Positive Signals:**
- The timestamp standardization work (PRs #3005, #3006, #3007) responds to user confusion around timezone handling
- The context-preview tool (PR #3004) addresses developer requests for debugging visibility

## Backlog Watch

| Item | Type | Created | Age | Status | Concern |
|------|------|---------|-----|--------|---------|
| **PR #2877** — Telegram rich messages | Feature | 2026-06-28 | 13 days | OPEN, no maintainer review yet | Would unblock significant UX improvement for Telegram users |
| **Issue #3001** — Stale skill copies after refactor | Bug | 2026-07-10 | 1 day | OPEN, fix #3002 awaiting review | Affects all pre-April groups; silent data loss |
| **Issue #2415**[CLOSED] + **Issue #2389**[CLOSED] — CLI creation bugs | Bug | May 2026 | ~2 months | CLOSED today | Both were critical onboarding bugs that took 2 months to fix |
| **PR #2966** — Log errored batch ack | Fix | 2026-07-06 | 5 days | OPEN | Low urgency but improves observability |

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest – 2026-07-11**  
*Generated from GitHub activity for github.com/nullclaw/nullclaw*

---

### 1. Today’s Overview

NullClaw shows a quiet day with zero merged PRs and no new releases, but two active open issues signal unresolved user-facing problems. The project is currently stable in terms of velocity, though the absence of any merged code or closed issues suggests a net-zero progress day on bugfixes or feature work. Both open issues involve core channel and security functionality (Telegram reliability and A2A route isolation), which may require maintainer attention before the next release. Community engagement is low today, with only two commenters active across the open items.

---

### 2. Releases

No new releases today. No builds, tags, or distribution artifacts were cut.

---

### 3. Project Progress

No pull requests were updated in the last 24 hours. Zero PRs were merged, closed, or opened. No feature branches or fixes appear to have advanced.

---

### 4. Community Hot Topics

- **Issue #972 – Telegram channel stops responding after idle time**  
  [GitHub Link](https://github.com/nullclaw/nullclaw/issues/972)  
  *Author: i11010520 | Comments: 2 | 👍: 0*  
  This issue has been open for 10 days and received a comment yesterday, indicating continued user interest. The core complaint is that the Telegram channel "dies" after overnight idle, while the NullClaw backend remains operational. Underlying need: reliable channel reconnection or keep-alive logic for long-running Telegram integrations.

- **Issue #974 – Shared bearer A2A route allows cross-caller task and context reuse**  
  [GitHub Link](https://github.com/nullclaw/nullclaw/issues/974)  
  *Author: N0zoM1z0 | Comments: 0 | 👍: 0*  
  Filed today, this report describes a security vulnerability where a valid bearer token (shared between users) permits unauthorized access to another user’s task history and context. Underlying need: proper per-caller authorization or session isolation on the `/a2a` route.

---

### 5. Bugs & Stability

Two bugs are currently active, both open. Ranked by severity:

1. **High – Issue #974: A2A route security hole**  
   *Impact:* Any bearer token holder can access any other user’s task data and downstream context. This is a security regression that could lead to data leakage. No fix PR exists.

2. **Medium – Issue #972: Telegram channel timeout**  
   *Impact:* Telegram bot becomes unresponsive after idle, frustrating users who depend on the platform for dashboards or notifications. No fix PR exists.

No crashes or regressions were reported with reproducers today.

---

### 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today. However, the two open issues imply strong user demand for:
- **Telegram channel resilience** – likely a keep-alive or reconnection mechanism for messenger channels.
- **A2A route authorization** – either per-caller token scoping or context-level ACLs. These may be candidates for the next minor release (e.g., v2.1.x).

---

### 7. User Feedback Summary

- **i11010520 (Issue #972):** Dissatisfied with Telegram reliability; the backend works fine but the frontend becomes unresponsive. User wants a fix that doesn't require restarting the agent.
- **N0zoM1z0 (Issue #974):** Concerned about security posture; user provided a clear replay scenario showing cross-task leakage. This suggests a trust gap in the current bearer-based architecture.

Overall tone: users are encountering real, reproducible failures in key integrations and access control, resulting in frustration and potential trust erosion.

---

### 8. Backlog Watch

- **Issue #972 (10 days open)**: No maintainer response on the open timeline. The user is waiting for a workaround or patch. Needs triage.
- **Issue #974 (same day as report)**: Just filed – requires prompt maintainer acknowledgment and a security review.

No PRs are currently stale or waiting for maintainer review, as none are open.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-11

## Today's Overview

IronClaw is in a period of **high-intensity stabilization and architectural hardening**, with 36 issues updated and 50 PRs active in the last 24 hours. The project is actively addressing a systemic reliability gap identified by benchmark analysis (claw-swe-bench-lite showing IronClaw at 30% vs. 65% for comparable systems), with multiple large-scale resilience PRs in flight. The team is also executing a planned transition away from the legacy v1 runtime toward the Reborn architecture, as signaled by Issue #5935. Despite zero new releases today, **15 PRs were merged or closed**, indicating strong forward momentum on bug fixes and core infrastructure improvements.

## Releases

**No new releases today.**

## Project Progress

**Merged/Closed PRs (15 today):**

| PR | Title | Significance |
|----|-------|--------------|
| [#5950](https://github.com/nearai/ironclaw/pull/5950) | Expose production LocalDev capability-port assembly to tests | Critical testing infrastructure seam — enables harness parity |
| [#5960](https://github.com/nearai/ironclaw/pull/5960) | Raise default loop iteration ceiling 32 → 256 | Prevents premature fail-closure on tool-heavy turns |
| [#5895](https://github.com/nearai/ironclaw/pull/5895) | Fix compaction failures after tool results | Direct fix for [#5838](https://github.com/nearai/ironclaw/issues/5838) — treats compaction errors as recoverable |
| [#5967](https://github.com/nearai/ironclaw/pull/5967) | Skip invalid available-extension manifests at boot instead of crash-looping | Fix for production [#5966](https://github.com/nearai/ironclaw/issues/5966) boot crash |
| [#5954](https://github.com/nearai/ironclaw/pull/5954) | RunFailureReason funnel foundation (phase 1 of 4) | Error classification infrastructure, additive with zero behavior change |
| [#5844](https://github.com/nearai/ironclaw/pull/5844) | Tell agent to compute with tools, not in its head | System prompt improvement to reduce hallucinated calculations |
| [#5817](https://github.com/nearai/ironclaw/pull/5817) | Don't treat decimal numbers as requested capability IDs | Fix for spurious tool suppression |
| [#5747](https://github.com/nearai/ironclaw/issues/5747) | Slack unpair issue closed | Reborn Slack disconnect functionality resolved |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | Context compaction error closed | Fixed by PR #5895 |
| [#4640](https://github.com/nearai/ironclaw/issues/4640) | Google Calendar list_events ordering closed | Long-standing calendar API fix |
| [#5835](https://github.com/nearai/ironclaw/issues/5835) | "Jump to latest" positioning closed | UI polish |
| [#5828](https://github.com/nearai/ironclaw/issues/5828) | Remove stale v1 test references closed | Cleanup |
| [#5837](https://github.com/nearai/ironclaw/issues/5837) | Routine run action buttons not clickable closed | UX fix |

## Community Hot Topics

- [#5959](https://github.com/nearai/ironclaw/pull/5959) — **Reborn loop resilience** (PR with DB migration, affects agent, channel, sandbox, CI). This is the largest architectural response to the benchmark gap, adding deep retries for provider 5xx storms, iteration backstops, and model-visible tool-failure reasons. The PR description directly attributes the 30% vs 65% gap to "the runtime discarding work rather than model quality."

- [#5973](https://github.com/nearai/ironclaw/pull/5973) — **Per-server MCP timeouts + background-job bridge** (XL, contributor: new). Lifts the hardcoded 30s MCP transport cap to configurable 5–21600s range, with background job support. Signals demand for long-running MCP operations.

- [#5974](https://github.com/nearai/ironclaw/pull/5974) — **Episodic memory: cross-session summaries + recall** (XL, contributor: new). Introduces automatic cross-session continuity with two-channel recall (push and pull). A major new capability for persistent agent identity.

- [#5972](https://github.com/nearai/ironclaw/pull/5972) — **Per-turn tool retrieval + `find_tools` discovery** (XL, contributor: new). Reduces prompt tokens by using cosine similarity over tool descriptions to select only relevant tools per turn.

- [#5948](https://github.com/nearai/ironclaw/issues/5948) — **Assistant incorrectly reports GitHub extension as activated when only installed** (5 comments, P3). Highlights a gap in status reporting between the assistant and the actual extensions UI.

**Underlying need:** The community and contributors are driving toward three major themes: (1) making Reborn production-ready with resilience comparable to competitors, (2) adding sophisticated memory and tool-retrieval capabilities, and (3) fixing real-world integration pain points (Slack, Google Sheets, MCP timeouts).

## Bugs & Stability

**P1 (Critical):**
- [#5943](https://github.com/nearai/ironclaw/issues/5943) — **Slack DM action posts to current channel instead of user's DMs.** The assistant fundamentally misroutes direct message delivery. **No fix PR yet.**

**P2 (High):**
- [#5946](https://github.com/nearai/ironclaw/issues/5946) — **Assistant mutates Google Sheet before checking Slack trigger availability.** Destructive side effects before capability verification.
- [#5945](https://github.com/nearai/ironclaw/issues/5945) — **Run fails with "model provider was unavailable" after long multi-tool execution** (34 tools observed). Generic error after lengthy workflows.
- [#5944](https://github.com/nearai/ironclaw/issues/5944) — **Slack DM delivery silently fails but run reports success.** False positive success reporting.
- [#5885](https://github.com/nearai/ironclaw/issues/5885) — **Approval notification opens action without showing approval message.** User cannot approve/deny pending actions.
- [#5879](https://github.com/nearai/ironclaw/issues/5879) — **Stale error banner remains visible after successful follow-up.** Persistent misleading UI state.
- [#5836](https://github.com/nearai/ironclaw/issues/5836) — **Routine fails on every scheduled run with "No thread attached."** 0% success rate for scheduled routines.
- [#5834](https://github.com/nearai/ironclaw/issues/5834) — **Slack disconnect request incorrectly rejected by agent.** User cannot disconnect via agent interaction.
- [#5707](https://github.com/nearai/ironclaw/issues/5707) — **Routine creation response exposes internal implementation details.** Security concern.

**P3 (Medium):**
- [#5948](https://github.com/nearai/ironclaw/issues/5948) — Extension activation status discrepancy
- [#5891](https://github.com/nearai/ironclaw/issues/5891) — "Last completed" displays running run timestamp
- [#5889](https://github.com/nearai/ironclaw/issues/5889) — "Load older messages" button non-functional
- [#5947](https://github.com/nearai/ironclaw/issues/5947) — Thread deletion requires page refresh

**Infrastructure/Regression:**
- [#5966](https://github.com/nearai/ironclaw/issues/5966) — **Boot crash-loop** (CLOSED, fixed by [#5967](https://github.com/nearai/ironclaw/pull/5967))
- [#5958](https://github.com/nearai/ironclaw/issues/5958) — **Loop executor store I/O has no wall-clock bound** (not compaction-specific, raised from PR review)

## Feature Requests & Roadmap Signals

1. **Episodic Memory** ([#5974](https://github.com/nearai/ironclaw/pull/5974)) — Cross-session continuity for agents. Likely for next release given XL size and new contributor.

2. **Per-User MCP Registration Store** ([#5970](https://github.com/nearai/ironclaw/pull/5970)) — Tenant-scoped MCP extension management. Critical for multi-tenant deployments.

3. **Per-Turn Tool Retrieval** ([#5972](https://github.com/nearai/ironclaw/pull/5972)) — Dynamic tool set selection to reduce token usage. Predicts increasing focus on cost optimization.

4. **Retire v1 Runtime** ([#5935](https://github.com/nearai/ironclaw/issues/5935)) — Planned deprecation of legacy `src/` code. Signals commitment to Reborn as the only supported path.

5. **Unify Reborn Dropdown Styling** ([#5938](https://github.com/nearai/ironclaw/issues/5938)) — UI consistency for native vs custom SelectMenu components.

6. **GLM-5.2 Model in opencode** ([#5969](https://github.com/nearai/ironclaw/issues/5969)) — User-requested model availability. Simple configuration fix.

**Prediction for next version:** The combination of #5959 (loop resilience), #5970 (MCP registration), and the v1 retirement (#5935) suggests the next release will be a **major Reborn milestone** focused on production reliability and multi-tenant readiness.

## User Feedback Summary

**Pain Points (real users):**
- *Investment note workflow* ([#5955](https://github.com/nearai/ironclaw/issues/5955)): Multistep workflows with sub-agents fail — missions hit tool-call limits or stop progressing. User report: "IronClaw fails on multistep workflows when asked to create an investment note by breaking the task into sub-tasks."

- *HTTP tool + third-party APIs* ([#5968](https://github.com/nearai/ironclaw/issues/5968)): Generic HTTP tool fails with non-descriptive errors when connecting to services (Attio) without MCP support. User report: "The tool returns a non-descriptive error and doesn't support authentication or egress."

- *Large HTTP responses* ([#5741](https://github.com/nearai/ironclaw/issues/5741)): `builtin.http.save` fails with `OutputTooLarge` for legitimate web pages.

- *Google Calendar ordering* ([#4640](https://github.com/nearai/ironclaw/issues/4640), CLOSED): "What are my upcoming meetings?" returned oldest events instead of upcoming ones.

**Satisfaction Signals:**
- Active contributor community: Three XL PRs from "new" contributors (#5973, #5974, #5972) indicate growing adoption and investment.
- The benchmark gap analysis (#5959) shows the team is data-driven about improvement, comparing against competitors (Hermes 65%, OpenClaw 40%) to target fixes.

## Backlog Watch

| Issue | Age | Status | Why Watch |
|-------|-----|--------|-----------|
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | 5 days | OPEN | `builtin.http.save` large response failure affects real web scraping use cases; 2 comments, no fix PR |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | 7 days | OPEN | Harness gap: security audit sink always `None` in integration tests despite production wiring; surfaced by wiring parity guard |
| [#5958](https://github.com/nearai/ironclaw/issues/5958) | 1 day | OPEN | Loop executor store I/O unbounded — raised from PR #5895 review, marked "not blocking" but architecture concern |
| [#5953](https://github.com/nearai/ironclaw/issues/5953) | 1 day | OPEN | Channel disconnect on extension removal broken for generic ExternalChannel (non-Slack). Found during "thermo-nuclear review" — systemic pattern, not just Slack |

**Note:** Most open issues are very recent (1 day old), suggesting the team is quickly triaging and closing older items. No issues are visible that have been open for weeks without attention.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 11, 2026.

---

## LobsterAI Project Digest: 2026-07-11

### 1. Today's Overview
LobsterAI had a very high-activity day, driven by a major release and rapid bug-fixing. A single new version (`2026.7.10`) was published, incorporating a significant new feature for multi-agent collaboration. The project saw a surge of 10 merged/closed pull requests, primarily focused on stabilizing the Cowork space and fixing regressions in scheduled tasks and IM integrations. While community engagement on issues was moderate, the volume of PR activity suggests the maintainers are in a sprint to address feedback and solidifying infrastructure ahead of broader features.

### 2. Releases
**Version:** [LobsterAI 2026.7.10](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.10) | **Date:** 2026-07-10

**What's Changed:**
- **feat(agents): support delegated subagent collaboration** – A major feature allowing agents to delegate work to subagents, enabling complex, hierarchical task execution.
- **feat(cowork): add minimizable permission prompts** – UX improvement for the Cowork interface, allowing users to minimize permission requests without dismissing them.
- *(Partial note)* Further changes are included in this release.

**Migration Notes:** None specified. Users should update to benefit from the new subagent logic and UI fixes.

### 3. Project Progress
Ten pull requests were merged or closed today, indicating a strong focus on fixing bugs and hardening existing features.

- **Fix: Memory Indexing for All Agents** – [PR #2311](https://github.com/netease-youdao/LobsterAI/pull/2311) migrates FTS-only memory indexes for every configured agent, preventing data loss during startup.
- **Fix: Cowork Queued Follow-up Coordinator** – [PR #2315](https://github.com/netease-youdao/LobsterAI/pull/2315) ensures queued follow-ups are processed correctly even when the app is minimized.
- **Fix: IM Group Task Routing** – [PR #2306](https://github.com/netease-youdao/LobsterAI/pull/2306) and [PR #2314](https://github.com/netease-youdao/LobsterAI/pull/2314) fix critical bugs in scheduled message delivery to WeCom and DingTalk groups, preserving case sensitivity and fixing delivery status false positives.
- **Feature: Folder Context Attachments** – [PR #2310](https://github.com/netease-youdao/LobsterAI/pull/2310) adds the ability to attach local folders as context in the Cowork prompt, sending the path instead of uploading individual files.
- **Fix: AskUser Minimize State Loss** – [PR #2312](https://github.com/netease-youdao/LobsterAI/pull/2312) resolves state loss when the "Ask User" dialog is minimized.
- **Fix: Windows Title Bar Logo** – [PR #2316](https://github.com/netease-youdao/LobsterAI/pull/2316) prevents the app logo from being compressed when the sidebar is collapsed.
- **Fix: Build Compatibility** – [PR #2309](https://github.com/netease-youdao/LobsterAI/pull/2309) ensures the build process remains compatible with ES2020 targets.

### 4. Community Hot Topics
**Hottest Issue:**
- **#2293 - [OPEN]** [重启后，多个agent下的USER.md被覆盖替换的BUG？](https://github.com/netease-youdao/LobsterAI/issues/2293) (3 comments, created 2026-07-07).  
  A user reports a critical bug where modifying the "About You" settings for one agent overwrites the `USER.md` file for all other agents upon restart. This is a major workflow blocker for users managing multiple distinct agents. The user suspects it is a regression from a recent update.

**Long-Standing Feature Requests (Stale):**
- **#1337 - [OPEN]** [【功能缺失】会话列表缺少按时间分组功能](https://github.com/netease-youdao/LobsterAI/issues/1337) – A request to group the conversation list by time intervals (Today, Yesterday, This Week). This has been open since April 2026 and has a corresponding open PR (#1338).
- **#1392 - [CLOSED]** [定时任务开关点击无反应，无法关闭](https://github.com/netease-youdao/LobsterAI/issues/1392) – A previously reported bug about scheduled task toggle buttons being unresponsive was closed today, presumably fixed by related PRs.

### 5. Bugs & Stability
**High Severity:**
- **USER.md Overwrite Bug (Issue #2293):** This is the most impactful bug reported. It prevents users from maintaining distinct profiles for multiple agents. **No fix PR exists yet.** The maintainers are likely already investigating given the severity.

**Medium Severity:**
- **IM Group Task Routing (Fixed in PR #2306 & #2314):** Several bugs related to scheduled task delivery to WeCom and DingTalk were fixed, including ID case-sensitivity issues and false delivery success reports.
- **AskUser Minimize State Loss (Fixed in PR #2312):** A stability issue where minimizing the "Ask User" prompt could lose its state/results.

**Low Severity:**
- **Windows Title Bar Logo Compression (Fixed in PR #2316):** A visual artifact.

### 6. Feature Requests & Roadmap Signals
The most active feature signal comes from the **new release itself: "delegated subagent collaboration."** This suggests the roadmap is focused on enhancing multi-agent workflows, likely a direct response to complex use-case requests.

Community feature requests with corresponding open PRs:
- **Conversation List Time Grouping (Issue #1337 / PR #1338):** Highly requested UX improvement for managing many conversations. Likely to be merged in the next minor release.
- **Workdays Schedule Option (PR #1335):** A quality-of-life feature for automation, allowing tasks to run only on weekdays.
- **JSON Import for MCP Server Config (PR #1336):** A user-driven feature to simplify the configuration of custom MCP servers by pasting JSON.

### 7. User Feedback Summary
- **Pain Points:** The primary pain point is the **USER.md overwrite bug** which is causing active workflow disruption for power users running multiple agents.
- **Dissatisfaction:** Users have expressed dissatisfaction with the **lack of time-based grouping in the conversation list**, making navigation with many sessions difficult. Another pain point was the **unresponsive scheduled task toggles** (Issue #1392), though this appears to have been resolved.
- **Use Cases:** Users are clearly leveraging LobsterAI for complex automation (scheduled IM tasks) and multi-agent orchestration (different agents for different tasks), indicating a power-user base that values customization and advanced features.

### 8. Backlog Watch
The following items remain open and have not received maintainer attention for over three months, representing a growing risk of community frustration:

- **PR #1276 & PR #1275:** Dependabot CI updates that have been open since April 2, 2026. While low-risk, these stalls can lead to CI dependency vulnerabilities.
- **PR #1331:** [功能增强：会话列表错误状态红点徽标](https://github.com/netease-youdao/LobsterAI/pull/1331) – A small, non-controversial UX improvement (adding error indicators to the session list) that has been open since April.
- **PR #1333:** [fix(agent,cowork): i18n attachment label, Escape close, delete guard](https://github.com/netease-youdao/LobsterAI/pull/1333) – A triage of three user-facing UX fixes that have been stalled for months.
- **PR #1336:** [feat(mcp): 自定义服务器配置支持 JSON 粘贴导入](https://github.com/netease-youdao/LobsterAI/pull/1336) – A community contribution for MCP configuration that has not been reviewed or merged.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for 2026-07-11.

---

### Moltis Project Digest — 2026-07-11

**1. Today's Overview**
The Moltis project is currently in a low-activity state, with no new releases and no issues updated in the last 24 hours. A single pull request (PR) remains open, indicating ongoing work but no merged contributions today. The project appears to be in a consolidation phase, likely focused on preparing for upcoming model integrations rather than addressing bugs or community feedback. The absence of any closed issues or merged PRs suggests a quiet period for maintainer activity.

**2. Releases**
None. No new releases were published today or in the immediate preceding period.

**3. Project Progress**
No PRs were merged or closed in the last 24 hours. However, there is one open PR of note:
- **#1146 (Open): Add GPT-5.6 model support** — This PR was created two days ago and remains open. It proposes registering the GPT-5.6 variants (Sol, Terra, Luna) in the OpenAI and Codex fallback catalogs, applying the documented 1.05M context window limit, and updating configuration examples. This is the only active PR, suggesting forward-looking feature work is underway.

**4. Community Hot Topics**
The only active item generating discussion is PR #1146, which received no comments or reactions in the last 24 hours. Given its recent creation, the community is likely waiting for review or further technical validation of the GPT-5.6 integration. The underlying need is clear: users want immediate support for the latest OpenAI models (GPT-5.6 Sol, Terra, Luna) to leverage improved context windows and reasoning capabilities. The lack of engagement suggests the community is either satisfied with the proposed changes or awaiting maintainer feedback before participating.

**5. Bugs & Stability**
No bugs, crashes, or regressions were reported in the last 24 hours. The project appears stable with no active stability concerns. No fix PRs are required at this time.

**6. Feature Requests & Roadmap Signals**
The primary feature signal is the open PR #1146, which directly addresses a user-facing need for GPT-5.6 model support. This is likely to be merged in the next minor version, assuming no conflicts arise. No other feature requests were logged in the past 24 hours. The focus on model catalog expansion indicates the project roadmap is prioritizing compatibility with the latest language model releases.

**7. User Feedback Summary**
No user feedback, pain points, or satisfaction reports were recorded in the last 24 hours. The absence of issues or comments suggests either a stable user experience or a lack of recent community engagement. Users who opened PR #1146 appear satisfied with the planned GPT-5.6 support, as no negative reactions were noted.

**8. Backlog Watch**
There are no unresolved issues or PRs that have been open for a significant duration without maintainer response. The only open PR (#1146) is recent (created 2026-07-09) and currently awaiting review. No backlog concerns exist at this time. Maintainers should focus on reviewing PR #1146 to keep momentum on the GPT-5.6 integration.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-11

## 1. Today's Overview
CoPaw has seen **extremely high activity** today, coinciding with the **v2.0.0 stable release** — a major milestone marking the full migration from AgentScope 1.x to AgentScope 2.0. The project processed **43 issues** (20 open, 23 closed) and **45 PRs** (20 open, 25 merged/closed) in the last 24 hours, indicating a release-day surge in both bug reporting and rapid patch delivery. Three new releases (v2.0.0 stable + two betas) were published. The community response is strong but mixed: while the release is celebrated, multiple critical regressions (sandbox explosions, memory module failures, MCP policy bypass) have surfaced, requiring urgent hotfix rounds.

## 2. Releases
Three releases were published today, with **v2.0.0** being the headline:

| Release | Type | Key Changes |
|---------|------|-------------|
| **v2.0.0** | Stable | **Runtime 2.0**: Kernel refactor based on AgentScope 2.0 ([#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078), [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846), [#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018)) |
| v2.0.0-beta.7 | Pre-release | Homepage copy/visuals update; fix: propagate `session_id` into ReMe summarize tasks ([#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938)) |
| v2.0.0-beta.6 | Pre-release | Channels module unit tests; fix: envelope passthrough of tool result error state |

**Breaking Change**: v2.0.0 drops AgentScope 1.x support entirely (#4727). Users upgrading from v1.x must migrate backend configurations and are advised to review the [upgrade guide requested by the community (#5948)](https://github.com/agentscope-ai/QwenPaw/issues/5948).

**Migration Notes**: The v2.0.0 release bundle includes updated docs ([#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932)), but users report historical messages, logs, and memories may not be fully compatible — formal migration tooling is still being requested (#5948).

## 3. Project Progress
**25 PRs merged/closed today**. Key advancements:

- **Runtime 2.0 Shipment**: v2.0.0 stable release finalized the AgentScope 2.0 migration (#4727 closed).
- **Memory Fixes**: 
  - `session_id` propagation into ReMe summarize tasks fixed ([#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938)), resolving auto-memory attribution bugs.
  - Revert of per-message time injection that caused ugly display ([#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936)).
- **MCP Access Policy**: Fix for immediate policy updates — previously, policy changes were fire-and-forget and could be ignored if transport reconnection failed ([#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949)).
- **Docs & Website**: Homepage refreshed for v2.0 ([#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940)), docs updated ([#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932)), news format refined ([#5937](https://github.com/agentscope-ai/QwenPaw/pull/5937)).
- **Regression Tests**: 43 targeted unit tests added covering install, tool-call handling, LLM timeout, and rm-protection bypass ([#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813)).

## 4. Community Hot Topics
| Issue/PR | Comments | Subject |
|----------|----------|---------|
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) [CLOSED] | 15 | Console crashes on sessions with large tool-use history |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) [CLOSED] | 12 | Breaking migration to AgentScope 2.0 (now complete) |
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) [CLOSED] | 11 | v2.0 pre-release bug tracker (retired with stable release) |
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) [OPEN] | 5 | **Critical**: Desktop shell sandbox icacls timeout → pwsh recursive explosion + 20GB memory |
| [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) [OPEN] | 4 | MCP sub-tool allow/deny policies ignored |

**Analysis**: The highest-activity issues cluster around **v2.0 release regressions**. Two themes emerge: (1) **Sandbox stability** — the desktop shell sandbox has a critical bug causing infinite process spawning and memory exhaustion (#5951). (2) **MCP policy enforcement** — sub-tool access controls are not being respected (#5947), addressed by PR [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949). The v2.0 migration tracker (#5273) was closed as the stable release shipped.

## 5. Bugs & Stability
**Critical severity:**

1. **#5951** — Desktop shell sandbox: `icacls` timeout silently swallowed → `pwsh` recursive explosion + 20GB memory. **No fix PR yet**. Author states: "can't disable, must rollback to v1.1.12.post3".
2. **#5952** — Auto-memory fails: `No module named 'agentscope.tool._builtin._scripts'` on Windows Tauri desktop app. **No fix PR yet**.
3. **#5856** — Tool_call structure lost during context compaction → 400 errors / message count mismatch. **No fix PR yet**.
4. **#5947** — MCP sub-tool access policies (allow/deny) not enforced. **Fix in PR [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949)**.

**Medium severity:**
- **#5950** — Chinese memory files trigger embedding 400 errors — truncation by character count, not token count.
- **#5946** — Agent falsely believes context was evicted → calls `recall_history` unnecessarily.
- **#5910** — Auto Memory Search generates malformed function_call for OpenAI Responses API → Cloudflare 502.
- **#5955** — WebUI agent skills display limited to 20, disabled skills hidden from view.
- **#5918** — `prd.json` format error loops forever, no way to break out.

**Regression notes**: Multiple v2.0.0-specific regressions reported — users considering rollback to v1.1.12.post3 (#5951). The rapid patch cycle (beta.6 → beta.7 → stable in 24h) suggests some issues slipped through QA.

## 6. Feature Requests & Roadmap Signals
| Issue | Request | Likelihood for v2.1 |
|-------|---------|---------------------|
| [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) | Session grouping + import/export | **High** — design proposal PR [#5943](https://github.com/agentscope-ai/QwenPaw/pull/5943) already submitted |
| [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) | KaTeX/LaTeX rendering in desktop | Medium |
| [#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954) | Permission modes — user wants 1-time approval + whitelist | Low-Medium — complex UX change |
| [#3569](https://github.com/agentscope-ai/QwenPaw/issues/3569) | Scheduled task: execution history, edit, version rollback | Low — older request, no recent traction |

**Roadmap signals**: The merging of PRs like [#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813) (regression tests) and active sandbox fixes ([#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931)) suggest **stability hardening** is the post-v2.0 priority. The session grouping feature (#5903) has a design proposal already merged, making it the strongest candidate for v2.1.

## 7. User Feedback Summary
**Positive signals:**
- Community celebration of v2.0 release (#5945: "V2.0.0正式版本,终于发布了!☀")
- Active ecosystem of first-time contributors (5+ "first-time-contributor" PRs)

**Pain points:**
- **Sandbox unusable on Windows**: #5951 — "pwsh 窗口递归爆炸,关都关不掉,内存直接封顶 20GB"
- **No upgrade path**: #5948 — "希望提供升级指南" (upgrade guide requested); users unsure if history/logs/memories are compatible
- **Erroneous loop detection**: #5906 — false positive "Doom loop" on non-repeating conversations
- **Skills UI broken**: #5955 — only 20 skills shown; disabled skills hidden from list
- **Iteration counter bug**: #5896 — counter starts from last trigger, not new message → premature "Max iterations reached"

**Underlying theme**: Users are excited about v2.0's capabilities but frustrated by **reliability regressions**. Multiple reports explicitly mention "must rollback to v1.1.12.post3" — a clear signal that v2.0.0 has stability issues that need prompt hotfixes.

## 8. Backlog Watch
| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) — Kimi API support | 87 days | CLOSED | Feature request never resolved; user reported manual addition kept failing |
| [#3502](https://github.com/agentscope-ai/QwenPaw/issues/3502) — WeChat Work connection instability | 86 days | CLOSED | "Frequent disconnection" — user reported, closed without resolution |
| [#3432](https://github.com/agentscope-ai/QwenPaw/issues/3432) — Feishu (Lark) API integration broken | 87 days | CLOSED | "权限已给到位,就是无法API对接好" — permissions configured but API still fails |
| [#3623](https://github.com/agentscope-ai/QwenPaw/issues/3623) — Multi-agent session handoff with feedback | 82 days | CLOSED | Feature request for inter-session feedback mechanism — no implementation |
| [#3571](https://github.com/agentscope-ai/QwenPaw/issues/3571) — Hide top bar for cleaner UI | 83 days | CLOSED | UX request, closed without implementation |
| [#3441](https://github.com/agentscope-ai/QwenPaw/issues/3441) — Agent reprocesses same prompt after forced stop | 87 days | CLOSED | Bug reported on v1.0.2, closed — unclear if fixed in v2.0 |
| [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) — `ValidationError: FunctionCallOutput call_id` on ARM | 85 days | CLOSED | ARM-specific validation error — user on v1.1.2, closed without fix note |

**Note**: Several long-standing issues were **closed but not necessarily resolved** — they may have been bulk-closed during the v2.0 migration. Given the regression density in v2.0.0, a **backlog audit** may be warranted to ensure known bugs weren't inadvertently dropped.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-11

## Today's Overview

ZeroClaw is in an **intense development sprint**, with 50 PRs updated in the last 24 hours (45 open, 5 merged/closed) and 19 active issues (16 open, 3 closed). Activity is heavily concentrated on **stability fixes**—particularly around runtime panics, provider compatibility, and streaming output duplication—alongside **feature work** for the web gateway, plugin system, and ACP protocol consolidation. While no new releases were cut today, the volume of PR activity suggests a v0.8.3 release is being assembled. The project shows **high velocity with moderate risk**, as several critical bugs (S1 workflow-blocked) and high-risk enhancements remain in-flight concurrently. Maintainer attention is stretched across tool-heavy runtime issues, provider-specific regressions, and the ZeroCode TUI user experience.

## Releases

No new releases were published today. The latest public release remains **v0.8.2**, though tracker issue [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) indicates v0.8.3 observability, CI, and documentation work is actively being prepared.

## Project Progress

**5 PRs merged/closed today**:

- **[#8957](https://github.com/zeroclaw-labs/zeroclaw/pull/8957) (closed):** Refactored `skills install` and `skills audit` error paths to use Fluent i18n keys for localization consistency, following earlier localization work in #8638.
- **[#8956](https://github.com/zeroclaw-labs/zeroclaw/issues/8956) (closed):** Companion issue tracking the above refactor—pre-existing install error paths now route through Fluent.
- **[#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) (closed):** Feature to expose `uses_memory` flag in CLI and cron tools was resolved—now settable via `cron_add`/`cron_update` and documented.
- **[#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) (closed):** Added `uses_memory` checkbox to web gateway UI for automation job management.
- **[#8954](https://github.com/zeroclaw-labs/zeroclaw/pull/8954) (open—new multi-arch container build):** Added `Dockerfile.alpine` producing small statically-linked musl images cross-compiled for arm64 and x86-64, enabling deployment on Apple Silicon, Proxmox, and Linux VMs.

Key features that **advanced** (significant PR activity):
- **Gateway OpenAI-compatible endpoint** ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)): Large PR adding HTTP Chat Completions API—received further review and updates.
- **In-app upgrade via web dashboard** ([#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)): Version tag → upgrade flow with release notes and auto-restart is nearing readiness.
- **Plugin system expansion** ([#8923](https://github.com/zeroclaw-labs/zeroclaw/pull/8923)): Host-mediated outbound raw TCP+TLS for channel plugins, plus webhook GET + challenge-echo verification ([#8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949)).
- **Web-search provider error tagging** ([#8890](https://github.com/zeroclaw-labs/zeroclaw/pull/8890)): HTTP failures now classified as `search_status=blocked/timeout/empty` for observability.

## Community Hot Topics

**Most active issues (by comments):**

1. **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) (6 comments, open):** Telegram multi-image bug—agent appends each image as a separate LLM request, causing duplicate outputs. **Underlying need:** The Telegram gateway lacks image-grouping logic; users sending multiple photos expect a single coherent response, not N separate turns. No fix PR yet.

2. **[#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) (3 comments, open):** Critical `SIGSEGV` in `skill-review` fork after tool-heavy turns—out-of-range slice panic kills the entire agent process. **Underlying need:** The skill-review fork assumes message history structure that compaction invalidates; users with complex multi-tool workflows crash unrecoverably. Fix PR [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) is open.

3. **[#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) (2 comments, open):** RFC to consolidate `/ws/chat` and `/acp` WebSocket channels into a single wire protocol. **Underlying need:** Users and external clients (Thunderbolt ACP) are confused by two separate protocols; maintenance burden of 2132-line `ws.rs` is unsustainable.

4. **[#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) (2 comments, open):** Request for ComfyUI/Comfy Cloud as media generation provider. **Underlying need:** Content creators want to generate and edit images/videos within agent workflows without leaving ZeroClaw; this would unlock LinkedIn post image generation and future `gen_video` tool.

**Most active PR (by context):** [#8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) — OAuth credential fallback fix for delegated sub-agents, marked `needs-author-action` but receiving maintainer attention.

## Bugs & Stability

**Critical (S1 — workflow blocked):**
- **[#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934):** Gemini function calls fail because `thought_signature` is dropped from assistant history, causing API rejection on subsequent requests. **No fix PR exists yet.** — This is the highest-severity open bug, blocking all Gemini users relying on native tool calling.

**High (S2 — degraded behavior / crashes):**
- **[#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654):** `SIGSEGV` in skill-review fork from out-of-range slice access after tool-heavy turns. **Fix PR:** [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) (open, `size:XS`—deceptively simple fix bounds-checking against fork compaction).
- **[#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810):** Telegram documentation is incorrect, leading to broken setups. **No fix PR.**
- **[#8936](https://github.com/zeroclaw-labs/zeroclaw/issues/8936):** `loop_detector::hash_value` deep-clones entire tool-args JSON tree on every call—transient allocation and RSS growth amplifier on long tool-heavy turns. **No fix PR.**
- **[#8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929):** Streamed narration duplicated when final display text is trimmed—user-visible duplicate output. Same root cause as [#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952) (whitespace-triggered duplication). **No fix PRs.**
- **[#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945):** ZeroCode input box blocks macOS system text replacements. **No fix PR.**
- **[#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944):** ZeroCode transcript mouse copy blocks word-level text selection. **No fix PR.**
- **[#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950):** Telegram `setMyCommands` fails with `BOT_COMMANDS_TOO_MUCH` when tools+skills+builtins exceed 100 commands—command menu never registers. **No fix PR.**

**Medium (S3 — minor):**
- **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514):** Telegram multi-image request duplication (minor UX annoyance, no data loss).

**Regression watch:** The narration duplication bugs ([#8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929), [#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952)) may be recent regressions introduced by streaming pipeline changes—both reported in last 24 hours.

## Feature Requests & Roadmap Signals

**High-probability for v0.8.3:**
- **OpenAI-compatible HTTP endpoint** ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)) — likely the flagship feature, enabling IDE extensions and orchestrator integration.
- **Per-agent in-flight prompt counter** on web dashboard ([#8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905)) — direct UX improvement for multi-agent setups.
- **Multi-arch Alpine container** ([#8954](https://github.com/zeroclaw-labs/zeroclaw/pull/8954)) — deployment enablement for Apple Silicon and resource-constrained environments.
- **ACP agent selection via `?agent=` query param** ([#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958)) — requested by Thunderbolt ACP client integration; likely fast-tracked since it's a small change with high external utility.

**Medium-term signals:**
- **Consolidated WebSocket protocol** ([#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798)) — architectural RFC; could be v0.9.0 material given scope (merging `/ws/chat` and `/acp`).
- **ComfyUI/Comfy Cloud media provider** ([#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)) — growing demand from content creation users.
- **Per-cron `uses_memory` flag** is now shipped (closed), enabling memory-aware scheduled tasks.
- **Plugin TCP/TLS support** ([#8923](https://github.com/zeroclaw-labs/zeroclaw/pull/8923)) — foundational for external service integrations.

## User Feedback Summary

**Pain points (real user reports):**
1. **Gemini users are blocked** ([#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934)): Functional tool calling with Gemini is completely broken after the first call—this is the most urgent user-facing issue.
2. **Agent crashes on complex tasks** ([#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)): Users with tool-heavy workflows hit unrecoverable `SIGSEGV` crashes; trust in reliability is eroded.
3. **Telegram channel is fragile** ([#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514), [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950), [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)): Multi-image bugs, command registration failures, and wrong docs frustrate Telegram power users.
4. **ZeroCode TUI UX regressions** ([#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945), [#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944)): macOS users report broken text replacements and selection behavior—likely introduced by recent TUI improvements.
5. **Streaming output duplication** ([#8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929), [#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952)): Users see duplicated narration text, undermining the streaming experience.

**Satisfaction signals:**
- Positive engagement with the **ACP protocol consolidation RFC** ([#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798)) and **Thunderbolt integration** ([#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958))—external tooling interest is growing.
- The **multi-arch container work** ([#8954](https://github.com/zeroclaw-labs/zeroclaw/pull/8954)) addresses long-standing deployment friction on Apple Silicon and Proxmox.

## Backlog Watch

**Issues needing maintainer attention (long-unanswered):**
- **[#8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571)** (PR, `needs-author-action` since July 1): OAuth credential fallback fix blocked awaiting author response—11 days stale.
- **[#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960)** (PR, `stale-candidate` since June 19): Pipeline tool sub-tool execution bypassing per-agent `ToolAccessPolicy`—22 days with no author updates, marked stale.
- **[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** (PR, `needs-author-action`): Large OpenAI endpoint PR—maintainers need author to address review feedback.
- **[#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)** (issue, open since May 10): ComfyUI provider request—no maintainer response in 2 months despite 2 comments.
- **[#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934)** (issue, open since yesterday): S1 Gemini blocker—no maintainer assignee or fix PR yet.

**Risk indicator:** The high number of `needs-author-action` PRs (at least 3) suggests **maintainer bandwidth is stretched**—contributors may be waiting for reviews while authors are waiting for requested changes. The project would benefit from a maintainer triage pass to unstick these.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*