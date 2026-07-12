# AI CLI Tools Community Digest 2026-07-12

> Generated: 2026-07-12 02:55 UTC | Tools covered: 9

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
**Date:** 2026-07-12

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 12, 2026 shows a maturing ecosystem with clear platform differentiation, though all major tools face similar reliability challenges around sandbox stability, model integration friction, and session state management. Windows parity remains a systemic weakness across nearly every tool, with Claude Code, OpenAI Codex, and GitHub Copilot CLI all reporting platform-specific regressions that block core workflows. A major theme unifying the ecosystem is the GPT-5.6 model family rollout, which has triggered cascading compatibility issues across OpenCode, Pi, and Gemini CLI—suggesting provider abstraction layers are struggling to keep pace with rapid model releases. The community is increasingly vocal about silent failures (model fallbacks, data loss, configuration bypasses) that erode trust, while demanding richer multi-session orchestration, cross-platform support, and transparent cost/usage controls.

---

## 2. Activity Comparison

| Tool | Open Issues (top 10 heat) | PRs (last 24h) | Release Status | Key Signal |
|------|--------------------------|----------------|----------------|------------|
| **Claude Code** | 10 hot issues; high severity on Windows Cowork & silent model fallback | 5 PRs (multiple open) | No release | Regression-heavy day; macOS TLS blocker |
| **OpenAI Codex** | 10 hot issues; SQLite logging crisis (#28224, 432👍) | 10 PRs (mostly merged) | No release | Performance & rate-limit reliability dominate |
| **Gemini CLI** | 10 hot issues; tool loop (#1531, 64 comments) | 10 PRs (7 merged, security focus) | No release | Security hardening wave; looping bugs persist |
| **GitHub Copilot CLI** | 10 hot issues; MCP OAuth token bridging broken (4+ issues) | 1 PR | No release | MCP integration fragility is the #1 pain point |
| **Kimi Code CLI** | 1 hot issue (CHANGELOG as skill) | 5 PRs (all merged/community) | No release | Low volume but high-quality community fixes |
| **OpenCode** | 10 hot issues; GPT-5.6 model not found (#36140, 71👍) | 10 PRs (active refactoring) | No release | High CPU issues (#30086) remain unresolved |
| **Pi (pi-mono)** | 10 hot issues; closed bugs dominated | 10 PRs (mostly merged) | No release | GPT-5.6 integration across 3 providers; extension API work |
| **Qwen Code** | 10 hot issues; multi-workspace RFC (#6378, 20 comments) | 10 PRs (daemon & perf focused) | No release | Architectural shift to daemon-based multi-workspace |
| **DeepSeek TUI** | 5 hot issues; Anthropic API 400 errors | 10+ PRs (cost accounting, i18n) | No release | Rapid iteration; provider-specific fixes |

**Notable:** All tools are in a "no release" day, but PR velocity varies dramatically—DeepSeek TUI leads with 10+ PRs, while Copilot CLI had only 1. The absence of releases across the board is unusual and may indicate a pre-release stabilization period.

---

## 3. Shared Feature Directions

These requirements appear across multiple tool communities, suggesting industry-wide gaps:

| Shared Need | Affected Tools | Specific Demands |
|-------------|----------------|-----------------|
| **Multi-session orchestration** | Claude Code (#24798), Copilot CLI, Qwen Code (#6378) | Inter-session communication, dependency sequencing, one daemon for N workspaces |
| **Windows platform parity** | Claude Code (#74649, #55206), Codex (#22428), Copilot CLI (#4095), Gemini CLI | Cowork/sandbox broken; file locking; missing `CLAUDE_DATA_DIR`; Bash on Windows |
| **Cost & usage transparency** | Claude Code (#76793), Codex (#32486), OpenCode (#36141) | Silent model downgrade; high-context pricing surprise; reasoning variant gaps |
| **MCP/OAuth reliability** | Copilot CLI (#4084, #4085, #4089, #4096), Qwen Code (#6639), Claude Code | Token bridging failures; OAuth connects but no tools; no auto-recovery |
| **Session persistence & recovery** | Copilot CLI (#4097, #4098), Qwen Code (#6727, #6730), Pi (#6558) | Truncated JSONL; binary blobs; tool results on wrong branches; lost cancellation state |
| **Configuration self-knowledge** | Gemini CLI (#26864), Qwen Code, Copilot CLI | Models should know their own config format; no hallucination of file names |
| **Linux desktop app** | Codex (#11023, 733👍), OpenCode | Native Linux client driven by macOS power issues |
| **Silent scope expansion prevention** | Gemini CLI (#28155), Claude Code (#64615) | Bounded operations must not silently diverge; confirmation before rewind/data loss |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|----------|-----|-----------|--------------|
| **Primary user** | Developer teams, multi-session workers | Power users, evaluators | Engineering teams, policy-first | Enterprise, MCP integrators | Open-source community, model explorers | Cross-provider enthusiasts | Enterprise daemon users | CLI minimalists, cost-trackers |
| **Strengths** | Cowork, Agent Teams, Hook ecosystem | GPT-5.6 Sol support, TUI diffs, SQLite reduction | Security hardening (DNS rebinding, path traversal) | MCP OAuth, Skills system, Voice mode | Provider diversity, GPT-5.6 family, V2 TUI | Provider abstraction, extensions, compaction | Multi-workspace daemon, web shell, session recovery | Provider-specific cost accounting, i18n, multi-platform |
| **Weaknesses** | Windows Cowork broken; silent model fallback | Rate-limit bugs; Windows sandbox fragile | Tool loop death spirals; sycophancy | MCP token bridging; session data corruption | High CPU idle loops; GPT-5.6 rollout friction | Extension dev friction; Windows scroll bug | Memory degradation; API model compat | Anthropic API 400s; RSS after cancellation |
| **Technical approach** | Bun runtime, MCP plugins, remote control | GPT-5.6 native, SQLite feedback logging | Policy TOML files, AST-aware tooling | MCP OAuth, Skills as composable workflows | Provider-agnostic, V2 TUI, event streams | Unified provider layer, extension API | Daemon-centric, workspace isolation | Rust-based, cost-catalog, i18n framework |

**Key insight:** Claude Code and Qwen Code are both pushing toward multi-session/daemon architectures but from different angles—Claude via Cowork/Remote Control, Qwen via workspace daemons. Codex and Pi are fighting the same GPT-5.6 integration battle across different abstraction layers. Gemini CLI's security-first PR wave (DNS rebinding, path traversal, shell injection) is unmatched by any other tool this week.

---

## 5. Community Momentum & Maturity

| Tool | Community Maturity | Velocity | Risk Signals |
|------|-------------------|----------|--------------|
| **Claude Code** | High; mature issue triage, thorough reproduction steps, enterprise adoption | Moderate; 5 PRs/day, regression-heavy | Windows regression cluster; macOS TLS blocker (#75897) is a showstopper for Mac users |
| **OpenAI Codex** | High; 432👍 on single issue, 733👍 on Linux request, strong testing pipeline | High; 10 PRs/day, architectural improvements | Rate-limit accounting inconsistency (#31606, #32311) undermines trust |
| **Gemini CLI** | Medium-high; 64 comments on tool loop, security PRs from multiple contributors | High; 10 PRs/day, 7 merged, security-focused | Tool loop (#1531) is the ecosystem's most-engaged reliability bug |
| **Copilot CLI** | Medium; active MCP discussion but low PR velocity | Low; 1 PR/day | MCP OAuth is broken across multiple layers; session data integrity fragile |
| **Kimi Code CLI** | Low; small community, 1 issue/day, 5 PRs | Medium; all community-contributed | Low engagement suggests limited adoption or pre-release phase |
| **OpenCode** | High; 71👍 on GPT-5.6 issue, active V2 TUI development | High; 10 PRs/day, refactoring focus | High CPU (#30086) unresolved since ~7 days; GPT-5.6 rollout gaps |
| **Pi** | Medium-high; 18👍 on thinking level request, strong extension API work | High; 10 PRs/day, GPT-5.6 across 3 providers | Extension development friction; Windows scroll bug unfixed |
| **Qwen Code** | Medium; RFC #6378 shows active design discussion | High; 10 PRs/day, daemon architecture shift | Memory degradation (#6487); daemon state volatility (#6726) |
| **DeepSeek TUI** | Low but growing; 10+ PRs/day, community i18n contributions | Very high; 10+ PRs/day, rapid iteration | Anthropic API incompatibility; RSS not settling (#4326) |

**Maturity leaders:** Claude Code and OpenAI Codex show the most mature issue triage and testing culture, with detailed reproduction steps and clear severity labels. **Velocity leaders:** DeepSeek TUI, OpenCode, and Pi are iterating fastest, though DeepSeek's low issue count suggests a smaller but highly engaged userbase.

---

## 6. Trend Signals

For technical decision-makers, the following industry signals emerge from this week's digest:

1. **GPT-5.6 integration is a stress test for provider abstraction layers.** OpenCode (#36140, #36141), Pi (#6097, #6475, #6529), and Gemini CLI (#28155) all show that model family rollouts expose gaps in model registration, reasoning variant support, prompt caching, and context window handling. **Takeaway:** Assess how quickly your chosen tool adapts to new model releases—this correlates with provider abstraction quality.

2. **Windows parity is the ecosystem's weakest link.** Claude Code, Codex, and Copilot CLI all report showstopper Windows bugs (sandbox file deletion, Cowork broken, plugin file locking). With no Windows-specific improvements visible this week, Windows developers face materially degraded experiences. **Takeaway:** If your team is Windows-first, validate each tool's Windows support explicitly; expect friction.

3. **Silent failures are eroding trust faster than explicit errors.** Claude Code's silent model fallback (#76793), Copilot CLI's hallucinated web search (#4093), and Gemini CLI's silent scope expansion (#28155) all demonstrate that users consistently rate "surprising behavior" as more frustrating than clear error messages. **Takeaway:** Prioritize tools that surface state changes (model switches, scope changes, configuration failures) with explicit user notification.

4. **Multi-session orchestration is the next frontier.** Claude Code (#24798), Qwen Code (#6378), and Copilot CLI's session sync requests all point to a shared need: chaining and orchestrating multiple agent sessions for large-scale workflows. No tool has solved this yet. **Takeaway:** If you need CI/CD integration or cross-session dependency sequencing, none of these tools are production-ready—plan for interim workarounds.

5. **Cost transparency is transitioning from nice-to-have to must-have.** Codex (#32486), Claude Code (#76793, #74709), and OpenCode (#36141) all surface user frustration with unexpected costs from silent model downgrades, high-context pricing, and missing usage limit notifications. **Takeaway:** Tools without built-in cost tracking and threshold alerts will increasingly face adoption barriers in cost-conscious enterprises.

6. **Security hardening is accelerating, but unevenly.** Gemini CLI merged 7 security PRs this week alone (DNS rebinding, path traversal, shell injection, env var leaks). Other tools show minimal security activity. **Takeaway:** For enterprise deployment, Gemini CLI's security posture appears strongest; others require additional vetting for sensitive environments.

7. **Small tools are innovating fastest.** DeepSeek TUI (10+ PRs/day) and Qwen Code (daemon architecture RFC) show that smaller or newer projects can move faster on architectural improvements than established tools. **Takeaway:** Monitor these tools for patterns that may later be adopted by larger projects—especially around cost accounting (DeepSeek) and multi-workspace isolation (Qwen).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-07-12 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The most-discussed Skills proposals, ranked by community engagement (comments + reactions):

### 🥇 #514 – Document Typography Skill
- **Author:** PGTBoos | **Status:** Open | **Created:** 2026-03-04
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets universal typographic issues Claude introduces.
- **Discussion:** Sustained comment thread (12+ weeks) reflecting strong demand for output polish. Users report these flaws "affect every document Claude generates."
- **🔗** [PR #514](https://github.com/anthropics/skills/pull/514)

### 🥇 (tie) #1298 – Skill-Creator Eval Fix (0% Recall Bug)
- **Author:** MartinCajiao | **Status:** Open | **Created:** 2026-06-10
- **Functionality:** Resolves `run_eval.py` always reporting 0% recall (#556), fixing Windows stream reading, trigger detection, and parallel workers. The description-optimization loop was "optimizing against noise."
- **Discussion:** References 10+ independent reproductions. Critical blocker for the skill-creation workflow itself.
- **🔗** [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #486 – ODT (OpenDocument) Skill
- **Author:** GitHubNewbie0 | **Status:** Open | **Created:** 2026-03-01
- **Functionality:** Creates, fills, reads, and converts `.odt`/`.ods` files. Includes template filling and ODT-to-HTML conversion.
- **Discussion:** Community interest in LibreOffice/ISO-standard document support. Complements existing DOCX/PDF skills.
- **🔗** [PR #486](https://github.com/anthropics/skills/pull/486)

### #83 – Skill Quality & Security Analyzers
- **Author:** eovidiu | **Status:** Open | **Created:** 2025-11-06
- **Functionality:** Two meta-skills evaluating skills across Structure/Documentation (20%), plus a security analyzer for trust boundary assessment.
- **Discussion:** Addresses the emerging need for quality assurance in the skill marketplace itself. Long-running discussion (8+ months).
- **🔗** [PR #83](https://github.com/anthropics/skills/pull/83)

### #1367 – Self-Audit Skill (v1.3.0)
- **Author:** YuhaoLin2005 | **Status:** Open | **Created:** 2026-06-28
- **Functionality:** Universal output auditing — mechanical file verification followed by four-dimension reasoning audit in damage-severity priority order. Works across any project/tech stack.
- **Discussion:** Recently proposed, rapidly accumulating comments. Represents a new category: post-generation quality gates.
- **🔗** [PR #1367](https://github.com/anthropics/skills/pull/1367)

### #723 – Testing Patterns Skill
- **Author:** 4444J99 | **Status:** Open | **Created:** 2026-03-22
- **Functionality:** Comprehensive testing stack covering philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing, and what NOT to test.
- **Discussion:** Well-received structure. Community sees this as filling a gap between code generation and quality verification.
- **🔗** [PR #723](https://github.com/anthropics/skills/pull/723)

### #210 – Frontend Design Skill Improvement
- **Author:** justinwetch | **Status:** Open | **Created:** 2026-01-05
- **Functionality:** Revises the frontend-design skill for clarity and actionability — ensuring every instruction is executable within a single conversation.
- **Discussion:** Representative of broader "skill quality" concerns. Community wants skills that are precise, not verbose educational guides.
- **🔗** [PR #210](https://github.com/anthropics/skills/pull/210)

---

## 2. Community Demand Trends

Distilled from the most active Issues, five clear demand directions emerge:

### 🔴 Critical: Skill-Creation Toolchain Reliability
- **Issue #556** (12 comments) and **#1169** (3 comments) both report the same blocker: `run_eval.py` and the optimization loop (`run_loop.py`, `improve_description.py`) return **0% recall on every query**, making description optimization impossible. This is the highest-priority infrastructure bug — skill creators cannot validate their work.
- **🔗** [Issue #556](https://github.com/anthropics/skills/issues/556) | [Issue #1169](https://github.com/anthropics/skills/issues/1169)

### 🟠 Windows Compatibility
- **Issue #1061** (3 comments) documents three distinct failures on Windows: `PATHEXT` not honored for `claude.cmd`, `cp1252` encoding crashes, and `select()` on pipes unsupported. Multiple PRs (#1050, #1099, #1298) attempt fixes, indicating a fragmented community effort.
- **🔗** [Issue #1061](https://github.com/anthropics/skills/issues/1061)

### 🟡 Security & Trust Boundaries
- **Issue #492** (34 comments, 2 👍) reveals that community skills distributed under the `anthropic/` namespace create trust boundary vulnerabilities. Users may grant elevated permissions to skills they mistakenly believe are official. This is the **most-commented issue** in the repository.
- **🔗** [Issue #492](https://github.com/anthropics/skills/issues/492)

### 🟢 Organizational Skill Sharing
- **Issue #228** (14 comments, 7 👍) requests direct org-wide skill sharing in Claude.ai, bypassing the current workflow of `.skill` file downloads, Slack transfers, and manual uploads.
- **🔗** [Issue #228](https://github.com/anthropics/skills/issues/228)

### 🟢 Reasoning Quality Gates
- **Issue #1385** (3 comments) and **#1329** (9 comments) propose pipeline approaches: pre-task calibration → adversarial review → delivery verification. Also "compact-memory" for symbolic agent state notation. Interest in systematic output quality control is rising.
- **🔗** [Issue #1385](https://github.com/anthropics/skills/issues/1385) | [Issue #1329](https://github.com/anthropics/skills/issues/1329)

### 🔵 Duplicate Skill Installation
- **Issue #189** (6 comments, 9 👍) identifies that `document-skills` and `example-skills` plugins install identical content, causing duplicate skills in Claude Code's context window. High community agreement on the severity.
- **🔗** [Issue #189](https://github.com/anthropics/skills/issues/189)

---

## 3. High-Potential Pending Skills

These PRs have active comment threads and strong technical merit; they are likely to merge soon:

| PR | Skill | Author | Status | Why It Matters |
|----|-------|--------|--------|----------------|
| [#539](https://github.com/anthropics/skills/pull/539) | Skill-Creator: YAML special chars warning | Lubrsy706 | Open | Prevents silent YAML parsing failures — a common newbie trap |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX: fix tracked change `w:id` collision | Lubrsy706 | Open | Prevents document corruption with existing bookmarks |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color Expert skill | meodai | Open | Covers ISCC-NBS, Munsell, OKLCH/OKLAB — domain-specific depth |
| [#1261](https://github.com/anthropics/skills/pull/1261) | Skill-Creator: isolate eval files from live project | alvingarcia | Open | Prevents concurrent Claude sessions from interfering during parallel eval |
| [#1323](https://github.com/anthropics/skills/pull/1323) | Trigger detection fix (real skill name miss) | Polluelo978 | Open | Second attempt at the 0% recall root cause |

**Common thread:** 3 of the 5 pending skills target the `skill-creator` toolchain — the community is self-healing its own infrastructure before building new features.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *skill-creation infrastructure reliability* (Windows compatibility, trigger detection, YAML validation, eval accuracy) rather than new domain-specific skills—because without a working skill-creator toolchain, no skill can be tested or optimized.**

---

# Claude Code Community Digest — 2026-07-12

---

## Today's Highlights

A significant uptick in Windows and Remote Control bug reports dominates today's digest, with multiple critical regressions around Cowork, sandbox permissions, and environment lifecycle management. The community is also rallying around a long-standing feature request for inter-session communication (#24798, 55 comments, 18 👍) to enable multi-Claude workflows with dependency sequencing. A notable macOS networking regression (#75897) persists across full reinstalls, suggesting a deep-seated TLS or runtime issue.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues (Top 10)

1. **#24798 — Inter-session communication for multi-Claude workflows** *[enhancement, area:tui, area:core]*  
   The most-discussed open feature request this week. Users running parallel Claude Code sessions on large projects want a way to sequence higher-level processes with dependencies across sessions. Community reaction is highly positive (55 comments, 18 👍).  
   [GitHub](https://github.com/anthropics/claude-code/issues/24798)

2. **#74649 — [BUG] Missing HCS services: vfpext — Cowork not working on Windows 11 Pro** *[bug, platform:windows, area:cowork]*  
   A showstopper for Windows Pro users: Cowork functionality is completely broken due to missing Hyper-V Container Services (`vfpext`). 52 comments, zero 👍 — high frustration with no workaround.  
   [GitHub](https://github.com/anthropics/claude-code/issues/74649)

3. **#55206 — [BUG] Cowork on Windows: bash sandbox can create files but unlink is denied** *[bug, platform:windows, platform:macos, area:cowork, area:sandbox]*  
   A critical sandbox bug breaking all `git write` operations on Windows. Files can be created on mounted host folders but deletion fails. 14 comments, 10 👍 — widely affecting developer workflows.  
   [GitHub](https://github.com/anthropics/claude-code/issues/55206)

4. **#36800 — [BUG] Claude Code spawns duplicate channel plugin instances mid-session** *[bug, platform:macos, area:mcp]*  
   **Closed** — A now-resolved macOS MCP bug where a second Telegram channel plugin process would spawn mid-session, causing 409 Conflict errors and tool loss. Notable for its thorough reproduction steps and the cascade of failures it triggered.  
   [GitHub](https://github.com/anthropics/claude-code/issues/36800)

5. **#75897 — [BUG] Unable to connect to API (ConnectionRefused) on macOS — persists after full reinstall** *[bug, platform:macos, regression, area:networking]*  
   A regression in v2.1.204 that survives safe-mode, reboot, and full reinstall. Users suspect a Bun runtime TLS issue. Low comment count (2) but high severity — blocks all API usage.  
   [GitHub](https://github.com/anthropics/claude-code/issues/75897)

6. **#76500 — [BUG] Agent Teams mailbox: 5-62 min turn-boundary delays, lost final reports** *[bug, platform:macos, area:agents]*  
   A detailed bug report on the experimental Agent Teams feature, documenting four distinct delivery defects including idle notifications arriving instead of final reports and shutdown handshakes that never complete.  
   [GitHub](https://github.com/anthropics/claude-code/issues/76500)

7. **#57998 — [FEATURE] CLAUDE_DATA_DIR env var or config key to relocate %APPDATA%\Claude\ on Windows** *[enhancement, platform:windows, area:desktop]*  
   10 comments, 12 👍. Windows developers need control over where Claude stores its data — currently hardcoded to `%APPDATA%`, which causes issues for portable setups, enterprise-managed devices, and space-constrained drives.  
   [GitHub](https://github.com/anthropics/claude-code/issues/57998)

8. **#64615 — [BUG] /rewind (Esc Esc) silently reverts/loses code with no confirmation** *[bug, area:tui, user-experience]*  
   A dangerous UX flaw: pressing Escape twice silently reverts all code changes with no undo. The "Restore code and conversation" is the default action. 5 comments, high emotional response from users who lost uncommitted work.  
   [GitHub](https://github.com/anthropics/claude-code/issues/64615)

9. **#65378 — [BUG] Hooks fail with posix_spawn ENOENT when session cwd is deleted** *[bug, area:hooks]*  
   A subtle but painful bug: if a session's working directory is deleted (e.g., a git worktree removal), all hooks fail silently. 5 comments, 3 👍. Several duplicate reports today (#76808) indicate this is a common pain point.  
   [GitHub](https://github.com/anthropics/claude-code/issues/65378)

10. **#76793 — [BUG] Silent model fallback: Fable 5 -> Opus 4.8 mid-session with no notification** *[bug, platform:windows, area:model]*  
    A concerning behavior: when usage limits are hit, Claude Code Desktop silently switches models mid-session with zero user notification. Users are paying for one model but getting another without consent.  
    [GitHub](https://github.com/anthropics/claude-code/issues/76793)

---

## Key PR Progress (Top 10)

1. **#39043 — Remove "retro-futuristic" recommendation from Frontend Design Skill** *[OPEN]*  
   A humorous but substantive PR from t3dotgg removing a questionable design suggestion. Notable for the author's industry credibility and the community debate around LLM-generated design advice.  
   [GitHub](https://github.com/anthropics/claude-code/pull/39043)

2. **#76673 — fix: 再現性監査で確認した設計不具合を修正 (Fix design defects from reproducibility audit)** *[CLOSED]*  
   A comprehensive Japanese-authored fix covering Issue triage lifecycle (external contributors' additions shouldn't reset triage), Ralph state isolation per session, and Hookify shell syntax hardening.  
   [GitHub](https://github.com/anthropics/claude-code/pull/76673)

3. **#76640 — fix: load macOS system certificates and handle NO_PROXY blackhole for Bun runtime** *[OPEN]*  
   Addresses a major macOS networking issue (#24470) where Cowork fails with "Self-signed certificate detected" errors. The Bun runtime's SSL context doesn't load macOS system certificates by default, and `NO_PROXY` can create a connectivity blackhole.  
   [GitHub](https://github.com/anthropics/claude-code/pull/76640)

4. **#76581 — fix(plugins): harden YAML, path, and symlink handling in scripts** *[OPEN]*  
   Security hardening for official plugin scripts against YAML frontmatter breakout, path traversal, and symlink-based credential overwrite attacks. Includes fixes for `ralph-wiggum` setup command injection.  
   [GitHub](https://github.com/anthropics/claude-code/pull/76581)

5. **#76576 — fix(plugin-dev): align userConfig docs and hook validator with v2.1.207 shell-injection fix** *[OPEN]*  
   Addresses breaking changes in v2.1.207: `$ {user_config.*}` injection in shell-form hooks is now rejected, and `pluginConfigs` is no longer read from project-level `.claude/settings.json`. Updates documentation to match.  
   [GitHub](https://github.com/anthropics/claude-code/pull/76576)

*(Only 5 open/closed PRs in the last 24h — remaining slots are unfilled for this digest period)*

---

## Feature Request Trends

1. **Multi-session orchestration (inter-session communication)** — #24798 leads as the most-requested capability: users want to chain Claude sessions for large project workflows, passing context and results between parallel sessions.

2. **Windows parity and configuration control** — #57998 (`CLAUDE_DATA_DIR`) and related requests show Windows users need more control over installation paths, data directories, and environment configuration. The lack of parity with macOS/Linux is a recurring theme.

3. **Desktop app CLl feature parity** — #71726 and #62011 highlight that the Desktop app's Code window still lacks mid-task steering (injecting messages between tool calls) and preview pane support that the CLI/TUI already has.

4. **Spend and usage limit transparency** — #74709 (threshold notifications) and #76793 (silent model fallback) together point to a major gap: users want proactive notifications before hitting limits and clear indicators when models are downgraded.

5. **Remote Control UX polish** — #66343 (hide RC footer pill) and #76812 (sessionTitle not applied) represent a growing set of small but important UI refinements as Remote Control usage scales.

---

## Developer Pain Points

- **Windows Cowork & Sandbox is broken** — Three separate Windows-specific bugs in today's top issues (#74649, #55206, #76806) with no workaround. The sandbox allows file creation but denies deletion, breaking essential `git` operations.

- **Silent failures and data loss** — #64615 (rewind destroys code with no confirmation) and #76793 (silent model fallback) erode trust. Developers consistently rate "surprising behavior" as more frustrating than explicit errors.

- **Bun runtime networking issues** — #75897 and #76640 both trace back to the Bun runtime failing to load platform-native TLS certificates. The `ConnectionRefused` error on macOS is a complete blocker with no fallback path.

- **EPHEMERAL CWD edge cases** — #65378, #76808, and #76812 all involve scenarios where the working directory is deleted mid-session, causing hooks and monitoring to fail open (or fail silently). This is harder to fix than it appears because the harness stores no fallback `cwd`.

- **Environment lifecycle pollution** — #76811 describes a growing problem for Remote Control users: each server instance registers a new environment in the cloud picker, stale environments accumulate, and they are indistinguishable from active ones with no removal API.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-07-12

## Today's Highlights
The community remains highly engaged around Windows sandbox stability and rate-limit reliability, with multiple issues reporting reset failures and quota inconsistencies. A major performance bug revealing that Codex SQLite feedback logs can write up to ~640 TB/year has been partially resolved via merged PRs that cut logs by 85%. The new GPT-5.6 Sol model is generating discussion around its default high context thresholds and forced subagent model inheritance, which could lead to unexpected cost increases for users.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#28224 – Codex SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance](https://github.com/openai/codex/issues/28224)**  
   *Severity: High* – A startling performance/stability bug revealing extreme feedback logging volume. The author confirmed three merged PRs (released in 0.142.0) reduced logs by ~85%. Community reaction is strong (432 👍), reflecting relief but also concern about remaining 15% waste.

2. **[#31814 – GPT-5.6 Sol cannot specify subagent models, forcing all subagents to also be Sol instances](https://github.com/openai/codex/issues/31814)**  
   *Severity: High* – A configuration design issue where GPT-5.6 Sol's metadata forces `hide_spawn_agent_metadata` to `true`, preventing users from assigning different models to subagents. 102 👍 indicate broad concern over loss of model flexibility.

3. **[#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**  
   *Long-standing request* – With 164 comments and 733 👍, this is the community’s most-wanted feature. Users cite macOS power consumption issues as a primary driver, making this the top enhancement request by a wide margin.

4. **[#28190 – `rg` is blocked by macOS](https://github.com/openai/codex/issues/28190)**  
   *Platform bug* – macOS blocks the `rg` binary used by Codex CLI, causing workflow interruptions. 46 comments and 71 👍 show it’s a significant pain point for Mac users.

5. **[#28969 – Add setting to disable the auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)**  
   *UX friction* – Auto-resolve after 60 seconds interrupts users mid-typing or review. 105 👍 signal strong desire for configurable or disable-able auto-resolution.

6. **[#31606 – Reset failed, did not apply and 1 reset is wasted](https://github.com/openai/codex/issues/31606)**  
   *Rate-limit reliability* – Users report that usage resets consume credits but fail to actually apply. Combined with issue #32311 (quota stuck at 0% after reset) and #32410 (unstable 5h quota), this highlights systemic rate-limit accounting bugs.

7. **[#32486 – Default GPT-5.6 context can cross the 272K higher-usage threshold](https://github.com/openai/codex/issues/32486)**  
   *Cost concern* – GPT-5.6's default context configuration can silently push users into expensive high-usage pricing bands without explicit opt-in. Important for Pro/API users monitoring costs.

8. **[#32032 – Computer Use 1.0.1000366 crashes at launch on macOS 15.7.7 due to missing Swift Concurrency symbol](https://github.com/openai/codex/issues/32032)**  
   *Regression* – A critical crash that prevents Computer Use from initializing on newer macOS versions. Related to prior issue #22822, suggesting an unresolved underlying Swift runtime compatibility problem.

9. **[#32291 – Tool-backed Codex Desktop ignores prompt model steering and cannot select named custom agents](https://github.com/openai/codex/issues/32291)**  
   *Configuration bug* – Users cannot override subagent model selection via prompts or agent files as documented, reducing the utility of multi-agent workflows.

10. **[#32502 – VS Code extension does not show subagent activity and loses conversation state](https://github.com/openai/codex/issues/32502)**  
    *IDE integration regression* – The latest VS Code extension (1.128.0) fails to display subagent activity and drops conversation context on Windows, frustrating users relying on the extension for multi-agent work.

## Key PR Progress

1. **[#30016 – core: inherit current step environments in subagents](https://github.com/openai/codex/pull/30016)**  
   Critical fix for deferred executors: subagents now inherit the correct environment from the request that spawned them, not a stale snapshot.

2. **[#30017 – core: refresh turn diff roots from step context](https://github.com/openai/codex/pull/30017)**  
   Companion to #30016: ensures the diff tracker uses current environment paths even when environments attach late.

3. **[#30020 – core: pass step environments to turn input extensions](https://github.com/openai/codex/pull/30020)**  
   Extends the environment inheritance pattern to turn-input extensions, fixing a timing issue with environment availability.

4. **[#29960 – Cache stable executor skills and project them per model step](https://github.com/openai/codex/pull/29960)**  
   Performance optimization: skill metadata is now discovered once per stable environment rather than reread every sampling step.

5. **[#29946 – Cache stable plugin metadata separately from live MCP runtimes](https://github.com/openai/codex/pull/29946)**  
   Architectural improvement: separates plugin manifest caching from live MCP connection management, reducing redundant discovery.

6. **[#30036 – Make Windows executable resolution deterministic](https://github.com/openai/codex/pull/30036)**  
   Fixes a subtle Windows bug where `lpApplicationName` absence could let Windows choose an executable before Codex applies the requested environment PATH.

7. **[#31806 – Publish new releases to R2](https://github.com/openai/codex/pull/31806)**  
   Infrastructure: adds Cloudflare R2 as a shadow distribution channel for Codex installers, improving download reliability.

8. **[#30135 – ci: publish versioned bash fork artifacts](https://github.com/openai/codex/pull/30135)**  
   CI pipeline: re-introduces independently versioned bash fork artifacts (previously removed), following the zsh split pattern.

9. **[#32461 – Expand tabs when rendering TUI diffs](https://github.com/openai/codex/pull/32461)**  
   UX polish: tab characters in TUI diff views are now expanded to 4 spaces, preventing alignment issues.

10. **[#32332 – Add ordinals to paginated rollout records](https://github.com/openai/codex/pull/32332)**  
    Data model: adds durable ordering to rollout records, enabling consumers to process suffixes without rebuilding history.

## Feature Request Trends

- **Linux Desktop App** (#11023, 733 👍): The overwhelming community priority remains a native Linux desktop client, driven by macOS power consumption problems and Linux developer demand.
- **Pause/Resume Sessions** (#26539): Multiple users request a "Pause" button for long-running code generation tasks, especially when system restarts are needed.
- **Configurable Auto-Resolve** (#28969): A moderate but growing call for removing or extending the 60-second auto-resolve timer on questions to avoid interrupting user workflows.

## Developer Pain Points

1. **Rate-limit accounting inconsistency** – Multiple issues (#31606, #32311, #32410, #32484) report that usage resets consume credits without actually applying, and quotas can jump erratically. This erodes trust in the usage tracking system.

2. **Windows sandbox instability** – Issues #22428 and #28248 describe persistent failures in Windows sandbox execution, including "CreateProcessAsUserW" errors and ACL corruption after crashes. The Windows sandbox remains the most fragile platform component.

3. **GPT-5.6 Sol model configuration inflexibility** – The inability to override subagent models (#31814, #32291) and the risk of unintentionally hitting high-usage price tiers (#32486) are creating friction for advanced users who need precise control over model selection and costs.

4. **macOS platform compatibility regressions** – The Computer Use crash on macOS 15.7.x (#32032, #32175) and the `rg` binary block (#28190) suggest ongoing macOS integration challenges, particularly around Swift runtime dependencies and system security policies.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-12

## Today's Highlights

The repository remains highly active with 50 open issues and 13 pull requests updated in the last 24 hours, though no new releases were published. A wave of security-focused PRs landed over the past two weeks addressing DNS rebinding, path traversal, and environment variable leaks. The community's loudest concern remains the **tool loop bug** (Issue #1531) which has accumulated 64 comments and 31 👍 reactions, signaling a core reliability problem that continues to frustrate users.

## Releases

No new releases in the last 24 hours. The latest stable version continues to be **v0.41.2**, with a nightly v0.42.0 available.

---

## Hot Issues

### 1. [#1531 — [TOOL LOOP] CLI getting stuck in tool loop](https://github.com/google-gemini/gemini-cli/issues/1531)
- **Status:** Open (P1) | **Comments:** 64 | **👍:** 31
- **Why it matters:** The most upvoted and discussed bug. Users report the CLI spins indefinitely when tools like `write_tool` fail. A potential root cause involves repeated switching between Pro and Flash models. This is the single biggest pain point for reliability.
- **Community reaction:** Frustrated. Many duplicate issues have been merged here. Users want an upper bound on retries and better error surfacing.

### 2. [#4556 — Make Gemini less of a sycophant](https://github.com/google-gemini/gemini-cli/issues/4556)
- **Status:** Open (P2) | **Comments:** 26 | **👍:** 38
- **Why it matters:** High engagement on a behavioral ask. Users in architecture/design roles dislike the excessive mirroring language ("You are having the exact right thought..."). They want direct, honest critique.
- **Community reaction:** Strong agreement. Developers want the CLI to act as a "trusted equal," not an echo chamber.

### 3. [#18186 — Workspace/.gemini/policies/*.toml not taking effect](https://github.com/google-gemini/gemini-cli/issues/18186)
- **Status:** Open (P3) | **Comments:** 16 | **👍:** 16
- **Why it matters:** Policy files are a core configuration mechanism. If they silently fail, users lose control over permission boundaries, which is both a usability and security issue.
- **Community reaction:** Users report the bug persists across versions. Stale label applied.

### 4. [#25868 — Multiple sequential edits to the same file — only last one persists](https://github.com/google-gemini/gemini-cli/issues/25868)
- **Status:** Open (P1) | **Comments:** 10 | **👍:** 5
- **Why it matters:** After previous fix #8513 serialized state-mutating calls, this regression reappeared. The model's consecutive edits to the same file are collapsed, losing work.
- **Community reaction:** Users report they must break edits across different files or do one edit per turn.

### 5. [#23054 — Non-interactive mode produces fragmented traces](https://github.com/google-gemini/gemini-cli/issues/23054)
- **Status:** Open (P2) | **Comments:** 9 | **👍:** 0
- **Why it matters:** Affects anyone building evaluation pipelines. Each span gets a separate trace ID, making it impossible to correlate tool calls in OpenTelemetry dashboards.
- **Community reaction:** The reporter built a workaround but notes this blocks automated regression testing.

### 6. [#23182 — CLI burns tokens looping without choosing a file read tool](https://github.com/google-gemini/gemini-cli/issues/23182)
- **Status:** Open (P1) | **Comments:** 7 | **👍:** 0
- **Why it matters:** Another looping variant — the model fails to pick any tool and retries the same reasoning path, wasting tokens.
- **Community reaction:** Similar to #1531. Marked as possible duplicate.

### 7. [#21841 — Harden ReadManyFilesTool: Concurrency Control and Defensive Guards](https://github.com/google-gemini/gemini-cli/issues/21841)
- **Status:** Open (P2) | **Comments:** 10 | **👍:** 0
- **Why it matters:** The LLM-driven tool can request `**/*` globs, causing massive file ingestion. No rate limits or max-file guards exist.
- **Community reaction:** Engineering-oriented discussion. Users want safeguards before this causes resource exhaustion.

### 8. [#26864 — Teach Gemini models about Gemini CLI configuration](https://github.com/google-gemini/gemini-cli/issues/26864)
- **Status:** Open (P2) | **Comments:** 10 | **👍:** 1
- **Why it matters:** The model hallucinates config file names and format. MCP server configuration docs are entirely missing from model knowledge.
- **Community reaction:** Users note competitors (e.g., Copilot, Claude) handle this better through built-in context injection.

### 9. [#26575 — Cannot write plan files, write_file tool is denied by policy. Cannot exit Plan Mode](https://github.com/google-gemini/gemini-cli/issues/26575)
- **Status:** Open (P1) | **Comments:** 5 | **👍:** 1
- **Why it matters:** A critical UX deadlock. Plan mode's own required tool is blocked by the policy it's supposed to operate under, leaving users stuck.
- **Community reaction:** Clear escalation path needed — the CLI should never trap the user in a mode with no escape.

### 10. [#28155 — gemini-3.1-pro-preview continues to have similar bug (scope expansion)](https://github.com/google-gemini/gemini-cli/issues/28155)
- **Status:** Closed | **Comments:** 4
- **Why it matters:** The model was asked to review ~100 lines but instead read the entire file and ran scripts. Multiple PRs (#28171, #28172) now target this.
- **Community reaction:** Closed after fixes were merged, but the root cause (silent scope expansion) remains a theme.

---

## Key PR Progress

### 1. [#28169 — feat(evals): add eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)
- **Status:** Closed (merged) | **Size:** L
- **What it does:** Adds `eval:coverage` CLI command that cross-references eval tests with the tool registry, helping teams identify untested tools.
- **Why it matters:** Moves toward systematic quality measurement — a prerequisite for production confidence.

### 2. [#28178 — fix(security): require approved bot patch artifacts](https://github.com/google-gemini/gemini-cli/pull/28178)
- **Status:** Closed (merged) | **Size:** M
- **What it does:** The publishing pipeline now requires an explicit approval marker before consuming bot-generated patches. Rejected runs must remove stale artifacts.
- **Why it matters:** Closes a supply-chain gap where unapproved patches could be published.

### 3. [#28175 — fix(policy): require confirmation for shell parameter expansion](https://github.com/google-gemini/gemini-cli/pull/28175)
- **Status:** Closed (merged) | **Size:** M
- **What it does:** Downgrades allowlisted shell commands containing `${...}` parameter expansion to require manual confirmation in interactive mode; denies them outright in non-interactive mode.
- **Why it matters:** Prevents accidental injection of shell-sensitive operations.

### 4. [#28181 — fix(security): prevent DNS rebinding bypass of SSRF protection](https://github.com/google-gemini/gemini-cli/pull/28181)
- **Status:** Closed (merged) | **Size:** S
- **What it does:** Replaces synchronous hostname-only IP check with asynchronous DNS resolution in `web_fetch` tool, preventing rebinding attacks.
- **Why it matters:** Critical SSRF vulnerability — without this, an attacker-controlled domain could resolve to a local IP mid-request.

### 5. [#28179 — fix(security): remove ISSUE_BODY and ISSUE_TITLE from always-allowed env vars](https://github.com/google-gemini/gemini-cli/pull/28179)
- **Status:** Closed (merged) | **Size:** XS
- **What it does:** Removes `ISSUE_BODY` and `ISSUE_TITLE` from the always-allowed environment variable list, ensuring they are sanitized in CI contexts.
- **Why it matters:** Prevents accidental exposure of issue content (which may contain secrets) to agent prompts.

### 6. [#28180 — fix(security): restore defensive path resolution for @-reference files](https://github.com/google-gemini/gemini-cli/pull/28180)
- **Status:** Closed (merged) | **Size:** L
- **What it does:** Re-applies symlink-aware path validation (`resolveDefensiveToolPath`) to `read_file`, `write_file`, and `edit` tools after a prior revert.
- **Why it matters:** Prevents path traversal via symlinks — a high-severity file access escalation.

### 7. [#28171 / #28172 — fix(agent): prevent silent scope expansion on task failure](https://github.com/google-gemini/gemini-cli/pull/28171)
- **Status:** Closed (merged) | **Size:** XL and XS
- **What it does:** When a focused code review fails, the agent can no longer silently expand scope — it must inform the user before switching strategies.
- **Why it matters:** Addresses the core complaint in #28155. Restores user trust in bounded operations.

### 8. [#28253 — fix(cli): sync footer branch name on filesystems without fs.watch](https://github.com/google-gemini/gemini-cli/pull/28253)
- **Status:** Open | **Size:** M
- **What it does:** Polls `git branch` when `fs.watch` doesn't fire (e.g., WSL mounts, NFS) so the footer branch indicator stays current after `git checkout`.
- **Why it matters:** Fixes a confusing UX bug for Windows/WSL users where the displayed branch is stale.

### 9. [#28349 — fix(cli): guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28349)
- **Status:** Open | **Size:** M
- **What it does:** Adds cycle detection to the settings merge function, preventing `RangeError` crashes when config objects contain circular references.
- **Why it matters:** Fixes #28270 — a crash that blocks users with complex nested configs.

### 10. [#28359 — fix(core): strip login/interactive shell wrappers in stripShellWrapper](https://github.com/google-gemini/gemini-cli/pull/28359)
- **Status:** Open | **Size:** S/M
- **What it does:** Handles `bash -lc "..."`, `bash -ic "..."`, and similar wrappers that were previously passed through un-stripped, bypassing policy checks.
- **Why it matters:** Policy enforcement was incomplete for common interactive shell patterns.

---

## Feature Request Trends

| Trend | Signal | Evidence |
|-------|--------|----------|
| **Sycophancy reduction** | Behavioral, high 👍 | #4556: 38 upvotes for less mirroring/more critique |
| **AST-aware tooling** | Engineering, structured | #22745: Investigation epic for AST-aware file reads and codebase mapping |
| **Configuration self-knowledge** | Documentation | #26864: Model should know its own config format and MCP setup |
| **Component-level evaluations** | Infrastructure | #24353: Epic for behavioral eval coverage across all tools |
| **Auto Memory improvements** | UX/Reliability | #26522: Stop retrying low-signal sessions; #26523: Better patch validation |

---

## Developer Pain Points

1. **Tool loop death spirals** (#1531, #23182) — The CLI's most reported frustration. The model gets stuck re-invoking broken tools or re-reasoning without making progress, burning tokens and time.

2. **Silent scope expansion** (#28155, #26575) — The model promises a focused task but silently diverges (reading more files, running scripts, or getting trapped in Plan Mode without escape). Users lose trust in bounded operations.

3. **Policy and configuration silently failing** (#18186, #26575) — Policy TOML files not applying, write tools blocked in plan mode, config hallucination. These are high-friction because they violate the principle of least surprise.

4. **State corruption across sequential edits** (#25868) — Multiple edits to the same file collapse to only the last one. This forces unnatural workarounds and interrupts developer flow.

5. **Shell execution and platform fragility** (#26596, #26690, #26567) — Crashes on Alpine Linux (musl), hangs in SSH TTY vs RDP, no support for Git Bash on Windows. These platform-specific bugs erode confidence in the CLI's cross-platform story.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**2026-07-12**

## Today's Highlights
A wave of MCP integration issues dominates today's activity, with multiple reports of OAuth servers connecting but failing to expose tools—affecting Atlassian and other third-party providers. Session data integrity problems are also surfacing, including truncated JSONL events on resume (Issue #4098) and binary blobs bloating conversation history beyond the 5 MB CAPI limit (Issue #4097). No new releases were published in the last 24 hours.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **[#4098] Resuming a session can leave truncated and concatenated events in events.jsonl**  
   *Author: Adamkadaban*  
   A resumed session produces malformed JSONL—incomplete event prefixes glued to complete events without separators—rendering the session non-resumable. This is a critical data-integrity bug that breaks the session persistence contract.  
   [View Issue](https://github.com/github/copilot-cli/issues/4098)

2. **[#4097] apply_patch stores deleted binary in session history, permanently exceeding CAPI 5 MB limit**  
   *Author: Adamkadaban*  
   When `apply_patch` deletes a large binary, the deletion event serializes the entire binary as a textual diff, permanently bloating conversation history. The `/compact` command becomes the only workaround, creating a poor UX for large-codebase workflows.  
   [View Issue](https://github.com/github/copilot-cli/issues/4097)

3. **[#4089] Atlassian MCP server: OAuth succeeds but zero tools exposed to sessions**  
   *Author: Mov1ngTrg3t*  
   OAuth completes successfully for the Atlassian MCP server, yet no tools appear in agent sessions. Other HTTP MCP servers (LeanIX, Lucid) work fine, pointing to a protocol-handling regression specific to Atlassian's endpoint.  
   [View Issue](https://github.com/github/copilot-cli/issues/4089)

4. **[#4096] Third-party MCP server shows "Connected" but tools are missing (OAuth token never bridged to sessions)**  
   *Author: bugale*  
   The OAuth token obtained in the desktop app UI is not being passed to CLI sessions, leaving the session toolset empty despite a green "Connected" badge. This breaks the core value proposition of the MCP integration.  
   [View Issue](https://github.com/github/copilot-cli/issues/4096)

5. **[#4095] Windows: plugin update fails with "Access is denied (os error 5)" while VS Code is running**  
   *Author: FBakkensen*  
   VS Code's Copilot extension holds file watcher handles on `installed-plugins`, preventing `copilot plugin update` from completing. Affects all Windows users who keep VS Code open during updates.  
   [View Issue](https://github.com/github/copilot-cli/issues/4095)

6. **[#4094] Deleting a session in the app doesn't remove it from session-store.db / VS Code Copilot Chat history**  
   *Author: evdbogaard*  
   Session deletion from the Copilot app UI is purely cosmetic—the underlying SQLite store and VS Code metadata cache retain the orphaned session, causing stale context and confusion.  
   [View Issue](https://github.com/github/copilot-cli/issues/4094)

7. **[#4083] Voice mode download fails with corporate proxy ENOTFOUND**  
   *Author: sebastianh6r*  
   The voice mode inference runtime (`Microsoft.AI.Foundry.Local.Core`) fails to download behind corporate proxies. The installer doesn't respect proxy configuration, blocking enterprise adoption of voice features.  
   [View Issue](https://github.com/github/copilot-cli/issues/4083)

8. **[#4093] web_search tool returns fabricated (hallucinated) answers with no grounding**  
   *Author: dfrysinger*  
   The built-in AI-powered web search tool emits confident, detailed fabrications when retrieval fails, rather than reporting "no results." This is a trust-breaking behavior for any tool that presents answers as fact.  
   [View Issue](https://github.com/github/copilot-cli/issues/4093)

9. **[#4084/#4085] MCP OAuth client discovery: servers connect briefly then disconnect — tools never available**  
   *Author: Joachim-Ally-Skyline*  
   OAuth-protected MCP servers (Work IQ, custom SkylineApi) show green for ~90 seconds then drop. The OAuth flow initiates but is cancelled due to missing auth handler registration, leaving servers permanently in `needs-auth` limbo.  
   [View Issue #4084](https://github.com/github/copilot-cli/issues/4084) | [#4085](https://github.com/github/copilot-cli/issues/4085)

10. **[#4086] Atlassian MCP server auto-connects without completing OAuth flow (Sign in button disappears)**  
    *Author: Mov1ngTrg3t*  
    The Atlassian MCP server shows as connected without ever completing the browser OAuth flow—the "Sign in" button simply vanishes. No tools are loaded, and no error message is surfaced.  
    [View Issue](https://github.com/github/copilot-cli/issues/4086)

## Key PR Progress
1. **[#2565] install: guard against duplicate PATH entries on reinstall**  
   *Author: marcelsafin*  
   Fixes a common user-pain point: running the installer twice without restarting the shell appends duplicate PATH lines. The PR adds a check that prevents re-adding the path if it already exists.  
   [View PR](https://github.com/github/copilot-cli/pull/2565)

## Feature Request Trends
- **Session portability & sync:** Multiple requests (e.g., #4082) ask for cross-app session sync between Copilot CLI and the desktop app, including shared history and the ability to resume CLI sessions from the app UI.
- **MCP tooling reliability:** The dominant theme is making MCP OAuth flows work reliably—users want automatic token bridging, clear error states when OAuth fails, and tools that actually appear after successful connection.
- **Dynamic context in Skills:** Issue #4088 proposes a `!` command placeholder system for SKILL.md files, allowing skills to capture and inject command output as dynamic context—essentially turning skills into composable, programmable workflows.
- **Voice UX improvements:** Feature requests (#4090, #4092) push for push-to-talk auto-submit on spacebar release, and temporary system audio muting during voice capture to prevent microphone interference.

## Developer Pain Points
- **MCP OAuth token bridging is broken.** Four separate issues (#4084, #4085, #4086, #4089, #4096) all describe the same root failure: OAuth completes on one layer but tokens never reach CLI sessions. This is the single highest-frequency pain point this week.
- **Session data integrity is fragile.** Issues #4097 and #4098 reveal that session persistence can silently corrupt data (truncated JSONL, binary blobs) and that deletion is cosmetic only (#4094). Developers cannot trust that their session state is clean or deletable.
- **Corporate proxy configurations are ignored.** Issue #4083 shows that voice mode and potentially other runtime downloads fail behind proxies, locking out enterprise users from new features.
- **Plugin updates fail on Windows when VS Code is running.** Issue #4095 highlights a file-locking conflict that is easy to hit but hard to diagnose, especially for developers who keep their editor open continuously.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-12

## Today's Highlights
The past 24 hours saw active bug fixing and parity improvements across the project. A notable bug was reported where the `CHANGELOG.md` file incorrectly appears as a skill in autocomplete, confusing plugin configuration. Meanwhile, three critical pull requests landed targeting agent task duration tracking, ACP server MCP configuration loading, and string truncation accuracy — all submitted by community contributors.

## Releases
No new releases today.

## Hot Issues

1. **#2491 — Bug: `kimi-datasource` CHANGELOG.md incorrectly listed as a skill**  
   *Author: zhangleilaoge*  
   When typing `/skill`, the `CHANGELOG` file appears as an autocomplete option, pointing to a plugin's `CHANGELOG.md` instead of an actual skill definition. This violates documented plugin behavior and confuses users.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2491)

## Key PR Progress

1. **#2493 — Fix: record `started_at` for background agent tasks so duration is reported**  
   *Author: nankingjing*  
   Background agent tasks lacked `runtime.started_at`, causing all run durations to be silently lost. The fix adds the missing initialization, mirroring the existing bash worker behavior.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2493)

2. **#2492 — Fix: `shorten_middle` output exceeds target width by ellipsis length**  
   *Author: nankingjing*  
   String truncation did not account for the `"..."` ellipsis characters, producing output up to 3 characters longer than requested. A reproducible example shows the issue clearly.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2492)

3. **#2490 — Fix(acp): load global MCP config in `kimi acp` server**  
   *Author: nankingjing*  
   The multi-session ACP server (`kimi acp`) never loaded the user's globally-configured MCP servers, meaning ACP clients (Zed, JetBrains AI Assistant) only saw built-in tools. This creates a parity gap with interactive `kimi`. Fixes #2464.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2490)

4. **#1771 — Fix: always stringify tool message content in Chat Completions provider**  
   *Author: he-yufeng*  
   When a tool result had multiple `ContentPart`s, the OpenAI Chat Completions API received an array for `content` instead of a string, causing a 400 error. This PR ensures all tool messages are properly stringified.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1771)

5. **#1769 — Fix: graceful degradation when MCP server fails to connect**  
   *Author: he-yufeng*  
   An uncaught `MCPRuntimeError` during server startup (e.g., port conflicts between TUI and Web UI) crashed the worker and left the frontend stuck in "thinking" forever. This PR adds proper exception handling in `_agent_loop()`.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1769)

## Feature Request Trends
No new feature requests appeared in the last 24 hours. The community focus remains on correctness and reliability rather than new capabilities.

## Developer Pain Points
- **Reliability of MCP server connections**: Port conflicts between multiple sessions still cause silent failures, though PR #1769 addresses the crash aspect.
- **Parity between interactive and ACP modes**: The fact that global MCP configs load in `kimi` but not in `kimi acp` (PR #2490) points to a broader concern about configuration consistency across entry points.
- **String truncation inaccuracies**: The `shorten_middle` bug (PR #2492) indicates that even basic utility functions may have hidden edge cases under active use.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-12

## Today's Highlights

The OpenCode community is buzzing with the rollout of GPT-5.6 family support, as multiple issues and PRs surface around model name resolution, reasoning effort limits, and OAuth context window discrepancies. Performance remains a dominant theme, with long-standing high-CPU complaints (Issues #30086, #19466) still unresolved. The V2 TUI overhaul continues to generate targeted bug reports and cleanup PRs, particularly around config loading and event logging.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#36140 — GPT-5.6 Luna returns model not found with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)** — *71 👍, 16 comments*  
   Open: Popular model `gpt-5.6-luna` fails with HTTP 404 via ChatGPT OAuth, despite being listed in the provider. Community upvoting signals strong demand for immediate fix.

2. **[#30086 — High CPU usage in newer versions of OpenCode](https://github.com/anomalyco/opencode/issues/30086)** — *13 👍, 24 comments*  
   Open: Users report CPU spikes since ~7 days ago, with 3 sessions now taxing machines that previously handled 10. A companion issue (#4804, closed) may have been related but the problem persists.

3. **[#19466 — opencode is using CPU for doing nothing!](https://github.com/anomalyco/opencode/issues/19466)** — *11 👍, 14 comments*  
   Open: Demonstrates ~50% single-core usage while waiting on API rate limits, suggesting an idle-loop issue rather than computation.

4. **[#8816 — FEATURE: provide llms.txt and docs as markdown](https://github.com/anomalyco/opencode/issues/8816)** — *35 👍, 16 comments*  
   Open: Request for a standardized `llms.txt` file and docs map so LLM-based tools can easily consume OpenCode documentation. Strong community interest.

5. **[#29548 — OpenAI provider headers timeout after 10000ms on 1.15.11](https://github.com/anomalyco/opencode/issues/29548)** — *4 👍, 12 comments*  
   Open: Regression from 1.14.28 to 1.15.11 where `headerTimeout` needs manual increase. Workaround exists but indicates a deployment oversight.

6. **[#22132 — OpenCode 1.4.3 hangs with local Ollama provider](https://github.com/anomalyco/opencode/issues/22132)** — *5 👍, 12 comments*  
   Open: Local inference via Ollama hangs on simple prompts while direct API calls work fine. Hinders offline/self-hosted usage.

7. **[#36141 — GPT-5.6 models missing max reasoning effort variant](https://github.com/anomalyco/opencode/issues/36141)** — *8 👍, 5 comments*  
   Open: OpenAI's `reasoning_options` for GPT-5.6 include `max`, but OpenCode only exposes up to `xhigh`. Impacts power users seeking maximum reasoning depth.

8. **[#36247 — GPT-5.6 Codex OAuth uses 1.05M metadata instead of 500k total](https://github.com/anomalyco/opencode/issues/36247)** — *0 👍, 4 comments*  
   Open: Direct API limits leak through Codex OAuth, enabling larger context windows than the Codex backend supports. Could cause silent truncation downstream.

9. **[#36465 — "Revert message" should not modify code](https://github.com/anomalyco/opencode/issues/36465)** — *0 👍, 4 comments*  
   Open: Accidental revert on old conversations broke Git state. The revert action is not clearly scoped to messages vs. code changes.

10. **[#36260 — opencode upgrade fails with 403 Forbidden due to GitHub API Rate Limit](https://github.com/anomalyco/opencode/issues/36260)** — *0 👍, 2 comments*  
    Open: `opencode upgrade` doesn't support `GITHUB_TOKEN`/`GH_TOKEN` env vars, causing authenticated IP blocks for CI/headless environments.

## Key PR Progress

1. **[#36484 — refactor(server): share event stream encoding](https://github.com/anomalyco/opencode/pull/36484)** — Open, by kitlangton  
   Enables single encoding per event for all connected TUI/API clients, reducing CPU overhead for multi-client setups.

2. **[#35985 — fix(provider): derive reasoning variants from models.dev](https://github.com/anomalyco/opencode/pull/35985)** — Open, by rekram1-node  
   Shares provider-specific effort and budget mappings across Core, directly addressing the GPT-5.6 reasoning variant gap (see #36141).

3. **[#36477 — fix(core): settle malformed tool input on failure](https://github.com/anomalyco/opencode/pull/36477)** — Closed, by kitlangton  
   Prevents duplicate failure appearances in transcript when tool JSON is malformed — improves error reporting clarity.

4. **[#36479 — fix(tui): lower durable event log level](https://github.com/anomalyco/opencode/pull/36479)** — Closed, by kitlangton  
   Reduces shared log bloat from N× event duplication when multiple TUIs are connected.

5. **[#36476 — fix(opencode): plugin/openai add GPT-5.6 family](https://github.com/anomalyco/opencode/pull/36476)** — Open, by dalisoft  
   Adds new GPT-5.6 model names to the built-in model list, intended to fix #36140 and #36427.

6. **[#36475 — fix(cli): keep update preflight through TUI loading](https://github.com/anomalyco/opencode/pull/36475)** — Closed, by kitlangton  
   Eliminates blank terminal during TUI startup by keeping the preflight renderer alive until initialization is complete.

7. **[#36466 — fix(cli): load v2 tui config](https://github.com/anomalyco/opencode/pull/36466)** — Closed, by opencode-agent[bot]  
   Fixes V2 TUI ignoring `tui.json` leader-key settings (closes #36458).

8. **[#36471 — feat(tui): paste clipboard on right click](https://github.com/anomalyco/opencode/pull/36471)** — Open, by aditya-vithaldas  
   Adds right-click paste in TUI when mouse capture is enabled, improving UX for terminal users.

9. **[#35405 — fix(llm): unflatten Gemini tool call args with dot-bracket notation](https://github.com/anomalyco/opencode/pull/35405)** — Open, by kagura-agent  
   Fixes Gemini-specific tool call flattening issue where nested arguments were malformed.

10. **[#35866 — docs: update xAI branding to SpaceXAI](https://github.com/anomalyco/opencode/pull/35866)** — Open, by devinoldenburg  
    Updates branding across provider labels, OAuth methods, and model catalog to reflect SpaceXAI naming.

## Feature Request Trends

Three distinct feature directions dominate current requests:

- **Model & Provider Enhancements**: Users want automated zero-cost model selection (`--model free`, #21863), anonymized conversation sharing to improve open models (#35303), and standardized `llms.txt` docs for LLM tooling (#8816). The GPT-5.6 gap shows demand for thorough model family coverage.

- **Session & UX Improvements**: Requested features include a session picker on startup (`-r`/`--resume`, #36134), ANSI bell notifications for model/user acknowledgment (#36472), and opt-in data sharing for provider improvement (#35303). Community directory for finding collaborators (#36460) shows interest in social features.

- **Performance & Resource Control**: The recurring high-CPU theme (#30086, #19466) and the multiple-TUI event duplication (#36283, #36446) point to a desire for efficient resource usage, especially in collaborative or multi-session workflows.

## Developer Pain Points

The top recurring developer frustrations this week:

- **Performance regressions** — High CPU usage in newer versions (#30086, #19466) and timeout regressions (#29548) erode trust in updates. The CPU issues appear idle-loop related rather than algorithmic.

- **GPT-5.6 rollout friction** — Model not found errors (#36140), missing reasoning variants (#36141), and incorrect context windows (#36247) suggest the provider abstraction layer isn't keeping pace with upstream changes.

- **Logging and debugging** — `--log-level DEBUG` silently fails after log rotation (#17846), and multi-TUI event duplication (#36283, #36446) makes debugging production setups harder.

- **Upgrade and config fragility** — `opencode upgrade` hitting GitHub API limits (#36260), V2 TUI ignoring `tui.json` config (#36458, #36485), and malformed config parsing (#36468) suggest CI/CD and headless environments need more robust tooling.

- **Local/Ollama providers** — Hangs with local Ollama (#22132) and missing zero-cost model discovery (#21863) limit the appeal for offline or budget-constrained users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-12

## Today's Highlights
The past 24 hours saw intensive activity around GPT-5.6 model support, with three PRs and multiple issues addressing the new Sol/Terra/Luna variants across GitHub Copilot, OpenAI Codex, and OpenAI Responses providers. A critical bug fix prevents tool results from attaching to wrong branches after tree navigation, while several infrastructure improvements tackle extension API exposure and Node CLI startup performance.

## Latest Releases
No new releases in the last 24 hours.

---

## Hot Issues

### 1. GPT-5.6 Thinking Level Support (#6097)
**Closed** — Request to add `max` thinking level support for GPT-5.6 Sol's new sixth tier, similar to Anthropic Opus. Community strongly upvoted (18 👍), signaling high demand for the latest model capabilities.
- [Issue #6097](https://github.com/earendil-works/pi/issues/6097)

### 2. GPT-5.6 Copilot Provider Registration (#6475)
**Closed** — Adds `gpt-5.6-sol`, `gpt-5.6-terra`, `gpt-5.6-luna` to GitHub Copilot provider catalog. Promptly merged with community enthusiasm (8 👍).
- [Issue #6475](https://github.com/earendil-works/pi/issues/6475)

### 3. Ctrl+P Should Show Previous Prompt (#6456)
**Closed** — Users migrating from Codex/Claude expected Unix-like behavior where Ctrl+P navigates previous input. Instead, Pi changed the model selection, surprising experienced CLI users.
- [Issue #6456](https://github.com/earendil-works/pi/issues/6456)

### 4. Compaction Bypasses Disabled Setting (#6472)
**Closed** — Setting `compaction.enabled: false` did not fully disable auto-compaction; the overflow recovery path bypassed the check. Important reliability fix for users who manually manage context.
- [Issue #6472](https://github.com/earendil-works/pi/issues/6472)

### 5. Tool Result Attaches to Wrong Branch (#6558)
**Closed** — If `/tree` changes the active branch while a tool is running, the returned `toolResult` appended to the wrong branch, creating orphaned results and subsequent provider rejection.
- [Issue #6558](https://github.com/earendil-works/pi/issues/6558)

### 6. Windows Terminal Scroll-to-Top on TUI Redraw (#6502)
**Open** — `\x1b[3J` escape sequence in `pi-tui` clears scrollback buffer, causing Windows Terminal to repeatedly jump to top during normal redraws. Affects all Windows users of the TUI.
- [Issue #6502](https://github.com/earendil-works/pi/issues/6502)

### 7. Extension Import Fails for TypeBox/Schema (#6512)
**Closed** — Extension developers hit `Cannot find module 'typebox'` when building for Pi, as the module path is not resolved through the extension loader. Blocks third-party extension development.
- [Issue #6512](https://github.com/earendil-works/pi/issues/6512)

### 8. GitHub Copilot "Auto" Pseudo-Model (#6550)
**Closed** — Copilot Student/Free tiers now force "Auto model" selection, removing ability to pick specific models. Request to add a `github-copilot/auto` pseudo-model to Pi's built-in provider.
- [Issue #6550](https://github.com/earendil-works/pi/issues/6550)

### 9. Codex WebSocket Retains Previous Account (#6513)
**Open** — Cached WebSocket keyed only by session ID can reuse the previous account's authenticated socket after credential change, routing requests through the wrong account. Data leakage concern.
- [Issue #6513](https://github.com/earendil-works/pi/issues/6513)

### 10. GPT-5.6 Prompt Cache Options (#6529)
**Closed** — Request to send `prompt_cache_options: { mode: "implicit", ttl: "30m" }` for GPT-5.6 models in the OpenAI Responses API, enabling proper prompt caching for the new model family.
- [Issue #6529](https://github.com/earendil-works/pi/issues/6529)

---

## Key PR Progress

### 1. Fix Tree Navigation with Pending Tools (#6559)
**Merged** — Prevents `/tree` from switching branches while an agent or tool is running. Users must cancel navigation or abort the active run first, preventing tool result misattribution (fixes #6558).
- [PR #6559](https://github.com/earendil-works/pi/pull/6559)

### 2. Expose Codex Responses API to Extensions (#6556)
**Merged** — Makes the OpenAI Codex responses API subpath (`closeOpenAICodexWebSocketSessions`) available through extension loader aliases and Bun virtual modules, enabling extension developers to manage WebSocket sessions.
- [PR #6556](https://github.com/earendil-works/pi/pull/6556)

### 3. Add Developer Message Role (#6534)
**Open** — Experimental PR adding a `developer` message role based on RFC 54 findings. Enables more structured prompting patterns.
- [PR #6534](https://github.com/earendil-works/pi/pull/6534)

### 4. Add Deferred Extension Reload Requests (#6551)
**Merged** — Adds `ExtensionContext.requestReload()` so tools and event handlers can request canonical reloads at safe points. Works in interactive and RPC modes.
- [PR #6551](https://github.com/earendil-works/pi/pull/6551)

### 5. OpenRouter Session Affinity (#6496)
**Open** — Sends session identification in OpenRouter-specific headers for sticky sessions and prompt caching support. Aligns with OpenRouter best practices.
- [PR #6496](https://github.com/earendil-works/pi/pull/6496)

### 6. Fix Codex Compaction for gpt-5.6-luna (#6533)
**Open** — Compaction through OpenAI Codex API fails with 404 for gpt-5.6-luna because the API internally maps model IDs to slug variants unrecognized by the no-tools registry.
- [PR #6533](https://github.com/earendil-works/pi/pull/6533)

### 7. Route Copilot MAI-Code Models Through /responses (#6544)
**Open** — Fixes `mai-code-1-flash-picker` not being accessible via `/chat/completions`. Routes these models through the correct Copilot `/responses` endpoint.
- [PR #6544](https://github.com/earendil-works/pi/pull/6544)

### 8. Cut Node CLI Startup Cost (#6530)
**Merged** — Fast-paths `--version`/`-v` before loading main modules, and moves Bun-only extension virtual module imports to the Bun entry only. Significant startup time reduction for Node CLI users.
- [PR #6530](https://github.com/earendil-works/pi/pull/6530)

### 9. Surface Provider Errors to LLM (#6540)
**Merged** — Makes provider errors (context overflow, retry exhaustion, compaction failure) visible to the LLM via advisory injection, preventing silent failures from dropping the LLM's awareness.
- [PR #6540](https://github.com/earendil-works/pi/pull/6540)

### 10. Constrained Sampling Support (#6341)
**Open** — Opt-in `constrainedSampling` config enabling JSON-schema constrained tool input generation on supported provider backends.
- [PR #6341](https://github.com/earendil-works/pi/pull/6341)

---

## Feature Request Trends

The most-requested feature directions from recent issues include:

- **GPT-5.6 Ecosystem Expansion** — Multiple requests for Copilot provider registration, OpenAI Responses support, prompt caching options, and Responses Lite payloads for the new model family.
- **Extension API Enhancements** — Requests for compaction hooks (before queued messages are drained), deferred reload capabilities, opaque attachment fields in RPC commands, and proper API subpath exposure for extensions.
- **TUI/UX Improvements** — Better Ctrl+P behavior (previous input navigation), wrapped option descriptions in SelectList, context impact visibility per extension in configuration.
- **Provider Integration Depth** — New provider requests (LLM Gateway), pseudo-models for auto-selection surfaces, and proper session affinity/sticky routing for OpenRouter.
- **Developer Tooling** — `/goal` extension example (autonomous multi-turn execution), constrained sampling for tool calls, and message-anchored dynamic tool loading.

---

## Developer Pain Points

- **Extension Development Friction** — Module resolution failures (`typebox/schema` not found), API subpaths unavailable through the loader, and non-obvious extension reload mechanics create high barriers for third-party developers.
- **Windows Compatibility Issues** — Terminal scroll jumping due to scrollback-clearing escape sequences remains an unaddressed UI-breaking bug for Windows users.
- **Configuration Bypass Bugs** — Settings like `compaction.enabled=false` being silently ignored by overflow recovery paths undermines user trust in configuration controls.
- **Session Credential Confusion** — Cached WebSockets retaining stale account authentication, coupled with non-persistent CLI option flags (tools, system prompt) on session resume, creates subtle data routing and behavioral issues.
- **GPT-5.6 Integration Gaps** — Multiple simultaneous issues across providers (Copilot, OpenAI Codex, OpenAI Responses) highlight the difficulty of keeping pace with rapid model releases across all supported backends.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-12

## Today's Highlights

The community is focused on stabilizing the multi-workspace daemon architecture, with a flurry of RFCs, bug fixes, and PRs around session recovery, workspace persistence, and daemon channel control. The `web-tree-sitter` lazy-loading PR promises startup performance improvements, while issues around model token limits for Claude Opus 4.x and JSONL write durability are drawing urgent attention.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6378 RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** — 20 comments. The most active discussion, this RFC proposes a new daemon architecture supporting N workspaces. Critical for enterprise adoption. Community is debating migration paths and backward compatibility.

2. **[#6565 "Bad! Connecting to Qwen Coder had issues. Internal Error"](https://github.com/QwenLM/qwen-code/issues/6565)** — 11 comments. Multi-language error (Chinese/Japanese/English) causing connection failures. Closed as `need-information`, but the high engagement suggests it's affecting a broad user base.

3. **[#6581 JetBrains ACP agent does not receive user prompt](https://github.com/QwenLM/qwen-code/issues/6581)** — 8 comments. A critical IDE integration bug where user prompts aren't forwarded when using Ollama as backend. Forces IDE users back to terminal workflow.

4. **[#6721 Keep deferred tool discovery from invalidating prompt cache prefixes](https://github.com/QwenLM/qwen-code/issues/6721)** — 4 comments. Exposes a caching architecture issue where tool discovery pollutes prompt cache prefixes, degrading performance over time. A PR is already live.

5. **[#6487 Memory index stale after /remember; memory content lost on compaction](https://github.com/QwenLM/qwen-code/issues/6487)** — 3 comments. Two distinct memory degradation bugs: stale index after `/remember` and content loss during compaction. Long-session users are affected.

6. **[#6666 qwen 3.7 max model returns <think> tags in content instead of reasoning_content](https://github.com/QwenLM/qwen-code/issues/6666)** — 3 comments. Model compliance issue where reasoning content leaks into the response body, breaking downstream parsing.

7. **[#6726 Daemon restart drops workspaces registered from Web Shell](https://github.com/QwenLM/qwen-code/issues/6726)** — 2 comments. Dynamically-added workspaces are ephemeral; daemon restart loses them all. Directly impacts the multi-workspace RFC's practical use.

8. **[#6632 Automations "+" Add button hit area misaligned](https://github.com/QwenLM/qwen-code/issues/6632)** — 3 comments. Simple but annoying UI bug: click target offset from visual button. Signals a need for better UI testing coverage.

9. **[#6702 feat(web-shell): add git branch display button in composer toolbar](https://github.com/QwenLM/qwen-code/issues/6702)** — 2 comments. UX request to show current git branch in the composer, preventing accidental operations on wrong branches. Community is positive.

10. **[#6744 feat(web-shell): support custom Hex colors for named session groups](https://github.com/QwenLM/qwen-code/issues/6744)** — 1 comment. Low-traffic but reveals demand for richer session organization—users want more than 6 preset colors.

## Key PR Progress

1. **[#6723 fix(prompt-cache): stabilize deferred tool calls](https://github.com/QwenLM/qwen-code/pull/6723)** — Direct fix for #6721. Keeps provider tool declarations stable by returning schemas as model-visible content instead of promoting them to function-level declarations.

2. **[#6727 fix(acp): preserve explicit cancellation across restore](https://github.com/QwenLM/qwen-code/pull/6727)** — Adds durable user-intent boundaries so cancelled turns aren't confused with interrupted ones after daemon restart.

3. **[#6638 feat(serve): add extension management v2](https://github.com/QwenLM/qwen-code/pull/6638)** — Major architecture change: extensions become user-level artifacts scoped per workspace via activation policy. Opens gate for multi-workspace extension isolation.

4. **[#6725 feat(web-shell): show current git branch in composer toolbar](https://github.com/QwenLM/qwen-code/pull/6725)** — Implements #6702. A read-only git branch indicator that updates on branch change. Simple but high-impact UX improvement.

5. **[#6703 feat(web-shell): add session created callback](https://github.com/QwenLM/qwen-code/pull/6703)** — Enables post-creation customization (model, approval mode) before first prompt. Important for integration scenarios.

6. **[#6096 feat(tool): add opt-in zvec-grep search tool](https://github.com/QwenLM/qwen-code/pull/6096)** — Adds semantic + regex search tool using zvec_grep. Could significantly improve code discovery for large codebases.

7. **[#6747 perf(core): lazy-load web-tree-sitter runtime](https://github.com/QwenLM/qwen-code/pull/6747)** — Static import → dynamic import change. Reduces startup time for users who don't need tree-sitter immediately.

8. **[#6628 feat(core): add configurable default timeout for foreground shell commands](https://github.com/QwenLM/qwen-code/pull/6628)** — New `tools.shell.defaultTimeoutMs` setting. Lets users tune command timeout without per-call overrides.

9. **[#6741 feat(cli): Add runtime daemon channel control](https://github.com/QwenLM/qwen-code/pull/6741)** — Complete lifecycle management for daemon channels via HTTP endpoints, SDK, or CLI. Enables hot-switching without daemon restart.

10. **[#6743 fix: Make chat recording failures durable and visible](https://github.com/QwenLM/qwen-code/pull/6743)** — Fix for #6742. Ensures JSONL write failures are reported to the recorder and not silently dropped in the async queue.

## Feature Request Trends

- **Multi-Workspace Daemon Architecture**: The dominant theme, with RFC #6378, workspace removal PR #6745, and session organization issues #6646. Users want one daemon to manage many isolated projects.
- **Web Shell Composer Toolbar Enhancements**: Multiple requests (#6699, #6702) for workspace switching, execution context, and git branch visibility—mirroring Codex desktop UI patterns.
- **Session Recovery & Durability**: Issues #6730, #6710, #6695 show demand for automatic interrupted-turn recovery, explicit cancellation preservation, and unified crash recovery services.
- **Streaming/Hook Events**: #6488 requests mid-turn streaming hook events (CLI + ACP), indicating users want real-time integration with external tooling.
- **Custom Session Organization**: #6744 (custom hex colors for groups) signals desire for richer visual organization beyond default presets.

## Developer Pain Points

- **Memory Degradation in Long Sessions**: Issues #6487 and #6713 describe independent mechanisms where memory content goes stale or gets cleared by microcompaction. Heavy users are losing context.
- **API Model Compatibility Issues**: Multiple reports (#6666, #6670, #6734, #6719) about DashScope and Anthropic API behavior—empty responses, wrong token limits, reasoning fields in wrong places. Tooling is fragile across model providers.
- **Daemon State Volatility**: #6726 (workspaces lost on restart) and #6710 (cancel/interrupt indistinguishability) create real workflow friction for daemon users.
- **Clipboard/Paste on macOS**: #6590 reveals a missing native module in standalone macOS builds, breaking Ctrl+V for images—a regression for users relying on paste functionality.
- **MCP OAuth Frustration**: #6639 shows MCP servers returning 401 don't trigger automatic OAuth recovery, leaving servers permanently "offline." Lack of transparent auth handling is a barrier for HTTP-transport MCP adoption.
- **IDE Integration Bugs**: #6581 (JetBrains ACP prompt loss) and #6536 (serialized @ references in WebShell) show that integration polish is lagging behind core CLI functionality.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-12

## Today's Highlights

The project continues rapid iteration with 10+ PRs daily, today focusing on **provider-specific cost accounting** (#4351, #4348) and **Anthropic API compatibility fixes** (#4346, #4329). A notable **Korean locale** i18n contribution (#4347) and **NetBSD build support** (#4349) expand the platform reach, while the maintainer is investigating **post-cancellation RSS growth** (#4326) from the 32-worker storm benchmark.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#4329] Anthropic API error** — HTTP 400 due to `tool_use` blocks without corresponding `tool_result` blocks. Community notes this blocks workflows using Anthropic as the provider. 4 comments, still open.
   https://github.com/Hmbown/CodeWhale/issues/4329

2. **[#4326] Perf: RSS not settling after 32-worker cancellation** — Maintainer reports high fan-out responsiveness but post-cancel RSS doesn't drop. Distinguishes allocator high-water from real leak. 1 comment.
   https://github.com/Hmbown/CodeWhale/issues/4326

3. **[#4350] Cargo build fails on Android Termux** — `rquickjs` lacks bindings for `aarch64-linux-android`. Cross-compilation blocker for mobile users. 1 comment.
   https://github.com/Hmbown/CodeWhale/issues/4350

4. **[#4345] API key UX unfriendly** — User reports key entry cannot be done within terminal, requiring external input. 2 comments, Chinese-language discussion.
   https://github.com/Hmbown/CodeWhale/issues/4345

5. **[#4227] CodeWhale dev environment workflow** — Proposal for a skill/workflow to auto-setup and rebuild CodeWhale environment aligned with `main`, addressing 10+ PR/day velocity. 5 comments.
   https://github.com/Hmbown/CodeWhale/issues/4227

## Key PR Progress

1. **[#4351] fix(scorecard): bind costs to provider routes** — Accepts `provider`/`effective_provider` provenance for offline scorecard records. Resolves USD costs from exact `(provider, wire_model_id)` catalog, handling Codex OAuth, local/self-hosted, and unpriced gateways.
   https://github.com/Hmbown/CodeWhale/pull/4351

2. **[#4348] fix(tui): bill Anthropic cache-write tokens at published rates** — Maps `cache_creation_input_tokens` to `Usage::prompt_cache_write_tokens`, extends `CurrencyPricing` with `cache_write_per_million`, and publishes 5-minute write rates for Anthropic/Qwen.
   https://github.com/Hmbown/CodeWhale/pull/4348

3. **[#4346] fix: sanitize tool input_schema for Anthropic adapter** — Strips top-level `oneOf`/`anyOf`/`allOf` from `input_schema` to avoid HTTP 400 rejections. Fixes the root cause of #4329.
   https://github.com/Hmbown/CodeWhale/pull/4346

4. **[#4347] i18n: add Korean (ko) locale support** — Adds `crates/tui/locales/ko.json` with all 752 leaf keys translated. Aims to improve accessibility for Korean-speaking users.
   https://github.com/Hmbown/CodeWhale/pull/4347

5. **[#4349] Update Cargo.toml to allow build under NetBSD** — Generates `rquickjs` bindings for NetBSD, with notes that FreeBSD/OpenBSD/DragonFly also missing. Enables BSD platform support.
   https://github.com/Hmbown/CodeWhale/pull/4349

## Feature Request Trends

- **Provider-specific cost accounting** — Multiple PRs (#4351, #4348) address the need to accurately track and display costs per provider/model, including cache operations.
- **Multi-platform support** — Issues and PRs target Android (Termux), NetBSD, and other non-Linux platforms, showing demand for broader deployment.
- **i18n expansion** — Korean translation (#4347) follows previous locale additions, suggesting a pattern of community-driven localization.
- **Subagent workflow automation** — Issue #4227 requests a workflow to auto-rebuild and test the CodeWhale environment, indicating developer demand for CI/CD integration.

## Developer Pain Points

- **Anthropic API incompatibilities** — Two active issues (#4329, #4346) and a PR (#4346) focus on HTTP 400 errors from strict schema validation and missing `tool_result` blocks.
- **Resource management after cancellation** — Issue #4326 reveals that cancelling high-fan-out workers does not release RSS, requiring investigation into allocator vs. leak behavior.
- **Cross-platform build friction** — Android Termux users (#4350) and BSD users (#4349) face missing pre-generated bindings, forcing manual generation.
- **API key UX** — User feedback (#4345) indicates the key entry process is not terminal-friendly, suggesting a need for interactive input or environment variable support.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*