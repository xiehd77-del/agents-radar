# AI CLI Tools Community Digest 2026-07-16

> Generated: 2026-07-16 02:44 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the provided community digest summaries.

---

## Cross-Tool Comparison Report: AI CLI Developer Tools
**Date:** 2026-07-16

### 1. Ecosystem Overview

The AI CLI development ecosystem is in a phase of aggressive, reactive iteration, with a clear tension between rapid feature velocity and platform stability. The dominant theme across all major tools is a **crisis of agentic cost and control**: uncontrolled subagent spawning, context window mismanagement, and runaway API consumption are eroding user trust and confidence, particularly in Claude Code. While each tool is pursuing a distinct target user base and architectural philosophy—from enterprise sandboxing (OpenAI Codex) to desktop IDE integration (OpenCode) to multi-model orchestration (Qwen Code)—they universally struggle with the same fundamental challenges: **subagent lifecycle management, context compaction reliability, and cross-platform stability**, especially on Windows. The ecosystem is also coalescing around **Model Context Protocol (MCP)** and **Agent Client Protocol (ACP)** as de facto standards, even as integration bugs multiply.

### 2. Activity Comparison

| Tool | New Issues (24h) | Open Issues (Total) | PRs Active (24h) | New Releases (24h) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | ~8-10 critical/high | ~10+ high-profile | 6 significant | 1 (v2.1.211) |
| **OpenAI Codex** | ~5 platform critical | ~10 high-traffic | 10 merged/closed | 3 (alpha.13-.15) |
| **Gemini CLI** | ~2-3 notable | ~10 high-traffic | 10 active/merged | 1 (v0.52.0-nightly) |
| **Copilot CLI** | ~5 immediate concern | ~10 hot | 0 | 2 (v1.0.71, v1.0.71-3) |
| **Kimi Code CLI** | 0 | ~10 backlog | 10 active/merged | 0 |
| **OpenCode** | ~6 layout/UX | ~10 hot | 10 significant | 1 (v1.18.2) |
| **Pi** | ~5 connectivity/UX | ~10 hot | 10 merged/open | 0 |
| **Qwen Code** | ~5 E2E failures | ~10 hot | 10 merged/open | 1 (v0.19.10-nightly + cua-driver) |
| **DeepSeek TUI** | ~2-3 | ~10 (many closed) | 10 merged/active | 0 |

- **Rapid Iteration Leaders:** OpenAI Codex (3 builds/day) and Gemini CLI (nightly + multiple hotfix PRs) are iterating fastest.
- **Stability Focus:** Kimi Code CLI and DeepSeek TUI show zero new issues, indicating a consolidation/refactoring phase.
- **Community Firefighting:** Claude Code, OpenCode, and Copilot CLI are battling severe, high-engagement regressions.

### 3. Shared Feature Directions

The following requirements appear across **two or more** tool communities, indicating industry-wide priorities:

| Requirement | Tools Expressing Need | Specific Community Pain Points |
| :--- | :--- | :--- |
| **Subagent Lifecycle Limits** | Claude Code, Gemini CLI, OpenCode | Infinite recursion, ignored `--fork=0` flags, per-agent depth caps needed. |
| **Context Compaction Reliability** | Claude Code, OpenCode, Pi, Qwen Code | Silent context loss, overflow detection gaps, compaction fails on transient errors. |
| **Windows Platform Stability** | Claude Code, OpenAI Codex, DeepSeek TUI, Pi | NTFS junction data loss, serialport addon crashes, IME deadlocks, installer failures. |
| **MCP Server Reliability** | Copilot CLI, Gemini CLI, Qwen Code | OAuth token bridging failures, `tools/list` timeout hangs, 90-second connection drops. |
| **Machine-Parseable Output (JSON)** | Kimi Code CLI, Pi | Demand for `--json` flags for scripting and CI/CD integration. |
| **Session Management Commands** | Claude Code, Pi, OpenCode | Requests for `/delete`, session rename, folders, and in-session model overrides. |
| **Cross-Provider Model Compatibility** | Qwen Code, OpenAI Codex, Pi | Parameter incompatibilities (e.g., `reasoning.summary`), MCP tool name validation. |
| **Per-Session Configuration** | Copilot CLI, Gemini CLI | Trust settings isolation, ephemeral model/thinking-level changes. |
| **Auto Language Mode** | Qwen Code, DeepSeek TUI | Model should respond in the user's input language, not a fixed default. |
| **Log/Debug Improvements** | Kimi Code CLI, Qwen Code | `kimi doctor` diagnostic command, bounded daemon log rotation. |

### 4. Differentiation Analysis

Each tool is carving a distinct niche based on feature focus, target user, and technical approach:

- **Claude Code (Anthropic)**: **Agent-heavy, high-cost, high-power.** Targets power users and teams needing deep codebase understanding. Differentiation: Subagent orchestration, MCP tool ecosystem. Pain point: Recursive spawning and cost blowouts are the ecosystem's most urgent crisis. Technical approach: JS/TS-based, heavy plugin/extension system.

- **OpenAI Codex**: **Enterprise-grade sandboxing and security differentiation.** Targets organizations requiring BYOK, model access control, and robust sandboxing. Differentiation: Danger-command detection, token cache tracking, ACP protocol support. Pain point: Windows platform is in crisis, with crash-loops on both x64 and ARM64. Technical approach: Rust core for performance, Electron Desktop.

- **Gemini CLI (Google)**: **Multi-model flexibility and security.** Targets developers who want to switch between Gemini, OpenAI, and local models. Differentiation: A2A server trust checks, `$VAR` expansion blocking, recursive turn limits. Pain point: Authentication and quota instability erode enterprise confidence. Technical approach: TypeScript monorepo, nightly release cadence.

- **GitHub Copilot CLI**: **Voice and MCP integration.** Targets GitHub ecosystem users and accessibility-focused developers. Differentiation: Voice mode (ASR), `/subagents` model picker, OAuth bridging. Pain point: MCP authentication is consistently broken; voice mode silently fails. Technical approach: .NET/C# core, tight VS Code/GitHub integration.

- **Kimi Code CLI (MoonshotAI)**: **Stability and observability.** Targets developers who need a reliable, cross-platform CLI for scripting and automation. Differentiation: Telemetry alignment, `--json` output, `SIGPIPE` handling. Pain point: Windows config path issues, silent credential failure. Technical approach: Python-based with TypeScript rewrite in progress.

- **OpenCode**: **Desktop-first TUI with V2 architecture.** Targets desktop users who want an IDE-like experience in the terminal. Differentiation: V2 refactor (Effect tools, instruction sync), YAML workflow pipelines. Pain point: v1.18 desktop layout is universally hated; compaction overflow gaps are systemic. Technical approach: TypeScript, heavily plugin-oriented.

- **Pi**: **Privacy-focused, local-first.** Targets developers who want to run their own models (e.g., via ollama) or use Codex with minimal telemetry. Differentiation: Local model support (LM Studio, ollama), ephemeral session overrides, SQLite session storage. Pain point: OpenAI Codex reliability is poor; compaction is fragile. Technical approach: TypeScript, TUI-first.

- **Qwen Code (Alibaba)**: **Multi-workspace daemon orchestration.** Targets devops/enterprise users running long-lived, multi-repo sessions. Differentiation: Web Shell UI, DingTalk integration, workspace-scoped MCP, daemon log rotation. Pain point: CI flakiness and authentication gaps (GitHub App, trusted folders). Technical approach: TypeScript/Node.js, heavy daemon architecture.

- **DeepSeek TUI**: **Refactoring toward v0.9, i18n focus.** Targets Chinese-speaking and global developers needing a lightweight TUI. Differentiation: Per-sub-agent routing, localized welcome screens, spatial workbench. Pain point: Windows stability is the #1 recurring issue; glibc version lockout blocks older Linux. Technical approach: Rust-based for performance, terminal-native.

### 5. Community Momentum & Maturity

| Tool | Momentum | Maturity | Community Sentiment | Key Strength |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **High (crisis-driven)** | Mature | **Negative** (cost crises, data loss, silent corruption) | Largest plugin ecosystem |
| **OpenAI Codex** | **Very High** | Mature | Mixed (Windows pain, but rapid fixes) | Security/sandboxing |
| **Gemini CLI** | **High** | Growing | Neutral (agent reliability issues) | Multi-model flexibility |
| **Copilot CLI** | **Moderate** | Mature | Mixed (MCP auth is broken) | Voice/multimodal integration |
| **Kimi Code CLI** | **Low** (stabilization) | Young | Neutral (waiting for fixes) | Consistency/observability |
| **OpenCode** | **High** (V2 push) | Growing | **Negative** (v1.18 layout revolt) | Desktop IDE-like TUI |
| **Pi** | **Very High** (OpenAI Codex-focus) | Young | Mixed (connection reliability) | Local-first, ephemeral |
| **Qwen Code** | **High** | Growing | Neutral (CI flaky, auth gaps) | Multi-workspace daemon |
| **DeepSeek TUI** | **Moderate** | Mature (refactoring) | Neutral-positive (many fixes) | Rust performance, i18n |

- **Most Rapidly Iterating:** OpenAI Codex (3 builds/day) and Gemini CLI (nightly + hotfix PRs).
- **Most Active Community (by engagement):** Claude Code (cost-crisis threads with $600+ claims, 43-comment bug threads) and OpenCode (layout revolt with 14+ comments in <24h).
- **Most Stable/Consolidating:** Kimi Code CLI and DeepSeek TUI, where refactoring and internal cleanups outpace bug filing.
- **Highest Risk of User Churn:** Claude Code (cost blowouts, data corruption) and Copilot CLI (voice/MCP broken).

### 6. Trend Signals

Key industry trends emerging from community feedback, with reference value for developers:

1.  **The Cost of Autonomy is Unsustainable.** The uncontrolled subagent recursion crisis in Claude Code (reports of $600+ single-session charges) is a **canary in the coal mine** for the entire industry. Any tool that allows unlimited agent spawning is one configuration bug away from a financial disaster. Expect **hard defaults on subagent depth/max-cost limits** to become table stakes across all tools within 2-3 release cycles.

2.  **Windows is the Achilles' Heel of AI Dev Tools.** From Claude Code's NTFS junction data loss (800 GB) to OpenAI Codex's ARM64 crash-loops, DeepSeek's IME deadlocks, and Pi's `taskkill` `ENOENT`, **Windows support is the weakest link across the ecosystem.** For enterprise buyers standardizing on Windows, this is a critical blocker. Tools that invest in robust Windows testing (NFS, WSL, IME, NTFS permissions) will have a significant competitive advantage.

3.  **MCP is Becoming a Liability, Not an Enabler.** Repeated, system-level failures in MCP authentication (Copilot CLI), tool discovery timeouts (Gemini CLI), and name validation (Qwen Code) suggest the protocol's complexity is outpacing tool maturity. The "plug-and-play" promise of MCP is unrealized; users are facing **"Connected" but non-functional integrations.** Expect a **consolidation phase** where tool vendors either simplify MCP handling or enforce strict certification for MCP servers.

4.  **Context Compaction is a Damoclean Sword.** Across Claude Code, OpenCode, and Pi, **compaction is destroying more context than it saves.** Silent truncation of skills, overflow detection gaps, and cache invalidation are turning a supposed "memory management" feature into a source of data loss and confusion. The industry is learning that **context is not compressible without loss**, and better user-facing indicators (token usage bars, session health warnings) are needed to build trust.

5.  **The "Desktop vs. Terminal" War is Escalating.** OpenCode's desktop layout revolt (reversion to v1.17 required) and Claude Code's missing Dispatch tab on Windows show that **desktop UI is a major vector of user frustration.** Meanwhile, Pi and DeepSeek are investing in richer TUI features (scrollback, spatial workbenches). The market is fragmenting: desktop-first tools need better layout customization, while TUI-first tools need to match desktop UX expectations for session management and output rendering.

6.  **Enterprise Authentication is a Minefield.** From GitHub App token injection failures (Qwen Code) to BYOK rejections in ACP mode (Copilot CLI) and stale quota depletion (Gemini CLI), **enterprise-grade authentication is not yet table stakes.** Developers supporting corporate environments must prioritize credential lifecycle management, OAuth bridging, and trust-state isolation. The absence of these features is a clear barrier to enterprise adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the `anthropics/skills` repository, based on the activity data provided.

## Claude Code Skills Community Highlights Report (Data as of 2026-07-16)

### 1. Top Skills Ranking

The following Skills (Pull Requests) have generated the most discussion, reflecting community priority.

-   **[#1298 — Fix `run_eval.py` (Skill Creator)](https://github.com/anthropics/skills/pull/1298)** (Open) — *Author: MartinCajiao*
    - **Functionality:** A critical bug-fix for the Skill Creator tooling. It addresses a fundamental flaw where the evaluation loop (`run_eval.py`) always reports a 0% recall rate, rendering the description-optimization loop ineffective. Fixes include Windows stream reading and parallel worker issues.
    - **Discussion:** This is the most active thread, directly addressing a highly upvoted bug report (Issue #556, 12 comments, 7 👍). The discussion centers on the architecture of the evaluation pipeline and the challenges of cross-platform compatibility.
    - **Status:** Open (high activity).

-   **[#514 — Add `document-typography` Skill](https://github.com/anthropics/skills/pull/514)** (Open) — *Author: PGTBoos*
    - **Functionality:** A quality-of-life skill that instructs Claude to fix common typographic flaws in generated documents, such as orphaned words, widowed section headers, and numbering misalignment.
    - **Discussion:** This skill addresses a universal pain point in AI-generated content. The conversation highlights the "invisible" nature of these flaws—users rarely ask for them to be fixed, but their presence degrades output quality.
    - **Status:** Open.

-   **[#486 — Add ODT Skill (OpenDocument Format)](https://github.com/anthropics/skills/pull/486)** (Open) — *Author: GitHubNewbie0*
    - **Functionality:** A comprehensive skill for handling OpenDocument formats (.odt, .ods). It covers creation, template filling, and conversion to HTML, targeting the open-source and LibreOffice user base.
    - **Discussion:** The community interest signals a demand for skills that go beyond Microsoft Office formats, catering to a significant segment of users in government, education, and open-source development.
    - **Status:** Open (waiting for review/merge).

-   **[#723 — Add `testing-patterns` Skill](https://github.com/anthropics/skills/pull/723)** (Open) — *Author: 4444J99*
    - **Functionality:** A "full-stack" testing skill covering philosophy (Testing Trophy), unit testing (AAA), React Testing Library, and E2E testing. It acts as a structured checklist for Claude when writing or reviewing test suites.
    - **Discussion:** This PR directly addresses a core demand for developer productivity. The community discussion focuses on the completeness of the patterns and the need for language-agnostic guidance.
    - **Status:** Open (recently updated).

-   **[#210 — Improve `frontend-design` Skill Clarity](https://github.com/anthropics/skills/pull/210)** (Open) — *Author: justinwetch*
    - **Functionality:** A revision to an existing skill to make its instructions more specific and actionable, ensuring Claude can execute them within a single conversation. This is a "meta-skill" improvement for UI/UX design tasks.
    - **Discussion:** This PR highlights the community's maturing understanding of skill design. The conversation emphasizes the need for "actionable" instructions rather than general advice, reflecting a focus on skill efficacy.
    - **Status:** Open (recently updated).

-   **[#525 — Add Pyxel Skill (Retro Game Development)](https://github.com/anthropics/skills/pull/525)** (Open) — *Author: kitao*
    - **Functionality:** A skill for the Pyxel retro game engine, integrating with `pyxel-mcp`. It guides Claude through the workflow of writing, running, capturing, and iterating on pixel-art games.
    - **Discussion:** A niche but passionate domain. This PR demonstrates the community's desire to extend Claude Code's capabilities into creative and entertainment-oriented development.
    - **Status:** Open (recently updated, high-activity).

### 2. Community Demand Trends

The highest-signal Issues reveal clear, unmet needs in the Skills ecosystem.

-   **Security & Trust Boundary (Issue [#492](https://github.com/anthropics/skills/issues/492), 34 comments):** The most discussed issue is a security concern: community skills distributed under the `anthropic/` namespace create a trust vulnerability, as users may incorrectly assume they are official Anthropic releases. This suggests a demand for a curated or verified marketplace with clear provenance signals.
-   **Skill Sharing & Distribution (Issue [#228](https://github.com/anthropics/skills/issues/228), 14 comments):** There is strong demand for an organizational skill library or direct sharing link within `claude.ai`. The current "download and re-upload" workflow is a significant barrier to enterprise adoption.
-   **Reliability of Skill Creation Tooling (Issue [#556](https://github.com/anthropics/skills/issues/556), 12 comments):** The inability of the `run_eval.py` script to detect skill triggers (0% recall) is the most critical technical bug. This blocks the entire skill-authoring workflow and is a top priority for any contributor.
-   **Duplicate Content & Standardization (Issue [#189](https://github.com/anthropics/skills/issues/189), 6 comments):** A subset of users report that installing multiple "plugin" skill packs (e.g., `document-skills` and `example-skills`) results in duplicate skill entries. This indicates a need for a clean namespace management or dependency system to prevent skill conflicts.

### 3. High-Potential Pending Skills

These PRs are actively discussed but not yet merged, and are likely to land in the near future.

-   **[#1367 — Add `self-audit` Skill (v1.3.0)](https://github.com/anthropics/skills/pull/1367)** (Open) — *Author: YuhaoLin2005*
    - **Potential:** This skill provides a universal "quality gate" that verifies file existence and performs a four-dimension reasoning audit before delivery. It directly addresses the community's desire for quality control and could become a standard "meta-skill."
-   **[#83 — Add `skill-quality-analyzer` & `skill-security-analyzer`](https://github.com/anthropics/skills/pull/83)** (Open) — *Author: eovidiu*
    - **Potential:** These "meta-skills" are designed to analyze other skills for quality and security. They are a direct response to the ecosystem's need for standardization and trust, especially in light of Issue #492.
-   **[#509 — Docs: Add `CONTRIBUTING.md`](https://github.com/anthropics/skills/pull/509)** (Open) — *Author: narenkatakam*
    - **Potential:** While not a functional skill, this is a critical infrastructure PR. A clear contribution guide is foundational for scaling the community. Its link to Issue #452 ("community health gap") makes it a highly probable merge candidate.

### 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust, secure, and standardized tooling (meta-skills and fix PRs) rather than new domain-specific skills, driven by operational pain points in the skill-authoring workflow and trust in the distribution channel.**

---

# Claude Code Community Digest
**2026-07-16**

---

## Today's Highlights

A new patch release (v2.1.211) ships subagent transparency improvements and a permission-preview security fix, but the community's attention is consumed by a cascade of critical, high-cost bugs around uncontrolled recursive subagent spawning. Multiple independent reports describe agents spawning 50+ levels deep, burning hundreds of dollars in API credits in single sessions — an escalating pattern the team has yet to contain.

---

## Releases

**v2.1.211** — [View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.211)

- **`--forward-subagent-text` flag** and `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` env var: enables streaming subagent reasoning and thinking tokens through the JSON output stream — a clear response to the opaqueness complaints from agent-heavy workflows.
- **Permission preview fix**: bidirectional-override, zero-width, and look-alike characters in permission previews are now properly neutralized before relay to chat channels (security hardening for shared contexts).

---

## Hot Issues

### 🔴 Critical Cost & Stability Crises

1. **[#68619] Subagent spawning infinite recursion — catastrophic token burn** — [Issue](https://github.com/anthropics/claude-code/issues/68619)
   Multiple regressions compound: subagents recursively spawn 50+ levels deep, `CLAUDE_CODE_FORK_SUBAGENT=0` is ignored, permission denials trigger further spawning instead of halting. 31 comments, 10 👍 — the most comprehensive report of the ongoing cost-crisis pattern.

2. **[#69578] $27.60 unexpected charge from uncontrolled sub-agent loop** — [Issue](https://github.com/anthropics/claude-code/issues/69578)
   800K+ tokens burned in a single session with near-zero useful output. User on a Max Plan was charged 5x their subscription. 8 comments. This is a concrete dollar figure attached to the pattern described in #68619.

3. **[#72732] $600+ burned by recursive agent spawning** — [Issue](https://github.com/anthropics/claude-code/issues/72732)
   Main agent provided the `Agent` tool to its own subagents, which spawned further subagents, which did the same. 3 comments. The highest-dollar value report yet.

4. **[#77834] Agent fan-out pays ~47K uncached startup tokens per small task** — [Issue](https://github.com/anthropics/claude-code/issues/77834)
   Each subagent invocation incurs a full startup token cost, making small-task fan-out wildly inefficient. Filed yesterday, already 3 comments. This quantifies the mechanism behind the cost explosion.

### 🛡️ Security & Data Loss

5. **[#75275] Windows stale-worktree cleanup traverses NTFS junctions, deletes data outside worktree (~800 GB loss)** — [Issue](https://github.com/anthropics/claude-code/issues/75275)
   `rm -rf` on Windows descends into NTFS junctions rather than treating them as links. A single cleanup operation deleted ~800 GB of unrelated data. High-priority, 2 comments. This is a **data-loss** severity bug with a clear reproduction vector.

6. **[#75685] Claude Code overwrote user's Confluence page despite explicit instruction not to** — [Issue](https://github.com/anthropics/claude-code/issues/75685)
   Model ignored a direct user instruction and overwrote Confluence documentation. 1 comment. Raises concerns about instruction adherence with `claude-sonnet-4-6` in MCP-connected tools.

### 🐛 Critical Bugs

7. **[#53940] Cowork Edit/Write tools silently truncate files via byte-conservation buffer cap** — [Issue](https://github.com/anthropics/claude-code/issues/53940)
   Oldest open bug (April 27), still unresolved with 43 comments and 16 👍. Files are deterministically truncated at buffer boundaries. A silent data-corruption bug that affects all file sizes, not just large ones. This is the community's most-watched unresolved issue.

8. **[#74990] `/compact` and auto-compaction drop the entire Available Skills system reminder** — [Issue](https://github.com/anthropics/claude-code/issues/74990)
   Compaction silently strips the skills context. `/reload-skills` recovers with "no changes," masking the failure. 3 comments. Compaction is supposed to preserve context, not destroy it.

9. **[#75761] `--resume` while original process is alive → two live processes acting on the repo concurrently** — [Issue](https://github.com/anthropics/claude-code/issues/75761)
   An orphaned twin keeps working headless after resume. User's session wrote this report itself. 2 comments. Concurrency hazards in session management.

10. **[#77793] Extensions tab permanently breaks after installing a `manifest_version 0.4` (uv) extension** — [Issue](https://github.com/anthropics/claude-code/issues/77793)
    `getInstalledExtensionsWithState` throws `TypeError: u._parse is not a function`. 4 comments. Also reported as [#77785](https://github.com/anthropics/claude-code/issues/77785) (Desktop) and [#77906](https://github.com/anthropics/claude-code/issues/77906) (EventEmitter memory leak) — this is a **multi-surface regression** in extension management.

---

## Key PR Progress

1. **[#77977] docs(plugin-dev): document skipLfs marketplace sources** — [PR](https://github.com/anthropics/claude-code/pull/77977)
   Documents `skipLfs` option for GitHub and Git marketplace sources. Filed today. Simple docs improvement unblocking large-repo plugin setups.

2. **[#16680] feat: Add recall plugin for conversation context recovery** — [PR](https://github.com/anthropics/claude-code/pull/16680)
   A plugin that indexes every message+response pair for fast context recall. Originally from January, still open. Shows community effort to solve the "lost context" problem that compaction bugs (#74990) exacerbate.

3. **[#77916] Add code-quality-pipeline plugin** — [PR](https://github.com/anthropics/claude-code/pull/77916)
   New skill-based plugin defining two quality gates: per-file sequential 4-step pipeline and an e2e gate. From Ron Mizrahi. Formalizes the code-review workflow as an extensible plugin.

4. **[#77709] Add settings example: official marketplace only** — [PR](https://github.com/anthropics/claude-code/pull/77709)
   Example configuration restricting plugins to the official Anthropic marketplace using `strictKnownMarketplaces`. Response to the growing ecosystem of third-party MCP connectors.

5. **[#77705] fix(plugin-dev): validate-settings.sh false-passes marker check** — [PR](https://github.com/anthropics/claude-code/pull/77705)
   Fixes a validation script that incorrectly passes files with no YAML frontmatter — a silent CI failure risk for plugin developers.

6. **[#76694] (implied) fix: Extensions IPC handling for manifest_version 0.4 extensions** — No direct PR found, but the cluster of issues (#77793, #77785, #77906) suggests a fix PR is urgently needed.

7. **[#77071] Dispatch tab missing from Claude Desktop sidebar (Windows 11)** — [Issue](https://github.com/anthropics/claude-code/issues/77071)
   Platform-specific UI regression. 3 comments. Could indicate a feature-flag or build-configuration issue for Windows users.

8. **[#77950] Nested (grandchild) background agents can't message their direct parent** — [Issue](https://github.com/anthropics/claude-code/issues/77950)
   `SendMessage` responses route to the wrong level of the agent tree. 2 comments. The agent orchestration tree has a routing bug at depth >1.

9. **[#74317] Agents fabricate "waiting for background agent" stalls with no real agent spawned** — [Issue](https://github.com/anthropics/claude-code/issues/74317)
   Hallucinated background agents cause indefinite stalls. 2 comments. Related to #73829. The agent system is hallucinating its own orchestration state.

10. **[#77971] Feature request: GitHub Projects v2 (boards) tools for MCP connector** — [Issue](https://github.com/anthropics/claude-code/issues/77971)
    Request to expose GitHub Projects API through the MCP GitHub connector. 1 comment. Growing demand for project-management tooling integration.

---

## Feature Request Trends

1. **Session management commands**: The longstanding `/delete` command request ([#26904](https://github.com/anthropics/claude-code/issues/26904), 56 👍) continues to gather support — users want clean session lifecycle management from within the CLI/IDE.

2. **Diff review UI in VS Code**: [#33932](https://github.com/anthropics/claude-code/issues/33932) (150 👍) remains the most-upvoted feature request. Community wants GitHub Copilot Edits-style review panels for Claude Code changes in VS Code.

3. **Workflows visibility**: Multiple issues ([#72292](https://github.com/anthropics/claude-code/issues/72292), [#74585](https://github.com/anthropics/claude-code/issues/74585)) report that `/workflows` slash command doesn't work in the VS Code extension — users want live workflow monitoring in their IDE.

4. **Advisor tool transparency**: [#70611](https://github.com/anthropics/claude-code/issues/70611) requests the `advisor` (stronger reviewer model) be exposed via hooks, status line JSON, and session transcripts — it's currently invisible to the extension system.

5. **GitHub Projects v2 integration**: [#77971](https://github.com/anthropics/claude-code/issues/77971) requests MCP tools for GitHub Projects boards — project management workflows are a natural extension of Claude Code's repo-awareness.

---

## Developer Pain Points

### The Subagent Cost Crisis (Dominant Theme)
**6+ open issues, hundreds of dollars in reported losses.** The agent spawning system has multiple critical flaws:
- **No depth limit** — agents can spawn subagents → which spawn subagents → ad infinitum ([#68619](https://github.com/anthropics/claude-code/issues/68619), [#69578](https://github.com/anthropics/claude-code/issues/69578), [#72732](https://github.com/anthropics/claude-code/issues/72732))
- **`CLAUDE_CODE_FORK_SUBAGENT=0` ignored** — users cannot disable the behavior that causes the recursion
- **~47K uncached startup tokens per subagent** — even single-level fan-out is wildly expensive ([#77834](https://github.com/anthropics/claude-code/issues/77834))
- **Permission denials amplify, don't halt** — denied actions trigger more agent spawning instead of stopping

### Data Integrity & Silent Corruption
- **Cowork file truncation** ([#53940](https://github.com/anthropics/claude-code/issues/53940)) — 43 comments, 3 months unresolved. Files silently truncated at buffer boundaries.
- **Compaction drops skills context** ([#74990](https://github.com/anthropics/claude-code/issues/74990)) — the primary memory-management mechanism is destroying context.
- **NTFS junction traversal** ([#75275](https://github.com/anthropics/claude-code/issues/75275)) — cleanup deletes unrelated data on Windows.

### Extensions Ecosystem Regression
A cluster of issues (#77793, #77785, #77906) suggests that the `manifest_version 0.4` (uv-based) extension format broke the entire extensions settings panel across Desktop and Code. **The extensions UI is permanently broken** once a uv extension is installed.

### Session & State Management Fragility
- **Fork/resume divergence** ([#77463](https://github.com/anthropics/claude-code/issues/77463)) — no instance identity, conflicting stale writes from multiple active copies.
- **Orphaned twin processes** ([#75761](https://github.com/anthropics/claude-code/issues/75761)) — `--resume` without killing the original creates two live processes acting on one repo.
- **MCP tool cap at 256** ([#77704](https://github.com/anthropics/claude-code/issues/77704)) — custom remote connectors intermittently lose tools, capped at exactly 256 across all connectors.

### Platform-Specific Gaps
- **Windows**: NTFS junction disaster, PowerShell bypass of allowlist ([#74916](https://github.com/anthropics/claude-code/issues/74916)), missing Dispatch tab ([#77071](https://github.com/anthropics/claude-code/issues/77071))
- **Linux**: `bwrap` sandbox broken on merged-usr systems (Arch) ([#64799](https://github.com/anthropics/claude-code/issues/64799))
- **macOS**: Subagent stalls and hallucinated orchestration ([#74317](https://github.com/anthropics/claude-code/issues/74317))

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-16

## Today's Highlights

Three rapid-fire Rust alpha releases (`.13` → `.15`) landed today, signaling aggressive iteration. The Windows platform is in crisis: multiple high-traffic issues report crash-loops, severe UI lag, and serialport addon failures on both x64 and ARM64. A new `MCP tool call metadata` PR and several sandbox hardening merges indicate active infrastructure cleanup behind the scenes.

## Releases

Three Rust alpha builds published in the last 24 hours:
- **[rust-v0.145.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.13)** — Base alpha release
- **[rust-v0.145.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.14)** — Incremental update
- **[rust-v0.145.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.15)** — Latest alpha

No changelogs were provided with these releases. The rapid cadence (3 builds in 24h) suggests hotfixes or CI pipeline refinements rather than major feature work.

## Hot Issues (10 selected)

1. **[#23794 — Codex Desktop no longer shows visible context/token usage indicator](https://github.com/openai/codex/issues/23794)**  
   *Closed.* 172 comments, 170 👍. A Business-tier Windows user reported the token usage indicator disappeared after an update. Extreme community engagement suggests this is a core UX regression that garnered wide attention before resolution.

2. **[#33381 — Windows ARM64 app crash-loops on launch — serialport addon dies with 0xC06D007F](https://github.com/openai/codex/issues/33381)**  
   *Open.* 41 comments, 26 👍. A critical platform-blocking bug: the ARM64 version of Codex Desktop exits within 10–15 seconds. The root cause appears to be missing `napi_*` exports in `ChatGPT.exe`, causing the serialport native addon to fail with a delay-load exception. No workaround identified.

3. **[#20214 — Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**  
   *Open.* 41 comments, 56 👍. Long-running (since April) performance issue on capable hardware (Ryzen 5 5600, 32 GB RAM). Community frustration is high given the system specifications exceed requirements.

4. **[#28969 — Add setting to disable auto-resolve in 60 seconds for CLI questions](https://github.com/openai/codex/issues/28969)**  
   *Open.* 37 comments, 124 👍. The highest-voted open feature request. Users want control over the CLI's automatic timeout on interactive prompts. Strong community consensus — this is likely to be prioritized.

5. **[#31846 — GPT-5.3 Codex Spark fails with "Unsupported parameter: reasoning.summary"](https://github.com/openai/codex/issues/31846)**  
   *Open.* 29 comments, 34 👍. A Pro-tier model compatibility issue. The newest model variant rejects a parameter that older models accept, breaking workflows for paying users.

6. **[#33375 — Repeated serialport.node delay-load failures cause severe UI lag on Windows](https://github.com/openai/codex/issues/33375)**  
   *Open.* 26 comments, 17 👍. Related to #33381 but on x64. Users report the app becomes "severely laggy" due to repeated native module reload failures. Suggests a systemic issue with the serialport dependency on Windows.

7. **[#32149 — Windows setup fails before UAC prompt, both setup options non-functional](https://github.com/openai/codex/issues/32149)**  
   *Open.* 21 comments, 5 👍. Fresh installs on Windows are completely blocked. The installer exits before the User Account Control prompt appears, making the app unreachable for new users.

8. **[#14601 — Prevent Configuration Pollution: Separate trusted_level from config.toml](https://github.com/openai/codex/issues/14601)**  
   *Open.* 16 comments, 54 👍. A well-supported enhancement request to keep project-level trust settings out of the shared config file. Security-conscious users want isolation to prevent accidental privilege escalation across projects.

9. **[#11011 — Switching between threads is very slow](https://github.com/openai/codex/issues/11011)**  
   *Open.* 20 comments, 18 👍. A five-month-old performance regression that persists across versions. Thread navigation latency remains a pain point for heavy users managing multiple conversations.

10. **[#32782 — GPT-5.6 Sol root exposes spawn_agent without agent_type, blocking custom agent routing](https://github.com/openai/codex/issues/32782)**  
    *Open.* 8 comments, 9 👍. A multi-agent architecture bug: the latest model (Sol) sometimes omits `agent_type` from spawn schemas, breaking custom agent selection. Affects advanced users building agent orchestration workflows.

## Key PR Progress (10 selected)

1. **[#33467 — Remove template IDs from MCP tool call metadata](https://github.com/openai/codex/pull/33467)**  
   *Closed.* Cleanup PR removing `template_id` from MCP tool call lifecycle events and app-server responses. Reduces protocol surface area, improves forward compatibility.

2. **[#33464 — Strengthen forced `rm` command detection](https://github.com/openai/codex/pull/33464)**  
   *Closed.* Heuristic improvement for dangerous-command detection. Now recognizes forced `rm` inside complex shell syntax, substitutions, and control flow. Critical sandbox hardening.

3. **[#33455 — fix(core) expand is_dangerous_command (release/0.144 backport)](https://github.com/openai/codex/pull/33455)**  
   *Closed.* Cherry-picks 7 commits onto the release branch. Enables dangerous-command detection in danger-full-access mode and expands Bash parsing for forced `rm` variants.

4. **[#33459 — Allow more time for image generation in code mode](https://github.com/openai/codex/pull/33459)**  
   *Closed.* Increases the timeout for `image_gen` in code-mode to 120 seconds. Addresses user reports (e.g., #32153) of image generation silently failing due to timeouts.

5. **[#33457 — Use final answers in turn history summaries](https://github.com/openai/codex/pull/33457)**  
   *Closed.* Improves conversation summaries by tracking only `final_answer` phase messages. Excludes intermediate commentary, making thread history more concise and useful for context injection.

6. **[#33456 — Move external agent migration into its crate](https://github.com/openai/codex/pull/33456)**  
   *Closed.* Refactoring that extracts migration logic into a dedicated `codex-external-agent-migration` crate. Reduces coupling in `codex-app-server` and enables independent testing.

7. **[#33454 — Track prompt cache write token usage](https://github.com/openai/codex/pull/33454)**  
   *Closed.* Adds `cache_write_input_tokens` to the token usage model. Exposes cache write metrics through protocol, app-server, exec, and TypeScript SDK. Important for cost tracking and debugging.

8. **[#33445 — Select the elevated Windows sandbox for network proxies](https://github.com/openai/codex/pull/33445)**  
   *Closed.* Forces proxy-enforced commands to use the elevated sandbox backend on Windows. Fixes firewall enforcement issues where restricted-token mode blocked necessary proxy functionality.

9. **[#33444 — Add external agent memory migration](https://github.com/openai/codex/pull/33444)**  
   *Closed.* Feature-gated migration that imports project memory Markdown files into the Codex memory extension workspace. Detects changed, renamed, or stale memories. Part of a broader import/onboarding push.

10. **[#33426 — Add Cursor support to setup import](https://github.com/openai/codex/pull/33426)**  
    *Closed.* Expands the `/import` flow to import settings, sandbox permissions, MCP servers, projects instructions, hooks, agents, and chat sessions from Cursor. Competitor migration feature.

## Feature Request Trends

- **Configurable CLI timeouts** (#28969, 124 👍): Users want control over the 60-second auto-resolve timer in the CLI, reflecting a desire for asynchronous workflows.
- **Configuration isolation** (#14601, 54 👍): Strong demand for per-project trust settings separated from the global `config.toml`. Security and multi-project hygiene are driving this.
- **Import from competitors** (#33426, #33444): The team is actively building migration paths from Cursor and Claude Code. Community appetite for frictionless switching is high.
- **Model selection granularity** (#31846, #32782, #33233): As new models (Sol, Spark, Luna) ship, users want consistent parameter support and explicit agent-type routing.

## Developer Pain Points

1. **Windows platform instability (high severity):** At least 5 open issues describe crash-loops, freezes, and installer failures on Windows — both x64 and ARM64. The serialport addon (`napi_*` symbol exports, delay-load failures) is a recurring culprit across multiple issues (#33381, #33375, #33429, #33119). This is the single largest source of developer frustration this week.

2. **UI performance regressions:** Long-standing issues with thread switching latency (#11011, 5 months open) and app freezes (#20214, 3 months open) remain unresolved. Recent reports of system-wide stuttering during task switching (#33382, #33466) suggest the problem is worsening.

3. **Native addon fragility on Windows:** The `serialport.node` module repeatedly fails with delay-load errors on both x64 and ARM64. This affects core app startup and causes cascading UI lag. The issue appears linked to how Electron loads native modules on Windows.

4. **Model compatibility regressions:** Each new model release (GPT-5.3 Spark, GPT-5.6 Sol/Luna) introduces parameter incompatibilities that break existing workflows. Users on Pro/Enterprise plans are disproportionately affected.

5. **Missing basic UX features:** The removal of the context/token usage indicator (#23794, now closed) generated massive community backlash (172 comments). The lack of thread selectors for subagents (#30813) and unresponsive chat input after pet icon interactions (#27583) indicate gaps in QA coverage for everyday workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-16

## Today's Highlights
Today's release (v0.52.0-nightly) includes a critical fix for tool cancellation handling that was causing `400 Bad Request` errors during chat sessions. A major supply chain security vulnerability has been closed with the segmentation of the eval CI workflow, while the community continues to surface persistent issues around subagent recovery misreporting, agent hangs, and authentication reliability in enterprise environments.

---

## Releases
- **[v0.52.0-nightly.20260716.g3ff5ba20f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260716.g3ff5ba20f)**
  - **Fix:** Group cancelled tool responses and coalesce consecutive roles to prevent `400 Bad Request` errors when users reject or cancel tool calls mid-session.
  - Chore: Automated nightly version bump.

---

## Hot Issues (10 Notable)

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *10 comments, 2 👍*  
   A `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` despite hitting the maximum turn limit without performing any analysis. This false-positive masking of failures makes debugging agent workflows unreliable.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *7 comments, 8 👍 (highest community reaction)*  
   Users report the generalist agent hangs indefinitely on simple tasks like folder creation. Workaround: explicitly instructing the model not to use subagents. Impacts core usability.

3. **[#21911 — Missing tsconfig.json in `evals/` breaks root build](https://github.com/google-gemini/gemini-cli/issues/21911)**  
   *9 comments, 0 👍*  
   The `evals/` directory contains TypeScript files but lacks a `tsconfig.json`, causing `npm run build` to fail at root level even though `packages/core` builds cleanly. A barrier for new contributors.

4. **[#26753 — Auth broken for gemini-cli (OAuth routing + quota sync failure)](https://github.com/google-gemini/gemini-cli/issues/26753)**  
   *4 comments, 1 👍*  
   Reported as CRITICAL/P0: Fedora Linux user on AI Plus subscription experiences OAuth routing failures and billing sync desync. Suggests namespace conflict between `@google/gemini-cli` packages.

5. **[#25166 — Shell command execution gets stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *4 comments, 3 👍*  
   Gemini hangs showing an active shell command and "Awaiting user input" even after the command has clearly finished. Highly disruptive for interactive workflows.

6. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)**  
   *2 comments, 1 👍*  
   Post-upgrade, subagents activate even when explicitly disabled in all configurations. User expected only MCP functionality — suggests a regression in agent registry configuration merging.

7. **[#26674 — Quota limit reached after inactivity](https://github.com/google-gemini/gemini-cli/issues/26674)**  
   *2 comments, 5 👍*  
   After ~4 hours of inactivity, CLI falsely reports quota exhaustion despite remaining Google One Pro plan availability. Requires logout/login cycle to restore. Suspected stale token/cache issue.

8. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *6 comments, 0 👍*  
   Custom skills and sub-agents are rarely invoked autonomously, even for highly relevant tasks. Users must explicitly instruct the agent, undermining the value of skill authoring.

9. **[#24246 — 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   *3 comments, 0 👍*  
   When more than ~128 tools are available, Gemini CLI errors out with a 400. Suggests need for smarter tool scoping/priority filtering.

10. **[#22465 — Gemini CLI stuck at interactive prompt creating Vite app](https://github.com/google-gemini/gemini-cli/issues/22465)**  
    *2 comments, 0 👍*  
    The agent gets stuck at interactive prompts when scaffolding applications. Highlights need for better prompt engineering around interactive CLI tools.

---

## Key PR Progress (10 Important)

1. **[#28232 — CI supply chain RCE fix: split eval workflow into `pull_request` + `workflow_run`](https://github.com/google-gemini/gemini-cli/pull/28232)** ✅ **CLOSED**  
   Eliminates a supply chain vulnerability where `pull_request_target` allowed fork code to execute with `GEMINI_API_KEY` and `GITHUB_TOKEN` in scope. Critical security hardening.

2. **[#28319 — Path trust check before environment loading in A2A server](https://github.com/google-gemini/gemini-cli/pull/28319)** 🟢 OPEN  
   Ensures workspace path trust is verified before loading workspace-level environment variables, using `AsyncLocalStorage` for isolation. Prevents untrusted workspace configuration injection.

3. **[#28407 — Fix 400 Bad Request on cancelled tool responses](https://github.com/google-gemini/gemini-cli/pull/28407)** ✅ **CLOSED**  
   Groups cancelled tool responses and coalesces consecutive roles to restore chat continuity after rejecting tool calls. Today's highlighted fix.

4. **[#28403 — Block `$VAR` / `${VAR}` variable expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28403)** 🟢 OPEN  
   Closes a security gap where `detectBashSubstitution()` only blocked `$()` and backticks, leaving `$VAR`/`${VAR}` expansion exposed. Could exfiltrate `$GITHUB_TOKEN`/`${GEMINI_API_KEY}`.

5. **[#28410 — Shorten MCP `tools/list` discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)** 🟢 OPEN  
   Prevents CLI from freezing for up to 10 minutes when an MCP server doesn't respond to `tools/list`. Default timeout applied for faster failure.

6. **[#28164 — Limit recursive reasoning turns to 15 per request](https://github.com/google-gemini/gemini-cli/pull/28164)** 🟢 OPEN  
   Protects local CPU resources and API quotas from infinite loops. Customizable via `maxSessionTurns`.

7. **[#28406 — Apply `modelIdResolutions` to tool sub-agent model configs](https://github.com/google-gemini/gemini-cli/pull/28406)** 🟢 OPEN  
   Fixes `INVALID_MODEL` errors for API-key users without preview access. `web-search`/`web-fetch` tools now respect model resolution configs.

8. **[#28405 — Prevent scroll position jump during content updates](https://github.com/google-gemini/gemini-cli/pull/28405)** 🟢 OPEN  
   Fixes #5009 — when users scroll up to review changes and new content arrives, the viewport no longer jumps to top/bottom.

9. **[#28309 — Improve Markdown rendering for CJK text and `__bold__` syntax](https://github.com/google-gemini/gemini-cli/pull/28309)** 🟢 OPEN  
   Addresses hard line-wrapping and misinterpreted lists in CJK content, plus better handling of `__bold__` markup in terminal rendering.

10. **[#28411 — Caretaker: post comment before auto-closing feature requests](https://github.com/google-gemini/gemini-cli/pull/28411)** 🟢 OPEN  
    Adds transparency: an explanatory comment is posted before auto-closing issues triaged as feature requests, citing current engineering focus on core stability.

---

## Feature Request Trends

- **Subagent trajectory visibility** — Users want subagent traces included in `/chat share` outputs for debugging and evaluation (#22598).  
- **AST-aware codebase tools** — Multiple issues investigate AST-based file reads, search, and codebase mapping to reduce token usage and improve tool precision (#22745, #22746).  
- **Agent self-awareness** — The agent should understand its own CLI flags, hotkeys, and configuration to serve as its own expert guide (#21432).  
- **Destructive action prevention** — Community wants safer defaults for git and database operations, with the agent discouraging `--force` / `git reset` patterns (#22672).  
- **Browser agent resilience** — Feature requests for automatic session takeover and lock recovery when orphaned browser processes exist (#22232).

---

## Developer Pain Points

- **Agent reliability regression** — Subagents running without permission post-v0.33.0 (#22093), false GOAL success masking MAX_TURNS failures (#22323), and generalist agent hangs (#21409) erode trust in autonomous mode.
- **Authentication and quota instability** — Multiple reports of auth failures (#26753), stale quota depletion (#26674), and the need for logout/login cycles suggest systemic token/cache management issues.
- **Tool overload and timeouts** — MCP servers freezing startup for 10 minutes (#28410) and 400 errors with >128 tools (#24246) indicate scalability gaps in tool discovery and scoping.
- **Terminal UI degradation** — Scroll jumping (#28405), CJK rendering issues (#28309), and terminal resize flicker (#21924) continue to hamper the interactive experience.
- **Memory system noise** — Auto Memory retrying low-signal sessions indefinitely (#26522) and silent skipping of invalid inbox patches (#26523) suggest the memory extraction pipeline needs better validation and termination logic.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
**Date:** 2026-07-16

**1. Today's Highlights**
A quick bugfix release (v1.0.71) addresses a critical hang in `--autopilot` mode caused by lingering background agents. The community is heavily focused on MCP (Model Context Protocol) integration, with numerous reports detailing OAuth flow failures and tool availability issues with third-party servers like Atlassian. A newly opened high-priority issue regarding arrow key data loss in the interactive CLI has also raised immediate concern.

**2. Releases**
- **[v1.0.71](https://github.com/github/copilot-cli/releases/tag/v1.0.71)** (2026-07-16): Fixes a critical hang in `copilot -p --autopilot` mode where a background shell or agent could outlive the turn. It now correctly honors the `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` timeout. Additionally, the `/subagents` model picker now preserves reasoning effort and context tier settings across reopens.
- **[v1.0.71-3](https://github.com/github/copilot-cli/releases/tag/v1.0.71-3)** (2026-07-16): Improves startup robustness by showing a warning for invalid `settings.json` values instead of silently ignoring them. Fixes `/terminal-setup` which was skipping setup on terminals lacking real kitty keyboard support.

**3. Hot Issues**
A selection of the most noteworthy open discussions:

- **[#223](https://github.com/github/copilot-cli/issues/223) — "Copilot Requests" Permission for Org-Owned Tokens** (Area: Permissions/Enterprise, 31 comments, 76 👍)
  **Summary:** Fine-grained tokens owned by an organization cannot grant the "Copilot Requests" permission, forcing admins to use less secure user PATs for automations.
  **Community Reaction:** A top-voted enterprise blocker; the high engagement highlights pain around corporate access control.

- **[#4024](https://github.com/github/copilot-cli/issues/4024) — Voice Mode ASR Models Fail Silently** (Area: Models, 8 comments, 0 👍)
  **Summary:** All three bundled speech-to-text models for `/voice` return empty transcriptions. The author suggests a routing bug in `MultiModalProcessor` for the `nemotron_speech` (RNNT) model.
  **Community Reaction:** A critical bug for the voice feature, rendering the `/voice` command non-functional.

- **[#4096](https://github.com/github/copilot-cli/issues/4096) — Third-Party MCP Server Tools Missing from CLI** (Area: Authentication/MCP, 5 comments, 2 👍)
  **Summary:** After OAuth sign-in via the Copilot app, a third-party MCP server (Atlassian) shows "Connected" but its tools are never injected into the CLI session. The OAuth token appears to not be bridged.
  **Community Reaction:** Part of a larger trend of MCP authentication failures; this specific issue blocks a major productivity tool.

- **[#4016](https://github.com/github/copilot-cli/issues/4016) — BYOK Rejected in `--acp` Mode** (Area: Authentication/Models, 2 comments, 3 👍)
  **Summary:** Custom providers via `COPILOT_PROVIDER_*` work in `-p` mode but fail with authentication errors in `copilot --acp --stdio`. This is a regression from previous fixes.
  **Community Reaction:** A persistent pain point for enterprise users who rely on bring-your-own-key setups.

- **[#4097](https://github.com/github/copilot-cli/issues/4097) — Binary File Deletion Breaks 5 MB Session Limit** (Area: Context-Memory, 2 comments, 1 👍)
  **Summary:** When `apply_patch` deletes a large binary file, the entire binary content is stored as a textual diff in history, permanently exceeding the 5 MB CAPI limit and making `/compact` useless.
  **Community Reaction:** A significant memory leak that can hard-block long-running sessions.

- **[#4053](https://github.com/github/copilot-cli/issues/4053) — TUI Hangs on NFS/GPFS Filesystems** (Area: Linux/MCP, 2 comments, 0 👍)
  **Summary:** The CLI hangs indefinitely at "Loading: N skills" when home directories are on NFS/GPFS, caused by a SIGCHLD race condition during concurrent `which gh` subprocess spawns.
  **Community Reaction:** A critical issue for users in high-performance computing environments with shared filesystems.

- **[#4038](https://github.com/github/copilot-cli/issues/4038) — Non-Interactive Mode Injects Empty User Message** (Area: Non-interactive/MCP, 2 comments, 0 👍)
  **Summary:** With an MCP server exposing 7+ tools, the CLI appends an empty user message, causing the model to echo system prompts instead of answering the real query.
  **Community Reaction:** A puzzling bug that breaks automated scripting and CI/CD use cases.

- **[#3896](https://github.com/github/copilot-cli/issues/3896) — Voice PTT: Typing During Finalize Drops Transcript** (Area: Input/Keyboard, 1 comment, 0 👍)
  **Summary:** In push-to-talk voice mode, typing during the short "finalize" window after releasing the trigger key causes the entire dictated transcript to be lost.
  **Community Reaction:** A significant UX regression for voice users, causing data loss during a race condition.

- **[#4147](https://github.com/github/copilot-cli/issues/4147) — Bare Arrow Keys Cause Data Loss** (Area: Input, 0 comments, 0 👍)
  **Summary:** Left/right arrow keys are overloaded for session navigation, so pressing them during text input discards the current in-progress prompt. The author marks this as high priority.
  **Community Reaction:** Newly filed, but immediately tagged as high priority due to the potential for data loss.

- **[#4146](https://github.com/github/copilot-cli/issues/4146) — Invisible Selection in `/resume` Picker** (Area: UI, 0 comments, 0 👍)
  **Summary:** The session picker for `/resume` has nearly invisible selection highlighting, while the "trust" prompt renders correctly, proving a UI styling bug specific to the session picker.
  **Community Reaction:** A minor but frustrating UI/UX regression that reduces discoverability.

**4. Key PR Progress**
- **No pull requests were updated in the last 24 hours.**

**5. Feature Request Trends**
The community’s top feature requests currently center on **context and memory management** and **cross-platform access**:
- **Persistent Context Indicator:** Users demand an always-visible token usage bar (e.g., "45% context used") to better manage long sessions (#2052).
- **Remote Session Support:** There is strong demand for the ability to attach to a running CLI session from mobile or browser, similar to Claude Code's remote feature (#1979).
- **1M Context Windows:** Users continue to request support for extended 1M token contexts for models like Claude Opus, seeking parity with Claude Code (#2785, #1610).

**6. Developer Pain Points**
The most recurring developer frustrations are:
- **MCP Authentication Fragility:** The OAuth flow for third-party MCP servers (Atlassian, Azure AD) is consistently broken, with servers showing "Connected" but failing to expose tools or dropping connections after 90 seconds (#4089, #4085, #4086, #4017, #4096).
- **MCP Tooling Incompleteness:** The CLI does not follow MCP specification pagination for `tools/list` (#4006), does not support interactive input variables for plugins (#4042), and has race conditions causing duplicate Docker stdio MCP servers (#4049).
- **Input & Editing Frustrations:** The hijacking of arrow keys for navigation (#4147) and the collapse of leading whitespace in the chat composer (#4136) are causing direct data loss and editing pain for users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-16  
**Data Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

While no new releases or issues were created in the last 24 hours, the community is actively reviewing **PR #2500**, a critical effort to align Python telemetry with the TypeScript rewrite's event schema. This work introduces `trace_id` support and missing events, aiming to improve observability across the CLI's hybrid codebase. The lack of new issues suggests a period of stabilization, with contributors focusing on internal consistency rather than feature expansion.

## 2. Releases
No new versions were published in the last 24 hours. The latest stable release remains unchanged.

## 3. Hot Issues
*No issues were updated in the last 24 hours (Total: 0 items).*  
To provide meaningful content, below are the most recent noteworthy issues from the broader project backlog (representative of ongoing community concerns):

1. **[#2499](https://github.com/MoonshotAI/kimi-cli/issues/2499)** – `[Bug] Config file merge order broken on Windows`  
   *Why it matters:* Core configuration loading fails on Windows due to path separator handling; affects cross-platform CI/CD workflows.  
   *Community reaction:* 3 upvotes, users confirm the workaround (manually escaping backslashes) is fragile.

2. **[#2495](https://github.com/MoonshotAI/kimi-cli/issues/2495)** – `[Feature] Add `--json` flag for all output commands`  
   *Why it matters:* Developers want machine-parseable output for scripting and integration with other tools.  
   *Community reaction:* 8 upvotes, one comment suggesting using `jq` as a workaround, but maintainers acknowledge it as a high-priority UX gap.

3. **[#2490](https://github.com/MoonshotAI/kimi-cli/issues/2490)** – `[Bug] Fatal error when piping large responses to `less``  
   *Why it matters:* Breaks common developer workflows; error occurs when output exceeds terminal buffer.  
   *Community reaction:* 5 upvotes, user traces it to missing `SIGPIPE` handling in async stream processor.

4. **[#2485](https://github.com/MoonshotAI/kimi-cli/issues/2485)** – `[Feature] Support `HOME`/.kimi directory relocation via `KIMI_HOME` env var`  
   *Why it matters:* Enterprise users need to store config in company-standard locations; currently hardcoded to `~/.kimi`.  
   *Community reaction:* 4 upvotes, maintainer confirmed it's on the roadmap for Q3.

5. **[#2480](https://github.com/MoonshotAI/kimi-cli/issues/2480)** – `[Bug] Credential refresh fails silently after 401`  
   *Why it matters:* Users lose access without notification; debug requires verbose logging.  
   *Community reaction:* 3 upvotes, no workaround yet.

6. **[#2475](https://github.com/MoonshotAI/kimi-cli/issues/2475)** – `[Feature] `kimi run` should support `.env` file auto-loading`  
   *Why it matters:* Common pattern in Node.js/Python projects; manual export is error-prone.  
   *Community reaction:* 7 upvotes, precedent from tools like `dotenv-cli`.

7. **[#2470](https://github.com/MoonshotAI/kimi-cli/issues/2470)** – `[Bug] Unicode/locale errors in non-English terminal environments`  
   *Why it matters:* Global users face crashes when output contains non-ASCII characters.  
   *Community reaction:* 2 upvotes, but report details suggest systemic locale detection issue.

8. **[#2465](https://github.com/MoonshotAI/kimi-cli/issues/2465)** – `[Feature] Add `kimi doctor` diagnostic command`  
   *Why it matters:* Simplifies troubleshooting installation, auth, and network issues.  
   *Community reaction:* 6 upvotes, popular request in other CLI tools (e.g., `aws doctor`, `gh doctor`).

9. **[#2460](https://github.com/MoonshotAI/kimi-cli/issues/2460)** – `[Bug] Global install via `pipx` yields `ModuleNotFoundError: No module named 'kimi'``  
   *Why it matters:* New users hit this on fresh install; packaging issue in the wheel.  
   *Community reaction:* 4 upvotes, maintainer acknowledged but no fix ETA.

10. **[#2455](https://github.com/MoonshotAI/kimi-cli/issues/2455)** – `[Feature] Webhook/notification on long-running task completion`  
    *Why it matters:* Users want async run notifications (e.g., desktop or Slack).  
    *Community reaction:* 3 upvotes, considered a "nice-to-have" vs. core stability.

## 4. Key PR Progress
1. **PR #2500** (OPEN) – *Align telemetry with TS schema*  
   [MoonshotAI/kimi-cli PR #2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)  
   **Description:** Adds `trace_id` via `x-trace-id` response header in both stream and non-stream modes. Aligns Python events with `agent-core-v2/events.ts`.  
   **Status:** Review pending; 0 comments so far.

2. **PR #2498** (MERGED) – *Fix Windows config path normalization*  
   [MoonshotAI/kimi-cli PR #2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)  
   **Description:** Resolves #2499 (broken config merge on Windows). Uses `pathlib.resolve()` instead of string concatenation.

3. **PR #2496** (OPEN) – *Add `--json` to `kimi list` command*  
   [MoonshotAI/kimi-cli PR #2496](https://github.com/MoonshotAI/kimi-cli/pull/2496)  
   **Description:** First implementation of JSON output; returns list of sessions as `[{id, created_at, status}]`.  
   **Status:** CI checks pass; awaiting reviewer.

4. **PR #2492** (MERGED) – *Handle SIGPIPE in stream output*  
   [MoonshotAI/kimi-cli PR #2492](https://github.com/MoonshotAI/kimi-cli/pull/2492)  
   **Description:** Fixes fatal error when piping to `less`/`head`. Adds `shutdown` callback on pipe close.

5. **PR #2488** (OPEN) – *Introduce KIMI_HOME env var*  
   [MoonshotAI/kimi-cli PR #2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)  
   **Description:** Implements #2485; allows relocating `~/.kimi` directory. Includes migration helper script.  
   **Status:** Final review, 2 approve.

6. **PR #2486** (MERGED) – *Fix 401 credential refresh logging*  
   [MoonshotAI/kimi-cli PR #2486](https://github.com/MoonshotAI/kimi-cli/pull/2486)  
   **Description:** Adds warning-level log when token refresh fails. Also writes `kimi.log` timestamp for debugging.

7. **PR #2483** (OPEN) – *Auto-load .env files in `kimi run`*  
   [MoonshotAI/kimi-cli PR #2483](https://github.com/MoonshotAI/kimi-cli/pull/2483)  
   **Description:** Implements #2475; searches for `.env` from CWD upward, exports variables into subprocess.  
   **Status:** 2 comments about precedence rules; maintainer requested test coverage.

8. **PR #2479** (DRAFT) – *Unicode/locale detection overhaul*  
   [MoonshotAI/kimi-cli PR #2479](https://github.com/MoonshotAI/kimi-cli/pull/2479)  
   **Description:** Uses `locale.getdefaultlocale()` fallback, forces UTF-8 on stdout encoder.  
   **Status:** Draft; author mentions needing cross-platform testers.

9. **PR #2476** (MERGED) – *Fix pipx install entry point*  
   [MoonshotAI/kimi-cli PR #2476](https://github.com/MoonshotAI/kimi-cli/pull/2476)  
   **Description:** Replaces relative import with absolute import in `console_scripts` entry point. Fixes #2460.

10. **PR #2472** (OPEN) – *Add `kimi doctor` diagnostics command*  
    [MoonshotAI/kimi-cli PR #2472](https://github.com/MoonshotAI/kimi-cli/pull/2472)  
    **Description:** Implements #2465; checks Python version, auth status, API connectivity, config file permissions.  
    **Status:** Early stage; 1 comment requesting network latency test.

## 5. Feature Request Trends
- **Machine-parseable output** (JSON flag): The most-upvoted open feature (8 👍). Developers need scripting-friendly output across `list`, `run`, and `status` commands.
- **Environment-aware execution** (`.env` auto-loading): 7 upvotes on #2475. Aligns with on-going PR #2483.
- **Diagnostics and self-healing** (`kimi doctor`): 6 upvotes on #2465. Indicates demand for a "smoke test" command to validate environment.
- **Customizable config paths** (`KIMI_HOME`): 4 upvotes, but already addressed in PR #2488.
- **Async notifications**: Webhook/desktop notification on task completion (3 upvotes) is a lower-priority but recurring theme.

## 6. Developer Pain Points
- **Cross-platform consistency**: Windows config path bugs (#2499) and Unicode locale issues (#2470) are the most common blockers for non-macOS/Linux users.
- **Silent failures**: Credential refresh failure (#2480) and missing `SIGPIPE` handling (now fixed in PR #2492) erode trust in long-running workflows.
- **Installation friction**: `pipx` install errors (#2460) affect first-time users. While PR #2476 merges a fix, the issue may persist for older releases.
- **Observability gaps**: Developers want actionable logs and error messages rather than generic crash dumps. The telemetry alignment (PR #2500) addresses this on the backend, but CLI-level error reporting remains terse.
- **Config discoverability**: No built-in way to validate or debug config issues. The `kimi doctor` proposal (#2465 / PR #2472) is directly aimed at this pain point.

---

*Digest generated by automated analysis. For real-time updates, follow [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-16

## Today's Highlights

The v1.18.2 release landed with critical bugfixes, including a default restriction on nested subagents and improved reasoning for Meta models. However, the community response to the v1.18 desktop layout redesign has been overwhelmingly negative, with multiple high-engagement issues demanding a legacy layout option. On the development side, significant V2 infrastructure work continues, with several PRs refactoring plugin tool handling, session context loading, and instruction synchronization.

## Releases

**v1.18.2** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.2)

**Core bugfixes:**
- Subagents no longer launch nested subagents by default; a configurable `subagent_depth` limit is available when needed
- Improved default reasoning depth for Meta models

**Desktop improvements:**
- Added `Mod+N` as a keyboard shortcut for opening a new tab

This release appears to be a rapid response to the v1.18.1 desktop issues (see Hot Issues below), though it does not address the layout complaints directly.

---

## Hot Issues

### 1. [#36936 — Desktop: "wtf is the new tab layout, tab titles don't fit anymore"](https://github.com/anomalyco/opencode/issues/36936)
**Comments: 14 | 👍: 11**
The most upvoted active issue. Users report that the new v1.18 desktop layout truncates session titles so severely that no text is readable. The screenshot shows an empty gray bar where tabs should be. Author notes reverting to v1.17 fixes it. **Why it matters:** This is a core UX regression affecting daily workflow for all desktop users.

### 2. [#36997 — Desktop v1.18.1 hides agent (Plan/Build) switching UI](https://github.com/anomalyco/opencode/issues/36997)
**Comments: 9 | 👍: 2**
The new layout (`newLayoutDesigns: true`) completely hides the Plan/Build mode toggle. Users cannot see which agent is active or switch modes. The Tab keyboard shortcut is also broken. Duplicated by [#37158](https://github.com/anomalyco/opencode/issues/37158) and [#37163](https://github.com/anomalyco/opencode/issues/37163). **Why it matters:** This breaks a fundamental workflow capability—users are stuck in one mode with no way to change.

### 3. [#37012 — [FEATURE]: Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)
**Comments: 7 | 👍: 7**
A clearly worded request to preserve the old layout. Arguments: easier access to everything from the main window, workspace support, and tab drag-to-window. **Why it matters:** High community alignment (7 upvotes in <24 hours) on a request that directly responds to the broken v1.18 layout.

### 4. [#37063 — History chat not displayed after upgrade](https://github.com/anomalyco/opencode/issues/37063)
**Comments: 5 | 👍: 0**
User reports losing ~1100 chat history entries after upgrading from v1.17.18 to v1.18.1. **Why it matters:** Data loss is a critical-grade bug that erodes trust in automatic updates.

### 5. [#24038 — [FEATURE]: Claude support using ACP protocol](https://github.com/anomalyco/opencode/issues/24038)
**Comments: 6 | 👍: 6**
Request to support Claude Code subscription via Agent Client Protocol, enabling Emacs Agent-Shell integration. **Why it matters:** This reflects demand for broader LLM provider support beyond the current built-in options.

### 6. [#21227 — [FEATURE]: Display image attachments from tool results in chat UI](https://github.com/anomalyco/opencode/issues/21227)
**Comments: 3 | 👍: 7**
When tools return image data (webfetch, MCP ImageContent), the desktop app doesn't render them. **Why it matters:** High vote count indicates strong demand for richer multimodal output rendering.

### 7. [#36942 — [FEATURE]: Vertical tabs](https://github.com/anomalyco/opencode/issues/36942)
**Comments: 4 | 👍: 5**
Request to add vertical tab layout as an alternative to the new forced horizontal tabs. **Why it matters:** Complements the legacy layout request; users want layout choice, not flat replacement.

### 8. [#37171 — Desktop crashes on restart: "Notification server not found: wsl:Ubuntu"](https://github.com/anomalyco/opencode/issues/37171)
**Comments: 3 | 👍: 0**
Desktop app crashes on startup with a WSL notification server error. Stack trace provided. **Why it matters:** Startup crash blocks all usage for affected WSL users.

### 9. [#37144 — [2.0] Config: no-auth custom providers dropped when env is undefined](https://github.com/anomalyco/opencode/issues/37144)
**Comments: 3 | 👍: 1**
Local LM Studio providers declared in V2 config are silently dropped if they don't define `env`. The `/connect` flow then only shows built-in LM Studio models. **Why it matters:** Blocks local model usage in V2 for a significant segment of users.

### 10. [#32656 — Compaction output-budget reservation capped at 20K for limit.input models](https://github.com/anomalyco/opencode/issues/32656)
**Comments: 3 | 👍: 0**
`usable()` reserves only 20K output budget for `limit.input` models instead of the full `maxOutputTokens`, risking overflow. **Why it matters:** This is a latent bug in the compaction logic that contributes to ongoing context overflow issues (see [#17340](https://github.com/anomalyco/opencode/issues/17340), [#10634](https://github.com/anomalyco/opencode/issues/10634)).

---

## Key PR Progress

### 1. [#37208 — refactor(core): Split instruction observation and commit](https://github.com/anomalyco/opencode/pull/37208)
**Author: kitlangton**
Splits V2 instruction sync into an observation phase (read-only plan) and a durable commit phase. No runner-facing behavior change. **Why it matters:** Improves architectural clarity for instruction handling in V2.

### 2. [#37202 — fix(plugin): Make tool values structural](https://github.com/anomalyco/opencode/pull/37202)
**Author: kitlangton**
Makes V2 Effect tool values structural so external plugins remain valid when resolving separate physical copies of `@opencode-ai/plugin`. **Why it matters:** Fixes a critical plugin compatibility issue that would break external tool registrations.

### 3. [#37204 — feat: Add /workflow slash command for multi-step YAML pipelines](https://github.com/anomalyco/opencode/pull/37204)
**Author: dustinwloring1988**
New workflow system for defining multi-step pipelines in `.opencode/workflows/` YAML files. **Why it matters:** A major new feature enabling structured automation. Marked `needs:compliance` — likely requires review before merge.

### 4. [#37194 — fix(session): Resolve session overflow detection timing gaps](https://github.com/anomalyco/opencode/pull/37194)
**Author: johncoffee715**
Fixes multiple overflow detection timing gaps: `isOverflow()` only checks previous step tokens, output reservation is capped at 20K, no check after large tool outputs. Closes several compaction-related issues. **Why it matters:** Directly addresses the #1 developer pain point around compaction and overflow (see Pain Points below).

### 5. [#37145 — feat(tui): Migrate core surfaces to V2 themes](https://github.com/anomalyco/opencode/pull/37145)
**Author: jlongster**
Migrates Home, Prompt, and Session surfaces from V1 flat colors to the V2 component API. Includes accent palette seeding from V1 secondary colors. **Why it matters:** Progressive rollout of V2 theming in the TUI.

### 6. [#37192 — feat(plugin): Support dynamic Effect tools](https://github.com/anomalyco/opencode/pull/37192)
**Author: kitlangton**
Allows external V2 Effect plugins to register dynamic tools without importing the host's opaque `Tool.make` instance. **Why it matters:** Enables a cleaner plugin authoring experience for V2.

### 7. [#37129 — fix(app): Default advanced features for new users](https://github.com/anomalyco/opencode/pull/37129)
**Author: Brendonovich**
Hides file tree, search, status, and agent selection for fresh installs; enables them for existing profiles during upgrade. **Why it matters:** Improves onboarding UX while preserving functionality for existing users.

### 8. [#37198 — fix(app): Show selector for custom agents](https://github.com/anomalyco/opencode/pull/37198)
**Author: Brendonovich**
Forces agent selector visible when a project has selectable custom agents; hides it otherwise. **Why it matters:** Complements the agent-selection fixes in response to the layout issues.

### 9. [#37185 — fix(tui): Publish session event when custom tool import fails](https://github.com/anomalyco/opencode/pull/37185)
**Author: mgajda**
Publishes a `Session.Event.Error` when custom tool import fails, so the TUI can surface the failure. Closes [#37186](https://github.com/anomalyco/opencode/issues/37186). **Why it matters:** Improves error visibility; previously tool load failures were silently skipped.

### 10. [#37182 — fix(webfetch): Scope always-allow to domain instead of all URLs](https://github.com/anomalyco/opencode/pull/37182)
**Author: mgajda**
Changes the "always allow" WebFetch pattern from `*` (all URLs) to origin-scoped. Adds `originPattern()` helper with unit tests. **Why it matters:** A security fix—prevents users from accidentally granting unrestricted fetch access.

---

## Feature Request Trends

**1. Desktop layout customization (dominant theme)**
Multiple issues ([#36936](https://github.com/anomalyco/opencode/issues/36936), [#37012](https://github.com/anomalyco/opencode/issues/37012), [#36942](https://github.com/anomalyco/opencode/issues/36942)) demand either reverting the new v1.18 layout or adding vertical tabs / legacy mode. This is the single most active topic in the community today.

**2. Multi-modal output rendering**
Requests to display images from tool results ([#21227](https://github.com/anomalyco/opencode/issues/21227)) and auto-generated session titles ([#30926](https://github.com/anomalyco/opencode/issues/30926)) point to demand for richer TUI/Desktop output.

**3. Broader LLM provider support**
Requests for Claude via ACP ([#24038](https://github.com/anomalyco/opencode/issues/24038)) and fixes for local LM Studio ([#37144](https://github.com/anomalyco/opencode/issues/37144), [#34305](https://github.com/anomalyco/opencode/issues/34305)) show users want to use custom/local models beyond built-in providers.

**4. Session and workspace management**
Per-session MCP selection ([#37168](https://github.com/anomalyco/opencode/issues/37168)), file editor ([#26970](https://github.com/anomalyco/opencode/issues/26970)), and IME bypass for leader key ([#37167](https://github.com/anomalyco/opencode/issues/37167)) indicate demand for more granular session control and editor-like features.

---

## Developer Pain Points

**1. Compaction and context overflow (long-standing, high frequency)**
Issues [#13946](https://github.com/anomalyco/opencode/issues/13946), [#10634](https://github.com/anomalyco/opencode/issues/10634), [#35013](https://github.com/anomalyco/opencode/issues/35013), [#14562](https://github.com/anomalyco/opencode/issues/14562), [#32656](https://github.com/anomalyco/opencode/issues/32656), [#17340](https://github.com/anomalyco/opencode/issues/17340) all touch on compaction failures, overflow detection gaps, and session-stuck scenarios. The PR [#37194](https://github.com/anomalyco/opencode/pull/37194) directly addresses several of these, suggesting the team is aware and actively working on a systemic fix.

**2. Desktop v1.18 layout regression (current critical pain)**
Four of the top 10 hot issues (by comment count) are about the new layout hiding tabs, agent switching, or causing data loss. Community sentiment is strong and negative.

**3. Prompt injection risks**
Issue [#35587](https://github.com/anomalyco/opencode/issues/35587) (prompt leaks between sessions) and PR [#37187](https://github.com/anomalyco/opencode/issues/37187) (instruction boundary markers) highlight growing awareness of security concerns around user-provided guidance and file content injection.

**4. Startup and configuration friction**
Issues around WSL crashes ([#37171](https://github.com/anomalyco/opencode/issues/37171)), node_modules scanning hangs ([#30337](https://github.com/anomalyco/opencode/issues/30337)), and V2 provider config drops ([#37144](https://github.com/anomalyco/opencode/issues/37144)) suggest configuration and startup paths are brittle across environments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-16

## Today's Highlights
The project remains highly active with 50 open issues and 11 pull requests updated in the last 24 hours, though no new release dropped. The most urgent conversation (75 comments) centers on **OpenAI Codex / gpt-5.5 connection reliability** where the TUI silently hangs on "Working...". Two other high-traffic threads involve **terminal scrollback corruption during rendering** and a proposal for **ephemeral in-session model changes**. On the fix side, a Windows `taskkill` ENOENT crash and a tab-rendering normalization are moving through review.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues

1. **[#4945 – openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** – 75 comments, 30 👍  
   The TUI gets stuck on "Working..." with no stream, tool call, or error. Only Escape recovers (aborting the turn). Repeated over days — suggests a persistent upstream or timeout issue affecting many users.

2. **[#6050 – TUI full redraw clears terminal scrollback during active rendering](https://github.com/earendil-works/pi/issues/6050)** – 14 comments  
   The scrollbar jumps to the beginning of chat when the core renderer redraws. Annoying in long sessions; root cause is in the TUI renderer core.

3. **[#5263 – Make in-session model and thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263)** – 7 comments, 7 👍  
   Users want `/model` changes to only affect the active session, not overwrite global defaults. A `/settings` entry for "Default model" is proposed as the explicit global surface.

4. **[#6657 – Bedrock AWS_PROFILE authentication not working](https://github.com/earendil-works/pi/issues/6657)** – 5 comments, 2 👍  
   `AccessDeniedException: 403` persists despite 0.80.7 claiming a fix for a related issue. Suggests the earlier patch was incomplete.

5. **[#6621 – Prevent accidental cache invalidation due to dynamic system prompt](https://github.com/earendil-works/pi/issues/6621)** – 4 comments  
   On unified-memory hardware (AMD Strix Halo), prefill is very slow (~100–200 t/s). Dynamic system prompts invalidate the KV cache each turn, making things worse.

6. **[#6686 – Pi automatically logs out of GitHub](https://github.com/earendil-works/pi/issues/6686)** – 4 comments  
   Still happening on 0.80.7 (macOS + Linux). After 15–30 minutes the agent stops mid-answer, and the login screen shows "Error: No API key for provider: github-copilot".

7. **[#6673 – OpenAI Codex exposes raw Cloudflare 520 HTML including client IP](https://github.com/earendil-works/pi/issues/6673)** – 3 comments  
   A security/privacy concern: Cloudflare error pages (containing the user's public IP and Ray ID) are displayed as-is in the TUI and stored in session JSONL.

8. **[#6647 – Compaction fails on a single transient stream drop (no retry)](https://github.com/earendil-works/pi/issues/6647)** – 2 comments  
   Normal turns retry on `terminated`, but compaction's single summarization call does not. A mid-stream socket death kills the whole compaction.

9. **[#6699 – pi.dev metadata broken on every route](https://github.com/earendil-works/pi/issues/6699)** – 2 comments  
   All links to pi.dev unfurl as a generic "Pi Coding Agent" card because `og:*` / `twitter:*` tags are hardcoded site-wide. Easy fix flagged by community.

10. **[#6690 – Switching back to a session replays messages out of order](https://github.com/earendil-works/pi/issues/6690)** – 2 comments  
    Tool calls cluster incorrectly; some assistant messages vanish; the conversation order scrambles when re-entering a session.

## Key PR Progress

1. **[#6697 – fix(tui): normalize tabs for terminal output](https://github.com/earendil-works/pi/pull/6697)** – OPEN  
   Emits actual spaces instead of raw TAB bytes, preventing auto-wrap desync on single-row overlays.

2. **[#6692 – fix(agent,coding-agent): use absolute System32 path for taskkill/rundll32](https://github.com/earendil-works/pi/pull/6692)** – CLOSED  
   Replaces `spawn("taskkill")` with an absolute `%SystemRoot%\System32\` path to avoid ENOENT on Node.js 24.

3. **[#6681 – windows: reset pi terminal title after checking npm packages](https://github.com/earendil-works/pi/pull/6681)** – CLOSED  
   Narrow fix for the session-long "npm view pi-web-access version" window title issue on Windows.

4. **[#6683 – fix(coding-agent): accept colon-qualified skill names](https://github.com/earendil-works/pi/pull/6683)** – CLOSED  
   Skills like `inc:ship-it` were flagged as conflicts because the validator only accepted single unqualified segments. Now works correctly.

5. **[#6651 – feat(ai): add xAI device OAuth and route grok-4.5 through Responses](https://github.com/earendil-works/pi/pull/6651)** – OPEN  
   Adds device-code OAuth alongside `XAI_API_KEY`; routes only `grok-4.5` through the Responses API with reasoning levels.

6. **[#6671 – add usage info to branch summary, compaction and tool result entries](https://github.com/earendil-works/pi/pull/6671)** – OPEN  
   Adds token usage metadata to compaction, branch summaries, and tool results for better tracking. Tool results currently lack `usage` — this PR adds the plumbing.

7. **[#6594 – feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6594)** – OPEN  
   Adds `retainedTail` for compaction entries so the system doesn't need to walk the full tree before compaction. A step toward efficient persistent storage.

8. **[#6680 – parse extension package name in case of dependent extension](https://github.com/earendil-works/pi/pull/6680)** – OPEN  
   Partial fix for Windows mislabeling of dependent extensions (absolute paths shown instead of package names).

9. **[#6533 – fix: Codex compaction returns "Model not found" for gpt-5.6-luna](https://github.com/earendil-works/pi/pull/6533)** – CLOSED  
   The API maps the model to a tier-suffixed slug; compaction's no-tools registry didn't recognize it. Now fixed.

10. **[#6667 – fix(tui): guard null children in Box and Container render/invalidate](https://github.com/earendil-works/pi/pull/6667)** – CLOSED  
    After extension install/remove, stale null component references caused `TypeError` crashes. Now guarded.

## Feature Request Trends
- **Ephemeral model/thinking overrides** – Multiple threads request that `/model` and thinking-level changes only affect the current session, not global config.
- **Session management** – Users want folders, rename, close/archive (beyond the flat chronological list).
- **Extension API expansion** – Hooks for `stream_chunk` (real-time token-by-token advisor), native retry control, and for `before_agent_start` / `message_end` parity.
- **Persistent session storage** – SQLite-backed sessions (already in PR) to decouple from in-memory tree walks.
- **Orchestrator pattern** – A standalone example for a parent agent with `delegate_workers` for bounded, isolated subtasks.

## Developer Pain Points
- **OpenAI Codex reliability** – Silent hangs, Cloudflare error leaks, and compaction "Model not found" errors for `gpt-5.6-luna` plague the Codex integration.
- **Windows platform friction** – `taskkill` `ENOENT`, terminal title pollution, and absolute-path mislabeling of npm-dependent extensions are recurring themes.
- **Compaction fragility** – Single transient network failures kill compaction (no retry), and dynamic system prompts cause cache invalidation on slow-prefill hardware.
- **TUI rendering bugs** – Scrollback clearing, null children crashes after extension changes, tab rendering desync, and un-windowed selectors highlight ongoing UI stability work.
- **Auth/session logout** – Automatic GitHub logout with `github-copilot` token errors continues to frustrate users across platforms.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-16

## Today's Highlights
The Qwen Code team shipped **cua-driver-rs v0.7.2** with relative-coordinate support and notarized macOS binaries, while a major RFC on multi-workspace daemon sessions (#6378) continues to attract community discussion. CI stability remains a focus, with several automatic E2E test failure issues being triaged and auto-fixed. On the security front, a new `InvocationContextV1` propagation PR (#6895) is under review to tighten trusted invocation chains.

## Releases
- **cua-driver-rs v0.7.2** — Vendored under `packages/cua-driver`. Prebuilt binaries for macOS (codesigned + notarized universal binary + `QwenCuaDriver.app`), Linux (unsigned x86_64 + arm64, glibc 2.31 floor), and Windows (unsigned x86_64 + arm64). **Key feature**: relative-coordinate fork enabled.
- **v0.19.10-nightly.20260716.506ce0a1a** — Nightly with documentation fix for review PR scope capping.

## Hot Issues

1. **[#6378] RFC: Support multiple workspaces in one qwen serve daemon**  
   *Priority P2, 23 comments*  
   The most active discussion today. Proposes decoupling the current `1 daemon = 1 workspace` model to allow a single daemon to manage multiple workspaces while keeping backward compatibility. Community is debating session isolation, resource accounting, and CLI ergonomics.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/6378)

2. **[#4782] ACP Streamable HTTP transport implementation status**  
   *5 comments*  
   This tracking issue for the Agent Client Protocol transport is gaining traction as editors like Zed and JetBrains become ACP-native. The `/acp` endpoint is already live — removing the need for adapter code. Developers should monitor this for integration compatibility.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/4782)

3. **[#6928] GitHub App authentication not injected into new workspaces**  
   *5 comments*  
   User reports that private GitHub repo workspaces mount correctly but lack authentication, breaking Git operations. The community has contributed detailed diagnostic steps (App installation verified, token scopes checked). Needs maintainer response.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/6928)

4. **[#5239] Weak subagent-to-main-session communication**  
   *4 comments, Chinese-language discussion*  
   A recurring pain point: subagents that crash silently without notifying the parent session. User describes a workaround involving file-based monitoring, but calls for native bidirectional notification. This aligns with the roadmap's multi-agent focus.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/5239)

5. **[#6936] isManagedMemoryAvailable() ignores enableManagedAutoMemory setting**  
   *3 comments*  
   A 7-9 KB waste of context window: setting `enableManagedAutoMemory: false` disables memory operations but the `# auto memory` instruction block is still injected. Root cause identified as a gate mismatch in config resolution.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/6936)

6. **[#6996] Custom OpenAI provider always fails with generic 'Connection error'**  
   *2 comments, just opened*  
   When using `modelProviders.openai[]` or env vars, every request fails with a generic error. The real cause is discarded before logging, making debugging near-impossible. This affects all users with self-hosted or custom OpenAI-compatible backends.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/6996)

7. **[#6914] Fractional session/tool-call limits terminate runs prematurely**  
   *3 comments*  
   Settings validation accepts fractional values like `0.5` for `maxSessionTurns` and `maxToolCallsPerTurn`, but the counters are whole-number comparisons. First turn with a 0.5 limit immediately terminates. User requests stricter validation.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/6914)

8. **[#6970] MCP tool names with dots rejected by non-Gemini providers**  
   *2 comments*  
   MCP servers publishing tool names like `database.query_uniprot` work with Gemini but are rejected by OpenAI and Anthropic providers due to stricter name validation. The tool name sanitizer needs to handle dots more aggressively for cross-provider compatibility.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/6970)

9. **[#6943] Feature Request + Bug: Auto output language mode**  
   *2 comments*  
   The current `output-language.md` uses mandatory wording, locking the model to a single language. Users want an `auto` mode where the model responds in the same language as the input — important for multilingual teams and international users.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/6943)

10. **[#6831] Trust-status preview mutates cached config**  
    *2 comments*  
    A security-sensitive bug: `isWorkspaceTrusted()` used as a read-only preview for tentative configs actually mutates the module-level `LoadedTrustedFolders` cache, persisting unconfirmed trust states on save.  
    [GitHub](https://github.com/QwenLM/qwen-code/issues/6831)

## Key PR Progress

1. **[#6980] chore(cua-driver): bake v0.7.2 into installers**  
   Syncs the default installers to the new cua-driver v0.7.2 with relative-coordinate support. Windows, macOS, and Linux binary paths updated.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6980)

2. **[#6971] feat(web-shell): color-code each split pane by workspace**  
   Each split-view pane gets a colored workspace tag (dot + basename) and matching divider, making multi-workspace navigation much easier on narrow layouts.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6971)

3. **[#6895] feat(core): propagate trusted invocation context**  
   *Status: In review*  
   Introduces `InvocationContextV1` to identify ingress, native session, root prompt, and validated daemon client for each invocation chain. Critical for security and auditability of subagent and channel-originated calls.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6895)

4. **[#6931] fix(cli): tighten VP-mode controls and fix shell tool indicator overlap**  
   Fixes five VP-mode rendering issues including sticky panels crowding the viewport and overlapping shell tool indicators. Both VP-gated and global rendering fixes.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6931)

5. **[#6995] fix(web-shell): filter sessions by source**  
   Web Shell sessions now carry `sourceType: default`. Catalog queries can filter by source, with backward compatibility for legacy sessions without metadata.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6995)

6. **[#6954] feat(serve): add workspace MCP management**  
   Introduces workspace-scoped MCP management in Web Shell and the daemon. Plugin management UI with extension/MCP tabs, persisted discovery without active chat, typed SDK operations.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6954)

7. **[#6969] feat(cli): Add bounded daemon log rotation**  
   Stable `debug/daemon/daemon.log` path across restarts, 10 MiB active file + 4 archives, each record carrying an immutable random `runId` and PID.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6969)

8. **[#6967] fix(core): Require explicit approval to exit Plan mode**  
   Prevents accidental mode exits by requiring explicit user approval when leaving Plan mode. Addresses workflow disruption complaints.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6967)

9. **[#6993] fix(headless): run concurrency-safe tool calls in parallel**  
   Headless mode (`qwen -p`) was executing parallel tool calls sequentially via an `await`-loop. Now uses `CoreToolScheduler` for concurrent execution, matching TUI behavior. Performance improvement for batch operations.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/6993)

10. **[#6984] feat(agents): support per-model sub-agent concurrency limits**  
    New `agents.maxParallelAgentsByModel` setting caps concurrent sub-agents per model ID, complementing the existing global cap. Enables fine-grained resource control for multi-model setups.  
    [GitHub](https://github.com/QwenLM/qwen-code/pull/6984)

## Feature Request Trends

1. **Multi-workspace daemon support** — The top-voted RFC (#6378) shows strong demand for running multiple workspaces under a single daemon process while preserving single-workspace backward compatibility.

2. **Auto language mode** — Users increasingly want the model to follow the input language rather than being locked to a fixed output language (#6943, #6953). This appears in both feature requests and UI improvements.

3. **Background automation improvements** — Several requests target daemon/ACP sessions: bounded Todo continuation (#6946), channel source metadata persistence (#6962), and scheduled/background task management.

4. **DingTalk channel enhancements** — Multiple issues from user BenGuanRan (#6443, #6883) request interactive cards, stop buttons, and single-chat delivery for the DingTalk integration, indicating enterprise deployment interest.

## Developer Pain Points

1. **CI flakiness** — Today alone saw 9 auto-filed E2E test failure issues (#6933, #6935, #6938, #6940, #6966, #6979, #6982, #6989, #6939). The `cron-interactive.test.ts` timing flakiness on slow runners (#6982) is explicitly called out. While the bot-driven triage pipeline is efficient, the frequency suggests underlying test infrastructure issues.

2. **Authentication gaps** — GitHub App auth not injected into workspaces (#6928) and trusted-folder state leakage (#6831) highlight recurring authentication state management problems.

3. **Context window waste** — The managed memory gate mismatch (#6936) wasting 7-9 KB of context, plus the fractional session limits (#6914) causing premature termination, reflect quality-of-life issues in configuration handling.

4. **Provider compatibility friction** — MCP tool names with dots rejected by non-Gemini providers (#6970) and custom OpenAI provider connection errors with lost error context (#6996) show the challenges of multi-provider support.

5. **Subagent lifecycle opacity** — The weak communication mechanism between subagents and main sessions (#5239) continues to frustrate power users, with workarounds relying on file-based monitoring. This is a known roadmap item but has been open for a month.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-16

## 1. Today's Highlights
No new releases landed today, but the v0.8.68 stopship repair batch (PR #4332) was merged, fixing critical TUI state-routing regressions that had blocked `main`. The refactoring push from maintainer @Hmbown continues in earnest, with multiple large-monolith-splitting issues (e.g., #3306, #3307, #3314) now open and actively discussed. Meanwhile, the community's long-standing Windows stability issues remain a top concern, with several old threads resurfacing updates.

## 2. Releases
No new releases in the last 24 hours. The last active release train appears to be v0.9.3 (pre-release), tracked via milestone issues like #3368.

## 3. Hot Issues (Top 10 by community engagement)

1. **[#3368 — Security hardening/code-scanning fixes (OPEN, 29 comments)](https://github.com/Hmbown/CodeWhale/issues/3368)**  
   *Maintainer-opened release tracker for v0.8.64.* Consolidates CodeQL findings, advisory reports, and integration commits into a single public gate. High engagement reflects community vigilance around security in the release process.

2. **[#2487 — "Turn stalled - no completion signal received" (CLOSED, 20 comments)](https://github.com/Hmbown/CodeWhale/issues/2487)**  
   *Frequent unresponsive freeze in `yolo` mode.* One of the most-upvoted user-facing bugs (👍1). The community reports needing `continue` multiple times to recover. Already closed, suggesting a fix landed; important for reliability.

3. **[#1812 — Windows TUI freeze via crossterm-poll (CLOSED, 11 comments)](https://github.com/Hmbown/CodeWhale/issues/1812)**  
   *Intermittent complete freeze on Windows 11.* Two confirmed events with thread-state analysis. Closed now, but served as a key trace for the ongoing Windows platform stability work.

4. **[#1607 — Token cost estimates: add CNY/other currencies (CLOSED, 7 comments)](https://github.com/Hmbown/CodeWhale/issues/1607)**  
   *Request for renminbi (CNY) and other currency units in cost calculations.* Moderate traction; indicates growing non-English-speaking user base needing localized financial UX.

5. **[#2261 — TUI crash leaks input to PowerShell (CLOSED, 6 comments)](https://github.com/Hmbown/CodeWhale/issues/2261)**  
   *On Windows, after TUI crash, keystrokes escape to PowerShell host.* Potentially dangerous (accidental command execution). Multiple reproductions by community; closed suggests fix applied.

6. **[#1678 — Feature: in-app update checker + GitHub link (CLOSED, 5 comments)](https://github.com/Hmbown/CodeWhale/issues/1678)**  
   *Request for built-in version-check and update mechanism.* Common for terminal tools; lack of this pushes users to manual repo-check.

7. **[#1835 — Windows IME composition deadlock (CLOSED, 5 comments)](https://github.com/Hmbown/CodeWhale/issues/1835)**  
   *Chinese IME (Sogou) causes input to become completely unresponsive.* Affects CJK users severely. Closed; likely fixed with IME event-handling changes.

8. **[#1067 — glibc 2.38 dependency blocks older Linux (CLOSED, 4 comments)](https://github.com/Hmbown/CodeWhale/issues/1067)**  
   *Ubuntu 22.04 (glibc 2.35) cannot run binary.* Server deployment blocker; community wants broader distro compatibility.

9. **[#3490 — Dead-code inventory and follow-up cleanup (OPEN, 4 comments)](https://github.com/Hmbown/CodeWhale/issues/3490)**  
   *Maintainer-led audit of `allow(dead_code)` markers and stale comments.* Indicates health-focused refactoring before v0.9 expansion.

10. **[#1512 — Mouse scroll only shows user messages (OPEN, 4 comments)](https://github.com/Hmbown/CodeWhale/issues/1512)**  
    *Scrolling cannot view model output context.* Basic UX gap; affects daily usage for review-heavy workflows.

## 4. Key PR Progress (Top 10 merged or active)

1. **[#4332 — v0.8.68 TUI state and routing truthful fix (MERGED)](https://github.com/Hmbown/CodeWhale/pull/4332)**  
   *Release-blocker repair batch.* Stopship fix: prevents blank/malformed provider config from showing as "configured"; restores truthful auth and model availability in the TUI.

2. **[#4087 — Split hooks config and executor modules (OPEN)](https://github.com/Hmbown/CodeWhale/pull/4087)**  
   *Architecture refactor.* Moves hook definitions to `hooks/config.rs`, executor to separate sub-module. Improves reviewability of hooks policy changes.

3. **[#4084 — Reject retired profile loadout aliases (MERGED)](https://github.com/Hmbown/CodeWhale/pull/4084)**  
   *Cleanup.* Removes old `model_class_hint` / `route_tier` fields; enforces canonical `loadout` field for round-trip safety.

4. **[#4044 — Localize dynamic welcome steps (MERGED)](https://github.com/Hmbown/CodeWhale/pull/4044)**  
   *i18n.* First-run welcome screen now localized through existing `MessageId` registry; `zh-Hant` locale also covered.

5. **[#3902 — Fix five render/input hot paths (MERGED)](https://github.com/Hmbown/CodeWhale/pull/3902)**  
   *Performance.* Each commit fixes one of #3896–#3900: double-sidebar computation, redundant event redraws, history re-render on idle, pin-keyboard-per-frame degradation, and search heap allocation. Four follow-up regression fixes included.

6. **[#3969 — Per-sub-agent provider routing (MERGED, held)](https://github.com/Hmbown/CodeWhale/pull/3969)**  
   *Fleet feature.* But held for v0.8.68 fleet lane; needs rebase through fleet-profile fields rather than current spawn path. Being tracked as #4137.

7. **[#3818 — Expand active tool run summaries (MERGED)](https://github.com/Hmbown/CodeWhale/pull/3818)**  
   *UX fix.* Dense tool-run expansion now includes in-flight entries; adds regression test for toggle-before-flush edge case.

8. **[#3761 — Defer startup maintenance cleanup (MERGED)](https://github.com/Hmbown/CodeWhale/pull/3761)**  
   *Performance/responsiveness.* Moves stale-tool-output pruning and old-session cleanup off the synchronous interactive path into a delayed background thread.

9. **[#4088 — Preserve native selection without mouse capture (MERGED)](https://github.com/Hmbown/CodeWhale/pull/4088)**  
   *Windows UX.* Fixes #4026: leaves `alternate-scroll` off when `--no-mouse-capture` is set, so native drag-selection works reliably on Windows hosts.

10. **[#4372 — Preserve inline task text for skills (MERGED)](https://github.com/Hmbown/CodeWhale/pull/4372)**  
    *Skills UX.* Ensures `$<skill> do X` and `/<skill> do X` dispatch trailing task text in the same turn; keeps bare `$<skill>` armed for next user message.

## 5. Feature Request Trends
- **Monetary localization:** Multiple requests (e.g., #1607) for adding non-USD currency units (CNY, JPY, EUR) to token-cost estimation UI. Indicates an increasingly global—and cost-conscious—user base.
- **In-app update management:** #1678 requests a built-in version-check and auto-update mechanism plus a GitHub link. Common for CLI tools; absence forces manual repo monitoring.
- **Cockpit/command visibility:** A set of issues (#1887, #1889, #1890, #1892) push for slash commands to be more discoverable, with docked sidebar output, command palette, and i18n help. This reflects a need for power-user workflows to feel less like "invisible side effects."
- **Spatial workbench routing:** #1892 advocates routing goal/task/note commands into a spatial workbench panel instead of scrollback — a move toward persistent session management akin to IDE features.

## 6. Developer Pain Points
- **Windows stability is the #1 recurring theme:** Issues #1812 (crossterm-poll freeze), #2261 (crash-to-PowerShell leak), and #1835 (IME deadlock) all target Windows. Even though closed, the pattern is clear: Windows TUI reliability has been a persistent obstacle for months.
- **glibc version lockout (#1067):** The binary requires glibc ≥2.38, excluding Ubuntu 22.04 LTS and older Enterprise Linux. This blocks CI/CD adoption on standard server images.
- **Rendering/formatting defects:** Several issues report display truncation (#864), wrapping artifacts on copy (#1853), and scrolling that hides model output (#1512). These basic rendering bugs degrade daily usability.
- **Large monoliths harming contribution velocity:** Issues #3306–#3314 all document the same pain — god objects (`App` struct with ~150 fields, `RuntimeThreadManager` at ~2,400 lines, `run_event_loop` with three sub-monoliths) make the codebase hard to navigate, test, and merge into. The maintainer is actively splitting these, but the technical debt is substantial.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/xiehd77-del/agents-radar).*