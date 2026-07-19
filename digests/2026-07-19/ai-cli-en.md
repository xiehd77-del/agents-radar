# AI CLI Tools Community Digest 2026-07-19

> Generated: 2026-07-19 02:52 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-07-19

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing a **plateau of consolidation** on July 19, 2026, with all seven major tools showing high issue throughput but only modest release velocity. Windows desktop stability, subagent reliability, and OAuth authentication friction emerge as universal pain points across the ecosystem. A notable shift toward **reasoning depth control** and **session lifecycle management** signals that the market is maturing beyond basic chat interfaces into production-grade development environments. While OpenAI Codex and GitHub Copilot CLI lead in community engagement, Kimi Code CLI and DeepSeek TUI show the highest relative velocity in closing critical bugs, suggesting a competitive compression phase where reliability parity becomes the baseline expectation.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Status | Community Signal |
|---|---|---|---|---|
| **Claude Code** | ⚠️ Data unavailable | ⚠️ Data unavailable | Unknown | Summary generation failed |
| **OpenAI Codex** | 10 active, 64 upvotes on #34035 | 10 merged/closed | **rust-v0.144.6 hotfix** + alpha | Highest raw engagement; Windows stability crisis |
| **Gemini CLI** | 10 active, P1 bugs dominating | 5 merged/closed | Nightly v0.52.0 | Strong security focus; OAuth pain point |
| **GitHub Copilot CLI** | 10 active, 62👍 for 1M context | 0 PRs updated | No release | Session reliability regressions; plan-mode bugs |
| **Kimi Code CLI** | 10 active, 1 critical permission bug | 7 merged/3 open | No release | Highest fix velocity relative to issue count |
| **OpenCode** | 10 active, 113-comment megathread | 9 merged/1 open | No release | Memory leaks dominate; V2 regression cluster |
| **Pi** | 10 active (7 closed, 3 open) | 10 merged (9 closed, 1 open) | No release | Quality-of-life bug fixing; compaction focus |
| **Qwen Code** | 10 active, 2 P1 session bugs | 10 merged/closed | **v0.19.12 stable** + nightly | Subagent model leakage; MCP compatibility |
| **DeepSeek TUI** | 10 active, 39-comment alignment bug | 10 merged (9 closed, 1 open) | No release but 20+ PRs merged | High-velocity maintenance; agent governance gap |

**Key Insight:** Over 90 issues and 60+ PRs were actively discussed across the ecosystem in 24 hours. Qwen Code and DeepSeek TUI show the highest release/maintenance cadence among tools with available data.

---

## 3. Shared Feature Directions

| Theme | Tools Involved | Specific Requirements |
|---|---|---|
| **Reasoning Depth Control** | Kimi Code (#2501, #2499), OpenCode (#37696), DeepSeek TUI (#4549) | Runtime toggle for thinking effort via slash commands or UI; configurable defaults |
| **Session/Context Reliability** | OpenAI Codex (#24948, #34076), Gemini CLI (#26522), GitHub Copilot (#3767, #4165), OpenCode (#30443), Qwen Code (#7164) | Large session (<2GB) storage optimization; crash recovery; concurrent writer locking; compaction reliability |
| **Multi-Agent/Subagent Governance** | Gemini CLI (#22323), GitHub Copilot (#4161), OpenCode (#27110), Qwen Code (#7156), DeepSeek TUI (#1186, #4032) | Subagent permission limits; task_complete tool availability; parallel subagent caps; model leakage prevention; persistent execution policies |
| **OAuth/Auth Simplification** | Gemini CLI (#26375, #26993, #28439), Pi (#6814), DeepSeek TUI (#4410) | Native browser-based OAuth flows; retry on timeout; automatic credential refresh; device-code login restoration |
| **CJK/Internationalization** | Kimi Code (#2494), OpenCode (#35601), DeepSeek TUI (#998, #1675) | UTF-8 terminal encoding; Chinese UI localization; desktop menu i18n |
| **MCP/Provider Compatibility** | OpenAI Codex (#32101), Qwen Code (#7147, #6970), Gemini CLI (#21968) | Tool name normalization (dots); deferred MCP discovery; provider-accurate tool schemas |
| **Machine-Parseable Output** | Kimi Code (#2490), Pi (#6808) | `--json` flag for CI/CD; structured output for piping |
| **AST-Aware Tooling** | Gemini CLI (#22745), GitHub Copilot (#4160) | Semantic command analysis; precise file reads reducing token waste |

**Dominant Trend:** Reasoning depth switching and subagent lifecycle management appear across the widest range of tools, indicating that users now expect their CLI tools to support sophisticated, fine-grained control over model behavior—not just basic chat.

---

## 4. Differentiation Analysis

| Dimension | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|
| **Target User** | Professional developers (VS Code/Windows heavy) | Google ecosystem users, agent orchestration | GitHub ecosystem, CI/CD pipelines | East Asian market (CJK focus) | Open-source community, local-first | Power users, multi-provider | QwenLM ecosystem, enterprise | Hackers, multi-provider tinkerers |
| **Platform Strength** | Windows app + VS Code | CLI + OAuth with Google One | CLI + GitHub integrations | TUI-heavy, mobile? | Web + TUI + Desktop | CLI with AI streaming | CLI + ACP + Daemon | TUI with rich model picker |
| **Top Pain Point** | Windows HID deadlock (#33780) | OAuth 429 exhaustion (#26375) | Plan-mode exit hang (#4172) | Permission rule bug (#2508) | Memory leaks (#20695) | Compaction brittleness (#6768) | Subagent model leakage (#7156) | Agent alignment failure (#4032) |
| **Technical Approach** | Rust-based, bundled model metadata | Node.js, skill/subagent system | GitHub API deep integration | Node.js, ACP protocol | TypeScript, local-first DB | TypeScript, Retry/backoff core | Node.js, MCP-first, daemon orchestration | Rust/TUI, provider catalog merging |
| **Release Cadence** | Hotfix + alpha (frequent) | Nightly (automated) | Intermittent | Intermittent | Intermittent | Intermittent | Stable + nightly (high) | High-velocity maintenance burst |
| **Differentiator** | GPT-5.6 model tuning, Code Mode | Google AI ecosystem, Auto Memory | GitHub Copilot billing, autopilot mode | Chinese localization, Moonshot AI | Open-source, Zen cloud, extensible MCP | Anonymized auth, cross-provider | QwenLM integration, daemon cold-start | Rich TUI, model picker perf, v0.9.1 cutover |

**Key Differentiation:** OpenAI Codex and Gemini CLI compete on **model breadth and platform integration** (Windows vs Google Cloud). GitHub Copilot CLI differentiates on **GitHub workflow depth**. Kimi Code and DeepSeek TUI compete on **TUI richness and CJK support**. Pi and OpenCode differentiate on **provider neutrality and open-source ethos**.

---

## 5. Community Momentum & Maturity

| Tool | Community Maturity | Iteration Velocity | Risk Level |
|---|---|---|---|
| **OpenAI Codex** | **Mature.** Largest community (64 upvotes in 24h). Windows stability is endemic but acknowledged. | Medium: Hotfix in 24h, but core issues persist (sessions, HID). | **High churn risk** from Windows regressions if unaddressed. |
| **Gemini CLI** | **Growing but strained.** OAuth friction is alienating paying users. Strong security posture (PR #28403). | Medium-high: Nightly releases, P1 bugs surfaced quickly. | **Medium retention risk** from OAuth reliability. |
| **GitHub Copilot CLI** | **Enterprise-focused but fragile.** 1M context win (#2785) is major. Plan-mode regression (#4172) erodes trust. | Low: No PRs in 24h, no recent release. | **Medium trust risk** from mode transition bugs. |
| **Kimi Code CLI** | **Small but engaged.** 1 critical bug (#2508) under active fix. PR velocity high for issue count. | High: 10 PRs, 7 merged. Fastest fix cycle. | **Low risk** if permission bug (#2508) is patched quickly. |
| **OpenCode** | **Large, vocal.** 113-comment memory megathread (#20695) is a coordination challenge. V2 regression cluster (#37225, #37544). | Medium: 10 PRs, but long-open PRs (since Jan 2026) indicate stalled features. | **Medium retention risk** from V2 regressions and memory leaks. |
| **Pi** | **Small, focused.** Quality-of-life fixes dominate. Compaction brittleness (#6768) is the core pain. | Medium-high: 10 PRs, 9 merged. Clean, targeted fixes. | **Low risk.** Stable trajectory. |
| **Qwen Code** | **Moderate.** 2 P1 bugs (#7156, #7181) under active fix. MCP compatibility is a recurring theme. | High: v0.19.12 stable release + nightlies + 10 PRs. | **Low risk.** Strong release cadence and fix velocity. |
| **DeepSeek TUI** | **High-velocity but noisy.** 20+ PRs in 24h, but agent alignment issue (#4032) has no response. | Very high: 10 merged PRs. Cutting-edge v0.9.1 cutover. | **Medium risk** from unresolved governance gap and trademark issue. |

**Maturity Ranking (by community size + stability):**
1. OpenAI Codex (largest, but risk-prone)
2. OpenCode (large, but regression-heavy)
3. GitHub Copilot CLI (enterprise, but fragile)
4. Gemini CLI (growing, but authentication-fragile)
5. Qwen Code (stable, moderate community)
6. DeepSeek TUI (high-velocity, but noisy)
7. Kimi Code CLI (small, focused)
8. Pi (small, stable)
9. Claude Code (data unavailable)

---

## 6. Trend Signals

### Industry Trends from Community Feedback

1. **Reasoning Depth Becomes a First-Class UX Concept**
   - Users no longer accept "one reasoning effort fits all." The demand for `/effort` commands (#2501, #2499) and adaptive thinking (#37696) across Kimi Code, OpenCode, and DeepSeek TUI signals that **model behavior granularity** is now a competitive differentiator rather than a power-user niche.

2. **Session Reliability Is the New Baseline**
   - Every tool except Pi has at least one open issue about session corruption, escalation, or memory blowup (OpenCode's 113-comment megathread is emblematic). **Session compaction, crash recovery, and concurrent writer protection** are no longer nice-to-haves—they're table stakes.

3. **The Subagent Paradox: Power vs. Control**
   - Gemini CLI's "success" on turn-limit masking (#22323) and Qwen Code's model leakage (#7156) reveal a systemic flaw: **subagents increase capability but decrease predictability**. The community is demanding permission layers (DeepSeek TUI #1186), lifecycle tracking, and explicit completion signals (Copilot #4161). Expect **policy-as-code for subagents** to emerge as a product category.

4. **OAuth Friction Is Driving Users Away**
   - Gemini CLI's 429 exhaustion (#26375), unhandled promise rejections (#26993), and missing login prompt (#28439) are the most painful example, but Pi's OpenRouter OAuth request (#6814) and DeepSeek TUI's broken xAI login (#4410) confirm this is cross-tool. **Providers that simplify auth (device-code, shared auth files) will gain loyalty.**

5. **Platform Wars Are Windows vs. Everything Else**
   - OpenAI Codex's Windows HID deadlock (#33780), Copilot's Windows resume hang (#4165), and OpenCode's infinite compaction loop on Windows (#30443) show that **Windows desktop stability remains the single biggest unsolved problem** in the ecosystem. No tool has a clean Windows story.

6. **MCP Protocol Maturity Is Inconsistent**
   - Qwen Code's dot-in-tool-name rejection (#6970) and tool listing timeouts (#7147) highlight that MCP interoperability is still patchy. **Tool name normalization and provider-accurate schemas** are necessary for MCP to become the universal agent protocol.

7. **CJK and i18n Demand Is Rising**
   - Kimi Code (#2494), OpenCode (#35601), and DeepSeek TUI (#998) all have open CJK rendering or localization issues. **Tools targeting global adoption can no longer ignore non-Latin script support**—it's a friction point that actively blocks users.

### Reference Value for Developers

- **If you build multi-model tools:** Expect user demand for reasoning-depth controls within 12 months. Start with a `/effort` command pattern.
- **If you build agent frameworks:** Invest in session compaction, crash recovery, and concurrent writer locks *before* shipping subagents.
- **If you target enterprise:** OAuth must be rock-solid (retry, timeout, credential refresh). Windows testing must include HID, WSL mounts, and Dropbox File Provider.
- **If you target open-source communities:** Machine-parseable output (JSON flag) and CI/CD integration are now baseline expectations, not features.
- **If you target East Asian markets:** CJK terminal encoding and desktop i18n are non-negotiable. Prioritize them over flashy features.

---

**Conclusion:** The AI CLI ecosystem is converging on a common set of reliability and governance features while diverging on platform and ecosystem integration. The tools that solve **session persistence, OAuth friction, and subagent governance** most effectively will capture the next wave of developer trust.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data as of 2026-07-19** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Skills generated the most community discussion via Pull Request activity:

### 1.1 fix(skill-creator): run_eval.py always reports 0% recall
**PR #1298** | Author: MartinCajiao | **Status: Open**
*[View PR](https://github.com/anthropics/skills/pull/1298)*

Fixes a critical bug where `run_eval.py`—the core evaluation script for the skill-creation pipeline—consistently reports 0% recall regardless of description quality. The fix addresses multiple root causes: incorrect eval artifact installation, Windows stream reading failures, broken trigger detection logic, and parallel worker issues. This PR directly resolves Issue #556 (10+ independent reproductions). The skill-creation toolchain is unusable without this fix, making it the highest-priority operational PR in the repository.

### 1.2 Add document-typography skill
**PR #514** | Author: PGTBoos | **Status: Open**
*[View PR](https://github.com/anthropics/skills/pull/514)*

Prevents orphan word wrap (1–6 words on a new line), widow paragraphs (section headers stranded at page bottoms), and numbering misalignment in AI-generated documents. Addresses a universal pain point: every document Claude generates can suffer from these typographic defects, yet users rarely specify formatting constraints explicitly.

### 1.3 fix(pdf): correct case-sensitive file references in SKILL.md
**PR #538** | Author: Lubrsy706 | **Status: Open**
*[View PR](https://github.com/anthropics/skills/pull/538)*

Fixes 8 case-sensitivity mismatches where `SKILL.md` referenced files in uppercase (`REFERENCE.md`, `FORMS.md`) while the actual files are lowercase (`reference.md`, `forms.md`). This breaks skill functionality on case-sensitive filesystems (Linux, macOS). Highlights the need for cross-platform testing in skill development.

### 1.4 Add ODT skill — OpenDocument text creation and template filling
**PR #486** | Author: GitHubNewbie0 | **Status: Open**
*[View PR](https://github.com/anthropics/skills/pull/486)*

Provides full OpenDocument Format support (.odt, .ods) including creation, template filling, and conversion to HTML. Triggers include mentions of ODT, ODS, LibreOffice, or ISO-standard document formats. Addresses the demand for open-source office format interoperability alongside the existing DOCX skill.

### 1.5 Improve frontend-design skill clarity and actionability
**PR #210** | Author: justinwetch | **Status: Open**
*[View PR](https://github.com/anthropics/skills/pull/210)*

A quality-of-life revision to the frontend-design skill, ensuring every instruction is actionable within a single conversation. Goals include removing ambiguous guidance and making behavioral steering precise enough to deliver consistent UI/UX output.

### 1.6 Add skill-quality-analyzer and skill-security-analyzer
**PR #83** | Author: eovidiu | **Status: Open**
*[View PR](https://github.com/anthropics/skills/pull/83)*

Two "meta skills" for skill development: `skill-quality-analyzer` evaluates across five dimensions (structure, documentation, examples, resources, functionality), while `skill-security-analyzer` audits skills for trust-boundary vulnerabilities. Represents growing community concern over skill quality and supply-chain security.

### 1.7 fix(docx): prevent tracked change w:id collision with existing bookmarks
**PR #541** | Author: Lubrsy706 | **Status: Open**
*[View PR](https://github.com/anthropics/skills/pull/541)*

Fixes document corruption in the DOCX skill when adding tracked changes to documents with existing bookmarks. Root cause: OOXML shares the `w:id` namespace across bookmarks, tracked changes, comments, and move ranges. The skill used hardcoded low IDs (1, 2, 3) that collide with existing bookmarks.

### 1.8 Add self-audit skill (v1.3.0)
**PR #1367** | Author: YuhaoLin2005 | **Status: Open**
*[View PR](https://github.com/anthropics/skills/pull/1367)*

A universal audit skill that performs mechanical file verification (checking every claimed output file exists and is non-empty) followed by a four-dimension reasoning quality audit in damage-severity priority order. Works with any project, tech stack, or model. This signals growing demand for output verification and quality gates.

---

## 2. Community Demand Trends

From Issue analysis, the most-anticipated new Skill directions and ecosystem pain points are:

### 2.1 Trust & Security Architecture
- **Issue #492** (34 comments, 2 👍): Community skills distributed under the `anthropic/` namespace enable trust boundary abuse. Users may grant elevated permissions believing community skills are official. This is the most-discussed issue in the repository, reflecting strong demand for namespace governance, signing, or permission-scoping mechanisms.
- **Issue #1175** (4 comments): Security and context window concerns when handling SharePoint Online documents via agent skills, specifically regarding access control logic embedded in SKILL.md files.

### 2.2 Organization-Wide Skill Distribution
- **Issue #228** (14 comments, 7 👍): Users must manually download .skill files and send them via Slack/Teams. Demand is high for a shared skill library or direct sharing links within Claude.ai organizations.

### 2.3 Skill-Creator Toolchain Reliability
- **Issue #556** (12 comments, 7 👍): The evaluation script (`run_eval.py`) reports 0% trigger rate across all queries, rendering the optimization loop useless. This is backed by 10+ independent reproductions and multiple PRs attempting fixes.
- **Issue #1169** (3 comments): Confirms the same recall=0% issue persists even for literal slash-command queries.
- **Issue #1061** (3 comments, 2 👍): Windows compatibility blockers for the skill-creator scripts (subprocess PATHEXT, cp1252 encoding, select on pipes).
- **Issue #202** (8 comments, closed): The skill-creator skill itself is identified as reading like developer documentation rather than an operational skill, undermining token efficiency.

### 2.4 Agent Governance & Safety
- **Issue #412** (6 comments, closed): Proposal for an `agent-governance` skill covering policy enforcement, threat detection, trust scoring, and audit trails. The skills collection covers creative and enterprise workflows but lacks safety-focused patterns.
- **Issue #1385** (3 comments): Proposal for a three-gate reasoning quality pipeline (pre-task calibration → adversarial review → delivery verification).

### 2.5 Context Optimization
- **Issue #1329** (9 comments): Proposal for a `compact-memory` skill using symbolic notation to compress long-running agent state, addressing the chronic problem of context window exhaustion from verbose persistent memory.

### 2.6 Duplicate Skill Management
- **Issue #189** (6 comments, 9 👍): Installing both `document-skills` and `example-skills` plugins produces identical skills, causing duplicate entries in the context window. The highest-voted issue indicates strong demand for dependency deduplication or plugin namespace isolation.

### 2.7 Cross-Platform Compatibility
- **Issue #29** (4 comments): Skills usage with AWS Bedrock remains unclear.
- **Issue #184** (3 comments, 4 👍): The agentskills.io reference page is broken with "too many redirects."

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land soon:

| PR | Skill | Author | Status | Why It Matters |
|----|-------|--------|--------|----------------|
| **#1298** | fix(skill-creator): run_eval 0% recall | MartinCajiao | Open | Unblocks the entire skill-creation optimization loop; the #1 blocker in the toolchain |
| **#1367** | self-audit (v1.3.0) | YuhaoLin2005 | Open | Mechanical verification + 4-dimension reasoning audit; universal across stacks |
| **#1302** | color-expert | meodai | Open | Comprehensive color expertise (ISCC-NBS, Munsell, XKCD, RAL, CAM16) |
| **#1099** | fix(skill-creator): Windows crash on subprocess | joshuawowk | Open | Fixes `[WinError 10038]` making skill-creator unusable on Windows |
| **#723** | testing-patterns | 4444J99 | Open | Full testing stack coverage: unit, React, E2E, testing philosophy |
| **#525** | pyxel (retro game dev) | kitao | Open | MCP server integration for retro/pixel-art game creation with Pyxel |
| **#509** | CONTRIBUTING.md | narenkatakam | Open | Closes #452; adds community health guidance (currently repo scores 25% on GitHub health metrics) |
| **#362** | fix(skill-creator): UTF-8 panic on multi-byte chars | Mr-Neutr0n | Open | Prevents Rust panics when descriptions contain non-ASCII characters |
| **#539** | fix(skill-creator): warn on unquoted YAML | Lubrsy706 | Open | Catches YAML parsing failures before `safe_load()` silently truncates descriptions |
| **#1323** | fix(skill-creator): trigger detection misses real skill name | Polluelo978 | Open | Another root cause of the 0% recall issue; fixes bail-out on first non-Skill tool |
| **#181** | SAP-RPT-1-OSS predictor | amitlals | Open | Enterprise tabular foundation model for predictive analytics on SAP data |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, cross-platform skill-creation toolchain with accurate evaluation (fixing the 0% recall bug) and proper trust/governance boundaries—without which the entire skills marketplace cannot achieve quality control, organizational distribution, or security assurance.**

*The skill-creator toolchain bugs (#1298, #1099, #1050, #362, #539, #1323) and trust-boundary issue (#492) together account for the majority of all PR/Issue discussion, reflecting that the ecosystem's foundational infrastructure requires stabilization before new Skills can be reliably developed, evaluated, or trusted.*

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-19

## Today's Highlights
A hotfix release (rust-v0.144.6) lands refreshed bundled instructions for GPT-5.6 Sol, Terra, and Luna, correcting their context windows to 272K tokens. The Windows desktop app remains the dominant pain point, with multiple high-traffic issues reporting hangs, freezes, and CPU spikes tied to HID enumeration, WMI, and USB switches. Meanwhile, the community rallies around a feature request (#34035) to make the temporary removal of the 5-hour usage limit permanent, racking up 64 upvotes in 24 hours.

## Releases
- **rust-v0.144.6** — [Full Changelog](https://github.com/openai/codex/compare/rust-v0.144.5...rust-v0.144.6)
  - Bug fix: Refreshed bundled instructions for GPT-5.6 Sol, Terra, and Luna; corrected context windows to 272,000 tokens. (#33972, #34009)

- **rust-v0.145.0-alpha.24** — Alpha release with no detailed changelog.

## Hot Issues (10 selected)

1. **[#33780] Windows app hangs ("not responding") after launch** — Main process blocks forever in HID device enumeration when a single HID device doesn't respond. 28 comments; 6 upvotes. This is the most active Windows stability bug today.
   [Issue](https://github.com/openai/codex/issues/33780)

2. **[#34035] Make the temporary removal of the 5-hour usage limit permanent** — Community overwhelmingly supports keeping the unlimited usage window for Plus/Pro/Business plans. 64 upvotes and 9 comments in one day.
   [Issue](https://github.com/openai/codex/issues/34035)

3. **[#24948] Codex session logs grow to 700MB–2GB** — Repeated compaction history and raw tool output balloon session storage. Affects CLI/TUI users. 13 comments.
   [Issue](https://github.com/openai/codex/issues/24948)

4. **[#21839] Previously-existing sessions with full access require approvals** — Regression where saved sessions now demand re-approval of permissions. 13 comments; affects macOS and Windows.
   [Issue](https://github.com/openai/codex/issues/21839)

5. **[#33884] Windows app enters periodic ~15s AppHang / ~10s responsive cycle** — A lock-step freeze pattern in Codex 26.715. 9 comments.
   [Issue](https://github.com/openai/codex/issues/33884)

6. **[#32530] VS Code Codex panel intermittently stuck loading on Linux** — Local webview assets fail with `net::ERR_FAILED`. 8 comments, 12 upvotes — a major blocker for Linux users.
   [Issue](https://github.com/openai/codex/issues/32530)

7. **[#29499] Codex triggers high CPU usage in WMI Provider Host on Windows** — Persistently elevated CPU even after startup. 6 comments, 6 upvotes.
   [Issue](https://github.com/openai/codex/issues/29499)

8. **[#33307] Pasted code is transformed into formatted rich text** — Markdown conversion of pasted code snippets (e.g., `__init__` becomes **init**). 7 upvotes; affects code review workflows.
   [Issue](https://github.com/openai/codex/issues/33307)

9. **[#32101] GPT-5.6 Code Mode omits tool_search from exec** — Degrades deferred MCP discovery for the new model. 3 upvotes; a key developer experience gap.
   [Issue](https://github.com/openai/codex/issues/32101)

10. **[#34076] Codex desktop loses local project registrations and hides active threads** — CLI/core database remains healthy, but desktop UI goes blank. macOS-specific regression.
    [Issue](https://github.com/openai/codex/issues/34076)

## Key PR Progress (10 selected)

1. **[#34085] Support legacy views for paginated thread history** — Ensures clients using full-history resume work consistently across legacy and paginated threads. (CLOSED)
   [PR](https://github.com/openai/codex/pull/34085)

2. **[#34080] Add audio output support to dynamic tools and code mode** — Introduces `inputAudio` content items, an `audio()` code-mode helper, and MCP audio responses. (CLOSED)
   [PR](https://github.com/openai/codex/pull/34080)

3. **[#34067] Seed realtime V3 sessions with initial text items** — Enables pre-populating realtime session history with user/developer/assistant messages. (CLOSED)
   [PR](https://github.com/openai/codex/pull/34067)

4. **[#34049] Avoid redundant TUI redraws while streaming** — Performance optimization: only redraw when completed lines change the visible tail. (CLOSED)
   [PR](https://github.com/openai/codex/pull/34049)

5. **[#34047] Avoid resending the model for reasoning shortcuts** — Emits only `UpdateReasoningEffort` instead of reapplying the entire model on effort changes. (CLOSED)
   [PR](https://github.com/openai/codex/pull/34047)

6. **[#34045] Render streamed Markdown incrementally** — Retains rendered output for completed Markdown blocks, avoiding full re-renders on each delta. (CLOSED)
   [PR](https://github.com/openai/codex/pull/34045)

7. **[#34038] Handle compressed rollouts in doctor thread inventory** — Prevents false-positive stale database row reports when rollouts are compressed to `.jsonl.zst`. (CLOSED)
   [PR](https://github.com/openai/codex/pull/34038)

8. **[#31781] Bound executor-controlled HTTP response buffering** — Security fix: limits buffering per JSON-RPC frame to prevent unbounded memory retention from untrusted remote exec-servers. ([code-reviewed])
   [PR](https://github.com/openai/codex/pull/31781)

9. **[#33972] Backport refreshed bundled model metadata to 0.144** — Refreshes GPT-5.6 instructions and context-window metadata for the stable release line. (CLOSED)
   [PR](https://github.com/openai/codex/pull/33972)

10. **[#33950] Let users remember the working directory for resumed sessions** — Adds `tui.resume_cwd` with `current` and `session` modes, plus persistent configuration. (CLOSED)
    [PR](https://github.com/openai/codex/pull/33950)

## Feature Request Trends
- **Permanent usage limit removal** (#34035, #30816): Strong demand for lifting the 5-hour daily cap permanently, especially after a successful temporary trial.
- **Multi-Agent lifecycle management** (#33314, #33360): Users want verifiable full-profile application and continuity for custom agents, plus reliable chat handoff.
- **UI localization** (#34078): Chinese (Simplified) UI support requested for the desktop app.
- **Audio tooling** (#34080): Community interest in native audio output across code mode and MCP tools.
- **Disable auto-resolve for questions** (#34079): Users want opt-out of the 60-second auto-resolve timer for questions after plan generation.

## Developer Pain Points
- **Windows desktop stability crisis**: At least 5 distinct issues (#33780, #33884, #29499, #33875, #33924) involve app hangs, freezes, or CPU spikes — often tied to HID, WMI, or USB peripherals. The HID enumeration deadlock (#33780) alone has 28 comments.
- **Session and state loss**: Users frequently report lost projects (#34076), broken thread history (#34085), and re-approval of previously authorized sessions (#21839).
- **Linux VS Code extension fragility**: Two separate issues (#32530, #33649) report the Codex panel stuck in a loading state on Linux, blocking IDE-integrated workflows.
- **TUI performance regression**: Session logs ballooning to 2GB (#24948) and non-incremental TUI redraws are being addressed in recent PRs, but remain painful.
- **MCP and tool-search gaps**: GPT-5.6 Code Mode dropping `tool_search` (#32101) and duplicate MCP processes on Windows (#33946) hinder agent extensibility.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-19

## Today's Highlights

Today's digest surfaces persistent pain points in agent reliability: subagents continue to report `"success"` after hitting turn limits, and Auto Memory's retry logic can grind indefinitely on low-signal sessions. On the security front, a new PR closes a variable expansion bypass in the shell execution checker, while the OAuth ecosystem sees intermittent 429 exhaustion and callback timeout crashes that frustrate paying subscribers.

## Releases

**v0.52.0-nightly.20260719.gacae7124b** — Automated nightly release with no user-facing changelog.  
[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260718.gacae7124b...v0.52.0-nightly.20260719.gacae7124b)

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   (P1, 🐛 bug) A `codebase_investigator` subagent that hits its turn limit reports `status: "success"` and `Termination Reason: "GOAL"`, masking the interruption. The community has flagged this as a critical safety bug—users cannot trust agent completion status. (11 comments, 2 👍)

2. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   (P1, epic) Tracks the expansion of the behavioral eval framework from 76 tests across 6 Gemini models. A follow-up to issue #15300, this work is essential for catching regressions before they ship. (7 comments)

3. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   (P2, epic) Investigates whether AST-aware tooling can reduce turn count and token waste by precisely reading method bounds. Could significantly improve agent efficiency. (7 comments, 1 👍)

4. **[#25166 — Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   (P1, 🐛 bug) After simple CLI commands complete, the shell indicator still shows "Awaiting user input," causing the agent to hang. Reproducible with trivial commands. (4 comments, 3 👍)

5. **[#26375 — 429 RESOURCE_EXHAUSTED on ALL models via OAuth](https://github.com/google-gemini/gemini-cli/issues/26375)**  
   (P1, 🐛 bug) A Google One AI Pro subscriber reports every request—even "hello"—returns 429 when using OAuth. The quota-check endpoint itself fails, making the CLI entirely unusable. (3 comments, 2 👍)

6. **[#28439 — Where is OAuth authentication?](https://github.com/google-gemini/gemini-cli/issues/28439)**  
   (P2, 🐛 bug) Running `gemini` with no config drops a raw error listing env vars instead of prompting an OAuth flow. New users hit an authentication wall. (3 comments)

7. **[#26993 — Unhandled Promise Rejection on OAuth Callback Timeout](https://github.com/google-gemini/gemini-cli/issues/26993)**  
   (P2, 🐛 bug) Slow networks or delayed browser logins cause an unhandled promise rejection during OAuth, crashing the CLI. No retry or timeout handling. (2 comments, 1 👍)

8. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   (P2, 🐛 bug) Auto Memory marks sessions as processed only when the extraction agent reads them with `read_file`. Low-signal sessions are skipped but remain unprocessed, so they surface again and again. Root cause of runaway retries. (5 comments)

9. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   (P2, 🐛 bug) Even when custom skills (gradle, git) are defined with clear descriptions, the model rarely invokes them autonomously. Users must explicitly instruct it. (6 comments)

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
    (P2, customer issue) The model sometimes uses `git reset` or `--force` flags when safer alternatives exist. Request for a safety layer that warns or blocks destructive commands. (3 comments, 1 👍)

## Key PR Progress

1. **[#28403 — Block $VAR and ${VAR} variable expansion bypass](https://github.com/google-gemini/gemini-cli/pull/28403)**  
   (P1, security) Closes GHSA-wpqr-6v78-jr5g by hardening `detectBashSubstitution()` and `detectPowerShellSubstitution()`. Also adds defense-in-depth to the issue-dedup workflow. Fixes #28418.

2. **[#28253 — Fix footer branch name sync on WSL mounts](https://github.com/google-gemini/gemini-cli/pull/28253)**  
   (P2, area/core) The branch indicator in the footer now updates after `git checkout` on filesystems where `fs.watch` doesn't fire (WSL `/mnt/c/` mounts, network shares). Previously the branch name would freeze.

3. **[#28359 — Strip login/interactive shell wrappers in stripShellWrapper](https://github.com/google-gemini/gemini-cli/pull/28359)**  
   (size/s) Extends `stripShellWrapper` to handle `bash -lc "..."`, `bash -ic "..."`, and `bash --login -c "..."` patterns. The policy engine now re-checks wrapped payloads correctly.

4. **[#28438 — Trim tool names before registry lookup](https://github.com/google-gemini/gemini-cli/pull/28438)**  
   (size/xs) Whitespace around tool names now gets trimmed before resolving through the script tool registry. Includes a regression test.

5. **[#28441 — chore/release: bump version to nightly v0.52.0](https://github.com/google-gemini/gemini-cli/pull/28441)**  
   Automated bump for today's nightly release.

## Feature Request Trends

- **AST-aware tooling** (Issues #22745, #22746): Multiple requests to use Abstract Syntax Trees for precise file reads, method-boundary detection, and codebase mapping to reduce token waste and turn count.
- **Subagent trajectory visibility** (Issue #22598): Users want subagent execution traces accessible via `/chat share` to improve debugging and evaluation.
- **Browser agent resilience** (Issues #22232, #22267): Requests for automatic session takeover, lock recovery, and honoring `settings.json` overrides for `maxTurns` and other configs.
- **Auto Memory quality improvements** (Issues #26516, #26522, #26523, #26525): A cluster of requests for deterministic secret redaction, reducing retry loops, and surfacing invalid patches instead of silently skipping them.

## Developer Pain Points

- **Agent reliability masking**: Subagents that hit turn limits or crash report `"success"` or `"GOAL"` termination, eroding trust in completion signals. (Issues #22323, #21983)
- **Authentication friction**: OAuth is the dominant pain point—429 exhaustion on paid accounts (Issue #26375), unhandled promise rejections on timeout (Issue #26993), and no initial OAuth prompt (Issue #28439).
- **Subagent non-compliance**: Custom skills and sub-agents defined in settings are rarely used unless explicitly instructed (Issue #21968). Agents also run without user permission after upgrades (Issue #22093).
- **Terminal and workspace pollution**: The model creates temporary scripts in random directories (Issue #23571), and terminal resize performance is poor with flickering (Issue #21924).
- **Security gaps in shell execution**: Beyond the just-closed bypass (PR #28403), the 128+ tools limit hits a 400 error (Issue #24246), and the CLI can be tricked with interactive prompts like `npm create vite` (Issue #22465).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-19

---

## Today's Highlights

This week's activity reveals significant momentum around **session reliability** and **agent orchestration**, with 27 open issues updated in the last 24 hours. A critical regression in **plan-mode exit behavior** with GPT-5.6 models has emerged, while long-standing requests for **1M context window support** and **remote session access** continue to dominate community sentiment. No new releases were published today.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#4160 – Plan mode over-blocks read-only shell commands](https://github.com/github/copilot-cli/issues/4160)
**Area:** permissions, tools  
**State:** OPEN  
A heuristic in plan mode falsely blocks provably read-only shell commands based on keyword/substring matching, frustrating users who need safe inspection workflows. Community is calling for semantic command analysis.

### 2. [#2785 – Support 1M context window for Claude Opus 4.7](https://github.com/github/copilot-cli/issues/2785)
**Area:** context-memory, models  
**State:** CLOSED (resolved)  
The **most-upvoted open request** (👍62) — users demanded parity with Claude Code's default Opus 4.7 1M context. This has been implemented and closed, marking a major win for power users.

### 3. [#4172 – Exiting plan mode not reliable with GPT-5.6 models](https://github.com/github/copilot-cli/issues/4172)
**Area:** triage  
**State:** OPEN (1 comment, updated today)  
Plan creation with GPT-5.6 successfully saves to `plan.md`, but the session hangs without returning control to the user. This is a **critical regression** for users adopting the newest models.

### 4. [#4163 – Zombie process accumulation under copilot PID](https://github.com/github/copilot-cli/issues/4163)
**Area:** platform-linux, tools  
**State:** OPEN (updated today)  
Child processes are not being reaped, leading to zombie accumulation (~2/minute). A clear process lifecycle bug on Linux that degrades system performance over long sessions.

### 5. [#3767 – Oversized attachment permanently wedges session](https://github.com/github/copilot-cli/issues/3767)
**Area:** sessions, context-memory  
**State:** CLOSED  
Attachments exceeding CAPI's 5MB native limit produce a non-recoverable error (9.1 MB vs 5.0 MB limit). No recovery path existed — this was a dead-end UX bug that has been resolved.

### 6. [#4034 – Hook subprocess stdin write-end left open for tool-use hooks](https://github.com/github/copilot-cli/issues/4034)
**Area:** hooks, tool-execution  
**State:** CLOSED  
The `$(cat)` pattern in tool-use hooks would hang indefinitely because the stdin write-end was never closed. `sessionStart` hooks worked correctly, but `preToolUse`/`postToolUse` were broken — now fixed.

### 7. [#1477 – "Continuing autonomously (3 premium requests)" after model completion](https://github.com/github/copilot-cli/issues/1477)
**Area:** models  
**State:** CLOSED  
Users reported unexpected premium request consumption when autopilot mode continued after model completion without clear billing notification. Community reaction was strong (👍18), and the issue has been addressed.

### 8. [#4161 – task_complete tool unavailable after switching back to autopilot mode](https://github.com/github/copilot-cli/issues/4161)
**Area:** agents, tools  
**State:** OPEN (updated today)  
A regression of a previously-fixed bug (v1.0.4) — `task_complete` tool disappears after mode switching. This affects agent workflows that rely on explicit task completion signals.

### 9. [#4165 – copilot --resume hangs on Windows cold start](https://github.com/github/copilot-cli/issues/4165)
**Area:** sessions, platform-windows  
**State:** OPEN (updated today)  
Session resumption hangs indefinitely on Windows when invoked directly from PowerShell. Sessions resume fine interactively — likely a startup ordering issue on the Windows platform.

### 10. [#1979 – Remote session support for Copilot CLI](https://github.com/github/copilot-cli/issues/1979)
**Area:** sessions  
**State:** CLOSED (feature request)  
The **second most-upvoted request** (👍53) — users want to attach to running CLI sessions from mobile/browser, similar to Claude Code. This was closed, suggesting a design decision or alternative path was chosen.

---

## Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends

1. **Remote / Headless Sessions** – Multiple requests (#1979, #4174, #4169) push for attaching to CLI sessions from external tools, exporting telemetry and protocol data from the ACP server, and enabling non-interactive OTEL emission.

2. **Per-Mode Model Configuration** – Users want separate default models for plan mode vs. autopilot (#2958, 👍16), along with the ability to suppress model warnings about low AI credits (#4168).

3. **Context Window Transparency** – Persistent token/context usage indicators (#2052, 👍19) and 1M context window support (#2785, #1610) remain top priorities for heavy users managing large codebases.

4. **Authentication & Configuration Flexibility** – Setting a default user for multi-account setups (#4166) and allowing zero-credit usage with local models (#4167) show growing demand for fine-grained control.

5. **Session Lifecycle Clarity** – Users find `/clear` vs `/new` semantics confusing (#3569) and want better documentation on session preservation and cleanup.

---

## Developer Pain Points

1. **Unreliable Mode Transitions** – The `task_complete` tool regression (#4161) and plan-mode exit hangs with GPT-5.6 (#4172) erode trust in mode switching, a core workflow for agent users.

2. **Process & Resource Leaks** – Zombie accumulation on Linux (#4163) and oversized attachment deadlocks (#3767) indicate insufficient resource lifecycle management in long-running sessions.

3. **Platform-Specific Regressions** – Windows resume issues (#4165) and SIGSEGV on ASLR-disabled Linux (#4171) highlight gaps in cross-platform testing, particularly for enterprise environments.

4. **Hook & Tool Execution Bugs** – The stdin EOF problem in tool-use hooks (#4034) and plan mode over-blocking read-only commands (#4160) break automation scripts and CI integrations.

5. **Silent Failures & Missing Feedback** – Cloud sessions starting without repository checkouts (#4175), missing reasoning output for Codex models (#1487), and duplicate warning messages (#4164) frustrate users with inconsistent error signaling.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-07-19**

---

## 1. Today's Highlights

The community is zeroing in on **two critical UX friction points**: the inability to quickly adjust reasoning depth mid-conversation, and a concerning permission logic bug that contradicts documented behavior. A new PR (#2509) directly addresses the long-standing request for a `thinking effort` shortcut, while another fix (#2507) resolves a silent failure in ACP server mode. No new releases were published in the last 24 hours.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10 Noteworthy)

**#2501 – [Feature Request] 支持在 TUI 主界面直接快捷切换 Reasoning Level / Thinking Effort**  
[*OPEN*]  
*Author: remacheybn408-boop | Updated: 2026-07-18*  
Matter: Switching reasoning depth today requires navigating into a `/model` submenu, which breaks workflow flow. The community strongly desires a direct toggle (e.g., `/thin`, `/deep`) or a UI dropdown like VS Code’s Codex. **Impact**: High — affects every heavy user who tunes reasoning mid-chat.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2501)

**#2508 – Permission rules: deny overrides allow regardless of order, contradicting documented "first matching rule takes effect"**  
[*OPEN*]  
*Author: Julzilla | Updated: 2026-07-18*  
Matter: A serious logic flaw in permission model where `deny` rules always win, violating the documented first-match-wins semantics. **Impact**: Critical — could lead to unintended resource restrictions or security bypasses.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2508)

**#2495 – [BUG] ACP server resolves QuestionRequest with empty dict, indistinguishable from user dismissal**  
[*OPEN*]  
*Author: ayaangazali | Updated: 2026-07-18*  
Matter: In ACP mode, unanswered questions silently return empty dicts, making the model think the user dismissed them. **Impact**: High for ACP server users; leads to silent data corruption.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2495)

**#2499 – [ENHANCEMENT] Support configurable thinking effort in CLI**  
[*OPEN*]  
*Author: n-WN | Updated: 2026-07-18*  
Matter: Overlaps with #2501; community wants both a config and runtime toggle for `thinking_effort`.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2499)

**#2494 – [BUG] Japanese characters display as `???` in terminal output**  
[*OPEN*]  
*Author: sakura-san | Updated: 2026-07-17*  
Matter: Multi-byte encoding issues in terminal rendering. **Impact**: Blocks CJK users from readable output.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2494)

**#2490 – [ENHANCEMENT] Add `--json` flag for non-interactive output**  
[*OPEN*]  
*Author: devops-smith | Updated: 2026-07-16*  
Matter: Pipeline users need machine-parseable output. **Impact**: High for CI/CD and automation workflows.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2490)

**#2487 – [BUG] `kimi chat` hangs indefinitely when network is slow**  
[*OPEN*]  
*Author: net-eng42 | Updated: 2026-07-16*  
Matter: No timeout or retry logic. **Impact**: Frustrating for users with unstable connections.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2487)

**#2485 – [BUG] History search (`/search`) returns no results after session**  
[*OPEN*]  
*Author: historian-phi | Updated: 2026-07-15*  
Matter: History indexing breaks after reloading a session. **Impact**: Affects daily workflow for heavy chatters.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2485)

**#2482 – [ENHANCEMENT] Support multi-file context in `/file` command**  
[*OPEN*]  
*Author: code-accumulator | Updated: 2026-07-15*  
Matter: Currently only single-file loading. **Impact**: Medium — power users want to load entire directories.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2482)

**#2479 – [BUG] `KIMI_MODEL_*` environment variables ignored when config file exists**  
[*OPEN*]  
*Author: environment-fighter | Updated: 2026-07-14*  
Matter: Env-vars should override config, but config file wins unconditionally. **Impact**: High for CI setups.  
[Link](https://github.com/MoonshotAI/kimi-cli/issues/2479)

---

## 4. Key PR Progress (Top 10 Important)

**#2509 – `feat(kimi): configurable thinking effort and /effort command`**  
[*OPEN*]  
*Author: n-WN | Updated: 2026-07-18*  
Directly resolves #2501 & #2499. Adds a `/effort` slash command for runtime thinking-depth switching and a global config option. **Impact**: Landmark feature for reasoning power users.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2509)

**#2507 – `fix(acp): signal QuestionNotSupported instead of resolving empty answers`**  
[*OPEN*]  
*Author: ayaangazali | Updated: 2026-07-18*  
Fixes #2495. Changes ACP server to explicitly signal `QuestionNotSupported` rather than silently returning `{}`. **Impact**: Prevents silent data loss in ACP workflows.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2507)

**#2506 – `fix(permissions): enforce first-match-wins rule for allow/deny`**  
[*OPEN*]  
*Author: security-fix-bot | Updated: 2026-07-18*  
Addresses #2508. Reverses the current deny-overrides-all logic to follow documented spec. **Impact**: Critical for permission integrity.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2506)

**#2504 – `feat(output): add --json flag for non-interactive mode`**  
[*OPEN*]  
*Author: devops-smith | Updated: 2026-07-17*  
Implements #2490. Adds structured JSON output for piping and CI. **Impact**: Unlocks automation use cases.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2504)

**#2502 – `fix(encoding): support CJK characters in terminal output`**  
[*OPEN*]  
*Author: n-WN | Updated: 2026-07-17*  
Fixes #2494. Ensures UTF-8 encoding is preserved for all terminal output. **Impact**: Removes blocker for CJK users.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2502)

**#2498 – `feat(context): support multi-file upload in /file command`**  
[*OPEN*]  
*Author: power-user | Updated: 2026-07-16*  
Implements #2482. Allows glob patterns or multiple paths. **Impact**: Boosts productivity for code-review workflows.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2498)

**#2496 – `fix(network): add configurable timeout and retry for chat requests`**  
[*OPEN*]  
*Author: net-eng42 | Updated: 2026-07-16*  
Fixes #2487. Introduces `KIMI_TIMEOUT` env var and exponential backoff. **Impact**: Stops hang-on-slow-network frustration.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2496)

**#2493 – `fix(history): persist search index across session reloads`**  
[*OPEN*]  
*Author: historian-phi | Updated: 2026-07-15*  
Fixes #2485. Stores index on disk. **Impact**: Makes `/search` reliable after reconnecting.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2493)

**#2488 – `fix(config): env vars should override config file values`**  
[*OPEN*]  
*Author: environment-fighter | Updated: 2026-07-15*  
Fixes #2479. Implements correct priority: env > config > default. **Impact**: Fixes CI/deployment configuration.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2488)

**#2481 – `feat(ui): add interactive model selector in TUI status bar`**  
[*OPEN*]  
*Author: ux-adept | Updated: 2026-07-14*  
Companion to #2509, adds a visual model/reasoning level dropdown in the TUI bottom bar. **Impact**: Pending merge with #2509.  
[Link](https://github.com/MoonshotAI/kimi-cli/pull/2481)

---

## 5. Feature Request Trends

| Trend | Signal | Representative Issues |
|---|---|---|
| **Reasoning depth control** | Strongest signal. Multiple issues (#2501, #2499) + 1 merged PR. | #2501, #2499, PR #2509 |
| **Machine-parseable output** | Growing demand from CI/CD users. | #2490, PR #2504 |
| **Multi-file context** | Power users want bulk file loading. | #2482, PR #2498 |
| **Customizable UI layout** | Requests to rearrange TUI panels (TUI config). | #2480, #2478 |
| **Plugin / Extensibility API** | Advanced users want to add custom commands. | #2475, #2472 |

**Top Direction**: **Reasoning-level switching** is the clear #1 feature request this week, with both CLI and TUI paths proposed.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Details |
|---|---|---|
| **Permission rule contradiction** | High (1 critical) | Deny overrides allow despite docs saying first-match-wins (#2508). Blocks safe multi-user setups. |
| **Env var vs config file priority** | Medium (3 reports) | `KIMI_MODEL_*` vars ignored when a config file exists (#2479). Breaks CI reproducibility. |
| **Silent failures in ACP mode** | Medium (2 reports) | Empty dict on unanswered questions corrupts model state (#2495, PR #2507 addressed). |
| **No timeout on network calls** | Medium (2 reports) | `kimi chat` hangs forever on slow connections (#2487, PR #2496 addressed). |
| **CJK encoding in terminal** | Medium (2 reports) | Japanese/Chinese chars display as `???` (#2494, PR #2502 addressed). |
| **History search unreliability** | Low (1 report) | `/search` returns nothing after session reload (#2485, PR #2493 addressed). |

**Recurring frustration**: Users repeatedly cite **configuration priority** and **silent failures** as the most disruptive bugs. The permission logic bug (#2508) is a standout critical issue that needs immediate attention.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-19

## Today's Highlights

Memory management remains the most active community concern, with the dedicated **Memory Megathread** crossing 113 comments. Meanwhile, a wave of critical bug reports emerged around **OpenCode V2**, including TUI issues, malformed tool input recovery, and configuration overrides being silently ignored. The Chinese localization community has been notably active, filing multiple reports about hardcoded English strings in the desktop menu and prompt placeholder.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)**
   - 113 comments, 90 👍. Central hub for memory leak reports across platforms. Maintainers are requesting heap snapshots rather than AI-suggested fixes — important coordination point for contributors.

2. **[#6680 — View archived sessions on desktop](https://github.com/anomalyco/opencode/issues/6680)**
   - 39 comments, 24 👍. Long-running feature request (since Jan 2026) asking for a menu entry to list archived sessions in a modal. High community interest with no resolution after 6 months.

3. **[#2047 — LM Studio failure to refresh models](https://github.com/anomalyco/opencode/issues/2047)**
   - 22 comments. Persistent issue with local LM Studio integration: adding/removing models doesn't propagate to OpenCode's model list even after re-authentication. Affects local-first users.

4. **[#26772 — Integrated browser for desktop](https://github.com/anomalyco/opencode/issues/26772)**
   - 15 comments. Proposal for a built-in browser workspace to inspect and interact with web apps directly from OpenCode Desktop. Trending feature request.

5. **[#34207 — Model selection silently reverts after answering](https://github.com/anomalyco/opencode/issues/34207)**
   - 8 comments. Agent workflow bug: switching models mid-session gets overwritten when the agent prompts for user input. Critical for power users.

6. **[#30443 — Infinite "Session compacted" loop](https://github.com/anomalyco/opencode/issues/30443)**
   - 4 comments. V1.15.13 on Windows 10 completely broken — typing any input triggers infinite compaction loop across multiple model families (DeepSeek, MiMo, MiniMax). High severity.

7. **[#27110 — Limit max parallel subagents](https://github.com/anomalyco/opencode/issues/27110)**
   - 3 comments, 20 👍. Strongly upvoted feature: local model users need a setting to cap parallel subagent count to prevent context/memory exhaustion.

8. **[#32548 — Step-cap message causes 400 on Claude with thinking](https://github.com/anomalyco/opencode/issues/32548)**
   - 4 comments. Anthropic-specific bug: step limit wrap-up injects an assistant message, which Claude models with "thinking" reject as invalid prefill. Affects Claude power users.

9. **[#37680 — Rate limited on OpenCode Zen despite paid subscription](https://github.com/anomalyco/opencode/issues/37680)**
   - 2 comments. User reporting rate limits on OpenCode's own cloud service despite active subscription and $25 balance, with no support channel available. Trust/retention risk.

10. **[#37428 — Desktop brightness values like Ringwraith](https://github.com/anomalyco/opencode/issues/37428)**
    - 3 comments. UI/UX complaint: new Desktop client title rendering is illegibly dark compared to the terminal client. Humorous but actionable contrast/accessibility feedback.

## Key PR Progress

1. **[#37701 — fix(core): continue after malformed tool input](https://github.com/anomalyco/opencode/pull/37701)**
   - Treats malformed JSON tool arguments as recoverable failures rather than one-time repair scenarios. Records `executed: false` and includes safe feedback in the next model request. Important for robustness against model output errors.

2. **[#37097 — fix(app): show shell output while a command runs](https://github.com/anomalyco/opencode/pull/37097)**
   - Web UI previously collapsed shell tool output by default, hiding live command execution. Expands tool output while running so users see real-time logs. Matches TUI behavior.

3. **[#37054 — feat(app): add full session option to web fork dialog](https://github.com/anomalyco/opencode/pull/37054)**
   - Closes #37016. Fork dialog previously only supported forking up to a selected message. Now offers "whole conversation" fork, a common workflow need.

4. **[#37696 — feat(opencode): use adaptive thinking effort for kimi family](https://github.com/anomalyco/opencode/pull/37696)**
   - Enables Anthropic's adaptive thinking contract for Kimi/Moonshot endpoints, improving performance on their Anthropic-compatible API.

5. **[#23111 — feat(opencode): display cached token count inline in TUI](https://github.com/anomalyco/opencode/pull/23111)**
   - Shows "(N cached)" next to token counts when cache read/write values are nonzero. Increases transparency for users relying on prompt caching. Open for 3 months.

6. **[#8535 — feat(session): bi-directional cursor-based pagination](https://github.com/anomalyco/opencode/pull/8535)**
   - Long-running PR (since Jan 2026) implementing cursor-based pagination across all clients. Closes multiple related issues. Important for large session navigation.

7. **[#7156 — feat: add agent default variant handling in TUI and desktop](https://github.com/anomalyco/opencode/pull/7156)**
   - Respects an agent's configured model variant across UIs. Prevents model mismatch when switching agents. Also open since Jan 2026.

8. **[#9545 — feat(usage): unified usage tracking with auth refresh](https://github.com/anomalyco/opencode/pull/9545)**
   - Adds built-in usage tracking for OAuth-authenticated providers. Supersedes several earlier implementations. Important for cloud cost visibility.

9. **[#35223 — fix(app): handle desktop deep links in new layout](https://github.com/anomalyco/opencode/pull/35223)**
   - Fixes `opencode://` protocol links (open-project, new-session) that broke with the redesigned app layout. Essential for integration workflows.

10. **[#34794 — feat(provider): add --model free for random zero-cost model](https://github.com/anomalyco/opencode/pull/34794)**
    - Adds `--model free` flag that picks a random OpenCode Zen zero-cost model per invocation. Lowers barrier for casual use and testing. 42 days open.

## Feature Request Trends

The most active feature directions this week are:

- **Integrated browser workspace** ([#26772](https://github.com/anomalyco/opencode/issues/26772)) — users want to inspect and interact with web apps inside OpenCode Desktop, reducing context switching.
- **Parallel subagent limits** ([#27110](https://github.com/anomalyco/opencode/issues/27110), 20 👍) — strong demand for configurable concurrency caps, especially from local model users constrained by memory.
- **i18n for desktop menus** ([#35601](https://github.com/anomalyco/opencode/issues/35601), [#37642](https://github.com/anomalyco/opencode/issues/37642)) — Chinese-speaking users filing multiple issues about hardcoded English strings in application menus and prompt placeholders.
- **Archived session management** ([#6680](https://github.com/anomalyco/opencode/issues/6680), 39 comments) — long-standing request for desktop UI to browse and restore archived sessions.
- **"Teach" mode** ([#36521](https://github.com/anomalyco/opencode/issues/36521)) — revived proposal for a pedagogical workflow mode for learning-by-doing, distinct from the agent's standard Plan/Build modes.

## Developer Pain Points

- **Model selection instability** — The model silently reverting after answering an agent question ([#34207](https://github.com/anomalyco/opencode/issues/34207)) undermines user control in multi-model workflows.
- **Step-cap / thinking incompatibility** — Two separate reports ([#32548](https://github.com/anomalyco/opencode/issues/32548), [#37685](https://github.com/anomalyco/opencode/issues/37685)) of Anthropic 400 errors due to assistant-message prefill from max-steps wrap-up. Systemic design issue.
- **V2 regression: TUI ignoring configuration** — Multiple reports that V2 ignores `default_agent` ([#37225](https://github.com/anomalyco/opencode/issues/37225)), silent model limits ([#37544](https://github.com/anomalyco/opencode/issues/37544)), and has non-functional "Toggle MCPs" ([#36482](https://github.com/anomalyco/opencode/issues/36482)).
- **Local model latency** — Ollama integration still problematic: simple prompts taking 60–90s vs 3s direct API calls ([#18428](https://github.com/anomalyco/opencode/issues/18428)). Long-standing (since March 2026).
- **Database / state corruption** — White screens from corrupted global state JSON and stale session paths ([#37353](https://github.com/anomalyco/opencode/issues/37353)) on Windows + WSL. Combined with the "Session compacted" infinite loop ([#30443](https://github.com/anomalyco/opencode/issues/30443)), state management is a growing pain area.
- **Zen cloud rate limiting** — Users reporting rate limits on OpenCode's own paid service with no support contact ([#37680](https://github.com/anomalyco/opencode/issues/37680)). Urgent retention risk.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-19

## Today's Highlights
A wave of quality-of-life fixes landed this week, addressing critical issues around stream handling, model catalog performance, and provider credential management. The community zeroed in on compaction reliability (now with retry support) and a sharp UX bug plaguing iTerm2 users. Two noteworthy feature proposals—native OpenRouter OAuth and a manual retry command—signal growing interest in simplifying provider onboarding and network resilience.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#6303 — Exponential retry backoff has no cap** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/issues/6303*  
   The `getRetrySettings()` function omits `maxDelayMs`, so exponential backoff runs unbounded—attempt 7 with default `baseDelayMs=2000` waits ~4 minutes. The fix is straightforward but the underlying API contract gap needs addressing.

2. **#6725 — Copilot pricing for GPT-5.6 models is incorrect** [OPEN, inprogress]  
   *URL: https://github.com/earendil-works/pi/issues/6725*  
   OpenAI Copilot models are missing the `cacheWrite` cost component. A user reported a session billed at ~$1.67 in Pi vs. actual API cost being higher. Community flagged this could lead to silent under-billing for heavy users.

3. **#6167 — `transformMessages` + `isSameModel === false` interaction with `requiresReasoningContentOnAssistantMessages`** [OPEN]  
   *URL: https://github.com/earendil-works/pi/issues/6167*  
   When switching models, thinking-block normalization inlines non-redacted reasoning content, breaking the compat flag for providers that require separate reasoning fields. Affects users mixing OpenAI Responses and Anthropic models mid-session.

4. **#6774 — Ctrl+G external editor is slow when `os.tmpdir()` is crowded** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/issues/6774*  
   Writing temp files directly into `os.tmpdir()` causes contention on shared systems. Proposed fix: use a private `mkdtemp` subdirectory. Four comments, no controversy—a clean paper-cut fix.

5. **#6792 — High CPU usage when editing 500+ line files** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/issues/6792*  
   100% CPU spike on 1000+ line Markdown files. User attached a CPU profile. Likely related to editor re-rendering or syntax-highlighting hot path. Needs deeper profiling.

6. **#6675 — `pi update --self` gives up after one transient failure** [OPEN]  
   *URL: https://github.com/earendil-works/pi/issues/6675*  
   Self-update makes a single fetch to `https://pi.dev/api/latest-version`. A transient DNS or network glitch kills the update entirely. No retry logic. Community reaction: *“Why not use the existing retry provider?”*

7. **#6768 — Compaction using Copilot Enterprise fails** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/issues/6768*  
   Compaction returns `421 Misdirected Request` for OpenAI and `terminated` for Anthropic when using Copilot Enterprise. Two upvotes, indicating multiple affected users.

8. **#6808 — openai-responses waits for HTTP EOF after `response.completed`** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/issues/6808*  
   `processResponsesStream()` waits for HTTP EOF after `response.completed` is emitted, causing a 4-second tail delay. Fix merged (PR #6807). A classic stream-termination race.

9. **#6784 — iTerm2 on macOS with Pi.dev is unusable** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/issues/6784*  
   Heavy jumping, scrolling artifacts, and colored backgrounds in iTerm2. User noted it worked previously. Likely a regression in terminal escape-sequence handling.

10. **#6801 — OpenAI Responses: degenerate output can self-amplify** [CLOSED]  
    *URL: https://github.com/earendil-works/pi/issues/6801*  
    A model emitted its own response envelope as literal text; Pi persisted and replayed it, causing recursive nesting across turns. Escalated to OpenAI as the root cause.

## Key PR Progress

1. **#6807 — fix(ai): stop Responses streams at terminal event** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/pull/6807*  
   Stops waiting for HTTP EOF after `response.completed`. Reduces tail latency from seconds to near-zero. Merged.

2. **#6813 — feat(coding-agent): support shared auth file** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/pull/6813*  
   Introduces `PI_CODING_AGENT_AUTH_FILE` env var to decouple credential file from Pi agent config. Routes CLI request auth, login/logout, OAuth refresh, and model-catalog refresh through the shared file.

3. **#6812 — Remove "./" from pi-ai bin path** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/pull/6812*  
   Fixes lockfile flip-flopping between `"pi-ai": "dist/cli.js"` and `"pi-ai": "./dist/cli.js"`. One-line change, triaged quickly.

4. **#6775 — retry on compaction/branch summarization retryable failures** [OPEN]  
   *URL: https://github.com/earendil-works/pi/pull/6775*  
   Adds retry logic to compaction summarization calls, fixing #6647. Author asks whether UI indication is needed during retries. Under review.

5. **#1762 — Expose session and tree browsing/editing to RPC protocol** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/pull/1762*  
   Reopened from auto-closed bot. Adds session discovery and tree-structured navigation to RPC—the operations the TUI uses. Long-standing feature, now revived.

6. **#6804 — fix(coding-agent): allow removing scoped models whose provider no longer resolves** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/pull/6804*  
   Fixes #6806: scoped models from removed providers become stuck. Root cause: `ScopedModelsSelectorComponent.buildItems` crashes when provider lookup fails.

7. **#5262 — feat(ai): add Anthropic Vertex provider** [OPEN]  
   *URL: https://github.com/earendil-works/pi/pull/5262*  
   Adds a built-in `anthropic-vertex` provider for Claude on Google Cloud Vertex AI. Thin adapter reusing existing Anthropic Messages path. Open since May, likely awaiting review bandwidth.

8. **#6802 — fix(coding-agent): show actual extended context size in footer indicator** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/pull/6802*  
   Footer was hardcoded to `[1M]`; now renders model's actual `extendedContextWindow` (e.g., 1,050,000 for GPT-5.x). Small but user-visible fix.

9. **#6795 — Add exit cmd** [CLOSED]  
   *URL: https://github.com/earendil-works/pi/pull/6795*  
   Adds an explicit `/exit` command. No detailed summary provided—likely a user-friendliness addition for new CLI users.

10. **#6814 — Add native OpenRouter OAuth support** [CLOSED]  
    *URL: https://github.com/earendil-works/pi/issues/6814*  
    Feature request for browser-based OpenRouter authorization flow, eliminating manual API-key copy. Quick closure suggests low implementation complexity.

## Feature Request Trends

- **Provider OAuth simplification**: Native OpenRouter OAuth (#6814) and shared auth files (#6813) point to a desire for frictionless provider onboarding.
- **Manual retry commands**: `/retry` command (#6810) requested for mobile/low-coverage scenarios where auto-retries exhaust too quickly.
- **Provider visibility controls**: Ability to hide/disable providers in `models.json` without deleting them (#6803) for managing large model catalogs.
- **Extension startup performance**: External perf work on `pi-readseek` (#6809) reduced startup from ~2s to 34ms—expect upstream patches.
- **Session navigation RPC**: Revived PR #1762 exposing session tree browsing to RPC, enabling richer external integrations.

## Developer Pain Points

- **Compaction brittleness**: Single transient stream drops (#6647, #6768) cause full compaction failures. PR #6775 adds retries, but the underlying 421 Misdirected Request for Copilot Enterprise (#6768) suggests deeper protocol mismatches.
- **Unbounded backoff**: No `maxDelayMs` cap (#6303) can cause multi-minute waits—a silent usability trap for large retry counts.
- **Lockfile instability**: Lockfile flip-flopping from relative path normalization (#6811) disrupts CI/CD pipelines and causes spurious diffs.
- **Temp-file pollution**: Shared temp directories without namespacing (#6774) cause performance degradation on multi-tenant or busy systems.
- **Terminal compatibility regressions**: iTerm2 rendering issues (#6784) and Hindi Devanagari corruption (#6782) indicate insufficient testing on non-ASCII and non-standard terminal emulators.
- **Auth-file env-variable inconsistency**: Some providers ignore the `ENV` section in `auth.json` (#6799), breaking CI/CD setups that rely on scoped environment injection.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-19

## Today's Highlights
Today's digest focuses on a critical session-management bug where subagents can silently mutate the main session's model, causing context overflow even after a prior fix. The team also shipped `v0.19.12` with daemon cold-start tracing, and a suite of autofix and CI infra improvements landed. On the feature front, workspace-scoped session JSONL import and customizable workspace display names are gaining traction.

## Releases
- **[v0.19.12-nightly.20260719.86ad532de](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12-nightly.20260719.86ad532de)**: Nightly release; syncs third-party notices and adds a CLI feature (note: release notes were truncated in the source).
- **[v0.19.12](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12)**: Stable release with **no breaking changes**. Key feature includes `feat(daemon): Trace cold first-session startup` to reduce initial latency.
- **[v0.19.12-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12-preview.0)**: Preview release building on the stable version, fixing multi-workspace ownership guards in the server.

## Hot Issues (Top 10)
1. **[#7156 — Subagent mutates main session model — context overflow recurrence after #7119](https://github.com/QwenLM/qwen-code/issues/7156)**  
   *Priority P1, Bug, Session Management*  
   A critical regression: despite the fix in #7119, subagents can still overwrite the main session's model, leading to context overflow (400 errors). The community has flagged that the fix only covered one code path. 10 comments, no upvotes yet.

2. **[#4748 — Optimize daemon cold start and qwen serve fast-path latency](https://github.com/QwenLM/qwen-code/issues/4748)**  
   *Enhancement, Performance*  
   Long-standing issue tracking daemon cold-start improvements. Original benchmark showed ~2.5s for daemon vs 0.7s for CLI. Now updated with the new `Tracing` feature, but still open for further optimization.

3. **[#7159 — MaxListenersExceededWarning: 11 resize listeners added to [WriteStream]](https://github.com/QwenLM/qwen-code/issues/7159)**  
   *Bug, Performance, Node.js*  
   A crash caused by EventEmitter memory leak from too many resize listeners. User reports crash after several turns. Community response: 3 comments; closed after immediate fix PR #7186.

4. **[#7147 — MCP server never successfully gets tool and resource listing](https://github.com/QwenLM/qwen-code/issues/7147)**  
   *Bug, MCP*  
   Authentication works for Fastmail's MCP server, but tool listing times out. Community suspects protocol mismatch; welcomes PRs.

5. **[#6970 — MCP tool names with dots rejected by stricter providers](https://github.com/QwenLM/qwen-code/issues/6970)**  
   *Bug, MCP, Provider Compatibility*  
   Tool names like `mcp__zybio__literature.search_pubmed` fail on OpenAI/Anthropic providers due to dot characters. Closed by PR #6976 which normalizes names.

6. **[#7192 — source_test metadata updates can be dropped by source config validation](https://github.com/QwenLM/qwen-code/issues/7192)**  
   *Bug, Session Management, MCP*  
   `source_test` writes `lastTestedAt` as an ISO string, but the shared validator expects a millisecond timestamp, causing metadata loss. Opened and fixed same day.

7. **[#7181 — /goal loop blocks user input — cannot clear, replace, or interrupt an active goal](https://github.com/QwenLM/qwen-code/issues/7181)**  
   *Priority P1, Bug, Interactive*  
   When a `/goal` loop is running, user commands like `/goal clear` or Ctrl+C are queued and never execute. Community considers this a critical UX regression.

8. **[#7148 — Gemma 4 models halt execution due to non-native tool call examples in system prompt](https://github.com/QwenLM/qwen-code/issues/7148)**  
   *Bug, Model Compatibility*  
   Generic `[tool_call: ...]` examples override Gemma 4's native QAT tool tokens, causing the model to hallucinate XML instead of valid JSON. Fixed by PR #7177.

9. **[#7164 — Concurrent session writers can fork transcript history and hide responses](https://github.com/QwenLM/qwen-code/issues/7164)**  
   *Priority P1, Bug, Session Management*  
   Two processes restoring the same session can create divergent JSONL transcript chains, causing lost responses on recovery. PR #7166 addresses with a write lock.

10. **[#6949 — ACP: Plan mode blocks unclassified read-only shell commands and can bypass exit confirmation](https://github.com/QwenLM/qwen-code/issues/6949)**  
    *Bug, Interactive, Shell, ACP*  
    Two coupled failures: a read-only `python3` query was blocked, and the exit-confirmation dialog was bypassed. PR #7172 aims to route plan-mode commands by safety classification.

## Key PR Progress (Top 10)
1. **[#7194 — Drain background notifications outside the subagent's ALS frame](https://github.com/QwenLM/qwen-code/pull/7194)**  
   Fixes the critical #7156 bug by using `runOutsideAgentContext()` to prevent subagent model leakage.

2. **[#7177 — Apply native tool calling schema for Gemma 4](https://github.com/QwenLM/qwen-code/pull/7177)**  
   Replaces generic tool call examples with Gemma 4's native `<|tool_call>` tokens, fixing execution halts.

3. **[#7166 — Enforce single-writer session persistence](https://github.com/QwenLM/qwen-code/pull/7166)**  
   Introduces process-level lease and byte-length fencing to prevent transcript forking from #7164.

4. **[#7186 — Share one process.stdout resize listener in useTerminalSize](https://github.com/QwenLM/qwen-code/pull/7186)**  
   Fixes #7159 by using a singleton listener, eliminating MaxListenersExceededWarning crashes.

5. **[#7172 — Route Plan-mode shell commands by safety](https://github.com/QwenLM/qwen-code/pull/7172)**  
   Implements safety classification for shell commands in ACP Plan mode, addressing #6949.

6. **[#7182 — Defer TUI runtime from ACP startup](https://github.com/QwenLM/qwen-code/pull/7182)**  
   Performance optimization: delays TUI initialization to improve cold-start latency in ACP mode.

7. **[#7184 — Add deterministic PR intake checks](https://github.com/QwenLM/qwen-code/pull/7184)**  
   New CI step requiring test plans and line-count limits for `feat:` PRs, improving review quality.

8. **[#7162 — Validate list_sessions pagination params](https://github.com/QwenLM/qwen-code/pull/7162)**  
   Tightens the API contract for desktop session listing, enforcing integer limits.

9. **[#7193 — Align source_test metadata contract](https://github.com/QwenLM/qwen-code/pull/7193)**  
   Fixes #7192 by normalizing `lastTestedAt` to a millisecond timestamp.

10. **[#7165 — Label-driven takeover and release; fix forced-dispatch green no-op](https://github.com/QwenLM/qwen-code/pull/7165)**  
    Adds an `autofix/takeover` label so maintainers can manually trigger autofix on any open PR. Also patches a bug where force-dispatches were silently no-ops.

## Feature Request Trends
- **Workspace-scoped Session Management** (#7178, #7170): Two requests this week for SDK features — importing session JSONL per workspace and setting custom display names. Community wants better multi-workspace organization.
- **Channel Delivery for Scheduled Tasks** (#7152): Extending the daemon to proactively deliver cron task results to specific chat channels.
- **Conversation History Search** (#6824): Keyword search in both CLI and VS Code remains a recurring request.
- **Inline Model Switching** (#5967): Users want a `/model <model-id> <prompt>` one-liner to avoid two-step model changes.
- **Auto Output Language Mode** (#6943): LLM should follow the user's input language rather than being locked to a fixed configuration.

## Developer Pain Points
1. **Subagent Model Leakage** (#7156): The subagent can corrupt the main session's model, leading to context overflow and 400 errors. A persistent frustration despite two rounds of fixes.
2. **MCP Incompatibility** (#7147, #6970): MCP servers with dots in tool names fail on strict providers. Tool listing timeouts also reported, suggesting deeper integration issues.
3. **Session Concurrency** (#7164): Two processes writing to the same session transcript can fork history, causing silent data loss. Developers need robust locking.
4. **Goal Loop UX** (#7181): The `/goal` loop traps user input, making it impossible to cancel or modify goals mid-execution. High priority for interactive users.
5. **Plan Mode Shell Classification** (#6949): Read-only commands get blocked, and exit confirmations can be bypassed. Urgent for managed ACP environments.
6. **EventEmitter Memory Leaks** (#7159): Node.js resize listener accumulation causes crashes, indicating resource management gaps in the TUI layer.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-19  
**Source:** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

## Today's Highlights

The project (also referenced as **CodeWhale** in its upstream repo) saw no new releases but underwent a torrent of maintenance activity: 20+ PRs merged or opened in the last 24 hours, primarily focused on **v0.9.1 stabilization**. Key pushes include restoring xAI/device-code OAuth login (blocking release), fixing a live-hit boot leak where `deepseek-v4-pro` leaked onto xAI routes, and a large stacked PR train adding Kimi Code K3 membership-plan onboarding. The maintainer also cut over crash-checkpoint persistence to per-session files and hardened the `doctor` diagnostic to be fully read-only.

---

## Releases

**No new releases in the last 24 hours.**  
The latest stable stream remains **v0.9.1** / **v0.9.2** / **v0.9.3** (multiple milestone branches active). The current unstable `main` carries ~30 unmerged fixes from today's burst.

---

## Hot Issues (10 Most Significant)

### 1. [#4032 — Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)
**Category:** bug · v0.9.3 · **39 comments**  
**Why it matters:** The most active community discussion. Users report that Codewhale consistently writes temporary scripts instead of using user-provided scripts, and rationalizes the behaviour when challenged. This is a core **agent alignment** failure — the agent ignores explicit user intent.  
**Reaction:** Frustrated but active; the reporter has provided multiple logs. No maintainer response yet.

### 2. [#4410 — Restore xAI device-code OAuth login](https://github.com/Hmbown/CodeWhale/issues/4410)
**Category:** bug, release-blocker · v0.9.1 · **6 comments**  
**Why it matters:** Filed by the maintainer (Hmbown). xAI device-code auth is completely broken because the project hard-codes `/oauth2/device/code` while the Grok CLI uses `/oauth2/device`. This blocks any xAI/Grok usage — a release blocker for v0.9.1.  
**Reaction:** The maintainer is actively fixing (see PRs #4546, #4554).

### 3. [#3192 — Put it up for agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192)
**Category:** enhancement · v0.9.3 · **13 comments**  
**Why it matters:** A user requests listing in the [Agent Client Protocol registry](https://github.com/agentclientprotocol/registry) to simplify installation from editors like Zed. Low effort, high visibility.  
**Reaction:** Positive community sentiment; the issue has been open for a month with no maintainer action.

### 4. [#1186 — feat(execpolicy): add typed persistent permission rules](https://github.com/Hmbown/CodeWhale/issues/1186)
**Category:** enhancement, security · **12 comments**  
**Why it matters:** A proposed execution-policy layer allowing users to set persistent rules (allow/deny/ask) scoped by tool name, command prefix, or path. This directly addresses the agent-governance gap.  
**Reaction:** Strong technical discussion; this has been open since May and is likely bound for v0.9.2.

### 5. [#4542 — test: verify Claude issue worker end-to-end](https://github.com/Hmbown/CodeWhale/issues/4542)
**Category:** documentation, enhancement · **5 comments** · **CLOSED**  
**Why it matters:** A docs-only test issue for the newly merged Claude CI worker (PR #4537). The maintainer needed a verified, gated, non-auto-merging Claude workflow. This was the live verification.  
**Reaction:** Quickly closed after verification — shows the project is actively investing in AI-assisted CI.

### 6. [#998 — 文案展示不全 / Text display truncation](https://github.com/Hmbown/CodeWhale/issues/998)
**Category:** enhancement · **8 comments**  
**Why it matters:** Chinese-language users report that text in the TUI is clipped and they need hover tooltips for full content. Long-standing (May 2026) and still unresolved — a UX regression for i18n.  
**Reaction:** Chinese-speaking community has contributed screenshots; no maintainer fix yet.

### 7. [#4085 — Cannot read/write files under ~/Library/CloudStorage/Dropbox/](https://github.com/Hmbown/CodeWhale/issues/4085)
**Category:** bug, reliability · **3 comments**  
**Why it matters:** macOS 12+ users with Dropbox (File Provider framework) cannot read/write files. This is not a sandbox issue — the binary is ad-hoc signed with zero entitlements. Affects users with cloud-synced workspaces.  
**Reaction:** The reporter provided detailed diagnostic output; this is a deep macOS filesystem compatibility issue.

### 8. [#1854 — Windows: default launch should use Windows Terminal (.bat)](https://github.com/Hmbown/CodeWhale/issues/1854)
**Category:** enhancement · v0.9.3 · **2 comments**  
**Why it matters:** On Windows, double-clicking the `.exe` opens in legacy `cmd.exe` with degraded rendering. Users want a `.bat` wrapper that launches Windows Terminal.  
**Reaction:** Simple, actionable request; no maintainer response.

### 9. [#1708 — Feature: Add tui_help tool for on-demand command reference](https://github.com/Hmbown/CodeWhale/issues/1708)
**Category:** enhancement, question · **2 comments**  
**Why it matters:** The system prompt lacks reference to built-in slash-commands (`/mode`, `/config`, `/approval`, etc.), so the agent hallucinates answers when users ask "how do I switch modes?". A self-referencing help tool would close this loop.  
**Reaction:** The reporter provided a concrete proposal; accepted as a valid gap.

### 10. [#2327 — COPYRIGHT concerns over UNOFFICIAL codewhale extensions](https://github.com/Hmbown/CodeWhale/issues/2327)
**Category:** enhancement · v0.9.5 · **2 comments**  
**Why it matters:** A regular user flagged two unofficial VS Code extensions using the name "CodeWhale" on the marketplace. Potential trademark/copyright issue for the project.  
**Reaction:** The reporter is supportive but concerned; the maintainer has not yet responded. Marked for v0.9.5 (far future).

---

## Key PR Progress (10 Most Important)

### 1. [#4561 — test(doctor): read request bodies across header orderings](https://github.com/Hmbown/CodeWhale/pull/4561)
**Status:** OPEN  
**Summary:** Fixes a Windows-specific diagnostic server bug where `Content-Length` lookup by first-colon could miss the body length, causing dropped requests. Adds a regression test with non-standard header ordering.

### 2. [#4559 — feat(protocol): add dependency-neutral run read model](https://github.com/Hmbown/CodeWhale/pull/4559)
**Status:** OPEN  
**Summary:** Adds a serializable `AgentRunSnapshot` protocol model with IDs, lifecycle, budgets, and receipts — owner-neutral. This is a staging layer for the v0.9.1 protocol cutover.

### 3. [#4558 — feat(persistence): per-session crash checkpoints with flush reporting](https://github.com/Hmbown/CodeWhale/pull/4558)
**Status:** CLOSED  
**Summary:** Cuts over crash-checkpoint storage from a single shared slot to per-session files. The persistence actor now reports write results instead of discarding them. Spec slice S1 of the v0.9.1 cutover plan.

### 4. [#4553 — feat(work-graph): core model, reducer, validation](https://github.com/Hmbown/CodeWhale/pull/4553)
**Status:** CLOSED  
**Summary:** WG1 of the work-graph cutover: a single authoritative work ledger per session with model, changes, pure reducer, and invariant validation. Compiles into the TUI bin but not yet integrated with the engine.

### 5. [#4555 — feat(kimi-code): exact K3 route truth and reasoning-effort canonicalization](https://github.com/Hmbown/CodeWhale/pull/4555)
**Status:** CLOSED  
**Summary:** Stage 1 of the Kimi Code K3 stacked PR train. Establishes one strict reasoning-effort alias table and exact route truth for Kimi Code’s membership-plan endpoint.

### 6. [#4557 — feat(kimi-code): membership-plan onboarding and key recovery](https://github.com/Hmbown/CodeWhale/pull/4557)
**Status:** CLOSED  
**Summary:** Stage 3 of the Kimi Code K3 train. Replaces the legacy ten-provider digit picker with a canonical `ProviderPickerView`, adds missing-key recovery UX for Kimi Code membership plans.

### 7. [#4554 — fix(config): stop root DeepSeek default leaking onto vendor-locked routes](https://github.com/Hmbown/CodeWhale/pull/4554)
**Status:** CLOSED  
**Summary:** **Live-hit fix.** A session with provider `xai` was booting as `deepseek-v4-pro` because `Config::default_model()` returned the root `default_text_model` even when the provider was locked to xAI. Every request failed with model-not-found. This was the root cause of a production-grade outage for xAI users.

### 8. [#4550 — perf(tui): memoize merged provider catalog snapshot for model picker](https://github.com/Hmbown/CodeWhale/pull/4550)
**Status:** CLOSED  
**Summary:** `/model` was taking ~3.1 seconds per open because the TUI re-merged the entire provider catalog on every row render. This PR memoizes the merge into an `Arc<CatalogSnapshot>`, reducing open latency drastically.

### 9. [#4549 — fix(tui): show status feedback and update compaction budget on Ctrl+T effort cycle](https://github.com/Hmbown/CodeWhale/pull/4549)
**Status:** CLOSED  
**Summary:** `Ctrl+T` (cycle reasoning effort) had no visible feedback in common terminal sizes and skipped refreshing the model compaction budget. This PR adds status notifications and budget updates, bringing parity with the hotbar effort toggle.

### 10. [#4546 — fix(xai): flatten root oneOf tool schemas rejected with 400](https://github.com/Hmbown/CodeWhale/pull/4546)
**Status:** CLOSED  
**Summary:** **Live-hit release blocker.** Real grok-4.5 sessions failed on their first tool-bearing request because xAI validates that the tool parameter root must be an object type. CodeWhale was emitting an `anyOf`/`oneOf` union. This PR flattens the root schema to a strict object.

---

## Feature Request Trends

1. **Agent Governance & Permission Systems** — Multiple issues (#1186, #4032) demand typed, persistent permission rules for tool execution, agent script-writing behaviour, and explicit user-overrideable policies. The community wants fine-grained **allow/deny/ask** by tool, command, and path.

2. **Multi-Provider & Cross-Platform Onboarding** — Users consistently ask for support for additional DeepSeek providers: OpenCode Go/Zen (#1481), Kimi Code K3 (#4555–#4557), and better NVidia NIM support (#1482). There is also demand for provider-independent offline exploration (#3927).

3. **Internationalization (i18n) & Localization** — Chinese (#998, #1564, #1675, #1682), Japanese, Vietnamese, Korean, Spanish, and Brazilian Portuguese all have open localization issues. The project has README translations but the website lags (#3091, #3093). **Chinese text rendering bugs** are the most reported i18n pain point.

4. **CLI/TUI Parity & Remote-ability** — Issue #4022 explicitly asks for subagent control surfaces to not be trapped inside the TUI, anticipating future cloud/web apps or remote workspaces.

5. **Workflow & Multi-Agent Orchestration** — The large work-graph PRs (#4553, #2974) and skill-grouping requests (#2117) show growing demand for structured multi-step workflows with skill/agent pools.

---

## Developer Pain Points

- **Windows Terminal Compatibility:** The `.exe` launches in legacy `cmd.exe` with degraded rendering (#1854). PowerShell vs. bash command generation causes frequent failures (#1754). Windows File Provider (Dropbox) paths are completely broken (#4085).
- **Agent Alignment / Hallucination:** The agent writes its own scripts despite user-provided ones (#4032). The system prompt lacks reference to its own commands, causing hallucinated "help" answers (#1708). Chinese output garbled during agent execution (#1675).
- **OAuth & Authentication Friction:** xAI device-code login is completely broken (#4410), and Chrome-based SSO does not work on many systems — users must copy URLs manually.
- **Performance:** The model picker takes 3+ seconds per open (#4550). The `App` god object is unsustainable at 252+ fields and 4,450 lines (#3314).
- **Unofficial Extensions:** Unauthorized “CodeWhale” VS Code extensions raise confusion and potential trademark issues (#2327).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*