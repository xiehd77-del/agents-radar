# AI CLI Tools Community Digest 2026-08-15

> Generated: 2026-08-15 01:18 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Developer Tools — Cross-Tool Comparison Report
**Date:** 2026-08-15

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is experiencing a **bifurcation between platform-level tools** (Claude Code, Codex, Copilot CLI) that are maturing into DEI (Developer Experience Infrastructure) platforms and **agile challengers** (Gemini CLI, Qwen Code, CodeWhale, Pi, Kimi) that are racing to differentiate on niche capabilities. The most pressing shared concern across all tools is **agent reliability under unexpected conditions** — hangs, stuck sessions, misreported termination reasons, and resource leaks dominate community complaints. A second universal theme is **configurability of memory and context management**, with every community requesting more control over context windows, memory schemas, and state persistence. Windows remains a persistent second-class citizen across all tools, with fresh regressions appearing in Claude Code, Codex, and Pi simultaneously — suggesting platform teams lack dedicated Windows CI coverage.

---

## 2. Activity Comparison

| Tool | Issues (Hot/Active) | PRs (Active) | Releases (24h) | Release Velocity | CI Health |
|------|---------------------|--------------|----------------|-------------------|-----------|
| **Claude Code** | 10 | 4 | 1 (v2.1.233) | Weekly patch cadence | Stable |
| **OpenAI Codex** | 10 | 10 | 5 (rust-v0.148.0-alpha.14–.18) | Rapid-fire daily | Stable |
| **Gemini CLI** | 10 | 10 | 2 (nightly) | Nightly alpha | Stable |
| **Copilot CLI** | 10 | 3 | 2 (v1.0.80, v1.0.81-0) | Bi-weekly patch | Stable |
| **Qwen Code** | 10 | 10 | 3 (v0.21.12, nightly, preview) | High — nightly + stable | Red on main |
| **CodeWhale (DeepSeek TUI)** | 10 | 10 | 1 (v0.9.8) | Slow stable | Red on main (3 fixes) |
| **Pi** | 10 | 10 | 1 (v0.84.2) | Mid-frequency | Stable |
| **Kimi Code** | 4 | 0 | 0 | No changes | Stable |
| **OpenCode** | 10 | 10 | 0 | No stable release | Stable |

**Key observations:**
- **Codex** and **Gemini** are pushing alpha/nightly releases at unprecedented velocity (5+ per day), prioritizing speed over stability.
- **Qwen Code** and **CodeWhale (DeepSeek TUI)** are actively shipping features but **struggling with CI health** — both have red-on-main incidents this week.
- **Kimi Code** is effectively dormant (no PRs, no releases) — but that may reflect a quiet day, not project health.
- **Claude Code** leads in **community engagement per issue** (96 👍 on a single macOS bug, 63 comments), indicating the largest user base.

---

## 3. Shared Feature Directions

| Theme | Tools | Specific Needs |
|-------|-------|----------------|
| **Cross-tool memory/persistence** | Kimi (#1283, #2269), Gemini (#26522), Claude Code (#79217) | Configurable memory limits; dual-mode (auto/manual) memory; session handoff across devices |
| **Windows reliability** | Claude Code (#86619, #86473), Codex (#38547, #38554), Pi (#7547), Gemini (#25378) | PowerShell integration, networking (ECONNRESET), whole-system stutter, permission prompt regressions |
| **False-positive safety filters** | Claude Code (#84266, #71985), Copilot CLI (#28015), Codex (#28015) | Cyber-category false positives blocking legit security research; users want opt-out or deferred prompts |
| **Multi-agent orchestration visibility** | Claude Code (#24537), Gemini (#22598), OpenCode (#42657), Copilot CLI (#4306) | Real-time introspection into nested/parallel agents; subagent trajectories; dashboard views |
| **Session resilience/recovery** | Codex (#24287), Copilot CLI (#4489, #4493), OpenCode (#42605), Qwen Code (#8678) | Stuck "Thinking" states; resume after crash; no data loss on session termination |
| **Environment-based permission profiles** | Codex (#38673), Claude Code (forward_user_identity), Copilot CLI (#4482) | Per-environment access control; avoid repetitive prompts |
| **Model capability negotiation** | Copilot CLI (#4345), Pi (#8146, #8096), CodeWhale (#5373) | Respect model-specific limits; fix catalog drift (output caps, reasoning modes) |
| **AST-aware code tools** | Gemini (#22745), OpenCode (OPC context), Qwen Code (ledger reads) | Token-efficient project navigation; precise context loading |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI |
|-----------|-------------|--------------|------------|-------------|
| **Target user** | Power CLI users, polyglot devs | Enterprise desktop-first users | Experimental bash-native power users | Enterprise GitHub-centric teams |
| **Key strength** | Breadth (worktrees, gitlab MR, agent views); mature permission model | Desktop app polish; multi-platform stability; plugin ecosystem (Chrome integration) | OS-sandboxed bash execution philosophy; nightly innovation (SSR Agent self-fixing) | Enterprise org policy integration; GitHub-native workflows |
| **Achilles heel** | Windows regressions; billing surprises ($995 auto-recharge) | Windows whole-system stutter; release regression velocity | Hangs (unknown root cause); subagent autonomy trust | OAuth/metadata validation over-strictness; session fragility |
| **Unique approach** | GitLab-native (`!N` MR), bash completions | Electron/React desktop; HID integration; hardware-aware | SSR Agent (autonomous PR self-fixing); PTY resource discipline | GitHub-first security posture (PR automation migration) |

| Dimension | Qwen Code | Pi | CodeWhale (DS TUI) | Kimi Code |
|-----------|------------|-----|--------------------|-----------|
| **Target user** | Chinese-market CLI-deep users; review automation | Bash-native TUI hobbyists; provider-agnostic enthusiasts | DeepSeek-model loyalists; Rust CLI aficionados | Moonshot-model users; Chinese-speaking devs |
| **Key strength** | /review subsystem maturity (resume, ledger, symlink hardening); WebBridge browser control | Provider breadth (Copilot, xAI, SiliconFlow); clipboard correctness; extension API | First-class local DS4; model guardian tier; registry listing aspiration | — (dormant) |
| **Achilles heel** | Memory growth; daemon resource bounding; SDK validation drift | TUI perf (100% CPU streaming); Windows/WSL weak | CI flakiness; schema overload (32-field tool); Rust error-handling debt | No activity; persistent memory gap |
| **Unique approach** | Round-aware convergence in reviews; E2E SWE-bench validation | Session-preview caching; compaction reuse of provider caches | Fail-closed defaults; deny-by-default footprint gate | Async HTTP push via webhook sink; configurable local DS4 |

---

## 5. Community Momentum & Maturity

| Tool | Momentum Score | Maturity Signals |
|------|----------------|------------------|
| **Claude Code** | ★★★★★ | Largest community (96 👍 issues), patch releases weekly, multi-month issues still open suggests scale of user base |
| **OpenAI Codex** | ★★★★★ | 10 open PRs, 5 alpha releases/day, but trust erosion: missing changelog, whole-system stutter reports have unusually negative tone |
| **Gemini CLI** | ★★★★½ | SSR Agent (self-fixing bots) is a force multiplier; 25 PRs + 50 issues updated/day; strong community support for design patterns |
| **Copilot CLI** | ★★★★ | Steady but quieter; community is focused on enterprise reliability; 3 PRs in 24h is low for a major tool |
| **Qwen Code** | ★★★★ | Rapid feature velocity, but red-on-main CI suggests process debt; Chinese-market focus limits Western community size |
| **Pi** | ★★★½ | Thoughtful maintainers; 10 active PRs, 10 hot issues; Windows/WSL thread is community-driven roadmap input |
| **CodeWhale (DS TUI)** | ★★★ | Rebranding moment; active contributor (EvanProgramming) doing deep bug fixes; community is small but technically sharp |
| **OpenCode** | ★★★½ | Contributor-led refactors (kitlangton streak); billing/quota complaints are its biggest trust issue |
| **Kimi Code** | ★★ | No activity; flagship request (#1283) has 39 comments since February but no maintainer response |

**Rapidly iterating:** OpenAI Codex, Gemini CLI, Qwen Code
**Mature but consolidating:** Claude Code, Copilot CLI, Pi
**Stalling:** Kimi Code (no signal)

---

## 6. Trend Signals & Recommendations for Developers

### Industry Trends (from community feedback)

1. **Agent-native OS sandboxing is the next big battleground.** Gemini's bash-affinity proposal (#19873) and Codex's managed-deny Windows sandbox (#38660) both point to secure-by-default command execution as the differentiator — expect all tools to follow.

2. **Observability will become a first-class feature.** Multi-agent orchestration visibility (#24537, #22598), subagent trajectories, and real-time dashboards are moving from nice-to-have to mandatory as teams run production workloads with parallel sub-agents.

3. **Interactive prompt handling is a liability.** Every tool struggles with scaffolding tools (Vite, Git) that expect TTY input. Solutions like Pi's `-ne` non-interactive mode and Gemini's behavioral evals for `npm create` scenarios represent early attempts to solve this systemic problem.

4. **Windows is the weakest link.** While mac/Linux communities are relatively happy, Windows-specific regressions — from Claude Code's Git Bash permission prompts to Codex's whole-system stutter — are generating the most intense negative sentiment. If you target Windows customers, fix this first.

5. **Safety filters are eroding trust.** Legit security research being blocked (Claude Code cyber false-positives), routine git ops being interrupted (Copilot CLI #28015), and model-switching errors (#84266) suggest the current safety architecture is too coarse-grained. Expect a shift toward "verify first, interrupt later" or deferred prompts after a working session.

### Practical Recommendations

- **If you need multi-provider flexibility and want to experiment with agentic self-healing:** Try **Gemini CLI** — the SSR Agent initiative is real, and the nightly releases are where the innovation lives.
- **If you're on Windows and value stability:** Avoid **OpenAI Codex** (whole-system stutter is a dealbreaker until fixed) and audit **Claude Code** regressions first (#86619). **Copilot CLI** remains the most Windows-stable choice despite its model-catalogue issues.
- **If you build on local/self-hosted models:** **Pi** leads with provider breadth (Baseten, Z.AI, SiliconFlow, xAI), while **CodeWhale** offers first-class local DS4 setup. Both have fresh fixes for provider-catalog drift.
- **If you care about terminal performance on long sessions:** **Pi's** TUI perf work (#6665) is the most thoughtful; **Gemini's** PTY leak fixes (#20916, #27154) solve a real macOS exhaustion bug that plagues marathon sessions.
- **If you're choosing a primary CLI for an enterprise team:** **Claude Code** has the strongest community support and most permissive license, but budget for **billing surprises** (#83062: $995 auto-recharge). **Copilot CLI** is the safest default for GitHub-centric orgs, but verify model catalogue syncing (#4390) if you enable Claude models.
- **If you're evaluating ecosystem integration:** **OpenCode** has the most aggressive contributor-community-driven refactoring (kitlangton's protocol hardening) and the cleanest architecture for third-party plugins — but is still young operationally (ID-wraparound bug on 2026-08-14 is a cautionary tale for time-based bugs).

---

*Report compiled from public GitHub community data across all major AI CLI developer tools on 2026-08-15.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot: 2026-08-15 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following PRs have drawn the most community discussion and represent the most significant Skill activity in the repository.

### #1 — skill-creator eval fix (PR #1298) | **Status: Open**
**[View PR](https://github.com/anthropics/skills/pull/1298)** | Author: MartinCajiao

The single most-discussed PR in the repository focuses on a critical bug in the `skill-creator` evaluation pipeline. `run_eval.py` consistently reports `recall=0%` for every skill description regardless of content — meaning the description-optimization loop has been "optimizing against noise" (referencing Issue #556 with 10+ independent reproductions).

**Discussion highlights:** The fix installs the eval artifact as a real skill rather than a command file, corrects Windows stream reading, improves trigger detection, and adds parallel worker support. This PR consolidates fixes proposed across at least three other PRs (#1099, #1050, #539), making it the de facto canonical fix for a well-documented pain point.

---

### #2 — document-typography (PR #514) | **Status: Open**
**[View PR](https://github.com/anthropics/skills/pull/514)** | Author: PGTBoos

Typographic quality control for AI-generated documents. Targets orphan word wrap (1–6 words spilling to the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.

**Discussion highlights:** Community engagement centers on the practical reality that these typographic defects affect every document Claude generates, and users rarely request good typography explicitly — making this a "silent quality" skill with broad applicability across the document-skills family.

---

### #3 — ODT skill for OpenDocument formats (PR #486) | **Status: Open**
**[View PR](https://github.com/anthropics/skills/pull/486)** | Author: GitHubNewbie0

OpenDocument Text creation, template filling, and ODT-to-HTML parsing. Covers `.odt`, `.ods`, and related ISO-standard formats, including LibreOffice document workflows.

**Discussion highlights:** Strong demand signal for non-Microsoft document formats — the community clearly wants parity with the existing DOCX/PDF skills for open-source tooling. The skill positions itself as the LibreOffice-native counterpart to the existing document skills.

---

### #4 — frontend-design skill clarity overhaul (PR #210) | **Status: Open**
**[View PR](https://github.com/anthropics/skills/pull/210)** | Author: justinwetch

Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is executable within a single conversation and guidance is specific enough to steer behavior without ambiguity.

**Discussion highlights:** The discussion reflects broader community concern that some Skills read like developer documentation for humans rather than operational instructions for Claude — a theme echoed in Issue #202 about skill-creator needing a best-practice rewrite. This PR models the corrective direction.

---

### #5 — skill-quality-analyzer + skill-security-analyzer (PR #83) | **Status: Open**
**[View PR](https://github.com/anthropics/skills/pull/83)** | Author: eovidiu

Two meta-skills for the `example-skills` collection: (1) **skill-quality-analyzer** evaluates Skills across five dimensions (Structure & Documentation, etc., weighted 20% each), and (2) **skill-security-analyzer** provides security auditing for Skills.

**Discussion highlights:** Positions Skills themselves as the audit target. Community interest reflects maturing ecosystem hygiene — now that Skills exist in volume, the community wants tooling to assess Skill quality and security before adoption.

---

### #6 — OOXML w:id collision fix for DOCX (PR #541) | **Status: Open**
**[View PR](https://github.com/anthropics/skills/pull/541)** | Author: Lubrsy706

Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. In OOXML, `w:id` is a shared ID space across bookmarks, tracked changes, comments, and move ranges — the SKILL.md examples used hardcoded low IDs that commonly collide.

**Discussion highlights:** The discussion underscores the precision required for document-format Skills. This is a correctness fix in a heavily used skill, and its traction indicates the community's reliance on the DOCX skill in production workflows.

---

## 2. Community Demand Trends

The following demand signals emerge from the most-discussed Issues:

### Security & Trust Boundaries — **Highest urgency**
**Issue #492** (43 comments): Community skills distributed under the `anthropic/` namespace impersonate official Anthropic skills, creating a trust boundary vulnerability where users may grant elevated permissions to community skills they believe are official. This is the single most-commented issue in the repository and reflects deep concern about the supply-chain integrity of the Skills ecosystem.

### Org-wide Skill Sharing
**Issue #228** (16 comments, 8 👍): Users want org-wide skill sharing in Claude.ai without manually downloading `.skill` files and sending via Slack/Teams. A shared skill library or direct sharing link is the most-requested infrastructure feature.

### skill-creator Tooling Reliability
**Issue #556** (12 comments, 7 👍): The `run_eval.py` 0% trigger-rate bug is the most-cited functional defect. The skill-creator's evaluation loop — the community's primary tool for iterating on Skill descriptions — is fundamentally broken, and this is a top-priority fix request.

### Duplicate Skill Conflicts
**Issue #189** (6 comments, 9 👍): Installing both `document-skills` and `example-skills` plugins yields identical skills, causing duplicates in the Claude Code context window — a resource-waste and confusion issue for users installing multiple plugins.

### Context Window Exhaustion
**Issue #1487** (4 comments): The `claude-api` skill eagerly injects ~156k tokens in a single tool call, exhausting the context window — highlighting an emerging class of problems around Skill size and token discipline.

---

## 3. High-Potential Pending Skills

These PRs have active discussion, are not yet merged, and appear close to landing.

### testing-patterns (PR #723) | Created 2026-03-22
**[View PR](https://github.com/anthropics/skills/pull/723)** | Author: 4444J99

Comprehensive testing-stack skill: Testing Trophy model philosophy, unit testing (AAA pattern, naming, pure functions, edge cases), React component testing with Testing Library, and full-stack coverage. Fills the most-requested functional gap in the Skills collection — no other skill covers testing patterns at this breadth.

### self-audit — mechanical verification + reasoning quality gate (PR #1367) | Created 2026-06-28
**[View PR](https://github.com/anthropics/skills/pull/1367)** | Author: YuhaoLin2005

Universal output-audit skill: mechanical file verification (confirm every claimed output file exists), then a four-dimension reasoning audit in damage-severity priority order. Works with any project, model, or stack. Complements the proposed reasoning-quality-gate pipeline in Issue #1385 — the author is actively building out this design.

### ServiceNow platform skill (PR #568) | Created 2026-03-08
**[View PR](https://github.com/anthropics/skills/pull/568)** | Author: Vanka07

Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub. Notably **still being updated as of 2026-08-12** — the longest-running PR with active author engagement, suggesting it is close to merge-ready.

### pyxel — retro game development (PR #525) | Created 2026-03-05
**[View PR](https://github.com/anthropics/skills/pull/525)** | Author: kitao

Skill for pyxel-mcp (MCP server for the Pyxel retro game engine). Covers write → run_and_capture → inspect → iterate workflow for pixel-art/8-bit games in Python. Updated as recently as 2026-07-15. Niche but has maintained steady community interest; likely to merge once MCP integration details are finalized.

### plan-file-hygiene (PR #1479) | Created 2026-07-25
**[View PR](https://github.com/anthropics/skills/pull/1479)** | Author: tonydzi

Addresses the lifecycle gap for planning artifacts: planning files accumulate with no defined lifecycle. Emerging demand for process discipline — Skills that manage the meta-workflow of agent sessions rather than content generation.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand at the Skills level is tooling that makes the Skills ecosystem itself reliable — specifically, fixing the broken evaluation pipeline, securing the trust boundary of community-skill distribution, and establishing quality/security analysis as first-class Skills.**

---

# Claude Code Community Digest — 2026-08-15

## Today's Highlights
A new patch release (v2.1.233) adds GitLab MR support to `--worktree` and agent views, alongside an opt-in identity-forwarding setting for proxy deployments. The community is rallying around a long-standing macOS bug (#69238) affecting API retries during Advisor triggers (96 👍), while Windows users report a fresh regression in 2.1.232 with unsuppressable permission prompts in Git Bash. Several closed issues confirm a pattern of false-positive safety filters on legitimate security research, suggesting a growing need to tune the cyber-category guardrails.

## Releases
**[v2.1.233](https://github.com/anthropics/claude-code/releases/tag/v2.1.233)** — Two changes:
- Added GitLab merge request URL support to `--worktree` flag and agent views (MRs display as `!N`)
- Added opt-in `forward_user_identity` apps gateway setting on Anthropic upstreams to send signed-in user identity as headers (useful for proxies behind the gateway)

## Hot Issues
1. **[#69238 — API error when Advisor is triggered (macOS)](https://github.com/anthropics/claude-code/issues/69238)** — 63 comments, 96 👍. Long-running (since June) and unresolved. "No response from API · Retrying in 2m 25s" appears when using Sonnet base with Opus 4.8 advisor. High community engagement suggests this is a widespread reliability blocker.

2. **[#86619 — Windows Git Bash: static-analysis false positives (2.1.232)](https://github.com/anthropics/claude-code/issues/86619)** — Opened yesterday, already 9 comments. Read-only `cd` compound commands trigger constant, unsuppressable permission prompts on two independent machines. Correlates exactly with the auto-mode rollout — likely a regression from recent permission changes.

3. **[#30869 — Unarchive sessions in desktop app (closed)](https://github.com/anthropics/claude-code/issues/30869)** — 29 comments, 57 👍. Feature landed after 5 months of community pressure. Users wanted a way to restore archived sessions in the desktop UI.

4. **[#24537 — Agent Hierarchy Dashboard](https://github.com/anthropics/claude-code/issues/24537)** — 16 comments. Unified real-time visualization for multi-agent workflows across TUI and Desktop. Demand is growing as multi-agent patterns become mainstream.

5. **[#11791 — Browser automation incompatible with web sandbox proxy](https://github.com/anthropics/claude-code/issues/11791)** — 11 comments. HTTPS CONNECT tunneling not supported by the sandbox proxy, breaking Playwright/Puppeteer/Selenium. The community wants this documented to avoid wasted debugging.

6. **[#86619 / #86473 — Windows networking ECONNRESET (Windows 11)](https://github.com/anthropics/claude-code/issues/86473)** — "Connection lost mid-response" on all Code surfaces while raw HTTPS to `api.anthropic.com` is healthy. Flagged as duplicate, but indicates a Windows-specific networking stack issue in 2.1.229+.

7. **[#84266 — model_refusal_fallback blocks tmux orchestration](https://github.com/anthropics/claude-code/issues/84266)** — Legitimate 10–15 parallel sessions via tmux repeatedly trigger "cyber" refusal fallback; coordinator session blocked when `switchModelsOnFlag: false`. Critical for power users running local multi-session setups.

8. **[#83063 — 251+ instruction-following failures (EU consumer)](https://github.com/anthropics/claude-code/issues/83063)** — German customer documents 251 failures across 54 sessions of the same project, requests human support. Highlights model reliability concerns in production workflows.

9. **[#85205 — Auto-compact fires at 150k on claude-opus-5[1m]](https://github.com/anthropics/claude-code/issues/85205)** — Inconsistent auto-compact window across sessions with the same model ID. `/context` itself reports 150k on one session and 1M on another — confusing and potentially wasteful.

10. **[#84029 — Crash leaves terminal in mouse-tracking mode](https://github.com/anthropics/claude-code/issues/84029)** — Restore handler registered on graceful exit only; crashes leave the terminal unusable with raw escape sequences injected per mouse move. Small fix, big UX impact.

## Key PR Progress
1. **[#86746 — fix(security-guidance): preserve Python probe errors](https://github.com/anthropics/claude-code/pull/86746)** — Fixes #86709. `sg-python.sh` now preserves stderr from interpreter probes so users see why all candidates failed instead of a generic message.

2. **[#86626 — feat: shell completions (bash, zsh, fish)](https://github.com/anthropics/claude-code/pull/86626)** — Adds tab-completion scripts that stay in sync with the installed CLI. Works with stock macOS bash 3.2. Addresses a long-standing ergonomics gap for CLI-heavy users.

3. **[#83890 — Create pylint.yml](https://github.com/anthropics/claude-code/pull/83890)** — CI linting workflow via Pylint. Stale since Aug 4; community contribution quality unknown.

4. **[#41611 — add the missing source to claude code](https://github.com/anthropics/claude-code/pull/41611)** — Long-open (since March). Vague description; likely cosmetic or docs-only.

## Feature Request Trends
- **Multi-agent orchestration visibility** — #24537 (Agent Hierarchy Dashboard) reflects a broader push for real-time introspection into nested/parallel agent workflows. Users want TUI and desktop-grade monitoring.
- **Configurable memory limits** — #79217 asks for the MEMORY.md 200-line/25KB cap to be configurable. Power users want to trade context for persistence depth.
- **Workflow resumption** — #86089: workflows should support resuming agent sessions for multi-turn interactions, enabling nested subagents with cache reuse.
- **Browser context enumeration** — #86807: Browser Agent MCP should list persisted browser contexts/logins (like Browserbase) — a concrete gap in the Cowork/Browser Agent packaging.

## Developer Pain Points
- **False-positive safety filters** (cyber category) are a recurring theme: #71985, #71986, #71978, #84266, #86804 — legitimate security research (reverse engineering, WAF development, drone firmware analysis) gets halted or model-switched, sometimes for days.
- **Windows-specific regressions** keep surfacing: Git Bash permission prompts (#86619), MSIX update file-lock (#86555), ECONNRESET networking (#86473). The auto-mode rollout in 2.1.232 appears to have introduced at least one Windows regression.
- **Billing surprises** — #83062: $995.67 in auto-recharges after "included limits reset" on an Individual plan. Billing transparency remains a hot-button topic.
- **Context-window inconsistency** (#85205) — the same model ID yielding different auto-compact thresholds across sessions is a trust-breaking experience for users optimizing around context limits.
- **Session lifecycle gaps** — archived projects cannot be restored (#85272), sessions cannot be resumed in workflows (#86089), and crashes leave terminals in broken states (#84029). These are "last-mile" UX gaps that erode confidence in daily use.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest - 2026-08-15

## Today's Highlights
The Codex ecosystem is facing a **critical Windows performance crisis** as multiple reports confirm the latest `26.810.4967.0` release causes system-wide stuttering, kernel-pool exhaustion, and idle CPU busy-loops — with users demanding a rollback. Meanwhile, the development team pushed out a rapid-fire series of Rust CLI alpha releases (`0.148.0-alpha.14` through `.18`) alongside a strong wave of macOS-specific stability fixes and Windows sandbox security hardening. Notably, the Windows release **lacks a documented changelog**, leaving users debugging blind in the community threads.

---

## Releases

**`rust-v0.148.0-alpha.14` → `rust-v0.148.0-alpha.18`** (5 releases in 24h)

No release notes or changelog were published for these rapid alpha iterations. Given the timing and the concurrent wave of PRs addressing TUI startup, permission profiles, and sandbox enforcement, these alphas likely contain incremental fixes for the macOS stability regressions (#38468, #38637) and Windows sandbox policy gaps.

🔗 [View all releases](https://github.com/openai/codex/releases)

---

## Hot Issues

### 1. [**#20214**](https://github.com/openai/codex/issues/20214) — Windows 11: App freezes/stutters despite sufficient resources
The **oldest and most-voted** performance issue (84 👍, 101 comments) remains open after **3.5 months**. The community reports freezing persists even on capable hardware (Ryzen 5/32GB). This long-running thread was likely the catalyst for the current Windows performance investigation wave.

### 2. [**#38547**](https://github.com/openai/codex/issues/38547) — Release `26.810.4967` idle CPU busy-loop in Chrome plugin app-server
**Newly filed (Aug 14) with 12 comments already** — this is the first concrete diagnosis of the `26.810.4967` regression: the Electron main process spins a busy-loop while idle, triggered by the Chrome plugin app-server hashing. High-signal bug report with a clear regression point (`26.803 → 26.810`).

### 3. [**#38554**](https://github.com/openai/codex/issues/38554) — "Entire PC stutter; fully exiting Codex fixes it immediately"
**Critical community signal** — multiple users independently confirmed that the `26.810.4967.0` update causes whole-system PC stutter, and only fully exiting Codex restores normal operation. Strong reproduction data (build `26200.9168`, 20 logical processors).

### 4. [**#38468**](https://github.com/openai/codex/issues/38468) — macOS: 100%+ CPU, 10+ GB RAM, frequent UI hangs
**The macOS counterpart** to the Windows regression. Users on Apple Silicon report severe resource exhaustion and hangs on `26.810.41047`. Combined with #38637, this suggests the `26.810` release had **cross-platform performance regression**, though the macOS reports are fewer.

### 5. [**#25453**](https://github.com/openai/codex/issues/25453) — powershell.exe spawned every second for process polling
Long-standing issue (since May) — Codex Desktop spawns PowerShell every second, causing high CPU. Still open after 2.5 months with 26 comments. This points to a **fundamentally inefficient Windows process-polling design**.

### 6. [**#29532**](https://github.com/openai/codex/issues/29532) — macOS: SQLite log churn partially fixed but persists
Good **community observation**: the user explicitly tested the partial fix, confirmed `responses_websocket` is reduced, but `#29457` remains unaddressed. This level of detailed regression tracking helps maintainers prioritize. Still open after 7 weeks.

### 7. [**#38583**](https://github.com/openai/codex/issues/38583) — Windows 11: Mouse lag + ~10% CPU while idle on `26.813.12317`
**Another Windows release** (`26.813.12317`) exhibits the same idle resource consumption. This confirms the issue **persists across multiple recent Windows builds** — not a single-release regression.

### 8. [**#28015**](https://github.com/openai/codex/issues/28015) — False-positive cybersecurity safety check blocks normal git maintenance
**Developer trust issue** — Codex CLI interrupted a routine `git` maintenance session with a high-severity safety prompt, wasting a paid interactive session. Users need a "verify before you interrupt" discipline for safety checks. 24 comments, still open.

### 9. [**#24287**](https://github.com/openai/codex/issues/24287) — Stuck in "Thinking" state; Stop fails; turn becomes invisible
**Core UX reliability bug** — sessions permanently stuck in "Thinking" state, with the Stop button failing and turns disappearing entirely after restart. 8 👍 and 23 comments indicate this is a **major workflow-breaker** for desktop users.

### 10. [**#33912**](https://github.com/openai/codex/issues/33912) — HID discovery freezes Electron main thread (Work Louder/Codex Micro)
A **niche but critical hardware-integration bug** — USB HID device discovery blocks the main thread, making the app unresponsive. Highlights a systemic issue: peripheral detection should never block UI.

### Honorable Mention: [**#38510**](https://github.com/openai/codex/issues/38510) — Chrome native host retry loop consuming a CPU core
Filing on the same day as the busy-loop report (#38547), this may be the **root cause** of the idle CPU issue — the native messaging host enters a retry loop.

---

## Key PR Progress

### 1. [**#31644**](https://github.com/openai/codex/pull/31644) — `feat(linux-sandbox): route DNS through managed proxy`
**High-value networking fix** — adds an opt-in DNS proxy adapter inside bubblewrap for native DNS clients that don't respect HTTP/SOCKS proxies. Currently the largest open feature PR with code-review label.

### 2. [**#31471**](https://github.com/openai/codex/pull/31471) — Extract apps cache logic into `ConnectorRuntimeManager`
**Architecture refactor** (1/4 PR series) — extracting and scoping the App tools cache by account/user/workspace. This is important groundwork for fixing stale context issues and the Windows performance problems.

### 3. [**#38660**](https://github.com/openai/codex/pull/38660) — Enforce managed deny-read rules in the Windows sandbox
**Security hardening** — closes a gap where Windows sandbox requests could lose filesystem deny rules, and fails closed rather than running unprotected when unsupported policies exist.

### 4. [**#38675**](https://github.com/openai/codex/pull/38675) — Exclude shortcut-modified input from TUI paste bursts
**Ubuntu TUI UX fix** — paste-burst detection now correctly excludes Super/Hyper/Meta-modified character events (e.g., terminal shortcut conflicts), while still treating Shift/AltGr as text input.

### 5. [**#38673**](https://github.com/openai/codex/pull/38673) — Honor per-environment permission profiles
**Access control feature** — enables per-environment permission profiles with finer-grained execution and capability-root selection, overriding thread permissions when needed.

### 6. [**#38657**](https://github.com/openai/codex/pull/38657) — Skip terminal hyperlink layout when no links are present
**Performance micro-optimization** — avoids unnecessary paragraph-layout work in the TUI when lines contain no hyperlinks. Small, but relevant to terminal performance.

### 7. [**#38647**](https://github.com/openai/codex/pull/38647) — Add override to skip project configuration
**Developer workflow feature** — an explicit override to skip project-root discovery and config layers, useful for CI and tests. Keeps session/cloud config active, which matches the community's request for more granular control.

### 8. [**#38645**](https://github.com/openai/codex/pull/38645) — Deliver gRPC code-mode notifications without truncation
**Eliminates 1,024-byte truncation** on gRPC code-mode notifications — correct fix for lossy notification delivery.

### 9. [**#38644**](https://github.com/openai/codex/pull/38644) — Show onboarding when Codex home lacks auth state
**First-run experience fix** — the composer is now correctly blocked until authentication is established, treating state-bearing (but unauthenticated) Codex home directories as unconfigured.

### 10. [**#38643**](https://github.com/openai/codex/pull/38643) + [**#38642**](https://github.com/openai/codex/pull/38642) — TUI startup overhaul (composer availability)
The pair delays the composer until first-login onboarding completes, while a provisional composer remains editable during startup work — carrying text/cursor state across transitions. Quality-of-life improvement for slower startup environments.

---

## Feature Request Trends

1. **Memory/CPU diagnostics in-app** — The sheer volume of "high CPU/RAM while idle" reports (at least 10 distinct Windows issues) suggests users want built-in diagnostics to see what Codex is doing (e.g., which process, which timer) rather than guessing from Task Manager and external profiling.

2. **Better error recovery & state persistence** — Issues like #24287 ("stuck in Thinking, Stop fails, turn invisible") and #34026 ("completed threads remain thinking, new messages queue locally") point to the need for **explicit session-state recovery** and "force refresh" controls.

3. **Repository-aware task handoff** (#34582) — Users want sanitized, repository-aware context transfer between Codex App and CLI across workspaces.

4. **Removal/adjustment of aggressive safety checks** (#28015) — False-positive cybersecurity flags on routine git/DevOps operations are eroding trust. Users want an opt-out or "silent mode" after first confirmation.

5. **Configurable what's polled** (e.g., Git-origin polling #35775) — Polling-related performance issues could be mitigated with configurable polling intervals, or the ability to disable specific pollers entirely.

6. **Auto-scroll preference** (#34303) — Users want the response view to keep the **beginning** of the response visible, not follow generated text. A small but popular UX request (3 👍 within a day).

---

## Developer Pain Points

- **Windows performance is the #1 frustration** — The Windows desktop app makes the **entire system stutter**, not just Codex itself. Users report `PID 4` kernel-pool growth, DWM handle accumulation, and PowerShell-spawn storms. The community is unusually impatient because the app degrades the whole OS, forcing full exit to recover. This is a "must fix" for trust.

- **Frequent regressions on release** — Multiple reports cite `26.810 → 26.813` releases where new bugs appear immediately (busy-loops, mouse lag, stuck states). Developers want **more robust release gates** — even basic smoke tests for idle-process behavior would have caught these.

- **False-positive safety warnings blocking honest work** — The cybersecurity check interruption (#28015) hit a user's **paid** interactive session. The demand is not for removing checks, but for **lower-frequency, higher-precision** prompting.

- **Stuck sessions and unrecoverable threads** — When a turn gets stuck in "Thinking" and Stop fails, users lose the whole conversation. There's no "kill and recover" path. This is an **existential data-loss issue** for the app experience.

- **Background processes that don't stop when the window closes** — Reports (#34158) indicate that simply closing the Codex window doesn't stop the stutter; only killing the full process tree helps. Persistent background activity is seen as a **privacy and resource concern**.

- **Lack of release notes** — The rapid-fire alpha releases with no changelog (#14–#18) make it hard for the community to quickly identify which commit introduced a regression, extending the "what broke?" debugging phase.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-15

## Today's Highlights
The Gemini CLI project saw an active day with 25 PRs and 50 issues updated, headlined by fixes to subagent termination handling and a new nightly release. The "SSR Agent" initiative (autonomous self-fixing of issues) continues to dominate incoming PRs, with 14 auto-generated fixes merged or opened in the last 24 hours. Meanwhile, the community continues to report recurring pain points around agent reliability, shell hangs, and subagent utilization.

---

## Releases

**Nightly releases published today:**
- **v0.56.0-nightly.20260815.g2a87e7be1** — Includes SSR Agent fix migrating `process.env` to `vi.stubEnv` in a2a-server tests ([compare](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260814.gc0d192452...v0.56.0))
- **v0.56.0-nightly.20260814.gc0d192452** — Includes e2e test stability improvements and context-aware silent retries for capacity errors

No stable release published in the last 24 hours.

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments)
   Critical accuracy bug: `codebase_investigator` subagent reports success even when it hits `MAX_TURNS` before doing any work. Misleading termination reasons hide real interruptions. A fix PR (#28815) was opened today.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 comments, 8 👍)
   Community-reported issue where the generalist agent hangs indefinitely on trivial tasks like folder creation. Users report waiting over an hour. Workaround exists: explicitly instruct the model not to defer to subagents. High community engagement (8 upvotes).

3. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍)
   Simple CLI commands hang after completion with the shell showing "Awaiting user input." Recurring reliability issue affecting basic workflows.

4. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments)
   Browser subagent termination reason "GOAL" with failure in Wayland environments. Environment-specific blocking issue for Linux users.

5. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, 3 comments)
   Users report subagents (like generalist) activating despite Agent mode being disabled in configurations. Permission regression — significant security concern.

6. **[#19873 — Leverage model's bash affinity via OS sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, 8 comments)
   Enhancement EPIC: Gemini 3 models are "natively trained as bash users." Proposal for zero-dependency OS sandboxing while letting the model chain POSIX tools freely. Indicates a major architectural direction.

7. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments)
   Investigation into whether AST-aware tools can reduce token usage by precisely reading method bounds. Related EPIC (#22746) suggests `tilth` or `glyph` as starting points. Potential significant performance win.

8. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments)
   Auto Memory system never marks low-signal sessions as processed, causing repeated retries. Memory system reliability concern.

9. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments)
   CLI encounters 400 errors when more than 128 tools are available. The agent doesn't intelligently limit tool scope — problematic for power users with many MCP servers.

10. **[#22465 — Stuck at interactive prompt creating Vite app](https://github.com/google-gemini/gemini-cli/issues/22465)** (P2, 2 comments)
    Repeated issue where the agent hangs at interactive prompts during scaffolding. Team suggests adding a behavioral eval to force a fix.

---

## Key PR Progress

1. **[#28815 — Preserve original termination reason during subagent recovery](https://github.com/google-gemini/gemini-cli/pull/28815)** (P1, SSR Agent)
   Directly addresses #22323 — ensures `MAX_TURNS`/`TIMEOUT` interruptions aren't misreported as "GOAL success." The most impactful fix in the current batch.

2. **[#28738 — Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738)** (P2, community contribution, 6 comments)
   Enables subagent-to-subagent delegation and recursion via `tools:` frontmatter. Fixes #22092. Community PR addressing a widely-requested capability.

3. **[#20916 — Prevent PTY file descriptor leak in ShellExecutionService](https://github.com/google-gemini/gemini-cli/pull/20916)** (P1)
   Fixes macOS PTY exhaustion (`kern.tty.ptmx_max` = 511) by properly closing master file descriptors after process exit. Long-standing reliability fix (opened March, updated today).

4. **[#27154 — Prevent PTY memory leak with synchronous deletion](https://github.com/google-gemini/gemini-cli/pull/27154)** (P2)
   Companion fix to #20916: PTY entries never garbage-collected due to async deletion race. Both are essential for long-running sessions.

5. **[#28812 — Prevent indefinite TUI hang by adding execution timeouts](https://github.com/google-gemini/gemini-cli/pull/28812)** (P1, SSR Agent)
   Fixes hang at "Initializing..." when `getProcessInfo()` fails (e.g., missing `ps` binary in bare Linux). Timeout-based recovery.

6. **[#28816 — Fix silent hang in MessageBus.request](https://github.com/google-gemini/gemini-cli/pull/28816)** (SSR Agent)
   Unhandled promise rejection in `publish()` caused silent 60-second hangs. Ensures failures surface immediately.

7. **[#28597 — Load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)** (P2)
   Fixes load-order race condition: `.env` files weren't loaded before settings expansion, causing `process.env` placeholders to resolve incorrectly. Merged.

8. **[#25378 — Fix Windows ripgrep `EFTYPE` error](https://github.com/google-gemini/gemini-cli/pull/25378)** (P2, community)
   Fixes `grep_search` failing on Windows when downloaded binary has wrong architecture. Cross-platform reliability fix.

9. **[#28603 — Upgrade sandbox Dockerfile to Node 22](https://github.com/google-gemini/gemini-cli/pull/28603)** (P1, security)
   Node 20 reached EOL — sandbox runtime now expects Node 22. Security-critical update for sandboxed execution.

10. **[#28817 — Retain executing subagent tool calls in hook state](https://github.com/google-gemini/gemini-cli/pull/28817)** (SSR Agent)
    Fixes dropped `Executing` tool calls from subagents entering hook state — important for observability and policy enforcement.

---

## Feature Request Trends

1. **Sandboxed bash-native execution** (#19873): Users want Gemini models to leverage their native bash proficiency with safer OS-level sandboxing.

2. **Agent-to-agent delegation** (#22092 via #28738): The community strongly wants recursive subagent invocation and inter-agent collaboration.

3. **AST-aware codebase tooling** (#22745, #22746): Investigate AST-aware reads/search/mapping for token efficiency and precision.

4. **Browser agent resilience** (#22232): Automatic session takeover and lock recovery for persistent browser profiles.

5. **Subagent observability** (#22598, #21763): Users want subagent trajectories visible via `/chat share` and included in `/bug` reports.

6. **Proactive tool usage** (#21968): Users want the model to proactively use custom skills and subagents — currently it needs explicit instruction.

---

## Developer Pain Points

1. **Hangs and indefinite waits** — Recurring theme: generalist agent hangs (#21409), shell "waiting input" hang (#25166), TUI initialization hang (#28812), MessageBus silent hang (#28816). Agent reliability under unexpected conditions is the #1 concern.

2. **Misleading agent behavior** — Termination reasons misreporting success (#22323) and subagents executing despite disabled settings (#22093) erode trust in the agent framework.

3. **Resource leaks on long sessions** — PTY exhaustion (#15945 via #20916, #27154) causes mac device-wide failures after extended use.

4. **Tool proliferation** — 400 errors with >128 tools (#24246): the agent doesn't scope tools intelligently, breaking power users with many MCP servers.

5. **Save file/image handling gaps** — Symlinked agents not recognized (#20079), WSL2 clipboard image paste unsupported (#27588), ripgrep architecture mismatch on Windows (#25378). Cross-platform edge cases remain friction points.

6. **Scaffolding/interactive prompts broken** — Vite app creation stuck at prompt (#22465), shell "Awaiting user input" after completion (#25166). Interactive command handling is fragile.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**2026-08-15**

---

## 1. Today's Highlights

Two patch releases (v1.0.80 and v1.0.81-0) shipped with model configuration updates, but the community is focused on a cluster of regressions: MCP OAuth authentication breaking against Atlassian and GitLab servers (RFC 8414 issuer mismatch), and a significant number of Enterprise users reporting that Claude models are unavailable despite being enabled in org settings. The issue tracker also shows growing friction around authentication policies, plugin dependency management, and session reliability — several of these filed within the last 24 hours.

---

## 2. Releases

**v1.0.81-0** (2026-08-15)
- **Improved:** Update model configurations

**v1.0.80** (2026-08-14)
- **Improved:** Update model configurations

*Source: [GitHub Releases](https://github.com/github/copilot-cli/releases)*

---

## 3. Hot Issues

### #4480 — Atlassian MCP OAuth fails with "Incompatible authorization server" — regression from 1.0.71 *(CLOSED)*
**Community reaction:** 6 👍, 4 comments — actively discussed, high confidence this is a real regression.
MCP OAuth discovery against `mcp.atlassian.com` breaks on version 1.0.79 with an RFC 8414 issuer mismatch. The issue was closed, but a new report (#4490) suggests the fix may not have fully landed in 1.0.80.
[View Issue](https://github.com/github/copilot-cli/issues/4480)

### #4439 — Copilot CLI 1.0.79 rejects GitLab MCP OAuth metadata with RFC 8414 issuer mismatch
**Community reaction:** 2 👍, 3 comments
Self-managed GitLab MCP servers using OAuth 2.0 Dynamic Client Registration are rejected by the CLI's strict issuer validation. Combined with #4480, this is a pattern of over-strict OAuth metadata validation in recent versions.
[View Issue](https://github.com/github/copilot-cli/issues/4439)

### #4390 — Enabled organization models missing from catalogue (Claude Sonnet 5/Opus 5 and Kimi K3)
**Community reaction:** 4 👍, 6 comments
Models explicitly enabled by Copilot Business orgs are missing from the CLI's effective catalogue. Selecting them reports "This model is disabled by your..." — a confusing error since the model *is* enabled at the org level. Tied to a broader cluster of model availability bugs.
[View Issue](https://github.com/github/copilot-cli/issues/4390)

### #4345 — Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'
**Community reaction:** 4 👍, 6 comments
When two server-side feature flags are active, the CLI repeatedly throws `Reasoning effort 'medium' is not supported` during sub-agent execution. The error is non-fatal per call but spams logs and suggests poor handling of model capability mismatches.
[View Issue](https://github.com/github/copilot-cli/issues/4345)

### #4346 — MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN, blocking non-default MCP servers in CI *(CLOSED)*
**Community reaction:** 3 👍, 2 comments
In GitHub Actions, using the documented PAT-less setup with `GITHUB_TOKEN`, MCP registry policy fetches return 403 — blocking all non-default MCP servers in CI. Closed, but the workaround story is unclear.
[View Issue](https://github.com/github/copilot-cli/issues/4346)

### #4306 — Subtasks freeze and stop responding
**Community reaction:** 2 👍, 3 comments
In autopilot mode, complex multi-agent fleets (e.g., `speckit-implement` + `speckit-converge`) freeze at some point mid-session with no recovery. Long-running session reliability remains a sore spot.
[View Issue](https://github.com/github/copilot-cli/issues/4306)

### #4488 — Plugin updates fail with "Access is denied" when other Copilot CLI or VS Code sessions are open
**Community reaction:** 0 👍, 1 comment (filed 2026-08-14)
File locks from unrelated sessions block plugin updates on Windows. Anyone running multiple sessions or VS Code windows cannot update plugins without closing everything. Likely to gather traction.
[View Issue](https://github.com/github/copilot-cli/issues/4488)

### #4482 — `allowed_directories` in permissions-config.json do not suppress path-outside prompts
**Community reaction:** 0 👍, 0 comments (filed 2026-08-13)
Users who configure `allowed_directories` in `~/.copilot/permissions-config.json` still get "path outside your allowed directory list" prompts for shell commands. `add-dir` fixes it per-session, but the config file is ignored for shell commands.
[View Issue](https://github.com/github/copilot-cli/issues/4482)

### #4499 — v1.0.79 fatal "Committing semi space failed" OOM in autopilot
**Community reaction:** 0 👍, 0 comments (filed 2026-08-14)
A fatal V8 crash during long-running autopilot sessions where the heap was only ~607 MB of 4.3 GB — this is a host-RAM commit failure, not a heap limit. Rare but disruptive; may point to a leak or platform-specific issue on Windows.
[View Issue](https://github.com/github/copilot-cli/issues/4499)

### #4484 — Can't access rubber-duck anymore
**Community reaction:** 0 👍, 0 comments (filed 2026-08-14)
The experimental "rubber duck" feature has been removed from experimental features and is no longer discoverable via `/rubber-duck`. No deprecation notice appears to have been announced.
[View Issue](https://github.com/github/copilot-cli/issues/4484)

---

## 4. Key PR Progress

**Only 3 PRs were active in the last 24 hours**, all related to repository automation rather than product features. This appears to be a quiet day for code contributions.

### #4497 — Handle fork PR associations in invalid-label writer *(OPEN)*
Updates the trusted invalid-label writer to handle fork PR workflow runs where GitHub does not populate the PR association. The writer now searches using trusted workflow-run metadata and requires exactly one open PR match.
[View PR](https://github.com/github/copilot-cli/pull/4497)

### #4496 — Verify pull request workflow migration *(CLOSED, canary)*
A temporary workflow canary containing a documentation-only file to verify the recently migrated PR automation for fork-originated PRs. Intentionally closed after confirmation.
[View PR](https://github.com/github/copilot-cli/pull/4496)

### #4449 — Migrate pull request automation away from `pull_request_target` *(CLOSED)*
Migrates invalid-label automation off `pull_request_target` while preserving issue/PR closure behavior: close invalid issues directly with an issue-scoped write token, use a no-permission `pull_request` signal for mergeable PRs, and run privileged steps only for trusted paths.
[View PR](https://github.com/github/copilot-cli/pull/4449)

---

## 5. Feature Request Trends

Across all issues, four distinct feature directions are emerging:

1. **Plugin ecosystem maturity** — #4487 asks for a formal dependency model for marketplace plugins (inter- and intra-marketplace dependencies, automatic installation). Combined with #4488 (plugin update file locks), the plugin system is growing faster than its operational tooling.

2. **Reasoning-mode control** — #4495 requests support for GPT-5.6's `reasoning.mode` parameter (`standard` / `pro`). Developers want explicit control over model reasoning depth, not just the current effort-level presets.

3. **Better model catalogue freshness** — Multiple issues (#4390, #4422, #4494) show users being blocked by stale or incorrect model catalogues. The CLI repeatedly fails to reflect org-level model enablement. A model-catalogue refresh mechanism or clear cache-invalidation story is badly needed.

4. **Session persistence reliability** — #4489 (agent not restored on session resume), #4493 (`/restart` broken with `-w`), and #4477 (session lost on stop) all point to a need for more robust session state management.

---

## 6. Developer Pain Points

- **OAuth/MCP regressions are causing real workflow interruptions.** Two separate reports (#4480, #4439, #4490) of RFC 8414 issuer validation breaking Atlassian and GitLab MCP servers signal a regression in recent versions that punishes teams relying on MCP integrations.

- **Enterprise model availability is unreliable.** The cluster of issues (#4390, #4422, #4494) around org-enabled models not appearing in the CLI indicates a systematic problem with how the CLI syncs org policy and model catalogues. For enterprise users this is near-blocking.

- **Session long-running reliability** is still fragile: subtask freezes (#4306), fatal OOM crashes (#4499), and sessions lost on stop (#4477) all point to instability in autopilot and multi-session workflows.

- **Authentication policy confusion** (#4481): The org-level "GitHub Copilot app" policy and "Copilot CLI" policy are not clearly delineated, and the CLI is gated by the wrong policy in some configurations.

- **Minor but annoying UX gaps accumulate:** the rubber duck removal with no notice (#4484), theme flipping to light mode overnight (#4485), ambiguous "No copilot-instructions.md found" messaging (#4475), and timeout-on-edit-permission-requests (#4486) all erode trust in the tool's polish.

---

*Digest generated 2026-08-15 from [github/copilot-cli](https://github.com/github/copilot-cli) public data.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-15

## 1. Today's Highlights
No new releases or pull requests landed in the last 24 hours, but the community's focus remains squarely on **persistent memory** and **cross-device continuity**. The most discussed issue, #1283 on a comprehensive Memory System, has accumulated 39 comments since February, while two related memory requests resurfaced this week — indicating that users consider this the single most critical missing capability for large-project work. Additionally, a closed PR (#1136) addressing Windows PowerShell context was updated, suggesting ongoing behind-the-scenes work on shell tooling.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (4 tracked)

**[#1283 — Feature Request: Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** · *Open* · 39 comments  
The most active issue on the board. Requests automatic (AI-managed) and manual (user-defined) memory for retaining project patterns and preferences across sessions. Community reaction is strongly positive; this has become the de facto flagship request for the project.

**[#2269 — Remote Control / Multi-Device Session Handoff](https://github.com/MoonshotAI/kimi-cli/issues/2269)** · *Open* · 6 comments · 👍 1  
Proposes starting a session on one device and continuing or controlling it from another (laptop, web, mobile). Motivation centers on multi-environment workflows — a natural companion to a memory system, as handoff requires persistent state.

**[#1478 — Can the memory layer be optimized? (Chinese)](https://github.com/MoonshotAI/kimi-cli/issues/1478)** · *Open* · 3 comments  
A user reports pain working on large projects because memory is undocumented (only an `agent.md` is visible). They reference an alternate memory layout from another tool (`~/.openclaw/workspace/` with `SOUL.md`, `USER.md`, `MEMORY.md`, and a `memory/` directory for dated daily records), suggesting a concrete schema Kimi could adopt.

**[#1136 — feat(shell): enhance shell tool with version-aware PowerShell context](https://github.com/MoonshotAI/kimi-cli/issues/1136)** · *Closed* · 0 comments  
Identifies three critical Windows-specific Shell tool issues found via testing on Kimi K2.5 (SGLang), including ambiguous shebang handling during initial command generation (pass-1). Closed, implying a fix has landed or is in progress.

## 4. Key PR Progress
No PRs updated in the last 24 hours. Note: Issue #1136 (above) is a PR that was closed, which may indicate a merged Windows shell fix — worth checking for in the next release.

## 5. Feature Request Trends
Across the issues tracked, **three clear priorities** emerge:

1. **Memory / persistent context (3 of 4 issues):** #1283 proposes a full dual-mode (automatic + manual) memory system; #1478 complains about memory documentation and suggests a specific file schema; #2269 indirectly requires memory to enable session handoff. This is the dominant request axis.
2. **Cross-device / remote sessions (1 of 4):** #2269 extends the memory theme toward device portability.
3. **Windows shell reliability (1 of 4):** #1136 is a targeted fix, not a feature request, but signals Windows users are actively hitting agent-execution bugs.

## 6. Developer Pain Points
- **Large-project amnesia (highest frequency):** Recurring complaint that Kimi forgets project context mid-large-task, forcing re-explanation. Users cannot find a documented mechanism to "teach" the CLI persistent facts (as one user noted, only `agent.md` exists).
- **Missing memory documentation:** Even the mechanism for persistent instructions is opaque; the reference documents lack a memory section entirely.
- **Multi-device fragmentation:** Developers working across laptop/workstation/mobile cannot pick up where they left off, breaking long-running coding workflows.
- **Windows agent instability:** The closed shell PR hints at ongoing flakiness in PowerShell environments, especially regarding shebang interpretation — a reliability tax on Windows users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-15

## Today's Highlights
A critical 48-bit ID timestamp wraparound (issue #42608) wedged pre-existing sessions globally on 2026-08-14, now closed but with community reports of residual non-responsiveness. Meanwhile, contributor **kitlangton** landed a series of core refactors (session interrupt handling, protocol hardening, patch path unification) that materially improve reliability and architectural consistency. Finally, the community is actively pushing on provider ecosystem gaps: Copilot model visibility, local LAN discovery, and free-tier quota errors on OpenCode Zen.

---

## Releases
No new releases were published in the last 24 hours.

---

## Hot Issues

### 1. 48-bit ID timestamp wraparound wedges sessions ⚠️ *Critical*
[#42608](https://github.com/anomalyco/opencode/issues/42608) — [CLOSED]
All sessions created before 2026-08-14 12:39:55 UTC silently stopped processing prompts due to a bit-width overflow in the ID generator. Likely root cause for #42605. **Why it matters:** This is a textbook time-bomb bug; the community is watching for the fix to be verified in a patch release.

### 2. Session open but agent ignores subsequent prompts
[#42605](https://github.com/anomalyco/opencode/issues/42605) — [OPEN]
Desktop app becomes unresponsive after a task completes; new messages are accepted but never processed. **Why it matters:** Likely fallout from the same ID/time bug, and a high-impact daily annoyance for Desktop users.

### 3. Copilot provider shows zero models
[#42083](https://github.com/anomalyco/opencode/issues/42083) — [OPEN]
Auth succeeds, but `opencode models github-copilot` returns "Provider not found" and the picker is empty. **Community reaction:** 8 comments of users confirming the same behavior on Arch; expected to be a simple model-list filtering regression.

### 4. Free usage exceeded on DeepSeek V4 Flash Free
[#42013](https://github.com/anomalyco/opencode/issues/42013) — [OPEN]
Free-tier quota errors persist beyond the 24h reset window, and credit purchases show €0 balance. Multiple duplicate reports (#42385, #42215, #42606, #42637). **Why it matters:** Trust in Zen billing and quota transparency is eroding; this is the top support-adjacent complaint.

### 5. gpt-5.6-luna 403 "not available in your region" via OpenCode Go
[#41518](https://github.com/anomalyco/opencode/issues/41518) — [OPEN]
Model access through the Go relay is region-blocked with a confusing 403. **Community reaction:** Workarounds are undocumented; users want clearer regional availability messaging.

### 6. Run loop can never exit on unsortable message IDs
[#38791](https://github.com/anomalyco/opencode/issues/38791) — [OPEN]
Termination detection relies on string comparison of IDs that embed timestamps; third-party imports break this assumption and loop until provider 400s. **Why it matters:** Blocks migration paths for users coming from other tools.

### 7. Context cache invalidation on mode switch/compaction
[#37489](https://github.com/anomalyco/opencode/issues/37489) — [OPEN]
Switching Plan/Build mode or compacting invalidates the context cache, causing expensive re-prompting with local LLMs (vLLM/Ollama). **Why it matters:** Costs are real for local/hosted inference users; a feature request with 5 comments and growing.

### 8. Desktop v1.18.1 hides Plan/Build toggle
[#36997](https://github.com/anomalyco/opencode/issues/36997) — [OPEN]
New layout design hides the agent-switching indicator; Tab key degraded. **Community reaction:** 6 👍 — strong signal that the new layout shipped too aggressive.

### 9. TUI lag with multi-subagent sessions (97% CPU on render)
[#42657](https://github.com/anomalyco/opencode/issues/42657) — [OPEN]
Typing latency 1–3s with 2–4 concurrent subagents across all tested terminals. **Why it matters:** Subagents are a headline feature; render-thread CPU is a scalability blocker.

### 10. Web search missing on Go models (undocumented env workaround)
[#40568](https://github.com/anomalyco/opencode/issues/40568) — [CLOSED]
`websearch` tool only appears after setting `OPENCODE_ENABLE_EXA=1`. **Community reaction:** Flagged as a documentation and feature-parity gap; expect follow-up on Zen vs. Go route parity.

---

## Key PR Progress

### 1. Keep queued work parked after interrupt
[#42682](https://github.com/anomalyco/opencode/pull/42682) — [OPEN] — *kitlangton*
Makes `interrupt?continue=true` resume only the interrupted intent; explicitly queued next-turn work stays parked. **Why it matters:** Closes a race that would churn work after user interruptions.

### 2. Shared session model request boundary
[#42680](https://github.com/anomalyco/opencode/pull/42680) — [OPEN] — *kitlangton*
Unifies durable session steps and transient `session.generate` through one request-prepare path (context-hook tools, unsupported media, image bounds, Session headers). **Why it matters:** Eliminates divergent behavior between live and replay paths.

### 3. Derive promise adapter from protocol schemas
[#42669](https://github.com/anomalyco/opencode/pull/42669) — [CLOSED] — *kitlangton*
Replaces hand-rolled field mapping with schema-driven conversions for Promise plugins (branded IDs, DateTime ms, nullable types). **Why it matters:** Kills a whole class of plugin compat bugs.

### 4. Unify patch path resolution
[#42667](https://github.com/anomalyco/opencode/pull/42667) — [OPEN] — *kitlangton*
Patch tool now uses the canonical `LocationMutation` service for path/permission resolution, aligning with write/edit. **Why it matters:** Consistent permission scoping, fewer security surprises.

### 5. Use location VCS state for new sessions
[#42666](https://github.com/anomalyco/opencode/pull/42666) — [CLOSED] — *opencode-agent[bot]*
New-session Git state now derives from the directory-scoped VCS store with global fallback; adds regression coverage. **Why it matters:** Fixes wrong-branch/stateful UI during stale project inventory.

### 6. Harden simulation wire contract
[#42628](https://github.com/anomalyco/opencode/pull/42628) — [CLOSED] — *kitlangton*
Typed backend notifications and exact success/error union for `@opencode-ai/protocol/simulation`. **Why it matters:** Prereq for Drive to safely drop its copied schema.

### 7. Show window on Wayland `did-finish-load` fallback
[#42681](https://github.com/anomalyco/opencode/pull/42681) — [OPEN] — *xdagiz*
Linux-only single-fire fallback to reveal the window, fixing Wayland invisible-window crashes. **Why it matters:** Desktop UX parity on Linux is a long-standing gap.

### 8. Fail loudly on MCP config missing `type`
[#42662](https://github.com/anomalyco/opencode/pull/42662) — [OPEN] — *shreeyachand*
Claude Code–style MCP configs lacking `type`/`enabled` now produce a clear error instead of silent misbehavior. **Why it matters:** Reduces migration friction for Claude Code expats.

### 9. Persist web search provider selection
[#42663](https://github.com/anomalyco/opencode/pull/42663) — [CLOSED] — *thdxr*
Web search consent/provider now stored in the first file-backed config doc instead of KV state, with a fixed provider priority. **Why it matters:** Sticky, user-visible behavior finally survives restarts.

### 10. Local LAN provider discovery + auto-model-discovery
[#27554](https://github.com/anomalyco/opencode/pull/27554) — [OPEN] — *androidand*
mDNS + auto-discovery for local OpenAI-compatible servers (Ollama, LM Studio) plus `/v1/models` polling. **Why it matters:** One of the longest-open feature requests (#6231, #27553); unblocks "zero-config local" workflows.

---

## Feature Request Trends
- **Auto model discovery for OpenAI-compatible providers** — Long-running thread (#27553) still climbing; users want zero-config for OpenAI-compatible endpoints, not manual `opencode.json` lists.
- **Runtime permission-mode control** — `/approve on|off` per-session toggle (#41909) repeating Claude Code’s ergonomics.
- **Local/incognito model discovery** — PR #27554 shows strong interest in LAN-born discovery; community clearly wants "plug-and-play" local usage.
- **Context cache preservation** — Attempts to avoid cache invalidation on mode switch/compaction (#37489) with local LLMs.
- **Web search feature parity** — Expect more requests for `websearch` parity across Zen/Go routes after #40568.

---

## Developer Pain Points
- **Billing and quota UX on OpenCode Zen** — Repeated reports of free-quota limits persisting past 24h and confused "subscribe to Go" errors (#42013, #42385, #42215, #42606). High support overhead; needs better error messaging and a manual reset channel.
- **Session lifecycle reliability** — Non-responsive sessions, silent stops, and unprocessed prompts (#42605, #42611, #42608) are the top cause of lost work; recent ID-wraparound made it acute.
- **Desktop app layout regressions** — v1.18.1 hiding Plan/Build switching (#36997) and Wayland/ServeError issues (#37718) undermine Desktop trust despite strong CLI stability.
- **Provider integration gaps** — Copilot model visibility (#42083) and regional 403s (#41518) show integration testing is inconsistent across providers.
- **TUI performance under subagents** — 97% render-thread CPU with concurrent subagents (#42657) — scalability concern for one of the most-anticipated features.

---
*Digest compiled from public GitHub data; issue/PR links included for direct access.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-15

## Today's Highlights
Pi shipped v0.84.2 with fullscreen transcript search and configurable default tools, while the community converged on Windows support as the top open discussion (#7547, 27 comments). A cluster of fixes landed for Copilot 429 rate-limit failures and provider-specific model catalog issues (Baseten DeepSeek V4, Z.AI), alongside meaningful TUI performance work (#8143) and an experimental append-based compaction mode (#8120).

---

## Releases
**v0.84.2** — New features:
- **Fullscreen transcript search** — search and navigate matches in fullscreen mode (TUI fullscreen viewport keybindings)
- **Configurable default tools** — choose which tools are available at startup

---

## Hot Issues

1. **[#7547 — Windows usage and pain points (OPEN, 27 comments)](https://github.com/earendil-works/pi/issues/7547)** — The community's largest ongoing discussion. The author is gathering data on how Pi is run on Windows to focus bug-fixing and docs. High signal for the maintainers; likely to drive a Windows support roadmap.

2. **[#6187 — Pi login hangs in WSL after Copilot device auth (CLOSED, 26 comments)](https://github.com/earendil-works/pi/issues/6187)** — A long-standing WSL-specific bug: the browser flow completes, but Pi never detects it. Root cause appears to be a signal/event-handling gap. Closed only recently, so the fix is fresh and worth verifying on WSL.

3. **[#5223 — Anthropic provider corrupts thinking blocks in multi-turn Opus 4.8 (CLOSED, 17 comments, 6 👍)](https://github.com/earendil-works/pi/issues/5223)** — Adaptive-thinking sessions with Claude Opus 4.8 returned HTTP 400 because `thinking`/`redacted_thinking` blocks were improperly modified in the last assistant message. A subtle serialization bug; high-impact for heavy Anthropic users.

4. **[#5023 — Terminal scrolls to beginning randomly (CLOSED, 12 comments)](https://github.com/earendil-works/pi/issues/5023)** — Random viewport jumps to session start during model streaming. Reported for weeks; closure indicates a fix landed (possibly via the new fullscreen transcript work in #8143).

5. **[#6665 — TUI pins a full core while streaming (OPEN, in-progress, 12 comments, 3 👍)](https://github.com/earendil-works/pi/issues/6665)** — `Intl.Segmenter` is uncached and per-chunk Markdown rebuilds cause ~100% CPU on long sessions. Reproduced with `pi -ne`, so it's core. A performance fix is in progress — likely the next high-value TUI win.

6. **[#7850 — Copilot login 429 rate limit for orgs with 20+ models (CLOSED, 9 comments, 7 👍)](https://github.com/earendil-works/pi/issues/7850)** — GitHub Copilot device auth succeeds, but Pi's login call is rate-limited for large organizations. Likely caused by an over-fetch of model catalogs. High community impact (7 👍); closed quickly.

7. **[#8096 — Z.AI Coding Plan defaults reference removed model (CLOSED, 5 comments)](https://github.com/earendil-works/pi/issues/8096)** — `defaultModelPerProvider` still selects `glm-5.1` for Z.AI, but models.dev catalogs no longer include it. A stale-model bug that breaks out-of-the-box Z.AI configs; fixed by regenerating catalogs.

8. **[#8092 — Extension loader fails with pnpm's isolated node_modules (CLOSED, 5 comments)](https://github.com/earendil-works/pi/issues/8092)** — jiti fails to resolve extension dependencies under pnpm's symlinked layout. A packaging ecosystem friction point; a fix PR is already up (#8112).

9. **[#8064 — registerFlag boolean/string type mismatch (via #8123)](https://github.com/earendil-works/pi/issues/8064)** — `registerFlag()` allowed `default: "false"` for booleans, making omitted flags truthy at runtime. An API-contract bug affecting extension authors; the fix (#8123) introduces a discriminated union.

10. **[#7835 — Edit tool ignores single-object input (via #8011)](https://github.com/earendil-works/pi/issues/7835)** — Reproduced with OpenRouter `z-ai/glm-5.2`: edit tooling only normalized array-form edits, crashing on bare object inputs. Model-output shaping issue; fix is in review.

---

## Key PR Progress

1. **[#8149 — fix(ai): omit invalid OpenAI session header (MERGED)](https://github.com/earendil-works/pi/pull/8149)** — Stops sending `session_id` HTTP headers on OpenAI Responses requests. Proxies that reject underscore headers (Envoy, etc.) had been 400-ing these. Small, high-impact correctness fix.

2. **[#8148 — fix(coding-agent): scope bash PI_* guideline to session questions (MERGED)](https://github.com/earendil-works/pi/pull/8148)** — Fixes #7787. The blanket "inspect PI_* environment variables" guideline was causing needless `env` runs. Now scoped; fewer permission prompts and less token waste.

3. **[#8146 — fix(ai): cap Baseten DeepSeek V4 Flash output at 384k (MERGED)](https://github.com/earendil-works/pi/pull/8146)** — models.dev advertises 1M tokens, Baseten serves 384k. Capping `maxTokens` prevents silent request failures. Good example of provider-catalog drift handling.

4. **[#8143 — perf(tui): window fullscreen transcripts (MERGED)](https://github.com/earendil-works/pi/pull/8143)** — Fullscreen sessions now keep the complete transcript while model context stays compacted, and rendering is viewport-windowed by exact block heights. This is the fix behind #5023 and a companion to #6665.

5. **[#8110 — fix(tui): route selection copy through host clipboard (MERGED)](https://github.com/earendil-works/pi/pull/8110)** — Fixes #7761. OSC 52 writes alone were silently ignored on VTE terminals and macOS Terminal.app; now falls back to the host clipboard so "Copied!" is truthful.

6. **[#8124 — feat(ai): route xAI models through Responses, default Grok 4.6 (OPEN)](https://github.com/earendil-works/pi/pull/8124)** — Moves xAI from completions to the Responses API and bumps the default model to Grok 4.6. Modernizes an older provider path.

7. **[#8120 — feat(coding-agent): experimental append compaction (OPEN)](https://github.com/earendil-works/pi/pull/8120)** — When `PI_EXPERIMENTAL=1`, compaction reuses the active system prompt, tools, and routing session to preserve provider prompt caches. Standalone compaction remains default. Potentially a large cost saver on long sessions.

8. **[#8119 — fix: track Kimi cached tokens (OPEN)](https://github.com/earendil-works/pi/pull/8119)** — Fixes #8075. Kimi reports cache hits as top-level `usage.cached_tokens`; Pi was counting them as normal input tokens. Accurate cost and cache-read accounting for Kimi users.

9. **[#8112 — fix(coding-agent): realpath extension entries before jiti import (OPEN)](https://github.com/earendil-works/pi/pull/8112)** — Fixes #8092. pnpm's isolated layout breaks jiti's resolver; realpath-ing entries resolves upward traversal. Important for pnpm-using extension authors.

10. **[#8139 — feat(ai): ChatGPT OAuth image generation (MERGED)](https://github.com/earendil-works/pi/pull/8139)** — Native image generation through ChatGPT OAuth entitlements, reusing the Codex OAuth infrastructure. No API key needed. Expands Pi beyond text/code into multimodal workflows.

Also notable: **[#8113 — SiliconFlow provider (MERGED)](https://github.com/earendil-works/pi/pull/8113)**, **[#8011 — single edit input fix (OPEN)](https://github.com/earendil-works/pi/pull/8011)**, **[#8123 — registerFlag type mismatch fix (OPEN)](https://github.com/earendil-works/pi/pull/8123)**, and **[#8012 — don't load root mds as skills (OPEN)](https://github.com/earendil-works/pi/pull/8012)**.

---

## Feature Request Trends

- **Per-model configuration**: Multiple requests for model-scoped settings — compaction profiles keyed by model id (#8133), per-model thinking level maps, and model-specific output caps (#8146). Users want behavior to follow the model, not the global config.
- **Better prompt autocomplete**: Skill-name autocomplete mid-prompt using `/` (#8144), and configurable autocomplete popup position (#8132). QoL for the interactive loop.
- **Session/model state API for extensions**: A generic "atomically apply model + thinking level" operation for extensions (#8100) — temporary model routing without touching global defaults.
- **Provider breadth**: Ongoing demand for more built-in providers (SiliconFlow #8113, Bedrock Mantle #6216, Anthropic Vertex #5262, xAI Responses #8124). The community wants first-class support, not BYO config.
- **Compaction improvements**: Beyond #8120, there's appetite for more control over when and how compaction happens — both in stability (cold-restore replay bug #7724) and customization (#8133).

---

## Developer Pain Points

- **Windows/WSL is a second-class citizen**: The most-commented issue (#7547, 27 comments) is entirely about Windows pain — from Unix socket test failures (#8047) to WSL login hangs (#6187). Expect more Windows-focused fixes and docs in the near term.
- **Provider API drift is constant**: Nearly every provider has a quirk — Z.AI removed models (#8096), Baseten caps output differently than models.dev (#8146), Kimi reports cache differently (#8119). The community is absorbing this as a "misery tax" and asking for better catalog hygiene.
- **Copilot onboarding friction**: Two separate 429 rate-limit issues (#7850, #8010) with 7 and 2 👍. Large orgs with many model entitlements break the login flow. Closed fast, but a sign that Copilot integration needs more headroom.
- **TUI robustness gaps**: Full-core spin while streaming (#6665), random scroll jumps (#5023), broken clipboard on OSC-52-ignoring terminals (#7761). Stream-rendering perf is the bulk of remaining TUI pain.
- **Extension authoring friction**: jiti/pnpm resolution failures (#8092), `registerFlag` type traps (#8064), and missing public exports (`resolveCloudflareModel`, #8137) — extension developers are hitting API-surface sharp edges.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-15

## Today's Highlights

The project continues its heavy investment in the `/review` subsystem, with a full resume-from-disk capability now landing across three coordinated PRs (#9091, #9092, #9153) alongside a new round-aware convergence posture (#9118) and topology-scaled audit caps (#9183). On the stability front, a new nightly (v0.21.11-nightly) introduces a deny-by-default footprint gate for autofix, and v0.21.12 brings Web Shell workspace file uploads via drag-and-drop with progress tracking. Security remains a focus — the autofix PAT-bearing job isolation issue (#9089) continues to draw attention, and a new hardened ledger read primitive (#9163) closes a symlink-following audit finding.

## Releases

**v0.21.12** — Adds support for uploading workspace files to the Web Shell composer via drag-and-drop or the `@` file panel with progress tracking. Also implements a diff growth brake in autofix reviews to limit runaway diffs.

**v0.21.11-nightly.20260815.c396fe3d12** — Introduces a deny-by-default footprint gate and positional window censuses in autofix, plus a web-shell fix.

**v0.21.12-preview.4 / preview.3** — Preserves standalone session targets and supports workspace file uploads in Web Shell.

**E2E validation releases (r1–r6)** — Series of full end-to-end SWE-bench Verified + Terminal-Bench 2.0 validation runs; r6 reports 1/1 resolved on SWE-bench Verified.

## Hot Issues

1. **[#8582 — Read-only shell classifier auto-approves command substitution hidden by line continuation or `${var@P}`](https://github.com/QwenLM/qwen-code/issues/8582)** *(CLOSED, P1/security)* — A security bypass where the read-only shell classifier approves commands that actually execute arbitrary code. Closed after fix; critical for anyone relying on the read-only shell guard.

2. **[#8678 — Preserve current session when large restore times out](https://github.com/QwenLM/qwen-code/issues/8678)** *(CLOSED, P1/core)* — Closed as partially addressed and superseded after 9 comments. Session-restore timeout handling remains a delicate area for long-running daemon sessions.

3. **[#8051 — Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051)** *(OPEN, P2/feature-request)* — Count-only limits do not bound bytes held by request bodies or WebSocket assembly. Community tracking issue with 9 comments; memory-bound users will feel this.

4. **[#2128 — Memory grows unboundedly during long sessions (UI History)](https://github.com/QwenLM/qwen-code/issues/2128)** *(OPEN, P1/core)* — Long-standing issue (since March) where `useHistoryManager.history` grows without bound. Still open — a top pain point for marathon sessions.

5. **[#9026 — NO_TOOL_RESULT_PROGRESS hard-fails headless runs](https://github.com/QwenLM/qwen-code/issues/9026)** *(OPEN, P2/bug)* — Headless runs abort when a model ends a turn quietly after a tool result. A fix PR (#9196) is now up; frustrating for automated pipelines.

6. **[#8871 — ACP child process fails with "Unknown argument: acp" in serve mode](https://github.com/QwenLM/qwen-code/issues/8871)** *(OPEN, P2/bug)* — Breaks token authentication for ACP child processes in `qwen serve`. Blocks certain integration workflows.

7. **[#9002 — SDK Python rejects permission_mode="auto"](https://github.com/QwenLM/qwen-code/issues/9002)** *(OPEN, P3/bug)* — Client-side validation is stricter than the CLI, rejecting a valid mode. Small but irritating API inconsistency.

8. **[#8944 — Two high severity vulnerabilities after npm update since 0.21.0](https://github.com/QwenLM/qwen-code/issues/8944)** *(CLOSED, P2/security)* — Closed; community reaction was swift. Worth verifying your dependency tree matches the fixed release.

9. **[#9146 — Make utils/ a leaf layer — 107 upward imports from 51 files make the directory graph cyclic](https://github.com/QwenLM/qwen-code/issues/9146)** *(OPEN, P2/refactor)* — Architecture debt that makes the codebase harder to reason about; signals maintainability investment.

10. **[#9089 — PAT-bearing jobs share a host with untrusted branch code — needs runner-level isolation](https://github.com/QwenLM/qwen-code/issues/9089)** *(OPEN, P1/security)* — Cannot be closed from inside a GitHub Actions step; a systemic CI security concern with real credential-exposure potential.

## Key PR Progress

1. **[#9092 — Resume an interrupted PR review from its on-disk state](https://github.com/QwenLM/qwen-code/pull/9092)** — `fetch-pr` gains `--resume`, ruling on facts gathered from the previous report, worktree, and diff hash. Part of a three-PR series for review resumption.

2. **[#9163 — Confine every ledger and evidence read to contained regular files](https://github.com/QwenLM/qwen-code/pull/9163)** — Hardens the review subsystem against symlink attacks: single `O_NOFOLLOW` open, `fstat` verification, read from that same descriptor.

3. **[#9091 — Run-session ledger and cross-session agent evidence](https://github.com/QwenLM/qwen-code/pull/9091)** — Groundwork for resuming interrupted reviews: CLI session IDs in a ledger, plan stamped with diff SHA-256. Zero behavior change for non-resuming runs.

4. **[#9153 — Wire --resume through /review, review run, and CI retry](https://github.com/QwenLM/qwen-code/pull/9153)** — Completes the resume series; grammar accepts `--resume` on PR targets only, mirroring `--comment` gating.

5. **[#9118 — Round-aware convergence posture for posted findings](https://github.com/QwenLM/qwen-code/pull/9118)** — Raises the posting bar as review rounds accumulate, so the review→fix→re-review loop converges instead of widening the diff.

6. **[#8707 — Qwen WebBridge direct browser control](https://github.com/QwenLM/qwen-code/pull/8707)** — Direct browser-control path from `qwen serve` to the Chrome extension with a 17-action surface and task-scoped ownership.

7. **[#9130 — Deterministic flakiness gate for sandboxed verification](https://github.com/QwenLM/qwen-code/pull/9130)** — Re-runs added/modified unit tests N times (default 5) in CI verification to catch flaky tests deterministically.

8. **[#9196 — Accept quiet post-tool-result completions after retry exhaustion](https://github.com/QwenLM/qwen-code/pull/9196)** — Fixes #9026: allows legitimate silent turns after tool results instead of burning the retry budget on `NO_TOOL_RESULT_PROGRESS`.

9. **[#8938 — Reject upstream fail-fast placeholder responses](https://github.com/QwenLM/qwen-code/pull/8938)** — Defends against upstream endpoints returning HTTP 200 with placeholder text like `(request timed out)` instead of a real response.

10. **[#9136 — Bound the workflow meta evaluation](https://github.com/QwenLM/qwen-code/pull/9136)** — Wraps both halves of workflow `meta` extraction in a vm timeout so a non-terminating literal surfaces as an error instead of wedging the process.

## Feature Request Trends

- **Daemon resource bounding (recurring):** Tracking issues for multi-workspace daemon memory usage (#8051) and unbounded UI History (#2128) both target the same root: long-running sessions need deterministic memory ceilings.
- **Web Shell desktop distribution:** A community proposal for an Electron host (#9168) sits alongside the existing Tauri app, showing active interest in desktop packaging options.
- **Session management ergonomics:** Web Shell sidebar improvements (#9122), HTML export via `WebShellTranscript` (#9186), and Channel policy redesign (#8845) all point to richer session/workspace UX.
- **Review infrastructure maturity:** A large cluster of PRs/issues target making the `/review` loop converge (round-aware posture, resume-from-disk, incremental anchors, topology-scaled caps) — the project is clearly dogfooding its own agentic review at scale.

## Developer Pain Points

- **Headless/CI reliability:** Silent tool-result completions (#9026) and per-commit E2E failures (#9143, #9159, #9160) are actively burning developer time; fixes are landing but the churn is high.
- **Security-sensitive CI design:** Concerns about PAT-bearing jobs on shared runners (#9089) and the read-only shell bypass (#8582) reflect the difficulty of safely running agentic tools on untrusted code.
- **API inconsistency:** The SDK rejecting valid CLI values (#9002) is a small but telling friction point — documentation and validation logic are drifting.
- **Memory growth in long sessions:** Both #2128 (UI History) and #8051 (daemon bounding) show that memory behavior remains the top operational complaint for users running long or multi-workspace workloads.
- **Architecture debt surfacing:** The `utils/` cyclic-import audit (#9146) and the ACP/serve internals coupling (#8084) suggest the codebase is feeling the strain of rapid feature growth — refactors are being filed, but they are P2, not P0.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-15

## Today's Highlights

The project has formally rebranded to **CodeWhale** with v0.9.8, deprecating the legacy `deepseek-tui` npm package. The release introduces first-class local DS4 (DwarfStar) provider support and a new "model guardian" tier for Auto-Review workflows, but the day is dominated by urgent CI red-on-main fixes: provider-count assertions, reasoning-ladder vocabulary tests, and two crash bugs found by community contributor EvanProgramming (unsynchronized session-index writes and a webhook client `.expect()` panic). GitHub Actions stability is the theme — three separate PRs landed to restore green builds across macOS, Windows, and Linux.

## Releases

**v0.9.8** (codewhale) — The project officially ships as **CodeWhale** from Shannon Labs. The `codewhale` command and npm package are the canonical technical identifiers; the legacy `deepseek-tui` package is deprecated with no further releases. No detailed changelog was published in the release notes snippet.

## Hot Issues (10 Notable)

1. **[#5383 — main is red on v0.9.8: cli provider-count assertions](https://github.com/Hmbown/CodeWhale/issues/5383)** · OPEN · 1 comment — CI fails because tests assert 43/38 provider kinds but v0.9.8 shipped 45/40. A one-line test-pin PR (#5384) landed within hours, but it highlights a recurring release-gate gap: tests aren't updated atomically with registry changes.

2. **[#5377 — main is red on macOS/Windows: reasoning-effort tests](https://github.com/Hmbown/CodeWhale/issues/5377)** · CLOSED · 1 comment — Nine tests across two platforms assert the pre-ladder vocabulary, broken by a single commit (`6f6c35183`). Fixed by #5378 with zero production changes. Community takeaway: the project needs cross-platform CI to catch vocabulary renaming earlier.

3. **[#5380 — session-index JSONL writes unsynchronized, silent data loss](https://github.com/Hmbown/CodeWhale/issues/5380)** · CLOSED · 1 comment — `StateStore::append_thread_name` performs index-file operations outside the `Arc<Mutex<Connection>>` lock. Under concurrent `StateStore` clones, `fs::rename` can clobber writes. EvanProgramming's report is a model bug write-up: precise location, root cause, fix strategy. Community upvoted via quick merged fix (#5382).

4. **[#5379 — WebhookHookSink::new panics on HTTP client build failure](https://github.com/Hmbown/CodeWhale/issues/5379)** · CLOSED · 1 comment — The fallback client-build path terminates with `.expect("build fallback HTTP client")`, turning a transient TLS/client-build failure into a hard crash. Fixed in #5381 by returning a proper error. A clean example of defensive-error-handling debt in Rust codebases.

5. **[#5370 — P0: web UI looks totally broken](https://github.com/Hmbown/CodeWhale/issues/5370)** · OPEN · 1 comment — Hunter (maintainer) reports the public web UI is "totally broken" in look and features. Scope first: separate the public `web/` Next.js app from the managed CWC app. High-priority visual/UX regression in the web surface.

6. **[#5372 — Stale write-claims from closed sessions block new sub-agents](https://github.com/Hmbown/CodeWhale/issues/5372)** · CLOSED · 1 comment — Real-workspace report: after a session closes, `agent_8fbd3df6` still holds write claims on `experiments/`, `tests/`, and `artifacts/`; new sessions' children get rejected with write-scope contention. Dead owners are counted as active. A correctness bug in the write-claim lifecycle.

7. **[#5373 — Output-token ceiling clamped below documented catalogue limit](https://github.com/Hmbown/CodeWhale/issues/5373)** · CLOSED · 1 comment — CodeWhale requests 65,536 output tokens for deepseek-v4-flash/pro, but the bundled models.dev catalogue documents `limit.output=384000`. A competing harness requests 384,000 against the same endpoint; Terminal-Bench tasks crash with truncation. The ceiling is too conservative and kills long-generation tasks.

8. **[#5324 — agent tool: simplify 32-field schema](https://github.com/Hmbown/CodeWhale/issues/5324)** · OPEN · 8 comments · Hmbown — The model-facing `agent` tool carries a 32-property JSON schema with zero required fields, serves eight actions from one schema, and accepts alias bags. Models error on it. Maintainer-led design debt issue with active discussion; blocking progress on tool-schema reliability.

9. **[#3192 — Add CodeWhale to agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192)** · OPEN · 13 comments (most commented) — Community requests listing in the agent-client-protocol registry so Zed can discover/install CodeWhale natively. Long-running (since June) but low-priority for maintainers. Ecosystem-integration request with high community interest.

10. **[#5374 — "The writing its weird (the agent)"](https://github.com/Hmbown/CodeWhale/issues/5374)** · OPEN · 4 comments — New reporter (all-lopezg) shows corrupted/overlapping agent output text on macOS with a screenshot. Fresh bug report with positive tone ("amazing work you did on this!!"). Likely a TUI rendering regression in the agent-writing path; needs maintainer triage.

## Key PR Progress (10 Notable)

1. **[#5384 — Re-pin provider-count assertions to v0.9.8 registry](https://github.com/Hmbown/CodeWhale/pull/5384)** · OPEN — Closes #5383. Updates two integers in `cli_provider_helpers_follow_config_metadata` from 43/38 to 45/40. Small but release-blocking; demonstrates the pain of number-assertions tied to registry growth.

2. **[#5382 — Serialize session-index writes to prevent silent data loss](https://github.com/Hmbown/CodeWhale/pull/5382)** · CLOSED — Fixes the unsynchronized `session_index.jsonl` writes. Community contributor EvanProgramming's first merged fix; moves index-file operations inside the `Arc<Mutex<Connection>>` guard.

3. **[#5381 — Do not panic when webhook HTTP client fails to build](https://github.com/Hmbown/CodeWhale/pull/5381)** · CLOSED — Replaces the `.expect()` fallback with a proper error return in `WebhookHookSink::new`. Second EvanProgramming fix of the day; a model of small, well-scoped reliability fixes.

4. **[#5378 — Re-pin thinking-ladder assertions](https://github.com/Hmbown/CodeWhale/pull/5378)** · CLOSED — Closes #5377. Nine test updates, zero production changes. Updates off/high/max shortcut assertions to the new ladder vocabulary from `6f6c35183`.

5. **[#5376 — Keep internal runtime events out of the session peek](https://github.com/Hmbown/CodeWhale/pull/5376)** · CLOSED — Closes #5375. Repro-first PR showing `raw_envelope_survives` leakage into the session peek projection. Fixes a session-peek fidelity bug where internal runtime events were surfacing to users.

6. **[#5365 — Add first-class local DS4 setup](https://github.com/Hmbown/CodeWhale/pull/5365)** · CLOSED — DwarfStar (DS4) becomes a first-class local DeepSeek route with no protocol adapter: `/setup provider ds4` and provider-picker `D` shortcut open a prefilled keyless loopback preset, reusing the OpenAI-compatible transport. Big UX win for local-model users.

7. **[#5353 — Model guardian tier for Auto-Review (v0.9.8)](https://github.com/Hmbown/CodeWhale/pull/5353)** · CLOSED — Auto-Review becomes a true two-layer mode: deterministic floor stays non-bypassable, fallback holds escalate to a one-shot model guardian instead of silently blocking. Codex reviewer semantics, Kimi vocabulary, Codewhale fail-closed defaults.

8. **[#5339 — Suppress child-owned shell completions](https://github.com/Hmbown/CodeWhale/pull/5339)** · CLOSED — Closes #5325. Filters child-owned background shell completion events out of the parent model stream; preserves unowned parent completions and task/status visibility. Regression test covers parent- and child-owned jobs.

9. **[#5369 — Degrade Moonshot schemas instead of refusing conditionals](https://github.com/Hmbown/CodeWhale/pull/5369)** · CLOSED — From #5324 prerequisite discussion. Degrades Moonshot schema handling gracefully rather than refusing conditional schemas. Separately landed so the schema slice stays schema-only. Shows measured incremental PR strategy.

10. **[#5368 — Confine unguarded tests to the isolated state root](https://github.com/Hmbown/CodeWhale/pull/5368)** · CLOSED — Fixes the four tests from #5359 via three independent mechanisms, each with a test that fails when only its own fix is reverted. Closes the lock-holder trust hole in `settings_path_candidates()` and `TuiPrefs::path()` routing lock-holding threads to the real environment.

## Feature Request Trends

- **Local/offline model support** — DS4 local setup (#5365) and NVIDIA NIM compatibility (#1482) show strong demand for first-class local and self-hosted model routes beyond the managed API.
- **TUI discoverability and UX polish** — Update notices + one-chord update-and-relaunch (#5053), deny-by-default approval configurability (#5293), and sub-agent display-identity consistency (#5287) all point to operator-experience refinements.
- **Ecosystem integration** — Agent Client Protocol registry listing (#3192) and VS Code marketplace copyright concerns (#2327) indicate the community wants CodeWhale usable from other tools.
- **Pre-built third-party model templates** — Issue #5350 (from shadapang) requests simplified configuration for OpenCode Zen, Agnes, and other compatible providers with built-in templates and a "Test Connection" button.
- **Plugin system completeness** — #5311 asks for Kimi-level plugin support with federated marketplaces, building on the existing plugin security/installation foundation.

## Developer Pain Points

- **CI/test fragility across platforms** — Three separate red-on-main incidents today (#5383, #5377, and the #5355 flake basket) reveal tests frequently hold stale numbers/vocabulary that don't match shipped releases. The community is experiencing repeated build-failure churn.
- **Schema complexity burdening models** — The 32-field agent tool schema (#5324) is a maintainer-acknowledged pain point causing model errors; a simplification effort is in progress with community consensus.
- **Silent data loss and crash-on-error patterns** — Two EvanProgramming bugs (#5380, #5379) highlight deeper Rust error-handling debt: `.expect()` at user-facing boundaries and unsynchronized file writes under concurrency. These erode trust in state persistence.
- **Output truncation surprises** — The 65K vs 384K output-token ceiling gap (#5373) breaks long-running generation tasks with cryptic truncation failures; users want documented limits respected.
- **Local/third-party config friction** — Configuration is manual and error-prone for non-DeepSeek providers: users report hanging `not checked`/`cache failed` states, no built-in docs, and no connection-test button (#5350). New users need guided setup, not raw URL fields.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*