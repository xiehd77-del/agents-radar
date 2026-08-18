# OpenClaw Ecosystem Digest 2026-08-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-18 01:18 UTC

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

Based on the provided GitHub data for OpenClaw (github.com/openclaw/openclaw) on 2026-08-18, here is the project digest:

---

### 1. Today's Overview

OpenClaw is in a period of high-intensity maintenance and stabilization. With 500 issues and 500 PRs updated in the last 24 hours, the project shows a massive backlog of work. The data reveals a heavy focus on `clawsweeper` (presumably a triage/cleanup bot) activity, with many issues stuck in review loops (`needs-maintainer-review`, `needs-product-decision`). While the rate of issue closure is low (21 closed out of 500 updated), the project is actively addressing a wide array of regressions, reliability concerns, and UX friction. Notably, there are no recent releases, suggesting focus is on patching the current version rather than shipping new features.

### 2. Releases

No new releases were published in the last 24 hours.

### 3. Project Progress

Despite no new releases, several pull requests were merged or closed today (139 total), indicating progress toward the next patch. Key merged/closed PRs focus on security and compatibility:

- **Security: Install Policy Warnings (PR #116489, #120900)**: Two substantial PRs by `jesse-merhi` were closed, introducing a security layer where `security.installPolicy` can return a `warn` status, requiring operator acknowledgement before installing suspicious plugins. This is a significant security hardening feature moving toward release.
- **Voice-Call Fix (PR #125468)**: `steipete` closed a PR fixing voice-call stream paths through Tailscale Serve/Funnel, which likely addresses a critical reliability bug for real-time audio.
- **UI/UX Refactoring (PR #125472)**: `steipete` closed a PR to rebuild the agent GitHub identity panel, aligning it with the Control UI's design language. This suggests a continued effort to polish the UI.
- **Reliability Fix (PR #125432)**: `joshavant` closed a fix for Matrix user ID authorization, ensuring case-sensitivity is maintained, which is a security and correctness improvement.

### 4. Community Hot Topics

The most active discussions highlight systemic reliability and user frustration:

- **[Issue #77598: Track live dev agent behavior and trajectory](https://github.com/openclaw/openclaw/issues/77598)** (23 comments): This "running notes" issue serves as a public monitor for a core maintainer's agent, indicating a community interest in transparency and perhaps a strategy for debugging complex, session-state-related issues.
- **[Issue #91009: Codex PreToolUse native hook relay spawns CPU-bound processes](https://github.com/openclaw/openclaw/issues/91009)** (20 comments, 2 reactions): A high-severity performance and stability issue. Users report that specific tool calls spawn processes that consume 100% CPU and stall the gateway, pointing to fundamental resource-management problems in the plugin/hook system.
- **[Issue #68596: Configurable streaming watchdog timeout](https://github.com/openclaw/openclaw/issues/68596)** (15 comments, 8 reactions): This feature request for configurable timeouts on long-running models like DeepSeek-R1 has significant user support, revealing that users are hitting default timeout limits with modern, reasoning-heavy models.
- **[Issue #62505: Coding Agent never completes anything](https://github.com/openclaw/openclaw/issues/62505)** (15 comments): A critical regression where the coding agent stops working entirely, marking it as a P1 blocker. This is a top concern as it breaks the core value proposition of the software for a key use case.

### 5. Bugs & Stability

The project is facing a significant number of stability issues, with several critical P1 regressions open:

- **CRITICAL: Coding Agent Regression (Issue #62505)**: P1 regression where the agent produces only vague status updates and fails to complete tasks. No fix PR appears to be linked yet.
- **CRITICAL: Gateway Crash (Issue #45224)**: An unhandled Playwright assertion error in `CRSession._onMessage` can crash the entire Gateway process, requiring an external restart.
- **HIGH: Process Leaks (Issue #97616)**: OpenClaw is leaking unreaped `openclaw-hooks`, `bash`, and `codex` child processes, leading to zombie accumulation and runtime degradation. This is a systemic issue likely related to the problems in #91009.
- **HIGH: Tool Parameter Loss (Issue #53408)**: The `write` and `exec` tools silently drop their parameters after long conversations, causing agent runs to fail mysteriously. This is a major session-state reliability issue.
- **HIGH: Session Context Bloat (Issue #67419)**: Bootstrap files are re-injected every turn, wasting 20-30% of tokens and potentially causing context limits to be hit prematurely, which could be a cause of other failures.

### 6. Feature Requests & Roadmap Signals

The community's requests provide signals for future development:

- **Model & Provider Resilience (Issues #56781, #63990)**: Users are requesting **fallback model chains** for compaction and summary models, and **multi-index embedding** support. This signals a desire for more robust handling of rate limits and model outages, which are common pain points. These features are likely candidates for the next minor release as they improve production reliability.
- **UI/UX Overhaul (Issues #75947, #42840)**: There is a strong desire for a **UI quality update** and **LaTeX/MathJax rendering** in the Control UI. These requests are popular (10 reactions), suggesting a high demand for a more professional and feature-complete web interface.
- **Configuration Flexibility (Issues #45758, #66252)**: Users want **YAML config support** and **per-agent TTS/STT overrides**, pointing to a need for more granular and flexible configuration options for complex multi-agent setups.
- **LLM Capability Integration (Issue #63930)**: There is a request to support Anthropic's new **server-side advisor tool**, indicating a desire to keep pace with cutting-edge LLM features.

### 7. User Feedback Summary

- **Deep Frustration with Stability**: The high volume of P1 bug reports regarding agent failures (e.g., #62505, #53408) indicates users are experiencing significant workflow disruptions. The "Coding Agent never completes anything" issue encapsulates this sentiment.
- **Production Reliability Concerns**: Issues like #70903 (billing cooldown blocking users for hours) and #91009 (CPU-bound processes stalling gateway) show that users feel OpenClaw is not yet production-ready for critical business use cases. The request for a "production-readiness stability label" (#73537) directly reflects this concern.
- **Security and Trust Issues**: The discovery of a hardcoded work path (#51429) shook user trust, and the community is likely appreciative of the new install-policy warning system (PR #116489) as a move toward better security governance.

### 8. Backlog Watch

Several issues are stuck in the `clawsweeper:no-new-fix-pr` state, indicating they remain unresolved despite maintainer attention:

- **[Issue #69208: Umbrella: duplicate transcript and context assembly bugs](https://github.com/openclaw/openclaw/issues/69208)**: This is a broad issue covering multiple serious bugs across different channels. Its status as an "umbrella" issue might be causing individual fixes to stall.
- **[Issue #67777: Subagent completion delivery can be lost](https://github.com/openclaw/openclaw/issues/67777)**: A P1 issue where subagent completions are lost during busy periods, with no new fix PR in sight. This is a critical reliability gap.
- **[Issue #38327: "Cannot convert undefined or null to object"](https://github.com/openclaw/openclaw/issues/38327)**: A regression from early March that still has no fix PR, despite being classified as a high-priority bug. This long-standing issue is likely causing ongoing user friction.
- **[Issue #51429: Hardcoded path merged and published](https://github.com/openclaw/openclaw/issues/51429)**: Even with multiple maintainer labels, this critical bug (complete with a PR merged) has not seen a fix PR, which is concerning from a code review quality perspective.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-18

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is in a **high-intensity stabilization and architectural maturation phase**. Projects are shifting from experimental feature development toward **production reliability, security hardening, and multi-platform interoperability**. The dominant themes are: fixing silent production failures (CPU-bound processes, lost messages, token-burning loops), implementing security gates (install policy warnings, credential scrubbing, SSRF protection), and abstracting channel/transport layers for multi-platform consistency. Activity is characterized by massive issue/PR backlogs (OpenClaw at 500+ items updated daily) and a growing tension between ambitious roadmap items (OpenAI protocol compatibility, goal-mode execution, multi-session orchestration) and the operational reality of maintaining stable, secure deployments. The ecosystem is clearly transitioning from "demo-ready" to "production-credible," driven by power users deploying agents in real-world messaging channels and business workflows.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 139 | No recent release; patching current version | 6/10 — Massive backlog, numerous P1 regressions, but high maintainer activity |
| **NanoBot** | 3 | 15 | 5 | Between releases; batch accumulating | 8/10 — Coordinated sprint, focused fixes, good PR quality |
| **Hermes Agent** | 50 | 50 | 8 | v0.20.3 (Aug 16) | 7/10 — Security audit aftermath, critical Windows issues, but steady merge pipeline |
| **PicoClaw** | 3 | 4 | 3 | No new release | 7/10 — Small but responsive; production bugs fixed quickly |
| **NanoClaw** | 4 | 42 | 25 | v2.1.48 (referenced) | 8/10 — High merge velocity, architectural refactoring, responsive to regressions |
| **NullClaw** | 0 | 1 | 0 | No release | 5/10 — Low activity, possible maintenance lull |
| **IronClaw** | 29 | 44 | 16 | **v1.3.0-rc.1** (Aug 17) | 7/10 — Ambitious epic-driven development, critical boot bug in RC |
| **LobsterAI** | 7 (all pre-existing) | 21 | 18 | No new release | 8/10 — Strong contributor throughput, UI polish focus |
| **TinyClaw** | 0 | 0 | 0 | N/A | N/A — No activity |
| **Moltis** | 2 | 9 | 6 | Between releases | 7/10 — Steady pace, good issue-to-PR velocity |
| **CoPaw** | 14 | 33 | 20 | v2.1.0 | 8/10 — High velocity, fast bug closure, growing first-time contributor base |
| **ZeptoClaw** | 0 | 0 | 0 | N/A | N/A — No activity |
| **ZeroClaw** | 50 | 50 | 6 | v0.8.4 (current) | 7/10 — Security-focused merges, but governance/architecture debates stalling execution |

*Health score is a qualitative composite of activity, responsiveness, bug-fix velocity, and community sentiment.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Scale of community**: With 500+ issues and PRs updated daily, OpenClaw has the largest contributor and user base in the ecosystem. This generates extensive real-world testing and diverse feature requests.
- **Security hardening momentum**: The install-policy warning system (PRs #116489, #120900) positions OpenClaw as a leader in plugin security governance.
- **Ecosystem centrality**: Multiple projects (LobsterAI, NanoClaw) explicitly reference OpenClaw as a core dependency or runtime, indicating deep ecosystem integration.

**Technical Approach Differences:**
- OpenClaw uses a **gateway-centric architecture** with `clawsweeper` for automated triage, indicating a mature, heavily-automated development pipeline.
- The project seems to favor **monolithic integration** of features (agent, channels, UI) over the more modular, driver-based abstraction approaches in NanoBot or NanoClaw.

**Community Size Comparison:**
- OpenClaw's issue/PR volume is **10x larger** than the next busiest projects (Hermes, ZeroClaw) and suggests a community of thousands of active users and contributors.
- The sheer volume also creates challenges: issue closure rate is low (21/500 updated), and many items are stuck in triage loops.

**Definition:** OpenClaw is the **ecosystem reference implementation** — de facto standard but under structural strain from its own popularity.

---

## 4. Shared Technical Focus Areas

| Area | Projects | Specific Needs |
|---|---|---|
| **Provider Fallback & Resilience** | OpenClaw, NanoBot, ZeroClaw, Hermes | Fallback model chains, handle rate limits (HTTP 429) without starving agent loops (Hermes #77305), honor configured fallbacks in delegation (ZeroClaw #9544) |
| **Token/Budget Management** | OpenClaw, NanoBot, CoPaw, IronClaw | Prevent token-burning loops (NanoBot #4864), cap LLM spend (NanoBot #5409), image token accounting (CoPaw #6968), action budget atomicity (ZeroClaw #9996) |
| **Session-State Reliability** | OpenClaw, Hermes, CoPaw, NanoClaw | Session identity isolation across channels (CoPaw #7011), context bloat (OpenClaw #67419), task-mode hijack (NanoClaw #3301), subagent completion loss (OpenClaw #67777) |
| **Channel/Transport Abstraction** | PicoClaw, NanoClaw, CoPaw, IronClaw | Multi-instance channels (PicoClaw #2606), per-thread session modes (NanoClaw #3309), per-channel model config (CoPaw #7085), protocol-agnostic adapters |
| **Security Governance** | OpenClaw, Hermes, ZeroClaw, IronClaw | Install policy warnings (OpenClaw), credential scrubbing (Hermes #70370), SSRF protection (ZeroClaw #8713), fail-closed security defaults (ZeroClaw #9397, Hermes #88814) |
| **Interoperability & Protocol Standardization** | ZeroClaw, Moltis, LobsterAI | OpenAI Chat Completions protocol (ZeroClaw #8603), ACP support (IronClaw #7513, Moltis #1204), external agent model/effort selection (Moltis #1125) |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Broad — chat, coding agent, web UI, channels | Power users, developers, enterprises | Monolithic gateway, plugin-based |
| **NanoBot** | Production reliability, gateway process management | Production deployments, cross-platform teams | Modular gateway, process isolation, TypeScript TUI |
| **Hermes Agent** | Desktop-first, Local models, security audit | Desktop power users, local-model advocates (llama.cpp) | Desktop app + gateway, strong CLI/TUI |
| **PicoClaw** | Lightweight, channel reliability (IRC, Telegram, Slack) | Embedded/small-device users, multi-channel ops | Minimalist agent core, channel adapters |
| **NanoClaw** | Channel-layer abstraction, Slack/Weixin focus | Business teams (Slack-centric), multi-thread workflows | Driver seam architecture, per-thread session modes |
| **IronClaw** | Durable write-path, structured outputs, ACP | Enterprise developers, data-heavy workloads | Rust/TypeScript? (WIT-based), durable storage |
| **LobsterAI** | Multi-agent orchestration, education/cowork | Education (netease-youdao), multi-agent workflows | Electron-based UI, engine integration (dsh, OrcaRouter) |
| **CoPaw** | Multi-channel Chinese messaging (OneBot, Feishu, WeChat) | China-market power users, bot developers | Channel-first, plugin runtime hooks |
| **Moltis** | External agent integration, Rust-based | Rust developers, multi-agent orchestration | Rust, WASM, external agent ACP |
| **ZeroClaw** | RFC-driven architecture, security governance | Advanced operators, privacy-focused, protocol interop | Heavy RFC process, OpenAI-compat ambitions |

**Key Distinction:** Projects are polarizing into two camps — **platform consolidators** (OpenClaw, ZeroClaw, IronClaw) building deep, extensible frameworks; and **niche optimizers** (PicoClaw, CoPaw, Moltis) delivering battle-tested reliability for specific channels or use cases. Hermes and LobsterAI represent the **end-user desktop** cohort, prioritizing polish and local-model support.

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|---|---|---|
| **Tier 1: High-Intensity Iteration** | OpenClaw, ZeroClaw, IronClaw, CoPaw | Massive daily activity, major architectural epics, security hardening focus, but with notable P1 regressions and merge bottlenecks |
| **Tier 2: Steady Growth** | NanoBot, Hermes, NanoClaw, LobsterAI, Moltis | Consistent merge velocity, responsive maintainers, growing contributor bases, focused on specific reliability niches |
| **Tier 3: Maintenance Mode / Lull** | PicoClaw, NullClaw, TinyClaw, ZeptoClaw | Low or no activity; PicoClaw still responsive to bugs, others appear dormant |

**Momentum Notes:**
- **Rapidly iterating:** CoPaw (highest merge-to-PR ratio, 20/33), NanoClaw (25/42), LobsterAI (18/21) — efficient merge pipelines suggests disciplined PR review.
- **Stabilizing:** NanoBot (targeted fixes, batch accumulation), IronClaw (epic-driven QA push), ZeroClaw (security audits) — these are consolidating after feature pushes.
- **At risk:** OpenClaw — the sheer 500-item daily churn risks maintainer burnout; NullClaw/TinyClaw/ZeptoClaw show no signals of revival.

---

## 7. Trend Signals

1. **Revenue-Grade Reliability is Non-Negotiable**: Recurring themes of silent failures (NanoBot's Telegram stall, PicoClaw's tool loops, OpenClaw's session context bloat) are pushing a "fail-fast, visible-failure" design philosophy. Developers should invest in **watchdog mechanisms, explicit error surfacing, and circuit breakers**.

2. **Token Economics are Becoming a User-Interface Concern**: The ecosystem is treating token spend as a first-class UX element — context rings (CoPaw), hybrid spend firewalls (NanoBot), atomic action budgets (ZeroClaw). Expect token-aware features to become a purchasing differentiator.

3. **Security is Shifting from Anti-Malware to Governance**: Install policies, credential scrubbing, and fail-closed defaults are becoming standard. The emergence of security audits (Hermes, ZeroClaw) signals a demand for **agent-ready security frameworks** (policy-as-code, OIDC support) — not just vulnerability patching.

4. **Channel Abstraction is the New Moats**: The need to run the same agent on Slack, Telegram, Feishu, and QQ with per-channel configs (CoPaw's #7085, NanoClaw's #3309) suggests that flexible channel adapters will be a key architectural decision. Projects with driver-seam designs (NanoClaw, IronClaw) have an advantage.

5. **Model-Provider Agnosticism is Table Stakes**: Fallback chains, multi-provider routing, and local-model support (Hermes Qwen, LobsterAI dsh, CoPaw Volcengine) are consistent requests. Developers should abstract the provider layer to avoid lock-in and enable graceful degradation on rate limits.

6. **Cross-Platform Parity is Unfinished Business**: Windows-specific bugs dominate across projects (Hermes ACL hole, NanoClaw venv PID, PicoClaw curl). The market rewards teams that deliver *true* cross-platform reliability, not just macOS/Linux support.

7. **Protocol Interop is the Next Frontier**: ZeroClaw's OpenAI-compat RFC, IronClaw's ACP, and Moltis's external agents point toward an **interoperable agent ecosystem** where agents and tools are swappable across frameworks — anticipate consolidation around open protocols (MCP, ACP, and emerging agent-to-agent standards).

---

*Prepared for technical decision-makers evaluating the AI agent and personal assistant ecosystem as of 2026-08-18.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest - 2026-08-18

## 1. Today's Overview
NanoBot is in a period of high development velocity, with 15 PRs updated in the last 24 hours (10 open, 5 merged/closed) and 3 issues touched (2 open, 1 closed). The project is currently deep in a stability-focused sprint, with significant work concentrated on the gateway process management layer (PRs #5411, #5412, #5415, #5416), provider fallback resilience (#5413), and platform integrations (Slack, Telegram, WebUI). Developer activity is unusually concentrated on a single day (August 17), suggesting a coordinated push to close out a batch of known issues. No new releases were published, indicating these fixes are accumulating for a forthcoming release. Overall project health appears strong, with maintainers actively processing incoming PRs and closing out long-standing bugs like the Telegram polling stall (#5171).

## 2. Releases
No new releases were published in the last 24 hours. The project appears to be between releases, with a substantial batch of merged fixes (notably #5156, #5301, #5410, #5416, #5406) likely candidates for an imminent version bump.

## 3. Project Progress
Five PRs were merged or closed in the last 24 hours:

- **[#5416 - fix(gateway): stabilize process identities](https://github.com/HKUDS/nanobot/pull/5416)** (merged): Replaces locale-dependent macOS process listing with native `proc_pidinfo` birth timestamps, standardizing the cross-platform process identity contract. This is a core infrastructure fix affecting gateway client lease management across macOS, Windows, and Linux.

- **[#5410 - fix(goal): stop repeating clarification replies](https://github.com/HKUDS/nanobot/pull/5410)** (merged): Fixes an AgentRunner bug where sustained-goal continuation was re-injected after plain-text model responses, causing repeated clarification loops. Now correctly preserves continuation only at tool-call budget boundaries.

- **[#5406 - feat(cli): add native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/5406)** (merged): Introduces a native TypeScript TUI for the CLI. Notably, this PR carries a recovery note explaining it supersedes #4329, which was mistakenly marked merged when its head briefly appeared on main—main was restored, and this PR re-applies the same commit history with cross-terminal fixes.

- **[#5156 - fix(telegram): recover from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156)** (closed/merged): The full watchdog solution for issue #5171, rebuilding stalled Telegram polling connection pools after transient network failures. This closes a critical production bug.

- **[#5301 - fix(telegram): bridge stdlib logging and detect stalled polling](https://github.com/HKUDS/nanobot/pull/5301)** (closed/merged): The low-risk observability precursor to #5156, bridging stdlib logging into loguru and adding a liveness check that logs stalled polling without teardown.

## 4. Community Hot Topics
The most active item this week is **[Issue #4864 - Endless loop for tool_call / complete_goal](https://github.com/HKUDS/nanobot/issues/4864)** with 7 comments and 1 reaction. The issue details a gateway parsing bug where the `recap` parameter is deserialized as a bare string instead of a JSON object, causing the `complete_goal` tool to error repeatedly in an endless loop. This issue has been open since July 9 and is still unresolved—the related fix PR #5410 addresses the continuation loop half of the problem, but the underlying gateway serialization bug remains unaddressed.

Today's [Issue #5409 - Prevent Margin Leaks & Surprise LLM Bills](https://github.com/HKUDS/nanobot/issues/5409) is a fresh feature request from a user anticipating NanoBot's commercialization, proposing a "Hybrid Spend Firewall" to cap LLM spend from runaway agent loops. While it has no comments yet, it taps into a frequently voiced concern from production users.

The Telegram polling stall issue (#5171) generated substantial community engagement before its closure, with production evidence of silent, permanent message loss after network blips.

## 5. Bugs & Stability
Bugs reported or addressed today, ranked by severity:

- **High - Git commit history integrity** (implied by [#5406 recovery note](https://github.com/HKUDS/nanobot/pull/5406)): PR #4329 was mistakenly marked merged when its head briefly appeared on main. Main was restored immediately, but this near-miss highlights a risk in the merge pipeline. No open issue, but the recovery note in the PR should be reviewed.

- **High - Exceptions escaping provider fallback loop** ([#5413](https://github.com/HKUDS/nanobot/pull/5413), open): The fallback logic only handled `LLMResponse(finish_reason="error")`; raised exceptions could escape entirely, bypassing fallback providers. Fix PR is open.

- **Medium - Windows venv child process adoption** ([#5415](https://github.com/HKUDS/nanobot/pull/5415), open): Managed Windows gateway interpreters fail to adopt the recorded PID of their direct venv launcher, breaking lifecycle management. Fix PR includes a regression test.

- **Medium - Endless complete_goal loop** ([#4864](https://github.com/HKUDS/nanobot/issues/4864), still open): Serialization mismatch between gateway and `complete_goal` tool. Fix PR #5410 addresses half the problem.

- **Medium - Persisted cron system jobs not retired** ([#5407](https://github.com/HKUDS/nanobot/pull/5407), open): Setting `gateway.heartbeat.enabled` or `dream.enabled` to false doesn't stop persisted jobs from firing, burning tokens. Fix PR is open.

- **Low - Background child output block-buffered** ([#5412](https://github.com/HKUDS/nanobot/pull/5412), open): `ManagedProcessRuntime` output to non-TTY files gets block-buffered, delaying log visibility. Fix PR is open.

- **Low - Slack file download redirect vulnerability** ([#5414](https://github.com/HKUDS/nanobot/pull/5414), open): Unvalidated redirect chain on Slack private URLs.

## 6. Feature Requests & Roadmap Signals
Three notable feature signals emerged:

1. **Hybrid Spend Firewall** ([Issue #5409](https://github.com/HKUDS/nanobot/issues/5409)) — A user proposed a dual-pronged (config-plus-code) guardrail system combining hard caps and predictive monitoring. Given NanoBot's commercial trajectory and the repeated "infinite loop burns tokens" theme across issues #4864 and #5407, this is likely to see adoption in some form.

2. **WebUI follow-up suggestions** ([PR #5408](https://github.com/HKUDS/nanobot/pull/5408), open) — Adds ephemeral, chat-scoped follow-up prompts after successful turns, provider-neutral. This mirrors DeerFlow's interaction pattern and is likely to land given its QoL value.

3. **WebUI session messaging via mentions** ([PR #5358](https://github.com/HKUDS/nanobot/pull/5358), open) — Adds server-owned `@name` identities for sessions, enabling cross-session communication via `list_sessions` and `send_session_message`. This signals a move toward multi-session orchestration.

4. **Temporary side conversations** ([PR #5364](https://github.com/HKUDS/nanobot/pull/5364), open) — `/side` command for parallel, transient conversations beside the main WebUI topic.

The next release likely bundles: the TypeScript TUI (#5406), Telegram watchdog (#5156/#5301), goal-loop fix (#5410), process identity stabilization (#5416), and at least one of the WebUI enhancements.

## 7. User Feedback Summary
- **Pain point: Silent production failures.** The Telegram stall issue (#5171) reflects a class of complaints about silent degradations—processes running, logs quiet, behavior permanently broken. The fix (watchdog in #5156) directly addresses this trust issue.

- **Pain point: Token/cost burn from loops.** Issue #4864, the spend firewall request (#5409), and heartbeats continuing when disabled (#5407) all reflect a common anxiety: agents looping or continuing to consume API budget unintentionally. Users want explicit control and circuit breakers.

- **Pain point: Cross-platform inconsistency.** Windows-specific bugs (curl alias in weather skill, PR #5341; venv PID adoption, #5415; locale-dependent process IDs, #5416) show users deploying on varied platforms and expecting parity.

- **Positive signal:** The steady stream of labeled-quality PRs (well-scoped, with regression tests) and maintainers merging multiple fixes in a single day indicates a responsive project maintainers value. The closure of the long-standing Telegram issue is a satisfaction win.

## 8. Backlog Watch
- **[Issue #4864 - complete_goal endless loop](https://github.com/HKUDS/nanobot/issues/4864)** (open since July 9, 7 comments): The gateway parameter-serialization component remains unfixed even though PR #5410 closed the loop half. This warrants maintainer attention to the gateway deserialization path.

- **[PR #5341 - weather workflow Windows-safe](https://github.com/HKUDS/nanobot/pull/5341)** (open since August 11): No comments from maintainers; the bare-`curl`/PowerShell alias bug is straightforward and long-standing on Windows.

- **[PR #5364 - temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)** (open since August 13): Feature-complete but unaddressed; among the cluster of WebUI PRs (#5358, #5408, #5364) it may need prioritization to avoid merge conflicts (each touches the WebUI composer).

- **[PR #5407 - retire persisted cron jobs when disabled](https://github.com/HKUDS/nanobot/pull/5407)** (opened yesterday): Token-burning bug fix; needs review to prevent continued unexpected spend.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-18

## 1. Today's Overview

Hermes Agent is in a period of **high sustained activity**, with 50 issues and 50 PRs updated in the last 24 hours. The project is currently processing the aftermath of a **security audit campaign** (EPIC #82591) that has generated a large class of security findings (at least 8 open security issues tagged as part of the audit), alongside a steady stream of bug reports and feature work. A patch release (v0.20.3) tagged on August 16 rolls up ~125 PRs merged since the prior patch, indicating a healthy merge pipeline. Notably, a significant cluster of long-standing PRs from contributor `yingliang-zhang` (addressing session-state, cron, compression, and memory-leak issues) have been updated today but remain **open for over a month** — a potential maintainer bottleneck. Overall project health is good, but the volume of open security findings and the age of several critical PRs warrant attention.

## 2. Releases

**v2026.8.16.2 — Hermes Agent v0.20.3** (August 16, 2026)

A patch release that rolls up **~125 PRs merged since v0.20.2** into a stable tagged release for downstream consumers (Docker images, hosted deployments, fresh installs).

*No breaking changes or migration notes were provided in the release notes.* The release is primarily a stabilization and bug-fix aggregation.

---

## 3. Project Progress

**Merged/Closed PRs (8 total today, per PR count):**

- **#88813** — `fmt(js): npm run fix auto-fix` — Automated formatting/lint fix (closed, auto-merged on CI pass).

**Key PRs actively advancing (open but updated today):**

| PR | Focus | Status |
|---|---|---|
| [#88819](https://github.com/NousResearch/hermes-agent/pull/88819) | **Security fix:** route `hermes peer dm` through credential-redirect guard (prevents leaking API key on HTTP redirect) | New, open |
| [#88814](https://github.com/NousResearch/hermes-agent/pull/88814) | **Security fix:** treat explicit empty `execute_code` grant as deny-all (fail-open bug) | New, open |
| [#88796](https://github.com/NousResearch/hermes-agent/pull/88796) | **Security fix:** withhold sensitive context from non-cancellable memory prefetch providers | New, open |
| [#88817](https://github.com/NousResearch/hermes-agent/pull/88817) | **CLI fix:** stop no-op npm upgrade retry loop on Node-caused EBADENGINE | New, open |
| [#88815](https://github.com/NousResearch/hermes-agent/pull/88815) | **Cron/Kanban fix:** surface worker's own final text on protocol_violation | New, open |
| [#88816](https://github.com/NousResearch/hermes-agent/pull/88816) | **Desktop UI fix:** keep mixed panes attached to sidebar toggles | New, open |
| [#88812](https://github.com/NousResearch/hermes-agent/pull/88812) | **Desktop refactor:** Gateways settings page is machine-level, remove per-profile scoping | New, open |
| [#88801](https://github.com/NousResearch/hermes-agent/pull/88801) | **Feature:** add `skill-behavior-validation` skill (simulation-based self-validation) | New, open |
| [#88744](https://github.com/NousResearch/hermes-agent/pull/88744) | **Desktop feature:** window translucency readability on macOS | New, open |
| [#70370](https://github.com/NousResearch/hermes-agent/pull/70370) | **Security fix:** scrub credentials from embedded terminal PTY env (Desktop) | Open 26 days |

---

## 4. Community Hot Topics

### [Issue #66616 — Skills index stale/degraded (48 comments)](https://github.com/NousResearch/hermes-agent/issues/66616)
The Skills Hub's unified index (`skills-index.json`) is behind its freshness limit (29.8h old vs 26h limit), degrading the Skills Hub at `/docs/skills`. This has been open a month and is the **most-commented issue** — likely because it's infrastructure-wide and affects documentation and skill discoverability.

### [Issue #42961 — `terminal.cwd` config ignored (11 comments)](https://github.com/NousResearch/hermes-agent/issues/42961)
Users want `terminal.cwd` in `config.yaml` to be respected, but the local backend silently discards it. Open since June 9, **2+ months**, with 11 comments and no fix PR linked — a likely frustration point for power users.

### [Issue #16636 — Expandable tool call messages in TUI (5 comments, 1 👍)](https://github.com/NousResearch/hermes-agent/issues/16636)
Feature request: show full tool-call context and results in the TUI transcript (currently only summary lines are visible). Older issue (April) — raised again with active discussion.

### [Issue #76064 — Desktop demo plugins enabled by default (4 comments, 2 👍)](https://github.com/NousResearch/hermes-agent/issues/76064)
**Closed** today — "example" plugin and duplicate gateway pill in status bar are now disabled in production builds. User sentiment: UI clutter in production.

### Analysis
The community is predominantly **power users** (local dev, desktop app, terminal control) asking for **configuration correctness** (cwd, model alias), **visibility** (expandable tool calls, skills index), and **clean defaults** (desktop plugins). Security findings are generating substantial attention but are mostly from automated sweeps.

---

## 5. Bugs & Stability

**Ranked by severity:**

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **Critical** | [#77462](https://github.com/NousResearch/hermes-agent/issues/77462) | Windows at-rest ACL hole — `_secure_file` is a no-op; secrets readable by SYSTEM/Administrators. Verified live (5 findings via 4 red-team agents). | No PR linked |
| **High** | [#77305](https://github.com/NousResearch/hermes-agent/issues/77305) | Failed API calls consume subagent iteration budget, starving fallback chain (HTTP 429 burning same budget). | No PR linked |
| **High** | [#78793](https://github.com/NousResearch/hermes-agent/issues/78793) | `write_file`/`patch` silently corrupt git-managed state (`.git/HEAD`, refs/, index) in normal repos. | No PR linked |
| **High** | [#88661](https://github.com/NousResearch/hermes-agent/issues/88661) | MCP tool timeout parks server connection — entire toolset unregisters (no auto-reconnect until gateway restart). | No PR linked |
| **High** | [#88810](https://github.com/NousResearch/hermes-agent/issues/88810) | Terminal tool crashes on Windows: "embedded null character in path" (`lifecycle_guard` missing `ValueError` catch). | No PR linked |
| **High** | [#85624](https://github.com/NousResearch/hermes-agent/issues/85624) | Auto-title fails 100% on Bedrock/Anthropic — OpenAI-only `response_format` leaked onto Messages API. | No PR linked |
| **Medium** | [#84259](https://github.com/NousResearch/hermes-agent/issues/84259) | Threat scanning truncates input at 65,536 chars while context rendering can preserve tail — security gap. | No PR linked |
| **Medium** | [#84248](https://github.com/NousResearch/hermes-agent/issues/84248) | Docker cgroup probe failure removes resource limits. | No PR linked |
| **Medium** | [#84271](https://github.com/NousResearch/hermes-agent/issues/84271) | Explicit empty `execute_code` capability set broadens to all sandbox tools. | **Yes:** [#88814](https://github.com/NousResearch/hermes-agent/pull/88814) |
| **Medium** | [#88762](https://github.com/NousResearch/hermes-agent/issues/88762) | Qwen 3.8 fails where Qwen 3.6 works fine (local llama.cpp) — needs repro. | No |

**Closed today:** Desktop backend drain/kill on quit ([#76245](https://github.com/NousResearch/hermes-agent/issues/76245)), macOS orphaned `hermes serve` backends ([#80898](https://github.com/NousResearch/hermes-agent/issues/80898)), API server session model alias bug ([#79101](https://github.com/NousResearch/hermes-agent/issues/79101)), dashboard "database is locked" ([#57921](https://github.com/NousResearch/hermes-agent/issues/57921)).

---

## 6. Feature Requests & Roadmap Signals

### Active feature requests (with activity today):
- [#84177](https://github.com/NousResearch/hermes-agent/issues/84177) — **Design mode** for desktop: element selection bridge from preview/browser pane to agent context (1 👍, new).
- [#16636](https://github.com/NousResearch/hermes-agent/issues/16636) — **Expandable tool call messages in TUI** (open since April, still 1 👍, no implementation).
- [#11239](https://github.com/NousResearch/hermes-agent/issues/11239) — **Env-backed secret references** for MCP server config (2 👍, open since April).

### Roadmap signals from PRs:
- **[#88744](https://github.com/NousResearch/hermes-agent/pull/88744)** — Window translucency readability (macOS), indicates continued desktop polish investment.
- **[#88801](https://github.com/NousResearch/hermes-agent/pull/88801)** — New `skill-behavior-validation` skill (simulation-based self-validation), a quality-of-life improvement for skill developers.
- **[#60662](https://github.com/NousResearch/hermes-agent/pull/60662)** — Configurable `max_tail_message_floor` for compression, responding to users with large contexts.

### Prediction:
The next minor release (v0.21.x) will likely include: the **session-boundary preservation PR** ([#63298](https://github.com/NousResearch/hermes-agent/pull/63298)), **cron stale-session reaping** ([#62663](https://github.com/NousResearch/hermes-agent/pull/62663)), and the **desktop gateway settings refactor** ([#88812](https://github.com/NousResearch/hermes-agent/pull/88812)). The **security audit** findings will likely start landing as fixes in the next 2–3 weeks.

---

## 7. User Feedback Summary

**Satisfaction signals:**
- Desktop demo plugins disabled by default ([#76064](https://github.com/NousResearch/hermes-agent/issues/76064)) — closed, users can now have a clean UI.
- Fixes for macOS orphaned backends ([#80898](https://github.com/NousResearch/hermes-agent/issues/80898)) and backend drain on quit ([#76245](https://github.com/NousResearch/hermes-agent/issues/76245)) closed today — improves desktop reliability.

**Dissatisfaction / Pain points:**
- **Configuration not respected:** `terminal.cwd` ignored ([#42961](https://github.com/NousResearch/hermes-agent/issues/42961)) and `/model provider:model` docs/code conflict ([#78567](https://github.com/NousResearch/hermes-agent/issues/78567)) — users want docs to match behavior.
- **Windows-specific issues:** At-rest secrets ACL hole (critical), embedded null character crash ([#88810](https://github.com/NousResearch/hermes-agent/issues/88810)), and lifecycle guard bug — Windows is clearly a surface with gaps.
- **Qwen 3.8 regression** ([#88762](https://github.com/NousResearch/hermes-agent/issues/88762)) — local-model users report regression from 3.6 to 3.8, unreproduced as yet.
- **MCP timeout fragility** ([#88661](https://github.com/NousResearch/hermes-agent/issues/88661)) — a single timeout can kill all tools from a server; user's workflow is degraded.

---

## 8. Backlog Watch

**Issues/PRs needing maintainer attention (open >30 days, still unaddressed):**

| Item | Age | Why it matters |
|---|---|---|
| [#42961](https://github.com/NousResearch/hermes-agent/issues/42961) — `terminal.cwd` ignored | **70 days** | Core config behavior; 11 comments, no fix. Power-user trust issue. |
| [#16636](https://github.com/NousResearch/hermes-agent/issues/16636) — Expandable tool calls in TUI | **113 days** | Popular (1 👍) but unimplemented; TUI is a differentiator. |
| [#11239](https://github.com/NousResearch/hermes-agent/issues/11239) — Env-backed secrets for MCP config | **124 days** | Security-relevant; config files store secrets in plaintext by default. |
| **PR [#63298](https://github.com/NousResearch/hermes-agent/pull/63298)** — Preserve queued prompt boundaries | **37 days** | Large, cross-cutting fix (labels: blast-massive, session-state); touches CLI, gateway, TUI, desktop. Needs maintainer review. |
| **PR [#62663](https://github.com/NousResearch/hermes-agent/pull/62663)** — Reap stale cron sessions | **38 days** | Fixes cron run-history gaps; waiting on review. |
| **PR [#57687](https://github.com/NousResearch/hermes-agent/pull/57687)** — Close slash_worker on WS detach | **46 days** | Memory leak fix; TUI/gateway/dashboard all affected. |
| **PR [#56034](https://github.com/NousResearch/hermes-agent/pull/56034)** — Hard message-count safety valve | **48 days** | Prevents TUI/CLI from running out of memory on long sessions. |
| **PR [#70370](https://github.com/NousResearch/hermes-agent/pull/70370)** — Scrub credentials from PTY env | **26 days** | **Security fix** — blocks secret leakage from desktop terminal; should ship soon. |

**Pattern:** Contributor `yingliang-zhang` has **8+ open PRs** touching session-state, cron, compression, and memory — all updated today but none merged. These represent a coherent body of work likely to land together, and the maintainers should prioritize reviewing this set to avoid an ever-growing divergence.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-18

## 1. Today's Overview

PicoClaw shows moderate activity over the last 24 hours, with 3 issues updated (2 open, 1 closed) and 4 PRs touched (1 open, 3 closed). The project continues to address real-world production issues, particularly around tool execution reliability and broken Slack/Weixin integrations. A notable trend is the project's handling of stale items—multiple issues and PRs from months ago are being swept up and resolved today, signaling active maintenance housekeeping. No new releases were published, but the steady flow of merged fixes suggests a healthy, ongoing development cadence. The open PR and issue on Slack media uploads and Google Antigravity quotas hint at continued focus on channel robustness and model provider compatibility.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release activity appears to predate this window, so there are no changelog details, breaking changes, or migration notes to report at this time.

## 3. Project Progress

Three PRs were merged or closed today, each addressing meaningful issues:

- **[PR #3312 — fix(agent): stop turn early on repeated identical tool failure](https://github.com/sipeed/picoclaw/pull/3312)** (closed): This fix directly addresses the "stuck agent" bug where repeated identical tool failures would loop silently through `max_tool_iterations` without ever returning an answer to the user. The fix stops the agent loop early upon detecting the same error recurring, preventing silent multi-minute hangs in production (e.g., over Telegram).

- **[PR #271 — fix: env overrides when config.json is missing and add regression test](https://github.com/sipeed/picoclaw/pull/271)** (closed): An important deployment fix—when `config.json` is absent (common in Fly.io deployments using env vars only), the config loader now correctly applies environment overrides instead of falling back to default model settings (glm-4.7) that fail due to missing credentials. A regression test was added to prevent future breakage.

- **[PR #2606 — feat: enhance Weixin channel support and configuration](https://github.com/sipeed/picoclaw/pull/2606)** (closed): A substantial enhancement bringing Weixin channel multi-instance support, dynamic instance handling, improved channel name validation, and strengthened multi-instance flow stability across backend, frontend, and docs.

## 4. Community Hot Topics

The most active discussion item today is **[Issue #3287 — [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**, with 6 comments. The underlying request is that PicoClaw should treat IRCv3 long messages (split at 512-byte boundaries by clients) as a single cohesive message rather than separate ones. This reflects a broader user need for channel-aware message reassembly, which could have implications beyond IRC (e.g., Discord, Slack message splitting).

**[Issue #3311 — Repeated identical tool failure loops silently to max_tool_iterations](https://github.com/sipeed/picoclaw/issues/3311)** also drew attention with 2 comments, but it's now closed with the corresponding fix in **[PR #3312](https://github.com/sipeed/picoclaw/pull/3312)**. The user, lucapette, reported observing this in production over Telegram—the agent never replied to a `git` command request due to the silent loop. This emerged as a critical reliability issue, and the community responded quickly with a focused fix.

## 5. Bugs & Stability

Two bugs were reported or addressed today, ranked by severity:

1. **[High] Repeated identical tool failure silent loop (Issue #3311, closed)** — Production-impacting: users receive no answer for minutes while the agent re-executes a failing tool and re-calls the LLM repeatedly. **Fix exists**: PR #3312 merged today stops the turn early on repeated identical failures. **Status**: Resolved.

2. **[Medium] Google Antigravity generation returns generic 429 (Issue #3339, open)** — Newly reported today. Authentication and model discovery succeed, but every generation request returns `RESOURCE_EXHAUSTED` with no quota details. This appears provider-side or a misconfiguration issue, not a PicoClaw logic bug. **Fix**: None yet; requires investigation into Antigravity quota semantics.

3. **[Low-Medium] Slack media upload fails due to missing FileSize (PR #3340, open)** — Not a crash but a functional break: `slack-go v0.23.1` rejects uploads without explicit file size upfront. The fix sets `FileSize` from the File parameter. **Fix available in PR**, awaiting review/merge.

## 6. Feature Requests & Roadmap Signals

Two feature signals are visible today:

- **[Issue #3287 — Long message support in IRC](https://github.com/sipeed/picoclaw/issues/3287)**: Users want PicoClaw to handle IRCv3 message splitting gracefully. This suggests a direction toward protocol-aware text reassembly. Given it's an open enhancement with a defined goal, it could plausibly be scoped into a future release focusing on channel message handling improvements.

- **[PR #2606 — Weixin channel multi-instance support](https://github.com/sipeed/picoclaw/pull/2606)** (merged today): While this is now merged, the scope of the change (multi-instance, dynamic channel directories, validation) indicates a broader effort toward robust multi-channel configuration—likely a precursor to more channel expansions or config-as-code improvements.

Prediction: IRC long-message handling is a moderate priority; the project seems focused on reliability fixes right now, so it may land in the next minor release rather than an imminent patch.

## 7. User Feedback Summary

Real user experiences this cycle point to reliability and deployment concerns:

- **Production "silent hang" frustration (Issue #3311)**: A user observed the agent never responding on Telegram when a tool (e.g., `git`) failed repeatedly. The complaint focuses on the lack of user visibility and the wasted compute cycles during `max_tool_iterations`. The prompt fix indicates the team values this feedback.

- **Deployment friction with env-only configs (PR #271)**: Fly.io users running without a config file hit default-model failures due to missing credentials. This is a classic "works locally, breaks in production" pain point, addressed pragmatically with env overrides + regression test.

- **Channel integration breakage (PR #3340, PR #2606)**: Slack file uploads failing due to a missing parameter, and Weixin channel needing better multi-instance handling—both point to a user base actively using PicoClaw in real-world messaging channels where these edge cases matter.

Overall sentiment is pragmatic: users are hitting real edge cases, but fixes are landing quickly, and the maintainers appear responsive.

## 8. Backlog Watch

Two items warrant maintainer attention:

1. **[Issue #3287 — Long message support in IRC](https://github.com/sipeed/picoclaw/issues/3287)** (open, 6 comments, stale label): Active user interest with concrete use-case detail. Though labeled stale, it hasn't been actioned yet. The design decisions here (how to reassemble split messages, whether to buffer or concatenate) will benefit from maintainer input to avoid design debt later.

2. **[PR #3340 — fix(slack): set FileSize on media upload params](https://github.com/sipeed/picoclaw/pull/3340)** (open, created today): A small, well-scoped fix for a definite bug. Low-risk and likely mergeable; it should be reviewed promptly to prevent accumulating un-merged fixes that stale out.

3. **[Issue #3339 — Antigravity 429 error](https://github.com/sipeed/picoclaw/issues/3339)** (open, no comments yet): New and unverified externally, but worth triaging quickly to determine if this is a PicoClaw integration issue or a provider-side problem, so users hit the right resolution path.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-18

## 1. Today's Overview

NanoClaw is in a period of intense architectural consolidation. The project saw 42 PRs updated in the last 24 hours, with 25 merged or closed—a high velocity indicating a well-maintained and actively developed codebase. The dominant theme is a substantial **channel-layer abstraction** effort led by core-team contributor `gavrielc`, introducing driver seams and generic hooks to replace hardcoded platform logic. Alongside this architectural work, several targeted bug fixes were merged, addressing issues like lost run logs and a merged-out Slack formatting skill. The issue tracker is relatively quiet with only 4 items updated today, but includes one significant regression report involving task-mode handling in chat sessions. Overall, the project is in a healthy state, balancing significant refactoring with responsive bug fixing, though the volume of stacked PRs suggests a complex merge train that could benefit from careful review.

## 2. Releases

No new releases were published in the last 24 hours. The most recent version mentioned in the issue tracker is **v2.1.48**, which introduced "one-door task delivery"—a change that is now the subject of a reported regression (see Bugs & Stability).

## 3. Project Progress

The bulk of merged PRs today center on a **"wave B" of channel-layer work**. This represents a major refactor to make the Slack integration fully per-thread and to introduce generic, reusable seams for channel modules.

**Key merged PRs (`gavrielc`, all marked `[core-team]`):**
- **[#3310](https://github.com/nanocoai/nanoclaw/pull/3310) - Restore lost Slack formatting skill:** Fixed a merge resolution error where `container/skills/slack-formatting/SKILL.md` was silently dropped during an upstream-main merge.
- **[#3309](https://github.com/nanocoai/nanoclaw/pull/3309) - Slack defaults factory & per-thread mode:** Declares `'per-thread'` session mode for both DM and group contexts, removing the DM/room split, and adds a parameterized bridge factory.
- **[#3305](https://github.com/nanocoai/nanoclaw/pull/3305) - Shared Slack library & canvas cluster:** Introduces a standalone Slack Web API client and a canvas actions module registered through the existing registry.
- **[#3304](https://github.com/nanocoai/nanoclaw/pull/3304) - Adapter-declared session-mode defaults:** Allows adapters to declare `sessionMode` ('shared' or 'per-thread') per context, with the `threads` stamp deriving from this.
- **[#3292](https://github.com/nanocoai/nanoclaw/pull/3292) - Bridge inbound-policy registration seam:** Provides a single interception point for inbound dispatch, replacing direct bridge source edits.
- **[#3297](https://github.com/nanocoai/nanoclaw/pull/3297) - Setup wizard extension points:** Adds per-channel pre-steps and companion-skill declarations for programmatic credential binding.
- **[#3293](https://github.com/nanocoai/nanoclaw/pull/3293) - Router session-created hook:** Notifies modules when a new session is created, enabling platform-specific bootstrap (e.g., thread naming).
- **[#3294](https://github.com/nanocoai/nanoclaw/pull/3294) - Post-delivery hook:** Observes successfully delivered messages with a first-delivery flag for onboarding affordances.
- **[#3295](https://github.com/nanocoai/nanoclaw/pull/3295) - Generic membership-event hook:** Forwards platform member-joined events to a single per-channel handler.
- **[#3296](https://github.com/nanocoai/nanoclaw/pull/3296) - Tool schema extension point:** Adds `extendTool` in the agent-runner for additive MCP tool schema/description extension, facilitating modular enhancements.

**Other notable merged/closed PRs:**
- **[#3302](https://github.com/nanocoai/nanoclaw/pull/3302) by `wakqasahmed` (OPEN):** Corrects the OneCLI gateway default bind address in `.env` (fixes #2903).
- **[#3311](https://github.com/nanocoai/nanoclaw/pull/3311) by `wakqasahmed` (OPEN):** Fixes error routing for scheduled-task turns, ensuring errors go to the operator instead of being lost as a chat message.

## 4. Community Hot Topics

Activity is dominated by core-team architectural PRs, making it hard to separate "community" from "development." However, two clear topics stand out:

- **The `codex` Provider Event Bug ([#3203](https://github.com/nanocoai/nanoclaw/issues/3203)):** This issue is highly active (2 comments) and was updated today. It details an undeclared `file` provider event that breaks typechecking on `main` and causes generated images to be dropped. This is a cross-cutting regression linked to a specific branch (`providers`). A fix PR, [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) by `chiptoe-svg`, also appeared today, bumping the `@openai/codex` pin to address an impending model retirement. This signifies a race to stabilize the codex provider before a hard external deadline.

- **The "one-door" Task Regression ([#3301](https://github.com/nanocoai/nanoclaw/issues/3301)):** Reported by `glifocat`, this issue describes a severe behavioral regression in chat sessions caused by v2.1.48's task delivery change. The user has meticulously detailed how task rows hijack the entire query context, breaking replies and logging. The swift creation of a dedicated fix PR ([#3303](https://github.com/nanocoai/nanoclaw/pull/3303)) shows a responsive maintainer community.

## 5. Bugs & Stability

Two significant bugs were reported today, both with matching fix PRs already in flight. Ranked by severity:

1.  **High Severity: Task-mode Hijack in Chat Sessions ([#3301](https://github.com/nanocoai/nanoclaw/issues/3301))** by `glifocat`
    - **Impact:** Any task row firing in a chat session forces the entire query into task mode, causing logs to be dropped, replies to be eaten, and task series to be unlisted. This is a fundamental breakage of chat functionality for users with pre-existing tasks.
    - **Fix Status:** In progress. PR [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) "fix(tasks): keep run logs for task rows firing in chat sessions" directly addresses part of this issue.

2.  **Medium Severity: Unbounded Pending-Message Polling ([#3289](https://github.com/nanocoai/nanoclaw/issues/3289))** by `glifocat`
    - **Impact:** `getPendingMessages()` loads all due pending rows into JavaScript before processing, which becomes a performance and memory issue with accumulated backlogs.
    - **Fix Status:** In progress. PR [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) "fix: bound pending message polling" by the same reporter is open.

**Other stability notes:**
- **[#3310](https://github.com/nanocoai/nanoclaw/pull/3310)** highlights a non-functional bug where the Slack formatting skill was silently lost during a merge, demonstrating a risk in complex merge trains.
- **[#3300](https://github.com/nanocoai/nanoclaw/pull/3300)** by `torbenstruever` addresses an unescaped attachment type in agent-facing XML, a potential security/injection vector.

## 6. Feature Requests & Roadmap Signals

There are no direct user-submitted feature requests in today's data. However, the core-team PRs themselves are the clearest signal of the project's roadmap focus.

- **Next Version Prediction (v2.2.0 likely):** The extensive channel-layer work is the primary candidate. Expect the **new driver seam (`src/drivers/`)** with Docker as the built-in realization to be a foundational piece, enabling future non-Docker runtimes. The adoption of **per-thread session mode everywhere** is a significant product decision that will change session behavior. The addition of a **Local Web Chat adapter** ([#3298](https://github.com/nanocoai/nanoclaw/pull/3298)) signals a push toward more accessible, non-Slack interfaces, suggesting a broader "channels" future beyond just Slack.

## 7. User Feedback Summary

The most detailed feedback comes from `glifocat`, whose bug reports ([#3301](https://github.com/nanocoai/nanoclaw/issues/3301), [#3289](https://github.com/nanocoai/nanoclaw/issues/3289)) are well-documented and evidence-based.

- **Pain Point: The "one-door" delivery regression is a major source of dissatisfaction.** The user went to great lengths to describe the exact failure modes, indicating frustration with a change that broke previously functioning workflows. The key takeaway is that a refactor designed for one purpose (scheduled tasks) unintentionally broke a core user flow (in-chat tasks), causing significant data loss (logs).
- **Pain Point:** Performance with large backlogs is a concern, prompting calls for more efficient polling mechanisms.
- **Neutral to Positive:** The rapid response with fix PRs for these issues suggests a high degree of trust in the maintainers' ability to address problems, which is a positive signal for project health.

## 8. Backlog Watch

- **[#3203](https://github.com/nanocoai/nanoclaw/issues/3203) - The `codex` provider event regression:** This issue has been open since August 8th (10 days) and is critical, involving a typecheck failure on `main`. While a fix PR exists, the issue is on a `providers` branch and cross-cutting, requiring careful coordination. Its age and criticality make it a top priority for maintainer attention. The related PR ([#3299](https://github.com/nanocoai/nanoclaw/pull/3299)) adds urgency with the GPT-5.4 retirement deadline of 2026-08-31.

- **[#1143](https://github.com/nanocoai/nanoclaw/issues/1143) - Skill docs reference non-existent `/data/env` path:** This documentation bug has been **open for over 5 months** (since March 16, 2026). While closed today, the fact that it took this long to resolve points to a slow-moving backlog for documentation cleanup. It was closed as part of today's activity, so it's worth verifying the resolution and ensuring doc-adjacent code is updated.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-08-18**, generated from the provided GitHub data.

---

# NullClaw Project Digest — 2026-08-18

### 1. Today's Overview
NullClaw is currently in a **low-activity maintenance phase**. Over the last 24 hours, there were **zero new issues** filed or updated, and **zero releases** published. The only activity was a single automated **Dependabot pull request** (#956) proposing a minor Docker base image upgrade (Alpine 3.23 → 3.24), which remains open. The absence of bug reports and PR merges suggests the codebase is currently stable, but the lack of human-driven commits or issue discussions indicates a temporary lull in feature development or community engagement.

### 2. Releases
**No new releases** were published in the last 24 hours (or in the recent period leading up to this date). No changelogs, breaking changes, or migration notes are available for this digest period.

### 3. Project Progress
There were **no merged or closed pull requests** in the last 24 hours. Consequently, no specific features were advanced, bugs were fixed, or code refactoring was completed. The only pending item is a dependency maintenance task (PR #956), which has not been merged yet.

### 4. Community Hot Topics
There are no active community discussions or issue threads to report today. The single active Pull Request is:
- **PR #956**: [ci(deps): bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956)
  - **Status**: Open (Created 2026-06-15, Updated 2026-08-17)
  - **Analysis**: This is an automated dependency update. While it lacks comments or reactions, its prolonged open status (over two months) suggests that either the maintainers are hesitant about the update, or the CI pipeline has been failing on this check. This indicates a need for maintainer attention to either merge or close this routine maintenance task.

### 5. Bugs & Stability
**No bugs, crashes, or regressions** were reported or fixed in the last 24 hours. The project appears stable based on the available data.

### 6. Feature Requests & Roadmap Signals
There are **no new feature requests** visible in the issues tracker for this period. Based on the current dependency updates, the roadmap signal points primarily toward **infrastructure maintenance** (container image updates) rather than new user-facing features. Predictions for the next version are not possible without additional issue data.

### 7. User Feedback Summary
There is no new user feedback, bug reports, or pain-point reports available in the last 24 hours. The lack of negative feedback is a positive indicator for project health, but the lack of positive feedback and use-case discussion also confirms the current low-engagement phase.

### 8. Backlog Watch
- **PR #956** ([Docker Alpine Update](https://github.com/nullclaw/nullclaw/pull/956)): Open for over two months. This is the only item on the back burner. The **Dependabot bot** created this on June 15th, and it has been sitting untouched since August 17th. Maintainers should look into this PR to ensure the Docker image dependencies are not becoming stale, which could eventually lead to security vulnerabilities.

---

*Report generated on 2026-08-18 based on activity from the previous 24 hours.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-18

## 1. Today's Overview

IronClaw is in a high-velocity stabilization and feature-expansion phase, marked by the release of **v1.3.0-rc.1** and a heavy focus on **durable write-path optimization** and **notification infrastructure**. Activity is intense with 29 issues and 44 PRs updated in the last 24 hours. The project has multiple large multi-part initiatives in flight—including a major effort to cut durable DB write pressure by ~60% (*Epic #7591*) and a complete rebuild of the notification system into a durable user inbox (*Epic #7687-7691*). A critical release-blocking bug is causing crash-loops on upgrade. For the first time, a focused *failure taxonomy* issue was published, indicating an emerging commitment to data-driven quality analysis.

## 2. Releases

**IronClaw v1.3.0-rc.1** was released on **2026-08-17**.

- **Release Type:** Release Candidate
- **Potential Breaking Changes:** Referenced in associated issue #7720 — "unknown field `activation_state` in v2 extension installation row." Upgrading from `1.2.x` may cause boot failures for existing deployments (see *Bugs & Stability* section below).
- **Notable PRs likely included:** #7663 (forward-port of 1.2 fixes and thread repair), #7637 (Type the design-system component boundary), #7594 (Tier 1: CoalescingEventSink), #7598 (Tier 2: Collapse capability invocation-state writes), #7605 (Tier 3: Fold message lookup-index sibling rows), and #7647 (deterministic no-delivery outcome for scheduled runs).
- **Migration Note:** Users persistent memory verification (#7275) and the **fix for memory recall across conversations (#7275)** appears to be associated with this release. Users should verify their upgrade path and monitor issue #7720 for guidance, as this release candidate has a known boot issue after upgrade.
- **Install:** Prebuilt binaries are available via shell script (`curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nearai/ironclaw/releases/download/ironclaw-v1.3.0-rc.1/ironclaw-installer.sh | sh`) and PowerShell.

## 3. Project Progress

**Merged/Closed PRs (16):**
- **#7663** — Forward-port of 1.2 fixes (Windows reliability, runtime `curl` healthchecks, thread-index repair) onto main.
- **#7710** — Addressed multi-agent review findings on the Slack unlinked-user nudge (#7682); hardening of connect-link landing.
- **#7703** — Typed WIT tool response (folded into #7711; superseded).

**Key Feature Advancements (Open PRs):**
- **Semantic Google Docs editing (#7718):** XL PR adding structured inspection, anchored batch edits, populated tables, and deterministic verification while preserving legacy tools and OAuth scopes.
- **Streaming + cancel support for CLI (#7513):** Exposes agent over Agent Communication Protocol (ACP) via stdio transport for external tools like GitHub Copilot.
- **New Native Structured Output Finalization (#7693):** Provider-neutral immutable output contract without a built-in tool; can leverage host-owned checkpointing.
- **Durable Backend Suggestions (#7694):** Async `suggestions.*` operations generated through the canonical unbounded runner, with WebUI adapter only (no frontend churn).
- **Automation `run-now` (#7708):** Atomic manual-fire path that preserves an automation's schedule.
- **Durable Notifications (#7688, #7689, #7690, #7691):** Implementing durable notification inbox contracts, storage, ProductSurface APIs, and new UI consumption.
- **WASM typed tool response + guest migration (#7711):** Final PR of the capability-response-normalization stack; replaces stringly error channel with typed WIT.
- **Fix for libSQL write-lane starvation (#7717):** Directly addresses resource-governor cascade issue #7714.
- **Provider Normalization (#7692):** Provider rejections and authentication failures become typed, bounded, and visible.

**Merged/Closed Issues (6):** Includes performance optimizations from the write-pressure epic (#7594, #7598, #7605), design-system typing (#7637), and deterministic automations (#7647).

## 4. Community Hot Topics

1. **Epic: Reduce durable DB write pressure (#7591)** — 3 comments. Central performance initiative. Multiple Tier 1-3 issues derived from it (#7594, #7598, #7603, #7604, #7701, #7707). High signal-to-noise, flagged as actively driven by core team.

2. **Reborn: Verify explicit persistent memory recall (#7275)** — 4 comments (CLOSED). Community reported that memory established in one conversation is not reliably recalled in a later one. Closed with the v1.3.0-rc.1 release; solution likely centered on verified persistent memory integration.

3. **Editing AGENTS.md does not update system prompt (#3762)** — 2 comments (open). A long-standing customer-facing pain point; part of `v1.4.0` scope. Needs deeper UX and system-prompt-cache invalidation work.

4. **Slack: Unlinked-user connect message is public (#7681)** — 0 comments on issue, but high activity on the associated PRs (#7682, #7710). Multi-agent review led to a fix that delivers the nudge privately with a one-click connect link; not yet merged.

**Analysis:** The traffic is predominantly core-team-led engineering. External user feedback is heavily tilted toward **integration connector issues (Slack, Telegram, MCP)**, **workflow reliability (memory recall)**, and **management out-of-band features (GitHub Projects v2 fields)**.

## 5. Bugs & Stability

1. **[Critical] v1.3.0-rc.1 crash-loops after upgrade from 1.2.x (#7720):** Unknown field `activation_state` in v2 extension installation row; exit 1 during composition; crashes until restart policy gives up, taking HTTP/SSH ports offline. **No fix PR yet — this is a release-blocking bug.**

2. **[High] libSQL single shared write connection starves resource-governor journal (#7714):** Under bench load, journal stalls ~40s, leading to cascading authority invalidation and permanent reservation leaks. **Fix PR exists (#7717)** — stops write-lane starvation from cascading.

3. **[Medium] "Add MCP server" flow missing bearer key auth (#7716):** No option to provide an API key/token, and no STDIO/HTTP transport options. **No fix PR yet.**

4. **[Medium] Telegram connection flow lacks consent between bot and personal account (#7715):** Users don't know which mode they're connecting; potential security/open-commentary issue. **No fix PR yet.**

5. **[Medium] Shutdown can hang on a wedged event backend (#7705):** Unbounded shutdown flush in `CoalescingEventSink`; findings from PR #7631 review. **No fix PR yet; tracked as follow-up.**

6. **[Low] Obligation audit records are never attached in production (#7702):** Violates documented host-api contract (`AuditBefore`/`AuditAfter` not written). **Data integrity, not performance.**

7. **[Medium] Storage write-lane contention in main test suites (#7704):** Largest fixable defect identified in daily failure taxonomy across 84 non-passes in clawbench; includes SQLite write-path issues.

## 6. Feature Requests & Roadmap Signals

- **GitHub Projects v2 field manipulation (#7719):** User @sergeiest requests ability to update Projects v2 fields (like Main backlog priority) via the GitHub tool. Likely a high-value developer-workflow feature for future versions; issue labels already reference `bug_bash` variants.

- **Structured output finalization (#7693):** Native structured output contract is a strong signal for the 1.4.0 roadmap, given user antipathy toward hacky JSON parsing as described in the PR.

- **ACP (**Agent Communication Protocol** ) support (#7513):** Early-stage but "new" contributor PR; signals ecosystem interest in interoperability (GitHub Copilot CLI, VS Code). May not land soon but is high-signal for the 1.4.0 directions.

- **Semantic Google Docs editing (#7718):** The fact that users are building semantic editing tools on top of IronClaw indicates a demand for deterministic, document-grade edits vs. string-based manipulation. This is a key `v1.4.0` signal.

- **OOBE / automation-tasks prototype (#6994):** First-run onboarding workstream is a UX signal for the 1.4.0 cycle; off-by-default flag with design + implementation rolling out.

- **Epic: Dogfooding & QA bug fixing (08/17-08/23) (#7685):** Core team has dedicated a full week to dogfooding and QA, indicating a quality push aligning with the `v1.3.0` release.

- **Suggestions framework (#7694):** Durable, async suggestions is a new product surface. Likely will be in next minor version.

## 7. User Feedback Summary

- **Deep dissatisfaction with setup friction around MCP servers** (#7716: no bearer key, no transport options) and **Telegram connections** (#7715: no bot/personal account consent). Users expect first-class auth flows.

- **Cross-conversation memory unreliability (#7275)** is a core trust issue; closed in 1.3.0-rc.1, but this remains a critical capability for agentic products.

- **System prompt not updating after AGENTS.md edit (#3762)** continues to baffle users; long-lived issue with no active fix in a current milestone.

- **Public Slack connect nudges (#7681)** are a UX / privacy annoyance, fixed via PRs #7682 and #7710 but not yet merged.

- **Data quality**: Daily failure taxonomy (#7704) highlighted **storage write-lane contention** as the largest fixable defect; users will benefit from the write-pressure epic #7591 and the new write-path optimizations.

## 8. Backlog Watch

- **#3762 (AGENTS.md edit not updating system prompt):** Open since **May 18, 2026**, with only 2 comments despite being customer-facing. Needs maintainer attention; no PR in flight. High-touch UX bug likely to attract more user traffic.

- **#3795 (related?)** — not present, but confirming: Long-running core-tool contract PR #7491 (omp core-tool contract + engines) has been open since **August 11** and hasn't been merged; it's a fundamental change to core tooling and may be a bottleneck.

- **#7184 (Nostr host functions for WASM tools):** Open since **August 4**; author is a "new" contributor. Feature is waiting on the WASM capability-response-normalization stack (#7627) to land.

- **#7406 (Dependabot PR, actions group):** No comments; silent CI dependency drift is generally safe to merge but requires maintainer review.

- **#7713 (test: exercise /benchmark on qa-automation-preview):** Explicitly not for merge unless the doc note is useful; needs maintainer decision to close or pick up.

**Overall Assessment:** IronClaw is healthy and active, with a strong core team executing a confident roadmap. The heavy volume of PRs and issues is driven by the ambitious write-pressure epic and the v1.3.0 release. The **critical boot crash (#7720)** is the immediate release-blocking risk. The community feedback loop is functional but skewed toward issues with core-team authorship; external user voices are concentrated in integration-feature requests and UX reliability complaints.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-08-18

---

## 1. Today's Overview

LobsterAI shows a **high-velocity development cycle** with 21 PRs updated in the last 24 hours, of which 18 were merged or closed — indicating a mature, actively-maintained codebase with strong contributor throughput. The issue tracker remains relatively quiet (7 open issues, all pre-existing), with no new bug reports filed today, suggesting stable recent releases. A notable spike in merged PRs includes **UI/UX consistency improvements** (context menus, Esc-key modal handling, i18n fixes) and **infrastructure enhancements** (DeepSeek Harness integration, OrcaRouter provider support), signaling a focus on both polish and extensibility. While no new releases were cut today, the high merge volume suggests a significant release may be imminent. One external project (VOKO) has reached out proposing cross-platform agent communication integration, potentially opening a new strategic direction for the project.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent release activity appears to be the OpenClaw runtime upgrade (v2026.4.12) merged via [PR #1663](https://github.com/netease-youdao/LobsterAI/pull/1663).

---

## 3. Project Progress

The project saw **18 merged/closed PRs** today, spanning multiple areas:

### Infrastructure & Integrations
- **[PR #2506](https://github.com/netease-youdao/LobsterAI/pull/2506)**: Added DeepSeek Harness (dsh) runtime setup documentation
- **[PR #2505](https://github.com/netease-youdao/LobsterAI/pull/2505)**: Implemented dsh process launcher
- **[PR #2502](https://github.com/netease-youdao/LobsterAI/pull/2502)**: Integrated dsh as a new engine (macOS included)
- **[PR #2504](https://github.com/netease-youdao/LobsterAI/pull/2504)**: Added **OrcaRouter** provider integration (Anthropic/OpenAI-compatible LLM gateway), mirroring OpenRouter wiring end-to-end — currently open

### UX & UI Improvements
- **[PR #2503](https://github.com/netease-youdao/LobsterAI/pull/2503)**: Added edit context menu (Cut/Copy/Paste/Select All) for text inputs in Electron main window
- **[PR #2501](https://github.com/netease-youdao/LobsterAI/pull/2501)**: Fixed skill upgrade progress overlay to render consistently across the full app shell
- **[PR #1636](https://github.com/netease-youdao/LobsterAI/pull/1636)**: Added floating "scroll to bottom" button in Cowork chat window (hover-triggered)
- **[PR #1637](https://github.com/netease-youdao/LobsterAI/pull/1637)**: Added "Regenerate" button for AI replies, positioned next to CopyButton
- **[PR #1640](https://github.com/netease-youdao/LobsterAI/pull/1640)**: Added one-click copy buttons to tool execution results (Bash output, diff views, etc.)
- **[PR #1641](https://github.com/netease-youdao/LobsterAI/pull/1641)**: Unified Esc-key close behavior across all modals via base Modal component update
- **[PR #1642](https://github.com/netease-youdao/LobsterAI/pull/1642)**: Added Windows Explorer right-click context menu registration
- **[PR #1675](https://github.com/netease-youdao/LobsterAI/pull/1675)**: Grouped session list by time periods (Today → Yesterday → 7 days → 30 days → Monthly)

### Bug Fixes
- **[PR #1639](https://github.com/netease-youdao/LobsterAI/pull/1639)**: Fixed hardcoded English tooltips (i18n compliance)
- **[PR #1661](https://github.com/netease-youdao/LobsterAI/pull/1661)**: Redacted sensitive information (API keys, tokens, request bodies) from exported logs
- **[PR #1663](https://github.com/netease-youdao/LobsterAI/pull/1663)**: Upgraded OpenClaw to v2026.4.12 and openclaw-weixin to 2.1.8 (fixes plugin-sdk compatibility error)
- **[PR #1667](https://github.com/netease-youdao/LobsterAI/pull/1667)**: Updated Qwen console links from DashScope to Bailian
- **[PR #1669](https://github.com/netease-youdao/LobsterAI/pull/1669)**: Fixed model provider settings UX (disabled test button when incomplete, proper displayName in results)

### Core Features
- **[PR #1668](https://github.com/netease-youdao/LobsterAI/pull/1668)**: Added per-agent independent working directory configuration with migration support

---

## 4. Community Hot Topics

### Most Active Issues
1. **[Issue #1653](https://github.com/netease-youdao/LobsterAI/issues/1653) — groupPolicy 被覆盖** (2 comments)
   - User reports that `groupPolicy` keeps getting overwritten to `allowlist` periodically. This is a configuration persistence bug affecting access control settings.

2. **[Issue #2500](https://github.com/netease-youdao/LobsterAI/issues/2500) — VOKO: AI Agent 跨平台通信** (1 comment)
   - External project pitch: VOKO proposes a "cross-platform communication layer for AI agents" to standardize A2A (agent-to-agent) communication. Already integrated with OpenClaw, VOKO IM, and AstrBot. This represents an interesting **ecosystem partnership opportunity** for LobsterAI.

### Merge Queue Activity (Stale PRs)
Several PRs from April (marked `[stale]`) were **merged today** after months of dormancy:
- [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636), [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637), [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640), [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) — Cowork UI improvements from community contributor `0xFLX`
- [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) — Per-agent working directories

This suggests maintainers conducted a **stale PR cleanup pass**, which is a positive sign for community contributor morale.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | [Issue #1653](https://github.com/netease-youdao/LobsterAI/issues/1653): `groupPolicy` periodically overwritten to `allowlist` | Open since April 13 | Configuration regression; no fix PR yet. Potentially affects multi-tenancy/access control. |
| **Medium** | [Issue #1635](https://github.com/netease-youdao/LobsterAI/issues/1635): Ollama local models unusable (qwen3, gemma4) | Open since April 12 | Error screenshot attached; Ollama works fine in CherryStudio, suggesting integration issue. |
| **Medium** | [Issue #1662](https://github.com/netease-youdao/LobsterAI/issues/1662): MCP engines other than SSE unusable | Open since April 14 | No workaround documented. |
| **Low** | [Issue #1643](https://github.com/netease-youdao/LobsterAI/issues/1643): False "unsaved content" warning on scheduled task save | Open since April 12 | Cosmetic; save actually succeeds. |
| **Low** | [Issue #1671](https://github.com/netease-youdao/LobsterAI/issues/1671): Markdown→Word conversion fails midway with "sse response finish reason: full" | Open since April 14 | Likely context window limit; no fix identified. |

**No new bugs** were filed today. The bug queue is stable at 7 open issues, all from April, indicating either good QA in recent releases or a stale backlog requiring triage.

---

## 6. Feature Requests & Roadmap Signals

### Explicit Requests
1. **[Issue #1644](https://github.com/netease-youdao/LobsterAI/issues/1644) — MD-based workflow orchestration**: User requests the ability for the main agent to orchestrate other agents into completing complex tasks via markdown workflow definitions. Currently agents are isolated (main agent cannot perceive sibling agents). This aligns with the broader A2A trend and may be a roadmap candidate.

2. **[Issue #2500](https://github.com/netease-youdao/LobsterAI/pull/2500) — Cross-platform agent communication**: VOKO proposes a protocol layer for inter-agent messaging across frameworks and IM channels.

### Signals from Merged PRs
- **DeepSeek Harness (dsh) integration** ([#2502](https://github.com/netease-youdao/LobsterAI/pull/2502), [#2505](https://github.com/netease-youdao/LobsterAI/pull/2505), [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506)): New engine support suggests expansion of runtime backends.
- **OrcaRouter provider integration** ([#2504](https://github.com/netease-youdao/LobsterAI/pull/2504)): Continued multi-provider strategy, making the platform more agnostic.
- **Per-agent working directories** ([#1668](https://github.com/netease-youdao/LobsterAI/pull/1668)): Supports the broader trend toward multi-agent workflows by giving agents isolated environments.

### Predictions for Next Release
- **Multi-agent orchestration** (workflow files, inter-agent messaging) appears to be the most requested capability and a natural next feature given the per-agent directory groundwork.
- **Provider ecosystem expansion** continues steadily (OrcaRouter, dsh), suggesting an "any-model, any-backend" philosophy as a differentiator.
- **Collaboration UX polish** (regenerate, scroll-to-bottom, copy buttons, Esc closes) indicates the Cowork surface is maturing toward parity with mainstream chat applications.

---

## 7. User Feedback Summary

### Pain Points
- **Ollama/local model friction** ([#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)): Users invested in local-first setups are blocked. This is a significant UX gap versus competitors like CherryStudio.
- **Configuration persistence issues** ([#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)): Silent overwrites undermine trust in settings management.
- **MCP protocol limitations** ([#1662](https://github.com/netease-youdao/LobsterAI/issues/1662)): Only SSE transport works; users on stdio/HTTP need alternatives.
- **Long-context truncation** ([#1671](https://github.com/netease-youdao/LobsterAI/issues/1671)): File conversion fails mid-task without graceful recovery.

### Satisfaction Indicators
- **Improvement in UX consistency** (today's merges): Tooltips localized, copy buttons added, modals now Esc-closeable — signals the team values the little things.
- **Logical troubleshooting**: The per-agent working directory feature ([#1668](https://github.com/netease-youdao/LobsterAI/pull/1668)) directly addresses isolation needs for multi-agent setups.
- **External recognition**: VOKO reached out with a star and integration proposal, suggesting the project is being viewed as a serious platform in the agent ecosystem.

### Use Cases Observed
- Local model deployment (Ollama) with MCP tool access
- Multi-agent collaborative task execution
- Long-document workflows (Markdown → Word)
- Scheduled task automation with access control policies

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Age | Priority Assessment |
|-------|-----|---------------------|
| [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) — Ollama models unusable | ~4 months | **High**: Blocks a core user segment. No response pattern visible. |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) — Non-SSE MCP unsupported | ~4 months | **Medium**: Limits MCP ecosystem adoption. |
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) — MD-based agent orchestration | ~4 months | **Medium-High**: Major feature request with detailed user story; roadmap signal. |
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) — groupPolicy overwritten | ~4 months | **High**: Silent configuration regression; access control implications. |

### Open PRs Requiring Review
- **[PR #2504](https://github.com/netease-youdao/LobsterAI/pull/2504)** — OrcaRouter integration: Active new PR, likely to be reviewed soon.
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — Dependabot electron bump (v40→v43): Open since **April 2**. Major version bump may require careful review of breaking changes; 4+ months stale is concerning for security posture.
- **[PR #1660](https://github.com/netease-youdao/LobsterAI/pull/1660)** — Non-main agent welcome header: Open since April 13; straightforward UI improvement that has been waiting ~4 months.

### Stale Issue Cleanup
7 open issues, all marked `[stale]`, have not received maintainer responses. A **triage pass** would help close or address these to keep the backlog healthy. The recent flurry of stale PR merges suggests the team is active in cleanup — extending this to issues would be valuable.

---

*Generated from LobsterAI GitHub activity data for 2026-08-18.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-18

## 1. Today's Overview

Moltis is showing a solid, healthily-paced development cycle. The project processed a significant batch of nine pull requests in the last 24 hours, with six merged/closed and three still open. The two closed issues (#1202, #1127) were resolved via merged PRs, indicating good issue-to-PR velocity. A key focus area is clearly on the heartbeat/cron subsystem, with two open PRs directly addressing related bugs. While the day saw no new releases or dependency updates, the active merge of four dependency bumps and a substantial feature PR for external agents signals continued maturation of the codebase.

## 2. Releases

No new releases were published for this period. The project remains in a development phase between tagged versions. Users on the latest release should track the `main` branch for upcoming features and fixes, particularly the merged `gptme-thomas` PR #1125 for external agents and the `penso` PR #1206 for the Files library.

## 3. Project Progress

Six pull requests were merged or closed during this period, advancing several significant features:

- **External Agent Model/Effort Selection (PR #1125, closed):** Merged by `gptme-thomas`, this adds first-class `models = [...]` and `efforts = [...]` configuration for external-agent providers, surfaced through the `/model` command. This is a major UX and capability improvement for multi-agent setups.
- **WebUI RPC Timeout Config (PR #1130, closed):** Merged by `khimaros`, this closes issue #1127 by making the RPC timeout in the WebUI configurable, giving users control over session durations.
- **MiniMax Code ACP Agent (PR #1204, closed):** Merged by `hetaoBackend`, this adds a new `acp-minimax-code` external-agent kind backed by `mcode acp`, including auto-detection and TOML config documentation.
- **Shadow DOM Lookup Efficiency (PR #1103, closed):** Merged by `s-salamatov`, this fixes browser snapshot and ref-based lookup paths to pierce shadow DOMs efficiently, resolving a long-standing issue from June.
- **Dependency Bumps (PR #1207, #1087, closed):** Dependabot merged updates for `wasmtime-wasi`, `cmov`, `quinn-proto`, `serde_with`, and `tar`, keeping the Rust crate ecosystem current.

## 4. Community Hot Topics

The most discussion-generating item today is the open bug report on Podman support:

- **[Issue #1095: [Bug] Podman is not working via moltis](https://github.com/moltis-org/moltis/issues/1095)** — With 2 comments, this issue from `RokkuCode` has been open since June and is still active. The user followed the preflight checklist, including searching existing issues. The need here is for a reliable container-runtime fallback path beyond Docker. The "comments" field shows undefined for PRs in the provided data, so there is no comparable metric for the open pull requests. Given the issue's age and continued relevance, it is a candidate for maintainer prioritization.

## 5. Bugs & Stability

Two bugs were reported or addressed today, with mixed severity:

- **Podman not working via Moltis (Issue #1095, open):** **Severity: High.** This is a user-facing blocker for any workflow relying on Podman for isolation or ACP execution. The issue lacks explicit reactions, but its longevity (open for 2.5 months) and status as the only open bug makes it a top stability concern. There is no associated fix PR. 
- **CI Format Gate Failing on `main` (Issue #1202, closed):** **Severity: Medium (process).** The `Format` CI job failed on `main` (commit 594ffaf1) because two files exceeded the 1500-line limit: `crates/memory-zvec/src/store.rs` (1799 lines) and `crates/gateway/src/methods/services/admin.rs` (1531 lines). This is a development-process regression, not a runtime crash. It was closed, presumably with a fix, but note that the file-size gate is a health indicator for maintainable code.

**Bug fixes advanced via PRs:** A notable fix is PR #1209 (open) for `heartbeat.update` overwriting the entire config with defaults instead of patching it — a high-severity logic bug that could silently clobber user settings. PR #1208 (open) fixes `heartbeat.active_hours` having no effect. Both are authored by `Lstarsky0`.

## 6. Feature Requests & Roadmap Signals

Two feature requests were active or recently resolved:

- **[RPC Timeout Configuration (Issue #1127, closed):](https://github.com/moltis-org/moltis/issues/1127)** This request from `khimaros` to make the WebUI RPC timeout configurable was quickly fulfilled by the user's own PR #1130, which was merged. This signals that the project is receptive to community contributions and quick to ship self-serve fixes.
- **Active Hours for Heartbeat (PR #1208, open):** While not an explicit issue, this PR addresses a documented-but-ignored feature (`heartbeat.active_hours`). The PR implies users expect this to work.

**Prediction for the next release:** The next version is likely to include the merged work on external agents (model/effort selection and MiniMax Code), the WebUI timeout setting, and the thorough heartbeat fixes. The "managed Files library" from PR #1206 is substantial and may take longer to stabilize.

## 7. User Feedback Summary

User activity is constructive and solution-oriented. `khimaros` (Issue #1127) exemplified this by submitting a PR within hours of filing a feature request, suggesting high developer satisfaction with the contribution process. The `RokkuCode` Podman issue shows a frustration point: users want Moltis to be runtime-agnostic, not Docker-gated. The "undefined" comments field in the data limits analysis, but the overall signal is a project where users are engaged enough to propose and implement their own improvements.

## 8. Backlog Watch

One issue requires maintainer attention:

- **[Issue #1095: Podman not working (open, 2.5 months)](https://github.com/moltis-org/moltis/issues/1095)** — This is the single most important open bug with no linked fix PR. Its long shelf life and impact on non-Docker users make it a prime candidate for a maintainer to triage, reproduce, or mentor a contributor on. It is also the only open bug, making it a glaring gap in an otherwise clean issue tracker.

No other issues show signs of being stuck or abandoned. The new PRs from `penso` (#1206) and `Lstarsky0` (#1208, #1209) are fresh and likely to receive reviews soon.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date: 2026-08-18**

---

## 1. Today's Overview

CoPaw (QwenPaw) is experiencing a high-velocity development cycle with **33 PRs updated in the last 24 hours** (20 merged/closed, 13 open) and **14 issues updated** (9 active, 5 closed). No new releases were published today, with the project currently at **v2.1.0**. The activity indicates a mature project in active maintenance: significant bug-fixing momentum across channels (OneBot, Feishu, Console), infrastructure work on release pipelines, and steady feature contributions from a growing first-time contributor base. The project appears healthy, though several medium-severity bugs remain open and the issue triage rate is slightly outpaced by new issue creation.

---

## 2. Releases

**No new releases today.** The project remains at **v2.1.0**. Notably, Issue [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) references a **v2.0.0-post3 Docker image** with MCP tool not-found errors, suggesting users are gradually migrating to 2.1.0. No migration notes or breaking-change notifications are currently available for the upcoming release.

---

## 3. Project Progress

The following PRs merged/closed today represent substantial project advancement:

**Infrastructure & CI/CD:**
- [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) — **DataPaw native app runtime** with durable analysis workspace was merged (featured as a first-time contributor PR)
- [#7089](https://github.com/agentscope-ai/QwenPaw/pull/7089) (open) — Standalone version-driven release pipeline for datapaw plugin, decoupling plugin CDN releases from the main QwenPaw cadence

**Console/UI fixes:**
- [#7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) — Newly installed PawApps now open immediately without manual page refresh
- [#7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) — Media download controls for audio/attachments in chat
- [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) — Context-usage ring now updates correctly after `/compact`
- [#6981](https://github.com/agentscope-ai/QwenPaw/pull/6981) — Removed `/approve` and `/deny` hints from input placeholders across all 7 locales
- [#5151](https://github.com/agentscope-ai/QwenPaw/pull/5151) — GitPanel tab styling fixed (CSS `ant-` prefix → `qwenpaw` prefix)
- [#7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) (closed) — Compact background task list with scroll hint

**Token/context fixes:**
- [#6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) — **Important fix**: stop counting base64 images as text tokens (a 2 MB photo was inflating the context ring to ~700k "tokens")

**Open PRs worth watching:**
- [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) — Adding **Volcengine Agent Plan** and **Xiaomi MiMo V2.5** as built-in providers (open since July 28, needs attention)
- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Large unification PR: provider discovery, model metadata, routing, agent controls

---

## 4. Community Hot Topics

| Issue | Title | Comments | Signal |
|-------|-------|----------|--------|
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) (closed) | MCP tool "Tool notfound" after upgrade to 2.0 | 7 | **Most active.** User reports MCP tools with `[mcp-key]__[tool_name]` naming fail with "not found" on v2.0.0-post3 Docker. Closed but likely a systemic MCP naming/mapping issue with migration implications |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) (open) | Console stop request cancels active Feishu session under multiple UI sessions (2.1.0) | 6 | Session identity cross-contamination between Console and Feishu channels. Original framing corrected with direct evidence. Indicative of session-scoping architectural challenges |
| [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) (open) | 智能体协作希望在一个会话窗口里 (Agent collaboration in one session window) | 3 | Users find the per-conversation-per-agent collaboration model disruptive; they want a single window with shared context |
| [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) (open) | 按频道独立配置模型 (Per-channel model configuration) | 3 | Users want channel-level model overrides (e.g., DingTalk→gpt-4o, WeChat→qwen-max, Console→llama.cpp) instead of global or agent-level settings |

**Underlying needs:** Multi-channel session isolation and per-channel configuration are emerging as critical architectural themes. The user base spans power users (Docker, custom providers, multi-channel bots) who need granular control and predictable routing.

---

## 5. Bugs & Stability

Ranked by severity:

**High severity:**
- [#7088](https://github.com/agentscope-ai/QwenPaw/issues/7088) (closed) — **OneBot channel leaks short-lived QQ image URLs to LLM; expired `rkey` → HTTP 400 + poisoned session history.** Closed today; mitigation required for all subsequent replies in that chat. **Fix PR [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) (open) addresses the broader class of remote URL localization.**
- [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) (open) — Console stop request cancels active Feishu session (session identity collision). Multi-session isolation defect.

**Medium severity:**
- [#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) (open) — `_StructuredOutputDynamicClass` Pydantic error breaks initialization, model execution fails with `MODEL_EXECUTION_ERROR`.
- [#7084](https://github.com/agentscope-ai/QwenPaw/issues/7084) (open) — Chat history with only one conversation: clicking historical session does nothing until a second conversation is created.
- [#7077](https://github.com/agentscope-ai/QwenPaw/issues/7077) (closed) — Plugin runtime hooks silently lost after workspace reload (hot-install), affecting `register_runtime_hook()`, `register_skill_provider()`, `register_mode()`.

**Low severity / targeted:**
- [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) (closed) — Console chat image attachments lost on session reload (broken thumbnails).
- [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) (closed, invalid) — Reported crash on tool call (`async for` on coroutine) — closed as invalid, likely user-environment issue.

**Verdict:** Bug-fix velocity is strong (5 of 9 issues closed today). The stale media URL class of bugs (OneBot + [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087)) is receiving appropriately focused attention.

---

## 6. Feature Requests & Roadmap Signals

**High-probability next-version candidates:**

1. **[#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) — Per-channel model configuration** (open, 3 comments). Strongly aligns with ongoing provider unification work in PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302). Likely included or blocked by that PR's progression.

2. **[#7079](https://github.com/agentscope-ai/QwenPaw/issues/7079) + PR [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) — PowerContext pluggable long-term memory backend** (open). Introduces `PowerContextMemoryManager` alongside `ReMeLightMemoryManager`. Clear implementation path; first-time contributor, needs maintainer review.

3. **[#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) — Search/filter for skill pool import UI** (open, 1 comment). UX polish for large skill libraries — upstream dependency on `questionary` capabilities.

4. **[#7075](https://github.com/agentscope-ai/QwenPaw/issues/7075) — Cron/scheduled task run details** (open, 1 comment). Users want granular visibility: start time, duration, result, status for long-running tasks (5–10 min) to confirm triggering and execution status.

5. **[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) — Unified agent collaboration sessions** (open, 3 comments). Product-direction signal; significant UX redesign, likely lower priority than infrastructure work.

**Lower priority / maintenance signals:**
- [#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076) (open) — qwenpaw-creator LLM config returns HTTP 404 on v2.1.0.
- [#7086](https://github.com/agentscope-ai/QwenPaw/pull/7086) (open) — Language options inconsistency (7 vs 5 locales between dropdown and settings gear).

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **MCP migration friction** | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) — tool names changed (`[mcp-key]__[tool_name]`) and "not found" errors on upgrade | Negative; documentation/behavioral clarity needed |
| **Multi-channel power users** | [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) — per-channel models; [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) — session collision | Mixed; high expectations for enterprise-grade multi-channel behavior |
| **Session/history UX** | [#7084](https://github.com/agentscope-ai/QwenPaw/issues/7084) — history click failure; [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) — lost image attachments | Dissatisfaction with persistence/state reliability |
| **Collaboration paradigm** | [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) — wants single-window agent collaboration | Product-direction mismatch; users want less switching, more shared context |
| **Image/token accounting** | [#6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) — image uploads falsely reported ~100% context usage | Positive response to fix merged today |

Overall, users favor rich multi-channel agent deployments with granular control, and they are sensitive to session-state drift and opaque task execution.

---

## 8. Backlog Watch

**Issues/PRs requiring maintainer attention:**

| Item | Age | Concern |
|------|-----|---------|
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) — Volcengine Agent Plan + Xiaomi MiMo V2.5 providers | **21 days** (since 2026-07-28) | Open PR with no recent maintainer activity; provider additions are commonly requested by the OpenClaw/Claude Code community |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Provider discovery/model routing unification | **28 days** (since 2026-07-21) | Large, architectural PR; risk of merge staleness. This is referenced implicitly by multiple bug reports around config; needs resolution |
| [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) — Persistent workspace artifact cards | **13 days** (since 2026-08-05) | Feature-complete WorkBuddy-style artifact cards; no maintainer visibility |
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) — Session-scoped multi-project directories | 5 days | Addresses user pain around multi-project workflows; ties to agent collaboration UX |
| [#6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) — Antivirus software blocking sandbox | 5 days | Security-adjacent; user environments blocked by AV — common China-market issue |

**Ecosystem signal:** Three first-time contributor PRs landed this week (DataPaw runtime, PowerContext memory, AnySearch integration, language options fix). Community contribution health is excellent, but the open PR list is growing — maintainer review bandwidth will be a gating factor.

---

## Final Assessment

**Project health: Strong.** High merge velocity, active community contributions, and a clear architectural direction (provider unification, session isolation). Key risks: (1) the multi-session identity bug ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)) could erode trust in production multi-channel deployments, and (2) large PRs like [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) are at risk of staleness. Recommend prioritization of session-scoping fixes and a maintainer pass on the open PR backlog.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-18

## 1. Today's Overview

ZeroClaw shows **high sustained activity** across both issues and pull requests, with 50 issues and 50 PRs updated in the last 24 hours. The project is in a **significant governance and architecture transition phase** — the top discussions revolve around RFC process reform (#9496), security architecture consolidation (#7141, #7142, #6971), and several high-risk feature proposals awaiting maintainer decisions. **Security hardening dominates merged work today**: six PRs closed, with fixes for Gemini API key exposure (#9973), QQ/Mattermost download bounding (#10000), implicit email attachment file reads (#9993), WhatsApp approval token lifecycle (#9612), action budget atomicity (#9996), and SOP definition loading (#9765). The tracker #8692 indicates a substantial maintainer decision queue, with multiple RFCs (12+ accepted but not yet implemented) pending rollout. Overall project health appears **strong but strained** — active contribution from trusted/principal contributors, but the backlog of accepted RFCs suggests execution capacity may be a bottleneck.

## 2. Releases

**No new releases** in the last 24 hours. The project appears to be between releases — the RFC tracker #6808 references "0.8.0-beta-1 → current 0.8.4" as rollout status, and multiple security/architecture RFCs (v0.9.0 milestone) are still in progress. No migration notes or breaking changes to report this period.

## 3. Project Progress

**Six PRs merged/closed in the last 24 hours**, heavily focused on security and infrastructure hardening:

**Security fixes (4):**
- **#9973** — `fix(providers): keep Gemini API keys out of URLs` — Removed API keys from generation/warmup URLs, switched to `x-goog-api-key` header
- **#10000** — `fix(channels): bound QQ and Mattermost downloads` — Added shared bounded HTTP reader, 10 MiB QQ / 25 MiB Mattermost limits
- **#9993** — `fix(email): stop implicit attachment file reads` — Empty payload no longer triggers local-file reads via display filename
- **#9612** — `fix(channels): tie WhatsApp Cloud approval token to a guard` — Prevents orphaned bearer credentials on exit paths
- **#9996** — `fix(security): make action budget accounting atomic` — Reserves capacity before tool side-effect boundary, prevents parallel over-spend (closes #9849)

**CI/CD and tooling (2):**
- **#10043** — `ci(lint): remove duplicate architecture test guards` — Eliminated redundant test invocations; Test workflow is canonical owner
- **#10039** — `ci(clippy): share Clippy command runner across workflows` — Extracted `scripts/ci/run_clippy.sh`, prevents workflow drift
- **#10010** — `test(cron): avoid ETXTBSY race in custom shell test` — Replaced runtime-written script with PATH-resolved symlink (closes #10011)

**Provider reliability (1):**
- **#9544** — `fix(delegate): honor configured provider fallbacks` — Delegation now uses canonical session provider builder; configured aliases/routes/retries/fallbacks respected

## 4. Community Hot Topics

The most active discussions reveal a **project in deep architectural reflection**:

1. **#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup** (23 comments) — Governance/process meta-discussion about how maintainers route work. Signals that **project management overhead is straining the team**.

2. **#8603 — RFC: ZeroClaw Chat Completions profile** (23 comments) — Opens ZeroClaw to OpenAI-compatible clients (Open WebUI, LobeChat, Continue.dev, LangChain). High-demand interop feature with substantial external ecosystem pull.

3. **#8303 — RFC: Goal mode v1** (22 comments) — Bounded foreground Matrix work; user objective pursuit across turns. Community pushing for **durable, bounded task execution**.

4. **#7155 — RFC: Per-execution confirmation for high-risk shell commands** (20 comments) — Claude Code-style allow/ask/deny policy. Represents user demand for **finer-grained security UX** rather than blanket policies.

5. **#9487/#9488 — RFC pair: Runtime-owned sessions + unified attachments** (19+18 comments) — Related architecture proposals from @NiuBlibing about owning conversation state and standardizing attachments across web/channels.

6. **#7141 — RFC: Pluggable inbound authentication and canonical principals** (16 comments) — Security architecture for OIDC identity, targeting v0.9.0.

**Underlying need**: The community is pushing for (a) broader protocol interop (OpenAI compat), (b) granular security controls, (c) cleaner architectural separation, and (d) **less process overhead** in the RFC pipeline itself (#9496, 9 comments, directly proposes streamlining discussion/voting).

## 5. Bugs & Stability

**Reported bugs in the last 24h:**

| Severity | Issue | Component | Status |
|----------|-------|-----------|--------|
| **S2** | **#10023** — Failure logs claim requested model, not pinned fallback model | Provider (reliable) | Open, in-progress — misdiagnosis risk for operators |
| **S2** | **#9594** (closed) — Coding-agent tools charge action budget twice | Tools | **Fixed** via #9996 (atomic accounting) |
| **S2** | **#9849** (closed) — RateLimitedTool budget check non-atomic under parallel dispatch | Runtime | **Fixed** via #9996 |

**Notable**: #10023 suggests the recent #9544/#10003 provider reliability work may have introduced or revealed a logging issue where retry/cooldown lines reference the requested model instead of the actual served (pinned) model. The fix for the double-charging budget bug (#9594/#9849) landed in #9996, confirming root cause was check-before/record-after race.

**Open PRs tracking bugs:**
- **#8713** — file_download SSRF gate needs `allowed_private_hosts` opt-in (security, size:XL, open since July 4)
- **#10021** — Apply target thinking to independent delegates (runtime behavior bug)
- **#10003** — Reliable provider rejected-attempt accounting exactness (size:XL)
- **#10038** — Invalid `session_target` in cron API should be rejected, not silently isolated

## 6. Feature Requests & Roadmap Signals

**High-signal RFCs (accepted, awaiting implementation):**

| RFC | Feature | Priority | Risk |
|-----|---------|----------|------|
| #8603 | OpenAI Chat Completions protocol compat | P2 | High |
| #8303 | Goal mode v1 — bounded foreground work | P2 | High |
| #7155 | Per-command shell policy (allow/ask/deny) | P1 | High |
| #7100 | Per-model capability/context_window config | P1 | High |
| #9397 | Empty WhatsApp `allowed_groups` = permit-none | P1 | High |
| #7141 | Pluggable inbound auth + canonical principals | P1 | High |
| #6971 | Security posture & universal ingress policy | P2 | High |

**Emerging signals:**
- **#9972** (tracker) — Eliminate user-facing literal output outside localization boundaries; Fluent-based i18n is becoming a hard requirement
- **#10059** — Option-Backspace word deletion in ZeroCode (good-first-issue, P3) — small UX polish
- **#9986** (open PR) — `zeroclaw agents export` to portable bundles — environment portability demand
- **#9621** — Staged opt-in product telemetry with operator-reviewed reports — maintainers want usage data to prioritize
- **#9346** — Unified package/capability/config/runtime-state catalog — consolidation toward single source of truth

**Next version prediction**: The cluster of accepted P1/P2 RFCs around security (auth, ingress, shell policy, WhatsApp) plus the OpenAI-compat profile (#8603) are strong candidates for the next minor release. The RFC process reform (#9496) suggests we may see **accelerated decision-making** in the next cycle, which could unblock multiple queued items.

## 7. User Feedback Summary

**Pain points expressed through issues:**

1. **Configuration complexity** — Multiple RFCs (#7100, #9346, #9487) reference fragmented config sources: "Provider-family defaults can misreport vision support… unset per-alias context window falls back to 32,000 tokens even when the model supports more" (#7100). Users are hitting **incorrect capability detection** and want explicit per-model controls.

2. **Safety gap on local/private network fetches** — PR #8713 (open since July 4) addresses "a typo or copy-paste of `http://127.0.0.1`, `http://169.254.169.254/latest/meta-data/`, or `http://10.0.0.5/...` silently routing to local resources" — SSRF protection is a real deployment concern.

3. **Channel security defaults** — #9397 highlights that "an empty list currently admits every group the linked account belongs to" for WhatsApp. Security defaults matter; users expect fail-closed behavior.

4. **Operational observability** — #10023 (misleading failure logs) and #9621 (telemetry RFC) show operators want **accurate diagnostic information** and maintainers want usage data to make product decisions.

5. **Client ecosystem interop** — #8603 lists Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK as desired clients. Strong external demand for **standard protocol adoption**.

**Satisfaction indicators**: High contributor engagement, active RFC revisions with maintainer review cycles, and multiple trusted contributors (Audacity88, vrurg, belumume) consistently producing security fixes suggest a healthy, collaborative maintainer-contributor relationship.

## 8. Backlog Watch

**Items needing maintainer attention:**

1. **#8713** (PR, open since 2026-07-04, 45 days) — `file_download SSRF gate` — Security fix of size:XL, flagged `needs-author-action`. **High priority security work stalled**, possibly blocked on author response.

2. **#8692** (tracker) — Maintainer decision queue — This tracker itself shows **13 RFCs/design issues actively queued** for maintainer action. Multiple accepted RFCs (e.g., #6954, #7897, #9621) still await implementation assignment.

3. **#6165** (open since 2026-04-27, 113 days) — RFC: lighter core through external integrations — oldest active RFC with 15 comments; marked `needs-maintainer-review`. Long-dormant architectural direction conversation.

4. **#6653** (open since 2026-05-14, 96 days) — Host-architecture policy for emulated installs — 7 comments, low-priority but unresolved edge case in update mechanics.

5. **#9314** (PR, open since 2026-07-23) — Telegram long-poll offset fix (size:XL, P1) — **Critical channel reliability** issue (message loss on transient failure) without maintainer review approval, despite being flagged P1.

6. **#9986** (PR, open since 2026-08-13) — Agent export bundle — new feature, `needs-author-action`, at risk of stalling.

**Pattern**: Size:XL PRs (security and reliability related) tend to sit longest awaiting maintainer review. The decision queue (#8692) and RFC process reform (#9496) directly address this bottleneck — expect process changes that may accelerate large-PR review cycles.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*