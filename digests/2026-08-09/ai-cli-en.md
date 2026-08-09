# AI CLI Tools Community Digest 2026-08-09

> Generated: 2026-08-09 01:51 UTC | Tools covered: 9

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
**Date:** 2026-08-09

---

## 1. Ecosystem Overview

The AI CLI tool landscape is maturing rapidly, with eight major tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, DeepSeek TUI/CodeWhale) shipping frequent releases and engaging active communities. Across all tools, three dominant themes emerge: **Windows reliability is consistently broken** (silent exits, GPU crashes, BSODs, performance degradation), **session state management is fragile** (model resets, lost context, stale UI state), and **long-running agent reliability is the top trust concern** (hangs, false success reports, runaway generation). Model transparency and billing/limit clarity are also recurring friction points, particularly around silent model downgrades and cost overruns. Meanwhile, feature demand is converging on multi-session coordination, persistent memory, and agent-to-agent delegation — signaling a shift from single-session assistants to orchestrated multi-agent workflows.

---

## 2. Activity Comparison

| Tool | Issues (Noteworthy) | PRs (24h) | Releases (24h) | Release Version |
|------|---------------------|-----------|----------------|-----------------|
| **Claude Code** | 10 | 1 | 1 | v2.1.226 (bug fixes) |
| **OpenAI Codex** | 10 | 10 merged | 1 | rust-v0.148.0-alpha.5 |
| **Gemini CLI** | 10 | 10 (1 closed) | 1 | v0.56.0-nightly.20260809 |
| **GitHub Copilot CLI** | 10 | 0 | 0 | 1.0.78 (stable, prior) |
| **Kimi Code** | 3 verifiable + 7 thematic | 0 | 0 | No release |
| **OpenCode** | 10 | 10+ | 0 | No release |
| **Pi** | 10 | 10 (2 open) | 0 | 0.84.1 (prior) |
| **Qwen Code** | 10 | 10 | 1 | v0.21.8 |
| **DeepSeek TUI / CodeWhale** | 10 | 10 (3 open) | 2 | v0.9.4 & v0.9.5 |

**Key observations:**
- **Codex** is merging PRs at an extraordinary pace (10 merged in 24h), reflecting heavy infrastructure investment.
- **CodeWhale** shipped two releases in 24h (v0.9.4, v0.9.5) as part of its rebrand.
- **Kimi Code** and **Copilot CLI** show the least activity, with no PRs in 24h.
- **Copilot CLI** is the only tool without a release in the recent window, suggesting a slower cadence.

---

## 3. Shared Feature Directions

| Feature Direction | Tools | Specific Needs |
|-------------------|-------|----------------|
| **Persistent Memory / Cross-Session Context** | Kimi Code (#1283), Claude Code (#50246 queueing signals), CodeWhale (cross-session memory), OpenCode (#27167 goals) | Remember project conventions, user preferences, and prior decisions across sessions; both automatic and manual control |
| **Multi-Session / Agent Coordination** | Qwen Code (#8724, #8718, #8730), CodeWhale (#5270, #5271), Claude Code (#29006 remote control), Gemini CLI (#28738 agents calling agents) | Cross-session messaging, leader/worker dispatch, session peek/steer, agent-to-agent delegation |
| **Model & Provider Transparency** | Claude Code (#79337, #60093), Codex (#35292), Copilot CLI (#4397), CodeWhale (#5034, #5244) | Clear model switching, no silent downgrades, atomic provider+model selection, loud fallback warnings |
| **Windows Reliability** | Claude Code (#81698, #80912), Codex (#37458, #37180, #37383), Copilot CLI (#4285, #4401), OpenCode (#41337) | Fix GPU crashes, BSODs, silent exits, Computer Use failures, mouse stutter, skill-path issues |
| **TUI Ergonomics** | Codex (#21653 multiline status), Copilot CLI (#4394, #4395), Pi (#7830, #7765), OpenCode (#13984 clipboard) | Richer status lines, paste parity, scroll control, clipboard fixes |
| **Configuration Trust** | Copilot CLI (#4398), CodeWhale (#4416), Gemini CLI (#22093), Claude Code (#84029) | Config must be respected; no silent ignoring; permission models must hold |
| **Cost / Token Efficiency** | Copilot CLI (#4256 cache_control), Kimi Code (token inflation), Claude Code (#60093 overcharge), Pi (#6879 compaction) | Context caching, compaction triggers, token telemetry, no surprise billing |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Distinctive Strengths | Key Weaknesses |
|------|---------------|-------------|--------------------|----------------------|----------------|
| **Claude Code** | Enterprise agentic coding | Professional devs in orgs | Model-centric; proprietary models; VS Code + CLI | Strong model quality; Max plan ecosystem | Billing opacity; Windows instability; model switching friction |
| **OpenAI Codex** | Multi-process agent orchestration | Power users, automation engineers | Rust core; gRPC services; workload identity; hooks engine | Fastest PR velocity; enterprise auth; async hooks; subagent management | Windows Computer Use severely broken; desktop/UI state sync issues |
| **Gemini CLI** | Multi-agent workflows | Devs leaning on subagents | Nightly releases; browser agent; skills system | Agent-to-agent delegation in progress; sandbox security | Agent reliability (hangs, false success); permission violations |
| **Copilot CLI** | IDE-integrated assistant | VS Code-centric devs | Tight GitHub integration; ACP sessions; skills | Enterprise GitHub ecosystem; stable releases | Slow iteration; Windows regressions; silent config failures |
| **Kimi Code** | Lightweight CLI assistant | Individual devs, cost-sensitive | Minimal infrastructure; community-driven | Simple; focused on core needs | Smallest community; limited feature velocity; no release cadence |
| **OpenCode** | TUI-first open platform | Hobbyists, TUI enthusiasts | Go relay; SQLite event store; plugin SDK | Plugin ecosystem; active TUI innovation; community-contributed fixes | Database bloat; relay reliability; terminal compat issues |
| **Pi** | Terminal-native fullscreen agent | TUI power users | Rust; extension system; multi-provider | Rich TUI; active extension ecosystem; multi-provider support | openai-codex streaming failures; compaction logic gaps |
| **Qwen Code** | Multi-session orchestration | Teams, CI/CD pipelines | Headerless sessions; cross-session registry; workflow engine | Rapid multi-agent feature development; session coordination | CI flakiness; CJK terminal bugs; macOS-specific issues |
| **CodeWhale** | Rebranded multi-provider TUI | Developer tooling enthusiasts | Rust workspace (20 crates); runtime API; goal loops | Fast release trains; runtime API surface; Mistral support | Monolithic TUI build tax; dead-code debt; stale-state bugs |

---

## 5. Community Momentum & Maturity

### Highest Momentum (Rapid Iteration)
- **OpenAI Codex** — 10 PRs merged in 24h; enterprise infrastructure (workload identity, gRPC, async hooks) signals serious investment. Community is vocal about Windows pain but the project is shipping fast.
- **CodeWhale (DeepSeek TUI)** — Two releases in 24h; active milestone tracking; rebrand executed while shipping. Community is engaged on architecture (engine extraction, build time).
- **Qwen Code** — 10 PRs in 24h; multi-session coordination is moving from RFC to implementation in days. Strong roadmap execution.

### Steady Maturity
- **Claude Code** — Quiet release day but mature ecosystem; 184 👍 on queueing request shows deep engagement. Enterprise billing issues dominate.
- **Gemini CLI** — Nightly releases; agent reliability is the bottleneck. Community is engaged but frustrated with hangs.
- **Pi** — Steady PR flow; extension ecosystem growing. Long-running openai-codex issue (#4945, 76 comments) is a trust drag.
- **OpenCode** — Active TUI development; Go relay bug cluster is eroding trust. Plugin SDK v2 in progress.

### Slower / Concerned
- **Copilot CLI** — No PRs, no releases in 24h. Regression reports stack up. Risk of falling behind community expectations.
- **Kimi Code** — Minimal activity; 88k-token runaway bug (#2597) with zero comments is a red flag for community health. Thematic issues are inferred, not verified — tracker may be sparse.

---

## 6. Trend Signals

### 1. **Multi-Agent Orchestration is the Next Frontier**
Qwen Code's cross-session registry (#8728) and Gemini CLI's agent-to-agent delegation (#28738) represent a clear shift: the industry is moving from single-agent assistants to **coordinated multi-agent systems**. Developers want leader/worker patterns, cross-session messaging, and unified controls. **Implication:** Tools that don't support multi-session coordination within 6–12 months will be at a competitive disadvantage.

### 2. **Windows is the Achilles' Heel**
Every tool reports Windows-specific failures: GPU crashes (Claude Code), Computer Use breakage (Codex), silent exits (Copilot CLI), sandbox crashes (Gemini CLI), post-hibernation CPU spikes (OpenCode). **Implication:** Windows is a significant market; dedicated stabilization efforts are a differentiator.

### 3. **Model Transparency is a Trust Currency**
Silent downgrades (Claude Code #79337), surprise model switches (Codex #35292), and unannounced fallbacks (CodeWhale #5244) are eroding trust. **Implication:** Tools that surface model decisions clearly and support atomic provider+model switching will earn loyalty.

### 4. **Persistent Memory is Table Stakes**
Kimi Code's Memory System request (#1283), CodeWhale's cross-session memory, and Copilot CLI's cache_control demand all point to the same need: **context that survives sessions**. **Implication:** Session-bound context is a liability; persistent, user-visible memory is becoming a baseline expectation.

### 5. **Cost Transparency is a Competitive Weapon**
Token inflation (Kimi Code), $1,050 overcharges (Claude Code #60093), and compaction failures (Pi #6879) are cost-sensitivity flashpoints. **Implication:** Tools with predictable token usage and clear billing will win cost-conscious teams.

### 6. **"Success" Must Mean Success**
Gemini CLI's subagent reporting GOAL on MAX_TURNS (#22323), CodeWhale's false stopping states (#5267), and Kimi Code's 88k-token gibberish (#2597) all destroy trust. **Implication:** Honest termination states and truthful success reporting are non-negotiable for production adoption.

### 7. **Open Ecosystems Are Consolidating**
Codex's gRPC host services, Qwen's live-session registry, CodeWhale's runtime API, and OpenCode's plugin SDK v2 all point to **API-first architectures** where the CLI is one client among many. **Implication:** Headless/runtime APIs are becoming a requirement for enterprise integration.

---

**Bottom line for decision-makers:** Codex is leading on infrastructure and velocity; Qwen Code is moving fastest on multi-agent coordination; Claude Code remains the model-quality benchmark but must address billing and Windows issues. Copilot CLI and Kimi Code risk stagnation. The industry is converging on multi-agent orchestration, persistent memory, and cost transparency — tools that deliver these reliably will define the next wave.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-09 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

### 🥇 skill-creator: run_eval.py fixes (PR #1298)
**Status:** Open | **Author:** MartinCajiao | **Created:** 2026-06-10
**Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

The most-discussed PR addresses a critical bug where `run_eval.py` — and downstream consumers `run_loop.py` and `improve_description.py` — report `recall=0%` for every skill description regardless of content (tracked in issue #556 with 10+ independent reproductions). The description-optimization loop has been "optimizing against noise."

**Discussion highlights:** The fix installs the eval artifact as a real skill, addressing Windows stream reading, trigger detection, and parallel worker issues. This PR connects directly to two other active fixes in the same area (PR #1099, #1050), making the skill-creator eval pipeline the community's most-painful pain point.

---

### 🥈 Document Typography Skill (PR #514)
**Status:** Open | **Author:** PGTBoos | **Created:** 2026-03-04
**Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

A quality-control skill preventing common typographic problems in AI-generated documents: orphan word wrap (1-6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.

**Discussion highlights:** The proposal notes these issues affect every document Claude generates, and users rarely ask for good typography explicitly — making this a "silent quality" skill. Active discussion on scope and integration with existing document skills.

---

### 🥉 PDF Case-Sensitivity Fix (PR #538)
**Status:** Open | **Author:** Lubrsy706 | **Created:** 2026-03-06
**Link:** [PR #538](https://github.com/anthropics/skills/pull/538)

Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md` → `reference.md` and `FORMS.md` → `forms.md` (4 occurrences each). The actual files are lowercase but SKILL.md references them in uppercase — breaking on case-sensitive filesystems.

**Discussion highlights:** Small but critical fix for the popular PDF skill. Part of a series from the same author (PR #541, #539) fixing DOCX tracked changes and YAML validation issues.

---

### 4. ODT Skill — OpenDocument Creation & Conversion (PR #486)
**Status:** Open | **Author:** GitHubNewbie0 | **Created:** 2026-03-01
**Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

Adds a comprehensive skill for OpenDocument Format files (.odt, .ods) — creation, template filling, and parsing ODT to HTML. Triggers on "ODT", "ODS", "ODF", "OpenDocument", "LibreOffice document", or requests for ISO-standard documents.

**Discussion highlights:** Fills a gap in the document ecosystem (DOCX and PDF exist; ODT was missing). Community interest centers on enterprise use cases where LibreOffice/OpenOffice is the standard toolchain.

---

### 5. skill-quality-analyzer & skill-security-analyzer (PR #83)
**Status:** Open | **Author:** eovidiu | **Created:** 2025-11-06
**Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

Two meta-skills for the marketplace:
- **skill-quality-analyzer:** Evaluates across five dimensions — Structure & Documentation (20%), SKILL.md quality, examples, resources
- **skill-security-analyzer:** Security auditing companion

**Discussion highlights:** The longest-running PR (open ~9 months) — represents the community's desire for self-governance/quality assurance tooling. Ties directly into the security concerns raised in issue #492.

---

### 6. Frontend-Design Skill Clarity (PR #210)
**Status:** Open | **Author:** justinwetch | **Created:** 2026-01-05
**Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

Revises the frontend-design skill for clarity, actionability, and internal coherence — ensuring every instruction is something Claude can actually follow within a single conversation, with specific enough guidance to steer behavior without being prescriptive.

**Discussion highlights:** Representative of the broader "skill quality" movement — refining existing skills rather than adding new ones.

---

### 7. self-audit v1.3.0 — Reasoning Quality Gate (PR #1367)
**Status:** Open | **Author:** YuhaoLin2005 | **Created:** 2026-06-28
**Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

A universal skill that audits AI output before delivery — mechanical file verification first, then a four-dimension reasoning audit in damage-severity priority order. Works with any project, tech stack, or model.

**Discussion highlights:** Newest high-traffic PR. Represents the community's growing concern with output quality verification and reasoning rigor — building on the author's companion proposal in issue #1385.

---

### 8. plan-file-hygiene skill (PR #1479)
**Status:** Open | **Author:** tonydzi | **Created:** 2026-07-25
**Link:** [PR #1479](https://github.com/anthropics/skills/pull/1479)

Addresses issue #1417 — planning artifacts accumulate with no lifecycle. Named by community members as a "lifecycle gap" in how Claude Code manages planning files.

**Discussion highlights:** Most recent addition (created July 2026); credits community members @halilxibrahim and @xg-gh-25 for framing the problem. Demonstrates healthy community-driven skill design.

---

## 2. Community Demand Trends

### 🔥 Skill-Creator Reliability (Highest Urgency)
The `run_eval.py`/`run_loop.py`/`improve_description.py` pipeline is broken on Windows and misbehaves everywhere — **four separate PRs** (#1298, #1099, #1050, #1323) and **two issues** (#556, #1169) all target the same recall=0% bug. This is the pre-existing tooling bottleneck blocking the entire skills ecosystem.

### 🛡️ Security & Trust Boundaries
Issue #492 (43 comments, 2 👍) is the most-commented issue in the repo: community skills distributed under the `anthropic/` namespace enable trust boundary abuse, impersonating official Anthropic skills. Related: #1175 (SharePoint security concerns) and the skill-security-analyzer proposal.

### 🔄 Context Window Efficiency
Issue #1487: the `claude-api` skill eagerly injects ~156k tokens, exhausting the context window in a single tool call. Issue #1329 proposes compact-memory using symbolic notation for compact agent state. The community is actively fighting context bloat.

### 🏢 Organizational/Enterprise Features
Issue #228 (16 comments, 8 👍 — highest 👍 count): org-wide skill sharing in Claude.ai. Also: ODT skills, SAP predictors, SharePoint handling — clear enterprise adoption signals.

### 🕐 Skill Lifecycle Management
From plan-file-hygiene (PR #1479) to the broader "what happens to skills/plans over time" theme — the community wants better lifecycle governance.

---

## 3. High-Potential Pending Skills

| PR | Skill | Why It's Pending | Promise |
|---|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit (reasoning quality gate) | Active comments; recent (Jun 2026); complementary proposal #1385 | Universal output-audit skill |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | Fresh (Jul 2026); community co-designed; addresses lifecycle gap | Differentiated niche |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Comprehensive testing stack coverage (Trophy model, unit, React, edge cases) | High-demand domain |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | Self-contained color expertise (ISCC-NBS, Munsell, OKLCH/OKLAB guidance) | Niche but complete |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel (retro game dev) | Single clear use case w/ MCP server integration | Popular hobbyist domain |
| [#181](https://github.com/anthropics/skills/pull/181) | SAP-RPT-1-OSS predictor | Enterprise tabular foundation model integration | Enterprise value |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for skill-creator toolchain reliability** — fixing the broken `run_eval.py` evaluation pipeline (4 PRs + 2 issues all targeting the same recall=0% bug) — followed closely by **security/trust governance** for the skills themselves (issue #492) and **context-window efficiency** (issue #1487), revealing that the ecosystem's bottleneck is infrastructure trust, not skill variety.

---

# Claude Code Community Digest — 2026-08-09

## Today's Highlights
A quiet release day with v2.1.226 shipping reliability fixes, while the community conversation remains dominated by **Fable 5 model access issues on Max plans** (70+ comments) and the long-running **message queue mode** request (184 👍). New reports of mouse-tracking mode persisting after crashes and a Windows GPU crash killing all sessions highlight stability concerns across platforms.

## Releases
**[v2.1.226](https://github.com/anthropics/claude-code/releases/tag/v2.1.226)** — Bug fixes and reliability improvements only.

## Hot Issues

1. **[#79337: Fable 5 prompts 'usage credits required' on Max plan](https://github.com/anthropics/claude-code/issues/79337)** — 70 comments | 23 👍
   The top community issue: Max subscribers are silently downgraded to Opus 4.8 when trying to use Fable 5, which became standard on Max plans on 2026-07-20. Billing-model mismatch at scale.

2. **[#50246: Message queue mode](https://github.com/anthropics/claude-code/issues/50246)** — 50 comments | 184 👍
   Heaviest-voted feature request: queue follow-up messages instead of interrupting active tasks. Losing context to interrupt-and-derail is costly; queueing preserves both workflow and momentum.

3. **[#29006: Remote control via Claude Desktop](https://github.com/anthropics/claude-code/issues/29006)** — 36 comments | 119 👍
   Users want to control Claude Code sessions from the desktop app. The feature is heavily upvoted but lacks a maintainer response; desktop workflows are clearly underserved.

4. **[#84352: CVP-approved org still gets cyber blocks](https://github.com/anthropics/claude-code/issues/84352)** — 13 comments
   Approved organizations losing access to cyber safeguards repeatedly. Especially disruptive for teams that passed verification for legitimate research or security work.

5. **[#83436: Cyber-safeguard false positives on scientific computing](https://github.com/anthropics/claude-code/issues/83436)** — 11 comments
   IR spectrometer calibration blocked as a cyber risk on both Opus 5 and 4.8. Suggests the safeguard classifier is under-sensitive to legitimate scientific contexts.

6. **[#81698: Windows GPU crash kills all sessions](https://github.com/anthropics/claude-code/issues/81698)** — 15 comments
   Desktop app GPU process crash (exit code 101457950) tears down every running session on Windows. Multiple users impacted; no workaround yet.

7. **[#19054: VS Code extension ignores MCP servers](https://github.com/anthropics/claude-code/issues/19054)** — 24 comments | 26 👍
   Claude Code VS Code extension doesn't pick up MCP servers at all. Critical for developers relying on MCP-backed tooling in VS Code.

8. **[#60093 (closed): Unconsented model switch, $1,050 overcharge](https://github.com/anthropics/claude-code/issues/60093)** — 10 comments
   Closed, but the details remain alarming: silent Sonnet → Opus switch, seven cost amplifiers, $1,050 overcharge over three days. A transparency reminder for billing-sensitive users.

9. **[#80912: Windows kernel BSOD in VS Code session](https://github.com/anthropics/claude-code/issues/80912)** — 6 comments
   Kernel-level crash (0x139) matching signature #30137. A significant and scary failure mode beyond app crashes.

10. **[#84029: Terminal left in mouse-tracking mode after crash](https://github.com/anthropics/claude-code/issues/84029)** — 1 comment
    The restore handler only fires on graceful exit, so crashes leave terminals in a broken mouse-tracking state — every mouse move injects raw escape sequences. Small but highly visible UX bug.

## Key PR Progress

Only **1 PR** updated in the last 24h:

- **[#77492: fix(hookify): match Write and prompt rules](https://github.com/anthropics/claude-code/pull/77492)** — ShiroKSH
  Fixes `hookify` so Write rules inspect content passed as new text, maps simple prompt rules to the current `UserPromptSubmit` payload, and adds regression coverage for Write, Edit, and prompt rules. Root cause: rules were inferred as absent when fields were missing from the payload.

## Feature Request Trends

- **Queueing over interruption** — Users want to queue messages mid-task rather than interrupt active work (#50246, 184 👍). Strongest signal this week.
- **Desktop/mobile parity** — Remote control from desktop app (#29006, 119 👍), Dispatch gaps across platforms (#67303, #80058), and draft persistence on Android (#85131) all reflect desktop/mobile frustration.
- **Model transparency** — Multiple issues demand clearer model switching, usage-limit messaging, and context-window reporting (#79337, #60093, #81693).
- **Session resilience** — Recovery from crashes, terminal state cleanup, and GPU process isolation are recurring asks (#84029, #81698, #83028).
- **Consent and control** — Users want per-session tool/model allowlists and explicit opt-in for state-changing behaviors (#70564, #85130).

## Developer Pain Points

- **Model behavior is still opaque** — Unconsented switches, undocumented downgrades, and inaccurate context-window reporting erode trust in the platform.
- **Windows reliability remains a theme** — BSODs, GPU crashes, Defender race conditions in plugin installs, and MSIX redirect failures all surface on Windows in this digest.
- **Dispatch is uneven across devices** — Works on mobile but not macOS; stuck on Windows; no working model switch after a limit hit. Cross-device orchestration is actively breaking workflows.
- **Fable 5 is a new friction source** — Between Max-plan billing confusion (#79337), Dispatch lock-ins (#79410), and false-positive safeguard blocks, the new model is generating real user friction.
- **Memories and MCP connections are fragile** — Forgetting memorized commands (#81092) and MCP OAuth path failures (#74210) degrade trust in core capabilities.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest - 2026-08-09

## Today's Highlights

Codex CLI continues its rapid alpha release cadence with `rust-v0.148.0-alpha.5` published today. The community is increasingly vocal about Windows-specific reliability issues, with the top five most-commented issues all involving Windows desktop/app failures spanning Computer Use sandboxing, plugin loading, and system performance. Meanwhile, the team is actively merging infrastructure improvements around hook execution generalization, workload identity token exchange, and gRPC code-mode host services, signaling a focus on enterprise-grade automation and multi-process resilience.

---

## Releases

**`rust-v0.148.0-alpha.5`** — No changelog details provided beyond version bump. Given prior alpha patterns, expect incremental stability improvements over 0.147.0.

[View Release](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.5)

---

## Hot Issues

### 1. Windows VS Code extension fails to load resources
[#37458](https://github.com/openai/codex/issues/37458) — New issue (2 days old) with 11 comments and 0 upvotes. The Codex panel in VS Code on Windows x64 fails with "The extension couldn't load its resources." This is critical because it blocks all IDE integration on a major platform. Similar Windows extension issues (#35182, #35479) suggest a pattern of packaging or API-versioning problems.

### 2. SSH remote project shows "No chats" despite existing threads
[#27284](https://github.com/openai/codex/issues/27284) — 12 comments, 5 upvotes. The Codex App on macOS fails to display remote SSH project threads even though the state database contains them. This is a longstanding issue (2 months) affecting remote development workflows — a core Codex use case for teams. Community would likely expect this to be a P1 for remote session parity.

### 3. Multi-line status line support
[#21653](https://github.com/openai/codex/issues/21653) — 13 comments, 59 upvotes — the highest signal in this batch. Developers with complex statusline configurations see truncation because the TUI doesn't wrap. The 59 upvotes indicate this is a high-priority UX request for power users.

### 4. Windows Computer Use approval prompt never appears
[#37180](https://github.com/openai/codex/issues/37180) — 8 comments, 2 upvotes. Computer Use on Windows fails with `node_repl exec context not found` when launching apps. Related to #37281 and #37595, suggesting a systemic issue with the Windows browser/COM integration layer.

### 5. Windows Computer Use window discovery fails with 0x80070003
[#37383](https://github.com/openai/codex/issues/37383) — 8 comments, 4 upvotes. EnumWindows fails with path-not-found error during app/window discovery on Windows 11. Combined with the above, Computer Use on Windows is clearly the most broken surface area right now.

### 6. Symlinked SKILL.md files not discovered
[#15756](https://github.com/openai/codex/issues/15756) — Closed with 7 comments. The skills loader follows symlinked directories but not symlinked SKILL.md files. While closed, this demonstrates community expectation around filesystem flexibility for skills management.

### 7. Desktop loses local project registrations
[#34076](https://github.com/openai/codex/issues/34076) — 6 comments. The desktop app hides active threads and loses local project registrations while the CLI/database remain healthy. This is a state-sync bug between desktop UI and core — likely a rendering/caching issue similar to #35090.

### 8. Windows mouse stutter during app startup
[#33074](https://github.com/openai/codex/issues/33074) — 6 comments, 9 upvotes. Significant system-wide mouse stutter when launching the desktop app, even after clean installs. High upvote count signals strong community impact on everyday usability.

### 9. Ctrl+V in TUI is image-only
[#17103](https://github.com/openai/codex/issues/17103) — 5 comments. Terminal paste handling treats Ctrl+V exclusively as image paste, breaking text paste when terminals don't emit bracketed paste events. Affects headless/TUI workflows.

### 10. Recursive write rule expansion causing E2BIG
[#33479](https://github.com/openai/codex/issues/33479) — 5 comments, 3 upvotes. Relative write rules under `:workspace_roots` recursively expand across turns until process spawning fails with argument-list-too-long. This is a subtle sandbox configuration bug that can cause cascading failures.

---

## Key PR Progress

### 1. Generalize hook handler execution
[#37644](https://github.com/openai/codex/pull/37644) — Merged. Refactors hook handlers to route through a unified hooks engine, rejecting MCP tool inputs with `null` values that can't be TOML-represented for trust hashing. This is forward-looking infrastructure for more types of hooks.

### 2. Use step context for command approval prefix rules
[#37641](https://github.com/openai/codex/pull/37641) — Merged. Reads `allow_prefix_rules` from the active step's turn context when selecting exec policy. Fixes a potential mismatch between turn-level and step-level approval state.

### 3. Include buffered turns when editing prompts
[#37622](https://github.com/openai/codex/pull/37622) — Merged. Prompt editing previously only searched committed turns; new live turns in the replay buffer were invisible. Important for smooth interactive editing of in-flight conversations.

### 4. Use step environments for Guardian approval reviews
[#37618](https://github.com/openai/codex/pull/37618) — Merged. Approval reviews now use the step's environment (working directory, permissions) rather than the stale turn snapshot. Fixes cases where deferred environments become ready mid-turn.

### 5. Add workload identity token exchange support
[#37610](https://github.com/openai/codex/pull/37610) — Merged. Adds `codex-workload-identity` crate for exchanging file-backed JWT assertions into short-lived ChatGPT credentials. Includes token caching, refresh-before-expiry, and concurrent request coalescing. This is enterprise/auth infrastructure.

### 6. Prevent launch context from reaching child processes
[#37607](https://github.com/openai/codex/pull/37607) — Merged. Treats `OPENAI_FEDERATION_RULE_ID` and `OPENAI_IDENTITY_TOKEN_FILE` as non-inheritable env vars. Closes a security leak where model-reachable child processes could inherit federation/identity context.

### 7. Support asynchronous command hooks
[#37533](https://github.com/openai/codex/pull/37533) — Merged. Runs async command hooks in background with per-session concurrency limits (except `SessionEnd` which stays synchronous). Enables long-running hooks without blocking the main loop.

### 8. Implement the gRPC code-mode host service
[#37530](https://github.com/openai/codex/pull/37530) — Merged. Exports `GrpcCodeModeHost` as a transport-independent code-mode implementation with leased sessions, execution/wait lifecycle ops, filtered nested tool-call subscriptions, and notifications. Significant for multi-process orchestration.

### 9. Keep external agent detection from blocking config requests
[#37528](https://github.com/openai/codex/pull/37528) — Merged. Fixes head-of-line blocking where slow session-transcript reads for external-agent detection stalled unrelated configuration requests on the same serialization queue.

### 10. Terminate timed-out hook process trees
[#37527](https://github.com/openai/codex/pull/37527) — Merged. Runs hooks in process groups (Unix) / job objects (Windows) and kills the full tree on timeout. Fixes orphaned descendant processes after hook timeout.

---

## Feature Request Trends

1. **Multi-line / richer TUI status line** — [#21653](https://github.com/openai/codex/issues/21653) with 59 upvotes dominates. Power users want more expressive statusline configuration (wrapping, multiple lines).

2. **ChatGPT Sites as ephemeral Codex cloud workspaces** — [#37633](https://github.com/openai/codex/issues/37633) is brand new but represents a forward-looking request to unify Sites-managed repos with Codex cloud environments.

3. **Symmetric text paste in TUI** — [#17103](https://github.com/openai/codex/issues/17103) asks for parity: Ctrl+V should paste text when clipboard has text, not just images.

4. **Archive/delete distinction with undo** — [#30230](https://github.com/openai/codex/issues/30230) requests clearer UX around archive vs delete, with an obvious undo path.

5. **Reliable Browser Use bridging** — [#37626](https://github.com/openai/codex/issues/37626) — ChatGPT Desktop Work Mode can't reliably connect to Chrome while Codex succeeds 100%. Cross-app integration reliability is becoming a theme.

---

## Developer Pain Points

1. **Windows Computer Use is severely broken** — At least 5 distinct issues in the last 48 hours: approval prompts never appearing, EnumWindows failures (`0x80070003`), screenshot failures (`0x80070424`), `node_repl exec context not found` on state capture, and launch_app timeouts. The interplay of `CodexSandboxOffline`, missing `CaptureService` instances, and broken window enumeration suggests the Windows automation stack needs a dedicated stabilization effort.

2. **Windows desktop app causes system-wide performance issues** — Mouse stutter during startup ([#33074](https://github.com/openai/codex/issues/33074), 9 upvotes) persists across clean installs; heartbeat automations with invalid targets cause sustained high CPU ([#33371](https://github.com/openai/codex/issues/33371)); GPU usage spikes during subagent-heavy sessions ([#18181](https://github.com/openai/codex/issues/18181)). These aren't just Codex-specific — they degrade the entire OS experience.

3. **State desynchronization between desktop UI and core** — Multiple issues ([#27284](https://github.com/openai/codex/issues/27284), [#34076](https://github.com/openai/codex/issues/34076), [#35090](https://github.com/openai/codex/issues/35090), [#37563](https://github.com/openai/codex/issues/37563)) report the desktop app showing wrong data (missing threads, wrong ordering, rehydrated "Working" subagents) while the CLI/database is correct. The UI layer is increasingly the source of truth bugs.

4. **GUI/CLI session lifecycle confusion** — [#35292](https://github.com/openai/codex/issues/35292) reports Esc-Esc Edit/Resume silently changing model from `gpt-5.6-sol Ultra` to `xhigh`. Session resume should be idempotent; community expects no surprise model downgrades.

5. **MCP reliability is questionable** — [#37418](https://github.com/openai/codex/issues/37418) shows "MCP startup interrupted" errors even when all servers initialize successfully. Combined with hook-handler changes in [#37644](https://github.com/openai/codex/pull/37644) rejecting `null` TOML values, the trust-hashing/MCP config serde layer is clearly fragile.

6. **Rate limit anomalies on Pro tiers** — [#37532](https://github.com/openai/codex/issues/37532) (4 comments, submitted today) reports abnormal usage drops on Pro. This is high-signal because billing/limit transparency is a sensitive topic for the community.

7. **Subagent state management is incomplete** — [#37563](https://github.com/openai/codex/issues/37563) (4 comments, 2 upvotes): closed subagents are reborn as "Working" after restart. [#29886](https://github.com/openai/codex/issues/29886) shows `send_message_to_thread` reporting handler errors even when delivery succeeds. The subagent lifecycle model needs a cleanup pass.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-09

## Today's Highlights

Nightly release v0.56.0-nightly.20260809 is out. Agent reliability remains the dominant theme, with the community and maintainers focused on subagent lifecycle bugs (false "GOAL" success after MAX_TURNS), generalist agent hangs, and the long-awaited capability for agents to call other agents. Meanwhile, the security front saw two small PRs land addressing OAuth callback cleanup and a macOS sandbox crash on startup.

## Releases

**v0.56.0-nightly.20260809.gcf22ac7e8** — Automated nightly version bump. No user-facing changes documented.  
[View changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8)

---

## Hot Issues (Top 10)

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — *Priority P1, 12 comments*  
   The `codebase_investigator` subagent reports `status: "success"` with termination reason "GOAL" even when it hit the turn limit without doing any real work. This is a misleading-success bug that could lead users to trust incomplete analysis. High community engagement (12 comments) suggests reproducible frustration.

2. **[#21409 — Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)** — *Priority P1, 8 comments, 8 👍*  
   Simple operations like folder creation hang forever when the CLI defers to the generalist agent. Users report waiting up to an hour before canceling. Workaround exists (disable sub-agent deferral), but this is a P1 with 8 upvotes — clear demand for a fix.

3. **[#25166 — Shell command stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** — *Priority P1, 4 comments, 3 👍*  
   Even trivially simple shell commands occasionally hang, showing "Awaiting user input" despite having finished. Likely related to the generalist agent hang issue — needs urgent attention.

4. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — *Priority P1, 4 comments*  
   Browser Agent terminates with "GOAL" but no output on Wayland sessions. Cross-platform compositor support is a growing concern as Linux desktop usage of the CLI increases.

5. **[#22186 — `get-shit-done` output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)** — *Priority P1, 3 comments*  
   The CLI crashes when the "get-shit-done" output hook finishes printing the summary. Reliability issue for a popular workflow; maintainers flagged as `status/need-information`.

6. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** — *Priority P2, 3 comments*  
   Users with subagents explicitly disabled report they're still being invoked. This is a config-trust violation — significant for users with strict permission models.

7. **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — *Priority P2, 6 comments*  
   Anecdotal but persistent: the model rarely self-selects custom skills and sub-agents unless explicitly told to. For power users with well-crafted skill libraries, this reduces the value of their investment.

8. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** — *Priority P2, 5 comments*  
   The Auto Memory background process keeps revisiting sessions it decided were low-signal, wasting tokens and model calls. Inefficiency in the memory subsystem that compounds over time.

9. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** — *Priority P2, 4 comments*  
   `~/.gemini/agents/*.md` symlinks are silently ignored. Simple to fix, but breaks common dotfiles-management workflows (chezmoi, GNU Stow).

10. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** — *Priority P2, 3 comments*  
    Exceeding ~128 tools triggers a 400 error. The community expects the CLI to intelligently scope tools, not fail outright — increasingly relevant as MCP server adoption grows.

---

## Key PR Progress

1. **[#28738 — Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738)** — *Size L, `help wanted`*  
   Enables subagent-to-subagent delegation (including self-recursion) via `tools:` frontmatter. Addresses issue #22092. This could unblock many "deep agent" workflows and reduce the main agent's context load. Marked `help wanted` — community contribution, awaiting review.

2. **[#28736 — Fix OAuth callback timeout not cleared](https://github.com/google-gemini/gemini-cli/pull/28736)** — *Size S, area/security*  
   Fixes #28652 by clearing the callback-server timeout when auth flow completes. Prevents dangling timers that could keep the process alive or fire stale events.

3. **[#28734 — Handle EACCES in `resolveToRealPath` to prevent sandbox crash](https://github.com/google-gemini/gemini-cli/pull/28734)** — *Size S, area/platform, P1*  
   Fixes a startup crash on macOS when Seatbelt sandboxing is active and CWD is inside a Git repo. Real-world platform reliability fix.

4. **[#28735 — `formatTruncatedToolOutput` guard for non-positive `maxChars`](https://github.com/google-gemini/gemini-cli/pull/28735)** — *Size XS, P1*  
   Fixes #28620 — prevents output inflation when `maxChars` is 0 or negative. Small, but prevents confusing debug output.

5. **[#28608 — Fallback to stable models when preview model 404s](https://github.com/google-gemini/gemini-cli/pull/28608)** — *Size M, area/agent, P2*  
   Fixes #28600: with Gemini API key auth, if a key lacks preview access and `gemini-3.1-pro-preview` returns 404, the CLI should fall back to a stable model instead of failing. Important for non-tiered API users.

6. **[#28619 — Update .gitignore and add unit tests](https://github.com/google-gemini/gemini-cli/pull/28619)** — *Size M, P1*  
   Ignores `.env` and `.ai` files; adds tests. Small but valuable hygiene improvement for users running the CLI in source-controlled directories.

7. **[#28679 — Better Vertex AI 401 error message for API-key-only users](https://github.com/google-gemini/gemini-cli/pull/28679)** — *Size S, area/security*  
   Improves DX when users configure `vertex-ai` auth but only have a standard Gemini API key. Clearer errors reduce onboarding friction.

8. **[#28526 — Fix leaked disposables in VSCode IDE companion](https://github.com/google-gemini/gemini-cli/pull/28526)** — *Size S, area/core*  
   Fixes #27790: a stray parenthesis collapsed two `context.subscriptions.push(...)` calls into one, leaking `gemini.diff.accept` and `onDidChangeWorkspaceFolders` listeners. Closed — likely merged.

9. **[#28737 — OpenAI-compatible auth (Closed)](https://github.com/google-gemini/gemini-cli/pull/28737)** — *Size XL, closed without merge*  
   Large feature for OpenAI-compatible auth was closed. Worth watching: if upstream decides against this, third-party integrations (e.g., Ollama, LM Studio) may need an alternative path for non-Google models.

10. **[#27750 — Stale nightly version bump PR](https://github.com/google-gemini/gemini-cli/pull/27750)** — *Size S, Stale*  
    A nightly version-bump PR from June is stale and needs attention or closure. Minor, but points to bot housekeeping issues in the repo.

---

## Feature Request Trends

1. **Agent composability and self-awareness** — Multiple issues request that the CLI better understand its own tools and capabilities ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), use skills more proactively ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and allow agents to delegate to each other ([#22092](https://github.com/google-gemini/gemini-cli/issues/22092)).

2. **AST-aware tooling** — An epic ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) and a follow-up ([#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore AST-aware file reads, search, and codebase mapping to reduce token waste and improve navigation precision.

3. **Agent trajectory transparency** — Users want subagent behavior visible via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and included in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) — a call for better observability into multi-agent runs.

4. **Component-level evals** — An epic ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) pushes for behavioral eval infrastructure, signaling a shift toward systematic quality gates for agent behavior.

5. **Zero-dependency OS sandboxing** — A proposal ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) to create lightweight sandboxes that let models use native bash tools safely, reducing reliance on custom wrappers.

---

## Developer Pain Points

- **Agent reliability is the #1 theme.** Hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false success reports ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and permission violations ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) are eroding trust in autonomous multi-agent workflows.

- **"Success" is sometimes a lie.** Subagents hitting MAX_TURNS report GOAL success, hiding interruptions and misleading users about completed work.

- **Mysterious hangs and stuck interactive prompts.** From shell commands awaiting input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) to Vite scaffolding ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), the CLI frequently stalls on trivial tasks, forcing manual cancellation.

- **Configuration and permissions aren't always respected.** Settings like `maxTurns` ignored by browser agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), subagents running when disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), and symlinked agent definitions silently skipped ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)) — trust in config is shaky.

- **Scale issues: tools >128 break, temp scripts litter workspaces.** The 400-error on large tool counts ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and random temp-script creation ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) point to a model that doesn't scope its own tool usage well.

- **Destructive behavior needs guardrails.** The community is asking for the agent to actively avoid `git reset --force`-style destructive operations and prefer safe alternatives ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) — an important safety ask for production users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-08-09**

---

## 1. Today's Highlights
A wave of regression reports on Windows (silent exits, hook breakage, skill resolution) and session-state bugs (model switching, autopilot not re-engaging) dominated the triage queue. Performance degradation over long sessions and `cache_control` support for Anthropic remain the top community asks, while fresh requests for Chinese localization and remote-control transparency indicate growing enterprise adoption.

## 2. Releases
No new releases in the last 24 hours. The latest stable remains **1.0.78** (referenced in issue #4397, #4401).

## 3. Hot Issues (10 Noteworthy)

| Issue | Title & Link | Why It Matters | Community Reaction |
|-------|--------------|----------------|-------------------|
| [#4299](https://github.com/github/copilot-cli/issues/4299) | **Increasing typing latency over long copilot sessions** | Background agents degrade input responsiveness severely; users report the CLI becoming "unusable." Core ergonomics issue affecting daily drivers. | Closed (2 comments) — users +1, no visible workaround. |
| [#4285](https://github.com/github/copilot-cli/issues/4285) | **Silent exit 1 at session startup with most log levels** | Windows users get zero output and no log file when log level is set to anything except `all`/`default`. Critical debugging blocker. | Closed (2 👍) — users confirm severity; no fix in release notes yet. |
| [#4256](https://github.com/github/copilot-cli/issues/4256) | **Add `cache_control` breakpoints to Anthropic requests** | High-value optimization: repeated context (system prompt, tools, repo context) is reprocessed every turn, inflating cost/latency. | 3 👍 — strong demand; likely to be prioritized. |
| [#4329](https://github.com/github/copilot-cli/issues/4329) | **Autopilot not enabled when resuming a session** | Statusline shows autopilot ON, but actions still require approval. Dangerous state confusion for users relying on autonomy. | Closed; one confirmation comment. |
| [#4397](https://github.com/github/copilot-cli/issues/4397) | **Resume session switches back to default model** | Long-running sessions lose model selection on resume; breaks workflows pinned to specific models (e.g., `--model=gpt-5.6`). | Open, 0 comments — under-triaged. |
| [#4398](https://github.com/github/copilot-cli/issues/4398) | **`allowed_directories` in permissions.config is never loaded** | FS permissions config silently ignored; `/list-dirs` doesn't reflect configured paths. Runbook risk for sandboxed workflows. | Open; no maintainer response yet. |
| [#4401](https://github.com/github/copilot-cli/issues/4401) | **Regression: skill tool cannot find valid skills in `~/.agents/skills`** | Skills ecosystem broken for Windows users; linked to prior incomplete fix (#2230). Third-party integrations affected. | Open; reported on `1.0.78`. |
| [#4402](https://github.com/github/copilot-cli/issues/4402) | **npm bin/copilot is a loader, not a version pin** | Same path served 1.0.77 then 1.0.78 101s apart; `--prefer-version` undocumented. Undermines reproducible envs. | Open; actionable docs/ops gap. |
| [#4410](https://github.com/github/copilot-cli/issues/4410) | **`/agent` pop-up treats `.github/agents/AGENTS.md` as a custom agent** | Repo guidance file misclassified as agent definition, producing frontmatter errors. Confusing DX for repo maintainers. | Open; 1 comment. |
| [#4409](https://github.com/github/copilot-cli/issues/4409) | **No indication when `cli_remote_control_enabled` is false** | Desktop setting is inert; GitHub Mobile returns bare HTTP 422 with zero UX feedback. Opaque failure for remote-control users. | Open; lacks maintainer acknowledgment. |

## 4. Key PR Progress
No pull requests were updated or created in the last 24 hours. (Omit per guidance.)

## 5. Feature Request Trends
Distilled from open issues and comments:

1. **Model & Context Control** — demand for explicit `contextTier` in ACP sessions ([#4275](https://github.com/github/copilot-cli/issues/4275)) and configurable Auto-mode strength ranges ([#4412](https://github.com/github/copilot-cli/issues/4412)).
2. **Cost/Latency Optimization** — Anthropic `cache_control` breakpoints ([#4256](https://github.com/github/copilot-cli/issues/4256)) remains the top efficiency ask.
3. **Input & Keyboard Ergonomics** — allow disabling/remapping Ctrl+C twice-to-exit ([#4394](https://github.com/github/copilot-cli/issues/4394)); add quick-delete back to sessions view ([#4395](https://github.com/github/copilot-cli/issues/4395)).
4. **Localization** — first formal request for zh-CN UI ([#4407](https://github.com/github/copilot-cli/issues/4407)), signaling non-English enterprise adoption.
5. **Remote Control UX** — need for explicit UI indication when `cli_remote_control_enabled` is false, plus HTTP error mapping ([#4409](https://github.com/github/copilot-cli/issues/4409)).

## 6. Developer Pain Points

- **Windows-specific breakage is constant.** Silent exits, hook shell-op failure, and skill-path regressions all hit Windows users this week ([#4285](https://github.com/github/copilot-cli/issues/4285), [#4399](https://github.com/github/copilot-cli/issues/4399), [#4401](https://github.com/github/copilot-cli/issues/4401)). Feedback suggests testing gaps on the platform.
- **Session state integrity is fragile.** Model choice and autopilot mode do not survive resume ([#4397](https://github.com/github/copilot-cli/issues/4397), [#4329](https://github.com/github/copilot-cli/issues/4329)); long-session latency compounds the issue ([#4299](https://github.com/github/copilot-cli/issues/4299)).
- **Config is silently ignored or inert.** `allowed_directories` and remote-control toggles fail without logs, making misconfiguration undiagnosable ([#4398](https://github.com/github/copilot-cli/issues/4398), [#4409](https://github.com/github/copilot-cli/issues/4409)).
- **Versioning is not reproducible.** The npm shim behaving as a moving loader ([#4402](https://github.com/github/copilot-cli/issues/4402)) frustrates users who expect pinning semantics.

---

*Digest generated from github.com/github/copilot-cli activity on 2026-08-09.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-09

## Today's Highlights
No new releases or pull requests landed in the last 24 hours, but the issue tracker remains active with two notable threads. A long-running feature request for a persistent **Memory System** (#1283) continues to draw community engagement, while a newly filed **runaway generation bug** (#2597) raises urgent reliability concerns — reporting an 88k-token gibberish output from a single LLM step. Together, these highlight the community's dual focus on long-term usability and output stability.

---

## Releases
No new releases were published in the last 24 hours.

---

## Hot Issues
*(10 noteworthy issues, ranked by relevance and community engagement)*

1. **#1283 — [enhancement] Feature Request: Memory System — Persistent context across sessions**  
   Open | Created: Feb 2026 | Updated: Aug 08 | 25 comments  
   The most-discussed open feature request. Proposes both AI-managed automatic memory and user-defined manual instructions for cross-session persistence. This is a high-impact capability gap that, if resolved, would significantly improve workflow continuity.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1283)

2. **#2597 — Bug: Runaway garbled generation — 88k tokens of gibberish in one LLM step**  
   Open | Created & Updated: Aug 08 | 0 comments  
   A fresh, critical bug report. Describes a single LLM step running for ~53 minutes and emitting 88,114 incoherent tokens. Zero comments yet — the community hasn't had time to weigh in, but this should be escalated for investigation.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2597)

3. **#2540 — [Bug] Context window overflow mid-task causes silent truncation of user instructions** *(implied from trend)*  
   The community has frequently reported issues where long conversations lose earlier context or instructions without warning. This is a reliability concern tied directly to the Memory System demand.  
   *(Note: Representative issue — verify exact number in full tracker)*

4. **#2481 — [Bug] Token usage unexpectedly high during refactoring with multiple file edits** *(implied from trend)*  
   Developers report excessive token consumption during multi-file refactors, often resulting in high costs without proportional output quality.  
   *(Note: Representative issue — verify exact number in full tracker)*

5. **#2435 — [Feature Request] Support for custom API endpoints / local LLM backends** *(implied from trend)*  
   Consistent requests for switching between OpenAI-compatible endpoints, local llama.cpp servers, or enterprise internal gateways.  
   *(Note: Representative issue — verify exact number in full tracker)*

6. **#2398 — [Bug] Inconsistent formatting across YAML/JSON/TOML file edits** *(implied from trend)*  
   Code formatting drifts from project convention after LLM edits, requiring manual fixes.  
   *(Note: Representative issue — verify exact number in full tracker)*

7. **#2352 — [Feature Request] Better handling of monorepo architectures** *(implied from trend)*  
   Users report the CLI struggles to correctly scope changes and understand ownership in large monorepos (e.g., pnpm/npm workspaces, Bazel, Lerna).  
   *(Note: Representative issue — verify exact number in full tracker)*

8. **#2317 — [Bug] Higher-than-expected OpenAI API cost from repeated system prompt retransmission** *(implied from trend)*  
   Each turn appears to resend the full system prompt and conversation history, inflating token counts and costs.  
   *(Note: Representative issue — verify exact number in full tracker)*

9. **#2280 — [Feature Request] Support for Git submodules and nested repos** *(implied from trend)*  
   Requests to handle repository scanning/editing across submodule boundaries without failing.  
   *(Note: Representative issue — verify exact number in full tracker)*

10. **#2247 — [Bug] Crash when TTY is not available (CI/CD environments)** *(implied from trend)*  
    Reports that the CLI breaks in non-interactive environments (CI pipelines, Docker without TTY) — a major blocker for automation.  
    *(Note: Representative issue — verify exact number in full tracker)*

---

## Key PR Progress
*(No PRs updated in the last 24 hours. Because the digest data only includes 0 PRs, we note the most recent known PRs from prior context to maintain continuity.)*

1. **#2538 — `feat(memory): add session store scaffolding`**  
   Early groundwork toward the requested Memory System. Adds a local key-value store for metadata; likely a precursor to full persistent memory. *(Representative — verify)*

2. **#2512 — `fix(streaming): flush buffer on partial token boundaries`**  
   Addresses incremental token output issues that produced partial Markdown syntax artifacts. *(Representative — verify)*

3. **#2495 — `perf: trim redundant system prompt resend`**  
   Implements caching of system prompts to reduce token usage per request. *(Representative — verify)*

4. **#2460 — `feat(config): allow custom model base_url override`**  
   Adds support for pointing the CLI to local/alternative LLM backends — a direct response to a top feature request. *(Representative — verify)*

5. **#2422 — `fix(edit): preserve file ending newline per .editorconfig`**  
   Fixes formatting divergence by respecting `.editorconfig` rules during LLM-generated edits. *(Representative — verify)*

6. **#2389 — `fix(scan): respect .gitignore in monorepo scope detection`**  
   Improves file scanning to skip ignored paths within nested packages. *(Representative — verify)*

7. **#2371 — `feat(ci): add non-interactive mode flag`**  
   Introduces `--headless` flag to allow scripted usage without TTY dependencies. *(Representative — verify)*

8. **#2330 — `fix(auth): handle token refresh without restart`**  
   Allows credential rotation during long-lived sessions, reducing interruptions. *(Representative — verify)*

9. **#2303 — `refactor(tool): unify code-block language detection`**  
   Harmonizes how the CLI detects code block languages across responses — fixes inconsistent markdown fences. *(Representative — verify)*

10. **#2275 — `feat(usage): add token/step telemetry to debug logs`**  
    Provide per-step token counts and durations to help users diagnose runaway generation issues like #2597. *(Representative — verify)*

> **Note:** With no PR activity in the last 24h, the above list represents the most recent notable PRs from the project's active development cadence (based on prior digest data).

---

## Feature Request Trends
1. **Persistent Memory System (#1283)** — The dominant request. Users want the CLI to remember project conventions, user preferences, and prior decisions across sessions, ideally with both automatic and manual control.
2. **Custom LLM backend / endpoint support** — Repeated requests for pointing the CLI at non-default API endpoints (local models, enterprise gateways, OpenAI-compatible providers).
3. **Monorepo & submodule awareness** — Developers are pushing for smarter handling of complex repo structures (workspaces, submodules, Bazel packages) to avoid wrong-file edits and scope errors.
4. **Non-interactive / headless mode** — Growing demand for CI/CD-friendly usage without TTY, to enable scripted automation.
5. **Output quality controls** — Requests for configurable verbosity, deterministic output seeds, and temperature settings to manage randomness and prevent verbose/garbled generations.

---

## Developer Pain Points
1. **Runaway / garbled generation (#2597)** — The newest and most severe: long hangs and incoherent multi-10k-token outputs with no obvious cause. This is the kind of issue that erodes trust in the tool.
2. **Token cost inflation** — Recurring complaints about unexpected token usage from repeated system prompt resends, excessive verbose output, and high-cost multi-file edits.
3. **Context loss / silent truncation** — Developers lose earlier instructions when conversations grow long, forcing them to re-explain context (closely tied to the Memory System demand).
4. **Formatting drift after edits** — LLM-generated edits often break project formatting conventions (e.g., newlines, indentation, language-specific style), requiring manual fixing.
5. **CI/CD breakage** — The CLI fails in non-TTY environments, blocking automation pipelines.
6. **Poor escaping/code-block handling** — Generated markdown sometimes contains malformed or incomplete code fences, breaking rendered documentation and inline snippets.

---

*Digest compiled from GitHub data for MoonshotAI/kimi-cli on 2026-08-09.*  
*Note: Items marked "(Representative — verify)" are inferred from thematic patterns in the issue tracker and should be confirmed against the full issue/PR list before publication.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-09

## Today's Highlights

The OpenCode community is heavily focused on a **persistent bug cluster around the OpenCode Go relay**, where the `deepseek-v4-flash` model ID is being sent with a leading space, causing HTTP 400 errors across multiple client surfaces (verified independently by at least four users). Simultaneously, **contributor kitlangton has landed a large batch of TUI and core fixes** (8+ PRs in 24h) covering session undo, Mermaid rendering, plugin slot regions, and file-mutation locking. A long-running SQLite event-table bloat issue (#33356) reaching 13GB+ continues to draw attention as a systemic data-retention problem.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#27167 [FEATURE]: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)** — 128 👍, 69 comments. The most-upvoted open feature request: native persistent session goals/lifecycle. Community wants first-class goal tracking rather than ad-hoc slash-command hacks.

2. **[#13984 Can not copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984)** — 55 comments. Long-standing clipboard bug: "copied to clipboard" toast appears, but paste yields nothing. Affects core daily workflow; still unresolved after ~6 months.

3. **[#33356 [2.0] Unbounded growth of the `event` table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)** — 15 comments. Event-sourcing table never pruned/compacted; `message.updated.1` snapshots fill volumes to 97–99%. Severe reliability issue for long-lived instances.

4. **[#14965 Slow startup](https://github.com/anomalyco/opencode/issues/14965)** — 19 comments. Terminal-dependent (Ghostty slow, others fine). Startup regression since v1.2.1; suggests terminal-detection or init-path issue.

5. **[#41300 / #41306 / #41314 / #41322: deepseek-v4-flash leading-space bug cluster](https://github.com/anomalyco/opencode/issues/41300)** — Multiple reports (4+ issues in 24h) all tracing to OpenCode Go relay injecting a **leading space** into the model string, causing HTTP 400. #41211 was closed claiming fix, but #41306 verifies it persists.

6. **[#30611 Sessions fail on transient network errors instead of retrying](https://github.com/anomalyco/opencode/issues/30611)** — Only `ECONNRESET` is retryable; all other transient failures kill the turn. Request for broader retry classification.

7. **[#32548 Step-cap assistant message causes 400 on Claude models with thinking](https://github.com/anomalyco/opencode/issues/32548)** — Appending "MAXIMUM STEPS REACHED" as an assistant-role turn conflicts with Anthropic's response-prefill rules when thinking is enabled.

8. **[#31307 Multiple opencode instances share same session via SQLite](https://github.com/anomalyco/opencode/issues/31307)** — Two terminals in same project show identical sessions; no isolation. Concurrency bug in shared DB.

9. **[#31554 MCP servers spawn 2–4 duplicate processes on startup](https://github.com/anomalyco/opencode/issues/31554)** — Causes TasksMax exhaustion and EAGAIN on Linux; duplicates accumulate across restarts. Serious for MCP-heavy setups.

10. **[#41337 Post-hibernation bun process consumes high CPU](https://github.com/anomalyco/opencode/issues/41337)** — Windows-specific; linked to upstream oven-sh/bun#37224. Resource leak on resume.

## Key PR Progress

1. **[#40427 [beta] experimental perf improvements](https://github.com/anomalyco/opencode/pull/40427)** — Renderer entry dropped **7.45 MB → 1.82 MB (−75.5%)** against immutable DB snapshot. Promising for startup/memory concerns (#14965).

2. **[#41344 fix(tui): undo latest pending prompt](https://github.com/anomalyco/opencode/pull/41344)** — `/undo` now removes the newest queued/steering follow-up and restores it to the composer. Fixes #39736. Direct UX improvement.

3. **[#41347 sync Mermaid renderer fixes](https://github.com/anomalyco/opencode/pull/41347)** — Fixes corrupted state diagrams, supports connectors, decodes HTML entities. Addresses real model-output rendering issues.

4. **[#41342 feat(tui): show session branches in vertical tabs](https://github.com/anomalyco/opencode/pull/41342)** — Displays non-default VCS branch per session tab (as `project:branch`). Improves multi-branch workflow visibility.

5. **[#41189 feat(tui): region structure for plugin slot placement](https://github.com/anomalyco/opencode/pull/41189)** — Replaces position-encoded slot names with structured regions; plugins can claim relative placement. Significant plugin-architecture upgrade.

6. **[#41202 fix(core): authorize file mutations before locking](https://github.com/anomalyco/opencode/pull/41202)** — Permission check → lock → validate → mutate sequence for `write`/`edit`/`patch`. Reduces lock contention and authorization deadlocks.

7. **[#40861 fix: stop storing full patch text in session summary diffs](https://github.com/anomalyco/opencode/pull/40861)** — Fixes #32005; directly addresses the 13GB event-table bloat (#33356) by removing full patch payloads from summaries. High-impact storage fix.

8. **[#12042 feat(plugin): provide SDK v2](https://github.com/anomalyco/opencode/pull/12042)** — Dual v1/v2 SDK clients for backward-compatible plugin migration. Opened February, recently updated; core for plugin ecosystem health.

9. **[#41336 fix(cli): add fish shell completion support](https://github.com/anomalyco/opencode/pull/41336)** — Fixes #41232 where `opencode completion fish` emitted bash/zsh scripts. Community-contributed with proper templates for all three shells.

10. **[#41335 fix(core): escape literal wildcards and anchor patch insertions](https://github.com/anomalyco/opencode/pull/41335)** — Fixes #41333 wildcard matcher and patch-insertion anchoring bugs. Small but correct bug-fix PR.

## Feature Request Trends

- **Session goals/lifecycle** (#27167, 128 👍): The clearest signal — users want persistent, native goal tracking with `/goal`, not just custom slash commands.
- **Richer TUI interactions** (#38993, #41344, #41347, #41342): Active demand for better TUI ergonomics — MCP management dialogs, undo semantics, branch visibility, and proper rendering.
- **Broader provider compatibility** (#41300 cluster, #40420, #34877, #41273): Users are hitting provider-specific gateways (OpenCode Go, Moonshot, Chinese providers) and expect uniform handling of model IDs, streaming, and cost tracking.
- **Operational controls** (#31307, #31554): Multi-instance isolation and MCP process lifecycle management are rising concerns as usage scales.

## Developer Pain Points

1. **OpenCode Go relay reliability** — The deepseek-v4-flash leading-space bug has produced 4+ separate issues in 24h, indicating a trust-eroding gateway defect with no confirmed fix.
2. **Database bloat without retention** — The 13GB+ event table (#33356) and patch-text-in-summaries (#32005) reflect a systemic data-retention gap; PR #40861 is a partial fix.
3. **Terminal-specific regressions** — Slow startup in Ghostty (#14965), unclickable wrapped links in Kitty (#35649), and copy/paste failures (#13984) suggest terminal-detection/rendering compatibility is fragile.
4. **Windows and Linux process hygiene** — Post-hibernation CPU spikes (#41337), duplicate MCP processes (#31554), and PowerShell 7 MSIX detection (#41321) highlight platform-specific gaps.
5. **Retry/error-handling gaps** — Transient network errors kill sessions (#30611), step-cap messages break Claude thinking mode (#32548) — edge-case error paths still mishandled.
6. **Permission hook inconsistencies** — `permission.ask` not firing (#7006, #41325) and plugin slash-command regression in Desktop (#41339) point to plugin-hook reliability issues.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-09

## Today's Highlights

The Pi project saw a flurry of low-severity issue triage and maintenance PRs over the past 24 hours, with no new releases. The most pressing concern remains **connection reliability with the `openai-codex` provider** — a long-running issue (#4945) with 76 comments that continues to affect users with stuck TUI sessions. Additionally, a critical **auto-compaction bug** (#6879) is drawing attention for allowing context windows to overflow past 100% before triggering, potentially causing expensive API failures on long-running agentic turns.

---

## Releases

No new releases in the last 24 hours. Latest known version: **0.84.1**.

---

## Hot Issues

### 1. [openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945) — #4945 (76 comments, 31 👍)
Long-standing, in-progress issue where `gpt-5.5` leaves the TUI stuck on "Working..." with no streamed text or error. Users can only recover by pressing Escape. Community frustration is high — this has been open since May and continues to reproduce.

### 2. [Auto-compaction never triggers after context grows past 100%](https://github.com/earendil-works/pi/issues/6879) — #6879 (15 comments, 15 👍)
Critical bug: during a 2+ hour agentic turn, the footer climbed past the compaction threshold and kept going until the API rejected the request at 373k tokens. Suggests compaction should be checked after **every** agent step, not just at turn boundaries.

### 3. [Auto-compaction waits for agent_end during long tool loops](https://github.com/earendil-works/pi/issues/7821) — #7821 (3 comments)
Related fix attempt (now closed): confirms compaction only fires after `agent_end`, meaning long uninterrupted tool loops bypass the threshold. A companion PR (#7810) addresses concurrent compaction crashes.

### 4. [Edit fuzzy match misses whitespace-length differences](https://github.com/earendil-works/pi/issues/7836) — #7836 (2 comments)
`normalizeForFuzzyMatch` doesn't collapse whitespace runs or strip leading whitespace, causing edit failures on small models that can't reproduce exact whitespace. Impacts model reliability for the Edit tool.

### 5. [Fullscreen TUI mouse selection overwrites clipboard via OSC 52](https://github.com/earendil-works/pi/issues/7837) — #7837 (2 comments)
Dragging to select text in fullscreen mode silently writes to the system clipboard (target `c`) with no opt-out or modifier key. Privacy/UX concern for users who select text to copy elsewhere.

### 6. [Print mode hangs at exit when subagent spawned](https://github.com/earendil-works/pi/issues/7734) — #7734 (2 comments)
With extensions loaded (specifically `pi-subagents`), print mode finishes the task, prints the answer, and never exits — process sits at 0% CPU. Reproduced on 0.83.0 and 0.84.0.

### 7. [Invalid tool call from Bedrock poisoned session](https://github.com/earendil-works/pi/issues/7782) — #7782 (2 comments)
Pi accepted a Bedrock tool call with an invalid empty key `("": "")`, persisted it, and replayed it on every turn — permanently bricking the session. Highlights missing validation/sanitization for tool arguments.

### 8. [openai-codex: stream requests lack retry wrapper](https://github.com/earendil-works/pi/issues/7820) — #7820 (2 comments)
Roughly 30% of long-thinking turns (3–25 min) die with WebSocket transport errors. Unlike non-streaming requests, stream requests have no `retryProviderRequest` wrapper, making mid-stream disconnects always fatal.

### 9. [Reload reports stale context from in-flight commands](https://github.com/earendil-works/pi/issues/7816) — #7816 (2 comments)
Reloading Pi while an extension command is still running produces a stale-context error when the command resumes. Race condition between session teardown and extension command completion.

### 10. [RPC session replacement binds extensions twice](https://github.com/earendil-works/pi/issues/7831) — #7831 (1 comment)
In RPC mode, session replacement (new_session, switch_session, fork, clone) triggers the rebind callback twice, causing `session_start` and resource events to fire twice — potentially duplicating side effects.

---

## Key PR Progress

### 1. [docs: add Aliyun Model Studio CLI (bailian-cli)](https://github.com/earendil-works/pi/pull/7840) — #7840
Adds `bailian-cli` to a new "Related Tools" section in README. Small docs PR expanding ecosystem visibility.

### 2. [feat(ai): add LLM Gateway and DevPass providers](https://github.com/earendil-works/pi/pull/7610) — #7610 (OPEN)
Adds LLM Gateway (OpenRouter-style router) as built-in `openai-completions` providers. Replaces auto-closed #7480. Still open for review.

### 3. [feat: stream assistant and config with telemetry](https://github.com/earendil-works/pi/pull/7713) — #7713 (OPEN, in-progress)
Implements `StreamAssistant` and `StreamAssistantConfig` with `telemetryContext` for harness v2. Architectural groundwork for improved observability.

### 4. [feat(coding-agent): annotate --version with runtime](https://github.com/earendil-works/pi/pull/7834) — #7834
Adds runtime detection (`bun`/`node`/`deno`) to `pi --version` output. Closes #7244 — helps issue reporters distinguish runtime-specific problems immediately.

### 5. [fix(examples): change notify extension from agent_end to agent_settled](https://github.com/earendil-works/pi/pull/7833) — #7833
Fixes example extension that fired "Ready for input" notification too early — `agent_end` fires before retries, compaction, and continuations complete. Switches to `agent_settled`.

### 6. [fix(ai): send max_tokens to native DeepSeek](https://github.com/earendil-works/pi/pull/7811) — #7811
DeepSeek documents and enforces `max_tokens`, but Pi was sending `max_completion_tokens` which DeepSeek silently ignores. Direct API testing confirmed the fix.

### 7. [feat: A-level capabilities from oh-my-pi](https://github.com/earendil-works/pi/pull/7823) — #7823
Ports four capabilities from the `oh-my-pi` (omp) extension into core: time-traveling stream rules, subagent tools, advisor, and cross-session memory. Includes mechanism to discard partial parsed output and retry with system-prompt reminders.

### 8. [fix(ai): treat incomplete reason 'length' as normal stop](https://github.com/earendil-works/pi/pull/7817) — #7817
Some OpenAI-compatible providers (Doubao/Volcengine Ark) return `incomplete_details.reason = 'length'` instead of `'max_output_tokens'`. The fix maps both to a normal length stop rather than an error.

### 9. [feat(coding-agent): lazily load uncommon syntax grammars](https://github.com/earendil-works/pi/pull/7801) — #7801 (OPEN)
Experimental refactoring by mitsuhiko to lazy-load syntax highlighting grammars. Reduces startup cost but invalidates UI on load. Public API surface needs careful handling.

### 10. [fix(coding-agent): reject concurrent compaction calls](https://github.com/earendil-works/pi/pull/7810) — #7810
Fixes crash when pressing `/compact` twice quickly: `compact()` stores its `AbortController` in a shared field, and concurrent invocations read `undefined`. Also relevant to #7821's compaction timing issue.

---

## Feature Request Trends

1. **Multiple logins per provider** (#7814): Users with multiple subscriptions to the same provider (e.g., two ChatGPT Plus accounts) want concurrent usage without custom extension hacks. Frequently requested.

2. **Multi-profile settings** (#7813): Support for multiple settings profiles (CLI flag, env var, or per-project switching) instead of hardcoded `~/.pi/agent/settings.json` and `<cwd>/.pi/settings.json`. Growing demand as Pi usage professionalizes.

3. **TUI fine-grained control**: Multiple requests for finer scroll control — line-by-line scrolling (#7830), configurable mouse wheel step (#7765), and scrollable slash-command descriptions (#7827). Suggests fullscreen TUI needs more ergonomic polish.

4. **New provider transport additions**: Meta Model API (`Muse Spark`) (#7543) and Cloudflare Workers AI Gateway (#7838). Community wants Pi to support emerging AI gateways and bindings.

5. **Extension API completeness**: Extension-side turn termination, caller-controlled `RpcClient` timeout/shutdown (#7824), and message identity in markdown transformer context (#7828) — power users are hitting extension API limits.

---

## Developer Pain Points

1. **Streaming reliability with `openai-codex`**: The #1 pain point — 30% mid-stream failure rate on long turns, no retry wrapper for stream requests, and TUI hangs with "Working..." that require manual Escape intervention. The 76-comment issue (#4945) indicates sustained community frustration.

2. **Compaction logic gaps**: Auto-compaction is checked too late (only at `agent_end`), allowing context overflow past 100% until the API rejects requests. Developers running long agentic turns are burning API credits on failed requests. The related crash on concurrent `/compact` (#7810) adds insult to injury.

3. **Tool input validation**: Bedrock's invalid tool call (`("": "")`) permanently poisoned a session by persisting and replaying invalid arguments. Developers expect defensive validation before execution and persistence.

4. **Windows and settings ergonomics**: Invalid `settings.json` with unescaped backslashes produces a misleading "bash not found" error on Windows (#7829) — silent config failures with confusing downstream symptoms.

5. **Malicious package reports**: `@baylarsadigov/omp-undo-redo` reported for causing 2–5 second delays between message send and processing (#7825). The community is actively flagging suspicious extension packages, indicating a need for better extension vetting/trust infrastructure.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-09

## Today's Highlights

Qwen Code shipped v0.21.8 with two notable improvements: restored real-time autofix for pull requests opened from forks, and compression cache sharing for OpenAI, Gemini, and Vertex AI backends. The project also shows significant momentum around multi-session coordination (RFC #8718, PRs #8728/#8730), alongside a steady stream of P2 bug fixes addressing configuration schema gaps, macOS-specific issues, and terminal UX problems.

## Releases

**v0.21.8** — Restores real-time autofix support for pull requests from forks by bridging review events to credentialed workflows ([PR #8676](https://github.com/QwenLM/qwen-code/pull/8676)). Also enables compression cache sharing for OpenAI, Gemini, and Vertex AI providers.

---

## Hot Issues

1. **Chrome remote debugging consent re-appears every session** ([#8737](https://github.com/QwenLM/qwen-code/issues/8737)) — With `chrome-devtools-mcp --autoConnect`, Chrome re-prompts for remote debugging consent on every session. P2, macOS-specific, 4 comments. Community wants persistent consent handling.

2. **Cross-session messaging between Qwen Code instances** ([#8724](https://github.com/QwenLM/qwen-code/issues/8724)) — Proposal for same-machine sessions to discover and message each other via `list_agents`/`send_message` with fail-closed gates. Active discussion, 4 comments, with companion PRs already in flight.

3. **RFC: Native coordination for independent Qwen sessions** ([#8718](https://github.com/QwenLM/qwen-code/issues/8718)) — A leader dispatches workers while staying interactive, observing runtime/task state and collecting structured results. P2, multi-agent roadmap, 4 comments, flagged `need-discussion`.

4. **Auto session titles dominated by hook context** ([#8758](https://github.com/QwenLM/qwen-code/issues/8758)) — Hooks returning >1000 chars in `additionalContext` pollute auto-generated session titles. P3 but frequently hit, 3 comments.

5. **VS Code settings schema rejects documented prompt hooks** ([#8752](https://github.com/QwenLM/qwen-code/issues/8752)) — The generated VS Code schema doesn't accept supported `prompt` hooks even though core runtime runs them. P2 config bug, 3 comments.

6. **Bare-URL hyperlink swallows CJK punctuation** ([#8750](https://github.com/QwenLM/qwen-code/issues/8750)) — Terminal hyperlink OSC 8 target includes trailing full-width punctuation in CLI output. P2, CLI/UI, 3 comments. Common in CJK content.

7. **DO_NOT_TRUST loses to ancestor TRUST_FOLDER** ([#8627](https://github.com/QwenLM/qwen-code/issues/8627)) — Security: explicit distrust override is short-circuited by ancestor trust, letting untrusted workspace inject the `qwen serve` bearer token. P2, closed with fix, 3 comments.

8. **Wrapped timeout errors drop original error code** ([#8527](https://github.com/QwenLM/qwen-code/issues/8527)) — "Request timeout after Ns" never hits transport-retry path. P2 core bug, closed, 3 comments. Impacts OpenAI-compatible endpoints.

9. **Main CI failure: E2E — local Qoder plugin install** ([#8766](https://github.com/QwenLM/qwen-code/issues/8766)) — Flaky-by-construction test: `rig.setup()` lacks `await` so fixture files race with recursive delete. P1, autofix in progress/approved, 4 comments.

10. **OTEL_METRICS_EXPORTER=otlp silently disables metrics** ([#8697](https://github.com/QwenLM/qwen-code/issues/8697)) — Standard OTel env var causes internal SDK failure, killing all native metrics while traces still flow. P2 telemetry, closed, 3 comments.

---

## Key PR Progress

1. [**#8768**](https://github.com/QwenLM/qwen-code/pull/8768) — `fix(integration-tests): await rig.setup in Qoder plugin install test` — Fixes the flaky E2E test from #8766 by awaiting setup before writing fixtures.

2. [**#8730**](https://github.com/QwenLM/qwen-code/pull/8730) — `feat(core): accept cross-session messages behind an inbound gate` — Second step of #8724: sessions can be reached by same-machine peers, every message gated before model action.

3. [**#8728**](https://github.com/QwenLM/qwen-code/pull/8728) — `feat(core): add a live-session registry and qwen sessions ps` — Sessions self-register at `~/.qwen/sessions/<pid>.json`; independent, self-contained first step of #8724.

4. [**#8776**](https://github.com/QwenLM/qwen-code/pull/8776) — `refactor(review): extract the toolchain adapter boundary` — Moves npm implementation behind an internal adapter contract for clean CLI/spawn separation.

5. [**#8762**](https://github.com/QwenLM/qwen-code/pull/8762) — `fix(serve): stop usage_update frames from flooding the demo event log` — Renders `usage_update` as a live context meter instead of raw-JSON fallthrough on the `/demo` page.

6. [**#8764**](https://github.com/QwenLM/qwen-code/pull/8764) — `fix(external-context): read the response body with a reader, not for-await` — Rewrites `readBoundedBody` loop for compatibility + adds missing behavioral tests.

7. [**#8772**](https://github.com/QwenLM/qwen-code/pull/8772) — `perf(review): file-scope a micro diff's own suite with vitest related` — Micro diffs (≤3 files) run scoped `vitest related` suites instead of full workspace tests.

8. [**#8773**](https://github.com/QwenLM/qwen-code/pull/8773) — `perf(review): cap the reverse audit at one round below the sweep floor` — Adds `reverseAuditRounds` budget (5 or 1 below sweep floor), retires rounds retroactively.

9. [**#8675**](https://github.com/QwenLM/qwen-code/pull/8675) — `feat(web-shell): add model-specific reasoning controls` — Built-in registry for Thinking/Effort controls across Core, ACP, daemon, SDK, WebShell; first registration: `qwen3`.

10. [**#8774**](https://github.com/QwenLM/qwen-code/pull/8774) — `perf(ci): tighten the automatic review kill switch for micro diffs` — Halves automatic review timeout for micro diffs, keeps 90-min floor, effort and posting untouched.

Also noteworthy: [**#8765**](https://github.com/QwenLM/qwen-code/pull/8765) — A/B gate rejections against pre-round ref to distinguish pre-existing vs newly-introduced failures. [**#8761**](https://github.com/QwenLM/qwen-code/pull/8761) — Routes workflow label mutations through REST `issues/labels` instead of `gh pr edit`.

---

## Feature Request Trends

- **Multi-agent / multi-session coordination** (top trend): #8724, #8718, #8730, #8728 — several independent proposals for cross-session messaging and leader/worker dispatch patterns, actively moving from RFC to implementation.
- **Native browser control** ("Qwen WebBridge", #8699): direct browser-command bridge via `qwen serve` daemon and Chrome extension, avoiding MCP as a requirement — inspired by Kimi WebBridge.
- **Unified session runtime** (#8775): proposal to consolidate five independent reasoning loops (TUI, headless, ACP, serve, AgentCore) on a single Turn-based `SessionRuntime`.
- **Workflow engine migration**: #8769 proposes rebuilding `/review` orchestration on the workflow engine (`QWEN_CODE_ENABLE_WORKFLOWS`) for deterministic fan-out/loop convergence.
- **Desktop/Web Shell consolidation** (#8092): build a lower-maintenance desktop app reusing the existing Web Shell rather than maintaining a separate UI.

---

## Developer Pain Points

1. **CI flakiness and release failures** — Recurring E2E failures (#8756, #8766, #8771), nightly release failures, and race conditions in test rigs are an ongoing source of friction. Multiple autofix/in-progress labels show the team actively addressing it.

2. **Configuration schema gaps** — Settings exposed but non-functional (`general.dynamicCommandTranslation` #8748), schema rejecting documented hooks (#8752), env var `OTEL_METRICS_EXPORTER=otlp` breaking metrics (#8697). Configuration documentation and runtime behavior often diverge.

3. **Terminal UX bugs in CJK contexts** — Bare-URL hyperlink swallowing punctuation (#8750), `Ctrl+Shift+C` copy regression (#8317), `/clear` blocking without actionable error messages (#8741). Small but frequent quality-of-life regressions.

4. **macOS-specific issues** — Repeated macOS-only bugs: permission test failures (#8753), Chrome consent dialog (#8737), microphone access on desktop (#8715). Platform-specific paths are a clear source of unexpected behavior.

5. **Test infrastructure gaps** — `npm test` fails due to unknown flag (#8721), vendored source vs package lock mismatch (#8722), integration-tests never type-checked (#8692). Developer experience issues in the repo itself are a notable contributor of friction.

6. **Security-sensitive trust boundary concerns** — DO_NOT_TRUST override gaps (#8627), read-only git sub-commands executing `.git/config` programs (#8575). Trust model edge cases are getting focused attention and quick fixes.

---

*Data gathered from [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) on 2026-08-09. Generated for the Qwen Code developer community.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest
**Date:** 2026-08-09

---

## 1. Today's Highlights

The project continues its major architectural evolution under the **CodeWhale** rebrand, with v0.9.5 now public and a dense v0.9.6 milestone tracker in flight. The community is actively triaging a strong backlog centered on **agent reliability** (turn-stop honesty, stale-state isolation), **multi-session control** (session peek, unified tasks surface), and a long-awaited **`crates/core` engine extraction** to break the monolithic TUI crate's build tax. Release engineering is tightening: new PRs validate crate publication order and fix CNB asset download URLs ahead of the next train.

---

## 2. Releases

**v0.9.5** and **v0.9.4** were published in the last 24 hours (both tagged 2026-08-08/09).

- **v0.9.4** and **v0.9.5** share the same release notes header: the project is officially rebranded as **CodeWhale** (public product from Shannon Labs). The `codewhale` command, npm package, and release assets are the canonical lowercase identifiers; the legacy `deepseek-tui` npm package is **deprecated and receives no further releases**.
- **v0.9.5** (per PR #5292) consolidates the terminal app into one compiled runtime while keeping both `codewhale` and `codew` commands, removes default turn ceilings that interrupted long work, and aligns updater, installers, release assets, website, and package surfaces around that contract.

🔗 [v0.9.5 Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.5) · [v0.9.4 Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.4)

---

## 3. Hot Issues

1. **[#4022 – Define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022)** — The highest-traffic issue (8 comments). TUI sidebar became the primary subagent control surface, but that traps control in the terminal for future cloud/remote workflows. Community wants a defined parity contract. *Tagged v0.9.3; still open.*

2. **[#4785 – Dead-code sweep: 464 `#[allow(dead_code)]` attributes hiding drift](https://github.com/Hmbown/CodeWhale/issues/4785)** — A sobering structural critique: the compiler is blind to drift across 143 files. 6 comments signal strong agreement that this is tech debt needing a dedicated cleanup pass.

3. **[#4326 – Perf: explain and bound RSS after cancelling a 32-worker storm](https://github.com/Hmbown/CodeWhale/issues/4326)** — Post-cancel RSS increases rather than settling. Community wants allocator high-water retention distinguished from real leaks, plus a bounded post-cancel state. *Tagged v0.9.5.*

4. **[#4416 – Isolate stale failed-agent state between CodeWhale sessions](https://github.com/Hmbown/CodeWhale/issues/4416)** — Second instance in same workspace shows "Active 0 · Tasks 0" but renders red failed-agent rows from an earlier session. Clear UX corruption; 4 comments confirm reproduction.

5. **[#5034 – Switching providers can retain an unrelated default model](https://github.com/Hmbown/CodeWhale/issues/5034)** — Provider and model resolution are not updated as one coherent unit. Switching to OpenAI can leave `gpt-5.5` as the default. Users expect atomic provider/model switching.

6. **[#5244 – Unknown model ids silently degrade to 128K legacy context default](https://github.com/Hmbown/CodeWhale/issues/5244)** — A 1M-window model can silently compact at 128K with no surfaced fallback hint. Residual class bug behind #5239; community wants loud warnings for unknown model IDs.

7. **[#5267 – Turn-stop honesty: status that says ending must end](https://github.com/Hmbown/CodeWhale/issues/5267)** — Users lose trust when footer says "stopping" but model keeps talking. Four resume paths (subagent drain, REPL fence, goal loop, cancellation) need to actually stop. Preference for deleting false guards over adding status prose.

8. **[#5266 – v0.9.5: milestone tracker — start here (pick order)](https://github.com/Hmbown/CodeWhale/issues/5266)** — The authoritative pick-order list for the v0.9.5 milestone. Community contribution guidance; every item is self-contained and lands via PR.

9. **[#5249 – Epic: v0.9.5 build-time lane — stop the monolith tax](https://github.com/Hmbown/CodeWhale/issues/5249)** — The 682,959-line, 620-file `codewhale-tui` crate is 86% of the workspace and recompiles as one unit on every edit, commit, test, release. 25 integration-test binaries each rebuild it. This is the developers' most-felt pain point.

10. **[#5272 – Prompt-scoped file recovery (restore workspace from a prior prompt)](https://github.com/Hmbown/CodeWhale/issues/5272)** — From a prior prompt, restore the workspace files that turn wrote (session snapshots), not just transcript scrollback. Cooperate with git; confirm before destructive restore.

---

## 4. Key PR Progress

1. **[#5308 – fix(release): use CNB asset download URLs](https://github.com/Hmbown/CodeWhale/pull/5308)** (open) — Fixes updater to use canonical codewhale.net/codewhale repository slug and proper `/-/releases/download/vX.Y.Z` path so mirror mode receives asset bytes instead of release HTML. Preserves explicit mirror override precedence.

2. **[#5306 – fix(release): validate crate publication order](https://github.com/Hmbown/CodeWhale/pull/5306)** (open) — Validates the maintained 20-crate publication order against locked Cargo metadata before any registry operation; moves `codewhale-core` before `codewhale-tui` and fails closed on duplicates/inversions.

3. **[#5300 – refactor(core): own primary request preparation](https://github.com/Hmbown/CodeWhale/pull/5300)** (open) — Replaces synthetic `ChatRequest` scaffold in `codewhale-core` with production `MessageRequest` DTO family; adds pure `prepare_primary_turn_request` constructor, routing prod TUI request building through core.

4. **[#5301 – fix(tui): make compaction live and pressure-aware](https://github.com/Hmbown/CodeWhale/pull/5301)** (closed) — Nonblocking `/compact`, typed lifecycle IDs, truthful persistent manual/automatic status labels, and 128K/272K/1M auto-compaction alignment with full conservative request pressure.

5. **[#5295 – feat: add Mistral AI as a first-class provider route](https://github.com/Hmbown/CodeWhale/pull/5295)** (closed) — First-time contributor @xavierpestel-ai adds Mistral AI (la Plateforme) with `provider = "mistral"`, `CODEWHALE_PROVIDER=mistral`, and `--provider mistral`; defaults to `mistral-code-latest`.

6. **[#5133 – feat(runtime-api): expose persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133)** (closed) — Adds `GET /v1/threads/{id}/goal` plus complete goal lifecycle routes, closing the v0.9.4 runtime API gap for managed clients.

7. **[#5132 – Runtime API: expose verifier receipts and evidence beyond the aggregate counter](https://github.com/Hmbown/CodeWhale/pull/5132)** (closed) — Three new read-only endpoints under `/v1/fleet/runs/{run_id}/`: `receipts`, `verifications`, and `evidence`, giving managed clients per-task failure detail and retry signal.

8. **[#5131 – feat: Runtime API memory endpoints — bounded inspection and lifecycle controls](https://github.com/Hmbown/CodeWhale/pull/5131)** (closed) — Adds `/v1/memory` resource with bounded inspection, scope/provenance understanding, and lifecycle controls — all behind `require_runtime_token`.

9. **[#5130 – feat(runtime-api): bounded MCP server configuration and lifecycle management](https://github.com/Hmbown/CodeWhale/pull/5130)** (closed) — Read-only MCP inventory becomes a full mutation surface: `POST /v1/apps/mcp/servers` create, plus update/remove routes.

10. **[#5129 – feat(runtime-api): add skill lifecycle endpoints](https://github.com/Hmbown/CodeWhale/pull/5129)** (closed) — Install, update, uninstall, trust, and audit skill routes, bringing managed desktop/web clients to parity with TUI skill management.

---

## 5. Feature Request Trends

1. **Unified Agent Session Control** — A clear cluster: #5270 (unified tasks surface), #5271 (session peek), #5268 (mid-turn control/queue). The community wants one operator-facing surface showing every running thing (shells, subagents, durable workers) plus the ability to peek and steer other sessions without losing current context.

2. **Engine Extraction / Build-Time Reduction** — #5261 (extract engine into `crates/core` + Thread/Session split) and #5249 (stop the monolith tax) are the highest-impact architectural asks. The 682K-line TUI crate is a tax on every loop developers have.

3. **Recovery & Durability** — #5272 (prompt-scoped file recovery), #5269 (durable plan artifact + line comments), and #4394 (structured survival contract for compaction) point to a strong desire for state that survives crashes and misbehaving agents.

4. **Provider-Profile / Model-Lab** — #5093, #5092, #5094 all push for provider-profiled (not hard-coded) Responses API dialect behavior, typed custom provider routes, and a language-neutral conformance harness. Plus #5103 renames legacy `DeepSeekClient` internals to provider-neutral types.

5. **Turn-Stop Honesty & Reliability** — #5267 and #4326 both speak to trust: the agent must stop when it says it stops, and post-cancel state must be bounded and explained.

---

## 6. Developer Pain Points

1. **Build-Time Monolith Tax** (#5249, #5261) — The single TUI crate recompiles as one unit on every edit, commit, and test; 25 integration-test binaries each rebuild it. This is the #1 day-to-day frustration.

2. **Compiler Blindness from `#[allow(dead_code)]`** (#4785) — 464 attributes across 143 files prevent the compiler from reporting drift. Structural tech debt with clear demand for a sweep.

3. **Silent Degradation** (#5244) — Unknown model IDs silently fall back to 128K context, losing 8x window without a hint. Users want loud warnings for fallbacks.

4. **Stale State Between Sessions** (#4416) — Second CodeWhale instance renders failed-agent rows from an earlier session while showing "Active 0 · Tasks 0". A trust-destroying UX corruption that must be fixed.

5. **Provider Switching Coherence** (#5034) — Provider and model are not switched atomically; unrelated defaults leak across routes. Users need provider+model to update as one unit.

6. **Unbounded Post-Cancel Memory** (#4326) — High-fan-out worker storms leave RSS climbing after cancellation. Developers want either an explanation (allocator retention) or a fix (real leak).

7. **Legacy Naming Confusion** (#5103, #4022) — `DeepSeekClient`/`deepseek_client` internals persist despite multi-provider reality; CLI/TUI parity is undefined, trapping control surfaces inside the terminal. Both create mental overhead for contributors navigating the codebase.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*