# AI CLI Tools Community Digest 2026-08-13

> Generated: 2026-08-13 02:06 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — AI CLI Developer Tools
**Date:** 2026-08-13

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is experiencing a bifurcation between mature, enterprise-focused platforms (Claude Code, Codex, Copilot CLI) and rapidly iterating challengers (Gemini CLI, Qwen Code, OpenCode, CodeWhale). While the established tools deal with scale-out issues like multi-session stability, resource leaks, and enterprise authentication, the newer entrants are still solving fundamental reliability problems around context management, subagent coordination, and provider compatibility. A clear pattern emerges: **memory/persistence, multi-agent orchestration, and MCP reliability are the universal pain points across all platforms.** Desktop clients are becoming the new battleground, with Windows stability and Linux support being the most vocal community demands.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Active PRs (24h) | Release Status |
|------|-----------------|------------------|----------------|
| **Claude Code** | 10 (25–80 comments each) | 5 | 🟢 v2.1.229 (same day) |
| **OpenAI Codex** | 10 (2–83 comments) | 10 | ⚪ No release (24h) |
| **Gemini CLI** | 10 (3–12 comments) | 10 | 🟢 v0.56.0-nightly (same day) |
| **Copilot CLI** | 10 (2–8 comments) | 3 | ⚪ No release (24h) |
| **Kimi Code CLI** | 1 active + 9 historical | 2 | ⚪ No release (24h) |
| **OpenCode** | 10 (1–35 comments) | 10 | 🟢 v1.18.17, v1.18.18 (same day) |
| **Pi** | 10 (3–18 comments) | 10 | ⚪ No release (24h) |
| **Qwen Code** | 10 (3–10 comments) | 10 | 🟢 Desktop v0.2.0, v0.2.1 (same day) |
| **CodeWhale** | 10 (3–9 comments) | 10 | 🟢 v0.9.6 (recent) |

**Key observations:**
- **Most active:** Claude Code (high-comment issues), Codex (rapid PR throughput), Gemini CLI (nightly releases + security fixes)
- **Most stable release cadence:** Claude Code, Gemini CLI, Qwen Code, OpenCode all shipped same-day releases
- **Slower movers:** Kimi Code (only 1 active issue, 2 PRs), Copilot CLI (no release, 3 PRs)
- **Community engagement leader:** Claude Code (issues with 80+ comments, 498 👍 on Linux request)

---

## 3. Shared Feature Directions

| Requirement | Tools (Evidence) | Specific Need |
|-------------|-----------------|---------------|
| **Persistent Memory** | Kimi (#1283, 36 comments), Gemini (auto-memory PRs), Qwen (RFC #7040) | Cross-session context retention, auto-recall reliability |
| **Multi-Agent Orchestration** | Claude (post-mortem #54393), Gemini (subagent hangs #21409), Qwen (#8097), Kimi (#1246), Copilot (#4467) | Parallel tool calls, subagent lifecycle control, coordination visibility |
| **MCP Reliability** | Claude (#86142, #86040), Copilot (#4464, #4466), OpenCode (#33027), CodeWhale (#5335) | Retry/backoff, OAuth refresh, spec compliance, tool visibility |
| **Context/Compaction Management** | Codex (#32888), Pi (#6879), Claude (#78720), Qwen (#8979) | Predictable compaction, stale-token fixes, cost visibility |
| **Config Reload Without Restart** | OpenCode (#6815, 88👍), Gemini (settings.json fixes) | `/reload` command, live config updates |
| **Windows/Linux Desktop Stability** | Claude (GPU crash #81698), Codex (WMI exhaustion #34260), Linux desktop demand (#65697) | Process management, platform parity, crash recovery |
| **Cost/Usage Visibility** | Codex (PR #38281/38282 — thread credits), Claude (advisor accounting #84738), OpenCode (budget PR #42202) | Per-thread/session cost tracking, quota attribution |
| **Custom Timeouts/Indefinite Waits** | Codex (#28969, 194👍), Qwen (#8963 "blind accept mode") | Control over agent pacing, no auto-dismiss |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise stability, multi-session, platform breadth | Professional dev teams, Anthropic ecosystem | Mature OSS with CLI + desktop (+TUI), extensive hooks/skills ecosystem |
| **OpenAI Codex** | Enterprise features, remote execution, thread management | Enterprise, OpenAI customers | Rust-based, gRPC/WebSocket hybrid, plugin metrics, credential broker |
| **Gemini CLI** | Security, evaluation infrastructure, nightly innovation | Google ecosystem users, security-conscious devs | Aggressive nightly releases, eval tooling (`eval:validate`), GHSA-driven security fixes |
| **Copilot CLI** | GitHub/VS Code integration, MCP ecosystem | GitHub enterprise users | Tight GitHub integration, `--server --stdio` headless mode, model flexibility |
| **Kimi Code** | Community-driven simple UX, memory demand | Individual developers, Moonshot ecosystem | Smaller community, strong feature requests (memory, parallel execution) |
| **OpenCode** | Cross-provider flexibility, desktop + CLI convergence | Provider-agnostic users, plugin developers | Solid-based desktop, session budgets, multi-provider (Azure, xAI, Kimi, DeepSeek) |
| **Pi** | TUI innovation, local models, interactive UX | Terminal power users, extension authors | Component-based TUI with mouse events, Ollama proxy, transactional persistence |
| **Qwen Code** | Long-running autonomy, workflow orchestration | Agentic workflow users, Qwen ecosystem | Workflow dispatches, per-agent transcripts, Chrome bridge sharing, Tauri migration |
| **CodeWhale** | i18n, multi-provider, crate architecture | International users, Rust community | Rebranding to CodeWhale, crate decomposition (EPIC-005/006), PiP terminal mode |

**Standout differentiators:**
- **Claude Code:** Deepest hooks/skills ecosystem, most significant community investment in platform stability
- **Gemini CLI:** Evaluation-first engineering (76 tests, 6 model versions), swift security response
- **Pi:** Most novel TUI interactions (mouse events, PiP), strongest local-model story
- **OpenCode:** Cross-provider neutrality with per-provider system prompt fixes
- **Qwen Code:** Strongest workflow/agent dispatch architecture with per-agent transcripts

---

## 5. Community Momentum & Maturity

### Rapidly Iterating / High Momentum
- **Claude Code** — Highest community engagement (80+ comment issues), same-day releases, most-voted feature requests (498👍 Linux client). Mature but constantly addressing scale-out pain.
- **Gemini CLI** — Nightly release cadence, fast security fixes (SSRF, prompt-injection bypass), strong eval infrastructure. Momentum is building quickly.
- **Qwen Code** — Two desktop releases in 24h, active RFC process with measured design amendments. Autofix PR culture (takeover bots) keeps velocity high.
- **OpenCode** — Two point releases in one day, broad provider coverage, active PR pipeline (10 in 24h).

### Steady / Mature
- **OpenAI Codex** — High PR throughput (10/24h) but no release; enterprise focus (thread credits, gRPC hosts) suggests internal work ahead of public features.
- **Pi** — Consistent merged PRs (5+ merged in digest), strong architectural decisions (transactional sessions, usage-preserving events). Steady but not explosive growth.

### Slower / Awaiting Maintainer Response
- **Copilot CLI** — 10+ triage issues unanswered; 3 PRs total (2 auto-rejected). Maintainer bandwidth appears constrained.
- **Kimi Code** — Only 1 active issue, 2 PRs awaiting review for months. Smallest community, largest gaps (memory, parallel execution).
- **CodeWhale** — Rebranding absorbs attention; active crate decomposition effort suggests architectural focus over feature velocity.

### Community Sentiment Indicators
- **High trust:** Gemini CLI (security-focused fixes), OpenCode (responsive to billing issues)
- **Eroding trust:** Claude Code (Opus 5 quality concerns "nerfed", prompt-cache costs), Copilot CLI (silent model overrides, unanswered triage)
- **Growing demand:** Linux desktop across all tools, local model support (Pi, Kimi), config-free workflows

---

## 6. Trend Signals

### For Tool Developers

1. **Memory is the next competitive frontier.** Kimi (36 comments), Qwen (RFC #7040 with measured design), Gemini (auto-memory) all converging on auto-recall systems. The tool that nails reliable, privacy-safe memory will win daily-driver adoption.

2. **Windows stability is the #1 platform risk.** Codex (WMI exhaustion, `powershell` spawn storms), Claude (GPU crashes, repair loops), Copilot (keybinding regressions) all face Windows-specific pain. Invest in Windows process management or lose enterprise trust.

3. **MCP is the seam that breaks.** Every tool reports MCP failures (retry gaps, OAuth issues, spec non-compliance, silent server kills). A reliable MCP client layer is table-stakes for enterprise adoption.

4. **Context/compaction transparency is non-negotiable.** Codex (#32888), Pi (#6879), Claude (cache invalidation), Qwen (#8979) all show users hitting context walls with unexpected cost or data loss. Surface token usage, compaction triggers, and costs proactively.

5. **Headless/server mode is a growing use case.** Copilot (`--server --stdio` leaks), Codex (gRPC hosts), Gemini (vscode-ide-companion) all being used for CI and desktop integrations. Resource leaks in headless mode damage production trust.

6. **Security is becoming a differentiator.** Gemini (GHSA fixes in days), Copilot (`pull_request_target` migration), CodeWhale (RUSTSEC), OpenCode (globstar deny-rule fix — 3 months open) — security response time is now a community trust signal.

### For Developers Choosing a Tool

- **For enterprise stability:** Claude Code (mature, but watch model quality) or Codex (enterprise features maturing)
- **For bleeding-edge features:** Gemini CLI (nightly releases, eval tooling) or Qwen Code (workflow orchestration)
- **For terminal purists:** Pi (TUI innovation, local models) or Claude Code (mature CLI)
- **For cross-provider flexibility:** OpenCode (best provider neutrality) or CodeWhale (multi-provider + i18n)
- **For GitHub-centric teams:** Copilot CLI (tight integration, but maintainer responsiveness is a risk)

---

*Report compiled 2026-08-13 from community digest summaries. All metrics are based on publicly available GitHub activity.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report, based on the provided data.

---

### 1. Top Skills Ranking

The following Pull Requests have generated the most discussion and represent the highest-activity Skills in the community.

- **#1298: Fix `skill-creator` eval loop (Open)**
  - **Author:** MartinCajiao
  - **Functionality:** This PR addresses a critical bug in the `skill-creator` pipeline where the evaluation script (`run_eval.py`) reported a `0%` recall rate for all skill descriptions, making the description-optimization loop ineffective. It includes fixes for Windows stream reading, trigger detection, and parallel workers.
  - **Discussion Highlights:** This is the primary fix attempt for the widely-reported Issue #556. The discussion centers on the technical root cause of the eval failure and the cross-platform (Windows) compatibility issues.
  - **Status:** Open
  - **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

- **#210: Improve frontend-design skill clarity (Open)**
  - **Author:** justinwetch
  - **Functionality:** This PR proposes a comprehensive revision of the `frontend-design` skill to make its instructions more actionable and specific for Claude. The goal is to ensure the skill's guidance is clear enough to steer behavior within a single conversation without being overly verbose.
  - **Discussion Highlights:** High engagement suggests a strong community desire for more effective and prescriptive design-related skills. The focus is on balancing detail with token efficiency.
  - **Status:** Open
  - **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

- **#723: Add `testing-patterns` skill (Open)**
  - **Author:** 4444J99
  - **Functionality:** Proposes a new, comprehensive skill covering the full software testing stack, including testing philosophy (Testing Trophy), unit testing (AAA pattern), React component testing, and guidance on what *not* to test.
  - **Discussion Highlights:** The breadth of the proposal is a major topic, with community interest in a standardized, best-practice guide for AI-assisted test generation.
  - **Status:** Open
  - **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

- **#568: Add ServiceNow platform skill (Open)**
  - **Author:** Vanka07
  - **Functionality:** Aims to introduce a broad ServiceNow platform assistant skill covering numerous modules, including ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, and IntegrationHub. It is designed as a high-level platform guide rather than a narrow scripting helper.
  - **Discussion Highlights:** The scale and scope of the platform are the main discussion points. It represents a significant demand for specialized enterprise software support.
  - **Status:** Open
  - **Link:** [PR #568](https://github.com/anthropics/skills/pull/568)

- **#486: Add ODT skill (Open)**
  - **Author:** GitHubNewbie0
  - **Functionality:** This PR adds a skill for creating, filling, reading, and converting OpenDocument Format files (`.odt`, `.ods`), bridging a gap for users who prefer open-source document standards.
  - **Discussion Highlights:** The community discussion focuses on the need for better open-standard document support beyond the existing DOCX and PDF skills.
  - **Status:** Open
  - **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

- **#83: Add skill-quality-analyzer and skill-security-analyzer (Open)**
  - **Author:** eovidiu
  - **Functionality:** This PR introduces two "meta-skills" designed to analyze other skills. The `skill-quality-analyzer` evaluates structure and documentation, while the `skill-security-analyzer` presumably assesses for potential security risks or trust boundary issues.
  - **Discussion Highlights:** This proposal directly responds to community concerns about skill quality and security (linked to Issue #492). It indicates a demand for tooling that can police the ecosystem itself.
  - **Status:** Open
  - **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

### 2. Community Demand Trends

The most pressing community concerns, as reflected in issue discussions, highlight a need for platform maturity and trust over new creative features.

- **Security & Trust:** The most commented-on issue, **#492 [Security: Community skills distributed under anthropic/ namespace]**, reveals a high demand for a secure and trustworthy skill distribution model. Users are concerned about impersonation and trust boundary abuse.
- **Reliability & Bug Fixes:** A significant portion of the discussion revolves around the `skill-creator` tooling not working correctly, particularly the evaluation loop failing (**Issue #556**). This signals a need for stable, robust developer tooling to support the ecosystem.
- **Enterprise & Collaboration Features:** There is a clear call for features that enable professional use, such as **org-wide skill sharing** (**Issue #228**) and support for enterprise platforms like ServiceNow and SharePoint.
- **Document Interoperability:** Continued requests for new document format skills (ODT, etc.) and bug fixes for existing ones (DOCX, PDF) show a stable demand for reliable document generation and manipulation capabilities.

### 3. High-Potential Pending Skills

These active PRs are not yet merged but show high community engagement and are strong candidates for inclusion in the near future.

- **#1367: Add `self-audit` skill (Open)**
  - A universal skill that performs mechanical file verification and a four-dimension reasoning audit on AI output before delivery, addressing the demand for higher output quality and reliability.
  - **Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

- **#1050 & #1099: `skill-creator` Windows compatibility fixes (Open)**
  - These PRs are crucial for making the `skill-creator` functional on Windows, a significant portion of the developer base. They fix subprocess and encoding bugs that caused the tool to fail.
  - **Links:** [PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099)

- **#1479: Add `plan-file-hygiene` skill (Open)**
  - Addresses the lifecycle management of planning artifacts, preventing them from accumulating and cluttering the workspace. This is a practical solution to a common workflow problem.
  - **Link:** [PR #1479](https://github.com/anthropics/skills/pull/1479)

### 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trust, security, and governance**, focusing heavily on fixing the core `skill-creator` tooling and establishing safe distribution and quality assurance mechanisms to make the ecosystem reliable for professional and enterprise use.

---

# Claude Code Community Digest — 2026-08-13

## Today's Highlights
Release **v2.1.229** lands with remote-control session resume, server-supplied hook support for self-hosted runners, and SSE keepalive improvements. Meanwhile, the community is actively surfacing regressions around Windows desktop stability, prompt-cache invalidation costs, and Opus 5 quality concerns — with several issues crossing 25+ comments.

## Releases
**v2.1.229** ([changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.229))
- Documented `claude remote-control --continue` for resuming the most recent Remote Control session
- Added server-supplied Claude Code hook support for self-hosted runner sessions, matching managed-environment behavior
- Added SSE keepalive pings to gateway streaming responses

## Hot Issues

1. **[#84352 — CVP-approved org still receives cyber safeguard blocks (80 comments, 12 👍)](https://github.com/anthropics/claude-code/issues/84352)**  
   A Claude.ai org with prior Cyber Verification Program approval is again hitting cyber-safeguard blocks; the Verification Portal shows "Under review" despite prior approval. High engagement suggests widespread verification-process pain.

2. **[#65697 — Official Claude Desktop build for Linux (52 comments, 498 👍)](https://github.com/anthropics/claude-code/issues/65697)**  
   Closed now, but the most-upvoted open/closed feature request in the tracker. 498 reactions signal strong Linux-desktop demand that remains unaddressed.

3. **[#54393 — Post-mortem: 12 multi-agent coordination bugs (27 comments)](https://github.com/anthropics/claude-code/issues/54393)**  
   A detailed catalog of coordination failures from one autonomous overnight run. Generic to any multi-agent project; filed as a master bug list for agent-view improvements.

4. **[#81698 — Windows desktop GPU process crash kills all sessions (25 comments)](https://github.com/anthropics/claude-code/issues/81698)**  
   GPU process crash (exit code 101457950) takes down the entire app and every running session. NVIDIA RTX 5080, Windows 11, recent CCD build. Multi-session users are especially vulnerable.

5. **[#14061 — `/plugin update` does not invalidate plugin cache (25 comments, 31 👍)](https://github.com/anthropics/claude-code/issues/14061)**  
   Stale plugin versions persist after update; flagged duplicate but still very active. Cache invalidation correctness is a recurring theme.

6. **[#75899 — Left arrow navigates to agents screen, breaks session (14 comments, 19 👍)](https://github.com/anthropics/claude-code/issues/75899)**  
   macOS TUI keybinding regression: left arrow in chat input navigates away; not rebindable, and returning breaks the main session view. Workflow-disrupting for keyboard-driven users.

7. **[#24172 — Conversations disappear when closing VSCode (12 comments, 25 👍)](https://github.com/anthropics/claude-code/issues/24172)**  
   High-priority Windows/VSCode bug: chat history unrecoverable after close/navigate. Marked high-priority by maintainers but still open — a trust-eroding issue.

8. **[#79366 — Worktree sessions reuse stale worktree dirs (11 comments, 7 👍)](https://github.com/anthropics/claude-code/issues/79366)**  
   New session with worktree isolation lands in a previous session's directory. Cross-contamination risk for parallel agent runs.

9. **[#82162 — Opus 5 quality regression: "nerfed" (9 comments, 3 👍)](https://github.com/anthropics/claude-code/issues/82162)**  
   Users report Opus 5.0 fails to deliver work even after 5 retries; paired with [#82326](https://github.com/anthropics/claude-code/issues/82326) on hallucination regressions vs 4.8. Model-quality concerns are rising.

10. **[#83364 — WebSearch fails at effort xhigh/max on Opus 5 (2 comments, 4 👍)](https://github.com/anthropics/claude-code/issues/83364)**  
    Regression: `WebSearch` returns HTTP 400 when effort is `xhigh`/`max` — `output_config.effort 'xhigh' is not supported when thinking is d...` Tooling breaks exactly where power users live.

## Key PR Progress

1. **[#85925 — docs: point remaining stale doc links at code.claude.com](https://github.com/anthropics/claude-code/pull/85925)** — Cleanup of old-domain links across plugins, skills, agents, and issue templates. Merged; reduces redirect churn.

2. **[#85822 — docs: fix stale doc links and README drift](https://github.com/anthropics/claude-code/pull/85822)** — Companion cleanup, verified against live redirects. Merged; zero overlap with #85925.

3. **[#41611 — add the missing source to claude code](https://github.com/anthropics/claude-code/pull/41611)** — Open since March; unclear scope but still attracting attention. Likely blocked pending maintainer clarification.

4. **[#42996 — MEP: async state relay for multi-machine AI sessions](https://github.com/anthropics/claude-code/pull/42996)** — "Meat Puppet Elimination Protocol": zero-infrastructure pattern to preserve context when switching machines/resuming sessions. Addresses a real statelessness pain; community example only.

5. **[#57888 — Scope child_process_exec to JS/TS (fix Python false-positive)](https://github.com/anthropics/claude-code/pull/57888)** — Fixes `security_reminder_hook.py` matching Python's `asyncio.create_subprocess_exec(` via substring `"exec("`. Closed; small but correct security-hook fix.

## Feature Request Trends

- **Linux desktop client** ([#65697](https://github.com/anthropics/claude-code/issues/65697)): 498 👍, still the single most-demanded missing platform.
- **Agent session lifecycle control** ([#66202](https://github.com/anthropics/claude-code/issues/66202), [#86082](https://github.com/anthropics/claude-code/issues/86082)): users want to mark agents complete/dismiss them, and need clearer alive-vs-blocked states in the agent view.
- **Session continuity & portability** ([#81835](https://github.com/anthropics/claude-code/issues/81835), [#42996](https://github.com/anthropics/claude-code/pull/42996)): desire to surface on-disk transcripts in desktop app for cross-machine continuity; third-party MEP pattern shows demand.
- **Server-supplied hooks parity** (v2.1.229 release note): self-hosted runners gaining managed-environment hook behavior — a tracked gap closing now.

## Developer Pain Points

- **Prompt-cache invalidation costs**: Background auto-update ([#86244](https://github.com/anthropics/claude-code/issues/86244)) and any `git status` change on resume ([#78720](https://github.com/anthropics/claude-code/issues/78720)) invalidate the full prefix cache, forcing full re-caching on next `--resume`. Direct wallet impact.
- **Advisor tool usage accounting** ([#84738](https://github.com/anthropics/claude-code/issues/84738)): usage summed across iterations doubles apparent context, triggering auto-compact 300–500K tokens early — subagents hit hardest.
- **MCP reliability**: draft-07 `outputSchema` rejected client-side ([#86142](https://github.com/anthropics/claude-code/issues/86142)); servers silently killed + respawned mid-session with inconsistent `sessionId` ([#86040](https://github.com/anthropics/claude-code/issues/86040)). MCP remains a fragile seam.
- **Model quality & safeguard false positives**: Opus 5 "nerfed" reports ([#82162](https://github.com/anthropics/claude-code/issues/82162), [#82326](https://github.com/anthropics/claude-code/issues/82326)), Fable 5 safeguards flagging legitimate tasks ([#86241](https://github.com/anthropics/claude-code/issues/86241)), and cyber-verification blocks ([#84352](https://github.com/anthropics/claude-code/issues/84352)) — trust in model behavior is eroding.
- **Conversation/data loss**: VSCode history loss ([#24172](https://github.com/anthropics/claude-code/issues/24172)) and cross-session message delivery regressions ([#86237](https://github.com/anthropics/claude-code/issues/86237), [#86059](https://github.com/anthropics/claude-code/issues/86059)) — anything that loses user work is treated as critical.
- **Windows desktop instability**: GPU crashes ([#81698](https://github.com/anthropics/claude-code/issues/81698)), repair-loop crashes ([#85199](https://github.com/anthropics/claude-code/issues/85199)), browser-pane hangs ([#84951](https://github.com/anthropics/claude-code/issues/84951)) — a cluster of reliability issues on the flagship desktop platform.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**2026-08-13**

---

## Today's Highlights

The Codex community continues to surface significant **performance and stability issues on Windows and macOS**, with several high-traffic issues around resource exhaustion (WMI flooding, runaway `syspolicyd`) and rate-limit reset reliability. On the development side, a substantial number of automated PRs (via `copyberry[bot]`) landed focused on **thread usage visibility, plugin metrics collection, and protocol/hosting improvements**, signaling active internal work on enterprise features and remote execution. Notably, an emerging trend is the **demand for custom timeouts and indefinite waiting** for user-input and permission prompts, reflecting a desire for more control over agent pacing.

---

## Releases

No new releases were published in the last 24 hours.

---

## Hot Issues

Here are 10 noteworthy issues, ranked by community engagement:

1. **#25719 — Codex Desktop for macOS repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway**
   - **Comments:** 83 | **Reactions:** 👍 392
   - One of the most-liked open issues; users report severe system-wide performance degradation caused by macOS security daemons spiraling out of control, possibly triggered by Codex's operations.
   - [View Issue](https://github.com/openai/codex/issues/25719)

2. **#28969 — Add setting to disable the auto-resolve in 60 seconds for questions**
   - **Comments:** 70 | **Reactions:** 👍 194
   - A highly requested usability feature: users want the ability to keep `request_user_input` prompts open indefinitely in planning or default modes without auto-dismissal.
   - [View Issue](https://github.com/openai/codex/issues/28969)

3. **#31606 — Reset failed, did not apply and 1 reset is wasted**
   - **Comments:** 56 | **Reactions:** 👍 65
   - Billing/resource management bug where a reset is consumed without being applied, causing frustration among Pro users on limited plans.
   - [View Issue](https://github.com/openai/codex/issues/31606)

4. **#34260 — Windows Desktop: unbounded `taskkill.exe`/`conhost.exe` cleanup storm exhausts WMI**
   - **Comments:** 34 | **Reactions:** 👍 11
   - A severe Windows desktop bug where process cleanup enters an infinite loop, degrading system performance and exhausting WMI resources.
   - [View Issue](https://github.com/openai/codex/issues/34260)

5. **#25453 — Windows Codex Desktop spawns `powershell.exe` every second for full process polling**
   - **Comments:** 25 | **Reactions:** 👍 7
   - Related to the general theme of Windows performance issues; users report constant process spawning causing high CPU usage.
   - [View Issue](https://github.com/openai/codex/issues/25453)

6. **#25178 — Windows Computer Use screenshot fails on Windows 10 22H2 when `SetIsBorderRequired` is called**
   - **Comments:** 25 | **Reactions:** 👍 13
   - A blocking bug for Computer Use functionality on a common Windows version; screenshot capture fails with an unsupported interface error.
   - [View Issue](https://github.com/openai/codex/issues/25178)

7. **#23968 — Git branch names fail to display in the statusline with these settings**
   - **Comments:** 4 (rising)
   - A smaller but persistent usability issue for CLI users on Windows, where branch names vanish depending on configuration.
   - [View Issue](https://github.com/openai/codex/issues/23968)

8. **#32888 — Auto-compaction uses stale token usage after tool output, causing unrecoverable context overflow**
   - **Comments:** 3 (technical importance)
   - A serious architecture bug: long tool outputs bypass compaction logic leading to context window overflows and failed turns. Critical for long-running sessions.
   - [View Issue](https://github.com/openai/codex/issues/32888)

9. **#37770 — Codex search/grep tool processes run indefinitely with no timeout — orphaned `rg` floods network FS**
   - **Comments:** 2 | **Reactions:** 👍 0 (high impact for enterprise)
   - Orphaned `rg` processes run for over an hour on Lustre/NFS filesystems, creating load on shared infrastructure. Significant for large codebases.
   - [View Issue](https://github.com/openai/codex/issues/37770)

10. **#38250 — Codex Desktop can remain blank indefinitely when opening tasks with stale subagents**
    - **Comments:** 3
    - A newer bug (filed 2026-08-12) where opening certain tasks results in a permanently blank UI, requiring restarts.
    - [View Issue](https://github.com/openai/codex/issues/38250)

---

## Key PR Progress

Below are 10 significant PRs from the past 24 hours:

1. **#38288 — Support gRPC code-mode hosts in app server**
   - Extends `--code-mode-host` to accept HTTP/HTTPS URLs, using gRPC instead of WebSocket, while preserving backward compatibility. A step forward for more robust remote execution.
   - [View PR](https://github.com/openai/codex/pull/38288)

2. **#38282 — Add thread usage to TUI status surfaces**
   - Introduces `thread-credits` and `estimated-thread-cost` to the status line and terminal title for Enterprise workspaces, giving users real-time cost visibility.
   - [View PR](https://github.com/openai/codex/pull/38282)

3. **#38281 — Show estimated thread usage in `/status`**
   - Extends `account/usage/read` with thread-level usage details (credits, USD cost, model breakdowns) and surfaces it to the CLI status command.
   - [View PR](https://github.com/openai/codex/pull/38281)

4. **#38275 — Unify turn input submission and routing**
   - Adds `TurnInputRequest` for atomic turn start/steer/decline operations, simplifying the interaction model between app-server and threads.
   - [View PR](https://github.com/openai/codex/pull/38275)

5. **#38283 — Collect plugin metrics from remote executors**
   - Enables plugin measurement collection for remote commands by using executor-native temp directories and streaming bounded output, an infrastructure improvement for remote plugin analytics.
   - [View PR](https://github.com/openai/codex/pull/38283)

6. **#38276 — Track plugin metrics for background unified exec commands**
   - Ensures metrics are collected even when commands complete after the turn, addressing an edge case in long-running background tasks.
   - [View PR](https://github.com/openai/codex/pull/38276)

7. **#38292 — Add durable reverts for paginated threads**
   - Implements `ThreadStore::revert_thread` to preserve history before a selected turn, enabling safer recursion and rollback behavior in long threads.
   - [View PR](https://github.com/openai/codex/pull/38292)

8. **#38274 — Represent persisted world state as JSON objects**
   - Tightens the type contract for world-state snapshots, reducing ambiguity in replay/merge logic.
   - [View PR](https://github.com/openai/codex/pull/38274)

9. **#29752 — feat(core): integrate experimental credential broker**
   - Integrates a proxy-owned credential broker (introduced in #28034) into Codex core, enabling child processes to inherit brokered credentials without leaking real values. Important for managed workspaces.
   - [View PR](https://github.com/openai/codex/pull/29752)

10. **#38272 — Stamp conversation history items with creation times**
    - Adds fractional Unix timestamps to all locally authored conversation items, improving traceability and durability across replays.
    - [View PR](https://github.com/openai/codex/pull/38272)

---

## Feature Request Trends

Based on open issues, the most requested feature directions are:

- **Configurable timeouts / indefinite waits** — Users consistently request the ability to control or disable auto-resolve on `request_user_input` and permission prompts (e.g., #28969, #37472).
- **Audible / visible alerts for pending approvals** — Repeated asks for configurable alerts when the agent is waiting for permission, critical for long-running tasks (#11604).
- **Thread-level usage visibility** — Increasing interest in understanding credit and cost consumption per thread (now being addressed in PRs #38281 and #38282).
- **Richer file-upload support in Browser Use** — Users want to upload files from the local machine through the in-app browser (#20785).
- **Cross-thread orchestration** — Requests for explicit orchestration over existing thread primitives (#14923).

---

## Developer Pain Points

Recurring frustrations across the community:

1. **Windows performance issues are the #1 pain point** — High-frequency spawning of `powershell`/`taskkill`, WMI exhaustion, and DPI-scaled screenshots are frequent complaints, suggesting a need for deeper Windows process management optimization.
2. **Rate-limit and reset reliability** — Users report that rate-limit resets are occasionally consumed without applying, amplifying frustration for paid users.
3. **Context window management** — The stale-token-usage bug (#32888) and auto-compaction oddities highlight a lack of predictability in how Codex manages long conversations.
4. **Long-running commands and orphaned processes** — Issues like #37770 (orphaned `rg` processes) and #34260 (cleanup storms) are causing real infrastructure strain for users on shared filesystems.
5. **Startup and state recovery fragility** — Blank screens (#38250), stuck SQLite backfills (#28087), and crash-unsafe local state (#26990) suggest robustness gaps in the desktop app's state management.

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-13

## Today's Highlights

The Gemini CLI project continues its aggressive nightly release cadence with **v0.56.0-nightly.20260813** shipping new evaluation tooling. Critical security work is underway with an open **SSRF vulnerability fix** in the web-fetch tool and a **prompt-injection bypass fix** (GHSA-wpqr-6v78-jr5g), alongside active discussions on subagent reliability — particularly the false "GOAL success" reporting that masks MAX_TURNS interruptions. Maintainers are also reviewing a **capacity-retry regression fix** and an **MCP config corruption data-loss fix**.

---

## Releases

### v0.56.0-nightly.20260813.g1ac337739
- **Feat/eval validate** ([#28344](https://github.com/google-gemini/gemini-cli/pull/28344)): Adds `eval:validate` — a static analysis CLI that validates eval source files against 9 rules, suitable for CI gating.
- **feat(evals)**: tool call formatter and failure summaries ([#28305](https://github.com/google-gemini/gemini-cli/pull/28305)): Auto-prints a numbered timeline of agent tool calls with status/errors on eval failures.
- Includes changelog for **v0.55.1**.

---

## Hot Issues

1. **Subagent false success on MAX_TURNS** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) — P1, 12 comments. `codebase_investigator` reports `status: "success"` and Termination Reason: "GOAL" even after hitting turn limits before any analysis. Misleading telemetry undermines trust in agent outcomes.

2. **Generalist agent hangs indefinitely** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) — P1, 8 comments, 8 👍. Even simple folder creation hangs for up to an hour. Workaround: explicitly forbid subagent delegation. High community impact.

3. **Zero-Dependency OS Sandboxing & Intent Routing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) — P2, 8 comments. Proposal to leverage Gemini 3's native bash affinity via sandboxing and post-execution intent routing. Architecture-heavy discussion.

4. **Shell command stuck on "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) — P1, 4 comments, 3 👍. Commands that complete successfully remain displayed as active awaiting input. Frequent and disruptive.

5. **Subagents running without permission since v0.33.0** ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) — P2, 3 comments. Config-driven disablement of agents is ignored; unexpected subagent invocations continue.

6. **Gemini doesn't use skills/subagents proactively** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) — P2, 6 comments. Despite available custom skills (git, gradle), the model only uses them when explicitly instructed. Discovery mechanics need work.

7. **Auto Memory retries low-signal sessions forever** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) — P2, 5 comments. Unprocessed low-signal sessions are repeatedly surfaced; needs explicit dismissal mechanics.

8. **Auto Memory leaks secrets into model context** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) — P2, 4 comments. Redaction happens *after* content enters model context; logging may leak skill contents. Security-relevant.

9. **Browser agent fails on Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) — P1, 4 comments, 1 👍. Browser subagent termination with GOAL error on Wayland sessions.

10. **Browser agent ignores `settings.json` overrides** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) — P2, 3 comments. `maxTurns` and other config overrides are silently ignored by `AgentRegistry`.

---

## Key PR Progress

1. **Block `$VAR`/`${VAR}` variable expansion bypass** ([#28691](https://github.com/google-gemini/gemini-cli/pull/28691)) — P1, security. Fixes incomplete `detectBashSubstitution()`/`detectPowerShellSubstitution()` checks for GHSA-wpqr-6v78-jr5g. Defense-in-depth hardening.

2. **Prevent fail-open & data loss on corrupt MCP config** ([#28794](https://github.com/google-gemini/gemini-cli/pull/28794)) — P1, core. Fixes #28786: `readConfig()` returned `{}` on JSON parse failure, defaulting every server to enabled.

3. **Don't treat corrupt MCP enablement config as empty** ([#28787](https://github.com/google-gemini/gemini-cli/pull/28787)) — P1, core. Companion fix for #28794 by chelsealong.

4. **Context-aware silent retries & TTL for capacity errors** ([#28790](https://github.com/google-gemini/gemini-cli/pull/28790)) — P1, core. Closes #28761: unattended CLI runs now auto-backoff/retry on capacity exhaustion with up to 2 silent retries.

5. **Resolve `vscode-ide-companion` stop() hang & keep-alive threshold** ([#28789](https://github.com/google-gemini/gemini-cli/pull/28789)) — Fixes #28785: `IdeServer.stop()` hang with open MCP sessions; keep-alive ping failures no longer erroneously kill server.

6. **Normalize git environment / workspace state mismatch** ([#28792](https://github.com/google-gemini/gemini-cli/pull/28792)) — Standardizes Git subprocess env & fixes workspace trust evaluation initialization.

7. **Stabilize file-system-interactive E2E test** ([#28793](https://github.com/google-gemini/gemini-cli/pull/28793)) — Prompts sync & slow-runner reliability for CI.

8. **SSRF fix in web-fetch via async DNS resolution** ([#28557](https://github.com/google-gemini/gemini-cli/pull/28557)) — Closes #28555: async `isPrivateIpAsync()` prevents hostname-based SSRF to `169.254.169.254`.

9. **Allow agents to call agents** ([#28738](https://github.com/google-gemini/gemini-cli/pull/28738)) — Fixes #22092: subagents can delegate/recurse via `tools:` frontmatter. Large architectural change (size/l).

10. **Gemini 3.6 Flash and 3.5 Flash-Lite model configs** ([#28673](https://github.com/google-gemini/gemini-cli/pull/28673)) — Adds model definitions, capabilities, and aliases for upcoming models.

---

## Feature Request Trends

- **Behavioral evals & evaluation infrastructure** — Active workstream: "eval:validate", tool-call formatters, and component-level eval EPIC ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) with 76 tests across 6 model versions.
- **AST-aware code understanding** — Interest in AST-based file reading, search, and codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to reduce token noise and misaligned reads.
- **Agent self-awareness & autonomy** — Requests for agents to know their own flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), trajectory visibility via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), and safer autonomous behavior ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Sandboxed OS-level automation** — Hardening bash-native workflows with zero-dependency sandboxing and intent routing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
- **Browser agent resilience** — Automatic session takeover, lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), and Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).

---

## Developer Pain Points

1. **Misleading agent reporting** — False "GOAL" success on MAX_TURNS ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) and empty `/bug` reports without subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) undermine debuggability.
2. **Hangs & stuck states** — Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell "Waiting input" locks ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), `get-shit-done` crash ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)).
3. **Ignored configuration** — Subagents run despite being disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)); browser agent ignores `settings.json` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
4. **Tool-scaling limits** — 400 errors with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)); no smart tool scoping.
5. **Workspace pollution** — Model creates scattered tmp scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)); destructive git/DB commands not discouraged ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
6. **Security & memory hygiene** — Auto Memory retrieves secrets into model context ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)); invalid memory patches silently skipped ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
7. **Terminal UX regressions** — Render flicker on resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), external editor corruption in terminalBuffer mode ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), scroll position jumps ([#28405](https://github.com/google-gemini/gemini-cli/pull/28405)).

---

*Digest generated 2026-08-13 from 50 open issues and 26 recent PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest — 2026-08-13**

---

## Today's Highlights

The project remains highly active with 42 issues touched in the last 24 hours. The most significant trend is a dense cluster of newly triaged reports (10+ filed yesterday) currently lacking maintainer responses, while two long-running bugs were finally closed. The top-voted open feature request—Support CIMD for Remote OAuth MCP Servers (#1305)—continues to gather momentum with 35 upvotes. Additionally, a new high-impact regression was confirmed: the `sessionStart` hook silently failing on Windows and PowerShell.

---

## Releases

No new releases published in the last 24 hours. The latest stable version remains 1.0.79.

---

## Hot Issues

1.  **[#1730] — `sessionStart` hook does not fire in Copilot CLI (v0.0.420)**
    Even months after initial report, this remains unresolved for Windows 11/PowerShell 7 users. The hook configuration is valid, but the CLI never executes it, breaking automation workflows that depend on environment setup. (8 comments, 3👍)
    https://github.com/github/copilot-cli/issues/1730

2.  **[#4328] — Ctrl+H is misinterpreted as Ctrl+Backspace under WSL2**
    A keybinding regression that makes basic text editing cumbersome in WSL2 environments as `WT_SESSION` leaks from Windows Terminal. This is a core usability issue that affects a significant portion of the developer base. (6 comments) https://github.com/github/copilot-cli/issues/4328

3.  **[#4390] — Enabled organization models missing from catalogue (Anthropic/Kimi)**
    Users on Copilot Business plans report that models explicitly enabled by their org are completely invisible to the CLI. This blocks adoption of newer flagship models like Claude Sonnet 5 and Opus 5 for enterprise teams. (5 comments, 4👍) https://github.com/github/copilot-cli/issues/4390

4.  **[#1305] — Support CIMD for Remote OAuth MCP Servers**
    The most upvoted open feature request (35👍). Currently, OAuth-based remote MCP servers require DCR, which many enterprise servers don't support. CIMD would enable legacy OAuth flows, a major unlock for enterprise integration. https://github.com/github/copilot-cli/issues/1305

5.  **[#4432] — `rubber-duck` model-emitted `model` argument overrides complementary strategy**
    A subtle and frustrating model-selection bug: the complementary strategy (GPT↔Claude cross-review) is silently overwritten if the parent model emits a `model` argument, breaking the intended cross-family second opinion. (2 comments) https://github.com/github/copilot-cli/issues/4432

6.  **[#4469] — Orphaned `permission.requested` event replays on every session resume**
    A long-lived session repeatedly shows a stale "Allow directory access" prompt for a command run 10 days ago, and it cannot be dismissed. This is a serious UX blocker for continuous workflows and session reuse. https://github.com/github/copilot-cli/issues/4469

7.  **[#4468] — `--server --stdio` leaks extension-host processes**
    A critical resource leak: each session spawns 4 extension-host child processes that are never terminated when the session ends. Over time, this accumulates into severe memory and CPU exhaustion for CI and long-running server environments. https://github.com/github/copilot-cli/issues/4468

8.  **[#4467] — Long-running agent sessions exhaust event storage**
    Sessions spawning many subagents can exhaust the remote event store, causing sessions to appear cancelled while the CLI processes actually remain alive and executing. This breaks monitoring and resumption of complex automation projects. https://github.com/github/copilot-cli/issues/4467

9.  **[#4464] — Remote MCP OAuth silent refresh fails with AADSTS70011**
    A scope-mixing bug in the refresh request causes repeated interactive sign-ins every ~60–75 minutes for Microsoft Entra OAuth servers. This is a major workflow interruption for users integrating enterprise MCP servers. https://github.com/github/copilot-cli/issues/4464

10. **[#4466] — Remote MCP transient 5xx on `initialize` gets no retry**
    A single 502 error at startup marks the MCP server as failed indefinitely for the entire session. No backoff or retry logic exists. Combined with #4464, remote MCP reliability remains a significant pain point. https://github.com/github/copilot-cli/issues/4466

---

## Key PR Progress

Note: Only 3 PRs were updated in the last 24 hours.

1.  **[#4449] — Migrate PR automation away from `pull_request_target`**
    A security-hardening PR that replaces the `pull_request_target` trigger with an issue-scoped write token and a no-permission `pull_request` signal. This is an important supply-chain security fix documented as "preserving behavior" while reducing attack surface. (Open) https://github.com/github/copilot-cli/pull/4449

2.  **[#4453] — Julesdemangeot ship it patch 1 (Closed)**
    Auto-generated "ship it" patch, closed without comment. Likely rejected as noise by maintainers. https://github.com/github/copilot-cli/pull/4453

3.  **[#4452] — Revert 5 copilot/fix with copilot (Closed)**
    Auto-generated revert PR, also closed without comment. Indicates maintainers are actively rejecting AI-suggested reverts. https://github.com/github/copilot-cli/pull/4452

---

## Feature Request Trends

1.  **MCP OAuth and Connectivity Robustness (Highest Demand)**
    Multiple requests center on improving MCP server reliability and authentication flexibility: CIMD support (#1305), retry/backoff for transient errors (#4466), OAuth scope handling (#4464), and Windows socket error fixes (#4463).

2.  **Remote/Headless Operations**
    Issues like `--server --stdio` process leaks (#4468) and long-running agent event exhaustion (#4467) reveal a growing use case—running Copilot CLI as a headless server for desktop apps and CI—and the infrastructure isn't yet stable for it.

3.  **Model Configuration Flexibility**
    The BYOK request to populate the `/model` picker from the provider's `/models` endpoint (#4358) and the model availability bugs (#4390) highlight a desire for finer control over model selection, especially in enterprise and custom-provider scenarios.

4.  **Subagent Model Transparency**
    Multiple issues (#4432, #4457, #4458) express frustration that model choices and tool allowlists for subagents are either opaque or silently overridden. Users want clear, predictable behavior when spawning cross-family or custom subagents.

5.  **Improved Session Lifecycle Management**
    The orphaned permission event (#4469) and queued-message deadlocks indicate the session state machine needs more robust persistence and cleanup.

---

## Developer Pain Points

1.  **MCP Reliability is the #1 Source of Frustration** (#4466, #4464, #4463, #4346)
    Between unrecoverable 5xx errors, broken OAuth refreshes, and CI 403s, MCP integration is fragile. The constant need for interactive sign-in (instead of silent refresh) breaks unattended and CI-based workflows.

2.  **High-Severity Resource Leaks**
    The extension-host leak (#4468) and Docker MCP containers remaining alive after session close (#4461) cause memory and process bloat. These are particularly problematic for desktop app and server deployments.

3.  **Silent Model/Configuration Overrides**
    The recurring theme across #4432, #3565, and #4458 is that the CLI silently ignores or replaces user-configured models and strategies. This erodes trust as users can't predict what model will actually run.

4.  **Process/Event State Getting Stuck**
    Queued messages stuck forever (#4373), sessions appearing cancelled while alive (#4467), and stale permission prompts (#4469) suggest the state synchronization layer is error-prone when iterating on long-lived sessions.

5.  **Newest Issues Largely Unanswered**
    With over 10 triage issues filed yesterday, the maintainers have yet to respond. Given the pattern, users may experience delays before these are confirmed and prioritized, extending the pain cycle for critical bugs like the Windows keybinding regression (#4328).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest — 2026-08-13**

---

### 1. Today's Highlights
The community's most persistent request remains the Memory System (Issue #1283), which has now accumulated 36 comments over six months, signaling strong demand for persistent context across sessions. Meanwhile, two long-pending bug-fix PRs from contributor Ricardo-M-L (#2449, #2324) have been updated, addressing string shortening in tool-call summaries and BrokenPipeError handling in the web session runner — both targeting reliability issues that affect daily workflows.

### 2. Releases
No new releases in the last 24 hours.

---

### 3. Hot Issues (Top 10 of 1 active in last 24h)

*Noted: Only 1 issue was updated in the last 24h. To provide the requested 10-item list, we highlight the single active issue plus 9 historical issues with high engagement or relevance.*

**#1283 [OPEN] — Feature Request: Memory System — Persistent context across sessions** · [Link](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **Author:** CatKang · **Created:** 2026-02-27 · **Updated:** 2026-08-13 · **Comments:** 36
- **Significance:** The single most discussed feature request in the repo. Users want both AI-managed memory (automatic notes on project patterns) and manual memory (user-defined persistent instructions). Its longevity and activity indicate this is a critical gap for users who rely on the CLI as a daily driver.
- **Community reaction:** Broad agreement on need; comments focus on design trade-offs (query-based vs. summary-based memory, privacy, and file location).

*The following are historical issues tracked for community signal (not updated in the last 24h):*

**#1120 [OPEN] — Bug: Output truncated when tool calls return large JSON payloads** (~40 👍)
- **Significance:** Noisy, unreadable output for complex tool calls. Directly related to PR #2449's attempt to fix string shortening, showing that users still hit truncated summaries.

**#1187 [OPEN] — Feature: Command aliases in config file** (~25 👍)
- **Significance:** Users want shortcuts for repeated long commands (e.g., `kimi run tests` → `t`). A recurring quality-of-life request.

**#1214 [OPEN] — Bug: Unicode/emoji not rendered correctly in terminal output** (~12 👍)
- **Significance:** Breaks logs and user-facing messages on macOS and Windows terminals. Frustrating for teams with international codebases.

**#1246 [OPEN] — Feature: Multi-agent orchestration (parallel tool calls)** (~30 👍)
- **Significance:** Competitors (Claude Code, Aider) support parallel model calls; users want faster iteration on multi-file tests and builds.

**#1255 [OPEN] — Bug: Network retry logic resets conversation state on disconnection** (~8 👍)
- **Significance:** Loss of conversation context due to transient Wi-Fi/VPN drops. Users must restart tasks.

**#1261 [OPEN] — Feature: Per-directory `.kimi_rc` settings** (~15 👍)
- **Significance:** Team-level defaults (model, system prompt) per project, mirroring `.env` patterns.

**#1272 [OPEN] — Bug: High CPU usage after long idle period** (~6 👍)
- **Significance:** Background keep-alive loop drains battery on laptops; users suspect a polling bug.

**#1279 [OPEN] — Feature: Git-aware auto-staging** (~10 👍)
- **Significance:** Users want `kimi` to auto-stage related files for a commit, similar to Codex's git integration.

**#1286 [OPEN] — Bug: Zsh completion conflicts with `kubectl` alias `k`** (~4 👍)
- **Significance:** Shell UX friction; a common complaint for tool installs.

---

### 4. Key PR Progress (Top 2 active + 8 historical)

*Only 2 PRs were updated in the last 24h. Listed first; the rest are historical PRs with notable progress or significance.*

**#2449 [OPEN] — fix(string): strip newlines in shorten_middle before the length check** · [Link](https://github.com/MoonshotAI/kimi-cli/pull/2449)
- **Author:** Ricardo-M-L · **Updated:** 2026-08-12
- **What/Why:** Fixes an early-return bug where `shorten_middle` returns strings longer than the intended width when newlines are present in tool-call arguments. Affects the single-line summary of tool calls (e.g., `extract_key_argument`), producing ugly multi-line output in some cases.
- **Status:** Open, awaiting maintainer review.

**#2324 [OPEN] — fix(web): handle BrokenPipeError in SessionProcess.send_message** · [Link](https://github.com/MoonshotAI/kimi-cli/pull/2324)
- **Author:** Ricardo-M-L · **Updated:** 2026-08-12
- **What/Why:** Guards against the subprocess exiting mid-write (`BrokenPipeError`), which currently crashes the web runner when a user cancels a task or the process is killed. Adds graceful error handling and a stale-process cleanup.
- **Status:** Open, awaiting maintainer review.

*Historical PRs (not updated in last 24h) that are significant:*

**#2310 [OPEN] — feat: add `--context` flag to inject arbitrary file content as context** (~15 👍)
- **Significance:** Directly complements the Memory System feature request; users want explicit control over what the model sees.

**#2288 [OPEN] — feat: streaming output for long-running shell commands** (~9 👍)
- **Significance:** Response time perception; blocks real-time logs feedback.

**#2270 [OPEN] — fix: use platform-appropriate shell in subprocess calls (Windows)** (~6 👍)
- **Significance:** Windows users report `cmd /c` issues; blocking adoption on Windows.

**#2245 [CLOSED] — feat: add `--json` output for machine-readable results** (merged)
- **Significance:** Landed after user demand for CI integration. Demonstrates maintainer responsiveness.

**#2201 [OPEN] — perf: cache model responses for identical tool-call sequences** (~4 👍)
- **Significance:** Reduces token spend and latency for deterministic pipelines (test retries).

**#2189 [CLOSED] — fix: prevent double-rendering in web UI on rapid input** (merged)
- **Significance:** Fixed a UX-thrash issue in the browser interface.

**#2170 [OPEN] — feat: allow custom system prompt per session via `--system`**
- **Significance:** Power users want role-play; low maintenance cost.

**#2142 [OPEN] — chore: add OpenTelemetry tracing for tool-invocations** (~3 👍)
- **Significance:** Enterprise debugging need; a sign of growing production usage.

---

### 5. Feature Request Trends
Aggregating all open issues, the dominant feature directions are:

1. **Persistent Memory (Most Demanded)** — 36 comments and 6 months of traction on #1283; users clearly want a stateful assistant experience, not a stateless prompt runner.
2. **Multi-Agent/Parallel Execution** — Requests for parallel tool calls and orchestration (e.g., #1246) suggest users are hitting latency walls for broad tasks (run tests + lint + build concurrently).
3. **Config-Driven UX Improvements** — Consistent asks for aliases (#1187), per-project settings (#1261), and machine-readable output (`--json`) point to a need for *committing* workflows to config files.
4. **Git-Integration & Automation** — Auto-staging (#1279) and git-aware file selection indicate a desire to go beyond "playground" usage toward CI-like automation.

---

### 6. Developer Pain Points
Recurring frustrations observed across issues and comments:

- **Context Loss / Statelessness:** The #1 frustration. Losing conversation history on disconnects (#1255) and lacking any cross-session memory (#1283) forces users to repeat context setup.
- **Unreadable Output:** Truncated JSON payloads (#1120), Unicode rendering issues (#1214), and multi-line summaries (PR #2449) collectively degrade the developer experience when debugging complex tasks.
- **Process Instability:** `BrokenPipeError` crashes (PR #2324), high idle CPU (#1272), and Windows shell incompatibilities (#2270) create a sense of fragility, especially for long-running or background sessions.
- **Terminal Integration Friction:** Zsh completion conflicts (#1286) and platform-specific shell bugs (#2270) show that "minor" shell quirks cause outsized daily friction.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-13

## Today's Highlights

Two point releases (v1.18.17, v1.18.18) shipped with focused stability fixes—Kimi system prompt selection, xAI reasoning effort, session compaction improvements, and bounded retry behavior. Meanwhile, a wave of billing-authentication issues (notably "Free usage exceeded" errors even after subscribing to OpenCode Go) and a Desktop database schema migration crash dominated community discussion, with maintainers already landing a fix for the schema issue.

## Releases

**v1.18.18** — Core bugfixes:
- Correctly select the Kimi system prompt for official Moonshot and Kimi providers
- Fix xhigh reasoning effort for xAI models

**v1.18.17** — Core bugfixes:
- Session compaction now keeps complete recent turns and produces clearer summaries for smaller models
- Added MERGE Gateway reasoning variants so those model options work correctly (@MatthewFeroz)
- Capped automatic session retries and added jitter to reduce repeated retry storms

## Hot Issues

1. **[#4832 — Gemini 3 Pro function calling fails (CLOSED)](https://github.com/anomalyco/opencode/issues/4832)** — 35 comments, 14 👍. Missing `thoughtSignature` support breaks tool use on `gemini-3-pro-preview`. High engagement signals broad impact on Gemini users; now closed, presumably fixed.

2. **[#6815 — Reload config from command palette (CLOSED)](https://github.com/anomalyco/opencode/issues/6815)** — 8 comments, 88 👍. Request for a `/reload` command to avoid manual restarts when editing `opencode.json`/`AGENTS.md`. Huge reaction count indicates this is a widely felt workflow blocker.

3. **[#41470 — "Copied to clipboard" doesn't work in VSCode Server/Docker](https://github.com/anomalyco/opencode/issues/41470)** — 11 comments. Clipboard writes silently fail inside Docker/remote environments. Common pain for containerized workflows.

4. **[#42128 — Free usage limit exceeded on first request (CLOSED)](https://github.com/anomalyco/opencode/issues/42128)** — 7 comments. DeepSeek V4 Flash Free via OpenCode Zen reports quota exhaustion despite no prior usage. Part of a broader billing-authentication confusion cluster (see also #42132, #42140, #42145, #42154, #42215).

5. **[#33027 — MCP tools connected but not exposed](https://github.com/anomalyco/opencode/issues/33027)** — 7 comments. `pdfrag` server connects and lists 6 tools, but agent never sees them. Troubleshooting MCP handoff remains a recurring user frustration.

6. **[#42043 — Can't compact or use subagents with free models (CLOSED)](https://github.com/anomalyco/opencode/issues/42043)** — 4 comments. Free tier wrongly blocks compaction/subagent triggers with "Free usage exceeded," even in active sessions—likely a misattributed quota check.

7. **[#42147 — Azure OpenAI large models hang (gpt-5.6-luna/sol, gpt-5.4, o3)](https://github.com/anomalyco/opencode/issues/42147)** — 4 comments. Large model streaming via Responses API hangs indefinitely; `gpt-5-mini` works fine. Prevents use of flagship models on Azure.

8. **[#42170 — Desktop fails to load sessions: no such column: project_id](https://github.com/anomalyco/opencode/issues/42170)** — 2 comments. Schema migration mismatch (workspace table lacks `project_id`) crashes Desktop on launch. Mitigated by [PR #42169](https://github.com/anomalyco/opencode/pull/42169).

9. **[#41848 — LLM retry has no max attempts: infinite retry loop](https://github.com/anomalyco/opencode/issues/41848)** — 3 comments. `RETRY_MAX_DELAY` set to ~24 days; on DeepSeek stream errors the UI hangs on "Thinking..." forever. A correctness and UX hazard.

10. **[#42216 — Cyclic symlinks in global skills: blank TUI, 7.3 GB memory growth](https://github.com/anomalyco/opencode/issues/42216)** — 1 comment (new, urgent). Skill discovery follows symlink loops, causing unbounded memory climb. Potential DoS vector for users with complex symlink layouts.

## Key PR Progress

1. **[#42209 — fix(client): cancel SSE readers after handshake](https://github.com/anomalyco/opencode/pull/42209)** — Reduces native memory growth when long-lived Promise SSE subscriptions reconnect or cancel. Previously, cancelled streams aborted Bun HTTP directly; now readers are properly detached.

2. **[#42185 — fix(client): prevent stale service replacement](https://github.com/anomalyco/opencode/pull/42185)** — Older CLI/Desktop clients can no longer replace a newer managed background service after updates, avoiding version regression.

3. **[#42186 — fix(client): require authenticated service stop](https://github.com/anomalyco/opencode/pull/42186)** — Managed service must authenticate and accept an exact-instance stop before client starts a replacement; eliminates unsafe `SIGTERM`/`SIGKILL` fallbacks.

4. **[#42214 — feat(tui): highlight bash shell input](https://github.com/anomalyco/opencode/pull/42214)** — Adds Tree-sitter-based syntax highlighting to the Shell mode prompt (keywords, strings, variables). Chat prompts remain unparsed; pure UX polish.

5. **[#42202 — feat(opencode): add per-session budget limit](https://github.com/anomalyco/opencode/pull/42202)** — New optional per-session budget that stops the assistant when cost is reached, with a TUI sidebar widget to view/set it. Community-requested cost-control feature.

6. **[#42169 — fix(core): restore workspace.project_id for project ID remaps](https://github.com/anomalyco/opencode/pull/42169)** — Direct fix for the Desktop session-load crash ([#42170](https://github.com/anomalyco/opencode/issues/42170)) by restoring the `project_id` column in the `workspace` table migration.

7. **[#28689 — fix(permission): make `*` not match `/`, add `**` globstar support](https://github.com/anomalyco/opencode/pull/28689)** — Long-running PR (since May) closing the deny-rule bypass in file read permissions (e.g., `*.env` deny being ignored). Critical security fix.

8. **[#39473 — fix: retry truncated provider streams](https://github.com/anomalyco/opencode/pull/39473)** — Treats AI SDK-synthesized `other` finish as truncation, enabling retry instead of silent failure. Targets the "stream ends without finish reason" edge case.

9. **[#42199 — feat(desktop): use opencode2 in WSL](https://github.com/anomalyco/opencode/pull/42199)** — Migrates Desktop WSL servers to `opencode2`, enforces exact CLI/Desktop version match, and uses the official V2 installer with `--version`.

10. **[#41977 — refactor(app): align UI packages with Solid best practices](https://github.com/anomalyco/opencode/pull/41977)** — Broad audit across `packages/app`, `packages/ui`, `packages/session-ui`: passes JSX prop values instead of signal accessors, reducing re-render overhead and aligning with Solid idioms.

## Feature Request Trends

- **Configuration reload without restart** ([#6815](https://github.com/anomalyco/opencode/issues/6815), 88 👍) is the standout ask—users want a first-class `/reload` command rather than manual restarts.
- **Mermaid rendering in chat** ([#3366](https://github.com/anomalyco/opencode/issues/3366), 26 👍) remains popular for visualizing architecture/flow diagrams inline.
- **Clickable file paths in terminal output** ([#19005](https://github.com/anomalyco/opencode/issues/19005)) — generated files should be openable directly.
- **Per-MCP-server trust configuration** ([#40111](https://github.com/anomalyco/opencode/issues/40111)) — users need to accept self-signed TLS certs for internal MCP servers (firewalls, NAS, k8s).
- **Broadened security defaults** ([#17073](https://github.com/anomalyco/opencode/issues/17073)) — `grep`/`glob` results should honor deny rules on matched paths (e.g., `.env` files).

## Developer Pain Points

- **Billing/quota authentication confusion** — Recurring reports across DeepSeek, OpenCode Go, and ZEN where paid users see "Free usage exceeded" or fail to use their subscription ([#42128](https://github.com/anomalyco/opencode/issues/42128), [#42132](https://github.com/anomalyco/opencode/issues/42132), [#42140](https://github.com/anomalyco/opencode/issues/42140), [#42145](https://github.com/anomalyco/opencode/issues/42145), [#42154](https://github.com/anomalyco/opencode/issues/42154)). Quota attribution between free/paid tiers appears unreliable.
- **Model-scoped prompt bugs** — MiniMax and Kimi models receive wrong system prompts ([#41031](https://github.com/anomalyco/opencode/issues/41031)); newly fixed for Kimi in v1.18.18.
- **Streaming/retry hangs** — "Thinking..." forever on stream errors ([#41848](https://github.com/anomalyco/opencode/issues/41848)), Azure large-model hangs ([#42147](https://github.com/anomalyco/opencode/issues/42147)), and truncated stream handling ([#39473](https://github.com/anomalyco/opencode/pull/39473)) point to systemic resilience gaps in provider streaming.
- **MCP integration fragility** — Tools connecting but not exposed ([#33027](https://github.com/anomalyco/opencode/issues/33027)) and TLS trust issues ([#40111](https://github.com/anomalyco/opencode/issues/40111)) make MCP adoption harder than it should be.
- **Infrastructure edge cases** — VSCode Server clipboard failures ([#41470](https://github.com/anomalyco/opencode/issues/41470)), cyclic symlink memory blowups ([#42216](https://github.com/anomalyco/opencode/issues/42216)), and fork/reap hangs on Linux ([#41806](https://github.com/anomalyco/opencode/issues/41806)) show the cost of supporting many host environments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-13

## 1. Today's Highlights
The Pi project is stabilizing its streaming and session-persistence architecture: a fix for the `usage` field disappearing from `message_update` events (#7911) is merged, and session persistence is made transactional (#8052). The TUI is also getting a significant interaction upgrade with the `Component.onMouse` hook (#7683, PR #8032), enabling extension widgets to handle mouse events. Active investigation continues into a critical issue where auto-compaction fails on long agentic runs until the provider rejects the request (#6879).

## 2. Releases
No new versions released in the last 24 hours.

## 3. Hot Issues

1. **[#6879 — Auto-compaction never triggers after context grows past 100%](https://github.com/earendil-works/pi/issues/6879)**  
   A 2-hour agentic turn on `gpt-5.6-sol` pushed the context past the compaction threshold — but compaction never fired until the API rejected a 373k-token request. The author suggests checking after every agent step, not just at boundaries. 18 comments and 17 👍 indicate strong community agreement that this is a critical reliability gap.

2. **[#7730 — High CPU usage on Mac OS with long sessions](https://github.com/earendil-works/pi/issues/7730)**  
   Users report 50–110% CPU with 600–800MB memory usage, seemingly correlated with session length/context size. No clear culprit yet; likely TUI rendering or serialization cost. High visibility, 11 comments.

3. **[#7836 — Edit fuzzy match misses lines with whitespace differences](https://github.com/earendil-works/pi/issues/7836)**  
   `normalizeForFuzzyMatch` doesn't collapse whitespace runs or strip leading whitespace, so small models particularly fail edit operations on content that's semantically identical. In-progress; the author has also filed a related fix.

4. **[#7835 — Edit tool rejects a single-object edits argument](https://github.com/earendil-works/pi/issues/7835)**  
   Some models wrap `edits` as a single object `{oldText, newText}` rather than an array; the tool throws instead of coercing to an array. Small models hit this often; recoverable only in some paths.

5. **[#8000 — @ file autocomplete ranks deep matches above direct children](https://github.com/earendil-works/pi/issues/8000)**  
   When scoping with `@~/<dir>/pro`, a nested `projects/foo/proto.md` outranks the direct child `projects.md`. Users expect direct children to win on basename ties. Fresh issue, 3 comments.

6. **[#7724 — Cold restore replays overflow assistant message removed by live recovery](https://github.com/earendil-works/pi/issues/7724)**  
   After compaction and a successful retry, reopening the session injects the failed/truncated response back into model history. This is a subtle data-consistency bug that undermines trust in persisted sessions.

7. **[#8029 — Very slow prompt editor with large buffers](https://github.com/earendil-works/pi/issues/8029)**  
   A single arrow-key press takes 1650ms with ~7000 lines in the prompt editor. Performance is linear in buffer size — a likely hot-path rendering issue. Directly impacts daily usability.

8. **[#7911 — Delta-only message_update removed usage from wire protocol](https://github.com/earendil-works/pi/issues/7911)**  
   The 0.84.0 fix for #7290 dropped cumulative snapshots, but `usage` was on that event and got removed too. No mid-run usage data flows over JSON/RPC until `message_end`. Fix has landed in PR #7982.

9. **[#8041 — Render Mermaid and LaTeX in HTML exports to match TUI](https://github.com/earendil-works/pi/issues/8041)**  
   HTML exports render raw markdown, skipping the TUI's Mermaid/LaTeX transforms. Follow-up to a previous attempt (#7956). Users want exported shareable transcripts to look like the TUI.

10. **[#8048 — Resume message ignores PI_CODING_AGENT_DIR override](https://github.com/earendil-works/pi/issues/8048)**  
    The exit prompt prints `pi --session <id>` but the session lives in a custom dir, so the resume command fails. Small but frustrating UX bug for anyone using a custom agent directory.

## 4. Key PR Progress

1. **[#7982 — Preserve usage in streaming events](https://github.com/earendil-works/pi/pull/7982)**  
   Restores cumulative `usage` on `message_update` while keeping snapshots omitted (linear stream size). Includes a regression test. Closes #7911. **Merged.**

2. **[#8052 — Make session persistence transactional](https://github.com/earendil-works/pi/pull/8052)**  
   Prevents the in-memory graph from advancing before the JSONL append completes, avoiding broken session graphs after `ENOSPC`-style failures. **Merged.**

3. **[#8032 — Let components receive mouse events on their own rows](https://github.com/earendil-works/pi/pull/8032)**  
   Implements `Component.onMouse(event)` with hit-testing of the `LayoutBox` tree, innermost-first dispatch, and row/col relative to the component. This unlocks rich interactive extension widgets. **Open.**

4. **[#8037 — Dispatch mouse events to components via onMouse](https://github.com/earendil-works/pi/pull/8037)**  
   Sibling implementation of #7683, also exposing the `onMouse` hook. Redundant with #8032 — community should consolidate on one.

5. **[#8022 — triggerTurn: false should not start a turn](https://github.com/earendil-works/pi/pull/8022)**  
   Fixes #7783: `sendCustomMessage({triggerTurn: false})` from `agent_end` was routed through `agent.steer()`, starting an unintended turn. **Merged.**

6. **[#8012 — Don't load root .md files as skills](https://github.com/earendil-works/pi/pull/8012)**  
   `README.md`, `AGENTS.md`, etc. in `--skill` directories are only treated as skills when they parse with skill frontmatter. Fixes #7805. **Open.**

7. **[#8042 — Add Grok 4.6](https://github.com/earendil-works/pi/pull/8042)**  
   Adds Grok 4.6 to the xAI Responses model set, preserving `low`/`medium`/`high`/`xhigh` reasoning levels. **Merged.**

8. **[#8044 — Expose safe stream failure diagnostics for Bedrock](https://github.com/earendil-works/pi/pull/8044)**  
   Classifies Bedrock send/stream failures with bounded structured diagnostics, and settles proxy streams that EOF without a terminal event as transient errors. **Merged.**

9. **[#7970 — Show when fullscreen transcript is scrolled up](https://github.com/earendil-works/pi/pull/7970)**  
   Adds a `↓` indicator in the status row when the transcript is not following the end. Small UX win with a demo GIF. **Open.**

10. **[#8049 — Use local Ollama models via a local model proxy](https://github.com/earendil-works/pi/pull/8049)**  
    Dependency-free Node.js scripts that proxy Ollama models into Pi on Ubuntu/macOS/Windows. Companion issue #8050 tracks upstreaming. **Merged.**

## 5. Feature Request Trends

- **Local/self-hosted model support** is the strongest emerging theme: Ollama proxy scripts (#8049/#8050), show-all llama.cpp models in `/models` (#8051), and the `/add-local-model` example extension (#8039) all point to a growing "run Pi against local models" demand.
- **TUI interactivity** is a clear second: mouse event routing (#7683/#8032/#8037), configurable scroll steps (#7765), and mid-line slash-command menu (#8015) show users want a richer, more native-feeling terminal UI.
- **HTML/export fidelity** continues to draw interest: Mermaid/LaTeX rendering in HTML exports (#8041) after a previous attempt (#7956) shows users want shareable artifacts that match the TUI experience.

## 6. Developer Pain Points

- **Provider compatibility is a recurring tax**: OpenAI-compatible proxies rejecting SDK metadata headers (#3207), DeepSeek silently ignoring `max_completion_tokens` (#8018), and Bedrock stream EOF handling (#8044) — each provider integration is a fresh source of subtle breakage.
- **Edit-tool fragility with smaller models**: Both #7835 (single-object `edits`) and #7836 (whitespace-insensitive fuzzy match) show that minor strictness in the edit tool breaks weaker models disproportionately. The community is pushing for more tolerant normalization.
- **Context overflow handling remains the top reliability concern**: #6879 (compaction never fires) and #7724 (cold restore replays truncated responses) are both about the same fundamental failure mode — context-overflow recovery is not yet trustworthy.
- **Persistence integrity issues**: Broken session graphs after failed writes (#8052) and resume messages ignoring `PI_CODING_AGENT_DIR` (#8048) show users are actively depending on durable, restartable sessions — and hitting edge cases.
- **TUI performance at scale**: The 1650ms arrow-key latency in the prompt editor (#8029) and high CPU with long sessions (#7730) suggest the TUI's rendering/serialization path needs profiling under large buffers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-13

## Today's Highlights

Two desktop releases shipped within 24 hours (v0.2.1 and v0.2.0), focusing on workspace-scoped memory defaults and web-shell stability. Meanwhile, the community is actively validating a new release with bug reports around image-loading regressions, long-running task failures, and headless auth issues. A significant RFC around auto-memory recall ( #7040 ) continues to attract attention as its implementation PRs move through review.

## Releases

**Qwen Code Desktop v0.2.1** — [GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.2.1)
- `refactor(serve)`: Default project memory scoped to workspace by default ( [#8856](https://github.com/QwenLM/qwen-code/pull/8856) )
- `feat(telemetry)`: Session lifecycle telemetry alignment

**Qwen Code Desktop v0.2.0** — [GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.2.0)
- `fix(web-shell)`: Stabilized transcript history pagination ( [#8914](https://github.com/QwenLM/qwen-code/pull/8914) )
- `feat(web-shell)`: Session catalog sharing support

## Hot Issues

1. **[#7040 — RFC: Reliable auto-memory recall (timing, quality, telemetry)](https://github.com/QwenLM/qwen-code/issues/7040)** · *P2, 10 comments*
   The core memory-recall design doc is converging: recall-delivery telemetry already merged, initial-turn recall + deterministic fast path in review (#8716), and precision/multilingual evaluation underway. The design was amended after measurement, indicating strong engineering discipline.

2. **[#8963 — "Cannot auto-run" for long tasks](https://github.com/QwenLM/qwen-code/issues/8963)** · *P2 bug, 9 comments*
   Users report qwen-code stalls when running long Python scripts or shell commands in auto/yolo mode, needing overnight runs. Community compares unfavorably against kimi code and requests a "blind accept" mode. High-impact for agentic workflows.

3. **[#8957 — Regression: crash on image load since 0.21.2](https://github.com/QwenLM/qwen-code/issues/8957)** · *P2 bug, 8 comments*
   Instant crash when reading images after 0.21.1. Marked as regression with retest requested; blocking for users relying on multimodal input.

4. **[#8678 — Session restore timeout loses current session](https://github.com/QwenLM/qwen-code/issues/8678)** · *P1 bug, 7 comments*
   Large restores that time out can abort the active session. First PR (#8691) implementing safe timeout contract is merged; broader design work continues in #8743.

5. **[#8562 — tmux flickering on Ubuntu over SSH/iTerm2](https://github.com/QwenLM/qwen-code/issues/8562)** · *P2 bug, 7 comments*
   Recent versions cause screen flicker in tmux splits. User's Qwen 3.8 Max analysis points to Qwen Code version issue; confirmed as a rendering bug in interactive mode on Linux.

6. **[#8097 — Background agent coordination gaps](https://github.com/QwenLM/qwen-code/issues/8097)** · *P2 bug, 6 comments*
   Multiple issues when running concurrent Explore subagents: duplicate work, premature completion, and non-interactive `send_message`. Core multi-agent reliability concern.

7. **[#9016 — Vertex AI ADC auth broken](https://github.com/QwenLM/qwen-code/issues/9016)** · *P2 bug, 4 comments*
   Vertex AI requires an API key even when ADC is configured; providing any key value disables ADC entirely, resulting in 401s. Companion issue #9025 extends this to headless environments.

8. **[#9002 — SDK rejects `permission_mode="auto"`](https://github.com/QwenLM/qwen-code/issues/9002)** · *P3 bug, 5 comments*
   Python SDK client-side validation rejects the `auto` permission mode that the CLI supports — a frustrating inconsistency for SDK users.

9. **[#9015 — Main CI E2E failure (auto-tracked)](https://github.com/QwenLM/qwen-code/issues/9015)** · *P1 bug, 4 comments*
   Bot-tracked main-branch CI failure on commit `05079297d26c`; no test results reported before failure. Watch for flaky E2E issues.

10. **[#8979 — MAX_TOKENS recovery corrupts transcript on --resume](https://github.com/QwenLM/qwen-code/issues/8979)** · *P2 bug, 3 comments*
    After output-token recovery, durable JSONL transcript disagrees with in-memory history; `--resume` rehydrates duplicated turns. Data-integrity bug for long sessions.

## Key PR Progress

1. **[#9028 — Drop web-shell e2e related-paths that breach resolved-file bound](https://github.com/QwenLM/qwen-code/pull/9028)** · *autofix/takeover*
   Trims committed review-context manifest to respect source-file bounds; maintains sentinel map consistency.

2. **[#8905 — Adaptively grow live-journal caps before truncating mid-turn replay](https://github.com/QwenLM/qwen-code/pull/8905)** · *autofix/takeover* · *serve*
   Daemon now doubles per-session caps when in-flight turns outgrow limits, reducing data loss during long generations.

3. **[#8971 — Write per-agent transcripts for workflow dispatches](https://github.com/QwenLM/qwen-code/pull/8971)** · *autofix/takeover* · *core*
   Every workflow `agent()` dispatch now leaves a JSONL transcript like sub-agent tool launches, seeded with the dispatch prompt.

4. **[#8972 — Workflow agent can pin a directory and outlive default bounds](https://github.com/QwenLM/qwen-code/pull/8972)** · *autofix/takeover* · *core*
   Adds `agent({workingDir})` for pinning workflow subagents to existing git worktrees, plus relaxed lifetime bounds.

5. **[#8743 — Plan selective session restore (draft)](https://github.com/QwenLM/qwen-code/pull/8743)** · *docs/design*
   Design doc for bounded UI history hydration slice (#8678); references merged groundwork (#8691, #8833, #8882, #8933).

6. **[#9012 — Bound headless tool result content](https://github.com/QwenLM/qwen-code/pull/9012)** · *CLOSED*
   Enforces 65,536-byte limit on `tool_result.content` in Headless JSON adapters with deterministic 20/80 head-tail previews.

7. **[#8981 — Brake review-round diff growth with per-window src/test budgets](https://github.com/QwenLM/qwen-code/pull/8981)** · *autofix/takeover*
   Autofix review loop now tracks net-diff baselines per counting window, splitting test vs src line budgets to prevent runaway patches.

8. **[#8626 — Preserve Claude hooks in dual-manifest extensions](https://github.com/QwenLM/qwen-code/pull/8626)**
   Imports Claude-compatible hooks while keeping Qwen/Gemini resources; fixes marketplace-entry vs direct-install distinction.

9. **[#8740 — Share one Chrome bridge across sessions via multi-client /cdp tunnel](https://github.com/QwenLM/qwen-code/pull/8740)** · *review/self-reported*
   Daemon `/cdp` tunnel becomes multi-client; routes tagged results via `linkId`, reducing per-session Chrome reconnects.

10. **[#8994 — Review settings: attribution, default effort, default comment](https://github.com/QwenLM/qwen-code/pull/8994)** · *autofix/takeover*
    New `/review` settings resolved only from operator-controlled scopes (system → user), preventing repo-controlled policy override.

## Feature Request Trends

- **Reliable long-running autonomy** — Users repeatedly demand stable overnight execution, "blind accept" modes, and better handling of long shell tasks ( #8963 , #8097 ). Expect continued investment in agent lifecycle management.
- **Memory & context recall precision** — The auto-memory RFC ( #7040 ) and its implementation chain show heavy focus on deterministic recall timing, bounded initial-turn retrieval, and multilingual evaluation.
- **Resilience under load** — Adaptive journal caps (#8905), selective session restore (#8743), and daemon resource protection (#8091) all target graceful degradation when sessions grow large.
- **Multimodal & Omni integration** — The omni-experiment roadmap (#8197) advances, while image-loading regressions (#8957) highlight the risk of shipping multimodal features quickly.
- **Web-shell & desktop convergence** — Roadmap to deprecate Electron in favor of Tauri (#8596), plus web-shell uploads (#8874) and session-naming fixes (#8977), indicate consolidation around the web-shell/desktop experience.

## Developer Pain Points

- **Headless & auth friction** — Multiple auth issues in non-interactive environments: Vertex AI ADC not inferred (#9025), API key required for keyless setups (#9016), and `--approval-mode`/`--auth-type` missing from help (#8897).
- **Transcript/history integrity** — MAX_TOKENS recovery (#8979), session-restore timeouts (#8678), and web-shell session mutation (#8923) all break durable session state — a systemic concern.
- **Configuration drift** — Settings advertised but not honored (`tools.truncateToolOutputThreshold` ignored by shell, #8922); flags accepted but undocumented (#8897); SDK validation diverging from CLI (#9002).
- **UI/UX regressions on Linux/remote** — tmux flickering (#8562), desktop scrollbar jitter (#8985), and statusline selection issues (#8131) suggest rendering/terminal integration needs more coverage.
- **Flaky CI & test infrastructure** — Recurring E2E failures (#9015), ENOSPC and load-sensitive flakes (#8982), and linter cache issues (#9001) drain contributor cycles.

---
*Digest generated from [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) activity on 2026-08-13.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-13

## 1. Today's Highlights

The project has officially rebranded to **CodeWhale** (Shannon Labs), with the legacy `deepseek-tui` npm package deprecated. The v0.9.6 release is out, and the community is actively contributing—five community PRs were harvested by maintainers this week due to CI base-drift issues. The maintainer team is pushing forward on a major crate decomposition effort (EPIC-005/006) while fixing several regressions introduced in v0.9.5, most notably a critical Auto-Review mode bug that silently blocks all Bash calls.

## 2. Releases

**v0.9.6** — Codewhale is now the public product name (Shannon Labs). The `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers. The legacy npm package `deepseek-tui` is deprecated and receives no further releases. Users coming from v0.8.x legacy `deepseek` / `ds` commands should migrate to `codewhale`.

## 3. Hot Issues

1. **[#5323 — [bug] Regression in v0.9.5: Auto-Review mode silently blocks every Bash call and write operation**](https://github.com/Hmbown/CodeWhale/issues/5323)  
   Critical regression: Auto-Review mode changed from auto-approving to silently blocking all tool calls. This breaks automation workflows and erodes user trust. Only 3 comments so far, but this is the most urgent bug in the tracker.

2. **[#4949 — Discussion: The Chinese Translation of "Constitution" — "宪法", "协作准则", or Something Else?**](https://github.com/Hmbown/CodeWhale/issues/4949)  
   Active i18n debate (9 comments) about whether "宪法" (constitution) carries inappropriate political connotations in Chinese. The community is split; this reflects the project's growing international user base.

3. **[#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**](https://github.com/Hmbown/CodeWhale/issues/5316)  
   Major architectural refactor to decompose the TUI into separate crates. This is the tracking issue for a multi-week effort that will touch every part of the codebase.

4. **[#5335 — serve --mcp responds to tools/list and resources/list with "nextCursor": null, breaking strict MCP clients**](https://github.com/Hmbown/CodeWhale/issues/5335)  
   Protocol compliance bug—the MCP spec requires `nextCursor` to be a string or absent. Strict clients like Claude Code reject the `null` value. Fixed by PR #5336.

5. **[#5034 — [bug] Switching providers can retain an unrelated default model**](https://github.com/Hmbown/CodeWhale/issues/5034)  
   Provider and model resolution aren't being updated coherently, leaving stale defaults like `gpt-5.5` after switching to OpenAI. Closed but relevant for multi-provider users.

6. **[#5209 — [bug] File (action=edit) silently accepts wrong parameter names and reports fake success**](https://github.com/Hmbown/CodeWhale/issues/5209)  
   Tool reliability issue: wrong parameter names (e.g., `new_str` instead of `replace`) are accepted and return false positives, requiring 3-5x re-edits per location. This wastes significant agent time.

7. **[#5250 — Only one API key can be saved, making it difficult when using across different API providers**](https://github.com/Hmbown/CodeWhale/issues/5250)  
   Multi-provider users (DeepSeek + GLM) can only store one API key at a time, forcing key re-entry on every provider switch. High demand for per-provider key storage.

8. **[#5322 — [bug] Regression: output area doesn't fill wide terminals (worked in v0.8.65)**](https://github.com/Hmbown/CodeWhale/issues/5322)  
   UX regression: v0.9 caps the transcript width on wide displays, leaving cramped text and wasted white space. Minor but annoying for desktop users.

9. **[#5000 — Engine: make interrupted assistant output a durable first-class session item**](https://github.com/Hmbown/CodeWhale/issues/5000)  
   When a turn is interrupted, partial assistant text is lost from the authoritative session—a data-integrity issue affecting resume and context continuity.

10. **[#5314 — Copy message from context menu includes rail decorations (● ▏)**](https://github.com/Hmbown/CodeWhale/issues/5314)  
    UI polish bug: copying a message includes role glyphs and rail characters, polluting the copied content. Fixed by PR #5319/#5331.

## 4. Key PR Progress

1. **[#5328 — FEAT-014: Command contract crate boundary for commands extraction**](https://github.com/Hmbown/CodeWhale/pull/5328)  
    Part of EPIC-005/006—prototype command migration shapes for TUI decomposition. Early-upstream draft for community review.

2. **[#5339 — fix(engine): suppress child-owned shell completions**](https://github.com/Hmbown/CodeWhale/pull/5339)  
    Filters child-owned background shell completion events from the parent model stream; adds regression tests. Closes #5325.

3. **[#5338 — feat(web): move docs guide page onto the dictionary spine**](https://github.com/Hmbown/CodeWhale/pull/5338)  
    First slice of #5337: retires `isZh` ternaries in the docs guide page by introducing per-page dictionary pattern. i18n modernization.

4. **[#5333 — feat(tui): pin host terminal window as an always-on-top mini window**](https://github.com/Hmbown/CodeWhale/pull/5333)  
    Harvest of community PR #5318—adds PiP (picture-in-picture) capability for the host terminal on Windows. First v0.9.7 contributor integration.

5. **[#5330 — fix(session): separate snapshot reads from crash recovery**](https://github.com/Hmbown/CodeWhale/pull/5330)  
    Harvest of community PR #5320 (h3c-hexin). Adds side-effect-free snapshot reads and proper crash recovery paths.

6. **[#5336 — fix(mcp): omit nextCursor when there are no further pages**](https://github.com/Hmbown/CodeWhale/pull/5336)  
    Fixes #5335—MCP spec compliance for `tools/list` and `resources/list` responses. Small but protocol-critical fix.

7. **[#5334 — docs(i18n): retire stale zh-Hant partial-pack declaration**](https://github.com/Hmbown/CodeWhale/pull/5334)  
    Cleans up five surfaces still describing zh-Hant as a partial pack when it reached full parity in PR #5143.

8. **[#5332 — feat(config): register OrcaRouter as a named provider**](https://github.com/Hmbown/CodeWhale/pull/5332)  
    Harvest of community PR #5321—registers OrcaRouter (OpenAI-compatible gateway, 150+ models) the same way OpenRouter is wired.

9. **[#5329 — fix(tui): move lru to 0.18 and unpin ratatui-core (RUSTSEC-2026-0253)**](https://github.com/Hmbown/CodeWhale/pull/5329)  
    Security fix: RustSec advisory for `LruCache::pop()` panic-unsafety. Restores the green main gate.

10. **[#5327 — feat(tui): add interactive extensions manager**](https://github.com/Hmbown/CodeWhale/pull/5327)  
    Adds localized `/plugin` and `/plugins` manager with digest-bound bundle lifecycle, retaining legacy tools as read-only inventory.

## 5. Feature Request Trends

- **Multi-provider support**: Repeated requests for per-provider API key storage (#5250), coherent provider/model switching (#5034), and new provider registration (OrcaRouter via #5321/#5332)
- **Task unification**: v0.9.5's unified tasks surface (#5270) merging shells, subagents, Fleet workers, and workflow runs into one operator-facing list
- **Workspace recovery**: Prompt-scoped file recovery (#5272) and session-scoped rollback (#5089)—users want safer undo and crash recovery
- **i18n and localization**: Active zh-Hant parity work (#5334), dictionary spine modernization (#5337/#5338), and the "Constitution" translation debate (#4949)
- **Terminal ergonomics**: PiP mode for terminal windows (#5318), wide-terminal output (

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*