# AI CLI Tools Community Digest 2026-08-12

> Generated: 2026-08-12 02:04 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Tool Comparison Report — 2026-08-12

## 1. Ecosystem Overview

The AI CLI developer tool ecosystem is maturing rapidly, with seven major tools actively iterating and addressing community feedback. The landscape shows convergence on cross-session memory, sub-agent reliability, and Windows platform support as universal pain points across all tools. Claude Code leads in community engagement with 10+ hot issues and active PRs, while Gemini CLI and Qwen Code are shipping security patches and feature releases at high velocity. A notable emerging pattern is cross-tool interoperability — OpenCode is adding Claude Code as a runtime, and multiple tools are adopting the Agent Client Protocol (ACP), suggesting a consolidation toward shared standards. The ecosystem is transitioning from "demo-able" to "production-reliable," with billing trust, sandbox stability, and silent failure modes becoming critical differentiators.

## 2. Activity Comparison

| Tool | Hot Issues | Key PRs | Releases (24h) | Engagement Signal |
|------|-----------|---------|----------------|-------------------|
| Claude Code | 10 | 6 | v2.1.228 | 72 comments on Cowork VM issue; 48👍 hidden prompt policy |
| OpenAI Codex | 10 | 10 | 3 alpha builds | 81👍 Windows freeze issue; memory leak new report |
| Gemini CLI | 10 | 10 | 4 (nightly/preview/stable) | P1 subagent false-success and hang issues |
| Copilot CLI | 10 | 3 | None (v1.0.79 latest) | 14👍 Windows plugin lock; 13+ fresh triage issues |
| Kimi Code | 3 | 10 (merged backlog) | None | Memory System request 34 comments over 6 months |
| OpenCode | 10 | 10 | None | 137👍 Go plan usage API; V2 TUI instability cluster |
| Pi | 10 | 10 | None (0.84.1 latest) | 8👍 per-issue average; fast closure on regressions |
| Qwen Code | 10 | 10 | 2 (preview + stable) | Terminal flickering multi-platform cluster |
| DeepSeek TUI | 10 | 9 | None (v0.9.5 pending) | Auto-Review silent blocking = critical regression |

**Release velocity leaders:** Gemini CLI (4 releases), Qwen Code (2), Claude Code (1), OpenAI Codex (3 alpha builds).
**Backlog-clearing signal:** Kimi Code merged 10+ backlogged PRs targeting assert→exception safety and race conditions.

## 3. Shared Feature Directions

**Cross-session Memory & Persistence:**
- **Kimi Code** (#1283): Explicit memory system request, 34 comments, 6 months old
- **OpenCode** (#16017): Go plan usage tracking; location-switch recording in sessions
- **Copilot CLI** (#4441): Durable context across compactions ("anchor" summaries)
- **Gemini CLI**: Auto Memory system in production but criticized for infinite retries (#26522) and pre-redaction exposure (#26525)

**Mechanical Stop & Autonomy Control:**
- **DeepSeek TUI** (#4959): Hard "stop" command that cannot be overridden
- **Claude Code** (#80988): Agent delegation overridden by hidden prompt sections
- **OpenCode** (#28986): Agent self-replies/loops past `finish_reason`
- **Codex** (#29235): Permission prompts despite full-access config

**Cross-tool Runtime Interoperability:**
- **OpenCode** PRs #41901/#41904: Claude Code as ACP runtime
- **Qwen Code** (#8947, #8526): ACP resource guards, reasoning-effort via ACP
- **DeepSeek TUI** (#5225): ACP `session/prompt` gains tool-call capability

**Windows Platform Reliability:**
- **Codex**: Plugin reconciliation failures, 8.8GB memory leak, sandbox ACL gaps (5+ issues)
- **Copilot CLI**: File-lock "Access denied" on plugin update/install (#4095, #4151)
- **Claude Code**: Console flashing (#14828), MSIX write redirection false positive (#84841)
- **Qwen Code**: URL-encoded drive-letter file links (#8644)
- **Kimi Code**: PowerShell 7 D:-drive path bug (#2600)

**Sandbox & Security Model Consistency:**
- **Codex**: Nested git repos, proxy preservation, ACL fixes (Windows)
- **Claude Code**: ARG_MAX sandbox break on macOS (#73468)
- **Copilot CLI**: Enterprise managed sandbox policy (#4446)
- **Gemini CLI**: Missing env-forwarding in sandbox (#24828)

**AST-aware Navigation & Token Reduction:**
- **Gemini CLI** epics (#22745, #22746)
- **Claude Code** / **Pi** / **Qwen**: All addressing context-window efficiency in edit tools

## 4. Differentiation Analysis

**Feature Focus:**

| Tool | Primary Focus | Unique Strengths |
|------|--------------|------------------|
| Claude Code | Enterprise agentic workflows | Cross-session coordination, Cowork VM, hooks ecosystem |
| OpenAI Codex | Multi-modal desktop + CLI | Remote Control sessions, Computer Use plugin, Rust core |
| Gemini CLI | Deep agent autonomy | Subagent delegation, Auto Memory, OAuth breadth |
| Copilot CLI | GitHub native integration | GitHub/VS Code parity, enterprise CI/CD alignment |
| Kimi Code | Lightweight Python CLI | ACP correctness, stability sprint |
| OpenCode | Multi-runtime platform | V2 TUI overhaul, workerd deployment, Claude/Copilot runtimes |
| Pi | Terminal UX purest | Mermaid rendering, intercom, fullscreen polish |
| Qwen Code | Web Shell + daemon | tmux-backed sub-agents, Maven verification, China providers |
| DeepSeek TUI | FOSS cost-transparent CLI | Provider breadth (OrcaRouter), PiP mode, mechanical stop |

**Target Users:**
- **Claude Code / Copilot CLI**: Enterprise developers, compliance-sensitive teams
- **Codex / Gemini CLI**: Power users, agent-first workflows, remote/orchestrated execution
- **Pi / DeepSeek TUI**: CLI purists, self-hosters, cost-sensitive users
- **Qwen Code**: Asia-market developers, Web Shell users, large-scale CI
- **OpenCode**: Platform builders, multi-tool integration engineers

**Technical Approach:**
- **Claude Code**: Monolithic Node.js + VM isolation → high power, high complexity
- **Codex**: Rust alpha re-write → performance but plugin reconciliation debt
- **Gemini CLI**: TypeScript with heavy eval harness → systematic quality
- **Copilot CLI**: Node.js + GitHub extension compatibility layer → tightest GitHub integration
- **Pi / DeepSeek**: Rust/Go terminal-first → UX polish, lightweight footprint

## 5. Community Momentum & Maturity

**Most Active Communities:**
- **Claude Code**: Highest engagement (700+ comments across top issues), strongest upvote base, enterprise-scale expectations — most mature but also most trust-strained (billing disputes, autonomy complaints)
- **OpenAI Codex**: 81👍 Windows issue indicates a large Windows user base; fresh rapid issue acquisition (memory leak, Code Mode correctness) shows active daily users
- **Gemini CLI**: P1-prioritized false-success/hang issues indicate a maturing quality bar; eval infrastructure investment is a strong signal of long-term commitment
- **OpenCode V2 channel**: 137👍 on a billing API request and 7-parity-issue batch from one contributor signal high engagement, but V2 instability (compaction loops, migration failures) is losing some trust

**Rapid Iterators:**
- **Qwen Code**: 2 releases in 24h, daemon resource guards, provider breadth — the fastest shipping cadence alongside feature volume
- **Kimi Code**: Backlog sweep of 10+ PRs signals maintainer availability; the project is stabilizing rather than expanding
- **Pi**: Fast issue-to-PR turnarounds (edit fixes, wire-protocol usage); 0.84.x regression wave hitting but being patched quickly

**At Risk of Community Fatigue:**
- **Copilot CLI**: Fewer PRs (3), v1.0.79 regression cluster, no release in 24h, but 14👍 stability on Windows issue suggests high demand
- **DeepSeek TUI**: v0.9.x stability regressions vs v0.8.67, but a very active community with many contributors shipping fixes daily — quality-of-life (copy rails, snapshot separation) proceeding faster than core stability

**Cross-cutting Maturity Signal:** All tools now have at least one "billing/trust" complaint in flight. Recurring outages or silent mischarges (Claude Code, Codex, Pi login 429s, Qwen CI-exit-code bugs) risk eroding the larger AI CLI community's willingness to rely on these tools for production work.

## 6. Trend Signals

**1. Agent Reliability Is the New Metric.** False-success reporting (Gemini #22323), infinite loops (OpenCode #27924, Gemini #26522), and silent blocks (DeepSeek #5323) all undermine confidence in agentic workflows. Communities are demanding:
- Mechanical kill-switches that bypass model autonomy (DeepSeek #4959)
- A/B-tested success criteria, not confidence-based reporting
- Session recovery and crash-resilient persistence (Claude Code, Pi, Gemini)

**2. Sub-agents Are Moving From Feature to Discipline.** Each tool now supports delegation, but observability, permission enforcement, and context isolation are lagging. Users want subagent trajectories, per-dispatch transcripts (Qwen #8839, Gemini #21763), and explicit revocation of sub-agent autonomy when not requested.

**3. The "Shared Agent Standard" Emerging Around ACP.** Even competing tools (Claude Code, Copilot CLI, OpenCode, Qwen Code, DeepSeek, Pi) are adding ACP support in the same 24-hour window. This is the early stage of a durable industry standard: expect cross-tool agent-to-agent communication, shared MCP servers, and unified permission models within 2–3 quarters.

**4. Windows Is the Undisputed Weakest Platform.** At least 10+ distinct Windows-specific defects across all tools today (plugin locks, console flashing, memory leaks, sandbox ACLs, path encoding). Developers targeting enterprise Windows desktops will face the most friction; tools with fast Windows fixes will gain disproportionate loyalty.

**5. Cost/Billing Transparency Is Trust Currency.** Multiple tools (Claude Code, OpenCode, Qwen, Pi) are fielding issues about consumption visibility, recharge disputes, and live vs verified pricing. Communities increasingly expect:
- Public balance/usage APIs (OpenCode #16017)
- Deterministic redaction before model transmission (Gemini #26525)
- CI-safe exit codes and no silent success-on-failure (Qwen #8920)

**6. Terminal UX Still Matters — and Flicker Breaks Trust.** Qwen's tmux/iTerm flicker reports (macOS + Linux) and DeepSeek's copy-rail pollution show that even small UX defects cause users to switch tools. Terminal rendering quality is becoming a differentiator, not a baseline feature.

**7. Suppliers Are Broadening — Fast.** Provider expansion is now table stakes: OrcaRouter (DeepSeek), Kimi/Xiaomi (Qwen), Qwen CN plan (Pi), and OpenRouter-style keys are being added within days of requests. The market is consolidating around a "bring your own key" model with cross-tool key compatibility.

**8. Eval Infrastructure Is the Unsung Hero.** Gemini CLI's behavioral eval expansion, Kimi's assert→exception hardening, and Pi's regression test additions all point to a shared recognition that reliability is a product, not a patch. Expect more tools to publish public eval harnesses to differentiate reliability claims.

---

### Bottom Line for Decision-Makers

- **Evaluation**: If you need enterprise-grade reliability and trust, track Claude Code's billing/autonomy fixes and Copilot CLI's regression cluster before committing.
- **Integration**: If you build cross-tool agents or plugin ecosystems, OpenCode's ACP-runtime work and the ACP-standard adoption across Qwen/DeepSeek/Pi are the most strategically de-risked bets.
- **Windows-first teams**: Defer or sandbox Codex, Copilot CLI, and Gemini CLI until their Windows stability story improves; Qwen Code and Claude Code are closer to Windows parity (though still far from perfect).
- **Cost-sensitive / self-hosters**: Pi and DeepSeek TUI are moving fastest on transparent cost tracking and provider breadth, albeit with regressions in the 0.84/0.9.x cycles.
- **Long-term ecosystem**: The ACP/MCP convergence and cross-tool compatibility layer (Claude Code → OpenCode → Copilot CLI) are the clearest early signals of a durable multi-agent runtime layer — align at the protocol level, not the CLI level.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data as of 2026-08-12 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following PRs have generated the most discussion and represent the highest-community-activity Skills:

### #1298 — Skill-Creator Eval Fix (Critical Bug Fix)
**Author:** MartinCajiao | **Status:** Open | **Created:** 2026-06-10
[View PR](https://github.com/anthropics/skills/pull/1298)

**Functionality:** Fixes `run_eval.py` which reports `recall=0%` for every skill description, rendering the description-optimization loop (`run_loop.py`, `improve_description.py`) useless. Addresses a critical infrastructure bug blocking skill-creator users from meaningfully iterating on skill descriptions. The fix installs the eval artifact as a real skill, fixes Windows stream handling, trigger detection, and parallel worker issues.

**Discussion highlights:** This is the single most-important pending fix in the ecosystem — 10+ independent reproductions confirmed the bug (#556). It has spawned multiple sibling PRs (#1099, #1050, #1323) attempting the same fix, indicating a fragmented community effort around one bottleneck.

---

### #514 — Document Typography Skill
**Author:** PGTBoos | **Status:** Open | **Created:** 2026-03-04
[View PR](https://github.com/anthropics/skills/pull/514)

**Functionality:** Adds typographic quality control for AI-generated documents: orphan word wrap prevention (1-6 word spills), widow paragraph prevention (stranded section headers), and numbering misalignment fixes. Addresses quality issues affecting *every* document Claude generates but that users rarely explicitly request.

**Discussion highlights:** Positions itself as a universal quality gate for document output — a horizontal skill rather than a format-specific one, making it broadly applicable across the document-skills family.

---

### #538 — PDF Skill Case-Sensitivity Fix
**Author:** Lubrsy706 | **Status:** Open | **Created:** 2026-03-06
[View PR](https://github.com/anthropics/skills/pull/538)

**Functionality:** Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` — `REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`. Critical for case-sensitive filesystems (Linux, macOS) where the existing references break.

**Discussion highlights:** Small PR but high community attention because it exposes a systemic quality issue: the SKILL.md files aren't being validated against their own referenced files, suggesting a gap in the skill-quality tooling.

---

### #486 — ODT Skill (OpenDocument)
**Author:** GitHubNewbie0 | **Status:** Open | **Created:** 2026-03-01
[View PR](https://github.com/anthropics/skills/pull/486)

**Functionality:** Adds a skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods). Triggers on 'ODT', 'ODS', 'ODF', 'OpenDocument', 'LibreOffice document' mentions. Covers ISO-standard open-source document workflows not yet covered by the docx/pdf skills.

**Discussion highlights:** The ODT gap is a widely-felt hole — the document-skills family covers docx, pdf, pptx, xlsx but not the LibreOffice ecosystem. The community sees this as a natural completeness play.

---

### #210 — Frontend-Design Skill Improvement
**Author:** justinwetch | **Status:** Open | **Created:** 2026-01-05
[View PR](https://github.com/anthropics/skills/pull/210)

**Functionality:** Revises the existing frontend-design skill for clarity, actionability, and internal coherence. Every instruction is reworked to be executable within a single conversation, with specific guidance that steers behavior deterministically rather than abstractly.

**Discussion highlights:** Touches on the meta-debate in #202 about whether skills should read as operational instructions to Claude or as documentation for humans. This PR is the concrete attempt to make the frontend-design skill "operational."

---

### #1367 — Self-Audit Skill (v1.3.0)
**Author:** YuhaoLin2005 | **Status:** Open | **Created:** 2026-06-28
[View PR](https://github.com/anthropics/skills/pull/1367)

**Functionality:** A quality-gate skill that audits AI output before delivery: mechanical file verification (Step 0 — verify every claimed output file exists), then a four-dimension reasoning audit in damage-severity priority order. Universal — works with any project, any stack, any model.

**Discussion highlights:** Part of a broader community push (see also #1385, the Reasoning Quality Gate Pipeline proposal) toward systematic output verification rather than trusting model self-reporting. The "mechanical first, reasoning second" ordering is catching attention.

---

### #83 — Skill Quality & Security Analyzers
**Author:** eovidiu | **Status:** Open | **Created:** 2025-11-06
[View PR](https://github.com/anthropics/skills/pull/83)

**Functionality:** Adds two meta-skills to the example-skills marketplace: `skill-quality-analyzer` (evaluates skills across five dimensions: structure/documentation 20%, examples, resources, etc.) and `skill-security-analyzer` (security review for skills). These are "skills about skills" — they analyze and improve other skills.

**Discussion highlights:** Directly responds to the trust-boundary security concern raised in #492. The community wants tooling that can validate skills before installation, especially given the anthropic-namespace impersonation problem.

---

## 2. Community Demand Trends

Distilled from the top Issues, the community's most-anticipated directions:

| Trend | Evidence | Signal |
|---|---|---|
| **Skill validation & security tooling** | #492 (43 comments, namespace impersonation trust boundary), #83 (skill-quality/security analyzers) | Strongest single demand — the community fears untrusted skills with elevated permissions |
| **Org-wide skill sharing & management** | #228 (16 comments, org-wide sharing), #189 (duplicate skill conflicts) | The "skills at scale" problem — distribution, lifecycle, and deduplication |
| **Reliable skill evaluation infrastructure** | #556 (12 comments, eval 0% trigger rate), #1169 (same bug), #1323/#1298/#1099/#1050 (4 competing fix PRs) | Critical infrastructure need — if you can't evaluate, you can't iterate |
| **Output quality gates** | #412 (agent-governance proposal), #1385 (quality gate pipeline), #1367 (self-audit PR) | Systematic verification of AI output before delivery |
| **Context window efficiency** | #1487 (claude-api skill injects 156k tokens), #202 (skill-creator verbosity) | Skills must be lean — token overhead is a first-class concern |

---

## 3. High-Potential Pending Skills

Active-comment PRs not yet merged that may land soon:

- **[#723 — Testing Patterns Skill](https://github.com/anthropics/skills/pull/723)** — Comprehensive testing stack coverage: Trophy model philosophy, unit testing (AAA pattern, naming), React component testing (Testing Library), and what NOT to test. Addresses the full test-generation gap in the official skills collection.

- **[#525 — Pyxel Retro Game Development](https://github.com/anthropics/skills/pull/525)** — Skill for the Pyxel retro/pixel-art/8-bit game engine. Uses pyxel-mcp MCP server with a write → run_and_capture → inspect → iterate workflow. The interactive-capture pattern is a novel approach.

- **[#1479 — Plan-File-Hygiene Skill](https://github.com/anthropics/skills/pull/1479)** — Addresses the accumulation of planning artifacts with no lifecycle (#1417). Built on community framing from @halilxibrahim and @xg-gh-25 — a collaborative origin story that speeds adoption.

- **[#1302 — Color-Expert Skill](https://github.com/anthropics/skills/pull/1302)** — Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912), color space selection tables (OKLCH for scales, OKLAB for gradients, CAM16), and practical color decision-making.

- **[#509 — CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** — Not a skill but foundational infrastructure: community health gap fix (25% → higher via GitHub metrics). Documentation that lowers contribution friction.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for tooling that validates, secures, and evaluates skills themselves — the meta-skills layer — rather than for any single domain-specific skill, with evaluation infrastructure (0% recall bug) as the critical blocker blocking all progress.**

---

# Claude Code Community Digest — 2026-08-12

## Today's Highlights

Release **v2.1.228** lands with fixes for a rare TUI redraw stall, a Windows Git-Bash discovery bug, and a `/tui` revert issue. The community is heavily engaged on a long-standing Cowork VM startup failure (72 comments, 41 👍) and a Windows console-window flashing annoyance (60 comments, 36 👍), while the newest flashpoint is a billing/recharge dispute stemming from Anthropic's July 17 incident — a topic still generating fresh threads.

## Releases

**v2.1.228** — Bugfix release:
- Fixed interactive sessions that could stop redrawing entirely (while the process kept running) after a rare internal layout error.
- Fixed `git` / Git Bash not being found on Windows when Claude Code is launched from a parent folder of the git installation.
- Fixed `/tui` revert behavior.

---

## Hot Issues

1. **[#27801 — Cowork: "Failed to start Claude's workspace" — VM service not running, persists after reboot](https://github.com/anthropics/claude-code/issues/27801)**
   The most active thread (72 comments, 41 👍). A blocking startup failure for the Cowork VM that survives reboots; long-running and unresolved across the user base.

2. **[#14828 — Windows: Console window flashing when executing tools](https://github.com/anthropics/claude-code/issues/14828)**
   High-visibility Windows UX bug (60 comments, 36 👍). Frequent console popups on every tool call; has a repro and is platform scoped but remains open for months.

3. **[#54394 — v2.1.117 embedded ugrep wrapper amplifies regex backtracking into V8-heap-OOM — host freezes on WSL2](https://github.com/anthropics/claude-code/issues/54394)**
   A performance landmine: `grep` invocations routed through the ugrep wrapper can cascade from a process OOM into an 8 GB V8-heap-OOM, freezing the host. 27 comments, 4 👍.

4. **[#80988 — v2.1.219 `heron_brook` prompt section injects "Do not call the AgentTool unless the user requested it" for Opus 5, silently overriding user delegation policy](https://github.com/anthropics/claude-code/issues/80988)**
   A policy/control concern with 21 comments and 48 👍. Users are upset that a hidden prompt section overrides their configured agent-delegation behavior with no opt-out.

5. **[#81703 — July 17 mass billing incident: usage credits charged despite plan allowance; $604.71 automatic recharges disputed](https://github.com/anthropics/claude-code/issues/81703)**
   A serious trust issue (12 comments). Reports of subscription usage being routed to paid credits, with large auto-recharges disputed. Companion thread: [#83062 — $995.67 in two Individual-plan auto-recharges after included limits reset](https://github.com/anthropics/claude-code/issues/83062).

6. **[#79986 — Claude Desktop: external stdio MCP tools announced but never dispatched in Chat mode (zero tools/call)](https://github.com/anthropics/claude-code/issues/79986)**
   A cross-platform MCP regression (15 comments, 8 👍): servers handshake fine but never receive `tools/call` — effectively breaking all stdio MCP tools in Desktop Chat.

7. **[#59408 — Ctrl+C and Ctrl+Shift+C silently clear prompt input with no confirmation or recovery](https://github.com/anthropics/claude-code/issues/59408)**
   A data-loss UX bug on Windows TUI (14 comments, 10 👍) that silently wipes the current prompt with no undo.

8. **[#76727 — Cross-session coordination for independently-launched Claude Code sessions](https://github.com/anthropics/claude-code/issues/76727)**
   A design gap for power users (14 comments) running many independent sessions against one working tree — no first-party coordination primitive beyond build-it-yourself `PreToolUse` hooks.

9. **[#73468 — macOS sandbox unusable: Seatbelt profile passed inline via 'sandbox-exec -p' exceeds ARG_MAX with many git worktrees](https://github.com/anthropics/claude-code/issues/73468)**
   A reproducible macOS sandbox breaker (7 comments, 5 👍): every sandboxed Bash command fails with `E2BIG` when the profile gets too large.

10. **[#84841 — MSIX write redirection is misdetected as a junction-planting attack (PlantDetectedError), breaking Cowork VM SDK install on every app update](https://github.com/anthropics/claude-code/issues/84841)**
    A false-positive security detection (6 comments, 2 👍, closed) that breaks legitimate operations on Windows — a good example of over-eager guardrails.

---

## Key PR Progress

1. **[#70173 — fix(commit-commands): detect [gone] branches with `git branch -vv` in clean_gone](https://github.com/anthropics/claude-code/pull/70173)** *(closed)*
   Fixes a broken `[gone]` detection: `git branch -v` alone doesn't show the tracking status; switches to `-vv`. This makes `/clean_gone` actually delete stale branches.

2. **[#85925 — docs: point remaining stale doc links at code.claude.com](https://github.com/anthropics/claude-code/pull/85925)**
   Cleanup of old `docs.claude.com` redirect links to canonical `code.claude.com` targets across plugins, skills, and issue templates.

3. **[#85822 — docs: fix stale doc links and README drift in plugins and examples](https://github.com/anthropics/claude-code/pull/85822)**
   Companion docs cleanup, verified against live redirects for hooks and plugin references.

4. **[#85834 — fix: HackerOne Bug Bounty Program access issue](https://github.com/anthropics/claude-code/pull/85834)**
   Adjusts `devcontainer.json` so the `hookify` plugin installs correctly, enabling HackerOne bounty access. Note: description is in Russian with an AI-generated helper label.

5. **[#85806 — fix(security-guidance): skip XSS warnings in docs](https://github.com/anthropics/claude-code/pull/85806)**
   Reduces false-positive XSS warnings when patterns appear in documentation, while preserving warnings for executable source — with regression coverage.

6. **[#85243 — fix(skills): use spec-conformant names in the plugin-dev and hookify skills](https://github.com/anthropics/claude-code/pull/85243)**
   Fixes eight bundled skills that declare title-cased names containing spaces — likely breaking skill resolution or spec validation.

7. **[#85716 — fix(hookify): load rules from ancestor .claude directories to prevent silent bypass](https://github.com/anthropics/claude-code/pull/85716)**
   Fixes a silent security failure where `hookify` would miss rules from ancestor `.claude` directories, potentially bypassing configured hooks.

---

## Feature Request Trends

- **Multi-account / multi-instance support** — Repeated requests for multiple Gmail accounts in MCP ([#36024](https://github.com/anthropics/claude-code/issues/36024), 77 👍) and first-class cross-session coordination for parallel sessions ([#76727](https://github.com/anthropics/claude-code/issues/76727)).
- **Better GUI session management** — Users want recently-opened folders added to a persistent list ([#33502](https://github.com/anthropics/claude-code/issues/33502), 37 👍), and the session time-range filter should not be tied to the Group-by state ([#78775](https://github.com/anthropics/claude-code/issues/78775)).
- **More governance and control** — Opt-outs for injected system-prompt sections like `heron_brook` ([#80988](https://github.com/anthropics/claude-code/issues/80988)) and user-defined delegation policies that aren't silently overridden.

---

## Developer Pain Points

- **Prompt-injection and autonomy concerns** — Multiple threads report Claude Code ignoring explicit instructions and acting autonomously ([#71576](https://github.com/anthropics/claude-code/issues/71576), [#74848](https://github.com/anthropics/claude-code/issues/74848), [#75232](https://github.com/anthropics/claude-code/issues/75232)); some users are so frustrated they openly say they're switching to Chinese models ([#85973](https://github.com/anthropics/claude-code/issues/85973)).
- **Token/credit burn from over-delegation** — Parallel agent spawning consumes millions of tokens before crashing ([#67636](https://github.com/anthropics/claude-code/issues/67636)), and billing incidents are eroding trust ([#81703](https://github.com/anthropics/claude-code/issues/81703), [#83062](https://github.com/anthropics/claude-code/issues/83062)).
- **Windows and macOS platform regressions** — Persistent issues with console flashing ([#14828](https://github.com/anthropics/claude-code/issues/14828)), sandbox `E2BIG` on macOS ([#73468](https://github.com/anthropics/claude-code/issues/73468)), and MSIX false positives ([#84841](https://github.com/anthropics/claude-code/issues/84841)) suggest platform-specific QA is a recurring weak spot.
- **Hidden prompt sections and opaque behavior** — Users are pushing back on undocumented system-prompt injections that override their configuration, demanding visibility and opt-outs.
- **Memory/instruction fidelity** — Reports of instructions being read, acknowledged, then ignored — with memory notes colliding and the wrong one winning ([#85677](https://github.com/anthropics/claude-code/issues/85677)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-12

## Today's Highlights
The Codex community remains heavily focused on Windows desktop stability, with recurring bundled-plugin reconciliation failures and performance regressions dominating the issue tracker. A fresh memory-leak report on the latest Windows build (#38059) and a concerning macOS regression affecting Remote Control sessions (#37403) are the most active new threads. On the PR side, the focus is on internal robustness—reducing cloning overhead, improving MCP OAuth registration, and tightening Windows sandbox ACLs.

---

## Releases
Three new Rust alpha builds were published in the last 24 hours, with no public change notes:

- **[rust-v0.148.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9)** — Alpha build
- **[rust-v0.148.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.8)** — Alpha build
- **[rust-v0.148.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.7)** — Alpha build

---

## Hot Issues

1. **[#20214 — Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)** (96 comments, 👍 81)  
   The single most-engaged issue on the tracker. Users with ample system resources still experience UI freezes and stutters. The high reaction count signals a widespread Windows performance problem that has persisted for months without a clear fix.

2. **[#38059 — Memory grows to 8.8 GB while idle; UI freezes after 1–2 messages](https://github.com/openai/codex/issues/38059)** (3 comments)  
   A fresh report on the latest Windows build showing severe memory bloat and UI lockups. This could be a new regression and is critical to watch—especially given the volume of unresolved Windows performance issues.

3. **[#37403 — macOS regression: Desktop cannot resume Remote Control / CLI thread](https://github.com/openai/codex/issues/37403)** (10 comments, 👍 9)  
   After the August 7 macOS desktop update, resuming a Remote Control thread fails with `already has an active writer`. This breaks a core cross-device workflow and has quickly gained traction.

4. **[#25391 — Windows Computer Use plugin fails to bootstrap: native pipe path unavailable](https://github.com/openai/codex/issues/25391)** (23 comments)  
   Computer Use on Windows fails at bootstrap due to an unavailable native pipe path. This is one of several closely-related Computer Use bootstrap failures, suggesting a systemic Windows packaging or runtime issue.

5. **[#21670 — Chrome plugin and Browser Use setup hang; uninstall fails with OS error 5](https://github.com/openai/codex/issues/21670)** (15 comments, 👍 7)  
   A compound failure: the Chrome plugin is slow/unreliable, setup calls hang, and uninstall fails due to a permissions error. Community impact is high because it blocks both browser automation and cleanup.

6. **[#29235 — Codex asks for permission despite full access and approval prompts disabled](https://github.com/openai/codex/issues/29235)** (3 comments, 👍 16)  
   High community agreement (16 👍) on a behavioral bug: Codex repeatedly prompts for approval even when the thread is configured for full access and no approvals. This breaks flow for power users.

7. **[#30270 — Bundled plugins disappear after Windows app updates](https://github.com/openai/codex/issues/30270)** (12 comments)  
   A recurring theme: after MS Store updates, bundled Browser/Chrome/Computer Use plugins vanish due to a stale bundled marketplace path. Multiple duplicates exist (e.g., #26792, #26501), indicating a systemic update-path defect.

8. **[#34244 — Windows Desktop freezes during bundled-plugin reconcile for ~61s](https://github.com/openai/codex/issues/34244)** (5 comments, 👍 2)  
   `plugin/list` and `app/list` block for over a minute during startup. This directly impacts usability and is likely tied to the same bundled-marketplace reconciliation debt.

9. **[#35764 — Codex CLI accumulates ~650k open file descriptors on FreeBSD](https://github.com/openai/codex/issues/35764)** (3 comments)  
   A severe resource leak: kqueue EVFILT_VNODE watchers accumulate and wedge unrelated processes. This is concerning for FreeBSD users and suggests missing watcher cleanup logic.

10. **[#38093 — Code Mode `functions.wait` can report completion while child processes run](https://github.com/openai/codex/issues/38093)** (2 comments)  
    A correctness bug in Code Mode: the runtime can report a cell as terminal while child processes are still alive. This undermines trust in command execution guarantees.

---

## Key PR Progress

1. **[#38089 — Add CIMD support to MCP OAuth registration](https://github.com/openai/codex/pull/38089)**  
   Prefers Client ID Metadata Documents (CIMD) for public-client OAuth when the server advertises support, falling back to Dynamic Client Registration. Improves MCP auth interoperability.

2. **[#38092 — Simplify queued user message admission](https://github.com/openai/codex/pull/38092)**  
   Resolves message admission earlier—when Core accepts the input—rather than waiting for rollout persistence. Removes persistence/hook-specific admission errors and simplifies task bookkeeping.

3. **[#38080 — Allow nested Git repositories in the Windows sandbox](https://github.com/openai/codex/pull/38080)**  
   Fixes a sandbox limitation where nested repos were rejected. Adds both the worktree root and a `/*` wildcard to the trusted Git config paths.

4. **[#38064 — Grant Windows sandbox access to the Codex app root](https://github.com/openai/codex/pull/38064)**  
   Applies a read/execute ACL to the Codex application root, handling the managed runtime cache separately. Reduces permission-related failures in sandboxed execution.

5. **[#38061 — Preserve proxy settings for Windows sandbox debug sessions](https://github.com/openai/codex/pull/38061)**  
   Stops `codex sandbox` debug commands from reconciling persistent proxy settings, preventing session interference.

6. **[#38087 — Route gRPC code-mode sessions through the shared HTTP client](https://github.com/openai/codex/pull/38087)**  
   Makes gRPC connections respect outbound proxy and custom CA configuration via `HttpClientFactory`, while rejecting unsupported endpoints.

7. **[#38078 — Reduce cloning in world-state patch handling](https://github.com/openai/codex/pull/38078)**  
   Deserializes typed section snapshots directly from borrowed JSON and applies merge patches in place—reducing memory and CPU overhead in hot paths.

8. **[#38075 — Respect rendered width when adding TUI history](https://github.com/openai/codex/pull/38075)**  
   Initializes chat widgets with current terminal width and uses actual render mode/width for history visibility. Fixes TUI layout issues, including ambient-pet reservations.

9. **[#38081 — Use `ReviewDecision` for MCP tool approvals](https://github.com/openai/codex/pull/38081)**  
   Introduces a unified approval path with a new `ApprovedMcpPolicyAmendment` type supporting persistent, cross-session MCP approvals and consistent rejection/timeout semantics.

10. **[#38074 — Track implicit executor skill invocations](https://github.com/openai/codex/pull/38074)**  
    Detects executor-owned skill document reads and script executions across native and URI-based working directories, and emits analytics only for the active execution environment.

---

## Feature Request Trends

- **RISC-V Linux support**: [#6150](https://github.com/openai/codex/issues/6150) requests `riscv64` support for Ubuntu 24.04. Community interest is modest (👍 9) but represents a growing architecture-expansion demand.
- **Plugin/skill lifecycle robustness**: Multiple requests (e.g., [#20946](https://github.com/openai/codex/issues/20946), [#30993](https://github.com/openai/codex/issues/30993)) ask for reliable bundled-skill materialization and stale-plugin resolution, indicating a desire for deterministic, transactional plugin management.
- **Model provider transparency**: [#24648](https://github.com/openai/codex/issues/24648) highlights that omitted `modelProviders` fields are incorrectly treated as filters, a correctness issue for third-party app-server integrations.
- **Cross-platform parity**: The persistent FreeBSD FD leak, Linux riscv64 gap, and macOS Remote Control regression together signal demand for more uniform platform support and testing.

---

## Developer Pain Points

- **Windows bundled-plugin instability dominates**: At least 10+ active issues across the last month describe the same class of failure—after an MS Store update, the bundled marketplace enters a partial/corrupt state, causing Browser, Chrome, and Computer Use plugins to silently disappear or become uninstallable. Contributors report being stuck in a loop of manual cache deletion and reinstall with no durable fix.
- **Performance regressions on Windows are severe and recurring**: From 8.8 GB idle memory growth (#38059) to 61-second UI freezes during plugin reconcile (#34244) and long-standing stutter reports (#20214), Windows developers are repeatedly losing productivity to app-level performance issues.
- **Permission and sandbox inconsistencies frustrate power users**: The disconnect between configured full access and actual approval prompts (#29235) undermines trust, while sandbox ACL gaps on Windows require repeated hotfixes rather than a comprehensive policy model.
- **State correctness issues in async execution**: New reports like #38093 (false completion in Code Mode) and #35764 (FD/kqueue leaks) point to deeper concurrency/resource-management debt in the CLI runtime, which is especially concerning for long-running or automated workflows.
- **Remote control and cross-device workflows are fragile**: The macOS regression (#37403) has high visibility, and together with the thread-list hangs in scheduled runs (#35030), it signals that remote and automated orchestration paths are not yet hardened.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-12

## Today's Highlights
A busy day for the Gemini CLI project: three releases landed, including a security-focused patch release (v0.55.1) and two pre-release builds. The team also merged a significant fix for false model capacity exhaustion errors—a long-standing pain point for users hitting spurious 429s—and continues to harden the agent subsystem with several critical bug fixes in flight. The community remains most vocal about subagent reliability, shell hang issues, and the Auto Memory system's security and efficiency concerns.

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.56.0-nightly.20260812](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260812.g5024443c7) | Nightly | Fixes false model capacity exhaustion errors and core quota lookup model mapping ([#28730](https://github.com/google-gemini/gemini-cli/pull/28730)); adds local eval report command and developer docs ([#28369](https://github.com/google-gemini/gemini-cli/pull/28369)) |
| [v0.56.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-preview.1) | Preview | Changelog and version bump for preview channel |
| [v0.55.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.1) | Stable patch | Fixes release verification npm CI issues ([#28116](https://github.com/google-gemini/gemini-cli/pull/28116)), prevents workspace binary shadowing in CI ([#28132](https://github.com/google-gemini/gemini-cli/pull/28132)), and includes tool registry work |
| [v0.55.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.3) | Preview patch | Cherry-picks capacity exhaustion fix to preview branch ([#28771](https://github.com/google-gemini/gemini-cli/pull/28771)) |

## Hot Issues

1. **[#22323: Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — Critical bug where `codebase_investigator` reports false success after hitting max turns. This masks real failures and undermines trust in agent output. 12 comments, p1 priority.

2. **[#21409: Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** — Users report the generalist agent hangs indefinitely (up to an hour) on simple tasks. Workaround: explicitly disable subagent delegation. 8 comments, 8 upvotes, p1.

3. **[#25166: Shell execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** — After completing simple CLI commands, the shell hangs showing "Awaiting user input." Extremely disruptive for automation. 4 comments, 3 upvotes, p1.

4. **[#24353: Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** — Epic tracking expansion of behavioral evals from 76 tests to broader component coverage. Signals the team's investment in systematic quality. 7 comments.

5. **[#22745: AST-aware file reads and search](https://github.com/google-gemini/gemini-cli/issues/22745)** — Investigation epic into whether AST-aware tools can reduce token noise and misaligned reads. Could significantly improve agent efficiency. 7 comments.

6. **[#21968: Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — Community frustration: custom skills exist but the agent rarely self-initiates them, requiring explicit user instruction. 6 comments.

7. **[#26522: Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — Memory extraction agent can loop on unprocessed sessions, wasting tokens and time. Part of broader memory system issues. 5 comments.

8. **[#24828: Sandbox doesn't forward GOOGLE_GENAI_API_VERSION](https://github.com/google-gemini/gemini-cli/issues/24828)** — Blocks Vertex-compatible API paths in sandbox mode, causing 404 errors. Environmental variable forwarding gap. 5 comments.

9. **[#26525: Add deterministic redaction to Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)** — Security concern: transcripts are sent to models before redaction, and logging may leak skill contents. P2 security issue. 4 comments.

10. **[#22093: Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** — Users report agents executing despite being disabled in config. Serious compliance/trust regression. 3 comments.

## Key PR Progress

1. **[#28730: Fix false model capacity exhaustion and quota mapping](https://github.com/google-gemini/gemini-cli/pull/28730)** (merged) — Resolves spurious 429 errors, fixes client-side quota model mapping, and preserves "Keep trying" UI during transient surges. Shipped in nightly and preview releases.

2. **[#28780: Upgrade shell-quote to 1.8.4 (CVE-2026-9277)](https://github.com/google-gemini/gemini-cli/pull/28780)** (open) — Critical security fix for command injection vulnerability in dependencies.

3. **[#28778: Upgrade simple-git to 3.32.3 (CVE-2026-28292)](https://github.com/google-gemini/gemini-cli/pull/28778)** (open) — Another critical CVE fix, this time for the git integration layer.

4. **[#28729: Fix swallowed directory mismatch in IDE connections](https://github.com/google-gemini/gemini-cli/pull/28729)** (closed/merged) — Resolves connection failures with IDE extensions under Cider, VS Code forks, and remotes with virtual/FUSE paths.

5. **[#28688: Dynamically resolve Cloud Workstations proxy redirect for OAuth](https://github.com/google-gemini/gemini-cli/pull/28688)** (closed/merged) — Fixes OAuth failures in Google Cloud Workstations VMs by resolving proxy redirect URIs dynamically instead of hardcoding localhost.

6. **[#28369: Add local eval report command and developer docs](https://github.com/google-gemini/gemini-cli/pull/28369)** (merged) — Adds `npm run eval:report` to aggregate pass rates by model from Vitest reports; improves behavioral eval workflow.

7. **[#28305: Add tool call formatter for eval failures](https://github.com/google-gemini/gemini-cli/pull/28305)** (open) — When evals fail, prints compact numbered timeline of agent tool calls with status and error details for faster debugging.

8. **[#28599: Classify capacity exhaustion as terminal to prevent retry hangs](https://github.com/google-gemini/gemini-cli/pull/28599)** (closed/merged) — Fixes client-side hangs when backend returns `MODEL_CAPACITY_EXHAUSTED` without retry delay; triggers immediate fallback chain.

9. **[#28679: Improve Vertex AI 401 error message](https://github.com/google-gemini/gemini-cli/pull/28679)** (open) — Better DX when users configure vertex-ai auth but only have a standard Gemini API key; clear guidance on correct setup.

10. **[#28581: Skip diff hunk markers during @ processing](https://github.com/google-gemini/gemini-cli/pull/28581)** (open) — Prevents diff hunk markers from being interpreted as file references, eliminating recursive workspace glob searches that cause heap growth on large diffs.

## Feature Request Trends

- **AST-aware code navigation** (#22745, #22746): Multiple epics explore using AST-aware tools for precise method-bound reads, better codebase mapping, and reduced token noise. The team recommends `tilth` or `glyph` as starting points.
- **Subagent observability and control** (#22598, #21763): Users want subagent trajectories visible in `/chat share`, bug reports to include subagent context, and better self-awareness of agent capabilities (#21432).
- **Enhanced agent resilience** (#22232, #21983): Browser agent needs session takeover, lock recovery, and better Wayland support; broader fixes for subagent permission enforcement (#22093).
- **Safety and destructive action prevention** (#22672): Community requests for agents to prefer safe alternatives over `git reset --force` and understand impacts of destructive database operations.
- **Behavioral eval expansion** (#24353): Systematic investment in component-level evaluation infrastructure to catch regressions before release.

## Developer Pain Points

- **Subagent reliability** is the #1 theme: false success reporting (#22323), indefinite hangs (#21409), running without permission (#22093), and incomplete context in diagnostics (#21763) erode trust in agentic workflows.
- **Shell hang issues** persist (#25166), blocking simple automation and requiring manual intervention; these have been open for months.
- **Auto Memory system** has multiple open complaints: indefinite retries on low-signal sessions (#26522), security concerns about pre-redaction transcript exposure (#26525), and silently skipped invalid patches (#26523).
- **Configuration and environment gaps** frustrate users: sandbox doesn't forward `GOOGLE_GENAI_API_VERSION` (#24828), browser agent ignores `settings.json` overrides (#22267), and terminal rendering issues remain (#21924, #24935).
- **Dependency security** is being actively addressed but highlights broader supply-chain risk: two critical CVEs (shell-quote, simple-git) landed in the same release window.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-12

## Today's Highlights
The community continues to surface regressions in recent releases, with v1.0.79 drawing focus for issues around model configuration and skill resolution. No new releases landed in the past 24 hours, but fresh triage issues (13+) reveal a recurring theme: Copilot's compatibility layer with Claude Code conventions (`.claude/rules`, `AGENT.md`) is generating friction. The most upvoted open issue remains the Windows plugin update bug, now at 14 👍, signaling long-running platform pain.

## Releases
No new releases in the last 24 hours. Current latest remains **v1.0.79**.

## Hot Issues
1. **[#4095 — Windows: plugin update fails with "Access is denied" while VS Code runs (👍 14)**](https://github.com/github/copilot-cli/issues/4095)
   Copilot extension holds watcher handles on installed plugins, blocking updates. Long-standing and heavily upvoted; affects all Windows users with VS Code open.

2. **[#4151 — plugin install fails with Access is denied on Windows for all sources (👍 1)**](https://github.com/github/copilot-cli/issues/4151)
   Campaign for the same root cause as #4095 but for initial installs. Marketplace, GitHub, and local directory sources all fail with `os error 5`.

3. **[#4422 — All Claude models disabled under CLI model selection (👍 3)**](https://github.com/github/copilot-cli/issues/4422)
   Enterprise users suddenly unable to select Claude models despite them being enabled in Copilot settings. Downgrade doesn't help — suggests a server-side policy issue. High visibility with 3 upvotes in 3 days.

4. **[#4251 — Resume of a large session OOMs / grinds one CPU core for ~70 min in v1.0.74 (👍 1)**](https://github.com/github/copilot-cli/issues/4251)
   Regression between v1.0.73 and v1.0.74 causing 3–4× memory usage on session resume. The A/B test isolation is exemplary; session durability is critical to daily users.

5. **[#4431 — Using `/model config` wipes all settings](https://github.com/github/copilot-cli/issues/4431)**
   In v1.0.79, setting a user-wide default model clobbers the entire `settings.json`. Data-loss bug on a core workflow — closed but likely reopens after triage.

6. **[#4211 — Copilot CLI couldn't handle BigInt in structured MCP response](https://github.com/github/copilot-cli/issues/4211)**
   `BigInt` serialization crash aborts all running tasks. Signals incomplete MCP spec support; any tool returning large numbers breaks the session.

7. **[#4380 — Rubber Duck reviews use same model family as primary session (👍 0)**](https://github.com/github/copilot-cli/issues/4380)
   The adversarial reviewer — designed to be independent — often samples the same model family, degrading review quality on models like 5.6 Terra Max.

8. **[#4432 — rubber-duck: model-emitted `model` argument silently overrides complementary strategy](https://github.com/github/copilot-cli/issues/4432)**
   Follow-on to #4380: the model can emit an explicit `model:` argument that bypasses the intended cross-family review. Design flaw, not just a bug.

9. **[#4431 — Claude Code compatibility issues: `.claude/rules` and `.claude/agents/*/AGENT.md`](https://github.com/github/copilot-cli/issues/4440)**
   Duplicate instruction maintenance across `.github/instructions/` and `.claude/rules`; plus `AGENT.md` `model:` fields override session models. Suggests demand for a shared agent-standard compatibility layer.

10. **[#3976 — Native `tgrep` indexer OOM-kills the host on large monorepos (👍 0)**](https://github.com/github/copilot-cli/issues/3976)
    The trigram indexer for `experimental tgrep` spawns a persistent daemon with no memory cap; can bring down the host. A silent reliability hazard for monorepo users with the experiment flag.

## Key PR Progress
Only 3 PRs were active in the last 24 hours:

1. **[#4449 — Migrate pull request automation away from `pull_request_target`](https://github.com/github/copilot-cli/pull/4449)**
   Security hardening: moves PR-driven workflows to lower-privilege execution. Draft status; signals the maintainers are tightening CI/CD supply chain.

2. **[#4428 — Add initial devcontainer configuration](https://github.com/github/copilot-cli/pull/4428)**
   Adds a repository devcontainer for contributors. Lowers the barrier for Windows users hitting access-denied issues, since builds can happen inside a Linux container.

3. **[#4452 — Revert 5 copilot/fix with copilot](https://github.com/github/copilot-cli/pull/4452)**
   Closed revert PR — likely a bot-generated cleanup that was rejected or superseded.

## Feature Request Trends
- **Explicit file edit review (approve/reject per change)** — #4444; users want guardrails against "AI slop code" with fine-grained control beyond current permission prompts.
- **Persistent auto-allow permissions** — #3877; power users want `permissions.auto_allow_all` as a session-start setting, not a per-session command.
- **Enterprise policy for sandbox / CLI enforcement** — #4446; large orgs want GitHub-managed enablement of the CLI sandbox, not per-user configuration.
- **Durable context across compactions** — #4441; repeated compactions are recursively lossy; early decisions degrade with each cycle. Demand for a persistent "anchor" summary.
- **Read `.claude/rules` and `.agents/rules`** — #4440; users running both Claude Code and Copilot CLI want a single source of truth for instructions.
- **Read-only path distinction in permissions** — #4443; users want permission prompts to distinguish read-only commands (`docker compose ps`) from writes outside the cwd.

## Developer Pain Points
- **Windows is the sore spot.** Two plugin file-lock issues (#4095, #4151) remain open with no fix, and the devcontainer PR suggests even contributors are moving to Linux to escape.
- **v1.0.79 regressions are accumulating**: `/model config` wipes settings (#4431), backspace deletes words instead of characters (#4447), and user-level model defaults aren't applied to new sessions (#4434).
- **Model selection is confusing and fragile.** Auto mode can pick unavailable reasoning levels (#4445), enterprise policies silently disable Claude models (#4422), and rubber-duck independence is broken (#4380, #4432).
- **MCP interop is a recurring theme**: BigInt serialization failures (#4211) and RFC 8414 issuer mismatches with GitLab (#4439) show the MCP surface is still maturing.
- **Skills and agents have resolution bugs**: duplicate loading (#4430), `disable-model-invocation` making skills unreachable (#4438), explicit slash skills failing with "Skill not found" (#4451), and `AGENT.md` model overrides breaking BYOK (#4437). A cluster that suggests the skill registry logic needs a deeper audit.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-12

## 1. Today's Highlights

The community's focus is split between a long-awaited **Memory System** feature request (#1283) that has gathered 34 comments over six months, and a fresh wave of **Windows/PowerShell path handling bugs** (#2600) affecting the 0.33 release. Meanwhile, the maintainer team has been quietly sweeping through a backlog of older PRs, merging several quality-of-life fixes centered on replacing unsafe `assert` statements with proper exceptions and resolving file race conditions — a strong signal that stability and correctness are the current priority.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Hot Issues

**Most Active & Impactful**

- **[#1283 — Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** — The single most-discussed open issue (34 comments). Users want Kimi CLI to remember project patterns, preferences, and context across sessions via both AI-managed automatic notes and user-defined manual memory. The sustained engagement (~6 months) suggests this is the community's #1 requested capability and a major differentiator if shipped.

- **[#2600 — PowerShel7 default D: drive startup breaks path resolution](https://github.com/MoonshotAI/kimi-cli/issues/2600)** — A 0.33 regression on Windows. When users set PowerShell 7 to launch from the D: drive, `kimi code` fails to resolve the working directory. Core-path reliability issues like this are high-priority since they block all functionality.

**New Feature Requests**

- **[#2601 — Quote & Reply: comment on any selected part of an AI response](https://github.com/MoonshotAI/kimi-cli/issues/2601)** — Users want to select specific spans (a paragraph, a code block, a diff line) and attach follow-up questions directly to that selection — a context-precise interaction model akin to GitHub PR review comments or Notion-style anchored comments. This could significantly improve multi-turn debugging and review workflows.

**Worth Monitoring (Closed/Stale Context)**

- No other issues received meaningful updates within the window; the overwhelming majority of activity is concentrated on the three above.

## 4. Key PR Progress

The maintainers merged a substantial batch of backlogged PRs — all by contributor `hobostay` except where noted. This clearly signals a **stability-and-correctness sprint**:

**Bug Fixes (Merged)**

- **[#2057 — Replace assert with RuntimeError in acp/session.py](https://github.com/MoonshotAI/kimi-cli/pull/2057)** — Critical because Python's `-O` flag silently strips `assert` statements; replacing them with explicit exceptions ensures production invariant checks survive optimization.

- **[#2056 — Fix TOCTOU race in WireFile.append_record](https://github.com/MoonshotAI/kimi-cli/pull/2056)** — Eliminates a check-then-use window where a file could be deleted between `exists()` and `stat()`. Important for concurrent file operations in long-running sessions.

- **[#2055 — Replace assert with AgentSpecError in agentspec.py](https://github.com/MoonshotAI/kimi-cli/pull/2055)** — Same `-O` safety fix applied to agent spec schema validation.

- **[#1328 — Fix replacement count calc and UI feedback bugs](https://github.com/MoonshotAI/kimi-cli/pull/1328)** — Corrects `StrReplaceFile`'s replacement-count computation when multiple edits accumulate, plus minor UI feedback improvements. Affects the accuracy of multi-edit file modifications.

- **[#1082 — Filter non-existent dateparser cache files in PyInstaller](https://github.com/MoonshotAI/kimi-cli/pull/1082)** — Fixes packaging crashes in fresh/CI environments where the lazily-generated `dateparser_tz_cache.pkl` doesn't exist yet.

- **[#1077 — Remove redundant mode validation in WriteFile](https://github.com/MoonshotAI/kimi-cli/pull/1077)** — Simplifies code by removing a duplicate check that the `mode` parameter was already validating against the enum/union type.

- **[#1393 — Route shell commands through terminal args (ACP)](https://github.com/MoonshotAI/kimi-cli/pull/1393)** — Contributor `hanhan3344` fixes ACP Shell execution to pass the shell binary in `command` and invocation in `args` — a correctness fix for both bash and PowerShell environments with a regression test.

**Open Feature Work**

- **[#2509 — Configurable thinking effort and /effort command (Open)](https://github.com/MoonshotAI/kimi-cli/pull/2509)** — Adds a `/effort` command and config for `reasoning_effort` (resolving #2501, building on #318). This directly addresses users who want to dial reasoning depth up/down per-task — currently the only open feature PR with momentum.

## 5. Feature Request Trends

Distilling all open issues, three clear directions emerge:

| Trend | Representative Issues | Community Sentiment |
|---|---|---|
| **Persistent Memory** — cross-session context, project patterns, auto/manual memory | #1283 (flagship, 34 comments) | High demand, sustained months; likely a "must-have" for production use |
| **Anchored/Contextual Interactions** — select-and-comment on specific response spans, quote-and-reply | #2601 (new) | Emerging; users want finer-grained control over follow-ups and reviews |
| **Reasoning/Effort Controls** — configurable token effort per task (e.g., `/effort` command) | PR #2509, related issues #2501 / #318 | Moderate; power users want dynamic trade-offs between speed and depth |

Minor themes include environment/path robustness (Windows, alternative shells) and improved UI feedback.

## 6. Developer Pain Points

- **Windows/shell path fragility** — The PowerShell 7 D:-drive bug (#2600) is the latest in a recurring theme: path resolution issues on non-standard Windows setups. Developers using custom shells or non-C: drives are being actively blocked.

- **Production reliability under optimization** — The wave of `assert` → exception PRs reveals a latent concern: Python `-O` flag silently disabling critical invariant checks. This indicates users run Kimi CLI with optimized interpreters in production and are hitting undetected contract violations.

- **Concurrency/race conditions** — The TOCTOU fix (#2056) highlights that parallel file operations (wire logging, multi-tool sessions) are prone to intermittent crashes — a class of bugs that's hard to reproduce but severe in practice.

- **Version-specific regressions** — The 0.33 release introduced the PowerShell path bug, showing that new versions are shipping with platform-specific regressions that immediately surface in user environments.

- **Memory loss across sessions** — The long-running #1283 thread reflects deep frustration with re-explaining context, project conventions, and user preferences on every new session — a productivity tax that users increasingly expect tools to eliminate.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-12

## Today's Highlights
The V2 (next channel) TUI continues to dominate the issue tracker, with a cluster of ALSA audio errors corrupting terminal displays on Linux and a critical webfetch regression in Code Mode. Meanwhile, kitlangton has landed a series of polish fixes for the V2 TUI, and a new PR adds Claude Code as an ACP runtime, hinting at broader interoperability ambitions. A flurry of new slash-command feature requests from a single contributor suggests a growing appetite for Claude Code-style workflow commands.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#16017 — [CLOSED] Go plan usage/balance API endpoint** — 137 👍, 34 comments.  
   The most-upvoted issue today, requesting a public API for Go plan subscription usage data (rolling/weekly/monthly windows), mirroring dashboard functionality. High demand suggests users want programmatic access to their consumption.  
   https://github.com/anomalyco/opencode/issues/16017

2. **#27924 — Infinite compaction loop when compression fails** — 8 comments.  
   A session loop in `prompt.ts` can enter an endless `overflow → compact → overflow` cycle when compaction fails to reduce context below the token limit. This can render sessions unusable and burn tokens indefinitely.  
   https://github.com/anomalyco/opencode/issues/27924

3. **#41763 — [2.0] ALSA errors flood and corrupt the terminal** — 4 comments.  
   On Linux hosts without a sound card, ordinary TUI interaction repeatedly initializes ALSA, printing diagnostics directly over the interface and corrupting the display. A fix PR is already open.  
   https://github.com/anomalyco/opencode/issues/41763

4. **#41777 — [2.0] webfetch in Code Mode returns null (regression)** — 3 comments.  
   The built-in `webfetch` tool inside Code Mode reports success but returns `null`. Regression window identified between two specific next-channel builds — actionable for maintainers.  
   https://github.com/anomalyco/opencode/issues/41777

5. **#39831 — Zen: gpt-5.6-luna/terra fail with "Upstream request failed"** — 5 comments.  
   Specific Zen models consistently fail with HTTP 403 while `gpt-5.4-nano` works. This suggests a model-variant-specific routing/auth issue in the Zen provider.  
   https://github.com/anomalyco/opencode/issues/39831

6. **#41848 — LLM retry has no max attempts: infinite retry loop, UI stuck on "Thinking"** — 2 comments.  
   `RETRY_MAX_DELAY` is set to ~24 days, so stream errors trigger infinite retries with no error feedback — the UI hangs on "Thinking..." forever. Five processes died on `llm runtime selected`.  
   https://github.com/anomalyco/opencode/issues/41848

7. **#41806 — Instance bootstrap hangs forever (Linux): zombie git child never reaped** — 2 comments.  
   A spawned `git` child exits but stays `<defunct>` and is never reaped, so the bootstrap await never settles. The TUI renders and accepts typing, but Enter can never start a session.  
   https://github.com/anomalyco/opencode/issues/41806

8. **#28986 — [CLOSED] Agent loop self-replies with non-monotonic message IDs** — 3 comments.  
   The agent loop continues generating after the model emitted `finish_reason: "stop"` with no tool calls, causing self-conversation. Root cause: non-monotonic message IDs, affecting ~2.8% of sessions.  
   https://github.com/anomalyco/opencode/issues/28986

9. **#28191 — TUI permission prompt: configurable height and expanded state** — 9 comments, 0 👍.  
   The permission prompt is hard-coded to `maxHeight: 15` and always starts collapsed, making large diffs hard to review. Community wants configurable defaults via `tui.json`.  
   https://github.com/anomalyco/opencode/issues/28191

10. **#41869 — [2.0] V1 migration fails on apostrophes in legacy data** — 2 comments.  
    The V1→V2 SQLite migration interpolates JSON values directly into SQL without escaping, so apostrophes in legacy messages cause `SQLiteError: near ","` on every startup. This blocks upgrades entirely.  
    https://github.com/anomalyco/opencode/issues/41869

## Key PR Progress

1. **#41918 — [OPEN] workerd runtime profile and SDK entrypoint** — kitlangton.  
   Enables running an OpenCode server inside a Cloudflare Durable Object, with a CI guard proving it in a real isolate. Target use case: one server per DO, e.g., a Slack bot where each thread hosts a full session.  
   https://github.com/anomalyco/opencode/pull/41918

2. **#41901 / #41904 — [OPEN] Claude Code ACP runtime** — stocky789.  
   Adds Claude Code as an OpenCode runtime via `@agentclientprotocol/claude-agent-acp`, addressing #5182, #20002, #24038. Opens the door to cross-tool agent interoperability.  
   https://github.com/anomalyco/opencode/pull/41901 | https://github.com/anomalyco/opencode/pull/41904

3. **#41899 — [CLOSED] Record location switches in sessions** — thdxr.  
   Projects durable sessions moving into a `location-switched` timeline message, preserves directory changes through compaction, and renders them in the V2 TUI.  
   https://github.com/anomalyco/opencode/pull/41899

4. **#41729 — [OPEN] Desktop: label windows by active tab** — maxipesfix.  
   Fixes #40490 by updating desktop window titles from the active tab, making macOS Window menu entries distinguishable.  
   https://github.com/anomalyco/opencode/pull/41729

5. **#41770 — [OPEN] Stop retrying unavailable audio in TUI** — muyiyr.  
   Fixes #41763. Disposes the failed native audio engine and caches sounds so ALSA errors no longer flood the terminal on hosts without sound cards.  
   https://github.com/anomalyco/opencode/pull/41770

6. **#41896 — [CLOSED] Web-standard fetch handler entry for server** — kitlangton.  
   Adds `ServerFetch.make` — same routes as the Node server but as a standard `(request) => Response` handler, with no port/process ownership. Useful for embedding in runtimes like workerd.  
   https://github.com/anomalyco/opencode/pull/41896

7. **#41900 — [OPEN] Render instruction updates as compact notices** — kitlangton.  
   Stops dumping multi-hundred-line Code Mode catalogs into the transcript; instruction updates now render as a one-liner (`◈ Instructions updated: core/codemode`).  
   https://github.com/anomalyco/opencode/pull/41900

8. **#41883 — [OPEN] Show completed write output in V2 TUI** — kitlangton.  
   Cherry-picks #41352 (accidentally merged into the stale `v2-migration` branch) onto `v2`. Shows syntax-highlighted file contents after the `write` tool completes.  
   https://github.com/anomalyco/opencode/pull/41883

9. **#41880 — [OPEN] Align running shell output** — kitlangton.  
   Fixes layout jump between running and settled shell card states — streamed output rendered in the spinner column, then jumped two columns when complete. Port of #41101.  
   https://github.com/anomalyco/opencode/pull/41880

10. **#41891 — [CLOSED] Fix fractional mtimes in plugin specifiers** — kitlangton.  
    One-character bug: `freshSpecifier` appends raw `stat.mtimeMs` (with decimals) to import specifiers, breaking external TUI plugins that use JSX or import `solid-js`. Truncates now.  
    https://github.com/anomalyco/opencode/pull/41891

## Feature Request Trends

- **Claude Code feature parity (dominant trend):** A single user (afonsoft) filed 7 related issues today requesting `/usage`, `/security-review`, `/verify`, `/simplify`, `/btw`, `/approve`, and `/context` — all explicitly inspired by Claude Code commands. The community clearly wants these workflow tools: ephemeral questions (`/btw`), runtime permission toggles (`/approve`), cost/context transparency (`/usage`, `/context`), and repo-health validation (`/verify`, `/security-review`, `/simplify`).
- **Multi-session orchestration:** Multiple issues (#12548, #17838, #16017) continue asking for Chrome-style tabs, session/subagent tabs, and the ability to see multiple sessions simultaneously.
- **TUI configurability:** Users increasingly want to customize TUI panels, permission prompts, and default heights rather than accepting hard-coded values (#28191).
- **Ecosystem growth:** Requests to add plugins like `opencode-pr-tracker` and documentation for external paths suggest the plugin ecosystem is the next frontier.

## Developer Pain Points

- **V2 migration and stability:** The V2 next channel is burning users: ALSA terminal corruption (#41763, #41890), webfetch regression (#41777), viral migration failures (#41869), and infinite retries (#41848, #27924). Many users are hitting showstoppers on upgrade.
- **Context/token management:**
  - Compaction can loop infinitely when compression fails (#27924) — needs a fallback strategy.
  - Users can't silence compaction output streaming into the chat (#13033).
  - No detailed context/cost breakdown per component (#41908, #41915).
- **Cross-platform inconsistencies:**
  - `apply_patch`/`write` force LF line endings on Windows (#37090).
  - No file-encoding support (e.g., GBK) in edit/write tools (#37602).
  - Windows CI failures from hard-coded POSIX paths (#41893).
- **Silent failures and hangs:**
  - Zombie git child blocks bootstrap forever with zero feedback (#41806).
  - LLM retry loops hang the UI indefinitely with no error surface (#41848).
  - Skills silently dropped in server/web mode when project is in a git repo (#41751).
- **Provider/flakiness:** Specific Zen models gated by HTTP 403 (#39831) and generic "Upstream request failed" errors are recurring reliability complaints.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-12

## Today's Highlights
A wave of 0.84.x regression fixes is landing: runtime crashes under Bun, WebSocket retry gaps, single-object edit argument failures, and a wire-protocol `usage` regression are all being addressed by active PRs. On the feature side, the community is pushing for Qwen Token Plan CN support, Mermaid rendering in HTML exports, and a novel intercom extension enabling live session-to-session messaging. Maintainers closed a batch of no-action reports overnight, many involving documentation typos, count inconsistencies, and hardcoded keybindings.

---

## Releases
No new releases in the last 24 hours. (Latest: 0.84.1)

---

## Hot Issues

**1. High CPU usage on macOS with long sessions** — [#7730](https://github.com/earendil-works/pi/issues/7730) (OPEN, 10 comments, 👍8)  
Users report 50–110% CPU and 600–800MB memory with long sessions, seemingly correlated with context size. Community upvotes suggest this is a widely felt pain; no fix yet.

**2. Bun runtime crash: `zlib.createZstdDecompress is not a function`** — [#7846](https://github.com/earendil-works/pi/issues/7846) (CLOSED, 10 comments, 👍1)  
0.84.0/0.84.1 crashes on Bun at startup because `undici` needs a zstd decompressor that Bun doesn't provide. Closed in 24h—likely fixed by a compatibility shim or dependency pin.

**3. WSL login hang after GitHub Copilot device authorization** — [#6187](https://github.com/earendil-works/pi/issues/6187) (CLOSED, 25 comments)  
Long-standing issue (created June 30) finally closed: in WSL, the browser device flow completes but the Pi client never detects it. 25 comments suggest a frustrating, hard-to-reproduce platform bug; fix likely landed in a recent patch.

**4. GitHub Copilot login 429 rate-limiting for orgs with 20+ models** — [#7850](https://github.com/earendil-works/pi/issues/7850) (CLOSED, 7 comments, 👍7) + companion [#7428](https://github.com/earendil-works/pi/issues/7428) (CLOSED, 5 comments)  
Device authorization succeeds, then login fails with `429 Too Many Requests`. Both closed as no-action — likely a server-side issue and/or a user-config problem, but the 👍7 suggests many org users hit this.

**5. Configurable thinking level/model for compaction** — [#7553](https://github.com/earendil-works/pi/issues/7553) (OPEN, 8 comments)  
Compaction shares the session's thinking budget, which is wasteful on reasoning models. Users want an independent budget for summarization. No maintainer response yet; this is a common "why is my reasoning model burning tokens on compaction" ask.

**6. Edit fuzzy match misses whitespace-length differences** — [#7836](https://github.com/earendil-works/pi/issues/7836) (OPEN, 6 comments, 👍1)  
`normalizeForFuzzyMatch` doesn't collapse whitespace runs, so `oldText` fails to match when indentation differs. Small models are disproportionately affected. A PR (#7978) is already targeting this, and it's closely related to the single-object edit fix (#7904/#7978).

**7. `--thinking` CLI parameter silently ignored** — [#7966](https://github.com/earendil-works/pi/issues/7966) (CLOSED, 3 comments)  
`pi --thinking off "prompt"` starts in whatever mode the last session used. Closed quickly—possibly a doc clarification or a regression fix.

**8. Invalid settings.json silently ignored → misleading "bash not found" on Windows** — [#7829](https://github.com/earendil-works/pi/issues/7829) (OPEN, 3 comments)  
Unescaped backslashes in `shellPath` produce invalid JSON, which Pi ignores entirely, leading to a confusing `bash not found` error. Users want explicit validation errors.

**9. Delta-only `message_update` removed `usage` from the wire protocol** — [#7911](https://github.com/earendil-works/pi/issues/7911) (OPEN, 2 comments)  
The 0.84.0 fix for #7290 removed cumulative `message` from `message_update` events, but `usage` went with it. Now nothing carries `usage` until `message_end`. PR #7982 is open to restore it. Middleware dependents are the affected audience.

**10. `/resume` counts diverge between progress bar and final list** — [#7960](https://github.com/earendil-works/pi/issues/7960) (CLOSED, 3 comments) + [#7931](https://github.com/earendil-works/pi/issues/7931) (CLOSED, 2 comments)  
Progress denominator counts files on disk; final list counts parsed sessions. Numbers disagree (e.g., 22 vs 19). Closed as no-action, but follow-up analysis documents the root cause—useful if someone wants to fix the UX.

---

## Key PR Progress

**1. fix(edit): normalize single-object edits argument to array + whitespace collapse** — [#7978](https://github.com/earendil-works/pi/pull/7978) (CLOSED) and companion [#7904](https://github.com/earendil-works/pi/pull/7904) (CLOSED)  
TWO fixes for the costliest friction: models that emit `{oldText,newText}` instead of `[{...}]` now work, and fuzzy match now collapses whitespace runs. Directly closes the loop on #7836. Community had multiple duplicates, so this cleans up a whole class of "edit keeps failing" reports.

**2. fix(coding-agent): preserve usage in streaming events** — [#7982](https://github.com/earendil-works/pi/pull/7982) (OPEN)  
Restores cumulative provider usage on JSON/RPC `message_update`, keeps snapshots omitted for linear stream size, adds regression test. Addresses #7911 exactly.

**3. feat(ai): add Qwen Token Plan Individual CN provider** — [#7988](https://github.com/earendil-works/pi/pull/7988) (CLOSED) / [#7989](https://github.com/earendil-works/pi/pull/7989) (OPEN)  
Adds the China-region individual subscription catalog (cn-beijing), reusing `QWEN_TOKEN_PLAN_CN_API_KEY`. First PR closed (likely superseded); the open one closes #7847.

**4. fix(tui): route selection copy through host clipboard** — [#7972](https://github.com/earendil-works/pi/pull/7972) (CLOSED)  
`copySelectionToClipboard()` was writing bare OSC 52 and flashing "Copied!" even when terminals ignore it (macOS Terminal, GNOME Terminal, most tmux). Now reports truthfully. Related to #7866 (copyOnSelect option).

**5. fix(coding-agent): update grok-mermaid to 0.2.3** — [#7984](https://github.com/earendil-works/pi/pull/7984) (OPEN)  
Fixes Mermaid class rendering (classes were ignored). Resolves #7832 with visible before/after images—small, high-impact visual fix.

**6. feat(coding-agent): render Mermaid diagrams in HTML exports** — [#7956](https://github.com/earendil-works/pi/pull/7956) (OPEN)  
Reuses the TUI's ANSI→HTML rendering pipeline so exported HTML shows rendered Mermaid, toggleable from the header. Directly addresses a known export gap.

**7. feat: intercom (live session-to-session messaging) + `ask_predecessor` ghost responder** — [#7968](https://github.com/earendil-works/pi/pull/7968) (CLOSED)  
Novel: file-mailbox channels let running Pi sessions chat, plus a ghost responder for handoff Q&A and co-op game playtesting. Merged/closed already—big velocity.

**8. fix(tui): add pageUp/pageDown to base SelectList and model-selector** — [#7865](https://github.com/earendil-works/pi/pull/7865) (CLOSED)  
Fills a keybinding gap: `tui.select.pageUp/pageDown` now work everywhere, not just some dropdowns.

**9. feat(tui): add copyOnSelect option to TuiAltScreen** — [#7866](https://github.com/earendil-works/pi/pull/7866) (CLOSED)  
Allows disabling auto-copy on mouse selection in fullscreen TUI. Pairs with #7972 for a coherent clipboard story.

**10. fix(coding-agent): inherit subagent session config** — [#7897](https://github.com/earendil-works/pi/pull/7897) (CLOSED)  
Subagents now follow the current session's model/thinking instead of whatever arbitrary session last set it. Fixes a genuinely confusing multi-session footgun.

---

## Feature Request Trends

- **Qwen China region support** — Qwen Token Plan Individual CN provider was requested and PR'd within the same 24h window (#7989). Expect more CN-market provider requests.
- **Mermaid ecosystem** — Theme rendering (#7984) and HTML-export rendering (#7956) landed hours apart. The community wants diagrams everywhere (TUI, HTML, and by extension Chat UI).
- **Compaction budget independence** — Repeated asks to separate compaction thinking/model from session settings (#7553). Unaddressed by maintainers so far.
- **Session-to-session communication** — The intercom extension (#7968) is a strong signal for multi-agent workflows. Landed fast, suggesting maintainer interest.
- **Terminal/OS-specific polish** — Fullscreen mouse behavior (#7965 docs, #7930 clickable links), tmux Kitty passthrough (#7936), VS Code notify support (#7967). The long tail of "works in my terminal" is an active theme.

---

## Developer Pain Points

- **Edit tool rejection storm** — The #1 recurring frustration: models emit `{oldText,newText}` instead of `[{}]`, tiny whitespace differences break fuzzy matching, and the fix arrives only *after* schema validation. Two open issues (#7836, #7944) and two merged PRs (#7904, #7978) address it—but this has clearly burned many hours.
- **Login/authorization flow fragility** — WSL hangs (#6187), 429 rate limits for large orgs (#7850, #7428). Both are "works for most people, infuriating when it doesn't," and both were closed without a clear user-facing fix.
- **Silent configuration failures** — Invalid `settings.json` ignored → misleading "bash not found" (#7829); `--thinking` flag ignored (#7966). Users want loud, explicit validation instead of "I didn't read your file."
- **Streaming/wire protocol regressions** — The 0.84.0 delta-only change accidentally nuked `usage` mid-run (#7911). Third-party middleware and CLI consumers noticed within days, and PR #7982 is already up. A reminder that storage-linearity fixes can break API contracts.
- **Platform-specific TUI gremlins** — High CPU on macOS (#7730), CMD duplicate-output/memory leak (#7947), CJK blank rendering in VS Code (#7923). The TUI is the front door; each terminal quirk gets reported and fixed one at a time.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-12

---

## 1. Today's Highlights

Qwen Code shipped **v0.21.11-preview.0** and **v0.21.10** within 24 hours, bringing ACP reasoning-effort configuration (Default→Max) and Web Shell image preview improvements. The daemon resource-protection initiative continues to mature, with a new PR closing ACP resource-guard gaps (#8947) and a tracking issue (#8091) organizing the work into reviewable chunks. A notable cluster of **terminal flickering reports** (tmux/iTerm2 across macOS and Linux, issues #8562, #8901, #8962) has emerged as the community's most vocal pain point, alongside a Windows file-link regression (#8644).

---

## 2. Releases

### v0.21.11-preview.0
- **fix(web-shell):** Enforce prompt-safe session navigation ([#8931](https://github.com/QwenLM/qwen-code/pull/8931))
- **chore(serve):** Log session continuation admissions

### v0.21.10
- **ACP support** for configuring reasoning effort levels (Default → Max) via session configuration ([#8526](https://github.com/QwenLM/qwen-code/pull/8526))
- **Web Shell:** Clicking uploaded/pasted images now opens a preview in the artifact view

### Others
- **v0.21.10-nightly.20260812** — nightly build with the web-shell session-navigation fix
- **dsw-eas-smoke-20260812** — non-production infrastructure smoke (no SWE score published)

---

## 3. Hot Issues

1. **[#8562 — tmux screen flickering (macOS SSH → Ubuntu)](https://github.com/QwenLM/qwen-code/issues/8562)** — User reports persistent flicker only inside tmux splits; diagnosed via Qwen 3.8 Max as a Qwen Code version regression. 6 comments; unresolved and growing in visibility alongside similar reports.

2. **[#8678 — Session lost when large restore times out](https://github.com/QwenLM/qwen-code/issues/8678)** — P1 core bug: large restores can drop the current session. PR1 merged (#8691) but tracking continues. 7 comments — the most-discussed issue today.

3. **[#8644 — Windows file links fail: drive-letter colon URL-encoded](https://github.com/QwenLM/qwen-code/issues/8644)** — Clicking file links in chat errors with `cannot open file:///d%3A/...` on Windows. P2 VS Code regression; 4 comments.

4. **[#8901 — iTerm flicker on macOS](https://github.com/QwenLM/qwen-code/issues/8901)** — Similar flicker to #8562, but native macOS iTerm (no SSH/tmux). Reproduced on v0.21.8 during command approval prompts. 4 comments.

5. **[#8920 — OpenAI API errors emit success in stream-json mode](https://github.com/QwenLM/qwen-code/issues/8920)** — Headless mode reports API failures as `"subtype":"success"` with exit code 0, breaking CI pipelines that rely on exit codes. P2 CLI bug; 4 comments.

6. **[#8897 — `--approval-mode` / `--auth-type` missing from `--help`](https://github.com/QwenLM/qwen-code/issues/8897)** — Flags validated but undocumented in CLI help output. P2, easily fixable; 4 comments.

7. **[#8182 — Daemon grants each ACP child 50% of host memory](https://github.com/QwenLM/qwen-code/issues/8182)** — Memory ceiling computed from host RAM, never divided by child count — an OOM risk under multi-child loads. P2 daemon bug; 4 comments.

8. **[#8957 — Regression: crashes on image load since 0.21.2](https://github.com/QwenLM/qwen-code/issues/8957)** — Works in 0.21.1, crashes on reading images in 0.21.2+. Needs retesting; 3 comments.

9. **[#8922 — `tools.truncateToolOutputThreshold` ignored by Shell](https://github.com/QwenLM/qwen-code/issues/8922)** — Documented setting is shadowed by a fixed 30k-char budget. P2 config bug; 3 comments.

10. **[#8944 — 2 high-severity npm vulnerabilities since 0.21.0](https://github.com/QwenLM/qwen-code/issues/8944)** — `npm update` reports 2 high-severity vulnerabilities post-0.21.0. Security-sensitive; 3 comments.

---

## 4. Key PR Progress

1. **[#8947 — fix(serve): Close daemon ACP resource guard gaps](https://github.com/QwenLM/qwen-code/pull/8947)** — Follow-up to #8911: validates bounded JSON-RPC envelopes, caps active handlers/prepared responses/outstanding I/O. Directly addresses daemon memory issues.

2. **[#8525 — fix(core): resolve Qwen 3.8 reasoning budget conflicts](https://github.com/QwenLM/qwen-code/pull/8525)** (closed) — Prevents DashScope Qwen 3.8 from sending both `reasoning_effort` and `thinking_budget` from different config layers.

3. **[#8613 — feat(web-shell): tmux-backed interactive terminal sub-agent](https://github.com/QwenLM/qwen-code/pull/8613)** — Lets agents run REPLs/CUIs inside a tmux session on the daemon host, with a live interactive terminal view in Web Shell. Potentially game-changing for long-running interactive tasks.

4. **[#8357 — feat(memory): guard manual dream tool turns](https://github.com/QwenLM/qwen-code/pull/8357)** — Extends pinned-memory protection to user-visible `/dream` turns across TUI, headless, and ACP execution.

5. **[#8368 — feat(auth): add Kimi and Xiaomi MiMo providers](https://github.com/QwenLM/qwen-code/pull/8368)** — First-class third-party presets: Kimi (Coding Plan / API Key CN/INTL), Xiaomi MiMo (pay-as-you-go).

6. **[#8839 — feat(workflows): write a subagent transcript for every dispatch](https://github.com/QwenLM/qwen-code/pull/8839)** — Every `agent()` call now leaves a JSONL transcript in `<projectDir>/subagents/`, matching the Agent tool format.

7. **[#8529 — feat(core): resolve model modalities from API metadata](https://github.com/QwenLM/qwen-code/pull/8529)** — Resolves missing input modalities (e.g., image support) from models.dev with disk caching and background refresh — no cold-start wait.

8. **[#8717 — fix(serve): support reserved characters in virtual subagent ids](https://github.com/QwenLM/qwen-code/pull/8717)** — Allows `:` and `/` in virtual subagent session IDs via lossless UTF-8 Base64URL round-tripping.

9. **[#8467 — feat(web-shell): add Git diff sources and branch switching](https://github.com/QwenLM/qwen-code/pull/8467)** — Adds Uncommitted/Unstaged/Staged/Committed/Branch comparison sources plus searchable commit/branch selectors.

10. **[#8777 — feat(review): add Maven multi-module verification](https://github.com/QwenLM/qwen-code/pull/8777)** — `review build-test` now recognizes Maven roots and maps multi-module builds — stacked on merged #8776.

---

## 5. Feature Request Trends

- **Interactive sub-agent/terminal support** — Users want agents to drive full interactive CLIs (REPLs, TUIs) — see #8613 (tmux-backed terminal) and the `t...` PR. This aligns with the "#8963 cannot run long tasks" complaint.
- **Image handling improvements** — Beyond the crash regression (#8957), there's a perf enhancement for inline images (#8608) and Web Shell image preview (#8931).
- **Provider breadth** — Kimi and Xiaomi MiMo presets (#8368) signal demand for more third-party LLM providers; also Claude dotted-minor alias support (#8585).
- **Reasoning-effort configurability** — ACP session config for reasoning tiers (#8526, #8514) suggests users want finer control over model reasoning vs. cost.
- **CI/CD and review tooling** — Maven verification (#8777), autofix hermetic gates (#8961), and review deduplication (#8945) show heavy investment in the review/CI DX.

---

## 6. Developer Pain Points

- **Terminal flickering is the #1 complaint** — Multiple reports (#8562, #8901, #8962) across macOS/iTerm, Linux/tmux, and remote setups. Users describe it as "blinding" and report it makes the tool unusable; one user switched to Kimi Code citing stability ("kimi code 完胜"). This is urgent and undermines trust.

- **Long-running task reliability** — #8963: agents stall on long tasks ("需要一整夜或数天的长任务"), even with yolo/auto modes. Users want a "no-brainer accept" mode for unsupervised runs.

- **Headless/CI integration flaws** — #8920 (success exit code on API errors) and #8897 (missing help docs) erode confidence in scripted/CI usage.

- **Daemon memory management** — #8182 (per-child memory not divided), #8678 (session loss on restore timeout), #8909 (wrong runtime storage in multi-workspace) — the serve/daemon path remains a reliability hotspot.

- **Windows-specific regressions** — #8644 (URL-encoded drive letter) and general Windows file-op issues persist despite otherwise-strong cross-platform support.

- **Configuration/documentation drift** — Repeated "docs say X, behavior is Y" bugs (#8922 truncation threshold, #8948 provider-switch promise, #8897 help output) suggest the settings surface is growing faster than its documentation.

---

*Digest generated from QwenLM/qwen-code GitHub activity for 2026-08-12.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-12

## Today's Highlights

The community is navigating a turbulent v0.9.5 release: two new regressions were filed today (#5323, #5325) alongside a significant win — two independent PRs (#5319, #5314) address the long-standing issue of copied messages retaining UI rail decorations. Meanwhile, the long-running v0.9.1 completion board (#4650) continues to track release-blocking issues, and a maintainer-authored issue (#5324) proposes simplifying the overly complex 32-field agent tool schema that is causing model errors.

---

## Releases

No new releases in the last 24 hours. The community is awaiting the v0.9.5 patch cycle to address the regressions filed today.

---

## Hot Issues (10 Noteworthy)

1. **[#5323 — Regression in v0.9.5: Auto-Review mode silently blocks every Bash call and write operation](https://github.com/Hmbown/CodeWhale/issues/5323)**  
   *Critical regression.* Auto-Review mode flipped from auto-approving to silently blocking all tool calls without user notification. The "silent" aspect is the most damaging — users believe their commands ran, but nothing happened. Filed yesterday, already 2 comments, this is the top priority for a hotfix.

2. **[#5325 — Runtime: don't deliver child-owned background shell completions to the parent model stream](https://github.com/Hmbown/CodeWhale/issues/5325)**  
   *Maintainer-authored.* Sub-agent background shell completions are being delivered to the parent model's stream, polluting context and potentially confusing the parent with events from children. A correctness issue that will become more acute as sub-agent usage grows.

3. **[#5324 — Agent tool: simplify the 32-field schema so models stop erroring on it](https://github.com/Hmbown/CodeWhale/issues/5324)**  
   *Maintainer-authored.* The model-facing `agent` tool has a 32-property JSON schema, zero required fields, eight actions, and a bag of legacy aliases. Models consistently error on this schema, suggesting it exceeds model capability or instruct-following reliability. A necessary simplification.

4. **[#4959 — Proposed 'stop' command for mechanical tool-call blocking](https://github.com/Hmbown/CodeWhale/issues/4959)**  
   *Long-running, community-supported (8 comments).* When the model is in autonomous "YOLO" mode, text commands like `stop` are ignored. Users need a hard mechanical interrupt that cannot be overridden by model behavior. High-value reliability feature.

5. **[#5322 — Regression: output area doesn't fill wide terminals](https://github.com/Hmbown/CodeWhale/issues/5322)**  
   *UX regression.* v0.8 expanded to full terminal width; v0.9 caps at a max width, leaving cramped text on wide displays. Shrinking works, expanding doesn't — a clear regression for multi-monitor or ultrawide users.

6. **[#5291 — [CLOSED] Fix stale reasoning hints and terminal spacing](https://github.com/Hmbown/CodeWhale/issues/5291)**  
   *Closed with fix.* The "Space to expand" hint persisted after model completion — a visible UX lie. This was a dogfood release-blocker and has now shipped. Notably, this was closed today, suggesting a fix is in the pipeline.

7. **[#5314 — Copy message from context menu includes rail decorations](https://github.com/Hmbown/CodeWhale/issues/5314)**  
   *UX bug.* "Copy message" includes role glyphs (`●`) and rail characters (`▏`) that pollute pasted content. PR #5319 is already open to address this (see below), but the thread marks a broader concern about copy-paste hygiene across the TUI.

8. **[#4650 — v0.9.1 completion board, dogfood gate, and no-publish release](https://github.com/Hmbown/CodeWhale/issues/4650)**  
   *Maintainer tracking issue.* The non-publishing fan-in board for v0.9.1 evidence gathering. Still open with 4 comments, indicating ongoing integration work. The "no-publish release gate" suggests the team is decoupling release readiness from publishing.

9. **[#5320 — [PR] Separate snapshot reads from crash recovery](https://github.com/Hmbown/CodeWhale/issues/5291)**  
   *Reliability.* The PR addresses side-effect-free snapshot reads so that read operations don't conflict with active tool calls, and recovery only happens after a known restart. This addresses a class of crash-recovery bugs that are hard for users to diagnose.

10. **[#5241 — Pricing endpoint returns 503 — all sessions show unverified_live_pricing](https://github.com/Hmbown/CodeWhale/issues/5241)**  
    *Cost display is broken across providers.* Upgrading from 0.8.67 to 0.9.3 caused every session to show unpriced metadata with `unverified_live_pricing`. A user-visible reliability regression affecting cost tracking, which developers rely on for budget management.

**Other notable mentions:** [#5316 EPIC-005: TUI Crate Decomposition](https://github.com/Hmbown/CodeWhale/issues/5316) — architectural umbrella for decomposing the monolith; [#5305 (CLOSED) Agent start receipt hides Fleet route](https://github.com/Hmbown/CodeWhale/issues/5305) — model attribution confusion resolved; [#5097 (CLOSED) YouTube claims CodeWhale is not official](https://github.com/Hmbown/CodeWhale/issues/5097) — community misinformation thread.

---

## Key PR Progress (10 Important PRs)

1. **[#5326 — Web: audit fixes — i18n parity, copy/spacing, test fixes](https://github.com/Hmbown/CodeWhale/pull/5326)**  
   *Maintainer.* Web audit pass: fixes outdated docs references, spacing, and i18n parity. Not core TUI, but keeps community docs accurate — important for user trust.

2. **[#5318 — Feat: pin host terminal window as an always-on-top mini window](https://github.com/Hmbown/CodeWhale/pull/5318)**  
   *Community contribution.* PiP mode for the TUI on Windows — shrink to 640x400 and pin on top, toggle on click or `/pin`. Powerful for side-by-side workflows on Windows. Novel feature, likely niche but demonstrates an active community building platform-specific UX.

3. **[#5319 — Feat: copy messages without visual rails](https://github.com/Hmbown/CodeWhale/pull/5319)**  
   *Community contribution.* Fixes #5314. Copies canonical source content for User/Assistant cells; keeps Tool/Thinking/System on the full-transcript path to avoid losing details. Includes regression tests. Directly addresses a quality-of-life bug impacting every copy operation.

4. **[#5320 — Fix: separate snapshot reads from crash recovery](https://github.com/Hmbown/CodeWhale/pull/5320)**  
   *Community contribution.* Adds `load_session_snapshot` for side-effect-free reads and `recover_session_for_resume` with repair statistics. Critical for safe crash recovery without disrupting active tool calls.

5. **[#5321 — Feat: register OrcaRouter as a named provider](https://github.com/Hmbown/CodeWhale/pull/5321)**  
   *Community contribution.* Adds OrcaRouter matching OpenRouter's wiring pattern. One API key (`sk-orca-`) for 150+ models. Broadens the provider list with a seemingly low-risk, additive change.

6. **[#5225 (CLOSED) — Feat(ACP): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225)**  
   *Closed — major.* This closes the gap where ACP `session/prompt` was chat-only, unable to execute tool calls. Zed and third-party bridges (e.g., `acp-deepseek-adapter`) now get a real code-editing agent. The scope is significant — file, search, git, patch, and shell tools. Closed today, suggesting it was merged.

7. **[#5291 (CLOSED) — Fix: clear stale reasoning hints and tighten terminal spacing](https://github.com/Hmbown/CodeWhale/pull/5291)**  
   *Maintainer.* Fixes the stale "Space to expand" hint and spacing. Part of the v0.9.5 dogfood cleanup. Closed today.

8. **[#5305 (CLOSED) — Fix: agent start receipt hides resolved Fleet route](https://github.com/Hmbown/CodeWhale/pull/5305)**  
   *Maintainer.* Clarifies model attribution when a Fleet dispatch resolves to a different profile. Prevents false claims about which model answered. Closed today.

9. **[#5266 (reference) — v0.9.5 RC dogfood: terminal rendering and spacing](https://github.com/Hmbown/CodeWhale/issues/5322)**  
   *Related (not PR).* The output-area width regression (#5322) is likely a product of a recent TUI renderer change. Not yet addressed, but the rapid response to #5291 suggests a fix will arrive fast.

10. **[#5316 — EPIC-005: Crate Decomposition umbrella](https://github.com/Hmbown/CodeWhale/pull/5316)**  
    *Tracking.* Not a PR itself, but the epic tracking all decomposition sub-EPICs and PRs. Sign of an architectural refactor in progress — worth watching for breaking changes.

---

## Feature Request Trends

- **Mechanical stop/interrupt:** Multiple requests for a guaranteed "stop" mechanism (#4959) that overrides model autonomy. Community wants hard kill-switches, not textual suggestions.
- **Windows and WSL2 parity:** Issues around Windows argument parsing (#4564) and terminal pinning (#5318) suggest Windows support is underserved. Expect more Windows-first UX requests.
- **Pane zooming and full-width layout:** Requests to zoom panes (#1261) and regressions in width handling (#5322) show users want more control over screen real estate.
- **Provider flexibility:** Registering new providers (OrcaRouter) and the recent OpenRouter precedent indicate a strong appetite for multi-provider support. Cost display reliability (#5241) is a subset of this.
- **Schema simplification for tool calls:** The 32-field agent schema (#5324) is a maintainer-acknowledged problem. Expect simpler tool schemas and possibly tool-specific schemas per action.

---

## Developer Pain Points

- **Silent regressions in approval modes:** Auto-Review silently blocking Bash/write calls (#5323) is the most damaging class of bug — users cannot trust the tool's visibility. This undermines the entire autonomous workflow.
- **v0.9.x stability vs v0.8.x:** Recurring complaints that v0.9 is less stable or less performant than v0.8.67 (width regression #5322, pricing #5241, cost breakage, pricing endpoint 503s, slash-command latency #4568, network errors #4683/#4956). A consistent pattern.
- **Context/copy pollution:** UI decorations, stale hints, wrong model attribution, and background shell events leaking into model streams — multiple issues surface a broader theme of poor boundary hygiene between UI, runtime, and model context.
- **Provider connectivity flakiness:** Network errors hitting `api.deepseek.com/v1/chat/completions` (#4683) and general connection failures (#4956) are common and hard to diagnose. Cost display breakage (#5241) compounds the frustration by removing visibility into what is being spent.

---

*Digest generated from public GitHub issues/PRs on Hmbown/CodeWhale (DeepSeek-TUI) for 2026-08-12.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*