# OpenClaw Ecosystem Digest 2026-08-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-29 06:07 UTC

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

# OpenClaw Project Digest
**Date:** 2026-08-29

---

## 1. Today's Overview

OpenClaw is in a **high-activity maintenance and hardening phase**, with 500 issues and 500 PRs updated in the last 24 hours (408/294 open, respectively). The project shows a healthy balance of community bug reporting (92 issues closed) and maintainer-driven stability work, with a notable emphasis on fixing CI/release automation, Gateway lifecycle reliability, and cross-channel message-delivery regressions. A single new beta release (v2026.9.1-beta.1) landed, focusing on Gateway restart recovery and config-write reliability. While no new major features shipped today, the volume of PRs targeting `merge-risk: 🚨 compatibility` and `merge-risk: 🚨 message-delivery` indicates a deliberate effort to stabilize core infrastructure before further expansion.

---

## 2. Releases

**v2026.9.1-beta.1** ([Release Link](https://github.com/openclaw/openclaw/releases))

**Highlights:**
- **Gateway restart recovery:** Preserves admitted turns across repeated Gateway restarts, allowing restart-safe runs to continue through each checkpoint and deliver their final response. (#130491, thanks @jalehman)
- **Gateway config-write reliability:** Improves handling of committed config writes to prevent corruption or loss.

**Migration Notes:**
- This is a beta release; users on stable channels should wait for the official stable release.
- No breaking changes or manual migration steps were explicitly noted in the release notes.

---

## 3. Project Progress

206 PRs were merged or closed in the last 24 hours. Key advancements observed in the top PRs:

- **UI/UX Polish (#132415, #132388):** Reduced sidebar title movement on hover; moved dashboard and automation badges into the session hovercard to reduce visual clutter. (Merged/closed)
- **Release Automation Fixes (#132215, #132118, #132338):** Made Full Release Validation reruns write-once, recovered historical plugin consent updates, and made candidate expectations channel-aware. **(High priority — CI stability)**
- **Secret Request Reliability (#132122):** Fixes a P1 issue where secret requests could lose native answers and outlive their requester. **(Closed/merged)**
- **Buzz Channel Enhancements (#132226):** Preserves bot identities when adding named accounts. **(Closed/merged)**
- **Model Request Transparency (#131990):** Shows token limits for rejected model requests. **(Closed/merged)**
- **Test Infrastructure (#132425, #132376, #132372):** Separated Gateway shutdown policy from process scheduling, restored full release fixture execution contracts, and deduplicated test fixtures.

---

## 4. Community Hot Topics

- **[#91588 — Critical: Gateway Memory Leak (P0)**](https://github.com/openclaw/openclaw/issues/91588) — **23 comments, 🐚 platinum hermit rating.** RSS grows from 350MB to 15.5GB over days, causing repeated OOM crashes and `launchd-handoff` restart cycles. This is the **highest-severity issue**, actively discussed with 23 comments.

- **[#48788 — Centralized Filename Encoding Utility (P3)**](https://github.com/openclaw/openclaw/issues/48788) — **20 comments.** A long-running architectural proposal to handle multi-encoding Content-Disposition for Feishu filenames. Community engagement is high despite the low priority, indicating cross-channel attachment handling is a pain point.

- **[#96834 — WhatsApp 1:1 Image Processing Wedge (P1)**](https://github.com/openclaw/openclaw/issues/96834) — **14 comments.** Inbound images wedge the message lane for ~3 minutes before processing, stranding `active_reply_work`. Reported post-#95039, showing regressions in multimodal path handling.

- **[#84516 — Codex Long Replies Truncated (P1)**](https://github.com/openclaw/openclaw/issues/84516) — **13 comments.** Replies silently truncated at ~1000-1100 chars with `stop=null`. High user impact (2 👍) for headless CLI usage.

- **[#41744 — Feishu Image Tool Result Loss (P3)**](https://github.com/openclaw/openclaw/issues/41744) — **13 comments.** Read image tool results lose media before final outbound payload. Active community discussion with linked PRs.

---

## 5. Bugs & Stability

**Critical:**
- **[#91588 — Gateway Memory Leak (P0)**](https://github.com/openclaw/openclaw/issues/91588) — OOM crashes after 2-3 days. **No fix PR linked.** This is the most urgent stability issue.

**High:**
- **[#84516 — Codex Replies Truncated (P1)**](https://github.com/openclaw/openclaw/issues/84516) — Silent truncation at ~1K chars. **No fix PR linked.**
- **[#96834 — WhatsApp Image Wedge (P1)**](https://github.com/openclaw/openclaw/issues/96834) — Main lane wedged for 3 min. **No fix PR linked.**
- **[#112259 — Silent Inbound Message Drop (P1)**](https://github.com/openclaw/openclaw/issues/112259) — Zero-payload dispatch has no retry/dead-letter. **No fix PR linked.**
- **[#97616 — Zombie Child Process Leak (P1)**](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool processes cause runtime degradation. **No fix PR linked.**
- **[#126906 — Denied Write Tool Disables Memory Persistence (P1)**](https://github.com/openclaw/openclaw/issues/126906) — Agent reports success for saves that never happened. **No fix PR linked.**

**Moderate (with fix PRs):**
- **[#120735 — Telegram Stickers Not Staged (P2)**](https://github.com/openclaw/openclaw/issues/120735) — **Fix PR exists** in the pipeline for media staging.
- **[#124689 — Model Picker Only Applies to New Sessions (P2)**](https://github.com/openclaw/openclaw/issues/124689) — **Fix PR exists** for Control UI consistency.
- **[#78865 — Tool Call Circuit Breaker Needed (P2)**](https://github.com/openclaw/openclaw/issues/78865) — LLMs blindly retry forever without a breaker. **No fix PR yet.**

---

## 6. Feature Requests & Roadmap Signals

- **Multiple Bots per Gateway (#71058, #112811):** Strong community demand for multiple Teams/Feishu bots on a single Gateway. A **feature PR exists** for Teams (#112811), signaling this may land in an upcoming release.
- **Slack Modal Support (#88154):** First-class support for interactive modals for structured input. Maintainers have reviewed; a **product decision is pending**.
- **maxTurns/maxToolCalls Config (#9912):** Limits on agent iterations to prevent runaway loops. Active discussion, likely a quality-of-life addition.
- **Plugin Hot-Reload (#14438):** Jiti cache invalidation for faster plugin dev cycles. High community interest (4 👍).
- **Context Provenance & Traceability (#54373, #50291):** Metadata for source/volatility of injected context, and trace context for distributed tracing. Indicates a trend toward observability and auditability.

**Next-Release Predictions:**
- Multi-bot support (Teams PR is active).
- Bounded follow-up drain fix (#132395) and tool-call circuit breaker — these address chronic stability complaints and are likely priority.

---

## 7. User Feedback Summary

- **Frustration with silent failures:** Issues like truncated replies (#84516), dropped messages (#112259), and "success" reports for failed memory saves (#126906) highlight a strong user desire for **visible, actionable error reporting**.
- **Infrastructure Reliability Concerns:** The memory leak (#91588) and zombie process leak (#97616) shows users are running OpenClaw in production-like settings and hit crashes over extended uptime. Stability is a key satisfaction driver.
- **Channel-Specific Pain Points:** Feishu (multiple issues: #41744, #55694, #72504) and WhatsApp (#96834) are the most problem-heavy channels, suggesting a need for better channel-adapter testing.
- **Developer Experience Desires:** High engagement on plugin hot-reload (#14438) and better observability (#50291) shows a technical user base building on the platform.

---

## 8. Backlog Watch

- **[#91588 — Memory Leak (P0)**](https://github.com/openclaw/openclaw/issues/91588) — **Critical, 23 comments, no fix PR.** The maintainers' top priority; a prolonged absence of a fix is a risk to user trust.
- **[#48788 — Filename Encoding RFC (P3)**](https://github.com/openclaw/openclaw/issues/48788) — **20 comments, open since March.** Waiting on a product decision; has broad applicability.
- **[#84242 — LanceDB Memory Store Not Exposed (P2)**](https://github.com/openclaw/openclaw/issues/84242) — **3 👍 from users**; a major feature (memory) is effectively broken, with no maintainer or fix PR movement.
- **[#54488 — Session Lane Starvation (P1)**](https://github.com/openclaw/openclaw/issues/54488) — **7 comments, open since March 25.** Followup drain monopolizes lanes for 20-30 min, marked `recovery-stuck`.
- **[#55694 — Chinese: Tool Failure Retry Spam (P1)**](https://github.com/openclaw/openclaw/issues/55694) — **6 comments, open since March 27.** Agent retry loops flood users with duplicates; this is directly addressed by the proposed circuit breaker (#78865) and should be consolidated.

---

## Overall Health Assessment

OpenClaw is **actively maintained with strong community engagement**, but the project is experiencing **growing pains in stability and reliability** as it scales. The maintainers' focus on CI/release automation and Gateway reliability (evidenced by today's PR volume) is well-placed. However, the stuck **P0 memory leak** and multiple **P1 silent-failure issues without linked fix PRs** are concerning. The backlog of `needs-product-decision` issues and the high volume of `clawsweeper-recovery-stuck` labels suggest a need to triage and resolve long-standing architectural debates. Shipping the v2026.9.1-beta with restart recovery is a positive signal, but the beta remains focused on reliability fixes, indicating the project is prioritizing robustness before a feature-forward roadmap.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem
**Date:** 2026-08-29

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a **consolidation and hardening phase** across the board. Projects are prioritizing stability (fixing memory leaks, CI automation, and silent failures) over new feature velocity, reflecting maturing user bases running agents in production-like environments. The most significant shared pain points are **context-window economics** (token waste, tool-result bloat, and runaway agent loops) and **channel reliability** (Feishu, WhatsApp, Telegram, and Slack integrations showing the most friction). Architecturally, the ecosystem is converging on **MCP as the universal tool protocol**, with dual-protocol clients and fallback mechanisms becoming standard. The community is increasingly sophisticated—demanding observability, cost controls, multi-tenancy, and progressive disclosure of agent activity. While OpenClaw maintains its position as the reference implementation with the largest community, specialized forks and alternatives (NanoClaw, ZeroClaw, IronClaw) are carving out distinct niches in GUI-driven setup, security-hardened deployments, and enterprise-scale cost management respectively.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Releases (24h) | Health Score | Primary Phase |
|---------|---------------------|-------------------|-------------------------|----------------|--------------|---------------|
| **OpenClaw** | 500 | 500 | 206 | 1 (beta) | **Moderate** — active but critical P0 issues unresolved | Hardening |
| **Hermes Agent** | 50 | 50 | 13 | 0 | **Moderate** — high severity issues, strong response | Stabilization + Scaling |
| **NanoClaw** | — | 50 | ~10 | 0 | **Healthy** — active, but critical launcher bug | Feature Acceleration |
| **ZeroClaw** | 33 | 50 | 0 | 0 | **Healthy** — vibrant but review bottleneck | Maintenance + RFC |
| **CoPaw** | 42 | 31 | 12 | 2 (beta.2, beta.3) | **Strong** — rapid iteration, responsive | Pre-release |
| **IronClaw** | 14 | 28 | 15 | 1 (v1.4.0 stable) | **Excellent** — responsive, clear priorities | Performance Focus |
| **NanoBot** | 8 | 17 | 5 | 0 | **Excellent** — responsive, community-driven | Hardening |
| **LobsterAI** | — | 9 | 9 | 1 (2026.8.28) | **Strong** — healthy velocity, backlog debt | Release Stabilization |
| **PicoClaw** | 1 | 1 | 1 | 0 | **Stable** — low activity, no regressions | Maintenance |
| **Moltis** | 1 | 0 | 0 | 0 | **Quiet** — isolated bug report | Maintenance |
| **NullClaw** | 0 | 0 | 0 | 0 | **Dormant** | — |
| **TinyClaw** | 0 | 0 | 0 | 0 | **Dormant** | — |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | **Dormant** | — |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Unmatched community scale**: 500 issues/PRs updated daily, 206 PRs merged/closed in 24h — 4–40x higher activity than any competitor. This creates a self-reinforcing loop of faster bug detection, more contributors, and richer plugin ecosystem.
- **Most comprehensive channel support**: Feishu, WhatsApp, Telegram, Slack, Discord, Teams, and more. No competitor matches this breadth, though it comes at the cost of channel-specific bug density (Feishu and WhatsApp are the most problem-heavy).
- **Gateway architecture as a differentiator**: The `launchd-handoff` restart-recovery mechanism in v2026.9.1-beta.1 demonstrates a production-grade lifecycle approach that peers (NanoBot, PicoClaw) are only beginning to approach with session-persistence refactors.

**Technical Approach Differences:**
- OpenClaw uses a **monolithic Gateway pattern** with a single process managing all channels and the agent loop, whereas IronClaw deploys a **sandboxed executor** with persistent per-user isolation, and CoPaw uses a **deferred ASGI startup** for faster chat-readiness.
- OpenClaw's **release cadence** is rapid (beta channels, write-once validation) but conservative on breaking changes — it's actively avoiding the kind of architectural shifts that ZeroClaw is RFC-ing (sandbox policies, memory lifecycle decoupling).

**Community Size Comparison:**
| Metric | OpenClaw | ZeroClaw | CoPaw | NanoClaw |
|--------|----------|----------|-------|----------|
| Daily Issue Activity | 500 | 33 | 42 | ~10 |
| Daily PR Activity | 500 | 50 | 31 | 50 |
| Key Debate Depth | Bug triage + architecture | RFC-driven (21-comment debates) | Roadmap (multi-tenant Hub) | Feature PRs (39-PR stack) |
| User Sophistication | Production & Power Users | Security-Conscious | Enterprise | GUI-First |

**The core risk for OpenClaw**: the stuck P0 memory leak (#91588) and multiple P1 silent-failure issues without fix PRs. While it remains the reference standard, projects like IronClaw (cost-focused) and ZeroClaw (security-focused) are explicitly targeting its pain points.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging across **multiple independent projects**, signaling industry-wide demand:

| Emergent Requirement | Projects | Specific Implementation |
|---------------------|----------|------------------------|
| **Tool-Result Size Governance** | IronClaw (#7981, #7986), CoPaw (#7331), OpenClaw (#41744, #84516) | Bounded/first-look envelopes, oversized-result artifacts, token-based truncation, cite-by-reference |
| **Agent Loop Termination / Circuit Breaking** | OpenClaw (#78865, #55694), IronClaw (#7977), NanoBot (#5584) | Tool-call circuit breakers, maxTurns config, loop-termination on repeated output, bounded history replay |
| **Model Fallback on Failure** | CoPaw (#4011, #5718, #7392), NanoClaw (#2363), OpenClaw (token-limit transparency) | Auto-switch on provider errors, OAuth token refresh, fallback model config pages |
| **Progressive Disclosure of Agent Activity** | ZeroClaw (#10426), NanoBot (#5585), OpenClaw (hovercard polish) | "Thinking..." states in Telegram, retry-wait notices in channels, staged session visibility |
| **OAuth/MCP Auth Stability** | Hermes Agent (6-issue cluster), NanoClaw (#2363), CoPaw (MCP dual-protocol) | Lock-free auth, token refresh, stale list_tools recovery |
| **Message Queueing vs. Interruption** | PicoClaw (#3342), OpenClaw (#54488), NanoClaw (setup driver) | After-turn steering, session lane starvation fixes, silent message drop prevention |
| **Memory Lifecycle Decoupling** | ZeroClaw (#6850 RFC), NanoBot (#5570/#5571), OpenClaw (#84242) | Separate policy from storage backend, explicit recall tools, memory store exposure |

---

## 5. Differentiation Analysis

| Project | Core Focus | Target User | Architectural Signature |
|---------|-----------|--------------|------------------------|
| **OpenClaw** | Breadth + Stability | Production power users, multi-channel deployment | Monolithic Gateway, channel-agnostic core |
| **Hermes Agent** | Desktop-First + Agent Scaling | Desktop app users, OAuth-heavy MCP workflows | Desktop UI as primary interface, prompt-cache optimization |
| **NanoClaw** | Native macOS Experience | Casual-to-prosumer Mac users | NDJSON setup driver protocol, GUI-driven CLI |
| **ZeroClaw** | Security & Governance | Self-hosters, enterprise compliance | RFC-driven design, sandbox policies, provenance contracts |
| **IronClaw** | Cost & Latency Optimization | Enterprise pilots, cost-sensitive deployments | Sandboxed executor, context-window-derived thresholds, Durable notification inbox |
| **CoPaw** | Multi-Tenant / Hub | Teams, enterprise collaboration | QwenPaw Hub roadmap, deferred startup, dual-protocol MCP |
| **NanoBot** | Lightweight TUI + WebUI | Developer tools, CLI-first minimalists | Rust TUI, session persistence off event loop |
| **LobsterAI** | Model Variety + Chinese Community | Chinese-speaking users, model experiments | Plan model catalog, WeChat community, "More Models" section |
| **PicoClaw** | Single-Channel Depth | QQ Channel users | Narrow channel focus, attachment-type completeness |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (Shipping New Features):**
- **NanoClaw** — 39-PR setup-driver stack in motion, 10+ PRs merged/closed, long-standing debt cleared. Highest feature velocity relative to baseline. Risk: critical launcher hang (#3645) could undermine onboarding.
- **CoPaw** — Two beta releases in 24h, 12 PRs merged, test suite 41% faster. Excellent momentum toward v2.2.0 stable. Multi-tenant Hub is a major lever for growth.

**Tier 2 — Stabilization with Strategic Investment:**
- **OpenClaw** — High merge velocity (206/24h) but zero new features; deliberate hardening for core infrastructure. The v2026.9.1-beta restart-recovery signals production maturity.
- **IronClaw** — v1.4.0 to stable; 15 PRs merged; clearest prioritization of user-visible cost issues. Likely to maintain green health with sandboxed executor as the next architectural bet.
- **Hermes Agent** — Aggressive P0 batch merging (6 critical fixes) and stale-PR salvage. Consolidating after a feature-heavy period; MCP OAuth is the systemic weakness.

**Tier 3 — Steady Maintenance:**
- **NanoBot** — 5 PRs merged, all community-submitted. Healthy, responsive, on-track for periodic release.
- **ZeroClaw** — High engagement (50 PRs updated) but zero merges; RFC culture is strong but review bottleneck is a risk to contributor motivation.
- **LobsterAI** — 9 PRs closed, one release cut. Healthy velocity but long-standing debt (March-era PRs) needs attention.

**Tier 4 — Quiet/Stable:**
- **PicoClaw** (1 PR merged, stable), **Moltis** (1 issue, isolated bug). No regressions.

**Tier 5 — Dormant:**
- **NullClaw**, **TinyClaw**, **ZeptoClaw** — No activity; effectively abandoned or between major releases.

---

## 7. Trend Signals

### For AI Agent Developers:

1. **Context window economics is the #1 blocker to adoption.** IronClaw's data — "4× input-token cost increase from full-thread replay" and OpenClaw's truncated-reply issues — prove that token waste directly translates to user churn. Developers who build **cite-by-reference tool results, proactive compaction, and bounded retries** will win enterprise and power-user trust.

2. **"Silent failures" are the most damaging UX pattern.** Across OpenClaw (memory "success" that never saved), Hermes (timeouts on successful ops), and NanoClaw (launcher hang with no logs), users consistently report that they'd rather see an error than a false positive. **Actionable, visible error reporting** is a baseline requirement, not a nice-to-have.

3. **The MCP protocol is converging, but stability is lagging.** Hermes' OAuth lock cluster, CoPaw's dual-protocol client, and NanoClaw's stale list_tools recovery all point to MCP session management being the ecosystem's weak link. Standardizing on **fallback-capable, lock-free MCP clients** is a differentiator.

4. **Local-model support is becoming strategic.** NanoClaw's hardcoded 30-min ceiling killing local models, IronClaw's sandboxed executors, and ZeroClaw's Hailo-Ollama support indicate a shift toward on-device/on-prem inference. Developers who make local configurations first-class (not second-tier) will capture the sovereignty-minded segment.

5. **Multi-tenancy and team collaboration are the next growth frontier.** CoPaw's QwenPaw Hub (explicit multi-tenant roadmap) and Hermes' durable bot group chats (execution moving to gateway) show the ecosystem evolving from single-user assistants to team infrastructure. The winning architectures will decouple **agent execution from client processes** (gateway-persistent group chats, sandboxed executors).

6. **Performance engineering is being weaponized as a differentiator.** CoPaw's 41% test-suite speedup and deferred startup, IronClaw's model-window-derived thresholds, and NanoBot's session-persistence-off-event-loop refactor indicate that **latency, not feature count**, is the new battleground.

7. **Community governance signals matter.** ZeroClaw's maintainer decision queue (#8692) and LobsterAI's full WeChat group demonstrate that projects need **explicit processes for RFC triage and community scaling** — social infrastructure is as important as code infrastructure.

---

**Bottom Line for Decision-Makers:** The ecosystem has shifted from "build the agent" to "run the agent reliably at scale." Choose your platform based on whether you prioritize **total channel coverage** (OpenClaw), **cost control** (IronClaw), **security hardening** (ZeroClaw), **enterprise multi-tenancy** (CoPaw), or **macOS UX** (NanoClaw). Watch IronClaw and CoPaw for the most disciplined engineering; watch NanoClaw for the riskiest feature velocity; and watch OpenClaw for the P0 memory-leak fix — it will be the industry's trust barometer for the next quarter.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-29

## Today's Overview

NanoBot is in a **high-velocity maintenance and hardening phase**, with 8 issues and 17 PRs touched in the last 24 hours. The community is unusually productive: **5 PRs were merged/closed today**, all in the bug-fix and stability category, indicating the maintainers are actively clearing technical debt. Notably, **four issues opened by a single contributor (iChizer0) on Aug 28** — touching cron semantics, tool error hints, history replay bounds, and event delivery — suggest deep architectural review work is underway. While there are no new releases, the sheer volume of merged fixes (Windows TUI cursor, Herdr pane rendering, session persistence off the event loop) signals a release is likely imminent. One concern: **PR #5504 has been open for 5 days with a `conflict` label**, suggesting a potentially significant feature is blocked.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

**Five PRs were merged or closed today**, all focused on stability and platform-specific fixes:

| PR | Focus | Impact |
|----|-------|--------|
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | **CLI default command** | Makes bare `nanobot` launch the terminal agent, simplifying onboarding |
| [#5579](https://github.com/HKUDS/nanobot/pull/5579) | **Session persistence off event loop** | Cancellation-safe async SessionManager APIs; moves persistence to worker threads to prevent event-loop blocking |
| [#5578](https://github.com/HKUDS/nanobot/pull/5578) | **Windows TUI clipboard test race** | Stabilizes flaky Windows CI test by waiting on stable observable state |
| [#5577](https://github.com/HKUDS/nanobot/pull/5577) | **Herdr pane full UI** | Runs Herdr panes through the same alternate-screen TUI layout as standalone terminals |
| [#5576](https://github.com/HKUDS/nanobot/pull/5576) | **Herdr pane full UI (duplicate)** | Same as #5577, likely a second attempt — both merged |

**Key architectural advances from merged work:** The session persistence refactor (#5579) is a significant performance fix — moving file I/O off the event loop directly addresses a class of UI jank and potential data-race issues that would surface under load.

## Community Hot Topics

The most active discussion centers on **extending NanoBot's WebUI/MCP integration**:

- **[#5251 — MCP Apps host support for WebUI](https://github.com/HKUDS/nanobot/issues/5251)** — 2 comments, open since Aug 5. The requester wants MCP call results surfaced as interactive UI components (via `io.modelcontextprotocol/ui`), not just text/image artifacts for the model. This is the **oldest active issue** and signals community desire for richer interactive outputs.

- **[#4429 — Custom provider thinking style config](https://github.com/HKUDS/nanobot/issues/4429)** — 2 comments, **closed today**. The fix allows the `custom` provider to enable thinking/reasoning mode for models using non-standard parameters (e.g., VolcEngine/Doubao's `{"thinking": {"type": "enabled"}}`). This closes a long-standing gap for non-OpenAI-compatible providers.

- **[#5582 — Cron jobs crash when created from WebUI quote/@mention](https://github.com/HKUDS/nanobot/issues/5582)** — 0 comments but **critical**; a fix PR [#5587](https://github.com/HKUDS/nanobot/pull/5587) already exists to sanitize persisted origin metadata.

**Underlying need:** Users want deeper integration between the WebUI and the agent runtime — both for richer tool output display and for reliable background automation triggered from chat context.

## Bugs & Stability

Ranked by severity:

**🔴 High — Cron job crash (P1)**
- [#5582](https://github.com/HKUDS/nanobot/issues/5582): Cron jobs crash when created from WebUI turns carrying runtime-context blocks (quotes/@mentions). Fix PR: [#5587](https://github.com/HKUDS/nanobot/pull/5587) — sanitizes persisted origin metadata.

**🔴 High — Discarded sessions reviving (P1)**
- Fix PR merged-ish: [#5589](https://github.com/HKUDS/nanobot/pull/5589) — pending messages in a discarded session's queue could still publish to the global bus during task cleanup.

**🟡 Medium — Tool exception hint missing (P2)**
- [#5583](https://github.com/HKUDS/nanobot/issues/5583): The "try a different approach" recovery hint isn't appended to *raised* tool exceptions, only error-shaped results. Fix PR: [#5588](https://github.com/HKUDS/nanobot/pull/5588).

**🟡 Medium — Session persistence blocks event loop (P1)**
- Merged today via [#5579](https://github.com/HKUDS/nanobot/pull/5579) (and duplicate [#5580](https://github.com/HKUDS/nanobot/pull/5580)).

**🟡 Medium — edit_file docs misleading (P2)**
- [#5592](https://github.com/HKUDS/nanobot/issues/5592): Documentation implies match selectors coexist, but they're mutually exclusive.

**🟢 Low — Windows TUI clipboard race (P2)**
- Fixed in [#5578](https://github.com/HKUDS/nanobot/pull/5578).

## Feature Requests & Roadmap Signals

Several enhancement requests suggest **NanoBot is evolving from a CLI tool toward a platform**:

1. **[#5586 — Ephemeral runtime-context blocks](https://github.com/HKUDS/nanobot/issues/5586)**: Allow runtime-context blocks to opt out of history persistence. Would enable sensitive/transient data (e.g., auth tokens, one-time secrets) to pass through without polluting session history.

2. **[#5585 — Retry-wait notices to channels](https://github.com/HKUDS/nanobot/issues/5585)**: Currently `RetryWaitEvent` is CLI-only; users want visible "retrying in Ns" feedback in Discord/Slack/WebUI. A related PR [#5504](https://github.com/HKUDS/nanobot/pull/5504) is open to surface retry status in WebSocket clients.

3. **[#5584 — Bound reasoning_content replay](https://github.com/HKUDS/nanobot/issues/5584)**: Replaying `reasoning_content`/`thinking_blocks` indefinitely costs tokens and may confuse models. Likely a quick fix with a configurable window.

4. **[#5251 — MCP Apps host support](https://github.com/HKUDS/nanobot/issues/5251)**: The oldest open issue, requesting interactive MCP UI components.

**Prediction:** The **memory refactor** (PRs [#5570](https://github.com/HKUDS/nanobot/pull/5570) and [#5571](https://github.com/HKUDS/nanobot/pull/5571), both open) is the most significant roadmap signal — transitioning from auto-ingested memory to explicit recall via a dedicated tool. This redesign will likely land in the next minor release and could change system-prompt behavior.

## User Feedback Summary

**Pain points:**
- **WebUI/agent integration gaps** — the cron crash with WebUI-created jobs ([#5582](https://github.com/HKUDS/nanobot/issues/5582)) and desire for MCP UI components ([#5251](https://github.com/HKUDS/nanobot/issues/5251)) both reflect users hitting boundaries between the web interface and the agent core.
- **Provider heterogeneity** — users with non-OpenAI models (VolcEngine/Doubao) hit incompatibilities, now resolved via [#4429](https://github.com/HKUDS/nanobot/issues/4429).
- **Token efficiency concerns** — the requests to bound history replay ([#5584](https://github.com/HKUDS/nanobot/issues/5584)) and summarize JSON tool results ([#5590](https://github.com/HKUDS/nanobot/pull/5590)) show users are cost-conscious about long-running agent sessions.

**Satisfaction signals:**
- The rapid merging of user-submitted fixes (all 5 merged PRs today are community contributions) indicates a healthy, responsive maintainer culture.
- The comprehensive test coverage accompanying new fixes (nearly every PR includes `test` in tags) suggests users value reliability.

## Backlog Watch

**Items needing maintainer attention:**

1. **[#5251 — MCP Apps host support](https://github.com/HKUDS/nanobot/issues/5251)** (open 24 days, 2 comments): The oldest active issue. No maintainer response. This is a substantial feature request that may need scoping decisions.

2. **[#5388 — Budget model-visible MCP schemas](https://github.com/HKUDS/nanobot/pull/5388)** (open 16 days, `conflict` label): An opt-in byte budget for MCP tool schemas. Needs a maintainer to resolve conflicts and decide whether this belongs in the core or as a plugin.

3. **[#5504 — Surface model retry status](https://github.com/HKUDS/nanobot/pull/5504)** (open 5 days, `conflict` label): Directly addresses community need [#5585](https://github.com/HKUDS/nanobot/issues/5585). The conflict label suggests the implementation may need rework against the newer session-persistence changes (#5579).

4. **[#5591 — Preserve named pane groups](https://github.com/HKUDS/nanobot/pull/5591)** (just opened today): New UI fix for the TUI pane system; needs review.

**Overall health:** Excellent — a weekly cadence of solid bug fixes, a responsive maintainer team, and an active community filing high-quality, well-scoped issues. The project appears on track for a strong release soon.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the GitHub data provided for Hermes Agent (github.com/nousresearch/hermes-agent) for 2026-08-29:

---

## Hermes Agent Project Digest — 2026-08-29

### 1. Today's Overview
The project is in a state of **high-intensity stabilization and horizontal scaling**. The primary development focus today is a coordinated "P0 batch" effort to fix a spate of critical prompt-caching bugs across multiple provider routes (OpenAI, Bedrock, Anthropic, OpenRouter) and to harden Desktop persistence logic against data loss. The maintainer team is actively salvaging and merging stale PRs onto the current `main` to clear a large backlog, indicating a consolidation phase. While 50 issues and 50 PRs saw activity in the last 24 hours, the high number of `duplicate` labels on bug reports around MCP OAuth suggests the team is actively quashing systemic issues with a "divide and conquer" approach. Despite the zero new releases, the sheer volume of merged fixes (13 PRs closed/merged) points to a healthy, responsive core for a project of this size.

### 2. Releases
No new releases were published in the last 24 hours. The open-source codebase on `main` remains effectively a pre-release for what will likely become `v0.20.7` or `v0.21.0`, currently reflected in the reported `v0.20.6` and `v0.20.5` runtime versions noted in bugs.

### 3. Project Progress
The majority of closed PRs today are hotfixes and salvage operations rather than new features. Key completed work includes:
- **P0 Bug Batch**: A massive batch merge ([PR #97704](https://github.com/NousResearch/hermes-agent/pull/97704)) cherry-picked six critical fixes onto `main`, including prompt-cache boundary fixes ([#97618](https://github.com/NousResearch/hermes-agent/pull/97618)), cache-key length fixes ([#96755](https://github.com/NousResearch/hermes-agent/pull/96755)), and Bedrock `cachePoint` rejection handling ([#97327](https://github.com/NousResearch/hermes-agent/pull/97327)).
- **Desktop Data Safety**: Merged a fix ([PR #96608](https://github.com/NousResearch/hermes-agent/pull/96608)) to make gateway file saves failure-atomic, preventing a failed download from truncating pre-existing files (addressing issue #96597).
- **Desktop Persistence**: Merged a fix ([PR #95886](https://github.com/NousResearch/hermes-agent/pull/95886)) to preserve streamed assistant text and unify atomic persistence for the Desktop UI.
- **Regression Fix**: Merged a fix ([PR #97703](https://github.com/NousResearch/hermes-agent/pull/97703)) to invoke Python entry points via `sys.executable`, preventing silent environmental conflicts during relaunch.

### 4. Community Hot Topics
The most significant ongoing community pain point revolves around **OAuth-backed MCP server stability**, representing a cluster of at least 6 separate but related high-traffic issues.
- **#66616** (115 comments): The most active issue overall, this is an automated watchdog flagging a stale Skills Index.
- **MCP OAuth Locking Cluster**: Issues [#81051](https://github.com/NousResearch/hermes-agent/issues/81051), [#91265](https://github.com/NousResearch/hermes-agent/issues/91265), [#77369](https://github.com/NousResearch/hermes-agent/issues/77369), [#84132](https://github.com/NousResearch/hermes-agent/issues/84132), and [#93562](https://github.com/NousResearch/hermes-agent/issues/93562) all describe similar root causes: races in the Python MCP SDK auth lock leading to "parked" servers, deadlocks, and permanent failures until restarts. The duplication labels and the absence of a unified fix suggest this is the **most pressing and complex systemic issue** for the user base.
- **Prompt Caching Breakage**: Users are reporting provider-specific 400 errors due to cache configuration, specifically with Amazon Bedrock Nova models ([#97281](https://github.com/NousResearch/hermes-agent/issues/97281)) and LiteLLM proxy setups, indicating that the caching layer requires more robust escaping/fallback logic.

### 5. Bugs & Stability
Today's bug reports highlight significant stability concerns, ranked below:
- **[P0] Anthropic 400 errors (Fixed)**: Whitespace-only blocks in prompt cache prefixes caused HTTP 400s. Fixed via [PR #97618](https://github.com/NousResearch/hermes-agent/pull/97618).
- **[P0] Bedrock Nova Rejections (Fixed)**: `cachePoint` markers in `toolConfig.tools` caused ValidationExceptions. Fixed via [PR #97327](https://github.com/NousResearch/hermes-agent/pull/97327).
- **[P1] Desktop Backend Crash (Unfixed)**: On Linux, the forced-local profile backend is killed ~10 seconds after ready, breaking desktop mode ([#96266](https://github.com/NousResearch/hermes-agent/issues/96266)).
- **[P0/P1] Desktop Data Loss (Fixed)**: A failed gateway download truncates pre-existing files ([#96597](https://github.com/NousResearch/hermes-agent/issues/96597)).
- **[P2] WeCom Adapter Misclassification (Open)**: A stale session is misreported as a rate limit, blocking cron deliveries with a misleading error ([#96416](https://github.com/NousResearch/hermes-agent/issues/96416)).
- **[P2] OpenRouter TTFB Cancellation (Open)**: The system's TTFB cap cancels legitimate long-thinking times for large-context models ([#97682](https://github.com/NousResearch/hermes-agent/issues/97682)).
- **Streaming Crash (Open)**: An `AttributeError: 'int' object has no attribute 'lstrip'` crash occurs in the streaming path when non-string chunks are received ([#97382](https://github.com/NousResearch/hermes-agent/issues/97382)).

### 6. Feature Requests & Roadmap Signals
The roadmap appears focused on expanding desktop capabilities and making the system more resilient.
- **Desktop Debug MCP Server** ([#95489](https://github.com/NousResearch/hermes-agent/issues/95489)): A well-scoped proposal for a native MCP server exposing UI-debugging tools to LLM agents, reflecting the project's "agents as first-class citizens" philosophy. **Verdict**: Likely to be scheduled for a future iteration.
- **Durable Bot Group Chats** ([#97681](https://github.com/NousResearch/hermes-agent/issues/97681) & [PR #97712](https://github.com/NousResearch/hermes-agent/pull/97712)): The idea that Group Chat execution shouldn't depend on a single Desktop process is a significant architectural evolution. With an open PR moving execution to the gateway, this is likely to land in the next version.
- **Skill-Sleep/Self-Improvement** ([#71266](https://github.com/NousResearch/hermes-agent/issues/71266)): A proposal to implement a validation-gated self-improvement loop for skills without external dependencies. **Verdict**: This is a P3 "needs-decision" item; it is not imminent but shows the team is considering autonomous agent evolution.
- **Sub-agent Model Routing** ([#76820](https://github.com/NousResearch/hermes-agent/issues/76820)): Per-subagent model override and API key pooling to support complex workflows. This is a highly requested power-user feature but is currently marked `not planned`.

### 7. User Feedback Summary
- **Pain Point (Critical)**: The recurring MCP OAuth lock corruption is the single largest source of frustration, breaking long-running sessions and headless workers. Users (e.g., `tveheim`, `leduncfresh`) report "permanently stuck" and "never recovers" scenarios, eroding trust in tool reliability.
- **Pain Point (High)**: "Silent" failures are a recurring theme, including `/background` results not being delivered on desktop ([#97635](https://github.com/NousResearch/hermes-agent/issues/97635)) and timeouts reported even when operations succeed ([#88988](https://github.com/NousResearch/hermes-agent/issues/88988)). This indicates a need for better async result delivery and state synchronization in the desktop app.
- **Feature Gap (Moderate)**: The CJK character bug in the Desktop "Create new bot" dialog ([#96153](https://github.com/NousResearch/hermes-agent/issues/96153)) highlights gaps in internationalization (i18n) handling, a recurring theme in quality-of-life fixes.
- **Positive Signal**: Salvage PRs explicitly preserving original authorship (e.g., [PR #97708](https://github.com/NousResearch/hermes-agent/pull/97708), [PR #97709](https://github.com/NousResearch/hermes-agent/pull/97709)) show a positive community collaboration model where external contributions are valued.

### 8. Backlog Watch
- **[Stale Skills Index] #66616**: With 115 comments, this automated watchdog issue is the most talked-about item but lacks actionable human input. It suggests the CI/CD pipeline might be flaky. **Needs maintainer attention** to fix the workflow, not just the index.
- **[OpenRouter TTFB Cap] #97682**: While marked `duplicate`, this represents a real UX regression for users of long-thinking models. Need maintainer confirmation that the generic fix in #90031 (reasoning effort) will also address this.
- **[Honcho Session Summary Leak] #97639**: This is a **security/privacy concern**—the session summary model's reasoning text (containing `</think>` markers) is being persisted and reinjected into context. The maintainers should prioritize this to prevent data pollution and potential prompting manipulation.
- **[Linux Desktop Crash] #96266**: Still open with a P1 severity. This bug prevents Linux users from using the desktop app entirely. The lack of a fix PR after two days of discussion suggests it might be complex or require a significant refactor of the profile backend.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw Project Digest — 2026-08-29

### 1. Today's Overview
PicoClaw shows light activity over the past 24 hours, with 1 issue updated (1 open) and 1 pull request merged/closed (0 remaining open). The single merged PR represents the successful completion of a long-running enhancement (created March 2026), indicating healthy follow-through on backlogged work. No new releases were published, suggesting the project is between release cycles. The open issue, now flagged as stale, addresses a UX consideration around message queueing during agent turns. Overall, the project appears stable with moderate maintenance velocity, though maintainer attention may be needed to close out the stale feature request.

---

### 2. Releases
**None.**  
No new versions were published in the last 24 hours. No changelog, breaking-change, or migration information is available.

---

### 3. Project Progress
- **[PR #1349 — Closed/Merged]** `[type: enhancement, domain: channel, go] feat(qq): support parsing and replying to more attachment types`  
  **Author:** aishannon | **Created:** 2026-03-11 | **Updated:** 2026-08-29  
  **Link:** [sipeed/picoclaw PR #1349](https://github.com/sipeed/picoclaw/pull/1349)

  This long-running PR (5.5 months) finally merged. It enhances the QQ Channel integration with:
  - Parsing emoji structures
  - Handling incoming voice, image, video, and file messages
  - Replying with local attachments (upload-before-send)
  - Markdown-first reply strategy with fallback

  This advances the `channel` domain's feature completeness and improves multimedia interoperability.

---

### 4. Community Hot Topics
- **[Issue #3342 — Open, Stale]** `[Feature] Opt-in "after-turn" steering mode: queue busy-session messages instead of interrupting the running turn`  
  **Author:** unedtamps | **Created:** 2026-08-21 | **Updated:** 2026-08-28 | **Comments:** 1  
  **Link:** [sipeed/picoclaw Issue #3342](https://github.com/sipeed/picoclaw/issues/3342)

  This is the only issue with recent updates. The discussion centers on the current steering behavior: when a user sends a second message while the agent is still processing the first, the system treats it as an interruption, skipping remaining tool calls ("Skipped due to queued user message."). The request is for an **opt-in "after-turn" mode** that queues busy-session messages instead of interrupting.  
  **Underlying need:** Users want predictable, non-destructive concurrency control — especially in production or asynchronous workflows where interruptions cause wasted compute and inconsistent states. The low comment count may reflect the issue's recency or narrow scope.

  No PRs are currently linked to this issue.

---

### 5. Bugs & Stability
**No bugs, crashes, or regressions were reported in the last 24 hours.**

The only merged PR is an enhancement, not a fix. No stability-related issues are currently active. The project appears stable in this window.

---

### 6. Feature Requests & Roadmap Signals
- The active request (**Issue #3342**) for an **opt-in "after-turn" steering mode** is the clearest roadmap signal. It suggests the maintainers may consider:
  - Adding a configuration flag (e.g., `queue_messages_after_turn`) to distinguish between "interrupt" and "queue" steering behaviors.
  - Implementing a message queue with turn-boundary flushing.
  - Preserving tool-call completion for in-flight tasks.

  **Prediction:** Given the issue is stale (only 1 comment, flagged), it is **not** likely to appear in the immediate next release. However, if it attracts more engagement or aligns with ongoing agent-loop refactoring, it could be picked up within 1–2 release cycles. The lack of new releases today means any feature work is in-development only.

---

### 7. User Feedback Summary
- **Pain Point:** Message interruption kills useful in-progress work (tool calls) when a second message arrives. The existing behavior discards the remaining task, which can be costly and non-recoverable.
- **Desired Behavior:** Users want control over when queued messages are processed — specifically, after the current turn completes — rather than always preempting.
- **Satisfaction Signals:** The feature request is phrased as a "nice to have" (opt-in), suggesting users are generally satisfied with the default behavior but want flexibility for certain use cases (e.g., long-running agents, batch input users).
- **No negative sentiment or complaints** beyond this single request.

---

### 8. Backlog Watch
- **[Issue #3342 — Open, Stale]**  
  **Created:** 2026-08-21 | **Updated:** 2026-08-28 | **Age:** 8 days  
  **Link:** [sipeed/picoclaw Issue #3342](https://github.com/sipeed/picoclaw/issues/3342)

  Although this issue is only 8 days old, it is already marked `[stale]`. The single comment suggests a lack of follow-up discussion. **Maintainer action recommended:** acknowledge the request, clarify whether the steering design is intentionally interrupt-based, and indicate if an opt-in mode is on the roadmap. This will prevent the issue from lingering indefinitely and demonstrate responsiveness to user input.

  No other unresolved, long-unanswered items were detected in the last 24 hours.

---

**Overall Health Assessment:** *Stable and healthy.* The project is making incremental progress (one major channel enhancement merged), maintaining low issue volume, and showing no regressions. The only open item is a feature request that needs a maintainer response to avoid staleness.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-29

## 1. Today's Overview

NanoClaw shows **moderate-to-high activity** today, with 50 PRs updated in the last 24 hours—the bulk of the activity driven by a **large 39-PR setup-driver stack** from contributor `amit-shafnir` (PRs #3485, #3633–#3640), which is moving interactive setup flows onto a machine-driven protocol. Three issues are open and active, with **no new releases** cut today. Notably, several older PRs (#2361, #2363, #1102, #216, #2326) that had been open for months were merged or closed today, indicating the maintainers are **cleaning up long-standing debt**. The overall project health is healthy, but the volume of open PRs (45) and the presence of a **hard-hang bug** in the launcher script suggest the project is in a **feature-acceleration phase** with some stability gaps.

## 2. Releases

**No new releases published today.** Users should remain on the latest previously tagged release. The high volume of merged fixes (especially around credential proxying and provider contracts) suggests a **release is likely imminent or expected soon**.

## 3. Project Progress

The most significant progress today is the **long-awaited closure of several stale PRs**, many several months old, combined with a massive active feature stack:

**Key Merged/Closed PRs:**
- **[#2361](https://github.com/nanocoai/nanoclaw/pull/2361) — `[codex] tighten codex provider contracts`** *(merged)*: Replaces a stale Codex SDK sketch with the current `codex app-server` JSON-RPC contract, makes `CODEX_MODEL` optional, and removes outdated manual-compaction guidance. This resolves a provider-integration debt that was 3.5 months old.
- **[#2363](https://github.com/nanocoai/nanoclaw/pull/2363) / [#1102](https://github.com/nanocoai/nanoclaw/pull/1102) — `fix(credential-proxy): proactively refresh expiring Anthropic OAuth tokens`** *(both merged)*: Fixes the silent, permanent failure mode where OAuth tokens expire after ~1 hour and container agents get eternal 401s. Scoped to native credential-proxy users; OneCLI users are unaffected.
- **[#216](https://github.com/nanocoai/nanoclaw/pull/216) — `security: fix secret sanitization bypass via /proc and Read tool`** *(merged)*: Fixes a security bypass in the pre-tool Bash hook, where `unset` on API keys could be circumvented via `/proc/self/environ` and the Read tool.
- **[#2326](https://github.com/nanocoai/nanoclaw/pull/2326) — `docs: add issue templates (bug, enhancement, skill)`** *(merged)*: Adds structured GitHub issue templates; follow-up PR #3644 replaces these with even richer forms (likely a superset of this work).

**Active Feature Stack (Setup Driver, 39 PRs):** A large coordinated refactor is moving the entire `setup/auto.ts` flow from the terminal prompt library to a **machine-driven (NDJSON) protocol**, enabling the native macOS app to drive setup. Notable pieces: gating machine completion on a proven service receipt (#3639), refusing secrets on argv/env in machine mode (#3638), a new NDJSON uninstall path (#3637), and moving the first-chat and channel-loop steps onto the driver (#3636, #3635).

**Other Active Fixes:**
- [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) — teaches the agent that `send_card` drops callback actions (agent-runner fix).
- [#3392](https://github.com/nanocoai/nanoclaw/pull/3392) — keeps Slack 1:1 DMs private to the paired operator, closing a privacy/security exposure.
- [#3388](https://github.com/nanocoai/nanoclaw/pull/3388) — routes task-run escalations to the task's own channel, fixing cross-agent notification leaks.
- [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) — voice transcription V2, container-side and sovereign by default (still open).

## 4. Community Hot Topics

- **[Issue #3645](https://github.com/nanocoai/nanoclaw/issues/3645) — `bash nanoclaw.sh` hangs indefinitely with no feedback/logging.** This is the most active issue (2 comments), filed by `dagelf`, and is a **high-visibility onboarding blocker**. The launcher displays an ASCII banner and then hangs with zero diagnostic output. Wait, this is a critical first-run experience issue for new users—the exact moment a first impression is formed.

- **Setup-Driver Stack (PRs [#3633](https://github.com/nanocoai/nanoclaw/pull/3633)–[#3640](https://github.com/nanocoai/nanoclaw/pull/3640), plus [#3485](https://github.com/nanocoai/nanoclaw/pull/3485))** — This 39-PR stack by `amit-shafnir` is the project's central focus and is **documenting a fundamental architectural shift**: allowing a GUI/native app to drive the CLI's setup and uninstall via NDJSON. The underlying need is clear: NanoClaw is **preparing for a first-class native macOS app experience**, moving beyond terminal-only interaction.

- **[PR #3644](https://github.com/nanocoai/nanoclaw/pull/3644) — `chore(github): add issue forms`** by `glifocat` — improving issue triage quality. Consensus driving this: the existing templates are insufficient, likely in part because of the influx of hard-to-reproduce reports like #3645.

- **[PR #2003](https://github.com/nanocoai/nanoclaw/pull/2003) — Voice transcription V2 (`feat(skill)`)** remains open with no recent comments; is this a candidate for takeover or close?

## 5. Bugs & Stability

Ranked by severity:

1.  **CRITICAL — Launcher hang on first-run ([#3645](https://github.com/nanocoai/nanoclaw/issues/3645))**: `bash nanoclaw.sh` hangs indefinitely after printing the ASCII logo, with **no logs and no feedback**. This is a full blocker for any new user attempting to install. **No fix PR exists yet** — this should be the maintainers' top priority.

2.  **HIGH — Hardcoded 30-min ceiling kills long local-model turns ([#3643](https://github.com/nanocoai/nanoclaw/issues/3643))**: Reported by `glifocat`. Long agent turns (heartbeat age > 1.8M ms) are cold-killed by the `ABSOLUTE_CEILING_MS` set to 1,800,000, with **no configuration seam to raise it**. Notably, a **fix PR already exists** — [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) "tell the agent `send_card` drops callback actions" appears related to the same agent-runner subsystem and may or may not address this. This will disproportionately impact local-model users (which the project likely wants to encourage for sovereignty).

3.  **MEDIUM — Slack 1:1 DM privacy leak ([#3392](https://github.com/nanocoai/nanoclaw/pull/3392))**: Not a crash, but a privacy/security bug where non-paired users with channel access could reach a "connect this DM" card, exposing a private DM surface. **Fix PR already open**, awaiting merge.

4.  **MEDIUM — Sanitization bypass fixed ([#216](https://github.com/nanocoai/nanoclaw/pull/216), merged today)**: API key `unset` in pre-tool hooks could be bypassed via `/proc/self/environ`. **Now resolved.**

5.  **LOW — OAuth token expiry ([#2363](https://github.com/nanocoai/nanoclaw/pull/2363), merged today)**: 1-hour token expiry caused silent permanent 401s for container agents. **Now resolved.**

## 6. Feature Requests & Roadmap Signals

- **Rate-limit/quota-aware task retries ([#3599](https://github.com/nanocoai/nanoclaw/issues/3599))**: The project distinguishes between "failed" and "rate-limited/quota-exhausted" runs, so deferrable tasks can auto-retry once capacity returns. This is a **strong candidate for the next minor version** — it's a well-scoped, user-experience improving feature requested by `DawoudIO`.

- **Native macOS app drive (via Setup-Driver stack)**: The 39-PR stack is the clearest roadmap signal — NanoClaw is building a **first-class macOS GUI** that will drive setup, uninstall, and first-chat via a machine protocol. This is a major architectural direction, implying a future release will ship alongside a native app.

- **Container-side voice transcription (PR [#2003](https://github.com/nanocoai/nanoclaw/pull/2003))**: Re-implemented as container-side for sovereignty; still open and uncontested. Likely will land in a future stable release.

- **Configurable `ABSOLUTE_CEILING_MS` (issue [#3643](https://github.com/nanocoai/nanoclaw/issues/3643))**: The reporter explicitly calls out "no config seam", and defines this as a bug. Given the focus on local models, expect a configuration setting for the ceiling to be added soon (possibly per-provider).

## 7. User Feedback Summary

- **Pain point — Opaque launcher failures** (from [#3645](https://github.com/nanocoai/nanoclaw/issues/3645)): Users cannot diagnose why setup hangs — no logs, no spinner, no error. This is the single most damaging user pain point today.

- **Pain point — Long local-model turns killed by an invisible timer** (from [#3643](https://github.com/nanocoai/nanoclaw/issues/3643)): Users running local OpenCode backends have their sessions killed mid-turn with only a WARN log, with **no way to adjust the threshold**, and the failure mode wastes minutes of compute. The sentiment is "this should be configurable, this should be noted."

- **Pain point — Rate-limited runs are indistinguishable from real failures** (from [#3599](https://github.com/nanocoai/nanoclaw/issues/3599)): Failed runs due to quota exhaustion look identical to genuine bugs in `ncl tasks`. Users need to know *why* a run failed to decide whether to retry. A desire for **classification and automatic retry** is explicit.

- **Positive signals**: The long-awaited merges today (Codex contract, OAuth refresh, security fix) indicate that **long-standing reported pain points are being resolved**, which should improve overall satisfaction. The volume of merged PRs suggests maintainers are responsive.

## 8. Backlog Watch

These items have been idle for extended periods without maintainer response and deserve attention:

- **[Issue #3599](https://github.com/nanocoai/nanoclaw/issues/3599) — Persist rate-limit/quota classification on task runs** (filed 2026-08-28): one day old, but the concern is conceptually mature and requires a design decision; needs acknowledgment.

- **[Issue #3643](https://github.com/nanocoai/nanoclaw/issues/3643) — Hardcoded ABSOLUTE_CEILING_MS** (filed 2026-08-28): no comments from maintainers yet; needs triage and likely a config-seam decision.

- **[PR #2003](https://github.com/nanocoai/nanoclaw/pull/2003) — Voice transcription V2** (filed 2026-04-25): open for **4 months** with no maintainer comment since initial feedback. This is the oldest open PR in the current top-20 and may be at risk of abandonment; it needs a maintainer decision to push forward or close.

- **[PR #3485](https://github.com/nanocoai/nanoclaw/pull/3485) — Document the setup driver protocol** (filed 2026-08-23): the final PR in the 39-PR stack, currently pending review.

- **[PR #3427](https://github.com/nanocoai/nanoclaw/pull/3427) — Tell the agent `send_card` drops callback actions** (filed 2026-08-21): open for 8 days with no comments; may be a needed prerequisite for fixing the ceiling bug (#3643).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-29

## 1. Today's Overview

IronClaw is in a period of intense, performance-focused development. The project saw 14 issues and 28 PRs updated in the last 24 hours, with 15 PRs merged or closed. The dominant theme this week is **context-window economics**: multiple high-severity issues and a cluster of related PRs target runaway token consumption, over-sized tool payloads, and poor compaction behavior. The maintainers are actively responding with a coordinated set of fix PRs (compaction hardening, model-window-derived thresholds, tool result reference-citation). A single new release, `v1.4.0`, was promoted to stable, with the notification inbox and hooks system being the marquee features. Overall, the project is highly active and healthy, with a clear focus on reducing real-world inference cost and latency.

---

## 2. Releases

**ironclaw-v1.4.0** (2026-08-27) — promoted from `1.4.0-rc.1`, covering 81 commits since `v1.3.0`.

**Key additions:**
- **Durable notification inbox:** runs now publish authoritative outcomes and actionable gates to a per-user inbox, surfaced via the WebUI.
- This inbox underpins the day's merged PRs around `RunFailed`, `RunBlocked`, and `AuthenticationRequired` notifications (see below).

**Migration/breaking changes:** Not explicitly stated in the notes. Given the `1.4.0-rc.1` stabilization path, existing configurations are expected to be compatible. The notification system is additive; no core loop breaking changes are called out.

---

## 3. Project Progress

**Merged/Closed PRs today (15 total) reflect three clear workstreams:**

**A. Durable Notification System (now shipping in v1.4.0)**
- **PR #7899** — `RunFailed` pre-run failure notifications published to the Inbox.
- **PR #7900** — Resource/policy blocked-run notifications mapped to `RunBlocked`.
- **PR #7901** — Auth-gate notifications persisted *before* enrichment, ensuring a backend outage cannot hide actionable items.

**B. Performance & Tool-Result Hygiene**
- **PR #7982** — `builtin.result_read` now stops retrying when a budget is unreachable (fixed a production run that retried 5× against an impossible `max_bytes`).
- **PR #7965** — `tool_search` now rejects tools that match only one incidental query term, preventing hallucinated "results exist" responses.
- **PR #7979** — Added an architecture gate enforcing encoded-output ownership boundaries across extensions (fail-closed test).

**C. WebUI Design System**
- **PR #5563** — The long-running design-system tokens PR + `/playground` finally merged; this is the foundation for AI-implemented UI improvements.
- **PR #5084** — Ground-up redesign of the Automations page, aligned with the new design system.

**Infrastructure**
- **PR #7980** — CI now validates integration group topology before execution.

---

## 4. Community Hot Topics

1. **Issue #7891 — Unprojected capability payloads cost 19.2s of inference** (10 comments) — [link](https://github.com/nearai/ironclaw/issues/7891)
   A 19.7-second turn on Gmail was dominated by model inference (19.2s) driven by 49KB of raw MIME headers the model never asked for. **Underlying need:** capability/tool outputs must be projected (trimmed/summarized) to minimum viable payloads *before* entering the prompt. This is the central pain point of the week.

2. **Issue #7824 — Context projection compaction barrier** (5 comments) — [link](https://github.com/nearai/ironclaw/issues/7824)
   Documents a 4× input-token cost increase (227.7M vs 55.1M tokens, $10.31 vs $2.52) from full-thread replay. **Underlying need:** structured, proactive compaction—this is the roadmap item that the new PR #7976, #7977, and #7978 are actively addressing.

3. **Issue #7981 — 64 tool calls and 3m01s to list GitHub repos** (3 comments) — [link](https://github.com/nearai/ironclaw/issues/7981)
   The model went on a 61-call `builtin.fetch` spree because the `list_repos` payload (519KB) was too large to inline. **Underlying need:** tool-result *routing*—a bounded view should auto-route to a referenced read, not send the model into a loop.

---

## 5. Bugs & Stability

**Ranked by severity:**

1. **[HIGH] Issue #7981 — list_repos 519KB payload causes 3-minute tool loop** — [link](https://github.com/nearai/ironclaw/issues/7981)
   The answer was present after call #1; the model spent 61 additional calls. Related fix: **PR #7984** (sizes `tool_search` replies to the first-look envelope) and **PR #7982** (fixes the `result_read` retry dead-end).

2. **[MEDIUM] Issue #7987 — `flatten_top_level` silently discards schema constraints** — [link](https://github.com/nearai/ironclaw/issues/7987)
   Tool schemas are rebuilt from a whitelist; any non-forbidden top-level keyword is dropped without warning. This is a correctness bug that can cause providers to receive invalid schemas. No fix PR yet.

3. **[MEDIUM] Issue #7986 — `github.list_repos` ships 81 raw fields per repo** — [link](https://github.com/nearai/ironclaw/issues/7986)
   The extension's own projection seam is unused; the payload is returned verbatim. No fix PR yet; it's the upstream cause of #7981.

4. **[LOW] PR #7985 — A missing memory document reports as "input could not be encoded"** — [link](https://github.com/nearai/ironclaw/pull/7985)
   Domain failure misclassified as a malformed request; the user-facing error is misleading. Fix is in review.

---

## 6. Feature Requests & Roadmap Signals

**Strong next-version candidates:**

1. **Model-window-derived compaction** (PR #7976) — Proactive compaction threshold derived from the *selected* model's context window (16k reserve, ~20k retained tokens). This directly addresses the cost blowup in Issue #7824.

2. **Tool-result reference-citation** (Issue #7930) — Allow tool arguments to cite a prior result by reference instead of re-emitting the payload. This is the structural fix for both #7891 (Gmail headers) and #7981 (repo list). High-value, likely an epic.

3. **Termination on dominant repeated output** (PR #7977) — Re-introduces a loop-termination signal for no-progress runs (a production run hit 593 tool calls and 70 minutes). Necessary for cost containment.

4. **Persistent per-user sandboxed executor** (Issue #7903, PR #7908) — Moving the full agent loop into the sandbox; a high-risk decision spike that could reshape the architecture.

5. **NEAR AI model modalities** (Issues #7969, #7970, #7971) — Three coordinated issues to preserve and surface input/output modalities (text, image) through discovery and UI selectors. A clear roadmap commitment.

---

## 7. User Feedback Summary

The user base (largely power users and enterprise pilots) is reporting **cost and latency pain as the #1 blocker to adoption.** The week's issues are dominated by "the model spent X minutes and $Y on something that should have taken one call." Specific recurring complaints:

- **Unrequested data in prompts:** "The model re-read 49KB of headers it never asked for."
- **Tool loops:** "It issued 64 calls when the answer was in call #1."
- **Non-progress runs:** "593 tool calls over 70 minutes with no termination."

Satisfaction signals are present: the notification system (v1.4.0) is being well-received, and the design-system investment (PR #5563) is expected to deliver visible UI quality gains. The team's response speed is high—fix PRs are landing within 24–48 hours of issue reports.

---

## 8. Backlog Watch

- **Issue #7770 — Hook the agent lifecycle epic** (updated 2026-08-29, no maintainer response in 24h) — [link](https://github.com/nearai/ironclaw/issues/7770)
  A well-scoped, phased epic for `after-turn`, `before-turn`, and `compaction` hooks. It appears ready for assignment; the community is waiting for a phase-1 owner.

- **Issue #7903 — Persistent sandboxed executor decision spike** (2 comments, risk: high) — [link](https://github.com/nearai/ironclaw/issues/7903)
  The related PR #7908 is open; this is a major architectural decision that will need explicit maintainer sign-off on the authority-boundary trade-off.

- **Issue #7891 — 19.2s inference on two emails** — While the symptom has PRs in flight, the *systemic* fix (unprojected capability payloads) is not yet scheduled. This is the single highest-leverage follow-up; maintainers should track it as a release-blocker for cost guarantees.

---

**Project Health Assessment:** Green. High responsiveness, clear prioritization of user-visible cost/latency issues, and a healthy mix of architecture investment (compaction, sandboxing) and user-facing polish (notifications, WebUI). The main risk is the gap between issue reporting and the systemic fixes for payload projection—the band-aids (PR #7982, #7984) are landing, but the structural "cite-by-reference" (Issue #7930) has no owner yet.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-29

## 1. Today's Overview
LobsterAI is in a **release-stabilization and community-request wave** today. A new version **2026.8.28** was cut, bundling a login guide, a new plan model catalog, and multiple renderer fixes from the release branch. The 24h window shows **9 PRs merged/closed** (all but 1), signifying a high merge velocity and healthy CI pipeline. Activity remains focused on **surface-level UX polish** (phone masking, model collapsing, sidebar banners), but there are **long-standing stale PRs from March** (unit tests, URL bug fixes, agent task hiccups) finally being touched for closure. Community pressure is visible: users are **impatiently demanding a "v4pro" update**, and the WeChat community group is full, indicating scaling pains. Overall, **project health is strong**, but maintainers face **backlog debt** and **feature-completeness anxiety** from the user base.

## 2. Releases (2026.8.28 — "LobsterAI 2026.8.28")
A new stable release was published yesterday. Highlights include:
- **feat(settings): add plan model catalog** — new model options for subscription/plan tiers.
- **Liuzhq/login guide** — improved first-time user onboarding docs/UI.
- **fix(account): phone masking merge conflict** — protects real user phone numbers in UI; replaced real test data with synthetic fixtures.
- **fix phone nickname** — corrects display when phone numbers are used as nicknames.
- **feat: collapse more models and sync sidebar banner schedules** — groups optional models behind a collapsed "More Models" section; adds server-synchronized banner scheduling with client-version gating and local expiry/cache handling.

**Breaking changes & migration notes:** No breaking changes are documented; the release focuses on additive features and bug fixes.

## 3. Project Progress
Today’s merged/closed PRs show **active feature development and backend stabilization**:
- **[#2572](https://github.com/netease-youdao/LobsterAI/pull/2572)** — Release/2026.8.24 base branch merge (core packaging).
- **[#2571](https://github.com/netease-youdao/LobsterAI/pull/2571)** & **[#2569](https://github.com/netease-youdao/LobsterAI/pull/2569)** — Phone nickname fixes (renderer).
- **[#2570](https://github.com/netease-youdao/LobsterAI/pull/2570)** — Account menu merge conflict resolution; critical **privacy fix**: preserved shared phone masking (`136****7834`) and removed real phone test data.
- **[#2568](https://github.com/netease-youdao/LobsterAI/pull/2568)** — "More Models" collapsible section + server-synced sidebar banner scheduling (feature work).
- **[#1156](https://github.com/netease-youdao/LobsterAI/pull/1156)** — Unit tests for `commandSafety` and `coworkMemoryJudge` (core safety modules) — **significant backend hardening milestone**.
- **[#1153](https://github.com/netease-youdao/LobsterAI/pull/1153)** — Fix for Google Gemini `/v1` URL concatenation bug (off-by-one error).
- **[#1155](https://github.com/netease-youdao/LobsterAI/pull/1155)** — In-session Ctrl+F search with text-node precision and CSS Custom Highlight API (UX feature).
- **[#1146](https://github.com/netease-youdao/LobsterAI/pull/1146)** (OPEN) — Fix for newly-created agent not fetching task records until a switch-away/back cycle (stale but unresolved).

**What advanced:** the project is consolidating a **"quality & safety" sprint** (testing critical LLM-path modules) while shipping **user-facing convenience features** (search, collapsible menus, login guidance).

## 4. Community Hot Topics
- **#2489 ["快更新v4pro！"]((https://github.com/netease-youdao/LobsterAI/issues/2489))** (3 comments, CLOSED): A direct user demand to "Hurry and update v4pro!" — likely a feature/model request for the Pro model tier. Closed, but signals **growing impatience with model release cadence**.
- **#2536 ["微信群已满人"]((https://github.com/netease-youdao/LobsterAI/issues/2536))** (2 comments, CLOSED): WeChat group full; user requesting a second community group. Indicates **community growth outpacing channel capacity**.

**Underlying needs:**
- **Scalability**: users seek more accessible community channels (discord/Telegram/second WeChat).
- **Speed**: the "v4pro" demand suggests there’s an anticipation for a newer, more powerful model variant; users are closely tracking release notes and wanting faster iteration on model capabilities.

## 5. Bugs & Stability
- **[HIGH] Phone masking leak (PR #2570)**: Real phone numbers were present in test data — a **privacy/data-hygiene bug**. Fixed by masking and synthetic fixtures. *Status: Fixed & merged.*
- **[MED] Google Gemini `/v1` URL concatenation error (Issue #1151 / PR #1153)**: `slice(0, -3)` produced `…googleapis.comv1beta/…` (missing `/`), breaking requests when user sets Gemini baseURL ending in `/v1`. *Status: Fixed via [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153), now closed.*
- **[LOW] New agent task record not loading (Issue/PR #1146)**: Creating a same-named agent after deletion doesn’t show task records until a manual switch-away/back. *Status: PR still open, root cause not yet merged.*
- **[LOW] Missing unit tests for `coworkMemoryExtractor` (Issue #1149) & `commandSafety`/`coworkMemoryJudge` (Issue #1154)**: These are **preventive stability gaps**; now partially addressed via [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156), but the memory extractor test PR remains missing.

**Severity ranking:** (1) Phone mask leak → (2) Gemini URL bug → (3) Agent task record → (4) test coverage debt.

## 6. Feature Requests & Roadmap Signals
- **"v4pro" (Issue #2489)**: A **major model/version expectation**. Next release may include new **plan/model catalog** entry (hinted in 2026.8.28 release) — likely the "v4pro" or similar Pro model, matching this demand.
- **WeChat group scaling (Issue #2536)**: Suggest creating a **second group or migrating to a scalable platform** (Discord/Telegram). Non-code but process-level roadmap impact.
- **In-session Ctrl+F search (PR #1155)**: a mature feature already landing in v2026.8.28 — shows **UX polish direction** (keyboard-first UX design).
- **Memory extraction tests (Issue #1149)**: Backend robustness; may appear in an upcoming "stability release."

**Predictions for next minor release:** the **"More Models" collapse** feature + **banner scheduling** will reach stable; possibly a **new Slack/WeChat group link** in docs; and a **v4pro model variant** appears in the plan catalog.

## 7. User Feedback Summary
- **Satisfaction** (merged/closing): Users quietly thank devs for UI polish (phone masking). Ease-of-use features (Ctrl+F, login guide) are well-received.
- **Pain points** (open/closing):
  - **Model/version cadence**: "快更新v4pro！" highlights frustration with perceived slow progress on newer models.
  - **Community capacity**: "微信群已满人" — inability to join official channels creates support/logistics friction.
  - **Stability**: Memory testing gaps (Issue #1149) reflect **community concern about LLM-memory reliability** — devs are proactively reducing regressions.
  - **Confusion**: Gemini URL bug (Issue #1151) shows **advanced users hitting configuration edge-cases** when using custom baseURLs.

Overall sentiment: **satisfied with bug-fix velocity, eager for faster feature/model evolution**.

## 8. Backlog Watch
- **[](https://github.com/netease-youdao/LobsterAI/pull/1146) [#1146 — New agent not fetching task records](https://github.com/netease-youdao/LobsterAI/pull/1146)** (OPCEN): Created March 2026, still open. This **breaks a core UX flow** (a recreated agent shows empty task history). Needs maintainer review.
- **[](https://github.com/netease-youdao/LobsterAI/issues/1149) [#1149 — Memory extractor unit tests missing](https://github.com/netease-youdao/LobsterAI/issues/1149)** (OPEN): Test coverage for **critical memory-parsing logic** is still absent; 35 test cases are already written in the PR but not merged. **Security/stability risk** for memory features.
- **[](https://github.com/netease-youdao/LobsterAI/issues/1151) [#1151 — Gemini URL bug](https://github.com/netease-youdao/LobsterAI/issues/1151)** (OPEN): The fix PR exists and is closed, but the issue is **not yet marked closed** — likely a bookkeeping miss, but leaving stale issues confuses contributors.

**Action items for maintainers:** close #1151 after verifying fix; prioritize #1146 with clear acceptance criteria (task record fetch on agent recreate); merge the ready-made memory test suite from #1149 to improve security and signal reliability to community.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for 2026-08-29.

---

# Moltis Project Digest – 2026-08-29

## 1. Today's Overview
Moltis is experiencing a low-activity day, with only 1 new issue reported in the last 24 hours and no pull requests or releases. The single issue is a bug report concerning a runtime failure after adding a node to an existing sandbox environment. This quiet period suggests the core project is stable, but the reported issue touches on core orchestration logic and warrants immediate attention. Overall, the project appears to be in a maintenance phase, with community engagement focused on specific operational blockers rather than broad feature discussion.

## 2. Releases
No new releases were published in the last 24 hours. There are no changelogs, breaking changes, or migration notes to report.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. There is no new feature development or merged fixes to report for this digest period.

## 4. Community Hot Topics
- **[Bug] can't run on sandbox after a node is added** ([#1246](https://github.com/moltis-org/moltis/issues/1246)) – *Open, 0 comments, 0 reactions*
  - This is the only active issue. Despite having standard preflight checks completed by the reporter, the issue has no discussion yet. The lack of engagement suggests it was just filed, but the underlying need is clear: users require reliable scaling of sandbox environments without needing to restart the entire runtime. The immediate need is technical support, but the broader signal is a desire for better lifecycle management of dynamic topologies.

## 5. Bugs & Stability
- **[High Severity] Sandbox execution failure after node addition** ([#1246](https://github.com/moltis-org/moltis/issues/1246))
  - **Description:** The runtime fails to execute commands in a sandbox after a new node is added to the cluster/environment. This is a functional regression that blocks users from scaling up environments.
  - **Impact:** This blocks users from utilizing multi-node orchestration, a core feature of the platform.
  - **Status:** No fix PR currently exists. This issue is fresh and requires maintainer triage to determine if it is a configuration bug, a race condition, or a state-sync issue.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests in the current issue queue. However, the bug in [#1246](https://github.com/moltis-org/moltis/issues/1246) may implicitly signal a roadmap item: **"Dynamic Topology Reconfiguration."** Users expect the system to handle node addition as a hot-pluggable operation, which suggests the next minor release might focus on state synchronization and resource re-allocation stability rather than new features.

## 7. User Feedback Summary
The only active user voice is the reporter of issue [#1246](https://github.com/moltis-org/moltis/issues/1246). The reporter is technically proficient (indicated by the preflight checklist) and expresses frustration at hitting a blocker during standard usage. While we cannot gauge overall satisfaction, this specific report highlights a **pain point regarding operational agility**—users want zero-downtime scaling. The absence of positive feedback or feature praise in the last 24 hours indicates a quiet, but likely satisfied, user base, with the exception of this isolated incident.

## 8. Backlog Watch
No long-standing open issues or PRs have been flagged in this digest period. The project backlog appears clean, with the only open item being the newly created bug [#1246](https://github.com/moltis-org/moltis/issues/1246). Maintainers should prioritize this issue to prevent it from lingering and to confirm debugging practices for the community.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-29

## 1. Today's Overview

CoPaw (QwenPaw) is in an intense pre-release phase for v2.2.0-beta.3, with 42 issues and 31 PRs updated in the last 24 hours. The project shows strong momentum: 12 PRs merged/closed, 2 new releases shipped (beta.2 → beta.3), and a 41% test suite speedup merged. Development focus is on MCP protocol modernization (dual-protocol Streamable-HTTP client), startup performance (deferred ASGI startup architecture), and memory/context management robustness. The community is highly engaged, particularly around the upcoming multi-tenant "QwenPaw Hub" feature and fallback model configurations. Overall project health appears strong, with rapid iteration and a healthy mix of feature work and stability fixes.

## 2. Releases

**v2.2.0-beta.3** (released 2026-08-28):
- **feat(mcp):** Added a Streamable-HTTP dual-protocol client with legacy fallback — the new `HttpAutoClient` speaks the 2026-07-28 protocol first and gracefully falls back to older handshake-era versions (2025-03-26 / 2025-06-18 / 2025-11-25)
- **fix(mcp):** Fixed hung session RPCs on teardown and stale `list_tools` recovery — addresses the long-standing issue where MCP server restarts left clients stuck

**v2.2.0-beta.2** (released earlier):
- **fix(workspace):** Startup failure cleanup is now cancellation-safe
- **test(e2e):** Added 23 targeted console test cases with extended assertions

*No breaking changes or migration notes were announced in either release.*

**Source:** [v2.2.0-beta.3 release](https://github.com/agentscope-ai/QwenPaw/releases)

## 3. Project Progress

**Merged/Closed PRs (12 total, highlights):**

- **[MCP Streamable-HTTP dual-protocol client (#7330)](https://github.com/agentscope-ai/QwenPaw/pull/7330)** — Major infrastructure advance; ensures compatibility across MCP protocol versions
- **[MCP hung RPC abort and stale list_tools recovery (#7329)](https://github.com/agentscope-ai/QwenPaw/pull/7329)** — Fixes session teardown hangs
- **[Bound oversized single-line tool results (#7331)](https://github.com/agentscope-ai/QwenPaw/pull/7331)** — Prevents massive tool outputs from overflowing model context; preserves full results as workspace artifacts with recovery metadata
- **[Restore reliable model discovery for custom OpenAI-compatible providers (#7320)](https://github.com/agentscope-ai/QwenPaw/pull/7320)** — Closes #7305; discovery flow now works across configuration, persistence, and frontend refresh
- **[DingTalk stale stream detection (#7381)](https://github.com/agentscope-ai/QwenPaw/pull/7381)** — Detects stale WebSocket connections after sleep/wake, network changes, or VPN route changes
- **[Migrate discovered model output limits (#7386)](https://github.com/agentscope-ai/QwenPaw/pull/7386)** — Legacy `max_tokens` migration for discovered models
- **[ACP max_completion_tokens fix (#7388)](https://github.com/agentscope-ai/QwenPaw/pull/7388)** — Correct parameter for explicit runtime output limits
- **[Test suite 41% wall clock reduction (#7380)](https://github.com/agentscope-ai/QwenPaw/pull/7380)** — 9,997 unit tests in 57s; fixed real defects found during analysis
- **[Shared A-tier deferred startup architecture (#7384)](https://github.com/agentscope-ai/QwenPaw/pull/7384)** — App becomes chat-ready much faster; deferred work runs in background

## 4. Community Hot Topics

- **[QwenPaw Hub multi-tenant edition — roadmap discussion (#7318)](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — 13 comments, 1 👍. Most active open discussion. Users are providing input on what to build for team/multi-user support, referencing earlier requests (#2324) for multi-user access and admin-managed skills. This is clearly a high-priority roadmap item.

- **[Feishu (Lark) channel unresponsive after first reply (#5757)](https://github.com/agentscope-ai/QwenPaw/issues/5757)** — 15 comments, closed. Users report the bot receives but doesn't reply to follow-up messages in the Feishu channel, persisting across Docker and AgentScope Platform deployments. **Regression risk signal** — the community is wary of channel reliability.

- **[OpenSSL 3.0.x TLS stack in desktop/Docker bundles — carrier DPI resets handshakes (#7298)](https://github.com/agentscope-ai/QwenPaw/issues/7298)** — 9 comments, open. Environment/networking issue affecting users on carrier-grade networks (common in China). Desktop bundle has no workaround.

- **[RemoteProtocolError: peer closed connection (#6314)](https://github.com/agentscope-ai/QwenPaw/issues/6314)** — 9 comments, closed. Long-diagnosed connection issue found to be QwenPaw actively closing connections (FIN from QwenPaw side).

- **[Claude Code third-party harness — progress/roadmap (#7395)](https://github.com/agentscope-ai/QwenPaw/issues/7395)** — 2 comments, closed. Community interest in Claude Code harness support; currently marked "coming soon" in v2.2.0b2.

## 5. Bugs & Stability

Ranked by severity:

1. **Large MCP results bypass scroll compaction and overflow context (#7288)** — [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7288) — Enterprise data analysis scenarios break when MCP returns large time-series/bulk data. *Fix PR #7331 (bound oversized tool results) merged.* ⚠️ High severity for enterprise users.

2. **Chinese-character PDF filenames cause errors (#7379)** — [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7379) — OPEN, created 2 days ago. `UNKNOWN_AGENT_ERROR: No connection adapters found for 'C:/Users/.../这是中文字符...'` on Windows. ⚠️ Affects CJK users; no fix PR yet.

3. **OpenSSL 3.0.x TLS stack blocked by carrier DPI (#7298)** — [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7298) — OPEN, 9 comments. Desktop and Docker bundles use Python 3.11-era TLS; no workaround for desktop users on affected networks.

4. **MCP session invalidation after server restart (#6524)** — [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6524) — CLOSED. Fixed via PR #7329 (stale list_tools recovery) in v2.2.0-beta.3.

5. **WebView2 renderer crash on v2.0.0+post.4 (#6427)** — [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6427) — CLOSED. Deterministic assertion failure in `msedge.dll`; regression between post.3 and post.4.

6. **Editable install memory leak: 48GB+ during startup (#6124)** — [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6124) — CLOSED. 36 ReMe background loops consumed 48GB+ RAM. Addressed via ReMe 0.4.1.10 adaption (PR #7133).

7. **MCP backend restart doesn't auto-recover (#6524)** — [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6524) — CLOSED. Fixed by dual-protocol client and stale recovery.

## 6. Feature Requests & Roadmap Signals

**High-signal requests likely to ship:**

- **Fallback model support (#4011, #5718)** — Multiple requests for automatic model switching on failure. **PR #7392 (dedicated fallback settings page)** is OPEN — strong signal this ships in 2.2.0.
- **Multi-tenancy / QwenPaw Hub (#7318)** — Announced for 2.2.0; actively collecting community input.
- **Prompt cache hit rate observability (#7335)** — QwenPaw at 81.68% vs OpenCode's 96.02%. Cost-impact documented. Labeled "good first issue" but significant cost implications.
- **System tray icon for Windows (#3751, #5622)** — Multiple duplicate requests; not yet addressed.

**In-flight (PRs OPEN):**

- PowerContext pluggable long-term memory backend (#7080) — New memory backend option
- Configurable MCP tool call timeout (#6874) — Under review
- Chat history pagination + transcript virtualization (#7361) — Under review
- Reject oversized image dimensions (#7220) — First-time contributor

## 7. User Feedback Summary

**Pain points:**

- **Channel reliability (Feishu/WeChat):** Users report unresponsive bots after first message (#5757) and duplicate replies in WeChat with active mode (#5030). Channel stability is a recurring theme.
- **Large output handling:** Shell command output >30KB gets truncated, sometimes with "Internal error" (#6512). Users want automatic file-dump or streaming.
- **Session/context management:** Empty chat history for running callee agents (#2814), concurrent cron tasks racing on shared sessions (#4217), busy agents silently dropping messages (#5344).
- **Model flexibility:** Hardcoded model lists for GPT-5.x (#2777), no fallback model option (#4011), auto-model-switch on quota errors (#5718).

**Satisfaction signals:**

- Community responds positively to rapid release cadence (beta.2 → beta.3 with meaningful fixes)
- Multi-tenant Hub generating genuine enthusiasm and detailed feedback (#7318)
- Test suite improvements (#7380) and startup performance work (#7384, #7387) show commitment to developer experience

## 8. Backlog Watch

**Issues needing maintainer attention:**

- **[Oversized image dimensions rejection (#7212)]** — Closed by PR #7220 (OPEN, first-time contributor, not yet merged). Vision provider pixel limits not checked — potential crash vector.
- **[Chinese-filename PDF processing error (#7379)](https://github.com/agentscope-ai/QwenPaw/issues/7379)** — OPEN, 2 days, no assignee. CJK path handling bug with no fix PR yet.
- **[Steer mode / mid-execution message injection (#1775)](https://github.com/agentscope-ai/QwenPaw/issues/1775)** — OPEN since March 2026, 2 comments. Feature request for Codex-style steer mode; tagged "good first issue" but stale.
- **[Auto-switch model (#5718)](https://github.com/agentscope-ai/QwenPaw/issues/5718)** — CLOSED as feature request but no linked PR. Addressed indirectly by fallback model page (#7392), but the agent-driven auto-switch capability (tool access) is not yet covered.
- **[PowerContext memory backend PR (#7080)](https://github.com/agentscope-ai/QwenPaw/pull/7080)** — OPEN, Under Review, first-time contributor. No maintainer comments visible; long-memory alternatives are a strategic topic (see memory leak fixes).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-29

## 1. Today's Overview

ZeroClaw is in a **high-activity maintenance and feature-development phase**. With **33 issues** and **50 pull requests** updated in the last 24 hours, the project shows strong, sustained contributor engagement. Notably, **zero PRs were merged or closed** today, indicating a focus on review and iteration over integration. The issue tracker reveals a **healthy RFC-driven design culture**, with several high-priority, long-running proposals (e.g., memory lifecycle decoupling, sandbox policies, WASM capabilities) still under discussion. The current backlog is heavy with **security hardening and correctness fixes** (API key redaction, sandbox escapes, and parallel-run logic bugs), while new feature requests (SOP-as-heartbeat, Telegram progress) signal active, real-world usage. However, the **large volume of open PRs (50) with zero merges** suggests a potential review bottleneck that maintainers should monitor.

## 2. Releases

No new releases were published in the last 24 hours. The last release remains the `v0.9.x` line. Given the volume of pending PRs, particularly security hardening fixes, a patch or minor release is likely imminent once merge velocity increases.

## 3. Project Progress

While no PRs were merged today, several critical bug-fix PRs remain open and are awaiting maintainer review or author action. These represent the current "in-flight" work that will likely land soon:

- **[PR #10414](https://github.com/zeroclaw-labs/zeroclaw/pull/10414)** (`fix(cron): guard agent manual trigger and history`): Adds owner-qualified helpers to prevent one agent from seeing or triggering another's cron jobs. A key security and isolation fix.
- **[PR #10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364)** (`fix(runtime): keep detailed tool output when a short error is also set`): Fixes a bug where detailed error output was swallowed if a short error message was present, improving debuggability.
- **[PR #10030](https://github.com/zeroclaw-labs/zeroclaw/pull/10030)** (`fix(runtime): persist session state from the RPC prompt path`): Ensures session state is correctly updated (running/idle/error) when prompt-mode is used via RPC, fixing stuck-session queries.
- **[PR #10438](https://github.com/zeroclaw-labs/zeroclaw/pull/10438)** (`fix(channels): preserve WhatsApp storage integrity`): Fixes a potential panic by validating WhatsApp device key blobs before conversion, preventing crashes from malformed database rows.
- **[PR #10309](https://github.com/zeroclaw-labs/zeroclaw/pull/10309)** (`chore(skillforge): remove the orphaned SkillForge engine`): Large cleanup PR deleting a dead engine and its references, improving codebase health and reducing build time.

## 4. Community Hot Topics

The most active discussions are all centered on **deep architectural RFCs** that will shape ZeroClaw's future:

- **[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** (21 comments) — *RFC: Decouple memory lifecycle policy from storage backends.* This is the most commented-on issue and represents a fundamental architectural debate about separating "how" memory is stored from "how" it is governed (consolidation, cleanup). High engagement shows the community wants a clean, modular design.
- **[Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** (16 comments) — *RFC: Provenance and reply contract for agent-initiated turns.* After a revision, this complex topic (identity, concurrency, and reply lifecycles for internal agent actions) remains a hot topic for power users building complex autonomous workflows.
- **[Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** (15 comments) — *RFC: Granular sandbox policy.* This proposal to unify application-layer path checks with OS sandboxes (Bubblewrap/Landlock) is critical for security-conscious self-hosters and is drawing significant attention.
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** (14 comments) — *[Tracker]: Maintainer decision queue.* This is meta-discussion about the RFC process itself, indicating the community is actively trying to improve its own governance.

**Underlying needs:** These discussions highlight a community of experienced users and developers pushing for a **more robust, modular, and secure architecture** suitable for high-stakes, production deployments, rather than simple scripting. They value clear contracts over quick hacks.

## 5. Bugs & Stability

Several significant bugs were reported or updated today, with a heavy security focus:

**High Severity:**
- **[Issue #10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429)** (New) — *[Bug]: Deepgram/OpenAI transcription drop language hint.* Non-English voice notes are silently skipped, breaking core functionality for non-English users. No fix PR yet.
- **[Issue #10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427)** (New) — *ci: Advisory scan failed.* A yanked crate (`chacha20 0.10.0`) breaks CI, likely a quick fix with `cargo update`. An automated "bot" issue, but signals dependency hygiene needs attention.
- **[Issue #10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408)** — *[Bug]: Duplicate parallel runs.* A second message during an active turn starts a parallel agent run, causing duplicate work. A race-condition bug that affects core runtime reliability.
- **[Issue #10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409)** (New) — *fix(channels): secure temp file handling.* This PR-issue itself notes that temp files for media may have insecure default permissions (0o644), leaking potentially sensitive voice/photos to other users on shared systems.

**Medium Severity:**
- **[Issue #10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432)** (New) — *[Bug]: ElevenLabs TTS API key not marked sensitive.* Echoing a recently fixed issue for Google TTS ([#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175)), the API key can leak into logs.
- **[Issue #10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437)** (New) — *ZeroCode inserts mouse-wheel reports into composer.* A minor TUI nuisance bug where scroll events corrupt input.

**Previous High-Severity Bugs Now Closed:** The dangerous `skill-review fork` SIGSEGV ([#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)) and the `forbidden_paths` bypass ([#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)) were closed within the last 24h, confirming fixes have been integrated.

## 6. Feature Requests & Roadmap Signals

The new feature requests today point to users pushing ZeroClaw into more **proactive and integrated roles**:

- **[Issue #10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426)** — *[Feature]: Show user-facing agent progress in Telegram.* Users want to see "thinking..." or tool-call status in Telegram to avoid the "is it stalled?" feeling during long operations. This is a high-value UX improvement for channel-based interaction.
- **[Issue #10422](https://github.com/zeroclaw-labs/zeroclaw/issues/10422)** — *[Feature]: Run SOP as heartbeat.* A power-user request to eliminate the `HEARTBEAT.md` boilerplate by natively setting `heartbeat.sop = "<name>"`. This indicates the SOP (Standard Operating Procedure) framework is becoming a core workflow engine, and users want it as the default "brain" for scheduled tasks.
- **[Issue #10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)** — *[Feature]: Stream agent-loop tokens from POST /webhook (SSE).* This is a technical feature request from someone building a "Hosted Path A worker," highlighting demand for real-time, token-level streaming to build custom front-ends.
- **[Issue #10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336)** — *[Proposal]: AnySearch as a built-in search provider.* Along with the open PR ([#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356) for AnySearch and [#10402](https://github.com/zeroclaw-labs/zeroclaw/pull/10402) for Serply), the community is actively expanding provider integrations.

**Prediction:** The gateway/webhook streaming feature (SSE) and the native SOP-as-heartbeat are strong candidates for the next minor release, as they unlock powerful new workflows for developers and advanced users. The UI progress indicator is likely a hot feature for the v0.10.x cycle.

## 7. User Feedback Summary

- **Frustration with Channel UX:** The silence during long-running tasks in Telegram is a clear pain point. Users don't want to wonder if it's working or broken. They want **observability and progressive feedback**.
- **Desire for Simplicity via Policy:** A user asked for a native `heartbeat.sop` instead of a workaround, showing a preference for **explicit, declarative configuration** over "hacks."
- **Proactive Security from Community:** A user-generated bot submitted an issue/PR to fix insecure temp file permissions ([#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409)). This demonstrates a community that is **actively scanning for vulnerabilities** and contributing hardening patches proactively.
- **Growing Architecture Needs:** The high engagement on complex RFCs (memory, sandbox) shows that users are not just using ZeroClaw for simple chatbots. They have real deployments with needs for **strong isolation, governance, and lifecycle management** for long-running agents.

## 8. Backlog Watch

These are important items that need maintainer attention to avoid stalling:

- **[Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) — *Closed, but critical fix status unclear.** *While the issue is closed, there is no merged PR linked in the digest. Maintainers should verify a fix landed and is associated with a "fix" PR to prevent a regression.
- **[PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — `feat(providers): add native Hailo-Ollama support`** — This large feature PR is tagged `do-not-merge`. It's been open since July 17. It needs a final decision — either accept with changes or formally close to communicate its status to the contributor. It represents a significant hardware integration the community is waiting on.
- **[Issue #9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) — *RFC: define Web bundle/daemon compatibility for web_dist_dir.** *This has been waiting for maintainer review (`needs-maintainer-review`) for over two weeks now. It's a critical architectural contract for the web dashboard and is blocking related work.
- **[PR #10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) — `feat(sessions): add persistent session prompt attachments`** — A large, interesting feature PR marked `needs-author-action`. If the author addresses feedback, this could advance significantly, but it risks being abandoned if not attended to soon.

---

**Overall North Star:** ZeroClaw is a **vibrant and technically ambitious project** navigating the transition from a functional assistant to a hardened, production-grade agent runtime. The main health signal is positive, but the **zero-merge day and long review queues (e.g., #9975, #9109)** suggest maintainers need to prioritize triage and integration to keep the contributor community motivated.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*