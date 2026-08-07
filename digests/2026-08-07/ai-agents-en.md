# OpenClaw Ecosystem Digest 2026-08-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-07 02:44 UTC

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
**Date:** 2026-08-07

---

## 1. Today's Overview

OpenClaw is in a period of **high activity and significant triage load**, with exactly 500 issues and 500 PRs updated in the last 24 hours. The project maintains a healthy velocity with 95 PRs merged/closed and 71 issues resolved, but the sheer volume of open work (429 open issues, 405 open PRs) indicates the maintainer team is substantially backlogged. The issue tracker is dominated by **regressions and platform-specific bugs** in message delivery channels (Telegram, WhatsApp, Feishu, LINE), session-state management, and compaction logic — with a notable concentration of high-severity (P0/P1) issues. The presence of the "clawsweeper" bot (automated issue/PR triage) suggests ongoing investment in tooling to manage the load, but many issues remain stuck in "needs-maintainer-review" or "needs-product-decision" states. No new releases were published in the last 24 hours, suggesting the team is in a stabilization phase between releases.

---

## 2. Releases

No new releases were published in the last 24 hours. The most recent versions referenced across issues include **2026.7.2-beta.7**, **2026.7.2 (b4f01af)**, and **2026.6.11/2026.6.9**, with regressions reported between these versions (e.g., gateway cold start regression from `2026.7.1-beta.1` to `2026.7.2-beta.7`; DB migration failure from `2026.7.1` to `2026.7.2`).

---

## 3. Project Progress

**No PRs were merged today** (all top-30 PRs by comments remain open), but 95 PRs were merged/closed in the last 24h. Recent notable merges and near-merge work visible in the data:

- **Agent Plugins 1.0.0 support** ([PR #120115](https://github.com/openclaw/openclaw/pull/120115)) — Large PR (XL) from maintainer `steipete` to support the newly published vendor-neutral Agent Plugins bundle format (plugin.json + skills/ + mcp.json) from OpenAI/Vercel/AWS/Cursor/Microsoft. This is a significant ecosystem play.
- **Model-specific reasoning defaults preserved** ([PR #118032](https://github.com/openclaw/openclaw/pull/118032)) — Maintainer PR fixing reasoning defaults being improperly resolved to "off" when model row omitted metadata.
- **Visible-reply loop detection wired into runtime** ([PR #117937](https://github.com/openclaw/openclaw/pull/117937)) — Implements policy hook + per-turn recorder to detect and prevent infinite visible-reply loops.
- **Durable per-spawn tool policies** ([PR #78441](https://github.com/openclaw/openclaw/pull/78441)) — Long-running PR (since May) to allow `sessions_spawn` to narrow child agent tool access for DMZ/isolation use cases. Still "needs proof."
- **Attribution propagation across runtimes** ([PR #116794](https://github.com/openclaw/openclaw/pull/116794)) — Large refactor (XL) from `vincentkoc` to preserve immutable execution attribution across gateway/embedded runtime boundaries. Stack 3 of 5.

---

## 4. Community Hot Topics

| Issue/PR | Title | Comments | Reactions | Analysis |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) (CLOSED) | Linux/Windows Clawdbot Apps | 116 | 👍80 | **Strongest demand signal.** Users want desktop apps beyond macOS/iOS/Android. Closed, but the 80 upvotes and 116 comments show this is a major feature gap for the community. |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) (CLOSED) | DeepSeek v4 Flash silent reply failure | 114 | — | **Most-seen bug.** Silent reply failure with fallback message "No reply was generated" in Telegram. Closed (likely fixed) but the volume of comments indicates broad user impact with DeepSeek models. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 28 | — | **Security-conscious feature ask** — tag memory by origin (user vs. web scrape) to prevent memory poisoning. Sits in "needs-product-decision" and "needs-security-review." |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | `announceTarget` for sub-agent completion routing | 12 | 👍5 | Power users building multi-step agent orchestrations want finer control over where sub-agent completions route. |

**Underlying community needs:** (1) Cross-platform desktop apps, (2) DeepSeek model reliability, (3) Sub-agent orchestration control, (4) Memory security against prompt-injection poisoning.

---

## 5. Bugs & Stability

### P0 (Critical — blockers, data loss, crash loops)

| Issue | Title | Fix PR? |
|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | **Agent DB v14→v15 migration fails** (`no such column: entry_valid`); gateway refuses to start after 2026.7.2 update | No PR linked; 6 comments, diamond lobster rating |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | **Token inflation causes premature compaction at 4–8% of context window** → data loss in 2026.7.1+; `sessionEntry.totalTokens` inflated across multi-tool loops | PR linked (open), source-repro provided |
| [#118488](https://github.com/openclaw/openclaw/pull/118488) | (PR) Heartbeat runner failure notices treated as successful content → dedupe state corrupted | PR open, needs proof, 3 merge-risk flags |

### P1 (High — message loss, session state corruption, regressions)

| Issue | Title | Fix PR? |
|---|---|---|
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` rejected "thread switched branches" — stale `expectedLeafEntryId` after model completes (2026.7.2) | Yes (PR linked, open) |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | Foreground reply fence cancels delivery of **completed** replies to earlier concurrent messages — shown in dashboard, never delivered to WhatsApp | No PR, 6 comments |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction times out far below deadline (4.9s–50s), 100% failure on large sessions, no retry → wake death-spiral | No PR |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE channel: messages silently lost (reply token expiry, no push fallback) | PR linked (open) |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway cold start regression ~2.5x (2026.7.1-beta.1 → 2026.7.2-beta.7) on 1-vCPU | No PR, 9 comments |
| [#118785](https://github.com/openclaw/openclaw/issues/118785) | (Maintainer) QA: primary proof tracking for 23 containers + 31 external app SDK IDs | N/A — QA process issue |

### P2 (Medium — platform-specific, UX friction)

- **Windows-specific:** vitest teardown EBUSY on SQLite ([#119796](https://github.com/openclaw/openclaw/issues/119796)), memory-lancedb Docker bind mount failure ([#58139](https://github.com/openclaw/openclaw/issues/58139)), build hangs on second run ([#102755](https://github.com/openclaw/openclaw/issues/102755)).
- **Channel bugs:** Feishu streaming card loses/duplicates final text ([#77685](https://github.com/openclaw/openclaw/issues/77685)), Feishu inbound DM decoded as "?" ([#117445](https://github.com/openclaw/openclaw/issues/117445)), Telegram progress duplicates first commentary ([#116512](https://github.com/openclaw/openclaw/issues/116512)).
- **Streaming/reasoning:** WebChat reasoning_content not streamed for Kimi/DeepSeek ([#88079](https://github.com/openclaw/openclaw/issues/88079)), DeepSeek V4 Flash incomplete turns ([#88657](https://github.com/openclaw/openclaw/issues/88657)), reasoningDefault=stream infinite loop ([#77625](https://github.com/openclaw/openclaw/issues/77625)).
- **Orphaned processes:** Orphaned `node server.js` workers accumulate after subagent/cron runs ([#86119](https://github.com/openclaw/openclaw/issues/86119)).

**Overall stability assessment:** The project is shipping regression-prone releases, particularly around session-state management, message delivery, and compaction. The P0 DB migration failure and token-inflation data-loss bug are the most critical blockers tonight.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength |
|---|---|---|
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | **Very high** (80 👍, 116 comments) — likely on roadmap but closed without visible milestone |
| **Per-spawn tool restrictions** (DMZ isolation) | [#15032](https://github.com/openclaw/openclaw/issues/15032) | High — multiple linked PRs; PR [#78441](https://github.com/openclaw/openclaw/pull/78441) exists but slow-moving (since May) |
| **Memory Trust Tagging by Source** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | Medium — security-motivated, in needs-product-decision |
| **Agent Plugins 1.0.0 bundle support** | [PR #120115](https://github.com/openclaw/openclaw/pull/120115) | **High** — active maintainer PR (XL), likely in next release |
| **`/models test-fallback` command** | [#6599](https://github.com/openclaw/openclaw/issues/6599) | Low (P3, no movement) — but useful ops tooling |
| **Built-in pace-aware rate limiting** | [#45771](https://github.com/openclaw/openclaw/issues/45771) | Medium — power users burning API limits; no PR |
| **Slack Modal support** | [#88154](https://github.com/openclaw/openclaw/issues/88154) | Medium — channel-parity demand |
| **Task flow lifecycle hooks for plugins** | [#87362](https://github.com/openclaw/openclaw/issues/87362) | Medium — observability gap for plugin authors |
| **Self-compact tool for agents** | [#6757](https://github.com/openclaw/openclaw/issues/6757) | Low — agent-autofiled; maybe less urgent |

**Prediction:** The **Agent Plugins bundle** and **per-spawn tool policies** are the most likely candidates for inclusion in the next minor release. **Memory trust tagging** addresses a growing security concern and may come in a following release if product-decision moves it forward.

---

## 7. User Feedback Summary

**Pain Points (recurring themes):**

1. **DeepSeek model integration is unstable** — Silent failures, incomplete turns, missing reasoning streams across WebChat/Telegram/OpenRouter. Users on DeepSeek are disproportionately hitting bugs (issues #116277, #88657, #88079).
2. **Message loss is the #1 trust-breaker** — WhatsApp, LINE, Feishu, and group-chat reply-fence bugs cause silent message drops that users discover only when replies never arrive. The "shown in dashboard but never delivered" pattern (issue #92186) is especially damaging to trust.
3. **Compaction/session-state bugs cause data loss and death spirals** — Token inflation triggering premature compaction, compaction timeouts causing wake death-spirals, and DB migration failures blocking startup. Long-session users (orchestrators, autonomous agents) are hit hardest.
4. **Windows support remains weak** — Build hangs, SQLite locks, Docker bind-mount issues, and the missing desktop app all create friction for Windows users.
5. **Sub-agent orchestration control is incomplete** — Users building multi-agent pipelines (DMZ search, A2A handoffs, dispatch-only modes) need finer-grained tool restrictions and routing control.

**Positive signals:** The #75 issue (desktop apps) shows deep user appreciation ("Thank you for OpenClaw... it has genuinely become part of our daily workflow" — from #73537 about production-readiness). Users are deploying OpenClaw in production family/business contexts (Telegram, Home Assistant, cron jobs), indicating real-world trust despite the bug density.

**Satisfaction assessment:** Mixed. The community is engaged and vocal, with crisp bug reports and detailed reproductions — a sign of a technically sophisticated user base that cares about the project. However, the **volume of P0/P1 regressions shipping across releases** suggests users are spending significant time as de-facto QA testers.

---

## 8. Backlog Watch

Issues/PRs that are important, long-lived, or high-signal but appear stuck:

| Item | Age | State | Concern |
|---|---|---|---|
| [#78441](https://github.com/openclaw/openclaw/pull/78441) — Durable per-spawn tool policies | Since **May 6** (3 months) | Open, "needs proof" | High-demand feature; PR stalled despite multiple merge-risk flags. Community wants this for security isolation. |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) — Per-spawn tool restrictions | Since **Feb 12** (6 months) | Open, "needs-product-decision" | Related to above; a security-motivated use case (prompt-injection defense) waiting for a product call. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging | Since **Feb 3** (6 months) | Open, needs maintainer/security review | Security-critical feature for preventing memory poisoning; no movement in 6 months. |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) — A2A dispatch-only mode | Since **Mar 12** (5 months) | Open, stale | Agent-to-agent handoff pattern requested by multi-agent users. |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) — DB v14→v15 migration fails (P0) | Since **Aug 4** (3 days) | Open, no fix PR | **CRITICAL:** Gateway refuses to start after update; needs immediate attention. |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) — Token inflation → data loss (P0) | Since **Aug 3** (4 days) | Open, PR linked | Data-loss bug; PR exists but not merged. |
| [#86050](https://github.com/openclaw/openclaw/issues/86050) — claude-cli stream buffering | Since **May 24** (2.5 months) | Open, PR linked | Surface transparency issue for claude-cli backend; slow-moving. |
| [#109881](https://github.com/openclaw/openclaw/issues/109881) — Bedrock thinking-signature replay brick | Since **Jul 17** (3 weeks) | Open, needs live-repro | Permanent session brick for Claude 4+ on Bedrock; high severity but unconfirmed on main. |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) — `/models test-fallback` | Since **Feb 1** (6 months) | Open, recovery-stuck | Ops tooling request; low priority but cheap to build. |

**Watch list emphasis:** The two P0s from early August (#119263, #118772) are the most urgent backlog items. The 6-month-old security features (#7707, #15032) represent an unresolved class of prompt-injection defense that the community is increasingly asking for.

---

*Digest generated from OpenClaw GitHub data on 2026-08-07. Data reflects last-24h activity only; long-running item ages noted where relevant.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-07 | **Period:** Last 24 hours

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a **differentiation phase**, with projects splitting into two broad categories: full-featured agent platforms (OpenClaw, Hermes, CoPaw) that are shipping rapidly but struggling with regression-heavy release cycles, and focused/specialized agents (NanoBot, NanoClaw, IronClaw) that prioritize stability and narrow use cases. Across all projects, **session state management, context compaction, and message delivery reliability** are the dominant technical challenges, indicating that the industry has moved beyond model capabilities and is now wrestling with production-grade runtime concerns. Security is a growing theme — API key leakage, prompt injection defenses, and memory poisoning prevention appear across multiple projects — while cross-platform desktop support remains a significant unmet demand.

---

## 2. Activity Comparison

| Project | Issues (Open/Updated) | PRs (Open/Updated) | Releases (24h) | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 429 open / 500 updated | 405 open / 500 updated | None (stabilizing) | **3/10** — High regression rate, P0 data-loss bugs |
| **Hermes Agent** | ~50 updated | ~50 updated | None | **4/10** — Critical 0.20.0 regressions, active refactoring |
| **CoPaw** | 14 open / 27 updated | 22 open / 50 updated | None (2.1.0 beta) | **6/10** — Responsive, but long-session reliability gaps |
| **IronClaw** | 27 open / 50 updated | 33 open / 50 updated | v1.1.0 (Aug 6) | **5/10** — P1 issues on routine reliability (lease expiry) |
| **NanoBot** | 10 active | 17 updated / 6 merged | None | **7/10** — Fast, security-focused; small scope |
| **NanoClaw** | 2 updated | 14 touched / 8 merged | None | **7/10** — Stable, responsive maintainers |
| **ZeroClaw** | 24 open / 35 updated | 43 open / 50 updated | None (0.8.4 beta) | **6/10** — Active governance, SOP subsystem buggy |
| **PicoClaw** | 0 new | 1 merged, 1 stale | None | **8/10** — Stable but low velocity |
| **LobsterAI** | 6 open | 4 open (2 stale) | None | **5/10** — Persistent stale issues, silent failures |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | — | — | — | **Inactive** (no 24h activity) |

*Health score is a composite of regression frequency, bug severity, and maintainer responsiveness (10 = excellent).

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Scale and ecosystem gravity:** 500 issues/PRs updated daily dwarfs every competitor — OpenClaw is the de facto reference implementation.
- **Maintainer investment:** Active PRs for Agent Plugins 1.0.0 (vendor-neutral bundle format), per-spawn tool policies, and attribution propagation show deep architectural commitment.
- **Community trust:** Despite bug density, users deploy OpenClaw in production (family/business contexts via Telegram, Home Assistant, cron jobs) — #75's 80 upvotes for desktop apps proves deep attachment.

**Technical approach differences:**
- OpenClaw is **channel-first** (Telegram, WhatsApp, Feishu, LINE, etc.) vs. CoPaw's **model-first** (AgentScope DSL) or NanoBot's **minimal Python** approach.
- OpenClaw uses a **gateway/embedded runtime architecture** (C#/Rust hybrid), while competitors favor Python (NanoBot/CoPaw) or TypeScript (IronClaw).
- OpenClaw's **clawsweeper bot** (automated triage) is a unique tooling investment — no peer has equivalent automation.

**Community size comparison:** OpenClaw's issue/PR traffic is roughly **10x** the next most active project (Hermes/CoPaw), indicating a much larger contributor base but also a proportionally larger QA burden on maintainers.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging **independently across projects**, signaling industry-wide needs:

| Focus Area | Projects Affected | Specific Needs |
|---|---|---|
| **Session/State Reliability** | OpenClaw, IronClaw, CoPaw, NanoBot | Compaction timeouts, token-inflation bugs, stale-session overwrites, thread-attachment failures |
| **Model Fallback & Failover** | CoPaw, PicoClaw, OpenClaw | Automatic failover on rate limits/timeouts, configurable fallback chains, model-switching mid-session |
| **Security Hardening** | NanoBot, Hermes, ZeroClaw, IronClaw | API-key isolation, memory trust tagging, secret redaction, plugin security scanning, CLI env leakage |
| **Sub-agent Orchestration** | OpenClaw, NanoClaw, ZeroClaw, CoPaw | Per-spawn tool restrictions (DMZ), sub-agent result routing, announcement targets, A2A outbound |
| **Message Delivery Reliability** | OpenClaw, IronClaw, NanoClaw, CoPaw | Silent message loss, wrong-recipient delivery, media parsing, reply-referencing semantics |
| **Cross-Platform Desktop** | OpenClaw, Hermes, CoPaw | Missing Linux/Windows apps, desktop UI regressions, self-update corruption |
| **Observability** | NanoBot, IronClaw, ZeroClaw, CoPaw | Token consumption logging, per-tool error display, inspector/debug panels, model-call statistics |
| **MCP Tooling** | CoPaw, NanoClaw, ZeroClaw | Connection lifetime, configurable timeouts, tool-output truncation, MCP spec 2026-07-28 support |

---

## 5. Differentiation Analysis

| Project | Target User | Architecture | Key Feature Focus |
|---|---|---|---|
| **OpenClaw** | Power users, families, multi-channel | Gateway + embedded runtime (C#/Rust) | Channel breadth, agent plugins, orchestration |
| **Hermes Agent** | Desktop-first users, macOS | Desktop app + gateway | UI polish, god-file refactoring, memory providers |
| **CoPaw** | Chinese + Global, Qwen users | Python/AgentScope DSL | Qwen integration, AG-UI protocol, memory lifecycle |
| **IronClaw** | Automation-focused ops teams | TypeScript, routine-driven | Routine/automation reliability, Inspector, MCP registry |
| **NanoBot** | Lightweight, self-hosted users | Minimal Python | Temporary sessions, Matrix/Weixin channels, security |
| **NanoClaw** | Telegram-centric users | Python, skill-based | Telegram media, scheduling, transactional updates |
| **ZeroClaw** | Governance-conscious teams | Rust (likely) | RFC-driven, SOP subsystem, A2A, process automation |
| **PicoClaw** | QQ Channel users | Lightweight agent | QQ rich media, model fallback chains |
| **LobsterAI** | Windows users, CN community | Agent + OpenClaw compat | Windows installer, PowerShell, file hygiene |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (high velocity, high churn):**
- **OpenClaw** — Shipping fast but regression-prone; community acts as de-facto QA. Stabilization phase between releases.
- **CoPaw** — Active 2.1.0 beta development; responsive maintainers; growing contributor base (multiple first-timers).

**Tier 2 — Consolidating (steady, moderate velocity):**
- **ZeroClaw** — Heavy RFC governance; security hardening; actively closing S0/S1 bugs.
- **IronClaw** — Post-v1.1.0 stabilization; Inspector feature being landed incrementally.
- **Hermes Agent** — Large refactoring effort (god-file decomposition); critical 0.20.0 regressions being triaged.

**Tier 3 — Stable / Slowing (low velocity, stable):**
- **NanoBot** — Fast but small-scope; security-critical fixes merged quickly.
- **NanoClaw** — Same-day fix for critical update bug; lean skill set.
- **PicoClaw** — Stable plateau; single open PR waiting for review.

**Inactive (no 24h activity):** NullClaw, TinyClaw, Moltis, ZeptoClaw — may be abandoned or very low-traffic.

---

## 7. Trend Signals

1. **Runtime reliability > model capability.** The most common P0/P1 issues across all active projects are session-state, compaction, and delivery bugs — not model quality. Developers who solve these win.

2. **Security is becoming a first-class feature.** Multiple projects are actively fixing API-key leakage (NanoBot), memory poisoning (OpenClaw), secret redaction (Hermes), and plugin supply-chain risk (Hermes, NanoClaw). Expect security to be a major differentiator in the next 6 months.

3. **Sub-agent orchestration is the next frontier.** OpenClaw (per-spawn tool policies), ZeroClaw (A2A outbound), and NanoClaw (subagent results) all show demand for finer-grained control over multi-agent workflows. A formal standard (Agent Plugins 1.0.0) is emerging.

4. **Self-hosted users want observability.** Users burned "a million tokens in 2 hours" (NanoBot) and can't debug failed routine runs (IronClaw) — they demand per-call token accounting and tool-level error transparency.

5. **Windows and Linux desktop support is a gap.** OpenClaw's #75 (80 upvotes) is the strongest signal; every project with desktop ambitions is tripping on Windows-specific bugs (Hermes runtime corruption, LobsterAI installer failures).

6. **MCP server interoperability is now table stakes.** CoPaw and NanoClaw are both actively fixing MCP tooling reliability, and MCP spec updates (2026-07-28) are on near-term roadmaps.

7. **Process overhead backlash.** ZeroClaw's community is literally voting down RFC bloat (#6808, rev. 24) — a signal that governance frameworks must scale with project maturity.

---

*Report generated from 2026-08-07 community digest data across 13 projects. Health scores and predictions are analyst judgments based on issue/PR activity and severity patterns.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**2026-08-07**

---

## 1. Today's Overview

NanoBot is experiencing a high-velocity development cycle with 17 PRs updated in the last 24 hours, including 6 merges/closures. The project is currently dominated by a security-focused theme, with multiple PRs addressing API key leakage (two separate fixes for CLI subprocesses and provider environment variables) that represent the most critical work in flight. Session management and data integrity is the second major theme, with three distinct fixes addressing session retention trimming, stale background task overwrites, and out-of-media-root attachment handling. The WebUI continues to be a hotspot for feature work, with temporary chat mode, model preset editor expansion, and interactive project terminal all advancing. Issue tracking shows 10 active items with the most recent (filed today) raising a security concern about session history storage location, indicating the community is actively scrutinizing the project's security posture. No new releases were published today.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

Six PRs were merged or closed today, representing meaningful progress across several areas:

**Memory & Dream Integration**
- **PR #5231** (merged): feat(memory) — archive idle sessions for Dream. This fixes a gap where short idle sessions never produced `history.jsonl` entries, leaving Dream with no input to process. This ensures Dream can now process all sessions regardless of session length.

**Matrix Channel**
- **PR #5248** (merged): fix(matrix) — send non-empty POST body on room join for Continuwuity compatibility. Resolves the auto-join failure described in issue #5247.

**WebUI Polish & Performance**
- **PR #5267** (merged): fix(webui) — tighten interactive motion, aligning transitions to ~220ms, fixing delayed completion states, and respecting reduced-motion preferences.
- **PR #5262** (merged): perf(webui) — reduce cold-start payload by precompressing gzip assets and splitting React runtime from lazy-loaded chunks.
- **PR #5261** (closed): feat(webui) — drag sidebar sessions into composer or reorder them with a Codex-style insertion line.

**Temporary Sessions**
- **PR #5259** (merged): fix(webui) — enforce memory-only temporary sessions, establishing the contract that temporary chat state never persists to disk (stacked on still-open PR #5252).

---

## 4. Community Hot Topics

**Issue #5198 — Model switching limitations (3 comments)** — [Link](https://github.com/HKUDS/nanobot/issues/5198)
The most-commented issue this period. Users report being unable to switch models within an active session without full reconfiguration. The model selector UI is non-functional, and the `/model` command appears broken. This suggests a fundamental UX gap compared to cloud AI SaaS products, where model switching mid-conversation is expected.

**Issue #4290 — Cronjob ends early with subagents (2 comments)** — [Link](https://github.com/HKUDS/nanobot/issues/4290)
Ongoing issue where the main agent doesn't process subagent results, causing workflow failure. Though filed in June, it remains open and represents a reliability pain point for automation workflows.

**PR #5252 — Temporary chat mode (open, active discussion)** — [Link](https://github.com/HKUDS/nanobot/pull/5252)
The WebUI's temporary chat feature is attracting attention as it enables non-persistent, multi-turn conversations — a privacy-conscious feature that could appeal to users who want to test without committing to session history.

**Security PR cluster:** PRs #5270, #5269, and issue #5278 are part of a community-driven security review focused on API key isolation and session data placement. While individually they address different code paths, together they signal a coordinated effort to harden the project.

---

## 5. Bugs & Stability

**Critical (P0):**
- **Stale background task overwrites** — PR #5271 fixes a race where background tasks hold a `Session` reference across `await provider.chat_with_retry(...)`; if `/new` runs during that window, stale saves overwrite the new session data. This is a data-loss bug and correctly prioritized as P0.

**High (P1):**
- **API key leakage to CLI subprocesses** — PR #5270 prevents `*_API_KEY` env vars from reaching installed CLI apps via `env=os.environ.copy()`. Untrusted subprocesses could exfiltrate provider credentials.
- **API key pollution via process os.environ** — PR #5269 fixes `OpenAICompatProvider._setup_env()` writing keys into the process-global environment, which caused credential swapping across multi-provider setups.

**Medium (P2):**
- **Proactive channel delivery dropped during trimming** — Issue #5273 and fix PR #5272: session retention trimming incorrectly drops `_channel_delivery` messages (cron notifications, job deliveries) that immediately precede a user reply, breaking context continuity.
- **Out-of-media-root attachments lose media_urls** — Issue #5264 and fix PR #5268: history endpoint fails to stage files outside `<workspace>/media/`, so attachments vanish after refresh (WebSocket path is already correct).
- **Non-finite number parameters** — PR #5265 rejects NaN/Infinity values that slipped through `float()` casting in tool parameter validation.

**Low (P2):**
- **Weixin channel hardening** — PR #5263 aligns with protocol headers 2.4.6, improving delivery, streaming, QR verification, and retry logic.
- **WebUI interactive motion fixes** — PR #5267 (merged) addresses janky transitions and delayed completion states.

---

## 6. Feature Requests & Roadmap Signals

**Strong candidate for next release:**
- **Temporary chat mode** (PR #5252, with #5259 merged as its enforcement layer) — non-persistent, multi-turn conversations. This appears close to mergable and is a clearly scoped, valuable UX addition.

**Emerging security features:**
- **Session-level temporary file isolation** (Issue #5276) — user requests per-session workspace isolation in addition to global `restrictToWorkspace`. The proposal acknowledges tradeoffs (skills evolution, SOUL/USER introspection) but highlights the need for better sandboxing in shared deployments.
- **API key isolation** (PRs #5270, #5269) — already implemented, signals a hardening trend.

**Channel experience improvements:**
- **Matrix reply/thread semantics** (Issues #5274, #5275) — bot should use Matrix's reply feature when responding to replies, and "reply in thread" should form a dedicated context like Discord/Slack. These are polish items but matter for chat-platform parity.

**Observability:**
- **Token consumption logging** (Issue #5266) — user burned "a million tokens in 2 hours" with no visible activity. This is a strong signal for an observability feature: per-call token accounting with timestamps. Likely candidates for next release.

**Metasearch provider:** PR #5234 (mst-python) is still open and brings multi-engine aggregation via Reciprocal Rank Fusion — valuable for power users.

---

## 7. User Feedback Summary

**Pain Points:**
- **Model switching is unreliable** (Issue #5198) — cannot change models in-session; this is a top usability complaint.
- **Hidden token burn** (Issue #5266) — users report unexpectedly high token consumption with no visibility; this is both a cost and trust concern.
- **Cron/subagent workflow breaks** (Issue #4290) — automation failures when the main agent doesn't respond to subagent output; undermines reliability of unattended use.
- **Session history placement** (Issue #5278) — the move to per-workspace sessions is welcomed, but user correctly points out that session data (which may contain sensitive conversation history) now lives inside the agent workspace, creating a privilege-escalation surface; argues for separation.
- **Channel experience gaps** (Issues #5274/#5275) — Matrix reply semantics are basic expectations on chat platforms; their absence feels like incompleteness.

**Satisfaction Signals:**
- The ecosystem is actively contributing fixes (17 PRs in 24h) — a healthy sign of a project users care about.
- Security findings are being reported constructively with accompanying PRs (issues #5278, PRs #5270/#5269), not just complaints.

---

## 8. Backlog Watch

**Issue #4290 — Cronjob ends early with subagents** — [Link](https://github.com/HKUDS/nanobot/issues/4290)
Open since June 10 (nearly 2 months), with only 2 comments. This is a functional bug in automation workflows that remains unaddressed. Given the increased attention to session management and subagent handling (PRs #5271, #5272), this issue deserves maintainer review — it may need the same session-race fix treatment or deeper architectural work.

**Issue #5198 — Model switching** — [Link](https://github.com/HKUDS/nanobot/issues/5198)
High visibility (most-commented issue), but no PR references it yet. This is a core UX gap that continues to frustrate users; it deserves a fix or a clear roadmap direction.

**Issue #5266 — Token consumption logging** — [Link](https://github.com/HKUDS/nanobot/issues/5266)
Filed yesterday, no PR yet. The "million tokens in 2 hours" anecdote suggests this could surface as a bigger complaint if ignored; observability features tend to attract follow-up contributors.

**PR #5234 — mst-python metasearch provider** — [Link](https://github.com/HKUDS/nanobot/pull/5234)
Open since August 3 without comments. Feature PRs with no maintainer response risk contributor churn; a response (merge, request changes, or clarify scope) would be healthy for community engagement.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the provided GitHub data, here is the Hermes Agent project digest for 2026-08-07.

---

## Hermes Agent Project Digest — 2026-08-07

### 1. Today's Overview
The project is in a state of high activity and significant structural evolution. With 50 issues and 50 PRs updated in the last 24 hours, the community remains very engaged. The dominant theme is a large-scale, policy-driven effort to decompose "god files" (very large, monolithic code modules) across the codebase, generating numerous refactoring tickets. Simultaneously, there is a strong focus on stability, with several critical regressions from the 0.20.0 release (e.g., missing desktop UI, memory provider breaks) and long-standing platform-specific bugs being actively discussed and patched. While no new releases were cut today, the volume of merged PRs and activity suggests active development toward the next patch/minor version.

### 2. Releases
No new releases were published on 2026-08-07.

### 3. Project Progress
*Merged/Closed PRs (11 total):*
- **Desktop UI Fixes:** The rapid-fire fixes for the desktop app show a focus on UX stability.
    - **PR #80711** fixes the frustrating issue where session pins would not persist ([link](https://github.com/NousResearch/hermes-agent/pull/80711)).
    - **PR #80718** addresses the "Show earlier messages" loading bug ([link](https://github.com/NousResearch/hermes-agent/pull/80718)).
    - **PR #80719** fixes an overlapping status-text formatting issue in the UI ([link](https://github.com/NousResearch/hermes-agent/pull/80719)).
- **Gateway Fix:** **PR #68708** was closed, fixing a macОС-specific gateway issue where launchd services became unregistered after a self-update, leaving the gateway offline ([link](https://github.com/NousResearch/hermes-agent/pull/68708)).
- **Bot Maintenance:** **PR #80725** is an auto-generated formatting/lint fix from a bot, indicating an active CI pipeline ([link](https://github.com/NousResearch/hermes-agent/pull/80725)).

### 4. Community Hot Topics
- **Monolithic File Refactoring:** The most active discussions by far revolve around a mandated project-wide "god-file decomposition."
    - **Issue #78647** is the epic tracking this huge refactoring effort with 53 comments ([link](https://github.com/NousResearch/hermes-agent/issues/78647)).
    - Following this, individual issues for specific files like `agent/auxiliary_client.py` ([link](https://github.com/NousResearch/hermes-agent/issues/78635)), `hermes_cli/kanban_db.py` ([link](https://github.com/NousResearch/hermes-agent/issues/78632)), and `hermes_cli/auth.py` ([link](https://github.com/NousResearch/hermes-agent/issues/78637)) are among the most commented-on, indicating a community push to make the codebase more maintainable.
- **Persistent Feishu (Lark) Platform Bugs:** A cluster of issues related to Feishu, specifically around interactive card approval buttons, are highly active.
    - **Issue #7675** (8 comments) highlights multiple issues, including card interaction events being treated as commands ([link](https://github.com/NousResearch/hermes-agent/issues/7675)).
    - **Issue #13924** (6 comments) details a specific approval-button error code `220340` ([link](https://github.com/NousResearch/hermes-agent/issues/13924)). These have been open since April-May, and the community is clearly seeking a definitive fix.

### 5. Bugs & Stability
- **Critical Desktop Regression:** **[0.20.0 Regression]** **Issue #79407** reports that the entire bottom operation panel on the desktop app is missing, making it a "viewer-only shell" ([link](https://github.com/NousResearch/hermes-agent/issues/79407)). This is a severe UX regression for the 0.20.0 release.
- **Persistent Session State Issues:** Two related, critical bugs concern the memory provider.
    - **Issue #79339:** `MemoryProvider.sync_turn()` is never called in 0.20, meaning external memory backends silently stop receiving data ([link](https://github.com/NousResearch/hermes-agent/issues/79339)).
    - **Issue #80646:** `agent_context` is hardcoded to "primary", rendering provider context-skip logic for subagents/cron jobs as dead code ([link](https://github.com/NousResearch/hermes-agent/issues/80646)).
- **Windows Self-Update Corruption:** **Issue #80710** reports that the desktop self-update process can corrupt the existing Python runtime, a potentially destructive bug for Windows users ([link](https://github.com/NousResearch/hermes-agent/issues/80710)).
- **Security Gaps (Fix PRs Exist):** Issues #77484 ([link](https://github.com/NousResearch/hermes-agent/issues/77484)) and #77162 ([link](https://github.com/NousResearch/hermes-agent/issues/77162)) detail vulnerabilities where secret redaction is missing on tool outputs and the egress path to the LLM provider. These are open but have proposed fixes, signaling a high priority.

### 6. Feature Requests & Roadmap Signals
- **Security as a Feature:** **PR #80728** introduces security scanning for plugin installs and updates, inspired by "Claude Cowork" ([link](https://github.com/NousResearch/hermes-agent/pull/80728)). This suggests a proactive approach to supply-chain security, likely to be included in an upcoming minor release.
- **Session Continuity:** **PR #80721** proposes announcing date changes to long-running sessions without touching the prompt cache, indicating active work on improving agent context awareness ([link](https://github.com/NousResearch/hermes-agent/pull/80721)).
- **Multi-Device & Multi-User:** **Issue #80723** highlights a limitation where only one device can watch a live session ([link](https://github.com/NousResearch/hermes-agent/issues/80723)). This points toward a roadmap goal of multi-device session monitoring.
- **Improved Analytics:** **PR #80724** aims to persist per-message token counts, which is a foundational step for better cost measurement and compaction decisions ([link](https://github.com/NousResearch/hermes-agent/pull/80724)). This suggests a future focus on advanced context management.

### 7. User Feedback Summary
- **Dissatisfaction with Platform Reliability:** The most prominent pain points come from Feishu/Lark users. Issues #7675, #13924, and #10073 mention persistent bugs with approval card buttons returning errors, causing workflow interruptions. The fact that the same root cause (error `200340`) reappears across versions is a significant source of user dissatisfaction.
- **Desktop Experience Regressions:** Users are frustrated with desktop-specific quirks and regressions. Issues #79407 (missing UI panel) and #80710 (runtime corruption) represent high-impact problems that erode trust. Positive feedback can be inferred from the rapid creation of PRs to fix the UI issues mentioned in the progress section.
- **Model Interaction Quality:** Issues #79339 and #80646 indicate advanced users are hitting subtle integration bugs with external memory providers, showing they are pushing the boundaries of the tool's capabilities.

### 8. Backlog Watch
- **Long-standing Feishu Bugs:** Issues #7675 ([link](https://github.com/NousResearch/hermes-agent/issues/7675)), #13924 ([link](https://github.com/NousResearch/hermes-agent/issues/13924)), #25886 ([link](https://github.com/NousResearch/hermes-agent/issues/25886)), and #38305 ([link](https://github.com/NousResearch/hermes-agent/issues/38305)) have been open for months and are clear regressions/bugs in the Feishu platform. They remain open despite multiple user reports and a referenced fix in PR #10256. These need a maintainer's attention to resolve the root cause and merge a final fix.
- **Blocked PRs:** Several PRs from the community (e.g., #67934 for native Ollama tags, #72671 for gateway test fixes) show `MERGEABLE / BLOCKED` status, indicating they are waiting for a maintainer to run CI checks or review. A backlog of 'blocked' PRs can discourage contributors.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date**: 2026-08-07

---

## 1. Today's Overview

PicoClaw is currently in a **low-activity but meaningful transition** phase. While there are **zero new issues** and **no new releases** in the last 24 hours, the project shows steady progress through two key pull requests, one of which (PR #1349) has been merged, significantly enhancing the QQ channel's multimedia capabilities. The project's active development is currently concentrated on **integration layers** (QQ platform support) and **model management UX**, rather than core engine fixes, suggesting a maturation of the underlying architecture. At the same time, the **absence of new bug reports** indicates a relatively stable codebase, though the long-dormant state of some PRs suggests a need for maintainer bandwidth. Overall, the project is **healthy but slow-burning**, with a clear focus on expanding platform interoperability and user-facing configurability.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent release history (if any) predates this window; no changelogs, migration notes, or breaking changes to report at this time.

---

## 3. Project Progress

**One pull request was merged/closed** in the last 24 hours, marking a functional milestone for the QQ channel adapter:

- **[PR #1349 — feat(qq): support parsing and replying to more attachment types](https://github.com/sipeed/picoclaw/pull/1349)** *(merged)*  
  Authored by *aishannon*, this PR closes a significant feature gap for QQ Channel users. It introduces:
  - Parsing of QQ Channel emoji structures.
  - Handling of incoming **voice, image, video, and file** messages.
  - Support for replying with local media files (with automatic upload-before-send logic).
  - A **Markdown-first reply strategy** with graceful fallback to plain text on failure.

  This is a substantial improvement for users who rely on QQ Channel as their primary messaging interface, aligning PicoClaw's feature parity with other chat platforms already supporting rich media.

---

## 4. Community Hot Topics

There were **no issues** with substantial comment threads or reactions in the last 24 hours. The most notable activity centers on the two open/closed PRs:

- **[PR #3200 — feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)** *(open)*  
  Authored by *lc6464*, this PR is currently the **most active discussion point** in the repository. It introduces a **user-configurable default fallback model chain** in the web UI, persisted through the backend API. This addresses a common pain point: users wanting to specify a primary model (e.g., a fast/cheap one) with automatic failover to more capable models when context exceeds limits or the primary errors out. The 36-day span since creation without merge suggests active iteration or maintainer feedback.

- **[PR #1349 — Q: attachment type support](https://github.com/sipeed/picoclaw/pull/1349)** *(merged)*  
  Though now closed, this PR was the focus of a long development cycle (approximately 5 months from creation to merge), indicating that platform-specific feature work requires substantial testing and iteration.

---

## 5. Bugs & Stability

**No new bugs, crashes, or regressions** were reported or fixed in the last 24 hours. This is a positive signal for codebase stability. The merge of PR #1349 does not indicate any known stability risks; the Markdown-first fallback logic is designed to degrade gracefully. No open bug-fix PRs are currently pending. The project appears to be in a **stable plateau** phase.

---

## 6. Feature Requests & Roadmap Signals

The open PR **#3200** is the strongest signal for the next release, pointing toward:

- **Configurable model fallback chains**: Users want to define a *sequence* of models to try, not just a single fallback. This suggests a future where users can mix local and remote models or tier models by cost/quality.
- **Persistence of model preferences**: The request implies users want these settings stored server-side (via the backend API), enabling consistent multi-device workflows.

**Expected in next version**: The model fallback chain feature is a strong candidate for the next minor release, given its clear user value and the fact that the PR is already open. The merged QQ attachment support is likely already staged for the next release as well.

**Longer-term roadmap signals**: The lack of new feature-request issues suggests the community is currently satisfied with the feature set, focusing on refinements (like the fallback chain) rather than net-new categories.

---

## 7. User Feedback Summary

- **Q: Channel as a primary interface**: The merge of PR #1349 directly responds to user needs for a fully-featured QQ experience, indicating that **multi-platform rich-media parity is a high-priority use case**. Users were likely frustrated by plain-text-only limits in QQ Channel.
- **Model management friction**: The open PR #3200 indicates users are hitting context-limit errors or model reliability issues and want **finer control over fallback behavior** without manual intervention. The desire to "save the full chain" suggests a workflow where model switching is frequent (e.g., between local and cloud models).
- **Overall sentiment**: Based on available data, user feedback is **positive and feature-driven**, with no complaint-focused issues. The project appears to be listening to integration and configuration needs.

---

## 8. Backlog Watch

While there are **no long-unanswered issues** (due to a zero open issue count), the following PR requires maintainer attention:

- **[PR #3200 — Model fallback chain](https://github.com/sipeed/picoclaw/pull/3200)** *(open for 36 days)*  
  This is the **only open PR** in the repository and has remained unmerged since July 1. Given that it is a well-defined enhancement with clear user value, this may be waiting on:
  - Reviewer bandwidth or conflicting design opinions on the default-chain UX.
  - Backend API design decisions (e.g., how to serialize and validate the chain).

  **Recommendation**: Maintainers should review and either merge this PR or provide explicit feedback to the author, as its prolonged open state could create community friction and potentially a stale PR.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-07

## Today's Overview

NanoClaw saw a moderate activity day: 2 issues updated in the last 24 hours and 14 pull requests touched, with 8 being merged or closed and 6 remaining open. The core‑team has been actively merging fixes that have been queued for weeks, particularly around scheduling reliability, skill cleanup, and Telegram handling. The major story of the day is the emergence of **transactional update logic** (`PR #3195`) in direct response to a newly filed bug about `/update-nanoclaw` failing without a recoverable cutover (`Issue #3194`). The maintainers are clearly in a stabilization phase: closing out long‑running PRs, removing stale bundled skills, and hardening infrastructure seams. No new releases were published today.

---

## Releases

None.

---

## Project Progress

Eight PRs were merged or closed today, resolving several long-standing issues:

- **[#2213 — fix: accept media-only messages (photo/video/file without caption)**](https://github.com/nanocoai/nanoclaw/pull/2213) — closes a Telegram/chat‑SDK gap where media without captions was silently dropped. Merged after 3 months open.
- **[#2678 — fix(scheduling): re-arm recurrence when a run fails permanently**](https://github.com/nanocoai/nanoclaw/pull/2678) — `handleRecurrence` now fans out the next occurrence from `failed` recurring rows, not just `completed` ones.
- **[#2679 — fix(scheduling): surface permanently-failed scheduled tasks to the user**](https://github.com/nanocoai/nanoclaw/pull/2679) — adds a `notifyFailedTasks` sweep hook that turns permanently-failed tasks into user‑visible notices.
- **[#2644 — fix: detect reply-to-bot in Telegram extractReplyContext**](https://github.com/nanocoai/nanoclaw/pull/2644) — `ReplyContext.isReplyToBot` is now set when the quoted message was authored by the bot itself.
- **[#2643 — fix: engage pattern/mention wirings on direct address**](https://github.com/nanocoai/nanoclaw/pull/2643) — fixes router behavior where `pattern`‑mode wirings ignored @mentions/DMs/replies when the keyword wasn’t in the text.
- **[#3172 — chore(skills): remove stale qodo and Google MCP skills**](https://github.com/nanocoai/nanoclaw/pull/3172) — removes the bundled skills that depend on external SaaS accounts (directly closes Issue #3171).
- **[#2873 — fix(skills): split pre-flight from credentials so /update-skills can refresh code**](https://github.com/nanocoai/nanoclaw/pull/2873) — refactors skill updates to separate credential checks from code refresh.
- **[#2591 — fix: namespace user IDs by channel-type prefix, not bare colon**](https://github.com/nanocoai/nanoclaw/pull/2591) — fixes user ID collision across channels when using bare `:` separators.

Three PRs remain open and are nearing merge readiness, including the new transactional update fix ([#3195](https://github.com/nanocoai/nanoclaw/pull/3195)), a host‑seams refactor ([#3186](https://github.com/nanocoai/nanoclaw/pull/3186)), and a OneCLI gateway bypass fix ([#2705](https://github.com/nanocoai/nanoclaw/pull/2705)).

---

## Community Hot Topics

- **[Issue #3194 — `/update-nanoclaw` can stamp success without a recoverable cutover**](https://github.com/nanocoai/nanoclaw/issues/3194) — filed by `glifocat` (who is also the core‑team member who authored PR #3195). This is the day’s most active item, not by comment count but by urgency: it identifies four distinct failure windows in the update process, including SQLite DB and gitignored config corruption. The quick turnaround of a fix PR the same day signals this is a top maintainer priority.
- **[Issue #3171 — The two qodo skills depend on an integration nothing sets up](https://github.com/nanocoai/nanoclaw/issues/3171)** — filed by `glifocat` and closed today with PR #3172. Although not “hot” in terms of discussion, this reflects a recurring community pain: bundled skills that appear to work but silently rely on unconfigured external accounts. The maintainer’s decision to remove the skills entirely (rather than document them) suggests a preference for a leaner built-in skill set.
- **[PR #3186 — refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186)** — open, with 2+ days of age. This refactor is foundational for letting skills own host capabilities (like credentials or pre‑flights) without breaking `/update-skills`. It addresses the same underlying tension as Issue #3171 and PR #2873.

---

## Bugs & Stability

Ranked by severity:

1. **HIGH — `/update-nanoclaw` stamps success without a recoverable cutover** ([Issue #3194](https://github.com/nanocoai/nanoclaw/issues/3194))
   - Four failure windows: changes the running checkout before validation passes; rollback protects Git but not SQLite DB, gitignored config, or external components.
   - **Fix exists**: PR [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) (transactional upgrades) is open and authored by the same reporter — likely to merge quickly.

2. **MEDIUM — Bundled qodo skills read API key from `~/.qodo/config.json`** ([Issue #3171](https://github.com/nanocoai/nanoclaw/issues/3171))
   - Skills intercept normal coding requests and fail silently when the integration is missing.
   - **Fix merged**: PR [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) removes the skills entirely.

3. **LOW — Scheduling failures were not surfaced to the user** ([PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679)) and **recurrence didn’t re-arm after permanent failures** ([PR #2678](https://github.com/nanocoai/nanoclaw/pull/2678))
   - Both merged today, closing a stability gap in the scheduling module.

No new crashes or regressions were reported in the last 24 hours.

---

## Feature Requests & Roadmap Signals

- **Transactional / cutover-safe updates** (Issue #3194 → PR #3195): The project is signaling that self‑update reliability is a core value. Expect more robustness work here, possibly a formal “update staging” path in the next release.
- **Skill-owned capabilities and host seams** ([PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186), [PR #2873](https://github.com/nanocoai/nanoclaw/pull/2873)): The move to split credential handling from skill code and add host seams indicates a future where skills are more decoupled from the core and can be updated independently without breaking configurations.
- **Rich messages in Telegram** ([PR #3193](https://github.com/nanocoai/nanoclaw/pull/3193) — open): Updating the Chat SDK for rich messages (media, buttons, etc.) suggests richer interactive Telegram experiences are next.
- **Community-suggested utility skills**: PR [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) adds a **Tavily MCP tool skill**, showing continued community interest in search‑backed tooling — but note that Qodo’s removal suggests a higher bar for accepting skills that depend on external SaaS credentials.

---

## User Feedback Summary

- **Pain point — silent failures from bundled skills**: Users reported that built-in skills (Qodo, Google MCP) appeared functional but failed because dependencies were never set up. The maintainers’ response (removal) is decisive but may frustrate users who used those tools; expect a follow‑up discussion about what should replace them (e.g., opt‑in skill installation).
- **Pain point — unrecoverable updates**: Issue #3194 highlights that users who run `/update-nanoclaw` risk losing database/config state if the update fails post‑Git‑checkout. This is a trust‑eroding bug for a self‑updating agent; the quick fix PR is a good sign.
- **Positive signals**: The merged fix for media‑only messages ([#2213](https://github.com/nanocoai/nanoclaw/pull/2213)) addresses a real Telegram use case, and the scheduling fixes ([#2678](https://github.com/nanocoai/nanoclaw/pull/2678), [#2679](https://github.com/nanocoai/nanoclaw/pull/2679)) mean users will now be told when scheduled tasks fail instead of only seeing log entries.
- **Community satisfaction appears moderate‑to‑positive**: PR volume is steady, and the core team is responsive (same‑day fix for Issue #3194). No negative sentiment was visible in comments today.

---

## Backlog Watch

The following items have been open for a significant time and may need attention:

- **[PR #2705 — fix(use-native-credential-proxy): actually bypass the OneCLI gateway](https://github.com/nanocoai/nanoclaw/pull/2705)** — open since **June 7, 2026** (2 months). This is a fix for a skill that silently falls back to the OneCLI gateway despite `use-native-credential-proxy` — a correctness issue that has gone stale. Needs a maintainer review or a decision to close.
- **[PR #3149 — fix(cli): add --rw flag to groups config add-mount](https://github.com/nanocoai/nanoclaw/pull/3149)** — open since July 29, 2026 (9 days), no comments. A small CLI polish that may be lost in the shuffle.
- **[PR #3186 — refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186)** — open since Aug 4, 2026, no comments. This is a structural refactor that touches core code; it could block or enable several other PRs (including #2873’s long‑term goals) and deserves a maintainer’s eye.
- **[PR #3190 — feat: add Tavily MCP tool skill](https://github.com/nanocoai/nanoclaw/pull/3190)** — open since Aug 5, 2026, no comments. With the Qodo skills removed, the team should clarify the bar for accepting new skills that rely on external SaaS accounts, or this PR will linger.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-08-07

---

## 1. Today's Overview

IronClaw is in a high-activity stabilization phase following the promotion of `v1.1.0` to stable. The project saw **100 items** (50 issues, 50 PRs) updated in the last 24 hours, with **27 open issues** and **33 open PRs** signaling an active bug-fix and feature pipeline. The predominant themes are **routine/automation reliability** (lease expirations, thread attachment failures, Slack delivery issues) and **UI polish/observability** (the new Inspector tool, activity panel improvements). The release of **`ironclaw-v1.1.0`** on August 6th is the headline event, with a major focus on **extension reach** — arbitrary MCP server registration, IronHub deep links, and durable file attachments. While no single new release occurred today, the volume of merged PRs and proactive security dependency bumps suggests a healthy, responsive maintenance cadence.

---

## 2. Releases

### `ironclaw-v1.1.0` (released 2026-08-06)

**Headline Features:** Extension reach — registering arbitrary hosted MCP servers, installing from IronHub deep links, durable file attachments that cross channels, and Slack integration enhancements.

**Notes:** This is a promotion of `1.1.0-rc.1` plus a set of fixes (detailed in the release notes as "Fixed since 1.1.0-rc.1"). While the release notes are truncated in the data, the **PRs merged around this date** indicate the fix set included:

- [PR #7303](https://github.com/nearai/ironclaw/pull/7303): Docker healthcheck fix (`curl` installation) for `ironclaw:1.1.0` images.
- [PR #7289](https://github.com/nearai/ironclaw/pull/7289): FTS query sanitization for natural-language memory recall on libSQL.

**Breaking Changes / Migration:** No explicit breaking changes or migration notes were provided in the release summary. The Docker healthcheck fix in [PR #7303](https://github.com/nearai/ironclaw/pull/7303) is a **critical deployment note** for anyone running `1.1.0` on hosted staging: images will sit in `error` status until rebuilt with this fix.

---

## 3. Project Progress

Today's merged/closed PRs (17 total) show a **strong focus on security, infrastructure reliability, and observability**:

**Merged/Closed PRs:**

- **[PR #7235](https://github.com/nearai/ironclaw/pull/7235) — feat(inspector): add operator inspection API and live updates.** The core Inspector backend is merged, exposing diagnostic endpoints and a live stream. This is the foundation for [Issue #7220](https://github.com/nearai/ironclaw/issues/7220) (closed today).
- **[PR #7259](https://github.com/nearai/ironclaw/pull/7259) — docs: enforce the docs/ publication boundary.** Closes a **live leak** where internal `docs/design/` and `docs/research/` were publicly reachable. Adds a CI gate and freezes `.mintignore`.
- **[PR #7303](https://github.com/nearai/ironclaw/pull/7303) — fix(docker): install curl so orchestrator healthchecks can run.** Resolves the `1.1.0` image error state.
- **[PR #7289](https://github.com/nearai/ironclaw/pull/7289) — fix(memory): sanitize FTS queries so natural-language recall works on libSQL.** Verified on the production composition path.

**Open but advancing:**
- **[PR #7236](https://github.com/nearai/ironclaw/pull/7236) / [PR #7239](https://github.com/nearai/ironclaw/pull/7239) / [PR #7277](https://github.com/nearai/ironclaw/pull/7277)** — Inspector UI shell, prompt inspection, and model-call statistics are all open and being reviewed. The Inspector feature set is being landed incrementally.

---

## 4. Community Hot Topics

The most-discussed issues center on **routine reliability and integration parity**, revealing user frustration with flaky automations:

**1. [Issue #5553](https://github.com/nearai/ironclaw/issues/5553) — Approval notifications disappear (4 comments)**
Users cannot reliably see or act on approval requests from running automations. This is a **P2** that directly impacts trust in long-running workflows. The fact that it's been open since July 2nd suggests a complex underlying issue.

**2. [Issue #5702](https://github.com/nearai/ironclaw/issues/5702) — GitHub integration fails with HTTP 403 (4 comments)**
A core external integration (GitHub issues) is entirely broken for the agent, returning `operation_failed`. This is a high-impact issue for a developer-focused tool.

**3. [Issue #5522](https://github.com/nearai/ironclaw/issues/5522) — Reborn routine fails on Slack DMs (3 comments)**
Exposes two compounding problems: a **missing Slack read capability** and an infinite `capability_info` retry loop. This suggests the agent's error-handling/retry logic is too aggressive.

**4. [Issue #5701](https://github.com/nearai/ironclaw/issues/5701) — Activity panel hides tool details (3 comments)**
A strong UX signal: users want **real-time, detailed observability** of tool calls. This aligns perfectly with the Inspector work, indicating maintainers are already on the right track.

**5. [Issue #5834](https://github.com/nearai/ironclaw/issues/5834) — Slack disconnect request rejected (3 comments)**
The agent hallucinates an inability to disconnect Slack, locking users into an integration. This indicates a **capability-awareness gap** in the agent's prompt/planning layer.

---

## 5. Bugs & Stability

**Ranked by severity (P1 = Critical):**

| Severity | Issue | Summary | Fix PR? |
| :--- | :--- | :--- | :--- |
| **P1** | [#5877](https://github.com/nearai/ironclaw/issues/5877) | **Data leak:** Slack notification delivered to the *wrong user*. | **Closed** — High priority, fix merged. |
| **P1** | [#5456](https://github.com/nearai/ironclaw/issues/5456) | Routine runs fail due to runner lease expiration (90s too aggressive). | No direct fix; likely needs config change. |
| **P1** | [#5504](https://github.com/nearai/ironclaw/issues/5504) | Routine creation hangs indefinitely. | **Closed** — Resolved. |
| **P2** | [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub integration broken (HTTP 403). | No open fix PR. |
| **P2** | [#5836](https://github.com/nearai/ironclaw/issues/5836) | Routine fails on *every* run with "No thread attached" (0% success). | No open fix PR. |
| **P2** | [#5776](https://github.com/nearai/ironclaw/issues/5776) | Long prompts cause timeouts, obscuring real errors. | No fix; relates to timeout/compaction handling. |
| **P2** | [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear. | No open fix PR. |
| **P2** | [#5838](https://github.com/nearai/ironclaw/issues/5838) | Runs fail with context compaction error *after* success. | **Closed.** |

**Key Stability Insights:**
- **Context Compaction/Lease Expiry** is a leading cause of user-facing failures. Two distinct issues ([#5456](https://github.com/nearai/ironclaw/issues/5456), [#5838](https://github.com/nearai/ironclaw/issues/5838)) point to a fragile runtime lifecycle.
- **FSQL FTS bugs** ([#7275](https://github.com/nearai/ironclaw/issues/7275) closed by [#7289](https://github.com/nearai/ironclaw/pull/7289)) were a significant production defect, now fixed.
- **Security dependency bumps** were pushed for `js-yaml`, `fast-uri`, and `brace-expansion` (PRs [#7311](https://github.com/nearai/ironclaw/pull/7311), [#7312](https://github.com/nearai/ironclaw/pull/7312), [#7313](https://github.com/nearai/ironclaw/pull/7313)), indicating a proactive stance on vulnerabilities.

---

## 6. Feature Requests & Roadmap Signals

The clearest roadmap signal is the **Inspector** feature, which is being actively built right now:

- **PR [#7236](https://github.com/nearai/ironclaw/pull/7236)** — Debug panel shell.
- **PR [#7277](https://github.com/nearai/ironclaw/pull/7277)** — Model call statistics.
- **PR [#7239](https://github.com/nearai/ironclaw/pull/7239)** — Prompt inspection.

**Predicted next version inclusions:**
1. **Complete Inspector UI:** The shell, stats, and prompt tabs are landing. Expect this to be a viewer-facing feature in `1.2.0`.
2. **Slack Delivery Overhaul:** [PR #7300](https://github.com/nearai/ironclaw/pull/7300) restores personal delivery and aims to fix the multiple Slack target bugs. This is a direct response to the user pain documented in issues like [#5508](https://github.com/nearai/ironclaw/issues/5508) and [#5834](https://github.com/nearai/ironclaw/issues/5834).
3. **Explicit Channel Delivery Tool:** [PR #7157](https://github.com/nearai/ironclaw/pull/7157) introduces a formal two-lane model for message delivery (conversation lifecycle vs. notification). This is a design-driven feature that will change how users receive notifications.
4. **Custom MCP Registration:** [PR #7253](https://github.com/nearai/ironclaw/pull/7253) keeps this "definition-only" for now, but it's the foundation for user-uploaded MCP servers.

---

## 7. User Feedback Summary

The QA/bug reports provide direct insight into user satisfaction:

- **Frustration with Error Transparency:** The most recurring complaint is the **generic "invalid result" error**. Users are explicitly asking for the UI to show *which* tool failed and *why* ([#5552](https://github.com/nearai/ironclaw/issues/5552), [#5776](https://github.com/nearai/ironclaw/issues/5776)). The activity panel collapse ([#5701](https://github.com/nearai/ironclaw/issues/5701)) makes this worse.
- **Integration Reliability is Key:** Slack, GitHub, and Telegram issues dominate. Users are clearly using IronClaw as a hub for external workflows, and when these break, trust is lost. The Slack "wrong user" notification ([#5877](https://github.com/nearai/ironclaw/issues/5877)) is a severe trust-breaker.
- **Routine Management is Confusing:** Users cannot delete routines ([#5510](https://github.com/nearai/ironclaw/issues/5510)), cannot debug failed runs ([#5507](https://github.com/nearai/ironclaw/issues/5507)), and face opaque configuration errors ([#5707](https://github.com/nearai/ironclaw/issues/5707)). This is a core power-user feature that needs significant UX work.
- **Performance Degradation:** Chat creation latency scales with history ([#5509](https://github.com/nearai/ironclaw/issues/5509)), indicating a frontend state-management issue that will only get worse for power users.

---

## 8. Backlog Watch

These items have been open for a while or are critical and need attention:

1. **[Issue #4341](https://github.com/nearai/ironclaw/issues/4341) — Agent THINKING chain-of-thought exposed to user (open since 2026-06-02).** A **P2** with zero comments. This is a privacy/security concern and a potential model-configuration bug that has been sitting unacknowledged for two months.

2. **[Issue #5456](https://github.com/nearai/ironclaw/issues/5456) — Runner lease expiration (open since 2026-06-30).** This is a **P1** that was the "dominant failure pattern" in testing, yet has no fix PR. The 90-second timeout needs a more intelligent, activity-based reset.

3. **[Issue #5702](https://github.com/nearai/ironclaw/issues/5702) — GitHub integration HTTP 403 (open since 2026-07-06).** A core external integration has been broken for over a month with no linked fix PR.

4. **[Issue #4339](https://github.com/nearai/ironclaw/issues/4339) — Provider tool calls rejected as InvalidInvocation (open since 2026-06-02).** Another month-old P2 with zero comments, indicating a validation-layer bug for specific models (MiniMax-M2.7).

5. **[Related Bundle: Slack Delivery Target Issues]** — [#5508](https://github.com/nearai/ironclaw/issues/5508), [#5509](https://github.com/nearai/ironclaw/issues/5509), [#5510](https://github.com/nearai/ironclaw/issues/5510) all relate to Slack target mis-configuration and stale routine management. While [PR #7300](https://github.com/nearai/ironclaw/pull/7300) is open to fix the root cause, it is still pending review and should be shepherded through.

**Maintainer Action Item:** The cluster of issues around **routine execution context** ("No thread attached", lease expiry, compaction failures) warrant a dedicated design review, as they represent the largest systemic instability in the project.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **2026-08-07**.

---

### 1. Today's Overview
LobsterAI is showing moderate activity with **6 open issues** and **4 open PRs** updated in the last 24 hours, with **zero** closures or merges during this period. The community is actively reporting bugs (2 new functional bugs), submitting feature requests (1), and raising configuration/infrastructure questions, while two PRs from the same contributor (fisherdaddy) target specific Windows installer and OpenClaw configuration fixes. The project health appears stable, though there are two long-stale issues (from April) concerning directory management and gateway restart logic that remain unresolved. No new releases were published today.

---

### 2. Releases
- **No new releases** were published in the last 24 hours.

---

### 3. Project Progress
- **No merged or closed PRs** were recorded today.
- **Active PRs** (Open, no merge status):
  - **[#2446](https://github.com/netease-youdao/LobsterAI/pull/2446)** – `fix(win-installer): rescue null watchdog exit code via extractor` – A Windows-specific fix targeting installer robustness, likely addressing a crash or false failure detection during the install process.
  - **[#2445](https://github.com/netease-youdao/LobsterAI/pull/2445)** – `fix(openclaw): strip plugin-index-managed keys from config.set` – A fix for the OpenClaw module to prevent conflicts between local config and plugin-managed keys, which should improve configuration reliability.
  - The other two PRs ([#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) and [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199)) are marked as **stale** (since April) and cover UI/UX improvements for the Agent management page and model context/token settings, respectively.

---

### 4. Community Hot Topics
- **[Issue #1196 (Stale)](https://github.com/netease-youdao/LobsterAI/issues/1196)** – `不要强制在工作目录中建立 Agents.md、User.md等6个文件` – This issue has been open since April and is receiving renewed attention. It is the **highest-commented** in the last 24h (tied with #1198). The core complaint is that LobsterAI forces the creation of multiple system files (`AGENTS.md`, `USER.md`, etc.) in the working directory, cluttering user folders. The suggested solutions include using a global `agents.md` or hiding these files, a clear signal of a **UX and file-hygiene** concern.
- **[Issue #1198 (Stale)](https://github.com/netease-youdao/LobsterAI/issues/1198)** – `网关重启到一半进度条消失` – This is the second most active issue, centering on a **gateway restart instability**. Users report that the progress bar disappears mid-restart, and the UI incorrectly states that the browser service is unavailable, leading to a confusing and broken experience. The reported symptoms suggest a potential race condition or lack of state synchronization in the UI.

---

### 5. Bugs & Stability
- **Medium Severity – UI/Functionality Block [New]**
  - **[Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443)** – **Bug: Model IDs with slashes (e.g., SiliconFlow) cannot be used in the UI.** This is a functional bug for all OpenAI-compatible providers with slash-containing model IDs, preventing users from selecting them. There is **no fix PR** currently linked. This is a significant compatibility blocker for third-party providers.

- **Medium Severity – Functional Failure [New]**
  - **[Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447)** – **Execution yields no result and no error.** This indicates the software is silently failing during task execution, which is a major usability issue. No fix PR is linked, and the report lacks detailed logs, making diagnosis urgent.

- **Low-Medium Severity – Environment/Configuration**
  - **[Issue #2442](https://github.com/netease-youdao/LobsterAI/issues/2442)** – **Core PowerShell engine stuck at 5.1.** This is a configuration limitation rather than a crash, but its impact on advanced execution is unclear. Maintainers should consider documenting or supporting PS7+.

- **Stale Bugs (Still Open)**
  - **[Issue #1198 (Stale)](https://github.com/netease-youdao/LobsterAI/issues/1198)** – Gateway restart UI bug remains unresolved since April.

---

### 6. Feature Requests & Roadmap Signals
- **[Feature Request #2444 (New)](https://github.com/netease-youdao/LobsterAI/issues/2444)** – **Input Box Editing Mode.** Users are requesting an "edit mode" toggle for the input box to improve long-prompt writing. The requested features include:
  - Option to switch *Enter* to create a new line by default.
  - A "editor mode" button that expands the input field and changes *Enter* behavior.
  - Potentially, a WYSIWYG Markdown editor.
  
  This is a strong **quality-of-life** signal. Given its clarity and common need, this feature has a high likelihood of being included in the next minor version.

- **Roadmap Prediction:** Given the active PRs and the nature of the requests, the next version is likely to focus on **stability fixes** (installer, config) and **input UX enhancements**, rather than new major features.

---

### 7. User Feedback Summary
- **Pain Point: Forced File Generation (Issue #1196)** – Users are dissatisfied with the current system file management, finding it chaotic and intrusive, which is a clear **negative UX** signal.
- **Pain Point: Silent Failures (Issue #2447)** – The lack of error output during execution is highly frustrating for users, hindering task completion and debugging.
- **Pain Point: Provider Compatibility (Issue #2443)** – Users relying on models with slash-containing IDs (like SiliconFlow) are blocked from using them, forcing workarounds. This reflects the **importance of third-party provider flexibility**.
- **Question/Dissatisfaction: Old PowerShell Core (Issue #2442)** – A user is questioning the technical debt of using PowerShell 5.1, indicating a desire for modern infrastructure.

---

### 8. Backlog Watch
- **[Issue #1196 (Stale since April 2026)](https://github.com/netease-youdao/LobsterAI/issues/1196)** – **High Priority:** The demand for a better directory/file system management (hiding files or using a global `agents.md`) has received renewed attention. It requires a **maintainer response** on whether a global config or hidden-directory approach is planned.
- **[Issue #1198 (Stale since April 2026)](https://github.com/netease-youdao/LobsterAI/issues/1198)** – **High Priority:** The gateway restart UI bug remains unreported for a fix. This is a prominent stability issue that continued to confuse users.
- **[PR #1197 (Stale)](https://github.com/netease-youdao/LobsterAI/pull/1197) & [PR #1199 (Stale)](https://github.com/netease-youdao/LobsterAI/pull/1199)** – These PRs (Agent page UX and Model context/token settings) have been waiting for review/merge since April. They represent valuable improvements that are being **squeezed out by the process**, and a maintainer decision on their future is crucial to avoid contributing to the backlog.

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

# CoPaw Project Digest
**Date: 2026-08-07**

---

## 1. Today's Overview

CoPaw (QwenPaw) is showing strong, sustained development activity with 27 issues and 50 pull requests updated in the last 24 hours. The project maintains a healthy close-to-open ratio (13 closed vs 14 open issues; 28 merged/closed vs 22 open PRs), indicating responsive maintainers and active feature development. Current focus areas include memory system improvements (ReMe/Scroll lifecycle), model provider reliability (fallback mechanisms, reasoning_content handling), desktop client polish, and MCP tool robustness. The beta v2.1.0 line is actively being stabilized with several desktop and browser-related fixes landing. No new releases were published today, suggesting the team is consolidating the 2.1.0 beta before a stable release.

---

## 2. Releases

**No new releases published in the last 24 hours.**

The latest known version remains **v2.1.0b1/b2 (beta)** for desktop and backend, with **v2.0.1** as the current stable line. Several bug fixes are queued for the next stable release.

---

## 3. Project Progress

**Merged/Closed PRs (28 total, highlights):**

- **[#6337 — feat(agui): expose AG-UI protocol via /protocol/agui/chat endpoint](https://github.com/agentscope-ai/CoPaw/pull/6337)** (CLOSED): Adds AG-UI protocol support, streaming agent responses as standard AG-UI events over SSE, isolated from existing services. Under review for human sign-off.

- **[#6525 — feat: user context transparent pass-through (Chat API → Agent → Tool → MCP → SKILL CLI)](https://github.com/agentscope-ai/CoPaw/pull/6525)** (CLOSED): Implements user identity (user_id, user_name, channel, custom metadata) propagation across the entire stack—programmatic access only, invisible to the LLM.

- **[#6651 — feat(files): add file/folder management REST API](https://github.com/agentscope-ai/CoPaw/pull/6651)** (CLOSED): Adds 6 missing file operations (delete, rename/move, create dir, upload/download, directory listing) for the Files page, reusing the FileGuard security model.

- **[#6605 — fix(providers): return typed tagged tool calls](https://github.com/agentscope-ai/CoPaw/pull/6605)** (CLOSED): Rehydrates tool calls from thinking/text tags as AgentScope 2 ToolCallBlock objects with unique stream-local IDs.

- **[#6664 — fix(harnesses): degrade gracefully without Codex CLI](https://github.com/agentscope-ai/CoPaw/pull/6664)** (CLOSED): Improves resilience when Codex CLI is unavailable.

- **[#6611 — refactor(context): align Scroll and memory with AgentScope lifecycle](https://github.com/agentscope-ai/CoPaw/pull/6611)** (CLOSED): Major refactor converging Scroll as the sole context protocol, aligning with AgentScope 2.0 Agent base class design (state, toolkit, middleware, context hooks).

- **[#6564 — fix(memory): flush pending turns before compression](https://github.com/agentscope-ai/CoPaw/pull/6564)** (OPEN, Under Review): Fixes #6555, ensuring pending Auto-Memory persistence isn't gated on `summarize_when_compact`.

- **[#6659 — feat(providers): model fallback with cooldown mechanism](https://github.com/agentscope-ai/CoPaw/pull/6659)** (OPEN, Under Review): Automatic failover on rate limits/timeouts/service errors with cooldown to avoid hammering failing providers. Fixes #2199, #1327, #2089.

**Notable open PRs:**
- **[#6776 — fix(browser): self-heal dead Playwright driver connections](https://github.com/agentscope-ai/CoPaw/pull/6776)** (first-time contributor): Addresses "die once, dead forever" Playwright driver bug.
- **[#6774 — fix(modes): honor in_loop_modes for goal and mission gates](https://github.com/agentscope-ai/CoPaw/pull/6774)**: Fixes #6773 (doom-loop protection not activating).
- **[#6767 — fix(config): harden agent persistence on shared filesystems](https://github.com/agentscope-ai/CoPaw/pull/6767)**: Atomic JSON writer for agent/ACL migrations; device/inode/size-based cache keys.
- **[#6769 — fix(onebot): expand quoted reply messages](https://github.com/agentscope-ai/CoPaw/pull/6769)**: Fixes QQ quoted-reply context loss.
- **[#6772 / #6771 — feat(memory): ReMe embedding lifecycle + docs](https://github.com/agentscope-ai/CoPaw/pull/6772)**: Unified Embedding model factory (OpenAI-compatible, DashScope, Gemini, Ollama) with real connectivity pre-save validation.

---

## 4. Community Hot Topics

- **[#6684 — [Feature]: Add channel retry functionality](https://github.com/agentscope-ai/CoPaw/issues/6684)** (8 comments, CLOSED): Self-hosted Matrix users experience startup races where QwenPaw fails before Matrix is ready. No retry/health-check mechanism means requiring manual re-save after every restart. **Underlying need**: Connection lifecycle management for self-hosted services.

- **[#6588 — [Bug]: `spawn_subagent` treats empty `batch` placeholders as batch mode](https://github.com/agentscope-ai/CoPaw/issues/6588)** (6 comments, CLOSED): Empty batch placeholder in single-task calls incorrectly triggers batch mode in Responses-compatible paths. **Signal**: Edge-case semantics in the subagent API.

- **[#6601 — [Bug]: QwenPaw doesn't report empty response errors](https://github.com/agentscope-ai/CoPaw/issues/6601)** (5 comments, OPEN): Long sessions near context window limits get silent empty responses—no framework error. **Signal**: Critical reliability gap for long-context sessions.

- **[#6667 — DeepSeek thinking mode fails in multi-turn](https://github.com/agentscope-ai/CoPaw/issues/6667)** (5 comments, CLOSED): reasoning_content missing after OpenAI formatter skips ThinkingBlock; workaround only works on first failure. **Signal**: Multi-turn thinking-protocol compatibility.

---

## 5. Bugs & Stability

**High Severity:**

- **[#6775 — Malware Bytes found Trojan Loader in Desktop Version (Windows)](https://github.com/agentscope-ai/CoPaw/issues/6775)** (OPEN): User reporting antivirus flag on desktop build. Likely false positive, but user is uninstalling pending clarification. **Action needed**: Formal response and potential code-signing verification advisory.

- **[#6768 — Agent enters infinite loop after completing multi-step task, session blocked for hours](https://github.com/agentscope-ai/CoPaw/issues/6768)** (OPEN): Agent became unresponsive for hours during financial record import; user messages received but never processed.

- **[#6773 — Doom-loop / rubric gates never activate in `/goal` or `/mission`](https://github.com/agentscope-ai/CoPaw/issues/6773)** (OPEN): Safety gates silently disabled in loop modes—reads nonexistent `workspace.agent_config` instead of `workspace.config`. **Fix PR exists**: [#6774](https://github.com/agentscope-ai/CoPaw/pull/6774).

- **[#6612 — QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1](https://github.com/agentscope-ai/CoPaw/issues/6612)** (OPEN): Proactive/memory subsystem crashes (Msg.content type) and tool-permission deadlock due to agentscope API drift. **Risk**: Dependency compatibility with latest agentscope.

**Medium Severity:**

- **[#6732 — MCP tools fail periodically; restart required](https://github.com/agentscope-ai/CoPaw/issues/6732)** (OPEN): MCP tools become unresponsive after hours; Docker restart required. Suggests connection lifetime management gap.

- **[#6700 — Large tool output freezes history loading; needs truncation/pagination](https://github.com/agentscope-ai/CoPaw/issues/6700)** (CLOSED): Multi-MB tool outputs saved to context, causing page hangs and context overflow. **Signal**: Output size governance needed.

- **[#6755 — Model misjudges current date/weekday in cross-day sessions](https://github.com/agentscope-ai/CoPaw/issues/6755)** (OPEN): Agent consistently off-by-one on weekday mapping, causing real scheduling errors (meeting set on wrong day). **Signal**: Date/time context injection issue in long sessions.

- **[#6756 — run_tool_batch fails: "No toolkit available in current context"](https://github.com/agentscope-ai/CoPaw/issues/6756)** (OPEN): Every agent fails with ContextVar injection issue in `run_tool_batch`.

**Lower/Moderate:**

- **[#6762 — Desktop: long shell commands not wrapped in tool-call block](https://github.com/agentscope-ai/CoPaw/issues/6762)** (CLOSED): CodeMirror lacks lineWrapping; cosmetic UX issue.
- **[#6760 — qwenpaw task cmdline error on 2.0.1](https://github.com/agentscope-ai/CoPaw/issues/6760)** (CLOSED): Error message shown, likely non-blocking (ResourceGovernor sandbox warning).
- **[#6731 — execute_shell_command crashes on sandbox_config: "replace() should be called on dataclass instances"](https://github.com/agentscope-ai/CoPaw/issues/6731)** (CLOSED).

---

## 6. Feature Requests & Roadmap Signals

| Feature Request | Issue Link | Likelihood for Next Version |
|---|---|---|
| Configurable MCP tool-call timeout (per-client + call-level) | [#6724](https://github.com/agentscope-ai/CoPaw/issues/6724) | **High** — active gap, clear design proposed |
| MCP 2026-07-28 stateless spec support | [#6761](https://github.com/agentscope-ai/CoPaw/issues/6761) | **High** — protocol breaking change, likely roadmap item |
| Channel auto-retry with health checks | [#6684](https://github.com/agentscope-ai/CoPaw/issues/6684) | **Medium** — affects Matrix/self-hosted users |
| Chinese approve/deny labels for WeChat approvals | [#6728](https://github.com/agentscope-ai/CoPaw/issues/6728) | **Medium** — quick UI localization win |
| User Chrome tab lifetime configurable across response cycles | [#6770](https://github.com/agentscope-ai/CoPaw/issues/6770) | **Medium** — power-user browser feature |
| EU language support (Hungarian requested) | [#6765](https://github.com/agentscope-ai/CoPaw/issues/6765) | **Low** — localization effort, low demand signal |
| Tool output truncation and history pagination | [#6700](https://github.com/agentscope-ai/CoPaw/issues/6700) | **High** — stability-critical, likely accepted design |

---

## 7. User Feedback Summary

**Pain Points:**

1. **Long-session reliability** is the most pressing theme: silent empty responses (#6601), date/weekday confusion (#6755), infinite loops (#6768), context window overflow (#6700). Users are hitting real production walls in long-running assistants.

2. **Self-hosted channel fragility**: Matrix users report repeated connection loss (#6684), E2E encryption broken (#6476). Need for retry/health-check mechanisms is vocal.

3. **MCP reliability**: Tools periodically fail (#6732), naming conflicts with strict LLM validation (#6557), no configurable timeouts (#6724). MCP is increasingly central; stability gaps are visible.

4. **Dependency compatibility anxiety**: The agentscope 2.0.4.post1 incompatibility (#6612) suggests users want a tightly validated dependency lockstep.

**Positive Signals:**

- Multi-language users express enthusiasm ("I love your work. Thanks for all you do.")
- The memory/embedding documentation effort (#6771) is well-received—users want clearer configuration guidance.
- Community contributors are active: first-time contributor PR #6776, multiple continuing contributors (mautops, rayrayraykk, GMsure, jinliyl, ChaosG).

---

## 8. Backlog Watch

The following items have been open for extended periods and need maintainer attention:

- **[#6612 — QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1](https://github.com/agentscope-ai/CoPaw/issues/6612)** (opened Jul 31, 3 comments): Proactive system crashes and tool-permission deadlock. **Open for 7 days** — dependency compatibility is urgent for users following the latest agentscope.

- **[#6601 — QwenPaw doesn't report empty response errors](https://github.com/agentscope-ai/CoPaw/issues/6601)** (opened Jul 31, 5 comments): Long-session silent failures. **Open 7 days** — this is a framework-level reliability gap.

- **[#6724 — Configurable MCP tool-call timeout](https://github.com/agentscope-ai/CoPaw/issues/6724)** (opened Aug 5, 1 comment): Clear design proposal, no maintainer response yet.

- **[#6557 — MCP tool names starting with hyphen break strict LLM APIs](https://github.com/agentscope-ai/CoPaw/issues/6557)** (opened Jul 29, closed Aug 6): **CLOSED** — resolved, good turnaround.

- **[#6564 — flush pending turns before compression](https://github.com/agentscope-ai/CoPaw/pull/6564)** (opened Jul 30, Under Review): Memory lifecycle fix awaiting merge decision. **8 days in review**.

- **[#6659 — model fallback with cooldown mechanism](https://github.com/agentscope-ai/CoPaw/pull/6659)** (opened Aug 3, Under Review): Addresses 3 long-standing issues (#2199, #1327, #2089) but remains unreviewed at 4 days.

---

*Data sources: github.com/agentscope-ai/CoPaw issues & PRs updated 2026-08-06 to 2026-08-07.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-07

## 1. Today's Overview

ZeroClaw is in a period of intense governance and stabilization activity: 35 issues and 50 PRs received updates in the last 24 hours, with a healthy mix of open discussion (24 issues, 43 PRs active) and closed/merged work (11 issues, 7 PRs). The project is actively ratifying RFCs and hardening runtime security, with a notable cluster of new bug reports around the SOP (Standard Operating Procedure) subsystem covering silent failure modes and documentation gaps. Maintainers appear heavily engaged, with a dozen PRs waiting on author action and several high-severity security issues (S0/S1) recently closed, suggesting responsiveness is strong but contributor follow-through is a bottleneck.

## 2. Releases

No new releases in the last 24 hours. Latest public version remains 0.8.3 (referenced in issue #9672), with 0.8.4 tagged in beta per recent bug reports (#9800, #9799, #9783).

## 3. Project Progress

Seven PRs were merged or closed in the last 24 hours:

- **[#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) — fix(channels): cap Telegram bot commands and repair truncation WARN for #8950** — Merged. Resolves BOT_COMMANDS_TOO_MUCH failure; caps command list to Telegram's 100-command limit.
- **[#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) — fix(providers): remove unconditional strip_think_tags from compatible provider (#8615)** — Merged. Stops silent content deletion on OpenAI-compatible upstreams (e.g., MiniMax) that embed CoT inline.
- **[#9659](https://github.com/zeroclaw-labs/zeroclaw/pull/9659) — fix(docs): disambiguate contextual protected literals** — Merged. Fixes false-positive protected-literal warnings for ambiguous channel names ("Signal", "Filesystem").
- [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) — **[Bug]: none of the three `cron add` examples in CLI help run as printed** — Closed (CLI fix verified).
- [#9172](https://github.com/zeroclaw-labs/zeroclaw/issues/9172) — **[Feature]: Use one command descriptor source for ZeroCode slash commands** — Closed (feature shipped).
- [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) — **[Bug]: execute_pipeline bypasses per-agent tool gating (confused deputy)** — Closed (secured; S0 severity).
- [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) — **[Feature]: Support for Kimi Code provider** — Closed (after ~6 months; likely via compatible-provider route).

## 4. Community Hot Topics

The most active discussions are governance and architecture RFCs, indicating a mature, process-driven community:

- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup** (19 comments). A long-running governance RFC (rev. 24) attempting to streamline maintainer routing without adding overhead. Signals concern that project processes are becoming unwieldy.
- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — [Tracker]: Maintainer decision queue for RFCs and design issues** (11 comments). A dedicated decision-queue tracker — community is creating meta-processes to unblock decision-making.
- **[#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) — RFC: A2A outbound client (A2ATool)** (11 comments). A high-risk (risk:high) architecture RFC for agent-to-agent outbound calls; complements shipped A2AServer. Community wants proactive inter-agent collaboration rather than forced chat routing.
- **[#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) — RFC: Preserve Todo tracker config during ZeroCode ownership migration** (11 comments). Configuration-preservation during migrations — a practical pain point from real upgrades.

Underlying need: the community is simultaneously (a) pushing for more autonomy (A2A, cron-driven SOPs) and (b) demanding safety/security hardening (per-agent gating, credential-chain verification, WhatsApp group pinning).

## 5. Bugs & Stability

Several new high-severity bugs were filed in the last 24h, concentrated in the SOP subsystem:

**New (P1, risk:high):**
- **[#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — `sops_dir` documented default not honored; SOPs silently never load.** Daemon gates all SOP loading on `sops_dir.is_some()`, so relying on the documented default silently disables the entire engine. No error/warning/log. (P1, in-progress)
- **[#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) — Malformed `SOP.toml` silently dropped; `sop list` omits, `sop validate` claims success.** Indistinguishable from a typo or deleted SOP. (P1)
- **[#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) — Multi-step agent-driven SOP marked failed mid-step with no audit event.** Agent discovers failure only on next `sop_advance` call. (P2, risk:high)
- **[#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) — Task: `cron update` silently discards changes to declarative jobs** (six columns affected). (P1)

**New (P2, medium/high):**
- **[#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) — Cron-triggered SOPs cannot do network work**: no HTTP capability; shell.exec/notify.channel are unsatisfiable placeholders — docs promise watch-loops that are impossible. (P2, risk:high)
- **[#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) — `finish_run` accepts a failure reason and discards it** — failed runs record no cause. (P2, risk:medium)
- **[#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) — Long-lived ephemeral daemon spins 140–177% CPU with repeated database handles** — resource leak over 17h. (unlabeled)
- **[#9800](https://github.com/zeroclaw-labs/zeroclaw/issues/9800) — SIGTERM leaves ZeroCode TUI in raw/mouse-tracking mode** — terminal corruption requiring external reset. (unlabeled)

**Fixed/closed today:** #8950 (Telegram command cap), #8615 (think-tag stripping), #9763 (flaky 1Password test), #9657 (protected-literal false positive), #7947 (confused-deputy gating), #1 (XOR secrets — critical).

## 6. Feature Requests & Roadmap Signals

Strong signals from RFCs and PRs for the upcoming 0.9.0:

- **[A2A outbound (A2ATool) — #9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)** — Likely in 0.9.0; complements shipped A2A server. High community demand for proactive inter-agent calls.
- **[Per-model capability & context-window config — #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)** — P1 RFC; misreporting vision/context window is a live pain point. Likely in 0.9.0.
- **[Context compaction anchored to model window ratio — PR #9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** — Large PR (size:XL) by a principal contributor; adds `context_compact_ratio` setting. Awaiting author action.
- **[Stored OAuth profiles for Anthropic — PR #9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)** — Size:XL; explicit `auth_mode = "oauth"`. Near-ready.
- **[PowerShell as native Windows shell — PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)** — Size:XL; high-value for Windows users. In review.
- **[Forbidden-path glob patterns — PR #9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776)** — New security hardening (glob/exact/directory-prefix/basename categories). Fresh, fast-moving.
- **[WebSocket keepalive for gateway — PR #9701](https://github.com/zeroclaw-labs/zeroclaw/pull/9701)** — Small, shippable.
- **RFC: Streamline RFC process itself — #9496** — the community is voted down by its own process; expect process-simplification to ship soon.

## 7. User Feedback Summary

Pain points surfacing clearly:

- **SOP subsystem is half-baked**: multiple silent failures (#9779, #9786, #9783, #9784) and impossible documented promises (#9780 — watch-loops can't do network). Users report "hard-to-diagnose" failures where steps "complete as prose refusals" (PR #9798).
- **Configuration migration fragility**: #9246 (ZeroCode ownership migration) and #9779 (sops_dir default) both indicate that upgrades silently drop or disable functionality.
- **CLI/docs mismatch**: #9672 (three broken `cron add` examples), #9786 (validate lies) — users following docs get errors, not jobs.
- **Resource leaks**: #9799 (170% CPU daemon) affects long-running deployments.
- **Security consciousness is high**: users are filing S0/S1-class bugs and responding quickly; #1 (XOR secrets) was finally closed after 6 months.
- **Satisfaction markers**: large PRs by "principal contributor"/"distinguished"/"trusted" contributors (10+ in-flight) indicate a healthy, rewarded contributor base. Feature requests closed within weeks (#9172, #8950, #8615) show maintainer responsiveness.

## 8. Backlog Watch

Long-running items needing maintainer/author attention:

- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes & Label Cleanup (rev. 24, 19 comments)** — Deferred ratification since May; bloat risks making it unratifiable. Needs a decision.
- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue tracker (11 comments)** — Meta-tracker; if it itself stalls, it signals systemic queue blockage.
- **[#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — RFC: Provenance/conversation binding for internal agent turns (rev. 2, 10 comments)** — Open since May; P2 but high-risk. Still needs maintainer review.
- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — v0.9.0 auth/security/gateway tracker** — Active coordination surface; check for blocked items.
- **[#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) — fix(cli): detect installed AppImage (needs-author-action, size:L)** — Open since July 23; author needs to rebase/respond.
- **[#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) — fix(tools/mcp): centralize deferred-MCP access policy (principal contributor, needs-author-action, risk:high)** — Open since June 29; security-relevant, blocked on author.
- **[#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) — fix(telegram): batch media group attachments (needs-author-action, size:XL)** — Size:XL may be causing the stall; consider splitting.
- **[#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — feat(matrix): single-message progress drafts (needs-author-action, size:XL)** — Open since June 28.

**Pattern:** 12+ PRs are blocked on `needs-author-action`. Maintainer review is not the bottleneck — contributor follow-through is. If you're a maintainer, consider a "stale-PR sweep" to either merge or close-and-encourage-reopen.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*