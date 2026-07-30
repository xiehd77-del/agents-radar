# AI CLI Tools Community Digest 2026-07-30

> Generated: 2026-07-30 02:31 UTC | Tools covered: 9

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
**Date:** 2026-07-30

## 1. Ecosystem Overview

The AI CLI tools landscape shows a mature but rapidly evolving ecosystem where seven major projects—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI—are in active, competitive development. The ecosystem is characterized by **convergence on fundamental patterns** (MCP integration, sandbox execution, hook/plugin systems) while **diverging on platform support quality and enterprise readiness**. A striking pattern across all tools is the tension between rapid feature delivery and reliability: each project is simultaneously shipping new capabilities while grappling with data-loss bugs, performance regressions, and platform-specific breakage. Windows remains the weakest platform across the board, with every tool except DeepSeek TUI reporting significant Windows-specific issues. The community is signaling a clear shift from "can it do the task?" to "can I trust it with production workloads?"—data integrity, permission system transparency, and session state management are now the dominant pain points.

## 2. Activity Comparison

| Tool | Open Issues | PRs Today | Latest Release | Release Velocity |
|-----|-------------|-----------|----------------|------------------|
| **Claude Code** | ~10 highlighted (406 👍 top issue) | 5 PRs (2 merged) | 2.1.220 (stable) | Low (no release today) |
| **OpenAI Codex** | ~10 highlighted (874 👍 top issue) | 10 PRs (all open/merged) | rust-v0.147.0-alpha.2 | High (4 alpha releases today) |
| **Gemini CLI** | ~10 highlighted (8 👍 top issue) | 10 PRs (4 closed, 6 open) | v0.55.0-nightly | Very High (nightly + preview + stable) |
| **Copilot CLI** | ~10 highlighted (36 👍 top issue) | 1 PR (open) | v1.0.76 (stable) | Medium (patch series this week) |
| **Kimi Code CLI** | ~10 highlighted (new issue) | 10 PRs (3 merged, 7 open) | No release today | Low (no release today) |
| **OpenCode** | ~10 highlighted (168 👍 top issue) | 10 PRs (all open) | No release today | Low (no release today) |
| **Pi** | ~10 highlighted (5 👍 top issue) | 10 PRs (6 closed, 4 open) | v0.83.0 (stable) | Medium (new stable today) |
| **Qwen Code** | ~10 highlighted (P1 priority bug) | 10 PRs (all open) | v0.21.1-nightly | Medium (nightly today) |
| **DeepSeek TUI** | ~10 highlighted (3 comments top issue) | 10 PRs (9 closed, 1 open) | Pre-v0.9.2 | High (heavy merge activity) |

**Key observations:**
- **Gemini CLI** and **DeepSeek TUI** show highest release/merge velocity today
- **OpenAI Codex** has the most engaged community by upvote count (#11023 at 874 👍)
- **Claude Code** dominates by **issue gravity**—its #1455 (406 👍) is the most demanded feature across all repos
- **Qwen Code** and **Copilot CLI** are shipping but with notable regression bugs in latest releases

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating converging industry demand:

| Requirement | Tools Requesting | Specific Needs |
|-------------|-----------------|----------------|
| **XDG/Config File Standardization** | Claude Code (#1455, 406👍), OpenCode, Pi | Linux config file path compliance, backup-script compatibility, enterprise deployment hygiene |
| **Plugin/Hook System Composability** | Claude Code (#39245), OpenAI Codex (#21753), Kimi Code CLI (#2148), Qwen Code | Middleware-style chaining, multiple simultaneous hooks, lifecycle hooks (pre/post), event-driven extensibility |
| **Session Transcript Portability** | Claude Code (#81946), OpenAI Codex (#25779), Kimi Code CLI (#2492, #2501), OpenCode | Project-relative storage, git-sharing, cross-device resume, export to JSON/Markdown |
| **MCP Integration & Hardening** | Claude Code (#82358), OpenAI Codex (#36055), Gemini CLI (#28410, #28481), Qwen Code | Read-only hints, timeout sanitization, OAuth token refresh, security validation, catalog pagination limits |
| **Windows Platform Parity** | Claude Code (#82447, #77311), OpenAI Codex (#33776, #36025), Copilot CLI (#4296), Qwen Code (#8050), DeepSeek TUI (#4723) | Keyboard layout fixes, process leak prevention, terminal compatibility, CI pipeline support |
| **Sandbox/Security Hardening** | OpenAI Codex (#36037, #36051), Copilot CLI (#4293, #4100), Pi (#7286), Qwen Code (#7832) | Network policy enforcement, symlink protection, credential sanitization, subagent permission control |
| **Autonomous/Batch Mode** | Qwen Code (#7983), Kimi Code CLI (#2523), Pi (#7293), DeepSeek TUI (#4959) | Headless review, `--model` flags for CI/CD, queueable commands, emergency stop mechanisms |

## 4. Differentiation Analysis

**Claude Code** maintains the **most mature enterprise feature set** (Cowork, managed settings, MCP Guard plugins) but is also the most burdened by legacy debt—its XDG compliance issue (#1455) has 406 upvotes but no clear timeline. The tool leads in **security automation** (PreToolUse hooks) and **team collaboration** features.

**OpenAI Codex** is the **most community-driven** with the highest-voted issue (874👍 for Linux desktop app) and the broadest feature request surface. Its strength is **extensibility through hooks** (29+ parity items tracked), but it struggles with **session state management** (165 GiB bloat, compaction failures) and **Windows stability** (resource leaks, input lag).

**Gemini CLI** has the **highest release velocity** with nightly, preview, and stable tracks. It leads in **MCP and sandbox reliability fixes** (4 P1 security PRs today) and **context management** (auto-compression PR). Weakness: **subagent reliability** (false success reports, permission bypass) and **model capacity issues** for preview models.

**GitHub Copilot CLI** is the **most integrated with GitHub ecosystem** (git worktree requests, GitHub auth). Its v1.0.76 release brought **plugin controls and sandbox enforcement** but also introduced **significant regressions** (crash on non-default log levels, broken `view` tool). The community is smaller but focused on **enterprise deployment** and **session management**.

**Kimi Code CLI** has the **narrowest feature surface** but is strategically positioned around **K3 open-source adoption**. Its key differentiator is **offline/air-gapped operation** demand and **custom API Base URL** support. The team is improving **Windows shell performance** and **hook reliability**.

**OpenCode** has the **most distinctive TUI UX investment** (session tab prefetching, fast switching, plugin tab API). Its community is small but passionate (168👍 for `/btw` command). Pain points center on **provider upstream failures** and **compaction bugs**.

**Pi** has a **strong plugin/extension architecture** (queue commands, Markdown API, session search SQLite). Its v0.83.0 credential export is **unique for CI/CD pipelines**. Weakness: **terminal protocol fragility** (Kitty, Wayland) and **streaming reliability** with non-conforming providers.

**Qwen Code** differentiates via **autofix infrastructure** (takeover digests, timeout breakers, race-loss salvage) and **headless/review mode**. It's the most **CI/CD-oriented** but suffers from **E2E test flakiness** and **Anthropic compatibility breaks**.

**DeepSeek TUI** has the **best localization story** (Indonesian, Vietnamese, Traditional Chinese shipped) and the **most responsive maintainer** (9 of 10 PRs closed today). Its unique strengths: **LaTeX math rendering** for technical users and **Skills Manager** for personalization. The community is **the smallest but most cohesive**.

## 5. Community Momentum & Maturity

| Tier | Tools | Characteristics |
|------|-------|-----------------|
| **High Momentum, High Maturity** | Claude Code, OpenAI Codex | 400+ upvote issues, large communities, enterprise adoption, but also highest bug complexity and legacy debt |
| **High Velocity, Medium Maturity** | Gemini CLI, DeepSeek TUI | Daily releases/merges, rapidly fixing core issues, smaller but engaged communities, less enterprise burden |
| **Medium Momentum, Medium Maturity** | GitHub Copilot CLI, Pi, Qwen Code | Steady releases, specific differentiation, growing enterprise use cases, moderate community engagement |
| **Lower Momentum, Emerging** | Kimi Code CLI, OpenCode | Smaller user bases, niche differentiation, earlier in lifecycle, less cross-platform polish |

**Key insights:**
- **DeepSeek TUI** shows the highest **closing efficiency** (90% PR closure rate today), indicating a maintainer who ships fast
- **Gemini CLI** has the **broadest surface area** (nightly+preview+stable) but also the most P1 bugs being actively fixed
- **OpenAI Codex** has the most **vocal community** (874👍 for a single feature) but also the most **severe data-integrity bugs** (165 GiB sessions)
- **Claude Code** has the **most professional community**—issues are well-documented, reproducible, and high-signal
- **Copilot CLI** shows **enterprise stabilization patterns** (plugin controls, sandbox enforcement) but fresh regressions indicate tension between velocity and quality

## 6. Trend Signals

1. **The "Trust Crisis" is Real.** Data-loss bugs (Claude Code #74260, OpenAI Codex #35458, OpenCode #30680, Pi #6819) are the most damaging class of issues. Tools that cannot guarantee output fidelity will lose production workloads. **Action:** Prioritize data integrity testing and session state verification as core quality gates.

2. **Windows is the Universal Weakness.** Every tool reports platform-specific Windows issues: process leaks (Codex, Copilot), keyboard layout bugs (DeepSeek, Qwen), terminal compatibility (Claude, Copilot), and CI failures (Qwen). **Action:** Invest in Windows CI/CD and platform-specific testing; the absence of a good Windows experience is a competitive opening.

3. **Plugin Systems are Table Stakes.** Hook composability, lifecycle hooks, and plugin chaining are demanded across 5+ tools. The era of monolithic single-plugin architectures is ending. **Action:** Design plugin systems with middleware semantics from day one.

4. **MCP is Becoming Infrastructure, Not a Feature.** MCP read-only hints, timeout handling, OAuth refresh, catalog pagination—these are plumbing fixes, not headline features. MCP is being treated as a critical transport layer requiring hardening. **Action:** Invest in MCP security and reliability tooling before feature expansion.

5. **Session Portability is the Next UX Frontier.** Users want to share, export, resume, and collaborate on sessions across devices and teams. This goes beyond "save/load"—it's about making agent conversations first-class artifacts. **Action:** Build session export/import as a foundational capability, not a post-hoc feature.

6. **Enterprise Requirements are Driving Architecture.** XDG compliance, managed settings, gateway scripts, credential export, headless mode—these are not vanity features. Real organizations are deploying these tools, and their compliance/ops teams are making demands. **Action:** Treat enterprise hardening (config standardization, audit trails, auth patterns) as product requirements, not afterthoughts.

7. **Localization is a Growth Lever.** DeepSeek TUI's Indonesian push and the Chinese Constitution debate show that localization is not just translation—it's market expansion. **Action:** Identify high-developer-density languages (Portuguese, Indonesian, Vietnamese) and prioritize full localization.

8. **Autonomous Mode is Creating a Control Gap.** The demand for `/stop` commands (DeepSeek), steer/queue semantics (OpenCode), and headless review (Qwen) signals that as agents become more autonomous, users need better runtime controls. **Action:** Build model-ignorable safety mechanisms as first-class CLI features, not chat-based workarounds.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-30 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skills generated the most community discussion and attention through Pull Requests:

### #1: Skill Creator Bug Fixes (PR #1298)
- **Functionality:** Fixes `run_eval.py` which reports 0% recall for all skill descriptions, rendering the description-optimization loop useless. Addresses Windows stream reading, trigger detection, and parallel worker issues.
- **Discussion:** References issue #556 (12 comments, 7 👍) — a critical blocker affecting all skill developers running evaluation loops. Multiple independent reproductions confirmed the bug.
- **Status:** Open | [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2: Document Typography Skill (PR #514)
- **Functionality:** Typographic quality control for generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated content.
- **Discussion:** Strong reception as addressing a universal pain point across all Claude document generation workflows. The skill targets issues users "rarely ask for but notice immediately."
- **Status:** Open | [PR #514](https://github.com/anthropics/skills/pull/514)

### #3: Self-Audit Skill v1.3.0 (PR #1367)
- **Functionality:** A universal skill that audits AI output before delivery — mechanical file verification followed by a four-dimension reasoning audit in damage-severity priority order. Works with any project, tech stack, or model.
- **Discussion:** Follow-on from Issue #1385 proposing a three-gate reasoning quality pipeline. Active iteration with community input on audit methodology.
- **Status:** Open | [PR #1367](https://github.com/anthropics/skills/pull/1367)

### #4: Testing Patterns Skill (PR #723)
- **Functionality:** Comprehensive testing coverage including Testing Trophy philosophy, AAA pattern, React Testing Library, mocking strategies, and E2E workflow guidance.
- **Discussion:** Addresses a gap in developer workflow skills — community interest in structured testing guidance integrated into Claude's behavior.
- **Status:** Open | [PR #723](https://github.com/anthropics/skills/pull/723)

### #5: Pyxel Retro Game Development Skill (PR #525)
- **Functionality:** Integrates with pyxel-mcp MCP server for the Pyxel retro game engine. Covers write → run_and_capture → inspect → iterate workflow for pixel-art/8-bit games.
- **Discussion:** Notable as a creative/educational skill with sustained updates (latest July 2026). Demonstrates MCP integration pattern within Skills.
- **Status:** Open | [PR #525](https://github.com/anthropics/skills/pull/525)

### #6: Plan File Hygiene Skill (PR #1479)
- **Functionality:** Lifecycle management for planning artifacts — prevents accumulation of stale plan files that waste context window and confuse Claude's state.
- **Discussion:** Built on community framing from Issue #1417. Explicitly credits community contributors for problem identification and solution framing.
- **Status:** Open | [PR #1479](https://github.com/anthropics/skills/pull/1479)

### #7: Color Expert Skill (PR #1302)
- **Functionality:** Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces with "what to use when" guidance, and palette generation.
- **Discussion:** Ongoing refinement through July 2026. Addresses a specialized but broadly applicable domain skill.
- **Status:** Open | [PR #1302](https://github.com/anthropics/skills/pull/1302)

---

## 2. Community Demand Trends

From the most-active Issues (50 total, filtered for feature requests and skill proposals), the dominant community demands are:

### 🔴 Critical Infrastructure Fixes
- **Skill Creator reliability** — Issues #556, #1169, #1061 document a systemic 0% recall bug in `run_eval.py` that blocks all skill optimization. Multiple users confirm independently. This is the #1 pain point.
- **Windows compatibility** — Issues #1061, #202 report subprocess, encoding, and pipe handling failures that prevent Windows users from running the skill development toolchain.
- **Duplicate skill installation** — Issue #189: `document-skills` and `example-skills` plugins install identical content, wasting context with duplicates.

### 🚀 Most-Requested New Skill Directions
1. **Agent governance & safety** — Issue #412: Policy enforcement, threat detection, trust scoring for multi-agent systems. Closed but generated 6 comments and strong engagement.
2. **Compact memory/state notation** — Issue #1329: Symbolic notation for compressing long-running agent state to preserve context window. Proposer actively contributing skills.
3. **Organizational skill sharing** — Issue #228 (16 comments, 8 👍): Direct sharing mechanism within Claude.ai orgs vs. manual file transfer.
4. **API integration & context management** — Issue #1487: `claude-api` skill injecting 156k tokens per call, exhausting context. Signals demand for context-aware skill design patterns.

### ⚠️ Security & Trust Concerns
- **Issue #492** (43 comments — highest across all issues): Community skills distributed under `anthropic/` namespace create trust boundary vulnerability. Users may grant elevated permissions to skills they believe are official. This is a governance/security concern, not a skill request per se, but indicates the community is actively thinking about skill supply chain security.

---

## 3. High-Potential Pending Skills

These Skills have active comment threads and may merge soon:

| PR | Skill | Last Updated | Key Signal |
|----|-------|-------------|------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-Audit (v1.3.0) | 2026-07-02 | Active iteration, four-dimension reasoning gate, responds to quality concerns |
| [#1479](https://github.com/anthropics/skills/pull/1479) | Plan File Hygiene | 2026-07-27 | Very recent, addresses lifecycle gap, community-co-authored framing |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color Expert | 2026-07-21 | Sustained updates, well-scoped domain skill with practical tables |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel Game Dev | 2026-07-15 | Active maintenance by original library author, MCP integration pattern |

The **self-audit** and **plan file hygiene** skills are particularly notable — they address meta-workflow quality concerns that the broader developer community is increasingly vocal about.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for two interconnected improvements to the Skills development infrastructure itself** — specifically, fixing the broken `run_eval.py` recall evaluation (blocking all skill optimization workflows) and extending Skills from single-session tools into managed, composable, and governance-aware components (via shared libraries, lifecycle management, context-efficiency patterns, and namespace security).

---

# Claude Code Community Digest
**2026-07-30**

---

## Today's Highlights

The community is sounding an alarm over a long-standing data-loss bug (#74260) where assistant text blocks are silently dropped during adaptive thinking turns—a critical issue affecting transcript integrity. A high-priority XDG compliance ticket (#1455) has exploded to 406 upvotes as Linux users demand config file standardization. Meanwhile, the Cowork feature is drawing scrutiny with three open issues around VM teardown behavior, service DACL blocks, and UI inconsistencies.

---

## Releases

No new releases in the last 24 hours. The most recent stable version remains **Claude Code 2.1.220**.

---

## Hot Issues

### 1. [#1455 — XDG Base Directory Specification not respected (Linux)](https://github.com/anthropics/claude-code/issues/1455)
- **Status:** Open | **👍:** 406 | **Comments:** 62
- **Why it matters:** Linux users are vocal that `~/.claude` and `~/.claude.json` don't follow `$XDG_CONFIG_HOME`/`$XDG_CACHE_HOME`. This pollutes home directories and breaks backup scripts. The 406 upvotes make it the **most demanded feature on the entire repo**. Community reaction: "This is basic Linux hygiene—every other modern CLI tool does this."

### 2. [#74260 — Assistant text blocks silently dropped during thinking turns](https://github.com/anthropics/claude-code/issues/74260)
- **Status:** Open | **👍:** 13 | **Comments:** 20
- **Why it matters:** A `text` block followed by more thinking in the same turn is never rendered and is **missing from the transcript JSONL**. This is a hard data-loss bug—users can't rely on output fidelity. Has a clear reproduction across macOS/Linux/Windows. The `data-loss` label flags this as a P0 candidate.

### 3. [#44657 — Subagent Write tool rejects specific `.md` filenames](https://github.com/anthropics/claude-code/issues/44657)
- **Status:** Open | **👍:** 13 | **Comments:** 8
- **Why it matters:** Subagents cannot write `report.md`, `summary.md`, `findings.md`, or `analysis.md` with no opt-out. Community reaction is frustrated: "I asked the agent to write a report, and it said 'Subagents should return findings as text, not write report files'—that's my *actual use case*."

### 4. [#77730 — Background agent transcripts become unresumable](https://github.com/anthropics/claude-code/issues/77730)
- **Status:** Open | **👍:** 0 | **Comments:** 6
- **Why it matters:** Background agents lose their transcript mid-session, forcing full-context respawns that burn tokens. Filed by a Claude Max subscriber—impacts heavy users running long-lived agents.

### 5. [#73638 — Session rename corrupts transcript mid-tool-call](https://github.com/anthropics/claude-code/issues/73638)
- **Status:** Open | **👍:** 0 | **Comments:** 6
- **Why it matters:** Renaming a session while a `server_tool_use` call is in flight injects a malformed `system-reminder` turn, making the transcript permanently unparseable. Any future prompt returns a 400 error. Reproducible with the built-in `advisor` tool.

### 6. [#39245 — Mental model for hooks: the hook system is not composable](https://github.com/anthropics/claude-code/issues/39245)
- **Status:** Open | **👍:** 0 | **Comments:** 5
- **Why it matters:** Only one hook module can be loaded at a time, breaking the composability promise. Teams that want both security scanning *and* usage tracking hooks must build a monolithic plugin. Community reaction: "We need hook chaining like middleware in express/koa."

### 7. [#82451 — `PreToolUse` hook `allow` no longer overrides `permissions.ask`](https://github.com/anthropics/claude-code/issues/82451)
- **Status:** Open (filed today) | **👍:** 0 | **Comments:** 0
- **Why it matters:** A regression in 2.1.220 where hook-based permission decisions are ignored in favor of permission globs. This breaks security automation where hooks explicitly allow certain tools but the default glob denies them.

### 8. [#82450 — `managed-settings enabledPlugins` silently suppresses same-name plugins from `--plugin-dir`](https://github.com/anthropics/claude-code/issues/82450)
- **Status:** Open (filed today) | **👍:** 0 | **Comments:** 0
- **Why it matters:** Organizations distributing Cowork plugins via MDM (managed settings) can't override them with local dev builds. The managed settings silently win with no warning—confusing for enterprise deployments.

### 9. [#82447 — Windows npm `claude.cmd` returns raw prose for `--json-schema` calls](https://github.com/anthropics/claude-code/issues/82447)
- **Status:** Open (filed today) | **👍:** 0 | **Comments:** 0
- **Why it matters:** On Windows, `claude.cmd` (npm) returns natural language instead of JSON when given a `--json-schema` schema, while `claude.exe` works correctly. Breaks automated pipelines and CI workflows that depend on structured output.

### 10. [#82449 — 2.1.220 regression: severe scroll lag in JetBrains IDEA plugin](https://github.com/anthropics/claude-code/issues/82449)
- **Status:** Open (filed today) | **👍:** 0 | **Comments:** 0
- **Why it matters:** A clear performance regression in the TUI rendering layer only in 2.1.220. Scrolling becomes unusably laggy after a few turns in the JetBrains IDEA plugin terminal. Absent in 2.1.219—pinpointing the release that introduced the bug.

---

## Key PR Progress

### 1. [#48272 — Enrich release titles with changelog summary](https://github.com/anthropics/claude-code/pull/48272)
- **Status:** Closed (merged)
- **What:** Automates release note generation with structured changelog bullet points in `<p>• ...</p>` format. Upstream `main` now ships a `feed.xml` using this format. Improves discoverability of what changed in each version.

### 2. [#82358 — MCP Guard plugin: security hardening for MCP configurations](https://github.com/anthropics/claude-code/pull/82358)
- **Status:** Open
- **What:** Addresses the security concern (#82351) where MCP configs casually dump bearer tokens into terminal output. Adds validation/sanitization before displaying MCP configurations. Important for safe debugging workflows.

### 3. [#82335 — Fix GCP gateway `setup.sh` silent exit when `gcloud` missing](https://github.com/anthropics/claude-code/pull/82335)
- **Status:** Open
- **What:** Fixes a `set -euo pipefail` issue where a missing `gcloud` binary causes the script to exit with code 127 without any error message. The `2>/dev/null` redirection suppressed the failure. Now handles gracefully.

### 4. [#82320 — Fix AWS gateway `setup.sh` aborting on macOS bash 3.2](https://github.com/anthropics/claude-code/pull/82320)
- **Status:** Open
- **What:** macOS ships bash 3.2 as `/bin/bash`, which doesn't support `${DIST_SHA256,,}` (case-modification expansion from bash 4+). The script unconditionally aborted there on macOS. Fixes cross-platform portability for gateway setup.

### 5. [#78315 (Issue) — Browser tool approval ignores `allowedSites` for read actions](https://github.com/anthropics/claude-code/issues/78315)
- **Status:** Closed as invalid
- **Community note:** While closed, the issue highlights a confusing UX pattern: navigation to allowed sites works without prompts, but read/interact actions (screenshot, page text) still require per-action approval. The separation isn't intuitive.

---

## Feature Request Trends

### 🥇 **XDG Base Directory Compliance** (#1455, 406 👍)
Overwhelmingly the most requested feature. Linux users want `~/.claude` → `$XDG_CONFIG_HOME/claude` and `$XDG_CACHE_HOME/claude`. Many cite this as blocking adoption in standardized Linux environments.

### 🥈 **Session & Transcript Portability** (#81946, new)
Users want session transcripts to be project-portable (stored relative to project directory) while keeping scratch files local-only. Enables sharing session history with teammates via git.

### 🥉 **Plugin System Composability** (#39245)
The hook system needs middleware-style chaining so multiple plugins can stack. Currently limited to one hook module at a time.

### Also trending:
- **Hook visibility on Desktop/VS Code** (#78266): Advisory hooks (returning `systemMessage` without `decision`) don't render in non-CLI environments.
- **Keyboard input on Windows** (#77311, #80817): `shift+enter` for newline doesn't work in Windows Terminal; need Win32 input support.

---

## Developer Pain Points

**1. Data integrity during agent operations.** Three issues (#74260, #77730, #73638) involve corrupted or lost agent data during turns, session management, and background agent execution. This is the #1 reliability concern.

**2. Windows platform inconsistencies.** From `claude.cmd` vs `claude.exe` behavior differences (#82447) to keyboard input issues (#77311, #80817) and GPU-process crashes (#80444), Windows users face a fragmented experience.

**3. Permission system opacity.** Hooks don't reliably override permission globs (#82451), managed settings silently shadow local plugins (#82450), and browser tool approval logic is counterintuitive (#78315). Developers can't trust their security configuration.

**4. Performance regressions.** The 2.1.220 scroll lag (#82449) and the persistent idle CPU/disk issue (#58799) show reliability teething problems in the rendering and persistence layers.

**5. Enterprise deployment friction.** GCP/AWS gateway scripts fail on common developer environments (#82335, #82320), managed-settings plugin handling is opaque (#82450), and there's no clear path to clear stale update status messages (#82408).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-07-30

---

## Today's Highlights

Codex shipped a dense batch of infrastructure PRs today—ranging from MCP read-only hints and sandbox safety fixes to shared HTTP client refactoring—while the community continues to grapple with a Windows resource-leak epidemic. A massive 192-comment thread demanding a native Linux desktop app remains the most vocal feature request, and several reports of session data bloat (up to 165 GiB) underline persistent compaction and state-management gaps.

---

## Releases

Four Rust pre-release versions landed in the last 24 hours, all alpha channel:
- **`rust-v0.147.0-alpha.2`** – Latest alpha of the Rust SDK.
- **`rust-v0.147.0-alpha.1`** – Preceding alpha.
- **`rust-v0.146.0-alpha.9.2`** – Patch release on the v0.146 train.
- **`rust-v0.146.0-alpha.9.1`** – Additional patch on v0.146.

No release notes or changelog summaries were provided beyond the automated "Release X" stub. These appear to be continuous delivery snapshots rather than feature releases.

---

## Hot Issues

1. **[#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**  
   *874 👍, 192 comments* – The top-voted open issue. Author cites macOS performance problems (related to issue #10432) and requests a native Linux app to use on high-power desktop hardware. Heavy community engagement suggests this is a blocking gap for professional Linux-based developers.

2. **[#21753 – Full Claude Code Hook Parity (29+)](https://github.com/openai/codex/issues/21753)**  
   *22 👍, 29 comments* – Umbrella tracker for 29+ hook parity items. Community wants a complete automation surface matching Claude Code: pre/post hooks, lifecycle hooks, and custom event handlers. A clear signal that advanced users need programmable extensibility.

3. **[#33776 – Windows: hundreds of taskkill.exe/conhost.exe processes](https://github.com/openai/codex/issues/33776)**  
   *23 👍, 25 comments* – Desktop app on Windows spawns up to 287 `taskkill.exe` processes, causing WMI storms and DWM degradation. Likely a tool-execution cleanup bug. High severity given the system-wide impact.

4. **[#10561 – Plan Mode: "Copy Plan" button & "Clear Context" workflow](https://github.com/openai/codex/issues/10561)**  
   *37 👍, 19 comments* – Request to bridge plan-to-execution gap with a one-click plan copy and a "clear context and start coding" flow. Indicates current Plan Mode lacks a clean handoff to implementation.

5. **[#25779 – Meta-bug: unbounded session/turn state causes freezes](https://github.com/openai/codex/issues/25779)**  
   *8 👍, 12 comments* – Comprehensive report of session state bloat, context growth, and lost active-turn control. Author documents multiple failure modes on Windows. A systemic architecture issue.

6. **[#35458 – Screenshots re-persisted: ~165 GiB session bloat](https://github.com/openai/codex/issues/35458)**  
   *0 👍, 4 comments* – A single session reached 165 GiB, with 95% being base64-encoded PNG screenshots re-persisted on every compaction and inherited by subagent forks. Critical storage management failure for image-heavy workflows.

7. **[#35311 – In-app Browser crash loop on Windows](https://github.com/openai/codex/issues/35311)**  
   *2 👍, 10 comments* – Routine Microsoft Store update check cascaded into a startup crash loop, package remediation, and persistent deep-control timeouts. Highlights fragility of the in-app browser component.

8. **[#35113 – "You don't have access to Codex yet" auth error](https://github.com/openai/codex/issues/35113)**  
   *3 👍, 4 comments* – Windows desktop app fails to load home page and incorrectly shows "You don't have access" despite valid Plus subscription. Likely a token/cache validation regression.

9. **[#35593 – Codex over-tests routine changes (98 min Xcode tests)](https://github.com/openai/codex/issues/35593)**  
   *0 👍, 2 comments* – Agent ran full Xcode UI test plan after simple copy/integration changes despite user requesting a dev build. User frustration over wasted compute and time; suggests model lacks task-scope awareness.

10. **[#36025 – System-wide mouse/input lag from WMI snapshots](https://github.com/openai/codex/issues/36025)**  
    *0 👍, 2 comments* – PowerShell WMI process snapshots cause system-wide input lag on Windows app 26.721.11231.0. A performance regression affecting core UX.

---

## Key PR Progress

1. **[#36055 – Expose MCP read-only hints in tool call items](https://github.com/openai/codex/pull/36055)**  
   Propagates `readOnlyHint` annotations from MCP tools through tool-call events and persisted history. Enables better tool-use safety enforcement.

2. **[#36054 – Remove legacy --full-auto handling from codex exec](https://github.com/openai/codex/pull/36054)**  
   Deprecates hidden `--full-auto` flag. Callers must now explicitly use `--sandbox workspace-write`. A cleanup toward predictable sandbox configuration.

3. **[#36051 – Avoid overwriting symlinked migration targets](https://github.com/openai/codex/pull/36051)**  
   Fixes a security-relevant bug where migration could write through symlinks to files outside the repository. Uses symlink metadata to detect overwritable targets.

4. **[#36039 – Limit MCP catalog pagination](https://github.com/openai/codex/pull/36039)**  
   Caps MCP catalog discovery to 100 pages and 1,024 items. Prevents unbounded pagination from malicious or misconfigured MCP servers.

5. **[#36037 – Deny network access when allow amendment fails](https://github.com/openai/codex/pull/36037)**  
   Security fix: a failed network policy amendment no longer grants session-wide host access. Only approves the host after successful amendment.

6. **[#36036 – Allow naming forked chats from the TUI](https://github.com/openai/codex/pull/36036)**  
   Adds optional thread name support to `/fork` command. Small UX improvement for TUI users managing multiple conversation branches.

7. **[#36035 – Exit stdio app-server when connection closes](https://github.com/openai/codex/pull/36035)**  
   Prevents the stdio-based app-server from lingering after stdin closes while another remote client is connected. Fixes a shutdown race condition.

8. **[#36033 – Use shared HTTP client in codex-protocol](https://github.com/openai/codex/pull/36033)**  
   Replaces direct `reqwest` dependencies with `codex_http_client::HttpError` and shared HTTP types. Part of ongoing effort to centralize HTTP infrastructure.

9. **[#36031 – Load cloud-managed servers in MCP CLI commands](https://github.com/openai/codex/pull/36031)**  
   Enables `codex mcp list`, `get`, `login`, `logout` to resolve enterprise-managed MCP servers from cloud configuration. Scopes `add`/`remove` to user-only config.

10. **[#36008 – Route pet asset downloads through shared HTTP client](https://github.com/openai/codex/pull/36008)**  
    Asynchronously downloads pet spritesheets via `RouteAwareClientPool`. Ensures CDN redirects respect configured route handling. Minor but shows infrastructure consolidation.

---

## Feature Request Trends

- **Linux Desktop App** – #11023 remains the highest-voted open issue (874 👍). The community is pushing for parity with macOS/Windows, especially for power-user Linux workstations.
- **Claude Code Hook Parity** – #21753 signals demand for a complete automation surface: pre/post hooks, lifecycle hooks, and event-driven extensibility matching competitor tooling.
- **Plan-to-Code Workflow** – #10561 and related requests show users want seamless handoff from planning to implementation, with copy-paste plan support and context clearing.
- **Session State Management** – Multiple requests (#25779, #14722) ask for remote session syncing, resumable sessions across devices, and transparent state management.
- **TUI Enhancements** – Chat tabs (#17291), fork naming (#36036), and better multi-session control are frequent TUI feature requests.

---

## Developer Pain Points

1. **Windows Resource Leaks** – The dominant cluster of bugs: `taskkill.exe` storms (#33776), DWM handle accumulation (#33192), WMI-induced input lag (#36025), and system-wide mouse jitter (#33258). Windows stability is a major concern.
2. **Session Bloat & Compaction Failures** – Issues #35458 (165 GiB session), #34863 (10.2 GB JSONL), and #25779 (unbounded state growth) indicate the compaction/storage layer cannot handle image-heavy or long-running workflows. This is a core architecture pain point.
3. **Inconsistent Automation Availability** – #23172 reports that automation tools (`automation_update`) work in some Windows chats but not others. Suggests per-chat state corruption or inconsistent capability exposure.
4. **Context Loss on Compaction** – #35935 reports that compaction loses task state, causing work repetition and exhaustion of weekly usage limits. A regression that directly impacts productivity.
5. **MCP & Sandbox Fragility** – #18486 (`Transport closed` with stdio MCP), #16908 (sandbox panic), and #35914 (Google Drive VFS hang) show that MCP and sandbox integrations still have rough edges on Windows.
6. **Localization Gaps** – #19518 notes that Chinese language setting does not localize top menu or sidebar. Small but signals incomplete i18n coverage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-30

## Today's Highlights
The Gemini CLI team continued its rapid release cadence with today's **v0.55.0-nightly** build, alongside finalization of the **v0.53.0** stable changelog and a **v0.54.0-preview.0** release candidate. Community discussion centered on API capacity issues for the new `gemini-3-flash-preview` model and persistent subagent reliability bugs, including false success reports when agents hit turn limits. Several important PRs landed to fix MCP timeout hangs, OAuth token refresh failures, and a critical PTY memory leak.

## Releases
- **v0.55.0-nightly.20260730.gdc859e8e4** ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260730.gdc859e8e4)) — Automated nightly build. Includes changelog pre-work for v0.54.0-preview.0 and v0.53.0.

## Hot Issues (Top 10)

1. **[#18811 — API Error: Failed to generate content: Request contains an invalid argument](https://github.com/google-gemini/gemini-cli/issues/18811)** (15 comments, 5 👍)
   - *Why it matters:* A long-running, high-engagement bug affecting basic CLI usage after auto-update. Community reporting suggests a parsing regression introduced between v0.27.4 → v0.28.0 that has persisted for months.

2. **[#19883 — No capacity available for model gemini-3-flash-preview](https://github.com/google-gemini/gemini-cli/issues/19883)** (13 comments, 8 👍)
   - *Why it matters:* Users report the new `gemini-3-flash-preview` model is unreachable while `gemini-2.5-lite` and `gemini-3-pro` work fine. The highest-voted issue today, signaling strong community interest in preview model capacity.

3. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (12 comments, 2 👍)
   - *Why it matters:* A critical agent reliability bug where subagents hit turn limits but report `status: "success"` / `Termination Reason: "GOAL"` — misleading users and evaluation pipelines. Labeled `priority/p1`.

4. **[#18903 — Request contains an invalid argument](https://github.com/google-gemini/gemini-cli/issues/18903)** (13 comments, 2 👍)
   - *Why it matters:* Another instance of the "invalid argument" error, suggesting a systemic API validation issue rather than an isolated user config problem.

5. **[#18834 — Fix for "Sandbox image is missing or could not be pulled"](https://github.com/google-gemini/gemini-cli/issues/18834)** (11 comments, 1 👍)
   - *Why it matters:* User offers a fix for sandbox mode failing on Docker image pulls even when `docker pull` works fine. Low-effort but high-impact for sandbox users.

6. **[#25166 — Shell command execution stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3 👍)
   - *Why it matters:* Repeated reports of the CLI hanging after simple, non-interactive shell commands. High frustration for users relying on shell execution.

7. **[#27578 — Gemini keeps thinking with only "hello", failure rate 100%](https://github.com/google-gemini/gemini-cli/issues/27578)** (4 comments)
   - *Why it matters:* A 100% failure mode on even the simplest prompts. Suggests a possible model-side regression or configuration issue affecting some users.

8. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (3 comments)
   - *Why it matters:* Agents mode explicitly disabled in config, yet subagents (e.g., `generalist`) still execute. A significant trust and security concern for users who opted out.

9. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments)
   - *Why it matters:* Auto Memory's extraction agent retries unreadable low-signal sessions infinitely, wasting tokens and computation. Part of a broader memory system quality push.

10. **[#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments)
    - *Why it matters:* Hard limit on tool count causes 400 errors. Community expects smarter tool selection from the agent when many tools are enabled.

## Key PR Progress (Top 10)

1. **[#28581 — fix(cli): skip diff hunk markers during @ processing](https://github.com/google-gemini/gemini-cli/pull/28581)** (`area/core`, size/m)
   - *What:* Prevents unified/combined diff hunk markers from being interpreted as `@file` references, removing two recursive glob searches per hunk. Fixes heap growth on large diffs.

2. **[#28410 — fix(core): shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)** (CLOSED, `priority/p1`, `area/agent`)
   - *What:* MCP `tools/list` could freeze the CLI for 10 minutes at startup. Now fails fast with a short default timeout. Critical for MCP reliability.

3. **[#28406 — fix(availability): apply modelIdResolutions to tool sub-agent model configs](https://github.com/google-gemini/gemini-cli/pull/28406)** (CLOSED, `priority/p1`, `area/agent`)
   - *What:* Fixes #28390 — utility tools using `gemini-3-flash-preview` hardcoded the model ID, so API-key users without preview access hit errors. Now respects `modelIdResolutions`.

4. **[#28485 — fix(cli): add gemini-3.5-flash to model selector for all users](https://github.com/google-gemini/gemini-cli/pull/28485)** (`priority/p2`, `area/core`)
   - *What:* Fixes #28483 — users on v0.51.0 couldn't select `gemini-3.5-flash` or `gemini-3.6-flash` from the model selector. Updates `buildAvailableModels` to surface newer flash models.

5. **[#28481 — fix(core): refresh MCP OAuth tokens with the stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)** (`priority/p1`, `area/security`)
   - *What:* MCP OAuth token refresh was failing locally before any network I/O, then deleting stored credentials and forcing re-auth on every CLI restart.

6. **[#27154 — fix(core): prevent PTY memory leak by synchronously deleting active entries](https://github.com/google-gemini/gemini-cli/pull/27154)** (CLOSED, `priority/p2`)
   - *What:* Critical memory and file descriptor leak in `ShellExecutionService` — PTY entries were never garbage collected because `activePtys.delete()` was wrapped in a Promise `.then()`.

7. **[#28586 — fix(core): preserve thoughtSignature in functionCall parts to fix 400 error](https://github.com/google-gemini/gemini-cli/pull/28586)** (`priority/p2`, `area/agent`)
   - *What:* Regression in v0.53.0 where `thoughtSignature` was stripped from parallel tool calls, causing a 400 Bad Request error during multi-tool invocations.

8. **[#28566 — fix(core,cli): propagate InvalidStreamError details to UI for empty response guidance](https://github.com/google-gemini/gemini-cli/pull/28566)** (`priority/p1`, `area/core`)
   - *What:* Propagates `InvalidStreamError` type and message to the UI, enabling specific troubleshooting suggestions (e.g., recommend `/compress` for context overflow).

9. **[#28488 — feat(cli): auto-compress chat history on context window overflow](https://github.com/google-gemini/gemini-cli/pull/28488)** (size/m)
   - *What:* New `model.autoCompressOnOverflow` setting that automatically compresses history when the context window is about to overflow, instead of stopping with a warning.

10. **[#28404 — fix(core): override genai version of google-auth-library to 10.9.0](https://github.com/google-gemini/gemini-cli/pull/28404)** (CLOSED, size/xs)
    - *What:* Pins `google-auth-library` to v10.9.0 to resolve dependency conflicts from the genai SDK — a small but crucial fix for CI/CD pipeline stability.

## Feature Request Trends
- **AST-aware codebase mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)): Growing interest in using Abstract Syntax Tree tools (tilth, glyph) for precise method reading, search, and codebase mapping — reducing token waste from misaligned reads.
- **Subagent trajectory visibility** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)): Community wants subagent trajectories accessible via `/chat share` for easier debugging and evaluation.
- **Automatic session takeover for browser agent** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)): Request for browser agent to recover from locked/orphaned profiles rather than fail-fast.
- **Safety guardrails for destructive operations** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)): Users want the agent to discourage/delay destructive commands like `git reset --force` or database modifications.
- **HVTracker trust badge** ([#27592](https://github.com/google-gemini/gemini-cli/issues/27592)): External suggestion to add a live trust/badge score to the README for transparency.

## Developer Pain Points
1. **Model availability and capacity**: The highest-voted issue today ([#19883](https://github.com/google-gemini/gemini-cli/issues/19883)) concerns `gemini-3-flash-preview` being unreachable. This is compounded by the `modelIdResolutions` not applying to tool sub-agents (PR [#28406](https://github.com/google-gemini/gemini-cli/pull/28406)).
2. **Subagent reliability**: Multiple bugs highlight subagents reporting false success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), running without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), and ignoring settings overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
3. **Shell execution hangs**: The CLI frequently stalls after simple shell commands ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and the PTY memory leak fix ([#27154](https://github.com/google-gemini/gemini-cli/pull/27154)) suggests this has been a systemic issue.
4. **MCP integration fragility**: MCP tools freeze at startup ([#28410](https://github.com/google-gemini/gemini-cli/pull/28410)) and OAuth tokens fail to refresh ([#28481](https://github.com/google-gemini/gemini-cli/pull/28481)) — both `priority/p1` fixes shipping now.
5. **Context window and auto-compression**: Users hitting context limits with no recovery path are driving demand for auto-compression ([#28488](https://github.com/google-gemini/gemini-cli/pull/28488)) and better error propagation ([#28566](https://github.com/google-gemini/gemini-cli/pull/28566)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-30

## Today's Highlights
Version 1.0.76 dropped yesterday with substantial plugin and sandbox improvements, plus support for the **grok-4.5** model. However, the release is shadowed by a wave of new bugs—the CLI crashes on non-default log levels, paste breaks in iTerm2, and typing latency degrades over long sessions. The community is also pressing for better session management and git worktree lifecycle support, reflecting growing enterprise adoption.

## Releases

**v1.0.76** (2026-07-29) — [View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.76)

- **Plugin controls:** Added enable/disable toggles in `/plugins` for plugins, instructions, agents, LSP servers, and hooks.
- **New model support:** `grok-4.5` is now available.
- **Sandbox enforcement:** Denied paths now enforced for relative and symlinked entries on macOS and Linux (Windows remains per-path incapable).
- **UX improvements:** Unsent prompt text now persists between turns; update notifications now suggest `/restart` and drop the warning color; `/diff` performance improved for large multi-file diffs.
- **Split-view sidebar:** Hover-to-focus is now off by default (opt in with `sidebar.hoverFocus`).

**v1.0.76-5** (2026-07-29) — Additional patch with the plugin controls and grok-4.5 support.

**v1.0.76-4** — Sandbox path fix.

**v1.0.76-3** — Smoother update notifications, faster `/diff` rendering, sidebar defaults changed.

**v1.0.76-2** — Added a directable queue manager (staff) and a new Sessions sidebar (experimental, `/expe`).

---

## Hot Issues (10 selected)

1. **[#4163 — Child process zombies accumulate on Linux](https://github.com/github/copilot-cli/issues/4163)** [CLOSED]
   - **What:** Finished subprocesses linger as zombies under the copilot PID, leaking ~2 per minute. Reported for 1.0.71.
   - **Why it matters:** This is a process hygiene bug that can exhaust system PID limits on long-running sessions. Closed, but sister issue #4290 claims it's not fixed on AlmaLinux 8.10.
   - **Community:** 3 👍, 6 comments.

2. **[#1613 — Feature request: Built-in git worktree lifecycle management](https://github.com/github/copilot-cli/issues/1613)** [OPEN]
   - **What:** Copilot should create, use, and destroy git worktrees automatically for isolated task work.
   - **Why it matters:** A long-standing top request (since Feb 2026) with 36 👍 — developers want safe parallel task isolation without manual worktree juggling.
   - **Community:** 36 👍, 3 comments.

3. **[#4202 — `view` tool reports "Path does not exist" for existing files](https://github.com/github/copilot-cli/issues/4202)** [OPEN]
   - **What:** The built-in `view` tool falsely says files don't exist in 1.0.73, while 1.0.71 works. Regression started in 1.0.72.
   - **Why it matters:** A core tool is broken, making file inspection unreliable. Triage status suggests it's not yet fixed.
   - **Community:** 0 👍, 3 comments.

4. **[#1168 — Excessive authorization prompts ("authorization fatigue")](https://github.com/github/copilot-cli/issues/1168)** [OPEN]
   - **What:** A single high-level request can trigger over a dozen consecutive authorization prompts.
   - **Why it matters:** Destroys developer flow and increases risk of auth token fatigue. 2 👍, 3 comments — persists for 6 months.
   - **Community:** 2 👍, 3 comments.

5. **[#4293 — Sub-agents with full tool access return empty, no error](https://github.com/github/copilot-cli/issues/4293)** [OPEN]
   - **What:** Launching a sub-agent with full tool access yields zero output or error; restricted-tool agents work fine.
   - **Why it matters:** Could indicate a security gating bug or a silent failure in tool propagation. New (1 day old), urgent triage.
   - **Community:** 0 👍, 2 comments.

6. **[#2770 — CLI stuck on "Cancelling", Enter stops working](https://github.com/github/copilot-cli/issues/2770)** [OPEN]
   - **What:** After cancellation, the CLI becomes unresponsive to Enter key, killing slash commands and session recovery.
   - **Why it matters:** A session-killer bug with 9 👍 — makes the CLI unusable until manual restart.
   - **Community:** 9 👍, 1 comment.

7. **[#4299 — Increasing typing latency over long sessions](https://github.com/github/copilot-cli/issues/4299)** [OPEN]
   - **What:** Typing latency grows dramatically in long-running sessions, especially with background agents.
   - **Why it matters:** New (today) — suggests a memory leak or event loop starvation. Hits power users hard.
   - **Community:** 0 👍, 0 comments.

8. **[#4297 — Crash on launch with non-default log levels](https://github.com/github/copilot-cli/issues/4297)** [OPEN]
   - **What:** Setting `--log-level` to `none`, `error`, `warning`, `info`, or `debug` causes an immediate crash.
   - **Why it matters:** Logging is essential for debugging — broken in latest release. Duplicated in #4285 (1.0.76-1).
   - **Community:** 0 👍, 0 comments.

9. **[#4286 — Streaming `tool_use` input buffered until complete](https://github.com/github/copilot-cli/issues/4286)** [OPEN]
   - **What:** Large tool argument JSON is buffered server-side, causing multi-minute silences before flush.
   - **Why it matters:** Destroys streaming responsiveness — developer sees nothing for minutes. Impacts tool-using agents.
   - **Community:** 0 👍, 0 comments.

10. **[#4296 — Cmd+V paste broken in iTerm2](https://github.com/github/copilot-cli/issues/4296)** [OPEN]
    - **What:** Paste via Cmd+V doesn't work in iTerm2; only Edit → Paste works. Claude Code works fine.
    - **Why it matters:** macOS developer friction — a basic input modality broken. Triage, 0 👍, 0 comments.

---

## Key PR Progress (1 item only available)

1. **[#4100 — "安全性" (Security)](https://github.com/github/copilot-cli/pull/4100)** [OPEN]
   - **Author:** huangyoufeng76-debug | Updated: 2026-07-29
   - **Summary:** A pull request titled "安全性" (Chinese for "security"). Single PR in the window — likely a security hardening or vulnerability fix, but lacks detail.
   - **Community:** 0 👍, 0 comments.

---

## Feature Request Trends

- **Git worktree lifecycle management** (#1613, 36 👍): The top-voted feature—developers want Copilot to spin up isolated worktrees per task, do work, and clean up automatically. Signals a shift toward Copilot as a full task-runtime, not just a chat assistant.
- **Session management improvements:** Request for `/resume` sorting by recency (#4140), multiple concurrent sessions (#4140 downvotes on stale order), and session/close in ACP (#4113). Users want better session hygiene.
- **Plugin/hook ecosystem expansion:** Server-managed plugin persistence (#4283), `.agents` discovery in any folder (#4204), and sandbox tool whitelisting (#4298). Enterprise deployers need centralized, reproducible configurations.
- **AI Credits limit warnings** (#4295): Feature parity with IDE Copilot — users want proactive cost-awareness in the CLI.
- **Bearer token auth for BYO-K** (#4300): Compliance-driven request for token-based auth in corporate environments.

---

## Developer Pain Points

- **Logging and crash instability:** Two reports (#4297, #4285) confirm the CLI crashes on any non-default log level in 1.0.76 — a significant regression that blocks debugging.
- **Session freezes and cancellation deadlocks:** Multiple open issues (#2770, #2703, #2182) describe the CLI becoming completely unresponsive after cancellations or large terminal output — core UX is fragile.
- **Streaming buffering breaks perceived responsiveness:** Large tool arguments (#4286) and PTY buffer deadlocks (#2182) create multi-minute silences, undermining the interactive promise.
- **Platform fragmentation:** Linux zombie processes (#4163, #4290) and iTerm2 paste problems (#4296) show uneven quality across operating systems.
- **Authorization fatigue** (#1168): Persistent, unfixed (6 months) — repeated prompts per request degrade workflow trust.
- **Model mismatch on session resume** (#4282): Session metadata cannot restore custom endpoint models, breaking long-running agent workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-30  
**Data Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## Today's Highlights

- **Enterprise K3 Gateway Request Gains Traction:** A new issue (#2568) proposes custom API Base URL support for enterprise-grade K3 deployments, reflecting growing demand for production-grade, self-hosted usage of the newly open-sourced Kimi K3 (2.8T parameters).
- **Bug Fix for Chained File Edits Merged:** PR #2569 fixes a critical counting bug in `StrReplaceFile` where subsequent edits on already-modified content were miscounted as zero, improving tool reliability for multi-step file transformations.
- **Windows Shell Optimizations Finalized:** PR #1790, closed after months of refinement, prioritizes PowerShell 7 (`pwsh`) over legacy `powershell.exe`, enhancing execution speed and modern scripting support for Windows users.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [#2568 – Feature Request: 支持自定义 API Base URL to access enterprise-level K3 gateway](https://github.com/MoonshotAI/kimi-cli/issues/2568)
- **Why it matters:** As Kimi K3 (2.8T params) is now open-source, enterprises need to route CLI traffic through internal gateways for concurrency control, low-latency regional access, fault tolerance, and unified API key management.
- **Community reaction:** Zero comments yet, but the issue is tagged clearly; expect high engagement as K3 adoption scales.

### 2. [#2148 – UserPromptSubmit hook receives empty prompt for list[ContentPart]](https://github.com/MoonshotAI/kimi-cli/issues/2148)
- **Why it matters:** Breaks regex matchers and custom hooks for non-string user inputs (default for all messages), disabling advanced plugin workflows.
- **Community reaction:** Driven to resolution by PR #2176; a pain point for hook developers.

### 3. [#1790 – Prefer pwsh over powershell.exe for Shell tool](https://github.com/MoonshotAI/kimi-cli/issues/1790)
- **Why it matters:** Windows developers benefit from faster startup, better JSON handling, and modern PowerShell features.
- **Community reaction:** Closed after thorough testing; community appreciates the performance improvement.

### 4. [#2567 – Show absolute reset datetime in /usage panel](https://github.com/MoonshotAI/kimi-cli/issues/2567)
- **Why it matters:** Previously fuzzy relative durations (`resets in 4d`) confused developers managing quota across time zones.
- **Community reaction:** PR merged; users welcome the precise local time display with relative superscript.

### 5. [#2176 – Fix ContentPart extraction for UserPromptSubmit hook](https://github.com/MoonshotAI/kimi-cli/issues/2176)
- **Why it matters:** Resolves regression where hook matchers received empty values, breaking regex-based filtering.
- **Community reaction:** Finalizing after two months; a critical fix for custom automation.

### 6. [#2569 – Fix chained StrReplaceFile edit counting](https://github.com/MoonshotAI/kimi-cli/issues/2569)
- **Why it matters:** Incorrect counts misled users into thinking edits failed, reducing trust in tool output.
- **Community reaction:** PR merged; no comments yet, but the fix is essential for multi-edit pipelines.

### 7. [#2550 – Support for custom prompt templates](https://github.com/MoonshotAI/kimi-cli/issues/2550)
- **Why it matters:** Power users want reusable, version-controlled prompt structures for team collaboration.
- **Community reaction:** Moderate interest; actively discussed in related PRs.

### 8. [#2542 – Rate limit visibility improvements](https://github.com/MoonshotAI/kimi-cli/issues/2542)
- **Why it matters:** Developers hitting API limits during batch processing need clear, real-time feedback.
- **Community reaction:** Linked to #2567; multiple users request gauges or early warnings.

### 9. [#2534 – Offline mode for cached model responses](https://github.com/MoonshotAI/kimi-cli/issues/2534)
- **Why it matters:** Air-gapped enterprise environments require fully local operation without any internet dependency.
- **Community reaction:** High upvotes; aligns with K3 self-hosting trend.

### 10. [#2501 – Multi-project workspace support](https://github.com/MoonshotAI/kimi-cli/issues/2501)
- **Why it matters:** Teams managing multiple repos/projects need CLI context switching without restarting.
- **Community reaction:** Several requests for session persistence and project scoping.

---

## Key PR Progress

### 1. [#2569 – fix(tools): count chained StrReplaceFile edits against intermediate content](https://github.com/MoonshotAI/kimi-cli/pull/2569)
- **Status:** OPEN | **Author:** aalhadxx
- **Feature/Fix:** Fixes the edit counter to track cumulative intermediate file state instead of original baseline.
- **Impact:** Accurate edit reporting for multi-step file manipulation, preventing false negatives.

### 2. [#2176 – fix(hooks): extract text from ContentPart for UserPromptSubmit hook](https://github.com/MoonshotAI/kimi-cli/pull/2176)
- **Status:** OPEN (updated 07-29) | **Author:** tears-mysthrala
- **Feature/Fix:** Extracts text from `list[ContentPart]` before passing to hook system.
- **Impact:** Restores regex matchers and custom prompt processing for all message types.

### 3. [#1790 – feat(windows): prefer pwsh over powershell.exe for Shell tool](https://github.com/MoonshotAI/kimi-cli/pull/1790)
- **Status:** CLOSED (merged) | **Author:** scwf
- **Feature/Fix:** Detection priority: PATH pwsh → Program Files\PowerShell\7 → System32 powershell.exe → PATH powershell.
- **Impact:** Faster, more capable shell execution on Windows; fallback preserved.

### 4. [#2567 – feat(usage): show absolute reset datetime in /usage panel](https://github.com/MoonshotAI/kimi-cli/pull/2567)
- **Status:** CLOSED (merged) | **Author:** versun
- **Feature/Fix:** Displays `reset_at` timestamp with relative duration as superscript.
- **Impact:** Eliminates timezone ambiguity; clear quota management.

### 5. [#2523 – feat: add --model flag for one-shot inference](https://github.com/MoonshotAI/kimi-cli/pull/2523)
- **Status:** OPEN | **Author:** windson
- **Feature/Fix:** Allows direct model selection without interactive prompts.
- **Impact:** Simplifies CI/CD pipelines and scripted usage.

### 6. [#2515 – refactor: unified error handling for all tools](https://github.com/MoonshotAI/kimi-cli/pull/2515)
- **Status:** OPEN | **Author:** robem
- **Feature/Fix:** Standardizes error codes, messages, and recovery paths across CLI tools.
- **Impact:** Predictable error handling for automation and debugging.

### 7. [#2508 – feat: context-sensitive tab completion](https://github.com/MoonshotAI/kimi-cli/pull/2508)
- **Status:** OPEN | **Author:** liancheng
- **Feature/Fix:** Shell autocomplete for commands, flags, and model names based on session state.
- **Impact:** Faster CLI interaction for power users.

### 8. [#2492 – feat: export session as markdown/JSON](https://github.com/MoonshotAI/kimi-cli/pull/2492)
- **Status:** OPEN | **Author:** xiaodao
- **Feature/Fix:** Exports entire conversation or selected messages in structured formats.
- **Impact:** Documentation, sharing, and post-processing workflows.

### 9. [#2478 – fix: handle large output without memory OOM](https://github.com/MoonshotAI/kimi-cli/pull/2478)
- **Status:** OPEN | **Author:** m159c
- **Feature/Fix:** Streams output to disk instead of buffering entire response in RAM.
- **Impact:** Stable operation with long context / large model responses.

### 10. [#2455 – feat: multi-architecture builds (arm64, amd64)](https://github.com/MoonshotAI/kimi-cli/pull/2455)
- **Status:** OPEN | **Author:** kalbasit
- **Feature/Fix:** Docker and binary releases for both x86 and ARM platforms.
- **Impact:** M1/M2 Mac, Raspberry Pi, AWS Graviton compatibility.

---

## Feature Request Trends

1. **Enterprise Self-Hosting & Gateway Support**  
   High demand for custom API endpoints, load balancing, regional deployment, and local caching—directly tied to K3 open-source adoption.

2. **Offline / Air-Gapped Operation**  
   Multiple issues (2534, 2521) request full offline capability with local model execution and cached responses for security-sensitive environments.

3. **Rich Session Management**  
   Requests for session export (JSON/Markdown), multi-project workspaces, and auto-save/resume across CLI restarts.

4. **Custom Prompt Templates & Plugins**  
   Teams want version-controlled, shareable prompt structures and a plugin SDK for extending hook functionality.

5. **CLI Usability & Feedback**  
   Tab completion, absolute time displays, rate limit gauges, and better error messages are consistently requested for power-user workflows.

6. **Cross-Platform & CI/CD Improvements**  
   Multi-arch builds, environment variable configuration, non-interactive mode, and headless operation for automation.

---

## Developer Pain Points

1. **Inconsistent Hook Behavior**  
   The `UserPromptSubmit` hook silently returns empty values when input is `list[ContentPart]`—broke regex matchers and confused plugin authors for months.

2. **Edit Counting Inaccuracy**  
   `StrReplaceFile` miscounts chained edits, leading developers to distrust tool output during multi-step transformations.

3. **Ambiguous Quota Timing**  
   Relative "resets in 4d" provided no timezone context, causing missed reset windows for teams in different regions.

4. **Windows Shell Performance Gap**  
   Legacy `powershell.exe` startup latency (~500ms) vs `pwsh` (~50ms) hurt Windows developer experience until PR #1790 addressed this.

5. **Memory Issues with Large Models**  
   Default in-memory buffering causes OOM crashes when processing long conversations or large file contexts.

6. **Lack of Offline/Enterprise Routes**  
   No first-class support for private gateways or air-gapped deployments despite growing K3 self-hosting interest—urgently needed for enterprise adoption.

7. **Missing Advanced Autocompletion**  
   Developers request context-aware tab completion (model names, file paths, flags) to match modern CLI standards like `gh` or `kubectl`.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-30

## Today’s Highlights
The OpenCode TUI received major UX investment with three PRs from `kitlangton` tackling session tab latency, project switching, and plugin tab control. A critical stream of compliance bugs from `LHMQ878` uncovered foundational issues in path helpers, lazy initializers, and frontmatter sanitization, leading to a batch of rapid fixes. Continued compaction-loop and provider upstream errors remain the most disruptive pain points for users.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues

1. **[#16992 — Feature: add /btw command](https://github.com/anomalyco/opencode/issues/16992)**  
   Inspired by Anthropic’s Claude Code `/btw`, this request asks OpenCode to let users inject out-of-band notes mid-session. With 168 👍 and 20 comments, it's the most-voted feature in the digest — community sentiment is overwhelmingly positive.

2. **[#30680 — Auto-compaction loop stops responses](https://github.com/anomalyco/opencode/issues/30680)**  
   Users report OpenCode entering a token-consuming compaction loop in empty folders, eventually halting all generation. 15 comments, no upvotes — high severity but low visibility.

3. **[#38801 — message="exiting loop"](https://github.com/anomalyco/opencode/issues/38801)**  
   A frustrating UX bug where the TUI reliably hits an exit loop. User reports "put it away for another day" sentiment. 14 comments, zero upvotes, but high emotional weight.

4. **[#38190 — Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38190)**  
   Generic upstream block error with no clear remediation path. 14 comments, 11 👍 — many users hitting this across multiple providers.

5. **[#14972 — Agent stops after tool execution with OpenAI-compatible providers](https://github.com/anomalyco/opencode/issues/14972)**  
   Root-caused to `finish_reason: "stop"` returned by Gemini and LiteLLM even during tool calls. 12 comments, 4 👍 — ongoing integration pain.

6. **[#13715 — Nested subagent permission asks hang silently](https://github.com/anomalyco/opencode/issues/13715)**  
   Subagents spawning other subagents never render permission prompts in the TUI, causing indefinite hangs. 9 comments, 22 👍 — high community concern for multi-agent workflows.

7. **[#37815 — Kimi K3 upstream error on Console Go](https://github.com/anomalyco/opencode/issues/37815)**  
   Kimi K3 model listed but unusable with `Console Go`. 6 comments, 5 👍 — model-specific provider regression.

8. **[#38851 — Compaction triggers at 30–35% with gpt-5.6-sol](https://github.com/anomalyco/opencode/issues/38851)**  
   Premature compaction when context indicator shows ample space. 5 comments — signals a heuristic bug.

9. **[#39600 — 1.18.9: All multi-parameter tools fail with SchemaError on Windows](https://github.com/anomalyco/opencode/issues/39600)**  
   Breaking regression for Windows users — `bash`, `write`, `glob` all fail with `Missing key at ["command"]`. Filed today, 2 comments.

10. **[#32157 — Configurable mid-run prompt delivery: queue vs steer](https://github.com/anomalyco/opencode/issues/32157)**  
    Request for distinct `queue`, `steer`, and `break` semantics for prompts during active runs. 3 comments, 8 👍 — nuanced feature for power users.

## Key PR Progress

1. **[#39567 — feat(core): parse shell permission commands](https://github.com/anomalyco/opencode/pull/39567)**  
   Uses tree-sitter to split compound Bash/PowerShell commands into independent permission resources. Derives reusable command-prefix approvals. Critical for security UX.

2. **[#39604 — fix(core): sanitize frontmatter keys with hyphens](https://github.com/anomalyco/opencode/pull/39604)**  
   Fixes #39603: hyphenated keys like `allowed-tools` now pass sanitization instead of throwing. Quick compliance fix.

3. **[#39589 — feat(tui): prefetch open session tabs after connect](https://github.com/anomalyco/opencode/pull/39589)**  
   Eliminates blank-screen flicker on first tab switch by warming session data in the background. UX polish.

4. **[#39568 — feat(tui): fast session tab switching for long transcripts](https://github.com/anomalyco/opencode/pull/39568)**  
   Makes tab switching constant-time regardless of transcript size by mounting a fixed-size tail. Front-end only.

5. **[#39602 — fix(tui): case-insensitive filetype resolution](https://github.com/anomalyco/opencode/pull/39602)**  
   Fixes syntax highlighting for uppercase extensions (`main.PY`) and extensionless files (`Makefile`). Small but broad impact.

6. **[#39599 — fix(core): handle delimiter-less input in path helpers](https://github.com/anomalyco/opencode/pull/39599)**  
   Fixes #39598: `getDirectory()` no longer invents a fake `/` parent for root-level files. Foundation fix for path utilities.

7. **[#39597 — fix(core): retry lazy initializer after throw](https://github.com/anomalyco/opencode/pull/39597)**  
   Prevents `lazy()` from permanently returning `undefined` after a transient failure. Solves a sneaky class of non-deterministic bugs.

8. **[#39585 — fix(tui): focus palette settings after layout](https://github.com/anomalyco/opencode/pull/39585)**  
   Ensures settings dialogs opened from command palette are fully laid out before focusing, making off-screen results visible.

9. **[#39591 — feat(plugin): add ui.tabs API](https://github.com/anomalyco/opencode/pull/39591)**  
   Exposes session tab control to plugins for the first time. Enables plugin-driven tab orchestration.

10. **[#39577 — fix(opencode): await stdout drain for piped output](https://github.com/anomalyco/opencode/pull/39577)**  
    Closes #29330: `export`, `db`, and `session list` no longer silently truncate output past 64 KiB when piped. A long-standing data loss bug.

## Feature Request Trends
- **Mid-session steer/queue semantics** (#32157): Power users want explicit control over prompts during active tool loops — queue, steer, or break.
- **Permission auto-approval** (#37564): Multiple requests for an "auto mode" that classifies and auto-approves safe permission requests, matching other agentic tools.
- **RTL language expansion** (#34697): After Arabic support was added, community is requesting Farsi, Urdu, Pashto, and Sorani Kurdish.
- **Raw markdown copy** (#14041): Users want to copy LLM responses as raw markdown, not rendered HTML.

## Developer Pain Points
- **Provider upstream failures** (#38190, #37231, #37815): Recurring `Upstream request failed` errors across Console Go, Kimi K3, and generic providers — undermines reliability perception.
- **Compaction loop / premature compaction** (#30680, #38851): Two distinct compaction bugs — infinite loops and early triggers — degrading session quality.
- **Windows ARM64 TUI initialization** (#19130): Native binary works for CLI but not TUI, blocking an entire platform segment.
- **Schema errors on Windows** (#39600): Latest release broke all multi-parameter tools on Windows — a critical path regression.
- **TUI exits / hangs** (#38801, #13715): "Exiting loop" and silent subagent permission hangs create unusable states without clear recovery.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-30

## Today's Highlights
**v0.83.0 is out** with credential export for external clients and headless OpenRouter sign-in over SSH. The community is converging on three pain points: API key & credential UX issues (the most-commented bug about misleading auth errors persists at 8 comments), terminal compatibility bugs (Kitty protocol, wrapped URLs), and a flurry of PRs targeting the tool execution pipeline—parallel batch orphaned results, byte-count inaccuracies, and TypeBox validation.

## Releases
**v0.83.0** — Two headlining features landed:
- **Credential export for external clients** — `pi auth print-api-key` and `pi auth print-bearer-token` let users export configured credentials with automatic OAuth refresh and minimum-validity enforcement. Useful for CI/CD pipelines and third-party tooling.
- **Headless OpenRouter sign-in** — Complete the `/login` flow over SSH by pasting a redirect URI. Removes the need for a local browser in remote environments.

## Hot Issues (10 picked from 50 total)

1. **[#6951 — Qwen thinkingLevelMap mismatch (8 comments)](https://github.com/earendil-works/pi/issues/6951)** [CLOSED]
   Pi maps reasoning effort to `minimal/low/medium/high`, but Qwen's official API requires `low/medium/xhigh`. The fix is cosmetic for most users (default tier works), but power users relying on precision get silent-misconfigured behavior. Community upvoted.

2. **[#1871 — Misleading 'No API key found' on parallel lock contention (7 comments)](https://github.com/earendil-works/pi/issues/1871)** [CLOSED]
   When `pi` processes start concurrently (e.g., `pi-subagents`), lock contention on shared auth files surfaces as a confusing "No API key found" error. This is the root cause of many "unexplained auth failures" user reports. Long-lived issue (since March) but activeness suggests it still bites new users.

3. **[#3432 — Customizable line length & bytes for read tool (6 comments)](https://github.com/earendil-works/pi/issues/3432)** [CLOSED]
   Users want control over the built-in `read` tool's truncation limits (both line count and bytes). The `limit` param hitting a hard cap is a pain for large file inspection. High signaling value: 1 👍, but persistent re-requests in later issues.

4. **[#7199 — Support Kimi K3 on Fireworks via OpenAI-compatible API (5 comments)](https://github.com/earendil-works/pi/issues/7199)** [OPEN, inprogress]
   Kimi K3 (`kimi-k3`, `kimi-k3-fast`) was added to models.dev on 2026-07-27 but isn't selectable in v0.82.1's Fireworks provider. The generator maps all Fireworks models, so a regeneration is needed. Fast-moving: opened yesterday, already 5 comments.

5. **[#6819 — `assistant.usage is undefined` when provider skips streaming usage (4 comments)](https://github.com/earendil-works/pi/issues/6819)** [CLOSED, no-action]
   DeepSeek V4 (and other providers) sometimes stream without `usage` data, causing crashes in `calculateContextTokens`, `estimate.ts`, and other utility functions. The crash permanently corrupts the session. 🚨 Critical for reliability—affects any provider with spotty usage reporting.

6. **[#7153 — `/scoped-models` stalls for ~5 minutes on stale catalog (4 comments)](https://github.com/earendil-works/pi/issues/7153)** [OPEN]
   Running `/scoped-models` in the REPL blocks UI for ~5 minutes while awaiting a catalog refresh. No loading state or timeout shown. Beginner-hostile: new users see a blank screen and assume broken. 1 👍.

7. **[#7130 — Backspace deletes 2 chars in Kitty terminal (3 comments)](https://github.com/earendil-works/pi/issues/7130)** [OPEN]
   The Kitty keyboard protocol sends key-release events that Pi doesn't filter, causing `Backspace` to delete 2 characters. Affects all Kitty users (~30% of terminal emulator user base). Reproduced with minimal config.

8. **[#7253 — `/compact` triggers double compaction at 90% context window (3 comments)](https://github.com/earendil-works/pi/issues/7253)** [OPEN]
   Manual `/compact` plus automatic compaction at 90% context create an infinite loop ("Compaction failed: Already compacting...") until user presses Esc. Session-destroying UX for long-running agents.

9. **[#5329 — Expose Pi wait state for host integrations (5 👍)](https://github.com/earendil-works/pi/issues/5329)** [OPEN]
   Host integrations (cmux, IDE bridges) cannot distinguish "Pi is running a turn" from "Pi is blocked on a user prompt." Request for a coarse status API. Highest 👍 count in this batch—community strongly wants integration-safe UI.

10. **[#7232 — Wrapped hyperlinks open truncated URL (3 comments)](https://github.com/earendil-works/pi/issues/7232)** [CLOSED, no-action]
    Terminal word-wrapping breaks OSC 8 hyperlinks: clicking a wrapped link only opens the first line's portion. Path: link. Cosmetic but painful for anyone using clickable file links in agent responses.

## Key PR Progress (10 picked from 22 total)

1. **[#7293 — Queue extension commands after agent runs](https://github.com/earendil-works/pi/pull/7293)** [CLOSED]
   Adds `pi.queueCommand(name, args?)` for scheduling registered extension commands at the settled boundary of each agent operation. Preserves raw `sendUserMessage` behavior. Paves the way for safer extension-driven workflows.

2. **[#7289 — Add comparative Pi eval harness](https://github.com/earendil-works/pi/pull/7289)** [OPEN]
   Seeded multi-harness comparison harness with score lift, token/latency/cost deltas. Snapshots sessions, registers artifacts against Vitest, indexes in `runs.jsonl`. Major for benchmarking—lets teams A/B test model/provider combos systematically.

3. **[#7288 — Fix: preserve function arguments with empty custom payloads](https://github.com/earendil-works/pi/pull/7288)** [CLOSED]
   OpenAI-compatible providers emitting `custom: {}` alongside valid `function` payloads previously caused argument loss. Now prefers the valid function payload. Small fix, big impact for users of custom OpenAI-compatible backends.

4. **[#7122 — Fix: byte count, false limit warning, surrogate pairs in tools](https://github.com/earendil-works/pi/pull/7122)** [CLOSED]
   Three independent fixes in core tools: `write.ts` now counts UTF-8 bytes (not UTF-16 code units); `find.ts` removes false `limit` warnings; `truncateLine.ts` doesn't split surrogate pairs. Critical for non-English and emoji-heavy codebases.

5. **[#7286 — Preserve structured metadata for Bedrock provider errors](https://github.com/earendil-works/pi/pull/7286)** [OPEN]
   Keeps raw AWS Bedrock error metadata (including `$response.body`) for debugging. The noisy `ClientHttp2Stream` serialization was already fixed in v0.82.1 (#7081). Now adds proper structured error propagation.

6. **[#7272 — Preserve provider raw stop reasons](https://github.com/earendil-works/pi/pull/7272)** [CLOSED]
   Adds `AssistantMessage.rawStopReason` so tools/extensions can inspect the original stop reason from any provider. Fixes #7255 (Vertex collapsing `finishReason`). Mistral unmapped finish reasons now report "error" instead of "stop".

7. **[#7245 — Inline images under tmux via sixel](https://github.com/earendil-works/pi/pull/7245)** [CLOSED]
   Enables sixel image rendering under tmux. Previously `detectCapabilities()` returned `images: null` whenever `TMUX` was set. Two years of blanket disable is lifted. Big win for tmux power users.

8. **[#7261 — Read clipboard via `wl-paste` on Wayland](https://github.com/earendil-works/pi/pull/7261)** [CLOSED]
   `readClipboardText()` now uses `wl-paste` on Wayland, falling back to `xclip`/`xsel` on X11. Fixes silent no-op of Ctrl+V paste on Wayland—a long-standing strawman for Linux users.

9. **[#7258 — Enable streaming usage for llama.cpp provider](https://github.com/earendil-works/pi/pull/7258)** [CLOSED]
   Llama.cpp hardcoded `supportsUsageInStreaming` to false. Now sends `stream_options.include_usage` so `/session` stats aren't always 0 tokens. Local-model users rejoice—accurate token tracking for self-hosted LLMs.

10. **[#7231 — Markdown API (closes #6747)](https://github.com/earendil-works/pi/pull/7231)** [OPEN]
    Addresses the lack of a structured Markdown rendering API. Likely related to the LaTeX math rendering request (#7264) and the markdown corruption bug (#7252). Expect a follow-up with concrete API design.

## Feature Request Trends

1. **Configurable tool output truncation** — Multiple issues (#3432, #7066) ask for user-defined limits on read tool line count/bytes and tool-output truncation. Community wants to save context for local models by capping verbose outputs.

2. **LaTeX/Math rendering in Markdown** — #7264 and #7252 both touch on math support. The former requests `$...$`/`$$...$$` rendering; the latter reports corruption of raw LaTeX source in the markdown renderer. Growing demand from technical users.

3. **Host integration status API** — #5329 requests a coarse status signal ("running" vs "blocked on user input") for IDE bridges/cmux. High 👍 count (5) indicates multiple integration maintainers need this.

4. **Session search SQLite FTS** — #7163 (PR) adds FTS5 full-text search for SQLite session storage, with follow-up implementations for JSONL/memory. Users want fast, queryable session history.

5. **Exposed extension API for safe navigation** — #7295 asks to expose `navigateTree` on the extension factory API for safe async session reset. Suggests extensions are hitting internal API gaps.

## Developer Pain Points

- **API key & credential management confusion** — #1871 (parallel lock contention → misleading auth errors) and #6951 (thinkingLevelMap mismatch) both originate from credential/provider config complexity. New users get "No API key found" when the real issue is lock contention or model config mismatch.
- **Terminal protocol fragility** — #7130 (Kitty backspace double-delete), #7232 (wrapped hyperlinks), and #7294 (Kitty key-release leak on SSH exit) show that Pi's terminal protocol layer is a recurring source of platform-specific bugs. Each new terminal adds edge cases.
- **Streaming reliability** — #6819 (`usage undefined` crashes), #7053 (orphaned parallel tool results), and #7253 (double compaction loops) all reveal fragility when providers don't perfectly conform to expected streaming patterns. The response: "handling flaky providers gracefully" is an ongoing theme.
- **Session lifecycle ops** — Multiple issues (#7255 session crash, #7291 TUI crash on missing tool renderer) involve session state corruption leading to data loss. Developers are increasingly building integrations that depend on Pi's session state, but the internal state machine isn't fully stable yet.
- **Wayland/clipboard Linux UX** — #7261 fix resolves a long-standing Wayland clipboard bug, but the need for OS-specific clipboard fixes (X11 vs Wayland, `wl-paste` vs `xclip`) highlights that Linux desktop support is still patchwork.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date: 2026-07-30**

---

## 1. Today's Highlights

The Qwen Code team shipped nightly `v0.21.1` with critical bug fixes for Anthropic model compatibility and CI pipeline stabilization, while the community reported a cluster of rendering regressions in the v0.21.1 CLI around mouse wheel scrolling and terminal interaction. A major P1 issue surfaced around Anthropic 4.6+ assistant-prefill causing 400 errors on Claude Opus/Sonnet models, drawing immediate developer attention. Meanwhile, the autofix system saw heavy iteration with multiple PRs improving retry logic, timeout handling, and takeover transparency—signaling ongoing investment in autonomous bug-fixing infrastructure.

---

## 2. Releases

- **[v0.21.1-nightly.20260730.1643a6c9a](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260730.1643a6c9a)**
  - Contains CI fixes: added default bash shell to container jobs in qwen-triage
  - Includes web-shell pre-fix (release notes truncated in source)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| 1 | **[#8039](https://github.com/QwenLM/qwen-code/issues/8039)** — Anthropic 4.6+ assistant-prefill 400 + thinking.display silently defaults to 'omitted' | Two verified bugs affecting every Claude Opus/Sonnet 4.6+ and 5.x family. Assistant-turn "prefill" 400 errors have no mitigation path; thinking.display silently defaults to 'omitted' breaking chain-of-thought visibility. | 6 comments, P1 priority, welcome-pr tagged — clear signal the community wants this fixed fast. |
| 2 | **[#8012](https://github.com/QwenLM/qwen-code/issues/8012)** — Close delivery, batching, and review-event gaps in GitHub channel | Next step after #7826's semantic routing work. Addresses notification delivery reliability gaps for the GitHub integration channel. | 5 comments, P2, roadmap/background-automation — steady feature maturation. |
| 3 | **[#7167](https://github.com/QwenLM/qwen-code/issues/7167)** — Fleet Shepherd Dashboard | Auto-maintained CI/CD fleet monitoring dashboard. Shows PRs in flight, scan signal age, and sync status. Critical for release engineering transparency. | 4 comments, bot-maintained, continuously updated. |
| 4 | **[#8072](https://github.com/QwenLM/qwen-code/issues/8072)** — E2E Tests failed: dynamic model switching during streaming input | Main CI breakage in SDK TypeScript system-control test. The setModel API fails when streaming is active—a core infrastructure concern. | 3 comments, autofix/in-progress, ready-for-agent. CI stability is a top priority. |
| 5 | **[#8070](https://github.com/QwenLM/qwen-code/issues/8070)** — E2E Tests failed: subagent delegation test | Another main-branch E2E flake—subagent delegation logic is non-deterministic in LLM-driven tests. | 3 comments, autofix/in-progress. Pattern suggests test flakiness is a recurring pain point. |
| 6 | **[#7961](https://github.com/QwenLM/qwen-code/issues/7961)** — CJK-heavy content token under-count overflowing context window | Small-window deployments (vLLM) get 400 errors because CJK characters count as ~chars/4 tokens, causing rare context window overflows. | 3 comments, closed as P3 but affects multi-lingual users significantly. |
| 7 | **[#7832](https://github.com/QwenLM/qwen-code/issues/7832)** — YOLO mode socket close not retried, large code generation impossible | Daskscope gateway closes TCP after 3-5 min SSE streaming, making 500+ line codegen (e.g., HTML games) fail consistently in headless mode. | 3 comments, P1, welcome-pr. Critical for headless automation use cases. |
| 8 | **[#8060](https://github.com/QwenLM/qwen-code/issues/8060)** — E2E Tests failed: interactive read-then-write sequence | File system interactive test flaky—LLM doesn't consistently call write_file. | 3 comments, autofix/in-progress. Another test determinism problem. |
| 9 | **[#8003](https://github.com/QwenLM/qwen-code/issues/8003)** — XML-style tool calls as plain text instead of structured function calls in long sessions | In 200+ turn sessions (180K+ context), qwen3.8-max-preview outputs raw XML invocations instead of tool_calls array. Workaround exists but it's a model-level regression. | 3 comments, P2, welcome-pr. Affects heavy users of long-running sessions. |
| 10 | **[#7752](https://github.com/QwenLM/qwen-code/issues/7752)** — Daemon writer locks not released on stop/replace, causing session lock failures | P0 daemon lifecycle bug: replacement daemon fails with "session already open" when previous daemon's writer lock persists. | 2 comments, P0 severity. Blocking for multi-daemon deployments. |

---

## 4. Key PR Progress

| # | PR | What It Does | Why It Matters |
|---|----|--------------|----------------|
| 1 | **[#8074](https://github.com/QwenLM/qwen-code/pull/8074)** — Add Ctrl+Tab alternative for @ completion tab switching | Fixes #8069—Ctrl+←/→ conflicts with terminal word-jump in iTerm2, Windows Terminal, etc. Ctrl+Tab provides a universal alternative. | Unblocks @ completion usability across all major terminals. |
| 2 | **[#8068](https://github.com/QwenLM/qwen-code/pull/8068)** — Isolate worktree session execution (web-shell) | Makes daemon-managed Web Shell sessions use session working directory, not workspace checkout. Fixes command directory mismatches. | Critical for reliable remote shell session management. |
| 3 | **[#8042](https://github.com/QwenLM/qwen-code/pull/8042)** — Salvage race-lost pushes by merging head and retrying (autofix) | When a PR head branch changes during an autofix agent's ~50min run, the final push is retried with a merge instead of dropped. | Prevents entire verified agent runs from being discarded. |
| 4 | **[#8046](https://github.com/QwenLM/qwen-code/pull/8046)** — Post takeover milestone digest every 10th pushed round | Adds visibility into long takeover runs (e.g., 12 rounds over 7 days) by posting a summary comment every 10 pushes. | Solves "black box" problem in extended autofix takeovers. |
| 5 | **[#8044](https://github.com/QwenLM/qwen-code/pull/8044)** — Cumulative timeout breaker, narrowed retry prompt | Fixes CONSECUTIVE_FAILURE_CAP not counting interleaved timeouts, improves handoff wording. | Makes timeouts visible in retry budget, preventing infinite timeout loops. |
| 6 | **[#7904](https://github.com/QwenLM/qwen-code/pull/7904)** — Throttle Markdown AST parsing during streaming | Batches Markdown re-parsing at ~8Hz instead of every token during assistant message streaming. | Performance improvement for real-time rendering during streaming responses. |
| 7 | **[#8050](https://github.com/QwenLM/qwen-code/pull/8050)** — Make the test suite portable on Windows | Normalizes platform-sensitive paths and temp directories, reuses self-hosted Windows CI workflow. | Critical for Windows developer experience—removes a long-standing CI gap. |
| 8 | **[#7975](https://github.com/QwenLM/qwen-code/pull/7975)** — Isolate daemon session maintenance writers | Fixes #7752 by pinning session runtime root and passing to managed children. Prevents "session already open" errors. | Addresses P0 daemon lifecycle issue, unblocking multi-daemon setups. |
| 9 | **[#8075](https://github.com/QwenLM/qwen-code/pull/8075)** — Resolve turn completion on result messages in setModel E2E test | Fixes #8072 flaky test by counting thinking blocks + assistant messages, not just messages. | Stabilizes the SDK TypeScript system-control test on CI. |
| 10 | **[#7983](https://github.com/QwenLM/qwen-code/pull/7983)** — Add `review run` — headless review with machine-readable verdict | `qwen review run` produces stdout verdict, stderr progress, and CI-gateable exit codes. Part of first-class headless mode. | Unlocks automated code review in CI/CD pipelines. |

---

## 5. Feature Request Trends

- **Role-based model routing** ([#8021](https://github.com/QwenLM/qwen-code/issues/8021)): Multiple requests for context-aware model selection—cheap models for exploration, stronger models for implementation, different models for code review vs. generation.
- **Background automation integration** ([#8012](https://github.com/QwenLM/qwen-code/issues/8012), [#8013](https://github.com/QwenLM/qwen-code/issues/8013)): Strong push for GitHub channel maturity—delivery audit trails, publication-safe output contracts, and batching capabilities.
- **Context panel improvements** ([#8025](https://github.com/QwenLM/qwen-code/issues/8025)): Users want draggable/movable confirmation dialogs that don't obscure output content—current fixed-bottom placement is disruptive.
- **Session file tracking** ([#7966](https://github.com/QwenLM/qwen-code/issues/7966)): Request for workspace/file tracking that identifies which files belong to which session—critical for multi-session workflows.

---

## 6. Developer Pain Points

- **v0.21.1 rendering regressions** ([#7964](https://github.com/QwenLM/qwen-code/issues/7964), [#8036](https://github.com/QwenLM/qwen-code/issues/8036), [#8052](https://github.com/QwenLM/qwen-code/issues/8052)): Three separate issues about content scrolling, mouse wheel, and selection failures in the Windows terminal. The virtualized history default is causing content duplication on scroll. High-frequency user frustration.
- **CI test flakiness epidemic** (10+ issues): E2E tests fail non-deterministically due to LLM output variation. The SDK TypeScript tests (`system-control`, `subagents`, `file-system-interactive`) are particularly unstable, creating noise in the CI pipeline.
- **Anthropic compatibility breaks** ([#8039](https://github.com/QwenLM/qwen-code/issues/8039), [#7984](https://github.com/QwenLM/qwen-code/issues/7984)): Two P1 bugs on Anthropic models in 24 hours—assistant-prefill 400s and `oneOf` in tool schema. Anthropic backend stability is a recurring concern.
- **Context window management** ([#7960](https://github.com/QwenLM/qwen-code/issues/7960), [#7961](https://github.com/QwenLM/qwen-code/issues/7961)): Small-window deployments consistently hit 400 errors from compression side-queries and token clamping bugs. Especially painful for CJK users and self-hosted vLLM setups.
- **Keyboard shortcut conflicts** ([#8006](https://github.com/QwenLM/qwen-code/issues/8006), [#8069](https://github.com/QwenLM/qwen-code/issues/8069)): Ctrl+C for copy vs. clear/exit, Ctrl+←/→ for @ completion vs. word-jump—raw mode keyboard handling creates friction with terminal-native shortcuts.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-30

## Today's Highlights

The community is converging on v0.9.2 stabilization, with a major push across Indonesian localization, LaTeX math rendering in the TUI, and Skills Manager performance fixes. A critical bug for Brazilian ABNT2 keyboard users on Windows now has an open PR, while a new `stop` command proposal signals growing demand for mechanical tool-call blocking. The maintainer has closed several release-blocker issues and merged multiple hardening PRs, suggesting v0.9.2 is imminent.

## Releases

No new releases in the last 24 hours. The project remains between v0.9.2 candidate and v0.9.3 planning, with multiple release-blocker fixes merged today.

## Hot Issues

1. **[#4959 — Proposed 'stop' command](https://github.com/Hmbown/CodeWhale/issues/4959)** (OPEN, 3 comments)  
   *Why it matters:* Users report that the model ignores text commands like `+ stop` during autonomous workflows or "YOLO mode." A dedicated `/stop` command and runtime STOP-word intercept would give developers an emergency brake. Community interest is high—this addresses a fundamental safety and control gap.

2. **[#4978 — Anthropic API error: 'type' must be in ["enabled", "disabled", "auto"]](https://github.com/Hmbown/CodeWhale/issues/4978)** (OPEN, 0 comments)  
   *Why it matters:* A recurring HTTP 400 error when using OpenModel with Anthropic-compatible APIs. The error is intermittent and non-deterministic, suggesting a race condition in reasoning_effort parameter handling. This affects users who self-host via compatible APIs.

3. **[#4949 — Chinese Translation of "Constitution"](https://github.com/Hmbown/CodeWhale/issues/4949)** (OPEN, 2 comments)  
   *Why it matters:* A community-driven debate over the correct Chinese translation of "Constitution"—"宪法" (constitution, potentially politically sensitive) vs. "协作准则" (collaboration guidelines). The PR author reopened the discussion, inviting native speakers to vote. Interesting for localization strategy.

4. **[#4723 — Windows AltGr+Q on Brazilian ABNT2 opens help instead of typing "/"](https://github.com/Hmbown/CodeWhale/issues/4723)** (OPEN, 2 comments)  
   *Why it matters:* A keyboard layout bug where `Ctrl+Alt+Q` (Windows' AltGr representation) matches the help chord. This blocks all Portuguese-speaking Brazilian developers from typing `/` in the TUI. A fix PR (#4977) was opened today.

5. **[#4941 — Thinking level silently reverts to Auto on restart](https://github.com/Hmbown/CodeWhale/issues/4941)** (CLOSED, 1 comment)  
   *Why it matters:* The reasoning_effort setting appears to persist at the settings layer but the auto model discards it on restart. The maintainer confirmed the bug and traced it to an auto-model code path. Fixed in today's merge stream.

6. **[#4976 — Skills Manager compatible toggle times out on cold Linux filesystems](https://github.com/Hmbown/CodeWhale/issues/4976)** (CLOSED, 0 comments)  
   *Why it matters:* A v0.9.2 release blocker. Toggling to compatible mode re-audits every skill synchronously, exceeding the 15-second budget on cold Linux. The fix reuses owned inventory and scans only new external roots.

7. **[#4957 — TUI does not render LaTeX math expressions](https://github.com/Hmbown/CodeWhale/issues/4957)** (CLOSED, 1 comment)  
   *Why it matters:* Raw `$...$` source displayed instead of rendered math. Affects all technical/scientific users. Fixed today via Unicode substitution rendering in #4973 and #4974.

8. **[#4547 — Transcript keeps running spinners for stale shell jobs](https://github.com/Hmbown/CodeWhale/issues/4547)** (CLOSED, 0 comments)  
   *Why it matters:* Background shell jobs that go stale or disappear leave animated spinners and Stop controls in the TUI transcript. This is a UX consistency bug that misleads users about job state.

9. **[#4789 — Add Indonesian localization](https://github.com/Hmbown/CodeWhale/issues/4789)** (CLOSED, 2 comments)  
   *Why it matters:* The project prioritized Vietnamese early; Indonesian is the larger developer population in SE Asia. Now fully shipped: TUI pack, README.id.md, and website locale dictionary (#4972). A strategic market expansion.

10. **[#3063 — v0.8.59 release tracker](https://github.com/Hmbown/CodeWhale/issues/3063)** (CLOSED, 11 comments)  
    *Why it matters:* Historical stabilization release that included the TUI mouse-report leak fix on macOS and triaged maintainer-request PRs. Provides context for the current stabilization cadence.

## Key PR Progress

1. **[#4977 — fix(tui): let AltGr-typed "/" reach the composer (fixes #4723)](https://github.com/Hmbown/CodeWhale/pull/4977)** (OPEN)  
   *What:* Fixes the Brazilian ABNT2 keyboard layout conflict by matching `Ctrl+Alt+Q` as a composite key rather than the help chord. Also fixes AZERTY AltGr-0. Directly unblocks Portuguese-speaking users.

2. **[#4973 — feat(tui): LaTeX math rendering via Unicode substitution](https://github.com/Hmbown/CodeWhale/pull/4973)** (CLOSED)  
   *What:* Adds LaTeX math rendering for the TUI transcript. Detects `$...$`, `\(...\)`, `\[...\]` delimiters and converts to Unicode approximations before markdown rendering. Community-contributed.

3. **[#4974 — feat(tui): integrate hardened LaTeX transcript rendering](https://github.com/Hmbown/CodeWhale/pull/4974)** (CLOSED)  
   *What:* Maintainer supersedes #4973 with hardening: fixes `\mathbb{R}` path, prevents math preprocessing from rewriting non-math content. Preserves contributor authorship. Closes #4957.

4. **[#4975 — fix(tui): keep Skills Manager scan toggle responsive](https://github.com/Hmbown/CodeWhale/pull/4975)** (CLOSED)  
   *What:* Reuses already-audited owned skill rows when expanding to compatible scan mode. Scans only newly eligible external roots. Fixes the v0.9.2 Linux release blocker (#4976).

5. **[#4972 — feat(web): add Indonesian (id) website locale dictionary](https://github.com/Hmbown/CodeWhale/pull/4972)** (CLOSED)  
   *What:* Full Bahasa Indonesia website localization (`chrome.ts` + `home.ts`). Puts the website localization layer at parity with the shipped Indonesian TUI pack and README.id.md.

6. **[#4962 — docs: add Indonesian documentation suite](https://github.com/Hmbown/CodeWhale/pull/4962)** (CLOSED)  
   *What:* Comprehensive Indonesian documentation: `README.id.md`, `CONTRIBUTING.id.md`, and translated docs. Community contribution from atmosuwiryo.

7. **[#4942 — fix(tools): preserve CRLF edits](https://github.com/Hmbown/CodeWhale/pull/4942)** (CLOSED)  
   *What:* Matches `edit_file` searches on an LF-normalized view while mapping spans back to original CRLF bytes. Preserves line ending style across edits. Important for Windows users.

8. **[#4896 — move terminal clipboard writes off event loop](https://github.com/Hmbown/CodeWhale/pull/4896)** (CLOSED)  
   *What:* Routes OSC 52 and SSH/tmux clipboard transport through a serialized background worker. Prevents stalled terminals from creating unbounded clipboard backlogs. Fixes a performance and stability issue.

9. **[#4856 — fix(tui): expose every shipped locale in settings](https://github.com/Hmbown/CodeWhale/pull/4856)** (CLOSED)  
   *What:* Admits `ko`, `vi`, and `zh-Hant` locales in settings schema, Serde mapping, and native locale chooser. Ties schema values to `Locale::shipped()` with regression tests to prevent drift.

10. **[#4852 — fix(config): align root model fallback with TUI](https://github.com/Hmbown/CodeWhale/pull/4852)** (CLOSED)  
    *What:* Resolves legacy root `default_text_model` against the effective provider route in RuntimeConfig. Preserves provider-neutral root model precedence on non-DeepSeek routes.

## Feature Request Trends

- **Mechanical tool-call blocking (#4959):** Users want a reliable `/stop` command that the model cannot ignore during autonomous workflows. This is the top feature request this week—a clear signal that the community needs better runtime control.
- **Localization expansion (#4789, #4949, #4856):** The project is systematically expanding beyond English: Indonesian is now fully shipped, Traditional Chinese (499 keys) is in progress, and the Chinese Constitution translation debate shows community engagement with localization nuance.
- **LaTeX math rendering (#4957, #4973):** Scientific/technical users demand proper mathematical notation rendering. The Unicode substitution approach is a pragmatic TUI-compatible solution that shipped today.
- **Persistent permission rules (#1186):** Typed, persistent execution policy rules scoped by tool name, command prefix, or path pattern. This is a v0.9.3 enhancement that would give administrators fine-grained security controls.

## Developer Pain Points

- **Windows AltGr keyboard conflicts (#4723):** Brazilian ABNT2 and AZERTY layouts are broken because `Ctrl+Alt` (Windows' AltGr translation) matches global chords. This blocks an entire country's developer base from typing `/`.
- **Reasoning effort persistence (#4941, #4978):** The thinking level silently resets on restart with auto models, and Anthropic-compatible APIs get random HTTP 400 errors for the same parameter. Parameter handling between provider types is inconsistent.
- **Stale job state in TUI (#4547):** Background shell jobs that go stale or disappear leave ghost spinners and controls. Users cannot reliably assess running job state.
- **Skills Manager performance on cold filesystems (#4976):** The compatible scan mode does a full synchronous re-audit of every skill, which times out on cold Linux filesystems. The fix is merged but the pattern (synchronous I/O on the event loop) is a recurring concern.
- **Clipboard I/O on the event loop (#4896):** Terminal clipboard writes (OSC 52) were blocking the TUI event path. While fixed today, this highlights that terminal I/O is not sufficiently decoupled from UI rendering.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*