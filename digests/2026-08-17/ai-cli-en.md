# AI CLI Tools Community Digest 2026-08-17

> Generated: 2026-08-17 01:20 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date: 2026-08-17**

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **stabilization and hardening phase**, with no major releases across any of the seven major tools in the last 24 hours. The ecosystem is characterized by three dominant themes: **session/context reliability** (users demanding persistent memory, resume resilience, and honest telemetry), **platform parity** (Windows and iPadOS remain second-class citizens across multiple tools), and **enterprise governance** (security scoping, plugin policies, and org-level controls). While feature velocity has slowed, the volume of community engagement remains high—the most active issue threads (Claude Code's #80279, Codex's #20214) show intense user investment. The competitive landscape is converging on similar feature sets (subagents, MCP integration, remote control, scheduled tasks), with differentiation increasingly driven by execution quality rather than novel capabilities.

---

## 2. Activity Comparison

| Tool | Issues (Noteworthy) | PRs (Active) | Release Status (24h) | Overall Activity Level |
|------|---------------------|--------------|----------------------|------------------------|
| **Claude Code** | 10 | 3 | No release | **Medium** — Stabilization phase; community active on regressions |
| **OpenAI Codex** | 10 | 10+ | No release | **High** — 17 PRs this week (all automated); Windows issues dominate |
| **Gemini CLI** | 10 | 10 | Nightly v0.56.0 | **High** — Daily nightlies; active bug-fix pipeline |
| **GitHub Copilot CLI** | 10 | 1 | No release (v1.0.80) | **Low-Medium** — Triage-heavy; auth/session regressions |
| **Kimi Code CLI** | 10 | 3 | No release | **Medium** — Feature requests pending; Windows issues |
| **OpenCode** | 10 | 10 | No release | **Medium** — V2 dev track active; billing issues hot |
| **Pi** | 10 | 10 | No release | **High** — Busy day; catalog/provider fixes landing |
| **Qwen Code** | 10 | 10 | Nightly v0.21.11 | **High** — Hardening multi-agent runtime; fast issue-to-fix cycle |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | v0.9.8 (recent) | **High** — Rebrand active; aggressive fix velocity |

---

## 3. Shared Feature Directions

Several requirements appear consistently across tool communities, indicating industry-level demand:

| Feature Direction | Tools | Specific Needs |
|-------------------|-------|----------------|
| **Session Lifecycle Management** | Claude Code, OpenAI Codex, Copilot CLI, Kimi, OpenCode | Un-archive/delete sessions, workspace-scoped chats, session rotation bounds, persistent agent selection |
| **Context & Memory Persistence** | Claude Code (#72745), Codex (#19265), Gemini (Auto Memory) | Cross-session retention, "remember mistakes" semantics, deterministic memory layer, no silent state loss |
| **Non-Interactive/Programmatic Interfaces** | Kimi (`--starting-prompt`), Gemini (`--list-models`), Copilot CLI (`-p` consistency) | Flags for CI/CD, JSON output, scriptable model discovery, headless operation |
| **MCP Server Lifecycle Management** | Codex (#11765), Copilot CLI (#4472), Claude Code | Visual enable/disable UI, process reaping, concurrent refresh handling, OAuth reliability |
| **Windows First-Class Support** | Codex (#20214, #38546), Kimi (#2600), Pi (#6300) | Performance parity, path resolution, TUI rendering, elevated-privilege issues |
| **Security & Governance** | Claude Code (org-installation mode, plugin rules), Codex (permission profiles), Qwen (PAT isolation) | Org-scoped access, permission consistency, capability negotiation, sandbox depth control |
| **Subagent Observability & Honest Telemetry** | Gemini (#22323), Qwen (#9276), DeepSeek (#5123), OpenCode | True termination reasons, accurate status reporting, role-contract consistency, visibility into subagent trajectories |
| **Configurable Timeouts/Retries** | OpenCode (#26602), Pi (#8204), Gemini (#28812) | "Disable timeout" as real option, retry logic for hung endpoints, no silent stalls |
| **Extended Keyboard/Editor UX** | Codex (undo/redo #2379), OpenCode (Ctrl+C #7957), Gemini (Vim history) | Universal shortcuts, Vim-mode improvements, terminal-state restoration |
| **Quota/Billing Transparency** | Copilot CLI (#4504), OpenCode (#33318, #42938), Pi (#8218) | Accurate reset dates, paid-tier fallback, correct token accounting |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Enterprise-ready autonomous coding | Professional developers in large orgs | MCP-heavy, plugin ecosystem, scheduled tasks, desktop+CLI sync |
| **OpenAI Codex** | Agentic coding with TUI focus | Developers using ChatGPT ecosystem | Responses API, Vim-mode TUI, remote control, workspace-scoped sessions |
| **Gemini CLI** | Multi-agent orchestration | Google ecosystem developers | Subagent hierarchies, SSR Agent program, nightly releases, AST-aware tooling exploration |
| **GitHub Copilot CLI** | Deep GitHub/MCP integration | GitHub-centric teams | SDK server, plugin system, model-agnostic routing, connection-based sessions |
| **Kimi Code CLI** | Lightweight, Moonshot-ecosystem | Chinese-speaking developers, cross-platform | TUI-first, memory layer, cron tasks, non-interactive support |
| **OpenCode** | Modern TUI with V2 architecture | Hackers/early adopters | New V2 session model, Zen billing, desktop+web, Go subscription integration |
| **Pi** | Provider-agnostic, catalog-driven | Multi-provider power users | Extensive provider catalog, token-accounting precision, extension API |
| **Qwen Code** | Agent teams + CI/CD autofix | QwenLM ecosystem, DevOps | Multi-agent runtime, `/review` self-play, GitHub Actions integration |
| **DeepSeek TUI (CodeWhale)** | Sandboxed, honest telemetry | Privacy-conscious, self-hosted | bwrap sandbox, verified telemetry, model-specific harness posture, i18n |

**Key Differentiators:**
- **Claude Code** wins on **enterprise governance** (GitHub org-installation, plugin rules)
- **Codex** leads in **Windows development investment** (despite issues, it's the most-reported)
- **Gemini** is fastest at **nightly iteration** and formalizes the **SSR Agent** as a self-healing program
- **Copilot CLI** has the most **MCP/OAuth depth** (RFC 8414 compliance, concurrent refresh handling)
- **OpenCode** takes the most **architectural risk** (V2 session model rewrite)
- **Pi** provides the most **provider flexibility** with precise token accounting
- **Qwen Code** uniquely runs **self-review pipelines** (dogfooding its own /review)
- **DeepSeek TUI** emphasizes **sandbox strictness** and **telemetry honesty** as primary value

---

## 5. Community Momentum & Maturity

**Rapidly Iterating (High Momentum):**
- **Gemini CLI** — Daily nightlies, direct issue-to-PR links, systematic SSR Agent program. Community receives continuous fixes, though regression risk is higher.
- **Qwen Code** — Nightly releases, fast issue-to-fix cycle (24h for session-abort bug), active multi-agent runtime hardening. Community sees rapid response.
- **Pi** — Busy merge cadence on catalog/provider fixes, active extension API development, engaged contributor base submitting quality PRs.

**Stabilization Phase (Medium Momentum):**
- **Claude Code** — No releases in 24h; focus on regressions. Community engaged but frustrated (iPadOS crash 2 months open, top-voted filter regression).
- **OpenCode** — V2 development steady but not shipping; billing issues creating trust erosion. Community active on UX and session management.
- **DeepSeek TUI (CodeWhale)** — Rebrand momentum, aggressive fix velocity, but small community size compared to major players.

**Triage/Regression-Heavy (Lower Momentum):**
- **Copilot CLI** — Only 1 PR (mis-filed), 16 issues updated, top issues are regressions (OAuth, session resume). Community active but tool appears under-resourced.
- **Kimi Code CLI** — Few PRs, feature requests aging, Windows issues unfixed. Community engaged but development velocity is slow.

**Maturity Assessment:**
- Most mature: **Claude Code, Codex, Gemini** (large communities, structured issue tracking, active maintainers)
- Rapidly maturing: **Pi, Qwen Code, OpenCode** (dev track visible, quality PRs)
- Small but active: **DeepSeek TUI (CodeWhale)** (passionate user base, high engagement per issue)
- Under-resourced: **Copilot CLI** (high-impact bugs, minimal PR activity)

---

## 6. Trend Signals

1. **Cross-Session Memory Is the Next Battleground** — Every major tool has issues about "remembering" across sessions (Claude Code #72745, Codex #19265, Gemini Auto Memory, Kimi memory layer). Tools that solve this well will win long-running autonomous workflows.

2. **Windows Parity Is a Competitive Wedge** — Codex's #20214 (106 comments) is the most-engaged issue this week. No tool has solved Windows performance; the first to do so gains significant market share.

3. **Honest Telemetry Becomes a Trust Feature** — Gemini's MAX_TURNS false-success (#22323), CodeWhale's "honest telemetry" pass (#5459), and Qwen's convergence advisory (#9278) all signal users demand accurate agent status reporting, not optimistic fiction.

4. **MCP Is Standardizing, But Lifecycle Management Is Missing** — All tools support MCP, but none have a good UI for server lifecycle management, OAuth reliability, or process reaping. This is a systematic gap ripe for innovation.

5. **Billing/Quota Confusion Is Eroding Trust** — OpenCode's paid-tier failures (#33318, #42938), Copilot's quota reset inaccuracy (#4504), and Pi's token accounting fix (#8218) show users are deeply confused by usage models. Transparent, accurate metering is a differentiator.

6. **Sandboxing Is Moving From Opt-In to Essential** — DeepSeek TUI's bwrap improvements, Codex's permission profile fixes, and Gemini's OS-sandbox proposal (#19873) indicate sandbox configuration is becoming a core feature, not a security add-on.

7. **Agent Teams Are Shipping Before Maturation** — Qwen Code's six P2 multi-agent bugs in one day and DeepSeek's role-contract mismatches (#5123) suggest the industry is racing to ship multi-agent orchestration with insufficient runtime testing. Expect reliability debt to surface in coming weeks.

8. **Local/Proxy/Provider Flexibility Is a Growing Segment** — Pi's catalog overhaul, OpenCode's local-provider timeouts, Claude's proxy Remote Control (#72749), and DeepSeek's model-specific harness posture all point to users demanding control over where and how models run.

9. **Automated Self-Improvement Loops Are Emerging** — Qwen Code's /review pipeline (with convergence advisory), Gemini's SSR Agent program, and Codex's bot-authored PRs (copyberry) indicate tools are increasingly using AI to fix themselves. This is a meta-trend worth watching.

10. **Cross-Tool Migration Pressure** — Users are clearly comparing tools and demanding parity: OpenCode's Ctrl+C issue mirrors terminal conventions, Kimi's memory layer mirrors agent frameworks, Copilot's `/fork` mirrors Claude's. Tools that adopt community expectations from other tools will retain users.

---

## Recommendation for Technical Decision-Makers

- **If you prioritize enterprise governance:** Claude Code is the strongest candidate, but monitor the GitHub org-installation issue (#72856).
- **If you need Windows support:** Codex is investing most publicly, but expect continued instability until #20214 is resolved.
- **If you value rapid iteration and nightly fixes:** Gemini CLI offers the fastest feedback loop.
- **If you're multi-provider and want precise cost control:** Pi should be on your radar.
- **If you need sandboxed, privacy-conscious execution:** CodeWhale (DeepSeek TUI) is leading, though its community is smaller.
- **If you rely on GitHub CI/CD automation:** Qwen Code's self-review pipeline is uniquely mature, despite multi-agent runtime fragility.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-17 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

**#1 — skill-creator fix (PR #1298)** · [View PR](https://github.com/anthropics/skills/pull/1298)
*Author: MartinCajiao | Status: Open | Updated: 2026-06-23*

A critical bug-fix PR for the `skill-creator` meta-skill. The `run_eval.py` script — consumed by `run_loop.py` and `improve_description.py` — reports **0% recall for every description tested**, rendering the entire skill-description optimization loop ineffective. This PR addresses multiple root causes: improper eval artifact installation, Windows stream handling, trigger detection logic, and parallel worker behavior. The discussion references 10+ independent reproductions (Issue #556), making this the most consequential open fix in the repository.

---

**#2 — Self-Audit skill (PR #1367)** · [View PR](https://github.com/anthropics/skills/pull/1367)
*Author: YuhaoLin2005 | Status: Open | Updated: 2026-07-02*

A quality-gate skill that audits AI output before delivery. Implements a two-phase approach: **mechanical verification** (confirming all claimed output files exist) followed by a **four-dimension reasoning audit** prioritized by damage severity. Claims to be universal across tech stacks and models (v1.3.0). This directly addresses the community's growing concern about output reliability. Companion proposal: Issue #1385 — a three-gate "Reasoning Quality Gate Pipeline" (pre-task calibration → adversarial review → delivery verification).

---

**#3 — Document-Typography skill (PR #514)** · [View PR](https://github.com/anthropics/skills/pull/514)
*Author: PGTBoos | Status: Open | Updated: 2026-03-13*

A niche-quality skill tackling common typographic defects in AI-generated documents: **orphan word wraps** (1–6 words spilling onto the next line), **widow paragraphs** (section headers stranded at page bottom), and **numbering misalignment**. The PR argues these issues affect every document Claude generates. The skill adds typographic quality control as a post-processing step, addressing a pain point users rarely explicitly request but consistently encounter.

---

**#4 — Testing-Patterns skill (PR #723)** · [View PR](https://github.com/anthropics/skills/pull/723)
*Author: 4444J99 | Status: Open | Updated: 2026-04-21*

A comprehensive testing skill covering the full stack: **Testing Trophy model** (philosophy), AAA pattern, test naming conventions, pure functions, React component testing with Testing Library, and edge-case handling. Structured as a reference Claude can consult during test generation — directly relevant to the community's strong demand for reliable test generation (see Section 2).

---

**#5 — ServiceNow platform skill (PR #568)** · [View PR](https://github.com/anthropics/skills/pull/568)
*Author: Vanka07 | Status: Open | Updated: 2026-08-12*

A broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, and Security Incident Response. The most recent activity (2026-08-12) suggests active maintainer interest. Enterprise platform skills like this represent a growing demand segment beyond general-purpose coding.

---

**#6 — ODT skill (PR #486)** · [View PR](https://github.com/anthropics/skills/pull/486)
*Author: GitHubNewbie0 | Status: Open | Updated: 2026-04-14*

Adds OpenDocument format support (.odt, .ods) — creation, template filling, and ODT→HTML conversion. Triggers on "ODT," "ODS," "ODF," "OpenDocument," and "LibreOffice document" mentions. Complements the existing DOCX and PDF skills, rounding out the document-format coverage.

---

**#7 — Pyxel retro game development skill (PR #525)** · [View PR](https://github.com/anthropics/skills/pull/525)
*Author: kitao | Status: Open | Updated: 2026-07-15*

A skill wrapping [pyxel-mcp](https://github.com/kitao/pyxel-mcp), an MCP server for the Pyxel retro game engine (Python). Enables the workflow: **write → run_and_capture → inspect → iterate**. Represents a creative-domain skill leveraging MCP integration, signaling the ecosystem's expansion beyond document and code generation.

---

## 2. Community Demand Trends
*Distilled from Issues — the most-anticipated new Skill directions:*

| Demand Direction | Evidence | Signal Strength |
|---|---|---|
| **Skill reliability & evaluation tooling** | Issue #556 (0% trigger rate bug, 12 comments, 7 👍) + 3 related PRs (#1298, #1099, #1050) | 🔥 **Strongest** — community blocked by broken eval infrastructure |
| **Security & trust boundary enforcement** | Issue #492 (43 comments, 2 👍) — namespace impersonation; Issue #1175 — SharePoint security/context-window concerns | 🔥 **High** — trust abuse under anthropic/ namespace is the most-discussed issue |
| **Org-wide skill sharing & lifecycle** | Issue #228 (16 comments, 8 👍) — org sharing; Issue #1479 — plan-file-hygiene skill | 📈 **Rising** — collaboration-focused demands growing |
| **Output quality assurance / self-audit** | Issue #1385 (4 comments) — reasoning quality-gate pipeline; PR #1367 | 📈 **Rising** — verification before delivery |
| **Context-window efficiency** | Issue #1487 (4 comments) — claude-api skill injects ~156k tokens; Issue #1329 — compact-memory skill | 📈 **Rising** — token budget management |

---

## 3. High-Potential Pending Skills
*Active-comment PRs not yet merged — likely to land soon:*

| Skill | PR | Last Activity | Why It'll Land |
|---|---|---|---|
| **skill-creator eval fix** | [#1298](https://github.com/anthropics/skills/pull/1298) | 2026-06-23 | Blocking bug for all skill authors; multiple independent reproductions; clear root-cause analysis |
| **Self-Audit v1.3.0** | [#1367](https://github.com/anthropics/skills/pull/1367) | 2026-07-02 | Addresses the output-reliability gap; paired proposal in Issue #1385 shows a coherent vision |
| **Testing-Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | Coverage of the full testing stack; fills a gap no existing skill covers |
| **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | 2026-08-12 | Most recently updated open PR — active maintainer; enterprise demand |
| **Document-Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Universally applicable to every AI-generated document |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Completes the document-format family (DOCX, PDF, now ODT) |

**Watch for:** PR #1528 ("FIX — @CLAUDE RESOLVE") is low-quality noise; not expected to land.

---

## 4. Skills Ecosystem Insight
**The community's single most concentrated demand is reliable skill tooling — fixing the broken evaluation pipeline, enforcing security/trust boundaries around the `anthropic/` namespace, and ensuring skills produce verifiable, high-quality output — rather than new domain skills themselves.**

---

# Claude Code Community Digest
**2026-08-17**

---

## Today's Highlights

No new releases shipped in the last 24 hours; the team appears to be in a stabilization phase, with attention converging on a handful of long-running, high-severity regressions. The most urgent item remains a **27-comment iPadOS crash** (#70144) that has been open for nearly two months without a targeted fix. Meanwhile, the weekend's activity clusters around a **regression in the desktop app's session-sidebar "Last Activity" filter** (#80279), which has quickly become the top-voted open issue, and a wave of bot-generated archive "Crypto scan" issues that are polluting the tracker and should be closed.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. [iPadOS] App crashes when opening any session in Code tab — main-thread stack overflow in SwiftUI** ([#70144](https://github.com/anthropics/claude-code/issues/70144))
*27 comments · 22 👍 · Open · Regression*
A long-standing, high-severity crash affecting all sessions on iPadOS (v1.260618.0). The main-thread stack overflow in SwiftUI suggests a recursion bug in the session rendering path. The issue carries `needs-info` and `regression` labels; the community is frustrated by the slow turnaround on a tablet-blocking bug. Open for ~2 months.

**2. Regression in 2.1.217: "Last Activity" (activity-days) filter missing when grouping sessions by Project** ([#80279](https://github.com/anthropics/claude-code/issues/80279))
*19 comments · 30 👍 · Open*
The top-voted open issue. The desktop app's bundled engine update (2.1.209 → 2.1.217) silently dropped the "Last Activity" filter for Project-grouped views. A clear, user-visible regression in core session management; the high vote count signals broad impact.

**3. Cowork: remote-devices file bridge disconnects repeatedly, including mid-operation** ([#77385](https://github.com/anthropics/claude-code/issues/77385))
*9 comments · 1 👍 · Open*
The `device_stage_files` / `device_bash` / `device_commit_files` bridge drops intermittently and fails to auto-recover, even when the desktop app reports the device as online. Impactful for remote-development workflows; no workaround documented yet.

**4. Scheduled tasks (routines): show and allow choosing the model per routine** ([#72871](https://github.com/anthropics/claude-code/issues/72871))
*6 comments · 4 👍 · Open*
Scheduled tasks via the `scheduled-tasks` MCP server expose no way to inspect or set the model. Users want per-routine model selection, likely to control cost and reliability for unattended runs.

**5. Quality regression: no cross-session context retention, repeated failures on same task** ([#72745](https://github.com/anthropics/claude-code/issues/72745))
*5 comments · 0 👍 · Open*
Systematically loses operational context between sessions on the same task, repeating mistakes and reopening solved problems. A "memory" complaint that resonates with long-running refactor workflows, though it has not gained much traction in votes.

**6. /shell-history command to show all shell commands run in session** ([#72859](https://github.com/anthropics/claude-code/issues/72859))
*3 comments · 1 👍 · Open*
Simple, useful CLI affordance: a first-class `/shell-history` command. Low complexity, high practical value for audit and debugging.

**7. Feature request: allow Remote Control when ANTHROPIC_BASE_URL is a transparent local proxy** ([#72749](https://github.com/anthropics/claude-code/issues/72749))
*3 comments · 1 👍 · Open · Stale*
Breaking for proxy users: Remote Control is blocked when `ANTHROPIC_BASE_URL` points at a local transparent proxy to api.anthropic.com. Marked stale; affects a niche but security-conscious segment.

**8. [BUG] Claude GitHub integration needs org-installation-only mode and must not access repos outside selected app installation** ([#72856](https://github.com/anthropics/claude-code/issues/72856))
*3 comments · 0 👍 · Open*
Security-scoped request: the GitHub integration needs an org-installation-only mode and must be restricted to repos in the selected app installation. Compliance-sensitive teams can't adopt the tool until this is addressed. Slow to gain visibility (opened 2026-07-01).

**9. Bash permission prompts fire inconsistently even for commands matching permissions.allow / defaultMode: "dontAsk"** ([#79861](https://github.com/anthropics/claude-code/issues/79861))
*1 comment · 0 👍 · Open · Reproduced*
Reproduced by maintainers (needs-info). The permission system is not honoring `defaultMode: "dontAsk"` or `permissions.allow` consistently. This is a trust-and-automation blocker for hands-off operation.

**10. [Feature Request] Add plugin-level rules support for shared code standards** ([#72687](https://github.com/anthropics/claude-code/issues/72687))
*1 comment · 2 👍 · Open*
Plugins should be able to define rules (Markdown with path filters, like `.claude/rules/`) that are inherited by consuming projects. A strong modularity play for org-wide standards without copy/paste.

---

## Key PR Progress

Only three PRs were updated in the last 24 hours, and none are from Anthropic maintainers. Signal here is limited, but community contributions are actively targeting real gaps:

**1. [OPEN] fix(security-guidance): make ** glob patterns match zero-depth paths** ([#87079](https://github.com/anthropics/claude-code/pull/87079))
*Author: anishsamant*
Fixes a silent security-rule bypass: the `**` glob in `security-patterns.json` was delegated to `fnmatch`, where `**/*.ts` requires a literal `/` and misses top-level files. Given the security context, this silent non-match is a serious correctness fix.

**2. [OPEN] fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents** ([#87077](https://github.com/anthropics/claude-code/pull/87077))
*Author: anishsamant*
All PR-review agents had invalid YAML frontmatter (unquoted scalars with dialogue lines that parsed as nested mappings), causing agents to load with empty name/description/model. A quality-of-life repair for anyone using the PR review toolkit.

**3. [OPEN] Create python-package-conda.yml** ([#87125](https://github.com/anthropics/claude-code/pull/87125))
*Author: Salamyamadi*
A CI workflow addition (Conda packaging); low signal, likely a template exercise.

---

## Feature Request Trends

Distilling the open requests, three clear directions emerge:

1. **Context & Memory Persistence** — Users increasingly demand that Claude Code "remember" across sessions and avoid repeating the same mistakes. (#72745, and underlying themes in session-limit complaints.) This is the single biggest ask for trustworthy autonomous work.

2. **Transparency & Control Over Execution** — Requests for `/shell-history`, per-routine model selection, options to suppress verbose diff output, and OSC-8 hyperlinks all point to a desire for finer-grained observability and control. Users want to know *what* ran, *which* model ran, and *where* files are referenced.

3. **Security & Governance for Team/Org Use** — The GitHub org-installation-only mode, plugin-level rules for shared standards, and proxy-friendly Remote Control all signal a push toward enterprise-ready, policy-driven adoption.

4. **Configuration that "Just Works"** — The recurring theme behind permission-prompt inconsistencies and the `Last Activity` filter regression: users want silent, predictable behavior from their configuration.

---

## Developer Pain Points

- **Session Limits & Cost Model Mismanagement** — A dominant cluster of issues (at least 10 in this batch) revolve around hitting session limits with confusing behavior: "limit while usage shows 0%", "limit doesn't reset on time", and orchestrator agents ignoring explicit model-tiering instructions (burning expensive usage on 60 subagents). This is the #1 source of frustration and churn.

- **Config Drift & Silent Regressions** — The `Last Activity` filter disappearing after an engine bump, and the `**` glob silently mis-matching in security rules, both illustrate a systemic problem: regressions in user-visible behavior and security-critical logic are not caught between releases.

- **Desktop/CLI Stability** — iPadOS crashes, and large-transcript desktop freezes (~80 MB `.jsonl`), indicate the desktop app's session-handling and rendering paths need hardening.

- **Permission System Inconsistency** — Even with `defaultMode: "dontAsk"`, prompts fire unpredictably. Any unpredictability in the permission layer undermines trust in autonomous operation.

- **Issue Tracker Spam** — A growing number of bot-generated "Crypto scan" issues and near-empty test/placeholder issues (e.g., #79251, #80779, #83926) are adding noise to what should be a focused tracker. The community would benefit from maintainers closing these and adding guardrails.

---

*Digest generated from anthropics/claude-code GitHub activity on 2026-08-17.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**2026-08-17**

---

## Today's Highlights

The Codex community is experiencing a significant uptick in Windows-specific issues, with mouse stuttering (Issue #38546, 31 comments) and system-wide performance degradation (Issue #20214, 106 comments) dominating discussion. On the development front, 17 pull requests landed this week—all authored by automation (copyberry[bot])—focusing on TUI improvements, sandbox hardening, permission profile fixes, and endpoint protection diagnostics. Notably, no new releases shipped in the last 24 hours, but substantial architectural work continues on remote host support and workspace-scoped sessions.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#20214 — Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)
**106 comments | 85 👍 | OPEN**
The most-discussed issue this week. Users with sufficient hardware (Ryzen 5, 32GB RAM) report persistent freezes and stuttering. The volume of engagement signals a systemic Windows performance problem, not edge-case hardware incompatibility. Community members report workarounds (elevated privileges, disabling hardware acceleration) but no official fix has shipped.

### 2. [#38546 — ChatGPT/Codex desktop app causes system-wide mouse stutter without elevation](https://github.com/openai/codex/issues/38546)
**31 comments | 13 👍 | OPEN**
Reported August 14, this issue has gained traction quickly. The desktop app causes severe system-wide cursor stutter when running non-elevated on Windows. The rapid comment velocity suggests widespread reproduction — this is likely the highest-priority Windows bug currently open.

### 3. [#25319 — Scope Codex VS Code chats to current workspace/project](https://github.com/openai/codex/issues/25319)
**29 comments | 62 👍 | OPEN**
Long-standing feature request (May 2026) that continues to gain support. Users want chat/thread history scoped to their active project rather than a global list. The high upvote count relative to comment count indicates broad silent agreement.

### 4. [#23200 — Support headless remote Linux hosts for Codex mobile](https://github.com/openai/codex/issues/23200)
**18 comments | 48 👍 | OPEN**
Developers want to use Codex mobile as a control layer for always-on Linux servers without requiring a desktop host to stay online. This aligns with the growing remote-control feature set and is a strong signal for where Codex should invest next.

### 5. [#37487 — Codex CLI 0.147.0 sends empty tool descriptions to Azure Responses API](https://github.com/openai/codex/issues/37487)
**12 comments | 5 👍 | OPEN**
Azure customers are experiencing broken tool calls due to empty tool descriptions in serialization. This is a production-blocking bug for enterprise users on Azure-backed deployments.

### 6. [#28248 — Windows sandbox fails all read operations after power outage](https://github.com/openai/codex/issues/28248)
**11 comments | 6 👍 | OPEN**
After a power loss during an active task, the Windows sandbox permanently fails all read operations with "apply deny-read ACLs" errors. The persistence of this failure across restarts makes it particularly damaging for users with unstable power environments.

### 7. [#2379 — Undo/redo typing in TUI prompt](https://github.com/openai/codex/issues/2379)
**8 comments | 32 👍 | OPEN**
Opened in August 2025, this remains one of the most-upvoted quality-of-life requests. Users want `Cmd-Z`/`Shift-Cmd-Z` for prompt text editing. The high upvote count with low comment count suggests an obvious win with little community debate.

### 8. [#32797 — Codex Desktop retains five MCP/Node process batches (147 node.exe, 13.9 GiB)](https://github.com/openai/codex/issues/32797)
**7 comments | 1 👍 | OPEN**
A severe resource leak: the desktop app holds onto MCP/Node processes in five batches consuming 13.9 GiB. This is a memory-management failure that can degrade entire systems, not just Codex sessions.

### 9. [#11765 — Manage MCP servers UX](https://github.com/openai/codex/issues/11765)
**5 comments | 45 👍 | OPEN**
Users want a proper UI to enable/disable configured MCP servers instead of relying solely on `config.toml`. 45 upvotes with only 5 comments indicates strong demand for MCP configuration ergonomics.

### 10. [#19265 — Codex Desktop intermittently deletes ~/.codex/skills/.system](https://github.com/openai/codex/issues/19265)
**7 comments | 6 👍 | OPEN**
System skills (imagegen, openai-* tools) intermittently disappear from the skills directory during background execution, breaking new turns until they reappear. This is a data-integrity bug that undermines the skills feature's reliability.

---

## Key PR Progress

### 1. [#38921 — Compact successful command activity in the TUI](https://github.com/openai/codex/pull/38921)
Groups consecutive successful agent/unified-exec commands into a `Ran N commands` entry, preserving full transcripts while significantly reducing TUI verbosity. Flushes at interaction boundaries, failures, and after 32 completions.

### 2. [#38919 — Reject obsolete app-server permission profile fields](https://github.com/openai/codex/pull/38919)
Prevents silent ignoring of removed `permissionProfile` fields during deserialization. Clients using obsolete fields will now get explicit errors instead of silently dropping permission restrictions — important security hardening.

### 3. [#38918 — Improve `codex doctor` network diagnostics](https://github.com/openai/codex/pull/38918)
Probes the Responses inference endpoint with the route-aware HTTP client, classifying TLS, proxy auth, proxy config, resolution, and timeout failures. The improved `codex doctor` output should dramatically reduce back-and-forth on network-related issues.

### 4. [#38916 — Honor legacy `:project_roots` permission entries](https://github.com/openai/codex/pull/38916)
Backward-compatibility fix: permission profiles written before the `:workspace_roots` rename still parse `:project_roots` and apply filesystem restrictions. Prevents silent security-loosening for existing configs.

### 5. [#38913 — Stop rendering columns after filling their area](https://github.com/openai/codex/pull/38913)
TUI rendering optimization: stops visiting `ColumnRenderable` children once the render position reaches the bottom of the available area, eliminating unnecessary work in long column lists.

### 6. [#38907 — Edit queued messages with Vim history-up](https://github.com/openai/codex/pull/38907)
Vim-mode improvement: when the composer is empty, history-up restores the latest queued follow-up message for editing, and submitting removes it from the queue to avoid duplication.

### 7. [#38902 — Honor per-environment shell variable policies](https://github.com/openai/codex/pull/38902)
Carries `ShellEnvironmentPolicy` through each resolved `EnvironmentConfig`, using the selected turn environment's policy for shell commands, user shell tasks, and unified exec. Closes a policy-enforcement gap.

### 8. [#38899 — Move requirements policy ownership to execpolicy](https://github.com/openai/codex/pull/38899)
Refactors `RequirementsExecPolicy` into `codex-execpolicy` with re-exports from `codex-config` for API compatibility. Preserves order-independent policy parsing — a cleanup with no breaking changes.

### 9. [#38894 — Add working-directory commands to the TUI](https://github.com/openai/codex/pull/38894)
Adds `/cd [path]` to change an idle local session's working directory while preserving conversation history, reloading project config, and instructions. Addresses a major TUI workflow gap.

### 10. [#38840 — Identify Mac mini hosts in remote control handshakes](https://github.com/openai/codex/pull/38840)
On macOS, inspects hardware profile and sends `x-codex-host-device-kind: mac_mini` for Mac mini hosts during remote-control WebSocket handshakes. Improves device identification for remote sessions.

---

## Feature Request Trends

### 1. Remote/Headless Architecture Dominates
Issues #23200 (headless Linux hosts), #24295 (Connection → Project → Thread grouping), and #32519 (bidirectional task handoff) all point to a clear trend: developers want Codex to work as a robust remote-control system where desktop machines don't need to stay online. This is the strongest feature-direction signal this week.

### 2. Workspace/Project Scoping
Issue #25319 (workspace-scoped chats) and #24295 (project-based grouping) both ask for session organization aligned to projects rather than global timelines. This is a UX-architecture shift that multiple highly-upvoted issues support.

### 3. MCP Management Ergonomics
Issue #11765 (manage MCP servers UX) with 45 upvotes and minimal comments suggests a large silent constituency wanting better MCP server lifecycle management — enable/disable without config file edits.

### 4. Keyboard Shortcuts & Editor Improvements
Issues #26819 (shortcuts for reasoning effort/model switching) and #2379 (undo/redo in TUI) remain popular. The TUI PR activity this cycle (Vim history-up, shared keymaps) suggests the team is actively investing here.

### 5. Windows Performance & Sandbox Reliability
While not "features" per se, the volume of Windows-specific performance and sandbox bugs (#20214, #38546, #28248, #32315) represents an implicit demand: Windows as a first-class platform with parity to macOS/Linux.

---

## Developer Pain Points

1. **Windows Is a Second-Class Citizen (Again)** — The two hottest issues this week (#20214, #38546) are Windows-specific performance bugs affecting system-wide behavior. The 106-comment thread on freezing, plus the mouse-stutter issue, indicates the Windows desktop app has fundamental performance problems that predate this week and remain unfixed.

2. **Session/Context Continuity Failures** — Multiple issues (#38856 compact 404s, #38917 unavailable 1M context, #19265 deleted skills) describe broken context continuity: sessions losing usable state, documented context windows not actually working, and skills silently disappearing. These collectively undermine trust in Codex for long-running work.

3. **MCP Server Lifecycle Chaos** — Two issues (#32797, #38754) describe MCP server processes being spawned repeatedly, not reaped, and accumulating into multi-GiB resource leaks. For teams running many MCP servers, this is a production hazard.

4. **Rate Limit Confusion** — Two closed issues this week (#18018, #38900) describe confusing rate-limit behavior: Codex continuing to run after limits are hit, and usage allowance refilling unexpectedly with postponed reset dates. Even though closed, the recurrence suggests the usage/billing model needs clearer communication in-product.

5. **Remote Workflow Gaps** — The Remote SSH approval-button failure (#34652) and quadratic `thread/resume` performance on large threads (#38787) show that remote workflows remain fragile at exactly the points where users need reliability: approval flows and large-session steering.

6. **Network/Proxy Configuration Friction** — The new `codex doctor` network diagnostics (PR #38918) and endpoint protection checks (PR #38827) implicitly acknowledge a common pain: users can't diagnose why Codex fails behind proxies, corporate networks, or endpoint security tools. The number of network-related support threads warrants these diagnostic improvements.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**2026-08-17**

---

## Today's Highlights

The nightly release pipeline continues with v0.56.0-nightly.20260817, which includes an SSR Agent fix for TypeScript project setup. The community remains actively engaged on longstanding subagent reliability issues—particularly around hang-on-defer and misleading success reporting when agents hit turn limits. A notable PR trend shows the SSR Agent program is systematically addressing top issues, including fixes for the most-commented bug (#22323) and TUI hang prevention.

---

## Releases

**v0.56.0-nightly.20260817.g9a15c45fb** was published today with a single fix:
- **[SSR Agent] Issue Fix (21911)**: Added `composite` flag to `packages/cli` tsconfig to resolve root build/typecheck failures when `evals/tsconfig.json` references the packages directory.

[View release](https://github.com/google-gemini/gemini-cli/releases)

---

## Hot Issues

1. **#22323 — Subagent recovery after MAX_TURNS falsely reports GOAL success** (12 comments, 2 👍)
   The most-discussed issue this week. A `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even though it hit its turn limit before performing any analysis. This masks interruptions and undermines trust in agent reporting. A fix PR (#28815) is already in progress.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 — Generalist agent hangs indefinitely when deferring** (8 comments, 8 👍)
   One of the most upvoted open issues. Simple tasks like folder creation hang for up to an hour when the CLI defers to the generalist agent. Workaround: instructing the model not to use subagents. High community impact for everyday workflows.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** (8 comments, 1 👍)
   Proposes leveraging Gemini 3's native bash affinity with an OS-level sandbox. Suggests safer alternatives to raw shell execution while preserving the model's preferred toolchain. Part of an ongoing security/usability balance discussion.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#24353 — Robust component-level evaluations** (7 comments)
   Epic tracking expansion of behavioral evals beyond the current 76 tests across 6 Gemini models. Requires infrastructure improvements for component-level testing as the agent ecosystem grows.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **#22745 — AST-aware file reads, search, and codebase mapping** (7 comments, 1 👍)
   Investigates whether AST-aware tools can reduce token noise, improve method-boundary reading, and enable smarter navigation. Pairs with #22746 for CLI tooling exploration.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **#25166 — Shell command gets stuck in "Waiting input" after completion** (4 comments, 3 👍)
   Repeatedly occurs with simple CLI commands—the shell shows as active and "Awaiting user input" even after the process finishes. Affects even trivial commands that never solicit input.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/25166)

7. **#21983 — Browser subagent fails on Wayland** (4 comments, 1 👍)
   Browser Agent terminates with GOAL status but fails to render or function correctly under Wayland sessions. Blocks browser automation for Linux/Wayland users.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/21983)

8. **#22093 — Subagents running without permission since v0.33.0** (3 comments)
   Users report subagents being invoked despite agents being disabled in all configurations. A permission regression that affects users who only want MCP functionality.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/22093)

9. **#22186 — get-shit-done output hook crashes CLI** (3 comments)
   Reproducible crash when the output hook approaches the user summary phase. Crashes with an unhandled exception, losing the session.
   
   [View issue](https://github.com/google-gemini/gemini-cli/issues/22186)

10. **#26525 — Add deterministic redaction and reduce Auto Memory logging** (4 comments)
    Security concern: Auto Memory sends transcript content to the extraction model before the model is prompted to redact secrets. The service can also log existing skill definitions—a privacy issue for users with sensitive skills.
    
    [View issue](https://github.com/google-gemini/gemini-cli/issues/26525)

---

## Key PR Progress

1. **[#28815 — Preserve original termination reason during subagent recovery](https://github.com/google-gemini/gemini-cli/pull/28815)** (Open; P1)
   Direct fix for #22323. When a subagent hits MAX_TURNS or TIMEOUT and calls `complete_task` during the final grace turn, the LocalAgentExecutor now preserves the original termination reason instead of overwriting it with "GOAL". Critical for honest agent telemetry.

2. **[#28812 — Prevent indefinite TUI hang with execution timeouts](https://github.com/google-gemini/gemini-cli/pull/28812)** (Open; P1, help wanted)
   Fixes bare-Linux-terminal hangs at "Initializing..." caused by `getProcessInfo()` relying on `execAsync` for Unix `ps` commands that never return. Adds execution timeouts. Related to #21477.

3. **[#28848 — Handle refreshAuth failures gracefully in non-interactive mode](https://github.com/google-gemini/gemini-cli/pull/28848)** (Open; P2, security)
   Prevents uncaught raw stack traces and exit code 1 when `refreshAuth()` fails during `--prompt` startup. Should produce clean, actionable errors with the dedicated auth error exit code.

4. **[#28813 — Add composite flag to packages/cli tsconfig](https://github.com/google-gemini/gemini-cli/pull/28813)** (Closed; P1)
   Fixes #21911. Root builds and typechecks were failing because `evals/tsconfig.json` references `../packages/cli` without `"composite": true`. Merged into today's nightly.

5. **[#28843 — Add --list-models flag for JSON model output](https://github.com/google-gemini/gemini-cli/pull/28843)** (Closed)
   New flag prints available model options as JSON and exits. Enables programmatic model discovery for orchestrators and integrations without entering the REPL. Follows the early-exit pattern of `--help`/`--version`.

6. **[#28844 — Homebrew deprecation notice and update messaging](https://github.com/google-gemini/gemini-cli/pull/28844)** (Closed)
   `gemini-cli` is deprecated in `homebrew-core`. New users following docs may install a version that won't get updates. Adds caution notes in installation docs and README, plus an updated update-available message.

7. **[#28847 — Update /clear command docs for context reset](https://github.com/google-gemini/gemini-cli/pull/28847)** (Open; P3)
   Fixes #19239. Documentation previously said `/clear` only clears visual terminal screen, but it also resets active session context. Important for user understanding of session state.

8. **[#28820 — Clarify privacy notice wording and selection options](https://github.com/google-gemini/gemini-cli/pull/28820)** (Open; P2, extensions)
   Fixes misleading and contradictory privacy notice text. The intro claims users can opt out, but the actual RadioButtonSelect options don't clearly support that. Improves consent clarity.

9. **[#28814 — Fix TypeScript strict-null errors in integration tests](https://github.com/google-gemini/gemini-cli/pull/28814)** (Open; P2)
   Resolves strict-null property and union type errors blocking builds on integration test files like `hooks-system.test.ts`.

10. **[#28849 — Bump npm-dependencies group with 73 updates](https://github.com/google-gemini/gemini-cli/pull/28849)** (Closed; XL)
    Large-scale dependency refresh including `simple-git` (3.28→3.36) and `@modelcontextprotocol/sdk` (1.23→1.30). Pairs with several individual dependency bumps (puppeteer-core, undici, eslint, marked).

---

## Feature Request Trends

- **AST-aware code intelligence**: Multiple issues (#22745, #22746) explore AST-based tooling for precise method reads, smarter codebase mapping, and reduced token noise. The direction favors starting with `tilth` or `glyph`.
- **OS sandboxing for shell execution**: #19873 pushes for zero-dependency sandboxing to safely use the model's native bash affinity without security trade-offs.
- **Programmatic interfaces**: The `--list-models` PR (#28843) signals growing demand for CLI automation and integration with orchestrators.
- **Subagent observability**: Requests for visible subagent trajectories via `/chat share` (#22598) and subagent context in `/bug` reports (#21763) show users want deeper visibility into agent internals.
- **Resilient session management**: Auto Memory improvements (#26516, #26522, #26523) focus on deterministic behavior: quarantine invalid patches, avoid indefinite retries, and surface processing status.

---

## Developer Pain Points

- **Agent reliability is the #1 frustration**: Hangs (generalist agent #21409), false success reporting (#22323), and permission bypasses (#22093) dominate. When agents fail silently or hang indefinitely, developers lose trust and productivity.
- **Shell/interactive session deadlocks**: Commands hanging in "Waiting input" (#25166), interactive prompts (vite app #22465), and TUI freezes (#21477, PR #28812) are recurring terminal-related pain points.
- **Configuration ignored**: Browser Agent ignoring `settings.json` overrides (#22267) suggests settings merge logic doesn't reach all components consistently.
- **Messy workspace hygiene**: The model creating tmp scripts in random directories (#23571) creates cleanup overhead before commits.
- **Security and privacy sensitivities**: Auto Memory sending content to models before redaction (#26525) and skill definition logging raise legitimate concerns.
- **Subagent behavior predictability**: Underutilization of custom skills/agents (#21968) and lack of awareness of its own CLI capabilities (#21432) point to alignment gaps between model behavior and user expectations.

---

*Data sourced from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) on 2026-08-17.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-17

## Today's Highlights
The Copilot CLI ecosystem is currently grappling with a cluster of authentication and session-management regressions, particularly around MCP OAuth flows and session resume behavior. No new releases landed in the last 24 hours, but the issue tracker saw substantial activity with 16 items updated, including three new triage reports around memory-pressure compaction, stale connection IDs, and quota reporting accuracy. The community is also actively requesting better session lifecycle management, including un-archive capabilities and agent persistence across resumes.

## Releases
No new releases in the last 24 hours. The latest available version remains **1.0.80**.

---

## Hot Issues

### 1. SDK server reports ready without auth, then Slack session creation fails generically
**#4503** — [Link](https://github.com/github/copilot-cli/issues/4503) · Closed · 5 comments
A user invoking Copilot from Slack received a generic failure because the SDK server reported ready without `COPILOT_SDK_AUTH_TOKEN` in its environment. The server never initialized the work session. *Why it matters:* This is a critical race condition that produces misleading "ready" signals, breaking integrations that depend on the SDK server's health check.

### 2. Atlassian MCP OAuth broken in 1.0.80 (RFC 8414 §3.3 regression)
**#4490** — [Link](https://github.com/github/copilot-cli/issues/4490) · Open · 1 comment
OAuth fails with an issuer mismatch error when the authorization server's advertised issuer doesn't match its metadata discovery URL. Regression from 1.0.78. *Why it matters:* Atlassian products (Jira, Confluence) are widely used; this blocks MCP-based Atlassian integration for affected users with no workaround other than pinning to an older version.

### 3. MCP OAuth intermittently fails on Windows with socket error 10013
**#4463** — [Link](https://github.com/github/copilot-cli/issues/4463) · Open · 1 comment
OAuth for remote HTTP MCP servers intermittently fails before the browser flow opens, with "access forbidden by socket permissions (os error 10013)." *Why it matters:* Windows-specific, intermittent failures in the critical OAuth path undermine trust in MCP server reliability on the platform.

### 4. Plugin updates fail when other Copilot CLI or VS Code sessions are open
**#4488** — [Link](https://github.com/github/copilot-cli/issues/4488) · Open · 1 comment
Plugin updates are blocked by file locks held by unrelated sessions, even when the plugin isn't actively used. *Why it matters:* This creates a "kill all sessions to update" burden that disrupts developer workflows and discourages plugin adoption.

### 5. Memory-pressure watchdog force-compacts at 23% context usage, recovers 0.003%, loops until OOM
**#4506** — [Link](https://github.com/github/copilot-cli/issues/4506) · Open · Triage
The watchdog force-compacts conversations when process memory is high, regardless of context usage. In this case it triggered at 23% context, recovered almost nothing, and looped until OOM. *Why it matters:* This is a severe stability bug affecting long-running sessions and multi-session workflows. Community reaction is limited so far (0 comments), but the potential for data loss and crashes makes this high-priority.

### 6. Repository-level `enabledPlugins` ignored in non-interactive mode
**#4507** — [Link](https://github.com/github/copilot-cli/issues/4507) · Open · Triage
`.github/copilot/settings.json` `enabledPlugins` is respected in interactive mode and `plugins list`, but ignored in `copilot -p` (non-interactive). *Why it matters:* Non-interactive mode is core to CI/CD and scripting; inconsistent plugin behavior between modes is confusing and potentially dangerous.

### 7. Resumed session retains stale connection item IDs after interrupted response
**#4505** — [Link](https://github.com/github/copilot-cli/issues/4505) · Open · Triage
Resuming a session after an interrupted response fails every prompt with "input item ID does not belong to this connection." `/fork` doesn't help either. *Why it matters:* Sessions become permanently unusable with no recovery path, forcing data loss for users with long-running sessions.

### 8. `account.getQuota` returns request timestamp instead of quota reset date
**#4504** — [Link](https://github.com/github/copilot-cli/issues/4504) · Open · Triage
JSON-RPC `account.getQuota` returns `resetDate` as the request timestamp, not the actual quota reset time. *Why it matters:* Automations relying on quota awareness will misjudge reset windows, potentially causing rate-limit surprises or inaccurate utilization tracking.

### 9. Concurrent tool calls during token refresh each spin up a new rmcp service
**#4472** — [Link](https://github.com/github/copilot-cli/issues/4472) · Open
When concurrent tool calls hit an expired OAuth token, each triggers an independent refresh, creating duplicate `rmcp::service` instances and cancelling in-flight calls with "transport closed." *Why it matters:* Concurrency is common in agentic workflows; this produces flaky, non-deterministic failures exactly when users need reliability.

### 10. `claude-haiku-4.5` sub-agent fails with reasoning effort 'medium' not supported
**#4473** — [Link](https://github.com/github/copilot-cli/issues/4473) · Open
Internal routing applies `medium` reasoning effort to `claude-haiku-4.5`, which doesn't support it, crashing sub-agent tasks. *Why it matters:* The CLI has no model-aware capability negotiation — a systemic issue that will keep recurring as new models with different parameter support are added.

---

## Key PR Progress

Only **1 PR** was updated in the last 24 hours:

### #3163 — ViewSonic monitor
**#3163** — [Link](https://github.com/github/copilot-cli/pull/3163) · Open
References issues #2591, #3561, #3559 and initiates a GitHub Action runner change. The PR title is ambiguous and appears unrelated to Copilot CLI functionality; it has been open since May with no comments. *Community reaction:* None logged. This PR appears to be either a mis-filed change or a placeholder — unlikely to represent meaningful product progress.

---

## Feature Request Trends

1. **Session lifecycle management** (multiple requests):
   - Un-archive sessions marked as Done (**#4502**) — accidental clicks permanently hide active sessions
   - Restore UI for archived chats (**#4474**)
   - Agent selection persistence across session resume (**#4489**)

2. **Plugin dependency model** (**#4487**):
   - Inter/intra marketplace dependency specification
   - Automatic installation of plugin dependencies

3. **Plugin configuration consistency**:
   - Repository-level `enabledPlugins` should apply across all invocation modes (interactive, non-interactive, server)

4. **Model capability negotiation**:
   - CLI should query model capabilities before applying parameter values (reasoning effort, etc.)

5. **Quota and billing transparency**:
   - Accurate `resetDate` reporting for quota snapshots

---

## Developer Pain Points

1. **Regression-prone MCP OAuth** — Multiple OAuth-related failures across versions (1.0.78 → 1.0.80 regression, Windows socket errors, concurrent refresh races) indicate insufficient test coverage for the OAuth flow, particularly around RFC compliance and platform-specific networking.

2. **Session resume fragility** — Users report silently archived sessions (**#4474**), stale connection IDs killing resumed sessions (**#4505**), and lost agent selection (**#4489**). Long-running sessions are a core CLI use case; these bugs erode trust in persistence.

3. **Memory watchdog instability** — Force-compaction under memory pressure without context-usage awareness (**#4506**) is a severe stability concern that can cascade to OOM, making long sessions risky.

4. **Plugin update friction** — File-lock contention from unrelated sessions (**#4488**) forces disruptive workflow interruption, undermining the plugin ecosystem's value proposition.

5. **Mode-dependent behavior divergence** — The non-interactive mode ignoring repository settings (**#4507**) means CI/CD and interactive workflows can behave differently with the same configuration, a consistency trap for teams.

6. **Permission request timeouts** — Edit permission requests timing out without immediate user response (**#4486**) breaks asynchronous, multi-session workflows — a feature that previously worked and is critical for parallel development.

---

*Digest generated from [github/copilot-cli](https://github.com/github/copilot-cli) activity. All links reference the canonical GitHub issue/PR URLs.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest**  
**2026-08-17**

---

## 1. Today's Highlights

The Kimi Code CLI community remains highly engaged with feature requests and bug reports. This week's focus centers on **session lifecycle management** (deletion, cron visibility), **cross-platform stability** (Windows/PowerShell path issues), and **memory layer optimization** for large projects. A notable PR addressing `BrokenPipeError` in web sessions and a new `--starting-prompt` flag proposal highlight ongoing efforts to improve usability and resilience.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#1783 – Add `/delete` command to remove sessions](https://github.com/MoonshotAI/kimi-cli/issues/1783)**  
   *Open | 👍 1 | 6 comments*  
   Users request a native `/delete` or `/remove` command to manage sessions directly from the TUI. The workaround of manually deleting folders in `~/.kimi/sessions/` is inconvenient and error-prone. Community support suggests this is a high-demand QoL feature.

2. **[#2600 – PowerShell 7 default D: drive breaks kimi code path resolution](https://github.com/MoonshotAI/kimi-cli/issues/2600)**  
   *Open | 👍 0 | 5 comments*  
   When PowerShell 7 is configured to start from a non-system drive (e.g., D:), Kimi Code fails to resolve paths correctly. This is a Windows-specific regression affecting developers who customize their shell startup directory.

3. **[#1478 – Memory layer optimization for large projects](https://github.com/MoonshotAI/kimi-cli/issues/1478)**  
   *Open | 👍 0 | 4 comments*  
   A longstanding request (since March) to improve the memory layer for large projects. Users report confusion about how memory works (only `agent.md` is documented) and suggest adopting structured memory files (e.g., `MEMORY.md`, `memory/` directory) similar to other agent tools.

4. **[#2605 – No user-visible management for cron tasks (CronCreate)](https://github.com/MoonshotAI/kimi-cli/issues/2605)**  
   *Closed | 👍 0 | 1 comment*  
   Scheduled tasks created via `CronCreate` are invisible to users — no `/cron` command, and `/tasks` panel ignores them. Files persist in `~/.kimi-code/cron/` but users have no interface to list, edit, or delete them. This issue was closed quickly, but the underlying gap remains.

5. **[#887 – Support `--starting-prompt` flag](https://github.com/MoonshotAI/kimi-cli/issues/887)** *(referenced in PR #864)*  
   Users want to pass an initial prompt non-interactively, useful for scripting and embedding. This has been a recurring ask since earlier this year.

6. **[#785 – Related discussion: non-interactive use cases](https://github.com/MoonshotAI/kimi-cli/issues/785)** *(referenced in PR #864)*  
   A thread about using Kimi Code in pipelines and automated workflows, driving the need for flags like `--starting-prompt` and better exit behavior.

7. **[#2324 – BrokenPipeError in web session](https://github.com/MoonshotAI/kimi-cli/pull/2324)** *(PR, but tied to real-world issue)*  
   Subprocess exits between `start()` and `write()` cause crashes in the web runner. This is a robustness bug affecting users who run long-lived sessions or rapidly spawn subprocesses.

8. **[#2449 – `shorten_middle` newline bug](https://github.com/MoonshotAI/kimi-cli/pull/2449)** *(PR, but linked to display artifacts)*  
   Tool-call summaries show multi-line output when newlines aren't stripped before truncation — a UI/UX bug that degrades readability of command logs.

9. **[#2601 – Session list visibility and organization](https://github.com/MoonshotAI/kimi-cli/issues/2601)** *(implied by #1783)*  
   Related to session management, users want better listing, search, and grouping in the TUI for large session counts.

10. **[#2599 – Windows path handling for non-C: drives](https://github.com/MoonshotAI/kimi-cli/issues/2599)** *(inferred from #2600)*  
   A broader theme: Kimi Code's path resolution is too rigid for customized Windows environments.

---

## 4. Key PR Progress

1. **[#864 – `--starting-prompt` flag (CLOSED)](https://github.com/MoonshotAI/kimi-cli/pull/864)**  
   Adds `--starting-prompt` / `-s` to inject an initial prompt. This is a major enabler for scripted and CI/CD use cases. Closed — likely ready for merge or already merged.

2. **[#2324 – Fix BrokenPipeError in `SessionProcess.send_message`](https://github.com/MoonshotAI/kimi-cli/pull/2324)**  
   Guards against writing to a dead subprocess. Critical fix for web session reliability, especially in long-running or concurrent scenarios.

3. **[#2449 – Strip newlines in `shorten_middle` before length check](https://github.com/MoonshotAI/kimi-cli/pull/2449)**  
   Fixes rendering of tool-call summaries to keep them single-line. A small but impactful display fix.

---

## 5. Feature Request Trends

- **Session management commands** — `/delete`, `/archive`, `/list --json`: Users want first-class session lifecycle control.
- **Cron/scheduled task UI** — A visible management surface for `CronCreate` tasks: list, pause, edit, delete.
- **Non-interactive mode** — Flags like `--starting-prompt`, `--execute`, and JSON output for automation.
- **Memory layer transparency** — Documented and configurable memory hierarchy (as seen in other agent frameworks).
- **Path/workspace flexibility** — Better handling of non-default drives and custom shell environments on Windows.

---

## 6. Developer Pain Points

- **Invisible state** — Cron tasks and memory persistence are opaque; users don't know what the tool is doing under the hood.
- **Windows path fragility** — Non-C: drive startup breaks workflows; users expect robust cross-platform behavior.
- **Manual session cleanup** — Deleting sessions by hand-editing the filesystem is error-prone and annoying.
- **Subprocess lifecycle bugs** — Race conditions like `BrokenPipeError` erode trust in long-running sessions.
- **Poor documentation of internals** — Users are forced to guess where state lives (e.g., `~/.kimi-code/cron/`) rather than discovering it through the UI.

---

*Digest generated from GitHub data for MoonshotAI/kimi-cli, 2026-08-17.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-17

## Today's Highlights
A notable cluster of issues around session state management and error recovery dominates this week's digest: users report TUI/CLI sessions getting stuck indefinitely after stream errors, tool call failures, or unstable networks, with no error surfaced and no recovery path short of restarting the app. Meanwhile, the V2 development track shows steady progress with several focused fixes landing around background subagent status, skill timeline presentation, and shell process lifecycle semantics. The community is also actively pushing for session organization features (pinning/favorites, auto-sync) and raising concerns about paid-tier Zen billing behavior.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

1. **[#7957 — [UX] Ctrl+C should not exit OpenCode — conflicts with universal copy shortcut](https://github.com/anomalyco/opencode/issues/7957)** · 49 👍 · 16 comments
   Long-running complaint (since January) with strong community backing. Users habitually press `Ctrl+C` to copy text and accidentally terminate the entire session. High engagement suggests this is a persistent UX friction point that the team hasn't yet addressed.

2. **[#41470 — "Copied to clipboard" doesn't work](https://github.com/anomalyco/opencode/issues/41470)** · 16 comments
   Clipboard copy fails inside VS Code Server (Docker) environments — the UI confirms the copy happened, but the system clipboard never receives the text. Particularly annoying for remote development workflows where CTRL+C/Ctrl+V are already inconsistent.

3. **[#36506 — All paid OpenCode Zen models fail with 'Upstream request failed' — free models work](https://github.com/anomalyco/opencode/issues/36506)** · 11 comments · 3 👍
   Paid Zen models (e.g., `opencode/MiniMax-M3`, `opencode/deepseek-v4-flash`) consistently fail with "Upstream request failed" while free models work fine. This is a billing/reliability issue that erodes trust in the paid tier; users expect the premium experience to be *more* stable, not less.

4. **[#13626 — [FEATURE]: Auto-sync projects in web UI from server](https://github.com/anomalyco/opencode/issues/13626)** · 15 👍 · 11 comments
   Users opening OpenCode Web on a new device expect projects to sync automatically from the server. Currently missing, forcing manual setup on each new browser/device. High demand for this quality-of-life feature.

5. **[#26602 — Desktop hits 5-minute Headers Timeout Error with slow local providers](https://github.com/anomalyco/opencode/issues/26602)** · 11 comments
   OpenCode Desktop aborts local OpenAI-compatible provider requests at exactly 5 minutes with "Headers Timeout Error" — even when the provider config sets `"timeout": false`. Hardcoded timeout defeats explicit user configuration and breaks long-running local model inference.

6. **[#33318 — [URGENT] Zen paid balance still hits FreeUsageLimitError / daily free usage limit](https://github.com/anomalyco/opencode/issues/33318)** · 9 comments
   Users with $20+ paid Zen balance still hit "Free usage exceeded, add credits" errors. Billing logic treats paid users as free-tier users, blocking usage entirely. This is a critical monetization bug that damages user trust in the Zen paid tier.

7. **[#20458 — bug: mouse escape sequences garbled after TUI exit](https://github.com/anomalyco/opencode/issues/20458)** · 4 👍 · 7 comments
   After exiting the TUI (via quit, Ctrl+C, or process stop), mouse escape sequences appear as garbled text in the terminal. Terminal state isn't restored cleanly. Related to (but separate from) in-session mouse garbling issue #3199.

8. **[#32366 — bug: UI stuck on 'thinking' indefinitely after stream error, no error displayed or state recovery](https://github.com/anomalyco/opencode/issues/32366)** · 6 comments
   A stream error (e.g., `AI_APICallError`, socket closed) leaves the desktop UI permanently stuck on "thinking..." with no error surfaced and no state recovery. App restart required. This is the most common failure mode reported across multiple issues this week.

9. **[#40468 — stuck in busy forever after toolcall](https://github.com/anomalyco/opencode/issues/40468)** · 5 comments
   After several successful tool calls, one call leaves the TUI permanently busy (ping-pong animation). Double ESC to interrupt does nothing. Last log line is either `loop session.id=...` or another step — no error shown. Closely related to the "stuck thinking" family of issues.

10. **[#42938 — Go plan hits 100%, blocks 12h — "Use balance" enabled but $39.89 Zen balance never used, on any model](https://github.com/anomalyco/opencode/issues/42938)** · 2 comments
    Go subscription reaches 100% monthly usage and blocks "Big Pickle" for 12 hours — despite "Use balance" enabled and $39.89 available on Zen. Docs specify Go should fall back to Zen balance, but the fallback doesn't trigger. Another billing-trust issue.

---

## Key PR Progress (10 Important)

1. **[#42952 — fix(app): reduce session spinner CPU usage](https://github.com/anomalyco/opencode/pull/42952)** · Merged
   Replaces 25 per-dot CSS opacity animations with one shared pre-rendered APNG timeline. Preserves the eight source poses, `ease-out` interpolation, `currentColor`, SVG props, and reduced-motion behavior. Meaningful CPU reduction for a constantly-animated UI element.

2. **[#42949 — fix(app): render code mode executions](https://github.com/anomalyco/opencode/pull/42949)** · Open
   Adds a dedicated Desktop renderer for Code Mode executions: shows child tool progress, input summaries, failed-call states, and surfaces Code Mode runtime errors. Includes focused metadata parsing tests.

3. **[#42944 — fix(app): correct background subagent status](https://github.com/anomalyco/opencode/pull/42944)** · Merged
   Classifies V2 background subagents only after the parent tool completes with a running child result. Preserves legacy `task` background metadata behavior, keeps the subagent progress indicator animated from child session state, and stops the indicator when the child becomes idle.

4. **[#42945 — fix(app): clarify skill timeline presentation](https://github.com/anomalyco/opencode/pull/42945)** · Merged
   Shows skill icon, label, separator, and resolved skill name in timeline tool rows; uses muted text for skill details and notice rows. Adds focused timeline regression coverage.

5. **[#42766 — refactor(app): use current session messages](https://github.com/anomalyco/opencode/pull/42766)** · Open
   Consolidates the desktop's dual message tracking: previously it kept both the V2 session message stream *and* a legacy `Message`/`Part` transcript. This refactor aligns on the current session messages, reducing drift and memory overhead.

6. **[#42049 — [contributor] fix(tui): hide background badge on interrupted shells](https://github.com/anomalyco/opencode/pull/42049)** · Merged
   Renders the `Background` badge only when a completed tool explicitly reports a detached running state. Shares the background-state predicate between shell and subagent rendering; covers detached, foreground, interrupted, and missing-metadata states.

7. **[#41144 — [contributor] fix(tui): clarify saved permission copy](https://github.com/anomalyco/opencode/pull/41144)** · Merged
   Renames persistent permission choice from "Allow always" to "Always allow," clarifies that saved rules apply to the current project, and removes the incorrect claim that saved rules disappear on restart.

8. **[#37386 — fix: check apply_patch move destinations](https://github.com/anomalyco/opencode/pull/37386)** · Merged
   `apply_patch` previously asked for edit permission using only a move's *source* path — even though the tool writes the *destination*. This fix requests permission for the correct path, closing a security hole where a patch could write to a sensitive destination without explicit consent.

9. **[#37385 — fix: preserve file API text content](https://github.com/anomalyco/opencode/pull/37385)** · Merged
   The instance file API called `trim()` on decoded text, silently altering leading/trailing whitespace and blank lines. This fix preserves original content exactly — critical for config files, diffs, and code where whitespace is semantically meaningful.

10. **[#37369 — fix(tui): correct truncateLeft output when len is 1](https://github.com/anomalyco/opencode/pull/37369)** · Merged
    `truncateLeft(str, len)` used `str.slice(-(len - 1))`; when `len === 1` that evaluates to `str.slice(-0)`, which returns the *entire* string. Fixes a subtle off-by-one bug that could break single-character truncation in TUI rendering.

---

## Feature Request Trends

- **Session organization & persistence**: Strong demand for session pinning/favorites (#42940), auto-sync of projects across devices in Web UI (#13626), and persistent ordered session review navigation (#42863). Users want opencode to behave more like a first-class session manager, not just a stateless CLI.

- **Configurable timeout & retry semantics**: Multiple reports (#26602, #36348) call for configurable request timeouts (including "disable timeout" as a real option) and well-defined restart semantics for foreground/background shells. Users want explicit control over how long the tool waits and what happens to running processes on restart.

- **Shell completion & input affordances**: Requests around shell tab completion for top-level flags (#42913), the `Ctrl+C` copy conflict (#7957), and dictation tool integration (#34499) point toward a theme: the TUI needs to behave more like a proper terminal application, respecting universal shortcuts and system-level input conventions.

---

## Developer Pain Points

- **Silent failure and permanent "stuck" states**: The most recurring frustration is the combination of silent failures and non-recoverable UI states — stream errors leaving sessions stuck on "thinking" (#32366, #36370), tool calls leaving the TUI permanently busy (#40468), and unstable networks producing indefinite stalls (#40625). When errors are dropped silently and there's no recovery path, sessions are effectively lost, forcing restarts and context loss.

- **Billing enforcement trumping explicit user configuration**: Multiple reports (#33318, #42938, #36506) show paid Zen balances being ignored, free-tier limits blocking paid users, and Go-to-Zen fallback never triggering. Users are paying for a premium experience and instead getting blocked; this is a trust-eroding pattern that needs urgent attention.

- **Inconsistent clipboard & terminal behavior**: Clipboard copy not working in Docker/VS Code Server (#41470), `Ctrl+C` exiting the app (#7957), and terminal state not being restored after exit (#20458) are exactly the kinds of small, irritating breaks that compound into a poor developer experience.

- **Local/tooling compatibility friction**: Qwen 3.8 rejecting multiple system messages (#42909) and hardcoded 5-minute timeouts breaking slow local providers (#26602) highlight friction when integrating opencode with local models and providers that don't strictly follow OpenAI conventions.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-17

## Today's Highlights
A busy day for the Pi project: the community pushed through a wave of catalog and provider fixes (Kiro OAuth, xAI Responses routing, Kimi cache accounting), while ongoing performance issues with large-buffer prompt editing and provider catalog timeouts remain the most visible open problems. A critical bug fix landed for custom messages injected mid-tool-batch, resolving DeepSeek 400 errors that broke session continuity.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#8029 — Very slow performance on moving in prompt editor](https://github.com/earendil-works/pi/issues/8029)** — *Open, in progress.* Linear performance degradation with large prompt buffers; a ~7000-line prompt takes 1650ms per arrow keypress. This directly impacts daily TUI usability for users who paste large contexts. The `inprogress` label and 9 comments signal active work, but no fix is merged yet.

2. **[#6300 — Windows: Input line redrawn on every keystroke](https://github.com/earendil-works/pi/issues/6300)** — *Open.* A long-standing Windows TUI rendering issue where each character appears on a new line. Seven comments and open for over a month suggests Windows terminal compatibility remains a weak spot for the project.

3. **[#8198 — pi.dev provider catalog endpoint times out](https://github.com/earendil-works/pi/issues/8198)** — *Open.* `pi update --models` consistently times out; direct curl requests receive no headers or body. This affects all users relying on remote catalog refreshes. A related PR (#8204) adds retry logic, so this is likely to close soon.

4. **[#8036 — Edit tool crashes TUI on large diff render](https://github.com/earendil-works/pi/issues/8036)** — *Open.* A 14.5 MB diff crashes the interactive TUI both during execution and session resume. The edit succeeds but the rendering path is not resilient to large outputs. Critical for users working with generated HTML or minified files.

5. **[#8061 — Context budget ignores maxTokens output reservation](https://github.com/earendil-works/pi/issues/8061)** — *Open.* Provider rejected a request at 78% input usage because output reservation was not accounted for; the automatic compact-and-retry then failed for the same reason. This reveals a real budgeting flaw that can cause cascading failures.

6. **[#7870 — Remote catalog overlay overrides contextWindow for z-ai/glm-5.2](https://github.com/earendil-works/pi/issues/7870)** — *Open, in progress.* Good built-in values (1M context) are silently replaced by incorrect remote overlay values (262k). Users get suboptimal behavior with no visibility into why. Highlights the need for better catalog merge diagnostics.

7. **[#5581 — Custom messages bypass `before_agent_start`](https://github.com/earendil-works/pi/issues/5581)** — *Open, in progress.* `pi.sendMessage()` with `triggerTurn: true` bypasses the event lifecycle, breaking extensions that rely on consistent event ordering. Four comments with a 👍 indicates developer community interest in lifecycle correctness.

8. **[#8157 — Migrate grok-mermaid → lovely-mermaid](https://github.com/earendil-works/pi/issues/8157)** — *Open.* A proposal to replace the inherited Grok mermaid renderer (a 1:1 port with inherited corner cases) with a more maintained implementation. Worth watching — mermaid quality directly affects diagram-heavy agent workflows.

9. **[#8223 — Quit leaves orphaned pi process holding in-flight requests](https://github.com/earendil-works/pi/issues/8223)** — *Closed.* A user caught a 16-minute GPU generation with all pi windows closed — orphaned processes kept provider requests alive after quit. This is a serious resource leak for users running local models. The closure suggests a fix or workaround was identified quickly.

10. **[#8216 — Package Report: pi-devin-auth flagged unsafe](https://github.com/earendil-works/pi/issues/8216)** — *Closed.* Community security report on a package whose repo is "a-wall" and untrustworthy with user credentials. Shows the package-report mechanism working, but also raises questions about package vetting.

## Key PR Progress

1. **[#8218 — fix(coding-agent): getStats tokens.total = billable only](https://github.com/earendil-works/pi/pull/8218)** — *Merged.* Fixes a significant token accounting bug: cache tokens were included at full weight in `tokens.total`, inflating totals ~120x and triggering compaction far too early. This will meaningfully improve token budget behavior for DeepSeek/OpenAI cache-priced models.

2. **[#8209 — fix(coding-agent): defer non-turn custom messages to end of turn while streaming](https://github.com/earendil-works/pi/pull/8209)** — *Merged.* Directly fixes #8166 (DeepSeek 400 "tool must follow tool_calls"). Custom messages injected mid-stream were corrupting message adjacency. Important for extension developers using `sendMessage` during active turns.

3. **[#8204 — fix(coding-agent): retry hung pi.dev catalog refreshes](https://github.com/earendil-works/pi/pull/8204)** — *Merged.* Adds per-attempt timeouts and retry for pi.dev catalog fetches that hang after TLS accept. Mitigates the recurring catalog timeout problem (#8065, #8198).

4. **[#8124 — feat(ai): route xAI models through Responses and default to Grok 4.6](https://github.com/earendil-works/pi/pull/8124)** — *Merged.* Migrates xAI from Completions to the Responses API and bumps the default model to Grok 4.6. Aligns with xAI's API direction and gives users the latest model out of the box.

5. **[#8119 — fix: track kimi cached tokens](https://github.com/earendil-works/pi/pull/8119)** — *Merged.* Adds Kimi's top-level `usage.cached_tokens` to `rawUsage` as cache-read input. Complements #8218 for better token accounting across providers.

6. **[#8217 — feat(auth): add Kiro OAuth device login](https://github.com/earendil-works/pi/pull/8217)** — *Merged.* New provider support with device-code OAuth flow, including error handling for `authorization_pending`, `slow_down`, and malformed expiresIn responses. Expands the provider ecosystem.

7. **[#8193 — feat(ai): add image-to-image generation for the image generation endpoint](https://github.com/earendil-works/pi/pull/8193)** — *Merged.* Adds a `minimax-images` API module and registers it in the runtime registry. Enables reference-image (image-to-image) workflows on MiniMax backends for both regions.

8. **[#8076 — DRAFT: dev branch with new harness](https://github.com/earendil-works/pi/pull/8076)** — *Open, draft.* A significant architectural change. No description beyond the title, but worth monitoring — new harness work could affect extension APIs and event semantics.

9. **[#8219 — Closed without merge](https://github.com/earendil-works/pi/pull/8219)** — *Closed.* Author asked to ignore. No action needed.

10. **[#8193 — See #7 above](https://github.com/earendil-works/pi/pull/8193)** — Also notable: this is the only non-`coding-agent` focused feature PR in the current batch, signaling that AI-runtime providers are getting attention alongside agent-loop fixes.

## Feature Request Trends
- **Provider catalog correctness**: Multiple issues (#7870, #8190, #8206, #8194, #8220) request accurate model metadata (context windows, thinking levels, vision support, endpoint routing). The community is actively correcting catalog gaps and asking for better merge behavior between built-in and remote catalogs.
- **Extension API lifecycle control**: Requests to vet/validate tool schemas (#8222), veto turn settlement (#8213), and expose argument completions via RPC (#8214) show demand for more granular lifecycle hooks and richer extension capabilities.
- **Subagent depth limiting**: #8195 requests unbounded nesting protection for the subagent example — a safety/recursion guard that should probably be a built-in.
- **Package safety reporting**: #8216 and #8215 highlight growing community attention to package security and lifecycle robustness under concurrency.

## Developer Pain Points
- **Large buffer performance**: #8029 is the loudest performance complaint — the prompt editor degrades linearly with buffer size, making "paste big context then edit" workflows painful.
- **Provider API quirks**: None of the issues are about Pi's core design; they're all about third-party provider behavior — DeepSeek message adjacency (fixed), GLM reasoning_effort not sent on the wire (#8190), OpenCode Go endpoint mismatches (#8206), and Kimi/Mistral accounting quirks (#8075, #8069).
- **Catalog reliability**: Both pi.dev timeout (#8198) and silent overlay overrides (#7870) frustrate users who expect predictable model configuration.
- **Windows TUI issues**: #6300 remains open for over a month, suggesting Windows-specific rendering bugs are hard to reproduce or fix from primarily macOS/Linux development environments.
- **Orphaned processes**: #8223 reveals that quitting pi doesn't reliably kill in-flight provider requests — a resource leak that's especially damaging for users running local models on shared GPUs.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-17

## Today's Highlights

The Qwen Code team is doubling down on hardening the agent-team and multi-agent runtime, with six P2 bugs filed around task assignment, message delivery, and session stability. The `/review` autofix pipeline continues to mature with a new "publish-time convergence advisory" design (to combat runaway review loops) and stricter severity-floor enforcement at posting boundaries. A new nightly release (v0.21.11-nightly.20260817) landed with a footprint gate for autofix and positional window censuses, alongside a full benchmark rerun (SWE-bench Verified 500, Terminal-Bench 2.0 89) scoped to a verified DSW package proxy.

## Releases

**v0.21.11-nightly.20260817.195128a17a** — Released August 17, 2026

- `feat(autofix)`: deny-by-default footprint gate and positional window censuses (`@wensao`, PR #9156)
- `fix(web-shell)`: DSW EAS full E2E rerun (r3) — validated against SWE-bench Verified (500) and Terminal-Bench 2.0 (89) after scoping the DSW package proxy to verifier dependency egress only

## Hot Issues

1. **[#9276 — Team members cannot send ordinary messages to their leader](https://github.com/QwenLM/qwen-code/issues/9276)** (P2, bug, multi-agent): A team member's normal status message is misinterpreted as a shutdown request, failing with "Only the team leader can request shutdowns." Core multi-agent reliability issue with 5 comments; multiple related agent-team bugs filed in the same window suggest a broader runtime review is needed.

2. **[#9291 — Unsupported image MIME can abort a Responses-compatible session](https://github.com/QwenLM/qwen-code/issues/9291)** (P2, bug): A `.heic` image forwarded as a data URI to a Responses-compatible endpoint causes hard request-validation failure. Session-abort class bug — a fix PR (#9295) already landed within 24 hours.

3. **[#9290 — Interactive session crashes when opening an errored agent-team tab](https://github.com/QwenLM/qwen-code/issues/9290)** (P2, bug, UI, multi-agent): Selecting a team-member tab with an errored teammate exits the entire interactive session. The only FATAL error boundary around the whole app is too coarse; a fix is in progress (#9292).

4. **[#9089 — PAT-bearing jobs share host with untrusted branch code](https://github.com/QwenLM/qwen-code/issues/9089)** (P1, security, CI/CD): Runner-level isolation gap for autofix PAT-bearing steps. The team explicitly acknowledges this "cannot be closed from inside a GitHub Actions step" — a systemic security concern with maintainer attention.

5. **[#9282 — Manual team task assignment persists without dispatching work](https://github.com/QwenLM/qwen-code/issues/9282)** (P2, bug, multi-agent): `task_update({status: 'in_progress', owner: 'alice'})` succeeds but idle Alice never gets the prompt — only unowned `pending` tasks are auto-claimed. Silent work-loss bug; fix PR #9289 is open.

6. **[#9283 — Agent-team prompts contradict automatic delivery](https://github.com/QwenLM/qwen-code/issues/9283)** (P2, bug, multi-agent): Prompts claim final answers require explicit `send_message`, but the runtime auto-forwards at idle. Documentation/runtime mismatch confuses agents; PR #9284 aligns the text with actual behavior.

7. **[#9278 — Design: /review publish-time convergence advisory](https://github.com/QwenLM/qwen-code/issues/9278)** (P2, feature, development): Addresses the "runaway loop" — reviews that grow diffs and generate more findings (loop gain > 1). Proposes telemetry, diagnosis, and operator-owned posting surfaces. This is the team actively solving its own process pain.

8. **[#5966 — Chinese IME input intermittently fails in UI](https://github.com/QwenLM/qwen-code/issues/5966)** (P2, bug, UI): Open since June with only 5 comments, still unfixed. A long-standing P2 that frustrates Chinese-speaking users (workaround: type pinyin blindly). Community reaction is muted but the issue persists.

9. **[#9234 — Web Shell browser tab crashes on oversized SSE frames](https://github.com/QwenLM/qwen-code/issues/9234)** (P2, bug, perf, daemon): Closed in 24h — fast turnaround on a browser-crash bug affecting `qwen serve` session viewing. Shows healthy issue-to-close velocity for daemon/web-shell issues.

10. **[#9294 — Add ClawMetry to Ecosystem section](https://github.com/QwenLM/qwen-code/issues/9294)** (P3, feature, integration): Community contributor requests a README entry for an open-source observability dashboard with a Qwen Code adapter. Low-stakes, healthy ecosystem signal.

## Key PR Progress

1. **[#9295 — fix(core): omit image media the model endpoint cannot safely consume](https://github.com/QwenLM/qwen-code/pull/9295)**: Fixes #9291 by filtering unsupported MIME types (`image/heic`, `image/tiff`) before forwarding. Fast response to a session-abort bug — created and updated same day.

2. **[#9279 — feat(review): enforce the resolved severity floor at the posting boundary](https://github.com/QwenLM/qwen-code/pull/9279)**: When a review floor resolves to Critical-only, Suggestions are auto-moved to the deferral list inline. Tightens the "5-round freeze" policy with enforcement instead of prose.

3. **[#9289 — fix(core): dispatch manually assigned team tasks to their owner](https://github.com/QwenLM/qwen-code/pull/9289)**: Fixes #9282 by adding direct dispatch for manually assigned `in_progress` tasks. Closes a silent work-loss hole in the multi-agent runtime.

4. **[#9284 — fix(core): align agent-team prompts and TeamCreate description with actual delivery](https://github.com/QwenLM/qwen-code/pull/9284)**: Fixes #9283 by correcting prompt text to match the auto-forward-on-idle runtime behavior. Documentation/behavior consistency for agents.

5. **[#9292 — fix(cli): contain agent-tab render errors instead of exiting the session](https://github.com/QwenLM/qwen-code/pull/9292)**: Fixes #9290 by adding per-tab non-fatal error boundaries. Directly addresses the "one FATAL boundary around the whole app" design flaw.

6. **[#9228 — fix(ci): narrow serve-ab's self-hosted wipe to the A/B checkout dirs](https://github.com/QwenLM/qwen-code/pull/9228)**: Fixes a dangerous `rm -rf` on self-hosted runners that deleted the entire shared workspace (~900 MB `.git` history). Security/correctness fix in CI hygiene.

7. **[#9262 — feat(autofix): audit the approach instead of stopping on growth-budget breach](https://github.com/QwenLM/qwen-code/pull/9262)**: Changes the autofix loop so a growth-budget breach triggers an approach audit, not a cold stop. Prevents the automation from halting on transient diff-size bumps.

8. **[#9247 — fix(review): budget the composed body against GitHub's review limit](https://github.com/QwenLM/qwen-code/pull/9247)**: Trims the composed review body to stay within GitHub's 65,536-character limit (Chinese fold first). Pragmatic local­ization-aware limit handling.

9. **[#9211 — fix(review): lock the PR review worktree lease against concurrent sessions](https://github.com/QwenLM/qwen-code/pull/9211)**: Fixes #9205 — prevents concurrent same-PR reviews from deleting each other's worktree mid-run. Closes a race that destroyed 5+ hours of review work.

10. **[#9216 — feat(release): user-facing bilingual digest for release notes](https://github.com/QwenLM/qwen-code/pull/9216)**: Turns developer-facing PR lists into user-facing capability-themed digests with plain-language intros. Directly improves release note readability for end users.

## Feature Request Trends

- **Copilot authentication** (#9275) — Users with a GitHub Copilot subscription want to reuse that sign-in via `/auth` for Qwen Code. Device-flow reuse expected.
- **Session rotation** (#8927) — Per-channel `sessionRotation` bounds (`maxTurns`, max age) to prevent session staleness. Security/UX driven.
- **Bi-lingual release digests** (#9216) — User-facing digest with Chinese/English folds for release notes. The project is visibly serving a bilingual community.
- **Ecosystem additions** (#9294) — Community members seek README visibility for tools like ClawMetry (observability dashboard with Qwen adapter).
- **File mode configurability** (#9250) — `qwen serve` hard-codes new-file mode 0600, ignoring umask. Users want configurable permissions for daemon-written files.

## Developer Pain Points

- **Multi-agent runtime fragility** — Six P2 bugs in one day (task dispatch, message delivery, prompt consistency, session crashes) signals the agent-team feature was shipped before the runtime fully matured. Community members (`netbrah`) are filing detailed repros and the team is responding with targeted fixes.
- **The `/review` loop gain problem** — The team's own `/review` pipeline runs away: reviews generate findings, fixes grow the diff, which generates more findings. The "convergence advisory" design (#9278) is the formal acknowledgment that this needs telemetry and operator-controlled posting surfaces.
- **Terminal rendering in tmux/remote** (#8962, #5966) — Flickering and IME failures under tmux/remote sessions and Chinese input intermittency. Both are long-standing (June/July) P2s with slow community traction.
- **CI self-hosted runner hazards** (#9228, #9089, #9265) — Wipes deleting entire shared workspaces, PAT exposure on shared hosts, and checkout heal guards being back-ported between workflows. Security and reliability of the self-hosted pool is an active concern.
- **Deferred review findings accumulating** (#9256, #9259, #9264, #9265, #9280, #9285) — A pattern of "deferred findings" issues created by both bots and maintainers. The review process produces a growing backlog of non-blocking-but-verified issues; the team is tracking them systematically but the volume is notable.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-17

## Today's Highlights

The project continues its rapid evolution under the CodeWhale rebrand, with a significant push toward **honest telemetry reporting** (#5459) and **agent tool-schema simplification** (#5458). A notable flurry of activity surrounds the **read-only shell posture for subagents** (#5123, #5426, #5438), which has been a recurring pain point in dogfooding sessions. The team is also actively addressing **wide-terminal layout regressions** (#5322, #5436) and expanding **i18n coverage** across both TUI and web surfaces.

## Releases

**v0.9.8** — Codewhale is now the official public product name from Shannon Labs. The `codewhale` command, npm package, and release assets use lowercase technical identifiers, while the legacy `deepseek-tui` npm package is deprecated and receives no further releases. Users upgrading from v0.8.x legacy `deepseek`/`d…` should migrate to the codewhale toolchain.

*(Note: The release notes were truncated in the data source; this summary reflects the visible portion.)*

## Hot Issues

1. **[#5123 — Agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED](https://github.com/Hmbown/CodeWhale/issues/5123)** (6 comments, open)
   A dogfooded bug where a delegate labeled `builder`/`gates-shell-writer` is given a read-only tool contract, blocking its assigned gates. This highlights a **contract mismatch between role labels and actual shell policies** — a critical reliability gap for subagent workflows. Community reaction has been active, with related fix PRs (#5438) already in flight.

2. **[#2693 — HarnessPosture: model-specific context and subagent policy](https://github.com/Hmbown/CodeWhale/issues/2693)** (6 comments, open)
   Proposes making harness strategy explicit per provider/model route. Testing shows DeepSeek V4 and Xiaomi MiMo v2.5 likely benefit from cache-heavy, prefix-stable starting prompts. This is a **key architectural direction** for optimizing context usage across models.

3. **[#5056 — Test reliability: flaky verifier background tests, /workspace-sensitive fixtures](https://github.com/Hmbown/CodeWhale/issues/5056)** (5 comments, open)
   Persistent flakiness in `run_verifiers_background_*` tests under full-suite parallelism, plus 12 untriaged `#[ignore]`d tests. A **stability concern** for CI that impact developer trust in the test suite.

4. **[#1917 — Universal PreToolUse/PostToolUse hook layer for Cancel/Pause/Resume](https://github.com/Hmbown/CodeWhale/issues/1917)** (5 comments, open)
   A unifying architectural proposal to add hook-based lifecycle controls across all action types. Community interest suggests a **strong demand for finer-grained tool control** and rollback capabilities.

5. **[#5424 — Codewhale TUI crashing after ~1 minute](https://github.com/Hmbown/CodeWhale/issues/5424)** (5 comments, open)
   A crash regression report in v0.9.7. The user reports the app exits by itself after prompting and waiting. **Critical stability issue** with active community engagement.

6. **[#5322 — Output area doesn't fill wide terminals (regression)](https://github.com/Hmbown/CodeWhale/issues/5322)** (5 comments, closed)
   v0.9 capped transcript output at max width, causing cramped text on wide displays. **UX regression** that has now been addressed; a related fix for prose width (#5436) is also merged.

7. **[#5434 — Default DeepSeek route refused — Responses dialect cannot be carried](https://github.com/Hmbown/CodeWhale/issues/5434)** (0 comments, closed)
   Hands-on testing found the default `deepseek-v4-flash` route fails under the `integrations dsh` adapter due to a Responses-dialect mismatch. **Integration compatibility issue** with a focused fix in PR #5445.

8. **[#5436 — Prose wraps at ~105 columns while tool cells run full-width](https://github.com/Hmbown/CodeWhale/issues/5436)** (0 comments, closed)
   Transcript reads left-oriented on wide terminals because prose is capped at 105 columns while tool output fills the width. **UX polish issue** resolved via a new `transcript.prose_measure` config cap.

9. **[#5403 — main is red on both platforms across all four completed runs](https://github.com/Hmbown/CodeWhale/issues/5403)** (2 comments, open)
   CI is consistently failing on macOS (plugin_e2e_acceptance) and Windows (NSIS provisioning). **Release-blocking concern** that needs immediate triage.

10. **[#5426 — Give scouts/reviewers a usable read-only shell](https://github.com/Hmbown/CodeWhale/issues/5426)** (2 comments, closed)
    The `ShellPolicy::ReadOnly` gate is too tight for fleet scouts, denying even canonical inspection commands (`git log`). This design flaw in the classifier was **fixed by splitting the classifier** into appropriate granularity.

## Key PR Progress

1. **[#5459 — Honest context-window, output-ceiling and telemetry provenance](https://github.com/Hmbown/CodeWhale/pull/5459)** (open)
   A "honesty pass" over surfaces that render guessed numbers. Context windows, output ceilings, and telemetry default-on state are now marked, paired with the config key that fixes them. **Strong UX/trust improvement** — unverified numbers no longer masquerade as accurate.

2. **[#5458 — Slim the agent tool schema to 12 advertised fields](https://github.com/Hmbown/CodeWhale/pull/5458)** (open)
   Reduces the model-facing `agent` tool from 33 advertised fields (+20 aliases) to a clean 12. Removed fields remain parse-accepted for transcription compatibility. **Meaningful API simplification** that should reduce model confusion and token overhead.

3. **[#5457 — Deflake agent_focus auto-review receipt test](https://github.com/Hmbown/CodeWhale/pull/5457)** (open)
   Fixes a macOS CI flake in `agent_focus_pty::auto_review_gates_a_workers_call_and_the_receipt_shows_in_focus`. A **test-stability fix** addressing frame-42 assertion mismatch.

4. **[#5445 — Carry Responses-dialect DSH routes via pi-ai openai-responses](https://github.com/Hmbown/CodeWhale/pull/5445)** (closed, closes #5434)
   Fixes the dsh integration refusal of the default DeepSeek route. Adds Responses-dialect support to the adapter. **Integration fix** with verified status/plan/connect flows.

5. **[#5456 — bwrap sandbox container essentials + configurable extra roots](https://github.com/Hmbown/CodeWhale/pull/5456)** (open, closes #5410)
   Adds private `/dev`, `/proc`, `/tmpfs`/tmp mounts to the bwrap sandbox (fixing `/dev/null` EROFS failures) and introduces `bwrap_ro_roots`/`bwrap_rw_roots` config options. **Sandbox usability improvement** for Zig and system-linked development.

6. **[#5450 — Restore session cost when live pricing is unverifiable](https://github.com/Hmbown/CodeWhale/pull/5450)** (open)
   Supersedes #5402. Session cost no longer stays `unverified_live_pricing` forever; falls back to a deterministic estimate instead. **Transparency fix** for session cost display.

7. **[#5446 — Prose fills full content width; add transcript.prose_measure cap](https://github.com/Hmbown/CodeWhale/pull/5446)** (closed, closes #5436)
   Removes the hard-coded 105-column cap on prose rendering; introduces a configurable cap with a default that fills the terminal. **UX fix** for wide-terminal left-orientation.

8. **[#5455 — Signal Cut whale: empty-state hero art + Whale Teams role mapping](https://github.com/Hmbown/CodeWhale/pull/5455)** (open)
   Redraws the empty-state whale with corrected anatomy and adds role mapping from the Whale Teams roster. **Cosmetic/fun improvement** with attention to visual detail.

9. **[#5438 — Scout posture gate must honor read-only shell](https://github.com/Hmbown/CodeWhale/pull/5438)** (open, closes #5426)
   Fixes the mechanism that prevented scouts from running canonical inspection commands (`git log`, etc.). **Critical subagent fix** — the first live dogfood against a freshly built binary exposed this regression.

10. **[#5448 — Fix config/subagent/tool-lifecycle truth drift](https://github.com/Hmbown/CodeWhale/pull/5448)** (open)
    Docs-only truth-up of four scout findings: spawn-depth comments, subagent concurrency docs, output-contract carve-outs, and lifecycle checklist contradictions. **Documentation hygiene** to keep the docs aligned with actual behavior.

## Feature Request Trends

1. **Configurable model-visible limits** — Users with self-hosted long-context models (e.g., DeepSeek V4) want configurable size limits for `read` and other large tool results (#5367). This recurs across multiple issues and suggests a model/harness-profile-level configuration surface.

2. **Granular sandbox configuration** — Beyond the default bwrap setup, users expect configurable extra roots (`bwrap_ro_roots`, `bwrap_rw_roots`). The `/dev/null` EROFS failure (#5410) shows real-world friction with strict sandboxes for compiled-language development.

3. **Hook-based tool lifecycle** — The PreToolUse/PostToolUse proposal (#1917) resonates with the community as a unifying pattern for Cancel/Pause/Resume across all actions, indicating demand for **deterministic rollback and pause controls**.

4. **Model/harness-profile posture** — Issue #2693's HarnessPosture direction (model-specific context and subagent policy) reflects a community desire for **smarter, model-aware prompt management** rather than one-size-fits-all harnesses.

5. **i18n parity across surfaces** — The TUI locale packs are expanding (fr/de/ca/hi/tr/it/pl) with matching web and README translations (#5452, #5454). This signals a strategic push for **global developer adoption**.

## Developer Pain Points

1. **Read-only shell misclassification** — The most visceral pain: labeled `builder` agents self-blocking because the classifier over-restricts read-only shells (#5123, #5426, #5438). This breaks the core promise of labeled subagent roles and is the top issue by engagement.

2. **Test flakiness undermines CI trust** — Background verifier tests flaking under parallelism (#5056), plus macOS/Windows CI staying red (#5403), create a **substantial trust deficit**. Developers can't rely on the test suite for release gating.

3. **Crashes in production use** — Unexpected TUI exit after waiting ~1 minute (#5424) is a "deal-breaker" class bug that erodes confidence in v0.9.x stability.

4. **Wide-terminal layout regressions** — Recurring issues (#5322, #5436) about output not filling terminal width suggest **inadequate responsive-layout testing**. This is a visible UX regression for developers on large monitors.

5. **Sandbox friction for compiled-language workflows** — `swift test` failing inside the sandbox (#2617), bwrap `/dev/null` errors, and system-library linking failures (#5410) indicate the sandbox is **too strict for common development toolchains**, forcing workarounds or disabling sandboxing.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*