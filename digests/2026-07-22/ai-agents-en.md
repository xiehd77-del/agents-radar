# OpenClaw Ecosystem Digest 2026-07-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-22 02:47 UTC

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

# OpenClaw Project Digest — 2026-07-22

## 1. Today's Overview

OpenClaw remains highly active with 500 issues and 500 PRs updated in the last 24 hours. The project's open issue count (397 active) continues to exceed closed/merged volume (103 closed issues, 165 closed/merged PRs), indicating a growing backlog that may strain maintainer bandwidth. No new releases were published today, but several high-priority (P1) regression fixes and security enhancements are in active review. The community is heavily focused on three themes: secret/credential security, MCP tool injection in subagents, and database corruption/latency issues affecting production deployments.

## 2. Releases

**None** — No new releases were published on 2026-07-22.

## 3. Project Progress

Today's most significant merged/closed activity includes:

| PR # | Title | Status | Risk |
|------|-------|--------|------|
| [#103895](https://github.com/openclaw/openclaw/pull/103895) | feat(slack): support Agent View | ✅ Merged | Compatibility, session-state, message-delivery |
| [#112357](https://github.com/openclaw/openclaw/pull/112357) | fix(ui): keep chat author identity readable | ✅ Merged | Low |
| [#112433](https://github.com/openclaw/openclaw/pull/112433) | fix(ui): allow direct sessions in non-Git folders | ✅ Merged | Low |
| [#98437](https://github.com/openclaw/openclaw/issues/98437) | MCP loopback schema warnings (closed as stale) | ✅ Closed | N/A |
| [#91383](https://github.com/openclaw/openclaw/issues/91383) | Telegram markdown link truncation (closed) | ✅ Closed | Low |

**Notable fix in review**: [#112458](https://github.com/openclaw/openclaw/pull/112458) addresses a critical P1 regression where `cli-backend` agents using Anthropic/Claude CLI returned `401 authentication_failed` while identical shell invocations succeeded. The fix forwards selected/ordered profiles to Claude CLI and clears competing host credentials.

## 4. Community Hot Topics

### 🔥 Most Active Issues

| Issue | Comments | Reactions | Topic |
|-------|----------|-----------|-------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 15 | 4 👍 | **Masked Secrets** — Prevent agent from reading raw API keys |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | 13 | 1 👍 | **DB corruption** — CLI preflight corrupts SQLite when gateway runs |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | 11 | 2 👍 | **Latency/stalls** — Active Memory + Codex causes hook timeouts |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | 11 | 5 👍 | **MCP subagent gap** — Tools not injected into spawned sessions |
| [#106779](https://github.com/openclaw/openclaw/issues/106779) | 11 | 2 👍 | **llama.cpp regression** — Parser generation fails on 2026.7.1 |

### 🔥 Most Active PRs

| PR # | Comments | Status | Topic |
|------|----------|--------|-------|
| [#89985](https://github.com/openclaw/openclaw/pull/89985) | High | Open | Preserve local package overrides during update |
| [#112458](https://github.com/openclaw/openclaw/pull/112458) | New | Open | Forward selected profiles to Claude CLI (P1 fix) |
| [#111527](https://github.com/openclaw/openclaw/pull/111527) | New | Open | Config-surface reduction tranche 3 (XL, needs maintainer) |
| [#112478](https://github.com/openclaw/openclaw/pull/112478) | New | Open | virtiofs/Kata inode >2^53 crash fix |
| [#112442](https://github.com/openclaw/openclaw/pull/112442) | New | Open | Accessible image lightbox for Control UI |

**Underlying community concern**: The most-commented issues reveal a growing tension between powerful features (MCP tools, Active Memory, subagents) and the reliability/security guardrails needed for production use. Users want advanced capabilities but are hitting hard walls around credential security, tool isolation, and session-state corruption.

## 5. Bugs & Stability

### P0 / Critical
- **[#101290](https://github.com/openclaw/openclaw/issues/101290)** — **CLI startup preflight corrupts SQLite DB** while gateway is running. Reproduced 4× on macOS 2026.6.6. Vanilla SQLite does NOT reproduce. *No fix PR yet*. ⚠️

### P1 / High
- **[#95612](https://github.com/openclaw/openclaw/issues/95612)** — `cli-backend` against Anthropic returns `401 authentication_failed` while shell works. **Fix PR [#112458](https://github.com/openclaw/openclaw/pull/112458) in review**.
- **[#90840](https://github.com/openclaw/openclaw/issues/90840)** — Regression: subagent run completion delivers raw worker output instead of summary to user. *Needs product decision*.
- **[#108473](https://github.com/openclaw/openclaw/issues/108473)** — cron tool schema breaks llama.cpp tool-calling due to unanchored regex in `pattern` field.
- **[#111498](https://github.com/openclaw/openclaw/issues/111498)** — Main agent blocked by persistent workspace-state migration after Anthropic auth recovery.
- **[#112478](https://github.com/openclaw/openclaw/pull/112478)** — Gateway refuses to start on virtiofs/Kata because inode numbers >2^53 collapse to same Number. **Fix PR available**.

### P2 / Medium (Impacting Stability)
- **[#53408](https://github.com/openclaw/openclaw/issues/53408)** — Write/exec tool parameters silently dropped after long conversations (15+ turns). *Needs live repro*.
- **[#86996](https://github.com/openclaw/openclaw/issues/86996)** — Active Memory + Codex causes hook timeouts, startup aborts, gateway event-loop stalls.
- **[#110216](https://github.com/openclaw/openclaw/pull/110216)** — Fix for memory index divergence causing Gateway crash. **PR ready for maintainer**.

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release (based on maintainer activity and PRs)
1. **Masked Secrets** ([#10659](https://github.com/openclaw/openclaw/issues/10659)) — Prevents agents from reading raw API keys; could land as part of ongoing security improvements.
2. **Filesystem Sandboxing** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) — `tools.fileAccess` config with allowed/deny paths. Multiple PRs in area suggest maintainer interest.
3. **Auto-update with rollback** ([#12855](https://github.com/openclaw/openclaw/issues/12855), [#14526](https://github.com/openclaw/openclaw/issues/14526)) — Safer upgrades with pre-update backup + health check.

### Strong Community Demand (but lower maintainer activity)
4. **Telegram Business Bot support** ([#20786](https://github.com/openclaw/openclaw/issues/20786)) — 6 👍, needs security review.
5. **Per-model usage logging** ([#13219](https://github.com/openclaw/openclaw/issues/13219)) — Cost tracking for multi-model setups.
6. **Subagent tool restrictions** ([#15032](https://github.com/openclaw/openclaw/issues/15032)) — `per-spawn` tool allowlists for prompt injection defense.
7. **Session snapshots** ([#13700](https://github.com/openclaw/openclaw/issues/13700)) — Save/load context checkpoints.

### Roadmap Signals (larger infrastructure changes)
- **Config-surface reduction** — PR [#111527](https://github.com/openclaw/openclaw/pull/111527) is an XL refactor consolidating product configuration, requesting maintainer decisions on `silentReply` defaults and surface group enablement.
- **Plan-first Claw CLI** — PR [#102296](https://github.com/openclaw/openclaw/pull/102296) adds experimental `claws status` and removal commands with dry-run integrity digests.
- **Localization framework** — PRs [#111544](https://github.com/openclaw/openclaw/pull/111544) and [#111543](https://github.com/openclaw/openclaw/pull/111543) introduce TUI localization and contributor ownership docs.

## 7. User Feedback Summary

### Common Pain Points
- **Credential security is inadequate** — Users want masked secrets ([#10659](https://github.com/openclaw/openclaw/issues/10659)), capability-based skill permissions ([#12678](https://github.com/openclaw/openclaw/issues/12678)), and safer API key storage ([#88562](https://github.com/openclaw/openclaw/issues/88562)).
- **Subagent behavior is unpredictable** — MCP tools not injected ([#85030](https://github.com/openclaw/openclaw/issues/85030)), raw output delivered instead of summary ([#90840](https://github.com/openclaw/openclaw/issues/90840)), no per-spawn tool restrictions ([#15032](https://github.com/openclaw/openclaw/issues/15032)).
- **Production reliability issues** — DB corruption ([#101290](https://github.com/openclaw/openclaw/issues/101290)), long conversation parameter drops ([#53408](https://github.com/openclaw/openclaw/issues/53408)), lane scheduler false positives ([#14747](https://github.com/openclaw/openclaw/issues/14747)).

### Positive Signals
- High demand for **group chat consolidation** ([#7524](https://github.com/openclaw/openclaw/issues/7524), 4 👍) and **member-based allowlists** ([#20321](https://github.com/openclaw/openclaw/issues/20321)).
- **Plugin hot-reload** ([#14438](https://github.com/openclaw/openclaw/issues/14438), 4 👍) would significantly improve developer experience.
- **Antigravity CLI** support ([#84527](https://github.com/openclaw/openclaw/issues/84527), 11 👍) is the most-liked open issue, reflecting the community's urgent need to migrate from deprecated Gemini CLI.

### Satisfaction Indicators
- The volume of enhancement requests (rather than bug reports) suggests the core product is functional enough that users are investing in it long-term.
- Several issues tagged `maturity:stable` indicate that even experienced users are hitting edge cases in production.

## 8. Backlog Watch

### Issues Needing Maintainer Attention (stale for >30 days, high impact)

| Issue | Created | Last Updated | Tag | Reason for Concern |
|-------|---------|--------------|-----|-------------------|
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Feb 3 | Jul 21 | **security** | Filesystem sandboxing — 4👍, no maintainer review since Feb |
| [#7540](https://github.com/openclaw/openclaw/issues/7540) | Feb 2 | Jul 21 | **security, live-repro** | WhatsApp call events — 2👍, needs live repro for 5 months |
| [#48373](https://github.com/openclaw/openclaw/issues/48373) | Mar 16 | Jul 21 | **data-loss** | feishu_doc create ignores content — stale with linked PR open |
| [#84527](https://github.com/openclaw/openclaw/issues/84527) | May 20 | Jul 21 | **auth-provider** | Antigravity CLI — 11👍 (most liked), needs product decision |

### PRs Awaiting Maintainer Review (high risk, high value)

| PR # | Created | Risk Flags | Value |
|------|---------|------------|-------|
| [#89985](https://github.com/openclaw/openclaw/pull/89985) | Jun 3 | Compatibility, Security-boundary | Preserves local package overrides during update |
| [#89277](https://github.com/openclaw/openclaw/pull/89277) | Jun 2 | Compatibility | Shows runtime status after `/new` and `/reset` |
| [#93265](https://github.com/openclaw/openclaw/pull/93265) | Jun 15 | Compatibility, Security-boundary | Streamlines setup with agent-assisted configuration |
| [#110216](https://github.com/openclaw/openclaw/pull/110216) | Jul 17 | Compatibility, Session-state | Fixes memory index divergence crash |
| [#111527](https://github.com/openclaw/openclaw/pull/111527) | Jul 19 | **Both compatibility & security** | Config-surface reduction — requires product decisions |

### Critical Gap
No maintainer has reviewed or commented on 6 of the top 10 most-commented P1 issues (marked `clawsweeper:needs-maintainer-review`). The `needs-product-decision` label appears on 18 of the top 50 issues, indicating a bottleneck in design approval that may delay fixes for security and reliability regressions.

---

*Generated from OpenClaw GitHub activity ending 2026-07-22. Data reflects last 24h of issue/PR updates across `openclaw/openclaw`.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report: AI Agent Open-Source Landscape

**Date:** 2026-07-22  
**Analyst:** Senior Analyst, AI Agent & Personal Assistant Ecosystems

---

## 1. Ecosystem Overview

The open-source personal AI agent ecosystem is experiencing a period of **intense maturation and fragmentation**, with projects simultaneously racing toward major stable releases (IronClaw v1.0, CoPaw v2.0) while struggling with security hardening, production reliability, and architectural debt. The landscape is bifurcating between **general-purpose agent frameworks** (OpenClaw, ZeroClaw, IronClaw) and **lighter-weight channel-oriented assistants** (NanoBot, PicoClaw, NanoClaw), with the former group seeing 10-50× more issue/PR activity. Across all projects, three systemic challenges dominate: **credential and secrets management**, **subagent tool isolation and security boundaries**, and **session-state persistence and corruption prevention**. Chinese-origin projects (CoPaw, NanoClaw, PicoClaw) are showing strong regional adoption with East Asian market features (Doubao, Kimi, LINE, Volcengine, Feishu), while the broader ecosystem faces growing demand for multi-model routing, prompt caching for local inference, and desktop UI reliability.

---

## 2. Activity Comparison

| Project | Active Issues (24h) | Active PRs (24h) | Release Status | Health Score | Velocity Trend |
|---------|-------------------|-----------------|----------------|--------------|----------------|
| **OpenClaw** | 397 open (500 updated) | 500 updated | No release today | 🟡 **Moderate** | High activity, growing backlog; maintainer bottleneck |
| **ZeroClaw** | 47 open (50 updated) | 41 open (50 updated) | No release today | 🟡 **Moderate** | Exceptional activity, strained review throughput |
| **IronClaw** | ~50 issues updated | 50 PRs updated | **v1.0.0-rc.1** (Jul 20) | 🟢 **Good** | Pre-v1.0 sprint; high velocity, aggressive merge rate |
| **CoPaw** | 42 updated | 50 PRs updated | **v2.0.1-beta.1** (today) | 🟢 **Good** | Sustained contributor momentum; new release shipped |
| **Hermes Agent** | 45 open (50 updated) | 35 open (50 updated) | v0.19.0 (latest) | 🟡 **Moderate** | Very active; desktop-focused; Chinese-region pain points |
| **NanoBot** | 0 open (10 closed) | 10 open (32 updated) | No release today | 🟢 **Good** | Backlog cleanup sprint; all 10 issues closed |
| **PicoClaw** | ~8 open (6 updated) | 6 open (8 updated) | v0.3.1 (latest) | 🟡 **Moderate** | Steady but slow; critical Matrix bug open 19 days |
| **NanoClaw** | 1 open (1 updated) | 9 open (12 updated) | No release today | 🟡 **Moderate** | Moderate; community-driven channel features |
| **LobsterAI** | ~8 open (10 updated) | 5 updated | No release today | 🟢 **Good** | High velocity on bug fixes; 50% merge rate |
| **Moltis** | 0 activity | 1 PR (deps) | No release today | 🔴 **Low** | Minimal; 1 dormant issue revived |
| **TinyClaw** | 0 activity | 0 activity | No release today | 🔴 **Inactive** | No activity in 24h |
| **NullClaw** | 0 activity | 0 activity | No release today | 🔴 **Inactive** | No activity in 24h |
| **ZeptoClaw** | 0 activity | 0 activity | No release today | 🔴 **Inactive** | No activity in 24h |

### Health Score Criteria
- 🟢 **Good**: Active merging, releases, manageable backlog
- 🟡 **Moderate**: High activity but growing backlog or critical issues pending
- 🔴 **Low/Inactive**: Minimal activity, stale issues, no releases

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Largest community scale**: 500 issues/PRs updated daily — approximately 10× NanoBot, 5× CoPaw, and on par with ZeroClaw (the only other project at this volume). This provides the largest pool of contributors, testers, and real-world deployment feedback.
- **Mature core architecture**: The `cli-backend` + gateway separation is a proven production pattern, with the `plan-first Claw CLI` (PR #102296) and config-surface reduction (PR #111527) indicating architectural maturity.
- **Deepest integration ecosystem**: MCP tool ecosystem, Active Memory, Codex, and multi-provider support (Anthropic, llama.cpp, Claude CLI) give OpenClaw the widest model compatibility surface.
- **Strongest channel diversity**: Slack Agent View (just merged), Telegram, plus group-chat consolidation demand (#7524) — channel coverage is broad.

### Technical Approach Differences
- **MCP-first tool injection**: Unlike IronClaw's witness-based dispatch or ZeroClaw's policy-gated approach, OpenClaw uses MCP as the primary tool extension mechanism — more flexible but creating the subagent injection gap (#85030).
- **Session-state heavy**: Active Memory + Codex architecture creates unique hook-timeout risks (#86996) that other projects don't face.
- **SQLite-centric**: DB corruption at scale (#101290) is a distinct pain point that IronClaw (filesystem-backed stores) and ZeroClaw (MySQL/MariaDB PRs #9249-#9250) are moving away from.

### Community Size Comparison
- **Issue engagement**: OpenClaw's top issue (#10659, 15 comments) is comparable to ZeroClaw's (#8226, 6 comments) and CoPaw's (#6257, 13 comments) — suggesting similar user base engagement density despite scale differences.
- **Pain point concentration**: OpenClaw's community is more vocal about **enterprise security** (masked secrets, filesystem sandboxing) than lighter projects like NanoBot (Ollama performance complaints) or PicoClaw (Matrix reliability).
- **Maintainer bottleneck**: 6 of 10 top P1 issues lack maintainer review — a worse ratio than IronClaw (actively merging architecture slices) or CoPaw (shipping beta releases), suggesting OpenClaw's scale is outpacing its review capacity.

### Recommendation
OpenClaw should prioritize **delegated reviewer roles** and **automated triage** to address the backlog-to-merge imbalance. The P0 DB corruption bug (#101290) and P1 subagent tool gap (#85030) are eroding trust in production deployments.

---

## 4. Shared Technical Focus Areas

Requirements emerging simultaneously across **3+ projects**:

| Technical Area | Mentioning Projects | Specific Needs |
|----------------|-------------------|----------------|
| **Secrets/Credential Management** | OpenClaw, Hermes Agent, NanoBot, ZeroClaw | Masked secrets (OpenClaw #10659), env-var interpolation (NanoBot #5010, #4989), Bitwarden/1Password integration (Hermes Agent salvage batch), runtime_context blocks (ZeroClaw #8226) |
| **Subagent/Spawned-Agent Tool Isolation** | OpenClaw, ZeroClaw, CoPaw, Hermes Agent | MCP tool injection (OpenClaw #85030), delegate allowlist bypass (ZeroClaw #8279), per-spawn tool restrictions (OpenClaw #15032), subagent polling loops (CoPaw #4873) |
| **Session-State Persistence & Corruption** | OpenClaw, CoPaw, ZeroClaw, Hermes Agent | SQLite corruption on preflight (OpenClaw #101290), deleted session contamination (CoPaw #6299), silent config drops on dot-keys (ZeroClaw #9240), session lease leaks (Hermes Agent #68920) |
| **Multi-Model Routing & Per-Chat Switching** | Moltis, ZeroClaw, CoPaw, OpenClaw | Per-topic routing (Moltis #574), per-chat model switching (ZeroClaw #8600), conversation-level model binding (CoPaw #6318), model presets (NanoBot #4866) |
| **Prompt Caching / Local Inference Optimization** | NanoBot, OpenClaw, PicoClaw | Ollama prompt prefix preservation (NanoBot #4867), Anthropic SystemParts cache_control (PicoClaw #3228), llama.cpp regression (OpenClaw #106779) |
| **Desktop/Web UI Reliability** | Hermes Agent, OpenClaw, ZeroClaw, CoPaw | Desktop double-rendering (Hermes #63679), SSE stream lifecycle (IronClaw #6425), web chat long-history lag (PicoClaw #3281), mobile adaptation (CoPaw #6281) |
| **SOP/Policy-Guided Execution** | ZeroClaw, OpenClaw, CoPaw, PicoClaw | Goal-mode SOP (ZeroClaw #8303, PRs #8687-8996), policy-gated exec (PicoClaw #3282), governance patterns (CoPaw #5088, #5546), config surface reduction (OpenClaw #111527) |

### Emerging Security Pattern
There is a clear convergence around **capability-based security** — moving from global allowlists to per-agent, per-session, per-spawn tool permissions. OpenClaw's filesystem sandboxing (#7722), ZeroClaw's delegate tool audit (#8279), and PicoClaw's policy-gated system exec (#3282) all point toward a "least privilege for agents" design philosophy.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | IronClaw | CoPaw | NanoBot | Hermes Agent | PicoClaw |
|-----------|----------|----------|----------|-------|---------|-------------|---------|
| **Primary Philosophy** | MCP-centric, extensible framework | Policy-driven agent with SOP engine | Ground-up v1.0 rewrite (Reborn) | Agent collaboration & OMP workflows | Lightweight, multi-channel assistant | Desktop-first, plugin-extensible | Compact multi-channel bot |
| **Target User** | Power users & production deployers | Enterprise & security-conscious teams | Rust ecosystem, high-reliability users | Chinese-market collaborative agents | Individual users, rapid setup | Desktop developers, CLI-heavy users | Community/multi-platform bot operators |
| **Core Language** | TypeScript/Node.js | TypeScript/Node.js | Rust | Python | Node.js | TypeScript/Node.js | Node.js |
| **Storage Strategy** | SQLite (struggling with corruption) | SQLite → MySQL/MariaDB (migrating) | Filesystem-backed stores (just migrated) | SQLite via Scroll context | Config file + jobs.json | state.db (FTS compaction issues) | SQLite |
| **Subagent Model** | MCP tool injection (gap exists) | Delegate tool (security bypass identified) | Witness-based dispatch (new architecture) | Subagent spawning (polling loops) | No subagent | Worker processes (deadlock risk) | No subagent |
| **Desktop/UI State** | Gateway + CLI, Slack Agent View | Web UI (SOP dashboard) | Reborn WebUI v2 (SSE fixes) | Console (v2.0 mobile gaps) | Basic WebUI | Desktop app (v0.19, regression-prone) | Web UI (lag with long history) |
| **Regional Focus** | Global | Global | Global | **China** (Doubao, Aliyun, Qwen) | Global (ModelScope for China) | Global (Kimi CN issues) | **China** (Feishu, DingTalk, Doubao) |
| **License** | Apache 2.0 | MIT | Apache 2.0 | Apache 2.0 | MIT | Apache 2.0 | MIT |

### Key Strategic Differences

1. **IronClaw vs. OpenClaw (Architecture Philosophy)**: IronClaw's Rust-based Reborn architecture prioritizes type safety, memory correctness, and deterministic execution — trading community size for reliability guarantees. OpenClaw's TypeScript/Node.js stack prioritizes extensibility and community contributions at the cost of performance and memory safety. OpenClaw's DB corruption and memory leak issues validate IronClaw's architectural choice.

2. **ZeroClaw vs. OpenClaw (Control vs. Flexibility)**: ZeroClaw's SOP engine and policy-gated execution represent a more opinionated "control plane" philosophy, while OpenClaw's MCP-first approach gives agents more autonomy at the cost of security boundaries. ZeroClaw's security bypass (#8279, #9247) shows that even opinionated systems struggle with isolation.

3. **CoPaw vs. Peer Projects (Chinese Market)**: CoPaw's OMP workflow modes (UltraQA, Ralph, Ultrawork) and Qwen-first model support differentiate it for the Chinese collaborative agent market. Its v2.0 stability regressions (#5860, #6307) mirror OpenClaw's growing pains, but its contributor onboarding (#2291) is a model for healthy community growth.

4. **NanoBot vs. Heavy Frameworks (Simplicity)**: NanoBot's "zero open issues today" accomplishment and rapid bug closure (10 fixed in 24h) demonstrate the advantage of a smaller, focused codebase. It lacks OpenClaw's MCP ecosystem or ZeroClaw's SOP engine but provides a polished, lower-complexity alternative.

---

## 6. Community Momentum & Maturity

### Activity Tiers (by 24h PR/Issue volume)

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: Hyperactive (>40 updates)** | OpenClaw, ZeroClaw, IronClaw, CoPaw, Hermes Agent | All 50+ updates; all facing review bottlenecks; all in active architectural transformation. These projects are shaping the ecosystem's direction. |
| **Tier 2: Active (10-40 updates)** | NanoBot, NanoClaw, LobsterAI, PicoClaw | Focused sprint cycles or cleanup phases. Lower complexity, faster merge rates. |
| **Tier 3: Low Activity (<10 updates)** | Moltis | Only automated dependency updates. Stale feature requests indicate community interest but lack of maintainer bandwidth. |
| **Tier 4: Inactive (0 updates)** | TinyClaw, NullClaw, ZeptoClaw | No measurable activity. Potentially abandonware or projects between development cycles. |

### Rapidly Iterating (Pre-Release Sprints)
- **IronClaw**: v1.0.0-rc.1 just shipped; 17 PRs merged today. Architecture consolidation accelerating toward stable release.
- **CoPaw**: v2.0.1-beta.1 shipped today with critical fixes. v2.0 stability issues are being actively addressed.
- **ZeroClaw**: Goal-mode infrastructure (5 stacked PRs) and remote session persistence (2 stacked PRs) suggest a feature-dense release imminent.

### Stabilizing (Post-Release Bug Fix Cycles)
- **OpenClaw**: No release today; maintainer bottleneck slowing fixes for P0/P1 issues. Community frustration growing.
- **Hermes Agent**: v0.19.0 with desktop regression (#63679, #68858); secrets salvage batch suggests v0.20 focused on security hardening.
- **NanoBot**: Just completed a major cleanup sprint (10 issues closed, 22 PRs merged/closed). Next release likely focused on Ollama caching (#4867) and remaining security PRs (#4594, #4987).

### Community Health Indicators
- **New contributor onboarding**: CoPaw leads with active PRs from first-time contributors (#6312, #6203) and the central task list (#2291). ZeroClaw has the busiest review queue but `needs-author-action` labels on 9 PRs suggest contributor burnout.
- **Maintainer responsiveness**: NanoBot (zero open issues) and LobsterAI (50% merge rate) show the best responsiveness. OpenClaw and ZeroClaw show the worst ratio of backlog to merge volume.
- **Sustainability risk**: Projects with inactive maintainer responses on critical security bugs (OpenClaw #7722, ZeroClaw #8279, PicoClaw #3088) risk losing enterprise adopters to IronClaw's more rigorous architecture.

---

## 7. Trend Signals

Five cross-industry trends extracted from community feedback across all projects:

### 1. "Security is the new performance" — Capability-Based Access Control is Mandatory
Every project with production users has open issues about secrets management (OpenClaw #10659, Hermes Agent salvage batch, NanoBot #4803) or tool permission boundaries (ZeroClaw #8279, #9247; OpenClaw #15032; PicoClaw #3282). The community has moved beyond "does it work?" to "is it safe to deploy in production?" Projects that ship **least-privilege agent models** with transparent audit trails (IronClaw's witness dispatch, ZeroClaw's Structured Security Audit Pipeline) will win enterprise trust. Projects that delay (OpenClaw unmasked secrets) will lose credibility.

**Action for developers**: Prioritize masked API keys, per-spawn tool allowlists, and workspace boundary enforcement over new features.

### 2. "Agents must be session-aware, not just turn-aware"
The convergence of session corruption bugs (OpenClaw #101290, CoPaw #6299, Hermes Agent #68920) and session snapshot requests (OpenClaw #13700) signals that users need durable, checkpointable agent sessions that survive crashes, network interruptions, and context window limits. The "conversation as database" pattern is breaking under production load. IronClaw's filesystem-backed stores and ZeroClaw's remote session persistence (MySQL/MariaDB PRs) are the correct direction.

**Action for developers**: Invest in session persistence with atomic writes (NanoBot #4984's pattern), crash recovery, and efficient context compression.

### 3. "Local inference is the bottleneck, not the model quality"
NanoBot's #4867 (Ollama adds 60s/turn) and OpenClaw's #106779 (llama.cpp regression) show that **prompt caching is the single highest-value optimization** for local-first and hybrid deployments. Users with 32GB VRAM are feeling pain — this is not a hardware problem but a software design gap. Projects that implement prompt prefix preservation (NanoBot), SystemParts caching (PicoClaw #3228), and streaming optimization (IronClaw's SSE fix #6425) will differentiate on user experience.

**Action for developers**: Profile round-trip latency for local inference; implement prompt caching before optimizing model output quality.

### 4. "Chinese AI ecosystem is the fastest-growing, most underserved region"
CoPaw (Qwen, Aliyun, Doubao), NanoClaw (LINE, Dial, Traditional Chinese README), PicoClaw (Feishu, DingTalk, Doubao, Volcengine), and Hermes Agent (Kimi CN issues) all show significant East Asian user activity. These users face **provider-specific integration gaps** (streaming failures, tool-call leakage, undocumented APIs) that global projects overlook. Projects with Chinese provider parity will capture a rapidly growing deployment base.

**Action for developers**: Test against DashScope, Volcengine, Aliyun, and Kimi APIs in CI. Add ModelScope as a built-in provider (NanoBot #4965 pattern).

### 5. "Desktop is the new web, and it's still broken"
Hermes Agent's macOS permission resets (#52010, #43788, #43365), desktop double-rendering (#63679), and SSE lifecycle issues (#6425) — combined with OpenClaw's Slack Agent View (just merged), PicoClaw's Web UI lag (#3281), and CoPaw's mobile adaptation requests (#6281, #6308) — reveal that **desktop and web UIs are the primary user interfaces, but none are stable**. The ecosystem is still in the "native app feels like Electron" phase. The project that offers a polished, cross-platform desktop experience with reliable session sync will own the user-facing market.

**Action for developers**: Invest in desktop-specific QA: test on Windows, macOS, and Linux; validate permission models; optimize long-context rendering. Don't assume "it works in CLI" is enough.

---

*Report generated 2026-07-22. Data reflects GitHub activity across 13 projects in the AI agent open-source ecosystem. Analysis intended for technical decision-makers evaluating platform choices, contribution priorities, and architectural investments.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-22

## 1. Today's Overview

NanoBot shows **very high activity** with **32 PRs updated** (22 merged/closed, 10 still open) and **10 issues closed** in the last 24 hours — a major cleanup and merge session across the codebase. There are **no new releases** today, but the volume of merged PRs suggests a significant stabilization push is underway. The project team appears to be clearing a large backlog of bug fixes and security patches originally filed in early July. Notably, 10 issues were all closed (zero remain open/active), indicating maintainers are aggressively resolving reported problems. The activity is heavily weighted toward **bug fixes and security hardening**, with several priority P1/P2 patches landing simultaneously.

## 2. Releases

**None.** No new releases were published in the reporting period.

## 3. Project Progress

The following notable PRs were **merged or closed** today, reflecting concrete forward movement across several subsystems:

- **Qwen thinking support (#5023)** — Added Qwen 3.5/3.6/3.7 models to `_MODEL_THINKING_STYLES` mapping, enabling thinking control for these models on providers like OpenRouter that don't set provider-level thinking_style. [🔗 PR #5023](https://github.com/HKUDS/nanobot/pull/5023)
- **API key security documentation (#5010)** — Updated SECURITY.md to recommend env-var references over plaintext API keys, closing the long-standing security issue #4803. [🔗 PR #5010](https://github.com/HKUDS/nanobot/pull/5010)
- **ModelScope provider (#4965)** — Added ModelScope as a built-in provider via its OpenAI-compatible API, supporting Qwen, DeepSeek, Kimi, GLM, and MiniMax models for both LLM and image generation. [🔗 PR #4965](https://github.com/HKUDS/nanobot/pull/4965)
- **Tool result quarantine (#4663)** — Fixed #4058 by dropping missing, empty, unknown, and duplicate tool result IDs before provider replay, preventing state corruption. [🔗 PR #4663](https://github.com/HKUDS/nanobot/pull/4663)
- **Skill highlighting in WebUI (#5020)** — Added inline highlighting of `$skillname` references in sent messages, improving user experience for skill invocation. [🔗 PR #5020](https://github.com/HKUDS/nanobot/pull/5020)
- **Codex fast mode (#5019)** — Added support for OpenAI Codex fast mode via `service_tier: "priority"` in extraBody, with documentation and coverage. [🔗 PR #5019](https://github.com/HKUDS/nanobot/pull/5019)
- **Env-var interpolation for transcription (#4989)** — Fixed Groq transcription 401 errors by resolving `${VAR}` refs in transcription API key/base config. [🔗 PR #4989](https://github.com/HKUDS/nanobot/pull/4989)
- **Atomic config write (#4984)** — Made `save_config` atomic via temp+replace to prevent truncated config files on crash. [🔗 PR #4984](https://github.com/HKUDS/nanobot/pull/4984)
- **Cron string coercion (#4983)** — Fixed `TypeError` when `jobs.json` stores timestamps as strings. [🔗 PR #4983](https://github.com/HKUDS/nanobot/pull/4983)
- **UTF-16 surrogate sanitization (#4952)** — Fixed UnicodeEncodeError on emoji-heavy content at the provider request boundary. [🔗 PR #4952](https://github.com/HKUDS/nanobot/pull/4952)
- **Log suppressed exceptions (#4811)** — Replaced silent swallow of `prepare_call()` exceptions with logging. [🔗 PR #4811](https://github.com/HKUDS/nanobot/pull/4811)

## 4. Community Hot Topics

- **Ollama caching enhancement (#4867)** — This closed issue with **22 comments** is the most discussed item. The user reports that NanoBot adds 60 seconds to every turn with Ollama, calling it "totally unusable" even with 32GB VRAM. Request: preserve exact prompt prefix to enable caching. **Underlying need**: The project lacks caching integration with local inference engines, making local model usage painfully slow at inference time. [🔗 Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)

- **Tool gateway for channels (#4911)** — Received 1 👍. The request asks for a guarded tool gateway so channels (especially real-time voice) can run agent tools. **Underlying need**: The channel architecture is too text-restricted, blocking multi-modal and real-time interaction patterns. [🔗 Issue #4911](https://github.com/HKUDS/nanobot/issues/4911)

- **Qwen thinking exposure (#4934)** — User reported that Qwen models expose internal reasoning content in chat responses via DashScope. This was fixed by PR #5023 (merged today). **Underlying need**: Provider model thinking/reasoning styles are inconsistently handled across providers. [🔗 Issue #4934](https://github.com/HKUDS/nanobot/issues/4934)

## 5. Bugs & Stability

| Severity | Bug | Fix PR? | Status |
|----------|-----|---------|--------|
| **P0** | API keys stored as plaintext in `~/.nanobot/config.json` (#4803) | ✅ #5010 | Closed |
| **P0** | `read_file` loads entire file into memory before truncation — multi-GB file causes OOM crash (#4785) | ⏳ #4987 (open, conflict) | Open PR |
| **P1** | Qwen models expose thinking/reasoning content in chat (#4934) | ✅ #5023 | Closed |
| **P1** | Tool-result protocol allows missing or duplicate `tool_call_id` states (#4058) | ✅ #4663 | Closed |
| **P1** | Session.messages list unbounded — accumulates forever (#4787) | ❓ None linked | Closed |
| **P1** | Except `BaseException` catches KeyboardInterrupt and SystemExit (#4788) | ✅ #4811 (partial) | Closed |
| **P1** | Exec sessions have no shutdown cleanup — child processes become orphans (#4794) | ❓ None linked | Closed |
| **P2** | Shell execution without user confirmation — security risk (#5013) | ❓ None linked | Closed |
| **P2** | Cron `jobs.json` string timestamps cause TypeError (#4983) | ✅ #4983 | Closed |
| **P2** | UTF-16 surrogates on emoji content cause UnicodeEncodeError (#4952) | ✅ #4952 | Closed |

**Critical remaining risk**: PR #4987 (filesystem workspace binding with O_NOFOLLOW) is still open with **status: conflicting**. This directly addresses the OOM-from-read_file bug (#4785) and the shell bypass bug (#4594), both of which have security implications.

## 6. Feature Requests & Roadmap Signals

High-signal user requests that are likely candidates for the next release:

- **Ollama caching (#4867)** — Preserve exact prompt prefix to enable prompt caching. This is critical for local model usability. Expect a focused PR in the next 1-2 sprints given the 22-comment discussion volume.
- **User confirmation before shell execution (#5013)** — The user requested a middleware/guard mechanism in WebUI and loops, similar to LangChain. Given the security hardening trend, this is likely coming.
- **Model presets bound to sessions (#4866)** — PR #4866 is open and would allow per-session model selection, which pairs with the caching and thinking style work. Likely to land soon.
- **Voice/real-time channel tool gateway (#4911)** — The PR for this is experimental but aligns with the multi-modal trajectory. Probably v0.2 or later.
- **Configurable hidden settings sections (#4399)** — PR #4399 targets "normie-friendly" UI for multi-instance deployments. Still open after a month, suggesting lower priority.
- **Explicit skill context loading (#5018)** — PR #5018 would allow direct callers to preload explicitly requested skills. Open, but considered a quality-of-life improvement.

## 7. User Feedback Summary

**Dissatisfaction / Pain Points:**
- **Ollama performance is "totally unusable"**: User with 32GB VRAM reports +60 seconds per turn due to missing prompt caching (#4867). This is the most vocal complaint this cycle.
- **Security concerns are real and visible**: Users reporting plaintext API keys (#4803) and unconfirmed shell execution (#5013) show growing security awareness. The project's quick response (docs + fixes) is positive.
- **Chinese-language users are active**: Issues #5013 and #4934 were filed by Chinese-speaking users, indicating a growing non-English user base with specific provider concerns (DashScope, ModelScope).

**Satisfaction Signals:**
- User-reported bugs are being closed rapidly — the 10 closed issues today all had actionable fixes or documentation updates.
- The new **ModelScope provider (#4965)** directly addresses the Chinese open-source model ecosystem needs, likely improving satisfaction for that audience.
- Multiple users contributed PRs — 10 unique authors in the merged PRs today, indicating a healthy contributor community.

## 8. Backlog Watch

The following important items lack recent maintainer attention:

- **PR #4594 (Shell guard: extract absolute paths after equals sign)** — Open since June 29. Fixes a security bypass where `curl --output=/etc/passwd` could escape the shell workspace. Marked P1, **no activity in 22 days**. This is a security regression that should be prioritized. [🔗 PR #4594](https://github.com/HKUDS/nanobot/pull/4594)

- **PR #4987 (Bind workspace checks to opened files)** — Open since July 19 with **conflict** status. This is the primary fix for the OOM read_file bug (#4785) and also addresses the shell guard issue. Needs maintainer conflict resolution. [🔗 PR #4987](https://github.com/HKUDS/nanobot/pull/4987)

- **PR #4399 (Configurable hidden settings sections)** — Open since June 18, no recent activity. Would improve multi-instance admin UX but appears deprioritized. [🔗 PR #4399](https://github.com/HKUDS/nanobot/pull/4399)

- **PR #4866 (Bind model presets to sessions)** — Open since July 10, still actively updated. This is a significant architectural change that could enable the caching improvements requested in #4867. Worth watching. [🔗 PR #4866](https://github.com/HKUDS/nanobot/pull/4866)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-22

---

## 1. Today's Overview

Development activity on Hermes Agent remains extremely high, with **50 issues** and **50 pull requests** updated in the last 24 hours. The project currently carries **45 open/active issues** alongside **35 open PRs**, indicating a very active maintenance and feature cycle. Five issues were closed today, and 15 PRs were merged or closed (including two automated `fmt(js)` formatting fixes and a desktop billing feature). No new formal releases were cut. The community submitted a large batch of fresh bug reports and feature requests — particularly around secrets management, desktop stability, and tool platform extensibility — while a multi-PR salvage effort by contributor `teknium1` consolidates several previously-stalled security and credential-handling patches from forks.

---

## 2. Releases

**None.** No new releases today. The latest available version remains **v0.19.0**.

---

## 3. Project Progress

**15 PRs were merged or closed today**, including:

- **#68761** (`alt-glitch`) — *feat(desktop): native in-app downgrade — chargeless preview → schedule → undo*: Desktop billing downgrades now happen in-app without a portal redirect, with a pending-change flow and undo capability.
- **#68689** (`alt-glitch`) — *feat(cli): plan catalog on Free + plan= deep link + top-up/auto-refill copy split*: Brings non-TUI CLI billing to parity with the desktop billing feature.
- **#69062 & #69050** (`hermes-seaeye[bot]`) — Two auto-formatting PRs fixing ESLint/Prettier issues across the JS monorepo workspaces.

**Key salvage effort by `teknium1`** (7 PRs, all still open): A concentrated batch fixing secrets management, Bitwarden/1Password credential handling, MCP environment injection, and profile aliasing — many salvaging earlier contributor PRs that stalled (#37523, #41938, #40290, #58073, #51447, #60191, #62829, #60295, #67827).

---

## 4. Community Hot Topics

The most active discussions today (by comment count & reactions):

| Issue/PR | Comments | 👍 | Topic |
|---|---|---|---|
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) [CLOSED] | 8 | 0 | Web tools silently fail due to missing `_ensure_plugins_discovered()` — important stability fix now merged to main. |
| [#68915](https://github.com/NousResearch/hermes-agent/issues/68915) [OPEN] | 5 | 0 | Worker deadlock when LLM backgrounds a server via shell `&` — an urgent usability bug for dev-server workflows. |
| [#28049](https://github.com/NousResearch/hermes-agent/issues/28049) [OPEN] | 5 | 1 | Kimi CN (moonshot) streaming fails with brotli decompression errors — P3 but with high user impact for Chinese-region users. |
| [#64900](https://github.com/NousResearch/hermes-agent/issues/64900) [OPEN] | 5 | 0 | Feature request: allow plugins to extend `send_message` with platform-specific schemas — a significant extensibility gap. |
| [#42525](https://github.com/NousResearch/hermes-agent/issues/42525) [CLOSED] | 4 | 4 | *feat(desktop): allow changing workspace from Desktop UI* — highly upvoted feature, now implemented on main. |
| [#38786](https://github.com/NousResearch/hermes-agent/issues/38786) [CLOSED] | 4 | 2 | Hermes Desktop blocks local image display on Windows — P3 bug, fixed on main. |

**Analysis**: The community's strongest signals revolve around (1) making the desktop app reliable for day-to-day development (workspace selection, image rendering, session state), (2) fixing streaming issues with Chinese and Asian-language providers (Kimi CN, Thai combining marks), and (3) improving the plugin extension system to reduce the need for core edits.

---

## 5. Bugs & Stability

**New high-severity bugs reported today:**

| Issue | Severity | Summary | Fix PR? |
|---|---|---|---|
| [#69008](https://github.com/NousResearch/hermes-agent/issues/69008) | P2 | OpenRouter DeepSeek V4 Flash tool continuation fails: `thinking` content must be passed back | No |
| [#69031](https://github.com/NousResearch/hermes-agent/issues/69031) | P2 | Gemini Native API (`/v1beta`) fails with 401 and 400 errors — blocks Google AI Studio | No |
| [#69033](https://github.com/NousResearch/hermes-agent/issues/69033) | P2 | Windows terminal tool orphans child processes (bash/find/grep) — missing process-group detachment | No |
| [#68990](https://github.com/NousResearch/hermes-agent/issues/68990) | P2 | Thai combining marks dropped/doubled in TUI streamed rendering (stored content OK) | [#69032](https://github.com/NousResearch/hermes-agent/pull/69032) open |
| [#68858](https://github.com/NousResearch/hermes-agent/issues/68858) | P2 | v0.19 in-place compaction + FTS maintenance saturates disk I/O, wedges shutdown on large `state.db` | No |
| [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) | P2 | Desktop/TUI session leases leak over time, blocking new sessions — `max_concurrent_sessions` breaks | No |
| [#68979](https://github.com/NousResearch/hermes-agent/issues/68979) | P2 | Long-thread reconciliation re-stacks recent user messages at thread bottom after compression | No |
| [#68963](https://github.com/NousResearch/hermes-agent/issues/68963) | P3 | Discord slash-command sync silently fails on 429, exits without retry | No |
| [#68989](https://github.com/NousResearch/hermes-agent/issues/68989) | P3 | Telegram adapter hangs indefinitely at "Connecting" — only in full gateway, never isolated | No |
| [#69038](https://github.com/NousResearch/hermes-agent/issues/69038) | P3 | Desktop browser-generated HTML previews leak as duplicate composer includes across sessions | No |
| [#68682](https://github.com/NousResearch/hermes-agent/issues/68682) | P3 | Holographic memory crashes on dimension mismatch — `hrr_dim` not persisted | No |
| [#63679](https://github.com/NousResearch/hermes-agent/issues/63679) | P3 | Desktop app renders every assistant message twice after recent update | No |

**Notable regressions**: Issue #68858 describes a disk I/O saturation and gateway wedge on large `state.db` during compaction in v0.19 — a direct performance regression in the latest release. Issue #63679 (double-rendering) appears to be a recent desktop-app regression.

---

## 6. Feature Requests & Roadmap Signals

**New feature requests today:**

| Issue | Summary | Expected Priority |
|---|---|---|
| [#69043](https://github.com/NousResearch/hermes-agent/issues/69043) | Ephemeral session mode (`--ephemeral` flag) — no memory loaded, no state saved | P3 (needs-decision) |
| [#69025](https://github.com/NousResearch/hermes-agent/issues/69025) | Settings search bar for Desktop UI (~80+ config fields) | P3 (quality-of-life) |
| [#68701](https://github.com/NousResearch/hermes-agent/issues/68701) | Inject trusted network context into smart-approval guard LLM prompt (reduce false positives for private IPs) | P3 (needs-decision) |
| [#64900](https://github.com/NousResearch/hermes-agent/issues/64900) | Allow plugins to extend `send_message` schema and dispatch | P3 (needs-decision; strong community interest) |

**Roadmap signals**: The multi-PR salvage by `teknium1` indicates that **secrets management consolidation** (Bitwarden, 1Password, profile aliasing, stale-cache fallback) is a high priority for the maintainers. The two billing features merged today (`alt-glitch`) suggest **monetization/billing infrastructure** is actively being iterated on. The continued influx of desktop-app regressions and the highly upvoted workspace selection change (now merged) signal that **Desktop UI is the primary user-facing surface** and remains a key development focus.

**Likely next version inclusion**: Ephemeral sessions may wait; settings search bar is plausible for a near-term patch release. The multi-PR secrets salvage batch is likely to land as a coordinated set.

---

## 7. User Feedback Summary

**Satisfaction signals:**
- The closed issue #42525 (workspace change from Desktop UI) received 4 👍 — users are pleased this was addressed.
- #38786 (local image blocking on Windows, now fixed) had 2 👍 and positive closure.
- The billing in-app downgrade PR #68761 and CLI parity PR #68689 suggest users value frictionless billing management.

**Pain points (most vocal/upvoted):**
- **Deadlock when backgrounding a dev server** (#68915): A hard blocker for users running development workflows — the worker becomes unrecoverable. No fix PR yet.
- **Missing `send_message` plugin extensibility** (#64900, 5 comments): Frustration that adding a new platform requires editing core tool code instead of writing a plugin.
- **macOS permission resets after every update** (#52010, #43788, #43365): A long-standing pain point (1-2 comments each but spanning months) — Full Disk Access, microphone, and Accessibility permissions all reset. Users report this is "very impactful."
- **Thai combining marks corruption** (#68990): A specific but significant localization issue for Thai users; the fix PR #69032 is open.
- **Duplicate message rendering in Desktop** (#63679): A recent regression causing confusion.

---

## 8. Backlog Watch

**Long-unanswered important issues needing maintainer attention:**

| Issue | Age | Summary | Status |
|---|---|---|---|
| [#23207](https://github.com/NousResearch/hermes-agent/issues/23207) | 73 days | User asking how to use web search/fetch with Ollama (like in OpenClaw) — no maintainer response | Open, 3 comments |
| [#28049](https://github.com/NousResearch/hermes-agent/issues/28049) | 65 days | Kimi CN brotli streaming always fails — P3 but with 5 comments and 1 👍, no maintainer engagement | Open |
| [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) | 28 days | macOS Full Disk Access revoked after every Desktop update — P3, 2 comments, reproducible | Open |
| [#43788](https://github.com/NousResearch/hermes-agent/issues/43788) | 42 days | macOS microphone permission lost after updates — P3, 1 comment | Open |
| [#43365](https://github.com/NousResearch/hermes-agent/issues/43365) | 42 days | macOS TCC permissions reset after updates (Accessibility/Automation) — P3, 1 comment (in Chinese) | Open |

**PRs needing review:**
- **#53040** (WangYeYi, opened June 26) — *fix(desktop): preserve last-good build during before-pack cleanup*: P3, needs-decision, 0 comments. A quality-of-life fix for developers building Hermes Desktop on Windows. Stale for 26 days.

**Observations**: The macOS permission-reset family (#52010, #43788, #43365) has been reported across three separate issues over 42 days with no maintainer comment — this is a systemic UX problem that continues to frustrate macOS users after every update. The Kimi CN provider bug (#28049) is two months old with no maintainer engagement, potentially leaving Chinese-region users without a working streaming provider.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-22

## Today's Overview

PicoClaw shows **moderate activity** with 6 issues and 8 PRs updated in the last 24 hours. The project maintains a healthy balance of bug fixes (4 closed today), feature work, and community contributions. Two PRs were merged/closed today, and 3 were closed yesterday, indicating steady progress toward v0.3.2. However, several stale issues and PRs remain unresolved, and the backlog includes a critical reconnection bug that has been open for 19 days. The community is actively contributing across multiple channels (Matrix, Feishu, DingTalk, Anthropic, auth), demonstrating broad adoption.

---

## Releases

**No new releases today.** The latest stable version remains **v0.3.1** (reported in several open issues).

---

## Project Progress

### Merged/Closed PRs Today (last 24h)

| PR # | Title | Type | Impact |
|------|-------|------|--------|
| [#3282](https://github.com/sipeed/picoclaw/pull/3282) | feat(nodes): add policy-gated system exec | **New Feature** | Adds opt-in `system.exec.v1` to slim node companion — enforces companion-owned executable, working-root, environment, timeout, and output limits before durable acceptance. Significant for node security posture. |
| [#303](https://github.com/sipeed/picoclaw/pull/303) | fix: make bot greeting name configurable via bot_name setting | **Bug Fix** | Fixes hardcoded "PicoClaw" in Telegram `/start` greeting and DingTalk reply title. Now respects `bot_name` config for custom bot identity. |

### Other Closed/Stale PRs

| PR # | Title | Status | Notes |
|------|-------|--------|-------|
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | Fix pr 3222 backward compat | Closed | Backward compatibility fix — likely merged into v0.3.2 |

---

## Community Hot Topics

### Most Active Issues

1. **[#3088 — Feature: Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)**
   - **Comments:** 9 | **Reactions:** 2 👍
   - **Status:** OPEN, marked `help wanted`, `priority: high`, `stale`
   - **Analysis:** This is the most-discussed issue. The community strongly wants to replace the unmaintained `libolm` with `vodozemac` (the official Matrix replacement). Despite high priority and a clear proposal, it has been open for 43 days without resolution. This is a **security-critical dependency** that maintainers should prioritize.

2. **[#3153 — BUG: Volcengine Doubao tool call leakage](https://github.com/sipeed/picoclaw/issues/3153)**
   - **Comments:** 5
   - **Status:** CLOSED
   - **Analysis:** A significant bug where `doubao-seed-2.0-pro` occasionally leaks raw `<seed:tool_call>` XML to users instead of executing the tool. This was resolved, indicating good responsiveness to provider-specific issues.

3. **[#3281 — BUG: Web UI chat input laggy with long history](https://github.com/sipeed/picoclaw/issues/3281)**
   - **Comments:** 0 | **Created:** Today
   - **Status:** OPEN, fresh
   - **Analysis:** Brand new report of UI performance degradation as conversation history grows. Likely a DOM re-rendering or state management issue in the Web UI. Will need attention soon.

---

## Bugs & Stability

### High Severity

| Issue | Description | Severity | Fix Available? |
|-------|-------------|----------|----------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | **Matrix sync loop has no reconnection logic** — silent death after network/server disruption. Open 19 days, 1 👍. | **Critical** — silent failure, no recovery without manual restart | No fix PR yet |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | **Volcengine Doubao tool call leakage** — raw XML leaked to users | **High** — broken tool execution | CLOSED (fixed) |

### Medium Severity

| Issue | Description | Severity | Fix Available? |
|-------|-------------|----------|----------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Web UI chat input lag** with long history | **Medium** — degraded UX | None yet |
| [#3255](https://github.com/sipeed/picoclaw/issues/3255) | **DingTalk chat list preview shows "PicoClaw"** instead of message content | **Medium** — cosmetic but confusing | None yet |
| [#3232](https://github.com/sipeed/picoclaw/issues/3232) | **Rate limiting broken when no fallback models configured** | **Medium** — rate limiting silently fails | CLOSED (likely fixed in v0.3.2) |

### Stability Note
- PR [#3282](https://github.com/sipeed/picoclaw/pull/3282) (merged today) adds **policy-gated system exec** with security enforcement — a positive step for node execution stability.
- PR [#3279](https://github.com/sipeed/picoclaw/pull/3279) (open) aims to fix another **tool-call format leakage** bug triggered by seahorse summaries — same class as #3153, suggesting systemic fragility in tool-call output formatting.

---

## Feature Requests & Roadmap Signals

### Top User-Requested Features

1. **Replace libolm with vodozemac** ([#3088](https://github.com/sipeed/picoclaw/issues/3088))
   - 🌟 Likely for **v0.4.0** — security-critical, marked high priority, but blocked or deprioritized for 43 days.
   
2. **Configurable default fallback chain in Web UI** ([#3200](https://github.com/sipeed/picoclaw/pull/3200) — open PR)
   - **PR is ready** but not yet merged. Would allow users to set default models + fallback ordering in the UI.
   
3. **Anthropic prompt caching via SystemParts** ([#3228](https://github.com/sipeed/picoclaw/pull/3228) — open PR)
   - Necessary for `cache_control` markers on Anthropic. Currently blocked because system messages are flattened to a single string.

### Prediction: Next Version (v0.3.2) Likely Includes
- ✅ Policy-gated system exec (#3282 — already merged)
- ✅ Bot name configurability (#303 — already merged)
- ✅ Rate limiting fix (#3232 — closed)
- ⏳ Anthropic SystemParts support (#3228 — open, 15 days stale)
- ⏳ Tool-call format leak fix (seahorse variant) (#3279 — open, just filed)

---

## User Feedback Summary

### Pain Points

- **Matrix channel is unreliable** — "silent death" on network disruption (#3203) is the most serious stability complaint. A user reported that `systemd Restart=on-failure` doesn't help because the process stays alive.
- **Tool calls leak into output** in multiple providers (Volcengine Doubao #3153, seahorse summaries #3279). This degrades trust in agent responses.
- **DingTalk UX is incomplete** — the chat list preview shows "PicoClaw" instead of actual message content (#3255), making the app feel unfinished.
- **Web UI becomes unusable** with long conversation history (#3281) — a regression or missing optimization in the frontend.
- **Rate limiting is confusing** — doesn't work without fallback models (#3232), which many users don't set.

### Satisfaction Signals

- The community is actively contributing **fixes** — 8 open PRs, most with clear bug-fix or feature goals.
- Users value **custom identity** — the fix for configurable bot name (#303) had two independent contributors (Telegram and DingTalk).
- **Security-conscious users** are pushing for vodozemac adoption (#3088) and praising the policy-gated exec PR (#3282).

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Days Open | Last Update | Why Urgent |
|-------|-----------|-------------|------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | **43 days** | 1 day ago | `priority: high`, `help wanted` — security dependency replacement, 9 comments, 2 upvotes. Has more community engagement than any other open issue. |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | **19 days** | 1 day ago | **Critical bug** — Matrix sync loop has no reconnection logic. Silent death on network disruption. Requires manual restart. No fix in sight. |
| [#3255](https://github.com/sipeed/picoclaw/issues/3255) | **8 days** | 1 day ago | DingTalk UX bug — low severity but makes the channel look broken to end users. |

### Stale PRs Needing Review

| PR | Days Stale | Summary | Blocking? |
|----|------------|---------|-----------|
| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | 8 days | Feishu audio/video native message type support | No — enhancement, not blocking |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | 16 days | Anthropic SystemParts + cache_control | **Yes** — blocks Anthropic prompt caching for all users |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 21 days | Configurable default fallback chain in Web UI | No — but highly requested feature |

### Key Concern
Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) (vodozemac migration) has the **highest combined urgency and community investment** (9 comments, 2 thumbs up, `help wanted`, `priority: high`) but has been open for 43 days with no resolution or assignment. If this is being deferred deliberately, maintainers should communicate the timeline or seek additional contributors.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-22

## Today's Overview
NanoClaw shows **moderate activity** today with 12 pull requests updated in the last 24 hours, including 3 merged/closed, and 1 open issue. The project remains in a **healthy development cycle** with contributions focused on channel integrations, container fixes, and documentation improvements. No new releases were published today. The community is actively contributing both features (LINE channel, Dial integration) and critical bug fixes (WhatsApp media handling, SELinux compatibility, Telegram Markdown parsing).

## Releases
**No new releases** were published today. The project does not appear to have shipped a versioned release in the reported period.

## Project Progress
**Merged/Closed PRs (3 today):**
- [#3116 - sync pr](https://github.com/nanocoai/nanoclaw/pull/3116) — Synced branch per contributing guidelines (closed)
- [#3114 - Langfuse tracing skill pr](https://github.com/nanocoai/nanoclaw/pull/3114) — New Langfuse tracing integration skill (closed)
- [#3095 - docs: rewrite branch maintenance guide for the registry-branch model](https://github.com/nanocoai/nanoclaw/pull/3095) — Core-team documentation improvement (closed)

**Key feature advances in open PRs:**
- [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — Adds **Dial** as a new channel to the setup wizard (feature skill)
- [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) — Traditional Chinese README translation (docs)

## Community Hot Topics
**Most Notable Activity:**

1. **[#3096 - feat: Add /add-line skill for LINE Official Account](https://github.com/nanocoai/nanoclaw/issues/3096)** (3 comments, updated 2026-07-21)  
   *Analysis:* The sole open issue is a feature request for LINE channel support—the dominant messenger in Japan, Taiwan, and Thailand. The author notes there is no existing `@chat-adapter/line` package, indicating this would require new adapter development. The request follows the project's RFS (Request for Skills) process. Given the same author (#joshm1230212) also contributed the Chinese Traditional README PR [#2950](https://github.com/nanocoai/nanoclaw/pull/2950), this signals growing interest from **East Asian markets** where LINE is essential.

2. **[#3050 - feat(setup): add Dial to channel picker](https://github.com/nanocoai/nanoclaw/pull/3050)** — Channel integrations remain the hottest topic, with both LINE and Dial being proposed simultaneously.

## Bugs & Stability
**Total bug-related PRs updated today: 6**

| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| **Critical** | [#3111](https://github.com/nanocoai/nanoclaw/pull/3111) | Telegram legacy-Markdown parser drops messages containing URLs with underscores (e.g., GitLab `/-/merge_requests/`). Permanent message loss after 3 retries with no operator visibility. | Open (fix PR exists) |
| **High** | [#2896](https://github.com/nanocoai/nanoclaw/pull/2896) | WhatsApp media-failure note regression on the approval-answer path—`appendMediaFailureNote` applied before pending-question handler produces incorrect responses when approvers answer. | Open (fix PR exists) |
| **Medium** | [#3113](https://github.com/nanocoai/nanoclaw/pull/3113) | WhatsApp inbound media not staged where the container can read it—prevents media processing in containerized deployments. | Open (fix PR exists) |
| **Medium** | [#1530](https://github.com/nanocoai/nanoclaw/pull/1530) | Docker volume mounts fail on SELinux-enforcing systems (Fedora, RHEL) without `:z` relabeling flag. Safe fix that is a no-op elsewhere. | Open (fix PR exists, opened March 2026) |
| **Medium** | [#2236](https://github.com/nanocoai/nanoclaw/pull/2236) | Container WORKDIR mismatch: `container-runner.ts` mounts at `/workspace/agent` but Dockerfile uses `/workspace/group`, leaving agent workspace invisible. | Open (fix PR exists, opened May 2026) |
| **Low** | [#3115](https://github.com/nanocoai/nanoclaw/pull/3115) | Legacy Gmail API routes not blocked by OneCLI—potential leakage through `www.googleapis.com` instead of `gmail.googleapis.com`. | Open (fix PR exists) |

**Worst bug:** The **Telegram Markdown issue (#3111)** is the most severe because it causes **silent permanent message loss** with no error surfaced to the operator or agent.

## Feature Requests & Roadmap Signals
**Active requests with development activity:**

1. **LINE channel integration** — [Issue #3096](https://github.com/nanocoai/nanoclaw/issues/3096) (new, 3 comments). Requires building a new `@chat-adapter/line` package. *Likely targeting v1.3 or v1.4 given community momentum.*
2. **Dial channel integration** — [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) (open, feature skill). Adds Dial to the channel picker and wizard. *Close to merge given it's been open since 2026-07-14.*
3. **Langfuse tracing** — [PR #3114](https://github.com/nanocoai/nanoclaw/pull/3114) (already merged). Adds observability/tracing capability. *Likely to be included in the next release.*
4. **PostgreSQL port collision fix** — [PR #3112](https://github.com/nanocoai/nanoclaw/pull/3112) documents a real-world setup issue where OneCLI's bundled Postgres collides with existing host PostgreSQL on port 5432. *Clear user pain point, likely to be patched in next minor release.*

**Prediction for next release:** The next version will likely include Dial channel integration, Langfuse tracing, and the Telegram URL fix as a patch-level release.

## User Feedback Summary
**Pain points observed today:**
- **Silent message loss in Telegram** (#3111) — "permanently dropping the message after 3 delivery retries with no visible error" is a severe trust-eroding issue for production users.
- **WhatsApp media failures** (#2896, #3113) — Two separate but related WhatsApp bugs suggest the media pipeline in containerized deployments is fragile.
- **Setup friction** (#3112) — PostgreSQL port collisions during OneCLI setup are a real blocker for users who already run Postgres on their machine.
- **SELinux incompatibility** (#1530) — Long-standing (since March) Docker volume issue affecting Fedora/RHEL users, still open after 4 months.

**Positive signal:** The author of the LINE channel request (#joshm1230212) also contributed a Traditional Chinese README, indicating enthusiastic community members are both **documenting** and **building** for their regional needs.

## Backlog Watch
**Items needing maintainer attention:**

1. **SELinux `:z` label fix** — [PR #1530](https://github.com/nanocoai/nanoclaw/pull/1530) (opened 2026-03-29, **115 days stale**). Simple Docker volume mount change that blocks an entire OS ecosystem. *Low risk, high impact—should be fast-tracked.*
2. **Container WORKDIR mismatch** — [PR #2236](https://github.com/nanocoai/nanoclaw/pull/2236) (opened 2026-05-03, **80 days stale**). A clear bug where the agent's workspace is invisible when running inside containers. *Maintainers should triage and merge or provide feedback.*
3. **WhatsApp media regression (approval path)** — [PR #2896](https://github.com/nanocoai/nanoclaw/pull/2896) (opened 2026-06-30, **22 days old**). A follow-up to a merged PR (#2895) that introduced a regression. *This is a fix-for-a-fix situation and should be prioritized to prevent user confusion.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-22

## Today's Overview

IronClaw remains in an intense pre-v1.0 launch phase, with the team executing against the **Reborn rearchitecture** at high velocity. Activity is very high: 41 issues updated and 50 PRs updated in the last 24 hours, reflecting aggressive parallel work across architecture consolidation, QA automation, and production cutover readiness. The first release candidate (ironclaw-v1.0.0-rc.1) dropped on July 20, confirming the project is approaching a major stable release. The core team is simultaneously closing out architecture debt (in-memory store removal, witness consolidation), hardening the Reborn WebUI, and building the automated QA pipeline required for v1.0 confidence.

---

## Releases

**ironclaw-v1.0.0-rc.1** — Released 2026-07-20
[Release: ironclaw-v1.0.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.0.0-rc.1)

This is **not** an incremental release on the 0.29.x line. It is a ground-up rebuild of the agent runtime, storage, extension host, and web UI — the "Reborn" architecture. The `ironclaw` binary is now the rearchitected CLI, built as a v1 monolith. Major areas of change:
- All-new agent runtime (rearchitected)
- Reworked storage layer
- New extension host
- Rebuilt WebUI v2 frontend
- Breaking changes relative to v0.x are pervasive; migration requires configuration and workspace re-initialization

**Migration Notes (implied):** Operators on 0.29.x should treat this as a fresh install. The project's epic tracking suggests a controlled cutover gated by compatibility issue #3020.

---

## Project Progress

**17 PRs merged/closed today**, including major architectural milestones:

### Architecture Consolidation
- **[#6432](https://github.com/nearai/ironclaw/pull/6432) — merged:** `feat(reborn): witness always-present + §5.2.1 origin→gate matrix + dispatch-through-witness`. Completes the witness-always-present and origin→gate matrix portions. Lays foundation for fully authenticated capability dispatch without loose DTOs.
- **[#6430](https://github.com/nearai/ironclaw/pull/6430) — merged:** `Remove in-memory ratchet stores`. Migrates durable cases to filesystem-backed stores, decommissioning the InMemoryTurnStateStore tracked in issue #6263.
- **[#6436](https://github.com/nearai/ironclaw/pull/6436) — open:** `sole-witness dispatch input + HIGH review fixes`. Carries two HIGH review fixes that missed the #6432 merge, plus further deletions of loose dispatchers.
- **[#6438](https://github.com/nearai/ironclaw/pull/6438) — open:** `Seal process redispatch authority`. Replaces the production dispatcher request DTO with sealed `Authorized` dispatch, addressing issue #6434.

### QA & Test Infrastructure
- **[#6439](https://github.com/nearai/ironclaw/pull/6439) — open:** `test(reborn): replay all harvested QA traces with Emulate.dev`. Adds a generic mock-LLM adapter that replays harvested Reborn QA traces (42 model traces from #6422) as parameterized executable tests.
- **[#6422](https://github.com/nearai/ironclaw/pull/6422) — open:** `test(live-qa): harvest full per-case LLM trace catalog`. Persists model response traces from live-QA runs, enabling deterministic replay testing.
- **[#6437](https://github.com/nearai/ironclaw/pull/6437) — open:** `fix(reborn): make model-visible failures recoverable`. Routes failures through typed recovery paths to ensure model sees actionable error information.

### WebUI & Frontend
- **[#6425](https://github.com/nearai/ironclaw/pull/6425) — open:** `fix(webui): restore SSE streams across navigation`. Fixes SSE lifecycle when navigating between threads/tabs/extensions during active runs.
- **[#6440](https://github.com/nearai/ironclaw/pull/6440) — open:** `chore(deps): bump dompurify`. Security dependency update for the WebUI frontend.

### Dependency & Build
- **[#6431](https://github.com/nearai/ironclaw/pull/6431) — open:** `chore(deps): bump everything-else group with 26 updates`. Mass dependency bump (async-trait, thiserror, uuid, etc.).
- **[#6428](https://github.com/nearai/ironclaw/pull/6428) — open:** `chore(deps): bump tokio-ecosystem`. Tokio, tokio-postgres-rustls, tower-http updates.

---

## Community Hot Topics

### Most Active Issues

1. **[#2987](https://github.com/nearai/ironclaw/issues/2987) — [OPEN] Epic: Track Reborn architecture landing strategy** (44 comments)
   The parent epic tracking the entire Reborn delivery. Updated continuously since April; the final landing shape documentation was last revised May 9. This is the single most important coordination issue in the project, organizing PR groupings and integration sequencing for the ground-up rewrite.

2. **[#6389](https://github.com/nearai/ironclaw/issues/6389) — [OPEN] Phase 4: collapse build_local_runtime + build_production_shaped** (10 comments)
   Active discussion on unifying two runtime assembly paths into one `build_runtime(cfg)`. Directly impacts production cutover for v1.0.

3. **[#6263](https://github.com/nearai/ironclaw/issues/6263) — [CLOSED] InMemoryTurnStateStore retirement** (10 comments)
   Closed by PR #6430 today. Was the last in-memory store debt item after the full A1–A8 slice series. This closure is a major milestone for architecture purity.

4. **[#6396](https://github.com/nearai/ironclaw/issues/6396) — [CLOSED] Witness always-present + dispatch-routes-through-witness** (0 comments, but drove multiple PRs)
   Addressed by #6432 (merged) and partially by ongoing #6436/#6438. The lynchpin for the new authorization model.

### Analysis
The community (heavily core-team driven at this stage) is focused on **production readiness** and **architecture simplification**. The most active issues represent the final blockers before v1.0.0 stable: store consolidation, runtime path unification, and authorization witness completion.

---

## Bugs & Stability

### High Severity (fix PRs exist or merged today)

| Bug | Status | Notes |
|-----|--------|-------|
| **Model-visible failures not recoverable** ([#6437 PR](https://github.com/nearai/ironclaw/pull/6437)) | Fix open | Routes failures through typed recovery paths so model sees actionable error info. Directly addresses epic [#6284](https://github.com/nearai/ironclaw/issues/6284) (error-recoverability endgame). |
| **WebUI SSE streams break across navigation** ([#6425 PR](https://github.com/nearai/ironclaw/pull/6425)) | Fix open | SSE lifecycle failure when navigating while runs active — critical for UX continuity. |

### Medium Severity (reported or tracked)

| Bug | Status | Notes |
|-----|--------|-------|
| **Dogfooding bugs 07/20-07/24** ([#6394](https://github.com/nearai/ironclaw/issues/6394)) | Open epic | Active dogfooding sprint collecting QA bugs; no specific regressions isolated yet, but this is the current bug-catching period. |
| **In-memory store retirement** ([#6263](https://github.com/nearai/ironclaw/issues/6263)) | Closed today | Eliminates a class of potential memory-leak and consistency bugs by removing in-memory-only stores. |

### Security
- **dompurify dependency** — bumped from 3.2.3 to 3.4.12 ([#6440](https://github.com/nearai/ironclaw/pull/6440)) — XSS sanitization library; security-critical for WebUI.

---

## Feature Requests & Roadmap Signals

### New User-Facing Request
- **[#6433](https://github.com/nearai/ironclaw/issues/6433) — [OPEN] Dedicated custom instructions / master prompt section** (created today by sergeiest)
  Request for a dedicated UI section for custom instructions/personalization settings (similar to ChatGPT/Claude). Current workaround requires feeding instructions into each chat. **Prediction:** Likely to land in a v1.0.x follow-up; the infrastructure (Reborn UI, Reborn workspace config) is already being built in epic [#3036](https://github.com/nearai/ironclaw/issues/3036) (Configuration-as-Code).

### Ongoing Feature Delivery
- **Per-user hosted-MCP discovery** ([PR #6365](https://github.com/nearai/ironclaw/pull/6365)) — Draft/reference PR for porting worker-agent connector tools. This is part of the "managed agents" capability being ported to the Reborn stack.
- **Google extension capabilities** ([PR #5503](https://github.com/nearai/ironclaw/pull/5503)) — Adds compact Gmail + Google Calendar capabilities with `fetch_message_summaries` for inbox triage.
- **Design system tokens + /playground** ([PR #5563](https://github.com/nearai/ironclaw/pull/5563)) — WebUI v2 design system for AI-implementable improvements, currently in design-review hold.

### Roadmap Predictions for v1.0.x
- Approval parity with V1 ([#4539](https://github.com/nearai/ironclaw/issues/4539))
- Self-serve secret setup for user-generated tools ([#4545](https://github.com/nearai/ironclaw/issues/4545))
- Multi-account support for messaging channels ([#2392](https://github.com/nearai/ironclaw/issues/2392))
- Configuration-as-Code tenant blueprints ([#3036](https://github.com/nearai/ironclaw/issues/3036))

---

## User Feedback Summary

### Direct User Pain Points (from issues and feature requests)

| Issue | Pain Point | Sentiment |
|-------|------------|-----------|
| [#6433](https://github.com/nearai/ironclaw/issues/6433) | No dedicated custom instructions UI — must re-feed context per chat | Negative (missing parity with ChatGPT/Claude) |
| [#2355](https://github.com/nearai/ironclaw/issues/2355) | No persistent multi-identity browser automation | Negative (blocker for real deployments) |
| [#2392](https://github.com/nearai/ironclaw/issues/2392) | Single account per channel blocks WeCom/Telegram multi-identity use | Negative (blocking deployments) |
| [#4545](https://github.com/nearai/ironclaw/issues/4545) | No self-serve secret setup for user-generated tools | Negative (operational friction) |
| [#4539](https://github.com/nearai/ironclaw/issues/4539) | Reborn lacks V1 approval parity (approve once, always allow) | Negative (missing feature parity) |

### Positive Signals
- **QA harness maturation** (#6439, #6422) — the community/team is investing heavily in deterministic testing infrastructure, which historically correlates with improved user experience and fewer regressions.
- **Dogfooding sprint** (#6394) — active bug-finding period July 20-24 shows the team is prioritizing real-world usage validation before v1.0 stable.
- **Historical epics closing** — #6263 (in-memory stores) and #6396 (witness dispatch) being resolved indicates the architecture is solidifying.

---

## Backlog Watch

### Long-Open Epics Needing Visible Progress

| Issue | Age | Status | Priority Concern |
|-------|-----|--------|------------------|
| **[#2355](https://github.com/nearai/ironclaw/issues/2355)** Persistent browser automation | ~3 months | Open, no recent PRs | High — blocking deployment scenarios; last activity was comment on July 21 but no linked PRs |
| **[#2392](https://github.com/nearai/ironclaw/issues/2392)** Multi-account channel support | ~3 months | Open, no recent PRs | High — blocks WeCom, Telegram multi-identity |
| **[#2828](https://github.com/nearai/ironclaw/issues/2828)** Harness testing unification | ~3 months | Open, but sub-tasks being worked | Medium — PR #6422/#6439 are making progress but epic not closed |
| **[#3484](https://github.com/nearai/ironclaw/issues/3484)** Reborn Contributor Runway | ~2.5 months | Open, no recent PRs | Medium — this is the parallel porting enabler; if stalled, external contributions will suffer |
| **[#3773](https://github.com/nearai/ironclaw/issues/3773)** Crate boundary/ownership audit | ~2 months | Open, no recent PRs | Medium — technical debt that could slow new contributors |

### PRs Needing Review or Rebase

| PR | Age | Concern |
|----|-----|---------|
| **[#5598](https://github.com/nearai/ironclaw/pull/5598)** Release automation | ~19 days | Still open; this is the release PR that would publish crates. Blocking on final review/tagging. |
| **[#5503](https://github.com/nearai/ironclaw/pull/5503)** Google extension capabilities | ~21 days | "Experiment" label; may be deprioritized ahead of v1.0.0 stable. |
| **[#5563](https://github.com/nearai/ironclaw/pull/5563)** Design system tokens + /playground | ~20 days | Awaiting design leadership direction; paused in favor of v1 launch. |

### Maintainer Attention Needed
- **[#6394](https://github.com/nearai/ironclaw/issues/6394)** Dogfooding bug epic (created today) — this is the active bug-catching sprint; maintainers should prioritize closing these bugs before v1.0.0 stable.
- The mass dependency bumps ([#6431](https://github.com/nearai/ironclaw/pull/6431), [#6428](https://github.com/nearai/ironclaw/pull/6428)) are uncontroversial but should be merged promptly to minimize CI lag.

---

**Project Health:** 🟢 **High velocity toward v1.0** — The Reborn rearchitecture is landing slice by slice, with store consolidation, authorization witnesses, and QA infrastructure reaching completion. The dogfooding sprint and the release candidate signal a stable release is imminent (weeks, not months). The primary risk is the number of large open PRs (#6436, #6437, #6438, #6439, #6441, #6442) all at XL size — coordination burden is high, but the epic structure (#2987, #3031) provides clear sequencing. User-facing feature gaps (custom instructions, multi-account, approval parity) appear planned for v1.0.x follow-ups rather than the initial stable cut.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 22, 2026.

---

## LobsterAI Project Digest: 2026-07-22

### 1. Today's Overview

The project shows **high velocity**, with 10 pull requests (PRs) updated in the last 24 hours and a **50% merge/close rate**. While no new releases were cut today, the team focused heavily on fixing core interaction bugs and polishing premium features like Artifacts and a new sidebar ad toggle. Activity was driven primarily by internal maintainers (`yaodong-shen`, `liugang519`, `fisherdaddy`), suggesting a sprint or release preparation cycle. Community contributions were minimal, with activity limited to automated dependency bumps.

### 2. Releases

**None.** No new versions were published today.

### 3. Project Progress

Five PRs were merged or closed today, signaling significant progress in stability and user experience:

- **[Artifacts & Sharing Flow Fixes]** (PR #2370, #2369): The team unified the subscription interception logic for Artifact sharing and deployment. The flow was redesigned to prevent automatic share creation on dialog open, explicitly requiring "Create Share" or "Update Access" actions. This resolves UI confusion and prevents accidental resource exposure.
- **[Browser Annotation Sync]** (PR #2371): Fixed a bug where clearing draft annotations did not stop the underlying WebView annotation session, leaving the UI in a stale "editing" state. The fix also enhances element styling diff display in prompts.
- **[Silent Windows Updates]** (PR #2368): Merged a feature that deploys the Windows NSIS installer silently via PowerShell, handling UAC elevator failures gracefully with localized error messages.
- **[Token Proxy SSE Fix]** (PR #2372): Closed a fix addressing stream truncation in the OpenClaw token proxy, improving output reliability for long responses.

### 4. Community Hot Topics

The most active issue this window is a critical UX bug, while a developer-oriented PR shows strong sentiment regarding privacy.

- **Issue #1861 (Critical UX Bug - Image Attachment Sync)** - [Link](https://github.com/netease-youdao/LobsterAI/issues/1861)
    - *Comments:* 2 | *Status:* Open (since April 2026)
    - *Analysis:* This is the **hottest topic** due to its direct impact on daily chat workflow. Users report that switching between vision and non-vision models leaves stale image payloads (base64 or file paths) in the prompt, causing models to fail or ignore images. The lack of a `dataUrl` refresh breaks the core "switch models on the fly" use case. This has been open for nearly 3 months, indicating high friction. **Correction:** A fix PR (#2373) was opened today (see Bugs & Stability).

- **PR #2374 (Hide Sidebar Ad Banner)** - [Link](https://github.com/netease-youdao/LobsterAI/pull/2374)
    - *Status:* Open (Authored by `bunnysayzz`)
    - *Analysis:* Although low in comment count, this feature addresses a direct user request from issue #2342. It moves the ad dismissal from a temporary "X" button to a permanent "Settings → General" toggle. This signals strong user demand for **privacy and visual clarity**, potentially indicating dissatisfaction with the current ad model frequency.

### 5. Bugs & Stability

High activity was observed around image state management and SSE data integrity.

- **[HIGH] Image Attachment State Sync (Issue #1861)** - [Link](https://github.com/netease-youdao/LobsterAI/issues/1861)
    - *Severity:* **High** (Data loss / Incorrect AI output)
    - *Fix Status:* **Yes** (PR #2373)
    - *Description:* The core prompt builder fails to strip `dataUrl` from attachments when switching to a non-vision model and fails to generate `dataUrl` when switching to a vision model. This causes visual models to receive file paths instead of image data.
    - *Resolution Path:* PR #2373 (`yaodong-shen`) directly addresses this by syncing the attachment payload with the current model's capabilities.

- **[MEDIUM] SSE Truncation in Token Proxy (PR #2372)** - [Link](https://github.com/netease-youdao/LobsterAI/pull/2372)
    - *Severity:* **Medium** (Response quality)
    - *Status:* **Closed (Fixed)**
    - *Description:* A truncation bug in the OpenClaw token proxy caused streamed responses to cut off prematurely. This was fixed and merged today.

### 6. Feature Requests & Roadmap Signals

- **Permanent Ad Suppression (PR #2374):** A strong signal that the community wants control over UI clutter. This is likely to land in the next minor release, as it is already in code review.
- **Artifact Subscription Gating (PR #2370):** The addition of uniform subscription interception for sharing/deployment suggests the team is formalizing a **premium tier** for collaboration features. Future versions are likely to expand this paywall to file sharing and local service deployment.

### 7. User Feedback Summary

- **Pain Point (Mid-Term):** The image attachment sync bug (#1861) has been a long-standing irritation (open since April). Power users switching between vision models (e.g., from GLM to Doubao) are forced to delete and re-add attachments to ensure correct model input.
- **Satisfaction (High):** The quick turnaround on the artifact sharing flow (PRs #2369, #2370) suggests developers are responsive to feedback regarding clunky UI flows.
- **Expectation:** Users expect the application to "just work" when switching models. The fact that a fix landed on the same day as a review of the old bug (PR #2373) indicates this was a priority for the dev team.

### 8. Backlog Watch

The following items have been **stale for over 3 months** and represent growing technical debt:

- **PR #1279 - Bump `cross-env` (9.x → 10.x)** - [Link](https://github.com/netease-youdao/LobsterAI/pull/1279)
    - *Status:* Open | *Last Update:* July 21, 2026 (Stale)
    - *Risk:* Security advisories may have been issued for the older `cross-env` version. Dependencies that are 3 major versions behind risk breaking compatibility.

- **PR #1280 - Bump `react-dom` (18.x → 19.x)** - [Link](https://github.com/netease-youdao/LobsterAI/pull/1280)
    - *Status:* Open | *Last Update:* July 21, 2026 (Stale)
    - *Risk:* Key architectural improvements in React 19 (e.g., concurrent features, server components) are blocked. This dependency stall could slow future feature development.

- **PR #1281 - Bump `vite` (5.x → 8.x)** - [Link](https://github.com/netease-youdao/LobsterAI/pull/1281)
    - *Status:* Open | *Last Update:* July 21, 2026 (Stale)
    - *Risk:* These major version jumps are high-risk, requiring careful testing. The backlog here suggests maintainers are prioritizing feature work over build tooling upgrades, but the gap is widening.

**Recommendation:** The three Dependabot PRs (1279, 1280, 1281) should be prioritized for review. They are low complexity but high risk if left stale, and they are blocking the rest of the dependency pipeline.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-22**.

---

## Moltis Project Digest – 2026-07-22

### 1. Today's Overview
Activity on the Moltis repository was minimal over the last 24 hours, indicating a low-velocity period for the project. One open feature request received a new comment after a long dormancy, while a single automated dependency pull request was opened but remains unmerged. There were no new releases, no merged pull requests, and no closed issues, suggesting the core maintainers may be focused on review or internal development rather than active merging.

### 2. Releases
No new releases were published in the last 24 hours. The most recent release remains unreported in this digest window.

### 3. Project Progress
No pull requests were merged or closed in the last 24 hours. One pull request remains open:
- **PR #1161** (Open, Dependencies): A Dependabot update proposing an upgrade of `astro` from 7.0.9 to 7.1.3 in the project’s `/docs` directory. This is a routine maintenance task and has not yet been reviewed.

### 4. Community Hot Topics
One issue is currently the center of community discussion:
- **Issue #574** – *[Feature]: Model Routing Per topic* (Open, Updated today after 3 months)  
  - **Activity:** 5 comments, 1 reaction (👍).  
  - **Analysis:** This feature request seeks the ability to route different conversational topics to different LLM models. The fact that it was reopened or commented on today suggests that the community is actively discussing how to implement more granular control over inference backends. This reflects a growing need for **multi-model orchestration** within AI agents.

### 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. No fix-related PRs were submitted.

### 6. Feature Requests & Roadmap Signals
- **Issue #574** – *Model Routing Per topic* (Open, 3 months old but receiving updates today).  
  - **Prediction:** While this is a complex architectural request, the renewed interest today could push it onto the roadmap for an upcoming minor release (e.g., v0.x). If the maintainers engage, we may see a design discussion or prototype in the next 4–6 weeks.

### 7. User Feedback Summary
User sentiment is currently neutral due to the low activity. The single active issue (#574) indicates a desire for **smarter, topic-aware model selection** rather than a static model assignment. This suggests users are hitting limitations when trying to use a single model for diverse tasks (e.g., code generation vs. creative writing) and want dynamic, context-based routing.

### 8. Backlog Watch
- **Issue #574** – *Model Routing Per topic* (Created 2026-04-06, updated 2026-07-22)  
  - **Status:** This issue has been open for 107 days without a maintainer assignment or official response. The new comment today re-engages the community, but a maintainer acknowledge or roadmap tagging is recommended to signal intent.  
  - **Link:** [Issue #574](https://github.com/moltis-org/moltis/issues/574)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-22

## Today's Overview

CoPaw remains highly active with **42 issues** and **50 pull requests** updated in the last 24 hours, reflecting sustained contributor momentum. A **new release (v2.0.1-beta.1)** shipped, primarily containing a critical Tauri entry-point fix and memory subsystem error handling. The project is in a transitional phase between v1.x and v2.0, with several stability regressions being actively reported and addressed — notably around session context contamination, infinite loops, and performance overhead. Community engagement is strong, with multiple first-time contributors submitting PRs and the long-standing help-wanted task list (#2291) continuing to attract new work.

## Releases

- **v2.0.1-beta.1** ([Release page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.1))
  - **Fixes:**
  - Absolute import fix in Tauri entry point (PR #6234)
  - Catch `OSError` in `memoryspace._saved_tool_refs` to prevent crashes during memory operations
  - **Chores:** Version bump to 2.0.1b1 (PR #6266)
  - **Breaking Changes:** None identified
  - **Migration Notes:** This is an incremental beta release; users on v2.0.0.post3 can upgrade directly.

## Project Progress

**30 pull requests were merged or closed** in the last 24 hours. Key advances:

- **Governance & Sandbox:** PR #5088 (initial governance & sandbox interface) and PR #5546 (generalized governance policy pattern) both closed after long review cycles — foundational work for secure agent operation.
- **Channel Architecture:** PR #6159 (refactor channel base) moved per-turn token/context settlement from `ConsoleChannel` to `BaseChannel`, standardizing usage tracking across all channels.
- **Agent Configuration UX:** PR #6262 added one-click agent configuration copy (POST /agents/clone) — merged.
- **Console Experience:** PR #6195 refactored context/token usage display from per-message to session-level indicator; PR #6325 adds built-in tool documentation browser in Console.
- **Scroll Context Management:** PR #6323 introduces staged compaction and pointer-backed task continuity to improve the Scroll context mode.
- **OMP Integration:** PR #5882 (OMP workflow modes) closed and merged, adding five workflow modes (UltraQA, Ralph, Ultrawork, Autopilot, Team) plus `spawn_subagent` enhancements.
- **First-Time Contributors:** PR #6312 (configurable theme/skin module draft) and PR #6203 (Windows tasklist probe hardening) show healthy new-contributor onboarding.

## Community Hot Topics

1. **#2291 — Help Wanted: Open Tasks** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/2291)) - **65 comments**  
   *The project's central contributor coordination thread remains the most active discussion. Users continue claiming tasks, indicating healthy community engagement.*

2. **#6257 — Multiple tool calls produce identical thinking output** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/6257)) - **13 comments** (CLOSED)  
   *High-severity bug affecting Qwen3 family models. When an agent issues multiple tool calls in one turn, each call's thinking block contains identical content rather than per-call reasoning. Likely a model or prompt formatting issue.*

3. **#6318 — Support conversation-level model binding** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/6318)) - **6 comments** (OPEN)  
   *Feature request from enterprise users needing different models per conversation within the same agent. PR #5992 (per-session model overrides) is already open and may directly address this.*

4. **#4873 — Two subagents cause infinite polling loop** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/4873)) - **5 comments** (CLOSED)  
   *Concurrency bug where spawning two subagent tasks as background tasks triggers excessive `check_agent_task` calls, causing LLM request flooding and Feishu-side interrupt failure.*

## Bugs & Stability

| Severity | Issue | Description | Status | Fix PR |
|----------|-------|-------------|--------|--------|
| **Critical** | #6299 | Deleted sessions persist in history.db, causing seq collision and cross-session context contamination | **CLOSED** | PR #6068 (scroll: preserve session IDs during history migration) addresses root cause |
| **Critical** | #5860 | v2.0 frequent conversation progress loss and infinite loop — agent repeats user queries or jumps between context topics | CLOSED | No fix identified |
| **High** | #6314 | RemoteProtocolError: peer closed connection without sending complete message body — QwenPaw proactively closes connections to LLM | CLOSED | No fix identified |
| **High** | #6307 | v2.0 introduces ~2s fixed overhead per simple reply vs v1.x | OPEN | Under investigation |
| **High** | #6241 | Agent repeats identical output across turns + memory_search enters dead loop | CLOSED | System has warning but no blocking mechanism |
| **Medium** | #6242 | Console embedding dimensions setting not sent to APIs because `use_dimensions` is not exposed | CLOSED | Fix expected in next release |
| **Medium** | #5759 | Plan mode repeatedly reads the same file | CLOSED | No fix identified |
| **Medium** | #5771 | model_factory.py debug logs incorrectly use WARNING level, causing log spam | CLOSED | Fix merged |
| **Medium** | #6301 | Incorrect timestamp timezone conversion — naive UTC timestamps treated as user-local time | OPEN | No fix PR yet |
| **Low** | #6258 | OpenAI model max output token setting not effective | OPEN | Investigated, not yet resolved |

## Feature Requests & Roadmap Signals

**Likely for v2.0.2 / v2.1:**
- **Conversation-level model binding** (#6318) — PR #5992 already open; strong user demand
- **Web Console mobile adaptation** (#6281, #6308) — multiple users requesting mobile/tablet support
- **File drag-and-drop upload** (#6297) — critical for document review workflows
- **Customizable built-in tool descriptions** (#6286) — to reduce token waste (~8-10K tokens per request)
- **Automatic current timestamp injection** (#6283) — model context awareness for resumed conversations

**Longer-term candidates:**
- **Loop detection mechanism** (#5657) — automatic breaking of agentic loops
- **Desktop workspace quick-access button** (#6083) — non-technical UX improvement
- **Qwen 3.8-max-preview support** (#6285) — Aliyun new model compatibility
- **Separate channel tool-call parameter/result control** (#5976) — reduce channel message verbosity
- **Configurable theme/skin module** (PR #6312) — early draft, cosmetic but signals interest

## User Feedback Summary

**Satisfaction drivers:**
- v2.0 architectural improvements (channel token tracking, workspace mode isolation) are well-received
- Contributor onboarding via #2291 continues to be effective

**Key pain points:**
- **v2.0 stability regressions** are the dominant complaint: infinite loops, context contamination, ~2s per-request overhead compared to v1.x
- **Session/conversation management** remains fragile: deleted sessions persist in database, causing cross-session contamination and blank pages
- **Tool call control**: users want to truncate tool call results for channel display, and disable unused built-in tools to save tokens
- **Mobile/web experience**: multiple users report the Console is unusable on mobile/tablet, a blocker for on-the-go access
- **Model compatibility**: OpenAI max tokens setting not honored; Aliyun/bailian new models not listed
- **Concurrency issues**: running multiple subagents causes polling storms and channel interruption failures

**Unmet expectations:**
- Users upgrading from v1.x to v2.x expect feature parity plus improvements, but instead encounter new bugs and performance regressions
- The "loop detection" warning exists but does not block repeated actions — users expect automatic prevention

## Backlog Watch

| Item | Type | Age | Last Updated | Maintainer Attention Needed |
|------|------|-----|--------------|---------------------------|
| #6315 — free model execution error after v2.0 update | Issue | 1 day | 2026-07-22 | Needs reproduction steps; user reported on v2.0.0.post3 |
| #6322 — domain redirects to ad pages on mobile network | Issue | 1 day | 2026-07-22 | Network-specific; could be DNS/env issue but needs triage |
| #6308 — need custom terminal input in Coding mode | Issue | 1 day | 2026-07-21 | Linked to mobile optimization request; low priority |
| #6292 — chunk streaming sends `finish=true` mid-stream | Issue | 1 day | 2026-07-21 | Breaks custom channel integrations; needs `status` semantics clarification |
| #6273 — task tracking concurrency differs by execution entry point | Issue | 2 days | 2026-07-20 | Filed by core maintainer; blocking work until resolved |
| #6083 — Desktop shortcut to workspace outputs | Enhancement | 8 days | 2026-07-21 | PR #5187 (computer-use) may partially address; no dedicated PR yet |
| #5992 — per-session model overrides (PR open) | PR | 10 days | 2026-07-21 | First-time contributor; needs maintainer review to advance |
| #5187 — Windows desktop GUI automation (PR open) | PR | 38 days | 2026-07-22 | Large feature; stale review cycle — needs maintainer re-engagement |

**Notable:** PR #6317 (post-merge OMP regression fixes) and PR #6323 (Scroll staged compaction) are both under active review and should be prioritized to stabilize v2.0.1 pre-release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-22

## Today's Overview

ZeroClaw continues at an exceptionally high level of activity, with 50 active issues and 50 pull requests updated in the last 24 hours. Only 3 issues and 9 PRs were closed or merged in that window, suggesting the project's review throughput is strained relative to its incoming volume. The 41 open PRs and 47 open issues represent a significant review and merge backlog, particularly for large, cross-cutting features. No new releases were cut today, which is notable given the volume of work in flight. The project appears to be in a sustained feature-building and bug-fixing sprint, with particular intensity around goal-mode infrastructure, security hardening, and channel improvements.

## Releases

No new releases were published on 2026-07-22.

## Project Progress

Three issues closed today and 9 PRs were merged or closed. Notable progress includes:

- **Closed Issue #7082:** The Mattermost WebSocket listener mode feature was completed and merged, adding optional WebSocket listening alongside REST polling for Mattermost channels.
- **Closed Issue #9120:** A bug in SOP routing where switch rules were incorrectly evaluated after false top-level `when` conditions was fixed.
- **Closed Issue #9086:** The Structured Security Audit Pipeline RFC was resolved, though the outcome (accepted or rejected) is not immediately clear from the data — the audit modules remain un-wired to production code paths.
- **PR #9250 (Open, just filed):** A major PR extending session persistence to MySQL and MariaDB backends was opened, building on the shared `SessionBackend` trait infrastructure from PR #9249 (also just filed). This is PR 2 of N, superseding a previous attempt in #6893.
- **PR #9248 (Open):** An eval harness enhancement adding append-only run-history receipts for longitudinal trend analysis was opened.

Several large stacked PR series remain open:
- **PRs #8687–#8689, #8746, #8996 (all open):** A 5-PR stacked chain implementing goal-mode infrastructure — goal controller/verifier, trusted goal tools, channel `/goal` command admission, goal self-resume loop fixes, and goal persistence across daemon reload.
- **PR #8486 (Open):** The OpenAI Chat Completions compatibility adapter remains open after 23 days, now likely blocked on review of a large, cross-cutting change.
- **PR #8949 (Open):** Webhook GET handling with challenge-echo for plugin verification, stacked on #8862.

## Community Hot Topics

The most active discussions this period reflect deep architectural concerns rather than simple bugs:

1. **Issue #8226 — Typed per-agent git identity** (6 comments): Proposes a `runtime_context`/`runtime_secrets` block for multi-tenancy across git operations and shared MCP instances. This is a foundational configuration architecture change that touches agent config, tool execution, and secrets management — explaining the extended discussion.

2. **Issue #8505 — Telegram channel cannot be configured** (6 comments, P1 severity): A frustrating user experience where `zeroclaw channels doctor` reports incorrect status and the bot fails silently after quickstart setup. High community interest because it blocks Telegram adoption, a key channel for new users.

3. **Issue #8303 — RFC: Goal mode** (4 comments, 1 👍): The community is actively engaging with this bounded autonomous session proposal. It represents a major capability gap between interactive turns and cron work — users want a durable "pursue this until done" mode.

4. **Issue #8603 — OpenAI Chat Completions compatibility adapter** (4 comments): Strong community interest in interoperability. Multiple users (Open WebUI, LobeChat) need this to integrate ZeroClaw into existing toolchains.

5. **Issue #8600 — Per-chat model switching for multi-model providers** (3 comments, 1 👍): A capability gap from moltis migration — users want flexible model selection within a provider, not just at config time.

**Underlying need:** The community is consistently asking for two things: **(1)** better configuration ergonomics (identity, secrets, model switching, channel setup) and **(2)** architectural integration points (OpenAI-compatible API, goal mode, shared channel patterns). The sustained engagement on these topics suggests these are active blockers for real deployments.

## Bugs & Stability

**Critical (S0) — Data loss / security risk:**

- **Issue #9247 (NEW):** Shell Tool Workspace Boundary Bypass — symlinks within the workspace pointing outside let shell commands escape the workspace boundary that file tools enforce. No fix PR yet. This is a significant sandbox escape vulnerability.
- **Issue #8279 (continuing):** Delegate tool bypasses parent's tool allowlist — sub-agents can invoke tools the parent policy excludes. No dedicated fix PR visible in the top 20. This S0 security bug has been open since June 24 with only 3 comments.
- **Issue #9234 — Web chat reasoning-only turns:** The web UI silently hangs when a model returns only reasoning (no content). A fix PR #9234 is open.

**Severity S1 — Workflow blocked:**

- **Issue #8505 (continuing):** Telegram channel configuration is broken for multiple users. No fix PR in active rotation.

**Severity S2 — Degraded behavior:**

- **Issue #8410 (continuing):** Channel tasks have no first-class "no-reply" outcome — conditional tasks that choose to stay silent still send a visible empty response.
- **Issue #8731 (NEW):** Stdio-based MCP servers accumulate as zombie processes under active daemon. This is a resource leak that degrades over time.
- **Issue #8615 (continuing):** Compatible provider silently deletes content via unconditional `<think>` tag stripping — users lose response content without warning.
- **Issue #8718 (continuing):** `zeroclaw config init` ships a config template that the daemon rejects, silently disabling transcription. Fix PR #8751 is open.
- **Issue #8810 (continuing):** Documentation is wrong for Telegram examples. Low risk but degrades onboarding experience.
- **Issue #8642 (continuing):** MCP/tool-schema cloning drives unbounded RSS growth in the agent loop — ongoing memory leak.

**Regressions:**
- **Issue #9240 (NEW):** `Config::save_dirty()` silently drops writes when the map key contains a dot (e.g., `gpt-4.1`, `claude-3.5-sonnet`). Affects all model configuration persistence — a silent data loss bug that would corrupt user configs without any error message.

## Feature Requests & Roadmap Signals

Features likely to land in the next release based on PR activity and priority:

1. **Goal-mode system (PRs #8687–#8689, #8746, #8996):** The largest stacked PR set in the project — goal controller, trusted tools, channel commands, recovery across reload, and self-resume fix. This is clearly a top priority for the core team (vrurg is a key contributor). Likely to ship as a batch when the stack is reviewed.

2. **OpenAI Chat Completions adapter (PR #8486):** High visibility, multiple related RFCs (#8603, #6850). The PR has been open 23 days — it may land soon if maintainer review bandwidth becomes available.

3. **Remote session persistence (PRs #9249, #9250):** MySQL and MariaDB backends landed today. This is a foundation PR — expect PostgreSQL, Redis, and other backends to follow.

4. **SOP control plane (Tracker #8288):** The 13-capability SOP "done" state is being tracked. Several milestone PRs are in flight.

5. **Structured Security Audit Pipeline (RFC #9086):** Closed today — the direction has been decided. The three existing but un-wired audit modules (AuditLogger, SecureStatusUpload, AnomalyDetector) are likely to be connected to production code paths soon.

Features with strong community demand but less PR evidence:
- Per-chat model switching (#8600) — high user demand, may need an RFC.
- Mixture-of-Agents virtual provider (#8568) — ambitious but no implementation PR yet.

## User Feedback Summary

**Pain points (negative signals):**

- **Onboarding friction:** Multiple users report that documentation is wrong (Telegram), quickstart produces non-functional configs (Telegram, local_whisper), and `zeroclaw channels doctor` gives misleading diagnostics. This is a consistent signal that the new-user experience needs investment.
- **Configuration complexity:** Users migrating from moltis (#8600) and others report difficulty with per-agent git identity (#8226), model switching (#8600), and cache control for Bedrock (#8720). The config system appears powerful but not ergonomic.
- **Silent failures:** The `<think>` tag stripping (#8615), dot-in-key config drops (#9240), zombie MCP processes (#8731), and transcription disable (#8718) are all **silent** failures — users don't know their system is degraded. This erodes trust.
- **Security gaps:** The delegate tool allowlist bypass (#8279, open since June 24) and workspace boundary bypass (#9247) are alarming for production users who need isolation guarantees.

**Satisfaction signals:**

- **SOP engine:** Despite documentation gaps (#8587), users praise the SOP concept as "a great concept" — this is a differentiated feature.
- **Goal-mode RFC (#8303):** Community engagement is positive, suggesting users want to move beyond turn-based interaction.
- **Channel diversity:** Multiple channel improvements (Matrix, Telegram, QQ, Mattermost) suggest the platform's multi-channel vision is resonating.

**Use case signals:**
- Enterprise users need security audit trails (#9086) and multi-tenancy (#8226).
- Self-hosters need reliable documentation and quickstart (#8505, #8810).
- Developer tooling integrators need OpenAI API compatibility (#8603, #8486).
- Power users want flexible model routing (#8568, #8600) and autonomous sessions (#8303).

## Backlog Watch

Several important items appear stalled or need maintainer attention:

1. **Issue #8279 — Delegate tool allowlist bypass (S0 security):** Open since June 24, only 3 comments. No fix PR visible in top 20. This is a critical security vulnerability that has not received proportional attention.

2. **Issue #8309 — SkillForge orphaned:** This feature landed in February but "is wired to nothing." No visible PR to wire it up or remove it. The 2-month stall suggests either feature creep or abandonment.

3. **PR #8486 — OpenAI Chat Completions adapter:** Open 23 days, sized XL, labeled `needs-author-action`. The author (REL-mame) needs to respond to review feedback. If stale, the community loses a high-value integration.

4. **PR #8713 — SSRF fix for file_download tool:** Open since July 4 (18 days), labeled `needs-author-action`. Addresses a confirmed security vulnerability — should be prioritized.

5. **Tracker #8288 — SOP milestone:** This roadmap epic tracker has only 1 comment and no linked PRs visible in the top 20. Without active coordination, the 13-capability SOP target risks slipping.

6. **Multiple stacked PRs labeled `needs-author-action`:** PRs #8713, #8928, #8826, #9194, #8949, #9182, #9180, #8443, #8966, #8746, #8996, #8689, #8687 are all waiting on author responses. This pattern suggests reviewers are providing feedback but authors are not keeping pace, slowing the entire development pipeline.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*