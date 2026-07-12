# OpenClaw Ecosystem Digest 2026-07-12

> Issues: 456 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-12 02:55 UTC

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

Here is the OpenClaw project digest for July 12, 2026.

---

## OpenClaw Project Digest: 2026-07-12

### 1. Today's Overview
Project activity remains high, with 456 issues and 500 PRs updated in the last 24 hours, indicating a very active community and development cycle. A new beta release, `v2026.7.1-beta.5`, was published, featuring a flagship "conversational onboarding" system. While the volume of open bugs (233 open issues) is notable, the project demonstrates strong momentum in addressing them, with a near 1:1 ratio of open to closed items in the last day. Several critical stability regressions remain under active investigation.

### 2. Releases
- **New Version: `v2026.7.1-beta.5`** ([Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.5))
- **Highlights & Changes:**
    - **Conversational Onboarding:** The "Crestodian" system now powers a real agent-loop for initial setup across CLI, web, and macOS apps. This includes AI-guided provider configuration, model-judged approvals for specific operations, masked credential prompts, and deterministic fallback when no local model is available.
    - No specific breaking changes or migration notes were detailed in the release highlights.

### 3. Project Progress
In the last 24 hours, **223 issues were closed** and **250 PRs were merged/closed**.
- **Feature Advances:**
    - **Session State Management:** Significant progress continues on "Path 3" for core session/transcript storage, with a key refactoring PR (`#96625`) merging session and transcript storage into a unified SQLite backend (see Issue [#88838](https://github.com/openclaw/openclaw/issues/88838)).
    - **Tool Fixes:**
        - A fix was merged to prevent guard payload-less media blocks from erasing tool-result text (PR [#104755](https://github.com/openclaw/openclaw/pull/104755)).
        - A fix was merged for Discord to retry stale preview cleanup after final delivery (PR [#104893](https://github.com/openclaw/openclaw/pull/104893)).
    - **Fixes & Refinements:**
        - **Model Handling:** Several fixes were merged or proposed for model configuration, including adding timeouts for Amazon Bedrock discovery (PR [#104841](https://github.com/openclaw/openclaw/pull/104841)) and resolving an issue where Groq's Llama model would immediately fail with a 413 error due to excessive token limits (PR [#104904](https://github.com/openclaw/openclaw/pull/104904)).
        - **Platform Polish:** The Android app was updated to improve workspace file navigation by showing the full folder path and adding a refresh button (PR [#104873](https://github.com/openclaw/openclaw/pull/104873)).
        - **Bug Fixes:** A critical fix for the `clawrouter` extension corrected a month-off-by-one error in usage reset tracking (PR [#104876](https://github.com/openclaw/openclaw/pull/104876)).

### 4. Community Hot Topics
The most active and engaged discussions highlight major user pain points:
- **Linux/Windows App Support:** Issue [#75](https://github.com/openclaw/openclaw/issues/75) (110 comments, 81 👍) remains the most requested feature. Users are urgently seeking feature parity with the macOS app, reflecting a strong desire for a cross-platform desktop experience.
- **Unreadable Tool Outputs:** Issue [#99241](https://github.com/openclaw/openclaw/issues/99241) (21 comments) and Issue [#104721](https://github.com/openclaw/openclaw/issues/104721) (11 comments, 1 👍) describe a severe regression where tool results are replaced by the literal `"(see attached image)"` placeholder, making the agent effectively blind to its own outputs. This is a top concern for users relying on long-running workflows.
- **Session & Gateway Stability:** Several highly-commented issues, including [#86538](https://github.com/openclaw/openclaw/issues/86538), [#55334](https://github.com/openclaw/openclaw/issues/55334), and [#84903](https://github.com/openclaw/openclaw/issues/84903), detail systemic problems with session write-lock timeouts, unbounded memory growth, and single stalled sessions blocking the entire gateway. These are core stability concerns affecting reliability.

### 5. Bugs & Stability
Several severe bugs were reported or remain active, with a focus on session and memory stability:
- **Severity: P0**
    - **Bug:** All tool results returning the literal string `"(see attached image)"`. This is a regression blocking an unknown number of workflows. **Open**, Issue [#104721](https://github.com/openclaw/openclaw/issues/104721).
- **Severity: P1**
    - **Bug:** Embedded prompt cache breaks across session boundaries, causing model-visible tool inventory to change mid-session. **Open**, Issue [#102175](https://github.com/openclaw/openclaw/issues/102175).
    - **Bug:** A single stalled agent session blocks the entire Gateway event loop, causing widespread failures. **Closed**, Issue [#84903](https://github.com/openclaw/openclaw/issues/84903).
    - **Bug:** Gateway memory grows to 1GB+ at idle and causes silent cron job failures. **Open**, Issue [#87109](https://github.com/openclaw/openclaw/issues/87109).
    - **Bug:** Gateway crashes on an unhandled `FsSafeError` when a subagent spawns after its workspace is deleted. **Open**, Issue [#103917](https://github.com/openclaw/openclaw/issues/103917).
    - **Bug:** Missed context overflow error leads to data loss (append mode not supported by write tool). **Open**, Issue [#40001](https://github.com/openclaw/openclaw/issues/40001).
- **Severity: P2**
    - **Bug:** Legacy state migration warnings persist even after running `openclaw doctor --fix`. **Open**, Issue [#90213](https://github.com/openclaw/openclaw/issues/90213).

### 6. Feature Requests & Roadmap Signals
- **Security & Trust:** Top requested features focus on security: **Memory Trust Tagging** (Issue [#7707](https://github.com/openclaw/openclaw/issues/7707)), **Masked Secrets** (Issue [#10659](https://github.com/openclaw/openclaw/issues/10659)), **Filesystem Sandboxing** (Issue [#7722](https://github.com/openclaw/openclaw/issues/7722)), and a **Denylist for Exec-Approvals** (Issue [#6615](https://github.com/openclaw/openclaw/issues/6615)). These are likely to be a major focus for the next minor release.
- **Scalability & Architecture:** The **Distributed Agent Runtime** RFC (Issue [#42026](https://github.com/openclaw/openclaw/issues/42026)) is a significant proposal to split the monolithic gateway into a control plane and agent runtime. This indicates the project is looking ahead to enterprise-scale deployments.
- **Next Version Likely:** Based on current activity, the `v2026.7.x` stable release will likely include the new **Conversational Onboarding** and the **SQLite session migration** (PR #96625). The **Masked Secrets** and **Filesystem Sandboxing** features are strong candidates for the next feature cycle.

### 7. User Feedback Summary
- **Pain Points:** The most vocal pain points center on **stability and reliability**. Users report gateway OOMs (Issues [#55334](https://github.com/openclaw/openclaw/issues/55334), [#54155](https://github.com/openclaw/openclaw/issues/54155)), silent cron failures (Issue [#87109](https://github.com/openclaw/openclaw/issues/87109)), and sessions that get wedged or lose data (Issues [#86538](https://github.com/openclaw/openclaw/issues/86538), [#40001](https://github.com/openclaw/openclaw/issues/40001)). The **`"(see attached image)"` bug** is a critical regression that breaks core agent functionality.
- **Satisfaction:** The high volume of feature requests and engagement suggests a dedicated user base that is actively shaping the product. The release of the `AI-guided provider setup` (Crestodian) addresses a top friction point (new user onboarding).
- **Use Cases:** Use cases are diverse, ranging from simple Telegram bots to complex multi-agent systems with cron jobs and webhooks. The demand for **Linux/Windows desktop apps** (Issue [#75](https://github.com/openclaw/openclaw/issues/75)) indicates a desire to move beyond mobile as the primary interface for power users.

### 8. Backlog Watch
These are significant, high-engagement items that appear to be lacking recent maintainer action:
- **Issue #75 - Linux/Windows Clawdbot Apps:** Despite being the most commented and upvoted issue by a wide margin, it has been open since January 2026 and is stuck in a "needs-product-decision" state. This is a major signal for missing multi-platform support.
- **Issue #42026 - Distributed Agent Runtime RFC:** This architectural proposal has been open for four months and has significant implications for the project's future. The "needs-maintainer-review" status suggests a decision is pending.
- **Issue #6615 - Denylist for Exec-Approvals:** A highly-liked (7 👍) security feature request from February 2026 that remains in "needs-maintainer-review." It represents a clear, specific user need for security policy control.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent open-source ecosystem as of July 12, 2026.

---

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem is experiencing a massive bifurcation between rapid feature iteration and critical stability maintenance. While flagship projects like OpenClaw and ZeroClaw push architectural boundaries with conversational onboarding, goal-mode implementation, and WASM plugin runtimes, the rest of the ecosystem is struggling with the fallout from aggressive release cycles. A clear pattern emerges: projects that shipped major versions in the last two weeks (CoPaw, NanoBot) are absorbing significant user pain from data migration failures and security regressions, while older, more stable projects (Moltis, LobsterAI) have gone nearly dormant. The community is demanding enterprise-grade reliability—gateway memory leaks, session corruption, and missing cross-platform support dominate user feedback across all active projects.

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Health Score | Key Signal |
|---------|-------------|-----------|---------------|--------------|------------|
| **OpenClaw** | 456 | 500 | ✅ v2026.7.1-beta.5 | **High** | 233 open bugs, but near 1:1 close ratio |
| **ZeroClaw** | 50 | 49 | ❌ | **High** | Deep v0.8.3 milestone work, 1:49 merge ratio |
| **Hermes Agent** | 50 | 47 | ❌ | **Moderate** | High-quality fix pipeline, but 50+ open issues |
| **CoPaw** | 24 | 7 | ❌ | **Low** | Post-v2.0.0 crisis: critical regressions on Windows, data migration |
| **NanoBot** | 22 | 23 | ❌ | **Moderate** | Security hardening phase (42 findings), P0 bugs unaddressed |
| **IronClaw** | 8 | 50 | ❌ | **Moderate** | Extension-runtime train active, Windows/CI blockers |
| **PicoClaw** | 1 | 3 | ❌ | **Moderate** | Steady; merged skill-state management; Matrix reconnection bug open |
| **NanoClaw** | 2 | 7 | ❌ | **High** | Strong throughput; Guarded Actions nearing completion |
| **LobsterAI** | 3 | 1 | ❌ | **Critical** | All items stale for 3+ months; no maintainer response |
| **NullClaw** | 2 | 0 | ❌ | **Low** | Maintenance phase; low contribution volume |
| **Moltis** | 0 | 1 | ❌ | **Stable/Idle** | One open CalDAV fix PR; no community engagement |
| **TinyClaw** | 0 | 0 | ❌ | **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | ❌ | **Inactive** | No activity |

### 3. OpenClaw's Position

OpenClaw retains its position as the **core reference implementation** and most active project by volume (456 issues, 500 PRs updated in 24 hours). Its advantages include a **vastly larger community** (233 open bugs but 223 closed in one day), a **beta release cadence** with flagship features like the Crestodian conversational onboarding system, and a **broad platform reach** (CLI, web, macOS, Android, Discord, Telegram). However, the project's primary technical differentiation—its **SQLite session unification** (PR #96625) and **Distributed Agent Runtime RFC** (#42026)—positions it for enterprise-scale deployments that no peer project is attempting.

Conversely, OpenClaw's **Linux/Windows desktop gap** (Issue #75, 110 comments, 81 👍) is a critical weakness that smaller projects have already addressed. NanoBot, Hermes Agent, and IronClaw all offer cross-platform desktop experiences. The **`"(see attached image)"` regression** (P0) is a severe trust-eroding bug that, if unresolved for another release cycle, could drive power users toward ZeroClaw or Hermes Agent for reliable tool execution.

### 4. Shared Technical Focus Areas

The following requirements are emerging **across multiple projects**:

| Technical Focus | Projects Affected | Specific Needs |
|----------------|------------------|----------------|
| **Prompt Caching & Prefix Stability** | OpenClaw, NanoBot, ZeroClaw | Local model perf (Ollama) breaks without stable system prompts; 3+ projects working on runtime context opt-in |
| **Session State Integrity** | OpenClaw, Hermes Agent, CoPaw | SQLite unification; context compaction fabricating requests; tool_call/tool_result pair splitting |
| **Cross-Platform Desktop Parity** | OpenClaw, IronClaw, CoPaw | Linux/Windows desktop apps; WSL2 crashes; Windows sandbox recursion |
| **Security Hardening (Gateway/API)** | NanoBot, IronClaw, ZeroClaw | API key leaks between providers; no rate limiting; no security reporting channel |
| **Multi-Agent Orchestration** | OpenClaw, Hermes Agent, ZeroClaw | Single gateway to multiple agents; goal-mode; Kanban board for agent work visibility |
| **Channel Integration Maturity** | OpenClaw, ZeroClaw, PicoClaw | Matrix reconnection; Telegram idle timeout; channel streaming parity |
| **Tool Call Reliability** | OpenClaw, CoPaw, Moltis | Tool results truncated/empty; media block erasing results; tool_call/tool_result pair splitting |
| **Data Migration (v1→v2)** | CoPaw, NanoBot, IronClaw | Silent data loss on upgrade; incompatible memory formats; broken legacy state migration |

### 5. Differentiation Analysis

**Architecture:**
- **OpenClaw** and **ZeroClaw** are moving toward **monolithic gateway + distributed agent runtime** architectures, treating the agent as a scalable service.
- **NanoBot** and **Hermes Agent** optimize for **lightweight, single-process** deployments, prioritizing low latency for local models and personal use.
- **IronClaw** distinguishes itself with **extension-runtime** and **WASM plugin** support, targeting developer-first customization.

**Target Users:**
- **OpenClaw**: Enterprise power users running complex multi-agent systems with cron jobs, webhooks, and SLA requirements.
- **NanoBot** and **CoPaw**: Personal assistant users who prioritize low-friction setup and Telegram/WeChat integration.
- **ZeroClaw** and **IronClaw**: Developer-centric workflows, with emphasis on MCP servers, WASM plugins, and CI/CD integration.
- **PicoClaw** and **NullClaw**: Hobbyist/self-hosted users running on minimal hardware (Raspberry Pi, EC2 nano).

**Feature Focus:**
- **OpenClaw**: Conversational onboarding (Crestodian), credential masking, and session state unification—emphasizing **trust and security**.
- **ZeroClaw**: Goal-mode implementation, SOP approval broker, and persistent memory—emphasizing **agent autonomy and governance**.
- **Hermes Agent**: Single-gateway multi-agent, self-evolving "Dream" blueprints, and Langfuse observability—emphasizing **agent self-improvement**.
- **CoPaw**: Windows sandbox parity, dark mode, and PyInstaller packaging—emphasizing **desktop usability** over architectural novelty.

### 6. Community Momentum & Maturity

**Tier 1: High-Velocity Iteration (Rapidly shipping, high engagement)**
- **OpenClaw**: Absolute leader in volume. High churn (233 open/223 closed) suggests maintainers are pushing hard. Health: strong but fragile.
- **ZeroClaw**: 49 open PRs with 1:49 merge ratio indicates deep architectural work. Health: strong but building toward v0.8.3/v0.9.0.
- **Hermes Agent**: 47 PRs + high-quality fix pipeline. Health: moderate due to 50+ open issues, but maintainer responsiveness is good.

**Tier 2: Stabilization & Hardening (Fixing high-severity regressions)**
- **NanoBot**: Security audit (42 findings) + prompt caching fix merged. P0 bugs unaddressed. Health: stabilize or stall.
- **CoPaw**: Post-v2.0.0 firefighting. Multiple critical bugs (Windows sandbox, data migration). Health: low but active.
- **IronClaw**: Extension-runtime train progressing. Windows/CI blockers active. Health: moderate.

**Tier 3: Steady Maintenance (Low churn, focused scope)**
- **PicoClaw**, **NanoClaw**: Both shipping small, quality PRs. No regressions reported. Health: stable.
- **Moltis**, **NullClaw**: One-off PRs, no community engagement. Health: idle/stale.

**Tier 4: Inactive/At-Risk**
- **LobsterAI**, **TinyClaw**, **ZeptoClaw**: No maintainer activity for 3+ months. Health: critical. Users should consider migrating or forking.

### 7. Trend Signals

1. **Prompt Caching is Now a Baseline Requirement** – NanoBot (#2463, #4867) and OpenClaw (#4891) are engineering around it. Local model latency (60s per turn) is unacceptable; future agents *must* support stable system prefixes. **Action: ensure prompt prefixes are deterministic and cacheable.**

2. **Security is the New Differentiator** – The 42-finding audit in NanoBot, the security reporting gap in IronClaw (#6000), and the credential leaks (#4783, #4784) indicate that the next wave of competition will be about auditability, not features. **Action: implement rate limiting, API key isolation, and signed artifacts.**

3. **Windows/Linux Desktop Users Are Underserved** – OpenClaw's Issue #75 (110 comments, 81 👍) is the most upvoted feature request across the entire ecosystem. CoPaw's Windows sandbox is broken. IronClaw's `local-dev-yolo` fails on Windows. **Action: any project targeting power users must prioritize cross-platform desktop parity.**

4. **Multi-Agent Orchestration is the Next Architecture Frontier** – OpenClaw (#42026 RFC), Hermes Agent (#62944), and ZeroClaw (#8681 goal-mode) are all building single-gateway multi-agent runtimes. The industry is moving beyond single-agent chatbots. **Action: design for multi-agent from day one; monolithic agents will be legacy in 12 months.**

5. **Channel Integration is Becoming Commodity** – Telegram, Discord, Matrix, WeChat: every project supports them. Differentiation now comes from **streaming maturity** and **reconnection resilience** (Matrix reconnection in PicoClaw, Telegram multi-message streaming in ZeroClaw). **Action: invest in channel reliability, not breadth.**

6. **Data Migration is a Trust Eroder** – CoPaw's v2.0.0 release produced 7+ critical bugs solely from broken data migration. Users ranked "silent data loss" as the #1 pain point across all projects. **Action: write comprehensive migration scripts, validate against realistic data, and provide rollback paths.**

7. **Enterprise Governance Features Are Emerging** – SOP approval brokers (ZeroClaw), masked secrets (OpenClaw), and credential pools (Hermes Agent) indicate the ecosystem is maturing toward organizational deployments. **Action: if targeting enterprise, prioritize tool access policies, audit logs, and RBAC.**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-12

## 1. Today's Overview

NanoBot shows **high activity** with 22 issues and 23 PRs updated in the last 24 hours, indicating an intensely active maintenance and development cycle. The project is in a **security hardening phase** — a comprehensive audit produced 42 findings, and multiple high-priority security fixes are being merged. A major architectural discussion around prompt prefix preservation (#2463, #4867) continues to draw attention, while the community is actively contributing fixes for crashes, multimodal content handling, and session isolation. **No new releases** were published today.

## 2. Releases

*No new releases were published on 2026-07-12.*

---

## 3. Project Progress

**6 PRs were merged or closed today:**

- **#4891 (merged)** — `refactor(agent): make runtime context opt-in and prefix-stable` — Stops injecting current time/channel/sender into every user prompt by default; enables stable system prompt prefixes for caching. This directly addresses the performance concerns raised in #4867 and #2463.
- **#4844 (merged)** — `refactor(agent): gate sustained goals behind explicit /goal` — Refactors sustained-goal workflow, replacing `long_task`/`complete_goal` with `create_goal`/`update_goal` requiring explicit user opt-in.
- **#4764 (merged)** — `fix(mcp): isolate reconnect cancel scopes to prevent gateway crash` — Fixes MCP streamable-http timeout crash (#4302).
- **#4860 (closed, stale)** — User reported missing `onboard`/`webui` commands; likely documentation discrepancy.
- **#4872 (closed, enhancement)** — Dream logic now only creates git commits on productive runs.
- **#4302 (closed, bug)** — MCP reconnect crash fix confirmed resolved.

**Features that advanced:**
- MCP lifecycle extracted into a dedicated `MCPToolProvider` (#4875, open)
- WebUI now includes guided setup flows with validation and QR handoff (#4855, open)
- Session-scoped model presets with immutable LLM runtime per turn (#4866, open)

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | Summary |
|-------|----------|---------|
| [#2463 — Prompt prefix architectural issue](https://github.com/HKUDS/nanobot/issues/2463) | **14** | Core architectural debate: NanoBot does not preserve the exact prompt prefix sent to the model, breaking OpenAI prompt caching and adding latency. |
| [#4867 — Follow-up on prefix caching for Ollama](https://github.com/HKUDS/nanobot/issues/4867) | **4** | Reports "extra 60 seconds every turn" with Ollama; calls the performance "totally unusable" with local models. |

### Underlying Needs

The community is **pressing hard for prompt caching support**. #2463 (open since March) and #4867 together represent a critical performance bottleneck for local model users. The merged PR #4891 directly addresses this by making the runtime context prefix-stable, which should enable Ollama and other providers to cache system prompts effectively. This is the highest-impact architectural change in progress.

---

## 5. Bugs & Stability

### Critical Severity (with fix PRs available)

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#4887 — Feishu tests fail due to missing `lark-oapi` dep](https://github.com/HKUDS/nanobot/issues/4887) | `dev` extras missing required dependency — tests fail with `ModuleNotFoundError` | *None yet* |
| [#4785 — `read_file` loads entire file into RAM before truncation](https://github.com/HKUDS/nanobot/issues/4785) | Multi-GB file causes OOM crash | *None yet* |
| [#4882 — Dream content diff reports empty files as modified](https://github.com/HKUDS/nanobot/issues/4882) | Empty files shown as `+0 -0` changes after initialization | *None yet* |
| [#4881 — Windows ExecTool corrupts PowerShell UTF-16 output](https://github.com/HKUDS/nanobot/issues/4881) | UTF-16LE output decoded as UTF-8, introducing NUL bytes | *None yet* |

### High Severity (fix PRs in review)

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#4777 — `/stop` cancels other users' tasks in group chats](https://github.com/HKUDS/nanobot/issues/4777) | `cmd_stop` keyed on `channel:chat_id`, not `sender_id` | [#4889 — Authorize destructive priority commands](https://github.com/HKUDS/nanobot/pull/4889) |
| [#4783 — CLI apps leak API keys to subprocesses](https://github.com/HKUDS/nanobot/issues/4783) | `os.environ.copy()` passes all provider keys to installed apps | [#4880 — Default `restrict_to_workspace=True`](https://github.com/HKUDS/nanobot/pull/4880) |
| [#4784 — Provider API keys leak between providers](https://github.com/HKUDS/nanobot/issues/4784) | `os.environ` mutation overwrites keys across providers | *None yet* |
| [#4779 — `process_direct()` bypasses all authorization](https://github.com/HKUDS/nanobot/issues/4779) | Six callers can inject messages without `is_allowed()` checks | *None yet* |
| [#4778 — 'system' channel bypasses all authorization](https://github.com/HKUDS/nanobot/issues/4778) | Zero authorization checks on system channel messages | *None yet* |

### Denial-of-Service Vulnerabilities (all open, no fixes)

| Issue | Description |
|-------|-------------|
| [#4782 — No API rate limiting on `/v1/chat/completions`](https://github.com/HKUDS/nanobot/issues/4782) | Zero throttling — attacker can drain API credits |
| [#4781 — No WebSocket connection limit](https://github.com/HKUDS/nanobot/issues/4781) | File descriptor exhaustion via unlimited `websockets.serve()` |
| [#4780 — Unbounded `asyncio.Queue` in MessageBus](https://github.com/HKUDS/nanobot/issues/4780) | No backpressure — memory exhaustion under message flood |
| [#4883 — API session lock map grows without bounds](https://github.com/HKUDS/nanobot/issues/4883) | `asyncio.Lock` stored indefinitely per `session_id` |

Fix PR for #4883: [#4890 — avoid retaining idle session locks](https://github.com/HKUDS/nanobot/pull/4890) — uses `WeakValueDictionary` to allow GC.

### Security Supply Chain Issues

| Issue | Description |
|-------|-------------|
| [#4885 — CLI app registry is unsigned code-install supply chain](https://github.com/HKUDS/nanobot/issues/4885) | Remote registries control pip/npm/uv install commands |
| [#4886 — Docker Compose disables AppArmor and seccomp](https://github.com/HKUDS/nanobot/issues/4886) | `SYS_ADMIN` + `apparmor=unconfined` + `seccomp=unconfined` |

### Multimodal Content Crashes (fix PRs available)

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#4813 — `.strip()` on list-form multimodal data raises `AttributeError`](https://github.com/HKUDS/nanobot/pull/4813) | `msg.content` can be `list[dict]` | [#4813](https://github.com/HKUDS/nanobot/pull/4813), [#4837](https://github.com/HKUDS/nanobot/pull/4837) |

---

## 6. Feature Requests & Roadmap Signals

### Strong Signals (likely in next release)

| Feature | Issue/PR | Rationale |
|---------|----------|-----------|
| **Prompt prefix caching support** | #2463, #4867, #4891 | Merged #4891 makes runtime context opt-in and prefix-stable — fundamental enabler for Ollama/OpenAI caching |
| **Session-scoped model presets** | [#4866](https://github.com/HKUDS/nanobot/pull/4866) | Persists model selection per session; captures immutable LLM runtime per turn |
| **WebUI guided setup flows** | [#4855](https://github.com/HKUDS/nanobot/pull/4855) | Productized channel setup with validation, QR handoff, safer secret handling |
| **Sustained goals gated behind `/goal`** | #4844, #4879 | Requires explicit user opt-in; prevents background tasks from blocking interaction |

### Emerging Requests

| Feature | Issue | Notes |
|---------|-------|-------|
| **Weather skill** | [#4145](https://github.com/HKUDS/nanobot/pull/4145) | New example skill (open since June; conflict-masked) |
| **Dedup reasoning items in Codex provider** | [#4021](https://github.com/HKUDS/nanobot/pull/4021) | Prevents duplicate reasoning item errors in multi-turn conversations |
| **MCP tool provider lifecycle extraction** | [#4875](https://github.com/HKUDS/nanobot/pull/4875) | Owns MCP dynamic tool lifecycle state, routing through provider |

### Prediction

**Next release will focus on:** (1) prompt prefix stability for caching (already merged), (2) security hardening from the 42-finding audit (partial fixes in review), (3) WebUI onboarding improvements, and (4) sustained-goal opt-in gating. The **prompt caching fix alone should dramatically improve local model performance**, addressing the #1 community pain point.

---

## 7. User Feedback Summary

### Expressed Pain Points

| Feedback | Source | Severity |
|----------|--------|----------|
| **"Extra 60 seconds to every single turn"** with Ollama local models | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | **Critical** — "totally unusable with Ollama and 32 GB of VRAM" |
| **"nanobot onboard" and "nanobot webui" commands don't exist** despite being mentioned on website | [#4860](https://github.com/HKUDS/nanobot/issues/4860) | High — documentation mismatch frustrates new users |
| **"Dream creates empty commits on every run"** — noisy git history | [#4872](https://github.com/HKUDS/nanobot/issues/4872) | Medium — now fixed (PR merged) |
| **MCP reconnect crashes gateway** | [#4302](https://github.com/HKUDS/nanobot/issues/4302) | High — now fixed (PR #4764 merged) |

### Satisfaction Signals

- The **community-driven security audit** by hamb1y (42 findings in #4815) demonstrates active security-conscious contributor engagement.
- Multiple contributors are actively submitting fixes (adabarbulescu, chengyongru, hamb1y, franciscomaestre, Kokeip, Re-bin, axelray-dev, Xingkai98, bjoshuanoah, sumleo).
- The sustained-goal refactor (#4844, #4879) shows the maintainers are responsive to user feedback about blocking behavior.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority Signal |
|-------|-----|-----------------|
| [#2463 — Prompt prefix architectural issue](https://github.com/HKUDS/nanobot/issues/2463) | **109 days** (since March) | **Critical** — 14 comments, core performance blocker; fix #4891 only partially addresses by making prefix stable |
| [#4021 — Codex reasoning item dedup](https://github.com/HKUDS/nanobot/pull/4021) | **46 days** (since May) | Medium — conflict-masked, but fixes multi-turn conversation breaks |
| [#4145 — Weather skill](https://github.com/HKUDS/nanobot/pull/4145) | **41 days** (since June) | Low — conflict-masked example skill |
| [#4785 — `read_file` OOM crash](https://github.com/HKUDS/nanobot/issues/4785) | **6 days** | **High** — no fix PR; multi-GB file accessible to agent causes gateway crash |
| [#4784 — API key leakage between providers](https://github.com/HKUDS/nanobot/issues/4784) | **6 days** | **High** — security vulnerability with no fix PR |
| [#4779 — `process_direct()` authorization bypass](https://github.com/HKUDS/nanobot/issues/4779) | **6 days** | **Critical** — 6 callers bypass all channel-level authorization |
| [#4887 — Feishu test dependency missing](https://github.com/HKUDS/nanobot/issues/4887) | **1 day** | Medium — breaks developer workflow for contributors |

### Merged PRs with Unresolved Dependencies

- **#4891 (merged)** — Runtime context opt-in. Depends on #4844 (also merged). This forms the foundation for prompt caching but will likely need follow-up provider-specific changes in Ollama and OpenAI adapters.

### Wildcards

- The **42-finding security audit** (#4815) is likely to spawn many more fix PRs in the coming weeks. Maintainers should prioritize the authorization bypasses (#4777, #4778, #4779) and DoS vectors (#4780-#4782) before the supply-chain issues (#4885, #4886), as the former are actively exploitable in production deployments.

---

*Generated from GitHub data for NanoBot (github.com/HKUDS/nanobot) — 2026-07-12*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for July 12, 2026.

---

## Hermes Agent Project Digest — 2026-07-12

### 1. Today's Overview
The project is experiencing a high-volume day with **50 active Issues** and **47 open PRs**, indicating a significant spike in community and development activity. While no new releases were published today, the contribution pipeline is exceptionally robust with numerous fix and feature PRs being submitted. The backlog is actively being addressed, particularly around security hardening, session state management, and platform-specific bugs (Windows/WSL2). Overall project health appears strong but faces pressure from a large queue of new issues, many of which are duplicates or require reproduction.

### 2. Releases
**No new releases** were published in the last 24 hours. The latest version remains v0.18.2 (2026.7.7.2).

### 3. Project Progress
**Merged/Closed PRs Today: 3**
- **[PR #62941]** - **fix(telegram):** Added `HERMES_TELEGRAM_HTTP_MEDIA_WRITE_TIMEOUT` for large file uploads, addressing a critical issue where uploads >~15 MB timed out.
- **[PR #62916]** - **feat:** Added native OpenCode Go provider to the Hermes Desktop GUI (sweeper:implemented-on-main).
- **[PR #62948]** - **fix:** Resolved `write_file` silently failing when content exceeds ~8 KB.

**Key Features Advanced:**
- **[PR #62944]** - A major rebase of the "single gateway, multiple agents" feature onto current `main` (supersedes #25660). This is a significant architectural enhancement for multi-agent management.
- **[PR #62946]** - **Experimental:** Introduced a "Dream" weekly blueprint and Langfuse self-observation for cron jobs, pushing the boundaries of agent self-improvement.

### 4. Community Hot Topics
The community is deeply engaged in security, session management, and system reliability.

- **[Issue #38240]** (`comments: 21`) — **Skills index is stale or degraded.** An automated probe has been failing since June 3, highlighting a potential CI/CD or data pipeline issue affecting the Skills Hub. This is a long-running open concern.
- **[Issue #35357]** (`comments: 6`) — **[Security] Tirith approval gate does not cover non-shell tools.** A critical security gap where tools like `write_file` and `send_message` bypass the human-in-the-loop approval system. This reflects a high priority on agent safety.
- **[Issue #9403]** (`comments: 5`) — **Feat(pricing):** A feature request for pricing overrides, contract pricing, and a sync CLI. The community is actively pushing for commercial/enterprise billing capabilities.
- **[Issue #32925]** (`👍: 11`) — **Feature Request: Integrate Microsoft SkillOpt.** The community shows strong support (11 thumbs up) for integrating this self-evolving agent skill optimizer, indicating a desire for autonomous agent learning.

### 5. Bugs & Stability
Several critical and high-severity bugs were reported today, with many already having corresponding fix PRs.

**P1 (Critical):**
- **[Issue #62557]** — **Hermes Desktop leaks bracketed-paste markers** into user messages, corrupting persisted content. Affects session state.
- **[Issue #62365]** — **Context compaction fabricates user requests** that were never made. A severe data integrity issue in long-running conversations. Risk to session state.
- **[Issue #62723]** — **Config migration silently drops platforms section** in multi-profile setups, causing loss of Feishu bot configuration.

**P2 (High):**
- **[Issue #62914]** — `_emit_pending_fallback_notice()` crashes API calls with `AttributeError` on fallback success path due to version skew.
- **[Issue #62936]** — Telegram uploads >~15 MB always fail with `TimedOut`; env variable has no effect. **Fix PR #62941 has been merged.**
- **[Issue #62940]** — Gemini parallel tool calls get concatenated, dropping arguments as `{}`.
- **[Issue #62950]** — **Unbounded in-memory caches** accumulate in long-running gateway/TUI processes, threatening memory leaks in production.
- **[Issue #54296]** — Rust panic (`trap int3`) in `ThreadPoolSingl` during gateway shutdown on WSL2.
- **[Issue #53995]** — Gateway pymalloc memory leak causes repeated hard crashes on Windows.
- **[Issue #62948]** — `write_file` silently fails for content > ~8 KB (duplicate). **Fix PR merged.**
- **[Issue #62905]** — Cron tool calls can route to interactive approval after gateway restart, yielding silent no-op jobs.

### 6. Feature Requests & Roadmap Signals
The community is signaling a clear desire for **enterprise-grade features** and **stability**.

- **Enterprise/Commercial Features:** **[Issue #9403]** (pricing overrides/contracts) and **[Issue #38975]** (full custom OpenAI-compatible provider setup in Desktop UI) suggest a push toward business/custom deployment scenarios.
- **Multi-Agent Architecture:** The massive rebase PR **#62944** is a strong signal that the "Single Gateway, Multiple Agents" feature (#25660) is being fast-tracked. This is likely the next major architectural release.
- **Self-Evolving Agents:** **[Issue #32925]** (Microsoft SkillOpt) and the experimental **PR #62946** ("Dream" weekly blueprint) indicate a roadmap direction toward agents that self-improve and self-correct without manual intervention.
- **Clock Awareness:** **[Issue #62904]** ("LLM agent has no internal clock") is a recurring UX pain point that may drive a "time awareness" infrastructure fix.

### 7. User Feedback Summary
- **Pain Point (Security):** Users are dissatisfied with the **Tirith approval gate gap** (Issue #35357). The lack of human-in-the-loop for non-shell tools is a trust and safety blocker for enterprise users.
- **Pain Point (Reliability):** **Session corruption** is a major frustration. Issues like #62557 (bracketed-paste leaks) and #62365 (fabricated requests) erode trust in long-running conversations.
- **Pain Point (Platform):** **Windows and WSL2 stability** is a recurring theme (#53995, #54296, #62884). Users on these platforms are experiencing crashes, memory leaks, and blank screens.
- **Satisfaction Signal:** The community is actively contributing **high-quality fix PRs**, indicating a dedicated developer base that is willing to invest time in improving the project's core stability.

### 8. Backlog Watch
The following items require maintainer attention due to age, severity, or lack of response.

- **[Issue #38240]** (Created: 2026-06-03) — **Skills index watchdog failing for over a month.** This automated CI failure is a "canary in the coal mine" for the site deployment pipeline. It has 21 comments and no resolution.
- **[Issue #690]** (Created: 2026-03-08) — **MCP Server Management UI/CLI.** This foundational feature request has been open for over four months with no clear roadmap commitment. It affects the core user experience of managing third-party tool integrations.
- **[Issue #8040]** (Created: 2026-04-12) — **Credential pool TOCTOU race condition.** This is a **security vulnerability** (cross-process file access) that has been open for three months with only 3 comments. Requires a high-priority architectural fix.
- **[Issue #13126]** (Created: 2026-04-20) — **Slack TTS voice reply never sent.** A long-standing platform-specific bug on Slack that is still open without reproduction.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-12

## Today's Overview
Activity remains moderate with one new issue and three pull requests touched in the last 24 hours. A critical Matrix sync bug was reported last week and is still open without an associated fix PR, raising stability concerns for users relying on Matrix connectivity. The community continues to contribute meaningful enhancements, with one PR (#3249) already merged that adds skill disable/enable state and cron run-now functionality. No new releases were published today, and the project appears to be in a steady development phase with maintainer attention distributed across several open PRs and issues.

## Releases
No new releases today. The latest stable release remains **v0.2.9** as referenced in the open bug report (#3203).

## Project Progress
One pull request was merged/closed today:

- **#3249 (CLOSED) — Skill enable/disable state + cron RunNow**  
  *Author: m4n3z40*  
  Adds support for toggling skills on/off via a `workspace/skills/.skills-state.json` file — when a skill is disabled, it disappears from the `<skills>` context on the next turn without requiring a restart. Also introduces a "RunNow" button for cron-based skills. This PR was forked from the Ethos P6.6 feature set and has been integrated into mainline PicoClaw.

Two additional PRs remain open and were updated recently:
- **#3225 (OPEN)** — Agent-specific runtime overrides (max_tokens, summarization thresholds) — last updated 2026-07-11
- **#3222 (OPEN)** — Refactor of DeltaChat implementation, removing 200 lines of legacy code — last updated 2026-07-11

## Community Hot Topics
**Most commented issue:**
- **#3203 — [BUG] Matrix sync loop has no reconnection logic**  
  *Author: weissfl | Updated: 2026-07-12 | Comments: 2*  
  The most active issue today. The user describes a silent failure where Matrix `/sync` long-polling dies after any network disruption or homeserver restart, with no automatic reconnection. Because the main process stays alive, systemd's `Restart=on-failure` does not trigger. No solution or workaround has been offered yet.  
  **🔗** https://github.com/sipeed/picoclaw/issues/3203

**Underlying need:** Users relying on Matrix as a communication channel need robust network resilience. The current behavior means a momentary outage can permanently break the agent's Matrix presence without any visible error — a classic "silent death" scenario that undermines reliability expectations.

## Bugs & Stability
**High Severity:**
- **#3203 — Matrix sync loop has no reconnection logic**  
  Reported 2026-07-02, updated today. This is a stability-critical bug that causes permanent connectivity loss without restart. No fix PR exists yet. Severity: **High** — affects all Matrix users; silent failure makes debugging difficult.

**No other bugs or regressions reported in the last 24 hours.**

## Feature Requests & Roadmap Signals
The open PRs hint at the community's direction:

- **#3225 — Agent-specific runtime overrides**  
  Users want per-agent configuration for `max_tokens`, summarization thresholds, and split_on_marker. This suggests a growing need for fine-grained control over how different agents behave, moving beyond one-size-fits-all settings. Likely to appear in the next minor release (v0.3.0 or similar).

- **#3222 — DeltaChat refactor**  
  Cleanup of legacy code, removal of hardcoded relay lists, and better secret management. This indicates ongoing maintenance to modernize and secure communication channels, likely a precursor to adding more DeltaChat features.

The merged #3249 (skill enable/disable + cron RunNow) signals that UI-based skill management and on-demand cron execution are now first-class features, which may inspire further UI improvements in future releases.

## User Feedback Summary
Pain points expressed this week:
- **Matrix reliability** (#3203): A clear frustration — the agent appears online but is actually disconnected. The workaround (manual restart) is inadequate for production or always-on deployments.
- **Configuration granularity** (#3225): Users want to customize agent behavior without editing core configs, suggesting current defaults don't fit all use cases.

No positive feedback was captured in the data, but the merged PR (#3249) likely addresses a prior request for skill-state management, which should improve user satisfaction for those managing complex skill sets.

## Backlog Watch
**Issues needing maintainer attention:**
- **#3203 — Matrix reconnection bug** (OPEN, updated today, no assignee)  
  This is the most critical item in the backlog. It has been open for 10 days with no resolution. Given it affects a core communication channel, maintainer prioritization is recommended.  
  **🔗** https://github.com/sipeed/picoclaw/issues/3203

**PRs needing maintainer attention:**
- **#3225 — Agent-specific runtime overrides** (OPEN since 2026-07-04, stale)  
  Last updated 2026-07-11 but no reviewer activity. The PR appears complete with tests; it may need a maintainer's review to merge.  
  **🔗** https://github.com/sipeed/picoclaw/pull/3225

- **#3222 — DeltaChat refactor** (OPEN since 2026-07-03, stale)  
  A large cleanup PR (-200 LOC) that has received no comments. May need review to ensure no regression in DeltaChat functionality.  
  **🔗** https://github.com/sipeed/picoclaw/pull/3222

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-12

## Today's Overview
Project activity is **high**, with 7 pull requests updated and 2 new issues filed in the last 24 hours. The core team is converging on two major architectural initiatives—**Guarded Actions** (PR #2986) and **One-Door Delivery for Tasks** (PR #2988)—both in active review. One RFC on *temporal sessions* was opened and closed as a vision share (#3018), signaling ongoing design exploration. No new releases were published today. Overall, the project shows strong engineering throughput and disciplined scope management.

## Releases
**None.** No new releases were published today.

## Project Progress
One pull request was merged or closed today:
- **#3018 (CLOSED)** — *RFC: temporal (incognito) sessions* — Closed as a design share / vision document rather than a merge-ready feature. The author plans to collect feedback before proceeding.

Key open PRs advancing features (all updated today):
- **#3020** — *fix(agent-runner): rescue undelivered unwrapped replies* — Addresses silent message drops when the model omits the wrapper after long tool chains (fixes issues #2369, #2393, #2404).
- **#2986** — *Guard seam: one decision function for every privileged action* — Phase 2 of guarded-actions, consolidating `guard()` as the single allow/hold/deny decision point.
- **#2988** — *Tasks: one-door delivery* — Part 3/5 of the scheduled-tasks train; mandates explicit `to` destinations for all message/file sends, eliminating single-destination fallbacks.
- **#3012** — *feat(memory): add provider-agnostic persistent memory* — Scaffolds a provider-neutral memory tree shared across agent providers.
- **#3019** — *fix(agent-runner): stall watchdog to recover from hung in-flight tools* — Addresses container kills after 30-minute stalls (zero SDK activity) due to undetected tool hangs.

## Community Hot Topics
**No issues or pull requests accumulated significant comments or reactions** in the last 24 hours. All open issues and PRs have 0 comments and 0 👍 reactions. This likely reflects that the two new issues are very recent and the PRs are primarily driven by core-team discussion (comments are not shown in the GitHub API snapshot as "undefined" but likely exist on the PRs themselves). The community appears engaged through PR review rather than public issue commentary.

## Bugs & Stability
Two new issues were filed, both open and without fix PRs yet:

**High Severity**
- **#3017** — *Windows: Visual Studio 2026 + better-sqlite3 v11.10.0 compilation fails* — Build failure on a modern Windows toolchain (VS 2026, Node.js v20/v24, Python 3.14.4). Impacts all Windows developers upgrading to the latest toolchain. Root cause likely involves the C++ compiler or SQLite native binding in `better-sqlite3`. No fix PR exists yet.

**Medium Severity**
- **#3016** — *Every rate_limit_event is logged as a quota error, even when status is "allowed"* — Regression from #2965 causing false-positive "Rate limit: quota" error logs on normal subscription installs. Reported as logging 82 false instances per week but not blocking functionality. No fix PR exists yet.

## Feature Requests & Roadmap Signals
- **Temporal (Incognito) Sessions** (PR #3018 RFC) — A design for throwaway, memory-free DM sessions. The RFC proposes ephemeral containers with no long-term memory, addressing privacy and cost use cases. While closed as not merge-ready, the design is being shared with the community for feedback. Likely to appear in a future minor release if traction is positive.
- **Provider-Agnostic Persistent Memory** (PR #3012) — A clear roadmap next-step following the tasks train. This feature will likely land in the next minor version (e.g., v2.5) to unify memory across agent providers.
- **Guard Seam** (PR #2986) — The guarded-actions phase 2 is architecturally foundational; it enables fine-grained permission dialogs, rate limiting, and audit logging. This is nearing completion and will likely be part of the next stable release.

## User Feedback Summary
**No explicit user feedback or satisfaction/dissatisfaction signals** were visible in the latest issues or PR comments. The two open issues (#3016, #3017) are concrete technical problems submitted by users—one a build blocking issue, one a noisy false-positive log—but neither includes ambient user commentary about the product experience.

## Backlog Watch
**No long-unanswered issues or PRs** were identified. All items in the daily data have been updated in the last 24-48 hours. The oldest item is #2986/2987/2988 (from 2026-07-09), all actively reviewed and updated today. There are no stale threads requiring maintainer attention.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-12

## Today's Overview
NullClaw shows low activity over the past 24 hours: 2 open issues were updated, no pull requests were touched, and no new releases were published. Both updated issues reflect user-facing concerns—one is a bug report about Telegram channel connectivity after idle time, and the other is a feature request for a `grok-cli` provider. Overall, the project appears in a maintenance-and-feature-request phase, with no active merges or releases to report today.

## Releases
No new releases were published in the last 24 hours. The latest available release remains unchanged.

## Project Progress
No pull requests were updated (open, merged, or closed) in the last 24 hours. No features or fixes advanced through PRs today.

## Community Hot Topics
Two issues received recent attention:

- **[Issue #972 — [bug] telegram channel stop respond after some idle time](https://github.com/nullclaw/nullclaw/issues/972)**  
  *Author: i11010520 | Created: 2026-06-30 | Updated: 2026-07-11 | Comments: 3*  
  This bug report describes the Telegram channel ceasing to respond after overnight idle periods, despite the backend (`nullclaw agent`) continuing to operate normally. The 3 comments suggest ongoing investigation or discussion. The underlying need is reliable 24/7 Telegram integration without silent failure.

- **[Issue #975 — Add grok-cli provider (run Grok via the grok CLI's login session, unmetered)](https://github.com/nullclaw/nullclaw/issues/975)**  
  *Author: yanggf8 | Created: 2026-07-11 | Updated: 2026-07-11 | Comments: 1*  
  A feature request to add a `grok-cli` provider following the same subprocess pattern used for `claude-cli`, `codex-cli`, and `gemini-cli`. The user highlights the benefit of unmetered access via a local Grok login session. This aligns with the project's pattern of supporting local CLI-based LLM providers.

## Bugs & Stability
One open bug was updated today:

- **Medium severity — Issue #972: Telegram channel stops responding after idle time**  
  The bug affects reliability of Telegram-based interactions after prolonged inactivity. No fix PR is linked. Potential workarounds or root causes (e.g., session expiration, timeout settings) are not yet confirmed.

No crashes, regressions, or new bug reports were filed in the last 24 hours.

## Feature Requests & Roadmap Signals
One new feature request was opened:

- **Issue #975: Add `grok-cli` provider** — This request follows an established pattern in NullClaw for integrating local CLI-based LLM clients. Given that similar providers (`claude-cli`, `codex-cli`, `gemini-cli`) already exist, this is a low-risk, high-likelihood addition for a future release. The "unmetered" aspect may appeal to users with Grok subscriptions who want to avoid API metering.

No other feature requests were active today.

## User Feedback Summary
User feedback from the active issues indicates:

- **Pain point**: Telegram integration reliability degrades after idle periods, causing user frustration and requiring manual intervention.
- **Use case**: Users are running NullClaw persistently (e.g., on EC2 instances) and expect 24/7 channel responsiveness.
- **Satisfaction**: The backend itself is reported to work well, but the Telegram channel failure undermines the user experience.
- **Desire**: Users want provider flexibility and cost control, as shown by the request for Grok CLI integration to bypass metered API access.

## Backlog Watch
No long-unanswered important issues or PRs were identified in today's data. The open issues are recent (June 30 and July 11) and have received some community/maintainer engagement. No items appear to be languishing without attention.

---

*Generated from NullClaw GitHub data (nullclaw/nullclaw) on 2026-07-12.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-12

## Today's Overview
Moderate activity with 8 issues updated in the last 24 hours (7 open) and 50 pull requests updated (37 open, 13 merged/closed). No new releases were published today. The project continues its significant extension-runtime train (three PRs in the pipeline), while CI stabilization and API compliance work (Responses API) remain active focus areas. Several community members reported critical integration gaps in the Reborn runtime, particularly around Windows compatibility and local MCP server connectivity, indicating the system is being stress-tested against real-world deployment scenarios.

## Releases
None.

## Project Progress
**13 PRs merged/closed today**, spanning multiple subsystems:

| PR | Description | Status |
|---|---|---|
| #6003 | Route workflows to canceled runner (accidental PR, deleted) | Closed |
| #5997 | Address Emulate fixture review (follow-up to #5989) | Closed |
| #5951 | Fix LLM streaming tool-call args with trailing content for DeepSeek-V4-Flash | Closed |

**Key feature advances in open PRs:**
- **Extension Runtime (PRs 2/8 and 3/8)**: BenKurrek's extension-runtime train progressed with #5995 (manifest v3 + VendorId + recipes) and #5996 (adapters + ExtensionHost + dispatch cutover)
- **Queued Message Steering (#5981)**: Forward-ported queued-message steering for busy threads (split 1/2)
- **Recoverable Error Delivery (#5965)**: Hardened detail channel so recoverable errors now reach the model with diagnostic context
- **Admin-provisioned Secrets (#5934)**: Scoping admin secrets to default agent/project scope

**CI and infrastructure:**
- #6006: Stabilized main branch libSQL coverage checks
- #6005: Fixed flaky Slack trigger hook E2E with deterministic poller tick
- #5639: New Main CI Checks workflow with staging-release promotion

## Community Hot Topics
- **#6000 — Security Reporting Gap** (0 comments, 0 👍): A community member reports a potential security finding but finds no SECURITY.md, no private vulnerability reporting enabled, and no private channel. This is **high-impact** as it blocks responsible disclosure.
- **#5999 — Windows local-dev-yolo failure** (0 comments, 0 👍): Windows users cannot run `local-dev-yolo` because `MountAlias` expects POSIX paths. This is a hard platform-level regression.
- **#5998 — No local MCP transport** (0 comments, 0 👍): Reborn cannot communicate with a local (on-device) MCP server — stdio is rejected and loopback HTTP is denied. Critical for on-premise/edge deployments.
- **#5969 (CLOSED) — GLM-5.2 model missing from opencode defaults** (1 comment, 0 👍): User had to manually configure GLM-5.2. Closed, likely fixed or documentation updated.
- **#5987 — Attestation docs too complex; request for local proxy service** (0 comments, 0 👍): Users want an easy local proxy for private inference with CVM attestation.

## Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **Critical** | #5998 | No local MCP transport — stdio rejected, loopback HTTP denied | No |
| **Critical** | #5999 | Windows: `local-dev-yolo` cannot start (POSIX path assumption) | No |
| **High** | #6000 | No security reporting channel; SECURITY.md missing | No |
| **Medium** | #5969 (CLOSED) | GLM-5.2 not in default opencode model list | Fixed (closed) |
| **Medium** | #5992 | Daily failure taxonomy: clawbench shows ~77 benchmark-defect failures, not model quality issues | No (monitoring) |
| **Low** | #5968 | HTTP tool fails with third-party APIs without MCP (Attio) | No |
| **Low** | #5990 | Responses API gaps in semantic fidelity, lifecycle safety, external tools | No (tracked) |

**Notable stability trends:**
- The Windows platform regression (#5999) and local MCP transport gap (#5998) represent two significant deployment blockers for non-Linux users.
- #5992's daily taxonomy shows the clawbench suite is still dominated by benchmark defects (~77+ failures), not model quality issues — a ongoing test infrastructure concern.

## Feature Requests & Roadmap Signals
- **#5987 — NEAR AI Attestation Proxy Service**: Users strongly desire a simple local proxy that handles CVM attestation verification transparently. This suggests a user-facing tool (like `nearai proxy start`) could be a high-value addition.
- **#5968 — Generic HTTP tool improvements**: The HTTP tool's failure with non-MCP third-party APIs (Attio) signals demand for a native HTTP integration capability, potentially as an extension or built-in tool.
- **#5990 — Responses API completion**: The three-phase implementation plan (semantics, lifecycle, external tools) is being tracked internally.

**Predictions for next release:**
- Extension-runtime train (PRs 2/8 and 3/8) likely to land soon, enabling third-party plugin support
- CI stabilization (#6005, #6006) will reduce flaky build failures
- Windows compatibility fix (#5999) and local MCP transport (#5998) are likely to be prioritized given their blocker status

## User Feedback Summary
**Pain points:**
- **Complex attestation setup**: Users find NEAR AI attestation documentation too complex and want a turnkey local proxy (#5987)
- **Model availability**: GLM-5.2 had to be manually configured in opencode (#5969, closed)
- **Third-party integration**: HTTP tool fails against non-MCP APIs (#5968)
- **Deployment constraints**: Linux-only effectively; Windows users cannot run `local-dev-yolo` (#5999)
- **Security concerns**: No way to responsibly disclose security findings (#6000)

**Positive signals:**
- The Queued Message Steering (#5981) and Recoverable Error Delivery (#5965) show the team is actively improving user-facing reliability
- Responses API coverage (#5991) being required in PR checks demonstrates commitment to standardized API compliance
- Active community members (Anubhav-Koul, sergeiest, pranavraja99) are stress-testing the platform with real-world edge cases

## Backlog Watch
| Issue | Days Since Created | Summary | Priority |
|---|---|---|---|
| #6000 | 1 | Security reporting gap (SECURITY.md, private reporting both missing) | **Critical** — block responsible disclosure |
| #5999 | 1 | Windows `local-dev-yolo` failure | **High** — platform regression |
| #5998 | 1 | No local MCP transport | **High** — deployment blocker |
| #5992 | 1 | Daily failure taxonomy (benchmark defects) | **Medium** — test infrastructure |
| #5987 | 1 | Attestation proxy service request | **Medium** — user experience |
| #5990 | 1 | Responses API gaps | **Medium** — tracked feature |
| #5968 | 2 | HTTP tool failures with non-MCP APIs | **Low** — existing workaround |

**Long-unanswered items needing attention:**
- None of the new issues (#5998, #5999, #6000) have received any maintainer response yet (all created July 11) — this is the first actionable day for most.
- #5990's Responses API gaps (July 11) have no comments but are being tracked alongside #5991's CI enforcement PR.
- Daily failure taxonomy (#5992) is a recurring report that requires maintainer review to decide if benchmark defects warrant a dedicated fix issue.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-12

## Today's Overview

Activity on LobsterAI remains low, with **3 open issues** and **1 open PR** updated in the last 24 hours — none of which were closed or merged. No new releases or merged PRs have occurred. All items are flagged as stale, with last updates occurring 3 months ago (April 2). The project appears to be in a **quiet or maintenance-slowed phase**, with no new contributions or maintainer responses on open items. This may indicate a team focus shift, resource constraints, or a pending development cycle restart.

## Releases

No new releases today. The last known version referenced in issues is **v2026.4.1**.

## Project Progress

- **Merged/closed PRs today:** 0  
- **Open PR (unchanged):**  
  - [#1327 – ToolUse batch expand/collapse](https://github.com/netease-youdao/LobsterAI/pull/1327) — Associated with Issue #1326. Implements a toggle button for bulk expanding/collapsing tool call blocks when 2+ are present. PR has not progressed since April 2.

**Summary:** No feature advancements or fixes have been integrated today.

## Community Hot Topics

All three active issues were created on April 2 and have languished without maintainer responses, each with **1 comment** (likely the author's or minor clarification). None have received community reactions (👍 = 0). Despite low engagement, the issues represent real UX concerns:

1. **[#1326 – ToolUse batch expand/collapse](https://github.com/netease-youdao/LobsterAI/issues/1326)**  
   *User need:* Bulk interaction with multiple AI tool call blocks to improve workflow efficiency.

2. **[#1329 – Scheduled task notification channel empty](https://github.com/netease-youdao/LobsterAI/issues/1329)**  
   *User need:* A functional bug preventing channel selection in new scheduled tasks.

3. **[#1330 – Error state red dot indicator for session list](https://github.com/netease-youdao/LobsterAI/issues/1330)**  
   *User need:* Visual cue (red dot) for sessions in `error` state to enable quick problem identification.

**Underlying need:** Users are requesting better **status visibility, bulk action efficiency, and configuration functionality** — all core to improving daily workflow in Cowork sessions.

## Bugs & Stability

One confirmed bug was reported today (though created April 2):

- **[#1329 – Scheduled task notification channel empty](https://github.com/netease-youdao/LobsterAI/issues/1329)**  
  *Severity:* **High** — Blocks user from configuring notifications for scheduled tasks. No workaround mentioned.  
  *Status:* No fix PR exists. No maintainer response.

No crashes, regressions, or other bugs reported today.

## Feature Requests & Roadmap Signals

Two feature requests remain open and unaddressed:

1. **ToolUse batch expand/collapse** (#1326) — PR #1327 already exists with implementation. This seems **closest to inclusion** in the next release, pending review/merge.

2. **Error state red dot in session list** (#1330) — Request for simple UI indicator. Low implementation complexity, high usability impact.

**Prediction:** If the project's development cycle resumes, #1326 / #1327 is the most likely candidate for the next version due to the existing PR. #1330 is a lightweight addition that could easily follow.

## User Feedback Summary

- **Pain point #1:** Manual per-block tool call expansion is tedious when AI responses include multiple tool calls.  
- **Pain point #2:** No visual error feedback in session sidebar creates a poor diagnostic experience.  
- **Pain point #3:** Scheduled task notification setup is broken — "only 'not notify' is selectable," per user gongfen0121.  
- **Satisfaction indicator:** Low engagement reactions suggest users may not feel heard, or that the project's communication channels are inactive.

## Backlog Watch

All open items have gone **unanswered by maintainers for over 3 months**. This is a significant red flag for project health.

| Item | Created | Last Update | Priority |
|------|---------|-------------|----------|
| [#1326 – ToolUse batch expand/collapse](https://github.com/netease-youdao/LobsterAI/issues/1326) | 2026-04-02 | 2026-07-11 | Medium |
| [#1327 – PR for same feature](https://github.com/netease-youdao/LobsterAI/pull/1327) | 2026-04-02 | 2026-07-11 | High (needs review) |
| [#1329 – Scheduled task notification bug](https://github.com/netease-youdao/LobsterAI/issues/1329) | 2026-04-02 | 2026-07-11 | High |
| [#1330 – Error state indicator](https://github.com/netease-youdao/LobsterAI/issues/1330) | 2026-04-02 | 2026-07-11 | Medium |

**Call to action:** Community and maintainers would benefit from status updates on these items, especially the high-severity bug #1329 and the ready-to-merge PR #1327.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the **Moltis Project Digest** for **2026-07-12**.

---

## Moltis Project Digest – 2026-07-12

### 1. Today's Overview
The Moltis project experienced very low activity over the past 24 hours, with no new issues, releases, or merged pull requests. The single piece of movement is one open pull request (#1147) aimed at fixing a functional bug in the CalDAV integration. The project appears to be in a quiet phase, with no active community discussions or reported user problems. The current health is stable but idle, suggesting either a maintenance lull or that developers are focusing on internal work not reflected in the public feed.

### 2. Releases
**None.** No new versions of Moltis were published in the last 24 hours.

### 3. Project Progress
- **Merged/Closed PRs:** None.
- **Open PRs (1):**
  - **PR #1147** (fix/caldav): *Honor time range in list_events via server-side calendar query*. This is the only active pull request. It addresses a significant functional gap where the `start` and `end` parameters of the `list_events` tool were being ignored, causing every event in a calendar to be fetched regardless of the specified time range. The fix moves query logic to the server side via a proper CalDAV calendar-query.

### 4. Community Hot Topics
There are **no hot topics** today. The only open item (PR #1147) has zero comments and zero reactions. The underlying need is clear: users and tools relying on time-range filtering for calendar events were receiving incomplete or incorrect data.

### 5. Bugs & Stability
- **No bugs reported** today in the issue tracker.
- **Latent bug fixed by PR #1147:** The `list_events` function was ignoring the `_range` parameter, effectively breaking time-range filtering for all CalDAV servers. This is a **High severity** logic bug because it renders a core tool non-functional as documented. The fix exists in the open PR, but has not yet been merged.

### 6. Feature Requests & Roadmap Signals
**No new feature requests** were submitted in the last 24 hours. Based on the only open PR, the next minor or patch release is likely to prioritize:
- **CalDAV performance & correctness**: Proper server-side querying to reduce network overhead and respect user-defined time windows.
- No evidence exists of new feature planning or roadmap updates in this period.

### 7. User Feedback Summary
**No user feedback, pain points, or satisfaction signals** were recorded in the last 24 hours. The lack of issues or comments indicates either high user satisfaction, a very small active user base for this period, or that most communication is happening outside the GitHub issue tracker.

### 8. Backlog Watch
- **No long-unanswered issues or PRs** currently require maintainer attention. The only open PR (#1147) is recent (created yesterday) and awaiting review/merge. No stale items are visible in the backlog.

---

**Links:**
- PR #1147: [moltis-org/moltis/pull/1147](https://github.com/moltis-org/moltis/pull/1147)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-12

## Today's Overview

CoPaw (QwenPaw) is experiencing an **intense bug-fix phase** following the v2.0.0 release, with 24 open issues updated in the last 24 hours and zero new releases. The project is under significant **stability pressure**: the majority of issues report critical regressions and data migration failures introduced by the v2.0.0 update. Activity is high but heavily tilted toward user-reported defects rather than feature development. Four PRs were merged/closed today (all fixing the same dark-mode contrast bug), and three PRs remain open addressing scroll loading and tool result truncation.

## Releases

**No new releases today.** The last release remains v2.0.0 (reported as stable by several users, but with multiple known regressions). Users are actively requesting migration guidance from v1.x to v2.0.0.

## Project Progress

**Merged/Closed PRs today (4):**

| PR | Description | Status |
|---|---|---|
| [#5974](https://github.com/agentscope-ai/QwenPaw/pull/5974) | Dark mode text contrast fix (closed) | Merged |
| [#5973](https://github.com/agentscope-ai/QwenPaw/pull/5973) | Dark mode text contrast fix (closed) | Merged |
| [#5971](https://github.com/agentscope-ai/QwenPaw/pull/5971) | Dark mode text contrast fix (closed) | Merged |
| [#5970](https://github.com/agentscope-ai/QwenPaw/pull/5970) | Dark mode text contrast fix (closed) | Merged |

*Note: These represent iterative fixes of the same issue [#5969](https://github.com/agentscope-ai/QwenPaw/issues/5969) (dark mode readability).*

**Open PRs making progress:**

- [#5968](https://github.com/agentscope-ai/QwenPaw/pull/5968) — Fixes skills page scroll loading that stops after first 20 items (first-time contributor)
- [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) — ToolResultLimiter: standard truncation of large tool results to permanent artifact files (fixes #5946, #5929)
- [#5975](https://github.com/agentscope-ai/QwenPaw/pull/5975) — Additional dark mode contrast improvements (revision of #5974)

## Community Hot Topics

| Issue | Comments | Theme |
|---|---|---|
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) — Windows sandbox recursion/explosion | 7 | **Critical: pwsh infinite recursion, 20GB memory cap, cannot disable** |
| [#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) — OAuth login for OpenAI/Codex | 4 | Feature request (long-standing, 2+ months) |
| [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) — Skills list scroll-to-load-more broken | 4 | UI bug with progressive rendering |
| [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) — v2.0.0 infinite write/delete loop with qwen3.7-plus | 3 | **Agent loop behavior regression** |
| [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) — auto-memory fails: missing module `_scripts` | 3 | **PyInstaller packaging defect** |
| [#2664](https://github.com/agentscope-ai/QwenPaw/issues/2664) — Intel Mac support question | 3 | Unresolved platform support (3+ months) |

**Underlying needs revealed:**
- Users upgrading from v1.x to v2.0.0 are hit by **multiple data compatibility problems** (memory format, chat history mapping, tool result schemas)
- The **Windows sandbox design** is fundamentally broken for many users — pwsh spawning loops cannot be stopped
- Community needs **clearer migration documentation and upgrade guards** to avoid silent data corruption
- The **IntelliJ Mac (Intel) community** remains unaddressed after 3 months

## Bugs & Stability

**Critical severity (system unusable or data loss):**

| Issue | Problem | Status |
|---|---|---|
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | Windows sandbox: pwsh recursive explosion, 20GB memory, cannot disable | No fix PR |
| [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) | v2.0.0: agent repeatedly write/delete loop with qwen3.7-plus | No fix PR |
| [#5962](https://github.com/agentscope-ai/QwenPaw/issues/5962) | WeChat channel: orphaned tool_result after scroll eviction → 400 error | Same root cause as #5960 |
| [#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960) | Context compression splits tool_call/tool_result pairs → API 400 | No fix PR |
| [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | auto-memory fails: `No module named '_scripts'` in PyInstaller build | No fix PR |
| [#5967](https://github.com/agentscope-ai/QwenPaw/issues/5967) | Pydantic error on `parse_legacy_memory_state` after upgrade | Data incompatibility |
| [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | Chat list ↔ conversation history mapping lost after upgrade | Data incompatibility |
| [#5956](https://github.com/agentscope-ai/QwenPaw/issues/5956) | DingTalk sessions with legacy file tool results fail to load | Data incompatibility |
| [#5972](https://github.com/agentscope-ai/QwenPaw/issues/5972) | Heartbeat recovery loads stale session → orphaned tool messages → 400 | No fix PR |

**High severity (broken features but workarounds possible):**

| Issue | Problem | Status |
|---|---|---|
| [#5963](https://github.com/agentscope-ai/QwenPaw/issues/5963) | `execute_shell_command` hardcoded 60s limit, longer commands silently killed | No fix PR |
| [#5970](https://github.com/agentscope-ai/QwenPaw/issues/5970) fix PRs [#5974-#5975](https://github.com/agentscope-ai/QwenPaw/pull/5975) | Dark mode text illegible on multiple screens | Fix merged |
| [#5969](https://github.com/agentscope-ai/QwenPaw/issues/5969) | Dark mode: loop templates, chat history invisible | Fix merged |
| [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979) | Electron CLI cannot run under sandbox (root mapping) | No fix PR |
| [#5957](https://github.com/agentscope-ai/QwenPaw/issues/5957) | Enterprise WeChat: "/Internal error" after upgrade | Likely same as #5962 |
| [#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965) | PyInstaller build missing `Glob` tool submodule | Same root cause as #5952 |
| [#5977](https://github.com/agentscope-ai/QwenPaw/issues/5977) | Plugin HTTP routes lost after workspace hot-reload | No fix PR |
| [#5978](https://github.com/agentscope-ai/QwenPaw/issues/5978) | `/compact` fails on session_id with special characters | No fix PR |

**Medium/low severity:**

- [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) — v2.0.0 missing SSH offline and profiles (404 errors)
- [#5966](https://github.com/agentscope-ai/QwenPaw/issues/5966) — Question: which AgentScope kernel (2.0 vs 1.12)?
- [#5959](https://github.com/agentscope-ai/QwenPaw/issues/5959) — Script upgrade from v1 to v2 not working
- [#5958](https://github.com/agentscope-ai/QwenPaw/issues/5958) — Question: can AgentScope permission control be used?

## Feature Requests & Roadmap Signals

**New requests this week:**

| Issue | Request | Predictions |
|---|---|---|
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | Separate control for channel tool_call parameter/info visibility; truncation of tool results to n lines | **Likely next version** — aligns with PR #5953's tool result truncation work |
| [#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) | OAuth login support for OpenAI/Codex (2+ months open) | **Unlikely soon** — no maintainer engagement; blocked by higher-priority bugs |
| [#2664](https://github.com/agentscope-ai/QwenPaw/issues/2664) | Intel Mac support (3+ months) | **No signal** — no response from maintainers |

**Predicted v2.1.0 candidates:**
- Tool result truncation / artifact persistence (PR #5953)
- Dark mode CSS overhaul (already merged fixes)
- Skills page infinite scroll fix (PR #5968)
- Channel message control for tool results (#5976)

## User Feedback Summary

**Common user pain points:**
- **v2.0.0 upgrade is painful**: Multiple users report data loss, session failures, and silent errors immediately after upgrading. The migration path from v1.x to v2.0.0 is untested against realistic data.
- **Shell execution is broken**: Windows sandbox pwsh explosions (20GB memory), hardcoded 60s timeouts, and inability to run Electron apps under sandbox.
- **Channel integrations regressed**: WeChat, DingTalk, Enterprise WeChat all report "Internal error" after upgrade — all traceable to the same context compression bug (#5960) that splits tool_call/tool_result pairs.
- **Dark mode unusable**: Multiple UI screens become illegible (now fixed with today's merged PRs).
- **Missing features from v1.x**: SSH offline, profile pages, and other capabilities removed in v2.0.0.

**Satisfaction signals:**
- First-time contributor PR #5968 for skills page fix shows community willingness to help.
- Users are still actively installing and testing v2.0.0 despite regressions — indicates strong interest.

## Backlog Watch

**Issues needing maintainer attention (no response, >1 week):**

| Issue | Age | Reason for urgency |
|---|---|---|
| [#2664](https://github.com/agentscope-ai/QwenPaw/issues/2664) — Intel Mac support | 3+ months | Platform blocking, no response |
| [#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) — OAuth login | 2+ months | Important enterprise feature, no engagement |
| [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) — Skills page scroll loading | 7 days | Community submitted fix PR (#5968) but no maintainer review |
| [#5959](https://github.com/agentscope-ai/QwenPaw/issues/5959) — Script upgrade not working | 1 day | Blocks all v1→v2 migration path |
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) — Missing SSH/profiles | 1 day | Reports features removed without migration |

**⚠️ Critical backlog maintenance needed:**
- The **context compression bug (#5960)** has now been confirmed to affect **at least three separate channel integrations** (WeChat #5962, DingTalk #5956, enterprise WeChat #5957). This is a systemic issue that should be the #1 priority for the core team.
- The **PyInstaller packaging defects (#5952, #5965)** block all Windows users who installed via the desktop installer — this affects a significant portion of the user base.
- The **data migration path from v1.x to v2.0.0** is effectively broken for users with file tool results, legacy memory state, or non-trivial chat history. A comprehensive migration script and validation step is urgently needed.

**Maintainer activity note:** The dark-mode PRs were all authored by the same contributor (Marlin-Phone) and merged quickly — this shows maintainers are active but focused on low-risk UI fixes rather than the deep systemic issues reported.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-12

## Today's Overview

ZeroClaw is in an **intense development cycle** with 50 open issues and 49 open pull requests updated in the last 24 hours, signaling broad active work across nearly every subsystem. No new releases were cut today; the project appears focused on closing the **v0.8.3 milestone**, which has 7+ active trackers coordinating implementation across runtime, observability, provider serialization, CI/docs, and WASM plugin work. Heavy activity clusters around **goal-mode implementation** (tracker #8681), **channel streaming parity** (Telegram, Matrix, Discord), and **security hardening** (SSRF, tool access policy, prompt injection surfaces). The PR pipeline shows a **1:49 merge-to-open ratio** for today, with only one documentation PR (#8924) merged, reflecting a project deep in implementation rather than shipping.

## Releases

**No new releases today.** The last published release is part of the v0.8.3 milestone which is still in active development across 15+ open items. Trackers #7320, #8073, #8071, and #8360 all coordinate different slices of this milestone's delivery.

## Project Progress

**One PR merged today:**
- [#8924 [CLOSED]](https://github.com/zeroclaw-labs/zeroclaw/pull/8924) — `docs(maintainers): clarify review validation evidence` — A small documentation fix clarifying when local validation is required vs. when CI evidence suffices for maintainer reviews.

**Notable open PRs advancing features (not merged but actively updated):**
- [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) — Telegram multi-message streaming mode (linked to #8445 feature request) — **XL-sized** addition with draft API integration
- [#8880](https://github.com/zeroclaw-labs/zeroclaw/pull/8880) — SOP approval broker with group membership and quorum — **XL-sized**, part of the SOP milestone tracker (#8288)
- [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — Matrix single-message progress drafts — **XL-sized**, adding `stream_mode = "single_message"` for Matrix
- [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) — Herdr agent reporting integration — **L-sized** observability feature
- [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — SSRF gate fix for `file_download` tool — security audit closure

## Community Hot Topics

**Most discussed issues (by comment count):**

1. **[#8681 — Goal mode implementation split stack](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)** (9 comments) — Tracker coordinating the split of `feat/goal-mode` into reviewable PRs. This is the highest-priority architecture initiative with "risk:high" and "status:in-progress" labels. The community is actively defining how goal-mode work gets broken into mergeable chunks.

2. **[#8054 — System prompt tool-availability mismatch across entry points](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)** (9 comments) — A **P1 bug** where the system prompt tells reasoning models "No tools are available" while tools are actually present. Already fixed on the direct runtime path (#8053) but persists across channels, gateway, WebSocket, multimodal, and `/think` endpoints.

3. **[#5808 — Default 32k context budget exceeded on iteration 1](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** (8 comments) — A **P1 regression** where the default context budget is ~3.3x too small, causing perpetual preemptive trimming on every conversation. This is a fundamental usability issue affecting all first-time users.

4. **[#7952 — Publish full-channel prebuilt assets](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)** (6 comments) — Feature request from a user (Audacity88) asking for optional `channels-full` binary bundles alongside the lean default. Highlights confusion when users configure channels not included in the default build.

**Underlying needs:** The community is demanding **better out-of-box experience** (context budget, channel completeness, system prompt consistency), **channel streaming maturity** (Telegram multi-message, Matrix drafts), and **architectural coherence** (goal-mode, SOP approval, WASM plugin lifecycle).

## Bugs & Stability

### Critical/P1 Bugs (active today):

| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | **P1** | System prompt tool-availability mismatch across all non-runtime entry points | #8053 (partial fix) |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | **P1** | Default 32k context budget exceeded 3.3x on first iteration | No fix PR yet |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | **P1** | SOPs not available through web dashboard chat session | No fix PR yet |
| [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | **P1** | Malformed native tool-call arguments → provider 400 → empty reply | No fix PR yet |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | **P1** | WhatsApp allowed-numbers bypass for LID-based contacts (silent drops) | No fix PR yet |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | **P1** | WebSocket disconnect cancels in-flight turns | No fix PR yet |

### Active Bug Fix PRs:

- [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) — Fix Telegram bot commands cap and warn formatting (#8950)
- [#8960](https://github.com/zeroclaw-labs/zeroclaw/pull/8960) — Fix Matrix marker path instructions (absolute → workspace-relative)
- [#8913](https://github.com/zeroclaw-labs/zeroclaw/pull/8913) — Annotate max-iteration turn stop with visible reason (#8758)
- [#8902](https://github.com/zeroclaw-labs/zeroclaw/pull/8902) — Allow bidirectional RPC in zerocode for `ask_user` and `poll`
- [#8916](https://github.com/zeroclaw-labs/zeroclaw/pull/8916) — Emit agent lifecycle events for channel and daemon turns
- [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) — Gate `execute_pipeline` sub-tool execution with per-agent `ToolAccessPolicy`

### Medium-severity bugs:
- [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) — On failure to start, zerocode doesn't terminate the process (S3, minor)

## Feature Requests & Roadmap Signals

**High-velocity features moving toward next release (v0.8.3 or v0.9.0):**

1. **Goal-mode implementation** (#8681) — The dominant architectural initiative. Likely to land in v0.9.0 given its tracker is newly created (July 4) and labeled "risk:high".

2. **Channel streaming parity** — Telegram multi-message (#8445, PR #8561), Matrix single-message drafts (#8442, PR #8443), Discord interaction-surface parity (#7831). These are converging rapidly with XL-sized PRs in review.

3. **SOP approval broker** (#8880, PR #8880) — Group membership + quorum authorization over SOP admission. This is a significant enterprise-governance feature.

4. **Persistent memory subsystem** (#8891) — Full parity with mature agent runtimes for curation, relevance, and operability. New tracker (July 9) with "risk:high".

5. **WASM-first plugin runtime** (#8135, #7314, #7822, #8187) — Multiple RFCs converging on signed, capability-declaring Wasm modules as default plugin runtime, with lifecycle hooks and hardware access.

6. **Gateway-local Kanban board** (#8832) — New RFC (July 8) for visualizing agent work. Early-stage but reflects demand for agent orchestration visibility.

**Prediction for next release:** The v0.8.3 milestone appears near completion (tracker #7320 shows 15 open items). The v0.9.0 release will likely include **goal-mode**, **channel streaming parity** (Telegram + Matrix), **SOP approval broker**, and initial **WASM plugin hooks**.

## User Feedback Summary

**Real pain points expressed by users:**

1. **"Default settings don't work"** — Issue #5808 (8 comments) shows that new users hit context budget issues immediately. The default 32k tokens is insufficient for system prompts + tool definitions on the first turn.

2. **"Channel completeness confusion"** — Issue #7952 (6 comments): Users don't know which channels are included in prebuilt binaries. Telegram, Discord, and Signal users find features missing or broken.

3. **"No visibility into agent activity"** — Issue #8832 (RFC, 2 comments): Users want a Kanban board to see "what is my agent working on." Multiple requests for agent lifecycle visibility across web UI and CLI.

4. **"SOPs don't work in web UI"** — Issue #8563 (2 comments): Configured Standard Operating Procedures are invisible through the web dashboard, a workflow blocker for power users.

5. **"Cron documentation missing"** — Issue #7762 (3 comments): Users cannot find documentation for cron jobs, nor can they configure cron jobs to use specific (cheaper) models.

**Satisfaction signals:** The community is actively contributing — 50 PRs updated in 24 hours reflects a healthy, engaged contributor base. The number of "needs-author-action" PRs (7+ identified) shows active review cycles and collaboration.

## Backlog Watch

**Issues/PRs needing maintainer attention (long-unanswered):**

1. **[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) — Publish full-channel prebuilt assets** — Created June 19, labeled `needs-maintainer-review`, 6 comments, 24 days without maintainer resolution. Community is actively requesting this.

2. **[#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) — Auto-truncate stale session history** — Created June 22, labeled `needs-maintainer-review`, 3 comments, 20 days. A practical token-saving feature.

3. **[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — RFC: Gateway-local Kanban board** — Created July 8, labeled `needs-maintainer-review`, 2 comments, 4 days. Early-stage RFC that needs maintainer feedback to proceed.

4. **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) — Persistent memory tracker** — Created July 9, labeled `needs-maintainer-review`, 1 comment, 3 days. Large architectural tracker needing maintainer sign-off.

5. **[#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — Matrix single-message progress drafts** — Created June 28, labeled `needs-author-action`, 14 days in review. XL-sized PR awaiting author response to maintainer feedback.

6. **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — Default context budget bug** — Created April 16, 87 days open. A **P1 bug** affecting every new user with no fix PR yet. This is the highest-impact unresolved issue on the backlog.

7. **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — Track 153 commits lost in bulk revert** — Created April 24, 79 days open. An audit tracker for recovering commits lost in a bulk rollback. This represents unresolved technical debt that could resurface as regressions.

**Overall project health:** The project is **highly active** with deep architectural work underway, but carries **significant unresolved P1 bugs** (#5808, #8054) that degrade first-time user experience. The community is strong and contributing, but maintainer bandwidth appears stretched given the 49 open PRs and multiple `needs-maintainer-review` tags on important issues. The v0.8.3 milestone's completion will be a key health indicator — once it ships, the backlog of user-facing bugs should decrease meaningfully.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*