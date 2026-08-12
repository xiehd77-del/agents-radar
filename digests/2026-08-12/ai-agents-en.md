# OpenClaw Ecosystem Digest 2026-08-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-12 02:04 UTC

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
**Date:** 2026-08-12

---

## 1. Today's Overview

OpenClaw is seeing a high level of activity with approximately 500 issues and 500 PRs updated in the last 24 hours. The project is addressing a significant backlog of long-standing reliability bugs, particularly around message delivery failures, session state corruption, and provider integration issues. While no new releases were published today, a heavy emphasis on merging fixes for message-loss and session-state critical bugs indicates a stabilization phase. The maintainer team is actively reviewing a substantial queue of "needs-maintainer-review" and "needs-product-decision" items, but the volume of these older issues suggests a need for a dedicated triage effort.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

Today's merged/closed PRs (226 total) demonstrate a strong push to improve reliability and developer experience. Key closures indicate progress on several critical fronts:

- **Gateway & Performance:** PR #122350 fixes a critical issue where opening the Control UI could consume an entire CPU core and delay health checks on large installations.
- **Core Runtime:** PR #122369 improves test reliability for the audit event writer, consolidating overlapping worker threads to reduce flakiness and runtime.
- **Channel Fixes:** PR #122334 fixes Windows-specific issues with launching npm-installed native session CLIs (Codex, Anthropic, etc.), addressing a significant compatibility problem.
- **UI/UX:** PR #122237 (closed) reduces visual noise in the slash-command menu, and PR #122316 (merged) gates model shortcuts behind search focus to prevent accidental model switches while typing.

These closures, along with a large number of other merged PRs, indicate active progress on frontend polish and backend stability.

---

## 4. Community Hot Topics

The most active discussions highlight persistent and high-impact reliability pain points.

**1. Silent Reply Failures with High Engagement**
- [Issue #121058](https://github.com/openclaw/openclaw/issues/121058) - *Silent reply failures still recurring* (69 comments, opened 08-09)
- [Issue #116201](https://github.com/openclaw/openclaw/issues/116201) - *Realtime voice work can retain unbounded provider state* (64 comments, P1, Diamond Lobster)
- [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) - *Text between tool calls leaks to messaging channels* (46 comments, P1, Diamond Lobster, Security)

**Analysis:** The top-priority discussion revolves around **message delivery and session state integrity**. Issue #121058 is a direct escalation stating a prior fix (#116277) failed, causing user frustration. Issue #25592 exposes a serious UX and security problem where internal agent processing text leaks to user-facing channels. There is an underlying need for a **fundamental overhaul of the session/turn lifecycle and message routing logic** rather than incremental patches.

---

## 5. Bugs & Stability

The project reported numerous stability issues today, with several classified as P1 with high severity ratings (Diamond Lobster). The top identified bugs include:

**Critical / High Severity:**
- [Issue #121675](https://github.com/openclaw/openclaw/issues/121675) - **Release blocking:** `2026.8.1-beta.1` published without companion plugins, causing an unrecoverable boot loop (P0, Crash Loop, Closed).
- [Issue #97744](https://github.com/openclaw/openclaw/issues/87744) - **Message loss:** Codex-backed Telegram turns repeatedly time out, failing to deliver final answers (P1, Platinum Hermit, 3 👍).
- [Issue #84516](https://github.com/openclaw/openclaw/issues/84516) - **Data corruption:** Long agent replies silently truncated at ~1000 characters without any error (P1, Silver Shellfish).
- [Issue #92460](https://github.com/openclaw/openclaw/issues/92460) - **Delivery failure:** Cron completion announcer drops explicit delivery channel (P1, Silver Shellfish, Closed).
- [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) - **Resource leak:** Unreaped hook/tool child processes cause zombie accumulation and runtime degradation (P1, Gold Shrimp).

**Notable Regressions:**
- [Issue #92201](https://github.com/openclaw/openclaw/issues/92201) - *Freshly streamed thinking signatures intermittently invalid on replay* (Closed, state fixed).
- [Issue #121058](https://github.com/openclaw/openclaw/issues/121058) - *Silent reply failures* recur after a prior fix, indicating an incomplete solution.

Only a few of these have linked open PRs, indicating many critical bugs remain unaddressed in the main codebase.

---

## 6. Feature Requests & Roadmap Signals

Several feature requests stand out due to high engagement or alignment with the project's long-term goals.

**High Priority / Likely in Next Release:**
- [Issue #42745](https://github.com/openclaw/openclaw/issues/42475) - **Per-agent cost budget enforcement** at the gateway level (21 comments, P2).
- [Issue #68596](https://github.com/openclaw/openclaw/issues/68596) - **Configurable streaming watchdog timeout** to handle long-thinking models better (15 comments, P2, 8 👍).
- [Issue #42840](https://github.com/openclaw/openclaw/issues/42840) - **MathJax/LaTeX support** in the Control UI (8 comments, 10 👍, P3).

**Interesting Signals:**
- [Issue #72741](https://github.com/openclaw/openclaw/issues/72741) - **Standard interface for external security/guardrail checks** indicates growing demand for enterprise-grade control.
- [Issue #13700](https://github.com/openclaw/openclaw/issues/13700) - **Session snapshots** for save/load context, a highly requested power-user feature.

**Prediction:** The high engagement and clear value proposition of per-agent cost budgets suggest this feature is a strong candidate for the next minor release, along with the configurable streaming watchdog.

---

## 7. User Feedback Summary

The community is reporting a mix of satisfaction with core features and frustration with persistent reliability issues.

- **Pain Point:** The most significant dissatisfaction stems from **silent failures** across multiple channels (Slack, Telegram, Fediverse), where messages are lost or replies are truncated without error. Users express difficulty debugging these issues, as reported in [#121058](https://github.com/openclaw/openclaw/issues/121058) and [#84516](https://github.com/openclaw/openclaw/issues/84516).
- **Frustration:** **Session state corruption** after upgrades or model switches is a recurring complaint, often leading to unresponsive sessions or repeated tasks (e.g., #47975, #58957).
- **Positive Feedback:** Users value the platform's extensibility, as seen in requests for new features like session snapshots (#13700) and media group buffering (#39343). The 10 thumbs-up on the LaTeX support request indicates a real need for better scientific communication in the UI.

Overall, users see enormous potential in the platform but are currently **held back by reliability concerns**.

---

## 8. Backlog Watch

A significant number of high-priority issues are awaiting maintainer review or product decisions, including several tagged as `needs-product-decision`.

- [Issue #116201](https://github.com/openclaw/openclaw/issues/116201) - **Realtime voice state leak** (P1, needs-product-decision, 64 comments) - This has been open since July 30th and is a major point of discussion.
- [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) - **Text between tool calls leaks** (P1, needs-product-decision, Security, 46 comments) - Open since February; a security concern requiring a product-level decision on UX vs. transparency.
- [Issue #14785](https://github.com/openclaw/openclaw/issues/14785) - **Tool schema token overhead** reduction (P2, needs-product-decision, 9 comments) - A key performance optimization that has been pending since February.
- [Issue #87744](https://github.com/openclaw/openclaw/issues/87744) - **Codex Telegram timeout** (P1, needs-live-repro, 17 comments) - A message-loss bug that the team has been unable to reproduce.
- [Issue #71689](https://github.com/openclaw/openclaw/issues/71689) - **Gateway startup failure due to SQLite corruption** (P1, source-repro, 6 comments) - A critical data-loss bug pending review.

These long-standing issues represent a considerable amount of technical debt and product strategy questions. A focused effort from maintainers is essential to resolve these and unblock progress on other fronts.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem

**Date:** 2026-08-12

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in an intensive stabilization and architectural hardening phase. Across the nine active projects tracked, the dominant themes are message delivery reliability, session state integrity, and context window management—indicating a maturing ecosystem where foundational reliability is now the primary competitive battleground. Concurrently, projects are investing heavily in security hardening (sandboxing, SSRF protection, permission models) and enterprise-readiness features (SSO, multi-tenancy, audit trails). Platform differentiation is increasingly driven by architectural choices: plugin/template systems (NanoClaw, NanoBot), protocol interoperability (ZeroClaw's OpenAI Chat Completions compatibility, IronClaw's ACP adoption), and multi-channel orchestration depth (OpenClaw, Hermes Agent). The ecosystem shows robust community engagement, with several projects shipping multiple PRs daily, though maintainer bandwidth constraints are visible across nearly all projects, with stale PR queues and review bottlenecks emerging as common friction points.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Notes |
|---------|-------------|------------|----------------|--------------|-------|
| **OpenClaw** | ~500 | ~500 | None (stabilization phase) | **7/10** | High volume, active triage, but critical P1s unresolved; backlog of needs-maintainer-review. |
| **NanoBot** | 6 (4 closed) | 140 (119 merged/closed) | None | **8/10** | Excellent throughput, responsive maintainers; security advisory open. |
| **Hermes Agent** | 50 | 50 (5 merged/closed) | None (0.20.0 from Aug 3) | **6/10** | High community velocity, but Windows desktop regression cluster severe; 4+ P1s open. |
| **PicoClaw** | 3 | 6 (0 merged) | None (v0.3.1 from July) | **5/10** | Low throughput; all 6 PRs open, 5 stale; maintainer bottleneck evident. |
| **NanoClaw** | 1 | 8 (3 merged) | None (release candidate forming) | **8/10** | High velocity, core-team driven; silent message-drop bug open. |
| **IronClaw** | 22 | 50 (25 merged/closed) | None (v1.3.0 milestone) | **8/10** | Strong organized throughput; "Reborn" architecture epic dominates. |
| **LobsterAI** | — | 10 (7 merged/closed) | **2026.8.11 released** (Aug 11) | **7/10** | Healthy cadence; released patch with Cowork UX improvements. |
| **Moltis** | 0 | 1 (0 merged) | None | **5/10** | Quiet consolidation phase; single pending PR (#1190). |
| **CoPaw** | 22 | 48 (25 merged/closed) | **v2.1.0-beta.3** (Aug 11) | **7/10** | Busy development cycle; 23 open PRs indicate review bottleneck. |
| **ZeroClaw** | 40 | 49 (1 merged) | None (v0.9.0 planned) | **6/10** | Intensive RFC-driven design phase; heavy needs-author-action labels. |

*Note: All counts reflect last-24-hour updates. Health score is a composite of throughput, bug severity, maintainer responsiveness, and backlog health.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

- **Scale & Community Size:** OpenClaw is the clear ecosystem leader by volume—approximately 500 issues and 500 PRs updated in 24 hours dwarfs all competitors (next closest: Hermes at 50/50). This scale indicates the largest user base and contributor pool in the ecosystem.
- **Reliability Focus at Scale:** The project is actively addressing critical reliability bugs (message loss, session corruption, silent failures) that are the same class of issues smaller projects are just beginning to encounter. Its maturity in triaging these (dedicated labels like `needs-maintainer-review`, `needs-product-decision`) reflects a governance structure suited for its size.
- **Multi-Channel Depth:** OpenClaw supports the broadest channel ecosystem (Slack, Telegram, Fediverse, etc.) and has the most detailed per-channel bug triage, indicating production-grade multi-platform usage.
- **Core Runtime Architecture:** The focus on gateway performance (PR #122350 addressing CPU spin on Control UI) suggests a deployed scale that smaller projects haven't reached.

### Technical Approach Differences

- **Gateway-Centric:** OpenClaw's architecture is gateway-first, emphasizing robust message routing, session state integrity, and channel abstraction over agent orchestration depth (contrast with IronClaw's kernel-model ambitions and NanoBot's agent-loop focus).
- **Legacy System Size:** At ~500 issues, OpenClaw carries significantly more technical debt than smaller projects like NanoClaw (1 issue) or Moltis (0). Its architecture must handle backward compatibility at a scale none of its peers face.

### Community Size Comparison

| Project | Approximate Activity Ratio (vs. OpenClaw) |
|---------|-------------------------------------------|
| OpenClaw | 1.0x (baseline) |
| IronClaw / CoPaw | ~0.1x |
| Hermes / ZeroClaw / NanoBot | ~0.1–0.15x |
| PicoClaw / NanoClaw / LobsterAI / Moltis | <0.02x |

**Bottom Line:** OpenClaw is the ecosystem's largest and most complex project, with the correspondingly largest community expectations. Its primary competitive risk is reliability fatigue—users are actively frustrated by silent failures (Issue #121058), which is the same failure mode NanoClaw users are just beginning to report (#3226). If OpenClaw resolves its reliability backlog, its scale advantage is formidable; if not, disaffected users may migrate to leaner alternatives.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging independently across multiple projects, indicating fundamental ecosystem needs:

| Focus Area | Projects | Specific Need(s) |
|------------|----------|------------------|
| **Message/Session Reliability** | OpenClaw, NanoClaw, Hermes, CoPaw | Silent message drops, session state corruption, post-restart visibility regressions. **All** projects report silent failure as the #1 user pain point. |
| **Context Window / Token Cost Reduction** | Hermes, ZeroClaw, OpenClaw | Lazy tool-schema loading (Hermes #6839: 18 👍, 3.5–5k token overhead/call), context compaction ratios (ZeroClaw #9535), tool schema token overhead (OpenClaw #14785). |
| **Security & Permission Granularity** | ZeroClaw, NanoClaw, OpenClaw, CoPaw | Per-command allow/ask/deny policies (ZeroClaw #7155), sandbox isolation per session (NanoBot #5283), SSRF protection (ZeroClaw #8713), plugin permission gaps (CoPaw #6916), guardrail standard interfaces (OpenClaw #72741). |
| **Multi-Agent Orchestration Depth** | IronClaw, NanoBot, PicoClaw, CoPaw | Pluggable agent loops (IronClaw #7482), subagent model presets (NanoBot #4291), routed-agent context management (PicoClaw #3301), inter-agent session deduplication (CoPaw #6918). |
| **Streaming/Long-Running Model Support** | OpenClaw, LobsterAI, Hermes | Configurable watchdog timeouts for long-thinking models (OpenClaw #68596), per-model thinking levels (LobsterAI #2457), smart-approval no-timeout issue (Hermes #82846). |
| **Cross-Platform Desktop Reliability** | Hermes, LobsterAI, CoPaw, PicoClaw | Windows update/restart kills gateways (Hermes #83683), Apple Silicon env missing in launchd (NanoClaw #2134), desktop crashes (CoPaw #6919). |
| **OpenAI Protocol Compatibility** | ZeroClaw, OpenClaw, NanoBot | Chat Completions profile (ZeroClaw #8603), OpenRouter server tools (NanoBot #5333), gateway routing providers. |
| **Provider Flexibility** | NanoBot, NanoClaw, CoPaw, OpenClaw | New gateway providers, remote MCP servers (NanoClaw #3092), provider capability caching (CoPaw #6723), MCP tool timeouts (CoPaw #6874). |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture |
|---------|---------------|--------------|----------------------|
| **OpenClaw** | Scale & reliability across multi-channel deployments | Power users, teams, self-hosting | Gateway-centric; largest channel ecosystem; complex session state management. |
| **Hermes Agent** | Desktop-first agent with enterprise ambitions | Desktop users (Windows/macOS), enterprise POCs | Desktop-native (Electron-like) with supervised gateway; god-file refactoring toward sharding; sessions-durability changes active. |
| **ZeroClaw** | Secure, RFC-driven infrastructure | Security-conscious, enterprise, production users | RFC-driven design; emphasis on pluggable auth (OIDC), SSRF gates, sandbox policies; OpenAI protocol compatibility targeted for v0.9.0. |
| **IronClaw** | Kernel-based agent orchestration | Developers building agent apps | "Reborn" architecture: pluggable loops, ACP support, memory reliability (mem0/native providers), context eviction fixes. |
| **CoPaw (QwenPaw)** | Consumer/desktop agent with rich UI | Mainstream users, Chinese-speaking users | WebUI-plus-desktop; enhanced memory/compression; marketplace consolidation; active v2.1.0 beta cycle. |
| **NanoBot** | Lightweight, high-throughput agent runtime | Developers wanting embeddable agent | Provider-gateway abstraction (150+ models); per-session sandboxing; high-velocity bug-fix culture. |
| **NanoClaw** | Lean agent with plugin/template system | Power users, macOS devs | Agent-templates-as-plugins migration (breaking v1.0.0); remote MCP support across all providers; small surface area. |
| **LobsterAI** | Desktop Cowork productivity | Desktop power users, automation-heavy | Electron-based; Cowork multi-agent focus; per-model control granularity; window attention features (taskbar/dock). |
| **PicoClaw** | Multi-agent routed channels | Teams using Discord/Telegram with complex routing | Dispatch-rules architecture; multi-channel routing; context management gaps in routed setups. |
| **Moltis** | Local-first data integration | Privacy-sensitive users | CalDAV connectors, bounded local search; connector persistence; read-only agent tools. |

*Note: This row was included per instruction, though the section is intended for the top projects; Moltis and PicoClaw are smaller entrants.*

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, High Responsiveness)

- **NanoBot** (119 merged/closed PRs/day) — Exceptional throughput; responsive maintainers; quickly addresses security issues. **Health: Excellent.**
- **IronClaw** (25 merged/closed PRs/day) — Well-organized development; clear roadmap ("Reborn"); strong architecture direction. **Health: Excellent.**
- **NanoClaw** (3 merged/day, 8 active) — Core-team-driven, focused on feature work (remote MCP, template migration). **Health: Excellent.**
- **CoPaw** (25 merged/closed PRs/day, v2.1.0-beta.3) — Busy, feature-rich cycle; but 23 open PRs signal review bottleneck. **Health: Good.**

### Tier 2: Stabilizing / Consolidating

- **OpenClaw** (226 merged/closed PRs) — High activity but with significant reliability backlog; ~500 open issues needing triage. Transitioning from feature velocity to stability focus. **Health: Fair-Good.**
- **LobsterAI** (7 merged/closed) — Healthy cadence; patch release shipped; responsive to user pain points. **Health: Good.**
- **Hermes Agent** (5 merged/closed, 45 open) — Active community but with a **concerning regression cluster** (Windows desktop + gateway lifecycle). Mixed maintainer responsiveness (fast on P1s, slow on P2/P3s). **Health: Strained.**

### Tier 3: Review-Bottlenecked

- **ZeroClaw** (1 merged/closed, 49 open) — Design-heavy, RFC-driven; heavy needs-author-action labels; risk of process drag. **Health: Fair.**
- **PicoClaw** (0 merged/closed, 6 open, 5 stale) — The **worst throughput-to-demand ratio**; active community but maintainers unable to keep pace; stale-PR decay is a real risk to contributor retention. **Health: Struggling.**
- **Moltis** (0 merged/closed, 1 open) — Quiet; likely maintainer bandwidth limited to review of the single pending PR. **Health: Stable but dormant.**

---

## 7. Trend Signals for AI Agent Developers

1. **Reliability is the New Feature.** The #1 user complaint across the ecosystem is **silent failures**—messages dropped, replies truncated, agents "ignoring" users without error. Users would trade new features for predictable delivery. For developers: build with **explicit error surfacing** and **auditable delivery** as first-class design requirements.

2. **Context Management is a Cost Problem.** Long-context sessions are driving user costs up (3.5–5k token/call overhead on tool schemas alone). Lazy loading, per-model thinking levels, and context compaction ratios are all in-flight responses. Expect **tool schema optimization** and **token-precognition budgets** to be differentiating features in the next 6 months.

3. **Security is Going Mainstream, Not Just Enterprise.** Independent projects are adding sandboxing (NanoBot, NanoClaw), command-level allow/ask/deny policies (ZeroClaw), SSRF gates (ZeroClaw), and plugin permission warnings (CoPaw). The market has moved beyond "is the agent useful?" to "what can the agent do to my system?"—**security-aware development is table stakes.**

4. **OpenAI Protocol Compatibility is Becoming a Baseline.** ZeroClaw's Chat Completions profile (18 comments) and NanoBot's OpenRouter gateway support signal that users want agents to be **drop-in replacements** for LLM API endpoints. Developers should design agent APIs with SDK-compatible surface areas.

5. **Multi-Agent Orchestration is Emerging But Weak.** Several projects are experimenting: subagent model presets (NanoBot), routed-agent channels (PicoClaw), inter-agent deduplication (CoPaw), pluggable loops (IronClaw). But the ecosystem is still **pre-standardization**; expect convergence on shared patterns (ACP, agent-to-agent messaging) within 2–3 quarters.

6. **Desktop Platform Reliability is Underserved.** Hermes' Windows regression cluster (5+ issues) and NanoClaw's Apple Silicon env gap (stale for 106 days) highlight that **desktop packaging and lifecycle management lag agent-loop innovation**. For developers building desktop agents, **update-path failure** is the most damaging bug class—it breaks trust irreparably.

7. **Maintainer Bandwidth is the Universal Constraint.** Across every project, stale PRs and unanswered P2/P3 issues—often with clear fixes—are accumulating. The ecosystem needs **automated triage tools**, **structured contribution pathways**, and **maintainer decision queues** (ZeroClaw's #8692 tracker is a model to copy) more than it needs new agent features.

---

**Prepared for:** Technical decision-makers and AI agent developers.
**Data window:** 2026-08-11 → 2026-08-12 (UTC). All statistics from project GitHub activity unless otherwise noted.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date: 2026-08-12**

---

## 1. Today's Overview

NanoBot shows strong, sustained development activity with **140 PRs** updated in the last 24 hours — a notably high volume. Of these, **119 were merged or closed** and **21 remain open**, indicating a healthy throughput of contributions. Issue activity is moderate (6 total) with 4 issues resolved and 2 still open. The project did **not publish a new release** today. The most pressing concerns are **two security advisories** (one closed, one open) and a cluster of **agent-loop and repetition bugs** in sustained-goal scenarios, with multiple fix PRs already in flight. Overall, the project is in a **high-velocity, responsive maintenance phase** with active community contribution.

---

## 2. Releases

**No new releases** were published in the last 24 hours. This section is omitted.

---

## 3. Project Progress

The 24-hour window saw 119 merged/closed PRs. While the majority of the merged PRs are older contributions being closed for conflict reasons (likely superseded by newer code or marked as stale), a number of meaningful feature PRs remain open and under development:

**Notable Open PRs Advancing Features:**
- **[#5342 — feat(webui): redesign apps discovery](https://github.com/HKUDS/nanobot/pull/5342)** — Rebuilds the Apps UI around Discover/Installed/All categories, adds curated "Featured" batches backed by the nanobot.wiki registry with offline fallback, and improves third-party logo handling. A significant WebUI UX upgrade.
- **[#5328 — feat(providers): add OrcaRouter as a named gateway provider](https://github.com/HKUDS/nanobot/pull/5328)** — Adds a new OpenAI-compatible routing gateway provider supporting 150+ models with a single API key.
- **[#5283 — feat(workspace): per-session sandbox isolation for non-WebUI channels](https://github.com/HKUDS/nanobot/pull/5283)** — Opt-in sandbox mode providing each session its own isolated filesystem, a significant security improvement for agent file operations.
- **[#4291 — feat(spawn): allow subagents to use configurable model presets](https://github.com/HKUDS/nanobot/pull/4291)** — Enables subagents to run with different models via named presets, improving flexibility for hierarchical agent orchestration.

**Closed Today (Examples):**
- **#5333 (Closed)** — Feature request for OpenRouter Server Tools support, closed, likely without implementation at this time.

---

## 4. Community Hot Topics

1. **[Issue #5327 — Repeated message bug (10 comments)](https://github.com/HKUDS/nanobot/issues/5327)** — *Closed* — Reports that Nanobot randomly repeats phrases like "Good points, let me investigate" during reasoning. This was closed, suggesting a fix was identified or the behavior was explained/accepted.

2. **[PR #2181 — Add Xiaomi MiMo provider support](https://github.com/HKUDS/nanobot/pull/2181)** — Closed as conflict; a long-standing feature PR (opened 2026-03-17) was merged or superseded.

3. **[Issue #5256 — `/goal` message produces dozens of replies](https://github.com/HKUDS/nanobot/issues/5256)** — *Open* — A single `/goal` command triggering dozens of near-identical replies while the agent awaits user input. A highly visible quality-of-life bug for sustained-goal usage.

4. **[Issue #5306 — `exec.allowPatterns` shell-chain bypass (Security)](https://github.com/HKUDS/nanobot/issues/5306)** — *Open* — A security flaw allowing unintended command execution via shell chains, even when `allowPatterns` restrictions are configured.

**Underlying Needs:** The hot topics reveal users are pushing Nanobot into more complex, multi-step, and extended-use workflows (sustained goals, subagents), and are encountering reliability and security edge cases. There is also strong interest in expanding supported provider routes (e.g., [OpenRouter Server Tools in #5333](https://github.com/HKUDS/nanobot/issues/5333)).

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue/PR | Status | Notes |
| :--- | :--- | :--- | :--- |
| **High** | [#5306 — Security: `exec.allowPatterns` bypass](https://github.com/HKUDS/nanobot/issues/5306) | **Open** | Unintended command execution possible despite restrictions; a security fix is critical. |
| **Medium** | [#5256 — `/goal` repeated-reply loop](https://github.com/HKUDS/nanobot/issues/5256) | **Open** | Dozens of duplicate replies; fix PR **[#5257](https://github.com/HKUDS/nanobot/pull/5257)** exists and is open. |
| **Medium** | [#5327 — Random message repetition during reasoning](https://github.com/HKUDS/nanobot/issues/5327) | **Closed** | Resolved; issue closed as of today. |
| **Low** | #4784, #4783 — Provider API key leaks in `os.environ` | **Closed** | Both resolved/closed, indicating the security leak issue has been addressed. |

**Fixes in Flight:**
- **PR #5346** — `fix(exec): terminate one-shot process trees on cleanup` — Addresses orphaned child processes after command cancellation or timeout.
- **PR #5344** — `fix(agent): warn instead of silently spiraling on repeated identical tool calls` — Adds loop detection for repeated identical tool calls, directly improving stuck-agent scenarios.
- **PR #5341** — `fix(skills): make weather workflow Windows-safe`.

---

## 6. Feature Requests & Roadmap Signals

- **Broader Provider Support:** Requests for new gateway providers (OrcaRouter via [#5328](https://github.com/HKUDS/nanobot/pull/5328)) and richer routing features (OpenRouter Server Tools via [#5333](https://github.com/HKUDS/nanobot/issues/5333)) signal a roadmap emphasis on provider flexibility.
- **Advanced Workspace Sandboxing:** The proposed `per_session_sandbox` mode in **[#5283](https://github.com/HKUDS/nanobot/pull/5283)** could become a headline security feature in the next release.
- **Agent Orchestration Depth:** Subagent model presets ([#4291](https://github.com/HKUDS/nanobot/pull/4291)) suggest the roadmap is expanding toward more sophisticated multi-agent configurations.
- **WebUI Redesign:** The redesigned Apps discovery in **[#5342](https://github.com/HKUDS/nanobot/pull/5342)** points to a stronger focus on the end-user experience for the WebUI.

**Predictions:** Given the presence of open PRs and feature requests, the next minor version may include: the WebUI redesign, per-session sandboxing, and new provider gateway support.

---

## 7. User Feedback Summary

**Pain Points:**
- **Looping/Stuck Agents:** Users experience core reliability issues — repeated messages (#5327), sustained-goal reply floods (#5256), and silent tool-call spirals (#5344). These directly conflict with the promise of autonomous agent execution.
- **Windows Compatibility:** PR #5341 highlights that the weather skill's use of bare `curl` breaks on PowerShell, pointing to a broader need for cross-platform skill reliability.
- **Environment/Key Management:** The closed security issues on API key leaks (#4784, #4783) indicate sensitive-environment configuration is a recurring concern.

**Satisfaction:**
- High feature demand (e.g., OpenRouter server tools) and a large volume of contributor PRs suggest a deeply engaged community.
- The rapid closing of issues and presence of targeted fix PRs indicate maintainers are responsive and the project is actively improving.

---

## 8. Backlog Watch

The following items have remained open for a significant time and may need maintainer attention:

1. **[Issue #5256 — `/goal` message loop (Open, 7 days)](https://github.com/HKUDS/nanobot/issues/5256)** — A high-visibility bug affecting a headline feature (sustained goals), with fix PR #5257 open for a week.

2. **[PR #4145 — Weather Skill fix (Open, 72 days)](https://github.com/HKUDS/nanobot/pull/4145)** — A combined contribution to add a Weather Skill; has been open since June 1 without merger, likely due to overlaps with other skill-related work.

3. **Long-Standing Provider/Feature PRs** — A cluster of PRs (e.g., #2181, #1383, #1367, #1321) from February/March 2026 were closed today as conflicts. While this clears the backlog, the data suggests a pattern where contributions are not always merged cleanly and may require significant maintainer effort to integrate or reject promptly.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-12

---

## 1. Today's Overview

Hermes Agent is running at **high community velocity** with 50 issues and 50 PRs updated in the last 24 hours, nearly all remaining open and actively discussed. The project is in a **stability hardening phase**: the majority of today's activity clusters around **Windows desktop update/restart regressions**, **gateway session lifecycle issues**, and **god-file refactoring** — an architectural initiative with one epic (#78647, 67 comments) and a follow-on sharding issue (#78642). No formal release landed today, but the dense PR pipeline (45 open, 5 merged/closed) shows sustained contributor engagement. The maintainer team appears to be reviewing and merging at a healthy rate, though several P1 regressions remain open across desktop and gateway paths. Notable new contributor breadth is visible in the 10+ distinct authors touching issues and PRs today.

---

## 2. Releases

**No new releases published on 2026-08-12.** The latest known version remains **Hermes 0.20.0** (2026-08-03), which is referenced across several bug reports as the version where Windows desktop regressions were introduced. Users and maintainers should track the next patch/minor release closely, as numerous P1 issues from this week are awaiting merge.

---

## 3. Project Progress

**Merged/Closed PRs (5 total):**

- **#84019** (closed) — `fix(video): stop retries after terminal analysis failure` by majiayu000. Prevents double-billing and repeated failure loops on video analysis; latches terminal failures per run. *(Area: video/vision, Docker)*
- **#62058** (closed) — `fix(web): rotate PTY attach token on session switch` by mario841859784. Fixes empty terminal view in Dashboard when switching sessions via sidebar; root cause was a persisted attach token in localStorage. *(Area: dashboard, sessions)*
- **#84089** (closed, duplicate) — Kanban `show` closed-database bug, consolidated into #83448.

**Notable Open PRs advancing core fixes:**

- **#83720** (P1) — `fix(gateway): never reap supervised gateway + relaunch on desktop (re)start` targets #83683 (Windows desktop restart kills gateway). This is the **single most important pending fix** for the desktop user base.
- **#84198** — `fix(gateway): make post-reset sessions visible in session lists` targets #84109, a regression from the 2026-08-09 session-durability change.
- **#84199** — `fix(cli): honour model_aliases api_key, stop cross-provider key leak` resolves a security-confidentiality issue where alias keys were never read and credentials leaked.
- **#84203** — `fix(security): close two lifecycle guard bypasses and one false positive` — defensive hardening of the shell-script lifecycle guard.
- **#84201** — `fix(terminal): prevent delegated child marker snapshot leaks` stops false `Kanban CLI` rejection for desktop commands.

**Feature work in flight:**

- **#84202** — New OneBot 11 platform adapter (NapCat/Lagrange/LLOneBot) for QQ via local bridges. *(P3, open)*
- **#84196** — Scoped owner command ingress for WhatsApp, default-off, self-chat mode. *(P3, open)*
- **#84192** — Rich plugin OS notifications with deeplink activation (extends `ctx.os`). *(P3, needs-decision)*
- **#84197** — Matrix cross-signing "verified" logging fix, rebased from #71544. *(P3, open)*

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | Signal |
|------|----------|----------|--------|
| 1 | **[#78647 — God-file sharding epic (refactor)](https://github.com/NousResearch/hermes-agent/issues/78647)** | 67 | Low 👍 (0) but heavy discussion — architectural policy, not popularity-driven. |
| 2 | **[#6839 — Lazy Tool Schema Loading](https://github.com/NousResearch/hermes-agent/issues/6839)** | 38 | **18 👍** — high genuine demand for token-cost reduction (3.5–5k tokens/call overhead). |
| 3 | **[#34352 — Multi-Tenant Hermes](https://github.com/NousResearch/hermes-agent/issues/34352)** | 25 | 3 👍 — production user running a custom fork with a real fix for months. |
| 4 | **[#67442 — Cross-process turn serialization](https://github.com/NousResearch/hermes-agent/issues/67442)** | 14 | Follow-up to already-landed in-process work; edge case remains. |
| 5 | **[#66616 — Skills index stale (bot)](https://github.com/NousResearch/hermes-agent/issues/66616)** | 13 | Automated freshness probe reports 29.8h-old index vs 26h limit — DevOps concern. |

**Underlying needs:**
- **#78647 / #78642**: The community strongly supports the "shard all god-files, never revert" policy. Discussion is likely about methodology, borders, and migration risk — not whether to do it.
- **#6839**: Tool-schema token overhead is a **cost and latency pain point** for both local-model users and API users. The two-pass injection proposal has real design merit and strong community support.
- **#34352**: Multi-tenant isolation is an **enterprise-grade gap** — memory operations bypassing hooks makes tenant isolation impossible without a fork. This is a roadmap-significant feature request.

---

## 5. Bugs & Stability

### P1 (Critical — offline/message delivery, logged today or regressed this week)

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| **#83683** | Windows Desktop restart kills live gateway and never relaunches (WeChat/QQ/Telegram silent). Regression from 0.20.0. | ✅ **#83720** (open, no comments — needs merge) |
| **#84109** | Post-reset sessions invisible in all session lists — regression from d2a4d373eb (08-09). | ✅ **#84198** (open) |
| **#84200** | macOS: Desktop startup SIGTERMs launchd-managed gateway after every update. New today. | ❌ No fix PR yet |
| **#84185** | Windows: gateway cold-started after `hermes update` dies silently (no logs, no PID, no exit record). New today. | ❌ No fix PR yet |
| **#83562** | Windows Desktop update: backend works manually but Desktop says `Hermes backend exited (0)`. | ❌ No fix PR yet |

### P2 (Moderate — degraded function, silent failure)

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| **#73779** | Feishu multiplex: lark_oapi WebSocket loop dies with "Future attached to a different loop"; gateway goes silently deaf. | ❌ |
| **#83213** | Background process completion notifications misrouted to wrong session after `/new`. | ❌ |
| **#83427** | `browser_exec` crash: pydantic_core ModuleNotFoundError when PYTHONPATH points at Hermes venv (desktop). | ❌ |
| **#83448** | Text-mode `kanban show` queries task graph after DB closed → `sqlite3.ProgrammingError`. (JSON works.) | ✅ #83645 (guard improvement) but not the same fix |
| **#84102** | Local TTS providers write Ogg/Vorbis into `.ogg` — platform voice bubbles silently degrade. | ❌ |
| **#84171** | Webhook `--deliver telegram/all` silently ignored — only `origin` works. | ❌ |
| **#81410** | Nous OAuth refresh returns `invalid_grant` after event-loop stall (no race). | ❌ |

### P3 (Minor / edge)

- **#64034** (new today): NeuTTS missing from `hermes setup` provider list. *(duplicate)*
- **#80149** (updated): Desktop replies not visible after switching sessions while agent is running.
- **#82846** (updated): Smart-approval auxiliary LLM call has **no timeout** — stalled provider wedges session indefinitely. **This deserves elevation — P2 at least.**
- **#68760 / #82186 / #62792** (updated): Windows file-lock / update-permission issues — cluster of correlated P2/P3 desktop update blockers.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Community Signal | Likelihood for Next Release |
|---------|----------|------------------|-----------------------------|
| **Lazy Tool Schema Loading (two-pass injection)** | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | 38 comments, 18 👍, P2, needs-decision | **High** — clear cost win, strong support, no design blocker visible. |
| **OneBot 11 QQ adapter** | [#84202](https://github.com/NousResearch/hermes-agent/pull/84202) | Open PR, P3, new | **Medium** — functional, but platform adapters tend to merge rapidly if reviewer bandwidth allows. |
| **Antigravity (Google) OAuth provider** | [#83244](https://github.com/NousResearch/hermes-agent/issues/83244) | P3, needs-decision, 2 comments | **Medium** — Google-backed LLM access is strategically useful. |
| **Multi-tenant Hermes** | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | P3, needs-decision, 25 comments | **Low-to-Medium** — enterprise-grade, but architectural and invasive; likely needs a maintainer champion. |
| **Rich plugin notifications w/ deeplinks** | [#84192](https://github.com/NousResearch/hermes-agent/pull/84192) | P3, needs-decision | **Medium** — practical UX win, references #78685 precedent. |
| **Scoped WhatsApp owner commands** | [#84196](https://github.com/NousResearch/hermes-agent/pull/84196) | P3, default-off | **Medium** — safe default, clean scope. |

---

## 7. User Feedback Summary

**Pain points dominating today's feedback:**

1. **Windows desktop update/restart reliability** — Most voluminous pain cluster (5+ issues). Users describe **silent gateway death** (WeChat/QQ/Telegram go offline), **update-button PermissionErrors** (WinError 5), `hermes.exe` locks (WinError 32), and **backend "exited (0)"** reports despite manual start working. Root causes appear correlated: Hermes-managed Node, venv `.pyd` locks, and the new supervised-gateway reaper. **This is the #1 user-satisfaction risk.**

2. **Session-visibility regressions** (post-reset invisibility, misrouted notifications, invisible replies after switching tabs) — A regression cluster from the 08-09 session-durability change. Users are actively testing boundary cases.

3. **Token-cost on tool schemas** — `#6839` user (jarviszomine) quantifies 3.5–5k tokens/call overhead; local-model users feel it most. Strong 👍-to-comment ratio indicates real demand, not noise.

4. **Configuration friction** — NeuTTS missing from setup, webhook `telegram/all` silently ignored, model_aliases key leak: all point at "configuration silently doesn't do what the docs say."

**Satisfaction signals:**
- New platform adapters (OneBot, WhatsApp scoped commands) suggest an active developer community building on Hermes' plugin system.
- The volume and speed of bug reports + fix PRs (e.g., #83720 within a day of #83683) show a responsive maintainer team and engaged contributors.

---

## 8. Backlog Watch

These items need maintainer eyes — either a decision, a rebase, or a triage:

| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| **[#56467 — Homebrew/Linuxbrew bin dirs in service PATH](https://github.com/NousResearch/hermes-agent/pull/56467)** | 42 days (07-01), updated today | Open, P2, sweeper:blast-moderate | Cron scripts can't resolve `gh`, `jq`, `ffmpeg`; no comments on PR. Practical user-facing fix, stale. |
| **[#56833 — Soften MCP circuit-breaker error messages](https://github.com/NousResearch/hermes-agent/pull/56833)** | 41 days (07-02), updated today | Open, P3 | Addresses model over-adherence to `<untrusted_tool_result>` — a **safety-adjacent** improvement. No maintainer comment. |
| **[#68908 — Holographic memory hrr_dim drift](https://github.com/NousResearch/hermes-agent/pull/68908)** | 22 days (07-21), updated today | Open, P3, blast-contained | Crashes search/probe/reason when config drifts across sessions; clean fix, stuck in review. |
| **[#69076 — Windows: assign spawned shells to Job Object](https://github.com/NousResearch/hermes-agent/pull/69076)** | 21 days (07-22), updated today | Open, P2, blast-moderate | Orphaned `bash.exe`/`grep.exe` leaks (one 8-CPU-hour leak) after parent exit. Windows-specific but severe for affected users. |
| **[#68948 — Retire compound-background rewriter](https://github.com/NousResearch/hermes-agent/pull/68948)** | 22 days (07-21), updated today | Open, P2, Windows | Extends #71008 to Windows; originally for worker deadlock (now closed via #71008). Needs final assessment. |
| **[#72671 — Gateway background cleanup fixture](https://github.com/NousResearch/hermes-agent/pull/72671)** | 16 days (07-27), updated today | Open, **MERGEABLE / BLOCKED**, no checks | Test-only fix, but GitHub state shows blocked with no reported checks — likely a CI config issue, not code. |
| **[#83877 — Windows Alt+Tab zoom drop](https://github.com/NousResearch/hermes-agent/pull/83877)** | 1 day, updated today | Open, P3, duplicate tag | Marked `type/duplicate` but has a distinct root-cause (focus event not listened to). Needs triage: merge or close with pointer. |

**Long-unanswered Issues:**
- **#29590** (82 days old, P2) — Hardcoded `max_tokens: 2000` + verbose prompt in `vision_tools.py` causes severe latency for reasoning models. Updated today but no maintainer response visible.
- **#57540** (40 days old, P3) — Desktop leaks text-fence language into rendered prose. 4 comments, 2 👍, no maintainer reply.

---

## Health Assessment (Summary)

- **Community:** Excellent — high issue throughput, diverse contributors, rapid fix-PR turnaround.
- **Product stability:** **Concerning** — the Windows desktop + gateway lifecycle regression cluster is broad and touches core user flows (messaging, updates). At least 4 P1s remain open, all concentrated in desktop/Windows paths.
- **Architecture:** Healthy direction — god-file sharding is a deliberate, community-endorsed policy with visible execution.
- **Maintainer responsiveness:** Mixed — fast on hot P1s (#84198 opened same-day), but several P2/P3 PRs (PATH, MCP message softening, memory drift) have sat untouched for 3+ weeks.
- **Risk to watch:** The 08-09 session-durability change introduced a visible regression wave; a 0.20.1 hotfix bundling #83720, #84198, and #84200/#84185 fixes is overdue.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-12

## 1. Today's Overview

PicoClaw shows **moderate activity** this cycle, with **3 issues** and **6 pull requests** updated in the last 24 hours, though **no new releases** were published and **no PRs were merged or closed** — suggesting a review-and-discussion phase rather than a commit-heavy day. The open-PR queue is **entirely stalled** with 6 items, **5 of which are flagged `[stale]`** (unchanged for 8+ days), indicating a potential maintainer bandwidth bottleneck. Two of the 3 issues are **open and pending**, including a new bug about LINE webhook config being inert, and one older issue was **auto-closed as stale**. The most active thread is issue **#3301** on routed-agent context management, which has both an open bug report and a **corresponding fix PR (#3316)** — a positive signal that user-reported problems are being addressed. Overall, the project is **healthy in engagement but strained in throughput**, with PRs accumulating without maintainer action.

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent release remains **v0.3.1** (from mid-July 2026), which is still the version referenced in all recent issue reports.

## 3. Project Progress

**No PRs were merged or closed today**, so there is no code landed in this window. However, one notable PR was submitted:

- **PR #3329 — [fix(line): warn on inert webhook_host / webhook_port instead of seeding them](https://github.com/sipeed/picoclaw/pull/3329)** — Newly opened (2026-08-11) by ex-takashima, this directly addresses the new bug report #3328, changing behavior to warn users that LINE webhook host/port settings are non-functional rather than silently accepting them.

Other open PRs that signify **work-in-progress** (but not yet merged) include:
- **#3316** — Fixes routed-agent context management (history, summarization, compression, seahorse bootstrap)
- **#3314** — Fixes `customAllowPatterns` so shell commands like `git push` can be allowed
- **#3315** — Adds Telegram topic support for private bot chats
- **#3317** — Adds prompt cache token logging to LLM response debug output
- **#3299** — Adds native Exa web search provider

## 4. Community Hot Topics

The most engaged threads this window, ranked by activity:

1. **[Issue #3301 — `/clear` and session auto-compression don't work for routed agents](https://github.com/sipeed/picoclaw/issues/3301)** — 3 comments, open 2 weeks, updated 24h ago. This bug is paired with **PR #3316** (also updated 24h ago), suggesting an active debugging collaboration between reporter (j-v) and maintainers. The issue describes a configuration using **dispatch rules** (likely a team or multi-agent setup for Discord/Telegram) where the session for a routed agent never compacts — pointing to a gap in how agent-level sessions interact with router-level channels.

2. **[PR #3299 — Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — Open for 17 days, still awaiting review. The request is for a new web-search backend (Exa), which would expand tooling options beyond whatever is currently supported. The `[stale]` tag suggests maintainer attention is needed.

3. **[Issue #3328 — LINE webhook host/port settings are never read](https://github.com/sipeed/picoclaw/issues/3328)** — Freshly filed, zero comments. A clean-cut "declared-but-unused" bug, quickly picked up by a new PR (#3329). Likely to be resolved in the next merge cycle if review bandwidth allows.

**Underlying need:** Users are increasingly configuring PicoClaw in **complex, multi-channel, multi-agent topologies** (dispatch rules, routed channels, forum topics) and hitting edge cases in session/context handling and channel-specific config. There is also steady appetite for **more provider integrations** (web search, LLM providers, cache metrics).

## 5. Bugs & Stability

| Severity | Issue | Status | Fix available? |
|----------|-------|--------|----------------|
| **High** | **[#3301 — Routed-agent sessions never auto-compress, `/clear` broken](https://github.com/sipeed/picoclaw/issues/3301)** | Open | Yes — **PR #3316** (open, `[stale]`) |
| **Medium** | **[#3328 — `line.settings.webhook_host`/`webhook_port` are dead config](https://github.com/sipeed/picoclaw/issues/3328)** | Open, new | Yes — **PR #3329** (fresh) |
| **Low** | **[#3294 — `/list models` only shows the current model](https://github.com/sipeed/picoclaw/issues/3294)** | **Closed (stale auto-close)** | Undetermined — closed without fix |

**Analysis:** The two active bugs are both **config/behavior mismatches** rather than crashes. #3301 is the more serious one — it silently breaks session continuity and memory for a subset of (likely power) users. #3328 is a classic "documented but dead setting" trap. In both cases, fix PRs exist, so the risk is **stale-PR decay** rather than lack of a solution.

## 6. Feature Requests & Roadmap Signals

Signals from PRs and issues this window:

- **Exa as native web-search provider** (PR #3299) — Unreviewed for 17 days. If merged, this would be a new tooling backend and likely belongs in a minor release (e.g. v0.4.0).
- **Prompt cache token logging** (PR #3317) — Since the project already works with DeepSeek/Cloudflare gateway, surfacing cache metrics is a low-risk observability win. Likely to land sooner than later (perhaps v0.3.2).
- **Telegram topic support in private chats** (PR #3315) — Platform-completeness fix, likely to be bundled with any Telegram-related release.
- **`customAllowPatterns` fix** (PR #3314) — This is a functional bug fix (allow-list commands not being honored), which might be **cherry-picked** quickly if maintainers do a patch release.

**Prediction for next version:** v0.3.2 (patch) is likely to include #3314 (allow-list fix) and possibly #3317 (cache logging). A larger **v0.4.0** could land later with #3316 (context/compression fix), #3315 (Telegram topics), and #3299 (Exa) if review velocity improves.

## 7. User Feedback Summary

- **Pain point: session/context handling is confusing in routed setups.** j-v (issue #3301) set up dispatch rules and discovered the system silently ignores history and compression — a frustrating "it just doesn't work" experience. The same user also reported the `customAllowPatterns` bug (#3314), suggesting they are **stress-testing a multi-agent production deployment**.
- **Pain point: documented config that does nothing.** qing-wang (#3328) systematically identified a dead config field, a sign of **documentation-vs-implementation drift**, which erodes trust in the config system.
- **Positive signal:** The project's **quick reaction to #3328** (new PR within hours) suggests maintainers are responsive when issues are well-diagnosed with reproducible evidence. The swift pairing of issue + PR is "textbook open-source hygiene."
- **Minor dissatisfaction:** Auto-closing #3294 as stale without resolution may disappoint the reporter (2suige-coder), who likely expected `/list models` to work as documented.

## 8. Backlog Watch

Items that are open, actionable, and at risk of neglect:

1. **[PR #3299 — Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — Open **17 days**, `[stale]`, zero maintainer comments. This is the oldest open feature PR. Needs review or explicit deferral.

2. **[PR #3316 — Routed-agent context management fix](https://github.com/sipeed/picoclaw/pull/3316)** — Open **9 days**, `[stale]`, linked to an active bug (#3301) that affects real users. Continued delay risks user churn.

3. **[PR #3315 — Telegram topics in private chats](https://github.com/sipeed/picoclaw/pull/3315)** — Open **9 days**, `[stale]`. Platform-specific fix, low risk, appears ready.

4. **[Issue #3301 — Routed-agent compression bug](https://github.com/sipeed/picoclaw/issues/3301)** — Open **14 days**, 3 comments, has a fix PR waiting. The "chicken-and-egg" risk here: both the issue and the PR are stale, and the triage loop may be stuck.

5. **[PR #3317 — Cache token logging](https://github.com/sipeed/picoclaw/pull/3317)** — Open **8 days**, `[stale]`. Low-risk, additive, would help users with DeepSeek/cached-token billing.

**Maintainer takeaway:** The **biggest project-health risk** right now is the growing stale-PR pile (6 PRs, 5 stale). Even with correct fixes in hand, delays will convert "active community" into "frustrated community." A single triage pass to comment on or merge these items would likely restore healthy momentum.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-12

## 1. Today's Overview

NanoClaw shows a **high-velocity development curve** over the last 24 hours, with 8 active pull requests (the busiest day tracked in this digest window) but only a single open issue, indicating a healthy maintenance-to-feature balance. The core team is actively landing feature work across the MCP provider ecosystem (remote Streamable HTTP support for codex/opencode) while simultaneously hardening security (template stamp-time hardening in PR #3220) and upgrading the setup wizard (PR #2909). One user-facing reliability bug remains open — silent message drops on ID reuse (#3226) — which has been open for ~48 hours without a fix PR attached yet. Overall, the project appears **healthy and momentum-driven**, with the majority of open PRs authored by repeat core contributors. Zero new releases in the window, but the PR volume suggests a substantial release may be close.

---

## 2. Releases

**No new releases were published in the last 24 hours.** The last release remains the prior version; however, the concentration of merged/core-team PRs (especially around MCP remote server support and the template/plugin migration in #3220) suggests a notable release candidate may be forming. Watch for a version bump in the coming days.

---

## 3. Project Progress

**Three PRs were closed/merged in the last 24 hours**, spanning integrations and feature-completion work:

- [**PR #3190 (Merged)** — "feat: add Tavily MCP tool skill"](https://github.com/nanocoai/nanoclaw/pull/3190) by manisrinivasan2k1: Adds a standalone Tavily search utility as a skill (no source changes). This expands the available utility-skill ecosystem, making web research accessible inside agent flows.
- [**PR #3092 (Merged)** — "feat: support remote Streamable HTTP MCP servers"](https://github.com/nanocoai/nanoclaw/pull/3092) by amit-shafnir: Core engine + Claude provider support for remote Streamable HTTP MCP servers via `{ type: 'http', url }` entries in `mcpServers`. This is a **major architectural expansion** — moving MCP config beyond stdio-only to remote HTTP.
- [**PR #3221 (Merged)** — "feat(providers): remote Streamable HTTP MCP servers for codex and opencode"](https://github.com/nanocoai/nanoclaw/pull/3221) by amit-shafnir: Completes the #3092 effort by teaching the codex and opencode payload builders to accept the same http entries; previously these threw config-write errors on encountering non-stdio server configs.

**Also advanced (still open):** [**PR #3220**](https://github.com/nanocoai/nanoclaw/pull/3220) "feat!: agent templates become Agent Plugins 1.0.0 directories" by amit-shafnir — a breaking-format migration of agent templates to a versioned plugin structure, with stamp-time symlink/caps/secret hardening included. This is part 1 of a two-part template overhaul (see #2909 below).

---

## 4. Community Hot Topics

The most active discussion this window is the **only open issue**:

- [**Issue #3226 (Open)** — "Inbound messages silently dropped when a platform reuses a message id"](https://github.com/nanocoai/nanoclaw/issues/3226) by dweekly (1 comment, created 2 days ago): The core complaint is **silent data loss** — when a platform (e.g., a messaging gateway) reuses a message ID within the same session, the message never reaches the agent and the user gets no error. The author correctly identifies this as indistinguishable from "the agent ignored me," which is a **trust-destroying failure mode** for a personal-AI product. Underlying need: deduplication must not double as a drop-filter; there is no mechanism for surfacing "message skipped" to either the user or the agent.

No PRs have been linked to this issue yet, and no maintainer has triaged it publicly — it is the single most important item on the project's plate for user-facing reliability.

---

## 5. Bugs & Stability

Only one bug was actively discussed in the window, and it is **high severity** because it is silent:

| Severity | Issue / PR | Description | Fix Status |
|----------|-----------|-------------|------------|
| **High** | [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226) | Inbound messages silently dropped when platform reuses a message ID (no agent delivery, no user-visible error) | **No fix PR yet**; remains open. |
| Medium (related) | [PR #3145 (Open)](https://github.com/nanocoai/nanoclaw/pull/3145) | DB migration 021 to backfill missing channel destinations for messaging-group wirings; preserves existing destinations/local names. | Open; addresses messaging reliability at a different layer. |
| Security | [PR #3220 (Open)](https://github.com/nanocoai/nanoclaw/pull/3220) | Stamp-time symlink/caps/secret hardening as part of template→plugin migration. | In review; mitigates template-stage local attacks. |

There are no reported crashes or regressions in this window. The system-upgrade transactional fix ([PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195), open) targets update-path atomicity — a stability concern, but not triggered by an active bug report.

---

## 6. Feature Requests & Roadmap Signals

Two clear roadmap signals emerge from the PR queue:

1. **Agent template → versioned plugin overhaul** — [PR #3220 "feat!: agent templates become Agent Plugins 1.0.0"](https://github.com/nanocoai/nanoclaw/pull/3220) and its companion [PR #2909 "template setup flow in the wizard and first-agent stamping"](https://github.com/nanocoai/nanoclaw/pull/2909) are a co-ordinated two-part release: the format migration (part 1) plus wizard-integrated template selection and first-agent stamping (part 2). The `feat!` marker means **breaking change** is incoming. Expect the template format to change — userland templates will need upgrading.

2. **Remote MCP servers everywhere** — With #3092 and #3221 merged, the engine + all three providers (Claude, codex, opencode) now accept remote Streamable HTTP MCP servers. This signals the project is betting on **remote tooling ecosystems over local-only skill folders**, a strong platform play. Likely next: docs/examples and possibly authenticated remote MCP config in the wizard.

**Prediction:** The next NanoClaw release will ship the breaking template→plugin migration plus MCP remote support, likely with a migration guide covering both template re-formatting and any MCP config changes.

---

## 7. User Feedback Summary

- **Pain point (critical):** The #3226 reporter (dweekly) expresses a core trust issue — *"indistinguishable from 'the agent ignored me'"* — which is the worst failure class for a personal AI assistant: the assistant silently not-there. This is a **must-fix** for user confidence.
- **Pain point (latent):** PR #3145 (DB backfill for missing destinations) implicitly reveals that wiring configuration can be incomplete after setup/upgrade; users may see messages not routed without realizing why.
- **Pain point (setup friction):** PR #2134 (Apple Silicon + Colima env vars in launchd plist) has been open since **April 29** — 15 weeks. Apple Silicon devs on Colima are still living outside the plist environment, which is a **known, unaddressed setup annoyance** for a significant macOS user segment.
- **Positive signal:** Utility skill additions (Tavily #3190) continue to land from community contributors, indicating the skill-authoring experience is attractive enough to draw external contribution.

---

## 8. Backlog Watch

These items have gone stale or unaddressed for **extended periods** and warrant explicit maintainer triage:

- [**PR #2134 (Open, since 2026-04-29)** — "fix(setup): include Apple Silicon + Colima env vars in launchd plist"](https://github.com/nanocoai/nanoclaw/pull/2134) by kky: **~106 days stale.** A small, well-scoped macOS setup fix with no maintainer activity. Either merge, close with rationale, or hand to a maintainer for fast-track review.
- [**PR #2909 (Open, since 2026-07-02)** — "feat(setup): template setup flow in the wizard and first-agent stamping"](https://github.com/nanocoai/nanoclaw/pull/2909) by amit-shafnir: **~41 days open.** The blocking companion to #3220; needs a decision on sequencing (does #3220 land first, then rebase this?) to avoid a long-lived open feature branch.
- [**PR #3145 (Open, since 2026-07-28)** — "fix(db): backfill destinations for existing wirings"](https://github.com/nanocoai/nanoclaw/pull/3145) by tlysanhuo: **~15 days open.** A data-integrity migration with no comments — needs a reviewer to confirm migration direction (forward-only vs. down-migration handling).

---

*Data window: 2026-08-11 → 2026-08-12 (UTC). Sources: GitHub issue/PR state for nanocoai/nanoclaw.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-12

## 1. Today's Overview

IronClaw is in a period of intense, well-organized development, with the "Reborn" architecture upgrade dominating the activity. The project saw 22 issues and 50 PRs updated in the last 24 hours, with a healthy balance of 13 open vs. 9 closed issues and 25 open vs. 25 merged/closed PRs, indicating a strong throughput of bug fixes and feature work. The primary focus is on hardening the core agent loop—specifically addressing context window management, token estimation accuracy, and safe retry logic—along with significant progress on the channel unification and memory reliability fronts. A notable theme is the transition towards a kernel-based architecture, with loops and tool code becoming pluggable, as highlighted in the top-priority epic #7482. While no new releases were cut today, the sheer volume of merged hotfixes and feature PRs suggests a release candidate may be imminent.

## 2. Releases

No new releases were published in the last 24 hours. The project continues to operate on its v1.3.0 milestone, with several epic-level features (deferred tool discovery improvements, automation reliability) and the "Reborn" re-architecture being the primary targets.

## 3. Project Progress

The project saw 25 PRs merged or closed, covering a wide range of fixes and feature completions:

- **Context & Memory Reliability:** A series of fixes landed to address silent data loss and model confusion. PR #7503 fixes the loop to retain the accepted task across the 128-message context eviction window, and PR #7504 converts eviction into a typed forced-compaction signal instead of silently dropping context. PR #7512 resolves a memory contract violation where `target: "memory"` was stored verbatim instead of resolving aliases like `target: "default"`, fixing cross-provider memory recall issues.
- **LLM & Caching Performance:** PR #6997 closed P0 issue #6984 by adding explicit Anthropic `cache_control` breakpoints on both the rig adapter and OAuth transport, moving away from reliance on automatic caching and significantly improving prompt-cache hit rates.
- **Infrastructure & Processes:** PR #7471 makes lease-expiry recovery safe, ensuring long-running processes are recovered at safe checkpoints rather than being failed outright, and isolates the journal heartbeat pool from data-plane PostgreSQL traffic to prevent cascading failures. PR #7514 enables the Railway shell for the hosted volume profile, a critical fix for sandboxed deployments. PR #7470 fixes a bug where threads with unprojected index rows were invisible in the sidebar.
- **WebUI Quality-of-Life:** PR #7480 addresses a user-facing annoyance by adding a hover-based marquee effect to reveal truncated long conversation titles in the sidebar.

## 4. Community Hot Topics

The most active discussions revolve around architectural overhauls and their implications:

- **Epic: Pluggable agent loops — ACP executor, edge credential injection, kernel architecture** ([#7482](https://github.com/nearai/ironclaw/issues/7482)): With 3 comments, this epic is the clearest signal of IronClaw's strategic direction. It proposes making the agent loop and tool code pluggable, positioning IronClaw as the "kernel" that handles tenancy, security, and orchestration. This is a fundamental shift that will impact contributors and users, and is the source of many of the current bug-fix PRs.
- **Epic: Deferred tool discovery improvements** ([#7405](https://github.com/nearai/ironclaw/issues/7405)): While closed, this epic spawned a family of related bug fixes in the last 24 hours concerning tool disclosure and serialization. The closed state signals the core loop improvements are landing, but the related issues show a focus on eliminating wasted model turns and improving catalog awareness.

## 5. Bugs & Stability

Today's activity shows a strong focus on resolving systemic issues, with several areas showing the highest severity:

- **High: Task & Context Eviction (silent failure)** — #7484: The context window could silently evict the accepted task, causing the agent to "forget" what it was doing. This is a critical reliability bug that is directly fixed by PRs #7503 and #7504.
- **High: Token Estimator Double-Counting** — #7485: The transcript-based token estimator double-counted ASCII characters, effectively halving the model's usable context window and likely causing premature truncation or budget-exceeded errors. The issue notes a second, inconsistent estimator exists, creating a confusing and buggy state. No dedicated fix PR is yet linked for this specific issue.
- **High: Dead Code / Broken Retry Logic** — #7490: The `retry_disposition()` function for silently redriving infra failures is entirely dead code, meaning transient failures (like `lease_expired` or `scheduler_heartbeat_failed`) may not be retried as intended, causing jobs to fail unnecessarily. A fix PR is not yet linked.
- **Medium: Memory Contract Violation** — #7505: Target-alias resolution logic was confined to a single provider, leading to inconsistent memory behavior across the native and mem0 providers. This was fixed by PR #7512.
- **Medium: False-Positive No-Progress Escapes** — #7486: The typed no-progress escape could terminally fail legitimate long-running jobs that perform idempotent reads or polls, as these are flagged as `NoChange` by output hashing. A warning-before-terminal approach is proposed.
- **Medium: Tool Disclosure & Serialization Bugs** — #7487 & #7488: Fixed critical bugs where `tool_search` would "disarm" the describe-first safety net and where bridge tools were hardcoded to serialize discovery batches, potentially discarding results. The fixes restore the intended agent loop flow.

## 6. Feature Requests & Roadmap Signals

Clear signals are emerging for the next phase of the roadmap:

- **ACP / Pluggability:** The demand for external tool integration is driving the move towards the Agent Communication Protocol (ACP). PR #7513 (adds an ACP serve command) and the epic #7482 show a clear push to make IronClaw an open, standard-based kernel rather than a closed system.
- **Staking & Authentication Flexibility:** Issue #7517 highlights a real user need: allowing Google/GitHub sign-ins to attach a NEAR wallet for staking and inference payments. This indicates a push towards reducing friction in the user onboarding and payment flow.
- **Automation Reliability:** The epic #6879, which notes that automation runs sometimes execute as plain interactive chat turns, is a top-priority v1.3.0 item. It's a critical reliability gap that degrades trust in the agent's autonomous capabilities, and the many context/loop fixes from today are likely preliminary steps. PR #7498, which adds the backend for automation suggestion cards, is also a feature signal for improving the automation UX.

## 7. User Feedback Summary

Real user pain points are visible across issues, primarily centering on **trust and reliability of the agent's autonomous claims**.

- **Hallucinated State (Highest Pain):** Multiple closed QA-bug issues (#7294, #7247, #7246) show the agent consistently falsely claiming that connections (e.g., GitHub) and automations are set up when they are not. While these specific issues are closed, they represent a systemic class of problem—the agent failing to verify actual state before acting—that the current loop fixes are designed to address.
- **Context & Memory Loss:** Issues #7185 and the mem0/memory contract bug (#7505) highlight user frustration with the agent forgetting facts or tasks across sessions. The "memory-save guidance" PR (#7365) is a direct response to this, suggesting that memory reliability is a major source of user dissatisfaction.
- **Friction in Extensions:** Issue #7508 notes a confusing endpoint-verification prompt when starting the GitHub MCP extension, which instead of cleanly connecting, raises security concerns that confuse the user.

## 8. Backlog Watch

- **Epic: Automation runs are hit-or-miss** ([#6879](https://github.com/nearai/ironclaw/issues/6879)): Created 2026-07-29, this is a high-priority v1.3.0 epic that has been open for two weeks without a linked fix PR. Today's fixes to context retention and retry logic are foundational, but a dedicated resolution is still pending.
- **PR: fix: hydrate approval gates on notification open** ([#5910](https://github.com/nearai/ironclaw/pull/5910)): This PR from a bot has been open since 2026-07-10 and is a core WebUI fix for delivering pending blocked-turn approval gates. It is an L-sized PR with low risk, and its long age without merge suggests it may be stalled or undergoing significant review, but it addresses a critical approval-flow path.


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-12

## 1. Today's Overview

LobsterAI shipped a new patch release (2026.8.11) focused primarily on Cowork UX improvements, including a collapse-agent-tasks shortcut and scheduled-task session indicators in the sidebar. The project is in a healthy state, with a significant batch of 7 merged/closed PRs and 3 still open, signaling a steady cadence of developer activity. The release merged into `main` consolidates previous work on configurable model thinking levels, improved progress visibility, and better local-file workflows, indicating strong momentum in refining the agent collaboration experience. Several stale issues from April and May were also closed today, suggesting an ongoing housekeeping pass to resolve or grandfather older threads. Notably, the release PR exposes a feature-rich 2026.8.10 branch, and the modern `fisherdaddy`/`liuzhq1986` contributions point to an active core team.

## 2. Releases

**LobsterAI 2026.8.11** was released on 2026-08-11, highlighting:
- A new "collapse-agent-tasks" shortcut from PR #2469.
- A new sidebar feature to visually distinguish scheduled task sessions (PR by `liuzhq1986`)—pegging current work to the Cowork improvements.

No breaking changes or migration notes were disclosed in the release notes. Given the latest merge of `release/2026.8.10` into main (PR #2477), it's expected that the next minor release will include per-model thinking levels and the model selector UI fixes currently in open PRs.

## 3. Project Progress

The bulk of today's merged/closed PRs represent tangible improvements merged to `main`:

- **PR #2473** — Adds a right-click context menu for local file links in Cowork chat (open-with/save-as/copy-path/reveal-in-folder), plus a new `dialog:saveFileCopy` IPC handler. This significantly boosts desktop-agent file workflows.
- **PR #2476** — UI fix to dismiss the topmost overlay (modal) when pressing Escape. Prevents nested dialogs/Panels from reacting simultaneously, an interaction bug in the renderer.
- **PR #2474** — Minor visual polish: aligned the stroke weight of the "sites" sidebar icon.
- **PR #2457** — Major feature: server-driven, configurable "thinking levels" for models, with OpenClaw mapping (`max` → `xhigh`) and per-session/per-agent persistence for versioned model requests.
- **PR #2477** — The release merge (2026.8.10 → main) bundled the above into stable.
- **PR #1239** — (Merged today after staleness) Adds window attention features — flashing the taskbar (Windows) and bouncing the Dock (macOS) when an AI task completes or errors while the app is backgrounded (via new `windowAttention.ts`).
- **PR #1241** — (Merged today) Fixes issue #1237: adds unsaved-changes confirmation when dismissing the Settings modal (covers background click, X, and Cancel—closes via dirty-tracking in `handleRequestClose`).

The open PRs (#2475, #1181, #1277) signal continued improvement on model-selector state isolation and internal session hiding, plus dependency housekeeping.

## 4. Community Hot Topics

- **Issue #1237 (Settings Unsaved Changes)** — **Comments: 2**. Auto-closed as stale today because the fix PR #1241 was merged, resolving the underlying concern (API key/config loss).
- **Issue #1240 (Model Lockout/Overflow)** — **Comments: 2**. The user describes a cascade failure after rate-limiting where switching models/sessions didn't help, forcing a full app restart with corrupted `openclaw.json` backup recovery. This is a "viral" incident showing a strong desire for resilience and sandboxing when external API limits hit.
- **PR #2457 (Configurable Thinking Levels)** — Already merged but generated noticeable community/reviewer interest as it changes the model interaction meta-parameters.

Underlying demand: Users are frustrated by modal/system-level state cascades (settings losses, global model rate-limit blocks) and appear to be pushing for more per-session/per-agent configurability and resilience against external provider failures. The per-model thinking level (PR #2475) is a direct response to a user-facing annoyance.

## 5. Bugs & Stability

The most severe issue reported today is **#1240** (Model Lockout/Overflow), where hitting API rate limits locks down all sessions and models, fails to recover even after a restart (only an `openclaw.json` restore helped), and triggers a startup crash. This suggests a major architectural fragility in error/limit handling within the OpenClaw gateway. **No fix PR is linked yet.**

Lower severity but still active:
- **Issue #1237 (Settings Unsaved Changes)** — Resolved by PR #1241 (merged).
- **Issue #2062 (Task Timeout)** — User confusion persists about whether a "max duration" task is stopped or still running in the background; flagged as stale today. The in-app messaging needs clearer "abort/finish" semantics.

The Escape/overlay bug in PR #2476 was fixed, indicating a quiet but steady stream of interaction bugs in the modal stack.

## 6. Feature Requests & Roadmap Signals

- **Per-Model Thinking Levels** — Open PR #2475 gives each model its own independent thinking intensity; implies the roadmap is moving from global settings to per-agent granularity.
- **Taskbar/Dock Attention** — PR #1239 (merged) fulfills a long-requested productivity feature for background task execution.
- **Local File Context Menus** (PR #2473, merged) — The "reveal in folder/save-as/open-with" pattern indicates a pivot toward treating LobsterAI as a full local desktop agent, not just a chat client.
- **Scheduled Task Session Markers** (released 2026.8.11) — Signals advanced use of Cowork for cron-like agent jobs, hinting at a roadmap toward autonomous agentic workflows.
- **Collapse-Agent-Tasks Shortcut** — A UX polish request that responds to noisy, multi-agent chat streams.

## 7. User Feedback Summary

The main frustrations center on **unrecoverable state loss and global failure propagation**: the settings-closes-silently bug (now fixed) and the model-rate-limit cascade (still open) both alienate users trying to operate multi-model, multi-agent sessions. Users are leveraging LobsterAI for heavy 24/7 automation (issue #2062), yet they remain unclear on task lifetime semantics; the timeout message should indicate resumability. On the satisfaction side, the shipped features (taskbar alerts, scheduled task markers, deeper file controls) align with user requests; the Electron-builder version bump in PR #1277 also hints at keeping the native packaging current. In general, the core team is responsive, but systemic resilience (runtime restarts, gateway timeouts) is a persistent pain point.

## 8. Backlog Watch

- **[OPEN] Issue #1183** — "Infinite gateway startup modal loop" — A loop of overlay/gateway startup attempts on Windows after disabling a model. Has only 1 comment from April. This is a high-severity workability issue for Windows users that appears stalled.
- **[OPEN] PR #1181** — Hides OpenClaw main-agent sessions from the Cowork UI. A user-quality fix for session list confusion that's been open since April — it's a small change but needs maintainer review and a SQL migration touchpoint.
- **[OPEN] PR #1277** — Dependabot bump for the Electron group (`electron: 40.2.1 → 43.3.0`). Although a routine dependency update, it's critical to keep the desktop environment current and secure, yet it appears blocked or un-reviewed since April.
- **[OPEN] PR #2475** — Per-model thinking level fix; very small scope and likely to merge next sprint, but blocked on additional review; should be prioritized to avoid clashes with the merged thinking-level feature from #2457.

Severity ranking: #1183 (high, Windows gatekeeping), #1277 (medium, dependency hygiene), #1181 (medium, UX clarity), #2475 (low, feature polish).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis Project Digest — 2026-08-12

### 1. Today's Overview
Moltis is in a **low-activity, consolidation phase**. No issues were updated in the last 24 hours, and no new releases were published. The sole piece of activity is a single open pull request (PR #1190) submitted yesterday, suggesting that core maintainer bandwidth is currently focused on review rather than triage or bug-fixing. The project shows no signs of regression or crisis, but also no forward momentum beyond the pending feature work. Overall project health is **stable but quiet**, with the primary signal being the substantial pending PR that could represent the next major capability jump.

---

### 2. Releases
**No new releases were published in the last 24 hours.** The most recent release history shows no tags or version bumps in this window. Omit detailed release notes, breaking changes, or migration guidance until a new version is cut.

---

### 3. Project Progress
**No PRs were merged or closed in the last 24 hours.** The only PR in the pipeline is #1190, which remains open. While no code landed today, PR #1190 represents a substantial set of proposed features (connector persistence, CalDAV snapshots, scheduling, full-text search, dataset plans, and a read-only agent tool) that, once merged, would materially advance Moltis's local data integration capabilities. No bug-fix PRs were merged in this window.

---

### 4. Community Hot Topics
**Most (and only) active PR:**  
**[#1190 — Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)**  
*Author: penso | Created: 2026-08-11 | Updated: 2026-08-11 | 👍 0 | Comments: 0*

Despite zero comments or reactions, this PR is the sole focus of current community attention. The PR description reveals an underlying need for **provider-neutral, durable local data access** — specifically, the ability to persistently connect to CalDAV servers with atomic snapshots, bounded local search, and a trusted read-only tool that agents can use without risking data mutation. The inclusion of "prompt-compiled dataset plans" suggests a push toward making local datasets more natively queryable by AI agents. With zero discussion, this PR may be under-visible; the lack of commentary could reflect either a small maintainer team reviewing internally or low community awareness.

---

### 5. Bugs & Stability
**No bugs, crashes, or regressions were reported or fixed in the last 24 hours.** There are zero open/active issue tickets in this window. The project's stability posture appears sound, with no new defect signals. The pending PR #1190 does not address any known bug but rather adds new functionality. No severity ranking is applicable today.

---

### 6. Feature Requests & Roadmap Signals
The only roadmap signal comes from **PR #1190**, which bundles multiple forward-looking features:
- **Provider-neutral connector persistence** — suggests a move toward pluggable data sources beyond CalDAV.
- **Atomic CalDAV snapshots** — points to data reliability as a design priority.
- **Scheduling** — hints at background sync/refresh capabilities.
- **Bounded local full-text search** — implies a shift toward offline-first, searchable local datasets.
- **Prompt-compiled dataset plans** and a **read-only `connectors` agent tool** — strongly signals an intent to make local data **safely accessible to AI agents** without mutation risk.

**Prediction:** If merged, these features would likely land in the next minor version (e.g., v0.x+1). Given the bundled scope, maintainers may split this into sequential PRs; the read-only agent tool and settings UI are the most likely to ship first.

---

### 7. User Feedback Summary
With **zero issues and zero comments**, there is no direct user feedback captured in this 24-hour window. The absence of complaints is mildly positive but inconclusive. The implicit user sentiment, inferred from the PR author's work, indicates a desire for **more durable, local-first data connectors** and **agent-safe access to user data** — echoing broader industry trends toward personal AI assistants with controlled data access. No explicit satisfaction or dissatisfaction metrics are available.

---

### 8. Backlog Watch
**No long-unanswered issues or PRs are currently pending** in the repository. PR #1190 is the only open item and is less than 48 hours old, so it does not yet warrant a backlog flag. Maintainers should, however, monitor PR #1190 for review latency — if it remains unreviewed for more than a week, it may indicate bandwidth constraints that could delay the project's next feature cycle. No other items require maintainer attention at this time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-12

## Today's Overview

CoPaw (QwenPaw) shows strong momentum with **22 issues** and **48 PRs** updated in the last 24 hours, reflecting active community participation and a busy development cycle. The release of **v2.1.0-beta.3** marks continued progress toward the 2.1.0 stable release, with 25 PRs merged/closed and 23 still open for review. Bug reports cover a range of severity, from MCP tool failures and desktop crashes to UI rendering and performance issues, while feature requests span formula rendering, marketplace unification, and inbox delivery. The project maintains a healthy balance of core stability fixes and user-facing feature work, though the high volume of open PRs (23) indicates a review bottleneck that may need attention.

## Releases

**[v2.1.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.3)** was published on 2026-08-11. Key changes include:

- **Files workspace blog** feature (PR [#6783](https://github.com/agentscope-ai/QwenPaw/pull/6783))
- **Provider capability cache**: stale entries now expire and clear on model switch (PR [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723))
- Version bumped to 2.1.0-beta.3

No breaking changes or migration notes were provided in the release. A [release verification issue #6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) is open for installation testing across platforms.

## Project Progress

**25 PRs were merged/closed today**, covering several areas:

- **Computer Use**: Native macOS element activation fixes ([#6913](https://github.com/agentscope-ai/QwenPaw/pull/6913)) and improved native input workflows with keyboard-only sequence actions ([#6891](https://github.com/agentscope-ai/QwenPaw/pull/6891))
- **Memory & context**: Pending auto-memory turns flushed before compression ([#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564)), preserving auto-memory state across compression and session lifecycles ([#6830](https://github.com/agentscope-ai/QwenPaw/pull/6830))
- **Console UI**: Unified renderable code block experience supporting LaTeX and Mermaid previews ([#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911)), file preview fixes for Unicode filenames and dark mode styling ([#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915))
- **Channels**: Conflict warning when a bot is already used by another agent ([#6909](https://github.com/agentscope-ai/QwenPaw/pull/6909))
- **Config**: Invalid channel payloads now return HTTP 422 instead of 500 ([#6912](https://github.com/agentscope-ai/QwenPaw/pull/6912), fixes [#6910](https://github.com/agentscope-ai/QwenPaw/issues/6910))
- **Tooling**: Corrected `read_file` tool description ([#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898))
- **Release docs**: v2.1.0 release notes prepared in English and Chinese ([#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875))

**Notable open PRs** under active development include provider discovery unification ([#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)), marketplace consolidation for apps/plugins/skills ([#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880)), MCP configurable tool-call timeout ([#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)), and AnySearch web search integration ([#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817)).

## Community Hot Topics

1. **[#6732 — MCP tools periodically become unresponsive](https://github.com/agentscope-ai/QwenPaw/issues/6732)** (10 comments, closed): MCP tools fail after hours of use, requiring container restart. This is a critical reliability issue affecting users' daily workflows.

2. **[#6893 — Formula rendering, session grouping, active session background](https://github.com/agentscope-ai/QwenPaw/issues/6893)** (7 comments, closed): A combined feature request covering LaTeX rendering (a recurring theme), conversation group management, and UI customization options.

3. **[#5790 — Loading animation persists after Agent response](https://github.com/agentscope-ai/QwenPaw/issues/5790)** (4 comments, closed): Console UI spinner doesn't clear after responses complete — a UX annoyance.

4. **[#6882 — How to integrate CopilotKit](https://github.com/agentscope-ai/QwenPaw/issues/6882)** (3 comments, open): A question about integrating CopilotKit, indicating developer interest in the ecosystem.

**Underlying needs**: Users are prioritizing reliability (MCP stability), professional-grade rendering (LaTeX), and cleaner UI/UX. The CopilotKit question signals interest in integrating QwenPaw with popular LLM application frameworks.

## Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) — Frequent crashes in v2.0.1 (open) | `console process/reply failed` traceback; crashes on web usage | No fix PR yet |
| **High** | [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) — Inter-agent messages create new sessions (open) | Duplicate shadow instances per message; agent-authored report | No fix PR yet |
| **High** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — MCP tools periodically fail (closed) | Unregistered/not-exists errors; requires container restart | Closed, likely fixed in 2.1.0-beta.3 |
| **Medium** | [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) — Chinese IME crash (open) | Message queue unusable during agent runs; v2.1.0b2 | No fix PR yet |
| **Medium** | [#6910](https://github.com/agentscope-ai/QwenPaw/issues/6910) — HTTP 500 on invalid channel config (open) | Pydantic ValidationError unhandled | Fixed by PR [#6912](https://github.com/agentscope-ai/QwenPaw/pull/6912) |
| **Medium** | [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) — Forked subagent reports success despite errors (closed) | Worktree finalization failure masked as completion | Closed |
| **Low** | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) — Idle CPU at ~20% (closed) | Infinite CSS animations causing repaints | Closed |

**Security**: [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) (open) reports that plugins on the marketplace can silently create cron jobs and inject user-visible messages without approval — a permission model gap rated medium-high severity.

## Feature Requests & Roadmap Signals

Active requests that may influence upcoming releases:

- **LaTeX/KaTeX formula rendering** ([#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453), [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756), [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893)): Multiple closed issues indicate this is on the team's radar. The unified code block PR [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) already adds LaTeX preview tabs — **likely shipping in v2.1.0**.
- **Agent-to-Inbox delivery** ([#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917), open): Let agents push reports directly to a persistent inbox rather than chat history. This is a meaningful workflow feature and could be considered for 2.2.
- **Unified marketplace** ([#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880)): Merging apps, plugins, and skills into a single `/market` page — currently under review.
- **Screen/window geometry persistence** ([#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877)): Desktop remembers window position/size — minor UX enhancement in review.
- **CopilotKit integration** ([#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882)): Community interest; unclear maintainer priority.
- **WeChat group for users** ([#6895](https://github.com/agentscope-ai/QwenPaw/issues/6895), closed): Community building request.

## User Feedback Summary

**Positive signals**:
- Active release verification process shows discipline in quality assurance
- Users are building with QwenPaw in production-like settings (QQ bot workflows, project research)

**Pain points voiced**:
- **MCP reliability** is the most common complaint (#6732) — tools silently failing and requiring restarts disrupts automation
- **Desktop stability** on v2.0.1 (#6919) with frequent crashes erodes trust
- **LaTeX rendering** is embarrassingly poor according to users: *"It actually should have this capability"* (#6893), *"it is really hard without it"* (#5453)
- **Console UI performance**: idle CPU usage of ~20% from CSS animations (#6828) and stuck loading spinners (#5790) indicate frontend polish issues
- **QQ bot workflow spam** (#6897): Every step of the workflow is pushed to QQ, triggering rate limits — users want configurable verbosity
- **Plugin permission gaps** (#6916) concern users installing from the marketplace

**Satisfaction indicators**: Users are actively requesting features rather than abandoning the tool, and issue comments suggest engagement but also frustration at basic capabilities (formula rendering) lagging behind competitors like Cherry Studio.

## Backlog Watch

Issues/PRs that may need maintainer attention:

- **[#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918)** (created 2026-08-11, open): Inter-agent sessions spawning duplicates — a significant architecture-level bug with no fix PR yet; needs prompt triage.
- **[#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919)** (open, 2 comments): Frequent crashes on v2.0.1 with traceback; no maintainer response yet.
- **[#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885)** (open, 2 comments): Chinese IME crashes message queue — affects a major user segment; no fix PR.
- **[#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869)** (under review since 2026-07-08): Slash-command autocomplete across UIs — 34 days in review; needs maintainer decision.
- **[#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817)** (under review since 2026-08-08): AnySearch web search integration — would replace Tavily; has broad implications for provider logic.
- **[#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490)** (open since 2026-06-24): Fullscreen image gallery for chat media — 49 days without movement; may be deprioritized.

---

*Data current as of 2026-08-12. All links refer to the agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**2026-08-12**

---

## 1. Today's Overview

ZeroClaw is in an intensive architecture-definition phase, with 40 open issues and 49 open PRs actively receiving updates in the last 24 hours. The project is heavily focused on RFC-driven design work—particularly around security policy, runtime ownership boundaries, and protocol compatibility (notably OpenAI Chat Completions). While no new releases shipped today, the pace of RFC revisions and the presence of a new high-activity sync PR (#9936) suggest the project is consolidating upstream fixes and preparing for feature maturation. A significant portion of open PRs carry the `needs-author-action` label, indicating maintainers are actively reviewing and requesting revisions rather than merging. Overall, the project shows high design rigor but a potential bottleneck in the RFC review cycle, which the community is actively trying to address (#9496).

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent release history does not indicate a pending version imminent, though the large number of `risk:high` RFCs targeting the upcoming **v0.9.0** milestone (referenced in #7142 and #9598) suggests a significant feature release is being planned.

---

## 3. Project Progress

**Merged/Closed PRs (1):**

- **#9936** – "fix(sync): cherry-pick upstream security and correctness fixes" — **MERGED/CLOSED** (Activity: Today, High)
  - [PR #9936](https://zeroclaw-labs/zeroclaw PR #9936)
  - Nine upstream fixes cherry-picked from the main branch, including critical security and correctness patches. Notably, two planned fixes (#9452, #8936) were already present in the tree and skipped as empty, showing good sync with upstream. This is a high-impact merge that consolidates stability improvements across many components (security, channels, providers, CLI).

**Closed Issues (10):** Highlights from the closed batch include:
- **#2269** (closed): RFI on token consumption and cost management—closed after 13 comments, presumably with a design direction decided.
- **#9035** (closed): Docker Compose gateway loopback-bound bug (S1 severity) was resolved.
- **#9545** (closed): Rustdoc warnings gate added to CI, successfully addressing a tracking task.
- **#9768** (closed): Daemon reload SIGUSR1 misconfiguration and dangerous warning message fixed.

---

## 4. Community Hot Topics

The most active discussions are long-running RFCs with deep architectural implications, indicating a community focused on robust, secure agent infrastructure.

- **#8303 – RFC: Goal mode v1 — bounded foreground Matrix work** (19 comments, 👍1)
  - [Issue #8303](https://zeroclaw-labs/zeroclaw Issue #8303)
  - One of the most-commented threads. The goal mode proposal attempts to give ZeroClaw durable multi-turn task pursuit, but after scoping revisions, it appears to be narrowing initial delivery to a bounded foreground mode. The underlying need is for users to start a task and have ZeroClaw persist through to completion without manual steering.

- **#8603 – RFC: ZeroClaw Chat Completions profile** (18 comments)
  - [Issue #8603](https://zeroclaw-labs/zeroclaw Issue #8603)
  - A high-demand request for OpenAI Chat Completions protocol compatibility, which would unlock compatibility with Open WebUI, LobeChat, Aider, LangChain, and the OpenAI SDK. This is a major interoperability signal indicating users want ZeroClaw as a drop-in agent backend for the broader tooling ecosystem.

- **#7155 – RFC: Per-execution confirmation tier for high-risk shell commands** (17 comments)
  - [Issue #7155](https://zeroclaw-labs/zeroclaw Issue #7155)
  - Community-driven need for Claude Code-style command policy (allow/ask/deny). This reflects user concerns about the safety and control of shell commands issued by the agent in production-like scenarios.

- **#7141 – RFC: Pluggable inbound authentication and canonical principals** (14 comments)
  - [Issue #7141](https://zeroclaw-labs/zeroclaw Issue #7141)
  - Active security architecture discussion (Rev 8) around OIDC and pluggable auth providers. The underlying need is enterprise readiness—corporate users want SSO integration rather than shared static tokens.

**Tracker of Note:**
- **#8692 – Maintainer decision queue for RFCs** (13 comments)
  - [Issue #8692](https://zeroclaw-labs/zeroclaw Issue #8692)
  - This tracker itself is a community signal: users (via maintainers) are formalizing the decision queue because the backlog of RFCs awaiting maintainer decision is a friction point.

---

## 5. Bugs & Stability

Several bugs were reported or updated today, some with immediate fix PRs in flight. Sorted by severity (P1 first):

**High Priority (P1) — Active:**
- **#9872 – Bounded delegate target resolves filesystem to delegator's workspace** (S2 severity, P1, accepted, 2 comments)
  - [Issue #9872](https://zeroclaw-labs/zeroclaw Issue #9872)
  - New bug: A sandbox boundaries violation where a delegated agent (`researcher`) writes to the delegator's workspace instead of its own. **No fix PR referenced yet.**
- **#9883 – Inbound WebP conversion decodes unbounded before validation** (P1, accepted, 2 comments)
  - [Issue #9883](https://zeroclaw-labs/zeroclaw Issue #9883)
  - Security DoS vector: Decoding of WebP images happens before pixel-level validation (which was fixed for other paths in #9819). This split-out is currently unpatched.

**Medium Priority — Active with Fix PRs:**
- **#9768 (closed) – Daemon reload not on SIGUSR1, and misleading warning** — Fixed, closed as accepted.
- **#9035 (closed) – Docker Compose gateway loopback-bound** — Fixed.
- **PR #9918 – Gateway doubling `gw_` prefix on full `session_key`** (P1, PR open)
  - [PR #9918](https://zeroclaw-labs/zeroclaw PR #9918)
  - Client-facing API correctness fix, waiting on author action.
- **PR #9911 – Matrix reply-to-bot dropped under `mention_only`** (P2, PR open)
  - [PR #9911](https://zeroclaw-labs/zeroclaw PR #9911)
  - A channel bug blocking follow-up turns in group rooms. Fix proposed is small (XS size).

**Security-Focused Fixes in the Pipeline:**
- **PR #9862** – Bounding direct HTTP response handling (P1, size L, open)
- **PR #8713** – Allowing opt-in `allowed_private_hosts` for SSRF gate (XL size, long-running wait)
- **PR #9194** – Extracting KeySource trait for secrets management (XL size)

---

## 6. Feature Requests & Roadmap Signals

A strong architectural push is underway, mostly around the **v0.9.0 security architecture** and a broader **"SOP"** (Standard Operating Procedure) control plane.

**Likely Candidates for Next Releases (v0.9.0):**

1. **OpenAI Chat Completions Profile (#8603)** — High adoption potential if accepted; the RFC aims to expose agent capabilities through an OpenAI SDK-compatible REST endpoint. Signals: 18 comments, active revisions.
2. **SOP Capability Milestone (#8288)** — A tracker coordinating the daemon-owned SOP control plane (13 capabilities to green). This is a major workflow feature aimed at making SOPs a first-class runtime entity with permissions and visibility (see #9598 for permission contract).
3. **Pluggable Inbound Auth (#7141)** and **Security Decision Pipeline (#7142)** — The two security RFCs are following parallel revision tracks. If accepted, they form the backbone of an enterprise-ready security model (OIDC, canonical principals, overlay policies).
4. **Context Compaction Ratio (#9535, PR)** — Already in PR form, this adds a model-window-ratio-driven context management feature, signaling focus on long-running agent sessions and cost control.
5. **Cost Management Direction (#2269 closed)** — The closure of this RFI suggests a design is being finalized. This is a key user pain point (running high-end models is expensive); look for a future RFC or implementation on token consumption controls.

**Long-Shots / Watch Items:**
- Goal Mode (#8303) is being slimmed to a "bounded foreground" MVP, suggesting it may land in bursts.
- LSP support for ZeroCode (#5907) — still awaiting author action but signals demand for coding-agent parity with Claude Code/OpenCode.

---

## 7. User Feedback Summary

**Pain Points:**
- **Security/Auth Complexity:** Multiple high-engagement RFCs (#7141, #7142, #7155, #9883) show a user base focused on security hardening, likely due to production usage. They are actively requesting "allow/ask/deny" policies rather than all-or-nothing tool access.
- **Cost of Operations:** Closure of #2269 highlights a long-standing user need: running real agent workloads is prohibitively expensive with a single high-end model. Users are watching for a productized cost-management model.
- **Interoperability Gaps:** The demand for OpenAI Chat Completions (#8603) shows users have existing toolchains (Open WebUI, Aider) they want ZeroClaw to plug into. The Matrix reply bug (#9911) also shows frustration with channel edge-cases breaking everyday chat flow.

**Satisfaction Signals:**
- **Positive:** Active maintainer presence—many PRs have updated `needs-author-action` labels, indicating reviews are happening in real-time.
- **Community Governance:** The maintainer decision queue tracker (#8692) and the RFC process streamlining RFC (#9496) show maintainers and users are collaborating to remove process bottlenecks, a sign of a mature open-source community.
- **Trusted Contributor Program:** The presence of "trusted contributor" and "principal contributor" labels on key PRs suggests a healthy pathway for sustained community contributions.

---

## 8. Backlog Watch

Several important items are waiting for maintainer or author action. These are flagged as potentially blocking feature progress or causing user friction.

1. **#6653 – RFC: Host-architecture policy for emulated installs** (Created 2026-05-14, P3, needs-author-action)
   - [Issue #6653](https://zeroclaw-labs/zeroclaw Issue #6653)
   - Awaiting author action for ~3 months. A narrow but critical issue for users on non-standard architectures (e.g., ARM64 emulation) who might run wrong binaries silently.

2. **PR #8713 – SSRF gate for `file_download`** (Created 2026-07-04, XL size, needs-author-action)
   - [PR #8713](https://zeroclaw-labs/zeroclaw PR #8713)
   - Long-running PR to fix a SSRF vulnerability. Size XL may be causing the delay, but as a security fix, it should be prioritized.

3. **#5907 – Opt-in LSP support for ZeroCode** (Created 2026-04-19, P2, needs-author-action)
   - [Issue #5907](https://zeroclaw-labs/zeroclaw Issue #5907)
   - This would be a major feature for coding workflows. The "needs-author-action" status is a process blocker, not a design blocker—community interest is expressed.

4. **#9644 – Retire the Lucid memory connector** (Created 2026-08-01, P2, needs-author-action, risk:high)
   - [Issue #9644](https://zeroclaw-labs/zeroclaw Issue #9644)
   - A decision to remove a connector whose upstream project has been dormant for months. Swift resolution avoids wasted maintenance resources and user confusion.

5. **#7821 – Sandbox policy schema struct** (Created 2026-06-17, XL, stale-candidate)
   - [PR #7821](https://zeroclaw-labs/zeroclaw PR #7821)
   - A large PR introducing the OS-level sandbox policy model that multiple other RFCs (#7142) likely depend on. Marked as a stale-candidate, which risks blocking dependent security work.

---

*Digest generated 2026-08-12 from ZeroClaw GitHub activity. Data source: zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*