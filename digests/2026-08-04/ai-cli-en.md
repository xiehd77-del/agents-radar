# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-04 02:41 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-08-04

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing a maturation phase characterized by a shift from feature novelty to production-grade reliability. Across all seven tools analyzed, the dominant themes are cost transparency, session-state integrity, and multi-session orchestration. Communities are increasingly vocal about silent failures, opaque quota consumption, and the need for deterministic control over autonomous agent behavior. While each tool pursues distinct architectural directions—from Claude Code's hook-based extensibility to Gemini CLI's Antigravity migration and CodeWhale's runtime API expansion—the shared undercurrent is clear: developers are treating AI CLIs as critical infrastructure requiring the same robustness guarantees as traditional dev tools. The ecosystem is bifurcating into two camps: those optimizing for enterprise reliability (Claude Code, Gemini CLI, Copilot CLI) and those prioritizing flexibility and multi-provider support (OpenCode, Kimi Code, Pi, Qwen Code).

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs Active (24h) | Release Status | Notable Signal |
|---|---|---|---|---|
| **Claude Code** | 10 (2,000+ total comments across top issues) | 1 (docs PR) | **v2.1.221 shipped** (Focus view) | Contribution pipeline slow; maintainer review bottleneck |
| **Gemini CLI** | 10 (150+ comments cumulative) | 10 (4 security/stability-focused) | **No release** (0.47.0-nightly since Jun 4) | Antigravity transition creating uncertainty |
| **Copilot CLI** | 10 (57 comments cumulative) | 0 | **v1.0.78-3 shipped** (2 patches) | Rapid release cadence; high issue churn |
| **Kimi Code CLI** | 3 new + 7 historical (42 comments) | 8 (5 from single contributor `ayaangazali`) | **No release** (kosong 0.56.0 merged yesterday) | External contributor bottleneck; 5 open PRs pending review |
| **OpenCode** | 10 (103 comments cumulative) | 10 (mix of features/fixes) | **v1.18.12 shipped** (Azure GPT-5.5 fix) | Most feature-diverse PR pipeline |
| **Pi** | 10 (91 comments cumulative) | 10 (Harness v2, provider support) | **No release** | Architecture shift in progress (Harness v2) |
| **Qwen Code** | 10 (48 comments cumulative) | 10 (7 merged, 3 open) | **v0.21.5 shipped** (Electron→Tauri bridge) | 11 new bugs from single contributor `ryan-mt` |

---

## 3. Shared Feature Directions

### A. Multi-Session Orchestration & Coordination
- **Claude Code** (#24798, #30492, #76727): Inter-session communication, real-time steering, shared working-tree coordination
- **OpenCode** (#27167, #16077): Native session goals, persistent session memory
- **Kimi Code** (#1283): Cross-session memory system
- **Pi** (#7020, #7540): Post-compaction continuation, reliable session resumption
- **DeepSeek TUI** (#2492, #4022): Cross-session memory, subagent controls beyond TUI

### B. Cost & Quota Transparency
- **Claude Code** (#13585, #82506, #65687): CLI-accessible quotas, accurate session accounting, zero idle consumption
- **Gemini CLI** (#22493): Account limits consumed without usage
- **Qwen Code** (#8464, #8419): Prompt-cache preservation for cost reduction
- **OpenCode** (#39845): Transparent model-routing changes

### C. Session-State Integrity & Recovery
- **Gemini CLI** (#28671, #28672): Context corruption after quota fallbacks
- **Copilot CLI** (#4078, #4353): Scheduled prompt queue drops, compact without confirmation
- **Pi** (#7020, #7540): Compaction failures and stalls
- **Qwen Code** (#8316, #8356, #8493): Cancellation semantics, transcript persistence

### D. Sandbox/Security Hardening
- **Gemini CLI** (#28546, #19997): Auth header stripping, credential redaction
- **Claude Code** (#30112, #82090): Egress allowlist reliability
- **Copilot CLI** (#4298): Per-tool sandbox controls
- **OpenCode** (#40125): Per-MCP-server trust configuration
- **Pi** (#7548): Sandboxed issue analysis

### E. Model Flexibility & Multi-Provider Support
- **Copilot CLI** (#3282, #3709): In-session BYOK model switching
- **DeepSeek TUI** (#1481, #4686): Alternative provider routes
- **OpenCode** (#40188): Per-request model overrides
- **Pi** (#7568, #7571): Generic sampling params, new providers
- **Qwen Code** (#8432): Provider catalog sync

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Key Differentiator |
|---|---|---|---|---|
| **Claude Code** | Enterprise reliability, hook-based extensibility | Professional developers, large teams | Mature hook system, sandboxing, plugin SDK | Most battle-tested; richest hook ecosystem; strong enterprise trust |
| **Gemini CLI** | Google ecosystem integration, agentic coding | GCP/Google Workspace users | Tight Gemini model coupling, Antigravity transition | Native Google auth; strongest model integration; migration uncertainty |
| **Copilot CLI** | GitHub-native workflows, plugin ecosystem | GitHub users, enterprise devs | Plugin-based extensibility, GitHub Actions integration | Fastest release cadence; deep GitHub integration; solid plugin system |
| **Kimi Code** | Lightweight CLI for Moonshot models | Moonshot/Kimi API users, Chinese devs | Python/ACP-based; growing third-party support | Prolific external contributor; community-driven quality fixes |
| **OpenCode** | Open-source flexibility, multi-provider | Power users, self-hosters | Plugin hooks, per-MCP trust, web/desktop shells | Most feature-diverse; strongest multi-provider story |
| **Pi** | Rust-based performance, terminal perfection | Terminal purists, self-hosters | Harness v2 architecture; models.dev integration | Best terminal fidelity; Harness v2 promises architectural clarity |
| **Qwen Code** | Alibaba ecosystem, Tauri shell | Alibaba Cloud users, Chinese devs | Electron→Tauri migration; multi-channel agents | Desktop app maturity; strong multimodal compression work |
| **DeepSeek TUI** | DeepSeek-optimized, fleet automation | DeepSeek API users, automation advocates | Rust TUI; Fleet model loadouts; runtime HTTP API | Most innovative "fleet" concept; 77-commit release train |

---

## 5. Community Momentum & Maturity

### Rapid Iterators (High Momentum)
- **Copilot CLI**: 2 patches in 24h; extremely responsive maintainers; 10 hot issues with high social proof
- **Qwen Code**: Regular releases (v0.21.4/5); 10 active PRs; 11 new bugs from single contributor indicates active testing community
- **OpenCode**: v1.18.12 shipped; 10 active PRs; 123 upvotes on flagship feature (#27167)

### Architecture Shifts (High Potential, Moderate Risk)
- **Pi**: Harness v2 rewrite signals major investment but also risk of churn
- **DeepSeek TUI**: 77-commit release train (v0.9.4); 30-PR single-day sprint suggests pre-release chaos
- **Gemini CLI**: Antigravity transition creates uncertainty; stable releases stalled since June

### Stalled/Concerning
- **Claude Code**: Only 1 PR in 24h; maintainer review bottleneck; year-old ECONNRESET issue unresolved
- **Kimi Code**: 5 open PRs from single contributor awaiting review; review capacity is the bottleneck

### Community Health Signals
- **Most socially engaged**: Claude Code (top issue has 115 + across #13585)
- **Most feature-demanding**: OpenCode (#27167 at 123 +) and Gemini CLI (#27304 at 35 +)
- **Most security-conscious**: Gemini CLI (P1 security fixes getting fast merges), Copilot CLI (undici bump closed quickly)

---

## 6. Trend Signals — Reference Value for Developers

### Trend 1: "Silent Failure Fatigue" → Demand for Deterministic Agent Control
The most emotionally charged issues across Claude Code (#80988 `heron_brook` override), Gemini CLI (#20005 silent .env omission), Copilot CLI (#4353 compact without confirmation), and OpenCode (#40314 silent retry hangs) all point to one conclusion: **developers no longer tolerate silent configuration overrides or unreported state changes**. The industry is moving toward explicit confirmation dialogs, visible audit trails, and mechanical STOP-word interrupts (as proposed in DeepSeek TUI #4959). **Recommendation**: When building agent tooling, default to opt-in for anything that mutates user intent; instrument every override path.

### Trend 2: Multi-Session Orchestration Becomes Table Stakes
Claude Code (#24798, 61 comments), OpenCode (#27167, 67 comments), Kimi Code (#1283, 15 comments), DeepSeek TUI (#2492), and Pi (#7020) all report the same gap: **parallel sessions cannot coordinate**. The community is demanding first-class inter-session communication, shared memory, cross-session goals, and subagent control surfaces beyond the interactive TUI. This signals a shift from "single-session assistant" to "multi-agent runtime" — a fundamental product repositioning. **Recommendation**: Invest in session persistence schemas, message buses between sessions, and a runtime API that decouples clients from the execution engine (as DeepSeek TUI's v0.9.4 is doing).

### Trend 3: Cost Visibility Becomes a Competitive Moat
Claude Code's #13585 (115 👍) and Gemini CLI's #22493 (5 months stale) prove that **quota transparency is a trust issue, not just a UX nicety**. Token spikes while idle (Claude Code #65687), session limits consumed without usage (Claude Code #82506, Gemini CLI #22493), and no CLI-accessible quotas are eroding trust. Concurrently, Qwen Code is optimizing prompt-cache preservation (#8464, #8419) and Claude Code is exploring deferred resources. **Recommendation**: Treat quota telemetry as a first-class CLI feature, not a web dashboard afterthought; proactive cache management is the next frontier.

### Trend 4: Provider-Agnosticism Wins Adoption
DeepSeek TUI's #1481 (OpenCode Go/Zen support), Pi's #7568 (generic sampling params), OpenCode's #40188 (per-request model overrides), and Copilot CLI's #3282/#3709 (BYOK model switching) collectively signal that **users want to mix-and-match providers without tool migration**. The CLI shell is becoming an abstraction layer over multiple model backends, similar to how VS Code abstracts over languages. **Recommendation**: Design provider adapters as pluggable, versioned modules; expose model-agnostic boundaries.

### Trend 5: Windows/WSL Support Is Now a First-Class Requirement
Pi's #7547 maintainer call for Windows feedback, Qwen Code's GBK codec fixes (#2532), DeepSeek TUI's Chinese Windows issues (#1854, #2323), Copilot CLI's WSL-specific bugs (#2286, #4328), and Claude Code's macOS ECONNRESET (#5674) collectively show that **platform-specific reliability is now a competitive differentiator**. Windows users, particularly in China (GBK codecs, Chinese IME), are a growing demographic that can no longer be treated as edge cases. **Recommendation**: Treat Windows/WSL as a supported platform, not an afterthought; invest in codec-aware output and terminal emulator compatibility testing.

### Trend 6: Contributor Bottlenecks Threaten Momentum
Kimi Code's single-contributor PR stack (5 PRs, correctness-focused) and Claude Code's 1-PR day both indicate **maintainer review capacity is the real constraint**. The healthiest communities (Copilot CLI, Qwen Code) have multiple active contributors and rapid merge cycles. **Recommendation**: Multi-maintainer projects should consider structured triage processes and external-contributor champions; single-maintainer projects should formalize their bus-factor risk.

---

*Report compiled from community digests dated 2026-08-04. All issue/PR references are cross-linked to their respective repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-04 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

### #1 — Skill-Creator Reliability Fixes (PR #1298, #1099, #1050, #1323, #1261)
**Status:** Open | [PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1323](https://github.com/anthropics/skills/pull/1323), [PR #1261](https://github.com/anthropics/skills/pull/1261)

This is the single most-discussed cluster in the repository. **Five separate PRs** address critical bugs in the `skill-creator` evaluation pipeline: `run_eval.py` reports 0% recall on every query (making the description-optimization loop optimize against noise), crashes on Windows (WinError 10038, PATHEXT issues, cp1252 encoding), and contaminates the live project's `.claude/commands/` directory during parallel evaluation. The community has independently reproduced these issues at least **10+ times** (Issue #556, #1169, #1061).

**Key insight:** The skill-creator tooling — the meta-skill that generates other skills — is the community's #1 pain point. Its broken evaluation loop undermines every skill description's quality.

---

### #2 — Document-Typography Skill (PR #514)
**Status:** Open | [PR #514](https://github.com/anthropics/skills/pull/514)

A quality-control skill that prevents common typographic problems in AI-generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment. The author notes these issues affect **every document Claude generates**. Discussion highlights the skill's universal applicability across document types.

---

### #3 — PDF Case-Sensitivity Fix (PR #538)
**Status:** Open | [PR #538](https://github.com/anthropics/skills/pull/538)

Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). The actual files are lowercase but referenced in uppercase, breaking on case-sensitive file systems (Linux/macOS). Simple, critical fix for cross-platform reliability.

---

### #4 — ODT Skill for OpenDocument Format (PR #486)
**Status:** Open | [PR #486](https://github.com/anthropics/skills/pull/486)

Adds a skill for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods) — including conversion to HTML. Triggers on mentions of 'ODT', 'ODS', 'ODF', 'OpenDocument', or 'LibreOffice'. Addresses enterprise demand for open-standard document formats beyond the current DOCX/PDF coverage.

---

### #5 — Skill Quality & Security Analyzers (PR #83)
**Status:** Open | [PR #83](https://github.com/anthropics/skills/pull/83)

Adds two **meta-skills** to the marketplace: `skill-quality-analyzer` (evaluates across five dimensions: structure & documentation 20%, plus others) and `skill-security-analyzer`. Discussion centers on whether security verification should be mandatory before any skill is accepted into the marketplace.

---

### #6 — Test-Driven Development: Testing-Patterns Skill (PR #723)
**Status:** Open | [PR #723](https://github.com/anthropics/skills/pull/723)

A comprehensive `testing-patterns` skill covering the full testing stack: Testing Trophy model, unit testing (AAA pattern, naming, pure functions, edge cases), React component testing (Testing Library queries), and more. The most-requested **engineering skill** in the pipeline.

---

### #7 — Self-Audit Skill (PR #1367)
**Status:** Open | [PR #1367](https://github.com/anthropics/skills/pull/1367)

A skill that audits AI output before delivery: **mechanical file verification first**, then a four-dimension reasoning audit in damage-severity priority order. Universal — works with any project, tech stack, or model. Part of a broader "Reasoning Quality Gate" movement in the community (related Issue #1385).

---

## 2. Community Demand Trends

### Trend 1: Security & Trust as First-Class Concern (Issue #492 — 43 comments, 👍2)
The highest-comment issue in the repo: **community skills distributed under the `anthropic/` namespace** enable trust boundary abuse. Users may grant elevated permissions to community skills they believe are official. The community is demanding:
- Explicit provenance labeling (community vs. official)
- Mandatory permission audits before skills enter the marketplace
- Red flags when skills request unnecessary filesystem/network access

### Trend 2: Enterprise Document Workflows
Multiple issues and PRs target document creation/processing:
- ODT support (PR #486) — open-format enterprise demand
- SharePoint Online security concerns (Issue #1175)
- Typography quality control (PR #514)
- PDF/DOCX reliability fixes (PR #538, #541)

### Trend 3: Skills Tooling Quality (Issues #556, #1169, #1061)
The community consistently hits bugs in the skill-creator evaluation logic. **Central demand:** the meta-tooling that generates skills must be reliable before new skills can be trusted.

### Trend 4: Organizational Sharing & Governance
Two threads dominate:
- **Org-wide skill sharing** (Issue #228, 16 comments, 👍8): direct sharing links and a shared skill library instead of manual file downloads.
- **Skill lifecycle management** (PR #1479): planning artifacts accumulate with no lifecycle — demand for file-hygiene and cleanup skills.

### Trend 5: Agent Governance Patterns
Issue #412 (agent-governance) requested skills covering policy enforcement, threat detection, trust scoring, and audit trails. Related demand for compact-memory/state-management skills (Issue #1329) highlights the need for **long-running agent context optimization**.

---

## 3. High-Potential Pending Skills

| PR | Skill | Description | Status |
|----|-------|-------------|--------|
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Lifecycle management for planning artifacts that accumulate with no cleanup | Open, recently updated (Jul 27) |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, RAL), color spaces decision table, CAM16 | Open, active discussion (Jul 21) |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Retro/pixel-art game development with the Pyxel engine (write → run_and_capture → inspect → iterate) | Open, extended discussion (Jul 15) |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Mechanical output verification + four-dimension reasoning quality gate before delivery | Open, v1.3.0, recent comments |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Full-stack testing: TDD, Testing Trophy, unit/React/end-to-end patterns | Open, consistent activity |

**Status note:** All PRs in this repository are open; none have been merged into the official collection as of the data date. The most likely candidates to land soon are the **skill-creator fixes** (multiple independent PRs addressing the same blocker bugs) and **testing-patterns** (clear demand, comprehensive scope).

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand at the Skills level is for the tooling that builds and validates Skills themselves to be reliable first — with heavy secondary demand for security-conscious enterprise document workflows (including governance, trust verification, and quality gates) that work on non-Unix platforms.**

---

# Claude Code Community Digest — 2026-08-04

## Today's Highlights

Claude Code v2.1.221 shipped with a new Focus view for the VS Code extension, giving developers a cleaner chat interface that hides raw tool activity behind expandable per-turn summaries. The community conversation remains dominated by two long-running threads: inter-session communication for multi-Claude workflows (#24798, 61 comments) and the Cowork network egress allowlist blocking legitimate domains (#30112, 54 comments). A new bug report around Opus 5's `heron_brook` prompt section silently overriding user delegation policy (#80988) is gaining traction with 33 👍 in just over a week.

## Releases

**v2.1.221** — Two changes landed in the latest release:
- **VS Code Focus view**: A chat-menu toggle that collapses tool activity into an expandable per-turn summary with a live running-tool indicator. Toggle via `Ctrl+Alt+F` or the "Claude Code: Toggle Focus view" command. This directly addresses long-standing complaints about chat noise from verbose tool calls.
- **Linux sandbox credential masking**: New `mode: "mask"` option for sandbox credential files, improving secret handling on Linux.

## Hot Issues

1. **#24798 — Inter-session communication for multi-Claude workflows** ([link](https://github.com/anthropics/claude-code/issues/24798))  
   61 comments, 20 👍. The community's most persistent feature request: developers running parallel Claude Code sessions on large projects want a first-class way to sequence work across sessions with dependencies. No maintainer response yet, despite being open since February.

2. **#30112 — Cowork network egress allowlist blocking custom domains** ([link](https://github.com/anthropics/claude-code/issues/30112))  
   54 comments, 51 👍. A significant bug: custom domains configured in the Cowork egress allowlist are still blocked with `403 blocked-by-allowlist`. Six months old and a top upvote magnet — this is actively breaking CI and automation pipelines.

3. **#5674 — Persistent ECONNRESET errors on macOS** ([link](https://github.com/anthropics/claude-code/issues/5674))  
   52 comments, 48 👍. A year-old issue that won't die: macOS network connections keep dropping with ECONNRESET, interrupting long-running tasks. Windows and Linux on the same network are unaffected, pointing to a platform-specific networking bug.

4. **#30492 — Real-time steering: priority message channel mid-execution** ([link](https://github.com/anthropics/claude-code/issues/30492))  
   31 comments, 60 👍. Developers want to interrupt and redirect Claude Code mid-workflow without canceling the whole run. High signal-to-noise; the request has broad support.

5. **#13585 — Quota information access in CLI** ([link](https://github.com/anthropics/claude-code/issues/13585))  
   24 comments, 115 👍. The single most-upvoted open issue. Users want `claude` to expose plan/usage quota directly in the CLI instead of burying it in web dashboards. Cost visibility is a recurring theme.

6. **#80988 — `heron_brook` prompt section overrides delegation policy for Opus 5** ([link](https://github.com/anthropics/claude-code/issues/80988))  
   15 comments, 33 👍. A system-prompt injection in v2.1.219 tells Opus 5 "Do not call the AgentTool unless the user requested it," silently overriding user-configured delegation policies with no opt-out. This is a prompt-engineering governance problem with real workflow impact.

7. **#67606 — Opus 4.8 confabulation in long sessions** ([link](https://github.com/anthropics/claude-code/issues/67606))  
   15 comments, 4 👍. Two JSONL-verified sessions where Opus 4.8 fabricated user messages, a fake "prompt injection attack" narrative, and tool/host facts. The reporter did careful forensic work. Concerning for long-running autonomous sessions.

8. **#82506 — Claude Max session limit consumed without usage** ([link](https://github.com/anthropics/claude-code/issues/82506))  
   12 comments, 6 👍. Users report Max subscription session limits being consumed without actual usage. Ties into broader quota-visibility frustration (#13585).

9. **#65687 — Token spike while Claude Code is inactive (Windows)** ([link](https://github.com/anthropics/claude-code/issues/65687))  
   10 comments, 1 👍. Token consumption continues while the tool is idle. Cost-accuracy concern on Windows specifically.

10. **#76727 — Cross-session coordination for shared working trees** ([link](https://github.com/anthropics/claude-code/issues/76727))  
    9 comments. Heavy users running many independent sessions against one repo have no coordination story; the only primitive is a DIY PreToolUse `deny` hook with silent failure holes. Complements #24798.

## Key PR Progress

Only one PR was updated in the last 24h — the repo has been quiet on the contribution front:

1. **#83374 — docs(plugin-dev): document MessageDisplay streaming semantics** ([link](https://github.com/anthropics/claude-code/pull/83374))  
   The bundled Hook Development skill omits `MessageDisplay` from its trigger description, event guidance, and quick-reference table despite it being a supported hook event. This PR documents it. Small but useful for plugin authors; open since Aug 2 with no review activity yet.

**Note**: With only one PR in the window, the contribution pipeline appears slow this week. The maintainers' review capacity may be the bottleneck — none of the recent PRs show maintainer comments in the data.

## Feature Request Trends

Three clear directions are emerging from the issues:

1. **Multi-session orchestration** (#24798, #30492, #76727): The community is pushing hard for first-class inter-session communication, real-time steering, and coordination primitives for parallel Claude Code workflows. The current hook-based workarounds are viewed as fragile and incomplete.

2. **Cost and quota transparency** (#13585, #82506, #65687): Developers want CLI-accessible quota info, accurate session-limit accounting, and zero idle token consumption. The high upvote counts (115 on #13585) signal this is a top-tier pain point, especially for Max subscribers.

3. **Deferred, on-demand resources** (#83702, #76040): Following ToolSearch's pattern, users want MCP server instructions and schemas deferred until actually needed, reducing context-window bloat and startup overhead.

## Developer Pain Points

- **Silent failures are the #1 frustration**: The most emotionally charged issue this week is #80988 (`heron_brook` silently overriding delegation policy with no opt-out). Closely related: #83687 (Stop hook verdict silently discarded) and #82323 (PreToolUse hook inert with no signal). Developers feel they cannot trust that their configuration is actually being honored.

- **Network egress allowlists are a headache**: #30112 (Cowork allowlist blocking custom domains) and #82090 (RemoteTrigger blocking Openverse/Wikimedia) both report legitimate domains being blocked for days with no workaround. This is breaking scheduled automations and CI.

- **Cost control remains elusive**: Token spikes while idle (#65687), Max session limits consumed without usage (#82506), and no CLI quota access (#13585) collectively paint a picture of unpredictable, opaque spend.

- **Model behavior regression anxiety**: Between Opus 4.8 confabulation (#67606), Opus 5 force-switching (#83683), and the `heron_brook` prompt section (#80988), several power users are expressing concern about model-level changes overriding user intent with no escape hatch.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-08-04

## Today's Highlights
Quiet day on the release front but active in maintenance, with a major security PR stripping stale Authorization headers, dependabot closing a critical `undici` update, and multiple PRs tackling context corruption, quota-fallback bugs, and MCP stability. The community is increasingly vocal about the Antigravity migration, the reliability of Gemini 3.x models, and sandbox/security concerns—topics that continue to dominate the issue tracker. Signal is strong that maintainers are prioritizing hardening the CLI's core, particularly around auth, session integrity, and provider readiness.

## Releases
No new releases in the last 24 hours. The last tagged version remains **0.47.0-nightly** (from June 4, 2026), with the latest nightly PR bump (#27661) still open. The 0.47.0+ codebase continues to show active development, but stable releases have slowed, likely tied to the Antigravity CLI transition.

## Hot Issues
1. **[#27258 – `gemini-3.5-flash` not working in Gemini CLI](https://github.com/google-gemini/gemini-cli/issues/27258)** [open, p2, 21 comments, 👍25] – The most active thread today, despite being created two months ago. Users report the model failing with bizarre terminal output (a literal "hi" inside ASCII boxes). High engagement with 25 upvotes indicates broad impact on model availability. The 3.5-flash issue is significant because it is the default model for many users; reports of ASCII-art terminal corruption suggest deep rendering/dispatch bugs.
2. **[#22493 – Account limit reached without usage; policy change or bug?](https://github.com/google-gemini/gemini-cli/issues/22493)** [closed, p2, 13 comments, 👍9] – Persistent user complaint dating back to March, now a **Stale** issue. Users report unexplained quota consumption on Google One subscriptions without any CLI usage, raising trust and billing-concern flags. The length of this issue (5 months) without a definitive public resolution has likely eroded user confidence.
3. **[#19997 – Missing API key redaction in proxy URLs](https://github.com/google-gemini/gemini-cli/issues/19997)** [closed, p1, 11 comments] – Security bug confirming that credentials in proxy URLs (e.g. `http://api-key@proxy`) are logged in telemetry without redaction. The fact this was **P1** but is now **Stale** and closed suggests a security fix landed, but the slow resolution was a gap in operational trust. This is a reminder to scrub proxy URLs before enabling verbose logging.
4. **[#20005 – Silent .env omission in untrusted workspaces](https://github.com/google-gemini/gemini-cli/issues/20005)** [closed, p2, 10 comments] – **UX bug** that bites new users: when a project is untrusted, the CLI silently skips loading `.env`, leaving the user with a confusing "auth failed" message despite `GEMINI_API_KEY` being set. This wastes developer time and is a misfeature of the trust model; the fix should surface a clear notification instead of silent omission.
5. **[#22241 – Gemini CLI hangs indefinitely with Google One AI Ultra (OAuth)](https://github.com/google-gemini/gemini-cli/issues/22241)** [closed, p1, 8 comments] – A **critical availability bug** for OAuth users: all API calls hang for 5 minutes until Node times out, with no output. This was a major production blocker for a broad class of users, and its closure (presumably fixed) is a relief, but the same class of OAuth-hang bugs could recur.
6. **[#20767 – Skipped context-compression test passes; should be enabled](https://github.com/google-gemini/gemini-cli/issues/20767)** [closed, p3, 10 comments] – A concerned user found a test marked `it.skip` in `client.test.ts` that actually passes when enabled. This indicates a deliberate but undocumented choice (possibly to avoid flakiness) and highlights that the codebase may have stale maintenance debt. Enabling it would restore coverage for the security-critical context-compression path.
7. **[#27304 – Is Antigravity CLI open source?](https://github.com/google-gemini/gemini-cli/issues/27304)** [closed, p3, 5 comments, 👍35] – The **top social signal today** (35 upvotes). With Google announcing the transition from Gemini CLI to Antigravity CLI, users ask whether the new tool will remain open source. High engagement shows strong community investment and anxiety about a possible closed-source future; the answer is not clearly affirmative in public threads — this is a key transparency friction point.
8. **[#2015 – MCP without instructions causes connection refusal](https://github.com/google-gemini/gemini-cli/issues/2015)** [closed, p2, 7 comments, 👍5] – Canonical, long-standing MCP bug: MCP servers that omit optional `instructions` field are refused by Gemini CLI, even though the MCP spec makes it optional. This is a recurring pain point for MCP server authors and contributed to the MCP ecosystem's perceived rigidity. The long lifecycle (2025-06 → 2026-08) shows slow prioritization of spec-compliance fixes.
9. **[#21851 – `/privacy` command fails to persist opt-out setting](https://github.com/google-gemini/gemini-cli/issues/21851)** [closed, p1, 5 comments] – **Privacy regression**: even when users select "No," the data-collection setting reverts to "Yes" in the next session. For a privacy-sensitive audience, this is a high-severity issue—it undermines trust in the tool’s handling of user data, and the slow resolution was a PR disaster waiting to happen.
10. **[#19436 – `function_response.parts` not supported for model](https://github.com/google-gemini/gemini-cli/issues/19436)** [closed, p2, 6 comments] – Recurring 400 error for Gemini 2.5 users when using tool-returned content: `function_response.parts` is not supported by the selected model. This is a typical "model forward-compat but CLI backward-incompat" gap; workarounds (like YOLO mode or forced `Auto` tool type for verbose MCP servers) are documented but confusing for less technical users.

## Key PR Progress
1. **[#28546 – Strip Authorization header when using GEMINI_API_KEY auth](https://github.com/google-gemini/gemini-cli/pull/28546)** [open, p1, size/s] – **Critical security fix** that removes stale `Authorization` headers when the CLI authenticates via `x-goog-api-key`. This resolves a mysterious `401 UNAUTHENTICATED ACCESS_TOKEN_TYPE_UNSUPPORTED` class of errors that affected users mixing OAuth and API-key workflows. High priority and security-focused; merges cleanly patch the auth layer.
2. **[#28657 – Prevent malformed GitHub JSON from crashing extensions](https://github.com/google-gemini/gemini-cli/pull/28657)** [open, p2, size/m] – Hardens `fetchJson()` with error handling for malformed/truncated GitHub API responses, preventing uncaught exceptions from crashing extension operations. This protects users whose GitHub API returns throttled or partial responses, turning an opaque crash into a graceful error state.
3. **[#28663 – Harden fetchJson against malformed JSON and stream failures](https://github.com/google-gemini/gemini-cli/pull/28663)** [open, p2, size/m] – Similar to #28657 from a different contributor (HoneyTyagii), targeted at the same `github_fetch.ts` path, fixing the same class of bug and referencing issue #28646. This **duplicates effort** — maintainers could merge both and reconcile, but the stalemate suggests the review queue is bottlenecked. The redundancy signals that this failure mode is well-known to users; a merged fix would be a solid win.
4. **[#28673 – Add Gemini 3.6 Flash and 3.5 Flash-Lite model configurations](https://github.com/google-gemini/gemini-cli/pull/28673)** [open, p2, size/l] – **Important feature PR** that adds full support (capabilities, aliases, Code Assist, etc.) for the newest flash models. This is the likely fix for the #27258 issue (model availability). Large diff; expect model-config churn as the CLI aligns with backend model rollouts.
5. **[#28671 – Resolve context corruption and quota error fallback issues](https://github.com/google-gemini/gemini-cli/pull/28671)** [open, size/m] – Addresses a **deep reliability bug** where tool executions interrupted by quota errors (429s) corrupt the conversation context and cause "autocomplete" prefix-continuation behavior. This targets the context-compression failure class that has caused many "session corrupted" complaints (see #19590). Root-causing history corruption is high-value work.
6. **[#28660 – Keep sendStream alive on malformed tool arguments](https://github.com/google-gemini/gemini-cli/pull/28660)** [open, p2, size/m] – Defensive fix in `sendStream()`: invalid string-valued tool arguments (e.g. arrays, primitives) no longer escape as `JSON.parse()` failures mid-stream; they turn into structured `functionResponse` errors. This closes an entire class of hard-to-debug hangs and is a strong robustness improvement.
7. **[#28672 – Repair /compress session reload and quota-fallback tool response loss](https://github.com/google-gemini/gemini-cli/pull/28672)** [open, size/m] – Two fixes: (1) `/compress` no longer fails with a "Failed to load resumed session data" hard-throw, and (2) tool responses are preserved across quota-fallback model switches. Together with #28671, this is a focused effort to fix the **session corruption and recovery pipeline**, arguably the most impactful stability work in the queue today.
8. **[#28670 – Fix fallback on model capacity errors for GCA agent mode](https://github.com/google-gemini/gemini-cli/pull/28670)** [open, size/m] – Resolves an **infinite retry loop** where Gemini Code Assist agent mode gets stuck on a failed model (e.g. `MODEL_CAPACITY_EXHAUSTED` / 429) instead of failing over to Flash-like fallbacks. High-value fix for enterprise agent workloads; queued behind other p2s.
9. **[#28674 – chore(deps): bump ip-address from 10.2.0 to 10.4.0](https://github.com/google-gemini/gemini-cli/pull/28674)** [closed, size/xs] – Dependabot patch bump, already closed (likely merged). A minor but necessary maintenance lane staying clean.
10. **[#28668 – chore(deps): bump undici from 7.10.0 to 7.29.0](https://github.com/google-gemini/gemini-cli/pull/28668)** [closed, size/s] – **Security-driven update**: `undici` 7.29.0 includes high-severity security fixes. Closed quickly, signaling a responsive security posture. Good to see the team prioritizing upstream vulnerabilities.

## Feature Request Trends
- **Model availability and aliasing** – The most persistent theme: users want seamless support for any model, including newer flash variants (3.5/3.6), and complain when models are missing or error (#27258, #20857, #28673). The quiet 24h is an outlier; model support request churn is high.
- **Sandbox/security hardening** – Multiple threads request better sandboxing behavior, including macOS seatbelt profile fallback (#28551), Windows sandbox compilation failures (#28277), and deterministic secret redaction in Auto Memory logs (#26525). Security posture is a top-tier community concern.
- **Read-only MCP mode with verified guarantees** – Users want Plan Mode to be truly read-only, with the CLI *verifying* MCP server `readOnlyHint` claims rather than blindly accepting them (#28549, related #28548). This is about trustworthiness of the tool-access model.
- **Reliable context compression and recovery** – High demand for fixed context-compression reliability: users face heap-allocation crashes (#19590) and silent session failures. The stream of PRs (#28671, #28672) indicates maintainers are prioritizing this, but users are still clamoring for it.

## Developer Pain Points
- **Model reliability and consistent API behavior** – Developers report that "Gemini 3.0/3.1 don't respond" and that `gemini-3.5-flash` produces weird terminal artifacts (#27258, #20857). The capacity errors, hangs, and `function_response.parts` failures make the CLI feel breakage-prone across version upgrades.
- **MCP integration friction** – MCP servers that don't comply with the "strict" expectations of the CLI cause core functionality to fail: connection refusal when optional `instructions` are missing (#2015), and 400 "malformed function call" errors without YOLO mode (#22179). This frustrates MCP server authors and heavy tool users alike.
- **Session corruption and unrecoverable errors** – Users lose entire sessions to context-corruption bugs after quota fallbacks or `ESC` interruptions (#28671, #28672). The fact that these persist across many months (e.g. #19590 from Feb) is a severe developer experience drain.
- **OAuth and authentication fragility** – A cluster of issues (SSH/headless OAuth browser flow failure, stale `Authorization` headers causing 401s after OAuth→API-key switch, MCP OAuth token refresh failures) make authentication the "quiet breaker" that wastes a day of engineering time when it fails.
- **Silent failures and misleading UX** – Silent `.env` omission in untrusted workspaces, unredacted proxy credentials in logs, and privacy settings that don't persist (#20005, #19997, #21851) all betray developer trust, making it hard to know whether the tool is doing what is promised.
- **Antigravity transition uncertainty** – The community's top social signal is about the future openness of the CLI (#27304, #27299). Developers who invested heavily in Gemini CLI workflows are anxious about a transition to a tool that may be closed-source or have a different licensing model, creating a plan-for-fork sentiment in the community.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-08-04

## Today's Highlights
Two new patch releases (v1.0.78, v1.0.78-3) shipped with an experimental `/new-worktree` command, live tool-call duration timers, and auto-updating first-party plugins. The community is actively discussing project-scoped plugin support and multi-model BYOK capabilities, with several critical bugs around session management and model compatibility surfacing.

## Releases
**v1.0.78-3** (2026-08-03) — [View Release](https://github.com/github/copilot-cli/releases)
- **Added**: Experimental `/new-worktree` command to create a new worktree and start a fresh conversation
- **Improved**: Interactive shell shortcut (Enter) now shows inline hint when `"$"` is armed
- **Fixed**: Copilot login defaults to browser flow for local desktop

**v1.0.78** (2026-08-03) — [View Release](https://github.com/github/copilot-cli/releases)
- **Added**: Live, right-aligned timeline headers showing tool-call durations (≥5s); on by default, disable with `/settings showToolDurations`
- **Added**: First-party plugins auto-update to latest version at session start
- *(Full release notes truncated in source data)*

---

## Hot Issues

### 1. Project-Scoped Plugin Support — [#1665](https://github.com/github/copilot-cli/issues/1665)
**Status**: Closed (14 comments, 18 👍)  
**Why it matters**: Users want plugins installed per-repo/project, not globally per-user. Currently plugins load globally, making team-specific tooling impossible. High community demand suggests configuration complexity is a real barrier to adoption.

### 2. Multiple BYOK Models — [#3282](https://github.com/github/copilot-cli/issues/3282)
**Status**: Open (7 comments, 20 👍)  
**Why it matters**: Single-model BYOK via env var forces session restarts to switch providers. Users want TUI-based model switching for local/self-hosted models — a major workflow blocker for power users running multiple local backends.

### 3. Skill Limit (~32) Unreachable in System Prompt — [#1464](https://github.com/github/copilot-cli/issues/1464)
**Status**: Open (6 comments, 7 👍)  
**Why it matters**: Skills beyond position ~32 are silently omitted from the system prompt due to token limits, making them unreachable by the model. A critical UX and capability bug for plugin-heavy setups.

### 4. Scheduled Prompts Kill Prompt Queue — [#4078](https://github.com/github/copilot-cli/issues/4078)
**Status**: Closed (5 comments)  
**Why it matters**: `/every` and `/after` scheduled prompts interrupt the queue — processing the scheduled prompt but dropping queued items. Breaks automation flows and batch operations.

### 5. Allow `/model` to Switch Between Multiple Models (incl. BYOK/local) — [#3709](https://github.com/github/copilot-cli/issues/3709)
**Status**: Open (3 comments, 20 👍)  
**Why it matters**: BYOK pins a session to one model; `/model` picker excludes local providers. Users want to switch models mid-session without restarting — related to #3282, representing a stronger demand signal.

### 6. Scrolling Through Conversation History — [#4313](https://github.com/github/copilot-cli/issues/4313)
**Status**: Open (3 comments)  
**Why it matters**: Mouse wheel/PageUp/PageDown don't scroll through past conversation in TUI. A basic terminal UX expectation missing from a mainstream tool.

### 7. gpt-5.6-luna Advertised but Unusable — [#4337](https://github.com/github/copilot-cli/issues/4337)
**Status**: Closed (2 comments)  
**Why it matters**: Model advertised in `/models` but fails on `/chat/completions` — only works via `/responses`. Breaks MoA/aggregator tooling and raises questions about OpenAI-compat surface parity.

### 8. Toggle Plugins Enabled/Disabled — [#2714](https://github.com/github/copilot-cli/issues/2714)
**Status**: Open (2 comments, 11 👍)  
**Why it matters**: Community wants quick plugin toggle without uninstall. Gemini CLI and Claude Code already support this — parity expectation is rising.

### 9. Compact Accidental Trigger (Blocker) — [#4353](https://github.com/github/copilot-cli/issues/4353)
**Status**: Open (0 comments)  
**Why it matters**: Compact rewrites conversation context with no confirmation, warning, or undo. Data-loss risk in a core workflow — deserves immediate triage attention.

### 10. Sandbox Config to Selectively Enable Tools — [#4298](https://github.com/github/copilot-cli/issues/4298)
**Status**: Open (1 comment, 1 👍)  
**Why it matters**: Users want per-tool enable/disable in sandbox settings, not just bundled defaults. Reflects growing fine-grained control expectations for agent capabilities.

---

## Key PR Progress
*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

| Trend | Related Issues | Frequency |
|---|---|---|
| **Multi-model support & switching** (BYOK + hosted, in-session) | #3282, #3709 | High |
| **Project/repo-scoped configuration** (plugins, skills) | #1665, #1464 | High |
| **Plugin lifecycle management** (toggle, disable without uninstall) | #2714 | Medium |
| **Terminal UX improvements** (history scrolling, theming, table rendering) | #4313, #2830, #2412 | Medium |
| **Fine-grained control** (sandbox tool selection, permissions, OSC 9;4 opt-out) | #4298, #4352, #4349 | Medium |
| **Sandbox/policy polish** (GitHub Actions GITHUB_TOKEN support, managed settings) | #4346, #4349 | Emerging |

---

## Developer Pain Points

1. **Model flexibility bottlenecks** — BYOK users can't switch models in-session, and advertised models sometimes don't work across API surface. Two issues (#3282, #3709) with 40+ combined 👍 show this is the community's top workflow blocker.

2. **Configuration is per-user only** — Project-scoped plugins (#1665) and global plugin load cause collaboration friction. Team setups require manual per-machine setup.

3. **Session-state fragility** — Scheduled prompts dropping queues (#4078), stashed prompts lost on session switch (#4334), and compact-without-confirmation (#4353) erode trust in long-running automation.

4. **Terminal rendering inconsistencies** — Scrolling limitations (#4313), table reflow during streaming (#4347), and various terminal-specific bugs (#4267, #4328) highlight unfinished terminal-emulator support.

5. **Windows/WSL2-specific pain** — From git symlink plugin install (#2286) to ctrl+H misinterpretation (#4328) and escape-sequence input pollution (#4267), Windows users face a fragmented experience.

6. **Enterprise/GitHub Actions friction** — Managed settings policy validation failures (#4349) and MCP registry 403s in CI (#4346) block enterprise adoption and CI automation — a surprising gap for a GitHub product.

---

*Digest generated from github.com/github/copilot-cli activity on 2026-08-04. Data reflects issues/PRs updated within the last 24 hours.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-04

## Today's Highlights
No new releases landed in the last 24 hours, but the community remains highly active with 3 open issues and 8 PRs receiving updates — including several long-running fixes from contributor **ayaangazali** targeting shell hang, hook reliability, and ACP server correctness. Notably, the Web UI session-switching bug (#2573) and a critical CLI stream hang (#2582) are drawing attention, while the long-requested **Memory System** enhancement (#1283) continues to accumulate interest with 15 comments.

---

## Releases
None in the last 24 hours. (Last known release: `kosong 0.56.0` via PR #2581, merged yesterday.)

---

## Hot Issues
*(10 selected from 3 recent + high-signal older issues)*

### 🧠 #1283 — [enhancement] Feature Request: Memory System - Persistent context across sessions
- **Why it matters:** The most-starred open enhancement (15 comments). Developers want Kimi CLI to remember project patterns, user preferences, and notes across sessions — both AI-managed and manually defined.
- **Community reaction:** Active discussion; users are referencing similar features in Claude Code and Cursor. No maintainer response yet.
- [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### 🐛 #2573 — Bug: Web UI "Connecting to session..." infinite spinner when switching sessions
- **Why it matters:** The Web UI is in Technical Preview; session switching is a core workflow. The spinner blocks all interaction with the UI until restart.
- **Community reaction:** 1 comment confirming reproduction on macOS arm64 with kimi-cli 1.48.0. No workaround posted.
- [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2573)

### 🐛 #2582 — CLI stream hangs indefinitely during generation, session becomes unusable
- **Why it matters:** Critical stability issue on Windows with Moonshot Platform API (`kimi-k2.7-code`). The session becomes permanently stuck — no timeout, no recovery. Potentially affects a wide Windows user base (v0.31.1 is notably older, suggesting upgrade path may be needed).
- **Community reaction:** Just opened (0 comments). Needs maintainer triage.
- [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2582)

### 🐛 #2532 — Startup banner crashes on legacy console codecs (e.g., GBK on Chinese Windows)
- **Why it matters:** Bare `print()` of the `U+279C` character breaks startup on GBK/legacy codecs — a hard crash before any command works.
- **Community reaction:** PR #2577 is open to fix; issue resolved soon.
- [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2532)

### 🐛 #2564 — PostToolUse hooks fire via bare `asyncio.create_task` and get dropped
- **Why it matters:** Hooks can be silently garbage-collected if nothing else holds a reference — data loss for automation workflows.
- **Community reaction:** PR #2575 proposed (`fire_and_forget_trigger`). Awaiting review.
- [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2564)

### 🐛 #2468 — Detached child processes hold pipes, blocking shell command until timeout
- **Why it matters:** `some_daemon & echo done` hangs until the timeout — common pattern for dev servers. Blocks CI scripts and interactive use.
- **Community reaction:** 1 comment; PR #2530 open.
- [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2468)

### 🐛 #2495 — ACP server resolves empty answers on every `QuestionRequest`
- **Why it matters:** Model cannot distinguish "user dismissed" from "user answered nothing" — breaks agent decision-making in ACP mode.
- **Community reaction:** PR #2507 open with `QuestionNotSupported` fix. No comments.
- [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2495)

### 🐛 #2534 — Third-party Kimi-compatible endpoints receive Moonshot-only `prompt_cache_key`
- **Why it matters:** Breaks compatibility with non-Moonshot endpoints (OpenRouter, self-hosted, etc.) — causes errors or silent cache misses.
- **Community reaction:** PR #2535 scopes cache keys to Moonshot APIs only. Awaiting review.
- [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2534)

### 🔧 (Historical) #2581 — Release: kosong 0.56.0
- **Status:** Merged yesterday. Bumps kosong, moves release notes, updates dependency pins. Cleans up Anthropic beta header handling (see PR #2580).
- [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2581)

---

## Key PR Progress
*(10 selected, ordered by recency of update)*

1. **#2577 — fix(web,vis): do not crash printing the startup banner on legacy console codecs**
   - Fixes #2532 by replacing bare `print()` with safe codec-aware output for the banner URLs. Small, targeted, ready for merge.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2577)

2. **#2575 — fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger**
   - Wraps hook tasks in `fire_and_forget_trigger` to keep references alive — prevents silent garbage-collection of pending hooks. Direct fix for #2564.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2575)

3. **#2554 — fix(tools): count StrReplaceFile replacements against running content**
   - Corrects the success-message count for `StrReplaceFile` to reflect **post-replacement** text, not the original string occurrence count. Self-contained correctness fix.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2554)

4. **#2530 — fix(shell): stop blocking until timeout when a detached child holds the pipes**
   - Fixes #2468 by checking exit code before waiting on stdout/stderr EOF — prevents hangs from daemonized children.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2530)

5. **#2507 — fix(acp): signal QuestionNotSupported instead of resolving empty answers**
   - ACP server now returns `QuestionNotSupported` when a question can't be presented, instead of an empty dict that is indistinguishable from a dismiss. Fixes #2495.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2507)

6. **#2535 — fix(llm): scope prompt cache keys to Moonshot APIs**
   - Restricts `prompt_cache_key` to official Moonshot/Kimi endpoints only — third-party Kimi-compatible APIs no longer receive Moonshot-specific params. Fixes #2534.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2535)

7. **#2581 — chore(release): bump kosong to 0.56.0** ✅ *Merged*
   - Standard release chore. Updates version, release notes, and dependency pins.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2581)

8. **#2580 — fix(kosong): omit empty anthropic-beta header when no beta features declared** ✅ *Merged*
   - Removes unconditional `anthropic-beta` header emission (with empty value) when no beta features are used. Improves Anthropic API compatibility.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2580)

9. **#2507* (continued)* — long-running fixes from a single contributor (`ayaangazali`)**
   - The author of #2577, #2575, #2554, #2530, and #2507 is a **prolific external contributor** — 5 open PRs, all correctness-focused, ranging from hooks to shell to ACP. Worth watching.
   - (Listed above individually.)

10. **(Observation) — No new PRs opened in the last 24h**
    - Only updates to existing PRs. All 8 PRs were created between Jul 18 – Aug 3.

---

## Feature Request Trends
*Distilled from all open enhancement issues:*

1. **Persistent Memory System** (#1283) — The single most-requested feature. Users want cross-session persistence of:
   - Project patterns (naming, style, build conventions)
   - User preferences (verbosity, format, tool preferences)
   - Manual & auto-populated notes (user-defined instructions + AI-managed context)
2. **Reliability of long-running sessions** — Implicit in #2582 (stream hang), #2468 (shell timeout), and #2573 (Web UI spinner). The community is pushing for robust session lifecycle management.
3. **Third-party API compatibility** (#2534) — Users increasingly run Kimi CLI against non-Moonshot endpoints (OpenRouter, self-hosted, proxies). Request: clean scoping of Moonshot-only params.
4. **ACP/agent-mode polish** (#2495) — Agent-interop correctness is considered table stakes for production automation.
5. **Windows/legacy console support** (#2532, #2582) — Chinese Windows + GBK codecs remain a persistent edge case that keeps surfacing.

---

## Developer Pain Points

| Pain Point | Evidence | Frequency / Severity |
|---|---|---|
| **Session hangs & timeouts** (stream, shell, Web UI) | #2582, #2468, #2573 | High — most-reported class of bug |
| **Silent data loss** (hooks dropped, empty answers in ACP) | #2564, #2495 | Medium — rare but destructive |
| **Console compatibility on Windows/GBK** | #2532, #2582 | Recurring, consistently ignored |
| **Non-Moonshot API interop** | #2534 | Growing — as usage expands beyond Moonshot |
| **Headless/Web UI instability** | #2573 | Medium — affects automation & remote workflows |

**Cross-cutting theme:** The community is pushing Kimi CLI toward **production-grade reliability** — persistent memory, robust session handling, and clean interop — rather than new features. The long PR queue from a single contributor (`ayaangazali`) suggests the maintainers may be light on review bandwidth, which is a growing bottleneck.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-04

## Today's Highlights
A new patch release (v1.18.12) fixes Azure GPT-5.5+ reasoning failures and addresses desktop composer lag. The community is buzzing around the long-awaited **native session goals (/goal)** feature (123 👍 across 67 comments), while reports of **DeepSeek V4 Flash** issues — both connectivity and output corruption — are surfacing prominently. Desktop UI stability (viewport scrolling, freezes) and MCP management ergonomics remain the top recurring developer friction points.

---

## Releases

### v1.18.12
- **Core Bugfix:** Fixed Azure GPT-5.5+ completion requests failing when reasoning is enabled. (@frederiknsgo)
- **Desktop Bugfixes:** Reduced composer lag when drafts include large pasted images/attachments; project search now matches any known recent project instead of only the first five.

---

## Hot Issues

1. **[#27167 — [FEATURE]: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)** — 67 comments, 123 👍
   The most-voted open feature: persistent, native session goals beyond custom slash commands. Strong community consensus that session lifecycle/goal tracking is a core missing primitive. Users want goals to survive across turns and be inspectable/resumable.

2. **[#39845 — DeepSeek V4 Flash suddenly requires "Enable models hosted in China" for OpenCode Go subscription](https://github.com/anomalyco/opencode/issues/39845)** — 13 comments, 22 👍
   Mid-session breakage: the model stops working without warning, demanding an explicit opt-in for China-hosted models. Users are concerned about silent service changes and lack of transparency in model routing.

3. **[#16077 — [FEATURE] Persistent Session Memory](https://github.com/anomalyco/opencode/issues/16077)** — 12 comments, 3 👍
   Request for loading previous conversation context from local files at startup for continuity between sessions. Closely related to #27167; both point to a broader desire for durable session state.

4. **[#38932 — Pasting a long text in prompt box makes Desktop app hang](https://github.com/anomalyco/opencode/issues/38932)** — 4 comments
   Desktop freezes indefinitely when pasting ~5000+ characters into the prompt box. Likely related to the composer lag fix in v1.18.12; users expect this to be resolved or regress-tested.

5. **[#39207 — GitHub OAuth login fails with "Failed query: update `user`" — email param empty](https://github.com/anomalyco/opencode/issues/39207)** — 4 comments, CLOSED
   OAuth callback writes an empty email, breaking the DB update. Closed as resolved, but the workaround/root cause is not fully documented — worth watching for regressions.

6. **[#39196 — Foreground subagent failure returns no task_id, so the parent cannot resume it](https://github.com/anomalyco/opencode/issues/39196)** — 3 comments, 2 👍
   When a foreground subagent fails, the parent receives a bare error string without a task ID — partial work is stranded and unresumable. Blocks reliable multi-agent workflows; the maintainers acknowledged the branching issue inside the same function.

7. **[#40314 — Unable to connect to the first certificate (MTN Broadband)](https://github.com/anomalyco/opencode/issues/40314)** — 4 comments
   Network/certificate failure on a specific ISP. Users report no retry or clear error path — likely related to the broader "silent connection retry" problems (see #40319, #40330).

8. **[#40286 — RTL/bidi broken for mixed Arabic-script + Latin text in TUI](https://github.com/anomalyco/opencode/issues/40286)** — 2 comments
   Mixed RTL/LTR lines render scrambled in both Windows Terminal and the desktop app. A niche but critical correctness issue for Arabic/Persian/Hebrew users; no workaround yet.

9. **[#40171 — Go service /v1/responses emits incomplete SSE stream, breaking Codex-style clients](https://github.com/anomalyco/opencode/issues/40171)** — 2 comments, 2 👍
   Streaming responses are missing `output_item.added` and `content_part.added` events. This breaks OpenAI Responses-API compatibility for third-party clients — a protocol-compliance bug, not just cosmetics.

10. **[#20600 — Desktop app v1.3.13 randomly scrolls to middle of conversation](https://github.com/anomalyco/opencode/issues/20600)** — 4 comments, 2 👍
    Random viewport jumps during chat. Recurring complaint alongside #29094 (re-snap during LLM responses); the desktop scroll model needs a proper rework.

---

## Key PR Progress

1. **[#40359 — fix(core): execute tools renamed by context hooks](https://github.com/anomalyco/opencode/pull/40359)** — Open
   Retains request-local registration identity when context hooks rename tool definitions, translating renamed calls back to canonical names. Important for hook-heavy plugin ecosystems.

2. **[#40356 — fix(app): move markdown parsing to worker](https://github.com/anomalyco/opencode/pull/40356)** — Open
   Upgrades Marked to 18.0.7 and moves parsing/KaTeX/Shiki to the session worker — should reduce renderer-thread jank in desktop and web.

3. **[#40358 — [contributor] fix(opencode): default xAI OAuth to device flow](https://github.com/anomalyco/opencode/pull/40358)** — Open
   Switches SuperGrok login to xAI device-code authorization with loopback OAuth as fallback. Simplifies CLI/headless auth flows.

4. **[#40357 — [needs:compliance] fix(session): cap free usage retry delay](https://github.com/anomalyco/opencode/pull/40357)** — Open
   Caps FreeUsageLimitError retry hints at the documented five-hour window. Fixes the 61722s free-tier retry-after case (#32391) — a UX win for free-tier users.

5. **[#40125 — feat(opencode): Allow per-MCP-server trust configuration](https://github.com/anomalyco/opencode/pull/40125)** — Open
   Closes five related issues (#40111, #23506, #14696, #26862, #1694). Adds granular trust/permission controls per MCP server — a major ask for enterprise/security-conscious users.

6. **[#40351 — [needs:compliance] feat(tui): localize TUI interface to Simplified Chinese](https://github.com/anomalyco/opencode/pull/40351)** — Open
   Full TUI localization to Simplified Chinese (dialogs, sidebar, palette, permission prompts). Significant for the growing Chinese-speaking community.

7. **[#40268 — fix(session): retry top-level stream request timeouts](https://github.com/anomalyco/opencode/pull/40268)** — Open
   Handles OpenAI Responses-compatible providers that return HTTP 200 then emit an SSE error event (e.g. `{"type":"error"}`). Closes #39221 — key for compatibility with non-standard providers.

8. **[#40198 — fix(opencode): match canonically equivalent Unicode in patches](https://github.com/anomalyco/opencode/pull/40198)** — Open
   Adds canonical Unicode-equivalence matching to `seekSequence()`. Fixes patch verification failures when files contain canonically equivalent but byte-different Unicode (closes #31651).

9. **[#40188 — feat(plugin): add request-scoped chat.model hook](https://github.com/anomalyco/opencode/pull/40188)** — Open
   Adds a `chat.model` plugin hook that fires before provider/model/auth resolution, enabling per-request model overrides. Closes #18793 and partially addresses #24006 — powerful for routing and A/B testing.

10. **[#37054 — feat(app): add full session option to web fork dialog](https://github.com/anomalyco/opencode/pull/37054)** — Open
    Web fork dialog only supports forking up to a selected message; this adds the ability to fork the entire conversation. Closes #37016.

---

## Feature Request Trends

- **Native session state & goals** (most-voted): `/goal` (#27167, 123 👍) and persistent session memory (#16077) show strong demand for structured, durable session lifecycle management — beyond ad-hoc slash commands and context files.
- **Desktop GUI for MCP & skills**: Multiple requests (#31399, #40335, #40341) ask for managing MCP servers and attaching arbitrary files (PDFs, Office docs) from the desktop UI — the CLI-only configuration surface is a growing pain.
- **Provider & auth improvements**: Device-flow OAuth (xAI PR), China-hosted model opt-in transparency (#39845), and per-MCP trust (PR #40125) signal users want finer-grained, more transparent control over model routing and credentials.
- **TUI/desktop quality-of-life**: RTL/bidi support (#40286), scroll stability (#20600, #29094), and localization (PR #40351) — the community wants the terminal experience polished for international and long-session users.

---

## Developer Pain Points

- **Silent connection/retry behavior**: Repeated reports of `opencode run` hanging indefinitely with no error, retry notice, or timeout when providers are unreachable (#40314, #40319, #40330). Users expect bounded retries and a clear failure path, especially in non-interactive/CI mode.
- **Desktop instability with large inputs**: Pasting long text hangs the app (#38932), and the viewport scrolls/jumps unpredictably (#20600, #29094). The recent composer-lag fix and worker-offload PR are directly aimed at these, but users remain skeptical until proven.
- **Model-specific breakages feel unannounced**: DeepSeek V4 Flash corruption with repeated `Q` characters (#40321) and the sudden China-hosted requirement (#39845) came without warning — users want better provider-side change detection and clearer opt-in/opt-out flows.
- **Subagent/task resumption gaps**: Foreground subagent failures return bare error strings without task IDs (#39196), making it impossible to resume partial work — a reliability gap for agentic multi-step workflows.
- **Version mismatch between desktop and CLI**: Updating the desktop app doesn’t update the globally installed CLI (#35122), causing session sync and feature parity issues. Users expect a single coherent update path.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-04

## Today's Highlights
This week's digest centers on Windows/WSL robustness as the community actively reports path‑handling bugs, login hangs, and process‑tree failures — a clear signal that Windows support is a top priority. In parallel, substantial work landed on fixing JSON streaming performance (quadratic output) and compaction race conditions, alongside a wave of SDK‑level contributions adding new providers, server‑side fallbacks, and generic sampling parameters. The project is also consolidating its session architecture (Harness v2, server backends, transport‑specific auth) while the community pushes for better non‑OpenAI provider support.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **[#6187 – Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)** — 20 comments. The device registers successfully but the WSL client never detects completion. Major blocker for WSL users on Copilot; high community visibility.

2. **[#6768 – Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)** — 17 comments, 18 👍. Compaction fails with `421 Misdirected Request` on OpenAI and different errors on Anthropic models under Copilot Enterprise. Enterprise licensing seems unsupported for compaction flows.

3. **[#7064 – WSL absolute windows paths are mishandled](https://github.com/earendil-works/pi/issues/7064)** — 11 comments. The read/write/edit tools fail on WSL2 because of incorrect path handling, forcing fallback to shell‑based workarounds. Aligns with the broader Windows pain‑point trend.

4. **[#7161 – anthropic-messages never sends x-client-request-id](https://github.com/earendil-works/pi/issues/7161)** — 9 comments. Unlike all OpenAI paths, Anthropic requests lack a client request ID, breaking session affinity in gateways/proxies that route between multiple upstream accounts.

5. **[#7020 – Sometimes Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)** — 9 comments. Long‑running "coordinator" sessions hit post‑compaction stalls. Compaction reliability remains a recurring pain point.

6. **[#7547 – How do you use Pi on Windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)** — 6 comments. Maintainer petrroll opened a community call for Windows usage patterns and bugs — an explicit sign that Windows support is being prioritized.

7. **[#7130 – Backspace deletes 2 chars in Kitty](https://github.com/earendil-works/pi/issues/7130)** — 5 comments. Kitty protocol release events not filtered; terminal‑specific input issue that impacts a non‑trivial subset of users.

8. **[#7399 – truncateToWidth() leaves dangling OSC 8 hyperlink](https://github.com/earendil-works/pi/issues/7399)** — 5 comments. Truncation inside a hyperlink leaves an unclosed OSC 8 sequence, corrupting terminal rendering state.

9. **[#7540 – Resume after context-limited length stops](https://github.com/earendil-works/pi/issues/7540)** — Length stops treated as context overflow when usage is within 1% of the context window; fixes a common "stuck session" scenario.

10. **[#7560 – xai Grok 4.5 does not show up in the models list for GitHub Copilot Business subscription](https://github.com/earendil-works/pi/issues/7560)** — New model unavailable through the Copilot provider; model list synchronization issue.

## Key PR Progress
1. **[#7503 – feat(agent): implement harness v2 for in-memory storage](https://github.com/earendil-works/pi/pull/7503)** — Intro to the Harness v2 session foundation: backend‑neutral `SessionStorage`/`SessionRepo`, plus an in‑memory implementation including entries and lanes. Lays groundwork for a major architecture shift.

2. **[#7451 – fix(coding-agent): bound model catalog refreshes](https://github.com/earendil-works/pi/pull/7451)** — Closes five issues around unbounded catalog refresh storms (#7027, #7113, #7153, #7418, #7443). Introduces cancellation and queuing to tame the refresh logic.

3. **[#7339 – DRAFT: add openai background mode responses](https://github.com/earendil-works/pi/pull/7339)** — Initial implementation of OpenAI's `background: true` responses API mode. Design feedback requested; signals interest in async/background execution.

4. **[#7571 – feat(ai): add built-in Cortecs provider support](https://github.com/earendil-works/pi/pull/7571)** — European AI router/provider (OpenRouter‑style) added as a first‑class provider, backed by models.dev integration.

5. **[#7569 – fix(coding-agent): normalize find root results](https://github.com/earendil-works/pi/pull/7569)** — Fixes `find` path relativization by using `.relative()` and proper handling of path selectors. Directly addresses the Windows drive‑root path corruption issue (#6104).

6. **[#7568 – Add support for generic sampling parameters in models.json](https://github.com/earendil-works/pi/pull/7568)** — Enables engine‑specific sampling params (dry, xtc, repetition_penalty) for llama.cpp/vLLM via a generic `sampling` field — much needed for self‑hosted users.

7. **[#7562 – feat(ai): support Anthropic server-side fallbacks](https://github.com/earendil-works/pi/pull/7562)** — Opt‑in Anthropic server‑side fallback payload and beta support, with serving‑model reporting on fallback transitions.

8. **[#7548 – fix(coding-agent): sandbox issue analysis tools](https://github.com/earendil-works/pi/pull/7548)** — Security hardening: takes an immutable issue snapshot before starting `pi -p --approve` so the model no longer fetches from the network during analysis.

9. **[#7394 – fix(coding-agent): make JSON streaming output linear](https://github.com/earendil-works/pi/pull/7394)** — Switches to delta‑only `message_update` records, preserves snapshots for internal handlers, and applies stdout backpressure. Fixes the quadratic JSON output (#7395).

10. **[#7551 – Make session authentication transport-specific](https://github.com/earendil-works/pi/pull/7551)** — Removes bearer auth from the protocol layer, moving auth to the transport (Unix socket permissions). A security‑and‑simplicity improvement for local session APIs.

## Feature Request Trends
- **Windows/WSL first-class support** — Multiple path‑handling bugs (#7064, #6817, #6104), process‑tree spawn failures (#6596), and the maintainer‑run call for Windows feedback (#7547) all point to Windows parity as the most demanded area.
- **Better provider interoperability** — x-client-request-id for Anthropic gateways (#7161), opaque API keys for custom Codex providers (#7546), and Copilot Enterprise compatibility (#6768) show demand for flexible auth and proxy support.
- **Compaction/context controls** — Configurable thinking level/model for compaction (#7553), post‑compaction continuation fixes (#7020, #7540), and manual‑compaction races (#7253) are actively discussed, with multiple PRs already in flight.
- **Terminal emulator correctness** — OSC 8 hyperlink balance (#7399), batched color scheme reports (#7550), and Kitty protocol issues (#7130) reflect a community focused on pixel‑perfect terminal behavior.
- **Self‑hosted model support** — Generic sampling parameters (#7568) and server‑side fallbacks (#7562) point to growing use of local/private model backends.

## Developer Pain Points
1. **Windows/PowerShell integration remains the weakest link** — Forked find paths, taskkill ENOENT on Node 24, and WSL login hangs indicate the Windows story is still immature relative to Unix.
2. **Compaction is still unreliable** — Multiple open issues and active PRs (e.g., #7370, #7540) suggest compaction logic has race conditions and inconsistent behavior, particularly in long sessions.
3. **JSON mode's quadratic serialization** — The cumulative assistant‑state serialization bug (#7395) was a significant performance issue for scripted/automated users, now fixed but worth watching.
4. **SDK dependency pinning creates duplication** — `@earendil-works/pi-ai` exact version pins force duplicate copies in consumers (#7564), which is an ecosystem‑level annoyance.
5. **Provider quirks are numerous** — Model list sync issues (#7560), provider prefix drops (#7030), and gemini tool‑call ID stripping (#7047) highlight the cost of maintaining many first‑party integrations with subtle differences.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-04

## Today's Highlights

The v0.21.5 release ships a macOS migration bridge from Electron to the new Tauri shell, alongside detailed tool-call outcome tracking. The Web Shell has been promoted to a release-ready desktop app with native lifecycle management and automatic updates. Meanwhile, the community is actively reporting reliability issues around cancellation semantics, session transcript integrity, and MCP metadata handling, with a notable cluster of 11 new bug reports filed by a single contributor.

## Releases

- **v0.21.5** — Adds an opt-in one-time update bridge for macOS users to migrate from the Electron desktop app to the new Tauri shell. Also introduces detailed execution-specific outcome tracking for tool calls. ([PR #8392](https://github.com/QwenLM/qwen-code/pull/8392))
- **v0.21.4-nightly.20260804.d6f55a1c9** — Nightly release featuring the Electron→Tauri desktop bridge and a web-shell table dialog fix.
- **v0.21.4** — Web Shell is now release-ready as a desktop app with native lifecycle management, single-instance behavior, and automatic updates. ([PR #8132](https://github.com/QwenLM/qwen-code/pull/8132)) — Includes graceful handling of oversized turns in Web Shell history pagination.

## Hot Issues

1. **[#8102 — Deterministic tool-execution boundaries for a trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102)** (P3, feature-request, 13 comments) — An ambitious proposal to keep the LLM outside the trust boundary while making the runtime deterministically constrain, authorize, and evaluate model actions. It's the most-discussed issue this week, signaling strong community interest in agentic safety.

2. **[#8316 — Prompt not restored on cancel (Ctrl+C)](https://github.com/QwenLM/qwen-code/issues/8316)** (bug, 7 comments) — Users lose their in-progress prompt text when cancelling an agent run, forcing them to retype everything. A high-frequency UX pain point that resonates with daily CLI users.

3. **[#8382 — Duplicate provider tool call ID errors](https://github.com/QwenLM/qwen-code/issues/8382)** (P2, bug, 6 comments) — Recurring "Duplicate provider tool call id" failures break session flow. The community is seeking a fix for what appears to be an ID-management race condition in tool execution.

4. **[#8470 — Model name truncation on mobile with Alibaba token plan](https://github.com/QwenLM/qwen-code/issues/8470)** (P2, UI bug, 5 comments) — Long provider prefixes like `[Modelstuidio token plan]` truncate model names in mobile clients, making it impossible to tell which model is selected. A practical mobile usability regression.

5. **[#8281 — Email channel with IMAP/SMTP support](https://github.com/QwenLM/qwen-code/issues/8281)** (P3, feature-request, 5 comments) — Proposal for an officially supported email channel so users can interact with a Qwen Code agent through a dedicated mailbox. Part of the growing roadmap/background-automation direction.

6. **[#8306 — Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)** (P2, enhancement, 5 comments) — A long-running effort to make tool outputs more robust. Phase 1 is complete; the community is tracking follow-up hardening work.

7. **[#8432 — Bailian Personal Token Plan models out of sync](https://github.com/QwenLM/qwen-code/issues/8432)** (P2, bug, 4 comments) — The built-in model list for Alibaba ModelStudio Token Plan is stale, and image/video generation reportedly fails. Integration drift between Qwen Code and upstream provider catalogs.

8. **[#8330 — `@` completion tab switching inaccessible in Warp](https://github.com/QwenLM/qwen-code/issues/8330)** (P2, UI bug, 4 comments) — Ctrl+Tab (used for completion categories) conflicts with Warp's terminal tab switching, making the picker effectively unusable in that popular terminal. A keybinding-conflict pattern likely present in other terminals too.

9. **[#8491–8495 — Five reliability bugs from ryan-mt](https://github.com/QwenLM/qwen-code/issues/8491)** (P2 bugs, 3 comments each) — A batch of closely related findings: signal-terminated shell commands can report success; MCP metadata hot reload leaves stale session registrations; cancelled file tools can still mutate files; Web Shell artifact actions can target the wrong workspace; and stream-json interrupts kill session controls. These point to deeper issues in cancellation and session-lifetime handling.

10. **[#8319 — Agent thinking panel rendering instability](https://github.com/QwenLM/qwen-code/issues/8319)** (P2, UI bug, 3 comments) — The dynamic thinking area in the terminal UI moves up and down continuously, making reading difficult. A terminal-rendering regression that affects focused review of agent reasoning.

## Key PR Progress

1. **[#8392 — Bridge Electron users to Tauri updates](https://github.com/QwenLM/qwen-code/pull/8392)** — Opt-in one-time migration bridge for macOS users to move from Electron to the new Tauri shell. Merged into v0.21.5.

2. **[#8132 — Web Shell release-ready desktop app](https://github.com/QwenLM/qwen-code/pull/8132)** — Promotes Web Shell to production desktop status with native lifecycle management, single-instance behavior, and automatic updates. Landed in v0.21.4.

3. **[#8440 — Support group pairing for channels](https://github.com/QwenLM/qwen-code/pull/8440)** — Adds `groupPolicy: "pairing"` so a group chat is approved once by stable chat ID and usable by all members, with audit context and separate approvals.

4. **[#8388 — `review capture-tui`: pixel evidence for rendering claims](https://github.com/QwenLM/qwen-code/pull/8388)** — The verifier can now drive code under review in a private tmux server and capture the pane exactly as rendered — turning rendering claims into pixel proof.

5. **[#8419 — Reuse prompt cache for multimodal compression](https://github.com/QwenLM/qwen-code/pull/8419)** — Media-bearing histories now attempt cache-sharing requests before falling back to dedicated summarizers, reducing cost and latency for image-inclusive sessions.

6. **[#8472 — Support Qwen 3.8 reasoning effort](https://github.com/QwenLM/qwen-code/pull/8472)** — Passes the five `/effort` values through as flat `reasoning_effort` for `qwen3.8-max` and preview; DashScope handles alias mapping.

7. **[#8464 — Clear tool results to a low watermark for prompt-cache preservation](https://github.com/QwenLM/qwen-code/pull/8464)** — Instead of stopping at the threshold, the client clears oldest tool results down to half the threshold, preserving prompt cache and reducing recomputation.

8. **[#8481 — Prefer wl-copy on Wayland](https://github.com/QwenLM/qwen-code/pull/8481)** — Linux Wayland sessions now use native `wl-copy` for clipboard, with fallback to xclip/xsel/OSC 52.

9. **[#8430 — Stop Goal retries after evidence catalog exhaustion](https://github.com/QwenLM/qwen-code/pull/8430)** — Prevents endless synthetic continuation turns; completion proposals now transition to `usage_limited` when the bounded evidence catalog is exhausted.

10. **[#8502 — Route trusted fork PRs to ECS pool](https://github.com/QwenLM/qwen-code/pull/8502)** — Fork PRs from write-access authors now run Linux CI on the self-hosted ECS pool, matching in-repo PRs and reducing reliance on GitHub-hosted runners.

## Feature Request Trends

- **Trustworthy agent runtime** (#8102) — Deterministic tool-execution boundaries, authorization, and observability are the top architectural ask, reflecting broader industry concerns about agent safety.
- **Multi-channel agent interfaces** (#8281, #8440) — Beyond terminals and desktop, the community wants email channels and richer group-chat pairing semantics, pointing toward a "background agent" roadmap.
- **Prompt-cache economics** (#8452, #8419, #8464) — Multiple requests and fixes around preserving prompt cache across compactions and multimodal histories show performance and cost are front-of-mind.
- **Configurable agent internals** (#8168) — Users want knobs for internal agents (e.g., memory dream-agent max turns), not just feature toggles.
- **Terminal ecosystem compatibility** (#8330, #8385, #8317) — Keybinding conflicts, flickering in ConEmu/Cmder, and broken copy shortcuts reflect a broader push for terminal-agnostic behavior.

## Developer Pain Points

- **Cancellation is fragile**: Prompt text not restored on cancel (#8316), cancelled file tools still mutating files (#8493), aborts misclassified via `isAbortError` (#8398), and post-abort session transcripts not persisted (#8356) all indicate cancellation semantics need systemic hardening.
- **Session integrity after interrupts**: `APIUserAbortError` leaves sessions in inconsistent states (no transcript writes, unusable stream-json controls) — a serious reliability gap for automation users.
- **MCP metadata hot-reload gaps**: Changes to trust/tool-loading fields are not reapplied when transport is unchanged (#8492); SDK-embedded MCP tools fail on resumed sessions (#8433) — MCP lifecycle management remains fragile.
- **Terminal-specific regressions**: Warp keybinding conflicts (#8330), ConEmu/Cmder flicker (#8385), broken Ctrl+Shift+C in some terminals (#8317), and unstable thinking-panel rendering (#8319) frustrate daily CLI users.
- **Provider catalog drift**: Bailian/ModelStudio model lists are out of sync (#8432), and long provider prefixes truncate model names on mobile (#8470) — integration maintenance is lagging upstream changes.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-04

---

## 1. Today's Highlights

The DeepSeek TUI community is in the midst of significant architectural evolution as the project (increasingly branded "CodeWhale" in its issue tracker) pushes toward the **v0.9.4 release train** — a 77-commit integration branch (#5135) that consolidates runtime API expansion, provider additions, and lint cleanup. The v0.9.3 roadmap continues to mature in parallel, with issues detailing fleet model loadout automation, CLI/TUI parity, and permission profiles. Community contributions span internationalization (Chinese Windows beginner guide #5229), bug fixes for OpenHarmony linker behavior (#5095), and custom provider support (Minimax China routes #4686). The most striking signal is the **30-PR single-day stack** on the v0.9.4 train, indicating a rapid pre-release hardening sprint.

---

## 2. Releases

No new releases in the last 24 hours. The v0.9.4 release train is in active preparation via PR #5135 (77 commits ahead of `main`), superseding the earlier candidate #5044.

---

## 3. Hot Issues

### 1. [Agent Client Protocol Registry Listing](https://github.com/Hmbown/CodeWhale/issues/3192) — *13 comments*
> *"Being listed here makes it much easier for Zed to install and use"*

The community strongly supports registration in the agentclientprotocol/registry, which would enable Zed and other ACP-native editors to discover and install DeepSeek TUI directly. High engagement signals this is a key distribution channel the maintainers should prioritize.

### 2. [v0.9.3: Fleet Model Classes, Loadout Auto, Semantic Route Roles](https://github.com/Hmbown/CodeWhale/issues/3205) — *11 comments*
Maintainer-authored umbrella issue defining the shared model/loadout selector for TUI, CLI, exec, subagents, and Fleet workers. The "Fleet loadout auto" mode is the centerpiece — resolving entire compute loadouts per role rather than individual model strings. This is the **core architecture issue** for the next major version.

### 3. [OpenCode Go/Zen Provider Support](https://github.com/Hmbown/CodeWhale/issues/1481) — *10 comments, 1 👍*
Request to add OpenCode Go/Zen as a DeepSeek provider (offers DeepSeek-V4 very cheaply). Community enthusiasm suggests price-sensitive users are seeking alternatives to official APIs.

### 4. [Proposed 'stop' Command](https://github.com/Hmbown/CodeWhale/issues/4959) — *7 comments*
Critical safety feature: in YOLO mode or autonomous workflows, text commands like `+ stop` are ignored by the model. Proposed `/stop` command and runtime STOP-word intercept for mechanical tool-call blocking. **This addresses a fundamental control concern for autonomous agent usage.**

### 5. [Chinese Translation of "Constitution"](https://github.com/Hmbown/CodeWhale/issues/4949) — *7 comments*
Linguistic/cultural discussion on whether "Constitution" should translate to "宪法" (potentially politically sensitive in Chinese context) or "协作准则" (collaboration principles). Started by a PR author who reverted to "宪法," sparking a native-speaker deliberation — an important localization decision.

### 6. [v0.9.3: CLI/TUI Parity for Subagent and Runtime Control](https://github.com/Hmbown/CodeWhale/issues/4022) — *7 comments*
The TUI sidebar currently hosts subagent controls (status, expand/collapse, cancel) that are inaccessible to non-TUI clients. Must be exposed via CLI/runtime API for future cloud or remote workbench scenarios. Architectural foresight for multi-surface clients.

### 7. [No Cross-Session Memory](https://github.com/Hmbown/CodeWhale/issues/2492) — *5 comments*
User reports the tool forgets prior session context on restart — memory writes aren't persisted or re-read automatically. A recurring usability gap that limits long-running collaborative workflows.

### 8. [Universal PreToolUse/PostToolUse Hook Layer for Cancel/Pause/Resume](https://github.com/Hmbown/CodeWhale/issues/1917) — *5 comments*
Proposes a unifying hook-based lifecycle layer across all action types, following analysis of slash-command productization. The architectural pattern would enable consistent Cancel (with rollback), Pause, and Resume semantics for any tool call.

### 9. [Dead-Code Sweep: 464 #[allow(dead_code)] Attributes](https://github.com/Hmbown/CodeWhale/issues/4785) — *4 comments*
Maintainer-identified hygiene crisis: 464 `#[allow(dead_code)]` attributes across 143 files mask compiler drift. This is a significant code-health signal affecting maintainability of the 771k-line Rust codebase.

### 10. [OpenAI Codex/ChatGPT OAuth Route Verification](https://github.com/Hmbown/CodeWhale/issues/2984) — *5 comments*
End-to-end verification of the OpenAI OAuth route to determine if it can move from preview to supported status. Part of the broader "US-first infrastructure lane" effort alongside #1990.

---

## 4. Key PR Progress

### 1. [Codewhale v0.9.4 Release Train](https://github.com/Hmbown/CodeWhale/pull/5135) — *OPEN*
The 77-commit integration branch containing the entire 2026-08-01 source candidate plus 18 train commits. This is the **single most important PR** — supersedes #5044 and will merge all v0.9.4 features. Includes 30-PR stack from a single day's hardening sprint.

### 2. [Minimax China / Token Plan Provider Routes](https://github.com/Hmbown/CodeWhale/pull/4686) — *CLOSED*
Adds four provider identifiers targeting api.minimaxi.com, including OpenAI Chat Completions and Anthropic Messages dialects. Expands regional provider coverage for Chinese users.

### 3. [Surface Reasoning on Official Chat Routes](https://github.com/Hmbown/CodeWhale/pull/5233) — *OPEN*
Classifies `reasoning_content` as a dedicated Thinking stream on verified Alibaba Model Studio routes. Shapes thinking controls (`enable_thinking`, `preserve_thinking`) by model capability, including DeepSeek-V4 support.

### 4. [Clear Deny-Level Clippy Lints Blocking the Train](https://github.com/Hmbown/CodeWhale/pull/5231) — *CLOSED*
Fixed 30 deny-level clippy lints (16 unique sites) across the TUI binary and test targets — the CI gate that was blocking the v0.9.4 train. Includes 7 `collapsible_if` refactors and other code-quality improvements.

### 5. [Expose Persistent Goal-Loop State and Completion Controls](https://github.com/Hmbown/CodeWhale/pull/5133) — *OPEN* — *Author: Copilot*
Adds `GET /v1/threads/{id}/goal` and lifecycle endpoints to the runtime HTTP API, enabling managed clients to read active-goal state and drive lifecycle transitions. **Copilot-authored** — an indicator of AI-assisted development workflows in this project.

### 6. [Verifier Receipts and Evidence Beyond Aggregate Counter](https://github.com/Hmbown/CodeWhale/pull/5132) — *OPEN* — *Author: Copilot*
Three new read-only endpoints under `/v1/fleet/runs/{run_id}/` exposing durable task receipts, failure identification, and retry guidance. Required for managed Fleet clients to debug verification failures.

### 7. [Bounded MCP Server Configuration and Lifecycle Management](https://github.com/Hmbown/CodeWhale/pull/5130) — *OPEN* — *Author: Copilot*
Adds CRUD routes for MCP servers (`POST /v1/apps/mcp/servers`) so clients no longer need direct TOML/JSON editing. A significant usability improvement for external integrations.

### 8. [Runtime API Memory Endpoints](https://github.com/Hmbown/CodeWhale/pull/5131) — *OPEN* — *Author: Copilot*
New `/v1/memory` surface with bounded inspection and lifecycle controls — gated behind the existing `require_runtime_token` middleware. Addresses the cross-session memory gap (#2492) at the API level.

### 9. [Skill Lifecycle Endpoints](https://github.com/Hmbown/CodeWhale/pull/5129) — *OPEN* — *Author: Copilot*
Adds install, update, uninstall, trust, and audit routes for skills — previously only discovery and enable/disable were available. Managed desktop/web clients can now drive the full skill lifecycle over HTTP.

### 10. [Pin ratatui to 0.30.0](https://github.com/Hmbown/CodeWhale/pull/5192) — *OPEN*
Critical TUI bug fix: ratatui-core 0.1.1+ makes `Terminal::clear()` issue a blocking cursor position report that races the event loop's crossterm lock. Pinning to `=0.30.0` prevents **startup freezes and event-loop instability**.

---

## 5. Feature Request Trends

1. **Runtime HTTP API Expansion (Dominant Trend)** — Heavy push to expose goal state, MCP config, memory, skills, and verifier receipts as first-class HTTP endpoints (PRs #5130-#5133, #5129). The v0.9.4 train is clearly repositioning CodeWhale as a **multi-client runtime**, not just a TUI.

2. **Provider Ecosystem Growth** — Persistent demand for alternative/cheaper DeepSeek providers: OpenCode Go/Zen (#1481), Minimax China routes (#4686), OpenAI Codex/ChatGPT OAuth (#2984). Users seek cost-effective access to DeepSeek-V4-tier models.

3. **Agent Control and Safety** — The `/stop` command (#4959) and universal PreToolUse/PostToolUse hook layer (#1917) reflect growing concern about **autonomous agent safety** — users need reliable mechanical interrupt mechanisms beyond natural-language model prompt adherence.

4. **Configuration Discovery and Persistence** — Issues like #3303 (editable config keys from TUI) and #2492 (cross-session memory) show users want configuration and state to be **discoverable, editable, and persistent** — not buried in TOML files.

5. **Internationalization and Localization** — Chinese-language issues remain prominent (Constitution translation #4949, Chinese input method support #2323). The Windows zh-CN beginner guide (#5229) and zh-Hant locale parity work (#5227) indicate active I18n investment.

6. **Click-to-Open File Previews** — #2342 requests clickable file paths in output for direct preview — representing the broader trend of **TUI UX polish toward IDE-like interactions**.

---

## 6. Developer Pain Points

1. **Codebase Hygiene and Drift** — 464 `#[allow(dead_code)]` attributes masking real drift (#4785), plus 30 deny-level clippy lints (#5231) blocking the release train. The 18-package, 771k-line structure concentrates ~87% of code in `codewhale-tui` (#3306), creating parallel runtime paths and duplication.

2. **Windows Platform Pain** — Multiple issues: garbled rendering when launched as raw .exe instead of Windows Terminal (#1854), Chinese input method conflicts displaying pinyin in wrong widgets (#2323), PowerShell/cmd command-style mismatches (#1754), and OpenHarmony linker argument quoting (#5095). Windows users are underserved.

3. **Agent Reliability in Autonomous Mode** — The model ignores "stop" commands during deep workflows (#4959); edit mistakes compound for smaller models (#3364); follow-up delivery promises exceed actual implementation (#5219). **Biggest user trust concern.**

4. **OAuth 2.1 Support Gap** — MCP servers increasingly require OAuth 2.1 (e.g., tinyfish search engine), but DeepSeek TUI only supports API-key auth (#1409). Production users are blocked from modern MCP servers.

5. **Memory and Context Persistence** — The tool forgets prior sessions, doesn't auto-read persisted memory on restart, and compaction lacks a structured survival contract (#2492, #4394). Long-running workflows are fragile.

6. **Subagent Control Surfaces Locked in TUI** — CLI/runtime parity gaps (#4022) mean subagent state, cancellation, and expansion are unavailable outside interactive TUI sessions — blocking remote or cloud usage scenarios.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*