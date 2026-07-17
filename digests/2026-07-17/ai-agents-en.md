# OpenClaw Ecosystem Digest 2026-07-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-17 02:46 UTC

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

# OpenClaw Project Digest — 2026-07-17

## Today's Overview

OpenClaw shows extremely high development velocity with 500 issues and 500 PRs updated in the last 24 hours, though the ratio of open-to-closed items (333 open vs 167 closed for both categories) suggests a growing backlog. The project is currently grappling with a significant stability crisis following the 2026.7.1 release, which introduced multiple gateway startup crash-loops, session state regressions, and provider compatibility breaks. No new releases were published today, indicating the team is likely focused on stabilization rather than new features. The community is highly engaged, with critical regressions spanning Codex integrations, memory systems, and provider compatibility receiving sustained attention.

## Releases

No new releases were published today (2026-07-17). The latest available versions are the 2026.7.x stable track, with the 2026.7.1 release appearing to have introduced several regressions that are now being actively addressed.

## Project Progress

Today's merged/closed PRs (167 of 500) include several important fixes:

- **#109070** (closed) — Path traversal guard for package manager: added `isRealPathWithinRoot` to prevent plugin manifest traversal escapes
- **#107795** (closed) — Plugin SDK isolation refactor: core session state now protected from plugin mutations, particularly relevant to restart-recovery coordination
- **#109551** (closed) — Release checklist test type fix: resolved CI test-type shard failures
- Several infrastructure fixes including CI smoke test download bounds (#108957) and checklist deduplication (#109553)

Major open PRs advancing features include the **"Claw" agent management system** — a series of PRs by giodl73-repo implementing RFC #27 for workspace management (#101755, #101973, #102296, #102383) with features like `claws status`, `claws remove` with plan-integrity validation, and gateway-owned cron management. This represents a substantial architectural change to agent lifecycle management.

## Community Hot Topics

The most active discussions reveal deep concern about reliability and security:

1. **[Linux/Windows Clawdbot Apps (#75)](openclaw/openclaw/issues/75)** — *114 comments, 81 👍*
   - Long-standing feature request for desktop clients on non-Apple platforms. The high engagement signals strong unmet demand for cross-platform GUI support, with users likely frustrated by macOS/iOS exclusivity.

2. **[Regression: Codex turn-completion stall (#88312)](openclaw/openclaw/issues/88312)** — *21 comments, 5 👍*
   - A **platinum hermit** severity regression where the Codex app-server permanently stalls mid-turn, failing to confirm completion. The fix from #85107 has regressed, indicating possible inadequate test coverage for concurrent tool execution paths.

3. **[Memory Trust Tagging by Source (#7707)](openclaw/openclaw/issues/7707)** — *17 comments*
   - Feature request for trust-level tagging of agent memory based on source. Community interest reflects growing concern about **memory poisoning attacks** via web scraping and third-party skills.

4. **[All tool results return placeholder string (#104721)](openclaw/openclaw/issues/104721)** — *17 comments, closed*
   - **P0 regression** where file reads returned literal `"(see attached image)"` instead of actual content. Closed as fixed, but the severity (data corruption) shook community confidence.

5. **[DeepSeek cache hit rate collapse (#94518)](openclaw/openclaw/issues/94518)** — *11 comments, 10 👍*
   - Boundary-aware caching introduced in 6.x broke prefix matching for DeepSeek, causing cache hit rates to drop below 10%. High community reaction suggests many users rely on DeepSeek for cost efficiency.

## Bugs & Stability

**Critical (P0 / Platinum Hermit) — Active:**

- **#107220** — Gateway crash-loop on 2026.7.1: legacy memory sidecar `meta`/`chunks` conflicts fatal; fix PR likely needed
- **#107694** — Gateway fails to start due to strict startup migration guard on benign legacy skips
- **#109421** — Timed-out Codex hook relays survive and exhaust host memory; open PR exists (#109421)
- **#106920** (closed) — 2026.7.1 gateway restart failure; user reported persistent breakage

**High Severity (P1 / Diamond Lobster) — Active:**

- **#88312** — Codex turn-completion stall regression (reopened from #84076 fix)
- **#87744** — Telegram turns repeatedly timeout on 2026.5.27; affects real-world messaging
- **#91009** — Codex hook relay spawns CPU-bound processes, stalls gateway RPC
- **#91352** — OpenAI Codex OAuth migration leaves stale profiles; fix PR linked
- **#108238** — Session context tracker incorrectly counts cacheRead as totalTokens, triggering false compaction; Chinese-language report suggests global impact
- **#107873** — Embedded prompt-lock session takeover abort WebChat turns instead of retrying

**Bug Pattern Analysis:** The concentration of Codex-related regressions (#88312, #87744, #91009, #91352, #109421) suggests the 2026.5.27–2026.7.1 range may have introduced architectural changes to the Codex integration layer that are not yet stable. The memory system crash-loops (#107220, #107694) indicate the migration to SQLite-based storage (#109427) may still have rough edges in production.

## Feature Requests & Roadmap Signals

**High-Impact Community Requests:**

1. **Memory Security (#7707, #10659, #7722, #11665)** — Trust tagging, masked secrets, filesystem sandboxing, and webhook session reuse form a cohesive theme: users demand stronger security boundaries. Likely prioritized for 2026.8.x given the security-conscious community.

2. **Agent Lifecycle Management (#96975, #11040, #6757)** — Subagent isolation, session chain tracking, and self-compaction tools signal a desire for more sophisticated agent orchestration. The RFC #27 "Claw" system (PRs by giodl73-repo) is clearly the team's answer — expect these features in upcoming releases.

3. **Platform Expansion (#75, #105025)** — Linux/Windows desktop clients and Twilio RCS channel indicate push beyond Apple ecosystem. The RCS PR (#105025) is large (XL) with multiple dependencies, suggesting significant investment.

4. **Provider Resilience (#6599, #9986)** — `/models test-fallback` command and model fallback on context limits reflect user frustration with brittle provider chains.

**Prediction for Next Release (2026.7.x or 2026.8.1):** Expect stabilization of Codex integration, the plugin catalog UI (#109510), and possibly the Claw agent management MVP. The session transcript SQLite migration (#99006) and talk harness refactor (#109497) appear close to merge.

## User Feedback Summary

**Pain Points:**
- **Stability fatigue:** Multiple users report "worked before, now fails" regressions with platform-wide impact (gateway crashes, message loss, session termination). The phrase "completely broken" appears in several high-severity reports (#104721).
- **Telegram reliability:** Users report silent message drops (#80362), timeout loops (#87744), and prematurely released turns (#107464) — Telegram as a critical channel is functionally impaired for some.
- **Provider compatibility:** DeepSeek cache breaks (#94518), llama.cpp tool schema rejects (#107449, #108473), and MiniMax reasoning loss (#92769) show multi-provider support strains.
- **UI regressions:** Missing navigation (#108182), "New Chat" disappearance on iOS (#108233), and WebSocket reconnect terminating sessions (#38091) indicate UI quality regressions in 2026.7.1.

**Satisfaction Indicators:**
- The "Claw" agent management feature (PRs #101755, #101973, #102296) has received careful community review and appears architecturally sound.
- The SQLite migration PR (#109427) shows continued investment in storage reliability.
- Plugin catalog UI (#109510) and always-on chat title bar (#109422) demonstrate UI polish efforts.

## Backlog Watch

**Critical Unaddressed Issues (no fix PR, needs maintainer):**

1. **[#88312](openclaw/openclaw/issues/88312) — Codex turn-completion stall (P1, Platinum Hermit)** — Open since 2026-05-30, 7 weeks without a fix PR. This is a regressed fix that the maintainers have reviewed but not addressed.

2. **[#7707](openclaw/openclaw/issues/7707) — Memory Trust Tagging (P2, Diamond Lobster)** — Open since 2026-02-03, needs product decision and security review for 5+ months. Given the security theme, this deserves prioritization.

3. **[#10659](openclaw/openclaw/issues/10659) — Masked Secrets (P1, Diamond Lobster)** — Open since 2026-02-06, 5+ months with maintainer review pending. Security feature with PR open but stalled.

4. **[#91009](openclaw/openclaw/issues/91009) — Codex CPU-bound hook relay (P1, Diamond Lobster)** — Open since 2026-06-06, linked PR but no maintainer product decision.

5. **[#38091](openclaw/openclaw/issues/38091) — WebSocket reconnect terminates sessions (P1, Platinum Hermit, Chinese community)** — Open since 2026-03-06, 4+ months. English-language maintainers may be neglecting this non-English report.

**Long-stale Important Issues:**
- [#86684](openclaw/openclaw/issues/86684) — Subagent wake compacts parent session (P1, since May 26)
- [#65656](openclaw/openclaw/issues/65656) — LINE table messages silently dropped (P1, since April 13)
- [#92769](openclaw/openclaw/issues/92769) — MiniMax reasoning loss via OpenRouter (P1, since June 13)

**Warning Signal:** The 333 open issues with "needs-maintainer-review" or "needs-product-decision" labels suggest maintainer bandwidth is overwhelmed by the bug influx following the 2026.7.1 release. This backlog could erode community trust if not addressed in the next release cycle.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report
**Date:** 2026-07-17 | **Coverage:** 10 active projects in the personal AI assistant / agent open-source ecosystem

---

## 1. Ecosystem Overview

The personal AI agent ecosystem is experiencing a bifurcation between **stability crises in mature platforms** and **rapid feature expansion in emerging ones**. OpenClaw, the reference platform, is absorbing significant community backlash from its 2026.7.1 release regressions—500 daily issues signal both massive adoption and maintenance strain. Meanwhile, projects like ZeroClaw and IronClaw are sprinting toward plugin ecosystems and OAuth stability, respectively. A clear pattern emerges: the ecosystem is shifting from "model provider integration" toward **production-grade concerns**—cross-platform UIs, memory security, plugin isolation, and multi-channel reliability. The community's tolerance for regressions is visibly declining, with several projects seeing users reporting "completely broken" experiences after updates.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases Today | Health Signal |
|---------|-------------|-----------|----------------|---------------|
| **OpenClaw** | 500 (333 open) | 500 (333 open) | None | ⚠️ **Stressed** — High velocity but growing backlog; 2026.7.1 regressions eroding trust |
| **ZeroClaw** | 13 | 48 | None | 🟢 **Sprinting** — Intense plugin ecosystem push; 6 PRs blocked on author action |
| **CoPaw** | 45 (23 open) | 45 (19 open) | None | ⚠️ **Stabilizing** — 49% closure rate but Windows-specific regressions and billing concerns |
| **IronClaw** | 17 | 39 | None | 🟢 **High momentum** — 11 PRs merged; major crate decomposition and OAuth fixes |
| **Hermes Agent** | 50 (37 open) | 50 (32 open) | None | 🟡 **Heavy iteration** — 18 PRs merged; Claude OAuth demand signal (41 👍) |
| **NanoBot** | 1 | 12 | None | 🟢 **Bug-fixing burst** — 7 p1 fixes in review; strong response to community pain points |
| **LobsterAI** | 3 (all stale) | 18 (14 merged) | None | 🟢 **Consolidating** — Strong merge velocity; 3 stale community PRs await review |
| **NanoClaw** | 3 | 19 | None | 🟡 **Active but strained** — Critical silent-failure bug; 40-day-old Signal PR |
| **Moltis** | 0 | 3 (all merged) | **Yes (20260716.01)** | 🟢 **Calm** — Stable point release; clean backlog |
| **NullClaw** | 1 | 0 | None | 🔴 **Critical incident** — aarch64 SIGSEGV crash; no maintainer response |
| **PicoClaw** | 2 | 9 | None | 🟡 **Low activity** — 3 stale PRs; NanoKVM integration issue unattended 16 days |
| **ZeptoClaw** | 5 (all closed) | 0 | None | 🟢 **Housekeeping** — Security documentation batch; no code changes |
| **TinyClaw** | 0 | 0 | None | ⚫ **Inactive** — No activity in 24h |

*Health Scale: 🟢 Healthy → 🟡 Moderate/Strained → ⚠️ Elevated Risk → 🔴 Critical*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale dominance:** 500 daily issues/PRs vs. next-highest (ZeroClaw at 48 PRs) reflects an order-of-magnitude larger community—and correspondingly more eyes on quality.
- **Architectural maturity:** The "Claw" agent management system (RFC #27) and SQLite session migration represent infrastructure investments that smaller projects haven't begun.
- **Provider coverage:** Issues track problems with 10+ distinct providers (DeepSeek, OpenAI, Anthropic, llama.cpp, MiniMax); no other project demonstrates equivalent breadth.

**Technical Approach Differences:**
- OpenClaw's **monorepo + Codex integration layer** creates complex dependency chains—visible in the cluster of Codex regressions (#88312, #91009, #109421). Simpler projects like NanoBot or Moltis avoid this complexity by maintaining thinner provider adapters.
- OpenClaw's **memory trust tagging** (#7707) and **plugin SDK isolation** (#107795) show security-forward architecture, though implementation lags.

**Community Size Comparison:**
- OpenClaw's 500 daily updates likely represent **5-10x the contributor base** of ZeroClaw or Hermes Agent. However, the 333-open-issue backlog suggests maintainer bandwidth hasn't scaled proportionally. The "golden hermit" severity label indicates a tiered triage system unique to OpenClaw.

**Risk:** OpenClaw's velocity creates a **quality-of-life gap**—it innovates fastest but breaks most frequently. Users seeking stability are increasingly looking at NanoBot (7 p1 fixes in 24h) or Moltis (zero open issues) as alternatives.

---

## 4. Shared Technical Focus Areas

| Theme | Projects Involved | Specific Needs | Signal Strength |
|-------|------------------|----------------|-----------------|
| **Agent Lifecycle Management** | OpenClaw, ZeroClaw, Hermes, CoPaw | Subagent isolation, session chain tracking, orchestration workflows | **High** — Claw system (OpenClaw), A2A protocol (ZeroClaw #9106), workflow orchestration (CoPaw #6163) |
| **Memory Security & Trust** | OpenClaw, Hermes, ZeroClaw | Trust tagging, masked secrets, poisoning prevention | **Moderate-High** — OpenClaw #7707 (17 comments), ZeroClaw #9103, Hermes #53491 |
| **Cross-Platform Desktop** | OpenClaw, Hermes, CoPaw, LobsterAI | Linux/Windows clients, non-Apple support, Windows title bar | **High** — OpenClaw #75 (81 👍), Hermes #45779, CoPaw #6161 (Windows UAC), LobsterAI #2302 |
| **Provider Resilience & Fallback** | OpenClaw, Hermes, NanoClaw, ZeroClaw | Model fallback on failures, quota-aware routing, cache hit optimization | **Moderate-High** — OpenClaw #94518, Hermes #56776, NanoClaw #3057/3069, ZeroClaw #8966 |
| **Telegram/Messaging Reliability** | OpenClaw, Hermes, NullClaw, CoPaw | Silent drops, timeout loops, turn-completion stalls | **Critical for affected** — Hermes #66027, NullClaw #976 (SIGSEGV), CoPaw #5995, OpenClaw #87744 |
| **Plugin/Skill Ecosystem** | OpenClaw, ZeroClaw, Hermes | SDK isolation, capability catalogs, permission models | **High (ZeroClaw)** — ZeroClaw 7+ PRs on plugin runtime; OpenClaw #107795; Hermes #53491 |
| **i18n/Localization** | Hermes, PicoClaw, LobsterAI, IronClaw | Traditional Chinese, zh-TW, language-aware prompts | **Growing** — Hermes #66043, PicoClaw #3261, LobsterAI #2345, IronClaw #6158 |
| **Deployment UX** | CoPaw, NanoBot, ZeroClaw | Windows UAC, one-click deploy, Docker hardening | **Operational** — CoPaw #6161, NanoBot #4937 (Render), ZeroClaw #9101 (attestation) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes | CoPaw | NanoBot |
|-----------|----------|----------|--------|-------|---------|
| **Target User** | Power users / developers | Plugin builders | Multi-provider switchers | Consumer desktop | Lightweight deployers |
| **Architecture** | Monolithic + Codex-bound | Micro-service plugin stack | Session-aware gateway | Desktop-first + Windows | Minimal Docker stack |
| **Primary Channel** | Codex/WebChat | WASM plugins | Telegram, Feishu | Windows desktop | WebUI |
| **Provider Strategy** | Deep integration (all major) | Abstraction via plugins | Subscription OAuth (demanded) | Model-agnostic | REST adapters |
| **Security Posture** | Memory trust tagging (planned) | Plugin permission model (RFC) | Skills guard (off by default) | Policy-based approval | Container hardening |
| **Release Cadence** | Weekly (volatile) | Milestone-based (v0.8.x) | Frequent (0.18.x) | Post-v2.0 stabilization | Burst-based |
| **Community Contribution** | Broad but backlogged | Active but PRs stall | Growing (multi-language) | Contributor-driven | Community-maintained announced |

**Key Architectural Differences:**
- **OpenClaw** uses a **Codex-integrated monolithic gateway** where provider adapters are tightly coupled—causing cascading regressions (5+ Codex bugs active).
- **ZeroClaw** is building a **WASM-based plugin runtime** with capability catalogs—the most modular architecture in the ecosystem, but still pre-v1.0.
- **CoPaw** offers a **Windows-native desktop** experience with a policy engine, targeting enterprise consumers; has the most mature cross-platform UI among the group.
- **NanoBot** is the **lightest-weight** option, with a Docker-first deployment philosophy and community maintenance governance.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (High risk/reward):**
- **ZeroClaw** — 48 active PRs, most innovative plugin architecture, but 6 PRs stalled on author action and a key maintainer (@singlerider) just departed. **High velocity, moderate execution risk.**
- **OpenClaw** — 500 daily items. Unmatched scale, but the 33% closure rate and quality regressions suggest the project is **outpacing its ability to stabilize**. Likely to see a forced stabilization release soon.

**Tier 2 — Stabilizing After Growth:**
- **IronClaw** — 11 PRs merged today, OAuth lifecycle cleanups, god-crate decomposition. **Healthy maturation** with architectural debt being addressed deliberately.
- **CoPaw** — 49% issue closure rate, but Windows UAC and billing anomaly bugs signal **post-release cleanup**. v2.0 migration trauma is the dominant theme.
- **LobsterAI** — 14 PRs merged today, strong cowork and UI polish. **Consolidating toward release** with minimal friction.

**Tier 3 — Focused Maintenance:**
- **NanoBot** — 7 p1 fixes in parallel. **High-quality bug response** but low feature velocity. Community governance shift (PR #4950) suggests strategic repositioning.
- **Moltis** — Zero open issues, clean release. **Stable and calm**, likely serving a niche use case without feature frenzy.
- **ZeptoClaw** — Documentation-only activity. **Housekeeping phase.**

**Tier 4 — Friction or Inactivity:**
- **NullClaw** — **Single critical crash** (aarch64 SIGSEGV) with zero maintainer response. At risk of user churn.
- **PicoClaw** — 3 stale PRs (35+ days), unattended support issue. **Low maintainer bandwidth.**
- **TinyClaw** — No activity. **Dormant.**

---

## 7. Trend Signals

**1. Plugin Ecosystems as the Next Battleground**  
ZeroClaw's 7+ PR stack on WASM channel plugins, combined with OpenClaw's SDK isolation work (#107795) and Hermes' skill security debate (#53491), signals that **plugin architectures are the ecosystem's next inflection point**. The winning approach will balance modularity (ZeroClaw's capability catalogs) with security (trust tagging, permission models).

**2. Provider Lock-In Is a Growing Liability**  
Cross-project evidence: DeepSeek cache collapse (OpenClaw #94518), Claude OAuth demand (Hermes #25267, 41 👍), Z.ai 429 persistence (Hermes #53002), MiniMax reasoning loss (OpenClaw #92769). Users are **actively seeking provider-agnostic architectures**. Projects that deliver seamless fallback (NanoClaw's dual #3057/#3069 push) will have differentiation advantage.

**3. Memory Poisoning Awareness Is Rising**  
OpenClaw (#7707, #10659), Hermes (#53491), and ZeroClaw (#9103) all surface memory security concerns. The pattern: users want **memory tagged by source trust level** and **secrets masked from model visibility**. This reflects growing awareness of adversarial risks in agentic workflows.

**4. Windows Deployment Is the Unsung Bottleneck**  
CoPaw (#6161), OpenClaw (#75, 81 👍), and LobsterAI (#2302) all invest in Windows UI or deployment. But CoPaw's UAC crisis and NullClaw's aarch64 failure show that **cross-platform support is still fragile**. The ecosystem is dominated by macOS/Linux development; Windows users are underserved.

**5. Operator Experience (Deploy & Upgrade) Is Underinvested**  
ZeroClaw's in-app upgrade RFC (#8170), NanoBot's Render deployment (#4937), and CoPaw's UAC workarounds indicate that **deployment friction is a top user pain point** that most projects under-prioritize relative to feature development.

**6. Community Maintainer Burnout Is a Risk**  
OpenClaw's 333 open issues, ZeroClaw's 6 stalled PRs, and NullClaw's unattended SIGSEGV all point to **maintainer bandwidth constraints**. The ecosystem needs better triage automation or co-maintainer models—NanoBot's community maintenance governance (#4950) is a positive signal.

**Value for AI Agent Developers:**
- **Prioritize provider-agnostic architecture** — the cost of provider lock-in is increasing.
- **Invest in memory security early** — trust tagging and secret masking will become table stakes.
- **Test on Windows** — most developers use macOS, but the largest dissatisfied user base is Windows.
- **Benchmark release stability** — OpenClaw's regression crisis shows the cost of velocity without hardening.
- **Watch ZeroClaw** — its WASM plugin model may define the next generation of agent extensibility if execution risk is managed.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-07-17

## 1. Today's Overview

NanoBot is experiencing a burst of high-priority maintenance activity, with 12 pull requests and one new issue updated in the last 24 hours. The project appears to be in an active bug-fixing and hardening phase, as seven of the 12 PRs are tagged with `priority: p1`, targeting critical issues such as session caching, message caps, WebUI visibility, cancellation handling, security hardening, and provider request sanitization. One documentation PR was merged, reflecting a shift toward community-driven maintenance, while no new releases were published. Overall, the project's pulse indicates a strong focus on stability, observability, and production-readiness.

## 2. Releases

**No new releases today.** The project has not published a new version in this window; the latest release remains at the previous tag.

## 3. Project Progress

One pull request was **merged/closed** today:

- **[#4950 – docs(readme): reflect community maintenance](https://github.com/HKUDS/nanobot/pull/4950)** (merged) – A documentation-only change updating the README to signal that NanoBot is now maintained collaboratively with open-source contributors. This marks an important governance milestone for the project.

No feature-level progress was merged; all remaining open PRs are under review.

## 4. Community Hot Topics

Activity is concentrated in the **bug-fix and performance** domain. No single issue or PR attracted significant comments or reactions, but several topics stand out by volume and cross-referencing:

- **[Issue #4948 – WebUI loses visibility when a late subagent completion starts a system turn](https://github.com/HKUDS/nanobot/issues/4948)** (open, 0 comments, 0 reactions) – This is the only open issue today, describing a WebUI lifecycle bug where late subagent results break the UI state. Two companion PRs (#4954, #4960) directly address the underlying problem, indicating strong team alignment on resolution.

- **[PR #4954 – fix(webui): keep late subagent turns visible](https://github.com/HKUDS/nanobot/pull/4954)** (open, p1) – Directly fixes the issue above by preserving WebSocket delivery metadata across subagent spawns.

- **[PR #4960 – fix: preserve real cancellation in MCP paths](https://github.com/HKUDS/nanobot/pull/4960)** (open, p1) – Introduces a shared `task_is_cancelling()` helper to distinguish real cancellation from leaked `CancelledError` signals. This is a deep infrastructure fix that interacts with the subagent lifecycle issue.

**Underlying need:** Users are experiencing silent UI failures and log noise during complex multi-turn agent workflows. The community is pushing for better error isolation and lifecycle management at the async/WebSocket boundary.

## 5. Bugs & Stability

Seven critical (p1) bug fixes were filed today, all with accompanying pull requests. Sorted by estimated impact:

| Severity | Issue/PR | Title | Description |
|----------|----------|-------|-------------|
| **High** | [#4957](https://github.com/HKUDS/nanobot/pull/4957) | fix(session): bound the in-memory session cache | `SessionManager._cache` is unbounded, risking OOM in long-running deployments. Fix adds 128-entry LRU + weak overflow cache. |
| **High** | [#4956](https://github.com/HKUDS/nanobot/pull/4956) | fix(session): cap messages at persistence boundary | Messages can exceed the 2,000-message file cap via SDK ingest bypass. Fix enforces the cap at the persistence layer. |
| **High** | [#4955](https://github.com/HKUDS/nanobot/pull/4955) | Harden default Docker Compose security | Removes `SYS_ADMIN` + unconfined AppArmor from default config; adds opt-in bwrap sandbox. Fixes a container breakout risk. |
| **High** | [#4952](https://github.com/HKUDS/nanobot/pull/4952) | fix(providers): sanitize UTF-16 surrogates | Emoji-rich content triggers `UnicodeEncodeError: surrogates not allowed`. Fix blocks all API requests from breaking. |
| **Medium** | [#4954](https://github.com/HKUDS/nanobot/pull/4954) | fix(webui): keep late subagent turns visible | Described above – UI state corruption on late subagent completions. |
| **Medium** | [#4960](https://github.com/HKUDS/nanobot/pull/4960) | fix: preserve real cancellation in MCP paths | Described above – async cancellation leak. |
| **Low** | [#4959](https://github.com/HKUDS/nanobot/pull/4959) | fix: add one second to retry after delays | Retry-after delays are observed to be 1s short, causing rate-limit bursts. Minor timing fix. |

All seven have open PRs attached. No confirmed regressions were reported.

## 6. Feature Requests & Roadmap Signals

Four new feature-adjacent PRs signal where NanoBot is headed:

- **[#4937 – feat: add one-click Deploy to Render support](https://github.com/HKUDS/nanobot/pull/4937)** (p2, open) – A Render Blueprint for one-click deployment with persistent session history and memory. Signaled as ready for review and likely to land in the next minor release.

- **[#4951 – feat(web): add Nimble search provider](https://github.com/HKUDS/nanobot/pull/4951)** (open) – Adds a new REST-based web search provider (Nimble). Given its clean, non-breaking shape, it is likely to merge soon.

- **[#4953 – feat(webui): support native folder picker bridges](https://github.com/HKUDS/nanobot/pull/4953)** (p2, open) – Adds token-authenticated folder picker bridges for native hosts. A quality-of-life feature for developers embedding the WebUI.

- **[#4958 – Improve zh-TW Traditional Chinese locale](https://github.com/HKUDS/nanobot/pull/4958)** (p2, open) – Localization improvement. Suggests growing international adoption but low roadmapping impact.

**Prediction for next release:** The Render deployment blueprint (#4937) and Nimble search provider (#4951) are the most likely to ship, alongside the seven p1 bug fixes already in review.

## 7. User Feedback Summary

While no explicit user comments are available, the bug reports and fix PRs reveal clear pain points:

- **Pain: Deployment security** – Users running Docker Compose experienced unnecessary `SYS_ADMIN` and permissive AppArmor defaults, exposing attack surface (#4955).
- **Pain: Silent OOM crashes** – Long-running sessions with many turns can exhaust memory due to unbounded session caching (#4957).
- **Pain: Lost messages** – Sessions exceeding 2,000 messages silently lose history via SDK ingest, with no user feedback (#4956).
- **Pain: Emoji-related API failures** – Emoji-heavy content (common in modern chat) causes hard provider API failures (#4952).
- **Pain: WebUI state corruption** – Multi-agent workflows cause the UI to lose track of subagent turns, leaving users confused (#4948, #4954).

Satisfaction signals: The team is responding rapidly (one bug → two companion PRs), and the merged README update (#4950) signals transparency about community maintenance.

## 8. Backlog Watch

**No long-unanswered issues or PRs identified in this window.** The project appears well-maintained: all 12 issues/PRs updated today are from the last 24 hours. The oldest open PR in today's data is #4937 (Render deploy), created July 14 and updated July 16, still awaiting review from the designated reviewer. This is not yet concerning.

**One item worth monitoring:**
- **[PR #4937](https://github.com/HKUDS/nanobot/pull/4937) – feat: add one-click Deploy to Render support** – Tagged `priority: p2` and waiting on a review from `@Re-bin`. If it remains unmerged for more than 7 days, it may indicate review bandwidth constraints for non-critical features. Today is only day 3.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-17

## Today's Overview

Hermes Agent sees elevated activity with **50 issues and 50 PRs updated in the last 24 hours**, though **no new releases** were published, indicating a heavy development cycle between releases. The project maintains a healthy ratio of 37 open/active issues to 13 closed, and **18 PRs were merged or closed** against 32 still open. The community is particularly focused on **provider integration pain points** (Anthropic, Z.ai, Kimi), **session state management**, and **multi-platform support** (Telegram, Feishu, Windows deskstop). Several high-severity bugs are under active investigation with associated fix PRs merged today. A significant number of feature requests and configuration ergonomics issues suggest the project's user base is expanding into production and multi-provider deployments, driving demand for more robust, configurable plumbing.

## Releases

**No new releases today.** The latest tagged version remains **0.18.2** (commit `2ccfdb2`). The project appears to be accumulating changes for a future release, with several merged PRs touching stability, security, and platform support.

## Project Progress

**18 PRs merged/closed today** (exact count, not individually listed in top 20). Key merged work from the session includes:

- **[PR #66033 — perf(desktop): kill the layout-thrash cascade on session switch](https://github.com/NousResearch/hermes-agent/pull/66033)** — Performance fix for desktop app session switching, addressing CPU thrash on 1000+ message sessions. Merged today.
- **[PR #47480 — feat(skills): add live-interruptible-worker](https://github.com/NousResearch/hermes-agent/pull/47480)** — Real-time task steering via PTY command channel. Merged from June 16 backlog.
- **[PR #65969 — feat(models): add k3 to kimi-coding model lists](https://github.com/NousResearch/hermes-agent/pull/65969)** — Adds Kimi K3 model to static catalogs. Closed today.
- **[PR #46752 — feat: make summary/title prompts respect configured display.language](https://github.com/NousResearch/hermes-agent/pull/46752)** — Merged back from June 15, improving multilingual support.
- **[PR #42548 — fix(title_generator): pass timeout from caller and reduce max_tokens to 64](https://github.com/NousResearch/hermes-agent/pull/42548)** — Stabilized title generation under load.
- **[PR #41878 — fix: three targeted bug fixes for CLI, delegate_task schema, and title timeout](https://github.com/NousResearch/hermes-agent/pull/41878)** — Cleanly closed after targeted fixes.

Six closed issues reflect this merged work, including #60047, #60020, #61284, #65835, #66019, and #66022.

## Community Hot Topics

### Most Active Issues

1. **[#25267 — Claude Agent SDK model provider with subscription OAuth (Codex-style)](https://github.com/NousResearch/hermes-agent/issues/25267)** — **11 comments, 41 👍** | *Open since May 13*
   The single most-reacted issue. Users want to use Claude under existing subscriptions without double-paying for API tokens. The 41 upvotes signal strong demand for **OAuth-based provider models** that work within consumer subscription billing rather than developer API pricing. High community interest suggests this is a top priority feature request.

2. **[#56776 — Claude models on multi-model OpenAI-compatible gateways get 0% prompt cache hit rate](https://github.com/NousResearch/hermes-agent/issues/56776)** — **6 comments, updated today**
   Cross-provider compatibility issue: when using Claude through OpenAI-compatible adapters, prompt caching breaks entirely. The user notes "Claude Code works fine" with the same provider, suggesting Hermes is not negotiating caching headers correctly in the non-native protocol.

3. **[#61265 — Hermes sends extremely large prompts to local OpenAI-compatible models, causing multi-minute stalls](https://github.com/NousResearch/hermes-agent/issues/61265)** — **6 comments, updated today** | *P2 severity*
   Affects all local model sizes. The agent is constructing prompts that overwhelm local inference — a serious usability issue for local-first users.

4. **[#45779 — Multi-gateway connections with per-gateway tabs in Desktop](https://github.com/NousResearch/hermes-agent/issues/45779)** — **4 comments, 4 👍** | *Feature request*
   Users running agents on multiple machines (VPS, home server, Mac Mini) want to see all gateways simultaneously in the desktop app rather than switching single-connection mode.

### Most Active PRs

- **[#65342 — fix(feishu): split content at table boundaries for proper markdown rendering](https://github.com/NousResearch/hermes-agent/pull/65342)** — New PR today addressing cross-platform rendering
- **[#23243 — feat(i18n): introduce a shared localization framework](https://github.com/NousResearch/hermes-agent/pull/23243)** — Long-running PR (since May 10) with ongoing discussion around architecture decisions and compatibility
- **[#66027 — fix(telegram): reply to latest queued follow-up](https://github.com/NousResearch/hermes-agent/pull/66027)** — New PR addressing session state ordering during concurrent Telegram messages

## Bugs & Stability

### Critical/High Severity (P2)

| Issue | Description | Status |
|-------|-------------|--------|
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | Extremely large prompts cause multi-minute stalls on local models | Open, P2 |
| [#53002](https://github.com/NousResearch/hermes-agent/issues/53002) | Z.ai 429/1305 persists on chat/completions path (previous fix incomplete) | Open, P2 |
| [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) | Desktop creates new sessions on every message with non-default profiles | Open, P2 |
| [#58745](https://github.com/NousResearch/hermes-agent/issues/58745) | Compression context_length semantics conflict causing every-turn compression loops | Open, P2, needs-decision |
| [#53491](https://github.com/NousResearch/hermes-agent/issues/53491) | Skills security: guard off by default, ask-policy leaks, fail-open | Open, P2, sweeper:risk-security-boundary |

### Regressions
- **[#63679 — Desktop app: every assistant message renders twice after recent update](https://github.com/NousResearch/hermes-agent/issues/63679)** — P3 but affecting all desktop users on Windows
- **[#66008 — "Read aloud" times out on long replies (15s fetch timeout regression)](https://github.com/NousResearch/hermes-agent/issues/66008)** — P3, desktop-specific

### New Bugs Reported Today (July 17)
- **#66045 — Codex transport over-length `prompt_cache_key` (>64) → 400 errors with silent fallback** — Impacts OpenAI Codex backend reliability
- **#66019 — `hermes -z` (oneshot) silently ignores `terminal.backend` config** — P3, security bypass potential for users relying on sandboxed backends
- **#66012 — Desktop ignores per-profile TTS/voice config** — P3, affects multi-profile users on Windows
- **#65969 — Resolved: kimi-coding catalog was missing k3 model** — Already closed with merged fix PR

### Fix PRs in Flight
- **PR #66033** (performance, desktop session switch — **merged today**)
- **PR #66027** (fix Telegram duplicate finals after failed edit — open)
- **PR #66026** (fix Telegram reply to latest follow-up — open)
- **PR #64339** (suppress Windows console window flash — open)
- **PR #64759** (keep desktop new-chat binding stable during attachments — open)

## Feature Requests & Roadmap Signals

### High-Community-Interest Features

1. **[Premium User Feature] Claude Subscription OAuth** (Issue #25267, 41 👍) — The #1 most wanted feature. Users are blocked from using their existing Claude subscription with Hermes without paying duplicate API costs. This is a **strategic feature** for user acquisition among Claude subscribers.

2. **Multi-Gateway Desktop Tabs** (Issue #45779, 4 👍) — Indicates Hermes is being deployed as a **multi-machine distributed tool** where users manage agents across VPS, home servers, and local machines from a single dashboard.

3. **Context-Aware Model Routing** (Issue #66020, filed today) — Early feature request for automatic model selection per task type. A small but interesting signal that power users want **intelligent task-to-model routing** without manual `/model` switching.

4. **i18n/Localization** (PR #23243, open since May 10) — The project received a **Traditional Chinese (zh-Hant)** dashboard translation PR today (#66043), indicating growing non-English user base.

5. **Configurable Parameter Skipping** (Issue #26881) — Users hitting provider-specific API parameter incompatibilities need ergonomic config to exclude parameters per-provider.

### Likely for Next Version

Based on merged PRs and open issues receiving active PR work:
- **Kimi model catalog expansion** — Already merged for k3
- **Desktop performance improvements** — Multiple PRs targeting session switch, layout thrash, auto-scroll
- **Telegram platform reliability** — Two fix PRs in flight
- **Multilingual prompt generation** — PR #46752 merged
- **Live-interruptible workers for skills** — PR #47480 merged

## User Feedback Summary

### Pain Points (Repeated Across Multiple Issues)

1. **"Pay twice" for Claude** — Users with Claude subscriptions cannot use Hermes without paying per-token Anthropic API fees (#25267). This is a **top conversion blocker** for Claude-subscribed users.

2. **Provider compatibility is brittle** — Common pattern: "works with vendor's own client, broken in Hermes" (Z.ai 429, Claude cache misses, Kimi missing models, local model prompt bloat). Users expect seamless adapter behavior.

3. **Desktop startup and switching is slow** — Multiple reports of performance regressions in session switching (#66033 fix addresses this), auto-scroll frustration (#65714), and the 5-second model picker (#65650).

4. **Configuration and state are fragile** — Users report config writes being rejected (#60551), sessions invisible across sources (#60020), and per-profile settings silently ignored (#66012, #65384).

### Satisfaction Signals
- Users are actively building integrations: Microsoft Teams adapter (#41152), plugin hooks (#8642), multi-gateway workflows (#45779)
- Feishu (Chinese enterprise platform) and Telegram are getting dedicated fixes, suggesting real-world deployment
- The localization framework PR (#23243) and the new zh-Hant translation PR (#66043) indicate a growing international community

### Notable User Quote
> *"I want to run Hermes with Claude as the model backend while staying on my Claude subscription, but the existing anthropic provider requires a Developer Platform API key and bills separately — so Claude-subscribed users effectively pay twice (subscription + per-token API)."* — Issue #25267 author, capturing a key user retention risk.

## Backlog Watch

### Unanswered High-Importance Issues

| Issue | Filed | Description | Days Open | Risk |
|-------|-------|-------------|-----------|------|
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | 2026-05-13 | Claude subscription OAuth (41 👍) | **65 days** | ❌ User retention risk; massive unaddressed demand |
| [#6741](https://github.com/NousResearch/hermes-agent/issues/6741) | 2026-04-09 | Structured session tracing with timestamps | **99 days** | ⚠️ Missing observability for profiling |
| [#8642](https://github.com/NousResearch/hermes-agent/issues/8642) | 2026-04-12 | Plugin status bar hook | **96 days** | ⚠️ Blocks plugin ecosystem maturity |
| [#54115](https://github.com/NousResearch/hermes-agent/issues/54115) | 2026-06-28 | BG Review OOM with local llama.cpp | **19 days** | ❌ Affects self-hosted users |
| [#53491](https://github.com/NousResearch/hermes-agent/issues/53491) | 2026-06-27 | Skills security: guard off by default | **20 days** | ❌ Persistent security boundary issue |

### PRs Needing Maintainer Attention

- **PR #23243** (i18n localization framework) — Open since May 10 (68 days) with `needs-decision` label. The framework has architectural implications for both TUI and Dashboard. Inactivity here blocks downstream translation work (see #66043 filed today).
- **PR #55415** (Vietnamese Telex IME fix) — Open since June 30 (17 days) with `sweeper:blast-moderate`. Fixes a known bug (#53982) affecting Vietnamese-language users.

### Items That Just Closed or Merged (Watch for Regressions)
- #41904 — Codex app-server runtime thread context loss: closed as `implemented-on-main`
- #60020/#60047 — Session title uniqueness bugs: both closed with merged fixes
- #65835 — Kimi catalog missing k3: closed with PR #65969 merger — test that Kimi provider functions end-to-end

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest — 2026-07-17**

**1. Today's Overview**  
The PicoClaw project shows moderate activity today, with 9 open pull requests and 2 issues updated in the last 24 hours. No new releases were published, but the PR queue is unusually busy for a single day, signaling either planned feature work or a dependency maintenance push. The issue tracker is relatively quiet, with one long-standing bug reported on NanoKVM integration and one ARM64 launcher issue recently closed. Overall, the project appears to be in a maintenance-and-localization phase, with low user distress but accumulating stale open threads.

**2. Releases**  
No new releases were published today.

**3. Project Progress**  
No pull requests were merged or closed today. However, several important PRs remain open and are advancing through review or updates:
- **#3261**: Adds zh-TW locale and Traditional Chinese translations, extending WebUI and documentation localization.
- **#3118**: Proposes a remote Pico WebSocket mode for the agent, enabling external connection to the Pico service.
- **#3115**: Fixes a session-history corruption bug where inline base64 data URLs in tool output were misinterpreted as media attachments.

These represent meaningful feature and stability contributions, but none have been integrated as of today.

**4. Community Hot Topics**  
The most active item remains a stale support issue:
- **#3195** (3 comments): User reports that OpenAI GPT does not work on NanoKVM with default configuration. The issue has not received a maintainer response in 16 days, despite being marked stale. The underlying need appears to be better out-of-box compatibility for the new NanoKVM 2.4.0 integration, likely requiring either config defaults adjustment or documentation updates.

All other open items (PRs #3115, #3118) have no new comments today, indicating low community engagement beyond the original authors.

**5. Bugs & Stability**  
**Low severity**:  
- **#3195** [OPEN, stale] — GPT provider fails on NanoKVM with default config. No fix PR exists. Workaround unknown.
- **#3260** [CLOSED] — ARM64 launcher missing from releases. Closed with 0 comments, suggesting it was resolved or deemed a non-issue.

No new critical bugs or crash reports were filed today. The project appears stable for standard deployments, though the NanoKVM issue may affect a growing user segment.

**6. Feature Requests & Roadmap Signals**  
- **#3261** (zh-TW locale) signals growing demand for regional language support, likely driven by user base expansion in Taiwan.
- **#3118** (remote WebSocket mode) suggests a demand for distributed agent architectures, potentially for multi-device orchestration or remote management.
- The high volume of dependency bump PRs (#3235–#3238, #3262–#3263) indicates the team is actively maintaining compatibility with upstream libraries, a low-risk signal of health.

Predicting next minor release: likely to include the zh-TW locale, the WebSocket remote mode (if merged soon), and the media extraction fix (#3115).

**7. User Feedback Summary**  
- **Pain points**:  
  - NanoKVM users face immediate frustration with GPT provider configuration (#3195).  
  - ARM64 users previously encountered missing launcher binaries, though this appears resolved (#3260).  
- **Satisfaction signals**:  
  - No widespread complaints or performance regression reports.  
  - Active community contributors (PeterDaveHello, jp39, dependabot) indicate ongoing investment.

Overall sentiment is neutral-to-positive, with localized friction for specific hardware/deplyment combinations.

**8. Backlog Watch**  
- **#3195** (stale, 16 days without maintainer reply) — Critical for NanoKVM adopters. Risks user churn if left unaddressed.
- **#3118** (stale, 35 days open) — Feature PR with no comments since June 12. Needs maintainer review or decision.
- **#3115** (stale, 35 days open) — Bug fix affecting session history integrity. Unreviewed despite clear impact.

These three threads represent the highest priority backlog items requiring maintainer attention.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-17

## Today's Overview
NanoClaw is experiencing a significant burst of development activity, with **19 pull requests** updated in the last 24 hours and **3 open issues** demanding attention. The project is actively addressing a critical bug where failing channel adapters are silently swallowed during boot, and a persistent false-positive quota logging issue is generating noise in production. With three PRs merged/closed today—the most notable being the WhatsApp Cloud instance key fix (#2913) and its documentation follow-up (#2914)—the maintainers are clearly focused on stabilizing the channel adapter registry. The project health is **moderately active but under strain**: a high PR volume suggests strong community contribution, but the presence of a security fix (#3065) and a long-dormant Signal image attachment bug (#2695, 40 days open) indicate some areas of technical debt.

## Releases
**No new releases** were published today. The latest release remains unspecified, though changelog work for v2.1.17 (PR #2798, still open) suggests an upcoming version is being prepared.

## Project Progress
**3 PRs merged/closed today:**
- [#2913 (merged) — fix(whatsapp-cloud): register bridge under distinct 'whatsapp-cloud' instance key](https://github.com/nanocoai/nanoclaw/pull/2913) — Resolves the high-priority WhatsApp Cloud collision bug (#2911) where two WhatsApp channels registered under the same `whatsapp` key, silently disabling one.
- [#2914 (merged) — docs(add-whatsapp-cloud): document webhook route + state-namespace migration](https://github.com/nanocoai/nanoclaw/pull/2914) — Documentation follow-up for the instance key migration.
- [#3061 (closed) — Custom (non-substantive PR)](https://github.com/nanocoai/nanoclaw/pull/3061) — Closed without merging; appears to be a test or mistaken submission.

**Features advancing in review:**
- **LLM quota fallback**: Two competing/overlapping implementations—#3057 (Claude→Codex per-agent-group fallback) and #3069 (host-orchestrated backup LLM provider). This indicates active but potentially uncoordinated feature work.
- **Dial channel adapter**: Two PRs (#3041, #3050) adding SMS + AI voice call support via Dial, including a setup wizard.
- **Security hardening**: #3065 fixes a CWE-306 (Missing Authentication) vulnerability in the loopback webhook (GHSA-h9g4-589h-68xv).

## Community Hot Topics
**Most Active Issues:**
- [#3016 — Every rate_limit_event is logged as a quota error](https://github.com/nanocoai/nanoclaw/issues/3016) — 2 comments. A production noise issue: since PR #2965, every `rate_limit_event`—even those with status "allowed"—is logged as "Error: Rate limit (quota)". One user reported 82 occurrences in a week, all on successfully delivered turns. This is causing alert fatigue and masking real quota issues.
- [#2916 — "hi" (spam/low-effort)](https://github.com/nanocoai/nanoclaw/issues/2916) — 2 comments. Appears to be a test or spam issue from a new user with no project history.
- [#3064 — Channel adapter that fails to start is swallowed](https://github.com/nanocoai/nanoclaw/issues/3064) — 0 comments but critical: a silent boot-time failure where `initChannelAdapters()` logs but does not propagate adapter setup errors, leaving the host reporting healthy while the channel runs deaf. KeepAlive cannot recover it.

**Underlying needs:** Users are demanding **reliable, observable production deployments**. The quota-logging noise issue (#3016) and the silent adapter failure (#3064) both erode trust in the system's observability. The community needs better error classification (distinguishing "allowed" from actual quota errors) and fail-fast behavior on boot-time adapter failures.

**Active PRs with high attention:**
- [#3070 — Fix WhatsApp sender identity divergence](https://github.com/nanocoai/nanoclaw/pull/3070) — Fresh PR resolving a related WhatsApp issue (#3069) where Baileys and Cloud paths assign the same phone number different user IDs, breaking cross-channel user identity.
- [#3067 — Fix/channel adapter startup swallow](https://github.com/nanocoai/nanoclaw/pull/3067) — Directly addresses issue #3064, proposing `ChannelAdapterStartupError` and non-zero exit on boot failure.

## Bugs & Stability
**Ranked by severity:**

1. **[CRITICAL] Silent channel adapter failure (#3064, OPEN)** — `initChannelAdapters()` catches and logs adapter setup failures, then continues boot. Host reports healthy, but channel is deaf. **Fix PR exists**: #3067 (authored by bissamiftikhar, opened same day) proposes throwing `ChannelAdapterStartupError` and non-zero exit.
   
2. **[HIGH] False-positive quota error logging (#3016, OPEN)** — Since PR #2965, every `rate_limit_event` with status "allowed" is logged as a quota error. Severity is high because it masks real failures and fills logs with noise. **No fix PR yet.**

3. **[HIGH] WhatsApp sender identity divergence (#3070, PR open)** — Two WhatsApp paths assign different user IDs for the same phone number. This breaks cross-channel user identity and message routing. **Fix in review** (#3070).

4. **[MEDIUM] Abandoned poll loops stealing test messages (#2851, OPEN, 23 days)** — Test helpers leave poll loops running after timeout, causing test isolation failures. **Fix PR exists** (#2851) but has been open since 2026-06-24.

5. **[MEDIUM] Signal image attachments unreadable in container (#2695, OPEN, 40 days)** — Signal adapter emits host paths not mounted in the container. **Fix PR exists** but is the oldest open PR, suggesting maintainer attention is needed.

6. **[LOW] Zombie processes in agent containers (#3060, PR open)** — Agent containers lack PID 1 reaping (`--init` flag), causing zombie processes. **Fix in review**.

**Security fix:** #3065 addresses a loopback webhook authentication vulnerability (GHSA-h9g4-589h-68xv). Any unprivileged process on the same host could forge actions.

## Feature Requests & Roadmap Signals
**Strong roadmap signals this week:**
- **LLM provider fallback** — Two competing PRs (#3057, #3069) both aim to implement automatic failover when Claude hits usage limits. This suggests a looming v2.2 feature where NanoClaw becomes provider-agnostic. Likely to land in next release.
- **Dial channel integration** — Two PRs (#3041, #3050) adding SMS + AI voice calls. Indicates expansion beyond chat into telephony.
- **Scheduled task cross-session visibility (#3068)** — Fixing a UX gap where task tools give poor feedback across sessions. Shows attention to operational UX.
- **Container runtime hardening (#3060)** — Adding `--init` for proper process reaping. Signals preparation for production-grade container deployments.

**Prediction:** The next release (v2.1.17 or v2.2.0) will likely include: WhatsApp Cloud instance key fix (already merged), one LLM fallback implementation, the channel adapter startup fix (#3067), and the security hotfix (#3065).

## User Feedback Summary
**Pain points expressed:**
- "Every turn that completed normally logged a quota error. My install logged it 82 times in about a week." — User glifocat (#3016) expressing alert fatigue and distrust of error logs.
- "Boot continues and the host logs 'NanoClaw running' with that channel silently dead." — User plongth (#3064) frustrated by silent failures.
- "Installing both silently disables one of them and misroutes its messages." — User glifocat (#2911) on the WhatsApp collision bug (now fixed).

**Satisfaction signals:**
- High PR submission volume (19 in 24h) suggests an engaged contributor community.
- Multiple contributors (QuantumBreakz, glifocat, bissamiftikhar, salvodmt) are actively fixing bugs they encountered, indicating good dogfooding practices.

**Use cases revealed:**
- Production deployments with multiple chat channels (WhatsApp Cloud + native WhatsApp) needing reliable coexistence.
- Automated operations relying on scheduled tasks across different session types.
- Containerized deployments needing proper process lifecycle management.

## Backlog Watch
Items requiring maintainer attention due to age or importance:

- **PR #2695 — Signal image attachments unreadable** — [Open since 2026-06-06 (40 days)](https://github.com/nanocoai/nanoclaw/pull/2695). No maintainer activity. Blocks Signal channel from receiving images in container deployments. Authored by cfis; needs review.
- **PR #2851 — Abandoned poll loops in tests** — [Open since 2026-06-24 (23 days)](https://github.com/nanocoai/nanoclaw/pull/2851). Causes test flakiness in CI. Authored by foxsky; has been waiting for review.
- **PR #2798 — Changelog for v2.1.17** — [Open since 2026-06-17 (29 days)](https://github.com/nanocoai/nanoclaw/pull/2798). Documentation-only PR by glifocat. Delayed changelog suggests release engineering may be bottlenecked.
- **Issue #3016 — False quota error logging** — [Open since 2026-07-11 (5 days)](https://github.com/nanocoai/nanoclaw/issues/3016). High-impact but no fix PR yet. The underlying PR #2965 likely needs a revert or correction.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured digest for the NullClaw project, based on the provided data snapshot from 2026-07-17.

---

## NullClaw Project Digest: 2026-07-17

### 1. Today's Overview
The project is in a **low-activity state** for the day, with zero merged PRs and no new releases. On the surface, the commit history shows no movement, but a single critical Stability issue has been opened regarding a crash on inbound Telegram messages. This specific bug—causing a segmentation fault on aarch64 Linux—represents a significant blocker for users running the `nullclaw-gateway` service on that architecture. While the project maintainer does not appear to have responded yet, this issue is likely to demand immediate attention due to its severity.

### 2. Releases
**None.** No new releases or pre-releases were published on 2026-07-17.

### 3. Project Progress
**No Pull Requests were updated today.** There are no indications of merged code, feature completions, or bug fixes landing in the main branch within the last 24 hours.

### 4. Community Hot Topics
Since there is only one active item, it leads community discussion by default.

- **[Issue #976: SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976)** (Active, 1 comment, 0 👍)
    - **Underlying Need:** This is the sole active discussion. The user is reporting a critical crash, implying a need for high-priority debugging and a hotfix for aarch64 deployments. The "blocked" nature of this bug (process crashes before service responds) suggests that users are seeking a workaround or immediate kernel/configuration-level mitigation.

### 5. Bugs & Stability
One new bug report has been filed, ranking as **Critical** due to its crash-loop nature and direct impact on core functionality.

- **[Issue #976: SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976)** (Severity: **Critical**)
    - **Details:** The bug occurs specifically on aarch64 Linux with `nullclaw v2026.5.29`. The inbound worker thread spawning with a ~512 KB stack is identified as the root cause of the overflow leading to the SIGSEGV.
    - **Impact:** Process is non-functional; every inbound message kills the gateway service (crash-loop). The user cannot receive any replies.
    - **Fix Status:** **No fix PR exists.** The issue is awaiting a maintainer response or a developer's debugging.

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were submitted today. However, the nature of Issue #976 implies a strong implicit request: **A robust worker thread stack size configuration or automatic stack size detection for different architectures.** Given that the crash is architecture-specific (aarch64), the next minor version (e.g., v2026.6.x) will likely include a fix adjusting the `pthread` stack size for Telegram gateway workers.

### 7. User Feedback Summary
- **Pain Points:**
    - **Architecture Lockout:** The user (wonhotoss) reports a complete inability to run the gateway on aarch64 servers, a common architecture for low-power/edge homelab deployments.
    - **Crash-Loop Consequence:** Running the service with `Restart=always` leads to a rapid crash loop, causing logs to fill up and rendering the bot useless.
- **Satisfaction:** Notably low regarding stability; the experience is "broken out of the box" for this specific use case.
- **Use Case:** The user is running a self-hosted gateway for a Telegram bot, indicating a standard "personal AI assistant" deployment, but the environment (aarch64) is not supported by the current configuration.

### 8. Backlog Watch
No long-standing issues or unanswered PRs requiring maintainer attention are present in the *data provided* for the last 24 hours. However, **Issue #976** is currently unattended (0 maintainer comments) and is rapidly becoming a priority item for the backlog. The clock is ticking on this crash bug, as it is a regression/blocker for a platform-specific cohort of users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-17

## Today's Overview
IronClaw remains in a period of high-intensity development, with **39 PRs and 17 Issues** updated in the last 24 hours, indicating sustained heavy contributor activity. The project is actively decomposing its monolithic `ironclaw_reborn_composition` crate (the largest in the workspace at ~156k LOC, ~24% of all production code) into smaller, focused crates, as signaled by the new refactoring issue #6168. Operational velocity is high: **11 PRs were merged or closed** today, including critical OAuth lifecycle fixes and a major dependency bump batch. However, the project continues to surface **three distinct bug classes** around UX state handling (first-message blankness, stuck conversations after failures, false "previous run in progress" status), suggesting that while the backend and extension architecture are progressing rapidly, the frontend error recovery paths need hardening.

## Releases
**No new releases** were published in the last 24 hours. The most recent release candidate remains tracked in open PR #5598 (`chore: release`), which proposes bumps for `ironclaw_common` (0.4.2 → 0.5.0, **breaking changes**), `ironclaw_safety` (0.2.2 → 0.2.3, compatible), and `ironclaw_skills` (0.3.0 → 0.4.0, **breaking changes**), but this PR has not yet been merged.

## Project Progress
**11 PRs were merged or closed** today, reflecting concrete forward movement across several fronts:

- **OAuth lifecycle stabilization:** PR #6130 (merged, then reverted in #6166) — a complex OAuth flow-lifecycle hygiene fix (supersede-on-start, durable PKCE verifiers, expiry-honest projections) was merged and then reverted for behavioral re-evaluation. The follow-up #6169 (draft) re-applies the fix with additional Slack connection-epoch deletion.
- **Conformance testing infrastructure:** PR #6114 (merged) — a shared OAuth-flow conformance suite over both fake (`InMemoryAuthProductServices`) and durable (`FilesystemAuthProductServices`) managers, closing a behavioral divergence gap.
- **Dependency updates:** Two large batch bumps merged: PR #6115 (25 updates) and PR #6165 (26 updates), including `agent-client-protocol` 0.10.4 → 1.2.0, `rustls` 0.23.41 → 0.23.42.
- **UI redesign split:** PR #5565 (merged) — the large onboarding/NUX demo PR was merged, and its successor is now split into two open PRs: #6162 (agent workspace redesign) and #6163 (chat-first onboarding delta).
- **Slack connection-epoch cleanup:** Issue #6164 was closed via PR #6169's approach (deleting redundant state machine, deriving liveness from auth flows).
- **Admin secrets management:** Issue #6118 was closed — per-user secrets management now exposed in the Admin UI.
- **Workspace localization:** Issue #6117 was closed — workspace now displays localized region names and human-readable file sizes.

## Community Hot Topics
| Item | Type | Engagement | Topic |
|------|------|------------|-------|
| [#6168](https://github.com/nearai/ironclaw/issues/6168) | Issue | 2 comments, 0 👍 | **Shrinking `ironclaw_reborn_composition` god-crate** — proposes carving out a `crate-minimal` sub-crate to reduce from 24% (~156k LOC) to ~10% of production code, enforced by architecture boundary tests |
| [#6155](https://github.com/nearai/ironclaw/issues/6155) | Issue | 2 comments, 0 👍 | **Stuck conversations after failed runs** — after a provider-unavailable failure, follow-up messages receive no response, leaving chat completely unresponsive |
| [#6126](https://github.com/nearai/ironclaw/issues/6126) | Issue | 2 comments, 0 👍 | **No loading state on first message** — first message in a new chat shows blank UI, no streaming or typing indicator |
| [#6127](https://github.com/nearai/ironclaw/issues/6127) | Issue | 2 comments, 0 👍 | **False "Previous run still in progress"** — first run displays stale-run status despite no previous runs existing |
| [#6158](https://github.com/nearai/ironclaw/issues/6158) | Issue | 1 comment, 0 👍 | **zh-TW Traditional Chinese localization request** — user requests locale support beyond existing zh-CN |

**Analysis:** The three P2/P3 bug-bash issues (#6155, #6126, #6127) are the most visible community pain points, all involving lack of user feedback during async operations (loading, error states, run status). The god-crate refactoring (#6168) represents a major internal health initiative that will affect all contributors. The localization request (#6158) is a relatively low-friction community contribution opportunity.

## Bugs & Stability
**Six new or updated bugs** reported today, ranked by severity:

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **P2 – High** | [#6155](https://github.com/nearai/ironclaw/issues/6155) | **Conversation stuck after failed run** — follow-up messages receive no response, chat completely unresponsive with no error indication | No fix PR yet |
| **P2 – High** | [#6170](https://github.com/nearai/ironclaw/issues/6170) | **Filesystem access via shell escape** — multi-tenant users can execute `ls -all` unbounded to workspace via WebUI shell agent commands | No fix PR yet |
| **P3 – Medium** | [#6126](https://github.com/nearai/ironclaw/issues/6126) | **No loading/streaming state on first message** — blank UI appears frozen | No fix PR yet |
| **P3 – Medium** | [#6127](https://github.com/nearai/ironclaw/issues/6127) | **False "Previous run still in progress"** on first execution | No fix PR yet |
| **P3 – Medium** | [#6149](https://github.com/nearai/ironclaw/issues/6149) | **Silent workspace download failures** — errors caught without user feedback | No fix PR yet |
| **P3 – Low** | [#6145](https://github.com/nearai/ironclaw/issues/6145) | **Toast lifecycle/accessibility issues** — no manual dismiss, 2.6s auto-dismiss too short, hover doesn't pause timer | No fix PR yet |

The **most critical bug** is **#6170** (filesystem access escape on multi-tenant instances), which poses a security boundary violation. **#6155** (stuck conversations) is the highest-impact UX bug, as it prevents any recovery after a routine failure.

## Feature Requests & Roadmap Signals
- **zh-TW Traditional Chinese localization** ([#6158](https://github.com/nearai/ironclaw/issues/6158)) — simple i18n addition, likely to be accepted given existing zh-CN support
- **Multi-CPU architecture builds** ([#6160](https://github.com/nearai/ironclaw/issues/6160)) — verify release pipeline builds across CPU architectures (aarch64, x86_64, macOS/Windows/Linux)
- **Root-path WebUI serving** ([#6142](https://github.com/nearai/ironclaw/issues/6142)) — move from `/v2/chat` to `/chat`, a clean-up after v1 retirement
- **CLI rename `ironclaw-reborn` → `ironclaw`** ([#6143](https://github.com/nearai/ironclaw/issues/6143)) — product naming finalization after #6077, #6122, #6123 retire v1 runtime
- **Theme selection in Appearance settings** ([#6146](https://github.com/nearai/ironclaw/issues/6146)) — expose light/dark toggle on dedicated settings page

**Likely next-version candidates:** The three rebranding items (#6142, #6143) are straightforward follow-ups to the v1→Reborn transition and could land in the next release. The zh-TW localization (#6158) is a low-effort community contribution. The toast system overhaul (#6145) and theme controls (#6146) are quality-of-life improvements unlikely to block a release.

## User Feedback Summary
**Explicit user-reported pain points:**

1. **"The chat feels broken after any failure"** ([#6155](https://github.com/nearai/ironclaw/issues/6155)) — users cannot recover conversations after routine provider failures, and receive no error feedback. **High dissatisfaction.**
2. **"New chats appear frozen"** ([#6126](https://github.com/nearai/ironclaw/issues/6126)) — first message sends result in a blank UI with no feedback. **Moderate dissatisfaction** — users perceive the app as hung.
3. **"Run status is misleading on first execution"** ([#6127](https://github.com/nearai/ironclaw/issues/6127)) — false "previous run still in progress" creates confusion about actual system state. **Moderate dissatisfaction.**
4. **"Workspace downloads silently fail"** ([#6149](https://github.com/nearai/ironclaw/issues/6149)) — no error toast or feedback, users cannot differentiate between "still downloading" and "failed." **Moderate dissatisfaction.**
5. **"No zh-TW locale available"** ([#6158](https://github.com/nearai/ironclaw/issues/6158)) — Traditional Chinese users forced into zh-CN or English. **Low dissatisfaction** but clear community need.

**Use case signals:** The Telegram channel extension PR (#6159) and the background service install PR (#6172) indicate growing demand for production deployment (systemd/launchd) and multi-channel (Telegram) agent entrypoints. The unified extension runtime PR (#6116) suggests architectural maturity for third-party integrations.

## Backlog Watch
| Issue | Days Open | Last Update | Subject | Risk |
|-------|-----------|-------------|---------|------|
| [#4471](https://github.com/nearai/ironclaw/issues/4471) | **43 days** | 2026-07-17 | **Track Reborn runtime decomposition** — `runtime.rs` exceeds 3,000 lines, needs extraction of trigger polling, cancellation, skill activation | Medium — this is a tracking issue, but the file continues to grow without action |
| [#5978](https://github.com/nearai/ironclaw/issues/5978) | **6 days** | 2026-07-16 | **Require read-before-edit in Reborn coding tools** — models editing stale views, overwriting blind | High — this is a correctness bug in agent tool use, but PR #5978 is open (stack 3/4) |
| [#6116](https://github.com/nearai/ironclaw/issues/6116) | **2 days** | 2026-07-16 | **Unified generic extension runtime** — 92-commit reconciliation from fork point | High — this is a massive architecture PR that will shape all future extensions; stalled pending #6130 re-evaluation |

**Maintainer attention needed:** The **43-day-old issue #4471** on runtime decomposition is the oldest open item and reflects a known architectural debt that continues to grow. The **read-before-edit issue #5978** is a significant correctness concern for the Reborn agent tool use that has an open PR but appears to be blocked by its position in a 4-PR stack.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-17

## 1. Today's Overview
Project activity remained **moderate to high**, with **18 PRs updated** in the past 24 hours—14 of which were closed or merged—indicating a strong focus on landing fixes and refinements. Only **3 issues** saw updates, all of which are now stale (last active April), suggesting the community backlog is quiet but persistent. No new releases were cut, though the recent `Release/2026.7.16` merge (PR #2344) points to an imminent tag. Overall, the team appears to be consolidating cowork and UI polish work after a flurry of feature merges earlier in July.

## 2. Releases
**No new releases today.**  
The latest visible release event is the merged `Release/2026.7.16` PR (#2344), which was closed on July 16 but not yet tagged on GitHub. No changelog, breaking changes, or migration notes are available yet.

## 3. Project Progress (Merged/Closed PRs)
Today saw **14 PRs closed**, spanning multiple areas:

### Cowork & Streaming Stability
- **PR #2329** — Prevent conversation scroll jumps during streaming (fixed pending auto-scroll cancellation).
- **PR #2289** — Fixed stalled compaction retry maintenance by reusing recoverable retry wait path.
- **PR #2292** — Stabilized steer follow-up routing (added Codex-style queued follow-ups, corrected session start, scoped state updates).
- **PR #2300** — Cowork steer queue now supports file attachments (drag, paste, text selection, images).
- **PR #2307** — Refined prompt modes: moved Goal/Steer status bars above input, removed Plan Mode switch, fixed queued steer follow-ups.
- **PR #2313** — Fixed steer queue submission to submit only the selected item (preserved FIFO, added diagnostics).

### Windows & UI Polish
- **PR #2302** — Added Windows-only branded title bar with logo, native controls, and dynamic compose/update badge.
- **PR #2310** — Added folder context attachments (drag/drop folders as path context, not file uploads).
- **PR #2339** — Aligned update card header content for narrow sidebars.

### Build & Refactoring
- **PR #2345** (OPEN) — Localization of NSIS web installer download prompts and progress bar fix.
- **PR #2343** — Refactored clipboard attachment extraction into a testable helper.

### Community PRs (merged today)
- **PR #1362** — Cowork permission modal now closes with ESC key.
- **PR #1364** — Added model selector to home page prompt input toolbar (dual-selector, shared Redux store).
- **PR #1367** — Validated duplicate scheduled-task names with shared helpers and IPC error codes.

## 4. Community Hot Topics
No issues or PRs saw heavy discussion or reactions in the last 24 hours. The most commented items are all stale (April), with **2 comments each**:

- **#1317 / #1318** — Sidebar keyboard shortcut kbd hints (Issue + PR pair). Community contributor `MaoQianTu` has a PR open, but it has not been merged. Underlying need: **discoverability of keyboard shortcuts** for power users.
- **#1319 / #1320** — Skeleton loading state for conversation list (Issue + PR pair). Same contributor. Underlying need: **reducing UI flicker and confusion** on startup.

These patterns indicate that community contributors are active but awaiting maintainer review/merge.

## 5. Bugs & Stability
**No new bugs were reported today.** All issues updated are stale. However, PR activity reveals several recent fixes that improved stability:

| Severity | Bug | Fix PR | Status |
|----------|-----|--------|--------|
| **High** | Cowork scroll jumps during streaming | #2329 | Merged |
| **High** | Stalled compaction retry never cleared | #2289 | Merged |
| **Medium** | Steer queue submitted all items instead of only selected | #2313 | Merged |
| **Low** | Settings tab overlays (memory editor, test modal) not dismissed on tab switch | #1321 | OPEN (stale) |
| **Low** | Duplicate scheduled-task names allowed | #1367 | Merged |

The persistent open CRITICAL: **#1367** was already merged, and the only remaining open fix (#1321) is from April and stale.

## 6. Feature Requests & Roadmap Signals
Two long-standing community requests remain unmerged:

1. **Keyboard shortcut visibility (#1317/#1318)** — Add `<kbd>` badges to sidebar buttons. PR exists, code complete. Likely to land in next minor release if maintainers review.
2. **Skeleton loading for session list (#1319/#1320)** — Distinguish "loading" from "empty" state. PR exists, code complete. Same status.

**Team-driven signals:** Recent PRs suggest the following may be planned for upcoming releases:
- **Folder as context attachments** (PR #2310) — just merged, likely part of cowork enhancements.
- **Windows native title bar** (PR #2302) — platform-specific UX improvement.
- **NSIS installer localization** (PR #2345) — open, aimed at non-English users.

No major new feature requests were filed today.

## 7. User Feedback Summary
While no direct user feedback appeared today, stale issues reveal recurring pain points:

- **Internationalization (i18n) gaps** — Issue #1361 (closed) reported "Delete" button showing English instead of Chinese. This was marked stale but closed—likely resolved in a prior release.
- **Startup confusion** — Users see "no conversations" briefly before data loads (#1319). PR #1320 would address this via skeleton screens.
- **Keyboard shortcut discoverability** — Users find shortcuts only through settings (#1317). PR #1318 would add inline hints.

Overall satisfaction appears neutral; the project is stable but community contributions are waiting for maintainer bandwidth.

## 8. Backlog Watch
Several important items remain open without maintainer response since April:

| Item | Author | Last Update | Impact | Link |
|------|--------|-------------|--------|------|
| **#1318** — Keyboard shortcut kbd hints (PR) | MaoQianTu | 2026-04-02 | Medium — UX improvement for power users | [PR #1318](https://github.com/netease-youdao/LobsterAI/pull/1318) |
| **#1320** — Skeleton loading for session list (PR) | MaoQianTu | 2026-04-02 | Medium — reduces startup confusion | [PR #1320](https://github.com/netease-youdao/LobsterAI/pull/1320) |
| **#1321** — Fix settings tab overlay dismissal (PR) | kayo5994 | 2026-04-02 | Low — UI glitch on tab switch | [PR #1321](https://github.com/netease-youdao/LobsterAI/pull/1321) |

All three have no maintainer comments or re-review requests. They represent **community contributions awaiting attention** — addressing them would improve contributor morale and project health.

---

**Generated for 2026-07-17** | Data source: github.com/netease-youdao/LobsterAI

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-17

## Today's Overview
The Moltis project shows moderate activity today with 3 merged PRs and a new release, but no new issues were opened or updated in the last 24 hours, indicating a focused maintenance and feature-rollout phase. All three PRs were authored by **penso** and closed on July 16, covering provider support, UI fixes, and agent status improvements. The single new release (20260716.01) bundles these changes and likely represents a stable point release. Project health is solid, though the zero open issues suggest a quiet community feedback front or pending backlog.

## Releases
- **20260716.01** — A point release dated 2026-07-16. While no explicit release notes or breaking changes are documented, the release likely includes the three merged PRs detailed below. No migration notes are currently provided.

## Project Progress
Three PRs were merged/closed today, all by **penso**:

- **PR #1155** ([link](https://github.com/moltis-org/moltis/pull/1155)) — **Improve agent and sandbox status feedback**. Broadcasts external-agent session metadata after IDs become available, persists external-agent history for full context requests, and treats installed external agents as available chat backends (including Apple Container setup). This enhances multi-agent session continuity and backend integration.

- **PR #1156** ([link](https://github.com/moltis-org/moltis/pull/1156)) — **Add Kimi K3 provider support**. Extends the Moonshot/Kimi model catalog with Kimi K3 and Kimi K2.7 Code Highspeed, updates reasoning-effort handling, provider defaults, config templates, docs, and key-help links. Also includes onboarding end-to-end test coverage. This is a significant new model provider addition.

- **PR #1154** ([link](https://github.com/moltis-org/moltis/pull/1154)) — **Fix(web): show direct mode when sandbox is unavailable**. Fixes the web UI to display a "direct" label when no sandbox backend is present, disables the sandbox toggle and image selector when only fallback execution is available, and adds E2E coverage for the unavailable-sandbox scenario. A targeted usability fix.

## Community Hot Topics
There are no active community discussions today—all three PRs have zero comments and zero reactions. This suggests the changes were reviewed internally or that community engagement is currently low. The underlying needs reflected by these PRs (provider expansion, sandbox UX clarity) are developer-oriented and potentially coming from internal team priorities rather than community requests.

## Bugs & Stability
No bugs, crashes, or regressions were reported today. The sole fix-type PR (#1154) addresses a web UI mislabeling issue (sandbox indicator showing incorrectly when no sandbox is available), which is a low-severity UI bug. No critical stability issues are present.

## Feature Requests & Roadmap Signals
No user-submitted feature requests were recorded today. The merged PRs suggest the project's near-term focus is on:
- Expanding model provider support (Kimi K3)
- Improving agent/sandbox metadata handling
- Refining web UI UX for sandbox state

These are likely to reappear in the next version as incremental improvements.

## User Feedback Summary
No user feedback, pain points, or satisfaction/dissatisfaction signals were recorded in the last 24 hours. The lack of issue creation suggests either low usage friction or low community engagement at this time.

## Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified—the open issue count is zero. The backlog appears clean and fully addressed in this cycle.

---

*Generated from Moltis GitHub data, snapshot 2026-07-17.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-17

## Today's Overview
Project activity remains **very high** with 45 issues and 45 PRs updated in the last 24 hours. A significant 49% closure rate on issues (22 of 45) and 58% merge/close rate on PRs (26 of 45) indicate strong maintainer engagement. However, the volume of open issues continues to grow, with 23 open issues remaining active. The emergence of several Windows-specific regressions (UAC elevation, startup hangs) signals potential quality gaps in the v2.0.0.post2 release. No new releases were cut today, suggesting a stabilization phase is underway.

## Releases
No new releases were published today.

## Project Progress
**26 PRs were merged/closed today**, with key improvements:

- **Merged** — `6192`: Mount host timezone files in Docker containers to sync container time with host (fixes cron/log time drift)
- **Merged** — `6166`: Preserve whitespace in streaming thinking/text deltas — fixes the "glued together" text blocks during streaming
- **Merged** — `6180`: Refresh `updated_at` on user messages and invalidate stale message caches — fixes session list ordering after v2.0 upgrade
- **Merged** — `6185`: Adapt e2e test selectors for v2.0.0 UI redesigns
- **Merged** — `6191`: Resolve `file://` URIs in DataBlock to local paths before formatting
- **Merged** — `6142`: Add form validation for `auto_memory_interval` (must be int >= 0, disallow empty)
- **Merged** — `6200`: Fix `cron update` preserving untouched runtime and request fields
- **Merged** — `6171`: Add dream schedule toggle to prevent default cron expression from overriding user intent
- **Merged** — `6194`: Add console vitest coverage to nightly CI sweep

## Community Hot Topics

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#6116 — CLOSED](https://github.com/agentscope-ai/CoPaw/issue/6116) | 6 | Agent doom-loop calling same tool repeatedly (marked wontfix) |
| [#6161 — OPEN](https://github.com/agentscope-ai/CoPaw/issue/6161) | 5 | **Critical**: Windows post-update blocks non-admin startup (Waiting for HTTP ready...) |
| [#6158 — OPEN](https://github.com/agentscope-ai/CoPaw/issue/6158) | 5 | 28M token consumption with no user activity — serious billing concern |
| [#6196 — CLOSED](https://github.com/agentscope-ai/CoPaw/issue/6196) | 5 | Docker container log timestamps always UTC despite user_timezone config |
| [#5995 — OPEN](https://github.com/agentscope-ai/CoPaw/issue/5995) | 5 | Messages silently dropped when session is busy — no queue, no error |
| [#6048 — OPEN](https://github.com/agentscope-ai/CoPaw/issue/6048) | 5 | Feature request: allow CIDR notation in whitelist config |
| [#6129 — CLOSED](https://github.com/agentscope-ai/CoPaw/issue/6129) | 5 | Missing spaces/linefeeds in thinking blocks during streaming |

**Analysis:** The Windows UAC/admin regression ([#6161](https://github.com/agentscope-ai/CoPaw/issue/6161), [#6169](https://github.com/agentscope-ai/CoPaw/issue/6169)) is the most destabilizing issue this week — it breaks startup for all non-admin Windows users. The silent message drop ([#5995](https://github.com/agentscope-ai/CoPaw/issue/5995)) and the billing anomaly ([#6158](https://github.com/agentscope-ai/CoPaw/issue/6158)) represent trust-eroding bugs that damage user confidence. The **token usage without user activity** issue is particularly alarming and may require urgent investigation.

## Bugs & Stability

**Critical Severity:**
- **[#6161](https://github.com/agentscope-ai/CoPaw/issue/6161) — Windows non-admin startup hang**: After Windows update, `.bat` and `.vbs` launchers freeze at "Waiting for HTTP ready..." unless Run as Administrator. Workaround exists but breaks headless/autostart workflows. Related: [#6169](https://github.com/agentscope-ai/CoPaw/issue/6169) also reports forced UAC elevation. **Fix PR**: [#6127](https://github.com/agentscope-ai/CoPaw/pull/6127) (conditional UAC elevation) is open.
- **[#6158](https://github.com/agentscope-ai/CoPaw/issue/6158) — 28M token consumption without user activity**: User reports DeepSeek billing spike while QwenPaw was idle. No root cause identified yet. **No fix PR exists.**

**High Severity:**
- **[#5995](https://github.com/agentscope-ai/CoPaw/issue/5995) — Silent message drop when session busy**: Messages received by Feishu webhook are silently dropped without queueing. **No fix PR exists.**
- **[#6116](https://github.com/agentscope-ai/CoPaw/issue/6116) — Agent doom-loop**: Repeatedly calls same tool with same parameters in single turn (marked wontfix). **No fix PR.**
- **[#6047](https://github.com/agentscope-ai/CoPaw/issue/6047) — New chat reopens old session after v2.0 upgrade**: Stale `chats.json` ordering and missing session index sync. **No fix PR.**

**Medium Severity:**
- **[#6155](https://github.com/agentscope-ai/CoPaw/issue/6155) — Multiple regressions on 1.x → 2.0 upgrade**: Embedding mapping bug, Auto-Memo config parsing issues, workflow disappearance. **No fix PR.**
- **[#6148](https://github.com/agentscope-ai/CoPaw/issue/6148) — Severe memory loss after upgrade**: Agent forgets conversation context; `/compact` appears to truncate rather than summarize. **No fix PR.**
- **[#6202](https://github.com/agentscope-ai/CoPaw/issue/6202) — Desktop progressive skill navigation broken**: Only shows first 20 skills; Docker/Web works fine. **No fix PR.**

**Lower Severity:**
- [#6187](https://github.com/agentscope-ai/CoPaw/issue/6187) — "Sync to skill pool" button returns `not_found` error
- [#6201](https://github.com/agentscope-ai/CoPaw/issue/6201) — PubMed MCP causes llama.cpp errors
- [#6074](https://github.com/agentscope-ai/CoPaw/issue/6074) — Switching agent mid-conversation loses chat history
- [#6156](https://github.com/agentscope-ai/CoPaw/issue/6156) — Clash proxy conflicts with QwenPaw

## Feature Requests & Roadmap Signals

**High-demand features (likely in next release):**
1. **[#6163](https://github.com/agentscope-ai/CoPaw/issue/6163) — Reusable Workflow Orchestration with Audit Trail**: Users want multi-step, structured workflow definitions that orchestrate agents with audit logging. This could become a flagship feature.
2. **[#6048](https://github.com/agentscope-ai/CoPaw/issue/6048) — CIDR notation for whitelist**: Enterprise deployment requirement.
3. **[#5880](https://github.com/agentscope-ai/CoPaw/issue/5880) — Policy management UI**: Add/remove/clear approval rules; currently requires manual `policy.yaml` editing.
4. **[#6160](https://github.com/agentscope-ai/CoPaw/issue/6160) — Bundled Python runtime for Desktop**: Users hit "Python not installed" errors when QwenPaw executes scripts; requests embedded interpreter.

**Mid-term signals:**
- **[#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) — Windows desktop GUI automation** (UIA + Tauri control mode): Feature PR still open, suggesting active development. This is a substantial new capability for agent-driven desktop control.
- Non-Tauri variant for Win7 compatibility ([#6076](https://github.com/agentscope-ai/CoPaw/issue/6076)): Niche but vocal user base.
- **[#6193](https://github.com/agentscope-ai/CoPaw/issue/6193) — Parallel MCP driver initialization**: Performance improvement (8x faster with 8 clients) — low-hanging fruit for next release.

## User Feedback Summary

**Positive signals:**
- Strong community engagement with detailed bug reports and reproduction steps
- Active contributions from first-time contributors ([#6203](https://github.com/agentscope-ai/CoPaw/pull/6203), [#6204](https://github.com/agentscope-ai/CoPaw/pull/6204))
- Users testing edge cases (MCP drivers, Docker deployments, cron scheduling)

**Pain points:**
- **v2.0 migration trauma**: Multiple users report regressions after upgrading: memory loss, session corruption, workspace features broken ([#6155](https://github.com/agentscope-ai/CoPaw/issue/6155), [#6148](https://github.com/agentscope-ai/CoPaw/issue/6148), [#6131](https://github.com/agentscope-ai/CoPaw/issue/6131))
- **Windows-specific frustration**: UAC prompts, non-admin breakage, proxy conflicts dominate Windows user complaints
- **Cost/trust concerns**: Unexplained token consumption erodes trust in billing transparency
- **Session reliability**: Messages dropped without error, doom-loops wasting API calls, context loss mid-conversation

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

| Issue | Age (days) | First Responder | Status |
|-------|-----------|-----------------|--------|
| [#4818](https://github.com/agentscope-ai/CoPaw/issue/4818) — Cron agent share_session=true execution trace empty | 48 | Closed (possibly stale) | Need confirmation if fixed |
| [#5880](https://github.com/agentscope-ai/CoPaw/issue/5880) — Policy cleanup feature | 7 | No maintainer response | Unacknowledged |
| [#6047](https://github.com/agentscope-ai/CoPaw/issue/6047) — New chat reopens old session | 4 | No maintainer response | Unacknowledged |

**PRs stalled or needing reviewer attention:**
- [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) — Windows desktop GUI automation (open for 33 days)
- [#6127](https://github.com/agentscope-ai/CoPaw/pull/6127) — Conditional UAC elevation (critical Windows fix, 2 days open)
- [#6190](https://github.com/agentscope-ai/CoPaw/pull/6190) — Auto-register tools via @tool_descriptor (1 day open)
- [#6198](https://github.com/agentscope-ai/CoPaw/pull/6198) — Bound multi-agent startup concurrency (1 day open)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest — 2026-07-17**

---

## 1. Today’s Overview

Project activity was narrowly focused on documentation and security classification work today. A total of five Issues were updated and closed within the past 24 hours, all authored by the same contributor (YLChen-007) and all sharing a common theme: classifying "D2 trigger way" entries for specific CVE-related security analysis. There were no new releases, no pull request activity, and no open or active Issues at the close of the day. While maintenance is proceeding in a targeted, systematic fashion, the absence of any PRs or feature-level commits suggests core development may be paused or in a stabilization phase.

## 2. Releases

No new releases were published today.

## 3. Project Progress

No pull requests were merged or closed today. No code changes or feature integrations are recorded for this digest period.

## 4. Community Hot Topics

All five Issues updated today share identical engagement metrics: each has exactly 1 comment and zero thumbs-up reactions. The comment count implies author self-validation rather than community discussion. The single most representative thread is:

- **#631** (docs): *Classify D2 trigger way for Issue 264* — [View Issue](https://github.com/qhkm/zeptoclaw/issues/631)

Underlying need: The recurring pattern indicates the project is conducting structured, batch-driven security documentation — likely validating and recording prompt-to-tool mediation paths for archived CVEs. This is a compliance/audit workflow, not a community-driven discussion.

## 5. Bugs & Stability

No bug reports, crash logs, or regression tickets were filed today. There are no open Issues in the repository. This suggests the current codebase is considered stable, or that new bug reports have been resolved or triaged immediately.

## 6. Feature Requests & Roadmap Signals

No feature requests or user-submitted proposals were recorded today. Given the batch documentation focus, the project appears to be in a housekeeping and security-evidence phase rather than a feature-growth phase.

*Prediction*: Once the `issue-security` JSON batch is complete, the next version may include automated trigger-way classification tooling or a dashboard for reviewing D2 prompt-chain evidence.

## 7. User Feedback Summary

No user feedback, pain points, or satisfaction signals were visible in today’s data. The only comments present are functional (workflow receipt confirmations). This likely reflects a contributor-driven pattern rather than broad end-user engagement at this time.

## 8. Backlog Watch

There are no long-unanswered Issues or PRs requiring maintainer attention. The current backlog is fully resolved (zero open Issues, zero open PRs). Maintainers appear to be keeping the queue clean, though this may also signal that external contributions are not currently flowing.

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-17

## Today's Overview

ZeroClaw is in an **intense development sprint** with 13 active issues and 48 open pull requests updated in the last 24 hours. The project is fully engaged on **two major feature tracks**: the channel plugin runtime stack (WebSocket, TCP, webhook ingress, unified capability catalog) and persistent memory subsystem parity. Only 1 issue and 2 PRs were closed/merged today, indicating the team is primarily pushing large, multi-PR stacks rather than closing small items. Activity is **very high** across security, architecture, and runtime domains, with several "risk:high" PRs nearing readiness. No new releases were cut today.

## Releases

No new releases today. The most recent release was v0.8.3, which shipped with three parallel provenance/signing mechanisms that issue #9101 now seeks to consolidate.

## Project Progress

**Merged/Closed Items (last 24h):**

- **#7320 [CLOSED]** — `[Tracker]: v0.8.3 milestone index and child trackers`. All six child trackers closed; feature freeze for v0.8.3 complete. Final release validation and publication remain.
- **#9107 [OPEN → merged]** — `chore(codeowners): remove singlerider from review routing`. Removed 44 CODEOWNERS entries after @singlerider left the project on 2026-07-15. Prevents stale PR routing.
- **#9108 [OPEN]** — `ci(firmware): add shared protocol host gate`. New CI script for firmware protocol crate formatting, Clippy, and locked-test checks.

**Active Feature Advancement (notable PRs updated today):**

- **#8908** — Unified capability catalog + `plugin list/enable/disable` (XL-sized, risk:high)
- **#8949** — Webhook GET + challenge-echo for plugin verification (XL, stacked on #8862)
- **#8863** — Host-mediated outbound WebSocket for channel plugins (XL, stacked on #8862)
- **#8855** — Mirror built-in channels via plugin `provides` (XL)
- **#8852** — Run installed WASM channel plugins (M)
- **#8923** — Host-mediated outbound raw TCP/TLS for channel plugins (XL)
- **#8486** — OpenAI chat completions endpoint (XL)
- **#8337** — Herdr agent reporting integration (L)
- **#8384** — Native Inkbox channel (email/SMS/voice/iMessage) (XL)

## Community Hot Topics

**Most Active Issues:**

1. **#9101 — Consolidate release attestation mechanisms** (5 comments)  
   *URL:* https://github.com/zeroclaw-labs/zeroclaw/issues/9101  
   *Analysis:* v0.8.3 shipped with three parallel signing/attestation mechanisms (cosign, GitHub attestations, SLSA generator) from two PRs that landed 26 hours apart. The redundancy costs CI time and ballooned from 53 to ~20 release assets. The community is discussing a unified "one signing story" — this is a **CI/DevOps health issue** that the maintainers are actively addressing.

2. **#8170 — RFC: In-app upgrade with environment-aware restart** (4 comments)  
   *URL:* https://github.com/zeroclaw-labs/zeroclaw/issues/8170  
   *Analysis:* Users want to update the gateway version from the web dashboard without leaving the interface. Currently version is a static tag; this RFC proposes in-app upgrade flows with environment-aware restart. This is a **high-value UX feature** that directly impacts operator experience, currently in-progress as an accepted RFC.

3. **#8560 — [Bug]: browser_open hangs the agent turn** (3 comments)  
   *URL:* https://github.com/zeroclaw-labs/zeroclaw/issues/8560  
   *Analysis:* S1 severity bug: `browser_open` hangs indefinitely when there's no display or the launcher process never returns. Also affects robot-kit TTS and channels ffmpeg. The unbounded subprocess wait pattern is the root cause. No fix PR yet, but issue has `status:in-progress` and `status:accepted`.

**Most Active PRs (by comment count, all showing "undefined" comment counts in data):**

- **#8486** — OpenAI chat completions endpoint (large, needs-author-action)
- **#8571** — Skip global credential fallback for OAuth target providers (needs-author-action)
- **#7960** — Gate execute_pipeline sub-tool execution with per-agent ToolAccessPolicy (needs-author-action)
- **#8966** — Fix max ctx fallback to use provider context_window (needs-author-action)

## Bugs & Stability

**High-Severity Bugs Active:**

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| #8560 | **S1** — workflow blocked | `browser_open` hangs agent turn indefinitely when no display; also affects TTS and ffmpeg channels | No |
| #8571 | Bug | OAuth credential fallback forwards incompatible API keys (e.g., `sk-ant...`) to non-Anthropic providers | Yes — PR #8571 (needs-author-action) |
| #8536 | Medium | `tokio::time::timeout` drops inner `Elapsed` error at 3 call sites in hardware crate | Yes — PR #8536 (open) |
| #7960 | Bug | `execute_pipeline` sub-tool execution bypasses per-agent `ToolAccessPolicy` (confused deputy) | Yes — PR #7960 (needs-author-action) |
| #8851 | Bug | Native tools shadow same-named plugin tools (collision) | Yes — PR #8851 (open) |
| #8902 | Bug | Bidirectional RPC broken for `ask_user` and `poll` | Yes — PR #8902 (open, risk:high) |
| #8966 | Bug | `max_context_tokens` fallback uses wrong provider context_window if profile not set | Yes — PR #8966 (needs-author-action) |

**Regression risk:** PR #8966 includes a regression test, suggesting prior behavior was undefined and this fixes a latent bug.

## Feature Requests & Roadmap Signals

**High-Probability Features for v0.8.4 (target Jul 31):**

| Feature | Issue/PR | Confidence | Signal |
|---------|----------|------------|--------|
| Unified plugin capability catalog + CLI management | #8908 | **Very High** | 72 labels, XL-sized, core team author |
| Outbound WebSocket for channel plugins | #8863 | **Very High** | Stack foundation for multiple downstream PRs |
| Webhook ingress → plugin inbound queue | #8862 | **Very High** | Core infrastructure for channel plugins |
| OpenAI chat completions endpoint | #8486 | **High** | Closes #8550, relates #8603; large PR in review |
| Herdr agent reporting integration | #8337 | **Medium** | L-sized, author eugeneb50 (recent contributor) |
| Persistent memory parity tracker | #8891 | **Very High** | Multi-PR rollout, roadmap epic tracker |
| Plugin permission/secrets model RFC | #8398 | **Medium** | Needs author action; no consensus yet |

**New RFCs filed today:**

- **#9106** — A2A outbound client (A2ATool): enables proactive inter-agent collaboration via A2A protocol (0 comments, brand new)
- **#9103** — Separate authoritative memory storage from enrichment connectors: stop conflating `memory.backend` with connector plugins like Lucid (0 comments, brand new)

## User Feedback Summary

**Pain Points Observed:**

1. **Browser automation headless failure (#8560):** Users on headless hosts or without displays experience hard hangs with no error recovery. No cancel mechanism exists.
2. **OAuth credential confusion (#8571):** Delegation to OAuth providers forwards wrong credential types, causing silent failures or confusing API key rejection errors.
3. **Plugin permission model unclear (#8398):** Two permission models have been tried; neither settled. Users want granular permissions, not all-or-nothing `PluginPermission` enum.
4. **Capability discovery broken (#8367):** Agent answers as if a capability is impossible even though ZeroClaw supports it — the agent lacks awareness of which providers/tools/channels are actually configured.
5. **In-app upgrade impossible (#8170):** Operators must leave the web dashboard to update the gateway; no environment-aware restart flow exists.
6. **Memory backend conflation (#9103):** Lucid (a connector/enrichment tool) must be modeled as a full storage backend because `memory.backend` serves two jobs — this confuses configuration.

**Use Cases Driving Development:**

- **Inter-agent collaboration** via A2A outbound client (#9106)
- **Multi-channel presence** via Inkbox (email/SMS/voice/iMessage) (#8384)
- **Plugin ecosystem** — WASM channel plugins for custom communication protocols
- **OpenAI SDK compatibility** for broad tool integration (#8486)

## Backlog Watch

**Stale/Blocked Items Requiring Maintainer Attention:**

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| **#8398** — Plugin permission/secrets model RFC | 19 days | `needs-author-action`, no-stale | RFC has open questions; no maintainer response since author action requested |
| **#8367** — Capability-aware documentation RFC | 21 days | `blocked`, `needs-maintainer-review` | Blocked on maintainer review; documentation gap affects all users |
| **#8486** — OpenAI chat completions endpoint | 18 days | `needs-author-action` | Large, high-value PR stalled awaiting author response |
| **#8571** — Fix OAuth credential fallback | 16 days | `needs-author-action` | Bug fix for credential confusion; author unresponsive |
| **#7960** — Gate execute_pipeline with ToolAccessPolicy | 28 days | `needs-author-action` | Security fix (confused deputy); author unresponsive |
| **#8966** — Fix max ctx fallback | 6 days | `needs-author-action` | Regression fix author stalled |
| **#8384** — Inkbox channel | 19 days | `needs-author-action` | Large feature PR awaiting author response |

**Worst Offender:** Six PRs are blocked on `needs-author-action`, with #7960 (28 days stale) being the oldest. These are blocking security fixes and key features. The project may need to assign co-maintainers or adopt these PRs if authors remain unresponsive.

**Maintainer departure risk:** @singlerider left the project on 2026-07-15 (removed from CODEOWNERS per #9107). His 44 code owner paths (zeroclaw-api, zeroclaw-infra) now have **no maintainer coverage**. The project needs new code owners for these crates urgently.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*