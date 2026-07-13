# OpenClaw Ecosystem Digest 2026-07-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-13 02:57 UTC

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

# OpenClaw Project Digest — 2026-07-13

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, signaling a major development push. The project released **v2026.7.1-beta.6** today, adding several new model providers and making GPT-5.6 the default. However, the project is grappling with multiple **P0/P1 stability regressions**, including a critical memory leak that can grow RSS from 350MB to 15.5GB (Issue #91588), and a blocker-level bug where all tool results return the literal string "(see attached image)" instead of actual output (Issue #104721). Maintainer **steipete** is heavily active, submitting multiple UI refactoring PRs across macOS, iOS, and web. The community is most engaged with a long-standing request for Linux/Windows desktop apps (Issue #75, 110 comments, 81 👍) and several security-themed feature requests.

## 2. Releases

### v2026.7.1-beta.6 — Released today

**New models and providers added:**
- **Featherless** provider support
- **Claude Sonnet 5** and **Mythos 5** models
- **Meta Muse Spark 1.1**
- **ClawRouter** — new routing capability

**Default model changes:**
- GPT-5.6 is now the default for new setups
- `/think ultra` mode added for Sol and Terra, plus `max` for Luna
- Honors Z.AI `max` configuration
- Model availability refreshes automatically after OAuth authentication

**Breaking changes / migration notes:** None explicitly documented in the release highlights, but users on earlier betas should verify their model configurations, as the default model change to GPT-5.6 may affect existing agent behavior.

## 3. Project Progress

Today saw substantial merged/closed activity across multiple domains:

- **GPU-accelerated UI fixes:** PR #97145 (closed) fixes approval policy display for shell redirection commands — users no longer see incorrect "Allow Always unavailable" messages.
- **State integrity:** PR #93884 (closed) documents the gateway host agent runtime boundary, confirming that host-level Codex on the gateway was disabled as a temporary measure.
- **Plugin ecosystem:** PR #103778 (closed) fixes a critical bug where failed plugin reloads left metadata describing a plugin set that never loaded — the metadata is now properly rolled back.
- **ACP compatibility:** PR #93465 (closed) addresses `spawn EINVAL` errors for the embedded ACPX runtime on Windows, though the fix targets error visibility rather than the root cause.
- **Browser automation:** PR #38844 (closed) resolves flaky file upload flows that misreported stale-click failures as browser control timeouts.
- **Infrastructure:** PR #105876 refactors plugin path safety facade (remove unused aliases); PR #105789 consolidates retry scheduling across core infrastructure and memory host SDK, fixing fractional server hints being scheduled below the requested floor.

**Active PRs of note (open, with maintainer attention):**
- PR #105906: Folds sidebar "More" section into a popup menu (web UI)
- PR #105902: Hosts macOS dashboard titlebar buttons in the web UI
- PR #105904: Replaces chat settings popover with composer view menu
- PR #105850: Adds docs, help, Discord, and changelog links to agent chip menu

## 4. Community Hot Topics

### 🔥 Most Active Discussion
**Issue #75: [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**
- 110 comments, 81 👍 (requested 2026-01-01, still open)
- **Analysis:** This is the clear #1 community request — macOS, iOS, and Android have apps, but Linux and Windows users are left out. The 81 upvotes and sustained discussion (over 6 months) indicate strong demand. Despite the "help wanted" and "needs product decision" labels, there is no PR or committed roadmap. This is a significant gap for a project that positions itself as cross-platform.

### Other Highly-Engaged Items
- **Issue #99241**: Tool outputs rendered as unreadable image attachments in long-running sessions (22 comments, 2 👍) — affects professional users relying on ANSI-heavy workflows.
- **Issue #91588**: Critical memory leak (350MB → 15.5GB RSS) causing repeated OOM crashes (19 comments) — P0, "platinum hermit" severity.
- **Issue #7707**: Memory trust tagging by source to prevent poisoning attacks (16 comments) — reflects growing security consciousness in the community.
- **Issue #10659**: Masked secrets to prevent agents from seeing raw API keys (13 comments, 4 👍) — security-focused feature request that addresses prompt injection risks.

## 5. Bugs & Stability

### 🔴 Critical (P0)
1. **[#104721](https://github.com/openclaw/openclaw/issues/104721)** — **"All tool results return '(see attached image)' literal string instead of actual output"** (new, 12 comments)
   - **Impact:** Complete breakage — file reads return placeholder text, not actual content
   - **Fix PR:** None identified, needs live repro
   - **Severity:** Release blocker for stable

2. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — **Gateway memory leak: RSS grows 350MB → 15.5GB over 2-3 days**
   - **Impact:** Repeated OOM crashes, `launchd-handoff` restart cycles
   - **Fix PR:** None identified, needs product decision
   - **Note:** Open since 2026-06-09 — this has been unresolved for over a month

3. **[#101290](https://github.com/openclaw/openclaw/issues/101290)** — **CLI startup preflight corrupts live state DB**
   - **Impact:** SQLite corruption ("database disk image is malformed")
   - **Fix PR:** None, shape is "clear" (no new fix PR expected)
   - **Note:** Vanilla SQLite control does NOT reproduce — OpenClaw-specific issue

### 🟠 High (P1)
- **#102020**: Second message in a session fails with "reply session initialization conflicted" (11 comments)
- **#87744**: Codex-backed Telegram turns time out repeatedly (12 comments)
- **#91009**: Codex PreToolUse hook spawns CPU-bound processes, stalls gateway RPC (10 comments)
- **#39476**: A2A sessions_send causes duplicate messages (10 comments)
- **#53408**: Write/exec tool parameters silently dropped after long conversations (8 comments)
- **#78562**: Repeated tool-loop context overflows cause successive auto-compactions (6 comments)
- **#89228**: Regression: exec intermittently unavailable in isolated cron sessions (5 comments)
- **#94939**: 6.x state migration leaves empty SQLite, breaks MS Teams proactive sends (5 comments)

### 🟡 Moderate (P2-P3)
- **#71326**: Cross-exec stale file reads (vnode/dentry cache race) — regression in 2026.4.20
- **#71689**: Task registry restore fails on malformed SQLite images
- **#102400**: Reply-session init conflict silently dropped on Slack/webchat/heartbeat (not retried)

## 6. Feature Requests & Roadmap Signals

### High Likelihood for Next Release
- **Masked secrets system** ([#10659](https://github.com/openclaw/openclaw/issues/10659)) — Security features are getting increased attention; the "needs security review" tag is active, and there's a linked PR. *Prediction: v2026.7.2 or v2026.8.x*
- **Memory trust tagging by source** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) — Complements masked secrets to prevent prompt injection. *Prediction: v2026.8.x*
- **Filesystem sandboxing config** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) — User attempted to implement but existing config doesn't work. *Prediction: v2026.8.x*
- **Session:end internal hook event** ([#10142](https://github.com/openclaw/openclaw/issues/10142)) — Needed for workflow orchestration integration (Temporal). *Prediction: v2026.7.2*

### Longer-Term Signals
- **Dynamic model discovery** ([#10687](https://github.com/openclaw/openclaw/issues/10687)) — OpenRouter and fast-moving catalogs require dynamic model listing. 9 comments, maintainer tag. This touches core architecture.
- **Provider fallback by failure class** ([#47910](https://github.com/openclaw/openclaw/issues/47910)) — Quarantine auth-broken providers instead of retrying all failures equally. 8 comments, maintainer attention.
- **Streaming TTS pipeline for voice calls** ([#8355](https://github.com/openclaw/openclaw/issues/8355)) — Sentence-level LLM→TTS→audio pipeline for Twilio calls. 4 comments but "channel: voice-call" tag suggests planned scope.
- **Linux/Windows desktop apps** ([#75](https://github.com/openclaw/openclaw/issues/75)) — No movement despite being the most-upvoted issue. Possible this is blocked by resource constraints.

## 7. User Feedback Summary

### Satisfaction Points
- The **new models and providers** in v2026.7.1-beta.6 are being met positively — Featherless, Claude Sonnet 5, and Mythos 5 are well-regarded additions.
- **GPT-5.6 as default** aligns with community preference for the latest frontier models.
- **ClawRouter** introduces routing flexibility that advanced users have requested.

### Pain Points & Dissatisfaction
1. **Stability crisis:** Multiple P0 regressions are creating trust issues. The "(see attached image)" bug (#104721) is a complete blocker for anyone relying on tool outputs. The memory leak (#91588) has been open for a month without a fix.
2. **Telegram reliability:** Multiple bugs (#87744, #102020, #102400) specifically target Telegram users — the most popular mobile channel appears most affected.
3. **SQLite corruption:** Two separate reports (#101290, #71689) of database corruption on macOS, with no clear root cause. This undermines confidence in state persistence.
4. **Cross-platform gap:** Linux and Windows users feel abandoned (Issue #75). macOS gets native app updates (PR #105814, #105902), but other platforms are silent.
5. **Feature requests without resolution:** Many enhancement issues (security tagging, sandboxing, dynamic models) have sat for months with "needs product decision" — users want committed roadmap visibility.

### Use Case Highlights
- **Professional automation:** Users running ANSI-heavy tool workflows (#99241) and long-running sessions (#53408, #78562) are hitting reliability walls.
- **Security-conscious deployments:** Multiple requests for credential protection (#10659), trust tagging (#7707), and filesystem sandboxing (#7722) suggest enterprise adoption attempts.
- **Multi-channel operations:** Bugs affecting Telegram, Slack, MS Teams, and webchat (#102400, #94939, #87744) indicate users are deploying across all channels simultaneously.

## 8. Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Age | Comments | Status |
|-------|-----|----------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows apps | 194 days | 110 | No assignee, "needs product decision" |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) — Dynamic model discovery | 157 days | 9 | Maintainer tag, "needs product decision" |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked secrets | 157 days | 13 | Has linked PR, "needs security review" |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory trust tagging | 161 days | 16 | "needs product decision", "needs security review" |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) — Filesystem sandboxing | 161 days | 9 | "needs product decision" |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) — Denylist for exec-approvals | 162 days | 7 | 7 👍, "needs product decision" |

### PRs Awaiting Maintainer Review
| PR | Age | Size | Risk |
|----|-----|------|------|
| [#103534](https://github.com/openclaw/openclaw/pull/103534) — Enforce plugin-ownership in sessions.patch | 3 days | M | Security-boundary, session-state |
| [#105365](https://github.com/openclaw/openclaw/pull/105365) — Require explicit final source delivery for Codex | 1 day | L | Compatibility, message-delivery |
| [#104632](https://github.com/openclaw/openclaw/pull/104632) — Reconcile timed-out gateway message actions | 2 days | M | Message-delivery |
| [#104362](https://github.com/openclaw/openclaw/pull/104362) — C1 control-character coverage across sinks | 2 days | M | Compatibility |

### Watch Item
- **#91588** (memory leak) has been open since June 9 with no fix PR. At P0 severity with 19 comments, this is the single most impactful unresolved stability issue. The gateway process is the entry point for all agent activity — every user on long-running deployments is affected.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

## 2026-07-13

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem remains **highly fragmented but intensely active**, with projects diverging on architecture (monolithic vs. plugin-based), target platforms (desktop-first vs. channel-agnostic), and maturity (stable reference implementations vs. experimental forks). The majority of projects are in a **post-release stabilization phase**, grappling with the complexity of maintaining multi-provider, multi-channel agent systems — context compression, memory management, and cross-platform UI consistency are universal pain points. Community engagement is strong across the board, with **CoPaw, OpenClaw, and IronClaw** experiencing the highest bug report volumes, reflecting both their larger user bases and the growing pains of rapid feature expansion. A notable trend is the **concentrated investment in security/trust features** (masked secrets, audit trails, sandboxing) across most projects, signaling enterprise adoption pressure. The ecosystem remains heavily macOS-centric for desktop clients, with **Linux and Windows users consistently underserved** — a competitive gap that could define platform leadership.

---

## 2. Activity Comparison

| Project | Open Issues | Open PRs | 24h Issue Updates | 24h PR Updates | Recent Release | Health Score |
|---------|------------|----------|-------------------|----------------|----------------|--------------|
| **OpenClaw** | 500+ | 500+ | 500 | 500 | v2026.7.1-beta.6 (today) | 🔴 **Critical** — P0 bugs, 1-month memory leak unresolved |
| **Hermes Agent** | ~50 | ~48 | 50 | 50 | v0.13.0 (recent) | 🟡 **Cautious** — High bug-fix velocity but PR review bottleneck |
| **CoPaw** | 26 | 14 | 29 | 19 | v2.0.0 (recent) | 🔴 **Crisis** — Multiple post-release regressions, context compression broken |
| **IronClaw** | ~10 | ~28 | 10 | 50 | None (CI focused) | 🟡 **Stabilizing** — 70% CI failure rate being addressed |
| **NanoBot** | ~4 | ~8 | 4 | 10 | None (pre-release) | 🟢 **Healthy** — Fast triage, targeted fix PRs |
| **NanoClaw** | ~3 | ~11 | 3 | 14 | None (pre-release) | 🟢 **Healthy** — Active feature work with fix coverage |
| **NullClaw** | ~0 | 4 | 0 | 8 | None | 🟢 **Stable** — Low bug volume, incremental improvements |
| **LobsterAI** | 1 | 7 | 1 | 14 | None | 🟢 **Healthy** — Feature-focused with fix PRs open |
| **PicoClaw** | 5 | 2 | 5 | 2 | v0.2.9 (stable) | 🟡 **Stable but slow** — Maintainer bandwidth tight |
| **ZeroClaw** | 22 | 47 | ~6 | ~20 | v0.8.2 (recent) | 🟡 **Feature-heavy** — 3 p1 bugs, 87-day-old context budget issue |
| **TinyClaw** | — | — | 0 | 0 | — | ⚪ **Inactive** — No activity |
| **Moltis** | — | — | 0 | 0 | — | ⚪ **Inactive** — No activity |
| **ZeptoClaw** | — | — | 0 | 0 | — | ⚪ **Inactive** — No activity |

**Health Score Key:** 🔴 Critical issues / 🔵 Crisis / 🟡 Cautious or Stabilizing / 🟢 Healthy

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of community engagement** — 500+ issues and PRs updated daily dwarfs every other project. The most-upvoted feature request (#75, 81 👍) has 110 comments, indicating a user base an order of magnitude larger than any peer.
- **Release velocity** — Multiple beta releases per month with new model providers (Featherless, Claude Sonnet 5, Mythos 5) and routing capabilities (ClawRouter) demonstrate industry-leading integration speed.
- **Default model leadership** — Shipping GPT-5.6 as default positions OpenClaw as the first project to adopt the latest frontier models out-of-the-box.
- **Cross-platform UI investment** — Active PRs for macOS, iOS, and web UI (dashboard titlebar buttons, sidebar menus) show a commitment to native-feel interfaces that peers lack.

**Technical Approach Differences:**
- **Gateway architecture** — OpenClaw's gateway process design (with documented host agent runtime boundary in PR #93884) is more sophisticated than NanoBot's or PicoClaw's simpler daemon models.
- **Plugin ecosystem maturity** — The plugin reload metadata rollback system (PR #103778) and permission-boundary enforcement (#103534) show deeper security investment than CoPaw's sandbox implementation.
- **GPU acceleration** — OpenClaw is the only project with explicit GPU-accelerated UI fixes (PR #97145), a differentiator for local model users.

**Key Vulnerabilities Relative to Peers:**
- **Memory leak (#91588)** — Unresolved for 1+ month at P0 severity. No peer project has a comparable stability regression of this duration.
- **Cross-platform gap** — Linux/Windows users are explicitly underserved (#75) while NullClaw and IronClaw build primarily for Linux. This is OpenClaw's single largest competitive exposure.
- **Bug-to-fix ratio** — Open issue count (500+) vastly exceeds closed items, whereas NanoBot and LobsterAI demonstrate near-parity through fast triage.

---

## 4. Shared Technical Focus Areas

| Focus Area | Affected Projects | Specific Requirements |
|------------|------------------|----------------------|
| **Memory/Context Management** | OpenClaw, CoPaw, ZeroClaw, IronClaw | Context budget overflow (#5808), tool-call/tool-result pairing breaks (#5986), memory leak to OOM (#91588, #8642), auto-compaction regressions |
| **Provider Reliability** | All active projects | API endpoint changes (Kimi 404 #21297), reasoning-effort rejection (#9016), model routing to wrong endpoints (#63506), prompt caching optimization (#4867) |
| **Security & Trust** | OpenClaw, ZeroClaw, IronClaw, NanoBot | Masked secrets (#10659, 13 comments), memory trust tagging (#7707, 16 comments), filesystem sandboxing (#7722), audit trails (PR #8893), CLI secret manager (#2601) |
| **Multi-Channel Parity** | OpenClaw, CoPaw, NullClaw, PicoClaw | Telegram reliability (3+ bugs across projects), Matrix sync death (#3203), WeChat/DingTalk/Feishu session loading failures, Discord socket recovery (#953) |
| **Cross-Platform Desktop** | OpenClaw (macOS), LobsterAI (Windows), NullClaw (Linux), IronClaw (Linux) | Native title bars, Web installers, Linux/Windows apps as #1 feature request (#75) |
| **Observability** | OpenClaw, IronClaw, ZeroClaw | Turn-level tracing (#6641), per-run token cost (#5976), OTel integration, audit trail gating |
| **UI/UX Governance** | OpenClaw, CoPaw, ZeroClaw | "Allow Always" approval UX confusion, shell execution re-approval fatigue, governance auto-trigger noise (#5994) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | CoPaw | NanoBot | ZeroClaw | LobsterAI | NullClaw | PicoClaw |
|-----------|----------|--------------|-------|---------|----------|-----------|----------|----------|
| **Primary Platform** | macOS/iOS | Multi-platform | Desktop + Channels | Channels (WebUI) | Multi-platform | Windows Desktop | Linux (CLI) | Channels |
| **Target User** | General consumer | Power user / Developer | Enterprise / Teams | Developer / SMB | Developer / Ops | Consumer (Windows) | CLI / Ops | Multi-platform |
| **Architecture** | Gateway + Agent | Monolithic (multi-process) | Agent + Channel adapters | Daemon + WebUI | Microservices (SOP) | Desktop app + CoWork | Zig/CLI | Lightweight daemon |
| **Model Focus** | Frontier (GPT-5.6 default) | Multi-provider + Codex | Multi-provider (Qwen default) | Ollama / Local first | Multi-provider | Multi-provider | Minimal | Multi-provider |
| **Channel Strategy** | All major (Telegram, Slack, Teams) | All major (focus on Telegram) | **China-first** (WeChat, DingTalk, Feishu) | Discord + WebUI | Slack + WebUI | Desktop-only (Windows) | Discord, Teams, Cron | Matrix, Telegram |
| **Security Maturity** | Plugin permissions, gateway boundary | Plugin architecture, secrets | Governance/sandbox (broken) | Workspace access control | SOP controls, audit trails | Minimal | Minimal | Minimal |
| **Release Cadence** | Weekly betas | Monthly stable | v2.0.0 crisis | Pre-release | v0.8.x milestones | Incremental | Incremental | Monthly stable |
| **Community Language** | English | English | **Chinese** | English | English | **Chinese** | English | English |

**Key Strategic Observations:**

- **CoPaw and LobsterAI serve the Chinese market** — Their focus on DingTalk, Feishu, WeChat integration and Chinese-language issues (GBK encoding, Chinese locale bugs) makes them non-competitive with Western-focused projects but dominant in their region.
- **ZeroClaw has the most ambitious architecture** — SOP (Standard Operating Procedure) control plane, microservices-style MCP registries, and full OTel observability place it ahead of peers in engineering sophistication, but at the cost of a 87-day-old default configuration bug (#5808) that blocks new users.
- **NullClaw is the polar opposite** — A minimal, CLI-focused Zig implementation with no GUI aspirations. Its stability (0 issue updates today) comes from scope discipline; it does less but does it reliably.
- **NanoBot's Ollama/local LLM focus** (#4867) differentiates it from the GPT-centric OpenClaw and Hermes Agent. It serves the privacy-conscious developer segment.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Activity, High Bug Volume, Weekend+ Releases)

| Project | Momentum Indicators | Risk Factors |
|---------|---------------------|--------------|
| **OpenClaw** | 500+ daily updates, beta releases, new model providers weekly, **largest community** | P0 memory leak unresolved 1 month; cross-platform gap is structural |
| **CoPaw** | 29 issues + 19 PRs daily, multiple fix PRs converging on same bugs, first-time contributors active | v2.0.0 post-release crisis; Windows sandbox unusable; context compression broken |
| **IronClaw** | 50 PRs updated daily, 22 merged, CI hardening sprint, large extension runtime refactor | 70% CI failure rate; major dependency bump with breaking changes in queue |
| **ZeroClaw** | 47 open PRs, 5 tracker issues for v0.8.3, SOP milestone advancing, memory subsystem overhaul | Three p1 bugs with no fix PRs; oldest at 87 days; PR review bottleneck |

### Tier 2: Stabilizing (Moderate Activity, Bug-Fix Focused)

| Project | Momentum Indicators | Risk Factors |
|---------|---------------------|--------------|
| **Hermes Agent** | 50 issues/PRs daily, P2 bugs being closed with "implemented-on-main", strong maintainer response | PR review bottleneck (48 open); post-v0.13.0 regressions; multi-agent request unaddressed |
| **NanoClaw** | Feature PRs (guard seam, approval CLI, scheduled tasks) approaching merge, token cap fix already merged | Re-wrap nudge duplicates (#3026) still open; false positive quota alerts |
| **LobsterAI** | Windows UI polish (title bar, installer), Cowork fixes, notification upgrades | Multi-agent USER.md bug (#2293) unanswered 6 days; **critical for multi-agent users** |

### Tier 3: Low Activity / Stable

| Project | Momentum Indicators | Risk Factors |
|---------|---------------------|--------------|
| **NanoBot** | Fast triage (bugs filed → fix PRs same day), healthiest bug-to-fix ratio | Pre-release stage; small feature set; limited channel support |
| **NullClaw** | 4 PRs updated, all ages 7-31 days, maintainer engagement on all | CRITICAL use-after-free cron bug (#954) open 30 days; Teams 403 bug open 27 days |
| **PicoClaw** | 5 issues, 2 PRs, moderate maintainer response | Matrix sync death (#3203) unaddressed; Android broken (#3182) |

### Tier 4: Inactive

| Project | Status |
|---------|--------|
| **TinyClaw** | No activity |
| **Moltis** | No activity |
| **ZeptoClaw** | No activity |

---

## 7. Trend Signals

### 1. The "Post-Release Hangover" is Universal
Every project that shipped a recent major release (OpenClaw, CoPaw, Hermes Agent, ZeroClaw) is experiencing a surge of regression bugs, particularly around context compression and multi-channel parity. The core lesson: **agent state management across sessions, channels, and tool calls is the hardest engineering problem in this ecosystem.** No project has solved it robustly.

### 2. Enterprise Security Requirements are Driving Architecture
The simultaneous emergence of masked secrets (OpenClaw #10659), memory trust tagging (#7707), filesystem sandboxing (#7722), audit trails (ZeroClaw PR #8893, NanoClaw PR #2987), and CLI secret managers (IronClaw #2601) across **five independent projects** signals that enterprise procurement requirements are filtering down to open-source maintainers. This is the strongest trend for AI agent developers: **invest in security/trust as a competitive differentiator.**

### 3. Local LLM Optimization is a Growing Pain Point
NanoBot's prompt caching issue (#4867) — describing Ollama as "totally unusable" with 60-second per-turn delays — reflects a broader ecosystem problem. Only IronClaw (with its GLM-5.2 hang fix) is explicitly addressing local inference reliability. Agents that optimize for local models (NanoBot, NullClaw) will capture the privacy-conscious segment.

### 4. Cross-Platform Desktop is the Largest Unserved Market
OpenClaw's #75 (Linux/Windows apps) has **110 comments, 81 upvotes, and 0 movement**. CoPaw's Windows sandbox is broken. LobsterAI focuses only on Windows. NullClaw is CLI-only. **No project has a working, stable Linux desktop client.** For developers building agents that need to run on enterprise Linux desktops or Windows, this is a critical gap.

### 5. China vs. Western Ecosystems are Diverging
CoPaw and LobsterAI serve a fundamentally different user base — WeChat/DingTalk/Feishu integration, Chinese-language error handling, Chinese locale bugs. Projects like Hermes Agent and OpenClaw have zero Chinese channel support. This bifurcation means **cross-region deployment requires maintaining two separate stacks.**

### 6. Governance UX is Broken Everywhere
OpenClaw's "Allow Always unavailable" (PR #97145), CoPaw's re-approval fatigue (#5982, #5994), and NanoClaw's approval CLI (PR #3029) all tackle the same problem: **current permission systems annoy users without providing real security.** The winning approach will be context-aware governance (allow-once-per-session, whitelist-based, configurable per-skill).

### Value for AI Agent Developers

- **If you need reliability today**, choose NullClaw (stable, no GUI) or NanoBot (fast bug fixes, local-first).
- **If you need maximum model access and community support**, OpenClaw is the default, but budget time for stability work.
- **If you target Chinese users**, LobsterAI (Windows) or CoPaw (multi-platform) are the only viable options.
- **If you need enterprise security**, wait 2-3 months — the current security features (secrets masking, audit trails, sandboxing) are all in PRs that haven't merged yet. ZeroClaw and IronClaw are furthest ahead.
- **If you need Linux desktop**, you are currently **not served** by any active project. Consider contributing to OpenClaw's #75 or building on NullClaw.

The ecosystem's biggest risk is **fragmentation without consolidation** — six projects solving the same problems (context compression, multi-channel, provider abstraction) with no shared infrastructure. The next 12 months will likely see either a dominant reference implementation emerge or a convergence layer (e.g., standardized agent protocol) rise to reduce duplication.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-13

## 1. Today's Overview

The NanoBot project shows high activity with 10 pull requests updated and 4 issues moving in the last 24 hours, signaling a healthy development cadence. Three PRs were merged or closed today, including a priority P1 security fix for WebUI remote workspace access. Two new bugs were filed regarding Dream session management, both already receiving targeted fix PRs from core contributors. No new releases were published, but the project is clearly in an active bug-fix and feature-stabilization phase with several P1-labeled PRs in flight.

## 2. Releases

No new releases were published in the last 24 hours. The project remains at its previous version.

## 3. Project Progress

Three pull requests were merged or closed today:

- **[PR #4898](https://github.com/HKUDS/nanobot/pull/4898) (closed: merge)** — A merge commit by Theembers, likely integrating maintenance changes.
- **[PR #4892](https://github.com/HKUDS/nanobot/pull/4892) (closed: merged)** — `fix(webui): allow remote workspace access reduction` by Re-bin. This P1 security fix restricts remote WebUI sessions to only reduce Full Access to Default Permission, preventing unauthorized privilege escalation. It compares remote requests against the current session scope or gateway default for new chats, keeping project changes and access escalation limited to localhost/native clients.
- **[PR #4879](https://github.com/HKUDS/nanobot/pull/4879) (closed: closed)** — `feat(long_task): gate sustained-goal behind opt-in flag (default off)` by franciscomaestre. This feature PR was closed (not merged), indicating it was likely withdrawn or superseded. The sustained-goal feature caused agents to block user interaction during long-running tasks.

## 4. Community Hot Topics

The most active discussion item in the last 24 hours:

- **[Issue #4867](https://github.com/HKUDS/nanobot/pull/4867) (CLOSED)** — *Preserve exact prompt prefix to enable caching in Ollama and others* — 4 comments. The author reports that Ollama adds **60 seconds per turn** due to prompt prefix changes, calling the behavior "totally unusable." This issue received the most discussion and was closed, suggesting either a fix was applied or a workaround was accepted. The underlying need is for prompt caching optimization in local LLM deployments.

Other notable activity:
- **[Issue #4897](https://github.com/HKUDS/nanobot/pull/4897) (OPEN)** — Discord bot integration bug — 1 comment, filed yesterday, already has a fix PR (#4899).
- **[PR #4866](https://github.com/HKUDS/nanobot/pull/4866) (OPEN)** — *Bind model presets to sessions* — This P1 feature PR has been active for 3 days with ongoing discussion. It would make model selection persistent per-session, a significant UX improvement.

## 5. Bugs & Stability

Three bugs were reported in the last 24 hours, ranked by severity:

**P1 (Critical)**
- **[Issue #4897](https://github.com/HKUDS/nanobot/pull/4897)** — *Discord bot integration issue*: Bot shows online but receives no messages. **Fix PR exists:** [#4899](https://github.com/HKUDS/nanobot/pull/4899) by chengyongru routes unauthorized DMs to pairing flow.

**P2 (Moderate)**
- **[Issue #4894](https://github.com/HKUDS/nanobot/pull/4894)** — *prune_dream_sessions() fails to prune base64-encoded Dream session files* — After a recent commit switched to encoded filenames, the pruning function still uses legacy glob patterns. **Fix PR exists:** [#4900](https://github.com/HKUDS/nanobot/pull/4900) by chengyongru.
- **[Issue #4893](https://github.com/HKUDS/nanobot/pull/4893)** — */dream-log and /dream-restore show non-Dream commits* — Git operations aren't filtered to Dream-specific commits, confusing users with unrelated workspace commits. No fix PR yet.

**Regression**
- **[PR #4896](https://github.com/HKUDS/nanobot/pull/4896) (OPEN, P1 fix)** — *Heartbeat prompt rewrite*: After `v0.2.1` refactored heartbeat from a service to a cron job, agents only list tasks without executing them. The prompt wasn't updated for the single-stage system.

## 6. Feature Requests & Roadmap Signals

- **[PR #4866](https://github.com/HKUDS/nanobot/pull/4866)** — *Model preset binding to sessions*: This P1 feature persists model selection per session, making `/model` session-scoped. Likely for next release given its priority.
- **[PR #4855](https://github.com/HKUDS/nanobot/pull/4855)** — *WebUI guided setup flows*: Adds productized channel setup flows with validation, QR handoff, and Feishu assistant support. This is a significant UX improvement queued for review.
- **[Issue #4867](https://github.com/HKUDS/nanobot/pull/4867) (CLOSED)** — Prompt caching for Ollama: Though closed, this signals user demand for local LLM optimization. Expect caching improvements in future releases.

## 7. User Feedback Summary

**Pain Points:**
- Discord integration is currently broken for first-contact DMs (Issue #4897) — users are frustrated that the bot goes online but doesn't respond.
- Ollama users experience 60-second delays per turn due to missing prompt caching (Issue #4867), making local models "totally unusable" for some users.
- Dream session management has regressed — users cannot trust pruning or session restore commands to work correctly with encoded filenames (Issues #4894, #4893).
- Heartbeat agents are stuck listing tasks instead of executing them after the v0.2.1 refactor (PR #4896), impacting automation users.

**Satisfaction Signals:**
- The WebUI security fix (PR #4892) was quickly reviewed and merged, showing responsive maintainer attention to security concerns.
- Multiple bugs filed yesterday already have fix PRs, indicating a fast triage cycle.

## 8. Backlog Watch

- **[PR #4145](https://github.com/HKUDS/nanobot/pull/4145)** — *Weather Skill fix (resolve #3958)* — Open since June 1 (42 days), last updated July 12. This long-standing PR adds a Weather skill example with documentation and tests. Appears stalled; needs maintainer review to merge or close.

**No other issues or PRs appear to have been unanswered for an unusually long time**, suggesting the project is keeping up with community input effectively.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Based on the provided GitHub activity data for the Hermes Agent project (NousResearch/hermes-agent) as of 2026-07-13, here is the project digest.

---

## Hermes Agent Project Digest — 2026-07-13

### 1. Today's Overview
Hermes Agent is in a **high-activity stabilization phase** following the v0.13.0 release cycle. Today’s snapshot shows a significant surge in bug-fixing and stabilization activity, with **50 issues and 50 pull requests updated in the last 24 hours**. The project is actively closing issues (39 closed vs. 11 open) and merging/merging fixes, indicating strong maintainer engagement. The open PR count (48) suggests a healthy pipeline of features and patches awaiting review, but also a potential review bottleneck. No new releases are tagged today, but the volume of closed, high-priority (P2) bugs with "implemented-on-main" labels (e.g., #22986, #22949) suggests a maintenance release may be imminent.

### 2. Releases
**None.** No new releases were detected in the last 24 hours.

### 3. Project Progress
While the text mentions "PRs updated," the data shows **2 PRs were merged/closed** against a large field of open ones. Key features advanced (primarily through merged bug fixes and closed issues marked as "implemented-on-main"):
- **Persistent Specialized Subagents:** Issue #21303 (closed) suggests progress on allowing dedicated sub-agents with private skill lifecycles, a major architecture enhancement for self-improvement.
- **Provider & Platform Fixes:** The project is aggressively stabilizing its multi-provider support. Critical fixes landed for Kimi K2-6 (NVIDIA) reasoning display on Telegram (#22949), Nvidia base URL detection (#23158), and Codex API connection retry logic (#22986).
- **Core Reliability:** Fixes for dashboard WebSocket timeouts (#22864) and kanban worker deadlock cleanup (#22926) show a focus on production hardening.

### 4. Community Hot Topics
The most active discussion is around **multi-agent architecture and external secret management**.

- **Feature Request: Single-Daemon Multi-Agent (Issue #9514)** — **12 comments, 6 👍**. This is the most active issue. Users want to run multiple specialized agents (coding, assistant, CS) under one process with isolated workspaces and memory, instead of separate gateway processes. This reflects a deep need for **resource efficiency and unified management** without the complexity of managing multiple daemons.
    - [Link to Issue #9514](https://github.com/NousResearch/hermes-agent/issues/9514)

- **Feature Request: Infisical Vault Backend (Issue #22791)** — **7 comments, 13 👍**. This request for a new secrets backend (Infisical) has strong community support (13 thumbs up). It is part of a larger "external vaults" initiative (Phase 4), indicating user demand for diverse secret management integrations beyond HashiCorp Vault and AWD Secrets Manager.
    - [Link to Issue #22791](https://github.com/NousResearch/hermes-agent/issues/22791)

### 5. Bugs & Stability
Today’s data reveals a major push to squash regressions and edge-case crashes. **Severity is high**, with multiple P2 (High Priority) bugs closed with fixes.

- **High-Severity (P2) Regressions (Fixed):**
    - **Codex connection retry storm (#22986):** Post-v0.13.0, APIConnectionErrors increased 8x due to strict stream timeouts. **Fix implemented on main.**
    - **Kimi K2-6 reasoning text lost on Telegram (#22949):** A user-facing issue where model "thinking" output disappeared. **Fix implemented on main.**
    - **Dashboard `/chat` WebSocket deadlock (#22864):** PTY connections could hang, breaking the dashboard chat feature. **Fix implemented on main.**
    - **Kimi provider 404 errors (#21297):** Double `/v1` in API URL path causing total provider failure. **Fix implemented on main.**

- **High-Severity (P2) New/Open Bugs:**
    - **Qwen model fallback (Issue #63506):** A critical provider bug where Qwen models are routed to the wrong API endpoint (`/completions` vs `/messages`), causing failure and fallback to OpenRouter. **No fix PR linked yet.**
    - **OAuth token poisoning (Issue #22903):** Sibling Codex clients (VS Code, CLI) are stealing refresh tokens from Hermes, requiring manual re-auth. **Fix implemented on main.**

- **Platform-Specific Bugs:**
    - **Windows GBK encoding crash (Issue #63223):** Hermes heartbeat.py crashes on Chinese Windows due to ASCII/GBK encoding mismatch. **Open, risk-platform-windows label.**

### 6. Feature Requests & Roadmap Signals
Beyond the hot topics, several feature requests signal the project's strategic direction:

- **Claude Code/Team Authentication (Issue #32392):** Users want to use their existing Claude subscriptions/plans as a Hermes provider, not just raw Anthropic API keys. This could be a near-term target (P3) but opens a complex licensing/auth integration challenge.
- **Self-Improvement Ops Foundation (PR #23598):** A large open PR adds task receipts, structured logs, behavioral eval frameworks, and a dashboard. This is a **major roadmap signal** indicating the project is becoming serious about autonomous agent runtime observability and improvement cycles (self-improvement loop).
- **Multi-Agent Consolidation (#9514):** Likely a **Phase 5/6 roadmap item** given its complexity (P3), but is a high-demand feature that will define the next major architecture evolution.

### 7. User Feedback Summary
- **Pain Points (Stability):** Users are clearly frustrated with post-upgrade regressions—specifically connection retry storms, broken provider integrations (Kimi, Nvidia, Baidu), and OAuth token conflicts. One bug reporter described the retry rate as "~8x higher."
- **Pain Points (UX):** Low dashboard contrast (#23267), silent commands like `/sessions` (#23533), and unlabeled terminal shells (#23469) indicate growing dissatisfaction with user experience as the project scales.
- **Satisfaction (Showcases):** Despite bugs, users are building advanced tools on Hermes. The "紫鸾/CPRC" showcase (#22417) describes a sophisticated "Universe/Harmony/Coherence" evaluation engine built atop Hermes, suggesting strong satisfaction with the extensibility and plugin architecture for power users.
- **Desire for Efficiency:** The multi-agent request (#9514) explicitly calls out memory consumption as a problem, indicating that advanced users are hitting resource limits with current per-process architecture.

### 8. Backlog Watch
The following open issues and PRs require maintainer attention due to their age, impact, or lack of response:

- **Issue #9514: Single-Daemon Multi-Agent** — Remains open for nearly 3 months (since April). It has 12 comments and 6 thumbs-up but no official response or milestone from maintainers. This is the community's top feature ask.
- **Issue #17476: Consolidate time/timezone PRs** — Open since April 29, this refactoring task is stalling three inter-dependent PRs for ephemeral runtime context. The lack of movement on this could block other time-sensitive session improvements.
- **PR #23634: Safe binding key for skills** — Open for over 2 months without comments. This is a security-related feature (P3) but has "risk-broad" labels, suggesting it affects many subsystems. Needs review to unblock downstream work.
- **Issue #63223: Windows GBK encoding crash** — Open for 1 day, but targets Windows+Chinese locale users. Given the prevalence of Chinese contributors (shown in many bug reports), this platform-specific bug may have a high real-world impact that is not yet reflected in reaction counts.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for 2026-07-13.

---

## PicoClaw Project Digest – 2026-07-13

### 1. Today’s Overview
The PicoClaw project has been moderately active over the last 24 hours, with five issues updated and two pull requests (PRs) processed. Of the five issues, three remain open (two bug reports and one feature request), while two have been closed—including a stale PR and a resolved feature request. One new PR addressing a critical telemetry gap in Anthropic providers is now open. No new releases were published today, but the maintainers are showing steady engagement with open tickets.

### 2. Releases
**No new releases today.** The latest stable version remains at v0.2.9 (per referenced issue #3203). No changelogs, breaking changes, or migration notes are available for this date.

### 3. Project Progress
One PR was merged/closed in the last 24 hours:

- **PR #3190 (CLOSED)** – *fix(i18n): sync missing locale keys from en.json to bn-in and cs translations*  
  This PR synced missing translation keys (`chat.dropImagesActive`, `chat.disableCodeWrap`, `chat.enableCodeWrap`) for Bengali and Czech locales, ensuring fallback behavior no longer exposes raw English keys.  
  [GitHub: PR #3190](https://github.com/sipeed/picoclaw/pull/3190)

The other PR remains open and targets a provider-level improvement (see Section 5).

### 4. Community Hot Topics
The two most active topics by commentary and reactions:

- **Issue #3203 [OPEN]** – *Matrix sync loop has no reconnection logic — silent death after network/server disruption*  
  Author: weissfl | Comments: 2 | 👍: 1  
  This issue describes a critical reliability gap: the Matrix `/sync` long-poll loop dies silently on network disruption, and `systemd Restart=on-failure` does not catch it. Users are dependent on Matrix for cross-device sync and face unresponsive gateways without logging.  
  [GitHub: Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

- **Issue #3182 [OPEN]** – *[BUG] Android version – Can’t launch service / change path*  
  Author: Monessem | Comments: 3 | 👍: 0  
  A mobile user reports being unable to start the Android service or change the working path despite granting full permissions. This indicates a break in the Android adapter layer and is receiving active community attention.  
  [GitHub: Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)

### 5. Bugs & Stability
Three bug reports were updated today, ranked by severity:

- **HIGH – Issue #3203 [OPEN]** – Matrix sync loop has no reconnection logic (see Hot Topics). No fix PR exists yet. This is a silent failure that could break multi-device deployments.  
- **MEDIUM – Issue #3252 [OPEN]** – *splitKnownProviderModel strips provider prefix when model ID contains known provider alias*  
  A configuration parser bug that misrouts requests when a model ID contains a substring matching a provider alias (e.g., `openai/gpt-4o`). No fix PR yet.  
  [GitHub: Issue #3252](https://github.com/sipeed/picoclaw/issues/3252)  
- **LOW – Issue #3194 [CLOSED]** – *Received encrypted message but crypto is not enabled* – Resolved and closed. No further action needed.

A fix PR is open for a related provider monitoring issue:

- **PR #3251 [OPEN]** – *fix(providers): capture the prompt cache token usage in Anthropic providers*  
  The existing Anthropic implementations silently discard cache-hit/miss metrics, preventing operators from verifying prompt caching effectiveness. This PR adds proper capture of `cache_creation_input_tokens` and `cache_read_input_tokens`.  
  [GitHub: PR #3251](https://github.com/sipeed/picoclaw/pull/3251)

### 6. Feature Requests & Roadmap Signals
One feature request was closed today, and one new architectural request emerged:

- **Closed – Issue #3250 [CLOSED]** – *Add Docker Compose support for armhf devices (OneCloud/RPi Zero)*  
  Requested multi-architecture Docker support for ARMv7 devices. Since it was closed quickly, the fix was likely implemented immediately or already supported in a different config path.  
  [GitHub: Issue #3250](https://github.com/sipeed/picoclaw/issues/3250)

- **Implicit roadmap signal from PR #3251:** The prompt cache token capture feature suggests the project is maturing its cost-monitoring and observability capabilities. Operators want to optimize Claude usage costs, and this fix will likely be merged into the next minor release.

### 7. User Feedback Summary
- **Pain Points:**
  - **Android support**: A user (Issue #3182) reports that the Android service does not launch and path configuration is broken despite granting full permissions. This suggests a regression or missing feature in the Android build.
  - **Matrix reliability**: A user (Issue #3203) describes a silent failure of the Matrix sync loop after network disruptions—no reconnection, no restart. This undermines trust in the messaging bridge.
  - **Provider configuration confusion**: A parser bug (Issue #3252) causes unexpected behavior when model IDs overlap with provider aliases, confusing users who rely on complex multi-provider setups.

- **Satisfaction:**
  - No positive user feedback was reported in the last 24 hours.

### 8. Backlog Watch
The following items have not yet received maintainer attention and carry risk of becoming stale:

- **Issue #3182 [OPEN]** – *Android version – Can’t launch service* (created 2026-06-26, updated 2026-07-12)  
  No maintainer response in 3 days. High-impact for Android users.  
  [GitHub: Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)

- **Issue #3203 [OPEN]** – *Matrix sync loop silent death* (created 2026-07-02, updated 2026-07-12)  
  No fix PR or maintainer acknowledgment beyond basic triage. Risk of systemd operator frustration escalates.  
  [GitHub: Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-13

## Today's Overview
NanoClaw shows moderate activity today with 3 open issues and 14 pull requests updated in the last 24 hours, including 3 merged/closed PRs. The project is actively addressing several critical bugs affecting production reliability, particularly around token limits, duplicate message handling, and false positive rate-limit logging. Three closed PRs indicate steady progress on the container infrastructure and skill ecosystem. No new releases were published today, but multiple feature branches (guard seam, approval CLI verbs, scheduled tasks in templates) are approaching merge-ready status.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
Three pull requests were merged or closed today:

- **[#3030 — CLOSED] fix(deshi-line): Markdown を LINE 向けプレーンテキストに変換して配信** — Adds `formatLine()` to strip Markdown formatting before delivering messages to LINE, fixing literal markdown symbols appearing in chat output. Follows the same pattern as the existing WhatsApp formatter.

- **[#3024 — CLOSED] fix(container): raise the agent SDK's 32000 output-token cap to the model's real ceiling** — Directly addresses Issue #3023. Removes the undocumented 32K output token limit that was silently truncating all Claude agents' responses, fixing long-turn failures.

- **[#2952 — CLOSED] Skill/add opencode stack** — Merges an operational/container skill for integrating the OpenCode stack, expanding NanoClaw's skill ecosystem.

## Community Hot Topics
- **[Issue #3016 — Every rate_limit_event logged as a quota error](https://github.com/nanocoai/nanoclaw/issues/3016)** (1 comment, updated yesterday) — False positive error logging introduced by PR #2965; agent-runner incorrectly flags every rate limit event as a quota error even when the request was allowed. The reporter logged 82 instances in one week. This is causing significant log noise and potential alert fatigue for operators monitoring subscription installs.

- **[Issue #3026 — Re-wrap nudge duplicates replies](https://github.com/nanocoai/nanoclaw/issues/3026)** (0 comments, created yesterday) — The re-wrap nudge mechanism (#2414) re-runs the model when output has no `<message to="...">` blocks, but can't detect replies already sent via `send_message`, causing duplicate replies. A fix PR (#3028) is already open.

- **[Issue #3023 — Claude agents silently capped at 32000 output tokens](https://github.com/nanocoai/nanoclaw/issues/3023)** (0 comments, created yesterday) — Long turns fail silently with an API error about exceeding 32K output tokens. This is a regression from the Agent SDK's default cap. PR #3024 (already closed) and #3025 (still open) both address this.

## Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#3023](https://github.com/nanocoai/nanoclaw/issues/3023) | All Claude agents silently truncated at 32K output tokens; long turns fail mid-generation | PR #3024 merged, fix available |
| **High** | [#3026](https://github.com/nanocoai/nanoclaw/issues/3026) | Re-wrap nudge causes duplicate replies when agent already replied via `send_message` | PR #3028 open |
| **Medium** | [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) | Every rate limit event falsely logged as quota error, generating ~80 false alerts/week | No fix PR yet |
| **Medium** | [#3027](https://github.com/nanocoai/nanoclaw/issues/3027) | Container fails to spawn due to `/tmp/onecli-proxy-ca.pem` being root-owned directory | PR #3027 open |

A concerning pattern: issue #3026 (duplicate replies) and issue #3023 (token cap) both represent silent failure modes that users would only discover through missing or duplicated messages, not clear error signals.

## Feature Requests & Roadmap Signals

- **Operator approval resolution CLI** ([PR #3029](https://github.com/nanocoai/nanoclaw/pull/3029)) — Adds `approve`, `reject`, and `reject-with-reason` verbs to `ncl approvals`, enabling operators to unblock held actions from the CLI without a card-based workflow.

- **Scheduled tasks in templates** ([PR #3022](https://github.com/nanocoai/nanoclaw/pull/3022)) — Templates can now define recurring scheduled tasks in `tasks/*.md` with cron schedules and prompts, created paused on agent group stamping. Eliminates manual recreation of scheduling after agent creation.

- **Guard seam architecture** ([PR #2986](https://github.com/nanocoai/nanoclaw/pull/2986)) — A re-architecture PR introducing `guard()` as a single decision function for ALL privileged actions crossing container or channel boundaries (allow/hold/deny). This consolidates what was previously inline, voluntary gating into a centralized policy layer.

- **Audit log skill** ([PR #2987](https://github.com/nanocoai/nanoclaw/pull/2987)) — Opt-in local audit logging for the `ncl` CLI surface, providing operator accountability for privileged actions.

- **Per-group capability toggles** ([PR #2983](https://github.com/nanocoai/nanoclaw/pull/2983)) — Extends the mechanism that disables Claude Code's cron/scheduling to two more harness capabilities, with per-group configuration enabling lean defaults for new groups and grandfathering for existing ones.

**Prediction**: The token cap fix (#3023/3024/3025) and the guard seam (#2986) are most likely to ship in the next release. The guard seam represents a significant security hardening that several open PRs depend on.

## User Feedback Summary
- **High satisfaction** with recent subscription/rate-limit changes (#2965) appears to have introduced regressions — users are seeing dozens of false-positive quota errors per week (#3016).
- **Pain point**: CAD and OpenSCAD users are hitting the 32K token cap on long-turn agents (#3023), which is a silent production blocker for heavy generation tasks.
- **Pain point**: WhatsApp agent users reported intermittent silent non-responsiveness, traced to a container startup race condition where `/tmp/onecli-proxy-ca.pem` becomes a root-owned directory (#3027).
- **Pain point**: LINE channel users were receiving raw Markdown syntax in messages; now fixed by #3030.

## Backlog Watch
- **[PR #2982 — Tool allowlist drift guard](https://github.com/nanocoai/nanoclaw/pull/2982)** — Open since July 8, this PR fixes the agent runner's `TOOL_ALLOWLIST` which references five tools that don't exist on the pinned claude-code CLI (2.1.197), including `Task` (renamed `Agent` upstream). This is a correctness issue that could silently break tool routing.

- **[PR #3020 — Rescue undelivered unwrapped replies](https://github.com/nanocoai/nanoclaw/pull/3020)** — Open since July 11, this addresses silent reply drops when the model omits `<message to>` wrappers after long tool chains. Tied to Issues #2369, #2393, and #2404 — these have been open problems for several days and the fix has been in review.

- **Issue #3016 — False positive quota logging** — No fix PR exists yet despite being reported July 11. With ~80 false alerts per user per week, this has clear operational impact for subscription-installed deployments.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-13

## Today's Overview
Project activity is moderate today with 8 pull requests updated in the last 24 hours, split evenly between 4 open and 4 merged/closed PRs. No new issues were opened or updated, and no new releases were published. The development focus remains on infrastructure reliability, with merged fixes targeting memory safety (use-after-free), configuration parsing, and test stability. All open PRs are aging (7–31 days old) but have received recent review or maintainer attention, indicating active triage. Overall project health is stable with incremental improvements to core subsystems.

## Releases
None. No new releases were published.

## Project Progress
Four pull requests were merged/closed today:

- **#951 — fix(agent_runner): suppress stderr initialization logs on agent failure** (merged)  
  *Author: vernonstinebaker*  
  Prevents initialization logs (memory plans, MCP server registration, channel startup) from being posted to channels when agents fail, by only using stderr as fallback output on successful execution.

- **#950 — fix(gateway): move port probe before allocations to prevent test leak** (merged)  
  *Author: addadi*  
  Reorders gateway startup to perform the `AddressInUse` port probe before allocating `Config`, `RuntimeProviderBundle`, `SessionManager`, and other resources. Fixes resource leaks in test environments with real config files.

- **#949 — fix: make queue_mode configurable from config.json** (merged)  
  *Author: vernonstinebaker*  
  Adds `agent.default_queue_mode` config field to set initial queue mode (e.g., `"latest"`) for new sessions. Refactors `QueueMode` enum into `config_types.zig` as a single source of truth, parsed from `config.json` with fallback.

- **#948 — fix cron agent delivery attribution** (merged)  
  *Author: DonPrus*  
  Passes cron delivery origin metadata into spawned agent subprocesses so `agent_start` events are attributed to the correct delivery channel/account. Preserves delivery routing flags for `once-agent` in both local storage and gateway API payloads.

## Community Hot Topics
All pull requests have 0 comments and 0 👍 reactions, so no single item stands out as a "hot topic" by community engagement metrics. However, the following open PRs represent the longest-standing work and have received recent activity:

- **#958 — fix(teams): accept lowercase `serviceurl` JWT claim and raise JWKS fetch cap** *(open 27 days)*  
  *Author: dtarandek*  
  Addresses a real, blocking production bug for Microsoft Teams integration: Bot Framework tokens send `serviceurl` (lowercase) while the code expected `serviceUrl` (camelCase), causing 403 rejections. The 31-day age without merge suggests either maintainer bandwidth constraints or awaiting additional testing.  
  [PR #958](https://github.com/nullclaw/nullclaw/pull/958)

- **#954 — Fix: one-shot cron jobs silently fail to deliver messages (use-after-free)** *(open 30 days)*  
  *Author: vernonstinebaker*  
  A critical memory-safety fix that has been open for a month. The use-after-free on `OutboundMessage.channel` causes silent message drops for scheduled cron jobs. Its prolonged open status is somewhat concerning given a merged fix (#948) only partially addresses cron delivery.  
  [PR #954](https://github.com/nullclaw/nullclaw/pull/954)

## Bugs & Stability
No new bugs were reported today (0 issues updated). The following known bugs have fixes in open PRs:

- **Medium severity — Use-after-free in OutboundMessage.channel**  
  One-shot cron jobs silently fail to deliver messages; messages are lost with zero user-visible error.  
  *Fix:* PR #954 (open, 30 days)  
  [PR #954](https://github.com/nullclaw/nullclaw/pull/954)

- **Low severity — Microsoft Teams 403 on inbound messages**  
  Case mismatch in JWT claim key (`serviceurl` vs `serviceUrl`) causes all inbound Teams messages to be rejected.  
  *Fix:* PR #958 (open, 27 days)  
  [PR #958](https://github.com/nullclaw/nullclaw/pull/958)

- **Low severity — Discord gateway socket disconnection**  
  Closed gateway sockets are not recovered, causing persistent Discord integration failure.  
  *Fix:* PR #953 (open, 31 days)  
  [PR #953](https://github.com/nullclaw/nullclaw/pull/953)

## Feature Requests & Roadmap Signals
No new feature requests were filed today. Indicators of likely future direction:

- **Config-driven queue modes** — PR #949 merged today adds `agent.default_queue_mode` to config. This suggests the team is moving toward fully declarative agent behavior, likely to be extended with per-agent queue mode overrides in a future release.

- **Cron delivery reliability** — The merged PR #948 and still-open PR #954 together signal a focused effort to harden scheduled agent execution. Expect completions of #954 to land in the next patch release.

- **Discord gateway robustness** — PR #953's socket recovery logic, though still open, indicates ongoing investment in chat platform reliability. This may be a candidate for the next minor release alongside Teams fixes.

## User Feedback Summary
No user comments or feedback appeared in today's data (issues, PRs, or discussions all have 0 comments and 0 reactions). The fixes themselves encode user pain points:

- **Cron job silent failures** (PR #954) — users likely frustrated by scheduled agents appearing to execute with no visible output  
- **Teams integration broken** (PR #958) — Teams users unable to send messages to the bot at all  
- **Discord disconnections** (PR #953) — reliability pain for Discord-connected instances

## Backlog Watch
The following items show signs of aging and may require maintainer attention:

- **PR #953 — fix(discord): recover closed gateway sockets** *(open 31 days)*  
  One of the oldest open PRs. Has a complete implementation with regression tests and health-bound reconnect logic. May be blocked on code review bandwidth or pending additional changes.  
  [PR #953](https://github.com/nullclaw/nullclaw/pull/953)

- **PR #954 — Fix one-shot cron job use-after-free** *(open 30 days)*  
  Critical bug fix with known reproduction steps (GitHub issue #941). The prolonged open status is notable given that cron delivery attribution (#948) was merged today — these may be interdependent.  
  [PR #954](https://github.com/nullclaw/nullclaw/pull/954)

- **PR #956 — ci(deps): bump alpine from 3.23 to 3.24** *(open 28 days)*  
  A routine dependency update from Dependabot. Long-open automated PRs can indicate either CI pipeline backlog or a policy decision to defer base image updates.  
  [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

No issues or PRs have been abandoned entirely; all 4 open PRs received updates within the last 24 hours, suggesting active (if slow) maintainer engagement.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for **2026-07-13**.

---

## IronClaw Project Digest — 2026-07-13

### 1. Today's Overview

The IronClaw project is in a period of **high-intensity development and stabilization**, with 50 pull requests updated in the last 24 hours (22 merged/closed) and 10 active issues. A major theme is **CI resilience and reliability**, driven by a structural failure analysis showing that ~70% of main branch pushes are failing due to flaky tests, prompting a coordinated hardening effort (Issues #6014–#6018 and PRs #6022, #6023). On the feature side, the project is executing a **large extension runtime refactor** (PRs #6025, #6012) alongside several performance and quality-of-life improvements to the Reborn coding agent loop (PRs #5975–#5979, #5902). While the CI situation is a significant drag on velocity, the team is responding with targeted static checks and hermetic test isolation.

### 2. Releases

**No new releases** were published in the last 24 hours.

### 3. Project Progress

**Merged/Closed PRs (22 total):**
- **CI & Testing Stability:** PR #6023 merges a fix for the `build_runtime_input` flake by unifying the process-env test lock, addressing a root cause identified in Issue #6015.
- **Dependency Updates:** PR #5926 (closed) bumped 20 dependencies across the workspace, including major version jumps for `agent-client-protocol` (0.10.4 → 1.2.0), a potentially breaking change.
- **Bug Fixes:** PR #5930 (closed) likely resolved a prior admin secrets scope alignment issue.

**Features Advanced (Open PRs with “size: XL”):**
- **Extension Runtime (Large Feature Train):** PR #6025 (Workstream G + H) completes the extraction of the config/connect UI, frontend, CLI, and migrations. PR #6012 (Workstream F) lands the delivery coordinator with Slack/Telegram outbound support.
- **Agent Loop Resilience (4-PR Stack on #5959):** PR #5975 (Prompt cache break detector to stop KV-cache collapse). PR #5977 (Advertise skills as one-line listings to save ~7K tokens/call). PR #5978 (Require read-before-edit to prevent stale overwrites). PR #5979 (Post-edit diagnostics to catch collateral damage).
- **Token Cost Visibility:** PR #5976 adds per-run token usage and USD cost to the OpenAI-compatible Responses API.
- **Secret Management:** PR #5934 (open) aligns admin secrets with the default runtime scope, a prerequisite for the CLI/TUI secret manager requested in Issue #2601.

### 4. Community Hot Topics

- **[Issue #6011] Daily CI Failure Taxonomy (2026-07-12):** This meta-issue provides a forensic breakdown of 136 clawbench failures, attributing ~103 to a benchmark provisioning defect rather than model quality. It is the central diagnostic document driving the current CI hardening sprint.
- **[Issue #2601] CLI/TUI for Managing Secrets (2 comments, open since April):** A user reports significant friction with authentication and secret management. The underlying need is clear: the project lacks a dedicated interface for managing credentials, which becomes a bottleneck for new users. This issue is gaining traction as PR #5934 lays the runtime groundwork.
- **[PR #6021] Dependencies Bump with Breaking Change:** This open PR proposes updating `agent-client-protocol` from 0.10.4 to 1.2.0 (a major version jump). This is high-risk and warrants careful maintainer review before merging, as it implies a breaking contract change with the agent client protocol.

### 5. Bugs & Stability

**Critical (High Impact, Affecting Main Branch):**
- **CI Fragility (Issue #6014):** Code Coverage is red on ~70% of main pushes. Root cause is structural—flaky non-hermetic tests. **Fix PRs exist:** #6022 (static pre-push checks) and #6023 (test lock unification) are both open.
- **DB Concurrency Contention (Issue #6017):** Two DB concurrency contract tests (Postgres delete/recreate race, libSQL concurrent writers) flake under parallel load. **No fix PR yet**, but classified as timing-sensitive rather than a production bug.
- **E2E Slack Trigger Timeout (Issue #6016):** Slack trigger-delivery tests intermittently time out, currently blocking `main`. **Fix PR #6020** (Make Q-10 Slack journeys deterministic) is open.

**Moderate (High Friction):**
- **Inference Hang (Issue #6010, Closed):** NEAR AI inference (GLM-5.2) reportedly hangs for minutes during opencode usage. Closed as resolved (likely by a backend fix).
- **Image Preview Transparency (Issue #5704, Closed):** Image previews become transparent during active chat processing. Resolved.

**Low (Usability):**
- **GLM-5.2 Not in Default Model List (Issue #6009, Closed):** Users must manually add GLM-5.2 for opencode. Closed, likely resolved by a configuration update.

### 6. Feature Requests & Roadmap Signals

- **CLI/TUI Secret Manager (Issue #2601):** Strong signal for the next minor release. The runtime foundation is already in motion (PR #5934), and this is the highest-voted user-facing gap.
- **Per-Run Token Cost Tracking (PR #5976):** Likely to ship in the next release. It directly answers a core user need for cost observability in agent runs. Phase 1 is open; Phase 2 (database persistence) is implied.
- **MCP Registration Store (PR #5970):** This T1 feat (per-user MCP server registration) signals a shift toward a pluggable agent tool ecosystem. Likely foundational for a future release roadmap.
- **Unix Timestamp Support in `builtin.time` (PR #6024):** A small but high-utility improvement for agentic workflows involving Slack and other timestamp-heavy APIs. Likely to be merged this sprint.
- **Interactive Coding Nudge (PR #6013):** Making the agent's completion nudge "tools-capable" for interactive coding suggests a push to improve the human-in-the-loop developer experience.

### 7. User Feedback Summary

- **Pain Point (High): Secret Management Friction (Issue #2601).** The user expresses clear frustration: "struggles with authentication" and "not well documented." This is the #1 onboarding barrier identified in recent feedback.
- **Pain Point (Medium): Inference Unreliability (Issue #6010).** GLM-5.2 inference "constantly gets stuck," making it "unusable for real-time interactive development." This was resolved, but it highlights sensitivity to inference backend latency.
- **Pain Point (Medium): Model Availability (Issue #6009).** Users of NEAR AI API with opencode feel forced to fork the project to add a model, which is "significant effort." This suggests the model discovery mechanism is too rigid.
- **Satisfaction Signal:** The CI failure taxonomy (Issue #6011) and the rapid-fire "fix(ci)" commits indicate the team is transparent about reliability issues and is actively iterating, which builds trust.

### 8. Backlog Watch

- **[Issue #2601] Feature Proposal: CLI/TUI for Managing Secrets (Open since 2026-04-18, 2 comments):** **CRITICAL.** This has been unanswered for nearly 3 months. With 0 maintainer comments, it risks becoming stale. Given the clear user need and the foundational runtime work now landing, maintainers should comment with a timeline or assign it to a milestone.

- **[PR #6021] build(deps): bump the everything-else group (22 updates):** **HIGH RISK.** This is a massive dependency bump including a major version jump for `agent-client-protocol` (0.10.4 → 1.2.0). If merged without thorough review, it could introduce silent breaking changes. It needs a maintainer sign-off or to be split into separate, reviewable PRs for each critical dependency.

- **[Issue #6017] Flaky: DB Concurrency Contract Tests (Open, 0 comments):** While lower priority than the CI meta-issue, this has no fix PR. The root cause (timing-sensitive tests) is known, but it will continue to flake until addressed. A maintainer should comment with a plan (e.g., rewrite to use deterministic ordering).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-13

## 1. Today's Overview

The LobsterAI project saw **moderate activity** on 2026-07-13, with **14 PRs updated** (7 open, 7 closed/merged) and **1 open issue** updated. No new releases were published. The development team, led primarily by `fisherdaddy` and `liuzhq1986`, focused on **Windows platform improvements**, **CoWork feature stabilization**, and **notification system upgrades**. A notable community-reported bug (#2293) regarding cross-agent `USER.md` overwriting remains open and continues to gather user attention. Overall, the project shows healthy forward momentum with a clear focus on both feature work and regression fixes.

## 2. Releases

**None** — No new versions were published on 2026-07-13.

## 3. Project Progress

**7 PRs were merged or closed today**, reflecting solid progress across several areas:

| PR | Area | Summary |
|----|------|---------|
| [#2315](https://github.com/netease-youdao/LobsterAI/pull/2315) | renderer, cowork | **Fix**: Process queued follow-ups across sessions and when app is minimized |
| [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316) | renderer | **Fix**: Prevent Windows title bar logo compression when sidebar is collapsed |
| [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) | main, cowork | **Fix**: Clear stalled compaction retry maintenance for auto-compaction |
| [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) | renderer, main, cowork, docs | **Fix**: Stabilize steer follow-up routing with Codex-style queuing |
| [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) | renderer, cowork | **Fix**: Support file attachments and images in steer queue |
| [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302) | renderer, cowork | **Feat**: Windows-only branded title bar with logo/controls |
| [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) | main | **Fix**: Use short UUID for Agent ID instead of name (closes stale) |

**Key highlights:**
- **CoWork session management** received multiple fixes: follow-up routing, attachment support in steer queue, and cross-session queued processing
- **Windows UI polish**: Custom branded title bar and logo compression fix for the Windows native build
- **Agent ID system**: The long-standing fix to use UUIDs instead of names for Agent IDs was finally merged, addressing the data resurrection bug

## 4. Community Hot Topics

### Most Active Issue

**[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — [OPEN] Multi-agent USER.md overwrite bug**  
- **Author**: `yepcn` | **Created**: 2026-07-07 | **Updated**: 2026-07-12  
- **Comments**: 4 | **Reactions**: 0  
- **Analysis**: The reporter describes a critical regression where modifying one agent's "About You" settings or `USER.md` causes all other agents to be overwritten with the same content. The bug persists even when editing files outside the app—on restart, all agents' `USER.md` files are replaced by the main agent's version. This suggests a flaw in the workspace initialization or config synchronization logic introduced in a recent update. The issue has been open for 6 days without maintainer response, which may indicate it's under investigation but not yet prioritized.

## 5. Bugs & Stability

### 🔴 High Severity

- **[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — Multi-agent USER.md overwrite**  
  **Impact**: Data loss/corruption for users with multiple agents — all agent configurations become identical.  
  **Status**: Open, no fix PR yet. **No maintainer response in 6 days.**

### 🟡 Medium Severity (Addressed Today)

| Issue/PR | Severity | Description | Fix Status |
|----------|----------|-------------|------------|
| [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) | Medium | Stalled compaction retry caused context maintenance to never clear | ✅ Merged |
| [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) | Medium | Steer follow-up routing was unstable during active Cowork turns | ✅ Merged |
| [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) | Low | Queue items during active turns couldn't include attachments | ✅ Merged |

### 🟢 Low Severity (In Progress)

- **[#2321](https://github.com/netease-youdao/LobsterAI/pull/2321) — Mac update hdiutil failed** (Open, fix in progress)
- **[#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) — Stale: Add hover tooltip for new-chat icon** (Stale, open since April)

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release

| Feature | PR | Evidence |
|---------|-----|----------|
| **Windows Web Installer** | [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323) (Open) | Opt-in NSIS web installer downloading from CDN |
| **Desktop Notifications Upgrade** | [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318) (Open) | Permission request and question alerts |
| **Homepage Quick-Action Revamp** | [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319) (Open) | New "文档写作" category, refreshed prompts |
| **Cron Job Fix** | [#2320](https://github.com/netease-youdao/LobsterAI/pull/2320) (Open) | Fast-forward missed recurring jobs instead of skip only |
| **File Card Optimization** | [#2322](https://github.com/netease-youdao/LobsterAI/pull/2322) (Open) | Renderer/build changes for file card |

### Predicted Roadmap Direction
- **Windows-first polish**: Multiple Windows-specific UI/installer changes suggest a focused push for Windows desktop users
- **Notification system expansion**: From "task completion" to "desktop notification manager" with foreground and alert modes
- **Office scenario improvements**: The homepage revamp swaps education scenarios for document writing (docx), reflecting user demand

## 7. User Feedback Summary

### Pain Points
1. **Multi-agent configuration corruption** ([#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)): Users cannot maintain distinct agent personalities without all agents being overwritten. This is a **critical usability blocker** for agent-heavy workflows.
2. **Silent regression**: The user explicitly states "I suspect it's a bug from a recent update," indicating the change was not communicated or caught in testing.

### Use Cases
- **Multi-agent orchestration**: Users need independent `USER.md` files per agent for role-specific behavior
- **Offline editing fidelity**: Users expect file system changes to persist across app restarts

### Sentiment
- **Dissatisfaction**: The user added a follow-up ("2026.7.9增加") with more detail, suggesting frustration with the bug persisting
- **Positive signal**: No complaints about performance or core conversation features — feedback is focused on agent management, a sign the base product is stable

## 8. Backlog Watch

| Item | Type | Age | Status | Why It Matters |
|------|------|-----|--------|----------------|
| [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) — Add hover tooltip for new-chat icon | PR | 3+ months (since Apr 2) | **Stale**, no recent activity | Simple UI/UX improvement; neglect may signal prioritization gaps |
| [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) — Use UUID for Agent ID | PR | ~6 weeks (since May 28) | ✅ **Merged today** | Previously stale, now resolved — related to issue #2293's underlying data management |
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — Multi-agent USER.md overwrite | Issue | 6 days | **No maintainer response** | **Critical bug** affecting all multi-agent users; silence is concerning for project health |

### Recommendation
The **highest priority** for maintainers should be responding to [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293). The fix for Agent ID generation ([#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) just merged) may have introduced or failed to prevent this exact regression. Acknowledge the issue publicly to maintain community trust.

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

# CoPaw Project Digest — 2026-07-13

## Today's Overview

CoPaw (QwenPaw) is in an **intense stabilization phase** following the v2.0.0 release, with 26 active issues and 14 open PRs as of today. Activity is extremely high: 29 issues and 19 PRs were updated in the last 24 hours, indicating strong community engagement but also significant post-release regression pain. The project faces a **concentrated crisis around context compression logic, message serialization, and legacy session compatibility** — these three areas account for roughly 60% of today's open bug reports. No new releases were published today, suggesting the team is consolidating fixes ahead of a likely 2.0.0.post1 patch.

## Releases

**None** — no releases today (latest remains v2.0.0).

## Project Progress

**5 PRs were merged or closed today:**

| PR | Description | State |
|---|---|---|
| [#6007](https://github.com/agentscope-ai/CoPaw/pull/6007) | chore: bump version to 2.0.0.post1 | **Closed** (merged) |
| [#5530](https://github.com/agentscope-ai/CoPaw/pull/5530) | fix(agent): cap text-only auto-continue per turn | **Closed** (merged) — Restores ReAct loop guard to prevent degenerate emoji/repetition loops |
| [#5990](https://github.com/agentscope-ai/CoPaw/pull/5990) | fix(compat): handle legacy 'file' block type | **Closed** |
| [#5988](https://github.com/agentscope-ai/CoPaw/pull/5988) | fix(compat): handle legacy 'file' block type | **Closed** |
| [#5987](https://github.com/agentscope-ai/CoPaw/pull/5987) | fix(scroll): sanitize unpaired tool messages after context compression | **Closed** |

Three duplicate PRs were filed for the same legacy file-block compat fix, indicating the development team is working urgently on this issue. The v2.0.0.post1 version bump suggests an imminent patch release.

**Significant open PRs advancing features:**
- [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) — Windows desktop GUI automation (UIA + Tauri control mode) — long-running feature, still open
- [#5726](https://github.com/agentscope-ai/CoPaw/pull/5726) — Vision fallback for text-only models — under review
- [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) — Per-session model overrides — first-time contributor, significant feature
- [#5869](https://github.com/agentscope-ai/CoPaw/pull/5869) — System commands in slash autocomplete across all UIs

## Community Hot Topics

### Most Active Issues (by comments)

1. **[#5951](https://github.com/agentscope-ai/CoPaw/issues/5951) — Windows Sandbox pwsh recursion explosion** (8 comments)
   - **Situation**: Detailed investigation of pwsh infinite window spawning, NTFS ACL pollution, memory exhaustion to 20GB. The sandbox cannot be disabled, even after uninstalling the desktop shell.
   - **Underlying need**: Windows sandbox architecture is fundamentally broken for many users; need escape hatch or alternative sandbox implementation.

2. **[#5996](https://github.com/agentscope-ai/CoPaw/issues/5996) — MODEL_EXECUTION_ERROR from orphaned tool_result blocks** (7 comments)
   - **Situation**: `_hint.py` creates assistant messages with TextBlock + ToolResultBlock without tool_calls, causing OpenAI API 400 errors.
   - **PR [#6004](https://github.com/agentscope-ai/CoPaw/pull/6004) directly addresses this**.

3. **[#5952](https://github.com/agentscope-ai/CoPaw/issues/5952) — Auto-memory fails with module not found** (4 comments)
   - **Situation**: `agentscope.tool._builtin._scripts` module is missing in v2.0.0 Windows desktop app, breaking memory summarization.
   - **PR [#5997](https://github.com/agentscope-ai/CoPaw/pull/5997) fixes this by including Glob helper in desktop bundle**.

4. **[#5986](https://github.com/agentscope-ai/CoPaw/issues/5986) — Context compression breaks tool_call/tool_result pairing** (4 comments)
   - **Situation**: Eviction logic does not guarantee paired tool_call/tool_result messages, causing 400 errors.
   - **Multiple fix PRs exist**: [#5987](https://github.com/agentscope-ai/CoPaw/pull/5987), [#5989](https://github.com/agentscope-ai/CoPaw/pull/5989).

## Bugs & Stability

**Severity: CRITICAL**

| Bug | Impact | Fix Status |
|---|---|---|
| [#5951](https://github.com/agentscope-ai/CoPaw/issues/5951) — Windows Sandbox pwsh recursion, 20GB memory overrun | **System unusable** for Windows users; sandbox cannot be disabled | No fix PR open |
| [#5996](https://github.com/agentscope-ai/CoPaw/issues/5996) — MODEL_EXECUTION_ERROR from orphan tool results | **Breaks all conversation** for affected configs | PR [#6004](https://github.com/agentscope-ai/CoPaw/pull/6004) open |
| [#5986](https://github.com/agentscope-ai/CoPaw/issues/5986) / [#5960](https://github.com/agentscope-ai/CoPaw/issues/5960) — Context compression breaks tool pairing | **400 errors** on long sessions | PRs [#5987](https://github.com/agentscope-ai/CoPaw/pull/5987), [#5989](https://github.com/agentscope-ai/CoPaw/pull/5989) |
| [#6009](https://github.com/agentscope-ai/CoPaw/issues/6009) — Scroll context no hard limit, upstream rejects | **Session becomes permanently broken** | No fix PR |
| [#5962](https://github.com/agentscope-ai/CoPaw/issues/5962) — WeChat channel orphan tool_result after scroll eviction | **All WeChat sessions fail** after a few tool-calling turns | Duplicate of #5960 |
| [#5956](https://github.com/agentscope-ai/CoPaw/issues/5956) — DingTalk legacy session loading fails with ValidationError | **DingTalk sessions unloadable** after v2 upgrade | PRs [#5993](https://github.com/agentscope-ai/CoPaw/pull/5993), [#6010](https://github.com/agentscope-ai/CoPaw/pull/6010) |

**Severity: HIGH**

- [#5952](https://github.com/agentscope-ai/CoPaw/issues/5952) — Auto-memory module not found (memory summarization broken) → PR [#5997](https://github.com/agentscope-ai/CoPaw/pull/5997)
- [#5964](https://github.com/agentscope-ai/CoPaw/issues/5964) — Chat list/conversation mapping lost after upgrade (500 errors)
- [#6006](https://github.com/agentscope-ai/CoPaw/issues/6006) — Message queue functionality missing entirely

**Severity: MEDIUM**

- [#5955](https://github.com/agentscope-ai/CoPaw/issues/5955) — WebUI skills page shows only 20 skills, hidden disabled skills
- [#5969](https://github.com/agentscope-ai/CoPaw/issues/5969) — Dark mode text unreadable in Loops + chat history
- [#6008](https://github.com/agentscope-ai/CoPaw/issues/6008) — TUI crashes on mouse click (AttributeError)
- [#5982](https://github.com/agentscope-ai/CoPaw/issues/5982) — Shell execution demands approval every time after v2 update
- [#5994](https://github.com/agentscope-ai/CoPaw/issues/5994) — Auto mode governance triggers on every operation
- [#5983](https://github.com/agentscope-ai/CoPaw/issues/5983) — `qwenpaw doctor` reports false FAIL for health endpoint

## Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Release |
|---|---|---|
| **Tool whitelist mode** (allow once / allow always) | [#5955](https://github.com/agentscope-ai/CoPaw/issues/5955) comment | Medium — addresses major UX pain |
| **Cross-channel session handoff** (Console ↔ Feishu ↔ DingTalk) | [#5999](https://github.com/agentscope-ai/CoPaw/issues/5999) | Low — complex architectural change |
| **Session grouping + import/export** | [#5943](https://github.com/agentscope-ai/CoPaw/issues/5943) | Medium — design proposal exists |
| **Per-session model overrides** | PR [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | High — PR already submitted |
| **Auto-discover skills from directory** | [#6000](https://github.com/agentscope-ai/CoPaw/issues/6000), [#6001](https://github.com/agentscope-ai/CoPaw/issues/6001) | High — currently completely broken |
| **Disable sandbox/governance permanently** | [#5984](https://github.com/agentscope-ai/CoPaw/issues/5984) | Medium — multiple users requesting |

## User Feedback Summary

**Major Themes:**

1. **v2.0.0 migration is extremely painful** — Multiple users report regressions that make the tool unusable after upgrading: sessions won't load (DingTalk, WeChat), context compression causes permanent errors, chat history mapping is lost. Users are trapped between old and broken.

2. **Windows sandbox is a showstopper** — The pwsh recursion issue (20GB memory, infinite windows, unclosable) is the single most alarming report. The user notes that even uninstalling the desktop shell doesn't stop it.

3. **Governance/approval UX is too aggressive** — Multiple reports ([#5955](https://github.com/agentscope-ai/CoPaw/issues/5955), [#5982](https://github.com/agentscope-ai/CoPaw/issues/5982), [#5994](https://github.com/agentscope-ai/CoPaw/issues/5994)) describe the new permission system as "annoying," "troublesome," and "very time-consuming." Users want a whitelist/allow-once pattern.

4. **Channel integration regressions** — Feishu, DingTalk, WeChat, Telegram all have specific v2.0.0 regressions. Channel users feel neglected.

5. **Skill system uncertainty** — New skills cannot be added; the system only shows built-in skills. This is a fundamental feature that is completely broken.

6. **Positive signal**: Several first-time contributors are actively submitting fixes (5 PRs from new contributors in the last 48 hours), indicating strong community desire to help stabilize the project.

## Backlog Watch

| Item | Days Unanswered | Priority |
|---|---|---|
| [#5951](https://github.com/agentscope-ai/CoPaw/issues/5951) — Windows Sandbox pwsh recursion | 3 days | **CRITICAL** — system unusable for Windows users |
| [#5964](https://github.com/agentscope-ai/CoPaw/issues/5964) — Chat mapping loss after upgrade | 2 days | **HIGH** — data loss scenario |
| [#5955](https://github.com/agentscope-ai/CoPaw/issues/5955) — Skills page truncated + governance UX complaints | 2 days | **MEDIUM** — has a maintainer response? |
| [#6001](https://github.com/agentscope-ai/CoPaw/issues/6001) — New skills never appear in pool | 1 day | **HIGH** — fundamental feature broken |
| [#6000](https://github.com/agentscope-ai/CoPaw/issues/6000) — Skill auto-discovery broken | 1 day | **HIGH** — same as #6001 |
| [#5983](https://github.com/agentscope-ai/CoPaw/issues/5983) — `qwenpaw doctor` false FAIL | 1 day | **LOW** — diagnostic tool bug |
| [#5957](https://github.com/agentscope-ai/CoPaw/issues/5957) — WeChat "/Internal error" (no logs) | 2 days | **MEDIUM** — user unable to collect diagnostics |

**Long-running items needing attention:**
- PR [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) (Windows desktop GUI automation) — open for 29 days, no updates in 24h
- PR [#5791](https://github.com/agentscope-ai/CoPaw/pull/5791) (formatCompact rounding fix) — open for 8 days, tagged "first-time-contributor"

---

**Overall Assessment**: CoPaw is in a **stabilization crisis** after the v2.0.0 release. The core issues (context compression, orphan tool messages, legacy session loading) are being actively patched, with multiple contributors converging on similar fixes. The imminent 2.0.0.post1 patch should address the most critical regressions. However, the Windows sandbox issue and governance UX problems remain architectural concerns that may require deeper redesign. Community engagement is very high, both in reporting bugs and submitting fixes — a positive sign for the project's long-term health despite the current turbulence.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-13

## Today's Overview

ZeroClaw is in a high-activity maintenance and feature hardening phase, with **22 open issues** and **47 open pull requests** updated in the past 24 hours — a notably busy day reflecting the team's push toward the v0.8.3 milestone train. Three critical `priority:p1` bugs remain open around context budget overflow, skill-review fork panics, and unbounded RSS memory growth, all carrying `risk:high` labels and requiring active remediation. The merged/closed throughput is moderate (3 PRs closed), but the PR review pipeline is being actively worked, with 13 PRs flagged `needs-author-action` awaiting revision. The v0.8.3 release is clearly the engineering focus, with five active tracker issues coordinating work across provider serialization, runtime execution, gateway/ZeroCode surfaces, config-driven policy, and channel adapters. Notably, **no new releases were published today**, suggesting the team is converging changes rather than cutting a release sprint.

## Releases

**No new releases today.** The last release was v0.8.2 (date unspecified). The v0.8.3 milestone is being coordinated through five tracker issues [#8070](#8070), [#8071](#8071), [#8073](#8073), [#8360](#8360), and [#8363](#8363), with a v0.8.4 maintenance train already scoped via tracker [#8357](#8357).

## Project Progress

**3 PRs were merged/closed today:**

- **[PR #8653] [CLOSED] Auto-resume the most recent Code session on pane entry** — An enhancement accepted into ZeroCode; when the user opens the Code pane, it now resumes the last usable session instead of starting blank.
- **[PR #8940] [CLOSED] fix(zerocode): apply fill_style() to queue sidebar and session picker overlays** — A bugfix merged that corrects theming on ZeroCode overlay components after `Clear` operations.
- **[PR #9027] [OPEN] fix(sop): key AMQP dispatch idempotency on the message-id** — A focused SOP milestone fix split from #8848; prevents duplicate runs when a single AMQP delivery matches multiple SOPs.

**Key feature advancements under active development:**

- **SOP milestone (#8288):** The daemon-owned SOP control plane is advancing with PRs #9027 (AMQP idempotency) and #8848 settling the admission/broker/route base. SOP is being pushed toward a "5/5" completion rating with 13 verification capabilities.
- **Memory subsystem hardening:** Two large PRs (#8895, #8984) adding content-scanning at write/recall boundaries and a gated rerank stage in memory-context injection.
- **Observability overhaul:** PR #8893 adds gated audit trails with observer fan-out, and PR #6641 tracks turn-level OTel trace correlation — nesting llm.call/tool.call/memory.* spans under a single turn trace.
- **Provider stability:** Fix PRs for tool-call argument sanitization (#8931), OpenAI reasoning-effort rejection (#9016), Gemini thought signatures (#8935), and Anthropic timeout configuration (#8947).

## Community Hot Topics

Most active discussions (by comment count and reaction engagement):

| Item | Type | Comments | Summary |
|------|------|----------|---------|
| [#5808] **Default 32k context budget exceeded** | Bug | 8 | System prompt + tool definitions already exceed 32k on iteration 1, causing perpetual preemptive trim. Severity S1. |
| [#6055] **Slack thread context hydration** | Feature | 6 | Users want `conversations.replies` backfill on first bot-mention. Follow-up from #5992. |
| [#6641] **Turn-level OTel trace correlation** | Feature | 5 | Nest llm.call/tool.call/memory.* spans under a single turn trace. Praises contributor @alexandme. |
| [#8654] **skill-review fork panics (SIGSEGV)** | Bug | 4 | Out-of-range slice at skills/review.rs:159 takes down agent process. Appears after tool-heavy turns. |
| [#8642] **MCP/tool-schema cloning drives RSS growth** | Bug | 2 | Split from #5542 OOM tracker; unbounded memory growth in agent loop. |

**Five of the top six hottest items are bugs with `risk:high` and `priority:p1`.** This suggests the community is feeling significant stability pain — particularly around context budget management, tool-heavy execution crashes, and memory leaks. The Slack thread hydration feature request (#6055) is the only pure enhancement in the top tier, driven by users needing asynchronous bot interactions without re-@mentioning.

## Bugs & Stability

**Critical (S1 - workflow blocked) bugs reported in the last 24h:**

1. **[#9016] OpenAI tool turns fail when Chat Completions rejects reasoning effort** (S1) — `priority:p2`, `risk:medium`. OpenAI-compatible endpoints reject non-`none` reasoning effort when function tools are present. **No fix PR exists yet.**
2. **[#9019] OpenAI Responses provider rejects vision-capable models** (S1) — `priority:p1`, `risk:medium`. The Responses API provider hardcodes `vision = false` in capabilities, rejecting images. **No fix PR exists yet.**

**High-severity ongoing bugs (pre-existing, still open):**

3. **[#5808] Default 32k context budget exceeded** — `priority:p1`, `risk:high`. System prompt + tool definitions exceed budget 3.3x on first iteration. **No fix PR exists; status `in-progress`.**
4. **[#8654] skill-review fork panics (SIGSEGV)** — `priority:p1`, `risk:high`. Out-of-range slice index after tool-heavy turns; process exits with 139/SIGSEGV under `panic = abort`. **No fix PR exists; status `in-progress`.**
5. **[#8642] MCP/tool-schema cloning drives unbounded RSS** — `priority:p1`, `risk:high`. Separate OOM root cause from #5542. **No fix PR exists; status `accepted`.**
6. **[#9017] --config-dir is ignored during CLI locale detection** — `priority:p2` (S2). Locale reads default config instead of `--config-dir`. **No fix PR exists.**

**Notable:** Two of the three `priority:p1` bugs (#8654, #8642) have been open for 10 days without committed fixes. The #5808 budget issue has been open for 87 days with 8 comments and is still "in-progress." This represents a growing stability debt.

**Fix PRs active:** PR #8931 (tool-call argument sanitization), #8935 (Gemini thought signatures), #8937 (stream-hash tool args to avoid deep cloning), #8947 (Anthropic timeout), #8943 (Nova 2 cache exclusion), #8866 (share MCP registry across heartbeat ticks) — none yet merged.

## Feature Requests & Roadmap Signals

**High-priority new feature requests (last 24h):**

- **[#9022] Optional Slack Events API (HTTP Request URL) mode** — Enables scale-to-zero deploys by using HTTP request URL alongside Web API polling and Socket Mode. **Predictable for v0.8.4** as it aligns with the Slack integration parity track (#8362).
- **[#9020] Session rewind and fork-from-message workflows in ZeroCode** — Fork conversations from a selected turn; rewind to earlier boundaries. **Predicted for v0.8.3** as it's in the ZeroCode Consolidation & Hardening tracker (#9010) and directly addresses a common user pain point.
- **[#9009] Operator UX Onboarding, Pairing & Self-Service** — Epic tracker for operator journeys, stack order, and maintainer decisions. **Milestone-driven, delivery date unclear.**
- **[#9010] ZeroCode Consolidation & Hardening** — Epic tracker for Code pane, chat, fork/rewind. **Predicted for v0.8.3/v0.8.4.**

**v0.8.3 feature roadmap (from tracker issues):**
- Config-driven runtime policy, routing, and tool access (#8363)
- Provider and native-tool message serialization (#8360)
- Channel adapter behavior and interaction parity (#8362)
- Gateway/Web dashboard/ZeroCode/onboarding surfaces (#8070)
- Runtime execution, agent loop, tools, and skills (#8071)
- Observability, CI, docs, dependencies (#8073)

**v0.8.4 maintenance train (#8357):** Target date July 31, 2026. Scope to be determined but likely includes deferred v0.8.3 items.

## User Feedback Summary

**What's working well:**
- Contributor praise for maintainer responsiveness on trace correlation (#6641) — "your responsiveness on both PRs has been excellent"
- The SOP milestone (#8288) is seeing active, multi-PR collaboration on AMQP idempotency and pipeline settling
- The ZeroCode Doctor diagnostics PR (#8928) improves user visibility into log paths — users previously had to know internal CLI commands
- Slack thread context hydration (#6055) is requested by users who value asynchronous interaction patterns without constant @-mentions

**Significant pain points:**
- **Default configuration is broken out of the box:** The default 32k context budget (#5808) fails on the very first iteration (3.3x over budget). New users hitting this for 87 days without resolution is a serious onboarding barrier.
- **Tool-heavy workflows are unstable:** Two critical bugs (#8654, #8642) demonstrate that the agent loop doesn't gracefully handle tool-heavy turns — either crashing via SIGSEGV or leaking RSS to OOM.
- **Provider compatibility regressions:** OpenAI Responses API (#9019) and reasoning-effort models (#9016) both block workflows on basic operations (vision input, function tools). Users on non-standard OpenAI endpoints (OpenRouter, Copilot) are hitting 400 errors.
- **Scale-to-zero deployments are not supported:** Feature request #9022 explicitly calls out that Slack's current receiver modes (polling, socket) prevent serverless/resource-efficient deployments.

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

| Issue | Age | Summary | Risk |
|-------|-----|---------|------|
| [#5808] | 87 days | Default 32k context budget exceeded 3.3x on iteration 1 | High — blocks all new users |
| [#6055] | 80 days | Slack thread context hydration | Medium — UX gap |
| [#6641] | 61 days | Turn-level OTel trace correlation | Medium — observability gap |
| [#8642] | 10 days | MCP/tool-schema cloning drives OOM | High — stability |
| [#8654] | 10 days | skill-review fork SIGSEGV | High — stability |
| [#9016] | 1 day | OpenAI reasoning effort rejection by Chat Completions | High — blocks workflow |

**PRs needing maintainer review (10+ days old):**

- **[#8353] fix(runtime): improve error message context** — 17 days old, `needs-author-action`, `stale-candidate`. Small fix (error message improvements) at risk of going stale.
- **[#8784] refactor(runtime): split-history loop contract for Agent entry points** — 6 days old, `needs-author-action`. Large refactor (L size) that's PR-1 of a rework stack. Blocked on author action.
- **[#8949] feat(gateway): webhook GET + challenge-echo for plugin verification** — 3 days old, `needs-author-action`. XL-sized PR with 5 dependent PRs in a stack. Needs maintainer priority attention to prevent chain-blocking.

**Tracker issues (#8070, #8071, #8073, #8360, #8362, #8363, #8357, #8288):** These have 0 recent maintainer comments and appear to be purely coordination documents. Maintainers should verify these are still actively driving work versus becoming stale overhead.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*