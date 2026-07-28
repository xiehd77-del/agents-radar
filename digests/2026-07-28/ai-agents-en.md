# OpenClaw Ecosystem Digest 2026-07-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-28 02:39 UTC

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

# OpenClaw Project Digest — 2026-07-28

## Today's Overview

OpenClaw shows high activity with 500 issues and 500 PRs updated in the last 24 hours, split evenly between open and closed items. The project has no new releases today, but the engineering team is actively processing a large backlog of critical bugs, including a **P0 memory leak** (Issue #91588) and a **beta.2 state migration blocker** (Issue #109867). The ratio of 250 closed issues to 250 open issues suggests effective triage velocity, though 286 open PRs indicate a substantial queue awaiting review. Community engagement remains strong, with the most-discussed issue (Linux/Windows Clawdbot Apps, #75) attracting 115 comments and 80 reactions.

## Releases

**No new releases today.** The latest available versions remain `2026.7.2-beta.4` and `2026.6.x` stable channels. Users on `2026.7.2-beta.2` should be aware of a critical migration bug (see Bugs & Stability).

## Project Progress

Today's merged/closed PRs include several fixes and refactors that advance platform stability:

- **PR #114668** *(merged)* — Fixes Microsoft Foundry GPT deployment context limits, preventing premature compaction for larger models.
- **PR #112515** *(merged)* — Keeps plugin-hosted media pinned during registry changes, fixing disappearing content.
- **PR #113233** *(merged)* — Removes the legacy file-era JSONL transcript runtime, completing the migration to SQLite session storage.
- **PR #109867** *(closed)* — The critical beta.2 migration blocker is now resolved.
- **PR #82572** *(open)* — Persists followup queues across gateway restarts using shared SQLite, addressing a long-standing reliability gap.

## Community Hot Topics

- **#75 — Linux/Windows Clawdbot Apps** — 115 comments, 80 👍  
  The most popular open feature request asks for desktop apps on Linux and Windows similar to the existing macOS/iOS/Android apps. This represents a major platform gap that the community clearly prioritizes.  
  [Link](https://github.com/openclaw/openclaw/issues/75)

- **#7707 — Memory Trust Tagging by Source** — 22 comments  
  A security-conscious feature proposal to tag agent memory by origin trust level, preventing memory poisoning from untrusted sources like web pages or third-party skills.  
  [Link](https://github.com/openclaw/openclaw/issues/7707)

- **#109867 — beta.2 state migration creates agent_id index before adding column** — 8 comments, 7 👍  
  A regression that blocked gateway startup for beta users, now closed. Highlights real pain around migration testing.  
  [Link](https://github.com/openclaw/openclaw/issues/109867)

- **#6615 — Denylist support for exec-approvals** — 10 comments, 8 👍  
  Users want "allow everything except X" policies for command execution, complementing the current allowlist model.  
  [Link](https://github.com/openclaw/openclaw/issues/6615)

## Bugs & Stability

### Critical (P0)

- **#91588 — Gateway Memory Leak: RSS 350MB→15.5GB over days**  
  Severe memory leak causing OOM crashes and restart cycles. No fix PR linked. Still open with 21 comments.  
  [Link](https://github.com/openclaw/openclaw/issues/91588)

- **#109867 — beta.2 state migration creates index before adding column** — *CLOSED*  
  Blocked gateway startup for beta users. Now resolved.  
  [Link](https://github.com/openclaw/openclaw/issues/109867)

### High Severity (P1)

- **#102020 — Second message fails with "reply session initialization conflicted"** — *CLOSED*  
  Cross-channel session init bug affecting Signal/Discord.  
  [Link](https://github.com/openclaw/openclaw/issues/102020)

- **#86519 — Agent repeats identical replies 2-10x on Telegram after 5.20 update**  
  Regression introduced in `2026.5.20`, partially mitigated in `2026.5.22` but not fully fixed.  
  [Link](https://github.com/openclaw/openclaw/issues/86519)

- **#113306 — SQLite snapshot restore lacks end-to-end crash guarantees**  
  Could report success while missing durable parent directory linking. 12 comments.  
  [Link](https://github.com/openclaw/openclaw/issues/113306)

- **#87109 — Gateway heap grows to 1073MB+ at idle on macOS**  
  Cron jobs fail silently under memory pressure. Reproducible, with related issues #86613, #86509.  
  [Link](https://github.com/openclaw/openclaw/issues/87109)

- **#113434 — Codex sessions.reset reuses retired session ID, exhausts RAM**  
  Windows 11 beta.4 bug causing Gateway-wide degradation and OOM crashes.  
  [Link](https://github.com/openclaw/openclaw/issues/113434)

- **#113323 — LLM idle timeout aborts agent runs during reasoning-token streaming**  
  Local reasoning models aborted because idle timeout doesn't account for reasoning tokens before content tokens.  
  [Link](https://github.com/openclaw/openclaw/issues/113323)

### Fix PRs Available

- **#114865** — Prevents cron and Workboard lifecycle regressions (P1, open PR with proof)  
- **#114282** — Fixes GitHub Copilot fine-grained PAT acceptance (P1, PR ready for maintainer look)  
- **#114596** — Respects configured `tools.media.image.maxBytes` for image attachments (gateway fix)  
- **#114601** — Rejects directories before readFile to prevent raw EISDIR errors (fix PR available)

## Feature Requests & Roadmap Signals

### Likely for next release:
- **Memory Trust Tagging (#7707)** — High community interest, addresses a real security vector. Strong candidate for `2026.8.x`.
- **Masked Secrets (#10659)** — Prevents agent from accessing raw API keys. 15 comments, 4 👍. A natural complement to security hardening.
- **Filesystem Sandboxing (#7722)** — Configurable file access restrictions. Already has partial implementation attempts.
- **Per-run stats in agent JSON (#114688)** — Code-mode engagement, round trips, cost reporting. PR already open with maintainer involvement.

### Medium-term:
- **Linux/Windows Clawdbot Apps (#75)** — The single most requested feature (115 comments). Platform expansion is a major initiative.
- **Skill Permission Manifest (#12219)** — Standard `skill.yaml` permission declarations. Responds to recent security incidents.
- **Add denylist for exec-approvals (#6615)** — 8 👍, "allow everything except X" is a clear user need.
- **OpenRouter cost exposure (#9016)** — Would enable agents to report and reason about usage costs.
- **Context-length-triggered model fallback (#9986)** — Fallback on context overflow, not just API errors.

## User Feedback Summary

### Pain Points (Negative)
- **Duplicate replies on Telegram** — Multiple users report regression from `5.20` update (#86519, #84569).
- **Cross-session reliability** — "Second message fails" (#102020), subagent deadlocks (#90178), and session context bloat (#67419) erode trust in multi-turn conversations.
- **Memory leaks** — Gateway uses 10-15GB+ RSS over time (#91588, #87109), affecting production deployments.
- **CLI scope deadlock** — Users cannot approve/reject auto-reissued repair requests due to CLI scope limitations (#74484).
- **Silent failures** — Cron jobs fail without error reports (#87109), migration problems (#94939), and configuration hot-reload drops models (#99773).

### Positive Signals
- **Strong community engagement** — 115 comments on the platform expansion request, 80 👍 show deep investment.
- **Rapid closure of beta blockers** — #109867 (beta.2 migration) and #102020 (session init) both closed quickly.
- **Accessibility awareness** — Users requesting TUI emoji-free modes (#9637) and Shift+Enter for multi-line (#10118).
- **Security-conscious user base** — Multiple feature requests for sandboxing, secret masking, and trust tagging demonstrate sophisticated threat modeling.

## Backlog Watch

### Issues Needing Maintainer Attention

- **#91588 — Gateway Memory Leak** *(P0, open since Jun 9)* — No fix PR despite being the most severe open issue. 21 comments, 1 👍. Growing RSS from 350MB to 15.5GB makes production deployment infeasible.  
  [Link](https://github.com/openclaw/openclaw/issues/91588)

- **#67419 — Session context bloat: 20-30% tokens wasted** *(P2, open since Apr 15)* — Bootstrap files re-injected every turn. 10 comments, 2 👍. No linked PR.  
  [Link](https://github.com/openclaw/openclaw/issues/67419)

- **#85844 — Auto-update leaves stale hashed bundle imports** *(P1, open since May 23)* — Running gateway uses old module graph after update. 7 comments. No PR.  
  [Link](https://github.com/openclaw/openclaw/issues/85844)

- **#113306 — SQLite snapshot lacks crash guarantees** *(P1, open since Jul 24)* — New bug, 12 comments, but no fix PR yet.  
  [Link](https://github.com/openclaw/openclaw/issues/113306)

- **#64664 — Approvals lost on gateway restart** *(P2, closed but still impacting)* — Stale callback buttons show confusing errors. Reopened concerns possible.  
  [Link](https://github.com/openclaw/openclaw/issues/64664)

### Stale PRs Requiring Attention

- **#82572 — Persist followup queues** *(P1, open since May 16)* — Labeled `waiting on author` despite being critical for message delivery reliability.  
  [Link](https://github.com/openclaw/openclaw/pull/82572)

- **#98259 — Enable prompt cache keys for Azure** *(P2, open since Jun 30)* — Labeled `waiting on author` for over 4 weeks.  
  [Link](https://github.com/openclaw/openclaw/pull/98259)

- **#101327 — Fix Telegram reply ordering** *(P1, open since Jul 7)* — Stale, labeled `needs proof`. Addresses visible UX issues in Telegram forum threads.  
  [Link](https://github.com/openclaw/openclaw/pull/101327)

---

*Data sourced from openclaw/openclaw on GitHub. Issues and PRs current as of 2026-07-28 23:59 UTC.*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the July 28, 2026 community digests.

---

## Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-07-28

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is in a phase of rapid maturation, marked by intense security hardening, architectural consolidation, and aggressive feature expansion. Projects are transitioning from experimental prototypes toward production-ready platforms, prioritizing multi-channel reliability, memory management, and extensibility (MCP, custom providers). Community engagement is exceptionally high across several flagship projects (OpenClaw, CoPaw, IronClaw, ZeroClaw), with hundreds of issues and PRs updated daily, while smaller projects (NullClaw, TinyClaw) appear stable or idle. A clear trend is the emergence of multi-agent architectures and safety-driven features (memory trust tagging, credential firewalls, sandboxing) as core differentiators.

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Signal |
|---|---|---|---|---|
| **OpenClaw** | 500 (250 open, 250 closed) | 500 (286 open, 214 closed) | No new release (latest: `2026.7.2-beta.4`) | High triage velocity; P0 memory leak & beta migration blocker resolved |
| **CoPaw** | 50 (19 open, 31 closed) | 50 (36 open, 14 closed) | No new release (latest: `QwenPaw 2.0.1`) | Strong delivery pace; intense architectural refactoring (browser, third-party agents) |
| **IronClaw** | 38 (38 open) | 50 (31 open, 19 closed) | **New release: ironclaw-v1.0.0** (ground-up rebuild) | High launch-crunch activity; many P1 launch-blocking bugs being fixed |
| **ZeroClaw** | 48 (44 open, 4 closed) | 50 (42 open, 8 closed) | No new release (latest: `v0.8.3`) | Security-hardening sprint; single contributor filed 15+ security audit issues |
| **NanoBot** | 64 (1 open, 63 closed) | 34 (14 open, 20 closed) | No new release | Aggressive cleanup; 63 issues closed in 24h; LINE channel & extension platform PRs |
| **Hermes Agent** | 50 (49 open, 1 closed) | 50 (36 open, 14 closed) | No new release | Exceptionally busy; net backlog increase of +49 issues; NeMo Relay observability rolled back |
| **LobsterAI** | 9 (9 open) | 9 (3 open, 6 closed) | No new release (latest: `2026.6.1`) | Active maintenance; critical data corruption bug (#2393) and Windows shell issues |
| **PicoClaw** | 5 (5 open) | 4 (4 open) | No new release (latest: `v0.3.1`) | Moderate; all PRs stale (no maintainer reviews in 24h); Japanese localization ready |
| **Moltis** | 0 | 5 (5 open, 0 closed/merged) | No new release | Quiet day; 5 open PRs (ACP protocol, zvec memory, security fix for `/sh`) |
| **NanoClaw** | 0 (0 new, 9 open PRs updated) | 9 (8 open, 1 closed) | No new release | Quiet but productive; critical Signal attachment fix merged (#2598) |
| **NullClaw** | 0 | 1 (1 open, Dependabot) | No new release | Stable/idle; only PR is a stale Docker base image bump (43 days open) |
| **TinyClaw** | 0 | 0 | N/A | **No activity** |
| **ZeptoClaw** | 0 | 0 | N/A | **No activity** |

**Health Score Assessment (High/Medium/Low):**
- **High:** OpenClaw, CoPaw, IronClaw, ZeroClaw, NanoBot
- **Medium:** Hermes Agent, LobsterAI, PicoClaw, NanoClaw, Moltis
- **Low:** NullClaw, TinyClaw, ZeptoClaw

### 3. OpenClaw's Position

OpenClaw is the **most active and largest project** in the ecosystem by raw volume (500 issues, 500 PRs in 24 hours), but its position is nuanced:

- **Advantages:**
    - **Maximum community engagement:** 115 comments on the Linux/Windows Clawdbot request (#75) with 80 👍 — far exceeding any single feature request in peer projects.
    - **Strong triage discipline:** 250 issues closed vs. 250 open indicates effective processing, despite a large open-PR backlog (286).
    - **Mature feature set:** Already supports macOS/iOS/Android apps, a broad plugin ecosystem, and multi-channel delivery (Signal, Discord, Telegram).
    - **Security-conscious community:** Users actively request memory trust tagging, masked secrets, and filesystem sandboxing — a sophisticated user base.

- **Technical Approach Differences:**
    - **OpenClaw** uses a **monolithic gateway** with SQLite session storage (post-JSONL migration) and a plugin-hosted media system. Its architecture is centralized around a single "Clawdbot" runtime.
    - **IronClaw** (v1.0.0) is a **ground-up Rust rewrite** with a Wasmtime extension host, TLS egress proxy, and a unified `FailureKind` enum — a much more modern, modular architecture.
    - **ZeroClaw** is also **Rust-based** but focused on daemonized multi-agent SOP control with PostgreSQL session backend and Landlock sandboxing.
    - **NanoBot** positions itself as a lightweight, extensible SDK-first platform with native Python extension boundaries.

- **Community Size Comparison:**
    - OpenClaw's daily issue/PR volume (500 each) is **10x** that of CoPaw (50 each) and **13x** that of IronClaw/Zeroclaw (38-50). However, much of this volume may be automated or bot-driven. The most-discussed issues have **115 comments** (vs. CoPaw's 14, IronClaw's 14, ZeroClaw's 5), suggesting a larger, more vocal user base.

- **Weaknesses vs. Peers:**
    - **Platform gap:** Missing Linux/Windows desktop apps (most requested feature) — while smaller projects like IronClaw and CoPaw ship or build for these platforms.
    - **Memory leak crisis:** The P0 gateway memory leak (#91588) is the most severe open bug in the ecosystem, making production deployment infeasible. No fix PR exists after 7 weeks.
    - **Beta stability:** The beta.2 migration blocker (#109867) was only resolved today, indicating release engineering gaps.

### 4. Shared Technical Focus Areas

Several requirements are emerging across multiple projects, indicating industry-wide priorities:

| Focus Area | Associated Projects | Specific Needs |
|---|---|---|
| **Multi-Platform Desktop Apps** | OpenClaw (#75), Hermes Agent (Windows boot loop #71226), LobsterAI (Windows shell issues #2396), CoPaw (Windows PATH bug #6239) | Linux/Windows apps; improved Windows reliability; non-ASCII path support |
| **Memory/Context Management** | OpenClaw (trust tagging #7707, context bloat #67419), CoPaw (compression anchors #5710, infinite image compression #4895), NanoBot (consolidation failures #1174), ZeroClaw (category scoping #8983) | Trust-level tagging; session bloat prevention; per-user memory isolation; crash-safe snapshots |
| **Multi-User & Enterprise Deployments** | Hermes Agent (per-user USER.md #27182), ZeroClaw (memory scoping #8983), NanoClaw (per-group config), IronClaw (profile isolation #73051) | User identity separation; group-specific configuration; approval inheritance |
| **Channel Integration Reliability** | CoPaw (Feishu/DingTalk/WeChat Work bugs), Hermes Agent (WeCom timeout #14061), NanoClaw (Signal attachment paths), LobsterAI (shell wrapper issues) | Consistent behavior across all channels; attachment handling; timeout/error handling |
| **Security & Authorization** | ZeroClaw (15+ security audit issues), IronClaw (sandbox credential firewall), Moltis (`/sh` authorization fix), OpenClaw (masked secrets #10659) | API key redaction; tool allowlist enforcement; OAuth support; sandbox hardening |
| **Extensibility & SDK** | IronClaw (manifest-driven extension platform), NanoBot (native extension boundary #5098), CoPaw (third-party agent integration #6397), Moltis (ACP protocol #1169) | Plugin systems; MCP integration; custom provider support |

### 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture | Key Differentiator |
|---|---|---|---|---|
| **OpenClaw** | General-purpose AI assistant | Consumer / prosumer | Monolithic gateway (SQLite, plugin-hosted media) | Largest community, cross-platform (mobile), massive plugin ecosystem |
| **IronClaw** | Production agent runtime | Enterprise / DevOps | Rust monolith (Wasmtime, TLS egress, failure enum) | Ground-up rebuild with modern security, modular extension host |
| **ZeroClaw** | Multi-agent SOP automation | Enterprise ops / platform engineers | Rust daemon (PostgreSQL, Landlock sandbox, SOP control plane) | Daemonized SOP control plane; intense security focus |
| **CoPaw (QwenPaw)** | Advanced computer-use automation | Power users / desktop automation | Browser automation SDK, computer-use tool (native accessibility) | Unified browser SDK; third-party agent integration; desktop GUI automation |
| **NanoBot** | Lightweight, SDK-first multi-channel bot | Developers / integrators | Python core with native extension boundary, LINE/Signal channels | Aggressive cleanup; Python extension platform; 63 issues closed in 24h |
| **Hermes Agent** | CLI/TUI-first agent with reasoning models | Developers / LLM power users | CLI/TUI/Desktop with reasoning panel, SSH sessions, subagent delegation | Strong reasoning model support (DeepSeek); configurable temperature demand |
| **LobsterAI** | Chinese-origin, Windows-focused assistant | Chinese-speaking Windows users | Electron/Node.js with artifact preview toolbar, exec tool | Windows-first; Chinese path encoding issues; responsive maintainer |
| **PicoClaw** | Minimalist, configurable agent | Japanese users / headless server | Lightweight launcher with provider fallback chain, systemd integration | Japanese localization ready; MCP reliability gap |
| **Moltis** | ACP protocol agent / agent-to-agent | Agent framework developers | Zvec/redb memory backend, ACP over stdio | Becoming both ACP client and agent; PWA notification fix |
| **NanoClaw** | Signal-first, group-specific agent | Privacy-conscious / Signal users | Signal adapter with mounted inbox, per-group config | Niche Signal focus; Dial channel expansion |

### 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration (High Activity, High Churn)**
- **OpenClaw** — The ecosystem leader by volume, but struggling with a P0 memory leak and beta stability. High triage velocity suggests a large maintainer team, but backlog (286 open PRs) indicates bottlenecks.
- **IronClaw** — Intense launch stabilization; 19 PRs closed/merged in 24h. v1.0.0 release is a major milestone, but the flood of P1 bugs indicates production readiness is still being achieved.
- **ZeroClaw** — Security-hardening sprint with 15+ audit issues filed by a single contributor. 8 PRs closed/merged. High responsiveness but also high risk from the S0 delegation bypass (#8279).
- **CoPaw** — Sustained delivery with 14 PRs closed/merged. Architectural refactoring (browser unification, third-party agents) signals a mature roadmap. Channel reliability remains a persistent pain point.

**Tier 2: Active Maintenance (Moderate Activity, Focused Work)**
- **NanoBot** — Aggressive cleanup (63 issues closed in 24h) but net positive. LINE channel and extension platform are substantial additions. Looks to be entering a stable feature-advancement phase.
- **Hermes Agent** — High activity but net backlog increase (+49 issues). The NeMo Relay revert and multiple unfixed bugs (Windows boot loop, SSH env leakage) suggest a project in a feature-complexity spiral.
- **LobsterAI** — Small team but responsive (3 PRs merged on same day bugs filed). Critical data corruption bug (#2393) and Windows shell issues suggest fragility in core features.

**Tier 3: Stable / Niche (Low Activity, Mature or Stalled)**
- **PicoClaw** — Moderate activity with 4 open PRs and 5 open issues, but no maintainer reviews. Japanese localization PR (#3273) is ready but unmerged.
- **Moltis** — Quiet day but 5 open PRs across key features (ACP, zvec memory, security). Appears to be a build phase, not stalled.
- **NanoClaw** — Quiet but productive; critical Signal attachment fix merged. Likely stable with niche Signal focus.
- **NullClaw, TinyClaw, ZeptoClaw** — No activity or stalled. These projects may be abandoned or in long-term maintenance mode.

### 7. Trend Signals

1. **Security is the #1 Community Concern:** ZeroClaw's single-contributor security audit (15+ issues), paired with OpenClaw's memory trust tagging demand (#7707), IronClaw's credential firewall, and Moltis's `/sh` authorization fix, all signal that **users are actively stress-testing multi-channel, multi-agent deployments**. Expect every major project to invest in API key redaction, OAuth, sandboxing, and authorization policies in Q3-Q4 2026.

2. **Multi-Agent Architectures are the Next Frontier:** CoPaw (third-party agent integration #6397), ZeroClaw (SOP control plane #8288), and Moltis (ACP protocol #1169) are all building infrastructure for **agents that orchestrate other agents**. The S0 delegation bypass in ZeroClaw (#8279) reveals how fragile current implementations are.

3. **Windows Desktop is the Weakest Link:** Every project with a Windows presence (Hermes Agent boot loops, LobsterAI shell/encoding bugs, CoPaw PATH issues, ZeroClaw test failures) reports **disproportionate Windows-specific failures**. This is a massive opportunity for any project that can deliver reliable Windows support — OpenClaw's most-requested feature (#75) is exactly this.

4. **Memory Management is Failing Users:** Across OpenClaw (context bloat, memory leak), CoPaw (infinite compression, anchor truncation), NanoBot (consolidation failures), and Hermes Agent (FTS UPDATE saturation), users are hitting **hard limits on session coherence**. Projects that solve context compression without data loss will gain a significant advantage.

5. **Extensibility Drives Community Investment:** Projects with clear extension/plugin systems (OpenClaw's plugin-hosted media, IronClaw's manifest-driven platform, NanoBot's native extension boundary, CoPaw's third-party agent architecture) are attracting the most community PRs and feature requests. The **MCP protocol** is becoming a standard integration point across the ecosystem.

6. **Configurability Over Hardcoded Defaults:** Hermes Agent's top upvoted issue (#17565, 12 👍) demands configurable temperature. OpenClaw users want denylist execution policies (#6615) and configurable fallback chains (PicoClaw #3200). **Users are tired of opaque defaults** and want fine-grained control over agent behavior.

7. **CI/Test Infrastructure is a Bottleneck:** Multiple projects report test flakiness (ZeroClaw #9357, 19/20 failures; CoPaw #6460, high CPU/rendering jitter; OpenClaw, 286 open PRs awaiting review). **Investing in CI reliability and automated testing** is a clear differentiator for projects aiming for production readiness.

**Overall Assessment:** The ecosystem is healthy, diverse, and rapidly maturing. The next 3-6 months will likely see a consolidation around security, multi-agent orchestration, and reliable Windows/desktop support. OpenClaw remains the community leader by volume, but its technical debt (memory leak, beta stability, missing platforms) leaves it vulnerable to challengers like IronClaw (modern architecture) and CoPaw (computer-use automation). For developers, the strongest investment opportunities are in projects with clean extension APIs (IronClaw, NanoBot, CoPaw) and those addressing the universal pain points of memory management and cross-platform reliability.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-28

## Today's Overview
NanoBot saw exceptionally high community activity in the past 24 hours, with **64 issues updated** (63 closed, 1 active) and **34 pull requests updated** (20 merged/closed, 14 open). No new releases were published. The maintainer team delivered aggressive cleanup and feature work: a major refactor removing redundant runtime scaffolding, a new LINE channel integration, a unified extension platform PR, and critical bug fixes for session consolidation, Dream integrity, and git object ID handling. The project continues to mature rapidly, with maintainers investing heavily in SDK extensibility, WebUI usability, and stability.

## Releases
No new releases were cut today. The project remains ahead of its last tagged version while accumulating substantial unreleased improvements across core, WebUI, and channels.

## Project Progress
**20 PRs merged/closed** in the last 24 hours, including significant advances:

- **Core Refactoring**: PR #5127 (open) removes unused assistant-role branches, duplicate MEMORY.md reads, and obsolete microcompaction policies — streamlining prompt construction and runtime ownership.
- **New Extension Platform**: PR #5098 (open) introduces a native Python extension boundary, filling capability gaps between skills, Apps, and MCP, reusing existing tool/command/hook registries.
- **LINE Channel Integration**: PR #5115 (open) adds support for LINE Messaging API — the most popular messenger in Japan, Taiwan, Thailand, and Indonesia — with HMAC verification and full allowFrom support.
- **WebUI Improvements**: PR #5077 (closed) enables model preset switching directly from the composer via long-press/drag. PR #5113 (closed) fixes repeated model preset row instability. PR #5121 (closed) resolves composer resize scroll jitter.
- **Documentation**: PR #5123 (closed) improves the README landing page with clearer use cases, contribution paths, and a GitHub star CTA.
- **LLM Logging**: PR #1683 (closed) adds `LLM_LOGGING` env var for request/response debug logging with configurable content truncation.
- **GitStore Fix**: PR #5126 (open) fixes a double-hex encoding bug where dulwich object IDs were incorrectly `.hex()`-encoded a second time.

## Community Hot Topics
The most active discussions centered around **multi-model flexibility and configuration pain points**:

- **Issue #1991** (9 comments, closed) — request for **supporting multiple custom model providers** with seamless switching. User reported being limited to a single custom config. This resonates with broader community demand for provider flexibility.
- **Issue #3123** (8 comments, closed) — **cron/scheduled task message design flaw**: messages sent via cron session cannot be queried or corrected later by users, breaking interactive workflows.
- **Issue #2570** (7 comments, closed) — **Ollama local config documentation gap**: 404 errors and port binding failures despite correct CLI behavior. User spent significant time debugging.
- **Issue #2329** (6 comments, closed) — **custom model provider breaks on channels** (Feishu) while working on CLI — a multi-provider integration inconsistency.
- **Issue #1174** (5 comments, 2 👍, closed) — **memory consolidation fails** with local/weaker models, especially after cloud model sessions, leaving users unable to start new sessions.

## Bugs & Stability
Several bugs reported and fixed this period, ranked by severity:

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **Critical** | #4792 | `/stop` command silently discards pending queue messages, causing permanent message loss | Closed, fix pending review |
| **High** | #4805 | `suppress(Exception)` in tool preparation silently swallows validation errors, causing unpredictable tool behavior | Closed, fix needed |
| **High** | #5126 | GitStore returns double-hex-encoded commit IDs, corrupting memory object references | PR #5126 open |
| **High** | #5120 | Session consolidation drops uploaded media paths persisted only in `media[]` field | PR #5120 open |
| **Medium** | #5117 | Invalid idle-compaction timestamps cause `SessionManager` to crash | PR #5117 open |
| **Medium** | #5114 | Dream prompt assembly could lose conversation-history entries | PR #5114 closed |
| **Low** | #5119 | Model selector label emphasis too strong in production CSS | PR #5119 closed |

**Notable regression fix**: PR #4667 (open) protects user skills from Dream writes by requiring `dream_managed: true` frontmatter — addressing a reported write-safety vulnerability.

## Feature Requests & Roadmap Signals
Strong signals for next-version features:

1. **Multiple custom model provider support** (Issue #1991) — highest-engagement feature request. Likely blockers: channel consistency and provider switching UX. Expected in next minor release given maintainer responsiveness.
2. **Cron/scheduled task re-query capability** (Issue #3123) — users want to interact with cron-sent content post-delivery. PR #5111's session event hooks could enable this.
3. **Memory/tool toggle configuration** (Issue #1881, 3 comments) — users with weaker models want configurable memory updates and tool registration to prevent memory bloat. Maintainers may address via the new extension platform (PR #5098).
4. **Custom emoji in system prompt** (Issue #2747, 3 comments) — hardcoded 🐈 emoji requested as configurable/disableable. Low complexity, likely merge-ready.
5. **Whisper-large-v3-turbo** (Issue #1584, 1 👍) — performance improvement for voice transcription. Simple model swap.

## User Feedback Summary
**Pain Points:**
- **Local model integration** remains the top friction area: Ollama users face 404 errors, port binding, and API key confusion (Issues #2570, #1947, #1590, #1478). Documentation and default configs need improvement.
- **Channel inconsistency** frustrates users: custom providers work on CLI but break on Feishu (Issue #2329); skills created via agent don't appear on gateway (Issue #1328); WebSocket can't replace webhooks for proactive delivery (Issue #3559).
- **Memory system brittle** with weaker models: consolidation failures, media path loss, timestamp crashes — multiple reports from users relying on local/edge hardware.
- **Cron and scheduled tasks** are underpowered: no post-delivery interactivity, old jobs persist after workspace switch (Issue #2358).

**Satisfaction Signals:**
- High community engagement (64 issues/34 PRs in 24h) indicates active, invested user base.
- Multiple users invested time to debug and document solutions (e.g., Issue #1590 with 3 Ollama failure root causes).
- Contributors submitting substantial features (LINE channel, extension platform, WebUI improvements) reflect project momentum.

## Backlog Watch
Several important issues and PRs require maintainer attention:

| Item | Age | Priority | Reason |
|------|-----|----------|--------|
| Issue #1174 — Memory consolidation failures (2 👍) | 5 months | **High** | Recurring pain for local model users; no root-cause fix merged |
| Issue #1033 — Inter-instance cache staleness | 5 months | **Medium** | Cron jobs invisible across channels; architectural concern |
| Issue #1315 — Discord slash command conflict | 5 months | **Medium** | Native Discord `/` commands conflict with nanobot's — UX degradation |
| PR #4667 — Protect user skills from Dream writes | 26 days | **High** | Bug/security fix for Dream integration; open with conflicts |
| Issue #3559 — WebSocket cannot replace webhooks (3 comments) | 3 months | **Medium** | Multi-tenant proactive delivery still unsupported |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — July 28, 2026

## Today's Overview

Hermes Agent shows **very high activity** today with 50 issues and 50 PRs updated in the last 24 hours, reflecting an exceptionally busy development cycle. Only 1 issue and 14 PRs were closed/merged, indicating a net backlog increase of +49 open issues and +22 open PRs. The project maintains strong community engagement with 12 reactions on top-voted feature requests. No new releases today. The Windows desktop platform continues to be a major stability concern, while significant architectural work is underway on profile isolation, session state management, and observability infrastructure.

## Releases

**None.** No new releases were published on this date.

## Project Progress

**14 PRs closed/merged today:**

- **#73053** — Reverted `feat(observability): integrate NeMo Relay runtime and shared metrics` (#67607), indicating the telemetry integration was rolled back after review
- **#73045** — Fixed composer so `@/foo` works the same as `@foo` in the TUI (addressing leading-slash search behavior)
- **#67607** — Closed without merge; the large NeMo Relay observability feature was reverted

**Notable open PRs advancing core fixes:**
- **#73051** — Fixes Desktop subprocess environment isolation by profile (fixes #72480), critical for multi-profile security
- **#73052** — Fixes Kanban subscription inheritance missing `chat_type` and `delivery_metadata` columns
- **#72579** — ACP session model validation: rejects invalid model selections before session creation
- **#68891** — FTS UPDATE trigger narrowing to prevent disk saturation on large `state.db`
- **#71463** — Bounds Honcho memory provider session cache growth (prevents unbounded memory leak)
- **#71787** — Strips empty-content+tool_calls assistant messages to fix HTTP 400 errors on DeepSeek/OpenAI-compatible endpoints
- **#64298** — Resolves `max_iterations` config from config.yaml instead of fragile env-var round-trip
- **#64172** — Removes the undocumented 1.0s inter-tool delay, improving tool-calling throughput
- **#70766** — Lazy-imports Bitwarden to prevent CLI crash on broken `cryptography` package
- **#73057** — Adds LSP idle subprocess reaper to prevent 1-2 GB memory leak in long-lived gateways
- **#70509** — Adds on-device wake-word system with open-vocabulary phrases and multi-profile voice routing (opt-in)
- **#70725** — Fixes `hermes update` crash on Windows when `pythonw.exe` holds managed Node files open

## Community Hot Topics

### Most Active Discussions (by comment count)

1. **#71226** — [Desktop boot loop: WebSocket connects but disconnects immediately](https://github.com/NousResearch/hermes-agent/issues/71226) (10 comments, 1 👍)
   - Users report a recurring Windows desktop startup failure cycle; fix likely requires gateway connection stability improvements

2. **#17565** — [Configurable Temperature Parameter for Model Inference](https://github.com/NousResearch/hermes-agent/issues/17565) (7 comments, **12 👍**)
   - **Most upvoted open issue.** Community is frustrated with hardcoded temperature causing hallucinations; users want user-facing config

3. **#14091** — [Environment variables not passed through to SSH sessions](https://github.com/NousResearch/hermes-agent/issues/14091) (6 comments)
   - Critical workflow blocker for SSH-based deployments; env vars defined in skill frontmatter don't propagate

4. **#53617** — [Desktop GUI: Keep reasoning panel expanded](https://github.com/NousResearch/hermes-agent/issues/53617) (5 comments, 1 👍)
   - UX concern for users of thinking models (DeepSeek with `reasoning_content`); auto-collapse disrupts workflow

5. **#14061** — [WeCom timeout causes duplicate messages](https://github.com/NousResearch/hermes-agent/issues/14061) (4 comments)
   - Message delivery reliability issue where timeout fallback sends duplicate messages to WeCom users

### Underlying Needs Analysis

The most active threads reveal **three core community demands:**

- **Configurability over hardcoded behavior** (#17565, #53617): Users want control over inference parameters and UI behavior rather than opaque defaults
- **Multi-platform reliability** (#71226, #14061): Windows desktop and enterprise chat platforms (WeCom) are significant pain points
- **Environment/property isolation** (#14091, #27182): Multi-user and SSH deployments need proper environment variable propagation and memory scoping

## Bugs & Stability

### Critical/Win-Stopping

| Issue | Platform | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) | Windows Desktop | Boot loop: WebSocket connects then disconnects, renderer-initiated reset cycle | No open fix yet |
| [#72981](https://github.com/NousResearch/hermes-agent/issues/72981) | Managed Cloud v0.19.0 | Honcho dependency install fails with permission denied | No open fix yet |

### High Severity (P2)

| Issue | Component | Description | Fix PR? |
|-------|-----------|-------------|---------|
| [#14091](https://github.com/NousResearch/hermes-agent/issues/14091) | SSH sessions | Environment variables not passed through | No |
| [#14061](https://github.com/NousResearch/hermes-agent/issues/14061) | WeCom gateway | Timeout triggers plain-text fallback, duplicate messages | No |
| [#30498](https://github.com/NousResearch/hermes-agent/issues/30498) | Gateway sessions | Re-anchor ambiguous continuations before session_search | No |
| [#66087](https://github.com/NousResearch/hermes-agent/issues/66087) | Home-channel notice | "Gateway online" notice never fires after SIGTERM restart | No |
| [#11030](https://github.com/NousResearch/hermes-agent/issues/11030) | CLI `/branch` | Ends original session even when branch creation fails | No |
| [#65889](https://github.com/NousResearch/hermes-agent/issues/65889) | Cron sessions | HTTP MCP tools not loaded in cron sessions | No |
| [#47116](https://github.com/NousResearch/hermes-agent/issues/47116) | CLI streaming | Answer deferred and dumped all at once with `show_reasoning: true` | No |
| [#32220](https://github.com/NousResearch/hermes-agent/issues/32220) | Delegation costs | Subagent costs never persisted to state DB | No |
| [#11171](https://github.com/NousResearch/hermes-agent/issues/11171) | Google models | Delegation with missing tools causes infinite retry loop | No |

### Recently Closed

- **#73042** — [Closed] Context-usage statusbar toggle broken when hidden by default (deadlock) ✅ Fixed via config change

### Notable Fixed by Open PRs
- Windows update crash (#70725) — fix PR #70725 open
- Missing auth key redaction for Gemini `AQ.` prefix (#66926) — fix PR #66926 open
- DeepSeek HTTP 400 on empty-content tool_calls (#71787) — fix PR #71787 open
- LSP memory leak (#25016 → #73057) — fix PR #73057 open

## Feature Requests & Roadmap Signals

### Highest Demand (by reactions)

1. **#17565** — [Configurable Temperature Parameter](https://github.com/NousResearch/hermes-agent/issues/17565) (12 👍)
   - **Likelihood for next release: High.** This is the most upvoted open issue. The hardcoded `_fixed_temperature_for_model()` approach is causing hallucinations, and a configurable `temperature` in `config.yaml` would be a straightforward addition.

2. **#27182** — [Per-user USER.md isolation for multi-user deployments](https://github.com/NousResearch/hermes-agent/issues/27182) (4 👍)
   - **Likelihood: Medium.** Multi-platform deployments (Slack, Discord) sharing a single memory file is a growing pain for enterprise users.

3. **#2045** — [Lazy skill loading: remove skill listing from system prompt](https://github.com/NousResearch/hermes-agent/issues/2045) (3 👍)
   - **Likelihood: Medium.** With 87 bundled skills consuming prompt budget, this optimization is increasingly pressing.

### Emerging Signals

- **On-device wake words** — PR #70509 adds open-vocabulary wake phrases across CLI/TUI/Desktop; signals shift toward voice-first interaction
- **Per-turn waterfall tracing** — PR #65329 proposes opt-in tracing via `agent.turn_trace` in config; debugging and observability is a growing theme
- **Remove inter-tool delay** — PR #64172 proposes eliminating the undocumented 1.0s delay between tool calls; performance optimization

### Prediction for Next Release
Based on PR activity, the next release will likely include:
- Profile-based environment isolation (PR #73051, #63507)
- Configurable temperature (driven by #17565 demand)
- Per-turn tracing (PR #65329)
- FTS UPDATE optimization (PR #68891)
- Inter-tool delay removal (PR #64172)

## User Feedback Summary

### Pain Points (Top Distress Signals)

- **Windows Desktop reliability** (#71226, #40146, #39333, #51364, #54648): Users consistently report startup failures, IME input issues, profile import failures, and `--version` triggering runs instead of printing. Windows remains the weakest platform.
- **Hardcoded inference parameters** (#17565): Multiple users report hallucinations due to unconfigurable temperature; the community is vocal about needing control.
- **SSH session environment leakage** (#14091): A blocker for server-side deployments; env vars defined in skills don't propagate to SSH sessions.
- **Message delivery instability** (#14061, #66087, #10581): Duplicate messages on WeCom, missing startup notices after restart, and home-channel config fallback issues erode trust.
- **Multi-user memory sharing** (#27182): Single global `USER.md` is inadequate for Slack/Discord bots serving multiple real users.

### Satisfaction Signals

- On-device wake words (PR #70509) and voice features are being actively developed, showing responsiveness to voice-interaction demand
- Desktop GUI reasoning panel expansion request (#53617) has a functional workaround discussion
- CJK IME issues (#40146, #39195) are acknowledged but not yet fixed

### Use Cases Driving Development

- **Enterprise multi-user deployments** (profile isolation, per-user memory)
- **Voice-first interaction** (wake words, streaming improvements)
- **SSH-based automation** (environment propagation, terminal isolation)
- **Long-running sessions** (compression thresholds, FTS optimization, memory provider bounds)

## Backlog Watch

### Long-Unanswered Issues Requiring Maintainer Attention

| Issue | Age (Days) | Priority | Concern |
|-------|-----------|----------|---------|
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) (Temperature config) | 90 | P3 | **Most upvoted issue.** Should be prioritized given community demand |
| [#2045](https://github.com/NousResearch/hermes-agent/issues/2045) (Lazy skill loading) | 131 | P3 | Needs decision; growing prompt budget pressure |
| [#4445](https://github.com/NousResearch/hermes-agent/issues/4445) (Telegram message chunking) | 118 | P3 | Long-standing streaming UX request |
| [#10809](https://github.com/NousResearch/hermes-agent/issues/10809) (Vision preprocessing overhead) | 103 | P2 | Performance issue with local models — no maintainer response |
| [#12864](https://github.com/NousResearch/hermes-agent/issues/12864) (`HERMES_MANAGED=false` treated as managed) | 99 | P2 | Clear config parsing bug; affects update flows |

### PRs Needing Review

| PR | Age (Days) | Component | Concern |
|----|-----------|-----------|---------|
| [#64298](https://github.com/NousResearch/hermes-agent/pull/64298) (Gateway max_iterations config) | 14 | gateway/config | Three-holes fix for config resolution — reviewed but unmerged |
| [#64172](https://github.com/NousResearch/hermes-agent/pull/64172) (Remove inter-tool delay) | 14 | agent | Performance optimization with broad impact — needs decision |
| [#63507](https://github.com/NousResearch/hermes-agent/pull/63507) (Pin managed services to profile) | 15 | profile management | Security-boundary fix for multi-profile deployments |
| [#68891](https://github.com/NousResearch/hermes-agent/pull/68891) (FTS UPDATE trigger narrowing) | 7 | state DB | Prevents disk saturation on large databases — high impact |

### Needing Decision Labels

- **#14091, #14061, #2045, #10581** — All carry `needs-decision` label; these are architectural questions that block fixes or features
- **#65329** (turn tracing) — Carries `needs-decision`; the telemetry approach needs maintainer sign-off after the NeMo Relay revert (#67607 was rolled back)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-28

## Today's Overview

PicoClaw shows moderate activity today with 5 open issues and 4 open pull requests updated in the last 24 hours, though none were closed or merged. The project appears in a steady-state development cycle with several feature PRs and bug reports pending review. No new releases were published today, indicating maintainers are likely consolidating changes for a future version. The open PRs span localization, provider updates, and new integrations, suggesting ongoing active development across multiple fronts.

## Releases

No new releases were published today. The project remains at version 0.3.1 (as referenced in Issue #3281).

## Project Progress

**No PRs were merged or closed today.** All 4 open PRs remain under review:

- **#3273** — Japanese localization (WebUI) — awaiting merge
- **#3271** — Provider model name updates to 2026-07 latest — awaiting merge
- **#3270** — DashScope TTS provider + WeChat audio sending — awaiting merge
- **#3200** — Configurable default fallback chain for models — awaiting merge (since July 1)

## Community Hot Topics

1. **#3276 — Launcher: support externally-managed gateway (systemd)**  
   - Comments: 1 | Author: honbou  
   - **Link:** [Issue #3276](https://github.com/sipeed/picoclaw/issues/3276)  
   - **Analysis:** Headless server users need proper systemd integration. The launcher's assumption that it owns the gateway lifecycle creates friction for production deployments using auto-restart services. This signals growing enterprise/server usage.

2. **#3272 / #3273 — Japanese localization**  
   - Comments: 1 each | Author: honbou  
   - **Link:** [Issue #3272](https://github.com/sipeed/picoclaw/issues/3272) | [PR #3273](https://github.com/sipeed/picoclaw/pull/3273)  
   - **Analysis:** A complete Japanese translation (968 lines) already submitted as a PR. Strong demand from Japanese-speaking users, especially given existing translated documentation. High likelihood of merge.

3. **#3200 — Configurable default fallback chain**  
   - Comments: 0 (stale since July 1) | Author: lc6464  
   - **Link:** [PR #3200](https://github.com/sipeed/picoclaw/pull/3200)  
   - **Analysis:** A significant feature PR that has been open for 27 days without maintainer response. This suggests either maintainer bandwidth constraints or unresolved design decisions around model fallback configuration.

## Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **HIGH** | **#3269** — MCP server connection failure hangs agent loop, freezing chat interface | Open, 1 comment | None yet |
| **MEDIUM** | **#3281** — WebUI chat input very laggy with long history | Open, 1 comment | None yet |
| **LOW** | **#3268** — `exec` tool action parameter should default to "run" | Open, 1 comment | None yet |

**#3269 — MCP server failure hangs agent**  
- **Link:** [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)  
- **Risk:** Complete chat unresponsiveness when MCP connection fails. This is a critical user-facing failure that could drive users away. No fix PR exists yet.

**#3281 — UI lag with long history**  
- **Link:** [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)  
- **Risk:** Progressive degradation of UX as sessions grow. Likely a rendering optimization issue (virtual list, DOM batching, or state management inefficiency).

**#3268 — exec tool default action**  
- **Link:** [Issue #3268](https://github.com/sipeed/picoclaw/issues/3268)  
- **Risk:** Low severity, but causes unpredictable AI agent failures when LLMs omit the `action` parameter. Simple fix (set default to `"run"`).

## Feature Requests & Roadmap Signals

1. **Japanese localization** (#3272, PR #3273) — Almost certainly coming in next release. Translation is complete and ready.
2. **DashScope TTS + WeChat audio** (PR #3270) — Regional-specific feature for Chinese users. Likely mid-term addition.
3. **Model fallback chain** (PR #3200) — Long-pending feature. Could be next major release if maintainers prioritize reliability.
4. **Systemd gateway integration** (#3276) — Growing demand from production deployments. Medium-term roadmap signal.

**Prediction for next version (0.4.0):** Japanese localization (PR #3273) and provider model updates (PR #3271) are likely candidates. The fallback chain (PR #3200) may be deferred further due to complexity.

## User Feedback Summary

**Pain points expressed:**
- **Server operators:** Launcher doesn't play well with systemd-managed gateways, causing friction in headless/VM deployments (#3276)
- **Japanese users:** WebUI lacks language support despite existing translated documentation (#3272)
- **AI agent developers:** `exec` tool failures due to required `action` parameter causing unpredictable LLM behavior (#3268)
- **Heavy users:** Chat UI performance degrades significantly with long conversation history (#3281)
- **Reliability seekers:** MCP connection failures completely freeze the chat interface (#3269)

**Satisfaction signals:** The community is actively contributing full feature PRs (localization, TTS, WeChat integration), indicating strong developer engagement and trust in the project's direction.

**Dissatisfaction signals:** PR #3200 (model fallback chain) has been open for 27 days without maintainer comment. This may indicate maintainer bandwidth issues or hesitation around architectural decisions.

## Backlog Watch

**High-priority items needing maintainer attention:**

1. **PR #3200 — Configurable default fallback chain**  
   - Open since: July 1 (27 days)  
   - **Link:** [PR #3200](https://github.com/sipeed/picoclaw/pull/3200)  
   - **Status:** No comments from maintainers. This is a substantial feature that could unblock other server-configuration improvements.

2. **Issue #3269 — MCP failure hangs agent loop**  
   - Open since: July 20 (8 days)  
   - **Link:** [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)  
   - **Status:** No fix or workaround provided. Critical bug affecting chat usability.

3. **Issue #3281 — WebUI lag with long history**  
   - Open since: July 21 (7 days)  
   - **Link:** [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)  
   - **Status:** No response from maintainers. UX regression for power users.

4. **All 4 open PRs** (PR #3273, #3271, #3270, #3200) — None have received maintainer review or merge since their creation (most since July 20). Community contributions are piling up without feedback.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for July 28, 2026.

---

## NanoClaw Project Digest
**Date:** 2026-07-28

### 1. Today's Overview
The project is in a quiet but productive phase, with no new issues or releases reported in the last 24 hours. The core team is primarily focused on iterative fixes and infrastructure hardening, as evidenced by a high volume of open pull requests (9) receiving updates. A critical bug regarding file attachment handling in the Signal adapter was fixed, and significant improvements were made to webhook configurability and agent engagement controls. While community submission volume is moderate, maintainers are actively shepherding several long-standing contributions toward closure.

### 2. Releases
No new releases were published today.

### 3. Project Progress
One pull request was merged/closed today:
- **[PR #2598] (Closed): Fix: load per-group CLAUDE.local.md by adding 'local' to settingSources.** *Author: jonnychesthair-crypto.* This fix ensures that per-group configuration files (`CLAUDE.local.md`) are properly loaded by the system, which is essential for multi-tenant or group-specific agent behavior.

### 4. Community Hot Topics
No single issue or PR drew a high volume of comments today, but the following items represent the most significant community-driven work:

- **[PR #3050] (Open): feat(setup): add Dial to the channel picker + wizard/skills.** *Author: OmriBenShoham.* This is a substantial feature submission adding the "Dial" communication channel. It signals strong community interest in expanding beyond the core Signal/Telegram integrations, likely driven by specific enterprise or regional communication preferences.
- **[PR #2971] (Open): Add ncc utility skill: host operational and health CLI.** *Author: zivisaiah.* This utility provides a command-line tool for operational health checks. It reflects a user need for better observability and debugging tooling outside of the main agent runtime.

### 5. Bugs & Stability
One bug was actively addressed today, and several previously reported issues saw maintainer attention for stability improvements.

- **High Severity (Fixed):** **[PR #3142] (Open): fix(signal): forward image/file attachments through the mounted inbox.** *Author: ira-at-work.* A critical bug where the Signal adapter was constructing file paths (`/workspace/extra/signal-attachments/`) that were not mounted into the agent's container, making all non-image attachments (PDFs, documents) inaccessible to the agent's Read tool. The fix routes attachments through a mounted inbox path.
- **Medium Severity (Open):** **[PR #3143] (Open): Preserve resolved approval card content.** *Author: Koshkoshinsk.* Addresses a UX regression where resolved or timed-out approval cards would lose their original context. The fix persists the title and request details, improving auditability.
- **Medium Severity (Open):** **[PR #2346] (Open): fix(formatter): treat unknown slash commands as normal chat.** *Author: SidhayaPravda618.* Fixes a bug where unrecognized user commands were being silently ignored. This has been open since May but received a recent update, suggesting the fix is being finalized.

### 6. Feature Requests & Roadmap Signals
Several PRs suggest the direction of the next minor release:

- **Configurable Webhook Hosting:** **[PR #3144] (Open): feat(webhook): configurable bind address via WEBHOOK_HOST.** This is a highly practical feature for deployments requiring strict network segmentation, likely to be merged soon.
- **Dial Integration:** **[PR #3050] (Open): Add Dial to the channel picker.** A major channel addition that appears nearly complete, likely targeting a v0.8 or v0.9 release.
- **Self-Serve Engagement Controls:** **[PR #3137] (Open): Fix engagement consistency and expose self-serve wiring controls.** This is a core-team pull that allows group agents to inspect and request changes to their interaction policies (engagement regexes), moving toward a more autonomous agent management model.

### 7. User Feedback Summary
Based on the patches and feature requests, user pain points are clearly centered on the following:
- **Connectivity & Deployment:** The need for a configurable webhook bind address indicates users are deploying NanoClaw in environments where binding to `0.0.0.0` is a security or networking concern.
- **Reliability & Observability:** The creation of the host health CLI and the fixes for silent command failures (PR #2346) show users need more robust error handling and insight into agent state.
- **Attachment Handling in Signal:** The fix for dead attachment paths points to a significant pain point for users exchanging documents via Signal, which is now resolved.

### 8. Backlog Watch
No issues are currently stale, but the following long-standing PRs deserve attention as they touch core functionality:

- **[PR #2346] (Open since 2026-05-08): fix(formatter): treat unknown slash commands as normal chat.** *Author: SidhayaPravda618.* This fix prevents user commands from being silently dropped. It is critical for UX and has been waiting for a merge for over two months.
- **[PR #2685] (Open since 2026-06-04): docs(signal): group typing, outbound reactions, quote-reply fix.** *Author: ira-at-work.* While a documentation update, it documents released features (group typing, reactions). Its long age suggests it may be awaiting a final review from a maintainer familiar with Signal internals.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-28

## 1. Today's Overview
NullClaw’s development activity remains minimal in the last 24 hours, with no new issues, releases, or merged pull requests. The single active pull request (#956) is a Dependabot-driven dependency bump for the Docker base image (Alpine 3.23 → 3.24), which has been open for over six weeks without review or merge. This low activity level, combined with zero open issues and zero closed items, suggests the project may be in a maintenance lull or stable state with no urgent bug reports or feature work underway. The dependency update PR, while low-risk, indicates a need for maintainer attention to keep the CI/docker pipeline current. Overall, project health appears stable but idle, with no active development momentum visible from the past day.

## 2. Releases
No new releases were published today. The latest available release remains unchanged from prior periods.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. The only PR activity is the open Dependabot update (#956), which has not progressed toward merge. No feature advances or bug fixes were completed today.

## 4. Community Hot Topics
The sole active pull request is the most notable community interaction point:

- **PR #956** — [ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)  
  *Opened 2026-06-15, last updated 2026-07-27*  
  **Comments:** undefined | **Reactions:** 0  
  **Underlying need:** This automated dependency bump indicates a desire to keep the project’s Docker image base secure and up-to-date. The lack of comments or maintainer response suggests that the community is not actively discussing this change, potentially because it is a routine low-impact update. The six-week open duration without feedback may reflect either maintainer unavailability or a deliberate hold on merging dependency updates.

No other issues or PRs with significant commentary or reactions were recorded today.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. There are zero open or closed issues in the monitored dataset. The project’s bug and stability landscape appears clean at this time.

## 6. Feature Requests & Roadmap Signals
No feature requests were submitted today. With no open issues and no merged PRs, there is no visible user-driven feature pipeline. Given the inactivity, the next version’s likely contents remain unclear, but the open Docker dependency bump (PR #956) is the only pending change that might be included in a future release.

## 7. User Feedback Summary
No user feedback, pain points, or satisfaction signals were recorded in the last 24 hours. The absence of issues of any kind suggests either a content user base, low adoption, or a project that has stabilized with no active user-reported concerns.

## 8. Backlog Watch
The following long-unanswered PR requires maintainer attention:

- **PR #956** — [ci(deps): bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956)  
  *Open since 2026-06-15 (43 days)*  
  **Status:** No maintainer comments, no approvals, no merge.  
  **Risk:** Low — this is a simple base image version bump that should be safe to merge. Prolonged neglect may lead to CI pipeline drift or security concerns if the old base image becomes unsupported. Maintainers are encouraged to review and merge this PR promptly.

No other long-unanswered issues or PRs were identified in the dataset.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for 2026-07-28.

---

## IronClaw Project Digest — 2026-07-28

### 1. Today's Overview
The project is in an intense **v1 launch and stabilization phase** following the release of the ground-up rebuild (`ironclaw-v1.0.0`). Activity is very high, with 38 issues and 50 PRs updated in the last 24 hours, signaling a large team pushing toward production readiness. The primary focus is on hardening the new "Reborn" architecture, closing out a major error-recoverability epic (#6284), and resolving a **large batch of P1 launch-blocking bugs** discovered in the staging environment. The recent release marks a significant breaking change from the 0.29.x line, requiring a migration path.

### 2. Releases
- **ironclaw-v1.0.0** (2026-07-27)
  - **Type:** First stable release of the rearchitected IronClaw ("Reborn").
  - **Changes:** This is a complete ground-up rebuild of the agent runtime, storage, extension host, and web UI. It is *not* an increment on the 0.29.x line.
  - **Breaking Changes:** The v1 monolith is built as the `ironclaw-legacy` binary. The new `ironclaw` binary is the rearchitected CLI.
  - **Migration (In Progress):** A dedicated tracking issue (#6725) has been opened to define the migration path from the legacy architecture to v1, but the description is not yet filled in.

### 3. Project Progress
19 PRs were merged or closed in the last 24 hours, showing significant advancement in core architecture and bug fixing:
- **Core Architecture:** A massive refactor collapsed five overlapping failure-kind enums into one closed `FailureKind` with 36 variants, fixing six wrongful-terminal bugs (#6684, closed). Another large PR refactored the composition assembly, reducing it by **9,394 lines** (#6691).
- **Evaluation & Testing:** A new Hermetic capability testing platform (#6524) advanced with a PR that prevents fault state from leaking between test cases (#6738, open). A nightly reverse-order journey test was also added (#6728, open).
- **Security & Sandbox:** Unwired primitives for a sandbox credential firewall (CA and obligation staging) were merged (#6723, closed). A separate PR introduces a TLS termination seam for the sandbox egress proxy (#6740, open).
- **Documentation:** A critical fix was merged to stop internal engineering docs from being served publicly on the live docs site (#6692, closed). Docs were also restructured around the shipped 1.0 binary.
- **Dependency Management:** Multiple large dependency bumps were landed, including updates to the Wasmtime ecosystem, Tokio ecosystem, and serialization crates.

### 4. Community Hot Topics
The most active discussion is centered on the **error-recoverability endgame**:
- **#6284** (14 comments) — **EPIC: error-recoverability endgame.** This is the most commented-on issue. It aims to have the model recover from 100% of errors it sees. This is a core stability driver for the v1 launch, highlighting the project's focus on making the agent robust in production.
- **#6524** (3 comments) — **Epic: Hermetic capability and journey testing platform.** This underscores the team's effort to build deterministic, meaningful test coverage for all capabilities, which is critical for quality assurance.
- **#6581** (3 comments) — **429 Too Many Requests on agent-stg.** A launch-blocking bug where the WebUI's live-update channel returns 429 errors, causing the UI to show "Disconnected." This has high user impact and is clearly a priority for the launch checklist.

### 5. Bugs & Stability
The v1 launch checklist has surfaced several high-severity bugs. **Fixes are in progress for many of them.**

- **Critical (P1)**
  - **#6719** — Conversation history fails to load after backend errors (503, CSP violations). The chat enters a partially broken state. *No fix PR detected.*
  - **#6720** — Task runs indefinitely and the stop button fails to cancel execution. *No fix PR detected.*
  - **#6718** — Streaming stops working on the chat page until the user navigates away and back. *No fix PR detected.*
  - **#6741** — Extension OAuth connection (Gmail, Calendar) fails after completing the sign-in flow. *No fix PR detected.*
  - **#6581** — 429 Too Many Requests on the SSE channel causing permanent "Disconnected" state.

- **High**
  - **#6717** — Agent hallucinates Telegram pairing instructions even after successful pairing.
  - **#6716** — Model incorrectly claims Slack integration is unavailable when it is installed.
  - **#6726** — Critical dead code found: a function `register_generic_channel_outbound_targets` is a no-op that all tests pass without. *Fix PR likely pending.*
  - **#6060** (closed) — A major bug where routine delivery targets leaked across all routines was fixed.

### 6. Feature Requests & Roadmap Signals
Based on the new epics created today, the near-term roadmap is heavily focused on **pluggability and self-service configuration**:
- **Pluggable Memory & MCP:** Epics for **Pluggable Memory Providers** (#6482) and **Connecting Custom MCP Servers** (#6727) signal a move toward a more modular, user-extensible agent.
- **Self-Configuring Agent:** The agent will soon be able to **read its own documentation** (#6734) to guide users through setup, directly addressing the "hallucination" problems reported in bugs #6717 and #6716.
- **Unified Extension Platform:** A major epic (#6481) outlines a **Manifest-Driven Extension Platform**, making extensions coherent, composable packages. This is foundational for the marketplace (IronHub) integration.
- **Improving UX:** An enhancement request for an **in-app feedback widget** (#6743) was filed, showing a desire to improve the user feedback loop.

### 7. User Feedback Summary
- **Pain Points:** The biggest pain points are **hallucination and misinformation from the agent** (incorrect Telegram/Slack instructions) and **instability** (indefinite task runs, loss of streaming, failure to load history). Users are also frustrated by confusing account/profile management, as the WebUI does not show the active user's identity (#6742).
- **Use Cases:** Users are trying to configure third-party integrations (Gmail, Telegram, Slack) and rely on the agent for daily automation routines.
- **Satisfaction:** The launch of v1.0.0 suggests a high degree of internal confidence, but the flood of launch-blocking bugs indicates that production readiness is still being achieved.

### 8. Backlog Watch
- **#5598** — **chore: release.** This is an open PR from July 3rd that appears to be a bot-generated release PR for several crates (e.g., `ironclaw_common`, `ironclaw_safety`) with breaking API changes. It has been open for nearly a month, suggesting either a process bottleneck in the release pipeline or that these changes are being held for a larger release batch.
- **#6428** — **build(deps): bump the tokio-ecosystem group.** This standard dependency bump PR has been open for a week, which is notable for a security-critical dependency like Tokio. It may indicate that the team is prioritizing feature work and bug fixes over dependency updates during the launch crunch.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – July 28, 2026

## 1. Today's Overview

LobsterAI exhibited high activity on July 28, with 9 issues updated and 9 pull requests updated in the last 24 hours. Notably, all 9 issues remain open, and 6 PRs were merged or closed, indicating a strong focus on bug fixing and feature stabilization. There were no new releases today. The project is in a **active maintenance and bug-fix phase**, with several critical data integrity and cross-platform compatibility issues reported by the community. The maintainer team responded quickly, merging multiple fix PRs within the same day.

## 2. Releases

**No new releases today.** The latest version remains the 2026.6.1 release noted in recent issue reports. Users are currently running that build, which has been observed to have several bugs detailed below.

## 3. Project Progress

Today, **6 pull requests were merged or closed**, covering important fixes and enhancements:

- **#2394 (CLOSED)** – `[area: docs, platform: windows] Fix/windows install manual overwrite blocked` (Author: fisherdaddy) – Addressed a Windows installation issue where the update process could be blocked due to user skill backup failures. This directly relates to Issue #2395.
- **#2389 (CLOSED)** – `[area: docs, area: skills] fix(email): prevent attachment path traversal` (Author: liuzhq1986) – Security fix for the email skill, sanitizing attachment filenames and enforcing download directory boundaries.
- **#2388 (CLOSED)** – `[area: renderer, area: docs, area: artifacts] feat(artifacts): 新增预览工具栏分享与部署入口` (Author: liugang519) – Added share and deploy entry points to the Artifact preview toolbar, including new unit tests and design documentation.
- **#2386 (CLOSED)** – `[area: renderer, area: build, area: docs, area: main, area: openclaw] fix(agentEngine): terminate no-progress tool loops before token budget exhaustion` (Author: fisherdaddy) – Critical fix to prevent AI agents from burning through token budgets on unproductive tool loops.
- **#2387 (CLOSED)** – `[area: renderer, area: docs, area: main, area: artifacts] Feat/2026.7.20 sites` (Author: liugang519) – Feature enhancement for site/artifact handling.
- **#1323 (CLOSED)** – `[stale] fix(cowork): narrow input-too-long error classification (#1298)` (Author: kayo5994) – Improved error classification in Cowork sessions to avoid misleading "input too long" messages.

## 4. Community Hot Topics

Two issues generated significant discussion:

- **#2395 [OPEN] "无法安装" (Can't install)** – 1 comment. This is the most urgent new issue, with a user blocked during installation due to a skill backup failure. The corresponding PR #2394 was already merged today, suggesting a fix is in the pipeline.
  - *Link: [Issue #2395](https://github.com/netease-youdao/LobsterAI/issues/2395)*

- **#2396 [OPEN] "exec 工具的默认 shell wrapper = Windows PowerShell 5.1"** – 0 comments but high signal. This is the second shell-related issue reported by the same user (woxinsj). The user has deep technical debugging, noting that the hardcoded use of Windows PowerShell 5.1 causes Linux commands and inline scripts to fail silently on Windows with `pwsh` 7.x installed.
  - *Link: [Issue #2396](https://github.com/netease-youdao/LobsterAI/issues/2396)*

Users are reporting **frustration with silent failures and data corruption** – the underlying need is for better cross-platform compatibility and user-facing error messages rather than silent degradation.

## 5. Bugs & Stability

Three high-severity bugs were reported today:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 Critical | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | **Data corruption bug**: The accelerator replaces `\f` byte pair (5C 66) with `\x0C` (form feed), silently corrupting file data when writing strings like `\firecrawl`, `\foo`, etc. 100% reproducible. | No fix PR yet |
| 🔴 Critical | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | **Installation blocked**: User cannot update because `user skills could not be backed up`. | PR #2394 merged |
| 🟠 High | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | **exec tool shell wrapper issue**: Defaults to PowerShell 5.1 even when PowerShell 7 (pwsh) is installed; Linux commands and inline scripts fail silently. | No fix PR yet |
| 🟠 High | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | **exec tool + Chinese path encoding**: Hardcoded `powershell.exe` call fails for users with Chinese characters in Windows usernames (`M幸福`). | No fix PR yet |
| 🟡 Medium | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | **Scheduled tasks**: Cannot select which agent or skill to use for timed tasks. | No fix PR yet |

All five bug reports remain open except #2395 which has a merged fix PR. The data corruption bug (#2393) and shell/wrapper issues (#2396, #2390) are particularly concerning for Windows users.

## 6. Feature Requests & Roadmap Signals

- **Skill renaming** ([#2391](https://github.com/netease-youdao/LobsterAI/issues/2391)): User explicitly requests the ability to rename skills. This is a quality-of-life feature likely to be added in the next minor release given the low implementation complexity.
- **Scheduled task agent/skill selection** ([#2392](https://github.com/netease-youdao/LobsterAI/issues/2392)): Users need more granular control over which agent and skill are used in cron-like tasks.
- **Settings confirmation dialog** (PR [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241)): This stale PR addresses a long-standing UX pain point where unsaved API Key changes are silently lost. It has been open since April and is a candidate for the next merge.
- **Task completion notifications** (PR [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239)): Another stale PR proposing taskbar/Dock flashing when AI tasks complete. This has been open since April.

**Prediction for next release**: Skill renaming, scheduled task controls, and the settings confirmation dialog are likely candidates. The shell wrapper and path encoding fixes will likely be bundled into a Windows-focused patch.

## 7. User Feedback Summary

- **Pain Points**:
  - Data integrity: Users are seeing silent file corruption due to the accelerator bug ([#2393](https://github.com/netease-youdao/LobsterAI/issues/2393))
  - Installation failures: One user is completely blocked from updating ([#2395](https://github.com/netease-youdao/LobsterAI/issues/2395))
  - Cross-platform friction: Windows users with non-ASCII usernames or modern PowerShell are experiencing silent failures ([#2396](https://github.com/netease-youdao/LobsterAI/issues/2396), [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390))
  - Model lockout: When one API key is rate-limited, all agents appear "restricted" even when switching models ([#1240](https://github.com/netease-youdao/LobsterAI/issues/1240))
  - Settings UX: Unsaved changes in Settings are silently lost ([#1237](https://github.com/netease-youdao/LobsterAI/issues/1237))

- **Satisfaction Signals**: The maintainer team is responsive – three PRs were merged within hours of their associated issues being filed. The community appreciates the rapid turnaround on the installation blocker (#2394 merged same day as #2395 filed).

## 8. Backlog Watch

Several important issues and PRs have been **stale for months** without maintainer response:

| Item | Age | Description | Risk |
|------|-----|-------------|------|
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | ~4 months | Settings close without save confirmation – silent API Key loss | **High** – UX trust issue |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | ~4 months | Model lockout after API restriction – entire app unusable | **High** – availability issue |
| [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | ~2 months | Task timed out after max duration – no user feedback on actual state | **Medium** – usability |
| PR [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | ~4 months | Task completion notification (taskbar/Dock flash) – no review | **Low** – enhancement |
| PR [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | ~4 months | Settings confirmation dialog (fixes #1237) – no review | **Medium** – blocks UX fix |
| PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | ~4 months | Dependabot update for Electron from 40.2.1 to 43.2.0 – **security** | **High** – stale dependency update increases supply chain risk |

The **#1237/#1241 pair** is particularly concerning: an open bug that degrades user trust, with a fix PR sitting unreviewed for 4 months. Additionally, the stalled Electron update (PR #1277) should be prioritized for security hygiene.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-28

## Today's Overview
No new issues or releases were recorded in the last 24 hours, indicating a quiet day on the project. However, five pull requests remain open and active, with the most recent activity including a new `zvec` vector database backend for memory (#1158) and several infrastructure improvements. The project appears to be in a build phase, with maintainers focused on extending capabilities (ACP protocol support, instrumentation) and fixing security and reliability gaps. No closed or merged PRs today suggest work is still in review or development.

## Releases
No new releases today. The last release information is unavailable from the provided data.

## Project Progress
No pull requests were merged or closed today. Five open PRs continue development across several areas:
- **Memory backend** – PR #1158 introduces an experimental Zvec/redb vector database backend, feature-gated behind `zvec`.
- **ACP protocol support** – PR #1169 exposes Moltis as an ACP agent over stdio, enabling it to be used by any ACP harness (Zed, buzz-acp, etc.).
- **Security fix** – PR #1170 gates the dangerous `/sh` command behind a per-account operators list, preventing arbitrary host command execution from unauthorized users.
- **Instrumentation** – PR #1174 adds a pluggable `ObservationSink` fanout for agent instrumentation and end-user feedback collection.
- **PWA reliability** – PR #1173 fixes push notification replacement bugs where second messages silently replaced first ones without sound or alert.

## Community Hot Topics
No issues were updated today, and none of the open PRs have accumulated comments or reactions in the data. The most active discussion thread appears to be around PR #1158 (zvec memory backend), which was created on July 17 and updated today, suggesting ongoing refinement. The underlying need here is for a **lighter, more flexible memory backend** that can work with independently running embedding models (llama-cpp), indicating users want modular, self-hosted AI stacks.

## Bugs & Stability
One critical security vulnerability was addressed in the last 48 hours:
- **Critical**: PR #1170 fixes arbitrary command execution via `/sh` on shared Discord guilds or group chats. The command was reachable by any member passing the channel's access gate, bypassing authorization. This PR exists but is not yet merged, meaning the vulnerability remains live on instances running the current codebase.
- No crashes or regressions reported today.

## Feature Requests & Roadmap Signals
Several signals point to upcoming features likely in the next release:
- **ACP agent exposure** (PR #1169) – becoming both an ACP client and agent, unlocking integration with tools like Zed and buzz-acp.
- **Pluggable instrumentation** (PR #1174) – a formal observation and feedback pipeline, likely for telemetry, monitoring, and user experience improvements.
- **Push notification reliability** (PR #1173) – targeted at PWA users who depend on chat notifications without missing messages.
- The `zvec` memory backend (PR #1158), though experimental, could become the default lightweight memory option if stable.

## User Feedback Summary
No explicit user feedback is available in the data. However, the PRs indirectly reveal user pain points:
- **Security concerns** – the `/sh` vulnerability fix suggests users running multi-user Discord instances were at risk.
- **Notification reliability** – PWA users experienced silent notification drops, a clear usability failure.
- **Integration needs** – the ACP agent PR (PR #1169) points to users wanting to use Moltis as a backend for other tools, not just as a client.

## Backlog Watch
No issues are open or unresolved according to the data. Among open PRs, **#1158 (zvec memory backend)** is the oldest (created July 17) and may benefit from maintainer attention to either merge or provide guidance on next steps. It has been updated today but shows no comment activity, so it may be stalled.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-28

Generated from agentscope-ai/CoPaw GitHub activity (data refreshed 2026-07-28).

---

## 1. Today’s Overview

CoPaw shows **high activity** over the past 24 hours: 50 issues and 50 PRs were updated, with 31 issues closed and 14 PRs merged or closed. No new releases were tagged today. The project is in a **sustained delivery phase**, with significant architectural work underway — particularly around browser unification, third-party agent integration, and computer-use automation. The community remains engaged, though several long-standing bugs around memory compression, channel compatibility, and Windows-specific issues persist. Maintainer responsiveness appears strong, with many older issues receiving closure or updated comments.

---

## 2. Releases

No new releases published in the last 24 hours. The latest available versions remain **QwenPaw 2.0.1** (Desktop) and **CoPaw 1.0.2** (deprecated branding). No migration notes or changelogs to report.

---

## 3. Project Progress

### Merged/Closed PRs (14 total, notable items closed today)

| PR | Title | Impact |
|----|-------|--------|
| [#6491](https://github.com/agentscope-ai/CoPaw/pull/6491) | fix(desktop): bundle PawApp SDK modules | Fixes plugin installation failure on Desktop 2.0.1 — resolves issue #6473 |
| [#6462](https://github.com/agentscope-ai/CoPaw/pull/6462) | docs(sandbox): clarify native Windows sandbox support | Corrects outdated docs; Windows now has native sandbox backends without WSL2 |

### Notable Open PRs (in review or active development)

| PR | Title | Status |
|----|-------|--------|
| [#6515](https://github.com/agentscope-ai/CoPaw/pull/6515) | feat(providers): add Volcengine Agent Plan and MiMo Standard API | Fresh — new built-in providers |
| [#6284](https://github.com/agentscope-ai/CoPaw/pull/6284) | feat(apps): add qwenpaw-creator app | Under review — script-to-video workflow |
| [#6276](https://github.com/agentscope-ai/CoPaw/pull/6276) | feat(browser): unified browser — one SDK, any backend | Core refactor — decouples browser automation from backends |
| [#6337](https://github.com/agentscope-ai/CoPaw/pull/6337) | feat(agui): expose AG-UI protocol via /protocol/agui/chat | Enables external consumers to use AG-UI protocol |
| [#6397](https://github.com/agentscope-ai/CoPaw/pull/6397) | feat(third-party agents): integrate Codex, Qoder, Skills, and MCP | Under review — extensible agent architecture |
| [#6151](https://github.com/agentscope-ai/CoPaw/pull/6151) | refactor(tool_calls): background tool call offload mechanism | Fixes race conditions and hint injection timing |

**Key advancements today:**
- **Browser automation** is being unified under a single SDK abstraction (PR #6276), with a companion Chrome extension plugin (PR #6157) entering developer preview.
- **Third-party agent integration** (PR #6397) introduces a backend-neutral architecture supporting Codex, Qoder, Skills, and MCP — a major extensibility milestone.
- **Desktop GUI automation** for Windows and macOS (PR #6424) adds a `computer_use` tool with accessibility-first control, enabling agents to operate host desktops natively.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Topic |
|-------|----------|-------|
| [#5757](https://github.com/agentscope-ai/CoPaw/issues/5757) | 14 | Feishu (Lark) bot stops responding after first message — closed |
| [#5725](https://github.com/agentscope-ai/CoPaw/issues/5725) | 6 | Console streaming causes browser lag — closed |
| [#4895](https://github.com/agentscope-ai/CoPaw/issues/4895) | 5 | Infinite image compression loop causing hallucination — closed |
| [#5090](https://github.com/agentscope-ai/CoPaw/issues/5090) | 5 | Tool safety bypass: `rm` blocked but agent uses Python to delete — closed |
| [#5259](https://github.com/agentscope-ai/CoPaw/issues/5259) | 5 | Windows vector index not persisted — closed |
| [#5561](https://github.com/agentscope-ai/CoPaw/issues/5561) | 5 | Feishu cannot receive long replies — closed |

**Analysis:** The most active issues cluster around **channel integration pain points** (Feishu, DingTalk, WeChat Work) and **memory/context management failures**. Three separate issues (#4895, #5090, #5710) involve the system losing or corrupting critical context — either images being repeatedly compressed, tool safety being circumvented, or anchor messages being truncated during compression. This suggests a **systemic fragility in the context/memory pipeline** that, while closed individually, may need a holistic fix.

---

## 5. Bugs & Stability

### High Severity

| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| [#6473](https://github.com/agentscope-ai/CoPaw/issues/6473) | Plugin "Agent Kanban" fails to install on Desktop 2.0.1 — `No module named 'qwenpaw.pawapp'` | **Resolved** — closed today | [#6491](https://github.com/agentscope-ai/CoPaw/pull/6491) (merged) |
| [#6324](https://github.com/agentscope-ai/CoPaw/issues/6324) | Model response truncated when using MiniMax-M3 on v2.0.0 | Open | None yet |
| [#6258](https://github.com/agentscope-ai/CoPaw/issues/6258) | OpenAI max output tokens setting not honored | Open | None yet |

### Medium Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#6457](https://github.com/agentscope-ai/CoPaw/issues/6457) | Task mode produces excessive conversation history entries | Open |
| [#6460](https://github.com/agentscope-ai/CoPaw/issues/6460) | High CPU in Edge+Wayland — large result set rendering / WebSocket push triggers | Open |
| [#6467](https://github.com/agentscope-ai/CoPaw/issues/6467) | `qwenpaw.agentscope.io` server node setup fails — user confusion about node creation | Closed |

### Resolved Today

- **Plugin installation failure** (#6473) was the most impactful today — a critical Desktop 2.0.1 regression that blocked all App Center plugin installations. Fixed via PR #6491.
- **Windows PATH concatenation bug** (#6239) — lost semicolon between User+Machine PATH, breaking npm global discovery — closed.
- **Approval level inheritance** (#6508 fix) — subagent child sessions were not inheriting session-level `approval_level` overrides.

---

## 6. Feature Requests & Roadmap Signals

### Community-Requested Features (active)

| Issue | Request | Likely Next Version? |
|-------|---------|---------------------|
| [#5609](https://github.com/agentscope-ai/CoPaw/issues/5609) | Custom model protocol support (non-OpenAI endpoints like `/v1/images/generations`) | **Possible** — providers are being actively expanded (PR #6515) |
| [#5427](https://github.com/agentscope-ai/CoPaw/issues/5427) | Kimi K2 Code Anthropic-compatible endpoint | **Likely** — similar to PR #6515 pattern |
| [#5547](https://github.com/agentscope-ai/CoPaw/issues/5547) | Expose sessionId in plugin tools for per-user MCP permission control | **Possible** — aligns with authorization work |
| [#5593](https://github.com/agentscope-ai/CoPaw/issues/5593) | DingTalk: send images as previewable messages, not files | **Possible** — channel improvements ongoing |
| [#5603](https://github.com/agentscope-ai/CoPaw/issues/5603) | Speed up DingTalk card streaming output | **Possible** — performance work continuous |

### Roadmap Signals from Open PRs

The following architectural PRs signal the **v2.1+ roadmap**:
- **Unified browser SDK** (#6276) — foundational for cross-backend browser automation
- **Third-party agent architecture** (#6397) — Codex, Qoder, MCP integration
- **Computer use / desktop GUI automation** (#6424) — Windows + macOS native
- **Workspace checkpoint management** (#6269) — Git-backed undo for conversations
- **Visual Compact** (#6456) — context compression using visual context (PawFocus)

---

## 7. User Feedback Summary

### Pain Points

1. **Channel reliability** — Multiple issues cite Feishu (Lark) bot dropping replies after first message (#5757), DingTalk output being slow (#5603), and Feishu not parsing interactive card messages (#5708). These are the **most frequently reported user frustrations**.

2. **Context management failures** — Users report that context compression truncates critical anchor messages (#5710), images are infinitely re-compressed (#4895), and new sessions load raw uncompressed context causing token inflation (#4872). This affects agents' ability to maintain coherent long conversations.

3. **Windows ecosystem gaps** — Vector index not persisting (#5259), PATH concatenation breaking npm (#6239), browser process locks persisting (#4844) — Windows users face a disproportionate share of stability issues.

4. **Safety bypass** — A user demonstrated that blocking `rm` via tool safety can be circumvented by the agent writing a Python script (#5090). This undermines trust in the safety system.

### Satisfaction Signals

- Users are actively deploying QwenPaw as a server backend, integrating with MCP tools, and using it for complex workflows (ComfyUI, business systems).
- Multiple closed issues show users reporting bugs with detailed reproduction steps — a sign of an engaged, technically sophisticated community.
- The rapid closure of #6473 (plugin install regression) within one day demonstrates maintainer responsiveness.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Created | Last Updated | Comments | Status |
|-------|---------|--------------|----------|--------|
| [#5710](https://github.com/agentscope-ai/CoPaw/issues/5710) | 2026-07-01 | 2026-07-27 | 3 | Closed — but describes a **fundamental design issue** with context compression anchor points that appears systemic |
| [#5547](https://github.com/agentscope-ai/CoPaw/issues/5547) | 2026-06-26 | 2026-07-27 | 3 | Closed without clear resolution — sessionId access for plugin tools remains unclear |
| [#5609](https://github.com/agentscope-ai/CoPaw/issues/5609) | 2026-06-29 | 2026-07-27 | 3 | Closed — request for custom model protocol, but no evidence of implementation |
| [#6324](https://github.com/agentscope-ai/CoPaw/issues/6324) | 2026-07-22 | 2026-07-27 | 3 | **Open** — model response truncation, no fix PR yet |
| [#6258](https://github.com/agentscope-ai/CoPaw/issues/6258) | 2026-07-19 | 2026-07-27 | 4 | **Open** — max output token not honored, no fix PR yet |

### PRs Possibly Stalled

| PR | Title | Created | Updated | Needs |
|----|-------|---------|---------|-------|
| [#5514](https://github.com/agentscope-ai/CoPaw/pull/5514) | fix chat input queue session id migration | 2026-06-25 | 2026-07-28 | 34 days open — review needed |
| [#6068](https://github.com/agentscope-ai/CoPaw/pull/6068) | fix(scroll): preserve session IDs during history migration | 2026-07-13 | 2026-07-27 | 15 days open — review needed |

### Systemic Concerns

- **Context compression vulnerability** (#5710): While closed, the underlying design flaw (no anchor points protecting critical messages from truncation) may resurface unless addressed at the architecture level.
- **Channel-specific bugs** continue to dominate the issue tracker. A **channel integration test suite** could prevent regressions — currently each channel (Feishu, DingTalk, WeChat Work) has distinct bugs that recur across versions.

---

*Digest generated from agentscope-ai/CoPaw data as of 2026-07-28 23:59 UTC. All links are GitHub issues/PRs.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for 2026-07-28.

---

## ZeroClaw Project Digest — 2026-07-28

### 1. Today's Overview
The project is in an **intense security-hardening sprint**, with 48 issues (44 open) and 50 PRs (42 open) updated in the last 24 hours. Activity is exceptionally high, driven by a wave of security audit findings filed by a single contributor, `belumume`, targeting API key leaks, channel authorization gaps, and emergency stop flaws. The maintainer team and trusted contributors are responding in parallel with fix PRs, particularly in the runtime, channels, and gateway domains. No new releases were cut today, indicating a focus on triage and fixing before packaging.

### 2. Releases
**None.** No new releases were published today. The latest stable version on `master` remains **v0.8.3**.

### 3. Project Progress
**8 PRs were closed or merged today.** Key changes advanced to `master` include:

- **[PR #9251] (Merged):** **PostgreSQL session backend** — This merges PostgreSQL as the first supported persistent session backend, a foundational infrastructure change after a reduction from five backends to one.
- **[PR #9388] (Merged):** **Governance update** — Retired the `CONTRIBUTORS.md` record and grounded maintainer roles in the FND-003 framework, clarifying project governance.
- **[PR #9429] (Closed):** **Channel test flake fix** — Fixed a CI flake caused by fixed wall-clock timeouts in channel tests.
- **[PR #9238] (Closed):** **Windows test isolation fix** — Fixed `config_save_isolation` test skipping all test files on Windows.

Additionally, several large fix PRs remain open and are moving through review (e.g., `#9424`, `#9447` for incomplete terminal responses; `#9182` for PowerShell support).

### 4. Community Hot Topics
The most active discussions are dominated by security vulnerabilities and architectural decisions.

- **[#9357] (5 comments) — Runtime test flake poisons global mutex:** A `cargo test` fails 19/20 times; the flaky assertion poisons a global mutex, taking down subsequent tests. This is a **high-severity CI blocker** affecting all contributors.
- **[#8973] (4 comments) — Landlock blocks shell on Fedora:** A critical usability bug where the Landlock sandbox prevents the shell tool from accessing `/dev/null`, breaking basic shell execution on Fedora.
- **[#9386] (4 comments) — Gemini API key leak:** A Google API key in the request URL survives sanitization and is posted into the originating chat — a **direct information disclosure vulnerability**. Fix PRs are expected soon.
- **[#9393] (3 comments) — Bluesky/Reddit authorization bypass:** Found during a security audit: these channels have no sender authorization and no central gate covering them, meaning unauthenticated users can interact with the agent.

**Underlying need:** The community is signaling a clear demand for **robust security boundaries** across all channels, policy enforcement, and better CI reliability. The high volume of `domain:security` issues indicates users and auditors are stress-testing the project's multi-channel, multi-agent architecture.

### 5. Bugs & Stability
**Severity assessment of new bugs filed today (2026-07-27 to 2026-07-28):**

| Issue | Severity | Description | Fix PR Exists? |
| :--- | :--- | :--- | :--- |
| [#9425] | **S1 - Workflow blocked** | Running SOP jobs have no operator cancellation path in the web dashboard. | No |
| [#9421] | **S1 - Workflow blocked** | Incomplete terminal responses can be reported as successful, leading to false positives. | Yes ([#9424], [#9447]) |
| [#9436] | S2 - Degraded behavior | `config init` writes template sections that fail the strict loader, making a fresh config degraded. | No |
| [#9462] | S3 - Minor | WASM plugin unit tests never execute in CI due to a missing feature flag. | No |
| [#9465] | S2 - Degraded behavior | Inbound channel messages declined by precheck produce only a reaction (emoji) with no text, confusing users. | No |
| [#9422] | S2 - Degraded behavior | Unit tests cannot compile on Windows due to a `cfg(unix)` gate on `EnvValueGuard`. | No |

**Most Critical:** The **incomplete terminal response bug** ([#9421]) has two large fix PRs in flight ([#9424], [#9447]), indicating this is a top priority for the maintainers. The **SOP cancellation gap** ([#9425]) is a user-facing workflow blocker for operators.

### 6. Feature Requests & Roadmap Signals
Several RFCs and design issues signal near-term roadmap direction:

- **[#9464] (RFC, new) — Anthropic OAuth alias contract:** Proposes a contract for explicit `auth_mode = "oauth"` with Anthropic, indicating the team is building toward first-class OAuth support for major providers.
- **[#8983] (Enhancement) — Memory category scoping:** Proposes `category-scoped read_memory_from` to allow fine-grained cross-agent memory sharing, moving away from all-or-nothing access. This is a strong signal for **multi-agent enterprise use cases**.
- **[#9330] (RFC) — AI-assisted PR pre-review:** Proposes using CI results to trigger AI-driven initial PR review while keeping human approval mandatory. This is an advanced developer-experience feature likely for **v0.10+**.
- **[#8288] (Tracker) — SOP milestone:** Tracks the rollout of the daemon-owned SOP control plane, targeting a "5/5" maturity rating.

**Prediction:** The **OAuth support** ([#9464]) and **memory scoping** ([#8983]) are likely candidates for the **next minor release (v0.9.0)** , as they are tied to the security and multi-agent roadmap.

### 7. User Feedback Summary
Real user pain points from this digest:

- **Security Anxiety:** Multiple reports of API keys being leaked into chat ([#9386]) and bypassed authorization ([#9393], [#9392], [#9417]) suggest users are concerned about the safety of deploying ZeroClaw in untrusted environments.
- **Onboarding Friction:** Two bugs ([#7808], [#9436]) directly degrade the new-user experience: secret prompts give no feedback, and `config init` generates a broken config.
- **Multi-Platform CI Frustration:** Repeated **Windows CI failures** ([#9422], [#9238]) and **test flakiness** ([#9429], [#9357]) indicate that the CI matrix is not yet stable across platforms, frustrating developers who rely on `cargo test`.
- **Missed Workflow Integration:** The **CLI-created cron jobs** ([#9340]) silently discarding output and the **inability to cancel running SOPs** ([#9425]) represent missing operational control that users expect from a production daemon.

### 8. Backlog Watch
The following long-standing, high-severity items require maintainer attention:

- **[#8279] (S0 - Security Risk) — Delegate bypasses tool allowlist:** Open since **June 24**. This allows a sub-agent to invoke tools the parent policy excludes. It is the highest severity (S0) bug on the board and has been "in-progress" for over a month.
- **[#7846] (Related to #8784) — History-loop split:** The large refactoring PR (#8784) is part of a rework that has been stalled since early July, blocked on review for the `before_llm_call` hook contract.
- **[#7432] (Tracker) — v0.9.0 auth/security queue:** This tracker is the coordination surface for all breaking-change security work. With the recent influx of security bugs, decision velocity here directly impacts the release timeline for the next major version.
- **[#8983] (Enhancement) — Memory category scoping:** No maintainer decision has been recorded on this proposal since it was filed on July 11. It represents a key multi-agent feature that would unlock specific enterprise patterns.

**Maintainer attention is needed most urgently on [#8279]**, as the S0 delegation bypass represents a fundamental architectural vulnerability in the multi-agent system.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*