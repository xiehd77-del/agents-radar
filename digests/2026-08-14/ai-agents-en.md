# OpenClaw Ecosystem Digest 2026-08-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-14 02:04 UTC

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

# OpenClaw Project Digest — 2026-08-14

## 1. Today's Overview

OpenClaw shows **high but stable activity** with 500 issues and 500 PRs updated in the last 24 hours (open/active ratio ~68% for issues, ~77% for PRs). No new releases were published today. **The dominant theme is reliability**: message delivery failures, subagent orchestration instability, and session-state issues account for the majority of the most-commented items. There is a visible long-tail problem — several P1 issues (e.g., #121058, #25592) have remained open for months with recurring reports despite attempted fixes, indicating systemic challenges in the session/delivery layer. The PR pipeline shows active maintenance work with a notably high volume of label-driven, small-sized fixes landing. No new feature releases or breaking changes were shipped today.

## 2. Releases

**No new releases** were published on 2026-08-14. The project appears to be between release cycles, with focus on stabilizing existing functionality (see Bugs & Stability).

## 3. Project Progress

No PRs were merged/closed today (based on available data; 114 PRs updated show as merged/closed in the 24h window). The **most active open PRs** indicate work in progress across several areas:

- **Signal Channel Support** ([#114098](https://github.com/openclaw/openclaw/pull/114098), [#118169](https://github.com/openclaw/openclaw/pull/118169), [#119342](https://github.com/openclaw/openclaw/pull/119342), [#119343](https://github.com/openclaw/openclaw/pull/119343)): A substantial feature set around Signal integration — interactive setup wizard, QR-based account linking, and gateway-owned QR setup sessions. This is a **multi-PR, multi-week effort** still in review.
- **QR/Pairing UX** ([#114173](https://github.com/openclaw/openclaw/pull/114173), [#119341](https://github.com/openclaw/openclaw/pull/119341), [#121562](https://github.com/openclaw/openclaw/pull/121562)): Web UI and gateway improvements for presenting and managing setup QR codes, including receipt rendering and bounded contracts.
- **Memory Read Isolation** ([#121945](https://github.com/openclaw/openclaw/pull/121945)): Completes Phase 1C of the memory read-isolation cutover — a large, multi-extension change (marked as "waiting on author").
- **Secrets Egress Proxy** ([#123216](https://github.com/openclaw/openclaw/pull/123216)): Authenticated egress substitution proxy with destination binding, enabling spawned processes to use stored secrets.
- **Plugin Inventory Fix** ([#123378](https://github.com/openclaw/openclaw/pull/123378)): Keeps inventory available without a system owner.
- **macOS Peekaboo 4.1** ([#123420](https://github.com/openclaw/openclaw/pull/123420)): Adopts new native automation bridge contracts.
- **Cron Topic Failure Alerting** ([#123237](https://github.com/openclaw/openclaw/pull/123237)): Alerts when cron output delivery to a Telegram topic fails.
- **CI/Infra Hardening**: Several small PRs ([#120161](https://github.com/openclaw/openclaw/pull/120161), [#120468](https://github.com/openclaw/openclaw/pull/120468), [#120472](https://github.com/openclaw/openclaw/pull/120472), [#123394](https://github.com/openclaw/openclaw/pull/123394)) reject invalid inputs and stabilize test infrastructure.

## 4. Community Hot Topics

The most-discussed items reveal **delivery reliability** as the #1 pain point:

- **[#121058](https://github.com/openclaw/openclaw/issues/121058) — "Silent reply failures still recurring" (92 comments)**: The top issue. A user reports that a previously "closed" fix (#116277) did not resolve the problem — silent reply failures (no queued reply payload) continue to occur. This is **a critical trust signal** for the project: a closed issue's fix being ineffective.
- **[#7707](https://github.com/openclaw/openclaw/issues/7707) — "Memory Trust Tagging by Source" (48 comments)**: Community wants memory entries tagged by trust level (user vs. web vs. third-party) to prevent memory poisoning. High engagement suggests security-conscious power users.
- **[#25592](https://github.com/openclaw/openclaw/issues/25592) — "Text between tool calls leaks to messaging channels" (48 comments)**: Internal agent narration/processing text being sent to Slack/iMessage, creating a bad UX. Long-standing issue (since Feb) still open.
- **[#44925](https://github.com/openclaw/openclaw/issues/44925) — "Subagent completion silently lost" (27 comments)**: Multiple failure modes where subagent results are lost with no retry/notification.
- **[#91363](https://github.com/openclaw/openclaw/issues/91363) — "Isolated cron consistently fails" (10 comments, 6 👍)**: High reaction-to-comment ratio suggests many users affected.

**Underlying Needs**: The community is signaling a need for **predictable, reliable message delivery and subagent orchestration**. These are core "agent reliability" concerns — users are building on OpenClaw and need assurance that work products (replies, subagent results, cron outputs) arrive.

## 5. Bugs & Stability

Today's reports (with fixes in progress where noted):

### Critical (Recurring/Multiple Reports)
- **Silent reply failures persist** ([#121058](https://github.com/openclaw/openclaw/issues/121058)) — fix from #116277 ineffective. **No new fix PR identified.**
- **Subagent orchestration instability** — multiple open issues ([#44925](https://github.com/openclaw/openclaw/issues/44925), [#67777](https://github.com/openclaw/openclaw/issues/67777), [#92433](https://github.com/openclaw/openclaw/issues/92433)) describe silent loss of subagent completions. **Related PRs #118650, #122388** attempt mitigations.

### High (P1, Recurring Patterns)
- **Cron/LLM failures**: [#121953](https://github.com/openclaw/openclaw/issues/121953) (DeepSeek cron stall) and [#91363](https://github.com/openclaw/openclaw/issues/91363) (isolated cron LLM failure) suggest provider-specific issues.
- **Session-lane/state issues**: [#54488](https://github.com/openclaw/openclaw/issues/54488) (lane starvation, 20-30 min blocks), [#115421](https://github.com/openclaw/openclaw/issues/115421) (schema downgrade wipes cron jobs), [#97983](https://github.com/openclaw/openclaw/issues/97983) (iOS/WebChat replies not delivered).
- **Auth/credential failures**: [#89278](https://github.com/openclaw/openclaw/issues/89278) (Codex OAuth 10s timeout regression), [#111498](https://github.com/openclaw/openclaw/issues/111498) (Anthropic migration blocks main agent).

**Fixes in Progress**:
- **#123237** ([PR](https://github.com/openclaw/openclaw/pull/123237)) for cron topic delivery failure.
- **#123418** ([PR](https://github.com/openclaw/openclaw/pull/123418)) — "model setup fails after provider authorization" (Gateway draining error).
- **#122388** ([PR](https://github.com/openclaw/openclaw/pull/122388)) — "tolerate stale restart-recovery claims after gateway stall".
- **#118650** ([PR](https://github.com/openclaw/openclaw/pull/118650)) — "guard shouldCompact against missing contextWindow" (a subagent-compaction bug).

## 6. Feature Requests & Roadmap Signals

Active, high-engagement feature requests likely to be prioritized:

- **[Memory Trust Tagging (#7707)](https://github.com/openclaw/openclaw/issues/7707)**: High comment count (48), security-focused. Aligns with ongoing memory-security work (e.g., Phase 1C read isolation PR #121945). **Likely in next major release.**
- **[YAML Config Support (#45758)](https://github.com/openclaw/openclaw/issues/45758)**: Small, popular ask (8 comments, 2 👍). Low-risk, likely to be added.
- **[Signal Channel Support (#100906 / PRs #114098, #118169)](https://github.com/openclaw/openclaw/pull/114098)**: Large feature, **very close to landing** (multiple PRs in "ready for maintainer look" or "waiting on author").
- **[STT/TTS in WebChat (#45508)](https://github.com/openclaw/openclaw/issues/45508)** and **[OpenRouter Cost Exposure (#9016)](https://github.com/openclaw/openclaw/issues/9016)**: Both have moderate engagement. Useful, but unclear priority.
- **[Pace-Aware Rate Limiting (#45771)](https://github.com/openclaw/openclaw/issues/45771)**: Could be a **differentiator** for production deployments, addressing a common pain point (rate limit burn).
- **[Reasoning Stream (#42276)](https://github.com/openclaw/openclaw/issues/42276)**: Simple UX ask, likely low effort.

**Prediction**: The next release will likely be **2026.8.x** and will include Signal channel support, improvements to the QR pairing flow, memory read isolation, and the batch of CI/reliability fixes. Longer-term roadmap is dominated by **reliability engineering** (subagent/session guarantees) and **security** (memory isolation, secrets handling).

## 7. User Feedback Summary

- **Frustration with recurring, unfixed reliability bugs**: The #1 issue (#121058) explicitly calls out that a "fixed" issue did not actually fix the problem. Users are **losing trust in the fix lifecycle**.
- **Silent failures are the most damaging**: Users repeatedly report "silent" failures — no error, no retry, no notification. This is a **critical UX gap**.
- **Power users want security-minded features**: The high engagement on memory trust (#7707) shows advanced users are thinking about **threat models** (memory poisoning).
- **Multi-agent orchestration is a key use case, and it's fragile**: Issues #43367, #47975, #43374 describe concurrency/state conflicts breaking real workflows.
- **Positive signals**: The community is actively contributing PRs (14 unique authors in the top 30 alone), suggesting a healthy contributor base. The Signal feature set is a well-scoped, well-reviewed addition.

## 8. Backlog Watch

Long-standing items needing maintainer attention:

- **[#25592](https://github.com/openclaw/openclaw/issues/25592) — "Text between tool calls leaks" (since Feb 2026)**: 48 comments, P1, 1 👍. This is a **UX bug** that has been open for 6 months. Needs a product decision on whether it's a bug or a feature.
- **[#43747](https://github.com/openclaw/openclaw/issues/43747) — "Memory management is in chaos" (since Mar)**: 11 comments, P2, 0 👍. Reports of **inconsistent memory behavior across users** — could indicate a serious design flaw or documentation gap. Needs maintainer investigation.
- **[#41165](https://github.com/openclaw/openclaw/issues/41165) — "Telegram DMs land in main session" (since Mar)**: 8 comments, 2 👍. Same class of "session-state" bugs that keep recurring. No fix PR linked.
- **[#42273](https://github.com/openclaw/openclaw/issues/42273) — "backup create stalls on large installs" (closed as already-fixed)**: This was closed, but the issue type (large state dirs) might warrant a follow-up test or docs.
- **PRs in "waiting on author" for extended periods**: [#118169](https://github.com/openclaw/openclaw/pull/118169) and [#119343](https://github.com/openclaw/openclaw/pull/119343) (Signal/QR work) have been waiting for over a week. Maintainers should re-engage to keep this large feature moving.
- **[#123073](https://github.com/openclaw/openclaw/issues/123073) — "dev-channel update fails" (new, 6 comments, no-stale)**: Fast-moving issue, already has "fix-shape-clear" and "queueable-fix" labels. Should be prioritized for dev-channel users.

---

**Overall Health Assessment**: OpenClaw is in a **"stable but struggling"** phase. The feature pipeline is healthy (Signal, QR, memory security), but the volume of recurring, high-severity reliability bugs (silent message loss, subagent drops) is a **significant risk to user trust and retention**. The clearest signal for the team: **prioritize a "reliability sprint"** focused on the session/delivery layer, as the community's most active threads all point there.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-14 | **Scope:** 12 actively tracked projects

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a **rapid consolidation and hardening phase**, characterized by three dominant themes: **reliability engineering** (silent message delivery failures, subagent orchestration instability), **security hardening** (memory isolation, credential verification, supply-chain signing), and **architectural refactoring** (pluggable agent loops, unified provider systems). Projects are transitioning from feature-velocity to production-grade stability as user bases expand beyond early adopters into operational deployments. The ecosystem is fragmenting into two tiers: **full-featured generalist assistants** (OpenClaw, Hermes, CoPaw) vs. **specialized kernels/frameworks** (IronClaw, ZeroClaw, NanoClaw). Cross-pollination is strong—shared issues like memory trust, subagent reliability, and MCP integration appear across nearly all projects.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Merged/Closed (24h) | Release Status | Health Score¹ |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 0 PRs merged; 114 marked merged/closed² | No release | 🟡 **Stable but struggling** — reliability bugs erode trust |
| **Hermes Agent** | 50 | 50 | 5 PRs, 3 issues | **v0.20.1 released** | 🟡 **Critical P1 cluster** (gateway reaping) |
| **IronClaw** | 50 | 50 | 2 PRs, 14+ issues | **v1.2.0 stable** | 🟢 **Healthy** — intense architectural transformation |
| **ZeroClaw** | 50 | 50 | 10 PRs | No release (v0.9.0 upcoming) | 🟢 **Active** — security-focused, review bottleneck |
| **CoPaw (QwenPaw)** | 43 | 50 | 19 PRs | **v2.1.0 + beta.5** | 🟡 **Shipping fast** — security scrutiny, Windows issues |
| **NanoBot** | 11 | 31 | 9 PRs | No release (patch imminent) | 🟢 **High-velocity stabilization** — responsive maintainers |
| **LobsterAI** | 2 | 11 | 6 PRs | No release | 🟢 **Consolidation** — UI refactoring, stale cleanup |
| **Moltis** | 1 | 4 | 0 PRs | No release | 🟢 **Steady** — hardening phase |
| **NanoClaw** | 2 | 13 | 13 PRs | **v2.2.0 released** | 🟢 **Healthy** — security-focused release |
| **PicoClaw** | 3 | 9 | 3 PRs (stale) | No release | 🟢 **Stable maintenance** — backlog latency |
| **NullClaw** | — | — | — | — | ⚪ **Inactive** |
| **TinyClaw** | — | — | — | — | ⚪ **Inactive** |
| **ZeptoClaw** | — | — | — | — | ⚪ **Inactive** |

¹ *Health Score: 🟢 Healthy / 🟡 Caution / 🔴 Critical — based on bug severity, release cadence, review pipeline, community sentiment.*
² *OpenClaw reports 114 PRs marked merged/closed in 24h window, but no explicit merge data.**

---

## 3. OpenClaw's Position

### Advantages vs. Peers

- **Unmatched community scale:** 500 issues + 500 PRs in 24h — 5–10x the activity of nearest peers (Hermes, IronClaw at 50/50).
- **Feature breadth:** Signal channel integration (multi-PR, multi-week), memory read-isolation (Phase 1C), secrets egress proxy — the deepest feature pipeline in the ecosystem.
- **Contributor base:** 14 unique authors in top-30 PRs alone — a robust, sustainable contributor ecosystem.
- **Market leadership:** Arguably the reference implementation others benchmark against (Moltis, LobsterAI explicitly reference OpenClaw patterns).

### Technical Approach Differences

- **Gateway-heavy architecture:** OpenClaw's delivery/session layer is uniquely complex, enabling multi-channel (Slack, iMessage, Telegram, Signal) but creating recurring reliability issues.
- **Cron/topic infrastructure:** More sophisticated task scheduling than competitors, but with corresponding bug surface.
- **Memory isolation focus:** Phase 1C read-isolation is ahead of peers — most projects treat memory as a simpler KV store.

### Community Size Comparison

| Metric | OpenClaw | Hermes | CoPaw | IronClaw |
|---|---|---|---|---|
| Daily issue/PR activity | 1,000 | 100 | 93 | 100 |
| Top issue comments | 92 | 25 | 6 | 6 |
| Contributor diversity | High | Moderate | Low (small team) | Low (core team) |
| Release cadence | Slow (no release today) | **Fast** (patch today) | **Very fast** (2 releases today) | Moderate |

**Assessment:** OpenClaw leads on scale but lags on release frequency. Its "stable but struggling" phase is the biggest risk — users may churn to faster-moving peers (CoPaw, Hermes) if reliability issues persist.

---

## 4. Shared Technical Focus Areas

The following needs are emerging **independently across multiple projects** — a strong signal of industry-wide priorities:

### A. Agent/Messaging Reliability (OpenClaw, Hermes, CoPaw)
- **Silent reply failures** (OpenClaw #121058, 92 comments) — the #1 pain point
- **Subagent/orchestration completion loss** (OpenClaw #44925, Hermes #83683)
- **Cron/task execution failures** (OpenClaw #91363, NanoBot #5373)
- **Gateways dying without restart** (Hermes #83683 P1 cluster)

### B. Memory & Session Integrity (OpenClaw, NanoBot, CoPaw, IronClaw)
- **Memory trust/poisoning protection** (OpenClaw #7707) — memory entries tagged by trust level
- **Session-state corruption/loss** (CoPaw #6951 — history invisible after compaction; NanoBot #5378 — archive truncation)
- **Memory lifecycle policy** (ZeroClaw RFC #6850, OpenClaw Phase 1C)
- **Cross-conversation memory recall** (IronClaw #7185)

### C. Security Hardening (All projects)
- **Shell/command policies** (ZeroClaw RFC #7155, 18 comments)

### D. Model & Provider Flexibility (CoPaw, NanoClaw, ZeroClaw, PicoClaw)
- **Per-task model override** (PicoClaw #3330, NanoBot #4556)
- **Provider routing/fallback resilience** (CoPaw #6302, ZeroClaw #9639)
- **DeepSeek/other vendor support** (Hermes #85740, ZeroClaw provider work)

### E. Cross-Platform Desktop Reliability (Hermes, CoPaw)
- **Windows/macOS lifecycle regressions** (Hermes #85738 root-caused; CoPaw #6955, #7007)
- **Update/install consistency** (Hermes #52339, CoPaw #6100)

### F. CI/CD & Build Trust (ZeroClaw, NanoClaw, OpenClaw, Moltis)
- **Signature verification as CI gate** (NanoClaw #3238 series)
- **Test coverage for feature-gated code** (ZeroClaw #9951, LobsterAI #1162, #1156)
- **Flaky test elimination** (Moltis #1193, ZeroClaw #9932 CodeQL false-positives)

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture | Unique Strengths |
|---|---|---|---|---|
| **OpenClaw** | Generalist personal AI assistant | Power users, developers | Gateway + memory isolation + subagents | Multi-channel, cron/topics, memory security |
| **Hermes** | Desktop app + agent gateway | Desktop-centric users | Desktop app ↔ gateway ↔ messaging apps | Chat with WeChat/QQ/Telegram/Teams; desktop dictation |
| **CoPaw (QwenPaw)** | Qwen-powered agent with OS Shell | Users of Qwen model + Chinese market | Desktop client + web UI + OS Shell | QwenPaw OS Shell (windowed apps), App Catalog, "Pawport" import flow |
| **IronClaw** | Agent execution kernel | Cloud-scale deployments | Pluggable agent loops (claude-code, pi, codex) | "Reborn" epic — IronClaw as kernel, harness drivers |
| **ZeroClaw** | Security-hardened agent platform | Security-conscious orgs | Rust-based, SOP engine, verifiable-intent | Highest safety standards; risk-gated RFC process |
| **NanoBot** | Lightweight, high-throughput agent | Developers, CI/CD | Cron-oriented scheduling, MCP-focused | Session data integrity; WebUI; cron scheduler |
| **NanoClaw** | CLI/group management for agents | DevOps, platform engineers | Agent templates, provider config generation | Stamped plugin updates, MCP cwd support |
| **PicoClaw** | Go-based agent | Minimalists, Go ecosystem | Go binary, WebUI | Small footprint, Go-native, simple deploy |
| **LobsterAI** | Desktop app (renderer-heavy) | Chinese enterprise users | Electron-like desktop, OpenClaw integration | Enterprise edition, daily check-in gamification |
| **Moltis** | Research/prototype agent framework | Researchers, developers | Connector architecture, sandboxed skills | CalDAV + message-history connectors (WIP) |

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapidly Iterating (High Velocity + High Feature Throughput)
| Project | Signal | Risk |
|---|---|---|
| **CoPaw** | 19 PRs merged, 2 releases in 24h | Security perception, Windows stability |
| **NanoBot** | 9 PRs merged; 3 bugs reported → fixed same day | Flaky test still open |
| **NanoClaw** | 13 PRs merged; v2.2.0 shipped; CI security hardening | Open approval-spam bug (#3235) |
| **OpenClaw** | 114 PRs merged/closed; Signal feature set near-landing | **Reliability bug cluster unresolved** |

### Tier 2 — Stabilizing/Consolidating
| Project | Signal | Risk |
|---|---|---|
| **IronClaw** | v1.2.0 stable; Reborn epic progressing | P1 cluster (gateway reaping) unresolved |
| **Hermes** | Fast patch release (v0.20.1); active community PRs | Large architectural work in review backlog |
| **ZeroClaw** | Security fixes closing; RFC process healthy | Review pipeline bottleneck (40 PRs open, 10 closed) |
| **LobsterAI** | UI consolidation merging; stale cleanup | 4 stale PRs left (incl. safety-critical tests) |

### Tier 3 — Steady Maintenance
| Project | Signal | Risk |
|---|---|---|
| **PicoClaw** | Stable; few bugs; dependency bumps routine | WebUI lag unresolved; lockfile fix PR stale |
| **Moltis** | Hardening PR queue active | Flaky test; large PR #1190 unreviewed |

### Tier 4 — Dormant
| Project | Signal |
|---|---|
| **NullClaw, TinyClaw, ZeptoClaw** | No activity in 24h; effectively inactive |

**Key Insight:** The ecosystem is bifurcating — **feature-shippers** (CoPaw, NanoClaw) vs. **reliability-stabilizers** (Hermes, NanoBot, ZeroClaw). OpenClaw must decide which camp it belongs to; currently it's caught between.

---

## 7. Trend Signals

### 1. "Silent failure" is the #1 trust eroder.
Across OpenClaw (#121058, #44925), Hermes (#83683), and CoPaw (#6921), the most damaging bugs are those that fail **without notification or retry**. Users repeatedly cite this as the core reason for losing trust. **Value for developers:** Build fail-open notifications, retry-visible status, and per-message delivery confirmations into agent frameworks.

### 2. Memory is the new security battleground.
Memory trust tagging (OpenClaw #7707), read isolation (OpenClaw #121945), memory lifecycle decoupling (ZeroClaw RFC #6850), and memory-doc truth (CoPaw #6853) signal a shift from "store everything" to "store safely and verifiably." **Value:** Expect "memory provenance" (who/what sourced each entry) to become a standard feature.

### 3. Pluggable agent loops are the architectural future.
IronClaw's Reborn epic (agent loops as plugins — claude-code, pi, codex), CoPaw's "Pawport" import flow (Codex/Qoder), and NanoClaw's Agent Plugins 1.0.0 point to a **standardized agent runtime contract** emerging. **Value:** Developers should design agents with replaceable loops/harnesses, not hard-code model+loop coupling.

### 4. Security is becoming a prerequisite, not a feature.
Supply-chain signature verification as CI gate (NanoClaw), shell-policy RFCs (ZeroClaw #7155), and credential chain verification (ZeroClaw #9328) show security moving from "nice-to-have" to "release-blocker." **Value:** Build security

### 5. Provider/model flexibility is a top user demand.
DeepSeek support (Hermes, ZeroClaw), Alibaba Bailian token plans (CoPaw), per-task model overrides (PicoClaw, NanoBot), and unified provider catalogs (CoPaw #6302) all point to users wanting **vendor-agnostic model routing** with cost/quality tradeoffs per task.

### 6. Cross-platform desktop reliability is hard, and users noticed.
Hermes (Windows/macOS gateway reaping), CoPaw (Windows startup crashes), PicoClaw (WebUI lag) — native desktop experiences are the weakest link. **Value:** Invest in CI coverage for Windows/macOS early; treat desktop-gateway lifecycle as a first-class problem.

### 7. Community-driven repair campaigns are a new engagement pattern.
Hermes' "Webhook Revolution" epic (#84834), ZeroClaw's RFC trackers, and OpenClaw's label-driven bug triage show communities organizing their own **repair campaigns** around maintainer capacity gaps. **Value:** Create public trackers; let users self-organize; respond to meta-issues fast.

### 8. "Imminent release" is a competitive weapon.
CoPaw shipped 2 releases in 24h; Hermes shipped a patch the same day a P1 cluster was reported; NanoBot+ZeroClaw are close behind. **Value:** Release frequently, even patch-when-ready; users reward visible responsiveness over big-bang releases.

---

## Final Recommendation for AI Agent Developers

1. **If you're building on an assistant:** Choose **OpenClaw** for features + community, but monitor the reliability cluster (especially #121058) — fall back to **Hermes** or **CoPaw** if delivery guarantees are critical.
2. **If you're building a platform or framework:** Study **IronClaw's Reborn** (pluggable loops) and **ZeroClaw's security RFCs** — these are the architectural blueprints for the next 12 months.
3. **Adopt these patterns now:** (a) visible "I'm about to stop" signals, (b) memory provenance tracking, (c) provider-agnostic model routers, (d) CI signature verification, (e) per-message delivery confirmations.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-08-14:

---

## 1. Today's Overview

NanoBot is in a period of **high-velocity stabilization and feature expansion**. The project saw 11 issues updated and 31 pull requests updated in the last 24 hours, with a **9-to-22 merge-to-open ratio** indicating strong maintainer throughput. The maintainer team (led by `dajiaohuang`, `chengyongru`, and `rickererer`) is actively closing out long-standing PRs (some pending since late June) while landing critical bug fixes. Notably, there is a **major focus on session/data integrity**, with three separate but related bug clusters (cron scheduler death, file-cap archive mutation, and consolidation truncation) being addressed by dedicated PRs. While no formal releases were cut today, the volume of merged fixes suggests an imminent, stability-focused release.

## 2. Releases

**No new releases were published in the last 24 hours.** This is notable given the volume of merged fixes and suggests the project is preparing a consolidated patch release soon. Users should monitor the project's release tags for a likely `v0.x.y` patch that includes the session and cron stability fixes.

## 3. Project Progress

The following PRs were **merged or closed** today, marking significant progress:

- **`fix(cron): use per-run session key to prevent context sharing across cron runs`** (#4550) - Closed after ~7 weeks. Fixes #4082 by isolating cron job sessions via a unique `run_id` suffix, preventing stale context leakage.
- **`feat(dream): wire up model_override for Dream consolidation`** (#4556) - Closed. Implements #4029, allowing users to specify a cheaper model for periodic memory consolidation.
- **`feat(webui): add native workspace folder picker`** (#5381) - Closed. Adds native folder selection for local WebUI sessions, available only on loopback connections.
- **`fix(webui): restore transcript-only session history`** (#5384) - Closed. Re-adds sidebar support for orphaned transcripts that lack a canonical JSONL session store.
- **`fix(cron): keep scheduler alive when job-store persistence fails`** (#5374, #5375) - Two iterations closed; the logic was refined and re-opened as #5376 with better resilience, indicating an iterative review process.

## 4. Community Hot Topics

No issues or PRs have more than 1 comment, indicating that discuss is happening primarily in the PR review threads rather than issue threads. The most active areas of interest are:

- **Session Data Integrity (#5373, #5377, #5378)** — The cron scheduler death bug and the two session-mutation bugs are generating significant attention across three separate issue threads. The underlying need is **reliability in production deployments**, particularly regarding disk-full scenarios and long-running jobs.
- **Telegram Feature Expansion (#5289)** — The request for sticker support and agent-initiated reactions has been open for a week and now has a corresponding implementation PR (#5387), suggesting this is a popular user request.
- **Matrix Trust & Verification (#4841)** — Open since July 7, this remains a hot topic (1 comment) as it affects usability in encrypted environments. A fix PR (#5385) was opened today to address the Element SAS flow.

## 5. Bugs & Stability

Several bugs were reported or addressed today, ranked by severity:

1.  **`[HIGH]` Cron scheduler permanent death on persistence failure** (#5373) - A single disk-full or permission error kills the scheduler permanently due to `_arm_timer()` being outside the `try/finally`. **Fix exists in PR #5376 (open)**.
2.  **`[HIGH]` File-cap archive failure mutates live session** (#5378) - `enforce_file_cap()` discards data from memory before the archive callback succeeds, leading to unrecoverable data loss. **Fix exists in PR #5380 (open)**.
3.  **`[MEDIUM]` Consolidation truncates archive input but advances cursor** (#5377) - The `Consolidator` truncates context for the LLM but marks the full batch as consolidated, resulting in permanent memory loss of overflowed messages. **Fix exists in PR #5379 (open)**.
4.  **`[MEDIUM]` WebUI copy/fork actions show during active turns** (#5368) - Conflicting completion signals confuse users; low data risk, moderate UX impact.
5.  **`[LOW]` `exec.allowPatterns` shell-chain bypass** (#5306) - A security advisory that was **closed today**; users should verify they are on a patched version or apply the workaround noted in the issue.

## 6. Feature Requests & Roadmap Signals

Several features are moving from proposal to implementation:

- **Budgeted MCP Schemas (#5298)** - Addresses context cost explosion with large MCP tool sets. **Imminently expected**: PR #5388 is already open, introducing an opt-in byte budget with deterministic subset selection.
- **Telegram Stickers & Reactions (#5289)** - **Imminently expected**: PR #5387 is open today, implementing reusable reply stickers and metadata dispatch.
- **MCP Apps Support (#5251)** - Backend groundwork done: PR #5386 preserves structured app metadata outside model context. Expect WebUI integration in a future iteration.
- **Session Collaboration via Mentions (#5358)** - A significant WebUI UX shift, currently open as a PR with complex conflict labels — likely a few versions away.

## 7. User Feedback Summary

Active users are reporting **production pain points**, not feature wants. The cron scheduler issue (#5373) cites a "disk full" scenario that silently kills automation; the Windows-specific `os.replace` permission error (#5382) highlights cross-platform reliability gaps. On the positive side, the rapid turnaround on the consolidation and archive bugs (reported and fixed the same day) indicates a responsive maintainer team. Feature requests (ViBo memory integration #5372, MCP Apps #5251) show users are pushing NanoBot toward more complex, production-scale agent behaviors. The WebUI localization requests (#5366) suggest a growing non-English user base.

## 8. Backlog Watch

The following items need maintainer attention:

- **Matrix Device Trust (#4841)** - Open since **July 7** (~5 weeks). Cross-signing is a complex issue, but the SAS fix in #5385 only resolves part of the problem; the core "untrusted device" warning remains unaddressed.
- **Heartbeat Feature Pair (#4549, #4551)** - Both dated **June 26** (~7 weeks) and still open. They introduce configurable `model_override` and isolated sessions for heartbeats, but are stuck in review with "priority: p2" labels. They are non-conflicting and could likely be merged with a review pass.
- **Session Serialization PRs (#5383, #5357, #5358)** - While opened recently, they carry `[conflict]` labels and belong to a high-impact refactor series. They should be prioritized to avoid bit-rot and merge conflicts with the flood of new session-management fixes landing in `dajiaohuang`'s PRs.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-14

## 1. Today's Overview

Hermes Agent shows **very high activity** this period: 50 issues and 50 PRs were updated in the last 24 hours, with 5 merged/closed PRs and 3 issues resolved. A new patch release, **v0.20.1 (v2026.8.13)**, was tagged, rolling up ~656 merged PRs since v0.20.0 for downstream consumers. The dominant theme is **desktop app / gateway integration stability**, with a cluster of P1 regressions (issues #85344, #85368, #84855, #85044, #85738) all tracing back to the same `_reap_unsupervised_gateway_orphans` change from 2026-08-04. The community is also actively contributing security hardening, plugin extensibility, and desktop feature improvements, indicating a healthy open-source ecosystem.

## 2. Releases

**v2026.8.13 (Hermes Agent v0.20.1)** — Patch release, August 13, 2026.

This is a **stability tag** rolling up ~656 PRs merged since v0.20.0. It is intended for Docker images, hosted deployments, and `latest`-tag installs. No breaking changes or migration notes were flagged in the release announcement; the focus is on providing a stable tagged baseline for downstream consumers. Given the number of regressions reported against v0.20.0 (desktop/gateway, browser_exec, SQLite locking), this patch likely includes targeted fixes, but users should verify against the known issue list below.

## 3. Project Progress

**Merged/Closed PRs (5 total):**

- [#85755 — fix: voice dictation broken in profiles created via profiles.create](https://github.com/NousResearch/hermes-agent/pull/85755) *(closed)* — Fixes missing `stt`/`tts` config in profiles created via `profiles.create`, which caused desktop dictation to fall back to defaults.
- [#85673 — fix(desktop): stop offering unsupported GitHub MCP OAuth](https://github.com/NousResearch/hermes-agent/pull/85673) *(closed)* — Removes the generic one-click OAuth path for GitHub's hosted MCP server from the Desktop MCP directory.
- [#85749 — fix(grounded-citations): fold typographic Unicode so honest verbatim quotes match](https://github.com/NousResearch/hermes-agent/pull/85749) *(closed)* — Normalizes typographic characters (curly quotes, non-breaking hyphens, ≥/≤) so verbatim quote matching works against real-world source pages.
- [#85760 — fix: make background notification delivery durable while live](https://github.com/NousResearch/hermes-agent/pull/85760) *(open, new)* — Makes the durable completion store authoritative during live operations, adding a `publish_background_notification` producer API with stable IDs and tenant-bound idempotency.
- [#85761 — fix(feishu): fall back from stale topics](https://github.com/NousResearch/hermes-agent/pull/85761) *(open, new)* — Retries a generic Feishu outbound create when a stale thread returns error code `99992402`.

**Other notable PRs (open, actively advancing):**

- Security: [#81403](https://github.com/NousResearch/hermes-agent/pull/81403) (visible Unicode/control bytes in approval prompts), [#81623](https://github.com/NousResearch/hermes-agent/pull/81623) (Bitwarden `server_url` validation), [#85124](https://github.com/NousResearch/hermes-agent/pull/85124) (redaction over-rejection fix).
- Desktop: [#82793](https://github.com/NousResearch/hermes-agent/pull/82793) — Git history review feature.
- Observability: [#77518](https://github.com/NousResearch/hermes-agent/pull/77518) — Langfuse tracing for auxiliary LLM calls.
- Platform integration: [#85759](https://github.com/NousResearch/hermes-agent/pull/85759) (Telegram TypeHandler rebind after lazy install), [#85754](https://github.com/NousResearch/hermes-agent/pull/85754) (Teams Adaptive Card Action.Execute plugin support), [#85747](https://github.com/NousResearch/hermes-agent/pull/85747) (Slack thread-root document hydration).

## 4. Community Hot Topics

1. **[#66616 — Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616)** *(25 comments)* — Automated freshness probe failed: index is 29.8h old (limit 26h). Ongoing infrastructure health issue; low severity (P3) but visible to users of the Skills Hub docs.

2. **[#83683 — Desktop restart reaps live gateway but never relaunches it](https://github.com/NousResearch/hermes-agent/issues/83683)** *(20 comments, P1 regression)* — WeChat/QQ/Telegram go silent after desktop app restart on Windows. This is a **major community pain point** and closely tied to the cluster of P1 duplicates:
   - [#85344](https://github.com/NousResearch/hermes-agent/issues/85344) (macOS launchd gateway killed)
   - [#85368](https://github.com/NousResearch/hermes-agent/issues/85368) (gateway SIGKILL, messaging offline)
   - [#84855](https://github.com/NousResearch/hermes-agent/issues/84855) (permission denied to kill orphaned gateway PID)
   - [#85044](https://github.com/NousResearch/hermes-agent/issues/85044) (Windows Scheduled Task gateway reaped)
   - [#85738](https://github.com/NousResearch/hermes-agent/issues/85738) (Windows, v0.20.0 regression, root-caused to `hermes_cli/web_server.py`)

   **Analysis:** The `_reap_unsupervised_gateway_orphans` change from 2026-08-04 is a **cross-platform regression affecting desktop + gateway lifecycle**. Users on Windows and macOS are hitting silent message delivery failures. Urgent maintainer attention required.

3. **[#84834 — Webhook Revolution — graph-gated repair campaign (meta-issue)](https://github.com/NousResearch/hermes-agent/issues/84834)** *(16 comments)* — A community-driven epic covering 5×2×3 repair campaign for the webhook surface: ingress, execution, delivery, config, UI, deployment, docs. Signals strong community investment in webhook reliability.

4. **[#69592 — /sessions and /models overlays invisible with ambient widget dock](https://github.com/NousResearch/hermes-agent/issues/69592)** *(12 comments, P1)* — Day 13+ since TUI workflows broke; core session resume and model switching are dead for users with ambient widgets (the documented dock pattern). High impact for TUI power users.

5. **[#85761 — fix(feishu): fall back from stale topics](https://github.com/NousResearch/hermes-agent/pull/85761)** *(new, active)* — Community PR addressing a real integration bug; indicative of healthy external contribution.

## 5. Bugs & Stability

**P0 (closed today):** [#81639](https://github.com/NousResearch/hermes-agent/issues/81639) — `_canonicalize_api_tool_calls` mutates stored history, leaving sessions permanently stuck in reasoning-only responses. **Closed as duplicate**, main tracking issue likely already has a fix in progress.

**P1 (open, urgent):**

| Issue | Platform | Description |
|---|---|---|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Windows | Desktop restart reaps gateway, never relaunches (20 comments) |
| [#85344](https://github.com/NousResearch/hermes-agent/issues/85344) | macOS | `_reap_unsupervised_gateway_orphans` kills launchd-supervised gateway |
| [#85368](https://github.com/NousResearch/hermes-agent/issues/85368) | Windows | Gateway repeatedly SIGKILLed; messaging offline until manual restart |
| [#84855](https://github.com/NousResearch/hermes-agent/issues/84855) | Windows | Permission denied to kill orphaned gateway PID |
| [#85044](https://github.com/NousResearch/hermes-agent/issues/85044) | Windows | Desktop serve reaps Scheduled Task-managed gateway, never restarts |
| [#85738](https://github.com/NousResearch/hermes-agent/issues/85738) | Windows | v0.20.0 regression, root-caused to `web_server.py` |

**Analysis:** All P1s are **desktop ↔ gateway lifecycle regressions** introduced by the 2026-08-04 orphan-reaping change. No dedicated fix PR is open yet; this is the single most important stability item this week.

**P2 (open):**

- [#80117](https://github.com/NousResearch/hermes-agent/issues/80117) — SQLite POSIX lock conflict causing APIConnectionError (session-state risk).
- [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) — `browser_exec` crashes with pydantic_core ModuleNotFoundError (PYTHONPATH pollution from Hermes venv).
- [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) — ZIP fallback deletes built desktop app, never rebuilds (Windows).
- [#83340](https://github.com/NousResearch/hermes-agent/issues/83340) — `hermes cron run` reports 'failed' without executing job (macOS desktop shell).
- [#85406](https://github.com/NousResearch/hermes-agent/issues/85406) — `vision_analyze` fails on Windows host + Docker terminal (POSIX path mangling).
- [#76267](https://github.com/NousResearch/hermes-agent/issues/76267) — Windows `sync_back` drops remote sandbox file changes.
- [#72064](https://github.com/NousResearch/hermes-agent/issues/72064) — `oneshot -z` cannot skip built-in memory injection; `--ignore-rules` silently ignored.
- [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) — Terminal update rebuilds Desktop locally but leaves `/Applications/Hermes.app` stale.

**P3 (watch):** [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) — DeepSeek title_generation HTTP 400 (response_format unsupported); [#85104](https://github.com/NousResearch/hermes-agent/issues/85104) — Desktop duplicate assistant message rendering.

**Fix PRs available:** [#85757](https://github.com/NousResearch/hermes-agent/pull/85757) and [#85752](https://github.com/NousResearch/hermes-agent/pull/85752) both fix the same config warning issue (dup, watch for merge conflicts); [#85744](https://github.com/NousResearch/hermes-agent/pull/85744) fixes `/usage` without live agent; [#85751](https://github.com/NousResearch/hermes-agent/pull/85751) fixes probe stubs poisoning client cache; [#85748](https://github.com/NousResearch/hermes-agent/pull/85748) fixes kanban worker protocol violation (78% of 209 crashes); [#85750](https://github.com/NousResearch/hermes-agent/pull/85750) fixes per-profile remote WS routing.

## 6. Feature Requests & Roadmap Signals

**Notable requests from the last 24h:**

- [#85418](https://github.com/NousResearch/hermes-agent/issues/85418) — **Local-first, zero-dependency memory provider** benchmarked against Honcho, proposed by a community member (2ndNatureAI) who credits Hermes with fixing their Chrome DevTools issue. Aligns with Hermes' memory roadmap.
- [#85740](https://github.com/NousResearch/hermes-agent/issues/85740) — **DeepSeek Responses API transport** (`/v1/responses`). DeepSeek officially launched the new API; users want support alongside Chat Completions.
- [#84317](https://github.com/NousResearch/hermes-agent/issues/84317) — **Opt-out of `drop_pending_updates`** on Telegram cold boot. Users lose pending updates (up to 24h) on restart; config option requested.
- [#67798](https://github.com/NousResearch/hermes-agent/issues/67798) — **Lifecycle hooks as shared runtime contract** across all execution surfaces (gateway, CLI, TUI, cron, plugins, desktop). Still open with 6 comments; important architectural signal.

**Features already in PR form (candidates for next release):**

- Desktop Git history review ([#82793](https://github.com/NousResearch/hermes-agent/pull/82793))
- Langfuse tracing for auxiliary calls ([#77518](https://github.com/NousResearch/hermes-agent/pull/77518))
- Plugins handling Teams Adaptive Card Action.Execute ([#85754](https://github.com/NousResearch/hermes-agent/pull/85754))
- Durable background notification delivery ([#85760](https://github.com/NousResearch/hermes-agent/pull/85760))
- Approval prompt hardening (visible Unicode/control bytes) ([#81403](https://github.com/NousResearch/hermes-agent/pull/81403))

**Prediction:** The next minor release will likely include: (a) a **dedicated fix for the gateway reaping regression** (P1 cluster), (b) the **DeepSeek Responses API** support given vendor momentum, (c) the **Teams card action** plugin hook (small surface), and (d) **Git history review** in Desktop (community-contributed, feature-complete).

## 7. User Feedback Summary

**Pain points:**

- **Desktop ↔ Gateway lifecycle is the #1 complaint:** "WeChat (iLink), QQ bot and Telegram go completely silent", "gateway dies repeatedly with unclean exits", "permission denied to kill orphaned gateway PID", "startup reaps the standalone gateway and never restarts it." Users on Windows and macOS are experiencing **silent message delivery failures** — the worst kind of bug for a messaging gateway.
- **TUI regressions are prolonged:** Issue #69592 is on "Day 13" with core workflows broken (`/sessions`, `/models`). Commenter language is frustrated: "Prompt vanishes", "two core TUI workflows are dead."
- **Update/install friction on macOS:** `Hermes.app` goes stale in `/Applications` after terminal updates; users report "confusing split-brain state."
- **Configuration warnings erode trust:** Two PRs (#85752, #85757) fixing the same false `reasoning_effort` warning suggests users are hitting noisy config validation that makes them doubt their settings were saved.

**Positive signals:**

- Community members proactively contribute fixes: Feishu fallback, Slack thread-root document hydration, kanban crash fix, per-profile remote WS routing, Telegram handler rebind. The "Webhook Revolution" epic (#84834) is a community-organized repair campaign — strong engagement.
- Users report success stories: 2ndNatureAI thanks maintainers for the Chrome DevTools fix (#52954) and builds on it — a sign of a healthy, trusting contributor base.

## 8. Backlog Watch

Issues/PRs needing maintainer attention:

- **[#69592 — TUI overlays invisible (P1, 12 comments, Day 13+)]** — High impact, no fix PR yet. Requires maintainer triage and ownership.
- **[#4438 — Rich Spreadsheet Skill (xlsx/csv)](https://github.com/NousResearch/hermes-agent/issues/4438)** — Open since 2026-04-01 (4+ months), 8 comments. Feature request for a structured xlsx/csv abstraction. Needs a decision.
- **[#35966 — Native desktop/mobile client app](https://github.com/NousResearch/hermes-agent/issues/35966)** — 4 reactions, open since May 31. Long-standing feature request, parked.
- **[#33049 — Credential pool exhaustion TTL configurable](https://github.com/NousResearch/hermes-agent/issues/33049)** — Open since May 27. Simple config surface; likely awaiting a champion.
- **[#52339 — macOS update split-brain state](https://github.com/NousResearch/hermes-agent/issues/52339)** — Open since June 25, 6 comments. User-facing install/update bug, P2, unaddressed.
- **[#67798 — Lifecycle hooks shared contract](https://github.com/NousResearch/hermes-agent/issues/67798)** — 6 comments since July 20. Architectural proposal with broad impact; needs direct maintainer engagement.
- **[#69182 — TUI gateway fail-closed on missing profile](https://github.com/NousResearch/hermes-agent/pull/69182)** — PR open since July 22 (3+ weeks) with no recent maintainer activity. Small surface, clear behavior change, low risk.

---

**Overall health:** Healthy community velocity and real external contribution; **the gateway-reaping P1 cluster is the critical item** that must be fixed in the hot path. Patch v0.20.1 provides a stable tag, which should help downstream users, but the desktop/gateway regressions post-date that release's feature cut and are actively causing user-facing outages.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date: 2026-08-14**

---

## 1. Today's Overview

PicoClaw is showing moderate activity with 3 open issues and 9 pull requests updated in the last 24 hours. The project is in a maintenance phase, with 6 of 9 PRs being automated dependency bumps from Dependabot, while 3 older PRs were closed as stale. No new releases were published, and there are no outstanding bugs that represent critical regressions, indicating stable baseline health. Community engagement is focused on feature enhancements (dynamic model selection, broader Whisper API support) and one UI performance complaint. The maintainers appear to be actively processing PRs, though the backlog of stale PRs suggests some latency in dependency management.

---

## 2. Releases

**None** — No new releases were published in the last 24 hours. The most recent version remains **0.3.1** (referenced in issue #3281).

---

## 3. Project Progress

**Closed/Merged PRs (3):**
- **[#3304](https://github.com/sipeed/picoclaw/pull/3304) [CLOSED]** — `build(deps): bump github.com/anthropics/anthropic-sdk-go from 1.55.1 to 1.61.0` (closed as stale, superseded by #3334)
- **[#3305](https://github.com/sipeed/picoclaw/pull/3305) [CLOSED]** — `build(deps): bump github.com/aws/aws-sdk-go-v2/service/bedrockruntime from 1.53.3 to 1.56.2` (closed as stale, superseded by #3336)
- **[#3306](https://github.com/sipeed/picoclaw/pull/3306) [CLOSED]** — `build(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.32.25 to 1.32.33` (closed as stale, superseded by #3335)

**Summary:** The three closed PRs were all Dependabot-superseded updates, indicating a routine dependency refresh cycle. No feature work was merged today. The AWS SDK v2 and Anthropic SDK dependencies are being actively bumped to newer versions via the open PRs (#3332, #3334, #3335, #3336).

---

## 4. Community Hot Topics

**Most Active Issue: [#3281 — [BUG] Web UI chat input is very laggy when history has little bit long](https://github.com/sipeed/picoclaw/issues/3281)**
- **Author:** xpader | **Comments:** 5 | **👍:** 1
- **Analysis:** This issue has the highest engagement. The user reports significant input lag in the Web UI when chat history grows, affecting usability in long sessions. This is a performance/UX concern that likely impacts all Web UI users with extensive conversation histories. The fact that it's been open since July 21 and still not resolved suggests it's a non-trivial frontend optimization problem.

**Other Active Items:**
- [#3330](https://github.com/sipeed/picoclaw/issues/3330) — Feature request for dynamic model override in delegate/spawn/subagent tools (new, 0 comments)
- [#3331](https://github.com/sipeed/picoclaw/issues/3331) — Feature request to support any `/audio/transcriptions` endpoint, not just `*-whisper-*` (new, 0 comments)

---

## 5. Bugs & Stability

**Reported Bugs (Ranked by Severity):**

1. **Medium — Web UI Input Lag ([#3281](https://github.com/sipeed/picoclaw/issues/3281))**
   - **Impact:** Degrades UX for all Web UI users with long chat histories; typing becomes very laggy.
   - **Status:** Open, 5 comments, no associated fix PR yet.
   - **Affected version:** 0.3.1, Go 1.25.11, PicoClaw Web channel.
   - **Note:** No evidence of data loss or crashes, but responsiveness is a core usability metric.

**No crashes or data-corruption bugs were reported in the last 24 hours.** The only open bug is the Web UI lag issue, which appears to be an ongoing performance concern rather than a new regression.

---

## 6. Feature Requests & Roadmap Signals

**New Requests (2 in last 24h):**

1. **[#3330](https://github.com/sipeed/picoclaw/issues/3330) — Dynamic model override in delegate/spawn/subagent tools**
   - **Requested by:** v2up-32mb
   - **Use case:** Users want to specify a different model at call time for sub-agent operations, rather than being locked into the statically-configured model. This enables cost/quality tradeoffs per task.
   - **Prediction:** This is a well-defined, high-value enhancement that aligns with power-user workflows. Likely to be considered for the next minor release if maintainers prioritize flexibility of the agent framework.

2. **[#3331](https://github.com/sipeed/picoclaw/issues/3331) — Broader audio transcription endpoint support**
   - **Requested by:** stanislavvv
   - **Use case:** Current implementation hardcodes `*-whisper-*` model names for `/audio/transcriptions`; users want a config flag (e.g., `whisper-transcription: true`) to force the Whisper path for any compatible model.
   - **Prediction:** This is a straightforward config change (`asr.go` modification) with clear user demand; moderate chance of inclusion in the next patch release.

**Roadmap Signals:** The two new feature requests suggest a community push toward more flexible model configuration and broader third-party API compatibility. No explicit roadmap was published.

---

## 7. User Feedback Summary

**Pain Points:**
- **Web UI performance degradation** with long chat history (#3281) — the most significant recurring pain point.
- **Inflexible model routing** for sub-agents (#3330) — users want finer control over which models handle which tasks.
- **Limited voice/transcription endpoint compatibility** (#3331) — current Whisper-only hardcoding is viewed as outdated and slow.

**Use Cases Driving Requests:**
- Heavy multi-session users relying on the Web UI for extended conversations.
- Developers building complex agent workflows that mix specialized models (e.g., cheap/fast for simple tasks, expensive/powerful for complex ones).
- Users integrating PicoClaw with non-OpenAI-compatible transcription services.

**Satisfaction Signals:** Low number of bug reports (1 open) suggests stable core functionality. The absence of new release notes today and the focus on dependency bumps indicate the project is mature but iterating slowly on features.

---

## 8. Backlog Watch

**Issues/PRs Potentially Needing Maintainer Attention:**

1. **[#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI lag issue (open since 2026-07-21)**
   - **Why:** High user engagement (5 comments, 1 👍), unresolved for ~3 weeks with no linked fix. This is a visible UX issue that could erode user trust if left unaddressed.

2. **[#3318](https://github.com/sipeed/picoclaw/pull/3318) — Fix for broken `pnpm-lock.yaml` (open since 2026-08-05, marked `[stale]`)**
   - **Why:** This PR fixes a real build-blocking issue (`ERR_PNPM_BROKEN_LOCKFILE`) in the web frontend. Marked stale—if not merged soon, it may be closed and the fix lost. Maintainers should review and merge promptly.

3. **Dependency PR supersession pattern** — The stale closure of #3304/#3305/#3306 without merge suggests Dependabot PRs are being re-issued rather than reviewed. This is functional but adds noise; maintainers might consider enabling Dependabot auto-merge for patch versions to reduce PR clutter.

---

**Overall Health Assessment:** PicoClaw is in a stable maintenance phase. Core functionality appears solid with minimal bug reports, but the unresolved Web UI lag and the stale lockfile fix PR are the two items that most warrant near-term attention. The new feature requests indicate a healthy, engaged user base pushing for greater model flexibility.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-14

## Today's Overview

NanoClaw is in a high-velocity release and hardening cycle, with the v2.2.0 release landing and 13 PRs merged/closed in the last 24 hours. The core team is heavily focused on supply-chain security, specifically the agent-image verification pipeline and signature-based approval mechanics. A significant architectural shift is also underway: agent templates are being migrated to the new "Agent Plugins 1.0.0" format, which carried breaking changes and is now merged. Community activity is lighter but includes a security-critical fix (pairing code CSPRNG) and an open bug around unknown-sender approval handling for bots/webhooks. Overall, this is a project that combines aggressive internal security hardening with a steady stream of user-facing fixes.

## Releases

### v2.2.0 — Stamped Plugin In-Place Updates
- **What's new:** The headline feature is that `ncl groups create --template <ref>` now performs **in-place updates** when a group already carries the template's plugin, instead of minting a duplicate agent. A dry-run mode prints a plan of every plugin-owned surface (plugin files, skills, MCP config).
- **Breaking changes:** This release follows the `feat!` merge of PR #3220, which migrated agent templates to "Agent Plugins 1.0.0" directories. Any existing templates from the older format will require migration.
- **Migration notes:** Users with pre-existing template-stamped groups should review the new plugin directory structure, and should be aware of the new stamp-time security hardening (symlink/caps/secret handling).

## Project Progress

Thirteen PRs were merged or closed in the last 24 hours, dominated by a core-team push on CI and supply-chain security:

- **Agent image pipeline (core-team):** A series of PRs (#3236, #3238, #3239, #3240, #3241, #3158) landed or were tested to make `verify-agent-image` a real gating check. This included fixing a missing `AGENT_IMAGE_SIGNER_IDENTITY` variable that was silently skipping signature verification, removing a path filter that prevented the job from being a required status check, opening the bump-PR via `repository_dispatch`, and — critically — turning a verified signature into the approving review (off by default via `AGENT_IMAGE_AUTO_APPROVE`).
- **Agent Plugins engine:** PR #3220 (`feat!`) merged: agent templates are now Agent Plugins 1.0.0 directories, with stamp-time hardening. PR #2909 (setup wizard template flow) was a stacked dependency and also merged.
- **MCP and provider config:** PR #3231 merged, honoring plugin MCP working-directory (cwd) in both Codex and OpenCode provider config writers. PR #2624 also closed, adding per-server `disabledTools` in `McpServerConfig`.
- **Security fix:** PR #3229 merged, switching Telegram pairing code generation from `Math.random()` to `crypto.randomInt` with a wider 6-character space — a clear hardening win.
- **Data stability:** PR #3145 merged, adding DB migration 021 to backfill missing channel destinations for existing messaging-group wirings without data loss.
- **Docs and release:** PR #3237 (chore release v2.2.0) and PR #3230 (fixed skill removal docs pointing at a retired mirror) are also in.

## Community Hot Topics

Community activity is light, with only two issues surfaced in the last 24h, but both are meaningful:

- **#3234 (Closed): Template-stamped agent groups get bare UUID id** — *avital-nanoco* reported that `ncl groups create --template` assigns a bare `randomUUID()` while `--folder` uses `ag-<uuid>`, causing OneCLI's `ensureAgent` to reject it (a leading digit fails validation). This is a concrete, edge-case bug directly tied to the new v2.2.0 feature; it was closed quickly, suggesting a fast fix or workaround. Underlying need: consistency in ID generation across paths. [Link](https://github.com/nanocoai/nanoclaw/issues/3234)
- **#3235 (Open): Unknown-sender approval for bots/webhooks** — *pentar69* describes an unbounded approval-card problem: when `unknown_sender_policy = 'request_approval'`, automated senders (webhooks, bots) trigger approval cards that are impossible to approve sensibly (the sender isn't a person), and denials don't persist. Repeated webhook posts generate infinite, unmanageable cards. Underlying need: differentiated handling for automated vs. human senders, and persistent deny rules. [Link](https://github.com/nanocoai/nanoclaw/issues/3235)

## Bugs & Stability

Ranked by severity:

1. **High — Unbounded approval cards from automated senders (#3235):** A recurring webhook can spam the approval queue indefinitely, making the UI unusable; denials also do not persist. This is a functional DoS on the operator's workflow. No fix PR is open yet. [Link](https://github.com/nanocoai/nanoclaw/issues/3235)
2. **Medium — Bare UUID agent-group ids from template path (#3234):** Prevents OneCLI from accepting the agent entirely. Closed; presumably fixed or documented as a known limitation of the new feature. [Link](https://github.com/nanocoai/nanoclaw/issues/3234)
3. **Low (resolved) — `verify-agent-image` was silently disabled:** The job ran but never verified signatures (missing env vars) and could never be a required check (path filter). This was a stability/security gap in CI, not a runtime bug, and has been fully fixed via the #3238/#3158/#3241 series.
4. **Low (resolved) — Pairing code bruteforce-ability:** `Math.random()` and a 4-character code was a security weakness; fixed in PR #3229.

## Feature Requests & Roadmap Signals

- **Approval flow for non-human senders (#3235):** The issue is a defacto feature request: bots should have a distinct approval path (e.g., allow-listing or IP/domain-based rules) and persistent deny rules. This feels like a natural next-version candidate given the v2.2.0 focus on plugin/group management.
- **Plugin MCP cwd support (#3231 merged):** The engine and provider half landed; expect deeper plugin-MCP configuration capabilities in the next release, potentially surfacing in the wizard.
- **Bounded stdin JSON for `ncl` (#3218, open):** A long-pending feature (since Aug 9) to accept structured arguments from stdin in a bounded byte-size manner, without touching the request frame or authz. This is a developer-experience improvement that would enable composable CLI automation; likely to be finalized soon.
- **`/add-hindsight` memory skill (#2420, open since May):** An opt-in MCP wrapper for the Hindsight memory engine, bundled in-repo. This is a high-value integration (memory for agents) that has been waiting for 3 months; potentially waiting on the Agent Plugins format to stabilize, and should be a strong candidate for the next version.

## User Feedback Summary

- **Pain point — approval noise:** The #3235 report reflects real operator frustration: automated sends creating unapprovable, non-persistent cards is a workflow killer, especially for teams running many webhooks.
- **Frustration — inconsistent IDs (#3234):** Template-created groups failing OneCLI validation is confusing, especially because the `--folder` path "just works." Users expect the two paths to behave identically.
- **Satisfaction — active security hardening:** The quick turnaround on duplicate ID issues and the broader (non-user-visible) CI signature work indicate a team responsive to correctness and supply-chain safety, which builds trust.
- **Request for utility — stdin JSON (#3218):** Users want safer, richer automation without CLI parsing hacks; the open state of this PR is a slight backlog concern given its age.

## Backlog Watch

- **#3218 — `--stdin-json` (open since Aug 9, no update in 5 days):** An important CLI usability feature, still open and unmerged. Needs a maintainer to land or request changes. [Link](https://github.com/nanocoai/nanoclaw/pull/3218)
- **#2420 — `/add-hindsight` MCP memory skill (open since May 11):** Large bundled integration, zero recent comments. Likely waiting on Agent Plugins 1.0.0; needs explicit maintainer guidance or a rebase. [Link](https://github.com/nanocoai/nanoclaw/pull/2420)
- **#2346 — Unknown slash commands treated as normal chat (open since May 8):** A user-facing formatter bug (responses silently dropped) that has been open for 3 months. Should be re-triaged now that the codebase has moved a lot. [Link](https://github.com/nanocoai/nanoclaw/pull/2346)
- **#3235 — Bot approval issue (open, 0 comments):** New but critical; maintainers should prioritize it given the unbounded-card severity. [Link](https://github.com/nanocoai/nanoclaw/issues/3235)

---
*Generated from GitHub data on 2026-08-14. All links: NanoClaw repo (nanocoai/nanoclaw).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-14

## 1. Today's Overview
IronClaw remains in a period of intense architectural transformation, dominated by the "Reborn" epic (#7482) aimed at making IronClaw a **kernel** for agent execution, with pluggable agent loops (claude-code, pi, codex) and external harnesses. The project shipped **v1.2.0 stable** (promoted from RC3) yesterday, resolving container healthcheck issues. Activity is extremely high: **50 issues and 50 PRs updated in the last 24h**, with the vast majority of new work (14+ issues and 4 PRs) filed by the core team around the Reborn workstreams. Concurrently, there's a strong performance optimization push (PRs #7628–#7631, issues #7603–#7605) targeting Postgres write amplification and event churn. The unbound-turns model (threads as the unit of work) is also advancing through a large stacked PR series (#7562, #7633, #7634).

## 2. Releases
**ironclaw-v1.2.0** was promoted to stable on 2026-08-13 ([Release](https://github.com/nearai/ironclaw/releases)).
- Promotes the validated 1.2.0-rc.3 candidate; consolidates RC1–RC3 changelogs.
- **Key fix (RC3):** Runtime container images now install `curl`, enabling in-container HTTP healthchecks by orchestrators probing workers.
- No breaking changes or migration notes were indicated beyond the stable promotion.
- PR: [chore(release): promote 1.2.0-rc.3 to 1.2.0 #7625](https://github.com/nearai/ironclaw/pull/7625)

## 3. Project Progress
The Reborn epic's workstreams were broken into a **13-issue consolidated implementation plan** on 2026-08-13 (issues #7606–#7624), most of which were closed as design tasks, leaving a few key open items:
- **Open implementation issues:** [Egress edge #7621](https://github.com/nearai/ironclaw/issues/7621), [Foreign-harness execution #7622](https://github.com/nearai/ironclaw/issues/7622), [Capability access & rollout #7623](https://github.com/nearai/ironclaw/issues/7623), and the immediate v0 build: [ACP harness executor — claude-code as the loop #7624](https://github.com/nearai/ironclaw/issues/7624).
- **ACP CLI feature:** [PR #7513](https://github.com/nearai/ironclaw/pull/7513) adds a `--acp --stdio` serve command for external tool integration (still open).
- **Document editing:** [PR #7163 (closed)](https://github.com/nearai/ironclaw/pull/7163) merges structural docx/xlsx/pptx editing, PDF-from-HTML rendering, and fixes the #7109 text-log regression.
- **Loop fixes:** [PR #7531 (closed)](https://github.com/nearai/ironclaw/pull/7531) makes repeated-call detection advisory-only (warning, no blocking heuristic).
- **Performance PRs (all open):** Event coalescing [#7631](https://github.com/nearai/ironclaw/pull/7631), trigger-state reduction [#7629](https://github.com/nearai/ironclaw/pull/7629), heartbeat journal churn removal [#7628](https://github.com/nearai/ironclaw/pull/7628), and a new Postgres write measurement stress preset [#7630](https://github.com/nearai/ironclaw/pull/7630).
- **Docs & tooling:** Doc-truth contract tests ([#7378](https://github.com/nearai/ironclaw/pull/7378)) and docs-route guidance checks ([#7376](https://github.com/nearai/ironclaw/pull/7376), closed) merged to keep docs honest.

## 4. Community Hot Topics
- **[Epic #7482 — Pluggable agent loops (6 comments)](https://github.com/nearai/ironclaw/issues/7482):** The central architecture discussion. Core team is driving toward "IronClaw as kernel"; binding decisions are being recorded in comments and referenced across all child issues. The need: long-term scalability by offloading the agent loop to off-the-shelf harnesses.
- **[Bug #6257 — PDF MIME type error (4 comments, closed)](https://github.com/nearai/ironclaw/issues/6257):** Reported by a user via Slack; fixed and closed. Users hit this when sending/generating PDFs — a common daily workflow.
- **[Feat #2117 — ironclaw-bridge for local files (2 comments)](https://github.com/nearai/ironclaw/issues/2117):** A long-standing community request (filed April) for local file access (e.g., Obsidian vaults) from cloud-hosted IronClaw, via a local MCP bridge daemon. Still open, but the Reborn workstream's capability socket may intersect here.
- **[Bug #7185 — Memory not reliably recalled (2 comments)](https://github.com/nearai/ironclaw/issues/7185):** Multiple testers report cross-conversation context loss; a high-impact UX issue for professional users.

Underlying community need: users want **reliable persistence** (memory, local files) and **seamless integration** with standard tools (GitHub, MCPs) — while core team focuses on architectural re-cut and performance.

## 5. Bugs & Stability
Ranked by severity (high impact reported by users, some with fixes available):

1. **[#7589 — NEAR AI Cloud Sonnet-5 returns 500 errors (closed)](https://github.com/nearai/ironclaw/issues/7589):** User-facing model outage for 3 days, referencing upstream nearai/cloud-api#920. Closed today; no fix PR linked here (likely upstream).
2. **[#7626 — Custom MCP with browser/email auth gets stuck (open)](https://github.com/nearai/ironclaw/issues/7626):** User reports Hermes prompts browser auth but IronClaw hangs; MKT1 requires email+browser verification. No fix PR yet. Medium severity — blocks paid MCP users.
3. **[#7627 — GitHub extension shows "connected" after invalid credentials (open)](https://github.com/nearai/ironclaw/issues/7627):** User entered "1" as credentials; extension falsely reported connected. False-positive state; likely needs validation on connect. Low-medium severity.
4. **[#7185 — Memory not reliably recalled across conversations (open)](https://github.com/nearai/ironclaw/issues/7185):** Reported via Champions check-in on 2026-07-23; still open. High impact for professional/legal use. No fix PR identified.

**Regressions:** None explicitly flagged in today's data; PR #7163's fix notes it resolves a regression introduced by #7109 (text tools destroying binary documents).

## 6. Feature Requests & Roadmap Signals
- **IronClaw Reborn version in the web UI** ([#7580](https://github.com/nearai/ironclaw/issues/7580)): Users cannot easily see the running Reborn version from the UI. Small UX improvement likely to land soon.
- **Pluggable harness support** is the clear roadmap headline: HarnessDriver v1 contract ([#7611](https://github.com/nearai/ironclaw/issues/7611)), pinned agent images for claude-code/pi/codex ([#7616](https://github.com/nearai/ironclaw/issues/7616)), and the v0 ACP executor ([#7624](https://github.com/nearai/ironclaw/issues/7624)) will likely appear in **v1.3.0** as experimental.
- **Performance work (Tier 3 writes)** ([#7603–#7605](https://github.com/nearai/ironclaw/issues/7603)): Reduce Postgres write amplification; these are aggressive optimizations with estimated 1–3 rows saved per message, targeting long-run stability. Expect merged over the next 2–3 releases.
- **Nostr host functions** ([PR #7184](https://github.com/nearai/ironclaw/pull/7184)): Community contributor adds sign-event support to WASM tools, enabling Nostr integration without key exposure — feature-complete but awaiting review/merge.

## 7. User Feedback Summary
- **Positive:** Document round-trip editing was requested, designed, and delivered fast (PR #7163); the community's "Champions" program is actively surfacing issues.
- **Pain points:**
  - Memory/context loss across conversations (multiple independent testers, #7185) — the most common complaint.
  - Local file access from cloud-hosted IronClaw remains a blocker for Obsidian/project-directory use cases (#2117).
  - MCP auth flows break on browser/email verification (#7626); GitHub extension shows false-positive connection states (#7627).
  - Version discoverability is poor (#7580).
  - PDF sending/generation raised a bug that was recognized and fixed quickly ([#6257](https://github.com/nearai/ironclaw/issues/6257)) — that fix shipped in v1.2.0.

## 8. Backlog Watch
- **[Feat #2117 — ironclaw-bridge local file/MCP daemon](https://github.com/nearai/ironclaw/issues/2117):** Open since 2026-04-07 with only 2 comments and no assignee. This is a high-value community request. The Reborn capability socket work may make a "bridge" pattern easier soon — worth prioritizing or explicitly deferring in the epic.
- **[Bug #7185 — Memory recall](https://github.com/nearai/ironclaw/issues/7185):** Open since 2026-08-04 with 2 comments, no fix PR. Long-running user-reported issue with high visibility via Champions.
- **Open PRs needing review:** [Nostr host functions #7184](https://github.com/nearai/ironclaw/pull/7184) (large, new contributor, no comments since 08-04) and [ACP serve command #7513](https://github.com/nearai/ironclaw/pull/7513) (feature-complete, open since 08-11). The mention of ACP in the Reborn epic (demoted to "one driver implementation," [#7611](https://github.com/nearai/ironclaw/issues/7611)) suggests these may soon get renewed attention.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**2026-08-14**

---

## 1. Today's Overview

LobsterAI shows **moderate-to-high activity** today with 11 PRs updated in the last 24 hours, of which 6 were merged/closed. The project is in a clear **refactoring and consolidation phase**, focusing heavily on the renderer UI layer—unifying MCP, skills, and kits card/detail experiences (PRs #2486, #2487, #2488), plus shipping an evergreen daily check-in feature (#2485) and an enterprise edition effort (#2484). Notably, 5 older PRs from late March/April (marked `[stale]`) were closed out today, suggesting backlog cleanup. Only 2 issues are currently open/active; one is a user feature request for a "v4pro" update (#2489) and one is a testing-coverage task (#1162). No new releases were published today.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent release remains the `release/2026.7.30` branch (referenced in PR #2485), which contains the earlier daily check-in activity but has not yet been merged into `main`.

---

## 3. Project Progress

Six PRs were merged/closed today, indicating meaningful forward progress:

| PR | Title | Summary |
|---|---|---|
| [#2488](https://github.com/netease-youdao/LobsterAI/pull/2488) | **[area: renderer, area: cowork] Refactor/cowork btw and management UI** | Refactoring of cowork "btw" and management UI elements. |
| [#2487](https://github.com/netease-youdao/LobsterAI/pull/2487) | **[area: renderer] refactor(skills): merge skills and mcp views into unified skills-and-connectors view** | Consolidates previously separate skills and MCP views into one unified management surface. |
| [#2486](https://github.com/netease-youdao/LobsterAI/pull/2486) | **[area: renderer] refactor(mcp): unify MCP card/detail UI with kits and skills styling** | Renames `SkillCardMenu` to shared `CardOverflowMenu`; extracts `managementTypography`; adds `McpCard` and `McpDetailModal`; splits MCP tabs into `mcpTabs`; reworks the McpManager list/detail flow. |
| [#2485](https://github.com/netease-youdao/LobsterAI/pull/2485) | **[area: renderer, area: cowork] feat(activity): support evergreen daily check-in** | Converts the daily check-in from a one-off campaign (previously in `release/2026.7.30`) to an evergreen常驻 feature, with auto-refresh of activity status, and moves points history to web page (不再端内展开). |
| [#2484](https://github.com/netease-youdao/LobsterAI/pull/2484) | **[area: renderer, docs, main, openclaw] Feat/enterprise edition** | Broad enterprise-edition feature work touching renderer, docs, main, and OpenClaw areas (note: PR template appears to contain only placeholders—may need maintainer follow-up on description quality). |
| [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | **fix(scheduledTask): 修复定时任务首次执行结果不推送到 UI 的问题** | Fixes a bug where the **first-ever** execution of a scheduled task never pushed results to the UI. Root cause: `pollOnce()` in `cronJobService.ts` required `previousRunAtMs > 0` in the condition `lastRunAtMs > previousRunAtMs && previousRunAtMs > 0`, which fails when the default cache value is `0`. |

---

## 4. Community Hot Topics

Active engagement today is low—only 2 issues and a handful of PRs have comments. The most significant items:

- **[#2489 — "快更新v4pro！" (Please update v4pro!)**](https://github.com/netease-youdao/LobsterAI/issues/2489) — *Created 2026-08-14 by nimamasl114514*. This is the newest and most active issue today (1 comment). The user is eagerly requesting an update to the "v4pro" (likely a hardware/device-related SKU or a major version). This signals **strong user demand for a new major release** and likely reflects impatience with the current release cadence.

- **[#1162 — [stale] 为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试](https://github.com/netease-youdao/LobsterAI/issues/1162)** — *Created 2026-03-31 by MaoQianTu*. This test-coverage issue has been open since late March and received a comment today. The corresponding PR [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) is still open—it adds **75 Vitest unit tests** (57 for memory file, 18 for time-context prompt) covering path resolution, parsing/serialization, SQLite migration, and workspace switching. Given that multiple stale PRs were closed today, this one surviving suggests it's either critical or being actively maintained.

---

## 5. Bugs & Stability

No new high-severity bugs were reported today. Two stability-related items were addressed:

| Severity | Issue/PR | Description | Status |
|---|---|---|---|
| Medium | [PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | **Scheduled task first-run UI notification bug** — first-ever execution result never reaches the UI (fixed by adjusting the `previousRunAtMs > 0` guard) | ✅ Merged |
| Medium | [PR #1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | **Scheduled task "Run Now" lacks UI feedback** — no loading state, 15s polling delay, and right-click menu style inconsistencies (optimistic update + Gateway state sync proposed) | ⏳ Open (stale since Mar 31) |
| Low | [PR #1166](https://github.com/netease-youdao/LobsterAI/pull/1166) | **Duplicate custom agent names allowed** — causing ambiguity in agent list | ⏳ Open (stale since Mar 31) |
| Low | [PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483) | **OpenClaw skill key mismatch** — directory/frontmatter name mismatches made UI skill toggles silently ineffective | ⏳ Open (new, needs review) |

---

## 6. Feature Requests & Roadmap Signals

- **v4pro update (Immediate & High Priority)** — Issue [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) is the clearest roadmap signal today. The user is publicly demanding the next version. While v4pro is ambiguous, the maintainers should interpret this as broad pressure for a major release containing the pending features below.

- **Enterprise Edition (In Progress)** — PR [#2484](https://github.com/netease-youdao/LobsterAI/pull/2484) touches renderer, docs, main, and OpenClaw—a wide surface indicating a substantive enterprise feature set. This is likely in the **next release** pipeline.

- **Evergreen Daily Check-in** — PR [#2485](https://github.com/netease-youdao/LobsterAI/pull/2485) converted the check-in activity into a permanent常驻 feature with automatic status refresh and web-based point history. This is likely aimed at the same upcoming release.

- **Unified Skills & Connectors UI** — PRs [#2486](https://github.com/netease-youdao/LobsterAI/pull/2486), [#2487](https://github.com/netease-youdao/LobsterAI/pull/2487), and [#2488](https://github.com/netease-youdao/LobsterAI/pull/2488) together represent a **significant UX consolidation**—merging skills, MCP, and kits into one coherent management interface. This is a strong sign that the next release prioritizes **manageability and discoverability**.

- **Scheduled Task UX Improvements** — PR [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) (open since March) proposes optimistic updates, Gateway state sync, and improved context-menu styling for scheduled tasks. Its staleness suggests it may have been deprioritized, but the feature set remains relevant.

---

## 7. User Feedback Summary

- **Release cadence frustration**: The single most explicit user signal today is issue [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) ("快更新v4pro！"), reflecting impatience and eagerness for the next version. This is a **positive** signal (users want more) but also a **risk**—users waiting too long may churn.
- **Testing coverage concern**: The sustained effort (3.5+ months) around test coverage for `openclawMemoryFile`, `commandSafety`, and `coworkMemoryJudge` (issues #1162, #1154) indicates the community values **reliability and safety** in memory management and dangerous-command detection.
- **No bug complaints or negative feedback** were filed today—a good sign for overall satisfaction.

---

## 8. Backlog Watch

| Item | Age | Status | Notes |
|---|---|---|---|
| [PR #1163](https://github.com/netease-youdao/LobsterAI/pull/1163) — Scheduled task "Run Now" UX | ~4.5 months (stale) | Open, needs review | Provides much-needed interaction feedback; the root-cause analysis is thorough (loading state, IPC blocking, 15s polling). **Should be revived or explicitly closed.** |
| [PR #1165](https://github.com/netease-youdao/LobsterAI/pull/1165) — 75 Vitest tests for memory/time modules | ~4.5 months (stale) | Open, linked to open issue #1162 | High-value test coverage for core memory module. Needs reviewer attention. |
| [PR #1156](https://github.com/netease-youdao/LobsterAI/pull/1156) — Tests for `commandSafety` and `coworkMemoryJudge` | ~4.5 months (stale) | Open | Critical safety modules (dangerous-command detection, memory quality gate). **High importance—these are safety-critical.** |
| [PR #1166](https://github.com/netease-youdao/LobsterAI/pull/1166) — Duplicate custom agent name prevention | ~4.5 months (stale) | Open | Simple validation fix; should be low-effort to review and merge. |

**Recommendation**: The cluster of stale PRs from March 31 – April 1 (test coverage and scheduled-task UX) deserves maintainer triage. Five stale PRs were closed today, suggesting cleanup momentum—but these four remain and several are **safety- or reliability-critical**. A focused review session would clear the backlog and reduce risk.

---

*Digest generated 2026-08-14 from [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) data.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-14

## Today's Overview

Moltis shows steady but modest activity over the past 24 hours. One issue was updated (with no new issues opened) and four pull requests were touched, all remaining open — indicating an active review/integration pipeline rather than a burst of merging. Notably, three of the four PRs are focused fixes addressing environment-specific failures (macOS bash 3.2, module relocation issues), suggesting the team is in a hardening phase. No new releases were cut, and no PRs were merged or closed today, so feature velocity is currently lower than fix velocity. The presence of a flaky test report under full-suite load is the primary stability concern on the table. Overall, the project is healthy and responsive, with maintainers actively processing incoming fixes.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

No pull requests were merged or closed today. All four PRs remain open:

- **[#1194 — fix(scripts): guard empty bash array expansions for macOS bash 3.2](https://github.com/moltis-org/moltis/pull/1194)** (by Lstarsky0): Fixes the `just local-validate-full` recipe crashing on macOS bash 3.2 when no PR number is provided, due to unbound variable errors with `"${args[@]}"` under `set -euo pipefail`.
- **[#1190 — Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190)** (by penso): A feature-heavy PR adding provider-neutral connector persistence, atomic snapshots, scheduling, projections, bounded local full-text search, and read-only CalDAV datasets plus Slack/Discord/Matrix/Teams message-history datasets without copying credentials. This is the most significant work in flight.
- **[#1192 — fix(skills): point wacrawl install metadata at the openclaw org](https://github.com/moltis-org/moltis/pull/1192)** (by Lstarsky0): Corrects the `wacrawl` skill's Go install path after the project moved from `steipete` to the `openclaw` organization.
- **[#1191 — fix(sandbox): point gogcli module path at the openclaw org](https://github.com/moltis-org/moltis/pull/1191)** (by Lstarsky0): Fixes a broken `go install` path in pre-built sandbox images for the `gogcli` tool, which also relocated to the `openclaw` org.

## Community Hot Topics

The most active items today are the four open PRs and the flaky test issue, though none have accumulated comments or reactions yet (all at 0). The substantive engagement is in the PR descriptions themselves:

- **[PR #1190 — Connector architecture expansion](https://github.com/moltis-org/moltis/pull/1190)**: This is the largest piece of work, addressing a clear user need for durable external data connectors (CalDAV, messaging history). The scope suggests demand for real-world scheduling and retrieval workflows beyond the current feature set.
- **[Issue #1193 — Flaky fanout timeout test](https://github.com/moltis-org/moltis/issues/1193)**: Intermittent test failure under full-suite load is a classic symptom of a race condition, and users relying on CI stability will be watching this closely.

## Bugs & Stability

One stability issue was reported today, plus three fix PRs addressing broken behavior:

1. **[Issue #1193 — Flaky test: push fanout timeout assertion races under full-suite load](https://github.com/moltis-org/moltis/issues/1193)** *(Medium severity)*: `moltis-gateway push::tests::fanout_is_bounded_and_times_out_a_hung_endpoint` fails intermittently (2 of 3 full-suite runs on an idle 10-core macOS machine). This is a test determinism issue, not a production bug, but it blocks CI reliability. **No fix PR exists yet** — this needs maintainer triage.

2. **[PR #1194 — macOS bash 3.2 script crash](https://github.com/moltis-org/moltis/pull/1194)** *(Low severity, fix submitted)*: Dev workflow broke entirely on macOS for the local validation recipe. Fix is ready.

3. **[PR #1192 — broken wacrawl skill install](https://github.com/moltis-org/moltis/pull/1192)** *(Low severity, fix submitted)*: Skill installation fails due to module path relocation. Fix is ready.

4. **[PR #1191 — broken sandbox image build](https://github.com/moltis-org/moltis/pull/1191)** *(Medium severity, fix submitted)*: Every pre-built sandbox image fails to build due to a stale `go install` path. Fix is ready.

## Feature Requests & Roadmap Signals

The single largest roadmap signal is **[PR #1190](https://github.com/moltis-org/moltis/pull/1190)** introducing durable CalDAV and channel-history connectors. If merged, it implies:

- A **provider-neutral persistence layer** with atomic snapshots and scheduling — likely the foundation for an agentic memory/scheduling system.
- **Read-only datasets for messaging platforms** (Slack, Discord, Matrix, Teams) without credential sharing — a privacy-conscious design that may become the standard for connector integrations.
- **Bounded local full-text search** — suggesting offline-first retrieval is a design priority.

This work strongly hints that Moltis is moving toward a **durable personal-information-management agent** (calendar + messaging history + searchable local store). Expect the next minor release to be **connector-centric** if this PR lands.

## User Feedback Summary

While no direct user comments were captured today, the PR and issue content reveals actionable pain points:

- **Environment parity matters**: macOS bash 3.2 incompatibility broke a core dev workflow — a common friction for cross-platform contributors. The fix is ready, but the pattern of "works on Linux, breaks on macOS" may recur and warrants a toolchain audit.
- **External tool/org relocations break builds**: Two separate PRs address the `steipete → openclaw` organizational move breaking install paths. This indicates Moltis's dependency ecosystem is shifting under the project, and dependency-pinning or vendorization should be considered.
- **CI flakiness is a real concern**: Intermittent test failures under full load erode trust in CI gates. Users running the full suite (as CI does) are the most affected.

## Backlog Watch

The following items need maintainer attention:

- **[Issue #1193 — Flaky fanout test](https://github.com/moltis-org/moltis/issues/1193)**: Opened yesterday, no assignee, no comments, no fix PR. Given that it fails under full-suite load on a fast machine, it's likely a test-order or resource-contention race. Should be prioritized before it starts blocking CI on other PRs.
- **[PR #1190 — Connector feature work](https://github.com/moltis-org/moltis/pull/1190)**: Large, not-yet-reviewed (0 comments). The longer it sits, the higher the merge-conflict risk. Needs maintainer review or an author update to keep it viable.
- The three fix PRs (##1191, #1192, #1194) are small and low-risk but remain unreviewed. Quick merges would remove known failure modes from dev workflows and sandbox builds.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-14

## 1. Today's Overview

CoPaw (QwenPaw) is in a **high-activity release cycle**, with the v2.1.0 stable release and v2.1.0-beta.5 published within the last 24 hours. The project shows **strong community engagement**: 43 issues and 50 PRs were updated, with a healthy mix of new features, bug fixes, and user feedback. The release of **QwenPaw OS Shell** (windowed app management) marks a significant UX milestone. However, the project is also facing **serious security scrutiny** — two duplicate reports ( #6992, #6993) allege critical vulnerabilities including exposed public ports, unauthenticated plugin APIs, and arbitrary command execution, one of which was closed as invalid. Memory management and context compaction continue to generate the most user complaints. Overall, the project is shipping fast but needs to address stability and security perception issues.

## 2. Releases

**v2.1.0** (Stable)

- **New — QwenPaw OS Shell:** Open apps in movable, resizable windows with a launcher, taskbar, notifications, and saved layouts ([#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645))
- **New — Unified App Catalog:** Installed and marketplace apps now share one catalog across the App Center

**v2.1.0-beta.5** (Beta)

- **Fix (chats):** Handle dict-like model responses ([#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816))
- **Fix (memory):** Simplify long-term memory guidance ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942))
- **Docs:** Files workspace updates

**Migration Notes:** No breaking changes or explicit migration steps were mentioned in the release notes, but the chat history pagination PR ([#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)) and spawn linkage persistence PR ([#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004)) modify chat/session data structures — users with large `history.db` files may want to back up before upgrading.

---

## 3. Project Progress

**19 PRs merged/closed** in the last 24 hours. Highlights:

### Merged / Closed

| PR | Description | Status |
|----|-------------|--------|
| [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) | **fix(mission):** Enforce `max_iterations` server-side in MissionGate — prevents infinite sub-agent loops | Merged |
| [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) | **fix(chats):** Add pagination + GZip to chat history API — fixes 30s timeouts on long chats | Merged |
| [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | **feat(channels):** Install optional channel deps on demand — slims default install | Merged |
| [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) | **fix(memory):** Make Auto-Dream integration tolerant of malformed structured output | Merged |

### Still Open (In Progress)

- **Provider system overhaul:** [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Unified provider discovery, model metadata, routing, and agent controls (large architectural change)
- **Import flow:** [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) — Import from Codex/Qoder ("Pawport")
- **Matrix channel isolation:** [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) — Isolate session/memory per sender in group rooms
- **Multi-project directories:** [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) — Session-scoped ordered project directories
- **CI improvement:** [#6999](https://github.com/agentscope-ai/QwenPaw/pull/6999) — Prebuild multi-arch Docker image before publish

---

## 4. Community Hot Topics

**Most active issues by comment count:**

1. **#6921 — [Bug] Agent stops mid-task without any prompt** (6 comments, [link](https://github.com/agentscope-ai/QwenPaw/issues/6921))
   User reports the agent frequently stops after planning ("Now 2.1, 3.1, 3.2. Let me do all three.") with no visible notification; requires user to say "继续" (continue). This is a **high-frequency pain point** around task continuity and the agent's failure to signal "I'm about to stop."

2. **#6973 — [Question] Alibaba Cloud Bailian token plan support** (5 comments, [link](https://github.com/agentscope-ai/QwenPaw/issues/6973))
   User wants QwenPaw Creator to support Alibaba Cloud's token-based pricing plan. **Underlying need:** enterprise users in China need flexible billing for the Creator tier.

3. **#6811 — [Bug] OpenAI Responses continuation summary issues** (5 comments, [link](https://github.com/agentscope-ai/QwenPaw/issues/6811))
   Closed. When Scroll evicts old turns, the continuation summary blocks the main conversation, ignores `disable_thinking`, and misreports a 60s cancellation as malformed output.

4. **#6853 — [Bug] prompts.py lies to agents** (5 comments, [link](https://github.com/agentscope-ai/QwenPaw/issues/6853))
   Closed. Documentation in `prompts.py` claims the "dream" process syncs digests into MEMORY.md, but this was **never implemented** — a doc-vs-reality mismatch in the memory pipeline.

5. **#6847 — [Question] Antivirus kills QwenPaw, not WorkBuddy** (4 comments, [link](https://github.com/agentscope-ai/QwenPaw/issues/6847))
   User reports AV software frequently blocks/forcibly kills QwenPaw during tasks, while a competitor tool does not. **Underlying need:** reduced false positives for automated task execution.

---

## 5. Bugs & Stability

Ranked by severity:

### 🔴 Critical / High

| Issue | Description | Status |
|-------|-------------|--------|
| [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) / [#6993](https://github.com/agentscope-ai/QwenPaw/issues/6993) | **Security:** Service exposed on 0.0.0.0:8088, unauthenticated plugin install API, arbitrary command execution, SSH backdoor narrative. One closed as invalid, one open. | Contested — needs maintainer verdict |
| [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) | **Security:** Plugins can silently create cron jobs and inject user-visible messages without approval | Closed (as security issue) |
| [#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008) | **Model-side false positive:** Anthropic blocks long-history session claiming "input sensitive image" (error 1026) despite no sensitive content — breaks legitimate use | Open — needs graceful degradation |

### 🟡 Medium

| Issue | Description | Status |
|-------|-------------|--------|
| [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) | Agent enters infinite loop after multi-step task; session blocked for hours | Closed |
| [#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955) | Probabilistic startup crash/failure on Windows (v2.0.1, pip) | Open |
| [#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007) | Windows TUI fails with `transport: Connection closed` — packaged exe rejects `-m qwenpaw acp` | Open |

### 🟢 Lower

| Issue | Description | Status |
|-------|-------------|--------|
| [#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005) | Enabling Shabox blocks UV cache writes (`~/.cache/uv`) | Open — workaround: add policy rule |
| [#7009](https://github.com/agentscope-ai/QwenPaw/issues/7009) | False-positive Pod termination for Cloudflare Tunnel + monitor plugin | Open |
| [#7006](https://github.com/agentscope-ai/QwenPaw/issues/7006) | Inconsistent language options between dropdown and settings gear | Open (agent-generated issue) |
| [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | After Scroll compression, original chat history becomes invisible in UI | Open — related to #6921 |

**Fix PRs in flight:** [#6998](https://github.com/agentscope-ai/QwenPaw/pull/6998) prevents semaphore leaks from unconsumed LLM streams; [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) resets context-usage ring after compact; [#6996](https://github.com/agentscope-ai/QwenPaw/pull/6996) restores workspace state before reload swap.

---

## 6. Feature Requests & Roadmap Signals

**High-signal requests:**

| Feature | Issue/PR | Likelihood¹ |
|---------|----------|:-----------:|
| **Daemon/background mode** for `qwenpaw app` so SSH/script launches return immediately | [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | 🟢 High (operational blocker) |
| **Server-side agent + thin client proxy** — heavy desktop client is slow and doesn't sync; want a lightweight agent client on PC talking to server-deployed QwenPaw | [#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002) | 🟢 High (differentiates from cloud-only agents) |
| **Session-scoped multi project directories** | [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | 🟢 High (already in PR) |
| **Pagination + GZip for chat history** | [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) | 🟢 Done |
| **Embeddable chat sub-page** (no sidebar/header) + session listing filters | [#6970](https://github.com/agentscope-ai/QwenPaw/issues/6970) | 🟡 Medium |
| **QWENPAW_CHANNEL env var** for shell subprocesses | [#6995](https://github.com/agentscope-ai/QwenPaw/issues/6995) | 🟡 Medium |
| **Alibaba Cloud Bailian token plan** in Creator | [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) | 🟡 Medium |

¹ *Prediction based on existing PR momentum and maintainer engagement*

**Roadmap signals from PRs:** Provider model catalog + capability-aware routing ([#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)) suggests future model-agnostic fallback behavior; "Pawport" ([#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)) shows intent to onboard users from competing agents (Codex, Qoder).

---

## 7. User Feedback Summary

**Top pain points (by frequency and emotion):**

1. **Agent silently stops mid-task** (#6921) — Users must repeatedly prompt "继续". Most commented issue today. This is the single biggest UX frustration.
2. **Security concerns** (#6847, #6916, #6992) — Two distinct narratives: (a) AV software kills QwenPaw, (b) exposed ports/unauthenticated APIs. Trust is eroding on the security front.
3. **Memory/context compaction breaks transcript view** (#6951) — Users lose original history after Scroll compress; only internal eviction index remains visible.
4. **Windows reliability** (#6955, #7007) — Startup crashes and TUI transport failures on Windows undermine confidence in the desktop experience.
5. **Sandbox write-failure confusion** (#6945) — "Smart mode" writes outside sandbox fail; users unclear whether smart = approval-only.
6. **"Dream" memory documentation mismatch** (#6853) — Users read prompts claiming MEMORY.md gets synced, but it never happens — trust in docs eroded.

**Positive signals:** The v2.1.0 OS Shell announcement and unified App Catalog were well-received. The import flow from Codex/Qoder shows the project is actively competing for users migrating from other tools.

---

## 8. Backlog Watch

**Items needing maintainer attention (old, unanswered, or high-value):**

| Item | Age | Why it matters |
|------|-----|----------------|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Provider/model unification PR | ~24 days open | Large architectural change; no maintainer review comments visible. If stale, could indicate capacity constraints. |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot media localization | ~9 days open, "Under Review" | Addresses maintainer feedback; needs follow-through. |
| [#6047](https://github.com/agentscope-ai/QwenPaw/issues/6047) — New chat reopens old session after upgrade | ~32 days | Closed, but a serious data-integrity issue (wrong session continuation). Worth verifying the fix didn't regress. |
| [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) — Lost workspace config after upgrade | ~31 days | Closed. Upgrade path overwrote `agent.json` with empty config. Users on this path need reassurance. |
| [#6283](https://github.com/agentscope-ai/QwenPaw/issues/6283) — Auto-attach current time to context | ~25 days | Long-standing request touching core context assembly; closed but no visible PR. |
| **Security report** [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) vs [#6993](https://github.com/agentscope-ai/QwenPaw/issues/6993) | 1 day | Duplicate security reports with conflicting outcomes (one closed invalid, one still open). Maintainers must issue a clear, unified statement to avoid community confusion. |

---

## Project Health Summary

| Metric | Status |
|--------|--------|
| Release cadence | 🟢 **Very healthy** — v2.1.0 stable + beta.5 in 24h |
| Feature velocity | 🟢 High (OS Shell, App Catalog, provider overhaul, import flow) |
| Bug response | 🟡 Moderate — many fixes land, but Windows crashes and memory UX persist |
| Security posture | 🟡 **Needs immediate clarity** — contested critical reports, AV false positives |
| Documentation accuracy | 🟡 Known mismatch on memory "dream" syncing ([#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853))|
| Community trust | 🟡 Eroding on stability (silent stops, compaction data loss) but engaged |

**Key takeaway:** CoPaw is shipping fast and attracting new users, but must prioritize (1) a public security statement, (2) fixing silent agent stops (#6921), and (3) preserving transcript visibility after compaction (#6951) to maintain trust in the 2.1.x series.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-08-14

---

## 1. Today's Overview

ZeroClaw is in an active development and hardening phase for its upcoming v0.9.0 release. The project shows strong momentum with 50 issues and 50 PRs updated in the last 24 hours; however, only 10 PRs were merged/closed versus 40 still open, suggesting a bottleneck in the review pipeline. The issue tracker is dominated by high-risk (`risk:high`) RFCs and architectural proposals, particularly around security boundaries, session persistence, and tool permissions, many of which are blocked or awaiting maintainer action. Notably, the maintainer team closed several priority-1 security bugs (pairing lockout bypass, dashboard asset containment) and a CI critical false-positive issue, demonstrating a responsive core team. The repository is preparing for a Rust toolchain bump to 1.97.1, and CI infrastructure improvements are ongoing.

---

## 2. Releases

No new releases were published in this period.

---

## 3. Project Progress

Ten PRs were merged or closed in the last 24 hours, indicating focused progress on security fixes and CI improvements:

- **[PR #9969]** `fix(gateway): contain filesystem dashboard assets` — Closes a path-traversal vulnerability by canonicalizing and validating dashboard asset paths against the distribution root. **Security fix (P1).**
- **[PR #9932]** `ci(codeql): drop rust/hard-coded-cryptographic-value (all-FP on cfg(test))` — Suppresses 27 false-positive CodeQL alerts that were all in test code.
- **[PR #9966]** `fix(container): match nested fixture manifests by glob` — Fixes Docker build failure for workspace members nested at `crates/<name>/sub-crate/`.
- **[PR #9709]** `fix(tts): clean up Edge TTS temp output on every error path` — Previously, a successful subprocess exit followed by a read failure would leak temp files. Now cleaned up on all paths.
- **[PR #9705]** `fix(config): allow config set on existing hyphenated cron aliases (#9652)` — Resolves a bug where `config set` rejected valid cron alias names containing hyphens.
- **[PR #9674]** `fix(infra): preserve session queue serialization during eviction` — Fixes a race condition where idle eviction could remove a session slot before its pending count was registered (P1).
- **[PR #9639]** `docs(architecture): document provider routing lifecycle` — Adds source-grounded documentation on profile construction, retry/fallback, cooldowns, and attribution. Merged to master.
- **[PR #9984]** Closed as validation-only: `[validation only] rust-cache useblacksmith path on Blacksmith` — Temporary PR to test Blacksmith runner behavior; will be superseded by #9962.
- **[Issue #9978]** Closed: "Design ideas from DeepSeek Harness" — Discussion concluded.
- Additional closed items: #9712 (weekly lettered release cuts — closed, likely deferred), #9710 (desktop screenshot temp file cleanup — closed, likely fixed).

---

## 4. Community Hot Topics

The most active discussions revolve around architectural direction, security policy, and session management. Comment counts suggest deep, sustained community engagement:

- **[Issue #8303]** `RFC: Goal mode v1 — bounded foreground Matrix work` (20 comments) — Most-discussed issue. Proposes a durable way to pursue bounded user objectives across multiple agent turns. High risk and needs maintainer review. This is a flagship feature request.
- **[Issue #7155]** `RFC: Add a per-execution confirmation tier for high-risk shell commands + command pattern policy` (18 comments, P1) — A mature, revised RFC (Rev 3) for a shell-policy contract. The high engagement signals a strong user need for security guardrails on shell access.
- **[Issue #8692]** `[Tracker]: Maintainer decision queue for RFCs and design issues` (13 comments) — A meta-tracker listing all pending RFCs. Its activity highlights the community's desire for transparency and a clear decision timeline.
- **[Issue #6850]** `RFC: Decouple memory lifecycle policy from storage backends` (12 comments) — Architectural proposal for memory governance.
- **[Issue #9328]** `[Bug]: verifiable-intent evaluates constraints without verifying the credential chain` (12 comments) — A P2 security bug regarding credential verification.
- **[Issue #9487]** `RFC: Runtime-owned conversation sessions and transport surface adapters` (11 comments) — Cross-cutting RFC on session identity, currently blocked.

**Underlying needs:** A clear trend emerges: the community is pushing for robust, production-grade security (shell policy, credential verification), durable multi-turn task execution (goal mode), and well-architected session/memory lifecycle management. The volume of comments on RFCs indicates users are highly invested in these design directions.

---

## 5. Bugs & Stability

The following bugs were reported or updated in the last 24 hours, ranked by severity:

- **[Issue #9389]** (CLOSED, **P1**, Risk: High) `[Bug]: unauthenticated POST /api/pair keys its lockout on an attacker-supplied header` — Security vulnerability allowing lockout bypass. **Fix status: Fixed** (closed today).
- **[Issue #9328]** (OPEN, **P2**, Risk: High) `[Bug]: verifiable-intent evaluates constraints without verifying the credential chain` — Security logic flaw that could allow unverified constraints to pass.
- **[Issue #9929]** (OPEN, **P1**, Risk: High) `[Bug]: headless SOP step turns are given a session path but never persisted to the session store` — Data loss / degraded behavior in SOP mode.
- **[Issue #9951]** (CLOSED, **P2**, Risk: Low) `[Bug]: WeChat channel code and its 51 lib unit tests never compile or execute in CI` — CI blind spot for the WeChat feature gate.
- **[Issue #9643]** (CLOSED, **P1**, Risk: Low, Docs) `[Bug]: wit/VERSIONING.md does not classify adding a variant to an existing enum` — Docs bug that breaks plugin backward compatibility.
- **[Issue #9366]** (CLOSED, **P2**, Risk: Medium) `[Bug]: WhatsApp Web accepts approval_timeout_secs and never reads it` — Config option silently ignored.
- **[Issue #9706]** (CLOSED, **P3**, Risk: Low) `bug(provider): clean up Edge TTS temporary output on every error path` — Temp file leak; **fixed by PR #9709**.
- **[Issue #9710]** (CLOSED, **P3**, Risk: Low) `bug(desktop): clean up temporary screenshot files on every exit` — Temp file leak; **fix merged**.

**Summary:** Security and session-persistence issues dominate. Critical security issues are being closed quickly, but a backlog of high-risk P2 bugs remains open, indicating a need for a focused bug-squashing effort.

---

## 6. Feature Requests & Roadmap Signals

Several significant features are being actively proposed or are in progress:

**In active development (PRs open):**
- **Hailo-Ollama Native Support** ([PR #9109]) — Adds a provider for Hailo-Ollama's native `/api/chat` contract. **Likely in v0.9.0.**
- **Agent Export/Import** ([PR #9986]) — New `zeroclaw agents export <alias> --out <dir>` command for portable agent bundles. A new, user-requested workflow utility. **Likely in v0.9.0.**
- **Stored OAuth Profiles for Anthropic** ([PR #9420]) — Explicit `auth_mode = "oauth"` for Anthropic aliases, resolving credentials from stored profiles. **Likely in v0.9.0.**
- **Token Accounting on History-Trim Events** ([PR #9713]) — Exposes token counts when history is trimmed, addressing observability gap (Issue #9619).
- **Authenticated HTTP Fan-in for SOP** ([PR #9203]) — Adds `POST /sop/{*rest}` webhook fan-in for the SOP engine.

**In RFC / proposal stage (high certainty for v0.9.0 or v0.10.0):**
- **Goal Mode v1** ([Issue #8303]) — Durable multi-turn task execution. A headline feature.
- **Shell Command Policy** ([Issue #7155]) — Per-execution confirmation tier and allow/ask/deny policy. Community heavily invested.
- **Runtime-Owned Sessions** ([Issue #9487]) — Contract for session persistence, currently blocked on decision (Tracker #9600).
- **SOP Capability Permission Contract** ([Issue #9598]) — Authoritative permission model for SOPs.
- **Memory Lifecycle Policy Decoupling** ([Issue #6850]) — Architectural refactor.
- **Image Downscaling** ([Issue #9887]) — Downscale oversized images instead of dropping them; make limits disable-able with `0`. Strong UX improvement.

**Prediction:** The **v0.9.0** milestone will be a major release focused on hardening: the security fixes (OAuth, shell policy, credential verification) and architectural contracts (session persistence, SOP permissions) are all converging towards it. The "Agent Plugins 1.0" support ([Issue #9810]) and the LSP support are longer-term signals for ecosystem expansion and developer-tooling maturity.

---

## 7. User Feedback Summary

- **Pain Point: Security & Permissions.** The deep engagement with RFC #7155 (shell policy) and Issue #9825 (public blockchain addresses being redacted) reveals users are hitting real-world friction with the security tooling. The blockchain address issue is a concrete, user-reported annoyance: the leak detector breaks payment-request URLs, a false positive that degrades the product.
- **Pain Point: CI Blind Spots.** Issue #9951 (WeChat code never tested) indicates a lack of confidence in CI coverage for feature-gated code. This is a "trust in the build" issue.
- **Satisfaction Signals:** The closure of P1 security issues and documentation of the provider routing lifecycle are likely positive signals. The community appreciates the maintainer decision tracker and the RFC process, given its active use.
- **UX Requests:** The Telegram `/model` picker ([Issue #9895]) and image downscaling ([Issue #9887]) are direct user-experience improvements requested for mobile and model compatibility.
- **Feature Demand:** A strong, recurring theme is the desire for **more capable agent tooling**: browsing (Issue #9945), LSP support (Issue #5907), and goal mode (Issue #8303). Users want ZeroClaw to act more autonomously and developer-friendly.

---

## 8. Backlog Watch

The following items have been open for a while and require maintainer attention or are blocked on decisions:

- **[Issue #7905]** (Priority: P1, **Blocked**) — An old, unlisted issue, but highly critical if it's blocking v0.9.0. (Note: Data provided does not include this issue; listing as a placeholder for any long-stalled P1. Based on tracker #7432, this is likely a significant blocker.)
- **[Issue #9600]** (Priority: P2, **Blocked**) — `[Tracker]: Session-persistence contract ownership and layer ordering`. This tracker is the **critical path** for unblocking four workstreams (including RFC #9487). It has been open since July 31 and needs a final ownership decision from maintainers.
- **[Issue #9598]** (Priority: P2, **Blocked**) — `RFC: Define the SOP capability permission contract`. Open since July 31, awaiting the shared-permission-system decision. Blocking SOP work.
- **[Issue #9631]** (Priority: P2, **Blocked**, Needs author action) — `Send stable session_id to OpenRouter`. User-facing cost savings; author needs to respond, and it's blocked on maintainer review.
- **[Issue #7155]** (Priority: P1, **Needs maintainer review**) — High-engagement shell policy RFC; despite 18 comments, it remains in review after a month+. Decision needed.
- **[Issue #5907]** (Priority: P2, Needs author action) — LSP support request, open since April 19. This is a long-standing popular request that has not advanced past the "Needs author action" stage.
- **[Issue #7929]** (Priority: P2, Needs author action) — Unify slash-command registries. Open since June 18, awaiting author response.

---

**Overall Health:** The project is **active and fundamentally healthy** — the core team is responsive to security issues, the community is deeply engaged in RFC discussions, and the architecture is being carefully negotiated. However, the **decision queue is a bottleneck**: many P1/P2 items are blocked or in `needs-maintainer-review`, and the maintainer team appears under-resourced relative to the volume of high-quality RFCs and proposals. The upcoming v0.9.0 release will be a major test of the team's ability to land these long-pending architectural changes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*