# AI CLI Tools Community Digest 2026-08-19

> Generated: 2026-08-19 01:19 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Comparison Report — 2026-08-19

## 1. Ecosystem Overview

The AI CLI developer tool landscape shows a mature, rapidly evolving ecosystem with each major player making targeted infrastructure investments. Claude Code remains the benchmark for TUI polish and feature depth, while OpenAI Codex accelerates feature velocity with session lifecycle management and security hardening. Gemini CLI demonstrates a responsive maintainance model with 10+ issues closed daily, and GitHub Copilot CLI faces its most significant trust challenge yet with sandbox enforcement regressions that override explicit user configuration — a pattern echoed in permission-deadlock reports across both Claude Code and Copilot. Emerging players like Kimi Code, OpenCode, Pi, Qwen Code, and CodeWhale are all pushing distinct niches — quant workflows, hosted-model serving, session integrity, multi-agent coordination, and localization respectively — creating a diverse, competitive landscape.

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Release Velocity | Most Urgent Theme |
|------|-------------|-----------|----------------|------------------|-------------------|
| **Claude Code** | 10 hot issues | 1 active | ✅ v2.1.235 | ~Weekly stable releases | Cowork VM regressions (Intel Macs), Windows update failures |
| **OpenAI Codex** | 10 hot issues | 10 (mostly bots) | ✅ rust-v0.148.0 | Multiple channels (stable, alpha) | Windows browser plugin RPC trust failures |
| **Gemini CLI** | 10 hot issues | 10 active/closed | ✅ v0.56.0-nightly | Nightly builds, weekly stable | Agent hangs, false-success reporting (MAX_TURNS misreported as GOAL) |
| **GitHub Copilot CLI** | 10 hot issues | 1 (suspected spam) | ✅ v1.0.81-1 | ~Weekly stable | Sandbox enforcement overriding config, blocking git entirely |
| **Kimi Code** | 2 hot issues | 2 | ❌ None | Sporadic | Web UI remount rendering regression for non-Kimi providers |
| **OpenCode** | 10 hot issues | 6 active/closed | ✅ v1.18.18 (yesterday) | Daily-ish, active | Hosted model serving reliability (Go/Zen quota, truncation) |
| **Pi** | 10 hot issues | 7 closed, 3 active | ✅ v0.84.2 | Regular | Provider stream stalls hang loops forever |
| **Qwen Code** | 9 hot issues | 10+ active | ✅ v0.21.14-preview.0 | Rapid previews + benchmarks | Multi-agent coordination gaps, review autofix storms |
| **DeepSeek TUI / CodeWhale** | 10 hot issues | 5 closed, 5 active | ✅ v0.9.9 | Moderate | Crate decomposition (EPIC-005), i18n localization |

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating strong market demand:

| Feature Direction | Tools | Specific Needs |
|-------------------|-------|----------------|
| **Multi-agent / cross-session coordination** | Claude Code (#86279), Qwen Code (#8724, #9276), OpenCode (#3787), DeepSeek TUI (#5508) | Cross-session messaging reliability, agent boards, team orchestration protocols, leader-worker semantics |
| **Session lifecycle management** | OpenAI Codex (fork/archive/restore shipped), Qwen Code (#8400 session deletion), Pi (#8333 single-writer), Gemini CLI (#28892) | Deterministic state reconstruction, no silent data loss, single-writer enforcement, fork/resume/export capabilities |
| **Sandbox/permission enforcement that respects config** | Copilot CLI (#4521, #4522, #4524), Claude Code (#73468 ARG_MAX, #87809 deadlock) | No override of user config, escape hatches for automated pipelines, clear cause-of-restriction messaging |
| **Configurable context/memory** | Claude Code (auto-memory provenance), Gemini CLI (deterministic memory, redaction), Kimi Code (knowledge plane PR), Qwen Code (web-shell consolidation) | Pre-redaction sanitization, source tracking, persistent cross-session knowledge, AST-aware reads to reduce token bloat |
| **Provider resilience** | Pi (#8331, #8323, #8328), OpenCode (#41469, #41582), Gemini CLI (#22323) | Stream inactivity watchdogs, proper timeout discipline, fail-closed on empty responses, graceful degradation on provider errors |
| **Per-agent/mode model control** | Copilot CLI (#2904, #2958), Gemini CLI (model ID preservation #28893) | Declarative agent-config hierarchy (global → mode → agent), reasoning effort per agent, model pinning |
| **TUI/UX ergonomics** | Claude Code (welcome banner #2254), OpenCode (scroll control #7648), Pi (#8281 flicker, #8309 jump), CodeWhale (#5512 status indicator) | No forced scrolling, no flicker on long transcripts, status indicators that actually render, banner suppression |

## 4. Differentiation Analysis

| Tool | Distinctive Focus | Target User | Technical Approach |
|------|-------------------|-------------|--------------------|
| **Claude Code** | Polish, MCP ecosystem, sandboxing | Enterprise developers, monorepo teams | Best-in-class TUI, deep Anthropic model integration, mature plugin system |
| **OpenAI Codex** | Security hardening, desktop integration | VS Code users, security-conscious teams | Rapid iteration on plugin trust boundaries, git transport isolation, session graph (fork/archive) |
| **Gemini CLI** | Native Google Cloud integration, subagents, ACP compliance | GCP developers, automated pipelines | Nightly builds, aggressive SSR-agent issue triage, subagent-specialized architecture |
| **GitHub Copilot CLI** | GitHub enterprise integration, BYOK, sandbox | Enterprise GitHub customers | Tight coupling with GitHub Copilot platform, managed policy server, org-level governance |
| **Kimi Code** | Quant/workstation workflows, KAOS SSH subsystem | Quantitative researchers, Moonshot ecosystem users | Open-source benchmark publishes, "knowledge plane" architecture |
| **OpenCode** | Hosted model serving (Go/Zen), local-first support | Budget-conscious developers, local LLM users | Dual-track (hosted + local), TUI with session sync engine, extensive config surface |
| **Pi** | Session integrity, extension hooks, Windows support | Power terminal users, providers-resilience-focused teams | Single-writer enforcement, watchdog timeouts, settings-driven governance (`disabledCommands`) |
| **Qwen Code** | Multi-agent coordination, review platform, SWE-bench validation | Team-based agent workflows, CI-heavy teams | Live-session registry, agent boards, benchmark-validated releases (500/500 SWE-bench) |
| **DeepSeek TUI / CodeWhale** | Cross-platform TUI, Chinese localization, publish automation | Chinese-speaking developers, open-source integrators | Crate decomposition, dictionary-based i18n, CI hardening, secure publishing |

## 5. Community Momentum & Maturity

**Most active / highest signal:** OpenAI Codex is iterating fastest with multiple release channels and substantial PR activity, though security-bot noise muddies contributions. Claude Code has the deepest community engagement on issues (107-upvote welcome-banner request, 63-comment Windows browser threads) and sustained feature demand across government-level pain points (billing, data loss).

**Most responsive maintainers:** Gemini CLI stands out for closing 10+ issues daily via its SSR Agent pipeline, responding within 24 hours to critical bugs (OAuth callback crashes, loop-detection false positives). DeepSeek TUI also shows strong response time, closing the system-prompt drop bug within 24 hours.

**Most at-risk from community sentiment:** GitHub Copilot CLI faces a critical trust moment — the 1.0.81 sandbox regressions (force-enabled against explicit config, blocking git entirely) directly contradict enterprise expectations of deterministic behavior. Claude Code's unresolved welcome banner (#2254, 107👍, open 1+ year) and Windows MSIX failure (#76357, 4th cycle) are eroding patience despite core polish.

**Emerging contenders:** OpenCode and Pi demonstrate strong technical foundations with active contributor PRs. OpenCode's session sync engine and Pi's single-writer enforcement reflect serious engineering investment. CodeWhale's rapid localization effort signals strategic international expansion.

## 6. Trend Signals

1. **Multi-agent coordination is the next frontier.** Every major tool is investing in cross-session messaging, agent teams, and board-based orchestration (Qwen Code #9402, Claude Code #86279, OpenCode #3787, CodeWhale #5508). The collective demand for reliable multi-agent workflows is the clearest signal for 2026.

2. **Provider resilience is now table stakes.** Stream stalls (Pi #8331), empty-response exits (OpenCode #41469), and false-success reporting (Gemini CLI #22323 MAX_TURNS misreported as GOAL) are costing users time and trust daily. Tools that ship inactivity watchdogs and fail-closed semantics will win reliability reputation.

3. **Sandbox enforcement vs. user autonomy is a flashpoint.** Copilot CLI's force-enable regression and Claude Code's permission deadlocks both reflect a fundamental tension: safety features that override user config create existential workflow disruptions. The market demands declarative, inspectable, and escapable sandboxing.

4. **Session integrity (no silent data loss) is a prerequisite.** Session auto-deletion (Qwen Code #8400), prompts disappearing (Codex #25928), and editor data loss on nonzero exit (Claude Code #83006) are trust-breakers that undermine the value proposition of these tools.

5. **Deterministic memory and context management** — Deterministic memory management is emerging as a critical differentiator. Auto-memory provenance (Claude Code #87783), pre-redaction sanitization (Gemini CLI #26525), and cross-session knowledge planes (Kimi Code #2606) are each addressing the same market need: durable, verifiable, privacy-preserving memory.

6. **Enterprise model catalogue sync remains unsolved.** Copilot CLI's missing Anthropic/Kimi models (#4390) and Qwen Code's provider-side 400 errors (#656) both show that model catalogue syncing and upstream provider changes remain fragile systemic pain points.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-19 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skills have generated the most community discussion via PR activity:

### 1. skill-creator — Evaluation Pipeline Fixes
- **PRs:** [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#539](https://github.com/anthropics/skills/pull/539)
- **Status:** All Open
- **Description:** Multiple community members are actively fixing `run_eval.py`, the evaluation harness for skill descriptions. The core bug ([#556](https://github.com/anthropics/skills/issues/556), 12 comments, 7 👍) is that `claude -p` never triggers skills during evaluation, resulting in `recall=0%` for every description — meaning the optimization loop is "optimizing against noise." Additional fixes address Windows subprocess compatibility ([WinError 10038], PATHEXT resolution for `claude.cmd`) and YAML frontmatter validation.
- **Why it matters:** This is the single most-fixed tool in the repo. The evaluation pipeline is critical infrastructure for skill authors, and its brokenness undermines trust in the entire skill development workflow.

### 2. document-typography — Typographic Quality Control
- **PR:** [#514](https://github.com/anthropics/skills/pull/514)
- **Status:** Open
- **Description:** Prevents common typographic defects in AI-generated documents: orphan word wrap (1–6 words spilling to next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. Users rarely request good typography explicitly — this skill makes it automatic.
- **Community interest:** Addresses a universal pain point in AI document generation; discussion centers on the scope of rules and whether it should extend beyond documents to presentations and web output.

### 3. ODT Skill — OpenDocument Format Support
- **PR:** [#486](https://github.com/anthropics/skills/pull/486)
- **Status:** Open
- **Description:** Full OpenDocument support: create, fill templates, read, and convert `.odt`/`.ods` files. Triggers on any mention of ODT, ODS, ODF, OpenDocument, or LibreOffice. Complements the existing DOCX and PDF skills.
- **Community interest:** Fills an obvious gap in the document-format coverage. The long update window (March → April) suggests iterative refinement with maintainers.

### 4. Self-Audit — Mechanical Verification + Reasoning Quality Gate
- **PR:** [#1367](https://github.com/anthropics/skills/pull/1367)
- **Related Issue:** [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1 👍)
- **Status:** Open
- **Description:** A skill that audits AI output before delivery using a two-phase approach: (1) mechanical verification that every claimed file exists, then (2) a four-dimension reasoning audit in damage-severity priority order. Universal across projects, tech stacks, and models. Author also proposed a broader three-gate pipeline (pre-task calibration → adversarial review → delivery verification).
- **Community interest:** Represents demand for quality-gating infrastructure — moving from "generate output" to "guarantee output correctness."

### 5. testing-patterns — Comprehensive Testing Stack Guide
- **PR:** [#723](https://github.com/anthropics/skills/pull/723)
- **Status:** Open
- **Description:** Covers the full testing stack: Testing Trophy philosophy, unit testing (AAA pattern, naming, edge cases), React component testing (Testing Library), and what NOT to test.
- **Community interest:** Standardizes testing guidance — signals demand for skills that encode engineering best practices, not just file-manipulation workflows.

### 6. ServiceNow Platform Skill
- **PR:** [#568](https://github.com/anthropics/skills/pull/568)
- **Status:** Open
- **Description:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, and Security Incident Response. Not narrowly scripting-focused.
- **Community interest:** Example of enterprise platform coverage — the long review window (March → August) suggests size/complexity review challenges.

### 7. Frontend-Design Skill Revision
- **PR:** [#210](https://github.com/anthropics/skills/pull/210)
- **Status:** Open
- **Description:** Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is executable within a single conversation and guidance is specific enough to steer behavior without being prescriptive.
- **Community interest:** Focuses on skill quality and actionability — a meta-concern about how skills should be written, not just what they do.

---

## 2. Community Demand Trends

From Issue analysis (50 total, top 15 shown), the most anticipated Skill directions:

### A. Security & Trust (highest urgency — 43 comments, 2 👍)
[Issue #492](https://github.com/anthropics/skills/issues/492) — **Trust boundary abuse**: Community skills distributed under the `anthropic/` namespace impersonate official skills, creating a vector where users grant elevated permissions to unofficial code. This is the community's most-discussed concern and directly informs the need for security-audit and provenance-verification skills.

### B. Organization/Team Workflow (16 comments, 8 👍)
[Issue #228](https://github.com/anthropics/skills/issues/228) — **Org-wide skill sharing**: Users want shared skill libraries and direct-sharing links instead of manual `.skill` file downloads via Slack/Teams. Demand signal: skills are moving from individual productivity to team infrastructure.

### C. Evaluation & Quality Infrastructure (12 comments, 7 👍)
[Issue #556](https://github.com/anthropics/skills/issues/556) — **Broken evaluation pipeline** (`run_eval.py` 0% trigger rate). The community wants reliable tooling to measure whether skills actually work before shipping them.

### D. Context-Memory Efficiency (9 comments)
[Issue #1329](https://github.com/anthropics/skills/issues/1329) — **compact-memory skill**: Symbolic notation for compact agent state, reducing context overhead from prose-based memory. Long-running agents waste context on their own notes; this addresses token economics.

### E. Enterprise Document Security (4 comments)
[Issue #1175](https://github.com/anthropics/skills/issues/1175) — **SharePoint Online security & context window**: Concerns about access-control logic inside SKILL.md files and context-window exhaustion when handling enterprise documents.

### F. Context-Window Exhaustion Prevention (4 comments)
[Issue #1487](https://github.com/anthropics/skills/issues/1487) — **claude-api skill injects ~156k tokens** in a single tool call, exhausting the context window. Demand for skills that are token-conscious and lazy-load resources.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and appear close to landing:

| Skill | PR | Description | Signal |
|---|---|---|---|
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Mechanical verification + reasoning quality gate | v1.3.0 iteration; author actively proposing follow-on pipeline ([#1385](https://github.com/anthropics/skills/issues/1385)) |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Full-stack testing guidance | Comprehensive coverage; fills a clear gap |
| **servicenow** | [#568](https://github.com/anthropics/skills/pull/568) | Enterprise platform assistant | Broad scope suggests maintainer review is the bottleneck |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Typographic quality control | Universal need; small, focused scope |
| **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Meta-skills for evaluating other skills (5 dimensions: structure, documentation, examples, resources) | Directly addresses the trust-boundary issue (#492) and quality gap (#202) |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for quality-assurance infrastructure — meta-skills and evaluation tooling that verify whether AI-generated outputs (and the skills themselves) are correct, secure, and token-efficient — rather than for additional domain-specific content skills.**

Supporting evidence: the skill-creator eval fixes (4 PRs), the self-audit skill with its reasoning gate, the security-analyzer proposal, and the three most-commented issues (security trust boundary, org sharing, broken eval pipeline) all point to confidence mechanisms, not new capabilities. The community has enough skills; it now needs ways to trust them.

---

# Claude Code Community Digest
**2026-08-19**

---

## Today's Highlights

Release v2.1.235 introduces an optional spellcheck feature for the prompt input, alongside fixes for prompt-cache invalidation and nested MCP server issues. The community is heavily focused on two fronts: a cluster of **Cowork VM regressions on Intel Macs** following recent updates, and a recurring **Windows MSIX update failure** that leaves the app unlaunchable until reboot. Additionally, a long-standing request to disable the welcome banner (#2254) continues to dominate discussion with 107 upvotes.

---

## Releases

### v2.1.235
- **New**: Optional `spellcheck` setting that underlines misspelled words in the prompt input as you type, using installed `aspell`, `hunspell`, or `ispell`
- **Fix**: Whole-prompt-cache invalidation when a language server disconnected or reconnected mid-session
- **Fix**: Nested MCP server connection handling

---

## Hot Issues

1. **[#2254 — Disable the welcome banner](https://github.com/anthropics/claude-code/issues/2254)**
   - **State**: Open | 36 comments | 👍 107
   - A simple quality-of-life request that has become one of the most-upvoted issues in the tracker. Users want a flag/setting to suppress the welcome screen and tips. Despite being open for over a year, it remains unaddressed — a frustration point given the otherwise strong CLI polish.

2. **[#76357 — Windows (MSIX) update fails with "Another program is currently using this file"](https://github.com/anthropics/claude-code/issues/76357)**
   - **State**: Open | 26 comments
   - A critical, recurring bug: every update can leave the Desktop app unlaunchable until reboot. This is the fourth update-cycle where this has surfaced, and the lack of a permanent fix is eroding trust in the Windows release pipeline.

3. **[#87503 / #87512 / #87642 — Cowork VM regressions on Intel Macs](https://github.com/anthropics/claude-code/issues/87503)**
   - **State**: Open | 11+10+1 comments
   - A cluster of related reports documenting that the Cowork VM fails to boot on Intel (x86_64) Macs after the Aug 18 bundle update. Symptoms range from guest never connecting to NVMe disks not enumerating. High severity: this is a regression in a core feature, and the duplicate reports suggest wide impact.

4. **[#81703 / #83062 — Mass billing incidents: usage credits charged despite plan allowance](https://github.com/anthropics/claude-code/issues/81703)**
   - **State**: Open | 12+1 comments
   - Users report being charged **$604.71** and **$995.67** in automatic recharges after Anthropic's acknowledged July 17 incident and an August 1 recurrence. The issue tracker is the only public venue, and affected users are frustrated about the lack of a dedicated reconciliation process.

5. **[#56060 — "Sort by: Recency" has no effect when "Group by: Project"](https://github.com/anthropics/claude-code/issues/56060)**
   - **State**: Open | 12 comments | 👍 12
   - A Desktop-app UI bug where sorting is silently ignored when grouping is active. Low severity, but the 12 upvotes indicate it's a visible daily annoyance for project-heavy users.

6. **[#73468 — macOS sandbox unusable: Seatbelt profile exceeds ARG_MAX](https://github.com/anthropics/claude-code/issues/73468)**
   - **State**: Open | 9 comments
   - Every sandboxed command fails with `E2BIG` on macOS when many git worktrees exist, because the inline `sandbox-exec -p` profile exceeds ARG_MAX. This effectively disables the sandbox for monorepo users — a silent killer for those relying on default security.

7. **[#86279 — Cross-session `send_message` never delivers, leaves target session hung](https://github.com/anthropics/claude-code/issues/86279)**
   - **State**: Open | 4 comments
   - A core reliability bug in the session-management MCP server: messages report success but no turn is ever created on the target session — leaving it spinning indefinitely. This is a blocker for anyone building multi-session agent workflows.

8. **[#87805 — Jammed background tasks + Remote Control loops silently consume Max usage](https://github.com/anthropics/claude-code/issues/87805)**
   - **State**: Open | 2 comments
   - After forced OAuth token rotation, background tasks and Remote Control sessions enter reconnect loops that silently drain the Max usage window. A costly, invisible failure — users discover it only when the budget is gone.

9. **[#83006 — Data loss when editor exits nonzero after Ctrl+G](https://github.com/anthropics/claude-code/issues/83006)**
   - **State**: Open | 1 comment
   - A TUI data-loss bug: if the editor exits with a nonzero status, input is discarded without warning. For terminal users who rely on Ctrl+G for quick edits, this is a quiet trust-breaker.

10. **[#87809 — Permission classifier blocks the actions that would grant permission](https://github.com/anthropics/claude-code/issues/87809)**
    - **State**: Open | 0 comments
    - In non-interactive sessions, the permission classifier can block the exact command that would grant needed permissions — with no escape hatch. A logical deadlock in automated pipelines.

---

## Key PR Progress

*Note: Only 1 PR was active in the last 24h. The following are the most significant PRs merged in the prior week to give a fuller picture of development direction.*

1. **[#41611 — Add missing source to Claude Code](https://github.com/anthropics/claude-code/pull/41611)**
   - **State**: Open | Created 2026-03-31
   - A long-dormant PR that appears to fix a missing source file in the build. Currently unknown if it addresses the e2e sandbox build or dist packaging — deserves maintainer attention.

2. **[#41227 — Fix: Preserve cache across language server reconnect](https://github.com/anthropics/claude-code/pull/41227)**
   - **State**: Merged
   - Prevents whole-prompt-cache invalidation when an LSP disconnects/reconnects mid-session — directly addressing a reported performance cliff in long-lived sessions.

3. **[#41189 — Configurable prompt input spellcheck (aspell/hunspell/ispell)](https://github.com/anthropics/claude-code/pull/41189)**
   - **State**: Merged (shipped in v2.1.235)
   - Adds the optional `spellcheck` setting, with auto-detection of system spellcheckers. Off by default; expected to be a quality-of-life win for typo-prone users.

4. **[#41003 — Refactor nested MCP server lifecycle and connection state](https://github.com/anthropics/claude-code/pull/41003)**
   - **State**: Merged
   - Addresses nested MCP server connection handling, likely responsible for the fix noted in v2.1.235.

5. **[#40771 — Add `PostWorktreeCreate` hook](https://github.com/anthropics/claude-code/pull/40771)**
   - **State**: Open
   - Directly responds to issue #27744 (29 upvotes). Would let teams run initialization commands whenever Claude Code creates a git worktree — heavily requested for environment setup in multi-agent flows.

6. **[#40558 — Windows: Retry MSIX update after orphaned process cleanup](https://github.com/anthropics/claude-code/pull/40558)**
   - **State**: Open
   - Attempts to mitigate the recurring Windows update failure by detecting and cleaning orphaned elevated child processes before applying the update. Not yet merged.

7. **[#39984 — macOS sandbox: use temp file for Seatbelt profile instead of inline `-p`](https://github.com/anthropics/claude-code/pull/39984)**
   - **State**: Open
   - Would fix the ARG_MAX E2BIG failure (#73468) by passing the Seatbelt profile via a temporary file instead of inline argument. A straightforward fix with large monorepo impact.

8. **[#39852 — Add `--no-banner` CLI flag to suppress welcome screen](https://github.com/anthropics/claude-code/pull/39852)**
   - **State**: Open
   - Community PR targeting #2254. Simple but extremely high demand (107 upvotes). Would instantly settle the most-upvoted open issue.

9. **[#39741 — Fix send_message to create turn and persist transcript on recipient](https://github.com/anthropics/claude-code/pull/39741)**
   - **State**: Open
   - Fixes the cross-session `send_message` reliability bug — ensures recipient sessions actually create turns. Critical for multi-agent orchestration.

10. **[#39517 — Add topic-based rule selection via prompt classifier](https://github.com/anthropics/claude-code/pull/39517)**
    - **State**: Open
    - Implements the requested "prompt-topic triggers" for `.claude/rules/` (see #87804). Would allow rules to load based on the subject of the prompt rather than only file paths.

---

## Feature Request Trends

1. **Welcome banner / tips toggle** (#2254, 👍 107)
   - Persistent demand for a clean-slate TUI. Users want to remove onboarding UI permanently after first run.

2. **Worktree lifecycle hooks** (#27744, 👍 29; PR #40771)
   - Strong desire for `PostWorktreeCreate` (or equivalent) to automate environment setup when Claude Code creates worktrees — essential for teams using agent teams and worktree isolation.

3. **Prompt-topic rules triggers** (#87804)
   - Users want `.claude/rules/` loaded not just by `paths:` but by the subject/topic of the prompt. Effectively, conditional injection based on the semantic content of the request (e.g., "auth" triggers auth-specific rules).

4. **Auto-memory provenance** (#87783)
   - Auto-memory stores claims but not which sources they came from. Users want binding (source-tracking) so drifted notes are distinguishable from never-bound ones. Part of a broader push for more robust memory.

5. **Cowork UX improvements** (#87807)
   - The `AskUserQuestion` widget interrupts users mid-reading. Requests for delayed rendering or confirmation before a multi-choice question pops up.

---

## Developer Pain Points

1. **Windows update fragility** (#76357, #73107)
   - Recurring MSIX update failures leave the app unlaunchable until reboot. Multiple cycles and no permanent fix — the top reliability complaint on Windows.

2. **Intel Mac Cowork regressions** (#87503, #87512, #87642)
   - The Aug 18 bundle update broke Cowork VMs on Intel Macs. Reports blame everything from VPN to NVMe enumeration to vsock — confusion and duplicated reports signal a lack of clear communication from Anthropic on regressions.

3. **Billing reconciliation opacity** (#81703, #83062)
   - Mass incidents where plan-eligible usage is routed to paid credits, resulting in hundreds of dollars in auto-recharges. The only public channel is the issue tracker, and users report no dedicated reconciliation process.

4. **Cross-session messaging unreliability** (#86279, #87694, #87323)
   - `send_message` inconsistently fails: success reported but no turn created, transcript written but not in model context, or recipient frozen. This blocks building reliable multi-agent systems.

5. **Silent background cost drains** (#87805)
   - Jammed tasks and reconnect loops consume Max usage windows silently. Users discover the damage after it's spent — no early warnings or kill-switch.

6. **Permission deadlocks in non-interactive mode** (#87809)
   - The permission classifier can block the actions that would grant permission, with no escape hatch. A frustrating logical dead-end in automated pipelines.

7. **macOS sandbox breaks at scale** (#73468)
   - Simple `ARG_MAX` overflow disables the sandbox entirely for high-worktree projects. A one-line fix (temp file vs inline) has been proposed in a PR for a while with no merge — patience is wearing thin.

---

*Data sources: GitHub issues/PRs for `anthropics/claude-code`, last 24h for issues/PRs; release notes from latest tag.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-19

## Today's Highlights

The Codex team shipped `rust-v0.148.0` with major TUI workflow improvements including `/export` for Markdown conversation exports and session forking/archiving capabilities. However, a cluster of Windows-specific issues — particularly around the built-in browser plugin's "Trusted RPC dependency" failures — has generated significant community noise, with multiple reports and 63+ comments on the top thread. Security-focused PRs from the `codex-security-validator-staging[bot]` dominate today's PR list, indicating an active hardening phase around plugin trust boundaries and git transport isolation.

---

## Releases

### `rust-v0.148.0` (stable)
**New Features:**
- Export complete TUI conversations to Markdown with `/export` — supports clipboard or new file output ([#37358](https://github.com/openai/codex/pull/37358))
- Session forking via `codex exec fork` with archive/restore from the TUI resume picker ([#37367](https://github.com/openai/codex/pull/37367), [#37369](https://github.com/openai/codex/pull/37369), [#37371](https://github.com/openai/codex/pull/37371))
- Draft prompts while the TUI initializes

**Also released:** `rust-v0.149.0-alpha.1`, `rust-v0.148.0-alpha.23`, `rust-v0.148.0-alpha.22`

---

## Hot Issues

1. **[#39136 — Codex built-in browser plugin initialization fails on Windows](https://github.com/openai/codex/issues/39136)** · 63 comments · 21 👍
   Trusted RPC dependency error blocks the in-app browser on Windows. The most active issue today, with multiple duplicates including #39173 and #39318, suggesting a widespread regression in the latest app version (26.814.41407).

2. **[#32041 — VS Code extension opens blank webview on Linux](https://github.com/openai/codex/issues/32041)** · 56 comments · 3 👍
   Extension version 26.5707.* fails on Linux with a blank webview; downgrading to 26.5623 works but lacks GPT-5.6 Sol support. Long-running issue (since July 10) with sustained community attention.

3. **[#25319 — Scope Codex VS Code chats to current workspace/project](https://github.com/openai/codex/issues/25319)** · 33 comments · 65 👍
   Feature request to isolate chat history per-project in the IDE extension. High community demand (65 upvotes) as teams share machines and want workspace-scoped context.

4. **[#2880 — Copy/Export Message as Markdown (CLOSED)](https://github.com/openai/codex/issues/2880)** · 31 comments · 78 👍
   Request dating back to Aug 2025, now resolved via the `/export` command in v0.148.0. The closure demonstrates the team shipping a long-requested feature.

5. **[#30408 — MCP server processes leak in app-server](https://github.com/openai/codex/issues/30408)** · 29 comments · 8 👍
   Global MCP server processes spawned per-thread are never killed when threads close, leading to 9+ GB RSS growth. Related report #38754 adds Windows specifics.

6. **[#25928 — Submitted prompts randomly disappear before entering queue](https://github.com/openai/codex/issues/25928)** · 27 comments · 18 👍
   Windows/Cursor users report prompts vanishing from the queue before processing. High impact for daily workflow reliability.

7. **[#35119 — Windows/WSL marks valid repos as non-Git](https://github.com/openai/codex/issues/35119)** · 23 comments · 17 👍
   Recent app update (26.721.3404) falsely reports "Git is unavailable" for valid WSL repositories. Significant regression for Windows + WSL developers.

8. **[#23200 — Support headless remote Linux hosts for Codex mobile](https://github.com/openai/codex/issues/23200)** · 19 comments · 48 👍
   Mobile users want to control Codex on always-on Linux servers without keeping desktop app online. Second highest-voted feature request in this digest.

9. **[#13270 — `invalid_request_error`: string too long](https://github.com/openai/codex/issues/13270)** · 13 comments
   Tool-call arguments exceeding the 1MB limit (got 1.5MB). Likely caused by large context being passed to tools; may need truncation strategies.

10. **[#39054 — MCP OAuth: rejected refresh token retried forever](https://github.com/openai/codex/issues/39054)** · 5 comments
    Rejected MCP OAuth refresh tokens are never evicted, causing infinite retry loops without surfacing re-authentication. Reproduced across 5 CLI versions.

---

## Key PR Progress

1. **[#39333 — core-plugins: isolate curated plugin ls-remote](https://github.com/openai/codex/pull/39333)** · OPEN
   Pre-trust plugin startup probes can inherit untrusted repo Git config (`url.*.insteadOf`, `core.sshCommand`). Hardens Git isolation before trust is established.

2. **[#39329 — shell-command: require approval for git diff-driver subcommands](https://github.com/openai/codex/pull/39329)** · OPEN
   `git show`, `git diff`, and `git log -p` can execute attacker-controlled diff drivers from `.gitattributes`/`.git/config`. Now requires approval.

3. **[#39328 — core-plugins: block ext transport during startup sync](https://github.com/openai/codex/pull/39328)** · OPEN
   Prevents repo-local config from enabling Git's `ext::` transport (arbitrary helper execution) during pre-trust plugin sync.

4. **[#39330 — rmcp-client: create OAuth fallback credentials privately](https://github.com/openai/codex/pull/39330)** · OPEN
   Fixes a security gap where fallback OAuth token files could be created world-readable before chmod runs (umask exposure).

5. **[#39322 — Enforce workspace restrictions for header authentication](https://github.com/openai/codex/pull/39322)** · CLOSED
   Validates `chatgpt-account-id` headers against configured workspace restrictions, rejecting disallowed credentials.

6. **[#39319 — Add the async user message tool](https://github.com/openai/codex/pull/39319)** · CLOSED
   New `send_user_message_async` tool lets root agents message users without ending the current turn when model supports it.

7. **[#39311 — Bind unified exec approvals to shell executables](https://github.com/openai/codex/pull/39311)** · CLOSED
   Trust inferred from an inner command must not extend to the outer executable that runs it — a security tightening.

8. **[#39314 — Run hooks with the captured session environment](https://github.com/openai/codex/pull/39314)** · CLOSED
   Hooks now use an environment snapshot from registry creation, surviving config reloads; live env is cleared before launch.

9. **[#39316 — Support Edu Plus and Edu Pro account plans](https://github.com/openai/codex/pull/39316)** · CLOSED
   Adds `edu_plus`/`edu_pro` plan recognition across authentication and rate-limit mapping — expanding institutional adoption.

10. **[#39307 — Fail closed on Guardian V2 risk scoring errors](https://github.com/openai/codex/pull/39307)** · CLOSED
    Guardian V2 now treats configuration/classification errors as elevated risk instead of retaining a prior low-risk result — a safety improvement for the approval system.

---

## Feature Request Trends

| Trend | Signal | Representative Issue |
|-------|--------|---------------------|
| **Project/workspace-scoped sessions** | #25319 (65 👍) — chat history isolated per repo | High demand for multi-project workflows without cross-contamination |
| **Headless/remote operation** | #23200 (48 👍) — mobile control of always-on Linux hosts | Developers want Codex on CI-like servers without desktop dependency |
| **Markdown export** | #2880 (78 👍, now CLOSED via `/export`) | Validated demand for documentation-friendly output; expect follow-ups for richer formats |
| **Secrets handling in app environments** | #10528 — carry `.env`/`.npmrc` into worktrees | Setup workflows need secure secret propagation |
| **Session lifecycle control** | Fork/archive/restore shipped in v0.148.0 | Community validated with 78 👍 — team responded quickly |

---

## Developer Pain Points

1. **Windows instability cluster** — The single biggest pain point this week: browser plugin RPC trust failures (#39136), Chrome native messaging host issues (#24040, #23283), WSL Git misdetection (#35119), and integrated terminal failures (#37104). Windows users face a fragmented experience.

2. **MCP process/resource leaks** — #30408 (9+ GB RSS from orphaned processes) and #38754 (repeated spawn without reaping) indicate systemic MCP process management issues on both macOS and Windows.

3. **Prompt/queue reliability** — #25928 (disappearing prompts) and #13270 (arguments too long) undermine trust in the core interaction loop.

4. **Context management limitations** — GPT-5.6 Sol still capped at 272K while Terra/Luna receive 872K (#39144); compaction failures via `/responses/compact` 404 (#38370); prompt cache breakpoint emission missing for custom models (#35300).

5. **Remote/mobile session scaling** — #38787 (quadratic `thread/resume` on large threads) and #23200 (no headless support) show remote workflows hit scalability walls.

6. **Session state confusion** — Subagent cards stuck visible after close (#23930, #35209) and Voice Chat forks losing project context (#39269) point to state-management bugs in session lifecycle.

---

*Digest compiled 2026-08-19 from github.com/openai/codex activity.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-19

## Today's Highlights
A new nightly release (v0.56.0-nightly.20260819) shipped with fixes for subagent enforcement and Vertex AI documentation. The maintainer team closed out 10+ issues via the SSR Agent pipeline, addressing everything from symlinked agent files to OAuth timeout crashes. Notably, the open issue count remains high with 50 items in active triage—the **generalist agent hang** (#21409) and **MAX_TURNS misreported as GOAL success** (#22323) continue to be top community pain points.

## Releases
**[v0.56.0-nightly.20260819.g571851b10](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260819.g571851b10)** — Nightly build with two SSR Agent fixes:
- [#28865](https://github.com/google-gemini/gemini-cli/pull/28865): Add Vertex AI locations documentation link (resolves #28050)
- [SSR Agent] Prevent subagents from running when agents mode is disabled (resolves #22093)

---

## Hot Issues (Top 10)

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments, 2 👍)
   The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even after hitting max turns before doing any work. This is a **correctness-critical bug** that hides interruptions from users—the agent appears to succeed when it actually failed.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 comments, 8 👍)
   Simple tasks like folder creation hang indefinitely when deferring to the generalist agent. Users report waiting up to an hour. Workaround: instructing the model not to defer to subagents. This is the **highest-👍 open bug** right now.

3. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, 8 comments, 1 👍)
   Proposal to leverage Gemini 3's native bash affinity by sandboxing shell execution and routing post-execution intent. Significant architectural enhancement with security implications.

4. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, 7 comments)
   Epic tracking behavioral evals expansion—76 tests currently running across 6 Gemini models. Critical for regressions, particularly around agent behavior.

5. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍)
   Simple CLI commands hang with "Awaiting user input" despite completing. Happens consistently with very elementary commands. Directly impacts daily developer workflow.

6. **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments, 1 👍)
   Epic investigating whether AST-aware tools can reduce token bloat through precise method-bound reads and smarter navigation. Aims to cut context overhead.

7. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments)
   The background extraction agent re-surfaces low-signal sessions repeatedly, causing wasted processing. Current workaround involves manual intervention in the memory index.

8. **[#26525 — Deterministic redaction & reduced Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 4 comments)
   Auto Memory sends transcript content to model context **before** redaction prompts apply, and logs skill contents. **Security & privacy concern** for anyone using Auto Memory.

9. **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments)
   Anecdotal reports that the model ignores custom skills (e.g., `gradle`, `git`) unless explicitly instructed. Underutilization of configured capabilities is a UX and efficiency blocker.

10. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments)
    Gemini CLI crashes with a 400 error when more than 128 tools are available. Users expect smarter scoping of enabled tools.

---

## Key PR Progress (Top 10)

1. **[#28883 — Support symlinked agent markdown files](https://github.com/google-gemini/gemini-cli/pull/28883)** (CLOSED, P2)
   Fixes #20079. Agent discovery now recognizes symlinks in `~/.gemini/agents/`. This was a **quick win** for power users with dotfiles management.

2. **[#28877 — Prevent false-positive loop detection on uniform streaming content](https://github.com/google-gemini/gemini-cli/pull/28877)** (CLOSED, P2)
   Fixes #18551. Loop detection previously flagged padded/uniform responses (e.g., consecutive spaces) as infinite loops. Important for streaming robustness.

3. **[#28873 — Prevent unhandled promise rejection on OAuth callback timeout](https://github.com/google-gemini/gemini-cli/pull/28873)** (CLOSED, P1)
   Fixes #28512. Auth flow no longer crashes when the OAuth callback server times out—a real reliability fix for CI and headless environments.

4. **[#28870 — Emit pending tool-call update before requesting permission](https://github.com/google-gemini/gemini-cli/pull/28870)** (CLOSED, P1)
   Fixes #21783. In ACP mode, the agent now sends a `tool_call` pending update before `session/request_permission`, complying with protocol expectations.

5. **[#28876 — Handle 404 API error in Cloud Shell default project](https://github.com/google-gemini/gemini-cli/pull/28876)** (CLOSED, P2)
   Fixes #18062. Graceful handling when `cloudshell-gca` project is missing. Improves Google Cloud Lab onboarding.

6. **[#28871 — Translate compact matchers to compress & update enum](https://github.com/google-gemini/gemini-cli/pull/28871)** (CLOSED, P3)
   Fixes #14724. Migrated hook configurations from Claude Code's `compact` to Gemini's `compress` terminology. Removes confusion during migration.

7. **[#28892 — Preserve empty text turns with tools or media](https://github.com/google-gemini/gemini-cli/pull/28892)** (OPEN, size/m)
   Fixes `isValidContent` to keep model turns that carry empty text but have tool requests/responses or multimodal content. **Critical for history integrity** during tool-heavy sessions.

8. **[#28898 — Harden subprocess execution security & sanitization](https://github.com/google-gemini/gemini-cli/pull/28898)** (OPEN, size/m)
   Prevents credential leakage into untrusted tool environments. Also sanitizes GitHub API interactions. **Security-hardening PR** for the orchestrator.

9. **[#28893 — Preserve explicit flash model IDs](https://github.com/google-gemini/gemini-cli/pull/28893)** (OPEN, P1)
   Fixes #28859. Stops the Gemini 3.5 Flash rollout rewrite from clobbering explicit IDs like `gemini-3.6-flash` or `gemini-3.7-flash`. Missing explicit model IDs was breaking power users.

10. **[#28895 — Recognize mixed function-call turns](https://github.com/google-gemini/gemini-cli/pull/28895)** (OPEN, P2)
    Fixes #28894. Ensures the CLI correctly handles turns that mix function calls with text. Prevents dropped tool results.

---

## Feature Request Trends

The following directions are clearly emerging from community issues:

1. **AST-Aware Code Intelligence** — Two linked epics (#22745, #22746) push for AST-aware file reads, search, and codebase mapping. Goal: reduce token bloat and improve navigation precision (e.g., reading exact method bounds in one call).

2. **Zero-Dependency OS Sandboxing** — #19873 proposes sandboxing bash execution while routing post-execution intent. The community wants **safe* native bash affinity with security boundaries, rather than restricting the model.

3. **Subagent Visibility & Self-Awareness** — Multiple requests: subagent trajectories visible via `/chat share` (#22598), `/bug` reports including subagent context (#21763), and the CLI understanding its own flags/hotkeys (#21432).

4. **Destructive-Behavior Guardrails** — #22672 requests the agent to prefer safe alternatives (e.g., avoiding `git reset --force` when safer options exist) for resource and git operations.

5. **Deterministic Memory & Privacy** — The Auto Memory issues (#26516, #26522, #26523, #26525) together push for pre-redaction sanitization, quarantining invalid patches, and limiting indefinite retries.

---

## Developer Pain Points

| Pain Point | References | Community Sentiment |
|---|---|---|
| **Agent hangs/false success** | #22323, #21409, #25166 | High frustration: workarounds require disabling subagents (`!!` with 8 👍) |
| **Subagent underutilization** | #21968, #21432 | Anecdotal but persistent: model ignores configured skills unless forced |
| **Tool count limits** | #24246 | Hard blocker for users with many MCP servers enabled |
| **Shell hang after completion** | #25166 | Repeated "Waiting input" despite finished commands breaks normal flow |
| **Privacy & redaction** | #26525, #26522 | Background memory extraction sends content pre-redaction—alarming for security-minded users |
| **Context/token bloat** | #19561, #22745 | Large file reads cause +15k tokens/turn; community wants surgical extraction |
| **Browser agent fragility** | #22232, #22267, #21983 | Browser subagent fails on Wayland, ignores `maxTurns` overrides, locks profiles |

---

*Data pulled from github.com/google-gemini/gemini-cli on 2026-08-19. Nightly releases ship daily; issue triage is active with ~50 items in rotation.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-19

## Today's Highlights

Version 1.0.81-1 shipped with Gemini 3.7 Flash support, per-agent usage metrics, and better sandbox workflow, but the release has sparked a cluster of critical sandbox enforcement regressions (issues #4522, #4521, #4524) that are generating significant community pushback. The most active thread this week remains the missing Anthropic and Kimi K3 enterprise models (#4390), suggesting that enterprise model catalogue syncing continues to be a systemic pain point. Sanity-checking your pinned version before upgrading is strongly advised if you use sandbox or enterprise MCP features.

---

## Releases

### v1.0.81-1 (released 2026-08-18)
**Added:**
- Support for Gemini 3.7 Flash
- Ctrl+E in `/sandbox` to open `settings.json` in your editor
- Per-agent usage metrics included in `--usage-output-file` JSON output

**Improved:**
- Scheduled `/every` and `/after` prompts can now be removed with `x` in the Schedule Manager

**Fixed:**
- Toggling `allow-all` off no longer leaves stale permissions

**⚠️ Note:** No fix is yet mentioned for the sandbox enforcement regressions reported against this release; track issues #4522, #4521, and #4524 below.

---

## Hot Issues (Top 10)

### 1. Enabled organization models missing from catalogue — [#4390](https://github.com/github/copilot-cli/issues/4390)
**Status:** OPEN | 10 comments | 👍 7
Anthropic (Sonnet 5/Opus 5) and Kimi K3 models explicitly enabled by an org are missing from the effective model catalogue; selecting them errors with "This model is disabled by your...". This affects enterprise Copilot Business accounts broadly and has been unaddressed for two weeks.

### 2. Built-in agents don't inherit custom instructions — [#1990](https://github.com/github/copilot-cli/issues/1990)
**Status:** OPEN | 1 comment | 👍 3
`explore`, `task`, and `code-review` ignore user-level custom instructions (e.g., "always use `uv run python`"). Agents silently invoke system Python, producing wrong results. This is an old, still-unresolved gap that undermines CLI reliability for power users.

### 3. User-defined reasoning effort per agent — [#2904](https://github.com/github/copilot-cli/issues/2904)
**Status:** OPEN | 7 comments | 👍 20
Custom agents (`.agent.md`) cannot set reasoning effort; it's only configurable globally via `--effort`. High signal for a per-agent model-control hierarchy, a recurring theme across multiple issues.

### 4. Per-mode default model config (plan vs. autopilot) — [#2958](https://github.com/github/copilot-cli/issues/2958)
**Status:** OPEN | 4 comments | 👍 16
Users want separate default models for plan mode and autopilot mode via config. Currently only a single global model is supported; this is the most-upvoted open feature request after #2904.

### 5. BYOK provider credential refresh without restart — [#3682](https://github.com/github/copilot-cli/issues/3682)
**Status:** OPEN | 2 comments | 👍 6
Short-lived OAuth/JWT credentials (Entra ID, AWS STS) for BYOK providers are read once at startup, forcing a restart on expiry. Enterprise users find this limiting and want hot-reload support.

### 6. MCP server connect leak (stdio child processes) — [#3698](https://github.com/github/copilot-cli/issues/3698)
**Status:** OPEN | 0 comments | 👍 3
Slow or unreachable stdio MCP servers spawn un-reaped child processes on each reconnect, accumulating unbounded CPU and degrading the machine. Server resource management needs to be fixed at the client level.

### 7. Sandbox cannot be disabled despite config — [#4521](https://github.com/github/copilot-cli/issues/4521)
**Status:** OPEN (triage) | 2 comments | 👍 3
Config shows sandbox disabled, but the CLI still enforces it and attempts to use it. New in 1.0.81; the enforcement logic appears to override explicit user config.

### 8. Copilot CLI 1.0.81 forces sandbox while managed policy is undetermined — [#4522](https://github.com/github/copilot-cli/issues/4522)
**Status:** OPEN (triage) | 2 comments | 👍 5
Sandbox is force-enabled when server-managed policy is temporarily undetermined, even with explicit `"sandbox": { "enabled": false }`, no MDM settings, and no managed settings files. This is a critical regression for controlled enterprise environments; update blocked.

### 9. Sandbox blocks git usage entirely — [#4524](https://github.com/github/copilot-cli/issues/4524)
**Status:** OPEN (triage) | 2 comments | 👍 0
The enforced-sandbox build is "super broken and overly restrictive": even with entire working directories and `~/.copilot` allowed, git operations are blocked. Agents can no longer share information across sessions, breaking core workflows.

### 10. 400 "Missing namespace for function_call" for deferred tool-search tools — [#4519](https://github.com/github/copilot-cli/issues/4519)
**Status:** OPEN (triage) | 1 comment | 👍 0
On 1.0.80, tools discovered via deferred tool search intermittently fail with `CAPIError: 400`. The fix requires round-tripping the function call; this is a high-severity correctness issue for long-running sessions and custom tool use.

---

## Key PR Progress

Data source: only 1 PR updated in the last 24h.

### [#3163 — "ViewSonic monitor"](https://github.com/github/copilot-cli/pull/3163)
**Status:** OPEN | Author: tijuks
This PR appears to be a test or accidental push (references monitor setup for issues #2591, #3561, #3559 and "initiate GitHub action //runners"), not a code change. It is likely **not actionable** and may be a spam/automation mishap; worth skipping in review queues.

---

## Feature Request Trends

Across all open issues, the community is pushing in four directions:

1. **Finer-grained model control** — Per-agent reasoning effort (#2904), per-mode default models (#2958), and per-agent model pinning keep recurring. Users want a declarative agent-config hierarchy (global → mode → agent).
2. **Configuration hot-reload** — BYOK credential refresh (#3682) and `AGENTS.md` reload after start (#812) signal a desire for a more dynamic runtime, avoiding restarts when policies or credentials change.
3. **Sandbox usability improvements** — The 1.0.81 sandbox regressions (#4521, #4522, #4524) drive requests for a "dry-run / inspect mode" and clear cause-of-restriction messaging, rather than blanket enforcement.
4. **Plugin/MCP ecosystem maturity** — Marketplace browsing lacks search/filter (#4523), and plugin cache ignores `ref` per project (#4513). As plugin usage scales, discoverability and isolation are becoming must-haves.

---

## Developer Pain Points

The clearest signals from this digest:

- **Sandbox enforcement is bypassing explicit user configuration** — In 1.0.81, sandbox can be force-enabled by an undetermined managed policy (#4522), can't be disabled at all (#4521), and actively breaks git and inter-agent persistence (#4524). This is the #1 pain point right now; enterprise users are effectively blocked from upgrading.
- **Model catalogue sync is unreliable for organizations** — Models explicitly enabled by admins disappear from the CLI catalogue (#4390). Enterprise trust is at stake.
- **MCP server lifecycle management is fragile** — Orphaned stdio processes accumulate (#3698, #4392), and OAuth-based MCP servers lose tool access in CLI sessions (#4096, #4490). These are recurring, unresolved problems across multiple releases.
- **Custom instructions and agent configuration gaps persist** — Built-in agents ignore user instructions (#1990), and there's no way to set reasoning effort or defaults per agent/mode (#2904, #2958). Long-standing requests still unaddressed reduce power-user confidence.

---

*Compiled 2026-08-19 from live GitHub data for github/copilot-cli. Digest includes data from the most recent 24h window.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-19

## Today's Highlights
The community is actively stress-testing Kimi Code CLI in production-grade quantitative research workflows, with one user publishing a full open-source benchmark report (Issue #2608). A notable rendering bug affecting non-Kimi provider sessions in the Web UI (Issue #2607) surfaced yesterday and is drawing attention. Meanwhile, a long-dormant PR (#848) addressing SSH failure logging in the KAOS subsystem was finally closed after months, and a new architectural proposal for a "knowledge plane" (#2606) was opened, signaling continued interest in expanding the CLI's memory and context capabilities.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#2607 — Web UI: assistant messages re-render as one-fragment-per-line after tab switch/reload for non-Kimi providers](https://github.com/MoonshotAI/kimi-cli/issues/2607)**  
   **Why it matters:** A visual regression in the Web UI that affects any session using a custom OpenAI-compatible provider. Streaming renders correctly, but any remount (tab switch, reload, session reopen) collapses message fragments into a narrow vertical strip, making output unreadable. This likely stems from a missing re-merge of streamed chunks during hydration.  
   **Reaction:** One comment so far; single 👍. Expect this to gain traction given the growing number of users pointing the CLI at non-Kimi endpoints.

2. **[#2608 — Benchmarked K3 + Kimi Code on out-of-sample quant strategy generation — full report open-sourced](https://github.com/MoonshotAI/kimi-cli/issues/2608)**  
   **Why it matters:** Not a bug report but a community-published benchmark study. The author (frank-quant) drove Kimi Code CLI to build an ETH perpetual futures strategy on Freqtrade, imposed strict constraints, and open-sourced the full results. This is the kind of real-world evidence that influences tool adoption in the quant/dev community.  
   **Reaction:** No comments yet, but the content is actionable for anyone evaluating the CLI for code-gen-heavy workflows.

## Key PR Progress

1. **[#2606 — Dev/knowledge plane (OPEN)](https://github.com/MoonshotAI/kimi-cli/pull/2606)**  
   A new architectural PR proposing a "knowledge plane" — likely a persistent, queryable layer for context/memory across sessions. Given the velocity of feature requests around persistent memory and project-level context, this is a PR to watch closely.

2. **[#848 — fix(kaos): log ssh failures when enabled (CLOSED)](https://github.com/MoonshotAI/kimi-cli/pull/848)**  
   After more than six months, this fix by powerfooI was finally closed. It addresses a silent failure mode where SSH errors in the KAOS subsystem were not logged even when logging was enabled. Closing suggests either a merge or a coordinated supersede — either way, the issue is resolved.

## Feature Request Trends
- **Persistent project memory / context** — Users consistently ask for the CLI to retain state and knowledge across sessions, beyond the current context window. PR #2606 may be a direct response to this cluster of requests.
- **Better non-Kimi provider compatibility** — With #2607 surfacing a Web UI regression specifically for OpenAI-compatible providers, it's clear a meaningful segment of users is pointing the CLI at alternative backends. Expect demands for parity across providers in both rendering and streaming behavior.
- **Deployment/ops transparency** — The long tail of the KAOS PR (#848) shows users expect explicit visibility into subsystem failures (e.g., SSH) rather than silent degradation.

## Developer Pain Points
- **Web UI remount regressions:** The one-fragment-per-line rendering bug (#2607) is a textbook example of a streaming-hydration mismatch. It's painful because it appears only after a remount — the kind of edge case that gets shipped and then bites users mid-workflow.
- **Silent subsystem failures:** The six-month lifespan of PR #848 highlights a broader concern: when SSH or other infra-level errors fail without logs, debugging becomes guesswork. The community is sensitive to this class of problem.
- **Context loss across sessions:** The recurring "knowledge plane" proposals suggest that context window limits are still a primary frustration for power users building long-running projects without a persistence layer.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-19

## Today's Highlights

No new releases landed in the last 24 hours, but the community is actively surfacing two critical themes: **reliability of hosted model serving** (OpenCode Go/Zen) and **session/streaming integrity** (silent stops, truncated responses, event-loop hangs). The most upvoted issue remains the **Linear Agent integration** request (34👍), reflecting strong demand for connecting coding agents directly to issue-tracker workflows. On the PR side, a **session sync engine** for the TUI and a **Linux clipboard selection** feature are the most substantive in-flight contributions.

---

## Releases

No new releases in the last 24 hours. The latest tagged version referenced across issues is **v1.18.18** (from 2026-08-18).

---

## Hot Issues

1. **#3787 — [FEATURE] Linear Agent** (34👍, 17 comments, closed)  
   Request to integrate [Linear Agents](https://linear.app/agents) so issues can be directly assigned to an OpenCode agent. High enthusiasm signals a broader desire for issue-tracker-driven autonomous workflows.  
   [GitHub](https://github.com/anomalyco/opencode/issues/3787)

2. **#32149 — Opencode Stops Processing Requests Without Response** (15 comments, open)  
   A long-standing, high-traffic bug where the app enters a "thinking" state then silently halts. Community engagement is high, but the issue remains unresolved after 2+ months.  
   [GitHub](https://github.com/anomalyco/opencode/issues/32149)

3. **#7648 — Setting to prevent TUI scrolling when new messages stream in** (18👍, 11 comments, closed)  
   A UX pain point: the TUI forcibly scrolls down as the agent streams output, making it hard to read earlier content. Closed, but community consensus suggests this should be a config option.  
   [GitHub](https://github.com/anomalyco/opencode/issues/7648)

4. **#26338 — [FEATURE] Add CommandCode as a Provider** (36👍, 9 comments, closed)  
   Strong request (36 upvotes — highest on this list) to add support for commandcode.ai as an auth/provider option. Users want broader provider choice beyond the default set.  
   [GitHub](https://github.com/anomalyco/opencode/issues/26338)

5. **#33495 — Zen balance does not remove free usage cap** (7 comments, open)  
   Paid Zen users with a $20+ balance are still hitting the 200-request/free-tier cap and receiving 429s. This undermines trust in the paid tier and directly affects user workflow.  
   [GitHub](https://github.com/anomalyco/opencode/issues/33495)

6. **#41469 — Session silently stops on empty LLM response** (5 comments, open)  
   When a provider returns an empty completion (0 tokens, `finish: unknown`), the session loop exits silently. A clear bug that wastes user time and breaks agent loops.  
   [GitHub](https://github.com/anomalyco/opencode/issues/41469)

7. **#42729 — [FEATURE] Add Qwen3.8-27B to Go catalog** (4👍, 6 comments, open)  
   Request for the new Qwen open-weight model in the OpenCode Go subscription. Mirrors broader demand for open-weight model coverage.  
   [GitHub](https://github.com/anomalyco/opencode/issues/42729)

8. **#42935 — Go quota exhausted in ~20 min after DeepSeek V4 Flash cache reads dropped to 0** (3👍, 4 comments, open)  
   A severe billing/caching anomaly: usage jumped from ~11% to 100% in under 20 minutes. Users are reporting this as a trust-breaking issue with the Go metering system.  
   [GitHub](https://github.com/anomalyco/opencode/issues/42935)

9. **#41582 — Truncated model response for OpenCode Go models** (2👍, 4 comments, open)  
   Multiple Go models (DeepSeek-V4-Pro, Kimi-K3, MiMo-V2-Pro) interrupt responses mid-stream. Reported as a server-side issue affecting both CLI and API consumers.  
   [GitHub](https://github.com/anomalyco/opencode/issues/41582)

10. **#37489 — Context cache invalidation when switching modes or during compaction** (1👍, 6 comments, open)  
    Local LLM users (vLLM/Ollama) report significant performance degradation when context cache is invalidated during mode switches or compaction. Important for the local-first crowd.  
    [GitHub](https://github.com/anomalyco/opencode/issues/37489)

---

## Key PR Progress

1. **#43302 — [contributor] feat(client): session sync engine** (open)  
   Replaces the TUI's per-session sync with a deterministic engine: `view = render(fold(snapshot ⊕ durable log) ⊕ outbox ⊕ overlay)`. Aims for atomic snapshot hydration, single-server merged stream, and deterministic state reconstruction.  
   [GitHub](https://github.com/anomalyco/opencode/pull/43302)

2. **#32370 — feat(tui): add linux_clipboard_selection config for primary buffer support** (open)  
   Adds Linux clipboard selection support via a new config option (`clipboard` vs `primary`), closing a long-standing TUI UX gap for Linux users.  
   [GitHub](https://github.com/anomalyco/opencode/pull/32370)

3. **#43200 — refactor(ui): promote current design system** (open)  
   Promotes the current UI primitives to canonical flat `@opencode-ai/ui/*` exports, removes `/v2` legacy exports, and reorganizes components into actions, forms, overlays, navigation, feedback, data display.  
   [GitHub](https://github.com/anomalyco/opencode/pull/43200)

4. **#42978 — fix(app): show current worktree branch** (open)  
   Fixes a bug where manually created Git worktrees resolved the wrong branch in new sessions. Closes #42976.  
   [GitHub](https://github.com/anomalyco/opencode/pull/42978)

5. **#43314 — fix(session): degrade undecodable image attachments instead of failing the prompt** (open)  
   Prevents the whole prompt from failing when an image format (AVIF, HEIC, BMP, TIFF) can't be decoded by the Photon resizer. Instead, degrades gracefully.  
   [GitHub](https://github.com/anomalyco/opencode/pull/43314)

6. **#29831 — fix(core): resolve spawn completion on exit, not only close** (open)  
   Fixes Windows detached-child hangs where shell commands finish but the agent waits forever because a child process keeps stdout open.  
   [GitHub](https://github.com/anomalyco/opencode/pull/29831)

7. **#43282 — [needs:issue] fix(core): expose valid subagent IDs in the subagent tool** (open)  
   Improves the `subagent` tool schema to list valid agent IDs, reducing model guesswork and malformed calls. Closes #36761.  
   [GitHub](https://github.com/anomalyco/opencode/pull/43282)

8. **#43310 — [contributor] fix(opencode): remove Qwen sampling defaults** (closed)  
   Stops forcing `temperature: 0.55` and `top_p: 1` for Qwen models, letting provider/server defaults apply. Adds regression coverage. Directly addresses #42775.  
   [GitHub](https://github.com/anomalyco/opencode/pull/43310)

9. **#43309 — feat(opencode): make generated title length configurable** (open)  
   Adds an optional `title_max_words` config to cap auto-generated session titles. Closes #43118.  
   [GitHub](https://github.com/anomalyco/opencode/pull/43309)

10. **#43308 — [contributor] fix(app): limit prompt drag state to files** (open)  
    Restricts prompt drag-and-drop attachment handling to actual file drags (using a custom MIME type), ignoring text/link drags. Replaces drop border with a non-layout-affecting outline.  
    [GitHub](https://github.com/anomalyco/opencode/pull/43308)

---

## Feature Request Trends

1. **Issue-tracker integration (Linear)** — The most upvoted issue (#3787) asks for deep Linear Agent integration. Users want to assign issues directly to agents for autonomous resolution.
2. **Provider breadth** — Repeated requests for new providers (CommandCode #26338) and open-weight models (Qwen3.8-27B #42729) show users want more choice beyond default OpenAI/Anthropic offerings.
3. **TUI/UX ergonomics** — Requests for scroll control (#7648), `/resume` + `/pause` commands (#7226), and Linux clipboard selection (#32370) point to a maturing user base that wants finer-grained control over the terminal experience.
4. **i18n / localization** — A new inquiry (#43307) asks whether OpenCode has joined an i18n project and how to contribute. Early-stage but signals global adoption.
5. **Resource efficiency** — Issues around event-table bloat (#41175), quadratic diff serialization (#42748), and context-cache invalidation (#37489) show users pushing for performance and disk-footprint improvements.

---

## Developer Pain Points

1. **Silent session termination** — The most nagging issue: sessions stop without errors, empty responses exit silently (#41469, #32149, #41528), and DeepSeek-V4-Flash on Go often emits text but never tool calls (#40176). Users lose trust and time.
2. **Billing/quota mistrust on OpenCode Go/Zen** — Confusion and anger around free-tier caps applying to paid Zen balances (#33495, #43208) and the rapid exhaustion of Go quota after cache reads dropped (#42935). This is a customer-confidence issue.
3. **Stream truncation on hosted models** — Multiple models served via Console Go interrupt mid-stream (#41582), with no clear server-side signal. API consumers especially feel this as a reliability hole.
4. **Event/state bloat** — `opencode.db` growing to gigabytes due to full message snapshots on every streaming update (#41175), plus quadratic diff serialization (#42748), are becoming real operational problems for heavy users.
5. **Tool-call reliability** — Models either don't emit tool calls after text output (DeepSeek-V4-Flash), or send malformed tool inputs (mitigated by PR #37669). This directly breaks agentic loops.
6. **Local-first performance** — Local LLM users (vLLM/Ollama) face context-cache invalidation penalties when switching modes or compacting (#37489), making local inference feel sluggish for interactive work.

---

*Digest generated 2026-08-19 from public GitHub data for anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-19

## Today's Highlights
The Pi community is converging around three major themes: **session integrity and concurrency safety**, **provider resilience across stream stalls and rate limits**, and **extensibility hooks for recovery and customization**. A dozen closed issues with 2+ comments signal an active maintainer response, while several high-value PRs — including one that enforces single-writer session ownership and another that adds a stream inactivity watchdog — are advancing through review. The community is also pushing hard on lowering Windows-specific friction (file scanning, npm install performance, BOM handling) and surfacing edge cases in provider fallback pricing and reasoning content preservation.

## Releases
No new releases in the last 24 hours. Latest known version is v0.84.2.

## Hot Issues

1. **[#8281 — TUI flicker on long transcripts](https://github.com/earendil-works/pi/issues/8281)**
   Full-screen flash on every content change above the viewport in 10k+ line transcripts. Community impact: severe for long agentic sessions. Closed as `no-action` (likely superseded by PR #8327's yielding renderer).

2. **[#8251 — GitHub Enterprise Copilot login rate-limiting](https://github.com/earendil-works/pi/issues/8251)**
   Concurrent policy requests via `Promise.all` trigger HTTP 429, invalidating successful device flow. Fixed by PR #8254 which serializes catalog/pre-policy fetches. Community reaction: 4 comments, key enterprise pain point.

3. **[#6339 — Auto-compaction never evaluated mid-run](https://github.com/earendil-works/pi/issues/6339)**
   `compaction.reserveTokens` only checked at run boundaries, never during a single agentic loop. Critical for long autonomous runs; closed with no action — may be addressed by cache-friendly compaction PR #8307.

4. **[#8331 — Provider stream stall hangs agent loop forever](https://github.com/earendil-works/pi/issues/8331)**
   SSE stream stops delivering events but never closes; `for await` awaits forever. Four sessions froze during Anthropic 529 incident. Fixed by PR #8330 with an inactivity watchdog.

5. **[#8309 — Interface jumps to top in long conversations](https://github.com/earendil-works/pi/issues/8309)**
   On every new command, the TUI jumps to top then back. Reported on both macOS and Windows. Related to #8281; likely fixed by markdown render yielding (#8327).

6. **[#8323 — OpenAI client created with no timeout](https://github.com/earendil-works/pi/issues/8323)**
   `createClient` omits `timeout`, so SDK's 600s default kills local models thinking >10 minutes. Confirmed in both `openai-completions.ts` and `openai-responses.ts`.

7. **[#8282 — `find` hangs on large Windows directories](https://github.com/earendil-works/pi/issues/8282)**
   `find` scans of `C:\Windows` hang indefinitely with high CPU. Community suggests switching to `fd`. Windows-specific but high-impact for agentic file exploration.

8. **[#8328 — Compaction never fires for zero-usage providers](https://github.com/earendil-works/pi/issues/8328)**
   Providers omitting final `usage` block cause `lastUsageIndex === null`, and threshold (estimate-based) compaction is skipped on a pure-estimate bail-out.

9. **[#8286 — OpenAI-completions fails over real network but not loopback](https://github.com/earendil-works/pi/issues/8286)**
   Non-deterministic failure with remote Ollama via `--print`: empty output or hallucinated responses. Loopback always works, suggesting a networking/path dependency. Community-reported with concrete repro.

10. **[#8299 — Windows npm path 5x slower than release binary](https://github.com/earendil-works/pi/issues/8299)**
    Unbundled tsc output (13k+ files) hits Defender scan on every open → 3.2s wall for `--version` vs 0.2s CPU. Strong argument for the release binary on Windows.

## Key PR Progress

1. **[#8333 — Enforce single session writer and audit provider lineage](https://github.com/earendil-works/pi/pull/8333)** *(closed)*
   Fixes #8334/#8300: one live writer per persisted session, verifies durable physical tail before provider turns, fails closed on competing writers, adds opt-in lineage auditing.

2. **[#8330 — Stream inactivity watchdog](https://github.com/earendil-works/pi/pull/8330)** *(closed)*
   A stalled provider SSE stream no longer hangs the loop forever. Adds a timeout layer where none existed. Directly fixes #8331.

3. **[#8327 — Yield long markdown rendering in TUI](https://github.com/earendil-works/pi/pull/8327)** *(closed)*
   Adds a `RenderContext` with monotonic deadline and callback so large Markdown no longer monopolizes the interactive event loop. Fixes the "terminal stops responding" class of bugs.

4. **[#8316 — `agent_recovery_exhausted` extension hook](https://github.com/earendil-works/pi/pull/8316)** *(closed)*
   Public hook fires after native retry and overflow compact-and-retry are exhausted. Handler can `{ retry: true }` to switch model and continue. Closes #8317.

5. **[#8307 — Cache-friendly compaction](https://github.com/earendil-works/pi/pull/8307)** *(open)*
   Enables compaction as an appending part of the main session, reusing warm cache instead of standalone requests. Auto-compaction only (opt-in, experimental).

6. **[#8303 — Collapse tool result images until expanded](https://github.com/earendil-works/pi/pull/8303)** *(closed)*
   Fixes #8304: collapsed output no longer mounts Kitty/iTerm Image children, which left full images visible and reserved blank-row height on non-graphic hosts.

7. **[#8254 — Prevent Copilot policy login rate limits](https://github.com/earendil-works/pi/pull/8254)** *(open)*
   Fixes #7850: fetch account model catalog before policy updates, update only known/tool-capable/unconfigured models, retry throttled login with bounded delay.

8. **[#8319 — Anthropic fallback usage pricing](https://github.com/earendil-works/pi/pull/8319)** *(open)*
   Replaces the reverted #8308 with a correct fix: thread the usage cost (returned model for pricing) instead of incorrectly using the requested model catalog. Fixes #8285.

9. **[#8314 — Round-trip Bedrock redacted reasoning](https://github.com/earendil-works/pi/pull/8314)** *(closed)*
   Handles `reasoningContent.redactedContent` from Bedrock Converse (OpenAI models' encrypted reasoning). Closes #8315.

10. **[#8326 — `disabledCommands` setting](https://github.com/earendil-works/pi/pull/8326)** *(closed)*
    Lets users/organizations block built-in slash commands like `/share` (which uploads transcripts to Gists). Error on invoke, hidden from autocomplete. Closes #8325.

## Feature Request Trends

- **Session ownership & integrity**: Multiple issues (#8300, #8334) demand one live writer per session, provider-lineage diagnostics, and fail-closed behavior for divergent branches.
- **Extension hooks for recovery and customization**: Requests for `agent_recovery_exhausted`, pre-persistence message replacement (#8292), and post-skill-load namespacing (#8329) show a community building on Pi's extension system.
- **Windows-first ergonomics**: `find` → `fd` switch (#8282), release-binary docs (#8299), and BOM-tolerant `readPiManifest` (#8310) reflect real Windows usage friction.
- **Compaction as a first-class citizen**: Mid-run evaluation (#6339), cache-friendly compaction (#8307), and `interleave` support in prompt queues (#8301) all target making compaction smarter and session-aware.
- **Settings-driven control**: `disabledCommands` (#8325) points toward broader org-level governance of Pi behavior.

## Developer Pain Points

- **Provider stream reliability**: Stalled SSE streams hanging loops (#8331), missing timeouts in client construction (#8323), and `streamSimple` dropping `timeoutMs` (#8321) all point to a systemic timeout discipline gap in provider I/O.
- **Rate limiting and throttling**: Both Copilot enterprise login (429s on policy fetch, #8251) and Anthropic fallback pricing (#8285) show how provider-edge cases break authentication or cost accounting.
- **Long-context UI instability**: Three separate TUI issues (#8281, #8309, #8306) describe flicker, jumps, and image-rendering bugs once transcripts grow past ~10k lines — a sign of real PAIN in iterative, long-lived sessions.
- **Windows-specific failures**: `find` hanging on huge dirs (#8282), slow npm cold start (#8299), and UTF-8 BOM silently disabling extensions (#8310) are each small but collectively undermining Windows adoption.
- **Compaction gaps**: Zero-usage providers never trigger threshold compaction (#8328), and reserve-token limits are ignored mid-run (#6339) — both cause preventable token blowups in the field.
- **Session file races**: Two processes appending the same JSONL (#8300) generating divergent branches is a correctness-level concern; the single-writer enforcement PR (#8333) is the community's proposed fix.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-19

## Today's Highlights

Today's release focuses on session management infrastructure with a new live-session registry and `qwen sessions ps` command, alongside successful full-scale SWE-bench Verified (500/500) and Terminal-Bench 2.0 validations. Multi-agent coordination dominates the community discussion, with new RFCs and PRs around cross-session messaging, agent boards, and team task distribution. The CLI team continues its heavy investment in the `/review` workflow, addressing autofix efficiency, verifier isolation, and resume semantics across multiple PRs.

---

## Releases

### v0.21.14-preview.0
Two notable features landed in this preview:
- **Live-session registry + `qwen sessions ps`** ([#8969](https://github.com/QwenLM/qwen-code/pull/8969)): Adds a core live-session registry with a new CLI command to list active sessions — foundational infrastructure for the multi-agent coordination work that's gaining traction in issues and PRs.
- **Daemon skill-toggle mutation metadata**: The daemon now attaches metadata when skill toggles mutate, improving observability.

### Benchmarking Releases
Three DSW-EAS smoke/full validation releases ran against v0.21.13:
- **dsw-eas-full-20260818-r3**: SUCCEEDED — 500/500 SWE-bench Verified, 89 Terminal-Bench cases, with release writeback. This is the first fully successful full-scale run.
- **dsw-eas-full-20260818-r1/r2**: QUARANTINED — earlier full runs were quarantined, suggesting transient issues subsequently resolved.
- **Smoke releases (r1/r2)**: Credential refresh and transient sandbox recovery tests both SUCCEEDED.

---

## Hot Issues

1. **[#656 — Widespread 400 API errors](https://github.com/QwenLM/qwen-code/issues/656)** (P1, 11 comments) — Every request failing with `InternalError.Algo.InvalidParameter` for 12–16 hours mid-session with no config changes. Still open after nearly a year — likely a provider-side regression that's been hard to pin down.

2. **[#9194 — Mutation-verified test-pin gaps in review](https://github.com/QwenLM/qwen-code/issues/9194)** (P3, 11 comments) — Automated reviewer flagged tests that "ship the suite green" despite production mutations. Highlights growing rigor in the review platform's testing.

3. **[#8718 — RFC: Native coordination for independent Qwen sessions](https://github.com/QwenLM/qwen-code/issues/8718)** (P2, closed, 10 comments) — Proposes leader dispatching self-contained workers with correlated state observation. Closed, likely superseded by newer multi-agent work.

4. **[#8316 — Prompt not restored after Ctrl+C cancel](https://github.com/QwenLM/qwen-code/issues/8316)** (10 comments) — Canceling a prompt loses the content entirely, forcing retyping. Closed — a quality-of-life fix that resonates with daily users.

5. **[#9276 — Team members can't message their leader](https://github.com/QwenLM/qwen-code/issues/9276)** (P2, 7 comments) — Normal completion/status messages from team members treated as shutdown requests, failing with "Only the team leader can request shutdowns." Core multi-agent protocol bug.

6. **[#8724 — Cross-session messaging on same machine](https://github.com/QwenLM/qwen-code/issues/8724)** (6 comments) — Sessions discovering each other via `list_agents` and `send_message` with explicit fail-closed gates. Open and actively driving PRs.

7. **[#9296 — Qwen Autofix review-event storms](https://github.com/QwenLM/qwen-code/issues/9296)** (P1, 5 comments) — 59% of autofix runs cancelled (294/500); reviews on closed/merged PRs still trigger runs. Significant infrastructure waste with four distinct efficiency problems identified.

8. **[#9438 — Ollama breaks: user message dropped after tool call](https://github.com/QwenLM/qwen-code/issues/9438)** (P1, 2 comments) — HTTP 500 `no user query found in messages` when using Ollama. Critical for the self-hosted community.

9. **[#9434 — `ask` hook returns don't show diffs](https://github.com/QwenLM/qwen-code/issues/9434)** (P2, 3 comments) — PreToolUse hooks returning `ask` don't display diffs for Edit/WriteFile, hampering human review of path-filtered operations.

10. **[#8400 — Desktop sessions silently auto-deleted on restart](https://github.com/QwenLM/qwen-code/issues/8400)** (P1, 4 comments) — Windows desktop app deletes all sessions after restart when ACP session load fails (workspace cwd mismatch). Data-loss severity.

---

## Key PR Progress

1. **[#9153 — Wire `--resume` through `/review`, review run, and CI retry](https://github.com/QwenLM/qwen-code/pull/9153)** — Completes the resume series across all entry points, mirroring `--comment`'s gating. Stabilizes interrupted review rounds.

2. **[#9402 — Agent board: share work across independently started agents](https://github.com/QwenLM/qwen-code/pull/9402)** — Repurposed from a bad deletion proposal to carry the agent board. Directly addresses cross-session collaboration demand.

3. **[#9221 — Verifier probes in private scratch worktree](https://github.com/QwenLM/qwen-code/pull/9221)** — Fixes the review verifier polluting the shared review worktree. A targeted fix for the review pipeline's write-agent isolation.

4. **[#9441 — Show edit/exec diffs when a PreToolUse hook returns `ask`](https://github.com/QwenLM/qwen-code/pull/9441)** — Directly addresses issue #9434. Bounces tool calls to `awaiting_approval` with proper diff rendering.

5. **[#9267 — Build incremental review scope from PR diff, not a containment check](https://github.com/QwenLM/qwen-code/pull/9267)** — Replaces the post-hoc containment oracle with a narrowing step. Cleaner incremental review semantics.

6. **[#9337 — SDK-Python: support large stream-json messages](https://github.com/QwenLM/qwen-code/pull/9337)** — Fixes the `output.format` stream-json gap in the Python SDK, complementing the schema fix in #8966.

7. **[#9393 — WebShell adopts canonical Goal v3 controls](https://github.com/QwenLM/qwen-code/pull/9393)** — Full Goal lifecycle (create, inspect, edit, pause, resume, clear) without routing through the model. Significant UX modernization.

8. **[#9361 — Scheduled tasks can bind to existing sessions](https://github.com/QwenLM/qwen-code/pull/9361)** — Accepts optional `sessionId` on scheduled-task creation, avoiding dedicated session minting waste.

9. **[#9433 — Reject `run_in_background: false` for named teammates](https://github.com/QwenLM/qwen-code/pull/9433)** — Addresses #9430 where the flag was silently ignored. Behavioral fix for the multi-agent path.

10. **[#9436 — Duplicate tool-call replay detection only when args match](https://github.com/QwenLM/qwen-code/pull/9436)** — Prevents false-positive replay kills when tool-call IDs collide with different arguments. Correctness fix for the circuit breaker.

---

## Feature Request Trends

1. **Multi-agent coordination** — The dominant theme. Cross-session messaging (#8724), native session coordination RFCs (#8718), agent boards (#9402), and named teammates semantics (#9430, #9431) all point to a clear push: independent Qwen sessions should be able to discover, message, and coordinate with each other.

2. **Electron/Desktop expansion** — Incremental in-app browser panels (#9412) and Computer Use activity surfaces (#9439) suggest the desktop shell is becoming a first-class platform target, building on the isolated Electron preview (#9168/#9169).

3. **Review platform maturity** — The `/review` subsystem keeps getting hardened: flakiness gates (#9125), publish-time convergence advisories (#9278), resume support (#9153), and better scope construction (#9267).

4. **Web-shell consolidation** — A long-running proposal (#5883) to standardize the chat panel across web-shell, VS Code webview, and desktop continues to drive incremental adoption (e.g., Goal v3 controls in #9393).

5. **Export/data portability** — Cross-host transcript contracts (#9354) and HTML export showing thinking/tool results (#8208) point to a desire for durable, shareable session artifacts.

---

## Developer Pain Points

1. **API flakiness and provider regressions** — The stubborn 400 errors (#656) and Ollama's dropped user messages (#9438) highlight how dependent the tool is on provider behavior. Each upstream change can break core flows.

2. **Multi-agent protocol gaps** — Team messaging failures (#9276), ignored `run_in_background: false` (#9430), and ambiguous `list_agents` results (#9431) show the multi-agent story is still rough around the edges.

3. **Session state fragility** — Silent session deletion on Windows restart (#8400), cursor duplication during pagination (#9419), and lost prompts on Ctrl+C (#8316) are persistent session-management bugs that erode trust.

4. **CI/review inefficiency** — Stormed autofix runs with 59% cancellation (#9296) and test flakiness in the review sandbox (#9125) waste runner capacity and developer attention.

5. **Hook and approval UX** — `ask` returns without diff previews (#9434) force blind approvals, and artifact status inconsistencies (#9083) create false confidence in file availability.

6. **File permission surprises** — The hard-coded 0600 mode for new files in `qwen serve` (#9250) ignores umask with no configuration escape hatch — a sharp edge for Linux users with strict permission policies.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-19

## Today's Highlights

The project continues its transition from `deepseek-tui` to **CodeWhale**, with v0.9.9 released and the legacy npm package officially deprecated. The community is focused on two major efforts: the EPIC-005 crate decomposition for architectural modernization and a comprehensive Chinese documentation localization initiative. A notable bug was closed quickly — the system prompt being dropped after `/new` — while a new Windows-specific rendering regression was reported.

## Releases

**[v0.9.9](https://github.com/Hmbown/CodeWhale/releases)** — The release marks a significant branding shift: **Codewhale** is now the official public product name from Shannon Labs, with the `codewhale` command, npm package, and release-asset names remaining lowercase technical identifiers. The legacy `deepseek-tui` npm package is officially deprecated and will receive no further releases. The changelog highlights fixes for narrow-terminal compact-row metrics below 60 columns (#5486), strict rustdoc bare URL validation (#5489), and stabilization of concurrency configurations.

## Hot Issues

1. **[#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316)**  
   The architectural epic tracking the decomposition of the TUI into separate crates. Seven comments indicate active coordination. This is the most structurally significant issue, affecting every future feature and maintenance effort.

2. **[#5505 — System prompt dropped after `/new`](https://github.com/Hmbown/CodeWhale/issues/5505)** *(CLOSED)*  
   Critical bug: the model receives no system prompt after starting a new session — only a folded `<context_update>` line. Closed within 24 hours, showing strong response time for core functionality regressions.

3. **[#5512 — Header status indicator never renders since 0.9.7](https://github.com/Hmbown/CodeWhale/issues/5512)**  
   Windows 11 regression: the `status_indicator` (cw/whale/dots/off) next to the effort chip stopped rendering. Reproduced on 0.9.8 and 0.9.9. Community note: "worked in the 0.8.64 era" — suggests a rendering layer refactor broke this quietly.

4. **[#5437 — Formalize status-bar color grammar + surface repo/worktree state](https://github.com/Hmbown/CodeWhale/issues/5437)**  
   External design review concluded the color palette is a "color vocabulary" and should be kept. The issue formalizes this grammar and requests repository/worktree context display. The community reaction is positive — the reviewer praised the design system.

5. **[#5299 — Move npm publication to trusted publishing](https://github.com/Hmbown/CodeWhale/issues/5299)**  
   Release automation pain: the v0.9.5 npm wrapper was gated on a maintainer browser login with 2FA — breaking the fully noninteractive release pipeline that succeeded for GitHub, GHCR, Homebrew, and all 20 Cargo crates.

6. **[#5508 — Continuous loop feature request](https://github.com/Hmbown/CodeWhale/issues/5508)**  
   A user running AI coordinators wants an "infinite turn" mode until interrupted, avoiding hacky sleep cycles in single turns. Three comments — moderate interest from agent-orchestration users.

7. **[#5497 — Terminalize stuck durable executions and bound event growth](https://github.com/Hmbown/CodeWhale/issues/5497)**  
   Engine bug: durable Task Manager workers can occupy a worker forever when `turn.completed` never emits. The executor polls every 40ms indefinitely; cancellation lacks a grace period.

8. **[#5482 — Full localization of documentation to Chinese](https://github.com/Hmbown/CodeWhale/issues/5482)**  
   Growing Chinese user base drives a request to restructure docs with per-language folders. Notes that machine translation introduces errors and several source documents are already stale.

9. **[#5337 — Finish dictionary spine, retire every `isZh` branch](https://github.com/Hmbown/CodeWhale/issues/5337)**  
   Web i18n refactor: consolidates the two-language ternaries into a single dictionary path for routed locales. Five comments; part of a series (#5488 already landed).

10. **[#5496 — Bound release-candidate and artifact workflow jobs](https://github.com/Hmbown/CodeWhale/issues/5496)**  
    CI hardening follow-up to #5495. The exact-head and post-tag release path still lacks timeout caps, observed during the v0.9.9 release where a runner hung indefinitely.

## Key PR Progress

1. **[#5506 — Command context adapters and migration gate (FEAT-015)](https://github.com/Hmbown/CodeWhale/pull/5506)**  
   Part of EPIC-005: builds the TUI-owned dependency-injection infrastructure to extract slash-command implementations safely. Deliberately migrates **zero** production command groups — a cautious, incremental approach.

2. **[#5511 — Show repository context in git chrome](https://github.com/Hmbown/CodeWhale/pull/5511)**  
   Implements the approved slice of #5437: header now identifies `repo · branch*`, distinguishes linked worktrees, and preserves ahead/behind counts. Addresses a core UX request from the design review.

3. **[#5509 — Restore `/title` as independent terminal window title](https://github.com/Hmbown/CodeWhale/pull/5509)**  
   Reverts a merge that made `/title` delegate into `/rename`, which conflated session names with terminal titles. Good catch on command semantics.

4. **[#5507 — Tier 1 of Chinese docs localization](https://github.com/Hmbown/CodeWhale/pull/5507)**  
   Delivers the first tier of #5482: restructures docs into per-language folders (`docs/zh_hans/`) and migrates existing translations. Direct response to the Chinese user-base growth.

5. **[#5504 — Move docs/hooks and docs/troubleshooting onto the dictionary spine](https://github.com/Hmbown/CodeWhale/pull/5504)**  
   Continues the #5337 series — eliminates 12 `isZh` branches per page in favor of the unified dictionary pattern. Part of a systematic i18n cleanup.

6. **[#5491 — Persist approval outcomes before execution](https://github.com/Hmbown/CodeWhale/pull/5491)**  
   Security-relevant fix: approval requests and terminal outcomes are logged to a session-owned file before execution proceeds. Denies execution when persistence fails; reconstructs state on session resume. Closes #5360.

7. **[#5499 — Release v0.9.9](https://github.com/Hmbown/CodeWhale/pull/5499)**  
   Finalizes CodeWhale v0.9.9 with late fold-ins and synchronized changelogs. Confirms the branding shift to Codewhale.

8. **[#5503 — Spawn deploy preflight script by decoded path](https://github.com/Hmbown/CodeWhale/pull/5503)** *(CLOSED)*  
   Fixes a Windows/encoding bug: `URL.pathname` stays percent-encoded, so checkouts under non-ASCII paths fail. Small but real cross-platform issue.

9. **[#5495 — Cap every ci.yml job with timeout-minutes](https://github.com/Hmbown/CodeWhale/pull/5495)** *(CLOSED)*  
   Direct response to a live incident: a dead runner sat on a required gate for 6 hours (GitHub's 360-minute default). Now jobs fail fast. Pragmatic CI hardening.

10. **[#5404 —Fail closed on SSE UTF-8 split across HTTP/2 DATA](https://github.com/Hmbown/CodeWhale/pull/5404)** *(CLOSED)*  
    Fixes garbled streaming text (U+FFFD replacement chars / CJK corruption) on macOS with DeepSeek Flash. HTTP/2 can split multi-byte characters across DATA frames — the decoder now fails closed instead of producing mojibake.

## Feature Request Trends

- **Agent orchestration / continuous operation** (#5508): Users are running CodeWhale as a coordinator AI that manages other AIs in a loop. The "infinite turn" pattern is emerging as a first-class need.
- **Repository/worktree state visibility** (#5437, #5511): The community and design reviewers want richer Git context — branch, worktree, ahead/behind — surfaced directly in the TUI chrome.
- **Configurable resource budgets** (#5405): Self-hosted long-context users need tunable read/tool-result ceilings; the hardcoded limits (50 KiB read, 16 KiB `read_file`) are too conservative for 64 KiB+ files.
- **Chinese localization** (#5482, #5507, #5337): Both docs and web UI are being systematically localized. This is a sustained, multi-PR effort — a clear corporate priority.
- **Release automation zero-touch** (#5299, #5495, #5496): The maintainers want fully noninteractive releases with bounded job execution. Trusted npm publishing would complete the pipeline.

## Developer Pain Points

- **Release pipeline friction**: The npm wrapper remains the only step requiring a maintainer browser login + 2FA. Every other artifact (20 crates, GHCR, Homebrew, CNB, website) publishes noninteractively. Expired workstation npm credentials made this worse.
- **CI dead-runner stalls**: A runner that logs 404 forever can block a required gate for up to six hours. This happened live during the release — prompting the `timeout-minutes` fix, but the release-candidate path is still uncapped.
- **Windows-specific rendering regressions**: The header status indicator broke on 0.9.7+ on Windows 11, and the deploy preflight script fails under non-ASCII paths. Cross-platform testing gaps persist.
- **Unbounded worker loops**: The durable Task Manager can poll forever waiting for a terminal event that never arrives, with no graceful cancellation timeout.
- **Session state loss**: The `/new` system-prompt bug (closed quickly) and the approval-state reconstruction needed in #5491 both point to recurring state-transition bugs between sessions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*