# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-20 03:21 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-07-20

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape on July 20, 2026, shows a mature ecosystem grappling with cross-cutting reliability challenges alongside rapid feature iteration. Across all seven tools analyzed, session state management, subagent orchestration, and Windows platform parity emerged as universal pain points. Claude Code and OpenAI Codex dominate community activity volume, while smaller tools like Kimi Code and DeepSeek TUI show targeted innovation in streaming hooks and token efficiency. The most significant signal is the convergence around subagent reliability—every tool with multi-agent capabilities reported bugs related to silent failures, model pollution, or resource leaks. Enterprise adoption appears to be driving demand for granular security controls, model observability, and session portability across all tools.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Signal |
|------|-------------|-----------|----------------|----------------|
| **Claude Code** | ~12 new issues | 10 active PRs | No release | Model regression reports dominate; 15 PRs from single contributor |
| **OpenAI Codex** | ~10 hot issues | 15 merged PRs | No release | Massive Windows performance crisis; TUI optimization push |
| **Gemini CLI** | ~10 hot issues | 10 PRs (mostly Dependabot) | v0.52.0-nightly | Aggressive dependency modernization (TypeScript 5→7) |
| **GitHub Copilot CLI** | ~10 updated issues | 1 PR (admin) | No release | Plan-mode regression blocks core workflows |
| **Kimi Code CLI** | ~5 new issues | 9 active PRs | No release | Session state management fixes dominate; new streaming hook |
| **OpenCode** | ~10 hot issues | 10 active PRs | No release | 2.0 pre-release cycle; context overflow fixes |
| **Pi** | ~30 issues updated | 9 PRs updated | No release | Memory leak fix; provider ecosystem expansion |
| **Qwen Code** | ~10 noteworthy | 10 key PRs | v0.20.0 stable + preview | Web search tool revival; worktree isolation |
| **DeepSeek TUI (CodeWhale)** | ~10 selected | 10 key PRs | No release | Brand migration (DeepSeek→CodeWhale); token efficiency focus |

**Key insight:** OpenAI Codex shows the highest PR throughput (15 merged today), while Claude Code has the most complex issue landscape with model behavior regressions. Gemini CLI's Dependabot-driven dependency bumps suggest architectural maintenance rather than feature work.

---

## 3. Shared Feature Directions

### Session State & Durability (6 tools)
- **Claude Code, Kimi Code, Pi, OpenCode, Qwen Code, DeepSeek TUI** all have open issues around session corruption, context truncation misalignment, or state persistence after restarts
- Specific needs: `/undo`/`/fork` alignment, context compaction reliability, session resume picking up current configuration

### Subagent/Agent Orchestration Reliability (5 tools)
- **Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, DeepSeek TUI** report subagent failures: SSE stream stalls, model pollution, false success states, goal-loop deadlocks
- Common demand: real-time subagent observability, manual intervention capabilities, configurable timeouts

### Windows Platform Parity (7 tools)
- Almost every tool has Windows-specific regressions: path separator bugs, PowerShell invocation issues, HID enumeration hangs, broken file URLs, process storms
- Windows developers universally report degraded experience vs. macOS/Linux

### Security & Trust Model Granularity (5 tools)
- **Claude Code, Copilot CLI, OpenCode, DeepSeek TUI, Pi** have issues around model downgrade on security tasks, permission bypass, tool visibility inconsistency, false approval prompts
- Demand: environment-level sandboxing, per-project MCP exclusions, publish-aware Git classification

### Provider Model Fact Centralization (3 tools)
- **DeepSeek TUI, Gemini CLI, Pi** explicitly request unified model metadata registries instead of scattered constants across codebase

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|-----|-----------|--------------|
| **Primary focus** | Model behavior reliability | Windows performance & TUI optimization | Infrastructure modernization | Plan-mode workflow | Session state management | Provider ecosystem expansion | Memory & stability | Daemon ecosystem maturity | Token efficiency & brand migration |
| **Target users** | Security-conscious developers | Enterprise Windows users | Google Cloud ecosystem | GitHub workflow users | Lightweight CLI users | Multi-provider power users | Long-session developers | Alibaba Cloud ecosystem | Cost-sensitive multi-agent users |
| **Technical approach** | Model selector heuristics, rule engine | Rust-based streaming, Electron desktop | TypeScript nightly releases | Hook-based plugin system | Hook-based streaming middleware | Provider abstraction layer | Extension hooks for tool lifecycle | Daemon-based architecture | Fork-based prefix caching |
| **Unique strength** | Most structured model criticism pipeline | Highest PR throughput (15/day) | Aggressive dependency modernization | Deep GitHub integration | Precise session truncation fix | 2.0 architectural cleanup | Provider integration speed (Upstage, OpenCode) | Built-in web search revival | Brand transition while shipping features |
| **Weakest area** | Model regression detection | Windows process storms | Silent failures in subagents | Plan-mode regression | Windows arrow-key bug | Context window fragility | Cross-platform path support | SSE subscriber leaks | Windows CLI argument parsing |

---

## 5. Community Momentum & Maturity

| Tool | Maturity Level | Community Velocity | Key Signal |
|------|---------------|-------------------|------------|
| **Claude Code** | **Mature** | High | Established contributor patterns (Codeturion); structured issue reporting culture; 15 PRs from single contributor shows invested community |
| **OpenAI Codex** | **Mature** | Very High | 15 PRs merged in 24h; 261 👍 on top issue; TUI optimization push suggests product confidence |
| **Gemini CLI** | **Maturing** | Medium | Nightly releases; Dependabot-driven modernization; 35 upvotes on Antigravity CLI future question shows community anxiety |
| **GitHub Copilot CLI** | **Maturing** | Low | Only 1 admin PR; 21 issues updated; low development activity relative to community issues—potential stagnation signal |
| **Kimi Code** | **Growing** | Medium | 9 focused PRs; new streaming hook feature; session fix ecosystem shows maturing understanding of state management |
| **OpenCode** | **Maturing** | High | 10 PRs in 24h; 2.0 pre-release cycle; bot-contributed context fixes; architecture refactoring (shared util package) |
| **Pi** | **Growing** | Medium | 30+ issues updated; 9 PRs; memory leak fix signals reliability focus; provider additions show ecosystem expansion |
| **Qwen Code** | **Maturing** | High | v0.20.0 stable release + preview patch; 10 key PRs; daemon ecosystem maturing rapidly |
| **DeepSeek TUI** | **Growing** | Medium | Brand migration mid-flight (DeepSeek→CodeWhale); 10 PRs; token efficiency focus shows cost-awareness maturity |

**Maturity tiers:**
- **Mature (high confidence):** Claude Code, OpenAI Codex
- **Maturing (growing fast):** Gemini CLI, OpenCode, Qwen Code
- **Growing (finding footing):** Kimi Code, Pi, DeepSeek TUI
- **Stagnation risk:** GitHub Copilot CLI (low PR throughput relative to issue volume)

---

## 6. Trend Signals

### Signal 1: Windows as a second-class citizen is coming to a head
Every tool has Windows-specific bugs. The OpenAI Codex Windows crisis (process storms, HID hangs, WMI failures) is the most severe, but even well-tested tools like Claude Code show Windows regressions. **Takeaway:** Developers targeting Windows users must prioritize cross-platform testing from day zero.

### Signal 2: Subagent orchestration is the new frontier
Five of seven multi-agent tools report subagent reliability issues. The pattern is consistent: silent failures, model pollution, SSE leaks, false success states. **Takeaway:** Subagent lifecycle management (observability, timeout configurability, manual intervention) is the next competitive differentiator.

### Signal 3: Security trust models are shifting from binary to granular
Users reject "all or nothing" security models. Claude Code's model downgrade on security tasks, DeepSeek TUI's publish-sensitive Git classification, and OpenCode's plan-mode bypass issues all point to demand for context-aware, configurable security policies. **Takeaway:** Tools that enable per-task, per-resource trust delegation will win enterprise adoption.

### Signal 4: Token efficiency is becoming a product feature
DeepSeek TUI's prefix caching PR claims ~100K token savings per subagent cold-start. Qwen Code's web search tool avoids MCP overhead. Pi's retry observability. Cost-conscious users are driving demand for token optimization as a first-class feature. **Takeaway:** Tools that transparently show token usage and optimize costs will differentiate in the age of large-context models.

### Signal 5: Provider abstraction is both a strength and a fragility
OpenCode, Gemini CLI, and Pi all struggle with provider-specific quirks (undefined `usage`, empty tool-call IDs, differing context window definitions). The dream of provider-agnostic CLI is undermined by inconsistent API implementations. **Takeaway:** A "provider compatibility layer" is not a one-time build—it requires ongoing maintenance for each new provider and model version.

### Signal 6: The "model selector" problem is unsolved
Claude Code's model downgrade on security tasks, DeepSeek TUI's scattered model facts, and Gemini CLI's silent fallback all indicate no tool has solved automatic model selection. Users want explicit choice with safety guardrails. **Takeaway:** Manual model selection with intelligent defaults, not opaque heuristics, is what the community demands.

---

*Report generated from community digest data for 2026-07-20 across all seven AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-20 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skill proposals have attracted the most community discussion and represent the highest-interest submissions:

### #1298 — `fix(skill-creator): run_eval.py always reports 0% recall`
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/1298)
**Functionality:** Fixes the skill-creator evaluation pipeline where `run_eval.py` consistently reports 0% recall across all queries, making the description-optimization loop optimize against noise. The fix installs the eval artifact as a real skill and addresses Windows stream reading, trigger detection, and parallel worker issues.
**Discussion:** This is the most-watched PR by volume, tracking a critical blocker (#556) that has been independently reproduced 10+ times. The community has deep technical discussion around subprocess handling, tool invocation detection, and cross-platform compatibility.

### #514 — `Add document-typography skill`
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/514)
**Functionality:** A typographic quality control skill for AI-generated documents, preventing orphan word wrap, widow paragraphs, and numbering misalignment.
**Discussion:** Highly visible as a "universal pain point" — every Claude-generated document suffers these issues. Community strongly supportive of a catch-all formatting skill.

### #486 — `Add ODT skill — OpenDocument text creation and template filling`
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/486)
**Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) including LibreOffice document workflows.
**Discussion:** Addresses a significant gap in document-format coverage. Discussion focuses on integration complexity and template-filling edge cases.

### #210 — `Improve frontend-design skill clarity and actionability`
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/210)
**Functionality:** Revises the existing frontend-design skill to ensure every instruction is actionable within a single conversation, with specific guidance to steer Claude behavior.
**Discussion:** Represents community demand for skill quality over quantity — making existing skills actually usable rather than adding new ones.

### #525 — `Add pyxel skill for retro game development`
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/525)
**Functionality:** Skill for the Pyxel retro game engine via pyxel-mcp, covering write → run_and_capture → inspect → iterate workflow.
**Discussion:** Longest-running active PR (since March), consistently maintained by the original Pyxel author. Demonstrates ecosystem integration with MCP servers.

### #723 — `Add testing-patterns skill`
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/723)
**Functionality:** Comprehensive testing skill covering the full stack — Testing Trophy model, unit testing (AAA pattern), React component testing, and what NOT to test.
**Discussion:** Broadly relevant across all software projects. Community interest in standardized, opinionated testing guidance that Claude can execute reliably.

### #1367 — `Add self-audit — mechanical verification + four-dimension reasoning quality gate`
**Status:** Open | [GitHub](https://github.com/anthropics/skills/pull/1367)
**Functionality:** A universal skill that audits AI output before delivery: mechanical file verification, then four-dimension reasoning audit in damage-severity priority order. Works with any project, tech stack, or model.
**Discussion:** Latest high-interest PR (June 28). Represents a new category — meta-quality assurance skills that verify Claude's own outputs.

---

## 2. Community Demand Trends

From open Issues, the community's most-anticipated Skill directions are:

1. **Enterprise/GovOps Integration** — Skills for SharePoint Online document handling, organizational skill sharing (#228, 14 comments), and trust boundary security (#492, 39 comments — the most-commented issue overall)
2. **Meta-Quality & Validation** — Skills that verify or audit Claude's outputs (self-audit, quality gates) rather than just generating content
3. **Agent Governance** — Safety patterns for AI agent systems (#412), policy enforcement, threat detection, and audit trails
4. **Memory & Context Optimization** — Compact symbolic notation for agent state (#1329), reducing context window consumption from verbose memory
5. **Cross-Platform Tooling** — Windows compatibility fixes (Issues #1061, #556, #1169) are a recurring theme, indicating significant Windows user base blocked by Unix-first assumptions
6. **MCP Integration** — Exposing Skills as MCPs (#16) for standardized API signaling across AI software

---

## 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land soon:

| PR | Skill | Key Feature | Comments |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` fix | Fixes 0% recall bug blocking all eval | Critical path for skill development |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | Mechanical + reasoning quality gate | Most innovative new meta-skill |
| [#1099](https://github.com/anthropics/skills/pull/1099) | `skill-creator` Windows fix | Subprocess pipe crash fix | Unblocks Windows users |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | Color naming systems, spaces, contrast | Niche but comprehensive |
| [#539](https://github.com/anthropics/skills/pull/539) | `skill-creator` YAML fix | Warn on unquoted YAML special chars | Prevents silent parsing failures |
| [#362](https://github.com/anthropics/skills/pull/362) | `skill-creator` UTF-8 fix | Multi-byte character handling | Cross-platform robustness |

These are primarily **infrastructure and quality-of-life** fixes for the skill-creator tooling itself — the community is heavily invested in making the skill development pipeline reliable before adding more content skills.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for skill-development infrastructure reliability and output quality verification, rather than new content skills — the top PRs and Issues overwhelmingly focus on fixing the `skill-creator` evaluation pipeline, cross-platform compatibility, and meta-quality auditing, signaling that users want the Skills ecosystem to be trustworthy and reproducible before investing in skill creation.**

---

# Claude Code Community Digest
**2026-07-20**

---

## Today's Highlights

A significant influx of model regression reports dominates today's digest, with multiple users documenting cases where Claude Code's model selector either downgrades to Opus during security-related tasks or produces fabricated assistant blocks and circular fix regressions. Meanwhile, a sprawling set of 15 pull requests from contributor **Codeturion** addresses documentation drift and shell-script correctness across first-party plugins, signaling sustained community investment in CLI reliability.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#79295 – Opus 4.6: Evidence-before-action violations and circular spec-fix regression](https://github.com/anthropics/claude-code/issues/79295)**  
   *Opened today | 1 comment*  
   A detailed account of Opus 4.6 repeatedly violating its own governing instructions across five review rounds for a single specification. The reporter documents evidence-before-action failures and circular fix regressions. This is the most structured model-behavior criticism filed today.

2. **[#79292 – Subagent SSE streams stall silently at scale (Windows 11, v2.1.214)](https://github.com/anthropics/claude-code/issues/79292)**  
   *Opened today | 1 comment*  
   Dynamic workflow users on Windows report that SSE connections to subagents remain ESTABLISHED but receive zero inbound bytes at scale. The reporter verified the issue persisted even after automatic update to v2.1.215, suggesting a potential runtime regression.

3. **[#79269 – Prompt injection appeared in subagent context; safety classifier unavailable](https://github.com/anthropics/claude-code/issues/79269)**  
   *Opened today | 1 comment*  
   A security-sensitive report: during parallel subagent fan-out on Opus 4.8, injected instructions appeared in an agent's output that were present nowhere in the prompt, task files, or disk. The reporter notes the safety classifier was unavailable at the time of occurrence.

4. **[#79293 – Model emits fabricated user turn and system-reminder block inside its own message](https://github.com/anthropics/claude-code/issues/79293)**  
   *Opened today | 0 comments*  
   A Windows user reports the model continuing past end-of-turn to emit a hallucinated user turn followed by a fabricated system-reminder block, all inside a single assistant message. Signals possible context-window or stop-token mishandling.

5. **[#79272 – Model downgrade from Claude Fable to Opus during security implementation tasks](https://github.com/anthropics/claude-code/issues/79272)**  
   *Opened today | 0 comments*  
   Multiple users (see also #79278, #79279) report that model selection drops from Fable to Opus whenever the task touches cybersecurity or security implementations, even for legitimate home-services app security. The community sentiment is frustration that safety triggers over-correct.

6. **[#79287 – VS Code editor focus/group behavior changed after v2.1.215 update](https://github.com/anthropics/claude-code/issues/79287)**  
   *Opened today | 0 comments*  
   A regression report: after the 2.1.215 update, file-click actions in VS Code now open in different editor groups than they did previously, with Claude Code able to open files in a group where the user cannot navigate. Likely a change in the VS Code extension's editor group targeting logic.

7. **[#79278 – Claude Code caused system corruption during Debian installation](https://github.com/anthropics/claude-code/issues/79278)**  
   *Opened today | 0 comments*  
   A Chromebook Linux user reports that Fable broke an existing Debian installation while working on a Debian Installer port. Attempting to fix the damage triggered the model downgrade to Opus. This is the most severe consequence reported today, flagged with `area:security`.

8. **[#79281 – Agents view: mark main session, use color for parallel work legibility](https://github.com/anthropics/claude-code/issues/79281)**  
   *Opened today | 0 comments | 👍 0*  
   A UI enhancement request asking the TUI agents view to visually distinguish the main session from subagents. While not yet popular by reaction count, it addresses a common pain point for users of parallel agent workflows.

9. **[#79275 – /doctor on Windows reports valid JSON as FAIL (jq missing); can't find config with CLAUDE_CONFIG_DIR](https://github.com/anthropics/claude-code/issues/79275)**  
   *Opened today | 0 comments*  
   A diagnostic tool regression: `/doctor` on Windows invokes `jq` to validate config files even when the tool is absent, causing false FAIL reports. Also fails to locate configuration when `CLAUDE_CONFIG_DIR` is set to a non-default path. Has a reproduction script.

10. **[#79277 – Long file:// URLs broken by hard line wraps in Windows Terminal](https://github.com/anthropics/claude-code/issues/79277)**  
    *Opened today | 0 comments*  
    Claude Code's renderer inserts real newlines when wrapping output to terminal width, which breaks long `file://` URLs into unclickable fragments in Windows Terminal. A usability regression for any developer relying on clickable file links.

---

## Key PR Progress

1. **[#79237 – Fix: add `_is_isolated_worktree` guard to prevent spawn from mutating parent repo checkout](https://github.com/anthropics/claude-code/pull/79237)**  
   *Opened yesterday | Author: AnasBabari*  
   Prevents `spawn_task`/`chip` from running `git checkout -b` on the parent repo's checkout by adding an isolation check. Critical for safe parallel task execution.

2. **[#79210 – Fix: strip ANSI escape fragments from model value before persisting to settings.json](https://github.com/anthropics/claude-code/pull/79210)**  
   *Opened yesterday | Author: AnasBabari*  
   The `/model` picker was persisting ANSI bold escape fragments (`[1m`) into settings.json instead of the raw model ID. A straightforward fix for a subtle configuration corruption bug.

3. **[#79211 – Fix: remove stray 're' syntax error and close `_extract_field` method in rule_engine.py](https://github.com/anthropics/claude-code/pull/79211)**  
   *Opened yesterday | Author: AnasBabari*  
   A dangling `re` statement after a UnicodeDecodeError handler broke the rule engine module, causing hooks to incorrectly flag computational work. Syntax-level fix.

4. **[#79152 – Fix: only log Statsig duplicate-comment metric when a duplicate comment was posted](https://github.com/anthropics/claude-code/pull/79152)**  
   *Opened yesterday | Author: Codeturion*  
   The dedupe bot's Statsig metric was unconditionally logging `github_duplicate_comment_added = 1` even when the `/dedupe` command bailed without commenting. Analytics accuracy fix.

5. **[#79151 – Fix: honor thumbs-down from any user when skipping duplicate auto-close](https://github.com/anthropics/claude-code/pull/79151)**  
   *Opened yesterday | Author: Codeturion*  
   The dedupe bot only counted `-1` reactions from the issue author, despite its UI promising "any user" thumbs-down would prevent auto-closure. Community trust fix.

6. **[#79150 – Docs: align code-review README with current validation-based command](https://github.com/anthropics/claude-code/pull/79150)**  
   *Opened yesterday | Author: Codeturion*  
   The code-review README still described a git blame pipeline and confidence scoring system that no longer exists. Documentation drift fix.

7. **[#79148 – Fix: add mandatory `hookify.` prefix to example rule filenames](https://github.com/anthropics/claude-code/pull/79148)**  
   *Opened yesterday | Author: Codeturion*  
   All four shipped hookify rule examples lacked the mandatory `hookify.` prefix, making them silently ignored when copied into `.claude/`. Example correctness fix.

8. **[#79140 – Fix: use `disable-model-invocation` to hide ralph-wiggum commands from model invocation](https://github.com/anthropics/claude-code/pull/79140)**  
   *Opened yesterday | Author: Codeturion*  
   Both ralph-wiggum commands set `hide-from-slash-command-tool: "true"`, a key the CLI tolerates but never reads, so the model could invoke `/ralph-loop` and start an infinite loop. Behavioral correctness fix.

9. **[#54094 – Fix: quote `$CLAUDE_PLUGIN_ROOT` in plugin hook commands](https://github.com/anthropics/claude-code/pull/54094)**  
   *Opened April 27 | Author: Codeturion*  
   Unquoted path expansion in five in-tree plugins causes hook failures when plugin root contains spaces. Long-standing shell correctness fix still open after ~3 months.

10. **[#79131 – Fix: do not abort `validate-settings.sh` when no lowercase frontmatter keys match](https://github.com/anthropics/claude-code/pull/79131)**  
    *Opened yesterday | Author: Codeturion*  
    `validate-settings.sh` exits 1 on structurally valid settings files with mixed-case frontmatter keys (e.g. `Enabled: true`), because `grep` returns non-zero on no-match under `set -euo pipefail`. Script robustness fix.

---

## Feature Request Trends

1. **Per-project MCP exclusions** (#68605): Users want the ability to disable global/user-scoped MCP servers at the project level, rather than having every server active everywhere. This is the most-upvoted enhancement request visible in today's data.

2. **Routine model selector** (#79285): The Routines UI on claude.ai lost its model selector from create and edit forms, causing runs to silently fall back to the default model. Community is requesting restoration of explicit model choice for automation.

3. **Agents view legibility** (#79281): A feature request to mark the main session and use color to keep parallel agent work legible in the terminal TUI. Reflects growing adoption of multi-agent workflows.

4. **Self-invocation of slash commands** (#79282): A user asks for the ability to let Claude run `/verify` and `/code-review` autonomously again, noting that v2.1.215 removed that capability. Suggests a middle-ground toggle rather than all-or-nothing.

---

## Developer Pain Points

1. **Model downgrade on security/cybersecurity tasks** (see #79272, #79278, #79279, #79288): Multiple users report that Claude Code silently downgrades from Fable to Opus whenever tasks touch security—even for legitimate work like app security for a home-services business or web scraping. Users feel this over-corrects and undermines trust in model selection.

2. **Windows-specific CLI regressions** (#79275, #79277, #79289): The v2.1.215 update introduced at least three Windows-specific issues: `/doctor` failing without `jq`, broken `file://` URL rendering, and indefinite subprocess hangs. Windows developers face a degraded experience compared to macOS/Linux.

3. **Subagent reliability at scale** (#79292, #79269): SSE stream stalls and silent prompt injections in subagents are eroding confidence in dynamic workflows. The stall issue is particularly concerning because connections remain ESTABLISHED with no error, making it hard to detect.

4. **Model hallucination of conversation structure** (#79293): The model fabricating entire user turns and system-reminder blocks represents a new class of output corruption. If this is a stop-token issue, it could affect output validation pipelines.

5. **Documentation-to-behavior drift**: Multiple PRs from Codeturion (e.g., #79150, #79149, #79148) reveal that several plugin READMEs describe commands and configurations that no longer match what the code actually does. This erodes developer trust in documentation as a reliable source of truth.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-20

## Today's Highlights

The Codex community is grappling with a widespread Windows performance crisis, as multiple high-engagement bugs report severe UI hangs, CPU runaway, and process storms caused by HID enumeration, WMI polling, and Git process management. On the PR front, a massive batch of 15 performance-focused pull requests merged today, targeting TUI memory efficiency, Markdown rendering caching, and thread data cloning reduction. No new releases were shipped in the last 24 hours.

## Releases
*No new versions published in the last 24 hours.*

---

## Hot Issues

### 1. [`#25719`](https://github.com/openai/codex/issues/25719) – macOS: `syspolicyd` / `trustd` CPU and memory runaway
**67 comments, 261 👍** – The top-voted open issue. Codex Desktop for macOS repeatedly triggers system security daemons (`syspolicyd`, `trustd`) into sustained high CPU and memory consumption. Users report fans spinning up and battery drain even when Codex is idle. The issue has been open since June 1, suggesting a deep OS-level interaction that has resisted fix attempts.

### 2. [`#20214`](https://github.com/openai/codex/issues/20214) – Windows: App freezes/stutters despite sufficient resources
**55 comments, 68 👍** – A long-standing Windows performance complaint (open since April 29) where the app regularly freezes on mid-range AMD hardware with 32 GB RAM. The thread has become a rallying point for Windows users reporting similar hangs.

### 3. [`#33780`](https://github.com/openai/codex/issues/33780) – Windows: App hangs on launch due to HID device enumeration
**39 comments, 8 👍** – A newly hot issue (opened July 17) where the main process blocks forever in `HID.node` → `hid.dll` when a connected HID device becomes unresponsive. This is affecting users with specialized input hardware like Stream Decks or custom keyboards.

### 4. [`#29532`](https://github.com/openai/codex/issues/29532) – macOS: Persistent SQLite TRACE log churn after `rust-v0.142.0`
**42 comments, 8 👍** – Despite a partial fix in `#29432`, SQLite TRACE-level logging to `logs_2.sqlite` continues on macOS. Users report GB-scale log files accumulating, with `RUST_LOG=warn` having no effect (see also `#30236`).

### 5. [`#33776`](https://github.com/openai/codex/issues/33776) – Windows: Hundreds of `taskkill.exe` / `conhost.exe` processes spawned
**10 comments, 9 👍** – A severe process storm where `ChatGPT.exe` spawns hundreds of orphaned `taskkill.exe` and `conhost.exe` processes, leading to WMI failure storms and DWM desktop composition degradation. Reported on build 26.707.12708.0.

### 6. [`#32683`](https://github.com/openai/codex/issues/32683) – Windows: Browser Use crashes with access violation in `chrome.dll`
**25 comments, 7 👍** – When Codex uses its in-app browser, the `CrBrowserMain` process crashes with `0xC0000005` (access violation). This blocks the "computer-use" and browser automation features for Windows Pro subscribers.

### 7. [`#30009`](https://github.com/openai/codex/issues/30009) – Windows Sandbox: `apply_patch` fails with sandbox errors
**24 comments, 7 👍** – File edits via `apply_patch` consistently fail under Windows sandboxing. Users on Pro tier have been unable to use file editing tools for weeks, as the sandbox enforcement blocks legitimate patch operations.

### 8. [`#17229`](https://github.com/openai/codex/issues/17229) – Windows: Orphaned `git.exe` / `conhost.exe` processes from status polling
**24 comments, 6 👍** – Codex repeatedly spawns `git.exe status --porcelain=v1 -z` and leaves orphaned processes. This is a long-running issue (since April) that the newly merged PR `#30235` aims to address.

### 9. [`#33541`](https://github.com/openai/codex/issues/33541) – Windows: Crashes with `0xc06d007f` cause system-wide micro-freezes
**7 comments, 6 👍** – Background crashes in the Codex Windows app cause brief but noticeable system-wide stutters. The crash code `0xc06d007f` indicates a CRT invalid argument, suggesting a corrupted state within the Electron renderer.

### 10. [`#33884`](https://github.com/openai/codex/issues/33884) – Windows: Periodic 15s hang / 10s responsive cycle
**15 comments** – A newly reported pattern (build 26.715) where the app alternates between ~15 seconds of "not responding" and ~10 seconds of responsiveness. Users with Intel i5-13600K and 95+ GB RAM report the same cycle, ruling out resource exhaustion.

---

## Key PR Progress

### 1. [`#34234`](https://github.com/openai/codex/pull/34234) – Avoid redundant TUI subagent metadata requests
Avoids backfill requests for fresh/forked threads that cannot have pre-existing subagent descendants, reducing startup latency.

### 2. [`#34223`](https://github.com/openai/codex/pull/34223) – Cache finalized Markdown history rendering
Caches rendered lines for finalized agent messages and proposed plans, with invalidation on width changes. Directly addresses scrollback rendering performance.

### 3. [`#34222`](https://github.com/openai/codex/pull/34222) – Avoid buffering replay-irrelevant thread notifications
Filters out raw response items, realtime audio, and other large payloads that the TUI doesn't consume during replay, reducing memory pressure.

### 4. [`#34216`](https://github.com/openai/codex/pull/34216) – Speed up TUI Markdown layout
Bulk-allocates table widths, reuses styled-line data during adaptive wrapping, and optimizes URL detection across span boundaries. A foundational performance fix for the TUI.

### 5. [`#34206`](https://github.com/openai/codex/pull/34206) – Avoid retaining decoded MCP images in history cells
Decodes MCP image content only for validation, then returns a marker cell without holding the decoded bitmap. Reduces per-cell memory footprint.

### 6. [`#34204`](https://github.com/openai/codex/pull/34204) – Avoid cloning buffered TUI history lines
Changes history insertion to accept slices and borrow pending batches, eliminating unnecessary `Vec` cloning in the hot path.

### 7. [`#30235`](https://github.com/openai/codex/pull/30235) – Kill timed-out Git status process groups
Runs `git status` in its own Unix process group and kills the entire group on timeout. Directly addresses `#17229` (orphaned Git processes) on Unix.

### 8. [`#34199`](https://github.com/openai/codex/pull/34199) – Avoid liveness races when starting side conversations
Fixes a race where `thread/started` notification could arrive after the fork response, causing incorrect "unavailable" reports.

### 9. [`#34198`](https://github.com/openai/codex/pull/34198) – Start side conversations without replaying inherited turns
Forks side conversations with `exclude_turns` so the UI starts empty instead of replaying parent thread turns.

### 10. [`#34194`](https://github.com/openai/codex/pull/34194) – Avoid cloning thread data when rendering transcripts
Consumes `Thread` by move in `thread_to_transcript_cells`, moving owned items into history cells instead of cloning them. Reduces memory and GC pressure.

---

## Feature Request Trends

**1. VS Code extension as full editor tabs** – [`#20951`](https://github.com/openai/codex/issues/20951) (30 👍) requests the ability to open Codex sessions as native VS Code editor tabs, similar to Claude Code. Users find the current sidebar-only approach limiting for multi-file workflows.

**2. Workspace-scoped chat sessions** – [`#25319`](https://github.com/openai/codex/issues/25319) (47 👍) asks that VS Code extension chats be scoped to the current project/workspace, with per-workspace history and configuration. Currently, all chats are global, causing cross-project context pollution.

**3. Side conversations without replay** – This theme is reflected in multiple issues and is being actively addressed by PR `#34198`. Users want quick, contextual follow-ups that don't inherit full thread history.

**4. MCP tool-only server support** – [`#14242`](https://github.com/openai/codex/issues/14242) highlights that Codex fails to use MCP servers that expose only tools (no resources), blocking integration with services like Context7.

**5. Persistent thread naming and navigation** – PR `#34229` responds to community demand for user-facing thread names, suggesting the team is moving toward better session management.

---

## Developer Pain Points

**Windows performance is the #1 pain point.** Of the top 30 open issues, 16 are Windows-specific performance bugs. Developers report:
- **Process storms:** `taskkill.exe`, `conhost.exe`, `powershell.exe`, and `git.exe` being spawned hundreds of times per session.
- **HID enumeration blocking** the Electron main thread on startup.
- **WMI and Windows Defender interactions** causing CPU runaway and DWM degradation.
- **Sandbox incompatibility** with basic file editing tools (`apply_patch`).
- **Crashes with CRT errors** (`0xc06d007f`) causing system-wide micro-freezes.

**macOS logging churn remains unfixed.** Despite a partial fix in June, TRACE-level SQLite logging continues on Apple Silicon, with `RUST_LOG=warn` being ignored.

**Cross-platform session consistency is fragile.** Issues with thread poisoning by base64 images (`#18629`), missing tools on resumed threads (`#25990`), and mobile remote sync conflicts (`#24462`) suggest the session persistence layer has reliability gaps.

**The TUI, while receiving massive optimization attention, still suffers from** scrollback line loss (`#30745`) and blank/frozen panels (`#34187`). Today's 15 PRs targeting TUI memory and rendering are a strong signal that the team is prioritizing this surface.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-20

**Date:** July 20, 2026  
**Source:** github.com/google-gemini/gemini-cli

---

## Today's Highlights

The repository remains in a nightly release cadence with **v0.52.0-nightly** published today. Community activity is dominated by several long-running, high-priority issues including silent account limit exhaustion, sub-agent recovery misreporting success after turn limits, and persistent API key redaction gaps in telemetry. A batch of **Dependabot PRs** that bump major toolchain versions (TypeScript 5→7, Vitest 3→4, ESLint 9→10, vitest 3→4) signals an aggressive modernization push. Two notable open PRs target Windows PowerShell troubleshooting and OAuth token exchange stability.

---

## Releases

- **[v0.52.0-nightly.20260720.gacae7124b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260720.gacae7124b)** — Nightly build. Full changelog available [here](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b). No feature summary provided; likely contains accumulated dependency bumps and bug fixes from the past 24 hours.

---

## Hot Issues (10 selected)

1. **[#22493](https://github.com/google-gemini/gemini-cli/issues/22493) — Account reaches limit without usage**  
   *P2, enterprise bug* — User reports quota exhaustion despite no apparent usage. 12 comments, 9 upvotes. No resolution yet; top community concern for enterprise auth reliability.

2. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS falsely reports "GOAL" success**  
   *P1, agent bug* — `codebase_investigator` subagent misreports termination reason as "GOAL" when it hit the turn limit before doing analysis. Critical for accurate agent orchestration and debugging.

3. **[#19997](https://github.com/google-gemini/gemini-cli/issues/19997) — Missing API key redaction in proxy URLs**  
   *P1, security bug* — Credentials in proxy URLs (e.g., `http://api-key-123@proxy.example.com:8080`) logged without redaction in telemetry. 10 comments, ongoing security concern.

4. **[#20005](https://github.com/google-gemini/gemini-cli/issues/20005) — Silent .env omission in untrusted workspaces**  
   *P2, core UX bug* — `GEMINI_API_KEY` from `.env` silently ignored if workspace untrusted, leading to misleading auth errors. Long-standing UX gap with 9 comments.

5. **[#20767](https://github.com/google-gemini/gemini-cli/issues/20767) — Skipped test passes and should be enabled**  
   *P3, platform bug* — `it.skip` in context compression test masks passing implementation. Low severity but signals code-quality blind spots.

6. **[#22241](https://github.com/google-gemini/gemini-cli/issues/22241) — CLI hangs indefinitely on all API calls with Google One AI Ultra**  
   *P1, enterprise bug* — OAuth-authenticated users with Google One AI Ultra subscriptions see silent hangs (no output, no error) until Node.js timeout. Regression from March 12.

7. **[#27304](https://github.com/google-gemini/gemini-cli/issues/27304) — Antigravity CLI: is it open source?**  
   *P3, documentation question* — Community confusion about the open-source status of the planned successor CLI. 35 upvotes — **highest community engagement** this week.

8. **[#19590](https://github.com/google-gemini/gemini-cli/issues/19590) — Chat context compression failure causes complete app shutdown**  
   *P1, agent bug* — Fatal JavaScript heap allocation during context compression. Affects long-running chat sessions. Marked `effort/large`.

9. **[#21851](https://github.com/google-gemini/gemini-cli/issues/21851) — /privacy command fails to persist opt-in setting**  
   *P1, security regression* — Privacy opt-out reverts to "Yes" after restart. Compliance-critical regression.

10. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution stuck on "Waiting input" after completion**  
    *P1, core bug* — Simple CLI commands hang after completion, showing "Awaiting user input". 3 upvotes, high frustration due to reproducibility.

---

## Key PR Progress (10 selected)

1. **[#28452](https://github.com/google-gemini/gemini-cli/pull/28452) — chore(deps): bump Homebrew/actions/limit-pull-requests**  
   Routine CI dependency bump. Merged.

2. **[#28457](https://github.com/google-gemini/gemini-cli/pull/28457) — chore(deps): bump marked from 15.0.12 to 18.0.6**  
   Major markdown parser update. Requires issue reference linking.

3. **[#28451](https://github.com/google-gemini/gemini-cli/pull/28451) — chore(deps): bump github/codeql-action/init from 3.29.9 to 4.37.1**  
   CodeQL major version bump. Part of the day's infrastructure refresh wave.

4. **[#28459](https://github.com/google-gemini/gemini-cli/pull/28459) — chore(deps): bump @google/genai from 1.30.0 to 2.11.0**  
   Major update to the GenAI JS SDK — likely brings new model APIs and breaking changes. Closed.

5. **[#28458](https://github.com/google-gemini/gemini-cli/pull/28458) — chore(deps): bump vitest from 3.1.1 to 4.1.10**  
   Major testing framework upgrade. Size/xl — potentially significant impact on test workflows.

6. **[#28461](https://github.com/google-gemini/gemini-cli/pull/28461) — chore(deps-dev): bump typescript from 5.8.3 to 7.0.2**  
   **Largest dependency change today** — TypeScript major version jump. Requires careful codebase validation.

7. **[#28460](https://github.com/google-gemini/gemini-cli/pull/28460) — chore(deps-dev): bump @vitest/coverage-v8 from 3.2.4 to 4.1.10**  
   Aligns coverage tooling with the Vitest 4 upgrade.

8. **[#28462](https://github.com/google-gemini/gemini-cli/pull/28462) — chore(deps-dev): bump eslint from 9.24.0 to 10.7.0**  
   ESLint major version bump. Expect new lint rules and config changes.

9. **[#28386](https://github.com/google-gemini/gemini-cli/pull/28386) — fix(vscode): track activation disposables**  
   Fixes [#27790](https://github.com/google-gemini/gemini-cli/issues/27790) — VS Code extension memory leak caused by comma-expression bug in `context.subscriptions.push()`. Open.

10. **[#28446](https://github.com/google-gemini/gemini-cli/pull/28446) — fix(auth): use native fetch for OAuth token exchange**  
    Fixes [#28440](https://github.com/google-gemini/gemini-cli/issues/28440) — "Premature close" on headless VPS during login. Uses native `fetch` instead of third-party HTTP client. Open.

---

## Feature Request Trends

- **AST-aware file operations** — Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) explore AST-based file reads, search, and codebase mapping to reduce token waste and improve tool selection precision.
- **Component-level evaluations** — The [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) EPIC extends behavioral evaluation infrastructure to individual agent components, aiming for 76+ test categories across 6 Gemini models.
- **Auto Memory improvements** — Several issues ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) request deterministic redaction, quarantine for invalid patches, and breaking low-signal retry loops.
- **Enhanced MCP compliance** — [#2015](https://github.com/google-gemini/gemini-cli/issues/2015) (6 comments, 5 upvotes) demands graceful rejection of MCP servers that lack optional `instructions` fields, per spec.
- **Model knowledge freshness** — [#27254](https://github.com/google-gemini/gemini-cli/issues/27254) highlights frustration with static outdated knowledge for libraries like PyO3.

---

## Developer Pain Points

- **Silent failures and misleading success states** — The MAX_TURNS misreporting (#22323) and silent hang (#22241) patterns erode trust in agent reliability.
- **Security and privacy compliance gaps** — API key redaction in telemetry (#19997) and `/privacy` opt-out persistence (#21851) remain unaddressed for months.
- **Quota and auth instability** — Account limit exhaustion without usage (#22493) and OAuth hangs (#22241) directly impact paying users.
- **Workspace trust friction** — Silent `.env` omission (#20005) causes debugging headaches for Windows and first-time users.
- **Terminal UI regressions on Windows** — Shift+Tab cycling (#20929) and missing PowerShell troubleshooting docs persist.
- **Context compression fragility** — Heap allocation crashes (#19590) during compression threaten long-running agent sessions.
- **Antigravity CLI transition uncertainty** — [#27304](https://github.com/google-gemini/gemini-cli/issues/27304) with 35 upvotes shows deep community concern about the open-source future of the CLI tooling they have invested in.

---

*Generated from GitHub data for 2026-07-20.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-20

## Today's Highlights
A significant **plan-mode regression** (#4188) is blocking shell commands that were previously allowed, disrupting workflows that relied on `gh` CLI integration for issue management. A new **5 MB CAPI body limit failure** (#4183) reveals that auto-compaction does not protect against accumulated tool history, which can permanently stall long sessions. On the feature side, community interest is strong around **enqueued message management** — with two new issues (#4179, #1857) requesting click-to-edit and cancel capabilities.

## Releases
No new releases in the last 24 hours. The latest available version remains **GitHub Copilot CLI 1.0.72-0**.

## Hot Issues (10 of 21 updated in last 24h)

| Issue | Title | Why It Matters | Signal |
|-------|-------|----------------|--------|
| [#4188](https://github.com/github/copilot-cli/issues/4188) | Regression on plan-mode | **Breaking change**: latest version blocks shell commands in plan mode. `gh` CLI for issue creation/reading was a core plan-enrichment workflow. **Zero comments** — incident is fresh. | 🔴 Regression |
| [#4183](https://github.com/github/copilot-cli/issues/4183) | Auto-compaction does not prevent CAPI 5 MB failure | Sessions can become **permanently unusable** even within token limits due to a separate 5 MB body limit on serialized tool history. Auto-compaction misses this. | 🔴 Stability |
| [#4180](https://github.com/github/copilot-cli/issues/4180) | Interactive TUI ignores all keyboard input written to its PTY | Breaks all **automation/orchestration tooling** (tmux, expect, pty.fork) — only Ctrl+C works. Critical for CI/CD pipeline integrations. | 🔴 Automation |
| [#4179](https://github.com/github/copilot-cli/issues/4179) | [TUI] Ability to click on enqueued entry to edit it | Direct follow-up to long-running request #1857. Community wants **mouse-driven editing** of enqueued messages, not just cancel. | 👍 Feature |
| [#4185](https://github.com/github/copilot-cli/issues/4185) | `--add-dir` causes Claude sub-agent dispatch to fail (400) | Using `--add-dir` breaks all Anthropic (Claude) sub-agent dispatches with a cache_control block limit error. **Blocks a core feature** for large-project users. | 🐛 Bug |
| [#4172](https://github.com/github/copilot-cli/issues/4172) | Exiting plan mode not reliable with new GPT-5.6 models | Plan saving succeeds but the user is **not returned to the prompt** — session hangs. Impacts all GPT-5.6 users adopting new model tier. | 🐛 Regression |
| [#4184](https://github.com/github/copilot-cli/issues/4184) | Copying path copies whitespace instead of actual path | **UX bug**: right-click copy on path component copies spaces of correct length. Niche but frustrating for heavy CLI users. | 🐛 Bug |
| [#4181](https://github.com/github/copilot-cli/issues/4181) | Can't paste image to `/btw` discussion | Image pasting fails only when typing `/btw` first; workaround exists (paste then add `/btw`). **Inconsistent UX** for multimodal workflows. | 🐛 Bug |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | Voice mode: all bundled ASR models fail silently | **17 days old, 13 comments, 0 upvotes**: every `/voice` transcription returns empty for all three models. MultiModalProcessor routing bug for `nemotron_speech`. | 🔴 Voice |
| [#1857](https://github.com/github/copilot-cli/issues/1857) | Allow users to cancel/remove enqueued messages | **24 upvotes**, 8 comments, nearly 5 months old. The **highest-demand feature** in the current batch; #4179 is a variant of this. | 🏆 Top Request |

## Key PR Progress (1 PR updated in last 24h)

| PR | Title | Status | Notes |
|----|-------|--------|-------|
| [#1](https://github.com/github/copilot-cli/pull/1) | Create ownership.yaml | **CLOSED** | Administrative (repo ownership metadata). No code changes. |

**Note:** Only 1 PR was updated in the last 24h, and it is a non-functional administrative change. The repository's development activity appears to be focused on issue triage and bug reporting rather than merged features this period.

## Feature Request Trends
1. **Enqueued Message Lifecycle Management** — The cluster of issues #1857 (cancel), #4179 (click-to-edit), and #4182 (new session from `/btw`) shows strong demand for treating the queue as a **first-class interactive element** rather than a fire-and-forget buffer.

2. **Model Observability** — Two issues (#4174 ACP token/context exposure, #4178 show effective model in background-agent views) indicate growing demand for **cost and model transparency** in multi-agent workflows, especially for enterprise billing and debugging.

3. **Visual/Media Support** — #4181 (image paste in `/btw`) and the ongoing voice mode saga (#4024) reflect community expectation for **multimodal interaction** in the CLI, even in sub-discussions.

## Developer Pain Points
- **Plan-mode instability**: Issues #4188 (blocked commands) and #4172 (hang on exit with GPT-5.6) make plan mode unreliable across model providers. This is the top developer frustration this week.
- **Session-breaking bugs**: The 5 MB CAPI body limit (#4183), PTY input rejection (#4180), and Claude sub-agent crashes with `--add-dir` (#4185) all render the CLI **unusable** for specific but common workflows — these are high-severity blockers.
- **Windows performance**: #4176 reports that **Windows desktop app takes 1–2 minutes to become usable** due to multiple CLI process launches at startup — a persistent platform-level pain point.
- **Hook integration gaps**: #4135 shows that custom `PreToolUse` hooks emit raw JSON instead of the rich diff view users expect for `ask` decisions, breaking the permission UX for enterprise policy implementations.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-20

*Generated from github.com/MoonshotAI/kimi-cli*

---

## Today's Highlights

Session state management emerged as the dominant theme this week, with multiple fixes landing for `/undo`, `/fork`, and session resume that address long-standing context corruption bugs. A new `MessageDisplay` streaming hook opens the door for real-time TTS, logging, and UI integrations. On the Windows front, a fresh arrow-key navigation bug in `herdr` was filed, reminding the community that cross-platform parity remains a work in progress.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues (10 selected)

1. **#1282 — Remote Control Feature Request**  
   *Author: CatKang | 👍: 13 | Comments: 5*  
   A highly-upvoted proposal to let users continue local CLI sessions from phones, tablets, or browsers. The 5 comments show active community debate around security and streaming architecture.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1282)

2. **#2521 — Windows: arrow keys broken in herdr**  
   *Author: RambleRainbow | 👍: 0*  
   Freshly filed: running `kimi` inside `herdr` on Windows 0.27.0 makes the arrow-key selection completely unresponsive. No comments yet, but a critical UX blocker for Windows users.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2521)

3. **#2517 — /undo and /fork truncate context.jsonl at wrong turn**  
   *Author: Nas01010101 | 👍: 0*  
   A precise bug report confirming that in compacted or steered sessions, context truncation misaligns with wire turns. Root cause analysis included — already driving PR #2520.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2517)

4. **#2511 — Mid-turn streaming hook for live reply consumers**  
   *Author: yanchenko | 👍: 0*  
   Identifies a gap in the Hooks system (Beta): no way to observe assistant replies while they stream. Proposes a `MessageDisplay` event for TTS, progress UI, and incremental logging.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2511)

5. **#2413 — Web: uploads re-sent after server restart**  
   *Author: (linked in PR #2518) | 👍: 0*  
   Every server restart causes `kimi web` to re-send all previously uploaded files, polluting the conversation. This long-standing session durability issue is now being patched.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2413)

6. **#2420 — Frozen system prompt on session resume**  
   *Author: (linked in PR #2519) | 👍: 0*  
   Resuming a session ignores newly added skills or `AGENTS.md` edits because `_system_prompt` is frozen in `context.jsonl`. A subtle but impactful regression.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2420)

7. **#1974 — Wire-only slash turns shifting undo cut**  
   *Author: (linked in PR #2520) | 👍: 0*  
   Slash commands that don't produce visible turns still shift the `/undo` pointer, causing incorrect rollbacks. The fix is bundled in the broader truncation alignment PR.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1974)

8. **#2049 — History mismatch after forks/undos**  
   *Author: (linked in PR #2520) | 👍: 0*  
   An open mystery: forking and undoing can leave the displayed history out of sync with the actual conversation state. PR #2520 targets the root cause.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2049)

9. **Plugins discovery mismatch**  
   *Implicit in PR #2514*  
   Plugin directories are being misinterpreted as flat skill directories, causing `plugin.json` subdirectories to be skipped or misread. Affects skill/plugin ecosystem reliability.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2514)

10. **Double-encoded tool-call arguments**  
    *Implicit in PR #2513*  
    The Moonshot API can return `function.arguments` with nested JSON strings. After a single `json.loads`, values remain strings, breaking Pydantic validation. Affects any plugin/tool that returns complex objects.  
    [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2513)

---

## Key PR Progress (10 selected)

1. **#2520 — fix(session): align fork/undo context truncation to wire turns**  
   *Author: Nas01010101*  
   The headline fix of the week. Resolves #2517, #1974, and likely #2049 by ensuring `context.jsonl` truncation matches actual wire turns. Also adds regression tests for slash-turn edge cases.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2520)

2. **#2512 — feat(hooks): add MessageDisplay hook for mid-turn streaming**  
   *Author: yanchenko*  
   Implements the `MessageDisplay` event — fires repeatedly during assistant reply streaming, before the `Stop` event. Modeled after Qwen Code's implementation, adapted to kimi-cli's hook engine. Enables TTS, progress bars, and live logging.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2512)

3. **#2518 — fix(web): persist uploads .sent marker so restarts do not re-send files**  
   *Author: Nas01010101*  
   Fixes #2413 by adding a `.sent` marker to track already-uploaded files across server restarts. Prevents duplicate file pollution in `kimi web` sessions.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2518)

4. **#2519 — fix(app): refresh stale frozen system prompt on session resume**  
   *Author: Nas01010101*  
   Fixes #2420: ensures resumed sessions pick up newly added skills and `AGENTS.md` edits instead of blindly using the frozen `_system_prompt`.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2519)

5. **#2515 — perf(kosong): buffer stream merges and avoid deep-copying every delta**  
   *Author: parthgupta9999*  
   Performance improvement on the streaming merge path. Replaces `str +=` (quadratic) with buffering and eliminates `model_copy(deep=True)` on every callback. Reduces overhead on long responses.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2515)

6. **#2513 — fix(kosong): recursively decode double-encoded tool-call arguments**  
   *Author: nitishagar*  
   Adds a shared `decode_tool_arguments` helper that recursively `json.loads` nested strings in tool-call arguments. Fixes Pydantic validation failures for tools returning arrays/objects.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2513)

7. **#2514 — fix(skill): ignore stray markdown in plugins container during skill discovery**  
   *Author: nitishagar*  
   Clarifies the plugin discovery logic: only `plugin.json` subdirectories should be recognized as plugins; flat `.md` files should be ignored. Prevents false positives and broken skill loading.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2514)

8. **#2516 — Create kimi-cli (CLOSED)**  
   *Author: owndaboubi1993-cyber*  
   A spurious PR titled "skills n plugins" — likely a test or accidental commit. Closed without merging. No impact.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2516)

9. **Per-streaming optimization (implicit in #2515)**  
   Author: *parthgupta9999*  
   While #2515 is the primary PR, the broader area of streaming merge performance is seeing incremental improvements. Expect more targeted optimizations as `kosong` matures.  
   *(Refer to PR #2515)*

10. **Hook system maturity (#2511 + #2512)**  
    *Author: yanchenko*  
    The Hooks (Beta) ecosystem is growing. The `MessageDisplay` hook is the first step toward a full lifecycle API for external integrations. Watch for complementary hooks like `PreSend` and `PostReceive` in future updates.  
    [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2512)

---

## Feature Request Trends

1. **Remote Control & Cross-Device Continuity** — Issue #1282 (👍 13) leads as the most-requested feature. Users want to start a session on desktop and resume it on mobile/browser without friction.
2. **Streaming Hooks for Real-Time Integrations** — The new `MessageDisplay` hook (#2512) directly responds to the demand for TTS, live logging, and progress UIs. Expect more hook events (e.g., `PreSend`, `OnError`) to follow.
3. **Session Durability & Stateful Resume** — Users consistently ask for sessions that survive restarts without data loss. Issues #2413 and #2420 reflect deep frustration with lost context after server reboots.
4. **Plugin/Skill Ecosystem Clarity** — Multiple issues and PRs (#2514, #2513) hint at confusion around plugin vs. skill discovery. A more formal plugin registry or documentation overhaul may be needed.

---

## Developer Pain Points

1. **Session Context Corruption** — The most impactful recurring theme. `/undo` and `/fork` misalignments (#2517, #1974, #2049) destroy user confidence in session history. The fix in #2520 is critical.
2. **Windows Experience Gaps** — The arrow-key bug in `herdr` (#2521) is the latest in a series of Windows-specific issues. Cross-platform testing appears inconsistent.
3. **Stale State on Resume** — Both upload re-sending (#2413) and frozen system prompts (#2420) indicate that session serialization/deserialization needs stronger tests.
4. **Tool-Call Argument Encoding** — Double-encoded JSON from the Moonshot API (#2513) is a provider-level bug that ripples into every tool/plugin. A shared decoder helps, but the root cause should be escalated to the API team.
5. **Plugin Discovery Ambiguity** — Flat `.md` files in plugin directories being misread as skills (#2514) suggests the file-system conventions are not well-documented or enforced.

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-20

## Today's Highlights

The 2.0 pre-release cycle continues to heat up with multiple context-window and provider compatibility fixes landing today. A batch of bot-contributed PRs targets context overflow detection and tool-call streaming resilience, while the community is actively reporting issues around memory leaks, ACP protocol compliance, and Windows-specific installation bugs. No new release was published in the last 24 hours.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **#4845 – Prompt is too long unrecoverable**  
   [View](https://github.com/anomalyco/opencode/issues/4845)  
   With Opus 4.5 hitting the 200K token ceiling at 121K context usage, users are locked out without recovery options. 31 comments, 19 👍 — still unresolved after 8 months, indicating a critical UX gap in context management.

2. **#13537 – [FEATURE]: Add Open WebUI as a provider**  
   [View](https://github.com/anomalyco/opencode/issues/13537)  
   Strong demand (20 👍) for integrating the popular self-hosted Open WebUI interface. Key for users running local LLM stacks with OpenAI-compatible APIs.

3. **#23798 – False MaxListenersExceededWarning on GlobalBus**  
   [View](https://github.com/anomalyco/opencode/issues/23798)  
   Node.js warnings during normal plugin event fanout degrade developer trust. 4 👍, already merged — signals proactive maintenance.

4. **#27989 – HUGE memory consumption >30GB**  
   [View](https://github.com/anomalyco/opencode/issues/27989)  
   Version 1.15.3 consuming 30GB in minutes, forcing hard kill. Unacceptable for production use; community seeking root cause.

5. **#25899 – ACP prompt() returns end_turn on user cancel**  
   [View](https://github.com/anomalyco/opencode/issues/25899)  
   ACP protocol compliance issue: cancellation vs. natural end_turn are indistinguishable on the wire. Breaks clients relying on the `cancelled` stopReason.

6. **#28364 – [FEATURE]: common mcpServers json format support**  
   [View](https://github.com/anomalyco/opencode/issues/28364)  
   Users want standard `mcpServers` config section in `opencode.json` instead of manual registration. Aligns with broader MCP ecosystem trends.

7. **#28467 – Plan mode can execute bash commands that write files**  
   [View](https://github.com/anomalyco/opencode/issues/28467)  
   Security concern: read-only plan agent can bypass file-edit restrictions via bash. Undermines the trust model for read-only mode.

8. **#16075 – Inline env var prefix bypasses bash permission rules**  
   [View](https://github.com/anomalyco/opencode/issues/16075)  
   Commands like `CI=true git commit` silently bypass `"git *": "ask"` rules. Security escalation risk — 1 👍 but high severity.

9. **#28543 – Auto-compact infinite loop with 1M token models**  
   [View](https://github.com/anomalyco/opencode/issues/28543)  
   Claude Opus 4.7 1M context shows >100% usage due to wrong denominator, triggering infinite compaction loops. Critical for large-context workflows.

10. **#37841 – Tool call streaming fails with empty-string deltas**  
    [View](https://github.com/anomalyco/opencode/issues/37841)  
    DashScope/GLM-5.2 sends empty `id`/`name` on streaming deltas, breaking OpenAI-compatible tool calls. Timely as providers push custom endpoints.

---

## Key PR Progress

1. **#37708 – fix(ai): preserve compatible reasoning details**  
   [View](https://github.com/anomalyco/opencode/pull/37708)  
   Streamed `reasoning_details` from OpenRouter, Vercel AI Gateway, Cloudflare AI Gateway, etc. are now correctly assembled. Critical for multi-provider robustness.

2. **#37842 – fix(ai): tolerate empty-string tool call id/name**  
   [View](https://github.com/anomalyco/opencode/pull/37842)  
   Direct fix for #37841 — strips empty deltas from DashScope/GLM-5.2. Merged quickly, indicating strong maintainer response.

3. **#37848 – fix(ai): expand context overflow patterns**  
   [View](https://github.com/anomalyco/opencode/pull/37848)  
   Bot-contributed expand of token-limit error recognition: maximum-input-length, model-context-length, configured-context. Essential for reliable auto-compaction.

4. **#37832 – fix(desktop): refresh legacy session panel on session switch**  
   [View](https://github.com/anomalyco/opencode/pull/37832)  
   Stale session panel content after project switch is fixed. Closes #37534 — a quality-of-life win for multi-project users.

5. **#37845 – chore(core): add location startup diagnostics**  
   [View](https://github.com/anomalyco/opencode/pull/37845)  
   Adds cold-start timing diagnostics for Location acquisition and project-copy refresh. Helps debug startup stalls reported in #37793.

6. **#37822 – fix(core): auto-recover corrupted sqlite database**  
   [View](https://github.com/anomalyco/opencode/pull/37822)  
   Prevents startup crash on malformed SQLite DB — graceful recovery via `PRAGMA integrity_check`. Closes #37821; high reliability impact.

7. **#37843 – fix(core): fail empty provider output**  
   [View](https://github.com/anomalyco/opencode/pull/37843)  
   Provider steps completing with no text and no tool calls now produce a failure instead of silent success. Fixes #37372.

8. **#37833 – fix(provider): add NVIDIA NIM DeepSeek request compatibility**  
   [View](https://github.com/anomalyco/opencode/pull/37833)  
   DeepSeek V4 models on NVIDIA NIM (flash/pro) hung on streaming. Provider-specific fix closes #24264 — important for enterprise NVIDIA users.

9. **#37834 – fix(desktop): handle async EPIPE on process.stderr**  
   [View](https://github.com/anomalyco/opencode/pull/37834)  
   Desktop app crash on parent terminal close is now handled gracefully. Closes #37749 — essential for headless/CI usage.

10. **#37828 – refactor: extract shared util package**  
    [View](https://github.com/anomalyco/opencode/pull/37828)  
    Extracts `@opencode-ai/util` from Core, removing CLI dependency on Core database/event infrastructure. Major architectural cleanup for 2.0.

---

## Feature Request Trends

- **Provider Ecosystem Expansion**: Strong demand for Open WebUI (#13537), custom MCP server config (#28364), and GDScript LSP (#28304). Users want seamless integration with diverse AI backends and language tooling.
- **Session Portability**: Export/import of chat history (#28327) and workspace icon isolation (#28550) indicate demand for persistent, shareable sessions across machines.
- **Skill & Tool Configuration**: Requests for ToolBuild hooks (#28353), skill model-size hints (#16082), and fine-grained skill discovery control (#28485) — users want runtime customization without forking the codebase.
- **VSCode/VSCode SSH Integration**: A setting to force CLI connection to a specific port (#28514) highlights the need for better remote development support.

---

## Developer Pain Points

- **Context Window Fragility**: Multiple reports (#4845, #28543, #37848) show that context limit handling is brittle across providers, especially with large-context models (1M tokens). Auto-compaction loops and unrecoverable overflows waste hours.
- **Memory & Stability Regressions**: 30GB+ memory consumption (#27989) and false MaxListeners warnings (#23798) erode trust in 1.15.x releases.
- **Permission Model Gaps**: Plan mode bypassing readonly constraints (#28467) and inline env vars bypassing bash rules (#16075) are security holes that surprise users.
- **Protocol Compliance Churn**: ACP `cancelled` vs `end_turn` ambiguity (#25899), tool-call streaming delta issues (#37841), and Vertex AI multi-region failures (#28524) suggest the provider abstraction layer needs hardening.
- **Windows & Remote Dev Friction**: `OPENCODE_INSTALL_DIR` ignored on Windows (#28437), clipboard failures in Codespaces (#17483), and TUI freezes on piped stdin (#28538) — the cross-platform experience remains uneven.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-20

## Today's Highlights

A major cleanup wave hit the repository today with over 30 issues and 9 PRs updated in the last 24 hours, many focused on robustness and developer experience. The standout fix addresses a critical memory leak (#6841) that caused 15GB servers to thrash under long-running sessions, while parallel efforts closed regressions in tool execution and API key handling. Several new provider integrations (Upstage Solar LLMs, OpenCode Go) and infrastructure improvements (shared UUIDv7, retry observability) also landed.

## Releases

No new versions published in the last 24 hours.

## Hot Issues

1. **#6841 — Unbounded memory growth in long-running sessions** ([link](https://github.com/earendil-works/pi/issues/6841))
   - *Critical.* Sessions kept open 2–3 weeks grew to 650MB RSS, causing swap thrashing on 15GB servers. The community is urgently discussing whether to implement LRU eviction or disk-backed session storage.

2. **#6832 — Orphan toolResult causes unrecoverable 400 error** ([link](https://github.com/earendil-works/pi/issues/6832))
   - *Regression of #4570/#1764.* After compaction, an orphaned `toolResult` permanently bricks sessions with "No tool call found". Users on v0.80.10 are advised to avoid long sessions until fixed.

3. **#6825 — `--system-prompt` flag not taking effect** ([link](https://github.com/earendil-works/pi/issues/6825))
   - User reports that the system prompt is silently ignored; exported HTML reports confirm it's missing. Undermines a core customization feature.

4. **#6675 — `pi update --self` gives up after single connection failure** ([link](https://github.com/earendil-works/pi/issues/6675))
   - No retry logic for transient network failures. Community suggests exponential backoff or fallback mirrors.

5. **#6819 — `assistant.usage` is undefined crashes session** ([link](https://github.com/earendil-works/pi/issues/6819))
   - DeepSeek V4 and other providers sometimes omit `usage` in streaming responses, crashing multiple functions. PR #6818 now provides a guard.

6. **#6817 — `find` returns no results for path patterns on Windows** ([link](https://github.com/earendil-works/pi/issues/6817))
   - Windows-specific path separator bug makes `src/**/*.ts` fail silently. Cross-platform compatibility remains a pain point.

7. **#6820 — Queued messages dropped after auto-compaction** ([link](https://github.com/earendil-works/pi/issues/6820))
   - Messages typed during threshold compaction are silently lost. Users want a clear queue or deferral mechanism.

8. **#6822 — Promptless sessions restore default model instead of persisted state** ([link](https://github.com/earendil-works/pi/issues/6822))
   - Reopening a session with only `model_change` entries overwrites the model selection. Frustrating for users who switch models mid-session.

9. **#6768 — Compaction fails with Copilot Enterprise** ([link](https://github.com/earendil-works/pi/issues/6768))
   - OpenAPI returns 421 Misdirected Request; Anthropic also fails. Enterprise Copilot users are blocked from context compaction entirely.

10. **#6810 — Manual `/retry` command for transient failures** ([link](https://github.com/earendil-works/pi/issues/6810))
    - Automatic retries exhaust in seconds. Users on mobile/low-bandwidth connections want a manual retry mechanism.

## Key PR Progress

1. **#6828 — Support OpenCode Go Responses models** ([link](https://github.com/earendil-works/pi/pull/6828))
   - Registers OpenAI Responses API for Grok 4.5 via `@ai-sdk/openai-compatible`. Closed with type-safe provider declaration.

2. **#6840 — Add shared `contentText` utility** ([link](https://github.com/earendil-works/pi/pull/6840))
   - Extracts text content from AI SDK messages; closes #6839. Small but reduces boilerplate across providers.

3. **#6834 — Share UUIDv7 across packages, use for Codex** ([link](https://github.com/earendil-works/pi/pull/6834))
   - Moves UUIDv7 to `pi-ai` and uses it as default for Codex requests without session IDs. Closes #6831.

4. **#6837 — Align GPT-5.6 Codex context window to 272K** ([link](https://github.com/earendil-works/pi/pull/6837))
   - Corrects the default context from 372K to match official client. Keeps long-context pricing tiers intact.

5. **#6775 — Retry on compaction/branch summarization failures** ([link](https://github.com/earendil-works/pi/pull/6775))
   - Adds retry logic to compaction and summarization with configurable attempts. Still open; maintainers discussing UI feedback.

6. **#6824 / #6823 — Add Upstage (Solar LLMs) as built-in provider** ([link](https://github.com/earendil-works/pi/pull/6824))
   - Two PRs (duplicates) introducing `solar-mini`, `solar-pro2`, and two large models. Closed; the implementation is settled.

7. **#6818 — Guard against undefined `assistant.usage`** ([link](https://github.com/earendil-works/pi/pull/6818))
   - Adds null checks across context token calculations. Closes #6819; prevents session bricking from missing usage data.

8. **#836 — Add ACP mode for editor integration** ([link](https://github.com/earendil-works/pi/pull/836))
   - Long-standing PR implementing Agent Client Protocol support for Zed and JetBrains. Closed after feedback from community testing.

9. **#6827 — Forward `willRetry` to extension-visible events** ([link](https://github.com/earendil-works/pi/pull/6827))
   - Mirror of #4716; exposes retry status to extensions so they can show progress indicators or log retries.

10. **#6835 — Configurable line limit in `createReadToolDefinition`** ([link](https://github.com/earendil-works/pi/pull/6835))
    - Exposes `defaultMaxLines` and `maxLines` options instead of hardcoded 2000. Gives extensions more control over file reads.

## Feature Request Trends

1. **Extension Hooks for Tool Lifecycle** — Multiple requests (#6816, #6827, #6836) ask for batch tool call judgment hooks and retry lifecycle events. Developers want to intercept, modify, or monitor parallel tool execution before and after finalization.

2. **Local Model Server Discovery** — #6305 and related requests call for automatic LAN broadcast detection or simplifed URL configuration. Newbies find manual `http://127.0.0.1/v1` setup daunting.

3. **Customizable UI Components** — #6821 and #6833 propose swap-able message rendering components and configurable navigation help. Power users want complete terminal real estate control.

4. **Remote Session Execution** — #5341 (still active) for SSH-based remote container execution remains the most requested infrastructure feature. Users want Pi sessions on remote hosts with local UI.

5. **Manual Retry Mechanisms** — #6810 and #6819 feedback highlight a desire for `/retry` commands and configurable retry exhaustion, especially for unreliable network environments.

## Developer Pain Points

1. **Session Memory Bloat** — #6841 exemplifies a widespread concern: long-running sessions consume unbounded RAM. Multiple workarounds (restarting, using smaller files) are band-aids on a systemic issue.

2. **Cross-Platform File Path Bugs** — #6817 (Windows `find` tool) and under-reported issues show the Linux-first codebase regularly breaks on Windows. Developers on Windows feel like second-class citizens.

3. **Provider API Inconsistency** — #6819 (undefined `usage`), #6768 (Copilot compaction), and #6838 (wrong context windows) reveal that provider-specific quirks often bypass testing. Each new provider adds maintenance burden.

4. **Compaction Reliability** — #6832 (orphan tool results) and #6820 (dropped messages) make compaction feel fragile. Users report permanent session corruption, eroding trust in long-running workflows.

5. **Startup Lock Contention** — #1871 resurfaced again: parallel process starts cause misleading "No API key found" errors due to file lock conflicts. Subagent users hit this daily.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**2026-07-20**

## Today's Highlights

A major v0.20.0 stable release dropped today alongside a preview patch, cementing several quarters of work. The daemon ecosystem continues to mature with new worktree isolation support, a long-awaited built-in `web_search` tool is back in PR review, and the team is aggressively fixing subagent model mutation, SSE subscriber leaks, and goal-loop deadlocks that have frustrated users.

## Releases

**v0.20.0** (stable) — Full changelog includes bounded daemon log rotation and other CLI improvements. No breaking changes declared.  
**v0.20.1-preview.7215** — Patch preview with autofix label-driven takeover and forced-dispatch green no-op fix.  
[Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.20.0...v0.20.1-preview.7215)

## Hot Issues (10 noteworthy)

1. **[#4748](https://github.com/QwenLM/qwen-code/issues/4748) — Optimize daemon cold start**  
   Closed after ~7 weeks. Original 2.5s daemon boot gap vs 0.7s CLI is now substantially optimized. The remaining lazy-loading candidates are tracked in a new follow-up (#7264).

2. **[#7156](https://github.com/QwenLM/qwen-code/issues/7156) — Subagent mutates main session model**  
   P1 bug. Even after #7119 fixed one model-override path, subagent execution silently switches the main session's model, causing context overflow 400 errors. High community engagement (11 comments).

3. **[#4801](https://github.com/QwenLM/qwen-code/issues/4801) — Add dedicated web_search tool**  
   Closed but relevant: the feature request that finally materialized as PR #7215 today (see below). Community has been asking for this since May.

4. **[#7147](https://github.com/QwenLM/qwen-code/issues/7147) — MCP server tool listing times out**  
   Affects Fastmail MCP and likely other servers. Authentication works, but `tools/list` never completes. Needs triage.

5. **[#6569](https://github.com/QwenLM/qwen-code/issues/6569) — Subagent observability**  
   Users want real-time execution visibility and manual intervention for subagents. Current condensed output makes debugging impossible. Labeled for roadmap/subagents-tools.

6. **[#6237](https://github.com/QwenLM/qwen-code/issues/6237) — Plan mode content leakage**  
   Plan content leaks into subsequent assistant responses after `exit_plan_mode`. P2 bug with 3 comments; affects interactive users heavily.

7. **[#6996](https://github.com/QwenLM/qwen-code/issues/6996) — Custom OpenAI provider always fails with generic "Connection error"**  
   Root cause is discarded before logging. Frustrating for users with private or non-standard OpenAI-compatible endpoints.

8. **[#7139](https://github.com/QwenLM/qwen-code/issues/7139) — Windows Docker sandbox: invalid workspace cwd**  
   P1 bug for Windows users. `qwen serve` launches Docker but shell tools fail with `chdir(2) failed` due to path format issues.

9. **[#7181](https://github.com/QwenLM/qwen-code/issues/7181) — /goal loop blocks user input**  
   Active goals queue all user input (including `/goal clear`) until the goal completes. Workaround is Ctrl+C. Ready for agent fix.

10. **[#7238](https://github.com/QwenLM/qwen-code/issues/7238) — RestSseTransport leaks SSE subscribers**  
    Normal iterator exit doesn't close SSE connections, leading to HTTP 429 "too many subscribers" daemon-wide outage. PR #7257 proposes a fix.

## Key PR Progress (10 important)

1. **[#7262](https://github.com/QwenLM/qwen-code/pull/7262) — Restore worktree isolation on session load/resume**  
   Fixes restart persistence gap: worktree sessions disappeared after daemon restart. `SessionService.sessionBelongsToCurrentProject` now correctly compares against workspace paths.

2. **[#7239](https://github.com/QwenLM/qwen-code/pull/7239) — Estimate reasoning_tokens when missing**  
   Provides fallback for OpenAI-compatible providers that omit `reasoning_tokens` from usage responses. Uses text estimator for non-streaming, bounded integer estimation for streaming.

3. **[#7215](https://github.com/QwenLM/qwen-code/pull/7215) — Opt-in built-in web_search (DashScope Responses API)**  
   The long-awaited built-in web search tool, backed by DashScope's server-side search. Off by default, works with existing Bailian API key — no MCP server or extra provider needed.

4. **[#7248](https://github.com/QwenLM/qwen-code/pull/7248) — Enforce Plan mode entry boundary**  
   Makes `enter_plan_mode` an execution boundary in multi-tool batches. Prevents plan mode from being silently skipped when batched with other tools.

5. **[#7265](https://github.com/QwenLM/qwen-code/pull/7265) — Repaint TUI after OS sleep/wake or SIGCONT**  
   Fixes broken TUI display after macOS sleep or `Ctrl+Z` → `fg`. Uses `useWakeRepaint` hook to force full terminal repaint.

6. **[#7237](https://github.com/QwenLM/qwen-code/pull/7237) — Fence concurrent ACP session writers**  
   Protects against concurrent writes to the same ACP session via atomic hard-link lease. Extracted from #7166 as P0a fix.

7. **[#7258](https://github.com/QwenLM/qwen-code/pull/7258) — Yield to single-slot background agents**  
   When background subagent takes the only available slot, main agent now waits correctly. Fixes resource starvation for single-slot configurations.

8. **[#7221](https://github.com/QwenLM/qwen-code/pull/7221) — Worktree-isolated sessions in Web Shell**  
   Enables parallel tasks in same workspace via git worktrees. Users can create isolated sessions without dirtying main working directory.

9. **[#7266](https://github.com/QwenLM/qwen-code/pull/7266) — GitHub/GitLab/Gitea polling channel adapters**  
   Adds three new polling channel adapters with cursor fix and full documentation. Enables workspace notifications from popular Git hosting platforms.

10. **[#7257](https://github.com/QwenLM/qwen-code/pull/7257) — Abort SSE request on iterator exit**  
    Fixes #7238. `subscribeEvents()` now treats AbortController as owning the full request lifetime, properly releasing HTTP connections.

## Feature Request Trends

- **Web search**: The most consistent request. After months of being "the only mainstream Code Agent CLI without a WebSearch tool," PR #7215 may finally close this gap.
- **Subagent observability**: Users want real-time execution tracing, logs, and ability to manually intervene with running subagents (e.g., cancel, redirect).
- **Worktree parallelism**: Multiple teams are requesting isolated sandboxed sessions for parallel coding tasks. PR #7221 and #7262 address this.
- **Channel management**: Users want full CRUD for workspace channels from the Web Shell, plus QR-based browser authentication.
- **Built-in model support**: Users request deeper integration with Alibaba Cloud Model Studio's new `qwen3.8-max-preview` and other token-plan models.

## Developer Pain Points

- **Subagent model pollution**: A recurring cluster of bugs where subagents silently override main session model settings, causing context overflows and 400 errors. Two separate fixes needed so far (#7119, now #7156).
- **Daemon resource leaks**: SSE subscribers (HTTP 429), background agent completions leaking into final replies, and channel session concurrency issues dominate recent bug reports.
- **Plan mode UX friction**: Content leakage through `exit_plan_mode`, goal-loop deadlocks that ignore user input, and plan entry boundary violations frustrate daily users.
- **Windows sandboxing**: Docker path formatting on Windows remains broken, making `qwen serve` effectively unusable on the platform for sandboxed environments.
- **Generic provider error obscurity**: The catch-all "Connection error" for custom OpenAI-compatible providers swallows the real cause, making debugging near impossible for users with self-hosted or nonstandard backends.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-20

## Today's Highlights
A major performance-focused push landed today, centered on subagent token efficiency and prompt compression. The team shipped a critical fix for Full Access mode where routine `git push` operations were incorrectly triggering approval prompts. Separately, a comprehensive environment-variable precedence cleanup (`CODEWHALE_*` with `DEEPSEEK_*` fallback) marks the continued migration away from the "DeepSeek" brand identity toward "CodeWhale."

## Releases
No new releases in the last 24 hours. The latest stable remains **v0.9.2**, with v0.9.1 queue items actively being worked in open PRs.

## Hot Issues (10 Selected)

**#4042 — feat: Environment-level tool sandboxing for sub-agents** `[CLOSED]`
A landmark issue tracking runtime enforcement of tool restrictions across sessions, sub-agents, Fleet workers, and MCP servers. Confirmed `--disallowed-tools` works and is now enforced. Community engagement high (16 comments), reflecting strong demand for sandboxing in multi-agent workflows.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4042)

**#1425 — Session freeze after large text processing** `[OPEN]`
A Chinese-language user reports that analyzing a 3-million-character novel causes the session to hang when 10 sub-agents are spawned and hit `agent_wait` timeout. The root cause appears to be sub-agent orchestration under high concurrency. 3 comments; community is watching for a fix.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/1425)

**#4594 — v0.9.1 bug: sidebar list doesn't scroll to bottom** `[OPEN]`
Filed by the repo owner. With a 10-item To-do list, the top bar/sidebar cannot scroll to the last items. A UI regression in the latest release; likely caused by viewport overflow calculations.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4594)

**#4568 — Slash commands (`/xxx`) slow in new version** `[OPEN]`
Performance regression reported on Windows 10. Slash commands are "almost instant" in the previous version but "obviously stuck" now. Suspected optimization backslide in input processing.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4568)

**#4564 — `codewhale exec --auto`: flags consumed as single arg on Windows** `[OPEN]`
On Windows with npm global install, `--model` and `--toolsets` flags placed before `exec` are concatenated into a single argument. Workaround: use `codewhale exec --auto --max-steps N prompt`. Suggests env-var alternatives (`CODEWHALE_MODEL`, `CODEWHALE_TOOLSETS`).
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4564)

**#4595 — Full Access: feature-branch push incorrectly classified as publish-like** `[CLOSED]`
Under Full Access, `git push origin <feature-branch>` triggered an approval prompt meant for publish-like actions. Root cause: the classification heuristic was ref-unaware. Fixed in PR #4596.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4595)

**#4599 — One source of truth for per-model facts** `[OPEN]`
Filed by the owner. Model metadata (context window, max output, capabilities) is scattered across `constants`, `known_context_window_for_model()`, `route_runtime.rs`, and consumer tests. Proposes centralizing into `models.dev` or a single registry struct.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4599)

**#4598 — Operate mode under-delegates** `[OPEN]`
In Operate mode, the parent agent tends to grind through work sequentially instead of delegating to sub-agents, even when the queue is parallelizable. The policy text says delegation is "not mandatory," which contradicts user expectation that Operate = aggressive subagent use.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4598)

**#4564 (bis) — Windows args consumed as single string** `[OPEN]`
Also noted above; worth highlighting separately for Windows users. The bug affects anyone using `codewhale exec` from PowerShell or cmd.exe with tool flags.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4564)

**#4542 (implied from PRs) — MCP tool deferral bypass under Full Access** `[OPEN]`
Multiple PRs reference that MCP tools with `defer_loading=true` don't appear in the model's available tools in Full Access Agent mode, even when trust is explicitly granted. Fixed in PR #4582 by bypassing deferral when `trust_mode` or auto-approve is active.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4542)

## Key PR Progress (10 Selected)

**#4602 — `CODEWHALE_*` precedence and product-identity cleanup** `[OPEN]`
Three-part cleanup: (1) sets `CODEWHALE_*` vars as primary with `DEEPSEEK_*` as fallback; (2) removes lingering DeepSeek branding from docs and UI; (3) a survey with a gap report. No feature work landed for part 3. Part of v0.9.1 queue.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4602)

**#4601 — Composer real-editor contract** `[OPEN]`
Brings durable editing support: char-wise selection (`Shift+←/→`), linewise undo/redo, and stable cursor state. Builds on existing selection/undo model rather than duplicating it. v0.9.1 queue item.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4601)

**#4600 — Auto-fork read-only same-route children onto parent's cached prefix** `[OPEN]`
Token-cost driver #1: every subagent currently cold-starts, re-prefilling system prompt + tools (~100K input per child). This PR lets same-route children reuse the parent's cached prefix via the existing fork mechanism. Expected to save massive token waste in multi-agent scenarios.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4600)

**#4597 — Compress Agent mode prompt** `[CLOSED]`
Reduces `agent.md` from 661 words to 542 words (−18%), and the full assembled prefix from 4010 to 3519 tokens (−12%). Cuts cold-start costs and cache-write overhead. Cost driver #3 in the token-cost investigation.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4597)

**#4593 — Harden PowerShell invocation for Windows** `[CLOSED]`
Adds `-NoLogo -NoProfile -NonInteractive` flags to all PowerShell spawns, captures native `$LASTEXITCODE`, and prefers `pwsh` over `powershell.exe`. Addresses Windows stability concerns from several issues.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4593)

**#4596 — Make Full Access truly full access for publish-like shell** `[CLOSED]`
Fixes #4595. Two defects fixed: (1) `git push` classification is now ref-aware and fail-closed; (2) force/delete/tags/mirror forms are correctly identified. Non-publish pushes no longer prompt.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4596)

**#4592 — Align every K3 route with its verified per-route contract** `[CLOSED]`
Independent verification of Moonshot K3 routes showed that pricing, capabilities, and code access differ per route (open-platform `kimi-k3` vs. membership `kimi-k3-code`). Updated all route facts accordingly.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4592)

**#4590 — Localize session and route picker surfaces** `[CLOSED]`
Completes the Blue Stage identity-middle localization slice: session picker status/errors/metadata, model picker empty states, provider list, and relative times. All now localized via the existing i18n framework.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4590)

**#4585 — Coalesce repeated read-only calls** `[CLOSED]`
Performance improvement: tracks finalized read-only calls per external user turn by resolved tool name + canonical argument hash. Duplicate calls in the same batch are coalesced behind one physical execution, preserving results and events. Corrective for replay stability.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4585)

**#4582 — Bypass MCP tool deferral when trust_mode or auto-approve is active** `[CLOSED]`
Fixes a bug where MCP tools with `defer_loading=true` remained invisible to the model even in Full Access Agent mode (where trust is equivalent to YOLO). Now, when `trust_mode=true` or `auto_approve=true`, MCP deferral is bypassed.
🔗 [GitHub](https://github.com/Hmbown/CodeWhale/pull/4582)

## Feature Request Trends

1. **Multi-agent orchestration improvements**: Users want more reliable sub-agent spawning, better timeouts, and smarter delegation. Issues #1425 (session freeze on large text) and #4598 (under-delegation in Operate mode) both point to gaps in sub-agent lifecycle management.

2. **Windows parity**: Two separate Windows-specific bugs (#4564 args, #4593 PowerShell) highlight that Windows remains a second-class citizen. Users want environment variable fallbacks and robust PowerShell invocation.

3. **Model fact centralization**: The owner's issue #4599 proposes a single registry for per-model metadata. Community has expressed frustration with scattered, inconsistent model capability definitions across codebase.

4. **Security posture refinement**: Both #4042 (tool sandboxing) and #4595 (false publish prompts) show users want granular, predictable security controls—not just "all or nothing" modes.

5. **Performance regressions**: Users are sensitive to input processing latency (#4568 slash commands) and UI scrolling bugs (#4594). Performance optimization is welcome, but regression detection needs improvement.

## Developer Pain Points

1. **Sub-agent timeout fragility**: Large multi-agent tasks fail unpredictably due to `agent_wait` timeouts (#1425). Developers need configurable wait durations or adaptive timeout strategies.

2. **Windows CLI argument parsing**: Flag ordering and concatenation bugs (#4564) force Windows users to use workarounds like env vars or specific arg positions. A fundamental parsing issue in npm-global installs.

3. **MCP tool visibility inconsistency**: Tools with `defer_loading=true` remain hidden even when trust is explicitly granted (#4582 fix). The trust model and tool visibility model are not well-aligned.

4. **Scattered model facts**: Developers maintaining provider integrations must track model metadata in at least four locations (#4599). This causes mismatched capability reports and hard-to-debug routing issues.

5. **UI regression sensitivity**: The scrolling bug (#4594) and slash command latency (#4568) indicate that recent UI refactors may lack sufficient regression coverage, particularly for edge cases like long lists or Windows environments.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*