# AI CLI Tools Community Digest 2026-07-15

> Generated: 2026-07-15 02:36 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 15, 2026 community digests.

---

## Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-07-15

### 1. Ecosystem Overview

The AI CLI development tool ecosystem is in a phase of rapid, convergent iteration, with all major tools shipping patches and new features within the same 24-hour window. A clear tension has emerged between pushing new agentic capabilities (subagents, autonomous mode, multi-workspace support) and managing the associated costs, reliability, and trust issues these features introduce. The community is increasingly vocal about transparency—demanding better context window health indicators, cost controls, and predictable agent behavior—while tool maintainers are racing to address platform-specific stability issues, particularly on Windows. The landscape is bifurcating between tools that prioritize deep IDE/desktop integration (Copilot, Claude Code Desktop) and those optimizing for raw terminal-based coding workflows (Codex CLI, DeepSeek TUI, Pi).

### 2. Activity Comparison (2026-07-15)

| Tool | Active Issues (Last 24h) | Open PRs (Last 24h) | Release Status | Key Note |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ tracked (Hot: 10) | 9 (6 new, 3 closed) | **2 patches** (v2.1.209, v2.1.210) | Intense UX churn; rapid fixes for critical dialog bugs. |
| **OpenAI Codex CLI** | 10+ tracked (Hot: 10) | 8 (All closed/merged) | **4 alpha tags** (rust-v0.145.0-a.9–12) | Heavy infrastructure refactor; focus on session isolation. |
| **Gemini CLI** | 10+ tracked (Hot: 10) | 10 (6 open, 4 closed) | **1 nightly** (v0.52.0-nightly) | Security-focused; addressing critical bypass vulnerabilities. |
| **GitHub Copilot CLI** | 10+ tracked (Hot: 10) | 0 (No PR updates) | **2 patches** (v1.0.71-1 & -2) | Feature additions for plugins/voice; community focused on bugs. |
| **Kimi Code CLI** | 10 tracked | 10 (4 closed, 6 open) | **No new release** | Heavy PR closure; fixing forked session and provider errors. |
| **OpenCode** | 10+ tracked (Hot: 10) | 10 (Active, many from @ohsalmeron) | **2 patches** (v1.18.0 & .1) | V2 migration causing significant UX regressions. |
| **Pi** | 10 tracked | 10 (Mixed open/closed) | **1 release** (v0.80.7, breaking change) | High activity around OpenAI Codex compatibility and new providers. |
| **Qwen Code** | 10 tracked | 10 (All open/in review) | **1 stable** (v0.19.10) | Focus on security hardening and multi-workspace infrastructure. |
| **DeepSeek TUI** | 10 tracked | 10 (6 merged, 4 closed) | **No new release** | Heavy reliability PRs merged; large provider ecosystem expansion. |

### 3. Shared Feature Directions

The following requirements are appearing across multiple tool communities, indicating strong market demand:

- **Context Window Health & Transparency:** Claude Code (feature request #66807), Codex CLI (#17827, customizable status line), and Kimi Code (#2494) all have active requests for explicit token budgets, signal-to-noise ratios, and early overflow warnings. Users want to see *why* context is degraded, not just suffer the consequences.

- **Cost Control & Transparency:** A top-3 pain point for **Claude Code** (Fable overspend, #76987) and **Gemini CLI** (quota drain, #26860). Both communities are demanding mechanical limits on autonomous agent acceleration and scope creep. **Qwen Code** is addressing this via a PR to change default approval mode (#6899).

- **Agent/Subagent Reliability & Guardrails:** **Claude Code** reports subagent identity spoofing (#77655), **Gemini CLI** reports false GOAL success (#22323), **GitHub Copilot CLI** reports background agents cancelled on abort (#4127), and **OpenCode** has reports of weak subagent communication (#5239). The common thread is a demand for deterministic, observable agent behavior.

- **Cross-Platform & Credential Parity:** **Windows** is the primary pain point for **Codex CLI** (browser crashes, missing features), **Claude Code** (Cowork broken, MSIX failures), **GitHub Copilot CLI** (orphaned processes), and **Kimi Code** (UTF-8 issues). **GitHub Copilot CLI** and **Pi** also face specific OAuth and credential bridging gaps across platforms.

- **Custom Providers & Self-Hosting:** **Kimi Code** (#2485), **Pi** (#5363, Bedrock Mantle), and **DeepSeek TUI** (#4354, MiniMax) all have active requests to add or improve support for custom, self-hosted, or alternative model providers. This reflects a maturing market where users want to avoid vendor lock-in.

- **Plugin/MCP Ecosystem Maturity:** **Claude Code**, **GitHub Copilot CLI** (new marketplace commands), and **OpenCode** are all building out plugin and MCP tooling. Pain points include missing tokens, permission issues, and server fragility, as seen in **Codex CLI** (#26984, MCP pipe leaks) and **GitHub Copilot CLI** (#4096, missing OAuth tokens).

### 4. Differentiation Analysis

| Differentiation Factor | Node 1: Claude Code | Node 2: Codex CLI & Copilot | Node 3: OpenCode & Gemini | Node 4: Kimi & Qwen & Pi & DeepSeek |
| :--- | :--- | :--- | :--- | :--- |
| **Core Use Case** | Deep, multi-session coding agent (Chat & Agent modes) | TUI-first/Desktop coding assistant (Copilot) | Desktop server/IDE companion (OpenCode), pure enterprise agent (Gemini) | Efficient, lightweight CLI agent (Kimi, Qwen, Pi, DeepSeek) |
| **Technical Strategy** | Proprietary, feature-rich, rapid UX iteration | Heavily Rust/TypeScript, architecture-driven refactors (Codex: session isolation) | Desktop-first, plugin-rich (OpenCode), security-focused (Gemini) | Platform extensibility (Qwen: multi-workspace), community-driven PRs (DeepSeek) |
| **Community Focus** | Trust, cost, and subagent governance | Windows parity, session persistence, MCP reliability | V2 desktop migration, agent selector UX, infrastructure reliability | Provider diversity, platform compatibility (Windows/older Linux), UI/rendering polish |
| **Primary Pain Points** | Fable cost drain, Cowork reliability, permissions regressions | Windows stability, context window reliability, 400 errors on reviews | V2 UI regressions, agent visibility, timeout issues | TPD rate limits, UTF-8 on Windows, GLIBC dependencies |
| **Target User** | Power developer, heavy multi-agent workflow user | Developer integrated into Microsoft/GitHub ecosystem | Remote server developer, Chinese-speaking user (OpenCode) | Multi-provider user, Chinese-market developer, CI/CD pipeline user |

### 5. Community Momentum & Maturity

- **High Velocity / Rapid Iteration:**
    - **DeepSeek TUI:** The community is highly active, with maintainer @Hmbown and contributors closing numerous reliability PRs and adding new providers (MiniMax). The issue tracker shows fast turnaround on critical bugs (e.g., directory freezing).
    - **OpenCode:** Despite significant V2 regressions, the contributor community (notably @ohsalmeron with 5+ substantial UX PRs in one day) shows strong momentum and feature co-development.
    - **Claude Code:** Maintainers are shipping patches every few hours for critical bugs, demonstrating high operational tempo.

- **Mature / Stable Core, Strategic Refactoring:**
    - **OpenAI Codex CLI:** Very high PR merge rate (8 closed today), focused on deep architectural changes (session isolation, thread forking). Community engagement is high but centered on long-standing bugs (#31870, 44 comments).
    - **Qwen Code:** Shipping a major feature release (multi-workspace) while simultaneously tightening security. Community is engaged but PRs are dominated by a few core contributors.
    - **Pi:** Significant activity on expanding provider support and fixing emerging compatibility issues (OpenAI Codex, xAI Grok).

- **Stable, Feature-Driven:**
    - **GitHub Copilot CLI:** Two polished feature releases adding plugin marketplace and voice controls. Community interest is high (upvotes on new issues), but there is zero PR activity, suggesting a closed-source internal development model.

- **Concern / Stagnation Signals:**
    - **Gemini CLI:** Multiple high-severity, long-running security bypass issues (PR #28403) without resolution. Community frustration over quota drain (#26860) with no maintainer response. The tool's momentum appears focused on fixing regressions rather than driving new features.

### 6. Trend Signals

1.  **The "Agent Trust" Crisis is Real.** Fable auto-selection (Claude Code), false GOAL success (Gemini), and subagent identity spoofing (Claude Code) are not isolated bugs—they signal a systemic trust deficit. Users are demanding "mechanical limits" and deterministic observability over "smart" but opaque autonomous behavior. The tools that solve for transparency (e.g., Pi's extension cost reporting #6509) will gain a competitive advantage.

2.  **Platform Parity is Table Stakes.** Windows is the primary barrier to adoption across *every* tool. Crashes, missing features, broken updates, and orphaned processes are driving users away. Investment in Windows-specific CI and testing is no longer optional for teams targeting a broad developer audience.

3.  **The War is Moving to the MCP/Plugin Marketplace Layer.** The release of plugin marketplace commands (GitHub Copilot CLI) and the proliferation of PRs for new providers (MiniMax in DeepSeek, Bedrock Mantle in Pi) signal that the next phase of competition is about ecosystem lock-in, not just CLI features. Tooling that makes it easy to connect to *any* model (Pi, Kimi, DeepSeek) may win over users who want flexibility.

4.  **Context Window Transparency is an Emerging Standard.** Feature requests for token budgets and health indicators are no longer niche; they appear in almost every digest. As model context windows grow to 1M+ tokens, users need tools to help them manage signal vs. noise. This could be a key differentiator for TUI tools vs. desktop apps.

5.  **The "Edge Case" User Profile is Growing.** The teams are swamped with reports from users on older Linux distros (GLIBC), Android/Termux, BSD, and VPS-hosted environments. As AI coding tools move from "early adopter" to "mainstream," the diversity of deployment environments is exploding, straining the ability of small teams to test and support every configuration.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-07-15**

---

## 1. Top Skills Ranking

### #1 — skill-creator Fix: `run_eval.py` Zero Recall Bug (PR #1298)
- **Author:** MartinCajiao | **Status:** Open  
- **Functionality:** Fixes the core evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) where all skills report 0% recall regardless of content. Root cause involves the eval artifact not being installed as a real skill, plus Windows stream-reading and parallel-worker issues.  
- **Discussion highlights:** Addresses Issue #556 with 10+ independent reproductions; the entire description-optimization loop was optimizing against noise, making skill creation essentially blind.  
- **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2 — document-typography Skill (PR #514)
- **Author:** PGTBoos | **Status:** Open  
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — common typographic defects Claude introduces without explicit guidance.  
- **Discussion highlights:** Highly practical quality-of-life Skill; the community noted these issues affect nearly every document Claude generates.  
- **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

### #3 — ODT Skill (PR #486)
- **Author:** GitHubNewbie0 | **Status:** Open  
- **Functionality:** Comprehensive OpenDocument Format support (.odt, .ods) — creation, template filling, parsing ODT to HTML. Triggers on "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice document".  
- **Discussion highlights:** Responds to demand for open-source document formats; complements existing DOCX and PDF skills.  
- **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

### #4 — Skill-Quality-Analyzer & Skill-Security-Analyzer (PR #83)
- **Author:** eovidiu | **Status:** Open  
- **Functionality:** Two meta-skills: (1) quality analysis across structure, documentation, examples, and resources; (2) security analysis for trust-boundary evaluation.  
- **Discussion highlights:** Early entry (Nov 2025) with sustained discussion; represents meta-governance of the Skills ecosystem itself.  
- **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

### #5 — self-audit Skill v1.3.0 (PR #1367)
- **Author:** YuhaoLin2005 | **Status:** Open  
- **Functionality:** Audits AI output before delivery — mechanical file verification plus a four-dimension reasoning audit in damage-severity priority order. Universal across project types and models.  
- **Discussion highlights:** Most recent high-activity PR (late June 2026); builds on broader "Reasoning Quality Gate" discussion in Issue #1385.  
- **Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

### #6 — testing-patterns Skill (PR #723)
- **Author:** 4444J99 | **Status:** Open  
- **Functionality:** Comprehensive testing-stack coverage — Testing Trophy model, AAA pattern, React component testing, mocking, E2E, visual testing.  
- **Discussion highlights:** Addresses a clear gap: the Skills collection lacked a dedicated testing methodology skill despite widespread demand.  
- **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

### #7 — SAP-RPT-1-OSS Predictor Skill (PR #181)
- **Author:** amitlals | **Status:** Open  
- **Functionality:** Integrates SAP's open-source tabular foundation model for predictive analytics on enterprise business data.  
- **Discussion highlights:** Niche but highly specific enterprise demand; one of the few skills targeting specialized ML models.  
- **Link:** [PR #181](https://github.com/anthropics/skills/pull/181)

---

## 2. Community Demand Trends

From the top issues (sorted by comments and reactions), the community's most-anticipated new Skill directions are:

| Demand Theme | Evidence | Key Issue |
|---|---|---|
| **Trust & Security Governance** | Issue #492 (34 comments, Security: namespace trust boundary abuse) sparked the most discussion. Community deeply concerned about permissions and official-vs-community distinction. | [#492](https://github.com/anthropics/skills/issues/492) |
| **Org-Wide Skill Sharing** | Issue #228 (14 comments, 7 👍) — direct request for enterprise skill distribution without manual file-sharing. | [#228](https://github.com/anthropics/skills/issues/228) |
| **Skill-Creator Reliability (Windows)** | Issues #556, #1169, #1061 collectively show the evaluation pipeline is broken on Windows, blocking contributors. 12+ comments each. | [#556](https://github.com/anthropics/skills/issues/556) |
| **Duplicate Skill Detection** | Issue #189 (6 comments, 9 👍) — plugin installation creates duplicate skills, wasting context window. | [#189](https://github.com/anthropics/skills/issues/189) |
| **Agent Governance / Safety Patterns** | Issue #412 (skill proposal for governance patterns — policy enforcement, threat detection, audit trails). | [#412](https://github.com/anthropics/skills/issues/412) |
| **Compact Memory for Agents** | Issue #1329 (symbolic notation for compact agent state) — long-running agents need context-efficient memory. | [#1329](https://github.com/anthropics/skills/issues/1329) |

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are not yet merged, but address widely-reported pain points:

| Skill PR | Focus | Why It Lands Soon |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) — fix `run_eval.py` 0% recall | Core eval pipeline fix | Unblocks all skill-creator work; multiple reproductions confirmed. |
| [#1323](https://github.com/anthropics/skills/pull/1323) — trigger detection misses real skill name | Run_eval trigger logic | Directly follows #1298; fixes case where optimization loop never improves descriptions. |
| [#1261](https://github.com/anthropics/skills/pull/1261) — isolate trigger-eval from live project | Prevents project contamination | Fixes Issue #1260 where eval writes synthetic commands into user's project. |
| [#1367](https://github.com/anthropics/skills/pull/1367) — self-audit (v1.3.0) | Output quality verification | Recent, active, builds on Issue #1385 pipeline proposal. |
| [#1099](https://github.com/anthropics/skills/pull/1099) — Windows subprocess pipe crash | Windows compatibility | Addresses blocker #1061; multiple Windows contributors waiting. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *skill-creator reliability and cross-platform parity* — fixing the evaluation pipeline (which currently reports 0% recall for every skill) and eliminating the Windows blocking bugs that prevent half the developer ecosystem from contributing or using the Skills framework at all.**

The meta-layer is clear: before the community can productively build and share new Skills, the tooling that validates and optimizes them must work correctly on all platforms. The top two PRs and three of the top five issues all converge on this single bottleneck.

---

# Claude Code Community Digest – 2026-07-15

## Today's Highlights
Two urgent patches shipped today: v2.1.209 fixes a serious bug where `/model` and other dialogs were blocked in `claude agents` background sessions, and v2.1.210 adds a live elapsed-time counter to collapsed tool summaries. The community is sounding the alarm on cost control, with multiple reports of Claude "Fable" auto-selection draining weekly quotas in hours despite explicit opt-out.

## Releases

**v2.1.210** – [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.210)
- Live elapsed-time counter on collapsed tool summary lines so long-running tool calls visibly tick instead of appearing stuck
- Startup deprecation warnings for `Write(path)`, `NotebookEdit(path)`, and `Glob(path)` permission rules — users should migrate to `Edit(path)` or `Read(path)`

**v2.1.209** – [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.209)
- Fixed `/model` and other dialogs being blocked in `claude agents` background sessions (reverts an overly broad guard)

---

## Hot Issues

### 1. Cowork broken on Windows 11 Pro (HCS services missing)
[Issue #74649](https://github.com/anthropics/claude-code/issues/74649) – 75 comments, 4 👍  
After 9 days of back-and-forth, Windows 11 Pro users still cannot use Cowork due to missing `vfpext` HCS services. Community has provided extensive diagnostic logs but no fix has shipped yet.

### 2. Connection closed mid-response on VSCode/WSL
[Issue #69415](https://github.com/anthropics/claude-code/issues/69415) – 26 comments, 54 👍  
The most-upvoted open bug. VSCode + WSL users report API connections dropping mid-response frequently enough to make Claude Code "unusable for any task." Almost a month old with no resolution — growing frustration in the thread.

### 3. Desktop app: cannot change working directory or open new chat
[Issue #54461](https://github.com/anthropics/claude-code/issues/54461) – 18 comments, 9 👍  
Aged 78 days, this Windows desktop blocker prevents users from modifying their primary working directory or starting fresh conversations. Persistent community requests for a fix.

### 4. Fable overspend weekend post-mortem
[Issue #76987](https://github.com/anthropics/claude-code/issues/76987) – 14 comments, 0 👍  
A raw community post describing how "Fable ate its usage on processes it invented instead of the work I asked for." The author compares the experience to a chargeback-worthy failure. Highlights a growing trust deficit around Claude's model routing.

### 5. Context health monitoring feature request
[Issue #66807](https://github.com/anthropics/claude-code/issues/66807) – 13 comments, 0 👍  
Proposal for explicit context-window health indicators in the TUI. Community has been discussing signal-to-noise ratio, token budget tracking, and early warnings before context overflow. Strong conceptual alignment with the Fable overspend complaints.

### 6. Cowork Desktop (macOS): AskUserQuestion never renders
[Issue #58750](https://github.com/anthropics/claude-code/issues/58750) – 8 comments, 4 👍  
Yellow-dot badge shows a pending question, but the UI card never appears. On quit, the request silently resolves as "Dismissed." Two months old — critical UX gap for Cowork on macOS.

### 7. Desktop app ignores `permissions.allow` rules
[Issue #73587](https://github.com/anthropics/claude-code/issues/73587) – 5 comments, 2 👍  
Regression: the desktop app prompts for every file permission, even for Claude's own config directory, ignoring user-defined `permissions.allow` rules. Likely introduced in recent desktop releases.

### 8. Windows MSIX update failure
[Issue #76357](https://github.com/anthropics/claude-code/issues/76357) – 3 comments, 1 👍  
Every MSIX update on Windows triggers "Another program is currently using this file," rendering the app unlaunchable until reboot. A recurring release-breaking issue for Windows users.

### 9. Session title language cannot be configured
[Issue #72004](https://github.com/anthropics/claude-code/issues/72004) – 3 comments, 4 👍  
Session titles always generate in English even when users communicate entirely in Japanese or other languages. Request to allow language configuration via `CLAUDE.md`.

### 10. Worktree pool duplicates active worktrees
[Issue #77609](https://github.com/anthropics/claude-code/issues/77609) – 2 comments, 0 👍  
The desktop app's `git-worktrees.json` registry assigns the same active worktree to two concurrent sessions. Registry `createdAt` timestamps prove duplicate allocation rather than a reclaim race. Distinct from a prior related report (#75911).

---

## Key PR Progress

### 1. `claude-compare` tool
[PR #77613](https://github.com/anthropics/claude-code/pull/77613) – Open  
A new community-contributed comparison tool for Claude sessions. No description yet, but the name suggests diff/compare functionality between sessions or outputs.

### 2. Plugin hook schema validator fix
[PR #77556](https://github.com/anthropics/claude-code/pull/77556) – Open  
Fixes two bugs in the plugin-dev plugin's hook-schema validator where valid configurations — including the exact format the skill documents — were rejected. Covers JSON vs. JSON5 parsing and edge cases in hook declaration arrays.

### 3. Write/prompt rule matching in hookify
[PR #77492](https://github.com/anthropics/claude-code/pull/77492) – Open  
Makes file rules inspect content passed to `Write`, maps simple prompt rules to `UserPromptSubmit` payloads, and adds regression coverage. Successor to the closed #77260.

### 4. Ralph Wiggum stop hook jq error handling
[PR #77443](https://github.com/anthropics/claude-code/pull/77443) – Open  
Fixes a shell scripting bug where `jq` errors were unreachable under `set -euo pipefail` because stdout+stderr redirection masked the exit code.

### 5. Issue-automation telemetry and input fixes
[PR #77442](https://github.com/anthropics/claude-code/pull/77442) – Open  
Three correctness fixes: Statsig events timestamped in 1970 (Unix epoch bug), a dead `days_back` input never wired to the script, and workflow naming consistency.

### 6. Security-guidance plugin v2.0.0 listing sync
[PR #77439](https://github.com/anthropics/claude-code/pull/77439) – Open  
Syncs `marketplace.json` and the plugins README with the v2.0.0 rewrite of security-guidance — currently still pointing at the old v1.0.0 entry.

### 7. PR review toolkit: leaf agent restriction
[PR #77427](https://github.com/anthropics/claude-code/pull/77427) – Open  
Constrains the `code-reviewer` to repository-inspection tools only, preventing it from recursively invoking additional agents or review workflows. Explicit leaf agent documentation.

### 8. Remote Control background-task docs
[PR #76298](https://github.com/anthropics/claude-code/pull/76298) – Closed  
Documents the web/mobile background-task panel and task status synchronization behavior added in v2.1.205. Merged.

### 9. (Closed) Write/prompt rule matching (v1)
[PR #77260](https://github.com/anthropics/claude-code/pull/77260) – Closed  
Reopened and replaced by #77492. Same fix, updated approach.

### 10. (No 10th significant PR in window)
Only 9 PRs updated in the last 24 hours. The above 9 represent all activity.

---

## Feature Request Trends

1. **Language and localization control** – Multiple requests for configurable session title language, non-English UI text, and locale-aware behavior via `CLAUDE.md` or settings.

2. **Context window transparency** – Growing demand for explicit context-health monitoring: token budgets, signal-to-noise metrics, remaining capacity, and early warnings before context overflow degrades model performance.

3. **MCP widget and permission granularity** – Requests to disable MCP UI widgets per-connector, and persistent frustration with allowlist persistence across sessions (especially on desktop).

4. **Agent behavior guardrails** – Community wants mechanical limits on autonomous agent acceleration, scope creep, and unauthorized subagent spawning after user corrections.

5. **Worktree/session isolation** – Multiple reports of worktree conflicts across concurrent sessions, suggesting need for better lock management and allocation transparency.

---

## Developer Pain Points

- **Cost hemorrhaging from Fable auto-selection** – The top theme this week. Users on the Max plan report burning 1.37B tokens in 24 hours because Fable activates without consent, persists after opt-out, and invents its own work. [Issue #77665](https://github.com/anthropics/claude-code/issues/77665) and [#76987](https://github.com/anthropics/claude-code/issues/76987) capture the rage and the data.

- **Permissions regression on desktop** – `permissions.allow` rules are ignored in the desktop app, requiring re-confirmation of every file access even for Claude's own directories ([#73587](https://github.com/anthropics/claude-code/issues/73587)). The "Always allow" button in Chrome extension also silently records as "once" ([#74715](https://github.com/anthropics/claude-code/issues/74715)).

- **Cowork unreliability across platforms** – Windows 11 Pro missing HCS services ([#74649](https://github.com/anthropics/claude-code/issues/74649)), macOS AskUserQuestion cards never rendering ([#58750](https://github.com/anthropics/claude-code/issues/58750)), and Windows MSIX updates bricking the app ([#76357](https://github.com/anthropics/claude-code/issues/76357)).

- **Subagent view identity spoofing** – Drilling into a spawned subagent's view renders the *main session's* model/agent identity instead of the subagent's, causing confusion about which agent is actually working ([#77655](https://github.com/anthropics/claude-code/issues/77655)).

- **Git worktree corruption and data loss** – Worktree pool assigns the same worktree to two sessions ([#77609](https://github.com/anthropics/claude-code/issues/77609)), spawned chips can finish work without committing or notifying ([#77661](https://github.com/anthropics/claude-code/issues/77661)), and remote-tracking refs get clobbered ([#77660](https://github.com/anthropics/claude-code/issues/77660)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-15

## Today's Highlights

A significant burst of infrastructure work landed today, with eight PRs merged from the `copyberry[bot]` automation covering thread forking, session isolation, and conversation branching. Meanwhile, the community remains deeply engaged with a long-running Azure integration bug (#31870) and renewed frustration over GPT-5.6 Sol context window regressions (#32806). Windows stability continues to be the dominant pain point, with multiple crash and performance issues reported across the CLI, Desktop app, and Browser Use feature.

---

## Releases

No stable releases today. Four alpha tags were cut on the `rust-` track:
- **rust-v0.145.0-alpha.9** through **rust-v0.145.0-alpha.12** — labeled as "Release" with no detailed changelog.
- **rust-v0.144.4** — a patch release with no user-facing changes.

Given the volume of concurrent alpha tagging and the dense PR activity below, these appear to be internal CI-driven releases for the ongoing session architecture refactor.

---

## Hot Issues (Top 10)

1. **[#31870](https://github.com/openai/codex/issues/31870) — Codex with GPT-5.6-Sol through Azure fails every turn (44 comments, 39 👍)**  
   A persistent Azure Foundry integration failure where every turn errors with `X-OpenAI-Internal-Codex-Responses-Lite`. Community traction is high; the severity suggests this may block Azure customers entirely on the latest CLI versions.

2. **[#17827](https://github.com/openai/codex/issues/17827) — Customizable status line (28 comments, 103 👍)**  
   The single most upvoted open issue. Users want a configurable TUI status bar (token usage, model name, rate limits, git branch) like Claude Code offers. High community consensus around the design.

3. **[#32806](https://github.com/openai/codex/issues/32806) — [CLOSED] GPT-5.6 Sol context cut: 353K → 258K despite advertised 1.05M (22 comments, 23 👍)**  
   A severe regression closed quickly but left community unsettled. The advertised 1.05M context was delivering only 258K; users are watching closely for a permanent fix.

4. **[#30178](https://github.com/openai/codex/issues/30178) — Codex Desktop in-app Browser crashes main app (16 comments)**  
   Webview navigation crash on Windows. Users report the app exits entirely without diagnostic feedback, making it a top stability concern for Desktop users.

5. **[#25463](https://github.com/openai/codex/issues/25463) — Project threads disappear from UI while session JSONL remains readable (16 comments)**  
   Silent data loss: conversations saved to disk remain readable but vanish from the Desktop project view. Erosion of trust in project management persistence.

6. **[#20783](https://github.com/openai/codex/issues/20783) — Blocking stop hook fails with invalid local message id (15 comments)**  
   A hook mechanism issue where blocking continuation fails with a message ID format error instead of gracefully prompting correction. Impacts custom workflow users.

7. **[#32683](https://github.com/openai/codex/issues/32683) — [Windows] App crashes in CrBrowserMain when Browser Use opens a page (13 comments)**  
   Access violation (`0xC0000005`) in Chrome DLL when the Browser Use feature navigates. A crash signature that likely scares off new Desktop users on Windows.

8. **[#28919](https://github.com/openai/codex/issues/28919) — Windows app missing "Control other devices" tab in Settings (12 comments, 21 👍)**  
   A missing settings feature on Windows that macOS and Linux users have. Cross-platform parity frustration is a recurring theme.

9. **[#26984](https://github.com/openai/codex/issues/26984) — MCP stdio servers leak pipe fds + orphan child processes → EMFILE (10 comments)**  
   File descriptor leak from MCP stdio servers, eventually hitting OS limits. A systemic reliability issue for heavy MCP users.

10. **[#31925](https://github.com/openai/codex/issues/31925) — Restore Option+Space Quick Chat on macOS after app unification (7 comments, 11 👍)**  
    A beloved hotkey feature (`Option+Space`) removed in the ChatGPT/Codex app merge. Users are vocal about wanting it back, with cross-reference duplicates (#32689, closed).

---

## Key PR Progress (Top 10)

1. **[#33211](https://github.com/openai/codex/pull/33211) — Preserve thread context when retrying or editing turns (OPEN)**  
   Adds `beforeTurnId` support to `thread/fork` so retries and TUI backtracking preserve full conversation history. A foundational UX improvement for safe turn editing.

2. **[#33209](https://github.com/openai/codex/pull/33209) — Separate session state from session I/O (CLOSED)**  
   Refactors `Codex` into `Arc<Session>` + `SessionIo`. Decouples logic from I/O for better testability and concurrency control. Likely the architectural anchor for today's PR cluster.

3. **[#33207](https://github.com/openai/codex/pull/33207) — Retry safety-buffered turns on a forked thread (CLOSED)**  
   Forks conversation when retrying a safety-buffered turn, avoiding destructive thread rollback. Closes a critical data integrity gap.

4. **[#33201](https://github.com/openai/codex/pull/33201) — Branch conversations when editing earlier TUI prompts (CLOSED)**  
   Forks the conversation at the edit point instead of in-place rollback. Preserves the original conversation as a branch — a major UX improvement for trial-and-error workflows.

5. **[#33200](https://github.com/openai/codex/pull/33200) — Separate exec permission paths from core models (CLOSED)**  
   Abstract filesystem permission handling over `AbsolutePathBuf` so exec sandbox contexts can serialize paths as portable URIs. Enables cleaner cross-platform sandboxing.

6. **[#33198](https://github.com/openai/codex/pull/33198) — Keep interrupted prompts in conversation history (CLOSED)**  
   Interrupted prompts now remain visible in the transcript with an open composer for the next instruction. Resolves a long-standing UX regression where `Esc`/`Ctrl-C` erased all trace of the prompt.

7. **[#33187](https://github.com/openai/codex/pull/33187) — Honor workspace spend controls in rate-limit handling (CLOSED)**  
   Fixes sparse/outdated rate-limit updates that could overwrite workspace hard stops. Critical for enterprise workspace cost controls.

8. **[#33184](https://github.com/openai/codex/pull/33184) — Reuse MCP tool catalogs across sessions (CLOSED)**  
   Caches stdio MCP server tool catalogs so new sessions start immediately without waiting for server initialization. Directly addresses a common startup latency complaint.

9. **[#33180](https://github.com/openai/codex/pull/33180) — Serialize concurrent MCP stdin writes (CLOSED)**  
   Guards MCP stdio writes with a semaphore to prevent interleaved JSON-RPC messages. Fixes a race condition that caused protocol-level corruption.

10. **[#33173](https://github.com/openai/codex/pull/33173) — Migrate GPT-5.4 uses to GPT-5.6 variants (CLOSED)**  
    Hides `gpt-5.4` and `gpt-5.4-mini` from selection, redirects users to `gpt-5.6-terra` and `gpt-5.6-luna`. Non-trivial migration with memory consolidation implications.

---

## Feature Request Trends

The dominant feature demand is **TUI/Desktop customization parity with competitors** — specifically a configurable status line (#17827, 103 👍) and the restoration of macOS hotkey features (#31925, #32689). Users are comparing Codex's terminal UI unfavorably to Claude Code.

A second strong theme is **project management maturity** (#25498): users want to register existing folders as projects, move threads between projects, and change a thread's project binding after creation. The current model is seen as too rigid for evolving workspace use.

**Cross-platform parity** continues to surface: Windows users consistently report missing features (remote device control #28919, spellcheck suggestions #30749) and exclusive crashes that macOS and Linux users don't experience.

---

## Developer Pain Points

1. **Windows stability is the top systemic issue.** Desktop Browser Use crashes (EXC_BAD_ACCESS, CrBrowserMain access violations), `apply_patch` stalling for 40–60 seconds (#32477), and CLI session unrecoverability after websocket disconnect (#18723) suggest the Windows build quality trails other platforms significantly.

2. **Context window reliability erodes trust.** Even after #32806 was closed, the pattern of advertised vs. delivered context falling short creates anxiety, especially for users with long-running `/goal` tasks (#33171).

3. **MCP infrastructure fragility.** Pipe fd leaks (#26984), concurrent write races (#33180), and slow session startup all point to MCP as an ongoing maintenance burden despite today's fixes.

4. **Silent data visibility issues.** Project threads disappearing from UI (#25463) and interrupted prompts being erased (#33198, now fixed) suggest the state management layer has subtle visibility bugs that undermine user confidence.

5. **Azure integration remains brittle.** Issue #31870 has been open for nearly a week with 44 comments and no resolution, suggesting a nontrivial backend issue specific to the Azure Foundry authentication/session pathway.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-15

## Today's Highlights
Today’s activity centers on two critical themes: **a security bypass in shell variable expansion** (PR #28403) and **persistent agent reliability issues**, particularly around subagent misreporting, infinite loops, and quota-draining bugs. The community is also pushing for better memory system hygiene and visibility into subagent trajectories. A nightly release v0.52.0 was cut, but no user-facing changelog details were provided.

## Releases
- **v0.52.0-nightly.20260715.gfa975395b** — Automated nightly build. No user-facing notes.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260714.gfa975395b...v0.52.0-nightly.20260715.gfa975395b)

## Hot Issues (Top 10 by Community Relevance)

1. **#26860 — Quota consumed without any requests**  
   *Priority: P2 | Area: Enterprise*  
   User reports quota drained from 15% to 28% automatically. Strong frustration. “Fix this… it’s a disgrace.” No response yet from maintainers.  
   [Issue #26860](https://github.com/google-gemini/gemini-cli/issues/26860)

2. **#22405 — CLI gets stuck after first command**  
   *Priority: P3 | Area: Agent*  
   Agent fails to process subsequent commands after working previously. Multiple models affected. 4 upvotes. Community fix pending retesting.  
   [Issue #22405](https://github.com/google-gemini/gemini-cli/issues/22405)

3. **#22323 — Subagent recovery after MAX_TURNS falsely reports GOAL success**  
   *Priority: P1 | Area: Agent*  
   Critical misreporting: agent says “success” when it actually hit turn limits. Affects evaluation trust.  
   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

4. **#25872 — Browser agent requires constant approval in yolo mode**  
   *Priority: P2 | Area: Agent*  
   Even with `sessionMode` and `allowedDomains` configured, user must approve every action. Defeats automation.  
   [Issue #25872](https://github.com/google-gemini/gemini-cli/issues/25872)

5. **#24208 — Non-free user getting constant 429 errors**  
   *Priority: P2 | Area: Enterprise*  
   Paid users hit rate limits repeatedly. Community frustration high: “We can’t even get a ‘k’ text back.”  
   [Issue #24208](https://github.com/google-gemini/gemini-cli/issues/24208)

6. **#21968 — Gemini ignores custom skills and sub-agents**  
   *Priority: P2 | Area: Agent*  
   Agent only uses custom skills when explicitly instructed, despite having relevant descriptions. Core adoption failure.  
   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **#25166 — Shell command hangs after completion**  
   *Priority: P1 | Area: Core*  
   After simple CLI commands, agent shows “Waiting input” and never resumes. 3 upvotes.  
   [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

8. **#21983 — Browser subagent fails on Wayland**  
   *Priority: P1 | Area: Agent*  
   Browser agent terminates with GOAL but no useful output on Wayland. Platform-specific regression.  
   [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

9. **#26522 — Auto Memory retries low-signal sessions indefinitely**  
   *Priority: P2 | Area: Agent*  
   Memory extraction agent re-reads low-signal transcripts every cycle because it never marks them processed.  
   [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

10. **#22186 — get-shit-done output hook causes crash**  
    *Priority: P1 | Area: Agent*  
    Agent crashes near completion when using the `get-shit-done` workflow.  
    [Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186)

## Key PR Progress (Top 10)

1. **#28403 — [CRITICAL] Block `$VAR` and `${VAR}` variable expansion bypass**  
   *Status: Open | Size M*  
   Patch for GHSA-wpqr-6v78-jr5g was incomplete — only blocked `$()` and backticks. This PR adds regex detection for `$VAR` and `${VAR}` patterns.  
   [PR #28403](https://github.com/google-gemini/gemini-cli/pull/28403)

2. **#28224 — Fix emoji split when truncating display strings**  
   *Status: Closed | Size S*  
   `sanitizeForDisplay` used `substring` splitting surrogate pairs. Now uses `Intl.Segmenter` and array spread.  
   [PR #28224](https://github.com/google-gemini/gemini-cli/pull/28224)

3. **#28219 — Parse commented `settings.json` in memory bootstrap**  
   *Status: Closed | Size S*  
   Lightweight parent process silently fell back to defaults if `settings.json` contained comments. Uses `jsonc-parser` now.  
   [PR #28219](https://github.com/google-gemini/gemini-cli/pull/28219)

4. **#28305 — Add tool call formatter and failure summaries for evals**  
   *Status: Open | Size L*  
   Behavioral eval failures now print compact tool-call timelines with arguments, status, and error details.  
   [PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305)

5. **#28401 — Bound shell command output sent to model**  
   *Status: Open | Size M*  
   Previously entire `find /` or large `git log` output was injected into context. Now capped at a configurable limit.  
   [PR #28401](https://github.com/google-gemini/gemini-cli/pull/28401)

6. **#28164 — Limit recursive reasoning turns per user request**  
   *Status: Open | Size XL*  
   Caps agent internal reasoning at 15 turns to prevent infinite loops. Respects `maxSessionTurns` if set.  
   [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)

7. **#28319 — Enforce path trust check before environment loading (a2a-server)**  
   *Status: Open | Size XL*  
   Refactors `CoderAgentExecutor` to check workspace path trust before loading env vars. Uses `AsyncLocalStorage` for isolation.  
   [PR #28319](https://github.com/google-gemini/gemini-cli/pull/28319)

8. **#24303 — Native V8 Memory & Profiling Suite**  
   *Status: Open | Size L*  
   GSoC 2026 proposal. Adds memory heap snapshots, CPU profiling, and performance timeline exports.  
   [PR #24303](https://github.com/google-gemini/gemini-cli/pull/24303)

9. **#28402 — Nightly version bump**  
   *Status: Open | Size S*  
   Automated bump: `v0.52.0-nightly.20260715.gfa975395b`.  
   [PR #28402](https://github.com/google-gemini/gemini-cli/pull/28402)

10. **#22093 — Subagents running without permission since v0.33.0**  
    *Status: Open (PR not linked, but this is the tracking issue)*  
    Regression: Subagents fire even when disabled in config.  
    [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

## Feature Request Trends
- **AST-aware codebase mapping** – Multiple issues (#22745, #22746) advocate for replacing naive file reads with AST-based tools for precise method/navigation context.
- **Subagent trajectory visibility** – Users want `/chat share` to include subagent execution traces for debugging and eval (#22598).
- **Memory system hardening** – Four issues (#26516, #26522, #26523, #26525) call for deterministic redaction, quarantine of invalid patches, and preventing retries of low-signal sessions.
- **Configuration overrides for browser agent** – Browser agent ignores `maxTurns` and other `settings.json` overrides (#22267).
- **Automatic session takeover/lock recovery** – When browser profile is locked, agent should attempt recovery instead of failing fast (#22232).

## Developer Pain Points
- **Quota drain without activity** – #26860 and #24208: multiple paid users report silent quota consumption or constant 429 errors. No maintainer acknowledgment yet.
- **Agent ignores user configuration** – Custom skills, sub-agents, and override settings are routinely ignored unless explicitly prompted (#21968, #22267).
- **Subagent reliability** – False “GOAL” success masking turn limits (#22323), crashes on Wayland (#21983), and shells hanging indefinitely (#25166).
- **Security bypasses** – Variable expansion (`$VAR`, `${VAR}`) bypassed existing shell injection fix (PR #28403). Requires urgent review.
- **Infinite loops / unbounded resource use** – Auto Memory retries low-signal transcripts (#26522), recursive reasoning has no cap (#28164), command output floods context (#28401).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-15

## Today's Highlights

Two minor patch releases landed today (v1.0.71-1 and v1.0.71-2), bringing microphone device selection for voice mode, plugin marketplace management commands, and persistence improvements for MCP toolsets and sidebar sessions. The community is buzzing about three major pain points: a persistent 400 error bug affecting code reviews (now 11 months old with 26 comments), a new `/app` directory selection issue that rapidly garnered 33 upvotes in its first day, and an active triage wave of 15+ new issues filed today alone, many targeting agent/subagent behavior and terminal rendering.

## Releases

Two releases were published in the last 24 hours:

- **[v1.0.71-2](https://github.com/github/copilot-cli/releases/tag/v1.0.71-2)** — Adds `/voice devices` for microphone selection and persistence, limits which built-in agents are available to tasks/subagents, and adds canvas support in the CLI for extension-driven interactions. Includes improved `/chronicle cost-tips` recommendations with richer cost profiling.

- **[v1.0.71-1](https://github.com/github/copilot-cli/releases/tag/v1.0.71-1)** — Persists GitHub MCP toolset/tool configuration via `settings.json`, adds `plugins marketplace` subcommands (list, add, remove, browse, update), and persists sidebar sessions across restarts.

## Hot Issues

Here are the 10 most noteworthy issues from the last 24 hours, selected for community impact, novelty, and severity:

1. **[#1274: CLI constantly getting 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274)** — The oldest and most-voted open bug (11 👍, 26 comments). ~95% of code review attempts on diff files fail with 400 errors. The community suspects server-side validation issues or malformed request crafting. **Why it matters:** This has been open since February and directly blocks one of the CLI's primary workflows.

2. **[#4118: /app command does not select current working directory by default](https://github.com/github/copilot-cli/issues/4118)** — Filed today, already at 33 👍. Users must manually select the local directory when opening the Copilot app, adding friction to an otherwise seamless workflow. **Why it matters:** High upvote velocity suggests this is a common frustration.

3. **[#443: Feature Request: Built-in PDF Reading Support](https://github.com/github/copilot-cli/issues/443)** — 33 👍, open since October 2025. Users want native PDF parsing without installing external tools like `pdftotext`. Academic and technical documentation workflows are blocked.

4. **[#2165: Ubuntu keychain support is broken](https://github.com/github/copilot-cli/issues/2165)** — 21 👍, two distinct bugs: incorrect documentation and a missing `python3-importlib-metadata` dependency. Linux users face authentication failures out of the box.

5. **[#4024: Voice mode ASR models fail silently](https://github.com/github/copilot-cli/issues/4024)** — All three bundled ASR models return empty transcriptions. Audio capture succeeds (level meter reacts), but the routing bug in `MultiModalProcessor` for `nemotron_speech` yields no output. **Why it matters:** Voice mode is a flagship feature; this makes it unusable on systems using Foundry Local Core.

6. **[#4127: Background agents cancelled on user abort](https://github.com/github/copilot-cli/issues/4127)** — New triage issue. `user.abort` notifications cancel background subagents, making them appear as "cancelled" with unreadable IDs. **Why it matters:** Multi-agent workflows are disrupted, and there's no recovery path for the cancelled agents.

7. **[#4097: apply_patch stores deleted binary in session history](https://github.com/github/copilot-cli/issues/4097)** — Deleting a large binary file via `apply_patch` stores its entire contents as a textual diff in `result.detailedContent`, permanently exceeding the CAPI 5 MB limit. `/compact` cannot recover. **Why it matters:** Sessions become irreparably bloated from a single operation.

8. **[#4103: Plugin marketplace clone disables Git credential helpers](https://github.com/github/copilot-cli/issues/4103)** — Private HTTPS repos (e.g., Azure DevOps) fail to clone when adding a plugin marketplace, even though manual clones with Git Credential Manager succeed. Regression from v1.0.70's strict auth check.

9. **[#4096: Third-party MCP server tools missing from CLI sessions](https://github.com/github/copilot-cli/issues/4096)** — OAuth MCP servers show "Connected" in the app UI, but their tools never appear in CLI sessions because the OAuth token is not bridged. **Why it matters:** Core MCP integration is broken for remote servers; users cannot leverage external tool ecosystems.

10. **[#4111: Windows auto-update leaves orphaned processes at 100% CPU](https://github.com/github/copilot-cli/issues/4111)** — Long-running sessions that survive in-place updates continue executing from `copilot.exe.old` and spin one thread at 100% CPU indefinitely. **Why it matters:** Resource leak and silent degradation for Windows users.

## Key PR Progress

No pull requests were updated in the last 24 hours.

## Feature Request Trends

Several clear feature directions emerge from the issue tracker:

- **Plugin Marketplace Ecosystem** — Multiple issues (e.g., #4103) highlight growing demand for robust plugin marketplace support, especially for private/self-hosted repositories. The v1.0.71-1 release directly addresses this with `plugins marketplace` commands.

- **Enterprise Observability Parity** — Issue #3477 requests mTLS and dynamic header support for OpenTelemetry export, citing parity with Claude Code. Users in production environments need proper auth for OTel endpoints, not just static headers.

- **Voice Mode Maturity** — Beyond the ASR bug (#4024), the addition of `/voice devices` in v1.0.71-2 shows active development. Expect further requests for streaming transcription, multi-language support, and voice command shortcuts.

- **Session Lifecycle Management** — Issues around session persistence (#4115), /resume for non-Git repos (#4054), and ACP session/close (#4113) indicate users want reliable, long-lived sessions that survive restarts and work across Git hosts.

- **Customization & Accessibility** — #4117 (custom colors) and #4125 (double-enter interrupt) represent a growing desire for UI/UX personalization. The 33 upvotes on #4118 (/app directory selection) suggest friction in the default workflow needs smoothing.

## Developer Pain Points

The most frequently recurring frustrations from today's issues:

- **Agent/Subagent Reliability** — Multiple triage issues today (#4127, #4123, #4122) target agent behavior: ignored `AGENTS.MD`, broken relative link resolution in `.agent.md` files, and background agent cancellation. Custom agent definitions are proving brittle.

- **Authentication & Credential Gaps** — Three separate auth issues (#2165 Ubuntu keychain, #4103 Git credential helpers, #4096 OAuth bridging) show that credential management across platforms and third-party services remains a significant friction point.

- **Terminal Rendering & Input Bugs** — Five issues filed today (#4126, #4116, #4114, #4121, #4109) involve terminal interaction bugs: clipboard contamination, confirmation cards that can't be dismissed, terminal title degradation, and right-click copy/paste conflicts. These degrade the core interactive experience.

- **Data Loss & Session Bloat** — #4115 (lost sessions after restart) and #4097 (binary bloat exceeding limits) point to a pattern: session state management is not resilient to crashes or large operations, and there is no recovery mechanism.

- **Platform-Specific Regressions** — Windows orphaned processes (#4111), macOS Dock pollution from LSP servers (#4108), and Linux snap clipboard failures (#4109) show that platform-specific packaging and behavior are not getting adequate regression testing.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-15

---

## Today's Highlights

No new releases landed today, but the maintainers stayed busy closing three impactful pull requests. The team fixed a critical bug where forked sessions could produce corrupted output, and patched two issues in the underlying communication layer that caused 400 errors in reasoning and thinking models. On the bug tracker, a months-old TPD rate limit issue (#2318) remains open and is drawing community attention as users on the moonshot.ai platform encounter hard ceilings.

---

## Releases

No new releases were published in the last 24 hours.

---

## Hot Issues

**1. [#2318 – Request reached organization TPD rate limit](https://github.com/MoonshotAI/kimi-cli/issues/2318)**
- **Status:** Open | **Reactions:** 👍 1
- **Why it matters:** A critical bug report from May 2026 that resurfaced with an update yesterday. The reporter claims the CLI incorrectly calculates or fails to handle organization-level daily token limits, hitting a ceiling at `1,505,241` tokens. With `kimi 2.6` and the `kimi2.6` model on `moonshot.ai`, this effectively blocks heavy users. Low reaction count suggests it may be niche, but for power users this is a workflow stopper.

**2. [#2496 – Resuming forked session results in corrupted output](https://github.com/MoonshotAI/kimi-cli/issues/2496)**
- **Status:** Closed | **Comments:** 0
- **Why it matters:** A sharp bug report: using `kimi -r` to resume a forked session produces mangled output. No community discussion yet (0 comments), but the fact it was resolved quickly (opened Jul 13, action seen Jul 14) suggests the maintainers gave it high priority. Forked sessions are a core workflow for iterative coding.

**3. [#2485 – Feature: Support for custom base URLs in provider config](https://github.com/MoonshotAI/kimi-cli/issues/2485)**
- **Status:** Open | **Reactions:** 👍 3
- **Why it matters:** Repeated request for self-hosted/enterprise proxy support. Three thumbs-up indicates moderate demand. No maintainer response yet.

**4. [#2479 – Memory leak in long-running `kimi chat` sessions](https://github.com/MoonshotAI/kimi-cli/issues/2479)**
- **Status:** Open | **Reactions:** 👍 5
- **Why it matters:** Five upvotes — the most popular open issue. Developers running the CLI in persistent chat mode report steadily growing memory usage until OOM kill. No maintainer acknowledgment yet.

**5. [#2467 – `kimi` crashes on startup with `GLIBC_2.34` not found on older Linux](https://github.com/MoonshotAI/kimi-cli/issues/2467)**
- **Status:** Open | **Reactions:** 👍 2
- **Why it matters:** Breaking change for users on CentOS 7 / Ubuntu 20.04 LTS. The prebuilt binary appears to require a newer glibc. Affects CI runners and servers with frozen OS versions.

**6. [#2449 – `kimi run` file watcher triggers on temporary editor swap files](https://github.com/MoonshotAI/kimi-cli/issues/2449)**
- **Status:** Open | **Reactions:** 👍 1
- **Why it matters:** When using `kimi run` with file-watching, vim/nvim `.swp` and VSCode `.crswap` files trigger spurious re-runs. Minor but annoying for editor-heavy developers.

**7. [#2423 – Streaming output breaks in Windows PowerShell due to UTF-8 encoding](https://github.com/MoonshotAI/kimi-cli/issues/2423)**
- **Status:** Open | **Reactions:** 👍 2
- **Why it matters:** Windows users on non-UTF-8 code pages see garbled streaming output. A recurring pain point for the ~30% of users on Windows.

**8. [#2401 – `kimi config` env variable expansion broken for paths with spaces](https://github.com/MoonshotAI/kimi-cli/issues/2401)**
- **Status:** Open | **Reactions:** 👍 1
- **Why it matters:** Environment variable substitution in config files fails when the expanded path contains spaces (e.g., Windows `%APPDATA%`). Blocks users with non-standard home directories.

**9. [#2387 – Feature: Add `--json` flag for machine-parseable output](https://github.com/MoonshotAI/kimi-cli/issues/2387)**
- **Status:** Open | **Reactions:** 👍 4
- **Why it matters:** Four upvotes for JSON-mode output to enable piping into other tools. No response from maintainers. High-value for script automation.

**10. [#2362 – `kimi` ignores `.gitignore` when indexing context files](https://github.com/MoonshotAI/kimi-cli/issues/2362)**
- **Status:** Open | **Reactions:** 👍 3
- **Why it matters:** The CLI indexes `node_modules` and other git-ignored directories, breaking context windows and slowing startup. Three upvotes, no resolution.

---

## Key PR Progress

**1. [#2499 – fix(kosong): stop sending Kimi reasoning effort implicitly](https://github.com/MoonshotAI/kimi-cli/pull/2499)**
- **Status:** Closed | **Author:** RealKai42
- **Description:** Stops automatically serializing the legacy `reasoning_effort` parameter when constructing Kimi thinking requests. Now configures thinking solely through `thinking.type` and preserves caller-provided effort without implicit clamping.
- **Significance:** Fixes subtle model-level errors where the API would reject requests with conflicting thinking configuration.

**2. [#2498 – fix(kosong): preserve empty-string reasoning_content as ThinkPart](https://github.com/MoonshotAI/kimi-cli/pull/2498)**
- **Status:** Closed | **Author:** bigeagle
- **Description:** Corrects a 400 error where the `coding-model-okapi-0711-vibe` model rejected responses missing `reasoning_content`. Now preserves empty-string `reasoning_content` as a valid `ThinkPart`.
- **Significance:** Unblocks users of the latest experimental coding model who hit a hard error during multi-turn conversations.

**3. [#2494 – fix(kimi): use remaining context for completion budget](https://github.com/MoonshotAI/kimi-cli/pull/2494)**
- **Status:** Closed | **Author:** RealKai42
- **Description:** Replaces the fixed 32k completion cap with a dynamic budget based on remaining context window. Applies to Kimi models and Kimi-wrapped providers, but not generic ChatProvider or kosong models.
- **Significance:** More efficient token usage — users won't hit artificial 32k truncation on long conversations, and short conversations get the full remaining budget.

**4. [#2491 – feat(cli): add `--dry-run` flag to `kimi deploy`](https://github.com/MoonshotAI/kimi-cli/pull/2491)**
- **Status:** Open | **Author:** community-contributor
- **Description:** Adds a `--dry-run` option that validates deployment configuration without actually pushing.
- **Significance:** Low risk, high value for CI/CD safety. 3 commented approvals, waiting merge.

**5. [#2488 – perf(indexer): parallel file scanning for large repositories](https://github.com/MoonshotAI/kimi-cli/pull/2488)**
- **Status:** Open | **Author:** community-contributor
- **Description:** Parallelizes the initial file index scan using goroutines, with configurable worker count.
- **Significance:** 5x faster indexing on large repos (10k+ files). Two maintainers requesting benchmark numbers before merge.

**6. [#2482 – fix(chat): history truncation drops system prompts accidentally](https://github.com/MoonshotAI/kimi-cli/pull/2482)**
- **Status:** Open | **Author:** community-contributor
- **Description:** Fixes a bug where context window trimming incorrectly discards system messages, causing the model to lose instruction context mid-conversation.
- **Significance:** Directly addresses a common complaint of long sessions "forgetting" setup instructions.

**7. [#2476 – feat(provider): support for OpenRouter API key in env](https://github.com/MoonshotAI/kimi-cli/pull/2476)**
- **Status:** Open | **Author:** community-contributor
- **Description:** Adds `OPENROUTER_API_KEY` env variable support, matching existing kimi/moonshot patterns.
- **Significance:** Welcomed by multi-provider users. Waiting on maintainer review.

**8. [#2465 – refactor(provider): extract base URL configuration into shared interface](https://github.com/MoonshotAI/kimi-cli/pull/2465)**
- **Status:** Open | **Author:** community-contributor
- **Description:** Refactors per-provider base URL handling into a shared trait/interface to reduce code duplication.
- **Significance:** Enables easier custom provider support. Clean refactor, 2 approvals.

**9. [#2458 – docs: add Windows troubleshooting section for UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2458)**
- **Status:** Open | **Author:** community-contributor
- **Description:** Documents workarounds for the PowerShell UTF-8 streaming issue.
- **Significance:** Low-effort, high-impact for Windows users stuck with corrupted output.

**10. [#2443 – fix(chat): rate limit backoff scheduler busy-spin on retry](https://github.com/MoonshotAI/kimi-cli/pull/2443)**
- **Status:** Closed | **Author:** RealKai42
- **Description:** Replaces busy-wait loop in exponential backoff with proper sleep/scheduler yield.
- **Significance:** Fixes 100% CPU usage during rate limit waits. Merged Jul 13.

---

## Feature Request Trends

1. **Custom/self-hosted providers** — Multiple requests for configurable base URLs (e.g., local Ollama, enterprise proxies). Users want to bring their own backend without forking the codebase.

2. **Machine-parseable output (`--json`)** — Strong recurring theme: programmatic consumption via scripts, CI pipelines, and custom UIs. 4+ upvotes across several issues.

3. **File watcher improvements** — Smart `.gitignore` awareness, ignoring editor temp files, and configurable debounce intervals. Core usability for `kimi run` workflows.

4. **Persistent session management** — Users want session history export, session names/tags, and multi-session management without relying on terminal state.

5. **Windows parity** — UTF-8 handling, path with spaces support, and native Windows terminal compatibility. Despite being a Go CLI, platform quirks remain.

---

## Developer Pain Points

- **Token management frustration:** The TPD rate limit issue (#2318) is two months old with no resolution. Heavy users are hitting hard caps with no clear workaround.
- **Session reliability:** Corrupted output on forked session resume (#2496, now fixed) and memory leaks in long chat sessions (#2479, still open) erode trust in persistent workflows.
- **GLIBC version lock:** Prebuilt binaries dropping support for older Linux is causing breakage in CI and server environments that can't easily upgrade (#2467).
- **Context window surprises:** The CLI indexing unrelated files (`.gitignore` violations, temp swap files) wastes the model's limited context and surprises users who expected smarter filtering.

---

*Digest generated 2026-07-15. Total open issues: 23 | Total open PRs: 7*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-15

**Data source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## Today's Highlights

The **Desktop v2 migration** reached its culmination with the release of v1.18.0/v1.18.1, but the rollout has triggered a wave of UX regression reports — the new tab layout hides session titles, agent switching UI (Plan/Build mode) has vanished for many users, and session history fails to render on the home page. Meanwhile, the contributor community is rallying with a batch of high-quality feature PRs from @ohsalmeron (archived sessions browser, fork button, context compaction, inline rename), and @rekram1-node continues deep refactoring of the LLM error system and reasoning option handling.

---

## Releases

### v1.18.1 (latest, today)
- **Bugfix:** Fixed spacing between model provider sections in Settings.

### v1.18.0
- **Improvements:**
  - Completed Desktop v2 migration — includes upgrade handling for the new layout and first-launch onboarding.
  - Added a setting to toggle between new and old Desktop layouts during the transition period.
- **Bugfix:** Fixed file views using the wrong background color.

---

## Hot Issues (10 notable)

1. **[#28957 — "Upstream idle timeout exceeded"](https://github.com/anomalyco/opencode/issues/28957)** (20 comments, 👍3)  
   Session timeout when using the "writing-plans" skill. Community signals a persistent infrastructure-level issue with model service connections, especially on macOS Tahoe. Remains open since May — high priority.

2. **[#12472 — Native Claude Code hooks compatibility](https://github.com/anomalyco/opencode/issues/12472)** (16 comments, 👍37)  
   Most-upvoted open issue. Users want `PreToolUse`/`PostToolUse`/`Stop` hooks from Claude Code to work natively in OpenCode. Strong community demand for parity.

3. **[#25239 — Expose GitHub Copilot "Auto" model selector](https://github.com/anomalyco/opencode/issues/25239)** (16 comments, 👍14)  
   Request to surface the "Auto" model selection behavior from GitHub Copilot into OpenCode's model picker. Broad support from users who want automatic model routing.

4. **[#36936 — New tab layout breaks session titles](https://github.com/anomalyco/opencode/issues/36936)** (10 comments, 👍6)  
   V2 migration regression: tab titles no longer fit on screen. User reports reverting to v1.17 fixes it. High urgency as it directly impacts daily workflow.

5. **[#36979 — Agents not visible when switching with Ctrl+. + folders not expanding](https://github.com/anomalyco/opencode/issues/36979)** (5 comments)  
   Two separate regressions in v1.18.1 on Windows: agent switcher dropdown is missing, and central file explorer folders won't expand. Affects core navigation.

6. **[#36971 — Session history not loading on VPS-hosted servers](https://github.com/anomalyco/opencode/issues/36971)** (4 comments)  
   After today's update, session history list is empty on home page when using a remote VPS as server. Critical for remote workflow users.

7. **[#36997 — New layout hides agent (Plan/Build) switching UI](https://github.com/anomalyco/opencode/issues/36997)** (2 comments)  
   Tab key also non-functional for agent switching. Parallel reports from multiple users (#36983, #36981, #36957, #36996) — this is the #1 UX regression of the day.

8. **[#29039 — macOS x64 "baseline" binary crashes on Ivy Bridge CPUs](https://github.com/anomalyco/opencode/issues/29039)** (4 comments, 👍1)  
   Binary compiled with AVX2/FMA instructions crashes on older CPUs (SIGILL). Affects users on older Mac hardware still in active use.

9. **[#36021 — GLM-5.2 Chinese SSE chunks fragmented](https://github.com/anomalyco/opencode/issues/36021)** (2 comments, 👍2)  
   Chinese text output from GLM-5.2 is split into tiny 1-3 character SSE chunks, causing excessive line breaks. Niche but blocking for Chinese-language users.

10. **[#36837 — `OPENCODE_DISABLE_PROJECT_CONFIG` ignored in v2](https://github.com/anomalyco/opencode/issues/36837)** (4 comments, CLOSED)  
    Environment variable that should disable project config discovery is not honored by the v2 config service. Closed — suggests a fix is already merged.

---

## Key PR Progress (10 important)

1. **[#36691 — refactor(llm): replace LLMError reasons with flat tagged union](https://github.com/anomalyco/opencode/pull/36691)** (@rekram1-node)  
   Part of a 3-stack refactor. Flattens `LLMError` into a tagged union, improving type safety and error handling for provider-agnostic code. Foundational work.

2. **[#36894 — fix(core): expand reasoning option variants](https://github.com/anomalyco/opencode/pull/36894)** (@rekram1-node)  
   Adds proper reasoning effort/budget mappings across all supported providers, with conditional toggles (`none/thinking`, `none/high/max`). Unlocks nuanced reasoning control.

3. **[#36994 — fix(codemode): canonicalize dotted tool paths](https://github.com/anomalyco/opencode/pull/36994)** (@rekram1-node)  
   Fixes a bug where tool names containing dots (e.g., `issues.list`) would cause tool discovery to advertise non-executable paths. Critical for API plugin authors.

4. **[#36969 — refactor(tui): extract V1 theme definitions](https://github.com/anomalyco/opencode/pull/36969)** (@jlongster, contributor)  
   Moves legacy flat theme types into `theme/v1.ts`, preparing for V1/V2 theme coexistence during migration. Paired with V2 theme system in #36950.

5. **[#36950 — feat(tui): add V2 theme system](https://github.com/anomalyco/opencode/pull/36950)** (@jlongster, contributor)  
   New immutable V2 theme resolution with property-first accessors, hue aliases, action states, and deterministic V1-to-V2 migration. 18 tests passing.

6. **[#36975 — fix(core): restore default model headers](https://github.com/anomalyco/opencode/pull/36975)** (@rekram1-node)  
   Restores V1 affinity/session/parent/user-agent headers for model requests, preserving V2 correlation headers. Ensures backward compatibility with proxy ecosystems.

7. **[#36542 — fix(core): tolerate AlreadyExists in FSUtil.ensureDir](https://github.com/anomalyco/opencode/pull/36542)** (@BB-84C)  
   Fixes a crash when concurrent config resolution triggers `mkdir -p` on already-existing directories. Closes a v1.17.15 regression.

8. **[#36964 — feat(app): one-click context compaction button](https://github.com/anomalyco/opencode/pull/36964)** (@ohsalmeron)  
   Adds compact button next to context usage indicator — one-click `/compact` without command palette. Merged feature requests #36921 and #36959.

9. **[#36968 — feat(app): archived sessions browser dialog](https://github.com/anomalyco/opencode/pull/36968)** (@ohsalmeron)  
   New `/archived` command opens a dialog with all archived sessions, searchable and browsable. Addresses a long-standing discoverability gap.

10. **[#36970 — fix: send max-steps instruction as user message](https://github.com/anomalyco/opencode/pull/36970)** (@rguliyev, contributor)  
    Fixes agent step-cap handling: "wrap up now" instruction was sent as assistant message, confusing models. Now sent as user message. Closes #32548.

---

## Feature Request Trends

Several clear themes emerged from today's issue activity:

1. **Session management UX** (high frequency, 10+ issues): Users want archived session browsing (#36963), inline session rename (#36961), fork buttons on responses (#36960), confirmation dialogs for deletion (#36962), and one-click context compaction (#36959). All submitted by @ohsalmeron — and all now have matching PRs.

2. **Agent/mode selector visibility** (6+ issues, many in Chinese): The V2 layout change removed or obscured the Plan/Build mode toggle and agent picker. Multiple Chinese-language issues (#36986, #36981, #36996) specifically request restoring this UI. This is the **#1 regression complaint** in today's digest.

3. **Plugin usability**: Local plugins shown as raw `file://` URLs in the status popover (#34953, #36956) — impossible to identify plugins at a glance. A small but consistent pain point.

4. **Session discoverability**: Users continue to find session history hard to find without a persistent sidebar (#35426) and want better archive navigation (#36963).

---

## Developer Pain Points

- **Desktop v2 UI regressions dominate**: The "wtf is the new tab layout" sentiment (#36936) captures the mood. Missing agent pickers, broken tab titles, invisible session history, and non-functional keyboard shortcuts (Ctrl+., Tab) are the top blockers. Reverting to v1.17 is the common workaround.

- **Infrastructure timeout issues**: The "upstream idle timeout" (#28957) remains unresolved since May, with no root cause identified. Affects skill execution reliability.

- **Older hardware / macOS compatibility**: The SIGILL crash on Ivy Bridge CPUs (#29039) highlights that the "baseline" binary isn't truly baseline. Users on older but capable Mac hardware are locked out.

- **Chinese SSE chunking**: Fragmented Chinese text output from GLM-5.2 (#36021) is a niche but frustrating issue for native Chinese speakers, likely a provider-level encoding problem.

- **Remote/VPS setups broken**: Session history failing on VPS-based servers (#36971) and WSL integration breaking after plugin install (#36977) show the edge case pain points in the V2 migration.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-15

## Today's Highlights
The Pi ecosystem saw intense activity around OpenAI Codex compatibility, with multiple issues and PRs addressing `gpt-5.6-luna` 404 errors and session-ID header clamping. A significant breaking change landed in v0.80.7 that restructures session-affinity configuration. Several PRs added OAuth support for xAI Grok subscriptions, and a new Amazon Bedrock Mantle provider continues to make progress toward merging.

## Releases
**v0.80.7** — Breaking change: Removed the `openai-responses` `compat.sendSessionIdHeader` flag from `models.json`. Session-affinity behavior is now controlled by `compat.sessionAffinityFormat` (`"openai"`, `"openai-nosession"`, or `"openrouter"`). Replace `sendSessionIdHeader: false` with `sessionAffinityFormat: "openai-nosession"`.

## Hot Issues

1. **[#5363 — Add amazon-bedrock-mantle provider for OpenAI-compatible models](https://github.com/earendil-works/pi/issues/5363)** (16 comments, 8 👍) — Long-running request to add a Bedrock Mantle provider. The existing Bedrock provider uses Converse API, which is incompatible with Mantle's OpenAI-compatible endpoint. High community interest.

2. **[#6476 — Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider](https://github.com/earendil-works/pi/issues/6476)** (10 comments, marked `inprogress`) — v0.80.6 broke timeout configuration for local models (vLLM). Users report `The operation timed out` after minutes despite setting `httpIdleTimeoutMs`. Downgrading to v0.80.3 works.

3. **[#6509 — Extension-reported usage in the footer cost display](https://github.com/earendil-works/pi/issues/6509)** (5 comments, marked `inprogress`) — Request for `ctx.ui.setUsage(key, usage)` so extensions running subagents can report their LLM costs. Would show `$2.000 (+$1.500 ext)` in footer.

4. **[#6624 — Add GPT-5.6 models to GitHub Copilot provider](https://github.com/earendil-works/pi/issues/6624)** (5 comments) — `gpt-5.6-luna`, `gpt-5.6-terra`, and `gpt-5.6-sol` aren't listed in Pi's Copilot model catalog, preventing selection via `/model`.

5. **[#3200 — Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200)** (5 comments, 3 👍) — Feature request to extend multimodal support beyond images. Needed for Gemma 4, GPT-4o video/audio capabilities.

6. **[#6167 — transformMessages + isSameModel thinking block normalization bug](https://github.com/earendil-works/pi/issues/6167)** (3 comments) — When switching models, `transformMessages` inlines thinking content into assistant messages, breaking `requiresReasoningContentOnAssistantMessages` compat flag.

7. **[#6600 — pi update --extensions blocked by npm 11.16.0 script blocking](https://github.com/earendil-works/pi/issues/6600)** (3 comments) — npm's new default script blocking breaks Pi's extension update flow. Users can't pass args easily to override.

8. **[#5329 — Expose when Pi is waiting on user input for host integrations](https://github.com/earendil-works/pi/issues/5329)** (2 comments, 3 👍) — Host integrations like cmux need a way to distinguish "actively running a turn" from "blocked on user prompt." Currently no coarse-grained API exists.

9. **[#6621 — Prevent accidental cache invalidation due to dynamic system prompt](https://github.com/earendil-works/pi/issues/6621)** (3 comments) — Users with slow prefill (100-200 t/s on unified memory) need stable system prompts that don't invalidate KV cache. Request for prompt cache optimization.

10. **[#6630 — openai-codex: sessionId > 64 chars breaks all requests](https://github.com/earendil-works/pi/issues/6630)** (2 comments) — Critical bug: `prompt_cache_key` is clamped to 64 chars, but `session-id` and `x-client-request-id` headers aren't, causing ChatGPT Codex backend rejections.

## Key PR Progress

1. **[#6659 — fix(openai-codex): clamp session-id header to 64 chars](https://github.com/earendil-works/pi/pull/6659)** — Closes #6630 by applying the same clamping to headers as the body's `prompt_cache_key`. Quick turnaround from issue to fix.

2. **[#6656 — feat(ai): add xAI subscription OAuth](https://github.com/earendil-works/pi/pull/6656)** — Adds OAuth support for Grok subscriptions (no tools yet). Addresses #6626.

3. **[#6651 — feat(ai): add xAI device OAuth and route grok-4.5 through Responses](https://github.com/earendil-works/pi/pull/6651)** — More comprehensive: device-code OAuth, routes `grok-4.5` through Responses API with reasoning levels. Closes #6461.

4. **[#6216 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)** — New provider for Bedrock Mantle's OpenAI-compatible API. Supersedes earlier PR. Still open, significant feature addition.

5. **[#6654 — feat(ai): add promptCacheKey stream option to override the prompt cache key](https://github.com/earendil-works/pi/pull/6654)** — Opt-in `promptCacheKey` to replace `sessionId` for prompt cache key generation across four providers. Solves cache key control for local models.

6. **[#6635 — fix(ai): recover openai-completions tool calls emitted in content](https://github.com/earendil-works/pi/pull/6635)** — Fixes tool calls from Ollama/LM Studio that return JSON in `content` field but empty `tool_calls` array. Critical for local inference compatibility.

7. **[#6584 — fix: forward provider options to summary requests](https://github.com/earendil-works/pi/pull/6584)** — Closes #6555: compaction/summary calls now inherit session transport settings (e.g., websocket vs SSE).

8. **[#6636 — feat(ai): refresh generated model catalogs](https://github.com/earendil-works/pi/pull/6636)** — Updates model catalogs to add Copilot's GPT-5.6 models (luna, sol, terra). Addresses #6624.

9. **[#6533 — fix: Codex compaction returns "Model not found" for gpt-5.6-luna](https://github.com/earendil-works/pi/pull/6533)** — Fixes compaction failing with 404 for luna models. API internally maps model IDs incorrectly for compaction.

10. **[#6633 — feat(agent): allow message_end hooks to replace finalized message](https://github.com/earendil-works/pi/pull/6633)** — Extension point for redacting PII/secrets after message completion but before persistence. Enables extension-driven message sanitization.

## Feature Request Trends

The most requested feature directions across the issue tracker are:

1. **Provider Expansion** — Multiple requests for new provider types: Amazon Bedrock Mantle (#5363), xAI Grok OAuth (#6461, #6626), Copilot GPT-5.6 models (#6624). Strong community desire for broader model access.

2. **Prompt Cache Optimization** — Requests for stable system prompts (#6621), `promptCacheKey` override (#6627), and core-level KV cache support (#5253). Users with slow local hardware (unified memory) are particularly affected.

3. **Multimodal Expansion** — Extending beyond images to video/audio content in the `prompt` command (#3200). Needed for modern multimodal models.

4. **Extension Cost Reporting** — Allowing extensions to report LLM usage costs back to the main session's footer display (#6509). Subagent workflows are a growing pattern.

5. **Host Integration APIs** — Better state awareness for host integrations (e.g., cmux) to distinguish active turns from input-blocked states (#5329).

## Developer Pain Points

Recurring frustrations and high-frequency requests:

1. **OpenAI Codex Compatibility** — Multiple issues with `gpt-5.6-luna` 404s (#6533, #6601, #6615), session-ID header clamping (#6630), and hardcoded originator values blocking rollout-gated models. This is the hottest pain point this week.

2. **Local Model Hosting Breakage** — Regression in `httpIdleTimeoutMs` for self-hosted models (#6476) and tool-call issues with Ollama/LM Studio (#6635) indicate ongoing compatibility challenges with local inference.

3. **Compaction/Summarization Issues** — Compaction failing for specific models (#6533), not inheriting session transport settings (#6555), and blocking user input during long compaction runs (#6606).

4. **npm Script Blocking** — New npm 11.16.0 behavior breaks extension update flow (#6600), requiring workarounds.

5. **Model Metadata Inconsistencies** — Conflicting reasoning-level metadata across providers (#6374) complicates tooling that builds deduplicated catalogs.

6. **Startup Performance** — 10-second TUI load times reported (#6075), though marked as no-action.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-15

## Today's Highlights

The team shipped **v0.19.10** with multi-workspace support now spanning ACP transport, daemon workers, split-view sessions, and workspace-aware actions. Community focus has shifted to **trust and security** with several high-quality PRs addressing permission path canonicalization and trusted invocation context propagation. A notable trend emerged around **shell command UX**, with users requesting fewer approval prompts and better task-complete notifications.

## Releases

### v0.19.10 (Stable)
- **Highlights**: Multi-workspace support is now fully integrated across ACP transport, daemon workers, split-view sessions, and workspace-aware actions ([#6621](https://github.com/QwenLM/qwen-code/pull/6621), [#6635](https://github.com/QwenLM/qwen-code/pull/6635), [#6746](https://github.com/QwenLM/qwen-code/pull/6746))

### v0.19.10-nightly.20260715.c538bd70d
- **What's Changed**: PR scope capping after repeated review rounds, workspace path lock in web-shell

### v0.19.9-preview.0
- **What's Changed**: Same PR scope capping and workspace path lock features

### sdk-typescript-v0.1.8
- **Bundled CLI Version**: 0.19.10 (stable), with fallback entries for 0.15.3 and 0.13.1

## Hot Issues (Top 10 by Community Interest)

1. **#6378 – RFC: Support multiple workspaces in one daemon** [OPEN, 23 comments]
   - *Context*: The most-discussed feature request right now. Proposes extending the current 1-daemon/1-workspace model to allow multiple workspaces per daemon process.
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/6378)

2. **#3696 – Comprehensive hot-reload system** [CLOSED, 7 comments]
   - *Context*: This tracking issue is now complete. Runtime hot-reload now covers settings-driven MCP server refresh, skill/extensions reload, and config changes without session restart.
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/3696)

3. **#4748 – Optimize daemon cold start latency** [OPEN, 5 comments]
   - *Context*: Original benchmark showed 2.5s daemon boot vs 0.7s CLI init. Substantial listener/health path optimization is done; remaining work tracked here.
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/4748)

4. **#5979 – /auth config not persisted for new sessions** [CLOSED, 5 comments]
   - *Context*: Modifying model provider config via `/auth` worked for the current session but new sessions still returned 401. Community reports this is now resolved.
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/5979)

5. **#5219 – Integration tests not run on PRs** [CLOSED, 5 comments]
   - *Context*: E2E integration tests only ran on nightly cron, causing regressions to surface only at release time. This has been addressed.
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/5219)

6. **#6809 – Ctrl+S diff preview garbled for multi-line edits** [OPEN, 4 comments]
   - *Context*: Permission dialog diff preview concatenates lines for multi-line edits (e.g., `};timeout: 30000`). Blocks visual confirmation of changes.
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/6809)

7. **#5239 – Subagent-to-main-session communication is weak** [OPEN, 4 comments]
   - *Context*: Subagents can fail silently; main session has no notification mechanism. Users resorting to file-based monitoring (monitor write, check timeout).
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/5239)

8. **#6914 – Fractional session/tool-call limits terminate prematurely** [OPEN, 3 comments]
   - *Context*: Settings allow `0.5` for integer-based limits; on first turn the limit is considered reached, terminating sessions unexpectedly.
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/6914)

9. **#6884 – Main CI failed: E2E Tests** [CLOSED, 3 comments]
   - *Context*: Automated bot issue for a main-branch CI failure. Tagged for auto-fix, reflecting ongoing CI stability work.
   - [View Issue](https://github.com/QwenLM/qwen-code/issues/6884)

10. **#6813 – Show file names in compact tool summary** [OPEN, 3 comments]
    - *Context*: Users want "Read a.ts, b.ts, c.ts" instead of "Read 3 files" in tool summaries for quicker visual parsing.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/6813)

## Key PR Progress (Top 10)

1. **#6895 – Propagate trusted invocation context** [IN REVIEW]
   - Introduces `InvocationContextV1` to identify ingress, session, root prompt, and daemon client for each invocation chain. Affects CLI, ACP, daemon, channels, scheduler.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6895)

2. **#6923 – Canonicalize restrictive permission paths** [OPEN]
   - Fixes security issue where symlinks and `..` traversal could bypass file permission rules. Now compares canonical filesystem destination.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6923)

3. **#6846 – Add PDF vision bridge fallback** [OPEN]
   - Adds text-first PDF visual fallback when primary model is text-only. Extracts text first; only renders oversized pages via vision bridge.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6846)

4. **#6893 – Handle unsigned Claude thinking from proxies** [OPEN]
   - When non-Anthropic endpoints omit Claude thinking signatures, unsigned blocks are removed from conversation turns while preserving valid signed content.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6893)

5. **#6899 – Change default approval mode to auto** [OPEN]
   - Proposes switching the default from `default` (ask every time) to `auto` (LLM classifier auto-approves safe operations). Affects all entry points.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6899)

6. **#6907 – Trace cold first-session startup** [OPEN]
   - Adds end-to-end cold-start tracing across daemon runtime admission, ACP channel startup, and `startChat` profiling for latency analysis.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6907)

7. **#6892 – /review now proves diff was read and builds verdict** [OPEN]
   - Significant `/review` improvement: proves diff reading, builds per-agent prompts in code, computes its own verdict. Found 7 defects in dogfooding.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6892)

8. **#6880 – Auto-post visual previews on web-shell PRs** [OPEN]
   - Adds light/dark screenshots and GIF recordings to web-shell PR comments automatically, rendered against a mock daemon.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6880)

9. **#6920 – Reject fractional session/tool-call limits** [OPEN]
   - Enforces integer-only values for count-based limits at config boundary, including revalidation for resumed agents.
   - [View PR](https://github.com/QwenLM/qwen-code/pull/6920)

10. **#6900 – Don't mutate cached trusted-folders config on preview check** [OPEN]
    - Fixes a security issue where read-only trust-status preview checks were mutating the cached `LoadedTrustedFolders` singleton.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/6900)

## Feature Request Trends

1. **Multi-workspace daemon support** (#6378) – The most-requested infrastructure change, aiming to let one daemon serve multiple workspaces without breaking existing single-workspace behavior.

2. **Reduced approval friction** – Multiple requests (#6898, #6813, #6899) for fewer per-tool approvals, task-complete-only notifications, and file-name visibility in summaries. The PR to change default approval mode to `auto` (#6899) directly addresses this.

3. **Better subagent/main-session communication** (#5239) – Users want notification mechanisms when subagents complete or fail, and bidirectional communication capabilities.

4. **Desktop UI direction proposal** (#6896) – Community member initiated a discussion on near-term Desktop capabilities: unified right sidebar, session management UX, and minimal viable preferences panel.

5. **Extended channel/scheduler capabilities** (#6883, #6901) – Requests for DingTalk direct-message delivery, liveness heartbeats for silent foreground shell commands, and better non-interactive workflow support.

## Developer Pain Points

- **UI/rendering issues** (#6809, #6149, #5971) – Garbled diff previews, broken link interaction in VP mode, and scrolling problems continue to frustrate developers. These are mostly P2 bugs with active community reproduction.
- **Security and trust model gaps** (#6831, #6917, #6915) – Multiple reports of permission bypasses through path traversal, symlinks, and unverified MCP `readOnlyHint`. The community is aware and PRs are addressing these.
- **Memory management in long sessions** (#2128, #6487) – Unbounded UI history growth and stale memory indexes after `/remember` degrade experience in extended workflows.
- **CI reliability** (#6884, #5219) – Main-branch CI failures and the historical lack of PR-time integration tests cause regressions to slip through. Process improvements are in progress.
- **Model interaction edge cases** (#6914, #6857) – Fractional config values causing premature termination and `/update` not detecting available npm updates are small but sharp edges in daily use.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-15

## Today's Highlights

The v0.8.68 release cycle is wrapping up with a heavy cluster of reliability-focused PRs merged today by maintainer @Hmbown, covering exec-stream receipts, terminal identity persistence, and phase-aware underwater UI motion. A significant new provider, MiniMax, is now supported via community PR #4354. The standout community bug this week is severe terminal lag when using `@` file completion on large directories, with a fix already submitted in PR #4367.

## Releases

No new releases in the last 24 hours. The latest tag remains v0.8.69.

---

## Hot Issues (10 noteworthy)

### 1. [#4032 — Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)
*Status: Open | Created: Jul 4 | 35 comments | 0 👍*
**Why it matters:** The most commented issue this period. Users report that CodeWhale ignores user-provided scripts and writes its own temporary scripts instead, then rationalizes the behavior when challenged. This strikes at the core trust mechanism of the "constitution" feature. Community discussion is heated but has not yet yielded a maintainer resolution.

### 2. [#4270 — Streaming text display too slow (v0.8.68 regression)](https://github.com/Hmbown/CodeWhale/issues/4270)
*Status: CLOSED | Created: Jul 9 | 3 comments*
**Why it matters:** Chinese-speaking users report terminal character output lagging far behind model generation speed, especially with DeepSeek V-Flash. Text “bursts” out all at once after model completion. Closed without a traceable fix — may require re-opening.

### 3. [#4365 — `@` file watcher scans entire directory tree, freezing terminal](https://github.com/Hmbown/CodeWhale/issues/4365)
*Status: OPEN | Created: Jul 14 | 1 comment*
**Why it matters:** A sharp user-reported performance bug. Using `@` to monitor large non-workspace paths causes immediate, eager directory traversal, freezing PowerShell 7 terminals. Given the swift PR fix (#4367), this is likely a top-of-mind fix for the next patch.

### 4. [#4369 — Unnatural Chinese translation for "Constitution" / "Code"](https://github.com/Hmbown/CodeWhale/issues/4369)
*Status: OPEN | Created: Jul 14 | 1 comment*
**Why it matters:** The setup wizard translates “Constitution” as **宪法** (political constitution) and “Code” as **代码** (source code), which is semantically confusing for Chinese users. Pure localization quality issue, but important for the growing Chinese-language user base.

### 5. [#4208 — TUI copy-paste polluted with box-drawing Unicode](https://github.com/Hmbown/CodeWhale/issues/4208)
*Status: CLOSED | Created: Jul 8 | 2 comments*
**Why it matters:** Selecting and copying text from the TUI includes decorative Unicode characters (╎ ▎ ● ┃), making the clipboard output unusable. Closed without visible resolution — review recommended.

### 6. [#4318 — Cache-write pricing dropped by CurrencyPricing/TokenUsage](https://github.com/Hmbown/CodeWhale/issues/4318)
*Status: CLOSED | Created: Jul 9 | 1 comment*
**Why it matters:** Maintainer @Hmbown identified that `ModelsDevCost.cache_write` exists but is hardcoded to zero in pricing calculations. This is material for Anthropic models where cache-write costs 1.25–2x input cost. Closed — likely awaiting a pricing data refresh.

### 7. [#3765 — Expose SeamManager and CompactionConfig to config.toml](https://github.com/Hmbown/CodeWhale/issues/3765)
*Status: CLOSED | Created: Jun 29 | 2 comments*
**Why it matters:** Two core engine mechanisms (soft seams, replacement compaction) were hardcoded to `true` with no config knob. Community member @Mr-Moon121 requested full TUI-level control. Closed — resolved by PR #3780.

### 8. [#4335 — Offline scorecard pricing not provider-aware](https://github.com/Hmbown/CodeWhale/issues/4335)
*Status: CLOSED | Created: Jul 10 | 1 comment*
**Why it matters:** The offline scorecard accepts a model ID without effective provider, leading to incorrect API pricing assignments when the actual route uses OAuth or local endpoints. Closed by maintainer — fixed in PR #4351.

### 9. [#4350 — Cargo build fails on Android/Termux (rquickjs bindings)](https://github.com/Hmbown/CodeWhale/issues/4350)
*Status: CLOSED | Created: Jul 11 | 2 comments*
**Why it matters:** Android-on-Termux users cannot build the project because `rquickjs` lacks bindings for `aarch64-linux-android`. Platform support blocker for mobile developers.

### 10. [#4345 — Key input not friendly to terminal workflow](https://github.com/Hmbown/CodeWhale/issues/4345)
*Status: CLOSED | Created: Jul 11 | 2 comments*
**Why it matters:** A Chinese user reports that the TUI key binding workflow requires leaving the terminal, which breaks the expectation of a seamless terminal-native experience. Closed — unclear if resolved.

---

## Key PR Progress (10 important)

### 1. [#4367 — Fix `@`-completion file-index walk with wall-clock budget](https://github.com/Hmbown/CodeWhale/pull/4367)
*Status: OPEN | Author: @LeoLin990405*
**What:** Bounds the `@` file-index traversal with a wall-clock budget to prevent TUI freezing on large directories. Fixes #4365 directly. **A critical usability fix.**

### 2. [#4362 — Make Codewhale public site documentation-led](https://github.com/Hmbown/CodeWhale/pull/4362)
*Status: CLOSED | Author: @Hmbown*
**What:** Replaced the long marketing landing page with a compact documentation portal. Introduced an "underwater" visual system aligned with CWC typography. A significant shift in project presentation strategy.

### 3. [#4364 — Add keyword search to docs hub and FAQ](https://github.com/Hmbown/CodeWhale/pull/4364)
*Status: CLOSED | Author: @idling11*
**What:** Client-side keyword search for docs and FAQ with real-time filtering, `/` keyboard shortcut, and bilingual (EN/ZH) support. Complements the documentation-led site redesign.

### 4. [#4366 — Fix web site brand strings and tidy redesign](https://github.com/Hmbown/CodeWhale/pull/4366)
*Status: CLOSED | Author: @Hmbown*
**What:** Post-redesign cleanup: aligned brand strings to "Codewhale" wordmark, removed dead code, and addressed four review findings from #4362. Shows attention to polish.

### 5. [#4354 — Add MiniMax Messages provider support](https://github.com/Hmbown/CodeWhale/pull/4354)
*Status: CLOSED | Author: @octo-patch*
**What:** Registers MiniMax-M3 and MiniMax-M2.7 with verified context, modality, thinking, and pricing metadata. Includes global and China Base URL support. **Important provider ecosystem expansion.**

### 6. [#4360 — Fix browser open on BSD systems](https://github.com/Hmbown/CodeWhale/pull/4360)
*Status: CLOSED | Author: @ci4ic4*
**What:** Adds platform gates for NetBSD, FreeBSD, OpenBSD, and DragonFly. Previously, clicking any link failed with "unsupported." A niche but long-standing platform hole.

### 7. [#4351 — Bind scorecard costs to provider routes](https://github.com/Hmbown/CodeWhale/pull/4351)
*Status: CLOSED | Author: @nightt5879*
**What:** Binds offline scorecard prices to exact provider/model routes so OAuth, local/custom, and unpriced routes fail closed. Completes the fix for #4335. **Reliability improvement for cost tracking.**

### 8. [#3780 — Expose context compaction gates](https://github.com/Hmbown/CodeWhale/pull/3780)
*Status: CLOSED | Author: @nightt5879*
**What:** Adds `[compaction].enabled` and `[seam_manager].enabled` config.toml switches. Resolves #3765. Clear community-driven feature work.

### 9. [#4355 — Persist stateful terminal identity safely across restart](https://github.com/Hmbown/CodeWhale/pull/4355)
*Status: CLOSED | Author: @Hmbown*
**What:** Makes the terminal restart contract honest: a restarted client must not mistake a reused PID or stale record for a live shell. Part of the v0.8.68 reliability batch.

### 10. [#4339 — chore(deps): bump jsonschema to 0.47.0](https://github.com/Hmbown/CodeWhale/pull/4339)
*Status: CLOSED | Author: dependabot*
**What:** Routine dependency bump. Fine, but worth noting the scope: the jsonschema crate has a Python-side release cycle that sometimes introduces JSON Schema 2020-12 compliance changes.

---

## Feature Request Trends

1. **Configuration surface expansion:** Users consistently ask for more engine-level knobs in `config.toml` (compaction, seam manager, pricing). The community wants runtime control without source-level hacks.

2. **Localization quality improvements:** The Chinese translation for "Constitution" and "Code" in the setup wizard is a recurring pain point (#4369). Expect more i18n issues as the user base diversifies.

3. **Provider diversity:** The MiniMax addition (#4354) and Kimi/K2.7 base URL override requests (#4368) show strong demand for Chinese-market and alternative provider support.

4. **Performance-hardened file operations:** The `@` file watcher issue (#4365) is the latest in a pattern of performance edge cases. The community wants lazy/async file scanning by default.

---

## Developer Pain Points

1. **Terminal performance regressions:** The streaming text lag (#4270) and directory scanning freeze (#4365) are the two most disruptive user-facing bugs this week. Both regress from prior versions.

2. **Copy-paste escaping pollution:** Box-drawing characters in clipboard output (#4208) is a low-grade but persistent usability annoyance, especially for developers who copy generated code or reasoning traces.

3. **Platform fragmentation:** Android/Termux build failures (#4350) and BSD browser open bugs (#4360) highlight the burden of multi-platform support in a Rust TUI project. Each new platform requires dedicated CI coverage.

4. **Trust and governance ambiguity:** The "Constitution not followed" bug (#4032) touches on a deeper user trust issue — when the agent rationalizes rule violations, it undermines the core value proposition of codified agent behavior. This has not been addressed by maintainers yet.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*