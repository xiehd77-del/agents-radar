# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-22 02:47 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-07-22

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing a period of **intense maturation** driven by three dominant forces: the **MCP (Model Context Protocol) integration crisis**, a **platform-level push toward agent orchestration**, and escalating **Windows stability failures** that are consuming engineering bandwidth across multiple projects. While tools like Claude Code and Copilot CLI focus on extending MCP reliability and feature completeness, Claude Code, OpenCode, and Gemini CLI are all shipping security patches for OAuth flow bugs, RCE vulnerabilities, and RBAC bypasses. Most notably, a **cross-platform performance regression wave**—including fd leaks causing kernel panics (Claude Code), `taskkill.exe` storms freezing Windows desktops (Codex), and unbounded shell output burning tokens (Gemini CLI)—suggests the ecosystem's rapid feature shipping has outpaced its reliability engineering. The Kimi Code CLI and Pi communities show growing demand for **local LLM integration**, while Qwen Code and DeepSeek TUI are stabilizing toward releases with architectural refactors and subagent isolation hardening.

---

## 2. Activity Comparison

| Tool | Hot Issues (Last 24h) | PRs (Last 24h) | Release Status | Community Sentiment |
|---|---|---|---|---|
| **Claude Code** | 10 (3 MCP drop reports) | 10 merged/active | v2.1.217 (emoji autocomplete) | Mixed—serious reliability concerns amid new features |
| **OpenAI Codex** | 10 (5 Windows process-storm reports) | 10 merged (security & stability) | rust-v0.145.0 (thread history, imports) | Strained—Windows crisis dominating conversation |
| **Gemini CLI** | 10 (Antigravity migration anxiety) | 10 (RCE patch, security hardening) | v0.52.0-nightly (workspace trust) | Anxious—community questioning project direction |
| **Copilot CLI** | 10 (MCP connectivity, plan-mode regression) | 1 (ViewSonic—early stage) | v1.0.74-0 (/model plan) | Cautious—MCP and BYOK gaps emerging |
| **Kimi Code CLI** | 5 (K2.5 model broken, MCP schema rejection) | 1 (shell hang fix) | v0.28.1 (no change today) | Frustrated—model regression eroding trust |
| **OpenCode** | 10 (subscription auth failures, compaction loops) | 10 (clock-skew fix, Windows HTTP fix) | None today | Tense—paid-tier auth failures dominant |
| **Pi** | 10 (crash-on-upgrade, SDK retry bug) | 10 (OAuth flows, local LLM fixes) | v0.81.1 (verifiable archives) | Recovering—quick patch cycle after v0.81.0 breakage |
| **Qwen Code** | 10 (subagent model mutation, OpenAI compat) | 10 (CODEOWNERS router, Java SDK transport) | v0.20.1 (stable patch) | Stable—focused on infrastructure and enterprise |
| **DeepSeek TUI** | 10 (release-blocker closures) | 10 (v0.9.1 freeze integration) | Pre-release (v0.9.1 freeze) | Positive—converging on release with major fixes |

---

## 3. Shared Feature Directions

**Requirements appearing across three or more tool communities:**

| Feature / Need | Affected Tools | Details |
|---|---|---|
| **MCP Reliability & Observability** | Claude Code, Copilot CLI, Kimi Code CLI, Gemini CLI | Silent tool drops (#78826, #79992), invisible MCP tools (#2282, #1518), schema rejection (#2531), OAuth registration failures (#20990). Community demanding tool-call confirmation, server-side diagnostics, and full MCP protocol support (resources, prompts). |
| **Windows Process & File System Stability** | Codex, Claude Code, Copilot CLI, Kimi Code CLI, Pi | Unbounded `taskkill.exe` storms (Codex #33776), fd leaks → kernel panics (Claude Code #79920), zombie processes (Copilot CLI #4163), Windows path glob failures (Pi #6817), numpad key drops (Kimi #2529). Cross-platform regression is systemic. |
| **Local / Self-Hosted LLM Support** | Pi, Qwen Code, DeepSeek TUI, Kimi Code CLI | Dynamic model discovery from Ollama/llama.cpp (Pi #3357, +43👍), local timeout fixes (Pi #6933), custom provider configs (DeepSeek #4660), OpenAI-compatible model quirks (Qwen #7316, #7433). |
| **Subagent / Fork Agent Isolation** | Claude Code, Codex, Qwen Code, DeepSeek TUI | Token cap asymmetry (Claude Code #78460), model contamination (Qwen #7156), worktree isolation (DeepSeek #4673), terminal thread deadlock (Codex #33777). Need for deterministic subagent behavior. |
| **Session Continuity & Persistence** | Claude Code, Copilot CLI, OpenCode, Pi | Reconnection failures (Claude Code #34255), compaction loops (OpenCode #30680), broken session resume (Pi #6915), WebSocket fragility (Pi #6931). |
| **OAuth & Authentication Flows** | Gemini CLI, Copilot CLI, Pi, DeepSeek TUI | Device-code OAuth fixes (DeepSeek #4410), native PKCE flows (Pi #6927), OTP sign-in gaps (Codex #28078), silent token refresh failures (Gemini #21956). |
| **Token/Budget Transparency** | Claude Code, Copilot CLI, OpenCode, Gemini CLI | Per-subagent credit breakdown requests, output budgeting (#7306), unbounded command output costs (Gemini #28401), session cost tracking. |
| **Plan / Goal Mode Regressions** | Copilot CLI, Kimi Code CLI | Blocked shell commands in plan mode (Copilot #4188), infinite retry loops in Goal Mode (Kimi #2527). |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary focus** | MCP ecosystem + workflow plugins | Agent orchestration + sandboxing | Security + Google Cloud integration | MCP + BYOK + GitHub ecosystem | K2.5 model + MCP tools | Desktop/Web UI + subscription management | Local LLMs + multi-provider OAuth | Infrastructure + Java SDK + daemon stability | Release hardening + subagent correctness |
| **Target user** | Advanced MCP developers | Power users with complex automation | Enterprise GCP users | GitHub-native developers | Model-specific users (Moonshot AI) | Desktop-focused paid subscribers | Local-first developers | Enterprise Java shops | TUI-first developers |
| **Technical approach** | Plugin hooks (Hookify), twilight workflows | Rust-based sandbox, job object cleanup | CUELang policy, a2a-server isolation | Git-backed sessions, CAPI protocol | Python async, React TUI | Bun/JS stack, Solid.js Desktop | Node.js, multi-SDK abstraction | Python + ACP daemon protocol | Rust TUI, unified skills manager |
| **Key differentiation** | MCP tool-call observability gap | Windows process lifecycle refactor | Antigravity migration vs standalone CLI | BYOK customization + plan-mode model picker | Client-side schema sanitization needed | Subscription auth + layout persistence tuning | Crash-on-upgrade recovery + Shrinkwrap issues | CODEOWNERS routing + Java SDK transport | Release freeze with architecture refactor |
| **Community maturity** | Mature, high engagement on MCP | Volatile, Windows crisis dominating | Anxious about direction change | Growing MCP demand | Small but vocal, model-reliant | High volume, paid-user frustrations | Active, local-LLM driven | Stable, enterprise-focused | Converging on release with QA |

---

## 5. Community Momentum & Maturity

**Rapidly maturing / high momentum:**
- **Claude Code** — Highest community engagement (99 upvotes on remote-control issue, 57 comments). MCP tool-drop cluster is the ecosystem's most-watched reliability story. Emoji autocomplete and twilight plugin signal UX innovation.
- **Qwen Code** — Stable patch cadence, active infrastructure PRs (CODEOWNERS router, Java SDK), and a growing enterprise contributor base. Lowest drama per issue ratio.
- **DeepSeek TUI** — Converging on v0.9.1 with clear architectural goals (unified skills, collapsed command execution). Tight release management with 10+ blocker closures shows maturity.

**Moderate momentum / stabilization phase:**
- **Pi** — Quick patch response (v0.81.0 → v0.81.1 within 24h for crash fix). Active OAuth and local LLM feature work. Shrinkwrap packaging issue remains a structural concern.
- **Copilot CLI** — Steady release cadence (/model plan), but MCP and BYOK gaps are accumulating. Only 1 PR in 24h suggests engineering is issue-driven, not feature-driven.
- **OpenCode** — High issue volume (119 comments on memory megathread, 90👍), but subscription auth failure cluster suggests core platform stability issues. PRs are reactive (clock-skew, WSL crash).

**Under strain / risk of community erosion:**
- **Codex** — Windows process-spawning storms are the #1 crisis across the entire ecosystem. 5+ issues describing identical `taskkill.exe`/`conhost.exe` storms, WMI exhaustion, and system freezes. The 20+ merged PRs suggest a major stabilization sprint, but community patience is wearing thin.
- **Gemini CLI** — Antigravity migration anxiety is the dominant sentiment. Top issue (#27314) questioning project direction, with users calling quotas "unusable." Security patches are landing (RCE fix), but strategic uncertainty may drive users away.
- **Kimi Code CLI** — Small community hit hard by a critical model regression (K2.5 tool calling broken). MCP schema rejection (#2531) adds friction for custom tool developers. No release in 24h and only 1 PR indicates limited engineering bandwidth.

---

## 6. Trend Signals

**For developers evaluating AI CLI tools, the following industry trends emerge from this week's data:**

1. **MCP is the new interoperability battleground, but reliability is the weakest link.** Every major tool claims MCP support, but users across Claude Code, Copilot CLI, Kimi Code, and Gemini CLI are reporting tools that appear connected but never execute. **If you build on MCP, demand tool-call observability and server-side diagnostics.** The protocol is maturing faster than tool implementations.

2. **Windows support is an afterthought—and it's hurting users.** From Codex's `taskkill.exe` storms to Claude Code's MSIX update locks, Pi's path glob failures, and Kimi's numpad key drops, Windows users are consistently second-class citizens. **If your team uses Windows, expect 1–3 months of delay before critical Linux/macOS features are stable on your platform.**

3. **Local LLM integration is the next growth vector.** Pi's `v0.81.0` llama.cpp support, Qwen Code's OpenAI-compatible model handling, and DeepSeek TUI's self-hosted route fixes all point to a market where developers want to escape API-dependent pricing. **There is no dominant local-first CLI tool yet—this is a greenfield opportunity for tooling that works offline.**

4. **Subscription authentication and billing remain fragile.** OpenCode's "paid model returns 401" cluster, Gemini CLI's false quota exhaustion, and Claude Code's Fable 5 gating in CLI all demonstrate that **payment infrastructure is a source of friction, not revenue.** Expect consolidation around fewer, more reliable gateways.

5. **Subagent/fork isolation is becoming a platform requirement.** As agents spawn subagents for complex workflows, three distinct failure patterns emerged this week: token caps too low (Claude Code), model contamination (Qwen Code), and worktree isolation gaps (DeepSeek TUI). **If you're building on multi-agent patterns, verify isolation protocols before investing.**

6. **The "fast feature, slow stability" cycle is peaking.** Across all nine tools, this week's data shows a clear pattern: rapid feature releases (emoji autocomplete, paginated history, /model plan) are followed by clusters of stability regressions (process storms, crash-on-upgrade, OOM kills). **Budget for 20–30% downtime or breakage on major version updates from any tool in this ecosystem.**

---

*Report generated from community digest data for 2026-07-22. Intended for technical decision-makers evaluating AI CLI tool investments and architectural choices.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-22** | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

The following Skills PRs generated the most community discussion and attention:

### #1 — [`skill-creator` Fix: Zero Recall Bug](https://github.com/anthropics/skills/pull/1298)
- **Author:** MartinCajiao | **Status:** Open
- **Functionality:** Fixes `run_eval.py` which reports `recall=0%` for all skill descriptions (#556, confirmed by 10+ users). The PR installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers.
- **Discussion highlights:** This is the most critical infrastructure issue in the ecosystem—the description-optimization loop has been optimizing against noise, making `skill-creator` effectively broken for its core purpose.

### #2 — [`self-audit` Skill v1.3.0](https://github.com/anthropics/skills/pull/1367)
- **Author:** YuhaoLin2005 | **Status:** Open
- **Functionality:** A meta-skill that audits AI output before delivery—mechanical file verification followed by a four-dimension reasoning audit in damage-severity priority order. Universal across projects and tech stacks.
- **Discussion highlights:** Proposes a novel "reasoning quality gate" pipeline, addressing a gap where Claude produces plausible but incorrect outputs. Active discussion on integration with CI/CD flows.

### #3 — [`document-typography` Skill](https://github.com/anthropics/skills/pull/514)
- **Author:** PGTBoos | **Status:** Open
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents—issues that affect every document Claude generates.
- **Discussion highlights:** High community interest in production-quality document output. Commenters noted this addresses a universal pain point rarely covered by similar tools.

### #4 — [`testing-patterns` Skill](https://github.com/anthropics/skills/pull/723)
- **Author:** 4444J99 | **Status:** Open
- **Functionality:** Comprehensive testing skill covering Testing Trophy model, unit testing (AAA pattern), React component testing, integration, E2E, and performance testing.
- **Discussion highlights:** Broad support for standardized testing guidance. Debate centered on whether to include framework-specific vs. framework-agnostic patterns.

### #5 — [`color-expert` Skill](https://github.com/anthropics/skills/pull/1302)
- **Author:** meodai | **Status:** Open
- **Functionality:** Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces with usage guidance (OKLCH for scales, OKLAB for gradients, CAM16 for perception).
- **Discussion highlights:** Praised for depth and practical tables. Last updated 2026-07-21, suggesting active refinement.

### #6 — [`pyxel` Retro Game Development Skill](https://github.com/anthropics/skills/pull/525)
- **Author:** kitao | **Status:** Open
- **Functionality:** Integrates with `pyxel-mcp` MCP server for the Pyxel retro game engine. Covers write → run_and_capture → inspect → iterate workflow.
- **Discussion highlights:** Unique domain (pixel-art/8-bit games) with sustained interest since March. Represents the "specialized creative tooling" category.

### #7 — [`odt` OpenDocument Skill](https://github.com/anthropics/skills/pull/486)
- **Author:** GitHubNewbie0 | **Status:** Open
- **Functionality:** Create, fill, read, and convert OpenDocument files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, LibreOffice, or open-source documents.
- **Discussion highlights:** Addresses a major enterprise document format gap. Commenters noted LibreOffice/OpenOffice users are underserved by AI tooling.

---

## 2. Community Demand Trends

From Issues with the highest engagement, the community's most anticipated Skill directions are:

1. **Enterprise Document & Office Format Handling** — Highest demand cluster. Issues requesting SharePoint Online integration (#1175), org-wide skill sharing (#228), and the `odt` skill (#486) indicate enterprises need robust document workflows. The `document-typography` skill (#514) extends this to quality control.

2. **Meta-Skills & Quality Assurance** — The `self-audit` proposal (#1367) and reasoning quality gate pipeline (#1385) show strong demand for skills that evaluate Claude's own output. The `skill-quality-analyzer` PR (#83) extends this to skill development itself.

3. **Security & Trust Boundaries** — Issue #492 (43 comments, 2 upvotes) about community skills distributed under `anthropic/` namespace enabling trust abuse is the most-discussed issue. The community is actively concerned about security implications of the Skills distribution model.

4. **Windows Compatibility** — Multiple issues (#1061, #556) and PRs (#1050, #1099, #362) focus on making `skill-creator` and related tooling work on Windows. This is blocking a significant user segment.

5. **Skill Ecosystem Governance** — The `skill-creator` revamp discussion (#202), `CONTRIBUTING.md` PR (#509), and duplicate skill issues (#189) signal demand for better quality standards, documentation, and review processes.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and may land soon:

| PR | Skill | Author | Last Updated | Why It's Ready |
|----|-------|--------|-------------|----------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` fix (zero recall) | MartinCajiao | 2026-06-23 | Fixes the most critical bug in the ecosystem; 10+ independent reproductions |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` v1.3.0 | YuhaoLin2005 | 2026-07-02 | Well-structured proposal with mechanical + reasoning gates; complementary issue #1385 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | meodai | 2026-07-21 | Recently updated; well-researched with practical reference tables |
| [#1323](https://github.com/anthropics/skills/pull/1323) | `skill-creator` trigger detection fix | Polluelo978 | 2026-06-25 | Fixes same recall=0% bug from a different angle |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | 4444J99 | 2026-04-21 | Broad community support; fills a clear gap in the skills collection |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for infrastructure reliability (fixing `skill-creator`'s zero-recall bug) and production-grade quality/security gates, reflecting a shift from "Can Claude do this?" to "Can Claude do this reliably and safely in production."**

---

# Claude Code Community Digest
**Date:** 2026-07-22

---

## Today's Highlights

A storm of MCP-related bugs dominates the tracker today, with **three distinct issues** reporting that tools are silently dropped between approval gates and local server dispatch—a critical reliability concern for anyone building on MCP integrations. Meanwhile, a **sandbox security regression** in v2.1.216 has broken Bash execution on root installs, and a growing cluster of `AskUserQuestion` input unresponsiveness reports suggests terminal UI event handling needs attention. On the positive side, the latest release (v2.1.217) ships a long-requested **emoji autocomplete** feature for prompt input.

---

## Releases

**v2.1.217** — [Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)

- **Emoji shortcode autocomplete** in the prompt input: type `:heart:` to insert ❤️, or `:hea` for suggestions. Opt-out via the `emojiCompletionEnabled` setting.
- **Improved error visibility**: warnings now appear when transcript writes are failing (e.g. disk full) or when session saving is disabled.

---

## Hot Issues

### 1. [Remote Control auto-reconnection failure](https://github.com/anthropics/claude-code/issues/34255) — #34255
**What:** Remote Control connections drop silently with no automatic recovery. The connection state desyncs with no UI feedback.
**Why it matters:** This is the **most-commented issue** (57 comments) with **99 upvotes**—a top community pain point. Remote Control is a flagship feature; silent drops break trust in the platform.
**Status:** Open since March 2026, updated today.

### 2. [Fullscreen render mode: scrolling completely broken](https://github.com/anthropics/claude-code/issues/72215) — #72215
**What:** In fullscreen mode, once output exceeds one screen, there is no scrollbar and arrow/PageUp/PageDown keys do nothing.
**Why it matters:** Makes fullscreen mode unusable for any non-trivial session. Blocks developers who prefer immersive terminal layouts.
**Status:** Open 23 days, 6 comments.

### 3. [MCP tools connect but never reach the model](https://github.com/anthropics/claude-code/issues/78826) — #78826
**What:** A remote HTTP MCP server completes OAuth, shows as "connected" in `/mcp`, and serves a valid `tools/list`—but none of its tools are ever made available to the model.
**Why it matters:** MCP ecosystem credibility. If tools appear connected but are invisible to the model, developers can't trust integration status.
**Status:** Open 4 days, 5 comments.

### 4. [filesystem MCP tools silently dropped](https://github.com/anthropics/claude-code/issues/79992) — #79992
**What:** Every tool call to filesystem-class MCP servers is silently dropped inside Claude Desktop on macOS. Approval gate passes, but the local MCP server never receives `tools/call`.
**Why it matters:** A **second MCP drop issue** reports in 24 hours, suggesting a systematic problem. Approval bypass is a security concern if users think tools ran.
**Status:** Filed today, 4 comments.

### 5. [Sessions freeze until another session receives input](https://github.com/anthropics/claude-code/issues/79921) — #79921
**What:** Claude Code sessions freeze locally until another session gets input. Occurs in Desktop and VS Code, not web. Suggests an input-lock deadlock in the client runtime.
**Why it matters:** Multi-session users are effectively locked out of all but one session. Productivity killer for power users.
**Status:** Filed yesterday, 3 comments.

### 6. [Background agent fd storm → kernel panic](https://github.com/anthropics/claude-code/issues/79920) — #79920
**What:** Background-session daemon exhausts the system file table (ENFILE), triggering `launchd SIGBUS` and a kernel panic on macOS.
**Why it matters:** **System crash** from fd leak in agent management. Highest severity. Headless automation users lose entire machines.
**Status:** Filed yesterday, 2 comments.

### 7. [Subagents capped at 8000 output tokens](https://github.com/anthropics/claude-code/issues/78460) — #78460
**What:** Agents launched via the `Agent`/`Task` tool receive only `max_tokens: 8000`, while the main loop has a much higher limit. High-effort thinking exhausts the budget before any output.
**Why it matters:** Hard-caps agent utility for complex tasks. Developers report "agent killed before it emits anything" consistently.
**Status:** Open 5 days, 1 comment.

### 8. [1M-context session unrecoverable via ECONNRESET](https://github.com/anthropics/claude-code/issues/74544) — #74544
**What:** Sessions with ~520k tokens fail with `ECONNRESET` when the prompt cache has gone cold. Critically, `/compact` fails with the same error because compaction requires sending the full context.
**Why it matters:** **Complete data loss** for long sessions. No escape hatch when compaction itself triggers the failure.
**Status:** Open 17 days, 2 comments.

### 9. [Windows MSIX update locks app](https://github.com/anthropics/claude-code/issues/76357) — #76357
**What:** Every update fails with "Another program is currently using this file." App becomes unlaunchable until system reboot.
**Why it matters:** **Every update** breaks the install. Blocks all Windows MSIX users from receiving updates without rebooting.
**Status:** Open 12 days, 6 comments.

### 10. [Fable 5 unavailable in CLI despite Max subscription](https://github.com/anthropics/claude-code/issues/79916) — #79916
**What:** Claude Code CLI shows a credit-requirement prompt for Fable 5, even on active Claude Max subscriptions. Works fine in Desktop.
**Why it matters:** **Two duplicate reports** today (#79916, #79687). Subscription-gated model availability is a core trust issue.
**Status:** Filed yesterday, 2 comments.

---

## Key PR Progress

### [Add twilight plugin: spec-first design with durable focus](https://github.com/anthropics/claude-code/pull/80008) — #80008
**What:** Introduces a design→implement→focus-stack workflow plugin. Uses a durable focus stack to maintain development context across interruptions.
**Why it matters:** Novel approach to "lost context" problem. Represents an advanced workflow pattern, though author notes it needs significant modification before acceptance.

### [AWS gateway deployment example](https://github.com/anthropics/claude-code/pull/79898) — #79898 (Closed)
**What:** Reference deployment artifacts for Claude apps gateway on AWS with Amazon Bedrock. Sibling to existing GCP examples.
**Why it matters:** Fills the major cloud platform gap. AWS users now have a first-party deployment reference.

### [Hookify: run without CLAUDE_PLUGIN_ROOT](https://github.com/anthropics/claude-code/pull/79889) — #79889
**What:** Makes hook entrypoints runnable even when `CLAUDE_PLUGIN_ROOT` is unset, by fixing a guard that silently skipped path setup.
**Why it matters:** Debugging hook scripts was impossible without the env var. Developer workflow fix.

### [Hookify: prompt rules never fire](https://github.com/anthropics/claude-code/pull/79873) — #79873
**What:** Fixes `event: prompt` rules that never fired because the payload key (`prompt`) didn't match the handler's expected field (`user_prompt`).
**Why it matters:** **All** prompt-rules were silently broken. Core hook framework bug.

### [GCP gateway: PG16 Cloud SQL fix](https://github.com/anthropics/claude-code/pull/78532) — #78532
**What:** Fixes Cloud SQL create failing on PG16+ instances, which now default to ENTERPRISE_PLUS edition (rejecting shared-core tiers). Also adds optional internal ALB support.
**Why it matters:** Fresh `terraform apply` was broken with default settings. Blocks new GCP deployments.

### [Hookify: import resolution independent of directory name](https://github.com/anthropics/claude-code/pull/79647) — #79647
**What:** Fixes imports that only resolved when the plugin directory was literally named `hookify`. Follows standard package naming conventions.
**Why it matters:** Plugins installed under non-`hookify` names silently failed. Fixes #69665.

### [Hookify: UTF-8 encoding for rule files](https://github.com/anthropics/claude-code/pull/79645) — #79645
**What:** Explicitly opens rule and transcript files as UTF-8 instead of platform default (cp1252 on Windows, which cannot decode shipped emoji/arrows).
**Why it matters:** **All** shipped example rules with emoji broke on Windows. Fixes #77270.

### [Plugin hooks: fix space in macOS path](https://github.com/anthropics/claude-code/pull/79644) — #79644
**What:** Quotes `${CLAUDE_PLUGIN_ROOT}` in hook commands. On macOS, the path contains spaces under `~/Library/Application Support/…`, causing shell word-splitting.
**Why it matters:** Every bundled plugin on macOS silently fails hook execution. Fixes #78490.

### [TTS read-aloud hook for accessibility](https://github.com/anthropics/claude-code/pull/79620) — #79620
**What:** Production-ready text-to-speech hook using Piper (Linux), system `say` (macOS), or PowerShell (Windows). Markdown-aware with a code-skip heuristic.
**Why it matters:** Accessibility-first feature for hands-free and vision-impaired workflows. Implements #79542.

### [Hookify: add mandatory prefix to example rule filenames](https://github.com/anthropics/claude-code/pull/79636) — #79636
**What:** Renames example rule files to include the required `hookify.` prefix, which the loader and documentation mandate but the shipped examples lacked.
**Why it matters:** Shipped examples were **unloadable by design**—a clear QA gap. Fixes #79143.

---

## Feature Request Trends

1. **Model access parity** — Multiple reports (#79916, #79687) that Fable 5 is gated in CLI but works in Desktop. Users want consistent model availability across all interfaces regardless of subscription type.

2. **MCP reliability infrastructure** — The cluster of MCP "silent drop" issues (#78826, #79992, #79971) points to a need for **tool-call observability**: confirmation that tools reached the server, and diagnostic logs when they don't.

3. **Session cross-linking** — Issue #76440 requests the ability to link Claude Code sessions with claude.ai chat sessions. Users want continuity between chat and terminal workflows.

4. **Scroll/input control** — Issue #25042 (31 upvotes) requests configurable auto-scroll behavior. Users with long outputs want to stay at their current position when the model responds.

5. **Recent folders management** — Issue #72181 (10 upvotes) requests UI to remove entries from the "Recent" folders list in the task composer. Organizational hygiene feature.

---

## Developer Pain Points

1. **MCP tool-call reliability crisis** — Three near-identical issues this week (#78826, #79992, #79971) where MCP tools appear connected but never reach the server. This is the **#1 developer trust problem** right now—integration developers can't validate whether their setup works.

2. **Terminal UI unresponsiveness** — A growing pattern: `AskUserQuestion` with previews becomes unresponsive (#70577, #79325, #78306). The side-by-side layout specifically breaks keyboard and mouse input. Affects macOS, Windows, and WSL.

3. **Agent/task token cap asymmetry** — Issue #78460 highlights that subagents get a hard 8000-token cap while the main loop doesn't. High-effort thinking exhausts the budget on reasoning alone, killing agents before output.

4. **Sandbox regression breaks root installs** — Issue #79606: v2.1.216's new `--cap-drop ALL` default breaks all Bash on root installs with a `uid_map` write error. Security hardening that makes the product unusable on common dev-server setups.

5. **Multi-session deadlock** — Issue #79921: sessions freeze until another session receives input. For developers running parallel background tasks (code review, refactoring), this blocks all concurrent work.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**Codex Community Digest – 2026-07-22**

**1. Today's Highlights**
The Codex team landed a major `0.145.0` release featuring experimental paginated thread history with memory support and expanded import compatibility for Cursor and Claude Code. However, the community remains focused on a severe Windows performance crisis: multiple issues confirm the desktop app can spawn hundreds of `taskkill.exe` and `conhost.exe` processes, leading to WMI exhaustion, high CPU, and system-wide freezes. A batch of 20+ merged PRs indicates an intense internal push to harden process lifecycle, sandboxing, and proxy routing.

**2. Releases**
- **rust-v0.145.0** (stable): Added experimental paginated thread history with resume, search, persisted names, sub-agent support, and memories. Expanded `/import` to migrate settings, MCP servers, plugins, sessions, commands, and projects from Cursor and Claude Code.
- **rust-v0.145.0-alpha.28 / .29 / .30**: Purely build/naming bumps; no release notes beyond the version string.

**3. Hot Issues (10 noteworthy)**
1. **#33776 – Windows `taskkill.exe`/`conhost.exe` storm** *(18 comments)*: Desktop spawns hundreds of `taskkill.exe`/`conhost.exe` processes, causing WMI failure storms and DWM degradation. [Link](https://github.com/openai/codex/issues/33776)
2. **#34260 – Unbounded process-cleanup loop exhausts WMI quota** *(15 comments)*: Similar to #33776; describes an unbounded loop leaving hundreds of alive `taskkill` instances. [Link](https://github.com/openai/codex/issues/34260)
3. **#30527 – Defender Behavioral Monitoring / high CPU** *(16 comments)*: Codex app triggers Microsoft Defender's behavior monitoring on Windows 10 after recent update. [Link](https://github.com/openai/codex/issues/30527)
4. **#34014 – WMI Provider Host 90–100% CPU** *(9 comments)*: Standalone app pegs WMI at full CPU; VS Code extension on same project works fine. [Link](https://github.com/openai/codex/issues/34014)
5. **#29492 – Empty `.git` directory creation + repetitive git spawning** *(14 comments)*: Desktop app creates empty `.git` folders, then continuously scans them. [Link](https://github.com/openai/codex/issues/29492)
6. **#34473 – Unbounded git-root retry loop** *(3 comments, new)*: 142/168 `git` calls hit 60s timeout with no backoff, saturating the machine. [Link](https://github.com/openai/codex/issues/34473)
7. **#34025 – Cold launch freezes whole PC** *(6 comments)*: Launching the unified app spawns 300+ `taskkill.exe`/`conhost.exe`, causing system-wide lag. [Link](https://github.com/openai/codex/issues/34025)
8. **#19504 – Full RTL support request** *(18 comments, 18 👍)*: Arabic and Hebrew users report broken text alignment, punctuation, and direction in Codex/Chat panels. [Link](https://github.com/openai/codex/issues/19504)
9. **#28078 – Xcode 27 Codex sign-in fails for Pro accounts** *(13 comments)*: OTP-based ChatGPT Pro accounts cannot sign in, while Go accounts work on the same machine. [Link](https://github.com/openai/codex/issues/28078)
10. **#33777 – MultiAgentV2 `spawn_agent` hangs on terminal thread** *(4 comments)*: Sub-agent spawn can deadlock while evicting a resident terminal thread. [Link](https://github.com/openai/codex/issues/33777)

**4. Key PR Progress (10 important)**
1. **#34624 – Terminate Windows process trees with job objects** *(closed)*: Assigns pipe/ConPTY/sandbox processes to job objects so child processes are cleaned up on session termination. [Link](https://github.com/openai/codex/pull/34624)
2. **#34629 – Harden Windows elevated sandbox startup** *(closed)*: Checks writable-root ACLs and refreshes them when SIDs are missing access; starts the command as a resolved user. [Link](https://github.com/openai/codex/pull/34629)
3. **#34641 – Harden managed proxy setup for sandboxed executions** *(closed)*: Makes Linux proxy socket directories readable inside `bubblewrap` sandboxes. Routes `WS_PROXY`/`WSS_PROXY` through managed bridge. [Link](https://github.com/openai/codex/pull/34641)
4. **#34625 – Fix Windows TUI navigation key handling** *(closed)*: Prevents navigation keys from arriving as literal escape bytes when Windows console inherits virtual terminal mode. [Link](https://github.com/openai/codex/pull/34625)
5. **#34630 – Add policy-aware HTTP client builder** *(closed)*: `HttpClientBuilder` configures headers, redirects, Cloudflare cookies, and diagnostics without exposing `reqwest`. [Link](https://github.com/openai/codex/pull/34630)
6. **#34631 – Migrate agent identity to shared HTTP client** *(closed)*: Routes agent identity, task registration, and JWKS through `HttpClient`, preserving retry classification. [Link](https://github.com/openai/codex/pull/34631)
7. **#34645 – Always assign response item IDs** *(closed)*: Guarantees IDs for client-created items in streamed sessions, forked history, compaction, and non-OpenAI providers. [Link](https://github.com/openai/codex/pull/34645)
8. **#34644 – Verify Git plugin SHA checkouts** *(closed)*: Resolves `HEAD` after checkout to ensure the commit matches the pinned SHA, preventing branch-name confusion. [Link](https://github.com/openai/codex/pull/34644)
9. **#34636 – Keep TUI open when starting a turn fails** *(closed)*: Handles app-server `turn/start` rejections as turn errors without exiting the TUI. [Link](https://github.com/openai/codex/pull/34636)
10. **#34637 – Attribute review findings to repository rules** *(closed)*: Applies root/scoped project instructions with established precedence (`AGENTS.override.md` > `AGENTS.md`). [Link](https://github.com/openai/codex/pull/34637)

**5. Feature Request Trends**
- **RTL / bidirectional text support (#19504, #21563)**: Persistent demand from Arabic and Hebrew users for native RTL rendering in both Codex and Chat panels. 26 combined 👍 across two duplicate issues.
- **Windows performance & stability (dominant theme, 20+ issues)**: Not a feature request per se, but community is effectively demanding a systemic fix for git-polling storms, runaway process cleanup, and WMI exhaustion.
- **Xcode / macOS IDE extension sign-in (#28078)**: Pro users blocked by OTP-based auth flow in Xcode beta; Go accounts work fine. Implies a gap in credential handling for multi-factor authentication pathways.
- **Remote SSH to Windows hosts (#22965)**: Niche but persistent – users want native Codex Desktop <> remote Windows SSH support without manual CLI/Bash setup.

**6. Developer Pain Points**
- **Windows process-spawning storms (critical)**: The #1 recurring frustration. Issues #33776, #34260, #34473, #34025, and others all describe `taskkill.exe`/`conhost.exe`/`git.exe` processes multiplying unboundedly, exhausting WMI, saturating CPU, and freezing the desktop. Community reaction includes detailed ETW traces and multi-PC reproduction reports.
- **Empty `.git` directory creation loops (#29492, #29911, #33450, #32324, #34473)**: Codex repeatedly creates invalid `.git` folders, then re-scans them indefinitely with no backoff. Triggers both high CPU and Windows Defender interference.
- **Defender / AV conflicts (#30527, #29911)**: Codex's file scanning pattern triggers real-time behavior monitoring, causing 30-100% CPU spikes. Users on Windows 10/11 with standard Defender settings are impacted.
- **WMI provider quota exhaustion (#33776, #34014, #34260)**: Excessive `Win32_Process` queries from the cleanup loop exhaust the WMI provider, making system monitoring tools and other WMI-dependent apps fail.
- **No reconnect/backoff for failed git operations (#34473)**: An unresolvable git root causes an infinite retry loop with 60s timeouts, saturating all I/O and CPU. Community asking for exponential backoff or configurable retry limits.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-22

## Today’s Highlights
A critical RCE vulnerability in the a2a-server was patched via PR #28470, while a new nightly build (v0.52.0-nightly) rolls out workspace trust enforcement as a direct follow-up. Meanwhile, the community remains vocal about the Antigravity CLI migration, with top issues questioning the future of standalone OAuth workflows and rate-limit parity.

## Releases
**v0.52.0-nightly.20260722.gc776c665b** was published today. The single change is a security fix: enforcement of workspace trust and task isolation in the a2a-server backend to prevent remote code execution (RCE). Full changelog: [compare v0.52.0-nightly.20260721...v0.52.0-nightly](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260721.gacae7124b...v0.52.0-nightly)

## Hot Issues

1. **[#27314 — Bring back standalone Gemini CLI or support full legacy workflow with stable OAuth](https://github.com/google-gemini/gemini-cli/issues/27314)** (11 comments, 11 days stale)  
   *Why it matters:* The most active issue on the tracker. Users are frustrated by the forced Antigravity migration and degraded developer experience. 3 upvotes reflect broad discontent.

2. **[#19979 — Migrate policy configuration from TOML to CUELang](https://github.com/google-gemini/gemini-cli/issues/19979)** (10 comments, ~5 months stale)  
   *Why it matters:* Persistent demand for a proper policy language. TOML’s limitations for complex policies are a recurring pain point for enterprise users.

3. **[#20990 — MCP OAuth2.1 dynamic client registration fails](https://github.com/google-gemini/gemini-cli/issues/20990)** (9 comments, ~4.5 months stale)  
   *Why it matters:* Blocks MCP server connectivity. The `registrationUrl` is being dropped in the WWW-Authenticate discovery path—a protocol-level bug.

4. **[#27265 — Will Gemini CLI be replaced by Antigravity CLI, with equally poor quotas?](https://github.com/google-gemini/gemini-cli/issues/27265)** (7 comments)  
   *Why it matters:* Direct community anxiety about the project’s direction. Written in Chinese, reflecting international concern over rate-limit changes.

5. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (7 comments, 🔒 maintainer-only)  
   *Why it matters:* An EPIC tracking 76 behavioral eval tests across 6 models—critical for quality assurance in agent tooling.

6. **[#22745 — Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, 🔒 maintainer-only)  
   *Why it matters:* AST-aware tooling could dramatically reduce token waste and improve agent code-reading precision.

7. **[#27097 — Agent uses `&&` on Windows under PowerShell 5.1](https://github.com/google-gemini/gemini-cli/issues/27097)** (6 comments)  
   *Why it matters:* A hardcoded shell operator that breaks on legacy Windows—a frustrating cross-platform regression.

8. **[#27191 — Quota suddenly shows 100% used with no actual usage](https://github.com/google-gemini/gemini-cli/issues/27191)** (6 comments, 2 upvotes)  
   *Why it matters:* A billing/quota display bug causing CLI to stop responding. Community upvotes confirm high impact.

9. **[#21956 — OAuth token refresh fails silently on long-running sessions](https://github.com/google-gemini/gemini-cli/issues/21956)** (5 comments)  
   *Why it matters:* Sessions over 1 hour hang indefinitely. Critical for enterprise users running long agent tasks.

10. **[#25166 — Shell command execution gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3 upvotes, 🔒 maintainer-only)  
    *Why it matters:* An agent-level reliability bug that undermines automation. High upvote-to-comment ratio signals urgency.

## Key PR Progress

1. **[#28470 — fix(a2a-server): enforce workspace trust and task isolation to prevent RCE](https://github.com/google-gemini/gemini-cli/pull/28470)** (CLOSED, size/xl)  
   *Impact:* Patches a zero-click RCE vector. Refactors environment loading and introduces process isolation for untrusted workspaces.

2. **[#28403 — fix(core): block $VAR and ${VAR} variable expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28403)** (OPEN, priority/p1, area/security)  
   *Impact:* Closes a security bypass in shell substitution detection—defense-in-depth for the prior CVE.

3. **[#28401 — fix(shell): bound command output sent to the model](https://github.com/google-gemini/gemini-cli/pull/28401)** (OPEN, priority/p1)  
   *Impact:* Prevents token-burning and context pollution from large command outputs (e.g., `find /`, verbose builds). Directly addresses developer pain point #1.

4. **[#28469 — fix(core): rotate session ID on model fallback](https://github.com/google-gemini/gemini-cli/pull/28469)** (OPEN)  
   *Impact:* Fixes a stateful API error when fallback to `gemini-2.5-flash` occurs. Unblocks long-running sessions.

5. **[#28472 — fix(core): sequentially verify cached credentials and restore GAC fallback](https://github.com/google-gemini/gemini-cli/pull/28472)** (OPEN)  
   *Impact:* Fixes `FatalAuthenticationError` exit code 41 in VS Code Agent Mode—critical for IDE integration.

6. **[#28305 — feat(evals): add tool call formatter and integrate failure summaries](https://github.com/google-gemini/gemini-cli/pull/28305)** (CLOSED, size/l)  
   *Impact:* Improves eval debugging with compact, numbered timelines of tool calls on failure.

7. **[#28169 — feat(evals): add eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)** (CLOSED, size/l)  
   *Impact:* New `eval:coverage` command to track tool test coverage, improving quality assurance workflows.

8. **[#28433 — feat(pr-generator-orchestrator): implement iterative bug-fixing state machine](https://github.com/google-gemini/gemini-cli/pull/28433)** (OPEN, size/xl)  
   *Impact:* Core orchestration for the automated PR generation pipeline—Firestore locking, AI coding loops, ESLint analysis, and diff verification.

9. **[#28474 — feat(core): add skill name dimension to tool call telemetry](https://github.com/google-gemini/gemini-cli/pull/28474)** (OPEN, priority/p3)  
   *Impact:* Addresses long-standing feature request #18189. Note: author self-describes as "vibe coded"—review caution warranted.

10. **[#28411 — feat(caretaker-triage): post comment before auto-closing issues](https://github.com/google-gemini/gemini-cli/pull/28411)** (OPEN)  
    *Impact:* Improves issue triage UX by explaining auto-close reasons and providing a reopen path.

## Feature Request Trends

- **Policy as Code**: Strong demand to replace TOML with CUELang (#19979) for complex enterprise policy authoring.
- **AST-Aware Tooling**: Multiple issues push for AST-aware file reads/mapping (#22745) to reduce token waste and improve agent precision.
- **Custom Skill UX**: Requests for regex support in skills (#19259) and proper `.venv` exclusion (#27205) highlight the need for better skill development ergonomics.
- **Telemetry Granularity**: Skill-name dimensions in tool call metrics (#18189) and HighWaterMarkTracker coverage (#23534) show appetite for deeper observability.
- **External Safety Checkers**: Plugin-style custom safety checker executables (#27185) would unblock enterprise security teams.

## Developer Pain Points

1. **Antigravity CLI Migration Anxiety** — The top frustration. Issue #27314 (standalone OAuth) and #27265 (quota fears) reveal deep unease about the forced transition, with users calling limits "unusable."
2. **Token Waste & Billing Surprises** — Unbounded command output (#28401), runaway 429 routing loops (#27187), and silent token consumption erode developer trust and budgets.
3. **Authentication & Session Reliability** — Silent OAuth refresh failures (#21956), credential fallback regressions (#28472), and stuck shell commands (#25166) break long-running sessions.
4. **Cross-Platform Inconsistencies** — Windows PowerShell `&&` hardcoding (#27097) and `.venv` ignore failures (#27205) alienate non-Linux developers.
5. **Rate Limit & Quota Confusion** — False 100% usage reports (#27191) and model-specific blocking (#27181) create opaque billing artifacts that frustrate debugging.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-22

## Today's Highlights
A new release (v1.0.74-0) landed today introducing `/model plan` for model selection in plan mode, alongside a fix for session title matching. The community is actively reporting issues around MCP connectivity, tool regressions, and OOM crashes. Long-standing demand for MCP resources/prompts support and BYOK improvements continues to gather steam.

## Releases
**[v1.0.74-0](https://github.com/github/copilot-cli/releases/tag/v1.0.74-0)** — Released today.

**Added**
- **`/model plan` (or `/model --plan`):** Allows users to pick a model while in plan mode. Accepts a model ID, `off` to clear, or no argument to open an interactive picker. Reverts to the session model when leaving plan mode.

**Improved**
- **Resume search matches session titles even when whitespace differs.** Ensures `/resume` finds the right session regardless of formatting.

## Hot Issues (10 selected out of 38 updated)

1. **[#2282 — Not Able to connect to MCP servers](https://github.com/github/copilot-cli/issues/2282)** (CLOSED, 11 comments, 1 👍)  
   A long-standing issue affecting Windows users via WinGet: MCP server connections (e.g., `github-mcp-server`) fail with a generic error. Now closed, indicating a fix or known workaround exists.

2. **[#1305 — Support CIMD for Remote OAuth MCP Servers](https://github.com/github/copilot-cli/issues/1305)** (OPEN, 4 comments, 26 👍)  
   High-demand request for extending DCR (Dynamic Client Registration) support to Critical Infrastructure for MCP Descriptors (CIMD). The 26 upvotes signal strong community interest in enterprise OAuth flows for MCP.

3. **[#4188 — Regression on plan-mode: shell commands blocked](https://github.com/github/copilot-cli/issues/4188)** (OPEN, 3 comments, 2 👍)  
   A notable regression in the latest version: plan mode now blocks shell commands that were previously allowed (e.g., `gh` CLI for issue creation). User considers this a step backward.

4. **[#4183 — Auto-compaction fails to prevent 5 MB CAPI body limit](https://github.com/github/copilot-cli/issues/4183)** (OPEN, 2 comments, 5 👍)  
   A serious bug for long, tool-heavy sessions: automatic compaction doesn't prevent the serialized CAPI request from hitting the 5 MB limit, effectively freezing the agent. Affects heavy users.

5. **[#4012 — BYOK: `--reasoning-effort max` fails for "glm-5.2:cloud"](https://github.com/github/copilot-cli/issues/4012)** (OPEN, 2 comments, 17 👍)  
   Custom BYOK model configurations fail when passing `--reasoning-effort max`. High community engagement (17 upvotes) indicates many users rely on BYOK for specialized models.

6. **[#3976 — `tgrep` indexer OOM-kills host on large monorepos](https://github.com/github/copilot-cli/issues/3976)** (OPEN, 1 comment, 0 👍)  
   The native Rust `tgrep` trigram indexer, which spawns a persistent daemon, has no memory cap and is OOM-killing host machines on large repositories. Critical for monorepo users.

7. **[#4212 — Dark-on-dark rendering inside tmux](https://github.com/github/copilot-cli/issues/4212)** (OPEN, 1 comment, 0 👍)  
   The prompt box and highlighted menu items render invisible (dark text on dark background) inside tmux, while the same session works in plain iTerm2. Frustrating for terminal multiplexer users.

8. **[#4206 — Environment footer stuck on "Loading:" forever](https://github.com/github/copilot-cli/issues/4206)** (OPEN, 1 comment, 2 👍)  
   The status footer stays in "Loading:" state indefinitely when the built-in GitHub MCP handshake stalls under an organization MCP policy. Session is functional but UI never updates.

9. **[#4163 — Zombie processes accumulate under copilot PID](https://github.com/github/copilot-cli/issues/4163)** (OPEN, 2 comments, 0 👍)  
   On Linux, finished subprocesses are not reaped, leading to zombie accumulation (~2/minute). Affects long-running session stability.

10. **[#1518 — Support MCP resources and prompts](https://github.com/github/copilot-cli/issues/1518)** (OPEN, 2 comments, 14 👍)  
    Long-standing feature request: Copilot CLI currently only supports MCP *tools*, but the protocol defines *resources* and *prompts*. High community demand to bridge this gap.

## Key PR Progress (1 open PR)

**[#3163 — ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)** (OPEN, 0 comments, 0 👍)  
PR appears to reference displaying output on a ViewSonic monitor. The description mentions "initiate GitHub action //runners" and references several issues (#2591, #3561, #3559). Minimal detail — likely an early-stage or test PR.

*Note: Only 1 PR was updated in the last 24 hours. All other changes are issue-driven.*

## Feature Request Trends

- **MCP Primitive Completeness** — Persistent demand for full MCP support: resources/list/read (issues #1803, #3073), resource subscriptions (#3073), prompts (#1518), and tools/list_changed notifications (#3125). The community sees this as essential for autonomous agent workflows.
- **BYOK Enhancements** — Users want better BYOK model compatibility, including reasoning effort support (#4012), handling of `reasoning_content` in streaming deltas (#4196), and per-model configuration.
- **Agent & Skill Ecosystem** — Requests for custom agent discoverability in `.agents/` folders (#4204), explicit inline agent invocation in prompts (#4208), and `skill` tool alias for custom agent profiles (#4209).
- **Usage Transparency** — Calls for per-subagent AI credit usage breakdown in `/usage` (#4207) and configurable retry counts for request errors (#4210).
- **Enterprise & Policy** — Needs for remote MCP OAuth refresh_token flow (#4203), runtime header support for registry MCP policies (#4205), and billing entity selection for memory features (#4005).

## Developer Pain Points

- **MCP Reliability** — Connection failures (#2282), BigInt serialization errors (#4211), mid-turn tool visibility (#3125), and stale loading UIs (#4206) make MCP integration brittle. 
- **Plan Mode Regression** — Recent changes blocking shell commands in plan mode (#4188) broke workflows that relied on tools like `gh` for issue management. Developers see this as a regression.
- **Resource Exhaustion** — Both the `tgrep` indexer OOM-killing hosts (#3976) and the 5 MB CAPI body limit (#4183) demonstrate memory/resource management gaps for heavy users.
- **Terminal/UI Bugs** — Dark-on-dark rendering in tmux (#4212), key event drops when unfocused (#4213), and zombie process accumulation (#4163) degrade the interactive experience.
- **BYOK Limitations** — Incompatibility with common reasoning effort flags (#4012) and streaming delta formats (#4196) frustrates users who need custom model providers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-07-22**

---

## Today's Highlights

The community is facing critical reliability issues with the K2.5 model, where tool calling is completely broken and Goal Mode enters infinite loops—a must-fix for daily users. A new MCP integration blocker (#2531) emerged today, as Moonshot API rejects tool schemas that fail server-side validation, preventing custom MCP tools from working. On the positive side, an important fix PR (#2530) addresses a shell-mode hang when background processes hold pipes, resolving a long-standing timeout issue.

---

## Releases

No new releases in the last 24 hours. The latest stable version remains **0.28.1** (kimi-cli) and **1.49.0** (Moonshot API). Users on older versions (e.g., 0.19.2) are encouraged to upgrade to access recent fixes.

---

## Hot Issues

### Critical / Blockers

1. **#2531 [OPEN] MCP tool names & schemas rejected by Moonshot API (HTTP 400)**  
   *Author: sbdsam | Comments: 1*  
   When using custom MCP tools, the API rejects schemas with `anyOf` validation errors. This is a **client-side schema sanitization gap**—`kimi-cli` must transform schemas before sending to comply with Moonshot's "flavored" JSON Schema. This affects any user leveraging MCP tools with conditional/alternative type definitions.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2531)

2. **#2527 [OPEN] K2.5 model tool calling completely invalid + Goal Mode infinite loop**  
   *Author: lesteryan | Comments: 0*  
   The K2.5 model generates tool calls (e.g., `Bash`) but the execution layer returns "Tool not found." All format variants (`functions_Bash`, `functions_Bash_0`, JSON) fail. In Goal Mode, this causes an infinite loop where the model keeps retrying. This is a **regression that makes K2.5 unusable** for automation.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2527)

3. **#2474 [OPEN] CLI interface shaking and re-rendering entire conversation from scratch**  
   *Author: yudichimiantiao | Comments: 1 · 👍 2*  
   On Linux (x86_64), the terminal UI constantly flickers and resets the entire chat view. Reproducible across multiple sessions. Likely a **React/TUI rendering race condition**—affects usability for anyone relying on the interactive interface.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2474)

### Moderate Impact

4. **#2528 [OPEN] Shell mode output is too long**  
   *Author: wenli7363 | Comments: 0*  
   Entering `!` in shell mode produces excessively long output. This hints at possible **output buffering or streaming issues** where the CLI dumps full command history or environment state instead of concise results.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2528)

5. **#2529 [OPEN] Numpad number keys not responding in input box**  
   *Author: woai3c | Comments: 0*  
   On Windows, pressing the right-side numeric keypad digits produces no input. A **missing key event listener** for the numpad key codes (`Numpad0`–`Numpad9`). Minor UX bug, but frustrating for users who rely on numpad for fast input.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2529)

---

## Key PR Progress

1. **#2530 [OPEN] fix(shell): stop blocking until timeout when a detached child holds the pipes**  
   *Author: ayaangazali*  
   **Resolves #2468.** In shell mode, `_run_shell_command` waits for stdout/stderr EOF before checking exit code. Commands like `some_daemon & echo done` leave a detached child holding pipes, causing the CLI to hang for the full timeout. Fix adds early exit on child termination. Critical for shell-mode reliability.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2530)

---

## Feature Request Trends

- **Better tool calling diagnostics**: Multiple issues (#2527, #2531) highlight the need for **schema validation logging and per-model tool compatibility checks**—users want clear error messages when a model doesn't support certain tool definitions.
- **Numpad/keybind customization**: #2529 hints at demand for **configurable key mappings** beyond the default, especially for non-Latin keyboard layouts and numpad-heavy workflows.
- **Output truncation/streaming controls**: #2528 suggests growing interest in **configurable output size limits** in shell mode, plus the ability to toggle streaming vs. buffered output for long-running commands.

---

## Developer Pain Points

- **Model regression anxiety**: The K2.5 tool calling break (#2527) is the second major model regression in a month, eroding trust in model updates. Developers are requesting **version-pinned model behavior** or a `--model-version` flag.
- **MCP integration fragility**: The Moonshot API schema rejection (#2531) exposes a lack of **client-side schema normalization**, forcing users to manually tweak tool definitions. This is a high-friction point for anyone building custom MCP tools.
- **Terminal stability**: The shaking/rerender bug (#2474) on Linux has been open for nearly a month with no fix, affecting developers using the CLI as their primary coding assistant. The community sentiment is that **TUI rendering should be treated as a P0 priority** given how visible the bug is.
- **Shell mode timeout hangs**: PR #2530 addresses a long-standing issue where background processes stall the CLI. The time-to-fix (~2 weeks from report) reflects the difficulty of handling process lifecycle in async Python.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-22

## Today's Highlights
A major spike in OpenCode Go subscription authentication failures dominates the issue tracker, with multiple users reporting that paid models uniformly return "Request blocked by upstream provider" errors while free models continue to work. The long-running memory megathread remains the most active discussion, and the team is shipping fixes for WSL desktop crashes, clock-skew response loops, and tool progress visibility in both CLI and web UIs.

## Releases
None in the last 24 hours.

## Hot Issues

1. **#20695 – Memory Megathread**  
   `119 comments` | `90 👍`  
   *The central tracking issue for scattered memory problems. The maintainers explicitly request heap snapshots rather than LLM-generated solutions.*  
   [GitHub](https://github.com/anomalyco/opencode/issues/20695)

2. **#37012 – Keep legacy layout option**  
   `27 comments` | `27 👍`  
   *Strong community pushback against the new "tabs on top" layout on Desktop. Users cite loss of easy access to controls and missing workspace/worktree support.*  
   [GitHub](https://github.com/anomalyco/opencode/issues/37012)

3. **#6231 – Auto-discover models from OpenAI-compatible providers**  
   `26 comments` | `182 👍`  
   *The highest-upvoted open issue. Users want automatic model discovery from LM Studio, Ollama, and llama.cpp instead of manual configuration.*  
   [GitHub](https://github.com/anomalyco/opencode/issues/6231)

4. **#30680 – Auto-compaction loop stops response generation**  
   `15 comments`  
   *Critical bug where OpenCode enters an infinite compaction loop even in empty folders, consuming tokens without generating responses.*  
   [GitHub](https://github.com/anomalyco/opencode/issues/30680)

5. **#31119 – Error: no such column: name**  
   `14 comments` | `15 👍`  
   *Database schema migration error preventing users from using the app after updating.*  
   [GitHub](https://github.com/anomalyco/opencode/issues/31119)

6. **#37790 – Go subscription paid but "Insufficient balance"**  
   `10 comments`  
   *Stripe payment succeeded but workspace still shows insufficient balance, blocking usage.*  
   [GitHub](https://github.com/anomalyco/opencode/issues/37790)

7. **#37481 – Desktop fatal error on WSL sidecar reference**  
   `7 comments`  
   *Windows desktop app crashes on launch because it resolves a WSL sidecar server before WSL finishes booting. App becomes completely unusable.*  
   [GitHub](https://github.com/anomalyco/opencode/issues/37481)

8. **#38195 / #38218 / #38216 – Request blocked by upstream provider (multiple reports)**  
   `3-4 comments each` | `9 👍 combined`  
   *Cluster of identical reports: Go plan models fail with 401/403 while free models work. Affects Desktop and Hermes clients on multiple machines.*  
   [GitHub #38195](https://github.com/anomalyco/opencode/issues/38195)

9. **#37056 – Console Go provider returns 400/401/500**  
   `6 comments`  
   *Go-proxy returns intermittent 400 for large requests, occasional 401 for valid API keys, and 500 errors. DeepSeek-v4-pro large requests always fail.*  
   [GitHub](https://github.com/anomalyco/opencode/issues/37056)

10. **#37546 – Web: no way to revert new layout, missing workspaces**  
    `4 comments` | `5 👍`  
    *Web users past v1.17.19 cannot switch back to legacy layout, and the new layout lacks workspaces/worktrees entirely.*  
    [GitHub](https://github.com/anomalyco/opencode/issues/37546)

## Key PR Progress

1. **#38213 – Fix: stop clock-skew response loops**  
   *Fixes #24476 and #25270 – prevents infinite response loops when client and server clocks are out of sync.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/38213)

2. **#38225 – Use Bun.serve for HTTP on native Windows**  
   *Fixes #38220 – `node:http.createServer().listen()` on Bun/Windows binds ports without accepting connections. Switches to Bun-native HTTP server.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/38225)

3. **#38217 – Make tool progress live-only**  
   *Running tool progress becomes a live replacement snapshot instead of durable session history. Reduces snapshot churn and keeps terminal events self-contained.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/38217)

4. **#37097 – Show shell output while a command runs**  
   *Web UI expands running bash tools so users can see live command output, matching the TUI experience.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/37097)

5. **#38162 – Reduce snapshot repository setup**  
   *Replaces eight `git config` subprocesses with a single OpenCode-owned include file for snapshot repos.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/38162)

6. **#38224 – Fix: inherit elevated tool theme (TUI)**  
   *Adds scoped theme context provider for nested surface rendering in the CLI TUI.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/38224)

7. **#38227 – Support custom reasoning fields**  
   *Adds a top-level `reasoningField` model option with OpenAI-compatible field name support and custom parsing for OpenAI Chat reasoning fields.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/38227)

8. **#38214 – Route MiniMax M3 thinking controls**  
   *Fixes thinking mode toggle for NVIDIA and Lilac MiniMax M3 models by routing through `chat_template_kwargs.thinking_mode`.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/38214)

9. **#38188 – Reject malformed patch hunks**  
   *Validates patch hunk lines instead of silently skipping them. Catches empty update hunks, empty chunks, and malformed move destinations.*  
   [GitHub](https://github.com/anomalyco/opencode/pull/38188)

10. **#37832 – Prevent Solid cleanNode crash on session switch**  
    *Fixes a freeze/crash when switching sessions in the desktop app caused by `TypeError: Cannot read properties of null`.*  
    [GitHub](https://github.com/anomalyco/opencode/pull/37832)

## Feature Request Trends
- **Model discovery & management**: High demand for automatic model detection from local providers (LM Studio, Ollama) and a rich model management UI with custom order, aliases, favorites, and default model selection.
- **Layout persistence**: Strong community attachment to the legacy layout. Users want a toggle to keep it, especially on Web where workspaces/worktrees are missing from the new layout.
- **Session cost tracking**: Users want total session costs that include sub-agent token usage, not just primary agent costs.
- **Composer enhancements**: Prompt queue, interrupt controls, and the ability to queue messages without stopping the current stream.
- **MCP sampling support**: Request for `createMessage` support in the Model Context Protocol integration.

## Developer Pain Points
- **OpenCode Go subscription authentication failures**: The dominant cluster of new issues. Multiple users report that all paid-tier models return "Request blocked by upstream provider" errors while free models work. Affects both Desktop and Web clients.
- **Console Go provider instability**: Intermittent 400/401/500 errors, with large requests (300KB+) consistently failing on DeepSeek-v4-pro.
- **Database migration breakage**: Schema errors ("no such column: name") blocking users who update after a period without using the app.
- **Auto-compaction infinite loops**: The app entering compaction loops that consume tokens and prevent response generation, even in empty folders.
- **New layout regressions**: Missing workspaces/worktrees on Web, no revert mechanism, and no layout transition toggle for existing Web profiles.
- **WSL desktop fatals**: App crashes on Windows when persisted tabs reference WSL sidecar servers that haven't finished booting.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-22

## Today's Highlights

Pi v0.81.1 shipped today with verifiable release source archives, addressing a long-standing community need for reproducible builds. The v0.81.0 release went live yesterday bringing local llama.cpp model management, but triggered a wave of crash reports (`streamFunction is not a function`) that were quickly patched in today's point release. Several high-signal PRs landed around external editor performance, compaction retry logic, and SDK retry-abort safety—the latter closing a critical bug that could freeze Pi for days.

## Releases

**v0.81.1** — *Today*
- **Verifiable release source archives** — GitHub releases now include deterministic, checksummed source archives with instructions for rebuilding standalone binaries ([details](https://github.com/earendil-works/pi/blob/v0.81.1/README.md)).

**v0.81.0** — *Yesterday*
- **Local llama.cpp model management** — Connect to a llama.cpp router, search and download Hugging Face models, and explicitly load/unload models with live progress ([docs](https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md)).

## Hot Issues

1. **#3357 — Official local LLM provider extension** (CLOSED, 30 comments, 👍43)  
   Proposal to dynamically fetch model lists from `{baseUrl}/models` to support llama.cpp/Ollama/LM Studio. The high upvote count signals strong community appetite for first-class local LLM integration.  
   [Link](https://github.com/earendil-works/pi/issues/3357)

2. **#6278 — New Claude models break Pi's edit tool** (CLOSED, 23 comments, 👍9)  
   Edits fail ~20% of the time because Claude 4.5+ injects invented properties (`new_text_x`, `closeenough`) into edit arrays. Affects reliability for anyone on newer Anthropic models.  
   [Link](https://github.com/earendil-works/pi/issues/6278)

3. **#5653 — Move off Shrinkwrap** (OPEN, 19 comments)  
   Dual installation of `pi-ai` and `pi-coding-agent` creates duplicate module copies, breaking the shared API provider registry. A persistent packaging issue that wastes disk and causes runtime confusion.  
   [Link](https://github.com/earendil-works/pi/issues/5653)

4. **#6915 — Pi crashes on resume after v0.81.0** (CLOSED, 14 comments, 👍2)  
   `streamFunction is not a function` crash when resuming sessions—triggered the hotfix in v0.81.1. Replicated across Linux and Windows installs.  
   [Link](https://github.com/earendil-works/pi/issues/6915)

5. **#6747 — API for enhancing agent message markdown** (OPEN, 7 comments, 👍2)  
   Wants an extension hook to render markdown formulas (and possibly other rich content) in agent messages *without* modifying the LLM payload. Promising for domain-specific visualizations.  
   [Link](https://github.com/earendil-works/pi/issues/6747)

6. **#6911 — OpenAI SDK retries sleep full Retry-After (days)** (CLOSED, 3 comments)  
   Critical: SDK `maxRetries` with unlimited `Retry-After` sleep can lock Pi for days, and Escape can't abort. Fixed in today's PR #6912 by forcing SDK `maxRetries` to 0.  
   [Link](https://github.com/earendil-works/pi/issues/6911)

7. **#6879 — Auto-compaction never triggers after 100%** (OPEN, 3 comments)  
   Context window grows past 100% without compaction until API rejection at 373k tokens. User ran a 2-hour agentic turn; compaction only fired on provider overflow. Needs per-agent-turn triggering.  
   [Link](https://github.com/earendil-works/pi/issues/6879)

8. **#6931 — Codex WebSocket continuation fails after event-loop stall** (CLOSED, 1 comment)  
   After a 327-second tool turn, Codex can't find the prior response ID. Points to fragility in long-running Codex sessions.  
   [Link](https://github.com/earendil-works/pi/issues/6931)

9. **#6920 — Autocomplete crash on non-string values** (CLOSED, 3 comments)  
   Typing `/` crashes because `value.startsWith` gets a non-string. Affects multiple autocomplete paths—a latent type-safety issue in the fuzzy-match pipeline.  
   [Link](https://github.com/earendil-works/pi/issues/6920)

10. **#6817 — `find` returns no results on Windows for path patterns** (OPEN, 2 comments)  
    `src/**/*.ts` returns nothing on Windows; plain `*.ts` works. Root cause in `find.ts` glob logic on Windows paths.  
    [Link](https://github.com/earendil-works/pi/issues/6817)

## Key PR Progress

1. **#6935 — Kimi Code OAuth login** (OPEN)  
    Adds device authorization flow (RFC 8628) for the `kimi-coding` provider with refresh-token rotation and retry. Preserves existing `KIMI_API_KEY` auth.  
    [Link](https://github.com/earendil-works/pi/pull/6935)

2. **#6933 — Disable undici idle timeout for local LLMs** (CLOSED)  
    Set `DEFAULT_HTTP_IDLE_TIMEOUT_MS` to 0 so vLLM/LM Studio/llama.cpp/Ollama aren't killed during slow prompt evaluation. Direct fix for local-first users.  
    [Link](https://github.com/earendil-works/pi/pull/6933)

3. **#6654 — Custom `promptCacheKey` stream option** (OPEN)  
    Lets users override the prompt cache key per-stream (replacing `sessionId`). Used across four OpenAI-family providers—important for shared-cache scenarios.  
    [Link](https://github.com/earendil-works/pi/pull/6654)

4. **#6928 — Reasoning options from models.dev** (OPEN)  
    Applies thinking/reasoning capabilities from the canonical model catalog. Uses `npm run diff:model-catalog -- --thinking` to validate changes.  
    [Link](https://github.com/earendil-works/pi/pull/6928)

5. **#6216 — Amazon Bedrock Mantle OpenAI Responses provider** (OPEN)  
    New provider for Bedrock Mantle's OpenAI-compatible API via the official OpenAI Bedrock SDK. Supersedes an earlier closed PR.  
    [Link](https://github.com/earendil-works/pi/pull/6216)

6. **#6927 — Native OpenRouter OAuth** (OPEN)  
    Browser-based OAuth flow with PKCE S256, one-shot localhost callback, timeout, and cancellation. Returns a user-controlled API key.  
    [Link](https://github.com/earendil-works/pi/pull/6927)

7. **#6903 — Speed up external editor launch** (OPEN)  
    Creates a dedicated temp subfolder instead of writing directly to `os.tmpdir()`. Fixes slow launches when the tmp directory is crowded (see issue #6774).  
    [Link](https://github.com/earendil-works/pi/pull/6903)

8. **#6901 — Compaction & branch summarization follow retry policy** (CLOSED)  
    Compaction and branch summarization now retry on transient failures using the same policy as assistant turns. Fixes issue #6647. Emits retry events for TUI feedback.  
    [Link](https://github.com/earendil-works/pi/pull/6901)

9. **#6912 — Never enable SDK Retry-After sleeps** (CLOSED)  
    Forces OpenAI/Anthropic SDK `maxRetries` to 0; Pi's own agent-level retry remains abortable. Closes the show-stopper bug from issue #6911.  
    [Link](https://github.com/earendil-works/pi/pull/6912)

10. **#6916 — AgentHarness execution tools** (OPEN)  
    New abstraction allowing tools to receive arbitrary per-app context (execution environment, session ID). Designed for flexibility in custom agent loops.  
    [Link](https://github.com/earendil-works/pi/pull/6916)

## Feature Request Trends

- **Local & self-hosted LLMs** — The hottest trend by far. Dynamic model listing from llama.cpp/Ollama (issue #3357, 👍43), local timeout fixes (PR #6933), and the entire v0.81.0 llama.cpp feature point to users wanting first-class local inference without API gateways.
- **OAuth & provider authentication** — Multiple PRs (#6935 Kimi, #6927 OpenRouter) and the Bedrock Mantle provider (#6216) show growing demand for proper OAuth flows instead of raw API keys.
- **Extension API for message rendering** — Issue #6747 and its 7 comments indicate desire for extensions to augment agent UI without leaking into LLM context.
- **Session management** — Archive shortcuts (PRs #6914, #6917) and stable session entry IDs (PR #6909) suggest users want better session organization and cross-session traceability.
- **Provider-reported cost transparency** — PR #6881 uses upstream billing costs when available, reflecting demand for accurate spend tracking.

## Developer Pain Points

- **Crash-on-upgrade regressions** — v0.81.0 broke session resumption and caused the `streamFunction` crash (issues #6915, #6918); the post-upgrade experience needs more robust smoke testing.
- **Long-running session fragility** — Compaction won't trigger until provider rejection (#6879), Codex WebSockets drop after long tools turns (#6931), and the `uncaughtException` path on resume (#6915) — all punish users with long-lived agentic sessions.
- **Non-abortable retry sleeps** — The SDK `Retry-After` bug (#6911) could freeze Pi for *days*. The fix landed quickly but this class of bug (delegating to SDKs without safety caps) signals a recurring oversight.
- **Packaging/dependency duplication** — The Shrinkwrap issue (#5653) and duplicate module copies of `pi-ai` mean extension authors must carefully manage dependency trees or face silent runtime failures.
- **Windows path compatibility** — The `find` tool (#6817) and the broader pattern of path-separator bugs show Windows support still has rough edges for developers on that platform.
- **Temp file performance** — Crowded `os.tmpdir()` scenarios (issue #6774, PR #6903) cause seconds-long external editor launch delays—a quality-of-life issue for users with large temp directories.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-22

## Today's Highlights

A **stable patch release (v0.20.1)** shipped today, alongside continued hardening of subagent isolation, memory caching, and daemon event replay. The community is actively engaged on two critical bugs: a recurring context overflow caused by subagent model mutation and a second OpenAI compatibility issue with tool call parameters. Several infrastructure-first PRs—including an intelligent CODEOWNERS router and a new Java SDK daemon transport—signal growing maturity in the project's contributor workflow and platform reach.

## Releases

**v0.20.1** — [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1)
- No breaking changes.
- New feat: label-driven takeover and release for `autofix` workflow; fixes forced-dispatch green no-op.
- Bundles `cua-driver-rs v0.7.3` with relative-coordinate fork: macOS notarized universal binary, Linux unsigned (x86_64 + arm64), Windows unsigned (x86_64 + arm64).
- Preview/nightly tags (v0.20.0-preview.0, v0.20.0-nightly) also updated with telemetry coverage for daemon metrics init ordering.

## Hot Issues

1. **[#7156 — Subagent mutates main session model — context overflow recurrence](https://github.com/QwenLM/qwen-code/issues/7156)**  
   *CLOSED. 11 comments.* Despite #7119's fix for model-override clearing, a different code path still silently switches the main session's model during subagent execution. A P1 bug that caused fatal 400 errors; high-priority closure suggests a surgical fix landed.

2. **[#7316 — OpenAI toolCall special reaction breaks subAgent entirely](https://github.com/QwenLM/qwen-code/issues/7316)**  
   *CLOSED. 5 comments.* OpenAI-compatible providers returning empty strings for optional `working_dir` fields, causing mutually exclusive parameters in tool calls. Blocks subagent usage for users of non-Qwen models.

3. **[#7056 — VS Code Companion: ACP process exits unexpectedly (exit 0, no signal)](https://github.com/QwenLM/qwen-code/issues/7056)**  
   *OPEN. 5 comments.* Persistent Windows/Linux connection failure between VS Code and Qwen Code daemon. User reports exit code 0 with no signal; warning about `acp` unknown option suggests Electron/Chromium flag quirks.

4. **[#7287 — Auto-memory MEMORY.md not registered in FileReadCache](https://github.com/QwenLM/qwen-code/issues/7287)**  
   *OPEN. 3 comments.* Auto-memory loads MEMORY.md into system prompt but bypasses `FileReadCache`, causing `write_file` to always reject first updates. A subtle but disruptive bug for anyone relying on persistent agent memory.

5. **[#7427 — web-shell: artifact panel spams 'Load artifacts failed: Failed to fetch'](https://github.com/QwenLM/qwen-code/issues/7427)**  
   *OPEN. 4 comments.* Automatic refresh of artifact panel on mount/state transitions triggers repeated error toasts. UX noise that erodes user confidence, even if underlying fetch failures are transient.

6. **[#7433 — Local model reported as 'coder-model(qwen-oauth)' after prompt](https://github.com/QwenLM/qwen-code/issues/7433)**  
   *OPEN. 2 comments.* ACP SDK reports a non-existent model as the current model after sending a prompt with a local (OpenAI-compatible) model. Model-state tracking regression for custom-provider users.

7. **[#7452 — cronParser */N deviates from vixie semantics](https://github.com/QwenLM/qwen-code/issues/7452)**  
   *OPEN. 2 comments.* The documented "vixie-cron day semantics" are broken for `*/N` step values in day-of-month/day-of-week. If cron-based scheduling is used for background agents, this could cause unexpected task timing.

8. **[#7306 — Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)**  
   *OPEN. 4 comments.* Umbrella issue for Phases 2–4 after Phase 1 (merged #7323). Community is watching for wire-level observability and artifact lifecycle improvements that will reduce context-window waste.

9. **[#7118 — Windows standalone installer fails on Get-FileHash](https://github.com/QwenLM/qwen-code/issues/7118)**  
   *OPEN. 2 comments. 1 👍.* SHA-256 verification fails when PowerShell can't resolve `Get-FileHash`. Affects users on constrained Windows environments; retry with `--method npm` works around it.

10. **[#7462 — Should mobile-mCP follow core versioning / CODEOWNERS adjustment](https://github.com/QwenLM/qwen-code/issues/7462)**  
    *OPEN. 1 comment.* A process discussion: bumping `packages/mobile-mcp/package.json` on every core release forces an additional maintainer approval. Signals growing tension between mono-repo convenience and independent package lifecycles.

## Key PR Progress

1. **[#7469 — Replace broad CODEOWNERS with intelligent core review router](https://github.com/QwenLM/qwen-code/pull/7469)**  
   A GitHub Actions workflow that analyzes PR diffs to route review requests to only the relevant maintainers, replacing the blanket four-maintainer rule. Reduces maintainer fatigue for small changes.

2. **[#7468 — Record auto-memory index reads in FileReadCache](https://github.com/QwenLM/qwen-code/pull/7468)**  
   Direct fix for #7287. Registers MEMORY.md reads in the session cache so first `write_file` attempts succeed. A targeted, low-risk fix for a high-frustration bug.

3. **[#7460 — Make fork subagents discoverable](https://github.com/QwenLM/qwen-code/pull/7460)**  
   Keeps `subagent_type` as an open string to allow `fork` alongside named agents. Defines fork by inherited parent context, with result delivered through background completion notification. Unblocks the fork-subagent pattern.

4. **[#7458 — Detect stale SSE cursors across daemon restarts](https://github.com/QwenLM/qwen-code/pull/7458)**  
   Adds epoch tokens to session event buses so clients can detect stale resume cursors after daemon restart. Preserves turn attribution and surfaces compaction failures in replay. Critical for long-lived web shell sessions.

5. **[#7453 — Close prompt-terminal follow-ups from #7400 self-review](https://github.com/QwenLM/qwen-code/pull/7453)**  
   Four fixes: removed running prompts no longer lose terminal; removed ready prompts that finish before terminal runs still report done; "awaiting user" prompts timeout without error; pending-step user-input cell is pruned. Tightens daemon prompt lifecycle.

6. **[#7467 — Add rendered file previews in web-shell](https://github.com/QwenLM/qwen-code/pull/7467)**  
   HTML files in sandboxed iframe, Markdown via existing renderer, with a persistent "Preview" action in the review panel. A clean UX improvement for the web shell.

7. **[#7408 — Optimize long session rendering in web-shell](https://github.com/QwenLM/qwen-code/pull/7408)**  
   Memory stability fix: bounds live-session growth to 500 UI blocks, pauses rendering when agent is idle, and falls back to lazy load for older history. Addresses real-world performance complaints.

8. **[#7409 — Soften update-check failure UX](https://github.com/QwenLM/qwen-code/pull/7409)**  
   Changes red error to yellow warning, raises timeout to 5s. Shipped in v0.20.1. Small but impactful: users behind slow/blocked networks no longer greeted with a scary failure message on startup.

9. **[#7393 — Add memory recall delivery telemetry](https://github.com/QwenLM/qwen-code/pull/7393)**  
   Distinguishes "selected" from "actually delivered" memories. A new `qwen-code.memory.recall.delivered` event lets operators debug whether the model received the memories it was sent.

10. **[#7463 — Add daemon transport to Java SDK](https://github.com/QwenLM/qwen-code/pull/7463)**  
    Adds a Java 11 daemon transport to the existing Maven artifact. Creates thread-scoped sessions, separates prompt admission from terminal completion, and streams tool calls. Signals enterprise adoption intent.

## Feature Request Trends

- **Session lifecycle improvements** — Resuming completed background sub-agents (#5540), displaying subagent transcripts in a detail panel, and adding workspace selectors to the web shell composer (#6700, #6701) all point to a demand for richer session management.
- **Observability & tool debugging** — Multiple issues request better feedback on tool-call parameter states (#7377), artifact panel reliability (#7427), and output budgeting (#7306). Users want to understand *why* a tool call failed.
- **Authentication persistence** — Two related issues (#7301, #7398) report that `--token` parameters are lost on web shell page refresh. A common pain point for users who rely on token-based auth.
- **Cross-platform and provider compatibility** — Windows-specific Docker sandbox paths (#7139), installer failures (#7118), and OpenAI-compatible model quirks (#7316, #7433) show the community spans heterogeneous environments.
- **Memory and context management** — Auto-memory caching (#7287), thinking-only model compatibility (#7332), and token usage accuracy (#7384) reflect growing scrutiny of how the tool manages conversation state and model interaction.

## Developer Pain Points

1. **OpenAI-compatible model integration remains brittle** — Two separate issues (#7316, #7433) report different failures when using non-Qwen providers, from empty optional parameters to incorrect model reporting. Each requires specialized workarounds.
2. **Web shell token authentication does not survive refresh** — Multiple users (#7301, #7398) independently report that `--token` authentication breaks after a page reload. A regression or gap in the web shell's session-persistence design.
3. **Auto-memory writes fail on first attempt** — #7287 reveals a caching design flaw where files loaded into the system prompt are not tracked, causing silent failures for memory updates. A structural issue that undermines the agent's ability to persist knowledge.
4. **Subagent model contamination** — #7156 (now closed) highlights that even after a targeted fix, subagents can corrupt the main session's model. The recurring pattern suggests the session model-scoping logic needs more fundamental re-architecting.
5. **Long session performance degradation** — #7408 and #7404 both raise issues with slow rendering and timeout checks when loading long (artifact-heavy) sessions. Users of the web shell and CLI are experiencing degraded startup and interaction latency as sessions accumulate.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-22

## Today's Highlights
The **v0.9.1 release freeze** is in full effect — over a dozen release-blocker issues were closed in the last 24h as the team converges on the final build. Major structural wins include the collapsed command execution into a single `Bash` tool, a unified `/skills` manager, and durable mode/permission state. The community also landed fixes for long-standing TUI pain points: scroll-locked output and Enter-key send lag on Windows.

## Releases
No new releases in the last 24 hours. The project remains in a v0.9.1 pre-release integration phase.

## Hot Issues (10 selected)

1. **[#4032 — Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** *(CLOSED, 41 comments)*
   - Codewhale persistently writes temporary scripts instead of using user-provided ones. The high engagement signals deep frustration: the agent ignores explicit instructions and fabricates justifications when challenged. A release-blocker resolved during the freeze.

2. **[#2870 — EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)** *(OPEN, 16 comments)*
   - The foundational architecture issue tracking the gradual decomposition of monolithic command handling into mergeable layers. Still open as the refactor spans multiple PRs.

3. **[#2766 — UI refactor needed](https://github.com/Hmbown/CodeWhale/issues/2766)** *(OPEN, 9 comments)*
   - Output hard to copy; confirmation pop-ups obscure main interface. A persistent UX pain point that has not yet been addressed.

4. **[#4410 — Restore xAI device-code OAuth login](https://github.com/Hmbown/CodeWhale/issues/4410)** *(CLOSED, 7 comments)*
   - xAI auth broke due to a hard-coded path mismatch (`/oauth2/device/code` vs the official CLI's `/oauth2/device`). Quick closure suggests a straightforward fix.

5. **[#4655 — Self-hosted route limits capped by 4K fallback](https://github.com/Hmbown/CodeWhale/issues/4655)** *(CLOSED, 1 comment)*
   - Unknown self-hosted models defaulted to a 4096-token output limit, throttling users with custom deployments. Fixed via route-level explicit limit resolution.

6. **[#4603 — Long output content cannot scroll](https://github.com/Hmbown/CodeWhale/issues/4603)** *(CLOSED, 3 comments)*
   - Content truncated beyond viewport with no scroll mechanism. A P2 bug affecting daily use, fixed with PTY scenario tests.

7. **[#4605 — Enter key send lag / UI freeze](https://github.com/Hmbown/CodeWhale/issues/4605)** *(CLOSED, 3 comments)*
   - 200–1200ms freeze on Enter across multiple versions (0.6.x–0.9.0). A high-frequency pain point finally addressed by separating UI acknowledgement from send prep.

8. **[#4674 — BashTool ignores context.workspace for default cwd](https://github.com/Hmbown/CodeWhale/issues/4674)** *(CLOSED, 1 comment)*
   - Sub-agent worktrees ran commands in the parent checkout. A subtle but critical correctness bug in sub-agent isolation — fixed the same day it was reported.

9. **[#4660 — Custom provider/model configuration request](https://github.com/Hmbown/CodeWhale/issues/4660)** *(OPEN, 1 comment)*
   - Chinese-speaking user asks for a configuration scheme inspired by Kimi Code. Signals growing international demand for flexible provider setup.

10. **[#3934 — Collapse Fleet/agent roles to Planner/Worker/Reviewer/Verifier](https://github.com/Hmbown/CodeWhale/issues/3934)** *(CLOSED, 3 comments)*
    - A v0.9.1 architecture win: four canonical responsibility roles everywhere, decoupling capability from role name.

## Key PR Progress (10 selected)

1. **[#4679 — Unified /skills manager](https://github.com/Hmbown/CodeWhale/pull/4679)** *(OPEN)*
   - Implements one `/skills` surface for inventory, audit, install, update, remove, and trust. Delivers the Skills lane from the v0.9.1 completion board.

2. **[#4046 — User command registry verification](https://github.com/Hmbown/CodeWhale/pull/4046)** *(CLOSED)*
   - Confirms CodeWhale already satisfies acceptance criteria for user-defined Markdown/frontmatter commands — no code changes needed, only tests.

3. **[#4673 — Fix shell default cwd to context.workspace](https://github.com/Hmbown/CodeWhale/pull/4673)** *(CLOSED)*
   - Quick turnaround fix for #4674: BashTool now defaults to sub-agent worktree when `worktree: true` and no explicit `cwd`.

4. **[#4654 — Acknowledge Enter before slow send prep](https://github.com/Hmbown/CodeWhale/pull/4654)** *(CLOSED)*
   - Fixes the multi-version Enter lag: immediately arms a `Preparing` pending dispatch, then clears/redraws. A crisp UX improvement.

5. **[#4653 — PTY scenario for long-output scrolling](https://github.com/Hmbown/CodeWhale/pull/4653)** *(CLOSED)*
   - Locks scrolling behavior with an end-to-end test; ensures content retained beyond viewport.

6. **[#4656 — Honor explicit limits for unknown self-hosted models](https://github.com/Hmbown/CodeWhale/pull/4656)** *(CLOSED)*
   - Lets concrete route output limits replace the 4K compatibility fallback. Fixes #4655 with regressions.

7. **[#4652 — Public --no-project-config flag](https://github.com/Hmbown/CodeWhale/pull/4652)** *(CLOSED)*
   - Enables fully reproducible headless `exec` by gating workspace-specific config overlay. Upstream-ready for a Verifiers harness.

8. **[#4658 — Provider registry + switch endpoints](https://github.com/Hmbown/CodeWhale/pull/4658)** *(CLOSED)*
   - Three new runtime API endpoints for a dynamic provider/model picker — replaces the fragile clobber-prone config flow.

9. **[#4513 — Moonshot tool parameter sanitization](https://github.com/Hmbown/CodeWhale/pull/4613)** *(CLOSED)*
   - Sanitizes tool parameters to MFJS spec for Moonshot/Kimi compatibility: root must be `type:"object"`, no `anyOf`/`oneOf` at root.

10. **[#4566 — HarmonyOS build update](https://github.com/Hmbown/CodeWhale/pull/4566)** *(OPEN)*
    - Updates Cargo.toml so CodeWhale TUI compiles on HarmonyOS PC. Community-driven platform port.

## Feature Request Trends

- **Unified skill/command management**: Multiple issues converge on the need for a single authoritative surface for skills, user commands, and tool lifecycle — the `/skills` manager and command-boundary refactor are the answer.
- **Provider/model flexibility**: Requests for custom providers, self-hosted route limits, and configuration schemes inspired by Kimi Code show strong demand for multi-provider portability.
- **Sub-agent isolation & correctness**: Issues like worktree cwd defaults and evidence contract resolution (adaptive evidence) indicate the community wants robust, verifiable sub-agent behavior, not just delegation.

## Developer Pain Points

- **TUI responsiveness**: Lag on Enter send and truncated long output are high-frequency daily frustrations — both now fixed, but the fact they persisted across 0.6.x–0.9.0 reflects a testing gap.
- **Agent disobedience**: Issue #4032 (not following the constitution) is the most-commented issue — users are frustrated when agents override explicit instructions. This is a systemic trust and reliability problem.
- **Configuration fragility**: Provider/model setup requires fragile `setConfig` clobbering (addressed by #4658), and self-hosted users hit silent caps via the 4K fallback — configuration discovery and mutation remain error-prone.
- **Multi-platform gaps**: HarmonyOS support PR is open but not merged, and Windows users reported both scrolling and lag issues — cross-platform TUI testing is lagging.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*