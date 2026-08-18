# AI CLI Tools Community Digest 2026-08-18

> Generated: 2026-08-18 01:18 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Tool Comparison Report — 2026-08-18

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is experiencing rapid maturation, with **Claude Code, OpenAI Codex, Gemini CLI, and Copilot CLI** leading in community engagement, while **Pi, OpenCode, Qwen Code, and CodeWhale** (formerly DeepSeek TUI) demonstrate strong niche momentum. The dominant themes across all tools are **multi-agent orchestration**, **subagent reliability** (false success states, hung workers, context isolation bugs), **context window management** (compaction failures, over-fetching), and **MCP ecosystem brittleness** (OAuth token refresh, tool attachment, protocol compatibility). Enterprise concerns—proxy-aware telemetry, sandbox hardening, permission drift—are increasingly visible, signaling a shift from experimentation to production deployment. Notably, **bot-assisted bug-fixing pipelines** (Gemini's "SSR Agent" 10+ PRs, Qwen's autofix system) are now operating at scale, indicating the tools are being used to build themselves.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Community Engagement Signal |
|---|---|---|---|---|
| **Claude Code** | 10 highlighted | 10 highlighted | **v2.1.234** (shipped) | Long-running feature requests (198👍 queue mode, multi-agent) |
| **OpenAI Codex** | 10 highlighted | 10 highlighted (6-PR OTel stack) | **rust-v0.148.0-alpha.21** (patch) | 195👍 auto-resolve opt-out; TUI /agents dashboard landing |
| **Gemini CLI** | 10 highlighted | 10+ "SSR Agent" PRs merged | **v0.56.0-nightly** | Bot-assisted fix pipeline operational; P1 subagent bugs triaged |
| **Copilot CLI** | 10 highlighted | 1 (low-value docs removal) | **v1.0.80** (referenced) | Triage-stage issues dominate; OAuth regression cluster |
| **OpenCode** | 10 highlighted | 10 highlighted | **v1.18.18** / opencode2 beta | Billing/endpoint trust issues; 32👍 plan/build auto-switch |
| **Pi** | 10 highlighted | 10 highlighted | No new release | 870-trial benchmark surfacing protocol bugs; TUI perf fixes |
| **Qwen Code** | 10 highlighted | 10 highlighted | **v0.21.13** (shipped) | Autofix pipeline stabilization; SWE-bench validation |
| **CodeWhale (DeepSeek TUI)** | 10 highlighted | 10 highlighted | **v0.9.9** (last week) | Final release cycle; i18n push; discoverability epics |

**Key observations:**
- **Claude Code** and **Codex** show the highest community engagement (triple-digit upvotes on top issues).
- **Gemini CLI** is the most rapidly iterating (10+ automation-driven PRs/week, nightly releases).
- **Copilot CLI** has the lowest PR velocity (1 PR in 24h) despite active issue triage.
- **CodeWhale** is in a branding/transition phase (deepseek-tui → CodeWhale) with ambitious product epics.

---

## 3. Shared Feature Directions

### 3.1 Multi-Agent Orchestration & Dashboards
| Tool | Specific Need |
|---|---|
| **Claude Code** | #28300 cross-machine agent-to-agent protocol (open since Feb) |
| **Codex** | #39114/#39112 interactive `/agents` dashboard (landing now) |
| **Gemini CLI** | Subagent transparency (trajectory via `/chat share`, #22598) |
| **CodeWhale** | #5123 role-permission integrity for delegated agents |
| **Pi** | #8262 hooks on every turn-start path |

### 3.2 Message Queue / Non-Blocking Interaction
| Tool | Specific Need |
|---|---|
| **Claude Code** | #50246 queue messages instead of interrupting (198👍) |
| **Codex** | #28969 disable auto-resolve in 60s (195👍) |
| **Gemini CLI** | #21409 generalist agent hangs forever |
| **OpenCode** | #43126 auto pause/resume on rate-limit reset |

### 3.3 Context Window & Compaction Management
| Tool | Specific Need |
|---|---|
| **Claude Code** | #87191 skill over-fetching (230k tokens); #19649 Bash vs builtins |
| **Pi** | #6879 compaction never triggers past 100% (17👍); #7995 cache-control cost penalty |
| **Qwen Code** | #9320 lost context after /compress-fast + /rewind; #6806 stale context % |
| **CodeWhale** | #5239 compression at 128K vs 1M support |
| **Copilot CLI** | #4506 watchdog force-compacts at 23%, loops to OOM |

### 3.4 MCP Ecosystem Reliability
| Tool | Specific Need |
|---|---|
| **Codex** | #17265 OAuth tokens not auto-refreshed; #33599 silent tool-attach failures |
| **Copilot CLI** | #4480/#4439 Atlassian/GitLab OAuth regression (RFC 8414); #4512 fail-closed policy |
| **OpenCode** | #43074 serialize OAuth token refresh; #33027 tools not exposed to agent |
| **Gemini CLI** | #28870 emit pending tool call before permission request |
| **Claude Code** | #80094 filesystem MCP broken on macOS |

### 3.5 Session Lifecycle & Continuity
| Tool | Specific Need |
|---|---|
| **Codex** | #37403 "active writer" deadlock; #23418 mobile thread missing from sidebar |
| **Copilot CLI** | #4505 stale connection item IDs after resume |
| **OpenCode** | #24153 unarchive sessions (11👍); #43140 skip in-flight sessions |
| **Qwen Code** | #9361 scheduled tasks reuse sessions |
| **Claude Code** | #86237 cross-session messages silently dropped |

### 3.6 Permission & Trust Controls
| Tool | Specific Need |
|---|---|
| **Codex** | #39117 reject lossy permission projections; #39103 cap-drop ALL in sandbox |
| **CodeWhale** | #5491 persist approvals before execution (fail-closed) |
| **Claude Code** | #83567 stable permission dialog keys |
| **OpenCode** | #40125 per-MCP trust config (fingerprint pinning) |

### 3.7 Config File & Discovery
| Tool | Specific Need |
|---|---|
| **Gemini CLI** | #28866 ignore `.gemini` folder in file search (P1 community PR) |
| **CodeWhale** | #2369 config paths fragmented across OS/Cygwin |
| **Qwen Code** | #9250 file-mode configurability |
| **Pi** | #534 XDG Base Directory compliance (39👍, 8 months old) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | Pi | Qwen Code | CodeWhale |
|---|---|---|---|---|---|---|---|
| **Primary user** | Power devs, plugin ecosystem | Enterprise, multi-surface | Google ecosystem, ACP mode | GitHub-centric, enterprise | TUI purists, Rust core | Alibaba/China + enterprise | Bilingual (EN/ZH), indie |
| **Technical approach** | Feature-rich CLI + VS Code ext; plugin marketplace | Rust core, TUI + desktop + mobile; agent orchestration | Nightly releases, bot-assisted fixes | GitHub Copilot backend; `--server` mode | Rust TUI, extension hooks, provider-agnostic | VSCode ext first; autofix CI | Rust TUI, sandbox (bwrap), i18n spine |
| **Strength** | Community engagement, plugin ecosystem | Cross-surface continuity, proxy/telemetry | Automation velocity, SSR Agent pipeline | GitHub integration, org policy | Performance/cost benchmarking, protocol compliance | Autofix/review pipeline, CI integration | Sandbox trust, bilingual docs |
| **Weakness** | Desktop Windows stability, memory bloat | Subagent context isolation, MCP OAuth | Subagent readiness, terminal hangs | OAuth regressions, low PR velocity | Protocol debt (OpenRouter/Bedrock), TUI edge crashes | Windows CLI regressions, event storms | Discoverability, schema complexity |
| **Key signal** | Queue mode + multi-agent (long-term) | /agents dashboard + GPT-5.6 872k window | SSR Agent at scale | Failing closed on MCP policy | Benchmark-driven polish | Autofix pipeline maturity | Product epics + i18n |
| **Enterprise posture** | Moderate (plugins, guard hooks) | **Strong** (OTel proxy stack, cap-drop, permission migration) | Moderate (Vertex AI) | **Strong** (org models, policy) | Low (individual devs) | Moderate (Alibaba enterprise) | Low (indie) |

---

## 5. Community Momentum & Maturity

### Mature & High-Engagement (Claude Code, Codex)
- **Claude Code**: Triple-digit 👍 on feature requests; long-lived threads (months); broad plugin ecosystem. Release cadence steady (v2.1.234).
- **Codex**: Strong enterprise pull; 195👍 on auto-resolve; PR velocity high (10+ PRs incl. 6-PR OTel stack). Dashboard feature signals product direction.

### Rapid Iteration, Automation-Driven (Gemini CLI, Qwen Code)
- **Gemini CLI**: SSR Agent (bot) landed 10+ PRs in a week; nightly releases; P1 subagent issues actively triaged. Fastest feedback loop — but community is smaller than Codex/Claude.
- **Qwen Code**: Autofix pipeline stabilizing (growth-budget audits, incremental review anchoring); full SWE-bench validation. CI workflow itself being hardened.

### Niche Momentum (Pi, OpenCode, CodeWhale)
- **Pi**: Benchmark-driven (870-trial) polish; active TUI perf work; smaller but deeply technical community.
- **OpenCode**: Endpoint/billing trust issues dominate; beta (opencode2) diverging from stable causes confusion.
- **CodeWhale**: Rebranding to CodeWhale; i18n spine; product epics signal ambition; small but bilingual community.

### Laggard in PR Velocity (Copilot CLI)
- **Copilot CLI**: 1 PR in 24h, triage-stage issues (MCP OAuth regression, --no-alt-screen removal). Community active but frustrated; GitHub-enterprise focus.

---

## 6. Trend Signals & Recommendations for Developers

### 6.1 Industry Trends
1. **Agent orchestration is now table stakes** — Every tool is investing in multi-agent management (dashboards, subagent supervision, cross-machine protocols). The **subagent reliability gap** (false success, hung workers, intent leakage) is the #1 technical debt.
2. **Context window management is the new performance bottleneck** — 128K→1M token support creates a vacuum: compaction strategies, skill over-fetching, cache-control compliance (2.5x cost penalty on OpenRouter), and watchdog loops are all actively fought.
3. **MCP is the integration surface — and its brittleness is showing** — OAuth refresh, fail-closed policy, silent tool-attach failures, and per-server trust config are cross-tool pain points. Expect MCP protocol hardening to accelerate.
4. **Enterprise hardening is differentiating** — Cap-drop sandboxing, proxy-aware OTel telemetry, permission migration integrity, and fail-closed approval persistence separate "production-ready" from "experimental."
5. **CUI (Chat UI) parity with CLI is a growing gap** — Desktop/mobile regressions (deadlocks, 429s, thread sync) are appearing across Codex, Claude Code, and Copilot CLI. Cross-surface session continuity is not yet solved.
6. **Tools are eating their own dogfood** — Gemini's SSR Agent and Qwen's autofix pipeline prove bot-assisted development is viable; expect this to accelerate the feedback loop for all tools.

### 6.2 Actionable Recommendations
| Stakeholder | Recommendation |
|---|---|
| **Tool vendors** | Fix subagent reliability (false success, hung workers) before adding more orchestration features; invest in MCP OAuth refresh + per-server trust; make compaction deterministic and observable; treat desktop/CLI parity as a first-class feature |
| **Enterprises** | Prefer tools with proven sandbox hardening (Codex: cap-drop, OTel proxy; Pi: gVisor; CodeWhale: bwrap) and fail-closed permission/approval persistence; audit MCP token refresh paths before rolling out tool-heavy workflows |
| **Individual devs** | Monitor queue-mode (Claude #50246, Codex #28969) — the highest-community-value UX improvement in flight; watch Gemini CLI's SSR Agent velocity and Pi's benchmark-driven polish for fast-improving tools; be wary of Copilot CLI's OAuth regression cluster |

### 6.3 Watchlist (next 30 days)
- **Claude Code**: Queue mode (#50246) — 198👍; Windows MSIX stability (#85199, #81341) — potential enterprise blocker.
- **Codex**: /agents dashboard (#39114/#39112) GA; GPT-5.6 872k context rollout (#39102).
- **Gemini CLI**: `.gemini` folder fix (#28866) — P1 community PR; SSR Agent pipeline throughput.
- **OpenCode**: opencode2 beta stabilization; billing transparency (#43009) resolution.
- **Pi**: Append compaction (#8120) — could change compaction economics; OpenRouter cost fixes (#7995).
- **Qwen Code**: Autofix handoff via failure.md (#9371) — deterministic CI; scheduled-tasks session reuse (#9361).
- **CodeWhale**: v0.9.9 wide rollout; i18n docs epic (#5482); config path unification (#2369).

---

*Report generated from community digest data for 2026-08-18. All issue/PR numbers referenced are from the respective tool repositories and retrievable via the provided links.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-18 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following PRs have drawn the most community attention (by comment count and cross-referenced issues):

### 🥇 skill-creator eval fixes (PR #1298, #1099, #1050)
- **Functionality**: Multiple PRs fixing `run_eval.py` and related scripts in the `skill-creator` skill. The core issue: the evaluation loop reports `recall=0%` for every skill description, making the description-optimization loop "optimize against noise." Root causes include Windows subprocess stream reading failures (`[WinError 10038]`), trigger detection bugs, and `claude.cmd` not being resolved via `PATHEXT`.
- **Discussion highlights**: This is the most cross-referenced issue in the repo (Issue #556 with 12 comments, 7 👍). Multiple independent contributors reproduced the bug, signaling a significant quality gate problem for skill creation.
- **Status**: All three PRs remain **open** as of the data snapshot.

### 🥈 document-typography skill (PR #514) by PGTBoos
- **Functionality**: Typographic quality control for generated documents — prevents orphan word wrap (1–6 words on a new line), widow paragraphs (headers stranded at page bottom), and numbering misalignment in AI-generated documents.
- **Discussion highlights**: Addresses a universal pain point — "these issues affect every document Claude generates." Users rarely ask for good typography, so the skill makes it automatic.
- **Status**: **Open**.

### 🥉 pdf case-sensitivity fix (PR #538) by Lubrsy706
- **Functionality**: Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md`/`FORMS.md` were referenced in uppercase but the actual files are lowercase — breaking on case-sensitive filesystems (Linux/macOS).
- **Discussion highlights**: A small but critical correctness fix; part of a broader series of quality fixes by the same author (also PR #539 and #541).
- **Status**: **Open**.

### 4. ODT skill (PR #486) by GitHubNewbie0
- **Functionality**: OpenDocument Text creation, template filling, and ODT-to-HTML parsing. Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice document requests.
- **Discussion highlights**: Fills a gap for open-source/ISO-standard document formats alongside the existing `docx` and `pdf` skills.
- **Status**: **Open**.

### 5. self-audit skill (PR #1367) by YuhaoLin2005
- **Functionality**: A universal audit skill — mechanical file verification first (check every claimed output file exists), then a four-dimension reasoning audit in damage-severity priority order. Works with any project, tech stack, or model.
- **Discussion highlights**: Tied to a proposal issue (#1385) for a broader "Reasoning Quality Gate Pipeline." This is part of a small wave of quality-gate/meta-skills from the community.
- **Status**: **Open** (v1.3.0, updated 2026-07-02).

### 6. ServiceNow platform skill (PR #568) by Vanka07
- **Functionality**: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
- **Discussion highlights**: One of the most active long-running PRs — created 2026-03-08 and still being updated as of 2026-08-12. Represents enterprise-platform demand.
- **Status**: **Open**.

### 7. testing-patterns skill (PR #723) by 4444J99
- **Functionality**: Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern, naming, pure functions, edge cases), React component testing (Testing Library), and what NOT to test.
- **Discussion highlights**: Fills a clear gap in the skills collection — no prior testing-focused skill existed. High demand for test generation guidance.
- **Status**: **Open**.

### 8. frontend-design clarity overhaul (PR #210) by justinwetch
- **Functionality**: Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is something Claude can follow in a single conversation.
- **Discussion highlights**: One of the longest-running open PRs (created 2026-01-05, still open in March). Signals community appetite for higher-quality core skills rather than just additive ones.
- **Status**: **Open**.

---

## 2. Community Demand Trends

Distilled from the Issues tracker, the most-anticipated new Skill directions are:

### 🔐 Security & Trust (highest urgency)
- **Issue #492** (43 comments, 2 👍): Community skills distributed under the `anthropic/` namespace create a trust boundary vulnerability. Users may grant elevated permissions to skills they believe are official. This is the single most-discussed issue in the repo and reflects deep concern about the supply-chain attack surface.
- **Issue #1175** (4 comments): Security concerns when handling SharePoint Online documents via skills — specifically whether access control logic should live inside `SKILL.md`.

### 📦 Distribution & Sharing
- **Issue #228** (16 comments, 8 👍 — highest 👍 count): Org-wide skill sharing in Claude.ai. Currently users must manually download `.skill` files, send via Slack/Teams, and have colleagues navigate Settings > Capabilities. A shared library or direct-sharing link is strongly desired.
- **Issue #189** (6 comments, 9 👍): `document-skills` and `example-skills` plugins install identical content, causing duplicate skills in the context window — a quality-of-life issue with plugin management.
- **Issue #16** (4 comments): Exposing Skills as MCPs — making skill capabilities callable via MCP protocol for better API signaling.

### 🔧 Reliability & Tooling (quality gate)
- **Issue #556** (12 comments, 7 👍): `run_eval.py` never triggers skills/commands (0% trigger rate). This blocks effective skill description optimization — foundational tooling debt.
- **Issue #62** (10 comments): Skills disappearing with errors — stability concerns in skill storage.
- **Issue #202** (8 comments): `skill-creator` reads like dev documentation, not an operational skill; verbose educational tone undermines token efficiency.

### 🧠 Meta-Cognition & Quality Gates (emerging)
- **Issue #1329** (9 comments): Proposal for a `compact-memory` skill using symbolic notation for compact agent state — long-running agents spend too much context on prose notes.
- **Issue #1385** (4 comments): Reasoning Quality Gate Pipeline — pre-task calibration → adversarial review → delivery verification.
- **Issue #1487** (4 comments): `claude-api` skill eagerly injects ~156k tokens, exhausting the context window in a single tool call — a severe implementation bug in a bundled skill.

### 🏢 Enterprise Platform Integration
- **PR #568** (ServiceNow) and **PR #181** (SAP predictor) show demand for enterprise platform skills beyond document formats.

---

## 3. High-Potential Pending Skills

These open PRs have active discussions and may land soon:

| PR | Skill | Why it may land soon |
|---|---|---|
| [**#525**](https://github.com/anthropics/skills/pull/525) | **Pyxel retro game dev** (kitao) | Author is the Pyxel/pyxel-mcp maintainer; well-defined MCP-driven workflow |
| [**#83**](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** (eovidiu) | Meta-skills that directly address the repo's own quality gap |
| [**#1367**](https://github.com/anthropics/skills/pull/1367) | **self-audit** (YuhaoLin2005) | Complements the reasoning-gate proposal; has a companion issue |
| [**#723**](https://github.com/anthropics/skills/pull/723) | **testing-patterns** (4444J99) | Clear gap-filler; comprehensive coverage of unit/component testing |
| [**#486**](https://github.com/anthropics/skills/pull/486) | **ODT skill** (GitHubNewbie0) | Completes the document-format family (docx, pdf, now odt) |
| [**#1538**](https://github.com/anthropics/skills/pull/1538) | **Fix two skills to match Agent Skills spec** (bechor25) | Compliance fix; low-risk merge candidate |
| [**#1595**](https://github.com/anthropics/skills/pull/1595) | **UIZZE partner skill** (samuelbushi) | README-only change; low friction entry |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable tooling and quality gates** — fixing `skill-creator`'s broken evaluation loop, establishing security/trust boundaries for the `anthropic/` namespace, and creating meta-skills that audit output quality — over additive document-format or platform-specific skills.

---

*Report generated from GitHub data as of 2026-08-18. All links reference github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-08-18

## Today's Highlights

Release **v2.1.234** shipped yesterday with two quality-of-life improvements: a new `CLAUDE_CODE_PROJECT_DIR_NAME` environment variable for per-project transcript directory naming, and a `selection:clear` keybinding action. The community remains highly engaged on long-running feature requests, with **message queue mode** (#50246) and **multi-agent collaboration** (#28300) continuing to attract significant discussion. Several critical bugs around the Windows MSIX packaging (GPU crashes, repeated repair cycles) and memory bloat in background subagents are drawing attention as potential reliability concerns.

---

## Releases

**v2.1.234** — The latest release adds:
- **`CLAUDE_CODE_PROJECT_DIR_NAME`** environment variable — hosts that give each session its own config directory can now choose a short name for the per-project transcript directory.
- **`selection:clear` keybinding action** — allows binding a key to clear the current in-app selection.

---

## Hot Issues

1. **[#50246 — Message queue mode: queue messages instead of interrupting active tasks](https://github.com/anthropics/claude-code/issues/50246)** *(CLOSED, 60 comments, 198 👍)*
   Community-heavy request (198 upvotes) to let users queue follow-up messages while Claude is mid-task, instead of forcing an interrupt. The high engagement signals this is a deeply felt workflow friction.

2. **[#28300 — Multi-agent collaboration across machines (Agent-to-Agent protocol)](https://github.com/anthropics/claude-code/issues/28300)** *(OPEN, 38 comments)*
   A long-standing feature proposal (since February) for a standardized protocol enabling Claude instances on different machines to collaborate as agents. Still open and actively discussed — a signal of growing interest in distributed AI workflows.

3. **[#19649 — Frequently uses Bash tools (sed/grep) when builtin tools (Read/Grep) are better aligned](https://github.com/anthropics/claude-code/issues/19649)** *(OPEN, 28 comments, 97 👍)*
   Model behavior issue: Claude often defaults to shell tools instead of purpose-built built-ins. 97 upvotes suggest wide agreement that tool-selection heuristics need improvement for efficiency and safety.

4. **[#85199 — Claude Desktop repeatedly crashes on Windows; requires "Advanced Options → Repair"](https://github.com/anthropics/claude-code/issues/85199)** *(OPEN, 24 comments)*
   A severe stability issue on Windows MSIX builds forcing users into repair cycles. High urgency for desktop users.

5. **[#81341 — CIG (MicrosoftSignedOnly) + vendor-signed vk_swiftshader.dll kills GPU process on browser preview](https://github.com/anthropics/claude-code/issues/81341)** *(OPEN, 21 comments)*
   Root-cause analysis of the Windows MSIX GPU crash (0x060C201E) — vendor-signed SwiftShader DLL conflicts with Microsoft's CIG enforcement. Affects browser preview and external link clicks.

6. **[#80094 — Filesystem MCP server unusable on macOS; schema never dispatched](https://github.com/anthropics/claude-code/issues/80094)** *(OPEN, 11 comments)*
   Both package generations of the desktop app fail to dispatch the new filesystem MCP schema, leaving the server broken. A core tooling gap for macOS users.

7. **[#86237 — Cross-session messages render in UI but never reach runtime input queue (regression 2.1.222 → 2.1.227)](https://github.com/anthropics/claude-code/issues/86237)** *(OPEN, 9 comments)*
   A Desktop regression where cross-session messages display but silently fail to execute — potentially confusing and damaging for multi-session workflows.

8. **[#81343 — Single background subagent balloons to 9.5 GiB in ~100s → global kernel OOM](https://github.com/anthropics/claude-code/issues/81343)** *(OPEN, 5 comments)*
   A single `run_in_background` subagent consumed 9.5 GiB in ~100 seconds on a 15.6 GiB Linux host, causing a global OOM. Serious memory-management concern for agent-heavy usage.

9. **[#86865 — Fable 5 thinking blocks come back empty in VS Code extension 2.1.233](https://github.com/anthropics/claude-code/issues/86865)** *(OPEN, 3 comments, 4 👍)*
   Regression in the VS Code extension where thinking blocks for Fable 5 return empty strings; Opus 5 unaffected. Impacts transparency for users relying on reasoning traces.

10. **[#87191 — /claude-api skill loads entire multi-language bundle (~230k tokens)](https://github.com/anthropics/claude-code/issues/87191)** *(CLOSED, 4 comments)*
    The bundled skill loads documentation for all languages regardless of the project's detected language — a significant context-window waste flagged by the community.

---

## Key PR Progress

1. **[#87395 — ralph-wiggum: use disable-model-invocation so the model can't self-invoke /ralph-loop](https://github.com/anthropics/claude-code/pull/87395)** *(CLOSED)*
   Fixes a plugin bug where `/ralph-loop` could be self-invoked by the model despite `hide-from-slash-command-tool` intent. Prevents unintended recursive loops.

2. **[#72451 — fix: remove statsig.anthropic.com from init-firewall.sh](https://github.com/anthropics/claude-code/pull/72451)** *(CLOSED)*
   Removes a dead hostname from the firewall allowlist that was causing devcontainer startup failures when DNS resolution fails.

3. **[#79131 — fix: do not abort validate-settings.sh when no lowercase frontmatter keys match](https://github.com/anthropics/claude-code/pull/79131)** *(OPEN)*
   Prevents silent exit-1 crashes in `validate-settings.sh` when `grep` finds no lowercase frontmatter keys, improving diagnostic clarity.

4. **[#30692 — feat: add container isolation example with guard hook](https://github.com/anthropics/claude-code/pull/30692)** *(CLOSED)*
   Adds `examples/container/` with Podman/Docker isolation setup and a `PreToolUse` guard hook for destructive git operations — useful for teams seeking stronger sandboxing.

5. **[#29284 — docs: clarify excludedCommands requires :* suffix](https://github.com/anthropics/claude-code/pull/29284)** *(CLOSED)*
   Documentation fix: explains that `"docker:*"` (with `:*`) is required to match commands with arguments — a common configuration gotcha.

6. **[#84004 — fix(plugin-dev): limit frontmatter parsing to opening block](https://github.com/anthropics/claude-code/pull/84004)** *(CLOSED)*
   Corrects `sed`-based frontmatter extraction that restarted at every later `---` (e.g., Markdown horizontal rules), causing incorrect parsing.

7. **[#84003 — fix(scripts): propagate top-level failures](https://github.com/anthropics/claude-code/pull/84003)** *(CLOSED)*
   Ensures duplicate-maintenance scripts exit non-zero when startup/API failures occur, instead of silently resolving with `.catch(console.error)`.

8. **[#83999 — fix(scripts): validate gh flag values](https://github.com/anthropics/claude-code/pull/83999)** *(CLOSED)*
   Rejects incomplete `gh` commands (e.g., missing flag values) that previously bypassed argument validation.

9. **[#83995 — fix(scripts): validate label option values](https://github.com/anthropics/claude-code/pull/83995)** *(CLOSED)*
   Prevents `$2: unbound variable` crashes and accidental consumption of the next positional argument as a label name.

10. **[#83992 — fix(plugin-dev): assert expected hook decision](https://github.com/anthropics/claude-code/pull/83992)** *(CLOSED)*
    Adds `--expect allow|deny|ask` to `test-hook.sh`, catching hooks that allow operations they were intended to deny. Fixes #83800.

---

## Feature Request Trends

- **Message queue mode** (#50246): The strongest signal this week — users want non-blocking follow-ups instead of forced interrupts.
- **Multi-agent collaboration** (#28300): A sustained, months-long request for cross-machine agent-to-agent protocols; interest is growing.
- **Localhost subdomains in Preview** (#47195): 23 upvotes for supporting `*.localhost` in the Preview tool — small but clear demand from web developers.
- **Stable permission dialog keys** (#83567): Users want the digit for "No" to be consistent across 2-option and 3-option variants; prior attempts were closed/locked, but the need persists.
- **Safeguard overrides for high-volume users** (#87475): Power users want allowlists or disable options for model safeguards that misfire in legitimate contexts.

---

## Developer Pain Points

- **Windows desktop stability**: Multiple issues (#85199, #81341, #85540) point to recurring MSIX crashes — GPU process kills and forced repair cycles are a loud reliability complaint.
- **Context-window waste**: `/claude-api` skill over-fetching (#87191, #63566) and model over-use of Bash tools (#19649) both highlight frustration with inefficient context usage.
- **Silent failures and regressions**: Cross-session message drops in Desktop (#86237), empty thinking blocks in VS Code (#86865), and undefined behavior on headless skill failures (#87159) all erode trust.
- **Memory bloat in agents**: Background subagent OOM (#81343) is a sharp reminder that agentic workloads can still exhaust machine memory.
- **Inconsistent UX across surfaces**: Permission key mappings differ between terminal and desktop (#73325), and broken MCP filesystem servers (#80094) create friction for macOS users.
- **Configuration and sandboxing gotchas**: Docs-only fixes (#29284) and script validation PRs (#83999, #83995) suggest users continue to hit silent misconfigurations.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-18

## Today's Highlights
The Codex team shipped a significant batch of proxy-aware telemetry infrastructure (6-PR stack from `celia-oai`), raising the bar for enterprise networking compliance. The TUI gains an interactive `/agents` dashboard — a major shift toward managing multi-agent workflows from one surface. On the bug front, desktop remote-control regressions on macOS and a Windows ARM64 splash-screen hang are drawing active community reports.

---

## Releases
**`rust-v0.148.0-alpha.21`** — Patch release on the 0.148 alpha track. No changelog details beyond the version bump; likely incremental fixes toward stable.

---

## Hot Issues

1. **[#28969] Add setting to disable auto-resolve in 60s for questions**  
   *78 comments | 👍 195* — The most-engaged issue this week. Users want an explicit opt-out for the automatic 60-second resolution of approval/timeout prompts. High upvote count signals broad frustration with premature auto-confirm behavior in long-running autonomous tasks.  
   [GitHub](https://github.com/openai/codex/issues/28969)

2. **[#17265] MCP OAuth tokens not auto-refreshed despite stored refresh token**  
   *31 comments | 👍 57* — Routed MCP servers fail silently once access tokens expire, even though `~/.codex/.credentials.json` persists a refresh token. This breaks tool-calling reliability in long sessions. High relevance for anyone running MCP-heavy agent workflows.  
   [GitHub](https://github.com/openai/codex/issues/17265)

3. **[#37403] macOS Desktop regression: cannot resume Remote Control / CLI thread (`already has an active writer`)**  
   *21 comments | 👍 17* — After the Aug 7 desktop update, the mobile-remote-to-mac workflow deadlocks when resuming a thread previously open on CLI. Interop between ChatGPT mobile Remote Control, Desktop, and CLI remains brittle. Regression confirmed by multiple users.  
   [GitHub](https://github.com/openai/codex/issues/37403)

4. **[#15723] Background subprocesses/subagents do not wake the calling agent on completion**  
   *18 comments | 👍 8* — Long-standing issue (March) still open. Forked subagents run to completion but never notify the supervisor thread, causing orphaned work and stalls. Core reliability gap for parallel agent orchestration.  
   [GitHub](https://github.com/openai/codex/issues/15723)

5. **[#17793] Backspace deletes more than one character in TUI**  
   *16 comments | 👍 5* — TUI input bug persists across several versions; affects usability on Kitty and other terminals. Feels like brace/escape sequence mis-handling, but unconfirmed by maintainers.  
   [GitHub](https://github.com/openai/codex/issues/17793)

6. **[#23418] Mobile remote-created worktree thread missing from Desktop sidebar**  
   *12 comments | 👍 4* — Threads created via mobile remote access exist locally and open via deeplink, but fail to appear in the project sidebar in Codex Desktop. User-facing inconsistency between remote and local session surfaces.  
   [GitHub](https://github.com/openai/codex/issues/23418)

7. **[#13491] Forked worker inherits parent user intent and misinterprets it as direct instruction**  
   *10 comments | 👍 11* — In recursive delegation, forked workers sometimes treat the parent's original prompt (not the delegated subtask) as their own instruction, causing looped or duplicated work. Subtle context-isolation bug in subagent architecture.  
   [GitHub](https://github.com/openai/codex/issues/13491)

8. **[#33599] Desktop silently fails to attach `node_repl` MCP tools on new tasks**  
   *7 comments | 👍 4* — Desktop app doesn't attach `node_repl` tools to new tasks, breaking in-app Browser, Chrome, and Computer Use — while CLI with identical config works. Silent failure makes this hard to diagnose pre-flight.  
   [GitHub](https://github.com/openai/codex/issues/33599)

9. **[#38518] Windows: conversation switch triggers 350–800 MiB/s read loop and stutter**  
   *6 comments* — New report on Desktop 26.810.4967.0: switching conversations causes sustained disk read storms and system-wide stall. Performance regression; likely session/index loading pathology.  
   [GitHub](https://github.com/openai/codex/issues/38518)

10. **[#38632] macOS desktop app fails all sends with 429 while chatgpt.com works**  
    *4 comments | 👍 4* — Desktop-only rate-limit failure (429 on all requests) despite working fine on web. Suggests flawed token/limits accounting in the app, not a backend quota issue.  
    [GitHub](https://github.com/openai/codex/issues/38632)

---

## Key PR Progress

1. **[#39114] Add dedicated `codex agents` dashboard command**  
   Opens the shared agents overview without creating a session; auto-starts the local app server on Unix. First-class entry point for multi-agent management.  
   [GitHub](https://github.com/openai/codex/pull/39114)

2. **[#39112] Make agents overview an interactive task dashboard**  
   Extends `/agents` to start tasks, open root sessions, rename tasks, and stop active work; wide-terminal detail pane and root-session filtering. Turns passive viewer into a control plane.  
   [GitHub](https://github.com/openai/codex/pull/39112)

3. **[#39102] Raise GPT-5.6 maximum context window to 872,000 tokens**  
   Applies to `gpt-5.6-sol`, `gpt-5.6-terra`, and `gpt-5.6-luna`; includes Bedrock entry generation. Meaningful headroom for long-context tasks.  
   [GitHub](https://github.com/openai/codex/pull/39102)

4. **[#39101] Update `rmcp` to 3.1.2**  
   Switches to native JSON-RPC decoding, removes local multi-round-trip compatibility layer, preserves `input_required` SSE metadata, and adds OAuth protected-resource metadata support. Modernizes MCP protocol handling.  
   [GitHub](https://github.com/openai/codex/pull/39101)

5. **[#39103] Drop capabilities from Linux sandbox processes**  
   Adds `--cap-drop ALL` in bubblewrap, verifies empty capability sets before exec, and aborts otherwise. Hardening posture for sandbox escape resistance.  
   [GitHub](https://github.com/openai/codex/pull/39103)

6. **[#39113] Surface interactive requests in realtime conversations**  
   Mirrors execution/permission/patch approval and user-input requests into active realtime conversations with prompt to review in-app. Bridges CLI ↔ realtime session gap.  
   [GitHub](https://github.com/openai/codex/pull/39113)

7. **[#39117] Reject lossy legacy permission projections**  
   Prevents legacy sandbox policy conversion when the filesystem policy's path semantics cannot be preserved. Avoids silent permission drift during migration.  
   [GitHub](https://github.com/openai/codex/pull/39117)

8. **[#39098] Trace exec-server requests from receipt through completion**  
   Adds inbound request spans from queue entry through dispatch and response, recording client-handled network policy callback outcomes. Improves observability for agent execution debugging.  
   [GitHub](https://github.com/openai/codex/pull/39098)

9. **[#39107] Add proxy-aware blocking telemetry transport** (OTel proxy stack, 3/6)  
   Implements blocking OTel transport honoring proxy routes, `NO_PROXY`, collector TLS, and enterprise roots; disables auto-redirect when a fixed collector route is selected.  
   [GitHub](https://github.com/openai/codex/pull/39107)

10. **[#39100] Avoid redundant terminal size queries during history insertion**  
    Reuses cached screen size in TUI draw and history-tail paths instead of querying backend repeatedly. Small but welcome latency reduction in interactive typing.  
    [GitHub](https://github.com/openai/codex/pull/39100)

---

## Feature Request Trends

- **Remote/session continuity** (esp. mobile ↔ Desktop ↔ CLI): multiple issues (#37403, #23418, #35351, #32519) show demand for robust handoffs, correct project association, and consistent thread state across surfaces.
- **Agent orchestration dashboards**: PRs landing now (#39114, #39112) reflect strong interest in a single pane for supervising root sessions and subagents — echoed by bugs in subagent waking (#15723) and intent isolation (#13491).
- **Configurable autonomy boundaries**: top-voted issue (#28969) plus #32218 (queue banked usage resets) point to demand for finer control over auto-resolve and resource consumption.
- **Proxy/enterprise telemetry support**: the OTel proxy PR stack (#39105–#39109) matches a quieter but steady stream of enterprise-focused asks around outbound policy and custom CAs.
- **Observability of agent responses**: #22230 (opt-in OTel logging of agent responses) continues to accrue 👍; monitoring/eval use cases remain underserved.

---

## Developer Pain Points

- **Windows Desktop + WSL remains the most fragile matrix**: shell poisoning across reboots (#25317), ARM64 splash hangs (#38971), per-turn MCP server respawn churn (#38754), and 350–800 MiB/s read-loop stutter (#38518) suggest platform-specific session and execution code paths need dedicated hardening.
- **Remote control / app-server lifecycle inconsistencies**: 429-failures on desktop-only (#38632, #38804), detached app-server Keychain failures (`CSSMERR_CSP_NO_USER_INTERACTION`) (#38691), and "active writer" deadlocks (#37403) indicate lifecycle, auth, and connection-state management are not yet robust under real-world multi-process usage.
- **MCP integrations remain brittle**: token refresh gaps (#17265), silent tool-attach failures (#33599), and repeated stdio server spawning on Windows (#38754) are recurring friction points for tool-heavy setups.
- **Subagent orchestration needs guardrails**: workers not waking parent agents (#15723) and misinterpreting parent intent (#13491) are both open for months, suggesting architectural fixes are non-trivial but increasingly visible to power users.
- **Migration tooling bugs**: `migrate-rollouts` losing thread names (#38761) and leaving empty projected history (#38762) — both fresh, from the same contributor — underscore that rollouts/thread-store migration is still rough at the edges.

---

*Digest generated from 50 issues + 50 PRs updated in the last 24h.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-18

## Today's Highlights

The nightly release v0.56.0-nightly.20260818.g194edea47 shipped with Privacy Notice clarity improvements and TypeScript strict-null fixes for integration tests. Notably, 10+ "SSR Agent" pull requests landed this week addressing long-standing issues—from subagent permission regressions to message bus hangs—indicating a bot-assisted bug-fixing pipeline is now operating at scale. A new P1 community PR surfaces the `.gemini` folder being wrongly indexed by file watchers, which is particularly impactful for users running the CLI from their home directory.

## Releases

**v0.56.0-nightly.20260818.g194edea47** — Nightly release containing two changes:
- Privacy notice wording and selection options clarified (Issue #26120 fix)
- TypeScript strict-null errors fixed in integration tests (Issue #21919 fix)

PR: https://github.com/google-gemini/gemini-cli/pull/28872

---

## Hot Issues

### 1. Subagent MAX_TURNS hidden as GOAL success
**#22323** — [OPEN, P1]
`codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` even when hitting MAX_TURNS mid-analysis, masking the interruption. 12 comments; top-voted concern this week. Bot-triaged for retesting.
🔗 https://github.com/google-gemini/gemini-cli/issues/22323

### 2. Generalist agent hangs forever
**#21409** — [OPEN, P1]
Any deferral to the generalist agent can hang indefinitely (up to an hour in user reports). Instructing the model *not* to use subagents resolves it—pointing to a real scheduler bug. 8 👍 reactions signal broad impact.
🔗 https://github.com/google-gemini/gemini-cli/issues/21409

### 3. Shell command stuck "Waiting input" post-completion
**#25166** — [OPEN, P1]
After simple CLI commands complete, the TUI keeps showing "Awaiting user input" indefinitely. Works for trivial commands; hangs regardless. 4 comments, 3 👍.
🔗 https://github.com/google-gemini/gemini-cli/issues/25166

### 4. Agent doesn't leverage skills/subagents autonomously
**#21968** — [OPEN, P2]
Anecdotal but recurring: Gemini CLI doesn't proactively use custom skills or subagents unless explicitly told to—even when descriptions directly match the task at hand.
🔗 https://github.com/google-gemini/gemini-cli/issues/21968

### 5. 400 error with >128 tools configured
**#24246** — [OPEN, P2]
CLI hits hard API errors when tool count exceeds 128. Community expectation: agent should scope tool selection dynamically rather than sending all at once.
🔗 https://github.com/google-gemini/gemini-cli/issues/24246

### 6. Auto Memory retries low-signal sessions indefinitely
**#26522** — [OPEN, P2]
Background extraction never marks low-signal sessions as processed, so the same transcript gets re-examined repeatedly, wasting tokens and context.
🔗 https://github.com/google-gemini/gemini-cli/issues/26522

### 7. Model writes tmp scripts in random directories
**#23571** — [OPEN, P2]
When shell execution is restricted via exclusion rules, the model instead creates ad-hoc edit scripts scattered across the workspace—making clean commits painful.
🔗 https://github.com/google-gemini/gemini-cli/issues/23571

### 8. Browser agent fails under Wayland
**#21983** — [OPEN, P1]
Browser subagent terminates with "GOAL" but actually crashes on Wayland display servers. 1 👍; significant for Linux users.
🔗 https://github.com/google-gemini/gemini-cli/issues/21983

### 9. Auto Memory insufficient redaction
**#26525** — [OPEN, P2, Security]
Local transcript content is sent to the extraction model *before* redaction is instructed; logging can also leak existing skill content. Community concern around secrets exposure.
🔗 https://github.com/google-gemini/gemini-cli/issues/26525

### 10. GeminI CLI crashes via get-shit-done output hook
**#22186** — [OPEN, P1]
Crash occurs whenever the hook nearly finishes printing the user summary—consistently reproducible across runs.
🔗 https://github.com/google-gemini/gemini-cli/issues/22186

---

## Key PR Progress

### Merged / Closed

**PR #28867** — [CLOSED, P2] **Fix subagents running with agents disabled**  
Regression from v0.33.0 where built-in agents loaded before config checks. Fixes #22093.
🔗 https://github.com/google-gemini/gemini-cli/pull/28867

**PR #28870** — [OPEN, P1] **Emit pending tool call update before permission request**  
Aligns ACP mode with protocol expectations—clients now see `tool_call` status before `session/request_permission`. Fixes #21783.
🔗 https://github.com/google-gemini/gemini-cli/pull/28870

**PR #28816** — [CLOSED, P2] **Fix silent hang in MessageBus.request()**  
Floating publish promise caused 60-second hangs on failure. Now properly awaited/registered. Fixes #22588.
🔗 https://github.com/google-gemini/gemini-cli/pull/28816

**PR #28812** — [CLOSED, P1] **Prevent indefinite TUI hang on bare Linux**  
Adds execution timeouts for `ps`-based process introspection that hung at "Initializing...". Fixes #21477.
🔗 https://github.com/google-gemini/gemini-cli/pull/28812

**PR #28868** — [CLOSED, P2] **Autocomplete now adds trailing space**  
Fixes the friction where Enter wouldn't execute after Tab-completion. Fixes #23954.
🔗 https://github.com/google-gemini/gemini-cli/pull/28868

**PR #28865** — [CLOSED, P3] **Vertex AI docs link to supported locations**  
Addresses missing region list in auth docs. Fixes #28050.
🔗 https://github.com/google-gemini/gemini-cli/pull/28865

**PR #28864** — [CLOSED, P3] **cli_help subagent output formatted as markdown**  
Stops internal monologue leakage into user-facing answers. Fixes #19463.
🔗 https://github.com/google-gemini/gemini-cli/pull/28864

**PR #28820** — [CLOSED, P2] **Privacy notice clarified & options fixed**  
RadioButtonSelect wording now matches actual opt-out options. Fixes #26120.
🔗 https://github.com/google-gemini/gemini-cli/pull/28820

### Open

**PR #28866** — [OPEN, P1] **Ignore `.gemini` folder in file search by default**  
Community PR (Rajeev91691) preventing chokidar watchers from crawling config directories—critical for home-directory CLI usage. Fixes #28826.
🔗 https://github.com/google-gemini/gemini-cli/pull/28866

**PR #28869** — [OPEN, P2] **Fix host network resolution for gVisor sandbox**  
Enables VSCode extension connectivity under `GEMINI_SANDBOX=runsc`. Fixes #21331.
🔗 https://github.com/google-gemini/gemini-cli/pull/28869

---

## Feature Request Trends

1. **Agent self-awareness** — Repeated asks for the CLI to know its own flags, hotkeys, and mechanics well enough to guide users (e.g., #21432).
2. **AST-aware codebase tooling** — Epic-level interest (#22745, #22746) in AST-based file reads/search/mapping for better context efficiency and reduced token noise.
3. **Autonomous skill/subagent usage** — Users want the model to *spontaneously* leverage configured skills; currently requires explicit instruction (#21968).
4. **Subagent transparency** — Trajectory visibility via `/chat share` (#22598) and inclusion in `/bug` reports (#21763).
5. **Component-level behavioral evals** — Growing investment in 76+ evals across 6 models (#24353); community welcomes regression safety net.
6. **Memory system quality** — Auto Memory needs better redaction (#26525), inbox validation (#26523), and cessation of low-signal retries (#26522).

---

## Developer Pain Points

- **Subagent reliability** — Recurring hangs (#21409), false GOAL-success (#22323), and missing context in logs (#21763) undermine trust in delegation.
- **Stuck terminals & TUI hangs** — Multiple reports of "Waiting input," infinite initializing, and editor-exit corruption (#25166, #21477, #24935)—terminal robustness is a top friction area.
- **Tool-scope management** — 400-errors with >128 tools (#24246) and scattered tmp scripts (#23571) show the model struggles with boundary-aware tool selection.
- **Config override distrust** — Browser and other agents ignoring `settings.json` overrides (#22267) erodes user control expectations.
- **Security consciousness** — Secrets sent to models pre-redaction (#26525) and unauthorized env injection via extensions (#28863) highlight hardening needs.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-08-18

## Today's Highlights
The past 24 hours saw a cluster of new triage-stage issues around MCP server reliability, session restoration failures, and plugin marketplace caching bugs. A notable regression thread continues around OAuth issuer mismatches with third-party MCP servers (Atlassian, GitLab) affecting versions 1.0.79+, while a separate community effort highlights the silent removal of the `--no-alt-screen` flag.

## Releases
No new releases in the last 24 hours. Latest known version referenced in issues: 1.0.80.

## Hot Issues
1. **[#4509 – `--no-alt-screen` silently removed, alt-screen broken](https://github.com/github/copilot-cli/issues/4509)** – Users report the opt-out flag vanished without deprecation notice. Alt-screen/fullscreen issues date back to March (#1799); community frustration references broken behavior with no mitigation.

2. **[#4506 – Memory-pressure watchdog force-compacts at 23% context, loops until OOM](https://github.com/github/copilot-cli/issues/4506)** – Severe bug: watchdog triggers compaction with only ~23% of a 400k window used, recovers 0.003% tokens, then repeatedly loops. Long-running sessions at risk of process death.

3. **[#4503 – SDK server reports ready without auth, Slack sessions fail generically](https://github.com/github/copilot-cli/issues/4503)** – Root cause identified: missing `COPILOT_SDK_AUTH_TOKEN` environment variable. Slack DM integration fails with unhelpful generic error. 5 comments, zero upvotes.

4. **[#4505 – Resumed session retains stale connection item IDs](https://github.com/github/copilot-cli/issues/4505)** – After interrupt/resume, every prompt fails with "input item ID does not belong to this connection." `/fork` doesn't recover the session. Blocking for users with interrupted responses.

5. **[#4504 – `account.getQuota` returns request timestamp as resetDate](https://github.com/github/copilot-cli/issues/4504)** – JSON-RPC API returns incorrect quota reset date. Affects programmatic quota management via `--server` mode.

6. **[#4480 – Atlassian MCP OAuth regression from 1.0.71 to 1.0.79](https://github.com/github/copilot-cli/issues/4480)** – OAuth discovery fails with "Incompatible authorization server (RFC 8414 §3.3)." Similar to GitLab issue #4439; suggests broader regression in OAuth metadata validation.

7. **[#4511 – Session AIC display unreliable with Kimi K3](https://github.com/github/copilot-cli/issues/4511)** – Reported AIC (token consumption) severely underestimates real usage across plan/implement/review workflows. Billing accuracy concern.

8. **[#4512 – Stdio MCP servers blocked when registry policy fetch fails](https://github.com/github/copilot-cli/issues/4512)** – CLI fails closed, blocking even user-local stdio servers. Users expect local configurations to remain available during transient network failures.

9. **[#4507 – `enabledPlugins` ignored in non-interactive mode](https://github.com/github/copilot-cli/issues/4507)** – Repository-level plugin overrides work interactively and via `plugins list`, but not with `copilot -p`. Surface inconsistency affects CI/CD automation.

10. **[#4390 – Enabled org models missing from catalogue](https://github.com/github/copilot-cli/issues/4390)** – Copilot Business orgs report Claude Sonnet 5/Opus 5 and Kimi K3 unavailable, despite explicit enablement. "This model is disabled by your organization" error displayed. 8 comments, 7 upvotes — high impact for enterprise.

## Key PR Progress
*Note: Only 1 PR updated in the last 24 hours.*

1. **[#4510 – Remove GitHub Copilot CLI documentation from README](https://github.com/github/copilot-cli/pull/4510)** – Questionable contribution that strips installation instructions and usage guidelines. Low value; likely rejected or needs maintainer scrutiny. 0 comments, 0 upvotes.

## Feature Request Trends
- **Plugin ecosystem maturity**: [#4487](https://github.com/github/copilot-cli/issues/4487) requests dependency resolution (inter/intra marketplace with auto-install), echoing Claude Code's model. Enterprise users seek composable plugin architectures.
- **Lifecycle hooks for sessions**: [#4508](https://github.com/github/copilot-cli/issues/4508) asks for mid-session reload of `.github/instructions/`. Long-running sessions (200+ compactions) never pick up edits — persists knowledge staleness for days.
- **System-tool flexibility**: [#4456](https://github.com/github/copilot-cli/issues/4456) requests opting out of bundled `gh.exe` in favor of system-installed GitHub CLI. Common pattern for controlled enterprise environments.
- **Non-interactive parity**: [#4275](https://github.com/github/copilot-cli/issues/4275) wants `contextTier` exposed via ACP server session config, matching interactive `/model` picker behavior. Consistency across surfaces is recurring.

## Developer Pain Points
1. **MCP OAuth regression cluster** – Multiple reports (#4439, #4480) indicate RFC 8414 issuer validation broke between 1.0.71 and 1.0.79. Enterprise integrations (Atlassian, GitLab) failing at the discovery step; no workaround documented.

2. **Failure-closed MCP policy** – [#4512](https://github.com/github/copilot-cli/issues/4512) shows a design decision with dangerous default: managed policy fetch failure blocks *all* non-default MCP servers, including local stdio the user configured themselves.

3. **Silent feature removal** – `--no-alt-screen` removal (#4509) follows a pattern of undisclosed breaking changes. Users report repeated issues since March without resolution; lack of deprecation notice erodes trust.

4. **Long-running session instability** – Memory watchdog compaction loops (#4506), stale connection IDs (#4505), and instruction staleness (#4508) collectively make multi-day sessions unreliable.

5. **Cursor-dependent UX gaps** – Keyboard input (#1481: SHIFT+ENTER executes instead of line break) and mouse scrolling (#4313) remain open. Terminal ergonomics reported as "mildly annoying" to "genuine regression."

6. **Cross-model tooling inconsistencies** – [#4457](https://github.com/github/copilot-cli/issues/4457) highlights spurious "Unknown tool name" warnings when sub-agents cross model families (e.g., Codex ↔ non-Codex), cluttering logs.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-18

## Today's Highlights

Endpoint reliability and billing transparency dominate this week's community concerns, with multiple reports of legacy endpoint retirement (410 errors), incorrect usage metering, and "endpoint unavailable" failures. Meanwhile, infrastructure hardening PRs targeting MCP token refresh serialization, network filesystem WAL support, and database migration tolerance signal healthy core maintenance. The most popular feature requests center on session lifecycle management — plan/build auto-switching (32 👍) and session unarchiving (11 👍).

## Releases

No new releases published in the last 24 hours. Latest version referenced in issues: **1.18.18** and **opencode2 v0.0.0-beta-17519**.

## Hot Issues

1. **[#43105] Legacy inference endpoint retired** ([link](https://github.com/anomalyco/opencode/issues/43105)) — *15 comments, CLOSED*
   Users hitting "status 410 · non-retryable Gone" when using `https://opencode.ai/inference/v1`. Notably works in the opencode2 beta but not in the stable CLI, causing confusion about migration paths.

2. **[#32149] Opencode stalls processing requests** ([link](https://github.com/anomalyco/opencode/issues/32149)) — *12 comments, 6 👍*
   Long-standing issue (since June) where the app enters "thinking" state but never responds. Six upvotes indicate meaningful community impact. Still open after 2 months.

3. **[#7801] Plan Mode + Question tool auto-switch to Build** ([link](https://github.com/anomalyco/opencode/issues/7801)) — *11 comments, 32 👍*
   Highest-voted feature request this cycle. Users want seamless mode transitions when the agent asks a question and the user answers — currently a manual switch interrupts flow.

4. **[#22861] Big Pickle stops response early** ([link](https://github.com/anomalyco/opencode/issues/22861)) — *10 comments, CLOSED*
   Model consistently truncates responses at the same spot, even when asked to continue. Reproducible but no reproduction repo provided — suggests a systematic truncation issue rather than context-dependent.

5. **[#33027] MCP tools connected but not exposed to agent** ([link](https://github.com/anomalyco/opencode/issues/33027)) — *8 comments*
   MCP server (`pdfrag`) connects and lists 6 tools, but the agent never sees them. Likely a permission or tool-surface filtering issue. Blocking real-world MCP use.

6. **[#24153] Add unarchive/restore for archived sessions** ([link](https://github.com/anomalyco/opencode/issues/24153)) — *8 comments, 11 👍*
   Archiving is one-way; users want a restore option. Second most-voted request. Impacts long-term session management workflows.

7. **[#43009] Incorrect charging items** ([link](https://github.com/anomalyco/opencode/issues/43009)) — *6 comments, CLOSED*
   User reports unexplained charges ($0.3842 for one Go session). Cites specific token usage vs. cost discrepancies. Trust-critical billing bug.

8. **[#43146] DeepSeek Flash v4 endless reply loop** ([link](https://github.com/anomalyco/opencode/issues/43146)) — *5 comments*
   Model repeats the same sentence indefinitely on Alpine Linux. Fresh issue, 5 comments in one day — likely gaining traction.

9. **[#41990] Conversation summarization hits usage limit** ([link](https://github.com/anomalyco/opencode/issues/41990)) — *4 comments, CLOSED*
   During automatic conversation compaction, a false "usage limit reached" error appears. New sessions work fine — suggests summarization parsing bug, not actual quota exhaustion.

10. **[#43151] Intermittent tool-call failures** ([link](https://github.com/anomalyco/opencode/issues/43151)) — *1 comment*
    Tool invocations print but never execute. Intermittent `read` failures suggest race conditions in tool dispatch. Reported on latest stable (1.18.18).

## Key PR Progress

1. **[#43125] feat(plugin): expose MCP server transforms** ([link](https://github.com/anomalyco/opencode/pull/43125)) — *CLOSED*
   Decouples MCP desired server definitions from config, exposes `list`/`get`/`set`/`update`/`remove` transforms to Effect and Promise plugins, and registers configured MCP definitions before external plugins so policy-based URL mutation works.

2. **[#43150] refactor(desktop): establish typed IPC contract** ([link](https://github.com/anomalyco/opencode/pull/43150)) — *OPEN*
   Centralizes all Desktop invoke/send/event channels into one typed contract; types main registration, preload invocation, and event payloads. Maintains updater and WSL subscription behavior.

3. **[#43142] fix(core): support older previous-channel databases** ([link](https://github.com/anomalyco/opencode/pull/43142)) — *CLOSED*
   Makes V2 database importer tolerant of older `opencode-next.db` schemas whose project/session columns predate current importer. Fixes #43139 and #41341.

4. **[#43144] fix(ui): smooth shimmer loop** ([link](https://github.com/anomalyco/opencode/pull/43144)) — *CLOSED*
   Sizes shimmer track with fixed gutters derived from highlight spread; keeps highlight fully outside labels at loop boundaries. Applies consistently to both shimmer implementations.

5. **[#40125] feat(opencode): allow per-MCP-server trust configuration** ([link](https://github.com/anomalyco/opencode/pull/40125)) — *OPEN*
   Implements fingerprint pinning as a safer alternative to `insecure: true` for self-signed certs. Uses `caFile` for private CAs. Closes #40111, partially addresses #23506.

6. **[#43141] fix(core): disable WAL on network filesystems** ([link](https://github.com/anomalyco/opencode/pull/43141)) — *OPEN*
   Detects NFS, SMB/CIFS, 9P, FUSE via `statfs`; falls back to rollback journaling on those. Adds `OPENCODE_DB_WAL=true|false` override. Critical for NFS-backed dev environments.

7. **[#43017] [beta] refactor(app): use shared server data** ([link](https://github.com/anomalyco/opencode/pull/43017)) — *CLOSED*
   Migrates app consumers to shared server data layer from #42999; removes duplicated app synchronization, session reducers, and legacy caches. Centralizes location-scoped access.

8. **[#43074] fix(core): serialize MCP token refresh** ([link](https://github.com/anomalyco/opencode/pull/43074)) — *CLOSED*
   Prevents concurrent MCP clients from exchanging the same rotating OAuth refresh token, which caused intermittent `invalid_grant` failures.

9. **[#43136] fix(ai): settle pending Anthropic tool calls** ([link](https://github.com/anomalyco/opencode/pull/43136)) — *OPEN*
   Handles `message_stop` arriving without `content_block_stop` by settling pending tool blocks; preserves malformed input as non-executable `tool-input-error`.

10. **[#43124] fix(console): preserve inference sessions** ([link](https://github.com/anomalyco/opencode/pull/43124)) — *OPEN*
    Preserves validated OpenCode session header when legacy Zen routes forward to managed inference gateway; continues stripping session metadata from direct provider requests.

## Feature Request Trends

1. **Session lifecycle management** — Unarchive/restore (#24153, 11 👍), skip in-flight sessions in `--continue` (#43140), and session preservation across gateways (#43124) show demand for robust session state control.
2. **Model behavior automation** — Plan/Build auto-switching (#7801, 32 👍) and automatic pause/resume on rate-limit reset (#43126) indicate desire for agent autonomy with less manual intervention.
3. **MCP configuration flexibility** — Per-server trust config (#40125), plugin-accessible server transforms (#43125), and MCP tool exposure fixes (#33027) signal MCP is a strategic integration surface needing richer configuration.
4. **Billing/usage transparency** — Both incorrect charging (#43009) and usage percentage mismatches (#43149) suggest the Go plan's metering needs clearer visibility and breakdown.

## Developer Pain Points

1. **Endpoint instability & migration confusion** — Legacy path retirement (410) without consistent behavior across stable/beta, plus intermittent "Endpoint is unavailable" failures, erodes trust in managed inference.
2. **Billing surprise & opacity** — Multiple reports of unexplained charges and percentage/USD mismatches; users explicitly request rollback/reset when bugs are confirmed.
3. **Windows deployment fragility** — Postinstall stub copy failures (#41370) and ripgrep extraction breakage via MSIX PowerShell (#40623) make Windows on-boarding unreliable.
4. **MCP tool integration unreliability** — Tools surface in `tools/list` but never reach the agent (#33027); token refresh races (#43074) cause intermittent auth failures.
5. **Data corruption & filesystem issues** — SSD wear from `.so` temp-file generation (#42880), WAL-on-NFS corruption (#43141), and previous-database schema incompatibilities (#43142) show storage-layer fragility across environments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-18

## Today's Highlights

The Pi ecosystem saw a major burst of activity this week, with heavy focus on reliability. The most significant developments are a fix for Anthropic's server-side refusal fallback (addressing a critical compaction failure), a performance overhaul for long-transcript TUI rendering, and a cluster of OpenRouter compatibility fixes from an 870-trial benchmark that uncovered several protocol-level bugs in the ai layer.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6879 — Auto-compaction never triggers after context grows past 100%](https://github.com/earendil-works/pi/issues/6879)** (18 comments, 17 👍) — A 2-hour agentic turn on GPT-5.6-sol grew the context to 373k tokens, and compaction only fired after the provider rejected the request. Top community concern: agents that run long without yielding control can blow past all safeguards. Demand is high for check-after-every-agent-step.

2. **[#534 — Config folder out of place on Linux](https://github.com/earendil-works/pi/issues/534)** (15 comments, 39 👍) — Nearly 8 months old and still the highest-upvoted issue. The config lives directly in `$HOME`, violating the XDG Base Directory Spec. Every new Linux user hits this. Long overdue.

3. **[#8029 — Very slow performance moving in prompt editor](https://github.com/earendil-works/pi/issues/8029)** (9 comments) — 7000 lines in the prompt box makes each arrow press take 1650ms. Linear growth is a usability cliff for anyone who pastes large text blocks into the editor.

4. **[#3200 — Support video/audio content in `prompt` command](https://github.com/earendil-works/pi/issues/3200)** (8 comments, 5 👍) — Multimodal models like Gemma 4 and GPT-4o already handle video/audio; the RPC layer just doesn't pass it through. A clear gap for agent workflows that need to analyze non-image media.

5. **[#7995 — OpenRouter responses: no Anthropic cacheControlFormat — 2.5x cost penalty](https://github.com/earendil-works/pi/issues/7995)** (4 comments) — Filed from an 870-trial benchmark. Missing `cache_control` on the `openai-responses` surface means Claude via OpenRouter pays 2.5x more. A performance-and-cost issue with hard, measured data.

6. **[#8036 — Edit tool crashes TUI rendering large diff during execution and session resume](https://github.com/earendil-works/pi/issues/8036)** (4 comments) — A 14.5 MB diff from HTML files with long physical lines crashes both live rendering and session resume. Edge case, but catastrophic when it hits.

7. **[#8166 — Custom message injected mid-tool-batch breaks tool_calls→tool adjacency for DeepSeek](https://github.com/earendil-works/pi/issues/8166)** (3 comments) — Extension calls `sendMessage(..., { triggerTurn: false })` mid-batch, and every subsequent turn fails with DeepSeek's strict 400 on tool-call adjacency. Race between extensions and the message queue.

8. **[#7756 — detectInstallMethod mislabels non-pnpm installs under PNPM_HOME](https://github.com/earendil-works/pi/issues/7756)** (3 comments) — A path-contains-`/pnpm/` heuristic misfires for global installs that merely share `PNPM_HOME`'s bin directory. Results in confusing "not managed by global package manager" errors.

9. **[#8028 — TUI `fullRender` crashes with `RangeError` past V8 string limit](https://github.com/earendil-works/pi/issues/8028)** (2 comments) — A video production agent that reads many images eventually hits the V8 string length ceiling in `fullRender`. Hard crash, not graceful, for long image-heavy sessions.

10. **[#8252 — pi crashes when tmux pane resizes to 1 column](https://github.com/earendil-works/pi/issues/8252)** (2 comments) — Spinner width check overflows at a terminal width of 1. Hit six times in a few days by one user with split tmux clients. Small check, repeated pain.

## Key PR Progress

1. **[#8258 — Anthropic refusal error and fallbacks](https://github.com/earendil-works/pi/pull/8258)** (fixes #8017) — Reproduced a live compaction failure on Claude where Anthropic returned `stop_reason: "refusal"`. Adds `allowed_fallback_models` metadata to the model registry and handles it properly. Directly addresses a silent failure class.

2. **[#8120 — Experimental append compaction](https://github.com/earendil-works/pi/pull/8120)** — When `PI_EXPERIMENTAL=1`, append compaction reuses the active system prompt, tools, transformed context, and routing session, enabling provider prompt-cache reuse. A real answer to the compaction-cost problem, though still experimental.

3. **[#8253 — Avoid full-screen flashing when content changes above the viewport](https://github.com/earendil-works/pi/pull/8253)** (fixes #8281) — Differential rendering only touched the visible viewport; changes above it forced a full clear and reprint. Now only the changed region is redrawn. A significant quality-of-life fix for 10k+ line transcripts.

4. **[#8246 — OpenRouter reasoning details round-trip for openai-completions](https://github.com/earendil-works/pi/pull/8246)** (fixes #7994) — Signed `reasoning.text` and `reasoning.summary` entries from `delta.reasoning_details` were dropped. Now preserved at the assistant message level so replay works.

5. **[#8262 — Dispatch hooks on every turn-start path (cancellable turn preflight)](https://github.com/earendil-works/pi/pull/8262)** — `sendCustomMessage(triggerTurn: true)` skipped the `input` hook and `before_agent_start`. This makes every turn path (custom or not) dispatch the full preflight.

6. **[#8255 — Load nested markdown skills](https://github.com/earendil-works/pi/pull/8255)** (fixes #6479) — Skills at `~/.agents/skills/third-party/child-skill.md` were silently skipped. Discovery now handles nested standalone markdown files, not just `SKILL.md` directories.

7. **[#8257 — Skip project-agent confirm when project is already trusted](https://github.com/earendil-works/pi/pull/8257)** — The subagent extension was prompting "Run project-local agents?" on every invocation even for trusted repos in `~/.pi/agent/trust.json`. Now skips the dialog when the project is already trusted.

8. **[#8241 — Emit compaction failed for extensions](https://github.com/earendil-works/pi/pull/8241)** (fixes #8175) — Compaction failures were only visible as internal `compaction_end errors`. Extensions now receive a new `session_compact_failed` event with the failure payload.

9. **[#8240 — Align Qwen Token Plan model catalogs](https://github.com/earendil-works/pi/pull/8240)** (fixes #8194) — `qwen-token-plan` and `qwen-token-plan-cn` now use a shared eight-model allowlist including new DeepSeek variants. Removes a confusing divergence between the two providers.

10. **[#8243 — Bedrock responses include smithy headers](https://github.com/earendil-works/pi/pull/8243)** (fixes #8234) — Gateway headers like `x-bifrost-provider` were being dropped. A Bedrock deserialize middleware now captures the raw Smithy HTTP response and forwards real metadata.

## Feature Request Trends

- **Rate-limit resiliency** — [#8277](https://github.com/earendil-works/pi/issues/8277) asks for automatic session pause/resume around provider rate-limit reset times. Combined with the compaction-starvation issue, the theme is clear: sessions need to survive provider-imposed stalls.
- **Multimodal expansion** — [#3200](https://github.com/earendil-works/pi/issues/3200) (video/audio in `prompt`) and [#8220](https://github.com/earendil-works/pi/issues/8220) (GLM vision model in catalog) both push Pi toward richer media inputs. The video-production agent use case keeps appearing.
- **Better defaults for new providers** — A wave of catalog alignment PRs and issues (Xiaomi deprecations, Qwen Token Plan parity, GLM vision, Neon AI Gateway) shows steady demand for correct, current model catalogs across providers.
- **Review-aware PR tooling** — [#8280](https://github.com/earendil-works/pi/issues/8280) proposes that `/review pr` captures linked issues, PR comments, submitted reviews, and inline threads. PR intent is incomplete without discussion context.

## Developer Pain Points

- **Context overrun is still the #1 reliability threat** ([#6879](https://github.com/earendil-works/pi/issues/6879), [#8229](https://github.com/earendil-works/pi/issues/8229)). Long agentic turns can silently blow past 100% context, and local providers can still receive oversized requests between tool turns. Compaction checks need to happen more frequently and more aggressively.
- **Protocol-compatibility debt with OpenRouter and Bedrock** ([#7995](https://github.com/earendil-works/pi/issues/7995), [#7994](https://github.com/earendil-works/pi/issues/7994), [#8017](https://github.com/earendil-works/pi/issues/8017), [#8279](https://github.com/earendil-works/pi/issues/8279)). Third-party gateways and providers keep revealing small but expensive incompatibilities — missing cache_control, dropped reasoning fields, absent root object types. Each needs its own fix.
- **TUI rendering breaks on large content** ([#8028](https://github.com/earendil-works/pi/issues/8028), [#8036](https://github.com/earendil-works/pi/issues/8036), [#8252](https://github.com/earendil-works/pi/issues/8252)). Large diffs, many images, or narrow tmux panes can crash the UI. The fixes from this week address the flash-redraw, but the V8 string limit crash and 1-column tmux crash are still open.
- **Hooks and events are inconsistent** ([#8262](https://github.com/earendil-works/pi/pull/8262), [#8241](https://github.com/earendil-works/pi/pull/8241), [#8242](https://github.com/earendil-works/pi/pull/8242)). Extension developers keep finding paths where events (input hooks, compaction failures, agent end vs settled) don't fire or fire misleadingly. Each fix closes a gap, but the pattern suggests the event model needs a systematic audit.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-18

## Today's Highlights

The project released **v0.21.13** featuring a Web Shell composer that now supports drag-and-drop text file attachments alongside images, plus the ability to fork conversations from any Assistant response. A major focus this week is on stabilizing the review/autofix pipeline: multiple PRs address review-event storms, growth-budget audit strategies, and incremental review anchoring to reduce redundant work. The team also completed a full end-to-end benchmark validation (SWE-bench 500 + Terminal-Bench 89) against the pinned v0.21.13 release.

## Releases

**v0.21.13** — Highlights:
- **Web Shell composer**: drag, drop, and paste text files as named attachments alongside images ([#9180](https://github.com/QwenLM/qwen-code/pull/9180))
- **Conversation forking**: users can now fork conversations from any specific Assistant response

> **Note:** The nightly v0.21.11-nightly.20260818.259951c53e also shipped with a live-session registry (`qwen sessions ps`) and skill-toggle daemon support.

---

## Hot Issues

1. **[#9194 — Mutation-verified test-pin gaps](https://github.com/QwenLM/qwen-code/issues/9194)** (10 comments)  
   Automated review flagged tests that under-pin contracts — mutations in production code pass the suite green. The community cares because robust CI is essential for the fast-moving autofix pipeline.

2. **[#8316 — Prompt not restored on Ctrl+C](https://github.com/QwenLM/qwen-code/issues/8316)** (9 comments)  
   Cancelling a prompt doesn't restore it to the input box, forcing users to retype. Quality-of-life regression that affects daily CLI usage.

3. **[#8051 — Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051)** (9 comments)  
   Count-only limits don't bound bytes held by request bodies, WebSocket assembly, or session memory. Tracking issue for production `qwen serve` hardening.

4. **[#9324 — Duplicate message delivery in Desktop Code](https://github.com/QwenLM/qwen-code/issues/9324)** (7 comments)  
   Users report Qwen 3.8 Max receiving the same message multiple times, interrupting focus. High concern for reliability in desktop workflows.

5. **[#9061 — Ctrl+V paste broken on Windows CLI](https://github.com/QwenLM/qwen-code/issues/9061)** (6 comments)  
   Regression since 0.21.x; 0.21.0 works but newer versions don't. Windows users are blocked on basic paste functionality.

6. **[#9300 — VP mode: content not bottom-aligned](https://github.com/QwenLM/qwen-code/issues/9300)** (6 comments)  
   Blank space between last message and composer in default VP mode — common UI annoyance that affects readability.

7. **[#9320 — Lost context after /compress-fast and /rewind](https://github.com/QwenLM/qwen-code/issues/9320)** (5 comments)  
   Context lost after compression and rewind operations — a serious correctness issue for long-session users.

8. **[#9296 — Qwen Autofix review-event storms](https://github.com/QwenLM/qwen-code/issues/9296)** (4 comments)  
   ≈500 runs in 3 hours, 59% cancelled. Reviews on closed PRs and duplicate address dispatch waste runner capacity — a workflow inefficiency that affects the whole community.

9. **[#9307 — Weixin 64-bit message ID precision](https://github.com/QwenLM/qwen-code/issues/9307)** (4 comments)  
   `message_id` values exceed `Number.MAX_SAFE_INTEGER`, causing rounding errors before string conversion. Critical for Weixin channel reliability.

10. **[#6806 — Context usage % doesn't refresh after /compress](https://github.com/QwenLM/qwen-code/issues/6806)** (6 comments)  
    Status line shows stale token counts until the next model request — small UX bug but frequently noticed during heavy context management.

---

## Key PR Progress

1. **[#9262 — Autofix: audit approach instead of stopping on growth-budget breach](https://github.com/QwenLM/qwen-code/pull/9262)**  
   Changes growth-budget breach handling — escalates to maintainer handoff instead of stopping cold, saving automation cycles.

2. **[#9371 — Route autofix convergence-brake handoff through failure.md](https://github.com/QwenLM/qwen-code/pull/9371)**  
   Makes handoff instructions deterministic by naming the exact output file, preventing agents from improvising.

3. **[#9361 — Scheduled tasks with existing sessions](https://github.com/QwenLM/qwen-code/pull/9361)**  
   `POST /scheduled-tasks` now accepts optional `sessionId` — binds tasks to live sessions instead of minting new ones.

4. **[#9342 — Clear deferred-suggestion backlog from #9175](https://github.com/QwenLM/qwen-code/pull/9342)**  
   19 findings from 15 review rounds, half being behavior fixes. Cleans up a long-standing backlog.

5. **[#9303 — Bound daemon transcript retention to stop renderer OOM](https://github.com/QwenLM/qwen-code/pull/9303)**  
   Web shell now releases raw replay snapshots after injection and applies block caps during replay rebuilds.

6. **[#9370 — Give macOS and Windows test lanes a trigger again](https://github.com/QwenLM/qwen-code/pull/9370)**  
   Restores CI activity with a platform-sensitivity classifier and nightly runs on main.

7. **[#9191 — Transfer per-file content verdicts across rebases](https://github.com/QwenLM/qwen-code/pull/9191)**  
   Incremental review anchors by file content, not commit SHA — saves full re-review after force-pushes.

8. **[#9214 — Run verification gate in an ephemeral container](https://github.com/QwenLM/qwen-code/pull/9214)**  
   Phase 1+2 of the trust-boundary design: containerized verification gate with structural tests.

9. **[#9226 — Aone Code read path (second review-platform provider)](https://github.com/QwenLM/qwen-code/pull/9226)**  
   Adds support for `gitlab.alibaba-inc.com` remotes to the `/review` command — enterprise integration win.

10. **[#9130 — Deterministic flakiness gate for sandboxed verification](https://github.com/QwenLM/qwen-code/pull/9130)**  
    Re-runs modified tests N times (default 5) after clean install to catch flakes deterministically.

---

## Feature Request Trends

- **Session lifecycle management**: Multiple requests for reusing sessions across scheduled tasks ([#8906](https://github.com/QwenLM/qwen-code/issues/8906), [#9361](https://github.com/QwenLM/qwen-code/pull/9361)) and session rotation bounds ([#8927](https://github.com/QwenLM/qwen-code/pull/8927)).
- **Transcript/export contracts**: Calls for a cross-host chat transcript contract ([#9354](https://github.com/QwenLM/qwen-code/issues/9354)) and HTML export improvements with expand/collapse ([#8208](https://github.com/QwenLM/qwen-code/issues/8208), [#9367](https://github.com/QwenLM/qwen-code/pull/9367)).
- **Daemon resource governance**: Continued pressure to bound memory/bytes in `qwen serve` ([#8051](https://github.com/QwenLM/qwen-code/issues/8051), [#8091](https://github.com/QwenLM/qwen-code/issues/8091)) and file-mode configurability ([#9250](https://github.com/QwenLM/qwen-code/issues/9250)).
- **Dynamic provider models**: Users want ModelStudio presets to fetch model lists dynamically ([#9368](https://github.com/QwenLM/qwen-code/issues/9368)).

---

## Developer Pain Points

- **CLI regressions on Windows**: Ctrl+V paste broken ([#9061](https://github.com/QwenLM/qwen-code/issues/9061)), copy-field issues ([#9315](https://github.com/QwenLM/qwen-code/issues/9315)), and multi-copy message delivery ([#9324](https://github.com/QwenLM/qwen-code/issues/9324)) — platform-specific quality is a recurring frustration.
- **Context compression correctness**: Lost context after `/compress-fast` + `/rewind` ([#9320](https://github.com/QwenLM/qwen-code/issues/9320)), inaccurate compression math ([#9309](https://github.com/QwenLM/qwen-code/issues/9309)), and stale status-line percentages ([#6806](https://github.com/QwenLM/qwen-code/issues/6806)).
- **Review/autofix inefficiency**: Event storms and duplicate dispatch ([#9296](https://github.com/QwenLM/qwen-code/issues/9296)) plus test-pin gaps ([#9194](https://github.com/QwenLM/qwen-code/issues/9194)) signal that the CI workflow itself needs hardening.
- **Daemon resource transparency**: Users repeatedly ask for bounded resource usage and configurable file permissions ([#9250](https://github.com/QwenLM/qwen-code/issues/9250)) — production operators want predictability.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-18

## Today's Highlights

The project (now branded **CodeWhale**) is in the final stretch of the v0.9.9 release cycle, with release notes finalized and the 0.9.9 tag built green across all seven targets. Community contributor @h3c-hexin landed two performance fixes for skill prompt stability and web tool result compaction, while @Lstarsky0 continues the bilingual dictionary spine refactor across the website. The maintainer has filed an ambitious set of product‑discoverability epics (#5439, #5442) and a tiered migration plan (#5443) to retire `deepseek-tui`‑era identifiers.

## Releases

**No new release in the last 24h.** The most recent release, **v0.9.9**, was assembled via PR [#5476](https://github.com/Hmbown/CodeWhale/pull/5476) (merged 2026‑08‑17) with a "truth‑and‑resilience" theme: the shell tool can no longer wedge a session on disk/descriptor exhaustion (#5465), and unverified context windows / output ceilings / telemetry defaults are labeled honestly. A follow‑up CHANGELOG addendum ([#5487](https://github.com/Hmbown/CodeWhale/pull/5487)) covers an ambient ocean scene for the DeepSeek Harness bundle, the model‑catalog currency sweep, and the website copy rewrite.

---

## Hot Issues

1. **[#5424 — v0.9.7: TUI crashes after ~1 minute of waiting](https://github.com/Hmbown/CodeWhale/issues/5424)** (closed, 7 comments)  
   User `Hixac` reports CodeWhale exits by itself after prompting and waiting. High‑signal bug report with steps to reproduce; closed quickly, likely a regression from the 0.9.7 close‑out.

2. **[#5056 — Flaky verifier tests + /workspace‑sensitive fixtures](https://github.com/Hmbown/CodeWhale/issues/5056)** (open, 8 comments)  
   `run_verifiers_background_*` tests flake under full‑suite parallelism; 12 `#[ignore]` tests remain untriaged. The maintainer tracks this as a release‑gate risk (also referenced in #5355 for v0.9.8).

3. **[#5123 — Agent spawn surface: too many knobs, labeled “builder” runs read‑only and self‑BLOCKED](https://github.com/Hmbown/CodeWhale/issues/5123)** (open, 7 comments)  
   Dogfood failure: delegated agents labeled `builder`/`gates‑shell‑writer` get a **read‑only** tool contract, so they cannot execute the gates they were assigned. Points to a fundamental mismatch between role labels and live tool permissions.

4. **[#1425 — Session freeze on large‑text processing (3M‑char novel)](https://github.com/Hmbown/CodeWhale/issues/1425)** (open, 7 comments)  
   Sub‑agents all show `Running` but `agent_wait` times out and the session wedges. The user confirms the session isn’t dead—it’s interrupted—but requires a new session to recover. A concurrency/timeout design issue with 10 parallel sub‑agents.

5. **[#2369 — Config paths fragmented across OS/Cygwin + silent migration bug](https://github.com/Hmbown/CodeWhale/issues/2369)** (open, 8 comments)  
   Windows and Cygwin resolve home‑directory rules differently; legacy migration leaves config splits. The attached patch implies work is already underway.

6. **[#5324 — Simplify the 32‑field `agent` tool schema](https://github.com/Hmbown/CodeWhale/issues/5324)** (closed, 8 comments)  
   32 properties, zero required fields, eight actions, plus alias bag — models error out. The community and maintainer agree this schema needs simplification; closed as a scoped refactor.

7. **[#5350 — Third‑party model config: pre‑built templates](https://github.com/Hmbown/CodeWhale/issues/5350)** (open, 4 comments)  
   Users want built‑in templates for OpenCode Zen, OpenCode Go, Agnes, and Sensenova, plus a “test connection” button. Highlights friction: manual Base URL/model name entry and `not checked`/`cache failed` states are a top onboarding blocker.

8. **[#5239 — Why trigger compression at 128K when the model supports 1M?](https://github.com/Hmbown/CodeWhale/issues/5239)** (closed, 2 comments)  
   Context‑compression threshold appears hard‑coded at 128K despite 1M‑token support. Users want configurability; closed as a settings/enhancement item.

9. **[#5439 — Workflow/goal/auto modes are buried](https://github.com/Hmbown/CodeWhale/issues/5439)** (open, 1 comment)  
   Product gap: the orchestration trio shipped and works but isn’t discoverable. The maintainer wants them one‑keystroke usable from the palette root.

10. **[#5482 — EPIC: localize all documentation to Chinese](https://github.com/Hmbown/CodeWhale/issues/5482)** (open, 1 comment)  
    A Chinese‑speaking contributor files a docs‑localization epic. Given several Chinese‑language issues in this digest, this could become a high‑impact community effort.

---

## Key PR Progress

1. **[#5494 — Configurable auto‑router classifier timeout](https://github.com/Hmbown/CodeWhale/pull/5494)** (open)  
   New contributor `Gabriel-Degret` makes the classifier timeout configurable via `[auto.router] timeout_secs` (previously hardcoded at 4s).

2. **[#5493 — Classify OrcaRouter as an aggregator billing surface](https://github.com/Hmbown/CodeWhale/pull/5493)** (open)  
   Fixes mislabeled billing: OrcaRouter (a zero‑markup router) fell through to first‑party PAYG. Corrects cost display for users on that endpoint.

3. **[#5492 / #5473 — Keep configured skill prompts stable](https://github.com/Hmbown/CodeWhale/pull/5492)** (open/closed)  
   Native skills under a configured root now show only name+description in the model‑facing catalog; the physical path is replaced with `<configured-skills>` in discovery warnings. Improves prompt stability and reduces noise.

4. **[#5491 — Persist approval outcomes before execution](https://github.com/Hmbown/CodeWhale/pull/5491)** (open)  
   Implements #5360: approval requests/terminal outcomes are persisted in a session log **before** execution; denies execution when the receipt can’t be persisted; reconstructs closed/interrupted state on resume. Fail‑closed by design.

5. **[#5490 — Route shared components’ locale picks through pickText](https://github.com/Hmbown/CodeWhale/pull/5490)** (closed)  
   Another dictionary‑spine step (closes part of #5337): ten `{ en, zh }` ternary picks reduced to nine `pickText()` calls in shared components.

6. **[#5488 — Move docs shell onto the dictionary spine](https://github.com/Hmbown/CodeWhale/pull/5488)** (closed)  
   `docs/layout.tsx` hero strings were still `isZh` ternaries; now on `pickText()`, so the eight partial locales (ja/vi/ko/ru/uk/es/pt‑BR/id) can be translated without editing TSX.

7. **[#5486 — Hide session metrics strip on compact rows](https://github.com/Hmbown/CodeWhale/pull/5486)** (closed)  
   Below 60 columns, the phase strip already stood down; now the metrics strip also hides, fixing cramped 59‑column row rendering.

8. **[#5485 — Model catalog currency sweep](https://github.com/Hmbown/CodeWhale/pull/5485)** (closed)  
   All first‑party model rows/pricing re‑verified against official pages as of 2026‑08‑17 (curl + embedded xAI price tables). Keeps cost estimates honest.

9. **[#5475 — Resolve owned direct model casing safely](https://github.com/Hmbown/CodeWhale/pull/5475)** (closed, @h3c-hexin)  
   Lowercase saved selectors like `glm-5.2` now resolve against the owning Z.ai catalog row before another provider’s identical bare wire id can misclassify them as foreign.

10. **[#5474 — Compact all noisy web tool results](https://github.com/Hmbown/CodeWhale/pull/5474)** (closed, @h3c-hexin)  
    Extends the noisy‑result soft limit to `Web`, `web_search`, `web.run`, and `fetch_url` (with alias‑routing coverage + regression tests). Directly addresses the “web tool results blow up context” complaint.

---

## Feature Request Trends

- **Configurability & templates for third‑party providers** — #5350 (pre‑built templates, test‑connection button) and #5494 (router timeout) show the community wants plug‑and‑play setup, not manual Base URL/model/key entry.
- **Context‑window honesty and control** — #5239 (compression at 128K vs 1M support) and #5474 (compact noisy web results) reflect a broader push to use the 1M window effectively and avoid surprise compression.
- **Agent‑role/permission integrity** — #5123 (read‑only “builder” agents) and #5491 (durable approvals) point to trust‑and‑safety as a first‑class concern as sub‑agent delegation scales.
- **Product discoverability** — #5439 (workflow/goal/auto modes one‑keystroke), #5442 (advanced commands hidden at palette root), and #5437 (status‑bar color grammar docs) indicate the tool has more capability than users can find.
- **Localization & i18n completeness** — #5482 (docs to Chinese), #5290, #5488, #5490 — a mature, bilingual audience that expects the website and docs to match the TUI’s quality.

---

## Developer Pain Points

- **Flaky tests & CI red on both platforms** — #5056 and #5403 report parallel‑load flakes, /workspace‑sensitive fixtures, and failed NSIS/plugin_e2e runs. Release gates keep getting tripped by environment‑dependent tests.
- **Silent config misbehavior** — #2369 (fragmented paths across OS/Cygwin, silent migration) and #5098 (fleet config shadowing) describe configs that “don’t take effect” without any error.
- **Session/resource wedge conditions** — #1425 (sub‑agent wait timeout freezes), #5424 (crash after prompt), #5465 (disk/descriptor exhaustion wedges shell) — the TUI still has edge cases where a session becomes unrecoverable without a restart.
- **Sandbox / network friction** — #1829 (SSH exit 255, suspected TCP‑22 blocking) and #5410 (bwrap denies `/dev/null` redirection and system‑library linking) frustrate users who need real shell capability inside the sandbox.
- **Schema complexity hurts model performance** — #5324 (32‑field agent schema, zero required) and #4683 (wrong completions URL, flaky) reflect that simpler, more‑reliable surfaces are a consistent ask.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*