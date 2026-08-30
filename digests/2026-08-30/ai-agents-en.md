# OpenClaw Ecosystem Digest 2026-08-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-30 04:14 UTC

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

Based on the GitHub data provided for OpenClaw (github.com/openclaw/openclaw) on 2026-08-30, here is the project digest:

---

## OpenClaw Project Digest — 2026-08-30

### 1. Today's Overview
OpenClaw shows a high level of activity with **1,000 items updated in the last 24 hours** (500 issues + 500 PRs), indicating a very active development and community cycle. The project is in a strong review and bug-fixing phase, with a significant number of issues (74%) remaining open and requiring maintainer attention. A large portion of the most-discussed issues center on **message delivery reliability and session state integrity** across various channels (WhatsApp, Slack, Telegram), which appears to be a primary pain point. While many critical (P1) issues are open, the presence of `clawsweeper` automation labels suggests an active triage process. No new releases were published today.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
The 170 merged/closed PRs from the last day show key areas of stabilization, based on the top merged/closed PRs:
- **Infrastructure & Performance:** PR #123975 merged, which cleaned up `tsgo` process trees on timeout or signal, improving build reliability. PR #126424 (was open, now closed) for keeping conversation delivery within agent bindings, a critical fix for multi-agent security.
- **Major Fixes:** PR #130993 (closed) addressed six failures in the long-session compaction pipeline, a large fix (size: XL) for the critical context-overflow issues. PR #126424 (closed) addressed multi-agent messaging security.
- **Feature Advancements:** PR #122846 remains open, proposing a per-response tool-call block cap to prevent CLI loopback buffer overflows. PR #101665 remains open, and would allow plugin tools to yield turns, preventing races with native approval flows.

### 4. Community Hot Topics
The most active discussions highlight deep concerns about data loss and reliability:
- **Critical Gateway Memory Leak ([#91588](https://github.com/openclaw/openclaw/issues/91588))**: With 22 comments, this is the top issue. RSS growing to 15.5GB leading to OOM crashes is a major stability concern for production users.
- **Embedded Prompt Cache Breaks ([#102175](https://github.com/openclaw/openclaw/issues/102175))**: A P1 bug showing provider prompt-cache reuse fails across boundaries, impacting performance and cost.
- **WhatsApp Image Wedge ([#96834](https://github.com/openclaw/openclaw/issues/96834))**: A P1 bug where inbound WhatsApp images wedge the message lane for ~3 minutes, causing session state issues and message loss.
- **Cron Agent Stalls on DeepSeek ([#121953](https://github.com/openclaw/openclaw/issues/121953))**: A P1 bug where the `[cron:<jobId>]` prefix causes delays on DeepSeek's API, impacting scheduled task reliability.

**Underlying Need:** Users are experiencing significant pain with **message loss, session corruption, and process crashes** that disrupt real-world workflows, particularly in multi-channel and long-running session scenarios.

### 5. Bugs & Stability
Stability issues are the top concern today, ranked by severity:
- **Critical (P0/P1):**
    - **Memory Leak & OOM Crashes ([#91588](https://github.com/openclaw/openclaw/issues/91588))**: Process grows to 15.5GB and gets killed. No fix PR linked.
    - **Message Delivery Failures:** Multiple P1 issues show messages generated but not delivered, including Slack ([#96692](https://github.com/openclaw/openclaw/issues/96692), [#131150](https://github.com/openclaw/openclaw/issues/131150)) and WhatsApp ([#96834](https://github.com/openclaw/openclaw/issues/96834)).
    - **Silent Truncation ([#84516](https://github.com/openclaw/openclaw/issues/84516))**: Codex app-server truncates replies at ~1100 chars with no error, causing silent data loss.
    - **Session State Corruption ([#102175](https://github.com/openclaw/openclaw/issues/102175), [#74586](https://github.com/openclaw/openclaw/issues/74586))**: Breaks in prompt caching and memory search causing session failures.
- **High (P1):**
    - **Zombie Processes ([#97616](https://github.com/openclaw/openclaw/issues/97616))**: Leaked child processes causing runtime degradation.
    - **Overflow Retry Data Loss ([#132762](https://github.com/openclaw/openclaw/issues/132762))**: Retry can end successfully without final delivery.

**Fix PRs Exist:** PRs exist to address some of these critical issues, such as [#132723](https://github.com/openclaw/openclaw/pull/132723) for Slack message loss and [#132437](https://github.com/openclaw/openclaw/pull/132437) for code-mode failures.

### 6. Feature Requests & Roadmap Signals
Users are requesting critical missing features for broader adoption:
- **Multiple Azure/Teams Bots ([#71058](https://github.com/openclaw/openclaw/issues/71058))**: A clear request to support multiple Teams bot identities on a single Gateway, signaling a need for multi-tenant enterprise support.
- **Automatic Config Rollback ([#79164](https://github.com/openclaw/openclaw/issues/79164))**: Users want safety nets for configuration changes to prevent downtime.
- **Stream Repetition Safeguard ([#44965](https://github.com/openclaw/openclaw/issues/44965))**: A request to halt and confirm on repeated output loops, indicating frustration with model behavior.
- **i18n for Slash Commands ([#79458](https://github.com/openclaw/openclaw/issues/79458))**: A specific request for localized command descriptions, highlighting the growing international user base.
- **SDK Stabilization ([#74704](https://github.com/openclaw/openclaw/issues/74704))**: A maintainer-flagged goal to stabilize the SDK for external clients, a positive signal for the ecosystem.

**Prediction:** These features are likely candidates for a future release as they address core scalability (multi-tenant) and safety (rollback) requirements.

### 7. User Feedback Summary
- **Data Loss is the Biggest Pain Point:** Many comments and high reactions are on issues where messages are lost, truncated, or duplicated ([#84516](https://github.com/openclaw/openclaw/issues/84516), [#96692](https://github.com/openclaw/openclaw/issues/96692), [#39476](https://github.com/openclaw/openclaw/issues/39476)). The community is frustrated by silent failures.
- **Reliability in Production:** Users are running OpenClaw for critical operations and the OOM crashes ([#91588](https://github.com/openclaw/openclaw/issues/91588)) and zombie processes ([#97616](https://github.com/openclaw/openclaw/issues/97616)) erode trust in long-running stability.
- **Cross-Platform Concerns:** Issues like the Windows Scheduled Task failure ([#91144](https://github.com/openclaw/openclaw/issues/91144)) and macOS memory detection ([#47273](https://github.com/openclaw/openclaw/issues/47273)) show that non-Linux support still requires attention.
- **Frustration with Regression:** Reports like the Codex truncation ([#84516](https://github.com/openclaw/openclaw/issues/84516)) and Matrix dispatch failure ([#90325](https://github.com/openclaw/openclaw/issues/90325)) note that things worked before, indicating a need for regression testing.

### 8. Backlog Watch
Several issues have been open for a long time without being resolved, requiring maintainer attention:
- **Long-Standing Reliability Issues:** Issues like [#91588](https://github.com/openclaw/openclaw/issues/91588) (Memory Leak, June), [#65374](https://github.com/openclaw/openclaw/issues/65374) (Dreaming System Contamination, April), and [#78493](https://github.com/openclaw/openclaw/issues/78493) (Sudo Update Ownership, May) remain unresolved for months and are critical for system health.
- **Regression Watch:** Issues flagged as `regression` continue to pop up, such as [#87756](https://github.com/openclaw/openclaw/issues/87756) (Lobster Workflow Hang), [#99586](https://github.com/openclaw/openclaw/issues/99586) (Blank Tool Surface), and [#50490](https://github.com/openclaw/openclaw/issues/50490) (Feishu Activation Mode). This indicates a need for more robust regression testing in CI.
- **Platform Specific Gaps:** Issues like [#47273](https://github.com/openclaw/openclaw/issues/47273) (macOS Memory Detection, March) have been open for over 5 months, indicating a lack of maintenance for non-Linux platforms.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: Personal AI Assistant Open-Source Landscape
**2026-08-30**

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is undergoing a **stabilization-and-hardening phase**, with the largest projects (OpenClaw, NanoClaw, ZeroClaw) prioritizing reliability fixes, security patches, and architecture refactors over new feature development. The ecosystem shows a clear **bifurcation between high-velocity projects** with large contributor bases (OpenClaw, ZeroClaw, NanoClaw) and **low-activity maintenance windows** (LobsterAI, Moltis, PicoClaw), with Hermes Agent and NanoBot in between. Across all active projects, **message delivery reliability, session state integrity, and process stability** are the dominant pain points, with users running these agents for production-critical workflows. The ecosystem is converging on **context-window economics** (compaction, token budgets, summarization) as the next major technical frontier, driven by measurable cost multipliers in long-running sessions. Notably, the **mobile/remote access gap** persists across multiple projects, indicating a significant unmet demand for cloud-native, always-on assistant experiences.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Merged/Closed PRs | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ❌ None | 170 | ⚠️ 62/100 — High velocity, critical bug backlog |
| **NanoClaw** | 5 | 43 | ❌ None | 27 | 🟢 82/100 — Rapid fix turnaround, efficient |
| **ZeroClaw** | 26 | 50 | ❌ None | 8 | 🟢 78/100 — High activity, healthy contributor diversity |
| **Hermes Agent** | 50 | 50 | ❌ None | 12 | 🟡 70/100 — Active triage, no merges listed |
| **NanoBot** | 0 | 13 | ❌ None | 4 | 🟢 85/100 — Low noise, high merge rate |
| **IronClaw** | 1 | 6 | ❌ None | 0 | 🟡 72/100 — Focused, stalled merge pipeline |
| **PicoClaw** | 2 | 3 | ❌ None | 2 | 🟡 68/100 — Moderate, critical bugs open |
| **CoPaw** | 10 | 6 | ❌ None | 0 | 🟡 66/100 — Active discussions, low merge velocity |
| **LobsterAI** | 0 | 0 | ❌ None | 0 | 🔴 35/100 — Stalled, PRs 5+ months stale |
| **Moltis** | 1 | 0 | ❌ None | 0 | 🔴 42/100 — Minimal activity, one new bug |
| **NullClaw** | — | — | — | — | ⚫ Inactive (0 events) |
| **TinyClaw** | — | — | — | — | ⚫ Inactive (0 events) |
| **ZeptoClaw** | — | — | — | — | ⚫ Inactive (0 events) |

*\*Composite score: activity volume, merge rate, response time, bug backlog severity, contributor diversity.*

**Key observations:**
- **No releases** across any project in the last 24 hours — ecosystem is in a change-batching phase.
- **OpenClaw** dominates raw volume but shows signs of **review bottleneck** (74% of issues open, critical P1s unaddressed for months).
- **NanoClaw** has the most **efficient throughput** — 27 merges from 43 PRs with zero complaint volume.
- **LobsterAI** is the **biggest concern** — 5 PRs stale for ~5 months signals maintainer abandonment risk.
- **NullClaw/TinyClaw/ZeptoClaw** are effectively **dormant**.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Unmatched scale**: 1,000 items/day activity dwarfs all peers (50x NanoClaw, 10x ZeroClaw/Hermes). This represents the largest user base and contributor pool in the ecosystem.
- **Channel breadth**: WhatsApp, Slack, Telegram, Matrix, Discord, Codex — the widest platform coverage. NanoClaw (Slack, Signal) and ZeroClaw (Telegram) are narrower.
- **Production deployment**: Users report running critical workflows at scale (memory leak reaching 15.5GB, multi-agent security concerns) — evidence of enterprise-grade usage not seen in smaller projects.
- **Automation maturity**: `clawsweeper` triage automation shows sophisticated process investment.

### Technical Approach Differences
- **Architecture**: Modular `gateway` + `agent` + `channels` binding model; peers (NanoBot, PicoClaw) use simpler monolithic or runner-centric designs.
- **Scale assumptions**: Built for multi-channel, multi-session, high-concurrency scenarios; peers assume single-user, single-session typical usage.
- **Compaction pipeline**: Advanced long-session compaction pipeline (receiving XL-size fixes) vs. peers still designing compaction (IronClaw, NanoBot PRs).

### Community Size Comparison
| Metric | OpenClaw | Nearest Peer |
|---|---|---|
| Daily active PRs | 500+ | 50 (ZeroClaw) |
| Daily issues | 500+ | 26 (ZeroClaw) |
| Distinct contributors | ~15+ human + AI | 12+ (ZeroClaw) |
| Review latency | 74% open rate | 42% open rate (NanoClaw) |

### Risks
- **Scaling pain**: The volume-to-review ratio is unsustainable — critical bugs (P1 memory leak, P1 WhatsApp wedge) sit unaddressed for months while new issues flood in.
- **Regression frequency**: Multiple reports flag "worked before" patterns, indicating insufficient CI regression coverage relative to change volume.
- **Non-Linux neglect**: macOS memory detection and Windows task scheduler issues remain open for 3–5+ months — a gap smaller competitors could exploit.

---

## 4. Shared Technical Focus Areas

These requirements emerged across multiple projects simultaneously, indicating ecosystem-level needs:

### 4.1 Context Compaction & Cost Control
| Project | Evidence |
|---|---|
| **IronClaw** | PR #7978 (bound summarizer input), #7977 (loop termination), Issue #7824 (4.1x cost multiplier measured) |
| **OpenClaw** | PR #130993 (compact pipeline), #122846 (tool-call caps) |
| **NanoBot** | PR #5568 (runner-owned compaction) |
| **NanoClaw** | PR #3664 (fast-mode tier) |
| **ZeroClaw** | PR #9196 (budget preflight) |

**Emerging requirement:** Deterministic, provider-agnostic compaction with measurable budget ceilings — not just "smart summarization."

### 4.2 Sandbox Security Hardening
| Project | Evidence |
|---|---|
| **NanoBot** | PR #5536 (fail-closed restricted shells) |
| **ZeroClaw** | RFC #6996 (granular sandbox policy), PR #9402 (Docker-in-Docker avoidance) |
| **PicoClaw** | PR #3337 (MCP hang — security degradation) |

**Emerging requirement:** Guaranteed isolation for restricted execution environments, not just path-level checks that can be bypassed.

### 4.3 Message Delivery Reliability
| Project | Evidence |
|---|---|
| **OpenClaw** | 5+ P1 issues: Slack message loss, WhatsApp wedges, silent truncation |
| **NanoClaw** | #3660 (readonly DB blocks all outbound) |
| **PicoClaw** | #3343 (228K editMessageText loop — API ban risk) |
| **Hermes Agent** | Telegram adapter state corruption |

**Emerging requirement:** At-least-once delivery semantics, graceful failure recovery, and no silent data loss.

### 4.4 Mobile & Remote Access
| Project | Evidence |
|---|---|
| **Hermes Agent** | 3 open issues (#11911, #98196, #72011) requesting mobile apps |
| **NanoClaw** | Raspberry Pi support (#95) — edge deployment |
| **CoPaw** | Multi-tenant Hub discussion (#7318) |

**Emerging requirement:** Users want always-on, cloud-native agents they can access from any device — the desktop-bound model is a limitation.

### 4.5 Error Message Quality
| Project | Evidence |
|---|---|
| **IronClaw** | PRs #7989, #7990 (model-unfriendly error messages) |
| **NanoBot** | #5592 (tool contract ambiguity) |
| **NanoClaw** | #3662 (misleading timeout message) |

**Emerging requirement:** Errors should be actionable for both humans and agent models (self-correction loops depend on them).

---

## 5. Differentiation Analysis

| Project | Positioning | Target User | Core Tech | Differentiator |
|---|---|---|---|---|
| **OpenClaw** | Enterprise-grade general assistant | Power users, production-critical workflows | Gateway/channel modular architecture, multi-agent security | Raw scale, channel breadth, mature plugin economy |
| **NanoClaw** | Lightweight, fast-iteration assistant | Individual developers, privacy-focused (Signal) | v2 architecture, Slack-first, Bun-based runtime | Fastest fix turnaround, strong maintainer responsiveness |
| **ZeroClaw** | Security-first agent runtime | Security-conscious deployments | Granular sandboxing, A2A protocol, MCP integration | Ecosystem leadership in security governance and interoperability |
| **Hermes Agent** | Desktop-centric autonomous agent | Technical users wanting persistent + real-profile presence | Desktop fallback + desktop automation, real-profile browser | Desktop + messaging bridge; Group Chat autonomy |
| **NanoBot** | Minimalist skill-based agent | Skill-heavy workflows, WebUI-centric | Skill marketplace, agent runner abstractions | Skill ecosystem with marketplace (SkillHub) |
| **IronClaw** | Cost-optimized research agent | ML researchers, long-horizon tasks | Context projection, budget-aware loops | Explicit cost engineering (compaction, token budget) |
| **PicoClaw** | Embedded/comms-focused agent | Automotive, industrial, Telegram/QQ-heavy users | Lightweight binary, embedded-friendly | Small footprint, targeted channel support (Telegram, QQ) |
| **CoPaw** | GUI-first assistant | Desktop UI users, browser automation | Rich console UI, ACP agent, Chrome integration | Visual polish, browser automation, multi-tenant Hub ambitions |
| **Moltis** | Sandbox orchestrator | Infrastructure engineers | Node management, sandbox execution | Environment topology management |
| **LobsterAI** | Team productivity assistant | Enterprise collaboration | Cowork sessions, skill creator | Team configuration templates, guided cowork flows |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (well-oiled, high throughput)
| Project | Signal | Verdict |
|---|---|---|
| **NanoClaw** | 27 merges, 24h-deployment of fixes, zero regression complaints | **Best momentum-to-noise ratio** — leader in execution efficiency |
| **ZeroClaw** | 12+ contributors, 8 merges, security-focused, roadmap clarity | **Most strategically organized** — RFCs, decision trackers, milestones |
| **NanoBot** | 13 PRs, fast bug-to-fix pipeline, low overhead | **Efficient and focused** — small, high-quality change sets |

### Tier 2: Active but Bottlenecked
| Project | Signal | Verdict |
|---|---|---|
| **OpenClaw** | Highest raw volume, but 74% open rate, critical bugs aging 3-5 months | **Scaling pain** — needs review automation or core team expansion |
| **Hermes Agent** | High triage activity, consolidation of duplicate issues, but zero merges listed | **Triaging well, merging poorly** — risk of losing contributor momentum |
| **IronClaw** | All-PR-open day, 4 fixes queued, compaction design active | **In review purgatory** — watch for merge burst in 24-48h |
| **CoPaw** | Rich community dialogue (Hub RFC, 14 comments), but no merges today | **Community-rich, maintainer-poor** — needs merge velocity |

### Tier 3: Stabilizing/Low Activity
| Project | Signal | Verdict |
|---|---|---|
| **PicoClaw** | 2 merges, QQ auth bug blocking users, stale loop bug | **Functional but fragile** — critical bugs need faster triage |
| **Moltis** | 1 issue, zero PRs | **Maintenance-only phase** — feature work paused |

### Tier 4: At Risk
| Project | Signal | Verdict |
|---|---|---|
| **LobsterAI** | 5 PRs stale ~5 months, no maintainer activity | **Abandonment risk** — community contributions undigested |
| **NullClaw/TinyClaw/ZeptoClaw** | Zero activity | **Dormant** — no signals of revival |

---

## 7. Trend Signals

### For AI Agent Developers

**1. Context Economics is the Next Competitive Frontier**
- Measured 4.1x cost multiplier (IronClaw #7824) is the tipping point. Budget-aware loops, deterministic compaction, and token ceilings will become **table stakes** — not optimizations — in the next 12 months.
- OpenClaw's compaction pipeline fixes (XL-size) and NanoBot's runner-owned compaction both point to a **provider-agnostic compaction standard** emerging.

**2. Failure-Atomic Delivery is Non-Negotiable**
- Cross-project pattern: message loss, session corruption, silent truncation, zombie processes. Users are running agents for **real money** — one user's instance consumed 593 tool calls over 70 minutes without progress.
- Expect **delivery-receipt and outbox patterns** from messaging platforms to become agent-runtime requirements.

**3. Sandbox Security is the Trust Barrier**
- The move from path-level checks to **fail-closed sandbox enforcement** (NanoBot #5536, ZeroClaw RFC #6996) indicates the market is demanding guaranteed isolation, not best-effort.
- Windows and macOS support must mature — smaller competitors can win disaffected OpenClaw users on **cross-platform parity**.

**4. The Desktop Tether is Breaking**
- Hermes Agent's mobile demand (3 issues) + CoPaw's multi-tenant Hub + NanoClaw's Pi support + ZeroClaw's household edge mesh = **distributed, always-on, edge-deployed agents** is the inevitable direction.
- The **multi-agent interoperability gap** (A2A protocol demand in ZeroClaw, Slack room handoffs in NanoClaw, Group Chat autonomy in Hermes) signals the next architectural shift: **agent-to-agent coordination** as a first-class API.

**5. Maintainer Throughput is the Ecosystem's Biggest Vulnerability**
- OpenClaw's 74% open rate, Hermes's all-PR-open day, CoPaw's discussion-rich/merge-poor profile, and LobsterAI's 5-month staleness — the ecosystem is **review-limited**, not feature-limited.
- Projects investing in **CI automation, label taxonomy, and triage tooling** (ZeroClaw, NanoClaw) will out-compete on contributor retention. Expect **AI-assisted PR review** to become a differentiating tool.

**6. Multimodal Reliability is the i18n Engine**
- From Telegram voice notes (ZeroClaw) to WhatsApp images (OpenClaw) to Slack pasted tables (NanoClaw) — **structured content recovery and multimodal message handling** is consistently fragile across channels and languages. Developers who solve this will win non-English and voice-first markets.

---

## Bottom Line for Decision-Makers

- **For users choosing a runtime**: NanoClaw offers the best current reliability-to-velocity ratio; OpenClaw provides scale and ecosystem but demands tolerance for critical bugs; ZeroClaw leads security governance.
- **For contributors**: NanoClaw and ZeroClaw offer the healthiest merge pipelines and clearest roadmap signals; LobsterAI and Moltis need intervention or should be forked.
- **For investors**: The ecosystem has reached **production-intent maturity** — the winners will be those who solve context economics, failure atomicity, and mobile access first.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**2026-08-30**

---

## 1. Today's Overview

NanoBot's development cycle remains highly active with a substantial 13 pull requests updated within the last 24 hours, indicating strong ongoing contributor momentum. The project is prioritizing reliability and security, with current work focusing on sandbox enforcement for restricted shells, proper cleanup on request cancellation, and WebUI state reconciliation. Two new bug reports were filed today — one related to rate-limit state retention for one-shot sessions and another concerning documentation ambiguities in the `edit_file` tool — and both already have corresponding fix PRs in progress. The maintainers are actively reviewing and merging smaller WebUI improvements (4 PRs merged/closed today), while larger architectural refactors, such as runner-owned context compaction, continue their review cycle.

---

## 2. Releases

No new releases were published in the last 24 hours. The project appears to be in a continuous development phase, with feature work accumulating in the main branch ahead of the next tagged release.

---

## 3. Project Progress

Four pull requests were merged or closed today:

- **[#5591 — fix(webui): preserve named pane groups](https://github.com/HKUDS/nanobot/pull/5591)** (merged): Fixes a reconciliation bug where user-defined pane group titles were lost when pane removal left a group with a single pane. Also addresses an issue where deleting the active pane could corrupt layout state. *Impact: WebUI usability fix.*

- **[#5595 — fix(webui): hide SkillHub install counts](https://github.com/HKUDS/nanobot/pull/5595)** (merged): Removes the `installs` field from SkillHub display rows, as marketplace data is sparse and often displays repetitive "0 installs" metadata. *Impact: WebUI polish.*

- **[#5596 — feat(providers): discover OAuth model catalogs online](https://github.com/HKUDS/nanobot/pull/5596)** (closed): Adds online model catalog discovery for OpenAI Codex, xAI Grok, and GitHub Copilot, with shared normalized catalogs between WebUI and runtime. Sets Grok 4.6 as default with offline fallbacks. *Impact: Provider capability expansion.*

- **[#5599 — fix(cli): stream gateway logs in WebUI launcher](https://github.com/HKUDS/nanobot/pull/5599)** (closed): Mirrors new gateway log lines to terminal during `nanobot webui` runs, starts from current log end, and handles missing/truncated log files safely. *Impact: CLI developer experience.*

---

## 4. Community Hot Topics

The most active discussions today center around reliability and sandbox security:

- **[#5536 — fix(exec): fail closed when restricted shell lacks a sandbox](https://github.com/HKUDS/nanobot/pull/5536)** (priority p1, security): With 0 comments but sustained attention since August 25, this PR addresses a critical security issue by making `ExecTool` fail closed when `restrict_to_workspace` is enabled but no sandbox is available. *Underlying need: Users with restricted execution environments need guaranteed sandbox isolation, not just path-level checks that can be bypassed via symlinks or shell expansion.*

- **[#5568 — refactor(agent): let runner own context compaction](https://github.com/HKUDS/nanobot/pull/5568)** (open since August 27, updated today): This architectural refactor shifts context compaction ownership to `AgentRunner`, enforcing local input ceilings and snapshotting state. *Underlying need: Long-running sessions with large contexts need deterministic compaction behavior regardless of provider capabilities.*

- **[#5602 — feat(webui): add completion notification sound](https://github.com/HKUDS/nanobot/pull/5602)** (new today, closes #5524): Addresses a user request for audible completion cues when the page is in focus. *Underlying need: Users multitasking while waiting for long generations want passive awareness without switching tabs.*

---

## 5. Bugs & Stability

Two bugs were reported today, both with fix PRs already open:

**High severity:**

- **[#5593 — Session message rate-limit state retains expired one-shot sessions](https://github.com/HKUDS/nanobot/issues/5593)** — `SendSessionMessageTool` keeps expired timestamps in its deque until the same source session sends again, causing memory growth for one-shot source sessions. Fix PR: **[#5594](https://github.com/HKUDS/nanobot/pull/5594)** (open) addresses this by discarding expired prefix entries before each send while preserving the rolling-minute limit.

**Medium severity:**

- **[#5592 — edit_file documentation does not state match selectors are mutually exclusive](https://github.com/HKUDS/nanobot/issues/5592)** — The tool contract presents `occurrence`, `line_hint`, and `replace_all` as combinable when they are exclusive selectors, and does not clarify that `expected_replacements` verifies total match count. Fix PR: **[#5598](https://github.com/HKUDS/nanobot/pull/5598)** (open) addresses the documentation gap.

**Additional stability work in progress:**

- **[#5600 — fix(agent): close native reasoning on cancellation](https://github.com/HKUDS/nanobot/pull/5600)** (open): Fixes a cleanup gap where cancelled streaming requests with active native reasoning leave the client without a `reasoning_end` event.
- **[#5601 — fix(webui): roll back rejected message side effects](https://github.com/HKUDS/nanobot/pull/5601)** (open): Prevents orphaned attachments and lingering WebSocket subscriptions when message hydration fails.
- **[#5597 — fix(channels): deliver provider retry waits as progress](https://github.com/HKUDS/nanobot/pull/5597)** (open): Routes `RetryWaitEvent` through the progress visibility gate so channel users see retry status when progress is enabled.

---

## 6. Feature Requests & Roadmap Signals

Notable features currently in flight that signal roadmap direction:

- **[#5405 — feat(skills): support manual-only invocation](https://github.com/HKUDS/nanobot/pull/5405)** (open since August 16): Adds `disable-model-invocation: true` frontmatter support so skills with side effects (deployment, publishing) can be restricted to explicit user invocation only. *Prediction: Likely to land in the next minor version given its maturity and the importance of safety controls.*

- **[#5596 — OAuth model catalog discovery](https://github.com/HKUDS/nanobot/pull/5596)** (closed): Online model discovery for OpenAI Codex, xAI Grok, and GitHub Copilot suggests a broader push toward dynamic, account-specific model availability. *Prediction: This capability likely paves the way for more provider integrations using OAuth flows.*

- **[#5602 — Completion notification sound](https://github.com/HKUDS/nanobot/pull/5602)** (new): Opt-in audible completion cue indicates attention to user ergonomics; similar UI feedback improvements may follow.

- **[#5568 — Runner-owned context compaction](https://github.com/HKUDS/nanobot/pull/5568)** (open): This architectural shift toward deterministic provider-agnostic context management is a significant refactor that could unlock more consistent long-session behavior across providers.

---

## 7. User Feedback Summary

The current PR and issue activity reflects several concrete pain points:

- **Sandbox safety expectations**: Users require guaranteed sandbox isolation for restricted shells, not just application-level path checks that can be circumvented (see [#5536](https://github.com/HKUDS/nanobot/pull/5536)).
- **Resource consumption for one-shot sessions**: Users running many short-lived sessions face memory growth from retained rate-limit state ([#5593](https://github.com/HKUDS/nanobot/issues/5593)).
- **Documentation precision matters**: Users want tool contracts that accurately reflect runtime validation behavior; ambiguous documentation leads to incorrect model behavior ([#5592](https://github.com/HKUDS/nanobot/issues/5592)).
- **WebUI polish**: Users value small UX improvements like scrollable logs ([#5599](https://github.com/HKUDS/nanobot/pull/5599)), less noisy marketplace metadata ([#5595](https://github.com/HKUDS/nanobot/pull/5595)), and preserved pane titles ([#5591](https://github.com/HKUDS/nanobot/pull/5591)).
- **Background awareness**: Users want sensory cues (chimes) for completion when the page is visible, not just browser notifications for background tabs ([#5602](https://github.com/HKUDS/nanobot/pull/5602), closes [#5524](https://github.com/HKUDS/nanobot/issues/5524)).

Overall, the feedback patterns show a community that is both security-conscious and detail-oriented, with maintainers responding quickly to reported issues — both bugs filed today already have fix PRs.

---

## 8. Backlog Watch

The following items have been open for several days and may need maintainer attention:

- **[#5405 — feat(skills): support manual-only invocation](https://github.com/HKUDS/nanobot/pull/5405)** (open since August 16, 14 days): Despite being a significant safety feature for skill execution, it has not yet received comments or review activity. This feature directly addresses user control over side-effect-heavy skills and would benefit from a review.

- **[#5536 — fix(exec): fail closed when restricted shell lacks a sandbox](https://github.com/HKUDS/nanobot/pull/5536)** (open since August 25, 5 days, priority p1): Given the security implications and the explicit p1 priority tag, this PR warrants prompt maintainer review. The issue it addresses ([#4072](https://github.com/HKUDS/nanobot/issues/4072)) has been open for a considerable time.

- **[#5568 — refactor(agent): let runner own context compaction](https://github.com/HKUDS/nanobot/pull/5568)** (open since August 27, 3 days): This structural refactor alters core agent behavior; it requires thorough review before merge to avoid regressions in session handling.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for 2026-08-30.

---

### 1. Today's Overview

The Hermes Agent project is in a highly active development phase, with a strong push on bug fixes and operational hardening across gateway, session, and compression systems. Activity is high, with 50 issues and 50 PRs updated in the last 24 hours. The flow of work shows a focus on resolving regressions (especially around cron job handling and provider failover), improving platform adapter reliability (Slack, Telegram, Mattermost, WeCom), and stabilizing session state management. The backlog of open feature requests, particularly for mobile clients and Group Chat improvements, indicates a healthy and engaged community driving roadmap discussions.

### 2. Releases

No new releases were published in the last 24 hours.

### 3. Project Progress

While no PRs were merged in the last 24 hours (12 were closed/merged overall, none listed in the top 20 by comments), the project saw significant progress through the closure and deduplication of several key bug reports, primarily consolidating a major issue around the `cronjob` tool.

- **Cron Bug Consolidation and Fix**: A significant cluster of bugs around `cronjob create` failing with a `TypeError: '<=' not supported between instances of 'str' and 'int'` was resolved. Several related issues (#66824, #71987, #71993, #64520, #95706) were closed as duplicates of the original #7142, which has a **[TESTED FIX]**. This signal indicates a single root cause was identified and addressed for string/int coercions in the cron system.
- **Provider Configuration Fixes**: Bug #54922, regarding `custom_providers[].extra_body` being silently dropped on gateway/messaging paths, was closed. This was a significant configuration compatibility issue.
- **Core Features Closed**: Feature requests for Telegram inline mode (#78774) and making the background self-review tool whitelist configurable (#44672) were closed, implying implementation or a decision to not pursue them as proposed.

### 4. Community Hot Topics

The most engaging topics revolve around system reliability, developer experience, and a strong desire for mobile access.

- **Skills Index Watchdog ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616))**: This automated alert has the highest comment count (121) and has been running for over a month. The "degraded" status of the skills index is a persistent concern for the community, likely as it affects the discoverability and use of third-party "skills."
- **Cron `repeat` TypeError ([#7142](https://github.com/NousResearch/hermes-agent/issues/7142))**: The high number of duplicate issues (#66824, #71987, #64520, etc.) indicates this bug was a common and frustrating stumbling block for many users trying to use cron jobs, highlighting a clear need for more robust type handling in tools.
- **Mobile App Demand**: The concurrent open issues requesting a native mobile app ([#11911](https://github.com/NousResearch/hermes-agent/issues/11911), [#98196](https://github.com/NousResearch/hermes-agent/issues/98196)) and the discussion around a remote/mobile client category ([#72011](https://github.com/NousResearch/hermes-agent/issues/72011)) demonstrate a strong, consistent community desire for mobile access to their agents. Issue #72011 polling for direction from maintainers signals a possible roadmap shift.

### 5. Bugs & Stability

Several notable bugs were reported today, with varying severity:

- **High - SIGSEGV Crash in Managed Python ([#98332](https://github.com/NousResearch/hermes-agent/issues/98332))**: A critical native crash (SIGSEGV) in the `sqlite3` C extension that can kill the entire owner process. This is a stability concern for users running managed Python. No fix PR is linked yet.
- **Medium - Telegram Adapter State Corruption ([#98228](https://github.com/NousResearch/hermes-agent/issues/98228))**: After a reconnect, the adapter uses a "retired" adapter for message edits and cleanup, which could lead to failed interactions or inconsistent state. No direct fix PR is listed, but a related PR #98310 aims to fix a related heartbeat bug.
- **Medium - qqbot Approval Buttons Fail ([#98292](https://github.com/NousResearch/hermes-agent/issues/98292))**: In named-profile sessions, approval buttons are rejected as unauthorized, breaking user interaction flows.
- **Medium - `/v1/runs` Bypasses GoalManager ([#98299](https://github.com/NousResearch/hermes-agent/issues/98299))**: The persistent-goals feature is not applied when using the structured API endpoint, creating a functional gap.
- **Low/Medium - KawaiiSpinner Floods Terminal ([#93999](https://github.com/NousResearch/hermes-agent/issues/93999))**: A rendering bug that can flood the terminal with newlines in narrow console windows, degrading the CLI experience.
- **Resolved Bugs**: The numerous `cronjob` TypeError duplicates (#71993, #71987, #95706, etc.) were closed, indicating the bug is being addressed. A bug fix PR #98335 is open for critical **multimodal data loss** during transcript repair.

### 6. Feature Requests & Roadmap Signals

Strong signals point to a focus on enhancing the assistant's presence and operability beyond the desktop.

- **Official Mobile/iPhone App ([#98196](https://github.com/NousResearch/hermes-agent/issues/98196), [#11911](https://github.com/NousResearch/hermes-agent/issues/11911))**: The repeated requests for a native mobile application with voice calling are a clear roadmap signal. Combined with the direction-seeking Issue #72011, it's plausible that exploring an ACP-based mobile client could be a near-term initiative.
- **Group Chat Resilience ([#97681](https://github.com/NousResearch/hermes-agent/issues/97681))**: The request for Group Chats to "keep working after Desktop closes" is a significant architectural feature. The related PR #98307 ("complete Group Chat files and Bot handoff") suggests we may see this implemented soon, marking a major step toward true agent autonomy.
- **Planned Features with Open PRs**: Features like **deferred plugin questions** ([#98197](https://github.com/NousResearch/hermes-agent/pull/98197)) and a **background/hidden mode for the real-profile browser** ([#98311](https://github.com/NousResearch/hermes-agent/pull/98311)) are already in the PR pipeline, indicating they are likely candidates for the next milestone.

### 7. User Feedback Summary

The user base is technically engaged and relies on Hermes for automation, which makes reliability a top priority.

- **Pain Point: Cron Configuration**: The volume of duplicate cron bug issues (#7142, #66824, #95706) shows that LLM-driven tool use is often non-deterministic with types, and the community wants more resilient tooling like the `cronjob` tool to handle unexpected inputs gracefully.
- **Pain Point: Platform Inconsistency**: Users are reporting bugs that highlight inconsistencies across platforms, such as the Telegram progress updates (#98228), qqbot authorization issues (#98292), and Mattermost thread context issues (PR #64270). The effort to add Slack parity to Mattermost (PR #54193) suggests a desire for a uniform experience across all messaging platforms.
- **Architectural Desire**: The persistent demand for mobile apps and always-on bot Group Chats indicates a desire for Hermes to act as a more independent, cloud-native agent, rather than being tied to a running desktop client. Users are actively trying to build remote/standalone prompts for their agents.

### 8. Backlog Watch

Several long-standing issues and PRs require maintainer attention to resolve design questions and unblock community work.

- **[#72011](https://github.com/NousResearch/hermes-agent/issues/72011) - Direction needed on remote/mobile client category**: This issue, with 3 👍, explicitly asks maintainers for direction on a category with 16 open PRs. It has been open for over a month, and a decision here could either catalyze or close down a large body of community work. This is the highest-priority item on this list.
- **[#54229](https://github.com/NousResearch/hermes-agent/pull/54229) - fix(mattermost): extend session-continuity fix to DM channels**: This PR has been open for over two months since June 24. It fixes a long-standing bug (since May) where context is lost in Mattermost DMs, and its prolonged open status is a source of friction for users on that platform.
- **[#51953](https://github.com/NousResearch/hermes-agent/pull/51953) - fix(copilot): resolve Claude reasoning-effort from live catalog**: Open since June 24, this PR addresses what appears to be a significant compatibility bug with GitHub Copilot models. Its long stay in the queue suggests it may be a complex fix or has been deprioritized.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-30

## 1. Today's Overview

PicoClaw shows moderate activity over the last 24 hours, with 2 open issues and 3 pull requests updated. The project is actively resolving architectural stability problems: a critical fix for MCP server failures hanging the agent loop was merged, and a long-running Telegram bug causing indefinite message-editing loops has been flagged as stale. A new, unresolved issue regarding QQ channel authentication failures was filed today, indicating potential integration instability. The project maintains steady maintenance velocity, with community contributors (genuss, KrtCZ, kuzmichus) driving recent improvements. No new releases were published, but the pipeline shows healthy PR throughput.

## 2. Releases

**None.** No new versions were published in the last 24 hours. The most recent release remains undisclosed in the available dataset.

## 3. Project Progress

Two PRs were closed (one merged, one presumably merged/closed) in the last 24 hours:

- **[#3337 — Fix/MCP failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337) (CLOSED)** — Merged fix that addresses a critical stability bug. Previously, if MCP server initialization failed (e.g., unreachable/broken server), `AgentLoop.Run` would propagate the error and exit, leaving the chat interface completely unresponsive to users. This fix ensures the agent loop survives connection failures, a major reliability improvement for production deployments.

- **[#3315 — Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315) (CLOSED)** — Merged enhancement for Telegram integration. Fixed topic handling in private bot chats with forum mode enabled; PicoClaw previously only recognized topics in forum supergroups via `Chat.IsForum`, but private chats require checking `IsTopicMessage` instead.

**Open PR awaiting review:**
- **[#3348 — i18n: complete Czech code wrap labels](https://github.com/sipeed/picoclaw/pull/3348) (OPEN)** — From community contributor KrtCZ, completing Czech localization for code wrap UI labels. Small, low-risk change still pending review/merge.

## 4. Community Hot Topics

| Topic | Activity | Analysis |
|-------|----------|----------|
| **[#3343 — Tool feedback animation indefinite edit loop on Telegram](https://github.com/sipeed/picoclaw/issues/3343)** | 1 comment, stale, reported 6 days ago | **High visibility issue.** Tool feedback animation kept calling `editMessageText` every 3 seconds for days after the agent turn stopped progressing, generating 228,000+ edit attempts and triggering Telegram server-side rate limits. This points to a missing timeout/termination check in the animation loop. |

The low comment counts across all issues suggest that most discussion is happening in direct maintainer channels, or the community is awaiting maintainer response before engaging. The Telegram message-edit loop issue (#3343) is the most operationally impactful topic, as it can cause API bans for affected users.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| 🔴 **High** | **[#3349 — QQ channel authentication failure](https://github.com/sipeed/picoclaw/issues/3349)** — All deployments (Docker and Linux x86) fail to connect to QQ channel with `code:401, "request header Authorization parameter format error"`. Reproducible across environments. | New, unreproduced | **None yet** |
| 🟠 **Medium** | **[#3343 — Telegram editMessageText infinite loop](https://github.com/sipeed/picoclaw/issues/3343)** — Animation loop lacks termination condition after failed agent turn; 228K API calls and rate-limit fallout. | Aging, open | **None identified** |

The QQ channel bug (#3349) is the most urgent new regression, blocking all QQ-channel users with no workaround mentioned. The Telegram loop bug (#3343) is a severe resource-waste issue that could cause account-level API throttling. Fortunately, the previously-known MCP hang (#3337) has just been fixed.

## 6. Feature Requests & Roadmap Signals

- **Telegram topics in private chats** (PR #3315, merged) — Community demand for complete Telegram forum-topic support, now resolved.
- **Czech localization** (PR #3348, open) — Ongoing i18n expansion across European languages; indicates growing EU user base.
- **MCP resilience** (PR #3337, merged) — Strong demand for robust MCP server integration; the fix addresses only one failure mode, and likely more MCP robustness work will follow.

**Prediction for next release:** The next version will likely include the MCP hang fix (#3337) and Telegram private-chat topic support (#3315). If the QQ authentication bug (#3349) is a backend-API change from QQ, expect a hotfix release within days, as it fully blocks a supported channel.

## 7. User Feedback Summary

- **Pain point — stuck agents frustrate users:** The MCP hang issue (#3337) meant that a single broken MCP server would freeze all chat interaction — no replies, no errors, just silence. This fix addresses the most common complaint about "bot suddenly stops responding."
- **Pain point — API misuse causing bans:** The indefinite Telegram edit loop (#3343) highlights a pattern where PicoClaw can burn API quota excessively; affected users risk Telegram rate limits. The long discovery period (days) suggests poor observability into background loops.
- **Frustration — QQ channel broken:** The QQ authentication failure (#3349) is described as a total blocker; user tested both Docker and Linux builds, indicating thorough troubleshooting before reporting.
- **Positive signal — community contributions:** Multiple external PRs this week (Czech i18n, MCP fix, Telegram topics) suggest a healthy, engaged contributor base.

## 8. Backlog Watch

| Item | Created | Staleness | Concern |
|------|---------|-----------|---------|
| **[#3343 — Telegram editMessageText loop](https://github.com/sipeed/picoclaw/issues/3343)** | 2026-08-22 | 7 days, flagged stale | No maintainer response on record. This is a resource-abuse bug with real account-risk implications. Needs triage: either assign or explicitly deprioritize. |
| **[#3348 — Czech i18n PR](https://github.com/sipeed/picoclaw/pull/3348)** | 2026-08-29 | 1 day open | Low-risk community PR; pending review is normal, but quick merge would encourage further i18n contributions. |

**Maintainer attention needed:** Issue #3343 has attracted a user report with concrete data (228K API calls) and is now stale-marked — it deserves a maintainer response to validate, reproduce, or close with rationale. The PR #3348 is trivial and could be shepherded to merge to sustain contributor momentum.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-30

## Today's Overview

NanoClaw is in a **high-velocity stabilization and infrastructure cycle**, with 43 PRs updated in the last 24 hours (27 merged/closed, 16 open) and 5 issues touched. The project is clearly post-1.0, focused on hardening the v2 architecture: CI/label automation, Slack channel fixes, configuration polish, and Signal integration reliability are the dominant themes. A remarkable cluster of 17+ PRs from core-team members (gavrielc, glifocat, tchopoorian) merged today indicates a deliberate push to close out technical debt. No new releases were cut, suggesting maintainers are batching changes for a larger release. The activity profile is healthy and maintainer-driven, though a few lingering bugs (readonly session DB, Signal session hangs) warrant priority attention.

## Releases

**None.** No new releases were published in the last 24 hours. Given the volume of merged fixes (particularly the Slack raw-text recovery and Bun install retry), a patch release may be imminent.

---

## Project Progress

**27 PRs merged/closed today** — the bulk of activity centered on core infrastructure and Slack reliability:

**Slack Channel Recovery Fixes (3 PRs by gavrielc):**
- [#3668](https://github.com/nanocoai/nanoclaw/pull/3668) — Fixed a typecheck break in composed Slack adapter installs (un-absorbed pasted-table extractor)
- [#3667](https://github.com/nanocoai/nanoclaw/pull/3667) — Corrected `add-slack` skill to copy `slack-raw-text.ts` alongside its importing adapter
- [#3666](https://github.com/nanocoai/nanoclaw/pull/3666) — Feature: recover pasted tables from raw Slack events (dependent on #3665)
- [#3665](https://github.com/nanocoai/nanoclaw/pull/3665) — Generic `extractRawText` hook in chat-sdk-bridge to recover content left in `message.raw`

**Core Configuration & Reliability (4+ PRs by gavrielc):**
- [#3664](https://github.com/nanocoai/nanoclaw/pull/3664) — Install-wide default model (`NANOCLAW_DEFAULT_MODEL`) and fast serving tier (`NANOCLAW_FAST_MODE=1`)
- [#3661](https://github.com/nanocoai/nanoclaw/pull/3661) — Retry Bun install in Dockerfile instead of failing image build
- [#3659](https://github.com/nanocoai/nanoclaw/pull/3659) — Unified `.env` parsing: quoted values now read consistently across both parsers
- [#3662](https://github.com/nanocoai/nanoclaw/pull/3662) — Clearer error message for pre-task script timeouts (distinguishes from "Command failed")
- [#3663](https://github.com/nanocoai/nanoclaw/pull/3663) — Neutral placeholder names in examples/fixtures (removes maintainer's real name)

**CLI Fix:**
- [#3655](https://github.com/nanocoai/nanoclaw/pull/3655) — `ncl tasks` now rejects empty `--prompt` on update

**CI/Labels Infrastructure (open, by glifocat):**
- [#3657](https://github.com/nanocoai/nanoclaw/pull/3657), [#3648](https://github.com/nanocoai/nanoclaw/pull/3648) — PR template v2 with token parsing, managed-kind reconcile
- [#3647](https://github.com/nanocoai/nanoclaw/pull/3647) — Automatic `area/*` from changed paths and `kind/*` from PR type
- [#3644](https://github.com/nanocoai/nanoclaw/pull/3644) — Issue forms (bug, capability, docs, security)

---

## Community Hot Topics

The most active threads today are almost entirely **maintainer-reported Signal integration bugs** by IT-Sage — no community traction yet (0 comments each), but they reveal systemic problems:

- **[#3671](https://github.com/nanocoai/nanoclaw/issues/3671) — signal-cli 0.14.3 hangs forever on new contacts** — Pinned version has a critical bug where sessions never establish; fixed upstream in 0.14.7. This is a **blocking reliability issue** for Signal users.
- **[#3670](https://github.com/nanocoai/nanoclaw/issues/3670) — Dedicated-number setup grants "owner" to bot's own account** — Approval cards self-DM the bot, never reaching the operator. Total silent failure.
- **[#3669](https://github.com/nanocoai/nanoclaw/issues/3669) — PATH resolution failure in non-login shells** — `~/.local/bin` not on PATH in crontab/systemd contexts; wizard falls through to QR-link silently.

The **user-community** item this period is [#95](https://github.com/nanocoai/nanoclaw/issues/95) (Raspberry Pi 4B support), closed after 6 months with 2 comments — likely FAQ-documented.

---

## Bugs & Stability

Ranked by severity:

| Severity | Issue | Impact | Fix Status |
|----------|-------|--------|------------|
| 🔴 **Critical** | [#3660](https://github.com/nanocoai/nanoclaw/issues/3660) — Session SQLite DB becomes readonly, **blocks all outbound message delivery** across channels | Total communication failure for affected instances (12+ hrs) | **No fix PR yet** — needs immediate triage |
| 🔴 **Critical** | [#3671](https://github.com/nanocoai/nanoclaw/issues/3671) — signal-cli 0.14.3 hangs on new-contact sessions | Signal channel unusable for unknown contacts | Simple fix (bump to 0.14.7); PR expected |
| 🟠 **High** | [#3670](https://github.com/nanocoai/nanoclaw/issues/3670) — Dedicated-number setup misroutes approvals to bot's own DM | Silent operational failure | Likely fix in signal-auth.ts owner logic |
| 🟠 **High** | [#3669](https://github.com/nanocoai/nanoclaw/issues/3669) — signal-cli not found in non-login shells | Silent fallback to wrong setup path | PATH-sourcing fix in setup tooling |
| 🟡 **Medium** | [#3662](https://github.com/nanocoai/nanoclaw/issues/3662) — Pre-task timeouts misreported as "Command failed" | Misleading diagnostics only | **Fixed** in PR #3662 |

---

## Feature Requests & Roadmap Signals

**Predicted for next minor release (v2.x):**

1. **Install-wide defaults** ([#3664](https://github.com/nanocoai/nanoclaw/pull/3664)) — `NANOCLAW_DEFAULT_MODEL` + `NANOCLAW_FAST_MODE` is a platform-level feature simplifying multi-agent deployments. Merged; expect in next release.
2. **Raw text recovery for chat SDK** ([#3665](https://github.com/nanocoai/nanoclaw/pull/3665)) + **Slack pasted-table recovery** ([#3666](https://github.com/nanocoai/nanoclaw/pull/3666)) — Structured content recovery is a genuine capability expansion.
3. **CI automation taxonomies** ([#3647](https://github.com/nanocoai/nanoclaw/pull/3647), [#3648](https://github.com/nanocoai/nanoclaw/pull/3648), [#3657](https://github.com/nanocoai/nanoclaw/pull/3657)) — 16-area label automation, PR template v2 — maintainer-QoL; will streamline contribution flow.
4. **Configurable 30-min turn ceiling** ([#3646](https://github.com/nanocoai/nanoclaw/pull/3646), open) — Operator-requested flexibility; merged soon likely.
5. **Explicit Slack room handoffs** ([#3545](https://github.com/nanocoai/nanoclaw/pull/3545), open, 6 days) — Multi-agent coordination improvement, still pending review.

**Community wishlist signals:**
- Raspberry Pi usage ([#95](https://github.com/nanocoai/nanoclaw/issues/95), closed) — Edge deployment desire, now closed as answered; consider an official ARM build artifact or Pi-specific docs page as roadmap signal.

---

## User Feedback Summary

- **Pain point (confirmed):** The readonly session DB ([#3660](https://github.com/nanocoai/nanoclaw/issues/3660)) is the **highest-severity user-facing issue** — a contributor's instance went fully silent. No root cause identified yet.
- **Pain point (confirmed):** Signal setup is fragile in three distinct ways ([#3669](https://github.com/nanocoai/nanoclaw/issues/3669), [#3670](https://github.com/nanocoai/nanoclaw/issues/3670), [#3671](https://github.com/nanocoai/nanoclaw/issues/3671)) — configuration friction for a privacy-focused channel.
- **Satisfaction signal:** The rapid-fire fix turnaround today (multiple PRs merged within 24h of issue creation) speaks to a maintainer team that responds fast — a positive community signal.
- **Satisfaction signal:** No complaints about breaking changes despite 27 merges — v2 stability is holding.
- **Minor annoyance addressed:** "Command failed" → "timed out" error text ([#3662](https://github.com/nanocoai/nanoclaw/pull/3662)) — diagnostics-first thinking is active.

---

## Backlog Watch

Items needing maintainer attention:

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#3545](https://github.com/nanocoai/nanoclaw/pull/3545) — Slack room handoffs (core-team PR) | 6 days open | Review needed | Multi-agent Slack coordination is a significant feature; inactivity risks merge conflicts |
| [#3464](https://github.com/nanocoai/nanoclaw/pull/3464) — Remove v1-only session-commands.ts | 8 days open | **Stale** | Conflicts with v2 main (imports v1 symbols); merging will break — needs rebase or explicit closure |
| [#3364](https://github.com/nanocoai/nanoclaw/pull/3364) — Context.dev MCP integration | 11 days open | Community-contributed skill | No comments yet; long-dormant community PR needs maintainer response to avoid discouraging contributors |
| [#3660](https://github.com/nanocoai/nanoclaw/issues/3660) — Readonly DB | 1 day | **Critical, unfixed** | Must be prioritized over feature work |

**Verdict:** NanoClaw's maintainer team is firefighting effectively and shipping at pace, but the **critical DB readonly bug** and **Signal reliability cluster** are the two fires that need to be put out before any next feature cycle. The CI/label automation work suggests the team is investing in long-term contribution scalability — a healthy sign for an open-source project.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-30

## 1. Today's Overview
IronClaw is in a **moderate activity window** with 6 open PRs and 1 open issue updated in the last 24 hours. The project is currently **paused on merging** — there are zero merged/closed PRs today, with all 6 PRs still in review. The dominant theme is **stability and correctness hardening**: three PRs from `standardtoaster` address macOS developer experience, error-type misclassification, and unhelpful error messages. Two substantial PRs (`#7978`, `#7977`) target **compaction and loop termination** — both critical to production reliability, with PR #7977 explicitly mitigating a production incident where a run consumed 593 tool calls over 70 minutes without progress. The single active issue (#7824) is a high-level architectural proposal for context-compaction economics, directly tied to observed 4x cost growth in recent releases. Overall, **the project is focused on cost containment and runtime stability**, with a healthy pipeline of small, well-scoped fixes awaiting merge.

## 2. Releases
**No new releases today.** The last release window produced no tagged versions in the tracking period. Note that PR #7977 references a regression introduced in PR #7531 (a previous release), so users on current stable builds may be exposed to the non-progress loop bug discussed below.

## 3. Project Progress
**No PRs merged or closed today.** All 6 open PRs remain in review. Key advances waiting in the pipeline:

- **[#7988] Codebase knowledge graph refresh** — CI-generated snapshot update, low risk, no linked issue.
- **[#7991] Fix CI pre-push gate on macOS** — Two independent fatal issues (one test, one CI script) block Mac development; practical result is the gate being bypassed with `--no-verify`. Critical for contributor onboarding.
- **[#7990] Tool-disclosure: unresolvable tool name miscategorized as encoding error** — Two distinct failure modes share one `FailureKind::InputEncode` stamp; this fix separates them for correct diagnostics and downstream handling.
- **[#7989] `list_dir` error message omits the missing path** — Model receives a generic failure without the directory name, hindering self-correction.
- **[#7978] Bound cumulative summarizer input (size: L)** — Prevents unbounded summarizer input growth across carried cumulative summaries and deltas; durable bodies preserved behind injection/leak scans.
- **[#7977] Loop termination on dominant repeated output + interactive wall-clock cap (size: XL, docs scope)** — Restores termination for non-progress runs after PR #7531 removed the digest-based terminator; caps interactive sessions by wall clock. Directly mitigates the 593-call / 70-minute production incident.

## 4. Community Hot Topics
The most active discussion is **[Issue #7824: Context projection: Pi-style compaction barrier, structured summaries, overflow recovery](https://github.com/nearai/ironclaw/issues/7824)** — authored by `serrrfirat` (also author of PR #7978), with **5 comments** and active updates as recent as yesterday. The issue is grounded in measured data: a run on PinchBench (147 tasks, DeepSeek-V4-Flash) consumed **227.7M input tokens ($10.31)** versus a baseline of **55.1M ($2.52)** — a 4.1x cost multiplier. The proposal borrows from Pi-style compaction barriers, structured summaries, and overflow recovery. This aligns directly with PR #7978, indicating a coordinated push on context-economics. The underlying need is **predictable cost ceilings** for long-running agents.

## 5. Bugs & Stability
Three bugs surfaced today, all from `standardtoaster`, each with a fix PR attached. Ranked by severity:

| Severity | Bug | PR/State | Notes |
|---|---|---|---|
| **High** | **[PR #7977]** Non-progress loops can run indefinitely since PR #7531 removed the digest-based terminator; one run: 593 tool calls / 70 min | Fix open, size XL | Production-impacting; high token burn. |
| **Medium** | **[PR #7990]** Unresolvable tool names are misreported as `InputEncode` failures, degrading error accuracy and downstream routing | Fix open, size M | Not a crash, but wrong classification compounds debugging. |
| **Medium** | **[PR #7991]** macOS pre-push hook fails on two independent paths, forcing `--no-verify` and weakening CI parity | Fix open, size XS | Developer-experience blocker; bypassed gates lower trust in pre-merge checks. |
| **Low** | **[PR #7989]** `list_dir` returns a generic error without naming the missing path | Fix open, size S | Reduces model self-correction ability in tool-calling loops. |

All four have fixes already authored — the project is in a **healthy fix-ahead-of-report** posture.

## 6. Feature Requests & Roadmap Signals
The strongest roadmap signal is **[Issue #7824](https://github.com/nearai/ironclaw/issues/7824)**: a **projection-based compaction barrier with structured summaries and overflow recovery.** This is not a bug report but a forward-looking architecture proposal with measured cost evidence. Combined with PR #7978's bound on cumulative summarizer input, metrics point to **next-version features around context-window economics**: capped token budgets, hierarchical summary structures, and overflow spill/recovery paths. Expect a **compaction v2** in the next minor release — likely including deterministic budget enforcement and a configurable per-run cost ceiling.

## 7. User Feedback Summary
Direct user feedback this window comes from PR author `standardtoaster` (three fixes) and issue author `serrrfirat` (one proposal). Pain points expressed:

- **Mac developers cannot pass the pre-push gate** — forcing bypasses and reducing confidence in CI-equivalence.
- **Error messages are not "model-friendly"** — `list_dir` failures omit the path; tool-name resolution failures misreport the error class. Both reduce the model's ability to recover autonomously.
- **Cost blowups are measurable and unwelcome** — 4.1x input-token growth is called out explicitly as "measured, not hypothetical."

Satisfaction signals: the project demonstrably reacts to incidents (PR #7977 references a specific production run), and contributor PRs are frequent, small, and low-risk — a sign of a healthy contribution experience.

## 8. Backlog Watch
- **[Issue #7824]** — Authored 2026-08-22, last updated yesterday, 5 comments. Actively discussed; not stale. Watch that PR #7978's merge and the issue's design converge without drift.
- **[PR #7977]** — Open since 2026-08-28, size XL, **docs scope**. A large fix with production-impact rationale may need extra maintainer time for review; watch for review latency.
- **[PR #7978]** — Open since 2026-08-28, size L, core contributor. This is a direct dependency of the broader compaction plan in #7824 — prioritize to unblock the roadmap.
- No long-unanswered issues/PRs were identified in this window; the project's response time appears strong.

---

**Overall health assessment:** Stable, cost-conscious, and actively self-correcting. The all-PR-open, zero-merge day is notable — watch for a **merge burst in the next 24–48 hours** as the pipeline clears. The compaction story (#7824/#7978/#7977) is the project's most important through-line right now.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-30

## Today's Overview

LobsterAI is in a low-activity maintenance phase: no new releases or merged PRs in the last 24 hours, with all 5 open PRs and the single open issue showing stale timestamps (last updated ~5 months ago). The open PRs cover solid UX improvements (tool error highlighting, skill creation shortcuts, agent icon fixes, scheduled task polish) and team config template export/import, but none are being actively pushed forward. The single open issue reports a real bug in agent task record refresh logic. Overall project health is stable but the pipeline appears stalled — there is no evidence of active maintainer engagement this week.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

No PRs were merged or closed in the last 24 hours. The following PRs remain open and are awaiting review/merge:

- **#1145** — Team configuration template export/import (Settings → About), with granular apply options and a new IPC for saving text files.
- **#1144** — Scheduled tasks: add last-run timestamp to task list and running-state feedback.
- **#1143** — Fix: agent default icon not saved on creation, causing inconsistency between sidebar and "My Agents" page.
- **#1142** — Add "Create Skill" shortcut from skill management page, auto-selecting the skill-creator in Cowork.
- **#1138** — Cowork view: highlight tool errors with red background and add a jump-to-latest button.

## Community Hot Topics

The most active item remains the **open bug report #1139** (1 comment), which continues to receive attention:

- **[#1139: Agent task records not loading after creating same-name agent](https://github.com/netease-youdao/LobsterAI/issues/1139)** — User creates an agent with a name matching a deleted agent's name; the session switches to the new agent, but task records don't load until switching away and back. This indicates stale state in the frontend agent-store that fails to invalidate on agent-switch events — a common issue when using a global store without proper key-based re-fetching.

The 5 open PRs (#1138–#1145) have no comment activity, suggesting maintainers have not yet engaged with the proposed changes.

## Bugs & Stability

One bug was reported this period (no new bugs in the last 24h; the issue below is the active one):

- **[#1139 — Task records not refreshing after same-name agent creation](https://github.com/netease-youdao/LobsterAI/issues/1139)** — Medium severity. Reproducible by: create an agent, delete it, recreate with the same name, then start a new session. Task records remain empty until manual re-switch. Root cause likely a frontend state-caching issue. No associated fix PR currently open.

## Feature Requests & Roadmap Signals

No new feature requests were filed in the last 24 hours. However, the open PR queue offers clear signals of the project's near-term roadmap:

- **Team configuration templates (PR #1145)** — suggests a move toward reusable setup sharing, possibly for enterprise deployment scenarios.
- **Skill creation UX improvement (PR #1142)** — speeds up the skill-authoring loop, likely aiming to boost user-generated skill adoption.
- **Scheduled tasks polish (PR #1144)** — last-run timestamps and run-state feedback are common asks for automation-heavy users.
- **Tool error highlighting (PR #1138)** — improves debuggability in cowork sessions, addressing visibility into tool-call failures.

These are likely candidates for the next minor release if a maintainer picks them up.

## User Feedback Summary

User feedback in this window is limited to the single active issue (#1139). The report reflects a real usability concern: **state consistency between the frontend store and actual backend records** when agent names are reused. The user expected task records to appear immediately after creating a same-name agent, but had to "switch away and back" to force refresh — a workaround, not a fix. This is a mild but legitimate UX annoyance.

No positive or negative sentiment was expressed in PR comments over the last 24 hours (comments count not reported for PRs).

## Backlog Watch

The following items have been open for ~5 months without noticeable maintainer activity and need attention:

- **[PR #1138 — Cowork tool error highlighting + jump-to-latest](https://github.com/netease-youdao/LobsterAI/pull/1138)** — Concrete UX improvement; stale since 2026-03-31.
- **[PR #1142 — Quick skill creation entry](https://github.com/netease-youdao/LobsterAI/pull/1142)** — Improves skill adoption; stale since 2026-03-31.
- **[PR #1143 — Agent icon default fix](https://github.com/netease-youdao/LobsterAI/pull/1143)** — String bugfix; stale since 2026-03-31.
- **[PR #1144 — Scheduled task last-run display](https://github.com/netease-youdao/LobsterAI/pull/1144)** — Stale since 2026-03-31.
- **[PR #1145 — Team config template import/export](https://github.com/netease-youdao/LobsterAI/pull/1145)** — The newest PR (still 5 months old); no maintainer response.

These PRs collectively represent a solid batch of improvements that, if merged, would meaningfully improve the UX of LobsterAI's Cowork and Settings areas. Maintainers should prioritize triaging these to keep community momentum.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-30

## 1. Today's Overview

Moltis is currently in a **low-activity maintenance window**. Over the past 24 hours, the project saw only **1 issue updated** (a single open bug report, #1246) and **0 Pull Requests** opened, merged, or closed. No new releases were published. This level of activity suggests a period of stabilization or that most recent development work has already been merged in prior cycles. The single active issue — a bug report about sandbox failures after adding a node — has not yet received traction from maintainers (0 comments, 0 upvotes), indicating it may be newly triaged or awaiting reproduction. Overall project health appears stable, with no regression clusters or cascading bug reports, but maintainer responsiveness on the newest report bears watching.

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent release information is not available in this digest window. Please consult the [Moltis releases page](https://github.com/moltis-org/moltis/releases) for the latest published versions and their changelogs.

## 3. Project Progress

**No Pull Requests** were merged, opened, or closed within the reporting window. As such, there are no new feature integrations, code refactors, or documentation updates to report today. The absence of PR activity — combined with zero closed issues — suggests that either the development team is focused on longer-running branches or that a planned contribution cycle is yet to be opened. It is worth noting that no regressions from recent merges were reported either, which is a positive signal for code stability.

## 4. Community Hot Topics

The only item with any recent activity is:

- **[Issue #1246 — [bug] [Bug]: can't run on sandbox after a node is added](https://github.com/moltis-org/moltis/issues/1246)**  
  *Opened 2026-08-28, updated 2026-08-29 | 0 comments, 0 reactions*

While the issue has no comments yet, its presence points to an operational pain point: **dynamic topology changes** (adding a node) breaking subsequent sandbox execution. The issue author checked all preflight boxes (searched existing issues, verified latest version, provided session context), signaling a responsible user who likely hit a genuine blocker rather than a misconfiguration. Underlying need: **reliable hot-add of compute nodes without breaking runtime sandboxing**. Since this issue is isolated (no duplicate reports), the community has not yet amplified it — it is still in the "fresh report, awaiting maintainer triage" stage.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Medium** | [#1246](https://github.com/moltis-org/moltis/issues/1246) | Sandbox execution fails after a new node is added to the environment | ❌ No fix PR exists yet |

**Analysis:** This bug is ranked **Medium** severity: it blocks a specific workflow (adding nodes, then running sandbox), but does not corrupt data or crash the entire system. The mechanism is likely related to node registration — possibly stale state in the execution environment or an incomplete update to the scheduler/resource manager. Notably, the issue report includes full session context, which should allow maintainers to reproduce quickly. **Actionable recommendation:** maintainers should reproduce on the current main branch, check the node-addition codepath for race conditions, and consider ordering constraints (add node → refresh sandbox config → execute).

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed or updated in the last 24 hours. However, the implicit demand from issue #1246 is compelling: **seamless node lifecycle management**, specifically that Sandbox execution must be resilient to environment topology changes. This could manifest as:

- A hidden prerequisite for a future feature like **additive autoscaling** (where users can grow their cluster mid-session),
- A fix in the **node registration/validation flow** before the sandbox executor launches,
- A new survival check that verifies sandbox dependencies are re-initialized after node events.

Given that this aligns with common orchestration usability patterns, it is plausible that a hotfix or a small hardening PR (e.g., "re-resolve sandbox targets after topology change") could land in the next patch release. Larger roadmap features (multi-node orchestration, dynamic allocation) would extend from this fix.

## 7. User Feedback Summary

The single data point this window comes from the author of issue #1246 (`maop`). While the report is strictly a bug, it reveals several user sentiment signals:

- **Trust in the project:** The author did not immediately complain on forums; they followed the report template, searched existing issues, and provided context — indicating a respectful, engaged user who expects a collaborative resolution.
- **Pain point:** The inability to run a sandbox after adding a node disrupts iterative experimentation. This likely blocks data-heavy or compute-scaling workflows, which are often time-sensitive.
- **Satisfaction baseline:** The lack of "me too" comments, duplicate issues, or negative generic feedback within the past 24h suggests overall stability in the broader user base, though confidence is limited by the very small sample size.

Should this issue remain unaddressed for more than a week, expect user frustration to grow, potentially converting into duplicate reports or negative sentiment in discussion channels.

## 8. Backlog Watch

- **[Issue #1246 — can't run on sandbox after a node is added](https://github.com/moltis-org/moltis/issues/1246)**  
  *Status: open since 2026-08-28 (2 days)*

This issue is **new** but already qualifies as "watching" because it has received **zero maintainer response** (no comment, no label assignment beyond auto-labels, no milestone). For an issue that appears to be a clear regression/operational blocker, two days without reaction is the first threshold of concern. If no maintainer acknowledges this within the next 48–72 hours, the project risks sending a signal that operational bugs are low priority in favor of feature development. **Recommendation:** assign a triage label (e.g., `bug` + `needs-reproduction`), post an initial acknowledgment, and prioritize a first reproduction attempt for the next sprint.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the GitHub data from CoPaw for 2026-08-30, here is the project digest:

---

## CoPaw Project Digest — 2026-08-30

### 1. Today's Overview
The project is in a steady state with a consistent stream of community engagement. 10 issues and 6 PRs were updated in the last 24 hours, indicating active discussion and development, though no new releases were published and no PRs were merged today. Activity is dominated by user-reported bugs, feature requests, and a significant roadmap discussion, showing a healthy feedback loop between the community and the maintainers. The open PRs are progressing, with several awaiting review, but the absence of merges today suggests the team is in a review or consolidation phase.

### 2. Releases
No new releases were published for CoPaw in the last 24 hours.

### 3. Project Progress
There were **no merged or closed PRs** today. The most notable development is a new open PR by a first-time contributor:
- **[#7403 [OPEN] Update README](https://github.com/agentscope-ai/QwenPaw/pull/7403)**: A documentation update by a first-time contributor, currently with a placeholder description.
- **[#7401 [OPEN] fix(acp): prevent Windows ACP agent stalls during workspace bootstrap](https://github.com/agentscope-ai/QwenPaw/pull/7401)**: A critical fix addressing a hang issue for the ACP agent on Windows, which could freeze the event loop for minutes during plugin initialization.
- **[#7356 [OPEN] feat(console): add chat scroll lock](https://github.com/agentscope-ai/QwenPaw/pull/7356)** and **[#7357 [OPEN] feat(chat): add tool call visibility toggle](https://github.com/agentscope-ai/QwenPaw/pull/7357)**: These two PRs by AaronZ345 aim to improve the chat user experience by addressing UI readability issue during long responses and reducing noise from tool call cards.
- **[#7220 [OPEN] fix(media): reject oversized image dimensions](https://github.com/agentscope-ai/QwenPaw/pull/7220)**: Fixes a bug where compressed images under the 2 MiB limit could cause provider errors due to excessive pixel dimensions.
- **[#6874 [OPEN] feat(mcp): add configurable tool call timeout](https://github.com/agentscope-ai/QwenPaw/pull/6874)**: A long-standing PR under review to make the MCP tool-call timeout configurable.

### 4. Community Hot Topics
The most active discussions reveal a strong desire for multi-user and customization features.
- **[Issue #7318: QwenPaw Hub multi-tenant edition discussion](https://github.com/agentscope-ai/QwenPaw/issues/7318)**: This is the **most active topic**, with 14 comments and a 👍. It's a roadmap discussion for the multi-tenant Hub edition, directly responding to community requests from issue #2324 and others. The high engagement indicates significant user demand for team-based collaboration features.
- **[Issue #6770: Make user Chrome tab lifetime configurable](https://github.com/agentscope-ai/QwenPaw/issues/6770)**: Even though it's closed, this issue received 4 comments, highlighting a need for more granular control over the browser automation tool's behavior.
- **[Issue #7405: Question about Plan Mode](https://github.com/agentscope-ai/QwenPaw/issues/7405)**: This reopened question suggests users miss a planning-only mode that shows the model's intentions before executing actions, indicating a preference for more user oversight.
- **[Issue #7406: Add official theming support](https://github.com/agentscope-ai/QwenPaw/issues/7406)**: This feature request for UI customization (accent color, font, spacing) is a clear signal for better personalization options.

### 5. Bugs & Stability
Two significant bugs were reported today, with one having a potential fix already available.
- **High Severity:** **[Issue #7402: Empty assistant output_text blocks poison session history](https://github.com/agentscope-ai/QwenPaw/issues/7402)**: This bug causes all subsequent requests to fail with a 400 error from the Ark Responses API when an empty text block is saved to history. This is a critical data-corruption-like issue that likely affects all conversations using that provider. No fix PR exists yet.
- **High Severity:** **[Issue #7301: MCP legacy migration leaves dangling credential ref](https://github.com/agentscope-ai/QwenPaw/issues/7301)**: A data migration bug that breaks every new session with `CredentialNotFoundError` for clients with empty environments. This is a serious upgrade blocker. No fix PR is visible.
- **Medium Severity:** **[PR #7401: Windows ACP agent stalls](https://github.com/agentscope-ai/QwenPaw/pull/7401)**: This PR addresses a major usability bug where the ACP agent can hang for minutes on Windows during startup. The fix is proposed but not yet merged.

### 6. Feature Requests & Roadmap Signals
User requests reveal a strong emphasis on customization, control, and team features.
- **Multi-Tenancy:** The QwenPaw Hub discussion (#7318) signals a major roadmap item for team use.
- **UI/UX Customization:** Requests for official theming (#7406) and toggling tool call visibility (PR #7357) point to a need for a more personalized and cleaner chat interface.
- **User Control:** The request for a Plan Mode (#7405) and the configurable Chrome tab lifetime (#6770) show a desire for more predictable agent behavior.
- **Side Questions:** The feature request for `/btw` command (#7398) suggests users want a way to ask quick questions without disrupting the main context, a pattern popularized by Claude Code.
- **Configuration Discovery:** The request to surface `card_auto_layout` in the Console (#7404) highlights that some features are not easily discoverable by users.

### 7. User Feedback Summary
- **Pain Points:** Users are reporting frustrations with configuration, such as the MCP migration bug (#7301) and ability to change UI theming (#7406). There is also a clear desire for more control over the agent's actions, both through a "Plan Mode" (#7405) and the ability to ask side questions (#7398).
- **Use Cases:** The active discussion on the multi-tenant Hub (#7318) reveals a strong push to move from a personal assistant to a shared team tool. The Chrome tab request (#6770) indicates heavy use of browser automation, where finer control over resource cleanup is needed.
- **Satisfaction:** The feedback is constructive and detailed, with users filing well-documented issues and testing against the latest master branch. This suggests an engaged and technically proficient community that is invested in the project's direction, but is pushing for more advanced features and stability fixes.

### 8. Backlog Watch
- **[PR #6874: configurable MCP tool call timeout](https://github.com/agentscope-ai/QwenPaw/pull/6874)**: This PR has been open since **August 10** (20 days) and is marked "Under Review". It directly addresses a clear user need for configurable timeouts and should be a priority for maintainers to approve or provide feedback on.
- **[Issue #6770 (Closed): Chrome tab lifetime](https://github.com/agentscope-ai/QwenPaw/issues/6770)**: While closed, it received recent comments on August 29, indicating it may have been closed prematurely or the fix isn't satisfactory. The maintainer should verify the closure is acceptable to the reporter.
- **PRs #7356, #7357, #7220:** These PRs have been open for several days (3+ days) without recent maintainer comments, which may need a review to keep momentum.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-30

## 1. Today's Overview

ZeroClaw is in a **high-activity stabilization phase** with 26 issues and 50 PRs updated in the last 24 hours. The project is actively executing its v0.8.5 weekly stabilization line (#9459) with a mix of security hardening, architecture refactoring, and bug fixing. Maintainer review is the bottleneck: **14 issues/PRs carry `needs-maintainer-review`**, and 8 PRs are blocked, marked `do-not-merge`, or awaiting author action. Security remains the dominant theme — 9 open security-related issues/PRs are active, including cron job isolation, sandbox policy, and credential handling. The project shows healthy contributor diversity: 12+ distinct human authors plus one AI agent. Two advisory scan failures (yanked `chacha20` crate) indicate dependency hygiene needs attention. No new releases shipped in this window.

## 2. Releases

No new releases in this period.

## 3. Project Progress

**8 PRs merged/closed today** (42 still open). Notable completions:

- **#10440** — `fix(zerocode): recover split SGR wheel input` (Audacity88) — Fixes mouse wheel scrolling issues in the ZeroCode TUI (closes #10437).
- **#10444** — `fix(zerocode): decode split SGR mouse events` (sunlit-deng) — Companion fix for SGR mouse event reassembly.
- **#10012** — `fix(providers): enforce OAuth callback and refresh contracts` (Audacity88) — Hardens OAuth PKCE validation and refresh-error policy across providers.
- **#9196** — `feat(mcp): materialize resource blob with aggregate budget preflight` (metalmon) — **Significant feature:** MCP tool results with embedded binary `blob` content are now materialized into the agent workspace with budget preflight (closes #9179).
- **#10427** (closed) — CI advisory scan failure (chacha20 yanked) — addressed via dependency update.

**Key merged fixes this week:**
- Telegram reply-thread memory fragmentation resolved (#10237)
- Transcription provider language hint drop fixed (#10429)
- Cron tool agent-scoping bug closed (#9947) — with follow-up #10177 still open for atomicity

## 4. Community Hot Topics

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy | 16 | Filesystem/network restrictions unification; historically drifted policy layers |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) RFC: Separate authoritative memory storage from enrichment connectors | 15 | Memory architecture boundary; maintainer revision after Core REVISE vote |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue | 14 | Meta-issue tracking RFC/design decisions needing maintainer attention |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) Tracker: A2A protocol interoperability | 10 (👍7) | Agent-to-agent communication over HTTP; highest community engagement |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) Tracker: Persistent memory parity | 9 | Memory subsystem feature-completeness vs. peer runtimes |

**Analysis:** The community is most engaged with **architecture governance** (sandboxing, memory separation) and **interoperability** (A2A protocol). The 👍7 on A2A shows real demand for multi-agent setups. The maintainer decision queue tracker (#8692) signals a community feeling that RFCs need faster triage. The memory architecture thread (#9103) is particularly active — heavy revisions suggest a contested design with maintainer-involved negotiations.

## 5. Bugs & Stability

**Critical (S0/S1, high risk):**

- **#10456** `[OPEN]` — Persistent MCP SSE reader accepts suffix after oversized event — **new today**; potential memory/parsing issue (no fix PR yet)
- **#9947** `[CLOSED]` — Cron tools not scoped to owning agent (cross-agent read/trigger/modify/delete) — **fixed**; PR #10177 open for atomicity follow-up
- **#10063** `[OPEN]` — Anthropic-backed compatible gateways reject `image_url` blocks inside tool results (S1, workflow blocked); fix PR #10234 pending review
- **#8539** `[OPEN]` — AgentEnd event missing `cost_usd` field; channel path never emits AgentEnd — 60+ days open
- **#10447** `[OPEN]` — CI advisory scan failed (yanked chacha20) — **new today**, second occurrence

**High (S2, degraded behavior):**

- **#10436** `[OPEN]` — OpenRouter streaming cut off by total request timeout — reported yesterday; no fix PR yet
- **#10437** `[CLOSED]` — ZeroCode inserts SGR mouse-wheel reports into composer — fixed by #10440/#10444
- **#10429** `[CLOSED]` — Deepgram/OpenAI transcription language hint silently dropped — fixed
- **#10237** `[CLOSED]` — Telegram reply-threads fragment memory — fixed
- **#9681** `[OPEN]` — ZeroCode clipboard-temp cleanup ownership lost on deletion failure — 28 days open

**Security patches in flight:**
- #10409 `[OPEN]` — Temp file 0o600 permissions in channels (P1)
- #9678 `[OPEN]` — Harden Git shell policy arguments (XL, needs maintainer)
- #10433 `[OPEN]` — Mark ElevenLabs TTS API key sensitive
- #10455 `[OPEN]` — Gateway config write invariants — **new today**

## 6. Feature Requests & Roadmap Signals

**Hot candidates for next release:**

1. **A2A protocol interoperability** (#3566, 👍7) — Native Agent2Agent support for cross-instance communication. High community demand; roadmap tracker active.
2. **Granular sandbox policies** (#6996) — RFC actively discussed with 16 comments; unification of app-layer and OS-sandbox policies.
3. **SSE streaming from POST /webhook** (#10419) — Stream agent-loop tokens via SSE; filed 2 days ago, 4 comments — likely fast-tracked given demand for streaming UX.
4. **Household edge mesh** (#10360) — Distributed compute across idle devices with pull workers and signed receipts. Novel but p3; likely longer horizon.
5. **Emergency-stop enforcement** (#9802) — Complete kill-all/network-kill contract. Blocked, pending #9440 merge.

**Architecture refactors in motion (roadmap signals):**
- Invert `zeroclaw-channels` → `zeroclaw-runtime` dependency (#6864) — in progress
- Separate memory storage from enrichment connectors (#9103) — active RFC
- Channel/source shared-boundary cleanup (#8583) — in progress
- Category-scoped cross-agent memory grants — PR #10252 (XL, blocked)

**Prediction:** v0.8.5 (Milestone target Aug 30) likely ships: MCP resource blob materialization (done), SGR mouse fixes (done), channel/gateway security patches, and possibly SSE webhook streaming if review capacity allows. The dependency inversion and memory separation are v0.9+ candidates.

## 7. User Feedback Summary

**Pain points voiced:**

- **Multi-agent security**: Cron job access (S0) and cross-agent memory visibility are top concerns. The cron fix (#9947) was a significant win; users should test the atomicity follow-up (#10177).
- **Streaming reliability**: OpenRouter timeouts (#10436) and webhook response latency (#10419) frustrate hosted users. Direct feedback: "Hosted Path A workers call POST /webhook for chat turns… today (including [when streaming])" — waiting for full JSON response is suboptimal.
- **Non-English voice support**: Italian Telegram voice notes silently dropped (#10429) — fixed, but signals a broader i18n testing gap.
- **Memory fragmentation**: Telegram reply threads lose context (#10237) — fixed; users on complex thread structures should verify.
- **TUI usability**: SGR mouse events corrupting composer input (#10437) — fixed; affects users with high-DPI/terminal multiplexers.

**Satisfaction indicators:**
- 7 👍 on A2A protocol — strong positive sentiment for the roadmap direction.
- "Distinguished contributor" labels on 8+ PRs indicate a healthy, recognized contributor cohort (Audacity88, metalmon, vrurg, etc.).
- ZeroCode fixes merged same-day — responsive maintainers when PRs arrive.

## 8. Backlog Watch

**Needing maintainer attention (needs-maintainer-review):**

- **#9678** `[PR]` — Hardening Git shell policy arguments (XL, high risk, critical config security) — 28 days awaiting review
- **#9420** `[PR]` — Anthropic stored OAuth profiles (XL, do-not-merge, massive label set) — 35 days open
- **#10381** `[PR]` — Resolve host launchers before workspace cwd (XL, security) — 4 days; high priority
- **#10234** `[PR]` — Surface terminal provider failure causes (XL) — 9 days
- **#9402** `[PR]` — Avoid nesting Docker sandbox inside Docker runtime — 35 days open
- **#10100** `[PR]` — Honor allowed_roots tiers in Landlock sandbox — 12 days

**Long-unanswered issues (60+ days):**

- **#8539** `[OPEN]` — AgentEnd event missing cost_usd (60+ days, P1) — cost observability gap for all users
- **#6996** `[OPEN]` — Sandbox policy RFC (94 days, 16 comments, needs maintainer review)

**Blocked/do-not-merge:**

- **#9109** `[PR]` — Hailo-Ollama native support (XL) — needs author action
- **#10015** `[PR]` — Confine hardware datasheet downloads (blocked)
- **#10370** `[PR]` — Copilot credential cache hardening (do-not-merge)
- **#10252** `[PR]` — Category-scoped cross-agent grants (blocked)

**Watch item:** The maintainer decision queue tracker (#8692) has 14 comments — the community is tracking how quickly RFCs get resolved. With a heavy review backlog (`needs-maintainer-review` on 5 XL security PRs), review throughput is the critical path for v0.8.5.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*