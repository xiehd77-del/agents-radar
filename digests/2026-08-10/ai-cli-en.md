# AI CLI Tools Community Digest 2026-08-10

> Generated: 2026-08-10 01:55 UTC | Tools covered: 9

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
**Date:** 2026-08-10

---

## 1. Ecosystem Overview

The AI CLI tool landscape is in a **maturation phase** marked by intense focus on reliability, cross-platform parity, and agent orchestration capabilities. Virtually all major tools (Claude Code, OpenAI Codex, Gemini CLI, and OpenCode) are grappling with **model classifier false positives**, **Windows-specific regressions**, and **MCP/tool-ecosystem friction** — indicating that the "first-mile" agentic experience is stabilizing while the "last-mile" production hardening remains unresolved. Communities are demanding **observability, configurability, and escape hatches** — from model-downgrade overrides to configurable timeouts and retry logic. The shared trajectory is toward **multi-agent orchestration** and **persistent memory systems**, with Gemini CLI's "agents calling agents" PR and Qwen Code's leader-worker RFC signaling the next frontier.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (Active) | Release Status | Notable Activity Level |
|------|-------------|--------------|----------------|----------------------|
| **Claude Code** | 10 | 5 | No new release | Moderate — focused on bug reporting |
| **OpenAI Codex** | 10 | 7 | No new release | High — clustered fixes landed (CRLF, Cursor path) |
| **Gemini CLI** | 10 | 10 | Nightly v0.56.0 | High — heavy dependency churn, significant PRs |
| **GitHub Copilot CLI** | 10 | 0 | No new release | High — wave of triage-labeled bugs |
| **Kimi Code CLI** | 2 | 1 | No new release | Low — quiet day, 1 critical bug |
| **OpenCode** | 10 | 10 | No new release | Very High — multiple fixes + Go subscription outage |
| **Pi** | 10 | 10 | No new release | High — 9 issues opened, many closed with fixes |
| **Qwen Code** | 10 | 10 | Nightly v0.21.8 | Very High — 21 issues, 50 PRs updated |
| **DeepSeek TUI** | 10 | 4 | v0.9.6 in prep | Moderate — release chore in progress |

**Observation:** Qwen Code and OpenCode are the most active repositories by PR count, while Gemini CLI logged the highest volume of dependency churn (74-package bundle). Copilot CLI saw zero PR activity but a significant bug-report wave.

---

## 3. Shared Feature Directions

| Trend | Tools Involved | Specific Needs |
|-------|---------------|----------------|
| **Cross-directory / cross-session conversation resume** | Claude Code (#28745, 76👍), OpenAI Codex (#5609), OpenCode | Users want to resume conversations after project renames, sync across platforms, and preserve state on crash |
| **Safety/model classifier overrides** | Claude Code (#67246, #85414, #85415), OpenCode | Users demand escape hatches when classifiers misfire — ability to override model downgrades and safety halts |
| **Customizable TUI/status visibility** | OpenAI Codex (#17827, 150👍), Copilot CLI (#4418), DeepSeek TUI (#5270), Qwen Code (#8794) | Token usage, model name, rate limits, git branch visible in status line; unified task tracking |
| **Persistent memory / context portability** | Kimi Code (#1283, 27 comments), OpenCode (#41453), Qwen Code (#7585, #7449), Gemini CLI (Auto Memory issues) | AI-managed notes, project conventions, cross-session context — both manual and automatic |
| **MCP server reliability & graceful degradation** | Copilot CLI (#4421, #4419), Gemini CLI (tool scoping), Qwen Code (#8784), Claude Code (#66084) | Configurable timeouts, retry/backoff, graceful SSE→Polling fallback, avoiding interim deny-all policies |
| **Multi-agent orchestration & recursion** | Gemini CLI (#28738), Qwen Code (#8718, #8769), OpenCode (#13715) | Leader-worker dispatch, subagent delegation, structured result collection, permission handling for nested agents |
| **Provider/key management for multi-provider setups** | DeepSeek TUI (#5250), OpenCode (#7602), Pi (#7847) | Per-provider key storage, cross-model fallback chains, coherent provider+model switching |
| **Windows platform parity** | Claude Code (#81306), OpenAI Codex (CRLF #4003, Computer Use #37043), Qwen Code (#7118, #8615) | Installer reliability, line-ending preservation, Computer Use fixes, avoiding data-loss on crash |
| **Observability of model/effort internals** | Claude Code (#85416, #85415), DeepSeek TUI (#5096) | See subagent effort levels, understand model downgrade rationale, verify compaction actually worked |
| **Localization (i18n)** | Claude Code (#31413), Copilot CLI (#4407), DeepSeek TUI (#4949) | Chinese localization for UI, configurable language options |

---

## 4. Differentiation Analysis

| Tool | Focus | Target User | Technical Approach |
|------|-------|-------------|-------------------|
| **Claude Code** | Safety, ecosystem compatibility | Enterprise developers within Anthropic ecosystem | Premium-class locked models (Fable 5 / Opus 4.8), heavy CLI+agent symmetry, skills/plugins |
| **OpenAI Codex** | TUI quality-of-life, cross-platform parity (esp. Windows) | Developers in OpenAI/Microsoft stack | Aggressive bug-fix cadence, gRPC TCP support for remote code-mode, line-ending preservation modes |
| **Gemini CLI** | Agent autonomy, subagent reliability | Developers seeking Google Gemini model access | Agent-recursion enablement, "agents calling agents" frontmatter, Auto Memory system |
| **GitHub Copilot CLI** | MCP integration, enterprise model discovery | GitHub-centric enterprise developers | Leverages GitHub Copilot models, hardcoded handshake budgets, fail-closed policies |
| **Kimi Code CLI** | Minimalist, router-focused (Kosong) | Developers needing lightweight ANTLR-based routing | "Wire protocol" depth, ACP streaming modes, minimal feature surface |
| **OpenCode** | Subscription-based (Go), TUI stability | Developers wanting open-source Claude Code alternative | Copilot/Claude Code compatibility, AI-SDK-based providers |
| **Pi** | Protocol-first design, extensibility | Extension builders, mobile/remote access | Remote session wire protocol, built-in llama.cpp/OpenRouter providers, agent-request merge protocol |
| **Qwen Code** | Multi-agent orchestration, enterprise integration | Developers in Qwen-aligned enterprise stacks | Plugin extension layer, workflow engine rebuild of `/review`, Web Shell daemon/SDK surface |
| **DeepSeek TUI** | Compaction, sub-agent identity, internationalization | DeepSeek API users seeking TUI + Fleet | "Subtractive runtime" approach — removing harness-created obstruction |

**Key differentiators:** Gemini CLI is pushing **agent recursion** hardest; Qwen Code is leading **orchestration infrastructure**; OpenCode is betting on **open-source Claude Code drop-in replacement**; Pi is pioneering **protocol-first extension architecture**; DeepSeek TUI is niche-focused on **compaction science** and **internationalization**.

---

## 5. Community Momentum & Maturity

| Tool | Community Signals | Iteration Speed | Maturity Assessment |
|------|------------------|-----------------|---------------------|
| **Claude Code** | 76👍 on cross-directory resume; #85414/#85415 new reports; sustained high engagement | Moderate — no new releases, but trackers active | **Mature core, strained trust** — safety-classifier issues eroding confidence |
| **OpenAI Codex** | 150👍 on status line; 74👍 on CRLF; weekend fix batch landed | Very fast — 7 PRs today, directly addressing long-standing issues | **Mature, but Windows gap** — systemic Computer Use failures unresolved |
| **Gemini CLI** | 8👍 on hang; "agents calling agents" PR gaining traction; nightly pipeline steady | High — but heavy dependency churn destabilizes | **Maturing, reliability-crunch** — P1s open for months |
| **GitHub Copilot CLI** | 18 triage-labeled issues in 24h; MCP concerns dominate | Slow — no PRs, bug reports accumulating | **Enterprise trust gap** — silent failures dangerous |
| **Kimi Code CLI** | Quiescent — 2 issues, 1 PR | Low — but critical bug surfaced | **Early-stage** — small community, big reliability needs |
| **OpenCode** | 110👍 on clipboard bug; Go subscription outage galvanizing | Very fast — 10 PRs today, including -75% renderer size | **Rapid growth, subscription stain** — Go reliability hurting trust |
| **Pi** | 14👍 on llama.cpp; steady issue closure pattern | High — 10 PRs, 9 issues closed | **Mature protocol, TUI bugs linger** — actively hardening |
| **Qwen Code** | 21 issues, 50 PRs; multi-agent RFCs active | Very fast — nightly releases | **Accelerating roadmap** — most active repository today |
| **DeepSeek TUI** | 8 comments on i18n; compaction debates | Moderate — release chore focus | **Niche maturity** — passionate community, narrow scope |

---

## 6. Trend Signals

1. **"Configurability is the new feature."** Across all tools, demand for **overrides, opt-in flags, and configurable timeouts** is rising — from Claude Code's safety-classifier override to Copilot CLI's MCP handshake budget and Codex's line-ending preservation flag. Users want **default-safe but admin-controllable** behavior.

2. **Agent orchestration is the next battleground.** Gemini CLI's "agents calling agents," Qwen Code's leader-worker RFC, and OpenCode's nested-subagent permission handling all point to **multi-agent workflows as the primary user ask**. The ecosystem is shifting from single-agent coding assistants to **distributed agent networks**.

3. **Windows remains the second-class citizen.** Every major tool has Windows-specific reliability gaps: Codex's Computer Use failures, Claude Code's MSIX crashes, Qwen Code's installer SHA-256 issues. **Cross-platform parity is the biggest untapped differentiation opportunity.**

4. **Memory is the missing layer.** Kimi Code's Memory System, Qwen Code's external-memory profiles, Gemini CLI's Auto Memory complaints, and OpenCode's persistent-daemon request all signal that **statelessness is no longer acceptable**. Users want agents that learn project conventions across sessions.

5. **Silent failures are the #1 trust killer.** Whether it's Copilot CLI's dropped prompts, OpenCode's "terminated" errors, DeepSeek TUI's fake-success file edits, or Gemini CLI's MAX_TURNS-as-GOAL-success — **unobservable, silent degradation is the most damaging pattern** in the ecosystem. Tools that make failure loud, debuggable, and recoverable will win user trust.

6. **Rate limits and model fallback are becoming critical enterprise needs.** OpenCode's 107👍 fallback-chain request, Copilot CLI's per-model 429s, and Pi's Copilot rate-limit fix all indicate that **resilience against provider-side throttling** is a growing production concern.

7. **Dependency hygiene is a double-edged sword.** Gemini CLI's 74-package update and major SDK jumps (GenAI 1.x → 2.x) signal that **maintenance churn can destabilize**; Pi's careful release-order validation and DeepSeek TUI's crate-publication-order checks suggest that **release infrastructure maturity is a differentiator**.

8. **Localization is rising as a community signal.** Chinese-language requests across Copilot CLI, DeepSeek TUI, and Claude Code indicate **the global developer base is expanding** — i18n will become a feature requirement, not a nicety.

---

*Sources: Claude Code #67246/#28745/#72248/#81306/#85240/#80874/#66084/#85415/#85414/#82712; OpenAI Codex #17827/#37043/#37180/#4003/#25928/#15299/#11011/#5609/#37383/#34248; Gemini CLI #22323/#21409/#24353/#25166/#21968/#26522/#26525/#22232/#24246/#22093 + PRs #28746/#28749/#28744/#28738/#28743/#28742/#26540; Copilot CLI #4423/#4421/#4422/#4420/#4419/#4414/#4416/#4413/#4415/#4412; Kimi Code #2598/#1283 + PR #739; OpenCode #4283/#7602/#41306/#34743/#785/#12472/#13715/#30221/#39838/#41453 + PRs; Pi #7730/#6922/#7869/#7850/#7868/#7860/#7855/#7864/#7862/#7846 + PRs; Qwen Code #8718/#7118/#8784/#7585/#8615/#8659/#8769/#8721/#8823/#7449 + PRs; DeepSeek TUI #5239/#5034/#5293/#4949/#5096/#5209/#5023/#5250/#5270/#5314 + PRs.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-10 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skills have generated the most community discussion and attention through PR activity:

### #1 — Skill-Creator Bug Fixes (The "Recall 0%" Saga)
- **PRs:** [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#539](https://github.com/anthropics/skills/pull/539), [#1323](https://github.com/anthropics/skills/pull/1323), [#1261](https://github.com/anthropics/skills/pull/1261)
- **Status:** All Open
- **Description:** The single most active area of community contribution. Multiple independent contributors (MartinCajiao, joshuawowk, gstreet-ops, Lubrsy706, Polluelo978, alvingarcia) have submitted fixes for `run_eval.py` — the skill-description evaluation script — which consistently reports `recall=0%` on every query. Root causes include Windows subprocess handling, case-sensitive file references, YAML parsing failures, and trigger-detection logic bugs. This blocks the description-optimization loop (`run_loop.py`) from meaningfully improving Skill descriptions.

### #2 — document-typography ([PR #514](https://github.com/anthropics/skills/pull/514))
- **Author:** PGTBoos | **Status:** Open
- **Description:** A quality-control Skill preventing typographic defects in AI-generated documents: orphan word wrapping (1–6 words on a new line), stranded section headers (widow paragraphs), and numbering misalignment. Addresses a universal pain point in Claude-generated output.

### #3 — ODT Skill ([PR #486](https://github.com/anthropics/skills/pull/486))
- **Author:** GitHubNewbie0 | **Status:** Open
- **Description:** Adds OpenDocument Format (ODT/ODS) creation, template filling, and ODT→HTML parsing. Complements the existing docx and pdf Skills to expand the document-format coverage of the ecosystem.

### #4 — frontend-design Skill Improvement ([PR #210](https://github.com/anthropics/skills/pull/210))
- **Author:** justinwetch | **Status:** Open
- **Description:** A revision of the existing frontend-design Skill focused on clarity and actionability — ensuring every instruction is executable within a single conversation and steering Claude behavior more precisely.

### #5 — testing-patterns Skill ([PR #723](https://github.com/anthropics/skills/pull/723))
- **Author:** 4444J99 | **Status:** Open
- **Description:** A comprehensive Skill covering the full testing stack: Testing Trophy philosophy, unit testing (AAA pattern, naming, edge cases), React component testing with Testing Library, and what NOT to test. Broad scope suggests high utility.

### #6 — skill-quality-analyzer + skill-security-analyzer ([PR #83](https://github.com/anthropics/skills/pull/83))
- **Author:** eovidiu | **Status:** Open
- **Description:** Two meta Skills for the `example-skills` marketplace collection: a quality analyzer evaluating Skills across five dimensions (structure, documentation, examples, resources) and a security analyzer for trust-boundary review.

### #7 — pyxel Retro Game Development ([PR #525](https://github.com/anthropics/skills/pull/525))
- **Author:** kitao | **Status:** Open
- **Description:** A Skill for the [pyxel-mcp](https://github.com/kitao/pyxel-mcp) server enabling retro/pixel-art/8-bit game creation in Python. Covers the full write → run → inspect → iterate workflow. Author is the maintainer, indicating production readiness.

---

## 2. Community Demand Trends

Analysis of the most-commented Issues reveals four clear demand directions:

### A. Trust & Security Hardening (Highest Urgency)
- **[Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments):** Community Skills distributed under the `anthropic/` namespace enable "trust boundary abuse" — users may grant elevated permissions believing Skills are official. This is the most-commented issue in the repo and points to a systemic governance gap.
- **[Issue #1175](https://github.com/anthropics/skills/issues/1175):** Concerns about security and context-window when handling SharePoint Online documents via Agent Skills.

### B. Skill-Creator Reliability
- **[Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments):** `run_eval.py` never triggers Skills in `claude -p` mode (0% trigger rate). The meta-tooling for Skill creation is broken on core paths, stalling Skill quality improvement at scale.
- **[Issue #1169](https://github.com/anthropics/skills/issues/1169):** The description-optimization loop returns 0% recall even for literal slash-command queries.

### C. Collaboration & Distribution Infrastructure
- **[Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍):** Strong demand for **org-wide Skill sharing** in Claude.ai — a shared Skill library or direct sharing link to replace the manual download-and-upload workflow.
- **[Issue #189](https://github.com/anthropics/skills/issues/189) (9 👍):** Duplicate Skills when installing both `document-skills` and `example-skills` plugins — packaging and deduplication needs attention.

### D. Context-Window Efficiency
- **[Issue #1487](https://github.com/anthropics/skills/issues/1487):** The `claude-api` Skill eagerly injects ~156k tokens in a single tool call, exhausting the context window. Signals a broader need for lazy-loading and size-aware Skill design.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land soon:

| PR | Skill | Why It Stands Out |
|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** — mechanical file verification + four-dimension reasoning quality gate | Universal (any project/stack/model); directly addresses AI-output verification before delivery |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** — lifecycle management for planning artifacts | Solves the "accumulated planning docs" problem; collaborative authorship acknowledged |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** — color naming, spaces, and selection | Self-contained expertise with practical tables (OKLCH vs. OKLAB vs. CAM16); author meodai has deep design credibility |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — full test-stack guidance | Broad applicability; covers philosophy through React specifics |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** — typographic quality control | Fixes a universal defect class in AI-generated docs; instantly useful |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for trustworthy, reliable meta-tooling — fixing the Skill-creator pipeline and establishing security boundaries for distributed Skills — before expanding into new functional domains.**

In short: the community wants to *trust* the Skills they install and *fix the tooling that evaluates Skills*, more than it wants new functional Skills. This is a maturity signal: the ecosystem is past "what Skills can do" and into "how do we make Skills safe, reliable, and consistently high-quality."

---

# Claude Code Community Digest — 2026-08-10

## Today's Highlights

The community is raising significant concerns about the **Fable 5 safety classifier** causing session halts and forced model downgrades on benign content, with a cluster of new reports submitted today (#85414, #85415, #85375–#85392). Meanwhile, a long-standing request for **cross-directory conversation resume** (#28745) continues to gain traction with 76 upvotes, and a **Windows MSIX package crash** (#81306) highlights data-loss risks in the desktop app. No new releases shipped in the last 24 hours.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [**#67246**](https://github.com/anthropics/claude-code/issues/67246) — Safety-classifier model switch (Fable 5 → Opus 4.8) fires on benign content, can't be overridden
The Fable 5 safety classifier silently switches sessions to Opus 4.8 mid-discussion, and `/model` cannot override it. Community reaction: 12 comments, 3 upvotes. Users report this interrupts normal engineering work with no escape hatch, creating a frustrating "dead end" loop.

### 2. [**#28745**](https://github.com/anthropics/claude-code/issues/28745) — Allow resuming conversations from different directories
Conversations remain tied to their original directory; moved/deleted worktrees make them unrecoverable. **76 upvotes** make this the most-demanded enhancement in the tracker. Multiple users describe losing valuable context after renaming projects.

### 3. [**#72248**](https://github.com/anthropics/claude-code/issues/72248) — Workflow tool delivers JSON args as string instead of parsed object
Contradicts the documented "verbatim" contract — objects/arrays arrive as JSON-encoded strings. Reproduced with 10 comments. Affects anyone building multi-step workflow automations.

### 4. [**#81306**](https://github.com/anthropics/claude-code/issues/81306) — Windows: Desktop crash wedged the MSIX package, destroying local app data
A crash corrupted the MSIX install, requiring manual package removal that deleted Code-tab group assignments and crash dumps. Serious data-loss concern for Windows desktop users; 5 comments.

### 5. [**#85240**](https://github.com/anthropics/claude-code/issues/85240) — Remote Control: responses never render until manual refresh
Across iPad Safari/Chrome and macOS Safari, every response requires a manual page reload. Reproduces consistently; 5 comments. Major usability blocker for remote workflows.

### 6. [**#80874**](https://github.com/anthropics/claude-code/issues/80874) — GitHub Integration: OAuth succeeds but all writes fail with "403 Resource not accessible by integration"
The connector appears authorized but cannot perform any write operations. 4 comments; notably impacts PR/issue automation workflows.

### 7. [**#66084**](https://github.com/anthropics/claude-code/issues/66084) — `tools/list_changed` doesn't refresh deferred-tool/ToolSearch index
Persists through 2.1.165; dynamically added MCP tools remain invisible until restart. 4 comments, 2 upvotes — a core DX issue for MCP-heavy setups.

### 8. [**#85415**](https://github.com/anthropics/claude-code/issues/85415) — Session unexpectedly downgrading to Opus 4.8 from Fable 5
New today: user reports a harmless weekend project triggering a downgrade. Frustration is high — "At the VERY WORST: Downgrade to Opus 5, not 4.8!" Suggests a jarring quality regression from the downgrade path.

### 9. [**#85414**](https://github.com/anthropics/claude-code/issues/85414) — Fable 5 safeguards flag defensive security audit output (false positive)
New today: routine audit → fix → re-audit loops on the user's **own repository** get flagged. Highlights a systemic over-triggering problem rather than an edge case.

### 10. [**#82712**](https://github.com/anthropics/claude-code/issues/82712) — Plugin version resolution escapes marketplace root and adopts `~/.claude` HEAD
When a marketplace lacks `.git` and a plugin declares `"version": null`, resolution walks up the filesystem and resolves against user's global config — causing per-commit re-cloning. Subtle but nasty isolation bug.

---

## Key PR Progress

### 1. [**#85409**](https://github.com/anthropics/claude-code/pull/85409) — security-guidance: update default model refs to Opus 5/Sonnet 5
Open. Updates stale Opus 4.7 / Sonnet 4.6 references in the plugin's README, hook code, and `llm.py` defaults. Good hygiene PR aligning docs with current models.

### 2. [**#85323**](https://github.com/anthropics/claude-code/pull/85323) — fix(plugin-dev): parse block scalar agent descriptions
Open. Fixes the remaining YAML block-scalar defect from #83803 — `validate-agent.sh` now correctly measures multiline `description: |` / `>` values. Important for agent authors using multiline docs.

### 3. [**#85243**](https://github.com/anthropics/claude-code/pull/85243) — fix(skills): use spec-conformant names in plugin-dev and hookify skills
Open. Eight bundled skills declare title-cased `name:` fields containing spaces — violates the spec. Renames to conformant identifiers. Cleanup that prevents subtle resolution bugs.

### 4. [**#9262**](https://github.com/anthropics/claude-code/pull/9262) — docs: enforce task tool and model metadata
Closed. Documents `claude-3-5-haiku-latest` via `model` parameter on commit command docs and requires the Task tool across commit workflows. Docs-only change; no tests run.

### 5. [**#17395**](https://github.com/anthropics/claude-code/pull/17395) — [Plugin] Add `agent-session-commit` plugin to iterate on `AGENTS.md`
Closed. Adds `AGENTS.md` as authoritative instructions with `CLAUDE.md` as pointer; introduces `/session-commit` manual trigger and a Stop-hook prompt at session end. Useful pattern for incremental project-doc maintenance.

---

## Feature Request Trends

1. **Cross-session/context portability** — the #1 trend. Users want to resume conversations across directories (#28745, 76👍), preserve pinned sessions from archiving (#62104), and avoid state loss on crash (related to #81100/#81306).
2. **Localization of the UI** (#31413, 8👍) — request for i18n support in the Claude Code interface; a steady, long-running thread since March.
3. **Observability of model/effort internals** — new requests to see subagent effort levels (#85416) and understand why model downgrades occur (#85415). Users want transparency into what's running and why.
4. **Safety-classifier overrides** — desire for admin/override controls when the Fable 5 classifier misfires (#67246, #85414). Users expect safe defaults but demand an escape hatch.

---

## Developer Pain Points

1. **Fable 5 safety classifier false positives** — the dominant complaint this week. Benign engineering discussion, defensive audits, even expletive-laden frustration trigger session halts or silent model downgrades to Opus 4.8. The lack of override amplifies the frustration.
2. **Data-loss scenarios** — recurring across platforms: Windows MSIX crash destroying local data (#81306), 30-day retention sweep deleting the only transcript copy (#81100), cross-platform sync failures making conversations vanish (#81658).
3. **Silent state/behavior desync** — denied tool calls executing anyway (PowerShell, #83760), MessageDisplay hooks returning valid content but original text rendered (#83957), stale persisted credentials/permissions/memory (#85398). The system's behavior diverges from user intent with no visibility.
4. **MCP/tool-ecosystem friction** — deferred tool index not refreshing (#66084), JSON args arriving as strings in workflows (#72248), GitHub integration write-permission failures (#80874). Tooling integrations remain the roughest edge.
5. **Remote/desktop sync gaps** — responses requiring manual refresh in Remote Control (#85240) and VSCode forking producing blank chats with invisible sessions (#85008). Multi-surface workflows feel unreliable.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**2026-08-10**

---

## Today's Highlights

The Codex team shipped a clustered batch of fixes over the weekend targeting two long-standing pain points: line-ending preservation in `apply_patch` (finally addressing the Windows CRLF issue) and Cursor project path resolution performance. Meanwhile, Windows users continue to flood the tracker with Computer Use failures — the `EnumWindows 0x80070003` error now spans at least four separate issues, indicating a systemic problem in the desktop app's Windows implementation rather than isolated user misconfiguration.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#17827 — Customizable status line](https://github.com/openai/codex/issues/17827)
*39 comments | 150 👍 | Enhancement, TUI*

Users want a Claude Code-style configurable status bar showing token usage, model name, rate limits, context window, and git branch. The high engagement (150 upvotes) signals this is one of the most-wanted TUI quality-of-life features in the backlog. The request includes support for shell-script-driven custom content.

### 2. [#37043 — Windows Computer Use fails at EnumWindows with 0x80070003](https://github.com/openai/codex/issues/37043)
*18 comments | 4 👍 | Bug, Windows, Computer Use*

The bundled Computer Use helper starts but both `sky.list_apps()` and `sky.list_windows()` fail immediately with `EnumWindows failed: The system cannot find the path specified.` The failure survives reboots and Codex restarts, suggesting a broken native dependency or path assumption in the Windows build.

### 3. [#37180 — Windows Computer Use approval prompt never appears; launch_app fails](https://github.com/openai/codex/issues/37180)
*11 comments | 6 👍 | Bug, Windows, Computer Use*

Related to the above: the approval prompt never appears and `launch_app` fails with `node_repl exec context not found`. This blocks the entire Computer Use workflow on Windows, not just discovery — approvals and app launches are both broken.

### 4. [#4003 — Patched files have mixed line endings on Windows](https://github.com/openai/codex/issues/4003)
*33 comments | 74 👍 | Bug, Windows, Tool Calls*

The long-running (since Sept 2025) issue where Codex normalizes CRLF files to LF when applying patches, causing noisy diffs and broken files in Windows repos. Two PRs landed today (#37757, #37758) adding opt-in line-ending preservation — watch for them in the next release.

### 5. [#25928 — VS Code/Cursor Extension: Submitted Prompts Randomly Disappear](https://github.com/openai/codex/issues/25928)
*25 comments | 17 👍 | Bug, Windows, Extension*

Prompts submitted from the IDE extension randomly vanish before entering the queue on Windows. Intermittent, hard to reproduce, but severely disruptive — users report lost work and confusion about whether requests were ever sent.

### 6. [#15299 — Support inbound MCP notifications routed into an active Codex CLI session](https://github.com/openai/codex/issues/15299)
*15 comments | 14 👍 | Enhancement, MCP*

Users want external channels (chat, CI, other tools) to push messages into a running Codex CLI session via MCP notifications. Currently Codex can *call* MCP tools but has no documented inbound path for server-initiated events — a gap for building interactive agent workflows.

### 7. [#11011 — Switching between threads is very slow](https://github.com/openai/codex/issues/11011)
*21 comments | 19 👍 | Bug, App, Performance*

The desktop app's thread switching became dramatically slower after a recent update. Combined with #20802 (macOS regression), this suggests a shared performance issue in the app-server's session persistence layer rather than a platform-specific problem.

### 8. [#5609 — Sync chats between ChatGPT website, Codex in VS Code](https://github.com/openai/codex/issues/5609)
*6 comments | 63 👍 | Enhancement, Extension*

A cross-platform conversation history sync request spanning the ChatGPT website, desktop Codex, VS Code extension, and GitHub Codespaces. High upvote count with relatively few comments suggests broad silent demand for unified history.

### 9. [#37383 — Computer Use on Windows fails during app/window discovery](https://github.com/openai/codex/issues/37383)
*11 comments | 4 👍 | Bug, Windows, Computer Use*

Third independent report of the same `0x80070003` failure with a newer app version. The proliferation of duplicate issues (#37043, #37383, #37595, #37734) suggests the maintainers haven't yet triaged this as a known systemic bug.

### 10. [#34248 — Goal auto-continuation can enter an unbounded no-progress loop](https://github.com/openai/codex/issues/34248)
*3 comments | 1 👍 | Bug, Windows, Rate Limits, Automations*

Goal auto-continuation enters a self-sustaining loop generating thousands of duplicate turns (5–8ms between `task_complete` and `task_started`). Potentially significant token burn for paid users; flagged as a serious correctness issue.

---

## Key PR Progress

### 1. [#37757 — Add a line-ending preservation mode to `apply_patch`](https://github.com/openai/codex/pull/37757)
Adds an opt-in `PreserveLineEndings` update mode threaded through patch handling, preventing LF normalization of CRLF files. Directly addresses the long-standing #4003.

### 2. [#37758 — Add a feature flag to preserve apply_patch line endings](https://github.com/openai/codex/pull/37758)
Feature flag `apply_patch_preserve_line_endings` (disabled by default) wrapping the new preservation mode. Consistent application across built-in patch handling. Probably will need opt-in by default in a future release to actually help Windows users.

### 3. [#37747 — Bound Cursor project path resolution](https://github.com/openai/codex/pull/37747)
Fixes unbounded directory-tree walking when resolving Cursor project names. Now probes a bounded set of path candidates using common filename separators. Performance and safety fix for the extension.

### 4. [#37745 — Add gRPC TCP transport to the code-mode host](https://github.com/openai/codex/pull/37745)
Allows `grpc://IP:PORT` endpoints via `--listen`, serving the existing code-mode gRPC service over TCP instead of just Unix sockets. Prints bound HTTP endpoint for port `0` discovery. Enables remote code-mode connections.

### 5. [#37709 — Keep wrapped composer whitespace with following text](https://github.com/openai/codex/pull/37709)
Fixes TUI composer wrapping where overflowing whitespace occupied a separate blank row instead of staying attached to following text. Grapheme-safe wrapping for Unicode whitespace — a subtle TUI polish fix.

### 6. [#37723 — Report I/O subtypes for session config import failures](https://github.com/openai/codex/pull/37723)
Appends `std::io::ErrorKind` categories (`invalid_data`, `not_found`, `permission_denied`) to the `failed_to_load_session_config` subtype. Improves debuggability for session config import failures.

### 7. [#37654 — Advertise environment config read support](https://github.com/openai/codex/pull/37654)
Adds `environmentConfigRead` capability to exec-server environment capabilities for local executors (defaults false for legacy executors). Backward-compatible capability advertisement.

### 8. [#31817 — Update models.json](https://github.com/openai/codex/pull/31817)
Automated model metadata update. Routine, but keeps the CLI aware of the latest model availability.

---

## Feature Request Trends

1. **Customizable TUI status line** (#17827) — token usage, model name, rate limits, git branch. The 150👍 signal makes this the most-desired TUI enhancement.

2. **Unified conversation history sync** (#5609) — users want chats synced across the ChatGPT website, desktop app, VS Code extension, and Codespaces. 63👍 with low comment count indicates broad quiet demand.

3. **Inbound MCP notifications** (#15299) — pushing external events into active Codex sessions. Enables interactive agent workflows beyond the current request-response model.

4. **Model alias mapping for enterprise gateways** (#21594) — config mapping for gateway model names to canonical Codex model IDs. Enterprise adoption blocker.

5. **MultiAgentV2 steering** (#33885) — allowing child threads to accept corrections mid-execution. Current read-only sub-agent threads prevent iterative refinement.

---

## Developer Pain Points

1. **Windows Computer Use is systemically broken** — the `EnumWindows 0x80070003` failure spans at least 4 issues (#37043, #37383, #37595, #37734) with no acknowledged fix. Approval prompts never appear; app launches fail. Computer Use on Windows is effectively unusable for affected users.

2. **Windows sandbox/line-ending issues persist** — #4003 (mixed line endings) has been open since Sept 2025. The weekend PRs (#37757/#37758) address it but are opt-in; users must discover and enable the flag.

3. **Thread switching performance regression** — reported independently on macOS (#20802) and generally (#11011). Suggests a shared session/persistence bottleneck in the desktop app-server.

4. **IDE extension prompt loss on Windows** (#25928) — submitted prompts randomly disappear before queueing. Intermittent data-loss bugs erode trust in the extension.

5. **Sandbox runner failures on Windows** (#26803) — `CreateProcessAsUserW failed: 5 (access denied)`, and WSL startup stalls (#22176) further fragment the Windows CLI experience. The Windows platform remains a second-class citizen relative to macOS/Linux.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-10

## Today's Highlights
No new functional release landed today, but the nightly build pipeline continues steadily. The community discussion centers on long-running bugs around subagent reliability and hang issues — two P1s have been open for months and are still unresolved. Meanwhile, a significant influx of automated dependency-update PRs suggests ongoing maintenance hygiene, and a community PR attempting to enable "agents calling agents" is gaining traction.

---

## Releases
- [v0.56.0-nightly.20260810.gcf22ac7e8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260810.gcf22ac7e8) — Nightly release, no functional changelog beyond the version bump.

---

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** *(P1, bug, 12 comments)*  
   A `codebase_investigator` subagent reports `status: "success"` even after hitting `MAX_TURNS` with zero analysis done. Silent failure masks real interruptions — a dangerous trust issue for agent reliability. High engagement suggests this resonates with many users.

2. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** *(P1, bug, 8 comments, 8 👍)*  
   Deferring to the generalist agent hangs indefinitely, even for trivial tasks like folder creation. Workaround: explicitly instruct the model not to defer. Strongest upvote count in this digest — clearly a pain point.

3. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** *(P1, EPIC, 7 comments)*  
   Follow-up on behavioral eval infrastructure: 76 tests exist across 6 Gemini models, but component-level evals are still insufficient. Underpins future quality assurance improvements.

4. **[#25166 — Shell command stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** *(P1, bug, 4 comments, 3 👍)*  
   Simple CLI commands appear active with "Awaiting user input" after finishing — hangs persist for simple, non-interactive commands. Core-shell UX reliability issue.

5. **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** *(P2, bug, 6 comments)*  
   Community observation: Gemini CLI only uses custom skills and sub-agents when explicitly instructed. Users with gradle/git skills report non-adoption even in relevant scenarios.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** *(P2, bug, 5 comments)*  
   Sessions are only marked processed when the extraction agent reads the transcript. Low-signal sessions that are skipped get surfaced repeatedly — a waste of compute and tokens.

7. **[#26525 — Deterministic redaction and reduced logging for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)** *(P2, security, 4 comments)*  
   Memory transcripts are sent to extraction models *before* redaction. Secrets are already in model context; redaction happens post-hoc. Root cause of a serious privacy leak vector.

8. **[#22232 — Browser agent resilience: session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)** *(P3, feature, 4 comments)*  
   Request for automatic recovery from locked browser profiles — currently fail-fast the only strategy. Persistent-session workflows suffer downtime.

9. **[#24246 — Gemini CLI encounters 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** *(P2, bug, 3 comments)*  
   Resolved-config breaks beyond 128 tools. Community expectation: smarter tool-scoping relative to enabled tools.

10. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** *(P2, bug, 3 comments)*  
    Users with agents disabled in config still get subagent invocation (e.g., generalist). Violates expected permission boundaries and user control.

---

## Key PR Progress

1. **[#28746 — Bump npm-dependencies group (74 updates)](https://github.com/google-gemini/gemini-cli/pull/28746)** *(dependencies, size/xl, closed)*  
   Massive 74-package update — from `simple-git` to `@modelcontextprotocol/sdk` — keeps upstream compatibility current.

2. **[#28749 — Bump @google/genai from 1.30.0 to 2.15.0](https://github.com/google-gemini/gemini-cli/pull/28749)** *(dependencies, closed)*  
   Major SDK version jump likely brings new model capabilities or API changes to the core codebase.

3. **[#28744 — fix(acp): don't start a fresh chat before resuming](https://github.com/google-gemini/gemini-cli/pull/28744)** *(P1, area/core, open)*  
   Fixes session poisoning: `loadSession` calls `initialize()` before `resumeChat()`, orphaning the resumed session context. Closes #28693.

4. **[#28738 — Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738)** *(P2, area/agent, size/l, open)*  
   Community contribution enabling subagent delegation and recursion via `tools:` frontmatter. Fixes #22092 — a long-standing feature gap.

5. **[#28743 — fix(core): preserve resolved model config systemInstruction and tools](https://github.com/google-gemini/gemini-cli/pull/28743)** *(area/agent, open)*  
   Prevents chat-level defaults from stomping over model-specific `systemInstruction` or `tools` from resolved config.

6. **[#28742 — fix(caretaker-agent): use spec-valid names for two triage-worker skills](https://github.com/google-gemini/gemini-cli/pull/28742)** *(open)*  
   Renames `code_explorer` and `spec_generator` to respect Agent Skills spec's `name` constraints.

7. **[#26540 — fix(core): resolve policy engine bugs affecting tool approvals](https://github.com/google-gemini/gemini-cli/pull/26540)** *(P1/P2, core, open)*  
   Fixes regex null-byte handling, param-pattern matches, and approval persistence across permissive modes.

8. **[#28750 — Bump dotenv-expand from 12.0.3 to 1000.0.0](https://github.com/google-gemini/gemini-cli/pull/28750)** *(dependencies, closed)*  
   Major version jump — potentially breaking change absorbed into the dependency graph.

9. **[#28752 — Bump puppeteer-core from 24.0.0 to 25.4.0](https://github.com/google-gemini/gemini-cli/pull/28752)** *(dependencies, closed)*  
   Browser automation update — version bump likely improves stability of browser-agent features.

10. **[#28757 — Bump js-yaml from 4.1.1 to 5.2.3](https://github.com/google-gemini/gemini-cli/pull/28757)** *(dependencies, closed)*  
    YAML parser major version bump — security-focused upgrade.

---

## Feature Request Trends
- **Agent autonomy & recursion**: [Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738) and related issue #22092 — the community wants subagents to delegate and self-recurse for deeper workflows.
- **Subagent visibility & transparency**: [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) requests subagent trajectories be visible/shareable via `/chat share`; [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) wants subagent context in bug reports.
- **AST-aware code intelligence**: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) tracks AST-aware file reads, search, and mapping for precision and token savings.
- **Destructive-action prevention**: [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) asks for guardrails against `git reset`/`--force` misuse.
- **Model self-awareness**: [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests the CLI understand its own flags, hotkeys, and self-execution mechanics for better guidance.

---

## Developer Pain Points
- **Subagent instability**: Hangs, false-success reporting, ignored config overrides, and non-adoption of custom skills are recurring themes. High P1/P2 density suggests this is the biggest usability drag.
- **Silent failures**: MAX_TURNS reported as GOAL success, shell "Waiting input" hangs after completion, and browser-agent failures all share a pattern — the system doesn't tell you what actually went wrong.
- **Memory-system trust**: Auto Memory's retry loops and pre-redaction secret exposure surface both reliability and security concerns.
- **External integration rough edges**: Symlinked agent files not recognized, persistent-session browser lockouts, and interactive-prompt stalls all frustrate real-world workflows.
- **Dependency churn**: A 74-update bundle, major SDK jumps (`@google/genai` 1.x → 2.x), and multiple major-version bumps signal potentially destabilizing maintenance churn in one day.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-10

## Today's Highlights
A wave of triage-labeled issues (18 new) surfaced today, revealing significant reliability gaps in MCP initialization, parallel tool calling, and enterprise model discovery. The most impactful reports indicate that **MCP servers frequently fail to connect due to non-configurable timeouts and strict handshake requirements**, and that **new session kickoff prompts are being silently dropped**. No new releases or PRs landed in the last 24 hours, making this a focused bug-report day for the community.

---

## Releases
No new releases in the last 24 hours. The most recent version referenced in issues is **v1.0.79-1** (MCP initialization fix needed) and **v1.0.28** (remote session bug).

---

## Hot Issues
*The 10 most impactful issues from the last 24 hours, excluding duplicates*

**1. Kickoff prompt silently dropped in new sessions** — [#4423](https://github.com/github/copilot-cli/issues/4423)  
Worktree, branch, and session provision successfully, but the initial prompt never reaches the agent. Session sits idle forever. Zero comments yet, but severe: loses user input with no recovery path.

**2. MCP initialize handshake has fixed 60s budget, no retry** — [#4421](https://github.com/github/copilot-cli/issues/4421)  
npx-launched stdio servers fail ~29% of sessions. Once the hard-coded 60s budget expires, the server is **never respawned** for the session's life. Community flags this as systemic: no retry, no backoff, no configuration.

**3. All Claude models disabled in CLI model selection** — [#4422](https://github.com/github/copilot-cli/issues/4422)  
Personal Enterprise account lost access to Sonnet 5 / 4.8 overnight, despite settings showing them enabled. Rollback didn't help. Mirrors [#4390](https://github.com/github/copilot-cli/issues/4390) (org models missing from catalogue), suggesting a wider enterprise model-discovery regression.

**4. Parallel tool calling loses request correlation** — [#4420](https://github.com/github/copilot-cli/issues/4420)  
Harness returns parallel responses without the original request association. Result: confused bots that can't map tool outputs to inputs. Community notes this has been "reported for months" — flaky behavior undermines agent reliability in autonomous loops.

**5. Interim fail-closed MCP policy drops user servers** — [#4419](https://github.com/github/copilot-cli/issues/4419)  
While CLI resolves managed settings, it installs an empty allow-list (`[[]]`). Any user MCP server registering during that window is permanently rejected. Reproduces on accounts with **no** managed policy at all — an over-aggressive default.

**6. BYOK custom providers return local 403** — [#4414](https://github.com/github/copilot-cli/issues/4414)  
OpenAI/Anthropic-compatible providers fail every inference with "run /login" — but the request never reaches the provider. `/login` is misleading; the block happens locally. No logs indicating what's actually denied.

**7. Parallel explore subagents die to per-model 429s** — [#4416](https://github.com/github/copilot-cli/issues/4416)  
All `explore` agents default to `claude-haiku-4.5` — the **tightest burst limit** of any model. Parallel fan-out concentrates load, triggers rate limits, and there's no backoff or auto-switch despite `eligibleForAutoSwitch` being set.

**8. Warm `session.resume` replays provider reasoning metadata** — [#4413](https://github.com/github/copilot-cli/issues/4413)  
Warm resumes replay provider-specific reasoning metadata across wire formats, breaking compatibility (likely same defect as [#3594](https://github.com/github/copilot-cli/issues/3594)). Community notes the prior issue was mislabeled as `area:networking` — it's a data serialization bug.

**9. High CPU usage while waiting on sleep** — [#4415](https://github.com/github/copilot-cli/issues/4415)  
Copilot burns 100% of one CPU core while merely waiting (`sleep 550; cd ...`). Idle resource consumption is a silent killer for developer laptops — trivial to reproduce, concerning for battery life.

**10. Auto-mode range and bias settings** — [#4412](https://github.com/github/copilot-cli/issues/4412)  
Feature request: let users set min/max model strength and bias in auto-mode (e.g., "bias toward stronger models"). Signals desire for granular local control over autonomous agent behavior.

---

## Key PR Progress
No PRs were updated in the last 24 hours. Recent PR activity (from previously tracked context) included:
- Work on MCP connection retry logic and handshake resilience (referenced in #4370, #4421)
- Enterprise model catalogue synchronization fixes (referenced in #4390, #4422)
- `/agent` pop-up handling of repository `AGENTS.md` files (referenced in #4410)

---

## Feature Request Trends
1. **Configurable HUD / session state visibility** — [#4418](https://github.com/github/copilot-cli/issues/4418) references the third-party `copilot-hud` tool, pushing for built-in configurable context/branch/state display
2. **GUI prompt composer** — [#4417](https://github.com/github/copilot-cli/issues/4417) requests a floating editor with word-wrap and dark theme to replace terminal input, reducing errors
3. **Chinese (zh-CN) localization** — [#4407](https://github.com/github/copilot-cli/issues/4407) for desktop app + CLI
4. **Auto-mode model range control** — [#4412](https://github.com/github/copilot-cli/issues/4412): min/max strength + bias
5. **Queue cancellation** — [#1857](https://github.com/github/copilot-cli/issues/1857) (26 👍): cancel/remove enqueued messages before execution
6. **Non-GitHub remote sessions** — [#2922](https://github.com/github/copilot-cli/issues/2922): support GitLab/Bitbucket in `/remote`
7. **Anthropic `cache_control` breakpoints** — [#4256](https://github.com/github/copilot-cli/issues/4256): reduce cost on repeated context (closed-referenced)
8. **Dynamic MCP retry/backoff** — [#4421](https://github.com/github/copilot-cli/issues/4421): configurable handshake budget

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|---|---|---|
| **MCP server connection instability** (hardcoded timeout, strict handshake, `server/discover` requirement, interim deny-all) | #4421, #4370, #4419, #4371 | High (4+ issues) |
| **Enterprise model discovery broken** (org-enabled models missing, CLI disables Claude models prematurely, BYOK 403) | #4390, #4422, #4414 | High |
| **Silent data loss** (kickoff prompt dropped, warm resume metadata corruption) | #4423, #4413 | Critical, low frequency |
| **Rate limits on parallel subagents** (no backoff, no model fallback) | #4416 | Medium |
| **Resource waste** (100% CPU idle) | #4415 | Low frequency, high impact |
| **Feature availability ambiguity** (`cli_remote_control_enabled` false renders silently, no UI indication) | #4409 | Medium |
| **Queue management gap** (cannot cancel enqueued messages) | #1857 | High 👍 (26) |
| **Disabled `/remote` for non-GitHub repos** | #2922 | Medium |

**Overall signal:** The community is deeply concerned about **MCP reliability** and **enterprise model availability** — both undermine trust in the tool as a production workhorse. The silent failures (dropped prompts, opaque 403s, unindicated disabled features) are the most dangerous, as developers cannot diagnose without deep log inspection. Core request: **configurability, retry logic, and better observability**.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the **Kimi Code CLI Community Digest** for **2026-08-10**.

---

## 1. Today's Highlights
Community velocity remains focused on reliability, with a critical new bug report (#2598) highlighting a silent deadlock in ACP streaming mode where responses can hang indefinitely without timeout controls. Meanwhile, the long-awaited **Memory System** feature request (#1283) is heating up again with renewed discussion, signaling strong user demand for persistent context. The only active PR (#739) addresses a niche but important compatibility issue between Google GenAI and MCP tool schemas.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*(Note: Only 2 issues were updated in the last 24h, these are highlighted below.)*

**#2598 — [Critical] ACP/print Streaming Response Silent Deadlock** *(New)*
- **Link:** [Issue #2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)
- **Why it matters:** This is a severe reliability bug affecting users in ACP mode. The CLI can silently hang after receiving the complete content, without emitting a finish frame or timing out. Worse, subsequent messages overwrite the hung turn without writing partial data to the `wire.jsonl` log, resulting in data loss and a permanently unresponive session.
- **Community Reaction:** Immediate concern; this exposes a critical lack of idle timeout configuration options, making the tool unreliable for automated or long-running workflows.

**#1283 — [Enhancement] Feature Request: Persistent Memory System** *(Active)*
- **Link:** [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **Why it matters:** This remains one of the most popular and highly-requested features. Users want the CLI to "remember" project conventions, code style, and user preferences across sessions via both AI-managed notes and manual instructions.
- **Community Reaction:** With 27 comments and sustained activity, this is a strong signal that developers are seeking a more assistant-like, context-aware experience beyond simple stateless interactions.

## 4. Key PR Progress
*(Note: Only 1 PR was updated in the last 24h.)*

**#739 — fix(kosong): Strip JSON Schema Metadata from Google GenAI Tool Parameters**
- **Link:** [PR #739](https://github.com/MoonshotAI/kimi-cli/pull/739)
- **Status:** Open, updated 2026-08-09.
- **Description:** This PR resolves a compatibility issue where standard JSON Schema metadata fields (e.g., `title`, `description`) in MCP tool definitions cause validation errors when used with the Google GenAI provider.
- **Significance:** While niche, this is essential for users integrating MCP servers (like Exa) with Google's Gemini models, unblocking a major provider path.

## 5. Feature Request Trends
Based on the current active issues, the most dominant feature demand is for a **Memory System** (#1283). This reflects a broader shift in developer tooling: users are moving beyond stateless code completion and seeking an agentic CLI that learns and adapts to specific codebases and user habits over time.

## 6. Developer Pain Points
- **Streaming Reliability (Data Integrity):** The bug in #2598 reveals a critical pain point: the risk of data loss. When a stream hangs and is replaced, the partial response is not logged to `wire.jsonl`, meaning users lose access to the conversation history necessary for debugging or auditing. The lack of an idle timeout is seen as a fundamental oversight.
- **Provider Compatibility Friction:** The issue resolved by PR #739 highlights the ongoing friction of using MCP tools with non-Anthropic providers. Developers expect tools to be agnostic, but schema compatibility remains a recurring challenge in the multi-provider AI landscape.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-10

## Today's Highlights
The OpenCode community is facing a **critical outage with the OpenCode Go subscription service**, where the `deepseek-v4-flash` model is failing due to a leading-space bug in the relay gateway — a regression that persists despite a previously "closed" fix. Separately, **TUI stability issues** are surfacing across platforms, with reports of frozen blank screens on macOS and indefinite hangs on Windows unless run as Administrator, suggesting a deeper platform compatibility problem.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#4283 — Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** — The most commented-on issue (122 comments, 110 👍), open since Nov 2025. Users on v1.0.62 report selection-to-clipboard failing. The high engagement suggests this is a long-standing, widely frustrating bug.

2. **[#7602 — Native Model Fallback / Failover Support](https://github.com/anomalyco/opencode/issues/7602)** — 107 👍 for a feature request to define fallback chains across *different* model IDs (e.g., "if A errors → retry with B"). The community wants more resilience than the current same-model-ID-only fallback provides.

3. **[#41306 — deepseek-v4-flash still broken on Console Go after #41211](https://github.com/anomalyco/opencode/issues/41306)** — The community is verifying the leading-space regression persists (opened 2026-08-08, verified broken 08-09). The maintainers' fix in #41211 did not resolve the root cause.

4. **[#34743 — ACP from Xcode 27 uses default model, ignoring opencode.json](https://github.com/anomalyco/opencode/issues/34743)** — Users integrating OpenCode into Xcode 27 beta see the `big-pickle` default model being used instead of their configured local LMStudio/Ollama models. A growing macOS developer pain point.

5. **[#785 — Is there a way to disable streaming mode?](https://github.com/anomalyco/opencode/issues/785)** — A prompt from Jul 2025 still active with 38 👍. Proxy providers without streaming support (e.g., Credal) cannot be used. This has been open for over a year, indicating a major adoption blocker for enterprise proxy setups.

6. **[#12472 — Native Claude Code hooks compatibility](https://github.com/anomalyco/opencode/issues/12472)** — Users want `PreToolUse`, `PostToolUse`, and `Stop` hooks (from `~/.claude/settings.json`) to work natively in OpenCode. The project already supports `CLAUDE.md` and skills; hooks are the next compatibility milestone.

7. **[#13715 — Permission asks from nested subagents silently hang](https://github.com/anomalyco/opencode/issues/13715)** — When a subagent spawns another subagent needing permission, the TUI never renders the request, hanging forever. Critical bug for multi-agent workflows.

8. **[#30221 — "terminated" error on OpenCode Go](https://github.com/anomalyco/opencode/issues/30221)** — All sessions under the Go subscription consistently terminate with an `UnknownError` ("terminated"). The community is actively tracking whether this is a service-side issue separate from the model-name bug.

9. **[#39838 — DeepSeek V4 Flash has suddenly stopped working](https://github.com/anomalyco/opencode/issues/39838)** — Closed recently, but users reported sudden failures with this model. Given the Go gateway issues (#41300, #41306, #41314), this looks like part of the same systemic problem.

10. **[#41453 — Persistent session daemon + zero-tool-call memory recall](https://github.com/anomalyco/opencode/issues/41453)** — A new feature request (from yesterday) for a persistent background daemon that retains workspace context without needing tool calls. Signals a demand for "always-on" agents.

---

## Key PR Progress

1. **[#41452 — fix(core): align Copilot response continuation](https://github.com/anomalyco/opencode/pull/41452)** — Aligns stateless Copilot Responses continuation with the official VS Code client. Persists final reasoning item IDs with encrypted state; fixes continuation across sessions.

2. **[#41455 — fix(tui): include attachment path in model context](https://github.com/anomalyco/opencode/pull/41455)** — Preserves local attachment `source.path` as a text part before binary images, allowing path-based MCP tools to access images properly. Closes #41454.

3. **[#41450 — fix(core): derive fallback message for empty AI SDK provider errors](https://github.com/anomalyco/opencode/pull/41450)** — Improves error reporting when AI SDK errors have empty `message`; now surfaces `statusCode`, `data.error.code`, and rate-limit headers to the TUI.

4. **[#38067 — fix(session): edge-trigger build-switch reminder](https://github.com/anomalyco/opencode/pull/38067)** — Replaces full session-history scanning with edge-triggered logic for injecting the "plan → build" mode reminder. Performance improvement for long sessions.

5. **[#37584 — fix(session): bound consecutive overflow compaction cycles](https://github.com/anomalyco/opencode/pull/37584)** — Prevents infinite compaction loops when the provider rejects a turn with context overflow. Closes #27924; important for stability on small-context models.

6. **[#40997 — refactor(core): replace integration prompts with forms](https://github.com/anomalyco/opencode/pull/40997)** — Migrates GitHub Copilot, Azure, and Cloudflare integrations to a shared form-based OAuth/key workflow with Core-side validation and persistence.

7. **[#39358 — feat(session): add durable session archival](https://github.com/anomalyco/opencode/pull/39358)** — First-class session archiving in V2: records a `session.archived` fact with an idempotent operation, separate from deletion. Good hygiene for multi-workspace users.

8. **[#40427 — [beta] some experimental perf improvements](https://github.com/anomalyco/opencode/pull/40427)** — Reports a **-75.5% reduction** in initial renderer entry (7.45 MB → 1.82 MB) against an immutable database snapshot. High-impact for large sessions.

9. **[#35976 — fix(opencode): add --dir option to web/serve](https://github.com/anomalyco/opencode/pull/35976)** — Adds `--dir` to `opencode web`/`serve` so the serving directory can be set explicitly (fixes root cause of four related issues). Merged after automated PR cleanup.

10. **[#36068 — fix: accept Ollama reasoning field in OpenAI Chat deltas](https://github.com/anomalyco/opencode/pull/36068)** — Ollama emits reasoning in a `reasoning` field (not `reasoning_content`); the Schema.Struct was stripping it. Fix preserves thinking output for Ollama users.

---

## Feature Request Trends

1. **Model fallback & failover** — The highest-👍 request (#7602, 107 👍) is for native, cross-model fallback chains. Users want resilience against rate limits and outages without manual intervention.

2. **Claude Code ecosystem compatibility** — After rules and skills, users want the hooks system (#12472, 38 👍) and feel the project should be a drop-in replacement for Claude Code workflows.

3. **Persistent memory / daemon mode** — New requests (#41453, plus related #23775) for persistent background agents that recall workspace context without tool calls. The community wants "always-on" autonomous agents.

4. **Editing & UX polish** — Requests for `/clear` instead of `/new` (#38392), send-on-button-only (#16226), revertible question answers (#25555), and drag-and-drop image support in question UIs (#31791) show a focus on ergonomics.

5. **Customization of UI behavior** — Default code concealment state (#35093), configurable streaming (disable streaming, #785) — users want fine-grained control over the frontend.

---

## Developer Pain Points

1. **OpenCode Go reliability is the top concern** — Multiple concurrent issues (#41300, #41306, #41314, #41322) trace to the same root cause: the Console Go relay injects a leading space into model names, breaking `deepseek-v4-flash`. The fix from #41211 was ineffective, and the community is verifying the bug persists (08-09). This is eroding trust in the paid subscription.

2. **TUI stability across platforms** — Blank-screen freezes on macOS (#41284) and indefinite hangs on Windows without Administrator privileges (#41436) suggest deeper terminal/stream handling bugs. Combined with permission-ask hangs for nested subagents (#13715), the interactive experience is fragile.

3. **Provider options silently dropped** — Reasoning effort and model-specific options are not forwarded for custom `@ai-sdk/openai-compatible` providers (#27361, #41294). Users find silent config failures more damaging than explicit errors.

4. **Streaming is not optional** — The inability to disable streaming (#785) remains a blocker for proxy providers without SSE support. This has been open since July 2025 and now has 38 👍 — a forgotten pain point.

5. **Session history size and performance** — With compaction loops (#37584) and renderer memory bloat (#40427 baseline at 7.45 MB), long-running sessions degrade. Users need predictable performance for multi-hour agent runs.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-10

## Today's Highlights
The project saw a major stability push with fixes landing for GitHub Copilot login rate-limiting (#7850) and llama.cpp model catalog caching (#7072). A significant protocol enhancement was merged with the new remote session wire protocol (#7344), while multiple TUI usability issues (scroll behavior, copy-on-select, page-up/page-down) saw active PR activity. Nine new issues were opened today, mostly focused on edge-case robustness in API handling, extension development, and the TUI renderer.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#7730] High CPU usage on Mac OS with long session** — [Link](https://github.com/earendil-works/pi/issues/7730)  
   Users report CPU usage swinging 50–110% and memory at 600–800MB, apparently correlated with session length/context size. 6 comments, 6 👍; this is a performance concern that will matter for heavy CLI users.

2. **[#6922] Default model cannot be a llama.cpp model: startup shows "No models available"** — [Link](https://github.com/earendil-works/pi/issues/6922) *(CLOSED)*  
   When `defaultProvider: "llama.cpp"` is set, Pi fails to detect the model at startup and shows a misleading banner. 10 comments, 14 👍 — the community has been vocal about this configurability gap. The fix landed in PR #7072 (model catalog caching).

3. **[#7869] ai21 api broken** — [Link](https://github.com/earendil-works/pi/issues/7869) *(CLOSED)*  
   The AI21 provider returns error 410 with "This API has been retired." Users who were productive earlier in the day hit a wall mid-session — a provider-end API retirement that Pi needs to account for.

4. **[#7850] GitHub Copilot login fails with 429 (Rate Limiting) for organizations with many models** — [Link](https://github.com/earendil-works/pi/issues/7850) *(CLOSED)*  
   Organizations with 20+ available models trigger rate limits because Pi enables all model policies concurrently during device authorization. The fix (PR #7851) makes policy enablement sequential.

5. **[#7868] Renderer hard-crashes when any rendered line exceeds terminal width** — [Link](https://github.com/earendil-works/pi/issues/7868) *(CLOSED)*  
   A single over-wide line of output aborts the entire session rather than truncating. This kills active work meetings and is a high-severity TUI bug.

6. **[#7860] EPIPE crash when a desktop host closes the stdout pipe** — [Link](https://github.com/earendil-works/pi/issues/7860) *(CLOSED)*  
   When Pi runs as an embedded CLI in a desktop host app that closes the stdout read end, Pi crashes with an unhandled EPIPE after every turn. The reported fix PR #5183 was never merged — the community flagged this regression again on 0.84.1.

7. **[#7855] Pi stops with "Response was truncated before completion."** — [Link](https://github.com/earendil-works/pi/issues/7855) *(CLOSED)*  
   The "truncated" error appears randomly with any OpenAI-compatible API (reproduced with local vLLM). Users must manually prompt to continue — a frustrating interruption to agent flow.

8. **[#7864] ExtensionContext.exec timeout never force-kills a SIGTERM-ignoring child** — [Link](https://github.com/earendil-works/pi/issues/7864) *(CLOSED)*  
   The timeout sends SIGTERM but checks `proc.killed`, which Node sets when the signal is sent — not when the process exits. A child that ignores SIGTERM stays alive and `pi.exec()` hangs forever. This is a subtle runtime correctness detail for extension authors.

9. **[#7862] Concurrent RPC session replacements race runtime teardown and assignment** — [Link](https://github.com/earendil-works/pi/issues/7862) *(CLOSED)*  
   RPC frames process async tasks in parallel; `new_session`, `switch_session`, `fork`, `clone` can all race and tear down the wrong runtime. Concurrency edge case for remote protocol consumers.

10. **[#7846] Unable to start 0.84.0/0.84.1 with bun runtime** — [Link](https://github.com/earendil-works/pi/issues/7846) *(CLOSED)*  
    Crash at startup: `TypeError: zlib.createZstdDecompress is not a function` — a runtime-specific incompatibility with Bun that blocks the whole app.

---

## Key PR Progress

1. **[#7344] feat(protocol): add remote session wire protocol** — [Link](https://github.com/earendil-works/pi/pull/7344) *(CLOSED)*  
   Introduces `@earendil-works/pi-protocol` with validated commands/events, bounded CBOR encoding, and length-prefixed framing. This is a foundational step for remote session support.

2. **[#7072] fix(coding-agent): cache llama.cpp model catalog** — [Link](https://github.com/earendil-works/pi/pull/7072) *(CLOSED)*  
   Fixes #6948 — resolves the race where `defaultProvider`/`defaultModel` for llama.cpp weren't applied at startup because model refresh completed after session init.

3. **[#7851] fix(provider): enable GitHub Copilot model policies sequentially** — [Link](https://github.com/earendil-works/pi/pull/7851) *(CLOSED)*  
   Changes Copilot login from concurrent policy-enablement of all models to sequential requests, preventing HTTP 429 rate-limit failures for large orgs.

4. **[#7844] Prevent bulk policy updates during login** — [Link](https://github.com/earendil-works/pi/pull/7844) *(CLOSED)*  
   Removes automatic bulk model enabling from Copilot login; models must now be explicitly enabled through Copilot Chat. Simplifies login and avoids rate limiting.

5. **[#7858] fix(coding-agent): route extension commands regardless of expandPromptTemplates** — [Link](https://github.com/earendil-works/pi/pull/7858) *(CLOSED)*  
   Fixes a docs-contradicting behavior: `sendUserMessage()` was skipping extension-command handling because it passed `expandPromptTemplates: false`.

6. **[#7856] fix(ai): repair JSON-serialized structured tool arguments during validation** — [Link](https://github.com/earendil-works/pi/pull/7856) *(CLOSED)*  
   Handles double-serialized nested tool arguments (object/array as string) which previously hard-failed with "must be object." Broadly improves provider/model compatibility.

7. **[#7866] feat(tui): add copyOnSelect option to TuiAltScreen** — [Link](https://github.com/earendil-works/pi/pull/7866) *(CLOSED)*  
   Adds a `copyOnSelect` boolean (default `true`) to disable auto-copy-to-clipboard when selecting text in fullscreen — a quality-of-life option for heavy terminal users.

8. **[#7865] fix(tui): handle tui.select.pageUp/pageDown in base SelectList and model-selector** — [Link](https://github.com/earendil-works/pi/pull/7865) *(CLOSED)*  
   Adds page-up/page-down keybinding support to SelectList components, standardizing navigation in selectors that previously missed it.

9. **[#7857] feat(agent): expose `expandPromptTemplates` in `sendUserMessage`** — [Link](https://github.com/earendil-works/pi/pull/7857) *(OPEN)*  
   Exposes the template-expansion flag so extension authors can trigger extension commands from tools. Useful for the "toilet-pi" use case (user-triggered commands).

10. **[#7872] feat(coding-agent): expose context files at session start** — [Link](https://github.com/earendil-works/pi/pull/7872) *(CLOSED)*  
    Makes loaded AGENTS/CLAUDE context files available on `session_start` with documentation and test coverage — an extension API improvement.

---

## Feature Request Trends
- **Provider breadth**: Users want more built-in providers (Qwen China Token Plan Individual in #7847, plus ai21 retirement handling) and smoother llama.cpp/OpenRouter integrations.
- **Capabilities port from forks**: #7845 proposes porting four "A-level" features from oh-my-pi — stream rules, subagent tools, a secondary-model advisor, and cross-session memory. There's demand for richer harness capability.
- **TUI polish**: Multiple requests for fullscreen mouse click-to-position (#7852), scroll/paging improvements (#7865, #7616), and copy-behavior configuration (#7720, #7866).
- **Context & model awareness**: Users want per-model thinking-level persistence (#7871), correct contextWindow override handling (#7870), and better recognition of context overflow vs. rate-limit errors (#7867).

---

## Developer Pain Points
- **Rate limiting on provider login**: GitHub Copilot OAuth flow is fragile when orgs have many models — a common friction point for enterprise teams. Fixed this week but painful for affected users.
- **Renderer stability**: Over-wide lines crash sessions (#7868), scroll jumping during streamed output pulls users out of flow (#7861), and the editor jumps scroll position (#7495). The TUI rendering layer is a persistent source of defects.
- **Bun runtime incompatibility**: The `zlib.createZstdDecompress` crash (#7846) blocks an entire runtime segment — a packaging/dependency issue that's been difficult to diagnose.
- **Extension development friction**: `sendUserMessage()` ignores extension commands (docs contradiction), `ExtensionContext.exec` hangs on SIGTERM-ignoring children, and post-`/reload` tool rendering is broken — extension authors face several correctness hurdles.
- **Silent correctness issues**: Model catalogs silently overriding correct context windows (#7870), `MutableModels.refresh()` silently skipping providers without credentials (#7854), and async race conditions in session replacement (#7862) make production behavior harder to trust.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-10

## Today's Highlights

The Qwen Code repository is accelerating its multi-agent and enterprise-integration roadmap. A nightly release (`v0.21.8-nightly.20260810.55e20db328`) introduces Qoder plugin extension support, while active RFCs propose native multi-session orchestration (#8718) and a workflow-engine rebuild of the `/review` command (#8769). The community is also converging on external memory/context provider standards (#7585, #7449) for enterprise deployments, alongside steady CI flakiness fixes and Windows-specific reliability improvements.

---

## Releases

**v0.21.8-nightly.20260810.55e20db328** — Nightly release featuring:
- `feat(core): support Qoder plugin extensions` — adds first-class support for Qoder plugin architecture (PR #8661)
- `feat(ci): auto-assign issues to area owners` — automated issue triage routing by repository area

Full changelog: [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.8-nightly.20260810.55e20db328)

---

## Hot Issues

**1. [RFC] Native coordination for independent Qwen sessions** ([#8718](https://github.com/QwenLM/qwen-code/issues/8718))  
P2 | feature-request | roadmaps: multi-agent, background-automation  
Proposes a leader-worker dispatch model for multiple independent Qwen Code sessions with runtime/task-state observation. 8 comments; the community is actively discussing synchronization semantics and structured result collection. Core to the multi-agent roadmap.

**2. Windows standalone installer fails on Get-FileHash** ([#7118](https://github.com/QwenLM/qwen-code/issues/7118))  
P2 | bug | welcome-pr | 👍 3 (highest 👍 this week)  
SHA-256 verification fails when `powershell.exe` cannot resolve `Get-FileHash`, aborting installation. Community workaround: `--method npm`. Root cause appears to be PowerShell execution policy/path resolution. Labeled `welcome-pr` — a good first contribution opportunity.

**3. Streamable HTTP: optional GET/SSE rejection kills MCP connection** ([#8784](https://github.com/QwenLM/qwen-code/issues/8784))  
P2 | bug | MCP  
When an MCP server rejects the optional standalone SSE stream (per spec), Qwen Code kills the entire connection. The spec requires graceful degradation to Polling mode. MCP integration fragility is a recurring theme.

**4. Proposal: Direct External Context Provider Profile** ([#7585](https://github.com/QwenLM/qwen-code/issues/7585))  
P3 | feature-request | need-discussion  
Enterprise monorepo integration pattern with mutually exclusive on-demand and Auto Recall profiles. 12 comments — the highest engagement this week. Complements the external-memory profile proposal (#7449); signals demand for a unified enterprise context layer.

**5. [Desktop 0.1.0/Windows] Bundled runtime crashes: EISDIR lstat 'C:'** ([#8615](https://github.com/QwenLM/qwen-code/issues/8615)) — CLOSED  
P1 | bug | Windows  
Workspace-open crash on Windows 11 due to path handling (`lstat 'C:'`). Closed recently; likely fixed in a nightly. Worth verifying in the next stable desktop release.

**6. TUI flickering in web-based terminals** ([#8659](https://github.com/QwenLM/qwen-code/issues/8659))  
P3 | bug | Linux/web-terminal | welcome-pr  
`useTerminalBuffer: true` (Virtualized History) performs full-screen ANSI redraws that web terminals (Alibaba Cloud Workbench, xterm, no COLORTERM) can't handle → continuous tearing. Community suggests fallback detection for non-ANSI-capable terminals.

**7. RFC: Rebuild `/review` Step 3–5 orchestration on workflow engine** ([#8769](https://github.com/QwenLM/qwen-code/issues/8769))  
P2 | enhancement | multi-agent roadmap  
Proposes moving agent fan-out, verification, and reverse-audit from model-driven execution to deterministic workflow code (`QWEN_CODE_ENABLE_WORKFLOWS`). Significant architectural direction for the review pipeline.

**8. `npm test` fails with unknown flag** ([#8721](https://github.com/QwenLM/qwen-code/issues/8721))  
P2 | bug | build-system  
Local test runs fail immediately: `cross-env NODE_OPTIONS="--max-old-space-size=3072" npm run test --workspaces --if-present --parallel` → `EUNKNOWN` error. Likely a Node/npm version mismatch; blocks contributor validation.

**9. bug(sdk): hidden unrecognized diagnostics mutate transcript state** ([#8823](https://github.com/QwenLM/qwen-code/issues/8823))  
P2 | bug | daemon/SDK  
Unrecognized daemon events become `debug` events that enter the shared transcript reducer before being hidden — causing user-visible state corruption in Web Shell. Subtle but critical for SDK robustness.

**10. Proposal: Enterprise external-memory integration profile** ([#7449](https://github.com/QwenLM/qwen-code/issues/7449))  
P3 | feature-request | need-discussion  
Provider-neutral enterprise memory integration spec — documentation-first, incremental compatibility tests, no Core API changes. Paired with #7585, this defines the enterprise context/memory story.

---

## Key PR Progress

**1. feat(core): support Qoder plugin extensions** ([#8661](https://github.com/QwenLM/qwen-code/pull/8661)) — *merged, shipped in nightly*  
Adds the Qoder plugin extension layer to core. Landmark integration PR; unlocks the plugin ecosystem.

**2. feat(cli): adopt Goal v3 in ACP sessions** ([#8732](https://github.com/QwenLM/qwen-code/pull/8732)) — OPEN  
Replaces legacy Stop-hook `/goal` with the canonical Goal v3 state machine across ACP/Web Shell: create/status/edit/pause/resume/replace/clear with persisted state. Unifies goal semantics across CLI and web.

**3. fix(core): catch content-only thinking-tag leaks on all OpenAI-compatible providers** ([#8818](https://github.com/QwenLM/qwen-code/pull/8818)) — OPEN  
Extends the `<think>`-tag leak defense from a single vendor opt-in to all OpenAI-compatible endpoints; closes two bypasses. Directly addresses the community-reported issue #6666 where thinking content leaked into `content` instead of `reasoning_content`.

**4. chore(serve): remove the `/demo` debug page** ([#8805](https://github.com/QwenLM/qwen-code/pull/8805)) — OPEN  
Removes the daemon's debug page, folding infrastructure into the health route — the real Web Shell UI supersedes it. Cleanup that simplifies daemon surface.

**5. feat(web-shell): improve subagent activity rows** ([#8780](https://github.com/QwenLM/qwen-code/pull/8780)) — OPEN  
Adds persistent chevron, hover/focus highlights, and subdued task text for a more interactive yet compact subagent row in Web Shell. UX polish for multi-agent visibility.

**6. fix(serve): support reserved characters in virtual subagent ids** ([#8717](https://github.com/QwenLM/qwen-code/pull/8717)) — OPEN  
Enables agent task IDs containing `:` and `/` via Base64URL round-tripping; parent session IDs stay strictly validated. Unblocks realistic agent-ID namespaces.

**7. feat(web-shell): show context usage as a mini progress pill** ([#8794](https://github.com/QwenLM/qwen-code/pull/8794)) — OPEN  
Always-on circular context-window ring in the composer toolbar, threshold-matched to `/context`. Continuous memory-pressure visibility.

**8. feat(serve): add pollable turn-status endpoints for daemon sessions** ([#8682](https://github.com/QwenLM/qwen-code/pull/8682)) — OPEN  
Adds `GET /session/:sessionId/turns/:promptId` and `/turns/current` for lifecycle polling. Key for external orchestrators and the multi-agent roadmap.

**9. feat(web-shell): add model-specific reasoning controls** ([#8675](https://github.com/QwenLM/qwen-code/pull/8675)) — OPEN  
Built-in reasoning-controls registry (Thinking, Effort tiers, defaults) wired through Core, ACP, daemon, SDK, and WebShell — first registration for `qwen3.*`. Consistent reasoning UX across surfaces.

**10. fix(test): stop background-shell tests sharing a fixed /tmp sidecar path** ([#8813](https://github.com/QwenLM/qwen-code/pull/8813)) — *merged*  
Fixes cross-worker/CI test collisions on hard-coded `/tmp/s1.output`. A concrete step in the ongoing CI-flakiness reduction effort.

---

## Feature Request Trends

1. **Multi-agent orchestration** — #8718 (session coordination), #8769 (`/review` workflow engine) — the community wants explicit leader/worker semantics, deterministic orchestration, and observable runtime state. This is the dominant architectural direction.

2. **Enterprise integration profiles** — #7585 (external context provider), #7449 (external memory) — demand for provider-neutral, admin-bound integration specs that fit private monorepos. Documentation-first proposals gaining traction.

3. **Local/remote session access** — #8595 (Local Control QR pairing) — phone access to local sessions with zero setup; closed, but signals ongoing demand for mobile/remote control planes.

4. **Daemon/SDK robustness** — #8678 (large-restore timeout safety), #8411 (session-ID coordination across transports), #8823 (transcript mutation) — the SDK/daemon layer is becoming a first-class integration surface; users want stronger contracts and invariants.

5. **MCP reliability** — #8784 (SSE fallback) — MCP connections must degrade gracefully per spec. Recurring MCP integration issues suggest hardening is needed.

---

## Developer Pain Points

1. **CI flakiness and test environment gaps** — Multiple bot-filed CI failure issues (#8756, #8799, #8822) and fix-PRs for fixed `/tmp` paths and missing `tmux`/`zip` tooling (#8813, #8792, #8795). The maintainers are actively investing in deflaking and pinning test infrastructure.

2. **Nightly release failures** — #8771: `integration_none` and `integration_docker` jobs failed on the nightly release — recurring release pipeline fragility.

3. **Windows-specific breakage** — Installer SHA-256 failure (#7118) and desktop runtime crash (#8615) both hit the Windows platform — the weakest-supported OS in the ecosystem.

4. **Contributor onboarding friction** — `npm test` unknown-flag failure (#8721) blocks local validation; TUI flicker on web terminals (#8659) hurts developer experience in cloud workbenches. Both are `welcome-pr`-labeled.

5. **Thinking/reasoning tag leaks** — #6666 (Qwen 3.7 Max `<think>` leaking into `content`), now addressed by PR #8818. A cross-provider concern that the team is treating as systemic.

6. **Session state coordination** — Caller-supplied session IDs, restore timeouts, and unrecognized event handling (#8411, #8678, #8823) — session-state correctness across daemon transports remains fragile.

---

*Data source: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) — 1 release, 21 issues, 50 PRs updated in the last 24h.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-10

## Today's Highlights

The project is accelerating toward **v0.9.6**, a "subtractive runtime release" focused on removing harness-created obstruction in compaction, budgets, and provider state. Community attention is split between **context window management** (multiple users reporting 128K forced compaction despite 1M-capable models) and **consistency issues** (sub-agent identity, provider/model switching coherence, and copy/paste fidelity). A notable internationalization discussion on translating "Constitution" into Chinese has drawn active participation, reflecting the project's growing global community.

## Releases

**v0.9.6** is in preparation (PR #5313, closed). Key themes from the release chore:
- Rebuilds compaction around one provider summary plus a committed successor handoff, without mailbox freezes
- Removes harness-created obstruction while preserving explicit budgets, deadlines, cancellation, and truthful provider state
- Includes release infrastructure fixes: CNB asset download URLs (PR #5308) and crate publication order validation (PR #5306)

## Hot Issues

1. **[#5239: The model supports 1M context, but why does the tool only trigger context compression at 128K](https://github.com/Hmbown/CodeWhale/issues/5239)** — A recurring pain point. Users with 1M-window models (DeepSeek v4 Flash, Qwen3.6) are being compacted at 128K. Related to this: #5244 (closed) acknowledges silent fallback to 128K for unknown model IDs; #5134 (closed) asks how to adjust context length — indicating systemic confusion.

2. **[#5034: Switching providers can retain an unrelated default model](https://github.com/Hmbown/CodeWhale/issues/5034)** — Switching to OpenAI can leave `gpt-5.5` as default even when inherited from a different route. Provider and model resolution aren't updating as one coherent unit — a reliability concern for multi-provider users.

3. **[#5293: TUI: make deny-by-default approval selection configurable and clearly explained](https://github.com/Hmbown/CodeWhale/issues/5293)** — v0.9.4 changed the default highlighted option in permission dialogs, risking accidental denials. Community wants this configurable. One 👍 indicates growing support.

4. **[#4949: Discussion: The Chinese Translation of "Constitution" — "宪法", "协作准则", or Something Else?](https://github.com/Hmbown/CodeWhale/issues/4949)** — A thoughtful localization debate. The author of PR #4908 reverted "Constitution" to "宪法" (which carries constitutional/political weight in Chinese) from "协作准则" (collaboration norms). Active discussion with 8 comments from native speakers.

5. **[#5096: Compaction gain not visible](https://github.com/Hmbown/CodeWhale/issues/5096)** — After `/compact`, the token counter doesn't visibly decrease (e.g., stays at 37K/128K). Users can't verify compaction actually worked, undermining trust in the feature.

6. **[#5209: File (action=edit) silently accepts wrong parameter names and reports fake success](https://github.com/Hmbown/CodeWhale/issues/5209)** — Using `new_str` instead of `replace` returns "Replacement successful" without doing anything, causing 3–5x re-edits per location. A critical reliability bug for agent-driven edits.

7. **[#5023: IME Candidate Window Jumps / Unstable Position During Input](https://github.com/Hmbown/CodeWhale/issues/5023)** — Windows 11 users report the IME candidate window jumping during input. A Chinese-language input quality issue that affects a significant user segment.

8. **[#5250: Only one API key can be saved, making it difficult when using across different API providers](https://github.com/Hmbown/CodeWhale/issues/5250)** — Multi-provider users (DeepSeek + GLM) must re-enter keys on every switch. Requesting per-provider key storage instead of a single overwriting slot.

9. **[#5270: v0.9.5: unified tasks surface (shell + subagents + durable workers)](https://github.com/Hmbown/CodeWhale/issues/5270)** — Wants one operator-facing list of "things still running for this session" — background shells, subagents, Fleet/lane workers, workflow runs. The TUI currently fragments this across panels.

10. **[#5314: Copy message from context menu includes rail decorations (● ▏)](https://github.com/Hmbown/CodeWhale/issues/5314)** — Right-click "Copy message" copies UI decorations (role glyph, rail characters) instead of clean text. Selection copy works correctly — a small but annoying fidelity bug.

## Key PR Progress

1. **[#5313: chore(release): prepare v0.9.6](https://github.com/Hmbown/CodeWhale/pull/5313)** — Subtractive runtime release; rebuilds compaction around a single provider summary with committed successor handoff, preserving explicit budgets/deadlines/cancellation.

2. **[#5308: fix(release): use CNB asset download URLs](https://github.com/Hmbown/CodeWhale/pull/5308)** — Fixes updater implementations to use canonical `codewhale.net/codewhale` slugs with proper release download paths so mirror mode receives asset bytes instead of HTML.

3. **[#5306: fix(release): validate crate publication order](https://github.com/Hmbown/CodeWhale/pull/5306)** — Validates the 20-crate publication order against locked Cargo metadata before registry operations; moves `codewhale-core` before `codewhale-tui`; fails closed on duplicates/inversions.

4. **[#5281: build(deps): bump jsonschema from 0.46.10 to 0.49.6](https://github.com/Hmbown/CodeWhale/pull/5281)** — Dependency update from Dependabot, still open — keeping schema validation current.

## Feature Request Trends

- **Context window management** — Users want the context limit to respect model capability (1M) instead of defaulting to 128K, with visible feedback on what window is in effect and why compaction triggers.
- **Provider/key management** — Multiple providers should each store their own API key; switching providers should coherently switch model defaults too.
- **Unified task/tracking surface** — One place to see all running work (shells, subagents, workers, workflows) in the TUI.
- **Improved TUI affordances** — Configurable defaults for permission dialogs, interactive `/fork` session picker, clean copy without UI decorations, stable IME input.
- **Sub-agent identity clarity** — Show the fleet/session name (e.g., `branch-triage`) instead of opaque agent IDs or whale nicknames across all surfaces.
- **Reproducible builds** — Replace hardcoded archive timestamps with `SOURCE_DATE_EPOCH` for deterministic release artifacts.

## Developer Pain Points

- **Silent failures and hidden degradation** — The most common frustration: wrong parameter names returning fake success (#5209), unknown models silently falling back to 128K (#5244), compaction appearing to succeed without visible token reduction (#5096).
- **Context loss on interruption** — Interrupted assistant output isn't persisted as a first-class session item, so continuation loses earlier emitted text (#5000).
- **Compaction reliability** — Beyond the 128K-vs-1M issue, users want compaction to preserve intent, decisions, evidence, and tool continuity — a structured "survival contract" for what survives compaction (#4394, #5043).
- **Configuration shadowing and persistence** — Fleet config has "one layer too many" with silent shadowing (#5098); API keys sometimes persist only in the working repo's plaintext config instead of durable global storage — a security concern (#5047).
- **Test flakiness** — Verifier background tests and `/workspace`-sensitive fixtures flake under full-suite parallelism; 12 untriaged `#[ignore]` tests remain (#5056).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*