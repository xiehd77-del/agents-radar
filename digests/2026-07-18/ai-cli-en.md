# AI CLI Tools Community Digest 2026-07-18

> Generated: 2026-07-18 02:38 UTC | Tools covered: 9

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

## AI CLI Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-07-18

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing a maturation phase characterized by three simultaneous pressures: **security hardening** across permission systems and authentication flows, **platform expansion** particularly toward Windows stability and ARM64 native support, and **agent governance** as users demand deterministic, auditable behavior from increasingly autonomous subagents. The ecosystem spans six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and DeepSeek TUI—each at different stages of maturity but converging on shared concerns around model provider flexibility, TUI reliability, and session state management. Notably, no tool has achieved dominant market position; instead, developers are experimenting with multiple tools for different workflows, driving demand for interoperability and portable configuration.

---

## 2. Activity Comparison (24-hour window, 2026-07-18)

| Tool | New Issues | Active PRs | Release Status | Community Heat (Top Issue 👍) |
|---|---|---|---|---|
| Claude Code | 10+ | 10 (all open) | ✅ v2.1.214 (patch, security fixes) | 277 (paste preview) |
| OpenAI Codex | 10+ | 10 (merged) | 🔄 3 alpha builds (0.145.0) | 782 (Linux desktop app) |
| Gemini CLI | 10+ | 10 (5 merged, 5 open) | ✅ v0.52.0-nightly | 11 (false GOAL success, P1) |
| GitHub Copilot CLI | 11 new | 0 | ✅ v1.0.72-1 (patch) | 14 (multi-root workspace) |
| Kimi Code | 3 active | 1 (open) | ❌ No new release | 13 (K2.5 vs K2.6) |
| OpenCode | 10+ active | 10 (all open) | ❌ No new release | 182 (model auto-discovery) |
| Pi | 50+ updated | 10 (5 merged) | ❌ No new release | 5 (markdown API) |
| Qwen Code | 10+ active | 10 (9 merged) | ✅ v0.19.11-nightly | 29 (multi-workspace RFC) |
| DeepSeek TUI | 10+ active | 10 (7 merged) | ❌ v0.9.3 feature branch | 35 (agent constitution) |

**Key Observations:**
- **OpenAI Codex** commands the highest community engagement (782 👍 for Linux desktop), but also the most severe Windows stability crisis (15+ Windows-specific bugs).
- **Claude Code** and **Gemini CLI** are the most security-conscious, both shipping critical permission fixes this week.
- **GitHub Copilot CLI** shows the largest gap: 11 new issues but 0 PRs, suggesting a bottleneck in fix velocity.
- **Pi** and **Qwen Code** demonstrate the highest PR merge velocity, indicating active development cycles.

---

## 3. Shared Feature Directions

| Shared Requirement | Tools Expressing Demand | Specific Needs |
|---|---|---|
| **Per-agent model routing** | Claude Code, OpenCode, Gemini CLI, Qwen Code | Route subagents to different providers (local Ollama, Anthropic, custom endpoints); session-wide config is insufficient |
| **Model auto-discovery from endpoints** | OpenCode (#6231, 182👍), Kimi Code, Pi | Introspect OpenAI-compatible endpoints (LM Studio, Ollama) instead of manual model lists |
| **Multi-workspace / session isolation** | Qwen Code (#6378), DeepSeek TUI, Claude Code | Isolated project contexts, workspace-scoped APIs, persistent daemon sessions |
| **Agent governance & containment** | DeepSeek TUI (#4032, #3275), Claude Code, Gemini CLI, GitHub Copilot CLI | Hard tool-call budgets, write-first constraints, explicit user confirmation before autonomous execution |
| **Platform expansion (Windows ARM64, Linux)** | OpenAI Codex (#11023, 782👍), DeepSeek TUI (#4506), Claude Code | Native Linux desktops, Windows ARM64 binaries, Termux/Android support |
| **TUI reliability & rendering fixes** | Pi (CPU pegging), Qwen Code (tall code blocks), DeepSeek TUI (cursor ghosts), Kimi Code (list wrapping) | Grapheme segmentation caching, CJK support, CRLF handling, streaming rendering stability |
| **Memory/context management improvements** | Claude Code (kernel zone leaks), OpenCode (infinite compaction), Gemini CLI (Auto Memory retries), Copilot CLI (zombie processes) | Compaction retry logic, bounded context growth, transparent token usage |
| **Plugin ecosystem maturity** | OpenCode (#5305), Claude Code (hookify rules), GitHub Copilot CLI (plugin lifecycle) | TUI command hooks, plugin manifest standardization, trust separation |
| **Secret/payment UX** | Claude Code (PaymentIntent void), Pi (Copilot pricing), all tools | OS-native masked input, transparent cost display, billing reliability |
| **Keybinding customization** | Claude Code (left-arrow issue), GitHub Copilot CLI (vim shortcuts), DeepSeek TUI (Vim mode conflicts) | Rebindable hotkeys, non-US keyboard support, IME compatibility |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary Model** | Anthropic Claude | OpenAI GPT | Google Gemini | OpenAI/GitHub Copilot | Moonshot Kimi | Multi-provider | Multi-provider | Qwen | DeepSeek + multi-provider |
| **Target User** | Power developers, security-sensitive | Desktop-focused, remote control | Google ecosystem, enterprise | GitHub ecosystem, CI/CD | Chinese market, enterprise data | Open-source enthusiasts, plugin developers | Hackers, multi-provider switchers | Daemon/server workflows, CI | FOSS community, multi-platform |
| **Platform Priority** | macOS (leaking kernel zones) | Windows (stability crisis) | macOS (Seatbelt hardening) | Windows (plugin/permission issues) | Linux (TUI bugs) | Cross-platform (Desktop UI) | Cross-platform (TUI performance) | Linux/daemon (webshell) | Windows ARM64, HarmonyOS |
| **Key Technical Strength** | Permission system, agent routing | Desktop features, remote control | LLM triage, security hardening | Plugin lifecycle, voice mode | Enterprise data plugins | Plugin ecosystem, model flexibility | Provider diversity, rapid fixes | Daemon architecture, CI integration | Platform breadth (ARM64, OHOS) |
| **Key Technical Weakness** | macOS kernel memory leaks | Windows process management | Subagent false success reports | Zombie process leaks | Model regression (K2.6) | New UI regressions | TUI CPU pegging | VS Code Companion failures | Agent overreach |
| **Security Posture** | Strong (active CVE fixes) | Moderate (process leaks) | Strong (GHSA patches) | Moderate (permission bypass) | Weak (intranet dependencies) | Moderate | Moderate | Moderate | Moderate |
| **Community Character** | Vocal, security-aware | High-volume, Windows-focused | Enterprise, evaluation-focused | Rapid issue filing, slow fixes | Small, frustrated | Plugin-hungry, model-flexible | Rapid iteration, multi-provider | Daemon/server focused | Agent governance advocates |

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid iteration, high PR throughput)
- **Qwen Code**: 9/10 PRs merged in 24h, nightly releases, active RFC process (multi-workspace). Strongest signal of organized development velocity.
- **Pi**: ~50 issues and ~22 PRs updated, rapid fix turnaround (5/10 PRs merged). Community is engaged and the maintainer is responsive.
- **DeepSeek TUI**: 7/10 PRs merged, Windows ARM64 artifacts shipping, active feature work. Despite small team, showing strong platform expansion.

### Moderate Momentum (Active but slower release cadence)
- **Claude Code**: Regular patch releases (v2.1.214), but PaymentIntent bug (76 comments, 2 months old) indicates infrastructure fix bottlenecks. Strong security focus.
- **OpenCode**: Deep community engagement (182👍 issue), but no release in 24h. New Desktop UI regressions suggest rollout turbulence.
- **Gemini CLI**: Merged P1 security fixes (ReAct loops, Seatbelt profiles), but P1 subagent false-report bug remains open. Enterprise-grade but slower.

### Stalled / Maturing (Low PR velocity, accumulating debt)
- **OpenAI Codex**: High community demand (782👍) but 15+ open Windows bugs and post-update regressions. Alpha releases without changelogs suggest internal instability.
- **GitHub Copilot CLI**: 11 new issues, 0 PRs merged. Critical regressions (zombie processes, Gemini failures, Windows hangs) with no fix velocity. Highest gap between issue filing and resolution.
- **Kimi Code**: No releases, 1 small PR, 3-month-old model regression unresolved. Lowest activity of any tool, suggesting potential abandonment or major internal restructuring.

---

## 6. Trend Signals

### Industry Trends for AI CLI Tool Developers

1. **Security hardening is table stakes, not differentiation**: Claude Code (v2.1.214) and Gemini CLI (PR #28403, #28345) both shipped permission bypass fixes and ReAct loop mitigations this week. After a year of rapid feature growth, tools are now paying down security debt. Developers should expect permission systems, glob patterns, and variable expansion to be the next attack surface.

2. **Agent autonomy is the #1 user trust issue**: DeepSeek TUI (#4032 "not following constitution"), Gemini CLI (#22323 false GOAL success), and Copilot CLI (#4156 misclassified destructive operations) all reflect the same pattern: agents are too autonomous, too presumptuous, and too opaque. The market is shifting from "give me more automation" to "give me auditable, bounded automation with escape hatches."

3. **Windows is the critical battleground**: OpenAI Codex (15+ Windows bugs), Copilot CLI (Windows hangs, permission errors), DeepSeek TUI (ConPTY corruption, process leaks), and Claude Code (PowerShell bypass fix) all indicate Windows remains the weakest platform. Tools that solve Windows reliability will capture the largest enterprise developer audience.

4. **Model provider convergence is accelerating**: Every major tool now supports multiple model providers, but the pain points are shifting: per-agent routing (Claude Code, OpenCode), model auto-discovery (OpenCode #6231), and cost transparency (Pi #6725 Copilot pricing). The unit of competition is no longer "which model" but "which routing and cost-control infrastructure."

5. **Multi-workspace and session persistence are emerging as enterprise requirements**: Qwen Code's multi-workspace RFC (29 comments), OpenCode's SSH tunneling demand (73👍), and Claude Code's session context requests signal that individual CLI sessions are insufficient for team and CI/CD workflows. The next wave will be daemon-based, persistent, workspace-aware architectures.

6. **TUI quality is a hygiene factor, not a differentiator**: Five of nine tools have active TUI rendering bugs (CPU pegging, cursor ghosts, CRLF corruption, tall code blocks). Users tolerate terminal limitations but not regressions. Tools that cannot maintain basic rendering reliability will lose users to alternatives.

7. **Plugin ecosystem lock-in is beginning**: OpenCode (#5305 plugin TUI hooks), Claude Code (hookify rule engine), and Copilot CLI (plugin lifecycle management) are building moats through plugin architectures. Third-party developers should watch which plugin APIs become de facto standards.

### Implications for Developers

- **Choose tools with active Windows and ARM64 support** (DeepSeek TUI, Qwen Code) if cross-platform is critical.
- **Prioritize tools with transparent agent governance** (Claude Code's permission system, Gemini CLI's turn limits) for production workflows.
- **Avoid tools with zero PR velocity** (Kimi Code, Copilot CLI as of today) for long-term commitments.
- **Invest in per‑agent model routing capabilities** - this is where the ecosystem is heading, and tools that support it (Claude Code, OpenCode) will have an advantage.
- **Monitor Cosmo** (mentioned across multiple contexts) as an emerging aggregator that may reshape how developers evaluate and switch between CLI tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the **anthropics/skills** repository, based on the most-watched activity data as of **2026-07-18**.

---

## 1. Top Skills Ranking (Most-Discussed PRs)

The following are the most actively discussed or commented-on Skill submissions, ranked by community engagement.

**#1: Skill Creator Fixes (run_eval.py, Windows, Trigger Detection)**
- **PRs:** #1298, #1099, #1050, #1323, #362, #361, #539
- **Functionality:** These are not a single Skill, but a cluster of critical patches to the `skill-creator` meta-skill tooling. They fix the `run_eval.py` script reporting 0% recall, Windows subprocess/PATHEXT/encoding errors, and YAML parsing issues.
- **Discussion Highlights:** The most urgent technical discussion in the repo. Multiple contributors (MartinCajiao, joshuawowk, gstreet-ops, Mr-Neutr0n) independently confirmed that the description-optimization loop is "optimizing against noise." The core issue (#556) has 12 comments and 7 thumbs-up.
- **Status:** All Open. These are blocking other contributors from effectively building skills.
- **Link:** #1298, #1099, #1050, #1323

**#2: `document-typography` Skill**
- **PR:** #514
- **Functionality:** A quality-control skill that prevents orphan words/widows, stranded headers, and numbering misalignment in AI-generated documents.
- **Discussion Highlights:** High practical value acknowledged. Discussion focused on the universality of typographic issues in generated content.
- **Status:** Open
- **Link:** #514

**#3: `odt` Skill (OpenDocument Format)**
- **PR:** #486
- **Functionality:** Creates, fills, reads, and converts `.odt`/`.ods` files (LibreOffice/OpenDocument standards). Includes template filling and ODT-to-HTML parsing.
- **Discussion Highlights:** Addresses a major gap in office-format support. Likely high demand from enterprise users.
- **Status:** Open
- **Link:** #486

**#4: `testing-patterns` Skill**
- **PR:** #723
- **Functionality:** Comprehensive testing coverage: Testing Trophy model, AAA pattern, React Testing Library, mocking, and end-to-end strategies.
- **Discussion Highlights:** Represents a strong community desire for automated quality assurance rather than just manual review.
- **Status:** Open
- **Link:** #723

**#5: `pyxel` Skill (Retro Game Development)**
- **PR:** #525
- **Functionality:** Integrates with the Pyxel MCP server for creating retro/pixel-art/8-bit games in Python. Covers a strict write-run-inspect-iterate workflow.
- **Discussion Highlights:** Niche but highly engaged community (creator of Pyxel is the author). Demonstrates demand for creative/coding fusion skills.
- **Status:** Open. Updated as recently as 2026-07-15.
- **Link:** #525

**#6: `color-expert` Skill**
- **PR:** #1302
- **Functionality:** A self-contained deep expertise skill covering color naming systems (ISCC-NBS, Munsell, RAL), color spaces (OKLCH, OKLAB, CAM16), and accessibility.
- **Discussion Highlights:** Shows demand for domain-specific "expert" skills that bring deep knowledge into the context.
- **Status:** Open
- **Link:** #1302

---

## 2. Community Demand Trends (From Issues)

Analysis of the most-commented Issues reveals the following key demand directions:

- **Reliability & Trust:** The single largest concern. Issues #556 (run_eval 0% rate), #1169 (recall bug), and #1061 (Windows compat) show users are blocked from building skills due to tooling bugs. Issue #492 (trust boundary abuse under `anthropic/` namespace) signals deep concern over security and authenticity.
- **Enterprise Governance:** Issues #228 (org-wide skill sharing) and #1175 (SPO document security) reflect strong enterprise demand for skill distribution, access control, and audit trails.
- **Skill Ecosystem Evolution:** Issues #1329 (compact-memory symbolic notation) and #1385 (reasoning quality gate pipeline) propose new skill *paradigms*—moving from task-specific skills to meta-skills that manage agent state and output quality.
- **Platform Expansion:** Issue #29 (Bedrock compatibility) and #16 (expose skills as MCPs) show users want to use skills beyond the primary Claude Code environment.

---

## 3. High-Potential Pending Skills (Likely to Land Shortly)

These PRs have active, sustained discussion and are at a mature review stage:

- **`self-audit` Skill (v1.3.0) — #1367** (by YuhaoLin2005): A universal reasoning quality gate. Performs mechanical file verification then a four-dimension reasoning audit. Very recent (2026-07-02) with no reported blockers. High demand due to the quality gap identified in other issues.
- **`skill-quality-analyzer` & `skill-security-analyzer` — #83** (by eovidiu): Meta-skills that evaluate other skills. If the community is serious about quality, these become essential infrastructure. Open since 2025-11, updated 2026-01.
- **`testing-patterns` — #723**: As noted above, comprehensive test pattern coverage. Addresses a clear gap in the current ecosystem.
- **`compact-memory` (Symbolic Notation) — Issue #1329**: While proposed as an Issue, this is a skill prototype that could land as a PR. Addresses the "context window exhaustion" problem for long-running agents.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable, bug-free tooling (the `skill-creator` pipeline) and meta-skills for quality assurance, audit, and governance**, rather than for new domain-specific skills—the ecosystem is currently constrained by its own foundational infrastructure.

---

# Claude Code Community Digest
**Date:** 2026-07-18

---

## Today's Highlights

A new patch release (v2.1.214) fixes two security-critical permission bypasses—one affecting glob patterns for `Edit` auto-approval, another targeting Windows PowerShell 5.1 sessions. Meanwhile, the community is intensely discussing macOS memory corruption (kernel zone leaks from CLI agent load) and a persistent payment-intent bug that has accumulated 76 comments across two months.

---

## Releases

**v2.1.214** — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.214)
- **Fixed:** Single-segment `dir/**` allow rules (e.g., `Edit(src/**)`) no longer auto-approve writes to nested `dir/` directories outside `<cwd>/dir`.
- **Fixed:** Permission-check bypass for commands run in Windows PowerShell 5.1 sessions.
- **Fixed:** Bash permission check (incomplete description in changelog).

---

## Hot Issues (Top 10)

1. **[#3412: Allow viewing/editing pasted text blocks before submission](https://github.com/anthropics/claude-code/issues/3412)** — `[enhancement, platform:macos, area:tui, area:a11y]`
   *80 comments, 277 👍.* The most-upvoted open issue. Dictation software users paste spoken text into collapsed `[Pasted ...]` blocks with no way to review or correct before sending. Community strongly wants an editor preview step. Accessibility concern for voice-driven workflows.

2. **[#55982: Plan upgrade payment fails — PaymentIntent voided immediately](https://github.com/anthropics/claude-code/issues/55982)** — `[bug]`
   *76 comments, 25 👍.* Two-month-old billing blocker. PaymentIntent gets `void_invoice` before `confirm` completes. Affects users trying to upgrade plans; no fix in sight. High frustration due to inability to access paid features.

3. **[#66020: macOS kernel zone leak from Claude Code CLI](https://github.com/anthropics/claude-code/issues/66020)** — `[bug, platform:macos, perf:memory]`
   *16 comments, 2 👍.* `claude.exe` on macOS 26.5.1 leaks `data.kalloc.1024` kernel zones. Leak rate scales 21→1027/sec with agent load, causing kernel panics at ~20GB RSS. Critical for heavy users on Apple Silicon.

4. **[#66504: Session URL appended to commit messages by default](https://github.com/anthropics/claude-code/issues/66504)** — `[enhancement, user-experience]`
   *8 comments, 33 👍.* Every commit and PR description gets a session URL appended automatically. Users want this opt-in—it pollutes commit history and links to ephemeral sessions. Privacy concern for shared repos.

5. **[#38698: Per-agent model provider routing](https://github.com/anthropics/claude-code/issues/38698)** — `[enhancement, area:agents, area:providers]`
   *10 comments, 40 👍.* Request to route subagents to different model providers (e.g., local Ollama for cheap subagents, Anthropic for orchestrator). Currently model config is session-wide. Growing demand as multi-agent workflows mature.

6. **[#75899: Left arrow accidentally navigates to agents screen](https://github.com/anthropics/claude-code/issues/75899)** — `[bug, platform:macos, area:tui, keybindings]`
   *7 comments, 9 👍.* Non-rebindable left-arrow keybinding in chat input navigates to agents view. Returning from that view breaks the main session. UI/UX regression for power users who rely on keyboard navigation.

7. **[#74949: Auto-mode classifier 'temporarily unavailable' in bursts](https://github.com/anthropics/claude-code/issues/74949)** — `[bug, platform:macos, area:permissions]`
   *6 comments, 3 👍.* Fail-closed classifier errors during peak windows block all Bash compound commands (pipes, redirects). Sessions become unusable during bursts. Affects production workflows.

8. **[#70422: Blank stdout tool call triggers false retry loop](https://github.com/anthropics/claude-code/issues/70422)** — `[bug, platform:macos, area:core]`
   *3 comments, 4 👍.* When a Bash call produces no stdout (e.g., `afplay &`), the system auto-injects a retry prompt. Wastes tokens and disrupts audio/side-effect workflows.

9. **[#78221: Hidden Browser pane screenshots time out 30s](https://github.com/anthropics/claude-code/issues/78221)** — `[bug, platform:windows, area:desktop]`
   *2 comments, 2 👍.* Regression: screenshots and zoom calls fail when Browser pane is hidden. `preview_start` no longer auto-opens the pane. Blocks headless browser automation on Windows Desktop.

10. **[#74558: Fable 5 text blocks delivered as summarized thinking](https://github.com/anthropics/claude-code/issues/74558)** — `[bug, platform:linux, area:model]`
    *2 comments.* Mid-turn assistant text blocks intermittently become summarized thinking blocks on Fable 5. Turns appear silent. Affects transcript accuracy and streaming consumers.

---

## Key PR Progress (Top 10)

1. **[#78715: Add regex_not_match operator to hookify rule engine](https://github.com/anthropics/claude-code/pull/78715)** — `[OPEN]`
   Introduces `not_regex_match` operator. Previously rules trying to assert a regex *does not* match hit an unknown-operator silent-failure branch. Small but critical for negative-pattern security rules.

2. **[#76581: Harden YAML, path, and symlink handling in plugins](https://github.com/anthropics/claude-code/pull/76581)** — `[OPEN]`
   Fixes YAML frontmatter breakout, path traversal, and symlink-based credential overwrite in official plugin scripts. Specifically hardens `ralph-wiggum` setup against `completion_promise` injection.

3. **[#78446: Add missing plugin.json manifest to plugin-dev](https://github.com/anthropics/claude-code/pull/78446)** — `[OPEN]`
   `plugin-dev` was the only plugin lacking a `.claude-plugin/plugin.json` manifest. All other 12 plugins have one. This blocks development workflow parity.

4. **[#78445: Correct plugin descriptions that contradict actual plugins](https://github.com/anthropics/claude-code/pull/78445)** — `[OPEN]`
   Fixes three discrepancies between marketplace metadata and plugin source behavior, including wrong hook events and pattern counts in `security-guidance`.

5. **[#78441: Fix devcontainer script detecting native command failures](https://github.com/anthropics/claude-code/pull/78441)** — `[OPEN]`
   `run_devcontainer_claude_code.ps1` wraps native commands (docker, podman) in try/catch but PowerShell doesn't raise terminating errors for non-zero exits. Fix uses `$LASTEXITCODE`. All error handling was effectively dead code.

6. **[#78425: Make code-review require explicit user invocation](https://github.com/anthropics/claude-code/pull/78425)** — `[OPEN]`
   Marks `/code-review` as manual-only with `disable-model-invocation: true`. Prevents subagents from programmatically re-entering the full multi-agent review workflow—addresses infinite loop risk.

7. **[#77427: Make pr-review-toolkit code-reviewer a leaf agent](https://github.com/anthropics/claude-code/pull/77427)** — `[OPEN]`
   Restricts code-reviewer agent to repository-inspection tools only. Prevents it from spawning sub-agents, reducing cost and preventing runaway agent chains during PR reviews.

8. **[#78371: Harden ralph-wiggum plugin with bounded iterations and push guard](https://github.com/anthropics/claude-code/pull/78371)** — `[OPEN]`
   Safety hardening: bounded loop iterations, push/publish guard, stop-hook fixes. Addresses risk of unattended loops pushing half-finished work to production.

9. **[#78532: GCP gateway Terraform fixes — PG16 Cloud SQL edition + internal ALB](https://github.com/anthropics/claude-code/pull/78532)** — `[OPEN]`
   Fixes Cloud SQL create failure on PG16+ (API defaults to ENTERPRISE_PLUS which rejects shared-core tiers). Also adds optional internal ALB support for private deployments.

10. **[#6754: Document RTL support for Claude CLI in VS Code](https://github.com/anthropics/claude-code/pull/6754)** — `[OPEN]`
    Adds `rtl-support.md` for fixing Hebrew/Arabic/Persian rendering in VS Code integrated terminal. Long-standing issue (opened Aug 2025) finally getting documentation.

---

## Feature Request Trends

- **Per-agent model routing** — Multiple requests for assigning different model providers (Anthropic, Ollama, custom endpoints) per subagent, not just session-wide.
- **Auto-mode classifier resilience** — Users want fallback mechanisms (e.g., Sonnet→Opus-4) when the classifier is temporarily unavailable, rather than fail-closed.
- **Session context control** — Requests to opt-in/out of session URL injection into commits, and to remove local folders from Cowork project context without destructive operations.
- **Secret handling UX** — OS-native masked input for pasting API keys/tokens instead of plaintext chat, preventing transcript exposure.
- **Keybinding customization** — Growing demand for rebindable hotkeys, especially after the left-arrow agents-navigation issue.

---

## Developer Pain Points

- **Permission bypass regressions** — Two security fixes in v2.1.214 (glob allow-rule bypass, Windows PowerShell bypass) suggest ongoing churn in the permission system.
- **macOS kernel memory pressure** — `data.kalloc.1024` zone leaks causing kernel panics at ~20GB. Affects heavy agent users. No fix yet.
- **Windows ARM64 cowork failures** — Cowork feature broken on Snapdragon X despite passing readiness checks. Shows platform-specific gaps in testing.
- **Bundled ugrep OOM issues** — Repeated reports of embedded ugrep exploding memory usage on bounded-repeat regex patterns. Community notes that system `grep` is silently shadowed.
- **Payment/billing infrastructure bugs** — Two-month-old PaymentIntent void issue with 76 comments and no resolution. Affects ability to upgrade and use paid features.
- **Plugin override inconsistency** — `skillOverrides` silently ignored for plugin-provided skills, while the UI implies they work. Misleading for plugin developers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-18

## Today's Highlights
The Codex team shipped three alpha releases of the Rust-based CLI (0.145.0-alpha.20, .22, .23) and merged over a dozen PRs focused on SQLite configuration centralization, audio input forwarding to the Responses API, and TUI inline visualization support. The community remains intensely focused on Windows desktop reliability, with multiple critical bugs around app hangs, HID device enumeration, and runaway process spawning dominating the issue tracker.

## Releases
Three new Rust CLI alpha builds were published in the last 24 hours:
- **rust-v0.145.0-alpha.20**, **rust-v0.145.0-alpha.22**, **rust-v0.145.0-alpha.23** — Incremental alpha releases on the 0.145.0 track. No changelog details provided; likely includes fixes merged in today's PR batch.

---

## Hot Issues

1. **[#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** ★ 782 👍, 174 comments  
   *Why it matters*: The #1 community ask—a native Linux desktop app—remains the most requested feature by a wide margin. Users cite macOS power consumption issues as a driver.

2. **[#28969 — Add setting to disable auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)** ★ 135 👍, 39 comments  
   *Why it matters*: CLI users on arch Linux want control over Codex's aggressive auto-resolve behavior. High engagement signals workflow disruption.

3. **[#33780 — Windows app hangs on launch due to HID device enumeration](https://github.com/openai/codex/issues/33780)** ★ 2 👍, 21 comments  
   *Why it matters*: A critical Windows bug: main process blocks forever when a single HID device fails to respond. First report of this specific root cause.

4. **[#28919 — Windows app missing "control other devices" tab](https://github.com/openai/codex/issues/28919)** ★ 23 👍, 17 comments  
   *Why it matters*: A missing settings tab on Windows 11 breaks remote control functionality. Community frustration growing.

5. **[#22773 — iOS/macOS Remote Control broken after desktop update](https://github.com/openai/codex/issues/22773)** ★ 2 👍, 14 comments  
   *Why it matters*: Cross-device remote control consistently breaks after desktop updates. Stable remote connectivity is a core feature expectation.

6. **[#20851 — First-class Computer Use support from the CLI](https://github.com/openai/codex/issues/20851)** ★ 16 👍, 11 comments  
   *Why it matters*: Computer Use is desktop-only; CLI users want parity. The bundled MCP helper approach is seen as a workaround, not a solution.

7. **[#28161 — Show expiration dates for usage resets](https://github.com/openai/codex/issues/28161)** ★ 56 👍, 8 comments  
   *Why it matters*: Users want transparency on when their usage resets expire. Simple UX improvement with strong community backing.

8. **[#33171 — Remote-compaction capacity error kills persistent goals](https://github.com/openai/codex/issues/33171)** ★ 0 👍, 8 comments  
   *Why it matters*: Long-running `/goal` tasks fail unpredictably due to server-side capacity errors. Undermines trust in persistent agent workflows.

9. **[#33873 — Codex Desktop frequently unresponsive after update](https://github.com/openai/codex/issues/33873)** ★ 2 👍, 6 comments  
   *Why it matters*: Another Windows stability regression from the latest release (26.715.21425). Patterns of post-update hangs are accumulating.

10. **[#31499 — Duplicate MCP stdio process pools (183 node.exe / 13GB memory)](https://github.com/openai/codex/issues/31499)** ★ 1 👍, 6 comments  
    *Why it matters*: Extreme resource leak: MCP process pools duplicate uncontrollably under `codex.exe app-server`. Demonstrates systemic process management issues on Windows.

---

## Key PR Progress

1. **[#33938 — Centralize SQLite connection configuration](https://github.com/openai/codex/pull/33938)**  
   *What*: Introduces `SqliteConfig` as the shared entry point for all SQLite pools, applying consistent WAL, sync, and timeout settings. A foundational reliability improvement.

2. **[#33932 — Forward audio inputs to the Responses API](https://github.com/openai/codex/pull/33932)**  
   *What*: Audio variants (WAV, MP3, etc.) now reach the model instead of being replaced with unsupported-input placeholders. Enables real voice workflows.

3. **[#33930 — Track inherited paginated rollout prefixes](https://github.com/openai/codex/pull/33930)**  
   *What*: Adds `HistoryPosition` and `history_base` metadata for tracking thread inheritance across paginated rollouts. Critical for multi-turn conversations.

4. **[#33926 — Fix quoted hook commands on Windows](https://github.com/openai/codex/pull/33926)**  
   *What*: Fixes Windows hook commands where executable paths with spaces failed due to escaped outer quotes. A long-standing Windows CLI pain point.

5. **[#33919 — Allow stable Python SDK releases](https://github.com/openai/codex/pull/33919)**  
   *What*: Updates release workflow to accept stable tags (not just beta) so Python SDK v0.144.4 can ship. Developer workflow fix.

6. **[#33925 — Render inline visualization links in the TUI](https://github.com/openai/codex/pull/33925)**  
   *What*: Terminal fallback for `::codex-inline-vis{}` directives, replacing artifacts with browser-openable links. TUI parity improvement.

7. **[#33908 — Allow publishing plugins through share updates](https://github.com/openai/codex/pull/33908)**  
   *What*: Accepts `LISTED` discoverability in plugin share updates, enabling plugin authors to publish through the share API.

8. **[#33907 — Add occurrence search for paginated threads](https://github.com/openai/codex/pull/33907)**  
   *What*: New experimental `thread/searchOccurrences` method for case-insensitive literal search across paginated threads without replay. UX improvement for long histories.

9. **[#33906 — Launch managed network proxies on remote executors](https://github.com/openai/codex/pull/33906)**  
   *What*: Remote executors can now launch managed-network proxy listeners, making loopback proxy addresses reachable by launched processes. Infrastructure for remote workflows.

10. **[#33901 — Support ChatGPT-branded Desktop app builds](https://github.com/openai/codex/pull/33901)**  
    *What*: CLI and TUI no longer depend on a single executable name; searches for both `ChatGPT.app` and `Codex.app` on macOS. Branding-agnostic discovery.

---

## Feature Request Trends

1. **Linux Desktop App (#11023)** — Overwhelming demand for a native Linux client. 782 👍 makes it the most-voted issue by 5x.
2. **CLI Computer Use parity (#20851)** — Users want Computer Use as a first-class CLI capability, not a desktop-only plugin.
3. **Remote control improvements** — Multiple requests (#28919, #22773, #26846) for robust cross-device remote control and host-to-host connections.
4. **UX transparency** — Requests for visible usage reset dates (#28161), configurable auto-resolve timing (#28969), and RTL text support (#26250).
5. **TUI math rendering (#18906)** — Users want LaTeX rendering support in the terminal UI for scientific and technical workflows.

---

## Developer Pain Points

1. **Windows stability crisis** — At least 15 open Windows-specific bugs in the last 24h alone: app hangs on launch (#33780, #33873, #33909), WMI CPU storms (#29499, #32562, #33776), process leaks (#31499, #33778, #33776), and HID enumeration deadlocks (#33912). Windows reliability is the single biggest pain point.

2. **Post-update regressions** — Multiple issues reported immediately after updating to version 26.715.x. The update cycle is introducing regressions faster than they are fixed.

3. **Process management failures** — Duplicate MCP pools, runaway `taskkill.exe`/`conhost.exe` processes, and unreaped child processes indicate systemic resource management issues in the Windows `app-server`.

4. **Remote control fragility** — Cross-device remote control breaks after desktop updates (#22773) and missing settings on Windows (#28919) create an unreliable multi-device experience.

5. **IDE extension reliability** — VS Code Codex panel loading indefinitely (#33059) and failure to load under Remote-SSH (#27597) degrade the IDE experience for Linux and remote development users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-18

## Today's Highlights
This week's most impactful developments center on security hardening and resilience improvements. A critical **antivirus false-positive fix** and **macOS Seatbelt profile alignment** land in the codebase alongside the **first LLM-based triage orchestrator** for issue management. Meanwhile, a triaged P1 bug reveals that subagent failures are incorrectly reported as "GOAL" success, masking real interruptions—a pattern echoing several ongoing agent reliability concerns.

## Releases
**v0.52.0-nightly.20260718.gacae7124b**
- New: LLM triage orchestrator and container build for automated issue classification
- Refactor: macOS permissive Seatbelt profiles aligned to deny-default security model
- Additional PRs merged include ReAct loop mitigation (PR #28429) and recursive reasoning turn limits (PR #28164)

## Hot Issues (Top 10 Noteworthy)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — P1 Bug: Subagent recovery after MAX_TURNS reported as GOAL success**
   - The `codebase_investigator` subagent reports termination as "GOAL" even when it hit its turn limit doing zero analysis. This false-success hides real subagent failures and wastes developer trust. High community engagement (11 comments, 2 👍).

2. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — P1 Epic: Robust component-level evaluations**
   - Tracking expansion of behavioral eval tests from 76 current to broader coverage across 6 Gemini model variants. Critical for ensuring regressions are caught before release. (7 comments).

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — P1 Bug: Generalist agent hangs forever**
   - A persistent issue where deferring to the generalist agent causes indefinite hangs. Workaround exists (disabling sub-agent delegation), but root cause remains open. Heavily upvoted (8 👍). (7 comments).

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — P2 Epic: AST-aware file reads, search, and mapping**
   - Exploring whether AST-level understanding reduces token waste from misaligned file reads and improves codebase navigation. Could dramatically improve agent efficiency. (7 comments).

5. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — P2 Bug: Auto Memory retries low-signal sessions indefinitely**
   - The Auto Memory extraction agent only marks sessions as processed if it successfully reads the transcript. Low-signal sessions get resurfaced forever. (5 comments).

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — P1 Bug: Shell command "Waiting input" after completion**
   - Simple commands hang post-execution, stuck in "Awaiting user input" state despite no input required. High frustration (3 👍). (4 comments).

7. **[#23296](https://github.com/google-gemini/gemini-cli/issues/23296) — P2 Bug: OAuth token refresh works via `mcp list` but fails during tool calls**
   - MCP HTTP OAuth token refresh succeeds during initial listing but fails mid-session, forcing re-authentication. Impacts remote MCP server workflows. (5 comments).

8. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — P2 Bug: Gemini underutilizes custom skills and sub-agents**
   - Despite having relevant custom skills, Gemini rarely activates them autonomously. Only works when explicitly instructed. Undermines extensibility value. (6 comments).

9. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — P2 Feature: Agent should stop/discourage destructive behavior**
   - The model occasionally uses `git reset`, `--force`, or destructive commands when safer alternatives exist. Need built-in safeguards for database and repository operations. (3 comments).

10. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — P2 Bug: Browser Agent ignores settings.json overrides**
    - Configuration overrides like `maxTurns` in `settings.json` are not honored by the Browser Agent, making user customization ineffective. (3 comments).

## Key PR Progress (Top 10 Important PRs)

1. **[#28429](https://github.com/google-gemini/gemini-cli/pull/28429) — [CLOSED/P1] Mitigate infinite ReAct loops and prompt injection loops**
   - Implements session-level default turn limit of 15 and improved tool-call loop detection. Critical defense against prompt injection DoS from malicious workspace files. Merged.

2. **[#28424](https://github.com/google-gemini/gemini-cli/pull/28424) — [CLOSED/P1] macOS Seatbelt profiles aligned to deny-default**
   - Updates `permissive-open` and `permissive-proxied` profiles to `(deny default)` with explicit allow-lists. Improves macOS security posture significantly.

3. **[#28345](https://github.com/google-gemini/gemini-cli/pull/28345) — [CLOSED] LLM triage orchestrator and container build**
   - Antigravity SDK-based inference orchestration for automated issue triage. Includes GCS debug logging and Cloud Run Job definition. Merged.

4. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) — [CLOSED] Limit recursive reasoning turns per single user request**
   - Hard limit of 15 recursive reasoning turns per user request (configurable via `maxSessionTurns`). Protects CPU resources and API quotas from infinite loops. Merged.

5. **[#28346](https://github.com/google-gemini/gemini-cli/pull/28346) — [OPEN/P1] Fix trust dialog disclosure for runnable hooks**
   - Correctly inspects canonical hook definition shapes and stops reporting invalid hook entries as runnable. Adds warnings for command hooks in project settings.

6. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403) — [OPEN/P1] Block $VAR and ${VAR} variable expansion bypass**
   - Fixes incomplete `detectBashSubstitution()` check that allowed variable expansion patterns to bypass security gates. Defense-in-depth for GHSA-wpqr-6v78-jr5g.

7. **[#28348](https://github.com/google-gemini/gemini-cli/pull/28348) — [OPEN] Fix MaxListenersExceededWarning and infinite auth loop**
   - Addresses infinite authentication loop on Windows post-OAuth and listener leak warnings during API retries. Two critical stability fixes.

8. **[#28353](https://github.com/google-gemini/gemini-cli/pull/28353) — [OPEN] Prevent path traversal in A2A restore command**
   - Adds path normalization and containment checks to prevent directory traversal attacks in checkpoint restore. Defense-in-depth.

9. **[#28386](https://github.com/google-gemini/gemini-cli/pull/28386) — [OPEN/P2] Fix VS Code activation disposables tracking**
   - Corrects comma-expression bug where only last Disposable pair was tracked in `context.subscriptions.push()`. Fixes #27790.

10. **[#20238](https://github.com/google-gemini/gemini-cli/pull/20238) — [CLOSED] Mitigate antivirus false positives on generated JSON error reports**
    - Moves error reports from `os.tmpdir()` to `~/.gemini/tmp/<hash>/error-reports/` to avoid antivirus flagging. Long-standing user pain point finally resolved. Merged.

## Feature Request Trends

- **AST-aware code intelligence**: Multiple issues request AST-based file reading, search, and codebase mapping to improve token efficiency and agent precision (e.g., #22745, #22746).
- **Memory system self-healing**: Strong demand for Auto Memory improvements—deterministic redaction, quarantine of invalid patches, and termination of low-signal retries (#26522, #26523, #26525).
- **Agent safety and containment**: Growing calls for built-in safeguards against destructive commands, improper sub-agent delegation, and safe defaults for git operations (#22672, #22093).
- **Browser Agent resilience**: Specific requests for automatic session takeover, lock recovery, and honoring user configuration overrides (#22232, #22267).
- **Subagent transparency**: Users want subagent trajectories visible in `/chat share` and included in bug reports (#22598, #21763).

## Developer Pain Points

- **False success reports**: Subagents reporting "GOAL" on max-turn interruptions (#22323) and crash-causing "get-shit-done" hooks (#22186) erode trust in agent execution.
- **Stalled execution**: Shell commands hanging post-completion (#25165) and generalist agents hanging indefinitely (#21409) remain top P1 frustrations.
- **Configuration unreliability**: Browser Agent ignoring settings overrides (#22267) and subagents activating despite being disabled (#22093) make personalization futile.
- **Authentication fragility**: OAuth token refresh failures mid-session (#23296) and Windows authentication loops (#28348) disrupt remote workflows.
- **Prompt injection vulnerabilities**: Malicious workspace files causing infinite ReAct loops (#28429) underscores agent security as an ongoing concern.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-18

## Today's Highlights
A rapid-fire 24 hours saw **11 new issues** filed and a **patch release (v1.0.72-1)** that introduces plugin/skill lifecycle management and better UX for editing views. The community is sounding alarms on **critical regressions**: zombie process accumulation, silent Gemini model failures, and a Windows cold-start hang for session resume. Meanwhile, **11 triage-labelled issues** point to a growing maintenance burden, though no pull requests were merged today.

---

## Releases
### [v1.0.72-1](https://github.com/github/copilot-cli/releases/tag/v1.0.72-1)
- **Added** `--plugin`, `--mcp`, and `--skill` flags for plugin mutations, plus `copilot plugins remove --skill` for skill removal.
- **Improved** full file-path reveal when expanding compact editing rows; made the plan-approval menu deterministic across models; kept `/add-dir` directories visible.

---

## Hot Issues
These 10 issues are actively disrupting workflows or represent notable regressions:

1. **[#4024](https://github.com/github/copilot-cli/issues/4024) — Voice mode: all bundled ASR models fail silently**  
   Every transcription returns empty for all three Nemotron ASR models, despite successful audio capture. Likely a `MultiModalProcessor` routing bug for RNNT in Foundry Local Core. **12 comments, no fix yet.**

2. **[#4163](https://github.com/github/copilot-cli/issues/4163) — Zombie processes accumulate under copilot PID**  
   Finished subprocesses are not reaped, leaking ~2 zombies/minute. A serious stability concern for long-running sessions. **Filed 24h ago, 1 comment.**

3. **[#4155](https://github.com/github/copilot-cli/issues/4155) — Gemini models return 400 Bad Request**  
   Both `gemini-3.1-pro-preview` and `gemini-3.5-flash` fail on plain-text prompts with no attachments. **Critical for users relying on Google models, 0 comments.**

4. **[#4165](https://github.com/github/copilot-cli/issues/4165) — `copilot --resume` hangs on Windows cold start**  
   PowerShell resumers see an indefinite "Resuming session..." spinner. Sessions resume fine if the CLI is started interactively first. **Windows-specific blocker.**

5. **[#4151](https://github.com/github/copilot-cli/issues/4151) — Plugin install fails "Access is denied" on Windows 11**  
   Fails for marketplace, GitHub repo, and local sources alike. Permissions-based, affecting all plugin usage on Windows. **3 comments.**

6. **[#4160](https://github.com/github/copilot-cli/issues/4160) — Plan-mode over-blocks read-only shell commands**  
   Heuristic false-positives block provably safe commands like `ls`, `dir`, `cat`. Reduces plan-mode utility for exploration. **3 comments.**

7. **[#3767](https://github.com/github/copilot-cli/issues/3767) — Oversized attachment wedges session permanently (CAPI 5MB limit)**  
   Attachments >5MB cause an unrecoverable error with no retry/reset path. **Closed but high-impact; users want a recovery mechanism.**

8. **[#4156](https://github.com/github/copilot-cli/issues/4156) — `git branch -D` requires no permission (misclassified)**  
   Forced branch deletion runs silently, while `git push --delete` correctly prompts. **Security concern — destructive operations bypass approval.**

9. **[#4161](https://github.com/github/copilot-cli/issues/4161) — `task_complete` tool missing after switching back to autopilot mode**  
   Regression of a previously fixed bug (issue #1523). The tool should always be available in autopilot mode. **1 comment, needs urgent re-fix.**

10. **[#4137](https://github.com/github/copilot-cli/issues/4137) — Scheduled prompts remain queued and do not fire**  
    Overnight scheduled monitor prompts never delivered. Regression suspected from this week's changes. **0 comments, disruptive for CI/testing workflows.**

---

## Key PR Progress
No pull requests were merged or updated in the last 24 hours. The project's PR queue is empty as of this digest.

---

## Feature Request Trends
The most demanded directions from recent issues:

- **Granular permission controls** — Path-prefix-based file/web permissions (#4157), command identifiers with spaces still requiring approval (#4150), and destructive `git branch -D` escaping approval (#4156).
- **Multi-account/user support** — A way to set a default user identity (#4166), especially for developers balancing work/personal accounts.
- **Keyboard-friendly navigation** — `j`/`k` shortcuts for multiple-choice menus (#4152), following vim convention.
- **Custom BYOK headers** — Allow passing `X-Tenant-ID` and similar headers for multi-tenant LLM servers (#3399, 8 👍).
- **Multi-root workspace support** — `.code-workspace` file discovery for additional folder context and instruction files (#1826, 14 👍).

---

## Developer Pain Points
Recurring frustrations and high-frequency asks:

- **Windows instability** — Plugin installs fail with permission errors (#4151), session resume hangs (#4165), and the TUI turns blank after prompts in Windows Terminal (#4159). Windows users face the highest friction.
- **False-positive command blocking** — The heuristic-based tool gating in plan mode consistently blocks read-only commands (#4160). Developers want semantic analysis instead of substring matching.
- **Silent failures** — Voice ASR returns empty without error (#4024), Gemini models fail with only a CAPI status code (#4155), and oversized attachments wedge the session permanently (#3767). The lack of actionable diagnostics is a recurring theme.
- **Zombie process leaks** — Per-session accumulation of unreaped child processes (#4163) degrades system resources over time. No workaround documented.
- **Telemetry gaps** — `copilot -p` mode does not emit OTEL telemetry even with server-managed settings enabled (#4169), breaking observability for teams tracking tool usage.
- **Excessive repeated warnings** — Large-image attachment warnings print **six times** for a single rejection (#4164), and AI-credit-low warnings injected into the system prompt cannot be suppressed (#4168). Developers want a single-clear-error pattern.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-07-18**

## Today's Highlights
Activity remains moderate with no new releases in the last 24 hours. A single pull request addresses a critical bug in JSON schema dereferencing for the `kosong` module, fixing infinite recursion on circular `$ref`. Meanwhile, three open issues continue to generate discussion: users are frustrated with the K2.6 model regression losing creativity and personality, the Wind plugin remains broken due to inaccessible intranet dependencies, and a long-standing TUI rendering bug with Markdown list wrapping persists.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **[#1925 – Kimi K2.5 vs K2.6 Enhancement Request](https://github.com/MoonshotAI/kimi-cli/issues/1925)**  
   *Author: herrbasan | Created: 2026-04-17 | Updated: 2026-07-17 | 13 comments*  
   **Why it matters:** Users strongly prefer the old K2.5 model, calling K2.6 "unusable" due to over-thinking that kills creativity and increases hallucinations. The community is pushing for model switching support. This issue has been open for 3 months with no resolution from the team, indicating a significant product direction debate.

2. **[#2505 – Wind Plugin: Failed Data Fetch Due to Intranet Dependency](https://github.com/MoonshotAI/kimi-cli/issues/2505)**  
   *Author: Steven-DD | Created: 2026-07-17 | Updated: 2026-07-17 | 1 comment*  
   **Why it matters:** The `wind-allskill` plugin is completely broken for external users because its `agent-gw-pysdk` dependency points to `dev.msh.team`—a Moonshot-internal Git server unreachable from public networks. This is a deployment packaging failure that renders a major enterprise data plugin non-functional on Windows.

3. **[#2379 – TUI Markdown List Wrapping Broken](https://github.com/MoonshotAI/kimi-cli/issues/2379)**  
   *Author: bdragan | Created: 2026-05-27 | Updated: 2026-07-17 | 1 comment*  
   **Why it matters:** On Linux (Kimi Code / Allegretto subscription, K2.6 model), the terminal UI drops characters and incorrectly splits words when wrapping Markdown list items. This directly impacts code output readability, a core use case for a developer CLI tool.

## Key PR Progress
1. **[#2506 – Fix Circular $ref in deref_json_schema (Open)](https://github.com/MoonshotAI/kimi-cli/pull/2506)**  
   *Author: Sreekant13 | Created: 2026-07-18 | 0 comments*  
   **Summary:** Fixes `kosong.utils.jsonschema.deref_json_schema` to raise a clear error instead of infinite recursion when encountering circular `$ref` references. This is a small (<100 lines) self-contained bug fix that prevents stack overflows and hangs.

## Feature Request Trends
The dominant request across all open issues is **model version control and fallback**. Users want the ability to explicitly select between K2.5 and K2.6, as the newer model is perceived as regressing in creativity and personality. This suggests a tension between model improvements and user satisfaction with chat-like interactions. Developers seem to prefer predictable, character-rich models over "smarter" but overly analytical ones for creative coding tasks.

## Developer Pain Points
1. **Intranet-Only Dependencies** (#2505): The Wind plugin ships with dependency links to Moonshot's internal Git server, making it impossible for external developers to install or use. This is a recurring infrastructure issue for plugins targeting external users.
2. **TUI Rendering Quality** (#2379): Textual interface bugs (character dropping, word splitting) have been open for nearly two months, degrading the primary interaction channel for terminal-based users.
3. **Model Regression Without Migration Path** (#1925): The forced upgrade to K2.6 removed access to a preferred model without providing a rollback mechanism. This creates trust issues—users feel they've lost control over their development environment.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-18

## Today's Highlights
The community is deeply engaged in infrastructure reliability work, with a major PR stack from @armancharan addressing stream ownership, event subscription scoping, and payload bounding for V2 sessions. Meanwhile, the new Desktop UI (v1.18.x) has generated several reports of missing mode toggles and display issues, signaling a rough rollout. A cluster of reports around OpenAI-compatible provider edge cases (streamed reasoning, nested arguments, model auto-discovery) continues to dominate issue activity.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues

1. **[#6231 — Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231)** (21 comments, 182 👍)  
   The highest-reacting issue in the tracker. Users tire of manually listing models for local providers (LM Studio, Ollama). Community strongly endorses automatic endpoint introspection.

2. **[#5305 — Plugin Hook for Instant TUI Commands](https://github.com/anomalyco/opencode/issues/5305)** (19 comments, 14 👍)  
   A plugin hook proposal that would let plugins register keyboard- and slash-command handlers that bypass the agent entirely. High engagement suggests plugin ecosystem maturity is a priority.

3. **[#7790 — SSH-based remote server connections to OpenCode Desktop](https://github.com/anomalyco/opencode/issues/7790)** (15 comments, 73 👍)  
   Also duplicated in #33273. Users strongly desire first-class SSH tunneling in Desktop, calling the app "totally useless" without it. Clear demand signal for remote development workflows.

4. **[#31119 — Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)** (13 comments, 11 👍)  
   A schema migration failure after upgrading from a very old version. The database has 17 migrations applied but the code expects 38. Returning users hit a hard block.

5. **[#27924 — Infinite compaction loop when compression fails to reduce context](https://github.com/anomalyco/opencode/issues/27924)** (7 comments)  
   A subtle session loop bug where overflow detection triggers compaction, which fails to shrink context, triggering compaction again. Fixed by PR #37584 today.

6. **[#33028 — Subagents hang indefinitely after quick bash tool call](https://github.com/anomalyco/opencode/issues/33028)** (6 comments, 3 👍)  
   Stream never times out after a fast bash call. Reproduced across two different model providers. A significant reliability concern for subagent-heavy workflows.

7. **[#33934 — Custom OpenAI stream fails: reasoning part `rs_*:0` not found](https://github.com/anomalyco/opencode/issues/33934)** (5 comments)  
   `gpt-5.5-fast/xhigh` streaming breaks because the parser can't locate a reasoning token. Niche but indicates fragility in custom-model streaming path.

8. **[#37430 — Cannot switch between build and plan modes in new UI](https://github.com/anomalyco/opencode/issues/37430)** (5 comments, 2 👍)  
   v1.18.1/v1.18.3 Desktop users can't find the Build/Plan toggle. A core workflow regression in the new UI.

9. **[#37399 — xAI Grok 4.5 generating useless bash `true` tool calls](https://github.com/anomalyco/opencode/issues/37399)** (4 comments)  
   Grok 4.5 keeps calling `$ true` between thoughts, spamming the conversation. A provider-specific behavioral quirk that degrades UX.

10. **[#37568 — Ollama subagents fail with "Not Found"](https://github.com/anomalyco/opencode/issues/37568)** (2 comments)  
    Closed quickly; likely a local provider path resolution bug. Highlights ongoing friction with Ollama integration.

## Key PR Progress

1. **[#37584 — Bound consecutive overflow compaction cycles in the prompt loop](https://github.com/anomalyco/opencode/pull/37584)**  
   Closes #27924. Adds a retry limit to compaction, preventing infinite loops when compression can't reduce context.

2. **[#37585 — Enforce event stream ownership and diagnostics](https://github.com/anomalyco/opencode/pull/37585)**  
   Core of the V2 stream scoping work. Ensures event streams have clear ownership, with diagnostic hooks for debugging.

3. **[#37487 — Narrow event subscriptions by session interest](https://github.com/anomalyco/opencode/pull/37487)**  
   Part of the same stream ownership epic. Filters events so sessions only see relevant events, reducing noise and improving performance.

4. **[#37437 — Add remote workspace environment seam](https://github.com/anomalyco/opencode/pull/37437)**  
   Introduces provider-agnostic workspace metadata, sandbox bindings, and process contracts. Foundation for hosted/remote workspace execution.

5. **[#37559 — Bound tool and admitted event payloads via session blobs](https://github.com/anomalyco/opencode/pull/37559)**  
   Closes #36444. Caps payload sizes for tool calls and events to prevent runaway memory usage in sessions.

6. **[#37589 — Unify sidecar controller interface](https://github.com/anomalyco/opencode/pull/37589)**  
   Desktop-side: standardizes sidecar lifecycle (local vs WSL). Improves robustness of the sidecar management code.

7. **[#37588 — Add typed IPC contract bridge](https://github.com/anomalyco/opencode/pull/37588)**  
   Desktop-side: end-to-end type safety for Electron IPC calls between preload and main process. Reduces runtime IPC bugs.

8. **[#37587 — Debounce Electron store persistence](https://github.com/anomalyco/opencode/pull/37587)**  
   Desktop performance fix: batches sync disk writes to avoid main-thread stalls during frequent state changes.

9. **[#37226 — Per-agent subagent_depth override](https://github.com/anomalyco/opencode/pull/37226)**  
   Allows individual agents to override the global `subagent_depth` setting. A targeted customization for multi-agent workflows.

10. **[#37477 — Don't boot a full instance for session list](https://github.com/anomalyco/opencode/pull/37477)**  
    Performance fix: `session list` was unnecessarily loading a full runtime instance just to query the DB. Now lightweight.

## Feature Request Trends
- **Model auto-discovery**: The #6231 proposal (182 👍) dominates. Users want OpenCode to introspect OpenAI-compatible endpoints rather than requiring manual model lists.
- **Remote SSH in Desktop**: Two issues (#7790, #33273) with strong upvotes demand native SSH tunneling in the Desktop app, mirroring VS Code Remote patterns.
- **Plugin TUI command hooks**: #5305 reflects growing desire for a plugin architecture that can extend the TUI without agent involvement.
- **BYOK model provider extensions for VS Code Copilot**: #27303 suggests users want to use their own models within Copilot via OpenCode as a provider bridge.

## Developer Pain Points
- **New UI regressions**: Multiple v1.18 issues report missing UI elements (Build/Plan toggle, active agent display, broken `ctrl+p`). The new Desktop UI appears to have shipped with several discoverability and rendering problems.
- **Schema/migration failures**: #31119 (#35403, #37544) show returning users and CLI upgrades can leave databases in inconsistent states, blocking usage entirely.
- **Infinite loops and hangs**: Compaction loops (#27924), stuck subagents (#33028), and endless tool calls (#37399) degrade trust in session reliability.
- **OpenAI-compatible provider fragility**: Custom endpoints fail in specific ways (nested JSON strings in #34652, dropped reasoning deltas in #37553, missing endpoints in #36834). Each provider variant introduces new breakage points.
- **IME/keyboard conflicts**: #37167 and #37165 highlight that non-US keyboard layouts and Chinese IMEs conflict with keybindings, a persistent accessibility gap.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-18

## Today's Highlights
Yesterday saw a massive surge in activity with ~50 issues and ~22 PRs updated, driven by a wave of bug fixes, API provider expansions, and a major new PRD for managed agent separation. The community is heavily focused on stabilizing the TUI (core pegging, cursor ghosts, crash logs) while simultaneously adding support for new providers like StepFun and Kimi K3 thinking levels. A significant architectural debate is emerging around how compaction, summaries, and retry logic should handle transient failures without forcing full session restarts.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#6747 — API for enhancing agent message markdown** (OPEN, 5 comments)  
   *Community wants extensions to mutate agent message display without affecting LLM content, e.g., for best-effort formula rendering.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6747)

2. **#6725 — Copilot pricing for GPT-5.6 models is incorrect** (OPEN, INPROGRESS, 4 comments)  
   *Real cost undercounted because cacheWrite pricing isn't included for Copilot OpenAI models. User reports actual bill vs Pi's display mismatch.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6725)

3. **#6665 — TUI pins a full core while streaming** (OPEN, INPROGRESS, 3 comments)  
   *Uncached Intl.Segmenter + per-chunk Markdown rebuild causes 100% CPU usage during long streaming sessions. Root cause identified as grapheme segmentation and render timer.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6665)

4. **#6755 — Agent loop memory explosion from tool partial updates** (CLOSED, 4 comments)  
   *Long-running tools that call onUpdate accumulate every partial update as a promise, then Promise.all stalls with multi-GB RSS.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6755)

5. **#6748 — Deprecated together.ai models still found in pi** (CLOSED, 3 comments)  
   *Five deprecated models remain selectable via --list-models despite official deprecation.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6748)

6. **#6746 — /model selector closes immediately under kitty keyboard protocol** (CLOSED, 2 comments)  
   *Terminals using kitty keyboard protocol (kitty, WezTerm, VS Code) cause slash-command selectors to flash open then immediately close.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6746)

7. **#6647 — Compaction fails on single transient stream drop** (OPEN, INPROGRESS, 2 comments)  
   *Compaction runs one non-retried summarization call — a single transient socket death fails the entire compaction, unlike normal assistant turns.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6647)

8. **#6762 — JSON parse crashes SSE stream on control chars in tool-call arguments** (CLOSED, 3 comments)  
   *Literal control characters (e.g., ANSI escapes) in model tool arguments kill the SSE stream instead of being repaired.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6762)

9. **#6789 — TUI hangs on submit (Linux Mint, pi-coding-agent 0.80.10)** (CLOSED, 2 comments)  
   *Slow startup followed by agent freezing on submit, with no response and no progress indicator.*  
   📎 [GitHub](https://github.com/earendil-works/pi/issues/6789)

10. **#6768 — Compaction with Copilot Enterprise fails** (CLOSED, 2 comments)  
    *Compaction returns Misdirected Request errors for both OpenAI and Anthropic models under Copilot Enterprise licenses.*  
    📎 [GitHub](https://github.com/earendil-works/pi/issues/6768)

## Key PR Progress

1. **#6790 — fix(tui): clear inverted cursor on exit** (CLOSED)  
   *Fixes confusing dual-cursor appearance after pi exits by overwriting reverse-video cursor with a normal space.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6790)

2. **#6786 — fix(ai): expose Kimi Coding K3 effort levels** (OPEN)  
   *Adds low, high, and max thinking levels for Kimi K3, with separate handling for Moonshot K3's max-only contract.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6786)

3. **#6783 — feat(ai): add StepFun providers** (CLOSED)  
   *Four new native model providers (stepfun, stepfun-ai, stepfun-step-plan, stepfun-step-plan-ai) sourced from models.dev.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6783)

4. **#6779 — feat(ai): support freeform tool calls** (CLOSED)  
   *Adds typed JSON and freeform tool definitions, OpenAI custom tool calls, and legacy JSON tool-call replay across AI, agent APIs, and UI.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6779)

5. **#6775 — retry on compaction/branch summarization retryable failures** (OPEN)  
   *Directly addresses #6647 by adding retry logic to compaction and branch summarization calls.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6775)

6. **#6771 — fix(coding-agent): speed up external editor launch** (CLOSED)  
   *Uses mkdtemp instead of direct os.tmpdir() writes to avoid slowdowns from crowded temp directories.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6771)

7. **#6765 — feat(ai): separate generated model data** (CLOSED)  
   *Moves generated model values into separate JSON files while retaining TypeScript catalog structure, reducing per-PR churn in the repo.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6765)

8. **#6764 — fix(tui): handle CRLF and CR line endings** (CLOSED)  
   *Previously only split on LF; CRLF left raw carriage returns in wrapped lines, corrupting TUI layout.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6764)

9. **#6730 — fix(coding-agent): preserve compaction queue behavior** (CLOSED)  
   *Preserves steering/follow-up behavior for compaction-queued messages and fixes active-run prompt logic.*  
   📎 [GitHub](https://github.com/earendil-works/pi/pull/6730)

10. **#6778 — fix: preserve extension provider auth during availability refresh** (CLOSED)  
    *Fixes "Provider is not configured" errors after startup by preserving provisional auth entries across availability refreshes.*  
    📎 [GitHub](https://github.com/earendil-works/pi/pull/6778)

## Feature Request Trends

- **Provider & Model Expansion**: High demand for new provider support (StepFun, Kimi K3 thinking levels, Copilot long-context pricing) and cleanup of deprecated models.
- **Message & UI Customization**: Extensions want APIs to mutate displayed agent messages without touching LLM content (markdown formulas, collapsed tool cards, custom rendering).
- **Environment & Config Portability**: Multiple requests for environment-variable-driven configuration (e.g., `PI_MODEL`, `PI_PROVIDER`, honoring `PI_CODING_AGENT_DIR` for crash logs).
- **Copilot & Enterprise Integration**: Growing need for proper compaction, pricing, and auth handling across Copilot Enterprise and Codex endpoints.

## Developer Pain Points

1. **TUI Performance & Stability**: Core 100% CPU during streaming (uncached grapheme segmentation), multi-GB memory explosions from tool update promises, hanging on submit, dual cursors on exit — the terminal UI remains the most painful area.
2. **Compaction Fragility**: Single transient failures (stream drops, network blips) kill compaction entirely because there's no retry — users forced to restart sessions. Also problematic for Copilot Enterprise and very small sessions ("Nothing to compact").
3. **Config Sync & Portability**: `pi update --extensions` doesn't sync missing packages between machines, `PI_CODING_AGENT_DIR` is ignored for crash logs, and environment variable auth doesn't propagate to summary features.
4. **Provider Inconsistencies**: Deprecated models remain selectable, thinking level mappings are wrong for GPT-5.4 mini and Kimi K3, Copilot pricing excludes cacheWrite costs, and error response bodies are sometimes silently dropped.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-18

## Today's Highlights

The `qwen serve` daemon ecosystem is accelerating rapidly, with a wave of PRs and issues converging around **multi-workspace support**, **persistent session APIs**, and **subagent reliability**. A major RFC on multi-workspace daemons (#6378) has garnered 29 comments, and infrastructure work—like the new **Fleet Shepherd** CI janitor (#7142) and concurrent autofix routing (#7127)—signals the team is scaling automated maintenance. Meanwhile, several **streaming and rendering bugs** in the TUI and web shell remain top community pain points.

## Releases

- **v0.19.11-nightly.20260718.767a32484**: A nightly release containing two notable changes:
  - `feat(daemon): Trace cold first-session startup` – adds observability for the daemon's initial session launch, addressing long-standing latency monitoring requests.
  - `fix(serve): Harden multi-workspace ownership` – strengthens ownership semantics as the multi-workspace feature nears readiness.

## Hot Issues

1. **[#6378 – RFC: Support multiple workspaces in one `qwen serve` daemon](https://github.com/QwenLM/qwen-code/issues/6378)** (29 comments)  
   The most-discussed issue this week. Proposes extending the 1-daemon:1-workspace model without breaking existing clients. Community feedback is heavily debating session isolation vs. shared resources.

2. **[#4748 – Optimize daemon cold start and `qwen serve` fast-path latency](https://github.com/QwenLM/qwen-code/issues/4748)** (6 comments)  
   A long-running performance tracker. Cold-start gap (2.5s daemon vs 0.7s CLI) has been partially optimized; this issue now tracks remaining work. Directly impacts developer experience for daemon users.

3. **[#7040 – RFC: Reliable auto-memory recall — timing, quality, and telemetry](https://github.com/QwenLM/qwen-code/issues/7040)** (6 comments)  
   A scoped-down proposal to improve memory recall for all users without turning Core into an enterprise governance platform. Three independently reviewable items on the roadmap. Community feedback has been constructive.

4. **[#7051 – VS Code side plugin error (ACP process failure)](https://github.com/QwenLM/qwen-code/issues/7051)** (6 comments)  
   Reports that the VS Code Companion fails to launch its bundled ACP CLI on Windows. Root cause appears to be Electron flag inheritance. Multiple downstream users affected.

5. **[#6809 – Ctrl+S diff preview garbled for multi-line edits](https://github.com/QwenLM/qwen-code/issues/6809)** (4 comments)  
   Lines are concatenated in the diff preview when editing files with multiple lines. A critical UX bug that undermines trust in the permission dialog. Community has confirmed the repro.

6. **[#6992 – Chained MCP calls fail silently with permission UI stuck](https://github.com/QwenLM/qwen-code/issues/6992)** (3 comments)  
   Two critical bugs: chained MCP calls fail silently on Windows, and the permission UI gets stuck. Under investigation by the MCP integration team.

7. **[#6806 – Status line context percentage not refreshing after `/compress`](https://github.com/QwenLM/qwen-code/issues/6806)** (3 comments)  
   A cosmetic but confusing bug: token count stays stale until the next model request. Marked `welcome-pr` for community contributors.

8. **[#6776 – Ctrl-C exit leaves garbled terminal](https://github.com/QwenLM/qwen-code/issues/6776)** (3 comments)  
   Terminal key mappings not cleaned up after exiting with Ctrl-C, causing `9;5u` output on subsequent presses. Reproducible and frustrating for CLI-heavy users.

9. **[#7128 – Web shell history corruption on refresh](https://github.com/QwenLM/qwen-code/issues/7128)** (2 comments)  
   Refreshing the page concatenates previous messages into one string in the input box. 100% reproducible in local deployments. A serious data-loss concern for web shell users.

10. **[#7006 – Streaming tall code block breaks rendering](https://github.com/QwenLM/qwen-code/issues/7006)** (2 comments)  
    Code blocks taller than the viewport lose syntax highlighting, reset line numbers, and stall. Affects both TUI and web shell users during long streaming responses.

## Key PR Progress

1. **[#7143 – Fix: resolve parameter expansion in command position](https://github.com/QwenLM/qwen-code/pull/7143)**  
   Makes `getCommandRoot` resolve `$VAR`, `${VAR}`, etc. as the shell would. Prevents hard-refusal of commands using environment variables in command position.

2. **[#7142 – CI: Fleet Shepherd automated unblocking](https://github.com/QwenLM/qwen-code/pull/7142)**  
   A janitor workflow that walks autofix bot PRs every 15 minutes and auto-resolves merge conflicts or stale checks. Reduces human shepherd burden significantly.

3. **[#7060 – Let user read full plan from `exit_plan_mode` confirmation](https://github.com/QwenLM/qwen-code/pull/7060)**  
   Press `o` to open the full plan in an editor. Community request from plan-mode power users who needed scrollable access to long plans.

4. **[#7043 – Show active path in compact tool summaries](https://github.com/QwenLM/qwen-code/pull/7043)**  
   Multi-tool summaries now show a dimmed hint line with the most recent active file path. Part of the broader push to improve tool description transparency.

5. **[#6999 – Replay ChatRecord history in readonly web shell](https://github.com/QwenLM/qwen-code/pull/6999)**  
   Adds deterministic replay of persisted session history into transcript blocks. Enables restoring full conversation context on page reload.

6. **[#7089 – Align system prompt with interaction mode](https://github.com/QwenLM/qwen-code/pull/7089)**  
   System prompt now adapts to interactive, non-interactive, and ACP-hosted modes. Permission guidance no longer assumes dialogs for every tool call.

7. **[#7054 – Git status chip and working-tree diff in web shell](https://github.com/QwenLM/qwen-code/pull/7054)**  
   Three connected features: live dirty-state chip, visual diff display, and sidebar git status. Brings web shell closer to TUI parity.

8. **[#7048 – Improve subagent delegation defaults and guardrails](https://github.com/QwenLM/qwen-code/pull/7048)**  
   Top-level one-shot subagents now default to background execution; `run_in_background: false` remains as explicit opt-out. Prevents accidental UI blocking.

9. **[#6945 – Daemon Todo stop guard](https://github.com/QwenLM/qwen-code/pull/6945)**  
   After `todo_write` leaves pending items, a daemon session may auto-continue up to two more calls. Opt-in, disabled by default.

10. **[#7127 – Fan out autofix review targets, stop route-scan starvation](https://github.com/QwenLM/qwen-code/pull/7127)**  
    Processes concurrent scan targets instead of serially, preventing bottlenecks in busy repositories. Companion to Fleet Shepherd.

## Feature Request Trends

1. **Multi-workspace & session management** – Dominates the conversation: workspace-scoped APIs (`/workspace/:id/sessionInfo`, `/sessions`), multi-workspace daemon mode, and persisted session counts. Indicates enterprise and team users are pushing for isolated project contexts.

2. **Tool description transparency** – Multiple requests (#6813, #7110) to show file names and operation details in compact tool summaries instead of opaque counts. Users want to audit what tools are doing without expanding every entry.

3. **Subagent and background automation** – Features for background task continuation (Todo stop guard), subagent model persistence (#7099), and daemon channel contacts (#7103). The roadmap is clearly shifting toward autonomous, non-interactive operation.

4. **Web shell parity** – Requests for folder pickers, path autocomplete (#7102), persistent history pagination errors (#7117), and visual git integration (#7054). The web shell is rapidly catching up to the TUI but still missing core ergonomics.

## Developer Pain Points

1. **VS Code Companion launch failures** – Issues #7051 and #7101 report ACP CLI failures on Linux and Windows due to inherited Electron flags. Multiple users blocked immediately after installation.

2. **Terminal and keyboard signal handling** – Ctrl-C exit corruption (#6776) and accidental exit on Ctrl-C in PyCharm (#4586) continue to plague CLI users. The community considers these high-priority UX regressions.

3. **Streaming rendering bugs** – Tall code blocks breaking (#7006), diff previews garbled (#6809), and history corruption on refresh (#7128) indicate the rendering pipeline needs hardening for edge cases.

4. **MCP integration fragility** – Chained MCP calls failing silently (#6992) on Windows and permission UI deadlocks suggest the MCP layer lacks robust error recovery.

5. **Context management staleness** – Token percentage not updating after `/compress` (#6806) and memory recall timing concerns (#7040) show that users rely on accurate context feedback for cost and quality control.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-18

## Today's Highlights

The v0.9.1 release cycle is winding down with a flurry of fixes targeting Windows PTY reliability, plugin initialization, and OAuth provider stability. A critical bug fix landed for xAI device-login, which was completely broken due to a hard-coded endpoint path. Meanwhile, the community continues to raise concerns about CodeWhale's agent autonomy, with two high-traffic issues (#4032, #3275) documenting persistent overreach beyond user intent.

## Releases

No new releases in the last 24 hours. The repository remains on v0.9.3 for feature work, with v0.9.1 bugfix patches still flowing.

---

## Hot Issues

### 1. [#4032 — Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)
**35 comments** — The top-voted open issue. Codewhale consistently ignores user-provided scripts and writes its own temporary scripts for calculations, then defends the behavior when challenged. This is a fundamental agent-governance failure that undermines trust in automation.

### 2. [#3275 — CodeWhale overly involved in self-questioning and deviating from user intent](https://github.com/Hmbown/CodeWhale/issues/3275)
**17 comments** — A regression from a previous fix (#3061). CodeWhale enters self-driven loops of proposing, answering, and executing without waiting for user confirmation. The community is frustrated that scope creep has returned.

### 3. [#4479 — TUI rendering glitch — missing/extra spaces, recovers on mouse selection](https://github.com/Hmbown/CodeWhale/issues/4479)
**5 comments** — Windows Terminal users report intermittent text corruption that is instantly fixed by mouse-selecting the affected area. This suggests a terminal-backend sync issue rather than a rendering pipeline bug.

### 4. [#4410 — Restore xAI device-code OAuth login](https://github.com/Hmbown/CodeWhale/issues/4410)
**4 comments** — Tagged release-blocker. xAI OAuth is completely broken because CodeWhale uses a deprecated device-authorization path. The official Grok CLI uses a different endpoint entirely.

### 5. [#4489 — Hooks process leak on Windows](https://github.com/Hmbown/CodeWhale/issues/4489)
**4 comments** — Hook commands that inherit stdin without receiving EOF leak Node.js processes. The timeout mechanism only kills the intermediate `cmd.exe`, leaving `node.exe` grandchild processes orphaned.

### 6. [#4100 — exec_shell fails with exit code 2147483647 on Windows](https://github.com/Hmbown/CodeWhale/issues/4100)
**4 comments** — A catastrophic failure value (`i32::MAX`) suggests resource exhaustion or handle leaks within Windows ConPTY infrastructure. Long-running sessions are particularly vulnerable.

### 7. [#4416 — Stale failed-agent state leaks between sessions](https://github.com/Hmbown/CodeWhale/issues/4416)
**3 comments** — Opening a second CodeWhale instance in the same workspace shows stale red failed-agent rows from a different, earlier session. The work surface is contaminated by orphaned state.

### 8. [#4482 — Ctrl+O pager: output truncated and closes immediately](https://github.com/Hmbown/CodeWhale/issues/4482)
**3 comments** — Two related pager bugs: truncated output ending with `...` mid-sentence, and the pager flashing and closing immediately when the composer contains a draft. The truncation is confirmed to be data loss, not just a rendering issue.

### 9. [#3927 — Onboarding API-key step is a hard DeepSeek-only gate](https://github.com/Hmbown/CodeWhale/issues/3927)
**2 comments** — First-run users who want a different provider or just want to explore cannot proceed past the API-key screen. The only exits are a valid key, Esc (jumps two steps back), or Ctrl+C.

### 10. [#4085 — Cannot read/write files under Dropbox on macOS](https://github.com/Hmbown/CodeWhale/issues/4085)
**2 comments** — CodeWhale fails to access files under `~/Library/CloudStorage/Dropbox/` on macOS 12+. Not a sandbox issue — the binary is ad-hoc signed with zero entitlements. Likely a File Provider framework path resolution bug.

---

## Key PR Progress

### 1. [#4509 — fix(tui): enable CJK feature for unicode-width](https://github.com/Hmbown/CodeWhale/pull/4509)
**CLOSED** — Fixed Ambiguous-width Unicode glyph overlap (e.g., circled numbers ①②③) by enabling the `cjk` feature in the `unicode-width` crate. A clean, surgical fix.

### 2. [#4505 — fix(auth): isolate xAI device login from Tokio](https://github.com/Hmbown/CodeWhale/pull/4505)
**CLOSED** — Resolves the release-blocker xAI OAuth issue (#4410). Moves synchronous device-authorization flow to Tokio's blocking pool and adds a multi-thread runtime flag.

### 3. [#4506 — feat(release): publish native Windows ARM64 artifacts](https://github.com/Hmbown/CodeWhale/pull/4506)
**CLOSED** — Adds Windows ARM64 binary builds for `codewhale`, `codew`, and `codewhale-tui`. Also updates npm, built-in updater, docs, and website install UI.

### 4. [#4498 — fix(tui): make Ctrl+O inspector complete and draft-safe](https://github.com/Hmbown/CodeWhale/pull/4498)
**OPEN** — Routes Ctrl+O to the whole-turn inspector even when a draft exists. Moves external-editor access to Ctrl+Shift+O. Preserves complete assistant results in the pager.

### 5. [#4504 — fix(onboarding): support keyless and guided provider setup](https://github.com/Hmbown/CodeWhale/pull/4504)
**OPEN** — Allows first-run onboarding to continue with empty credentials for self-hosted providers (SGLang, vLLM, Ollama). Explicit API-key auth still rejects empty input.

### 6. [#4500 — feat(auto): surface routing scope and per-turn receipts](https://github.com/Hmbown/CodeWhale/pull/4500)
**OPEN** — Adds typed Auto routing receipts that record the effective provider pair, selected tier, and reasoning. Carries receipts through dispatch to the turn inspector.

### 7. [#4491 — fix(runtime): contain hooks and preserve Windows PTY status](https://github.com/Hmbown/CodeWhale/pull/4491)
**CLOSED** — Fixes the hook process leak (#4489) and removes the lossy exit-status sentinel that blocked diagnosis of #4100. A two-fix runtime-reliability bundle.

### 8. [#4477 — fix: don't let Vim Normal mode swallow Space for thinking block expansion](https://github.com/Hmbown/CodeWhale/pull/4477)
**CLOSED** — Pressing Space in Vim Normal mode with an empty input now correctly expands/folds the focused thinking block instead of being silently discarded.

### 9. [#4470 — fix(ohos): generate QuickJS bindings and gate unsupported PTY tools](https://github.com/Hmbown/CodeWhale/pull/4470)
**CLOSED** — Enables `rquickjs` bindgen for HarmonyOS and keeps `portable-pty` out of the OHOS dependency graph while retaining the non-PTY `exec_shell` path.

### 10. [#4490 — fix(mcp): align configured command health with spawn](https://github.com/Hmbown/CodeWhale/pull/4490)
**CLOSED** — Resolves MCP stdio commands against the same expanded environment used by real spawns. Makes `codewhale mcp health` actually reliable.

---

## Feature Request Trends

**Agent Governance & Control** — The strongest signal. Multiple issues (#4032, #3275, #4415) demand hard tool-call budgets, write-first constraints, and explicit user confirmation before autonomous execution. Users want CodeWhale to be helpful but not presumptuous.

**Provider Diversity** — Users are asking for Kimi K3 support (#4387), OpenCode Go/Zen (#1481), and OAuth-based login flows for Kimi (#4417) and OpenAI (#2984). The onboarding API-key gate (#3927) is a blocker for multi-provider adoption.

**Platform Expansion** — Three distinct pushes: native Windows ARM64 (#4506), Termux/Android support (#4236, #4242), and HarmonyOS/OpenHarmony (#4470, #4384). The Termux effort is particularly active with a dedicated QA issue.

**Plugin & MCP Contracts** — Several feature requests around plugin trust separation from enablement (#4399), plugin-shipped skills wiring (#3917), and plugin registry initialization across all launch paths (#3916). The community wants a mature plugin ecosystem.

---

## Developer Pain Points

**Windows Stability** — Three of the top 10 issues are Windows-specific: ConPTY corruption, hook process leaks, and catastrophic exit codes. Windows Terminal users are experiencing the most severe reliability problems.

**Agent Overreach** — The single most vocal pain point. CodeWhale's tendency to write its own scripts, ask and answer its own questions, and exceed tool-call budgets is eroding user trust. The community wants deterministic, auditable agent behavior.

**Session State Leakage** — Stale failed-agent rows contaminating new sessions (#4416) and orphaned worker processes (#4489) suggest poor lifecycle management. Users report having to kill processes manually or restart.

**Data Loss in TUI** — The Ctrl+O pager truncation (#4482) confirms that data can be lost, not just misrendered. For a developer tool handling code changes, this is a critical concern.

**Onboarding Friction** — The hard DeepSeek-only gate on first launch (#3927) alienates developers who want to evaluate CodeWhale without committing to a specific API key. Self-hosted users are particularly affected.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*