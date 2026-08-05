# OpenClaw Ecosystem Digest 2026-08-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-05 02:39 UTC

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

Based on the GitHub data from OpenClaw (github.com/openclaw/openclaw) for 2026-08-05, here is the project digest:

---

## 1. Today's Overview

OpenClaw is showing extremely high activity with 500 issues and 500 PRs updated in the last 24 hours. A significant portion of this activity is focused on **stability, reliability, and refactoring**, with a large number of issues marked `P1` and rated as "diamond lobster" severity. The project is in a heavy maintenance and bug-fixing phase, particularly around **subagent orchestration, message delivery reliability, and session state management**. Notably, there are no new releases today, and the high volume of open issues (449) suggests the maintainers are backlogged, with many issues needing maintainer review or product decisions.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Despite the lack of new releases, several PRs were merged or closed today, indicating ongoing progress in code quality and maintenance:

- **[Merged/Closed] Refactoring for Production LOC Reduction:** A series of maintainer-led PRs are consolidating code, including `refactor(gateway): consolidate usage reporting and caches` (#119409) and `refactor: consolidate stream normalizer test fixtures` (#118563). This indicates a project-wide effort to reduce code duplication and improve maintainability.
- **[Closed] Startup Performance:** PR #119094 (`perf(gateway): keep reload and recovery machinery off gateway cold start`) was closed, aiming to make gateway cold starts faster, which is critical for containerized deployments.
- **[Closed] CLI Fix:** PR #118801 (`fix(cli): align TaskFlow controller columns for wide text`) was closed, addressing a UI issue in the task flow command.
- **Test Infrastructure Improvements:** Several PRs from `steipete` focus on improving test performance and reliability, including `test(state): reuse legacy database fixtures` (#119423) and `test(system-agent): reduce suite setup overhead` (#119424). This suggests a focus on making the test suite faster and more robust.

## 4. Community Hot Topics

The most active issues reveal significant pain points around reliability of the core agent runtime, with the highest engagement on issues related to message loss and session state problems.

- **#116277 - DeepSeek v4 Flash silent reply failure** (104 comments): This is the top issue by far. It describes a critical bug where the model fails to generate a reply, leading to a generic fallback message. This is a "diamond lobster" P1 issue, highlighting high user impact and frustration.
- **#116201 - Realtime voice work can retain unbounded provider and consult state** (58 comments): A P1 issue on resource management in real-time voice sessions, indicating problems with memory and state buildup.
- **#115326 - Crash-loop breaker suppresses Discord/WhatsApp permanently** (25 comments): A critical regression where the crash-loop breaker blocks channels and the documented recovery path fails.
- **#44925 - Subagent completion silently lost** (23 comments): A long-running, high-severity issue about silent failures in subagent task orchestration, indicating a core architectural problem.

**Analysis:** The community is facing **critical reliability issues** where the assistant fails to respond, loses messages, or gets stuck in bad states. The high comment counts on these P1 issues signal a strong demand for stability improvements and robust error recovery.

## 5. Bugs & Stability

This is the most critical area today, with numerous P1 and even a P0 issue.

**Critical (P0):**
- **#112395 – Startup migration preflight blocks gateway** (P0, diamond lobster): A regression where upgrading from 6.11 to 7.1 leaves the gateway unable to start. A fix PR is linked and open.

**High Severity (P1, diamond lobster):**
- **#116277 – DeepSeek v4 Flash silent reply failure** (104 comments): Silent message loss. No fix PR mentioned.
- **#116201 – Realtime voice session state growth** (58 comments): Potential memory leak and state corruption.
- **#111498 – Main agent blocked by persistent workspace-state migration** (9 comments): Agent refuses all turns after an auth recovery; recovery is stuck.
- **#92433 & #67777 – Subagent completion silently lost/dropped** (10+9 comments): Core orchestration failures causing data loss.
- **#115908 – Session transcript projection can livelock** (13 comments): Blocks the main thread and stalls all transports.
- **#115700 – chat.send rejected with "thread switched branches"** (6 comments): A logic bug preventing new messages after a model run.
- **#119263 – Agent DB migration failure ('no such column: entry_valid')** (6 comments): Blocks gateway startup after upgrade.

**Other Notable Bugs:**
- **#118846 – Gateway main thread saturated from boot** (14 comments): Performance issue causing the gateway to be unresponsive.
- **#97616 – Leaks unreaped child processes** (7 comments): Zombie process accumulation degrading runtime.
- **#91363 – Isolated cron consistently fails** (10 comments): A long-standing issue with cron jobs failing.

**Assessment:** Today's report is dominated by **serious state-management and data-integrity bugs**. The sheer number of `P1` "diamond lobster" issues, many with fix PRs pending maintainer review, suggests the project is in a **crunch mode**, with a large backlog of critical fixes waiting to be merged and released.

## 6. Feature Requests & Roadmap Signals

Several feature requests are active, but the current focus seems to be on stability over new features. However, some road map signals are visible:

- **Control UI Enhancements:**
    - **#42840 – MathJax/LaTeX support in Control UI** (10 👍): A popular request from the community to render mathematical formulas in the UI.
    - **#71736 – Control UI plugin contribution slots** (RFC): Proposing a more extensible UI for plugins, which is architecturally significant.
- **Configuration & Usability:**
    - **#45758 – Support YAML as a config file format**: Users are requesting more standard config formats.
    - **#45501 – `session.resetPrompt` for a configurable startup message**: A small but useful quality-of-life feature.
- **Platform Expansion:**
    - **#46058 – Exploring a chat-first Android surface**: Discussion about a dedicated mobile app.

**Prediction:** Given the current backlog, it's unlikely that new feature work will be prioritized ahead of the stability fixes. The features most likely to see progress are those that are low-risk and highly requested, such as **#42840 (MathJax)**, as they improve user experience without touching the core assistant logic.

## 7. User Feedback Summary

The user feedback is largely dominated by frustration with reliability and unexplained failures.

- **Data Loss & Silent Failures:** The most prevalent theme is the "silent loss" of messages or subagent completions, often with no error notification to the user. Issues like #116277, #44925, and #92433 highlight this, where users are left without a response or with a generic fallback.
- **Blocked Agents & Stuck States:** Users report their agents becoming permanently blocked or stuck, requiring complex manual intervention. This is seen in #111498 and #115326, where documented recovery steps fail. The language used by users and maintainers ("stuck," "blocked," "permanently suppresses") indicates a high level of friction.
- **Complexity and Broken Recovery:** The failure of documented recovery paths (like `channels.start` in #115326) suggests that even power users are unable to self-serve, leading to frustration and a need for maintainer intervention.
- **Performance Degradation:** Users report the system becoming unusable due to main-thread saturation (#118846) and zombie processes (#97616), indicating problems with long-running resource management.

**Satisfaction:** There is a clear dissatisfaction with the **stability of recent versions**. Many issues are marked as "regression," meaning the software worked before but broke in a recent update. This points to a need for better regression testing and a more careful release process.

## 8. Backlog Watch

Many critical issues have an "open" status but have not been acted upon, requiring maintainer attention. These are the most urgent items from the backlog:

- **#44925 - [Bug]: Subagent completion silently lost** (P1, created March): A long-running critical issue about subagent completion delivery that is still not resolved and has no fix PR.
- **#44289 - Generate secretref reference docs** (P1, no-stale): A P1 documentation task that has been open since March, indicating a process bottleneck.
- **#91363 - Isolated cron consistently fails** (P1, created June): A persistent issue breaking a core feature (cron jobs), still waiting for maintainer review and product decision.
- **#114690 - [Bug]: Successful Discord source reply can be sent again** (P2): A bug causing duplicate messages, waiting on maintainer review.
- **#79168 - [Feature] Content-based prompt injection scanning** (P2): A security-related feature request that has been waiting for a security review since May.
- **The "clawsweeper-recovery-stuck" Label:** Several of the most critical issues (#113651, #112395, #111498, #92433, #90595) are tagged with `clawsweeper-recovery-stuck`, indicating that the automated recovery system (likely a bot) has failed to resolve them and they are stuck in a review loop, exacerbating the backlog.

**Assessment:** The high number of critical issues stuck in "needs-maintainer-review" or "needs-product-decision" for months is a significant health concern. The `clawsweeper-recovery-stuck` label highlights that some of the automation intended to triage these issues is failing, leaving the team with a large, unresolved pile of critical bugs.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report — AI Agent & Personal AI Assistant Landscape
**Date:** 2026-08-05  
**Prepared by:** Senior Analyst, Open-Source Ecosystem

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **significant divergence between stability-focused mature projects and rapidly-iterating pre-release ventures**. The dominant theme across all projects is **reliability engineering**: silent message failures, session state corruption, and recovery path breaking are the top pain points across OpenClaw, Hermes Agent, and IronClaw. Security is emerging as a critical second pillar, with key leakage, cross-tenant isolation gaps, and fail-open webhooks surfacing in LobsterAI, ZeroClaw, and NanoBot. The ecosystem is simultaneously pushing toward **multi-provider interoperability** (NanoBot, NullClaw, CoPaw), **cost observability** (PicoClaw, CoPaw), and **extensible plugin architectures** (Hermes Agent, ZeroClaw). Notably, several projects (Moltis, TinyClaw, ZeptoClaw) show near-zero activity, suggesting market consolidation or stalled development.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | No release; heavy P1/P0 backlog | ⚠️ Critical (crunch mode) |
| NanoBot | 5 | 26 (19 merged) | No release; consolidation phase | ✅ Healthy (high throughput) |
| Hermes Agent | ~15 | ~10 (6 closed) | No release; focused P0 fixes | ✅ Healthy (rapid iteration) |
| PicoClaw | 3 | 4 (2 merged) | No release; v0.3.1 latest | ⚠️ Moderate (maintenance) |
| NanoClaw | 0 | 5 (1 merged) | No release; pre-feature rollout | ✅ Stable (low activity) |
| NullClaw | 0 | 1 (0 merged) | No release; quiet period | ⚠️ Low-velocity |
| IronClaw | 50 | 50 (17 merged) | v1.1.0-rc.1 prep | ✅ Healthy (disciplined) |
| LobsterAI | 1 | 9 (9 merged) | 2026.8.3 imminent | ✅ Healthy (high-velocity) |
| TinyClaw | 0 | 0 | No activity | ⚠️ Inactive |
| Moltis | 0 | 1 (Dependabot) | No release | ⚠️ Stalled |
| CoPaw | 30 | 50 (22 merged) | v2.1.0-beta.1 | ✅ Healthy (pre-release) |
| ZeptoClaw | 0 | 0 | No activity | ⚠️ Inactive |
| ZeroClaw | 50 | 50 (0 merged) | No release; RFC-heavy | ✅ Active (architecture phase) |

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Largest community by order of magnitude** — 500 issues/PRs in 24h dwarfs all competitors (next highest: IronClaw, ZeroClaw at 50 each)
- **Most mature channel ecosystem** (Discord, WhatsApp, Telegram, voice) — unmatched breadth
- **Strong architectural focus on subagent orchestration** — a differentiator vs. NanoBot's and CoPaw's simpler single-agent models
- **High problem-solving velocity** — maintainers actively consolidating code, fixing P0/P1 bugs despite the backlog

**Technical approach differences:**
- Unlike NanoBot (lightweight, Python), OpenClaw is a **heavyweight orchestration platform** with production-grade gateway, session state machine, and multi-transport architecture
- Unlike IronClaw (Rust, hermetic testing focus), OpenClaw prioritizes **breadth of integrations** over provable correctness

**Community size comparison:**
- OpenClaw's 449 open issues indicate a massive user base but also a **triage bottleneck** — the `clawsweeper-recovery-stuck` label reveals automation failures
- The gap between issue volume and fix throughput is the **single biggest strategic risk** — competitors like IronClaw are building provable reliability, which could become a differentiator

**Verdict:** OpenClaw remains the ecosystem **leader by adoption**, but its stability crisis (P0 startup migrations, silent message loss) creates an opportunity for faster, cleaner alternatives.

---

## 4. Shared Technical Focus Areas

Across the ecosystem, several requirements emerge repeatedly:

| Focus Area | Projects (Specific Needs) |
|---|---|
| **Reliability & Recovery** | OpenClaw (#116277 silent replies, #115326 crash-loop breaker), Hermes (#75801 dropped streams), CoPaw (#6696 WeChat context token), NanoBot (#5156 Telegram stall) |
| **Security & Secret Protection** | LobsterAI (#1202 key leakage), ZeroClaw (P0 webhook fail-open, KG isolation), OpenClaw (#92433 silent subagent loss), NanoBot (#4784 env key leak) |
| **Cost Observability** | PicoClaw (#3251 Anthropic cache tokens), CoPaw (#6649 GPT-5.6 caching), ZeroClaw (token accounting on history-trim) |
| **Multi-Provider/Model Support** | NullClaw (grok-cli), NanoBot (Opus 5), CoPaw (DeepSeek thinking mode), IronClaw (per-user model selection) |
| **Plugin/Extensibility Architecture** | Hermes (#64182 plugin interface), ZeroClaw (WASM hooks, permission model), CoPaw (plugin namespace isolation), NanoClaw (host seams) |
| **File Management UX** | CoPaw (#6643 task dirs, #6642 direct path reads), Hermes (session scoping), ZeroClaw (attachment architecture) |
| **Channel Reliability** | All projects — Telegram/WhatsApp/Discord/WeChat/Matrix each show recurring integration bugs |

---

## 5. Differentiation Analysis

| Project | Key Differentiator | Target User | Architecture |
|---|---|---|---|
| **OpenClaw** | Breadth of channels & subagent orchestration | Power users, multi-platform deployments | Heavyweight gateway, Python |
| **NanoBot** | Lightweight, fast iteration, WebUI polish | Developers, small teams | Python, provider-agnostic |
| **Hermes Agent** | P0 responsiveness, sweeper-driven cleanup | Production users, security-sensitive | Python, focus on guardrails |
| **PicoClaw** | Cost transparency (cache tokens), OAuth fix | Raspberry Pi, headless server operators | Python, provider-agnostic |
| **NanoClaw** | Dial (SMS/voice) expansion, plugin seams | Mobile-first, autonomous scheduling | Python, channel adapters |
| **NullClaw** | CLI provider template (codex, gemini, grok) | CLI power users | Minimal, Python |
| **IronClaw** | Provable reliability, hermetic testing, Rust | Enterprise/cloud-grade agents | Rust, nearai ecosystem |
| **LobsterAI** | Commercial-grade release cycle, Electron | Consumer desktop users | Electron, React, Python backend |
| **CoPaw** | Multi-model orchestration, beta velocity | Qwen ecosystem users, China market | Python, AgentScope |
| **ZeroClaw** | RFC-driven architecture, security-first design | Developers wanting deep control | Rust, TUI/web |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (High Velocity):**
- **IronClaw** — 50 PRs/24h, 17 merged, disciplined engineering (sabotage-tested CI gates). Closing major epics. Release imminent.
- **LobsterAI** — 9 merged PRs, release-ready. Fast turnaround on user feedback (ad banner toggle).
- **CoPaw** — 22 merged PRs, beta feedback loop active. Strong CI-infrastructure investment.

**Tier 2 — Focused Hardening (Medium-High):**
- **OpenClaw** — Massive volume but bottlenecked. Critical bug backlog accumulating; needs release to regain trust.
- **NanoBot** — 19 merged PRs, security refactors landing. Consolidating toward stability.
- **Hermes Agent** — P0 cache/guard fixes landing same-day as bug reports. Sweeper effort indicates proactive posture.
- **ZeroClaw** — RFC-heavy with no merges today; architecture phase. High engagement but slow feature delivery.

**Tier 3 — Stabilizing/Low Velocity:**
- **PicoClaw** — Moderate maintenance, 2 merges. Awaiting v0.4.0 feature bundle.
- **NanoClaw** — Single merged fix; pre-feature rollout (Dial channel). Quiet.
- **NullClaw** — One PR awaiting review. Contributor momentum at risk.

**Tier 4 — Stalled/Inactive:**
- **Moltis** — Dependabot-only activity.
- **TinyClaw, ZeptoClaw** — Zero activity. Likely candidate for fork/abandonment.

---

## 7. Trend Signals

**For AI agent developers, the following trends emerge from community feedback:**

1. **Reliability is the #1 trust barrier.** Users consistently report silent failures (messages dropped, subagent completions lost, approvals invisible). The AI assistant that achieves *provable reliability* (IronClaw's error-recoverability contract) will win enterprise trust.

2. **Security is non-negotiable.** Multiple projects face secret-leakage, cross-tenant interference, and fail-open handlers. Developers must build secret-protection and per-agent isolation from day one—retrofitting is costly (LobsterAI's 4-month-stale key leak).

3. **Interoperability drives adoption.** Users want to connect agents to existing workflows: OpenAI-compatible APIs (ZeroClaw), custom Bot APIs (NanoBot), CLI providers (NullClaw), and standard protocols (A2A). Proprietary interfaces are a liability.

4. **Cost transparency is a growing requirement.** Prompt cache token metrics, rate-limit handling, and usage visibility are no longer optional—operators demand visibility into spend.

5. **Plugin ecosystems are the next battleground.** Hermes, ZeroClaw, and NanoClaw all signal toward structured plugin/host seams. The winner will provide documented, stable APIs with permission models.

6. **Channel integration is table stakes but demonstrably hard.** Every project reports recurring bugs on at least one major channel (Telegram, WeChat, Discord, Matrix). Developers should budget for ongoing per-channel maintenance.

7. **Multi-model orchestration is emerging as a feature.** CoPaw users explicitly request running multiple models independently; OpenClaw's subagents; IronClaw's per-user model selection. Single-model assistants are commoditizing.

---

*Report generated from 2026-08-05 community digests. For detailed project-level data, refer to individual digests in the appendix.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-05

## 1. Today's Overview

NanoBot shows **high sustained activity** with 26 PRs updated in the last 24 hours (19 merged/closed, 7 open) and 5 issues touched (4 open, 1 closed). The project is in a **consolidation and hardening phase**: the merged work centers heavily on WebUI polish (markdown previews, tooltip alignment, floating controls), provider compatibility fixes (Anthropic Opus 5 support), and targeted channel bug fixes (Telegram, WeCom, Matrix). Two P1-priority PRs merged today — a session-access-grants refactor and the Anthropic Opus 5 effort-control fix — indicating maintainers are prioritizing security architecture and cutting-edge model compatibility. No new releases were published in this window.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release remains prior to this reporting window.

## 3. Project Progress

19 PRs were merged or closed in the last 24 hours. Key advances:

- **Anthropic Provider Modernization (P1)** — [PR #5236](https://github.com/HKUDS/nanobot/pull/5236): Replaced hard-coded model-exclusion lists with family-version thresholds, adding Claude Opus 5 support with adaptive `output_config.effort` controls while preserving legacy `budget_tokens` behavior.
- **Security Architecture Refactor (P1)** — [PR #5238](https://github.com/HKUDS/nanobot/pull/5238): Removed request-scoped `Tool.available()` access grants and the `SessionAccessScope` abstraction, simplifying session tools to trust authenticated ownership checks.
- **WebUI Visual Consistency Sprint** — Six merged PRs by chengyongru ([#5239](https://github.com/HKUDS/nanobot/pull/5239), [#5241](https://github.com/HKUDS/nanobot/pull/5241), [#5242](https://github.com/HKUDS/nanobot/pull/5242), [#5243](https://github.com/HKUDS/nanobot/pull/5243), [#5244](https://github.com/HKUDS/nanobot/pull/5244), [#5245](https://github.com/HKUDS/nanobot/pull/5245)) plus Re-bin's floating-control unification ([#5240](https://github.com/HKUDS/nanobot/pull/5240)) and Re-bin's prompt-rail cleanup — covering markdown rendering in previews, timestamp alignment, slash-command validation, inline token styling, and a new integrated Vite dev mode.
- **Channel Fixes** — Telegram fenced-code integrity for special-character language tags ([#5222](https://github.com/HKUDS/nanobot/pull/5222)), WeCom filename sanitization fallback ([#5223](https://github.com/HKUDS/nanobot/pull/5223)), and Mattermost thread-level group policy support ([#5233](https://github.com/HKUDS/nanobot/pull/5233)).
- **Trusted Proxy Auth (P1)** — [PR #5210](https://github.com/HKUDS/nanobot/pull/5210): Added opt-in tokenless bootstrap auth for trusted upstream proxies (Cloudflare Tunnel + Access) with CIDR peer validation.

## 4. Community Hot Topics

Most active discussions in the last 24 hours (by engagement and author activity):

- **[Issue #4784 — Provider API keys leaked between providers via global `os.environ` mutation](https://github.com/HKUDS/nanobot/issues/4784)** — Open since July 6 with 4 comments. A security-sensitive design issue where `OpenAICompatProvider._setup_env()` mutates process-global env vars on each provider initialization. Gateway providers overwrite prior keys; non-gateway providers use `setdefault` leaving stale keys. This **P1-worthy concern** drew sustained attention and relates to the access-grant refactor merged today — maintainers are actively working the broader authorization surface.
- **[Issue #5237 — MCP tool "data not found" envelope causes agent stall](https://github.com/HKUDS/nanobot/issues/5237)** — New today (1 comment). The LLM treats a business-error envelope (`isError=False`) as success, causing it to wait through the full tool timeout without re-attempting. Root cause: error detection logic looks solely at `isError` flag rather than content payload.
- **[Issue #5246 — Memory directory gitignore leaves files untracked](https://github.com/HKUDS/nanobot/issues/5246)** — New today. The scaffolded `.gitignore` with `!memory/` and `!memory/MEMORY.md` patterns leaves `memory/.cursor` and `memory/history.jsonl` untracked. Minor but a real workspace-hygiene papercut for new adopters.

## 5. Bugs & Stability

Ranked by severity:

1. **Provider API Key Leakage (HIGH)** — [Issue #4784](https://github.com/HKUDS/nanobot/issues/4784): Global `os.environ` mutation cross-contaminates provider keys. No dedicated fix PR yet; related architecture work (#5238) landed today, but the env-mutation layer stands.
2. **Anthropic Opus 5 API Rejection (MEDIUM-HIGH)** — [Issue #5235](https://github.com/HKUDS/nanobot/issues/5235) (closed) : Hard-coded `omit_temperature` list missed `"opus-5"`, sending rejected temperature params. **Fixed** in [PR #5236](https://github.com/HKUDS/nanobot/pull/5236) merged today.
3. **MCP Error Envelope Misclassification (MEDIUM-HIGH)** — [Issue #5237](https://github.com/HKUDS/nanobot/issues/5237): Agent stalls on business errors inside `CallToolResult.content`. No fix PR yet; requires deep error-handling protocol change.
4. **Telegram Polling Silent Stall (MEDIUM)** — [PR #5156](https://github.com/HKUDS/nanobot/pull/5156) remains open (since July 29, updated today): Bot permanently stops receiving messages after transient network blips with silent logs. No maintainer merge yet.
5. **Matrix Auto-Join Failure (MEDIUM)** — [Issue #5247](https://github.com/HKUDS/nanobot/issues/5247) + [PR #5248](https://github.com/HKUDS/nanobot/pull/5248): nio sends body-less POST on join, rejected by Continuwuity. Fix PR submitted today — simple, low-risk.
6. **WeCom Empty Filename (LOW)** — Fixed in [PR #5223](https://github.com/HKUDS/nanobot/pull/5223).
7. **Telegram Code Block Corruption (LOW)** — Fixed in [PR #5222](https://github.com/HKUDS/nanobot/pull/5222).

## 6. Feature Requests & Roadmap Signals

- **Custom Telegram Bot API (in-progress)** — [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) (open 22 days): `api_base` and extra header support for self-hosted Bot API servers. A long-running PR touching core channel architecture; likely near merge.
- **MST Metasearch Provider (in-progress)** — [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) (open, P2): New search provider aggregating DuckDuckGo, Google, Brave, Bing via Reciprocal Rank Fusion. Strong value-add; watch for review feedback.
- **Quick Chat & Temporary Chat (in-progress, conflict)** — [PR #5184](https://github.com/HKUDS/nanobot/pull/5184) (open 6 days): Persistent Quick Chat plus opt-in ephemeral chat. Flagged with conflicts — may need rebase.
- **Matrix join body fix (fix-ready)** — [PR #5248](https://github.com/HKUDS/nanobot/pull/5248): Simple, well-scoped; likely merges soon.
- **MCP error-envelope handling (predicted next)** — Given issue traction, a protocol-level fix is likely in the next release cycle; anticipate detection of business errors inside content payloads regardless of `isError`.

## 7. User Feedback Summary

- **Positive signals**: Anthropic Opus 5 support landed same-day as the bug report — rapid turnaround likely to earn goodwill. Trusted proxy auth ([#5210](https://github.com/HKUDS/nanobot/pull/5210)) addresses a concrete enterprise deployment scenario (Cloudflare Tunnel + Access), indicating growing production usage.
- **Pain points**: MCP error visibility ([#5237](https://github.com/HKUDS/nanobot/issues/5237)) suggests the agent tolerance to silent platform errors frustrates users — the timeout wait wastes time and hides failures. The Telegram polling stall ([#5156](https://github.com/HKUDS/nanobot/pull/5156)) reflects real production instability. The `os.environ` key leak ([#4784](https://github.com/HKUDS/nanobot/issues/4784)) signals that users running multi-provider gateway setups face configuration cross-contamination.
- **Adoption friction**: The memory `.gitignore` papercut ([#5246](https://github.com/HKUDS/nanobot/issues/5246)) is minor but indicates new-user workspace scaffolding needs polish.

## 8. Backlog Watch

- **[PR #5156 — Telegram stalled polling recovery](https://github.com/HKUDS/nanobot/pull/5156)** — Open 7 days. This addresses a production outage in a core channel with clear reproduction logs. **Should be prioritized for review**; no maintainer activity visible.
- **[PR #4919 — Telegram custom Bot API base URL](https://github.com/HKUDS/nanobot/pull/4919)** — Open 22 days. Enterprise-adjacent feature; deserves review or conflict resolution.
- **[Issue #4784 — Provider API key env leakage](https://github.com/HKUDS/nanobot/issues/4784)** — Open 30 days with persistent comments. Security-sensitive; pending decision on whether to scope keys per-provider or document isolation guarantees.
- **[PR #1776 — Telegram group_mode config](https://github.com/HKUDS/nanobot/pull/1776)** — Longest-open PR in the window (created March 9) with conflict tags. Field is already in code but missing from the Pydantic model; small but stale, needs conflict resolution or explicit closure.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the provided GitHub data for Hermes Agent (NousResearch/hermes-agent), here is the project digest for **2026-08-05**.

---

# Hermes Agent Project Digest — 2026-08-05

## 1. Today's Overview
The project is experiencing a period of high but focused activity, with the majority of issues and PRs revolving around a few core systemic challenges: **prompt cache scoping (P0), guardrail bypasses, and platform-specific integration bugs**. A significant "sweeper" effort is underway to address risk-laden areas like session state and message delivery, indicating a proactive maintenance push. While some P0 issues are newly opened, active PRs targeting them (e.g., #79024, #78959) suggest rapid iteration, though a new cache-scope gap (#79017) highlights the complexity of these fixes. The volume of duplicate and regression-type issues indicates ongoing struggles with long-term stability across the CLI, desktop app, and gateway components.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Six PRs were closed or merged in the last 24 hours. While the exact merge status of all six is not detailed, notable PRs that were updated and closed include **#79032** (a duplicate reproduction of the cache-scope gap, closed in favor of #79036). Key active PRs advancing significant fixes include:

- **PR #79024** ([fix(cache): scope prompt cache keys to conversation lineages](https://github.com/NousResearch/hermes-agent/pull/79024)): A P0 fix aiming to properly isolate cache keys across conversations, branches, and cron jobs.
- **PR #78959** ([fix(cache): scope prompt_cache_key by session](https://github.com/NousResearch/hermes-agent/pull/78959)): Another P0 fix targeting the same cache-scoping problem, fixing multiple hidden gaps found during validation.
- **PR #79038** ([fix: never crash lifecycle guard on NUL-byte paths](https://github.com/NousResearch/hermes-agent/pull/79038)): Aims to fix the crash described in Issue #78942.
- **PR #79037** ([fix(skill-search): add CJK tokenization](https://github.com/NousResearch/hermes-agent/pull/79037)): Addresses broken search for Chinese/Japanese/Korean-speaking users (Issue #78985).
- **PR #78889** ([fix(feishu): dedup inbound messages across multiplexed profiles](https://github.com/NousResearch/hermes-agent/pull/78889)): Fixes duplicate message processing in Feishu multiplex mode (Issue #78514).
- **PR #79033** ([fix(gateway): surface rejected MEDIA delivery paths to the model](https://github.com/NousResearch/hermes-agent/pull/79033)): Closes Issue #78932, making silent media delivery failures visible to the model.

## 4. Community Hot Topics
The most active discussions focus on long-standing pain points and the plugin roadmap. The top comments are concentrated on a few key threads:

- **[#64182: Plugin Interface Expansion — Tracking Issue](https://github.com/NousResearch/hermes-agent/issues/64182)** (21 comments): The central discussion for community plugin ideas. The high engagement here signals a strong desire for a more stable, documented plugin ecosystem.
- **[#64231: Lifecycle-event catalog, hook taxonomy](https://github.com/NousResearch/hermes-agent/issues/64231)** (17 comments): A follow-up proposal to triage pending hook PRs. The community's engagement suggests that the current state of hook management is chaotic and a standardized approach is heavily desired.
- **[#54204: Allow moving/rescoping sessions into a different project](https://github.com/NousResearch/hermes-agent/issues/54204)** (8 comments, 3 👍): This is a clear user-experience request. The need to organize sessions after creation is a critical, unaddressed workflow gap for the Desktop app.
- **[#46199: Windows Desktop portable/isolated deployment guidance](https://github.com/NousResearch/hermes-agent/issues/46199)** (7 comments, 2 👍): Security-conscious Windows users are seeking official, supported deployment methods that minimize system footprint, highlighting a documentation and possibly feature gap.

## 5. Bugs & Stability
Activity continues to be high, with several **P0/P1** issues reported and regressions surfacing from recent refactors. Top issues by severity:

- **P0 — Prompt Cache Corruption (#79017)**: A critical follow-up to #78941/PR #78959. The `prompt_cache_key` fails to maintain continuity after context compression, risking incorrect prompt cache reuse across sessions. While PR #78959 attempts a fix, this issue acknowledges an accepted trade-off that may cause cache collisions.
- **P0 — Guardrail Bypass (#79030)**: A security boundary issue. When `patch`/`write_file` tools are blocked from editing sensitive config, the guardrail can be bypassed using the shell to perform the same edits.
- **P2 — Cron + Terminal Crash (#78942)**: A regression of a previously fixed bug where a NUL-byte in a path can still crash the lifecycle guard, taking down terminal calls. PR #79038 is open to address this.
- **P2 — Silent Media Delivery Failure (#78932)**: Media attachments are silently dropped when the path is invalid, and the model believes the delivery succeeded. PR #79033 is open to fix this.
- **P2 — False "Network Mid-stream Drop" Classification (#75801)**: The OpenCode Go provider (gpt-5.6-luna) often omits `finish_reason`, causing the desktop app to misclassify complete responses as failed streams and strip the answer.
- **P1 — Cross-Profile Data Corruption (#18594)**: This issue has been closed, but its presence in the updated list suggests recent fixes or merging of a workaround. The risk of `get_hermes_home()` falling back silently to `~/.hermes` is a significant data-integrity concern if not fully resolved.

## 6. Feature Requests & Roadmap Signals
Several strong signals for future development were evident in today's data:

- **Desktop UX & Navigation (High Confidence)**: The desire to **move/rescope sessions** (#54204) and the ongoing **scoping fixes for navigation** (PR #67823) will likely lead to a more robust session management feature. The user demand is high.
- **Deployment & Isolation (Medium Confidence)**: Issues around **portable/isolated Windows deployment** (#46199) and **disabling automatic repo discovery** (#64615) suggest Hermes is being used in more security-conscious enterprise environments. Expect more first-class options for disabling/restricting the Desktop scanner.
- **Developer Experience (Medium Confidence)**: The push for a structured plugin ecosystem (#64182, #64231) and **`related_skills` frontmatter** (#79035) indicates a roadmap focus on modularity and community contributions.
- **Usage Transparency (Low Confidence)**: The request for **subscription/token usage in the Desktop status bar** (#78997) is a common user need that would likely be a straightforward addition in a future minor release.

## 7. User Feedback Summary
The sentiment is a mix of power-users pushing for more control and users frustrated by regressions and platform-specific issues.

- **Pain Points:**
    - **Privacy/Security**: Windows users are concerned about the desktop app scanning their entire home directory (#53328), and there is a clear need for official isolation guidance (#46199).
    - **"It Just Works" Failures**: Multiple high-severity issues where the agent silently fails or corrupts data—from silent media drops (#78932) and dropped streamed answers (#75801) to false-positive cron guard blocks (#78980) and cache corruption fears (#79017).
    - **Platform Integration Fragility**: Feishu-specific bugs continue to be a common pain point (e.g., #51684, #78975, #78514), with basic functionality like `*` wildcards and DM delivery failing.
- **Satisfaction Signals**: The active troubleshooting by maintainers on P0 cache and guard issues is a positive signal. The community is also actively contributing fixes, particularly for CJK search (#79037) and Docker/DingTalk connections (#79031).

## 8. Backlog Watch
Several important issues and PRs appear to be lingering without maintainer attention or a clear path forward:

- **[Issue #54204: Move/rescope session after creation](https://github.com/NousResearch/hermes-agent/issues/54204)**: Long-standing (created 2026-06-28) and highly requested (3 👍), it remains open without any linked PR, indicating a gap in the Desktop roadmap.
- **[PR #54591: "fix: resolve five unassigned P3 issues"](https://github.com/NousResearch/hermes-agent/pull/54591)**: This large PR (created 2026-06-29) fixes five issues but has not been merged for over a month. Its size and scope (marked `sweeper:blast-massive`) likely require significant maintainer review time. It is at risk of becoming a stale PR.
- **[Issue #18594: get_hermes_home() fallback causes data corruption](https://github.com/NousResearch/hermes-agent/issues/18594)**: Even though it is marked as "CLOSED", the severity (P1, data corruption) warrants verification that the fix has been fully propagated. Its presence in the "updated" list suggests it was only recently dealt with after a long history (since May).
- **[Issue #77950: Vulnerable brace-expansion dependency](https://github.com/NousResearch/hermes-agent/issues/77950)**: A security issue (GHSA-rgw5-rvv9-x895) that is a "no-op for `npm audit fix`". This is a dependency management issue that plagues many projects and will likely require a manual root-cause fix to update the `overrides` pin.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-05

## 1. Today's Overview

The PicoClaw project is in a steady maintenance phase with moderate community engagement. Over the past 24 hours, the repository saw 3 issues and 4 PRs updated, with 2 open PRs (#3299, #3317) actively in the pipeline and 2 automatically closed as stale. Notably, a promising new feature — a native Exa web search provider (#3299) — is awaiting review, alongside a contribution to improve prompt cache observability (#3317). On the issue side, the team and community are prioritizing two significant bugs: a Web UI input lag regression (#3281) and an agent-loop hang caused by MCP server connection failures (#3269). While no releases were cut today, the project is showing a healthy balance of bug triage and functional enhancements, with no critical security-related items surfacing in this window.

## 2. Releases

No new releases were published in the last 24 hours. The most recent persisted version remains **0.3.1** as referenced in community bug reports. This quiet period suggests the maintainers are consolidating large batches of fixes before triggering a new release cycle.

## 3. Project Progress

Two PRs were closed/merged in this period, both flagged as stale due to extended inactivity, but they represent substantive fixes shipped to the codebase:

- **[PR #3280: fix(auth): make browser OAuth login survive real-world callback conditions](https://github.com/sipeed/picoclaw/pull/3280)** — This is a significant quality-of-life fix for remote/headless deployments. It addresses four independent causes of OAuth login failures that occurred *after* user consent, a notoriously poor failure mode because the authorization code is burned. This will make `picoclaw auth login --provider` more reliable on Raspberry Pi and server setups.
- **[PR #3251: fix(providers): capture the prompt cache token usage in Anthropic providers](https://github.com/sipeed/picoclaw/pull/3251)** — Addresses a cost-monitoring gap by adding support for cache-related token metrics in both Anthropic SDK and Messages API providers (particularly cache creation and read tokens). This is critical for operators tracking Claude API spend.

## 4. Community Hot Topics

The most active discussions center around infrastructure reliability rather than feature novelties:

- **[Issue #3182: [BUG] Android version — Can't launch service](https://github.com/sipeed/picoclaw/issues/3182)** — 6 comments. The user reports total failure to launch the service and a persistent "Can't change path from settings" dialog. The issue was auto-closed as stale today, which is concerning given the lack of a documented resolution — a pattern worth investigating to ensure it was addressed in a patch or a fork. **Underlying need:** Users expect mobile flexibility; the lack of visibility into the resolution may deter Android adoption.
- **[Issue #3281: [BUG] Web UI chat input is very laggy](https://github.com/sipeed/picoclaw/issues/3281)** — 3 comments, 1 👍. Real-world performance issue where the input box degrades as chat history grows. **Underlying need:** A seamless long-session experience; heavy history renders are affecting real-time typing latency — users want a "twist" such as virtualized rendering or debounced DOM updates.

## 5. Bugs & Stability

Two active bugs are reported today, both trending toward "High" severity given their impact on core usability:

1. **[Issue #3269: MCP server connection failure hangs the agent loop](https://github.com/sipeed/picoclaw/issues/3269)** — **Critical.** When an MCP (Model Context Protocol) server fails, the agent loop does not recover, ceasing all chat replies. This completely blocks interaction and potentially leaves background jobs orphaned. No fix PR is visible yet, and the issue references the nightly build, suggesting this is a recent regression in the connection-recovery logic.
2. **[Issue #3281: Web UI chat input lag on long histories](https://github.com/sipeed/picoclaw/issues/3281)** — **Moderate.** Not a crash, but a significant UX degradation in browser-based usage. It degrades proportionally with session length and could be tied to re-rendering entire message lists on each keystroke. The single 👍 indicates a broader resonance if more users hit the same threshold.

## 6. Feature Requests & Roadmap Signals

Two open PRs signal the direction of the next minor release:

- **[PR #3299: Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — Pre-merge but well-formed. This is a highly anticipated entry into the `tools.web` ecosystem that differentiates PicoClaw from competitors by defaulting to Exa's modern AI-built search API (with `type: "auto"` and `contents.highlights`), while natively integrating time-range filters. Expect this in v0.4.0 unless API breaking changes occur.
- **[PR #3317: feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/pull/3317)** — Brand new (opened 2026-08-04), pairing with the earlier merged prompt-cache fix. The project is doubling down on **cost observability** and tool integration depth, suggesting the maintainers are actively steering toward a "production-first" AI gateway posture.

**Prediction:** The release following the merge of #3299 and #3317 will likely be a **minor bump (0.4.0)** with a changelog focused on "new search provider + expanded token metrics."

## 7. User Feedback Summary

User sentiment remains pragmatic, with distinct friction points across platforms:

- **Mobile Android adoption is blocked** by the failure reported in #3182, and the lack of an explicit resolution in the stale-closure raises trust concerns. Users want a clear "supported platforms" matrix.
- **Remote/server workers** are vocal supporters of the OAuth fix (#3280), indicating a growing demographic running PicoClaw on headless cloud instances or NAS boxes.
- **Cost management** has been a recurring theme (via the Anthropic cache PR and the current DeepSeek logging request), showing a user base that is sensitive to token spend and wants low-level transparency.
- **Web UI performance** is the new pain point: the lag issue accumulated 3 comments in ~2 weeks, calling for an immediate frontend optimization pass.

## 8. Backlog Watch

- **[Issue #3182: Android can't launch service](https://github.com/sipeed/picoclaw/issues/3182)** — **Needs Maintainer Attention.** Auto-closed as "stale" today without visible confirmation that the reporter's problem was solved (e.g., in latest nightly). If no resolution exists, the closure should be reverted or marked with a specific "works on dev" label to prevent user frustration.
- **[Issue #3269: MCP hang preventing chat replies](https://github.com/sipeed/picoclaw/issues/3269)** — **Needs Maintainer Response.** 15 days without maintainer acknowledgment or a linked fix. This is a **critical availability bug** that affects core functionality; leaving it unaddressed risks user churn, especially for those adopting nightly builds.
- **[PR #3299: Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — **Awaiting Review for 10 days.** Written in a complete, production-ready form; further delays block a widely requested `web_search` provider and force users to fork or use external proxies.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-05

## 1. Today's Overview

NanoClaw shows a **moderate activity level** over the past 24 hours, driven primarily by five open pull requests rather than issue discussions or releases. The project is in a **steady development phase** — no new releases shipped, no new issues were filed, and no issue activity was recorded, which points to a stable maintenance window rather than a burst of community feedback. The PR pipeline is healthy, with a mix of **refactoring, channel integrations, bug fixes, and core scheduling improvements**, suggesting ongoing investment in both platform breadth and reliability. Notably, the oldest open PR (#3041, Dial channel) has been active for three weeks, which may indicate review bottlenecks or a deliberate multi-PR feature rollout. Overall, the project is **moving forward with a focus on architecture seams, new communication channels, and agent-runner correctness**, with no signs of user-facing regressions or distress signals.

## 2. Releases

**No new releases** were published in the last 24 hours or appear in the recent history. No changelogs, breaking changes, or migration notes are available for this digest period.

## 3. Project Progress

One PR was merged/closed during the reporting window:

- **#3154 [Closed/Merged] — fix(agent-runner): give scheduled tasks current run time** ([link](https://github.com/nanocoai/nanoclaw/pull/3154)) by Koshkoshinsk
  - **What it advanced:** The merged fix resolves a timing bug where scheduled tasks were using their creation timestamp instead of the effective scheduled occurrence. The new logic renders a task's `time` from `process_after`, retains the creation timestamp as a legacy fallback, and injects a task-specific `current_time` (including weekday) into the agent context using the configured agent-group timezone.
  - **Impact:** This corrects a critical **scheduling accuracy issue** for autonomous agents, as previously tasks could execute against stale times, likely breaking time-sensitive logic and user-facing expectations. This is a **quality-of-life and correctness win** for anyone relying on Cron-based or scheduled NanoClaw skills.

## 4. Community Hot Topics

No issues were updated in the last 24 hours, and none of the PRs currently have non-author comments or reactions — meaning **no visible discussion threads** are active. However, the **PR activity itself reveals implicit prioritization**:

- **Dial channel expansion (dual PRs)** — PR #3041 ([link](https://github.com/nanocoai/nanoclaw/pull/3041)) adds a full Dial channel adapter (SMS + AI voice calls), and PR #3050 ([link](https://github.com/nanocoai/nanoclaw/pull/3050)) wires Dial into the setup wizard and `runChannelSkill` model. These two PRs together represent a **significant new integration push** toward SMS/voice, signalling that the maintainers value **multi-modal, phone-based interaction** as a first-class citizen.
- **Refactoring for extensibility** — PR #3186 ([link](https://github.com/nanocoai/nanoclaw/pull/3186)) introduces host seams for skill-owned capabilities, a structural change likely aimed at **reducing technical debt and enabling third-party skills to control their execution environment** more granularly.

**Underlying need:** The community/team appears to be shifting toward a plugin-friendly architecture (host seams) while simultaneously delivering new communications backends, suggesting a roadmap that prioritizes **ecosystem extensibility** + **broader channel coverage** over core UI changes.

## 5. Bugs & Stability

One bug fix was actively proposed during the period, but no crashes or regressions were newly reported:

- **Severity: Medium-High — Discord approval flow broken**
  - **PR #3185 [Open]** ([link](https://github.com/nanocoai/nanoclaw/pull/3185)) by omerh fixes a bug where **every approval clicked on Discord resolves to the wrong option** — in practice, approvals are **always rejected even when the user clicks Approve**. The root cause is in the raw HTTP-interaction (webhook) path of the Chat SDK bridge, which decodes `custom_id` by splitting on delimiters but fails to strip the `\n` delimiter, corrupting the interaction key.
  - **Status:** A fix PR exists and is open; no competing fixes were filed. This is a **user-visible, workflow-breaking bug** for teams using Discord for agent approval gates, likely causing confusion or operational churn.

No other stability incidents (crashes, data loss, performance degradations) were reported in this window.

## 6. Feature Requests & Roadmap Signals

There are **no new feature requests via issues** in the last 24 hours, but the open PRs provide **strong roadmap signals**:

- **SMS + AI voice channel (Dial)** — Both PR #3041 and #3050 are likely to land in the **next release** (or as a bundle), given they are feature-complete and have been open for ~3 weeks awaiting review/merge. Expect the initializer/wizard to offer Dial as a channel option right after installation.
- **Skill-owned host capabilities** — PR #3186 refactors how skills request or access host abilities, which may unlock **more advanced skill permissions** or allow skills to run sandboxed environments. This likely lands in a **minor or major next release**, as it is a structural refactor.
- **Scheduled tasks with dynamic time context** — Accompanying the merged PR #3154, we anticipate **further improvements to timezone handling** in the agent runtime, e.g., per-skill timezone overrides or DST-safe scheduling, based on the direction of the merged diff.

## 7. User Feedback Summary

Direct user comments/reactions are unavailable (no comments on any PR/issue). However, **inferred pain points** from the PR content include:

- **Discord approval reliability:** The bug described in PR #3185 touches a real, high-stakes workflow (human-in-the-loop approval), an indication that **Discord is an actively used approval surface** and that unreliable interactions erode trust in the agent's autonomous actions.
- **Scheduling fidelity:** The fix in #3154 addresses tasks running at wrong times, a **latent but serious concern** for scheduled automations — losing time precision can cause missed windows or duplicated runs.
- **Channel choice importance:** The persistent push to add Dial suggests **users/operators are looking for phone-based engagement** (SMS/voice), possibly for use-cases like logistics updates, field operations, or customer-facing notifications.
- **Overall satisfaction:** The absence of new issue reports and bug reports suggests the recent stable release (if any prior) is holding up well; the project appears to be in a **consolidation phase** rather than a break-fix cycle.

## 8. Backlog Watch

No new or unanswered issues are outstanding, but the following PRs deserve **maintainer attention** due to age or potential conflict risk:

- **PR #3050 (Dial wizard/skills, opened 2026-07-14)** — Since this depends on the adapter PR #3041 (same author, same date), a long delay in review could create **merge conflicts** or force the author to rebase frequently. Maintainer review is strongly advised to ship the Dial feature in one release.
- **PR #3041 (Dial adapter, opened 2026-07-14)** — Same as above; this is the foundational code and should be reviewed before #3050 to enable a clean merge sequence.
- **PR #3186 (host seams refactor)** — While only 1 day old, it touches core architecture; a **proactive design review** now will prevent rework later. Given its architectural weight, it should not be left unattended for a week, as it may affect parallel PRs touching skill infrastructure.

No Issues are awaiting maintainer response, meaning reported bugs are being addressed via direct PRs rather than accumulated in the issue tracker — a sign of healthy triage.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for 2026-08-05.

---

# NullClaw Project Digest | 2026-08-05

## 1. Today's Overview
The NullClaw project is experiencing a **quiet period**, with zero issue activity and no new releases in the last 24 hours. The repository's pulse is driven entirely by a single open Pull Request (#981) that is awaiting review, representing the only active development signal. While the lack of new bug reports suggests a stable codebase, the absence of merged PRs or closed issues indicates a slowdown in forward momentum. Overall, the project appears healthy but currently **low-velocity**, relying on maintainers to push the pending provider integration through.

## 2. Releases
**No new releases** were published in the last 24 hours. The project is in a static state regarding versioned deployments.

## 3. Project Progress
- **No merged or closed PRs today.**
- **Feature Forward Progress:** The sole piece of progress is the open PR **[#981: feat(provider): add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)** (Submitted 2026-07-29). While not yet merged, this PR represents pending implementation work to add support for xAI's Grok CLI. The implementation follows the established architectural pattern of the existing `codex-cli` and `gemini-cli` providers, utilizing a spawn-per-request method. This signals a "provider-template" approach that streamlines the addition of future CLI-based backends.

## 4. Community Hot Topics
- **[PR #981: Add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)**
  - **Activity:** The only active item. Created over a week ago (2026-07-29) and updated yesterday (2026-08-04), maintaining visibility in the review queue.
  - **Underlying Need:** This PR highlights a community demand for **multi-provider interoperability**. Users are seeking to leverage NullClaw with frontier models hosted locally via CLI tools (Anthropic, OpenAI, Gemini, and now xAI). The lack of controversy or negative feedback on this PR suggests it is a straightforward, welcome addition that brings the project closer to parity with commercial AI aggregators.

## 5. Bugs & Stability
- **No new bugs, crashes, or regressions** were reported in the last 24 hours. There are no open issues regarding stability, indicating that the current codebase is robust or that the user base is currently too engaged with feature adoption to file bugs.

## 6. Feature Requests & Roadmap Signals
- **Direct Signal:** The primary roadmap signal is **CLI Provider Expansion** (via PR #981). The community wants access to **xAI Grok** without changing their primary interface.
- **Potential Next Step:** Since the PR for `grok-cli` follows the existing template flawlessly, it is highly likely to merge within the next release cycle. The success of this pattern may lead to future requests for other CLI tools (e.g., `llama-cli`, `mistral-cli`) or cloud-based providers.
- **Prediction:** Expect this feature to be included in the **next minor version (v0.x.1)** update, as it is non-breaking and additive.

## 7. User Feedback Summary
- **User Pain Points:** The existence of PR #981 indicates a specific user need: **the desire to avoid switching UIs** to use different AI models. The author (valonmulolli) is likely a power-user who wants unified access to Grok for specific tasks where it excels.
- **Satisfaction:** Though we have no textual feedback, the lack of "bugs" or "fixes" requests implies users are generally satisfied with the current stability. The project maintainers appear responsive to the "provider-template" request, keeping user experience consistent.

## 8. Backlog Watch
- **PR #981 (grok-cli provider):** This is the **only item** in the queue, but it is **critical**. It has been open for **7 days** without merging. While it was updated yesterday, the lack of a merge suggests it might be stuck awaiting maintainer approval or specific code review changes. This is the highest priority item for maintainers to address to keep contributor momentum high—delays here might discourage future community contributions.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-05

## 1. Today's Overview

IronClaw is in an intense stabilization and consolidation phase, with 50 issues and 50 PRs updated in the last 24 hours — a very high level of activity. The project shows a strong dual focus: (a) enforcing its target architecture through audit-driven cleanup (multiple "doc-truth audits" surfacing gate defects), and (b) unblocking the v1.1.0-rc.1 release, evidenced by two Windows-specific release-blocker PRs merged today. The epic #6284 (error-recoverability endgame) was closed, marking a major milestone, while new epics around skill reliability and hermetic testing continue to drive roadmaps. The backlog is healthy but heavy with architecture-enforcement debt; the maintainer team (BenKurrek, serrrfirat, ilblackdragon) is highly responsive, filing detailed issues for defects found during audits rather than silently patching.

## 2. Releases

**No new releases in this period.** The most recent release remains `ironclaw-v1.1.0-rc.1` (commit `ae1dc1178ace`), with the team actively working to make the 1.0.0-rc.1 → 1.1.0-rc.1 startup migration lossless (issue #7178, PR #7198) and fix Windows-specific blockers (PRs #7197, #7200).

## 3. Project Progress

**Merged/Closed PRs today (17 total):**

- **[#7200](https://github.com/nearai/ironclaw/pull/7200) — fix(composition): stop icacls writing to the CLI's stdout on Windows** (closed). Fourth Windows defect blocking v1.1.0-rc.1; preflight cleared `USERNAME is unset` failure and advanced further than prior runs.
- **[#7197](https://github.com/nearai/ironclaw/pull/7197) — ci: pass the Windows identity variables to the release smoke** (closed). Notably scoped down — removed a behavior change slated for the release branch, correctly deferring it.

**Closed issues of note:**

- **[#6284](https://github.com/nearai/ironclaw/issues/6284) — [EPIC] error-recoverability endgame** (closed). The model now recovers from 100% of errors it sees — a major milestone for the v1.1.0 roadmap.
- **[#6524](https://github.com/nearai/ironclaw/issues/6524) — Epic: Hermetic capability and journey testing platform** (closed).
- **[#7119](https://github.com/nearai/ironclaw/issues/7119) — Code Style clippy is package-set-dependent** (closed). Main was red for a specific package set; fixed.
- **[#7168](https://github.com/nearai/ironclaw/issues/7168) — Agent-installed skills are invisible** (closed). `skill_install` writes where discovery doesn't read; fixed.
- **[#7148](https://github.com/nearai/ironclaw/issues/7148) — conversations -> turns CHECKLIST row ownership** (closed). Planned milestone unreachable as scheduled; corrected.

**Architecture enforcement (PR #7156, closed):** Fixed four CI gate defects that rendered green CI meaningless — each was sabotage-tested with negative cases. Addresses issues #7149, #7151, #7150, #7147.

**Open PRs stacked and progressing:** #7181 (Waves 0–4 batch 2 architecture consolidation), #7157 (two-lane channel delivery tool), #7198 (lossless rc1→1.1 migration).

## 4. Community Hot Topics

**Most active discussions (by comment count):**

- **[#6284 — Error-recoverability endgame epic](https://github.com/nearai/ironclaw/issues/6284)** (15 comments, closed) — The five-point recoverability contract (run survives, model sees it, cause + success-path visible, model gets a turn, no false non-success) is now fully met. This addresses a deep underlying need: trust in autonomous agents requires that failures are not just survivable but *legible* to the model so it can self-correct.

- **[#6524 — Hermetic capability testing platform epic](https://github.com/nearai/ironclaw/issues/6524)** (4 comments, closed) — "Does every supported capability and critical user journey have deterministic, meaningful coverage?" — the inability to answer this mechanically has been a hidden debt; closure signals a new testing foundation.

- **[#7119 — Package-set-dependent clippy failure](https://github.com/nearai/ironclaw/issues/7119)** (4 comments) — A CI gate that only failed for a package-set combination no PR had produced. Signals fragility in per-package lint gates; fix #7167 addresses the root cause (`--lib` flag on bin-only crates).

- **[#6752 — Instance deletion fails; "Loading your agents..." stuck](https://github.com/nearai/ironclaw/issues/6752)** (3 comments, open) — Critical user-facing bug: deletion fails and re-login hangs. Reporter (sergeiest) is relaying from x-ai product feedback, indicating real-world impact.

- **[#7145 — WS2: extension_host → loops re-layer sizing](https://github.com/nearai/ironclaw/issues/7145)** (3 comments) — Deep architectural discussion about sizing a restructure from the "four-port residue" not file count — a meta-critique of how the team sizes refactors.

**Underlying need analysis:** The community (maintainers + champions) is pushing toward (a) **provable reliability** (error recovery contracts, hermetic testing), (b) **lossless migrations** (no data loss between rc releases), and (c) **architecture that doesn't silently drift** (CI gates that actually fail when violated).

## 5. Bugs & Stability

**Ranked by severity:**

1. **[#6752 — Instance deletion fails; "Loading your agents..." stuck on re-login](https://github.com/nearai/ironclaw/issues/6752)** (OPEN) — *Critical, user-facing, data-loss adjacent.* Delete fails and re-login hangs indefinitely. No fix PR yet. This is a P0-class bug for SaaS reliability.

2. **[#7168 — Agent-installed skills invisible](https://github.com/nearai/ironclaw/issues/7168)** (CLOSED) — *High.* `skill_install` returns success but writes to a location discovery doesn't read. User-visible as a lie: "installed:true" but nothing appears. Fixed.

3. **[#7192 — WebUI: optimistic user messages render below agent output](https://github.com/nearai/ironclaw/issues/7192)** (OPEN) — *Medium-high UX.* Conversation reads out of order until durable timeline replaces optimistic row. Filed by ilblackdragon with clear repro; no PR yet.

4. **[#7146 — 121 tracing sites use `target =` instead of `target:`](https://github.com/nearai/ironclaw/issues/7146)** (OPEN) — *Medium, observability.* Events are invisible to the filters they name — debugging blind spot. Maintainer-filed; broad but mechanical fix.

5. **[#7115 — Docker entrypoint gates migration on dead env var](https://github.com/nearai/ironclaw/issues/7115)** (OPEN) — *Medium, ops.* Following the docs skips the legacy-Slack migration. Reproducible; maintainer-filed.

6. **[#7103 — Latency-trace field computed even when tracing off](https://github.com/nearai/ironclaw/issues/7103)** (OPEN) — *Low-medium, performance.* Per-tool-call byte count computed needlessly. Filed rather than patched (behavior change wants its own test).

7. **[#7104 — Extractors report "no text found" as Failed not Empty](https://github.com/nearai/ironclaw/issues/7104)** (OPEN) — *Low-medium, model-facing.* The model is told the wrong thing — "failed" implies error when the document simply had no extractable text. Filed for its own PR (changes model-facing text).

8. **[#7119 — Clippy red on main for specific package set](https://github.com/nearai/ironclaw/issues/7119)** (CLOSED) — *CI reliability.* Root-caused in #7167: `cargo clippy --lib` hard-errors on bin-only crates.

**Pattern:** The team explicitly files bugs rather than silently patching, requiring separate PRs and tests for model-facing or behavior-changing fixes — a strong engineering discipline that keeps PRs reviewable but lengthens the fix pipeline.

## 6. Feature Requests & Roadmap Signals

**New feature requests today:**

- **[#7194 — Admin-allowed shared channel as outbound delivery target](https://github.com/nearai/ironclaw/issues/7194)** (enhancement, size M, risk high) — Agents can enumerate/post to Slack channels but can't make one a sanctioned outbound delivery target. High-value for production workflows.

- **[#7193 — Run-now (manual fire) for automations](https://github.com/nearai/ironclaw/issues/7193)** (enhancement, size L) — The complete automation surface is list/pause/resume/rename/delete; no on-demand fire. Natural next step after automation lifecycle E2E test (#7059).

- **[#7183 — Per-user LLM model selection](https://github.com/nearai/ironclaw/issues/7183)** (enhancement) — Currently admin-only; champions want per-user choice. Signals multi-tenant UX maturity.

- **[#7191 — builtin.time: relative-offset arithmetic + typed input issues](https://github.com/nearai/ironclaw/issues/7191)** (enhancement, size M) — Agent in production said `parse "24 hours ago"` and got opaque `input_error()`. Adding relative arithmetic and typed errors improves agent ergonomics.

- **[#7177 — Schema-aware ranked search for deferred tool retrieval](https://github.com/nearai/ironclaw/issues/7177)** (enhancement, suggested P2) — Current retrieval ranks only lowercased name + top-level description; important vocabulary lives in canonical capability schemas.

**Epics in flight:**

- **[#6565 — Reliable Skill Discovery, Routing, and Activation](https://github.com/nearai/ironclaw/issues/6565)** — with corrected diagnosis (2026-07-25), still open.
- **[#6941 — Skills the model can self-create... that actually pay off](https://github.com/nearai/ironclaw/issues/6941)** — scoped subset of #6565, fully measured, v1.1.0.
- **[#6731 — Integrate IronHub into IronClaw](https://github.com/nearai/ironclaw/issues/6731)** — runtime tool/skill marketplace, v1.1.0.
- **[#3773 — Land the IronClaw Target Crate Architecture](https://github.com/nearai/ironclaw/issues/3773)** — v1.2.0, long-running.

**Predictions for next version (1.1.0):** Channel delivery tool (#7157), lossless migration (#7198), IronHub integration (#6731), run-now automations (#7193), shared-channel outbound targets (#7194), skill self-creation (#6941 subset). The 1.1.0 release is clearly the "reliability + extensibility" release.

## 7. User Feedback Summary

From the 2026-07-23 IronClaw Champions weekly check-in (all filed by sergeiest):

- **[#7185 — Memory not reliably recalled across conversations](https://github.com/nearai/ironclaw/issues/7185)** — Multiple testers independently observed that context established in one conversation isn't reliably available in later ones. This is a **top-tier trust issue** for an AI agent product. No fix in flight yet.

- **[#7180 — Web scraping is hit-or-miss](https://github.com/nearai/ironclaw/issues/7180)** — "Some sources succeed, others fail outright, with no clear pattern from the user's side." The agent uses the `http` tool instead of `web_search` for data retrieval. Signals a tool-selection routing problem (ties into #6565 skill discovery epic).

- **[#7183 — Per-user LLM model selection](https://github.com/nearai/ironclaw/issues/7183)** — Marketing user Jeremy Koch wants to choose/switch models; admin-only controls are a constraint.

- **[#7105 — Evaluate dedicated identity/session and payments service](https://github.com/nearai/ironclaw/issues/7105)** — A user reports *another* payments-related issue; proposes extracting identity/session/payments from the cloud API into a dedicated service. This is a recurring pain point (noted as "continue to surface").

- **[#7199 — Suggestion from PostChairmanLock (FaceSeek)](https://github.com/nearai/ironclaw/issues/7199)** — External contributor suggests logging "candidate skill existed but wasn't chosen" vs "chosen and changed the final answer" separately — otherwise retrieval value is unmeasurable. Directly supports the measurement ethos of #6941.

**Sentiment:** Champions are actively pushing the product in real world use and finding (a) memory inconsistency, (b) tool-selection unreliability, (c) web scraping flakiness — all of which map to the skill discovery/activation epic. Payment issues are a recurring operational pain.

## 8. Backlog Watch

**Needs maintainer attention (long-lived or high-value):**

- **[#3773 — Epic: Land the IronClaw Target Crate Architecture](https://github.com/nearai/ironclaw/issues/3773)** (created 2026-05-19, OPEN) — The foundational architecture epic; 0 comments. The work is happening via sub-issues (evidence: #7145, #7147, #7151), but the epic itself is silent. Worth a status comment.

- **[#6752 — Instance deletion fails; re-login stuck](https://github.com/nearai/ironclaw/issues/6752)** (created 2026-07-28, OPEN, 3 comments) — High-severity user-facing bug with no fix PR after 8 days. Flag for prioritization.

- **[#5101 — ci: reuse cargo-component installer in live canary](https://github.com/nearai/ironclaw/pull/5101)** (created 2026-06-20, OPEN) — 46 days old. CI reliability work by a new contributor (theredspoon) — needs review/merge or close.

- **[#5598 — chore: release PR](https://github.com/nearai/ironclaw/pull/5598)** (created 2026-07-03, OPEN) — Release PR for `ironclaw_common` 0.5.0 (breaking) and `ironclaw_skills` 0.4.0 (breaking) — 33 days open. If these breaking changes are intended for 1.1.0, this needs coordination; if stale, close.

- **[#7185 — Memory recall issues](https://github.com/nearai/ironclaw/issues/7185)** — No fix PR in flight for a top user-facing trust issue; the skill-discovery epic may cover it, but an explicit triage comment would be valuable.

---

**Project health summary:** High activity, disciplined engineering (filed-issues-not-silent-patches, sabotage-tested CI gates, stacked PRs with clear merge order), strong progress toward the v1.1.0 release, with the main strategic risks being (a) long-stale PRs (#5101, #5598), (b) an unreviewed critical user bug (#6752), and (c) the recurring memory/tool-selection/user-data issues that, while tracked, lack active fixes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-05

## 1. Today's Overview

LobsterAI is in a high-velocity release cycle with significant activity converging around the **2026.8.3 release**. Nine PRs were merged/closed in the last 24 hours, primarily covering the release branch (PR #2430), startup credit-reward campaign implementation, login page optimization, and improved model error classification. The project shows strong momentum with substantial feature work in the cowork and renderer areas. One security-related issue regarding model API key leakage (Issue #1202) remains open and flagged as stale, though it represents a critical concern that warrants immediate maintainer attention. No new releases were published today, but the merged release-branch PR signals an imminent version publication.

## 2. Releases

No new releases were published in the last 24 hours. However, PR [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) merged `release/2026.8.3` into `main`, indicating the upcoming **2026.8.3** version includes:
- Native credit-reward activities (startup campaign)
- Streamlined first-run login experience
- Artifact auto-preview control toggle
- Improved model-error handling and Windows installer reliability

Users may expect the release to be published shortly in the project's release channels.

## 3. Project Progress

Nine PRs were merged/closed in the last 24 hours, advancing several functional areas:

- **Release integration** — PR [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) merged `release/2026.8.3` to main, bundling all release-worthy changes.
- **Startup credit campaign** — PR [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) bundled campaign poster and CTA artwork locally with server-controlled availability; PR [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) completed analytics fields, added error messages for claim failures, and returned the opened login URL through Electron auth IPC.
- **Login page polish** — PR [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) optimized the login page experience.
- **Settings enhancement** — PR [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) added an artifact auto-preview toggle allowing users to disable automatic file preview opening.
- **Error handling improvement** — PR [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) introduced a dedicated `ModelOverloaded` classification, separating provider capacity errors from generic rate limits — fixing misleading retry guidance and preventing OpenClaw's rate-limit wording from masking capacity issues.
- **Dependencies** — Dependabot PRs for `@headlessui/react` (2.2.9), `react` (19.2.4), and `react-syntax-highlighter` (16.1.1) were closed (likely merged into dependency branches).

## 4. Community Hot Topics

The single active issue this period dominates community discussion:

- **Issue [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — Agent leaks model key information** (Open, 1 comment, flagged stale). The issue reports that asking the agent about key configuration leads to disclosure of configuration file locations and environment variable paths to retrieve model keys — a direct security vulnerability. The concern highlights that the agent lacks protective filtering for sensitive information, and the stale flag suggests this has not been addressed since April 2026 despite the severity. The community expectation is clearly that agents should refuse to reveal such information; this issue represents both a security defect and a trust concern for the product.

## 5. Bugs & Stability

**High severity:**
- **Model API key information leakage** — Issue [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202): The agent discloses key configuration locations and environment variable names, enabling model key extraction. Open since 2026-04-01, flagged stale, no linked fix PR. This is a critical security vulnerability — an agent that cannot safeguard secrets undermines its core trust value and may violate compliance expectations for enterprise users.

**Low severity / improvements:**
- **Misleading model-overload error** — Fixed in PR [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426): provider capacity errors were incorrectly displayed as generic rate limits, causing users to retry immediately. Resolution is included in the upcoming release.

No crashes or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

From this period's activity, the following roadmap signals emerge:

- **User-requested & recently implemented:** The sidebar ad banner permanent hide toggle (PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374), still open) addresses user frustration with persistent ads — this is a strong candidate for the next minor release given its advanced state.
- **Implemented in current release cycle:** Artifact auto-preview control (PR [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425)) and startup credit-reward campaign (PRs #2427, #2428) show product investment in user onboarding and monetization.
- **Security hardening signal:** The stale-but-critical key leakage issue (. #1202) should be prioritized in upcoming sprints; given renewed scrutiny around AI agent security, expect a fix to land in the next release or two.

## 7. User Feedback Summary

The most salient user pain point is the **agent's failure to protect sensitive key information** (Issue #1202). Users are concerned that the agent not only reveals where keys are configured but actively guides them to extract key material through files and environment variables. This reflects an expectation that AI assistants operating with configuration access must implement strict secret-protection policies.

Secondary feedback from PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) indicates dissatisfaction with persistent sidebar ad banners — users want a permanent opt-out rather than per-banner dismissal, suggesting ad fatigue among the desktop client base. The PR author has responded to user feedback by providing a Settings toggle, and community maintainers will likely merge this promptly.

## 8. Backlog Watch

- **Issue [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — Key information leakage (Open since April 1, 2026)** — The most critical item in the backlog. The issue is stale and unaddressed for over four months despite being a security vulnerability. The maintainer team should prioritize triage and assignment, as prolonged silence on security flaws could erode community confidence.

- **PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — Permanent sidebar ad dismissal (Open since July 21, 2026)** — A user-facing quality-of-life improvement with a clear implementation; 15 days without review suggests it may be waiting on release-cycle timing. Should be merged in the next cycle.

- **PR [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) — Session rename error toast (Open since April 1, 2026)** — A small UX fix that would surface rename failures to users; currently stale with no reviewer. Low-risk change that should be merged to avoid lingering technical debt.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-05

## 1. Today's Overview
Moltis is in a **low-activity maintenance phase** today. No issues were updated in the last 24 hours, and only one pull request—a dependency bump by Dependabot—received any attention. No releases were published, and no community discussion or feature work is visible. While the repository remains technically operational, the absence of substantive activity suggests maintainers may be focusing on internal efforts or the project is experiencing a quiet period. The single open PR is routine dependency hygiene rather than meaningful code progression.

## 2. Releases
No new releases were published today. The latest version history remains unchanged, and no release notes, migration guides, or breaking-change announcements are pending.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The only pull request in the pipeline is **#1184** (open, not yet merged), which is an automated dependency update rather than a feature or fix. No functional code changes, architectural improvements, or bug fixes advanced today.

## 4. Community Hot Topics
There is **no active community discussion** today. Zero issues received comments or reactions, and the sole PR (#1184) has no comments or upvotes. The most visible item is the Dependabot PR itself, which signals routine supply-chain maintenance but generates no substantive conversation. For context and monitoring purposes, the PR can be tracked here: [moltis-org/moltis PR #1184](https://github.com/moltis-org/moltis/pull/1184).

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The issue tracker saw zero new reports, and there are no open stability concerns requiring triage. The only dependency-related change (undici 7.28.0 → 7.29.0 via PR #1184) is a minor patch-level bump for the website tooling, with no known security or stability implications noted. Severity ranking: **none**.

## 6. Feature Requests & Roadmap Signals
No feature requests were submitted or discussed today. Without issue activity or community input, there are no new signals to extrapolate roadmap direction. The project's near-term trajectory appears unchanged, with no visible new capabilities anticipated based on today's data. Future version planning remains opaque from this snapshot.

## 7. User Feedback Summary
There is no user feedback to report for this period. With zero comments, reactions, or issue reports, we have no direct evidence of user satisfaction, pain points, or specific use-case challenges. The absence of complaints is not necessarily positive—it may simply reflect low engagement. Maintainers should be aware that the current silence offers no actionable input from the community.

## 8. Backlog Watch
No long-unanswered issues or PRs are visible in today's data, as the tracker currently shows zero open issues. PR #1184 ([link](https://github.com/moltis-org/moltis/pull/1184)) has been open just one day and does not yet require maintainer attention. The lack of an accumulated backlog is a positive sign for project hygiene, though it also underscores the low-volume environment the project is currently operating in.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-05

## 1. Today's Overview

CoPaw (QwenPaw) shows a **high-velocity development cycle** with 30 issues and 50 PRs updated in the last 24 hours, indicating a very active maintainer and contributor community. The project is in a **pre-release stabilization phase** with the v2.1.0-beta.1 currently under test, evidenced by a closed Release Duty issue and multiple beta-specific bug reports (desktop `PYTHONHOME` injection, browser SDK crashes). The issue tracker reveals a **healthy distribution of work**: 18 open/active issues (feature requests, bugs, questions) and 12 closed, indicating a responsive triage process. The PR pipeline is similarly robust with 28 open and 22 merged/closed, though no new releases were published today. The community is engaged with a mix of **Chinese and English language contributions**, reflecting a global user base, with recurring themes around channel reliability, multi-model orchestration, and file handling UX.

## 2. Releases

No new releases were published in the last 24 hours. The most recent release remains **v2.1.0-beta.1** (published ~2 days ago), which a closed Release Duty issue (#6656) confirms passed installation verification. However, multiple new bugs have been filed against this beta (see Bugs & Stability), suggesting the team is actively collecting beta feedback for a subsequent hotfix or stable release.

## 3. Project Progress

Closed PRs today show **targeted fixes across infrastructure and UX**:

- **#6685** — Fix timestamp timezone handling in `agentscope_msg_to_message` function (fixes #6301, naive UTC timestamps treated as local time). Merged.
- **#6692** — Stop logging raw conversation command arguments at INFO level; adds regression coverage for `/compact` hint redaction. Merged.
- **#6628** — Fix scroll context compression injects `[context compressed]` block as `role=user` causing DeepSeek/OpenAI-compatible APIs to return HTTP 400. Merged (fixes #6541).
- **#6678**, **#6686**, **#6679** — Three CI/integration test PRs: install Playwright Chromium for integration suite, fix Chrome contract mismatches and p-tier marker gaps, align import-local tests with #6487. All merged — significant test infrastructure hardening.
- **#6682** — Sync legacy `max_iters` field when saving iteration limit via Console (fixes config drift after Loop Engineering migration). Merged.
- **#4267** — macOS file path white list with `sandbox-exec` protection for shell commands (long-running security PR, now closed).

Open PRs with active progress include **#6691** (persist cron enabled state on pause/resume), **#6689** (channel startup retry with exponential backoff), **#6688** (plugin namespace isolation for bare absolute imports, first-time contributor), and **#6669** (Chrome native messaging stabilization on Windows).

## 4. Community Hot Topics

The most active discussions reveal **core workflow pain points**:

- **[#6649 — GPT-5.6 prompt caching support (13 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6649)** — Feature request for `prompt_cache_key`, `prompt_cache_options`, `prompt_cache_breakpoint` in Responses API. High interest reflects cost/latency optimization needs for multi-turn agent loops.
- **[#6655 — Console channel doesn't render approval prompts (12 comments, closed)](https://github.com/agentscope-ai/QwenPaw/issues/6655)** — Security approval requests (e.g., for `rm`/`del` commands) are invisible in console channel, causing silent 300s timeouts. Closed, suggesting a fix or workaround was delivered.
- **[#6643 — Task outputs should live in per-task directories (6 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6643)** — Users want organized output directories instead of a flat `media/` dump.
- **[#6667 — DeepSeek thinking mode fails in multi-turn (5 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6667)** — `reasoning_content` missing after OpenAI formatter skips `ThinkingBlock`; only works on first failure via retry fallback.
- **[#6642 — Drag-and-drop should read file at original path (5 comments, closed)](https://github.com/agentscope-ai/QwenPaw/issues/6642)** — Users dislike upload-copy cycle and extra `media/` files.

**Underlying needs**: Users are pushing for **production-grade UX** (fewer silent failures, better file organization), **cost efficiency** (prompt caching, free-tier rate limiting), and **multi-model orchestration** without manual pipeline construction.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description |
|----------|-------|-------------|
| 🔴 Critical | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 desktop injects `PYTHONHOME` into child env → every `python` subprocess crashes (encodings ModuleNotFoundError). Windows, all environments. **No fix PR yet.** |
| 🔴 Critical | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 browser SDK `open()` always fails with WireProtocolError (Target crashed) after successful connect. **No fix PR yet.** |
| 🟠 High | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink: one-time `context_token` consumed by typing indicator → replies rejected (ret=-2), "working" indicator stuck. **No fix PR yet.** |
| 🟠 High | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | Oversized tool output (>MB) freezes history loading in web console and risks context window overflow. Suggests truncation + pagination. |
| 🟡 Medium | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | Cron pause/resume not persisted — state lost on restart. **Fix PR #6691 exists (open, ready for human review).** |
| 🟡 Medium | [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter multimodal probe overwrites documented capabilities with `false` (image/video). |
| 🟡 Medium | [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | Plugin install fails: `No module named 'utils.env'` due to top-level module name collision. **Fix PR #6688 exists (open).** |
| 🟢 Low | [#6673](https://github.com/agentscope-ai/QwenPaw/issues/6673) | Frontend conversation window display issue (closed). |

**Notable**: While two critical beta bugs lack fix PRs, the project has a strong track record — several current-closed issues (#6655, #6633, #6624) have associated fixes or were resolved quickly, suggesting maintainers may already be working on #6697/#6698.

## 6. Feature Requests & Roadmap Signals

Strong signals for near-term roadmap:

- **Prompt caching for GPT-5.6** ([#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)) — Cost/latency optimization; likely high priority given 13 comments.
- **Multi-model per-agent execution** ([#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455)) — "Run ds v4 pro, qwen 3.7 max, kimi k3 independently, then merge results." Recurring pattern across file modification, fact-checking.
- **Channel retry with health checks** ([#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)) — Matrix channel fails on startup race; **PR #6689 already implements this** — likely lands soon.
- **On-demand skill loading** ([#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)) — 27+ skills consume 8K-10K tokens (~25-30% of system prompt); lazy-load skills. Strong cost driver, very likely to be addressed.
- **Global rules file** ([#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694)) — Similar to `.agent`/`.claude` for persistent top-level system prompts.
- **Task-scoped output directories** ([#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)) + direct file path reads ([#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)) — File management UX overhaul; **PR #6504 (unify project directories) partially addresses this**.
- **Free-tier rate-limit handling** ([#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674)) — Auto-retry with backoff for 429s on free-tier models like deepseek-v4-flash.
- **New providers** ([#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)) — Volcengine Agent Plan and Xiaomi MiMo Standard API as built-ins.

**Prediction**: Prompt caching, channel retry (#6684/#6689), and task-scoped output directories are most likely to land in v2.1.0 stable given existing PRs and community demand.

## 7. User Feedback Summary

**Positive signals**:
- Users call QwenPaw "a great personal AI assistant" (#6674) — product-market fit for the personal agent use case is strong.
- Active community building: first-time contributors submitting PRs (#6688, #6331, #6615) and Chinese-language users deeply engaged in UX details.
- Rapid issue closure rate (12 closed in 24h) and quick fix turnaround (e.g., #6655 closed within a day) suggests good maintainer responsiveness.

**Pain points**:
- **Silent failures** are the #1 frustration across channels: console approvals invisible (#6655), WeChat context token consumed (#6696), channel connections failing without retry (#6684).
- **File management is messy**: flat `media/` directory, upload-copy-before-read, filename display truncation (#6583).
- **Beta regressions** on Windows (PYTHONHOME injection, browser SDK crash) are notable but expected in pre-release.
- **Memory/compression confusion**: auto-compression doesn't trigger summarize (#6624, with fix PR already), and users find the behavior unclear ("不确定是设计如此还是缺陷" — unsure if intended or bug).

## 8. Backlog Watch

Issues/PRs needing maintainer attention:

- **[#6697 & #6698](https://github.com/agentscope-ai/QwenPaw/issues/6697)** (v2.1.0b1 critical bugs, no fix PRs) — Should be top priority for the beta team; released ~2 days ago with blockers on Windows.
- **[#6627 — How to use loongsuite for LLM tracing](https://github.com/agentscope-ai/QwenPaw/issues/6627)** (open since Aug 1, 2 comments) — Documentation gap for Alibaba's loongsuite-python integration; unanswered question.
- **[#6374 — Token usage persistence doesn't retry after transient write failure](https://github.com/agentscope-ai/QwenPaw/issues/6374)** (open since Jul 22, closed with no comments? flagged as closed) — Closed without comments; worth verifying if true fix exists.
- **[#4267 — macOS file path white list](https://github.com/agentscope-ai/QwenPaw/pull/4267)** (closed after 2.5 months under review) — Long-lived security PR; closed without merge — check if functionality was superseded or lost.
- **[#6615 — AgentScope compatibility fix](https://github.com/agentscope-ai/QwenPaw/pull/6615)** (open Jul 31, "Under Review") — Fixes `proactive_responder.py` deprecated `UserMsg` usage; has been in review for 5 days.
- **[#6398 — Reranker support for ReMe memory search](https://github.com/agentscope-ai/QwenPaw/pull/6398)** (open Jul 23, "Under Review") — Substantial feature addition (backend, RerankerConfig); stalled for 13 days — maintainers should either prioritize or provide feedback.
- **[#6331 — Console Node.js version requirement documentation](https://github.com/agentscope-ai/QwenPaw/pull/6331)** (open Jul 22, first-time contributor) — Small infra/UX win that's been open 14 days; quick merge would encourage contributor retention.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-05

## 1. Today's Overview

ZeroClaw remains in a highly active development and RFC-heavy phase, with 50 issues and 50 PRs updated in the last 24 hours, indicating sustained, intense community and maintainer engagement. The project is clearly in a deep architecture and hardening cycle, marked by numerous high-risk (S0/S1 severity) security bug reports and a torrent of RFCs targeting fundamental system boundaries (auth, memory, sessions, security pipeline). The maintainer decision queue (#8692) is the central coordination point for this large volume of design proposals. While no new releases or merges occurred today, the sheer volume and quality of activity suggests a major stabilization and feature push is in progress, likely for an upcoming v0.9.0 milestone focused on security and extensibility. The community is exceptionally technical and collaborative, with multiple RFCs being revised based on maintainer feedback, demonstrating a healthy, if demanding, governance process.

## 2. Releases

No new releases were published today. No changelogs, migration notes, or new version information to report.

## 3. Project Progress

There were **no merged or closed PRs** in the last 24 hours. However, several significant PRs received updates, indicating active development and refinement:

- **A2A Protocol Client (#9324)**: Phase 1 of the outbound A2A client RFC continues, implementing four `a2a_*` tools, a shared wire model, and a default-closed config block. This is a major feature for inter-agent communication.
- **Zerocode Multi-Session UI (#9739)**: A substantial UI feature adding multi-session panes and an agent sidebar, built on a stacked PR (#9738), shows continued investment in the TUI client.
- **Rust Toolchain Bump (#9527)**: CI/tooling PR to move routine builds to Rust `1.97.1` while keeping the source floor at `1.96.0`, aligning with the project's toolchain contract.
- **Security-Focused Fixes**: PRs fixing arbitrary file writes in the browser tool (#9362), warning on risky Codex CLI args (#9548), and parsing DeepSeek DSML tool call envelopes (#9723) are all active and represent important hardening and compatibility work.

## 4. Community Hot Topics

The highest-activity discussions reveal the core concerns of the community, all centered on architecture, security, and usability:

- **OpenAI-Compatible API (#8603)**: The most commented issue (16 comments). The community strongly desires exposing ZeroClaw's agent capabilities via the standard OpenAI Chat Completions protocol to integrate with popular tools like Open WebUI, LobeChat, and Aider. **Underlying need:** Interoperability and easier adoption via standard developer tools.
- **Per-Execution Shell Command Policy (#7155)**: Our second-highest comment count (14) with an active revision history. Users want granular control over high-risk shell commands, similar to Claude Code's allow/ask/deny policy. **Underlying need:** Safety and trust in agent autonomy, especially for local execution.
- **Goal Mode Feature (#8303)**: Another 14-comment RFC proposing a "bounded foreground" mode for sustained, multi-turn agent work on a single objective. **Underlying need:** Moving beyond single-turn interactions to practical, durable autonomous task completion.
- **Unified Attachment Architecture (#9488)**: The community is actively redesigning how attachments flow through web chat and various channels (13 comments), signaling a desire for a more consistent and powerful multi-modal experience.
- **Mixture-of-Agents (MoA) Provider (Closed #8568)**: This 10-comment RFC proposing a virtual model that aggregates multiple model perspectives was closed, suggesting the idea may have been superseded or rejected, a notable decision in the RFC tracker.

## 5. Bugs & Stability

This is a critical concern for ZeroClaw right now, with two **P0**, high-severity bugs reported, though both were filed over 24 hours ago and are currently in `in-progress` status with no fix PRs open yet:

- **[P0] Webhook Handlers Fail-Open (#9565)**: Three inbound webhook handlers (WhatsApp Cloud, Linq, WATI) dispatch messages without authenticating the caller—an S0 data loss/security risk. **This demands immediate attention as attacker-controllable messages can be ingested.**
- **[P1] Knowledge Graph Lacks Per-Agent Isolation (#9647)**: Any agent can read/mutate another agent's knowledge graph—a critical data breach and security flaw.
- **[P1] Session/Channel Tools Lack Ownership Scoping (#9646)**: Similar to #9647, several tools (`sessions_list`, `discord_search`, etc.) can be made to interact with arbitrary sessions/channels, allowing cross-tenant interference.
- **[P1] Cron Job Lock Exhaustion (PR #9320)**: An active PR aims to fix a serious issue where a hung cron job could hold a database lock indefinitely, blocking all future jobs.

## 6. Feature Requests & Roadmap Signals

The roadmap is heavily influenced by a wave of architectural RFCs. Beyond the hot topics, clear signals for the next major version include:

- **Security-First Architecture**: Multiple RFCs (auth #7141, security pipeline #7142, sandbox policy #6996) point to a v0.9.0 "security architecture" milestone, suggesting a major refactor of how security is handled.
- **Improved Developer & User Experience**: Features like the Unified Attachment system (#9488), per-model capability config (#7100), and the proposed OpenAI-compatible API (#8603) are aimed at making ZeroClaw easier to use and integrate.
- **Plugin System Expansion**: RFCs for WASM plugin lifecycle hooks (#7822) and a refined plugin permission model (#8398) show deep investment in a robust plugin ecosystem.
- **Runtime & Performance Enhancements**: PRs for token accounting on history-trim events (#9713) and fixing ZeroCode's rendering performance (#9317) indicate a focus on polishing the user facing runtime.

## 7. User Feedback Summary

The community feedback in this window reflects both pain points and ambitious desires. Users are eager to integrate ZeroClaw into their existing workflows, requesting support for standard protocols (OpenAI API) and tools. There's a strong emphasis on trust and safety, with requests for more granular control over agent actions (shell policy, sandboxing) and clear reporting on system limits (context exhaustion notices). The high number of S0/S1 bug reports, while concerning, demonstrates an active and engaged testing community that is surfacing serious multi-tenant isolation flaws. The interaction on RFCs shows a community that is technically sophisticated, willing to invest time in detailed design discussions, and values maintainer responsiveness and clear decision-making, as evidenced by the existence and use of the maintainer decision tracker (#8692).

## 8. Backlog Watch

Several RFCs are waiting on **maintainer-review** or have been waiting for author action, indicating a potential bottleneck despite the high activity:

- **Critical Security RFCs**: The P0/P1 security bugs (noted above) are waiting for fixes. While not RFCs, their resolution is paramount.
- **High-Priority RFCs Awaiting Maintainer Review (P1)**:
    - [Pluggable inbound authentication #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)
    - [Per-model capability config #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)
- **Long-Standing RFCs Needing Decision (Over 6 months old)**:
    - [Cron job precondition gates #5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) (accepted, but appears stalled with no linked implementation).
    - [Host-architecture policy #6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) (P3, waiting on author).
- **Stalled/Needs-Author-Action**: Several significant RFCs—including Workspace-relative forbidden paths (#8424), Granular sandbox policy (#6996), and the Knowledge graph bug (#9647) fix—are marked `needs-author-action`, suggesting they may be awaiting the original proposer to incorporate feedback and resume momentum. The community would benefit from maintainers either prompting for updates or closing these to clear the queue.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*