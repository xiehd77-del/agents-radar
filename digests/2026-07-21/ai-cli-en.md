# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-21 02:49 UTC | Tools covered: 9

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
**2026-07-21**

---

## 1. Ecosystem Overview

The AI CLI developer tools space is experiencing intense competition with **seven active open-source projects** shipping rapid iterations while grappling with scaling pains. The landscape is characterized by **converging feature sets** (agent orchestration, sandboxing, multi-model support) alongside **sharp differentiation** in platform maturity and community governance. Data integrity, cost transparency, and cross-platform reliability are the dominant pain points across all tools, with Claude Code and Copilot CLI showing highest maturity in issue triage while Kimi Code and DeepSeek TUI demonstrate the fastest PR-to-fix cycles. The ecosystem is bifurcating between **enterprise-focused platforms** (Copilot CLI, Claude Code) with polished sandbox models and **community-driven tinker tools** (Pi, OpenCode, Qwen Code) with broader BYOK flexibility.

---

## 2. Activity Comparison

| Tool | Issues Active (Last 24h) | PRs Active (Last 24h) | Release Status | Key Release |
|------|--------------------------|----------------------|----------------|-------------|
| **Claude Code** | 10 hot issues | 7 PRs | ✅ Released v2.1.216 | Quadratic slowdown fix, filesystem sandbox controls |
| **Codex CLI** | 10 hot issues | 10 PRs | ✅ Alpha releases (2) | Route-aware HTTP pooling, Windows sandboxing |
| **Gemini CLI** | 10 hot issues | 10 PRs | ✅ Nightly v0.52.0 | A2A server RCE security fix |
| **Copilot CLI** | 10 hot issues | 0 PRs | ✅ Two releases (v1.0.72, v1.0.73) | Sub-agent reliability, agentStop hang fix |
| **Kimi Code** | 5 hot issues | 2 PRs | ⏸️ No release (24h) | — |
| **OpenCode** | 10 hot issues | 10 PRs | ✅ Released v1.18.4 | Adaptive thinking controls, notification crash fix |
| **Pi** | 10 hot issues | 10 PRs | ⏸️ No release (24h) | — |
| **Qwen Code** | 10 hot issues | 10 PRs | ✅ Nightly v0.20.0 | Label-driven autofix takeover |
| **DeepSeek TUI** | 10 hot issues | 10 PRs | ⏸️ Pre-release (v0.9.1 sprint) | Enter-key lag fix, permission sandboxing |

**Notable:** DeepSeek TUI shows **highest burst activity** (40 closed issues + 12 merged PRs today) despite no release, indicating a stabilization sprint. Copilot CLI had zero PR activity in 24h despite shipping two releases — suggesting batch-release workflow.

---

## 3. Shared Feature Directions

### Cross-Platform Reliability (All tools)
- **Linux Desktop App** (Codex #11023, 802👍) — top single request
- **Windows performance** — freezing, 300+ process spawns (Codex), clipboard failures (Copilot CLI), hook leaks (DeepSeek TUI)
- **WSL2 stability** — PTY deadlocks (Gemini CLI), notification crashes (OpenCode)

### Multi-Agent Orchestration (Claude Code, Copilot CLI, Qwen Code, DeepSeek TUI)
- **Background agents** — persisting across sessions (Qwen Code #7352, Claude Code #78782)
- **Sub-agent model selection** — cost/capability per-agent (Claude Code #75055)
- **Context inheritance** — bounded fork turns (Qwen Code #7346)

### Context & Cost Transparency (Claude Code, Codex, Kimi Code, Copilot CLI)
- **Configurable compaction thresholds** — Copilot CLI #1688, Kimi Code #2525
- **Rate-limit cost spikes** — Codex #28879 (10-20× increase), Kimi Code #2209 (48h 429 errors)
- **Token-wasting polling** — Codex #13733 (cargo build loops), Copilot CLI #4183 (5MB cap)

### Sandbox & Permission Models (Claude Code, Codex, Copilot CLI, DeepSeek TUI)
- **Per-environment permission profiles** — Codex #34398 (merged), Claude Code sandbox.filesystem.disabled
- **Unified permission contracts** — DeepSeek TUI #4412 (Ask/Auto-Review/Full Access)
- **Managed network proxy resolution** — Codex #34436, Gemini CLI #28388

### Multi-Model / BYOK Support (Pi, Qwen Code, Copilot CLI)
- **Provider cost fields** — Pi #6881 (provider-reported cost)
- **Allow reasoning content** — Copilot CLI #4196 (BYOK reasoning)
- **Model fallback session IDs** — Gemini CLI #28469

---

## 4. Differentiation Analysis

| Dimension | Claude Code / Copilot CLI | Codex / Gemini CLI | Pi / OpenCode | Qwen Code / DeepSeek TUI |
|-----------|--------------------------|-------------------|---------------|--------------------------|
| **Target User** | Enterprise teams, CI/CD pipelines | Professional developers, cloud workflows | Individual hobbyists, BYOK power users | Open-source community, multilingual users |
| **Sandbox Maturity** | ✅ Granular filesystem + network controls | ✅ Per-environment profiles, Windows support | ⚠️ Basic, config-dependent | ⚠️ Worktree isolation, permission contracts |
| **Platform Focus** | macOS-first, Windows catching up | Linux-first, Windows growing | Cross-platform (bun/npm) | Cross-platform (Rust/Cargo) |
| **Release Cadence** | Conservative, patch-heavy | Alpha-heavy, infrastructure PRs | Community PRs, maintainer-driven | Nightlies, sprint-based |
| **Community Governance** | Strong corporate triage | Emerging, bot-assisted | Maintainer-led, contributor-friendly | Mixed (Qwen: corporate, DeepSeek: solo) |
| **Unique Strengths** | Agent skill composition (Claude), GH integration (Copilot) | Multi-agent encryption, HTTP routing | 60+ built-in providers, extension API | Autofix CI, headless mode, memory recall |
| **Weaknesses** | Data loss bugs, advisor availability | Rate-limit crisis, Windows perf | Subscription billing bugs, notification crashes | Thinking-mode collisions, MCP integration |

**Key Insight:** Claude Code and Copilot CLI compete at **enterprise trust** — their sandbox and permission models are the most sophisticated. Pi and OpenCode compete on **flexibility** — BYOK, multi-provider, extensibility. Qwen Code and DeepSeek TUI compete on **automation velocity** — autofix loops, background agents, CI integration.

---

## 5. Community Momentum & Maturity

### High Maturity (Claude Code, Copilot CLI)
- **Stable issue triage**: 600+ reaction issues with structured resolution paths
- **Enterprise-grade PRs**: Security patches, sandbox controls, proxy routing
- **Risk**: Data loss bugs (#62272, #78273) eroding trust; rate-limit opacity (Copilot CLI #4183)

### Rapid Iteration (Kimi Code, DeepSeek TUI)
- **Fastest PR-to-fix**: Kimi Code #2526 fixed within hours of filing
- **High burst activity**: DeepSeek TUI 40 issues + 12 PRs today
- **Risk**: Pre-release instability; DeepSeek TUI has 30+ release-blocker issues open

### Growing Tension (Codex, Gemini CLI)
- **Large feature requests going unaddressed**: Codex #11023 (Linux) at 802👍, no commitment
- **Rate-limit crisis**: Codex #28879 (358👍, 208 comments) — most impactful latent bug
- **Platform perception gap**: Gemini CLI perceived as slower than Claude Code (#22016)

### Community-Driven (Pi, OpenCode, Qwen Code)
- **Strong BYOK momentum**: Pi adding providers weekly (Qwen, Bedrock Mantle)
- **Contributor diversity**: DeepSeek TUI HarmonyOS build from community (#4566)
- **Risk**: Hardcoded model catalogs break builds (Pi #6891)

---

## 6. Trend Signals

**1. The "Rate-Limit Crisis" Is Systemic**
Codex's 10-20× cost increase (#28879) and Kimi Code's 48h 429 errors (#2209) signal that **AI CLI providers are under-pricing inference at launch, then correcting upward** — damaging trust. Developers are responding by demanding **cost transparency** (Pi #6881, Copilot CLI #1688) and **per-agent model selection** (Claude Code #75055).

**2. Data Integrity Is the Next Frontier**
Claude Code's chat JSONL deletion (#62272) and file overwrite (#78273), Kimi Code's resurrected deleted tasks (#2523), and OpenCode's orphaned sessions (#23248) reveal a **pattern of weak session persistence** across tools. Developers are investing in recovery scripts (Time Machine for Claude Code) — a sign of insufficient upstream reliability.

**3. Windows Remains the Second-Class Platform**
All seven tools have Windows-specific bugs open simultaneously: performance freezes (Codex), clipboard failures (Copilot CLI), advisor unavailability (Claude Code), hook leaks (DeepSeek TUI), and migration gaps (Kimi Code). The **Windows developer experience is the single largest unmet need** in the ecosystem.

**4. Multi-Agent Orchestration Is the New Frontier**
Claude Code (#78782, background agents), Qwen Code (#7352, cross-session persistence), and DeepSeek TUI (#4600, cached prefix forking) are all racing to productionize **reliable, observable multi-agent workflows**. The current state is fragile: background agents idle, contexts cross-pollinate, kill switches fail.

**5. The BYOK Provider Model Is Winning**
Pi's 60+ built-in providers, OpenCode's adaptive thinking controls, and Copilot CLI's BYOK support (#4196) demonstrate that **developers want provider-agnostic tools**. The ecosystem is shifting from single-provider lock-in to multi-provider flexibility, with Pi leading in breadth and Qwen Code in depth.

**6. AI-Assisted CI/CD Is Maturing Fast**
Qwen Code's autofix takeover (#7165), Copilot CLI's agentStop guards (v1.0.72), and Claude Code's skill composition (#79023) show **the ecosystem is treating PR automation as a first-class workflow**, not an afterthought. Expect tighter integration with GitHub Actions and GitLab CI in Q3-Q4 2026.

**Reference for Developers:**
- **If you need enterprise sandboxing**: Claude Code or Codex
- **If you need BYOK/multi-provider flexibility**: Pi or OpenCode
- **If you need CI/autofix automation**: Qwen Code or DeepSeek TUI
- **If you need GitHub ecosystem integration**: Copilot CLI
- **If you need cross-platform parity today**: None of these tools are mature — **invest in containerized or remote development environments** to isolate from platform-specific bugs

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the anthropics/skills repository.

---

## Claude Code Skills Community Highlights Report (Data as of 2026-07-21)

### 1. Top Skills Ranking

The following Pull Requests represent the most-discussed and highest-activity Skill submissions in the repository.

1.  **Skill-Creator Fixes (PR #1298)**
    - **Functionality:** A critical patch for the `skill-creator` meta-skill. It fixes `run_eval.py` which was reporting 0% recall for all skill descriptions, effectively breaking the entire description-optimization loop. The fix ensures evaluation artifacts are correctly installed and addresses Windows compatibility issues with stream reading and parallel workers.
    - **Discussion Highlights:** This is the central thread for a major, systemic bug. The PR references a high volume of independent reproductions and ties together multiple related fixes for the skill-creation pipeline. The discussion focuses on correctness of the evaluation methodology.
    - **Status:** Open. **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **Add document-typography skill (PR #514)**
    - **Functionality:** A skill designed to enforce typographic quality control in AI-generated documents. It prevents orphan words, widow paragraphs, and numbering misalignment, addressing common aesthetic issues in Claude's output.
    - **Discussion Highlights:** The community widely agrees on the value of this skill, noting that these issues are ubiquitous in generated documents. Discussion is focused on edge cases and the specific rules for what constitutes a "widow" or "orphan" across different locales.
    - **Status:** Open. **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **Add ODT skill (PR #486)**
    - **Functionality:** Provides Claude with the ability to create, fill, read, and convert OpenDocument Format files (.odt, .ods), enabling full interoperability with LibreOffice and ISO-standard document workflows.
    - **Discussion Highlights:** This is a highly demanded skill for enterprise users who rely on open-source office suites. The discussion covers the complexity of handling template filling and the nuances of the ODF specification.
    - **Status:** Open. **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

4.  **Add testing-patterns skill (PR #723)**
    - **Functionality:** A comprehensive skill covering the full testing stack, including testing philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), end-to-end testing (Playwright), and accessibility testing.
    - **Discussion Highlights:** Strong community interest in standardizing how Claude writes and recommends tests. The discussion focuses on the balance between prescriptive guidance and flexibility for different project needs.
    - **Status:** Open. **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

5.  **Improve frontend-design skill clarity (PR #210)**
    - **Functionality:** A revision of the existing `frontend-design` skill to make its instructions more actionable and specific. The goal is to ensure Claude can execute on the guidance within a single conversation.
    - **Discussion Highlights:** Highlights a common community problem: skills being too verbose or abstract. The discussion centers on making skill instructions "Lindy"—protocol-like and executable—rather than educational.
    - **Status:** Open. **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

6.  **Add self-audit skill (PR #1367)**
    - **Functionality:** A meta-skill that performs a mechanical file verification and a four-dimension reasoning quality audit on AI output before delivery. It is designed to be universal across projects and tech stacks.
    - **Discussion Highlights:** This is a newer but highly active PR proposing a novel "reasoning quality gate" pipeline. The community is engaged in defining the audit dimensions and the severity-priority ordering.
    - **Status:** Open. **Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

### 2. Community Demand Trends

Analysis of the most active Issues reveals the following key community demands for new Skill directions:

- **Skill-Creator Lifecycle:**
    The single largest demand is for a reliable and functional `skill-creator` meta-skill. Multiple issues (and PRs) are dedicated to fixing its evaluation loop (**Issue #556**, **Issue #1169**), ensuring it works on Windows (**Issue #1061**), and improving its output quality. The community needs a robust tool to build new skills.
- **Enterprise Governance & Security:**
    There is significant concern regarding the trust boundary of community-submitted skills distributed under the `anthropic/` namespace (**Issue #492**). Users are asking for official provenance markings and governance patterns. Relatedly, there is demand for agent governance and security patterns (**Issue #412**) for managing AI agents.
- **Organizational Sharing & Management:**
    A persistent demand is for enabling org-wide skill sharing within Claude.ai (**Issue #228**). The current manual process of downloading and re-uploading `.skill` files is a major friction point for enterprise adoption.
- **Skill Interoperability:**
    There is a recurring desire to expose Skills as MCP (Model Context Protocol) servers (**Issue #16**), indicating a community push towards a more standardized, protocol-based ecosystem for AI capabilities.
- **Platform Compatibility:**
    A consistent thread of issues highlights the demand for full Windows compatibility across all scripts and tools (**Issue #1061**, **Issue #202**).

### 3. High-Potential Pending Skills

These are open PRs with active discussion that are strong candidates for merging:

1.  **Add pyxel skill for retro game development (PR #525):** A well-defined, domain-specific skill for the Pyxel retro game engine. It is self-contained and has a clear use case, making it a likely merge. **Link:** [PR #525](https://github.com/anthropics/skills/pull/525)
2.  **Add color-expert skill (PR #1302):** A comprehensive skill covering color naming systems, spaces, and harmonies. It is a specialized but high-value addition for design and data visualization workflows. **Link:** [PR #1302](https://github.com/anthropics/skills/pull/1302)
3.  **Add comprehensive system documentation and flowcharts (PR #95):** While specific to a single system, it demonstrates a powerful pattern for using skills to generate high-quality, structured documentation. The concept is likely to be absorbed into a more general documentation skill. **Link:** [PR #95](https://github.com/anthropics/skills/pull/95)
4.  **Add SAP-RPT-1-OSS predictor skill (PR #181):** Taps into demand for enterprise data science workflows by integrating with an open-source tabular foundation model from SAP. **Link:** [PR #181](https://github.com/anthropics/skills/pull/181)

### 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, well-governed "skill-creator" meta-skill that can be used as a stable foundation to build, test, and distribute new Skills, reflecting a maturation of the ecosystem from curating individual skills to optimizing the skill development pipeline itself.**

---

# Claude Code Community Digest
**2026-07-21**

## Today's Highlights

A new patch release (v2.1.216) addresses a critical quadratic slowdown in long sessions and introduces granular filesystem sandboxing controls. The community's longest-running bug—console scroll reset (#826) now at 689 reactions and 353 comments—continues to dominate discussion alongside persistent frustrations with data loss, advisor availability, and agent workflow reliability across platforms.

## Releases

**v2.1.216** — [Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)

- **New setting:** `sandbox.filesystem.disabled` allows disabling filesystem isolation while retaining network egress control — a targeted escape hatch for users who need sandboxed networking without the full filesystem cage.
- **Performance fix:** Resolved a quadratic-time slowdown in message normalization that caused multi-second stalls and slow session resumes in long-running conversations. This addresses a growing pain point for power users running extensive sessions.

## Hot Issues

1. **[#826](https://github.com/anthropics/claude-code/issues/826) — Console scroll reset on macOS** (689 👍, 353 comments, 15 months open)  
   The longest-standing open bug: when Claude appends text, the terminal scroll position resets to the top. Unusually high community engagement despite being marked duplicate. The sheer comment count signals deep frustration with macOS CLI ergonomics.

2. **[#18435](https://github.com/anthropics/claude-code/issues/18435) — Multi-account profile switching** (668 👍, 148 comments)  
   Highly requested feature for Claude Desktop: managing multiple Anthropic accounts with easy switching. Critical for users with separate work/personal or multi-project accounts. No official response yet.

3. **[#73365](https://github.com/anthropics/claude-code/issues/73365) — Advisor permanently "unavailable" on Windows** (159 👍, 85 comments, 3 weeks old)  
   Fable 5 / Opus 4.8 advisor integration broken across all sessions since v2.1.198. Rapidly accumulating reactions indicates a widespread regression affecting Windows users on the latest model tier.

4. **[#62272](https://github.com/anthropics/claude-code/issues/62272) — Chat JSONLs deleted despite high cleanupPeriodDays** (3 👍, 18 comments)  
   Data-loss bug where chat histories are silently purged on updates/restarts regardless of retention settings. Includes a community-published Time Machine recovery script — a strong signal that user trust in session persistence is eroding.

5. **[#61021](https://github.com/anthropics/claude-code/issues/61021) — Text selection/copy broken in VSCode terminal** (8 👍, 12 comments)  
   Terminal integration regression making basic clipboard operations unreliable. Affects daily code-copy workflows and has been open a month without fix.

6. **[#79023](https://github.com/anthropics/claude-code/issues/79023) — `/code-review` skill invocation from custom skills broken** (10 👍, 6 comments)  
   A regression in v2.1.215 breaks automated PR workflows where custom skills chain to the built-in `/code-review`. Critical for CI/CD pipeline users.

7. **[#78782](https://github.com/anthropics/claude-code/issues/78782) — Background Bash tasks never resume subagents** (0 👍, 3 comments)  
   Subagents spawned via Agent tool with `run_in_background: true` idle forever after background tasks complete. Core workflow reliability issue for multi-agent orchestration.

8. **[#78273](https://github.com/anthropics/claude-code/issues/78273) — Irreversible file overwrite without confirmation** (0 👍, 3 comments)  
   Claude Code overwrote an existing user file containing research content without warning. Data-loss severity with no undo path — raises serious safety concerns around file write permissions.

9. **[#76653](https://github.com/anthropics/claude-code/issues/76653) — Localhost proxies blocked by Remote Control policy** (9 👍, 2 comments)  
   Since v2.1.196, `ANTHROPIC_BASE_URL` pointing at loopback proxies disables Remote Control entirely. Breaks local proxy setups for debugging and custom routing.

10. **[#79615](https://github.com/anthropics/claude-code/issues/79615) — Jobs unkillable, continues consuming tokens** (0 👍, 1 comment, filed today)  
    Critical: `kill` signals, `/stop`, `/clear`, Ctrl-C all fail to interrupt running agents. Users report runaway token consumption with no kill switch — a severe reliability and cost issue.

## Key PR Progress

1. **[#79620](https://github.com/anthropics/claude-code/pull/79620) — Text-to-speech accessibility hook** (New, 0 👍)  
   Community implementation of TTS read-aloud for Claude Code responses, with multi-platform support (Piper/say/PowerShell) and markdown-aware text extraction. Responds to feature request [#79542](https://github.com/anthropics/claude-code/issues/79542).

2. **[#79387](https://github.com/anthropics/claude-code/pull/79387) — Better error messaging for label script** (New, 0 👍)  
   Adds stderr error message when `edit-issue-labels.sh` is called without required label arguments. Small but improves script ergonomics for automation workflows.

3. **[#79385](https://github.com/anthropics/claude-code/pull/79385) — Fix thumbs-down honor for auto-close bot** (New, 0 👍)  
   Patches the duplicate issue auto-closure bot to respect thumbs-down reactions from *any* user, not just the issue author — fixing a community governance loophole.

4. **[#74722](https://github.com/anthropics/claude-code/pull/74722) — Conventional Branch naming for `/commit-push-pr`** (Open, 0 👍)  
   Adds support for Conventional Branch 1.0.0 naming (`feature/`, `bugfix/`, etc.) as an optional argument to the commit-push-pr workflow — useful for teams enforcing branch naming conventions.

5. **[#78532](https://github.com/anthropics/claude-code/pull/78532) — GCP Terraform fixes: internal ALB + PG16 support** (Open, 0 👍)  
   Fixes Cloud SQL deployment failures on PG16 due to ENTERPRISE_PLUS edition defaults; adds optional internal ALB configuration. Important for self-hosted gateway users on GCP.

6. **[#66650](https://github.com/anthropics/claude-code/pull/66650) — Full author name in PR review toolkit plugin** (Closed, merged)  
   Corrects author name from "Daisy" to "Daisy Hollman" for consistency across bundled plugins. Minor but shows attention to manifest metadata integrity.

7. **[#1](https://github.com/anthropics/claude-code/pull/1) — SECURITY.md** (Closed, historic)  
   Repository's first PR adding security policy documentation. Now a historical artifact but foundational for responsible disclosure processes.

## Feature Request Trends

- **Multi-account management (#18435, 668 👍):** The single most-demanded feature — easy profile switching in Claude Desktop for users with multiple Anthropic accounts.
- **Persistent remote sessions (#49790, 29 👍):** SSH sessions should survive client disconnects, enabling reconnection and resume — critical for remote development workflows.
- **Localhost proxy support (#76653, 9 👍):** Users want to run local proxies (MITM proxies, custom routing) without losing Remote Control functionality.
- **Built-in TTS accessibility (#79542, #79620):** Growing interest in text-to-speech for accessibility and hands-free workflows, with a community implementation already submitted.
- **Subagent model override (#75055):** Workflow agents inherit the session model with no override mechanism — users want per-agent model selection to control cost and capability.

## Developer Pain Points

- **Data loss is the dominant concern:** Two major vectors — chat JSONL deletion on update (#62272) and silent file overwrites (#78273) — erode trust in session and file integrity.
- **Agent orchestration fragility:** Background subagents fail to resume after task completion (#78782), MCP tools are inaccessible to subagents (#79621), and concurrent MCP sessions cross-pollinate (#79241). Multi-agent workflows remain unreliable in production.
- **Skill composition regressions:** The `/code-review` skill can no longer be invoked from custom skills (#79023, #79560), breaking automated PR pipelines that depended on skill chaining.
- **Kill-switch unresponsiveness (#79615):** Running agents cannot be interrupted, leading to uncontrolled token consumption — a critical cost and operational risk.
- **Platform-specific gaps persist:** Windows users face advisor unavailability (#73365), Cowork VM service failures (#64592), and text selection issues (#61021). macOS users struggle with console scroll (#826) and filesystem TCC permission prompts (#61233). Linux users hit auth loop bugs (#77765).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-07-21

## Today's Highlights

The Codex community is facing a severe rate-limit crisis, with Issue #28879 documenting a 10-20× increase in per-token cost consumption since mid-June that drains Plus plan budgets in 2-3 prompts (358 upvotes, 208 comments). Meanwhile, the engineering team shipped a heavy batch of infrastructure PRs today — including route-aware HTTP client pooling, Windows sandboxing support for the exec server, and per-environment permission profiles — signaling a major push toward enterprise-grade networking and sandbox reliability. The long-running Linux desktop app request (#11023) continues to dominate user sentiment with 802 upvotes and no official commitment.

## Releases

Two new alpha releases were published for the Rust variant of Codex today:
- **`rust-v0.145.0-alpha.27`** and **`rust-v0.145.0-alpha.25`** — both labeled as "Release 0.145.0-alpha.27" and "Release 0.145.0-alpha.25" respectively, with no further changelog details provided.

---

## Hot Issues (Top 10 by Community Impact)

1. **[#28879] Rate-limit cost per token jumped ~10-20x since June 16**  
   *Author: mihneaptu | 👍: 358 | Comments: 208*  
   **Why it matters:** The most impactful bug in the tracker. Plus plan users report their 5-hour budget being consumed in 2-3 prompts on `gpt-5.5`, matching model but with drastically higher per-token cost. Session logs confirm limit-% consumed per token increased 10-20×. This is causing widespread service disruption and likely contributing to user churn.  
   [View Issue](https://github.com/openai/codex/issues/28879)

2. **[#11023] Codex desktop app for Linux**  
   *Author: Suhaibinator | 👍: 802 | Comments: 181*  
   **Why it matters:** The most upvoted feature request overall. Users are desperate for a Linux native app due to power/performance issues on macOS. Remains unaddressed after 5+ months, with 802 upvotes signaling it's a top community priority.  
   [View Issue](https://github.com/openai/codex/issues/11023)

3. **[#20214] Codex App frequently freezes/stutters on Windows 11 Pro**  
   *Author: squarepots | 👍: 68 | Comments: 60*  
   **Why it matters:** Despite 32GB RAM and a Ryzen 5 5600, the app exhibits persistent freezing. This is part of a broader pattern of Windows performance issues affecting core usability.  
   [View Issue](https://github.com/openai/codex/issues/20214)

4. **[#13733] Background process polling wastes tokens**  
   *Author: jitlabs-sg | 👍: 29 | Comments: 31*  
   **Why it matters:** During `cargo build` or `cargo test`, Codex enters a polling loop that triggers full API round-trips with complete history, burning tokens proportional to history size × poll count. Compounding the rate-limit crisis.  
   [View Issue](https://github.com/openai/codex/issues/13733)

5. **[#28058] Encrypted MultiAgentV2 messages remove readable task audit trail**  
   *Author: ignatremizov | 👍: 99 | Comments: 25*  
   **Why it matters:** A regression in MultiAgentV2 after encryption was added (post-0.137.0). Users doing multi-agent debugging can no longer read task audit trails, breaking observability for complex workflows.  
   [View Issue](https://github.com/openai/codex/issues/28058)

6. **[#25271] Computer Use cannot determine Chrome URL on Windows**  
   *Author: livlojp | 👍: 8 | Comments: 19*  
   **Why it matters:** The "Computer Use" feature, a flagship capability, is broken on Windows — even on `chrome://newtab/`. Affects enterprise users relying on browser automation.  
   [View Issue](https://github.com/openai/codex/issues/25271)

7. **[#24287] UI stuck in Thinking state; Stop fails; turn becomes invisible**  
   *Author: winnal | 👍: 5 | Comments: 16*  
   **Why it matters:** A hard-to-recover state where the desktop app accepts a prompt, shows "Thinking" permanently, the Stop button doesn't work, and the turn disappears after restart. This is a severe UX regression for Pro users.  
   [View Issue](https://github.com/openai/codex/issues/24287)

8. **[#33711] Unified ChatGPT app causes persistent Microsoft Defender CPU usage**  
   *Author: hurlyliu-del | 👍: 6 | Comments: 8*  
   **Why it matters:** Closed as a confirmed bug. The unified app triggers Defender to run at 100% CPU with system-wide mouse stuttering on Windows 10 — a security/compliance issue in enterprise environments.  
   [View Issue](https://github.com/openai/codex/issues/33711)

9. **[#31969] Unsupported parameter: 'reasoning.summary' with 'gpt-5.3-codex-spark' model**  
   *Author: zhanglei-workspace | 👍: 8 | Comments: 13*  
   **Why it matters:** An API compatibility issue where the `gpt-5.3-codex-spark` model rejects the `reasoning.summary` parameter. This blocks users trying to configure reasoning behavior and suggests model-specific API surface inconsistencies.  
   [View Issue](https://github.com/openai/codex/issues/31969)

10. **[#34025] Cold launch spawns 300+ taskkill.exe/conhost.exe and freezes PC**  
    *Author: RainyMarks | 👍: 0 | Comments: 4*  
    **Why it matters:** Even with low upvotes, this is a catastrophic bug — launching the app causes 300+ process spawns and freezes the entire Windows system. Reproducible without Computer Use.  
    [View Issue](https://github.com/openai/codex/issues/34025)

---

## Key PR Progress (Top 10 by Infrastructure Impact)

1. **[#34447] Add a route-aware HTTP client pool**  
   *Author: copyberry[bot] | Merged 2026-07-21*  
   **What changed:** New `RouteAwareClientPool` that resolves PAC/system-proxy routes per-URL while reusing transport clients. Fixes a fundamental networking issue where different URLs could select different outbound routes.  
   [View PR](https://github.com/openai/codex/pull/34447)

2. **[#34441] Add buffered code-mode exec yields**  
   *Author: copyberry[bot] | Merged 2026-07-21*  
   **What changed:** Experimental `code_mode_buffered_exec` feature that extends default `exec` yield_time_ms from 10s to 30s. Reports the effective default in model-visible tool descriptions. Aims to reduce token-wasting polling loops.  
   [View PR](https://github.com/openai/codex/pull/34441)

3. **[#34423] Support Windows sandboxing in the exec server**  
   *Author: copyberry[bot] | Merged 2026-07-20*  
   **What changed:** Adds a shared native process launcher that selects the Windows sandbox session backend when required. Previously sandboxed execution was Unix-only. Critical for parity and for Windows performance/security issues.  
   [View PR](https://github.com/openai/codex/pull/34423)

4. **[#34398] Support per-environment permission profiles**  
   *Author: pakrym-oai | Merged 2026-07-20*  
   **What changed:** Environments can now override thread permission profiles for shell, exec, filesystem access, approval, and managed-network decisions. Omitted values inherit the thread profile. Enables fine-grained sandbox policies per environment (e.g., dev vs. prod).  
   [View PR](https://github.com/openai/codex/pull/34398)

5. **[#34436] Honor managed permission profiles in network proxy resolution**  
   *Author: copyberry[bot] | Merged 2026-07-21*  
   **What changed:** Permission profiles defined by `requirements.toml` now apply their network configuration when resolving proxy specifications. Complements the per-environment profiles PR.  
   [View PR](https://github.com/openai/codex/pull/34436)

6. **[#34435] Resolve outbound proxy routes explicitly**  
   *Author: copyberry[bot] | Merged 2026-07-21*  
   **What changed:** System proxy discovery can block; this PR resolves unavailable decisions to an explicit environment proxy or direct connection. Prevents inconsistent or hanging proxy behavior.  
   [View PR](https://github.com/openai/codex/pull/34435)

7. **[#34431] Optimize remote compaction history handling**  
   *Author: copyberry[bot] | Merged 2026-07-20*  
   **What changed:** Estimates token counts once per history item instead of repeatedly. Avoids cloning history when tracing is disabled. Reduces CPU and memory overhead for processing large conversation histories.  
   [View PR](https://github.com/openai/codex/pull/34431)

8. **[#30235] Kill timed-out Git status process groups**  
   *Author: tamird | Merged 2026-07-20*  
   **What changed:** On Unix, `git status --porcelain` now runs in its own process group. When the 5-second timeout fires, the entire process group (including any wrapper-spawned child processes) is killed. Prevents orphaned `git` processes from scanning the worktree indefinitely.  
   [View PR](https://github.com/openai/codex/pull/30235)

9. **[#34413] Remove CSV-backed agent jobs**  
   *Author: copyberry[bot] | Merged 2026-07-20*  
   **What changed:** Removes `spawn_agents_on_csv` and `report_agent_job_result` tools and their runtime models. Drops legacy `agent_jobs` and `agent_job_items` tables. Signals a migration away from CSV-based multi-agent orchestration toward more robust patterns.  
   [View PR](https://github.com/openai/codex/pull/34413)

10. **[#34409] Limit the Linux `/proc` preflight filesystem view**  
    *Author: copyberry[bot] | Merged 2026-07-20*  
    **What changed:** The bubblewrap `/proc` mount probe now runs with the minimal read-only filesystem policy instead of the command's filesystem policy. Preserves requested network namespace mode. Tightens security for Linux sandboxing.  
    [View PR](https://github.com/openai/codex/pull/34409)

---

## Feature Request Trends

The most requested feature directions across all issues are:

1. **Linux Desktop App (#11023)** — 802 upvotes, 5+ months open. The community's loudest voice is for a native Linux client to escape macOS power issues and Windows performance problems.

2. **Project/Workspace Context Awareness** — Multiple issues (#32519, #26070, #29681) ask for cross-app project context sharing between ChatGPT mobile and Codex desktop, plus showing project names in pinned chats and auto-prefixing chat titles with project names.

3. **Explicit Expiration Timestamps (#32726)** — Users want exact timezone-aware expiration timestamps on reset cards, not just "Expires 8/1". A small UX change with high compliance/planning value.

4. **Historical Session Visibility** — Requests for better session history management, including preventing VS Code history from hiding local chats (#21244) and showing project names in sidebar pinning.

---

## Developer Pain Points

**Recurring frustrations and high-frequency issues:**

- **Rate-limit crisis (#28879)** — The dominant pain point: 10-20× cost increase since June 16, draining budgets in 2-3 prompts. No fix or acknowledgment yet from OpenAI.

- **Windows performance crater** — Multiple issues (#33711, #34025, #34305, #33737) document freezing, 300+ process spawns, Defender CPU storms, and disk saturation. The unified ChatGPT/Codex app is effectively unusable on some Windows configurations.

- **Token-wasting polling (#13733)** — Background process (cargo build, test) polling triggers full API round-trips with complete history. Particularly painful combined with the rate-limit issue.

- **UI state corruption** — "Stuck in Thinking" (#24287), invisible turns, failure of Stop button, and broken session recovery after restart. Users report losing work and being unable to abort runaway responses.

- **Multi-agent observability regression (#28058)** — Encryption of MultiAgentV2 messages removed the readable task audit trail entirely, breaking debugging for advanced workflows.

- **Keyboard shortcut conflicts** — Issues #10749 and #33977 report that Ctrl-B/Cmd-B toggles the sidebar instead of moving cursor backward in text inputs — a fundamental editing workflow break on both macOS and Windows.

- **Windows sandbox/SSH compatibility** — Windows-to-Windows remote SSH fails (#26164); sandboxing repeatedly scans `node_modules` causing 100% disk usage (#33737); Computer Use cannot determine Chrome URLs (#25271). Windows remains a second-class platform for advanced features.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-21

## Today's Highlights
The nightly release **v0.52.0-nightly.20260721** is out, accompanied by a **critical security fix** for the A2A server preventing RCE in untrusted workspaces. The community is grappling with a **lingering VSCode extension breaking change** (Issue #12657, 74 comments) and a cluster of **WSL2 input/execution issues** that continue to frustrate users. Infrastructure work on an automated SSR pipeline is progressing across multiple PRs.

## Releases
- **v0.52.0-nightly.20260721.gacae7124b** — Automated nightly build. No additional notes.
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

## Hot Issues (Top 10 by Comment Activity)

1. **[#12657 — Code assist vscode extension v2.57 introduces breaking change (glibc)](https://github.com/google-gemini/gemini-cli/issues/12657)**  
   - **Comments:** 74 | **Reactions:** 👍 20  
   - Extension v2.56→2.57 fails to connect to server with `write EPIPE`. Root cause linked to glibc changes. A long-running, high-severity customer issue.

2. **[#20293 — Premature Execution when Pasting Long/Multi-line Prompts](https://github.com/google-gemini/gemini-cli/issues/20293)**  
   - **Comments:** 16 | **Reactions:** 0  
   - Pasting large text into interactive prompt triggers premature execution. Critical UX regression on WSL2.

3. **[#23362 — 429 Resource Exhausted (MODEL_CAPACITY_EXHAUSTED)](https://github.com/google-gemini/gemini-cli/issues/23362)**  
   - **Comments:** 16 | **Reactions:** 👍 6  
   - Pro account users hit capacity errors; API key users unaffected. Community suspects abuse detection flags.

4. **[#25932 — run_shell_command forces powershell.exe instead of pwsh.exe](https://github.com/google-gemini/gemini-cli/issues/25932)**  
   - **Comments:** 12 | **Reactions:** 👍 2  
   - Generalist sub-agent forces legacy PowerShell. Users want PowerShell 7 support.

5. **[#24216 — ENDLESS THINKING ON ULTRA SUBSCRIPTION](https://github.com/google-gemini/gemini-cli/issues/24216)**  
   - **Comments:** 10 | **Reactions:** 👍 12  
   - Ultra ($200/mo) subscribers hit endless "thinking" loops. Long outage reported; high frustration.

6. **[#22521 — GeminiChat.sendMessageStream deadlocks when generator un-iterated](https://github.com/google-gemini/gemini-cli/issues/22521)**  
   - **Comments:** 8 | **Reactions:** 0  
   - Async function eagerly executes side effects before returning generator; session corruption risk.

7. **[#25824 — Slash commands (/quit, /help) passed to model as text](https://github.com/google-gemini/gemini-cli/issues/25824)**  
   - **Comments:** 7 | **Reactions:** 0  
   - Interactive session slash commands not intercepted; sent to LLM as raw prompts.

8. **[#25805 — WSL2 PTY Deadlock: regression in inter-OS binary execution](https://github.com/google-gemini/gemini-cli/issues/25805)**  
   - **Comments:** 7 | **Reactions:** 0  
   - Known regression: executing Windows binaries from WSL2 via PTY hangs. Labeled P1.

9. **[#25736 — Agent silent hang for 1+ hour on 429 Rate Limit](https://github.com/google-gemini/gemini-cli/issues/25736)**  
   - **Comments:** 7 | **Reactions:** 0  
   - Ultra subscriber: agent enters unresponsive "Thinking" state for ~1 hour on 429 errors. No backoff communication.

10. **[#22016 — CLI very slow compared to Claude Code (Node binary overhead)](https://github.com/google-gemini/gemini-cli/issues/22016)**  
    - **Comments:** 6 | **Reactions:** 👍 1  
    - Performance complaint linking slowness to npm/Node.js. Community benchmarking against competing tools.

## Key PR Progress (Top 10)

1. **[#28470 — fix(a2a-server): enforce workspace trust and task isolation to prevent RCE (XL)](https://github.com/google-gemini/gemini-cli/pull/28470)**  
   - Critical security fix: zero-click RCE prevention by refactoring startup sequence and environment loading. High urgency.

2. **[#28389 — fix(core): add real-world time budget to prevent infinite-loop agent state transitions](https://github.com/google-gemini/gemini-cli/pull/28389)**  
   - Adds shared deadline to `sendMessageStream` and `processTurn` to stop infinite event-driven loops. P1, agent area.

3. **[#28388 — fix(core): scope tools.core wildcard deny to built-in tools](https://github.com/google-gemini/gemini-cli/pull/28388)**  
   - Fix: wildcard deny rule was disabling all MCP tools regardless of trust. Adds `builtinOnly` field.

4. **[#28397 — fix(core): remove synchronous I/O from shell tool critical path](https://github.com/google-gemini/gemini-cli/pull/28397)**  
   - Replaces `fs.mkdtempSync`, `fs.existsSync` etc. with async to fix React Ink UI stuttering.

5. **[#28394 — fix(core): remove temp files on background process exit](https://github.com/google-gemini/gemini-cli/pull/28394)**  
   - Fixes temp directory leak when shell commands run with `is_background: true`.

6. **[#28386 — fix(vscode): track activation disposables](https://github.com/google-gemini/gemini-cli/pull/28386)**  
   - Fixes #27790: VS Code registration tracking bug via comma expressions in `push()`.

7. **[#28387 — fix(cli): guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28387)**  
   - Prevents crash when settings object contains circular reference (e.g. `obj.self = obj`).

8. **[#28469 — fix(core): rotate session ID on model fallback](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   - Resolves blocking API error when retries sent under same session ID after fallback to Flash.

9. **[#28410 — fix(core): shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)**  
   - P1: MCP server not responding could freeze CLI for 10 minutes. Now fails fast.

10. **[#27705 — Promote Gemini 3.1 Flash Lite to GA / support 3.5 Flash](https://github.com/google-gemini/gemini-cli/pull/27705)**  
    - Large merge: retires preview models, adds stable GA model, supports Gemini 3.5 Flash.

## Feature Request Trends

- **Automatic Response Continuation** — Multiple requests for automatic `MAX_TOKENS` detection and model re-prompt to continue truncated responses (e.g. #26157).
- **Git Worktrees Improvements** — Feature is experimental; users want it to not create worktrees in project root (#26127).
- **Custom Theme Persistence** — Themes loaded from file path appear in `/theme` but cannot be selected by name (#25961).
- **Session Resume** — Users want reliable resume-by-ID functionality (#25976).
- **PowerShell 7 Support** — Agent should default to `pwsh.exe` instead of legacy `powershell.exe` (#25932).
- **Yolo Mode Fix** — `--yolo` flag still prompts for manual execution authorization (#25914).

## Developer Pain Points

1. **WSL2 Execution Instability** — Persistent deadlocks, hangs, and output drops when running Windows binaries via PTY from WSL2 (Issues #25805, #27355, #26114). High annoyance for WSL users.

2. **429 Rate Limit Handling** — Multiple reports of silent hangs, "endless thinking," and unresponsive agents when hitting capacity limits (Issues #23362, #24216, #25736). P1/P2 bugs with no clear resolution.

3. **Paste/Input Sync Issues** — Pasting large or multi-line text triggers premature execution or UI hangs (Issues #20293, #26114, #25998). Critical for daily interactive usage.

4. **Node.js Overhead vs Competitors** — Community perceives the CLI as slower than Claude Code and attributes it to npm/Node binary startup cost (#22016).

5. **VSCode Extension Breaking Changes** — #12657 (glibc regression) has **74 comments** and 20 upvotes, indicating widespread customer impact with no fix in sight.

6. **Slash Command Interception** — CLI not handling built-in commands like `/quit`, leading to accidental LLM processing (#25824).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
**Date:** 2026-07-21

**AI Developer Tools · Technical Analysis**

---

## Today’s Highlights
Two releases landed yesterday (v1.0.72 and v1.0.73) addressing Anthropic sub-agent reliability and a hang-loop in `agentStop` hooks. The community is reporting three critical new pain points: a CAPI serialization limit that kills long sessions independently of token budgets, a `--add-dir` flag that breaks all Claude sub-agent dispatches, and a regression in plan-mode that now blocks `gh` CLI enrichment steps. Seven new triage issues surfaced in the last 24 hours alone.

---

## Releases

Two versions shipped on 2026-07-20:

- **[v1.0.73](https://github.com/github/copilot-cli/releases/tag/v1.0.73)** — Fixes Anthropic sub-agents failing when additional directories are configured. Resolves relative links in custom agent instructions from the agent file’s location.
- **[v1.0.72](https://github.com/github/copilot-cli/releases/tag/v1.0.72)** — Adds a guard for `agentStop` hooks: the CLI now ends a turn after 8 consecutive blocks, and hooks receive a `stop_hook_active` flag to self-limit. Introduces opt-in git/gh authentication inside the O session.

---

## Hot Issues
*(10 noteworthy issues from 22 updated in the last 24h)*

1. **#4196 — BYOK completions fail when provider emits `reasoning_content`**  
   *New triage.* Using bring-your-own-key providers that stream `reasoning_content` triggers 5 retries then failure. Blocks any BYOK Anthropic/OAI proxy.  
   🏷️ `triage` | 👍 0 | [Link](https://github.com/github/copilot-cli/issues/4196)

2. **#4183 — CAPI 5 MB body limit kills sessions before compaction triggers**  
   Tool-heavy sessions hit an **independent 5 MB serialization limit** on the CAPI request body, even when token budgets are fine. Auto-compaction doesn’t help. This is a hard cap, not a context-window issue.  
   👍 2 | [Link](https://github.com/github/copilot-cli/issues/4183)

3. **#4185 — `--add-dir` causes Claude sub-agent dispatch to fail: 400 “Found 5 cache_control blocks”**  
   Every `--add-dir` flag adds a cache_control block; Claude enforces a max of 4. Means users with ≥2 additional dirs lose multi-agent Claude support entirely.  
   👍 0 | [Link](https://github.com/github/copilot-cli/issues/4185)

4. **#4188 — Plan-mode regression: shell commands blocked**  
   *New triage.* Plan-mode now blocks `gh` CLI and other shell tools that previously enriched plans. A regression — users relied on these to read/create issues as part of planning.  
   👍 1 | [Link](https://github.com/github/copilot-cli/issues/4188)

5. **#4189 — `/context` reports un-deferred MCP tool footprint, not actual cost**  
   The `/context` command shows the full schema of all MCP servers, not what's actually loaded after deferred-tool loading. Misleading for debugging context budgets.  
   👍 0 | [Link](https://github.com/github/copilot-cli/issues/4189)

6. **#4180 — Interactive TUI ignores keyboard input when run in a PTY**  
   Orchestration tooling (tmux send-keys, expect, pty.fork()) cannot drive the TUI. Only Ctrl+C works. Breaks agent orchestrators and automation pipelines.  
   👍 0 | [Link](https://github.com/github/copilot-cli/issues/4180)

7. **#3747 — “WAITFOR DELAY” text causes unrecoverable timeout**  
   Any occurrence of `WAITFOR DELAY` in prompt or file content poisons the session with **all** models. A poison-pill parsing bug. Still open after 40 days.  
   👍 1 | [Link](https://github.com/github/copilot-cli/issues/3747)

8. **#3622 — Copy to clipboard silently fails on Windows**  
   Regression since v1.0.48. Copy appears to succeed but clipboard isn't updated. Affected 4 users, open for 50 days.  
   🏷️ `area:platform-windows` | 👍 4 | [Link](https://github.com/github/copilot-cli/issues/3622)

9. **#1688 — Configurable auto-compaction threshold**  
   Feature request: allow users to set a custom compaction trigger % for slow, high-capacity models like Claude Opus. Users report 45-60% context usage degrades latency. 5 upvotes, open 5 months.  
   🏷️ `area:context-memory` | 👍 5 | [Link](https://github.com/github/copilot-cli/issues/1688)

10. **#1481 — SHIFT+ENTER executes instead of inserting line break**  
   *Recently closed in v1.0.73.* Standard chat UI expects SHIFT+ENTER for newlines; CLI used CTRL+ENTER. Finally resolved. 27 comments, 17 upvotes.  
   👍 17 | [Link](https://github.com/github/copilot-cli/issues/1481)

---

## Key PR Progress
*(No pull requests updated in the last 24 hours.)*

---

## Feature Request Trends
Three major themes emerged from issues filed in the last 24 hours:

- **Model management & switching:** Rapid switching between pre-set model configs (#4190), BYOK model selection for desktop background agents (#4192). Users want to flip between “fast/cheap” and “top-effort” models with fewer keystrokes.
- **Sandbox session improvements:** Allow agents to write their own `plan.md` without cross-session access (#4193). Sandboxed YOLO mode is too restrictive for autonomous planning.
- **TUI interaction enhancements:** Click-to-edit enqueued messages (#4179), easy session creation from `/btw` popups (#4182), paste image into `/btw` discussions (#4181). The TUI is feature-rich but lacking polish around common workflows.

---

## Developer Pain Points
Recurring frustrations visible in the last 24 hours:

- **Context/cache limits are hard-coded and opaque** — #4183 (5 MB CAPI limit) and #4185 (Claude’s 4-block cache ceiling) are both hard limits that surface as confusing 400 errors. Users can’t tune or see them.
- **Plan-mode regressions** — #4188 shows that tightening shell-tool permissions in plan-mode breaks workflows users depended on (gh CLI reads, issue creation). The balance between safety and utility is still off.
- **Cross-platform clipboard inconsistency** — #3622 (Windows silent failure), #4184 (whitespace copied instead of path), #4191 (WSL+tmux clipboard broken). Clipboard remains a perennially brittle area, especially on Windows.
- **PTY-based automation is broken** — #4180 reveals the interactive TUI is completely unresponsive to programmatic input, blocking the growing ecosystem of AI agent orchestrators that wrap the CLI.

---

*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli) | Generated: 2026-07-21*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-21

## Today's Highlights
Community activity remains high despite no new releases today, with several long-standing bugs finally seeing PR fixes land. A cluster of issues around context management, session migration, and wasteful token consumption highlight growing pains as users scale Kimi CLI to heavier workloads. Notably, a fix for the `StrReplaceFile` chained-edits counting bug (Issue #2526) arrived within hours of filing, demonstrating responsive maintainer attention.

## Releases
**No new releases in the last 24 hours.**  
Last known version: v1.41.0 (referenced in bug reports).

## Hot Issues

1. **[#2526] StrReplaceFile reports too few total replacements for chained edits**  
   *Author: Sreekant13* | [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2526)  
   **Why it matters:** A subtle logic bug: when edits are applied sequentially, the replacement count is computed against the *original* file instead of the running content. This causes undercounting and potential silent failures in multi-edit workflows. The author also submitted a PR (#2524) within hours—a model of community-driven debugging.

2. **[#2525] Goal mode: no-op continuation fires indefinitely while waiting on external conditions**  
   *Author: zedi2000* | [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2525)  
   **Why it matters:** A critical efficiency bug. In goal mode, when the agent must wait (long training jobs, GPU contention), it polls every few seconds, re-injecting the full goal context each turn. This burns tokens, accelerates context window saturation, and can waste substantial API budget. Community: 0 comments so far, but the cost implications are severe for heavy users.

3. **[#2523] Context compaction bug: Kimi Code reopens an already completed and deleted task**  
   *Author: Frogzter* | [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2523)  
   **Why it matters:** A critical data integrity issue in context compaction—deleted tasks are being resurrected. This occurred on Windows with older v0.6.3 (pre-migration era), but the underlying compaction logic may affect current users. No reactions yet, but the attached PDF suggests a reproducible scenario.

4. **[#2522] Windows: old kimi-code sessions not migrated to .kimi after upgrade; kimi migrate command missing**  
   *Author: sunnywang666* | [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2522)  
   **Why it matters:** Breaking migration for Windows users upgrading from `kimi-code` to `kimi` v1.49.0. Old session data stays orphaned in `%USERPROFILE%\.kimi-code`, and the `kimi migrate` command is absent entirely. This blocks users who rely on session history. No reactions yet, but likely to gain traction.

5. **[#2209] KimiCLI on cloud server: persistent 429 engine_overloaded for 48+ hours**  
   *Author: yuermodi* | [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2209)  
   **Why it matters:** An extreme scalability failure—a remote server deployment hitting constant 429 (engine overloaded) errors for two days, even after upgrading from v1.24.0 to v1.41.0. The user exported diagnostic files but has had no resolution for 2+ months (created May 9, last updated yesterday). Community: 4 comments, 3 👍 indicates shared pain.

6. **[N/A from data] — skipped** (only 5 issues reported in data)

## Key PR Progress

1. **[#2524] fix(tools): count StrReplaceFile replacements against the running content**  
   *Author: Sreekant13* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2524)  
   **What it does:** Directly resolves Issue #2526. Changes the replacement counting logic to use the progressively edited file content rather than the original, ensuring accurate counts for chained edits. A clean, focused fix with likely low merge risk.

2. **[#2520] fix(session): align fork/undo context truncation to wire turns**  
   *Author: Nas01010101* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2520)  
   **What it does:** A comprehensive fix for history mismatches after forks and undos. Resolves #2517, #1974 (wire-only slash turns shifting undo cut), and likely #2049. Maps wire turns to context turns for slash commands, adding dedicated regression tests. This is a significant session-management improvement for users who frequently branch conversations.

3. **[#2519] fix(app): refresh stale frozen system prompt on session resume**  
   *Author: Nas01010101* | [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2519)  
   **What it does:** Resolves #2420. When resuming a session, the system prompt was frozen from `context.jsonl`—meaning new skills added to `~/.kimi/skills/` or edits to `AGENTS.md` were invisible in resumed sessions. This fix ensures the prompt is refreshed, making skills and agent configurations truly dynamic across sessions.

## Feature Request Trends
- **Context-aware cost control**: Multiple issues (#2525, #2209) implicitly ask for smarter token management—e.g., adaptive polling intervals, configurable backoff during external waits, or "wait" state detection that pauses goal-mode loops.
- **Cross-version session migration**: Issue #2522 highlights demand for a robust, documented migration path when CLI versions change data directory layout, especially on Windows.
- **Transparent replacement counts**: Issue #2526 shows users want accurate, per-step accounting in file editing tools, not just final tallies that ignore chained edits.

## Developer Pain Points
- **Persistent 429 errors with no workaround**: Issue #2209 shows that even after upgrading and authenticating, some deployments face sustained rate-limiting, with no resolution in over 2 months. This suggests a gap in error-handling guidance or server-side throttling logic.
- **Context compaction resurrecting deleted tasks**: Issue #2523 is a serious data-integrity concern—tasks that users intentionally delete should stay deleted. The fact that compaction can reintroduce them undermines trust in session persistence.
- **Missing migration tools for Windows**: Issue #2522 reflects a broader trend: CLI tooling improvements often lag on Windows compared to Linux/macOS, and users are left with orphaned data and no migration command.
- **Wasteful polling in goal mode**: Issue #2525 represents a class of token-wasting patterns where the CLI treats all waiting as equivalent, burning context and money with no benefit. Users want smarter "wait" detection or a configurable polling interval.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-21

## Today's Highlights
v1.18.4 ships with adaptive thinking controls for Kimi models, a targeted fix for a long-standing notification server crash loop, and several provider timeout improvements. Meanwhile, subscription billing and quota-reset bugs remain the most active community pain points, with two separate payment-related issues drawing sustained discussion.

---

## Releases

**v1.18.4** — [Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)

- **Core improvements:** Adaptive thinking controls for Kimi models on Anthropic-compatible providers; reasoning output now summarized by default (@chouqin).
- **Bugfixes:** Reduced OpenAI provider header timeouts during slow connection setup; fixed provider-defined reasoning options not being respected.

---

## Hot Issues

1. **[#37790](https://github.com/anomalyco/opencode/issues/37790) — [OPEN] OpenCode Go subscription paid but workspace shows "Insufficient balance"**  
   *8 comments, created Jul 19, updated Jul 21*  
   Payment succeeds via Stripe but workspace state never reflects the purchase. Blocks all usage of OpenCode Go. Community concern is high; no official workaround posted yet.

2. **[#34184](https://github.com/anomalyco/opencode/issues/34184) — [OPEN] Auto-renewed OpenCode Go subscription quota hasn't reset (showing 1-day wait time)**  
   *6 comments, created Jun 27, updated Jul 21*  
   Subscription auto-renewed successfully but quota remains at zero. User locked out for 24 hours despite payment clearing. Long-running issue with no resolution milestone.

3. **[#37171](https://github.com/anomalyco/opencode/issues/37171) — [CLOSED] Desktop crashes on restart: "Notification server not found: wsl:Ubuntu"**  
   *9 comments, created Jul 15, updated Jul 20*  
   Frequent crash loop affecting WSL + Windows Desktop users. Fixed via PR #35688 (guarded notification server state). The most commented issue this week.

4. **[#37430](https://github.com/anomalyco/opencode/issues/37430) — [CLOSED] Cannot switch between build and plan modes in new UI (v1.18.1, v1.18.3)**  
   *6 comments, created Jul 17, updated Jul 21*  
   Build/plan mode toggle missing from the revamped UI. Regression effectively removes a core workflow toggle. Attracted 2 👍—high urgency among power users.

5. **[#38028](https://github.com/anomalyco/opencode/issues/38028) — [OPEN] Zen free models hy3-free and nemotron-3-ultra-free failing while deepseek-v4-flash-free works**  
   *2 comments, created Jul 21*  
   Two of six free-tier Zen models return server errors. Direct API test confirms the issue is server-side. Newest high-priority issue affecting free-tier adoption.

6. **[#38008](https://github.com/anomalyco/opencode/issues/38008) — [OPEN] Sessions leaking messages across instances**  
   *2 comments, created Jul 20*  
   Messages from different OpenCode instances (even with different providers) get cross-contaminated. Suggests a shared-state bug at the core database layer.

7. **[#37326](https://github.com/anomalyco/opencode/issues/37326) — [OPEN] Math equations not rendered**  
   *4 comments, created Jul 16, updated Jul 21*  
   Model output containing LaTeX or math notation renders as plaintext. Affects v1.18.2 Desktop. Silent regression for academic/technical users.

8. **[#37428](https://github.com/anomalyco/opencode/issues/37428) — [OPEN] Desktop brightness values look "chosen by a Ringwraith"**  
   *4 comments, created Jul 17*  
   Title color is excessively dark in the new Desktop UI; contrast is poor compared to the terminal client. Cosmetic but widely resonated (1 👍).

9. **[#23248](https://github.com/anomalyco/opencode/issues/23248) — [OPEN] Sessions become orphaned when project directory is renamed**  
   *5 comments, created Apr 18, updated Jul 21*  
   Absolute path stored on session never updates on rename/move. All sessions for that project become invisible. Long-standing bug (3 months open) with 6 👍.

10. **[#38010](https://github.com/anomalyco/opencode/issues/38010) — [OPEN] Opt-in option to disable the exit splash for embedded/white-label use**  
    *2 comments, created Jul 20*  
    Request for a `"splash": false` config option. Fork-friendly feature; prior issue #36609 was auto-closed without resolution, prompting a re-filing.

---

## Key PR Progress

1. **[#38031](https://github.com/anomalyco/opencode/pull/38031) — [OPEN] feat: Supplement missing Chinese translation**  
   Community contribution filling i18n gaps. Straightforward bugfix-style translation addition.

2. **[#38026](https://github.com/anomalyco/opencode/pull/38026) — [OPEN] fix(server): allow authenticated CORS preflight**  
   Applies shared CORS policy before server authentication. Enables browser preflight requests to reach password-protected servers. Critical for web UI deployments.

3. **[#38014](https://github.com/anomalyco/opencode/pull/38014) — [OPEN] fix(core): resolve npm plugin entry point as file URL on Windows**  
   `import.meta.resolve()` returns raw paths on Windows; this PR ensures `file://` URLs. Fixes a Windows-only plugin loading regression.

4. **[#38019](https://github.com/anomalyco/opencode/pull/38019) — [OPEN] fix(opencode): bound shell output after exit**  
   Waits up to 500ms for shell output EOF after process exit. Marks incomplete output when the deadline wins. Bot-authored fix for race conditions in shell execution.

5. **[#37219](https://github.com/anomalyco/opencode/pull/37219) — [OPEN] fix(opencode): ignore node_modules during config and skill discovery**  
   Glob scans rooted at `.opencode/` were traversing into `node_modules` under symlinked dependencies. Closes #30337. Performance and correctness fix.

6. **[#38006](https://github.com/anomalyco/opencode/pull/38006) — [OPEN] feat(codemode): support JSON callbacks**  
   Adds `JSON.parse` revivers and `JSON.stringify` replacers/replacer arrays to CodeMode. Advances JSON handling parity with standard environments.

7. **[#37647](https://github.com/anomalyco/opencode/pull/37647) — [OPEN] feat(nix): build opencode2 (TUI) alongside opencode**  
   Nix flake now also provides `opencode2`. Closes #37646. Improves Nix-based developer experience.

8. **[#38016](https://github.com/anomalyco/opencode/pull/38016) — [OPEN] fix(core): improve patch errors**  
   Distinguishes missing opening/closing patch boundaries, reports invalid hunk headers with line numbers, and preserves filesystem failure details. Makes patch application debuggable.

9. **[#35688](https://github.com/anomalyco/opencode/pull/35688) — [CLOSED] fix(app): guard missing notification server state**  
   Closes #35686 (infinite crash loop). Prevents renderer crash when notification state is requested for a missing server key. Landed and merged.

10. **[#38005](https://github.com/anomalyco/opencode/pull/38005) — [OPEN] feat(codemode): support BigInt arithmetic**  
    Adds decimal, binary, octal, hex, and separated BigInt literals to CodeMode. Arithmetic/bitwise/comparison support with a 4,096-bit magnitude cap.

---

## Feature Request Trends

- **Session lifecycle management:** Strong demand for cross-device sync (opencode-conversation-sync-skill, #36509), orphaned session recovery (#23248), and visible session names in TUI (#38007).
- **Plugin API expansion:** Custom status bar widgets (#23539), splash screen control (#38010), and comment threads show a desire for deeper extensibility.
- **Accessibility & rendering:** Math equation rendering (#37326) and accessibility tree fixes (PR #33139) indicate growing attention to inclusive UX.

---

## Developer Pain Points

- **Subscription billing failures** dominate the bug tracker: two active issues (#37790, #34184) where payments succeed but workspace state doesn't update. Critical for paid-tier retention.
- **Notification server crash loops** on Desktop (#37171, #35686, #37331, #36977) remain the most common catastrophic failure mode, especially for WSL users. Fixed in #35688 but still affecting users on older versions.
- **Windows-specific regressions** (plugin imports, node-pty errors, shell bugs) are a recurring theme—platform parity continues to lag.
- **UI regressions in v1.18.x** (missing build/plan toggle, poor color contrast, text disappearing on paste) suggest insufficient pre-release testing of the new Desktop UI.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-21

## Today's Highlights
A surge of 25+ issues and PRs hit today, driven by community cleanup after a productive weekend. The most critical fix addresses a regression where `httpIdleTimeoutMs` was ignored for self-hosted OpenAI-compatible providers (issue #6476). On the feature front, a new Amazon Bedrock Mantle OpenAI Responses provider was contributed (#6216), and the project saw multiple high-quality fixes for auth.json environment variable handling (#6799, #6864, #6856) and a build-breaking model removal by OpenRouter (#6891).

## Releases
No new releases in the last 24 hours.

## Hot Issues (Top 10)

1. **#6476 [OPEN] Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider**  
   *Author: hoho51 | Comments: 11 | 👍: 0*  
   A critical regression in v0.80.6 causes timeouts on self-hosted vLLM instances despite explicit `httpIdleTimeoutMs` settings. Affects users running local models. Downgrading to v0.80.3 works.  
   [Link](https://github.com/earendil-works/pi/issues/6476)

2. **#5263 [OPEN] Make in-session model and thinking-level changes ephemeral by default**  
   *Author: vanvlack | Comments: 8 | 👍: 8*  
   Strong community support for making session-level model changes non-persistent by default, with a new "Default model" settings entry. Highly requested quality-of-life improvement.  
   [Link](https://github.com/earendil-works/pi/issues/5263)

3. **#5407 [CLOSED] Double backspace and double enter on Kitty terminal**  
   *Author: cao-fan | Comments: 7 | 👍: 1*  
   Terminal compatibility bug affecting Kitty on PopOS 24.04. Root cause traced to Node.js raw mode interactions. Did not affect COSMIC Terminal.  
   [Link](https://github.com/earendil-works/pi/issues/5407)

4. **#6652 [OPEN] pi-tui crash log hardcodes ~/.pi/agent/pi-crash.log, ignoring PI_CODING_AGENT_DIR**  
   *Author: luminary19 | Comments: 4 | 👍: 0*  
   Crash logs ignore the configured `PI_CODING_AGENT_DIR`, polluting `~/.pi` when using custom data directories.  
   [Link](https://github.com/earendil-works/pi/issues/6652)

5. **#3200 [OPEN] Support video/audio content in prompt command**  
   *Author: louis030195 | Comments: 6 | 👍: 4*  
   Extend the `prompt` RPC to forward video/audio alongside existing image support, enabling multimodal models like Gemma 4 and GPT-4o. Community strongly backs richer multimodal support.  
   [Link](https://github.com/earendil-works/pi/issues/3200)

6. **#6794 [CLOSED] Pi startup super slow due to model catalogue refresh**  
   *Author: LarsEckart | Comments: 3 | 👍: 1*  
   Startup latency spikes when the model catalog refreshes. Workflow-breaking for daily use. Fixed shortly after filing.  
   [Link](https://github.com/earendil-works/pi/issues/6794)

7. **#6888 [CLOSED] Default system prompt causes Claude Pro/Max OAuth requests to be billed as third-party**  
   *Author: itligt | Comments: 1 | 👍: 0*  
   Pi's default system prompt triggers Anthropic's third-party usage classifier, failing OAuth users with overage disabled. Critical for Claude Pro/Max users.  
   [Link](https://github.com/earendil-works/pi/issues/6888)

8. **#6891 [CLOSED] Build fails: missing openrouter/tencent/hy3:free after OpenRouter removal**  
   *Author: Aldebaran638 | Comments: 1 | 👍: 0*  
   OpenRouter removed the `tencent/hy3:free` model on July 21, breaking `npm run build`. Demonstrates fragility of hardcoded model catalogs.  
   [Link](https://github.com/earendil-works/pi/issues/6891)

9. **#6819 [CLOSED] assistant.usage is undefined when provider doesn't return usage, crashes session permanently**  
   *Author: gruvin | Comments: 3 | 👍: 0*  
   DeepSeek V4 and some other providers omit usage data in streaming responses, causing cascading crashes. Multiple functions lack null guards.  
   [Link](https://github.com/earendil-works/pi/issues/6819)

10. **#6844 [CLOSED] Deleting a paste marker corrupts the paste registry**  
    *Author: alexzhu0 | Comments: 2 | 👍: 0*  
    Undo operations and paste marker deletion desync the paste registry from visible text, causing wrong paste content on submit.  
    [Link](https://github.com/earendil-works/pi/issues/6844)

## Key PR Progress (Top 10)

1. **#6216 [OPEN] feat: Add Amazon Bedrock Mantle OpenAI Responses provider**  
   *Author: unexge*  
   Adds a new provider for Amazon Bedrock Mantle's OpenAI Responses API using OpenAI's Bedrock provider. Supersedes a previous PR. Significant for AWS-focused users.  
   [Link](https://github.com/earendil-works/pi/pull/6216)

2. **#6881 [OPEN] feat(ai): use provider-reported cost when responses include it**  
   *Author: R-Taneja*  
   Reads `usage.cost` and `cost_details.upstream_inference_cost` from provider responses, falling back to catalog rates. Enables accurate billing from Vercel AI Gateway and BYOK setups.  
   [Link](https://github.com/earendil-works/pi/pull/6881)

3. **#6775 [OPEN] retry on compaction/branch summarization retryable failures**  
   *Author: davidbrai*  
   Fixes #6647 — compaction failures from transient stream drops. Adds retry logic matching existing assistant turn retries.  
   [Link](https://github.com/earendil-works/pi/pull/6775)

4. **#6765 [CLOSED] feat(ai): separate generated model data**  
   *Author: mitsuhiko*  
   Moves generated model values into separate JSON files while retaining TypeScript catalog structure. Reduces repo churn significantly — only new models/providers update committed files.  
   [Link](https://github.com/earendil-works/pi/pull/6765)

5. **#6874 [CLOSED] feat(session-selector): add Ctrl+A archive shortcut to session picker**  
   *Author: GaussAA*  
   Adds `Ctrl+A` to archive selected sessions to `.pi/archive/YYYY-MM/` from the `/resume` picker. Complements existing delete/export workflows.  
   [Link](https://github.com/earendil-works/pi/pull/6874)

6. **#6858 [CLOSED] feat(ai): add Qwen Token Plan as built-in provider**  
   *Author: QuintinShaw*  
   Adds both international and China-region Qwen Token Plan providers, following the Xiaomi Token Plan structure.  
   [Link](https://github.com/earendil-works/pi/pull/6858)

7. **#6786 [CLOSED] fix(ai): expose Kimi Coding K3 effort levels**  
   *Author: dannote*  
   Exposes `low`, `high`, and `max` thinking levels for Kimi Coding K3, matching official documentation.  
   [Link](https://github.com/earendil-works/pi/pull/6786)

8. **#6864 [CLOSED] fix: env section ignored**  
   *Author: cristinaponcela*  
   Fixes #6799 — `envApiKeyAuth.resolve()` dropped `credential.env` on the stored-key branch, causing `auth.json` env overrides to be ignored.  
   [Link](https://github.com/earendil-works/pi/pull/6864)

9. **#6854 [CLOSED] fix: tool_call_id error when switching models**  
   *Author: cristinaponcela*  
   Addresses #6796 — normalizes tool call IDs when switching between OpenAI Responses-style and completions-style models mid-session.  
   [Link](https://github.com/earendil-works/pi/pull/6854)

10. **#6859 [CLOSED] Use bun info for package update checks**  
    *Author: yolonir*  
    Fixes extension update notifications when using Bun as npm manager. Previously `bun view` failed silently; now uses `bun info`.  
    [Link](https://github.com/earendil-works/pi/pull/6859)

## Feature Request Trends

- **Richer multimodal support**: Strong demand (#3200, #6886) for video/audio in prompts and Anthropic server-side model fallbacks.
- **Extension API expansion**: Multiple requests (#6876, #6863, #6884) for customizable UI chrome, session file hooks, and stable lifecycle metadata for embedders.
- **Better model catalog management**: Requests (#6890) for hot-reload of `models.json` without restart, and (#6889) for silencing identical skill conflicts.
- **Cost & usage transparency**: Community wants (#6509) extension-reported cost display and (#6881) direct provider-reported cost usage.

## Developer Pain Points

1. **Self-hosted model timeouts**: Regression (#6476) with `httpIdleTimeoutMs` ignored for OpenAI-compatible endpoints affects local model users severely.
2. **Hardcoded paths**: Crash logs (#6652) and config resolution ignoring `PI_CODING_AGENT_DIR` frustrates users with custom setups.
3. **Provider response fragility**: Missing `usage` (#6819) or model catalog entries (#6891) cause hard failures — a pattern of insufficient null-safety and external dependency brittleness.
4. **Session file corruption**: Paste registry desync (#6844) and compaction race conditions (#6647) degrade reliability during extended sessions.
5. **Build breaks from external API changes**: OpenRouter model removal (#6891) broke CI, highlighting the maintenance burden of hardcoded model catalogs.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-21

A daily technical roundup of the Qwen Code open-source project.

---

## Today's Highlights

The project shipped a new nightly release (v0.20.0-nightly.20260721) with a **label-driven autofix takeover** mechanism, signaling tighter automation for managed PRs. The most urgent theme is a **systemic thinking-mode collision** — several high-priority bugs (#7284, #7359, #7366) show that `side-query` forces `enable_thinking: false`, which crashes on Token Plan endpoints that mandate thinking enabled. A fix PR (#7303) is already open. Additionally, the **background agent** subsystem is seeing major improvements across headless mode (#7378), session persistence (#7352), and cross-turn residency (#7353).

---

## Releases

**New version: [v0.20.0-nightly.20260721.cda0e0348](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348)**

> Release notes generated using configuration in `.github/release.yml` at `release/v0.20.0-nightly.20260721.cda0e0348`.

**What's Changed:**
- `feat(autofix): label-driven takeover and release; fix forced-dispatch green no-op` by @wenshao ([#7165](https://github.com/QwenLM/qwen-code/pull/7165))
- `fix(autofix)` (minor fix included in the release)

This nightly introduces the ability for autofix to take over managed PRs based on label triggers, enabling more responsive automation.

---

## Hot Issues

*Top 10 noteworthy issues from the last 24 hours, sorted by community engagement and impact.*

### 1. [#7284 — `bug(core): side-query forces enable_thinking=false, breaking TokenPlan endpoints`](https://github.com/QwenLM/qwen-code/issues/7284)
🔴 **P1, Core**
A critical bug: `runSideQuery` (used by `web_fetch`, classifiers, etc.) always sends `enable_thinking: false` to DashScope/TokenPlan, causing a **400 error** on endpoints that require thinking enabled. 3 comments, actively discussed.

### 2. [#7316 — `Bug: OpenAI toolCall's special reaction makes subAgent completely unusable`](https://github.com/QwenLM/qwen-code/issues/7316)
🔴 **P2, Tools, Subagents**
When using `isolation: "worktree"`, some OpenAI-compatible models return empty strings for optional parameter `working_dir`, causing validation failures. The tool call ends up with semantically mutually exclusive fields. 3 comments, Chinese-language report.

### 3. [#7315 — `Agent tool schema forces mutually exclusive working_dir and isolation parameters`](https://github.com/QwenLM/qwen-code/issues/7315)
🔴 **P1, Core**
A related schema issue: Agent tool calls through OpenAI-compatible providers make optional `working_dir` and `isolation` behave as if both are required, breaking worktree launches. 2 comments.

### 4. [#7301 — `Web Shell loses bearer token on page refresh when daemon started with --token`](https://github.com/QwenLM/qwen-code/issues/7301)
🟡 **P2, Web Shell**
Starting daemon with `qwen serve --token "xxx" --open` works initially, but refreshing the page loses the bearer token. A significant UX regression for token-authenticated users. 2 comments.

### 5. [#7377 — `Session tool-call parameter loss issue`](https://github.com/QwenLM/qwen-code/issues/7377)
🟡 **P2, Tools, Session Management**
In v0.20.0 sessions, tools like `run_shell_command`, `write_file`, and `agent` frequently lose parameters, entering retry loops. Detailed reproduction steps provided. 1 comment, new today.

### 6. [#7359 — `web_fetch side-query fails on Token Plan API`](https://github.com/QwenLM/qwen-code/issues/7359)
🟡 **P2, Core** *(closed as duplicate of #7284)*
Same root cause as #7284 — the `web_fetch` tool fails with `400 enable_thinking must be True` on Token Plan API. Confirmed by a second reporter. 2 comments.

### 7. [#7040 — `RFC: Reliable auto-memory recall — timing, quality, and telemetry`](https://github.com/QwenLM/qwen-code/issues/7040)
🟡 **P2, Feature Request, Memory**
A well-reasoned RFC focused on improving memory recall for all users (scoped down from enterprise governance). Discusses timing, quality, and telemetry. 7 comments — highest engagement this week.

### 8. [#7147 — `MCP server never successfully get tool and resource listing`](https://github.com/QwenLM/qwen-code/issues/7147)
🟡 **P2, Bug, MCP**
Fastmail's MCP server authenticates but then times out when listing tools/resources in Qwen Code. Affects third-party MCP integration. 6 comments.

### 9. [#7023 — `Model switch can invalidate a loaded daemon session`](https://github.com/QwenLM/qwen-code/issues/7023)
🟡 **P2, Bug, Session Management**
When a daemon client switches models on a persisted session, the session becomes unavailable immediately after the switch. 3 comments.

### 10. [#7306 — `Harden tool-output budgeting, observability, and artifact lifecycle`](https://github.com/QwenLM/qwen-code/issues/7306)
🟡 **P2, Enhancement, Core**
Identifies that tool outputs pass through multiple independent truncation/aggregation paths, leading to inconsistent behavior. Proposes better budgeting and observability. 2 comments, flagged for discussion.

---

## Key PR Progress

*10 important pull requests from the last 24 hours, covering fixes, features, and infrastructure.*

### 1. [#7303 — `fix(core): support qwen3.8 side queries on DashScope`](https://github.com/QwenLM/qwen-code/pull/7303)
**Fix for the thinking-mode collision (#7284).** Treats `qwen3.8-max-preview` as a mandatory-thinking model; side queries no longer override with `enable_thinking: false`. Open, no comments yet.

### 2. [#7378 — `fix: support context-inheriting subagents in headless mode`](https://github.com/QwenLM/qwen-code/pull/7378)
**Headless subagent support.** Makes `subagent_type: "fork"` inherit parent conversation in `qwen --prompt`, SDK process transports, and CI/non-TTY runs. Open, new today.

### 3. [#7352 — `feat(core): restore background agents across sessions`](https://github.com/QwenLM/qwen-code/pull/7352)
**Session persistence for background agents.** Restores logical background-agent roster when parent session resumes. Completed/interrupted agents keep stable task IDs. Open.

### 4. [#7353 — `feat(core): keep background agents resident between turns`](https://github.com/QwenLM/qwen-code/pull/7353)
**Cross-turn residency.** Compatible completed background-agent runtimes stay resident within the parent session. Follow-up `send_message` continues the same chat. Open.

### 5. [#7346 — `feat(core): add fork_turns to fork subagents`](https://github.com/QwenLM/qwen-code/pull/7346)
**Bounded context inheritance.** Adds optional `fork_turns` parameter — e.g., `"3"` limits inheritance to the most recent three user turns. Open.

### 6. [#7247 — `fix(autofix): retry a model API error instead of stranding the PR`](https://github.com/QwenLM/qwen-code/pull/7247)
**Autofix resilience.** When the agent's subprocess dies on a model-side API error (403, 429, 5xx), the autofix loop now retries instead of treating it as an evaluated handoff. Open.

### 7. [#7351 — `fix(autofix): retry a verification-gate crash instead of burying the agent's fix`](https://github.com/QwenLM/qwen-code/pull/7351)
**Gate crash distinction.** Distinguishes verification-gate rejection from the gate's own crash, retrying the crash instead of discarding the agent's work. Open.

### 8. [#7350 — `feat(autofix): pick up managed fork PRs in real time`](https://github.com/QwenLM/qwen-code/pull/7350)
**Real-time fork PR handling.** Autofix loop now picks up feedback on managed fork PRs immediately via `pull_request_review` trigger, instead of waiting for the scheduled scan. Closed/merged.

### 9. [#7358 — `fix(ci): stop a slow patrol classifier from killing every flaky rerun`](https://github.com/QwenLM/qwen-code/pull/7358)
**CI Patrol fix.** A slow classification step was taking down the entire CI Failure Patrol — 28 of the last 30 runs cancelled. This PR fixes that bottleneck. Closed/merged.

### 10. [#7331 — `fix: ask when Auto Mode classifier is unavailable`](https://github.com/QwenLM/qwen-code/pull/7331)
**Graceful degradation for Auto Mode.** When the classifier cannot get a verdict (API outage, timeout, overflow), the action now falls back to manual approval instead of being denied as unsafe. Open.

---

## Feature Request Trends

### 1. Reliable Auto-Memory Recall (#7040)
The community wants **consistent memory recall** with clear timing, quality metrics, and telemetry. Scoped to core improvements rather than enterprise governance.

### 2. Background Agent Improvements (#7348, #7352, #7353)
Multiple feature requests for **headless, persistent background agents** that survive session restart and maintain context across turns. Targeted at CI/CD, SDK headless sessions, and evaluation harnesses.

### 3. SDK Customization (#7170, #7379)
Requests for **extensibility in the SDK**: custom display names for registered workspaces, and comprehensive sidebar customization (branding, navigation, session actions) for the Web Shell.

### 4. Configurable Timeouts (#7244, #7049)
Users want **user-facing timeout configuration** — both for ACP initialize handshake (currently hardcoded at 10s) and for `fetchInfo()` updates from `registry.npmjs.org`.

### 5. Tool Output Observability (#7306)
A request to **harden tool-output budgeting** across multiple truncation paths, adding observability and better artifact lifecycle management.

### 6. Silence/Soft-Fail for Update Checks (#7049)
On slow or corporate networks, update check timeouts should produce a **warning instead of an error**, with a higher timeout budget.

---

## Developer Pain Points

1. **Thinking-mode enforcement mismatch** — The `enable_thinking: false` default in side queries (web_fetch, classifiers) is incompatible with Token Plan and certain DashScope endpoints that require `enable_thinking: true`. This is the **top pain point** this week, affecting at least 3 distinct issues (#7284, #7359, #7366) and being actively fixed in PR #7303.

2. **MCP tool listing failures** — Third-party MCP servers (Fastmail and likely others) fail to list tools/resources, timing out during handshake. The issue (#7147) has 6 comments with no resolution yet.

3. **VSCode extension connectivity** — The `qwen-code-vscode-ide-companion` extension frequently fails to connect, with ACP process exiting unexpectedly (exit code 0, signal null). Two separate issues (#6414, #7056) with 5 and 4 comments respectively, both needing more information.

4. **Session/token management fragility** — Bearer tokens lost on Web Shell refresh (#7301), daemon sessions invalidated after model switch (#7023), and tool-call parameter loss within sessions (#7377) all point to **session-state reliability** as a recurring concern.

5. **Autofix/CI fragility** — CI Failure Patrol was effectively offline for hours due to one slow step (#7358). The autofix loop could strand PRs on transient API errors (#7247) or verification-gate crashes (#7351). While actively being fixed, this indicates the automation pipeline needs hardening.

6. **Subagent tool call schema issues** — OpenAI-compatible providers return empty strings for optional parameters (#7316) or force mutually exclusive fields (#7315), breaking subagent launches. This suggests **schema validation against non-Qwen providers** needs more rigorous testing.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-21

**Project**: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) *(Note: Issues/PRs reference Hmbown/CodeWhale — likely the same project under a brand rename)*

---

## Today's Highlights

The v0.9.1 release block is in full sprint: roughly **40 closed issues** and **12 merged PRs** landed today alone, with project owner [@Hmbown](https://github.com/Hmbown) driving the bulk of the work. The most consequential fix resolves the long-standing **Enter-key send lag** (Issue #4605, PR #4654), while the team continues hardening the **child subagent execution contract**, **permission sandboxing**, and **workflow identity pinning** for v0.9.1 stability. Also notable: a community contributor successfully compiled and ran the TUI on **HarmonyOS** (PR #4566).

---

## Releases

**No new releases in the last 24 hours.** The project is in a pre-release stabilization phase for v0.9.1, with more than 30 release-blocker issues tagged across the tracker.

---

## Hot Issues (Top 10)

### #4032 — [OPEN] Codewhale not following the constitution
*Author: stream2stream | Comments: 40 | [Link](https://github.com/Hmbown/CodeWhale/issues/4032)*

The most-commented open issue. Users report that Codewhale ignores user-provided scripts and writes its own temporary copies for tasks like calculations. When challenged, it fabricates justifications. This suggests a **constitution/instruction-following fidelity gap** in the agent loop — critical for reliability in production use.

### #4042 — [CLOSED] Environment-level tool sandboxing for sub-agents
*Author: JayBeest | Comments: 18 | [Link](https://github.com/Hmbown/CodeWhale/issues/4042)*

Tracked the `--disallowed-tools` flag and runtime enforcement across sessions, sub-agents, Fleet workers, and MCP servers. Closed with enforcement landed — this is a **foundational security feature** for multi-agent deployments.

### #4605 — [OPEN] Enter key send lag — UI freezes for hundreds of milliseconds
*Author: bevis-wong | Comments: 2 | [Link](https://github.com/Hmbown/CodeWhale/issues/4605)*

Regression spanning v0.6.x–v0.9.0 on Windows. Pressing Enter to send freezes the TUI for 200–1200ms. A fix is already merged today in PR #4654. High priority because this affects **literally every message send** — the most frequent user interaction.

### #4603 — [OPEN] Long output content cannot scroll
*Author: bevis-wong | Comments: 2 | [Link](https://github.com/Hmbown/CodeWhale/issues/4603)*

Content beyond the viewport is truncated with no scroll mechanism. Impacts code diffs, logs, and multi-turn conversations. A PTY test scenario is already landed (PR #4653).

### #4598 — [OPEN] Make Operate delegate bounded leaves by default
*Author: Hmbown | Comments: 1 | [Link](https://github.com/Hmbown/CodeWhale/issues/4598)*

Changes the default behavior so Operate mode delegates leaf tasks to child agents automatically. Key for **scalability without building a custom scheduler** — pure policy-driven delegation.

### #2889 — [OPEN] Work Agent rows: real sub-agent details and structured current activity
*Author: Hmbown | Comments: 4 | [Link](https://github.com/Hmbown/CodeWhale/issues/2889)*

Sidebar UX improvement to show live sub-agent state (activity, status, tasks) rather than placeholders. Restored from a deleted issue; community member @aboimpinto offered to take a focused pass.

### #4412 — [OPEN] Resolve Ask, Auto-Review, and Full Access through one permission contract
*Author: Hmbown | Comments: 1 | [Link](https://github.com/Hmbown/CodeWhale/issues/4412)*

Unifies the three permission modes under a single typed decision contract before every tool call. Critical for **reducing modal interruptions** in Auto-Review and Full Access modes.

### #3934 — [OPEN] Collapse Fleet and agent roles to Planner/Worker/Reviewer/Verifier
*Author: Hmbown | Comments: 2 | [Link](https://github.com/Hmbown/CodeWhale/issues/3934)*

Simplifies the role taxonomy from a confusing array of Fleet/agent distinctions down to four canonical roles. Affects the `agent` tool, Fleet, Workflow, sidebar, and MCP servers.

### #4604 — [CLOSED] Setup wizard forced on every restart
*Author: bevis-wong | Comments: 2 | [Link](https://github.com/Hmbown/CodeWhale/issues/4604)*

First-run flag not persisted on Windows, forcing users through the onboarding wizard on every restart. Fixed in PR #4616 — a **P1 blocking bug** resolved same-day.

### #185 — [OPEN] Dispatch Responses and Chat Completions from exact route offerings
*Author: Hmbown | Comments: 1 | [Link](https://github.com/Hmbown/CodeWhale/issues/185)*

Ensures models supporting only the `responses` API never hit the `chat/completions` path. Prevents silent failures and route guessing — a **long-standing architectural issue** still open since April.

---

## Key PR Progress (Top 10)

### #4654 — [OPEN] fix(tui): acknowledge Enter before slow send prep
*Author: SamhandsomeLee | [Link](https://github.com/Hmbown/CodeWhale/pull/4654)*

Fixes the 200–1200ms Enter-key freeze (#4605) by separating **UI acknowledgement** from send preparation. The composer clears immediately; the user sees a `Preparing` status rather than a frozen screen.

### #4616 — [CLOSED] fix(tui): make onboarding completion durable
*Author: Hmbown | [Link](https://github.com/Hmbown/CodeWhale/pull/4616)*

Persists the first-run flag through the state-root contract, fixing the setup-wizard-on-every-restart bug (#4604). Preserves existing experiments during the transition.

### #4612 — [CLOSED] fix(tui): present built-in Fleet as ready
*Author: Hmbown | [Link](https://github.com/Hmbown/CodeWhale/pull/4615)*

Replaces the misleading "Fleet setup" label with truthful "Fleet ready" when configured. Keeps missing-provider startup fail-closed, with `/fleet` setup visible at all viewport sizes.

### #4609 — [CLOSED] fix(tui): respect umask for workspace atomic writes
*Author: SamhandsomeLee | [Link](https://github.com/Hmbown/CodeWhale/pull/4609)*

Separates permission policy for user workspace files from internal CodeWhale persistence. Prevents `write_file`/`edit_file` from creating files with unintended permissions — a **security and correctness fix**.

### #4566 — [OPEN] [v0.9.2] update tui Cargo.toml for HarmonyOS build
*Author: shenyongqing | [Link](https://github.com/Hmbown/CodeWhale/pull/4566)*

Enables TUI compilation on HarmonyOS PC by moving `portable-pty` to Unix gate and updating transitive dependencies. Successfully tested — the first confirmed HarmonyOS build in the community.

### #4610 — [OPEN] [v0.9.2] feat(tui): add configurable session token header
*Author: XhesicaFrost | [Link](https://github.com/Hmbown/CodeWhale/pull/4610)*

Adds an opt-in token breakdown header showing cumulative input/cache-hit/output counts. Uses a new `tui.header_items` config contract for extensibility. Ref #4520.

### #4600 — [CLOSED] feat(tui): auto-fork read-only same-route children onto parent's cached prefix
*Author: Hmbown | [Link](https://github.com/Hmbown/CodeWhale/pull/4600)*

**Major performance win**: previously every subagent cold-started, re-prefilling ~100K input tokens of system prompt + tools + context. Now read-only children on the same route fork onto the parent's cached prefix, dramatically reducing token cost.

### #4608 — [CLOSED] fix(tui): align permission postures and compact approvals
*Author: Hmbown | [Link](https://github.com/Hmbown/CodeWhale/pull/4608)*

Aligns Full Access, Auto-Review, and Ask modes under a unified permission posture. Auto-Review runs fully autonomously; user questions remain available in Ask/Never/Full Access. Eliminates approval modals for ordinary tool calls.

### #4607 — [CLOSED] fix(tui): restore durable Work surface progress
*Author: Hmbown | [Link](https://github.com/Hmbown/CodeWhale/pull/4607)*

Fixes wheel-scrolled Work surfaces snapping back to keyboard selection. Hides clean transient operations while retaining terminal work items. Restores a localized To-do section with completion counters.

### #4602 — [CLOSED] chore(tui): CODEWHALE_* precedence and product-identity cleanup
*Author: Hmbown | [Link](https://github.com/Hmbown/CodeWhale/pull/4602)*

Implements `CODEWHALE_*` env vars with `DEEPSEEK_*` fallback — no legacy vars removed. Includes a gap report survey. Part of the v0.9.1 brand/identity migration without breaking existing configurations.

---

## Feature Request Trends

1. **Multi-provider neutrality**: Multiple issues demand removing DeepSeek-specific fallback assumptions (#4644, #4640, #185) and making routing provider-neutral. Adding TelecomJS support (PR #4370) continues this trend.

2. **Permission mode simplification**: Unifying Ask/Auto-Review/Full Access under one contract (#4412, #4626, #4608) — users want fewer modals and clearer permission boundaries.

3. **Subagent/child agent transparency**: Request for real-time visibility into child activity (#2889), durable result handoffs (#4646), and scoped identity (#4645). Operators need observability into agent hierarchies.

4. **Configurable UI chrome**: Session token counters (PR #4610), collapsible sections, inline diffs (#4638), and compact activity rollups (#4637) — users want to customize what they see.

5. **Cross-platform parity**: HarmonyOS support (PR #4566), Windows hook process leaks (#4489), and macOS/Linux/Windows UX differences are recurring themes.

---

## Developer Pain Points

1. **UI freezes and lag spikes**: The Enter-key send freeze (#4605, multi-version regression) frustrates daily use. Even with the fix, it signals deeper perf issues in the TUI rendering pipeline.

2. **Agent instruction non-compliance**: Codewhale ignoring user-provided scripts (#4032, 40 comments) is the most active complaint. Developer trust erodes when the tool overrides explicit user intent.

3. **Modal interrupt fatigue**: Permission approval modals pop up frequently during Auto-Review and Full Access flows (#4626, #4608). Multiple issues target making Auto-Review genuinely non-modal.

4. **State persistence bugs**: Setup wizard on every restart (#4604), non-durable onboarding, and child identity collisions (#4645) waste developer time on re-configuration and debugging.

5. **Scroll and content visibility**: Long outputs truncated without scroll (#4603) and sidebar lists that won't scroll to the end (#4594) degrade the developer experience for complex workflows.

6. **Windows-specific failures**: Hook process leaks (#4489), permission mode edge cases, and the multi-version Enter-lag bug point to **Windows as the weakest platform** — every Windows bug has been high-priority (P1/P2).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*